'use strict'
// Template version: 1.2.6
// see http://vuejs-templates.github.io/webpack for documentation.
const path = require('path')

module.exports = {
  dev: {

    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},

    host: '192.168.9.182', // can be overwritten by process.env.HOST
    port: 8089, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: true,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false,

    useEslint: true,

    showEslintErrorsInOverlay: false,

    devtool: 'eval-source-map',

    cacheBusting: true,

    cssSourceMap: false,
  },
  build: {
    index: path.resolve(__dirname, '../dist/index.html'),

    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: './',

    productionSourceMap: true,

    devtool: '#source-map',

    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    bundleAnalyzerReport: process.env.npm_config_report
  }
}
