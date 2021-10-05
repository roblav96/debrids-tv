declare module com {
	export module google {
		export module android {
			export module exoplayer2 {
				export module ext {
					export module leanback {
						export class BuildConfig extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.ext.leanback.BuildConfig>;
							public static DEBUG: boolean;
							public static LIBRARY_PACKAGE_NAME: string;
							public static BUILD_TYPE: string;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module exoplayer2 {
				export module ext {
					export module leanback {
						export class LeanbackPlayerAdapter extends androidx.leanback.media.PlayerAdapter implements java.lang.Runnable {
							public static class: java.lang.Class<com.google.android.exoplayer2.ext.leanback.LeanbackPlayerAdapter>;
							public constructor();
							public constructor(context: globalAndroid.content.Context, player: com.google.android.exoplayer2.Player, updatePeriodMs: number);
							public pause(): void;
							/** @deprecated */
							public setControlDispatcher(controlDispatcher: com.google.android.exoplayer2.ControlDispatcher): void;
							public isPrepared(): boolean;
							public setErrorMessageProvider(errorMessageProvider: com.google.android.exoplayer2.util.ErrorMessageProvider<any>): void;
							public isPlaying(): boolean;
							public setProgressUpdatingEnabled(enable: boolean): void;
							public getBufferedPosition(): number;
							public onAttachedToHost(host: androidx.leanback.media.PlaybackGlueHost): void;
							public seekTo(positionInMs: number): void;
							public getCurrentPosition(): number;
							public setProgressUpdatingEnabled(enabled: boolean): void;
							public seekTo(positionMs: number): void;
							public getDuration(): number;
							public play(): void;
							public onDetachedFromHost(): void;
							public run(): void;
						}
						export module LeanbackPlayerAdapter {
							export class PlayerListener extends java.lang.Object implements com.google.android.exoplayer2.Player.Listener, globalAndroid.view.SurfaceHolder.Callback {
								public static class: java.lang.Class<com.google.android.exoplayer2.ext.leanback.LeanbackPlayerAdapter.PlayerListener>;
								public onSeekForwardIncrementChanged(seekForwardIncrementMs: number): void;
								public surfaceCreated(surfaceHolder: globalAndroid.view.SurfaceHolder): void;
								public onPositionDiscontinuity(oldPosition: com.google.android.exoplayer2.Player.PositionInfo, newPosition: com.google.android.exoplayer2.Player.PositionInfo, reason: number): void;
								public onAvailableCommandsChanged(availableCommands: com.google.android.exoplayer2.Player.Commands): void;
								public onCues(cues: java.util.List<com.google.android.exoplayer2.text.Cue>): void;
								public onRenderedFirstFrame(): void;
								public onSeekBackIncrementChanged(seekBackIncrementMs: number): void;
								/** @deprecated */
								public onPlayerStateChanged(playWhenReady: boolean, playbackState: number): void;
								public onPlaybackParametersChanged(playbackParameters: com.google.android.exoplayer2.PlaybackParameters): void;
								public onPlayerError(error: com.google.android.exoplayer2.PlaybackException): void;
								public onDeviceVolumeChanged(volume: number, muted: boolean): void;
								public onPlaybackSuppressionReasonChanged(playbackSuppressionReason: number): void;
								public onPlaybackStateChanged(playbackState: number): void;
								public onTimelineChanged(timeline: com.google.android.exoplayer2.Timeline, reason: number): void;
								public onMetadata(metadata: com.google.android.exoplayer2.metadata.Metadata): void;
								public surfaceChanged(surfaceHolder: globalAndroid.view.SurfaceHolder, format: number, width: number, height: number): void;
								public onVideoSizeChanged(videoSize: com.google.android.exoplayer2.video.VideoSize): void;
								public onSkipSilenceEnabledChanged(skipSilenceEnabled: boolean): void;
								/** @deprecated */
								public onLoadingChanged(isLoading: boolean): void;
								public onAudioAttributesChanged(audioAttributes: com.google.android.exoplayer2.audio.AudioAttributes): void;
								public onShuffleModeEnabledChanged(shuffleModeEnabled: boolean): void;
								public onIsLoadingChanged(isLoading: boolean): void;
								public onVolumeChanged(volume: number): void;
								public onMediaMetadataChanged(mediaMetadata: com.google.android.exoplayer2.MediaMetadata): void;
								public onMediaItemTransition(mediaItem: com.google.android.exoplayer2.MediaItem, reason: number): void;
								public onEvents(player: com.google.android.exoplayer2.Player, events: com.google.android.exoplayer2.Player.Events): void;
								public onRepeatModeChanged(repeatMode: number): void;
								public onTracksChanged(trackGroups: com.google.android.exoplayer2.source.TrackGroupArray, trackSelections: com.google.android.exoplayer2.trackselection.TrackSelectionArray): void;
								public onMaxSeekToPreviousPositionChanged(maxSeekToPreviousPositionMs: number): void;
								public onPlaylistMetadataChanged(mediaMetadata: com.google.android.exoplayer2.MediaMetadata): void;
								public onDeviceInfoChanged(deviceInfo: com.google.android.exoplayer2.device.DeviceInfo): void;
								public onPlayerErrorChanged(error: com.google.android.exoplayer2.PlaybackException): void;
								/** @deprecated */
								public onStaticMetadataChanged(metadataList: java.util.List<com.google.android.exoplayer2.metadata.Metadata>): void;
								/** @deprecated */
								public onSeekProcessed(): void;
								public surfaceDestroyed(surfaceHolder: globalAndroid.view.SurfaceHolder): void;
								public onAudioSessionIdChanged(audioSessionId: number): void;
								public onPlayWhenReadyChanged(playWhenReady: boolean, reason: number): void;
								/** @deprecated */
								public onPositionDiscontinuity(reason: number): void;
								public onIsPlayingChanged(isPlaying: boolean): void;
								public onSurfaceSizeChanged(width: number, height: number): void;
								/** @deprecated */
								public onVideoSizeChanged(width: number, height: number, unappliedRotationDegrees: number, pixelWidthHeightRatio: number): void;
							}
						}
					}
				}
			}
		}
	}
}


//Generics information:

