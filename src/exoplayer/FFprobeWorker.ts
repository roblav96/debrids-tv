import '@nativescript/core'
import type * as Worker from 'worker-loader'

const context = (global as any).self as Worker

context.onmessage = (message) => {
	let video = message.data as string
	let streams = [] as FFprobe.Stream[]
	com.arthenica.mobileffmpeg.Config.setLogLevel(com.arthenica.mobileffmpeg.Level.AV_LOG_ERROR)
	let ffstreams = com.arthenica.mobileffmpeg.FFprobe.getMediaInformation(video).getStreams()
	for (let i = 0; i < ffstreams.size(); i++) {
		let ffstream = ffstreams.get(i) as com.arthenica.mobileffmpeg.StreamInformation
		streams.push(JSON.parse(ffstream.getAllProperties().toString()))
	}
	context.postMessage(streams)
}

// context.onerror = (error) => {
// 	console.error('FFprobeWorker onerror ->', error)
// }

// context.onclose = () => {
// 	console.log('FFprobeWorker onclose ->')
// }
