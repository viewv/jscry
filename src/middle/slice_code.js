const { parse } = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const fs = require('fs');
const path = require('path');

const babel = require('@babel/core');

/**
 * 基于位置信息查找包含该位置的函数或类
 * @param {string} code - 源代码
 * @param {Object} position - 位置信息 {start: number, end: number}
 * @returns {Object|null} 找到的函数或类信息
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
    let foundFunctions = []; // 添加调试信息
    let topLevelNode = null; // 记录顶层节点

    // 给定变量位置，之后找到对应位置的AST的Node，之后向上逆向AST树，找到function，class等等类型的block，就停止，记录这部分为切片
    // 如果类似
    // _doReset: function() {
    //                     this._hash = new i.init([ 1732584193, 4023233417, 2562383102, 271733878 ]);
    //                 },
    // 如果function是一个value位置，那么就再往上找一层到function，class，call，等（为了避免爆炸，只想上一层）
    // 整体就是一个向上的情况
    traverse(ast, {
        enter(path) {
            const node = path.node;

            // 检查当前节点是否包含目标位置
            if (node.range &&
                node.range[0] <= position.start &&
                node.range[1] >= position.end) {

                // 如果还没找到目标节点，记录当前节点
                if (!targetNode) {
                    targetNode = node;
                }

                // 记录顶层节点（Program的直接子节点）
                if (path.parent && path.parent.type === 'Program') {
                    topLevelNode = node;
                }

                // 检查是否是我们要找的容器类型
                if (isFunctionLikeNode(node) || isClassLikeNode(node)) {
                    // 添加调试信息
                    foundFunctions.push({
                        type: node.type,
                        range: node.range,
                        loc: node.loc,
                        lineCount: getNodeLineCount(node, code)
                    });

                    // 计算函数行数
                    const lineCount = getNodeLineCount(node, code);

                    // 如果函数行数<=4，继续向上查找
                    if (lineCount <= 4) {
                        // 向上查找更大的容器
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
                            // 避免无限向上查找，最多向上3层
                            if (currentPath && currentPath.getFunctionParent() === null) break;
                        }
                    } else {
                        // 函数行数>4，可以作为切片
                        containingNode = node;
                        containingType = node.type;
                        functionName = getFunctionName(node, path);

                        // 如果当前function是一个value位置（如对象方法），再向上找一层
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

    // 添加调试输出
    // console.log('找到的函数:', foundFunctions);
    // console.log('目标位置:', position);
    // console.log('目标节点:', targetNode ? targetNode.type : 'null');

    // 如果没有找到合适的容器，但有顶层节点，返回顶层节点
    if (!containingNode && topLevelNode) {
        // 检查顶层节点是否是变量声明或其他有意义的节点
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

    // 添加返回语句
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
 * 检查节点是否是函数类型
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
 * 检查节点是否是类类型
 */
function isClassLikeNode(node) {
    return [
        'ClassDeclaration',
        'ClassExpression'
    ].includes(node.type);
}

/**
 * 检查节点是否是调用类型
 */
function isCallLikeNode(node) {
    return [
        'CallExpression',
        'NewExpression'
    ].includes(node.type);
}

/**
 * 检查顶层节点是否可以作为切片
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
 * 获取顶层节点的名称
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
 * 检查函数是否作为值使用（如对象方法）
 */
function isFunctionAsValue(path) {
    const parent = path.parent;
    if (!parent) return false;

    // 检查是否是对象属性的值
    if (parent.type === 'Property' && parent.value === path.node) {
        return true;
    }

    // 检查是否是变量赋值的值
    if (parent.type === 'VariableDeclarator' && parent.init === path.node) {
        return true;
    }

    // 检查是否是赋值表达式的右侧
    if (parent.type === 'AssignmentExpression' && parent.right === path.node) {
        return true;
    }

    return false;
}

/**
 * 获取函数名称
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

    // 如果是对象属性中的函数
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
 * 计算节点的行数
 */
function getNodeLineCount(node, code) {
    if (!node.loc) return 0;
    return node.loc.end.line - node.loc.start.line + 1;
}

module.exports = {
    findContainingFunction
};
