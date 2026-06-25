const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');
const WebpackObfuscator = require('webpack-obfuscator');

module.exports = {
    mode: 'production',
    entry: {
        // 主要的加密库入口
        crypto: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].min.js',
        library: 'CryptoLib',
        libraryTarget: 'umd',
        clean: true
    },
    resolve: {
        extensions: ['.js'],
        alias: {
            // 为goog命名空间创建别名
            'goog': path.resolve(__dirname, 'src/goog-shim.js')
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [['@babel/preset-env', {
                            targets: {
                                browsers: ['> 1%', 'last 2 versions']
                            },
                            modules: false
                        }]],
                        plugins: [
                            // 移除console.log等调试代码
                            ['transform-remove-console', { exclude: ['error', 'warn'] }]
                        ]
                    }
                }
            }
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    compress: {
                        // 最大程度压缩
                        drop_console: true,
                        drop_debugger: true,
                        pure_funcs: ['console.log', 'console.info'],
                        passes: 3, // 多次压缩
                        unsafe: true,
                        unsafe_comps: true,
                        unsafe_math: true,
                        unsafe_proto: true,
                        unsafe_regexp: true,
                        unsafe_undefined: true
                    },
                    mangle: {
                        // 最大程度混淆变量名
                        toplevel: true,
                        properties: {
                            regex: /^_/ // 混淆以_开头的私有属性
                        }
                    },
                    format: {
                        comments: false // 移除所有注释
                    }
                },
                extractComments: false
            })
        ],
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    },
    plugins: [
        // 定义全局变量来替换goog.DEBUG等
        new webpack.DefinePlugin({
            'goog.DEBUG': false,
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        // 进一步混淆
        new webpack.ids.HashedModuleIdsPlugin(),
        new WebpackObfuscator({
            rotateStringArray: true,
            stringArray: true,
            stringArrayThreshold: 0.8,
            transformObjectKeys: true,
            unicodeEscapeSequence: false
        }, [])
    ]
};