const { parse } = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const fs = require('fs');
const path = require('path');

const babel = require('@babel/core');

/**
 * Find the function or class containing the specified position based on position information
 * @param {string} code - Source code
 * @param {Object} position - Position information {start: number, end: number}
 * @returns {Object|null} Information of the found function or class
 */
function findContainingFunction(code, position) {
    const ast = parse(code, {
        sourceType: "unambiguous",
        ranges: true,
        locations: true,
        strictMode: false,
        allowImportExportEverywhere: true,
        allowReturnOutsideFunction: true,
        plugins: [
            "jsx",
            "typescript",
            'decorators-legacy',
            'classProperties',
            'objectRestSpread',
            'functionBind',
            'exportDefaultFrom',
            'exportNamespaceFrom',
            'dynamicImport',
            'nullishCoalescingOperator',
            'optionalChaining'
        ],
    });

    let containingNode = null;
    let containingType = null;
    let functionName = null;
    let targetNode = null;
    let foundFunctions = []; // Add debugging information
    let topLevelNode = null; // Track top-level node

    // Given the variable position, find the AST node at the corresponding position, then trace up the AST tree. Stop when a block of type function, class, etc. is found, and record this part as a slice.
    // E.g.,
    // _doReset: function() {
    //                     this._hash = new i.init([ 1732584193, 4023233417, 2562383102, 271733878 ]);
    //                 },
    // If the function is in a value position, go up one more layer to function, class, call, etc. (only go up one layer to avoid explosion).
    // The overall strategy is traversing upwards.
    traverse(ast, {
        enter(path) {
            const node = path.node;

            // Check if the current node contains the target position
            if (node.range &&
                node.range[0] <= position.start &&
                node.range[1] >= position.end) {

                // If target node is not found yet, record current node
                if (!targetNode) {
                    targetNode = node;
                }

                // Record top-level node (direct child of Program)
                if (path.parent && path.parent.type === 'Program') {
                    topLevelNode = node;
                }

                // Check if it is the container type we are looking for
                if (isFunctionLikeNode(node) || isClassLikeNode(node)) {
                    // Add debugging information
                    foundFunctions.push({
                        type: node.type,
                        range: node.range,
                        loc: node.loc,
                        lineCount: getNodeLineCount(node, code)
                    });

                    // Calculate function line count
                    const lineCount = getNodeLineCount(node, code);

                    // If function line count <= 4, continue searching upwards
                    if (lineCount <= 4) {
                        // Search upwards for a larger container
                        let currentPath = path.parentPath;
                        while (currentPath) {
                            const parentNode = currentPath.node;
                            if (isFunctionLikeNode(parentNode) || isClassLikeNode(parentNode) || isCallLikeNode(parentNode)) {
                                const parentLineCount = getNodeLineCount(parentNode, code);
                                if (parentLineCount > 4) {
                                    containingNode = parentNode;
                                    containingType = parentNode.type;
                                    functionName = getFunctionName(parentNode, currentPath);
                                    break;
                                }
                            }
                            currentPath = currentPath.parentPath;
                            // Avoid infinite upward search, up to 3 layers
                            if (currentPath && currentPath.getFunctionParent() === null) break;
                        }
                    } else {
                        // Function line count > 4, can be used as a slice
                        containingNode = node;
                        containingType = node.type;
                        functionName = getFunctionName(node, path);

                        // If the current function is in a value position (e.g. object method), go up one more layer
                        if (isFunctionAsValue(path)) {
                            const parent = path.parent;
                            if (parent && (isFunctionLikeNode(parent) || isClassLikeNode(parent) || isCallLikeNode(parent))) {
                                const parentLineCount = getNodeLineCount(parent, code);
                                if (parentLineCount > 4) {
                                    containingNode = parent;
                                    containingType = parent.type;
                                    functionName = getFunctionName(parent, path.parentPath) || functionName;
                                }
                            }
                        }
                    }
                }
            }
        }
    });

    // Add debugging output
    // console.log('找到的函数:', foundFunctions);
    // console.log('目标位置:', position);
    // console.log('目标节点:', targetNode ? targetNode.type : 'null');

    // If no suitable container is found but a top-level node exists, return the top-level node
    if (!containingNode && topLevelNode) {
        // Check if the top-level node is a variable declaration or other meaningful node
        if (isTopLevelSliceableNode(topLevelNode)) {
            return {
                node: topLevelNode,
                type: topLevelNode.type,
                name: getTopLevelNodeName(topLevelNode),
                range: topLevelNode.range,
                loc: topLevelNode.loc,
                code: code.slice(topLevelNode.range[0], topLevelNode.range[1])
            };
        }
    }

    // Add return statement
    if (containingNode) {
        return {
            node: containingNode,
            type: containingType,
            name: functionName,
            range: containingNode.range,
            loc: containingNode.loc,
            code: code.slice(containingNode.range[0], containingNode.range[1])
        };
    }

    return null;
}

/**
 * Check if node is function-like
 */
function isFunctionLikeNode(node) {
    return [
        'FunctionDeclaration',
        'FunctionExpression',
        'ArrowFunctionExpression',
        'Method',
        'ObjectMethod'
    ].includes(node.type);
}

/**
 * Check if node is class-like
 */
function isClassLikeNode(node) {
    return [
        'ClassDeclaration',
        'ClassExpression'
    ].includes(node.type);
}

/**
 * Check if node is call-like
 */
function isCallLikeNode(node) {
    return [
        'CallExpression',
        'NewExpression'
    ].includes(node.type);
}

/**
 * Check if top-level node can be sliced
 */
function isTopLevelSliceableNode(node) {
    return [
        'VariableDeclaration',
        'FunctionDeclaration',
        'ClassDeclaration',
        'ExpressionStatement',
        'AssignmentExpression'
    ].includes(node.type);
}

/**
 * Get the name of a top-level node
 */
function getTopLevelNodeName(node) {
    if (node.type === 'VariableDeclaration' && node.declarations.length > 0) {
        const declarator = node.declarations[0];
        if (declarator.id && declarator.id.name) {
            return declarator.id.name;
        }
    }

    if (node.id && node.id.name) {
        return node.id.name;
    }

    return 'top-level';
}

/**
 * Check if function is used as a value (e.g. object method)
 */
function isFunctionAsValue(path) {
    const parent = path.parent;
    if (!parent) return false;

    // Check if it is the value of an object property
    if (parent.type === 'Property' && parent.value === path.node) {
        return true;
    }

    // Check if it is the initialization value of a variable declaration
    if (parent.type === 'VariableDeclarator' && parent.init === path.node) {
        return true;
    }

    // Check if it is the right side of an assignment expression
    if (parent.type === 'AssignmentExpression' && parent.right === path.node) {
        return true;
    }

    return false;
}

/**
 * Get function name
 */
function getFunctionName(node, path) {
    if (node.id && node.id.name) {
        return node.id.name;
    }

    if (node.key) {
        if (node.key.type === 'Identifier') {
            return node.key.name;
        }
        if (node.key.type === 'StringLiteral') {
            return node.key.value;
        }
    }

    // If it is a function in an object property
    if (path && path.parent && path.parent.type === 'Property') {
        const key = path.parent.key;
        if (key.type === 'Identifier') {
            return key.name;
        }
        if (key.type === 'StringLiteral') {
            return key.value;
        }
    }

    return 'anonymous';
}

/**
 * Calculate line count of a node
 */
function getNodeLineCount(node, code) {
    if (!node.loc) return 0;
    return node.loc.end.line - node.loc.start.line + 1;
}

module.exports = {
    findContainingFunction
};
