import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import obfuscator from 'rollup-plugin-obfuscator';

const isProduction = process.env.NODE_ENV === 'production';

const baseConfig = {
  input: 'src/index.js',
  external: [],
  plugins: [
    resolve({
      browser: true,
      preferBuiltins: false
    }),
    commonjs()
  ]
};

const productionPlugins = [
  terser({
    compress: {
      drop_console: true,
      drop_debugger: true,
      pure_funcs: ['console.log', 'console.info', 'console.debug'],
      passes: 3, // 多次压缩
      unsafe: true,
      unsafe_comps: true,
      unsafe_math: true,
      unsafe_proto: true,
      unsafe_regexp: true
    },
    mangle: {
      toplevel: true,
      properties: {
        regex: /^_/ // 混淆以_开头的属性
      }
    },
    format: {
      comments: false
    }
  }),
  obfuscator({
    compact: true,
    controlFlowFlattening: true,
    controlFlowFlatteningThreshold: 0.75,
    deadCodeInjection: true,
    deadCodeInjectionThreshold: 0.4,
    debugProtection: false,
    debugProtectionInterval: false,
    disableConsoleOutput: true,
    identifierNamesGenerator: 'hexadecimal',
    log: false,
    renameGlobals: false,
    rotateStringArray: true,
    selfDefending: true,
    shuffleStringArray: true,
    splitStrings: true,
    splitStringsChunkLength: 10,
    stringArray: true,
    stringArrayEncoding: ['base64'],
    stringArrayThreshold: 0.75,
    transformObjectKeys: true,
    unicodeEscapeSequence: false
  })
];

export default [
  // UMD build
  {
    ...baseConfig,
    output: {
      file: 'dist/cryptojs.umd.js',
      format: 'umd',
      name: 'CryptoJS',
      sourcemap: !isProduction
    },
    plugins: [
      ...baseConfig.plugins,
      ...(isProduction ? productionPlugins : [])
    ]
  },
  // ES Module build
  {
    ...baseConfig,
    output: {
      file: 'dist/cryptojs.esm.js',
      format: 'es',
      sourcemap: !isProduction
    },
    plugins: [
      ...baseConfig.plugins,
      ...(isProduction ? productionPlugins : [])
    ]
  },
  // CommonJS build
  {
    ...baseConfig,
    output: {
      file: 'dist/cryptojs.cjs.js',
      format: 'cjs',
      sourcemap: !isProduction
    },
    plugins: [
      ...baseConfig.plugins,
      ...(isProduction ? productionPlugins : [])
    ]
  }
];