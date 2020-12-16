import * as Application from '@nativescript/core/application'
import * as Types from '@nativescript/core/utils/types'

@NativeClass
class ExoPlayerDialog extends androidx.appcompat.app.AppCompatDialog {
	constructor(public urls: string[]) {
		super(
			Application.android.foregroundActivity,
			android.R.style.Theme_Black_NoTitleBar_Fullscreen,
		)
		return global.__native(this)
	}

	onBackPressed() {
		Application.android.notify({
			eventName: 'activityBackPressed',
			object: Application.android,
			activity: Application.android.foregroundActivity,
			cancel: false,
		} as Application.AndroidActivityBackPressedEventData)
	}

	playerView: com.google.android.exoplayer2.ui.PlayerView
	onCreate(savedInstanceState: android.os.Bundle) {
		super.onCreate(savedInstanceState)
		this.setCancelable(false)

		let window = this.getWindow()
		window.addFlags(android.view.WindowManager.LayoutParams.FLAG_FULLSCREEN)
		window.addFlags(android.view.WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON)

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

	private _bandwidthMeter: com.google.android.exoplayer2.upstream.DefaultBandwidthMeter
	getBandwidthMeter() {
		if (this._bandwidthMeter) {
			return this._bandwidthMeter
		}
		let builder = new com.google.android.exoplayer2.upstream.DefaultBandwidthMeter.Builder(
			Application.android.foregroundActivity,
		)
		builder.setInitialBitrateEstimate(
			com.google.android.exoplayer2.upstream.DefaultBandwidthMeter
				.DEFAULT_INITIAL_BITRATE_ESTIMATE * 10,
		)
		builder.setSlidingWindowMaxWeight(
			com.google.android.exoplayer2.upstream.DefaultBandwidthMeter
				.DEFAULT_SLIDING_WINDOW_MAX_WEIGHT * 5,
		)
		builder.setResetOnNetworkTypeChange(false)
		this._bandwidthMeter = builder.build()
		return this._bandwidthMeter
	}

	private _trackSelectorParameters: com.google.android.exoplayer2.trackselection.DefaultTrackSelector.Parameters
	getTrackSelectorParameters() {
		if (this._trackSelectorParameters) {
			return this._trackSelectorParameters
		}
		let builder = new com.google.android.exoplayer2.trackselection.DefaultTrackSelector.ParametersBuilder(
			Application.android.foregroundActivity,
		)
		builder.setTunnelingAudioSessionId(
			com.google.android.exoplayer2.C.generateAudioSessionIdV21(
				Application.android.foregroundActivity,
			),
		)
		builder.setForceHighestSupportedBitrate(true)
		builder.setPreferredAudioLanguage('eng')
		builder.setSelectUndeterminedTextLanguage(true)
		builder.setDisabledTextTrackSelectionFlags(
			com.google.android.exoplayer2.C.SELECTION_FLAG_AUTOSELECT |
				com.google.android.exoplayer2.C.SELECTION_FLAG_DEFAULT,
		)
		this._trackSelectorParameters = builder.build() as com.google.android.exoplayer2.trackselection.DefaultTrackSelector.Parameters
		return this._trackSelectorParameters
	}

	private _trackSelector: com.google.android.exoplayer2.trackselection.DefaultTrackSelector
	getTrackSelector() {
		if (this._trackSelector) {
			return this._trackSelector
		}
		let adaptiveTrackSelectionFactory = new com.google.android.exoplayer2.trackselection.AdaptiveTrackSelection.Factory()
		this._trackSelector = new com.google.android.exoplayer2.trackselection.DefaultTrackSelector(
			this.getTrackSelectorParameters(),
			adaptiveTrackSelectionFactory,
		)
		return this._trackSelector
	}

	private _mediaItems: java.util.ArrayList<com.google.android.exoplayer2.MediaItem>
	getMediaItems() {
		if (this._mediaItems) {
			return this._mediaItems
		}
		let mediaItems = new java.util.ArrayList<com.google.android.exoplayer2.MediaItem>()
		for (let url of this.urls) {
			let title = url.slice(url.lastIndexOf('/') + 1, url.lastIndexOf('.'))
			let builder = new com.google.android.exoplayer2.MediaItem.Builder()
			builder.setUri(url)
			builder.setMimeType(
				com.google.android.exoplayer2.util.Util.getAdaptiveMimeTypeForContentType(
					com.google.android.exoplayer2.util.Util.inferContentType(url),
				),
			)
			builder.setMediaMetadata(
				new com.google.android.exoplayer2.MediaMetadata.Builder().setTitle(title).build(),
			)
			mediaItems.add(builder.build())
		}
		this._mediaItems = mediaItems
		return this._mediaItems
	}

	player: com.google.android.exoplayer2.SimpleExoPlayer
	initializePlayer() {
		let renderersFactory = new com.google.android.exoplayer2.DefaultRenderersFactory(
			Application.android.foregroundActivity,
		)
		renderersFactory.setExtensionRendererMode(
			com.google.android.exoplayer2.DefaultRenderersFactory.EXTENSION_RENDERER_MODE_OFF,
		)

		let extractorsFactory = new com.google.android.exoplayer2.extractor.DefaultExtractorsFactory()
		let dataSourceFactory = new com.google.android.exoplayer2.upstream.DefaultDataSourceFactory(
			Application.android.foregroundActivity,
			new com.google.android.exoplayer2.ext.okhttp.OkHttpDataSourceFactory(
				new okhttp3.OkHttpClient.Builder().build(),
			),
		) as com.google.android.exoplayer2.upstream.DataSource.Factory
		let mediaSourceFactory = new com.google.android.exoplayer2.source.ProgressiveMediaSource.Factory(
			dataSourceFactory,
			extractorsFactory,
		)

		let builder = new com.google.android.exoplayer2.SimpleExoPlayer.Builder(
			Application.android.foregroundActivity,
			renderersFactory,
			extractorsFactory,
		)
		builder.setBandwidthMeter(this.getBandwidthMeter())
		builder.setTrackSelector(this.getTrackSelector())
		builder.setMediaSourceFactory(mediaSourceFactory)
		this.player = builder.build()
		this.player.setPlayWhenReady(true)
		this.playerView.setPlayer(this.player)
		this.player.setMediaItems(this.getMediaItems())
		this.player.prepare()
	}

	releasePlayer() {
		this.player?.stop()
		this.player?.release()
		this.player = null
	}
}

export default ExoPlayerDialog
