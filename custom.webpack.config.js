const dotenv = require('dotenv')
const fs = require('fs')
const path = require('path')
const R = require('rambdax')
const webpack = require('webpack')

/** @type { (env: webpack.Configuration) => webpack.Configuration } */
module.exports = (env) => {
	env = env || {}
	if (env.android) {
		env.appComponents = env.appComponents || []
		env.appComponents.push(path.join(__dirname, 'src/exoplayer/ExoPlayerActivity'))
	}

	/** @type { webpack.Configuration } */
	const config = require(path.join(__dirname, 'webpack.config.js'))(env)

	config.stats = 'errors-warnings'
	config.optimization.noEmitOnErrors = false

	let envfile = fs.readFileSync(path.join(__dirname, '.env'))
	config.plugins.push(
		new webpack.DefinePlugin(
			R.mapToObject(
				([key, value]) => ({ [`process.env.${key}`]: `"${value}"` }),
				Object.entries(dotenv.parse(envfile)),
			),
		),
	)

	return config
}
