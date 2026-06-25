const { parentPort, workerData } = require('worker_threads');
const vm = require('vm');
const babel = require('@babel/core');
const t = require('@babel/types');

// Import the variable tracker plugin
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

// Worker function to execute dynamic analysis
function executeDynamicAnalysis(task) {
    const { type, code, dependencies, nodeInfo } = task;

    try {
        // Create sandbox with basic globals
        const vmSandbox = {
            Math: Math,
            parseInt: parseInt,
            parseFloat: parseFloat,
            Number: Number,
            String: String,
            Boolean: Boolean,
            Array: Array,
            Object: Object,
            undefined: undefined,
            NaN: NaN,
            Infinity: Infinity
        };

        // Create VM context first
        vmSandbox.globalThis = vmSandbox;
        const context = vm.createContext(vmSandbox);

        // Process dependencies and add them to sandbox
        for (const [varName, varCode] of Object.entries(dependencies)) {
            try {
                // Skip JavaScript built-ins
                if (['undefined', 'NaN', 'Infinity', 'console', 'Math', 'JSON', 'Object', 'Array', 'String', 'Number', 'Boolean', 'RegExp', 'Date', 'Error', 'slice'].includes(varName)) {
                    continue;
                }

                // Execute dependency declaration in context
                const declarationCode = `${varName} = ${varCode.trim()};`;
                vm.runInContext(declarationCode, context, { timeout: 100 });
            } catch (error) {
                //console.warn(`Error adding dependency ${varName} to sandbox:`, error.message);
            }
        }

        // Transform code with variable tracker
        const transformedResult = babel.transformSync(code, {
            plugins: [createVariableTrackerPlugin()],
            parserOpts: {
                allowReturnOutsideFunction: true,
                strictMode: false,
                allowImportExportEverywhere: true
            }
        });

        const transformedCode = transformedResult.code;

        // Execute with timeout
        const result = vm.runInContext(transformedCode, context, {
            timeout: 1000,  // 增加超时时间
            displayErrors: false
        });

        // Collect results
        const analysisResult = {
            success: true,
            type,
            nodeInfo,
            returnValue: result,
            tracedVariables: vmSandbox.globalThis?.__trace || {},
            modifiedVariables: {}
        };

        // Collect modified variables (variables that were changed during execution)
        for (const [varName, value] of Object.entries(vmSandbox)) {
            if (value !== undefined &&
                !['Math', 'parseInt', 'parseFloat', 'Number', 'String', 'Boolean', 'Array', 'Object', 'globalThis', '__trace', 'undefined', 'NaN', 'Infinity'].includes(varName) &&
                dependencies.hasOwnProperty(varName)) {
                // Only include if the value has changed from the original dependency
                analysisResult.modifiedVariables[varName] = value;
            }
        }

        return analysisResult;
    } catch (error) {
        return {
            success: false,
            type,
            nodeInfo,
            error: error.message,
            stack: error.stack
        };
    }
}

// Listen for messages from main thread
parentPort.on('message', (task) => {
    const result = executeDynamicAnalysis(task);
    parentPort.postMessage(result);
});