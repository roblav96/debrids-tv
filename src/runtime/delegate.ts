import * as Application from '@nativescript/core/application'
import * as Frame from '@nativescript/core/ui/frame'
import * as Intents from '~/utils/Intents'
import * as R from 'rambdax'

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

Application.on(
	'displayed',
	R.once(function displayed(args: Application.AndroidActivityEventData) {
		let activity = args.activity as androidx.appcompat.app.AppCompatActivity
		try {
			let intent = new android.content.Intent(
				activity,
				app.debrids.tv.ExoPlayerActivity.class,
			)
			Intents.setVideos(intent, [
				// process.env.TEST_MKV_0,
				// process.env.TEST_MKV_1,
				// process.env.TEST_MKV_2,
				// process.env.TEST_MKV_3,
				// process.env.TEST_MKV_4,
				// process.env.TEST_MKV_5,
				process.env.TEST_MKV_6,
				// process.env.TEST_MKV_7,
				// process.env.TEST_MKV_8,
				// process.env.TEST_MKV_9,
			])
			activity.startActivity(intent)
		} catch (error) {
			console.error('displayed ->', error)
		}
	}),
)

// import type { ExoPlayerActivity } from '~/exoplayer/ExoPlayerActivity'
// import ExoPlayerModal from '~/exoplayer/ExoPlayerModal.vue'
// import Vue from 'nativescript-vue'
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
