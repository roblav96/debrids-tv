import * as Application from '@nativescript/core/application'
import * as ExoFormat from '~/exoplayer/ExoFormat'
import * as R from 'rambdax'
import * as Types from '@nativescript/core/utils/types'
import * as Utils from '@nativescript/core/utils'
import type ExoPlayerActivity from '~/exoplayer/ExoPlayerActivity'

@NativeClass()
class RenderersFactory extends com.google.android.exoplayer2.DefaultRenderersFactory {
	constructor(public activity: ExoPlayerActivity) {
		super(Utils.ad.getApplicationContext())
		return global.__native(this)
	}

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
		// // @ts-ignore
		// super.buildAudioRenderers(...arguments)
		console.log('-> RenderersFactory buildAudioRenderers ->')
		console.log('mediaCodecSelector ->', mediaCodecSelector)
		console.log('enableDecoderFallback ->', enableDecoderFallback)
		console.log('audioSink ->', audioSink)
		out.add(
			new MediaCodecAudioRenderer(
				this.activity,
				context,
				mediaCodecSelector,
				enableDecoderFallback,
				eventHandler,
				eventListener,
				audioSink,
			),
		)
		// out.add(out.remove(0))
		// for (let i = 0; i < out.size(); i++) {
		// 	let renderer = out.get(i)
		// 	console.log(`AudioRenderer ${i} ->`, renderer)
		// }
	}

	// buildVideoRenderers(
	// 	context: android.content.Context,
	// 	extensionRendererMode: number,
	// 	mediaCodecSelector: com.google.android.exoplayer2.mediacodec.MediaCodecSelector,
	// 	enableDecoderFallback: boolean,
	// 	eventHandler: android.os.Handler,
	// 	eventListener: com.google.android.exoplayer2.video.VideoRendererEventListener,
	// 	allowedVideoJoiningTimeMs: number,
	// 	out: java.util.ArrayList<com.google.android.exoplayer2.Renderer>,
	// ) {
	// 	// @ts-ignore
	// 	super.buildVideoRenderers(...arguments)
	// 	console.log('-> buildVideoRenderers ->')
	// 	console.log('mediaCodecSelector ->', mediaCodecSelector)
	// 	console.log('enableDecoderFallback ->', enableDecoderFallback)
	// 	console.log('allowedVideoJoiningTimeMs ->', allowedVideoJoiningTimeMs)
	// 	// for (let i = 0; i < out.size(); i++) {
	// 	// 	let renderer = out.get(i) as com.google.android.exoplayer2.video.MediaCodecVideoRenderer
	// 	// 	console.log(`VideoRenderer ${i} ->`, renderer)
	// 	// }
	// }
}

export default RenderersFactory

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

	configureCodec(
		codecInfo: com.google.android.exoplayer2.mediacodec.MediaCodecInfo,
		codecAdapter: com.google.android.exoplayer2.mediacodec.MediaCodecAdapter,
		format: com.google.android.exoplayer2.Format,
		crypto: globalAndroid.media.MediaCrypto,
		codecOperatingRate: number,
	) {
		console.log('configureCodec ->', ExoFormat.toLog(format))
		// console.dir(format)
		// @ts-ignore
		super.configureCodec(...arguments)
	}

	getDecoderInfos(
		mediaCodecSelector: com.google.android.exoplayer2.mediacodec.MediaCodecSelector,
		format: com.google.android.exoplayer2.Format,
		requiresSecureDecoder: boolean,
	) {
		console.log('getDecoderInfos ->', ExoFormat.toLog(format))
		// console.dir(format)
		// let tag = this.activity.player.getCurrentMediaItem().playbackProperties
		// 	.tag as java.util.HashMap<string, string>
		// let ffstream = JSON.parse(
		// 	tag.get((Number.parseInt(format.id) - 1).toString()),
		// ) as FFprobe.Stream
		// if (ffstream.codec_name == 'dts' && ffstream.profile == '60') {
		// 	let builder = format.buildUpon()
		// 	builder.setSampleMimeType(com.google.android.exoplayer2.util.MimeTypes.AUDIO_DTS_HD)
		// }
		// console.log('format.id ->', format.id, ffstream)
		// @ts-ignore
		return super.getDecoderInfos(...arguments)
	}

	onInputFormatChanged(formatHolder: com.google.android.exoplayer2.FormatHolder) {
		console.log('-> onInputFormatChanged ->')
		console.log('1 formatHolder.format ->', ExoFormat.toLog(formatHolder.format))
		// console.dir(formatHolder.format)
		let builder = formatHolder.format.buildUpon()
		builder.setSampleMimeType(com.google.android.exoplayer2.util.MimeTypes.AUDIO_DTS_HD)
		builder.setContainerMimeType(com.google.android.exoplayer2.util.MimeTypes.AUDIO_MATROSKA)
		builder.setPcmEncoding(com.google.android.exoplayer2.C.ENCODING_PCM_24BIT)
		builder.setAverageBitrate(4035689)
		builder.setPeakBitrate(4035689)
		formatHolder.format = builder.build()
		console.log('2 formatHolder.format ->', ExoFormat.toLog(formatHolder.format))
		// console.dir(formatHolder.format)
		super.onInputFormatChanged(formatHolder)
		console.log('3 formatHolder.format ->', ExoFormat.toLog(formatHolder.format))
		// console.dir(formatHolder.format)
	}

	// onOutputFormatChanged(
	// 	format: com.google.android.exoplayer2.Format,
	// 	mediaFormat: android.media.MediaFormat,
	// ) {
	// 	console.log('-> onOutputFormatChanged ->')
	// 	console.log('onOutputFormatChanged ->', format)
	// 	super.onOutputFormatChanged(format, mediaFormat)
	// 	console.log('onOutputFormatChanged ->', format)
	// }
}

@NativeClass()
class MatroskaExtractor extends com.google.android.exoplayer2.extractor.mkv.MatroskaExtractor {
	constructor(flags: number) {
		super(flags)
		return global.__native(this)
	}

	init(output: com.google.android.exoplayer2.extractor.ExtractorOutput) {
		console.log('output.track ->', output.track(1, 0))
		super.init(output)
	}
}
