import * as Application from '@nativescript/core/application'
import { DefineProperty } from '@/utils/decorators'

Application.android.on('activityCreated', function activityCreated(args) {
	android.os.StrictMode.setThreadPolicy(
		new android.os.StrictMode.ThreadPolicy.Builder().permitAll().build(),
	)
})

global.ns ?? Object.assign(global, { ns: {} })
global.ns.ad ?? Object.assign(global.ns, { ad: {} })
DefineProperty(global.ns.ad, 'context', () => Application.android.context)
DefineProperty(global.ns.ad, 'foregroundActivity', () => Application.android.foregroundActivity)
DefineProperty(global.ns.ad, 'nativeApp', () => Application.android.nativeApp)
DefineProperty(global.ns.ad, 'startActivity', () => Application.android.startActivity)
declare global {
	export module ns {
		export module ad {
			export var context: android.content.Context
			export var foregroundActivity: androidx.appcompat.app.AppCompatActivity
			export var nativeApp: android.app.Application
			export var startActivity: androidx.appcompat.app.AppCompatActivity
		}
	}
}

// Application.android.on('activityNewIntent', function activityNewIntent(args) {
// 	console.log('activityNewIntent ->', args)
// })
