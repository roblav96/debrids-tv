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
							public static APPLICATION_ID: string;
							public static BUILD_TYPE: string;
							public static FLAVOR: string;
							public static VERSION_CODE: number;
							public static VERSION_NAME: string;
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
							public setControlDispatcher(controlDispatcher: com.google.android.exoplayer2.ControlDispatcher): void;
							public pause(): void;
							public isPrepared(): boolean;
							public setErrorMessageProvider(errorMessageProvider: com.google.android.exoplayer2.util.ErrorMessageProvider<any>): void;
							public isPlaying(): boolean;
							public setProgressUpdatingEnabled(enable: boolean): void;
							public getBufferedPosition(): number;
							public onAttachedToHost(host: androidx.leanback.media.PlaybackGlueHost): void;
							public seekTo(positionInMs: number): void;
							public setPlaybackPreparer(playbackPreparer: com.google.android.exoplayer2.PlaybackPreparer): void;
							public getCurrentPosition(): number;
							public setProgressUpdatingEnabled(enabled: boolean): void;
							public seekTo(positionMs: number): void;
							public getDuration(): number;
							public play(): void;
							public onDetachedFromHost(): void;
							public run(): void;
						}
						export module LeanbackPlayerAdapter {
							export class ComponentListener extends java.lang.Object implements com.google.android.exoplayer2.Player.EventListener, globalAndroid.view.SurfaceHolder.Callback, com.google.android.exoplayer2.video.VideoListener {
								public static class: java.lang.Class<com.google.android.exoplayer2.ext.leanback.LeanbackPlayerAdapter.ComponentListener>;
								public surfaceCreated(surfaceHolder: globalAndroid.view.SurfaceHolder): void;
								public onPlaybackStateChanged(state: number): void;
								public onRenderedFirstFrame(): void;
								/** @deprecated */
								public onPlayerStateChanged(playWhenReady: boolean, playbackState: number): void;
								public onPlaybackParametersChanged(playbackParameters: com.google.android.exoplayer2.PlaybackParameters): void;
								public onPlaybackSuppressionReasonChanged(playbackSuppressionReason: number): void;
								public onPlaybackStateChanged(playbackState: number): void;
								public onTimelineChanged(timeline: com.google.android.exoplayer2.Timeline, reason: number): void;
								public surfaceChanged(surfaceHolder: globalAndroid.view.SurfaceHolder, format: number, width: number, height: number): void;
								/** @deprecated */
								public onLoadingChanged(isLoading: boolean): void;
								public onShuffleModeEnabledChanged(shuffleModeEnabled: boolean): void;
								public onIsLoadingChanged(isLoading: boolean): void;
								public onPlayerError(error: com.google.android.exoplayer2.ExoPlaybackException): void;
								public onMediaItemTransition(mediaItem: com.google.android.exoplayer2.MediaItem, reason: number): void;
								public onRepeatModeChanged(repeatMode: number): void;
								public onTracksChanged(trackGroups: com.google.android.exoplayer2.source.TrackGroupArray, trackSelections: com.google.android.exoplayer2.trackselection.TrackSelectionArray): void;
								public onPlayerError(exception: com.google.android.exoplayer2.ExoPlaybackException): void;
								public onExperimentalOffloadSchedulingEnabledChanged(offloadSchedulingEnabled: boolean): void;
								public onPositionDiscontinuity(reason: number): void;
								/** @deprecated */
								public onTimelineChanged(timeline: com.google.android.exoplayer2.Timeline, manifest: any, reason: number): void;
								/** @deprecated */
								public onSeekProcessed(): void;
								public surfaceDestroyed(surfaceHolder: globalAndroid.view.SurfaceHolder): void;
								public onPlayWhenReadyChanged(playWhenReady: boolean, reason: number): void;
								public onVideoSizeChanged(width: number, height: number, unappliedRotationDegrees: number, pixelWidthHeightRatio: number): void;
								public onIsPlayingChanged(isPlaying: boolean): void;
								public onSurfaceSizeChanged(width: number, height: number): void;
							}
						}
					}
				}
			}
		}
	}
}


//Generics information:

