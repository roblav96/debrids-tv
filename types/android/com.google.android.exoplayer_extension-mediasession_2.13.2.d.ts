declare module com {
	export module google {
		export module android {
			export module exoplayer2 {
				export module ext {
					export module mediasession {
						export class BuildConfig extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.ext.mediasession.BuildConfig>;
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
					export module mediasession {
						export class MediaSessionConnector extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector>;
							public static ACTION_SET_PLAYBACK_SPEED: number;
							public static ALL_PLAYBACK_ACTIONS: number;
							public static DEFAULT_PLAYBACK_ACTIONS: number;
							public static EXTRAS_SPEED: string;
							public mediaSession: globalAndroid.support.v4.media.session.MediaSessionCompat;
							public setControlDispatcher(controlDispatcher: com.google.android.exoplayer2.ControlDispatcher): void;
							public unregisterCustomCommandReceiver(commandReceiver: com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector.CommandReceiver): void;
							/** @deprecated */
							public setFastForwardIncrementMs(fastForwardMs: number): void;
							public setCaptionCallback(captionCallback: com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector.CaptionCallback): void;
							public invalidateMediaSessionMetadata(): void;
							public setCustomErrorMessage(message: string, code: number): void;
							/** @deprecated */
							public setRewindIncrementMs(rewindMs: number): void;
							public setCustomActionProviders(customActionProviders: native.Array<com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector.CustomActionProvider>): void;
							public setMediaButtonEventHandler(mediaButtonEventHandler: com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector.MediaButtonEventHandler): void;
							public setMediaMetadataProvider(mediaMetadataProvider: com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector.MediaMetadataProvider): void;
							public setPlaybackPreparer(playbackPreparer: com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector.PlaybackPreparer): void;
							public setQueueNavigator(queueNavigator: com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector.QueueNavigator): void;
							public setErrorMessageProvider(errorMessageProvider: com.google.android.exoplayer2.util.ErrorMessageProvider<any>): void;
							public setRatingCallback(ratingCallback: com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector.RatingCallback): void;
							public constructor(mediaSession: globalAndroid.support.v4.media.session.MediaSessionCompat);
							public invalidateMediaSessionPlaybackState(): void;
							public invalidateMediaSessionQueue(): void;
							public setEnabledPlaybackActions(enabledPlaybackActions: number): void;
							public setCustomErrorMessage(message: string): void;
							public setCustomErrorMessage(message: string, code: number, extras: globalAndroid.os.Bundle): void;
							public setPlayer(player: com.google.android.exoplayer2.Player): void;
							public setQueueEditor(queueEditor: com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector.QueueEditor): void;
							public registerCustomCommandReceiver(commandReceiver: com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector.CommandReceiver): void;
						}
						export module MediaSessionConnector {
							export class CaptionCallback extends java.lang.Object implements com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector.CommandReceiver {
								public static class: java.lang.Class<com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector.CaptionCallback>;
								/**
								 * Constructs a new instance of the com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector() when extending the interface class.
								 */
								public constructor(implementation: {
									onSetCaptioningEnabled(player0: com.google.android.exoplayer2.Player, boolean1: boolean): void;
									hasCaptions(player0: com.google.android.exoplayer2.Player): boolean;
									onCommand(player0: com.google.android.exoplayer2.Player, controlDispatcher1: com.google.android.exoplayer2.ControlDispatcher, string2: string, bundle3: globalAndroid.os.Bundle, resultReceiver4: globalAndroid.os.ResultReceiver): boolean;
								});
								public constructor();
								public onCommand(player0: com.google.android.exoplayer2.Player, controlDispatcher1: com.google.android.exoplayer2.ControlDispatcher, string2: string, bundle3: globalAndroid.os.Bundle, resultReceiver4: globalAndroid.os.ResultReceiver): boolean;
								public onSetCaptioningEnabled(player0: com.google.android.exoplayer2.Player, boolean1: boolean): void;
								public hasCaptions(player0: com.google.android.exoplayer2.Player): boolean;
							}
							export class CommandReceiver extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector.CommandReceiver>;
								/**
								 * Constructs a new instance of the com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector() when extending the interface class.
								 */
								public constructor(implementation: {
									onCommand(player0: com.google.android.exoplayer2.Player, controlDispatcher1: com.google.android.exoplayer2.ControlDispatcher, string2: string, bundle3: globalAndroid.os.Bundle, resultReceiver4: globalAndroid.os.ResultReceiver): boolean;
								});
								public constructor();
								public onCommand(player0: com.google.android.exoplayer2.Player, controlDispatcher1: com.google.android.exoplayer2.ControlDispatcher, string2: string, bundle3: globalAndroid.os.Bundle, resultReceiver4: globalAndroid.os.ResultReceiver): boolean;
							}
							export class ComponentListener extends globalAndroid.support.v4.media.session.MediaSessionCompat.Callback implements com.google.android.exoplayer2.Player.EventListener {
								public static class: java.lang.Class<com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector.ComponentListener>;
								public onRewind(): void;
								public onSetRating(rating: globalAndroid.support.v4.media.RatingCompat): void;
								public onAddQueueItem(description: globalAndroid.support.v4.media.MediaDescriptionCompat): void;
								public onRemoveQueueItem(description: globalAndroid.support.v4.media.MediaDescriptionCompat): void;
								public onPlaybackStateChanged(state: number): void;
								public onPrepareFromSearch(query: string, extras: globalAndroid.os.Bundle): void;
								public onPlayFromUri(uri: globalAndroid.net.Uri, extras: globalAndroid.os.Bundle): void;
								public onExperimentalSleepingForOffloadChanged(sleepingForOffload: boolean): void;
								public onSetRepeatMode(repeatMode: number): void;
								public onAddQueueItem(description: globalAndroid.support.v4.media.MediaDescriptionCompat, index: number): void;
								public onPlayFromMediaId(mediaId: string, extras: globalAndroid.os.Bundle): void;
								public onIsLoadingChanged(isLoading: boolean): void;
								public onPlayerError(error: com.google.android.exoplayer2.ExoPlaybackException): void;
								public onSetShuffleMode(shuffleMode: number): void;
								public onEvents(player: com.google.android.exoplayer2.Player, events: com.google.android.exoplayer2.Player.Events): void;
								public onSkipToNext(): void;
								public onTracksChanged(trackGroups: com.google.android.exoplayer2.source.TrackGroupArray, trackSelections: com.google.android.exoplayer2.trackselection.TrackSelectionArray): void;
								public onPositionDiscontinuity(reason: number): void;
								public onSetCaptioningEnabled(enabled: boolean): void;
								public onStop(): void;
								/** @deprecated */
								public onSeekProcessed(): void;
								public onPlay(): void;
								public onPlayWhenReadyChanged(playWhenReady: boolean, reason: number): void;
								public onCommand(command: string, extras: globalAndroid.os.Bundle, cb: globalAndroid.os.ResultReceiver): void;
								public onPrepare(): void;
								/** @deprecated */
								public onPlayerStateChanged(playWhenReady: boolean, playbackState: number): void;
								public onSetPlaybackSpeed(speed: number): void;
								public onPlaybackParametersChanged(playbackParameters: com.google.android.exoplayer2.PlaybackParameters): void;
								public onSeekTo(positionMs: number): void;
								public onStaticMetadataChanged(metadataList: java.util.List<com.google.android.exoplayer2.metadata.Metadata>): void;
								public onCustomAction(action: string, extras: globalAndroid.os.Bundle): void;
								public onPlaybackSuppressionReasonChanged(playbackSuppressionReason: number): void;
								public onTimelineChanged(timeline: com.google.android.exoplayer2.Timeline, reason: number): void;
								/** @deprecated */
								public onLoadingChanged(isLoading: boolean): void;
								public onShuffleModeEnabledChanged(shuffleModeEnabled: boolean): void;
								public onPrepareFromUri(uri: globalAndroid.net.Uri, extras: globalAndroid.os.Bundle): void;
								public onSetRepeatMode(mediaSessionRepeatMode: number): void;
								public onSeekTo(pos: number): void;
								public onSkipToPrevious(): void;
								public onMediaItemTransition(mediaItem: com.google.android.exoplayer2.MediaItem, reason: number): void;
								public onRepeatModeChanged(repeatMode: number): void;
								public onSkipToQueueItem(id: number): void;
								public onExperimentalOffloadSchedulingEnabledChanged(offloadSchedulingEnabled: boolean): void;
								/** @deprecated */
								public onTimelineChanged(timeline: com.google.android.exoplayer2.Timeline, manifest: any, reason: number): void;
								public onPlayFromSearch(query: string, extras: globalAndroid.os.Bundle): void;
								public onPause(): void;
								public onFastForward(): void;
								public onPrepareFromMediaId(mediaId: string, extras: globalAndroid.os.Bundle): void;
								public onSetRating(rating: globalAndroid.support.v4.media.RatingCompat, extras: globalAndroid.os.Bundle): void;
								public onMediaButtonEvent(mediaButtonEvent: globalAndroid.content.Intent): boolean;
								public onIsPlayingChanged(isPlaying: boolean): void;
							}
							export class CustomActionProvider extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector.CustomActionProvider>;
								/**
								 * Constructs a new instance of the com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector() when extending the interface class.
								 */
								public constructor(implementation: {
									onCustomAction(player0: com.google.android.exoplayer2.Player, controlDispatcher1: com.google.android.exoplayer2.ControlDispatcher, string2: string, bundle3: globalAndroid.os.Bundle): void;
									getCustomAction(player0: com.google.android.exoplayer2.Player): globalAndroid.support.v4.media.session.PlaybackStateCompat.CustomAction;
								});
								public constructor();
								public getCustomAction(player0: com.google.android.exoplayer2.Player): globalAndroid.support.v4.media.session.PlaybackStateCompat.CustomAction;
								public onCustomAction(player0: com.google.android.exoplayer2.Player, controlDispatcher1: com.google.android.exoplayer2.ControlDispatcher, string2: string, bundle3: globalAndroid.os.Bundle): void;
							}
							export class DefaultMediaMetadataProvider extends java.lang.Object implements com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector.MediaMetadataProvider {
								public static class: java.lang.Class<com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector.DefaultMediaMetadataProvider>;
								public constructor(mediaController: globalAndroid.support.v4.media.session.MediaControllerCompat, metadataExtrasPrefix: string);
								public getMetadata(player: com.google.android.exoplayer2.Player): globalAndroid.support.v4.media.MediaMetadataCompat;
							}
							export class MediaButtonEventHandler extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector.MediaButtonEventHandler>;
								/**
								 * Constructs a new instance of the com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector() when extending the interface class.
								 */
								public constructor(implementation: {
									onMediaButtonEvent(player0: com.google.android.exoplayer2.Player, controlDispatcher1: com.google.android.exoplayer2.ControlDispatcher, intent2: globalAndroid.content.Intent): boolean;
								});
								public constructor();
								public onMediaButtonEvent(player0: com.google.android.exoplayer2.Player, controlDispatcher1: com.google.android.exoplayer2.ControlDispatcher, intent2: globalAndroid.content.Intent): boolean;
							}
							export class MediaMetadataProvider extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector.MediaMetadataProvider>;
								/**
								 * Constructs a new instance of the com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector() when extending the interface class.
								 */
								public constructor(implementation: {
									getMetadata(player0: com.google.android.exoplayer2.Player): globalAndroid.support.v4.media.MediaMetadataCompat;
								});
								public constructor();
								public getMetadata(player0: com.google.android.exoplayer2.Player): globalAndroid.support.v4.media.MediaMetadataCompat;
							}
							export class PlaybackActions extends java.lang.Object implements java.lang.annotation.Annotation {
								public static class: java.lang.Class<com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector.PlaybackActions>;
								/**
								 * Constructs a new instance of the com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector() when extending the interface class.
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
							export class PlaybackPreparer extends java.lang.Object implements com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector.CommandReceiver {
								public static class: java.lang.Class<com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector.PlaybackPreparer>;
								/**
								 * Constructs a new instance of the com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector() when extending the interface class.
								 */
								public constructor(implementation: {
									getSupportedPrepareActions(): number;
									onPrepare(boolean0: boolean): void;
									onPrepareFromMediaId(string0: string, boolean1: boolean, bundle2: globalAndroid.os.Bundle): void;
									onPrepareFromSearch(string0: string, boolean1: boolean, bundle2: globalAndroid.os.Bundle): void;
									onPrepareFromUri(uri0: globalAndroid.net.Uri, boolean1: boolean, bundle2: globalAndroid.os.Bundle): void;
									onCommand(player0: com.google.android.exoplayer2.Player, controlDispatcher1: com.google.android.exoplayer2.ControlDispatcher, string2: string, bundle3: globalAndroid.os.Bundle, resultReceiver4: globalAndroid.os.ResultReceiver): boolean;
								});
								public constructor();
								public static ACTIONS: number;
								public onCommand(player0: com.google.android.exoplayer2.Player, controlDispatcher1: com.google.android.exoplayer2.ControlDispatcher, string2: string, bundle3: globalAndroid.os.Bundle, resultReceiver4: globalAndroid.os.ResultReceiver): boolean;
								public getSupportedPrepareActions(): number;
								public onPrepare(boolean0: boolean): void;
								public onPrepareFromUri(uri0: globalAndroid.net.Uri, boolean1: boolean, bundle2: globalAndroid.os.Bundle): void;
								public onPrepareFromMediaId(string0: string, boolean1: boolean, bundle2: globalAndroid.os.Bundle): void;
								public onPrepareFromSearch(string0: string, boolean1: boolean, bundle2: globalAndroid.os.Bundle): void;
							}
							export class QueueEditor extends java.lang.Object implements com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector.CommandReceiver {
								public static class: java.lang.Class<com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector.QueueEditor>;
								/**
								 * Constructs a new instance of the com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector() when extending the interface class.
								 */
								public constructor(implementation: {
									onAddQueueItem(player0: com.google.android.exoplayer2.Player, mediaDescriptionCompat1: globalAndroid.support.v4.media.MediaDescriptionCompat): void;
									onAddQueueItem(player0: com.google.android.exoplayer2.Player, mediaDescriptionCompat1: globalAndroid.support.v4.media.MediaDescriptionCompat, int2: number): void;
									onRemoveQueueItem(player0: com.google.android.exoplayer2.Player, mediaDescriptionCompat1: globalAndroid.support.v4.media.MediaDescriptionCompat): void;
									onCommand(player0: com.google.android.exoplayer2.Player, controlDispatcher1: com.google.android.exoplayer2.ControlDispatcher, string2: string, bundle3: globalAndroid.os.Bundle, resultReceiver4: globalAndroid.os.ResultReceiver): boolean;
								});
								public constructor();
								public onCommand(player0: com.google.android.exoplayer2.Player, controlDispatcher1: com.google.android.exoplayer2.ControlDispatcher, string2: string, bundle3: globalAndroid.os.Bundle, resultReceiver4: globalAndroid.os.ResultReceiver): boolean;
								public onAddQueueItem(player0: com.google.android.exoplayer2.Player, mediaDescriptionCompat1: globalAndroid.support.v4.media.MediaDescriptionCompat): void;
								public onAddQueueItem(player0: com.google.android.exoplayer2.Player, mediaDescriptionCompat1: globalAndroid.support.v4.media.MediaDescriptionCompat, int2: number): void;
								public onRemoveQueueItem(player0: com.google.android.exoplayer2.Player, mediaDescriptionCompat1: globalAndroid.support.v4.media.MediaDescriptionCompat): void;
							}
							export class QueueNavigator extends java.lang.Object implements com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector.CommandReceiver {
								public static class: java.lang.Class<com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector.QueueNavigator>;
								/**
								 * Constructs a new instance of the com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector() when extending the interface class.
								 */
								public constructor(implementation: {
									getSupportedQueueNavigatorActions(player0: com.google.android.exoplayer2.Player): number;
									onTimelineChanged(player0: com.google.android.exoplayer2.Player): void;
									onCurrentWindowIndexChanged(player0: com.google.android.exoplayer2.Player): void;
									getActiveQueueItemId(player0: com.google.android.exoplayer2.Player): number;
									onSkipToPrevious(player0: com.google.android.exoplayer2.Player, controlDispatcher1: com.google.android.exoplayer2.ControlDispatcher): void;
									onSkipToQueueItem(player0: com.google.android.exoplayer2.Player, controlDispatcher1: com.google.android.exoplayer2.ControlDispatcher, long2: number): void;
									onSkipToNext(player0: com.google.android.exoplayer2.Player, controlDispatcher1: com.google.android.exoplayer2.ControlDispatcher): void;
									onCommand(player0: com.google.android.exoplayer2.Player, controlDispatcher1: com.google.android.exoplayer2.ControlDispatcher, string2: string, bundle3: globalAndroid.os.Bundle, resultReceiver4: globalAndroid.os.ResultReceiver): boolean;
								});
								public constructor();
								public static ACTIONS: number;
								public onCommand(player0: com.google.android.exoplayer2.Player, controlDispatcher1: com.google.android.exoplayer2.ControlDispatcher, string2: string, bundle3: globalAndroid.os.Bundle, resultReceiver4: globalAndroid.os.ResultReceiver): boolean;
								public onCurrentWindowIndexChanged(player0: com.google.android.exoplayer2.Player): void;
								public onSkipToPrevious(player0: com.google.android.exoplayer2.Player, controlDispatcher1: com.google.android.exoplayer2.ControlDispatcher): void;
								public getSupportedQueueNavigatorActions(player0: com.google.android.exoplayer2.Player): number;
								public onSkipToNext(player0: com.google.android.exoplayer2.Player, controlDispatcher1: com.google.android.exoplayer2.ControlDispatcher): void;
								public onSkipToQueueItem(player0: com.google.android.exoplayer2.Player, controlDispatcher1: com.google.android.exoplayer2.ControlDispatcher, long2: number): void;
								public onTimelineChanged(player0: com.google.android.exoplayer2.Player): void;
								public getActiveQueueItemId(player0: com.google.android.exoplayer2.Player): number;
							}
							export class RatingCallback extends java.lang.Object implements com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector.CommandReceiver {
								public static class: java.lang.Class<com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector.RatingCallback>;
								/**
								 * Constructs a new instance of the com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector() when extending the interface class.
								 */
								public constructor(implementation: {
									onSetRating(player0: com.google.android.exoplayer2.Player, ratingCompat1: globalAndroid.support.v4.media.RatingCompat): void;
									onSetRating(player0: com.google.android.exoplayer2.Player, ratingCompat1: globalAndroid.support.v4.media.RatingCompat, bundle2: globalAndroid.os.Bundle): void;
									onCommand(player0: com.google.android.exoplayer2.Player, controlDispatcher1: com.google.android.exoplayer2.ControlDispatcher, string2: string, bundle3: globalAndroid.os.Bundle, resultReceiver4: globalAndroid.os.ResultReceiver): boolean;
								});
								public constructor();
								public onCommand(player0: com.google.android.exoplayer2.Player, controlDispatcher1: com.google.android.exoplayer2.ControlDispatcher, string2: string, bundle3: globalAndroid.os.Bundle, resultReceiver4: globalAndroid.os.ResultReceiver): boolean;
								public onSetRating(player0: com.google.android.exoplayer2.Player, ratingCompat1: globalAndroid.support.v4.media.RatingCompat): void;
								public onSetRating(player0: com.google.android.exoplayer2.Player, ratingCompat1: globalAndroid.support.v4.media.RatingCompat, bundle2: globalAndroid.os.Bundle): void;
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
					export module mediasession {
						export class RepeatModeActionProvider extends java.lang.Object implements com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector.CustomActionProvider {
							public static class: java.lang.Class<com.google.android.exoplayer2.ext.mediasession.RepeatModeActionProvider>;
							public static DEFAULT_REPEAT_TOGGLE_MODES: number;
							public getCustomAction(player: com.google.android.exoplayer2.Player): globalAndroid.support.v4.media.session.PlaybackStateCompat.CustomAction;
							public constructor(context: globalAndroid.content.Context, repeatToggleModes: number);
							public constructor(context: globalAndroid.content.Context);
							public onCustomAction(player: com.google.android.exoplayer2.Player, controlDispatcher: com.google.android.exoplayer2.ControlDispatcher, action: string, extras: globalAndroid.os.Bundle): void;
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
					export module mediasession {
						export class TimelineQueueEditor extends java.lang.Object implements com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector.QueueEditor, com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector.CommandReceiver {
							public static class: java.lang.Class<com.google.android.exoplayer2.ext.mediasession.TimelineQueueEditor>;
							public static COMMAND_MOVE_QUEUE_ITEM: string;
							public static EXTRA_FROM_INDEX: string;
							public static EXTRA_TO_INDEX: string;
							public constructor(mediaController: globalAndroid.support.v4.media.session.MediaControllerCompat, queueMediaSource: com.google.android.exoplayer2.source.ConcatenatingMediaSource, queueDataAdapter: com.google.android.exoplayer2.ext.mediasession.TimelineQueueEditor.QueueDataAdapter, sourceFactory: com.google.android.exoplayer2.ext.mediasession.TimelineQueueEditor.MediaSourceFactory, equalityChecker: com.google.android.exoplayer2.ext.mediasession.TimelineQueueEditor.MediaDescriptionEqualityChecker);
							public onRemoveQueueItem(player: com.google.android.exoplayer2.Player, description: globalAndroid.support.v4.media.MediaDescriptionCompat): void;
							public onAddQueueItem(player: com.google.android.exoplayer2.Player, description: globalAndroid.support.v4.media.MediaDescriptionCompat, index: number): void;
							public constructor(mediaController: globalAndroid.support.v4.media.session.MediaControllerCompat, queueMediaSource: com.google.android.exoplayer2.source.ConcatenatingMediaSource, queueDataAdapter: com.google.android.exoplayer2.ext.mediasession.TimelineQueueEditor.QueueDataAdapter, sourceFactory: com.google.android.exoplayer2.ext.mediasession.TimelineQueueEditor.MediaSourceFactory);
							public onCommand(player: com.google.android.exoplayer2.Player, controlDispatcher: com.google.android.exoplayer2.ControlDispatcher, command: string, extras: globalAndroid.os.Bundle, cb: globalAndroid.os.ResultReceiver): boolean;
							public onAddQueueItem(player: com.google.android.exoplayer2.Player, description: globalAndroid.support.v4.media.MediaDescriptionCompat): void;
						}
						export module TimelineQueueEditor {
							export class MediaDescriptionEqualityChecker extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.ext.mediasession.TimelineQueueEditor.MediaDescriptionEqualityChecker>;
								/**
								 * Constructs a new instance of the com.google.android.exoplayer2.ext.mediasession.TimelineQueueEditor() when extending the interface class.
								 */
								public constructor(implementation: {
									equals(mediaDescriptionCompat0: globalAndroid.support.v4.media.MediaDescriptionCompat, mediaDescriptionCompat1: globalAndroid.support.v4.media.MediaDescriptionCompat): boolean;
								});
								public constructor();
								public equals(mediaDescriptionCompat0: globalAndroid.support.v4.media.MediaDescriptionCompat, mediaDescriptionCompat1: globalAndroid.support.v4.media.MediaDescriptionCompat): boolean;
								public equals(obj: any): boolean;
							}
							export class MediaIdEqualityChecker extends java.lang.Object implements com.google.android.exoplayer2.ext.mediasession.TimelineQueueEditor.MediaDescriptionEqualityChecker {
								public static class: java.lang.Class<com.google.android.exoplayer2.ext.mediasession.TimelineQueueEditor.MediaIdEqualityChecker>;
								public equals(d1: globalAndroid.support.v4.media.MediaDescriptionCompat, d2: globalAndroid.support.v4.media.MediaDescriptionCompat): boolean;
								public equals(obj: any): boolean;
								public constructor();
							}
							export class MediaSourceFactory extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.ext.mediasession.TimelineQueueEditor.MediaSourceFactory>;
								/**
								 * Constructs a new instance of the com.google.android.exoplayer2.ext.mediasession.TimelineQueueEditor() when extending the interface class.
								 */
								public constructor(implementation: {
									createMediaSource(mediaDescriptionCompat0: globalAndroid.support.v4.media.MediaDescriptionCompat): com.google.android.exoplayer2.source.MediaSource;
								});
								public constructor();
								public createMediaSource(mediaDescriptionCompat0: globalAndroid.support.v4.media.MediaDescriptionCompat): com.google.android.exoplayer2.source.MediaSource;
							}
							export class QueueDataAdapter extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.ext.mediasession.TimelineQueueEditor.QueueDataAdapter>;
								/**
								 * Constructs a new instance of the com.google.android.exoplayer2.ext.mediasession.TimelineQueueEditor() when extending the interface class.
								 */
								public constructor(implementation: {
									add(int0: number, mediaDescriptionCompat1: globalAndroid.support.v4.media.MediaDescriptionCompat): void;
									remove(int0: number): void;
									move(int0: number, int1: number): void;
								});
								public constructor();
								public move(int0: number, int1: number): void;
								public add(int0: number, mediaDescriptionCompat1: globalAndroid.support.v4.media.MediaDescriptionCompat): void;
								public remove(int0: number): void;
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
					export module mediasession {
						export abstract class TimelineQueueNavigator extends java.lang.Object implements com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector.QueueNavigator {
							public static class: java.lang.Class<com.google.android.exoplayer2.ext.mediasession.TimelineQueueNavigator>;
							public static DEFAULT_MAX_QUEUE_SIZE: number;
							public onSkipToPrevious(player: com.google.android.exoplayer2.Player, controlDispatcher: com.google.android.exoplayer2.ControlDispatcher): void;
							public onSkipToNext(player: com.google.android.exoplayer2.Player, controlDispatcher: com.google.android.exoplayer2.ControlDispatcher): void;
							public getSupportedQueueNavigatorActions(player: com.google.android.exoplayer2.Player): number;
							public getActiveQueueItemId(player: com.google.android.exoplayer2.Player): number;
							public constructor(mediaSession: globalAndroid.support.v4.media.session.MediaSessionCompat);
							public onCommand(player: com.google.android.exoplayer2.Player, controlDispatcher: com.google.android.exoplayer2.ControlDispatcher, command: string, extras: globalAndroid.os.Bundle, cb: globalAndroid.os.ResultReceiver): boolean;
							public onTimelineChanged(player: com.google.android.exoplayer2.Player): void;
							public onSkipToQueueItem(player: com.google.android.exoplayer2.Player, controlDispatcher: com.google.android.exoplayer2.ControlDispatcher, id: number): void;
							public constructor(mediaSession: globalAndroid.support.v4.media.session.MediaSessionCompat, maxQueueSize: number);
							public getMediaDescription(player0: com.google.android.exoplayer2.Player, int1: number): globalAndroid.support.v4.media.MediaDescriptionCompat;
							public onCurrentWindowIndexChanged(player: com.google.android.exoplayer2.Player): void;
						}
					}
				}
			}
		}
	}
}


//Generics information:

