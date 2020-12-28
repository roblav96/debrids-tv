declare module tv {
	export module hd3g {
		export module fflauncher {
			export class ConversionTool extends java.lang.Object implements tv.hd3g.processlauncher.tool.ExecutableTool {
				public static class: java.lang.Class<tv.hd3g.fflauncher.ConversionTool>;
				public execName: string;
				public inputSources: java.util.List<tv.hd3g.fflauncher.ConversionToolParameterReference>;
				public outputExpectedDestinations: java.util.List<tv.hd3g.fflauncher.ConversionToolParameterReference>;
				public parameters: tv.hd3g.processlauncher.cmdline.Parameters;
				public static APPEND_PARAM_AT_END: any /* any<tv.hd3g.processlauncher.cmdline.Parameters,string>*/;
				public static PREPEND_PARAM_AT_START: any /* any<tv.hd3g.processlauncher.cmdline.Parameters,string>*/;
				public getDeclaredDestinations(): java.util.List<string>;
				public setMaxExecutionTimeForShortCommands(max_exec_time: number, unit: java.util.concurrent.TimeUnit): tv.hd3g.fflauncher.ConversionTool;
				public getDeclaredSourceByVarName(var_name: string): java.util.Optional<string>;
				public getExecutableName(): string;
				public addOutputDestination(destination: string, varNameInParameters: string, parametersBeforeOutputDestination: java.util.Collection<string>): tv.hd3g.fflauncher.ConversionTool;
				public patchVarName(rawVarName: string): string;
				public checkSources(): tv.hd3g.fflauncher.ConversionTool;
				public getDeclaredSources(): java.util.List<string>;
				public getParametersVariables(): java.util.Map<string,tv.hd3g.processlauncher.cmdline.Parameters>;
				public getStdErrPrintStreamToDisplayLinesEvents(): java.io.PrintStream;
				public addOutputDestination(destination: java.io.File, varNameInParameters: string, parametersBeforeOutputDestination: java.util.Collection<string>): tv.hd3g.fflauncher.ConversionTool;
				public fixIOParametredVars(): void;
				public addInputSource(source: string, varNameInParameters: string, parametersBeforeInputSource: java.util.Collection<string>): tv.hd3g.fflauncher.ConversionTool;
				public addInputSource(source: java.io.File, varNameInParameters: string, parametersBeforeInputSource: java.util.Collection<string>): tv.hd3g.fflauncher.ConversionTool;
				public filterOutErrorLines(): any /* any*/;
				public setFilterForLinesEventsToDisplay(filterForLinesEventsToDisplay: any /* any*/): tv.hd3g.fflauncher.ConversionTool;
				public getMaxExecTimeScheduler(): java.util.concurrent.ScheduledExecutorService;
				public getInternalParameters(): tv.hd3g.processlauncher.cmdline.Parameters;
				public getReadyToRunParameters(): tv.hd3g.processlauncher.cmdline.Parameters;
				public addInputSource(source: string, varNameInParameters: string, parametersBeforeInputSource: native.Array<string>): tv.hd3g.fflauncher.ConversionTool;
				public addSimpleOutputDestination(destinationName: string): tv.hd3g.fflauncher.ConversionTool;
				public addInputSource(source: java.io.File, varNameInParameters: string, parametersBeforeInputSource: native.Array<string>): tv.hd3g.fflauncher.ConversionTool;
				public setOnErrorDeleteOutFiles(onErrorDeleteOutFiles: boolean): tv.hd3g.fflauncher.ConversionTool;
				public constructor(execName: string);
				public isCheckSourcesBeforeReady(): boolean;
				public fixIOParametredVars(onMissingInputVar: any /* any<tv.hd3g.processlauncher.cmdline.Parameters,string>*/, onMissingOutputVar: any /* any<tv.hd3g.processlauncher.cmdline.Parameters,string>*/): void;
				public constructor(execName: string, parameters: tv.hd3g.processlauncher.cmdline.Parameters);
				public addOutputDestination(destination: java.io.File, varNameInParameters: string, parametersBeforeOutputDestination: native.Array<string>): tv.hd3g.fflauncher.ConversionTool;
				public addOutputDestination(destination: string, varNameInParameters: string, parametersBeforeOutputDestination: native.Array<string>): tv.hd3g.fflauncher.ConversionTool;
				public addSimpleOutputDestination(destinationFile: java.io.File): tv.hd3g.fflauncher.ConversionTool;
				public getOutputFiles(filterPolicy: tv.hd3g.fflauncher.enums.OutputFilePresencePolicy): java.util.List<java.io.File>;
				public getDeclaredDestinationByVarName(var_name: string): java.util.Optional<string>;
				public setRemoveParamsIfNoVarToInject(remove_params_if_no_var_to_inject: boolean): tv.hd3g.fflauncher.ConversionTool;
				public getFilterForLinesEventsToDisplay(): java.util.Optional<any>;
				public isOnErrorDeleteOutFiles(): boolean;
				public getStdOutPrintStreamToDisplayLinesEvents(): java.io.PrintStream;
				public beforeRun(processBuilder: tv.hd3g.processlauncher.ProcesslauncherBuilder): void;
				public checkDestinations(): tv.hd3g.fflauncher.ConversionTool;
				public getWorkingDirectory(): java.io.File;
				public setMaxExecTimeScheduler(maxExecTimeScheduler: java.util.concurrent.ScheduledExecutorService): tv.hd3g.fflauncher.ConversionTool;
				public cleanUpOutputFiles(remove_all: boolean, clean_output_directories: boolean): tv.hd3g.fflauncher.ConversionTool;
				public setCheckSourcesBeforeReady(checkSourcesBeforeReady: boolean): tv.hd3g.fflauncher.ConversionTool;
				public getMaxExecTime(unit: java.util.concurrent.TimeUnit): number;
				public isRemoveParamsIfNoVarToInject(): boolean;
				public setWorkingDirectory(workingDirectory: java.io.File): tv.hd3g.fflauncher.ConversionTool;
				public onMissingInputOutputVar(var_name: string, ressource: string): void;
			}
		}
	}
}

declare module tv {
	export module hd3g {
		export module fflauncher {
			export class ConversionToolParameterReference extends java.lang.Object {
				public static class: java.lang.Class<tv.hd3g.fflauncher.ConversionToolParameterReference>;
				public toString(): string;
			}
		}
	}
}

declare module tv {
	export module hd3g {
		export module fflauncher {
			export class FFbase extends tv.hd3g.fflauncher.ConversionTool {
				public static class: java.lang.Class<tv.hd3g.fflauncher.FFbase>;
				public constructor(execName: string);
				public isOverwriteOutputFiles(): boolean;
				public constructor(execName: string, parameters: tv.hd3g.processlauncher.cmdline.Parameters);
				public setLogLevel(level: tv.hd3g.fflauncher.enums.FFLogLevel, repeat: boolean, display_level: boolean): tv.hd3g.fflauncher.FFbase;
				public addSimpleInputSource(sourceName: string, sourceOptions: native.Array<string>): tv.hd3g.fflauncher.FFbase;
				public getExecutableName(): string;
				public getStdErrPrintStreamToDisplayLinesEvents(): java.io.PrintStream;
				public addSimpleInputSource(sourceName: string, sourceOptions: java.util.List<string>): tv.hd3g.fflauncher.FFbase;
				public getAbout(executableFinder: tv.hd3g.processlauncher.cmdline.ExecutableFinder): tv.hd3g.fflauncher.about.FFAbout;
				public isLogLevelSet(): boolean;
				public addSimpleOutputDestination(destinationFile: java.io.File): tv.hd3g.fflauncher.ConversionTool;
				public filterOutErrorLines(): any /* any*/;
				public addSimpleInputSource(file: java.io.File, sourceOptions: java.util.List<string>): tv.hd3g.fflauncher.FFbase;
				public beforeRun(processBuilder: tv.hd3g.processlauncher.ProcesslauncherBuilder): void;
				public isHidebanner(): boolean;
				public setOverwriteOutputFiles(): tv.hd3g.fflauncher.FFbase;
				public setHidebanner(): tv.hd3g.fflauncher.FFbase;
				public addSimpleInputSource(file: java.io.File, sourceOptions: native.Array<string>): tv.hd3g.fflauncher.FFbase;
				public getReadyToRunParameters(): tv.hd3g.processlauncher.cmdline.Parameters;
				public setNeverOverwriteOutputFiles(): tv.hd3g.fflauncher.FFbase;
				public isNeverOverwriteOutputFiles(): boolean;
				public checkFiltersAvailability(executableFinder: tv.hd3g.processlauncher.cmdline.ExecutableFinder): java.util.List<tv.hd3g.fflauncher.filtering.Filter>;
				public addSimpleOutputDestination(destinationName: string): tv.hd3g.fflauncher.ConversionTool;
			}
		}
	}
}

declare module tv {
	export module hd3g {
		export module fflauncher {
			export class FFmpeg extends tv.hd3g.fflauncher.FFbase implements tv.hd3g.fflauncher.InputGeneratorsTraits {
				public static class: java.lang.Class<tv.hd3g.fflauncher.FFmpeg>;
				public addBitrate(bitrate: number, bitrateUnit: tv.hd3g.fflauncher.enums.FFUnit, outputVideoStreamIndex: number): tv.hd3g.fflauncher.FFmpeg;
				public static getFirstVideoStream(analysingResult: tv.hd3g.ffprobejaxb.FFprobeJAXB): java.util.Optional<org.ffmpeg.ffprobe.StreamType>;
				public addSimpleOutputDestination(destinationName: string, destinationContainer: string): tv.hd3g.fflauncher.FFmpeg;
				public getExecutableName(): string;
				public addHardwareNVScalerFilter(newSize: java.awt.Point, pixelFormat: string, interpAlgo: string): tv.hd3g.fflauncher.FFmpeg;
				public addQMinMax(qmin: number, qmax: number): tv.hd3g.fflauncher.FFmpeg;
				public addVsync(value: number): tv.hd3g.fflauncher.FFmpeg;
				public addSimpleOutputDestination(destinationFile: java.io.File, destinationContainer: string): tv.hd3g.fflauncher.FFmpeg;
				public addIBQfactor(i_qfactor: number, b_qfactor: number): tv.hd3g.fflauncher.FFmpeg;
				public filterOutErrorLines(): any /* any*/;
				public setDeviceIdToUse(deviceIdToUse: number): tv.hd3g.fflauncher.FFmpeg;
				public getReadyToRunParameters(): tv.hd3g.processlauncher.cmdline.Parameters;
				public addSimpleOutputDestination(destinationName: string): tv.hd3g.fflauncher.ConversionTool;
				public constructor(execName: string);
				public addGOPControl(b_frames: number, gop_size: number, ref_frames: number): tv.hd3g.fflauncher.FFmpeg;
				public addAudioCodecName(codecName: string, outputAudioStreamIndex: number): tv.hd3g.fflauncher.FFmpeg;
				public constructor(execName: string, parameters: tv.hd3g.processlauncher.cmdline.Parameters);
				public addHardwareVideoDecoding(source: string, analysingResult: tv.hd3g.ffprobejaxb.FFprobeJAXB, hardwareCodec: tv.hd3g.fflauncher.FFmpeg.FFHardwareCodec, about: tv.hd3g.fflauncher.about.FFAbout): tv.hd3g.fflauncher.FFmpeg;
				public addSimpleInputSource(sourceName: string, sourceOptions: native.Array<string>): tv.hd3g.fflauncher.FFbase;
				public addBitrateControl(minRate: number, maxRate: number, bufsize: number, bitrateUnit: tv.hd3g.fflauncher.enums.FFUnit): tv.hd3g.fflauncher.FFmpeg;
				public addVideoCodecName(codecName: string, outputVideoStreamIndex: number): tv.hd3g.fflauncher.FFmpeg;
				public getDeviceIdToUse(): number;
				public addSimpleInputSource(sourceName: string, sourceOptions: java.util.List<string>): tv.hd3g.fflauncher.FFbase;
				public addSimpleOutputDestination(destinationFile: java.io.File): tv.hd3g.fflauncher.ConversionTool;
				public addHardwareNVMultipleScalerFilterComplex(configuration: java.util.Map<string,string>): tv.hd3g.fflauncher.FFmpeg;
				public addPreset(preset: tv.hd3g.fflauncher.FFmpeg.Preset): tv.hd3g.fflauncher.FFmpeg;
				public addSmptehdbarsGeneratorAsInputSource(resolution: java.awt.Point, durationInSec: number, frameRate: string): void;
				public addCRF(crf: number): tv.hd3g.fflauncher.FFmpeg;
				public addSimpleInputSource(file: java.io.File, sourceOptions: java.util.List<string>): tv.hd3g.fflauncher.FFbase;
				public addMap(sourceIndex: number, streamIndexInSource: number): tv.hd3g.fflauncher.FFmpeg;
				public beforeRun(processBuilder: tv.hd3g.processlauncher.ProcesslauncherBuilder): void;
				public addTune(tune: tv.hd3g.fflauncher.FFmpeg.Tune): tv.hd3g.fflauncher.FFmpeg;
				public addHardwareVideoEncoding(destCodecName: string, outputVideoStreamIndex: number, hardwareCodec: tv.hd3g.fflauncher.FFmpeg.FFHardwareCodec, about: tv.hd3g.fflauncher.about.FFAbout): tv.hd3g.fflauncher.FFmpeg;
				public addSineAudioGeneratorAsInputSource(frequency: number, durationInSec: number, sampleRate: number): void;
				public addSimpleInputSource(file: java.io.File, sourceOptions: native.Array<string>): tv.hd3g.fflauncher.FFbase;
				public addFastStartMovMp4File(): tv.hd3g.fflauncher.FFmpeg;
			}
			export module FFmpeg {
				export class FFHardwareCodec {
					public static class: java.lang.Class<tv.hd3g.fflauncher.FFmpeg.FFHardwareCodec>;
					public static NV: tv.hd3g.fflauncher.FFmpeg.FFHardwareCodec;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static values(): native.Array<tv.hd3g.fflauncher.FFmpeg.FFHardwareCodec>;
					public static valueOf(name: string): tv.hd3g.fflauncher.FFmpeg.FFHardwareCodec;
				}
				export class Preset {
					public static class: java.lang.Class<tv.hd3g.fflauncher.FFmpeg.Preset>;
					public static ULTRAFAST: tv.hd3g.fflauncher.FFmpeg.Preset;
					public static SUPERFAST: tv.hd3g.fflauncher.FFmpeg.Preset;
					public static VERYFAST: tv.hd3g.fflauncher.FFmpeg.Preset;
					public static FASTER: tv.hd3g.fflauncher.FFmpeg.Preset;
					public static FAST: tv.hd3g.fflauncher.FFmpeg.Preset;
					public static MEDIUM: tv.hd3g.fflauncher.FFmpeg.Preset;
					public static SLOW: tv.hd3g.fflauncher.FFmpeg.Preset;
					public static SLOWER: tv.hd3g.fflauncher.FFmpeg.Preset;
					public static VERYSLOW: tv.hd3g.fflauncher.FFmpeg.Preset;
					public static PLACEBO: tv.hd3g.fflauncher.FFmpeg.Preset;
					public toString(): string;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static values(): native.Array<tv.hd3g.fflauncher.FFmpeg.Preset>;
					public static valueOf(name: string): tv.hd3g.fflauncher.FFmpeg.Preset;
				}
				export class Tune {
					public static class: java.lang.Class<tv.hd3g.fflauncher.FFmpeg.Tune>;
					public static FILM: tv.hd3g.fflauncher.FFmpeg.Tune;
					public static ANIMATION: tv.hd3g.fflauncher.FFmpeg.Tune;
					public static GRAIN: tv.hd3g.fflauncher.FFmpeg.Tune;
					public static STILLIMAGE: tv.hd3g.fflauncher.FFmpeg.Tune;
					public static PSNR: tv.hd3g.fflauncher.FFmpeg.Tune;
					public static SSIM: tv.hd3g.fflauncher.FFmpeg.Tune;
					public static FASTDECODE: tv.hd3g.fflauncher.FFmpeg.Tune;
					public static ZEROLATENCY: tv.hd3g.fflauncher.FFmpeg.Tune;
					public static values(): native.Array<tv.hd3g.fflauncher.FFmpeg.Tune>;
					public toString(): string;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static valueOf(name: string): tv.hd3g.fflauncher.FFmpeg.Tune;
				}
			}
		}
	}
}

declare module tv {
	export module hd3g {
		export module fflauncher {
			export class FFprobe extends tv.hd3g.fflauncher.FFbase {
				public static class: java.lang.Class<tv.hd3g.fflauncher.FFprobe>;
				public setShowData(): tv.hd3g.fflauncher.FFprobe;
				public isShowStreams(): boolean;
				public isShowPrograms(): boolean;
				public setShowChapters(): tv.hd3g.fflauncher.FFprobe;
				public setShowPackets(): tv.hd3g.fflauncher.FFprobe;
				public getExecutableName(): string;
				public setShowFormat(): tv.hd3g.fflauncher.FFprobe;
				public isShowFormat(): boolean;
				public filterOutErrorLines(): any /* any*/;
				public setShowLog(): tv.hd3g.fflauncher.FFprobe;
				public hasPrintFormat(): boolean;
				public isShowChapters(): boolean;
				public setShowStreams(): tv.hd3g.fflauncher.FFprobe;
				public setPrintFormat(printFormat: tv.hd3g.fflauncher.FFprobe.FFPrintFormat): tv.hd3g.fflauncher.FFprobe;
				public getReadyToRunParameters(): tv.hd3g.processlauncher.cmdline.Parameters;
				public isShowData(): boolean;
				public setShowFrames(): tv.hd3g.fflauncher.FFprobe;
				public constructor(execName: string);
				public constructor(execName: string, parameters: tv.hd3g.processlauncher.cmdline.Parameters);
				public setShowError(): tv.hd3g.fflauncher.FFprobe;
				public isPretty(): boolean;
				public isShowError(): boolean;
				public setPretty(): tv.hd3g.fflauncher.FFprobe;
				public setShowPrograms(): tv.hd3g.fflauncher.FFprobe;
				public isShowLog(): boolean;
				public beforeRun(processBuilder: tv.hd3g.processlauncher.ProcesslauncherBuilder): void;
				public isShowPackets(): boolean;
				public isShowFrames(): boolean;
			}
			export module FFprobe {
				export class FFPrintFormat {
					public static class: java.lang.Class<tv.hd3g.fflauncher.FFprobe.FFPrintFormat>;
					public static BY_DEFAULT: tv.hd3g.fflauncher.FFprobe.FFPrintFormat;
					public static COMPACT: tv.hd3g.fflauncher.FFprobe.FFPrintFormat;
					public static CSV: tv.hd3g.fflauncher.FFprobe.FFPrintFormat;
					public static FLAT: tv.hd3g.fflauncher.FFprobe.FFPrintFormat;
					public static INI: tv.hd3g.fflauncher.FFprobe.FFPrintFormat;
					public static JSON: tv.hd3g.fflauncher.FFprobe.FFPrintFormat;
					public static XML: tv.hd3g.fflauncher.FFprobe.FFPrintFormat;
					public static values(): native.Array<tv.hd3g.fflauncher.FFprobe.FFPrintFormat>;
					public toString(): string;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static valueOf(name: string): tv.hd3g.fflauncher.FFprobe.FFPrintFormat;
				}
			}
		}
	}
}

declare module tv {
	export module hd3g {
		export module fflauncher {
			export class InputGeneratorsTraits extends java.lang.Object {
				public static class: java.lang.Class<tv.hd3g.fflauncher.InputGeneratorsTraits>;
				/**
				 * Constructs a new instance of the tv.hd3g.fflauncher.InputGeneratorsTraits interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					addSimpleInputSource(string0: string, strings1: native.Array<string>): tv.hd3g.fflauncher.FFbase;
					addSmptehdbarsGeneratorAsInputSource(resolution: java.awt.Point, durationInSec: number, frameRate: string): void;
					addSineAudioGeneratorAsInputSource(frequency: number, durationInSec: number, sampleRate: number): void;
				});
				public constructor();
				public addSmptehdbarsGeneratorAsInputSource(resolution: java.awt.Point, durationInSec: number, frameRate: string): void;
				public addSineAudioGeneratorAsInputSource(frequency: number, durationInSec: number, sampleRate: number): void;
				public addSimpleInputSource(string0: string, strings1: native.Array<string>): tv.hd3g.fflauncher.FFbase;
			}
		}
	}
}

declare module tv {
	export module hd3g {
		export module fflauncher {
			export class MediaException extends java.lang.Exception {
				public static class: java.lang.Class<tv.hd3g.fflauncher.MediaException>;
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
		export module fflauncher {
			export class UnknownFormatException extends java.lang.RuntimeException {
				public static class: java.lang.Class<tv.hd3g.fflauncher.UnknownFormatException>;
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
		export module fflauncher {
			export module about {
				export class FFAbout extends java.lang.Object {
					public static class: java.lang.Class<tv.hd3g.fflauncher.about.FFAbout>;
					public static sample_formats: java.util.Map<string,java.lang.Integer>;
					public getFormats(): java.util.List<tv.hd3g.fflauncher.about.FFAboutFormat>;
					public getDevices(): java.util.List<tv.hd3g.fflauncher.about.FFAboutDevice>;
					public getAvailableHWAccelerationMethods(): java.util.Set<string>;
					public isDecoderIsAvaliable(codec_name: string): boolean;
					public isFromFormatIsAvaliable(demuxer_name: string): boolean;
					public getPixelFormats(): java.util.List<tv.hd3g.fflauncher.about.FFAboutPixelFormat>;
					public isDecoderEngineIsAvaliable(engine_name: string): boolean;
					public isFilterIsAvaliable(filter_name: string): boolean;
					public getBitStreamFilters(): java.util.Set<string>;
					public getFilters(): java.util.List<tv.hd3g.fflauncher.about.FFAboutFilter>;
					public getCodecs(): java.util.List<tv.hd3g.fflauncher.about.FFAboutCodec>;
					public isCoderEngineIsAvaliable(engine_name: string): boolean;
					public isHardwareNVScalerFilterIsAvaliable(): boolean;
					public getProtocols(): tv.hd3g.fflauncher.about.FFAboutProtocols;
					public isToFormatIsAvaliable(muxer_name: string): boolean;
					public getVersion(): tv.hd3g.fflauncher.about.FFAboutVersion;
					public constructor(execName: string, executableFinder: tv.hd3g.processlauncher.cmdline.ExecutableFinder, maxExecTimeScheduler: java.util.concurrent.ScheduledExecutorService);
					public isCoderIsAvaliable(codec_name: string): boolean;
					public isNVToolkitIsAvaliable(): boolean;
				}
			}
		}
	}
}

declare module tv {
	export module hd3g {
		export module fflauncher {
			export module about {
				export class FFAboutCodec extends java.lang.Object {
					public static class: java.lang.Class<tv.hd3g.fflauncher.about.FFAboutCodec>;
					public decodingSupported: boolean;
					public encodingSupported: boolean;
					public type: tv.hd3g.fflauncher.about.FFAboutCodec.CodecType;
					public intraFrameOnly: boolean;
					public lossyCompression: boolean;
					public losslessCompression: boolean;
					public encoders: java.util.Set<string>;
					public decoders: java.util.Set<string>;
					public name: string;
					public longName: string;
					public toString(): string;
				}
				export module FFAboutCodec {
					export class CodecType {
						public static class: java.lang.Class<tv.hd3g.fflauncher.about.FFAboutCodec.CodecType>;
						public static VIDEO: tv.hd3g.fflauncher.about.FFAboutCodec.CodecType;
						public static AUDIO: tv.hd3g.fflauncher.about.FFAboutCodec.CodecType;
						public static SUBTITLE: tv.hd3g.fflauncher.about.FFAboutCodec.CodecType;
						public static DATA: tv.hd3g.fflauncher.about.FFAboutCodec.CodecType;
						public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
						public static valueOf(name: string): tv.hd3g.fflauncher.about.FFAboutCodec.CodecType;
						public static values(): native.Array<tv.hd3g.fflauncher.about.FFAboutCodec.CodecType>;
					}
				}
			}
		}
	}
}

declare module tv {
	export module hd3g {
		export module fflauncher {
			export module about {
				export class FFAboutDevice extends tv.hd3g.fflauncher.about.FFAboutFormat {
					public static class: java.lang.Class<tv.hd3g.fflauncher.about.FFAboutDevice>;
				}
			}
		}
	}
}

declare module tv {
	export module hd3g {
		export module fflauncher {
			export module about {
				export class FFAboutFilter extends java.lang.Object {
					public static class: java.lang.Class<tv.hd3g.fflauncher.about.FFAboutFilter>;
					public getDestConnectorsCount(): number;
					public toString(): string;
					public getLongName(): string;
					public getSourceConnectorsCount(): number;
					public getDestConnector(): tv.hd3g.fflauncher.enums.FilterConnectorType;
					public isTimelineSupport(): boolean;
					public getSourceConnector(): tv.hd3g.fflauncher.enums.FilterConnectorType;
					public isSliceThreading(): boolean;
					public getTag(): string;
					public isCommandSupport(): boolean;
				}
			}
		}
	}
}

declare module tv {
	export module hd3g {
		export module fflauncher {
			export module about {
				export class FFAboutFormat extends java.lang.Object {
					public static class: java.lang.Class<tv.hd3g.fflauncher.about.FFAboutFormat>;
					public demuxing: boolean;
					public muxing: boolean;
					public name: string;
					public alternateTags: java.util.Set<string>;
					public longName: string;
					public toString(): string;
				}
			}
		}
	}
}

declare module tv {
	export module hd3g {
		export module fflauncher {
			export module about {
				export class FFAboutPixelFormat extends java.lang.Object {
					public static class: java.lang.Class<tv.hd3g.fflauncher.about.FFAboutPixelFormat>;
					public supportedInput: boolean;
					public supportedOutput: boolean;
					public hardwareAccelerated: boolean;
					public paletted: boolean;
					public bitstream: boolean;
					public nbComponents: number;
					public bitsPerPixel: number;
					public tag: string;
				}
			}
		}
	}
}

declare module tv {
	export module hd3g {
		export module fflauncher {
			export module about {
				export class FFAboutProtocols extends java.lang.Object {
					public static class: java.lang.Class<tv.hd3g.fflauncher.about.FFAboutProtocols>;
					public input: java.util.Set<string>;
					public output: java.util.Set<string>;
				}
			}
		}
	}
}

declare module tv {
	export module hd3g {
		export module fflauncher {
			export module about {
				export class FFAboutVersion extends java.lang.Object {
					public static class: java.lang.Class<tv.hd3g.fflauncher.about.FFAboutVersion>;
					public headerVersion: string;
					public builtWith: string;
					public configuration: java.util.Set<string>;
					public rawConfiguration: string;
					public libavutilVersion: string;
					public libavcodecVersion: string;
					public libavformatVersion: string;
					public libavdeviceVersion: string;
					public libavfilterVersion: string;
					public libswscaleVersion: string;
					public libswresampleVersion: string;
					public libpostprocVersion: string;
					public toString(): string;
				}
			}
		}
	}
}

declare module tv {
	export module hd3g {
		export module fflauncher {
			export module acm {
				export abstract class ACMAudioChannelSelector extends java.lang.Comparable<tv.hd3g.fflauncher.acm.ACMAudioChannelSelector> {
					public static class: java.lang.Class<tv.hd3g.fflauncher.acm.ACMAudioChannelSelector>;
					public equals(obj: any): boolean;
					public hashCode(): number;
					public compareTo(o: tv.hd3g.fflauncher.acm.ACMAudioChannelSelector): number;
				}
			}
		}
	}
}

declare module tv {
	export module hd3g {
		export module fflauncher {
			export module acm {
				export abstract class ACMAudioStream extends java.lang.Object implements tv.hd3g.fflauncher.acm.ACMExportableMapReference {
					public static class: java.lang.Class<tv.hd3g.fflauncher.acm.ACMAudioStream>;
					public equals(obj: any): boolean;
					public hashCode(): number;
					public toMapReferenceAsInput(): string;
				}
			}
		}
	}
}

declare module tv {
	export module hd3g {
		export module fflauncher {
			export module acm {
				export class ACMAudioStreamToSplitList extends java.util.ArrayList<tv.hd3g.fflauncher.acm.ACMSplitInStreamDefinitionFilter> {
					public static class: java.lang.Class<tv.hd3g.fflauncher.acm.ACMAudioStreamToSplitList>;
					public toArray(a: native.Array<any>): native.Array<any>;
					public isEmpty(): boolean;
					public spliterator(): java.util.Spliterator<any>;
					public subList(fromIndex: number, toIndex: number): java.util.List<any>;
					public addAll(c: java.util.Collection<any>): boolean;
					public get(index: number): any;
					public set(index: number, element: any): any;
					public size(): number;
					public equals(o: any): boolean;
					public remove(index: number): any;
					public contains(o: any): boolean;
					public lastIndexOf(o: any): number;
					public iterator(): java.util.Iterator<any>;
					public removeAll(c: java.util.Collection<any>): boolean;
					public toArray(): native.Array<any>;
					public containCondition(): any /* any<tv.hd3g.fflauncher.acm.ACMSplitInStreamDefinitionFilter,tv.hd3g.fflauncher.acm.InputAudioStream>*/;
					public clear(): void;
					public remove(o: any): boolean;
					public containsAll(c: java.util.Collection<any>): boolean;
					public listIterator(index: number): java.util.ListIterator<any>;
					public hashCode(): number;
					public parallelStream(): java.util.stream.Stream<any>;
					public add(e: any): boolean;
					public retainAll(c: java.util.Collection<any>): boolean;
					public sort(c: java.util.Comparator<any>): void;
					public indexOf(o: any): number;
					public add(index: number, element: any): void;
					public removeIf(filter: any /* any*/): boolean;
					public addAll(index: number, c: java.util.Collection<any>): boolean;
					public listIterator(): java.util.ListIterator<any>;
					public stream(): java.util.stream.Stream<any>;
					public replaceAll(operator: any /* any*/): void;
				}
			}
		}
	}
}

declare module tv {
	export module hd3g {
		export module fflauncher {
			export module acm {
				export class ACMExportableMapReference extends java.lang.Object {
					public static class: java.lang.Class<tv.hd3g.fflauncher.acm.ACMExportableMapReference>;
					/**
					 * Constructs a new instance of the tv.hd3g.fflauncher.acm.ACMExportableMapReference interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						toMapReferenceAsInput(): string;
					});
					public constructor();
					public toMapReferenceAsInput(): string;
				}
			}
		}
	}
}

declare module tv {
	export module hd3g {
		export module fflauncher {
			export module acm {
				export class ACMLinkableOutStreamReference extends java.lang.Object {
					public static class: java.lang.Class<tv.hd3g.fflauncher.acm.ACMLinkableOutStreamReference>;
					/**
					 * Constructs a new instance of the tv.hd3g.fflauncher.acm.ACMLinkableOutStreamReference interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getLinkableOutStreamReference(): tv.hd3g.fflauncher.acm.OutputAudioStream;
					});
					public constructor();
					public getLinkableOutStreamReference(): tv.hd3g.fflauncher.acm.OutputAudioStream;
				}
			}
		}
	}
}

declare module tv {
	export module hd3g {
		export module fflauncher {
			export module acm {
				export abstract class ACMListIndexPositionHandler extends java.lang.Object implements tv.hd3g.fflauncher.acm.ACMExportableMapReference, tv.hd3g.fflauncher.acm.ACMLinkableOutStreamReference {
					public static class: java.lang.Class<tv.hd3g.fflauncher.acm.ACMListIndexPositionHandler>;
					public absolutePosIndex: number;
					public toString(): string;
					public toMapReferenceAsInput(): string;
					public getLinkableOutStreamReference(): tv.hd3g.fflauncher.acm.OutputAudioStream;
				}
			}
		}
	}
}

declare module tv {
	export module hd3g {
		export module fflauncher {
			export module acm {
				export class ACMMapDirectly extends java.lang.Object implements tv.hd3g.fflauncher.acm.ACMExportableMapReference, tv.hd3g.fflauncher.acm.ACMLinkableOutStreamReference {
					public static class: java.lang.Class<tv.hd3g.fflauncher.acm.ACMMapDirectly>;
					public toMapReferenceAsInput(): string;
					public getLinkableOutStreamReference(): tv.hd3g.fflauncher.acm.OutputAudioStream;
				}
			}
		}
	}
}

declare module tv {
	export module hd3g {
		export module fflauncher {
			export module acm {
				export class ACMMergeJoinToStreamDefinitionFilter extends tv.hd3g.fflauncher.acm.ACMListIndexPositionHandler {
					public static class: java.lang.Class<tv.hd3g.fflauncher.acm.ACMMergeJoinToStreamDefinitionFilter>;
					public toString(): string;
					public toJoinFilter(): tv.hd3g.fflauncher.filtering.Filter;
					public toAmergeFilter(): tv.hd3g.fflauncher.filtering.Filter;
					public toMapReferenceAsInput(): string;
					public getLinkableOutStreamReference(): tv.hd3g.fflauncher.acm.OutputAudioStream;
				}
			}
		}
	}
}

declare module tv {
	export module hd3g {
		export module fflauncher {
			export module acm {
				export class ACMRemapDefinitionFilter extends tv.hd3g.fflauncher.acm.ACMListIndexPositionHandler {
					public static class: java.lang.Class<tv.hd3g.fflauncher.acm.ACMRemapDefinitionFilter>;
					public toMapReferenceAsInput(): string;
					public getLinkableOutStreamReference(): tv.hd3g.fflauncher.acm.OutputAudioStream;
					public toFilter(): tv.hd3g.fflauncher.filtering.Filter;
				}
			}
		}
	}
}

declare module tv {
	export module hd3g {
		export module fflauncher {
			export module acm {
				export class ACMSplitInStreamDefinitionFilter extends java.lang.Object {
					public static class: java.lang.Class<tv.hd3g.fflauncher.acm.ACMSplitInStreamDefinitionFilter>;
					public toString(): string;
				}
				export module ACMSplitInStreamDefinitionFilter {
					export class SplittedOut extends tv.hd3g.fflauncher.acm.ACMListIndexPositionHandler {
						public static class: java.lang.Class<tv.hd3g.fflauncher.acm.ACMSplitInStreamDefinitionFilter.SplittedOut>;
						public getLinkableOutStreamReference(): tv.hd3g.fflauncher.acm.OutputAudioStream;
						public toMapReferenceAsInput(): string;
					}
				}
			}
		}
	}
}

declare module tv {
	export module hd3g {
		export module fflauncher {
			export module acm {
				export class AudioChannelManipulation extends java.lang.Object {
					public static class: java.lang.Class<tv.hd3g.fflauncher.acm.AudioChannelManipulation>;
					public toString(): string;
					public getMapParameters(): java.util.List<tv.hd3g.processlauncher.cmdline.Parameters>;
					public getMapParameters(prependToMapList: java.util.List<string>): java.util.List<tv.hd3g.processlauncher.cmdline.Parameters>;
					public constructor(allOutputStreamList: java.util.List<tv.hd3g.fflauncher.acm.OutputAudioStream>);
					public getMapParameters(parametersMapper: any /* any<java.lang.Integer,tv.hd3g.fflauncher.acm.OutputAudioStream,tv.hd3g.processlauncher.cmdline.Parameters>*/): java.util.List<tv.hd3g.processlauncher.cmdline.Parameters>;
					public getMapParameters(sourceFiles: java.util.List<tv.hd3g.ffprobejaxb.FFprobeJAXB>, addNonAudioStreamFromSources: any /* any<java.lang.Integer,org.ffmpeg.ffprobe.StreamType>*/): java.util.List<tv.hd3g.processlauncher.cmdline.Parameters>;
					public getFilterChains(useJoinInsteadOfMerge: boolean): tv.hd3g.fflauncher.filtering.FilterChains;
				}
			}
		}
	}
}

declare module tv {
	export module hd3g {
		export module fflauncher {
			export module acm {
				export class AudioChannelManipulationSetup extends java.lang.Object {
					public static class: java.lang.Class<tv.hd3g.fflauncher.acm.AudioChannelManipulationSetup>;
					public getChannelMap(): java.util.List<string>;
					public setChannelMap(channelMap: java.util.List<string>): void;
					public setNotFound(notFound: tv.hd3g.fflauncher.enums.SourceNotFoundPolicy): void;
					public getAllOutputStreamList(sourcesAnalysis: java.util.List<tv.hd3g.ffprobejaxb.FFprobeJAXB>): java.util.List<tv.hd3g.fflauncher.acm.OutputAudioStream>;
					public constructor();
					public setOutputFileIndexes(outputFileIndexes: java.util.List<java.lang.Integer>): void;
					public getOutputFileIndexes(): java.util.List<java.lang.Integer>;
					public getNotFound(): tv.hd3g.fflauncher.enums.SourceNotFoundPolicy;
				}
				export module AudioChannelManipulationSetup {
					export class SetupBuilder extends java.lang.Object {
						public static class: java.lang.Class<tv.hd3g.fflauncher.acm.AudioChannelManipulationSetup.SetupBuilder>;
					}
					export module SetupBuilder {
						export class ChannelMap extends java.lang.Object {
							public static class: java.lang.Class<tv.hd3g.fflauncher.acm.AudioChannelManipulationSetup.SetupBuilder.ChannelMap>;
						}
					}
				}
			}
		}
	}
}

declare module tv {
	export module hd3g {
		export module fflauncher {
			export module acm {
				export class InputAudioChannelSelector extends tv.hd3g.fflauncher.acm.ACMAudioChannelSelector {
					public static class: java.lang.Class<tv.hd3g.fflauncher.acm.InputAudioChannelSelector>;
					public static IN_CH0: tv.hd3g.fflauncher.acm.InputAudioChannelSelector;
					public static IN_CH1: tv.hd3g.fflauncher.acm.InputAudioChannelSelector;
					public static IN_CH2: tv.hd3g.fflauncher.acm.InputAudioChannelSelector;
					public static IN_CH3: tv.hd3g.fflauncher.acm.InputAudioChannelSelector;
					public static IN_CH4: tv.hd3g.fflauncher.acm.InputAudioChannelSelector;
					public static IN_CH5: tv.hd3g.fflauncher.acm.InputAudioChannelSelector;
					public static IN_CH6: tv.hd3g.fflauncher.acm.InputAudioChannelSelector;
					public static IN_CH7: tv.hd3g.fflauncher.acm.InputAudioChannelSelector;
					public static IN_CH8: tv.hd3g.fflauncher.acm.InputAudioChannelSelector;
					public static IN_CH9: tv.hd3g.fflauncher.acm.InputAudioChannelSelector;
					public static IN_CH10: tv.hd3g.fflauncher.acm.InputAudioChannelSelector;
					public static IN_CH11: tv.hd3g.fflauncher.acm.InputAudioChannelSelector;
					public static IN_CH12: tv.hd3g.fflauncher.acm.InputAudioChannelSelector;
					public static IN_CH13: tv.hd3g.fflauncher.acm.InputAudioChannelSelector;
					public static IN_CH14: tv.hd3g.fflauncher.acm.InputAudioChannelSelector;
					public static IN_CH15: tv.hd3g.fflauncher.acm.InputAudioChannelSelector;
					public toString(): string;
					public constructor(posInStream: number);
				}
			}
		}
	}
}

declare module tv {
	export module hd3g {
		export module fflauncher {
			export module acm {
				export class InputAudioStream extends tv.hd3g.fflauncher.acm.ACMAudioStream {
					public static class: java.lang.Class<tv.hd3g.fflauncher.acm.InputAudioStream>;
					public static getListFromAnalysis(sourcesAnalysis: native.Array<tv.hd3g.ffprobejaxb.FFprobeJAXB>): java.util.List<tv.hd3g.fflauncher.acm.InputAudioStream>;
					public toString(): string;
					public static getListFromAnalysis(sourcesAnalysis: java.util.List<tv.hd3g.ffprobejaxb.FFprobeJAXB>): java.util.List<tv.hd3g.fflauncher.acm.InputAudioStream>;
					public constructor(layout: tv.hd3g.fflauncher.enums.ChannelLayout, fileIndex: number, streamIndex: number);
					public static getFromAbsoluteIndex(streamList: java.util.List<tv.hd3g.fflauncher.acm.InputAudioStream>, channelIndex: number): tv.hd3g.fflauncher.acm.InputAudioStream.SelectedInputChannel;
					public toMapReferenceAsInput(): string;
					public static getFromRelativeIndexes(streamList: java.util.List<tv.hd3g.fflauncher.acm.InputAudioStream>, fileIndex: number, audioStreamRelativeIndex: number): tv.hd3g.fflauncher.acm.InputAudioStream;
				}
				export module InputAudioStream {
					export class SelectedInputChannel extends java.lang.Object {
						public static class: java.lang.Class<tv.hd3g.fflauncher.acm.InputAudioStream.SelectedInputChannel>;
					}
				}
			}
		}
	}
}

declare module tv {
	export module hd3g {
		export module fflauncher {
			export module acm {
				export class OutputAudioChannelSelector extends tv.hd3g.fflauncher.acm.ACMAudioChannelSelector {
					public static class: java.lang.Class<tv.hd3g.fflauncher.acm.OutputAudioChannelSelector>;
					public static OUT_CH0: tv.hd3g.fflauncher.acm.OutputAudioChannelSelector;
					public static OUT_CH1: tv.hd3g.fflauncher.acm.OutputAudioChannelSelector;
					public static OUT_CH2: tv.hd3g.fflauncher.acm.OutputAudioChannelSelector;
					public static OUT_CH3: tv.hd3g.fflauncher.acm.OutputAudioChannelSelector;
					public static OUT_CH4: tv.hd3g.fflauncher.acm.OutputAudioChannelSelector;
					public static OUT_CH5: tv.hd3g.fflauncher.acm.OutputAudioChannelSelector;
					public static OUT_CH6: tv.hd3g.fflauncher.acm.OutputAudioChannelSelector;
					public static OUT_CH7: tv.hd3g.fflauncher.acm.OutputAudioChannelSelector;
					public static OUT_CH8: tv.hd3g.fflauncher.acm.OutputAudioChannelSelector;
					public static OUT_CH9: tv.hd3g.fflauncher.acm.OutputAudioChannelSelector;
					public static OUT_CH10: tv.hd3g.fflauncher.acm.OutputAudioChannelSelector;
					public static OUT_CH11: tv.hd3g.fflauncher.acm.OutputAudioChannelSelector;
					public static OUT_CH12: tv.hd3g.fflauncher.acm.OutputAudioChannelSelector;
					public static OUT_CH13: tv.hd3g.fflauncher.acm.OutputAudioChannelSelector;
					public static OUT_CH14: tv.hd3g.fflauncher.acm.OutputAudioChannelSelector;
					public static OUT_CH15: tv.hd3g.fflauncher.acm.OutputAudioChannelSelector;
					public toString(): string;
					public constructor(posInStream: number);
				}
			}
		}
	}
}

declare module tv {
	export module hd3g {
		export module fflauncher {
			export module acm {
				export class OutputAudioStream extends tv.hd3g.fflauncher.acm.ACMAudioStream implements java.lang.Comparable<tv.hd3g.fflauncher.acm.OutputAudioStream>  {
					public static class: java.lang.Class<tv.hd3g.fflauncher.acm.OutputAudioStream>;
					public toString(): string;
					public equals(obj: any): boolean;
					public compareTo(o: tv.hd3g.fflauncher.acm.OutputAudioStream): number;
					public constructor(layout: tv.hd3g.fflauncher.enums.ChannelLayout, fileIndex: number, streamIndex: number);
					public mapChannel(inputAudioStream: tv.hd3g.fflauncher.acm.InputAudioStream, chInIndex: tv.hd3g.fflauncher.acm.InputAudioChannelSelector, chOutIndex: tv.hd3g.fflauncher.acm.OutputAudioChannelSelector): tv.hd3g.fflauncher.acm.OutputAudioStream;
					public mapChannel(inputAudioStream: tv.hd3g.fflauncher.acm.InputAudioStream, chInIndex: tv.hd3g.fflauncher.acm.InputAudioChannelSelector): tv.hd3g.fflauncher.acm.OutputAudioStream;
					public toMapReferenceAsInput(): string;
				}
				export module OutputAudioStream {
					export class OutputAudioChannel extends java.lang.Comparable<tv.hd3g.fflauncher.acm.OutputAudioStream.OutputAudioChannel> {
						public static class: java.lang.Class<tv.hd3g.fflauncher.acm.OutputAudioStream.OutputAudioChannel>;
						public getEnclosingInstance(): tv.hd3g.fflauncher.acm.OutputAudioStream;
						public equals(obj: any): boolean;
						public hashCode(): number;
						public toString(): string;
						public compareTo(o: tv.hd3g.fflauncher.acm.OutputAudioStream.OutputAudioChannel): number;
					}
				}
			}
		}
	}
}

declare module tv {
	export module hd3g {
		export module fflauncher {
			export module enums {
				export class Channel {
					public static class: java.lang.Class<tv.hd3g.fflauncher.enums.Channel>;
					public static FL: tv.hd3g.fflauncher.enums.Channel;
					public static FR: tv.hd3g.fflauncher.enums.Channel;
					public static FC: tv.hd3g.fflauncher.enums.Channel;
					public static LFE: tv.hd3g.fflauncher.enums.Channel;
					public static BL: tv.hd3g.fflauncher.enums.Channel;
					public static BR: tv.hd3g.fflauncher.enums.Channel;
					public static FLC: tv.hd3g.fflauncher.enums.Channel;
					public static FRC: tv.hd3g.fflauncher.enums.Channel;
					public static BC: tv.hd3g.fflauncher.enums.Channel;
					public static SL: tv.hd3g.fflauncher.enums.Channel;
					public static SR: tv.hd3g.fflauncher.enums.Channel;
					public static TC: tv.hd3g.fflauncher.enums.Channel;
					public static TFL: tv.hd3g.fflauncher.enums.Channel;
					public static TFC: tv.hd3g.fflauncher.enums.Channel;
					public static TFR: tv.hd3g.fflauncher.enums.Channel;
					public static TBL: tv.hd3g.fflauncher.enums.Channel;
					public static TBC: tv.hd3g.fflauncher.enums.Channel;
					public static TBR: tv.hd3g.fflauncher.enums.Channel;
					public static DL: tv.hd3g.fflauncher.enums.Channel;
					public static DR: tv.hd3g.fflauncher.enums.Channel;
					public static WL: tv.hd3g.fflauncher.enums.Channel;
					public static WR: tv.hd3g.fflauncher.enums.Channel;
					public static SDL: tv.hd3g.fflauncher.enums.Channel;
					public static SDR: tv.hd3g.fflauncher.enums.Channel;
					public static LFE2: tv.hd3g.fflauncher.enums.Channel;
					public toString(): string;
					public static values(): native.Array<tv.hd3g.fflauncher.enums.Channel>;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public getLongName(): string;
					public static valueOf(name: string): tv.hd3g.fflauncher.enums.Channel;
				}
			}
		}
	}
}

declare module tv {
	export module hd3g {
		export module fflauncher {
			export module enums {
				export class ChannelLayout {
					public static class: java.lang.Class<tv.hd3g.fflauncher.enums.ChannelLayout>;
					public static MONO: tv.hd3g.fflauncher.enums.ChannelLayout;
					public static STEREO: tv.hd3g.fflauncher.enums.ChannelLayout;
					public static CH2_1: tv.hd3g.fflauncher.enums.ChannelLayout;
					public static CH3_0: tv.hd3g.fflauncher.enums.ChannelLayout;
					public static CH3_0_BACK: tv.hd3g.fflauncher.enums.ChannelLayout;
					public static CH4_0: tv.hd3g.fflauncher.enums.ChannelLayout;
					public static QUAD: tv.hd3g.fflauncher.enums.ChannelLayout;
					public static QUAD_SIDE: tv.hd3g.fflauncher.enums.ChannelLayout;
					public static CH3_1: tv.hd3g.fflauncher.enums.ChannelLayout;
					public static CH5_0: tv.hd3g.fflauncher.enums.ChannelLayout;
					public static CH5_0_SIDE: tv.hd3g.fflauncher.enums.ChannelLayout;
					public static CH4_1: tv.hd3g.fflauncher.enums.ChannelLayout;
					public static CH5_1: tv.hd3g.fflauncher.enums.ChannelLayout;
					public static CH5_1_SIDE: tv.hd3g.fflauncher.enums.ChannelLayout;
					public static CH6_0: tv.hd3g.fflauncher.enums.ChannelLayout;
					public static CH6_0_FRONT: tv.hd3g.fflauncher.enums.ChannelLayout;
					public static HEXAGONAL: tv.hd3g.fflauncher.enums.ChannelLayout;
					public static CH6_1: tv.hd3g.fflauncher.enums.ChannelLayout;
					public static CH6_1_BACK: tv.hd3g.fflauncher.enums.ChannelLayout;
					public static CH6_1_FRONT: tv.hd3g.fflauncher.enums.ChannelLayout;
					public static CH7_0: tv.hd3g.fflauncher.enums.ChannelLayout;
					public static CH7_0_FRONT: tv.hd3g.fflauncher.enums.ChannelLayout;
					public static CH7_1: tv.hd3g.fflauncher.enums.ChannelLayout;
					public static CH7_1_WIDE: tv.hd3g.fflauncher.enums.ChannelLayout;
					public static CH7_1_WIDE_SIDE: tv.hd3g.fflauncher.enums.ChannelLayout;
					public static OCTAGONAL: tv.hd3g.fflauncher.enums.ChannelLayout;
					public static HEXADECAGONAL: tv.hd3g.fflauncher.enums.ChannelLayout;
					public static DOWNMIX: tv.hd3g.fflauncher.enums.ChannelLayout;
					public isMonoLayout(): boolean;
					public toString(): string;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static getByChannelSize(channelSize: number): tv.hd3g.fflauncher.enums.ChannelLayout;
					public static values(): native.Array<tv.hd3g.fflauncher.enums.ChannelLayout>;
					public getChannelSize(): number;
					public getChannelList(): java.util.List<tv.hd3g.fflauncher.enums.Channel>;
					public static valueOf(name: string): tv.hd3g.fflauncher.enums.ChannelLayout;
					public static parse(layout: string): tv.hd3g.fflauncher.enums.ChannelLayout;
				}
			}
		}
	}
}

declare module tv {
	export module hd3g {
		export module fflauncher {
			export module enums {
				export class FFLogLevel {
					public static class: java.lang.Class<tv.hd3g.fflauncher.enums.FFLogLevel>;
					public static QUIET: tv.hd3g.fflauncher.enums.FFLogLevel;
					public static PANIC: tv.hd3g.fflauncher.enums.FFLogLevel;
					public static FATAL: tv.hd3g.fflauncher.enums.FFLogLevel;
					public static ERROR: tv.hd3g.fflauncher.enums.FFLogLevel;
					public static WARNING: tv.hd3g.fflauncher.enums.FFLogLevel;
					public static INFO: tv.hd3g.fflauncher.enums.FFLogLevel;
					public static VERBOSE: tv.hd3g.fflauncher.enums.FFLogLevel;
					public static DEBUG: tv.hd3g.fflauncher.enums.FFLogLevel;
					public static TRACE: tv.hd3g.fflauncher.enums.FFLogLevel;
					public toString(): string;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static values(): native.Array<tv.hd3g.fflauncher.enums.FFLogLevel>;
					public static valueOf(name: string): tv.hd3g.fflauncher.enums.FFLogLevel;
				}
			}
		}
	}
}

declare module tv {
	export module hd3g {
		export module fflauncher {
			export module enums {
				export class FFUnit {
					public static class: java.lang.Class<tv.hd3g.fflauncher.enums.FFUnit>;
					public static KILO: tv.hd3g.fflauncher.enums.FFUnit;
					public static MEGA: tv.hd3g.fflauncher.enums.FFUnit;
					public static GIGA: tv.hd3g.fflauncher.enums.FFUnit;
					public static valueOf(name: string): tv.hd3g.fflauncher.enums.FFUnit;
					public toString(): string;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static values(): native.Array<tv.hd3g.fflauncher.enums.FFUnit>;
					public static fromString(u: string): tv.hd3g.fflauncher.enums.FFUnit;
				}
			}
		}
	}
}

declare module tv {
	export module hd3g {
		export module fflauncher {
			export module enums {
				export class FilterConnectorType {
					public static class: java.lang.Class<tv.hd3g.fflauncher.enums.FilterConnectorType>;
					public static AUDIO: tv.hd3g.fflauncher.enums.FilterConnectorType;
					public static VIDEO: tv.hd3g.fflauncher.enums.FilterConnectorType;
					public static DYNAMIC: tv.hd3g.fflauncher.enums.FilterConnectorType;
					public static SOURCE_SINK: tv.hd3g.fflauncher.enums.FilterConnectorType;
					public static values(): native.Array<tv.hd3g.fflauncher.enums.FilterConnectorType>;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static valueOf(name: string): tv.hd3g.fflauncher.enums.FilterConnectorType;
				}
			}
		}
	}
}

declare module tv {
	export module hd3g {
		export module fflauncher {
			export module enums {
				export abstract class OutputFilePresencePolicy {
					public static class: java.lang.Class<tv.hd3g.fflauncher.enums.OutputFilePresencePolicy>;
					public static ALL: tv.hd3g.fflauncher.enums.OutputFilePresencePolicy;
					public static MUST_EXISTS: tv.hd3g.fflauncher.enums.OutputFilePresencePolicy;
					public static MUST_BE_A_REGULAR_FILE: tv.hd3g.fflauncher.enums.OutputFilePresencePolicy;
					public static NOT_EMPTY: tv.hd3g.fflauncher.enums.OutputFilePresencePolicy;
					public static values(): native.Array<tv.hd3g.fflauncher.enums.OutputFilePresencePolicy>;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public filter(): any /* any*/;
					public static valueOf(name: string): tv.hd3g.fflauncher.enums.OutputFilePresencePolicy;
				}
			}
		}
	}
}

declare module tv {
	export module hd3g {
		export module fflauncher {
			export module enums {
				export class SourceNotFoundPolicy {
					public static class: java.lang.Class<tv.hd3g.fflauncher.enums.SourceNotFoundPolicy>;
					public static ERROR: tv.hd3g.fflauncher.enums.SourceNotFoundPolicy;
					public static REMOVE_OUT_STREAM: tv.hd3g.fflauncher.enums.SourceNotFoundPolicy;
					public static values(): native.Array<tv.hd3g.fflauncher.enums.SourceNotFoundPolicy>;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static valueOf(name: string): tv.hd3g.fflauncher.enums.SourceNotFoundPolicy;
				}
				export module SourceNotFoundPolicy {
					export class SourceNotFoundException extends tv.hd3g.commons.IORuntimeException {
						public static class: java.lang.Class<tv.hd3g.fflauncher.enums.SourceNotFoundPolicy.SourceNotFoundException>;
						public constructor();
						public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
						public constructor(message: string, cause: java.lang.Throwable);
						public constructor(cause: java.lang.Throwable);
						public constructor(message: string);
						public constructor(cause: java.io.IOException);
						public constructor(message: string, cause: java.io.IOException);
					}
				}
			}
		}
	}
}

declare module tv {
	export module hd3g {
		export module fflauncher {
			export module filtering {
				export class AudioFilterAmerge extends java.lang.Object {
					public static class: java.lang.Class<tv.hd3g.fflauncher.filtering.AudioFilterAmerge>;
					public constructor(inputs: number);
					public toFilter(): tv.hd3g.fflauncher.filtering.Filter;
				}
			}
		}
	}
}

declare module tv {
	export module hd3g {
		export module fflauncher {
			export module filtering {
				export class AudioFilterChannelmap extends java.lang.Object {
					public static class: java.lang.Class<tv.hd3g.fflauncher.filtering.AudioFilterChannelmap>;
					public constructor(destChannelLayout: tv.hd3g.fflauncher.enums.ChannelLayout, channelMap: java.util.Map<tv.hd3g.fflauncher.enums.Channel,tv.hd3g.fflauncher.enums.Channel>);
					public toFilter(): tv.hd3g.fflauncher.filtering.Filter;
				}
			}
		}
	}
}

declare module tv {
	export module hd3g {
		export module fflauncher {
			export module filtering {
				export class AudioFilterChannelsplit extends java.lang.Object {
					public static class: java.lang.Class<tv.hd3g.fflauncher.filtering.AudioFilterChannelsplit>;
					public constructor(sourceChannelLayout: tv.hd3g.fflauncher.enums.ChannelLayout, selectedChannels: java.util.List<tv.hd3g.fflauncher.enums.Channel>);
					public toFilter(): tv.hd3g.fflauncher.filtering.Filter;
				}
			}
		}
	}
}

declare module tv {
	export module hd3g {
		export module fflauncher {
			export module filtering {
				export class AudioFilterJoin extends java.lang.Object {
					public static class: java.lang.Class<tv.hd3g.fflauncher.filtering.AudioFilterJoin>;
					public constructor(inputs: number, channelLayout: tv.hd3g.fflauncher.enums.ChannelLayout, sourceByDestChannel: java.util.Map<tv.hd3g.fflauncher.enums.Channel,string>);
					public toFilter(): tv.hd3g.fflauncher.filtering.Filter;
				}
			}
		}
	}
}

declare module tv {
	export module hd3g {
		export module fflauncher {
			export module filtering {
				export class Filter extends java.lang.Object implements tv.hd3g.fflauncher.filtering.parser.FilterParserDefinition {
					public static class: java.lang.Class<tv.hd3g.fflauncher.filtering.Filter>;
					public equals(obj: any): boolean;
					public setArguments(list0: java.util.List<tv.hd3g.fflauncher.filtering.FilterArgument>): void;
					public addArgument(key: string): void;
					public getArguments(): java.util.List<tv.hd3g.fflauncher.filtering.FilterArgument>;
					public setDestBlocks(destBlocks: java.util.List<string>): void;
					public addArgument(key: string, value: java.lang.Enum<any>): void;
					public constructor(filterName: string, filterArguments1: native.Array<tv.hd3g.fflauncher.filtering.FilterArgument>);
					public setSourceBlocks(sourceBlocks: java.util.List<string>): void;
					public getDestBlocks(): java.util.List<string>;
					public constructor(rawFilter: string);
					public toString(): string;
					public addArgument(key: string, value: java.lang.Number): void;
					public getFilterName(): string;
					public addArgument(key: string, value: string): void;
					public getSourceBlocks(): java.util.List<string>;
					public addArgument(key: string, values: java.util.Collection<any>, join: string): void;
					public setFilterName(filterName: string): void;
					public hashCode(): number;
					public addArgument(key: string, values: java.util.stream.Stream<any>, join: string): void;
					public constructor(filterName: string, collection1: java.util.Collection<tv.hd3g.fflauncher.filtering.FilterArgument>);
				}
			}
		}
	}
}

declare module tv {
	export module hd3g {
		export module fflauncher {
			export module filtering {
				export class FilterArgument extends java.lang.Object {
					public static class: java.lang.Class<tv.hd3g.fflauncher.filtering.FilterArgument>;
					public constructor(key: string, value: string);
					public constructor(key: string);
					public getKey(): string;
					public getValue(): string;
					public toString(): string;
					public equals(obj: any): boolean;
					public setValue(value: string): void;
					public constructor(key: string, value: java.lang.Number);
					public constructor(key: string, values: java.util.stream.Stream<any>, join: string);
					public constructor(key: string, values: java.util.Collection<any>, join: string);
					public hashCode(): number;
					public constructor(key: string, value: java.lang.Enum<any>);
				}
			}
		}
	}
}

declare module tv {
	export module hd3g {
		export module fflauncher {
			export module filtering {
				export class FilterChains extends java.lang.Object {
					public static class: java.lang.Class<tv.hd3g.fflauncher.filtering.FilterChains>;
					public checkFiltersAvailability(about: tv.hd3g.fflauncher.about.FFAbout): java.util.List<tv.hd3g.fflauncher.filtering.Filter>;
					public insertFilterInChain(rawFilter: string, previousFilter: tv.hd3g.fflauncher.filtering.Filter): java.util.List<tv.hd3g.fflauncher.filtering.Filter>;
					public addFilterInLastChain(rawFilter: string, createNewChain: boolean): tv.hd3g.fflauncher.filtering.Filter;
					public static parseFromReadyToRunParameters(parameterName: string, conversionTool: tv.hd3g.fflauncher.ConversionTool): java.util.List<tv.hd3g.fflauncher.filtering.FilterChains>;
					public removeChain(chainId: number): void;
					public static merge(chainsList: java.util.List<tv.hd3g.fflauncher.filtering.FilterChains>): tv.hd3g.fflauncher.filtering.FilterChains;
					public getChainsCount(): number;
					public checkFiltersAvailability(about: tv.hd3g.fflauncher.about.FFAbout, expectedType: tv.hd3g.fflauncher.enums.FilterConnectorType): java.util.List<tv.hd3g.fflauncher.filtering.Filter>;
					public pushFilterChainTo(parameterName: string, ffbase: tv.hd3g.fflauncher.FFbase): void;
					public setFilterChainToVar(varName: string, ffbase: tv.hd3g.fflauncher.FFbase): void;
					public static parse(parameterName: string, conversionTool: tv.hd3g.fflauncher.ConversionTool): java.util.List<tv.hd3g.fflauncher.filtering.FilterChains>;
					public toString(): string;
					public constructor(filterChain: string);
					public static parse(parameterName: string, parameters: tv.hd3g.processlauncher.cmdline.Parameters): java.util.List<tv.hd3g.fflauncher.filtering.FilterChains>;
					public constructor();
					public insertFilterInChain(filter: tv.hd3g.fflauncher.filtering.Filter, previousFilter: tv.hd3g.fflauncher.filtering.Filter): java.util.List<tv.hd3g.fflauncher.filtering.Filter>;
					public getChain(chainId: number): java.util.List<tv.hd3g.fflauncher.filtering.Filter>;
					public getLastChain(): java.util.List<tv.hd3g.fflauncher.filtering.Filter>;
					public createChain(): java.util.List<tv.hd3g.fflauncher.filtering.Filter>;
					public addFilterInLastChain(filter: tv.hd3g.fflauncher.filtering.Filter, createNewChain: boolean): void;
				}
			}
		}
	}
}

declare module tv {
	export module hd3g {
		export module fflauncher {
			export module filtering {
				export module parser {
					export class FilterParser extends java.lang.Object {
						public static class: java.lang.Class<tv.hd3g.fflauncher.filtering.parser.FilterParser>;
						public static fullParsing(rawFilterChain: string, filterDefSupplier: any /* any*/): java.util.List<any>;
					}
				}
			}
		}
	}
}

declare module tv {
	export module hd3g {
		export module fflauncher {
			export module filtering {
				export module parser {
					export class FilterParserBaseChainFilter extends java.lang.Object {
						public static class: java.lang.Class<tv.hd3g.fflauncher.filtering.parser.FilterParserBaseChainFilter>;
						public content: java.util.List<tv.hd3g.fflauncher.filtering.parser.FilterParserChars>;
						public equals(obj: any): boolean;
						public hashCode(): number;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module tv {
	export module hd3g {
		export module fflauncher {
			export module filtering {
				export module parser {
					export class FilterParserChain extends tv.hd3g.fflauncher.filtering.parser.FilterParserBaseChainFilter {
						public static class: java.lang.Class<tv.hd3g.fflauncher.filtering.parser.FilterParserChain>;
					}
				}
			}
		}
	}
}

declare module tv {
	export module hd3g {
		export module fflauncher {
			export module filtering {
				export module parser {
					export class FilterParserChars extends java.lang.Object {
						public static class: java.lang.Class<tv.hd3g.fflauncher.filtering.parser.FilterParserChars>;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module tv {
	export module hd3g {
		export module fflauncher {
			export module filtering {
				export module parser {
					export class FilterParserDefinition extends java.lang.Object {
						public static class: java.lang.Class<tv.hd3g.fflauncher.filtering.parser.FilterParserDefinition>;
						/**
						 * Constructs a new instance of the tv.hd3g.fflauncher.filtering.parser.FilterParserDefinition interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							setSourceBlocks(list0: java.util.List<string>): void;
							setDestBlocks(list0: java.util.List<string>): void;
							setFilterName(string0: string): void;
							setArguments(list0: java.util.List<tv.hd3g.fflauncher.filtering.FilterArgument>): void;
						});
						public constructor();
						public setFilterName(string0: string): void;
						public setArguments(list0: java.util.List<tv.hd3g.fflauncher.filtering.FilterArgument>): void;
						public setSourceBlocks(list0: java.util.List<string>): void;
						public setDestBlocks(list0: java.util.List<string>): void;
					}
				}
			}
		}
	}
}

declare module tv {
	export module hd3g {
		export module fflauncher {
			export module filtering {
				export module parser {
					export class FilterParserFilter extends tv.hd3g.fflauncher.filtering.parser.FilterParserBaseChainFilter {
						public static class: java.lang.Class<tv.hd3g.fflauncher.filtering.parser.FilterParserFilter>;
					}
				}
			}
		}
	}
}

declare module tv {
	export module hd3g {
		export module fflauncher {
			export module filtering {
				export module parser {
					export class FilterParserGraphBranch extends java.lang.Object {
						public static class: java.lang.Class<tv.hd3g.fflauncher.filtering.parser.FilterParserGraphBranch>;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module tv {
	export module hd3g {
		export module fflauncher {
			export module filtering {
				export module parser {
					export class FilterParserSimpleChar extends java.lang.Object {
						public static class: java.lang.Class<tv.hd3g.fflauncher.filtering.parser.FilterParserSimpleChar>;
					}
				}
			}
		}
	}
}

declare module tv {
	export module hd3g {
		export module fflauncher {
			export module recipes {
				export class GenerateVideoFile extends tv.hd3g.fflauncher.recipes.Recipe {
					public static class: java.lang.Class<tv.hd3g.fflauncher.recipes.GenerateVideoFile>;
					public constructor(toolRun: tv.hd3g.processlauncher.tool.ToolRunner, execName: string);
					public generateBarsAnd1k(destination: string, duration_in_sec: number, resolution: java.awt.Point): tv.hd3g.processlauncher.tool.ToolRunner.RunningTool<tv.hd3g.fflauncher.FFmpeg>;
					public generateBarsAnd1k(destination: java.io.File, duration_in_sec: number, resolution: java.awt.Point): tv.hd3g.processlauncher.tool.ToolRunner.RunningTool<tv.hd3g.fflauncher.FFmpeg>;
					public constructor(toolRun: tv.hd3g.processlauncher.tool.ToolRunner);
				}
			}
		}
	}
}

declare module tv {
	export module hd3g {
		export module fflauncher {
			export module recipes {
				export class ProbeMedia extends tv.hd3g.fflauncher.recipes.Recipe {
					public static class: java.lang.Class<tv.hd3g.fflauncher.recipes.ProbeMedia>;
					public constructor(toolRun: tv.hd3g.processlauncher.tool.ToolRunner, execName: string);
					public constructor(toolRun: tv.hd3g.processlauncher.tool.ToolRunner, execName: string, maxExecTimeScheduler: java.util.concurrent.ScheduledExecutorService);
					public doAnalysing(source: java.io.File): tv.hd3g.ffprobejaxb.FFprobeJAXB;
					public doAnalysing(source: string): tv.hd3g.ffprobejaxb.FFprobeJAXB;
					public constructor(toolRun: tv.hd3g.processlauncher.tool.ToolRunner, maxExecTimeScheduler: java.util.concurrent.ScheduledExecutorService);
				}
			}
		}
	}
}

declare module tv {
	export module hd3g {
		export module fflauncher {
			export module recipes {
				export abstract class Recipe extends java.lang.Object {
					public static class: java.lang.Class<tv.hd3g.fflauncher.recipes.Recipe>;
					public toolRun: tv.hd3g.processlauncher.tool.ToolRunner;
					public execName: string;
					public getExecName(): string;
					public constructor(toolRun: tv.hd3g.processlauncher.tool.ToolRunner, execName: string);
				}
			}
		}
	}
}

//Generics information:

