import * as Application from '@nativescript/core/application'
import * as R from 'rambdax'
import * as Types from '@nativescript/core/utils/types'

@NativeClass()
class RenderersFactory extends com.google.android.exoplayer2.DefaultRenderersFactory {
	constructor(public context: android.content.Context, public audioSessionId: number) {
		super(context)
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
		console.log('-> buildAudioRenderers ->')
		console.log('mediaCodecSelector ->', mediaCodecSelector)
		console.log('enableDecoderFallback ->', enableDecoderFallback)
		console.log('audioSink ->', audioSink)
		out.add(
			new MediaCodecAudioRenderer(
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
		context: android.content.Context,
		mediaCodecSelector: com.google.android.exoplayer2.mediacodec.MediaCodecSelector,
		enableDecoderFallback: boolean,
		eventHandler: android.os.Handler,
		eventListener: com.google.android.exoplayer2.audio.AudioRendererEventListener,
		audioSink: com.google.android.exoplayer2.audio.AudioSink,
	) {
		super(
			context,
			mediaCodecSelector,
			enableDecoderFallback,
			eventHandler,
			eventListener,
			audioSink,
		)
		return global.__native(this)
	}

	configureCodec(
		codecInfo: com.google.android.exoplayer2.mediacodec.MediaCodecInfo,
		codecAdapter: com.google.android.exoplayer2.mediacodec.MediaCodecAdapter,
		format: com.google.android.exoplayer2.Format,
		crypto: globalAndroid.media.MediaCrypto,
		codecOperatingRate: number,
	) {
		console.log('configureCodec ->', format)
		// @ts-ignore
		super.configureCodec(...arguments)
	}

	onInputFormatChanged(formatHolder: com.google.android.exoplayer2.FormatHolder) {
		console.log('-> onInputFormatChanged ->')
		console.log('1 formatHolder.format ->')
		console.dir(formatHolder.format)
		let builder = formatHolder.format.buildUpon()
		builder.setSampleMimeType(com.google.android.exoplayer2.util.MimeTypes.AUDIO_DTS_HD)
		builder.setContainerMimeType(com.google.android.exoplayer2.util.MimeTypes.AUDIO_MATROSKA)
		builder.setPcmEncoding(com.google.android.exoplayer2.C.ENCODING_PCM_24BIT)
		builder.setAverageBitrate(4035689)
		builder.setPeakBitrate(4035689)
		formatHolder.format = builder.build()
		console.log('2 formatHolder.format ->')
		console.dir(formatHolder.format)
		super.onInputFormatChanged(formatHolder)
		console.log('3 formatHolder.format ->')
		console.dir(formatHolder.format)
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
		output.track
		super.init(output)
	}
}
