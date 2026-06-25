const fs = require("fs");
const { parse } = require("@babel/parser");
const traverse = require("@babel/traverse").default;

function detectWebpackIIFE(filePath, require_result) {
    const code = fs.readFileSync(filePath, "utf8");
    const ast = parse(code, {
        sourceType: "unambiguous",
        plugins: ["jsx", "typescript"],
        ranges: true,
        locations: true,
    });

    let isIIFE = false;

    let require_function = require_result.require_placeholder;
    let module_placeholder = require_result.module_placeholder;
    let loaded_placeholder = require_result.loaded_placeholder;
    let module_cache_placeholder = require_result.module_cache_placeholder;

    // function (module, exports, __webpack_require__) {
    //     "use strict";
    //     var i = __webpack_require__(43);
    //     $(document).ready(function () {
    //       i(__webpack_require__(198));
    //     });
    //   }

    let isModules = false;
    let modules = {};
    let module_parm = null;
    let exports_parm = null;
    let require_parm = null;

    // I think the minimum number of modules is 5
    const MIN_MODULES = 5;

    traverse(ast, {
        ArrayExpression(path) {
            const elements = path.node.elements;

            let hasModulesFunction = false;
            let counter = 0;

            let parms_0 = null;
            let parms_1 = null;
            let parms_2 = null;

            let modules_container = {};

            for (let i = 0; i < elements.length; i++) {
                const element = elements[i];
                if (element === null) {
                    modules_container[i] = null;
                    continue;
                }
                if (element.type === "FunctionExpression") {
                    if (element.params.length === 2) {
                        if (counter === 0) {
                            parms_0 = element.params[0].name;
                            parms_1 = element.params[1].name;
                            counter++;
                            hasModulesFunction = true;
                            modules_container[i] = element;
                        } else {
                            if (parms_0 === element.params[0].name && parms_1 === element.params[1].name) {
                                counter++;
                                modules_container[i] = element;
                            } else {
                                hasModulesFunction = false;
                                break;
                            }
                        }
                    }
                    if (element.params.length === 3) {
                        if (counter === 0) {
                            parms_0 = element.params[0].name;
                            parms_1 = element.params[1].name;
                            parms_2 = element.params[2].name;
                            counter++;
                            hasModulesFunction = true;
                            modules_container[i] = element;
                        } else {
                            if (parms_0 === element.params[0].name && parms_1 === element.params[1].name && parms_2 === element.params[2].name) {
                                counter++;
                                modules_container[i] = element;
                            } else {
                                hasModulesFunction = false;
                                break;
                            }
                        }
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
        },

        ObjectExpression(path) {
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
                    if (key.value && value.type === "FunctionExpression") {
                        if (value.params.length === 2) {
                            if (counter === 0) {
                                parms_0 = value.params[0].name;
                                parms_1 = value.params[1].name;
                                counter++;
                                hasModulesFunction = true;
                                modules_container[key.value] = value;
                            } else {
                                if (parms_0 === value.params[0].name && parms_1 === value.params[1].name) {
                                    counter++;
                                    modules_container[key.value] = value;
                                } else {
                                    hasModulesFunction = false;
                                    break;
                                }
                            }
                        }
                        if (value.params.length === 3) {
                            if (counter === 0) {
                                parms_0 = value.params[0].name;
                                parms_1 = value.params[1].name;
                                parms_2 = value.params[2].name;
                                counter++;
                                hasModulesFunction = true;
                                modules_container[key.value] = value;
                            } else {
                                if (parms_0 === value.params[0].name && parms_1 === value.params[1].name && parms_2 === value.params[2].name) {
                                    counter++;
                                    modules_container[key.value] = value;
                                } else {
                                    hasModulesFunction = false;
                                    break;
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
}
