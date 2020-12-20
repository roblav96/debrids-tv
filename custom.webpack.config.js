const dotenv = require('dotenv')
const fs = require('fs')
const path = require('path')
const R = require('rambdax')
const webpack = require('webpack')

/** @type { (env: webpack.Configuration) => webpack.Configuration } */
module.exports = (env) => {
	env = env || {}

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
