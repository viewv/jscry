const fs = require("fs");
const { parse } = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const vm = require("vm");

const babel = require('@babel/core');
const t = require('@babel/types');

function extractStringConstantValue(code) {
    const ast = parse(code, {
        sourceType: "unambiguous",
        plugins: ["jsx", "typescript"],
        ranges: true,
        locations: true,
        strictMode: false,
        allowImportExportEverywhere: true,
        allowReturnOutsideFunction: true
    });

    const stringConstantValues = [];
    traverse(ast, {
        StringLiteral(path) {
            stringConstantValues.push(path.node.value);
        },
        TemplateLiteral(path) {
            const value = path.node.quasis.map(quasi => quasi.value.raw).join('');
            stringConstantValues.push(value);
        },
    });
    return stringConstantValues;
}

module.exports = {
    extractStringConstantValue
}