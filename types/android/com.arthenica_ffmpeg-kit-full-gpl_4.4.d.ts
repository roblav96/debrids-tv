declare module com {
	export module arthenica {
		export module ffmpegkit {
			export class Abi {
				public static class: java.lang.Class<com.arthenica.ffmpegkit.Abi>;
				public static ABI_ARMV7A_NEON: com.arthenica.ffmpegkit.Abi;
				public static ABI_ARMV7A: com.arthenica.ffmpegkit.Abi;
				public static ABI_ARM: com.arthenica.ffmpegkit.Abi;
				public static ABI_X86: com.arthenica.ffmpegkit.Abi;
				public static ABI_X86_64: com.arthenica.ffmpegkit.Abi;
				public static ABI_ARM64_V8A: com.arthenica.ffmpegkit.Abi;
				public static ABI_UNKNOWN: com.arthenica.ffmpegkit.Abi;
				public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static valueOf(name: string): com.arthenica.ffmpegkit.Abi;
				public static from(abiName: string): com.arthenica.ffmpegkit.Abi;
				public getName(): string;
				public static values(): native.Array<com.arthenica.ffmpegkit.Abi>;
			}
		}
	}
}

declare module com {
	export module arthenica {
		export module ffmpegkit {
			export class AbiDetect extends java.lang.Object {
				public static class: java.lang.Class<com.arthenica.ffmpegkit.AbiDetect>;
				public static getCpuAbi(): string;
				public static getAbi(): string;
			}
		}
	}
}

declare module com {
	export module arthenica {
		export module ffmpegkit {
			export abstract class AbstractSession extends java.lang.Object implements com.arthenica.ffmpegkit.Session {
				public static class: java.lang.Class<com.arthenica.ffmpegkit.AbstractSession>;
				public static sessionIdGenerator: java.util.concurrent.atomic.AtomicLong;
				public static DEFAULT_TIMEOUT_FOR_ASYNCHRONOUS_MESSAGES_IN_TRANSMIT: number;
				public sessionId: number;
				public executeCallback: com.arthenica.ffmpegkit.ExecuteCallback;
				public logCallback: com.arthenica.ffmpegkit.LogCallback;
				public createTime: java.util.Date;
				public startTime: java.util.Date;
				public endTime: java.util.Date;
				public arguments: native.Array<string>;
				public logs: java.util.List<com.arthenica.ffmpegkit.Log>;
				public logsLock: any;
				public future: java.util.concurrent.Future<any>;
				public state: com.arthenica.ffmpegkit.SessionState;
				public returnCode: com.arthenica.ffmpegkit.ReturnCode;
				public failStackTrace: string;
				public logRedirectionStrategy: com.arthenica.ffmpegkit.LogRedirectionStrategy;
				public addLog(log: com.arthenica.ffmpegkit.Log): void;
				public isFFmpeg(): boolean;
				public getState(): com.arthenica.ffmpegkit.SessionState;
				public getSessionId(): number;
				public getLogCallback(): com.arthenica.ffmpegkit.LogCallback;
				public getDuration(): number;
				public getArguments(): native.Array<string>;
				public getCreateTime(): java.util.Date;
				public constructor(strings0: native.Array<string>, executeCallback: com.arthenica.ffmpegkit.ExecuteCallback, logCallback: com.arthenica.ffmpegkit.LogCallback, logRedirectionStrategy: com.arthenica.ffmpegkit.LogRedirectionStrategy);
				public getEndTime(): java.util.Date;
				public getStartTime(): java.util.Date;
				public getAllLogs(waitTimeout: number): java.util.List<com.arthenica.ffmpegkit.Log>;
				public getLogRedirectionStrategy(): com.arthenica.ffmpegkit.LogRedirectionStrategy;
				public waitForAsynchronousMessagesInTransmit(timeout: number): void;
				public cancel(): void;
				public getFailStackTrace(): string;
				public getOutput(): string;
				public getCommand(): string;
				public getReturnCode(): com.arthenica.ffmpegkit.ReturnCode;
				public getFuture(): java.util.concurrent.Future<any>;
				public thereAreAsynchronousMessagesInTransmit(): boolean;
				public getAllLogs(): java.util.List<com.arthenica.ffmpegkit.Log>;
				public getAllLogsAsString(waitTimeout: number): string;
				public getExecuteCallback(): com.arthenica.ffmpegkit.ExecuteCallback;
				public getAllLogsAsString(): string;
				public getLogsAsString(): string;
				public getLogs(): java.util.List<com.arthenica.ffmpegkit.Log>;
				public isFFprobe(): boolean;
			}
		}
	}
}

declare module com {
	export module arthenica {
		export module ffmpegkit {
			export class AsyncFFmpegExecuteTask extends java.lang.Object implements java.lang.Runnable {
				public static class: java.lang.Class<com.arthenica.ffmpegkit.AsyncFFmpegExecuteTask>;
				public run(): void;
				public constructor(ffmpegSession: com.arthenica.ffmpegkit.FFmpegSession);
			}
		}
	}
}

declare module com {
	export module arthenica {
		export module ffmpegkit {
			export class AsyncFFprobeExecuteTask extends java.lang.Object implements java.lang.Runnable {
				public static class: java.lang.Class<com.arthenica.ffmpegkit.AsyncFFprobeExecuteTask>;
				public constructor(ffprobeSession: com.arthenica.ffmpegkit.FFprobeSession);
				public run(): void;
			}
		}
	}
}

declare module com {
	export module arthenica {
		export module ffmpegkit {
			export class AsyncGetMediaInformationTask extends java.lang.Object implements java.lang.Runnable {
				public static class: java.lang.Class<com.arthenica.ffmpegkit.AsyncGetMediaInformationTask>;
				public constructor(mediaInformationSession: com.arthenica.ffmpegkit.MediaInformationSession);
				public run(): void;
				public constructor(mediaInformationSession: com.arthenica.ffmpegkit.MediaInformationSession, waitTimeout: java.lang.Integer);
			}
		}
	}
}

declare module com {
	export module arthenica {
		export module ffmpegkit {
			export class BuildConfig extends java.lang.Object {
				public static class: java.lang.Class<com.arthenica.ffmpegkit.BuildConfig>;
				public static DEBUG: boolean;
				public static LIBRARY_PACKAGE_NAME: string;
				public static BUILD_TYPE: string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module arthenica {
		export module ffmpegkit {
			export class CameraSupport extends java.lang.Object {
				public static class: java.lang.Class<com.arthenica.ffmpegkit.CameraSupport>;
			}
		}
	}
}

declare module com {
	export module arthenica {
		export module ffmpegkit {
			export class ExecuteCallback extends java.lang.Object {
				public static class: java.lang.Class<com.arthenica.ffmpegkit.ExecuteCallback>;
				/**
				 * Constructs a new instance of the com.arthenica.ffmpegkit.ExecuteCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					apply(session0: com.arthenica.ffmpegkit.Session): void;
				});
				public constructor();
				public apply(session0: com.arthenica.ffmpegkit.Session): void;
			}
		}
	}
}

declare module com {
	export module arthenica {
		export module ffmpegkit {
			export class FFmpegKit extends java.lang.Object {
				public static class: java.lang.Class<com.arthenica.ffmpegkit.FFmpegKit>;
				public static execute(command: string): com.arthenica.ffmpegkit.FFmpegSession;
				public static execute(strings0: native.Array<string>): com.arthenica.ffmpegkit.FFmpegSession;
				public static argumentsToString(strings0: native.Array<string>): string;
				public static executeAsync(strings0: native.Array<string>, executeCallback: com.arthenica.ffmpegkit.ExecuteCallback, logCallback: com.arthenica.ffmpegkit.LogCallback, statisticsCallback: com.arthenica.ffmpegkit.StatisticsCallback): com.arthenica.ffmpegkit.FFmpegSession;
				public static listSessions(): java.util.List<com.arthenica.ffmpegkit.FFmpegSession>;
				public static executeAsync(strings0: native.Array<string>, executeCallback: com.arthenica.ffmpegkit.ExecuteCallback): com.arthenica.ffmpegkit.FFmpegSession;
				public static executeAsync(strings0: native.Array<string>, executeCallback: com.arthenica.ffmpegkit.ExecuteCallback, logCallback: com.arthenica.ffmpegkit.LogCallback, statisticsCallback: com.arthenica.ffmpegkit.StatisticsCallback, executorService: java.util.concurrent.ExecutorService): com.arthenica.ffmpegkit.FFmpegSession;
				public static executeAsync(command: string, executeCallback: com.arthenica.ffmpegkit.ExecuteCallback): com.arthenica.ffmpegkit.FFmpegSession;
				public static cancel(sessionId: number): void;
				public static parseArguments(command: string): native.Array<string>;
				public static executeAsync(command: string, executeCallback: com.arthenica.ffmpegkit.ExecuteCallback, executorService: java.util.concurrent.ExecutorService): com.arthenica.ffmpegkit.FFmpegSession;
				public static executeAsync(strings0: native.Array<string>, executeCallback: com.arthenica.ffmpegkit.ExecuteCallback, executorService: java.util.concurrent.ExecutorService): com.arthenica.ffmpegkit.FFmpegSession;
				public static executeAsync(command: string, executeCallback: com.arthenica.ffmpegkit.ExecuteCallback, logCallback: com.arthenica.ffmpegkit.LogCallback, statisticsCallback: com.arthenica.ffmpegkit.StatisticsCallback, executorService: java.util.concurrent.ExecutorService): com.arthenica.ffmpegkit.FFmpegSession;
				public static cancel(): void;
				public static executeAsync(command: string, executeCallback: com.arthenica.ffmpegkit.ExecuteCallback, logCallback: com.arthenica.ffmpegkit.LogCallback, statisticsCallback: com.arthenica.ffmpegkit.StatisticsCallback): com.arthenica.ffmpegkit.FFmpegSession;
			}
		}
	}
}

declare module com {
	export module arthenica {
		export module ffmpegkit {
			export class FFmpegKitConfig extends java.lang.Object {
				public static class: java.lang.Class<com.arthenica.ffmpegkit.FFmpegKitConfig>;
				public static getMediaInformationExecute(mediaInformationSession: com.arthenica.ffmpegkit.MediaInformationSession, waitTimeout: number): void;
				public static isLTSBuild(): boolean;
				public static asyncFFprobeExecute(ffprobeSession: com.arthenica.ffmpegkit.FFprobeSession, executorService: java.util.concurrent.ExecutorService): void;
				public static getBuildDate(): string;
				public static enableLogCallback(logCallback: com.arthenica.ffmpegkit.LogCallback): void;
				public static getSupportedCameraIds(context: globalAndroid.content.Context): java.util.List<string>;
				public static setSessionHistorySize(sessionHistorySize: number): void;
				public static enableExecuteCallback(executeCallback: com.arthenica.ffmpegkit.ExecuteCallback): void;
				public static getLogRedirectionStrategy(): com.arthenica.ffmpegkit.LogRedirectionStrategy;
				public static getLastSession(): com.arthenica.ffmpegkit.Session;
				public static registerNewFFmpegPipe(context: globalAndroid.content.Context): string;
				public static asyncGetMediaInformationExecute(mediaInformationSession: com.arthenica.ffmpegkit.MediaInformationSession, waitTimeout: number): void;
				public static getAsyncConcurrencyLimit(): number;
				public static getSessionHistorySize(): number;
				public static ignoreSignal(signal: com.arthenica.ffmpegkit.Signal): void;
				public static setEnvironmentVariable(variableName: string, variableValue: string): number;
				public static getLogLevel(): com.arthenica.ffmpegkit.Level;
				public static asyncFFprobeExecute(ffprobeSession: com.arthenica.ffmpegkit.FFprobeSession): void;
				public static setFontconfigConfigurationPath(path: string): number;
				public static enableRedirection(): void;
				public static getSafParameterForWrite(context: globalAndroid.content.Context, uri: globalAndroid.net.Uri): string;
				public static getLastCompletedSession(): com.arthenica.ffmpegkit.Session;
				public static ffprobeExecute(ffprobeSession: com.arthenica.ffmpegkit.FFprobeSession): void;
				public static getSafParameterForRead(context: globalAndroid.content.Context, uri: globalAndroid.net.Uri): string;
				public static closeFFmpegPipe(ffmpegPipePath: string): void;
				public static printToLogcat(logPriority: number, string: string): void;
				public static setAsyncConcurrencyLimit(asyncConcurrencyLimit: number): void;
				public static ffmpegExecute(ffmpegSession: com.arthenica.ffmpegkit.FFmpegSession): void;
				public static setFontDirectoryList(context: globalAndroid.content.Context, fontDirectoryList: java.util.List<string>, fontNameMapping: java.util.Map<string,string>): void;
				public static setFontDirectory(context: globalAndroid.content.Context, fontDirectoryPath: string, fontNameMapping: java.util.Map<string,string>): void;
				public static asyncGetMediaInformationExecute(mediaInformationSession: com.arthenica.ffmpegkit.MediaInformationSession, executorService: java.util.concurrent.ExecutorService, waitTimeout: number): void;
				public static enableStatisticsCallback(statisticsCallback: com.arthenica.ffmpegkit.StatisticsCallback): void;
				public static asyncFFmpegExecute(ffmpegSession: com.arthenica.ffmpegkit.FFmpegSession): void;
				public static getSessions(): java.util.List<com.arthenica.ffmpegkit.Session>;
				public static setLogRedirectionStrategy(logRedirectionStrategy: com.arthenica.ffmpegkit.LogRedirectionStrategy): void;
				public static disableRedirection(): void;
				public static asyncFFmpegExecute(ffmpegSession: com.arthenica.ffmpegkit.FFmpegSession, executorService: java.util.concurrent.ExecutorService): void;
				public static getSessionsByState(state: com.arthenica.ffmpegkit.SessionState): java.util.List<com.arthenica.ffmpegkit.Session>;
				public static getFFmpegVersion(): string;
				public static messagesInTransmit(long0: number): number;
				public static getVersion(): string;
				public static getSession(sessionId: number): com.arthenica.ffmpegkit.Session;
				public static setLogLevel(level: com.arthenica.ffmpegkit.Level): void;
			}
		}
	}
}

declare module com {
	export module arthenica {
		export module ffmpegkit {
			export class FFmpegSession extends com.arthenica.ffmpegkit.AbstractSession implements com.arthenica.ffmpegkit.Session {
				public static class: java.lang.Class<com.arthenica.ffmpegkit.FFmpegSession>;
				public isFFmpeg(): boolean;
				public addLog(log: com.arthenica.ffmpegkit.Log): void;
				public getState(): com.arthenica.ffmpegkit.SessionState;
				public getSessionId(): number;
				public getLogCallback(): com.arthenica.ffmpegkit.LogCallback;
				public constructor(strings0: native.Array<string>, executeCallback: com.arthenica.ffmpegkit.ExecuteCallback, logCallback: com.arthenica.ffmpegkit.LogCallback, statisticsCallback: com.arthenica.ffmpegkit.StatisticsCallback);
				public getDuration(): number;
				public getArguments(): native.Array<string>;
				public constructor(strings0: native.Array<string>);
				public getStatisticsCallback(): com.arthenica.ffmpegkit.StatisticsCallback;
				public getCreateTime(): java.util.Date;
				public constructor(strings0: native.Array<string>, executeCallback: com.arthenica.ffmpegkit.ExecuteCallback, logCallback: com.arthenica.ffmpegkit.LogCallback, logRedirectionStrategy: com.arthenica.ffmpegkit.LogRedirectionStrategy);
				public getAllStatistics(): java.util.List<com.arthenica.ffmpegkit.Statistics>;
				public getStatistics(): java.util.List<com.arthenica.ffmpegkit.Statistics>;
				public addStatistics(statistics: com.arthenica.ffmpegkit.Statistics): void;
				public constructor(strings0: native.Array<string>, executeCallback: com.arthenica.ffmpegkit.ExecuteCallback);
				public getEndTime(): java.util.Date;
				public getStartTime(): java.util.Date;
				public getAllLogs(waitTimeout: number): java.util.List<com.arthenica.ffmpegkit.Log>;
				public getLogRedirectionStrategy(): com.arthenica.ffmpegkit.LogRedirectionStrategy;
				public getAllStatistics(waitTimeout: number): java.util.List<com.arthenica.ffmpegkit.Statistics>;
				public constructor(strings0: native.Array<string>, executeCallback: com.arthenica.ffmpegkit.ExecuteCallback, logCallback: com.arthenica.ffmpegkit.LogCallback, statisticsCallback: com.arthenica.ffmpegkit.StatisticsCallback, logRedirectionStrategy: com.arthenica.ffmpegkit.LogRedirectionStrategy);
				public cancel(): void;
				public getFailStackTrace(): string;
				public getOutput(): string;
				public getCommand(): string;
				public getReturnCode(): com.arthenica.ffmpegkit.ReturnCode;
				public getFuture(): java.util.concurrent.Future<any>;
				public thereAreAsynchronousMessagesInTransmit(): boolean;
				public getAllLogs(): java.util.List<com.arthenica.ffmpegkit.Log>;
				public toString(): string;
				public getAllLogsAsString(waitTimeout: number): string;
				public getExecuteCallback(): com.arthenica.ffmpegkit.ExecuteCallback;
				public getLastReceivedStatistics(): com.arthenica.ffmpegkit.Statistics;
				public getAllLogsAsString(): string;
				public getLogsAsString(): string;
				public isFFprobe(): boolean;
				public getLogs(): java.util.List<com.arthenica.ffmpegkit.Log>;
			}
		}
	}
}

declare module com {
	export module arthenica {
		export module ffmpegkit {
			export class FFprobeKit extends java.lang.Object {
				public static class: java.lang.Class<com.arthenica.ffmpegkit.FFprobeKit>;
				public static getMediaInformation(path: string, waitTimeout: number): com.arthenica.ffmpegkit.MediaInformationSession;
				public static executeAsync(strings0: native.Array<string>, executeCallback: com.arthenica.ffmpegkit.ExecuteCallback, logCallback: com.arthenica.ffmpegkit.LogCallback, executorService: java.util.concurrent.ExecutorService): com.arthenica.ffmpegkit.FFprobeSession;
				public static execute(strings0: native.Array<string>): com.arthenica.ffmpegkit.FFprobeSession;
				public static executeAsync(strings0: native.Array<string>, executeCallback: com.arthenica.ffmpegkit.ExecuteCallback, executorService: java.util.concurrent.ExecutorService): com.arthenica.ffmpegkit.FFprobeSession;
				public static executeAsync(command: string, executeCallback: com.arthenica.ffmpegkit.ExecuteCallback, logCallback: com.arthenica.ffmpegkit.LogCallback, executorService: java.util.concurrent.ExecutorService): com.arthenica.ffmpegkit.FFprobeSession;
				public static getMediaInformationAsync(path: string, executeCallback: com.arthenica.ffmpegkit.ExecuteCallback): com.arthenica.ffmpegkit.MediaInformationSession;
				public static getMediaInformationFromCommand(command: string): com.arthenica.ffmpegkit.MediaInformationSession;
				public static getMediaInformation(path: string): com.arthenica.ffmpegkit.MediaInformationSession;
				public static execute(command: string): com.arthenica.ffmpegkit.FFprobeSession;
				public static getMediaInformationFromCommandAsync(command: string, executeCallback: com.arthenica.ffmpegkit.ExecuteCallback, logCallback: com.arthenica.ffmpegkit.LogCallback, waitTimeout: number): com.arthenica.ffmpegkit.MediaInformationSession;
				public static executeAsync(strings0: native.Array<string>, executeCallback: com.arthenica.ffmpegkit.ExecuteCallback, logCallback: com.arthenica.ffmpegkit.LogCallback): com.arthenica.ffmpegkit.FFprobeSession;
				public static executeAsync(command: string, executeCallback: com.arthenica.ffmpegkit.ExecuteCallback, executorService: java.util.concurrent.ExecutorService): com.arthenica.ffmpegkit.FFprobeSession;
				public static listSessions(): java.util.List<com.arthenica.ffmpegkit.FFprobeSession>;
				public static getMediaInformationAsync(path: string, executeCallback: com.arthenica.ffmpegkit.ExecuteCallback, executorService: java.util.concurrent.ExecutorService): com.arthenica.ffmpegkit.MediaInformationSession;
				public static getMediaInformationAsync(path: string, executeCallback: com.arthenica.ffmpegkit.ExecuteCallback, logCallback: com.arthenica.ffmpegkit.LogCallback, waitTimeout: number): com.arthenica.ffmpegkit.MediaInformationSession;
				public static getMediaInformationAsync(path: string, executeCallback: com.arthenica.ffmpegkit.ExecuteCallback, logCallback: com.arthenica.ffmpegkit.LogCallback, executorService: java.util.concurrent.ExecutorService, waitTimeout: number): com.arthenica.ffmpegkit.MediaInformationSession;
				public static executeAsync(strings0: native.Array<string>, executeCallback: com.arthenica.ffmpegkit.ExecuteCallback): com.arthenica.ffmpegkit.FFprobeSession;
				public static executeAsync(command: string, executeCallback: com.arthenica.ffmpegkit.ExecuteCallback): com.arthenica.ffmpegkit.FFprobeSession;
				public static executeAsync(command: string, executeCallback: com.arthenica.ffmpegkit.ExecuteCallback, logCallback: com.arthenica.ffmpegkit.LogCallback): com.arthenica.ffmpegkit.FFprobeSession;
			}
		}
	}
}

declare module com {
	export module arthenica {
		export module ffmpegkit {
			export class FFprobeSession extends com.arthenica.ffmpegkit.AbstractSession implements com.arthenica.ffmpegkit.Session {
				public static class: java.lang.Class<com.arthenica.ffmpegkit.FFprobeSession>;
				public isFFmpeg(): boolean;
				public addLog(log: com.arthenica.ffmpegkit.Log): void;
				public getState(): com.arthenica.ffmpegkit.SessionState;
				public getSessionId(): number;
				public getLogCallback(): com.arthenica.ffmpegkit.LogCallback;
				public getDuration(): number;
				public getArguments(): native.Array<string>;
				public constructor(strings0: native.Array<string>);
				public getCreateTime(): java.util.Date;
				public constructor(strings0: native.Array<string>, executeCallback: com.arthenica.ffmpegkit.ExecuteCallback, logCallback: com.arthenica.ffmpegkit.LogCallback, logRedirectionStrategy: com.arthenica.ffmpegkit.LogRedirectionStrategy);
				public constructor(strings0: native.Array<string>, executeCallback: com.arthenica.ffmpegkit.ExecuteCallback);
				public getEndTime(): java.util.Date;
				public getStartTime(): java.util.Date;
				public getAllLogs(waitTimeout: number): java.util.List<com.arthenica.ffmpegkit.Log>;
				public getLogRedirectionStrategy(): com.arthenica.ffmpegkit.LogRedirectionStrategy;
				public cancel(): void;
				public getFailStackTrace(): string;
				public getOutput(): string;
				public getCommand(): string;
				public getReturnCode(): com.arthenica.ffmpegkit.ReturnCode;
				public getFuture(): java.util.concurrent.Future<any>;
				public thereAreAsynchronousMessagesInTransmit(): boolean;
				public getAllLogs(): java.util.List<com.arthenica.ffmpegkit.Log>;
				public toString(): string;
				public getAllLogsAsString(waitTimeout: number): string;
				public constructor(strings0: native.Array<string>, executeCallback: com.arthenica.ffmpegkit.ExecuteCallback, logCallback: com.arthenica.ffmpegkit.LogCallback);
				public getExecuteCallback(): com.arthenica.ffmpegkit.ExecuteCallback;
				public getAllLogsAsString(): string;
				public getLogsAsString(): string;
				public isFFprobe(): boolean;
				public getLogs(): java.util.List<com.arthenica.ffmpegkit.Log>;
			}
		}
	}
}

declare module com {
	export module arthenica {
		export module ffmpegkit {
			export class Level {
				public static class: java.lang.Class<com.arthenica.ffmpegkit.Level>;
				public static AV_LOG_STDERR: com.arthenica.ffmpegkit.Level;
				public static AV_LOG_QUIET: com.arthenica.ffmpegkit.Level;
				public static AV_LOG_PANIC: com.arthenica.ffmpegkit.Level;
				public static AV_LOG_FATAL: com.arthenica.ffmpegkit.Level;
				public static AV_LOG_ERROR: com.arthenica.ffmpegkit.Level;
				public static AV_LOG_WARNING: com.arthenica.ffmpegkit.Level;
				public static AV_LOG_INFO: com.arthenica.ffmpegkit.Level;
				public static AV_LOG_VERBOSE: com.arthenica.ffmpegkit.Level;
				public static AV_LOG_DEBUG: com.arthenica.ffmpegkit.Level;
				public static AV_LOG_TRACE: com.arthenica.ffmpegkit.Level;
				public static valueOf(name: string): com.arthenica.ffmpegkit.Level;
				public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static values(): native.Array<com.arthenica.ffmpegkit.Level>;
				public static from(value: number): com.arthenica.ffmpegkit.Level;
				public getValue(): number;
			}
		}
	}
}

declare module com {
	export module arthenica {
		export module ffmpegkit {
			export class Log extends java.lang.Object {
				public static class: java.lang.Class<com.arthenica.ffmpegkit.Log>;
				public getLevel(): com.arthenica.ffmpegkit.Level;
				public getSessionId(): number;
				public constructor(sessionId: number, level: com.arthenica.ffmpegkit.Level, message: string);
				public getMessage(): string;
				public toString(): string;
			}
		}
	}
}

declare module com {
	export module arthenica {
		export module ffmpegkit {
			export class LogCallback extends java.lang.Object {
				public static class: java.lang.Class<com.arthenica.ffmpegkit.LogCallback>;
				/**
				 * Constructs a new instance of the com.arthenica.ffmpegkit.LogCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					apply(log0: com.arthenica.ffmpegkit.Log): void;
				});
				public constructor();
				public apply(log0: com.arthenica.ffmpegkit.Log): void;
			}
		}
	}
}

declare module com {
	export module arthenica {
		export module ffmpegkit {
			export class LogRedirectionStrategy {
				public static class: java.lang.Class<com.arthenica.ffmpegkit.LogRedirectionStrategy>;
				public static ALWAYS_PRINT_LOGS: com.arthenica.ffmpegkit.LogRedirectionStrategy;
				public static PRINT_LOGS_WHEN_NO_CALLBACKS_DEFINED: com.arthenica.ffmpegkit.LogRedirectionStrategy;
				public static PRINT_LOGS_WHEN_GLOBAL_CALLBACK_NOT_DEFINED: com.arthenica.ffmpegkit.LogRedirectionStrategy;
				public static PRINT_LOGS_WHEN_SESSION_CALLBACK_NOT_DEFINED: com.arthenica.ffmpegkit.LogRedirectionStrategy;
				public static NEVER_PRINT_LOGS: com.arthenica.ffmpegkit.LogRedirectionStrategy;
				public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static valueOf(name: string): com.arthenica.ffmpegkit.LogRedirectionStrategy;
				public static values(): native.Array<com.arthenica.ffmpegkit.LogRedirectionStrategy>;
			}
		}
	}
}

declare module com {
	export module arthenica {
		export module ffmpegkit {
			export class MediaInformation extends java.lang.Object {
				public static class: java.lang.Class<com.arthenica.ffmpegkit.MediaInformation>;
				public static KEY_MEDIA_PROPERTIES: string;
				public static KEY_FILENAME: string;
				public static KEY_FORMAT: string;
				public static KEY_FORMAT_LONG: string;
				public static KEY_START_TIME: string;
				public static KEY_DURATION: string;
				public static KEY_SIZE: string;
				public static KEY_BIT_RATE: string;
				public static KEY_TAGS: string;
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
				public getStreams(): java.util.List<com.arthenica.ffmpegkit.StreamInformation>;
				public constructor(jsonObject: org.json.JSONObject, streams: java.util.List<com.arthenica.ffmpegkit.StreamInformation>);
				public getFilename(): string;
				public getStartTime(): string;
				public getAllProperties(): org.json.JSONObject;
			}
		}
	}
}

declare module com {
	export module arthenica {
		export module ffmpegkit {
			export class MediaInformationJsonParser extends java.lang.Object {
				public static class: java.lang.Class<com.arthenica.ffmpegkit.MediaInformationJsonParser>;
				public static fromWithError(ffprobeJsonOutput: string): com.arthenica.ffmpegkit.MediaInformation;
				public static from(ffprobeJsonOutput: string): com.arthenica.ffmpegkit.MediaInformation;
				public constructor();
			}
		}
	}
}

declare module com {
	export module arthenica {
		export module ffmpegkit {
			export class MediaInformationSession extends com.arthenica.ffmpegkit.FFprobeSession implements com.arthenica.ffmpegkit.Session {
				public static class: java.lang.Class<com.arthenica.ffmpegkit.MediaInformationSession>;
				public addLog(log: com.arthenica.ffmpegkit.Log): void;
				public isFFmpeg(): boolean;
				public getState(): com.arthenica.ffmpegkit.SessionState;
				public getSessionId(): number;
				public getLogCallback(): com.arthenica.ffmpegkit.LogCallback;
				public getDuration(): number;
				public getArguments(): native.Array<string>;
				public constructor(strings0: native.Array<string>);
				public getCreateTime(): java.util.Date;
				public constructor(strings0: native.Array<string>, executeCallback: com.arthenica.ffmpegkit.ExecuteCallback, logCallback: com.arthenica.ffmpegkit.LogCallback, logRedirectionStrategy: com.arthenica.ffmpegkit.LogRedirectionStrategy);
				public constructor(strings0: native.Array<string>, executeCallback: com.arthenica.ffmpegkit.ExecuteCallback);
				public getEndTime(): java.util.Date;
				public getStartTime(): java.util.Date;
				public getAllLogs(waitTimeout: number): java.util.List<com.arthenica.ffmpegkit.Log>;
				public getLogRedirectionStrategy(): com.arthenica.ffmpegkit.LogRedirectionStrategy;
				public getMediaInformation(): com.arthenica.ffmpegkit.MediaInformation;
				public cancel(): void;
				public setMediaInformation(mediaInformation: com.arthenica.ffmpegkit.MediaInformation): void;
				public getFailStackTrace(): string;
				public getOutput(): string;
				public getCommand(): string;
				public getReturnCode(): com.arthenica.ffmpegkit.ReturnCode;
				public getFuture(): java.util.concurrent.Future<any>;
				public thereAreAsynchronousMessagesInTransmit(): boolean;
				public getAllLogs(): java.util.List<com.arthenica.ffmpegkit.Log>;
				public toString(): string;
				public getAllLogsAsString(waitTimeout: number): string;
				public constructor(strings0: native.Array<string>, executeCallback: com.arthenica.ffmpegkit.ExecuteCallback, logCallback: com.arthenica.ffmpegkit.LogCallback);
				public getExecuteCallback(): com.arthenica.ffmpegkit.ExecuteCallback;
				public getAllLogsAsString(): string;
				public getLogsAsString(): string;
				public getLogs(): java.util.List<com.arthenica.ffmpegkit.Log>;
				public isFFprobe(): boolean;
			}
		}
	}
}

declare module com {
	export module arthenica {
		export module ffmpegkit {
			export class NativeLoader extends java.lang.Object {
				public static class: java.lang.Class<com.arthenica.ffmpegkit.NativeLoader>;
				public constructor();
			}
		}
	}
}

declare module com {
	export module arthenica {
		export module ffmpegkit {
			export class Packages extends java.lang.Object {
				public static class: java.lang.Class<com.arthenica.ffmpegkit.Packages>;
				public static getExternalLibraries(): java.util.List<string>;
				public static getPackageName(): string;
			}
		}
	}
}

declare module com {
	export module arthenica {
		export module ffmpegkit {
			export class ReturnCode extends java.lang.Object {
				public static class: java.lang.Class<com.arthenica.ffmpegkit.ReturnCode>;
				public static SUCCESS: number;
				public static CANCEL: number;
				public isError(): boolean;
				public static isSuccess(returnCode: com.arthenica.ffmpegkit.ReturnCode): boolean;
				public constructor(value: number);
				public isCancel(): boolean;
				public isSuccess(): boolean;
				public static isCancel(returnCode: com.arthenica.ffmpegkit.ReturnCode): boolean;
				public getValue(): number;
				public toString(): string;
			}
		}
	}
}

declare module com {
	export module arthenica {
		export module ffmpegkit {
			export class Session extends java.lang.Object {
				public static class: java.lang.Class<com.arthenica.ffmpegkit.Session>;
				/**
				 * Constructs a new instance of the com.arthenica.ffmpegkit.Session interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getExecuteCallback(): com.arthenica.ffmpegkit.ExecuteCallback;
					getLogCallback(): com.arthenica.ffmpegkit.LogCallback;
					getSessionId(): number;
					getCreateTime(): java.util.Date;
					getStartTime(): java.util.Date;
					getEndTime(): java.util.Date;
					getDuration(): number;
					getArguments(): native.Array<string>;
					getCommand(): string;
					getAllLogs(int0: number): java.util.List<com.arthenica.ffmpegkit.Log>;
					getAllLogs(): java.util.List<com.arthenica.ffmpegkit.Log>;
					getLogs(): java.util.List<com.arthenica.ffmpegkit.Log>;
					getAllLogsAsString(int0: number): string;
					getAllLogsAsString(): string;
					getLogsAsString(): string;
					getOutput(): string;
					getState(): com.arthenica.ffmpegkit.SessionState;
					getReturnCode(): com.arthenica.ffmpegkit.ReturnCode;
					getFailStackTrace(): string;
					getLogRedirectionStrategy(): com.arthenica.ffmpegkit.LogRedirectionStrategy;
					thereAreAsynchronousMessagesInTransmit(): boolean;
					addLog(log0: com.arthenica.ffmpegkit.Log): void;
					getFuture(): java.util.concurrent.Future<any>;
					isFFmpeg(): boolean;
					isFFprobe(): boolean;
					cancel(): void;
				});
				public constructor();
				public isFFmpeg(): boolean;
				public getState(): com.arthenica.ffmpegkit.SessionState;
				public getSessionId(): number;
				public getLogCallback(): com.arthenica.ffmpegkit.LogCallback;
				public getDuration(): number;
				public getArguments(): native.Array<string>;
				public getCreateTime(): java.util.Date;
				public getEndTime(): java.util.Date;
				public getStartTime(): java.util.Date;
				public getLogRedirectionStrategy(): com.arthenica.ffmpegkit.LogRedirectionStrategy;
				public addLog(log0: com.arthenica.ffmpegkit.Log): void;
				public cancel(): void;
				public getFailStackTrace(): string;
				public getOutput(): string;
				public getCommand(): string;
				public getReturnCode(): com.arthenica.ffmpegkit.ReturnCode;
				public getFuture(): java.util.concurrent.Future<any>;
				public thereAreAsynchronousMessagesInTransmit(): boolean;
				public getAllLogs(): java.util.List<com.arthenica.ffmpegkit.Log>;
				public getExecuteCallback(): com.arthenica.ffmpegkit.ExecuteCallback;
				public getAllLogsAsString(int0: number): string;
				public getAllLogsAsString(): string;
				public getLogsAsString(): string;
				public getAllLogs(int0: number): java.util.List<com.arthenica.ffmpegkit.Log>;
				public getLogs(): java.util.List<com.arthenica.ffmpegkit.Log>;
				public isFFprobe(): boolean;
			}
		}
	}
}

declare module com {
	export module arthenica {
		export module ffmpegkit {
			export class SessionState {
				public static class: java.lang.Class<com.arthenica.ffmpegkit.SessionState>;
				public static CREATED: com.arthenica.ffmpegkit.SessionState;
				public static RUNNING: com.arthenica.ffmpegkit.SessionState;
				public static FAILED: com.arthenica.ffmpegkit.SessionState;
				public static COMPLETED: com.arthenica.ffmpegkit.SessionState;
				public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static values(): native.Array<com.arthenica.ffmpegkit.SessionState>;
				public static valueOf(name: string): com.arthenica.ffmpegkit.SessionState;
			}
		}
	}
}

declare module com {
	export module arthenica {
		export module ffmpegkit {
			export class Signal {
				public static class: java.lang.Class<com.arthenica.ffmpegkit.Signal>;
				public static SIGINT: com.arthenica.ffmpegkit.Signal;
				public static SIGQUIT: com.arthenica.ffmpegkit.Signal;
				public static SIGPIPE: com.arthenica.ffmpegkit.Signal;
				public static SIGTERM: com.arthenica.ffmpegkit.Signal;
				public static SIGXCPU: com.arthenica.ffmpegkit.Signal;
				public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static valueOf(name: string): com.arthenica.ffmpegkit.Signal;
				public static values(): native.Array<com.arthenica.ffmpegkit.Signal>;
				public getValue(): number;
			}
		}
	}
}

declare module com {
	export module arthenica {
		export module ffmpegkit {
			export class Statistics extends java.lang.Object {
				public static class: java.lang.Class<com.arthenica.ffmpegkit.Statistics>;
				public setVideoQuality(videoQuality: number): void;
				public getSessionId(): number;
				public setSpeed(speed: number): void;
				public setTime(time: number): void;
				public setVideoFps(videoFps: number): void;
				public getVideoQuality(): number;
				public toString(): string;
				public constructor(sessionId: number, videoFrameNumber: number, videoFps: number, videoQuality: number, size: number, time: number, bitrate: number, speed: number);
				public getTime(): number;
				public getBitrate(): number;
				public setBitrate(bitrate: number): void;
				public getSize(): number;
				public setSessionId(sessionId: number): void;
				public setSize(size: number): void;
				public getSpeed(): number;
				public getVideoFrameNumber(): number;
				public setVideoFrameNumber(videoFrameNumber: number): void;
				public getVideoFps(): number;
			}
		}
	}
}

declare module com {
	export module arthenica {
		export module ffmpegkit {
			export class StatisticsCallback extends java.lang.Object {
				public static class: java.lang.Class<com.arthenica.ffmpegkit.StatisticsCallback>;
				/**
				 * Constructs a new instance of the com.arthenica.ffmpegkit.StatisticsCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					apply(statistics0: com.arthenica.ffmpegkit.Statistics): void;
				});
				public constructor();
				public apply(statistics0: com.arthenica.ffmpegkit.Statistics): void;
			}
		}
	}
}

declare module com {
	export module arthenica {
		export module ffmpegkit {
			export class StreamInformation extends java.lang.Object {
				public static class: java.lang.Class<com.arthenica.ffmpegkit.StreamInformation>;
				public static KEY_INDEX: string;
				public static KEY_TYPE: string;
				public static KEY_CODEC: string;
				public static KEY_CODEC_LONG: string;
				public static KEY_FORMAT: string;
				public static KEY_WIDTH: string;
				public static KEY_HEIGHT: string;
				public static KEY_BIT_RATE: string;
				public static KEY_SAMPLE_RATE: string;
				public static KEY_SAMPLE_FORMAT: string;
				public static KEY_CHANNEL_LAYOUT: string;
				public static KEY_SAMPLE_ASPECT_RATIO: string;
				public static KEY_DISPLAY_ASPECT_RATIO: string;
				public static KEY_AVERAGE_FRAME_RATE: string;
				public static KEY_REAL_FRAME_RATE: string;
				public static KEY_TIME_BASE: string;
				public static KEY_CODEC_TIME_BASE: string;
				public static KEY_TAGS: string;
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

//Generics information:

