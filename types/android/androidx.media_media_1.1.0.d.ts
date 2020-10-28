declare module android {
	export module support {
		export module v4 {
			export module media {
				export class AudioAttributesCompatParcelizer extends androidx.media.AudioAttributesCompatParcelizer {
					public static class: java.lang.Class<android.support.v4.media.AudioAttributesCompatParcelizer>;
					public static read(parcel: androidx.versionedparcelable.VersionedParcel): androidx.media.AudioAttributesCompat;
					public static write(obj: androidx.media.AudioAttributesCompat, parcel: androidx.versionedparcelable.VersionedParcel): void;
					public constructor();
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v4 {
			export module media {
				export class AudioAttributesImplApi21Parcelizer extends androidx.media.AudioAttributesImplApi21Parcelizer {
					public static class: java.lang.Class<android.support.v4.media.AudioAttributesImplApi21Parcelizer>;
					public constructor();
					public static write(obj: androidx.media.AudioAttributesImplApi21, parcel: androidx.versionedparcelable.VersionedParcel): void;
					public static read(parcel: androidx.versionedparcelable.VersionedParcel): androidx.media.AudioAttributesImplApi21;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v4 {
			export module media {
				export class AudioAttributesImplApi26Parcelizer extends androidx.media.AudioAttributesImplApi26Parcelizer {
					public static class: java.lang.Class<android.support.v4.media.AudioAttributesImplApi26Parcelizer>;
					public static read(parcel: androidx.versionedparcelable.VersionedParcel): androidx.media.AudioAttributesImplApi26;
					public constructor();
					public static write(obj: androidx.media.AudioAttributesImplApi26, parcel: androidx.versionedparcelable.VersionedParcel): void;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v4 {
			export module media {
				export class AudioAttributesImplBaseParcelizer extends androidx.media.AudioAttributesImplBaseParcelizer {
					public static class: java.lang.Class<android.support.v4.media.AudioAttributesImplBaseParcelizer>;
					public static write(obj: androidx.media.AudioAttributesImplBase, parcel: androidx.versionedparcelable.VersionedParcel): void;
					public constructor();
					public static read(parcel: androidx.versionedparcelable.VersionedParcel): androidx.media.AudioAttributesImplBase;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v4 {
			export module media {
				export class MediaBrowserCompat extends java.lang.Object {
					public static class: java.lang.Class<android.support.v4.media.MediaBrowserCompat>;
					public static EXTRA_PAGE: string;
					public static EXTRA_PAGE_SIZE: string;
					public static EXTRA_MEDIA_ID: string;
					public static EXTRA_DOWNLOAD_PROGRESS: string;
					public static CUSTOM_ACTION_DOWNLOAD: string;
					public static CUSTOM_ACTION_REMOVE_DOWNLOADED_FILE: string;
					public subscribe(parentId: string, callback: android.support.v4.media.MediaBrowserCompat.SubscriptionCallback): void;
					public isConnected(): boolean;
					public getServiceComponent(): android.content.ComponentName;
					public constructor(context: android.content.Context, serviceComponent: android.content.ComponentName, callback: android.support.v4.media.MediaBrowserCompat.ConnectionCallback, rootHints: android.os.Bundle);
					public subscribe(parentId: string, options: android.os.Bundle, callback: android.support.v4.media.MediaBrowserCompat.SubscriptionCallback): void;
					public getItem(mediaId: string, cb: android.support.v4.media.MediaBrowserCompat.ItemCallback): void;
					public connect(): void;
					public search(query: string, extras: android.os.Bundle, callback: android.support.v4.media.MediaBrowserCompat.SearchCallback): void;
					public sendCustomAction(action: string, extras: android.os.Bundle, callback: android.support.v4.media.MediaBrowserCompat.CustomActionCallback): void;
					public unsubscribe(parentId: string, callback: android.support.v4.media.MediaBrowserCompat.SubscriptionCallback): void;
					public getExtras(): android.os.Bundle;
					public getRoot(): string;
					public getSessionToken(): android.support.v4.media.session.MediaSessionCompat.Token;
					public getNotifyChildrenChangedOptions(): android.os.Bundle;
					public disconnect(): void;
					public unsubscribe(parentId: string): void;
				}
				export module MediaBrowserCompat {
					export class CallbackHandler extends android.os.Handler {
						public static class: java.lang.Class<android.support.v4.media.MediaBrowserCompat.CallbackHandler>;
						public handleMessage(msg: android.os.Message): void;
					}
					export class ConnectionCallback extends java.lang.Object {
						public static class: java.lang.Class<android.support.v4.media.MediaBrowserCompat.ConnectionCallback>;
						public constructor();
						public onConnected(): void;
						public onConnectionFailed(): void;
						public onConnectionSuspended(): void;
					}
					export module ConnectionCallback {
						export class ConnectionCallbackApi21 extends java.lang.Object {
							public static class: java.lang.Class<android.support.v4.media.MediaBrowserCompat.ConnectionCallback.ConnectionCallbackApi21>;
							public onConnectionFailed(): void;
							public onConnected(): void;
							public onConnectionSuspended(): void;
						}
						export class ConnectionCallbackInternal extends java.lang.Object {
							public static class: java.lang.Class<android.support.v4.media.MediaBrowserCompat.ConnectionCallback.ConnectionCallbackInternal>;
							/**
							 * Constructs a new instance of the android.support.v4.media.MediaBrowserCompat$ConnectionCallback$ConnectionCallbackInternal interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onConnected(): void;
								onConnectionSuspended(): void;
								onConnectionFailed(): void;
							});
							public constructor();
							public onConnectionFailed(): void;
							public onConnected(): void;
							public onConnectionSuspended(): void;
						}
					}
					export abstract class CustomActionCallback extends java.lang.Object {
						public static class: java.lang.Class<android.support.v4.media.MediaBrowserCompat.CustomActionCallback>;
						public onError(action: string, extras: android.os.Bundle, data: android.os.Bundle): void;
						public constructor();
						public onResult(action: string, extras: android.os.Bundle, resultData: android.os.Bundle): void;
						public onProgressUpdate(action: string, extras: android.os.Bundle, data: android.os.Bundle): void;
					}
					export class CustomActionResultReceiver extends android.support.v4.os.ResultReceiver {
						public static class: java.lang.Class<android.support.v4.media.MediaBrowserCompat.CustomActionResultReceiver>;
						public writeToParcel(out: android.os.Parcel, flags: number): void;
						public describeContents(): number;
						public onReceiveResult(resultCode: number, resultData: android.os.Bundle): void;
					}
					export abstract class ItemCallback extends java.lang.Object {
						public static class: java.lang.Class<android.support.v4.media.MediaBrowserCompat.ItemCallback>;
						public onItemLoaded(item: android.support.v4.media.MediaBrowserCompat.MediaItem): void;
						public constructor();
						public onError(itemId: string): void;
					}
					export module ItemCallback {
						export class ItemCallbackApi23 extends java.lang.Object {
							public static class: java.lang.Class<android.support.v4.media.MediaBrowserCompat.ItemCallback.ItemCallbackApi23>;
							public onError(itemId: string): void;
							public onItemLoaded(item: any): void;
							public onError(mediaId: string): void;
						}
					}
					export class ItemReceiver extends android.support.v4.os.ResultReceiver {
						public static class: java.lang.Class<android.support.v4.media.MediaBrowserCompat.ItemReceiver>;
						public writeToParcel(out: android.os.Parcel, flags: number): void;
						public describeContents(): number;
						public onReceiveResult(resultCode: number, resultData: android.os.Bundle): void;
					}
					export class MediaBrowserImpl extends java.lang.Object {
						public static class: java.lang.Class<android.support.v4.media.MediaBrowserCompat.MediaBrowserImpl>;
						/**
						 * Constructs a new instance of the android.support.v4.media.MediaBrowserCompat$MediaBrowserImpl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							connect(): void;
							disconnect(): void;
							isConnected(): boolean;
							getServiceComponent(): android.content.ComponentName;
							getRoot(): string;
							getExtras(): android.os.Bundle;
							getSessionToken(): android.support.v4.media.session.MediaSessionCompat.Token;
							subscribe(string0: string, bundle1: android.os.Bundle, subscriptionCallback2: android.support.v4.media.MediaBrowserCompat.SubscriptionCallback): void;
							unsubscribe(string0: string, subscriptionCallback1: android.support.v4.media.MediaBrowserCompat.SubscriptionCallback): void;
							getItem(string0: string, itemCallback1: android.support.v4.media.MediaBrowserCompat.ItemCallback): void;
							search(string0: string, bundle1: android.os.Bundle, searchCallback2: android.support.v4.media.MediaBrowserCompat.SearchCallback): void;
							sendCustomAction(string0: string, bundle1: android.os.Bundle, customActionCallback2: android.support.v4.media.MediaBrowserCompat.CustomActionCallback): void;
							getNotifyChildrenChangedOptions(): android.os.Bundle;
						});
						public constructor();
						public unsubscribe(string0: string, subscriptionCallback1: android.support.v4.media.MediaBrowserCompat.SubscriptionCallback): void;
						public getNotifyChildrenChangedOptions(): android.os.Bundle;
						public subscribe(string0: string, bundle1: android.os.Bundle, subscriptionCallback2: android.support.v4.media.MediaBrowserCompat.SubscriptionCallback): void;
						public getSessionToken(): android.support.v4.media.session.MediaSessionCompat.Token;
						public getItem(string0: string, itemCallback1: android.support.v4.media.MediaBrowserCompat.ItemCallback): void;
						public isConnected(): boolean;
						public connect(): void;
						public disconnect(): void;
						public getServiceComponent(): android.content.ComponentName;
						public getRoot(): string;
						public search(string0: string, bundle1: android.os.Bundle, searchCallback2: android.support.v4.media.MediaBrowserCompat.SearchCallback): void;
						public sendCustomAction(string0: string, bundle1: android.os.Bundle, customActionCallback2: android.support.v4.media.MediaBrowserCompat.CustomActionCallback): void;
						public getExtras(): android.os.Bundle;
					}
					export class MediaBrowserImplApi21 extends java.lang.Object implements android.support.v4.media.MediaBrowserCompat.MediaBrowserImpl, android.support.v4.media.MediaBrowserCompat.MediaBrowserServiceCallbackImpl, android.support.v4.media.MediaBrowserCompat.ConnectionCallback.ConnectionCallbackInternal {
						public static class: java.lang.Class<android.support.v4.media.MediaBrowserCompat.MediaBrowserImplApi21>;
						public mBrowserFwk: any;
						public mRootHints: android.os.Bundle;
						public mHandler: android.support.v4.media.MediaBrowserCompat.CallbackHandler;
						public mServiceVersion: number;
						public mServiceBinderWrapper: android.support.v4.media.MediaBrowserCompat.ServiceBinderWrapper;
						public mCallbacksMessenger: android.os.Messenger;
						public unsubscribe(parentId: string, callback: android.support.v4.media.MediaBrowserCompat.SubscriptionCallback): void;
						public sendCustomAction(action: string, extras: android.os.Bundle, callback: android.support.v4.media.MediaBrowserCompat.CustomActionCallback): void;
						public getNotifyChildrenChangedOptions(): android.os.Bundle;
						public onConnected(): void;
						public onConnectionFailed(): void;
						public getSessionToken(): android.support.v4.media.session.MediaSessionCompat.Token;
						public search(query: string, extras: android.os.Bundle, callback: android.support.v4.media.MediaBrowserCompat.SearchCallback): void;
						public subscribe(parentId: string, options: android.os.Bundle, callback: android.support.v4.media.MediaBrowserCompat.SubscriptionCallback): void;
						public onConnectionFailed(callback: android.os.Messenger): void;
						public isConnected(): boolean;
						public getItem(mediaId: string, cb: android.support.v4.media.MediaBrowserCompat.ItemCallback): void;
						public connect(): void;
						public disconnect(): void;
						public getServiceComponent(): android.content.ComponentName;
						public getRoot(): string;
						public onServiceConnected(callback: android.os.Messenger, root: string, session: android.support.v4.media.session.MediaSessionCompat.Token, extra: android.os.Bundle): void;
						public onLoadChildren(callback: android.os.Messenger, parentId: string, list: java.util.List<any>, options: android.os.Bundle, notifyChildrenChangedOptions: android.os.Bundle): void;
						public getExtras(): android.os.Bundle;
						public onConnectionSuspended(): void;
					}
					export class MediaBrowserImplApi23 extends android.support.v4.media.MediaBrowserCompat.MediaBrowserImplApi21 {
						public static class: java.lang.Class<android.support.v4.media.MediaBrowserCompat.MediaBrowserImplApi23>;
						public unsubscribe(parentId: string, callback: android.support.v4.media.MediaBrowserCompat.SubscriptionCallback): void;
						public sendCustomAction(action: string, extras: android.os.Bundle, callback: android.support.v4.media.MediaBrowserCompat.CustomActionCallback): void;
						public getNotifyChildrenChangedOptions(): android.os.Bundle;
						public onConnectionFailed(): void;
						public onConnected(): void;
						public getSessionToken(): android.support.v4.media.session.MediaSessionCompat.Token;
						public search(query: string, extras: android.os.Bundle, callback: android.support.v4.media.MediaBrowserCompat.SearchCallback): void;
						public onConnectionFailed(callback: android.os.Messenger): void;
						public subscribe(parentId: string, options: android.os.Bundle, callback: android.support.v4.media.MediaBrowserCompat.SubscriptionCallback): void;
						public isConnected(): boolean;
						public getItem(mediaId: string, cb: android.support.v4.media.MediaBrowserCompat.ItemCallback): void;
						public connect(): void;
						public disconnect(): void;
						public getServiceComponent(): android.content.ComponentName;
						public getRoot(): string;
						public onServiceConnected(callback: android.os.Messenger, root: string, session: android.support.v4.media.session.MediaSessionCompat.Token, extra: android.os.Bundle): void;
						public onLoadChildren(callback: android.os.Messenger, parentId: string, list: java.util.List<any>, options: android.os.Bundle, notifyChildrenChangedOptions: android.os.Bundle): void;
						public getExtras(): android.os.Bundle;
						public onConnectionSuspended(): void;
					}
					export class MediaBrowserImplApi26 extends android.support.v4.media.MediaBrowserCompat.MediaBrowserImplApi23 {
						public static class: java.lang.Class<android.support.v4.media.MediaBrowserCompat.MediaBrowserImplApi26>;
						public unsubscribe(parentId: string, callback: android.support.v4.media.MediaBrowserCompat.SubscriptionCallback): void;
						public sendCustomAction(action: string, extras: android.os.Bundle, callback: android.support.v4.media.MediaBrowserCompat.CustomActionCallback): void;
						public getNotifyChildrenChangedOptions(): android.os.Bundle;
						public onConnectionFailed(): void;
						public onConnected(): void;
						public getSessionToken(): android.support.v4.media.session.MediaSessionCompat.Token;
						public search(query: string, extras: android.os.Bundle, callback: android.support.v4.media.MediaBrowserCompat.SearchCallback): void;
						public subscribe(parentId: string, options: android.os.Bundle, callback: android.support.v4.media.MediaBrowserCompat.SubscriptionCallback): void;
						public onConnectionFailed(callback: android.os.Messenger): void;
						public isConnected(): boolean;
						public getItem(mediaId: string, cb: android.support.v4.media.MediaBrowserCompat.ItemCallback): void;
						public connect(): void;
						public disconnect(): void;
						public getServiceComponent(): android.content.ComponentName;
						public getRoot(): string;
						public onServiceConnected(callback: android.os.Messenger, root: string, session: android.support.v4.media.session.MediaSessionCompat.Token, extra: android.os.Bundle): void;
						public onLoadChildren(callback: android.os.Messenger, parentId: string, list: java.util.List<any>, options: android.os.Bundle, notifyChildrenChangedOptions: android.os.Bundle): void;
						public getExtras(): android.os.Bundle;
						public onConnectionSuspended(): void;
					}
					export class MediaBrowserImplBase extends java.lang.Object implements android.support.v4.media.MediaBrowserCompat.MediaBrowserImpl, android.support.v4.media.MediaBrowserCompat.MediaBrowserServiceCallbackImpl {
						public static class: java.lang.Class<android.support.v4.media.MediaBrowserCompat.MediaBrowserImplBase>;
						public unsubscribe(parentId: string, callback: android.support.v4.media.MediaBrowserCompat.SubscriptionCallback): void;
						public sendCustomAction(action: string, extras: android.os.Bundle, callback: android.support.v4.media.MediaBrowserCompat.CustomActionCallback): void;
						public getNotifyChildrenChangedOptions(): android.os.Bundle;
						public getSessionToken(): android.support.v4.media.session.MediaSessionCompat.Token;
						public search(query: string, extras: android.os.Bundle, callback: android.support.v4.media.MediaBrowserCompat.SearchCallback): void;
						public subscribe(parentId: string, options: android.os.Bundle, callback: android.support.v4.media.MediaBrowserCompat.SubscriptionCallback): void;
						public onConnectionFailed(callback: android.os.Messenger): void;
						public isConnected(): boolean;
						public getItem(mediaId: string, cb: android.support.v4.media.MediaBrowserCompat.ItemCallback): void;
						public connect(): void;
						public disconnect(): void;
						public getServiceComponent(): android.content.ComponentName;
						public getRoot(): string;
						public onServiceConnected(callback: android.os.Messenger, root: string, session: android.support.v4.media.session.MediaSessionCompat.Token, extra: android.os.Bundle): void;
						public constructor(context: android.content.Context, serviceComponent: android.content.ComponentName, callback: android.support.v4.media.MediaBrowserCompat.ConnectionCallback, rootHints: android.os.Bundle);
						public onLoadChildren(callback: android.os.Messenger, parentId: string, list: java.util.List<any>, options: android.os.Bundle, notifyChildrenChangedOptions: android.os.Bundle): void;
						public getExtras(): android.os.Bundle;
					}
					export module MediaBrowserImplBase {
						export class MediaServiceConnection extends java.lang.Object implements android.content.ServiceConnection {
							public static class: java.lang.Class<android.support.v4.media.MediaBrowserCompat.MediaBrowserImplBase.MediaServiceConnection>;
							public onNullBinding(name: android.content.ComponentName): void;
							public onBindingDied(name: android.content.ComponentName): void;
							public onServiceConnected(name: android.content.ComponentName, binder: android.os.IBinder): void;
							public onServiceDisconnected(name: android.content.ComponentName): void;
						}
					}
					export class MediaBrowserServiceCallbackImpl extends java.lang.Object {
						public static class: java.lang.Class<android.support.v4.media.MediaBrowserCompat.MediaBrowserServiceCallbackImpl>;
						/**
						 * Constructs a new instance of the android.support.v4.media.MediaBrowserCompat$MediaBrowserServiceCallbackImpl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onServiceConnected(messenger0: android.os.Messenger, string1: string, token2: android.support.v4.media.session.MediaSessionCompat.Token, bundle3: android.os.Bundle): void;
							onConnectionFailed(messenger0: android.os.Messenger): void;
							onLoadChildren(messenger0: android.os.Messenger, string1: string, list2: java.util.List<any>, bundle3: android.os.Bundle, bundle4: android.os.Bundle): void;
						});
						public constructor();
						public onLoadChildren(messenger0: android.os.Messenger, string1: string, list2: java.util.List<any>, bundle3: android.os.Bundle, bundle4: android.os.Bundle): void;
						public onServiceConnected(messenger0: android.os.Messenger, string1: string, token2: android.support.v4.media.session.MediaSessionCompat.Token, bundle3: android.os.Bundle): void;
						public onConnectionFailed(messenger0: android.os.Messenger): void;
					}
					export class MediaItem extends java.lang.Object implements android.os.Parcelable {
						public static class: java.lang.Class<android.support.v4.media.MediaBrowserCompat.MediaItem>;
						public static FLAG_BROWSABLE: number;
						public static FLAG_PLAYABLE: number;
						public static CREATOR: android.os.Parcelable.Creator<android.support.v4.media.MediaBrowserCompat.MediaItem>;
						public static fromMediaItemList(itemList: java.util.List<any>): java.util.List<android.support.v4.media.MediaBrowserCompat.MediaItem>;
						public writeToParcel(out: android.os.Parcel, flags: number): void;
						public static fromMediaItem(itemObj: any): android.support.v4.media.MediaBrowserCompat.MediaItem;
						public describeContents(): number;
						public isBrowsable(): boolean;
						public getMediaId(): string;
						public getDescription(): android.support.v4.media.MediaDescriptionCompat;
						public getFlags(): number;
						public constructor(description: android.support.v4.media.MediaDescriptionCompat, flags: number);
						public toString(): string;
						public isPlayable(): boolean;
					}
					export module MediaItem {
						export class Flags extends java.lang.Object implements java.lang.annotation.Annotation {
							public static class: java.lang.Class<android.support.v4.media.MediaBrowserCompat.MediaItem.Flags>;
							/**
							 * Constructs a new instance of the android.support.v4.media.MediaBrowserCompat$MediaItem$Flags interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								equals(object0: any): boolean;
								hashCode(): number;
								toString(): string;
								annotationType(): java.lang.Class<any>;
							});
							public constructor();
							public hashCode(): number;
							public annotationType(): java.lang.Class<any>;
							public equals(obj: any): boolean;
							public toString(): string;
						}
					}
					export abstract class SearchCallback extends java.lang.Object {
						public static class: java.lang.Class<android.support.v4.media.MediaBrowserCompat.SearchCallback>;
						public constructor();
						public onSearchResult(query: string, extras: android.os.Bundle, items: java.util.List<android.support.v4.media.MediaBrowserCompat.MediaItem>): void;
						public onError(query: string, extras: android.os.Bundle): void;
					}
					export class SearchResultReceiver extends android.support.v4.os.ResultReceiver {
						public static class: java.lang.Class<android.support.v4.media.MediaBrowserCompat.SearchResultReceiver>;
						public writeToParcel(out: android.os.Parcel, flags: number): void;
						public describeContents(): number;
						public onReceiveResult(resultCode: number, resultData: android.os.Bundle): void;
					}
					export class ServiceBinderWrapper extends java.lang.Object {
						public static class: java.lang.Class<android.support.v4.media.MediaBrowserCompat.ServiceBinderWrapper>;
						public constructor(target: android.os.IBinder, rootHints: android.os.Bundle);
					}
					export class Subscription extends java.lang.Object {
						public static class: java.lang.Class<android.support.v4.media.MediaBrowserCompat.Subscription>;
						public getCallback(options: android.os.Bundle): android.support.v4.media.MediaBrowserCompat.SubscriptionCallback;
						public constructor();
						public getOptionsList(): java.util.List<android.os.Bundle>;
						public isEmpty(): boolean;
						public getCallbacks(): java.util.List<android.support.v4.media.MediaBrowserCompat.SubscriptionCallback>;
						public putCallback(options: android.os.Bundle, callback: android.support.v4.media.MediaBrowserCompat.SubscriptionCallback): void;
					}
					export abstract class SubscriptionCallback extends java.lang.Object {
						public static class: java.lang.Class<android.support.v4.media.MediaBrowserCompat.SubscriptionCallback>;
						public constructor();
						public onChildrenLoaded(parentId: string, children: java.util.List<android.support.v4.media.MediaBrowserCompat.MediaItem>): void;
						public onChildrenLoaded(parentId: string, children: java.util.List<android.support.v4.media.MediaBrowserCompat.MediaItem>, options: android.os.Bundle): void;
						public onError(parentId: string): void;
						public onError(parentId: string, options: android.os.Bundle): void;
					}
					export module SubscriptionCallback {
						export class SubscriptionCallbackApi21 extends java.lang.Object {
							public static class: java.lang.Class<android.support.v4.media.MediaBrowserCompat.SubscriptionCallback.SubscriptionCallbackApi21>;
							public onChildrenLoaded(parentId: string, children: java.util.List<any>): void;
							public onChildrenLoaded(parentId: string, children: java.util.List<any>, options: android.os.Bundle): void;
							public onError(parentId: string): void;
							public onError(parentId: string, options: android.os.Bundle): void;
						}
						export class SubscriptionCallbackApi26 extends android.support.v4.media.MediaBrowserCompat.SubscriptionCallback.SubscriptionCallbackApi21 {
							public static class: java.lang.Class<android.support.v4.media.MediaBrowserCompat.SubscriptionCallback.SubscriptionCallbackApi26>;
							public onChildrenLoaded(parentId: string, children: java.util.List<any>): void;
							public onChildrenLoaded(parentId: string, children: java.util.List<any>, options: android.os.Bundle): void;
							public onError(parentId: string): void;
							public onError(parentId: string, options: android.os.Bundle): void;
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v4 {
			export module media {
				export class MediaDescriptionCompat extends java.lang.Object implements android.os.Parcelable {
					public static class: java.lang.Class<android.support.v4.media.MediaDescriptionCompat>;
					public static EXTRA_BT_FOLDER_TYPE: string;
					public static BT_FOLDER_TYPE_MIXED: number;
					public static BT_FOLDER_TYPE_TITLES: number;
					public static BT_FOLDER_TYPE_ALBUMS: number;
					public static BT_FOLDER_TYPE_ARTISTS: number;
					public static BT_FOLDER_TYPE_GENRES: number;
					public static BT_FOLDER_TYPE_PLAYLISTS: number;
					public static BT_FOLDER_TYPE_YEARS: number;
					public static EXTRA_DOWNLOAD_STATUS: string;
					public static STATUS_NOT_DOWNLOADED: number;
					public static STATUS_DOWNLOADING: number;
					public static STATUS_DOWNLOADED: number;
					public static DESCRIPTION_KEY_MEDIA_URI: string;
					public static DESCRIPTION_KEY_NULL_BUNDLE_FLAG: string;
					public static CREATOR: android.os.Parcelable.Creator<android.support.v4.media.MediaDescriptionCompat>;
					public getTitle(): string;
					public getMediaDescription(): any;
					public describeContents(): number;
					public getMediaUri(): android.net.Uri;
					public writeToParcel(dest: android.os.Parcel, flags: number): void;
					public toString(): string;
					public static fromMediaDescription(descriptionObj: any): android.support.v4.media.MediaDescriptionCompat;
					public getSubtitle(): string;
					public getIconUri(): android.net.Uri;
					public getIconBitmap(): android.graphics.Bitmap;
					public getExtras(): android.os.Bundle;
					public getDescription(): string;
					public getMediaId(): string;
				}
				export module MediaDescriptionCompat {
					export class Builder extends java.lang.Object {
						public static class: java.lang.Class<android.support.v4.media.MediaDescriptionCompat.Builder>;
						public setMediaId(mediaId: string): android.support.v4.media.MediaDescriptionCompat.Builder;
						public setTitle(title: string): android.support.v4.media.MediaDescriptionCompat.Builder;
						public setMediaUri(mediaUri: android.net.Uri): android.support.v4.media.MediaDescriptionCompat.Builder;
						public constructor();
						public setExtras(extras: android.os.Bundle): android.support.v4.media.MediaDescriptionCompat.Builder;
						public setDescription(description: string): android.support.v4.media.MediaDescriptionCompat.Builder;
						public setIconBitmap(icon: android.graphics.Bitmap): android.support.v4.media.MediaDescriptionCompat.Builder;
						public setIconUri(iconUri: android.net.Uri): android.support.v4.media.MediaDescriptionCompat.Builder;
						public build(): android.support.v4.media.MediaDescriptionCompat;
						public setSubtitle(subtitle: string): android.support.v4.media.MediaDescriptionCompat.Builder;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v4 {
			export module media {
				export class MediaMetadataCompat extends java.lang.Object implements android.os.Parcelable {
					public static class: java.lang.Class<android.support.v4.media.MediaMetadataCompat>;
					public static METADATA_KEY_TITLE: string;
					public static METADATA_KEY_ARTIST: string;
					public static METADATA_KEY_DURATION: string;
					public static METADATA_KEY_ALBUM: string;
					public static METADATA_KEY_AUTHOR: string;
					public static METADATA_KEY_WRITER: string;
					public static METADATA_KEY_COMPOSER: string;
					public static METADATA_KEY_COMPILATION: string;
					public static METADATA_KEY_DATE: string;
					public static METADATA_KEY_YEAR: string;
					public static METADATA_KEY_GENRE: string;
					public static METADATA_KEY_TRACK_NUMBER: string;
					public static METADATA_KEY_NUM_TRACKS: string;
					public static METADATA_KEY_DISC_NUMBER: string;
					public static METADATA_KEY_ALBUM_ARTIST: string;
					public static METADATA_KEY_ART: string;
					public static METADATA_KEY_ART_URI: string;
					public static METADATA_KEY_ALBUM_ART: string;
					public static METADATA_KEY_ALBUM_ART_URI: string;
					public static METADATA_KEY_USER_RATING: string;
					public static METADATA_KEY_RATING: string;
					public static METADATA_KEY_DISPLAY_TITLE: string;
					public static METADATA_KEY_DISPLAY_SUBTITLE: string;
					public static METADATA_KEY_DISPLAY_DESCRIPTION: string;
					public static METADATA_KEY_DISPLAY_ICON: string;
					public static METADATA_KEY_DISPLAY_ICON_URI: string;
					public static METADATA_KEY_MEDIA_ID: string;
					public static METADATA_KEY_MEDIA_URI: string;
					public static METADATA_KEY_BT_FOLDER_TYPE: string;
					public static METADATA_KEY_ADVERTISEMENT: string;
					public static METADATA_KEY_DOWNLOAD_STATUS: string;
					public static CREATOR: android.os.Parcelable.Creator<android.support.v4.media.MediaMetadataCompat>;
					public containsKey(key: string): boolean;
					public getLong(key: string): number;
					public describeContents(): number;
					public size(): number;
					public getBundle(): android.os.Bundle;
					public getString(key: string): string;
					public writeToParcel(dest: android.os.Parcel, flags: number): void;
					public getMediaMetadata(): any;
					public getText(key: string): string;
					public getDescription(): android.support.v4.media.MediaDescriptionCompat;
					public keySet(): java.util.Set<string>;
					public getBitmap(key: string): android.graphics.Bitmap;
					public getRating(key: string): android.support.v4.media.RatingCompat;
					public static fromMediaMetadata(metadataObj: any): android.support.v4.media.MediaMetadataCompat;
				}
				export module MediaMetadataCompat {
					export class BitmapKey extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<android.support.v4.media.MediaMetadataCompat.BitmapKey>;
						/**
						 * Constructs a new instance of the android.support.v4.media.MediaMetadataCompat$BitmapKey interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
					export class Builder extends java.lang.Object {
						public static class: java.lang.Class<android.support.v4.media.MediaMetadataCompat.Builder>;
						public constructor();
						public build(): android.support.v4.media.MediaMetadataCompat;
						public putString(key: string, value: string): android.support.v4.media.MediaMetadataCompat.Builder;
						public putLong(key: string, value: number): android.support.v4.media.MediaMetadataCompat.Builder;
						public putText(key: string, value: string): android.support.v4.media.MediaMetadataCompat.Builder;
						public putBitmap(key: string, value: android.graphics.Bitmap): android.support.v4.media.MediaMetadataCompat.Builder;
						public constructor(source: android.support.v4.media.MediaMetadataCompat);
						public constructor(source: android.support.v4.media.MediaMetadataCompat, maxBitmapSize: number);
						public putRating(key: string, value: android.support.v4.media.RatingCompat): android.support.v4.media.MediaMetadataCompat.Builder;
					}
					export class LongKey extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<android.support.v4.media.MediaMetadataCompat.LongKey>;
						/**
						 * Constructs a new instance of the android.support.v4.media.MediaMetadataCompat$LongKey interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
					export class RatingKey extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<android.support.v4.media.MediaMetadataCompat.RatingKey>;
						/**
						 * Constructs a new instance of the android.support.v4.media.MediaMetadataCompat$RatingKey interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
					export class TextKey extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<android.support.v4.media.MediaMetadataCompat.TextKey>;
						/**
						 * Constructs a new instance of the android.support.v4.media.MediaMetadataCompat$TextKey interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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

declare module android {
	export module support {
		export module v4 {
			export module media {
				export class RatingCompat extends java.lang.Object implements android.os.Parcelable {
					public static class: java.lang.Class<android.support.v4.media.RatingCompat>;
					public static RATING_NONE: number;
					public static RATING_HEART: number;
					public static RATING_THUMB_UP_DOWN: number;
					public static RATING_3_STARS: number;
					public static RATING_4_STARS: number;
					public static RATING_5_STARS: number;
					public static RATING_PERCENTAGE: number;
					public static CREATOR: android.os.Parcelable.Creator<android.support.v4.media.RatingCompat>;
					public getRatingStyle(): number;
					public getStarRating(): number;
					public isRated(): boolean;
					public static fromRating(ratingObj: any): android.support.v4.media.RatingCompat;
					public describeContents(): number;
					public static newUnratedRating(ratingStyle: number): android.support.v4.media.RatingCompat;
					public static newThumbRating(thumbIsUp: boolean): android.support.v4.media.RatingCompat;
					public writeToParcel(dest: android.os.Parcel, flags: number): void;
					public getPercentRating(): number;
					public toString(): string;
					public getRating(): any;
					public static newStarRating(starRatingStyle: number, starRating: number): android.support.v4.media.RatingCompat;
					public static newPercentageRating(percent: number): android.support.v4.media.RatingCompat;
					public hasHeart(): boolean;
					public isThumbUp(): boolean;
					public static newHeartRating(hasHeart: boolean): android.support.v4.media.RatingCompat;
				}
				export module RatingCompat {
					export class StarStyle extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<android.support.v4.media.RatingCompat.StarStyle>;
						/**
						 * Constructs a new instance of the android.support.v4.media.RatingCompat$StarStyle interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
					export class Style extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<android.support.v4.media.RatingCompat.Style>;
						/**
						 * Constructs a new instance of the android.support.v4.media.RatingCompat$Style interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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

declare module android {
	export module support {
		export module v4 {
			export module media {
				export module session {
					export class IMediaControllerCallback extends java.lang.Object implements android.os.IInterface {
						public static class: java.lang.Class<android.support.v4.media.session.IMediaControllerCallback>;
						/**
						 * Constructs a new instance of the android.support.v4.media.session.IMediaControllerCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onEvent(string0: string, bundle1: android.os.Bundle): void;
							onSessionDestroyed(): void;
							onPlaybackStateChanged(playbackStateCompat0: android.support.v4.media.session.PlaybackStateCompat): void;
							onMetadataChanged(mediaMetadataCompat0: android.support.v4.media.MediaMetadataCompat): void;
							onQueueChanged(list0: java.util.List<android.support.v4.media.session.MediaSessionCompat.QueueItem>): void;
							onQueueTitleChanged(charSequence0: string): void;
							onExtrasChanged(bundle0: android.os.Bundle): void;
							onVolumeInfoChanged(parcelableVolumeInfo0: android.support.v4.media.session.ParcelableVolumeInfo): void;
							onRepeatModeChanged(int0: number): void;
							onShuffleModeChangedRemoved(boolean0: boolean): void;
							onCaptioningEnabledChanged(boolean0: boolean): void;
							onShuffleModeChanged(int0: number): void;
							onSessionReady(): void;
							asBinder(): android.os.IBinder;
						});
						public constructor();
						public onShuffleModeChangedRemoved(boolean0: boolean): void;
						public onShuffleModeChanged(int0: number): void;
						public onEvent(string0: string, bundle1: android.os.Bundle): void;
						public onCaptioningEnabledChanged(boolean0: boolean): void;
						public onPlaybackStateChanged(playbackStateCompat0: android.support.v4.media.session.PlaybackStateCompat): void;
						public onSessionReady(): void;
						public onSessionDestroyed(): void;
						public onRepeatModeChanged(int0: number): void;
						public onQueueTitleChanged(charSequence0: string): void;
						public onExtrasChanged(bundle0: android.os.Bundle): void;
						public onVolumeInfoChanged(parcelableVolumeInfo0: android.support.v4.media.session.ParcelableVolumeInfo): void;
						public asBinder(): android.os.IBinder;
						public onQueueChanged(list0: java.util.List<android.support.v4.media.session.MediaSessionCompat.QueueItem>): void;
						public onMetadataChanged(mediaMetadataCompat0: android.support.v4.media.MediaMetadataCompat): void;
					}
					export module IMediaControllerCallback {
						export abstract class Stub extends android.os.Binder implements android.support.v4.media.session.IMediaControllerCallback {
							public static class: java.lang.Class<android.support.v4.media.session.IMediaControllerCallback.Stub>;
							public onMetadataChanged(mediaMetadataCompat0: android.support.v4.media.MediaMetadataCompat): void;
							public pingBinder(): boolean;
							public dump(fd: java.io.FileDescriptor, strings1: native.Array<string>): void;
							public dumpAsync(fd: java.io.FileDescriptor, strings1: native.Array<string>): void;
							public dump(fd: java.io.FileDescriptor, fout: java.io.PrintWriter, strings2: native.Array<string>): void;
							public linkToDeath(recipient: android.os.IBinder.DeathRecipient, flags: number): void;
							public onCaptioningEnabledChanged(boolean0: boolean): void;
							public isBinderAlive(): boolean;
							public asBinder(): android.os.IBinder;
							public constructor();
							public onEvent(string0: string, bundle1: android.os.Bundle): void;
							public static asInterface(obj: android.os.IBinder): android.support.v4.media.session.IMediaControllerCallback;
							public onExtrasChanged(bundle0: android.os.Bundle): void;
							public transact(code: number, data: android.os.Parcel, reply: android.os.Parcel, flags: number): boolean;
							public onPlaybackStateChanged(playbackStateCompat0: android.support.v4.media.session.PlaybackStateCompat): void;
							public onQueueChanged(list0: java.util.List<android.support.v4.media.session.MediaSessionCompat.QueueItem>): void;
							public onShuffleModeChangedRemoved(boolean0: boolean): void;
							public onTransact(code: number, data: android.os.Parcel, reply: android.os.Parcel, flags: number): boolean;
							public onVolumeInfoChanged(parcelableVolumeInfo0: android.support.v4.media.session.ParcelableVolumeInfo): void;
							public getInterfaceDescriptor(): string;
							public onQueueTitleChanged(charSequence0: string): void;
							public onRepeatModeChanged(int0: number): void;
							public onShuffleModeChanged(int0: number): void;
							public unlinkToDeath(recipient: android.os.IBinder.DeathRecipient, flags: number): boolean;
							public queryLocalInterface(descriptor: string): android.os.IInterface;
							public constructor(descriptor: string);
							public onSessionReady(): void;
							public onSessionDestroyed(): void;
						}
						export module Stub {
							export class Proxy extends java.lang.Object implements android.support.v4.media.session.IMediaControllerCallback {
								public static class: java.lang.Class<android.support.v4.media.session.IMediaControllerCallback.Stub.Proxy>;
								public onExtrasChanged(extras: android.os.Bundle): void;
								public onRepeatModeChanged(repeatMode: number): void;
								public onCaptioningEnabledChanged(enabled: boolean): void;
								public onShuffleModeChangedRemoved(enabled: boolean): void;
								public getInterfaceDescriptor(): string;
								public onQueueTitleChanged(title: string): void;
								public onEvent(event: string, extras: android.os.Bundle): void;
								public asBinder(): android.os.IBinder;
								public onPlaybackStateChanged(state: android.support.v4.media.session.PlaybackStateCompat): void;
								public onQueueChanged(queue: java.util.List<android.support.v4.media.session.MediaSessionCompat.QueueItem>): void;
								public onShuffleModeChanged(shuffleMode: number): void;
								public onSessionDestroyed(): void;
								public onMetadataChanged(metadata: android.support.v4.media.MediaMetadataCompat): void;
								public onVolumeInfoChanged(info: android.support.v4.media.session.ParcelableVolumeInfo): void;
								public onSessionReady(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v4 {
			export module media {
				export module session {
					export class IMediaSession extends java.lang.Object implements android.os.IInterface {
						public static class: java.lang.Class<android.support.v4.media.session.IMediaSession>;
						/**
						 * Constructs a new instance of the android.support.v4.media.session.IMediaSession interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							sendCommand(string0: string, bundle1: android.os.Bundle, resultReceiverWrapper2: android.support.v4.media.session.MediaSessionCompat.ResultReceiverWrapper): void;
							sendMediaButton(keyEvent0: android.view.KeyEvent): boolean;
							registerCallbackListener(iMediaControllerCallback0: android.support.v4.media.session.IMediaControllerCallback): void;
							unregisterCallbackListener(iMediaControllerCallback0: android.support.v4.media.session.IMediaControllerCallback): void;
							isTransportControlEnabled(): boolean;
							getPackageName(): string;
							getTag(): string;
							getLaunchPendingIntent(): android.app.PendingIntent;
							getFlags(): number;
							getVolumeAttributes(): android.support.v4.media.session.ParcelableVolumeInfo;
							adjustVolume(int0: number, int1: number, string2: string): void;
							setVolumeTo(int0: number, int1: number, string2: string): void;
							getMetadata(): android.support.v4.media.MediaMetadataCompat;
							getPlaybackState(): android.support.v4.media.session.PlaybackStateCompat;
							getQueue(): java.util.List<android.support.v4.media.session.MediaSessionCompat.QueueItem>;
							getQueueTitle(): string;
							getExtras(): android.os.Bundle;
							getRatingType(): number;
							isCaptioningEnabled(): boolean;
							getRepeatMode(): number;
							isShuffleModeEnabledRemoved(): boolean;
							getShuffleMode(): number;
							addQueueItem(mediaDescriptionCompat0: android.support.v4.media.MediaDescriptionCompat): void;
							addQueueItemAt(mediaDescriptionCompat0: android.support.v4.media.MediaDescriptionCompat, int1: number): void;
							removeQueueItem(mediaDescriptionCompat0: android.support.v4.media.MediaDescriptionCompat): void;
							removeQueueItemAt(int0: number): void;
							getSessionInfo(): android.os.Bundle;
							prepare(): void;
							prepareFromMediaId(string0: string, bundle1: android.os.Bundle): void;
							prepareFromSearch(string0: string, bundle1: android.os.Bundle): void;
							prepareFromUri(uri0: android.net.Uri, bundle1: android.os.Bundle): void;
							play(): void;
							playFromMediaId(string0: string, bundle1: android.os.Bundle): void;
							playFromSearch(string0: string, bundle1: android.os.Bundle): void;
							playFromUri(uri0: android.net.Uri, bundle1: android.os.Bundle): void;
							skipToQueueItem(long0: number): void;
							pause(): void;
							stop(): void;
							next(): void;
							previous(): void;
							fastForward(): void;
							rewind(): void;
							seekTo(long0: number): void;
							rate(ratingCompat0: android.support.v4.media.RatingCompat): void;
							rateWithExtras(ratingCompat0: android.support.v4.media.RatingCompat, bundle1: android.os.Bundle): void;
							setPlaybackSpeed(float0: number): void;
							setCaptioningEnabled(boolean0: boolean): void;
							setRepeatMode(int0: number): void;
							setShuffleModeEnabledRemoved(boolean0: boolean): void;
							setShuffleMode(int0: number): void;
							sendCustomAction(string0: string, bundle1: android.os.Bundle): void;
							asBinder(): android.os.IBinder;
						});
						public constructor();
						public addQueueItem(mediaDescriptionCompat0: android.support.v4.media.MediaDescriptionCompat): void;
						public skipToQueueItem(long0: number): void;
						public setPlaybackSpeed(float0: number): void;
						public pause(): void;
						public sendCommand(string0: string, bundle1: android.os.Bundle, resultReceiverWrapper2: android.support.v4.media.session.MediaSessionCompat.ResultReceiverWrapper): void;
						public rewind(): void;
						public addQueueItemAt(mediaDescriptionCompat0: android.support.v4.media.MediaDescriptionCompat, int1: number): void;
						public next(): void;
						public isTransportControlEnabled(): boolean;
						public rateWithExtras(ratingCompat0: android.support.v4.media.RatingCompat, bundle1: android.os.Bundle): void;
						public getShuffleMode(): number;
						public unregisterCallbackListener(iMediaControllerCallback0: android.support.v4.media.session.IMediaControllerCallback): void;
						public getExtras(): android.os.Bundle;
						public adjustVolume(int0: number, int1: number, string2: string): void;
						public prepareFromSearch(string0: string, bundle1: android.os.Bundle): void;
						public getQueue(): java.util.List<android.support.v4.media.session.MediaSessionCompat.QueueItem>;
						public prepareFromUri(uri0: android.net.Uri, bundle1: android.os.Bundle): void;
						public getPackageName(): string;
						public getTag(): string;
						public prepare(): void;
						public playFromMediaId(string0: string, bundle1: android.os.Bundle): void;
						public playFromUri(uri0: android.net.Uri, bundle1: android.os.Bundle): void;
						public setShuffleMode(int0: number): void;
						public getRatingType(): number;
						public getVolumeAttributes(): android.support.v4.media.session.ParcelableVolumeInfo;
						public playFromSearch(string0: string, bundle1: android.os.Bundle): void;
						public setRepeatMode(int0: number): void;
						public removeQueueItemAt(int0: number): void;
						public asBinder(): android.os.IBinder;
						public getFlags(): number;
						public isShuffleModeEnabledRemoved(): boolean;
						public sendMediaButton(keyEvent0: android.view.KeyEvent): boolean;
						public getQueueTitle(): string;
						public isCaptioningEnabled(): boolean;
						public registerCallbackListener(iMediaControllerCallback0: android.support.v4.media.session.IMediaControllerCallback): void;
						public getMetadata(): android.support.v4.media.MediaMetadataCompat;
						public getPlaybackState(): android.support.v4.media.session.PlaybackStateCompat;
						public previous(): void;
						public getSessionInfo(): android.os.Bundle;
						public removeQueueItem(mediaDescriptionCompat0: android.support.v4.media.MediaDescriptionCompat): void;
						public getRepeatMode(): number;
						public setCaptioningEnabled(boolean0: boolean): void;
						public stop(): void;
						public setShuffleModeEnabledRemoved(boolean0: boolean): void;
						public fastForward(): void;
						public sendCustomAction(string0: string, bundle1: android.os.Bundle): void;
						public rate(ratingCompat0: android.support.v4.media.RatingCompat): void;
						public setVolumeTo(int0: number, int1: number, string2: string): void;
						public prepareFromMediaId(string0: string, bundle1: android.os.Bundle): void;
						public seekTo(long0: number): void;
						public play(): void;
						public getLaunchPendingIntent(): android.app.PendingIntent;
					}
					export module IMediaSession {
						export abstract class Stub extends android.os.Binder implements android.support.v4.media.session.IMediaSession {
							public static class: java.lang.Class<android.support.v4.media.session.IMediaSession.Stub>;
							public seekTo(long0: number): void;
							public next(): void;
							public getSessionInfo(): android.os.Bundle;
							public previous(): void;
							public unregisterCallbackListener(iMediaControllerCallback0: android.support.v4.media.session.IMediaControllerCallback): void;
							public pause(): void;
							public prepareFromUri(uri0: android.net.Uri, bundle1: android.os.Bundle): void;
							public sendCustomAction(string0: string, bundle1: android.os.Bundle): void;
							public removeQueueItemAt(int0: number): void;
							public setCaptioningEnabled(boolean0: boolean): void;
							public pingBinder(): boolean;
							public getQueue(): java.util.List<android.support.v4.media.session.MediaSessionCompat.QueueItem>;
							public getTag(): string;
							public playFromSearch(string0: string, bundle1: android.os.Bundle): void;
							public getExtras(): android.os.Bundle;
							public dumpAsync(fd: java.io.FileDescriptor, strings1: native.Array<string>): void;
							public getRatingType(): number;
							public dump(fd: java.io.FileDescriptor, fout: java.io.PrintWriter, strings2: native.Array<string>): void;
							public isBinderAlive(): boolean;
							public stop(): void;
							public prepareFromSearch(string0: string, bundle1: android.os.Bundle): void;
							public sendCommand(string0: string, bundle1: android.os.Bundle, resultReceiverWrapper2: android.support.v4.media.session.MediaSessionCompat.ResultReceiverWrapper): void;
							public setPlaybackSpeed(float0: number): void;
							public play(): void;
							public setShuffleMode(int0: number): void;
							public getQueueTitle(): string;
							public getVolumeAttributes(): android.support.v4.media.session.ParcelableVolumeInfo;
							public setShuffleModeEnabledRemoved(boolean0: boolean): void;
							public transact(code: number, data: android.os.Parcel, reply: android.os.Parcel, flags: number): boolean;
							public getMetadata(): android.support.v4.media.MediaMetadataCompat;
							public setRepeatMode(int0: number): void;
							public getInterfaceDescriptor(): string;
							public addQueueItemAt(mediaDescriptionCompat0: android.support.v4.media.MediaDescriptionCompat, int1: number): void;
							public unlinkToDeath(recipient: android.os.IBinder.DeathRecipient, flags: number): boolean;
							public rewind(): void;
							public isTransportControlEnabled(): boolean;
							public adjustVolume(int0: number, int1: number, string2: string): void;
							public getLaunchPendingIntent(): android.app.PendingIntent;
							public registerCallbackListener(iMediaControllerCallback0: android.support.v4.media.session.IMediaControllerCallback): void;
							public fastForward(): void;
							public rate(ratingCompat0: android.support.v4.media.RatingCompat): void;
							public isShuffleModeEnabledRemoved(): boolean;
							public setVolumeTo(int0: number, int1: number, string2: string): void;
							public playFromMediaId(string0: string, bundle1: android.os.Bundle): void;
							public isCaptioningEnabled(): boolean;
							public prepareFromMediaId(string0: string, bundle1: android.os.Bundle): void;
							public getShuffleMode(): number;
							public addQueueItem(mediaDescriptionCompat0: android.support.v4.media.MediaDescriptionCompat): void;
							public playFromUri(uri0: android.net.Uri, bundle1: android.os.Bundle): void;
							public dump(fd: java.io.FileDescriptor, strings1: native.Array<string>): void;
							public linkToDeath(recipient: android.os.IBinder.DeathRecipient, flags: number): void;
							public asBinder(): android.os.IBinder;
							public static asInterface(obj: android.os.IBinder): android.support.v4.media.session.IMediaSession;
							public sendMediaButton(keyEvent0: android.view.KeyEvent): boolean;
							public getPlaybackState(): android.support.v4.media.session.PlaybackStateCompat;
							public prepare(): void;
							public constructor();
							public removeQueueItem(mediaDescriptionCompat0: android.support.v4.media.MediaDescriptionCompat): void;
							public skipToQueueItem(long0: number): void;
							public getRepeatMode(): number;
							public onTransact(code: number, data: android.os.Parcel, reply: android.os.Parcel, flags: number): boolean;
							public rateWithExtras(ratingCompat0: android.support.v4.media.RatingCompat, bundle1: android.os.Bundle): void;
							public getPackageName(): string;
							public queryLocalInterface(descriptor: string): android.os.IInterface;
							public constructor(descriptor: string);
							public getFlags(): number;
						}
						export module Stub {
							export class Proxy extends java.lang.Object implements android.support.v4.media.session.IMediaSession {
								public static class: java.lang.Class<android.support.v4.media.session.IMediaSession.Stub.Proxy>;
								public next(): void;
								public getMetadata(): android.support.v4.media.MediaMetadataCompat;
								public setCaptioningEnabled(enabled: boolean): void;
								public getShuffleMode(): number;
								public playFromUri(uri: android.net.Uri, extras: android.os.Bundle): void;
								public setRepeatMode(repeatMode: number): void;
								public getPackageName(): string;
								public asBinder(): android.os.IBinder;
								public addQueueItemAt(description: android.support.v4.media.MediaDescriptionCompat, index: number): void;
								public prepareFromUri(uri: android.net.Uri, extras: android.os.Bundle): void;
								public fastForward(): void;
								public isCaptioningEnabled(): boolean;
								public getSessionInfo(): android.os.Bundle;
								public getLaunchPendingIntent(): android.app.PendingIntent;
								public adjustVolume(direction: number, flags: number, packageName: string): void;
								public getFlags(): number;
								public play(): void;
								public seekTo(pos: number): void;
								public isTransportControlEnabled(): boolean;
								public skipToQueueItem(id: number): void;
								public prepareFromSearch(string: string, extras: android.os.Bundle): void;
								public getTag(): string;
								public getRepeatMode(): number;
								public stop(): void;
								public registerCallbackListener(cb: android.support.v4.media.session.IMediaControllerCallback): void;
								public playFromMediaId(uri: string, extras: android.os.Bundle): void;
								public setShuffleModeEnabledRemoved(shuffleMode: boolean): void;
								public sendMediaButton(mediaButton: android.view.KeyEvent): boolean;
								public getInterfaceDescriptor(): string;
								public getQueueTitle(): string;
								public sendCommand(command: string, bundle1: android.os.Bundle, cb: android.support.v4.media.session.MediaSessionCompat.ResultReceiverWrapper): void;
								public pause(): void;
								public getQueue(): java.util.List<android.support.v4.media.session.MediaSessionCompat.QueueItem>;
								public getExtras(): android.os.Bundle;
								public setShuffleMode(shuffleMode: number): void;
								public getPlaybackState(): android.support.v4.media.session.PlaybackStateCompat;
								public prepare(): void;
								public sendCustomAction(action: string, bundle1: android.os.Bundle): void;
								public prepareFromMediaId(uri: string, extras: android.os.Bundle): void;
								public previous(): void;
								public playFromSearch(string: string, extras: android.os.Bundle): void;
								public unregisterCallbackListener(cb: android.support.v4.media.session.IMediaControllerCallback): void;
								public isShuffleModeEnabledRemoved(): boolean;
								public addQueueItem(description: android.support.v4.media.MediaDescriptionCompat): void;
								public getVolumeAttributes(): android.support.v4.media.session.ParcelableVolumeInfo;
								public rewind(): void;
								public getRatingType(): number;
								public removeQueueItemAt(index: number): void;
								public rate(rating: android.support.v4.media.RatingCompat): void;
								public setVolumeTo(value: number, flags: number, packageName: string): void;
								public setPlaybackSpeed(speed: number): void;
								public removeQueueItem(description: android.support.v4.media.MediaDescriptionCompat): void;
								public rateWithExtras(rating: android.support.v4.media.RatingCompat, extras: android.os.Bundle): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v4 {
			export module media {
				export module session {
					export class MediaControllerCompat extends java.lang.Object {
						public static class: java.lang.Class<android.support.v4.media.session.MediaControllerCompat>;
						public static COMMAND_GET_EXTRA_BINDER: string;
						public static COMMAND_ADD_QUEUE_ITEM: string;
						public static COMMAND_ADD_QUEUE_ITEM_AT: string;
						public static COMMAND_REMOVE_QUEUE_ITEM: string;
						public static COMMAND_REMOVE_QUEUE_ITEM_AT: string;
						public static COMMAND_ARGUMENT_MEDIA_DESCRIPTION: string;
						public static COMMAND_ARGUMENT_INDEX: string;
						public static setMediaController(activity: android.app.Activity, mediaController: android.support.v4.media.session.MediaControllerCompat): void;
						public adjustVolume(direction: number, flags: number): void;
						public getSessionActivity(): android.app.PendingIntent;
						public getRatingType(): number;
						public registerCallback(callback: android.support.v4.media.session.MediaControllerCompat.Callback): void;
						public constructor(context: android.content.Context, sessionToken: android.support.v4.media.session.MediaSessionCompat.Token);
						public getSessionToken(): android.support.v4.media.session.MediaSessionCompat.Token;
						public sendCommand(command: string, params: android.os.Bundle, cb: android.os.ResultReceiver): void;
						public addQueueItem(description: android.support.v4.media.MediaDescriptionCompat, index: number): void;
						public addQueueItem(description: android.support.v4.media.MediaDescriptionCompat): void;
						public getMediaController(): any;
						public registerCallback(callback: android.support.v4.media.session.MediaControllerCompat.Callback, handler: android.os.Handler): void;
						public getSession2Token(): androidx.versionedparcelable.VersionedParcelable;
						public setVolumeTo(value: number, flags: number): void;
						public getFlags(): number;
						public static getMediaController(activity: android.app.Activity): android.support.v4.media.session.MediaControllerCompat;
						public getQueueTitle(): string;
						public isCaptioningEnabled(): boolean;
						public unregisterCallback(callback: android.support.v4.media.session.MediaControllerCompat.Callback): void;
						public getMetadata(): android.support.v4.media.MediaMetadataCompat;
						public getShuffleMode(): number;
						public getExtras(): android.os.Bundle;
						public getPlaybackState(): android.support.v4.media.session.PlaybackStateCompat;
						public dispatchMediaButtonEvent(keyEvent: android.view.KeyEvent): boolean;
						public getSessionInfo(): android.os.Bundle;
						public removeQueueItem(description: android.support.v4.media.MediaDescriptionCompat): void;
						public getRepeatMode(): number;
						public getQueue(): java.util.List<android.support.v4.media.session.MediaSessionCompat.QueueItem>;
						/** @deprecated */
						public removeQueueItemAt(index: number): void;
						public getTransportControls(): android.support.v4.media.session.MediaControllerCompat.TransportControls;
						public getPackageName(): string;
						public isSessionReady(): boolean;
						public constructor(context: android.content.Context, session: android.support.v4.media.session.MediaSessionCompat);
						public getPlaybackInfo(): android.support.v4.media.session.MediaControllerCompat.PlaybackInfo;
					}
					export module MediaControllerCompat {
						export abstract class Callback extends java.lang.Object implements android.os.IBinder.DeathRecipient {
							public static class: java.lang.Class<android.support.v4.media.session.MediaControllerCompat.Callback>;
							public constructor();
							public onRepeatModeChanged(repeatMode: number): void;
							public onQueueChanged(queue: java.util.List<android.support.v4.media.session.MediaSessionCompat.QueueItem>): void;
							public onShuffleModeChanged(shuffleMode: number): void;
							public onQueueTitleChanged(title: string): void;
							public getIControllerCallback(): android.support.v4.media.session.IMediaControllerCallback;
							public onSessionEvent(event: string, extras: android.os.Bundle): void;
							public onCaptioningEnabledChanged(enabled: boolean): void;
							public binderDied(): void;
							public onMetadataChanged(metadata: android.support.v4.media.MediaMetadataCompat): void;
							public onPlaybackStateChanged(state: android.support.v4.media.session.PlaybackStateCompat): void;
							public onExtrasChanged(extras: android.os.Bundle): void;
							public onAudioInfoChanged(info: android.support.v4.media.session.MediaControllerCompat.PlaybackInfo): void;
							public onSessionReady(): void;
							public onSessionDestroyed(): void;
						}
						export module Callback {
							export class MediaControllerCallbackApi21 extends java.lang.Object {
								public static class: java.lang.Class<android.support.v4.media.session.MediaControllerCompat.Callback.MediaControllerCallbackApi21>;
								public onQueueChanged(queue: java.util.List<any>): void;
								public onPlaybackStateChanged(state: any): void;
								public onExtrasChanged(extras: android.os.Bundle): void;
								public onMetadataChanged(metadataObj: any): void;
								public onSessionDestroyed(): void;
								public onQueueTitleChanged(title: string): void;
								public onPlaybackStateChanged(stateObj: any): void;
								public onMetadataChanged(metadata: any): void;
								public onAudioInfoChanged(info: any): void;
								public onSessionEvent(event: string, extras: android.os.Bundle): void;
							}
							export class MessageHandler extends android.os.Handler {
								public static class: java.lang.Class<android.support.v4.media.session.MediaControllerCompat.Callback.MessageHandler>;
								public handleMessage(msg: android.os.Message): void;
							}
							export class StubCompat extends android.support.v4.media.session.IMediaControllerCallback.Stub {
								public static class: java.lang.Class<android.support.v4.media.session.MediaControllerCompat.Callback.StubCompat>;
								public onExtrasChanged(extras: android.os.Bundle): void;
								public isBinderAlive(): boolean;
								public onRepeatModeChanged(repeatMode: number): void;
								public onCaptioningEnabledChanged(enabled: boolean): void;
								public onShuffleModeChangedRemoved(enabled: boolean): void;
								public onQueueTitleChanged(title: string): void;
								public getInterfaceDescriptor(): string;
								public linkToDeath(recipient: android.os.IBinder.DeathRecipient, flags: number): void;
								public onEvent(event: string, extras: android.os.Bundle): void;
								public dumpAsync(fd: java.io.FileDescriptor, strings1: native.Array<string>): void;
								public onPlaybackStateChanged(state: android.support.v4.media.session.PlaybackStateCompat): void;
								public onQueueChanged(queue: java.util.List<android.support.v4.media.session.MediaSessionCompat.QueueItem>): void;
								public unlinkToDeath(recipient: android.os.IBinder.DeathRecipient, flags: number): boolean;
								public onShuffleModeChanged(shuffleMode: number): void;
								public transact(code: number, data: android.os.Parcel, reply: android.os.Parcel, flags: number): boolean;
								public onSessionDestroyed(): void;
								public dump(fd: java.io.FileDescriptor, fout: java.io.PrintWriter, strings2: native.Array<string>): void;
								public onMetadataChanged(metadata: android.support.v4.media.MediaMetadataCompat): void;
								public pingBinder(): boolean;
								public dump(fd: java.io.FileDescriptor, strings1: native.Array<string>): void;
								public queryLocalInterface(descriptor: string): android.os.IInterface;
								public onVolumeInfoChanged(info: android.support.v4.media.session.ParcelableVolumeInfo): void;
								public onSessionReady(): void;
							}
						}
						export class MediaControllerExtraData extends androidx.core.app.ComponentActivity.ExtraData {
							public static class: java.lang.Class<android.support.v4.media.session.MediaControllerCompat.MediaControllerExtraData>;
						}
						export class MediaControllerImpl extends java.lang.Object {
							public static class: java.lang.Class<android.support.v4.media.session.MediaControllerCompat.MediaControllerImpl>;
							/**
							 * Constructs a new instance of the android.support.v4.media.session.MediaControllerCompat$MediaControllerImpl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								registerCallback(callback0: android.support.v4.media.session.MediaControllerCompat.Callback, handler1: android.os.Handler): void;
								unregisterCallback(callback0: android.support.v4.media.session.MediaControllerCompat.Callback): void;
								dispatchMediaButtonEvent(keyEvent0: android.view.KeyEvent): boolean;
								getTransportControls(): android.support.v4.media.session.MediaControllerCompat.TransportControls;
								getPlaybackState(): android.support.v4.media.session.PlaybackStateCompat;
								getMetadata(): android.support.v4.media.MediaMetadataCompat;
								getQueue(): java.util.List<android.support.v4.media.session.MediaSessionCompat.QueueItem>;
								addQueueItem(mediaDescriptionCompat0: android.support.v4.media.MediaDescriptionCompat): void;
								addQueueItem(mediaDescriptionCompat0: android.support.v4.media.MediaDescriptionCompat, int1: number): void;
								removeQueueItem(mediaDescriptionCompat0: android.support.v4.media.MediaDescriptionCompat): void;
								getQueueTitle(): string;
								getExtras(): android.os.Bundle;
								getRatingType(): number;
								isCaptioningEnabled(): boolean;
								getRepeatMode(): number;
								getShuffleMode(): number;
								getFlags(): number;
								getPlaybackInfo(): android.support.v4.media.session.MediaControllerCompat.PlaybackInfo;
								getSessionActivity(): android.app.PendingIntent;
								setVolumeTo(int0: number, int1: number): void;
								adjustVolume(int0: number, int1: number): void;
								sendCommand(string0: string, bundle1: android.os.Bundle, resultReceiver2: android.os.ResultReceiver): void;
								isSessionReady(): boolean;
								getPackageName(): string;
								getSessionInfo(): android.os.Bundle;
								getMediaController(): any;
							});
							public constructor();
							public addQueueItem(mediaDescriptionCompat0: android.support.v4.media.MediaDescriptionCompat, int1: number): void;
							public getSessionInfo(): android.os.Bundle;
							public isCaptioningEnabled(): boolean;
							public getMediaController(): any;
							public getShuffleMode(): number;
							public getQueue(): java.util.List<android.support.v4.media.session.MediaSessionCompat.QueueItem>;
							public addQueueItem(mediaDescriptionCompat0: android.support.v4.media.MediaDescriptionCompat): void;
							public getExtras(): android.os.Bundle;
							public getRatingType(): number;
							public isSessionReady(): boolean;
							public getTransportControls(): android.support.v4.media.session.MediaControllerCompat.TransportControls;
							public getPlaybackState(): android.support.v4.media.session.PlaybackStateCompat;
							public unregisterCallback(callback0: android.support.v4.media.session.MediaControllerCompat.Callback): void;
							public getQueueTitle(): string;
							public registerCallback(callback0: android.support.v4.media.session.MediaControllerCompat.Callback, handler1: android.os.Handler): void;
							public removeQueueItem(mediaDescriptionCompat0: android.support.v4.media.MediaDescriptionCompat): void;
							public sendCommand(string0: string, bundle1: android.os.Bundle, resultReceiver2: android.os.ResultReceiver): void;
							public setVolumeTo(int0: number, int1: number): void;
							public getMetadata(): android.support.v4.media.MediaMetadataCompat;
							public getRepeatMode(): number;
							public getSessionActivity(): android.app.PendingIntent;
							public getPlaybackInfo(): android.support.v4.media.session.MediaControllerCompat.PlaybackInfo;
							public dispatchMediaButtonEvent(keyEvent0: android.view.KeyEvent): boolean;
							public adjustVolume(int0: number, int1: number): void;
							public getPackageName(): string;
							public getFlags(): number;
						}
						export class MediaControllerImplApi21 extends java.lang.Object implements android.support.v4.media.session.MediaControllerCompat.MediaControllerImpl {
							public static class: java.lang.Class<android.support.v4.media.session.MediaControllerCompat.MediaControllerImplApi21>;
							public mControllerFwk: any;
							public getSessionInfo(): android.os.Bundle;
							public addQueueItem(description: android.support.v4.media.MediaDescriptionCompat, index: number): void;
							public isCaptioningEnabled(): boolean;
							public getMediaController(): any;
							public dispatchMediaButtonEvent(event: android.view.KeyEvent): boolean;
							public getShuffleMode(): number;
							public getQueue(): java.util.List<android.support.v4.media.session.MediaSessionCompat.QueueItem>;
							public getExtras(): android.os.Bundle;
							public sendCommand(command: string, params: android.os.Bundle, cb: android.os.ResultReceiver): void;
							public unregisterCallback(callback: android.support.v4.media.session.MediaControllerCompat.Callback): void;
							public getRatingType(): number;
							public isSessionReady(): boolean;
							public getTransportControls(): android.support.v4.media.session.MediaControllerCompat.TransportControls;
							public getPlaybackState(): android.support.v4.media.session.PlaybackStateCompat;
							public setVolumeTo(value: number, flags: number): void;
							public getQueueTitle(): string;
							public removeQueueItem(description: android.support.v4.media.MediaDescriptionCompat): void;
							public getMetadata(): android.support.v4.media.MediaMetadataCompat;
							public getRepeatMode(): number;
							public getSessionActivity(): android.app.PendingIntent;
							public getPlaybackInfo(): android.support.v4.media.session.MediaControllerCompat.PlaybackInfo;
							public addQueueItem(description: android.support.v4.media.MediaDescriptionCompat): void;
							public registerCallback(callback: android.support.v4.media.session.MediaControllerCompat.Callback, handler: android.os.Handler): void;
							public constructor(context: android.content.Context, sessionToken: android.support.v4.media.session.MediaSessionCompat.Token);
							public getPackageName(): string;
							public adjustVolume(direction: number, flags: number): void;
							public getFlags(): number;
						}
						export module MediaControllerImplApi21 {
							export class ExtraBinderRequestResultReceiver extends android.os.ResultReceiver {
								public static class: java.lang.Class<android.support.v4.media.session.MediaControllerCompat.MediaControllerImplApi21.ExtraBinderRequestResultReceiver>;
								public onReceiveResult(resultCode: number, resultData: android.os.Bundle): void;
								public describeContents(): number;
								public writeToParcel(out: android.os.Parcel, flags: number): void;
							}
							export class ExtraCallback extends android.support.v4.media.session.MediaControllerCompat.Callback.StubCompat {
								public static class: java.lang.Class<android.support.v4.media.session.MediaControllerCompat.MediaControllerImplApi21.ExtraCallback>;
								public onExtrasChanged(extras: android.os.Bundle): void;
								public isBinderAlive(): boolean;
								public onRepeatModeChanged(repeatMode: number): void;
								public onCaptioningEnabledChanged(enabled: boolean): void;
								public onShuffleModeChangedRemoved(enabled: boolean): void;
								public onQueueTitleChanged(title: string): void;
								public getInterfaceDescriptor(): string;
								public linkToDeath(recipient: android.os.IBinder.DeathRecipient, flags: number): void;
								public onEvent(event: string, extras: android.os.Bundle): void;
								public dumpAsync(fd: java.io.FileDescriptor, strings1: native.Array<string>): void;
								public onPlaybackStateChanged(state: android.support.v4.media.session.PlaybackStateCompat): void;
								public onQueueChanged(queue: java.util.List<android.support.v4.media.session.MediaSessionCompat.QueueItem>): void;
								public unlinkToDeath(recipient: android.os.IBinder.DeathRecipient, flags: number): boolean;
								public onShuffleModeChanged(shuffleMode: number): void;
								public transact(code: number, data: android.os.Parcel, reply: android.os.Parcel, flags: number): boolean;
								public onSessionDestroyed(): void;
								public dump(fd: java.io.FileDescriptor, fout: java.io.PrintWriter, strings2: native.Array<string>): void;
								public onMetadataChanged(metadata: android.support.v4.media.MediaMetadataCompat): void;
								public pingBinder(): boolean;
								public dump(fd: java.io.FileDescriptor, strings1: native.Array<string>): void;
								public queryLocalInterface(descriptor: string): android.os.IInterface;
								public onVolumeInfoChanged(info: android.support.v4.media.session.ParcelableVolumeInfo): void;
								public onSessionReady(): void;
							}
						}
						export class MediaControllerImplBase extends java.lang.Object implements android.support.v4.media.session.MediaControllerCompat.MediaControllerImpl {
							public static class: java.lang.Class<android.support.v4.media.session.MediaControllerCompat.MediaControllerImplBase>;
							public getSessionInfo(): android.os.Bundle;
							public addQueueItem(description: android.support.v4.media.MediaDescriptionCompat, index: number): void;
							public isCaptioningEnabled(): boolean;
							public getMediaController(): any;
							public dispatchMediaButtonEvent(event: android.view.KeyEvent): boolean;
							public getShuffleMode(): number;
							public getQueue(): java.util.List<android.support.v4.media.session.MediaSessionCompat.QueueItem>;
							public getExtras(): android.os.Bundle;
							public sendCommand(command: string, params: android.os.Bundle, cb: android.os.ResultReceiver): void;
							public constructor(token: android.support.v4.media.session.MediaSessionCompat.Token);
							public unregisterCallback(callback: android.support.v4.media.session.MediaControllerCompat.Callback): void;
							public getRatingType(): number;
							public isSessionReady(): boolean;
							public getTransportControls(): android.support.v4.media.session.MediaControllerCompat.TransportControls;
							public getPlaybackState(): android.support.v4.media.session.PlaybackStateCompat;
							public setVolumeTo(value: number, flags: number): void;
							public getQueueTitle(): string;
							public removeQueueItem(description: android.support.v4.media.MediaDescriptionCompat): void;
							public getMetadata(): android.support.v4.media.MediaMetadataCompat;
							public getRepeatMode(): number;
							public getSessionActivity(): android.app.PendingIntent;
							public getPlaybackInfo(): android.support.v4.media.session.MediaControllerCompat.PlaybackInfo;
							public addQueueItem(description: android.support.v4.media.MediaDescriptionCompat): void;
							public registerCallback(callback: android.support.v4.media.session.MediaControllerCompat.Callback, handler: android.os.Handler): void;
							public getPackageName(): string;
							public adjustVolume(direction: number, flags: number): void;
							public getFlags(): number;
						}
						export class PlaybackInfo extends java.lang.Object {
							public static class: java.lang.Class<android.support.v4.media.session.MediaControllerCompat.PlaybackInfo>;
							public static PLAYBACK_TYPE_LOCAL: number;
							public static PLAYBACK_TYPE_REMOTE: number;
							public getAudioAttributes(): androidx.media.AudioAttributesCompat;
							public getMaxVolume(): number;
							public getPlaybackType(): number;
							public getVolumeControl(): number;
							/** @deprecated */
							public getAudioStream(): number;
							public getCurrentVolume(): number;
						}
						export abstract class TransportControls extends java.lang.Object {
							public static class: java.lang.Class<android.support.v4.media.session.MediaControllerCompat.TransportControls>;
							public static EXTRA_LEGACY_STREAM_TYPE: string;
							public seekTo(long0: number): void;
							public playFromMediaId(string0: string, bundle1: android.os.Bundle): void;
							public skipToQueueItem(long0: number): void;
							public pause(): void;
							public setRating(ratingCompat0: android.support.v4.media.RatingCompat): void;
							public prepareFromUri(uri0: android.net.Uri, bundle1: android.os.Bundle): void;
							public sendCustomAction(string0: string, bundle1: android.os.Bundle): void;
							public prepareFromMediaId(string0: string, bundle1: android.os.Bundle): void;
							public setCaptioningEnabled(boolean0: boolean): void;
							public setRepeatMode(int0: number): void;
							public playFromSearch(string0: string, bundle1: android.os.Bundle): void;
							public setRating(ratingCompat0: android.support.v4.media.RatingCompat, bundle1: android.os.Bundle): void;
							public playFromUri(uri0: android.net.Uri, bundle1: android.os.Bundle): void;
							public skipToPrevious(): void;
							public setPlaybackSpeed(speed: number): void;
							public stop(): void;
							public prepareFromSearch(string0: string, bundle1: android.os.Bundle): void;
							public skipToNext(): void;
							public rewind(): void;
							public play(): void;
							public setShuffleMode(int0: number): void;
							public prepare(): void;
							public sendCustomAction(customAction0: android.support.v4.media.session.PlaybackStateCompat.CustomAction, bundle1: android.os.Bundle): void;
							public fastForward(): void;
						}
						export class TransportControlsApi21 extends android.support.v4.media.session.MediaControllerCompat.TransportControls {
							public static class: java.lang.Class<android.support.v4.media.session.MediaControllerCompat.TransportControlsApi21>;
							public mControlsFwk: any;
							public seekTo(long0: number): void;
							public playFromMediaId(string0: string, bundle1: android.os.Bundle): void;
							public skipToQueueItem(id: number): void;
							public pause(): void;
							public setRating(ratingCompat0: android.support.v4.media.RatingCompat): void;
							public setRating(rating: android.support.v4.media.RatingCompat, extras: android.os.Bundle): void;
							public prepareFromUri(uri0: android.net.Uri, bundle1: android.os.Bundle): void;
							public sendCustomAction(string0: string, bundle1: android.os.Bundle): void;
							public prepareFromMediaId(string0: string, bundle1: android.os.Bundle): void;
							public setCaptioningEnabled(boolean0: boolean): void;
							public setRating(ratingCompat0: android.support.v4.media.RatingCompat, bundle1: android.os.Bundle): void;
							public playFromSearch(string0: string, bundle1: android.os.Bundle): void;
							public playFromUri(uri0: android.net.Uri, bundle1: android.os.Bundle): void;
							public skipToPrevious(): void;
							public setPlaybackSpeed(speed: number): void;
							public setCaptioningEnabled(enabled: boolean): void;
							public stop(): void;
							public playFromSearch(query: string, extras: android.os.Bundle): void;
							public prepareFromSearch(string0: string, bundle1: android.os.Bundle): void;
							public skipToNext(): void;
							public seekTo(pos: number): void;
							public play(): void;
							public setShuffleMode(int0: number): void;
							public prepare(): void;
							public setRating(rating: android.support.v4.media.RatingCompat): void;
							public skipToQueueItem(long0: number): void;
							public setShuffleMode(shuffleMode: number): void;
							public playFromMediaId(mediaId: string, extras: android.os.Bundle): void;
							public setRepeatMode(int0: number): void;
							public sendCustomAction(action: string, bundle1: android.os.Bundle): void;
							public prepareFromMediaId(mediaId: string, extras: android.os.Bundle): void;
							public setRepeatMode(repeatMode: number): void;
							public prepareFromUri(uri: android.net.Uri, extras: android.os.Bundle): void;
							public rewind(): void;
							public playFromUri(uri: android.net.Uri, extras: android.os.Bundle): void;
							public sendCustomAction(customAction: android.support.v4.media.session.PlaybackStateCompat.CustomAction, bundle1: android.os.Bundle): void;
							public prepareFromSearch(query: string, extras: android.os.Bundle): void;
							public sendCustomAction(customAction0: android.support.v4.media.session.PlaybackStateCompat.CustomAction, bundle1: android.os.Bundle): void;
							public fastForward(): void;
						}
						export class TransportControlsBase extends android.support.v4.media.session.MediaControllerCompat.TransportControls {
							public static class: java.lang.Class<android.support.v4.media.session.MediaControllerCompat.TransportControlsBase>;
							public seekTo(long0: number): void;
							public playFromMediaId(string0: string, bundle1: android.os.Bundle): void;
							public skipToQueueItem(id: number): void;
							public pause(): void;
							public setRating(ratingCompat0: android.support.v4.media.RatingCompat): void;
							public setRating(rating: android.support.v4.media.RatingCompat, extras: android.os.Bundle): void;
							public prepareFromUri(uri0: android.net.Uri, bundle1: android.os.Bundle): void;
							public sendCustomAction(string0: string, bundle1: android.os.Bundle): void;
							public prepareFromMediaId(string0: string, bundle1: android.os.Bundle): void;
							public setCaptioningEnabled(boolean0: boolean): void;
							public playFromSearch(string0: string, bundle1: android.os.Bundle): void;
							public setRating(ratingCompat0: android.support.v4.media.RatingCompat, bundle1: android.os.Bundle): void;
							public playFromUri(uri0: android.net.Uri, bundle1: android.os.Bundle): void;
							public skipToPrevious(): void;
							public setPlaybackSpeed(speed: number): void;
							public setCaptioningEnabled(enabled: boolean): void;
							public playFromSearch(query: string, extras: android.os.Bundle): void;
							public stop(): void;
							public prepareFromSearch(string0: string, bundle1: android.os.Bundle): void;
							public skipToNext(): void;
							public seekTo(pos: number): void;
							public play(): void;
							public setShuffleMode(int0: number): void;
							public prepare(): void;
							public skipToQueueItem(long0: number): void;
							public setRating(rating: android.support.v4.media.RatingCompat): void;
							public setShuffleMode(shuffleMode: number): void;
							public playFromMediaId(mediaId: string, extras: android.os.Bundle): void;
							public setRepeatMode(int0: number): void;
							public sendCustomAction(action: string, bundle1: android.os.Bundle): void;
							public prepareFromMediaId(mediaId: string, extras: android.os.Bundle): void;
							public setRepeatMode(repeatMode: number): void;
							public prepareFromUri(uri: android.net.Uri, extras: android.os.Bundle): void;
							public playFromUri(uri: android.net.Uri, extras: android.os.Bundle): void;
							public rewind(): void;
							public sendCustomAction(customAction: android.support.v4.media.session.PlaybackStateCompat.CustomAction, bundle1: android.os.Bundle): void;
							public prepareFromSearch(query: string, extras: android.os.Bundle): void;
							public sendCustomAction(customAction0: android.support.v4.media.session.PlaybackStateCompat.CustomAction, bundle1: android.os.Bundle): void;
							public constructor(binder: android.support.v4.media.session.IMediaSession);
							public fastForward(): void;
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v4 {
			export module media {
				export module session {
					export class MediaSessionCompat extends java.lang.Object {
						public static class: java.lang.Class<android.support.v4.media.session.MediaSessionCompat>;
						public static FLAG_HANDLES_MEDIA_BUTTONS: number;
						public static FLAG_HANDLES_TRANSPORT_CONTROLS: number;
						public static FLAG_HANDLES_QUEUE_COMMANDS: number;
						public static ACTION_FLAG_AS_INAPPROPRIATE: string;
						public static ACTION_SKIP_AD: string;
						public static ACTION_FOLLOW: string;
						public static ACTION_UNFOLLOW: string;
						public static ARGUMENT_MEDIA_ATTRIBUTE: string;
						public static ARGUMENT_MEDIA_ATTRIBUTE_VALUE: string;
						public static MEDIA_ATTRIBUTE_ARTIST: number;
						public static MEDIA_ATTRIBUTE_ALBUM: number;
						public static MEDIA_ATTRIBUTE_PLAYLIST: number;
						public static ACTION_PLAY_FROM_URI: string;
						public static ACTION_PREPARE: string;
						public static ACTION_PREPARE_FROM_MEDIA_ID: string;
						public static ACTION_PREPARE_FROM_SEARCH: string;
						public static ACTION_PREPARE_FROM_URI: string;
						public static ACTION_SET_CAPTIONING_ENABLED: string;
						public static ACTION_SET_REPEAT_MODE: string;
						public static ACTION_SET_SHUFFLE_MODE: string;
						public static ACTION_SET_RATING: string;
						public static ACTION_SET_PLAYBACK_SPEED: string;
						public static ACTION_ARGUMENT_MEDIA_ID: string;
						public static ACTION_ARGUMENT_QUERY: string;
						public static ACTION_ARGUMENT_URI: string;
						public static ACTION_ARGUMENT_RATING: string;
						public static ACTION_ARGUMENT_PLAYBACK_SPEED: string;
						public static ACTION_ARGUMENT_EXTRAS: string;
						public static ACTION_ARGUMENT_CAPTIONING_ENABLED: string;
						public static ACTION_ARGUMENT_REPEAT_MODE: string;
						public static ACTION_ARGUMENT_SHUFFLE_MODE: string;
						public static KEY_TOKEN: string;
						public static KEY_EXTRA_BINDER: string;
						public static KEY_SESSION2_TOKEN: string;
						public setMetadata(metadata: android.support.v4.media.MediaMetadataCompat): void;
						public getCallingPackage(): string;
						public setFlags(flags: number): void;
						public setPlaybackToLocal(stream: number): void;
						public getMediaSession(): any;
						public removeOnActiveChangeListener(listener: android.support.v4.media.session.MediaSessionCompat.OnActiveChangeListener): void;
						public getSessionToken(): android.support.v4.media.session.MediaSessionCompat.Token;
						public setCallback(callback: android.support.v4.media.session.MediaSessionCompat.Callback): void;
						public setQueue(queue: java.util.List<android.support.v4.media.session.MediaSessionCompat.QueueItem>): void;
						public constructor(context: android.content.Context, tag: string);
						public setCallback(callback: android.support.v4.media.session.MediaSessionCompat.Callback, handler: android.os.Handler): void;
						public setCaptioningEnabled(enabled: boolean): void;
						public constructor(context: android.content.Context, tag: string, mbrComponent: android.content.ComponentName, mbrIntent: android.app.PendingIntent, sessionInfo: android.os.Bundle);
						public setQueueTitle(title: string): void;
						public setPlaybackState(state: android.support.v4.media.session.PlaybackStateCompat): void;
						public setMediaButtonReceiver(mbr: android.app.PendingIntent): void;
						public static fromMediaSession(context: android.content.Context, mediaSession: any): android.support.v4.media.session.MediaSessionCompat;
						public setPlaybackToRemote(volumeProvider: androidx.media.VolumeProviderCompat): void;
						public isActive(): boolean;
						public setActive(active: boolean): void;
						public getRemoteControlClient(): any;
						public setExtras(extras: android.os.Bundle): void;
						public constructor(context: android.content.Context, tag: string, mbrComponent: android.content.ComponentName, mbrIntent: android.app.PendingIntent);
						public getController(): android.support.v4.media.session.MediaControllerCompat;
						public release(): void;
						public getCurrentControllerInfo(): androidx.media.MediaSessionManager.RemoteUserInfo;
						public static ensureClassLoader(bundle: android.os.Bundle): void;
						public setShuffleMode(shuffleMode: number): void;
						public setRatingType(type: number): void;
						public addOnActiveChangeListener(listener: android.support.v4.media.session.MediaSessionCompat.OnActiveChangeListener): void;
						public sendSessionEvent(event: string, extras: android.os.Bundle): void;
						public setRepeatMode(repeatMode: number): void;
						public constructor(context: android.content.Context, tag: string, mbrComponent: android.content.ComponentName, mbrIntent: android.app.PendingIntent, sessionInfo: android.os.Bundle, session2Token: androidx.versionedparcelable.VersionedParcelable);
						public setSessionActivity(pi: android.app.PendingIntent): void;
					}
					export module MediaSessionCompat {
						export abstract class Callback extends java.lang.Object {
							public static class: java.lang.Class<android.support.v4.media.session.MediaSessionCompat.Callback>;
							public onRemoveQueueItem(description: android.support.v4.media.MediaDescriptionCompat): void;
							public onSetShuffleMode(shuffleMode: number): void;
							public onSetCaptioningEnabled(enabled: boolean): void;
							public onSkipToNext(): void;
							public onCustomAction(action: string, extras: android.os.Bundle): void;
							public onAddQueueItem(description: android.support.v4.media.MediaDescriptionCompat, index: number): void;
							public onPlayFromUri(uri: android.net.Uri, extras: android.os.Bundle): void;
							public onFastForward(): void;
							public onSkipToQueueItem(id: number): void;
							public onPlayFromMediaId(mediaId: string, extras: android.os.Bundle): void;
							public onMediaButtonEvent(mediaButtonEvent: android.content.Intent): boolean;
							/** @deprecated */
							public onRemoveQueueItemAt(index: number): void;
							public onSetRating(rating: android.support.v4.media.RatingCompat, extras: android.os.Bundle): void;
							public constructor();
							public onPlayFromSearch(query: string, extras: android.os.Bundle): void;
							public onSetPlaybackSpeed(speed: number): void;
							public onSeekTo(pos: number): void;
							public onPrepareFromUri(uri: android.net.Uri, extras: android.os.Bundle): void;
							public onRewind(): void;
							public onStop(): void;
							public onSetRepeatMode(repeatMode: number): void;
							public onCommand(command: string, extras: android.os.Bundle, cb: android.os.ResultReceiver): void;
							public onPrepare(): void;
							public onPrepareFromMediaId(mediaId: string, extras: android.os.Bundle): void;
							public onPrepareFromSearch(query: string, extras: android.os.Bundle): void;
							public onPlay(): void;
							public onSetRating(rating: android.support.v4.media.RatingCompat): void;
							public onSkipToPrevious(): void;
							public onPause(): void;
							public onAddQueueItem(description: android.support.v4.media.MediaDescriptionCompat): void;
						}
						export module Callback {
							export class CallbackHandler extends android.os.Handler {
								public static class: java.lang.Class<android.support.v4.media.session.MediaSessionCompat.Callback.CallbackHandler>;
								public handleMessage(msg: android.os.Message): void;
							}
							export class MediaSessionCallbackApi21 extends java.lang.Object {
								public static class: java.lang.Class<android.support.v4.media.session.MediaSessionCompat.Callback.MediaSessionCallbackApi21>;
								public onRewind(): void;
								public onCustomAction(action: string, extras: android.os.Bundle): void;
								public onSeekTo(pos: number): void;
								public onSetRating(ratingFwk: any): void;
								public onSkipToNext(): void;
								public onSkipToPrevious(): void;
								public onSetRating(rating: any): void;
								public onSkipToQueueItem(id: number): void;
								public onPrepareFromMediaId(mediaId: string, extras: android.os.Bundle): void;
								public onPrepare(): void;
								public onPrepareFromSearch(query: string, extras: android.os.Bundle): void;
								public onCommand(command: string, bundle1: android.os.Bundle, cb: android.os.ResultReceiver): void;
								public onStop(): void;
								public onPlayFromUri(uri: android.net.Uri, extras: android.os.Bundle): void;
								public onPause(): void;
								public onFastForward(): void;
								public onPlay(): void;
								public onSetRating(ratingFwk: any, extras: android.os.Bundle): void;
								public onPlayFromMediaId(mediaId: string, extras: android.os.Bundle): void;
								public onPlayFromSearch(query: string, extras: android.os.Bundle): void;
								public onPlayFromSearch(search: string, extras: android.os.Bundle): void;
								public onCommand(command: string, extras: android.os.Bundle, cb: android.os.ResultReceiver): void;
								public onPrepareFromUri(uri: android.net.Uri, extras: android.os.Bundle): void;
								public onMediaButtonEvent(mediaButtonIntent: android.content.Intent): boolean;
							}
						}
						export class MediaSessionImpl extends java.lang.Object {
							public static class: java.lang.Class<android.support.v4.media.session.MediaSessionCompat.MediaSessionImpl>;
							/**
							 * Constructs a new instance of the android.support.v4.media.session.MediaSessionCompat$MediaSessionImpl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								setCallback(callback0: android.support.v4.media.session.MediaSessionCompat.Callback, handler1: android.os.Handler): void;
								setFlags(int0: number): void;
								setPlaybackToLocal(int0: number): void;
								setPlaybackToRemote(volumeProviderCompat0: androidx.media.VolumeProviderCompat): void;
								setActive(boolean0: boolean): void;
								isActive(): boolean;
								sendSessionEvent(string0: string, bundle1: android.os.Bundle): void;
								release(): void;
								getSessionToken(): android.support.v4.media.session.MediaSessionCompat.Token;
								setPlaybackState(playbackStateCompat0: android.support.v4.media.session.PlaybackStateCompat): void;
								getPlaybackState(): android.support.v4.media.session.PlaybackStateCompat;
								setMetadata(mediaMetadataCompat0: android.support.v4.media.MediaMetadataCompat): void;
								setSessionActivity(pendingIntent0: android.app.PendingIntent): void;
								setMediaButtonReceiver(pendingIntent0: android.app.PendingIntent): void;
								setQueue(list0: java.util.List<android.support.v4.media.session.MediaSessionCompat.QueueItem>): void;
								setQueueTitle(charSequence0: string): void;
								setRatingType(int0: number): void;
								setCaptioningEnabled(boolean0: boolean): void;
								setRepeatMode(int0: number): void;
								setShuffleMode(int0: number): void;
								setExtras(bundle0: android.os.Bundle): void;
								getMediaSession(): any;
								getRemoteControlClient(): any;
								getCallingPackage(): string;
								getCurrentControllerInfo(): androidx.media.MediaSessionManager.RemoteUserInfo;
								setCurrentControllerInfo(remoteUserInfo0: androidx.media.MediaSessionManager.RemoteUserInfo): void;
							});
							public constructor();
							public getSessionToken(): android.support.v4.media.session.MediaSessionCompat.Token;
							public setCurrentControllerInfo(remoteUserInfo0: androidx.media.MediaSessionManager.RemoteUserInfo): void;
							public setCaptioningEnabled(boolean0: boolean): void;
							public setFlags(int0: number): void;
							public getCurrentControllerInfo(): androidx.media.MediaSessionManager.RemoteUserInfo;
							public getCallingPackage(): string;
							public setCallback(callback0: android.support.v4.media.session.MediaSessionCompat.Callback, handler1: android.os.Handler): void;
							public getPlaybackState(): android.support.v4.media.session.PlaybackStateCompat;
							public setQueue(list0: java.util.List<android.support.v4.media.session.MediaSessionCompat.QueueItem>): void;
							public setShuffleMode(int0: number): void;
							public sendSessionEvent(string0: string, bundle1: android.os.Bundle): void;
							public setSessionActivity(pendingIntent0: android.app.PendingIntent): void;
							public setPlaybackToRemote(volumeProviderCompat0: androidx.media.VolumeProviderCompat): void;
							public isActive(): boolean;
							public setMediaButtonReceiver(pendingIntent0: android.app.PendingIntent): void;
							public setQueueTitle(charSequence0: string): void;
							public setRatingType(int0: number): void;
							public setActive(boolean0: boolean): void;
							public release(): void;
							public setRepeatMode(int0: number): void;
							public setExtras(bundle0: android.os.Bundle): void;
							public setPlaybackToLocal(int0: number): void;
							public setPlaybackState(playbackStateCompat0: android.support.v4.media.session.PlaybackStateCompat): void;
							public setMetadata(mediaMetadataCompat0: android.support.v4.media.MediaMetadataCompat): void;
							public getMediaSession(): any;
							public getRemoteControlClient(): any;
						}
						export class MediaSessionImplApi18 extends android.support.v4.media.session.MediaSessionCompat.MediaSessionImplBase {
							public static class: java.lang.Class<android.support.v4.media.session.MediaSessionCompat.MediaSessionImplApi18>;
							public getSessionToken(): android.support.v4.media.session.MediaSessionCompat.Token;
							public setRatingType(type: number): void;
							public setFlags(flags: number): void;
							public setExtras(extras: android.os.Bundle): void;
							public setCaptioningEnabled(enabled: boolean): void;
							public getCurrentControllerInfo(): androidx.media.MediaSessionManager.RemoteUserInfo;
							public getCallingPackage(): string;
							public getPlaybackState(): android.support.v4.media.session.PlaybackStateCompat;
							public setCallback(callback: android.support.v4.media.session.MediaSessionCompat.Callback, handler: android.os.Handler): void;
							public setPlaybackState(state: android.support.v4.media.session.PlaybackStateCompat): void;
							public setMetadata(metadata: android.support.v4.media.MediaMetadataCompat): void;
							public isActive(): boolean;
							public setMediaButtonReceiver(mbr: android.app.PendingIntent): void;
							public setQueue(queue: java.util.List<android.support.v4.media.session.MediaSessionCompat.QueueItem>): void;
							public setShuffleMode(shuffleMode: number): void;
							public release(): void;
							public setActive(active: boolean): void;
							public setPlaybackToRemote(volumeProvider: androidx.media.VolumeProviderCompat): void;
							public setRepeatMode(repeatMode: number): void;
							public setCurrentControllerInfo(remoteUserInfo: androidx.media.MediaSessionManager.RemoteUserInfo): void;
							public setPlaybackToLocal(stream: number): void;
							public setSessionActivity(pi: android.app.PendingIntent): void;
							public getMediaSession(): any;
							public setQueueTitle(title: string): void;
							public getRemoteControlClient(): any;
							public sendSessionEvent(event: string, extras: android.os.Bundle): void;
						}
						export class MediaSessionImplApi19 extends android.support.v4.media.session.MediaSessionCompat.MediaSessionImplApi18 {
							public static class: java.lang.Class<android.support.v4.media.session.MediaSessionCompat.MediaSessionImplApi19>;
							public getSessionToken(): android.support.v4.media.session.MediaSessionCompat.Token;
							public setRatingType(type: number): void;
							public setFlags(flags: number): void;
							public setExtras(extras: android.os.Bundle): void;
							public setCaptioningEnabled(enabled: boolean): void;
							public getCurrentControllerInfo(): androidx.media.MediaSessionManager.RemoteUserInfo;
							public getCallingPackage(): string;
							public getPlaybackState(): android.support.v4.media.session.PlaybackStateCompat;
							public setCallback(callback: android.support.v4.media.session.MediaSessionCompat.Callback, handler: android.os.Handler): void;
							public setPlaybackState(state: android.support.v4.media.session.PlaybackStateCompat): void;
							public setMetadata(metadata: android.support.v4.media.MediaMetadataCompat): void;
							public isActive(): boolean;
							public setMediaButtonReceiver(mbr: android.app.PendingIntent): void;
							public setQueue(queue: java.util.List<android.support.v4.media.session.MediaSessionCompat.QueueItem>): void;
							public setShuffleMode(shuffleMode: number): void;
							public release(): void;
							public setActive(active: boolean): void;
							public setPlaybackToRemote(volumeProvider: androidx.media.VolumeProviderCompat): void;
							public setRepeatMode(repeatMode: number): void;
							public setCurrentControllerInfo(remoteUserInfo: androidx.media.MediaSessionManager.RemoteUserInfo): void;
							public setPlaybackToLocal(stream: number): void;
							public setSessionActivity(pi: android.app.PendingIntent): void;
							public getMediaSession(): any;
							public setQueueTitle(title: string): void;
							public getRemoteControlClient(): any;
							public sendSessionEvent(event: string, extras: android.os.Bundle): void;
						}
						export class MediaSessionImplApi21 extends java.lang.Object implements android.support.v4.media.session.MediaSessionCompat.MediaSessionImpl {
							public static class: java.lang.Class<android.support.v4.media.session.MediaSessionCompat.MediaSessionImplApi21>;
							public getSessionToken(): android.support.v4.media.session.MediaSessionCompat.Token;
							public setRatingType(type: number): void;
							public setFlags(flags: number): void;
							public setExtras(extras: android.os.Bundle): void;
							public setCaptioningEnabled(enabled: boolean): void;
							public getCurrentControllerInfo(): androidx.media.MediaSessionManager.RemoteUserInfo;
							public getCallingPackage(): string;
							public getPlaybackState(): android.support.v4.media.session.PlaybackStateCompat;
							public setCallback(callback: android.support.v4.media.session.MediaSessionCompat.Callback, handler: android.os.Handler): void;
							public setPlaybackState(state: android.support.v4.media.session.PlaybackStateCompat): void;
							public setMetadata(metadata: android.support.v4.media.MediaMetadataCompat): void;
							public isActive(): boolean;
							public setMediaButtonReceiver(mbr: android.app.PendingIntent): void;
							public setQueue(queue: java.util.List<android.support.v4.media.session.MediaSessionCompat.QueueItem>): void;
							public setShuffleMode(shuffleMode: number): void;
							public release(): void;
							public setActive(active: boolean): void;
							public setPlaybackToRemote(volumeProvider: androidx.media.VolumeProviderCompat): void;
							public setRepeatMode(repeatMode: number): void;
							public setCurrentControllerInfo(remoteUserInfo: androidx.media.MediaSessionManager.RemoteUserInfo): void;
							public setPlaybackToLocal(stream: number): void;
							public setSessionActivity(pi: android.app.PendingIntent): void;
							public getMediaSession(): any;
							public setQueueTitle(title: string): void;
							public getRemoteControlClient(): any;
							public sendSessionEvent(event: string, extras: android.os.Bundle): void;
						}
						export module MediaSessionImplApi21 {
							export class ExtraSession extends android.support.v4.media.session.IMediaSession.Stub {
								public static class: java.lang.Class<android.support.v4.media.session.MediaSessionCompat.MediaSessionImplApi21.ExtraSession>;
								public next(): void;
								public setCaptioningEnabled(enabled: boolean): void;
								public getMetadata(): android.support.v4.media.MediaMetadataCompat;
								public playFromUri(uri: android.net.Uri, extras: android.os.Bundle): void;
								public setRepeatMode(repeatMode: number): void;
								public getShuffleMode(): number;
								public getPackageName(): string;
								public unlinkToDeath(recipient: android.os.IBinder.DeathRecipient, flags: number): boolean;
								public prepareFromUri(uri: android.net.Uri, extras: android.os.Bundle): void;
								public fastForward(): void;
								public addQueueItemAt(descriptionCompat: android.support.v4.media.MediaDescriptionCompat, index: number): void;
								public isCaptioningEnabled(): boolean;
								public dump(fd: java.io.FileDescriptor, strings1: native.Array<string>): void;
								public prepareFromMediaId(mediaId: string, extras: android.os.Bundle): void;
								public playFromSearch(query: string, extras: android.os.Bundle): void;
								public playFromMediaId(mediaId: string, extras: android.os.Bundle): void;
								public getSessionInfo(): android.os.Bundle;
								public getLaunchPendingIntent(): android.app.PendingIntent;
								public adjustVolume(direction: number, flags: number, packageName: string): void;
								public linkToDeath(recipient: android.os.IBinder.DeathRecipient, flags: number): void;
								public getFlags(): number;
								public play(): void;
								public prepareFromSearch(query: string, extras: android.os.Bundle): void;
								public seekTo(pos: number): void;
								public isTransportControlEnabled(): boolean;
								public skipToQueueItem(id: number): void;
								public getTag(): string;
								public stop(): void;
								public getRepeatMode(): number;
								public registerCallbackListener(cb: android.support.v4.media.session.IMediaControllerCallback): void;
								public sendMediaButton(mediaButton: android.view.KeyEvent): boolean;
								public isBinderAlive(): boolean;
								public getQueueTitle(): string;
								public getInterfaceDescriptor(): string;
								public dumpAsync(fd: java.io.FileDescriptor, strings1: native.Array<string>): void;
								public sendCommand(command: string, bundle1: android.os.Bundle, cb: android.support.v4.media.session.MediaSessionCompat.ResultReceiverWrapper): void;
								public pause(): void;
								public setShuffleMode(shuffleMode: number): void;
								public getQueue(): java.util.List<android.support.v4.media.session.MediaSessionCompat.QueueItem>;
								public getExtras(): android.os.Bundle;
								public setShuffleModeEnabledRemoved(enabled: boolean): void;
								public getPlaybackState(): android.support.v4.media.session.PlaybackStateCompat;
								public transact(code: number, data: android.os.Parcel, reply: android.os.Parcel, flags: number): boolean;
								public prepare(): void;
								public dump(fd: java.io.FileDescriptor, fout: java.io.PrintWriter, strings2: native.Array<string>): void;
								public sendCustomAction(action: string, bundle1: android.os.Bundle): void;
								public queryLocalInterface(descriptor: string): android.os.IInterface;
								public previous(): void;
								public addQueueItem(descriptionCompat: android.support.v4.media.MediaDescriptionCompat): void;
								public unregisterCallbackListener(cb: android.support.v4.media.session.IMediaControllerCallback): void;
								public isShuffleModeEnabledRemoved(): boolean;
								public getVolumeAttributes(): android.support.v4.media.session.ParcelableVolumeInfo;
								public rewind(): void;
								public removeQueueItemAt(index: number): void;
								public getRatingType(): number;
								public rate(rating: android.support.v4.media.RatingCompat): void;
								public setVolumeTo(value: number, flags: number, packageName: string): void;
								public setPlaybackSpeed(speed: number): void;
								public pingBinder(): boolean;
								public rateWithExtras(rating: android.support.v4.media.RatingCompat, extras: android.os.Bundle): void;
								public removeQueueItem(description: android.support.v4.media.MediaDescriptionCompat): void;
							}
						}
						export class MediaSessionImplApi28 extends android.support.v4.media.session.MediaSessionCompat.MediaSessionImplApi21 {
							public static class: java.lang.Class<android.support.v4.media.session.MediaSessionCompat.MediaSessionImplApi28>;
							public getSessionToken(): android.support.v4.media.session.MediaSessionCompat.Token;
							public setRatingType(type: number): void;
							public setFlags(flags: number): void;
							public setExtras(extras: android.os.Bundle): void;
							public setCaptioningEnabled(enabled: boolean): void;
							public getCurrentControllerInfo(): androidx.media.MediaSessionManager.RemoteUserInfo;
							public getCallingPackage(): string;
							public getPlaybackState(): android.support.v4.media.session.PlaybackStateCompat;
							public setCallback(callback: android.support.v4.media.session.MediaSessionCompat.Callback, handler: android.os.Handler): void;
							public setPlaybackState(state: android.support.v4.media.session.PlaybackStateCompat): void;
							public setMetadata(metadata: android.support.v4.media.MediaMetadataCompat): void;
							public isActive(): boolean;
							public setMediaButtonReceiver(mbr: android.app.PendingIntent): void;
							public setQueue(queue: java.util.List<android.support.v4.media.session.MediaSessionCompat.QueueItem>): void;
							public setShuffleMode(shuffleMode: number): void;
							public release(): void;
							public setActive(active: boolean): void;
							public setPlaybackToRemote(volumeProvider: androidx.media.VolumeProviderCompat): void;
							public setRepeatMode(repeatMode: number): void;
							public setCurrentControllerInfo(remoteUserInfo: androidx.media.MediaSessionManager.RemoteUserInfo): void;
							public setPlaybackToLocal(stream: number): void;
							public setSessionActivity(pi: android.app.PendingIntent): void;
							public getMediaSession(): any;
							public setQueueTitle(title: string): void;
							public getRemoteControlClient(): any;
							public sendSessionEvent(event: string, extras: android.os.Bundle): void;
						}
						export class MediaSessionImplBase extends java.lang.Object implements android.support.v4.media.session.MediaSessionCompat.MediaSessionImpl {
							public static class: java.lang.Class<android.support.v4.media.session.MediaSessionCompat.MediaSessionImplBase>;
							public getSessionToken(): android.support.v4.media.session.MediaSessionCompat.Token;
							public setRatingType(type: number): void;
							public setFlags(flags: number): void;
							public setExtras(extras: android.os.Bundle): void;
							public setCaptioningEnabled(enabled: boolean): void;
							public getCurrentControllerInfo(): androidx.media.MediaSessionManager.RemoteUserInfo;
							public getCallingPackage(): string;
							public getPlaybackState(): android.support.v4.media.session.PlaybackStateCompat;
							public setCallback(callback: android.support.v4.media.session.MediaSessionCompat.Callback, handler: android.os.Handler): void;
							public constructor(context: android.content.Context, tag: string, mbrComponent: android.content.ComponentName, mbrIntent: android.app.PendingIntent, sessionInfo: android.os.Bundle);
							public setPlaybackState(state: android.support.v4.media.session.PlaybackStateCompat): void;
							public setMetadata(metadata: android.support.v4.media.MediaMetadataCompat): void;
							public isActive(): boolean;
							public setMediaButtonReceiver(mbr: android.app.PendingIntent): void;
							public setQueue(queue: java.util.List<android.support.v4.media.session.MediaSessionCompat.QueueItem>): void;
							public setShuffleMode(shuffleMode: number): void;
							public release(): void;
							public setActive(active: boolean): void;
							public setPlaybackToRemote(volumeProvider: androidx.media.VolumeProviderCompat): void;
							public setRepeatMode(repeatMode: number): void;
							public setCurrentControllerInfo(remoteUserInfo: androidx.media.MediaSessionManager.RemoteUserInfo): void;
							public setPlaybackToLocal(stream: number): void;
							public setSessionActivity(pi: android.app.PendingIntent): void;
							public getMediaSession(): any;
							public setQueueTitle(title: string): void;
							public getRemoteControlClient(): any;
							public sendSessionEvent(event: string, extras: android.os.Bundle): void;
						}
						export module MediaSessionImplBase {
							export class Command extends java.lang.Object {
								public static class: java.lang.Class<android.support.v4.media.session.MediaSessionCompat.MediaSessionImplBase.Command>;
								public command: string;
								public extras: android.os.Bundle;
								public stub: android.os.ResultReceiver;
								public constructor(command: string, extras: android.os.Bundle, stub: android.os.ResultReceiver);
							}
							export class MediaSessionStub extends android.support.v4.media.session.IMediaSession.Stub {
								public static class: java.lang.Class<android.support.v4.media.session.MediaSessionCompat.MediaSessionImplBase.MediaSessionStub>;
								public next(): void;
								public setCaptioningEnabled(enabled: boolean): void;
								public getMetadata(): android.support.v4.media.MediaMetadataCompat;
								public playFromUri(uri: android.net.Uri, extras: android.os.Bundle): void;
								public setRepeatMode(repeatMode: number): void;
								public getShuffleMode(): number;
								public getPackageName(): string;
								public unlinkToDeath(recipient: android.os.IBinder.DeathRecipient, flags: number): boolean;
								public prepareFromUri(uri: android.net.Uri, extras: android.os.Bundle): void;
								public addQueueItemAt(description: android.support.v4.media.MediaDescriptionCompat, index: number): void;
								public fastForward(): void;
								public isCaptioningEnabled(): boolean;
								public dump(fd: java.io.FileDescriptor, strings1: native.Array<string>): void;
								public prepareFromMediaId(mediaId: string, extras: android.os.Bundle): void;
								public playFromSearch(query: string, extras: android.os.Bundle): void;
								public playFromMediaId(mediaId: string, extras: android.os.Bundle): void;
								public getSessionInfo(): android.os.Bundle;
								public getLaunchPendingIntent(): android.app.PendingIntent;
								public adjustVolume(direction: number, flags: number, packageName: string): void;
								public linkToDeath(recipient: android.os.IBinder.DeathRecipient, flags: number): void;
								public getFlags(): number;
								public play(): void;
								public prepareFromSearch(query: string, extras: android.os.Bundle): void;
								public seekTo(pos: number): void;
								public isTransportControlEnabled(): boolean;
								public skipToQueueItem(id: number): void;
								public getTag(): string;
								public stop(): void;
								public getRepeatMode(): number;
								public registerCallbackListener(cb: android.support.v4.media.session.IMediaControllerCallback): void;
								public sendMediaButton(mediaButton: android.view.KeyEvent): boolean;
								public isBinderAlive(): boolean;
								public getQueueTitle(): string;
								public getInterfaceDescriptor(): string;
								public dumpAsync(fd: java.io.FileDescriptor, strings1: native.Array<string>): void;
								public sendCommand(command: string, bundle1: android.os.Bundle, cb: android.support.v4.media.session.MediaSessionCompat.ResultReceiverWrapper): void;
								public pause(): void;
								public setShuffleMode(shuffleMode: number): void;
								public getQueue(): java.util.List<android.support.v4.media.session.MediaSessionCompat.QueueItem>;
								public getExtras(): android.os.Bundle;
								public setShuffleModeEnabledRemoved(enabled: boolean): void;
								public getPlaybackState(): android.support.v4.media.session.PlaybackStateCompat;
								public transact(code: number, data: android.os.Parcel, reply: android.os.Parcel, flags: number): boolean;
								public prepare(): void;
								public dump(fd: java.io.FileDescriptor, fout: java.io.PrintWriter, strings2: native.Array<string>): void;
								public sendCustomAction(action: string, bundle1: android.os.Bundle): void;
								public queryLocalInterface(descriptor: string): android.os.IInterface;
								public previous(): void;
								public unregisterCallbackListener(cb: android.support.v4.media.session.IMediaControllerCallback): void;
								public addQueueItem(description: android.support.v4.media.MediaDescriptionCompat): void;
								public isShuffleModeEnabledRemoved(): boolean;
								public getVolumeAttributes(): android.support.v4.media.session.ParcelableVolumeInfo;
								public rewind(): void;
								public removeQueueItemAt(index: number): void;
								public getRatingType(): number;
								public rate(rating: android.support.v4.media.RatingCompat): void;
								public setVolumeTo(value: number, flags: number, packageName: string): void;
								public setPlaybackSpeed(speed: number): void;
								public pingBinder(): boolean;
								public rateWithExtras(rating: android.support.v4.media.RatingCompat, extras: android.os.Bundle): void;
								public removeQueueItem(description: android.support.v4.media.MediaDescriptionCompat): void;
							}
							export class MessageHandler extends android.os.Handler {
								public static class: java.lang.Class<android.support.v4.media.session.MediaSessionCompat.MediaSessionImplBase.MessageHandler>;
								public constructor(looper: android.os.Looper);
								public constructor(this0: android.support.v4.media.session.MediaSessionCompat.MediaSessionImplBase, looper: android.os.Looper);
								public constructor(looper: android.os.Looper, callback: android.os.Handler.Callback);
								public constructor();
								public constructor(callback: android.os.Handler.Callback);
								public handleMessage(msg: android.os.Message): void;
							}
						}
						export class OnActiveChangeListener extends java.lang.Object {
							public static class: java.lang.Class<android.support.v4.media.session.MediaSessionCompat.OnActiveChangeListener>;
							/**
							 * Constructs a new instance of the android.support.v4.media.session.MediaSessionCompat$OnActiveChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onActiveChanged(): void;
							});
							public constructor();
							public onActiveChanged(): void;
						}
						export class QueueItem extends java.lang.Object implements android.os.Parcelable {
							public static class: java.lang.Class<android.support.v4.media.session.MediaSessionCompat.QueueItem>;
							public static UNKNOWN_ID: number;
							public static CREATOR: android.os.Parcelable.Creator<android.support.v4.media.session.MediaSessionCompat.QueueItem>;
							public writeToParcel(dest: android.os.Parcel, flags: number): void;
							public static fromQueueItemList(itemList: java.util.List<any>): java.util.List<android.support.v4.media.session.MediaSessionCompat.QueueItem>;
							public getQueueId(): number;
							public describeContents(): number;
							public getQueueItem(): any;
							public getDescription(): android.support.v4.media.MediaDescriptionCompat;
							public toString(): string;
							public constructor(description: android.support.v4.media.MediaDescriptionCompat, id: number);
							public static fromQueueItem(queueItem: any): android.support.v4.media.session.MediaSessionCompat.QueueItem;
						}
						export class ResultReceiverWrapper extends java.lang.Object implements android.os.Parcelable {
							public static class: java.lang.Class<android.support.v4.media.session.MediaSessionCompat.ResultReceiverWrapper>;
							public static CREATOR: android.os.Parcelable.Creator<android.support.v4.media.session.MediaSessionCompat.ResultReceiverWrapper>;
							public writeToParcel(dest: android.os.Parcel, flags: number): void;
							public describeContents(): number;
							public constructor(resultReceiver: android.os.ResultReceiver);
						}
						export class SessionFlags extends java.lang.Object implements java.lang.annotation.Annotation {
							public static class: java.lang.Class<android.support.v4.media.session.MediaSessionCompat.SessionFlags>;
							/**
							 * Constructs a new instance of the android.support.v4.media.session.MediaSessionCompat$SessionFlags interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								equals(object0: any): boolean;
								hashCode(): number;
								toString(): string;
								annotationType(): java.lang.Class<any>;
							});
							public constructor();
							public hashCode(): number;
							public annotationType(): java.lang.Class<any>;
							public equals(obj: any): boolean;
							public toString(): string;
						}
						export class Token extends java.lang.Object implements android.os.Parcelable {
							public static class: java.lang.Class<android.support.v4.media.session.MediaSessionCompat.Token>;
							public static CREATOR: android.os.Parcelable.Creator<android.support.v4.media.session.MediaSessionCompat.Token>;
							public static fromToken(token: any): android.support.v4.media.session.MediaSessionCompat.Token;
							public setExtraBinder(extraBinder: android.support.v4.media.session.IMediaSession): void;
							public getSession2Token(): androidx.versionedparcelable.VersionedParcelable;
							public setSession2Token(session2Token: androidx.versionedparcelable.VersionedParcelable): void;
							public hashCode(): number;
							public toBundle(): android.os.Bundle;
							public equals(obj: any): boolean;
							public static fromBundle(tokenBundle: android.os.Bundle): android.support.v4.media.session.MediaSessionCompat.Token;
							public static fromToken(token: any, extraBinder: android.support.v4.media.session.IMediaSession): android.support.v4.media.session.MediaSessionCompat.Token;
							public getExtraBinder(): android.support.v4.media.session.IMediaSession;
							public writeToParcel(dest: android.os.Parcel, flags: number): void;
							public describeContents(): number;
							public getToken(): any;
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v4 {
			export module media {
				export module session {
					export class ParcelableVolumeInfo extends java.lang.Object implements android.os.Parcelable {
						public static class: java.lang.Class<android.support.v4.media.session.ParcelableVolumeInfo>;
						public volumeType: number;
						public audioStream: number;
						public controlType: number;
						public maxVolume: number;
						public currentVolume: number;
						public static CREATOR: android.os.Parcelable.Creator<android.support.v4.media.session.ParcelableVolumeInfo>;
						public writeToParcel(dest: android.os.Parcel, flags: number): void;
						public describeContents(): number;
						public constructor(volumeType: number, audioStream: number, controlType: number, maxVolume: number, currentVolume: number);
						public constructor(from: android.os.Parcel);
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v4 {
			export module media {
				export module session {
					export class PlaybackStateCompat extends java.lang.Object implements android.os.Parcelable {
						public static class: java.lang.Class<android.support.v4.media.session.PlaybackStateCompat>;
						public static ACTION_STOP: number;
						public static ACTION_PAUSE: number;
						public static ACTION_PLAY: number;
						public static ACTION_REWIND: number;
						public static ACTION_SKIP_TO_PREVIOUS: number;
						public static ACTION_SKIP_TO_NEXT: number;
						public static ACTION_FAST_FORWARD: number;
						public static ACTION_SET_RATING: number;
						public static ACTION_SEEK_TO: number;
						public static ACTION_PLAY_PAUSE: number;
						public static ACTION_PLAY_FROM_MEDIA_ID: number;
						public static ACTION_PLAY_FROM_SEARCH: number;
						public static ACTION_SKIP_TO_QUEUE_ITEM: number;
						public static ACTION_PLAY_FROM_URI: number;
						public static ACTION_PREPARE: number;
						public static ACTION_PREPARE_FROM_MEDIA_ID: number;
						public static ACTION_PREPARE_FROM_SEARCH: number;
						public static ACTION_PREPARE_FROM_URI: number;
						public static ACTION_SET_REPEAT_MODE: number;
						public static ACTION_SET_SHUFFLE_MODE_ENABLED: number;
						public static ACTION_SET_CAPTIONING_ENABLED: number;
						public static ACTION_SET_SHUFFLE_MODE: number;
						public static STATE_NONE: number;
						public static STATE_STOPPED: number;
						public static STATE_PAUSED: number;
						public static STATE_PLAYING: number;
						public static STATE_FAST_FORWARDING: number;
						public static STATE_REWINDING: number;
						public static STATE_BUFFERING: number;
						public static STATE_ERROR: number;
						public static STATE_CONNECTING: number;
						public static STATE_SKIPPING_TO_PREVIOUS: number;
						public static STATE_SKIPPING_TO_NEXT: number;
						public static STATE_SKIPPING_TO_QUEUE_ITEM: number;
						public static PLAYBACK_POSITION_UNKNOWN: number;
						public static REPEAT_MODE_INVALID: number;
						public static REPEAT_MODE_NONE: number;
						public static REPEAT_MODE_ONE: number;
						public static REPEAT_MODE_ALL: number;
						public static REPEAT_MODE_GROUP: number;
						public static SHUFFLE_MODE_INVALID: number;
						public static SHUFFLE_MODE_NONE: number;
						public static SHUFFLE_MODE_ALL: number;
						public static SHUFFLE_MODE_GROUP: number;
						public static ERROR_CODE_UNKNOWN_ERROR: number;
						public static ERROR_CODE_APP_ERROR: number;
						public static ERROR_CODE_NOT_SUPPORTED: number;
						public static ERROR_CODE_AUTHENTICATION_EXPIRED: number;
						public static ERROR_CODE_PREMIUM_ACCOUNT_REQUIRED: number;
						public static ERROR_CODE_CONCURRENT_STREAM_LIMIT: number;
						public static ERROR_CODE_PARENTAL_CONTROL_RESTRICTED: number;
						public static ERROR_CODE_NOT_AVAILABLE_IN_REGION: number;
						public static ERROR_CODE_CONTENT_ALREADY_PLAYING: number;
						public static ERROR_CODE_SKIP_LIMIT_REACHED: number;
						public static ERROR_CODE_ACTION_ABORTED: number;
						public static ERROR_CODE_END_OF_QUEUE: number;
						public static CREATOR: android.os.Parcelable.Creator<android.support.v4.media.session.PlaybackStateCompat>;
						public getErrorMessage(): string;
						public getCustomActions(): java.util.List<android.support.v4.media.session.PlaybackStateCompat.CustomAction>;
						public describeContents(): number;
						public getActions(): number;
						public getErrorCode(): number;
						public getPosition(): number;
						public getPlaybackSpeed(): number;
						public static toKeyCode(action: number): number;
						public static fromPlaybackState(stateObj: any): android.support.v4.media.session.PlaybackStateCompat;
						public toString(): string;
						public getCurrentPosition(timeDiff: java.lang.Long): number;
						public writeToParcel(dest: android.os.Parcel, flags: number): void;
						public getLastPositionUpdateTime(): number;
						public getState(): number;
						public getPlaybackState(): any;
						public getActiveQueueItemId(): number;
						public getBufferedPosition(): number;
						public getExtras(): android.os.Bundle;
					}
					export module PlaybackStateCompat {
						export class Actions extends java.lang.Object implements java.lang.annotation.Annotation {
							public static class: java.lang.Class<android.support.v4.media.session.PlaybackStateCompat.Actions>;
							/**
							 * Constructs a new instance of the android.support.v4.media.session.PlaybackStateCompat$Actions interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								equals(object0: any): boolean;
								hashCode(): number;
								toString(): string;
								annotationType(): java.lang.Class<any>;
							});
							public constructor();
							public hashCode(): number;
							public annotationType(): java.lang.Class<any>;
							public equals(obj: any): boolean;
							public toString(): string;
						}
						export class Builder extends java.lang.Object {
							public static class: java.lang.Class<android.support.v4.media.session.PlaybackStateCompat.Builder>;
							public constructor();
							public setActions(capabilities: number): android.support.v4.media.session.PlaybackStateCompat.Builder;
							public setActiveQueueItemId(id: number): android.support.v4.media.session.PlaybackStateCompat.Builder;
							public setState(state: number, position: number, playbackSpeed: number, updateTime: number): android.support.v4.media.session.PlaybackStateCompat.Builder;
							public addCustomAction(customAction: android.support.v4.media.session.PlaybackStateCompat.CustomAction): android.support.v4.media.session.PlaybackStateCompat.Builder;
							public build(): android.support.v4.media.session.PlaybackStateCompat;
							public setState(state: number, position: number, playbackSpeed: number): android.support.v4.media.session.PlaybackStateCompat.Builder;
							public setBufferedPosition(bufferPosition: number): android.support.v4.media.session.PlaybackStateCompat.Builder;
							public setExtras(extras: android.os.Bundle): android.support.v4.media.session.PlaybackStateCompat.Builder;
							public addCustomAction(action: string, name: string, icon: number): android.support.v4.media.session.PlaybackStateCompat.Builder;
							/** @deprecated */
							public setErrorMessage(errorMessage: string): android.support.v4.media.session.PlaybackStateCompat.Builder;
							public setErrorMessage(errorCode: number, errorMessage: string): android.support.v4.media.session.PlaybackStateCompat.Builder;
							public constructor(source: android.support.v4.media.session.PlaybackStateCompat);
						}
						export class CustomAction extends java.lang.Object implements android.os.Parcelable {
							public static class: java.lang.Class<android.support.v4.media.session.PlaybackStateCompat.CustomAction>;
							public static CREATOR: android.os.Parcelable.Creator<android.support.v4.media.session.PlaybackStateCompat.CustomAction>;
							public getExtras(): android.os.Bundle;
							public writeToParcel(dest: android.os.Parcel, flags: number): void;
							public getIcon(): number;
							public describeContents(): number;
							public static fromCustomAction(customActionObj: any): android.support.v4.media.session.PlaybackStateCompat.CustomAction;
							public getName(): string;
							public getAction(): string;
							public toString(): string;
							public getCustomAction(): any;
						}
						export module CustomAction {
							export class Builder extends java.lang.Object {
								public static class: java.lang.Class<android.support.v4.media.session.PlaybackStateCompat.CustomAction.Builder>;
								public constructor(action: string, name: string, icon: number);
								public build(): android.support.v4.media.session.PlaybackStateCompat.CustomAction;
								public setExtras(extras: android.os.Bundle): android.support.v4.media.session.PlaybackStateCompat.CustomAction.Builder;
							}
						}
						export class ErrorCode extends java.lang.Object implements java.lang.annotation.Annotation {
							public static class: java.lang.Class<android.support.v4.media.session.PlaybackStateCompat.ErrorCode>;
							/**
							 * Constructs a new instance of the android.support.v4.media.session.PlaybackStateCompat$ErrorCode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								equals(object0: any): boolean;
								hashCode(): number;
								toString(): string;
								annotationType(): java.lang.Class<any>;
							});
							public constructor();
							public hashCode(): number;
							public annotationType(): java.lang.Class<any>;
							public equals(obj: any): boolean;
							public toString(): string;
						}
						export class MediaKeyAction extends java.lang.Object implements java.lang.annotation.Annotation {
							public static class: java.lang.Class<android.support.v4.media.session.PlaybackStateCompat.MediaKeyAction>;
							/**
							 * Constructs a new instance of the android.support.v4.media.session.PlaybackStateCompat$MediaKeyAction interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								equals(object0: any): boolean;
								hashCode(): number;
								toString(): string;
								annotationType(): java.lang.Class<any>;
							});
							public constructor();
							public hashCode(): number;
							public annotationType(): java.lang.Class<any>;
							public equals(obj: any): boolean;
							public toString(): string;
						}
						export class RepeatMode extends java.lang.Object implements java.lang.annotation.Annotation {
							public static class: java.lang.Class<android.support.v4.media.session.PlaybackStateCompat.RepeatMode>;
							/**
							 * Constructs a new instance of the android.support.v4.media.session.PlaybackStateCompat$RepeatMode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								equals(object0: any): boolean;
								hashCode(): number;
								toString(): string;
								annotationType(): java.lang.Class<any>;
							});
							public constructor();
							public hashCode(): number;
							public annotationType(): java.lang.Class<any>;
							public equals(obj: any): boolean;
							public toString(): string;
						}
						export class ShuffleMode extends java.lang.Object implements java.lang.annotation.Annotation {
							public static class: java.lang.Class<android.support.v4.media.session.PlaybackStateCompat.ShuffleMode>;
							/**
							 * Constructs a new instance of the android.support.v4.media.session.PlaybackStateCompat$ShuffleMode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								equals(object0: any): boolean;
								hashCode(): number;
								toString(): string;
								annotationType(): java.lang.Class<any>;
							});
							public constructor();
							public hashCode(): number;
							public annotationType(): java.lang.Class<any>;
							public equals(obj: any): boolean;
							public toString(): string;
						}
						export class State extends java.lang.Object implements java.lang.annotation.Annotation {
							public static class: java.lang.Class<android.support.v4.media.session.PlaybackStateCompat.State>;
							/**
							 * Constructs a new instance of the android.support.v4.media.session.PlaybackStateCompat$State interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								equals(object0: any): boolean;
								hashCode(): number;
								toString(): string;
								annotationType(): java.lang.Class<any>;
							});
							public constructor();
							public hashCode(): number;
							public annotationType(): java.lang.Class<any>;
							public equals(obj: any): boolean;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module androidx {
	export module media {
		export class AudioAttributesCompat extends java.lang.Object implements androidx.versionedparcelable.VersionedParcelable {
			public static class: java.lang.Class<androidx.media.AudioAttributesCompat>;
			public static CONTENT_TYPE_UNKNOWN: number;
			public static CONTENT_TYPE_SPEECH: number;
			public static CONTENT_TYPE_MUSIC: number;
			public static CONTENT_TYPE_MOVIE: number;
			public static CONTENT_TYPE_SONIFICATION: number;
			public static USAGE_UNKNOWN: number;
			public static USAGE_MEDIA: number;
			public static USAGE_VOICE_COMMUNICATION: number;
			public static USAGE_VOICE_COMMUNICATION_SIGNALLING: number;
			public static USAGE_ALARM: number;
			public static USAGE_NOTIFICATION: number;
			public static USAGE_NOTIFICATION_RINGTONE: number;
			public static USAGE_NOTIFICATION_COMMUNICATION_REQUEST: number;
			public static USAGE_NOTIFICATION_COMMUNICATION_INSTANT: number;
			public static USAGE_NOTIFICATION_COMMUNICATION_DELAYED: number;
			public static USAGE_NOTIFICATION_EVENT: number;
			public static USAGE_ASSISTANCE_ACCESSIBILITY: number;
			public static USAGE_ASSISTANCE_NAVIGATION_GUIDANCE: number;
			public static USAGE_ASSISTANCE_SONIFICATION: number;
			public static USAGE_GAME: number;
			public static USAGE_ASSISTANT: number;
			public static FLAG_AUDIBILITY_ENFORCED: number;
			public static FLAG_HW_AV_SYNC: number;
			public mImpl: androidx.media.AudioAttributesImpl;
			public getLegacyStreamType(): number;
			public toString(): string;
			public getFlags(): number;
			public equals(obj: any): boolean;
			public equals(o: any): boolean;
			public getVolumeControlStream(): number;
			public static wrap(aa: any): androidx.media.AudioAttributesCompat;
			public unwrap(): any;
			public getContentType(): number;
			public getUsage(): number;
			public hashCode(): number;
			public static setForceLegacyBehavior(force: boolean): void;
		}
		export module AudioAttributesCompat {
			export class AttributeContentType extends java.lang.Object implements java.lang.annotation.Annotation {
				public static class: java.lang.Class<androidx.media.AudioAttributesCompat.AttributeContentType>;
				/**
				 * Constructs a new instance of the androidx.media.AudioAttributesCompat$AttributeContentType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
				public annotationType(): java.lang.Class<any>;
				public toString(): string;
			}
			export class AttributeUsage extends java.lang.Object implements java.lang.annotation.Annotation {
				public static class: java.lang.Class<androidx.media.AudioAttributesCompat.AttributeUsage>;
				/**
				 * Constructs a new instance of the androidx.media.AudioAttributesCompat$AttributeUsage interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
				public annotationType(): java.lang.Class<any>;
				public toString(): string;
			}
			export abstract class AudioManagerHidden extends java.lang.Object {
				public static class: java.lang.Class<androidx.media.AudioAttributesCompat.AudioManagerHidden>;
				public static STREAM_BLUETOOTH_SCO: number;
				public static STREAM_SYSTEM_ENFORCED: number;
				public static STREAM_TTS: number;
				public static STREAM_ACCESSIBILITY: number;
			}
			export class Builder extends java.lang.Object {
				public static class: java.lang.Class<androidx.media.AudioAttributesCompat.Builder>;
				public constructor(aa: androidx.media.AudioAttributesCompat);
				public setContentType(contentType: number): androidx.media.AudioAttributesCompat.Builder;
				public build(): androidx.media.AudioAttributesCompat;
				public setUsage(usage: number): androidx.media.AudioAttributesCompat.Builder;
				public setLegacyStreamType(streamType: number): androidx.media.AudioAttributesCompat.Builder;
				public constructor();
				public setFlags(flags: number): androidx.media.AudioAttributesCompat.Builder;
			}
		}
	}
}

declare module androidx {
	export module media {
		export class AudioAttributesCompatParcelizer extends java.lang.Object {
			public static class: java.lang.Class<androidx.media.AudioAttributesCompatParcelizer>;
			public static write(obj: androidx.media.AudioAttributesCompat, parcel: androidx.versionedparcelable.VersionedParcel): void;
			public static read(parcel: androidx.versionedparcelable.VersionedParcel): androidx.media.AudioAttributesCompat;
			public constructor();
		}
	}
}

declare module androidx {
	export module media {
		export class AudioAttributesImpl extends java.lang.Object implements androidx.versionedparcelable.VersionedParcelable {
			public static class: java.lang.Class<androidx.media.AudioAttributesImpl>;
			/**
			 * Constructs a new instance of the androidx.media.AudioAttributesImpl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getAudioAttributes(): any;
				getVolumeControlStream(): number;
				getLegacyStreamType(): number;
				getRawLegacyStreamType(): number;
				getContentType(): number;
				getUsage(): number;
				getFlags(): number;
			});
			public constructor();
			public getLegacyStreamType(): number;
			public getFlags(): number;
			public getVolumeControlStream(): number;
			public getRawLegacyStreamType(): number;
			public getContentType(): number;
			public getAudioAttributes(): any;
			public getUsage(): number;
		}
		export module AudioAttributesImpl {
			export class Builder extends java.lang.Object {
				public static class: java.lang.Class<androidx.media.AudioAttributesImpl.Builder>;
				/**
				 * Constructs a new instance of the androidx.media.AudioAttributesImpl$Builder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					build(): androidx.media.AudioAttributesImpl;
					setUsage(int0: number): androidx.media.AudioAttributesImpl.Builder;
					setContentType(int0: number): androidx.media.AudioAttributesImpl.Builder;
					setFlags(int0: number): androidx.media.AudioAttributesImpl.Builder;
					setLegacyStreamType(int0: number): androidx.media.AudioAttributesImpl.Builder;
				});
				public constructor();
				public setContentType(int0: number): androidx.media.AudioAttributesImpl.Builder;
				public setFlags(int0: number): androidx.media.AudioAttributesImpl.Builder;
				public setUsage(int0: number): androidx.media.AudioAttributesImpl.Builder;
				public build(): androidx.media.AudioAttributesImpl;
				public setLegacyStreamType(int0: number): androidx.media.AudioAttributesImpl.Builder;
			}
		}
	}
}

declare module androidx {
	export module media {
		export class AudioAttributesImplApi21 extends java.lang.Object implements androidx.media.AudioAttributesImpl {
			public static class: java.lang.Class<androidx.media.AudioAttributesImplApi21>;
			public mAudioAttributes: any;
			public mLegacyStreamType: number;
			public getLegacyStreamType(): number;
			public toString(): string;
			public getFlags(): number;
			public equals(obj: any): boolean;
			public equals(o: any): boolean;
			public getVolumeControlStream(): number;
			public getRawLegacyStreamType(): number;
			public getContentType(): number;
			public getAudioAttributes(): any;
			public getUsage(): number;
			public hashCode(): number;
		}
		export module AudioAttributesImplApi21 {
			export class Builder extends java.lang.Object implements androidx.media.AudioAttributesImpl.Builder {
				public static class: java.lang.Class<androidx.media.AudioAttributesImplApi21.Builder>;
				public setFlags(flags: number): androidx.media.AudioAttributesImplApi21.Builder;
				public setLegacyStreamType(streamType: number): androidx.media.AudioAttributesImplApi21.Builder;
				public setContentType(int0: number): androidx.media.AudioAttributesImpl.Builder;
				public setFlags(int0: number): androidx.media.AudioAttributesImpl.Builder;
				public setUsage(usage: number): androidx.media.AudioAttributesImplApi21.Builder;
				public setUsage(int0: number): androidx.media.AudioAttributesImpl.Builder;
				public build(): androidx.media.AudioAttributesImpl;
				public setLegacyStreamType(int0: number): androidx.media.AudioAttributesImpl.Builder;
				public setContentType(contentType: number): androidx.media.AudioAttributesImplApi21.Builder;
			}
		}
	}
}

declare module androidx {
	export module media {
		export class AudioAttributesImplApi21Parcelizer extends java.lang.Object {
			public static class: java.lang.Class<androidx.media.AudioAttributesImplApi21Parcelizer>;
			public static read(parcel: androidx.versionedparcelable.VersionedParcel): androidx.media.AudioAttributesImplApi21;
			public static write(obj: androidx.media.AudioAttributesImplApi21, parcel: androidx.versionedparcelable.VersionedParcel): void;
			public constructor();
		}
	}
}

declare module androidx {
	export module media {
		export class AudioAttributesImplApi26 extends androidx.media.AudioAttributesImplApi21 {
			public static class: java.lang.Class<androidx.media.AudioAttributesImplApi26>;
			public getLegacyStreamType(): number;
			public getFlags(): number;
			public getVolumeControlStream(): number;
			public getRawLegacyStreamType(): number;
			public getContentType(): number;
			public getAudioAttributes(): any;
			public getUsage(): number;
		}
		export module AudioAttributesImplApi26 {
			export class Builder extends androidx.media.AudioAttributesImplApi21.Builder {
				public static class: java.lang.Class<androidx.media.AudioAttributesImplApi26.Builder>;
				public setFlags(flags: number): androidx.media.AudioAttributesImplApi21.Builder;
				public setContentType(int0: number): androidx.media.AudioAttributesImpl.Builder;
				public setFlags(int0: number): androidx.media.AudioAttributesImpl.Builder;
				public setLegacyStreamType(streamType: number): androidx.media.AudioAttributesImplApi21.Builder;
				public setUsage(usage: number): androidx.media.AudioAttributesImplApi21.Builder;
				public setUsage(int0: number): androidx.media.AudioAttributesImpl.Builder;
				public build(): androidx.media.AudioAttributesImpl;
				public setUsage(usage: number): androidx.media.AudioAttributesImplApi26.Builder;
				public setLegacyStreamType(int0: number): androidx.media.AudioAttributesImpl.Builder;
				public setContentType(contentType: number): androidx.media.AudioAttributesImplApi21.Builder;
			}
		}
	}
}

declare module androidx {
	export module media {
		export class AudioAttributesImplApi26Parcelizer extends java.lang.Object {
			public static class: java.lang.Class<androidx.media.AudioAttributesImplApi26Parcelizer>;
			public static write(obj: androidx.media.AudioAttributesImplApi26, parcel: androidx.versionedparcelable.VersionedParcel): void;
			public static read(parcel: androidx.versionedparcelable.VersionedParcel): androidx.media.AudioAttributesImplApi26;
			public constructor();
		}
	}
}

declare module androidx {
	export module media {
		export class AudioAttributesImplBase extends java.lang.Object implements androidx.media.AudioAttributesImpl {
			public static class: java.lang.Class<androidx.media.AudioAttributesImplBase>;
			public mUsage: number;
			public mContentType: number;
			public mFlags: number;
			public mLegacyStream: number;
			public getLegacyStreamType(): number;
			public toString(): string;
			public getFlags(): number;
			public equals(obj: any): boolean;
			public equals(o: any): boolean;
			public getVolumeControlStream(): number;
			public getRawLegacyStreamType(): number;
			public getContentType(): number;
			public getAudioAttributes(): any;
			public getUsage(): number;
			public hashCode(): number;
		}
		export module AudioAttributesImplBase {
			export class Builder extends java.lang.Object implements androidx.media.AudioAttributesImpl.Builder {
				public static class: java.lang.Class<androidx.media.AudioAttributesImplBase.Builder>;
				public setContentType(contentType: number): androidx.media.AudioAttributesImplBase.Builder;
				public setLegacyStreamType(streamType: number): androidx.media.AudioAttributesImplBase.Builder;
				public setUsage(usage: number): androidx.media.AudioAttributesImplBase.Builder;
				public setContentType(int0: number): androidx.media.AudioAttributesImpl.Builder;
				public setFlags(int0: number): androidx.media.AudioAttributesImpl.Builder;
				public setUsage(int0: number): androidx.media.AudioAttributesImpl.Builder;
				public setFlags(flags: number): androidx.media.AudioAttributesImplBase.Builder;
				public build(): androidx.media.AudioAttributesImpl;
				public setLegacyStreamType(int0: number): androidx.media.AudioAttributesImpl.Builder;
			}
		}
	}
}

declare module androidx {
	export module media {
		export class AudioAttributesImplBaseParcelizer extends java.lang.Object {
			public static class: java.lang.Class<androidx.media.AudioAttributesImplBaseParcelizer>;
			public static write(obj: androidx.media.AudioAttributesImplBase, parcel: androidx.versionedparcelable.VersionedParcel): void;
			public constructor();
			public static read(parcel: androidx.versionedparcelable.VersionedParcel): androidx.media.AudioAttributesImplBase;
		}
	}
}

declare module androidx {
	export module media {
		export class AudioFocusRequestCompat extends java.lang.Object {
			public static class: java.lang.Class<androidx.media.AudioFocusRequestCompat>;
			public getFocusChangeHandler(): globalAndroid.os.Handler;
			public equals(obj: any): boolean;
			public equals(o: any): boolean;
			public getFocusGain(): number;
			public getAudioAttributesCompat(): androidx.media.AudioAttributesCompat;
			public getOnAudioFocusChangeListener(): globalAndroid.media.AudioManager.OnAudioFocusChangeListener;
			public willPauseWhenDucked(): boolean;
			public hashCode(): number;
		}
		export module AudioFocusRequestCompat {
			export class Builder extends java.lang.Object {
				public static class: java.lang.Class<androidx.media.AudioFocusRequestCompat.Builder>;
				public build(): androidx.media.AudioFocusRequestCompat;
				public setOnAudioFocusChangeListener(listener: globalAndroid.media.AudioManager.OnAudioFocusChangeListener, handler: globalAndroid.os.Handler): androidx.media.AudioFocusRequestCompat.Builder;
				public constructor(requestToCopy: androidx.media.AudioFocusRequestCompat);
				public setWillPauseWhenDucked(pauseOnDuck: boolean): androidx.media.AudioFocusRequestCompat.Builder;
				public constructor(focusGain: number);
				public setFocusGain(focusGain: number): androidx.media.AudioFocusRequestCompat.Builder;
				public setOnAudioFocusChangeListener(listener: globalAndroid.media.AudioManager.OnAudioFocusChangeListener): androidx.media.AudioFocusRequestCompat.Builder;
				public setAudioAttributes(attributes: androidx.media.AudioAttributesCompat): androidx.media.AudioFocusRequestCompat.Builder;
			}
			export class FocusGainType extends java.lang.Object implements java.lang.annotation.Annotation {
				public static class: java.lang.Class<androidx.media.AudioFocusRequestCompat.FocusGainType>;
				/**
				 * Constructs a new instance of the androidx.media.AudioFocusRequestCompat$FocusGainType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
				public annotationType(): java.lang.Class<any>;
				public toString(): string;
			}
			export class OnAudioFocusChangeListenerHandlerCompat extends java.lang.Object implements globalAndroid.os.Handler.Callback, globalAndroid.media.AudioManager.OnAudioFocusChangeListener {
				public static class: java.lang.Class<androidx.media.AudioFocusRequestCompat.OnAudioFocusChangeListenerHandlerCompat>;
				public onAudioFocusChange(focusChange: number): void;
				public handleMessage(message: globalAndroid.os.Message): boolean;
			}
		}
	}
}

declare module androidx {
	export module media {
		export class AudioManagerCompat extends java.lang.Object {
			public static class: java.lang.Class<androidx.media.AudioManagerCompat>;
			public static AUDIOFOCUS_GAIN: number;
			public static AUDIOFOCUS_GAIN_TRANSIENT: number;
			public static AUDIOFOCUS_GAIN_TRANSIENT_MAY_DUCK: number;
			public static AUDIOFOCUS_GAIN_TRANSIENT_EXCLUSIVE: number;
			public static requestAudioFocus(audioManager: globalAndroid.media.AudioManager, focusRequest: androidx.media.AudioFocusRequestCompat): number;
			public static abandonAudioFocusRequest(audioManager: globalAndroid.media.AudioManager, focusRequest: androidx.media.AudioFocusRequestCompat): number;
		}
	}
}

declare module androidx {
	export module media {
		export class MediaBrowserCompatUtils extends java.lang.Object {
			public static class: java.lang.Class<androidx.media.MediaBrowserCompatUtils>;
			public static areSameOptions(options1: globalAndroid.os.Bundle, options2: globalAndroid.os.Bundle): boolean;
			public static hasDuplicatedItems(options1: globalAndroid.os.Bundle, options2: globalAndroid.os.Bundle): boolean;
		}
	}
}

declare module androidx {
	export module media {
		export class MediaBrowserProtocol extends java.lang.Object {
			public static class: java.lang.Class<androidx.media.MediaBrowserProtocol>;
			public static DATA_CALLBACK_TOKEN: string;
			public static DATA_CALLING_UID: string;
			public static DATA_CALLING_PID: string;
			public static DATA_MEDIA_ITEM_ID: string;
			public static DATA_MEDIA_ITEM_LIST: string;
			public static DATA_MEDIA_SESSION_TOKEN: string;
			public static DATA_OPTIONS: string;
			public static DATA_NOTIFY_CHILDREN_CHANGED_OPTIONS: string;
			public static DATA_PACKAGE_NAME: string;
			public static DATA_RESULT_RECEIVER: string;
			public static DATA_ROOT_HINTS: string;
			public static DATA_SEARCH_EXTRAS: string;
			public static DATA_SEARCH_QUERY: string;
			public static DATA_CUSTOM_ACTION: string;
			public static DATA_CUSTOM_ACTION_EXTRAS: string;
			public static EXTRA_CLIENT_VERSION: string;
			public static EXTRA_CALLING_PID: string;
			public static EXTRA_SERVICE_VERSION: string;
			public static EXTRA_MESSENGER_BINDER: string;
			public static EXTRA_SESSION_BINDER: string;
			public static SERVICE_VERSION_1: number;
			public static SERVICE_VERSION_2: number;
			public static SERVICE_VERSION_CURRENT: number;
			public static SERVICE_MSG_ON_CONNECT: number;
			public static SERVICE_MSG_ON_CONNECT_FAILED: number;
			public static SERVICE_MSG_ON_LOAD_CHILDREN: number;
			public static CLIENT_VERSION_1: number;
			public static CLIENT_VERSION_CURRENT: number;
			public static CLIENT_MSG_CONNECT: number;
			public static CLIENT_MSG_DISCONNECT: number;
			public static CLIENT_MSG_ADD_SUBSCRIPTION: number;
			public static CLIENT_MSG_REMOVE_SUBSCRIPTION: number;
			public static CLIENT_MSG_GET_MEDIA_ITEM: number;
			public static CLIENT_MSG_REGISTER_CALLBACK_MESSENGER: number;
			public static CLIENT_MSG_UNREGISTER_CALLBACK_MESSENGER: number;
			public static CLIENT_MSG_SEARCH: number;
			public static CLIENT_MSG_SEND_CUSTOM_ACTION: number;
		}
	}
}

declare module androidx {
	export module media {
		export abstract class MediaBrowserServiceCompat extends globalAndroid.app.Service {
			public static class: java.lang.Class<androidx.media.MediaBrowserServiceCompat>;
			public static SERVICE_INTERFACE: string;
			public static KEY_MEDIA_ITEM: string;
			public static KEY_SEARCH_RESULTS: string;
			public static RESULT_ERROR: number;
			public static RESULT_OK: number;
			public static RESULT_PROGRESS_UPDATE: number;
			public setSessionToken(token: globalAndroid.support.v4.media.session.MediaSessionCompat.Token): void;
			public onLoadChildren(parentId: string, result: androidx.media.MediaBrowserServiceCompat.Result<java.util.List<globalAndroid.support.v4.media.MediaBrowserCompat.MediaItem>>, options: globalAndroid.os.Bundle): void;
			public onSearch(query: string, extras: globalAndroid.os.Bundle, result: androidx.media.MediaBrowserServiceCompat.Result<java.util.List<globalAndroid.support.v4.media.MediaBrowserCompat.MediaItem>>): void;
			public onGetRoot(string0: string, int1: number, bundle2: globalAndroid.os.Bundle): androidx.media.MediaBrowserServiceCompat.BrowserRoot;
			public onLoadItem(itemId: string, result: androidx.media.MediaBrowserServiceCompat.Result<globalAndroid.support.v4.media.MediaBrowserCompat.MediaItem>): void;
			public getSessionToken(): globalAndroid.support.v4.media.session.MediaSessionCompat.Token;
			public getBrowserRootHints(): globalAndroid.os.Bundle;
			public constructor(base: globalAndroid.content.Context);
			public onCreate(): void;
			public constructor();
			public attachToBaseContext(base: globalAndroid.content.Context): void;
			public onBind(intent0: globalAndroid.content.Intent): globalAndroid.os.IBinder;
			public notifyChildrenChanged(parentId: string, options: globalAndroid.os.Bundle): void;
			public onSubscribe(id: string, option: globalAndroid.os.Bundle): void;
			public onCustomAction(action: string, extras: globalAndroid.os.Bundle, result: androidx.media.MediaBrowserServiceCompat.Result<globalAndroid.os.Bundle>): void;
			public dump(fd: java.io.FileDescriptor, writer: java.io.PrintWriter, strings2: native.Array<string>): void;
			public onLoadChildren(string0: string, result1: androidx.media.MediaBrowserServiceCompat.Result<java.util.List<globalAndroid.support.v4.media.MediaBrowserCompat.MediaItem>>): void;
			public onBind(intent: globalAndroid.content.Intent): globalAndroid.os.IBinder;
			public notifyChildrenChanged(remoteUserInfo: androidx.media.MediaSessionManager.RemoteUserInfo, parentId: string, options: globalAndroid.os.Bundle): void;
			public onTrimMemory(level: number): void;
			public onUnsubscribe(id: string): void;
			public notifyChildrenChanged(parentId: string): void;
			public getCurrentBrowserInfo(): androidx.media.MediaSessionManager.RemoteUserInfo;
		}
		export module MediaBrowserServiceCompat {
			export class BrowserRoot extends java.lang.Object {
				public static class: java.lang.Class<androidx.media.MediaBrowserServiceCompat.BrowserRoot>;
				public static EXTRA_RECENT: string;
				public static EXTRA_OFFLINE: string;
				public static EXTRA_SUGGESTED: string;
				public static EXTRA_SUGGESTION_KEYWORDS: string;
				public getExtras(): globalAndroid.os.Bundle;
				public getRootId(): string;
				public constructor(rootId: string, extras: globalAndroid.os.Bundle);
			}
			export class ConnectionRecord extends java.lang.Object implements globalAndroid.os.IBinder.DeathRecipient {
				public static class: java.lang.Class<androidx.media.MediaBrowserServiceCompat.ConnectionRecord>;
				public pkg: string;
				public pid: number;
				public uid: number;
				public browserInfo: androidx.media.MediaSessionManager.RemoteUserInfo;
				public rootHints: globalAndroid.os.Bundle;
				public callbacks: androidx.media.MediaBrowserServiceCompat.ServiceCallbacks;
				public subscriptions: java.util.HashMap<string,java.util.List<androidx.core.util.Pair<globalAndroid.os.IBinder,globalAndroid.os.Bundle>>>;
				public root: androidx.media.MediaBrowserServiceCompat.BrowserRoot;
				public binderDied(): void;
			}
			export class MediaBrowserServiceImpl extends java.lang.Object {
				public static class: java.lang.Class<androidx.media.MediaBrowserServiceCompat.MediaBrowserServiceImpl>;
				/**
				 * Constructs a new instance of the androidx.media.MediaBrowserServiceCompat$MediaBrowserServiceImpl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onCreate(): void;
					onBind(intent0: globalAndroid.content.Intent): globalAndroid.os.IBinder;
					setSessionToken(token0: globalAndroid.support.v4.media.session.MediaSessionCompat.Token): void;
					notifyChildrenChanged(string0: string, bundle1: globalAndroid.os.Bundle): void;
					notifyChildrenChanged(remoteUserInfo0: androidx.media.MediaSessionManager.RemoteUserInfo, string1: string, bundle2: globalAndroid.os.Bundle): void;
					getBrowserRootHints(): globalAndroid.os.Bundle;
					getCurrentBrowserInfo(): androidx.media.MediaSessionManager.RemoteUserInfo;
				});
				public constructor();
				public getBrowserRootHints(): globalAndroid.os.Bundle;
				public notifyChildrenChanged(remoteUserInfo0: androidx.media.MediaSessionManager.RemoteUserInfo, string1: string, bundle2: globalAndroid.os.Bundle): void;
				public onCreate(): void;
				public getCurrentBrowserInfo(): androidx.media.MediaSessionManager.RemoteUserInfo;
				public setSessionToken(token0: globalAndroid.support.v4.media.session.MediaSessionCompat.Token): void;
				public notifyChildrenChanged(string0: string, bundle1: globalAndroid.os.Bundle): void;
				public onBind(intent0: globalAndroid.content.Intent): globalAndroid.os.IBinder;
			}
			export class MediaBrowserServiceImplApi21 extends java.lang.Object implements androidx.media.MediaBrowserServiceCompat.MediaBrowserServiceImpl {
				public static class: java.lang.Class<androidx.media.MediaBrowserServiceCompat.MediaBrowserServiceImplApi21>;
				public notifyChildrenChanged(parentId: string, options: globalAndroid.os.Bundle): void;
				public getBrowserRootHints(): globalAndroid.os.Bundle;
				public onLoadChildren(parentId: string, resultWrapper: androidx.media.MediaBrowserServiceCompat.ResultWrapper<java.util.List<globalAndroid.os.Parcel>>): void;
				public onCreate(): void;
				public notifyChildrenChanged(remoteUserInfo: androidx.media.MediaSessionManager.RemoteUserInfo, parentId: string, options: globalAndroid.os.Bundle): void;
				public getCurrentBrowserInfo(): androidx.media.MediaSessionManager.RemoteUserInfo;
				public setSessionToken(token: globalAndroid.support.v4.media.session.MediaSessionCompat.Token): void;
				public onGetRoot(clientPackageName: string, clientUid: number, rootHints: globalAndroid.os.Bundle): androidx.media.MediaBrowserServiceCompat.BrowserRoot;
				public onBind(intent: globalAndroid.content.Intent): globalAndroid.os.IBinder;
			}
			export module MediaBrowserServiceImplApi21 {
				export class MediaBrowserServiceApi21 extends java.lang.Object {
					public static class: java.lang.Class<androidx.media.MediaBrowserServiceCompat.MediaBrowserServiceImplApi21.MediaBrowserServiceApi21>;
					public onLoadChildren(parentId: string, result: any): void;
					public onLoadChildren(string0: string, result1: any): void;
					public onTrimMemory(level: number): void;
					public onLoadChildren(parentId: string, result: any, options: globalAndroid.os.Bundle): void;
					public onGetRoot(clientPackageName: string, clientUid: number, rootHints: globalAndroid.os.Bundle): any;
					public onGetRoot(string0: string, int1: number, bundle2: globalAndroid.os.Bundle): any;
				}
			}
			export class MediaBrowserServiceImplApi23 extends androidx.media.MediaBrowserServiceCompat.MediaBrowserServiceImplApi21 {
				public static class: java.lang.Class<androidx.media.MediaBrowserServiceCompat.MediaBrowserServiceImplApi23>;
				public notifyChildrenChanged(parentId: string, options: globalAndroid.os.Bundle): void;
				public getBrowserRootHints(): globalAndroid.os.Bundle;
				public onCreate(): void;
				public notifyChildrenChanged(remoteUserInfo: androidx.media.MediaSessionManager.RemoteUserInfo, parentId: string, options: globalAndroid.os.Bundle): void;
				public getCurrentBrowserInfo(): androidx.media.MediaSessionManager.RemoteUserInfo;
				public onLoadItem(itemId: string, resultWrapper: androidx.media.MediaBrowserServiceCompat.ResultWrapper<globalAndroid.os.Parcel>): void;
				public setSessionToken(token: globalAndroid.support.v4.media.session.MediaSessionCompat.Token): void;
				public onBind(intent: globalAndroid.content.Intent): globalAndroid.os.IBinder;
			}
			export module MediaBrowserServiceImplApi23 {
				export class MediaBrowserServiceApi23 extends androidx.media.MediaBrowserServiceCompat.MediaBrowserServiceImplApi21.MediaBrowserServiceApi21 {
					public static class: java.lang.Class<androidx.media.MediaBrowserServiceCompat.MediaBrowserServiceImplApi23.MediaBrowserServiceApi23>;
					public onTrimMemory(level: number): void;
					public onLoadItem(itemId: string, result: any): void;
				}
			}
			export class MediaBrowserServiceImplApi26 extends androidx.media.MediaBrowserServiceCompat.MediaBrowserServiceImplApi23 {
				public static class: java.lang.Class<androidx.media.MediaBrowserServiceCompat.MediaBrowserServiceImplApi26>;
				public getBrowserRootHints(): globalAndroid.os.Bundle;
				public notifyChildrenChanged(parentId: string, options: globalAndroid.os.Bundle): void;
				public onLoadChildren(parentId: string, resultWrapper: androidx.media.MediaBrowserServiceCompat.ResultWrapper<java.util.List<globalAndroid.os.Parcel>>): void;
				public onCreate(): void;
				public onLoadChildren(parentId: string, resultWrapper: androidx.media.MediaBrowserServiceCompat.ResultWrapper<java.util.List<globalAndroid.os.Parcel>>, options: globalAndroid.os.Bundle): void;
				public notifyChildrenChanged(remoteUserInfo: androidx.media.MediaSessionManager.RemoteUserInfo, parentId: string, options: globalAndroid.os.Bundle): void;
				public getCurrentBrowserInfo(): androidx.media.MediaSessionManager.RemoteUserInfo;
				public setSessionToken(token: globalAndroid.support.v4.media.session.MediaSessionCompat.Token): void;
				public onBind(intent: globalAndroid.content.Intent): globalAndroid.os.IBinder;
			}
			export module MediaBrowserServiceImplApi26 {
				export class MediaBrowserServiceApi26 extends androidx.media.MediaBrowserServiceCompat.MediaBrowserServiceImplApi23.MediaBrowserServiceApi23 {
					public static class: java.lang.Class<androidx.media.MediaBrowserServiceCompat.MediaBrowserServiceImplApi26.MediaBrowserServiceApi26>;
					public onLoadChildren(parentId: string, result: any): void;
					public onTrimMemory(level: number): void;
					public onLoadChildren(parentId: string, result: any, options: globalAndroid.os.Bundle): void;
				}
			}
			export class MediaBrowserServiceImplApi28 extends androidx.media.MediaBrowserServiceCompat.MediaBrowserServiceImplApi26 {
				public static class: java.lang.Class<androidx.media.MediaBrowserServiceCompat.MediaBrowserServiceImplApi28>;
				public notifyChildrenChanged(parentId: string, options: globalAndroid.os.Bundle): void;
				public getBrowserRootHints(): globalAndroid.os.Bundle;
				public getCurrentBrowserInfo(): androidx.media.MediaSessionManager.RemoteUserInfo;
				public onCreate(): void;
				public notifyChildrenChanged(remoteUserInfo: androidx.media.MediaSessionManager.RemoteUserInfo, parentId: string, options: globalAndroid.os.Bundle): void;
				public setSessionToken(token: globalAndroid.support.v4.media.session.MediaSessionCompat.Token): void;
				public onBind(intent: globalAndroid.content.Intent): globalAndroid.os.IBinder;
			}
			export class MediaBrowserServiceImplBase extends java.lang.Object implements androidx.media.MediaBrowserServiceCompat.MediaBrowserServiceImpl {
				public static class: java.lang.Class<androidx.media.MediaBrowserServiceCompat.MediaBrowserServiceImplBase>;
				public notifyChildrenChanged(parentId: string, options: globalAndroid.os.Bundle): void;
				public getBrowserRootHints(): globalAndroid.os.Bundle;
				public onCreate(): void;
				public notifyChildrenChanged(remoteUserInfo: androidx.media.MediaSessionManager.RemoteUserInfo, parentId: string, options: globalAndroid.os.Bundle): void;
				public getCurrentBrowserInfo(): androidx.media.MediaSessionManager.RemoteUserInfo;
				public setSessionToken(token: globalAndroid.support.v4.media.session.MediaSessionCompat.Token): void;
				public onBind(intent: globalAndroid.content.Intent): globalAndroid.os.IBinder;
			}
			export class Result<T>  extends java.lang.Object {
				public static class: java.lang.Class<androidx.media.MediaBrowserServiceCompat.Result<any>>;
				public sendResult(result: T): void;
				public sendError(extras: globalAndroid.os.Bundle): void;
				public sendProgressUpdate(extras: globalAndroid.os.Bundle): void;
				public detach(): void;
			}
			export class ResultWrapper<T>  extends java.lang.Object {
				public static class: java.lang.Class<androidx.media.MediaBrowserServiceCompat.ResultWrapper<any>>;
				public sendResult(result: T): void;
				public detach(): void;
			}
			export class ServiceBinderImpl extends java.lang.Object {
				public static class: java.lang.Class<androidx.media.MediaBrowserServiceCompat.ServiceBinderImpl>;
				public disconnect(callbacks: androidx.media.MediaBrowserServiceCompat.ServiceCallbacks): void;
				public connect(pkg: string, pid: number, uid: number, rootHints: globalAndroid.os.Bundle, callbacks: androidx.media.MediaBrowserServiceCompat.ServiceCallbacks): void;
				public sendCustomAction(action: string, extras: globalAndroid.os.Bundle, receiver: globalAndroid.support.v4.os.ResultReceiver, callbacks: androidx.media.MediaBrowserServiceCompat.ServiceCallbacks): void;
				public unregisterCallbacks(callbacks: androidx.media.MediaBrowserServiceCompat.ServiceCallbacks): void;
				public registerCallbacks(callbacks: androidx.media.MediaBrowserServiceCompat.ServiceCallbacks, pkg: string, pid: number, uid: number, rootHints: globalAndroid.os.Bundle): void;
				public getMediaItem(mediaId: string, receiver: globalAndroid.support.v4.os.ResultReceiver, callbacks: androidx.media.MediaBrowserServiceCompat.ServiceCallbacks): void;
				public search(query: string, extras: globalAndroid.os.Bundle, receiver: globalAndroid.support.v4.os.ResultReceiver, callbacks: androidx.media.MediaBrowserServiceCompat.ServiceCallbacks): void;
				public removeSubscription(id: string, token: globalAndroid.os.IBinder, callbacks: androidx.media.MediaBrowserServiceCompat.ServiceCallbacks): void;
				public addSubscription(id: string, token: globalAndroid.os.IBinder, options: globalAndroid.os.Bundle, callbacks: androidx.media.MediaBrowserServiceCompat.ServiceCallbacks): void;
			}
			export class ServiceCallbacks extends java.lang.Object {
				public static class: java.lang.Class<androidx.media.MediaBrowserServiceCompat.ServiceCallbacks>;
				/**
				 * Constructs a new instance of the androidx.media.MediaBrowserServiceCompat$ServiceCallbacks interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					asBinder(): globalAndroid.os.IBinder;
					onConnect(string0: string, token1: globalAndroid.support.v4.media.session.MediaSessionCompat.Token, bundle2: globalAndroid.os.Bundle): void;
					onConnectFailed(): void;
					onLoadChildren(string0: string, list1: java.util.List<globalAndroid.support.v4.media.MediaBrowserCompat.MediaItem>, bundle2: globalAndroid.os.Bundle, bundle3: globalAndroid.os.Bundle): void;
				});
				public constructor();
				public onLoadChildren(string0: string, list1: java.util.List<globalAndroid.support.v4.media.MediaBrowserCompat.MediaItem>, bundle2: globalAndroid.os.Bundle, bundle3: globalAndroid.os.Bundle): void;
				public onConnect(string0: string, token1: globalAndroid.support.v4.media.session.MediaSessionCompat.Token, bundle2: globalAndroid.os.Bundle): void;
				public asBinder(): globalAndroid.os.IBinder;
				public onConnectFailed(): void;
			}
			export class ServiceCallbacksCompat extends java.lang.Object implements androidx.media.MediaBrowserServiceCompat.ServiceCallbacks {
				public static class: java.lang.Class<androidx.media.MediaBrowserServiceCompat.ServiceCallbacksCompat>;
				public onLoadChildren(mediaId: string, list: java.util.List<globalAndroid.support.v4.media.MediaBrowserCompat.MediaItem>, options: globalAndroid.os.Bundle, notifyChildrenChangedOptions: globalAndroid.os.Bundle): void;
				public asBinder(): globalAndroid.os.IBinder;
				public onConnectFailed(): void;
				public onConnect(root: string, session: globalAndroid.support.v4.media.session.MediaSessionCompat.Token, extras: globalAndroid.os.Bundle): void;
			}
			export class ServiceHandler extends globalAndroid.os.Handler {
				public static class: java.lang.Class<androidx.media.MediaBrowserServiceCompat.ServiceHandler>;
				public handleMessage(msg: globalAndroid.os.Message): void;
				public postOrRun(r: java.lang.Runnable): void;
				public sendMessageAtTime(msg: globalAndroid.os.Message, uptimeMillis: number): boolean;
			}
		}
	}
}

declare module androidx {
	export module media {
		export class MediaSessionManager extends java.lang.Object {
			public static class: java.lang.Class<androidx.media.MediaSessionManager>;
			public static getSessionManager(context: globalAndroid.content.Context): androidx.media.MediaSessionManager;
			public isTrustedForMediaControl(userInfo: androidx.media.MediaSessionManager.RemoteUserInfo): boolean;
		}
		export module MediaSessionManager {
			export class MediaSessionManagerImpl extends java.lang.Object {
				public static class: java.lang.Class<androidx.media.MediaSessionManager.MediaSessionManagerImpl>;
				/**
				 * Constructs a new instance of the androidx.media.MediaSessionManager$MediaSessionManagerImpl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getContext(): globalAndroid.content.Context;
					isTrustedForMediaControl(remoteUserInfoImpl0: androidx.media.MediaSessionManager.RemoteUserInfoImpl): boolean;
				});
				public constructor();
				public getContext(): globalAndroid.content.Context;
				public isTrustedForMediaControl(remoteUserInfoImpl0: androidx.media.MediaSessionManager.RemoteUserInfoImpl): boolean;
			}
			export class RemoteUserInfo extends java.lang.Object {
				public static class: java.lang.Class<androidx.media.MediaSessionManager.RemoteUserInfo>;
				public static LEGACY_CONTROLLER: string;
				public static UNKNOWN_PID: number;
				public static UNKNOWN_UID: number;
				public constructor(remoteUserInfo: any);
				public equals(obj: any): boolean;
				public constructor(packageName: string, pid: number, uid: number);
				public getUid(): number;
				public hashCode(): number;
				public getPackageName(): string;
				public getPid(): number;
			}
			export class RemoteUserInfoImpl extends java.lang.Object {
				public static class: java.lang.Class<androidx.media.MediaSessionManager.RemoteUserInfoImpl>;
				/**
				 * Constructs a new instance of the androidx.media.MediaSessionManager$RemoteUserInfoImpl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getPackageName(): string;
					getPid(): number;
					getUid(): number;
				});
				public constructor();
				public getUid(): number;
				public getPackageName(): string;
				public getPid(): number;
			}
		}
	}
}

declare module androidx {
	export module media {
		export class MediaSessionManagerImplApi21 extends androidx.media.MediaSessionManagerImplBase {
			public static class: java.lang.Class<androidx.media.MediaSessionManagerImplApi21>;
			public isTrustedForMediaControl(userInfo: androidx.media.MediaSessionManager.RemoteUserInfoImpl): boolean;
			public getContext(): globalAndroid.content.Context;
		}
	}
}

declare module androidx {
	export module media {
		export class MediaSessionManagerImplApi28 extends androidx.media.MediaSessionManagerImplApi21 {
			public static class: java.lang.Class<androidx.media.MediaSessionManagerImplApi28>;
			public isTrustedForMediaControl(userInfo: androidx.media.MediaSessionManager.RemoteUserInfoImpl): boolean;
			public getContext(): globalAndroid.content.Context;
		}
		export module MediaSessionManagerImplApi28 {
			export class RemoteUserInfoImplApi28 extends androidx.media.MediaSessionManagerImplBase.RemoteUserInfoImplBase {
				public static class: java.lang.Class<androidx.media.MediaSessionManagerImplApi28.RemoteUserInfoImplApi28>;
				public getUid(): number;
				public getPackageName(): string;
				public getPid(): number;
			}
		}
	}
}

declare module androidx {
	export module media {
		export class MediaSessionManagerImplBase extends java.lang.Object implements androidx.media.MediaSessionManager.MediaSessionManagerImpl {
			public static class: java.lang.Class<androidx.media.MediaSessionManagerImplBase>;
			public isTrustedForMediaControl(userInfo: androidx.media.MediaSessionManager.RemoteUserInfoImpl): boolean;
			public getContext(): globalAndroid.content.Context;
		}
		export module MediaSessionManagerImplBase {
			export class RemoteUserInfoImplBase extends java.lang.Object implements androidx.media.MediaSessionManager.RemoteUserInfoImpl {
				public static class: java.lang.Class<androidx.media.MediaSessionManagerImplBase.RemoteUserInfoImplBase>;
				public equals(obj: any): boolean;
				public getUid(): number;
				public hashCode(): number;
				public getPackageName(): string;
				public getPid(): number;
			}
		}
	}
}

declare module androidx {
	export module media {
		export abstract class VolumeProviderCompat extends java.lang.Object {
			public static class: java.lang.Class<androidx.media.VolumeProviderCompat>;
			public static VOLUME_CONTROL_FIXED: number;
			public static VOLUME_CONTROL_RELATIVE: number;
			public static VOLUME_CONTROL_ABSOLUTE: number;
			public onSetVolumeTo(volume: number): void;
			public onAdjustVolume(direction: number): void;
			public constructor(volumeControl: number, maxVolume: number, currentVolume: number);
			public getVolumeControl(): number;
			public getVolumeProvider(): any;
			public setCallback(callback: androidx.media.VolumeProviderCompat.Callback): void;
			public getCurrentVolume(): number;
			public getMaxVolume(): number;
			public setCurrentVolume(currentVolume: number): void;
		}
		export module VolumeProviderCompat {
			export abstract class Callback extends java.lang.Object {
				public static class: java.lang.Class<androidx.media.VolumeProviderCompat.Callback>;
				public onVolumeChanged(volumeProviderCompat0: androidx.media.VolumeProviderCompat): void;
				public constructor();
			}
			export class ControlType extends java.lang.Object implements java.lang.annotation.Annotation {
				public static class: java.lang.Class<androidx.media.VolumeProviderCompat.ControlType>;
				/**
				 * Constructs a new instance of the androidx.media.VolumeProviderCompat$ControlType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
				public annotationType(): java.lang.Class<any>;
				public toString(): string;
			}
		}
	}
}

declare module androidx {
	export module media {
		export module app {
			export class NotificationCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.media.app.NotificationCompat>;
			}
			export module NotificationCompat {
				export class DecoratedMediaCustomViewStyle extends androidx.media.app.NotificationCompat.MediaStyle {
					public static class: java.lang.Class<androidx.media.app.NotificationCompat.DecoratedMediaCustomViewStyle>;
					public constructor(builder: androidx.core.app.NotificationCompat.Builder);
					public makeBigContentView(builder: androidx.core.app.NotificationBuilderWithBuilderAccessor): globalAndroid.widget.RemoteViews;
					public makeContentView(builder: androidx.core.app.NotificationBuilderWithBuilderAccessor): globalAndroid.widget.RemoteViews;
					public constructor();
					public apply(builder: androidx.core.app.NotificationBuilderWithBuilderAccessor): void;
					public makeHeadsUpContentView(builder: androidx.core.app.NotificationBuilderWithBuilderAccessor): globalAndroid.widget.RemoteViews;
				}
				export class MediaStyle extends androidx.core.app.NotificationCompat.Style {
					public static class: java.lang.Class<androidx.media.app.NotificationCompat.MediaStyle>;
					public setMediaSession(token: globalAndroid.support.v4.media.session.MediaSessionCompat.Token): androidx.media.app.NotificationCompat.MediaStyle;
					public constructor(builder: androidx.core.app.NotificationCompat.Builder);
					public makeBigContentView(builder: androidx.core.app.NotificationBuilderWithBuilderAccessor): globalAndroid.widget.RemoteViews;
					public static getMediaSession(notification: globalAndroid.app.Notification): globalAndroid.support.v4.media.session.MediaSessionCompat.Token;
					public setShowActionsInCompactView(actions: native.Array<number>): androidx.media.app.NotificationCompat.MediaStyle;
					public makeContentView(builder: androidx.core.app.NotificationBuilderWithBuilderAccessor): globalAndroid.widget.RemoteViews;
					public constructor();
					public setShowCancelButton(show: boolean): androidx.media.app.NotificationCompat.MediaStyle;
					public apply(builder: androidx.core.app.NotificationBuilderWithBuilderAccessor): void;
					public setCancelButtonIntent(pendingIntent: globalAndroid.app.PendingIntent): androidx.media.app.NotificationCompat.MediaStyle;
				}
			}
		}
	}
}

declare module androidx {
	export module media {
		export module session {
			export class MediaButtonReceiver extends globalAndroid.content.BroadcastReceiver {
				public static class: java.lang.Class<androidx.media.session.MediaButtonReceiver>;
				public static handleIntent(mediaSessionCompat: globalAndroid.support.v4.media.session.MediaSessionCompat, intent: globalAndroid.content.Intent): globalAndroid.view.KeyEvent;
				public static buildMediaButtonPendingIntent(context: globalAndroid.content.Context, mbrComponent: globalAndroid.content.ComponentName, action: number): globalAndroid.app.PendingIntent;
				public onReceive(context: globalAndroid.content.Context, intent: globalAndroid.content.Intent): void;
				public onReceive(context0: globalAndroid.content.Context, intent1: globalAndroid.content.Intent): void;
				public static buildMediaButtonPendingIntent(context: globalAndroid.content.Context, action: number): globalAndroid.app.PendingIntent;
				public static getMediaButtonReceiverComponent(context: globalAndroid.content.Context): globalAndroid.content.ComponentName;
				public constructor();
			}
			export module MediaButtonReceiver {
				export class MediaButtonConnectionCallback extends globalAndroid.support.v4.media.MediaBrowserCompat.ConnectionCallback {
					public static class: java.lang.Class<androidx.media.session.MediaButtonReceiver.MediaButtonConnectionCallback>;
					public onConnected(): void;
					public onConnectionFailed(): void;
					public onConnectionSuspended(): void;
				}
			}
		}
	}
}

//Generics information:
//androidx.media.MediaBrowserServiceCompat.Result:1
//androidx.media.MediaBrowserServiceCompat.ResultWrapper:1

