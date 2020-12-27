declare module androidx {
	export module media2 {
		export module common {
			export class BaseResult extends java.lang.Object {
				public static class: java.lang.Class<androidx.media2.common.BaseResult>;
				/**
				 * Constructs a new instance of the androidx.media2.common.BaseResult interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getResultCode(): number;
					getCompletionTime(): number;
					getMediaItem(): androidx.media2.common.MediaItem;
				});
				public constructor();
				public static RESULT_ERROR_IO: number;
				public static RESULT_ERROR_PERMISSION_DENIED: number;
				public static RESULT_ERROR_BAD_VALUE: number;
				public static RESULT_ERROR_UNKNOWN: number;
				public static RESULT_ERROR_INVALID_STATE: number;
				public static RESULT_ERROR_NOT_SUPPORTED: number;
				public static RESULT_INFO_SKIPPED: number;
				public static RESULT_SUCCESS: number;
				public getMediaItem(): androidx.media2.common.MediaItem;
				public getCompletionTime(): number;
				public getResultCode(): number;
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module common {
			export class BitmapEntryParcelizer extends java.lang.Object {
				public static class: java.lang.Class<androidx.media2.common.BitmapEntryParcelizer>;
				public static write(obj: androidx.media2.common.MediaMetadata.BitmapEntry, parcel: androidx.versionedparcelable.VersionedParcel): void;
				public static read(parcel: androidx.versionedparcelable.VersionedParcel): androidx.media2.common.MediaMetadata.BitmapEntry;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module common {
			export class CallbackMediaItem extends androidx.media2.common.MediaItem {
				public static class: java.lang.Class<androidx.media2.common.CallbackMediaItem>;
				public getDataSourceCallback(): androidx.media2.common.DataSourceCallback;
			}
			export module CallbackMediaItem {
				export class Builder extends androidx.media2.common.MediaItem.Builder {
					public static class: java.lang.Class<androidx.media2.common.CallbackMediaItem.Builder>;
					public setMetadata(metadata: androidx.media2.common.MediaMetadata): androidx.media2.common.MediaItem.Builder;
					public setMetadata(metadata: androidx.media2.common.MediaMetadata): androidx.media2.common.CallbackMediaItem.Builder;
					public constructor();
					public constructor(dsc2: androidx.media2.common.DataSourceCallback);
					public build(): androidx.media2.common.CallbackMediaItem;
					public setEndPosition(position: number): androidx.media2.common.MediaItem.Builder;
					public setStartPosition(position: number): androidx.media2.common.CallbackMediaItem.Builder;
					public build(): androidx.media2.common.MediaItem;
					public setEndPosition(position: number): androidx.media2.common.CallbackMediaItem.Builder;
					public setStartPosition(position: number): androidx.media2.common.MediaItem.Builder;
				}
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module common {
			export abstract class DataSourceCallback extends java.lang.Object implements java.io.Closeable {
				public static class: java.lang.Class<androidx.media2.common.DataSourceCallback>;
				public readAt(long0: number, bytes1: native.Array<number>, int2: number, int3: number): number;
				public close(): void;
				public getSize(): number;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module common {
			export class FileMediaItem extends androidx.media2.common.MediaItem {
				public static class: java.lang.Class<androidx.media2.common.FileMediaItem>;
				public static FD_LENGTH_UNKNOWN: number;
				public close(): void;
				public getParcelFileDescriptor(): globalAndroid.os.ParcelFileDescriptor;
				public isClosed(): boolean;
				public decreaseRefCount(): void;
				public getFileDescriptorLength(): number;
				public getFileDescriptorOffset(): number;
				public increaseRefCount(): void;
			}
			export module FileMediaItem {
				export class Builder extends androidx.media2.common.MediaItem.Builder {
					public static class: java.lang.Class<androidx.media2.common.FileMediaItem.Builder>;
					public setMetadata(metadata: androidx.media2.common.MediaMetadata): androidx.media2.common.MediaItem.Builder;
					public constructor();
					public setEndPosition(position: number): androidx.media2.common.MediaItem.Builder;
					public setFileDescriptorLength(length: number): androidx.media2.common.FileMediaItem.Builder;
					public constructor(pfd: globalAndroid.os.ParcelFileDescriptor);
					public setMetadata(metadata: androidx.media2.common.MediaMetadata): androidx.media2.common.FileMediaItem.Builder;
					public build(): androidx.media2.common.MediaItem;
					public setStartPosition(position: number): androidx.media2.common.FileMediaItem.Builder;
					public setStartPosition(position: number): androidx.media2.common.MediaItem.Builder;
					public build(): androidx.media2.common.FileMediaItem;
					public setEndPosition(position: number): androidx.media2.common.FileMediaItem.Builder;
					public setFileDescriptorOffset(offset: number): androidx.media2.common.FileMediaItem.Builder;
				}
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module common {
			export class MediaItem extends androidx.versionedparcelable.CustomVersionedParcelable {
				public static class: java.lang.Class<androidx.media2.common.MediaItem>;
				public static POSITION_UNKNOWN: number;
				public getMetadata(): androidx.media2.common.MediaMetadata;
				public getEndPosition(): number;
				public addOnMetadataChangedListener(executor: java.util.concurrent.Executor, listener: androidx.media2.common.MediaItem.OnMetadataChangedListener): void;
				public setMetadata(metadata: androidx.media2.common.MediaMetadata): void;
				public getStartPosition(): number;
				public toString(): string;
				public removeOnMetadataChangedListener(listener: androidx.media2.common.MediaItem.OnMetadataChangedListener): void;
				public getMediaId(): string;
				public onPreParceling(isStream: boolean): void;
			}
			export module MediaItem {
				export class Builder extends java.lang.Object {
					public static class: java.lang.Class<androidx.media2.common.MediaItem.Builder>;
					public setMetadata(metadata: androidx.media2.common.MediaMetadata): androidx.media2.common.MediaItem.Builder;
					public constructor();
					public setEndPosition(position: number): androidx.media2.common.MediaItem.Builder;
					public build(): androidx.media2.common.MediaItem;
					public setStartPosition(position: number): androidx.media2.common.MediaItem.Builder;
				}
				export class OnMetadataChangedListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.media2.common.MediaItem.OnMetadataChangedListener>;
					/**
					 * Constructs a new instance of the androidx.media2.common.MediaItem$OnMetadataChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onMetadataChanged(mediaItem0: androidx.media2.common.MediaItem, mediaMetadata1: androidx.media2.common.MediaMetadata): void;
					});
					public constructor();
					public onMetadataChanged(mediaItem0: androidx.media2.common.MediaItem, mediaMetadata1: androidx.media2.common.MediaMetadata): void;
				}
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module common {
			export class MediaItemParcelizer extends java.lang.Object {
				public static class: java.lang.Class<androidx.media2.common.MediaItemParcelizer>;
				public static write(obj: androidx.media2.common.MediaItem, parcel: androidx.versionedparcelable.VersionedParcel): void;
				public static read(parcel: androidx.versionedparcelable.VersionedParcel): androidx.media2.common.MediaItem;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module common {
			export class MediaMetadata extends androidx.versionedparcelable.CustomVersionedParcelable {
				public static class: java.lang.Class<androidx.media2.common.MediaMetadata>;
				public static BROWSABLE_TYPE_ALBUMS: number;
				public static BROWSABLE_TYPE_ARTISTS: number;
				public static BROWSABLE_TYPE_GENRES: number;
				public static BROWSABLE_TYPE_MIXED: number;
				public static BROWSABLE_TYPE_NONE: number;
				public static BROWSABLE_TYPE_PLAYLISTS: number;
				public static BROWSABLE_TYPE_TITLES: number;
				public static BROWSABLE_TYPE_YEARS: number;
				public static METADATA_KEY_ADVERTISEMENT: string;
				public static METADATA_KEY_ALBUM: string;
				public static METADATA_KEY_ALBUM_ART: string;
				public static METADATA_KEY_ALBUM_ARTIST: string;
				public static METADATA_KEY_ALBUM_ART_URI: string;
				public static METADATA_KEY_ART: string;
				public static METADATA_KEY_ARTIST: string;
				public static METADATA_KEY_ART_URI: string;
				public static METADATA_KEY_AUTHOR: string;
				public static METADATA_KEY_BROWSABLE: string;
				public static METADATA_KEY_COMPILATION: string;
				public static METADATA_KEY_COMPOSER: string;
				public static METADATA_KEY_DATE: string;
				public static METADATA_KEY_DISC_NUMBER: string;
				public static METADATA_KEY_DISPLAY_DESCRIPTION: string;
				public static METADATA_KEY_DISPLAY_ICON: string;
				public static METADATA_KEY_DISPLAY_ICON_URI: string;
				public static METADATA_KEY_DISPLAY_SUBTITLE: string;
				public static METADATA_KEY_DISPLAY_TITLE: string;
				public static METADATA_KEY_DOWNLOAD_STATUS: string;
				public static METADATA_KEY_DURATION: string;
				public static METADATA_KEY_EXTRAS: string;
				public static METADATA_KEY_GENRE: string;
				public static METADATA_KEY_MEDIA_ID: string;
				public static METADATA_KEY_MEDIA_URI: string;
				public static METADATA_KEY_NUM_TRACKS: string;
				public static METADATA_KEY_PLAYABLE: string;
				public static METADATA_KEY_RADIO_FREQUENCY: string;
				public static METADATA_KEY_RADIO_PROGRAM_NAME: string;
				public static METADATA_KEY_RATING: string;
				public static METADATA_KEY_TITLE: string;
				public static METADATA_KEY_TRACK_NUMBER: string;
				public static METADATA_KEY_USER_RATING: string;
				public static METADATA_KEY_WRITER: string;
				public static METADATA_KEY_YEAR: string;
				public static STATUS_DOWNLOADED: number;
				public static STATUS_DOWNLOADING: number;
				public static STATUS_NOT_DOWNLOADED: number;
				public getRating(key: string): androidx.media2.common.Rating;
				public getExtras(): globalAndroid.os.Bundle;
				public keySet(): java.util.Set<string>;
				public containsKey(key: string): boolean;
				public onPostParceling(): void;
				public toString(): string;
				public onPreParceling(isStream: boolean): void;
				public size(): number;
				public getText(key: string): string;
				public getBitmap(key: string): globalAndroid.graphics.Bitmap;
				public getLong(key: string): number;
				public getFloat(key: string): number;
				public getString(key: string): string;
				public getObject(key: string): any;
				public getMediaId(): string;
			}
			export module MediaMetadata {
				export class BitmapEntry extends java.lang.Object implements androidx.versionedparcelable.VersionedParcelable {
					public static class: java.lang.Class<androidx.media2.common.MediaMetadata.BitmapEntry>;
				}
				export class BitmapKey extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.media2.common.MediaMetadata.BitmapKey>;
					/**
					 * Constructs a new instance of the androidx.media2.common.MediaMetadata$BitmapKey interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
					public static class: java.lang.Class<androidx.media2.common.MediaMetadata.Builder>;
					public putFloat(key: string, value: number): androidx.media2.common.MediaMetadata.Builder;
					public constructor(source: androidx.media2.common.MediaMetadata);
					public setExtras(extras: globalAndroid.os.Bundle): androidx.media2.common.MediaMetadata.Builder;
					public constructor();
					public putText(key: string, value: string): androidx.media2.common.MediaMetadata.Builder;
					public putBitmap(key: string, value: globalAndroid.graphics.Bitmap): androidx.media2.common.MediaMetadata.Builder;
					public putLong(key: string, value: number): androidx.media2.common.MediaMetadata.Builder;
					public build(): androidx.media2.common.MediaMetadata;
					public putRating(key: string, value: androidx.media2.common.Rating): androidx.media2.common.MediaMetadata.Builder;
					public putString(key: string, value: string): androidx.media2.common.MediaMetadata.Builder;
				}
				export class BundleKey extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.media2.common.MediaMetadata.BundleKey>;
					/**
					 * Constructs a new instance of the androidx.media2.common.MediaMetadata$BundleKey interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
				export class FloatKey extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.media2.common.MediaMetadata.FloatKey>;
					/**
					 * Constructs a new instance of the androidx.media2.common.MediaMetadata$FloatKey interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
				export class LongKey extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.media2.common.MediaMetadata.LongKey>;
					/**
					 * Constructs a new instance of the androidx.media2.common.MediaMetadata$LongKey interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
				export class RatingKey extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.media2.common.MediaMetadata.RatingKey>;
					/**
					 * Constructs a new instance of the androidx.media2.common.MediaMetadata$RatingKey interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
				export class TextKey extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.media2.common.MediaMetadata.TextKey>;
					/**
					 * Constructs a new instance of the androidx.media2.common.MediaMetadata$TextKey interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
		export module common {
			export class MediaMetadataParcelizer extends java.lang.Object {
				public static class: java.lang.Class<androidx.media2.common.MediaMetadataParcelizer>;
				public static write(obj: androidx.media2.common.MediaMetadata, parcel: androidx.versionedparcelable.VersionedParcel): void;
				public constructor();
				public static read(parcel: androidx.versionedparcelable.VersionedParcel): androidx.media2.common.MediaMetadata;
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module common {
			export class MediaParcelUtils extends java.lang.Object {
				public static class: java.lang.Class<androidx.media2.common.MediaParcelUtils>;
				public static TAG: string;
				public static fromParcelable(p: androidx.versionedparcelable.ParcelImpl): androidx.versionedparcelable.VersionedParcelable;
				public static fromParcelableList(parcelList: java.util.List<any>): java.util.List<any>;
				public static toParcelableList(items: java.util.List<any>): java.util.List<androidx.versionedparcelable.ParcelImpl>;
				public static toParcelable(item: androidx.versionedparcelable.VersionedParcelable): androidx.versionedparcelable.ParcelImpl;
			}
			export module MediaParcelUtils {
				export class MediaItemParcelImpl extends androidx.versionedparcelable.ParcelImpl {
					public static class: java.lang.Class<androidx.media2.common.MediaParcelUtils.MediaItemParcelImpl>;
					public getVersionedParcel(): androidx.media2.common.MediaItem;
					public describeContents(): number;
					public writeToParcel(dest: globalAndroid.os.Parcel, flags: number): void;
					public getVersionedParcel(): androidx.versionedparcelable.VersionedParcelable;
				}
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module common {
			export class ParcelImplListSlice extends java.lang.Object implements globalAndroid.os.Parcelable {
				public static class: java.lang.Class<androidx.media2.common.ParcelImplListSlice>;
				public static CREATOR: globalAndroid.os.Parcelable.Creator<androidx.media2.common.ParcelImplListSlice>;
				public constructor(list: java.util.List<androidx.versionedparcelable.ParcelImpl>);
				public getList(): java.util.List<androidx.versionedparcelable.ParcelImpl>;
				public describeContents(): number;
				public writeToParcel(dest: globalAndroid.os.Parcel, flags: number): void;
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module common {
			export class Rating extends java.lang.Object implements androidx.versionedparcelable.VersionedParcelable {
				public static class: java.lang.Class<androidx.media2.common.Rating>;
				/**
				 * Constructs a new instance of the androidx.media2.common.Rating interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					isRated(): boolean;
				});
				public constructor();
				public isRated(): boolean;
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module common {
			export abstract class SessionPlayer extends java.lang.Object implements java.io.Closeable {
				public static class: java.lang.Class<androidx.media2.common.SessionPlayer>;
				public static BUFFERING_STATE_BUFFERING_AND_PLAYABLE: number;
				public static BUFFERING_STATE_BUFFERING_AND_STARVED: number;
				public static BUFFERING_STATE_COMPLETE: number;
				public static BUFFERING_STATE_UNKNOWN: number;
				public static INVALID_ITEM_INDEX: number;
				public static PLAYER_STATE_ERROR: number;
				public static PLAYER_STATE_IDLE: number;
				public static PLAYER_STATE_PAUSED: number;
				public static PLAYER_STATE_PLAYING: number;
				public static REPEAT_MODE_ALL: number;
				public static REPEAT_MODE_GROUP: number;
				public static REPEAT_MODE_NONE: number;
				public static REPEAT_MODE_ONE: number;
				public static SHUFFLE_MODE_ALL: number;
				public static SHUFFLE_MODE_GROUP: number;
				public static SHUFFLE_MODE_NONE: number;
				public static UNKNOWN_TIME: number;
				public setShuffleMode(int0: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public getCurrentMediaItem(): androidx.media2.common.MediaItem;
				public getPlayerState(): number;
				public getCurrentMediaItemIndex(): number;
				public unregisterPlayerCallback(callback: androidx.media2.common.SessionPlayer.PlayerCallback): void;
				public getDuration(): number;
				public movePlaylistItem(fromIndex: number, toIndex: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public prepare(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public selectTrack(trackInfo: androidx.media2.common.SessionPlayer.TrackInfo): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public pause(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public play(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public constructor();
				public setPlaybackSpeed(float0: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public getPreviousMediaItemIndex(): number;
				public setRepeatMode(int0: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public skipToPlaylistItem(int0: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public getBufferedPosition(): number;
				public updatePlaylistMetadata(mediaMetadata0: androidx.media2.common.MediaMetadata): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public setMediaItem(mediaItem0: androidx.media2.common.MediaItem): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public getCallbacks(): java.util.List<androidx.core.util.Pair<androidx.media2.common.SessionPlayer.PlayerCallback,java.util.concurrent.Executor>>;
				public getNextMediaItemIndex(): number;
				public getSelectedTrack(trackType: number): androidx.media2.common.SessionPlayer.TrackInfo;
				public registerPlayerCallback(executor: java.util.concurrent.Executor, callback: androidx.media2.common.SessionPlayer.PlayerCallback): void;
				public getPlaybackSpeed(): number;
				public setAudioAttributes(audioAttributesCompat0: androidx.media.AudioAttributesCompat): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public close(): void;
				public skipToPreviousPlaylistItem(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public getVideoSize(): androidx.media2.common.VideoSize;
				public getRepeatMode(): number;
				public getShuffleMode(): number;
				public setPlaylist(list0: java.util.List<androidx.media2.common.MediaItem>, mediaMetadata1: androidx.media2.common.MediaMetadata): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public getCurrentPosition(): number;
				public addPlaylistItem(int0: number, mediaItem1: androidx.media2.common.MediaItem): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public skipToNextPlaylistItem(): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public getBufferingState(): number;
				public removePlaylistItem(int0: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public deselectTrack(trackInfo: androidx.media2.common.SessionPlayer.TrackInfo): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public getPlaylistMetadata(): androidx.media2.common.MediaMetadata;
				public seekTo(long0: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public getPlaylist(): java.util.List<androidx.media2.common.MediaItem>;
				public getAudioAttributes(): androidx.media.AudioAttributesCompat;
				public getTracks(): java.util.List<androidx.media2.common.SessionPlayer.TrackInfo>;
				public replacePlaylistItem(int0: number, mediaItem1: androidx.media2.common.MediaItem): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				public setSurface(surface: globalAndroid.view.Surface): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
			}
			export module SessionPlayer {
				export class BuffState extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.media2.common.SessionPlayer.BuffState>;
					/**
					 * Constructs a new instance of the androidx.media2.common.SessionPlayer$BuffState interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
				export abstract class PlayerCallback extends java.lang.Object {
					public static class: java.lang.Class<androidx.media2.common.SessionPlayer.PlayerCallback>;
					public onTrackSelected(player: androidx.media2.common.SessionPlayer, trackInfo: androidx.media2.common.SessionPlayer.TrackInfo): void;
					public onPlaylistChanged(player: androidx.media2.common.SessionPlayer, list: java.util.List<androidx.media2.common.MediaItem>, metadata: androidx.media2.common.MediaMetadata): void;
					public onSeekCompleted(player: androidx.media2.common.SessionPlayer, position: number): void;
					public onPlaybackCompleted(player: androidx.media2.common.SessionPlayer): void;
					public onSubtitleData(player: androidx.media2.common.SessionPlayer, item: androidx.media2.common.MediaItem, track: androidx.media2.common.SessionPlayer.TrackInfo, data: androidx.media2.common.SubtitleData): void;
					public onPlaylistMetadataChanged(player: androidx.media2.common.SessionPlayer, metadata: androidx.media2.common.MediaMetadata): void;
					public onTrackDeselected(player: androidx.media2.common.SessionPlayer, trackInfo: androidx.media2.common.SessionPlayer.TrackInfo): void;
					public onBufferingStateChanged(player: androidx.media2.common.SessionPlayer, item: androidx.media2.common.MediaItem, buffState: number): void;
					public onShuffleModeChanged(player: androidx.media2.common.SessionPlayer, shuffleMode: number): void;
					public onTracksChanged(player: androidx.media2.common.SessionPlayer, tracks: java.util.List<androidx.media2.common.SessionPlayer.TrackInfo>): void;
					public onCurrentMediaItemChanged(player: androidx.media2.common.SessionPlayer, item: androidx.media2.common.MediaItem): void;
					public onPlayerStateChanged(player: androidx.media2.common.SessionPlayer, playerState: number): void;
					public constructor();
					public onPlaybackSpeedChanged(player: androidx.media2.common.SessionPlayer, playbackSpeed: number): void;
					public onRepeatModeChanged(player: androidx.media2.common.SessionPlayer, repeatMode: number): void;
					public onVideoSizeChanged(player: androidx.media2.common.SessionPlayer, size: androidx.media2.common.VideoSize): void;
					public onAudioAttributesChanged(player: androidx.media2.common.SessionPlayer, attributes: androidx.media.AudioAttributesCompat): void;
				}
				export class PlayerResult extends java.lang.Object implements androidx.media2.common.BaseResult {
					public static class: java.lang.Class<androidx.media2.common.SessionPlayer.PlayerResult>;
					public getResultCode(): number;
					public constructor(resultCode: number, item: androidx.media2.common.MediaItem);
					public getCompletionTime(): number;
					public getMediaItem(): androidx.media2.common.MediaItem;
					public static createFuture(resultCode: number): com.google.common.util.concurrent.ListenableFuture<androidx.media2.common.SessionPlayer.PlayerResult>;
				}
				export module PlayerResult {
					export class ResultCode extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<androidx.media2.common.SessionPlayer.PlayerResult.ResultCode>;
						/**
						 * Constructs a new instance of the androidx.media2.common.SessionPlayer$PlayerResult$ResultCode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
				export class PlayerState extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.media2.common.SessionPlayer.PlayerState>;
					/**
					 * Constructs a new instance of the androidx.media2.common.SessionPlayer$PlayerState interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
				export class RepeatMode extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.media2.common.SessionPlayer.RepeatMode>;
					/**
					 * Constructs a new instance of the androidx.media2.common.SessionPlayer$RepeatMode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
				export class ShuffleMode extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.media2.common.SessionPlayer.ShuffleMode>;
					/**
					 * Constructs a new instance of the androidx.media2.common.SessionPlayer$ShuffleMode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
				export class TrackInfo extends androidx.versionedparcelable.CustomVersionedParcelable {
					public static class: java.lang.Class<androidx.media2.common.SessionPlayer.TrackInfo>;
					public static MEDIA_TRACK_TYPE_AUDIO: number;
					public static MEDIA_TRACK_TYPE_METADATA: number;
					public static MEDIA_TRACK_TYPE_SUBTITLE: number;
					public static MEDIA_TRACK_TYPE_UNKNOWN: number;
					public static MEDIA_TRACK_TYPE_VIDEO: number;
					public equals(obj: any): boolean;
					public getId(): number;
					public getLanguage(): java.util.Locale;
					public getFormat(): globalAndroid.media.MediaFormat;
					public isSelectable(): boolean;
					public toString(): string;
					public onPreParceling(isStream: boolean): void;
					public constructor();
					public constructor(id: number, type: number, format: globalAndroid.media.MediaFormat, isSelectable: boolean);
					public hashCode(): number;
					public getTrackType(): number;
					public onPostParceling(): void;
					public constructor(id: number, type: number, format: globalAndroid.media.MediaFormat);
				}
				export module TrackInfo {
					export class MediaTrackType extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<androidx.media2.common.SessionPlayer.TrackInfo.MediaTrackType>;
						/**
						 * Constructs a new instance of the androidx.media2.common.SessionPlayer$TrackInfo$MediaTrackType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module common {
			export class SubtitleData extends java.lang.Object implements androidx.versionedparcelable.VersionedParcelable {
				public static class: java.lang.Class<androidx.media2.common.SubtitleData>;
				public getData(): native.Array<number>;
				public getDurationUs(): number;
				public equals(obj: any): boolean;
				public getStartTimeUs(): number;
				public hashCode(): number;
				public constructor(startTimeUs: number, durationUs: number, data: native.Array<number>);
				public equals(o: any): boolean;
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module common {
			export class SubtitleDataParcelizer extends java.lang.Object {
				public static class: java.lang.Class<androidx.media2.common.SubtitleDataParcelizer>;
				public static read(parcel: androidx.versionedparcelable.VersionedParcel): androidx.media2.common.SubtitleData;
				public constructor();
				public static write(obj: androidx.media2.common.SubtitleData, parcel: androidx.versionedparcelable.VersionedParcel): void;
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module common {
			export class TrackInfoParcelizer extends java.lang.Object {
				public static class: java.lang.Class<androidx.media2.common.TrackInfoParcelizer>;
				public static read(parcel: androidx.versionedparcelable.VersionedParcel): androidx.media2.common.SessionPlayer.TrackInfo;
				public static write(obj: androidx.media2.common.SessionPlayer.TrackInfo, parcel: androidx.versionedparcelable.VersionedParcel): void;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module common {
			export class UriMediaItem extends androidx.media2.common.MediaItem {
				public static class: java.lang.Class<androidx.media2.common.UriMediaItem>;
				public getUriHeaders(): java.util.Map<string,string>;
				public getUri(): globalAndroid.net.Uri;
				public getUriCookies(): java.util.List<java.net.HttpCookie>;
			}
			export module UriMediaItem {
				export class Builder extends androidx.media2.common.MediaItem.Builder {
					public static class: java.lang.Class<androidx.media2.common.UriMediaItem.Builder>;
					public setEndPosition(position: number): androidx.media2.common.UriMediaItem.Builder;
					public setStartPosition(position: number): androidx.media2.common.UriMediaItem.Builder;
					public setMetadata(metadata: androidx.media2.common.MediaMetadata): androidx.media2.common.MediaItem.Builder;
					public constructor();
					public constructor(uri: globalAndroid.net.Uri, headers: java.util.Map<string,string>, cookies: java.util.List<java.net.HttpCookie>);
					public setEndPosition(position: number): androidx.media2.common.MediaItem.Builder;
					public build(): androidx.media2.common.UriMediaItem;
					public constructor(uri: globalAndroid.net.Uri);
					public setMetadata(metadata: androidx.media2.common.MediaMetadata): androidx.media2.common.UriMediaItem.Builder;
					public build(): androidx.media2.common.MediaItem;
					public setStartPosition(position: number): androidx.media2.common.MediaItem.Builder;
				}
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module common {
			export class VideoSize extends java.lang.Object implements androidx.versionedparcelable.VersionedParcelable {
				public static class: java.lang.Class<androidx.media2.common.VideoSize>;
				public getHeight(): number;
				public getWidth(): number;
				public equals(obj: any): boolean;
				public hashCode(): number;
				public constructor(width: number, height: number);
				public toString(): string;
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module common {
			export class VideoSizeParcelizer extends java.lang.Object {
				public static class: java.lang.Class<androidx.media2.common.VideoSizeParcelizer>;
				public static write(obj: androidx.media2.common.VideoSize, parcel: androidx.versionedparcelable.VersionedParcel): void;
				public static read(parcel: androidx.versionedparcelable.VersionedParcel): androidx.media2.common.VideoSize;
				public constructor();
			}
		}
	}
}

//Generics information:

