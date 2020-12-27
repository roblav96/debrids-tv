import * as R from 'rambdax'

export function setVideos(intent: android.content.Intent, videos: string[]) {
	intent.setAction('app.debrids.tv.action.VIEW_LIST')
	for (let index = 0; index < videos.length; index++) {
		intent.putExtra(`uri_${index}`, videos[index])
	}
	return intent
}

export function getVideos(intent: android.content.Intent) {
	let videos = [] as string[]
	let index = 0
	while (intent.hasExtra(`uri_${index}`)) {
		videos.push(intent.getStringExtra(`uri_${index}`))
		index++
	}
	return videos
}
