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

	let envvars = dotenv.parse(fs.readFileSync(path.join(__dirname, '.env')))
	config.plugins.push(
		new webpack.DefinePlugin(
			Object.entries(envvars).reduce((target, [key, value], index) => {
				return Object.assign(target, { [`process.env.${key}`]: `"${value}"` })
			}, {}),
		),
	)

	return config
}
