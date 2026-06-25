const fs = require("fs");
const { parse } = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const vm = require("vm");

// Register global handler to prevent unhandled promise rejections inside Node VM from crashing the process
process.on('unhandledRejection', (reason, promise) => {
    // Silently ignore or log internally to prevent process exit
});

const babel = require('@babel/core');
const t = require('@babel/types');

const MAX_LINES_FOR_DYNAMIC_ANALYSIS = 100;
const MIN_LINES_FOR_DYNAMIC_ANALYSIS = 5;

const generate = require('@babel/generator').default;

function shouldSkipFunctionAnalysis(functionPath) {
    try {
        const rawCode = generate(functionPath.node).code;
        const lineCount = rawCode.split('\n').length;

        if (lineCount > MAX_LINES_FOR_DYNAMIC_ANALYSIS || lineCount < MIN_LINES_FOR_DYNAMIC_ANALYSIS) {
            console.log(`Skipping dynamic analysis for function`);
            return true;
        }

        return false;
    } catch (fallbackError) {
        console.warn('Failed to calculate function size, proceeding with analysis:', fallbackError.message);
        return false;
    }
}



// 创建 Babel 插件来转换 AST
function createVariableTrackerPlugin() {
    return {
        visitor: {
            VariableDeclarator(path) {
                if (path.node._generatedByTracePlugin) return;

                if (path.node.id.type === 'Identifier' && path.node.init) {
                    const varName = path.node.id.name;

                    const traceCode = t.expressionStatement(
                        t.assignmentExpression(
                            '=',
                            t.memberExpression(
                                t.memberExpression(
                                    t.identifier('globalThis'),
                                    t.identifier('__trace')
                                ),
                                t.identifier(varName)
                            ),
                            t.identifier(varName)
                        )
                    );
                    traceCode._generatedByTracePlugin = true;

                    const ensureTrace = t.expressionStatement(
                        t.assignmentExpression(
                            '||=',
                            t.memberExpression(
                                t.identifier('globalThis'),
                                t.identifier('__trace')
                            ),
                            t.objectExpression([])
                        )
                    );
                    ensureTrace._generatedByTracePlugin = true;

                    // 插入到父级语句之后
                    const statement = path.findParent(p => p.isStatement());
                    if (statement) {
                        statement.insertAfter([ensureTrace, traceCode]);
                    }
                }
            },

            AssignmentExpression(path) {
                if (path.node._generatedByTracePlugin) return;

                if (path.node.left.type === 'Identifier') {
                    const varName = path.node.left.name;

                    const traceCode = t.expressionStatement(
                        t.assignmentExpression(
                            '=',
                            t.memberExpression(
                                t.memberExpression(
                                    t.identifier('globalThis'),
                                    t.identifier('__trace')
                                ),
                                t.identifier(varName)
                            ),
                            t.identifier(varName)
                        )
                    );
                    traceCode._generatedByTracePlugin = true;

                    const ensureTrace = t.expressionStatement(
                        t.assignmentExpression(
                            '||=',
                            t.memberExpression(
                                t.identifier('globalThis'),
                                t.identifier('__trace')
                            ),
                            t.objectExpression([])
                        )
                    );
                    ensureTrace._generatedByTracePlugin = true;

                    const statement = path.findParent(p => p.isStatement());
                    if (statement) {
                        statement.insertAfter([ensureTrace, traceCode]);
                    }
                }
            }
        }
    };
}


function extractArrayValueDynamically(arrayExpression, code) {
    let arrayCode = 'unknown'; // 在外部声明并初始化默认值

    try {
        // 提取数组表达式的代码片段
        arrayCode = code.slice(arrayExpression.start, arrayExpression.end);

        // 创建一个安全的执行环境
        const vm = require('vm');
        const sandbox = {
            // 添加一些基本的全局对象，防止执行出错
            Math: Math,
            parseInt: parseInt,
            parseFloat: parseFloat,
            Number: Number,
            String: String,
            Boolean: Boolean,
            Array: Array,
            Object: Object
        };

        const context = vm.createContext(sandbox);

        // 动态执行数组表达式
        const result = vm.runInContext(arrayCode, context, { timeout: 100 });

        // 验证结果是否为数组
        if (Array.isArray(result)) {
            return {
                success: true,
                value: result,
                originalCode: arrayCode
            };
        } else {
            return {
                success: false,
                error: 'Result is not an array',
                originalCode: arrayCode
            };
        }

    } catch (error) {
        return {
            success: false,
            error: error.message,
            originalCode: arrayCode
        };
    }
}

// try to extract the constant value from the iife code
function extractConstantValue(code) {
    const ast = parse(code, {
        sourceType: "unambiguous",
        plugins: ["jsx", "typescript"],
        ranges: true,
        locations: true,
        strictMode: false,
        allowImportExportEverywhere: true,
        allowReturnOutsideFunction: true
    });

    const constantValueMap = Object.create(null);

    const definitionsMap = Object.create(null);

    traverse(ast, {
        VariableDeclarator(path) {
            if (path.node.id.type === "Identifier") {
                const name = path.node.id.name;
                const initValue = path.node.init;
                if (initValue) {
                    if (!definitionsMap[name]) definitionsMap[name] = [];
                    definitionsMap[name].push({
                        type: "declaration",
                        node: initValue,
                        code: code.slice(initValue.start, initValue.end),
                        start: path.node.start,
                        path: path
                    });
                }
            }
        },
        AssignmentExpression(path) {
            const left = path.node.left;
            if (left.type === "Identifier") {
                const name = left.name;
                const rightValue = path.node.right;
                if (!definitionsMap[name]) definitionsMap[name] = [];
                definitionsMap[name].push({
                    type: "assignment",
                    node: rightValue,
                    code: code.slice(rightValue.start, rightValue.end),
                    start: path.node.start,
                    path: path
                });
            }
        },
        ObjectProperty(path) {
            const key = path.node.key;
            let name = null;
            if (key.type === "Identifier") name = key.name;
            else if (key.type === "Literal") name = String(key.value);
            
            if (name) {
                const propertyValue = path.node.value;
                if (!definitionsMap[name]) definitionsMap[name] = [];
                definitionsMap[name].push({
                    type: "property",
                    node: propertyValue,
                    code: code.slice(propertyValue.start, propertyValue.end),
                    start: path.node.start,
                    path: path
                });
            }
        }
    });

    function findVariableDeclarationsInScope(varName, currentScope, code, targetFunctionNode) {
        const targetFunctionStart = targetFunctionNode ? targetFunctionNode.start : Infinity;
        const allDefs = definitionsMap[varName] || [];
        const declarations = [];

        // Walk up the scope chain
        let scope = currentScope;
        while (scope) {
            const binding = scope.getBinding(varName);
            if (binding) {
                const bindingStart = binding.path.node.start;
                
                // Add the main declaration if matches targetFunctionStart criteria
                const decls = allDefs.filter(d => d.type === "declaration" && d.start === bindingStart && d.start < targetFunctionStart);
                declarations.push(...decls);

                // Add assignments in the target scope
                const assigns = allDefs.filter(d => {
                    if (d.type !== "assignment") return false;
                    if (d.start >= targetFunctionStart) return false;
                    
                    let currentPathScope = d.path.scope;
                    while (
                        currentPathScope &&
                        !currentPathScope.path.isFunction() &&
                        !currentPathScope.path.isProgram()
                    ) {
                        currentPathScope = currentPathScope.parent;
                    }
                    return currentPathScope === scope;
                });
                declarations.push(...assigns);
                
                break;
            }
            scope = scope.parent;
        }

        // Fallback to all definitions before targetFunctionStart if no binding exists (e.g. global undeclared variables)
        if (declarations.length === 0) {
            const fallbackDefs = allDefs.filter(d => d.start < targetFunctionStart);
            declarations.push(...fallbackDefs);
        }

        // Sort by position returning latest definition
        declarations.sort((a, b) => b.start - a.start);
        return declarations.map(d => ({
            type: d.type,
            node: d.node,
            code: d.code,
            position: d.start
        }));
    }

    traverse(ast, {
        VariableDeclaration(path) {
            const node = path.node;
            const declarations = node.declarations;
            for (const declaration of declarations) {
                const id = declaration.id;
                const init = declaration.init;

                // 对所有有初始化值的变量声明都尝试动态分析
                if (init && id.type === "Identifier") {
                    const extractResult = extractArrayValueDynamically(init, code);

                    if (extractResult.success && Array.isArray(extractResult.value)) {
                        const position = {
                            start: {
                                line: node.loc.start.line,
                                column: node.loc.start.column
                            },
                            end: {
                                line: node.loc.end.line,
                                column: node.loc.end.column
                            }
                        };
                        if (constantValueMap[id.name] === undefined) {
                            constantValueMap[id.name] = [];
                        }
                        constantValueMap[id.name].push({
                            value: extractResult.value,
                            position: position,
                            type: init.type // 记录原始类型便于调试
                        });
                    }
                }
            }
        },

        ObjectExpression(path) {
            const node = path.node;
            const properties = node.properties;
            for (const property of properties) {
                const key = property.key;
                const value = property.value;
                if (key && value && key.type === "Identifier" && value.type === "ArrayExpression") {
                    const extractResult = extractArrayValueDynamically(value, code);
                    if (extractResult.success) {
                        const position = {
                            start: {
                                line: node.loc.start.line,
                                column: node.loc.start.column
                            },
                            end: {
                                line: node.loc.end.line,
                                column: node.loc.end.column
                            }
                        };
                        if (constantValueMap[key.name] === undefined) {
                            constantValueMap[key.name] = [];
                        }
                        try {
                            constantValueMap[key.name].push({
                                value: extractResult.value,
                                position: position,
                            });
                        } catch (error) {
                            console.error(`Error processing object property ${key.name}: ${error.message}`);
                        }
                    }
                }
            }
        },

        ExpressionStatement(path) {
            const node = path.node;
            const expression = node.expression;
            if (expression.type === "AssignmentExpression") {
                const left = expression.left;
                const right = expression.right;
                if (left.type === "Identifier" && right.type === "ArrayExpression") {
                    const extractResult = extractArrayValueDynamically(right, code);
                    if (extractResult.success) {
                        const position = {
                            start: {
                                line: node.loc.start.line,
                                column: node.loc.start.column
                            },
                            end: {
                                line: node.loc.end.line,
                                column: node.loc.end.column
                            }
                        };
                        if (constantValueMap[left.name] === undefined) {
                            constantValueMap[left.name] = [];
                        }
                        try {
                            constantValueMap[left.name].push({
                                value: extractResult.value,
                                position: position,
                            });
                        } catch (error) {
                            console.error(`Error processing object property ${left.name}: ${error.message}`);
                        }
                    }
                }
            }
        },

        CallExpression(path) {
            const node = path.node;
            const callee = node.callee;

            // Detect inline (immediately invoked) function expressions only
            const isInlineFunction =
                callee.type === "FunctionExpression" ||
                callee.type === "ArrowFunctionExpression";

            // Ensure it's not a function called via a variable, e.g. fn();
            const isDirectCall =
                path.get("callee").isFunctionExpression() ||
                path.get("callee").isArrowFunctionExpression();

            if (isInlineFunction && isDirectCall && !shouldSkipFunctionAnalysis(path)) {
                console.log("✅ IIFE detected at line:", path.node.loc?.start.line);

                const iifeModifiedVars = new Set();
                const iifeScope = path.scope;
                const iifeLocalVars = new Set();

                // Find all variable declarations within the IIFE
                path.traverse({
                    VariableDeclaration(declPath) {
                        declPath.node.declarations.forEach((decl) => {
                            if (decl.id.type === "Identifier") {
                                iifeLocalVars.add(decl.id.name);
                            }
                        });
                    },
                });

                // Find all assignments within the IIFE
                path.traverse({
                    AssignmentExpression(assignPath) {
                        const left = assignPath.node.left;

                        if (left.type === "Identifier") {
                            if (iifeLocalVars.has(left.name)) {
                                return;
                            }
                            const binding = assignPath.scope.getBinding(left.name);
                            if (!binding || binding.scope !== iifeScope) {
                                iifeModifiedVars.add(left.name);
                            }
                        }

                        if (
                            left.type === "MemberExpression" &&
                            left.object.type === "Identifier"
                        ) {
                            const objName = left.object.name;
                            if (iifeLocalVars.has(objName)) {
                                return;
                            }
                            const binding = assignPath.scope.getBinding(objName);
                            if (!binding || binding.scope !== iifeScope) {
                                iifeModifiedVars.add(objName);
                            }
                        }
                    },
                });

                // Execute the IIFE in a sandbox to get actual values
                try {
                    const referencedVars = new Set();
                    const outsideVars = new Set();
                    path.traverse({
                        Identifier(idPath) {
                            const name = idPath.node.name;
                            const binding = idPath.scope.getBinding(name);

                            if (!binding || binding.scope !== iifeScope) {
                                referencedVars.add(name);
                            } else {
                                outsideVars.add(name);
                            }
                        },
                    });

                    const sandbox = {
                        Math: Math,
                        parseInt: parseInt,
                        parseFloat: parseFloat,
                        Number: Number,
                        String: String,
                        Boolean: Boolean,
                        Array: Array,
                        Object: Object
                    };

                    const context = vm.createContext(sandbox);

                    for (const varName of outsideVars) {
                        if (['undefined', 'NaN', 'Infinity', 'console', 'Math', 'JSON', 'Object', 'Array', 'String', 'Number', 'Boolean', 'RegExp', 'Date', 'Error', 'slice'].includes(varName)) {
                            continue;
                        }

                        const declarations = findVariableDeclarationsInScope(varName, iifeScope, code);

                        if (declarations.length > 0) {
                            for (const decl of declarations) {
                                try {
                                    const varValue = vm.runInContext(decl.code, context, { timeout: 100 });
                                    sandbox[varName] = varValue;
                                } catch (error) {
                                    // ignore
                                }
                            }
                        }
                    }

                    // Now execute the IIFE in the sandbox
                    try {
                        let iifeCode;
                        if (path.parent && path.parent.type === 'ExpressionStatement') {
                            iifeCode = code.slice(path.parent.start, path.parent.end);
                        } else {
                            const callCode = code.slice(path.node.start, path.node.end);
                            iifeCode = `(${callCode})`;
                        }

                        const transformedResult = babel.transformSync(iifeCode, {
                            plugins: [createVariableTrackerPlugin()],
                            parserOpts: {
                                allowReturnOutsideFunction: true
                            }
                        });

                        const transformedCode = transformedResult.code;
                        sandbox.globalThis = sandbox;
                        const context = vm.createContext(sandbox);

                        const result = vm.runInContext(transformedCode, context, { timeout: 100 });

                        if (result !== undefined) {
                            const returnVarName = `__iife_return_${node.loc.start.line}_${node.loc.start.column}`;
                            if (constantValueMap[returnVarName] === undefined) {
                                constantValueMap[returnVarName] = [];
                            }
                            constantValueMap[returnVarName].push({
                                value: result,
                                position: {
                                    start: { line: node.loc.start.line, column: node.loc.start.column },
                                    end: { line: node.loc.end.line, column: node.loc.end.column }
                                },
                                source: 'iife-return'
                            });
                        }

                        if (sandbox.globalThis && sandbox.globalThis.__trace) {
                            for (const [varName, value] of Object.entries(sandbox.globalThis.__trace)) {
                                if (value !== undefined && !['Math', 'parseInt', 'parseFloat', 'Number', 'String', 'Boolean', 'Array', 'Object'].includes(varName)) {
                                    if (constantValueMap[varName] === undefined) {
                                        constantValueMap[varName] = [];
                                    }
                                    constantValueMap[varName].push({
                                        value: value,
                                        position: {
                                            start: { line: node.loc.start.line, column: node.loc.start.column },
                                            end: { line: node.loc.end.line, column: node.loc.end.column }
                                        },
                                        source: 'dynamic-iife-traced'
                                    });
                                }
                            }
                        }

                        for (const varName of outsideVars) {
                            if (sandbox[varName] !== undefined) {
                                if (constantValueMap[varName] === undefined) {
                                    constantValueMap[varName] = [];
                                }

                                constantValueMap[varName].push({
                                    value: sandbox[varName],
                                    position: {
                                        start: {
                                            line: node.loc.start.line,
                                            column: node.loc.start.column
                                        },
                                        end: {
                                            line: node.loc.end.line,
                                            column: node.loc.end.column
                                        }
                                    },
                                    source: 'dynamic-iife'
                                });
                            }
                        }
                        console.log("Dynamic analysis completed.");
                    } catch (error) {
                        // ignore
                    }
                } catch (error) {
                    // ignore
                }
            }
        },

        Function(path) {
            const node = path.node;
            const functionNode = path.node;
            if (node.params.length === 0 && !shouldSkipFunctionAnalysis(path)) {
                const functionModifiedVars = new Set();
                const functionScope = path.scope;
                const functionLocalVars = new Set();

                // Find all variable declarations within the function
                path.traverse({
                    VariableDeclaration(declPath) {
                        declPath.node.declarations.forEach((decl) => {
                            if (decl.id.type === "Identifier") {
                                functionLocalVars.add(decl.id.name);
                            }
                        });
                    },
                });

                // Find all assignments within the function
                path.traverse({
                    AssignmentExpression(assignPath) {
                        const left = assignPath.node.left;
                        if (left.type === "Identifier") {
                            if (functionLocalVars.has(left.name)) {
                                return;
                            }
                            const binding = assignPath.scope.getBinding(left.name);
                            if (!binding || binding.scope !== functionScope) {
                                functionModifiedVars.add(left.name);
                            }
                        }

                        if (
                            left.type === "MemberExpression" &&
                            left.object.type === "Identifier"
                        ) {
                            const objName = left.object.name;
                            if (functionLocalVars.has(objName)) {
                                return;
                            }
                            const binding = assignPath.scope.getBinding(objName);
                            if (!binding || binding.scope !== functionScope) {
                                functionModifiedVars.add(objName);
                            }
                        }
                    }
                });

                try {
                    const referencedVars = new Set();
                    const outsideVars = new Set();
                    path.traverse({
                        Identifier(idPath) {
                            const name = idPath.node.name;
                            const binding = idPath.scope.getBinding(name);

                            if (!binding || binding.scope !== functionScope) {
                                referencedVars.add(name);
                            } else {
                                outsideVars.add(name);
                            }
                        }
                    });

                    const sandbox = {
                        Math: Math,
                        parseInt: parseInt,
                        parseFloat: parseFloat,
                        Number: Number,
                        String: String,
                        Boolean: Boolean,
                        Array: Array,
                        Object: Object
                    };

                    const context = vm.createContext(sandbox);

                    for (const varName of referencedVars) {
                        if (['undefined', 'NaN', 'Infinity', 'console', 'Math', 'JSON', 'Object', 'Array', 'String', 'Number', 'Boolean', 'RegExp', 'Date', 'Error', 'slice'].includes(varName)) {
                            continue;
                        }
                        const declarations = findVariableDeclarationsInScope(
                            varName,
                            path.scope,
                            code,
                            functionNode
                        );
                        if (declarations.length > 0) {
                            const decl = declarations[0];
                            try {
                                const declarationCode = `${varName} = ${decl.code.trim()};`;
                                vm.runInContext(declarationCode, context, { timeout: 100 });
                            } catch (error) {
                                // ignore
                            }
                        }
                    }

                    // Now execute the function in the sandbox
                    try {
                        const iifeCode = `(${code.slice(node.start, node.end)})();`;

                        const transformedResult = babel.transformSync(iifeCode, {
                            plugins: [createVariableTrackerPlugin()],
                            parserOpts: {
                                allowReturnOutsideFunction: true
                            }
                        });

                        const transformedCode = transformedResult.code;
                        sandbox.globalThis = sandbox;

                        const result = vm.runInContext(transformedCode, context, { timeout: 100 });

                        if (result !== undefined) {
                            const returnVarName = `__function_return_${node.loc.start.line}_${node.loc.start.column}`;
                            if (constantValueMap[returnVarName] === undefined) {
                                constantValueMap[returnVarName] = [];
                            }
                            constantValueMap[returnVarName].push({
                                value: result,
                                position: {
                                    start: { line: node.loc.start.line, column: node.loc.start.column },
                                    end: { line: node.loc.end.line, column: node.loc.end.column }
                                },
                                source: 'function-return'
                            });
                        }

                        if (sandbox.globalThis && sandbox.globalThis.__trace) {
                            for (const [varName, value] of Object.entries(sandbox.globalThis.__trace)) {
                                if (value !== undefined && !['Math', 'parseInt', 'parseFloat', 'Number', 'String', 'Boolean', 'Array', 'Object'].includes(varName)) {
                                    if (constantValueMap[varName] === undefined) {
                                        constantValueMap[varName] = [];
                                    }
                                    constantValueMap[varName].push({
                                        value: value,
                                        position: {
                                            start: { line: node.loc.start.line, column: node.loc.start.column },
                                            end: { line: node.loc.end.line, column: node.loc.end.column }
                                        },
                                        source: 'dynamic-iife-traced'
                                    });
                                }
                            }
                        }

                        for (const varName of referencedVars) {
                            if (sandbox[varName] !== undefined) {
                                if (constantValueMap[varName] === undefined) {
                                    constantValueMap[varName] = [];
                                }
                                constantValueMap[varName].push({
                                    value: sandbox[varName],
                                    position: {
                                        start: {
                                            line: node.loc.start.line,
                                            column: node.loc.start.column
                                        },
                                        end: {
                                            line: node.loc.end.line,
                                            column: node.loc.end.column
                                        }
                                    },
                                    source: 'dynamic-function'
                                });
                            }
                        }
                        console.log("Dynamic analysis completed.");
                    } catch (error) {
                        // ignore
                    }
                } catch (error) {
                    // ignore
                }
            }
        },

        ArrayExpression(path) {
            const node = path.node;
            const extractResult = extractArrayValueDynamically(node, code);
            if (extractResult.success) {
                const position = {
                    start: {
                        line: node.loc.start.line,
                        column: node.loc.start.column
                    },
                    end: {
                        line: node.loc.end.line,
                        column: node.loc.end.column
                    }
                };
                if (constantValueMap["___"] === undefined) {
                    constantValueMap["___"] = [];
                }
                constantValueMap["___"].push({
                    value: extractResult.value,
                    position: position,
                });
            }
        }
    });

    const additionalEntries = Object.create(null);

    for (const varName in constantValueMap) {
        const entries = constantValueMap[varName];

        for (const entry of entries) {
            if (entry.value && typeof entry.value === 'object' && !Array.isArray(entry.value)) {
                // 安全递归函数
                function extractArraysFromObject(obj, prefix, visited = new Set(), depth = 0, maxDepth = 10) {
                    if (depth > maxDepth || !obj || typeof obj !== 'object') return;
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
                                        originalKey: varName
                                    });
                                } else if (value && typeof value === 'object') {
                                    extractArraysFromObject(value, fullKey, visited, depth + 1, maxDepth);
                                }
                            } catch (error) {
                                // avoid the converting error, bypass it
                                continue;
                            }
                        }
                    }
                }

                extractArraysFromObject(entry.value, varName, new Set());
            }
        }
    }

    // Object.assign(constantValueMap, additionalEntries);
    for (const key in additionalEntries) {
        if (constantValueMap[key]) {
            constantValueMap[key] = constantValueMap[key].concat(additionalEntries[key]);
        } else {
            constantValueMap[key] = additionalEntries[key];
        }
    }

    return constantValueMap;
}

// Example usage
function analyzeFile(filePath) {
    const code = fs.readFileSync(filePath, "utf-8");
    const constants = extractConstantValue(code);
    console.log("Extracted constants:", JSON.stringify(constants, null, 2));
    return constants;
}

// Export the functions
module.exports = {
    extractConstantValue,
    analyzeFile,
};
