const fs = require("fs");
const path = require("path");
const { parse } = require("@babel/parser");
const traverse = require("@babel/traverse").default;
// const { detectWebpackModules } = require(path.join(__dirname, "webpack_modules.js"));

function detectWebpackJsonp(filePath) {
    const code = fs.readFileSync(filePath, "utf8");
    const ast = parse(code, {
        sourceType: "unambiguous",
        plugins: ["jsx", "typescript"],
        ranges: true,
        locations: true,
    });

    const webpackJsonpFunc = "webpackJsonp";

    let isJsonp = false;
    let chunk_ids = [];
    let chunks = {};

    traverse(ast, {
        CallExpression(path) {

            if (isJsonp) {
                return;
            }

            const callee = path.node.callee;
            const args = path.node.arguments;
            if (callee.type === "MemberExpression") {
                const object = callee.object;
                const property = callee.property;
                if (property.type === "Identifier" &&
                    property.name === "push" &&
                    object.type === "AssignmentExpression"
                ) {
                    const left = object.left;
                    const right = object.right;
                    const op = object.operator;
                    if (op === "=" &&
                        left.type === "MemberExpression" &&
                        right.type === "LogicalExpression"
                    ) {
                        const leftObject = left.object;
                        const leftProperty = left.property;
                        const rightLeft = right.left;
                        const rightRight = right.right;
                        const rightOp = right.operator;
                        if (rightOp === "||" &&
                            rightLeft.type === "MemberExpression" &&
                            rightLeft.object.type === "Identifier" &&
                            rightLeft.object.name === "window" &&
                            rightRight.type === "ArrayExpression" &&
                            leftObject.type === "Identifier" &&
                            leftObject.name === "window" &&
                            (leftProperty.type === "Identifier" &&
                                rightLeft.property.type === "Identifier" &&
                                leftProperty.name === rightLeft.property.name) ||
                            (leftProperty.type === "StringLiteral" &&
                                rightLeft.property.type === "StringLiteral" &&
                                leftProperty.value === rightLeft.property.value)
                        ) {
                            let testfunc = leftProperty.name || leftProperty.value;
                            if (testfunc.startsWith(webpackJsonpFunc)) {
                                let chunk = args[0];
                                if (chunk.type === "ArrayExpression" &&
                                    chunk.elements.length >= 2 &&
                                    chunk.elements[0].type === "ArrayExpression" &&
                                    chunk.elements[0].elements.length >= 1 &&
                                    chunk.elements[1].type === "ObjectExpression"
                                ) {
                                    isJsonp = true;
                                    chunk_ids = chunk.elements[0].elements.map(element => element.value);
                                    chunks = chunk.elements[1].properties;
                                }
                            } else {
                                if (args.length >= 1) {
                                    let chunk = args[0];
                                    if (chunk.type === "ArrayExpression" &&
                                        chunk.elements.length >= 2 &&
                                        chunk.elements[0].type === "ArrayExpression" &&
                                        chunk.elements[0].elements.length >= 1 &&
                                        chunk.elements[1].type === "ObjectExpression"
                                    ) {
                                        isJsonp = true;
                                        chunk_ids = chunk.elements[0].elements.map(element => element.value);
                                        chunks = chunk.elements[1].properties;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    });

    return {
        isJsonp: isJsonp,
        chunk_ids: chunk_ids,
        chunks: chunks,
    }
}

module.exports = {
    detectWebpackJsonp: detectWebpackJsonp,
}