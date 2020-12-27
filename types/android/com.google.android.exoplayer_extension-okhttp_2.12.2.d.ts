declare module com {
	export module google {
		export module android {
			export module exoplayer2 {
				export module ext {
					export module okhttp {
						export class BuildConfig extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.ext.okhttp.BuildConfig>;
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
					export module okhttp {
						export class OkHttpDataSource extends com.google.android.exoplayer2.upstream.BaseDataSource implements com.google.android.exoplayer2.upstream.HttpDataSource {
							public static class: java.lang.Class<com.google.android.exoplayer2.ext.okhttp.OkHttpDataSource>;
							/** @deprecated */
							public constructor(callFactory: okhttp3.Call.Factory, userAgent: string, contentTypePredicate: com.google.common.base.Predicate<string>);
							public close(): void;
							public getUri(): globalAndroid.net.Uri;
							public read(buffer: native.Array<number>, offset: number, readLength: number): number;
							public constructor(isNetwork: boolean);
							public constructor(callFactory: okhttp3.Call.Factory);
							public clearRequestProperty(name: string): void;
							public clearAllRequestProperties(): void;
							/** @deprecated */
							public constructor(callFactory: okhttp3.Call.Factory, userAgent: string, contentTypePredicate: com.google.common.base.Predicate<string>, cacheControl: okhttp3.CacheControl, defaultRequestProperties: com.google.android.exoplayer2.upstream.HttpDataSource.RequestProperties);
							public getResponseHeaders(): java.util.Map<string,java.util.List<string>>;
							public constructor(callFactory: okhttp3.Call.Factory, userAgent: string);
							public bytesRead(): number;
							public getResponseCode(): number;
							public bytesRemaining(): number;
							public open(dataSpec: com.google.android.exoplayer2.upstream.DataSpec): number;
							public addTransferListener(transferListener: com.google.android.exoplayer2.upstream.TransferListener): void;
							public setRequestProperty(name: string, value: string): void;
							public constructor(callFactory: okhttp3.Call.Factory, userAgent: string, cacheControl: okhttp3.CacheControl, defaultRequestProperties: com.google.android.exoplayer2.upstream.HttpDataSource.RequestProperties);
							public bytesSkipped(): number;
							public setContentTypePredicate(contentTypePredicate: com.google.common.base.Predicate<string>): void;
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
					export module okhttp {
						export class OkHttpDataSourceFactory extends com.google.android.exoplayer2.upstream.HttpDataSource.BaseFactory {
							public static class: java.lang.Class<com.google.android.exoplayer2.ext.okhttp.OkHttpDataSourceFactory>;
							public constructor();
							public createDataSource(): com.google.android.exoplayer2.upstream.HttpDataSource;
							public constructor(callFactory: okhttp3.Call.Factory);
							public constructor(callFactory: okhttp3.Call.Factory, userAgent: string, cacheControl: okhttp3.CacheControl);
							public constructor(callFactory: okhttp3.Call.Factory, userAgent: string, listener: com.google.android.exoplayer2.upstream.TransferListener, cacheControl: okhttp3.CacheControl);
							public constructor(callFactory: okhttp3.Call.Factory, userAgent: string);
							public getDefaultRequestProperties(): com.google.android.exoplayer2.upstream.HttpDataSource.RequestProperties;
							public createDataSourceInternal(requestProperties0: com.google.android.exoplayer2.upstream.HttpDataSource.RequestProperties): com.google.android.exoplayer2.upstream.HttpDataSource;
							public constructor(callFactory: okhttp3.Call.Factory, userAgent: string, listener: com.google.android.exoplayer2.upstream.TransferListener);
							/** @deprecated */
							public clearDefaultRequestProperty(name: string): void;
							/** @deprecated */
							public setDefaultRequestProperty(name: string, value: string): void;
							public createDataSourceInternal(defaultRequestProperties: com.google.android.exoplayer2.upstream.HttpDataSource.RequestProperties): com.google.android.exoplayer2.ext.okhttp.OkHttpDataSource;
							/** @deprecated */
							public clearAllDefaultRequestProperties(): void;
						}
					}
				}
			}
		}
	}
}


//Generics information:

