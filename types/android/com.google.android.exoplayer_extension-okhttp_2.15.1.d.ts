declare module com {
	export module google {
		export module android {
			export module exoplayer2 {
				export module ext {
					export module okhttp {
						export class BuildConfig extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.ext.okhttp.BuildConfig>;
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
					export module okhttp {
						export class OkHttpDataSource extends com.google.android.exoplayer2.upstream.BaseDataSource implements com.google.android.exoplayer2.upstream.HttpDataSource {
							public static class: java.lang.Class<com.google.android.exoplayer2.ext.okhttp.OkHttpDataSource>;
							public getUri(): globalAndroid.net.Uri;
							public close(): void;
							public constructor(isNetwork: boolean);
							/** @deprecated */
							public constructor(callFactory: okhttp3.Call.Factory, userAgent: string);
							public clearRequestProperty(name: string): void;
							public read(buffer: native.Array<number>, offset: number, length: number): number;
							public clearAllRequestProperties(): void;
							/** @deprecated */
							public constructor(callFactory: okhttp3.Call.Factory);
							public getResponseHeaders(): java.util.Map<string,java.util.List<string>>;
							public getResponseCode(): number;
							/** @deprecated */
							public setContentTypePredicate(contentTypePredicate: com.google.common.base.Predicate<string>): void;
							public open(dataSpec: com.google.android.exoplayer2.upstream.DataSpec): number;
							public setRequestProperty(name: string, value: string): void;
							public addTransferListener(transferListener: com.google.android.exoplayer2.upstream.TransferListener): void;
							/** @deprecated */
							public constructor(callFactory: okhttp3.Call.Factory, userAgent: string, cacheControl: okhttp3.CacheControl, defaultRequestProperties: com.google.android.exoplayer2.upstream.HttpDataSource.RequestProperties);
						}
						export module OkHttpDataSource {
							export class Factory extends java.lang.Object implements com.google.android.exoplayer2.upstream.HttpDataSource.Factory {
								public static class: java.lang.Class<com.google.android.exoplayer2.ext.okhttp.OkHttpDataSource.Factory>;
								public constructor(callFactory: okhttp3.Call.Factory);
								public setDefaultRequestProperties(map0: java.util.Map<string,string>): com.google.android.exoplayer2.upstream.HttpDataSource.Factory;
								public createDataSource(): com.google.android.exoplayer2.upstream.HttpDataSource;
								public setTransferListener(transferListener: com.google.android.exoplayer2.upstream.TransferListener): com.google.android.exoplayer2.ext.okhttp.OkHttpDataSource.Factory;
								public setDefaultRequestProperties(defaultRequestProperties: java.util.Map<string,string>): com.google.android.exoplayer2.ext.okhttp.OkHttpDataSource.Factory;
								public setUserAgent(userAgent: string): com.google.android.exoplayer2.ext.okhttp.OkHttpDataSource.Factory;
								public createDataSource(): com.google.android.exoplayer2.upstream.DataSource;
								/** @deprecated */
								public getDefaultRequestProperties(): com.google.android.exoplayer2.upstream.HttpDataSource.RequestProperties;
								public setCacheControl(cacheControl: okhttp3.CacheControl): com.google.android.exoplayer2.ext.okhttp.OkHttpDataSource.Factory;
								public setContentTypePredicate(contentTypePredicate: com.google.common.base.Predicate<string>): com.google.android.exoplayer2.ext.okhttp.OkHttpDataSource.Factory;
								public createDataSource(): com.google.android.exoplayer2.ext.okhttp.OkHttpDataSource;
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
					export module okhttp {
						export class OkHttpDataSourceFactory extends com.google.android.exoplayer2.upstream.HttpDataSource.BaseFactory {
							public static class: java.lang.Class<com.google.android.exoplayer2.ext.okhttp.OkHttpDataSourceFactory>;
							public constructor();
							public createDataSource(): com.google.android.exoplayer2.upstream.HttpDataSource;
							public createDataSourceInternal(requestProperties0: com.google.android.exoplayer2.upstream.HttpDataSource.RequestProperties): com.google.android.exoplayer2.upstream.HttpDataSource;
							public constructor(callFactory: okhttp3.Call.Factory, userAgent: string, listener: com.google.android.exoplayer2.upstream.TransferListener);
							public constructor(callFactory: okhttp3.Call.Factory);
							/** @deprecated */
							public getDefaultRequestProperties(): com.google.android.exoplayer2.upstream.HttpDataSource.RequestProperties;
							public constructor(callFactory: okhttp3.Call.Factory, userAgent: string, cacheControl: okhttp3.CacheControl);
							public setDefaultRequestProperties(defaultRequestProperties: java.util.Map<string,string>): com.google.android.exoplayer2.upstream.HttpDataSource.Factory;
							public constructor(callFactory: okhttp3.Call.Factory, userAgent: string, listener: com.google.android.exoplayer2.upstream.TransferListener, cacheControl: okhttp3.CacheControl);
							public constructor(callFactory: okhttp3.Call.Factory, userAgent: string);
							public createDataSourceInternal(defaultRequestProperties: com.google.android.exoplayer2.upstream.HttpDataSource.RequestProperties): com.google.android.exoplayer2.ext.okhttp.OkHttpDataSource;
						}
					}
				}
			}
		}
	}
}


//Generics information:

