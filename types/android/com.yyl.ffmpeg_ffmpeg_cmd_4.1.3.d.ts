declare module com {
	export module yyl {
		export module ffmpeg {
			export class BuildConfig extends java.lang.Object {
				public static class: java.lang.Class<com.yyl.ffmpeg.BuildConfig>;
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
}

declare module com {
	export module yyl {
		export module ffmpeg {
			export class CpuUtils extends java.lang.Object {
				public static class: java.lang.Class<com.yyl.ffmpeg.CpuUtils>;
				public static getErrorMsg(): string;
				public static getMachineSpecs(): com.yyl.ffmpeg.CpuUtils.MachineSpecs;
				public static hasCompatibleCPU(context: globalAndroid.content.Context): boolean;
				public constructor();
			}
			export module CpuUtils {
				export class ElfData extends java.lang.Object {
					public static class: java.lang.Class<com.yyl.ffmpeg.CpuUtils.ElfData>;
					public toString(): string;
				}
				export class MachineSpecs extends java.lang.Object {
					public static class: java.lang.Class<com.yyl.ffmpeg.CpuUtils.MachineSpecs>;
					public hasNeon: boolean;
					public hasFpu: boolean;
					public hasArmV6: boolean;
					public hasArmV7: boolean;
					public hasMips: boolean;
					public hasX86: boolean;
					public is64bits: boolean;
					public bogoMIPS: number;
					public processors: number;
					public frequency: number;
					public toString(): string;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module yyl {
		export module ffmpeg {
			export class FFmpeg extends java.lang.Object {
				public static class: java.lang.Class<com.yyl.ffmpeg.FFmpeg>;
				public static loadLibrariesOnce(): void;
				public exitffmpeg(): void;
				public setDebugMode(boolean0: boolean): void;
				public execffmpeg(strings0: native.Array<string>, fFmpegCallBack1: com.yyl.ffmpeg.FFmpegCallBack): number;
				public isShowLogcat(boolean0: boolean): void;
				public execffprobe(strings0: native.Array<string>): string;
				public constructor();
				public static isSport(): boolean;
			}
		}
	}
}

declare module com {
	export module yyl {
		export module ffmpeg {
			export class FFmpegCallBack extends java.lang.Object {
				public static class: java.lang.Class<com.yyl.ffmpeg.FFmpegCallBack>;
				/**
				 * Constructs a new instance of the com.yyl.ffmpeg.FFmpegCallBack interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onStart(): void;
					onCallBackLog(string0: string): void;
					onCallBackPrint(string0: string): void;
					onProgress(int0: number, int1: number): void;
					onSuccess(): void;
					onFailure(int0: number): void;
				});
				public constructor();
				public onCallBackPrint(string0: string): void;
				public onStart(): void;
				public onProgress(int0: number, int1: number): void;
				public onCallBackLog(string0: string): void;
				public onFailure(int0: number): void;
				public onSuccess(): void;
			}
		}
	}
}

declare module com {
	export module yyl {
		export module ffmpeg {
			export abstract class FFmpegCallBack2 extends java.lang.Object implements com.yyl.ffmpeg.FFmpegCallBack {
				public static class: java.lang.Class<com.yyl.ffmpeg.FFmpegCallBack2>;
				public onCallBackPrint(msg: string): void;
				public onStart(): void;
				public onProgress(int0: number, int1: number): void;
				public onFailure(int0: number): void;
				public onCallBackLog(log: string): void;
				public onSuccess(): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module yyl {
		export module ffmpeg {
			export class FFmpegUtils extends java.lang.Object {
				public static class: java.lang.Class<com.yyl.ffmpeg.FFmpegUtils>;
				public static RESULT_STOP: number;
				public static RESULT_SUCCESS: number;
				public static RESULT_ERROR: number;
				public exitffmpeg(): void;
				public isRun(): boolean;
				public execffmpeg(cmd: native.Array<string>, callBack: com.yyl.ffmpeg.FFmpegCallBack): number;
				public isShowLogcat(showLogcat: boolean): void;
				public execffmpeg(cmd: native.Array<string>): number;
				public execffprobe(cmd: native.Array<string>): string;
				public execffprobe(cmd: string): string;
				public execffmpeg(cmd: string, callBack: com.yyl.ffmpeg.FFmpegCallBack): number;
				public static isSport(): boolean;
				public execffmpeg(cmd: string): number;
				public static getInstance(): com.yyl.ffmpeg.FFmpegUtils;
				public static hasCompatibleCPU(context: globalAndroid.content.Context): boolean;
				public setDebugMode(debug: boolean): void;
			}
		}
	}
}

//Generics information:

