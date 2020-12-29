declare module androidx {
	export module multidex {
		export class BuildConfig extends java.lang.Object {
			public static class: java.lang.Class<androidx.multidex.BuildConfig>;
			public static DEBUG: boolean;
			public static APPLICATION_ID: string;
			public static BUILD_TYPE: string;
			public static FLAVOR: string;
			public static VERSION_CODE: number;
			public static VERSION_NAME: string;
			public constructor();
		}
	}
}

declare module androidx {
	export module multidex {
		export class MultiDex extends java.lang.Object {
			public static class: java.lang.Class<androidx.multidex.MultiDex>;
			public static install(context: globalAndroid.content.Context): void;
			public static installInstrumentation(instrumentationContext: globalAndroid.content.Context, targetContext: globalAndroid.content.Context): void;
		}
		export module MultiDex {
			export class V14 extends java.lang.Object {
				public static class: java.lang.Class<androidx.multidex.MultiDex.V14>;
			}
			export module V14 {
				export class ElementConstructor extends java.lang.Object {
					public static class: java.lang.Class<androidx.multidex.MultiDex.V14.ElementConstructor>;
					/**
					 * Constructs a new instance of the androidx.multidex.MultiDex() when extending the interface class.
					 */
					public constructor(implementation: {
						newInstance(file0: java.io.File, dexFile1: dalvik.system.DexFile): any;
					});
					public constructor();
					public newInstance(file0: java.io.File, dexFile1: dalvik.system.DexFile): any;
				}
				export class ICSElementConstructor extends java.lang.Object implements androidx.multidex.MultiDex.V14.ElementConstructor {
					public static class: java.lang.Class<androidx.multidex.MultiDex.V14.ICSElementConstructor>;
					public newInstance(file: java.io.File, dex: dalvik.system.DexFile): any;
				}
				export class JBMR11ElementConstructor extends java.lang.Object implements androidx.multidex.MultiDex.V14.ElementConstructor {
					public static class: java.lang.Class<androidx.multidex.MultiDex.V14.JBMR11ElementConstructor>;
					public newInstance(file: java.io.File, dex: dalvik.system.DexFile): any;
				}
				export class JBMR2ElementConstructor extends java.lang.Object implements androidx.multidex.MultiDex.V14.ElementConstructor {
					public static class: java.lang.Class<androidx.multidex.MultiDex.V14.JBMR2ElementConstructor>;
					public newInstance(file: java.io.File, dex: dalvik.system.DexFile): any;
				}
			}
			export class V19 extends java.lang.Object {
				public static class: java.lang.Class<androidx.multidex.MultiDex.V19>;
			}
			export class V4 extends java.lang.Object {
				public static class: java.lang.Class<androidx.multidex.MultiDex.V4>;
			}
		}
	}
}

declare module androidx {
	export module multidex {
		export class MultiDexApplication extends globalAndroid.app.Application {
			public static class: java.lang.Class<androidx.multidex.MultiDexApplication>;
			public onTrimMemory(level: number): void;
			public constructor(base: globalAndroid.content.Context);
			public constructor();
			public attachBaseContext(base: globalAndroid.content.Context): void;
		}
	}
}

declare module androidx {
	export module multidex {
		export class MultiDexExtractor extends java.lang.Object implements java.io.Closeable {
			public static class: java.lang.Class<androidx.multidex.MultiDexExtractor>;
			public close(): void;
		}
		export module MultiDexExtractor {
			export class ExtractedDex extends java.io.File {
				public static class: java.lang.Class<androidx.multidex.MultiDexExtractor.ExtractedDex>;
				public crc: number;
				public constructor(pathname: string);
				public constructor(parent: string, child: string);
				public constructor(dexDir: java.io.File, fileName: string);
				public constructor(parent: java.io.File, child: string);
				public constructor(uri: java.net.URI);
			}
		}
	}
}

declare module androidx {
	export module multidex {
		export class ZipUtil extends java.lang.Object {
			public static class: java.lang.Class<androidx.multidex.ZipUtil>;
		}
		export module ZipUtil {
			export class CentralDirectory extends java.lang.Object {
				public static class: java.lang.Class<androidx.multidex.ZipUtil.CentralDirectory>;
			}
		}
	}
}

//Generics information:

