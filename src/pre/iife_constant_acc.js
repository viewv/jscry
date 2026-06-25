const fs = require("fs");
const { parse } = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const vm = require("vm");

const babel = require('@babel/core');
const t = require('@babel/types');

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

    traverse(ast, {
        VariableDeclaration(path) {
            const node = path.node;
            const declarations = node.declarations;
            for (const declaration of declarations) {
                const id = declaration.id;
                const init = declaration.init;

                // 对所有有初始化值的变量声明都尝试动态分析
                if (init && id.type === "Identifier") {
                    let extractResult;

                    // 根据不同的初始化类型选择合适的提取方法
                    if (init.type === "ArrayExpression") {
                        // 原有的数组字面量处理
                        extractResult = extractArrayValueDynamically(init, code);
                    } else if (init.type === "NewExpression" &&
                        init.callee.type === "Identifier" &&
                        init.callee.name === "Array") {
                        // new Array() 构造函数
                        extractResult = extractArrayValueDynamically(init, code);
                    } else if (init.type === "CallExpression" &&
                        init.callee.type === "Identifier" &&
                        init.callee.name === "Array") {
                        // Array() 函数调用
                        extractResult = extractArrayValueDynamically(init, code);
                    } else {
                        extractResult = extractArrayValueDynamically(init, code);
                    }

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
    });

    traverse(ast, {
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
        }
    });

    traverse(ast, {
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
                        // we don't update the variable value, like a may analyze, use it as another variable
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
    });

    traverse(ast, {
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

            if (isInlineFunction && isDirectCall) {
                console.log("✅ IIFE detected at line:", path.node.loc?.start.line);

                // Track variables that are modified by IIFEs
                const iifeModifiedVars = new Set();

                const iifeScope = path.scope;

                // Track variables that are declared inside the IIFE
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
                const assignmentVisitor = {
                    AssignmentExpression(assignPath) {
                        const left = assignPath.node.left;

                        // Check if the assignment is to a variable from outer scope
                        if (left.type === "Identifier") {
                            // Skip if it's a local variable
                            if (iifeLocalVars.has(left.name)) {
                                return;
                            }

                            const binding = assignPath.scope.getBinding(left.name);

                            // If binding is null or defined in parent scope, it's modifying an outer variable
                            if (!binding || binding.scope !== iifeScope) {
                                iifeModifiedVars.add(left.name);
                            }
                        }

                        // Handle member expressions like array[index] = value
                        if (
                            left.type === "MemberExpression" &&
                            left.object.type === "Identifier"
                        ) {
                            const objName = left.object.name;

                            // Skip if it's a local variable
                            if (iifeLocalVars.has(objName)) {
                                return;
                            }

                            const binding = assignPath.scope.getBinding(objName);

                            if (!binding || binding.scope !== iifeScope) {
                                iifeModifiedVars.add(objName);
                            }
                        }
                    },
                };

                path.traverse(assignmentVisitor);

                // Execute the IIFE in a sandbox to get actual values
                try {
                    // Get all variables that might be referenced by the IIFE
                    const referencedVars = new Set();
                    const outsideVars = new Set();
                    path.traverse({
                        Identifier(idPath) {
                            const name = idPath.node.name;
                            const binding = idPath.scope.getBinding(name);

                            // If it's referencing a variable from outside the IIFE
                            if (!binding || binding.scope !== iifeScope) {
                                referencedVars.add(name);
                            } else {
                                outsideVars.add(name);
                            }
                        },
                    });

                    // Construct the sandbox code and recursively find outside dependence from outside variables add into sandbox
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

                    function findVariableDeclarationsInScope(
                        varName,
                        currentScope,
                        code
                    ) {
                        const declarations = [];
                        let scope = currentScope;

                        // Walk up the scope chain
                        while (scope) {
                            const binding = scope.getBinding(varName);
                            if (binding) {
                                // Found the variable in this scope
                                const path = binding.path;
                                if (path.isVariableDeclarator()) {
                                    declarations.push({
                                        type: "declaration",
                                        node: path.node,
                                        code: code.slice(path.node.start, path.node.end),
                                    });
                                }

                                // Find all assignments in the program that are in the current scope
                                const programPath = scope.getProgramParent().path;
                                programPath.traverse({
                                    AssignmentExpression(assignPath) {
                                        const left = assignPath.node.left;
                                        if (left.type === "Identifier" && left.name === varName) {
                                            // Check if this assignment is in the current scope
                                            // Get the closest function or program scope
                                            let currentPathScope = assignPath.scope;
                                            while (
                                                currentPathScope &&
                                                !currentPathScope.path.isFunction() &&
                                                !currentPathScope.path.isProgram()
                                            ) {
                                                currentPathScope = currentPathScope.parent;
                                            }

                                            // Only include assignments that are directly in the target scope
                                            if (currentPathScope === scope) {
                                                const statement = assignPath.findParent((p) =>
                                                    p.isStatement()
                                                );
                                                if (statement) {
                                                    declarations.push({
                                                        type: "assignment",
                                                        node: statement.node,
                                                        code: code.slice(
                                                            statement.node.start,
                                                            statement.node.end
                                                        ),
                                                    });
                                                }
                                            }
                                        }
                                    },
                                });

                                // We found the binding, no need to look further up the scope chain
                                break;
                            }

                            // Move up to parent scope
                            scope = scope.parent;
                        }
                        return declarations;
                    }

                    // Process all outside variables to build the sandbox

                    const context = vm.createContext(sandbox);

                    // TODO sum in to one delarations to runs in the sandbox
                    for (const varName of outsideVars) {
                        // Skip JavaScript built-ins
                        if (['undefined', 'NaN', 'Infinity', 'console', 'Math', 'JSON', 'Object', 'Array', 'String', 'Number', 'Boolean', 'RegExp', 'Date', 'Error', 'slice'].includes(varName)) {
                            continue;
                        }

                        // Find declarations for this variable
                        const declarations = findVariableDeclarationsInScope(varName, iifeScope, code);

                        if (declarations.length > 0) {
                            // Add all declarations to our sandbox preparation code
                            for (const decl of declarations) {
                                try {
                                    // Execute the declaration in the sandbox context
                                    const varValue = vm.runInContext(decl.code, context, { timeout: 100 });
                                    sandbox[varName] = varValue;
                                } catch (error) {
                                    //console.warn(`Error adding ${varName} to sandbox:`, error.message);
                                }
                            }
                        }
                    }

                    // Now execute the IIFE in the sandbox
                    try {
                        let iifeCode;
                        if (path.parent && path.parent.type === 'ExpressionStatement') {
                            // 如果IIFE是一个表达式语句，提取整个表达式
                            iifeCode = code.slice(path.parent.start, path.parent.end);
                        } else {
                            // 否则，确保包装为表达式
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
                        // Execute the IIFE in the sandbox context
                        sandbox.globalThis = sandbox;
                        const context = vm.createContext(sandbox);

                        // const result = vm.runInContext(iifeCode, context);
                        const result = vm.runInContext(transformedCode, context, { timeout: 100 });

                        // 收集返回值
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

                        // 从 __trace 对象中获取所有追踪到的变量
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

                        // Check for modified variables
                        for (const varName of outsideVars) {
                            if (sandbox[varName] !== undefined) {

                                // Add the modified value to our constantValueMap
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
                        // console.error("Error executing IIFE in sandbox:", error);
                    }
                } catch (error) {
                    // console.error("Error during dynamic analysis:", error);
                }
            }
        },
    });

    traverse(ast, {
        Function(path) {
            const node = path.node;
            const functionNode = path.node
            // assume the function don't have any side effect and non params
            if (node.params.length === 0) {
                // import the required variables first
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
                const assignmentVisitor = {
                    AssignmentExpression(assignPath) {
                        const left = assignPath.node.left;
                        // Check if the assignment is to a variable from outer scope
                        if (left.type === "Identifier") {
                            // Skip if it's a local variable
                            if (functionLocalVars.has(left.name)) {
                                return;
                            }
                            const binding = assignPath.scope.getBinding(left.name);
                            // If binding is null or defined in parent scope, it's modifying an outer variable
                            if (!binding || binding.scope !== functionScope) {
                                functionModifiedVars.add(left.name);
                            }
                        }

                        // Handle member expressions like array[index] = value
                        if (
                            left.type === "MemberExpression" &&
                            left.object.type === "Identifier"
                        ) {
                            const objName = left.object.name;
                            // Skip if it's a local variable
                            if (functionLocalVars.has(objName)) {
                                return;
                            }
                            const binding = assignPath.scope.getBinding(objName);
                            if (!binding || binding.scope !== functionScope) {
                                functionModifiedVars.add(objName);
                            }
                        }
                    }
                }

                path.traverse(assignmentVisitor);

                try {
                    const referencedVars = new Set();
                    const outsideVars = new Set();
                    path.traverse({
                        Identifier(idPath) {
                            const name = idPath.node.name;
                            const binding = idPath.scope.getBinding(name);

                            // If it's referencing a variable from outside the function
                            if (!binding || binding.scope !== functionScope) {
                                referencedVars.add(name);
                            } else {
                                outsideVars.add(name);
                            }
                        }
                    });

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

                    function findVariableDeclarationsInScope(varName, currentScope, code, targetFunctionNode) {
                        const declarations = [];
                        const targetFunctionStart = targetFunctionNode ? targetFunctionNode.start : Infinity;

                        const programPath = currentScope.getProgramParent().path;

                        programPath.traverse({
                            // 查找对象属性定义
                            ObjectProperty(path) {
                                const key = path.node.key;
                                if ((key.type === "Identifier" && key.name === varName) ||
                                    (key.type === "Literal" && key.value === varName)) {

                                    // 位置检查：只包含在目标函数之前的定义
                                    if (path.node.start < targetFunctionStart) {
                                        // 直接返回属性值，而不是整个语句
                                        const propertyValue = path.node.value;
                                        declarations.push({
                                            type: "property",
                                            node: propertyValue,  // 只返回值节点
                                            code: code.slice(propertyValue.start, propertyValue.end),  // 只提取值的代码
                                            position: path.node.start
                                        });
                                    }
                                }
                            },

                            // 查找变量声明
                            VariableDeclarator(path) {
                                if (path.node.id.type === "Identifier" && path.node.id.name === varName) {
                                    if (path.node.start < targetFunctionStart) {
                                        // 对于变量声明，返回初始化值
                                        const initValue = path.node.init;
                                        if (initValue) {
                                            declarations.push({
                                                type: "declaration",
                                                node: initValue,  // 返回初始化值节点
                                                code: code.slice(initValue.start, initValue.end),
                                                position: path.node.start
                                            });
                                        }
                                    }
                                }
                            },

                            // 查找赋值表达式
                            AssignmentExpression(path) {
                                const left = path.node.left;
                                if (left.type === "Identifier" && left.name === varName) {
                                    if (path.node.start < targetFunctionStart) {
                                        // 对于赋值，返回右侧值
                                        const rightValue = path.node.right;
                                        declarations.push({
                                            type: "assignment",
                                            node: rightValue,  // 返回赋值的右侧值
                                            code: code.slice(rightValue.start, rightValue.end),
                                            position: path.node.start
                                        });
                                    }
                                }
                            }
                        });

                        // 按位置排序，返回最新的定义
                        declarations.sort((a, b) => b.position - a.position);

                        return declarations;
                    }

                    // Process all outside variables to build the sandbox
                    const context = vm.createContext(sandbox);

                    for (const varName of referencedVars) {
                        // Skip JavaScript built-ins
                        if (['undefined', 'NaN', 'Infinity', 'console', 'Math', 'JSON', 'Object', 'Array', 'String', 'Number', 'Boolean', 'RegExp', 'Date', 'Error', 'slice'].includes(varName)) {
                            continue;
                        }
                        // Find declarations for this variable
                        const declarations = findVariableDeclarationsInScope(
                            varName,
                            path.scope,
                            code,
                            functionNode  // 传递目标函数节点
                        );
                        if (declarations.length > 0) {
                            // 只使用第一个声明（最深层的）
                            const decl = declarations[0];
                            try {
                                const declarationCode = `${varName} = ${decl.code.trim()};`;
                                vm.runInContext(declarationCode, context, { timeout: 100 });
                            } catch (error) {
                                // console.warn(`Error adding ${varName} to sandbox:`, error.message);
                            }
                        }
                    }

                    // Now execute the function in the sandbox
                    try {
                        // wrap the function into IIFE and execute it
                        const iifeCode = `(${code.slice(node.start, node.end)})();`;

                        const transformedResult = babel.transformSync(iifeCode, {
                            plugins: [createVariableTrackerPlugin()],
                            parserOpts: {
                                allowReturnOutsideFunction: true
                            }
                        });

                        const transformedCode = transformedResult.code;

                        // Execute the IIFE in the sandbox context
                        sandbox.globalThis = sandbox;
                        // const context = vm.createContext(sandbox);

                        const result = vm.runInContext(transformedCode, context, { timeout: 100 });

                        // 收集返回值
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

                        // 从 __trace 对象中获取所有追踪到的变量
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

                        // Check for modified variables
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
                                })
                            }
                        }
                        console.log("Dynamic analysis completed.");
                    } catch (error) {
                        // console.error("Error executing function in sandbox:", error);
                    }
                } catch (error) {
                    // console.error("Error during dynamic analysis:", error);
                }
            }
        }
    });

    // any arrays maybe unknown varname
    traverse(ast, {
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
