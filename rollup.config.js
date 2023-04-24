import { defineConfig } from 'rollup'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'

/**
 * @type {import('rollup').RollupOptions}
 */
export default defineConfig({
  input: 'src/index.ts',
  output: {
    file: 'bin/index.js',
    format: 'cjs'
  },
  plugins: [
    commonjs(),
    nodeResolve({
      exportConditions: ['node'],
      browser: false
    }),
    terser(),
    typescript()
  ]
})
