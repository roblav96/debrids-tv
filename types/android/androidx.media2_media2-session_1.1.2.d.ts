declare module androidx {
	export module media2 {
		export module session {
			export class CommandButtonParcelizer extends java.lang.Object {
				public static class: java.lang.Class<androidx.media2.session.CommandButtonParcelizer>;
				public static write(obj: androidx.media2.session.MediaSession.CommandButton, parcel: androidx.versionedparcelable.VersionedParcel): void;
				public static read(parcel: androidx.versionedparcelable.VersionedParcel): androidx.media2.session.MediaSession.CommandButton;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module session {
			export class ConnectedControllersManager<T>  extends java.lang.Object {
				public static class: java.lang.Class<androidx.media2.session.ConnectedControllersManager<any>>;
				public getSequencedFutureManager(controllerKey: T): androidx.media2.session.SequencedFutureManager;
				public isConnected(controllerInfo: androidx.media2.session.MediaSession.ControllerInfo): boolean;
				public isAllowedCommand(controllerInfo: androidx.media2.session.MediaSession.ControllerInfo, command: androidx.media2.session.SessionCommand): boolean;
				public removeController(controllerKey: T): void;
				public getSequencedFutureManager(controllerInfo: androidx.media2.session.MediaSession.ControllerInfo): androidx.media2.session.SequencedFutureManager;
				public isAllowedCommand(controllerInfo: androidx.media2.session.MediaSession.ControllerInfo, commandCode: number): boolean;
				public removeController(controllerInfo: androidx.media2.session.MediaSession.ControllerInfo): void;
				public addController(controllerKey: T, controllerInfo: androidx.media2.session.MediaSession.ControllerInfo, commands: androidx.media2.session.SessionCommandGroup): void;
				public getController(controllerKey: T): androidx.media2.session.MediaSession.ControllerInfo;
				public updateAllowedCommands(controllerInfo: androidx.media2.session.MediaSession.ControllerInfo, commands: androidx.media2.session.SessionCommandGroup): void;
				public getConnectedControllers(): java.util.List<androidx.media2.session.MediaSession.ControllerInfo>;
			}
			export module ConnectedControllersManager {
				export class ConnectedControllerRecord extends java.lang.Object {
					public static class: java.lang.Class<androidx.media2.session.ConnectedControllersManager.ConnectedControllerRecord>;
					public controllerKey: any;
					public sequencedFutureManager: androidx.media2.session.SequencedFutureManager;
					public allowedCommands: androidx.media2.session.SessionCommandGroup;
				}
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module session {
			export class ConnectionRequest extends java.lang.Object implements androidx.versionedparcelable.VersionedParcelable {
				public static class: java.lang.Class<androidx.media2.session.ConnectionRequest>;
				public getVersion(): number;
				public getConnectionHints(): globalAndroid.os.Bundle;
				public getPackageName(): string;
				public getPid(): number;
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module session {
			export class ConnectionRequestParcelizer extends java.lang.Object {
				public static class: java.lang.Class<androidx.media2.session.ConnectionRequestParcelizer>;
				public static write(obj: androidx.media2.session.ConnectionRequest, parcel: androidx.versionedparcelable.VersionedParcel): void;
				public constructor();
				public static read(parcel: androidx.versionedparcelable.VersionedParcel): androidx.media2.session.ConnectionRequest;
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module session {
			export class ConnectionResult extends androidx.versionedparcelable.CustomVersionedParcelable {
				public static class: java.lang.Class<androidx.media2.session.ConnectionResult>;
				public getPositionEventTimeMs(): number;
				public getPositionMs(): number;
				public getPlayerState(): number;
				public getCurrentMediaItem(): androidx.media2.common.MediaItem;
				public getCurrentMediaItemIndex(): number;
				public getSessionActivity(): globalAndroid.app.PendingIntent;
				public onPostParceling(): void;
				public getPreviousMediaItemIndex(): number;
				public getPlaybackInfo(): androidx.media2.session.MediaController.PlaybackInfo;
				public getAllowedCommands(): androidx.media2.session.SessionCommandGroup;
				public getNextMediaItemIndex(): number;
				public getSessionStub(): androidx.media2.session.IMediaSession;
				public getPlaybackSpeed(): number;
				public getVideoSize(): androidx.media2.common.VideoSize;
				public getRepeatMode(): number;
				public getShuffleMode(): number;
				public onPreParceling(isStream: boolean): void;
				public getSelectedMetadataTrack(): androidx.media2.common.SessionPlayer.TrackInfo;
				public getBufferedPositionMs(): number;
				public getBufferingState(): number;
				public getPlaylistSlice(): androidx.media2.common.ParcelImplListSlice;
				public getSelectedVideoTrack(): androidx.media2.common.SessionPlayer.TrackInfo;
				public getSelectedAudioTrack(): androidx.media2.common.SessionPlayer.TrackInfo;
				public getVersion(): number;
				public getSelectedSubtitleTrack(): androidx.media2.common.SessionPlayer.TrackInfo;
				public getTokenExtras(): globalAndroid.os.Bundle;
				public getPlaylistMetadata(): androidx.media2.common.MediaMetadata;
				public getTracks(): java.util.List<androidx.media2.common.SessionPlayer.TrackInfo>;
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module session {
			export class ConnectionResultParcelizer extends java.lang.Object {
				public static class: java.lang.Class<androidx.media2.session.ConnectionResultParcelizer>;
				public static write(obj: androidx.media2.session.ConnectionResult, parcel: androidx.versionedparcelable.VersionedParcel): void;
				public static read(parcel: androidx.versionedparcelable.VersionedParcel): androidx.media2.session.ConnectionResult;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module session {
			export class HeartRating extends java.lang.Object implements androidx.media2.common.Rating {
				public static class: java.lang.Class<androidx.media2.session.HeartRating>;
				public hasHeart(): boolean;
				public constructor(hasHeart: boolean);
				public equals(obj: any): boolean;
				public hashCode(): number;
				public isRated(): boolean;
				public toString(): string;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module session {
			export class HeartRatingParcelizer extends java.lang.Object {
				public static class: java.lang.Class<androidx.media2.session.HeartRatingParcelizer>;
				public static write(obj: androidx.media2.session.HeartRating, parcel: androidx.versionedparcelable.VersionedParcel): void;
				public static read(parcel: androidx.versionedparcelable.VersionedParcel): androidx.media2.session.HeartRating;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module session {
			export class IMediaController extends java.lang.Object implements globalAndroid.os.IInterface {
				public static class: java.lang.Class<androidx.media2.session.IMediaController>;
				/**
				 * Constructs a new instance of the androidx.media2.session.IMediaController interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onCurrentMediaItemChanged(int0: number, parcelImpl1: androidx.versionedparcelable.ParcelImpl, int2: number, int3: number, int4: number): void;
					onPlayerStateChanged(int0: number, long1: number, long2: number, int3: number): void;
					onPlaybackSpeedChanged(int0: number, long1: number, long2: number, float3: number): void;
					onBufferingStateChanged(int0: number, parcelImpl1: androidx.versionedparcelable.ParcelImpl, int2: number, long3: number, long4: number, long5: number): void;
					onPlaylistChanged(int0: number, parcelImplListSlice1: androidx.media2.common.ParcelImplListSlice, parcelImpl2: androidx.versionedparcelable.ParcelImpl, int3: number, int4: number, int5: number): void;
					onPlaylistMetadataChanged(int0: number, parcelImpl1: androidx.versionedparcelable.ParcelImpl): void;
					onPlaybackInfoChanged(int0: number, parcelImpl1: androidx.versionedparcelable.ParcelImpl): void;
					onRepeatModeChanged(int0: number, int1: number, int2: number, int3: number, int4: number): void;
					onShuffleModeChanged(int0: number, int1: number, int2: number, int3: number, int4: number): void;
					onPlaybackCompleted(int0: number): void;
					onSeekCompleted(int0: number, long1: number, long2: number, long3: number): void;
					onVideoSizeChanged(int0: number, parcelImpl1: androidx.versionedparcelable.ParcelImpl, parcelImpl2: androidx.versionedparcelable.ParcelImpl): void;
					onSubtitleData(int0: number, parcelImpl1: androidx.versionedparcelable.ParcelImpl, parcelImpl2: androidx.versionedparcelable.ParcelImpl, parcelImpl3: androidx.versionedparcelable.ParcelImpl): void;
					onConnected(int0: number, parcelImpl1: androidx.versionedparcelable.ParcelImpl): void;
					onDisconnected(int0: number): void;
					onSetCustomLayout(int0: number, list1: java.util.List<androidx.versionedparcelable.ParcelImpl>): void;
					onAllowedCommandsChanged(int0: number, parcelImpl1: androidx.versionedparcelable.ParcelImpl): void;
					onCustomCommand(int0: number, parcelImpl1: androidx.versionedparcelable.ParcelImpl, bundle2: globalAndroid.os.Bundle): void;
					onSessionResult(int0: number, parcelImpl1: androidx.versionedparcelable.ParcelImpl): void;
					onLibraryResult(int0: number, parcelImpl1: androidx.versionedparcelable.ParcelImpl): void;
					onTrackInfoChanged(int0: number, list1: java.util.List<androidx.versionedparcelable.ParcelImpl>, parcelImpl2: androidx.versionedparcelable.ParcelImpl, parcelImpl3: androidx.versionedparcelable.ParcelImpl, parcelImpl4: androidx.versionedparcelable.ParcelImpl, parcelImpl5: androidx.versionedparcelable.ParcelImpl): void;
					onTrackSelected(int0: number, parcelImpl1: androidx.versionedparcelable.ParcelImpl): void;
					onTrackDeselected(int0: number, parcelImpl1: androidx.versionedparcelable.ParcelImpl): void;
					onChildrenChanged(int0: number, string1: string, int2: number, parcelImpl3: androidx.versionedparcelable.ParcelImpl): void;
					onSearchResultChanged(int0: number, string1: string, int2: number, parcelImpl3: androidx.versionedparcelable.ParcelImpl): void;
					asBinder(): globalAndroid.os.IBinder;
				});
				public constructor();
				public onCurrentMediaItemChanged(int0: number, parcelImpl1: androidx.versionedparcelable.ParcelImpl, int2: number, int3: number, int4: number): void;
				public onAllowedCommandsChanged(int0: number, parcelImpl1: androidx.versionedparcelable.ParcelImpl): void;
				public onSubtitleData(int0: number, parcelImpl1: androidx.versionedparcelable.ParcelImpl, parcelImpl2: androidx.versionedparcelable.ParcelImpl, parcelImpl3: androidx.versionedparcelable.ParcelImpl): void;
				public onSearchResultChanged(int0: number, string1: string, int2: number, parcelImpl3: androidx.versionedparcelable.ParcelImpl): void;
				public asBinder(): globalAndroid.os.IBinder;
				public onSeekCompleted(int0: number, long1: number, long2: number, long3: number): void;
				public onCustomCommand(int0: number, parcelImpl1: androidx.versionedparcelable.ParcelImpl, bundle2: globalAndroid.os.Bundle): void;
				public onPlaybackCompleted(int0: number): void;
				public onTrackSelected(int0: number, parcelImpl1: androidx.versionedparcelable.ParcelImpl): void;
				public onPlaybackSpeedChanged(int0: number, long1: number, long2: number, float3: number): void;
				public onTrackDeselected(int0: number, parcelImpl1: androidx.versionedparcelable.ParcelImpl): void;
				public onPlaylistMetadataChanged(int0: number, parcelImpl1: androidx.versionedparcelable.ParcelImpl): void;
				public onShuffleModeChanged(int0: number, int1: number, int2: number, int3: number, int4: number): void;
				public onTrackInfoChanged(int0: number, list1: java.util.List<androidx.versionedparcelable.ParcelImpl>, parcelImpl2: androidx.versionedparcelable.ParcelImpl, parcelImpl3: androidx.versionedparcelable.ParcelImpl, parcelImpl4: androidx.versionedparcelable.ParcelImpl, parcelImpl5: androidx.versionedparcelable.ParcelImpl): void;
				public onSetCustomLayout(int0: number, list1: java.util.List<androidx.versionedparcelable.ParcelImpl>): void;
				public onPlaybackInfoChanged(int0: number, parcelImpl1: androidx.versionedparcelable.ParcelImpl): void;
				public onLibraryResult(int0: number, parcelImpl1: androidx.versionedparcelable.ParcelImpl): void;
				public onDisconnected(int0: number): void;
				public onBufferingStateChanged(int0: number, parcelImpl1: androidx.versionedparcelable.ParcelImpl, int2: number, long3: number, long4: number, long5: number): void;
				public onPlayerStateChanged(int0: number, long1: number, long2: number, int3: number): void;
				public onRepeatModeChanged(int0: number, int1: number, int2: number, int3: number, int4: number): void;
				public onVideoSizeChanged(int0: number, parcelImpl1: androidx.versionedparcelable.ParcelImpl, parcelImpl2: androidx.versionedparcelable.ParcelImpl): void;
				public onPlaylistChanged(int0: number, parcelImplListSlice1: androidx.media2.common.ParcelImplListSlice, parcelImpl2: androidx.versionedparcelable.ParcelImpl, int3: number, int4: number, int5: number): void;
				public onSessionResult(int0: number, parcelImpl1: androidx.versionedparcelable.ParcelImpl): void;
				public onConnected(int0: number, parcelImpl1: androidx.versionedparcelable.ParcelImpl): void;
				public onChildrenChanged(int0: number, string1: string, int2: number, parcelImpl3: androidx.versionedparcelable.ParcelImpl): void;
			}
			export module IMediaController {
				export class Default extends java.lang.Object implements androidx.media2.session.IMediaController {
					public static class: java.lang.Class<androidx.media2.session.IMediaController.Default>;
					public onTrackSelected(seq: number, trackInfo: androidx.versionedparcelable.ParcelImpl): void;
					public onChildrenChanged(seq: number, parentId: string, itemCount: number, libraryParams: androidx.versionedparcelable.ParcelImpl): void;
					public onBufferingStateChanged(seq: number, item: androidx.versionedparcelable.ParcelImpl, state: number, bufferedPositionMs: number, eventTimeMs: number, positionMs: number): void;
					public onDisconnected(seq: number): void;
					public onVideoSizeChanged(seq: number, item: androidx.versionedparcelable.ParcelImpl, videoSize: androidx.versionedparcelable.ParcelImpl): void;
					public onShuffleModeChanged(seq: number, shuffleMode: number, currentIdx: number, previousIdx: number, nextIdx: number): void;
					public constructor();
					public onRepeatModeChanged(seq: number, repeatMode: number, currentIdx: number, previousIdx: number, nextIdx: number): void;
					public onPlaybackInfoChanged(seq: number, playbackInfo: androidx.versionedparcelable.ParcelImpl): void;
					public onSeekCompleted(seq: number, eventTimeMs: number, positionMs: number, seekPositionMs: number): void;
					public onAllowedCommandsChanged(seq: number, commandGroup: androidx.versionedparcelable.ParcelImpl): void;
					public onSetCustomLayout(seq: number, commandButtonlist: java.util.List<androidx.versionedparcelable.ParcelImpl>): void;
					public onLibraryResult(seq: number, libraryResult: androidx.versionedparcelable.ParcelImpl): void;
					public onConnected(seq: number, connectionResult: androidx.versionedparcelable.ParcelImpl): void;
					public onSessionResult(seq: number, sessionResult: androidx.versionedparcelable.ParcelImpl): void;
					public asBinder(): globalAndroid.os.IBinder;
					public onPlaylistChanged(seq: number, listSlice: androidx.media2.common.ParcelImplListSlice, metadata: androidx.versionedparcelable.ParcelImpl, currentIdx: number, previousIdx: number, nextIdx: number): void;
					public onPlaybackSpeedChanged(seq: number, eventTimeMs: number, positionMs: number, speed: number): void;
					public onCurrentMediaItemChanged(seq: number, item: androidx.versionedparcelable.ParcelImpl, currentIdx: number, previousIdx: number, nextIdx: number): void;
					public onPlayerStateChanged(seq: number, eventTimeMs: number, positionMs: number, state: number): void;
					public onCustomCommand(seq: number, command: androidx.versionedparcelable.ParcelImpl, bundle2: globalAndroid.os.Bundle): void;
					public onPlaybackCompleted(seq: number): void;
					public onSearchResultChanged(seq: number, query: string, itemCount: number, libraryParams: androidx.versionedparcelable.ParcelImpl): void;
					public onPlaylistMetadataChanged(seq: number, metadata: androidx.versionedparcelable.ParcelImpl): void;
					public onTrackInfoChanged(seq: number, trackInfos: java.util.List<androidx.versionedparcelable.ParcelImpl>, selectedVideoTrack: androidx.versionedparcelable.ParcelImpl, selectedAudioTrack: androidx.versionedparcelable.ParcelImpl, selectedSubtitleTrack: androidx.versionedparcelable.ParcelImpl, selectedMetadataTrack: androidx.versionedparcelable.ParcelImpl): void;
					public onSubtitleData(seq: number, item: androidx.versionedparcelable.ParcelImpl, track: androidx.versionedparcelable.ParcelImpl, data: androidx.versionedparcelable.ParcelImpl): void;
					public onTrackDeselected(seq: number, trackInfo: androidx.versionedparcelable.ParcelImpl): void;
				}
				export abstract class Stub extends globalAndroid.os.Binder implements androidx.media2.session.IMediaController {
					public static class: java.lang.Class<androidx.media2.session.IMediaController.Stub>;
					public onSessionResult(int0: number, parcelImpl1: androidx.versionedparcelable.ParcelImpl): void;
					public onShuffleModeChanged(int0: number, int1: number, int2: number, int3: number, int4: number): void;
					public isBinderAlive(): boolean;
					public onSubtitleData(int0: number, parcelImpl1: androidx.versionedparcelable.ParcelImpl, parcelImpl2: androidx.versionedparcelable.ParcelImpl, parcelImpl3: androidx.versionedparcelable.ParcelImpl): void;
					public transact(code: number, data: globalAndroid.os.Parcel, reply: globalAndroid.os.Parcel, flags: number): boolean;
					public static asInterface(obj: globalAndroid.os.IBinder): androidx.media2.session.IMediaController;
					public onTransact(code: number, data: globalAndroid.os.Parcel, reply: globalAndroid.os.Parcel, flags: number): boolean;
					public onPlaybackCompleted(int0: number): void;
					public onCustomCommand(int0: number, parcelImpl1: androidx.versionedparcelable.ParcelImpl, bundle2: globalAndroid.os.Bundle): void;
					public static setDefaultImpl(impl: androidx.media2.session.IMediaController): boolean;
					public onPlaylistChanged(int0: number, parcelImplListSlice1: androidx.media2.common.ParcelImplListSlice, parcelImpl2: androidx.versionedparcelable.ParcelImpl, int3: number, int4: number, int5: number): void;
					public onBufferingStateChanged(int0: number, parcelImpl1: androidx.versionedparcelable.ParcelImpl, int2: number, long3: number, long4: number, long5: number): void;
					public onDisconnected(int0: number): void;
					public unlinkToDeath(recipient: globalAndroid.os.IBinder.DeathRecipient, flags: number): boolean;
					public onPlaylistMetadataChanged(int0: number, parcelImpl1: androidx.versionedparcelable.ParcelImpl): void;
					public constructor();
					public getInterfaceDescriptor(): string;
					public static getDefaultImpl(): androidx.media2.session.IMediaController;
					public onSetCustomLayout(int0: number, list1: java.util.List<androidx.versionedparcelable.ParcelImpl>): void;
					public pingBinder(): boolean;
					public onTrackDeselected(int0: number, parcelImpl1: androidx.versionedparcelable.ParcelImpl): void;
					public onRepeatModeChanged(int0: number, int1: number, int2: number, int3: number, int4: number): void;
					public dump(fd: java.io.FileDescriptor, fout: java.io.PrintWriter, strings2: native.Array<string>): void;
					public linkToDeath(recipient: globalAndroid.os.IBinder.DeathRecipient, flags: number): void;
					public onLibraryResult(int0: number, parcelImpl1: androidx.versionedparcelable.ParcelImpl): void;
					public onAllowedCommandsChanged(int0: number, parcelImpl1: androidx.versionedparcelable.ParcelImpl): void;
					public constructor(descriptor: string);
					public onSearchResultChanged(int0: number, string1: string, int2: number, parcelImpl3: androidx.versionedparcelable.ParcelImpl): void;
					public asBinder(): globalAndroid.os.IBinder;
					public onPlaybackSpeedChanged(int0: number, long1: number, long2: number, float3: number): void;
					public queryLocalInterface(descriptor: string): globalAndroid.os.IInterface;
					public dump(fd: java.io.FileDescriptor, strings1: native.Array<string>): void;
					public onPlaybackInfoChanged(int0: number, parcelImpl1: androidx.versionedparcelable.ParcelImpl): void;
					public onTrackInfoChanged(int0: number, list1: java.util.List<androidx.versionedparcelable.ParcelImpl>, parcelImpl2: androidx.versionedparcelable.ParcelImpl, parcelImpl3: androidx.versionedparcelable.ParcelImpl, parcelImpl4: androidx.versionedparcelable.ParcelImpl, parcelImpl5: androidx.versionedparcelable.ParcelImpl): void;
					public onTrackSelected(int0: number, parcelImpl1: androidx.versionedparcelable.ParcelImpl): void;
					public onCurrentMediaItemChanged(int0: number, parcelImpl1: androidx.versionedparcelable.ParcelImpl, int2: number, int3: number, int4: number): void;
					public onSeekCompleted(int0: number, long1: number, long2: number, long3: number): void;
					public onVideoSizeChanged(int0: number, parcelImpl1: androidx.versionedparcelable.ParcelImpl, parcelImpl2: androidx.versionedparcelable.ParcelImpl): void;
					public dumpAsync(fd: java.io.FileDescriptor, strings1: native.Array<string>): void;
					public onConnected(int0: number, parcelImpl1: androidx.versionedparcelable.ParcelImpl): void;
					public onChildrenChanged(int0: number, string1: string, int2: number, parcelImpl3: androidx.versionedparcelable.ParcelImpl): void;
					public onPlayerStateChanged(int0: number, long1: number, long2: number, int3: number): void;
				}
				export module Stub {
					export class Proxy extends java.lang.Object implements androidx.media2.session.IMediaController {
						public static class: java.lang.Class<androidx.media2.session.IMediaController.Stub.Proxy>;
						public static sDefaultImpl: androidx.media2.session.IMediaController;
						public onVideoSizeChanged(seq: number, item: androidx.versionedparcelable.ParcelImpl, videoSize: androidx.versionedparcelable.ParcelImpl): void;
						public onSeekCompleted(seq: number, eventTimeMs: number, positionMs: number, seekPositionMs: number): void;
						public onPlaybackCompleted(seq: number): void;
						public onSetCustomLayout(seq: number, commandButtonlist: java.util.List<androidx.versionedparcelable.ParcelImpl>): void;
						public onConnected(seq: number, connectionResult: androidx.versionedparcelable.ParcelImpl): void;
						public getInterfaceDescriptor(): string;
						public onLibraryResult(seq: number, libraryResult: androidx.versionedparcelable.ParcelImpl): void;
						public onSessionResult(seq: number, sessionResult: androidx.versionedparcelable.ParcelImpl): void;
						public onTrackDeselected(seq: number, trackInfo: androidx.versionedparcelable.ParcelImpl): void;
						public onDisconnected(seq: number): void;
						public asBinder(): globalAndroid.os.IBinder;
						public onTrackSelected(seq: number, trackInfo: androidx.versionedparcelable.ParcelImpl): void;
						public onPlaylistChanged(seq: number, listSlice: androidx.media2.common.ParcelImplListSlice, metadata: androidx.versionedparcelable.ParcelImpl, currentIdx: number, previousIdx: number, nextIdx: number): void;
						public onPlaylistMetadataChanged(seq: number, metadata: androidx.versionedparcelable.ParcelImpl): void;
						public onBufferingStateChanged(seq: number, item: androidx.versionedparcelable.ParcelImpl, state: number, bufferedPositionMs: number, eventTimeMs: number, positionMs: number): void;
						public onPlaybackInfoChanged(seq: number, playbackInfo: androidx.versionedparcelable.ParcelImpl): void;
						public onCurrentMediaItemChanged(seq: number, item: androidx.versionedparcelable.ParcelImpl, currentIdx: number, previousIdx: number, nextIdx: number): void;
						public onSubtitleData(seq: number, item: androidx.versionedparcelable.ParcelImpl, track: androidx.versionedparcelable.ParcelImpl, data: androidx.versionedparcelable.ParcelImpl): void;
						public onSearchResultChanged(seq: number, query: string, itemCount: number, libraryParams: androidx.versionedparcelable.ParcelImpl): void;
						public onPlayerStateChanged(seq: number, eventTimeMs: number, positionMs: number, state: number): void;
						public onAllowedCommandsChanged(seq: number, commandGroup: androidx.versionedparcelable.ParcelImpl): void;
						public onRepeatModeChanged(seq: number, repeatMode: number, currentIdx: number, previousIdx: number, nextIdx: number): void;
						public onShuffleModeChanged(seq: number, shuffleMode: number, currentIdx: number, previousIdx: number, nextIdx: number): void;
						public onCustomCommand(seq: number, command: androidx.versionedparcelable.ParcelImpl, bundle2: globalAndroid.os.Bundle): void;
						public onTrackInfoChanged(seq: number, trackInfos: java.util.List<androidx.versionedparcelable.ParcelImpl>, selectedVideoTrack: androidx.versionedparcelable.ParcelImpl, selectedAudioTrack: androidx.versionedparcelable.ParcelImpl, selectedSubtitleTrack: androidx.versionedparcelable.ParcelImpl, selectedMetadataTrack: androidx.versionedparcelable.ParcelImpl): void;
						public onPlaybackSpeedChanged(seq: number, eventTimeMs: number, positionMs: number, speed: number): void;
						public onChildrenChanged(seq: number, parentId: string, itemCount: number, libraryParams: androidx.versionedparcelable.ParcelImpl): void;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module session {
			export class IMediaSession extends java.lang.Object implements globalAndroid.os.IInterface {
				public static class: java.lang.Class<androidx.media2.session.IMediaSession>;
				/**
				 * Constructs a new instance of the androidx.media2.session.IMediaSession interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					connect(iMediaController0: androidx.media2.session.IMediaController, int1: number, parcelImpl2: androidx.versionedparcelable.ParcelImpl): void;
					release(iMediaController0: androidx.media2.session.IMediaController, int1: number): void;
					setVolumeTo(iMediaController0: androidx.media2.session.IMediaController, int1: number, int2: number, int3: number): void;
					adjustVolume(iMediaController0: androidx.media2.session.IMediaController, int1: number, int2: number, int3: number): void;
					play(iMediaController0: androidx.media2.session.IMediaController, int1: number): void;
					pause(iMediaController0: androidx.media2.session.IMediaController, int1: number): void;
					prepare(iMediaController0: androidx.media2.session.IMediaController, int1: number): void;
					fastForward(iMediaController0: androidx.media2.session.IMediaController, int1: number): void;
					rewind(iMediaController0: androidx.media2.session.IMediaController, int1: number): void;
					skipForward(iMediaController0: androidx.media2.session.IMediaController, int1: number): void;
					skipBackward(iMediaController0: androidx.media2.session.IMediaController, int1: number): void;
					seekTo(iMediaController0: androidx.media2.session.IMediaController, int1: number, long2: number): void;
					onCustomCommand(iMediaController0: androidx.media2.session.IMediaController, int1: number, parcelImpl2: androidx.versionedparcelable.ParcelImpl, bundle3: globalAndroid.os.Bundle): void;
					setRating(iMediaController0: androidx.media2.session.IMediaController, int1: number, string2: string, parcelImpl3: androidx.versionedparcelable.ParcelImpl): void;
					setPlaybackSpeed(iMediaController0: androidx.media2.session.IMediaController, int1: number, float2: number): void;
					setPlaylist(iMediaController0: androidx.media2.session.IMediaController, int1: number, list2: java.util.List<string>, parcelImpl3: androidx.versionedparcelable.ParcelImpl): void;
					setMediaItem(iMediaController0: androidx.media2.session.IMediaController, int1: number, string2: string): void;
					setMediaUri(iMediaController0: androidx.media2.session.IMediaController, int1: number, uri2: globalAndroid.net.Uri, bundle3: globalAndroid.os.Bundle): void;
					updatePlaylistMetadata(iMediaController0: androidx.media2.session.IMediaController, int1: number, parcelImpl2: androidx.versionedparcelable.ParcelImpl): void;
					addPlaylistItem(iMediaController0: androidx.media2.session.IMediaController, int1: number, int2: number, string3: string): void;
					removePlaylistItem(iMediaController0: androidx.media2.session.IMediaController, int1: number, int2: number): void;
					replacePlaylistItem(iMediaController0: androidx.media2.session.IMediaController, int1: number, int2: number, string3: string): void;
					movePlaylistItem(iMediaController0: androidx.media2.session.IMediaController, int1: number, int2: number, int3: number): void;
					skipToPlaylistItem(iMediaController0: androidx.media2.session.IMediaController, int1: number, int2: number): void;
					skipToPreviousItem(iMediaController0: androidx.media2.session.IMediaController, int1: number): void;
					skipToNextItem(iMediaController0: androidx.media2.session.IMediaController, int1: number): void;
					setRepeatMode(iMediaController0: androidx.media2.session.IMediaController, int1: number, int2: number): void;
					setShuffleMode(iMediaController0: androidx.media2.session.IMediaController, int1: number, int2: number): void;
					setSurface(iMediaController0: androidx.media2.session.IMediaController, int1: number, surface2: globalAndroid.view.Surface): void;
					selectTrack(iMediaController0: androidx.media2.session.IMediaController, int1: number, parcelImpl2: androidx.versionedparcelable.ParcelImpl): void;
					deselectTrack(iMediaController0: androidx.media2.session.IMediaController, int1: number, parcelImpl2: androidx.versionedparcelable.ParcelImpl): void;
					onControllerResult(iMediaController0: androidx.media2.session.IMediaController, int1: number, parcelImpl2: androidx.versionedparcelable.ParcelImpl): void;
					getLibraryRoot(iMediaController0: androidx.media2.session.IMediaController, int1: number, parcelImpl2: androidx.versionedparcelable.ParcelImpl): void;
					getItem(iMediaController0: androidx.media2.session.IMediaController, int1: number, string2: string): void;
					getChildren(iMediaController0: androidx.media2.session.IMediaController, int1: number, string2: string, int3: number, int4: number, parcelImpl5: androidx.versionedparcelable.ParcelImpl): void;
					search(iMediaController0: androidx.media2.session.IMediaController, int1: number, string2: string, parcelImpl3: androidx.versionedparcelable.ParcelImpl): void;
					getSearchResult(iMediaController0: androidx.media2.session.IMediaController, int1: number, string2: string, int3: number, int4: number, parcelImpl5: androidx.versionedparcelable.ParcelImpl): void;
					subscribe(iMediaController0: androidx.media2.session.IMediaController, int1: number, string2: string, parcelImpl3: androidx.versionedparcelable.ParcelImpl): void;
					unsubscribe(iMediaController0: androidx.media2.session.IMediaController, int1: number, string2: string): void;
					asBinder(): globalAndroid.os.IBinder;
				});
				public constructor();
				public setRating(iMediaController0: androidx.media2.session.IMediaController, int1: number, string2: string, parcelImpl3: androidx.versionedparcelable.ParcelImpl): void;
				public rewind(iMediaController0: androidx.media2.session.IMediaController, int1: number): void;
				public pause(iMediaController0: androidx.media2.session.IMediaController, int1: number): void;
				public replacePlaylistItem(iMediaController0: androidx.media2.session.IMediaController, int1: number, int2: number, string3: string): void;
				public getChildren(iMediaController0: androidx.media2.session.IMediaController, int1: number, string2: string, int3: number, int4: number, parcelImpl5: androidx.versionedparcelable.ParcelImpl): void;
				public setSurface(iMediaController0: androidx.media2.session.IMediaController, int1: number, surface2: globalAndroid.view.Surface): void;
				public asBinder(): globalAndroid.os.IBinder;
				public getLibraryRoot(iMediaController0: androidx.media2.session.IMediaController, int1: number, parcelImpl2: androidx.versionedparcelable.ParcelImpl): void;
				public search(iMediaController0: androidx.media2.session.IMediaController, int1: number, string2: string, parcelImpl3: androidx.versionedparcelable.ParcelImpl): void;
				public removePlaylistItem(iMediaController0: androidx.media2.session.IMediaController, int1: number, int2: number): void;
				public skipToPreviousItem(iMediaController0: androidx.media2.session.IMediaController, int1: number): void;
				public subscribe(iMediaController0: androidx.media2.session.IMediaController, int1: number, string2: string, parcelImpl3: androidx.versionedparcelable.ParcelImpl): void;
				public movePlaylistItem(iMediaController0: androidx.media2.session.IMediaController, int1: number, int2: number, int3: number): void;
				public release(iMediaController0: androidx.media2.session.IMediaController, int1: number): void;
				public setVolumeTo(iMediaController0: androidx.media2.session.IMediaController, int1: number, int2: number, int3: number): void;
				public play(iMediaController0: androidx.media2.session.IMediaController, int1: number): void;
				public getSearchResult(iMediaController0: androidx.media2.session.IMediaController, int1: number, string2: string, int3: number, int4: number, parcelImpl5: androidx.versionedparcelable.ParcelImpl): void;
				public skipToNextItem(iMediaController0: androidx.media2.session.IMediaController, int1: number): void;
				public setPlaylist(iMediaController0: androidx.media2.session.IMediaController, int1: number, list2: java.util.List<string>, parcelImpl3: androidx.versionedparcelable.ParcelImpl): void;
				public unsubscribe(iMediaController0: androidx.media2.session.IMediaController, int1: number, string2: string): void;
				public seekTo(iMediaController0: androidx.media2.session.IMediaController, int1: number, long2: number): void;
				public setShuffleMode(iMediaController0: androidx.media2.session.IMediaController, int1: number, int2: number): void;
				public fastForward(iMediaController0: androidx.media2.session.IMediaController, int1: number): void;
				public setMediaItem(iMediaController0: androidx.media2.session.IMediaController, int1: number, string2: string): void;
				public prepare(iMediaController0: androidx.media2.session.IMediaController, int1: number): void;
				public getItem(iMediaController0: androidx.media2.session.IMediaController, int1: number, string2: string): void;
				public connect(iMediaController0: androidx.media2.session.IMediaController, int1: number, parcelImpl2: androidx.versionedparcelable.ParcelImpl): void;
				public updatePlaylistMetadata(iMediaController0: androidx.media2.session.IMediaController, int1: number, parcelImpl2: androidx.versionedparcelable.ParcelImpl): void;
				public skipForward(iMediaController0: androidx.media2.session.IMediaController, int1: number): void;
				public selectTrack(iMediaController0: androidx.media2.session.IMediaController, int1: number, parcelImpl2: androidx.versionedparcelable.ParcelImpl): void;
				public skipToPlaylistItem(iMediaController0: androidx.media2.session.IMediaController, int1: number, int2: number): void;
				public deselectTrack(iMediaController0: androidx.media2.session.IMediaController, int1: number, parcelImpl2: androidx.versionedparcelable.ParcelImpl): void;
				public adjustVolume(iMediaController0: androidx.media2.session.IMediaController, int1: number, int2: number, int3: number): void;
				public setPlaybackSpeed(iMediaController0: androidx.media2.session.IMediaController, int1: number, float2: number): void;
				public addPlaylistItem(iMediaController0: androidx.media2.session.IMediaController, int1: number, int2: number, string3: string): void;
				public onCustomCommand(iMediaController0: androidx.media2.session.IMediaController, int1: number, parcelImpl2: androidx.versionedparcelable.ParcelImpl, bundle3: globalAndroid.os.Bundle): void;
				public setRepeatMode(iMediaController0: androidx.media2.session.IMediaController, int1: number, int2: number): void;
				public setMediaUri(iMediaController0: androidx.media2.session.IMediaController, int1: number, uri2: globalAndroid.net.Uri, bundle3: globalAndroid.os.Bundle): void;
				public skipBackward(iMediaController0: androidx.media2.session.IMediaController, int1: number): void;
				public onControllerResult(iMediaController0: androidx.media2.session.IMediaController, int1: number, parcelImpl2: androidx.versionedparcelable.ParcelImpl): void;
			}
			export module IMediaSession {
				export class Default extends java.lang.Object implements androidx.media2.session.IMediaSession {
					public static class: java.lang.Class<androidx.media2.session.IMediaSession.Default>;
					public setRepeatMode(caller: androidx.media2.session.IMediaController, seq: number, repeatMode: number): void;
					public addPlaylistItem(caller: androidx.media2.session.IMediaController, seq: number, index: number, mediaId: string): void;
					public seekTo(caller: androidx.media2.session.IMediaController, seq: number, pos: number): void;
					public movePlaylistItem(caller: androidx.media2.session.IMediaController, seq: number, fromIndex: number, toIndex: number): void;
					public setPlaybackSpeed(caller: androidx.media2.session.IMediaController, seq: number, speed: number): void;
					public getLibraryRoot(caller: androidx.media2.session.IMediaController, seq: number, libraryParams: androidx.versionedparcelable.ParcelImpl): void;
					public fastForward(caller: androidx.media2.session.IMediaController, seq: number): void;
					public skipForward(caller: androidx.media2.session.IMediaController, seq: number): void;
					public setMediaUri(caller: androidx.media2.session.IMediaController, seq: number, uri: globalAndroid.net.Uri, extras: globalAndroid.os.Bundle): void;
					public subscribe(caller: androidx.media2.session.IMediaController, seq: number, parentId: string, libraryParams: androidx.versionedparcelable.ParcelImpl): void;
					public replacePlaylistItem(caller: androidx.media2.session.IMediaController, seq: number, index: number, mediaId: string): void;
					public deselectTrack(caller: androidx.media2.session.IMediaController, seq: number, trackInfo: androidx.versionedparcelable.ParcelImpl): void;
					public pause(caller: androidx.media2.session.IMediaController, seq: number): void;
					public constructor();
					public rewind(caller: androidx.media2.session.IMediaController, seq: number): void;
					public connect(caller: androidx.media2.session.IMediaController, seq: number, connectionRequest: androidx.versionedparcelable.ParcelImpl): void;
					public setRating(caller: androidx.media2.session.IMediaController, seq: number, mediaId: string, rating: androidx.versionedparcelable.ParcelImpl): void;
					public prepare(caller: androidx.media2.session.IMediaController, seq: number): void;
					public skipToNextItem(caller: androidx.media2.session.IMediaController, seq: number): void;
					public getItem(caller: androidx.media2.session.IMediaController, seq: number, mediaId: string): void;
					public getSearchResult(caller: androidx.media2.session.IMediaController, seq: number, query: string, page: number, pageSize: number, libraryParams: androidx.versionedparcelable.ParcelImpl): void;
					public skipToPreviousItem(caller: androidx.media2.session.IMediaController, seq: number): void;
					public adjustVolume(caller: androidx.media2.session.IMediaController, seq: number, direction: number, flags: number): void;
					public unsubscribe(caller: androidx.media2.session.IMediaController, seq: number, parentId: string): void;
					public selectTrack(caller: androidx.media2.session.IMediaController, seq: number, trackInfo: androidx.versionedparcelable.ParcelImpl): void;
					public getChildren(caller: androidx.media2.session.IMediaController, seq: number, parentId: string, page: number, pageSize: number, libraryParams: androidx.versionedparcelable.ParcelImpl): void;
					public setSurface(caller: androidx.media2.session.IMediaController, seq: number, surface: globalAndroid.view.Surface): void;
					public play(caller: androidx.media2.session.IMediaController, seq: number): void;
					public setShuffleMode(caller: androidx.media2.session.IMediaController, seq: number, shuffleMode: number): void;
					public search(caller: androidx.media2.session.IMediaController, seq: number, query: string, libraryParams: androidx.versionedparcelable.ParcelImpl): void;
					public skipBackward(caller: androidx.media2.session.IMediaController, seq: number): void;
					public onControllerResult(caller: androidx.media2.session.IMediaController, seq: number, controllerResult: androidx.versionedparcelable.ParcelImpl): void;
					public asBinder(): globalAndroid.os.IBinder;
					public updatePlaylistMetadata(caller: androidx.media2.session.IMediaController, seq: number, metadata: androidx.versionedparcelable.ParcelImpl): void;
					public onCustomCommand(caller: androidx.media2.session.IMediaController, seq: number, sessionCommand: androidx.versionedparcelable.ParcelImpl, bundle3: globalAndroid.os.Bundle): void;
					public setPlaylist(caller: androidx.media2.session.IMediaController, seq: number, list: java.util.List<string>, metadata: androidx.versionedparcelable.ParcelImpl): void;
					public setMediaItem(caller: androidx.media2.session.IMediaController, seq: number, mediaId: string): void;
					public removePlaylistItem(caller: androidx.media2.session.IMediaController, seq: number, index: number): void;
					public setVolumeTo(caller: androidx.media2.session.IMediaController, seq: number, value: number, flags: number): void;
					public release(caller: androidx.media2.session.IMediaController, seq: number): void;
					public skipToPlaylistItem(caller: androidx.media2.session.IMediaController, seq: number, index: number): void;
				}
				export abstract class Stub extends globalAndroid.os.Binder implements androidx.media2.session.IMediaSession {
					public static class: java.lang.Class<androidx.media2.session.IMediaSession.Stub>;
					public addPlaylistItem(iMediaController0: androidx.media2.session.IMediaController, int1: number, int2: number, string3: string): void;
					public isBinderAlive(): boolean;
					public static asInterface(obj: globalAndroid.os.IBinder): androidx.media2.session.IMediaSession;
					public skipToPreviousItem(iMediaController0: androidx.media2.session.IMediaController, int1: number): void;
					public onControllerResult(iMediaController0: androidx.media2.session.IMediaController, int1: number, parcelImpl2: androidx.versionedparcelable.ParcelImpl): void;
					public transact(code: number, data: globalAndroid.os.Parcel, reply: globalAndroid.os.Parcel, flags: number): boolean;
					public removePlaylistItem(iMediaController0: androidx.media2.session.IMediaController, int1: number, int2: number): void;
					public selectTrack(iMediaController0: androidx.media2.session.IMediaController, int1: number, parcelImpl2: androidx.versionedparcelable.ParcelImpl): void;
					public onCustomCommand(iMediaController0: androidx.media2.session.IMediaController, int1: number, parcelImpl2: androidx.versionedparcelable.ParcelImpl, bundle3: globalAndroid.os.Bundle): void;
					public setSurface(iMediaController0: androidx.media2.session.IMediaController, int1: number, surface2: globalAndroid.view.Surface): void;
					public deselectTrack(iMediaController0: androidx.media2.session.IMediaController, int1: number, parcelImpl2: androidx.versionedparcelable.ParcelImpl): void;
					public constructor();
					public release(iMediaController0: androidx.media2.session.IMediaController, int1: number): void;
					public getSearchResult(iMediaController0: androidx.media2.session.IMediaController, int1: number, string2: string, int3: number, int4: number, parcelImpl5: androidx.versionedparcelable.ParcelImpl): void;
					public skipToPlaylistItem(iMediaController0: androidx.media2.session.IMediaController, int1: number, int2: number): void;
					public getChildren(iMediaController0: androidx.media2.session.IMediaController, int1: number, string2: string, int3: number, int4: number, parcelImpl5: androidx.versionedparcelable.ParcelImpl): void;
					public static setDefaultImpl(impl: androidx.media2.session.IMediaSession): boolean;
					public setMediaUri(iMediaController0: androidx.media2.session.IMediaController, int1: number, uri2: globalAndroid.net.Uri, bundle3: globalAndroid.os.Bundle): void;
					public dumpAsync(fd: java.io.FileDescriptor, strings1: native.Array<string>): void;
					public unsubscribe(iMediaController0: androidx.media2.session.IMediaController, int1: number, string2: string): void;
					public pause(iMediaController0: androidx.media2.session.IMediaController, int1: number): void;
					public setMediaItem(iMediaController0: androidx.media2.session.IMediaController, int1: number, string2: string): void;
					public movePlaylistItem(iMediaController0: androidx.media2.session.IMediaController, int1: number, int2: number, int3: number): void;
					public static getDefaultImpl(): androidx.media2.session.IMediaSession;
					public setPlaybackSpeed(iMediaController0: androidx.media2.session.IMediaController, int1: number, float2: number): void;
					public onTransact(code: number, data: globalAndroid.os.Parcel, reply: globalAndroid.os.Parcel, flags: number): boolean;
					public setRepeatMode(iMediaController0: androidx.media2.session.IMediaController, int1: number, int2: number): void;
					public setVolumeTo(iMediaController0: androidx.media2.session.IMediaController, int1: number, int2: number, int3: number): void;
					public setShuffleMode(iMediaController0: androidx.media2.session.IMediaController, int1: number, int2: number): void;
					public unlinkToDeath(recipient: globalAndroid.os.IBinder.DeathRecipient, flags: number): boolean;
					public skipForward(iMediaController0: androidx.media2.session.IMediaController, int1: number): void;
					public skipBackward(iMediaController0: androidx.media2.session.IMediaController, int1: number): void;
					public updatePlaylistMetadata(iMediaController0: androidx.media2.session.IMediaController, int1: number, parcelImpl2: androidx.versionedparcelable.ParcelImpl): void;
					public getInterfaceDescriptor(): string;
					public prepare(iMediaController0: androidx.media2.session.IMediaController, int1: number): void;
					public skipToNextItem(iMediaController0: androidx.media2.session.IMediaController, int1: number): void;
					public play(iMediaController0: androidx.media2.session.IMediaController, int1: number): void;
					public pingBinder(): boolean;
					public getLibraryRoot(iMediaController0: androidx.media2.session.IMediaController, int1: number, parcelImpl2: androidx.versionedparcelable.ParcelImpl): void;
					public getItem(iMediaController0: androidx.media2.session.IMediaController, int1: number, string2: string): void;
					public rewind(iMediaController0: androidx.media2.session.IMediaController, int1: number): void;
					public replacePlaylistItem(iMediaController0: androidx.media2.session.IMediaController, int1: number, int2: number, string3: string): void;
					public setRating(iMediaController0: androidx.media2.session.IMediaController, int1: number, string2: string, parcelImpl3: androidx.versionedparcelable.ParcelImpl): void;
					public fastForward(iMediaController0: androidx.media2.session.IMediaController, int1: number): void;
					public setPlaylist(iMediaController0: androidx.media2.session.IMediaController, int1: number, list2: java.util.List<string>, parcelImpl3: androidx.versionedparcelable.ParcelImpl): void;
					public dump(fd: java.io.FileDescriptor, fout: java.io.PrintWriter, strings2: native.Array<string>): void;
					public linkToDeath(recipient: globalAndroid.os.IBinder.DeathRecipient, flags: number): void;
					public constructor(descriptor: string);
					public subscribe(iMediaController0: androidx.media2.session.IMediaController, int1: number, string2: string, parcelImpl3: androidx.versionedparcelable.ParcelImpl): void;
					public asBinder(): globalAndroid.os.IBinder;
					public queryLocalInterface(descriptor: string): globalAndroid.os.IInterface;
					public search(iMediaController0: androidx.media2.session.IMediaController, int1: number, string2: string, parcelImpl3: androidx.versionedparcelable.ParcelImpl): void;
					public connect(iMediaController0: androidx.media2.session.IMediaController, int1: number, parcelImpl2: androidx.versionedparcelable.ParcelImpl): void;
					public dump(fd: java.io.FileDescriptor, strings1: native.Array<string>): void;
					public seekTo(iMediaController0: androidx.media2.session.IMediaController, int1: number, long2: number): void;
					public adjustVolume(iMediaController0: androidx.media2.session.IMediaController, int1: number, int2: number, int3: number): void;
				}
				export module Stub {
					export class Proxy extends java.lang.Object implements androidx.media2.session.IMediaSession {
						public static class: java.lang.Class<androidx.media2.session.IMediaSession.Stub.Proxy>;
						public static sDefaultImpl: androidx.media2.session.IMediaSession;
						public getItem(caller: androidx.media2.session.IMediaController, seq: number, mediaId: string): void;
						public skipBackward(caller: androidx.media2.session.IMediaController, seq: number): void;
						public addPlaylistItem(caller: androidx.media2.session.IMediaController, seq: number, index: number, mediaId: string): void;
						public removePlaylistItem(caller: androidx.media2.session.IMediaController, seq: number, index: number): void;
						public deselectTrack(caller: androidx.media2.session.IMediaController, seq: number, trackInfo: androidx.versionedparcelable.ParcelImpl): void;
						public search(caller: androidx.media2.session.IMediaController, seq: number, query: string, libraryParams: androidx.versionedparcelable.ParcelImpl): void;
						public skipForward(caller: androidx.media2.session.IMediaController, seq: number): void;
						public getInterfaceDescriptor(): string;
						public setRepeatMode(caller: androidx.media2.session.IMediaController, seq: number, repeatMode: number): void;
						public updatePlaylistMetadata(caller: androidx.media2.session.IMediaController, seq: number, metadata: androidx.versionedparcelable.ParcelImpl): void;
						public skipToNextItem(caller: androidx.media2.session.IMediaController, seq: number): void;
						public unsubscribe(caller: androidx.media2.session.IMediaController, seq: number, parentId: string): void;
						public pause(caller: androidx.media2.session.IMediaController, seq: number): void;
						public prepare(caller: androidx.media2.session.IMediaController, seq: number): void;
						public onCustomCommand(caller: androidx.media2.session.IMediaController, seq: number, sessionCommand: androidx.versionedparcelable.ParcelImpl, bundle3: globalAndroid.os.Bundle): void;
						public setVolumeTo(caller: androidx.media2.session.IMediaController, seq: number, value: number, flags: number): void;
						public asBinder(): globalAndroid.os.IBinder;
						public skipToPlaylistItem(caller: androidx.media2.session.IMediaController, seq: number, index: number): void;
						public subscribe(caller: androidx.media2.session.IMediaController, seq: number, parentId: string, libraryParams: androidx.versionedparcelable.ParcelImpl): void;
						public setPlaybackSpeed(caller: androidx.media2.session.IMediaController, seq: number, speed: number): void;
						public selectTrack(caller: androidx.media2.session.IMediaController, seq: number, trackInfo: androidx.versionedparcelable.ParcelImpl): void;
						public adjustVolume(caller: androidx.media2.session.IMediaController, seq: number, direction: number, flags: number): void;
						public setShuffleMode(caller: androidx.media2.session.IMediaController, seq: number, shuffleMode: number): void;
						public getSearchResult(caller: androidx.media2.session.IMediaController, seq: number, query: string, page: number, pageSize: number, libraryParams: androidx.versionedparcelable.ParcelImpl): void;
						public connect(caller: androidx.media2.session.IMediaController, seq: number, connectionRequest: androidx.versionedparcelable.ParcelImpl): void;
						public setMediaUri(caller: androidx.media2.session.IMediaController, seq: number, uri: globalAndroid.net.Uri, extras: globalAndroid.os.Bundle): void;
						public fastForward(caller: androidx.media2.session.IMediaController, seq: number): void;
						public setSurface(caller: androidx.media2.session.IMediaController, seq: number, surface: globalAndroid.view.Surface): void;
						public setPlaylist(caller: androidx.media2.session.IMediaController, seq: number, list: java.util.List<string>, metadata: androidx.versionedparcelable.ParcelImpl): void;
						public play(caller: androidx.media2.session.IMediaController, seq: number): void;
						public replacePlaylistItem(caller: androidx.media2.session.IMediaController, seq: number, index: number, mediaId: string): void;
						public getLibraryRoot(caller: androidx.media2.session.IMediaController, seq: number, libraryParams: androidx.versionedparcelable.ParcelImpl): void;
						public setRating(caller: androidx.media2.session.IMediaController, seq: number, mediaId: string, rating: androidx.versionedparcelable.ParcelImpl): void;
						public movePlaylistItem(caller: androidx.media2.session.IMediaController, seq: number, fromIndex: number, toIndex: number): void;
						public rewind(caller: androidx.media2.session.IMediaController, seq: number): void;
						public release(caller: androidx.media2.session.IMediaController, seq: number): void;
						public skipToPreviousItem(caller: androidx.media2.session.IMediaController, seq: number): void;
						public onControllerResult(caller: androidx.media2.session.IMediaController, seq: number, controllerResult: androidx.versionedparcelable.ParcelImpl): void;
						public setMediaItem(caller: androidx.media2.session.IMediaController, seq: number, mediaId: string): void;
						public getChildren(caller: androidx.media2.session.IMediaController, seq: number, parentId: string, page: number, pageSize: number, libraryParams: androidx.versionedparcelable.ParcelImpl): void;
						public seekTo(caller: androidx.media2.session.IMediaController, seq: number, pos: number): void;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module session {
			export class IMediaSessionService extends java.lang.Object implements globalAndroid.os.IInterface {
				public static class: java.lang.Class<androidx.media2.session.IMediaSessionService>;
				/**
				 * Constructs a new instance of the androidx.media2.session.IMediaSessionService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					connect(iMediaController0: androidx.media2.session.IMediaController, parcelImpl1: androidx.versionedparcelable.ParcelImpl): void;
					asBinder(): globalAndroid.os.IBinder;
				});
				public constructor();
				public connect(iMediaController0: androidx.media2.session.IMediaController, parcelImpl1: androidx.versionedparcelable.ParcelImpl): void;
				public asBinder(): globalAndroid.os.IBinder;
			}
			export module IMediaSessionService {
				export class Default extends java.lang.Object implements androidx.media2.session.IMediaSessionService {
					public static class: java.lang.Class<androidx.media2.session.IMediaSessionService.Default>;
					public constructor();
					public connect(caller: androidx.media2.session.IMediaController, connectionRequest: androidx.versionedparcelable.ParcelImpl): void;
					public asBinder(): globalAndroid.os.IBinder;
				}
				export abstract class Stub extends globalAndroid.os.Binder implements androidx.media2.session.IMediaSessionService {
					public static class: java.lang.Class<androidx.media2.session.IMediaSessionService.Stub>;
					public static setDefaultImpl(impl: androidx.media2.session.IMediaSessionService): boolean;
					public isBinderAlive(): boolean;
					public dump(fd: java.io.FileDescriptor, fout: java.io.PrintWriter, strings2: native.Array<string>): void;
					public linkToDeath(recipient: globalAndroid.os.IBinder.DeathRecipient, flags: number): void;
					public constructor(descriptor: string);
					public transact(code: number, data: globalAndroid.os.Parcel, reply: globalAndroid.os.Parcel, flags: number): boolean;
					public connect(iMediaController0: androidx.media2.session.IMediaController, parcelImpl1: androidx.versionedparcelable.ParcelImpl): void;
					public asBinder(): globalAndroid.os.IBinder;
					public queryLocalInterface(descriptor: string): globalAndroid.os.IInterface;
					public onTransact(code: number, data: globalAndroid.os.Parcel, reply: globalAndroid.os.Parcel, flags: number): boolean;
					public dump(fd: java.io.FileDescriptor, strings1: native.Array<string>): void;
					public static asInterface(obj: globalAndroid.os.IBinder): androidx.media2.session.IMediaSessionService;
					public dumpAsync(fd: java.io.FileDescriptor, strings1: native.Array<string>): void;
					public unlinkToDeath(recipient: globalAndroid.os.IBinder.DeathRecipient, flags: number): boolean;
					public constructor();
					public getInterfaceDescriptor(): string;
					public pingBinder(): boolean;
					public static getDefaultImpl(): androidx.media2.session.IMediaSessionService;
				}
				export module Stub {
					export class Proxy extends java.lang.Object implements androidx.media2.session.IMediaSessionService {
						public static class: java.lang.Class<androidx.media2.session.IMediaSessionService.Stub.Proxy>;
						public static sDefaultImpl: androidx.media2.session.IMediaSessionService;
						public getInterfaceDescriptor(): string;
						public connect(caller: androidx.media2.session.IMediaController, connectionRequest: androidx.versionedparcelable.ParcelImpl): void;
						public asBinder(): globalAndroid.os.IBinder;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module session {
			export class LibraryParamsParcelizer extends java.lang.Object {
				public static class: java.lang.Class<androidx.media2.session.LibraryParamsParcelizer>;
				public static write(obj: androidx.media2.session.MediaLibraryService.LibraryParams, parcel: androidx.versionedparcelable.VersionedParcel): void;
				public static read(parcel: androidx.versionedparcelable.VersionedParcel): androidx.media2.session.MediaLibraryService.LibraryParams;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module session {
			export class LibraryResult extends androidx.versionedparcelable.CustomVersionedParcelable implements androidx.media2.session.RemoteResult {
				public static class: java.lang.Class<androidx.media2.session.LibraryResult>;
				public constructor(resultCode: number, items: java.util.List<androidx.media2.common.MediaItem>, params: androidx.media2.session.MediaLibraryService.LibraryParams);
				public constructor(resultCode: number, item: androidx.media2.common.MediaItem, params: androidx.media2.session.MediaLibraryService.LibraryParams);
				public getLibraryParams(): androidx.media2.session.MediaLibraryService.LibraryParams;
				public getMediaItem(): androidx.media2.common.MediaItem;
				public getCompletionTime(): number;
				public constructor(resultCode: number);
				public onPostParceling(): void;
				public getResultCode(): number;
				public getMediaItems(): java.util.List<androidx.media2.common.MediaItem>;
				public constructor();
				public onPreParceling(isStream: boolean): void;
			}
			export module LibraryResult {
				export class ResultCode extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.media2.session.LibraryResult.ResultCode>;
					/**
					 * Constructs a new instance of the androidx.media2.session.LibraryResult() when extending the interface class.
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
		export module session {
			export class LibraryResultParcelizer extends java.lang.Object {
				public static class: java.lang.Class<androidx.media2.session.LibraryResultParcelizer>;
				public static read(parcel: androidx.versionedparcelable.VersionedParcel): androidx.media2.session.LibraryResult;
				public static write(obj: androidx.media2.session.LibraryResult, parcel: androidx.versionedparcelable.VersionedParcel): void;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module session {
			export class MediaBrowser extends androidx.media2.session.MediaController {
				public static class: java.lang.Class<androidx.media2.session.MediaBrowser>;
				public getItem(mediaId: string): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.LibraryResult>;
				public close(): void;
				public subscribe(parentId: string, params: androidx.media2.session.MediaLibraryService.LibraryParams): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.LibraryResult>;
				public search(query: string, params: androidx.media2.session.MediaLibraryService.LibraryParams): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.LibraryResult>;
				public getSearchResult(query: string, page: number, pageSize: number, params: androidx.media2.session.MediaLibraryService.LibraryParams): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.LibraryResult>;
				public getLibraryRoot(params: androidx.media2.session.MediaLibraryService.LibraryParams): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.LibraryResult>;
				public unsubscribe(parentId: string): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.LibraryResult>;
				public getChildren(parentId: string, page: number, pageSize: number, params: androidx.media2.session.MediaLibraryService.LibraryParams): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.LibraryResult>;
			}
			export module MediaBrowser {
				export class BrowserCallback extends androidx.media2.session.MediaController.ControllerCallback {
					public static class: java.lang.Class<androidx.media2.session.MediaBrowser.BrowserCallback>;
					public constructor();
					public onChildrenChanged(browser: androidx.media2.session.MediaBrowser, parentId: string, itemCount: number, params: androidx.media2.session.MediaLibraryService.LibraryParams): void;
					public onSearchResultChanged(browser: androidx.media2.session.MediaBrowser, query: string, itemCount: number, params: androidx.media2.session.MediaLibraryService.LibraryParams): void;
				}
				export class BrowserCallbackRunnable extends java.lang.Object {
					public static class: java.lang.Class<androidx.media2.session.MediaBrowser.BrowserCallbackRunnable>;
					/**
					 * Constructs a new instance of the androidx.media2.session.MediaBrowser() when extending the interface class.
					 */
					public constructor(implementation: {
						run(browserCallback0: androidx.media2.session.MediaBrowser.BrowserCallback): void;
					});
					public constructor();
					public run(browserCallback0: androidx.media2.session.MediaBrowser.BrowserCallback): void;
				}
				export class Builder extends androidx.media2.session.MediaController.BuilderBase<androidx.media2.session.MediaBrowser,androidx.media2.session.MediaBrowser.Builder,androidx.media2.session.MediaBrowser.BrowserCallback> {
					public static class: java.lang.Class<androidx.media2.session.MediaBrowser.Builder>;
					public setConnectionHints(connectionHints: globalAndroid.os.Bundle): androidx.media2.session.MediaBrowser.Builder;
					public setSessionCompatToken(compatToken: globalAndroid.support.v4.media.session.MediaSessionCompat.Token): androidx.media2.session.MediaBrowser.Builder;
					public build(): androidx.media2.session.MediaBrowser;
					public setConnectionHints(connectionHints: globalAndroid.os.Bundle): any;
					public setSessionToken(token: androidx.media2.session.SessionToken): androidx.media2.session.MediaBrowser.Builder;
					public setControllerCallback(executor: java.util.concurrent.Executor, callback: androidx.media2.session.MediaBrowser.BrowserCallback): androidx.media2.session.MediaBrowser.Builder;
					public constructor(context: globalAndroid.content.Context);
				}
				export class MediaBrowserImpl extends java.lang.Object implements androidx.media2.session.MediaController.MediaControllerImpl {
					public static class: java.lang.Class<androidx.media2.session.MediaBrowser.MediaBrowserImpl>;
					/**
					 * Constructs a new instance of the androidx.media2.session.MediaBrowser() when extending the interface class.
					 */
					public constructor(implementation: {
						getLibraryRoot(libraryParams0: androidx.media2.session.MediaLibraryService.LibraryParams): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.LibraryResult>;
						subscribe(string0: string, libraryParams1: androidx.media2.session.MediaLibraryService.LibraryParams): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.LibraryResult>;
						unsubscribe(string0: string): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.LibraryResult>;
						getChildren(string0: string, int1: number, int2: number, libraryParams3: androidx.media2.session.MediaLibraryService.LibraryParams): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.LibraryResult>;
						getItem(string0: string): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.LibraryResult>;
						search(string0: string, libraryParams1: androidx.media2.session.MediaLibraryService.LibraryParams): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.LibraryResult>;
						getSearchResult(string0: string, int1: number, int2: number, libraryParams3: androidx.media2.session.MediaLibraryService.LibraryParams): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.LibraryResult>;
						getConnectedToken(): androidx.media2.session.SessionToken;
						isConnected(): boolean;
						play(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
						pause(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
						prepare(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
						fastForward(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
						rewind(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
						seekTo(long0: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
						skipForward(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
						skipBackward(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
						setVolumeTo(int0: number, int1: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
						adjustVolume(int0: number, int1: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
						getSessionActivity(): globalAndroid.app.PendingIntent;
						getPlayerState(): number;
						getDuration(): number;
						getCurrentPosition(): number;
						getPlaybackSpeed(): number;
						setPlaybackSpeed(float0: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
						getBufferingState(): number;
						getBufferedPosition(): number;
						getPlaybackInfo(): androidx.media2.session.MediaController.PlaybackInfo;
						setRating(string0: string, rating1: androidx.media2.common.Rating): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
						sendCustomCommand(sessionCommand0: androidx.media2.session.SessionCommand, bundle1: globalAndroid.os.Bundle): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
						getPlaylist(): java.util.List<androidx.media2.common.MediaItem>;
						setPlaylist(list0: java.util.List<string>, mediaMetadata1: androidx.media2.common.MediaMetadata): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
						setMediaItem(string0: string): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
						setMediaUri(uri0: globalAndroid.net.Uri, bundle1: globalAndroid.os.Bundle): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
						updatePlaylistMetadata(mediaMetadata0: androidx.media2.common.MediaMetadata): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
						getPlaylistMetadata(): androidx.media2.common.MediaMetadata;
						addPlaylistItem(int0: number, string1: string): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
						removePlaylistItem(int0: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
						replacePlaylistItem(int0: number, string1: string): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
						movePlaylistItem(int0: number, int1: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
						getCurrentMediaItem(): androidx.media2.common.MediaItem;
						getCurrentMediaItemIndex(): number;
						getPreviousMediaItemIndex(): number;
						getNextMediaItemIndex(): number;
						skipToPreviousItem(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
						skipToNextItem(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
						skipToPlaylistItem(int0: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
						getRepeatMode(): number;
						setRepeatMode(int0: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
						getShuffleMode(): number;
						setShuffleMode(int0: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
						getVideoSize(): androidx.media2.common.VideoSize;
						setSurface(surface0: globalAndroid.view.Surface): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
						getTracks(): java.util.List<androidx.media2.common.SessionPlayer.TrackInfo>;
						selectTrack(trackInfo0: androidx.media2.common.SessionPlayer.TrackInfo): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
						deselectTrack(trackInfo0: androidx.media2.common.SessionPlayer.TrackInfo): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
						getSelectedTrack(int0: number): androidx.media2.common.SessionPlayer.TrackInfo;
						getAllowedCommands(): androidx.media2.session.SessionCommandGroup;
						getContext(): globalAndroid.content.Context;
						getBrowserCompat(): globalAndroid.support.v4.media.MediaBrowserCompat;
						close(): void;
						close(): void;
					});
					public constructor();
					public setMediaUri(uri0: globalAndroid.net.Uri, bundle1: globalAndroid.os.Bundle): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
					public skipBackward(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
					public deselectTrack(trackInfo0: androidx.media2.common.SessionPlayer.TrackInfo): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
					public getSearchResult(string0: string, int1: number, int2: number, libraryParams3: androidx.media2.session.MediaLibraryService.LibraryParams): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.LibraryResult>;
					public setRepeatMode(int0: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
					public selectTrack(trackInfo0: androidx.media2.common.SessionPlayer.TrackInfo): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
					public getSelectedTrack(int0: number): androidx.media2.common.SessionPlayer.TrackInfo;
					public setVolumeTo(int0: number, int1: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
					public movePlaylistItem(int0: number, int1: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
					public subscribe(string0: string, libraryParams1: androidx.media2.session.MediaLibraryService.LibraryParams): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.LibraryResult>;
					public getPlaylist(): java.util.List<androidx.media2.common.MediaItem>;
					public getPlaybackInfo(): androidx.media2.session.MediaController.PlaybackInfo;
					public close(): void;
					public rewind(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
					public getContext(): globalAndroid.content.Context;
					public updatePlaylistMetadata(mediaMetadata0: androidx.media2.common.MediaMetadata): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
					public setShuffleMode(int0: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
					public getPreviousMediaItemIndex(): number;
					public setSurface(surface0: globalAndroid.view.Surface): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
					public getNextMediaItemIndex(): number;
					public unsubscribe(string0: string): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.LibraryResult>;
					public getChildren(string0: string, int1: number, int2: number, libraryParams3: androidx.media2.session.MediaLibraryService.LibraryParams): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.LibraryResult>;
					public getItem(string0: string): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.LibraryResult>;
					public getPlaybackSpeed(): number;
					public getPlaylistMetadata(): androidx.media2.common.MediaMetadata;
					public skipForward(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
					public play(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
					public getCurrentMediaItem(): androidx.media2.common.MediaItem;
					public setPlaylist(list0: java.util.List<string>, mediaMetadata1: androidx.media2.common.MediaMetadata): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
					public skipToPreviousItem(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
					public getCurrentMediaItemIndex(): number;
					public getVideoSize(): androidx.media2.common.VideoSize;
					public getRepeatMode(): number;
					public skipToNextItem(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
					public sendCustomCommand(sessionCommand0: androidx.media2.session.SessionCommand, bundle1: globalAndroid.os.Bundle): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
					public setRating(string0: string, rating1: androidx.media2.common.Rating): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
					public fastForward(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
					public getBrowserCompat(): globalAndroid.support.v4.media.MediaBrowserCompat;
					public setPlaybackSpeed(float0: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
					public getConnectedToken(): androidx.media2.session.SessionToken;
					public getBufferingState(): number;
					public getDuration(): number;
					public skipToPlaylistItem(int0: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
					public addPlaylistItem(int0: number, string1: string): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
					public getCurrentPosition(): number;
					public setMediaItem(string0: string): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
					public getShuffleMode(): number;
					public getPlayerState(): number;
					public getAllowedCommands(): androidx.media2.session.SessionCommandGroup;
					public search(string0: string, libraryParams1: androidx.media2.session.MediaLibraryService.LibraryParams): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.LibraryResult>;
					public isConnected(): boolean;
					public getLibraryRoot(libraryParams0: androidx.media2.session.MediaLibraryService.LibraryParams): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.LibraryResult>;
					public adjustVolume(int0: number, int1: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
					public replacePlaylistItem(int0: number, string1: string): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
					public pause(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
					public getSessionActivity(): globalAndroid.app.PendingIntent;
					public getTracks(): java.util.List<androidx.media2.common.SessionPlayer.TrackInfo>;
					public seekTo(long0: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
					public prepare(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
					public getBufferedPosition(): number;
					public removePlaylistItem(int0: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				}
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module session {
			export class MediaBrowserImplBase extends androidx.media2.session.MediaControllerImplBase implements androidx.media2.session.MediaBrowser.MediaBrowserImpl {
				public static class: java.lang.Class<androidx.media2.session.MediaBrowserImplBase>;
				public pause(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public getCurrentMediaItem(): androidx.media2.common.MediaItem;
				public getSearchResult(query: string, page: number, pageSize: number, params: androidx.media2.session.MediaLibraryService.LibraryParams): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.LibraryResult>;
				public setPlaybackSpeed(speed: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public getLibraryRoot(params: androidx.media2.session.MediaLibraryService.LibraryParams): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.LibraryResult>;
				public getConnectedToken(): androidx.media2.session.SessionToken;
				public selectTrack(trackInfo: androidx.media2.common.SessionPlayer.TrackInfo): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public getItem(mediaId: string): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.LibraryResult>;
				public isConnected(): boolean;
				public removePlaylistItem(index: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public search(query: string, params: androidx.media2.session.MediaLibraryService.LibraryParams): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.LibraryResult>;
				public getAllowedCommands(): androidx.media2.session.SessionCommandGroup;
				public setRating(mediaId: string, rating: androidx.media2.common.Rating): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public getNextMediaItemIndex(): number;
				public getChildren(parentId: string, page: number, pageSize: number, params: androidx.media2.session.MediaLibraryService.LibraryParams): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.LibraryResult>;
				public seekTo(pos: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public getSelectedTrack(trackType: number): androidx.media2.common.SessionPlayer.TrackInfo;
				public setSurface(surface: globalAndroid.view.Surface): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public getPlaybackSpeed(): number;
				public movePlaylistItem(fromIndex: number, toIndex: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public close(): void;
				public play(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public getContext(): globalAndroid.content.Context;
				public getVideoSize(): androidx.media2.common.VideoSize;
				public getCurrentPosition(): number;
				public setMediaItem(mediaId: string): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public skipToNextItem(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public skipToPlaylistItem(index: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public prepare(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public setVolumeTo(value: number, flags: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public getPlaylistMetadata(): androidx.media2.common.MediaMetadata;
				public getBrowserCompat(): globalAndroid.support.v4.media.MediaBrowserCompat;
				public getPlayerState(): number;
				public getCurrentMediaItemIndex(): number;
				public addPlaylistItem(index: number, mediaId: string): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public getDuration(): number;
				public deselectTrack(trackInfo: androidx.media2.common.SessionPlayer.TrackInfo): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public getSessionActivity(): globalAndroid.app.PendingIntent;
				public skipBackward(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public rewind(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public getPreviousMediaItemIndex(): number;
				public setShuffleMode(shuffleMode: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public getPlaybackInfo(): androidx.media2.session.MediaController.PlaybackInfo;
				public skipToPreviousItem(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public getBufferedPosition(): number;
				public skipForward(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public adjustVolume(direction: number, flags: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public sendCustomCommand(command: androidx.media2.session.SessionCommand, bundle1: globalAndroid.os.Bundle): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public unsubscribe(parentId: string): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.LibraryResult>;
				public getRepeatMode(): number;
				public getShuffleMode(): number;
				public setMediaUri(uri: globalAndroid.net.Uri, extras: globalAndroid.os.Bundle): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public fastForward(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public updatePlaylistMetadata(metadata: androidx.media2.common.MediaMetadata): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public getBufferingState(): number;
				public subscribe(parentId: string, params: androidx.media2.session.MediaLibraryService.LibraryParams): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.LibraryResult>;
				public setRepeatMode(repeatMode: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public getPlaylist(): java.util.List<androidx.media2.common.MediaItem>;
				public getTracks(): java.util.List<androidx.media2.common.SessionPlayer.TrackInfo>;
				public setPlaylist(list: java.util.List<string>, metadata: androidx.media2.common.MediaMetadata): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public replacePlaylistItem(index: number, mediaId: string): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
			}
			export module MediaBrowserImplBase {
				export class RemoteLibrarySessionTask extends java.lang.Object {
					public static class: java.lang.Class<androidx.media2.session.MediaBrowserImplBase.RemoteLibrarySessionTask>;
					/**
					 * Constructs a new instance of the androidx.media2.session.MediaBrowserImplBase() when extending the interface class.
					 */
					public constructor(implementation: {
						run(iMediaSession0: androidx.media2.session.IMediaSession, int1: number): void;
					});
					public constructor();
					public run(iMediaSession0: androidx.media2.session.IMediaSession, int1: number): void;
				}
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module session {
			export class MediaBrowserImplLegacy extends androidx.media2.session.MediaControllerImplLegacy implements androidx.media2.session.MediaBrowser.MediaBrowserImpl {
				public static class: java.lang.Class<androidx.media2.session.MediaBrowserImplLegacy>;
				public pause(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public getCurrentMediaItem(): androidx.media2.common.MediaItem;
				public getSearchResult(query: string, page: number, pageSize: number, params: androidx.media2.session.MediaLibraryService.LibraryParams): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.LibraryResult>;
				public setPlaybackSpeed(speed: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public getLibraryRoot(params: androidx.media2.session.MediaLibraryService.LibraryParams): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.LibraryResult>;
				public getConnectedToken(): androidx.media2.session.SessionToken;
				public selectTrack(trackInfo: androidx.media2.common.SessionPlayer.TrackInfo): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public getItem(mediaId: string): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.LibraryResult>;
				public isConnected(): boolean;
				public removePlaylistItem(index: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public search(query: string, params: androidx.media2.session.MediaLibraryService.LibraryParams): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.LibraryResult>;
				public getAllowedCommands(): androidx.media2.session.SessionCommandGroup;
				public setRating(mediaId: string, rating: androidx.media2.common.Rating): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public getNextMediaItemIndex(): number;
				public getChildren(parentId: string, page: number, pageSize: number, params: androidx.media2.session.MediaLibraryService.LibraryParams): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.LibraryResult>;
				public seekTo(pos: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public getSelectedTrack(trackType: number): androidx.media2.common.SessionPlayer.TrackInfo;
				public setSurface(surface: globalAndroid.view.Surface): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public getPlaybackSpeed(): number;
				public close(): void;
				public movePlaylistItem(fromIndex: number, toIndex: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public play(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public getContext(): globalAndroid.content.Context;
				public getVideoSize(): androidx.media2.common.VideoSize;
				public getCurrentPosition(): number;
				public setMediaItem(mediaId: string): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public skipToNextItem(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public skipToPlaylistItem(index: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public prepare(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public setVolumeTo(value: number, flags: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public getPlaylistMetadata(): androidx.media2.common.MediaMetadata;
				public getBrowserCompat(): globalAndroid.support.v4.media.MediaBrowserCompat;
				public getPlayerState(): number;
				public getCurrentMediaItemIndex(): number;
				public addPlaylistItem(index: number, mediaId: string): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public getDuration(): number;
				public deselectTrack(trackInfo: androidx.media2.common.SessionPlayer.TrackInfo): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public getSessionActivity(): globalAndroid.app.PendingIntent;
				public skipBackward(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public rewind(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public getPreviousMediaItemIndex(): number;
				public setShuffleMode(shuffleMode: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public getPlaybackInfo(): androidx.media2.session.MediaController.PlaybackInfo;
				public skipToPreviousItem(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public getBufferedPosition(): number;
				public skipForward(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public adjustVolume(direction: number, flags: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public sendCustomCommand(command: androidx.media2.session.SessionCommand, bundle1: globalAndroid.os.Bundle): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public unsubscribe(parentId: string): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.LibraryResult>;
				public getRepeatMode(): number;
				public getShuffleMode(): number;
				public setMediaUri(uri: globalAndroid.net.Uri, extras: globalAndroid.os.Bundle): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public fastForward(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public updatePlaylistMetadata(metadata: androidx.media2.common.MediaMetadata): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public getBufferingState(): number;
				public subscribe(parentId: string, params: androidx.media2.session.MediaLibraryService.LibraryParams): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.LibraryResult>;
				public setRepeatMode(repeatMode: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public getPlaylist(): java.util.List<androidx.media2.common.MediaItem>;
				public getTracks(): java.util.List<androidx.media2.common.SessionPlayer.TrackInfo>;
				public setPlaylist(list: java.util.List<string>, metadata: androidx.media2.common.MediaMetadata): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public replacePlaylistItem(index: number, mediaId: string): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
			}
			export module MediaBrowserImplLegacy {
				export class GetChildrenCallback extends globalAndroid.support.v4.media.MediaBrowserCompat.SubscriptionCallback {
					public static class: java.lang.Class<androidx.media2.session.MediaBrowserImplLegacy.GetChildrenCallback>;
					public onError(parentId: string, options: globalAndroid.os.Bundle): void;
					public onChildrenLoaded(parentId: string, children: java.util.List<globalAndroid.support.v4.media.MediaBrowserCompat.MediaItem>, options: globalAndroid.os.Bundle): void;
					public onChildrenLoaded(parentId: string, children: java.util.List<globalAndroid.support.v4.media.MediaBrowserCompat.MediaItem>): void;
					public onError(parentId: string): void;
				}
				export class GetLibraryRootCallback extends globalAndroid.support.v4.media.MediaBrowserCompat.ConnectionCallback {
					public static class: java.lang.Class<androidx.media2.session.MediaBrowserImplLegacy.GetLibraryRootCallback>;
					public onConnected(): void;
					public onConnectionFailed(): void;
					public onConnectionSuspended(): void;
				}
				export class SubscribeCallback extends globalAndroid.support.v4.media.MediaBrowserCompat.SubscriptionCallback {
					public static class: java.lang.Class<androidx.media2.session.MediaBrowserImplLegacy.SubscribeCallback>;
					public onError(parentId: string, options: globalAndroid.os.Bundle): void;
					public onChildrenLoaded(parentId: string, children: java.util.List<globalAndroid.support.v4.media.MediaBrowserCompat.MediaItem>, options: globalAndroid.os.Bundle): void;
					public onChildrenLoaded(parentId: string, children: java.util.List<globalAndroid.support.v4.media.MediaBrowserCompat.MediaItem>): void;
					public onError(parentId: string): void;
				}
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module session {
			export class MediaConstants extends java.lang.Object {
				public static class: java.lang.Class<androidx.media2.session.MediaConstants>;
				public static MEDIA_URI_SCHEME: string;
				public static MEDIA_URI_AUTHORITY: string;
				public static MEDIA_URI_PATH_PLAY_FROM_MEDIA_ID: string;
				public static MEDIA_URI_PATH_PLAY_FROM_SEARCH: string;
				public static MEDIA_URI_PATH_PREPARE_FROM_MEDIA_ID: string;
				public static MEDIA_URI_PATH_PREPARE_FROM_SEARCH: string;
				public static MEDIA_URI_QUERY_ID: string;
				public static MEDIA_URI_QUERY_QUERY: string;
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module session {
			export class MediaController extends java.lang.Object implements java.io.Closeable {
				public static class: java.lang.Class<androidx.media2.session.MediaController>;
				public pause(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public getCurrentMediaItem(): androidx.media2.common.MediaItem;
				public skipToNextPlaylistItem(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public getConnectedToken(): androidx.media2.session.SessionToken;
				public selectTrack(trackInfo: androidx.media2.common.SessionPlayer.TrackInfo): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public setPlaybackSpeed(playbackSpeed: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public isConnected(): boolean;
				public removePlaylistItem(index: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public getAllowedCommands(): androidx.media2.session.SessionCommandGroup;
				public setRating(mediaId: string, rating: androidx.media2.common.Rating): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public getNextMediaItemIndex(): number;
				public skipToPreviousPlaylistItem(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public getSelectedTrack(trackType: number): androidx.media2.common.SessionPlayer.TrackInfo;
				public setSurface(surface: globalAndroid.view.Surface): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public getPlaybackSpeed(): number;
				public registerExtraCallback(executor: java.util.concurrent.Executor, callback: androidx.media2.session.MediaController.ControllerCallback): void;
				public close(): void;
				public movePlaylistItem(fromIndex: number, toIndex: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public play(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public getVideoSize(): androidx.media2.common.VideoSize;
				public getCurrentPosition(): number;
				public setMediaItem(mediaId: string): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public skipToPlaylistItem(index: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public seekTo(position: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public prepare(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public setVolumeTo(value: number, flags: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public getPlaylistMetadata(): androidx.media2.common.MediaMetadata;
				public getPlayerState(): number;
				public getCurrentMediaItemIndex(): number;
				public addPlaylistItem(index: number, mediaId: string): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public getDuration(): number;
				public deselectTrack(trackInfo: androidx.media2.common.SessionPlayer.TrackInfo): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public getExtraControllerCallbacks(): java.util.List<androidx.core.util.Pair<androidx.media2.session.MediaController.ControllerCallback,java.util.concurrent.Executor>>;
				public getSessionActivity(): globalAndroid.app.PendingIntent;
				public notifyAllControllerCallbacks(callbackRunnable: androidx.media2.session.MediaController.ControllerCallbackRunnable): void;
				public skipBackward(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public rewind(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public getPreviousMediaItemIndex(): number;
				public setShuffleMode(shuffleMode: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public getPlaybackInfo(): androidx.media2.session.MediaController.PlaybackInfo;
				public getBufferedPosition(): number;
				public skipForward(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public adjustVolume(direction: number, flags: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public sendCustomCommand(command: androidx.media2.session.SessionCommand, bundle1: globalAndroid.os.Bundle): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public setTimeDiff(timeDiff: java.lang.Long): void;
				public getRepeatMode(): number;
				public getShuffleMode(): number;
				public setMediaUri(uri: globalAndroid.net.Uri, extras: globalAndroid.os.Bundle): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public fastForward(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public updatePlaylistMetadata(metadata: androidx.media2.common.MediaMetadata): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public getBufferingState(): number;
				public unregisterExtraCallback(callback: androidx.media2.session.MediaController.ControllerCallback): void;
				public setRepeatMode(repeatMode: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public getPlaylist(): java.util.List<androidx.media2.common.MediaItem>;
				public getTracks(): java.util.List<androidx.media2.common.SessionPlayer.TrackInfo>;
				public setPlaylist(list: java.util.List<string>, metadata: androidx.media2.common.MediaMetadata): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public replacePlaylistItem(index: number, mediaId: string): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
			}
			export module MediaController {
				export class Builder extends androidx.media2.session.MediaController.BuilderBase<androidx.media2.session.MediaController,androidx.media2.session.MediaController.Builder,androidx.media2.session.MediaController.ControllerCallback> {
					public static class: java.lang.Class<androidx.media2.session.MediaController.Builder>;
					public setSessionCompatToken(compatToken: globalAndroid.support.v4.media.session.MediaSessionCompat.Token): androidx.media2.session.MediaController.Builder;
					public setConnectionHints(connectionHints: globalAndroid.os.Bundle): androidx.media2.session.MediaController.Builder;
					public setConnectionHints(connectionHints: globalAndroid.os.Bundle): any;
					public setControllerCallback(executor: java.util.concurrent.Executor, callback: androidx.media2.session.MediaController.ControllerCallback): androidx.media2.session.MediaController.Builder;
					public constructor(context: globalAndroid.content.Context);
					public setSessionToken(token: androidx.media2.session.SessionToken): androidx.media2.session.MediaController.Builder;
					public build(): androidx.media2.session.MediaController;
				}
				export abstract class BuilderBase<T, U, C>  extends java.lang.Object {
					public static class: java.lang.Class<androidx.media2.session.MediaController.BuilderBase<any,any,any>>;
					public setConnectionHints(connectionHints: globalAndroid.os.Bundle): U;
				}
				export abstract class ControllerCallback extends java.lang.Object {
					public static class: java.lang.Class<androidx.media2.session.MediaController.ControllerCallback>;
					public onVideoSizeChanged(controller: androidx.media2.session.MediaController, videoSize: androidx.media2.common.VideoSize): void;
					public onPlaybackSpeedChanged(controller: androidx.media2.session.MediaController, speed: number): void;
					public onTrackDeselected(controller: androidx.media2.session.MediaController, trackInfo: androidx.media2.common.SessionPlayer.TrackInfo): void;
					public onCustomCommand(controller: androidx.media2.session.MediaController, command: androidx.media2.session.SessionCommand, bundle2: globalAndroid.os.Bundle): androidx.media2.session.SessionResult;
					public onCurrentMediaItemChanged(controller: androidx.media2.session.MediaController, item: androidx.media2.common.MediaItem): void;
					public onTrackSelected(controller: androidx.media2.session.MediaController, trackInfo: androidx.media2.common.SessionPlayer.TrackInfo): void;
					public onPlaybackInfoChanged(controller: androidx.media2.session.MediaController, info: androidx.media2.session.MediaController.PlaybackInfo): void;
					public onAllowedCommandsChanged(controller: androidx.media2.session.MediaController, commands: androidx.media2.session.SessionCommandGroup): void;
					public onTracksChanged(controller: androidx.media2.session.MediaController, tracks: java.util.List<androidx.media2.common.SessionPlayer.TrackInfo>): void;
					public onSubtitleData(controller: androidx.media2.session.MediaController, item: androidx.media2.common.MediaItem, track: androidx.media2.common.SessionPlayer.TrackInfo, data: androidx.media2.common.SubtitleData): void;
					public onBufferingStateChanged(controller: androidx.media2.session.MediaController, item: androidx.media2.common.MediaItem, state: number): void;
					public onPlaylistChanged(controller: androidx.media2.session.MediaController, list: java.util.List<androidx.media2.common.MediaItem>, metadata: androidx.media2.common.MediaMetadata): void;
					public onConnected(controller: androidx.media2.session.MediaController, allowedCommands: androidx.media2.session.SessionCommandGroup): void;
					public onPlaylistMetadataChanged(controller: androidx.media2.session.MediaController, metadata: androidx.media2.common.MediaMetadata): void;
					public onPlaybackCompleted(controller: androidx.media2.session.MediaController): void;
					/** @deprecated */
					public onVideoSizeChanged(controller: androidx.media2.session.MediaController, item: androidx.media2.common.MediaItem, videoSize: androidx.media2.common.VideoSize): void;
					public constructor();
					public onShuffleModeChanged(controller: androidx.media2.session.MediaController, shuffleMode: number): void;
					public onDisconnected(controller: androidx.media2.session.MediaController): void;
					public onSetCustomLayout(controller: androidx.media2.session.MediaController, layout: java.util.List<androidx.media2.session.MediaSession.CommandButton>): number;
					public onRepeatModeChanged(controller: androidx.media2.session.MediaController, repeatMode: number): void;
					public onPlayerStateChanged(controller: androidx.media2.session.MediaController, state: number): void;
					public onSeekCompleted(controller: androidx.media2.session.MediaController, position: number): void;
				}
				export class ControllerCallbackRunnable extends java.lang.Object {
					public static class: java.lang.Class<androidx.media2.session.MediaController.ControllerCallbackRunnable>;
					/**
					 * Constructs a new instance of the androidx.media2.session.MediaController() when extending the interface class.
					 */
					public constructor(implementation: {
						run(controllerCallback0: androidx.media2.session.MediaController.ControllerCallback): void;
					});
					public constructor();
					public run(controllerCallback0: androidx.media2.session.MediaController.ControllerCallback): void;
				}
				export class MediaControllerImpl extends java.lang.Object implements java.io.Closeable {
					public static class: java.lang.Class<androidx.media2.session.MediaController.MediaControllerImpl>;
					/**
					 * Constructs a new instance of the androidx.media2.session.MediaController() when extending the interface class.
					 */
					public constructor(implementation: {
						getConnectedToken(): androidx.media2.session.SessionToken;
						isConnected(): boolean;
						play(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
						pause(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
						prepare(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
						fastForward(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
						rewind(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
						seekTo(long0: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
						skipForward(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
						skipBackward(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
						setVolumeTo(int0: number, int1: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
						adjustVolume(int0: number, int1: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
						getSessionActivity(): globalAndroid.app.PendingIntent;
						getPlayerState(): number;
						getDuration(): number;
						getCurrentPosition(): number;
						getPlaybackSpeed(): number;
						setPlaybackSpeed(float0: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
						getBufferingState(): number;
						getBufferedPosition(): number;
						getPlaybackInfo(): androidx.media2.session.MediaController.PlaybackInfo;
						setRating(string0: string, rating1: androidx.media2.common.Rating): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
						sendCustomCommand(sessionCommand0: androidx.media2.session.SessionCommand, bundle1: globalAndroid.os.Bundle): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
						getPlaylist(): java.util.List<androidx.media2.common.MediaItem>;
						setPlaylist(list0: java.util.List<string>, mediaMetadata1: androidx.media2.common.MediaMetadata): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
						setMediaItem(string0: string): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
						setMediaUri(uri0: globalAndroid.net.Uri, bundle1: globalAndroid.os.Bundle): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
						updatePlaylistMetadata(mediaMetadata0: androidx.media2.common.MediaMetadata): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
						getPlaylistMetadata(): androidx.media2.common.MediaMetadata;
						addPlaylistItem(int0: number, string1: string): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
						removePlaylistItem(int0: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
						replacePlaylistItem(int0: number, string1: string): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
						movePlaylistItem(int0: number, int1: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
						getCurrentMediaItem(): androidx.media2.common.MediaItem;
						getCurrentMediaItemIndex(): number;
						getPreviousMediaItemIndex(): number;
						getNextMediaItemIndex(): number;
						skipToPreviousItem(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
						skipToNextItem(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
						skipToPlaylistItem(int0: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
						getRepeatMode(): number;
						setRepeatMode(int0: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
						getShuffleMode(): number;
						setShuffleMode(int0: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
						getVideoSize(): androidx.media2.common.VideoSize;
						setSurface(surface0: globalAndroid.view.Surface): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
						getTracks(): java.util.List<androidx.media2.common.SessionPlayer.TrackInfo>;
						selectTrack(trackInfo0: androidx.media2.common.SessionPlayer.TrackInfo): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
						deselectTrack(trackInfo0: androidx.media2.common.SessionPlayer.TrackInfo): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
						getSelectedTrack(int0: number): androidx.media2.common.SessionPlayer.TrackInfo;
						getAllowedCommands(): androidx.media2.session.SessionCommandGroup;
						getContext(): globalAndroid.content.Context;
						getBrowserCompat(): globalAndroid.support.v4.media.MediaBrowserCompat;
						close(): void;
						close(): void;
					});
					public constructor();
					public setMediaUri(uri0: globalAndroid.net.Uri, bundle1: globalAndroid.os.Bundle): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
					public skipBackward(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
					public deselectTrack(trackInfo0: androidx.media2.common.SessionPlayer.TrackInfo): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
					public setRepeatMode(int0: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
					public selectTrack(trackInfo0: androidx.media2.common.SessionPlayer.TrackInfo): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
					public getSelectedTrack(int0: number): androidx.media2.common.SessionPlayer.TrackInfo;
					public setVolumeTo(int0: number, int1: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
					public movePlaylistItem(int0: number, int1: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
					public getPlaylist(): java.util.List<androidx.media2.common.MediaItem>;
					public getPlaybackInfo(): androidx.media2.session.MediaController.PlaybackInfo;
					public close(): void;
					public rewind(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
					public getContext(): globalAndroid.content.Context;
					public updatePlaylistMetadata(mediaMetadata0: androidx.media2.common.MediaMetadata): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
					public setShuffleMode(int0: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
					public getPreviousMediaItemIndex(): number;
					public setSurface(surface0: globalAndroid.view.Surface): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
					public getNextMediaItemIndex(): number;
					public getPlaybackSpeed(): number;
					public getPlaylistMetadata(): androidx.media2.common.MediaMetadata;
					public skipForward(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
					public play(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
					public getCurrentMediaItem(): androidx.media2.common.MediaItem;
					public setPlaylist(list0: java.util.List<string>, mediaMetadata1: androidx.media2.common.MediaMetadata): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
					public skipToPreviousItem(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
					public getCurrentMediaItemIndex(): number;
					public getVideoSize(): androidx.media2.common.VideoSize;
					public getRepeatMode(): number;
					public skipToNextItem(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
					public sendCustomCommand(sessionCommand0: androidx.media2.session.SessionCommand, bundle1: globalAndroid.os.Bundle): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
					public setRating(string0: string, rating1: androidx.media2.common.Rating): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
					public fastForward(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
					public getBrowserCompat(): globalAndroid.support.v4.media.MediaBrowserCompat;
					public setPlaybackSpeed(float0: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
					public getConnectedToken(): androidx.media2.session.SessionToken;
					public getBufferingState(): number;
					public getDuration(): number;
					public skipToPlaylistItem(int0: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
					public addPlaylistItem(int0: number, string1: string): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
					public getCurrentPosition(): number;
					public setMediaItem(string0: string): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
					public getShuffleMode(): number;
					public getPlayerState(): number;
					public getAllowedCommands(): androidx.media2.session.SessionCommandGroup;
					public isConnected(): boolean;
					public adjustVolume(int0: number, int1: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
					public replacePlaylistItem(int0: number, string1: string): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
					public pause(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
					public getSessionActivity(): globalAndroid.app.PendingIntent;
					public getTracks(): java.util.List<androidx.media2.common.SessionPlayer.TrackInfo>;
					public seekTo(long0: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
					public prepare(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
					public getBufferedPosition(): number;
					public removePlaylistItem(int0: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				}
				export class PlaybackInfo extends java.lang.Object implements androidx.versionedparcelable.VersionedParcelable {
					public static class: java.lang.Class<androidx.media2.session.MediaController.PlaybackInfo>;
					public static PLAYBACK_TYPE_LOCAL: number;
					public static PLAYBACK_TYPE_REMOTE: number;
					public getMaxVolume(): number;
					public equals(obj: any): boolean;
					public hashCode(): number;
					public getPlaybackType(): number;
					public getControlType(): number;
					public getAudioAttributes(): androidx.media.AudioAttributesCompat;
					public getCurrentVolume(): number;
				}
				export class VolumeDirection extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.media2.session.MediaController.VolumeDirection>;
					/**
					 * Constructs a new instance of the androidx.media2.session.MediaController() when extending the interface class.
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
				export class VolumeFlags extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.media2.session.MediaController.VolumeFlags>;
					/**
					 * Constructs a new instance of the androidx.media2.session.MediaController() when extending the interface class.
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
		export module session {
			export class MediaControllerImplBase extends java.lang.Object implements androidx.media2.session.MediaController.MediaControllerImpl {
				public static class: java.lang.Class<androidx.media2.session.MediaControllerImplBase>;
				public pause(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public getCurrentMediaItem(): androidx.media2.common.MediaItem;
				public setPlaybackSpeed(speed: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public getConnectedToken(): androidx.media2.session.SessionToken;
				public selectTrack(trackInfo: androidx.media2.common.SessionPlayer.TrackInfo): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public isConnected(): boolean;
				public removePlaylistItem(index: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public getAllowedCommands(): androidx.media2.session.SessionCommandGroup;
				public setRating(mediaId: string, rating: androidx.media2.common.Rating): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public getNextMediaItemIndex(): number;
				public seekTo(pos: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public getSelectedTrack(trackType: number): androidx.media2.common.SessionPlayer.TrackInfo;
				public setSurface(surface: globalAndroid.view.Surface): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public getPlaybackSpeed(): number;
				public close(): void;
				public movePlaylistItem(fromIndex: number, toIndex: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public play(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public getContext(): globalAndroid.content.Context;
				public getVideoSize(): androidx.media2.common.VideoSize;
				public getCurrentPosition(): number;
				public setMediaItem(mediaId: string): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public skipToNextItem(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public skipToPlaylistItem(index: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public prepare(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public setVolumeTo(value: number, flags: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public getPlaylistMetadata(): androidx.media2.common.MediaMetadata;
				public getBrowserCompat(): globalAndroid.support.v4.media.MediaBrowserCompat;
				public getPlayerState(): number;
				public getCurrentMediaItemIndex(): number;
				public addPlaylistItem(index: number, mediaId: string): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public getDuration(): number;
				public deselectTrack(trackInfo: androidx.media2.common.SessionPlayer.TrackInfo): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public getSessionActivity(): globalAndroid.app.PendingIntent;
				public skipBackward(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public rewind(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public getPreviousMediaItemIndex(): number;
				public setShuffleMode(shuffleMode: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public getPlaybackInfo(): androidx.media2.session.MediaController.PlaybackInfo;
				public skipToPreviousItem(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public getBufferedPosition(): number;
				public skipForward(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public adjustVolume(direction: number, flags: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public sendCustomCommand(command: androidx.media2.session.SessionCommand, bundle1: globalAndroid.os.Bundle): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public getRepeatMode(): number;
				public getShuffleMode(): number;
				public setMediaUri(uri: globalAndroid.net.Uri, extras: globalAndroid.os.Bundle): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public fastForward(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public updatePlaylistMetadata(metadata: androidx.media2.common.MediaMetadata): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public getBufferingState(): number;
				public setRepeatMode(repeatMode: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public getPlaylist(): java.util.List<androidx.media2.common.MediaItem>;
				public getTracks(): java.util.List<androidx.media2.common.SessionPlayer.TrackInfo>;
				public setPlaylist(list: java.util.List<string>, metadata: androidx.media2.common.MediaMetadata): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public replacePlaylistItem(index: number, mediaId: string): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
			}
			export module MediaControllerImplBase {
				export class RemoteSessionTask extends java.lang.Object {
					public static class: java.lang.Class<androidx.media2.session.MediaControllerImplBase.RemoteSessionTask>;
					/**
					 * Constructs a new instance of the androidx.media2.session.MediaControllerImplBase() when extending the interface class.
					 */
					public constructor(implementation: {
						run(iMediaSession0: androidx.media2.session.IMediaSession, int1: number): void;
					});
					public constructor();
					public run(iMediaSession0: androidx.media2.session.IMediaSession, int1: number): void;
				}
				export class SessionServiceConnection extends java.lang.Object implements globalAndroid.content.ServiceConnection {
					public static class: java.lang.Class<androidx.media2.session.MediaControllerImplBase.SessionServiceConnection>;
					public onServiceDisconnected(name: globalAndroid.content.ComponentName): void;
					public onBindingDied(name: globalAndroid.content.ComponentName): void;
					public onNullBinding(name: globalAndroid.content.ComponentName): void;
					public onServiceConnected(name: globalAndroid.content.ComponentName, service: globalAndroid.os.IBinder): void;
				}
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module session {
			export class MediaControllerImplLegacy extends java.lang.Object implements androidx.media2.session.MediaController.MediaControllerImpl {
				public static class: java.lang.Class<androidx.media2.session.MediaControllerImplLegacy>;
				public pause(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public getCurrentMediaItem(): androidx.media2.common.MediaItem;
				public setPlaybackSpeed(speed: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public getConnectedToken(): androidx.media2.session.SessionToken;
				public selectTrack(trackInfo: androidx.media2.common.SessionPlayer.TrackInfo): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public isConnected(): boolean;
				public removePlaylistItem(index: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public getAllowedCommands(): androidx.media2.session.SessionCommandGroup;
				public setRating(mediaId: string, rating: androidx.media2.common.Rating): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public getNextMediaItemIndex(): number;
				public seekTo(pos: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public getSelectedTrack(trackType: number): androidx.media2.common.SessionPlayer.TrackInfo;
				public setSurface(surface: globalAndroid.view.Surface): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public getPlaybackSpeed(): number;
				public close(): void;
				public movePlaylistItem(fromIndex: number, toIndex: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public play(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public getContext(): globalAndroid.content.Context;
				public getVideoSize(): androidx.media2.common.VideoSize;
				public getCurrentPosition(): number;
				public setMediaItem(mediaId: string): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public skipToNextItem(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public skipToPlaylistItem(index: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public prepare(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public setVolumeTo(value: number, flags: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public getPlaylistMetadata(): androidx.media2.common.MediaMetadata;
				public getBrowserCompat(): globalAndroid.support.v4.media.MediaBrowserCompat;
				public getPlayerState(): number;
				public getCurrentMediaItemIndex(): number;
				public addPlaylistItem(index: number, mediaId: string): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public getDuration(): number;
				public deselectTrack(trackInfo: androidx.media2.common.SessionPlayer.TrackInfo): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public getSessionActivity(): globalAndroid.app.PendingIntent;
				public skipBackward(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public rewind(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public getPreviousMediaItemIndex(): number;
				public setShuffleMode(shuffleMode: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public getPlaybackInfo(): androidx.media2.session.MediaController.PlaybackInfo;
				public skipToPreviousItem(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public getBufferedPosition(): number;
				public skipForward(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public adjustVolume(direction: number, flags: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public sendCustomCommand(command: androidx.media2.session.SessionCommand, bundle1: globalAndroid.os.Bundle): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public getRepeatMode(): number;
				public getShuffleMode(): number;
				public setMediaUri(uri: globalAndroid.net.Uri, extras: globalAndroid.os.Bundle): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public fastForward(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public updatePlaylistMetadata(metadata: androidx.media2.common.MediaMetadata): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public getBufferingState(): number;
				public setRepeatMode(repeatMode: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public getPlaylist(): java.util.List<androidx.media2.common.MediaItem>;
				public getTracks(): java.util.List<androidx.media2.common.SessionPlayer.TrackInfo>;
				public setPlaylist(list: java.util.List<string>, metadata: androidx.media2.common.MediaMetadata): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public replacePlaylistItem(index: number, mediaId: string): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
			}
			export module MediaControllerImplLegacy {
				export class ConnectionCallback extends globalAndroid.support.v4.media.MediaBrowserCompat.ConnectionCallback {
					public static class: java.lang.Class<androidx.media2.session.MediaControllerImplLegacy.ConnectionCallback>;
					public onConnected(): void;
					public onConnectionFailed(): void;
					public onConnectionSuspended(): void;
				}
				export class ControllerCompatCallback extends globalAndroid.support.v4.media.session.MediaControllerCompat.Callback {
					public static class: java.lang.Class<androidx.media2.session.MediaControllerImplLegacy.ControllerCompatCallback>;
					public onSessionEvent(event: string, extras: globalAndroid.os.Bundle): void;
					public onPlaybackStateChanged(state: globalAndroid.support.v4.media.session.PlaybackStateCompat): void;
					public onAudioInfoChanged(info: globalAndroid.support.v4.media.session.MediaControllerCompat.PlaybackInfo): void;
					public onAudioInfoChanged(infoCompat: globalAndroid.support.v4.media.session.MediaControllerCompat.PlaybackInfo): void;
					public onCaptioningEnabledChanged(enabled: boolean): void;
					public onMetadataChanged(metadata: globalAndroid.support.v4.media.MediaMetadataCompat): void;
					public onSessionDestroyed(): void;
					public onQueueChanged(queue: java.util.List<globalAndroid.support.v4.media.session.MediaSessionCompat.QueueItem>): void;
					public onShuffleModeChanged(shuffleMode: number): void;
					public binderDied(): void;
					public onQueueTitleChanged(title: string): void;
					public onRepeatModeChanged(repeatMode: number): void;
					public onSessionReady(): void;
					public onExtrasChanged(extras: globalAndroid.os.Bundle): void;
				}
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module session {
			export class MediaControllerStub extends androidx.media2.session.IMediaController.Stub {
				public static class: java.lang.Class<androidx.media2.session.MediaControllerStub>;
				public onShuffleModeChanged(seq: number, shuffleMode: number, currentIdx: number, previousIdx: number, nextIdx: number): void;
				public onVideoSizeChanged(seq: number, item: androidx.versionedparcelable.ParcelImpl, videoSize: androidx.versionedparcelable.ParcelImpl): void;
				public destroy(): void;
				public onAllowedCommandsChanged(seq: number, commands: androidx.versionedparcelable.ParcelImpl): void;
				public onPlaylistMetadataChanged(seq: number, metadata: androidx.versionedparcelable.ParcelImpl): void;
				public getInterfaceDescriptor(): string;
				public pingBinder(): boolean;
				public onSeekCompleted(seq: number, eventTimeMs: number, positionMs: number, seekPositionMs: number): void;
				public onRepeatModeChanged(seq: number, repeatMode: number, currentIdx: number, previousIdx: number, nextIdx: number): void;
				public onCustomCommand(seq: number, commandParcel: androidx.versionedparcelable.ParcelImpl, bundle2: globalAndroid.os.Bundle): void;
				public onPlayerStateChanged(seq: number, eventTimeMs: number, positionMs: number, state: number): void;
				public queryLocalInterface(descriptor: string): globalAndroid.os.IInterface;
				public linkToDeath(recipient: globalAndroid.os.IBinder.DeathRecipient, flags: number): void;
				public onSetCustomLayout(seq: number, commandButtonList: java.util.List<androidx.versionedparcelable.ParcelImpl>): void;
				public onTrackDeselected(seq: number, trackInfoParcel: androidx.versionedparcelable.ParcelImpl): void;
				public dump(fd: java.io.FileDescriptor, fout: java.io.PrintWriter, strings2: native.Array<string>): void;
				public onPlaybackSpeedChanged(seq: number, eventTimeMs: number, positionMs: number, speed: number): void;
				public isBinderAlive(): boolean;
				public onSessionResult(seq: number, sessionResult: androidx.versionedparcelable.ParcelImpl): void;
				public onTrackSelected(seq: number, trackInfoParcel: androidx.versionedparcelable.ParcelImpl): void;
				public transact(code: number, data: globalAndroid.os.Parcel, reply: globalAndroid.os.Parcel, flags: number): boolean;
				public onSearchResultChanged(seq: number, query: string, itemCount: number, libraryParams: androidx.versionedparcelable.ParcelImpl): void;
				public onChildrenChanged(seq: number, parentId: string, itemCount: number, libraryParams: androidx.versionedparcelable.ParcelImpl): void;
				public onPlaybackCompleted(seq: number): void;
				public dump(fd: java.io.FileDescriptor, strings1: native.Array<string>): void;
				public onTrackInfoChanged(seq: number, trackInfoList: java.util.List<androidx.versionedparcelable.ParcelImpl>, selectedVideoParcel: androidx.versionedparcelable.ParcelImpl, selectedAudioParcel: androidx.versionedparcelable.ParcelImpl, selectedSubtitleParcel: androidx.versionedparcelable.ParcelImpl, selectedMetadataParcel: androidx.versionedparcelable.ParcelImpl): void;
				public onBufferingStateChanged(seq: number, item: androidx.versionedparcelable.ParcelImpl, state: number, bufferedPositionMs: number, eventTimeMs: number, positionMs: number): void;
				public onCurrentMediaItemChanged(seq: number, item: androidx.versionedparcelable.ParcelImpl, currentIdx: number, previousIdx: number, nextIdx: number): void;
				public onPlaybackInfoChanged(seq: number, playbackInfo: androidx.versionedparcelable.ParcelImpl): void;
				public onConnected(seq: number, connectionResult: androidx.versionedparcelable.ParcelImpl): void;
				public onLibraryResult(seq: number, libraryResult: androidx.versionedparcelable.ParcelImpl): void;
				public onPlaylistChanged(seq: number, listSlice: androidx.media2.common.ParcelImplListSlice, metadata: androidx.versionedparcelable.ParcelImpl, currentIdx: number, previousIdx: number, nextIdx: number): void;
				public unlinkToDeath(recipient: globalAndroid.os.IBinder.DeathRecipient, flags: number): boolean;
				public onDisconnected(seq: number): void;
				public dumpAsync(fd: java.io.FileDescriptor, strings1: native.Array<string>): void;
				public onSubtitleData(seq: number, item: androidx.versionedparcelable.ParcelImpl, track: androidx.versionedparcelable.ParcelImpl, data: androidx.versionedparcelable.ParcelImpl): void;
			}
			export module MediaControllerStub {
				export class BrowserTask extends java.lang.Object {
					public static class: java.lang.Class<androidx.media2.session.MediaControllerStub.BrowserTask>;
					/**
					 * Constructs a new instance of the androidx.media2.session.MediaControllerStub() when extending the interface class.
					 */
					public constructor(implementation: {
						run(mediaBrowserImplBase0: androidx.media2.session.MediaBrowserImplBase): void;
					});
					public constructor();
					public run(mediaBrowserImplBase0: androidx.media2.session.MediaBrowserImplBase): void;
				}
				export class ControllerTask extends java.lang.Object {
					public static class: java.lang.Class<androidx.media2.session.MediaControllerStub.ControllerTask>;
					/**
					 * Constructs a new instance of the androidx.media2.session.MediaControllerStub() when extending the interface class.
					 */
					public constructor(implementation: {
						run(mediaControllerImplBase0: androidx.media2.session.MediaControllerImplBase): void;
					});
					public constructor();
					public run(mediaControllerImplBase0: androidx.media2.session.MediaControllerImplBase): void;
				}
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module session {
			export class MediaInterface extends java.lang.Object {
				public static class: java.lang.Class<androidx.media2.session.MediaInterface>;
			}
			export module MediaInterface {
				export class SessionPlaybackControl extends java.lang.Object {
					public static class: java.lang.Class<androidx.media2.session.MediaInterface.SessionPlaybackControl>;
					/**
					 * Constructs a new instance of the androidx.media2.session.MediaInterface() when extending the interface class.
					 */
					public constructor(implementation: {
						prepare(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
						play(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
						pause(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
						seekTo(long0: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
						getPlayerState(): number;
						getCurrentPosition(): number;
						getDuration(): number;
						getBufferedPosition(): number;
						getBufferingState(): number;
						getPlaybackSpeed(): number;
						setPlaybackSpeed(float0: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
					});
					public constructor();
					public play(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
					public getPlayerState(): number;
					public getDuration(): number;
					public setPlaybackSpeed(float0: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
					public seekTo(long0: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
					public getBufferedPosition(): number;
					public prepare(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
					public pause(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
					public getCurrentPosition(): number;
					public getBufferingState(): number;
					public getPlaybackSpeed(): number;
				}
				export class SessionPlayer extends java.lang.Object implements androidx.media2.session.MediaInterface.SessionPlaybackControl, androidx.media2.session.MediaInterface.SessionPlaylistControl {
					public static class: java.lang.Class<androidx.media2.session.MediaInterface.SessionPlayer>;
					/**
					 * Constructs a new instance of the androidx.media2.session.MediaInterface() when extending the interface class.
					 */
					public constructor(implementation: {
						getVideoSize(): androidx.media2.common.VideoSize;
						setSurface(surface0: globalAndroid.view.Surface): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
						getTracks(): java.util.List<androidx.media2.common.SessionPlayer.TrackInfo>;
						selectTrack(trackInfo0: androidx.media2.common.SessionPlayer.TrackInfo): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
						deselectTrack(trackInfo0: androidx.media2.common.SessionPlayer.TrackInfo): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
						getSelectedTrack(int0: number): androidx.media2.common.SessionPlayer.TrackInfo;
						prepare(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
						play(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
						pause(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
						seekTo(long0: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
						getPlayerState(): number;
						getCurrentPosition(): number;
						getDuration(): number;
						getBufferedPosition(): number;
						getBufferingState(): number;
						getPlaybackSpeed(): number;
						setPlaybackSpeed(float0: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
						getPlaylist(): java.util.List<androidx.media2.common.MediaItem>;
						getPlaylistMetadata(): androidx.media2.common.MediaMetadata;
						setPlaylist(list0: java.util.List<androidx.media2.common.MediaItem>, mediaMetadata1: androidx.media2.common.MediaMetadata): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
						setMediaItem(mediaItem0: androidx.media2.common.MediaItem): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
						updatePlaylistMetadata(mediaMetadata0: androidx.media2.common.MediaMetadata): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
						getCurrentMediaItem(): androidx.media2.common.MediaItem;
						getCurrentMediaItemIndex(): number;
						getPreviousMediaItemIndex(): number;
						getNextMediaItemIndex(): number;
						skipToPlaylistItem(int0: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
						skipToPreviousItem(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
						skipToNextItem(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
						addPlaylistItem(int0: number, mediaItem1: androidx.media2.common.MediaItem): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
						removePlaylistItem(int0: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
						replacePlaylistItem(int0: number, mediaItem1: androidx.media2.common.MediaItem): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
						movePlaylistItem(int0: number, int1: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
						getRepeatMode(): number;
						setRepeatMode(int0: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
						getShuffleMode(): number;
						setShuffleMode(int0: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
					});
					public constructor();
					public getCurrentMediaItemIndex(): number;
					public getVideoSize(): androidx.media2.common.VideoSize;
					public getRepeatMode(): number;
					public seekTo(long0: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
					public getSelectedTrack(int0: number): androidx.media2.common.SessionPlayer.TrackInfo;
					public getBufferingState(): number;
					public skipToNextItem(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
					public play(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
					public getDuration(): number;
					public deselectTrack(trackInfo0: androidx.media2.common.SessionPlayer.TrackInfo): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
					public getPlaylist(): java.util.List<androidx.media2.common.MediaItem>;
					public addPlaylistItem(int0: number, mediaItem1: androidx.media2.common.MediaItem): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
					public setRepeatMode(int0: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
					public removePlaylistItem(int0: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
					public getCurrentPosition(): number;
					public updatePlaylistMetadata(mediaMetadata0: androidx.media2.common.MediaMetadata): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
					public getShuffleMode(): number;
					public getPreviousMediaItemIndex(): number;
					public getPlayerState(): number;
					public setPlaybackSpeed(float0: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
					public setPlaylist(list0: java.util.List<androidx.media2.common.MediaItem>, mediaMetadata1: androidx.media2.common.MediaMetadata): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
					public getNextMediaItemIndex(): number;
					public skipToPlaylistItem(int0: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
					public setShuffleMode(int0: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
					public replacePlaylistItem(int0: number, mediaItem1: androidx.media2.common.MediaItem): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
					public getPlaybackSpeed(): number;
					public setMediaItem(mediaItem0: androidx.media2.common.MediaItem): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
					public movePlaylistItem(int0: number, int1: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
					public getTracks(): java.util.List<androidx.media2.common.SessionPlayer.TrackInfo>;
					public getPlaylistMetadata(): androidx.media2.common.MediaMetadata;
					public getBufferedPosition(): number;
					public prepare(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
					public pause(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
					public getCurrentMediaItem(): androidx.media2.common.MediaItem;
					public skipToPreviousItem(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
					public setSurface(surface0: globalAndroid.view.Surface): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
					public selectTrack(trackInfo0: androidx.media2.common.SessionPlayer.TrackInfo): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				}
				export class SessionPlaylistControl extends java.lang.Object {
					public static class: java.lang.Class<androidx.media2.session.MediaInterface.SessionPlaylistControl>;
					/**
					 * Constructs a new instance of the androidx.media2.session.MediaInterface() when extending the interface class.
					 */
					public constructor(implementation: {
						getPlaylist(): java.util.List<androidx.media2.common.MediaItem>;
						getPlaylistMetadata(): androidx.media2.common.MediaMetadata;
						setPlaylist(list0: java.util.List<androidx.media2.common.MediaItem>, mediaMetadata1: androidx.media2.common.MediaMetadata): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
						setMediaItem(mediaItem0: androidx.media2.common.MediaItem): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
						updatePlaylistMetadata(mediaMetadata0: androidx.media2.common.MediaMetadata): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
						getCurrentMediaItem(): androidx.media2.common.MediaItem;
						getCurrentMediaItemIndex(): number;
						getPreviousMediaItemIndex(): number;
						getNextMediaItemIndex(): number;
						skipToPlaylistItem(int0: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
						skipToPreviousItem(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
						skipToNextItem(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
						addPlaylistItem(int0: number, mediaItem1: androidx.media2.common.MediaItem): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
						removePlaylistItem(int0: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
						replacePlaylistItem(int0: number, mediaItem1: androidx.media2.common.MediaItem): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
						movePlaylistItem(int0: number, int1: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
						getRepeatMode(): number;
						setRepeatMode(int0: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
						getShuffleMode(): number;
						setShuffleMode(int0: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
					});
					public constructor();
					public getCurrentMediaItemIndex(): number;
					public setPlaylist(list0: java.util.List<androidx.media2.common.MediaItem>, mediaMetadata1: androidx.media2.common.MediaMetadata): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
					public getRepeatMode(): number;
					public getNextMediaItemIndex(): number;
					public skipToPlaylistItem(int0: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
					public setShuffleMode(int0: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
					public replacePlaylistItem(int0: number, mediaItem1: androidx.media2.common.MediaItem): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
					public setMediaItem(mediaItem0: androidx.media2.common.MediaItem): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
					public movePlaylistItem(int0: number, int1: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
					public skipToNextItem(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
					public getPlaylistMetadata(): androidx.media2.common.MediaMetadata;
					public getPlaylist(): java.util.List<androidx.media2.common.MediaItem>;
					public addPlaylistItem(int0: number, mediaItem1: androidx.media2.common.MediaItem): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
					public setRepeatMode(int0: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
					public removePlaylistItem(int0: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
					public updatePlaylistMetadata(mediaMetadata0: androidx.media2.common.MediaMetadata): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
					public getCurrentMediaItem(): androidx.media2.common.MediaItem;
					public skipToPreviousItem(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
					public getShuffleMode(): number;
					public getPreviousMediaItemIndex(): number;
				}
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module session {
			export abstract class MediaLibraryService extends androidx.media2.session.MediaSessionService {
				public static class: java.lang.Class<androidx.media2.session.MediaLibraryService>;
				public static SERVICE_INTERFACE: string;
				public onTrimMemory(level: number): void;
				public constructor(base: globalAndroid.content.Context);
				public onGetSession(controllerInfo0: androidx.media2.session.MediaSession.ControllerInfo): androidx.media2.session.MediaSession;
				public onGetSession(controllerInfo0: androidx.media2.session.MediaSession.ControllerInfo): androidx.media2.session.MediaLibraryService.MediaLibrarySession;
				public constructor();
				public onBind(intent: globalAndroid.content.Intent): globalAndroid.os.IBinder;
			}
			export module MediaLibraryService {
				export class LibraryParams extends java.lang.Object implements androidx.versionedparcelable.VersionedParcelable {
					public static class: java.lang.Class<androidx.media2.session.MediaLibraryService.LibraryParams>;
					public isRecent(): boolean;
					public getExtras(): globalAndroid.os.Bundle;
					public isSuggested(): boolean;
					public isOffline(): boolean;
				}
				export module LibraryParams {
					export class Builder extends java.lang.Object {
						public static class: java.lang.Class<androidx.media2.session.MediaLibraryService.LibraryParams.Builder>;
						public setExtras(extras: globalAndroid.os.Bundle): androidx.media2.session.MediaLibraryService.LibraryParams.Builder;
						public build(): androidx.media2.session.MediaLibraryService.LibraryParams;
						public constructor();
						public setRecent(recent: boolean): androidx.media2.session.MediaLibraryService.LibraryParams.Builder;
						public setSuggested(suggested: boolean): androidx.media2.session.MediaLibraryService.LibraryParams.Builder;
						public setOffline(offline: boolean): androidx.media2.session.MediaLibraryService.LibraryParams.Builder;
					}
				}
				export class MediaLibrarySession extends androidx.media2.session.MediaSession {
					public static class: java.lang.Class<androidx.media2.session.MediaLibraryService.MediaLibrarySession>;
					public notifyChildrenChanged(parentId: string, itemCount: number, params: androidx.media2.session.MediaLibraryService.LibraryParams): void;
					public notifyChildrenChanged(controller: androidx.media2.session.MediaSession.ControllerInfo, parentId: string, itemCount: number, params: androidx.media2.session.MediaLibraryService.LibraryParams): void;
					public notifySearchResultChanged(controller: androidx.media2.session.MediaSession.ControllerInfo, query: string, itemCount: number, params: androidx.media2.session.MediaLibraryService.LibraryParams): void;
					public close(): void;
				}
				export module MediaLibrarySession {
					export class Builder extends androidx.media2.session.MediaSession.BuilderBase<androidx.media2.session.MediaLibraryService.MediaLibrarySession,androidx.media2.session.MediaLibraryService.MediaLibrarySession.Builder,androidx.media2.session.MediaLibraryService.MediaLibrarySession.MediaLibrarySessionCallback> {
						public static class: java.lang.Class<androidx.media2.session.MediaLibraryService.MediaLibrarySession.Builder>;
						public setId(id: string): androidx.media2.session.MediaLibraryService.MediaLibrarySession.Builder;
						public build(): androidx.media2.session.MediaLibraryService.MediaLibrarySession;
						public setExtras(extras: globalAndroid.os.Bundle): androidx.media2.session.MediaLibraryService.MediaLibrarySession.Builder;
						public setSessionActivity(pi: globalAndroid.app.PendingIntent): androidx.media2.session.MediaLibraryService.MediaLibrarySession.Builder;
						public constructor(service: androidx.media2.session.MediaLibraryService, player: androidx.media2.common.SessionPlayer, callbackExecutor: java.util.concurrent.Executor, callback: androidx.media2.session.MediaLibraryService.MediaLibrarySession.MediaLibrarySessionCallback);
					}
					export class MediaLibrarySessionCallback extends androidx.media2.session.MediaSession.SessionCallback {
						public static class: java.lang.Class<androidx.media2.session.MediaLibraryService.MediaLibrarySession.MediaLibrarySessionCallback>;
						public constructor();
						public onUnsubscribe(session: androidx.media2.session.MediaLibraryService.MediaLibrarySession, controller: androidx.media2.session.MediaSession.ControllerInfo, parentId: string): number;
						public onGetChildren(session: androidx.media2.session.MediaLibraryService.MediaLibrarySession, controller: androidx.media2.session.MediaSession.ControllerInfo, parentId: string, page: number, pageSize: number, params: androidx.media2.session.MediaLibraryService.LibraryParams): androidx.media2.session.LibraryResult;
						public onSubscribe(session: androidx.media2.session.MediaLibraryService.MediaLibrarySession, controller: androidx.media2.session.MediaSession.ControllerInfo, parentId: string, params: androidx.media2.session.MediaLibraryService.LibraryParams): number;
						public onSearch(session: androidx.media2.session.MediaLibraryService.MediaLibrarySession, controller: androidx.media2.session.MediaSession.ControllerInfo, query: string, params: androidx.media2.session.MediaLibraryService.LibraryParams): number;
						public onGetSearchResult(session: androidx.media2.session.MediaLibraryService.MediaLibrarySession, controller: androidx.media2.session.MediaSession.ControllerInfo, query: string, page: number, pageSize: number, params: androidx.media2.session.MediaLibraryService.LibraryParams): androidx.media2.session.LibraryResult;
						public onGetItem(session: androidx.media2.session.MediaLibraryService.MediaLibrarySession, controller: androidx.media2.session.MediaSession.ControllerInfo, mediaId: string): androidx.media2.session.LibraryResult;
						public onGetLibraryRoot(session: androidx.media2.session.MediaLibraryService.MediaLibrarySession, controller: androidx.media2.session.MediaSession.ControllerInfo, params: androidx.media2.session.MediaLibraryService.LibraryParams): androidx.media2.session.LibraryResult;
					}
					export class MediaLibrarySessionImpl extends java.lang.Object implements androidx.media2.session.MediaSession.MediaSessionImpl {
						public static class: java.lang.Class<androidx.media2.session.MediaLibraryService.MediaLibrarySession.MediaLibrarySessionImpl>;
						/**
						 * Constructs a new instance of the androidx.media2.session.MediaLibraryService() when extending the interface class.
						 */
						public constructor(implementation: {
							notifyChildrenChanged(string0: string, int1: number, libraryParams2: androidx.media2.session.MediaLibraryService.LibraryParams): void;
							notifyChildrenChanged(controllerInfo0: androidx.media2.session.MediaSession.ControllerInfo, string1: string, int2: number, libraryParams3: androidx.media2.session.MediaLibraryService.LibraryParams): void;
							notifySearchResultChanged(controllerInfo0: androidx.media2.session.MediaSession.ControllerInfo, string1: string, int2: number, libraryParams3: androidx.media2.session.MediaLibraryService.LibraryParams): void;
							onGetLibraryRootOnExecutor(controllerInfo0: androidx.media2.session.MediaSession.ControllerInfo, libraryParams1: androidx.media2.session.MediaLibraryService.LibraryParams): androidx.media2.session.LibraryResult;
							onGetItemOnExecutor(controllerInfo0: androidx.media2.session.MediaSession.ControllerInfo, string1: string): androidx.media2.session.LibraryResult;
							onGetChildrenOnExecutor(controllerInfo0: androidx.media2.session.MediaSession.ControllerInfo, string1: string, int2: number, int3: number, libraryParams4: androidx.media2.session.MediaLibraryService.LibraryParams): androidx.media2.session.LibraryResult;
							onSubscribeOnExecutor(controllerInfo0: androidx.media2.session.MediaSession.ControllerInfo, string1: string, libraryParams2: androidx.media2.session.MediaLibraryService.LibraryParams): number;
							onUnsubscribeOnExecutor(controllerInfo0: androidx.media2.session.MediaSession.ControllerInfo, string1: string): number;
							onSearchOnExecutor(controllerInfo0: androidx.media2.session.MediaSession.ControllerInfo, string1: string, libraryParams2: androidx.media2.session.MediaLibraryService.LibraryParams): number;
							onGetSearchResultOnExecutor(controllerInfo0: androidx.media2.session.MediaSession.ControllerInfo, string1: string, int2: number, int3: number, libraryParams4: androidx.media2.session.MediaLibraryService.LibraryParams): androidx.media2.session.LibraryResult;
							getInstance(): androidx.media2.session.MediaLibraryService.MediaLibrarySession;
							getCallback(): androidx.media2.session.MediaLibraryService.MediaLibrarySession.MediaLibrarySessionCallback;
							getCallback(): androidx.media2.session.MediaSession.SessionCallback;
							getInstance(): androidx.media2.session.MediaSession;
							updatePlayer(sessionPlayer0: androidx.media2.common.SessionPlayer, sessionPlayer1: androidx.media2.common.SessionPlayer): void;
							updatePlayer(sessionPlayer0: androidx.media2.common.SessionPlayer): void;
							getPlayer(): androidx.media2.common.SessionPlayer;
							getId(): string;
							getUri(): globalAndroid.net.Uri;
							getToken(): androidx.media2.session.SessionToken;
							getConnectedControllers(): java.util.List<androidx.media2.session.MediaSession.ControllerInfo>;
							isConnected(controllerInfo0: androidx.media2.session.MediaSession.ControllerInfo): boolean;
							setCustomLayout(controllerInfo0: androidx.media2.session.MediaSession.ControllerInfo, list1: java.util.List<androidx.media2.session.MediaSession.CommandButton>): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
							setAllowedCommands(controllerInfo0: androidx.media2.session.MediaSession.ControllerInfo, sessionCommandGroup1: androidx.media2.session.SessionCommandGroup): void;
							broadcastCustomCommand(sessionCommand0: androidx.media2.session.SessionCommand, bundle1: globalAndroid.os.Bundle): void;
							sendCustomCommand(controllerInfo0: androidx.media2.session.MediaSession.ControllerInfo, sessionCommand1: androidx.media2.session.SessionCommand, bundle2: globalAndroid.os.Bundle): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
							getInstance(): androidx.media2.session.MediaSession;
							getSessionCompat(): globalAndroid.support.v4.media.session.MediaSessionCompat;
							setLegacyControllerConnectionTimeoutMs(long0: number): void;
							getContext(): globalAndroid.content.Context;
							getCallbackExecutor(): java.util.concurrent.Executor;
							getCallback(): androidx.media2.session.MediaSession.SessionCallback;
							isClosed(): boolean;
							createPlaybackStateCompat(): globalAndroid.support.v4.media.session.PlaybackStateCompat;
							getPlaybackInfo(): androidx.media2.session.MediaController.PlaybackInfo;
							getSessionActivity(): globalAndroid.app.PendingIntent;
							getLegacyBrowserServiceBinder(): globalAndroid.os.IBinder;
							connectFromService(iMediaController0: androidx.media2.session.IMediaController, int1: number, string2: string, int3: number, int4: number, bundle5: globalAndroid.os.Bundle): void;
							getVideoSize(): androidx.media2.common.VideoSize;
							setSurface(surface0: globalAndroid.view.Surface): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
							getTracks(): java.util.List<androidx.media2.common.SessionPlayer.TrackInfo>;
							selectTrack(trackInfo0: androidx.media2.common.SessionPlayer.TrackInfo): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
							deselectTrack(trackInfo0: androidx.media2.common.SessionPlayer.TrackInfo): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
							getSelectedTrack(int0: number): androidx.media2.common.SessionPlayer.TrackInfo;
							close(): void;
							prepare(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
							play(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
							pause(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
							seekTo(long0: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
							getPlayerState(): number;
							getCurrentPosition(): number;
							getDuration(): number;
							getBufferedPosition(): number;
							getBufferingState(): number;
							getPlaybackSpeed(): number;
							setPlaybackSpeed(float0: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
							getPlaylist(): java.util.List<androidx.media2.common.MediaItem>;
							getPlaylistMetadata(): androidx.media2.common.MediaMetadata;
							setPlaylist(list0: java.util.List<androidx.media2.common.MediaItem>, mediaMetadata1: androidx.media2.common.MediaMetadata): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
							setMediaItem(mediaItem0: androidx.media2.common.MediaItem): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
							updatePlaylistMetadata(mediaMetadata0: androidx.media2.common.MediaMetadata): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
							getCurrentMediaItem(): androidx.media2.common.MediaItem;
							getCurrentMediaItemIndex(): number;
							getPreviousMediaItemIndex(): number;
							getNextMediaItemIndex(): number;
							skipToPlaylistItem(int0: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
							skipToPreviousItem(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
							skipToNextItem(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
							addPlaylistItem(int0: number, mediaItem1: androidx.media2.common.MediaItem): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
							removePlaylistItem(int0: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
							replacePlaylistItem(int0: number, mediaItem1: androidx.media2.common.MediaItem): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
							movePlaylistItem(int0: number, int1: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
							getRepeatMode(): number;
							setRepeatMode(int0: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
							getShuffleMode(): number;
							setShuffleMode(int0: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
							close(): void;
						});
						public constructor();
						public onSubscribeOnExecutor(controllerInfo0: androidx.media2.session.MediaSession.ControllerInfo, string1: string, libraryParams2: androidx.media2.session.MediaLibraryService.LibraryParams): number;
						public updatePlayer(sessionPlayer0: androidx.media2.common.SessionPlayer, sessionPlayer1: androidx.media2.common.SessionPlayer): void;
						public close(): void;
						public getNextMediaItemIndex(): number;
						public getCurrentMediaItemIndex(): number;
						public getInstance(): androidx.media2.session.MediaLibraryService.MediaLibrarySession;
						public notifySearchResultChanged(controllerInfo0: androidx.media2.session.MediaSession.ControllerInfo, string1: string, int2: number, libraryParams3: androidx.media2.session.MediaLibraryService.LibraryParams): void;
						public updatePlayer(sessionPlayer0: androidx.media2.common.SessionPlayer): void;
						public getUri(): globalAndroid.net.Uri;
						public addPlaylistItem(int0: number, mediaItem1: androidx.media2.common.MediaItem): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
						public isClosed(): boolean;
						public onGetChildrenOnExecutor(controllerInfo0: androidx.media2.session.MediaSession.ControllerInfo, string1: string, int2: number, int3: number, libraryParams4: androidx.media2.session.MediaLibraryService.LibraryParams): androidx.media2.session.LibraryResult;
						public removePlaylistItem(int0: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
						public getPlayerState(): number;
						public setPlaylist(list0: java.util.List<androidx.media2.common.MediaItem>, mediaMetadata1: androidx.media2.common.MediaMetadata): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
						public getCallback(): androidx.media2.session.MediaLibraryService.MediaLibrarySession.MediaLibrarySessionCallback;
						public getTracks(): java.util.List<androidx.media2.common.SessionPlayer.TrackInfo>;
						public movePlaylistItem(int0: number, int1: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
						public notifyChildrenChanged(string0: string, int1: number, libraryParams2: androidx.media2.session.MediaLibraryService.LibraryParams): void;
						public getCallbackExecutor(): java.util.concurrent.Executor;
						public pause(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
						public getShuffleMode(): number;
						public getSessionCompat(): globalAndroid.support.v4.media.session.MediaSessionCompat;
						public createPlaybackStateCompat(): globalAndroid.support.v4.media.session.PlaybackStateCompat;
						public replacePlaylistItem(int0: number, mediaItem1: androidx.media2.common.MediaItem): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
						public getSessionActivity(): globalAndroid.app.PendingIntent;
						public setSurface(surface0: globalAndroid.view.Surface): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
						public getContext(): globalAndroid.content.Context;
						public setPlaybackSpeed(float0: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
						public getPlaylistMetadata(): androidx.media2.common.MediaMetadata;
						public onSearchOnExecutor(controllerInfo0: androidx.media2.session.MediaSession.ControllerInfo, string1: string, libraryParams2: androidx.media2.session.MediaLibraryService.LibraryParams): number;
						public getToken(): androidx.media2.session.SessionToken;
						public getCurrentMediaItem(): androidx.media2.common.MediaItem;
						public skipToNextItem(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
						public setShuffleMode(int0: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
						public getInstance(): androidx.media2.session.MediaSession;
						public prepare(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
						public getPlayer(): androidx.media2.common.SessionPlayer;
						public onGetLibraryRootOnExecutor(controllerInfo0: androidx.media2.session.MediaSession.ControllerInfo, libraryParams1: androidx.media2.session.MediaLibraryService.LibraryParams): androidx.media2.session.LibraryResult;
						public getSelectedTrack(int0: number): androidx.media2.common.SessionPlayer.TrackInfo;
						public deselectTrack(trackInfo0: androidx.media2.common.SessionPlayer.TrackInfo): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
						public play(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
						public sendCustomCommand(controllerInfo0: androidx.media2.session.MediaSession.ControllerInfo, sessionCommand1: androidx.media2.session.SessionCommand, bundle2: globalAndroid.os.Bundle): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
						public getPlaybackInfo(): androidx.media2.session.MediaController.PlaybackInfo;
						public getPreviousMediaItemIndex(): number;
						public onUnsubscribeOnExecutor(controllerInfo0: androidx.media2.session.MediaSession.ControllerInfo, string1: string): number;
						public broadcastCustomCommand(sessionCommand0: androidx.media2.session.SessionCommand, bundle1: globalAndroid.os.Bundle): void;
						public setCustomLayout(controllerInfo0: androidx.media2.session.MediaSession.ControllerInfo, list1: java.util.List<androidx.media2.session.MediaSession.CommandButton>): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
						public getConnectedControllers(): java.util.List<androidx.media2.session.MediaSession.ControllerInfo>;
						public seekTo(long0: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
						public onGetItemOnExecutor(controllerInfo0: androidx.media2.session.MediaSession.ControllerInfo, string1: string): androidx.media2.session.LibraryResult;
						public onGetSearchResultOnExecutor(controllerInfo0: androidx.media2.session.MediaSession.ControllerInfo, string1: string, int2: number, int3: number, libraryParams4: androidx.media2.session.MediaLibraryService.LibraryParams): androidx.media2.session.LibraryResult;
						public updatePlaylistMetadata(mediaMetadata0: androidx.media2.common.MediaMetadata): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
						public isConnected(controllerInfo0: androidx.media2.session.MediaSession.ControllerInfo): boolean;
						public getVideoSize(): androidx.media2.common.VideoSize;
						public getId(): string;
						public getBufferedPosition(): number;
						public setAllowedCommands(controllerInfo0: androidx.media2.session.MediaSession.ControllerInfo, sessionCommandGroup1: androidx.media2.session.SessionCommandGroup): void;
						public getDuration(): number;
						public skipToPreviousItem(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
						public setMediaItem(mediaItem0: androidx.media2.common.MediaItem): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
						public getBufferingState(): number;
						public getRepeatMode(): number;
						public getPlaybackSpeed(): number;
						public setRepeatMode(int0: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
						public getLegacyBrowserServiceBinder(): globalAndroid.os.IBinder;
						public notifyChildrenChanged(controllerInfo0: androidx.media2.session.MediaSession.ControllerInfo, string1: string, int2: number, libraryParams3: androidx.media2.session.MediaLibraryService.LibraryParams): void;
						public getPlaylist(): java.util.List<androidx.media2.common.MediaItem>;
						public setLegacyControllerConnectionTimeoutMs(long0: number): void;
						public skipToPlaylistItem(int0: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
						public connectFromService(iMediaController0: androidx.media2.session.IMediaController, int1: number, string2: string, int3: number, int4: number, bundle5: globalAndroid.os.Bundle): void;
						public selectTrack(trackInfo0: androidx.media2.common.SessionPlayer.TrackInfo): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
						public getCallback(): androidx.media2.session.MediaSession.SessionCallback;
						public getCurrentPosition(): number;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module session {
			export class MediaLibraryServiceImplBase extends androidx.media2.session.MediaSessionServiceImplBase {
				public static class: java.lang.Class<androidx.media2.session.MediaLibraryServiceImplBase>;
				public onStartCommand(intent: globalAndroid.content.Intent, flags: number, startId: number): number;
				public onCreate(service: androidx.media2.session.MediaSessionService): void;
				public onDestroy(): void;
				public onUpdateNotification(session: androidx.media2.session.MediaSession): androidx.media2.session.MediaSessionService.MediaNotification;
				public removeSession(session: androidx.media2.session.MediaSession): void;
				public addSession(session: androidx.media2.session.MediaSession): void;
				public getSessions(): java.util.List<androidx.media2.session.MediaSession>;
				public onBind(intent: globalAndroid.content.Intent): globalAndroid.os.IBinder;
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module session {
			export class MediaLibraryServiceLegacyStub extends androidx.media2.session.MediaSessionServiceLegacyStub {
				public static class: java.lang.Class<androidx.media2.session.MediaLibraryServiceLegacyStub>;
				public onTrimMemory(level: number): void;
				public onLoadItem(itemId: string, result: androidx.media.MediaBrowserServiceCompat.Result<globalAndroid.support.v4.media.MediaBrowserCompat.MediaItem>): void;
				public onSearch(query: string, extras: globalAndroid.os.Bundle, result: androidx.media.MediaBrowserServiceCompat.Result<java.util.List<globalAndroid.support.v4.media.MediaBrowserCompat.MediaItem>>): void;
				public onLoadChildren(parentId: string, result: androidx.media.MediaBrowserServiceCompat.Result<java.util.List<globalAndroid.support.v4.media.MediaBrowserCompat.MediaItem>>): void;
				public onUnsubscribe(id: string): void;
				public onGetRoot(clientPackageName: string, clientUid: number, rootHints: globalAndroid.os.Bundle): androidx.media.MediaBrowserServiceCompat.BrowserRoot;
				public onSubscribe(id: string, option: globalAndroid.os.Bundle): void;
				public onCustomAction(action: string, extras: globalAndroid.os.Bundle, result: androidx.media.MediaBrowserServiceCompat.Result<globalAndroid.os.Bundle>): void;
				public onLoadChildren(parentId: string, result: androidx.media.MediaBrowserServiceCompat.Result<java.util.List<globalAndroid.support.v4.media.MediaBrowserCompat.MediaItem>>, options: globalAndroid.os.Bundle): void;
			}
			export module MediaLibraryServiceLegacyStub {
				export abstract class BaseBrowserLegacyCb extends androidx.media2.session.MediaSession.ControllerCb {
					public static class: java.lang.Class<androidx.media2.session.MediaLibraryServiceLegacyStub.BaseBrowserLegacyCb>;
				}
				export class BrowserLegacyCb extends androidx.media2.session.MediaLibraryServiceLegacyStub.BaseBrowserLegacyCb {
					public static class: java.lang.Class<androidx.media2.session.MediaLibraryServiceLegacyStub.BrowserLegacyCb>;
					public equals(obj: any): boolean;
					public hashCode(): number;
				}
				export class BrowserLegacyCbForBroadcast extends androidx.media2.session.MediaLibraryServiceLegacyStub.BaseBrowserLegacyCb {
					public static class: java.lang.Class<androidx.media2.session.MediaLibraryServiceLegacyStub.BrowserLegacyCbForBroadcast>;
				}
				export class SearchRequest extends java.lang.Object {
					public static class: java.lang.Class<androidx.media2.session.MediaLibraryServiceLegacyStub.SearchRequest>;
					public mController: androidx.media2.session.MediaSession.ControllerInfo;
					public mRemoteUserInfo: androidx.media.MediaSessionManager.RemoteUserInfo;
					public mQuery: string;
					public mExtras: globalAndroid.os.Bundle;
					public mResult: androidx.media.MediaBrowserServiceCompat.Result<java.util.List<globalAndroid.support.v4.media.MediaBrowserCompat.MediaItem>>;
				}
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module session {
			export class MediaLibrarySessionImplBase extends androidx.media2.session.MediaSessionImplBase implements androidx.media2.session.MediaLibraryService.MediaLibrarySession.MediaLibrarySessionImpl {
				public static class: java.lang.Class<androidx.media2.session.MediaLibrarySessionImplBase>;
				public getCurrentMediaItem(): androidx.media2.common.MediaItem;
				public getId(): string;
				public notifyChildrenChanged(parentId: string, itemCount: number, params: androidx.media2.session.MediaLibraryService.LibraryParams): void;
				public prepare(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public movePlaylistItem(fromIndex: number, toIndex: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public broadcastCustomCommand(command: androidx.media2.session.SessionCommand, bundle1: globalAndroid.os.Bundle): void;
				public pause(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public setCustomLayout(controller: androidx.media2.session.MediaSession.ControllerInfo, layout: java.util.List<androidx.media2.session.MediaSession.CommandButton>): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public getCallback(): androidx.media2.session.MediaLibraryService.MediaLibrarySession.MediaLibrarySessionCallback;
				public onGetChildrenOnExecutor(controller: androidx.media2.session.MediaSession.ControllerInfo, parentId: string, page: number, pageSize: number, params: androidx.media2.session.MediaLibraryService.LibraryParams): androidx.media2.session.LibraryResult;
				public skipToPreviousItem(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public seekTo(pos: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public getUri(): globalAndroid.net.Uri;
				public skipToNextItem(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public setMediaItem(item: androidx.media2.common.MediaItem): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public createPlaybackStateCompat(): globalAndroid.support.v4.media.session.PlaybackStateCompat;
				public sendCustomCommand(controller: androidx.media2.session.MediaSession.ControllerInfo, command: androidx.media2.session.SessionCommand, bundle2: globalAndroid.os.Bundle): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public getConnectedControllers(): java.util.List<androidx.media2.session.MediaSession.ControllerInfo>;
				public onGetItemOnExecutor(controller: androidx.media2.session.MediaSession.ControllerInfo, mediaId: string): androidx.media2.session.LibraryResult;
				public getNextMediaItemIndex(): number;
				public getSelectedTrack(trackType: number): androidx.media2.common.SessionPlayer.TrackInfo;
				public getPlaybackSpeed(): number;
				public close(): void;
				public getSessionCompat(): globalAndroid.support.v4.media.session.MediaSessionCompat;
				public getContext(): globalAndroid.content.Context;
				public getVideoSize(): androidx.media2.common.VideoSize;
				public onGetSearchResultOnExecutor(controller: androidx.media2.session.MediaSession.ControllerInfo, query: string, page: number, pageSize: number, params: androidx.media2.session.MediaLibraryService.LibraryParams): androidx.media2.session.LibraryResult;
				public getInstance(): androidx.media2.session.MediaSession;
				public isClosed(): boolean;
				public onGetLibraryRootOnExecutor(controller: androidx.media2.session.MediaSession.ControllerInfo, params: androidx.media2.session.MediaLibraryService.LibraryParams): androidx.media2.session.LibraryResult;
				public setLegacyControllerConnectionTimeoutMs(timeoutMs: number): void;
				public addPlaylistItem(index: number, item: androidx.media2.common.MediaItem): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public getCurrentPosition(): number;
				public replacePlaylistItem(index: number, item: androidx.media2.common.MediaItem): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public getCallback(): androidx.media2.session.MediaSession.SessionCallback;
				public getToken(): androidx.media2.session.SessionToken;
				public setRepeatMode(repeatMode: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public isConnected(controller: androidx.media2.session.MediaSession.ControllerInfo): boolean;
				public deselectTrack(trackInfo: androidx.media2.common.SessionPlayer.TrackInfo): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public getPlaylistMetadata(): androidx.media2.common.MediaMetadata;
				public setShuffleMode(shuffleMode: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public setSurface(surface: globalAndroid.view.Surface): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public setPlaylist(list: java.util.List<androidx.media2.common.MediaItem>, metadata: androidx.media2.common.MediaMetadata): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public getPlayerState(): number;
				public getCurrentMediaItemIndex(): number;
				public getCallbackExecutor(): java.util.concurrent.Executor;
				public notifyChildrenChanged(controller: androidx.media2.session.MediaSession.ControllerInfo, parentId: string, itemCount: number, params: androidx.media2.session.MediaLibraryService.LibraryParams): void;
				public getDuration(): number;
				public getPlayer(): androidx.media2.common.SessionPlayer;
				public selectTrack(trackInfo: androidx.media2.common.SessionPlayer.TrackInfo): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public updatePlayer(player: androidx.media2.common.SessionPlayer, playlistAgent: androidx.media2.common.SessionPlayer): void;
				public removePlaylistItem(index: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public getInstance(): androidx.media2.session.MediaLibraryService.MediaLibrarySession;
				public onSubscribeOnExecutor(controller: androidx.media2.session.MediaSession.ControllerInfo, parentId: string, params: androidx.media2.session.MediaLibraryService.LibraryParams): number;
				public getSessionActivity(): globalAndroid.app.PendingIntent;
				public play(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public getLegacyBrowserServiceBinder(): globalAndroid.os.IBinder;
				public updatePlayer(player: androidx.media2.common.SessionPlayer): void;
				public updatePlaylistMetadata(metadata: androidx.media2.common.MediaMetadata): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public getPreviousMediaItemIndex(): number;
				public getPlaybackInfo(): androidx.media2.session.MediaController.PlaybackInfo;
				public getBufferedPosition(): number;
				public setAllowedCommands(controller: androidx.media2.session.MediaSession.ControllerInfo, commands: androidx.media2.session.SessionCommandGroup): void;
				public connectFromService(caller: androidx.media2.session.IMediaController, controllerVersion: number, packageName: string, pid: number, uid: number, connectionHints: globalAndroid.os.Bundle): void;
				public getRepeatMode(): number;
				public getShuffleMode(): number;
				public onUnsubscribeOnExecutor(controller: androidx.media2.session.MediaSession.ControllerInfo, parentId: string): number;
				public getBufferingState(): number;
				public onSearchOnExecutor(controller: androidx.media2.session.MediaSession.ControllerInfo, query: string, params: androidx.media2.session.MediaLibraryService.LibraryParams): number;
				public notifySearchResultChanged(controller: androidx.media2.session.MediaSession.ControllerInfo, query: string, itemCount: number, params: androidx.media2.session.MediaLibraryService.LibraryParams): void;
				public skipToPlaylistItem(index: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public setPlaybackSpeed(speed: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public getPlaylist(): java.util.List<androidx.media2.common.MediaItem>;
				public getTracks(): java.util.List<androidx.media2.common.SessionPlayer.TrackInfo>;
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module session {
			export class MediaNotificationHandler extends androidx.media2.session.MediaSession.SessionCallback.ForegroundServiceEventCallback {
				public static class: java.lang.Class<androidx.media2.session.MediaNotificationHandler>;
				public onNotificationUpdateNeeded(session: androidx.media2.session.MediaSession): void;
				public onUpdateNotification(session: androidx.media2.session.MediaSession): androidx.media2.session.MediaSessionService.MediaNotification;
				public onPlayerStateChanged(session: androidx.media2.session.MediaSession, state: number): void;
				public onSessionClosed(session: androidx.media2.session.MediaSession): void;
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module session {
			export class MediaSession extends java.lang.Object implements java.io.Closeable {
				public static class: java.lang.Class<androidx.media2.session.MediaSession>;
				public getSessionCompatToken(): globalAndroid.support.v4.media.session.MediaSessionCompat.Token;
				public close(): void;
				public getId(): string;
				public getSessionCompat(): globalAndroid.support.v4.media.session.MediaSessionCompat;
				public setAllowedCommands(controller: androidx.media2.session.MediaSession.ControllerInfo, commands: androidx.media2.session.SessionCommandGroup): void;
				public isClosed(): boolean;
				public getPlayer(): androidx.media2.common.SessionPlayer;
				public broadcastCustomCommand(command: androidx.media2.session.SessionCommand, bundle1: globalAndroid.os.Bundle): void;
				public setLegacyControllerConnectionTimeoutMs(timeoutMs: number): void;
				public setCustomLayout(controller: androidx.media2.session.MediaSession.ControllerInfo, layout: java.util.List<androidx.media2.session.MediaSession.CommandButton>): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public getToken(): androidx.media2.session.SessionToken;
				public updatePlayer(player: androidx.media2.common.SessionPlayer): void;
				public sendCustomCommand(controller: androidx.media2.session.MediaSession.ControllerInfo, command: androidx.media2.session.SessionCommand, bundle2: globalAndroid.os.Bundle): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public getConnectedControllers(): java.util.List<androidx.media2.session.MediaSession.ControllerInfo>;
			}
			export module MediaSession {
				export class Builder extends androidx.media2.session.MediaSession.BuilderBase<androidx.media2.session.MediaSession,androidx.media2.session.MediaSession.Builder,androidx.media2.session.MediaSession.SessionCallback> {
					public static class: java.lang.Class<androidx.media2.session.MediaSession.Builder>;
					public constructor(context: globalAndroid.content.Context, player: androidx.media2.common.SessionPlayer);
					public setExtras(extras: globalAndroid.os.Bundle): androidx.media2.session.MediaSession.Builder;
					public setSessionCallback(executor: java.util.concurrent.Executor, callback: androidx.media2.session.MediaSession.SessionCallback): androidx.media2.session.MediaSession.Builder;
					public setId(id: string): androidx.media2.session.MediaSession.Builder;
					public build(): androidx.media2.session.MediaSession;
					public setSessionActivity(pi: globalAndroid.app.PendingIntent): androidx.media2.session.MediaSession.Builder;
				}
				export abstract class BuilderBase<T, U, C>  extends java.lang.Object {
					public static class: java.lang.Class<androidx.media2.session.MediaSession.BuilderBase<any,any,any>>;
				}
				export class CommandButton extends java.lang.Object implements androidx.versionedparcelable.VersionedParcelable {
					public static class: java.lang.Class<androidx.media2.session.MediaSession.CommandButton>;
					public getIconResId(): number;
					public getDisplayName(): string;
					public getExtras(): globalAndroid.os.Bundle;
					public isEnabled(): boolean;
					public getCommand(): androidx.media2.session.SessionCommand;
				}
				export module CommandButton {
					export class Builder extends java.lang.Object {
						public static class: java.lang.Class<androidx.media2.session.MediaSession.CommandButton.Builder>;
						public constructor();
						public setCommand(command: androidx.media2.session.SessionCommand): androidx.media2.session.MediaSession.CommandButton.Builder;
						public setDisplayName(displayName: string): androidx.media2.session.MediaSession.CommandButton.Builder;
						public setExtras(extras: globalAndroid.os.Bundle): androidx.media2.session.MediaSession.CommandButton.Builder;
						public build(): androidx.media2.session.MediaSession.CommandButton;
						public setEnabled(enabled: boolean): androidx.media2.session.MediaSession.CommandButton.Builder;
						public setIconResId(resId: number): androidx.media2.session.MediaSession.CommandButton.Builder;
					}
				}
				export abstract class ControllerCb extends java.lang.Object {
					public static class: java.lang.Class<androidx.media2.session.MediaSession.ControllerCb>;
				}
				export class ControllerInfo extends java.lang.Object {
					public static class: java.lang.Class<androidx.media2.session.MediaSession.ControllerInfo>;
					public equals(obj: any): boolean;
					public toString(): string;
					public isTrusted(): boolean;
					public getPackageName(): string;
					public getUid(): number;
					public getConnectionHints(): globalAndroid.os.Bundle;
					public hashCode(): number;
				}
				export class MediaSessionImpl extends java.lang.Object implements androidx.media2.session.MediaInterface.SessionPlayer, java.io.Closeable {
					public static class: java.lang.Class<androidx.media2.session.MediaSession.MediaSessionImpl>;
					/**
					 * Constructs a new instance of the androidx.media2.session.MediaSession() when extending the interface class.
					 */
					public constructor(implementation: {
						updatePlayer(sessionPlayer0: androidx.media2.common.SessionPlayer, sessionPlayer1: androidx.media2.common.SessionPlayer): void;
						updatePlayer(sessionPlayer0: androidx.media2.common.SessionPlayer): void;
						getPlayer(): androidx.media2.common.SessionPlayer;
						getId(): string;
						getUri(): globalAndroid.net.Uri;
						getToken(): androidx.media2.session.SessionToken;
						getConnectedControllers(): java.util.List<androidx.media2.session.MediaSession.ControllerInfo>;
						isConnected(controllerInfo0: androidx.media2.session.MediaSession.ControllerInfo): boolean;
						setCustomLayout(controllerInfo0: androidx.media2.session.MediaSession.ControllerInfo, list1: java.util.List<androidx.media2.session.MediaSession.CommandButton>): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
						setAllowedCommands(controllerInfo0: androidx.media2.session.MediaSession.ControllerInfo, sessionCommandGroup1: androidx.media2.session.SessionCommandGroup): void;
						broadcastCustomCommand(sessionCommand0: androidx.media2.session.SessionCommand, bundle1: globalAndroid.os.Bundle): void;
						sendCustomCommand(controllerInfo0: androidx.media2.session.MediaSession.ControllerInfo, sessionCommand1: androidx.media2.session.SessionCommand, bundle2: globalAndroid.os.Bundle): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
						getInstance(): androidx.media2.session.MediaSession;
						getSessionCompat(): globalAndroid.support.v4.media.session.MediaSessionCompat;
						setLegacyControllerConnectionTimeoutMs(long0: number): void;
						getContext(): globalAndroid.content.Context;
						getCallbackExecutor(): java.util.concurrent.Executor;
						getCallback(): androidx.media2.session.MediaSession.SessionCallback;
						isClosed(): boolean;
						createPlaybackStateCompat(): globalAndroid.support.v4.media.session.PlaybackStateCompat;
						getPlaybackInfo(): androidx.media2.session.MediaController.PlaybackInfo;
						getSessionActivity(): globalAndroid.app.PendingIntent;
						getLegacyBrowserServiceBinder(): globalAndroid.os.IBinder;
						connectFromService(iMediaController0: androidx.media2.session.IMediaController, int1: number, string2: string, int3: number, int4: number, bundle5: globalAndroid.os.Bundle): void;
						getVideoSize(): androidx.media2.common.VideoSize;
						setSurface(surface0: globalAndroid.view.Surface): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
						getTracks(): java.util.List<androidx.media2.common.SessionPlayer.TrackInfo>;
						selectTrack(trackInfo0: androidx.media2.common.SessionPlayer.TrackInfo): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
						deselectTrack(trackInfo0: androidx.media2.common.SessionPlayer.TrackInfo): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
						getSelectedTrack(int0: number): androidx.media2.common.SessionPlayer.TrackInfo;
						close(): void;
						prepare(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
						play(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
						pause(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
						seekTo(long0: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
						getPlayerState(): number;
						getCurrentPosition(): number;
						getDuration(): number;
						getBufferedPosition(): number;
						getBufferingState(): number;
						getPlaybackSpeed(): number;
						setPlaybackSpeed(float0: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
						getPlaylist(): java.util.List<androidx.media2.common.MediaItem>;
						getPlaylistMetadata(): androidx.media2.common.MediaMetadata;
						setPlaylist(list0: java.util.List<androidx.media2.common.MediaItem>, mediaMetadata1: androidx.media2.common.MediaMetadata): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
						setMediaItem(mediaItem0: androidx.media2.common.MediaItem): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
						updatePlaylistMetadata(mediaMetadata0: androidx.media2.common.MediaMetadata): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
						getCurrentMediaItem(): androidx.media2.common.MediaItem;
						getCurrentMediaItemIndex(): number;
						getPreviousMediaItemIndex(): number;
						getNextMediaItemIndex(): number;
						skipToPlaylistItem(int0: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
						skipToPreviousItem(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
						skipToNextItem(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
						addPlaylistItem(int0: number, mediaItem1: androidx.media2.common.MediaItem): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
						removePlaylistItem(int0: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
						replacePlaylistItem(int0: number, mediaItem1: androidx.media2.common.MediaItem): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
						movePlaylistItem(int0: number, int1: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
						getRepeatMode(): number;
						setRepeatMode(int0: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
						getShuffleMode(): number;
						setShuffleMode(int0: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
						close(): void;
					});
					public constructor();
					public getId(): string;
					public setLegacyControllerConnectionTimeoutMs(long0: number): void;
					public getSelectedTrack(int0: number): androidx.media2.common.SessionPlayer.TrackInfo;
					public getCallbackExecutor(): java.util.concurrent.Executor;
					public getPlaylist(): java.util.List<androidx.media2.common.MediaItem>;
					public getPlaybackInfo(): androidx.media2.session.MediaController.PlaybackInfo;
					public close(): void;
					public removePlaylistItem(int0: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
					public getContext(): globalAndroid.content.Context;
					public updatePlaylistMetadata(mediaMetadata0: androidx.media2.common.MediaMetadata): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
					public getLegacyBrowserServiceBinder(): globalAndroid.os.IBinder;
					public getPreviousMediaItemIndex(): number;
					public getPlayer(): androidx.media2.common.SessionPlayer;
					public setPlaybackSpeed(float0: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
					public setPlaylist(list0: java.util.List<androidx.media2.common.MediaItem>, mediaMetadata1: androidx.media2.common.MediaMetadata): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
					public getNextMediaItemIndex(): number;
					public isConnected(controllerInfo0: androidx.media2.session.MediaSession.ControllerInfo): boolean;
					public replacePlaylistItem(int0: number, mediaItem1: androidx.media2.common.MediaItem): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
					public getPlaybackSpeed(): number;
					public movePlaylistItem(int0: number, int1: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
					public getPlaylistMetadata(): androidx.media2.common.MediaMetadata;
					public pause(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
					public getCurrentMediaItem(): androidx.media2.common.MediaItem;
					public skipToPreviousItem(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
					public isClosed(): boolean;
					public getCurrentMediaItemIndex(): number;
					public getVideoSize(): androidx.media2.common.VideoSize;
					public getRepeatMode(): number;
					public getSessionCompat(): globalAndroid.support.v4.media.session.MediaSessionCompat;
					public seekTo(long0: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
					public getCallback(): androidx.media2.session.MediaSession.SessionCallback;
					public createPlaybackStateCompat(): globalAndroid.support.v4.media.session.PlaybackStateCompat;
					public getBufferingState(): number;
					public getConnectedControllers(): java.util.List<androidx.media2.session.MediaSession.ControllerInfo>;
					public broadcastCustomCommand(sessionCommand0: androidx.media2.session.SessionCommand, bundle1: globalAndroid.os.Bundle): void;
					public skipToNextItem(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
					public play(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
					public setAllowedCommands(controllerInfo0: androidx.media2.session.MediaSession.ControllerInfo, sessionCommandGroup1: androidx.media2.session.SessionCommandGroup): void;
					public getDuration(): number;
					public deselectTrack(trackInfo0: androidx.media2.common.SessionPlayer.TrackInfo): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
					public setCustomLayout(controllerInfo0: androidx.media2.session.MediaSession.ControllerInfo, list1: java.util.List<androidx.media2.session.MediaSession.CommandButton>): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
					public addPlaylistItem(int0: number, mediaItem1: androidx.media2.common.MediaItem): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
					public updatePlayer(sessionPlayer0: androidx.media2.common.SessionPlayer, sessionPlayer1: androidx.media2.common.SessionPlayer): void;
					public setRepeatMode(int0: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
					public getCurrentPosition(): number;
					public getToken(): androidx.media2.session.SessionToken;
					public getShuffleMode(): number;
					public getPlayerState(): number;
					public updatePlayer(sessionPlayer0: androidx.media2.common.SessionPlayer): void;
					public skipToPlaylistItem(int0: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
					public getInstance(): androidx.media2.session.MediaSession;
					public setShuffleMode(int0: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
					public getSessionActivity(): globalAndroid.app.PendingIntent;
					public setMediaItem(mediaItem0: androidx.media2.common.MediaItem): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
					public sendCustomCommand(controllerInfo0: androidx.media2.session.MediaSession.ControllerInfo, sessionCommand1: androidx.media2.session.SessionCommand, bundle2: globalAndroid.os.Bundle): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
					public getTracks(): java.util.List<androidx.media2.common.SessionPlayer.TrackInfo>;
					public getBufferedPosition(): number;
					public getUri(): globalAndroid.net.Uri;
					public prepare(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
					public setSurface(surface0: globalAndroid.view.Surface): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
					public connectFromService(iMediaController0: androidx.media2.session.IMediaController, int1: number, string2: string, int3: number, int4: number, bundle5: globalAndroid.os.Bundle): void;
					public selectTrack(trackInfo0: androidx.media2.common.SessionPlayer.TrackInfo): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				}
				export abstract class SessionCallback extends java.lang.Object {
					public static class: java.lang.Class<androidx.media2.session.MediaSession.SessionCallback>;
					public onConnect(session: androidx.media2.session.MediaSession, controller: androidx.media2.session.MediaSession.ControllerInfo): androidx.media2.session.SessionCommandGroup;
					public onPostConnect(session: androidx.media2.session.MediaSession, controller: androidx.media2.session.MediaSession.ControllerInfo): void;
					public onSkipBackward(session: androidx.media2.session.MediaSession, controller: androidx.media2.session.MediaSession.ControllerInfo): number;
					public onSetMediaUri(session: androidx.media2.session.MediaSession, controller: androidx.media2.session.MediaSession.ControllerInfo, uri: globalAndroid.net.Uri, extras: globalAndroid.os.Bundle): number;
					public onFastForward(session: androidx.media2.session.MediaSession, controller: androidx.media2.session.MediaSession.ControllerInfo): number;
					public constructor();
					public onSetRating(session: androidx.media2.session.MediaSession, controller: androidx.media2.session.MediaSession.ControllerInfo, mediaId: string, rating: androidx.media2.common.Rating): number;
					public onDisconnected(session: androidx.media2.session.MediaSession, controller: androidx.media2.session.MediaSession.ControllerInfo): void;
					public onRewind(session: androidx.media2.session.MediaSession, controller: androidx.media2.session.MediaSession.ControllerInfo): number;
					public onCommandRequest(session: androidx.media2.session.MediaSession, controller: androidx.media2.session.MediaSession.ControllerInfo, command: androidx.media2.session.SessionCommand): number;
					public onCustomCommand(session: androidx.media2.session.MediaSession, controller: androidx.media2.session.MediaSession.ControllerInfo, customCommand: androidx.media2.session.SessionCommand, bundle3: globalAndroid.os.Bundle): androidx.media2.session.SessionResult;
					public onSkipForward(session: androidx.media2.session.MediaSession, controller: androidx.media2.session.MediaSession.ControllerInfo): number;
					public onCreateMediaItem(session: androidx.media2.session.MediaSession, controller: androidx.media2.session.MediaSession.ControllerInfo, mediaId: string): androidx.media2.common.MediaItem;
				}
				export module SessionCallback {
					export abstract class ForegroundServiceEventCallback extends java.lang.Object {
						public static class: java.lang.Class<androidx.media2.session.MediaSession.SessionCallback.ForegroundServiceEventCallback>;
						public onPlayerStateChanged(session: androidx.media2.session.MediaSession, state: number): void;
						public onNotificationUpdateNeeded(session: androidx.media2.session.MediaSession): void;
						public onSessionClosed(session: androidx.media2.session.MediaSession): void;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module session {
			export class MediaSessionImplBase extends java.lang.Object implements androidx.media2.session.MediaSession.MediaSessionImpl {
				public static class: java.lang.Class<androidx.media2.session.MediaSessionImplBase>;
				public getCurrentMediaItem(): androidx.media2.common.MediaItem;
				public getId(): string;
				public prepare(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public movePlaylistItem(fromIndex: number, toIndex: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public broadcastCustomCommand(command: androidx.media2.session.SessionCommand, bundle1: globalAndroid.os.Bundle): void;
				public pause(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public setCustomLayout(controller: androidx.media2.session.MediaSession.ControllerInfo, layout: java.util.List<androidx.media2.session.MediaSession.CommandButton>): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public skipToPreviousItem(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public seekTo(pos: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public getUri(): globalAndroid.net.Uri;
				public skipToNextItem(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public setMediaItem(item: androidx.media2.common.MediaItem): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public createPlaybackStateCompat(): globalAndroid.support.v4.media.session.PlaybackStateCompat;
				public sendCustomCommand(controller: androidx.media2.session.MediaSession.ControllerInfo, command: androidx.media2.session.SessionCommand, bundle2: globalAndroid.os.Bundle): com.google.common.util.concurrent.ListenableFuture<androidx.media2.session.SessionResult>;
				public getConnectedControllers(): java.util.List<androidx.media2.session.MediaSession.ControllerInfo>;
				public getNextMediaItemIndex(): number;
				public getSelectedTrack(trackType: number): androidx.media2.common.SessionPlayer.TrackInfo;
				public getPlaybackSpeed(): number;
				public close(): void;
				public getSessionCompat(): globalAndroid.support.v4.media.session.MediaSessionCompat;
				public getContext(): globalAndroid.content.Context;
				public getVideoSize(): androidx.media2.common.VideoSize;
				public getInstance(): androidx.media2.session.MediaSession;
				public isClosed(): boolean;
				public setLegacyControllerConnectionTimeoutMs(timeoutMs: number): void;
				public addPlaylistItem(index: number, item: androidx.media2.common.MediaItem): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public getCurrentPosition(): number;
				public replacePlaylistItem(index: number, item: androidx.media2.common.MediaItem): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public getToken(): androidx.media2.session.SessionToken;
				public setRepeatMode(repeatMode: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public getCallback(): androidx.media2.session.MediaSession.SessionCallback;
				public isConnected(controller: androidx.media2.session.MediaSession.ControllerInfo): boolean;
				public getPlaylistMetadata(): androidx.media2.common.MediaMetadata;
				public deselectTrack(trackInfo: androidx.media2.common.SessionPlayer.TrackInfo): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public setShuffleMode(shuffleMode: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public setPlaylist(list: java.util.List<androidx.media2.common.MediaItem>, metadata: androidx.media2.common.MediaMetadata): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public setSurface(surface: globalAndroid.view.Surface): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public getPlayerState(): number;
				public getCurrentMediaItemIndex(): number;
				public getCallbackExecutor(): java.util.concurrent.Executor;
				public getDuration(): number;
				public getPlayer(): androidx.media2.common.SessionPlayer;
				public selectTrack(trackInfo: androidx.media2.common.SessionPlayer.TrackInfo): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public updatePlayer(player: androidx.media2.common.SessionPlayer, playlistAgent: androidx.media2.common.SessionPlayer): void;
				public removePlaylistItem(index: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public play(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public getSessionActivity(): globalAndroid.app.PendingIntent;
				public getLegacyBrowserServiceBinder(): globalAndroid.os.IBinder;
				public updatePlayer(player: androidx.media2.common.SessionPlayer): void;
				public updatePlaylistMetadata(metadata: androidx.media2.common.MediaMetadata): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public getPreviousMediaItemIndex(): number;
				public getPlaybackInfo(): androidx.media2.session.MediaController.PlaybackInfo;
				public getBufferedPosition(): number;
				public setAllowedCommands(controller: androidx.media2.session.MediaSession.ControllerInfo, commands: androidx.media2.session.SessionCommandGroup): void;
				public connectFromService(caller: androidx.media2.session.IMediaController, controllerVersion: number, packageName: string, pid: number, uid: number, connectionHints: globalAndroid.os.Bundle): void;
				public getRepeatMode(): number;
				public getShuffleMode(): number;
				public getBufferingState(): number;
				public skipToPlaylistItem(index: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public setPlaybackSpeed(speed: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public getPlaylist(): java.util.List<androidx.media2.common.MediaItem>;
				public getTracks(): java.util.List<androidx.media2.common.SessionPlayer.TrackInfo>;
			}
			export module MediaSessionImplBase {
				export class CombinedCommandResultFuture<T>  extends androidx.concurrent.futures.AbstractResolvableFuture<any> {
					public static class: java.lang.Class<androidx.media2.session.MediaSessionImplBase.CombinedCommandResultFuture<any>>;
					public static create(executor: java.util.concurrent.Executor, futures: native.Array<com.google.common.util.concurrent.ListenableFuture>): androidx.media2.session.MediaSessionImplBase.CombinedCommandResultFuture<any>;
					public addListener(listener: java.lang.Runnable, executor: java.util.concurrent.Executor): void;
				}
				export class MediaButtonReceiver extends globalAndroid.content.BroadcastReceiver {
					public static class: java.lang.Class<androidx.media2.session.MediaSessionImplBase.MediaButtonReceiver>;
					public onReceive(context: globalAndroid.content.Context, intent: globalAndroid.content.Intent): void;
					public onReceive(context0: globalAndroid.content.Context, intent1: globalAndroid.content.Intent): void;
				}
				export class PlayerTask<T>  extends java.lang.Object {
					public static class: java.lang.Class<androidx.media2.session.MediaSessionImplBase.PlayerTask<any>>;
					/**
					 * Constructs a new instance of the androidx.media2.session.MediaSessionImplBase() when extending the interface class.
					 */
					public constructor(implementation: {
						run(sessionPlayer0: androidx.media2.common.SessionPlayer): T;
					});
					public constructor();
					public run(sessionPlayer0: androidx.media2.common.SessionPlayer): T;
				}
				export class PlaylistItemListener extends java.lang.Object implements androidx.media2.common.MediaItem.OnMetadataChangedListener {
					public static class: java.lang.Class<androidx.media2.session.MediaSessionImplBase.PlaylistItemListener>;
					public onMetadataChanged(item: androidx.media2.common.MediaItem, metadata: androidx.media2.common.MediaMetadata): void;
				}
				export class RemoteControllerTask extends java.lang.Object {
					public static class: java.lang.Class<androidx.media2.session.MediaSessionImplBase.RemoteControllerTask>;
					/**
					 * Constructs a new instance of the androidx.media2.session.MediaSessionImplBase() when extending the interface class.
					 */
					public constructor(implementation: {
						run(controllerCb0: androidx.media2.session.MediaSession.ControllerCb, int1: number): void;
					});
					public constructor();
					public run(controllerCb0: androidx.media2.session.MediaSession.ControllerCb, int1: number): void;
				}
				export class SessionPlayerCallback extends androidx.media2.session.RemoteSessionPlayer.Callback implements androidx.media2.common.MediaItem.OnMetadataChangedListener {
					public static class: java.lang.Class<androidx.media2.session.MediaSessionImplBase.SessionPlayerCallback>;
					public onTrackSelected(player: androidx.media2.common.SessionPlayer, trackInfo: androidx.media2.common.SessionPlayer.TrackInfo): void;
					public onPlaylistChanged(player: androidx.media2.common.SessionPlayer, list: java.util.List<androidx.media2.common.MediaItem>, metadata: androidx.media2.common.MediaMetadata): void;
					public onSeekCompleted(player: androidx.media2.common.SessionPlayer, position: number): void;
					public onMetadataChanged(currentMediaItem: androidx.media2.common.MediaItem, currentMediaItemMetadata: androidx.media2.common.MediaMetadata): void;
					public onPlaybackCompleted(player: androidx.media2.common.SessionPlayer): void;
					public onSubtitleData(player: androidx.media2.common.SessionPlayer, item: androidx.media2.common.MediaItem, track: androidx.media2.common.SessionPlayer.TrackInfo, data: androidx.media2.common.SubtitleData): void;
					public onPlaylistMetadataChanged(player: androidx.media2.common.SessionPlayer, metadata: androidx.media2.common.MediaMetadata): void;
					public onTrackDeselected(player: androidx.media2.common.SessionPlayer, trackInfo: androidx.media2.common.SessionPlayer.TrackInfo): void;
					public onBufferingStateChanged(player: androidx.media2.common.SessionPlayer, item: androidx.media2.common.MediaItem, buffState: number): void;
					public onShuffleModeChanged(player: androidx.media2.common.SessionPlayer, shuffleMode: number): void;
					public onTracksChanged(player: androidx.media2.common.SessionPlayer, tracks: java.util.List<androidx.media2.common.SessionPlayer.TrackInfo>): void;
					public onCurrentMediaItemChanged(player: androidx.media2.common.SessionPlayer, item: androidx.media2.common.MediaItem): void;
					public onBufferingStateChanged(player: androidx.media2.common.SessionPlayer, item: androidx.media2.common.MediaItem, state: number): void;
					public onPlayerStateChanged(player: androidx.media2.common.SessionPlayer, playerState: number): void;
					public onVolumeChanged(player: androidx.media2.session.RemoteSessionPlayer, volume: number): void;
					public onPlaybackSpeedChanged(player: androidx.media2.common.SessionPlayer, playbackSpeed: number): void;
					public onPlaybackSpeedChanged(player: androidx.media2.common.SessionPlayer, speed: number): void;
					public onPlayerStateChanged(player: androidx.media2.common.SessionPlayer, state: number): void;
					public onRepeatModeChanged(player: androidx.media2.common.SessionPlayer, repeatMode: number): void;
					public onVideoSizeChanged(player: androidx.media2.common.SessionPlayer, size: androidx.media2.common.VideoSize): void;
					public onAudioAttributesChanged(player: androidx.media2.common.SessionPlayer, attributes: androidx.media.AudioAttributesCompat): void;
				}
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module session {
			export class MediaSessionLegacyStub extends globalAndroid.support.v4.media.session.MediaSessionCompat.Callback {
				public static class: java.lang.Class<androidx.media2.session.MediaSessionLegacyStub>;
				public onSkipToPrevious(): void;
				public onSetCaptioningEnabled(enabled: boolean): void;
				public onRewind(): void;
				public onSetRepeatMode(repeatMode: number): void;
				public onAddQueueItem(description: globalAndroid.support.v4.media.MediaDescriptionCompat): void;
				public onPause(): void;
				public onRemoveQueueItemAt(index: number): void;
				public onPlayFromMediaId(mediaId: string, extras: globalAndroid.os.Bundle): void;
				public onAddQueueItem(description: globalAndroid.support.v4.media.MediaDescriptionCompat, index: number): void;
				public onCommand(command: string, extras: globalAndroid.os.Bundle, cb: globalAndroid.os.ResultReceiver): void;
				public onRemoveQueueItem(description: globalAndroid.support.v4.media.MediaDescriptionCompat): void;
				public onPrepareFromSearch(query: string, extras: globalAndroid.os.Bundle): void;
				public onPlay(): void;
				public onStop(): void;
				public onSetShuffleMode(shuffleMode: number): void;
				public onSkipToQueueItem(queueId: number): void;
				public onPrepareFromMediaId(mediaId: string, extras: globalAndroid.os.Bundle): void;
				public onPlayFromUri(uri: globalAndroid.net.Uri, extras: globalAndroid.os.Bundle): void;
				public onSetRating(rating: globalAndroid.support.v4.media.RatingCompat, extras: globalAndroid.os.Bundle): void;
				public onSeekTo(pos: number): void;
				public onPlayFromUri(mediaUri: globalAndroid.net.Uri, extras: globalAndroid.os.Bundle): void;
				public onFastForward(): void;
				/** @deprecated */
				public onRemoveQueueItemAt(index: number): void;
				public setLegacyControllerDisconnectTimeoutMs(timeoutMs: number): void;
				public onSkipToNext(): void;
				public onSetRating(rating: globalAndroid.support.v4.media.RatingCompat): void;
				public onCommand(commandName: string, bundle1: globalAndroid.os.Bundle, cb: globalAndroid.os.ResultReceiver): void;
				public onPrepare(): void;
				public onPrepareFromUri(uri: globalAndroid.net.Uri, extras: globalAndroid.os.Bundle): void;
				public onSkipToQueueItem(id: number): void;
				public onCustomAction(action: string, extras: globalAndroid.os.Bundle): void;
				public onPrepareFromUri(mediaUri: globalAndroid.net.Uri, extras: globalAndroid.os.Bundle): void;
				public onSetPlaybackSpeed(speed: number): void;
				public onPlayFromSearch(query: string, extras: globalAndroid.os.Bundle): void;
			}
			export module MediaSessionLegacyStub {
				export class ConnectionTimeoutHandler extends globalAndroid.os.Handler {
					public static class: java.lang.Class<androidx.media2.session.MediaSessionLegacyStub.ConnectionTimeoutHandler>;
					public disconnectControllerAfterTimeout(controller: androidx.media2.session.MediaSession.ControllerInfo, disconnectTimeoutMs: number): void;
					public handleMessage(msg: globalAndroid.os.Message): void;
				}
				export class ControllerLegacyCb extends androidx.media2.session.MediaSession.ControllerCb {
					public static class: java.lang.Class<androidx.media2.session.MediaSessionLegacyStub.ControllerLegacyCb>;
					public equals(obj: any): boolean;
					public hashCode(): number;
				}
				export class ControllerLegacyCbForBroadcast extends androidx.media2.session.MediaSession.ControllerCb {
					public static class: java.lang.Class<androidx.media2.session.MediaSessionLegacyStub.ControllerLegacyCbForBroadcast>;
				}
				export class SessionTask extends java.lang.Object {
					public static class: java.lang.Class<androidx.media2.session.MediaSessionLegacyStub.SessionTask>;
					/**
					 * Constructs a new instance of the androidx.media2.session.MediaSessionLegacyStub() when extending the interface class.
					 */
					public constructor(implementation: {
						run(controllerInfo0: androidx.media2.session.MediaSession.ControllerInfo): void;
					});
					public constructor();
					public run(controllerInfo0: androidx.media2.session.MediaSession.ControllerInfo): void;
				}
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module session {
			export class MediaSessionManager extends java.lang.Object {
				public static class: java.lang.Class<androidx.media2.session.MediaSessionManager>;
				public static getInstance(context: globalAndroid.content.Context): androidx.media2.session.MediaSessionManager;
				public getSessionServiceTokens(): java.util.Set<androidx.media2.session.SessionToken>;
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module session {
			export abstract class MediaSessionService extends globalAndroid.app.Service {
				public static class: java.lang.Class<androidx.media2.session.MediaSessionService>;
				public static SERVICE_INTERFACE: string;
				public onStartCommand(intent: globalAndroid.content.Intent, flags: number, startId: number): number;
				public onUpdateNotification(session: androidx.media2.session.MediaSession): androidx.media2.session.MediaSessionService.MediaNotification;
				public onGetSession(controllerInfo0: androidx.media2.session.MediaSession.ControllerInfo): androidx.media2.session.MediaSession;
				public removeSession(session: androidx.media2.session.MediaSession): void;
				public addSession(session: androidx.media2.session.MediaSession): void;
				public constructor();
				public onBind(intent0: globalAndroid.content.Intent): globalAndroid.os.IBinder;
				public onBind(intent: globalAndroid.content.Intent): globalAndroid.os.IBinder;
				public onTrimMemory(level: number): void;
				public constructor(base: globalAndroid.content.Context);
				public onCreate(): void;
				public onDestroy(): void;
				public getSessions(): java.util.List<androidx.media2.session.MediaSession>;
			}
			export module MediaSessionService {
				export class MediaNotification extends java.lang.Object {
					public static class: java.lang.Class<androidx.media2.session.MediaSessionService.MediaNotification>;
					public getNotificationId(): number;
					public constructor(notificationId: number, notification: globalAndroid.app.Notification);
					public getNotification(): globalAndroid.app.Notification;
				}
				export class MediaSessionServiceImpl extends java.lang.Object {
					public static class: java.lang.Class<androidx.media2.session.MediaSessionService.MediaSessionServiceImpl>;
					/**
					 * Constructs a new instance of the androidx.media2.session.MediaSessionService() when extending the interface class.
					 */
					public constructor(implementation: {
						onCreate(mediaSessionService0: androidx.media2.session.MediaSessionService): void;
						onStartCommand(intent0: globalAndroid.content.Intent, int1: number, int2: number): number;
						onBind(intent0: globalAndroid.content.Intent): globalAndroid.os.IBinder;
						onDestroy(): void;
						addSession(mediaSession0: androidx.media2.session.MediaSession): void;
						removeSession(mediaSession0: androidx.media2.session.MediaSession): void;
						onUpdateNotification(mediaSession0: androidx.media2.session.MediaSession): androidx.media2.session.MediaSessionService.MediaNotification;
						getSessions(): java.util.List<androidx.media2.session.MediaSession>;
					});
					public constructor();
					public onBind(intent0: globalAndroid.content.Intent): globalAndroid.os.IBinder;
					public onUpdateNotification(mediaSession0: androidx.media2.session.MediaSession): androidx.media2.session.MediaSessionService.MediaNotification;
					public removeSession(mediaSession0: androidx.media2.session.MediaSession): void;
					public addSession(mediaSession0: androidx.media2.session.MediaSession): void;
					public onDestroy(): void;
					public onStartCommand(intent0: globalAndroid.content.Intent, int1: number, int2: number): number;
					public getSessions(): java.util.List<androidx.media2.session.MediaSession>;
					public onCreate(mediaSessionService0: androidx.media2.session.MediaSessionService): void;
				}
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module session {
			export class MediaSessionServiceImplBase extends java.lang.Object implements androidx.media2.session.MediaSessionService.MediaSessionServiceImpl {
				public static class: java.lang.Class<androidx.media2.session.MediaSessionServiceImplBase>;
				public onStartCommand(intent: globalAndroid.content.Intent, flags: number, startId: number): number;
				public onCreate(service: androidx.media2.session.MediaSessionService): void;
				public onDestroy(): void;
				public onUpdateNotification(session: androidx.media2.session.MediaSession): androidx.media2.session.MediaSessionService.MediaNotification;
				public removeSession(session: androidx.media2.session.MediaSession): void;
				public addSession(session: androidx.media2.session.MediaSession): void;
				public getSessions(): java.util.List<androidx.media2.session.MediaSession>;
				public onBind(intent: globalAndroid.content.Intent): globalAndroid.os.IBinder;
			}
			export module MediaSessionServiceImplBase {
				export class MediaSessionServiceStub extends androidx.media2.session.IMediaSessionService.Stub implements java.io.Closeable {
					public static class: java.lang.Class<androidx.media2.session.MediaSessionServiceImplBase.MediaSessionServiceStub>;
					public dumpAsync(fd: java.io.FileDescriptor, strings1: native.Array<string>): void;
					public unlinkToDeath(recipient: globalAndroid.os.IBinder.DeathRecipient, flags: number): boolean;
					public isBinderAlive(): boolean;
					public dump(fd: java.io.FileDescriptor, fout: java.io.PrintWriter, strings2: native.Array<string>): void;
					public linkToDeath(recipient: globalAndroid.os.IBinder.DeathRecipient, flags: number): void;
					public close(): void;
					public getInterfaceDescriptor(): string;
					public transact(code: number, data: globalAndroid.os.Parcel, reply: globalAndroid.os.Parcel, flags: number): boolean;
					public connect(caller: androidx.media2.session.IMediaController, connectionRequest: androidx.versionedparcelable.ParcelImpl): void;
					public pingBinder(): boolean;
					public queryLocalInterface(descriptor: string): globalAndroid.os.IInterface;
					public dump(fd: java.io.FileDescriptor, strings1: native.Array<string>): void;
				}
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module session {
			export class MediaSessionServiceLegacyStub extends androidx.media.MediaBrowserServiceCompat {
				public static class: java.lang.Class<androidx.media2.session.MediaSessionServiceLegacyStub>;
				public onGetRoot(string0: string, int1: number, bundle2: globalAndroid.os.Bundle): androidx.media.MediaBrowserServiceCompat.BrowserRoot;
				public onTrimMemory(level: number): void;
				public onLoadChildren(string0: string, result1: androidx.media.MediaBrowserServiceCompat.Result<java.util.List<globalAndroid.support.v4.media.MediaBrowserCompat.MediaItem>>): void;
				public onLoadChildren(parentId: string, result: androidx.media.MediaBrowserServiceCompat.Result<java.util.List<globalAndroid.support.v4.media.MediaBrowserCompat.MediaItem>>): void;
				public onGetRoot(clientPackageName: string, clientUid: number, rootHints: globalAndroid.os.Bundle): androidx.media.MediaBrowserServiceCompat.BrowserRoot;
				public onLoadChildren(parentId: string, result: androidx.media.MediaBrowserServiceCompat.Result<java.util.List<globalAndroid.support.v4.media.MediaBrowserCompat.MediaItem>>, options: globalAndroid.os.Bundle): void;
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module session {
			export class MediaSessionStub extends androidx.media2.session.IMediaSession.Stub {
				public static class: java.lang.Class<androidx.media2.session.MediaSessionStub>;
				public unsubscribe(caller: androidx.media2.session.IMediaController, seq: number, parentId: string): void;
				public getSearchResult(caller: androidx.media2.session.IMediaController, seq: number, query: string, page: number, pageSize: number, libraryParams: androidx.versionedparcelable.ParcelImpl): void;
				public setPlaylist(caller: androidx.media2.session.IMediaController, seq: number, playlist: java.util.List<string>, metadata: androidx.versionedparcelable.ParcelImpl): void;
				public setPlaybackSpeed(caller: androidx.media2.session.IMediaController, seq: number, speed: number): void;
				public pause(caller: androidx.media2.session.IMediaController, seq: number): void;
				public skipToPreviousItem(caller: androidx.media2.session.IMediaController, seq: number): void;
				public getItem(caller: androidx.media2.session.IMediaController, seq: number, mediaId: string): void;
				public setRepeatMode(caller: androidx.media2.session.IMediaController, seq: number, repeatMode: number): void;
				public connect(caller: androidx.media2.session.IMediaController, seq: number, connectionRequest: androidx.versionedparcelable.ParcelImpl): void;
				public seekTo(caller: androidx.media2.session.IMediaController, seq: number, pos: number): void;
				public skipToPlaylistItem(caller: androidx.media2.session.IMediaController, seq: number, index: number): void;
				public transact(code: number, data: globalAndroid.os.Parcel, reply: globalAndroid.os.Parcel, flags: number): boolean;
				public dump(fd: java.io.FileDescriptor, strings1: native.Array<string>): void;
				public updatePlaylistMetadata(caller: androidx.media2.session.IMediaController, seq: number, metadata: androidx.versionedparcelable.ParcelImpl): void;
				public skipToNextItem(caller: androidx.media2.session.IMediaController, seq: number): void;
				public prepare(caller: androidx.media2.session.IMediaController, seq: number): void;
				public setMediaItem(caller: androidx.media2.session.IMediaController, seq: number, mediaId: string): void;
				public skipForward(caller: androidx.media2.session.IMediaController, seq: number): void;
				public unlinkToDeath(recipient: globalAndroid.os.IBinder.DeathRecipient, flags: number): boolean;
				public skipBackward(caller: androidx.media2.session.IMediaController, seq: number): void;
				public addPlaylistItem(caller: androidx.media2.session.IMediaController, seq: number, index: number, mediaId: string): void;
				public dumpAsync(fd: java.io.FileDescriptor, strings1: native.Array<string>): void;
				public onControllerResult(caller: androidx.media2.session.IMediaController, seq: number, sessionResult: androidx.versionedparcelable.ParcelImpl): void;
				public removePlaylistItem(caller: androidx.media2.session.IMediaController, seq: number, index: number): void;
				public selectTrack(caller: androidx.media2.session.IMediaController, seq: number, trackInfoParcel: androidx.versionedparcelable.ParcelImpl): void;
				public release(caller: androidx.media2.session.IMediaController, seq: number): void;
				public setMediaUri(caller: androidx.media2.session.IMediaController, seq: number, uri: globalAndroid.net.Uri, extras: globalAndroid.os.Bundle): void;
				public setVolumeTo(caller: androidx.media2.session.IMediaController, seq: number, value: number, flags: number): void;
				public search(caller: androidx.media2.session.IMediaController, seq: number, query: string, libraryParams: androidx.versionedparcelable.ParcelImpl): void;
				public getInterfaceDescriptor(): string;
				public pingBinder(): boolean;
				public rewind(caller: androidx.media2.session.IMediaController, seq: number): void;
				public adjustVolume(caller: androidx.media2.session.IMediaController, seq: number, direction: number, flags: number): void;
				public getChildren(caller: androidx.media2.session.IMediaController, seq: number, parentId: string, page: number, pageSize: number, libraryParams: androidx.versionedparcelable.ParcelImpl): void;
				public onCustomCommand(caller: androidx.media2.session.IMediaController, seq: number, command: androidx.versionedparcelable.ParcelImpl, bundle3: globalAndroid.os.Bundle): void;
				public setShuffleMode(caller: androidx.media2.session.IMediaController, seq: number, shuffleMode: number): void;
				public queryLocalInterface(descriptor: string): globalAndroid.os.IInterface;
				public linkToDeath(recipient: globalAndroid.os.IBinder.DeathRecipient, flags: number): void;
				public subscribe(caller: androidx.media2.session.IMediaController, seq: number, parentId: string, libraryParams: androidx.versionedparcelable.ParcelImpl): void;
				public dump(fd: java.io.FileDescriptor, fout: java.io.PrintWriter, strings2: native.Array<string>): void;
				public replacePlaylistItem(caller: androidx.media2.session.IMediaController, seq: number, index: number, mediaId: string): void;
				public isBinderAlive(): boolean;
				public deselectTrack(caller: androidx.media2.session.IMediaController, seq: number, trackInfoParcel: androidx.versionedparcelable.ParcelImpl): void;
				public play(caller: androidx.media2.session.IMediaController, seq: number): void;
				public setSurface(caller: androidx.media2.session.IMediaController, seq: number, surface: globalAndroid.view.Surface): void;
				public fastForward(caller: androidx.media2.session.IMediaController, seq: number): void;
				public getLibraryRoot(caller: androidx.media2.session.IMediaController, seq: number, libraryParams: androidx.versionedparcelable.ParcelImpl): void;
				public setRating(caller: androidx.media2.session.IMediaController, seq: number, mediaId: string, ratingParcelable: androidx.versionedparcelable.ParcelImpl): void;
				public movePlaylistItem(caller: androidx.media2.session.IMediaController, seq: number, fromIndex: number, toIndex: number): void;
			}
			export module MediaSessionStub {
				export class Controller2Cb extends androidx.media2.session.MediaSession.ControllerCb {
					public static class: java.lang.Class<androidx.media2.session.MediaSessionStub.Controller2Cb>;
					public equals(obj: any): boolean;
					public hashCode(): number;
				}
				export class LibrarySessionCallbackTask<T>  extends androidx.media2.session.MediaSessionStub.SessionTask {
					public static class: java.lang.Class<androidx.media2.session.MediaSessionStub.LibrarySessionCallbackTask<any>>;
					/**
					 * Constructs a new instance of the androidx.media2.session.MediaSessionStub() when extending the interface class.
					 */
					public constructor(implementation: {
						run(controllerInfo0: androidx.media2.session.MediaSession.ControllerInfo): any;
					});
					public constructor();
					public run(controllerInfo0: androidx.media2.session.MediaSession.ControllerInfo): any;
				}
				export class SessionCallbackTask<T>  extends androidx.media2.session.MediaSessionStub.SessionTask {
					public static class: java.lang.Class<androidx.media2.session.MediaSessionStub.SessionCallbackTask<any>>;
					/**
					 * Constructs a new instance of the androidx.media2.session.MediaSessionStub() when extending the interface class.
					 */
					public constructor(implementation: {
						run(controllerInfo0: androidx.media2.session.MediaSession.ControllerInfo): any;
					});
					public constructor();
					public run(controllerInfo0: androidx.media2.session.MediaSession.ControllerInfo): any;
				}
				export class SessionPlayerTask extends java.lang.Object implements androidx.media2.session.MediaSessionStub.SessionTask {
					public static class: java.lang.Class<androidx.media2.session.MediaSessionStub.SessionPlayerTask>;
					/**
					 * Constructs a new instance of the androidx.media2.session.MediaSessionStub() when extending the interface class.
					 */
					public constructor(implementation: {
						run(controllerInfo0: androidx.media2.session.MediaSession.ControllerInfo): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
					});
					public constructor();
					public run(controllerInfo0: androidx.media2.session.MediaSession.ControllerInfo): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				}
				export class SessionTask extends java.lang.Object {
					public static class: java.lang.Class<androidx.media2.session.MediaSessionStub.SessionTask>;
					/**
					 * Constructs a new instance of the androidx.media2.session.MediaSessionStub() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module session {
			export class MediaUtils extends java.lang.Object {
				public static class: java.lang.Class<androidx.media2.session.MediaUtils>;
				public static TAG: string;
				public static TRANSACTION_SIZE_LIMIT_IN_BYTES: number;
				public static sDefaultBrowserRoot: androidx.media.MediaBrowserServiceCompat.BrowserRoot;
				public static DIRECT_EXECUTOR: java.util.concurrent.Executor;
				public static VERSION_UNKNOWN: number;
				public static VERSION_0: number;
				public static CURRENT_VERSION: number;
				public static convertToMediaItem(item2: androidx.media2.common.MediaItem): globalAndroid.support.v4.media.MediaBrowserCompat.MediaItem;
				public static convertQueueItemListToMediaItemList(items: java.util.List<globalAndroid.support.v4.media.session.MediaSessionCompat.QueueItem>): java.util.List<androidx.media2.common.MediaItem>;
				public static convertToRating(ratingCompat: globalAndroid.support.v4.media.RatingCompat): androidx.media2.common.Rating;
				public static toPlaybackInfo2(info: globalAndroid.support.v4.media.session.MediaControllerCompat.PlaybackInfo): androidx.media2.session.MediaController.PlaybackInfo;
				public static convertToRatingCompat(rating: androidx.media2.common.Rating): globalAndroid.support.v4.media.RatingCompat;
				public static convertToMediaItem(item: globalAndroid.support.v4.media.session.MediaSessionCompat.QueueItem): androidx.media2.common.MediaItem;
				public static convertMediaItemListToParcelImplListSlice(mediaItemList: java.util.List<androidx.media2.common.MediaItem>): androidx.media2.common.ParcelImplListSlice;
				public static toBufferingState(playbackStateCompatState: number): number;
				public static convertToQueueItemId(mediaItemIndex: number): number;
				public static upcastForPreparceling(size: androidx.media2.common.VideoSize): androidx.media2.common.VideoSize;
				public static upcastForPreparceling(track: androidx.media2.common.SessionPlayer.TrackInfo): androidx.media2.common.SessionPlayer.TrackInfo;
				public static isUnparcelableBundle(bundle: globalAndroid.os.Bundle): boolean;
				public static removeNullElements(list: java.util.List<any>): java.util.List<any>;
				public static convertToSessionCommandGroup(sessionFlags: number, state: globalAndroid.support.v4.media.session.PlaybackStateCompat): androidx.media2.session.SessionCommandGroup;
				public static convertParcelImplListSliceToMediaItemList(listSlice: androidx.media2.common.ParcelImplListSlice): java.util.List<androidx.media2.common.MediaItem>;
				public static keepUnparcelableBundlesOnly(bundles: java.util.List<globalAndroid.os.Bundle>): void;
				public static convertToPlaybackStateCompatState(playerState: number, bufferingState: number): number;
				public static convertToRootHints(params: androidx.media2.session.MediaLibraryService.LibraryParams): globalAndroid.os.Bundle;
				public static convertCommandButtonListToParcelImplList(commandButtonList: java.util.List<androidx.media2.session.MediaSession.CommandButton>): java.util.List<androidx.versionedparcelable.ParcelImpl>;
				public static convertToMediaItem(metadataCompat: globalAndroid.support.v4.media.MediaMetadataCompat): androidx.media2.common.MediaItem;
				public static convertToMediaMetadata(queueTitle: string): androidx.media2.common.MediaMetadata;
				public static upcastForPreparceling(tracks: java.util.List<androidx.media2.common.SessionPlayer.TrackInfo>): java.util.List<androidx.media2.common.SessionPlayer.TrackInfo>;
				public static convertMediaItemListToMediaItemList(items: java.util.List<globalAndroid.support.v4.media.MediaBrowserCompat.MediaItem>): java.util.List<androidx.media2.common.MediaItem>;
				public static truncateListBySize(list: java.util.List<any>, sizeLimitInBytes: number): java.util.List<any>;
				public static upcastForPreparceling(item: androidx.media2.common.MediaItem): androidx.media2.common.MediaItem;
				public static convertToMediaItem(descriptionCompat: globalAndroid.support.v4.media.MediaDescriptionCompat): androidx.media2.common.MediaItem;
				public static convertToCustomLayout(state: globalAndroid.support.v4.media.session.PlaybackStateCompat): java.util.List<androidx.media2.session.MediaSession.CommandButton>;
				public static convertToMediaItem(item: globalAndroid.support.v4.media.MediaBrowserCompat.MediaItem): androidx.media2.common.MediaItem;
				public static createMediaDescriptionCompat(mediaId: string): globalAndroid.support.v4.media.MediaDescriptionCompat;
				public static convertToMediaItemList(items: java.util.List<androidx.media2.common.MediaItem>): java.util.List<globalAndroid.support.v4.media.MediaBrowserCompat.MediaItem>;
				public static convertToQueueItemList(items: java.util.List<androidx.media2.common.MediaItem>): java.util.List<globalAndroid.support.v4.media.session.MediaSessionCompat.QueueItem>;
				public static convertToMediaMetadataCompat(metadata: androidx.media2.common.MediaMetadata): globalAndroid.support.v4.media.MediaMetadataCompat;
				public static convertToPlayerState(state: globalAndroid.support.v4.media.session.PlaybackStateCompat): number;
				public static convertToLibraryParams(context: globalAndroid.content.Context, legacyBundle: globalAndroid.os.Bundle): androidx.media2.session.MediaLibraryService.LibraryParams;
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module session {
			export class PercentageRating extends java.lang.Object implements androidx.media2.common.Rating {
				public static class: java.lang.Class<androidx.media2.session.PercentageRating>;
				public equals(obj: any): boolean;
				public hashCode(): number;
				public constructor(percent: number);
				public isRated(): boolean;
				public toString(): string;
				public getPercentRating(): number;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module session {
			export class PercentageRatingParcelizer extends java.lang.Object {
				public static class: java.lang.Class<androidx.media2.session.PercentageRatingParcelizer>;
				public static read(parcel: androidx.versionedparcelable.VersionedParcel): androidx.media2.session.PercentageRating;
				public static write(obj: androidx.media2.session.PercentageRating, parcel: androidx.versionedparcelable.VersionedParcel): void;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module session {
			export class PlaybackInfoParcelizer extends java.lang.Object {
				public static class: java.lang.Class<androidx.media2.session.PlaybackInfoParcelizer>;
				public static read(parcel: androidx.versionedparcelable.VersionedParcel): androidx.media2.session.MediaController.PlaybackInfo;
				public static write(obj: androidx.media2.session.MediaController.PlaybackInfo, parcel: androidx.versionedparcelable.VersionedParcel): void;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module session {
			export class RemoteResult extends java.lang.Object implements androidx.media2.common.BaseResult {
				public static class: java.lang.Class<androidx.media2.session.RemoteResult>;
				/**
				 * Constructs a new instance of the androidx.media2.session.RemoteResult interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getResultCode(): number;
					getCompletionTime(): number;
					getMediaItem(): androidx.media2.common.MediaItem;
				});
				public constructor();
				public static RESULT_ERROR_SESSION_PARENTAL_CONTROL_RESTRICTED: number;
				public static RESULT_ERROR_SESSION_NOT_AVAILABLE_IN_REGION: number;
				public static RESULT_ERROR_SESSION_PREMIUM_ACCOUNT_REQUIRED: number;
				public static RESULT_ERROR_SESSION_SETUP_REQUIRED: number;
				public static RESULT_ERROR_BAD_VALUE: number;
				public static RESULT_ERROR_SESSION_CONCURRENT_STREAM_LIMIT: number;
				public static RESULT_ERROR_UNKNOWN: number;
				public static RESULT_ERROR_INVALID_STATE: number;
				public static RESULT_ERROR_NOT_SUPPORTED: number;
				public static RESULT_ERROR_SESSION_SKIP_LIMIT_REACHED: number;
				public static RESULT_ERROR_IO: number;
				public static RESULT_ERROR_PERMISSION_DENIED: number;
				public static RESULT_ERROR_SESSION_DISCONNECTED: number;
				public static RESULT_INFO_SKIPPED: number;
				public static RESULT_SUCCESS: number;
				public static RESULT_ERROR_SESSION_AUTHENTICATION_EXPIRED: number;
				public getMediaItem(): androidx.media2.common.MediaItem;
				public getCompletionTime(): number;
				public getResultCode(): number;
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module session {
			export abstract class RemoteSessionPlayer extends androidx.media2.common.SessionPlayer {
				public static class: java.lang.Class<androidx.media2.session.RemoteSessionPlayer>;
				public static VOLUME_CONTROL_FIXED: number;
				public static VOLUME_CONTROL_RELATIVE: number;
				public static VOLUME_CONTROL_ABSOLUTE: number;
				public close(): void;
				public getMaxVolume(): number;
				public adjustVolume(int0: number): java.util.concurrent.Future<androidx.media2.common.SessionPlayer.PlayerResult>;
				public getVolumeControlType(): number;
				public setVolume(int0: number): java.util.concurrent.Future<androidx.media2.common.SessionPlayer.PlayerResult>;
				public constructor();
				public getVolume(): number;
			}
			export module RemoteSessionPlayer {
				export class Callback extends androidx.media2.common.SessionPlayer.PlayerCallback {
					public static class: java.lang.Class<androidx.media2.session.RemoteSessionPlayer.Callback>;
					public constructor();
					public onVolumeChanged(player: androidx.media2.session.RemoteSessionPlayer, volume: number): void;
				}
				export class VolumeControlType extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.media2.session.RemoteSessionPlayer.VolumeControlType>;
					/**
					 * Constructs a new instance of the androidx.media2.session.RemoteSessionPlayer() when extending the interface class.
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
		export module session {
			export class SequencedFutureManager extends java.lang.Object implements java.io.Closeable {
				public static class: java.lang.Class<androidx.media2.session.SequencedFutureManager>;
				public setFutureResult(seq: number, result: any): void;
				public close(): void;
				public obtainNextSequenceNumber(): number;
				public createSequencedFuture(resultWhenClosed: any): androidx.media2.session.SequencedFutureManager.SequencedFuture<any>;
			}
			export module SequencedFutureManager {
				export class SequencedFuture<T>  extends androidx.concurrent.futures.AbstractResolvableFuture<any> {
					public static class: java.lang.Class<androidx.media2.session.SequencedFutureManager.SequencedFuture<any>>;
					public getResultWhenClosed(): any;
					public set(value: any): boolean;
					public addListener(listener: java.lang.Runnable, executor: java.util.concurrent.Executor): void;
					public getSequenceNumber(): number;
				}
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module session {
			export class SessionCommand extends java.lang.Object implements androidx.versionedparcelable.VersionedParcelable {
				public static class: java.lang.Class<androidx.media2.session.SessionCommand>;
				public static COMMAND_VERSION_1: number;
				public static COMMAND_VERSION_2: number;
				public static COMMAND_VERSION_CURRENT: number;
				public static COMMAND_CODE_CUSTOM: number;
				public static COMMAND_CODE_PLAYER_PLAY: number;
				public static COMMAND_CODE_PLAYER_PAUSE: number;
				public static COMMAND_CODE_PLAYER_PREPARE: number;
				public static COMMAND_CODE_PLAYER_SEEK_TO: number;
				public static COMMAND_CODE_PLAYER_SET_SPEED: number;
				public static COMMAND_CODE_PLAYER_GET_PLAYLIST: number;
				public static COMMAND_CODE_PLAYER_SET_PLAYLIST: number;
				public static COMMAND_CODE_PLAYER_SKIP_TO_PLAYLIST_ITEM: number;
				public static COMMAND_CODE_PLAYER_SKIP_TO_PREVIOUS_PLAYLIST_ITEM: number;
				public static COMMAND_CODE_PLAYER_SKIP_TO_NEXT_PLAYLIST_ITEM: number;
				public static COMMAND_CODE_PLAYER_SET_SHUFFLE_MODE: number;
				public static COMMAND_CODE_PLAYER_SET_REPEAT_MODE: number;
				public static COMMAND_CODE_PLAYER_GET_PLAYLIST_METADATA: number;
				public static COMMAND_CODE_PLAYER_ADD_PLAYLIST_ITEM: number;
				public static COMMAND_CODE_PLAYER_REMOVE_PLAYLIST_ITEM: number;
				public static COMMAND_CODE_PLAYER_REPLACE_PLAYLIST_ITEM: number;
				public static COMMAND_CODE_PLAYER_GET_CURRENT_MEDIA_ITEM: number;
				public static COMMAND_CODE_PLAYER_UPDATE_LIST_METADATA: number;
				public static COMMAND_CODE_PLAYER_SET_MEDIA_ITEM: number;
				public static COMMAND_CODE_PLAYER_MOVE_PLAYLIST_ITEM: number;
				public static COMMAND_CODE_PLAYER_SET_SURFACE: number;
				public static COMMAND_CODE_PLAYER_SELECT_TRACK: number;
				public static COMMAND_CODE_PLAYER_DESELECT_TRACK: number;
				public static COMMAND_CODE_VOLUME_SET_VOLUME: number;
				public static COMMAND_CODE_VOLUME_ADJUST_VOLUME: number;
				public static COMMAND_CODE_SESSION_FAST_FORWARD: number;
				public static COMMAND_CODE_SESSION_REWIND: number;
				public static COMMAND_CODE_SESSION_SKIP_FORWARD: number;
				public static COMMAND_CODE_SESSION_SKIP_BACKWARD: number;
				public static COMMAND_CODE_SESSION_SET_RATING: number;
				public static COMMAND_CODE_SESSION_SET_MEDIA_URI: number;
				public static COMMAND_CODE_LIBRARY_GET_LIBRARY_ROOT: number;
				public static COMMAND_CODE_LIBRARY_SUBSCRIBE: number;
				public static COMMAND_CODE_LIBRARY_UNSUBSCRIBE: number;
				public static COMMAND_CODE_LIBRARY_GET_CHILDREN: number;
				public static COMMAND_CODE_LIBRARY_GET_ITEM: number;
				public static COMMAND_CODE_LIBRARY_SEARCH: number;
				public static COMMAND_CODE_LIBRARY_GET_SEARCH_RESULT: number;
				public equals(obj: any): boolean;
				public constructor(commandCode: number);
				public getCommandCode(): number;
				public hashCode(): number;
				public getCustomExtras(): globalAndroid.os.Bundle;
				public constructor(action: string, extras: globalAndroid.os.Bundle);
				public getCustomAction(): string;
			}
			export module SessionCommand {
				export class CommandCode extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.media2.session.SessionCommand.CommandCode>;
					/**
					 * Constructs a new instance of the androidx.media2.session.SessionCommand() when extending the interface class.
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
				export class CommandVersion extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.media2.session.SessionCommand.CommandVersion>;
					/**
					 * Constructs a new instance of the androidx.media2.session.SessionCommand() when extending the interface class.
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
		export module session {
			export class SessionCommandGroup extends java.lang.Object implements androidx.versionedparcelable.VersionedParcelable {
				public static class: java.lang.Class<androidx.media2.session.SessionCommandGroup>;
				public getCommands(): java.util.Set<androidx.media2.session.SessionCommand>;
				public hasCommand(command: androidx.media2.session.SessionCommand): boolean;
				public hasCommand(commandCode: number): boolean;
				public equals(obj: any): boolean;
				public hashCode(): number;
				public constructor(commands: java.util.Collection<androidx.media2.session.SessionCommand>);
				public constructor();
			}
			export module SessionCommandGroup {
				export class Builder extends java.lang.Object {
					public static class: java.lang.Class<androidx.media2.session.SessionCommandGroup.Builder>;
					public constructor(commandGroup: androidx.media2.session.SessionCommandGroup);
					public constructor();
					public addCommand(command: androidx.media2.session.SessionCommand): androidx.media2.session.SessionCommandGroup.Builder;
					public addAllPredefinedCommands(version: number): androidx.media2.session.SessionCommandGroup.Builder;
					public removeCommand(command: androidx.media2.session.SessionCommand): androidx.media2.session.SessionCommandGroup.Builder;
					public build(): androidx.media2.session.SessionCommandGroup;
				}
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module session {
			export class SessionCommandGroupParcelizer extends java.lang.Object {
				public static class: java.lang.Class<androidx.media2.session.SessionCommandGroupParcelizer>;
				public static write(obj: androidx.media2.session.SessionCommandGroup, parcel: androidx.versionedparcelable.VersionedParcel): void;
				public static read(parcel: androidx.versionedparcelable.VersionedParcel): androidx.media2.session.SessionCommandGroup;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module session {
			export class SessionCommandParcelizer extends java.lang.Object {
				public static class: java.lang.Class<androidx.media2.session.SessionCommandParcelizer>;
				public static read(parcel: androidx.versionedparcelable.VersionedParcel): androidx.media2.session.SessionCommand;
				public static write(obj: androidx.media2.session.SessionCommand, parcel: androidx.versionedparcelable.VersionedParcel): void;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module session {
			export class SessionResult extends androidx.versionedparcelable.CustomVersionedParcelable implements androidx.media2.session.RemoteResult {
				public static class: java.lang.Class<androidx.media2.session.SessionResult>;
				public static RESULT_SUCCESS: number;
				public getMediaItem(): androidx.media2.common.MediaItem;
				public getCustomCommandResult(): globalAndroid.os.Bundle;
				public getCompletionTime(): number;
				public onPostParceling(): void;
				public constructor(resultCode: number, customCommandResult: globalAndroid.os.Bundle);
				public getResultCode(): number;
				public constructor();
				public onPreParceling(isStream: boolean): void;
			}
			export module SessionResult {
				export class ResultCode extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.media2.session.SessionResult.ResultCode>;
					/**
					 * Constructs a new instance of the androidx.media2.session.SessionResult() when extending the interface class.
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
		export module session {
			export class SessionResultParcelizer extends java.lang.Object {
				public static class: java.lang.Class<androidx.media2.session.SessionResultParcelizer>;
				public static write(obj: androidx.media2.session.SessionResult, parcel: androidx.versionedparcelable.VersionedParcel): void;
				public constructor();
				public static read(parcel: androidx.versionedparcelable.VersionedParcel): androidx.media2.session.SessionResult;
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module session {
			export class SessionToken extends java.lang.Object implements androidx.versionedparcelable.VersionedParcelable {
				public static class: java.lang.Class<androidx.media2.session.SessionToken>;
				public static TYPE_SESSION: number;
				public static TYPE_SESSION_SERVICE: number;
				public static TYPE_LIBRARY_SERVICE: number;
				public getServiceName(): string;
				public getExtras(): globalAndroid.os.Bundle;
				public getType(): number;
				public getUid(): number;
				public getPackageName(): string;
				public isLegacySession(): boolean;
				public static createSessionToken(context: globalAndroid.content.Context, compatToken: globalAndroid.support.v4.media.session.MediaSessionCompat.Token, listener: androidx.media2.session.SessionToken.OnSessionTokenCreatedListener): void;
				public toString(): string;
				public getComponentName(): globalAndroid.content.ComponentName;
				public getBinder(): any;
				public constructor(context: globalAndroid.content.Context, serviceComponent: globalAndroid.content.ComponentName);
				public equals(obj: any): boolean;
				public hashCode(): number;
			}
			export module SessionToken {
				export class OnSessionTokenCreatedListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.media2.session.SessionToken.OnSessionTokenCreatedListener>;
					/**
					 * Constructs a new instance of the androidx.media2.session.SessionToken() when extending the interface class.
					 */
					public constructor(implementation: {
						onSessionTokenCreated(token0: globalAndroid.support.v4.media.session.MediaSessionCompat.Token, sessionToken1: androidx.media2.session.SessionToken): void;
					});
					public constructor();
					public onSessionTokenCreated(token0: globalAndroid.support.v4.media.session.MediaSessionCompat.Token, sessionToken1: androidx.media2.session.SessionToken): void;
				}
				export class SessionTokenImpl extends java.lang.Object implements androidx.versionedparcelable.VersionedParcelable {
					public static class: java.lang.Class<androidx.media2.session.SessionToken.SessionTokenImpl>;
					/**
					 * Constructs a new instance of the androidx.media2.session.SessionToken() when extending the interface class.
					 */
					public constructor(implementation: {
						isLegacySession(): boolean;
						getUid(): number;
						getPackageName(): string;
						getServiceName(): string;
						getComponentName(): globalAndroid.content.ComponentName;
						getType(): number;
						getExtras(): globalAndroid.os.Bundle;
						getBinder(): any;
					});
					public constructor();
					public getType(): number;
					public getExtras(): globalAndroid.os.Bundle;
					public getComponentName(): globalAndroid.content.ComponentName;
					public isLegacySession(): boolean;
					public getPackageName(): string;
					public getBinder(): any;
					public getUid(): number;
					public getServiceName(): string;
				}
				export class TokenType extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.media2.session.SessionToken.TokenType>;
					/**
					 * Constructs a new instance of the androidx.media2.session.SessionToken() when extending the interface class.
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
		export module session {
			export class SessionTokenImplBase extends java.lang.Object implements androidx.media2.session.SessionToken.SessionTokenImpl {
				public static class: java.lang.Class<androidx.media2.session.SessionTokenImplBase>;
				public getBinder(): any;
				public getServiceName(): string;
				public equals(obj: any): boolean;
				public getExtras(): globalAndroid.os.Bundle;
				public getType(): number;
				public hashCode(): number;
				public getUid(): number;
				public isLegacySession(): boolean;
				public getPackageName(): string;
				public toString(): string;
				public getComponentName(): globalAndroid.content.ComponentName;
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module session {
			export class SessionTokenImplBaseParcelizer extends java.lang.Object {
				public static class: java.lang.Class<androidx.media2.session.SessionTokenImplBaseParcelizer>;
				public static write(obj: androidx.media2.session.SessionTokenImplBase, parcel: androidx.versionedparcelable.VersionedParcel): void;
				public static read(parcel: androidx.versionedparcelable.VersionedParcel): androidx.media2.session.SessionTokenImplBase;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module session {
			export class SessionTokenImplLegacy extends androidx.versionedparcelable.CustomVersionedParcelable implements androidx.media2.session.SessionToken.SessionTokenImpl {
				public static class: java.lang.Class<androidx.media2.session.SessionTokenImplLegacy>;
				public getServiceName(): string;
				public getExtras(): globalAndroid.os.Bundle;
				public getType(): number;
				public getUid(): number;
				public isLegacySession(): boolean;
				public getPackageName(): string;
				public toString(): string;
				public getComponentName(): globalAndroid.content.ComponentName;
				public onPostParceling(): void;
				public onPreParceling(isStream: boolean): void;
				public getBinder(): any;
				public equals(obj: any): boolean;
				public hashCode(): number;
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module session {
			export class SessionTokenImplLegacyParcelizer extends java.lang.Object {
				public static class: java.lang.Class<androidx.media2.session.SessionTokenImplLegacyParcelizer>;
				public static read(parcel: androidx.versionedparcelable.VersionedParcel): androidx.media2.session.SessionTokenImplLegacy;
				public static write(obj: androidx.media2.session.SessionTokenImplLegacy, parcel: androidx.versionedparcelable.VersionedParcel): void;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module session {
			export class SessionTokenParcelizer extends java.lang.Object {
				public static class: java.lang.Class<androidx.media2.session.SessionTokenParcelizer>;
				public static write(obj: androidx.media2.session.SessionToken, parcel: androidx.versionedparcelable.VersionedParcel): void;
				public static read(parcel: androidx.versionedparcelable.VersionedParcel): androidx.media2.session.SessionToken;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module session {
			export class StarRating extends java.lang.Object implements androidx.media2.common.Rating {
				public static class: java.lang.Class<androidx.media2.session.StarRating>;
				public getStarRating(): number;
				public equals(obj: any): boolean;
				public constructor(maxStars: number, starRating: number);
				public getMaxStars(): number;
				public hashCode(): number;
				public isRated(): boolean;
				public toString(): string;
				public constructor(maxStars: number);
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module session {
			export class StarRatingParcelizer extends java.lang.Object {
				public static class: java.lang.Class<androidx.media2.session.StarRatingParcelizer>;
				public static write(obj: androidx.media2.session.StarRating, parcel: androidx.versionedparcelable.VersionedParcel): void;
				public static read(parcel: androidx.versionedparcelable.VersionedParcel): androidx.media2.session.StarRating;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module session {
			export class ThumbRating extends java.lang.Object implements androidx.media2.common.Rating {
				public static class: java.lang.Class<androidx.media2.session.ThumbRating>;
				public equals(obj: any): boolean;
				public hashCode(): number;
				public isThumbUp(): boolean;
				public isRated(): boolean;
				public constructor(thumbIsUp: boolean);
				public toString(): string;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module session {
			export class ThumbRatingParcelizer extends java.lang.Object {
				public static class: java.lang.Class<androidx.media2.session.ThumbRatingParcelizer>;
				public static read(parcel: androidx.versionedparcelable.VersionedParcel): androidx.media2.session.ThumbRating;
				public constructor();
				public static write(obj: androidx.media2.session.ThumbRating, parcel: androidx.versionedparcelable.VersionedParcel): void;
			}
		}
	}
}

//Generics information:
//androidx.media2.session.ConnectedControllersManager:1
//androidx.media2.session.MediaController.BuilderBase:3
//androidx.media2.session.MediaSession.BuilderBase:3
//androidx.media2.session.MediaSessionImplBase.CombinedCommandResultFuture:1
//androidx.media2.session.MediaSessionImplBase.PlayerTask:1
//androidx.media2.session.MediaSessionStub.LibrarySessionCallbackTask:1
//androidx.media2.session.MediaSessionStub.SessionCallbackTask:1
//androidx.media2.session.SequencedFutureManager.SequencedFuture:1

