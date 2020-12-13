import * as Application from '@nativescript/core/application'

@NativeClass
class ExoPlayerDialog extends androidx.appcompat.app.AppCompatDialog {
	constructor(public urls: string[]) {
		super(
			Application.android.foregroundActivity,
			android.R.style.Theme_Black_NoTitleBar_Fullscreen,
		)
		return global.__native(this)
	}

	// frame: androidx.constraintlayout.widget.ConstraintLayout
	playerView: com.google.android.exoplayer2.ui.PlayerView
	onCreate(savedInstanceState: android.os.Bundle) {
		super.onCreate(savedInstanceState)
		this.setCancelable(false)
		this.requestWindowFeature(android.view.Window.FEATURE_NO_TITLE)

		let window = this.getWindow()
		window.addFlags(android.view.WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON)
		window.setFlags(
			android.view.WindowManager.LayoutParams.FLAG_FULLSCREEN,
			android.view.WindowManager.LayoutParams.FLAG_FULLSCREEN,
		)
		window.setLayout(
			android.view.WindowManager.LayoutParams.MATCH_PARENT,
			android.view.WindowManager.LayoutParams.MATCH_PARENT,
		)
		window.setBackgroundDrawable(
			new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK),
		)

		let decor = window.getDecorView().getRootView()
		decor.setKeepScreenOn(true)
		decor.setBackgroundColor(android.R.color.black)
		decor.setSystemUiVisibility(
			android.view.View.SYSTEM_UI_FLAG_FULLSCREEN |
				android.view.View.SYSTEM_UI_FLAG_HIDE_NAVIGATION,
		)

		// this.frame = new androidx.constraintlayout.widget.ConstraintLayout(
		// 	Application.android.foregroundActivity,
		// )
		// this.frame.setLayoutParams(
		// 	new android.widget.LinearLayout.LayoutParams(
		// 		android.view.WindowManager.LayoutParams.MATCH_PARENT,
		// 		android.view.WindowManager.LayoutParams.MATCH_PARENT,
		// 	),
		// )
		// this.frame.setKeepScreenOn(true)

		this.playerView = new com.google.android.exoplayer2.ui.PlayerView(
			Application.android.foregroundActivity,
		)
		this.playerView.setLayoutParams(
			new android.widget.LinearLayout.LayoutParams(
				android.view.ViewGroup.LayoutParams.MATCH_PARENT,
				android.view.ViewGroup.LayoutParams.MATCH_PARENT,
			),
		)
		this.playerView.setShowBuffering(
			com.google.android.exoplayer2.ui.PlayerView.SHOW_BUFFERING_ALWAYS,
		)

		this.setContentView(this.playerView)
	}

	onStart() {
		super.onStart()
		this.initializePlayer()
	}

	onStop() {
		super.onStop()
		this.releasePlayer()
	}

	onBackPressed() {
		Application.android.notify({
			eventName: 'activityBackPressed',
			object: Application.android,
			activity: Application.android.foregroundActivity,
			cancel: false,
		} as Application.AndroidActivityBackPressedEventData)
	}

	player: com.google.android.exoplayer2.SimpleExoPlayer
	initializePlayer() {

	}

	releasePlayer() {
		this.player?.stop()
		this.player?.release()
		this.player = null
	}
}

export default ExoPlayerDialog
