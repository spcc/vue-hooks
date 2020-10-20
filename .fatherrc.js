export default {
  esm: 'rollup',
  cjs: 'rollup',
  umd: {
    minFile: true,
    globals: {
      axios: 'axios',
      vue: 'Vue',
      tslib: 'window'
    }
  },
  pkgs: ['vue-hooks', 'vue-hooks-compat'],
  extraExternals: ['@vue/reactivity', 'axios', 'vue'],
  extraBabelPlugins: ['transform-async-to-promises']
}
