import * as Application from '@nativescript/core/application'
import * as Frame from '@nativescript/core/ui/frame'

Application.android.on('activityCreated', function activityCreated(args) {
	android.os.StrictMode.setThreadPolicy(
		new android.os.StrictMode.ThreadPolicy.Builder().permitAll().build(),
	)
})

Application.android.on('activityNewIntent', function activityNewIntent(args) {
	let intent = args.intent as android.content.Intent
	if (intent.getAction() != `${Application.android.packageName}.action.VIEW`) {
		return
	}
	let url = intent.getDataString()
	console.log('activityNewIntent action.VIEW ->', url)
})

import ExoPlayerModal from '~/exoplayer/ExoPlayerModal.svelte'
import { showModal } from 'svelte-native'
Application.on('displayed', function displayed(args) {
	console.log('ExoPlayerModal ->', ExoPlayerModal)
	try {
		console.log('showModal ->', showModal)
		showModal({
			page: ExoPlayerModal,
			fullscreen: true,
			stretched: true,
			animated: true,
			android: { cancelable: false },
		})
	} catch (error) {
		console.error('displayed ->', error)
	}
})

// import ExoPlayerDialog from '~/exoplayer/ExoPlayerDialog'
// Application.on('displayed', function displayed(args) {
// 	// Application.getRootView()
// 	// Frame.reloadPage
// 	try {
// 		let dialog = new ExoPlayerDialog([process.env.TEST_MKV])
// 		console.log('dialog ->', dialog)
// 		console.log('dialog.show ->')
// 		dialog.show()
// 	} catch (error) {
// 		console.error('displayed ->', error.stack)
// 	}
// })
