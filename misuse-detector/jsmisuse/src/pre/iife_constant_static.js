const fs = require("fs");
const { parse } = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const generate = require("@babel/generator").default;
const beautify = require("js-beautify").js;

// 静态提取数组字面量值
function extractArrayValueStatically(arrayExpression) {
  try {
    if (arrayExpression.type !== "ArrayExpression") {
      return {
        success: false,
        error: "Not an array expression",
        originalCode: "unknown",
      };
    }

    const elements = [];
    let hasComplexElement = false;

    for (const element of arrayExpression.elements) {
      if (!element) {
        elements.push(null); // sparse array
        continue;
      }

      switch (element.type) {
        case "Literal":
          elements.push(element.value);
          break;
        case "NumericLiteral":
          elements.push(element.value);
          break;
        case "StringLiteral":
          elements.push(element.value);
          break;
        case "BooleanLiteral":
          elements.push(element.value);
          break;
        case "NullLiteral":
          elements.push(null);
          break;
        case "UnaryExpression":
          // 处理简单的一元表达式，如 -1, +1, !true
          if (
            element.operator === "-" &&
            element.argument.type === "NumericLiteral"
          ) {
            elements.push(-element.argument.value);
          } else if (
            element.operator === "+" &&
            element.argument.type === "NumericLiteral"
          ) {
            elements.push(+element.argument.value);
          } else if (
            element.operator === "!" &&
            element.argument.type === "BooleanLiteral"
          ) {
            elements.push(!element.argument.value);
          } else {
            hasComplexElement = true;
            elements.push(`<${element.type}>`);
          }
          break;
        case "ArrayExpression":
          // 递归处理嵌套数组
          const nestedResult = extractArrayValueStatically(element);
          if (nestedResult.success) {
            elements.push(nestedResult.value);
          } else {
            hasComplexElement = true;
            elements.push(`<NestedArray>`);
          }
          break;
        default:
          hasComplexElement = true;
          elements.push(`<${element.type}>`);
          break;
      }
    }

    return {
      success: true,
      value: elements,
      hasComplexElements: hasComplexElement,
      originalCode: generate(arrayExpression).code,
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
      originalCode: "unknown",
    };
  }
}

// 静态分析版本的常量提取函数
function extractConstantValueStatic(code) {
  const ast = parse(code, {
    sourceType: "unambiguous",
    plugins: ["jsx", "typescript"],
    ranges: true,
    locations: true,
    strictMode: false,
    allowImportExportEverywhere: true,
    allowReturnOutsideFunction: true,
  });

  const constantValueMap = {};

  // 1. 处理变量声明
  traverse(ast, {
    VariableDeclaration(path) {
      const node = path.node;
      const declarations = node.declarations;
      for (const declaration of declarations) {
        const id = declaration.id;
        const init = declaration.init;

        if (init && id.type === "Identifier") {
          let extractResult;

          // 根据不同的初始化类型选择合适的提取方法
          if (init.type === "ArrayExpression") {
            extractResult = extractArrayValueStatically(init);
          } else if (
            init.type === "NewExpression" &&
            init.callee.type === "Identifier" &&
            init.callee.name === "Array" &&
            init.arguments.every(
              (arg) => arg.type === "Literal" || arg.type === "NumericLiteral"
            )
          ) {
            // 静态处理 new Array(1,2,3) 形式
            const args = init.arguments.map((arg) => arg.value);
            extractResult = {
              success: true,
              value:
                args.length === 1 && typeof args[0] === "number"
                  ? new Array(args[0])
                  : args,
              originalCode: generate(init).code,
            };
          } else if (
            init.type === "Literal" ||
            init.type === "NumericLiteral" ||
            init.type === "StringLiteral" ||
            init.type === "BooleanLiteral"
          ) {
            // 处理基本字面量
            extractResult = {
              success: true,
              value: [init.value], // 包装成数组以保持一致性
              originalCode: generate(init).code,
            };
          } else {
            // 对于其他复杂表达式，记录但不尝试求值
            extractResult = {
              success: false,
              error: "Complex expression - static analysis only",
              originalCode: generate(init).code,
            };
          }

          if (extractResult.success) {
            const position = {
              start: {
                line: node.loc.start.line,
                column: node.loc.start.column,
              },
              end: {
                line: node.loc.end.line,
                column: node.loc.end.column,
              },
            };
            if (constantValueMap[id.name] === undefined) {
              constantValueMap[id.name] = [];
            }
            constantValueMap[id.name].push({
              value: extractResult.value,
              position: position,
              type: init.type,
              source: "static-variable-declaration",
              originalCode: extractResult.originalCode,
            });
          }
        }
      }
    },
  });

  // 2. 处理对象表达式中的数组属性
  traverse(ast, {
    ObjectExpression(path) {
      const node = path.node;
      const properties = node.properties;
      for (const property of properties) {
        const key = property.key;
        const value = property.value;
        if (
          key &&
          value &&
          key.type === "Identifier" &&
          value.type === "ArrayExpression"
        ) {
          const extractResult = extractArrayValueStatically(value);
          if (extractResult.success) {
            const position = {
              start: {
                line: node.loc.start.line,
                column: node.loc.start.column,
              },
              end: {
                line: node.loc.end.line,
                column: node.loc.end.column,
              },
            };
            if (constantValueMap[key.name] === undefined) {
              constantValueMap[key.name] = [];
            }
            constantValueMap[key.name].push({
              value: extractResult.value,
              position: position,
              source: "static-object-property",
              originalCode: extractResult.originalCode,
            });
          }
        }
      }
    },
  });

  // 3. 处理赋值表达式
  traverse(ast, {
    ExpressionStatement(path) {
      const node = path.node;
      const expression = node.expression;
      if (expression.type === "AssignmentExpression") {
        const left = expression.left;
        const right = expression.right;
        if (left.type === "Identifier" && right.type === "ArrayExpression") {
          const extractResult = extractArrayValueStatically(right);
          if (extractResult.success) {
            const position = {
              start: {
                line: node.loc.start.line,
                column: node.loc.start.column,
              },
              end: {
                line: node.loc.end.line,
                column: node.loc.end.column,
              },
            };
            if (constantValueMap[left.name] === undefined) {
              constantValueMap[left.name] = [];
            }
            constantValueMap[left.name].push({
              value: extractResult.value,
              position: position,
              source: "static-assignment",
              originalCode: extractResult.originalCode,
            });
          }
        }
      }
    },
  });

  // // 4. 静态分析IIFE - 只记录结构，不执行

  // // 5. 静态分析函数 - 只记录结构，不执行

  // 6. 收集所有数组字面量（包括未命名的）
  traverse(ast, {
    ArrayExpression(path) {
      const node = path.node;
      const extractResult = extractArrayValueStatically(node);
      if (extractResult.success) {
        const position = {
          start: {
            line: node.loc.start.line,
            column: node.loc.start.column,
          },
          end: {
            line: node.loc.end.line,
            column: node.loc.end.column,
          },
        };
        if (constantValueMap["___"] === undefined) {
          constantValueMap["___"] = [];
        }
        constantValueMap["___"].push({
          value: extractResult.value,
          position: position,
          source: "static-array-literal",
          originalCode: extractResult.originalCode,
        });
      }
    },
  });

  // 7. 从对象中提取数组属性（静态版本）
  const additionalEntries = {};

  for (const varName in constantValueMap) {
    const entries = constantValueMap[varName];

    for (const entry of entries) {
      if (
        entry.value &&
        typeof entry.value === "object" &&
        !Array.isArray(entry.value)
      ) {
        // 安全递归函数 - 静态版本
        function extractArraysFromObjectStatic(
          obj,
          prefix,
          visited = new Set(),
          depth = 0,
          maxDepth = 5
        ) {
          if (depth > maxDepth || !obj || typeof obj !== "object") return;
          if (visited.has(obj)) return;
          visited.add(obj);

          for (const key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
              try {
                const fullKey = prefix ? `${prefix}.${key}` : key;
                const value = obj[key];

                if (Array.isArray(value)) {
                  if (!additionalEntries[fullKey]) {
                    additionalEntries[fullKey] = [];
                  }
                  additionalEntries[fullKey].push({
                    value: value,
                    position: entry.position,
                    originalKey: varName,
                    source: "static-object-nested-array",
                  });
                } else if (value && typeof value === "object") {
                  extractArraysFromObjectStatic(
                    value,
                    fullKey,
                    visited,
                    depth + 1,
                    maxDepth
                  );
                }
              } catch (error) {
                continue;
              }
            }
          }
        }

        extractArraysFromObjectStatic(entry.value, varName, new Set());
      }
    }
  }

  // 合并额外发现的条目
  for (const key in additionalEntries) {
    if (constantValueMap[key]) {
      constantValueMap[key] = constantValueMap[key].concat(
        additionalEntries[key]
      );
    } else {
      constantValueMap[key] = additionalEntries[key];
    }
  }

  return constantValueMap;
}

// 静态分析文件的函数
function analyzeFileStatic(filePath) {
  const code = fs.readFileSync(filePath, "utf-8");
  const constants = extractConstantValueStatic(code);
  console.log(
    "Extracted constants (static):",
    JSON.stringify(constants, null, 2)
  );
  return constants;
}

// 导出函数
module.exports = {
  extractConstantValueStatic,
  analyzeFileStatic,
  extractArrayValueStatically,
};
