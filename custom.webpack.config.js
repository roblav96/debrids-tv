const fs = require('fs')
const R = require('rambdax')
const webpack = require('webpack')
const WebpackConfig = require('./webpack.config.js')

module.exports = (env) => {
	const config = WebpackConfig(env)

	config.optimization.noEmitOnErrors = false

	let dotenv = require('dotenv').parse(fs.readFileSync('.env'))
	dotenv = R.mapKeys(key => `process.env.${key}`, dotenv)
	config.plugins.unshift(new webpack.DefinePlugin(dotenv))

	return config
}
