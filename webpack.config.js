const dotenv = require('dotenv')
const fs = require('fs')
const path = require('path')
const webpack = require('@nativescript/webpack')

/** @type { (env: webpack.IWebpackEnv) => webpack.Configuration } */
module.exports = (env) => {
	if (env.android) {
		env.appComponents = env.appComponents || []
		// env.appComponents.push('./src/exoplayer/ExoPlayerActivity')
		env.appComponents.push(path.join(__dirname, 'src/exoplayer/ExoPlayerActivity'))
	}
	webpack.init(env)

	let envvars = dotenv.parse(fs.readFileSync(path.join(__dirname, '.env')))
	let dotvars = Object.entries(envvars).reduce((target, [key, value], index) => {
		return Object.assign(target, { [`process.env.${key}`]: `"${value}"` })
	}, {})

	webpack.chainWebpack((config) => {
		// config.devtool('source-map')
		// config.stats('errors-warnings')
		// config.stats({ logging: 'verbose' })
		config.optimization.noEmitOnErrors(false)
		config.plugin('DefinePlugin').tap((args) => {
			Object.assign(args[0], dotvars)
			return args
		})
	})

	return webpack.resolveConfig()
}
