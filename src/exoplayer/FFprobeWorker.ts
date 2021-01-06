import 'globals'

declare const self: import('worker-loader')
const context = self

com.arthenica.mobileffmpeg.Config.setLogLevel(com.arthenica.mobileffmpeg.Level.AV_LOG_QUIET)

context.onmessage = (message) => {
	let video = message.data as string
	let streams = [] as FFprobe.Stream[]
	let ffstreams = com.arthenica.mobileffmpeg.FFprobe.getMediaInformation(video).getStreams()
	for (let i = 0; i < ffstreams.size(); i++) {
		let ffstream = ffstreams.get(i) as com.arthenica.mobileffmpeg.StreamInformation
		let stream = JSON.parse(ffstream.getAllProperties().toString())
		streams.push(stream)
	}
	global.postMessage(streams)
}

// context.onerror = (error) => {
// 	console.error('FFprobeWorker onerror ->', error)
// }

// context.onclose = () => {
// 	console.log('FFprobeWorker onclose ->')
// }
