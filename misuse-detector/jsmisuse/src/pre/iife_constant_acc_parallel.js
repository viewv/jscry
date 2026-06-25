const fs = require("fs");
const { parse } = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const WorkerPool = require('./worker/worker-pool');

class ParallelDynamicAnalyzer {
    constructor(maxWorkers) {
        this.workerPool = new WorkerPool(maxWorkers);
        this.constantValueMap = {};
    }

    async extractConstantValue(code) {
        const ast = parse(code, {
            sourceType: "unambiguous",
            plugins: ["jsx", "typescript"],
            ranges: true,
            locations: true,
            strictMode: false,
            allowImportExportEverywhere: true,
            allowReturnOutsideFunction: true
        });

        this.constantValueMap = {};

        // First pass: collect static analysis results
        this.performStaticAnalysis(ast, code);

        // Second pass: collect dynamic analysis tasks
        const dynamicTasks = [];
        this.collectDynamicTasks(ast, code, dynamicTasks);

        // Execute dynamic tasks in parallel
        if (dynamicTasks.length > 0) {
            console.log(`🚀 Executing ${dynamicTasks.length} dynamic analysis tasks in parallel...`);
            const results = await this.workerPool.executeParallel(dynamicTasks);
            this.processDynamicResults(results);
        }

        return this.constantValueMap;
    }

    performStaticAnalysis(ast, code) {
        const self = this;

        // 第一个traverse：处理VariableDeclaration
        traverse(ast, {
            VariableDeclaration(path) {
                const node = path.node;
                const declarations = node.declarations;
                for (const declaration of declarations) {
                    const id = declaration.id;
                    const init = declaration.init;

                    if (init && id.type === "Identifier") {
                        let extractResult = self.extractArrayValueDynamically(init, code);

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
                            if (self.constantValueMap[id.name] === undefined) {
                                self.constantValueMap[id.name] = [];
                            }
                            self.constantValueMap[id.name].push({
                                value: extractResult.value,
                                position: position,
                                type: init.type
                            });
                        }
                    }
                }
            }
        });

        // 第二个traverse：处理ObjectExpression
        traverse(ast, {
            ObjectExpression(path) {
                const node = path.node;
                const properties = node.properties;
                for (const property of properties) {
                    const key = property.key;
                    const value = property.value;
                    if (key && value && key.type === "Identifier" && value.type === "ArrayExpression") {
                        const extractResult = self.extractArrayValueDynamically(value, code);
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
                            if (self.constantValueMap[key.name] === undefined) {
                                self.constantValueMap[key.name] = [];
                            }
                            try {
                                self.constantValueMap[key.name].push({
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

        // 第三个traverse：处理ExpressionStatement
        traverse(ast, {
            ExpressionStatement(path) {
                const node = path.node;
                const expression = node.expression;
                if (expression.type === "AssignmentExpression") {
                    const left = expression.left;
                    const right = expression.right;
                    if (left.type === "Identifier" && right.type === "ArrayExpression") {
                        const extractResult = self.extractArrayValueDynamically(right, code);
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
                            if (self.constantValueMap[left.name] === undefined) {
                                self.constantValueMap[left.name] = [];
                            }
                            try {
                                self.constantValueMap[left.name].push({
                                    value: extractResult.value,
                                    position: position,
                                });
                            } catch (error) {
                                console.error(`Error processing assignment ${left.name}: ${error.message}`);
                            }
                        }
                    }
                }
            }
        });
    }

    collectDynamicTasks(ast, code, tasks) {
        // Fix: Use arrow functions to preserve 'this' context
        const self = this;

        // Collect IIFE tasks
        traverse(ast, {
            CallExpression(path) {
                const node = path.node;
                const callee = node.callee;

                const isInlineFunction =
                    callee.type === "FunctionExpression" ||
                    callee.type === "ArrowFunctionExpression";

                const isDirectCall =
                    path.get("callee").isFunctionExpression() ||
                    path.get("callee").isArrowFunctionExpression();

                if (isInlineFunction && isDirectCall) {
                    const task = self.createIIFETask(path, code);
                    if (task) {
                        tasks.push(task);
                    }
                }
            }
        });

        // Collect Function tasks
        traverse(ast, {
            Function(path) {
                const node = path.node;
                if (node.params.length === 0) {
                    const task = self.createFunctionTask(path, code);
                    if (task) {
                        tasks.push(task);
                    }
                }
            }
        });
    }

    createIIFETask(path, code) {
        const node = path.node;

        try {
            // Collect dependencies
            const dependencies = this.collectDependencies(path, code);

            // Prepare IIFE code
            let iifeCode;
            if (path.parent && path.parent.type === 'ExpressionStatement') {
                iifeCode = code.slice(path.parent.start, path.parent.end);
            } else {
                const callCode = code.slice(path.node.start, path.node.end);
                iifeCode = `(${callCode})`;
            }

            return {
                type: 'iife',
                code: iifeCode,
                dependencies,
                nodeInfo: {
                    start: { line: node.loc.start.line, column: node.loc.start.column },
                    end: { line: node.loc.end.line, column: node.loc.end.column }
                }
            };
        } catch (error) {
            console.warn(`Failed to create IIFE task: ${error.message}`);
            return null;
        }
    }

    createFunctionTask(path, code) {
        const node = path.node;

        try {
            // Collect dependencies
            const dependencies = this.collectDependencies(path, code);

            // Wrap function as IIFE
            const iifeCode = `(${code.slice(node.start, node.end)})();`;

            return {
                type: 'function',
                code: iifeCode,
                dependencies,
                nodeInfo: {
                    start: { line: node.loc.start.line, column: node.loc.start.column },
                    end: { line: node.loc.end.line, column: node.loc.end.column }
                }
            };
        } catch (error) {
            console.warn(`Failed to create function task: ${error.message}`);
            return null;
        }
    }

    collectDependencies(path, code) {
        const dependencies = {};
        const functionNode = path.node;
        const functionScope = path.scope;
        const referencedVars = new Set();
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

        // Find all referenced variables from outside the function
        path.traverse({
            Identifier(idPath) {
                const name = idPath.node.name;
                const binding = idPath.scope.getBinding(name);

                // If it's referencing a variable from outside the function
                if (!binding || binding.scope !== functionScope) {
                    referencedVars.add(name);
                }
            }
        });

        // Collect variable declarations for each referenced variable
        for (const varName of referencedVars) {
            // Skip JavaScript built-ins
            if (['undefined', 'NaN', 'Infinity', 'console', 'Math', 'JSON', 'Object', 'Array', 'String', 'Number', 'Boolean', 'RegExp', 'Date', 'Error', 'slice'].includes(varName)) {
                continue;
            }

            const declarations = this.findVariableDeclarationsInScope(varName, path.scope, code, functionNode);
            if (declarations.length > 0) {
                dependencies[varName] = declarations[0].code;
            }
        }

        return dependencies;
    }

    findVariableDeclarationsInScope(varName, currentScope, code, targetFunctionNode) {
        const declarations = [];
        const targetFunctionStart = targetFunctionNode ? targetFunctionNode.start : Infinity;

        const programPath = currentScope.getProgramParent().path;

        programPath.traverse({
            // 查找对象属性定义
            ObjectProperty(path) {
                const key = path.node.key;
                if ((key.type === "Identifier" && key.name === varName) ||
                    (key.type === "Literal" && key.value === varName)) {

                    if (path.node.start < targetFunctionStart) {
                        const propertyValue = path.node.value;
                        declarations.push({
                            type: "property",
                            node: propertyValue,
                            code: code.slice(propertyValue.start, propertyValue.end),
                            position: path.node.start
                        });
                    }
                }
            },

            // 查找变量声明
            VariableDeclarator(path) {
                if (path.node.id.type === "Identifier" && path.node.id.name === varName) {
                    if (path.node.start < targetFunctionStart) {
                        const initValue = path.node.init;
                        if (initValue) {
                            declarations.push({
                                type: "declaration",
                                node: initValue,
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
                        const rightValue = path.node.right;
                        declarations.push({
                            type: "assignment",
                            node: rightValue,
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

    processDynamicResults(results) {
        for (const result of results) {
            if (!result.success) {
                console.warn(`Dynamic analysis failed: ${result.error}`);
                continue;
            }

            const { type, nodeInfo, returnValue, tracedVariables, modifiedVariables } = result;

            // Process return value
            if (returnValue !== undefined) {
                const returnVarName = `__${type}_return_${nodeInfo.start.line}_${nodeInfo.start.column}`;
                if (this.constantValueMap[returnVarName] === undefined) {
                    this.constantValueMap[returnVarName] = [];
                }
                this.constantValueMap[returnVarName].push({
                    value: returnValue,
                    position: nodeInfo,
                    source: `${type}-return`
                });
            }

            // Process traced variables
            for (const [varName, value] of Object.entries(tracedVariables)) {
                if (value !== undefined && !['Math', 'parseInt', 'parseFloat', 'Number', 'String', 'Boolean', 'Array', 'Object'].includes(varName)) {
                    if (this.constantValueMap[varName] === undefined) {
                        this.constantValueMap[varName] = [];
                    }
                    this.constantValueMap[varName].push({
                        value: value,
                        position: nodeInfo,
                        source: `dynamic-${type}-traced`
                    });
                }
            }

            // Process modified variables
            for (const [varName, value] of Object.entries(modifiedVariables)) {
                if (this.constantValueMap[varName] === undefined) {
                    this.constantValueMap[varName] = [];
                }
                this.constantValueMap[varName].push({
                    value: value,
                    position: nodeInfo,
                    source: `dynamic-${type}`
                });
            }
        }
    }

    extractArrayValueDynamically(arrayExpression, code) {
        // Copy the existing extractArrayValueDynamically function
        let arrayCode = 'unknown';

        try {
            arrayCode = code.slice(arrayExpression.start, arrayExpression.end);
            const vm = require('vm');
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
            const result = vm.runInContext(arrayCode, context, { timeout: 100 });

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

    async shutdown() {
        await this.workerPool.shutdown();
    }
}

// Export functions
async function extractConstantValueParallel(code, maxWorkers) {
    const analyzer = new ParallelDynamicAnalyzer(maxWorkers);
    try {
        const result = await analyzer.extractConstantValue(code);
        return result;
    } finally {
        await analyzer.shutdown();
    }
}

async function analyzeFileParallel(filePath, maxWorkers) {
    const code = fs.readFileSync(filePath, "utf-8");
    const constants = await extractConstantValueParallel(code, maxWorkers);
    console.log("Extracted constants:", JSON.stringify(constants, null, 2));
    return constants;
}

module.exports = {
    ParallelDynamicAnalyzer,
    extractConstantValueParallel,
    analyzeFileParallel,
};
