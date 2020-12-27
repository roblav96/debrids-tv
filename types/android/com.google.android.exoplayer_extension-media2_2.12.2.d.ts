declare module com {
	export module google {
		export module android {
			export module exoplayer2 {
				export module ext {
					export module media2 {
						export class BuildConfig extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.ext.media2.BuildConfig>;
							public static APPLICATION_ID: string;
							public static BUILD_TYPE: string;
							public static DEBUG: boolean;
							public static FLAVOR: string;
							public static LIBRARY_PACKAGE_NAME: string;
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
					export module media2 {
						export class DefaultMediaItemConverter extends java.lang.Object implements com.google.android.exoplayer2.ext.media2.MediaItemConverter {
							public static class: java.lang.Class<com.google.android.exoplayer2.ext.media2.DefaultMediaItemConverter>;
							public constructor();
							public convertToExoPlayerMediaItem(media2MediaItem: androidx.media2.common.MediaItem): com.google.android.exoplayer2.MediaItem;
							public convertToMedia2MediaItem(exoPlayerMediaItem: com.google.android.exoplayer2.MediaItem): androidx.media2.common.MediaItem;
							public getMetadata(exoPlayerMediaItem: com.google.android.exoplayer2.MediaItem): androidx.media2.common.MediaMetadata;
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
					export module media2 {
						export class MediaItemConverter extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.ext.media2.MediaItemConverter>;
							/**
							 * Constructs a new instance of the com.google.android.exoplayer2.ext.media2.MediaItemConverter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								convertToExoPlayerMediaItem(mediaItem0: androidx.media2.common.MediaItem): com.google.android.exoplayer2.MediaItem;
								convertToMedia2MediaItem(mediaItem0: com.google.android.exoplayer2.MediaItem): androidx.media2.common.MediaItem;
							});
							public constructor();
							public convertToExoPlayerMediaItem(mediaItem0: androidx.media2.common.MediaItem): com.google.android.exoplayer2.MediaItem;
							public convertToMedia2MediaItem(mediaItem0: com.google.android.exoplayer2.MediaItem): androidx.media2.common.MediaItem;
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
					export module media2 {
						export class MediaSessionUtil extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.ext.media2.MediaSessionUtil>;
							public static getSessionCompatToken(mediaSession: androidx.media2.session.MediaSession): globalAndroid.support.v4.media.session.MediaSessionCompat.Token;
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
					export module media2 {
						export class PlayerCommandQueue extends java.lang.Object implements java.lang.AutoCloseable {
							public static class: java.lang.Class<com.google.android.exoplayer2.ext.media2.PlayerCommandQueue>;
							public static COMMAND_CODE_PLAYER_ADD_PLAYLIST_ITEM: number;
							public static COMMAND_CODE_PLAYER_PAUSE: number;
							public static COMMAND_CODE_PLAYER_PLAY: number;
							public static COMMAND_CODE_PLAYER_PREPARE: number;
							public static COMMAND_CODE_PLAYER_REMOVE_PLAYLIST_ITEM: number;
							public static COMMAND_CODE_PLAYER_REPLACE_PLAYLIST_ITEM: number;
							public static COMMAND_CODE_PLAYER_SEEK_TO: number;
							public static COMMAND_CODE_PLAYER_SET_AUDIO_ATTRIBUTES: number;
							public static COMMAND_CODE_PLAYER_SET_MEDIA_ITEM: number;
							public static COMMAND_CODE_PLAYER_SET_PLAYLIST: number;
							public static COMMAND_CODE_PLAYER_SET_REPEAT_MODE: number;
							public static COMMAND_CODE_PLAYER_SET_SHUFFLE_MODE: number;
							public static COMMAND_CODE_PLAYER_SET_SPEED: number;
							public static COMMAND_CODE_PLAYER_SKIP_TO_NEXT_PLAYLIST_ITEM: number;
							public static COMMAND_CODE_PLAYER_SKIP_TO_PLAYLIST_ITEM: number;
							public static COMMAND_CODE_PLAYER_SKIP_TO_PREVIOUS_PLAYLIST_ITEM: number;
							public static COMMAND_CODE_PLAYER_UPDATE_LIST_METADATA: number;
							public close(): void;
							public notifyCommandCompleted(completedCommandCode: number): void;
							public addCommand(commandCode: number, command: java.util.concurrent.Callable<java.lang.Boolean>, tag: any): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
							public constructor(player: com.google.android.exoplayer2.ext.media2.PlayerWrapper, handler: globalAndroid.os.Handler);
							public notifyCommandError(): void;
							public addCommand(commandCode: number, command: java.util.concurrent.Callable<java.lang.Boolean>): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
							public reset(): void;
						}
						export module PlayerCommandQueue {
							export class AsyncCommandCode extends java.lang.Object implements java.lang.annotation.Annotation {
								public static class: java.lang.Class<com.google.android.exoplayer2.ext.media2.PlayerCommandQueue.AsyncCommandCode>;
								/**
								 * Constructs a new instance of the com.google.android.exoplayer2.ext.media2.PlayerCommandQueue$AsyncCommandCode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									equals(object0: any): boolean;
									hashCode(): number;
									toString(): string;
									annotationType(): java.lang.Class<any>;
								});
								public constructor();
								public toString(): string;
								public equals(obj: any): boolean;
								public annotationType(): java.lang.Class<any>;
								public hashCode(): number;
							}
							export class AsyncPlayerCommandResult extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.ext.media2.PlayerCommandQueue.AsyncPlayerCommandResult>;
								public commandCode: number;
								public result: com.google.common.util.concurrent.SettableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
								public toString(): string;
								public constructor(commandCode: number, result: com.google.common.util.concurrent.SettableFuture<androidx.media2.common.SessionPlayer.PlayerResult>);
							}
							export class CommandCode extends java.lang.Object implements java.lang.annotation.Annotation {
								public static class: java.lang.Class<com.google.android.exoplayer2.ext.media2.PlayerCommandQueue.CommandCode>;
								/**
								 * Constructs a new instance of the com.google.android.exoplayer2.ext.media2.PlayerCommandQueue$CommandCode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									equals(object0: any): boolean;
									hashCode(): number;
									toString(): string;
									annotationType(): java.lang.Class<any>;
								});
								public constructor();
								public toString(): string;
								public equals(obj: any): boolean;
								public annotationType(): java.lang.Class<any>;
								public hashCode(): number;
							}
							export class PlayerCommand extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.ext.media2.PlayerCommandQueue.PlayerCommand>;
								public command: java.util.concurrent.Callable<java.lang.Boolean>;
								public commandCode: number;
								public result: com.google.common.util.concurrent.SettableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
								public toString(): string;
								public constructor(commandCode: number, command: java.util.concurrent.Callable<java.lang.Boolean>, result: com.google.common.util.concurrent.SettableFuture<androidx.media2.common.SessionPlayer.PlayerResult>, tag: any);
							}
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
					export module media2 {
						export class PlayerWrapper extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.ext.media2.PlayerWrapper>;
							public close(): void;
							public setControlDispatcher(controlDispatcher: com.google.android.exoplayer2.ControlDispatcher): void;
							public skipToNextPlaylistItem(): boolean;
							public canSkipToNextPlaylistItem(): boolean;
							public getPlaylist(): java.util.List<androidx.media2.common.MediaItem>;
							public setMediaItem(media2MediaItem: androidx.media2.common.MediaItem): boolean;
							public canSkipToPreviousPlaylistItem(): boolean;
							public hasError(): boolean;
							public constructor(listener: com.google.android.exoplayer2.ext.media2.PlayerWrapper.Listener, player: com.google.android.exoplayer2.Player, mediaItemConverter: com.google.android.exoplayer2.ext.media2.MediaItemConverter);
							public getShuffleMode(): number;
							public isCurrentMediaItemSeekable(): boolean;
							public reset(): void;
							public setAudioAttributes(audioAttributes: androidx.media.AudioAttributesCompat): void;
							public addPlaylistItem(index: number, media2MediaItem: androidx.media2.common.MediaItem): boolean;
							public getCurrentPosition(): number;
							public getCurrentMediaItem(): androidx.media2.common.MediaItem;
							public play(): boolean;
							public skipToPreviousPlaylistItem(): boolean;
							public getDuration(): number;
							public setRepeatMode(repeatMode: number): boolean;
							public getAudioAttributes(): androidx.media.AudioAttributesCompat;
							public setPlaylist(playlist: java.util.List<androidx.media2.common.MediaItem>, metadata: androidx.media2.common.MediaMetadata): boolean;
							public pause(): boolean;
							public setPlaybackSpeed(playbackSpeed: number): void;
							public removePlaylistItem(index: number): boolean;
							public canSkipToPlaylistItem(): boolean;
							public replacePlaylistItem(index: number, media2MediaItem: androidx.media2.common.MediaItem): boolean;
							public getCurrentMediaItemIndex(): number;
							public getPreviousMediaItemIndex(): number;
							public getRepeatMode(): number;
							public updatePlaylistMetadata(metadata: androidx.media2.common.MediaMetadata): boolean;
							public skipToPlaylistItem(index: number): boolean;
							public getPlaybackSpeed(): number;
							public getBufferedPosition(): number;
							public seekTo(position: number): boolean;
							public getNextMediaItemIndex(): number;
							public setShuffleMode(shuffleMode: number): boolean;
							public getPlaylistMetadata(): androidx.media2.common.MediaMetadata;
							public prepare(): boolean;
						}
						export module PlayerWrapper {
							export class ComponentListener extends java.lang.Object implements com.google.android.exoplayer2.Player.EventListener, com.google.android.exoplayer2.audio.AudioListener {
								public static class: java.lang.Class<com.google.android.exoplayer2.ext.media2.PlayerWrapper.ComponentListener>;
								public onIsLoadingChanged(isLoading: boolean): void;
								public onVolumeChanged(volume: number): void;
								public onPlayerError(error: com.google.android.exoplayer2.ExoPlaybackException): void;
								public onMediaItemTransition(mediaItem: com.google.android.exoplayer2.MediaItem, reason: number): void;
								public onRepeatModeChanged(repeatMode: number): void;
								public onTracksChanged(trackGroups: com.google.android.exoplayer2.source.TrackGroupArray, trackSelections: com.google.android.exoplayer2.trackselection.TrackSelectionArray): void;
								public onPlaybackStateChanged(state: number): void;
								public onExperimentalOffloadSchedulingEnabledChanged(offloadSchedulingEnabled: boolean): void;
								public onPositionDiscontinuity(reason: number): void;
								/** @deprecated */
								public onTimelineChanged(timeline: com.google.android.exoplayer2.Timeline, manifest: any, reason: number): void;
								/** @deprecated */
								public onPlayerStateChanged(playWhenReady: boolean, playbackState: number): void;
								/** @deprecated */
								public onSeekProcessed(): void;
								public onPlaybackParametersChanged(playbackParameters: com.google.android.exoplayer2.PlaybackParameters): void;
								public onPlayWhenReadyChanged(playWhenReady: boolean, reason: number): void;
								public onAudioSessionId(audioSessionId: number): void;
								public onPlaybackSuppressionReasonChanged(playbackSuppressionReason: number): void;
								public onTimelineChanged(timeline: com.google.android.exoplayer2.Timeline, reason: number): void;
								/** @deprecated */
								public onLoadingChanged(isLoading: boolean): void;
								public onSkipSilenceEnabledChanged(skipSilenceEnabled: boolean): void;
								public onAudioAttributesChanged(audioAttributes: com.google.android.exoplayer2.audio.AudioAttributes): void;
								public onIsPlayingChanged(isPlaying: boolean): void;
								public onShuffleModeEnabledChanged(shuffleModeEnabled: boolean): void;
							}
							export class Listener extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.ext.media2.PlayerWrapper.Listener>;
								/**
								 * Constructs a new instance of the com.google.android.exoplayer2.ext.media2.PlayerWrapper$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onPlayerStateChanged(int0: number): void;
									onPrepared(mediaItem0: androidx.media2.common.MediaItem, int1: number): void;
									onSeekCompleted(): void;
									onBufferingStarted(mediaItem0: androidx.media2.common.MediaItem): void;
									onBufferingEnded(mediaItem0: androidx.media2.common.MediaItem, int1: number): void;
									onBufferingUpdate(mediaItem0: androidx.media2.common.MediaItem, int1: number): void;
									onCurrentMediaItemChanged(mediaItem0: androidx.media2.common.MediaItem): void;
									onPlaybackEnded(): void;
									onError(mediaItem0: androidx.media2.common.MediaItem): void;
									onPlaylistChanged(): void;
									onShuffleModeChanged(int0: number): void;
									onRepeatModeChanged(int0: number): void;
									onAudioAttributesChanged(audioAttributesCompat0: androidx.media.AudioAttributesCompat): void;
									onPlaybackSpeedChanged(float0: number): void;
								});
								public constructor();
								public onBufferingUpdate(mediaItem0: androidx.media2.common.MediaItem, int1: number): void;
								public onCurrentMediaItemChanged(mediaItem0: androidx.media2.common.MediaItem): void;
								public onError(mediaItem0: androidx.media2.common.MediaItem): void;
								public onPrepared(mediaItem0: androidx.media2.common.MediaItem, int1: number): void;
								public onShuffleModeChanged(int0: number): void;
								public onSeekCompleted(): void;
								public onBufferingStarted(mediaItem0: androidx.media2.common.MediaItem): void;
								public onAudioAttributesChanged(audioAttributesCompat0: androidx.media.AudioAttributesCompat): void;
								public onBufferingEnded(mediaItem0: androidx.media2.common.MediaItem, int1: number): void;
								public onPlaylistChanged(): void;
								public onPlayerStateChanged(int0: number): void;
								public onRepeatModeChanged(int0: number): void;
								public onPlaybackEnded(): void;
								public onPlaybackSpeedChanged(float0: number): void;
							}
							export class PollBufferRunnable extends java.lang.Object implements java.lang.Runnable {
								public static class: java.lang.Class<com.google.android.exoplayer2.ext.media2.PlayerWrapper.PollBufferRunnable>;
								public run(): void;
							}
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
					export module media2 {
						export class SessionCallback extends androidx.media2.session.MediaSession.SessionCallback {
							public static class: java.lang.Class<com.google.android.exoplayer2.ext.media2.SessionCallback>;
							public constructor();
							public onConnect(session: androidx.media2.session.MediaSession, controller: androidx.media2.session.MediaSession.ControllerInfo): androidx.media2.session.SessionCommandGroup;
							public onDisconnected(session: androidx.media2.session.MediaSession, controller: androidx.media2.session.MediaSession.ControllerInfo): void;
							public onSkipForward(session: androidx.media2.session.MediaSession, controller: androidx.media2.session.MediaSession.ControllerInfo): number;
							public onRewind(session: androidx.media2.session.MediaSession, controller: androidx.media2.session.MediaSession.ControllerInfo): number;
							public onSkipBackward(session: androidx.media2.session.MediaSession, controller: androidx.media2.session.MediaSession.ControllerInfo): number;
							public onSetRating(session: androidx.media2.session.MediaSession, controller: androidx.media2.session.MediaSession.ControllerInfo, mediaId: string, rating: androidx.media2.common.Rating): number;
							public onCreateMediaItem(session: androidx.media2.session.MediaSession, controller: androidx.media2.session.MediaSession.ControllerInfo, mediaId: string): androidx.media2.common.MediaItem;
							public onConnect(session: androidx.media2.session.MediaSession, controllerInfo: androidx.media2.session.MediaSession.ControllerInfo): androidx.media2.session.SessionCommandGroup;
							public onCommandRequest(session: androidx.media2.session.MediaSession, controller: androidx.media2.session.MediaSession.ControllerInfo, command: androidx.media2.session.SessionCommand): number;
							public onFastForward(session: androidx.media2.session.MediaSession, controller: androidx.media2.session.MediaSession.ControllerInfo): number;
							public onCustomCommand(session: androidx.media2.session.MediaSession, controller: androidx.media2.session.MediaSession.ControllerInfo, customCommand: androidx.media2.session.SessionCommand, bundle3: globalAndroid.os.Bundle): androidx.media2.session.SessionResult;
							public onPostConnect(session: androidx.media2.session.MediaSession, controller: androidx.media2.session.MediaSession.ControllerInfo): void;
							public constructor(sessionPlayerConnector: com.google.android.exoplayer2.ext.media2.SessionPlayerConnector, fastForwardMs: number, rewindMs: number, seekTimeoutMs: number, allowedCommandProvider: com.google.android.exoplayer2.ext.media2.SessionCallbackBuilder.AllowedCommandProvider, ratingCallback: com.google.android.exoplayer2.ext.media2.SessionCallbackBuilder.RatingCallback, customCommandProvider: com.google.android.exoplayer2.ext.media2.SessionCallbackBuilder.CustomCommandProvider, mediaItemProvider: com.google.android.exoplayer2.ext.media2.SessionCallbackBuilder.MediaItemProvider, skipCallback: com.google.android.exoplayer2.ext.media2.SessionCallbackBuilder.SkipCallback, postConnectCallback: com.google.android.exoplayer2.ext.media2.SessionCallbackBuilder.PostConnectCallback, disconnectedCallback: com.google.android.exoplayer2.ext.media2.SessionCallbackBuilder.DisconnectedCallback);
						}
						export module SessionCallback {
							export class PlayerCallback extends androidx.media2.common.SessionPlayer.PlayerCallback {
								public static class: java.lang.Class<com.google.android.exoplayer2.ext.media2.SessionCallback.PlayerCallback>;
								public onPlaylistChanged(player: androidx.media2.common.SessionPlayer, list: java.util.List<androidx.media2.common.MediaItem>, metadata: androidx.media2.common.MediaMetadata): void;
								public onShuffleModeChanged(player: androidx.media2.common.SessionPlayer, shuffleMode: number): void;
								public onCurrentMediaItemChanged(player: androidx.media2.common.SessionPlayer, item: androidx.media2.common.MediaItem): void;
								public onRepeatModeChanged(player: androidx.media2.common.SessionPlayer, repeatMode: number): void;
								public onPlayerStateChanged(player: androidx.media2.common.SessionPlayer, playerState: number): void;
								public onBufferingStateChanged(player: androidx.media2.common.SessionPlayer, item: androidx.media2.common.MediaItem, buffState: number): void;
							}
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
					export module media2 {
						export class SessionCallbackBuilder extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.ext.media2.SessionCallbackBuilder>;
							public static DEFAULT_SEEK_TIMEOUT_MS: number;
							public setCustomCommandProvider(customCommandProvider: com.google.android.exoplayer2.ext.media2.SessionCallbackBuilder.CustomCommandProvider): com.google.android.exoplayer2.ext.media2.SessionCallbackBuilder;
							public setSeekTimeoutMs(seekTimeoutMs: number): com.google.android.exoplayer2.ext.media2.SessionCallbackBuilder;
							public setPostConnectCallback(postConnectCallback: com.google.android.exoplayer2.ext.media2.SessionCallbackBuilder.PostConnectCallback): com.google.android.exoplayer2.ext.media2.SessionCallbackBuilder;
							public setRewindIncrementMs(rewindMs: number): com.google.android.exoplayer2.ext.media2.SessionCallbackBuilder;
							public setAllowedCommandProvider(allowedCommandProvider: com.google.android.exoplayer2.ext.media2.SessionCallbackBuilder.AllowedCommandProvider): com.google.android.exoplayer2.ext.media2.SessionCallbackBuilder;
							public build(): androidx.media2.session.MediaSession.SessionCallback;
							public setDisconnectedCallback(disconnectedCallback: com.google.android.exoplayer2.ext.media2.SessionCallbackBuilder.DisconnectedCallback): com.google.android.exoplayer2.ext.media2.SessionCallbackBuilder;
							public setRatingCallback(ratingCallback: com.google.android.exoplayer2.ext.media2.SessionCallbackBuilder.RatingCallback): com.google.android.exoplayer2.ext.media2.SessionCallbackBuilder;
							public constructor(context: globalAndroid.content.Context, sessionPlayerConnector: com.google.android.exoplayer2.ext.media2.SessionPlayerConnector);
							public setFastForwardIncrementMs(fastForwardMs: number): com.google.android.exoplayer2.ext.media2.SessionCallbackBuilder;
							public setMediaItemProvider(mediaItemProvider: com.google.android.exoplayer2.ext.media2.SessionCallbackBuilder.MediaItemProvider): com.google.android.exoplayer2.ext.media2.SessionCallbackBuilder;
							public setSkipCallback(skipCallback: com.google.android.exoplayer2.ext.media2.SessionCallbackBuilder.SkipCallback): com.google.android.exoplayer2.ext.media2.SessionCallbackBuilder;
						}
						export module SessionCallbackBuilder {
							export class AllowedCommandProvider extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.ext.media2.SessionCallbackBuilder.AllowedCommandProvider>;
								/**
								 * Constructs a new instance of the com.google.android.exoplayer2.ext.media2.SessionCallbackBuilder$AllowedCommandProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									acceptConnection(mediaSession0: androidx.media2.session.MediaSession, controllerInfo1: androidx.media2.session.MediaSession.ControllerInfo): boolean;
									getAllowedCommands(mediaSession0: androidx.media2.session.MediaSession, controllerInfo1: androidx.media2.session.MediaSession.ControllerInfo, sessionCommandGroup2: androidx.media2.session.SessionCommandGroup): androidx.media2.session.SessionCommandGroup;
									onCommandRequest(mediaSession0: androidx.media2.session.MediaSession, controllerInfo1: androidx.media2.session.MediaSession.ControllerInfo, sessionCommand2: androidx.media2.session.SessionCommand): number;
								});
								public constructor();
								public acceptConnection(mediaSession0: androidx.media2.session.MediaSession, controllerInfo1: androidx.media2.session.MediaSession.ControllerInfo): boolean;
								public onCommandRequest(mediaSession0: androidx.media2.session.MediaSession, controllerInfo1: androidx.media2.session.MediaSession.ControllerInfo, sessionCommand2: androidx.media2.session.SessionCommand): number;
								public getAllowedCommands(mediaSession0: androidx.media2.session.MediaSession, controllerInfo1: androidx.media2.session.MediaSession.ControllerInfo, sessionCommandGroup2: androidx.media2.session.SessionCommandGroup): androidx.media2.session.SessionCommandGroup;
							}
							export class CustomCommandProvider extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.ext.media2.SessionCallbackBuilder.CustomCommandProvider>;
								/**
								 * Constructs a new instance of the com.google.android.exoplayer2.ext.media2.SessionCallbackBuilder$CustomCommandProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onCustomCommand(mediaSession0: androidx.media2.session.MediaSession, controllerInfo1: androidx.media2.session.MediaSession.ControllerInfo, sessionCommand2: androidx.media2.session.SessionCommand, bundle3: globalAndroid.os.Bundle): androidx.media2.session.SessionResult;
									getCustomCommands(mediaSession0: androidx.media2.session.MediaSession, controllerInfo1: androidx.media2.session.MediaSession.ControllerInfo): androidx.media2.session.SessionCommandGroup;
								});
								public constructor();
								public getCustomCommands(mediaSession0: androidx.media2.session.MediaSession, controllerInfo1: androidx.media2.session.MediaSession.ControllerInfo): androidx.media2.session.SessionCommandGroup;
								public onCustomCommand(mediaSession0: androidx.media2.session.MediaSession, controllerInfo1: androidx.media2.session.MediaSession.ControllerInfo, sessionCommand2: androidx.media2.session.SessionCommand, bundle3: globalAndroid.os.Bundle): androidx.media2.session.SessionResult;
							}
							export class DefaultAllowedCommandProvider extends java.lang.Object implements com.google.android.exoplayer2.ext.media2.SessionCallbackBuilder.AllowedCommandProvider {
								public static class: java.lang.Class<com.google.android.exoplayer2.ext.media2.SessionCallbackBuilder.DefaultAllowedCommandProvider>;
								public acceptConnection(session: androidx.media2.session.MediaSession, controllerInfo: androidx.media2.session.MediaSession.ControllerInfo): boolean;
								public onCommandRequest(session: androidx.media2.session.MediaSession, controllerInfo: androidx.media2.session.MediaSession.ControllerInfo, command: androidx.media2.session.SessionCommand): number;
								public getAllowedCommands(session: androidx.media2.session.MediaSession, controllerInfo: androidx.media2.session.MediaSession.ControllerInfo, baseAllowedSessionCommands: androidx.media2.session.SessionCommandGroup): androidx.media2.session.SessionCommandGroup;
								public constructor(context: globalAndroid.content.Context);
								public setTrustedPackageNames(packageNames: java.util.List<string>): void;
							}
							export class DisconnectedCallback extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.ext.media2.SessionCallbackBuilder.DisconnectedCallback>;
								/**
								 * Constructs a new instance of the com.google.android.exoplayer2.ext.media2.SessionCallbackBuilder$DisconnectedCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onDisconnected(mediaSession0: androidx.media2.session.MediaSession, controllerInfo1: androidx.media2.session.MediaSession.ControllerInfo): void;
								});
								public constructor();
								public onDisconnected(mediaSession0: androidx.media2.session.MediaSession, controllerInfo1: androidx.media2.session.MediaSession.ControllerInfo): void;
							}
							export class MediaIdMediaItemProvider extends java.lang.Object implements com.google.android.exoplayer2.ext.media2.SessionCallbackBuilder.MediaItemProvider {
								public static class: java.lang.Class<com.google.android.exoplayer2.ext.media2.SessionCallbackBuilder.MediaIdMediaItemProvider>;
								public constructor();
								public onCreateMediaItem(session: androidx.media2.session.MediaSession, controllerInfo: androidx.media2.session.MediaSession.ControllerInfo, mediaId: string): androidx.media2.common.MediaItem;
							}
							export class MediaItemProvider extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.ext.media2.SessionCallbackBuilder.MediaItemProvider>;
								/**
								 * Constructs a new instance of the com.google.android.exoplayer2.ext.media2.SessionCallbackBuilder$MediaItemProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onCreateMediaItem(mediaSession0: androidx.media2.session.MediaSession, controllerInfo1: androidx.media2.session.MediaSession.ControllerInfo, string2: string): androidx.media2.common.MediaItem;
								});
								public constructor();
								public onCreateMediaItem(mediaSession0: androidx.media2.session.MediaSession, controllerInfo1: androidx.media2.session.MediaSession.ControllerInfo, string2: string): androidx.media2.common.MediaItem;
							}
							export class PostConnectCallback extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.ext.media2.SessionCallbackBuilder.PostConnectCallback>;
								/**
								 * Constructs a new instance of the com.google.android.exoplayer2.ext.media2.SessionCallbackBuilder$PostConnectCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onPostConnect(mediaSession0: androidx.media2.session.MediaSession, controllerInfo1: androidx.media2.session.MediaSession.ControllerInfo): void;
								});
								public constructor();
								public onPostConnect(mediaSession0: androidx.media2.session.MediaSession, controllerInfo1: androidx.media2.session.MediaSession.ControllerInfo): void;
							}
							export class RatingCallback extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.ext.media2.SessionCallbackBuilder.RatingCallback>;
								/**
								 * Constructs a new instance of the com.google.android.exoplayer2.ext.media2.SessionCallbackBuilder$RatingCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onSetRating(mediaSession0: androidx.media2.session.MediaSession, controllerInfo1: androidx.media2.session.MediaSession.ControllerInfo, string2: string, rating3: androidx.media2.common.Rating): number;
								});
								public constructor();
								public onSetRating(mediaSession0: androidx.media2.session.MediaSession, controllerInfo1: androidx.media2.session.MediaSession.ControllerInfo, string2: string, rating3: androidx.media2.common.Rating): number;
							}
							export class SkipCallback extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.ext.media2.SessionCallbackBuilder.SkipCallback>;
								/**
								 * Constructs a new instance of the com.google.android.exoplayer2.ext.media2.SessionCallbackBuilder$SkipCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onSkipBackward(mediaSession0: androidx.media2.session.MediaSession, controllerInfo1: androidx.media2.session.MediaSession.ControllerInfo): number;
									onSkipForward(mediaSession0: androidx.media2.session.MediaSession, controllerInfo1: androidx.media2.session.MediaSession.ControllerInfo): number;
								});
								public constructor();
								public onSkipForward(mediaSession0: androidx.media2.session.MediaSession, controllerInfo1: androidx.media2.session.MediaSession.ControllerInfo): number;
								public onSkipBackward(mediaSession0: androidx.media2.session.MediaSession, controllerInfo1: androidx.media2.session.MediaSession.ControllerInfo): number;
							}
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
					export module media2 {
						export class SessionPlayerConnector extends androidx.media2.common.SessionPlayer {
							public static class: java.lang.Class<com.google.android.exoplayer2.ext.media2.SessionPlayerConnector>;
							public setMediaItem(mediaItem0: androidx.media2.common.MediaItem): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
							public skipToNextPlaylistItem(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
							public close(): void;
							public setControlDispatcher(controlDispatcher: com.google.android.exoplayer2.ControlDispatcher): void;
							public setAudioAttributes(audioAttributesCompat0: androidx.media.AudioAttributesCompat): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
							public updatePlaylistMetadata(mediaMetadata0: androidx.media2.common.MediaMetadata): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
							public constructor(player: com.google.android.exoplayer2.Player, mediaItemConverter: com.google.android.exoplayer2.ext.media2.MediaItemConverter);
							public skipToPreviousPlaylistItem(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
							public seekTo(position: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
							public seekTo(long0: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
							public addPlaylistItem(index: number, item: androidx.media2.common.MediaItem): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
							public getDuration(): number;
							public pause(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
							public setPlaylist(list0: java.util.List<androidx.media2.common.MediaItem>, mediaMetadata1: androidx.media2.common.MediaMetadata): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
							public setPlaylist(playlist: java.util.List<androidx.media2.common.MediaItem>, metadata: androidx.media2.common.MediaMetadata): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
							public setRepeatMode(int0: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
							public skipToPlaylistItem(index: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
							public getPreviousMediaItemIndex(): number;
							public setPlaybackSpeed(float0: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
							public replacePlaylistItem(int0: number, mediaItem1: androidx.media2.common.MediaItem): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
							public getPlaybackSpeed(): number;
							public getPlayerState(): number;
							public getBufferedPosition(): number;
							public replacePlaylistItem(index: number, item: androidx.media2.common.MediaItem): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
							public getNextMediaItemIndex(): number;
							public getPlaylistMetadata(): androidx.media2.common.MediaMetadata;
							public getBufferingState(): number;
							public removePlaylistItem(index: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
							public removePlaylistItem(int0: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
							public getPlaylist(): java.util.List<androidx.media2.common.MediaItem>;
							public constructor(player: com.google.android.exoplayer2.Player);
							public getShuffleMode(): number;
							public prepare(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
							public updatePlaylistMetadata(metadata: androidx.media2.common.MediaMetadata): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
							public setPlaybackSpeed(playbackSpeed: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
							public getCurrentPosition(): number;
							public getCurrentMediaItem(): androidx.media2.common.MediaItem;
							public setAudioAttributes(attr: androidx.media.AudioAttributesCompat): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
							public play(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
							public setShuffleMode(shuffleMode: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
							public constructor();
							public getAudioAttributes(): androidx.media.AudioAttributesCompat;
							public getCurrentMediaItemIndex(): number;
							public setRepeatMode(repeatMode: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
							public skipToPlaylistItem(int0: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
							public getRepeatMode(): number;
							public addPlaylistItem(int0: number, mediaItem1: androidx.media2.common.MediaItem): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
							public setShuffleMode(int0: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
							public setMediaItem(item: androidx.media2.common.MediaItem): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
						}
						export module SessionPlayerConnector {
							export class ExoPlayerWrapperListener extends java.lang.Object implements com.google.android.exoplayer2.ext.media2.PlayerWrapper.Listener {
								public static class: java.lang.Class<com.google.android.exoplayer2.ext.media2.SessionPlayerConnector.ExoPlayerWrapperListener>;
								public onRepeatModeChanged(repeatMode: number): void;
								public onSeekCompleted(): void;
								public onBufferingUpdate(mediaItem: androidx.media2.common.MediaItem, bufferingPercentage: number): void;
								public onCurrentMediaItemChanged(mediaItem: androidx.media2.common.MediaItem): void;
								public onPlaylistChanged(): void;
								public onPlayerStateChanged(playerState: number): void;
								public onBufferingEnded(mediaItem: androidx.media2.common.MediaItem, bufferingPercentage: number): void;
								public onShuffleModeChanged(shuffleMode: number): void;
								public onError(mediaItem: androidx.media2.common.MediaItem): void;
								public onPlaybackSpeedChanged(playbackSpeed: number): void;
								public onPrepared(mediaItem: androidx.media2.common.MediaItem, bufferingPercentage: number): void;
								public onAudioAttributesChanged(audioAttributes: androidx.media.AudioAttributesCompat): void;
								public onBufferingStarted(mediaItem: androidx.media2.common.MediaItem): void;
								public onPlaybackEnded(): void;
							}
							export class SessionPlayerCallbackNotifier extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.ext.media2.SessionPlayerConnector.SessionPlayerCallbackNotifier>;
								/**
								 * Constructs a new instance of the com.google.android.exoplayer2.ext.media2.SessionPlayerConnector$SessionPlayerCallbackNotifier interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									callCallback(playerCallback0: androidx.media2.common.SessionPlayer.PlayerCallback): void;
								});
								public constructor();
								public callCallback(playerCallback0: androidx.media2.common.SessionPlayer.PlayerCallback): void;
							}
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
					export module media2 {
						export class Utils extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.ext.media2.Utils>;
							public static getExoPlayerShuffleMode(shuffleMode: number): boolean;
							public static getExoPlayerRepeatMode(repeatMode: number): number;
							public static getRepeatMode(exoPlayerRepeatMode: number): number;
							public static getAudioAttributesCompat(audioAttributes: com.google.android.exoplayer2.audio.AudioAttributes): androidx.media.AudioAttributesCompat;
							public static getAudioAttributes(audioAttributesCompat: androidx.media.AudioAttributesCompat): com.google.android.exoplayer2.audio.AudioAttributes;
							public static getShuffleMode(exoPlayerShuffleMode: boolean): number;
						}
					}
				}
			}
		}
	}
}


//Generics information:

