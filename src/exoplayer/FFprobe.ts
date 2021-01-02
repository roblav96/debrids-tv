import * as FFprobeWorker from 'nativescript-worker-loader!~/exoplayer/FFprobeWorker'
import * as R from 'rambdax'

export default async function FFprobe(video: string) {
	return new Promise<FFprobe.Stream[]>((resolve, reject) => {
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

declare global {
	namespace FFprobe {
		interface Format {
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
		interface Stream {
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
		interface Output {
			format: Format
			streams: Stream[]
		}
	}
}
