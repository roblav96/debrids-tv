import * as Application from '@nativescript/core/application'
import * as ExoFormat from '~/exoplayer/ExoFormat'
import * as FFprobe from '~/exoplayer/FFprobe'
import * as R from 'rambdax'
import * as Types from '@nativescript/core/utils/types'
import * as Utils from '@nativescript/core/utils'
import ExoDisplay from '~/exoplayer/ExoDisplay'
import type ExoPlayerActivity from '~/exoplayer/ExoPlayerActivity'

@NativeClass()
class RenderersFactory extends com.google.android.exoplayer2.DefaultRenderersFactory {
	constructor(public activity: ExoPlayerActivity) {
		super(Utils.ad.getApplicationContext())
		return global.__native(this)
	}

	// audioMediaCodecOperationMode: number
	// videoMediaCodecOperationMode: number
	// experimentalSetMediaCodecOperationMode(mode: number) {
	// 	this.audioMediaCodecOperationMode = mode
	// 	this.videoMediaCodecOperationMode = mode
	// 	return super.experimentalSetMediaCodecOperationMode(mode)
	// }
	// experimentalSetAudioMediaCodecOperationMode(mode: number) {
	// 	this.audioMediaCodecOperationMode = mode
	// 	return super.experimentalSetAudioMediaCodecOperationMode(mode)
	// }
	// experimentalSetVideoMediaCodecOperationMode(mode: number) {
	// 	this.videoMediaCodecOperationMode = mode
	// 	return super.experimentalSetVideoMediaCodecOperationMode(mode)
	// }

	// createRenderers(
	// 	eventHandler: android.os.Handler,
	// 	videoRendererEventListener: com.google.android.exoplayer2.video.VideoRendererEventListener,
	// 	audioRendererEventListener: com.google.android.exoplayer2.audio.AudioRendererEventListener,
	// 	textRendererOutput: com.google.android.exoplayer2.text.TextOutput,
	// 	metadataRendererOutput: com.google.android.exoplayer2.metadata.MetadataOutput,
	// ) {
	// 	// @ts-ignore
	// 	let renderers = super.createRenderers(...arguments)
	// 	for (let i = 0; i < renderers.length; i++) {
	// 		let renderer = renderers[i]
	// 		console.log(`renderer ${i} ->`, renderer)
	// 	}
	// 	return renderers
	// }

	buildVideoRenderers(
		context: android.content.Context,
		extensionRendererMode: number,
		mediaCodecSelector: com.google.android.exoplayer2.mediacodec.MediaCodecSelector,
		enableDecoderFallback: boolean,
		eventHandler: android.os.Handler,
		eventListener: com.google.android.exoplayer2.video.VideoRendererEventListener,
		allowedVideoJoiningTimeMs: number,
		out: java.util.ArrayList<com.google.android.exoplayer2.Renderer>,
	) {
		// prettier-ignore
		let videoRenderer = new MediaCodecVideoRenderer(this.activity, context, mediaCodecSelector, allowedVideoJoiningTimeMs, enableDecoderFallback, eventHandler, eventListener, com.google.android.exoplayer2.DefaultRenderersFactory.MAX_DROPPED_VIDEO_FRAME_COUNT_TO_NOTIFY)
		// if (Number.isFinite(this.videoMediaCodecOperationMode)) {
		// 	videoRenderer.experimentalSetMediaCodecOperationMode(this.videoMediaCodecOperationMode)
		// }
		out.add(videoRenderer)
		// // @ts-ignore
		// super.buildVideoRenderers(...arguments)
	}

	buildAudioRenderers(
		context: android.content.Context,
		extensionRendererMode: number,
		mediaCodecSelector: com.google.android.exoplayer2.mediacodec.MediaCodecSelector,
		enableDecoderFallback: boolean,
		audioSink: com.google.android.exoplayer2.audio.AudioSink,
		eventHandler: android.os.Handler,
		eventListener: com.google.android.exoplayer2.audio.AudioRendererEventListener,
		out: java.util.ArrayList<com.google.android.exoplayer2.Renderer>,
	) {
		// prettier-ignore
		let audioRenderer = new MediaCodecAudioRenderer(this.activity, context, mediaCodecSelector, enableDecoderFallback, eventHandler, eventListener, audioSink)
		// if (Number.isFinite(this.audioMediaCodecOperationMode)) {
		// 	audioRenderer.experimentalSetMediaCodecOperationMode(this.audioMediaCodecOperationMode)
		// }
		out.add(audioRenderer)
		// // @ts-ignore
		// super.buildAudioRenderers(...arguments)
	}
}

export default RenderersFactory

@NativeClass()
class MediaCodecVideoRenderer extends com.google.android.exoplayer2.video.MediaCodecVideoRenderer {
	constructor(
		public activity: ExoPlayerActivity,
		context: globalAndroid.content.Context,
		mediaCodecSelector: com.google.android.exoplayer2.mediacodec.MediaCodecSelector,
		allowedJoiningTimeMs: number,
		enableDecoderFallback: boolean,
		eventHandler: globalAndroid.os.Handler,
		eventListener: com.google.android.exoplayer2.video.VideoRendererEventListener,
		maxDroppedFramesToNotify: number,
	) {
		// prettier-ignore
		super(context, mediaCodecSelector, allowedJoiningTimeMs, enableDecoderFallback, eventHandler, eventListener, maxDroppedFramesToNotify)
		return global.__native(this)
	}

	onInputFormatChanged(formatHolder: com.google.android.exoplayer2.FormatHolder) {
		// console.warn('VideoRenderer onInputFormatChanged ->')
		// console.log('VideoRenderer format ->', ExoFormat.toLog(formatHolder.format))

		let builder = formatHolder.format.buildUpon()
		let mediaItem = this.activity.player.getCurrentMediaItem()
		let stream = FFprobe.getMediaItemStream(mediaItem, Number(formatHolder.format.id) - 1)
		if (Number.isFinite(stream.fps)) {
			builder.setFrameRate(
				new ExoDisplay(stream.width, stream.height, stream.fps).getBestDisplayMode().getRefreshRate(),
			)
		}
		formatHolder.format = builder.build()
		console.warn('formatHolder.format.frameRate ->', formatHolder.format.frameRate)

		// @ts-ignore
		return super.onInputFormatChanged(...arguments)
	}

	// onOutputFormatChanged(
	// 	format: com.google.android.exoplayer2.Format,
	// 	mediaFormat: android.media.MediaFormat,
	// ) {
	// 	console.warn('VideoRenderer onOutputFormatChanged ->')
	// 	console.log('VideoRenderer output before format ->', ExoFormat.toLog(format))
	// 	// if (mediaFormat) {
	// 	// 	console.log('VideoRenderer output before mediaFormat ->')
	// 	// 	console.dir(mediaFormat)
	// 	// 	console.log(ExoFormat.mediaFormat(mediaFormat))
	// 	// }
	// 	// @ts-ignore
	// 	super.onOutputFormatChanged(...arguments)
	// 	console.log('VideoRenderer output after format ->', ExoFormat.toLog(format))
	// 	// if (mediaFormat) {
	// 	// 	console.log('VideoRenderer output after mediaFormat ->')
	// 	// 	console.dir(mediaFormat)
	// 	// 	console.log(ExoFormat.mediaFormat(mediaFormat))
	// 	// }
	// }
}

@NativeClass()
class MediaCodecAudioRenderer extends com.google.android.exoplayer2.audio.MediaCodecAudioRenderer {
	constructor(
		public activity: ExoPlayerActivity,
		context: android.content.Context,
		mediaCodecSelector: com.google.android.exoplayer2.mediacodec.MediaCodecSelector,
		enableDecoderFallback: boolean,
		eventHandler: android.os.Handler,
		eventListener: com.google.android.exoplayer2.audio.AudioRendererEventListener,
		audioSink: com.google.android.exoplayer2.audio.AudioSink,
	) {
		// prettier-ignore
		super(context, mediaCodecSelector, enableDecoderFallback, eventHandler, eventListener, audioSink)
		return global.__native(this)
	}

	onInputFormatChanged(formatHolder: com.google.android.exoplayer2.FormatHolder) {
		// console.warn('AudioRenderer onInputFormatChanged ->')
		// console.log('AudioRenderer input format ->', ExoFormat.toLog(formatHolder.format))

		let builder = formatHolder.format.buildUpon()
		let mediaItem = this.activity.player.getCurrentMediaItem()
		let stream = FFprobe.getMediaItemStream(mediaItem, Number(formatHolder.format.id) - 1)
		console.log('onInputFormatChanged stream ->', stream)
		if (Number.isFinite(stream.bits)) {
			builder.setPcmEncoding(com.google.android.exoplayer2.util.Util.getPcmEncoding(stream.bits))
		}
		if (stream.codec_name == 'dts') {
			builder.setCodecs('dtsc')
			builder.setSampleMimeType(com.google.android.exoplayer2.util.MimeTypes.AUDIO_DTS)
			if (stream.profile == '60') {
				builder.setCodecs('dtsh')
				builder.setSampleMimeType(com.google.android.exoplayer2.util.MimeTypes.AUDIO_DTS_HD)
				if (stream.bits == 24) {
					builder.setCodecs('dtsl')
				}
			}
		}
		if (stream.codec_name == 'eac3') {
			builder.setCodecs('ec+3')
			builder.setSampleMimeType(com.google.android.exoplayer2.util.MimeTypes.AUDIO_E_AC3_JOC)
		}
		if (Number.isFinite(stream.channels)) {
			builder.setChannelCount(stream.channels)
		}
		if (stream.sample_rate) {
			builder.setSampleRate(Number(stream.sample_rate))
		}
		// Object.keys(stream.tags).forEach((key) => {
		// 	if (key.startsWith('BPS')) {
		// 		builder.setAverageBitrate(Number(stream.tags[key]))
		// 		builder.setPeakBitrate(Number(stream.tags[key]))
		// 	}
		// })
		formatHolder.format = builder.build()
		console.log('formatHolder.format ->', ExoFormat.toLog(formatHolder.format))

		// @ts-ignore
		return super.onInputFormatChanged(...arguments)

		// // console.dir(formatHolder.format)
		// let builder = formatHolder.format.buildUpon()
		// builder.setSampleMimeType(com.google.android.exoplayer2.util.MimeTypes.AUDIO_DTS_HD)
		// builder.setContainerMimeType(com.google.android.exoplayer2.util.MimeTypes.AUDIO_MATROSKA)
		// builder.setPcmEncoding(com.google.android.exoplayer2.C.ENCODING_PCM_24BIT)
		// builder.setAverageBitrate(4035689)
		// builder.setPeakBitrate(4035689)
		// formatHolder.format = builder.build()
		// console.log('2 formatHolder.format ->', ExoFormat.toLog(formatHolder.format))
		// // console.dir(formatHolder.format)
		// console.log('3 formatHolder.format ->', ExoFormat.toLog(formatHolder.format))
		// // console.dir(formatHolder.format)
	}

	// onOutputFormatChanged(
	// 	format: com.google.android.exoplayer2.Format,
	// 	mediaFormat: android.media.MediaFormat,
	// ) {
	// 	console.warn('AudioRenderer onOutputFormatChanged ->')
	// 	console.log('AudioRenderer output before format ->', ExoFormat.toLog(format))
	// 	// if (mediaFormat) {
	// 	// 	console.log(
	// 	// 		'AudioRenderer output before mediaFormat ->',
	// 	// 		ExoFormat.mediaFormat(mediaFormat),
	// 	// 	)
	// 	// }
	// 	// @ts-ignore
	// 	super.onOutputFormatChanged(...arguments)
	// 	console.log('AudioRenderer output after format ->', ExoFormat.toLog(format))
	// 	// if (mediaFormat) {
	// 	// 	console.log(
	// 	// 		'AudioRenderer output after mediaFormat ->',
	// 	// 		ExoFormat.mediaFormat(mediaFormat),
	// 	// 	)
	// 	// }
	// }

	// configureCodec(
	// 	codecInfo: com.google.android.exoplayer2.mediacodec.MediaCodecInfo,
	// 	codecAdapter: com.google.android.exoplayer2.mediacodec.MediaCodecAdapter,
	// 	format: com.google.android.exoplayer2.Format,
	// 	crypto: globalAndroid.media.MediaCrypto,
	// 	codecOperatingRate: number,
	// ) {
	// 	console.warn('configureCodec ->')
	// 	console.log('configureCodec format ->', ExoFormat.toLog(format))
	// 	// console.dir(format)
	// 	// @ts-ignore
	// 	super.configureCodec(...arguments)
	// }

	// getDecoderInfos(
	// 	mediaCodecSelector: com.google.android.exoplayer2.mediacodec.MediaCodecSelector,
	// 	format: com.google.android.exoplayer2.Format,
	// 	requiresSecureDecoder: boolean,
	// ) {
	// 	console.warn('getDecoderInfos ->')
	// 	console.log('getDecoderInfos format ->', ExoFormat.toLog(format))
	// 	// console.dir(format)
	// 	// let tag = this.activity.player.getCurrentMediaItem().playbackProperties
	// 	// 	.tag as java.util.HashMap<string, string>
	// 	// let ffstream = JSON.parse(
	// 	// 	tag.get((Number(format.id) - 1).toString()),
	// 	// ) as FFprobe.Stream
	// 	// if (ffstream.codec_name == 'dts' && ffstream.profile == '60') {
	// 	// 	let builder = format.buildUpon()
	// 	// 	builder.setSampleMimeType(com.google.android.exoplayer2.util.MimeTypes.AUDIO_DTS_HD)
	// 	// }
	// 	// console.log('format.id ->', format.id, ffstream)
	// 	// @ts-ignore
	// 	return super.getDecoderInfos(...arguments)
	// }

	// getMediaFormat(
	// 	format: com.google.android.exoplayer2.Format,
	// 	codecMimeType: string,
	// 	codecMaxInputSize: number,
	// 	codecOperatingRate: number,
	// ) {
	// 	console.warn('getMediaFormat ->')
	// 	console.log('getMediaFormat format ->', ExoFormat.toLog(format))
	// 	// @ts-ignore
	// 	return super.getMediaFormat(...arguments)
	// }

	// // @ts-ignore
	// supportsFormat(
	// 	mediaCodecSelector: com.google.android.exoplayer2.mediacodec.MediaCodecSelector,
	// 	format: com.google.android.exoplayer2.Format,
	// ) {
	// 	console.warn('supportsFormat ->')
	// 	console.log('supportsFormat format ->', ExoFormat.toLog(format))
	// 	// console.log('mediaCodecSelector ->', mediaCodecSelector)
	// 	// @ts-ignore
	// 	return super.supportsFormat(...arguments)
	// }
}

// @NativeClass()
// class MatroskaExtractor extends com.google.android.exoplayer2.extractor.mkv.MatroskaExtractor {
// 	constructor(flags: number) {
// 		super(flags)
// 		return global.__native(this)
// 	}

// 	init(output: com.google.android.exoplayer2.extractor.ExtractorOutput) {
// 		console.log('output.track ->', output.track(1, 0))
// 		super.init(output)
// 	}
// }
// export { MatroskaExtractor }
