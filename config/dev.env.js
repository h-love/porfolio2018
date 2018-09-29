'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  rules: [
    // ... other rules omitted

    // this will apply to both plain `.scss` files
    // AND `<style lang="scss">` blocks in `.vue` files
    {
      test: /\.scss$/,
      use: [
        'vue-style-loader',
        'css-loader',
        'sass-loader'
      ]
    }
  ]
})
