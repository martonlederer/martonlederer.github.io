const withPlugins = require('next-compose-plugins')
withImages = require('next-images')

module.exports = withPlugins([withImages()], {})
