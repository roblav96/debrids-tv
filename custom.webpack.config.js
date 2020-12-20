const dotenv = require('dotenv')
const fs = require('fs')
const path = require('path')
const R = require('rambdax')
const webpack = require('webpack')

/** @type { (env: webpack.Configuration) => webpack.Configuration } */
module.exports = (env) => {
	env = env || {}
	// if (env.android) {
	// 	env.appComponents = env.appComponents || []
	// 	env.appComponents.push(path.join(__dirname, 'src/playback/exoplayer.dialog.ts'))
	// }

	/** @type { webpack.Configuration } */
	const config = require(path.join(__dirname, 'webpack.config.js'))(env)

	config.stats = 'errors-only'

	config.module.rules.forEach((rule) => {
		if (!Array.isArray(rule.use)) return
		rule.use.forEach((use) => {
			if (use.loader == 'svelte-loader-hot' && R.hasPath('options.hotReload', use)) {
				use.options.hotReload = false
			}
		})
	})
	console.log('config.module.rules.slice(-1)[0].use ->', config.module.rules.slice(-1)[0].use)

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
