import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import babel from '@rollup/plugin-babel';
import typescript from 'rollup-plugin-typescript2';
export default {
  input: 'src/index.ts',
  // 核心选项
  plugins: [
    commonjs(), //要放在最前
    nodeResolve(),
    json(),
    typescript(),
    babel({
      exclude: 'node_modules/**', // 只编译我们的源代码
      babelHelpers: 'external',
      extensions: ['.js', '.ts'],
    }),
  ],

  // 额外选项
  // onwarn,

  // danger zone
  // acorn,
  // context,
  // moduleContext,
  // legacy,
  output: {
    // 必须 (如果要输出多个，可以是一个数组)
    // 核心选项
    file: 'dist/bundle.js', // 必须
    format: 'umd', // 必须
    name: 'performVisitor', // 必须, 输出的包名
    //   globals,

    // 额外选项
    //   paths,
    //   banner,
    //   footer,
    //   intro,
    //   outro,
    sourcemap: true,
    //   sourcemapFile,
    //   interop,

    //   // 高危选项
    //   exports,
    //   amd,
    //   indent,
    //   strict
  },
};
