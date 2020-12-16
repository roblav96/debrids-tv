declare module androidx {
	export module media2 {
		export module player {
			export class AudioFocusHandler extends java.lang.Object {
				public static class: java.lang.Class<androidx.media2.player.AudioFocusHandler>;
				public onReset(): void;
				public onPlay(): boolean;
				public close(): void;
				public onPause(): void;
				public sendIntent(intent: globalAndroid.content.Intent): void;
			}
			export module AudioFocusHandler {
				export class AudioFocusHandlerImpl extends java.lang.Object {
					public static class: java.lang.Class<androidx.media2.player.AudioFocusHandler.AudioFocusHandlerImpl>;
					/**
					 * Constructs a new instance of the androidx.media2.player.AudioFocusHandler$AudioFocusHandlerImpl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onPlay(): boolean;
						onPause(): void;
						onReset(): void;
						close(): void;
						sendIntent(intent0: globalAndroid.content.Intent): void;
					});
					public constructor();
					public onPlay(): boolean;
					public onPause(): void;
					public close(): void;
					public onReset(): void;
					public sendIntent(intent0: globalAndroid.content.Intent): void;
				}
				export class AudioFocusHandlerImplBase extends java.lang.Object implements androidx.media2.player.AudioFocusHandler.AudioFocusHandlerImpl {
					public static class: java.lang.Class<androidx.media2.player.AudioFocusHandler.AudioFocusHandlerImplBase>;
					public onPlay(): boolean;
					public onPause(): void;
					public close(): void;
					public sendIntent(intent: globalAndroid.content.Intent): void;
					public onReset(): void;
				}
				export module AudioFocusHandlerImplBase {
					export class AudioFocusListener extends java.lang.Object implements globalAndroid.media.AudioManager.OnAudioFocusChangeListener {
						public static class: java.lang.Class<androidx.media2.player.AudioFocusHandler.AudioFocusHandlerImplBase.AudioFocusListener>;
						public onAudioFocusChange(focusGain: number): void;
					}
					export class BecomingNoisyReceiver extends globalAndroid.content.BroadcastReceiver {
						public static class: java.lang.Class<androidx.media2.player.AudioFocusHandler.AudioFocusHandlerImplBase.BecomingNoisyReceiver>;
						public onReceive(context: globalAndroid.content.Context, intent: globalAndroid.content.Intent): void;
						public onReceive(context0: globalAndroid.content.Context, intent1: globalAndroid.content.Intent): void;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module player {
			export class ByteArrayFrame extends java.lang.Object implements androidx.media2.exoplayer.external.metadata.Metadata.Entry {
				public static class: java.lang.Class<androidx.media2.player.ByteArrayFrame>;
				public mTimestamp: number;
				public mData: native.Array<number>;
				public static CREATOR: globalAndroid.os.Parcelable.Creator<androidx.media2.player.ByteArrayFrame>;
				public getWrappedMetadataFormat(): androidx.media2.exoplayer.external.Format;
				public equals(obj: any): boolean;
				public getWrappedMetadataBytes(): native.Array<number>;
				public hashCode(): number;
				public describeContents(): number;
				public writeToParcel(dest: globalAndroid.os.Parcel, flags: number): void;
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module player {
			export class DataSourceCallbackDataSource extends androidx.media2.exoplayer.external.upstream.BaseDataSource {
				public static class: java.lang.Class<androidx.media2.player.DataSourceCallbackDataSource>;
				public getResponseHeaders(): java.util.Map<string,java.util.List<string>>;
				public close(): void;
				public getUri(): globalAndroid.net.Uri;
				public addTransferListener(transferListener: androidx.media2.exoplayer.external.upstream.TransferListener): void;
				public read(buffer: native.Array<number>, offset: number, readLength: number): number;
				public getResponseHeaders(): java.util.Map<any,any>;
				public open(dataSpec: androidx.media2.exoplayer.external.upstream.DataSpec): number;
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module player {
			export class ExoPlayerMediaPlayer2Impl extends androidx.media2.player.MediaPlayer2 implements androidx.media2.player.ExoPlayerWrapper.Listener {
				public static class: java.lang.Class<androidx.media2.player.ExoPlayerMediaPlayer2Impl>;
				public setDrmEventCallback(executor0: java.util.concurrent.Executor, drmEventCallback1: androidx.media2.player.MediaPlayer2.DrmEventCallback): void;
				public clearDrmEventCallback(): void;
				public setAudioSessionId(int0: number): any;
				public getCurrentMediaItem(): androidx.media2.common.MediaItem;
				public onPlaybackEnded(mediaItem: androidx.media2.common.MediaItem): void;
				public getDrmInfo(): androidx.media2.player.MediaPlayer2.DrmInfo;
				public setAudioSessionId(sessionId: number): any;
				public onTracksChanged(tracks: java.util.List<androidx.media2.common.SessionPlayer.TrackInfo>): void;
				public setNextMediaItems(items: java.util.List<androidx.media2.common.MediaItem>): any;
				public restoreDrmKeys(keySetId: native.Array<number>): void;
				public onPrepared(mediaItem: androidx.media2.common.MediaItem): void;
				public onError(mediaItem: androidx.media2.common.MediaItem, what: number): void;
				public getDrmPropertyString(propertyName: string): string;
				public releaseDrm(): void;
				public onMediaTimeDiscontinuity(mediaItem: androidx.media2.common.MediaItem, mediaTimestamp: androidx.media2.player.MediaTimestamp): void;
				public attachAuxEffect(effectId: number): any;
				public loopCurrent(loop: boolean): any;
				public getAudioSessionId(): number;
				public getVideoWidth(): number;
				public setAuxEffectSendLevel(auxEffectSendLevel: number): any;
				public setDrmEventCallback(executor: java.util.concurrent.Executor, eventCallback: androidx.media2.player.MediaPlayer2.DrmEventCallback): void;
				public getSelectedTrack(trackType: number): androidx.media2.common.SessionPlayer.TrackInfo;
				public restoreDrmKeys(bytes0: native.Array<number>): void;
				public close(): void;
				public onMediaItemEnded(mediaItem: androidx.media2.common.MediaItem): void;
				public setMediaItem(item: androidx.media2.common.MediaItem): any;
				public getDrmKeyRequest(keySetId: native.Array<number>, initData: native.Array<number>, mimeType: string, keyType: number, optionalParameters: java.util.Map<string,string>): globalAndroid.media.MediaDrm.KeyRequest;
				public getDrmKeyRequest(bytes0: native.Array<number>, bytes1: native.Array<number>, string2: string, int3: number, map4: java.util.Map<string,string>): globalAndroid.media.MediaDrm.KeyRequest;
				public getDrmPropertyString(string0: string): string;
				public setEventCallback(executor: java.util.concurrent.Executor, eventCallback: androidx.media2.player.MediaPlayer2.EventCallback): void;
				public setPlayerVolume(float0: number): any;
				public prepareDrm(uUID0: java.util.UUID): any;
				public setNextMediaItem(mediaItem0: androidx.media2.common.MediaItem): any;
				public getMetrics(): any;
				public getCurrentPosition(): number;
				public onBandwidthSample(mediaItem: androidx.media2.common.MediaItem, bitrateKbps: number): void;
				public cancel(token: any): boolean;
				public getSelectedTrack(int0: number): androidx.media2.common.SessionPlayer.TrackInfo;
				public getState(): number;
				public deselectTrack(trackId: number): any;
				public onBufferingStarted(mediaItem: androidx.media2.common.MediaItem): void;
				public onTimedMetadata(mediaItem: androidx.media2.common.MediaItem, timedMetaData: androidx.media2.player.TimedMetaData): void;
				public getAudioAttributes(): androidx.media.AudioAttributesCompat;
				public setMediaItem(mediaItem0: androidx.media2.common.MediaItem): any;
				public setOnDrmConfigHelper(listener: androidx.media2.player.MediaPlayer2.OnDrmConfigHelper): void;
				public onBufferingUpdate(mediaItem: androidx.media2.common.MediaItem, bufferingPercentage: number): void;
				public setAuxEffectSendLevel(float0: number): any;
				public notifyWhenCommandLabelReached(label: any): any;
				public setSurface(surface0: globalAndroid.view.Surface): any;
				public play(): any;
				public setEventCallback(executor0: java.util.concurrent.Executor, eventCallback1: androidx.media2.player.MediaPlayer2.EventCallback): void;
				public getDuration(): number;
				public setPlayerVolume(volume: number): any;
				public onLoop(mediaItem: androidx.media2.common.MediaItem): void;
				public clearPendingCommands(): void;
				public onVideoRenderingStart(mediaItem: androidx.media2.common.MediaItem): void;
				public skipToNext(): any;
				public selectTrack(int0: number): any;
				public onVideoSizeChanged(mediaItem: androidx.media2.common.MediaItem, width: number, height: number): void;
				public cancel(object0: any): boolean;
				public reset(): void;
				public onSubtitleData(mediaItem: androidx.media2.common.MediaItem, track: androidx.media2.common.SessionPlayer.TrackInfo, subtitleData: androidx.media2.common.SubtitleData): void;
				public setDrmPropertyString(string0: string, string1: string): void;
				public notifyWhenCommandLabelReached(object0: any): any;
				public onSeekCompleted(): void;
				public seekTo(long0: number, int1: number): any;
				public setPlaybackParams(playbackParams0: androidx.media2.player.PlaybackParams): any;
				public selectTrack(trackId: number): any;
				public getBufferedPosition(): number;
				public setSurface(surface: globalAndroid.view.Surface): any;
				public provideDrmKeyResponse(keySetId: native.Array<number>, response: native.Array<number>): native.Array<number>;
				public onBufferingEnded(mediaItem: androidx.media2.common.MediaItem): void;
				public setPlaybackParams(params: androidx.media2.player.PlaybackParams): any;
				public loopCurrent(boolean0: boolean): any;
				public getVideoHeight(): number;
				public pause(): any;
				public clearEventCallback(): void;
				public prepare(): any;
				public deselectTrack(int0: number): any;
				public attachAuxEffect(int0: number): any;
				public getTimestamp(): androidx.media2.player.MediaTimestamp;
				public setNextMediaItem(item: androidx.media2.common.MediaItem): any;
				public setOnDrmConfigHelper(onDrmConfigHelper0: androidx.media2.player.MediaPlayer2.OnDrmConfigHelper): void;
				public provideDrmKeyResponse(bytes0: native.Array<number>, bytes1: native.Array<number>): native.Array<number>;
				public getPlaybackParams(): androidx.media2.player.PlaybackParams;
				public setNextMediaItems(list0: java.util.List<androidx.media2.common.MediaItem>): any;
				public setAudioAttributes(attributes: androidx.media.AudioAttributesCompat): any;
				public setDrmPropertyString(propertyName: string, value: string): void;
				public seekTo(msec: number): any;
				public getPlayerVolume(): number;
				public seekTo(msec: number, mode: number): any;
				public onMediaItemStartedAsNext(mediaItem: androidx.media2.common.MediaItem): void;
				public setAudioAttributes(audioAttributesCompat0: androidx.media.AudioAttributesCompat): any;
				public getTracks(): java.util.List<androidx.media2.common.SessionPlayer.TrackInfo>;
				public prepareDrm(uuid: java.util.UUID): any;
			}
			export module ExoPlayerMediaPlayer2Impl {
				export class Mp2EventNotifier extends java.lang.Object {
					public static class: java.lang.Class<androidx.media2.player.ExoPlayerMediaPlayer2Impl.Mp2EventNotifier>;
					/**
					 * Constructs a new instance of the androidx.media2.player.ExoPlayerMediaPlayer2Impl$Mp2EventNotifier interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						notify(eventCallback0: androidx.media2.player.MediaPlayer2.EventCallback): void;
					});
					public constructor();
					public notify(): void;
					public notify(eventCallback0: androidx.media2.player.MediaPlayer2.EventCallback): void;
				}
				export abstract class Task extends java.lang.Object implements java.lang.Runnable {
					public static class: java.lang.Class<androidx.media2.player.ExoPlayerMediaPlayer2Impl.Task>;
					public run(): void;
				}
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module player {
			export class ExoPlayerUtils extends java.lang.Object {
				public static class: java.lang.Class<androidx.media2.player.ExoPlayerUtils>;
				public static createUnclippedMediaSource(context: globalAndroid.content.Context, dataSourceFactory: androidx.media2.exoplayer.external.upstream.DataSource.Factory, mediaItem: androidx.media2.common.MediaItem): androidx.media2.exoplayer.external.source.MediaSource;
				public static getAudioAttributes(audioAttributesCompat: androidx.media.AudioAttributesCompat): androidx.media2.exoplayer.external.audio.AudioAttributes;
				public static getMediaFormat(format: androidx.media2.exoplayer.external.Format): globalAndroid.media.MediaFormat;
				public static getError(exception: androidx.media2.exoplayer.external.ExoPlaybackException): number;
				public static getTrackType(exoPlayerTrackType: number): number;
				public static getAudioAttributesCompat(audioAttributes: androidx.media2.exoplayer.external.audio.AudioAttributes): androidx.media.AudioAttributesCompat;
				public static getSeekParameters(seekMode: number): androidx.media2.exoplayer.external.SeekParameters;
				public static getPlaybackParameters(playbackParams2: androidx.media2.player.PlaybackParams): androidx.media2.exoplayer.external.PlaybackParameters;
				public static getExoPlayerTrackType(trackType: number): number;
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module player {
			export class ExoPlayerWrapper extends java.lang.Object {
				public static class: java.lang.Class<androidx.media2.player.ExoPlayerWrapper>;
				public skipToNext(): void;
				public getCurrentMediaItem(): androidx.media2.common.MediaItem;
				public setAudioSessionId(audioSessionId: number): void;
				public setPlaybackParams(playbackParams2: androidx.media2.player.PlaybackParams): void;
				public getDuration(): number;
				public setMediaItem(mediaItem: androidx.media2.common.MediaItem): void;
				public attachAuxEffect(auxEffectId: number): void;
				public getLooper(): globalAndroid.os.Looper;
				public prepare(): void;
				public getAudioSessionId(): number;
				public reset(): void;
				public seekTo(position: number, mode: number): void;
				public setAudioAttributes(audioAttributes: androidx.media.AudioAttributesCompat): void;
				public setAuxEffectSendLevel(auxEffectSendLevel: number): void;
				public getVideoWidth(): number;
				public getBufferedPosition(): number;
				public getSelectedTrack(trackType: number): androidx.media2.common.SessionPlayer.TrackInfo;
				public getVideoHeight(): number;
				public close(): void;
				public setNextMediaItems(mediaItems: java.util.List<androidx.media2.common.MediaItem>): void;
				public getTimestamp(): androidx.media2.player.MediaTimestamp;
				public hasError(): boolean;
				public setSurface(surface: globalAndroid.view.Surface): void;
				public play(): void;
				public pause(): void;
				public setVolume(volume: number): void;
				public setNextMediaItem(mediaItem: androidx.media2.common.MediaItem): void;
				public getCurrentPosition(): number;
				public getPlaybackParams(): androidx.media2.player.PlaybackParams;
				public getVolume(): number;
				public deselectTrack(trackId: number): void;
				public getState(): number;
				public loopCurrent(loop: boolean): void;
				public getAudioAttributes(): androidx.media.AudioAttributesCompat;
				public getTracks(): java.util.List<androidx.media2.common.SessionPlayer.TrackInfo>;
				public selectTrack(trackId: number): void;
				public getMetricsV21(): any;
			}
			export module ExoPlayerWrapper {
				export class ComponentListener extends androidx.media2.exoplayer.external.Player.DefaultEventListener implements androidx.media2.exoplayer.external.video.VideoRendererEventListener, androidx.media2.exoplayer.external.audio.AudioListener, androidx.media2.player.TextRenderer.Output, androidx.media2.exoplayer.external.metadata.MetadataOutput {
					public static class: java.lang.Class<androidx.media2.player.ExoPlayerWrapper.ComponentListener>;
					public onPlayerError(error: androidx.media2.exoplayer.external.ExoPlaybackException): void;
					public onVideoDisabled(counters: androidx.media2.exoplayer.external.decoder.DecoderCounters): void;
					public onAudioAttributesChanged(audioAttributes: androidx.media2.exoplayer.external.audio.AudioAttributes): void;
					public onVideoDecoderInitialized(decoderName: string, initializedTimestampMs: number, initializationDurationMs: number): void;
					public onRenderedFirstFrame(surface: globalAndroid.view.Surface): void;
					public onRepeatModeChanged(int0: number): void;
					public onDroppedFrames(count: number, elapsedMs: number): void;
					public onVolumeChanged(volume: number): void;
					public onChannelAvailable(type: number, channel: number): void;
					public onTimelineChanged(timeline: androidx.media2.exoplayer.external.Timeline, manifest: any, reason: number): void;
					public onPositionDiscontinuity(int0: number): void;
					public onVideoEnabled(counters: androidx.media2.exoplayer.external.decoder.DecoderCounters): void;
					public onTracksChanged(trackGroups: androidx.media2.exoplayer.external.source.TrackGroupArray, trackSelections: androidx.media2.exoplayer.external.trackselection.TrackSelectionArray): void;
					public onTracksChanged(trackGroupArray0: androidx.media2.exoplayer.external.source.TrackGroupArray, trackSelectionArray1: androidx.media2.exoplayer.external.trackselection.TrackSelectionArray): void;
					public onPlayerError(exoPlaybackException0: androidx.media2.exoplayer.external.ExoPlaybackException): void;
					public onVideoInputFormatChanged(format: androidx.media2.exoplayer.external.Format): void;
					public onVideoSizeChanged(width: number, height: number, unappliedRotationDegrees: number, pixelWidthHeightRatio: number): void;
					/** @deprecated */
					public onTimelineChanged(timeline: androidx.media2.exoplayer.external.Timeline, manifest: any): void;
					public onLoadingChanged(boolean0: boolean): void;
					/** @deprecated */
					public onTimelineChanged(timeline: androidx.media2.exoplayer.external.Timeline, manifest: any, reason: number): void;
					public onSeekProcessed(): void;
					public onShuffleModeEnabledChanged(boolean0: boolean): void;
					public onPlayerStateChanged(playWhenReady: boolean, state: number): void;
					public onPlaybackParametersChanged(playbackParameters0: androidx.media2.exoplayer.external.PlaybackParameters): void;
					public onMetadata(metadata: androidx.media2.exoplayer.external.metadata.Metadata): void;
					public onPlayerStateChanged(boolean0: boolean, int1: number): void;
					public onAudioSessionId(audioSessionId: number): void;
					public onCcData(data: native.Array<number>, timeUs: number): void;
					public onTimelineChanged(timeline: androidx.media2.exoplayer.external.Timeline, reason: number): void;
					public onPositionDiscontinuity(reason: number): void;
				}
				export class FileDescriptorRegistry extends java.lang.Object {
					public static class: java.lang.Class<androidx.media2.player.ExoPlayerWrapper.FileDescriptorRegistry>;
					public unregisterMediaItem(fileDescriptor: java.io.FileDescriptor): void;
					public registerMediaItemAndGetLock(fileDescriptor: java.io.FileDescriptor): any;
				}
				export module FileDescriptorRegistry {
					export class Entry extends java.lang.Object {
						public static class: java.lang.Class<androidx.media2.player.ExoPlayerWrapper.FileDescriptorRegistry.Entry>;
						public mLock: any;
						public mMediaItemCount: number;
					}
				}
				export class Listener extends java.lang.Object {
					public static class: java.lang.Class<androidx.media2.player.ExoPlayerWrapper.Listener>;
					/**
					 * Constructs a new instance of the androidx.media2.player.ExoPlayerWrapper$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onPrepared(mediaItem0: androidx.media2.common.MediaItem): void;
						onTracksChanged(list0: java.util.List<androidx.media2.common.SessionPlayer.TrackInfo>): void;
						onSeekCompleted(): void;
						onBufferingStarted(mediaItem0: androidx.media2.common.MediaItem): void;
						onBufferingEnded(mediaItem0: androidx.media2.common.MediaItem): void;
						onBufferingUpdate(mediaItem0: androidx.media2.common.MediaItem, int1: number): void;
						onBandwidthSample(mediaItem0: androidx.media2.common.MediaItem, int1: number): void;
						onVideoRenderingStart(mediaItem0: androidx.media2.common.MediaItem): void;
						onVideoSizeChanged(mediaItem0: androidx.media2.common.MediaItem, int1: number, int2: number): void;
						onSubtitleData(mediaItem0: androidx.media2.common.MediaItem, trackInfo1: androidx.media2.common.SessionPlayer.TrackInfo, subtitleData2: androidx.media2.common.SubtitleData): void;
						onTimedMetadata(mediaItem0: androidx.media2.common.MediaItem, timedMetaData1: androidx.media2.player.TimedMetaData): void;
						onMediaItemStartedAsNext(mediaItem0: androidx.media2.common.MediaItem): void;
						onMediaItemEnded(mediaItem0: androidx.media2.common.MediaItem): void;
						onLoop(mediaItem0: androidx.media2.common.MediaItem): void;
						onMediaTimeDiscontinuity(mediaItem0: androidx.media2.common.MediaItem, mediaTimestamp1: androidx.media2.player.MediaTimestamp): void;
						onPlaybackEnded(mediaItem0: androidx.media2.common.MediaItem): void;
						onError(mediaItem0: androidx.media2.common.MediaItem, int1: number): void;
					});
					public constructor();
					public onMediaItemEnded(mediaItem0: androidx.media2.common.MediaItem): void;
					public onTimedMetadata(mediaItem0: androidx.media2.common.MediaItem, timedMetaData1: androidx.media2.player.TimedMetaData): void;
					public onLoop(mediaItem0: androidx.media2.common.MediaItem): void;
					public onSubtitleData(mediaItem0: androidx.media2.common.MediaItem, trackInfo1: androidx.media2.common.SessionPlayer.TrackInfo, subtitleData2: androidx.media2.common.SubtitleData): void;
					public onMediaItemStartedAsNext(mediaItem0: androidx.media2.common.MediaItem): void;
					public onError(mediaItem0: androidx.media2.common.MediaItem, int1: number): void;
					public onMediaTimeDiscontinuity(mediaItem0: androidx.media2.common.MediaItem, mediaTimestamp1: androidx.media2.player.MediaTimestamp): void;
					public onPrepared(mediaItem0: androidx.media2.common.MediaItem): void;
					public onBufferingStarted(mediaItem0: androidx.media2.common.MediaItem): void;
					public onBufferingUpdate(mediaItem0: androidx.media2.common.MediaItem, int1: number): void;
					public onVideoSizeChanged(mediaItem0: androidx.media2.common.MediaItem, int1: number, int2: number): void;
					public onSeekCompleted(): void;
					public onPlaybackEnded(mediaItem0: androidx.media2.common.MediaItem): void;
					public onTracksChanged(list0: java.util.List<androidx.media2.common.SessionPlayer.TrackInfo>): void;
					public onVideoRenderingStart(mediaItem0: androidx.media2.common.MediaItem): void;
					public onBufferingEnded(mediaItem0: androidx.media2.common.MediaItem): void;
					public onBandwidthSample(mediaItem0: androidx.media2.common.MediaItem, int1: number): void;
				}
				export class MediaItemInfo extends java.lang.Object {
					public static class: java.lang.Class<androidx.media2.player.ExoPlayerWrapper.MediaItemInfo>;
				}
				export class MediaItemQueue extends java.lang.Object {
					public static class: java.lang.Class<androidx.media2.player.ExoPlayerWrapper.MediaItemQueue>;
					public getCurrentMediaItemPlayingTimeMs(): number;
					public onPositionDiscontinuity(isPeriodTransition: boolean): void;
					public isEmpty(): boolean;
					public onStopped(): void;
					public onPlayerEnded(): void;
					public onPlaying(): void;
					public setMediaItem(mediaItem: androidx.media2.common.MediaItem): void;
					public skipToNext(): void;
					public getCurrentMediaItemIsRemote(): boolean;
					public clear(): void;
					public setNextMediaItems(mediaItems: java.util.List<androidx.media2.common.MediaItem>): void;
					public getCurrentMediaItem(): androidx.media2.common.MediaItem;
					public preparePlayer(): void;
				}
				export class PollBufferRunnable extends java.lang.Object implements java.lang.Runnable {
					public static class: java.lang.Class<androidx.media2.player.ExoPlayerWrapper.PollBufferRunnable>;
					public run(): void;
				}
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module player {
			export class FileDescriptorDataSource extends androidx.media2.exoplayer.external.upstream.BaseDataSource {
				public static class: java.lang.Class<androidx.media2.player.FileDescriptorDataSource>;
				public getResponseHeaders(): java.util.Map<string,java.util.List<string>>;
				public close(): void;
				public getUri(): globalAndroid.net.Uri;
				public addTransferListener(transferListener: androidx.media2.exoplayer.external.upstream.TransferListener): void;
				public read(buffer: native.Array<number>, offset: number, readLength: number): number;
				public getResponseHeaders(): java.util.Map<any,any>;
				public open(dataSpec: androidx.media2.exoplayer.external.upstream.DataSpec): number;
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module player {
			export class FileDescriptorUtil extends java.lang.Object {
				public static class: java.lang.Class<androidx.media2.player.FileDescriptorUtil>;
				public static dup(fileDescriptor: java.io.FileDescriptor): java.io.FileDescriptor;
				public static seek(fileDescriptor: java.io.FileDescriptor, position: number): void;
				public static close(fileDescriptor: java.io.FileDescriptor): void;
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module player {
			export class Id3MetadataDecoderFactory extends java.lang.Object implements androidx.media2.exoplayer.external.metadata.MetadataDecoderFactory {
				public static class: java.lang.Class<androidx.media2.player.Id3MetadataDecoderFactory>;
				public supportsFormat(format: androidx.media2.exoplayer.external.Format): boolean;
				public createDecoder(format: androidx.media2.exoplayer.external.Format): androidx.media2.exoplayer.external.metadata.MetadataDecoder;
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module player {
			export class MediaPlayer extends androidx.media2.common.SessionPlayer {
				public static class: java.lang.Class<androidx.media2.player.MediaPlayer>;
				public static PLAYER_ERROR_UNKNOWN: number;
				public static PLAYER_ERROR_IO: number;
				public static PLAYER_ERROR_MALFORMED: number;
				public static PLAYER_ERROR_UNSUPPORTED: number;
				public static PLAYER_ERROR_TIMED_OUT: number;
				public static MEDIA_INFO_MEDIA_ITEM_START: number;
				public static MEDIA_INFO_VIDEO_RENDERING_START: number;
				public static MEDIA_INFO_MEDIA_ITEM_END: number;
				public static MEDIA_INFO_MEDIA_ITEM_LIST_END: number;
				public static MEDIA_INFO_MEDIA_ITEM_REPEAT: number;
				public static MEDIA_INFO_PREPARED: number;
				public static MEDIA_INFO_VIDEO_TRACK_LAGGING: number;
				public static MEDIA_INFO_BUFFERING_START: number;
				public static MEDIA_INFO_BUFFERING_END: number;
				public static MEDIA_INFO_NETWORK_BANDWIDTH: number;
				public static MEDIA_INFO_BUFFERING_UPDATE: number;
				public static MEDIA_INFO_BAD_INTERLEAVING: number;
				public static MEDIA_INFO_NOT_SEEKABLE: number;
				public static MEDIA_INFO_METADATA_UPDATE: number;
				public static MEDIA_INFO_EXTERNAL_METADATA_UPDATE: number;
				public static MEDIA_INFO_AUDIO_NOT_PLAYING: number;
				public static MEDIA_INFO_VIDEO_NOT_PLAYING: number;
				public static MEDIA_INFO_UNSUPPORTED_SUBTITLE: number;
				public static MEDIA_INFO_SUBTITLE_TIMED_OUT: number;
				public static SEEK_PREVIOUS_SYNC: number;
				public static SEEK_NEXT_SYNC: number;
				public static SEEK_CLOSEST_SYNC: number;
				public static SEEK_CLOSEST: number;
				public static NO_TRACK_SELECTED: number;
				public setShuffleMode(int0: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public getCurrentMediaItem(): androidx.media2.common.MediaItem;
				public setPlaybackSpeed(playbackSpeed: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public constructor(context: globalAndroid.content.Context);
				public unregisterPlayerCallback(callback: androidx.media2.common.SessionPlayer.PlayerCallback): void;
				public prepare(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public movePlaylistItem(fromIndex: number, toIndex: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public pause(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public restoreDrmKeys(keySetId: native.Array<number>): void;
				public getDrmPropertyString(propertyName: string): string;
				public releaseDrm(): void;
				public constructor();
				public getAudioSessionId(): number;
				public seekTo(position: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public setAudioSessionId(sessionId: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public setMediaItem(item: androidx.media2.common.MediaItem): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public setRepeatMode(int0: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public getVideoSize(): androidx.media2.player.VideoSize;
				public updatePlaylistMetadata(mediaMetadata0: androidx.media2.common.MediaMetadata): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public attachAuxEffect(effectId: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public getNextMediaItemIndex(): number;
				public getSelectedTrack(trackType: number): androidx.media2.common.SessionPlayer.TrackInfo;
				public registerPlayerCallback(executor: java.util.concurrent.Executor, callback: androidx.media2.common.SessionPlayer.PlayerCallback): void;
				public getPlaybackSpeed(): number;
				public setAuxEffectSendLevel(level: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public close(): void;
				public getDrmKeyRequest(keySetId: native.Array<number>, initData: native.Array<number>, mimeType: string, keyType: number, optionalParameters: java.util.Map<string,string>): globalAndroid.media.MediaDrm.KeyRequest;
				public getVideoSize(): androidx.media2.common.VideoSize;
				public registerPlayerCallback(executor: java.util.concurrent.Executor, callback: androidx.media2.player.MediaPlayer.PlayerCallback): void;
				public setPlaylist(list0: java.util.List<androidx.media2.common.MediaItem>, mediaMetadata1: androidx.media2.common.MediaMetadata): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public addPlaylistItem(index: number, item: androidx.media2.common.MediaItem): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public getMetrics(): any;
				public getCurrentPosition(): number;
				public addPlaylistItem(int0: number, mediaItem1: androidx.media2.common.MediaItem): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public replacePlaylistItem(index: number, item: androidx.media2.common.MediaItem): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public skipToNextPlaylistItem(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public setRepeatMode(repeatMode: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public getMaxPlayerVolume(): number;
				public seekTo(long0: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public getPlaylistMetadata(): androidx.media2.common.MediaMetadata;
				public deselectTrack(trackInfo: androidx.media2.common.SessionPlayer.TrackInfo): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public setShuffleMode(shuffleMode: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public getDrmInfo(): androidx.media2.player.MediaPlayer.DrmInfo;
				public getAudioAttributes(): androidx.media.AudioAttributesCompat;
				public setPlaylist(list: java.util.List<androidx.media2.common.MediaItem>, metadata: androidx.media2.common.MediaMetadata): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public replacePlaylistItem(int0: number, mediaItem1: androidx.media2.common.MediaItem): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public setSurface(surface: globalAndroid.view.Surface): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				/** @deprecated */
				public selectTrack(trackInfo: androidx.media2.player.MediaPlayer.TrackInfo): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public getPlayerState(): number;
				public getCurrentMediaItemIndex(): number;
				public setPlayerVolume(volume: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public getDuration(): number;
				public selectTrack(trackInfo: androidx.media2.common.SessionPlayer.TrackInfo): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public removePlaylistItem(index: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public getSelectedTrack(trackType: number): androidx.media2.player.MediaPlayer.TrackInfo;
				public play(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public setPlaybackSpeed(float0: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public reset(): void;
				public updatePlaylistMetadata(metadata: androidx.media2.common.MediaMetadata): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				/** @deprecated */
				public getTrackInfo(): java.util.List<androidx.media2.player.MediaPlayer.TrackInfo>;
				public getPreviousMediaItemIndex(): number;
				public skipToPlaylistItem(int0: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public getBufferedPosition(): number;
				public setMediaItem(mediaItem0: androidx.media2.common.MediaItem): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public provideDrmKeyResponse(keySetId: native.Array<number>, response: native.Array<number>): native.Array<number>;
				public setAudioAttributes(audioAttributesCompat0: androidx.media.AudioAttributesCompat): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public setAudioAttributes(attributes: androidx.media.AudioAttributesCompat): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public setPlaybackParams(params: androidx.media2.player.PlaybackParams): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public skipToPreviousPlaylistItem(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public getTimestamp(): androidx.media2.player.MediaTimestamp;
				public getRepeatMode(): number;
				public getShuffleMode(): number;
				public getPlaybackParams(): androidx.media2.player.PlaybackParams;
				public setDrmPropertyString(propertyName: string, value: string): void;
				public getBufferingState(): number;
				public seekTo(position: number, mode: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public prepareDrm(uuid: java.util.UUID): com.google.common.util.concurrent.ListenableFuture<androidx.media2.player.MediaPlayer.DrmResult>;
				public removePlaylistItem(int0: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public getPlayerVolume(): number;
				public setOnDrmConfigHelper(listener: androidx.media2.player.MediaPlayer.OnDrmConfigHelper): void;
				public skipToPlaylistItem(index: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public unregisterPlayerCallback(callback: androidx.media2.player.MediaPlayer.PlayerCallback): void;
				public getPlaylist(): java.util.List<androidx.media2.common.MediaItem>;
				public getTracks(): java.util.List<androidx.media2.common.SessionPlayer.TrackInfo>;
			}
			export module MediaPlayer {
				export class DrmInfo extends java.lang.Object {
					public static class: java.lang.Class<androidx.media2.player.MediaPlayer.DrmInfo>;
					public getSupportedSchemes(): java.util.List<java.util.UUID>;
					public getPssh(): java.util.Map<java.util.UUID,native.Array<number>>;
				}
				export class DrmResult extends androidx.media2.common.SessionPlayer.PlayerResult {
					public static class: java.lang.Class<androidx.media2.player.MediaPlayer.DrmResult>;
					public static RESULT_ERROR_PROVISIONING_NETWORK_ERROR: number;
					public static RESULT_ERROR_PROVISIONING_SERVER_ERROR: number;
					public static RESULT_ERROR_PREPARATION_ERROR: number;
					public static RESULT_ERROR_UNSUPPORTED_SCHEME: number;
					public static RESULT_ERROR_RESOURCE_BUSY: number;
					public getResultCode(): number;
					public constructor(resultCode: number, item: androidx.media2.common.MediaItem);
					public getCompletionTime(): number;
					public getMediaItem(): androidx.media2.common.MediaItem;
				}
				export module DrmResult {
					export class DrmResultCode extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<androidx.media2.player.MediaPlayer.DrmResult.DrmResultCode>;
						/**
						 * Constructs a new instance of the androidx.media2.player.MediaPlayer$DrmResult$DrmResultCode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							equals(object0: any): boolean;
							hashCode(): number;
							toString(): string;
							annotationType(): java.lang.Class<any>;
						});
						public constructor();
						public equals(obj: any): boolean;
						public hashCode(): number;
						public toString(): string;
						public annotationType(): java.lang.Class<any>;
					}
				}
				export class MediaError extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.media2.player.MediaPlayer.MediaError>;
					/**
					 * Constructs a new instance of the androidx.media2.player.MediaPlayer$MediaError interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(object0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(obj: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
				export class MediaInfo extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.media2.player.MediaPlayer.MediaInfo>;
					/**
					 * Constructs a new instance of the androidx.media2.player.MediaPlayer$MediaInfo interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(object0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(obj: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
				export class MediaItemList extends java.lang.Object {
					public static class: java.lang.Class<androidx.media2.player.MediaPlayer.MediaItemList>;
				}
				export class MediaPlayerCallbackNotifier extends java.lang.Object {
					public static class: java.lang.Class<androidx.media2.player.MediaPlayer.MediaPlayerCallbackNotifier>;
					/**
					 * Constructs a new instance of the androidx.media2.player.MediaPlayer$MediaPlayerCallbackNotifier interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						callCallback(playerCallback0: androidx.media2.player.MediaPlayer.PlayerCallback): void;
					});
					public constructor();
					public callCallback(playerCallback0: androidx.media2.player.MediaPlayer.PlayerCallback): void;
				}
				export class MetricsConstants extends java.lang.Object {
					public static class: java.lang.Class<androidx.media2.player.MediaPlayer.MetricsConstants>;
					public static MIME_TYPE_VIDEO: string;
					public static CODEC_VIDEO: string;
					public static WIDTH: string;
					public static HEIGHT: string;
					public static FRAMES: string;
					public static FRAMES_DROPPED: string;
					public static MIME_TYPE_AUDIO: string;
					public static CODEC_AUDIO: string;
					public static DURATION: string;
					public static PLAYING: string;
					public static ERRORS: string;
					public static ERROR_CODE: string;
				}
				export class Mp2Callback extends androidx.media2.player.MediaPlayer2.EventCallback {
					public static class: java.lang.Class<androidx.media2.player.MediaPlayer.Mp2Callback>;
					public onInfo(mp: androidx.media2.player.MediaPlayer2, item: androidx.media2.common.MediaItem, what: number, extra: number): void;
					public onCommandLabelReached(mp: androidx.media2.player.MediaPlayer2, label: any): void;
					public onSubtitleData(mp: androidx.media2.player.MediaPlayer2, item: androidx.media2.common.MediaItem, track: androidx.media2.common.SessionPlayer.TrackInfo, data: androidx.media2.common.SubtitleData): void;
					public onTracksChanged(mp: androidx.media2.player.MediaPlayer2, tracks: java.util.List<androidx.media2.common.SessionPlayer.TrackInfo>): void;
					public onMediaTimeDiscontinuity(mp: androidx.media2.player.MediaPlayer2, item: androidx.media2.common.MediaItem, timestamp: androidx.media2.player.MediaTimestamp): void;
					public onError(mp: androidx.media2.player.MediaPlayer2, item: androidx.media2.common.MediaItem, what: number, extra: number): void;
					public onInfo(mp: androidx.media2.player.MediaPlayer2, item: androidx.media2.common.MediaItem, mp2What: number, extra: number): void;
					public onVideoSizeChanged(mp: androidx.media2.player.MediaPlayer2, item: androidx.media2.common.MediaItem, width: number, height: number): void;
					public onTimedMetaDataAvailable(mp: androidx.media2.player.MediaPlayer2, item: androidx.media2.common.MediaItem, data: androidx.media2.player.TimedMetaData): void;
					public onCallCompleted(mp: androidx.media2.player.MediaPlayer2, item: androidx.media2.common.MediaItem, what: number, status: number): void;
				}
				export class Mp2DrmCallback extends androidx.media2.player.MediaPlayer2.DrmEventCallback {
					public static class: java.lang.Class<androidx.media2.player.MediaPlayer.Mp2DrmCallback>;
					public onDrmInfo(mp: androidx.media2.player.MediaPlayer2, item: androidx.media2.common.MediaItem, drmInfo: androidx.media2.player.MediaPlayer2.DrmInfo): void;
					public onDrmPrepared(mp: androidx.media2.player.MediaPlayer2, item: androidx.media2.common.MediaItem, status: number): void;
				}
				export class NoDrmSchemeException extends java.lang.Exception {
					public static class: java.lang.Class<androidx.media2.player.MediaPlayer.NoDrmSchemeException>;
					public constructor(message: string);
					public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
					public constructor();
					public constructor(detailMessage: string);
					public constructor(cause: java.lang.Throwable);
					public constructor(message: string, cause: java.lang.Throwable);
				}
				export class OnDrmConfigHelper extends java.lang.Object {
					public static class: java.lang.Class<androidx.media2.player.MediaPlayer.OnDrmConfigHelper>;
					/**
					 * Constructs a new instance of the androidx.media2.player.MediaPlayer$OnDrmConfigHelper interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onDrmConfig(mediaPlayer0: androidx.media2.player.MediaPlayer, mediaItem1: androidx.media2.common.MediaItem): void;
					});
					public constructor();
					public onDrmConfig(mediaPlayer0: androidx.media2.player.MediaPlayer, mediaItem1: androidx.media2.common.MediaItem): void;
				}
				export class PendingCommand extends java.lang.Object {
					public static class: java.lang.Class<androidx.media2.player.MediaPlayer.PendingCommand>;
				}
				export abstract class PendingFuture<V>  extends androidx.concurrent.futures.AbstractResolvableFuture<any> {
					public static class: java.lang.Class<androidx.media2.player.MediaPlayer.PendingFuture<any>>;
					public execute(): boolean;
					public setException(throwable: java.lang.Throwable): boolean;
					public set(value: any): boolean;
					public addListener(listener: java.lang.Runnable, executor: java.util.concurrent.Executor): void;
				}
				export abstract class PlayerCallback extends androidx.media2.common.SessionPlayer.PlayerCallback {
					public static class: java.lang.Class<androidx.media2.player.MediaPlayer.PlayerCallback>;
					public onTimedMetaDataAvailable(mp: androidx.media2.player.MediaPlayer, item: androidx.media2.common.MediaItem, data: androidx.media2.player.TimedMetaData): void;
					public constructor();
					public onMediaTimeDiscontinuity(mp: androidx.media2.player.MediaPlayer, item: androidx.media2.common.MediaItem, timestamp: androidx.media2.player.MediaTimestamp): void;
					/** @deprecated */
					public onVideoSizeChanged(mp: androidx.media2.player.MediaPlayer, item: androidx.media2.common.MediaItem, size: androidx.media2.player.VideoSize): void;
					public onInfo(mp: androidx.media2.player.MediaPlayer, item: androidx.media2.common.MediaItem, what: number, extra: number): void;
					public onError(mp: androidx.media2.player.MediaPlayer, item: androidx.media2.common.MediaItem, what: number, extra: number): void;
					public onVideoSizeChanged(player: androidx.media2.common.SessionPlayer, size: androidx.media2.common.VideoSize): void;
					public onDrmInfo(mp: androidx.media2.player.MediaPlayer, item: androidx.media2.common.MediaItem, drmInfo: androidx.media2.player.MediaPlayer.DrmInfo): void;
				}
				export class SeekMode extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.media2.player.MediaPlayer.SeekMode>;
					/**
					 * Constructs a new instance of the androidx.media2.player.MediaPlayer$SeekMode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(object0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(obj: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
				export class SessionPlayerCallbackNotifier extends java.lang.Object {
					public static class: java.lang.Class<androidx.media2.player.MediaPlayer.SessionPlayerCallbackNotifier>;
					/**
					 * Constructs a new instance of the androidx.media2.player.MediaPlayer$SessionPlayerCallbackNotifier interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						callCallback(playerCallback0: androidx.media2.common.SessionPlayer.PlayerCallback): void;
					});
					public constructor();
					public callCallback(playerCallback0: androidx.media2.common.SessionPlayer.PlayerCallback): void;
				}
				export class TrackInfo extends androidx.media2.common.SessionPlayer.TrackInfo {
					public static class: java.lang.Class<androidx.media2.player.MediaPlayer.TrackInfo>;
					public getFormat(): globalAndroid.media.MediaFormat;
				}
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module player {
			export abstract class MediaPlayer2 extends java.lang.Object {
				public static class: java.lang.Class<androidx.media2.player.MediaPlayer2>;
				public static VIDEO_SCALING_MODE_SCALE_TO_FIT: number;
				public static SEEK_PREVIOUS_SYNC: number;
				public static SEEK_NEXT_SYNC: number;
				public static SEEK_CLOSEST_SYNC: number;
				public static SEEK_CLOSEST: number;
				public static PLAYER_STATE_IDLE: number;
				public static PLAYER_STATE_PREPARED: number;
				public static PLAYER_STATE_PAUSED: number;
				public static PLAYER_STATE_PLAYING: number;
				public static PLAYER_STATE_ERROR: number;
				public static MEDIA_ERROR_UNKNOWN: number;
				public static MEDIA_ERROR_IO: number;
				public static MEDIA_ERROR_MALFORMED: number;
				public static MEDIA_ERROR_UNSUPPORTED: number;
				public static MEDIA_ERROR_TIMED_OUT: number;
				public static MEDIA_ERROR_SYSTEM: number;
				public static MEDIA_INFO_UNKNOWN: number;
				public static MEDIA_INFO_DATA_SOURCE_START: number;
				public static MEDIA_INFO_VIDEO_RENDERING_START: number;
				public static MEDIA_INFO_AUDIO_RENDERING_START: number;
				public static MEDIA_INFO_DATA_SOURCE_END: number;
				public static MEDIA_INFO_DATA_SOURCE_LIST_END: number;
				public static MEDIA_INFO_DATA_SOURCE_REPEAT: number;
				public static MEDIA_INFO_PREPARED: number;
				public static MEDIA_INFO_VIDEO_TRACK_LAGGING: number;
				public static MEDIA_INFO_BUFFERING_START: number;
				public static MEDIA_INFO_BUFFERING_END: number;
				public static MEDIA_INFO_NETWORK_BANDWIDTH: number;
				public static MEDIA_INFO_BUFFERING_UPDATE: number;
				public static MEDIA_INFO_BAD_INTERLEAVING: number;
				public static MEDIA_INFO_NOT_SEEKABLE: number;
				public static MEDIA_INFO_METADATA_UPDATE: number;
				public static MEDIA_INFO_EXTERNAL_METADATA_UPDATE: number;
				public static MEDIA_INFO_AUDIO_NOT_PLAYING: number;
				public static MEDIA_INFO_VIDEO_NOT_PLAYING: number;
				public static MEDIA_INFO_UNSUPPORTED_SUBTITLE: number;
				public static MEDIA_INFO_SUBTITLE_TIMED_OUT: number;
				public static CALL_COMPLETED_ATTACH_AUX_EFFECT: number;
				public static CALL_COMPLETED_DESELECT_TRACK: number;
				public static CALL_COMPLETED_LOOP_CURRENT: number;
				public static CALL_COMPLETED_PAUSE: number;
				public static CALL_COMPLETED_PLAY: number;
				public static CALL_COMPLETED_PREPARE: number;
				public static CALL_COMPLETED_SEEK_TO: number;
				public static CALL_COMPLETED_SELECT_TRACK: number;
				public static CALL_COMPLETED_SET_AUDIO_ATTRIBUTES: number;
				public static CALL_COMPLETED_SET_AUDIO_SESSION_ID: number;
				public static CALL_COMPLETED_SET_AUX_EFFECT_SEND_LEVEL: number;
				public static CALL_COMPLETED_SET_DATA_SOURCE: number;
				public static CALL_COMPLETED_SET_NEXT_DATA_SOURCE: number;
				public static CALL_COMPLETED_SET_NEXT_DATA_SOURCES: number;
				public static CALL_COMPLETED_SET_PLAYBACK_PARAMS: number;
				public static CALL_COMPLETED_SET_PLAYER_VOLUME: number;
				public static CALL_COMPLETED_SET_SURFACE: number;
				public static CALL_COMPLETED_SKIP_TO_NEXT: number;
				public static SEPARATE_CALL_COMPLETE_CALLBACK_START: number;
				public static CALL_COMPLETED_NOTIFY_WHEN_COMMAND_LABEL_REACHED: number;
				public static CALL_COMPLETED_PREPARE_DRM: number;
				public static CALL_STATUS_NO_ERROR: number;
				public static CALL_STATUS_ERROR_UNKNOWN: number;
				public static CALL_STATUS_INVALID_OPERATION: number;
				public static CALL_STATUS_BAD_VALUE: number;
				public static CALL_STATUS_PERMISSION_DENIED: number;
				public static CALL_STATUS_ERROR_IO: number;
				public static CALL_STATUS_SKIPPED: number;
				public static PREPARE_DRM_STATUS_SUCCESS: number;
				public static PREPARE_DRM_STATUS_PROVISIONING_NETWORK_ERROR: number;
				public static PREPARE_DRM_STATUS_PROVISIONING_SERVER_ERROR: number;
				public static PREPARE_DRM_STATUS_PREPARATION_ERROR: number;
				public static PREPARE_DRM_STATUS_UNSUPPORTED_SCHEME: number;
				public static PREPARE_DRM_STATUS_RESOURCE_BUSY: number;
				public setAudioSessionId(int0: number): any;
				public setDrmEventCallback(executor0: java.util.concurrent.Executor, drmEventCallback1: androidx.media2.player.MediaPlayer2.DrmEventCallback): void;
				public clearDrmEventCallback(): void;
				public getCurrentMediaItem(): androidx.media2.common.MediaItem;
				public getDrmInfo(): androidx.media2.player.MediaPlayer2.DrmInfo;
				public releaseDrm(): void;
				public constructor();
				public getAudioSessionId(): number;
				public getVideoWidth(): number;
				public restoreDrmKeys(bytes0: native.Array<number>): void;
				public close(): void;
				public getDrmKeyRequest(bytes0: native.Array<number>, bytes1: native.Array<number>, string2: string, int3: number, map4: java.util.Map<string,string>): globalAndroid.media.MediaDrm.KeyRequest;
				public getDrmPropertyString(string0: string): string;
				public setPlayerVolume(float0: number): any;
				public prepareDrm(uUID0: java.util.UUID): any;
				public setNextMediaItem(mediaItem0: androidx.media2.common.MediaItem): any;
				public getMetrics(): any;
				public getCurrentPosition(): number;
				public getMaxPlayerVolume(): number;
				public getSelectedTrack(int0: number): androidx.media2.common.SessionPlayer.TrackInfo;
				public getState(): number;
				public getAudioAttributes(): androidx.media.AudioAttributesCompat;
				public setMediaItem(mediaItem0: androidx.media2.common.MediaItem): any;
				public setAuxEffectSendLevel(float0: number): any;
				public setSurface(surface0: globalAndroid.view.Surface): any;
				public play(): any;
				public getDuration(): number;
				public setEventCallback(executor0: java.util.concurrent.Executor, eventCallback1: androidx.media2.player.MediaPlayer2.EventCallback): void;
				public clearPendingCommands(): void;
				public skipToNext(): any;
				public selectTrack(int0: number): any;
				public cancel(object0: any): boolean;
				public reset(): void;
				public setDrmPropertyString(string0: string, string1: string): void;
				public notifyWhenCommandLabelReached(object0: any): any;
				public setPlaybackParams(playbackParams0: androidx.media2.player.PlaybackParams): any;
				public seekTo(long0: number, int1: number): any;
				public getBufferedPosition(): number;
				public static create(context: globalAndroid.content.Context): androidx.media2.player.MediaPlayer2;
				public loopCurrent(boolean0: boolean): any;
				public getVideoHeight(): number;
				public pause(): any;
				public prepare(): any;
				public clearEventCallback(): void;
				public deselectTrack(int0: number): any;
				public getTimestamp(): androidx.media2.player.MediaTimestamp;
				public attachAuxEffect(int0: number): any;
				public setOnDrmConfigHelper(onDrmConfigHelper0: androidx.media2.player.MediaPlayer2.OnDrmConfigHelper): void;
				public provideDrmKeyResponse(bytes0: native.Array<number>, bytes1: native.Array<number>): native.Array<number>;
				public getPlaybackParams(): androidx.media2.player.PlaybackParams;
				public setNextMediaItems(list0: java.util.List<androidx.media2.common.MediaItem>): any;
				public seekTo(msec: number): any;
				public getPlayerVolume(): number;
				public setAudioAttributes(audioAttributesCompat0: androidx.media.AudioAttributesCompat): any;
				public getTracks(): java.util.List<androidx.media2.common.SessionPlayer.TrackInfo>;
			}
			export module MediaPlayer2 {
				export class CallCompleted extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.media2.player.MediaPlayer2.CallCompleted>;
					/**
					 * Constructs a new instance of the androidx.media2.player.MediaPlayer2$CallCompleted interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(object0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(obj: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
				export class CallStatus extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.media2.player.MediaPlayer2.CallStatus>;
					/**
					 * Constructs a new instance of the androidx.media2.player.MediaPlayer2$CallStatus interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(object0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(obj: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
				export abstract class DrmEventCallback extends java.lang.Object {
					public static class: java.lang.Class<androidx.media2.player.MediaPlayer2.DrmEventCallback>;
					public onDrmInfo(mp: androidx.media2.player.MediaPlayer2, item: androidx.media2.common.MediaItem, drmInfo: androidx.media2.player.MediaPlayer2.DrmInfo): void;
					public constructor();
					public onDrmPrepared(mp: androidx.media2.player.MediaPlayer2, item: androidx.media2.common.MediaItem, status: number): void;
				}
				export abstract class DrmInfo extends java.lang.Object {
					public static class: java.lang.Class<androidx.media2.player.MediaPlayer2.DrmInfo>;
					public constructor();
					public getSupportedSchemes(): java.util.List<java.util.UUID>;
					public getPssh(): java.util.Map<java.util.UUID,native.Array<number>>;
				}
				export abstract class EventCallback extends java.lang.Object {
					public static class: java.lang.Class<androidx.media2.player.MediaPlayer2.EventCallback>;
					public onInfo(mp: androidx.media2.player.MediaPlayer2, item: androidx.media2.common.MediaItem, what: number, extra: number): void;
					public onCommandLabelReached(mp: androidx.media2.player.MediaPlayer2, label: any): void;
					public onSubtitleData(mp: androidx.media2.player.MediaPlayer2, item: androidx.media2.common.MediaItem, track: androidx.media2.common.SessionPlayer.TrackInfo, data: androidx.media2.common.SubtitleData): void;
					public onTracksChanged(mp: androidx.media2.player.MediaPlayer2, tracks: java.util.List<androidx.media2.common.SessionPlayer.TrackInfo>): void;
					public onMediaTimeDiscontinuity(mp: androidx.media2.player.MediaPlayer2, item: androidx.media2.common.MediaItem, timestamp: androidx.media2.player.MediaTimestamp): void;
					public constructor();
					public onError(mp: androidx.media2.player.MediaPlayer2, item: androidx.media2.common.MediaItem, what: number, extra: number): void;
					public onVideoSizeChanged(mp: androidx.media2.player.MediaPlayer2, item: androidx.media2.common.MediaItem, width: number, height: number): void;
					public onTimedMetaDataAvailable(mp: androidx.media2.player.MediaPlayer2, item: androidx.media2.common.MediaItem, data: androidx.media2.player.TimedMetaData): void;
					public onCallCompleted(mp: androidx.media2.player.MediaPlayer2, item: androidx.media2.common.MediaItem, what: number, status: number): void;
				}
				export class MediaError extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.media2.player.MediaPlayer2.MediaError>;
					/**
					 * Constructs a new instance of the androidx.media2.player.MediaPlayer2$MediaError interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(object0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(obj: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
				export class MediaInfo extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.media2.player.MediaPlayer2.MediaInfo>;
					/**
					 * Constructs a new instance of the androidx.media2.player.MediaPlayer2$MediaInfo interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(object0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(obj: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
				export class MediaPlayer2State extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.media2.player.MediaPlayer2.MediaPlayer2State>;
					/**
					 * Constructs a new instance of the androidx.media2.player.MediaPlayer2$MediaPlayer2State interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(object0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(obj: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
				export class MetricsConstants extends java.lang.Object {
					public static class: java.lang.Class<androidx.media2.player.MediaPlayer2.MetricsConstants>;
					public static MIME_TYPE_VIDEO: string;
					public static CODEC_VIDEO: string;
					public static WIDTH: string;
					public static HEIGHT: string;
					public static FRAMES: string;
					public static FRAMES_DROPPED: string;
					public static MIME_TYPE_AUDIO: string;
					public static CODEC_AUDIO: string;
					public static DURATION: string;
					public static PLAYING: string;
					public static ERRORS: string;
					public static ERROR_CODE: string;
				}
				export class NoDrmSchemeException extends java.lang.Exception {
					public static class: java.lang.Class<androidx.media2.player.MediaPlayer2.NoDrmSchemeException>;
					public constructor(message: string);
					public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
					public constructor();
					public constructor(detailMessage: string);
					public constructor(cause: java.lang.Throwable);
					public constructor(message: string, cause: java.lang.Throwable);
				}
				export class OnDrmConfigHelper extends java.lang.Object {
					public static class: java.lang.Class<androidx.media2.player.MediaPlayer2.OnDrmConfigHelper>;
					/**
					 * Constructs a new instance of the androidx.media2.player.MediaPlayer2$OnDrmConfigHelper interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onDrmConfig(mediaPlayer20: androidx.media2.player.MediaPlayer2, mediaItem1: androidx.media2.common.MediaItem): void;
					});
					public constructor();
					public onDrmConfig(mediaPlayer20: androidx.media2.player.MediaPlayer2, mediaItem1: androidx.media2.common.MediaItem): void;
				}
				export class PrepareDrmStatusCode extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.media2.player.MediaPlayer2.PrepareDrmStatusCode>;
					/**
					 * Constructs a new instance of the androidx.media2.player.MediaPlayer2$PrepareDrmStatusCode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(object0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(obj: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
				export class SeekMode extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.media2.player.MediaPlayer2.SeekMode>;
					/**
					 * Constructs a new instance of the androidx.media2.player.MediaPlayer2$SeekMode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(object0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(obj: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module player {
			export class MediaTimestamp extends java.lang.Object {
				public static class: java.lang.Class<androidx.media2.player.MediaTimestamp>;
				public static TIMESTAMP_UNKNOWN: androidx.media2.player.MediaTimestamp;
				public equals(obj: any): boolean;
				public hashCode(): number;
				public getAnchorMediaTimeUs(): number;
				public getAnchorSystemNanoTime(): number;
				public toString(): string;
				public getMediaClockRate(): number;
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module player {
			export class PlaybackParams extends java.lang.Object {
				public static class: java.lang.Class<androidx.media2.player.PlaybackParams>;
				public static AUDIO_FALLBACK_MODE_DEFAULT: number;
				public static AUDIO_FALLBACK_MODE_MUTE: number;
				public static AUDIO_FALLBACK_MODE_FAIL: number;
				public getPlaybackParams(): globalAndroid.media.PlaybackParams;
				public getPitch(): java.lang.Float;
				public getSpeed(): java.lang.Float;
				public getAudioFallbackMode(): java.lang.Integer;
			}
			export module PlaybackParams {
				export class AudioFallbackMode extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.media2.player.PlaybackParams.AudioFallbackMode>;
					/**
					 * Constructs a new instance of the androidx.media2.player.PlaybackParams$AudioFallbackMode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(object0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(obj: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
				export class Builder extends java.lang.Object {
					public static class: java.lang.Class<androidx.media2.player.PlaybackParams.Builder>;
					public setSpeed(speed: number): androidx.media2.player.PlaybackParams.Builder;
					public constructor();
					public setAudioFallbackMode(audioFallbackMode: number): androidx.media2.player.PlaybackParams.Builder;
					public setPitch(pitch: number): androidx.media2.player.PlaybackParams.Builder;
					public constructor(playbackParams: androidx.media2.player.PlaybackParams);
					public constructor(playbackParams: globalAndroid.media.PlaybackParams);
					public build(): androidx.media2.player.PlaybackParams;
				}
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module player {
			export class RenderersFactory extends java.lang.Object implements androidx.media2.exoplayer.external.RenderersFactory {
				public static class: java.lang.Class<androidx.media2.player.RenderersFactory>;
				public static VIDEO_RENDERER_INDEX: number;
				public static AUDIO_RENDERER_INDEX: number;
				public static TEXT_RENDERER_INDEX: number;
				public static METADATA_RENDERER_INDEX: number;
				public createRenderers(eventHandler: globalAndroid.os.Handler, videoRendererEventListener: androidx.media2.exoplayer.external.video.VideoRendererEventListener, audioRendererEventListener: androidx.media2.exoplayer.external.audio.AudioRendererEventListener, textRendererOutput: androidx.media2.exoplayer.external.text.TextOutput, metadataRendererOutput: androidx.media2.exoplayer.external.metadata.MetadataOutput, drmSessionManager: androidx.media2.exoplayer.external.drm.DrmSessionManager<androidx.media2.exoplayer.external.drm.FrameworkMediaCrypto>): native.Array<androidx.media2.exoplayer.external.Renderer>;
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module player {
			export class TextRenderer extends androidx.media2.exoplayer.external.BaseRenderer {
				public static class: java.lang.Class<androidx.media2.player.TextRenderer>;
				public static TRACK_TYPE_CEA608: number;
				public static TRACK_TYPE_CEA708: number;
				public static TRACK_TYPE_WEBVTT: number;
				public static TRACK_TYPE_UNSET: number;
				public select(type: number, channel: number): void;
				public enable(configuration: androidx.media2.exoplayer.external.RendererConfiguration, formats: native.Array<androidx.media2.exoplayer.external.Format>, stream: androidx.media2.exoplayer.external.source.SampleStream, positionUs: number, joining: boolean, offsetUs: number): void;
				public reset(): void;
				public supportsMixedMimeTypeAdaptation(): number;
				public isEnded(): boolean;
				public clearSelection(): void;
				public disable(): void;
				public start(): void;
				public render(positionUs: number, elapsedRealtimeUs: number): void;
				public getCapabilities(): androidx.media2.exoplayer.external.RendererCapabilities;
				public resetPosition(positionUs: number): void;
				public onStreamChanged(formats: native.Array<androidx.media2.exoplayer.external.Format>, offsetUs: number): void;
				public getStream(): androidx.media2.exoplayer.external.source.SampleStream;
				public supportsFormat(format: androidx.media2.exoplayer.external.Format): number;
				public setCurrentStreamFinal(): void;
				public setIndex(index: number): void;
				public isReady(): boolean;
				public isCurrentStreamFinal(): boolean;
				public hasReadStreamToEnd(): boolean;
				public replaceStream(formats: native.Array<androidx.media2.exoplayer.external.Format>, stream: androidx.media2.exoplayer.external.source.SampleStream, offsetUs: number): void;
				public maybeThrowStreamError(): void;
				public stop(): void;
				public onPositionReset(positionUs: number, joining: boolean): void;
				public getTrackType(): number;
				public getState(): number;
				public getReadingPositionUs(): number;
				public setOperatingRate(float0: number): void;
				public getMediaClock(): androidx.media2.exoplayer.external.util.MediaClock;
			}
			export module TextRenderer {
				export class DataBuilder extends java.lang.Object {
					public static class: java.lang.Class<androidx.media2.player.TextRenderer.DataBuilder>;
					public mData: native.Array<number>;
					public mLength: number;
					public hasData(): boolean;
					public append(cc0: number, cc1: number): void;
					public clear(): void;
					public append(cc0: number, cc1: number, cc2: number): void;
				}
				export class Output extends java.lang.Object {
					public static class: java.lang.Class<androidx.media2.player.TextRenderer.Output>;
					/**
					 * Constructs a new instance of the androidx.media2.player.TextRenderer$Output interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onChannelAvailable(int0: number, int1: number): void;
						onCcData(bytes0: native.Array<number>, long1: number): void;
					});
					public constructor();
					public onCcData(bytes0: native.Array<number>, long1: number): void;
					public onChannelAvailable(int0: number, int1: number): void;
				}
				export class TextTrackType extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.media2.player.TextRenderer.TextTrackType>;
					/**
					 * Constructs a new instance of the androidx.media2.player.TextRenderer$TextTrackType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(object0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(obj: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module player {
			export class TimedMetaData extends java.lang.Object {
				public static class: java.lang.Class<androidx.media2.player.TimedMetaData>;
				public constructor(timestampUs: number, metaData: native.Array<number>);
				public getMetaData(): native.Array<number>;
				public constructor(timedMetaData: globalAndroid.media.TimedMetaData);
				public getTimestamp(): number;
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module player {
			export class TrackSelector extends java.lang.Object {
				public static class: java.lang.Class<androidx.media2.player.TrackSelector>;
				public getPlayerTrackSelector(): androidx.media2.exoplayer.external.trackselection.DefaultTrackSelector;
				public hasPendingTracksUpdate(): boolean;
				public deselectTrack(trackId: number): void;
				public handlePlayerTracksChanged(item: androidx.media2.common.MediaItem, trackSelections: androidx.media2.exoplayer.external.trackselection.TrackSelectionArray): void;
				public getSelectedTrack(trackType: number): androidx.media2.common.SessionPlayer.TrackInfo;
				public getTracks(): java.util.List<androidx.media2.common.SessionPlayer.TrackInfo>;
				public selectTrack(trackId: number): void;
				public handleTextRendererChannelAvailable(type: number, channel: number): void;
			}
			export module TrackSelector {
				export class InternalTextTrackInfo extends androidx.media2.player.TrackSelector.InternalTrackInfo {
					public static class: java.lang.Class<androidx.media2.player.TrackSelector.InternalTextTrackInfo>;
				}
				export class InternalTrackInfo extends java.lang.Object {
					public static class: java.lang.Class<androidx.media2.player.TrackSelector.InternalTrackInfo>;
				}
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module player {
			export class VideoSize extends androidx.media2.common.VideoSize {
				public static class: java.lang.Class<androidx.media2.player.VideoSize>;
				public constructor(width: number, height: number);
			}
		}
	}
}

//Generics information:
//androidx.media2.player.MediaPlayer.PendingFuture:1

