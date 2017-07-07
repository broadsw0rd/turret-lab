import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

export default {
  moduleName: 'Server',
  entry: 'src/server/server.js',
  dest: 'dist/server.js',
  format: 'iife',
  plugins: [
    nodeResolve(),
    commonjs()
  ]
}
