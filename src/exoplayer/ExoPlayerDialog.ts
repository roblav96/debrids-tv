import * as Application from '@nativescript/core/application'
import * as R from 'rambdax'
import * as Types from '@nativescript/core/utils/types'

@NativeClass
class ExoPlayerDialog extends android.app.Dialog {
	constructor(public urls: string[]) {
		super(
			Application.android.foregroundActivity,
			android.R.style.Theme_Black_NoTitleBar_Fullscreen,
		)
		return global.__native(this)
	}

	dispatchKeyEvent(event: android.view.KeyEvent) {
		return this.playerView?.dispatchKeyEvent(event) || super.dispatchKeyEvent(event)
	}

	onBackPressed() {
		let args = {
			eventName: 'activityBackPressed',
			object: Application.android,
			activity: Application.android.foregroundActivity,
			cancel: false,
		} as Application.AndroidActivityBackPressedEventData
		Application.android.notify(args)
		if (!args.cancel) {
			super.onBackPressed()
		}
	}

	playerView: com.google.android.exoplayer2.ui.PlayerView
	onCreate(savedInstanceState: android.os.Bundle) {
		super.onCreate(savedInstanceState)
		this.setCancelable(false)
		this.requestWindowFeature(android.view.Window.FEATURE_NO_TITLE)

		let window = this.getWindow()
		window.addFlags(android.view.WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON)
		window.addFlags(android.view.WindowManager.LayoutParams.FLAG_FULLSCREEN)
		window.setLayout(
			android.view.ViewGroup.LayoutParams.MATCH_PARENT,
			android.view.ViewGroup.LayoutParams.MATCH_PARENT,
		)
		window.setBackgroundDrawable(
			new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK),
		)

		let decor = window.getDecorView()
		decor.setBackgroundColor(android.R.color.black)
		decor.setSystemUiVisibility(
			android.view.View.SYSTEM_UI_FLAG_HIDE_NAVIGATION |
				android.view.View.SYSTEM_UI_FLAG_FULLSCREEN |
				android.view.View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY,
		)

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
		this.playerView.requestFocus()
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
				.DEFAULT_INITIAL_BITRATE_ESTIMATE * 8,
		)
		builder.setSlidingWindowMaxWeight(
			com.google.android.exoplayer2.upstream.DefaultBandwidthMeter
				.DEFAULT_SLIDING_WINDOW_MAX_WEIGHT * 4,
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
			// Application.android.foregroundActivity,
			this.getTrackSelectorParameters(),
			adaptiveTrackSelectionFactory,
		)
		// this._trackSelector.setParameters(this.getTrackSelectorParameters())
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

	private static randomSeekTo = R.once(function (
		player: com.google.android.exoplayer2.SimpleExoPlayer,
	) {
		let duration = player.getDuration()
		player.seekTo(R.random(duration * 0.2, duration * 0.8))
	})

	player: com.google.android.exoplayer2.SimpleExoPlayer
	initializePlayer() {
		let renderersFactory = new com.google.android.exoplayer2.DefaultRenderersFactory(
			Application.android.foregroundActivity,
		)
		renderersFactory.setExtensionRendererMode(
			com.google.android.exoplayer2.DefaultRenderersFactory.EXTENSION_RENDERER_MODE_OFF,
		)
		// let mediaCodecSelector = new com.google.android.exoplayer2.mediacodec.MediaCodecSelector({
		// 	getDecoderInfos(mimeType: string, secure: boolean, tunneling: boolean) {
		// 		console.log('getDecoderInfos ->', mimeType)
		// 		let exoDefault = com.google.android.exoplayer2.mediacodec.MediaCodecSelector.DEFAULT
		// 		let mediaCodecInfos = exoDefault.getDecoderInfos(mimeType, secure, tunneling)
		// 		console.log('mediaCodecInfos ->', mediaCodecInfos)
		// 		return java.util.Collections.unmodifiableList(
		// 			new java.util.ArrayList(mediaCodecInfos),
		// 		)
		// 	},
		// })
		// renderersFactory.setMediaCodecSelector(mediaCodecSelector)

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
		// mediaSourceFactory.setContinueLoadingCheckIntervalBytes(
		// 	com.google.android.exoplayer2.source.ProgressiveMediaSource
		// 		.DEFAULT_LOADING_CHECK_INTERVAL_BYTES * 24,
		// )

		// for (let url of this.urls) {
		// 	let extractor = new android.media.MediaExtractor()
		// 	extractor.setDataSource(url)
		// 	for (let i = 0; i < extractor.getTrackCount(); i++) {
		// 		let track = extractor.getTrackFormat(i)
		// 		console.log('track ->', track)
		// 	}
		// }

		let loadControl = new com.google.android.exoplayer2.DefaultLoadControl.Builder()
			.setPrioritizeTimeOverSizeThresholds(false)
			.build()
		let audioAttributes = new com.google.android.exoplayer2.audio.AudioAttributes.Builder()
			.setContentType(com.google.android.exoplayer2.C.CONTENT_TYPE_MOVIE)
			.setUsage(com.google.android.exoplayer2.C.USAGE_MEDIA)
			.build()

		let trackSelector = this.getTrackSelector()
		let builder = new com.google.android.exoplayer2.SimpleExoPlayer.Builder(
			Application.android.foregroundActivity,
			renderersFactory,
			extractorsFactory,
		)
		builder.setBandwidthMeter(this.getBandwidthMeter())
		builder.setTrackSelector(trackSelector)
		builder.setMediaSourceFactory(mediaSourceFactory)
		builder.setLoadControl(loadControl)
		builder.setAudioAttributes(audioAttributes, true)
		this.player = builder.build()
		this.player.setPlayWhenReady(true)
		this.player.addAnalyticsListener(
			new com.google.android.exoplayer2.util.EventLogger(trackSelector),
		)

		// this.player.addVideoListener(
		// 	new com.google.android.exoplayer2.video.VideoListener({
		// 		onVideoSizeChanged(
		// 			width,
		// 			height,
		// 			unappliedRotationDegrees,
		// 			pixelWidthHeightRatio,
		// 		) {},
		// 		onSurfaceSizeChanged(width, height) {},
		// 		onRenderedFirstFrame() {
		// 			console.log('onRenderedFirstFrame ->')
		// 		},
		// 	}),
		// )

		// this.player.addListener(new EventListenerImpl())
		this.player.addListener(
			new com.google.android.exoplayer2.Player.EventListener(({
				onPlaybackStateChanged: (state) => {
					// console.log('onPlaybackStateChanged ->', state)
					if (state == com.google.android.exoplayer2.ExoPlayer.STATE_READY) {
						ExoPlayerDialog.randomSeekTo(this.player)
					}
				},
			} as com.google.android.exoplayer2.Player.EventListener) as any),
		)

		this.playerView.setPlayer(this.player)
		this.player.setMediaItems(this.getMediaItems())
		this.player.prepare()

		// this.player.setAudioSessionId()
		// this.player.addMetadataOutput(new com.google.android.exoplayer2.metadata.MetadataOutput({
		// 	onMetadata(metadata) {
		// 		console.log('metadata ->', metadata)
		// 	}
		// }))

		// let mediaSession = new android.support.v4.media.session.MediaSessionCompat(
		// 	Application.android.foregroundActivity,
		// 	Application.android.packageName,
		// )
		// let mediaSessionConnector = new com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector(
		// 	mediaSession,
		// )
		// mediaSessionConnector.setPlayer(this.player)
	}

	releasePlayer() {
		this.player?.stop()
		this.player?.release()
		this.player = null
	}
}

export default ExoPlayerDialog

// interface EventListenerImpl extends com.google.android.exoplayer2.Player.EventListener {}
// @NativeClass()
// @Interfaces([com.google.android.exoplayer2.Player.EventListener])
// class EventListenerImpl extends java.lang.Object {
// 	constructor() {
// 		super()
// 		return global.__native(this)
// 	}
// 	onTimelineChanged(timeline, reason) {
// 		console.log('onTimelineChanged ->')
// 	}
// 	onMediaItemTransition(mediaItem: com.google.android.exoplayer2.MediaItem, reason: number) {
// 		console.log('onMediaItemTransition ->')
// 	}
// 	onTracksChanged(
// 		trackGroups: com.google.android.exoplayer2.source.TrackGroupArray,
// 		trackSelections: com.google.android.exoplayer2.trackselection.TrackSelectionArray,
// 	) {
// 		console.log('onTracksChanged ->')
// 	}
// 	onIsLoadingChanged(isLoading: boolean) {
// 		console.log('onIsLoadingChanged ->')
// 	}
// 	onLoadingChanged(isLoading: boolean) {
// 		console.log('onLoadingChanged ->')
// 	}
// 	onPlayerStateChanged(playWhenReady: boolean, playbackState: number) {
// 		console.log('onPlayerStateChanged ->')
// 	}
// 	onPlaybackStateChanged(state: number) {
// 		console.log('onPlaybackStateChanged ->')
// 	}
// 	onPlayWhenReadyChanged(playWhenReady: boolean, reason: number) {
// 		console.log('onPlayWhenReadyChanged ->')
// 	}
// 	onPlaybackSuppressionReasonChanged(playbackSuppressionReason: number) {
// 		console.log('onPlaybackSuppressionReasonChanged ->')
// 	}
// 	onIsPlayingChanged(isPlaying: boolean) {
// 		console.log('onIsPlayingChanged ->')
// 	}
// 	onRepeatModeChanged(repeatMode: number) {
// 		console.log('onRepeatModeChanged ->')
// 	}
// 	onShuffleModeEnabledChanged(shuffleModeEnabled: boolean) {
// 		console.log('onShuffleModeEnabledChanged ->')
// 	}
// 	onPlayerError(error: com.google.android.exoplayer2.ExoPlaybackException) {
// 		console.log('onPlayerError ->')
// 	}
// 	onPositionDiscontinuity(reason: number) {
// 		console.log('onPositionDiscontinuity ->')
// 	}
// 	onPlaybackParametersChanged(playbackParameters) {
// 		console.log('onPlaybackParametersChanged ->')
// 	}
// 	onExperimentalOffloadSchedulingEnabledChanged(offloadSchedulingEnabled: boolean) {
// 		console.log('onExperimentalOffloadSchedulingEnabledChanged ->')
// 	}
// }
