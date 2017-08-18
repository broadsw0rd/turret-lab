import svelte from 'rollup-plugin-svelte'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

export default {
  moduleName: 'Client',
  entry: 'src/client/client.js',
  dest: 'dist/client.js',
  format: 'umd',
  plugins: [
    nodeResolve(),
    commonjs(),
    svelte()
  ]
}
