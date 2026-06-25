const fs = require('fs');
const path = require('path');
const { parse } = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generate = require('@babel/generator').default;

/**
 * Fallback General Debundler
 * Uses Babel AST to parse and unpack Parcel-like registries, UMD wrappers, or ESM files.
 */
class GeneralDebundler {
    /**
     * Extracts modules from the bundle.
     * @param {string} filePath - Path to the bundle JS file.
     * @param {string} outputDir - Output directory.
     * @returns {Promise<Object>} Unpacking results.
     */
    async extract(filePath, outputDir) {
        try {
            const absoluteFilePath = path.resolve(filePath);
            const absoluteOutputDir = path.resolve(outputDir);

            if (!fs.existsSync(absoluteOutputDir)) {
                fs.mkdirSync(absoluteOutputDir, { recursive: true });
            }

            console.log(`[GeneralDebundler] Parsing AST of ${absoluteFilePath}...`);
            const code = fs.readFileSync(absoluteFilePath, 'utf8');
            const ast = parse(code, {
                sourceType: 'unambiguous',
                plugins: ['jsx', 'typescript'],
                ranges: true,
                locations: true,
                strictMode: false,
                allowImportExportEverywhere: true,
                allowReturnOutsideFunction: true
            });

            let modules = [];
            let type = 'unknown';

            // 1. Check for Module Registry (Parcel, Rspack, Webpack, etc.)
            let registryPath = null;
            let registryType = null;
            traverse(ast, {
                CallExpression(p) {
                    const args = p.node.arguments;
                    if (args.length === 0) return;
                    
                    const modulesArg = args[0];
                    
                    // A. Check for Array of functions (Webpack array)
                    if (modulesArg.type === 'ArrayExpression') {
                        const elements = modulesArg.elements;
                        if (elements.length >= 2 && elements.every(el => !el || el.type === 'FunctionExpression' || el.type === 'ArrowFunctionExpression' || el.type === 'NullLiteral')) {
                            registryPath = p.get('arguments.0');
                            registryType = 'webpack_array';
                            p.stop();
                        }
                    }
                    
                    // B. Check for Object mapping (Webpack object or Parcel registry)
                    if (modulesArg.type === 'ObjectExpression') {
                        const properties = modulesArg.properties;
                        if (properties.length >= 2) {
                            let isRegistry = true;
                            for (const prop of properties) {
                                if (prop.type !== 'ObjectProperty') {
                                    isRegistry = false;
                                    break;
                                }
                                const val = prop.value;
                                const isValidVal = 
                                    val.type === 'FunctionExpression' || 
                                    val.type === 'ArrowFunctionExpression' ||
                                    (val.type === 'ArrayExpression' && val.elements.length > 0 && 
                                     (val.elements[0].type === 'FunctionExpression' || val.elements[0].type === 'ArrowFunctionExpression'));
                                
                                if (!isValidVal) {
                                    isRegistry = false;
                                    break;
                                }
                            }
                            if (isRegistry) {
                                registryPath = p.get('arguments.0');
                                registryType = 'general_registry';
                                p.stop();
                            }
                        }
                    }
                }
            });

            if (registryType === 'webpack_array') {
                type = 'webpack_array';
                console.log(`[GeneralDebundler] Found webpack array registry with ${registryPath.node.elements.length} modules.`);
                const elements = registryPath.node.elements;
                for (let idx = 0; idx < elements.length; idx++) {
                    const el = elements[idx];
                    if (!el || el.type === 'NullLiteral') continue;
                    
                    const bodyStatements = el.body.body;
                    let bodyCode = '';
                    if (bodyStatements && bodyStatements.length > 0) {
                        bodyCode = bodyStatements.map(stmt => generate(stmt).code).join('\n');
                    }
                    
                    const fileName = `${idx}.js`;
                    const destPath = path.join(absoluteOutputDir, fileName);
                    fs.writeFileSync(destPath, bodyCode, 'utf8');
                    
                    modules.push({
                        id: String(idx),
                        relativePath: `./${fileName}`,
                        absolutePath: destPath
                    });
                }
            } else if (registryType === 'general_registry') {
                type = 'general_registry';
                console.log(`[GeneralDebundler] Found module registry with ${registryPath.node.properties.length} modules.`);
                
                for (const prop of registryPath.node.properties) {
                    let modId;
                    if (prop.key.type === 'Identifier') {
                        modId = prop.key.name;
                    } else if (prop.key.type === 'NumericLiteral' || prop.key.type === 'StringLiteral') {
                        modId = String(prop.key.value);
                    } else {
                        continue;
                    }

                    const val = prop.value;
                    const funcNode = val.type === 'ArrayExpression' ? val.elements[0] : val;
                    
                    // Generate body code
                    const bodyStatements = funcNode.body.body;
                    let bodyCode = '';
                    if (bodyStatements && bodyStatements.length > 0) {
                        bodyCode = bodyStatements.map(stmt => generate(stmt).code).join('\n');
                    }
                    
                    const fileName = `${modId}.js`;
                    const destPath = path.join(absoluteOutputDir, fileName);
                    fs.writeFileSync(destPath, bodyCode, 'utf8');
                    
                    modules.push({
                        id: modId,
                        relativePath: `./${fileName}`,
                        absolutePath: destPath
                    });
                }
            } else {
                // 2. Check for UMD Factory Pattern
                let umdFactory = null;
                traverse(ast, {
                    CallExpression(p) {
                        const callee = p.node.callee;
                        const isInlineFunction = callee.type === 'FunctionExpression' || callee.type === 'ArrowFunctionExpression';
                        if (isInlineFunction && p.get('callee').isFunctionExpression()) {
                            // Simple UMD check: IIFE with factory
                            // Usually has checks for define / exports / module
                            const codeSlice = code.slice(p.node.start, p.node.end);
                            if (codeSlice.includes('define') && (codeSlice.includes('exports') || codeSlice.includes('module'))) {
                                // Find function argument (factory)
                                for (const arg of p.node.arguments) {
                                    if (arg.type === 'FunctionExpression' || arg.type === 'ArrowFunctionExpression') {
                                        umdFactory = arg;
                                        break;
                                    }
                                }
                                if (umdFactory) {
                                    p.stop();
                                }
                            }
                        }
                    }
                });

                if (umdFactory) {
                    type = 'umd';
                    console.log('[GeneralDebundler] Found UMD factory pattern.');
                    const bodyCode = umdFactory.body.body.map(stmt => generate(stmt).code).join('\n');
                    const fileName = 'umd_module.js';
                    const destPath = path.join(absoluteOutputDir, fileName);
                    fs.writeFileSync(destPath, bodyCode, 'utf8');
                    
                    modules.push({
                        id: 'umd_module',
                        relativePath: `./${fileName}`,
                        absolutePath: destPath
                    });
                } else {
                    // 3. Fallback: ESM or Single Module
                    let hasESM = false;
                    traverse(ast, {
                        ImportDeclaration(p) {
                            hasESM = true;
                            p.stop();
                        },
                        ExportNamedDeclaration(p) {
                            hasESM = true;
                            p.stop();
                        },
                        ExportDefaultDeclaration(p) {
                            hasESM = true;
                            p.stop();
                        }
                    });

                    if (hasESM) {
                        type = 'esm';
                        console.log('[GeneralDebundler] Found ESM import/export declarations.');
                    } else {
                        type = 'single_module';
                        console.log('[GeneralDebundler] Falling back to single module.');
                    }
                    
                    const fileName = 'module.js';
                    const destPath = path.join(absoluteOutputDir, fileName);
                    fs.writeFileSync(destPath, code, 'utf8');
                    
                    modules.push({
                        id: 'module',
                        relativePath: `./${fileName}`,
                        absolutePath: destPath
                    });
                }
            }

            // Write bundle.json metadata file
            const bundleMetadata = {
                type,
                entryId: modules.length > 0 ? modules[0].id : null,
                modules: modules.map(m => ({
                    id: m.id,
                    path: m.relativePath
                }))
            };
            fs.writeFileSync(path.join(absoluteOutputDir, 'bundle.json'), JSON.stringify(bundleMetadata, null, 2), 'utf8');

            console.log(`[GeneralDebundler] Successfully extracted ${modules.length} modules (format: ${type}).`);
            return {
                success: true,
                outputDir: absoluteOutputDir,
                isUnpacked: modules.length > 1,
                type,
                entryId: bundleMetadata.entryId,
                modules
            };

        } catch (error) {
            console.error(`[GeneralDebundler] Unpacking failed: ${error.message}`);
            return {
                success: false,
                error: error.message,
                modules: []
            };
        }
    }
}

module.exports = { GeneralDebundler };
