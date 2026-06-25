// build.js
const fs = require('fs');
const terser = require('terser');
const JavaScriptObfuscator = require('javascript-obfuscator');

// Step 1: 读取源文件
const code = fs.readFileSync('cryptico/aes.js', 'utf8');

// Step 2: 使用 Terser 压缩
terser.minify(code).then(minified => {
    if (minified.error) {
        console.error('Terser error:', minified.error);
        return;
    }

    // Step 3: 使用 JavaScript Obfuscator 进一步混淆
    const obfuscated = JavaScriptObfuscator.obfuscate(minified.code, {
        compact: true,
        controlFlowFlattening: true,
        controlFlowFlatteningThreshold: 1,
        numbersToExpressions: true,
        simplify: true,
        stringArray: true,
        stringArrayEncoding: ['rc4'], // 或 'base64'
        stringArrayThreshold: 1,
        selfDefending: true,
        disableConsoleOutput: true,
        transformObjectKeys: true,
    });

    // Step 4: 写入到目标文件
    fs.writeFileSync('output.js', obfuscated.getObfuscatedCode());
    console.log('✅ 混淆完成，输出文件为 output.js');
});