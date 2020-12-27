declare module com {
	export module squareup {
		export module picasso {
			export abstract class Action<T>  extends java.lang.Object {
				public static class: java.lang.Class<com.squareup.picasso.Action<any>>;
			}
			export module Action {
				export class RequestWeakReference<M>  extends java.lang.ref.WeakReference<any> {
					public static class: java.lang.Class<com.squareup.picasso.Action.RequestWeakReference<any>>;
				}
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class AssetRequestHandler extends com.squareup.picasso.RequestHandler {
				public static class: java.lang.Class<com.squareup.picasso.AssetRequestHandler>;
				public static ANDROID_ASSET: string;
				public load(request0: com.squareup.picasso.Request, int1: number): com.squareup.picasso.RequestHandler.Result;
				public canHandleRequest(request0: com.squareup.picasso.Request): boolean;
				public canHandleRequest(data: com.squareup.picasso.Request): boolean;
				public load(request: com.squareup.picasso.Request, networkPolicy: number): com.squareup.picasso.RequestHandler.Result;
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class BitmapHunter extends java.lang.Object implements java.lang.Runnable {
				public static class: java.lang.Class<com.squareup.picasso.BitmapHunter>;
				public run(): void;
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class BuildConfig extends java.lang.Object {
				public static class: java.lang.Class<com.squareup.picasso.BuildConfig>;
				public static APPLICATION_ID: string;
				public static BUILD_TYPE: string;
				public static DEBUG: boolean;
				public static FLAVOR: string;
				public static VERSION_CODE: number;
				public static VERSION_NAME: string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class Cache extends java.lang.Object {
				public static class: java.lang.Class<com.squareup.picasso.Cache>;
				/**
				 * Constructs a new instance of the com.squareup.picasso.Cache interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					get(string0: string): globalAndroid.graphics.Bitmap;
					set(string0: string, bitmap1: globalAndroid.graphics.Bitmap): void;
					size(): number;
					maxSize(): number;
					clear(): void;
					clearKeyUri(string0: string): void;
				});
				public constructor();
				public static NONE: com.squareup.picasso.Cache;
				public maxSize(): number;
				public clear(): void;
				public clearKeyUri(string0: string): void;
				public get(string0: string): globalAndroid.graphics.Bitmap;
				public set(string0: string, bitmap1: globalAndroid.graphics.Bitmap): void;
				public size(): number;
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class Callback extends java.lang.Object {
				public static class: java.lang.Class<com.squareup.picasso.Callback>;
				/**
				 * Constructs a new instance of the com.squareup.picasso.Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onSuccess(): void;
					onError(exception0: java.lang.Exception): void;
				});
				public constructor();
				public onError(exception0: java.lang.Exception): void;
				public onSuccess(): void;
			}
			export module Callback {
				export class EmptyCallback extends java.lang.Object implements com.squareup.picasso.Callback {
					public static class: java.lang.Class<com.squareup.picasso.Callback.EmptyCallback>;
					public constructor();
					public onSuccess(): void;
					public onError(e: java.lang.Exception): void;
				}
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class ContactsPhotoRequestHandler extends com.squareup.picasso.RequestHandler {
				public static class: java.lang.Class<com.squareup.picasso.ContactsPhotoRequestHandler>;
				public load(request0: com.squareup.picasso.Request, int1: number): com.squareup.picasso.RequestHandler.Result;
				public canHandleRequest(request0: com.squareup.picasso.Request): boolean;
				public canHandleRequest(data: com.squareup.picasso.Request): boolean;
				public load(request: com.squareup.picasso.Request, networkPolicy: number): com.squareup.picasso.RequestHandler.Result;
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class ContentStreamRequestHandler extends com.squareup.picasso.RequestHandler {
				public static class: java.lang.Class<com.squareup.picasso.ContentStreamRequestHandler>;
				public load(request0: com.squareup.picasso.Request, int1: number): com.squareup.picasso.RequestHandler.Result;
				public canHandleRequest(request0: com.squareup.picasso.Request): boolean;
				public canHandleRequest(data: com.squareup.picasso.Request): boolean;
				public load(request: com.squareup.picasso.Request, networkPolicy: number): com.squareup.picasso.RequestHandler.Result;
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class DeferredRequestCreator extends java.lang.Object implements globalAndroid.view.ViewTreeObserver.OnPreDrawListener, globalAndroid.view.View.OnAttachStateChangeListener {
				public static class: java.lang.Class<com.squareup.picasso.DeferredRequestCreator>;
				public onViewDetachedFromWindow(view: globalAndroid.view.View): void;
				public onPreDraw(): boolean;
				public onViewAttachedToWindow(view: globalAndroid.view.View): void;
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class Dispatcher extends java.lang.Object {
				public static class: java.lang.Class<com.squareup.picasso.Dispatcher>;
			}
			export module Dispatcher {
				export class DispatcherHandler extends globalAndroid.os.Handler {
					public static class: java.lang.Class<com.squareup.picasso.Dispatcher.DispatcherHandler>;
					public handleMessage(msg: globalAndroid.os.Message): void;
				}
				export class DispatcherThread extends globalAndroid.os.HandlerThread {
					public static class: java.lang.Class<com.squareup.picasso.Dispatcher.DispatcherThread>;
					public run(): void;
				}
				export class NetworkBroadcastReceiver extends globalAndroid.content.BroadcastReceiver {
					public static class: java.lang.Class<com.squareup.picasso.Dispatcher.NetworkBroadcastReceiver>;
					public onReceive(context: globalAndroid.content.Context, intent: globalAndroid.content.Intent): void;
					public onReceive(context0: globalAndroid.content.Context, intent1: globalAndroid.content.Intent): void;
				}
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class Downloader extends java.lang.Object {
				public static class: java.lang.Class<com.squareup.picasso.Downloader>;
				/**
				 * Constructs a new instance of the com.squareup.picasso.Downloader interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					load(request0: okhttp3.Request): okhttp3.Response;
					shutdown(): void;
				});
				public constructor();
				public shutdown(): void;
				public load(request0: okhttp3.Request): okhttp3.Response;
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class FetchAction extends com.squareup.picasso.Action<any> {
				public static class: java.lang.Class<com.squareup.picasso.FetchAction>;
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class FileRequestHandler extends com.squareup.picasso.ContentStreamRequestHandler {
				public static class: java.lang.Class<com.squareup.picasso.FileRequestHandler>;
				public canHandleRequest(data: com.squareup.picasso.Request): boolean;
				public load(request: com.squareup.picasso.Request, networkPolicy: number): com.squareup.picasso.RequestHandler.Result;
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class GetAction extends com.squareup.picasso.Action<java.lang.Void> {
				public static class: java.lang.Class<com.squareup.picasso.GetAction>;
				public error(e: java.lang.Exception): void;
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class ImageViewAction extends com.squareup.picasso.Action<globalAndroid.widget.ImageView> {
				public static class: java.lang.Class<com.squareup.picasso.ImageViewAction>;
				public error(e: java.lang.Exception): void;
				public complete(result: globalAndroid.graphics.Bitmap, from: com.squareup.picasso.Picasso.LoadedFrom): void;
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class LruCache extends java.lang.Object implements com.squareup.picasso.Cache {
				public static class: java.lang.Class<com.squareup.picasso.LruCache>;
				public clearKeyUri(uri: string): void;
				public evictionCount(): number;
				public maxSize(): number;
				public constructor(context: globalAndroid.content.Context);
				public missCount(): number;
				public clear(): void;
				public putCount(): number;
				public set(key: string, bitmap: globalAndroid.graphics.Bitmap): void;
				public hitCount(): number;
				public get(key: string): globalAndroid.graphics.Bitmap;
				public constructor(maxByteCount: number);
				public size(): number;
			}
			export module LruCache {
				export class BitmapAndSize extends java.lang.Object {
					public static class: java.lang.Class<com.squareup.picasso.LruCache.BitmapAndSize>;
				}
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class MarkableInputStream extends java.io.InputStream {
				public static class: java.lang.Class<com.squareup.picasso.MarkableInputStream>;
				public markSupported(): boolean;
				public close(): void;
				public skip(byteCount: number): number;
				public mark(readlimit: number): void;
				public mark(readLimit: number): void;
				public read(buffer: native.Array<number>): number;
				public read(b: native.Array<number>): number;
				public skip(n: number): number;
				public reset(token: number): void;
				public reset(): void;
				public read(): number;
				public available(): number;
				public allowMarksToExpire(allowExpire: boolean): void;
				public read(b: native.Array<number>, off: number, len: number): number;
				public read(buffer: native.Array<number>, offset: number, length: number): number;
				public savePosition(readLimit: number): number;
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class MediaStoreRequestHandler extends com.squareup.picasso.ContentStreamRequestHandler {
				public static class: java.lang.Class<com.squareup.picasso.MediaStoreRequestHandler>;
				public canHandleRequest(data: com.squareup.picasso.Request): boolean;
				public load(request: com.squareup.picasso.Request, networkPolicy: number): com.squareup.picasso.RequestHandler.Result;
			}
			export module MediaStoreRequestHandler {
				export class PicassoKind {
					public static class: java.lang.Class<com.squareup.picasso.MediaStoreRequestHandler.PicassoKind>;
					public static FULL: com.squareup.picasso.MediaStoreRequestHandler.PicassoKind;
					public static MICRO: com.squareup.picasso.MediaStoreRequestHandler.PicassoKind;
					public static MINI: com.squareup.picasso.MediaStoreRequestHandler.PicassoKind;
					public static valueOf(name: string): com.squareup.picasso.MediaStoreRequestHandler.PicassoKind;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static values(): native.Array<com.squareup.picasso.MediaStoreRequestHandler.PicassoKind>;
				}
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class MemoryPolicy {
				public static class: java.lang.Class<com.squareup.picasso.MemoryPolicy>;
				public static NO_CACHE: com.squareup.picasso.MemoryPolicy;
				public static NO_STORE: com.squareup.picasso.MemoryPolicy;
				public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static values(): native.Array<com.squareup.picasso.MemoryPolicy>;
				public static valueOf(name: string): com.squareup.picasso.MemoryPolicy;
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class NetworkPolicy {
				public static class: java.lang.Class<com.squareup.picasso.NetworkPolicy>;
				public static NO_CACHE: com.squareup.picasso.NetworkPolicy;
				public static NO_STORE: com.squareup.picasso.NetworkPolicy;
				public static OFFLINE: com.squareup.picasso.NetworkPolicy;
				public static shouldReadFromDiskCache(networkPolicy: number): boolean;
				public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static values(): native.Array<com.squareup.picasso.NetworkPolicy>;
				public static valueOf(name: string): com.squareup.picasso.NetworkPolicy;
				public static isOfflineOnly(networkPolicy: number): boolean;
				public static shouldWriteToDiskCache(networkPolicy: number): boolean;
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class NetworkRequestHandler extends com.squareup.picasso.RequestHandler {
				public static class: java.lang.Class<com.squareup.picasso.NetworkRequestHandler>;
				public load(request0: com.squareup.picasso.Request, int1: number): com.squareup.picasso.RequestHandler.Result;
				public canHandleRequest(request0: com.squareup.picasso.Request): boolean;
				public canHandleRequest(data: com.squareup.picasso.Request): boolean;
				public load(request: com.squareup.picasso.Request, networkPolicy: number): com.squareup.picasso.RequestHandler.Result;
			}
			export module NetworkRequestHandler {
				export class ContentLengthException extends java.io.IOException {
					public static class: java.lang.Class<com.squareup.picasso.NetworkRequestHandler.ContentLengthException>;
				}
				export class ResponseException extends java.io.IOException {
					public static class: java.lang.Class<com.squareup.picasso.NetworkRequestHandler.ResponseException>;
				}
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class OkHttp3Downloader extends java.lang.Object implements com.squareup.picasso.Downloader {
				public static class: java.lang.Class<com.squareup.picasso.OkHttp3Downloader>;
				public constructor(context: globalAndroid.content.Context, maxSize: number);
				public shutdown(): void;
				public constructor(client: okhttp3.OkHttpClient);
				public constructor(context: globalAndroid.content.Context);
				public constructor(client: okhttp3.Call.Factory);
				public constructor(cacheDir: java.io.File);
				public load(request: okhttp3.Request): okhttp3.Response;
				public constructor(cacheDir: java.io.File, maxSize: number);
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class Picasso extends java.lang.Object {
				public static class: java.lang.Class<com.squareup.picasso.Picasso>;
				public static get(): com.squareup.picasso.Picasso;
				public resumeTag(tag: any): void;
				public load(path: string): com.squareup.picasso.RequestCreator;
				public static setSingletonInstance(picasso: com.squareup.picasso.Picasso): void;
				public cancelRequest(remoteViews: globalAndroid.widget.RemoteViews, viewId: number): void;
				public getSnapshot(): com.squareup.picasso.StatsSnapshot;
				public invalidate(uri: globalAndroid.net.Uri): void;
				public setLoggingEnabled(enabled: boolean): void;
				public load(resourceId: number): com.squareup.picasso.RequestCreator;
				public isLoggingEnabled(): boolean;
				public cancelRequest(target: com.squareup.picasso.Target): void;
				public pauseTag(tag: any): void;
				public cancelTag(tag: any): void;
				public shutdown(): void;
				public invalidate(file: java.io.File): void;
				public invalidate(path: string): void;
				public areIndicatorsEnabled(): boolean;
				public load(file: java.io.File): com.squareup.picasso.RequestCreator;
				public cancelRequest(view: globalAndroid.widget.ImageView): void;
				public load(uri: globalAndroid.net.Uri): com.squareup.picasso.RequestCreator;
				public setIndicatorsEnabled(enabled: boolean): void;
			}
			export module Picasso {
				export class Builder extends java.lang.Object {
					public static class: java.lang.Class<com.squareup.picasso.Picasso.Builder>;
					public build(): com.squareup.picasso.Picasso;
					public downloader(downloader: com.squareup.picasso.Downloader): com.squareup.picasso.Picasso.Builder;
					public indicatorsEnabled(enabled: boolean): com.squareup.picasso.Picasso.Builder;
					public loggingEnabled(enabled: boolean): com.squareup.picasso.Picasso.Builder;
					public defaultBitmapConfig(bitmapConfig: globalAndroid.graphics.Bitmap.Config): com.squareup.picasso.Picasso.Builder;
					public addRequestHandler(requestHandler: com.squareup.picasso.RequestHandler): com.squareup.picasso.Picasso.Builder;
					public listener(listener: com.squareup.picasso.Picasso.Listener): com.squareup.picasso.Picasso.Builder;
					public constructor(context: globalAndroid.content.Context);
					public requestTransformer(transformer: com.squareup.picasso.Picasso.RequestTransformer): com.squareup.picasso.Picasso.Builder;
					public executor(executorService: java.util.concurrent.ExecutorService): com.squareup.picasso.Picasso.Builder;
					public memoryCache(memoryCache: com.squareup.picasso.Cache): com.squareup.picasso.Picasso.Builder;
				}
				export class CleanupThread extends java.lang.Thread {
					public static class: java.lang.Class<com.squareup.picasso.Picasso.CleanupThread>;
					public run(): void;
				}
				export class Listener extends java.lang.Object {
					public static class: java.lang.Class<com.squareup.picasso.Picasso.Listener>;
					/**
					 * Constructs a new instance of the com.squareup.picasso.Picasso$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onImageLoadFailed(picasso0: com.squareup.picasso.Picasso, uri1: globalAndroid.net.Uri, exception2: java.lang.Exception): void;
					});
					public constructor();
					public onImageLoadFailed(picasso0: com.squareup.picasso.Picasso, uri1: globalAndroid.net.Uri, exception2: java.lang.Exception): void;
				}
				export class LoadedFrom {
					public static class: java.lang.Class<com.squareup.picasso.Picasso.LoadedFrom>;
					public static DISK: com.squareup.picasso.Picasso.LoadedFrom;
					public static MEMORY: com.squareup.picasso.Picasso.LoadedFrom;
					public static NETWORK: com.squareup.picasso.Picasso.LoadedFrom;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static valueOf(name: string): com.squareup.picasso.Picasso.LoadedFrom;
					public static values(): native.Array<com.squareup.picasso.Picasso.LoadedFrom>;
				}
				export class Priority {
					public static class: java.lang.Class<com.squareup.picasso.Picasso.Priority>;
					public static HIGH: com.squareup.picasso.Picasso.Priority;
					public static LOW: com.squareup.picasso.Picasso.Priority;
					public static NORMAL: com.squareup.picasso.Picasso.Priority;
					public static valueOf(name: string): com.squareup.picasso.Picasso.Priority;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static values(): native.Array<com.squareup.picasso.Picasso.Priority>;
				}
				export class RequestTransformer extends java.lang.Object {
					public static class: java.lang.Class<com.squareup.picasso.Picasso.RequestTransformer>;
					/**
					 * Constructs a new instance of the com.squareup.picasso.Picasso$RequestTransformer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						transformRequest(request0: com.squareup.picasso.Request): com.squareup.picasso.Request;
					});
					public constructor();
					public static IDENTITY: com.squareup.picasso.Picasso.RequestTransformer;
					public transformRequest(request0: com.squareup.picasso.Request): com.squareup.picasso.Request;
				}
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class PicassoDrawable extends globalAndroid.graphics.drawable.BitmapDrawable {
				public static class: java.lang.Class<com.squareup.picasso.PicassoDrawable>;
				public draw(canvas: globalAndroid.graphics.Canvas): void;
				public setColorFilter(colorFilter: globalAndroid.graphics.ColorFilter): void;
				public setColorFilter(cf: globalAndroid.graphics.ColorFilter): void;
				/** @deprecated */
				public setColorFilter(color: number, mode: globalAndroid.graphics.PorterDuff.Mode): void;
				public onBoundsChange(bounds: globalAndroid.graphics.Rect): void;
				public setAlpha(alpha: number): void;
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class PicassoExecutorService extends java.util.concurrent.ThreadPoolExecutor {
				public static class: java.lang.Class<com.squareup.picasso.PicassoExecutorService>;
				public invokeAll(tasks: java.util.Collection<any>): java.util.List<any>;
				public shutdown(): void;
				public invokeAny(tasks: java.util.Collection<any>, timeout: number, unit: java.util.concurrent.TimeUnit): any;
				public submit(task: java.util.concurrent.Callable<any>): java.util.concurrent.Future<any>;
				public isTerminated(): boolean;
				public shutdownNow(): java.util.List<java.lang.Runnable>;
				public invokeAny(tasks: java.util.Collection<any>): any;
				public isShutdown(): boolean;
				public submit(task: java.lang.Runnable): java.util.concurrent.Future<any>;
				public invokeAll(tasks: java.util.Collection<any>, timeout: number, unit: java.util.concurrent.TimeUnit): java.util.List<any>;
				public submit(task: java.lang.Runnable, result: any): java.util.concurrent.Future<any>;
				public awaitTermination(timeout: number, unit: java.util.concurrent.TimeUnit): boolean;
			}
			export module PicassoExecutorService {
				export class PicassoFutureTask extends java.util.concurrent.FutureTask<com.squareup.picasso.BitmapHunter> implements java.lang.Comparable<com.squareup.picasso.PicassoExecutorService.PicassoFutureTask>  {
					public static class: java.lang.Class<com.squareup.picasso.PicassoExecutorService.PicassoFutureTask>;
					public run(): void;
					public compareTo(other: com.squareup.picasso.PicassoExecutorService.PicassoFutureTask): number;
				}
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class PicassoProvider extends globalAndroid.content.ContentProvider {
				public static class: java.lang.Class<com.squareup.picasso.PicassoProvider>;
				public insert(uri: globalAndroid.net.Uri, values: globalAndroid.content.ContentValues): globalAndroid.net.Uri;
				public delete(uri0: globalAndroid.net.Uri, string1: string, strings2: native.Array<string>): number;
				public query(uri: globalAndroid.net.Uri, projection: native.Array<string>, selection: string, selectionArgs: native.Array<string>, sortOrder: string, cancellationSignal: globalAndroid.os.CancellationSignal): globalAndroid.database.Cursor;
				public insert(uri0: globalAndroid.net.Uri, contentValues1: globalAndroid.content.ContentValues): globalAndroid.net.Uri;
				public onCreate(): boolean;
				public constructor();
				public onTrimMemory(level: number): void;
				public delete(uri: globalAndroid.net.Uri, selection: string, selectionArgs: native.Array<string>): number;
				public getType(uri0: globalAndroid.net.Uri): string;
				public update(uri0: globalAndroid.net.Uri, contentValues1: globalAndroid.content.ContentValues, string2: string, strings3: native.Array<string>): number;
				public query(uri: globalAndroid.net.Uri, projection: native.Array<string>, queryArgs: globalAndroid.os.Bundle, cancellationSignal: globalAndroid.os.CancellationSignal): globalAndroid.database.Cursor;
				public query(uri: globalAndroid.net.Uri, projection: native.Array<string>, selection: string, selectionArgs: native.Array<string>, sortOrder: string): globalAndroid.database.Cursor;
				public query(uri0: globalAndroid.net.Uri, strings1: native.Array<string>, string2: string, strings3: native.Array<string>, string4: string): globalAndroid.database.Cursor;
				public update(uri: globalAndroid.net.Uri, values: globalAndroid.content.ContentValues, selection: string, selectionArgs: native.Array<string>): number;
				public getType(uri: globalAndroid.net.Uri): string;
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export abstract class RemoteViewsAction extends com.squareup.picasso.Action<com.squareup.picasso.RemoteViewsAction.RemoteViewsTarget> {
				public static class: java.lang.Class<com.squareup.picasso.RemoteViewsAction>;
				public error(e: java.lang.Exception): void;
			}
			export module RemoteViewsAction {
				export class AppWidgetAction extends com.squareup.picasso.RemoteViewsAction {
					public static class: java.lang.Class<com.squareup.picasso.RemoteViewsAction.AppWidgetAction>;
				}
				export class NotificationAction extends com.squareup.picasso.RemoteViewsAction {
					public static class: java.lang.Class<com.squareup.picasso.RemoteViewsAction.NotificationAction>;
				}
				export class RemoteViewsTarget extends java.lang.Object {
					public static class: java.lang.Class<com.squareup.picasso.RemoteViewsAction.RemoteViewsTarget>;
					public equals(obj: any): boolean;
					public equals(o: any): boolean;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class Request extends java.lang.Object {
				public static class: java.lang.Class<com.squareup.picasso.Request>;
				public centerCrop: boolean;
				public centerCropGravity: number;
				public centerInside: boolean;
				public config: globalAndroid.graphics.Bitmap.Config;
				public hasRotationPivot: boolean;
				public onlyScaleDown: boolean;
				public priority: com.squareup.picasso.Picasso.Priority;
				public purgeable: boolean;
				public resourceId: number;
				public rotationDegrees: number;
				public rotationPivotX: number;
				public rotationPivotY: number;
				public stableKey: string;
				public targetHeight: number;
				public targetWidth: number;
				public transformations: java.util.List<com.squareup.picasso.Transformation>;
				public uri: globalAndroid.net.Uri;
				public hasSize(): boolean;
				public buildUpon(): com.squareup.picasso.Request.Builder;
				public toString(): string;
			}
			export module Request {
				export class Builder extends java.lang.Object {
					public static class: java.lang.Class<com.squareup.picasso.Request.Builder>;
					public transform(transformations: java.util.List<any>): com.squareup.picasso.Request.Builder;
					public resize(targetWidth: number, targetHeight: number): com.squareup.picasso.Request.Builder;
					public onlyScaleDown(): com.squareup.picasso.Request.Builder;
					public setResourceId(resourceId: number): com.squareup.picasso.Request.Builder;
					public build(): com.squareup.picasso.Request;
					public centerCrop(): com.squareup.picasso.Request.Builder;
					public setUri(uri: globalAndroid.net.Uri): com.squareup.picasso.Request.Builder;
					public centerCrop(alignGravity: number): com.squareup.picasso.Request.Builder;
					public clearCenterCrop(): com.squareup.picasso.Request.Builder;
					public config(config: globalAndroid.graphics.Bitmap.Config): com.squareup.picasso.Request.Builder;
					public centerInside(): com.squareup.picasso.Request.Builder;
					public clearOnlyScaleDown(): com.squareup.picasso.Request.Builder;
					public purgeable(): com.squareup.picasso.Request.Builder;
					public rotate(degrees: number, pivotX: number, pivotY: number): com.squareup.picasso.Request.Builder;
					public clearRotation(): com.squareup.picasso.Request.Builder;
					public constructor(resourceId: number);
					public constructor(uri: globalAndroid.net.Uri);
					public priority(priority: com.squareup.picasso.Picasso.Priority): com.squareup.picasso.Request.Builder;
					public stableKey(stableKey: string): com.squareup.picasso.Request.Builder;
					public clearCenterInside(): com.squareup.picasso.Request.Builder;
					public rotate(degrees: number): com.squareup.picasso.Request.Builder;
					public clearResize(): com.squareup.picasso.Request.Builder;
					public transform(transformation: com.squareup.picasso.Transformation): com.squareup.picasso.Request.Builder;
				}
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class RequestCreator extends java.lang.Object {
				public static class: java.lang.Class<com.squareup.picasso.RequestCreator>;
				public priority(priority: com.squareup.picasso.Picasso.Priority): com.squareup.picasso.RequestCreator;
				public tag(tag: any): com.squareup.picasso.RequestCreator;
				public resizeDimen(targetWidthResId: number, targetHeightResId: number): com.squareup.picasso.RequestCreator;
				public memoryPolicy(policy: com.squareup.picasso.MemoryPolicy, additional: native.Array<com.squareup.picasso.MemoryPolicy>): com.squareup.picasso.RequestCreator;
				public noPlaceholder(): com.squareup.picasso.RequestCreator;
				public stableKey(stableKey: string): com.squareup.picasso.RequestCreator;
				public into(target: globalAndroid.widget.ImageView, callback: com.squareup.picasso.Callback): void;
				public fit(): com.squareup.picasso.RequestCreator;
				public centerCrop(alignGravity: number): com.squareup.picasso.RequestCreator;
				public into(remoteViews: globalAndroid.widget.RemoteViews, viewId: number, appWidgetIds: native.Array<number>): void;
				public purgeable(): com.squareup.picasso.RequestCreator;
				public fetch(callback: com.squareup.picasso.Callback): void;
				public get(): globalAndroid.graphics.Bitmap;
				public placeholder(placeholderResId: number): com.squareup.picasso.RequestCreator;
				public transform(transformations: java.util.List<any>): com.squareup.picasso.RequestCreator;
				public error(errorResId: number): com.squareup.picasso.RequestCreator;
				public fetch(): void;
				public config(config: globalAndroid.graphics.Bitmap.Config): com.squareup.picasso.RequestCreator;
				public error(errorDrawable: globalAndroid.graphics.drawable.Drawable): com.squareup.picasso.RequestCreator;
				public networkPolicy(policy: com.squareup.picasso.NetworkPolicy, additional: native.Array<com.squareup.picasso.NetworkPolicy>): com.squareup.picasso.RequestCreator;
				public into(target: com.squareup.picasso.Target): void;
				public centerCrop(): com.squareup.picasso.RequestCreator;
				public noFade(): com.squareup.picasso.RequestCreator;
				public rotate(degrees: number): com.squareup.picasso.RequestCreator;
				public onlyScaleDown(): com.squareup.picasso.RequestCreator;
				public placeholder(placeholderDrawable: globalAndroid.graphics.drawable.Drawable): com.squareup.picasso.RequestCreator;
				public rotate(degrees: number, pivotX: number, pivotY: number): com.squareup.picasso.RequestCreator;
				public into(remoteViews: globalAndroid.widget.RemoteViews, viewId: number, appWidgetIds: native.Array<number>, callback: com.squareup.picasso.Callback): void;
				public into(remoteViews: globalAndroid.widget.RemoteViews, viewId: number, notificationId: number, notification: globalAndroid.app.Notification, notificationTag: string): void;
				public centerInside(): com.squareup.picasso.RequestCreator;
				public into(remoteViews: globalAndroid.widget.RemoteViews, viewId: number, notificationId: number, notification: globalAndroid.app.Notification): void;
				public resize(targetWidth: number, targetHeight: number): com.squareup.picasso.RequestCreator;
				public transform(transformation: com.squareup.picasso.Transformation): com.squareup.picasso.RequestCreator;
				public into(remoteViews: globalAndroid.widget.RemoteViews, viewId: number, notificationId: number, notification: globalAndroid.app.Notification, notificationTag: string, callback: com.squareup.picasso.Callback): void;
				public into(target: globalAndroid.widget.ImageView): void;
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export abstract class RequestHandler extends java.lang.Object {
				public static class: java.lang.Class<com.squareup.picasso.RequestHandler>;
				public load(request0: com.squareup.picasso.Request, int1: number): com.squareup.picasso.RequestHandler.Result;
				public canHandleRequest(request0: com.squareup.picasso.Request): boolean;
				public constructor();
			}
			export module RequestHandler {
				export class Result extends java.lang.Object {
					public static class: java.lang.Class<com.squareup.picasso.RequestHandler.Result>;
					public getSource(): okio.Source;
					public getLoadedFrom(): com.squareup.picasso.Picasso.LoadedFrom;
					public constructor(bitmap: globalAndroid.graphics.Bitmap, loadedFrom: com.squareup.picasso.Picasso.LoadedFrom);
					public getBitmap(): globalAndroid.graphics.Bitmap;
					public constructor(source: okio.Source, loadedFrom: com.squareup.picasso.Picasso.LoadedFrom);
				}
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class ResourceRequestHandler extends com.squareup.picasso.RequestHandler {
				public static class: java.lang.Class<com.squareup.picasso.ResourceRequestHandler>;
				public load(request0: com.squareup.picasso.Request, int1: number): com.squareup.picasso.RequestHandler.Result;
				public canHandleRequest(request0: com.squareup.picasso.Request): boolean;
				public canHandleRequest(data: com.squareup.picasso.Request): boolean;
				public load(request: com.squareup.picasso.Request, networkPolicy: number): com.squareup.picasso.RequestHandler.Result;
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class Stats extends java.lang.Object {
				public static class: java.lang.Class<com.squareup.picasso.Stats>;
			}
			export module Stats {
				export class StatsHandler extends globalAndroid.os.Handler {
					public static class: java.lang.Class<com.squareup.picasso.Stats.StatsHandler>;
					public handleMessage(msg: globalAndroid.os.Message): void;
				}
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class StatsSnapshot extends java.lang.Object {
				public static class: java.lang.Class<com.squareup.picasso.StatsSnapshot>;
				public averageDownloadSize: number;
				public averageOriginalBitmapSize: number;
				public averageTransformedBitmapSize: number;
				public cacheHits: number;
				public cacheMisses: number;
				public downloadCount: number;
				public maxSize: number;
				public originalBitmapCount: number;
				public size: number;
				public timeStamp: number;
				public totalDownloadSize: number;
				public totalOriginalBitmapSize: number;
				public totalTransformedBitmapSize: number;
				public transformedBitmapCount: number;
				public dump(): void;
				public constructor(maxSize: number, size: number, cacheHits: number, cacheMisses: number, totalDownloadSize: number, totalOriginalBitmapSize: number, totalTransformedBitmapSize: number, averageDownloadSize: number, averageOriginalBitmapSize: number, averageTransformedBitmapSize: number, downloadCount: number, originalBitmapCount: number, transformedBitmapCount: number, timeStamp: number);
				public toString(): string;
				public dump(writer: java.io.PrintWriter): void;
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class Target extends java.lang.Object {
				public static class: java.lang.Class<com.squareup.picasso.Target>;
				/**
				 * Constructs a new instance of the com.squareup.picasso.Target interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onBitmapLoaded(bitmap0: globalAndroid.graphics.Bitmap, loadedFrom1: com.squareup.picasso.Picasso.LoadedFrom): void;
					onBitmapFailed(exception0: java.lang.Exception, drawable1: globalAndroid.graphics.drawable.Drawable): void;
					onPrepareLoad(drawable0: globalAndroid.graphics.drawable.Drawable): void;
				});
				public constructor();
				public onBitmapLoaded(bitmap0: globalAndroid.graphics.Bitmap, loadedFrom1: com.squareup.picasso.Picasso.LoadedFrom): void;
				public onBitmapFailed(exception0: java.lang.Exception, drawable1: globalAndroid.graphics.drawable.Drawable): void;
				public onPrepareLoad(drawable0: globalAndroid.graphics.drawable.Drawable): void;
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class TargetAction extends com.squareup.picasso.Action<com.squareup.picasso.Target> {
				public static class: java.lang.Class<com.squareup.picasso.TargetAction>;
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class Transformation extends java.lang.Object {
				public static class: java.lang.Class<com.squareup.picasso.Transformation>;
				/**
				 * Constructs a new instance of the com.squareup.picasso.Transformation interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					transform(bitmap0: globalAndroid.graphics.Bitmap): globalAndroid.graphics.Bitmap;
					key(): string;
				});
				public constructor();
				public transform(bitmap0: globalAndroid.graphics.Bitmap): globalAndroid.graphics.Bitmap;
				public key(): string;
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class Utils extends java.lang.Object {
				public static class: java.lang.Class<com.squareup.picasso.Utils>;
			}
			export module Utils {
				export class PicassoThread extends java.lang.Thread {
					public static class: java.lang.Class<com.squareup.picasso.Utils.PicassoThread>;
					public run(): void;
				}
				export class PicassoThreadFactory extends java.lang.Object implements java.util.concurrent.ThreadFactory {
					public static class: java.lang.Class<com.squareup.picasso.Utils.PicassoThreadFactory>;
					public newThread(r: java.lang.Runnable): java.lang.Thread;
				}
			}
		}
	}
}

//Generics information:
//com.squareup.picasso.Action:1
//com.squareup.picasso.Action.RequestWeakReference:1

