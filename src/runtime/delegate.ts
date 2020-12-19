import * as Application from '@nativescript/core/application'

Application.android.on('activityCreated', function activityCreated(args) {
	android.os.StrictMode.setThreadPolicy(
		new android.os.StrictMode.ThreadPolicy.Builder().permitAll().build(),
	)
})

Application.android.on('activityNewIntent', function activityNewIntent(args) {
	let intent = args.intent as android.content.Intent
	console.log('activityNewIntent intent ->', intent)
	if (intent.getAction() != `${Application.android.packageName}.action.VIEW`) {
		return
	}
	let url = intent.getDataString()
})

import ExoPlayerDialog from '~/exoplayer/ExoPlayerDialog'
Application.on('displayed', function displayed(args) {
	try {
		let dialog = new ExoPlayerDialog([process.env.TEST_MKV])
		console.log('dialog ->', dialog)
		console.log('dialog.show ->')
		dialog.show()
	} catch (error) {
		console.error('displayed ->', error.stack)
	}
})
