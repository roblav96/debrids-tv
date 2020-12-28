declare module org {
	export module ffmpeg {
		export module ffprobe {
			export class ChapterType extends java.lang.Object {
				public static class: java.lang.Class<org.ffmpeg.ffprobe.ChapterType>;
				public tag: java.util.List<org.ffmpeg.ffprobe.TagType>;
				public id: number;
				public timeBase: string;
				public start: number;
				public startTime: java.lang.Float;
				public end: number;
				public endTime: number;
				public getEnd(): number;
				public setStartTime(value: java.lang.Float): void;
				public getId(): number;
				public setEndTime(value: number): void;
				public constructor();
				public getStartTime(): java.lang.Float;
				public setId(value: number): void;
				public getTag(): java.util.List<org.ffmpeg.ffprobe.TagType>;
				public setStart(value: number): void;
				public setTimeBase(value: string): void;
				public getStart(): number;
				public getTimeBase(): string;
				public getEndTime(): number;
				public setEnd(value: number): void;
			}
		}
	}
}

declare module org {
	export module ffmpeg {
		export module ffprobe {
			export class ChaptersType extends java.lang.Object {
				public static class: java.lang.Class<org.ffmpeg.ffprobe.ChaptersType>;
				public chapter: java.util.List<org.ffmpeg.ffprobe.ChapterType>;
				public getChapter(): java.util.List<org.ffmpeg.ffprobe.ChapterType>;
				public constructor();
			}
		}
	}
}

declare module org {
	export module ffmpeg {
		export module ffprobe {
			export class ErrorType extends java.lang.Object {
				public static class: java.lang.Class<org.ffmpeg.ffprobe.ErrorType>;
				public code: number;
				public string: string;
				public getString(): string;
				public getCode(): number;
				public setCode(value: number): void;
				public setString(value: string): void;
				public constructor();
			}
		}
	}
}

declare module org {
	export module ffmpeg {
		export module ffprobe {
			export class FfprobeType extends java.lang.Object {
				public static class: java.lang.Class<org.ffmpeg.ffprobe.FfprobeType>;
				public programVersion: org.ffmpeg.ffprobe.ProgramVersionType;
				public libraryVersions: org.ffmpeg.ffprobe.LibraryVersionsType;
				public pixelFormats: org.ffmpeg.ffprobe.PixelFormatsType;
				public packets: org.ffmpeg.ffprobe.PacketsType;
				public frames: org.ffmpeg.ffprobe.FramesType;
				public packetsAndFrames: org.ffmpeg.ffprobe.PacketsAndFramesType;
				public programs: org.ffmpeg.ffprobe.ProgramsType;
				public streams: org.ffmpeg.ffprobe.StreamsType;
				public chapters: org.ffmpeg.ffprobe.ChaptersType;
				public format: org.ffmpeg.ffprobe.FormatType;
				public error: org.ffmpeg.ffprobe.ErrorType;
				public getPrograms(): org.ffmpeg.ffprobe.ProgramsType;
				public setStreams(value: org.ffmpeg.ffprobe.StreamsType): void;
				public getFrames(): org.ffmpeg.ffprobe.FramesType;
				public getFormat(): org.ffmpeg.ffprobe.FormatType;
				public setFormat(value: org.ffmpeg.ffprobe.FormatType): void;
				public setError(value: org.ffmpeg.ffprobe.ErrorType): void;
				public getPixelFormats(): org.ffmpeg.ffprobe.PixelFormatsType;
				public getPackets(): org.ffmpeg.ffprobe.PacketsType;
				public setPacketsAndFrames(value: org.ffmpeg.ffprobe.PacketsAndFramesType): void;
				public setPixelFormats(value: org.ffmpeg.ffprobe.PixelFormatsType): void;
				public setChapters(value: org.ffmpeg.ffprobe.ChaptersType): void;
				public constructor();
				public setPackets(value: org.ffmpeg.ffprobe.PacketsType): void;
				public setPrograms(value: org.ffmpeg.ffprobe.ProgramsType): void;
				public getLibraryVersions(): org.ffmpeg.ffprobe.LibraryVersionsType;
				public getChapters(): org.ffmpeg.ffprobe.ChaptersType;
				public setProgramVersion(value: org.ffmpeg.ffprobe.ProgramVersionType): void;
				public getStreams(): org.ffmpeg.ffprobe.StreamsType;
				public setFrames(value: org.ffmpeg.ffprobe.FramesType): void;
				public getError(): org.ffmpeg.ffprobe.ErrorType;
				public setLibraryVersions(value: org.ffmpeg.ffprobe.LibraryVersionsType): void;
				public getProgramVersion(): org.ffmpeg.ffprobe.ProgramVersionType;
				public getPacketsAndFrames(): org.ffmpeg.ffprobe.PacketsAndFramesType;
			}
		}
	}
}

declare module org {
	export module ffmpeg {
		export module ffprobe {
			export class FormatType extends java.lang.Object {
				public static class: java.lang.Class<org.ffmpeg.ffprobe.FormatType>;
				public tag: java.util.List<org.ffmpeg.ffprobe.TagType>;
				public filename: string;
				public nbStreams: number;
				public nbPrograms: number;
				public formatName: string;
				public formatLongName: string;
				public startTime: java.lang.Float;
				public duration: java.lang.Float;
				public size: java.lang.Long;
				public bitRate: java.lang.Long;
				public probeScore: java.lang.Integer;
				public setNbStreams(value: number): void;
				public setStartTime(value: java.lang.Float): void;
				public setFormatName(value: string): void;
				public setSize(value: java.lang.Long): void;
				public setBitRate(value: java.lang.Long): void;
				public setFormatLongName(value: string): void;
				public getProbeScore(): java.lang.Integer;
				public getNbStreams(): number;
				public getBitRate(): java.lang.Long;
				public setFilename(value: string): void;
				public getNbPrograms(): number;
				public constructor();
				public getStartTime(): java.lang.Float;
				public setProbeScore(value: java.lang.Integer): void;
				public getTag(): java.util.List<org.ffmpeg.ffprobe.TagType>;
				public getDuration(): java.lang.Float;
				public getSize(): java.lang.Long;
				public getFilename(): string;
				public getFormatLongName(): string;
				public setNbPrograms(value: number): void;
				public setDuration(value: java.lang.Float): void;
				public getFormatName(): string;
			}
		}
	}
}

declare module org {
	export module ffmpeg {
		export module ffprobe {
			export class FrameSideDataListType extends java.lang.Object {
				public static class: java.lang.Class<org.ffmpeg.ffprobe.FrameSideDataListType>;
				public sideData: java.util.List<org.ffmpeg.ffprobe.FrameSideDataType>;
				public getSideData(): java.util.List<org.ffmpeg.ffprobe.FrameSideDataType>;
				public constructor();
			}
		}
	}
}

declare module org {
	export module ffmpeg {
		export module ffprobe {
			export class FrameSideDataTimecodeList extends java.lang.Object {
				public static class: java.lang.Class<org.ffmpeg.ffprobe.FrameSideDataTimecodeList>;
				public timecode: java.util.List<org.ffmpeg.ffprobe.FrameSideDataTimecodeType>;
				public getTimecode(): java.util.List<org.ffmpeg.ffprobe.FrameSideDataTimecodeType>;
				public constructor();
			}
		}
	}
}

declare module org {
	export module ffmpeg {
		export module ffprobe {
			export class FrameSideDataTimecodeType extends java.lang.Object {
				public static class: java.lang.Class<org.ffmpeg.ffprobe.FrameSideDataTimecodeType>;
				public value: string;
				public getValue(): string;
				public setValue(value: string): void;
				public constructor();
			}
		}
	}
}

declare module org {
	export module ffmpeg {
		export module ffprobe {
			export class FrameSideDataType extends java.lang.Object {
				public static class: java.lang.Class<org.ffmpeg.ffprobe.FrameSideDataType>;
				public timecodes: org.ffmpeg.ffprobe.FrameSideDataTimecodeList;
				public sideDataType: string;
				public sideDataSize: java.lang.Integer;
				public timecode: string;
				public getTimecodes(): org.ffmpeg.ffprobe.FrameSideDataTimecodeList;
				public setTimecodes(value: org.ffmpeg.ffprobe.FrameSideDataTimecodeList): void;
				public setSideDataType(value: string): void;
				public getTimecode(): string;
				public setTimecode(value: string): void;
				public setSideDataSize(value: java.lang.Integer): void;
				public getSideDataType(): string;
				public getSideDataSize(): java.lang.Integer;
				public constructor();
			}
		}
	}
}

declare module org {
	export module ffmpeg {
		export module ffprobe {
			export class FrameType extends java.lang.Object {
				public static class: java.lang.Class<org.ffmpeg.ffprobe.FrameType>;
				public tag: java.util.List<org.ffmpeg.ffprobe.TagType>;
				public logs: org.ffmpeg.ffprobe.LogsType;
				public sideDataList: org.ffmpeg.ffprobe.FrameSideDataListType;
				public mediaType: string;
				public streamIndex: java.lang.Integer;
				public keyFrame: number;
				public pts: java.lang.Long;
				public ptsTime: java.lang.Float;
				public pktPts: java.lang.Long;
				public pktPtsTime: java.lang.Float;
				public pktDts: java.lang.Long;
				public pktDtsTime: java.lang.Float;
				public bestEffortTimestamp: java.lang.Long;
				public bestEffortTimestampTime: java.lang.Float;
				public pktDuration: java.lang.Long;
				public pktDurationTime: java.lang.Float;
				public pktPos: java.lang.Long;
				public pktSize: java.lang.Integer;
				public sampleFmt: string;
				public nbSamples: java.lang.Long;
				public channels: java.lang.Integer;
				public channelLayout: string;
				public width: java.lang.Long;
				public height: java.lang.Long;
				public pixFmt: string;
				public sampleAspectRatio: string;
				public pictType: string;
				public codedPictureNumber: java.lang.Long;
				public displayPictureNumber: java.lang.Long;
				public interlacedFrame: java.lang.Integer;
				public topFieldFirst: java.lang.Integer;
				public repeatPict: java.lang.Integer;
				public colorRange: string;
				public colorSpace: string;
				public colorPrimaries: string;
				public colorTransfer: string;
				public chromaLocation: string;
				public getPktDts(): java.lang.Long;
				public setChannelLayout(value: string): void;
				public getInterlacedFrame(): java.lang.Integer;
				public getCodedPictureNumber(): java.lang.Long;
				public constructor();
				public setSampleFmt(value: string): void;
				public getPixFmt(): string;
				public getColorRange(): string;
				public getSampleAspectRatio(): string;
				public getColorTransfer(): string;
				public getColorSpace(): string;
				public setCodedPictureNumber(value: java.lang.Long): void;
				public getPktDtsTime(): java.lang.Float;
				public getPktDuration(): java.lang.Long;
				public setPictType(value: string): void;
				public setMediaType(value: string): void;
				public setPktSize(value: java.lang.Integer): void;
				public setWidth(value: java.lang.Long): void;
				public setKeyFrame(value: number): void;
				public getStreamIndex(): java.lang.Integer;
				public setPts(value: java.lang.Long): void;
				public getRepeatPict(): java.lang.Integer;
				public setChannels(value: java.lang.Integer): void;
				public getPktPos(): java.lang.Long;
				public setPtsTime(value: java.lang.Float): void;
				public getDisplayPictureNumber(): java.lang.Long;
				public getBestEffortTimestamp(): java.lang.Long;
				public getWidth(): java.lang.Long;
				public setLogs(value: org.ffmpeg.ffprobe.LogsType): void;
				public setPktDts(value: java.lang.Long): void;
				public getSampleFmt(): string;
				public getPktSize(): java.lang.Integer;
				public getColorPrimaries(): string;
				public setPktDtsTime(value: java.lang.Float): void;
				public getTopFieldFirst(): java.lang.Integer;
				public setColorRange(value: string): void;
				public setHeight(value: java.lang.Long): void;
				public setInterlacedFrame(value: java.lang.Integer): void;
				public setPktPts(value: java.lang.Long): void;
				public setPktDuration(value: java.lang.Long): void;
				public setPixFmt(value: string): void;
				public setColorSpace(value: string): void;
				public getSideDataList(): org.ffmpeg.ffprobe.FrameSideDataListType;
				public getPictType(): string;
				public getChannelLayout(): string;
				public getPktPts(): java.lang.Long;
				public getNbSamples(): java.lang.Long;
				public getTag(): java.util.List<org.ffmpeg.ffprobe.TagType>;
				public setColorTransfer(value: string): void;
				public setSideDataList(value: org.ffmpeg.ffprobe.FrameSideDataListType): void;
				public setStreamIndex(value: java.lang.Integer): void;
				public setBestEffortTimestampTime(value: java.lang.Float): void;
				public setBestEffortTimestamp(value: java.lang.Long): void;
				public getKeyFrame(): number;
				public setTopFieldFirst(value: java.lang.Integer): void;
				public getPktPtsTime(): java.lang.Float;
				public setPktPos(value: java.lang.Long): void;
				public setChromaLocation(value: string): void;
				public setDisplayPictureNumber(value: java.lang.Long): void;
				public setPktDurationTime(value: java.lang.Float): void;
				public setPktPtsTime(value: java.lang.Float): void;
				public setRepeatPict(value: java.lang.Integer): void;
				public getPts(): java.lang.Long;
				public getBestEffortTimestampTime(): java.lang.Float;
				public getPktDurationTime(): java.lang.Float;
				public getLogs(): org.ffmpeg.ffprobe.LogsType;
				public getMediaType(): string;
				public getHeight(): java.lang.Long;
				public getPtsTime(): java.lang.Float;
				public getChannels(): java.lang.Integer;
				public getChromaLocation(): string;
				public setColorPrimaries(value: string): void;
				public setSampleAspectRatio(value: string): void;
				public setNbSamples(value: java.lang.Long): void;
			}
		}
	}
}

declare module org {
	export module ffmpeg {
		export module ffprobe {
			export class FramesType extends java.lang.Object {
				public static class: java.lang.Class<org.ffmpeg.ffprobe.FramesType>;
				public frameOrSubtitle: java.util.List<any>;
				public getFrameOrSubtitle(): java.util.List<any>;
				public constructor();
			}
		}
	}
}

declare module org {
	export module ffmpeg {
		export module ffprobe {
			export class LibraryVersionType extends java.lang.Object {
				public static class: java.lang.Class<org.ffmpeg.ffprobe.LibraryVersionType>;
				public name: string;
				public major: number;
				public minor: number;
				public micro: number;
				public version: number;
				public ident: string;
				public setVersion(value: number): void;
				public setIdent(value: string): void;
				public setMajor(value: number): void;
				public getName(): string;
				public getMajor(): number;
				public constructor();
				public getIdent(): string;
				public getVersion(): number;
				public setMicro(value: number): void;
				public setMinor(value: number): void;
				public getMinor(): number;
				public getMicro(): number;
				public setName(value: string): void;
			}
		}
	}
}

declare module org {
	export module ffmpeg {
		export module ffprobe {
			export class LibraryVersionsType extends java.lang.Object {
				public static class: java.lang.Class<org.ffmpeg.ffprobe.LibraryVersionsType>;
				public libraryVersion: java.util.List<org.ffmpeg.ffprobe.LibraryVersionType>;
				public getLibraryVersion(): java.util.List<org.ffmpeg.ffprobe.LibraryVersionType>;
				public constructor();
			}
		}
	}
}

declare module org {
	export module ffmpeg {
		export module ffprobe {
			export class LogType extends java.lang.Object {
				public static class: java.lang.Class<org.ffmpeg.ffprobe.LogType>;
				public context: string;
				public level: java.lang.Integer;
				public category: java.lang.Integer;
				public parentContext: string;
				public parentCategory: java.lang.Integer;
				public message: string;
				public getParentCategory(): java.lang.Integer;
				public setContext(value: string): void;
				public getCategory(): java.lang.Integer;
				public setParentContext(value: string): void;
				public constructor();
				public setCategory(value: java.lang.Integer): void;
				public setMessage(value: string): void;
				public setLevel(value: java.lang.Integer): void;
				public getParentContext(): string;
				public setParentCategory(value: java.lang.Integer): void;
				public getMessage(): string;
				public getContext(): string;
				public getLevel(): java.lang.Integer;
			}
		}
	}
}

declare module org {
	export module ffmpeg {
		export module ffprobe {
			export class LogsType extends java.lang.Object {
				public static class: java.lang.Class<org.ffmpeg.ffprobe.LogsType>;
				public log: java.util.List<org.ffmpeg.ffprobe.LogType>;
				public getLog(): java.util.List<org.ffmpeg.ffprobe.LogType>;
				public constructor();
			}
		}
	}
}

declare module org {
	export module ffmpeg {
		export module ffprobe {
			export class ObjectFactory extends java.lang.Object {
				public static class: java.lang.Class<org.ffmpeg.ffprobe.ObjectFactory>;
				public createPixelFormatComponentType(): org.ffmpeg.ffprobe.PixelFormatComponentType;
				public createSubtitleType(): org.ffmpeg.ffprobe.SubtitleType;
				public createStreamDispositionType(): org.ffmpeg.ffprobe.StreamDispositionType;
				public createPixelFormatsType(): org.ffmpeg.ffprobe.PixelFormatsType;
				public createStreamType(): org.ffmpeg.ffprobe.StreamType;
				public createPixelFormatComponentsType(): org.ffmpeg.ffprobe.PixelFormatComponentsType;
				public createErrorType(): org.ffmpeg.ffprobe.ErrorType;
				public createPacketsAndFramesType(): org.ffmpeg.ffprobe.PacketsAndFramesType;
				public createStreamsType(): org.ffmpeg.ffprobe.StreamsType;
				public createLibraryVersionType(): org.ffmpeg.ffprobe.LibraryVersionType;
				public constructor();
				public createPacketSideDataType(): org.ffmpeg.ffprobe.PacketSideDataType;
				public createFrameSideDataListType(): org.ffmpeg.ffprobe.FrameSideDataListType;
				public createPixelFormatType(): org.ffmpeg.ffprobe.PixelFormatType;
				public createLogType(): org.ffmpeg.ffprobe.LogType;
				public createChaptersType(): org.ffmpeg.ffprobe.ChaptersType;
				public createChapterType(): org.ffmpeg.ffprobe.ChapterType;
				public createFrameSideDataTimecodeList(): org.ffmpeg.ffprobe.FrameSideDataTimecodeList;
				public createFfprobeType(): org.ffmpeg.ffprobe.FfprobeType;
				public createFfprobe(value: org.ffmpeg.ffprobe.FfprobeType): javax.xml.bind.JAXBElement<org.ffmpeg.ffprobe.FfprobeType>;
				public createFramesType(): org.ffmpeg.ffprobe.FramesType;
				public createTagType(): org.ffmpeg.ffprobe.TagType;
				public createFrameSideDataTimecodeType(): org.ffmpeg.ffprobe.FrameSideDataTimecodeType;
				public createPacketType(): org.ffmpeg.ffprobe.PacketType;
				public createPacketSideDataListType(): org.ffmpeg.ffprobe.PacketSideDataListType;
				public createProgramsType(): org.ffmpeg.ffprobe.ProgramsType;
				public createFrameType(): org.ffmpeg.ffprobe.FrameType;
				public createFrameSideDataType(): org.ffmpeg.ffprobe.FrameSideDataType;
				public createLibraryVersionsType(): org.ffmpeg.ffprobe.LibraryVersionsType;
				public createProgramVersionType(): org.ffmpeg.ffprobe.ProgramVersionType;
				public createLogsType(): org.ffmpeg.ffprobe.LogsType;
				public createPacketsType(): org.ffmpeg.ffprobe.PacketsType;
				public createFormatType(): org.ffmpeg.ffprobe.FormatType;
				public createProgramType(): org.ffmpeg.ffprobe.ProgramType;
				public createPixelFormatFlagsType(): org.ffmpeg.ffprobe.PixelFormatFlagsType;
			}
		}
	}
}

declare module org {
	export module ffmpeg {
		export module ffprobe {
			export class PacketSideDataListType extends java.lang.Object {
				public static class: java.lang.Class<org.ffmpeg.ffprobe.PacketSideDataListType>;
				public sideData: java.util.List<org.ffmpeg.ffprobe.PacketSideDataType>;
				public getSideData(): java.util.List<org.ffmpeg.ffprobe.PacketSideDataType>;
				public constructor();
			}
		}
	}
}

declare module org {
	export module ffmpeg {
		export module ffprobe {
			export class PacketSideDataType extends java.lang.Object {
				public static class: java.lang.Class<org.ffmpeg.ffprobe.PacketSideDataType>;
				public sideDataType: string;
				public sideDataSize: java.lang.Integer;
				public setSideDataType(value: string): void;
				public setSideDataSize(value: java.lang.Integer): void;
				public getSideDataType(): string;
				public getSideDataSize(): java.lang.Integer;
				public constructor();
			}
		}
	}
}

declare module org {
	export module ffmpeg {
		export module ffprobe {
			export class PacketType extends java.lang.Object {
				public static class: java.lang.Class<org.ffmpeg.ffprobe.PacketType>;
				public tag: java.util.List<org.ffmpeg.ffprobe.TagType>;
				public sideDataList: org.ffmpeg.ffprobe.PacketSideDataListType;
				public codecType: string;
				public streamIndex: number;
				public pts: java.lang.Long;
				public ptsTime: java.lang.Float;
				public dts: java.lang.Long;
				public dtsTime: java.lang.Float;
				public duration: java.lang.Long;
				public durationTime: java.lang.Float;
				public convergenceDuration: java.lang.Long;
				public convergenceDurationTime: java.lang.Float;
				public size: number;
				public pos: java.lang.Long;
				public flags: string;
				public data: string;
				public dataHash: string;
				public setDuration(value: java.lang.Long): void;
				public getConvergenceDuration(): java.lang.Long;
				public setSize(value: number): void;
				public getDuration(): java.lang.Long;
				public getPos(): java.lang.Long;
				public setPos(value: java.lang.Long): void;
				public constructor();
				public setSideDataList(value: org.ffmpeg.ffprobe.PacketSideDataListType): void;
				public getCodecType(): string;
				public setConvergenceDurationTime(value: java.lang.Float): void;
				public getDataHash(): string;
				public getTag(): java.util.List<org.ffmpeg.ffprobe.TagType>;
				public setCodecType(value: string): void;
				public setDataHash(value: string): void;
				public getFlags(): string;
				public getSize(): number;
				public getStreamIndex(): number;
				public setStreamIndex(value: number): void;
				public getDts(): java.lang.Long;
				public setConvergenceDuration(value: java.lang.Long): void;
				public setDtsTime(value: java.lang.Float): void;
				public getDtsTime(): java.lang.Float;
				public setDurationTime(value: java.lang.Float): void;
				public setFlags(value: string): void;
				public getSideDataList(): org.ffmpeg.ffprobe.PacketSideDataListType;
				public setPts(value: java.lang.Long): void;
				public getPts(): java.lang.Long;
				public setDts(value: java.lang.Long): void;
				public setPtsTime(value: java.lang.Float): void;
				public getConvergenceDurationTime(): java.lang.Float;
				public getDurationTime(): java.lang.Float;
				public getPtsTime(): java.lang.Float;
				public getData(): string;
				public setData(value: string): void;
			}
		}
	}
}

declare module org {
	export module ffmpeg {
		export module ffprobe {
			export class PacketsAndFramesType extends java.lang.Object {
				public static class: java.lang.Class<org.ffmpeg.ffprobe.PacketsAndFramesType>;
				public packetOrFrameOrSubtitle: java.util.List<any>;
				public getPacketOrFrameOrSubtitle(): java.util.List<any>;
				public constructor();
			}
		}
	}
}

declare module org {
	export module ffmpeg {
		export module ffprobe {
			export class PacketsType extends java.lang.Object {
				public static class: java.lang.Class<org.ffmpeg.ffprobe.PacketsType>;
				public packet: java.util.List<org.ffmpeg.ffprobe.PacketType>;
				public getPacket(): java.util.List<org.ffmpeg.ffprobe.PacketType>;
				public constructor();
			}
		}
	}
}

declare module org {
	export module ffmpeg {
		export module ffprobe {
			export class PixelFormatComponentType extends java.lang.Object {
				public static class: java.lang.Class<org.ffmpeg.ffprobe.PixelFormatComponentType>;
				public index: number;
				public bitDepth: number;
				public setIndex(value: number): void;
				public getIndex(): number;
				public setBitDepth(value: number): void;
				public getBitDepth(): number;
				public constructor();
			}
		}
	}
}

declare module org {
	export module ffmpeg {
		export module ffprobe {
			export class PixelFormatComponentsType extends java.lang.Object {
				public static class: java.lang.Class<org.ffmpeg.ffprobe.PixelFormatComponentsType>;
				public component: java.util.List<org.ffmpeg.ffprobe.PixelFormatComponentType>;
				public getComponent(): java.util.List<org.ffmpeg.ffprobe.PixelFormatComponentType>;
				public constructor();
			}
		}
	}
}

declare module org {
	export module ffmpeg {
		export module ffprobe {
			export class PixelFormatFlagsType extends java.lang.Object {
				public static class: java.lang.Class<org.ffmpeg.ffprobe.PixelFormatFlagsType>;
				public bigEndian: number;
				public palette: number;
				public bitstream: number;
				public hwaccel: number;
				public planar: number;
				public rgb: number;
				public pseudopal: number;
				public alpha: number;
				public getRgb(): number;
				public getAlpha(): number;
				public setBigEndian(value: number): void;
				public getPalette(): number;
				public setPalette(value: number): void;
				public constructor();
				public setAlpha(value: number): void;
				public setPseudopal(value: number): void;
				public setBitstream(value: number): void;
				public getHwaccel(): number;
				public getBitstream(): number;
				public setRgb(value: number): void;
				public getBigEndian(): number;
				public setHwaccel(value: number): void;
				public setPlanar(value: number): void;
				public getPseudopal(): number;
				public getPlanar(): number;
			}
		}
	}
}

declare module org {
	export module ffmpeg {
		export module ffprobe {
			export class PixelFormatType extends java.lang.Object {
				public static class: java.lang.Class<org.ffmpeg.ffprobe.PixelFormatType>;
				public flags: org.ffmpeg.ffprobe.PixelFormatFlagsType;
				public components: org.ffmpeg.ffprobe.PixelFormatComponentsType;
				public name: string;
				public nbComponents: number;
				public log2ChromaW: java.lang.Integer;
				public log2ChromaH: java.lang.Integer;
				public bitsPerPixel: java.lang.Integer;
				public getFlags(): org.ffmpeg.ffprobe.PixelFormatFlagsType;
				public setBitsPerPixel(value: java.lang.Integer): void;
				public getName(): string;
				public setNbComponents(value: number): void;
				public setLog2ChromaH(value: java.lang.Integer): void;
				public getComponents(): org.ffmpeg.ffprobe.PixelFormatComponentsType;
				public getLog2ChromaH(): java.lang.Integer;
				public constructor();
				public getBitsPerPixel(): java.lang.Integer;
				public getLog2ChromaW(): java.lang.Integer;
				public setComponents(value: org.ffmpeg.ffprobe.PixelFormatComponentsType): void;
				public getNbComponents(): number;
				public setFlags(value: org.ffmpeg.ffprobe.PixelFormatFlagsType): void;
				public setName(value: string): void;
				public setLog2ChromaW(value: java.lang.Integer): void;
			}
		}
	}
}

declare module org {
	export module ffmpeg {
		export module ffprobe {
			export class PixelFormatsType extends java.lang.Object {
				public static class: java.lang.Class<org.ffmpeg.ffprobe.PixelFormatsType>;
				public pixelFormat: java.util.List<org.ffmpeg.ffprobe.PixelFormatType>;
				public getPixelFormat(): java.util.List<org.ffmpeg.ffprobe.PixelFormatType>;
				public constructor();
			}
		}
	}
}

declare module org {
	export module ffmpeg {
		export module ffprobe {
			export class ProgramType extends java.lang.Object {
				public static class: java.lang.Class<org.ffmpeg.ffprobe.ProgramType>;
				public tag: java.util.List<org.ffmpeg.ffprobe.TagType>;
				public streams: org.ffmpeg.ffprobe.StreamsType;
				public programId: number;
				public programNum: number;
				public nbStreams: number;
				public startTime: java.lang.Float;
				public startPts: java.lang.Long;
				public endTime: java.lang.Float;
				public endPts: java.lang.Long;
				public pmtPid: number;
				public pcrPid: number;
				public setNbStreams(value: number): void;
				public setPmtPid(value: number): void;
				public setStreams(value: org.ffmpeg.ffprobe.StreamsType): void;
				public setStartTime(value: java.lang.Float): void;
				public getEndPts(): java.lang.Long;
				public getPcrPid(): number;
				public getStartPts(): java.lang.Long;
				public getProgramId(): number;
				public setStartPts(value: java.lang.Long): void;
				public getNbStreams(): number;
				public setEndTime(value: java.lang.Float): void;
				public constructor();
				public getStartTime(): java.lang.Float;
				public setEndPts(value: java.lang.Long): void;
				public getTag(): java.util.List<org.ffmpeg.ffprobe.TagType>;
				public getStreams(): org.ffmpeg.ffprobe.StreamsType;
				public getPmtPid(): number;
				public setPcrPid(value: number): void;
				public getProgramNum(): number;
				public getEndTime(): java.lang.Float;
				public setProgramNum(value: number): void;
				public setProgramId(value: number): void;
			}
		}
	}
}

declare module org {
	export module ffmpeg {
		export module ffprobe {
			export class ProgramVersionType extends java.lang.Object {
				public static class: java.lang.Class<org.ffmpeg.ffprobe.ProgramVersionType>;
				public version: string;
				public copyright: string;
				public buildDate: string;
				public buildTime: string;
				public compilerIdent: string;
				public configuration: string;
				public setCompilerIdent(value: string): void;
				public setVersion(value: string): void;
				public getCompilerIdent(): string;
				public getBuildTime(): string;
				public constructor();
				public getConfiguration(): string;
				public getVersion(): string;
				public setBuildTime(value: string): void;
				public setConfiguration(value: string): void;
				public getCopyright(): string;
				public setBuildDate(value: string): void;
				public setCopyright(value: string): void;
				public getBuildDate(): string;
			}
		}
	}
}

declare module org {
	export module ffmpeg {
		export module ffprobe {
			export class ProgramsType extends java.lang.Object {
				public static class: java.lang.Class<org.ffmpeg.ffprobe.ProgramsType>;
				public program: java.util.List<org.ffmpeg.ffprobe.ProgramType>;
				public getProgram(): java.util.List<org.ffmpeg.ffprobe.ProgramType>;
				public constructor();
			}
		}
	}
}

declare module org {
	export module ffmpeg {
		export module ffprobe {
			export class StreamDispositionType extends java.lang.Object {
				public static class: java.lang.Class<org.ffmpeg.ffprobe.StreamDispositionType>;
				public _default: number;
				public dub: number;
				public original: number;
				public comment: number;
				public lyrics: number;
				public karaoke: number;
				public forced: number;
				public hearingImpaired: number;
				public visualImpaired: number;
				public cleanEffects: number;
				public attachedPic: number;
				public timedThumbnails: number;
				public getComment(): number;
				public setTimedThumbnails(value: number): void;
				public setKaraoke(value: number): void;
				public constructor();
				public setHearingImpaired(value: number): void;
				public getForced(): number;
				public getCleanEffects(): number;
				public setComment(value: number): void;
				public setForced(value: number): void;
				public getAttachedPic(): number;
				public getDub(): number;
				public getLyrics(): number;
				public setDub(value: number): void;
				public getVisualImpaired(): number;
				public getHearingImpaired(): number;
				public setAttachedPic(value: number): void;
				public setOriginal(value: number): void;
				public setCleanEffects(value: number): void;
				public getDefault(): number;
				public setVisualImpaired(value: number): void;
				public getKaraoke(): number;
				public setDefault(value: number): void;
				public setLyrics(value: number): void;
				public getTimedThumbnails(): number;
				public getOriginal(): number;
			}
		}
	}
}

declare module org {
	export module ffmpeg {
		export module ffprobe {
			export class StreamType extends java.lang.Object {
				public static class: java.lang.Class<org.ffmpeg.ffprobe.StreamType>;
				public disposition: org.ffmpeg.ffprobe.StreamDispositionType;
				public tag: java.util.List<org.ffmpeg.ffprobe.TagType>;
				public sideDataList: org.ffmpeg.ffprobe.PacketSideDataListType;
				public index: number;
				public codecName: string;
				public codecLongName: string;
				public profile: string;
				public codecType: string;
				public codecTimeBase: string;
				public codecTag: string;
				public codecTagString: string;
				public extradata: string;
				public extradataHash: string;
				public width: java.lang.Integer;
				public height: java.lang.Integer;
				public codedWidth: java.lang.Integer;
				public codedHeight: java.lang.Integer;
				public hasBFrames: java.lang.Integer;
				public sampleAspectRatio: string;
				public displayAspectRatio: string;
				public pixFmt: string;
				public level: java.lang.Integer;
				public colorRange: string;
				public colorSpace: string;
				public colorTransfer: string;
				public colorPrimaries: string;
				public chromaLocation: string;
				public fieldOrder: string;
				public timecode: string;
				public refs: java.lang.Integer;
				public sampleFmt: string;
				public sampleRate: java.lang.Integer;
				public channels: java.lang.Integer;
				public channelLayout: string;
				public bitsPerSample: java.lang.Integer;
				public id: string;
				public rFrameRate: string;
				public avgFrameRate: string;
				public timeBase: string;
				public startPts: java.lang.Long;
				public startTime: java.lang.Float;
				public durationTs: java.lang.Long;
				public duration: java.lang.Float;
				public bitRate: java.lang.Integer;
				public maxBitRate: java.lang.Integer;
				public bitsPerRawSample: java.lang.Integer;
				public nbFrames: java.lang.Integer;
				public nbReadFrames: java.lang.Integer;
				public nbReadPackets: java.lang.Integer;
				public getDurationTs(): java.lang.Long;
				public setHeight(value: java.lang.Integer): void;
				public getHasBFrames(): java.lang.Integer;
				public setStartTime(value: java.lang.Float): void;
				public getDisplayAspectRatio(): string;
				public getAvgFrameRate(): string;
				public setId(value: string): void;
				public setSampleRate(value: java.lang.Integer): void;
				public getWidth(): java.lang.Integer;
				public getPixFmt(): string;
				public getColorRange(): string;
				public setCodecType(value: string): void;
				public setNbReadPackets(value: java.lang.Integer): void;
				public setLevel(value: java.lang.Integer): void;
				public setProfile(value: string): void;
				public setHasBFrames(value: java.lang.Integer): void;
				public getNbReadFrames(): java.lang.Integer;
				public getCodedWidth(): java.lang.Integer;
				public getLevel(): java.lang.Integer;
				public setIndex(value: number): void;
				public setChannels(value: java.lang.Integer): void;
				public getCodecTimeBase(): string;
				public getDuration(): java.lang.Float;
				public setNbReadFrames(value: java.lang.Integer): void;
				public getSampleFmt(): string;
				public getColorPrimaries(): string;
				public getBitsPerSample(): java.lang.Integer;
				public getExtradata(): string;
				public setDurationTs(value: java.lang.Long): void;
				public setPixFmt(value: string): void;
				public setColorSpace(value: string): void;
				public getMaxBitRate(): java.lang.Integer;
				public getFieldOrder(): string;
				public getTag(): java.util.List<org.ffmpeg.ffprobe.TagType>;
				public getCodecTagString(): string;
				public getRFrameRate(): string;
				public getTimeBase(): string;
				public getDisposition(): org.ffmpeg.ffprobe.StreamDispositionType;
				public setWidth(value: java.lang.Integer): void;
				public getCodecName(): string;
				public getExtradataHash(): string;
				public setBitsPerRawSample(value: java.lang.Integer): void;
				public getSampleRate(): java.lang.Integer;
				public setDisplayAspectRatio(value: string): void;
				public setCodecTag(value: string): void;
				public setDuration(value: java.lang.Float): void;
				public setBitsPerSample(value: java.lang.Integer): void;
				public setCodecLongName(value: string): void;
				public getId(): string;
				public getNbFrames(): java.lang.Integer;
				public setChannelLayout(value: string): void;
				public setStartPts(value: java.lang.Long): void;
				public getBitRate(): java.lang.Integer;
				public constructor();
				public getHeight(): java.lang.Integer;
				public setFieldOrder(value: string): void;
				public setSampleFmt(value: string): void;
				public setCodecTagString(value: string): void;
				public getTimecode(): string;
				public setCodecTimeBase(value: string): void;
				public getSampleAspectRatio(): string;
				public getColorTransfer(): string;
				public getColorSpace(): string;
				public setExtradataHash(value: string): void;
				public setAvgFrameRate(value: string): void;
				public setDisposition(value: org.ffmpeg.ffprobe.StreamDispositionType): void;
				public getSideDataList(): org.ffmpeg.ffprobe.PacketSideDataListType;
				public getStartPts(): java.lang.Long;
				public getStartTime(): java.lang.Float;
				public setTimecode(value: string): void;
				public setRFrameRate(value: string): void;
				public setTimeBase(value: string): void;
				public setNbFrames(value: java.lang.Integer): void;
				public getBitsPerRawSample(): java.lang.Integer;
				public setMaxBitRate(value: java.lang.Integer): void;
				public setCodecName(value: string): void;
				public getCodecLongName(): string;
				public setCodedWidth(value: java.lang.Integer): void;
				public setColorRange(value: string): void;
				public getIndex(): number;
				public getRefs(): java.lang.Integer;
				public setSideDataList(value: org.ffmpeg.ffprobe.PacketSideDataListType): void;
				public getChannelLayout(): string;
				public getCodecType(): string;
				public getCodecTag(): string;
				public setColorTransfer(value: string): void;
				public getProfile(): string;
				public getCodedHeight(): java.lang.Integer;
				public setBitRate(value: java.lang.Integer): void;
				public setExtradata(value: string): void;
				public getNbReadPackets(): java.lang.Integer;
				public setChromaLocation(value: string): void;
				public setCodedHeight(value: java.lang.Integer): void;
				public setRefs(value: java.lang.Integer): void;
				public getChromaLocation(): string;
				public getChannels(): java.lang.Integer;
				public setColorPrimaries(value: string): void;
				public setSampleAspectRatio(value: string): void;
			}
		}
	}
}

declare module org {
	export module ffmpeg {
		export module ffprobe {
			export class StreamsType extends java.lang.Object {
				public static class: java.lang.Class<org.ffmpeg.ffprobe.StreamsType>;
				public stream: java.util.List<org.ffmpeg.ffprobe.StreamType>;
				public getStream(): java.util.List<org.ffmpeg.ffprobe.StreamType>;
				public constructor();
			}
		}
	}
}

declare module org {
	export module ffmpeg {
		export module ffprobe {
			export class SubtitleType extends java.lang.Object {
				public static class: java.lang.Class<org.ffmpeg.ffprobe.SubtitleType>;
				public mediaType: string;
				public pts: java.lang.Long;
				public ptsTime: java.lang.Float;
				public format: java.lang.Integer;
				public startDisplayTime: java.lang.Integer;
				public endDisplayTime: java.lang.Integer;
				public numRects: java.lang.Integer;
				public setMediaType(value: string): void;
				public setFormat(value: java.lang.Integer): void;
				public setNumRects(value: java.lang.Integer): void;
				public setPts(value: java.lang.Long): void;
				public setStartDisplayTime(value: java.lang.Integer): void;
				public getPts(): java.lang.Long;
				public constructor();
				public setPtsTime(value: java.lang.Float): void;
				public getNumRects(): java.lang.Integer;
				public setEndDisplayTime(value: java.lang.Integer): void;
				public getMediaType(): string;
				public getPtsTime(): java.lang.Float;
				public getEndDisplayTime(): java.lang.Integer;
				public getFormat(): java.lang.Integer;
				public getStartDisplayTime(): java.lang.Integer;
			}
		}
	}
}

declare module org {
	export module ffmpeg {
		export module ffprobe {
			export class TagType extends java.lang.Object {
				public static class: java.lang.Class<org.ffmpeg.ffprobe.TagType>;
				public key: string;
				public value: string;
				public getValue(): string;
				public setValue(value: string): void;
				public getKey(): string;
				public constructor();
				public setKey(value: string): void;
			}
		}
	}
}


declare module tv {
	export module hd3g {
		export module ffprobejaxb {
			export class FFprobeJAXB extends java.lang.Object {
				public static class: java.lang.Class<tv.hd3g.ffprobejaxb.FFprobeJAXB>;
				public probeResult: org.ffmpeg.ffprobe.FfprobeType;
				public static filterVideoStream: any /* any*/;
				public static filterAudioStream: any /* any*/;
				public static filterDataStream: any /* any*/;
				public getVideoStreams(): java.util.stream.Stream<org.ffmpeg.ffprobe.StreamType>;
				public getFormat(): org.ffmpeg.ffprobe.FormatType;
				public getPixelFormats(): java.util.List<org.ffmpeg.ffprobe.PixelFormatType>;
				public getFrames(): java.util.List<any>;
				public getLibraryVersions(): java.util.List<org.ffmpeg.ffprobe.LibraryVersionType>;
				public getPacketsAndFrames(): java.util.List<any>;
				public getAudiosStreams(): java.util.stream.Stream<org.ffmpeg.ffprobe.StreamType>;
				public getPackets(): java.util.List<org.ffmpeg.ffprobe.PacketType>;
				public getPrograms(): java.util.List<org.ffmpeg.ffprobe.ProgramType>;
				public getStreams(): java.util.List<org.ffmpeg.ffprobe.StreamType>;
				public constructor(xmlContent: string, onWarnLog: any /* any*/);
				public getError(): org.ffmpeg.ffprobe.ErrorType;
				public getChapters(): java.util.List<org.ffmpeg.ffprobe.ChapterType>;
				public getProgramVersion(): org.ffmpeg.ffprobe.ProgramVersionType;
				public getXmlContent(): string;
			}
		}
	}
}

//Generics information:

