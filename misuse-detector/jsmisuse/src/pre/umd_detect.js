const fs = require('fs');
const { parse } = require('@babel/parser');
const traverse = require('@babel/traverse').default;

function detectUMD(filePath) {
    const code = fs.readFileSync(filePath, 'utf8');

    const ast = parse(code, {
        sourceType: 'unambiguous',
        plugins: ['jsx', 'typescript'],
        ranges: true,
        locations: true,
    })

    let isUMD = false;

    traverse(ast, {
        CallExpression(path) {
            const node = path.node;
            const callee = node.callee;

            // Detect inline (immediately invoked) function expressions only
            const isInlineFunction =
                callee.type === 'FunctionExpression' || callee.type === 'ArrowFunctionExpression';

            // Ensure it's not a function called via a variable, e.g. fn();
            const isDirectCall = path.get('callee').isFunctionExpression() || path.get('callee').isArrowFunctionExpression();

            if (isInlineFunction && isDirectCall) {
                console.log('✅ IIFE detected at line:', path.node.loc?.start.line);

                // check the IIFE has UMD pattern
                const body = node.callee.body.body;

                // Track detected module systems
                let hasCommonJS = false;
                let hasAMD = false;
                let hasGlobal = false;

                // Helper function to check for module system patterns in any expression
                const checkForModuleSystem = (expr) => {
                    if (!expr) return;

                    // Check for CommonJS pattern
                    if (expr.type === 'BinaryExpression') {
                        // Check for typeof exports/module == 'object'
                        // "object" == typeof exports && "undefined" != typeof module
                        if (expr.left.type === 'UnaryExpression' && expr.left.operator === 'typeof' && expr.left.argument.name === 'exports') {
                            if (expr.right.type === 'StringLiteral' && expr.right.value === 'object') {
                                hasCommonJS = true;
                            }
                        } else if (expr.right.type === 'UnaryExpression' && expr.right.operator === 'typeof' && expr.right.argument.name === 'exports') {
                            if (expr.left.type === 'StringLiteral' && expr.left.value === 'object') {
                                hasCommonJS = true;
                            }
                        }
                        // Check for "undefined" != typeof module
                        if (expr.left.type === 'StringLiteral' && expr.left.value === 'undefined' &&
                            expr.right.type === 'UnaryExpression' && expr.right.operator === 'typeof' && expr.right.argument.name === 'module') {
                            hasCommonJS = true;
                        } else if (expr.right.type === 'StringLiteral' && expr.right.value === 'undefined' &&
                            expr.left.type === 'UnaryExpression' && expr.left.operator === 'typeof' && expr.left.argument.name === 'module') {
                            hasCommonJS = true;
                        }
                    }

                    // Check for AMD pattern
                    if (expr.type === 'BinaryExpression') {
                        // Check for typeof define == 'function'
                        if ((expr.operator === '==' || expr.operator === '===') &&
                            expr.left.type === 'UnaryExpression' &&
                            expr.left.operator === 'typeof' &&
                            expr.left.argument.name === 'define' &&
                            expr.right.type === 'StringLiteral' &&
                            expr.right.value === 'function') {
                            hasAMD = true;
                        } else if ((expr.operator === '==' || expr.operator === '===') &&
                            expr.right.type === 'UnaryExpression' &&
                            expr.right.operator === 'typeof' &&
                            expr.right.argument.name === 'define' &&
                            expr.left.type === 'StringLiteral' &&
                            expr.left.value === 'function') {
                            hasAMD = true;
                        }
                    }

                    // Check for define.amd
                    if (expr.type === 'MemberExpression' &&
                        expr.object.name === 'define' &&
                        expr.property.name === 'amd') {
                        hasAMD = true;
                    }

                    // Check for global assignment (window, global, this, self)
                    if (expr.type === 'AssignmentExpression' &&
                        expr.left.type === 'MemberExpression' &&
                        (expr.left.object.name === 'window' ||
                            expr.left.object.name === 'global' ||
                            expr.left.object.name === 'self' ||
                            expr.left.object.type === 'ThisExpression')) {
                        hasGlobal = true;
                    }

                    // Check for globalThis
                    if (expr.type === 'Identifier' && expr.name === 'globalThis') {
                        hasGlobal = true;
                    }

                    // Recursively check conditional expressions
                    if (expr.type === 'ConditionalExpression') {
                        checkForModuleSystem(expr.test);
                        checkForModuleSystem(expr.consequent);
                        checkForModuleSystem(expr.alternate);
                    }

                    // Check logical expressions (&&, ||)
                    if (expr.type === 'LogicalExpression') {
                        checkForModuleSystem(expr.left);
                        checkForModuleSystem(expr.right);
                    }

                    // Check for expressions in parentheses
                    if (expr.type === 'ParenthesizedExpression') {
                        checkForModuleSystem(expr.expression);
                    }

                    // Check for expressions in sequence expressions
                    if (expr.type === 'SequenceExpression') {
                        expr.expressions.forEach(e => checkForModuleSystem(e));
                    }
                };

                // Process all statements in the IIFE body
                if (Array.isArray(body)) {
                    body.forEach(stmt => {
                        // Check if statements
                        if (stmt.type === 'IfStatement') {
                            checkForModuleSystem(stmt.test);
                            checkForModuleSystem(stmt.consequent);
                            if (stmt.alternate) {
                                checkForModuleSystem(stmt.alternate);
                            }
                        }

                        // Check expression statements
                        if (stmt.type === 'ExpressionStatement') {
                            checkForModuleSystem(stmt.expression);
                        }
                    });
                } else if (body) {
                    // Handle case where body is not an array but exists
                    console.log('⚠️ IIFE body is not an array, trying to process as a single statement');
                    if (body.type === 'IfStatement') {
                        checkForModuleSystem(body.test);
                        checkForModuleSystem(body.consequent);
                        if (body.alternate) {
                            checkForModuleSystem(body.alternate);
                        }
                    } else if (body.type === 'ExpressionStatement') {
                        checkForModuleSystem(body.expression);
                    }
                }

                // A UMD pattern typically checks for at least two module systems
                const systemsDetected = [
                    hasCommonJS ? 'CommonJS' : null,
                    hasAMD ? 'AMD' : null,
                    hasGlobal ? 'Global' : null
                ].filter(Boolean);

                if (systemsDetected.length >= 2) {
                    isUMD = true;
                    console.log('🔍 UMD pattern detected at line:', path.node.loc?.start.line);
                    console.log('   Module systems:', systemsDetected.join(', '));
                }
            }
        }
    });

    return isUMD;
}

module.exports = detectUMD;