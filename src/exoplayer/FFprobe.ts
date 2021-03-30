import * as FFprobeWorker from 'nativescript-worker-loader!~/exoplayer/FFprobeWorker'
import * as R from 'rambdax'

com.arthenica.ffmpegkit.FFmpegKitConfig.setLogLevel(com.arthenica.ffmpegkit.Level.AV_LOG_QUIET)

export function sync(video: string) {
	let streams = [] as Stream[]
	let ffstreams = com.arthenica.ffmpegkit.FFprobeKit.getMediaInformation(video)
		.getMediaInformation()
		.getStreams()
	for (let i = 0; i < ffstreams.size(); i++) {
		let ffstream = ffstreams.get(i) as com.arthenica.ffmpegkit.StreamInformation
		streams.push(JSON.parse(ffstream.getAllProperties().toString()))
	}
	return streams
}

export function async(video: string) {
	return new Promise<Stream[]>((resolve, reject) => {
		let worker = new FFprobeWorker()
		worker.postMessage(video)
		worker.onmessage = (message) => {
			worker.terminate()
			resolve(message.data)
		}
		worker.onerror = (error) => {
			worker.terminate()
			reject(error.message)
		}
	})
}

export function getMediaItemStream(mediaItem: com.google.android.exoplayer2.MediaItem, id: number) {
	let tag = mediaItem.playbackProperties.tag as java.util.HashMap<string, string>
	let ffstream = JSON.parse(tag.get(id.toString())) as Stream
	let fps: number
	let frame_rate = ffstream.avg_frame_rate || ffstream.r_frame_rate
	if (frame_rate) {
		let nums = frame_rate.split('/').map(Number)
		fps = nums[0] / nums[1]
	}
	return {
		...ffstream,
		bits: Number(ffstream.bits_per_raw_sample),
		fps,
		frame_rate,
		height: ffstream.height || ffstream.coded_height,
		width: ffstream.width || ffstream.coded_width,
	}
}

export interface Format {
	bit_rate: string
	duration: string
	filename: string
	format_name: string
	nb_programs: number
	nb_streams: number
	probe_score: number
	size: string
	start_time: string
	tags: {
		creation_time: string
		encoder: string
		title: string
	}
}
export interface Stream {
	avg_frame_rate: string
	bit_rate: string
	bits_per_raw_sample: string
	bits_per_sample: number
	channel_layout: string
	channels: number
	chroma_location: string
	codec_long_name: string
	codec_name: string
	codec_tag: string
	codec_tag_string: string
	codec_time_base: string
	codec_type: string
	coded_height: number
	coded_width: number
	color_primaries: string
	color_range: string
	color_space: string
	color_transfer: string
	display_aspect_ratio: string
	disposition: {
		attached_pic: number
		clean_effects: number
		comment: number
		default: number
		dub: number
		forced: number
		hearing_impaired: number
		karaoke: number
		lyrics: number
		original: number
		timed_thumbnails: number
		visual_impaired: number
	}
	dmix_mode: string
	duration: string
	duration_ts: number
	has_b_frames: number
	height: number
	index: number
	level: number
	loro_cmixlev: string
	loro_surmixlev: string
	ltrt_cmixlev: string
	ltrt_surmixlev: string
	pix_fmt: string
	profile: string
	r_frame_rate: string
	refs: number
	sample_aspect_ratio: string
	sample_fmt: string
	sample_rate: string
	start_pts: number
	start_time: string
	tags: {
		'BPS-eng': string
		'DURATION-eng': string
		'NUMBER_OF_BYTES-eng': string
		'NUMBER_OF_FRAMES-eng': string
		'SOURCE_ID-eng': string
		'filename': string
		'language': string
		'mimetype': string
		'title': string
	}
	time_base: string
	width: number
}
export interface Output {
	format: Format
	streams: Stream[]
}
