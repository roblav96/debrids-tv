const dotenv = require('dotenv')
const fs = require('fs')
const path = require('path')
const R = require('rambdax')
const webpack = require('webpack')
const WebpackConfig = require('./webpack.config.js')

/** @type { (env: webpack.Configuration) => webpack.Configuration } */
module.exports = (env) => {
	env = env || {}
	// if (env.android) {
	// 	env.appComponents = env.appComponents || []
	// 	env.appComponents.push(path.resolve(__dirname, 'src/playback/exoplayer.dialog.ts'))
	// }

	/** @type { webpack.Configuration } */
	const config = WebpackConfig(env)

	config.stats = 'errors-warnings'
	config.optimization.noEmitOnErrors = false

	config.plugins.push(
		new webpack.DefinePlugin(
			R.mapToObject(
				([key, value]) => ({ [`process.env.${key}`]: `"${value}"` }),
				Object.entries(dotenv.parse(fs.readFileSync('.env'))),
			),
		),
	)

	return config
}
