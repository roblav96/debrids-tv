import 'globals'
import type { Stream } from './FFprobe'

declare const global: /** typeof globalThis & */ import('worker-loader')

com.arthenica.ffmpegkit.FFmpegKitConfig.setLogLevel(com.arthenica.ffmpegkit.Level.AV_LOG_QUIET)

global.onmessage = (message) => {
	let video = message.data as string
	let streams = [] as Stream[]
	let ffstreams = com.arthenica.ffmpegkit.FFprobeKit.getMediaInformation(video)
		.getMediaInformation()
		.getStreams()
	for (let i = 0; i < ffstreams.size(); i++) {
		let ffstream = ffstreams.get(i) as com.arthenica.ffmpegkit.StreamInformation
		streams.push(JSON.parse(ffstream.getAllProperties().toString()))
	}
	global.postMessage(streams)
}

global.onclose = () => {
	console.log('FFprobeWorker onclose ->')
}

// global.onerror = (error) => {
// 	console.error('FFprobeWorker onerror ->', error)
// }
