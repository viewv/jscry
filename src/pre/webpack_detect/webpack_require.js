const fs = require("fs");
const { parse } = require("@babel/parser");
const traverse = require("@babel/traverse").default;

function detectWebpackRequire(filePath) {
    const code = fs.readFileSync(filePath, "utf8");
    const ast = parse(code, {
        sourceType: "unambiguous",
        plugins: ["jsx", "typescript"],
        ranges: true,
        locations: true,
    });

    let isWebpackRequire = false;
    let module_placeholder = null;
    let loaded_placeholder = null;
    let module_cache_placeholder = null;
    let require_placeholder = null;

    const webpackVarNames = [
        "__webpack_require__"
    ];

    traverse(ast, {
        FunctionDeclaration(path) {
            // must only one parameter
            if (path.node.params.length === 1) {
                const node = path.node;
                const func_id = node.id.name;
                const params = node.params[0].name;
                const body = node.body;

                let webpack_module_placeholder = null;
                let webpack_loaded_placeholder = null;
                let webpack_module_cache_placeholder = null;

                let has_return = false;
                let has_if = false;
                let has_variable_declaration = false;

                if (webpackVarNames.includes(func_id)) {
                    console.log("Non obfuscated webpack require function detected.");
                    isWebpackRequire = true;
                    require_placeholder = func_id;
                }
                const statements = body.body;
                const statements_len = statements.length;

                if (statements_len >= 3) {
                    if (statements[statements_len - 1].type === "ReturnStatement") {
                        const return_statement = statements[statements_len - 1];
                        const return_expression = return_statement.argument;

                        let has_member_expression = false;
                        let has_call_expression = false;
                        let has_assignment_expression = false;

                        if (return_expression.type === "SequenceExpression") {
                            const expressions = return_expression.expressions;
                            const expressions_len = expressions.length;

                            if (expressions_len === 3 &&
                                expressions[0].type === "CallExpression" &&
                                expressions[1].type === "AssignmentExpression" &&
                                expressions[2].type === "MemberExpression"
                            ) {
                                const call_expression = expressions[0];
                                const assignment_expression = expressions[1];
                                const member_expression = expressions[2];

                                let module_placeholder = null;
                                let loaded_placeholder = null;

                                const member_object = member_expression.object;
                                const member_property = member_expression.property;
                                if (member_object.type === "Identifier" && member_property.type === "Identifier") {
                                    exports_placeholder = member_property.name;
                                    if (exports_placeholder === "exports") {
                                        module_placeholder = member_object.name;
                                        has_member_expression = true;
                                    }
                                }

                                if (has_member_expression) {
                                    const assignment_left = assignment_expression.left;
                                    const assignment_right = assignment_expression.right;
                                    if (assignment_left.type === "MemberExpression" && assignment_right.type === "UnaryExpression") {
                                        if (assignment_right.operator === "!" &&
                                            assignment_right.argument.type === "NumericLiteral" &&
                                            assignment_right.argument.value === 0
                                        ) {
                                            const test_object = assignment_left.object;
                                            const test_property = assignment_left.property;
                                            if (test_object.type === "Identifier" &&
                                                test_property.type === "Identifier" &&
                                                test_object.name === module_placeholder) {
                                                has_assignment_expression = true;
                                                loaded_placeholder = test_property.name;
                                            }
                                        }
                                    }
                                }

                                if (has_assignment_expression) {
                                    const callee = call_expression.callee;
                                    if (callee.type === "MemberExpression") {
                                        const callee_object = callee.object;
                                        const callee_property = callee.property;
                                        if (callee_property.name === "call" &&
                                            callee_object.type === "MemberExpression" &&
                                            callee_object.property.type === "Identifier" &&
                                            callee_object.property.name === params
                                        ) {
                                            const callee_args = call_expression.arguments;
                                            if (callee_args.length === 4) {
                                                const test_require = callee_args[3];
                                                if (test_require.type === "Identifier" && test_require.name === func_id) {
                                                    const test_webpack_module = callee_args[1];
                                                    if (test_webpack_module.type === "Identifier" && test_webpack_module.name === module_placeholder) {
                                                        arg_0 = callee_args[0];
                                                        arg_2 = callee_args[2];
                                                        if (arg_0.type === "MemberExpression" &&
                                                            arg_2.type === "MemberExpression" &&
                                                            arg_0.object.type === "Identifier" &&
                                                            arg_0.property.type === "Identifier" &&
                                                            arg_2.object.type === "Identifier" &&
                                                            arg_2.property.type === "Identifier" &&
                                                            arg_0.object.name === module_placeholder &&
                                                            arg_0.property.name === "exports" &&
                                                            arg_2.object.name === module_placeholder &&
                                                            arg_2.property.name === "exports"
                                                        ) {
                                                            has_call_expression = true;
                                                            webpack_module_placeholder = module_placeholder;
                                                            webpack_loaded_placeholder = loaded_placeholder;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }

                                if (has_member_expression && has_call_expression && has_assignment_expression) {
                                    has_return = true;
                                }
                            } else if (expressions_len === 2 &&
                                expressions[0].type === "CallExpression" &&
                                expressions[1].type === "MemberExpression"
                            ) {
                                const call_expression = expressions[0];
                                const member_expression = expressions[1];

                                let module_placeholder = null;
                                let loaded_placeholder = null;

                                const member_object = member_expression.object;
                                const member_property = member_expression.property;
                                if (member_object.type === "Identifier" && member_property.type === "Identifier") {
                                    exports_placeholder = member_property.name;
                                    if (exports_placeholder === "exports") {
                                        module_placeholder = member_object.name;
                                        has_member_expression = true;
                                    }
                                }

                                if (has_member_expression) {
                                    const callee = call_expression.callee;
                                    if (callee.type === "MemberExpression") {
                                        const callee_object = callee.object;
                                        const callee_property = callee.property;
                                        if (callee_property.name === "call" &&
                                            callee_object.type === "MemberExpression" &&
                                            callee_object.property.type === "Identifier" &&
                                            callee_object.property.name === params) {
                                            const callee_args = call_expression.arguments;
                                            if (callee_args.length === 4) {
                                                const test_require = callee_args[3];
                                                if (test_require.type === "Identifier" && test_require.name === func_id) {
                                                    const test_webpack_module = callee_args[1];
                                                    if (test_webpack_module.type === "Identifier" && test_webpack_module.name === module_placeholder) {
                                                        arg_0 = callee_args[0];
                                                        arg_2 = callee_args[2];
                                                        if (arg_0.type === "MemberExpression" &&
                                                            arg_2.type === "MemberExpression" &&
                                                            arg_0.object.type === "Identifier" &&
                                                            arg_0.property.type === "Identifier" &&
                                                            arg_2.object.type === "Identifier" &&
                                                            arg_2.property.type === "Identifier" &&
                                                            arg_0.object.name === module_placeholder &&
                                                            arg_0.property.name === "exports" &&
                                                            arg_2.object.name === module_placeholder &&
                                                            arg_2.property.name === "exports"
                                                        ) {
                                                            has_call_expression = true;
                                                            webpack_module_placeholder = module_placeholder;
                                                            webpack_loaded_placeholder = loaded_placeholder;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }

                                if (has_member_expression && has_call_expression) {
                                    has_return = true;
                                }
                            }
                        }
                    }

                    if (has_return && statements[statements_len - 2].type === "VariableDeclaration") {
                        const variable_declaration = statements[statements_len - 2];
                        const declarations = variable_declaration.declarations;
                        if (declarations.length === 1 && declarations[0].type === "VariableDeclarator") {
                            const declarator = declarations[0];
                            if (declarator.id.type === "Identifier" &&
                                declarator.id.name === webpack_module_placeholder &&
                                declarator.init.type === "AssignmentExpression") {
                                const init = declarator.init;
                                if (init.left.type === "MemberExpression" &&
                                    init.right.type === "ObjectExpression") {
                                    const left = init.left;
                                    const right = init.right;
                                    const right_properties = right.properties;
                                    let module_cache = null;
                                    if (right_properties.length === 3) {
                                        const rp_0 = right_properties[0];
                                        const rp_1 = right_properties[1];
                                        const rp_2 = right_properties[2];
                                        if (rp_0.type === "ObjectProperty" &&
                                            rp_1.type === "ObjectProperty" &&
                                            rp_2.type === "ObjectProperty" &&
                                            rp_0.value.type === "Identifier" &&
                                            rp_0.value.name === params &&
                                            rp_1.key.type === "Identifier" &&
                                            rp_1.key.name === webpack_loaded_placeholder &&
                                            rp_1.value.type === "UnaryExpression" &&
                                            rp_1.value.operator === "!" &&
                                            rp_1.value.argument.type === "NumericLiteral" &&
                                            rp_1.value.argument.value === 1 &&
                                            rp_2.key.type === "Identifier" &&
                                            rp_2.key.name === "exports" &&
                                            rp_2.value.type === "ObjectExpression" &&
                                            rp_2.value.properties.length === 0
                                        ) {
                                            module_cache = rp_0.key.name;
                                            if (left.object.type === "Identifier" &&
                                                left.property.type === "Identifier" &&
                                                left.property.name === params
                                            ) {
                                                webpack_module_cache_placeholder = left.object.name;
                                                has_variable_declaration = true;
                                            }
                                        }
                                    } else if (right_properties.length === 1) {
                                        const rp_0 = right_properties[0];
                                        if (rp_0.type === "ObjectProperty" &&
                                            rp_0.key.type === "Identifier" &&
                                            rp_0.key.name === "exports" &&
                                            rp_0.value.type === "ObjectExpression" &&
                                            rp_0.value.properties.length === 0
                                        ) {
                                            if (left.property.type === "Identifier" && left.property.name === params) {
                                                webpack_module_cache_placeholder = left.object.name;
                                                has_variable_declaration = true;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }

                    if (has_variable_declaration && statements[statements_len - 3].type === "IfStatement") {
                        const if_statement = statements[statements_len - 3];
                        const test = if_statement.test;
                        const consequent = if_statement.consequent;

                        // case 1: if (i[o]) return i[o].exports;
                        if (test.type === "MemberExpression" &&
                            test.property.type === "Identifier" &&
                            test.property.name === params &&
                            test.object.type === "Identifier" &&
                            test.object.name === webpack_module_cache_placeholder &&
                            consequent.type === "ReturnStatement" &&
                            consequent.argument.type === "MemberExpression" &&
                            consequent.argument.object.type === "MemberExpression" &&
                            consequent.argument.object.property.type === "Identifier" &&
                            consequent.argument.object.property.name === params &&
                            consequent.argument.object.object.type === "Identifier" &&
                            consequent.argument.object.object.name === webpack_module_cache_placeholder &&
                            consequent.argument.property.type === "Identifier" &&
                            consequent.argument.property.name === "exports"
                        ) {
                            has_if = true;
                        } else if (test.type === "BinaryExpression" && consequent.type === "ReturnStatement") {
                            // case 2: if (void 0 !== o) return o.exports;
                            const left = test.left;
                            const right = test.right;
                            if (test.operator === "!==" &&
                                left.type === "UnaryExpression" &&
                                left.operator === "void" &&
                                left.argument.type === "NumericLiteral" &&
                                left.argument.value === 0 &&
                                right.type === "Identifier" &&
                                consequent.argument.type === "MemberExpression" &&
                                consequent.argument.object.type === "Identifier" &&
                                consequent.argument.object.name === right.name &&
                                consequent.argument.property.type === "Identifier" &&
                                consequent.argument.property.name === "exports"
                            ) {
                                has_if = true;
                            } else if (test.operator === "!==" &&
                                right.type === "UnaryExpression" &&
                                right.operator === "void" &&
                                right.argument.type === "NumericLiteral" &&
                                right.argument.value === 0 &&
                                left.type === "Identifier" &&
                                consequent.argument.type === "MemberExpression" &&
                                consequent.argument.object.type === "Identifier" &&
                                consequent.argument.object.name === left.name &&
                                consequent.argument.property.type === "Identifier" &&
                                consequent.argument.property.name === "exports"
                            ) {
                                has_if = true;
                            }
                        }
                    }
                }

                if (has_return && has_if && has_variable_declaration) {
                    isWebpackRequire = true;
                    require_placeholder = func_id;
                    module_placeholder = webpack_module_placeholder;
                    loaded_placeholder = webpack_loaded_placeholder;
                    module_cache_placeholder = webpack_module_cache_placeholder;
                }
            }
        },
    });

    return {
        isWebpackRequire: isWebpackRequire,
        require_placeholder: require_placeholder,
        module_placeholder: module_placeholder,
        loaded_placeholder: loaded_placeholder,
        module_cache_placeholder: module_cache_placeholder,
    }
}

module.exports = detectWebpackRequire;
