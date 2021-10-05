import { NativeScriptConfig } from '@nativescript/core'

export default {
	appPath: 'src',
	appResourcesPath: 'App_Resources',
	id: 'app.debrids.tv',
	android: {
		discardUncaughtJsExceptions: false,
		markingMode: 'none',
		maxLogcatObjectSize: Number.MAX_SAFE_INTEGER,
		suppressCallJSMethodExceptions: false,
		v8Flags: '--expose_gc',
	},
} as NativeScriptConfig
