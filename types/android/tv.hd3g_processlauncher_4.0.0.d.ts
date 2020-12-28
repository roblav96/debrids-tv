declare module tv {
	export module hd3g {
		export module processlauncher {
			export class CaptureStandardOutput extends java.lang.Object {
				public static class: java.lang.Class<tv.hd3g.processlauncher.CaptureStandardOutput>;
				/**
				 * Constructs a new instance of the tv.hd3g.processlauncher.CaptureStandardOutput interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					stdOutStreamConsumer(inputStream0: java.io.InputStream, processlauncherLifecycle1: tv.hd3g.processlauncher.ProcesslauncherLifecycle): java.lang.Thread;
					stdErrStreamConsumer(inputStream0: java.io.InputStream, processlauncherLifecycle1: tv.hd3g.processlauncher.ProcesslauncherLifecycle): java.lang.Thread;
				});
				public constructor();
				public stdErrStreamConsumer(inputStream0: java.io.InputStream, processlauncherLifecycle1: tv.hd3g.processlauncher.ProcesslauncherLifecycle): java.lang.Thread;
				public stdOutStreamConsumer(inputStream0: java.io.InputStream, processlauncherLifecycle1: tv.hd3g.processlauncher.ProcesslauncherLifecycle): java.lang.Thread;
			}
		}
	}
}

declare module tv {
	export module hd3g {
		export module processlauncher {
			export class CaptureStandardOutputText extends java.lang.Object implements tv.hd3g.processlauncher.CaptureStandardOutput {
				public static class: java.lang.Class<tv.hd3g.processlauncher.CaptureStandardOutputText>;
				public stdErrStreamConsumer(inputStream0: java.io.InputStream, processlauncherLifecycle1: tv.hd3g.processlauncher.ProcesslauncherLifecycle): java.lang.Thread;
				public stdOutStreamConsumer(inputStream0: java.io.InputStream, processlauncherLifecycle1: tv.hd3g.processlauncher.ProcesslauncherLifecycle): java.lang.Thread;
				public stdOutStreamConsumer(processInputStream: java.io.InputStream, source: tv.hd3g.processlauncher.ProcesslauncherLifecycle): tv.hd3g.processlauncher.CaptureStandardOutputText.StreamParser;
				public stdErrStreamConsumer(processInputStream: java.io.InputStream, source: tv.hd3g.processlauncher.ProcesslauncherLifecycle): tv.hd3g.processlauncher.CaptureStandardOutputText.StreamParser;
				public addObserver(observer: tv.hd3g.processlauncher.CapturedStdOutErrText): void;
			}
			export module CaptureStandardOutputText {
				export class StreamParser extends java.lang.Thread {
					public static class: java.lang.Class<tv.hd3g.processlauncher.CaptureStandardOutputText.StreamParser>;
					public getSource(): tv.hd3g.processlauncher.ProcesslauncherLifecycle;
					public run(): void;
					public isStdErr(): boolean;
				}
			}
		}
	}
}

declare module tv {
	export module hd3g {
		export module processlauncher {
			export abstract class CapturedStdOutErrText extends java.lang.Object {
				public static class: java.lang.Class<tv.hd3g.processlauncher.CapturedStdOutErrText>;
				public isStreamsWatchIsStillAlive(): boolean;
				public waitForClosedStreams(): void;
				public constructor();
				public waitForClosedStreams(millis: number): void;
			}
		}
	}
}

declare module tv {
	export module hd3g {
		export module processlauncher {
			export class CapturedStdOutErrTextInteractive extends tv.hd3g.processlauncher.CapturedStdOutErrText {
				public static class: java.lang.Class<tv.hd3g.processlauncher.CapturedStdOutErrTextInteractive>;
				public constructor(interactive: any /* any<tv.hd3g.processlauncher.LineEntry,string>*/, destCharset: java.nio.charset.Charset);
				public constructor(interactive: any /* any<tv.hd3g.processlauncher.LineEntry,string>*/);
				public constructor();
			}
		}
	}
}

declare module tv {
	export module hd3g {
		export module processlauncher {
			export class CapturedStdOutErrTextRetention extends tv.hd3g.processlauncher.CapturedStdOutErrText {
				public static class: java.lang.Class<tv.hd3g.processlauncher.CapturedStdOutErrTextRetention>;
				public constructor(streamToKeep: tv.hd3g.processlauncher.CapturedStreams);
				public getStderrLines(keepEmptyLines: boolean): java.util.stream.Stream<string>;
				public getStdout(keepEmptyLines: boolean, newLineSeparator: string): string;
				public getStdoutLines(keepEmptyLines: boolean): java.util.stream.Stream<string>;
				public getStdouterrLines(keepEmptyLines: boolean): java.util.stream.Stream<string>;
				public getStdouterr(keepEmptyLines: boolean, newLineSeparator: string): string;
				public constructor();
				public getStderr(keepEmptyLines: boolean, newLineSeparator: string): string;
			}
		}
	}
}

declare module tv {
	export module hd3g {
		export module processlauncher {
			export class CapturedStdOutErrToPrintStream extends tv.hd3g.processlauncher.CapturedStdOutErrText {
				public static class: java.lang.Class<tv.hd3g.processlauncher.CapturedStdOutErrToPrintStream>;
				public setFilter(filter: any /* any*/): tv.hd3g.processlauncher.CapturedStdOutErrToPrintStream;
				public getFilter(): java.util.Optional<any>;
				public constructor(printStreamStdOut: java.io.PrintStream, printStreamStdErr: java.io.PrintStream);
				public constructor();
			}
		}
	}
}

declare module tv {
	export module hd3g {
		export module processlauncher {
			export abstract class CapturedStreams {
				public static class: java.lang.Class<tv.hd3g.processlauncher.CapturedStreams>;
				public static BOTH_STDOUT_STDERR: tv.hd3g.processlauncher.CapturedStreams;
				public static ONLY_STDOUT: tv.hd3g.processlauncher.CapturedStreams;
				public static ONLY_STDERR: tv.hd3g.processlauncher.CapturedStreams;
				public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static valueOf(name: string): tv.hd3g.processlauncher.CapturedStreams;
				public static values(): native.Array<tv.hd3g.processlauncher.CapturedStreams>;
			}
		}
	}
}

declare module tv {
	export module hd3g {
		export module processlauncher {
			export class EndStatus {
				public static class: java.lang.Class<tv.hd3g.processlauncher.EndStatus>;
				public static NOT_YET_DONE: tv.hd3g.processlauncher.EndStatus;
				public static CORRECTLY_DONE: tv.hd3g.processlauncher.EndStatus;
				public static DONE_WITH_ERROR: tv.hd3g.processlauncher.EndStatus;
				public static KILLED: tv.hd3g.processlauncher.EndStatus;
				public static TOO_LONG_EXECUTION_TIME: tv.hd3g.processlauncher.EndStatus;
				public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static valueOf(name: string): tv.hd3g.processlauncher.EndStatus;
				public static values(): native.Array<tv.hd3g.processlauncher.EndStatus>;
			}
		}
	}
}

declare module tv {
	export module hd3g {
		export module processlauncher {
			export class Exec extends java.lang.Object implements tv.hd3g.processlauncher.tool.ExecutableTool {
				public static class: java.lang.Class<tv.hd3g.processlauncher.Exec>;
				public getVarsToInject(): java.util.Map<string,tv.hd3g.processlauncher.cmdline.Parameters>;
				public getExecutableName(): string;
				public getExecutableFinder(): tv.hd3g.processlauncher.cmdline.ExecutableFinder;
				public constructor(tool: tv.hd3g.processlauncher.tool.ExecutableTool, executableFinder: tv.hd3g.processlauncher.cmdline.ExecutableFinder);
				public getParameters(): tv.hd3g.processlauncher.cmdline.Parameters;
				public runWaitGetText(beforeRun: any /* any*/): tv.hd3g.processlauncher.CapturedStdOutErrTextRetention;
				public runWaitGetText(): tv.hd3g.processlauncher.CapturedStdOutErrTextRetention;
				public filterOutErrorLines(): any /* any*/;
				public setRemoveParamsIfNoVarToInject(removeParamsIfNoVarToInject: boolean): tv.hd3g.processlauncher.Exec;
				public getExecutableFile(): java.io.File;
				public beforeRun(processBuilder: tv.hd3g.processlauncher.ProcesslauncherBuilder): void;
				public constructor(execName: string, executableFinder: tv.hd3g.processlauncher.cmdline.ExecutableFinder);
				public getReadyToRunParameters(): tv.hd3g.processlauncher.cmdline.Parameters;
				public isRemoveParamsIfNoVarToInject(): boolean;
			}
		}
	}
}

declare module tv {
	export module hd3g {
		export module processlauncher {
			export class ExecutionCallbacker extends java.lang.Object {
				public static class: java.lang.Class<tv.hd3g.processlauncher.ExecutionCallbacker>;
				/**
				 * Constructs a new instance of the tv.hd3g.processlauncher.ExecutionCallbacker interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onEndExecution(processlauncherLifecycle: tv.hd3g.processlauncher.ProcesslauncherLifecycle): void;
					postStartupExecution(processlauncherLifecycle: tv.hd3g.processlauncher.ProcesslauncherLifecycle): void;
				});
				public constructor();
				public onEndExecution(processlauncherLifecycle: tv.hd3g.processlauncher.ProcesslauncherLifecycle): void;
				public postStartupExecution(processlauncherLifecycle: tv.hd3g.processlauncher.ProcesslauncherLifecycle): void;
			}
		}
	}
}

declare module tv {
	export module hd3g {
		export module processlauncher {
			export class ExecutionTimeLimiter extends java.lang.Object {
				public static class: java.lang.Class<tv.hd3g.processlauncher.ExecutionTimeLimiter>;
				public constructor(maxExecTime: number, unit: java.util.concurrent.TimeUnit, maxExecTimeScheduler: java.util.concurrent.ScheduledExecutorService);
				public getMaxExecTime(unit: java.util.concurrent.TimeUnit): number;
			}
		}
	}
}

declare module tv {
	export module hd3g {
		export module processlauncher {
			export class ExternalProcessStartup extends java.lang.Object {
				public static class: java.lang.Class<tv.hd3g.processlauncher.ExternalProcessStartup>;
				/**
				 * Constructs a new instance of the tv.hd3g.processlauncher.ExternalProcessStartup interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					startProcess(processBuilder0: java.lang.ProcessBuilder): java.lang.Process;
					onEndProcess(processlauncherLifecycle: tv.hd3g.processlauncher.ProcesslauncherLifecycle): void;
				});
				public constructor();
				public startProcess(processBuilder0: java.lang.ProcessBuilder): java.lang.Process;
				public onEndProcess(processlauncherLifecycle: tv.hd3g.processlauncher.ProcesslauncherLifecycle): void;
			}
		}
	}
}

declare module tv {
	export module hd3g {
		export module processlauncher {
			export class InvalidExecution extends java.lang.RuntimeException {
				public static class: java.lang.Class<tv.hd3g.processlauncher.InvalidExecution>;
				public injectStdErr(stdErr: string): tv.hd3g.processlauncher.InvalidExecution;
				public getStdErr(): string;
				public getMessage(): string;
			}
		}
	}
}

declare module tv {
	export module hd3g {
		export module processlauncher {
			export class LineEntry extends java.lang.Object {
				public static class: java.lang.Class<tv.hd3g.processlauncher.LineEntry>;
				public getSource(): tv.hd3g.processlauncher.ProcesslauncherLifecycle;
				public canUseThis(choosedStream: tv.hd3g.processlauncher.CapturedStreams): boolean;
				public isStdErr(): boolean;
				public getDate(): number;
				public getTimeAgo(): number;
				public getLine(): string;
			}
		}
	}
}

declare module tv {
	export module hd3g {
		export module processlauncher {
			export class ProcessLifeCycleException extends java.lang.RuntimeException {
				public static class: java.lang.Class<tv.hd3g.processlauncher.ProcessLifeCycleException>;
				public constructor(cause: java.lang.Throwable);
				public constructor(message: string, cause: java.lang.Throwable);
				public constructor(message: string);
				public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
				public constructor();
			}
		}
	}
}

declare module tv {
	export module hd3g {
		export module processlauncher {
			export class Processlauncher extends java.lang.Object {
				public static class: java.lang.Class<tv.hd3g.processlauncher.Processlauncher>;
				public getExecutionTimeLimiter(): java.util.Optional<tv.hd3g.processlauncher.ExecutionTimeLimiter>;
				public start(): tv.hd3g.processlauncher.ProcesslauncherLifecycle;
				public getExecutionCallbackers(): java.util.List<tv.hd3g.processlauncher.ExecutionCallbacker>;
				public getProcessBuilder(): java.lang.ProcessBuilder;
				public getProcesslauncherBuilder(): tv.hd3g.processlauncher.ProcesslauncherBuilder;
				public constructor(processlauncherBuilder: tv.hd3g.processlauncher.ProcesslauncherBuilder);
				public getExecutableName(): string;
				public getFullCommandLine(): string;
				public toString(): string;
				public getCaptureStandardOutput(): java.util.Optional<tv.hd3g.processlauncher.CaptureStandardOutput>;
				public isExecCodeMustBeZero(): boolean;
				public getExternalProcessStartup(): java.util.Optional<tv.hd3g.processlauncher.ExternalProcessStartup>;
			}
		}
	}
}

declare module tv {
	export module hd3g {
		export module processlauncher {
			export class ProcesslauncherBuilder extends java.lang.Object {
				public static class: java.lang.Class<tv.hd3g.processlauncher.ProcesslauncherBuilder>;
				public getSetCaptureStandardOutputAsOutputText(): tv.hd3g.processlauncher.CaptureStandardOutputText;
				public getExecutableName(): string;
				public addExecutionCallbacker(executionCallbacker: tv.hd3g.processlauncher.ExecutionCallbacker): tv.hd3g.processlauncher.ProcesslauncherBuilder;
				public setExecutionTimeLimiter(executionTimeLimiter: tv.hd3g.processlauncher.ExecutionTimeLimiter): tv.hd3g.processlauncher.ProcesslauncherBuilder;
				public setEnvironmentVar(key: string, value: string): tv.hd3g.processlauncher.ProcesslauncherBuilder;
				public forEachEnvironmentVar(action: any /* any<string,string>*/): void;
				public getCaptureStandardOutput(): java.util.Optional<tv.hd3g.processlauncher.CaptureStandardOutput>;
				public getExecutionTimeLimiter(): java.util.Optional<tv.hd3g.processlauncher.ExecutionTimeLimiter>;
				public setExecutionTimeLimiter(maxExecTime: number, unit: java.util.concurrent.TimeUnit, maxExecTimeScheduler: java.util.concurrent.ScheduledExecutorService): tv.hd3g.processlauncher.ProcesslauncherBuilder;
				public constructor(commandLine: tv.hd3g.processlauncher.cmdline.CommandLine);
				public removeExecutionCallbacker(executionCallbacker: tv.hd3g.processlauncher.ExecutionCallbacker): tv.hd3g.processlauncher.ProcesslauncherBuilder;
				public setExternalProcessStartup(externalProcessStartup: tv.hd3g.processlauncher.ExternalProcessStartup): tv.hd3g.processlauncher.ProcesslauncherBuilder;
				public start(): tv.hd3g.processlauncher.ProcesslauncherLifecycle;
				public getEnvironmentVar(key: string): string;
				public getFullCommandLine(): string;
				public setEnvironmentVarIfNotFound(key: string, value: string): tv.hd3g.processlauncher.ProcesslauncherBuilder;
				public setCaptureStandardOutput(captureStandardOutput: tv.hd3g.processlauncher.CaptureStandardOutput): tv.hd3g.processlauncher.ProcesslauncherBuilder;
				public toString(): string;
				public setExecCodeMustBeZero(execCodeMustBeZero: boolean): tv.hd3g.processlauncher.ProcesslauncherBuilder;
				public getExecutionCallbackers(): java.util.List<tv.hd3g.processlauncher.ExecutionCallbacker>;
				public toProcesslauncher(): tv.hd3g.processlauncher.Processlauncher;
				public getWorkingDirectory(): java.io.File;
				public constructor(executable: java.io.File, parameters: java.util.Collection<string>);
				public setWorkingDirectory(workingDirectory: java.io.File): tv.hd3g.processlauncher.ProcesslauncherBuilder;
				public constructor(executable: java.io.File, parameters: java.util.Collection<string>, execFinder: tv.hd3g.processlauncher.cmdline.ExecutableFinder);
				public getSetCaptureStandardOutputAsOutputText(defaultCaptureOutStreamsBehavior: tv.hd3g.processlauncher.CapturedStreams): tv.hd3g.processlauncher.CaptureStandardOutputText;
				public isExecCodeMustBeZero(): boolean;
				public getExternalProcessStartup(): java.util.Optional<tv.hd3g.processlauncher.ExternalProcessStartup>;
				public makeProcessBuilder(): java.lang.ProcessBuilder;
			}
		}
	}
}

declare module tv {
	export module hd3g {
		export module processlauncher {
			export class ProcesslauncherLifecycle extends java.lang.Object {
				public static class: java.lang.Class<tv.hd3g.processlauncher.ProcesslauncherLifecycle>;
				public getPID(): java.util.Optional<java.lang.Long>;
				public getExitCode(): java.lang.Integer;
				public isRunning(): java.lang.Boolean;
				public getUptime(unit: java.util.concurrent.TimeUnit): number;
				public waitForEnd(timeout: number, unit: java.util.concurrent.TimeUnit): tv.hd3g.processlauncher.ProcesslauncherLifecycle;
				public checkExecution(): tv.hd3g.processlauncher.ProcesslauncherLifecycle;
				public getExecNameWithoutExt(): string;
				public toString(): string;
				public getLauncher(): tv.hd3g.processlauncher.Processlauncher;
				public getEndDate(): number;
				public isCorrectlyDone(): boolean;
				public isKilled(): boolean;
				public isTooLongTime(): boolean;
				public kill(): tv.hd3g.processlauncher.ProcesslauncherLifecycle;
				public getCPUDuration(unit: java.util.concurrent.TimeUnit): number;
				public getProcess(): java.lang.Process;
				public waitForEnd(): tv.hd3g.processlauncher.ProcesslauncherLifecycle;
				public getStdInInjection(): tv.hd3g.processlauncher.StdInInjection;
				public getEndStatus(): tv.hd3g.processlauncher.EndStatus;
				public getStartDate(): number;
				public getUserExec(): java.util.Optional<string>;
			}
		}
	}
}

declare module tv {
	export module hd3g {
		export module processlauncher {
			export class StdInInjection extends java.io.OutputStream {
				public static class: java.lang.Class<tv.hd3g.processlauncher.StdInInjection>;
				public static LINESEPARATOR: string;
				public write(int0: number): void;
				public write(b: number): void;
				public close(): void;
				public constructor(stdIn: java.io.OutputStream);
				public println(text: string): tv.hd3g.processlauncher.StdInInjection;
				public write(b: native.Array<number>): void;
				public write(b: native.Array<number>, off: number, len: number): void;
				public println(text: string, destCharset: java.nio.charset.Charset): tv.hd3g.processlauncher.StdInInjection;
				public constructor();
				public flush(): void;
			}
		}
	}
}

declare module tv {
	export module hd3g {
		export module processlauncher {
			export class Tool extends java.lang.Object {
				public static class: java.lang.Class<tv.hd3g.processlauncher.Tool>;
				public static patchTestExec(): void;
			}
		}
	}
}

declare module tv {
	export module hd3g {
		export module processlauncher {
			export module cmdline {
				export class ArgValueChoice extends java.lang.Object {
					public static class: java.lang.Class<tv.hd3g.processlauncher.cmdline.ArgValueChoice>;
					/**
					 * Constructs a new instance of the tv.hd3g.processlauncher.cmdline.ArgValueChoice interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						choose(string0: string, list1: java.util.List<string>, list2: java.util.List<string>): java.util.List<string>;
					});
					public constructor();
					public choose(string0: string, list1: java.util.List<string>, list2: java.util.List<string>): java.util.List<string>;
				}
			}
		}
	}
}

declare module tv {
	export module hd3g {
		export module processlauncher {
			export module cmdline {
				export class CommandLine extends java.lang.Object {
					public static class: java.lang.Class<tv.hd3g.processlauncher.cmdline.CommandLine>;
					public getExecutable(): java.io.File;
					public constructor(execName: string, parameters: string, executableFinder: tv.hd3g.processlauncher.cmdline.ExecutableFinder);
					public getExecutableFinder(): java.util.Optional<tv.hd3g.processlauncher.cmdline.ExecutableFinder>;
					public toString(): string;
					public constructor(executable: java.io.File, parameters: tv.hd3g.processlauncher.cmdline.Parameters);
					public constructor(executable: java.io.File, parameters: string);
					public getParameters(): tv.hd3g.processlauncher.cmdline.Parameters;
					public constructor(execName: string, parameters: tv.hd3g.processlauncher.cmdline.Parameters, executableFinder: tv.hd3g.processlauncher.cmdline.ExecutableFinder);
				}
			}
		}
	}
}

declare module tv {
	export module hd3g {
		export module processlauncher {
			export module cmdline {
				export class ExecutableFinder extends java.lang.Object {
					public static class: java.lang.Class<tv.hd3g.processlauncher.cmdline.ExecutableFinder>;
					public static isValidDirectory: any /* any*/;
					public static WINDOWS_EXEC_EXTENSIONS: java.util.List<string>;
					public static GLOBAL_DECLARED_DIRS: java.util.List<java.io.File>;
					public addLocalPath(relativeUserHomePath: string): tv.hd3g.processlauncher.cmdline.ExecutableFinder;
					public addPath(filePath: java.io.File): tv.hd3g.processlauncher.cmdline.ExecutableFinder;
					public constructor();
					public registerExecutable(name: string, fullPath: java.io.File): tv.hd3g.processlauncher.cmdline.ExecutableFinder;
					public get(name: string): java.io.File;
					public getFullPath(): java.util.List<java.io.File>;
					public getFullPathToString(): string;
				}
			}
		}
	}
}

declare module tv {
	export module hd3g {
		export module processlauncher {
			export module cmdline {
				export class ParameterArg extends java.lang.Object {
					public static class: java.lang.Class<tv.hd3g.processlauncher.cmdline.ParameterArg>;
					public toString(): string;
					public isInQuotes(): boolean;
					public isEmpty(): boolean;
				}
			}
		}
	}
}

declare module tv {
	export module hd3g {
		export module processlauncher {
			export module cmdline {
				export class Parameters extends tv.hd3g.processlauncher.cmdline.SimpleParameters {
					public static class: java.lang.Class<tv.hd3g.processlauncher.cmdline.Parameters>;
					public extractVarNameFromTaggedParameter(param: string): string;
					public injectParamsAroundVariable(varName: string, addBefore: java.util.Collection<string>, addAfter: java.util.Collection<string>): boolean;
					public transfertThisConfigurationTo(newInstance: tv.hd3g.processlauncher.cmdline.Parameters): tv.hd3g.processlauncher.cmdline.Parameters;
					public constructor(parameters: java.util.Collection<string>);
					public setVarTags(startVarTag: string, endVarTag: string): tv.hd3g.processlauncher.cmdline.Parameters;
					public transfertThisConfigurationTo(newInstance: tv.hd3g.processlauncher.cmdline.SimpleParameters): tv.hd3g.processlauncher.cmdline.SimpleParameters;
					public tagVar(varName: string): string;
					public removeVariables(removeParamsIfNoVarToInject: boolean): tv.hd3g.processlauncher.cmdline.Parameters;
					public constructor();
					public constructor(bulkParameters: string);
					public isTaggedParameter(param: string): boolean;
					public injectVariables(varsToInject: java.util.Map<string,tv.hd3g.processlauncher.cmdline.Parameters>, removeParamsIfNoVarToInject: boolean): tv.hd3g.processlauncher.cmdline.Parameters;
					public addVariable(varName: string): string;
					public getEndVarTag(): string;
					public duplicate(): tv.hd3g.processlauncher.cmdline.Parameters;
					public constructor(bulkParameters: native.Array<string>);
					public getStartVarTag(): string;
				}
			}
		}
	}
}

declare module tv {
	export module hd3g {
		export module processlauncher {
			export module cmdline {
				export class SimpleParameters extends java.lang.Object {
					public static class: java.lang.Class<tv.hd3g.processlauncher.cmdline.SimpleParameters>;
					public static MUST_ESCAPE: java.util.List<java.lang.Character>;
					public static MUST_SURROUND_QUOTE: java.util.List<java.lang.Character>;
					public isEmpty(): boolean;
					public hasParameters(params: native.Array<string>): boolean;
					public getAllArgKeyValues(): java.util.Map<string,java.util.List<string>>;
					public ifHasNotParameter(toDoIfMissing: java.lang.Runnable, inParameters: native.Array<string>): tv.hd3g.processlauncher.cmdline.SimpleParameters;
					public removeParameter(parametersKey: string, paramAsThisKeyPos: number): boolean;
					public toString(): string;
					public getParametersKeysStartsWith(): string;
					public prependParameters(params: native.Array<string>): tv.hd3g.processlauncher.cmdline.SimpleParameters;
					public conformParameterKey(parameterKey: string): string;
					public compareAndAlter(toCompare: tv.hd3g.processlauncher.cmdline.SimpleParameters, argValueChoice1: tv.hd3g.processlauncher.cmdline.ArgValueChoice, removeActualMissing: boolean, addComparedMissing: boolean): void;
					public addBulkParameters(params: string): tv.hd3g.processlauncher.cmdline.SimpleParameters;
					public alterParameter(parameterKey: string, newValue: string, paramAsThisKeyPos: number): boolean;
					public transfertThisConfigurationTo(newInstance: tv.hd3g.processlauncher.cmdline.SimpleParameters): tv.hd3g.processlauncher.cmdline.SimpleParameters;
					public clear(): tv.hd3g.processlauncher.cmdline.SimpleParameters;
					public count(): number;
					public prependParameters(params: java.util.Collection<string>): tv.hd3g.processlauncher.cmdline.SimpleParameters;
					public getValues(parameterKey: string): java.util.List<string>;
					public importParametersFrom(previousInstance: tv.hd3g.processlauncher.cmdline.SimpleParameters): tv.hd3g.processlauncher.cmdline.SimpleParameters;
					public setParametersKeysStartsWith(parameterKeysStartsWith: string): tv.hd3g.processlauncher.cmdline.SimpleParameters;
					public replaceParameters(newParameters: java.util.Collection<any>): tv.hd3g.processlauncher.cmdline.SimpleParameters;
					public addAllFrom(source: tv.hd3g.processlauncher.cmdline.SimpleParameters): void;
					public getParameters(): java.util.List<string>;
					public addParameters(params: native.Array<string>): tv.hd3g.processlauncher.cmdline.SimpleParameters;
					public prependBulkParameters(params: string): tv.hd3g.processlauncher.cmdline.SimpleParameters;
					public exportToExternalCommandLine(processExecFile: string): string;
					public addParameters(params: java.util.Collection<string>): tv.hd3g.processlauncher.cmdline.SimpleParameters;
				}
			}
		}
	}
}

declare module tv {
	export module hd3g {
		export module processlauncher {
			export module tool {
				export class ExecutableTool extends java.lang.Object {
					public static class: java.lang.Class<tv.hd3g.processlauncher.tool.ExecutableTool>;
					/**
					 * Constructs a new instance of the tv.hd3g.processlauncher.tool.ExecutableTool interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getReadyToRunParameters(): tv.hd3g.processlauncher.cmdline.Parameters;
						getExecutableName(): string;
						beforeRun(processBuilder: tv.hd3g.processlauncher.ProcesslauncherBuilder): void;
						filterOutErrorLines(): any /* any*/;
						lambda$filterOutErrorLines$0(p: string): boolean;
					});
					public constructor();
					public getExecutableName(): string;
					public beforeRun(processBuilder: tv.hd3g.processlauncher.ProcesslauncherBuilder): void;
					public getReadyToRunParameters(): tv.hd3g.processlauncher.cmdline.Parameters;
					public filterOutErrorLines(): any /* any*/;
				}
			}
		}
	}
}

declare module tv {
	export module hd3g {
		export module processlauncher {
			export module tool {
				export class ToolRunner extends java.lang.Object {
					public static class: java.lang.Class<tv.hd3g.processlauncher.tool.ToolRunner>;
					public constructor(executableFinder: tv.hd3g.processlauncher.cmdline.ExecutableFinder);
					public getExecutableFinder(): tv.hd3g.processlauncher.cmdline.ExecutableFinder;
					public execute(execTool: tv.hd3g.processlauncher.tool.ExecutableTool): tv.hd3g.processlauncher.tool.ToolRunner.RunningTool<any>;
				}
				export module ToolRunner {
					export class RunningTool<T>  extends java.lang.Object {
						public static class: java.lang.Class<tv.hd3g.processlauncher.tool.ToolRunner.RunningTool<any>>;
						public getExecutableToolSource(): T;
						public waitForEnd(): tv.hd3g.processlauncher.tool.ToolRunner.RunningTool<T>;
						public getLifecyle(): tv.hd3g.processlauncher.ProcesslauncherLifecycle;
						public checkExecutionGetText(): tv.hd3g.processlauncher.CapturedStdOutErrTextRetention;
						public waitForEndAndCheckExecution(): tv.hd3g.processlauncher.tool.ToolRunner.RunningTool<T>;
						public getTextRetention(): tv.hd3g.processlauncher.CapturedStdOutErrTextRetention;
					}
				}
			}
		}
	}
}

//Generics information:
//tv.hd3g.processlauncher.tool.ToolRunner.RunningTool:1

