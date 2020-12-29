declare module com {
	export module arthenica {
		export module mobileffmpeg {
			export class Abi {
				public static class: java.lang.Class<com.arthenica.mobileffmpeg.Abi>;
				public static ABI_ARMV7A_NEON: com.arthenica.mobileffmpeg.Abi;
				public static ABI_ARMV7A: com.arthenica.mobileffmpeg.Abi;
				public static ABI_ARM: com.arthenica.mobileffmpeg.Abi;
				public static ABI_X86: com.arthenica.mobileffmpeg.Abi;
				public static ABI_X86_64: com.arthenica.mobileffmpeg.Abi;
				public static ABI_ARM64_V8A: com.arthenica.mobileffmpeg.Abi;
				public static ABI_UNKNOWN: com.arthenica.mobileffmpeg.Abi;
				public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static valueOf(name: string): com.arthenica.mobileffmpeg.Abi;
				public static values(): native.Array<com.arthenica.mobileffmpeg.Abi>;
				public static from(abiName: string): com.arthenica.mobileffmpeg.Abi;
				public getName(): string;
			}
		}
	}
}

declare module com {
	export module arthenica {
		export module mobileffmpeg {
			export class AbiDetect extends java.lang.Object {
				public static class: java.lang.Class<com.arthenica.mobileffmpeg.AbiDetect>;
				public static getNativeAbi(): string;
				public static getNativeCpuAbi(): string;
				public static getAbi(): string;
			}
		}
	}
}

declare module com {
	export module arthenica {
		export module mobileffmpeg {
			export class AsyncFFmpegExecuteTask extends globalAndroid.os.AsyncTask<java.lang.Void,java.lang.Integer,java.lang.Integer> {
				public static class: java.lang.Class<com.arthenica.mobileffmpeg.AsyncFFmpegExecuteTask>;
				public constructor(strings0: native.Array<string>, executeCallback: com.arthenica.mobileffmpeg.ExecuteCallback);
				public doInBackground(objects0: native.Array<any>): any;
				public doInBackground(unused: native.Array<java.lang.Void>): java.lang.Integer;
				public constructor(executionId: number, command: string, executeCallback: com.arthenica.mobileffmpeg.ExecuteCallback);
				public onPostExecute(rc: java.lang.Integer): void;
				public constructor(executionId: number, strings1: native.Array<string>, executeCallback: com.arthenica.mobileffmpeg.ExecuteCallback);
				public onPostExecute(result: any): void;
				public constructor(command: string, executeCallback: com.arthenica.mobileffmpeg.ExecuteCallback);
				public constructor();
			}
		}
	}
}

declare module com {
	export module arthenica {
		export module mobileffmpeg {
			export class AsyncFFprobeExecuteTask extends globalAndroid.os.AsyncTask<java.lang.Void,java.lang.Integer,java.lang.Integer> {
				public static class: java.lang.Class<com.arthenica.mobileffmpeg.AsyncFFprobeExecuteTask>;
				public constructor(strings0: native.Array<string>, executeCallback: com.arthenica.mobileffmpeg.ExecuteCallback);
				public doInBackground(objects0: native.Array<any>): any;
				public doInBackground(unused: native.Array<java.lang.Void>): java.lang.Integer;
				public onPostExecute(rc: java.lang.Integer): void;
				public onPostExecute(result: any): void;
				public constructor(command: string, executeCallback: com.arthenica.mobileffmpeg.ExecuteCallback);
				public constructor();
			}
		}
	}
}

declare module com {
	export module arthenica {
		export module mobileffmpeg {
			export class AsyncGetMediaInformationTask extends globalAndroid.os.AsyncTask<string,com.arthenica.mobileffmpeg.MediaInformation,com.arthenica.mobileffmpeg.MediaInformation> {
				public static class: java.lang.Class<com.arthenica.mobileffmpeg.AsyncGetMediaInformationTask>;
				public doInBackground(objects0: native.Array<any>): any;
				public constructor(path: string, getMediaInformationCallback: com.arthenica.mobileffmpeg.GetMediaInformationCallback);
				public doInBackground(strings0: native.Array<string>): com.arthenica.mobileffmpeg.MediaInformation;
				public onPostExecute(result: any): void;
				public onPostExecute(mediaInformation: com.arthenica.mobileffmpeg.MediaInformation): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module arthenica {
		export module mobileffmpeg {
			export class BuildConfig extends java.lang.Object {
				public static class: java.lang.Class<com.arthenica.mobileffmpeg.BuildConfig>;
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

declare module com {
	export module arthenica {
		export module mobileffmpeg {
			export class CameraSupport extends java.lang.Object {
				public static class: java.lang.Class<com.arthenica.mobileffmpeg.CameraSupport>;
			}
		}
	}
}

declare module com {
	export module arthenica {
		export module mobileffmpeg {
			export class Config extends java.lang.Object {
				public static class: java.lang.Class<com.arthenica.mobileffmpeg.Config>;
				public static RETURN_CODE_SUCCESS: number;
				public static RETURN_CODE_CANCEL: number;
				public static TAG: string;
				public static MOBILE_FFMPEG_PIPE_PREFIX: string;
				public static enableStatisticsCallback(statisticsCallback: com.arthenica.mobileffmpeg.StatisticsCallback): void;
				public static getPackageName(): string;
				public static isLTSBuild(): boolean;
				public static setFontconfigConfigurationPath(path: string): number;
				public static getBuildDate(): string;
				public static enableRedirection(): void;
				public static getSupportedCameraIds(context: globalAndroid.content.Context): java.util.List<string>;
				public static getLastReceivedStatistics(): com.arthenica.mobileffmpeg.Statistics;
				public static getLogLevel(): com.arthenica.mobileffmpeg.Level;
				public static closeFFmpegPipe(ffmpegPipePath: string): void;
				public static printLastCommandOutput(logPriority: number): void;
				public static getExternalLibraries(): java.util.List<string>;
				public static registerNewFFmpegPipe(context: globalAndroid.content.Context): string;
				public static setLogLevel(level: com.arthenica.mobileffmpeg.Level): void;
				public static setFontDirectory(context: globalAndroid.content.Context, fontDirectoryPath: string, fontNameMapping: java.util.Map<string,string>): void;
				public static getLastReturnCode(): number;
				public static disableRedirection(): void;
				public static ignoreSignal(signal: com.arthenica.mobileffmpeg.Signal): void;
				public static getFFmpegVersion(): string;
				public static setEnvironmentVariable(variableName: string, variableValue: string): number;
				public static getVersion(): string;
				public static enableLogCallback(newLogCallback: com.arthenica.mobileffmpeg.LogCallback): void;
				public static resetStatistics(): void;
				public static getLastCommandOutput(): string;
			}
		}
	}
}

declare module com {
	export module arthenica {
		export module mobileffmpeg {
			export class ExecuteCallback extends java.lang.Object {
				public static class: java.lang.Class<com.arthenica.mobileffmpeg.ExecuteCallback>;
				/**
				 * Constructs a new instance of the com.arthenica.mobileffmpeg.ExecuteCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					apply(long0: number, int1: number): void;
				});
				public constructor();
				public apply(long0: number, int1: number): void;
			}
		}
	}
}

declare module com {
	export module arthenica {
		export module mobileffmpeg {
			export class FFmpeg extends java.lang.Object {
				public static class: java.lang.Class<com.arthenica.mobileffmpeg.FFmpeg>;
				public static executeAsync(command: string, executeCallback: com.arthenica.mobileffmpeg.ExecuteCallback): number;
				public static listExecutions(): java.util.List<com.arthenica.mobileffmpeg.FFmpegExecution>;
				public static executeAsync(command: string, executeCallback: com.arthenica.mobileffmpeg.ExecuteCallback, executor: java.util.concurrent.Executor): number;
				/** @deprecated */
				public static execute(command: string, delimiter: string): number;
				public static execute(strings0: native.Array<string>): number;
				public static executeAsync(strings0: native.Array<string>, executeCallback: com.arthenica.mobileffmpeg.ExecuteCallback, executor: java.util.concurrent.Executor): number;
				public static execute(command: string): number;
				public static cancel(executionId: number): void;
				public static cancel(): void;
				public static executeAsync(strings0: native.Array<string>, executeCallback: com.arthenica.mobileffmpeg.ExecuteCallback): number;
			}
		}
	}
}

declare module com {
	export module arthenica {
		export module mobileffmpeg {
			export class FFmpegExecution extends java.lang.Object {
				public static class: java.lang.Class<com.arthenica.mobileffmpeg.FFmpegExecution>;
				public getStartTime(): java.util.Date;
				public constructor(executionId: number, strings1: native.Array<string>);
				public getExecutionId(): number;
				public getCommand(): string;
			}
		}
	}
}

declare module com {
	export module arthenica {
		export module mobileffmpeg {
			export class FFprobe extends java.lang.Object {
				public static class: java.lang.Class<com.arthenica.mobileffmpeg.FFprobe>;
				/** @deprecated */
				public static getMediaInformation(path: string, timeout: java.lang.Long): com.arthenica.mobileffmpeg.MediaInformation;
				public static getMediaInformationFromCommand(command: string): com.arthenica.mobileffmpeg.MediaInformation;
				public static execute(strings0: native.Array<string>): number;
				public static execute(command: string): number;
				public static getMediaInformation(path: string): com.arthenica.mobileffmpeg.MediaInformation;
			}
		}
	}
}

declare module com {
	export module arthenica {
		export module mobileffmpeg {
			export class GetMediaInformationCallback extends java.lang.Object {
				public static class: java.lang.Class<com.arthenica.mobileffmpeg.GetMediaInformationCallback>;
				/**
				 * Constructs a new instance of the com.arthenica.mobileffmpeg.GetMediaInformationCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					apply(mediaInformation0: com.arthenica.mobileffmpeg.MediaInformation): void;
				});
				public constructor();
				public apply(mediaInformation0: com.arthenica.mobileffmpeg.MediaInformation): void;
			}
		}
	}
}

declare module com {
	export module arthenica {
		export module mobileffmpeg {
			export class Level {
				public static class: java.lang.Class<com.arthenica.mobileffmpeg.Level>;
				public static AV_LOG_STDERR: com.arthenica.mobileffmpeg.Level;
				public static AV_LOG_QUIET: com.arthenica.mobileffmpeg.Level;
				public static AV_LOG_PANIC: com.arthenica.mobileffmpeg.Level;
				public static AV_LOG_FATAL: com.arthenica.mobileffmpeg.Level;
				public static AV_LOG_ERROR: com.arthenica.mobileffmpeg.Level;
				public static AV_LOG_WARNING: com.arthenica.mobileffmpeg.Level;
				public static AV_LOG_INFO: com.arthenica.mobileffmpeg.Level;
				public static AV_LOG_VERBOSE: com.arthenica.mobileffmpeg.Level;
				public static AV_LOG_DEBUG: com.arthenica.mobileffmpeg.Level;
				public static AV_LOG_TRACE: com.arthenica.mobileffmpeg.Level;
				public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static valueOf(name: string): com.arthenica.mobileffmpeg.Level;
				public static values(): native.Array<com.arthenica.mobileffmpeg.Level>;
				public static from(value: number): com.arthenica.mobileffmpeg.Level;
				public getValue(): number;
			}
		}
	}
}

declare module com {
	export module arthenica {
		export module mobileffmpeg {
			export class LogCallback extends java.lang.Object {
				public static class: java.lang.Class<com.arthenica.mobileffmpeg.LogCallback>;
				/**
				 * Constructs a new instance of the com.arthenica.mobileffmpeg.LogCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					apply(logMessage0: com.arthenica.mobileffmpeg.LogMessage): void;
				});
				public constructor();
				public apply(logMessage0: com.arthenica.mobileffmpeg.LogMessage): void;
			}
		}
	}
}

declare module com {
	export module arthenica {
		export module mobileffmpeg {
			export class LogMessage extends java.lang.Object {
				public static class: java.lang.Class<com.arthenica.mobileffmpeg.LogMessage>;
				public constructor(executionId: number, level: com.arthenica.mobileffmpeg.Level, text: string);
				public getExecutionId(): number;
				public getLevel(): com.arthenica.mobileffmpeg.Level;
				public toString(): string;
				public getText(): string;
			}
		}
	}
}

declare module com {
	export module arthenica {
		export module mobileffmpeg {
			export class MediaInformation extends java.lang.Object {
				public static class: java.lang.Class<com.arthenica.mobileffmpeg.MediaInformation>;
				public getTags(): org.json.JSONObject;
				public getMediaProperties(): org.json.JSONObject;
				public getFormat(): string;
				public getDuration(): string;
				public getProperties(key: string): org.json.JSONObject;
				public getLongFormat(): string;
				public getStringProperty(key: string): string;
				public getNumberProperty(key: string): java.lang.Long;
				public getSize(): string;
				public getBitrate(): string;
				public getStreams(): java.util.List<com.arthenica.mobileffmpeg.StreamInformation>;
				public getFilename(): string;
				public constructor(jsonObject: org.json.JSONObject, streams: java.util.List<com.arthenica.mobileffmpeg.StreamInformation>);
				public getStartTime(): string;
				public getAllProperties(): org.json.JSONObject;
			}
		}
	}
}

declare module com {
	export module arthenica {
		export module mobileffmpeg {
			export class MediaInformationParser extends java.lang.Object {
				public static class: java.lang.Class<com.arthenica.mobileffmpeg.MediaInformationParser>;
				public static from(ffprobeJsonOutput: string): com.arthenica.mobileffmpeg.MediaInformation;
				public static fromWithError(ffprobeJsonOutput: string): com.arthenica.mobileffmpeg.MediaInformation;
				public constructor();
			}
		}
	}
}

declare module com {
	export module arthenica {
		export module mobileffmpeg {
			export class Packages extends java.lang.Object {
				public static class: java.lang.Class<com.arthenica.mobileffmpeg.Packages>;
			}
		}
	}
}

declare module com {
	export module arthenica {
		export module mobileffmpeg {
			export class Signal {
				public static class: java.lang.Class<com.arthenica.mobileffmpeg.Signal>;
				public static SIGINT: com.arthenica.mobileffmpeg.Signal;
				public static SIGQUIT: com.arthenica.mobileffmpeg.Signal;
				public static SIGPIPE: com.arthenica.mobileffmpeg.Signal;
				public static SIGTERM: com.arthenica.mobileffmpeg.Signal;
				public static SIGXCPU: com.arthenica.mobileffmpeg.Signal;
				public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static valueOf(name: string): com.arthenica.mobileffmpeg.Signal;
				public static values(): native.Array<com.arthenica.mobileffmpeg.Signal>;
				public getValue(): number;
			}
		}
	}
}

declare module com {
	export module arthenica {
		export module mobileffmpeg {
			export class Statistics extends java.lang.Object {
				public static class: java.lang.Class<com.arthenica.mobileffmpeg.Statistics>;
				public setVideoQuality(videoQuality: number): void;
				public setSpeed(speed: number): void;
				public setTime(time: number): void;
				public setExecutionId(executionId: number): void;
				public setVideoFps(videoFps: number): void;
				public getVideoQuality(): number;
				public toString(): string;
				public getTime(): number;
				public getBitrate(): number;
				public setBitrate(bitrate: number): void;
				public constructor();
				public getSize(): number;
				public setSize(size: number): void;
				public constructor(executionId: number, videoFrameNumber: number, videoFps: number, videoQuality: number, size: number, time: number, bitrate: number, speed: number);
				public getExecutionId(): number;
				public getSpeed(): number;
				public update(newStatistics: com.arthenica.mobileffmpeg.Statistics): void;
				public getVideoFrameNumber(): number;
				public setVideoFrameNumber(videoFrameNumber: number): void;
				public getVideoFps(): number;
			}
		}
	}
}

declare module com {
	export module arthenica {
		export module mobileffmpeg {
			export class StatisticsCallback extends java.lang.Object {
				public static class: java.lang.Class<com.arthenica.mobileffmpeg.StatisticsCallback>;
				/**
				 * Constructs a new instance of the com.arthenica.mobileffmpeg.StatisticsCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					apply(statistics0: com.arthenica.mobileffmpeg.Statistics): void;
				});
				public constructor();
				public apply(statistics0: com.arthenica.mobileffmpeg.Statistics): void;
			}
		}
	}
}

declare module com {
	export module arthenica {
		export module mobileffmpeg {
			export class StreamInformation extends java.lang.Object {
				public static class: java.lang.Class<com.arthenica.mobileffmpeg.StreamInformation>;
				public getType(): string;
				public getTags(): org.json.JSONObject;
				public getFormat(): string;
				public getRealFrameRate(): string;
				public getSampleFormat(): string;
				public getDisplayAspectRatio(): string;
				public getCodec(): string;
				public getProperties(key: string): org.json.JSONObject;
				public getCodecTimeBase(): string;
				public getStringProperty(key: string): string;
				public getChannelLayout(): string;
				public getNumberProperty(key: string): java.lang.Long;
				public getSampleRate(): string;
				public getBitrate(): string;
				public getHeight(): java.lang.Long;
				public getSampleAspectRatio(): string;
				public getAverageFrameRate(): string;
				public getFullCodec(): string;
				public getWidth(): java.lang.Long;
				public getTimeBase(): string;
				public getAllProperties(): org.json.JSONObject;
				public getIndex(): java.lang.Long;
				public constructor(jsonObject: org.json.JSONObject);
			}
		}
	}
}

declare module com {
	export module arthenica {
		export module mobileffmpeg {
			export module util {
				export class Pair<A, B>  extends java.lang.Object {
					public static class: java.lang.Class<com.arthenica.mobileffmpeg.util.Pair<any,any>>;
					public first: A;
					public second: B;
					public constructor(first: A, second: B);
					public getSecond(): B;
					public getFirst(): A;
				}
			}
		}
	}
}

declare module com {
	export module arthenica {
		export module mobileffmpeg {
			export module util {
				export class Trio<A, B, C>  extends java.lang.Object {
					public static class: java.lang.Class<com.arthenica.mobileffmpeg.util.Trio<any,any,any>>;
					public first: A;
					public second: B;
					public third: C;
					public getSecond(): B;
					public constructor(first: A, second: B, third: C);
					public getThird(): C;
					public getFirst(): A;
				}
			}
		}
	}
}

//Generics information:
//com.arthenica.mobileffmpeg.util.Pair:2
//com.arthenica.mobileffmpeg.util.Trio:3

