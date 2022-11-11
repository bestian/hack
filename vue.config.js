const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  pwa: {
    workboxOptions: {
      exclude: [/\.gitkeep/],
      skipWaiting: true
    }
  },
  transpileDependencies: true
})
