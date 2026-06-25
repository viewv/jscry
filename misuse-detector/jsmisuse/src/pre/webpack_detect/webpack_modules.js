const fs = require("fs");
const { parse } = require("@babel/parser");
const traverse = require("@babel/traverse").default;

function locationMatches(node, target_location) {
    if (!target_location || !node.loc) return true;

    const loc = node.loc;

    return (
        loc.start.line === target_location.start.line &&
        loc.start.column === target_location.start.column &&
        loc.end.line === target_location.end.line &&
        loc.end.column === target_location.end.column
    );
}

function detectWebpackModules(filePath, target_location = null) {

    const code = fs.readFileSync(filePath, "utf8");
    const ast = parse(code, {
        sourceType: "unambiguous",
        plugins: ["jsx", "typescript"],
        ranges: true,
        locations: true,
    });

    let isModules = false;
    let modules = {};
    let module_parm = null;
    let exports_parm = null;
    let require_parm = null;

    // function (module, exports, __webpack_require__) {
    //     "use strict";
    //     var i = __webpack_require__(43);
    //     $(document).ready(function () {
    //       i(__webpack_require__(198));
    //     });
    //   }

    // I think the minimum number of modules
    const MIN_MODULES = 8;

    traverse(ast, {
        ArrayExpression(path) {

            const node = path.node;

            if (target_location && !locationMatches(node, target_location)) {
                return;
            }

            if (isModules) {
                return;
            }

            const elements = path.node.elements;

            let hasModulesFunction = false;
            let counter = 0;

            let parms_0 = null;
            let parms_1 = null;
            let parms_2 = null;

            for (let i = 0; i < elements.length; i++) {
                const element = elements[i];
                if (element === null) {
                    continue;
                }
                if (element.type === "FunctionExpression" || element.type === "ArrowFunctionExpression") {
                    if (element.params.length === 0) {
                        counter++;
                    }
                    if (element.params.length === 1) {
                        if (counter === 0) {
                            parms_0 = element.params[0].name;
                            counter++;
                            hasModulesFunction = true;
                        } else {
                            if (parms_0 === element.params[0].name) {
                                counter++;
                            }
                        }
                    }
                    if (element.params.length === 2) {
                        if (counter === 0 || parms_0 === null || parms_1 === null) {
                            parms_0 = element.params[0].name;
                            parms_1 = element.params[1].name;
                            counter++;
                            hasModulesFunction = true;
                        } else {
                            if (parms_0 === element.params[0].name && parms_1 === element.params[1].name) {
                                counter++;
                            }
                        }
                    }
                    if (element.params.length === 3) {
                        if (counter === 0 || parms_0 === null || parms_1 === null || parms_2 === null) {
                            parms_0 = element.params[0].name;
                            parms_1 = element.params[1].name;
                            parms_2 = element.params[2].name;
                            counter++;
                            hasModulesFunction = true;
                        } else {
                            if (parms_0 === element.params[0].name && parms_1 === element.params[1].name && parms_2 === element.params[2].name) {
                                counter++;
                            }
                        }
                    }
                }
            }

            if (hasModulesFunction && counter >= MIN_MODULES) {
                isModules = true;
                modules = elements;
                module_parm = parms_0;
                exports_parm = parms_1;
                require_parm = parms_2;
            }
        },

        ObjectExpression(path) {

            const node = path.node;

            if (target_location && !locationMatches(node, target_location)) {
                return;
            }

            if (isModules) {
                return;
            }

            const properties = path.node.properties;
            let hasModulesFunction = false;
            let counter = 0;

            let parms_0 = null;
            let parms_1 = null;
            let parms_2 = null;
            let modules_container = {};

            for (let i = 0; i < properties.length; i++) {
                const property = properties[i];
                if (property === null) {
                    continue;
                }
                if (property.type === "ObjectProperty") {
                    const key = property.key;
                    const value = property.value;
                    if (value.type === "FunctionExpression" || value.type === "ArrowFunctionExpression") {
                        if (value.params.length === 0) {
                            counter++;
                        }
                        if (value.params.length === 1) {
                            if (counter === 0) {
                                parms_0 = value.params[0].name;
                                counter++;
                                hasModulesFunction = true;
                                if (key.value) {
                                    modules_container[key.value] = value;
                                } else if (key.name) {
                                    modules_container[key.name] = value;
                                }
                            } else {
                                if (parms_0 === value.params[0].name) {
                                    counter++;
                                    if (key.value) {
                                        modules_container[key.value] = value;
                                    } else if (key.name) {
                                        modules_container[key.name] = value;
                                    }
                                }
                            }
                        }
                        if (value.params.length === 2) {
                            if (counter === 0 || parms_0 === null || parms_1 === null) {
                                parms_0 = value.params[0].name;
                                parms_1 = value.params[1].name;
                                counter++;
                                hasModulesFunction = true;
                                if (key.value) {
                                    modules_container[key.value] = value;
                                } else if (key.name) {
                                    modules_container[key.name] = value;
                                }
                            } else {
                                if (parms_0 === value.params[0].name && parms_1 === value.params[1].name) {
                                    counter++;
                                    if (key.value) {
                                        modules_container[key.value] = value;
                                    } else if (key.name) {
                                        modules_container[key.name] = value;
                                    }
                                }
                            }
                        }
                        if (value.params.length === 3) {
                            if (counter === 0 || parms_0 === null || parms_1 === null || parms_2 === null) {
                                parms_0 = value.params[0].name;
                                parms_1 = value.params[1].name;
                                parms_2 = value.params[2].name;
                                counter++;
                                hasModulesFunction = true;
                                if (key.value) {
                                    modules_container[key.value] = value;
                                } else if (key.name) {
                                    modules_container[key.name] = value;
                                }
                            } else {
                                if (parms_0 === value.params[0].name && parms_1 === value.params[1].name && parms_2 === value.params[2].name) {
                                    counter++;
                                    if (key.value) {
                                        modules_container[key.value] = value;
                                    } else if (key.name) {
                                        modules_container[key.name] = value;
                                    }
                                }
                            }
                        }
                    } else {
                        hasModulesFunction = false;
                        break;
                    }
                }
            }
            if (hasModulesFunction && counter >= MIN_MODULES) {
                isModules = true;
                modules = modules_container;
                module_parm = parms_0;
                exports_parm = parms_1;
                require_parm = parms_2;
            }
        }
    })

    return {
        isModules: isModules,
        modules: modules,
        module_parm: module_parm,
        exports_parm: exports_parm,
        require_parm: require_parm,
    }
}

module.exports = {
    detectWebpackModules: detectWebpackModules
}