import * as Application from '@nativescript/core/application'
import * as Utils from '@nativescript/core/utils'

class NsAndroid {
	get context() {
		return Application.android.context as android.content.Context
	}
	get foregroundActivity() {
		return Application.android.foregroundActivity as androidx.appcompat.app.AppCompatActivity
	}
	get nativeApp() {
		return Application.android.nativeApp as android.app.Application
	}
	get startActivity() {
		return Application.android.startActivity as androidx.appcompat.app.AppCompatActivity
	}
	getApplication() {
		return Utils.ad.getApplication() as android.app.Application
	}
	getApplicationContext() {
		return Utils.ad.getApplicationContext() as android.content.Context
	}
	getInputMethodManager() {
		return Utils.ad.getInputMethodManager() as android.view.inputmethod.InputMethodManager
	}
}

global.NS || Object.assign(global, { NS: {} })
global.NS.android || Object.assign(global.NS, { android: new NsAndroid() })

declare global {
	export module NS {
		export var android: NsAndroid
	}
}

// const ns = {
// 	get context() {
// 		return Application.android.context as android.content.Context
// 	},
// 	get foregroundActivity() {
// 		return Application.android.foregroundActivity as androidx.appcompat.app.AppCompatActivity
// 	},
// 	get nativeApp() {
// 		return Application.android.nativeApp as android.app.Application
// 	},
// 	get startActivity() {
// 		return Application.android.startActivity as androidx.appcompat.app.AppCompatActivity
// 	},
// }

// import { DefineProperty } from '~/utils/Decorators'
// global.ns || Object.assign(global, { ns: {} })
// global.ns.android || Object.assign(global.ns, { android: {} })
// DefineProperty(global.ns.android, 'context', () => Application.android.context)
// DefineProperty(global.ns.android, 'foregroundActivity', () => Application.android.foregroundActivity)
// DefineProperty(global.ns.android, 'nativeApp', () => Application.android.nativeApp)
// DefineProperty(global.ns.android, 'startActivity', () => Application.android.startActivity)
// declare global {
// 	export module ns {
// 		export module android {
// 			export var context: globalAndroid.content.Context
// 			export var foregroundActivity: androidx.appcompat.app.AppCompatActivity
// 			export var nativeApp: globalAndroid.app.Application
// 			export var startActivity: androidx.appcompat.app.AppCompatActivity
// 		}
// 	}
// }
