import * as Application from '@nativescript/core/application'
import * as Frame from '@nativescript/core/ui/frame'
import * as Intents from '~/utils/Intents'
import * as R from 'rambdax'
import * as Utils from '@nativescript/core/utils'
import FFprobe from '~/exoplayer/FFprobe'
import RenderersFactory from '~/exoplayer/RenderersFactory'

@NativeClass()
@JavaProxy('app.debrids.tv.ExoPlayerActivity')
class ExoPlayerActivity extends androidx.appcompat.app.AppCompatActivity {
	isNativeScriptActivity: boolean
	private _callbacks: Frame.AndroidActivityCallbacks

	constructor() {
		super()
		return global.__native(this)
	}

	dispatchKeyEvent(event: android.view.KeyEvent) {
		return this.playerView?.dispatchKeyEvent(event) || super.dispatchKeyEvent(event)
	}

	videos: string[]
	audioSessionId: number
	playerView: com.google.android.exoplayer2.ui.PlayerView
	onCreate(savedInstanceState: android.os.Bundle) {
		this.requestWindowFeature(android.view.Window.FEATURE_NO_TITLE)
		this.isNativeScriptActivity = true
		if (!this._callbacks) {
			Frame.setActivityCallbacks(this)
		}
		this._callbacks.onCreate(this, savedInstanceState, this.getIntent(), super.onCreate)

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

		this.playerView = new com.google.android.exoplayer2.ui.PlayerView(this)
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
		this.playerView.requestFocus()

		this.audioSessionId = com.google.android.exoplayer2.C.generateAudioSessionIdV21(this)
		this.videos = Intents.getVideos(this.getIntent())
		this.initializePlayer().catch((error) => console.error('initializePlayer ->', error))
	}

	onNewIntent(intent: android.content.Intent) {
		this._callbacks.onNewIntent(this, intent, super.setIntent, super.onNewIntent)
		// super.onNewIntent(intent)
		// super.setIntent(intent)
		// this.videos = Videos.getIntent(this.getIntent())
		// this.initializePlayer().catch((error) => console.error('initializePlayer ->', error))
		// // for (let video of this.videos) {
		// // 	let extractor = new android.media.MediaExtractor()
		// // 	extractor.setDataSource(video)
		// // 	for (let i = 0; i < extractor.getTrackCount(); i++) {
		// // 		let track = extractor.getTrackFormat(i)
		// // 		console.log('track ->', track)
		// // 	}
		// // }
	}

	onSaveInstanceState(outState: android.os.Bundle) {
		this._callbacks.onSaveInstanceState(this, outState, super.onSaveInstanceState)
	}

	onStart() {
		this._callbacks.onStart(this, super.onStart)
	}

	onPause() {
		super.onPause()
		this.releasePlayer()
	}

	onStop() {
		this._callbacks.onStop(this, super.onStop)
		this.releasePlayer()
	}

	onDestroy() {
		this._callbacks.onDestroy(this, super.onDestroy)
	}

	onBackPressed() {
		this._callbacks.onBackPressed(this, super.onBackPressed)
	}

	// prettier-ignore
	onRequestPermissionsResult(requestCode: number, permissions: Array<string>, grantResults: Array<number>) {
		this._callbacks.onRequestPermissionsResult(this, requestCode, permissions, grantResults, undefined)
	}

	// prettier-ignore
	onActivityResult(requestCode: number, resultCode: number, data: android.content.Intent) {
		this._callbacks.onActivityResult(this, requestCode, resultCode, data, super.onActivityResult)
	}

	private _bandwidthMeter: com.google.android.exoplayer2.upstream.DefaultBandwidthMeter
	getBandwidthMeter() {
		if (this._bandwidthMeter) {
			return this._bandwidthMeter
		}
		let builder = new com.google.android.exoplayer2.upstream.DefaultBandwidthMeter.Builder(this)
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
			this,
		)
		builder.setTunnelingAudioSessionId(this.audioSessionId)
		builder.setForceHighestSupportedBitrate(true)
		builder.setPreferredAudioLanguage('eng')
		builder.setSelectUndeterminedTextLanguage(true)
		// builder.setRendererDisabled(com.google.android.exoplayer2.C.TRACK_TYPE_UNKNOWN, true)
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
			// this,
			this.getTrackSelectorParameters(),
			adaptiveTrackSelectionFactory,
		)
		// this._trackSelector.setParameters(this.getTrackSelectorParameters())
		return this._trackSelector
	}

	private _mediaItems: java.util.ArrayList<com.google.android.exoplayer2.MediaItem>
	async getMediaItems() {
		if (this._mediaItems) {
			return this._mediaItems
		}
		let mediaItems = new java.util.ArrayList<com.google.android.exoplayer2.MediaItem>()

		// let executions = com.arthenica.mobileffmpeg.FFmpeg.listExecutions()
		// com.arthenica.mobileffmpeg.Config.enableLogCallback(
		// 	new com.arthenica.mobileffmpeg.LogCallback({
		// 		apply(message) {
		// 			console.log('LogCallback message ->', message)
		// 		},
		// 	}),
		// )

		com.arthenica.mobileffmpeg.Config.setLogLevel(com.arthenica.mobileffmpeg.Level.AV_LOG_ERROR)
		let ffprobes = await Promise.all(this.videos.map((v) => FFprobe(v)))
		for (let i = 0; i < this.videos.length; i++) {
			let video = this.videos[i]
			let title = video.slice(video.lastIndexOf('/') + 1, video.lastIndexOf('.'))
			let builder = new com.google.android.exoplayer2.MediaItem.Builder()
			builder.setMediaId(i.toString())
			builder.setUri(video)
			builder.setMimeType(
				com.google.android.exoplayer2.util.Util.getAdaptiveMimeTypeForContentType(
					com.google.android.exoplayer2.util.Util.inferContentType(video),
				),
			)
			builder.setMediaMetadata(
				new com.google.android.exoplayer2.MediaMetadata.Builder().setTitle(title).build(),
			)

			// let task = new com.arthenica.mobileffmpeg.AsyncGetMediaInformationTask(
			// 	video,
			// 	new com.arthenica.mobileffmpeg.GetMediaInformationCallback({
			// 		apply(info) {
			// 			console.log('info.getLongFormat() ->', info.getLongFormat())
			// 		},
			// 	}),
			// )
			// let hashset = new java.util.HashSet()
			// hashset.add(new java.lang.String(''))
			// task.executeOnExecutor(
			// 	android.os.AsyncTask.THREAD_POOL_EXECUTOR,
			// 	Utils.ad.collections.stringSetToStringArray(hashset),
			// )

			// let task = new com.arthenica.mobileffmpeg.AsyncFFprobeExecuteTask(
			// 	`-hide_banner -v error -print_format json -show_format -show_streams -select_streams a -i ${video}`,
			// 	new com.arthenica.mobileffmpeg.ExecuteCallback({
			// 		apply(executionId, returnCode) {},
			// 	}),
			// )
			// task.executeOnExecutor(android.os.AsyncTask.THREAD_POOL_EXECUTOR)

			let tag = new java.util.HashMap<string, string>()
			for (let ii = 0; ii < ffprobes[i].length; ii++) {
				tag.put(ii.toString(), JSON.stringify(ffprobes[i][ii]))
			}
			builder.setTag(tag)

			mediaItems.add(builder.build())
		}
		this._mediaItems = mediaItems
		return this._mediaItems
	}

	// async getFFProbe() {
	// 	return new Promise((resolve, reject) => {

	// 		for (let video of this.videos) {
	// 			console.log('video ->', video)
	// 			let extractor = new android.media.MediaExtractor()
	// 			extractor.setDataSource(video)
	// 			for (let i = 0; i < extractor.getTrackCount(); i++) {
	// 				console.log('getTrackFormat ->', extractor.getTrackFormat(i))
	// 			}
	// 		}

	// 		// // com.arthenica.mobileffmpeg.Config.disableRedirection()
	// 		// com.arthenica.mobileffmpeg.Config.setLogLevel(
	// 		// 	com.arthenica.mobileffmpeg.Level.AV_LOG_ERROR,
	// 		// )
	// 		// // let cmd = `-hide_banner -loglevel error -print_format json -show_format -show_streams -show_private_data -i ${this.videos[0]}`
	// 		// // let cmd = `-hide_banner -loglevel error -print_format json -show_format -show_streams -select_streams a -i ${this.videos[0]}`
	// 		// let cmd = `-hide_banner -v error -print_format json -show_format -show_streams -select_streams a -i ${this.videos[0]}`
	// 		// let rc = com.arthenica.mobileffmpeg.FFprobe.execute(cmd)
	// 		// console.log('rc ->', rc)
	// 		// let output = JSON.parse(
	// 		// 	com.arthenica.mobileffmpeg.Config.getLastCommandOutput(),
	// 		// ) as FFprobe.Output
	// 		// console.log('output.format ->', output.format)
	// 		// let audio = output.streams.find((v) => v.tags?.language == 'eng') || output.streams[0]
	// 		// console.log('audio ->', audio)

	// 		// let json = JSON.parse(info.getAllProperties().toString())
	// 		// console.log('json ->', JSON.stringify(json, null, 4))
	// 		// let task = new com.arthenica.mobileffmpeg.AsyncGetMediaInformationTask(
	// 		// 	this.videos[0],
	// 		// 	new com.arthenica.mobileffmpeg.GetMediaInformationCallback({
	// 		// 		apply(info) {
	// 		// 			console.log('info.getLongFormat() ->', info.getLongFormat())
	// 		// 		},
	// 		// 	}),
	// 		// )
	// 	})
	// }

	player: com.google.android.exoplayer2.SimpleExoPlayer
	async initializePlayer() {
		console.warn('initializePlayer ->', this.videos)
		// let mediaItems = await this.getMediaItems()
		// console.log('mediaItems ->', mediaItems)
		// return

		// let renderersFactory = new com.google.android.exoplayer2.DefaultRenderersFactory(
		// 	Utils.ad.getApplicationContext(),
		// )
		let renderersFactory = new RenderersFactory(this)
		renderersFactory.setExtensionRendererMode(
			com.google.android.exoplayer2.DefaultRenderersFactory.EXTENSION_RENDERER_MODE_OFF,
		)
		renderersFactory.setEnableAudioFloatOutput(true)
		// renderersFactory.experimentalSetMediaCodecOperationMode(
		// 	com.google.android.exoplayer2.mediacodec.MediaCodecRenderer
		// 		.OPERATION_MODE_ASYNCHRONOUS_DEDICATED_THREAD_ASYNCHRONOUS_QUEUEING,
		// )

		// let mediaCodecSelector = new com.google.android.exoplayer2.mediacodec.MediaCodecSelector({
		// 	getDecoderInfos(mimeType: string, secure: boolean, tunneling: boolean) {
		// 		console.log('-> MediaCodecSelector ->')
		// 		console.log('getDecoderInfos ->', mimeType, secure, tunneling)
		// 		let mediaCodecInfos = com.google.android.exoplayer2.mediacodec.MediaCodecUtil.getDecoderInfos(
		// 			mimeType,
		// 			secure,
		// 			tunneling,
		// 		)
		// 		for (let i = 0; i < mediaCodecInfos.size(); i++) {
		// 			let mediaCodecInfo = mediaCodecInfos.get(
		// 				i,
		// 			) as com.google.android.exoplayer2.mediacodec.MediaCodecInfo
		// 			console.log('mediaCodecInfo ->', mediaCodecInfo)
		// 			console.log('getDefaultFormat() ->', mediaCodecInfo.capabilities.getDefaultFormat())
		// 			console.log('getAudioCapabilities() ->', mediaCodecInfo.capabilities.getAudioCapabilities())
		// 			console.log('getEncoderCapabilities() ->', mediaCodecInfo.capabilities.getEncoderCapabilities())
		// 			console.log('getVideoCapabilities() ->', mediaCodecInfo.capabilities.getVideoCapabilities())
		// 		}
		// 		return mediaCodecInfos
		// 	},
		// })
		// renderersFactory.setMediaCodecSelector(mediaCodecSelector)

		// let extractorsFactory = new com.google.android.exoplayer2.extractor.ExtractorsFactory({
		// 	createExtractors(uri, headers) {
		// 		uri = uri || android.net.Uri.EMPTY
		// 		headers = headers || new java.util.HashMap()
		// 		console.log('createExtractors ->', uri, headers)
		// 		let factory = new com.google.android.exoplayer2.extractor.DefaultExtractorsFactory()
		// 		console.log('factory ->', factory)
		// 		let extractors = factory.createExtractors(uri, headers)
		// 		for (let i = 0; i < extractors.length; i++) {
		// 			let extractor = extractors[i]
		// 			console.log(`extractor ${i} ->`, extractor)
		// 		}
		// 		return extractors
		// 		// let extractors = factory.createExtractors(uri, headers)
		// 		// console.log('extractors ->', extractors)
		// 		// return extractors
		// 	},
		// })

		// let extractorsFactory = new com.google.android.exoplayer2.extractor.DefaultExtractorsFactory()
		let dataSourceFactory = new com.google.android.exoplayer2.upstream.DefaultDataSourceFactory(
			this,
			new com.google.android.exoplayer2.ext.okhttp.OkHttpDataSourceFactory(
				new okhttp3.OkHttpClient.Builder().build(),
			),
		) as com.google.android.exoplayer2.upstream.DataSource.Factory
		let mediaSourceFactory = new com.google.android.exoplayer2.source.ProgressiveMediaSource.Factory(
			dataSourceFactory,
			// extractorsFactory,
		)
		// mediaSourceFactory.setContinueLoadingCheckIntervalBytes(
		// 	com.google.android.exoplayer2.source.ProgressiveMediaSource
		// 		.DEFAULT_LOADING_CHECK_INTERVAL_BYTES * 8,
		// )

		let loadControl = new com.google.android.exoplayer2.DefaultLoadControl.Builder()
			.setPrioritizeTimeOverSizeThresholds(false)
			.build()
		let audioAttributes = new com.google.android.exoplayer2.audio.AudioAttributes.Builder()
			.setContentType(com.google.android.exoplayer2.C.CONTENT_TYPE_MOVIE)
			.setUsage(com.google.android.exoplayer2.C.USAGE_MEDIA)
			.build()

		let trackSelector = this.getTrackSelector()
		let builder = new com.google.android.exoplayer2.SimpleExoPlayer.Builder(
			this,
			renderersFactory,
			// extractorsFactory,
		)
		// builder.setBandwidthMeter(this.getBandwidthMeter())
		builder.setTrackSelector(trackSelector)
		builder.setMediaSourceFactory(mediaSourceFactory)
		builder.setLoadControl(loadControl)
		builder.setAudioAttributes(audioAttributes, true)
		this.player = builder.build()
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

		// this.player.addDeviceListener(
		// 	new com.google.android.exoplayer2.device.DeviceListener(({
		// 		onDeviceInfoChanged(deviceInfo) {
		// 			console.log('deviceInfo ->', deviceInfo)
		// 		},
		// 	} as com.google.android.exoplayer2.device.DeviceListener) as any),
		// )
		// this.player.addMetadataOutput(
		// 	new com.google.android.exoplayer2.metadata.MetadataOutput({
		// 		onMetadata(metadata) {
		// 			metadata.describeContents
		// 			console.log('onMetadata ->', metadata)
		// 		},
		// 	}),
		// )

		this.player.addAudioDebugListener(
			new com.google.android.exoplayer2.audio.AudioRendererEventListener(({
				onAudioDecoderInitialized(
					decoderName,
					initializedTimestampMs,
					initializationDurationMs,
				) {
					console.log('onAudioDecoderInitialized ->', decoderName)
				},
				onAudioInputFormatChanged(format) {
					console.log('onAudioInputFormatChanged ->', format)
				},
				onSkipSilenceEnabledChanged(skipSilenceEnabled) {
					console.log('onSkipSilenceEnabledChanged ->', skipSilenceEnabled)
				},
			} as com.google.android.exoplayer2.audio.AudioRendererEventListener) as any),
		)

		this.player.addAudioListener(
			new com.google.android.exoplayer2.audio.AudioListener(({
				onAudioSessionId(audioSessionId) {
					console.log('onAudioSessionId ->', audioSessionId)
				},
				onAudioAttributesChanged(audioAttributes) {
					console.log('onAudioAttributesChanged ->', audioAttributes)
				},
			} as com.google.android.exoplayer2.audio.AudioListener) as any),
		)

		const randomSeekTo = R.once((player: com.google.android.exoplayer2.SimpleExoPlayer) => {
			return player.seekTo(R.random(0, player.getDuration() * 0.9))
		})
		this.player.addListener(
			new com.google.android.exoplayer2.Player.EventListener(({
				onPlaybackStateChanged: (state) => {
					console.log('onPlaybackStateChanged ->', state)
					if (state == com.google.android.exoplayer2.ExoPlayer.STATE_READY) {
						randomSeekTo(this.player)
					}
				},
			} as com.google.android.exoplayer2.Player.EventListener) as any),
		)

		this.playerView.setPlayer(this.player)
		this.player.setMediaItems(await this.getMediaItems())
		this.player.prepare()
		this.player.play()

		this.player.setAudioSessionId(this.audioSessionId)
		// this.player.addMetadataOutput(new com.google.android.exoplayer2.metadata.MetadataOutput({
		// 	onMetadata(metadata) {
		// 		console.log('metadata ->', metadata)
		// 	}
		// }))

		// let mediaSession = new android.support.v4.media.session.MediaSessionCompat(
		// 	this,
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

export default ExoPlayerActivity

// import type { default as ExoPlayerActivityClass } from '~/exoplayer/ExoPlayerActivity'
declare global {
	export module app.debrids.tv {
		export { ExoPlayerActivity }
		// export class ExoPlayerActivity extends ExoPlayerActivityClass {}
	}
}
