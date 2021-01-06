import * as Application from '@nativescript/core/application'
import * as R from 'rambdax'
import * as Types from '@nativescript/core/utils/types'
import * as Utils from '@nativescript/core/utils'

export function onTimeline(reason: number) {
	// prettier-ignore
	enum TIMELINE_CHANGE_REASON {
		PLAYLIST_CHANGED = com.google.android.exoplayer2.Player.TIMELINE_CHANGE_REASON_PLAYLIST_CHANGED,
		SOURCE_UPDATE = com.google.android.exoplayer2.Player.TIMELINE_CHANGE_REASON_SOURCE_UPDATE,
	}
	return TIMELINE_CHANGE_REASON[reason] as keyof typeof TIMELINE_CHANGE_REASON
}

export function onMediaItemTransition(reason: number) {
	// prettier-ignore
	enum MEDIA_ITEM_TRANSITION_REASON {
		AUTO = com.google.android.exoplayer2.Player.MEDIA_ITEM_TRANSITION_REASON_AUTO,
		PLAYLIST_CHANGED = com.google.android.exoplayer2.Player.MEDIA_ITEM_TRANSITION_REASON_PLAYLIST_CHANGED,
		REPEAT = com.google.android.exoplayer2.Player.MEDIA_ITEM_TRANSITION_REASON_REPEAT,
		SEEK = com.google.android.exoplayer2.Player.MEDIA_ITEM_TRANSITION_REASON_SEEK,
	}
	return MEDIA_ITEM_TRANSITION_REASON[reason] as keyof typeof MEDIA_ITEM_TRANSITION_REASON
}

export function onPlayWhenReady(reason: number) {
	// prettier-ignore
	enum PLAY_WHEN_READY_CHANGE_REASON {
		AUDIO_BECOMING_NOISY = com.google.android.exoplayer2.Player.PLAY_WHEN_READY_CHANGE_REASON_AUDIO_BECOMING_NOISY,
		AUDIO_FOCUS_LOSS = com.google.android.exoplayer2.Player.PLAY_WHEN_READY_CHANGE_REASON_AUDIO_FOCUS_LOSS,
		END_OF_MEDIA_ITEM = com.google.android.exoplayer2.Player.PLAY_WHEN_READY_CHANGE_REASON_END_OF_MEDIA_ITEM,
		REMOTE = com.google.android.exoplayer2.Player.PLAY_WHEN_READY_CHANGE_REASON_REMOTE,
		USER_REQUEST = com.google.android.exoplayer2.Player.PLAY_WHEN_READY_CHANGE_REASON_USER_REQUEST,
	}
	return PLAY_WHEN_READY_CHANGE_REASON[reason] as keyof typeof PLAY_WHEN_READY_CHANGE_REASON
}

export function onPlaybackState(state: number) {
	// prettier-ignore
	enum STATE {
		BUFFERING = com.google.android.exoplayer2.Player.STATE_BUFFERING,
		ENDED = com.google.android.exoplayer2.Player.STATE_ENDED,
		IDLE = com.google.android.exoplayer2.Player.STATE_IDLE,
		READY = com.google.android.exoplayer2.Player.STATE_READY,
	}
	return STATE[state] as keyof typeof STATE
}

export function mediaFormat(mediaFormat: android.media.MediaFormat) {
	// let features = Utils.ad.collections.stringSetToStringArray(mediaFormat.getFeatures())
	let keys = mediaFormat.getKeys()
	return { keys }
}

export function toLog(format: com.google.android.exoplayer2.Format) {
	if (!R.isType('Object', format)) {
		return R.type(format)
	}
	let keys = Object.keys(format.constructor.prototype).sort()
	return keys.reduce((target, key, index) => {
		let value = format[key]
		let type = R.type(value)
		if (R.isFunction(value) || R.isNil(value) || R.isEmpty(value)) return target
		if (type == 'Number' && value <= 1) return target
		return Object.assign(target, { [key]: value })
	}, {})

	// let keys = Object.keys(format.constructor.prototype)
	// keys.forEach((key) => {
	// 	console.log(`format ${key} type ->`, R.type(format[key]))
	// })

	// return {
	// 	averageBitrate: format.averageBitrate,
	// 	bitrate: format.bitrate,
	// 	channelCount: format.channelCount,
	// 	codecs: format.codecs,
	// 	containerMimeType: format.containerMimeType,
	// 	frameRate: format.frameRate,
	// 	id: format.id,
	// 	label: format.label,
	// 	language: format.language,
	// 	pcmEncoding: format.pcmEncoding,
	// 	maxInputSize: format.maxInputSize,
	// 	subsampleOffsetUs: format.subsampleOffsetUs,
	// 	peakBitrate: format.peakBitrate,
	// 	sampleMimeType: format.sampleMimeType,
	// 	sampleRate: format.sampleRate,
	// 	stereoMode: format.stereoMode,
	// }
	// return com.google.android.exoplayer2.Format.toLogString(format)
}
