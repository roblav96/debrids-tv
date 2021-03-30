import 'globals'
import type { Stream } from './FFprobe'

declare const self: import('worker-loader')
const context = self

com.arthenica.ffmpegkit.FFmpegKitConfig.setLogLevel(com.arthenica.ffmpegkit.Level.AV_LOG_QUIET)

context.onmessage = (message) => {
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

// context.onerror = (error) => {
// 	console.error('FFprobeWorker onerror ->', error)
// }

// context.onclose = () => {
// 	console.log('FFprobeWorker onclose ->')
// }
