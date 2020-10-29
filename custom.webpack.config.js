const dotenv = require('dotenv')
const fs = require('fs')
const R = require('rambdax')
const webpack = require('webpack')
const WebpackConfig = require('./webpack.config.js')

/** @param env { import("webpack").Configuration } */
module.exports = (env) => {
	const config = WebpackConfig(env)

	config.optimization.noEmitOnErrors = false

	config.plugins.push(
		new webpack.DefinePlugin(
			R.mapKeys((key) => `process.env.${key}`, dotenv.parse(fs.readFileSync('.env'))),
		),
	)

	return config
}
