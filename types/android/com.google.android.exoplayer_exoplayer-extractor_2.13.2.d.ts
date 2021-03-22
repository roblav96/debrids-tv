declare module com {
	export module google {
		export module android {
			export module exoplayer2 {
				export module extractor {
					export abstract class BinarySearchSeeker extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.extractor.BinarySearchSeeker>;
						public seekMap: com.google.android.exoplayer2.extractor.BinarySearchSeeker.BinarySearchSeekMap;
						public timestampSeeker: com.google.android.exoplayer2.extractor.BinarySearchSeeker.TimestampSeeker;
						public seekOperationParams: com.google.android.exoplayer2.extractor.BinarySearchSeeker.SeekOperationParams;
						public setSeekTargetUs(timeUs: number): void;
						public isSeeking(): boolean;
						public markSeekOperationFinished(foundTargetFrame: boolean, resultPosition: number): void;
						public seekToPosition(input: com.google.android.exoplayer2.extractor.ExtractorInput, position: number, seekPositionHolder: com.google.android.exoplayer2.extractor.PositionHolder): number;
						public constructor(seekTimestampConverter: com.google.android.exoplayer2.extractor.BinarySearchSeeker.SeekTimestampConverter, timestampSeeker: com.google.android.exoplayer2.extractor.BinarySearchSeeker.TimestampSeeker, durationUs: number, floorTimePosition: number, ceilingTimePosition: number, floorBytePosition: number, ceilingBytePosition: number, approxBytesPerFrame: number, minimumSearchRange: number);
						public createSeekParamsForTargetTimeUs(timeUs: number): com.google.android.exoplayer2.extractor.BinarySearchSeeker.SeekOperationParams;
						public skipInputUntilPosition(input: com.google.android.exoplayer2.extractor.ExtractorInput, position: number): boolean;
						public getSeekMap(): com.google.android.exoplayer2.extractor.SeekMap;
						public handlePendingSeek(input: com.google.android.exoplayer2.extractor.ExtractorInput, seekPositionHolder: com.google.android.exoplayer2.extractor.PositionHolder): number;
						public onSeekOperationFinished(foundTargetFrame: boolean, resultPosition: number): void;
					}
					export module BinarySearchSeeker {
						export class BinarySearchSeekMap extends java.lang.Object implements com.google.android.exoplayer2.extractor.SeekMap {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.BinarySearchSeeker.BinarySearchSeekMap>;
							public getDurationUs(): number;
							public constructor(seekTimestampConverter: com.google.android.exoplayer2.extractor.BinarySearchSeeker.SeekTimestampConverter, durationUs: number, floorTimePosition: number, ceilingTimePosition: number, floorBytePosition: number, ceilingBytePosition: number, approxBytesPerFrame: number);
							public getSeekPoints(timeUs: number): com.google.android.exoplayer2.extractor.SeekMap.SeekPoints;
							public timeUsToTargetTime(timeUs: number): number;
							public isSeekable(): boolean;
						}
						export class DefaultSeekTimestampConverter extends java.lang.Object implements com.google.android.exoplayer2.extractor.BinarySearchSeeker.SeekTimestampConverter {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.BinarySearchSeeker.DefaultSeekTimestampConverter>;
							public constructor();
							public timeUsToTargetTime(timeUs: number): number;
						}
						export class SeekOperationParams extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.BinarySearchSeeker.SeekOperationParams>;
							public constructor(seekTimeUs: number, targetTimePosition: number, floorTimePosition: number, ceilingTimePosition: number, floorBytePosition: number, ceilingBytePosition: number, approxBytesPerFrame: number);
							public static calculateNextSearchBytePosition(targetTimePosition: number, floorTimePosition: number, ceilingTimePosition: number, floorBytePosition: number, ceilingBytePosition: number, approxBytesPerFrame: number): number;
						}
						export class SeekTimestampConverter extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.BinarySearchSeeker.SeekTimestampConverter>;
							/**
							 * Constructs a new instance of the com.google.android.exoplayer2.extractor.BinarySearchSeeker() when extending the interface class.
							 */
							public constructor(implementation: {
								timeUsToTargetTime(long0: number): number;
							});
							public constructor();
							public timeUsToTargetTime(long0: number): number;
						}
						export class TimestampSearchResult extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.BinarySearchSeeker.TimestampSearchResult>;
							public static TYPE_TARGET_TIMESTAMP_FOUND: number;
							public static TYPE_POSITION_OVERESTIMATED: number;
							public static TYPE_POSITION_UNDERESTIMATED: number;
							public static TYPE_NO_TIMESTAMP: number;
							public static NO_TIMESTAMP_IN_RANGE_RESULT: com.google.android.exoplayer2.extractor.BinarySearchSeeker.TimestampSearchResult;
							public static overestimatedResult(newCeilingTimestamp: number, newCeilingBytePosition: number): com.google.android.exoplayer2.extractor.BinarySearchSeeker.TimestampSearchResult;
							public static underestimatedResult(newFloorTimestamp: number, newCeilingBytePosition: number): com.google.android.exoplayer2.extractor.BinarySearchSeeker.TimestampSearchResult;
							public static targetFoundResult(resultBytePosition: number): com.google.android.exoplayer2.extractor.BinarySearchSeeker.TimestampSearchResult;
						}
						export class TimestampSeeker extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.BinarySearchSeeker.TimestampSeeker>;
							/**
							 * Constructs a new instance of the com.google.android.exoplayer2.extractor.BinarySearchSeeker() when extending the interface class.
							 */
							public constructor(implementation: {
								searchForTimestamp(extractorInput0: com.google.android.exoplayer2.extractor.ExtractorInput, long1: number): com.google.android.exoplayer2.extractor.BinarySearchSeeker.TimestampSearchResult;
								onSeekFinished(): void;
							});
							public constructor();
							public searchForTimestamp(extractorInput0: com.google.android.exoplayer2.extractor.ExtractorInput, long1: number): com.google.android.exoplayer2.extractor.BinarySearchSeeker.TimestampSearchResult;
							public onSeekFinished(): void;
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
				export module extractor {
					export class BuildConfig extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.extractor.BuildConfig>;
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
	}
}

declare module com {
	export module google {
		export module android {
			export module exoplayer2 {
				export module extractor {
					export class CeaUtil extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.extractor.CeaUtil>;
						public static USER_DATA_IDENTIFIER_GA94: number;
						public static USER_DATA_TYPE_CODE_MPEG_CC: number;
						public static consumeCcData(presentationTimeUs: number, ccDataBuffer: com.google.android.exoplayer2.util.ParsableByteArray, outputs: native.Array<com.google.android.exoplayer2.extractor.TrackOutput>): void;
						public static consume(presentationTimeUs: number, seiBuffer: com.google.android.exoplayer2.util.ParsableByteArray, outputs: native.Array<com.google.android.exoplayer2.extractor.TrackOutput>): void;
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
				export module extractor {
					export class ChunkIndex extends java.lang.Object implements com.google.android.exoplayer2.extractor.SeekMap {
						public static class: java.lang.Class<com.google.android.exoplayer2.extractor.ChunkIndex>;
						public length: number;
						public sizes: native.Array<number>;
						public offsets: native.Array<number>;
						public durationsUs: native.Array<number>;
						public timesUs: native.Array<number>;
						public getDurationUs(): number;
						public constructor(sizes: native.Array<number>, offsets: native.Array<number>, durationsUs: native.Array<number>, timesUs: native.Array<number>);
						public getSeekPoints(timeUs: number): com.google.android.exoplayer2.extractor.SeekMap.SeekPoints;
						public getChunkIndex(timeUs: number): number;
						public isSeekable(): boolean;
						public toString(): string;
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
				export module extractor {
					export class ConstantBitrateSeekMap extends java.lang.Object implements com.google.android.exoplayer2.extractor.SeekMap {
						public static class: java.lang.Class<com.google.android.exoplayer2.extractor.ConstantBitrateSeekMap>;
						public getDurationUs(): number;
						public getTimeUsAtPosition(position: number): number;
						public constructor(inputLength: number, firstFrameBytePosition: number, bitrate: number, frameSize: number);
						public getSeekPoints(timeUs: number): com.google.android.exoplayer2.extractor.SeekMap.SeekPoints;
						public isSeekable(): boolean;
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
				export module extractor {
					export class DefaultExtractorInput extends java.lang.Object implements com.google.android.exoplayer2.extractor.ExtractorInput {
						public static class: java.lang.Class<com.google.android.exoplayer2.extractor.DefaultExtractorInput>;
						public peek(target: native.Array<number>, offset: number, length: number): number;
						public readFully(target: native.Array<number>, offset: number, length: number): void;
						public advancePeekPosition(length: number, allowEndOfInput: boolean): boolean;
						public read(target: native.Array<number>, offset: number, length: number): number;
						public resetPeekPosition(): void;
						public getPosition(): number;
						public readFully(target: native.Array<number>, offset: number, length: number, allowEndOfInput: boolean): boolean;
						public getLength(): number;
						public skipFully(length: number): void;
						public constructor(dataReader: com.google.android.exoplayer2.upstream.DataReader, position: number, length: number);
						public peekFully(target: native.Array<number>, offset: number, length: number): void;
						public skipFully(length: number, allowEndOfInput: boolean): boolean;
						public setRetryPosition(position: number, e: java.lang.Throwable): void;
						public advancePeekPosition(length: number): void;
						public getPeekPosition(): number;
						public skip(length: number): number;
						public peekFully(target: native.Array<number>, offset: number, length: number, allowEndOfInput: boolean): boolean;
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
				export module extractor {
					export class DefaultExtractorsFactory extends java.lang.Object implements com.google.android.exoplayer2.extractor.ExtractorsFactory {
						public static class: java.lang.Class<com.google.android.exoplayer2.extractor.DefaultExtractorsFactory>;
						public constructor();
						public setMp3ExtractorFlags(flags: number): com.google.android.exoplayer2.extractor.DefaultExtractorsFactory;
						public setFragmentedMp4ExtractorFlags(flags: number): com.google.android.exoplayer2.extractor.DefaultExtractorsFactory;
						public setConstantBitrateSeekingEnabled(constantBitrateSeekingEnabled: boolean): com.google.android.exoplayer2.extractor.DefaultExtractorsFactory;
						public setAdtsExtractorFlags(flags: number): com.google.android.exoplayer2.extractor.DefaultExtractorsFactory;
						public setMp4ExtractorFlags(flags: number): com.google.android.exoplayer2.extractor.DefaultExtractorsFactory;
						public setMatroskaExtractorFlags(flags: number): com.google.android.exoplayer2.extractor.DefaultExtractorsFactory;
						public setFlacExtractorFlags(flags: number): com.google.android.exoplayer2.extractor.DefaultExtractorsFactory;
						public setTsExtractorFlags(flags: number): com.google.android.exoplayer2.extractor.DefaultExtractorsFactory;
						public setTsExtractorMode(mode: number): com.google.android.exoplayer2.extractor.DefaultExtractorsFactory;
						public setAmrExtractorFlags(flags: number): com.google.android.exoplayer2.extractor.DefaultExtractorsFactory;
						public createExtractors(): native.Array<com.google.android.exoplayer2.extractor.Extractor>;
						public createExtractors(uri: globalAndroid.net.Uri, responseHeaders: java.util.Map<string,java.util.List<string>>): native.Array<com.google.android.exoplayer2.extractor.Extractor>;
						public setTsExtractorTimestampSearchBytes(timestampSearchBytes: number): com.google.android.exoplayer2.extractor.DefaultExtractorsFactory;
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
				export module extractor {
					export class DummyExtractorOutput extends java.lang.Object implements com.google.android.exoplayer2.extractor.ExtractorOutput {
						public static class: java.lang.Class<com.google.android.exoplayer2.extractor.DummyExtractorOutput>;
						public constructor();
						public endTracks(): void;
						public track(id: number, type: number): com.google.android.exoplayer2.extractor.TrackOutput;
						public seekMap(seekMap: com.google.android.exoplayer2.extractor.SeekMap): void;
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
				export module extractor {
					export class DummyTrackOutput extends java.lang.Object implements com.google.android.exoplayer2.extractor.TrackOutput {
						public static class: java.lang.Class<com.google.android.exoplayer2.extractor.DummyTrackOutput>;
						public constructor();
						public format(format: com.google.android.exoplayer2.Format): void;
						public sampleData(data: com.google.android.exoplayer2.util.ParsableByteArray, length: number, sampleDataPart: number): void;
						public sampleMetadata(timeUs: number, flags: number, size: number, offset: number, cryptoData: com.google.android.exoplayer2.extractor.TrackOutput.CryptoData): void;
						public sampleData(input: com.google.android.exoplayer2.upstream.DataReader, length: number, allowEndOfInput: boolean): number;
						public sampleData(data: com.google.android.exoplayer2.util.ParsableByteArray, length: number): void;
						public sampleData(input: com.google.android.exoplayer2.upstream.DataReader, length: number, allowEndOfInput: boolean, sampleDataPart: number): number;
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
				export module extractor {
					export class Extractor extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.extractor.Extractor>;
						/**
						 * Constructs a new instance of the com.google.android.exoplayer2.extractor.Extractor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							sniff(extractorInput0: com.google.android.exoplayer2.extractor.ExtractorInput): boolean;
							init(extractorOutput0: com.google.android.exoplayer2.extractor.ExtractorOutput): void;
							read(extractorInput0: com.google.android.exoplayer2.extractor.ExtractorInput, positionHolder1: com.google.android.exoplayer2.extractor.PositionHolder): number;
							seek(long0: number, long1: number): void;
							release(): void;
						});
						public constructor();
						public static RESULT_CONTINUE: number;
						public static RESULT_SEEK: number;
						public static RESULT_END_OF_INPUT: number;
						public sniff(extractorInput0: com.google.android.exoplayer2.extractor.ExtractorInput): boolean;
						public release(): void;
						public seek(long0: number, long1: number): void;
						public read(extractorInput0: com.google.android.exoplayer2.extractor.ExtractorInput, positionHolder1: com.google.android.exoplayer2.extractor.PositionHolder): number;
						public init(extractorOutput0: com.google.android.exoplayer2.extractor.ExtractorOutput): void;
					}
					export module Extractor {
						export class ReadResult extends java.lang.Object implements java.lang.annotation.Annotation {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.Extractor.ReadResult>;
							/**
							 * Constructs a new instance of the com.google.android.exoplayer2.extractor.Extractor() when extending the interface class.
							 */
							public constructor(implementation: {
								equals(object0: any): boolean;
								hashCode(): number;
								toString(): string;
								annotationType(): java.lang.Class<any>;
							});
							public constructor();
							public hashCode(): number;
							public annotationType(): java.lang.Class<any>;
							public equals(obj: any): boolean;
							public toString(): string;
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
				export module extractor {
					export class ExtractorInput extends java.lang.Object implements com.google.android.exoplayer2.upstream.DataReader {
						public static class: java.lang.Class<com.google.android.exoplayer2.extractor.ExtractorInput>;
						/**
						 * Constructs a new instance of the com.google.android.exoplayer2.extractor.ExtractorInput interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							read(bytes0: native.Array<number>, int1: number, int2: number): number;
							readFully(bytes0: native.Array<number>, int1: number, int2: number, boolean3: boolean): boolean;
							readFully(bytes0: native.Array<number>, int1: number, int2: number): void;
							skip(int0: number): number;
							skipFully(int0: number, boolean1: boolean): boolean;
							skipFully(int0: number): void;
							peek(bytes0: native.Array<number>, int1: number, int2: number): number;
							peekFully(bytes0: native.Array<number>, int1: number, int2: number, boolean3: boolean): boolean;
							peekFully(bytes0: native.Array<number>, int1: number, int2: number): void;
							advancePeekPosition(int0: number, boolean1: boolean): boolean;
							advancePeekPosition(int0: number): void;
							resetPeekPosition(): void;
							getPeekPosition(): number;
							getPosition(): number;
							getLength(): number;
							setRetryPosition(long0: number, throwable1: java.lang.Throwable): void;
							read(bytes0: native.Array<number>, int1: number, int2: number): number;
						});
						public constructor();
						public peekFully(bytes0: native.Array<number>, int1: number, int2: number, boolean3: boolean): boolean;
						public advancePeekPosition(int0: number): void;
						public resetPeekPosition(): void;
						public getPosition(): number;
						public getLength(): number;
						public peekFully(bytes0: native.Array<number>, int1: number, int2: number): void;
						public skip(int0: number): number;
						public skipFully(int0: number, boolean1: boolean): boolean;
						public peek(bytes0: native.Array<number>, int1: number, int2: number): number;
						public readFully(bytes0: native.Array<number>, int1: number, int2: number, boolean3: boolean): boolean;
						public readFully(bytes0: native.Array<number>, int1: number, int2: number): void;
						public advancePeekPosition(int0: number, boolean1: boolean): boolean;
						public read(bytes0: native.Array<number>, int1: number, int2: number): number;
						public getPeekPosition(): number;
						public skipFully(int0: number): void;
						public setRetryPosition(long0: number, throwable1: java.lang.Throwable): void;
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
				export module extractor {
					export class ExtractorOutput extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.extractor.ExtractorOutput>;
						/**
						 * Constructs a new instance of the com.google.android.exoplayer2.extractor.ExtractorOutput interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							track(int0: number, int1: number): com.google.android.exoplayer2.extractor.TrackOutput;
							endTracks(): void;
							seekMap(seekMap0: com.google.android.exoplayer2.extractor.SeekMap): void;
						});
						public constructor();
						public static PLACEHOLDER: com.google.android.exoplayer2.extractor.ExtractorOutput;
						public endTracks(): void;
						public track(int0: number, int1: number): com.google.android.exoplayer2.extractor.TrackOutput;
						public seekMap(seekMap0: com.google.android.exoplayer2.extractor.SeekMap): void;
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
				export module extractor {
					export class ExtractorUtil extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.extractor.ExtractorUtil>;
						public static peekToLength(input: com.google.android.exoplayer2.extractor.ExtractorInput, target: native.Array<number>, offset: number, length: number): number;
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
				export module extractor {
					export class ExtractorsFactory extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.extractor.ExtractorsFactory>;
						/**
						 * Constructs a new instance of the com.google.android.exoplayer2.extractor.ExtractorsFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							createExtractors(): native.Array<com.google.android.exoplayer2.extractor.Extractor>;
							createExtractors(uri: globalAndroid.net.Uri, responseHeaders: java.util.Map<string,java.util.List<string>>): native.Array<com.google.android.exoplayer2.extractor.Extractor>;
							lambda(): native.Array<com.google.android.exoplayer2.extractor.Extractor>;
						});
						public constructor();
						public static EMPTY: com.google.android.exoplayer2.extractor.ExtractorsFactory;
						public createExtractors(): native.Array<com.google.android.exoplayer2.extractor.Extractor>;
						public createExtractors(uri: globalAndroid.net.Uri, responseHeaders: java.util.Map<string,java.util.List<string>>): native.Array<com.google.android.exoplayer2.extractor.Extractor>;
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
				export module extractor {
					export class FlacFrameReader extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.extractor.FlacFrameReader>;
						public static checkFrameHeaderFromPeek(input: com.google.android.exoplayer2.extractor.ExtractorInput, flacStreamMetadata: com.google.android.exoplayer2.extractor.FlacStreamMetadata, frameStartMarker: number, sampleNumberHolder: com.google.android.exoplayer2.extractor.FlacFrameReader.SampleNumberHolder): boolean;
						public static getFirstSampleNumber(input: com.google.android.exoplayer2.extractor.ExtractorInput, flacStreamMetadata: com.google.android.exoplayer2.extractor.FlacStreamMetadata): number;
						public static readFrameBlockSizeSamplesFromKey(data: com.google.android.exoplayer2.util.ParsableByteArray, blockSizeKey: number): number;
						public static checkAndReadFrameHeader(data: com.google.android.exoplayer2.util.ParsableByteArray, flacStreamMetadata: com.google.android.exoplayer2.extractor.FlacStreamMetadata, frameStartMarker: number, sampleNumberHolder: com.google.android.exoplayer2.extractor.FlacFrameReader.SampleNumberHolder): boolean;
					}
					export module FlacFrameReader {
						export class SampleNumberHolder extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.FlacFrameReader.SampleNumberHolder>;
							public sampleNumber: number;
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
				export module extractor {
					export class FlacMetadataReader extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.extractor.FlacMetadataReader>;
						public static readSeekTableMetadataBlock(data: com.google.android.exoplayer2.util.ParsableByteArray): com.google.android.exoplayer2.extractor.FlacStreamMetadata.SeekTable;
						public static readId3Metadata(input: com.google.android.exoplayer2.extractor.ExtractorInput, parseData: boolean): com.google.android.exoplayer2.metadata.Metadata;
						public static readMetadataBlock(input: com.google.android.exoplayer2.extractor.ExtractorInput, metadataHolder: com.google.android.exoplayer2.extractor.FlacMetadataReader.FlacStreamMetadataHolder): boolean;
						public static checkAndPeekStreamMarker(input: com.google.android.exoplayer2.extractor.ExtractorInput): boolean;
						public static getFrameStartMarker(input: com.google.android.exoplayer2.extractor.ExtractorInput): number;
						public static peekId3Metadata(input: com.google.android.exoplayer2.extractor.ExtractorInput, parseData: boolean): com.google.android.exoplayer2.metadata.Metadata;
						public static readStreamMarker(input: com.google.android.exoplayer2.extractor.ExtractorInput): void;
					}
					export module FlacMetadataReader {
						export class FlacStreamMetadataHolder extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.FlacMetadataReader.FlacStreamMetadataHolder>;
							public flacStreamMetadata: com.google.android.exoplayer2.extractor.FlacStreamMetadata;
							public constructor(flacStreamMetadata: com.google.android.exoplayer2.extractor.FlacStreamMetadata);
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
				export module extractor {
					export class FlacSeekTableSeekMap extends java.lang.Object implements com.google.android.exoplayer2.extractor.SeekMap {
						public static class: java.lang.Class<com.google.android.exoplayer2.extractor.FlacSeekTableSeekMap>;
						public getDurationUs(): number;
						public constructor(flacStreamMetadata: com.google.android.exoplayer2.extractor.FlacStreamMetadata, firstFrameOffset: number);
						public getSeekPoints(timeUs: number): com.google.android.exoplayer2.extractor.SeekMap.SeekPoints;
						public isSeekable(): boolean;
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
				export module extractor {
					export class FlacStreamMetadata extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.extractor.FlacStreamMetadata>;
						public static NOT_IN_LOOKUP_TABLE: number;
						public minBlockSizeSamples: number;
						public maxBlockSizeSamples: number;
						public minFrameSize: number;
						public maxFrameSize: number;
						public sampleRate: number;
						public sampleRateLookupKey: number;
						public channels: number;
						public bitsPerSample: number;
						public bitsPerSampleLookupKey: number;
						public totalSamples: number;
						public seekTable: com.google.android.exoplayer2.extractor.FlacStreamMetadata.SeekTable;
						public getMaxDecodedFrameSize(): number;
						public getDecodedBitrate(): number;
						public getDurationUs(): number;
						public getApproxBytesPerFrame(): number;
						public copyWithVorbisComments(vorbisComments: java.util.List<string>): com.google.android.exoplayer2.extractor.FlacStreamMetadata;
						public copyWithSeekTable(seekTable: com.google.android.exoplayer2.extractor.FlacStreamMetadata.SeekTable): com.google.android.exoplayer2.extractor.FlacStreamMetadata;
						public constructor(data: native.Array<number>, offset: number);
						public getFormat(streamMarkerAndInfoBlock: native.Array<number>, id3Metadata: com.google.android.exoplayer2.metadata.Metadata): com.google.android.exoplayer2.Format;
						public getSampleNumber(timeUs: number): number;
						public constructor(minBlockSizeSamples: number, maxBlockSizeSamples: number, minFrameSize: number, maxFrameSize: number, sampleRate: number, channels: number, bitsPerSample: number, totalSamples: number, vorbisComments: java.util.ArrayList<string>, pictureFrames: java.util.ArrayList<com.google.android.exoplayer2.metadata.flac.PictureFrame>);
						public getMetadataCopyWithAppendedEntriesFrom(other: com.google.android.exoplayer2.metadata.Metadata): com.google.android.exoplayer2.metadata.Metadata;
						public copyWithPictureFrames(pictureFrames: java.util.List<com.google.android.exoplayer2.metadata.flac.PictureFrame>): com.google.android.exoplayer2.extractor.FlacStreamMetadata;
					}
					export module FlacStreamMetadata {
						export class SeekTable extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.FlacStreamMetadata.SeekTable>;
							public pointSampleNumbers: native.Array<number>;
							public pointOffsets: native.Array<number>;
							public constructor(pointSampleNumbers: native.Array<number>, pointOffsets: native.Array<number>);
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
				export module extractor {
					export class ForwardingExtractorInput extends java.lang.Object implements com.google.android.exoplayer2.extractor.ExtractorInput {
						public static class: java.lang.Class<com.google.android.exoplayer2.extractor.ForwardingExtractorInput>;
						public peek(target: native.Array<number>, offset: number, length: number): number;
						public readFully(target: native.Array<number>, offset: number, length: number): void;
						public advancePeekPosition(length: number, allowEndOfInput: boolean): boolean;
						public read(target: native.Array<number>, offset: number, length: number): number;
						public resetPeekPosition(): void;
						public getPosition(): number;
						public readFully(target: native.Array<number>, offset: number, length: number, allowEndOfInput: boolean): boolean;
						public getLength(): number;
						public skipFully(length: number): void;
						public peekFully(target: native.Array<number>, offset: number, length: number): void;
						public skipFully(length: number, allowEndOfInput: boolean): boolean;
						public setRetryPosition(position: number, e: java.lang.Throwable): void;
						public constructor(input: com.google.android.exoplayer2.extractor.ExtractorInput);
						public advancePeekPosition(length: number): void;
						public getPeekPosition(): number;
						public skip(length: number): number;
						public peekFully(target: native.Array<number>, offset: number, length: number, allowEndOfInput: boolean): boolean;
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
				export module extractor {
					export class GaplessInfoHolder extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.extractor.GaplessInfoHolder>;
						public encoderDelay: number;
						public encoderPadding: number;
						public constructor();
						public setFromXingHeaderValue(value: number): boolean;
						public setFromMetadata(metadata: com.google.android.exoplayer2.metadata.Metadata): boolean;
						public hasGaplessInfo(): boolean;
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
				export module extractor {
					export class Id3Peeker extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.extractor.Id3Peeker>;
						public constructor();
						public peekId3Data(input: com.google.android.exoplayer2.extractor.ExtractorInput, id3FramePredicate: com.google.android.exoplayer2.metadata.id3.Id3Decoder.FramePredicate): com.google.android.exoplayer2.metadata.Metadata;
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
				export module extractor {
					export class IndexSeekMap extends java.lang.Object implements com.google.android.exoplayer2.extractor.SeekMap {
						public static class: java.lang.Class<com.google.android.exoplayer2.extractor.IndexSeekMap>;
						public getDurationUs(): number;
						public constructor(positions: native.Array<number>, timesUs: native.Array<number>, durationUs: number);
						public getSeekPoints(timeUs: number): com.google.android.exoplayer2.extractor.SeekMap.SeekPoints;
						public isSeekable(): boolean;
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
				export module extractor {
					export class PositionHolder extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.extractor.PositionHolder>;
						public position: number;
						public constructor();
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
				export module extractor {
					export class SeekMap extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.extractor.SeekMap>;
						/**
						 * Constructs a new instance of the com.google.android.exoplayer2.extractor.SeekMap interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							isSeekable(): boolean;
							getDurationUs(): number;
							getSeekPoints(long0: number): com.google.android.exoplayer2.extractor.SeekMap.SeekPoints;
						});
						public constructor();
						public getDurationUs(): number;
						public getSeekPoints(long0: number): com.google.android.exoplayer2.extractor.SeekMap.SeekPoints;
						public isSeekable(): boolean;
					}
					export module SeekMap {
						export class SeekPoints extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.SeekMap.SeekPoints>;
							public first: com.google.android.exoplayer2.extractor.SeekPoint;
							public second: com.google.android.exoplayer2.extractor.SeekPoint;
							public hashCode(): number;
							public constructor(point: com.google.android.exoplayer2.extractor.SeekPoint);
							public equals(obj: any): boolean;
							public toString(): string;
							public constructor(first: com.google.android.exoplayer2.extractor.SeekPoint, second: com.google.android.exoplayer2.extractor.SeekPoint);
						}
						export class Unseekable extends java.lang.Object implements com.google.android.exoplayer2.extractor.SeekMap {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.SeekMap.Unseekable>;
							public constructor(durationUs: number);
							public getDurationUs(): number;
							public getSeekPoints(timeUs: number): com.google.android.exoplayer2.extractor.SeekMap.SeekPoints;
							public constructor(durationUs: number, startPosition: number);
							public isSeekable(): boolean;
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
				export module extractor {
					export class SeekPoint extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.extractor.SeekPoint>;
						public static START: com.google.android.exoplayer2.extractor.SeekPoint;
						public timeUs: number;
						public position: number;
						public equals(obj: any): boolean;
						public hashCode(): number;
						public toString(): string;
						public constructor(timeUs: number, position: number);
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
				export module extractor {
					export class TrackOutput extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.extractor.TrackOutput>;
						/**
						 * Constructs a new instance of the com.google.android.exoplayer2.extractor.TrackOutput interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							format(format0: com.google.android.exoplayer2.Format): void;
							sampleData(input: com.google.android.exoplayer2.upstream.DataReader, length: number, allowEndOfInput: boolean): number;
							sampleData(data: com.google.android.exoplayer2.util.ParsableByteArray, length: number): void;
							sampleData(dataReader0: com.google.android.exoplayer2.upstream.DataReader, int1: number, boolean2: boolean, int3: number): number;
							sampleData(parsableByteArray0: com.google.android.exoplayer2.util.ParsableByteArray, int1: number, int2: number): void;
							sampleMetadata(long0: number, int1: number, int2: number, int3: number, cryptoData4: com.google.android.exoplayer2.extractor.TrackOutput.CryptoData): void;
						});
						public constructor();
						public static SAMPLE_DATA_PART_MAIN: number;
						public static SAMPLE_DATA_PART_ENCRYPTION: number;
						public static SAMPLE_DATA_PART_SUPPLEMENTAL: number;
						public sampleData(parsableByteArray0: com.google.android.exoplayer2.util.ParsableByteArray, int1: number, int2: number): void;
						public sampleMetadata(long0: number, int1: number, int2: number, int3: number, cryptoData4: com.google.android.exoplayer2.extractor.TrackOutput.CryptoData): void;
						public format(format0: com.google.android.exoplayer2.Format): void;
						public sampleData(input: com.google.android.exoplayer2.upstream.DataReader, length: number, allowEndOfInput: boolean): number;
						public sampleData(data: com.google.android.exoplayer2.util.ParsableByteArray, length: number): void;
						public sampleData(dataReader0: com.google.android.exoplayer2.upstream.DataReader, int1: number, boolean2: boolean, int3: number): number;
					}
					export module TrackOutput {
						export class CryptoData extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.TrackOutput.CryptoData>;
							public cryptoMode: number;
							public encryptionKey: native.Array<number>;
							public encryptedBlocks: number;
							public clearBlocks: number;
							public hashCode(): number;
							public equals(obj: any): boolean;
							public constructor(cryptoMode: number, encryptionKey: native.Array<number>, encryptedBlocks: number, clearBlocks: number);
						}
						export class SampleDataPart extends java.lang.Object implements java.lang.annotation.Annotation {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.TrackOutput.SampleDataPart>;
							/**
							 * Constructs a new instance of the com.google.android.exoplayer2.extractor.TrackOutput() when extending the interface class.
							 */
							public constructor(implementation: {
								equals(object0: any): boolean;
								hashCode(): number;
								toString(): string;
								annotationType(): java.lang.Class<any>;
							});
							public constructor();
							public hashCode(): number;
							public annotationType(): java.lang.Class<any>;
							public equals(obj: any): boolean;
							public toString(): string;
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
				export module extractor {
					export class VorbisBitArray extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.extractor.VorbisBitArray>;
						public setPosition(position: number): void;
						public skipBits(numBits: number): void;
						public getPosition(): number;
						public constructor(data: native.Array<number>);
						public readBits(numBits: number): number;
						public readBit(): boolean;
						public bitsLeft(): number;
						public reset(): void;
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
				export module extractor {
					export class VorbisUtil extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.extractor.VorbisUtil>;
						public static iLog(x: number): number;
						public static readVorbisCommentHeader(headerData: com.google.android.exoplayer2.util.ParsableByteArray, hasMetadataHeader: boolean, hasFramingBit: boolean): com.google.android.exoplayer2.extractor.VorbisUtil.CommentHeader;
						public static readVorbisIdentificationHeader(headerData: com.google.android.exoplayer2.util.ParsableByteArray): com.google.android.exoplayer2.extractor.VorbisUtil.VorbisIdHeader;
						public static verifyVorbisHeaderCapturePattern(headerType: number, header: com.google.android.exoplayer2.util.ParsableByteArray, quiet: boolean): boolean;
						public static readVorbisModes(headerData: com.google.android.exoplayer2.util.ParsableByteArray, channels: number): native.Array<com.google.android.exoplayer2.extractor.VorbisUtil.Mode>;
						public static readVorbisCommentHeader(headerData: com.google.android.exoplayer2.util.ParsableByteArray): com.google.android.exoplayer2.extractor.VorbisUtil.CommentHeader;
					}
					export module VorbisUtil {
						export class CodeBook extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.VorbisUtil.CodeBook>;
							public dimensions: number;
							public entries: number;
							public lengthMap: native.Array<number>;
							public lookupType: number;
							public isOrdered: boolean;
							public constructor(dimensions: number, entries: number, lengthMap: native.Array<number>, lookupType: number, isOrdered: boolean);
						}
						export class CommentHeader extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.VorbisUtil.CommentHeader>;
							public vendor: string;
							public comments: native.Array<string>;
							public length: number;
							public constructor(vendor: string, comments: native.Array<string>, length: number);
						}
						export class Mode extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.VorbisUtil.Mode>;
							public blockFlag: boolean;
							public windowType: number;
							public transformType: number;
							public mapping: number;
							public constructor(blockFlag: boolean, windowType: number, transformType: number, mapping: number);
						}
						export class VorbisIdHeader extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.VorbisUtil.VorbisIdHeader>;
							public version: number;
							public channels: number;
							public sampleRate: number;
							public bitrateMaximum: number;
							public bitrateNominal: number;
							public bitrateMinimum: number;
							public blockSize0: number;
							public blockSize1: number;
							public framingFlag: boolean;
							public data: native.Array<number>;
							public constructor(version: number, channels: number, sampleRate: number, bitrateMaximum: number, bitrateNominal: number, bitrateMinimum: number, blockSize0: number, blockSize1: number, framingFlag: boolean, data: native.Array<number>);
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
				export module extractor {
					export module amr {
						export class AmrExtractor extends java.lang.Object implements com.google.android.exoplayer2.extractor.Extractor {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.amr.AmrExtractor>;
							public static FACTORY: com.google.android.exoplayer2.extractor.ExtractorsFactory;
							public static FLAG_ENABLE_CONSTANT_BITRATE_SEEKING: number;
							public constructor();
							public constructor(flags: number);
							public sniff(input: com.google.android.exoplayer2.extractor.ExtractorInput): boolean;
							public seek(position: number, timeUs: number): void;
							public release(): void;
							public read(input: com.google.android.exoplayer2.extractor.ExtractorInput, seekPosition: com.google.android.exoplayer2.extractor.PositionHolder): number;
							public init(extractorOutput: com.google.android.exoplayer2.extractor.ExtractorOutput): void;
						}
						export module AmrExtractor {
							export class Flags extends java.lang.Object implements java.lang.annotation.Annotation {
								public static class: java.lang.Class<com.google.android.exoplayer2.extractor.amr.AmrExtractor.Flags>;
								/**
								 * Constructs a new instance of the com.google.android.exoplayer2.extractor.amr.AmrExtractor() when extending the interface class.
								 */
								public constructor(implementation: {
									equals(object0: any): boolean;
									hashCode(): number;
									toString(): string;
									annotationType(): java.lang.Class<any>;
								});
								public constructor();
								public toString(): string;
								public equals(obj: any): boolean;
								public annotationType(): java.lang.Class<any>;
								public hashCode(): number;
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
				export module extractor {
					export module flac {
						export class FlacBinarySearchSeeker extends com.google.android.exoplayer2.extractor.BinarySearchSeeker {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.flac.FlacBinarySearchSeeker>;
							public constructor(flacStreamMetadata: com.google.android.exoplayer2.extractor.FlacStreamMetadata, frameStartMarker: number, firstFramePosition: number, inputLength: number);
							public constructor(seekTimestampConverter: com.google.android.exoplayer2.extractor.BinarySearchSeeker.SeekTimestampConverter, timestampSeeker: com.google.android.exoplayer2.extractor.BinarySearchSeeker.TimestampSeeker, durationUs: number, floorTimePosition: number, ceilingTimePosition: number, floorBytePosition: number, ceilingBytePosition: number, approxBytesPerFrame: number, minimumSearchRange: number);
						}
						export module FlacBinarySearchSeeker {
							export class FlacTimestampSeeker extends java.lang.Object implements com.google.android.exoplayer2.extractor.BinarySearchSeeker.TimestampSeeker {
								public static class: java.lang.Class<com.google.android.exoplayer2.extractor.flac.FlacBinarySearchSeeker.FlacTimestampSeeker>;
								public searchForTimestamp(input: com.google.android.exoplayer2.extractor.ExtractorInput, targetSampleNumber: number): com.google.android.exoplayer2.extractor.BinarySearchSeeker.TimestampSearchResult;
								public onSeekFinished(): void;
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
				export module extractor {
					export module flac {
						export class FlacExtractor extends java.lang.Object implements com.google.android.exoplayer2.extractor.Extractor {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.flac.FlacExtractor>;
							public static FACTORY: com.google.android.exoplayer2.extractor.ExtractorsFactory;
							public static FLAG_DISABLE_ID3_METADATA: number;
							public constructor();
							public constructor(flags: number);
							public sniff(input: com.google.android.exoplayer2.extractor.ExtractorInput): boolean;
							public seek(position: number, timeUs: number): void;
							public release(): void;
							public init(output: com.google.android.exoplayer2.extractor.ExtractorOutput): void;
							public read(input: com.google.android.exoplayer2.extractor.ExtractorInput, seekPosition: com.google.android.exoplayer2.extractor.PositionHolder): number;
						}
						export module FlacExtractor {
							export class Flags extends java.lang.Object implements java.lang.annotation.Annotation {
								public static class: java.lang.Class<com.google.android.exoplayer2.extractor.flac.FlacExtractor.Flags>;
								/**
								 * Constructs a new instance of the com.google.android.exoplayer2.extractor.flac.FlacExtractor() when extending the interface class.
								 */
								public constructor(implementation: {
									equals(object0: any): boolean;
									hashCode(): number;
									toString(): string;
									annotationType(): java.lang.Class<any>;
								});
								public constructor();
								public toString(): string;
								public equals(obj: any): boolean;
								public annotationType(): java.lang.Class<any>;
								public hashCode(): number;
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
				export module extractor {
					export module flv {
						export class AudioTagPayloadReader extends com.google.android.exoplayer2.extractor.flv.TagPayloadReader {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.flv.AudioTagPayloadReader>;
							public parseHeader(parsableByteArray0: com.google.android.exoplayer2.util.ParsableByteArray): boolean;
							public seek(): void;
							public parsePayload(parsableByteArray0: com.google.android.exoplayer2.util.ParsableByteArray, long1: number): boolean;
							public constructor(output: com.google.android.exoplayer2.extractor.TrackOutput);
							public parsePayload(data: com.google.android.exoplayer2.util.ParsableByteArray, timeUs: number): boolean;
							public parseHeader(data: com.google.android.exoplayer2.util.ParsableByteArray): boolean;
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
				export module extractor {
					export module flv {
						export class FlvExtractor extends java.lang.Object implements com.google.android.exoplayer2.extractor.Extractor {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.flv.FlvExtractor>;
							public static FACTORY: com.google.android.exoplayer2.extractor.ExtractorsFactory;
							public constructor();
							public sniff(input: com.google.android.exoplayer2.extractor.ExtractorInput): boolean;
							public seek(position: number, timeUs: number): void;
							public release(): void;
							public init(output: com.google.android.exoplayer2.extractor.ExtractorOutput): void;
							public read(input: com.google.android.exoplayer2.extractor.ExtractorInput, seekPosition: com.google.android.exoplayer2.extractor.PositionHolder): number;
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
				export module extractor {
					export module flv {
						export class ScriptTagPayloadReader extends com.google.android.exoplayer2.extractor.flv.TagPayloadReader {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.flv.ScriptTagPayloadReader>;
							public constructor();
							public getDurationUs(): number;
							public parseHeader(parsableByteArray0: com.google.android.exoplayer2.util.ParsableByteArray): boolean;
							public seek(): void;
							public parsePayload(parsableByteArray0: com.google.android.exoplayer2.util.ParsableByteArray, long1: number): boolean;
							public constructor(output: com.google.android.exoplayer2.extractor.TrackOutput);
							public getKeyFrameTimesUs(): native.Array<number>;
							public parsePayload(data: com.google.android.exoplayer2.util.ParsableByteArray, timeUs: number): boolean;
							public parseHeader(data: com.google.android.exoplayer2.util.ParsableByteArray): boolean;
							public getKeyFrameTagPositions(): native.Array<number>;
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
				export module extractor {
					export module flv {
						export abstract class TagPayloadReader extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.flv.TagPayloadReader>;
							public output: com.google.android.exoplayer2.extractor.TrackOutput;
							public consume(data: com.google.android.exoplayer2.util.ParsableByteArray, timeUs: number): boolean;
							public parseHeader(parsableByteArray0: com.google.android.exoplayer2.util.ParsableByteArray): boolean;
							public seek(): void;
							public parsePayload(parsableByteArray0: com.google.android.exoplayer2.util.ParsableByteArray, long1: number): boolean;
							public constructor(output: com.google.android.exoplayer2.extractor.TrackOutput);
						}
						export module TagPayloadReader {
							export class UnsupportedFormatException extends com.google.android.exoplayer2.ParserException {
								public static class: java.lang.Class<com.google.android.exoplayer2.extractor.flv.TagPayloadReader.UnsupportedFormatException>;
								public constructor(message: string);
								public constructor(cause: java.lang.Throwable);
								public constructor(msg: string);
								public constructor(message: string, cause: java.lang.Throwable);
								public constructor();
								public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
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
				export module extractor {
					export module flv {
						export class VideoTagPayloadReader extends com.google.android.exoplayer2.extractor.flv.TagPayloadReader {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.flv.VideoTagPayloadReader>;
							public parseHeader(parsableByteArray0: com.google.android.exoplayer2.util.ParsableByteArray): boolean;
							public seek(): void;
							public parsePayload(parsableByteArray0: com.google.android.exoplayer2.util.ParsableByteArray, long1: number): boolean;
							public constructor(output: com.google.android.exoplayer2.extractor.TrackOutput);
							public parsePayload(data: com.google.android.exoplayer2.util.ParsableByteArray, timeUs: number): boolean;
							public parseHeader(data: com.google.android.exoplayer2.util.ParsableByteArray): boolean;
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
				export module extractor {
					export module jpeg {
						export class JpegExtractor extends java.lang.Object implements com.google.android.exoplayer2.extractor.Extractor {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.jpeg.JpegExtractor>;
							public constructor();
							public sniff(input: com.google.android.exoplayer2.extractor.ExtractorInput): boolean;
							public seek(position: number, timeUs: number): void;
							public release(): void;
							public init(output: com.google.android.exoplayer2.extractor.ExtractorOutput): void;
							public read(input: com.google.android.exoplayer2.extractor.ExtractorInput, seekPosition: com.google.android.exoplayer2.extractor.PositionHolder): number;
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
				export module extractor {
					export module jpeg {
						export class MotionPhotoDescription extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.jpeg.MotionPhotoDescription>;
							public photoPresentationTimestampUs: number;
							public items: java.util.List<com.google.android.exoplayer2.extractor.jpeg.MotionPhotoDescription.ContainerItem>;
							public constructor(photoPresentationTimestampUs: number, items: java.util.List<com.google.android.exoplayer2.extractor.jpeg.MotionPhotoDescription.ContainerItem>);
							public getMotionPhotoMetadata(motionPhotoLength: number): com.google.android.exoplayer2.metadata.mp4.MotionPhotoMetadata;
						}
						export module MotionPhotoDescription {
							export class ContainerItem extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.extractor.jpeg.MotionPhotoDescription.ContainerItem>;
								public mime: string;
								public semantic: string;
								public length: number;
								public padding: number;
								public constructor(mime: string, semantic: string, length: number, padding: number);
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
				export module extractor {
					export module jpeg {
						export class StartOffsetExtractorInput extends com.google.android.exoplayer2.extractor.ForwardingExtractorInput {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.jpeg.StartOffsetExtractorInput>;
							public advancePeekPosition(length: number, allowEndOfInput: boolean): boolean;
							public getPosition(): number;
							public readFully(target: native.Array<number>, offset: number, length: number, allowEndOfInput: boolean): boolean;
							public skipFully(length: number): void;
							public read(target: native.Array<number>, offset: number, length: number): number;
							public constructor(input: com.google.android.exoplayer2.extractor.ExtractorInput, startOffset: number);
							public peekFully(target: native.Array<number>, offset: number, length: number, allowEndOfInput: boolean): boolean;
							public getLength(): number;
							public resetPeekPosition(): void;
							public setRetryPosition(position: number, e: java.lang.Throwable): void;
							public skip(length: number): number;
							public readFully(target: native.Array<number>, offset: number, length: number): void;
							public constructor(input: com.google.android.exoplayer2.extractor.ExtractorInput);
							public skipFully(length: number, allowEndOfInput: boolean): boolean;
							public advancePeekPosition(length: number): void;
							public peek(target: native.Array<number>, offset: number, length: number): number;
							public getPeekPosition(): number;
							public peekFully(target: native.Array<number>, offset: number, length: number): void;
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
				export module extractor {
					export module jpeg {
						export class StartOffsetExtractorOutput extends java.lang.Object implements com.google.android.exoplayer2.extractor.ExtractorOutput {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.jpeg.StartOffsetExtractorOutput>;
							public track(id: number, type: number): com.google.android.exoplayer2.extractor.TrackOutput;
							public constructor(startOffset: number, extractorOutput: com.google.android.exoplayer2.extractor.ExtractorOutput);
							public endTracks(): void;
							public seekMap(seekMap: com.google.android.exoplayer2.extractor.SeekMap): void;
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
				export module extractor {
					export module jpeg {
						export class XmpMotionPhotoDescriptionParser extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.jpeg.XmpMotionPhotoDescriptionParser>;
							public static parse(xmpString: string): com.google.android.exoplayer2.extractor.jpeg.MotionPhotoDescription;
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
				export module extractor {
					export module mkv {
						export class DefaultEbmlReader extends java.lang.Object implements com.google.android.exoplayer2.extractor.mkv.EbmlReader {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.mkv.DefaultEbmlReader>;
							public constructor();
							public read(input: com.google.android.exoplayer2.extractor.ExtractorInput): boolean;
							public init(processor: com.google.android.exoplayer2.extractor.mkv.EbmlProcessor): void;
							public reset(): void;
						}
						export module DefaultEbmlReader {
							export class MasterElement extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.extractor.mkv.DefaultEbmlReader.MasterElement>;
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
				export module extractor {
					export module mkv {
						export class EbmlProcessor extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.mkv.EbmlProcessor>;
							/**
							 * Constructs a new instance of the com.google.android.exoplayer2.extractor.mkv.EbmlProcessor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getElementType(int0: number): number;
								isLevel1Element(int0: number): boolean;
								startMasterElement(int0: number, long1: number, long2: number): void;
								endMasterElement(int0: number): void;
								integerElement(int0: number, long1: number): void;
								floatElement(int0: number, double1: number): void;
								stringElement(int0: number, string1: string): void;
								binaryElement(int0: number, int1: number, extractorInput2: com.google.android.exoplayer2.extractor.ExtractorInput): void;
							});
							public constructor();
							public static ELEMENT_TYPE_UNKNOWN: number;
							public static ELEMENT_TYPE_MASTER: number;
							public static ELEMENT_TYPE_FLOAT: number;
							public static ELEMENT_TYPE_UNSIGNED_INT: number;
							public static ELEMENT_TYPE_STRING: number;
							public static ELEMENT_TYPE_BINARY: number;
							public startMasterElement(int0: number, long1: number, long2: number): void;
							public binaryElement(int0: number, int1: number, extractorInput2: com.google.android.exoplayer2.extractor.ExtractorInput): void;
							public floatElement(int0: number, double1: number): void;
							public isLevel1Element(int0: number): boolean;
							public getElementType(int0: number): number;
							public integerElement(int0: number, long1: number): void;
							public stringElement(int0: number, string1: string): void;
							public endMasterElement(int0: number): void;
						}
						export module EbmlProcessor {
							export class ElementType extends java.lang.Object implements java.lang.annotation.Annotation {
								public static class: java.lang.Class<com.google.android.exoplayer2.extractor.mkv.EbmlProcessor.ElementType>;
								/**
								 * Constructs a new instance of the com.google.android.exoplayer2.extractor.mkv.EbmlProcessor() when extending the interface class.
								 */
								public constructor(implementation: {
									equals(object0: any): boolean;
									hashCode(): number;
									toString(): string;
									annotationType(): java.lang.Class<any>;
								});
								public constructor();
								public toString(): string;
								public equals(obj: any): boolean;
								public annotationType(): java.lang.Class<any>;
								public hashCode(): number;
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
				export module extractor {
					export module mkv {
						export class EbmlReader extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.mkv.EbmlReader>;
							/**
							 * Constructs a new instance of the com.google.android.exoplayer2.extractor.mkv.EbmlReader interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								init(ebmlProcessor0: com.google.android.exoplayer2.extractor.mkv.EbmlProcessor): void;
								reset(): void;
								read(extractorInput0: com.google.android.exoplayer2.extractor.ExtractorInput): boolean;
							});
							public constructor();
							public read(extractorInput0: com.google.android.exoplayer2.extractor.ExtractorInput): boolean;
							public init(ebmlProcessor0: com.google.android.exoplayer2.extractor.mkv.EbmlProcessor): void;
							public reset(): void;
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
				export module extractor {
					export module mkv {
						export class MatroskaExtractor extends java.lang.Object implements com.google.android.exoplayer2.extractor.Extractor {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.mkv.MatroskaExtractor>;
							public static FACTORY: com.google.android.exoplayer2.extractor.ExtractorsFactory;
							public static FLAG_DISABLE_SEEK_FOR_CUES: number;
							public constructor();
							public constructor(flags: number);
							public sniff(input: com.google.android.exoplayer2.extractor.ExtractorInput): boolean;
							public handleBlockAddIDExtraData(track: com.google.android.exoplayer2.extractor.mkv.MatroskaExtractor.Track, input: com.google.android.exoplayer2.extractor.ExtractorInput, contentSize: number): void;
							public handleBlockAdditionalData(track: com.google.android.exoplayer2.extractor.mkv.MatroskaExtractor.Track, blockAdditionalId: number, input: com.google.android.exoplayer2.extractor.ExtractorInput, contentSize: number): void;
							public startMasterElement(id: number, contentPosition: number, contentSize: number): void;
							public binaryElement(id: number, contentSize: number, input: com.google.android.exoplayer2.extractor.ExtractorInput): void;
							public release(): void;
							public floatElement(id: number, value: number): void;
							public getElementType(id: number): number;
							public stringElement(id: number, value: string): void;
							public seek(position: number, timeUs: number): void;
							public integerElement(id: number, value: number): void;
							public isLevel1Element(id: number): boolean;
							public init(output: com.google.android.exoplayer2.extractor.ExtractorOutput): void;
							public read(input: com.google.android.exoplayer2.extractor.ExtractorInput, seekPosition: com.google.android.exoplayer2.extractor.PositionHolder): number;
							public endMasterElement(id: number): void;
						}
						export module MatroskaExtractor {
							export class Flags extends java.lang.Object implements java.lang.annotation.Annotation {
								public static class: java.lang.Class<com.google.android.exoplayer2.extractor.mkv.MatroskaExtractor.Flags>;
								/**
								 * Constructs a new instance of the com.google.android.exoplayer2.extractor.mkv.MatroskaExtractor() when extending the interface class.
								 */
								public constructor(implementation: {
									equals(object0: any): boolean;
									hashCode(): number;
									toString(): string;
									annotationType(): java.lang.Class<any>;
								});
								public constructor();
								public toString(): string;
								public equals(obj: any): boolean;
								public annotationType(): java.lang.Class<any>;
								public hashCode(): number;
							}
							export class InnerEbmlProcessor extends java.lang.Object implements com.google.android.exoplayer2.extractor.mkv.EbmlProcessor {
								public static class: java.lang.Class<com.google.android.exoplayer2.extractor.mkv.MatroskaExtractor.InnerEbmlProcessor>;
								public integerElement(id: number, value: number): void;
								public getElementType(id: number): number;
								public isLevel1Element(id: number): boolean;
								public startMasterElement(id: number, contentPosition: number, contentSize: number): void;
								public binaryElement(id: number, contentsSize: number, input: com.google.android.exoplayer2.extractor.ExtractorInput): void;
								public floatElement(id: number, value: number): void;
								public endMasterElement(id: number): void;
								public stringElement(id: number, value: string): void;
							}
							export class Track extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.extractor.mkv.MatroskaExtractor.Track>;
								public name: string;
								public codecId: string;
								public number: number;
								public type: number;
								public defaultSampleDurationNs: number;
								public maxBlockAdditionId: number;
								public hasContentEncryption: boolean;
								public sampleStrippedBytes: native.Array<number>;
								public cryptoData: com.google.android.exoplayer2.extractor.TrackOutput.CryptoData;
								public codecPrivate: native.Array<number>;
								public drmInitData: com.google.android.exoplayer2.drm.DrmInitData;
								public width: number;
								public height: number;
								public displayWidth: number;
								public displayHeight: number;
								public displayUnit: number;
								public projectionType: number;
								public projectionPoseYaw: number;
								public projectionPosePitch: number;
								public projectionPoseRoll: number;
								public projectionData: native.Array<number>;
								public stereoMode: number;
								public hasColorInfo: boolean;
								public colorSpace: number;
								public colorTransfer: number;
								public colorRange: number;
								public maxContentLuminance: number;
								public maxFrameAverageLuminance: number;
								public primaryRChromaticityX: number;
								public primaryRChromaticityY: number;
								public primaryGChromaticityX: number;
								public primaryGChromaticityY: number;
								public primaryBChromaticityX: number;
								public primaryBChromaticityY: number;
								public whitePointChromaticityX: number;
								public whitePointChromaticityY: number;
								public maxMasteringLuminance: number;
								public minMasteringLuminance: number;
								public dolbyVisionConfigBytes: native.Array<number>;
								public channelCount: number;
								public audioBitDepth: number;
								public sampleRate: number;
								public codecDelayNs: number;
								public seekPreRollNs: number;
								public trueHdSampleRechunker: com.google.android.exoplayer2.extractor.mkv.MatroskaExtractor.TrueHdSampleRechunker;
								public flagForced: boolean;
								public flagDefault: boolean;
								public output: com.google.android.exoplayer2.extractor.TrackOutput;
								public nalUnitLengthFieldLength: number;
								public reset(): void;
								public initializeOutput(output: com.google.android.exoplayer2.extractor.ExtractorOutput, trackId: number): void;
								public outputPendingSampleMetadata(): void;
							}
							export class TrueHdSampleRechunker extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.extractor.mkv.MatroskaExtractor.TrueHdSampleRechunker>;
								public sampleMetadata(track: com.google.android.exoplayer2.extractor.mkv.MatroskaExtractor.Track, timeUs: number, flags: number, size: number, offset: number): void;
								public reset(): void;
								public constructor();
								public startSample(input: com.google.android.exoplayer2.extractor.ExtractorInput): void;
								public outputPendingSampleMetadata(track: com.google.android.exoplayer2.extractor.mkv.MatroskaExtractor.Track): void;
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
				export module extractor {
					export module mkv {
						export class Sniffer extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.mkv.Sniffer>;
							public constructor();
							public sniff(input: com.google.android.exoplayer2.extractor.ExtractorInput): boolean;
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
				export module extractor {
					export module mkv {
						export class VarintReader extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.mkv.VarintReader>;
							public constructor();
							public static parseUnsignedVarintLength(firstByte: number): number;
							public getLastLength(): number;
							public static assembleVarint(varintBytes: native.Array<number>, varintLength: number, removeLengthMask: boolean): number;
							public readUnsignedVarint(input: com.google.android.exoplayer2.extractor.ExtractorInput, allowEndOfInput: boolean, removeLengthMask: boolean, maximumAllowedLength: number): number;
							public reset(): void;
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
				export module extractor {
					export module mp3 {
						export class ConstantBitrateSeeker extends com.google.android.exoplayer2.extractor.ConstantBitrateSeekMap implements com.google.android.exoplayer2.extractor.mp3.Seeker {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.mp3.ConstantBitrateSeeker>;
							public getTimeUs(position: number): number;
							public constructor(inputLength: number, firstFramePosition: number, mpegAudioHeader: com.google.android.exoplayer2.audio.MpegAudioUtil.Header);
							public getDataEndPosition(): number;
							public getDurationUs(): number;
							public getSeekPoints(timeUs: number): com.google.android.exoplayer2.extractor.SeekMap.SeekPoints;
							public isSeekable(): boolean;
							public constructor(inputLength: number, firstFrameBytePosition: number, bitrate: number, frameSize: number);
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
				export module extractor {
					export module mp3 {
						export class IndexSeeker extends java.lang.Object implements com.google.android.exoplayer2.extractor.mp3.Seeker {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.mp3.IndexSeeker>;
							public constructor(durationUs: number, dataStartPosition: number, dataEndPosition: number);
							public getTimeUs(position: number): number;
							public getDataEndPosition(): number;
							public getDurationUs(): number;
							public maybeAddSeekPoint(timeUs: number, position: number): void;
							public getSeekPoints(timeUs: number): com.google.android.exoplayer2.extractor.SeekMap.SeekPoints;
							public isTimeUsInIndex(timeUs: number): boolean;
							public isSeekable(): boolean;
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
				export module extractor {
					export module mp3 {
						export class MlltSeeker extends java.lang.Object implements com.google.android.exoplayer2.extractor.mp3.Seeker {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.mp3.MlltSeeker>;
							public getTimeUs(position: number): number;
							public getDurationUs(): number;
							public getDataEndPosition(): number;
							public getSeekPoints(timeUs: number): com.google.android.exoplayer2.extractor.SeekMap.SeekPoints;
							public isSeekable(): boolean;
							public static create(firstFramePosition: number, mlltFrame: com.google.android.exoplayer2.metadata.id3.MlltFrame, durationUs: number): com.google.android.exoplayer2.extractor.mp3.MlltSeeker;
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
				export module extractor {
					export module mp3 {
						export class Mp3Extractor extends java.lang.Object implements com.google.android.exoplayer2.extractor.Extractor {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.mp3.Mp3Extractor>;
							public static FACTORY: com.google.android.exoplayer2.extractor.ExtractorsFactory;
							public static FLAG_ENABLE_CONSTANT_BITRATE_SEEKING: number;
							public static FLAG_ENABLE_INDEX_SEEKING: number;
							public static FLAG_DISABLE_ID3_METADATA: number;
							public constructor();
							public constructor(flags: number);
							public sniff(input: com.google.android.exoplayer2.extractor.ExtractorInput): boolean;
							public seek(position: number, timeUs: number): void;
							public constructor(flags: number, forcedFirstSampleTimestampUs: number);
							public release(): void;
							public init(output: com.google.android.exoplayer2.extractor.ExtractorOutput): void;
							public read(input: com.google.android.exoplayer2.extractor.ExtractorInput, seekPosition: com.google.android.exoplayer2.extractor.PositionHolder): number;
							public disableSeeking(): void;
						}
						export module Mp3Extractor {
							export class Flags extends java.lang.Object implements java.lang.annotation.Annotation {
								public static class: java.lang.Class<com.google.android.exoplayer2.extractor.mp3.Mp3Extractor.Flags>;
								/**
								 * Constructs a new instance of the com.google.android.exoplayer2.extractor.mp3.Mp3Extractor() when extending the interface class.
								 */
								public constructor(implementation: {
									equals(object0: any): boolean;
									hashCode(): number;
									toString(): string;
									annotationType(): java.lang.Class<any>;
								});
								public constructor();
								public toString(): string;
								public equals(obj: any): boolean;
								public annotationType(): java.lang.Class<any>;
								public hashCode(): number;
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
				export module extractor {
					export module mp3 {
						export class Seeker extends java.lang.Object implements com.google.android.exoplayer2.extractor.SeekMap {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.mp3.Seeker>;
							/**
							 * Constructs a new instance of the com.google.android.exoplayer2.extractor.mp3.Seeker interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getTimeUs(long0: number): number;
								getDataEndPosition(): number;
								isSeekable(): boolean;
								getDurationUs(): number;
								getSeekPoints(long0: number): com.google.android.exoplayer2.extractor.SeekMap.SeekPoints;
							});
							public constructor();
							public getSeekPoints(long0: number): com.google.android.exoplayer2.extractor.SeekMap.SeekPoints;
							public getDataEndPosition(): number;
							public getDurationUs(): number;
							public getTimeUs(long0: number): number;
							public isSeekable(): boolean;
						}
						export module Seeker {
							export class UnseekableSeeker extends com.google.android.exoplayer2.extractor.SeekMap.Unseekable implements com.google.android.exoplayer2.extractor.mp3.Seeker {
								public static class: java.lang.Class<com.google.android.exoplayer2.extractor.mp3.Seeker.UnseekableSeeker>;
								public constructor(durationUs: number);
								public getDurationUs(): number;
								public getSeekPoints(timeUs: number): com.google.android.exoplayer2.extractor.SeekMap.SeekPoints;
								public constructor(durationUs: number, startPosition: number);
								public constructor();
								public getDataEndPosition(): number;
								public getTimeUs(position: number): number;
								public isSeekable(): boolean;
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
				export module extractor {
					export module mp3 {
						export class VbriSeeker extends java.lang.Object implements com.google.android.exoplayer2.extractor.mp3.Seeker {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.mp3.VbriSeeker>;
							public getTimeUs(position: number): number;
							public getDurationUs(): number;
							public getDataEndPosition(): number;
							public static create(inputLength: number, position: number, mpegAudioHeader: com.google.android.exoplayer2.audio.MpegAudioUtil.Header, frame: com.google.android.exoplayer2.util.ParsableByteArray): com.google.android.exoplayer2.extractor.mp3.VbriSeeker;
							public getSeekPoints(timeUs: number): com.google.android.exoplayer2.extractor.SeekMap.SeekPoints;
							public isSeekable(): boolean;
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
				export module extractor {
					export module mp3 {
						export class XingSeeker extends java.lang.Object implements com.google.android.exoplayer2.extractor.mp3.Seeker {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.mp3.XingSeeker>;
							public getTimeUs(position: number): number;
							public getDurationUs(): number;
							public getDataEndPosition(): number;
							public static create(inputLength: number, position: number, mpegAudioHeader: com.google.android.exoplayer2.audio.MpegAudioUtil.Header, frame: com.google.android.exoplayer2.util.ParsableByteArray): com.google.android.exoplayer2.extractor.mp3.XingSeeker;
							public getSeekPoints(timeUs: number): com.google.android.exoplayer2.extractor.SeekMap.SeekPoints;
							public isSeekable(): boolean;
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
				export module extractor {
					export module mp4 {
						export abstract class Atom extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.mp4.Atom>;
							public static HEADER_SIZE: number;
							public static FULL_HEADER_SIZE: number;
							public static LONG_HEADER_SIZE: number;
							public static DEFINES_LARGE_SIZE: number;
							public static EXTENDS_TO_END_SIZE: number;
							public static TYPE_ftyp: number;
							public static TYPE_avc1: number;
							public static TYPE_avc3: number;
							public static TYPE_avcC: number;
							public static TYPE_hvc1: number;
							public static TYPE_hev1: number;
							public static TYPE_hvcC: number;
							public static TYPE_vp08: number;
							public static TYPE_vp09: number;
							public static TYPE_vpcC: number;
							public static TYPE_av01: number;
							public static TYPE_av1C: number;
							public static TYPE_dvav: number;
							public static TYPE_dva1: number;
							public static TYPE_dvhe: number;
							public static TYPE_dvh1: number;
							public static TYPE_dvcC: number;
							public static TYPE_dvvC: number;
							public static TYPE_s263: number;
							public static TYPE_d263: number;
							public static TYPE_mdat: number;
							public static TYPE_mp4a: number;
							public static TYPE__mp2: number;
							public static TYPE__mp3: number;
							public static TYPE_wave: number;
							public static TYPE_lpcm: number;
							public static TYPE_sowt: number;
							public static TYPE_ac_3: number;
							public static TYPE_dac3: number;
							public static TYPE_ec_3: number;
							public static TYPE_dec3: number;
							public static TYPE_ac_4: number;
							public static TYPE_dac4: number;
							public static TYPE_dtsc: number;
							public static TYPE_dtsh: number;
							public static TYPE_dtsl: number;
							public static TYPE_dtse: number;
							public static TYPE_ddts: number;
							public static TYPE_tfdt: number;
							public static TYPE_tfhd: number;
							public static TYPE_trex: number;
							public static TYPE_trun: number;
							public static TYPE_sidx: number;
							public static TYPE_moov: number;
							public static TYPE_mpvd: number;
							public static TYPE_mvhd: number;
							public static TYPE_trak: number;
							public static TYPE_mdia: number;
							public static TYPE_minf: number;
							public static TYPE_stbl: number;
							public static TYPE_esds: number;
							public static TYPE_moof: number;
							public static TYPE_traf: number;
							public static TYPE_mvex: number;
							public static TYPE_mehd: number;
							public static TYPE_tkhd: number;
							public static TYPE_edts: number;
							public static TYPE_elst: number;
							public static TYPE_mdhd: number;
							public static TYPE_hdlr: number;
							public static TYPE_stsd: number;
							public static TYPE_pssh: number;
							public static TYPE_sinf: number;
							public static TYPE_schm: number;
							public static TYPE_schi: number;
							public static TYPE_tenc: number;
							public static TYPE_encv: number;
							public static TYPE_enca: number;
							public static TYPE_frma: number;
							public static TYPE_saiz: number;
							public static TYPE_saio: number;
							public static TYPE_sbgp: number;
							public static TYPE_sgpd: number;
							public static TYPE_uuid: number;
							public static TYPE_senc: number;
							public static TYPE_pasp: number;
							public static TYPE_TTML: number;
							public static TYPE_m1v_: number;
							public static TYPE_mp4v: number;
							public static TYPE_stts: number;
							public static TYPE_stss: number;
							public static TYPE_ctts: number;
							public static TYPE_stsc: number;
							public static TYPE_stsz: number;
							public static TYPE_stz2: number;
							public static TYPE_stco: number;
							public static TYPE_co64: number;
							public static TYPE_tx3g: number;
							public static TYPE_wvtt: number;
							public static TYPE_stpp: number;
							public static TYPE_c608: number;
							public static TYPE_samr: number;
							public static TYPE_sawb: number;
							public static TYPE_udta: number;
							public static TYPE_meta: number;
							public static TYPE_smta: number;
							public static TYPE_saut: number;
							public static TYPE_keys: number;
							public static TYPE_ilst: number;
							public static TYPE_mean: number;
							public static TYPE_name: number;
							public static TYPE_data: number;
							public static TYPE_emsg: number;
							public static TYPE_st3d: number;
							public static TYPE_sv3d: number;
							public static TYPE_proj: number;
							public static TYPE_camm: number;
							public static TYPE_mett: number;
							public static TYPE_alac: number;
							public static TYPE_alaw: number;
							public static TYPE_ulaw: number;
							public static TYPE_Opus: number;
							public static TYPE_dOps: number;
							public static TYPE_fLaC: number;
							public static TYPE_dfLa: number;
							public static TYPE_twos: number;
							public type: number;
							public static parseFullAtomFlags(fullAtomInt: number): number;
							public static getAtomTypeString(type: number): string;
							public toString(): string;
							public constructor(type: number);
							public static parseFullAtomVersion(fullAtomInt: number): number;
						}
						export module Atom {
							export class ContainerAtom extends com.google.android.exoplayer2.extractor.mp4.Atom {
								public static class: java.lang.Class<com.google.android.exoplayer2.extractor.mp4.Atom.ContainerAtom>;
								public endPosition: number;
								public leafChildren: java.util.List<com.google.android.exoplayer2.extractor.mp4.Atom.LeafAtom>;
								public containerChildren: java.util.List<com.google.android.exoplayer2.extractor.mp4.Atom.ContainerAtom>;
								public add(atom: com.google.android.exoplayer2.extractor.mp4.Atom.LeafAtom): void;
								public getLeafAtomOfType(type: number): com.google.android.exoplayer2.extractor.mp4.Atom.LeafAtom;
								public toString(): string;
								public getContainerAtomOfType(type: number): com.google.android.exoplayer2.extractor.mp4.Atom.ContainerAtom;
								public constructor(type: number, endPosition: number);
								public constructor(type: number);
								public add(atom: com.google.android.exoplayer2.extractor.mp4.Atom.ContainerAtom): void;
								public getChildAtomOfTypeCount(type: number): number;
							}
							export class LeafAtom extends com.google.android.exoplayer2.extractor.mp4.Atom {
								public static class: java.lang.Class<com.google.android.exoplayer2.extractor.mp4.Atom.LeafAtom>;
								public data: com.google.android.exoplayer2.util.ParsableByteArray;
								public constructor(type: number, data: com.google.android.exoplayer2.util.ParsableByteArray);
								public constructor(type: number);
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
				export module extractor {
					export module mp4 {
						export class AtomParsers extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.mp4.AtomParsers>;
							public static parseUdta(udtaAtom: com.google.android.exoplayer2.extractor.mp4.Atom.LeafAtom): globalAndroid.util.Pair<com.google.android.exoplayer2.metadata.Metadata,com.google.android.exoplayer2.metadata.Metadata>;
							public static parseMdtaFromMeta(meta: com.google.android.exoplayer2.extractor.mp4.Atom.ContainerAtom): com.google.android.exoplayer2.metadata.Metadata;
							public static parseTraks(moov: com.google.android.exoplayer2.extractor.mp4.Atom.ContainerAtom, gaplessInfoHolder: com.google.android.exoplayer2.extractor.GaplessInfoHolder, duration: number, drmInitData: com.google.android.exoplayer2.drm.DrmInitData, ignoreEditLists: boolean, isQuickTime: boolean, modifyTrackFunction: com.google.common.base.Function<com.google.android.exoplayer2.extractor.mp4.Track,com.google.android.exoplayer2.extractor.mp4.Track>): java.util.List<com.google.android.exoplayer2.extractor.mp4.TrackSampleTable>;
							public static maybeSkipRemainingMetaAtomHeaderBytes(meta: com.google.android.exoplayer2.util.ParsableByteArray): void;
						}
						export module AtomParsers {
							export class ChunkIterator extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.extractor.mp4.AtomParsers.ChunkIterator>;
								public length: number;
								public index: number;
								public numSamples: number;
								public offset: number;
								public moveNext(): boolean;
								public constructor(stsc: com.google.android.exoplayer2.util.ParsableByteArray, chunkOffsets: com.google.android.exoplayer2.util.ParsableByteArray, chunkOffsetsAreLongs: boolean);
							}
							export class SampleSizeBox extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.extractor.mp4.AtomParsers.SampleSizeBox>;
								/**
								 * Constructs a new instance of the com.google.android.exoplayer2.extractor.mp4.AtomParsers() when extending the interface class.
								 */
								public constructor(implementation: {
									getSampleCount(): number;
									getFixedSampleSize(): number;
									readNextSampleSize(): number;
								});
								public constructor();
								public getSampleCount(): number;
								public readNextSampleSize(): number;
								public getFixedSampleSize(): number;
							}
							export class StsdData extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.extractor.mp4.AtomParsers.StsdData>;
								public static STSD_HEADER_SIZE: number;
								public trackEncryptionBoxes: native.Array<com.google.android.exoplayer2.extractor.mp4.TrackEncryptionBox>;
								public format: com.google.android.exoplayer2.Format;
								public nalUnitLengthFieldLength: number;
								public requiredSampleTransformation: number;
								public constructor(numberOfEntries: number);
							}
							export class StszSampleSizeBox extends java.lang.Object implements com.google.android.exoplayer2.extractor.mp4.AtomParsers.SampleSizeBox {
								public static class: java.lang.Class<com.google.android.exoplayer2.extractor.mp4.AtomParsers.StszSampleSizeBox>;
								public getSampleCount(): number;
								public readNextSampleSize(): number;
								public constructor(stszAtom: com.google.android.exoplayer2.extractor.mp4.Atom.LeafAtom, trackFormat: com.google.android.exoplayer2.Format);
								public getFixedSampleSize(): number;
							}
							export class Stz2SampleSizeBox extends java.lang.Object implements com.google.android.exoplayer2.extractor.mp4.AtomParsers.SampleSizeBox {
								public static class: java.lang.Class<com.google.android.exoplayer2.extractor.mp4.AtomParsers.Stz2SampleSizeBox>;
								public constructor(stz2Atom: com.google.android.exoplayer2.extractor.mp4.Atom.LeafAtom);
								public getSampleCount(): number;
								public readNextSampleSize(): number;
								public getFixedSampleSize(): number;
							}
							export class TkhdData extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.extractor.mp4.AtomParsers.TkhdData>;
								public constructor(id: number, duration: number, rotationDegrees: number);
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
				export module extractor {
					export module mp4 {
						export class DefaultSampleValues extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.mp4.DefaultSampleValues>;
							public sampleDescriptionIndex: number;
							public duration: number;
							public size: number;
							public flags: number;
							public constructor(sampleDescriptionIndex: number, duration: number, size: number, flags: number);
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
				export module extractor {
					export module mp4 {
						export class FixedSampleSizeRechunker extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.mp4.FixedSampleSizeRechunker>;
							public static rechunk(fixedSampleSize: number, chunkOffsets: native.Array<number>, chunkSampleCounts: native.Array<number>, timestampDeltaInTimeUnits: number): com.google.android.exoplayer2.extractor.mp4.FixedSampleSizeRechunker.Results;
						}
						export module FixedSampleSizeRechunker {
							export class Results extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.extractor.mp4.FixedSampleSizeRechunker.Results>;
								public offsets: native.Array<number>;
								public sizes: native.Array<number>;
								public maximumSize: number;
								public timestamps: native.Array<number>;
								public flags: native.Array<number>;
								public duration: number;
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
				export module extractor {
					export module mp4 {
						export class FragmentedMp4Extractor extends java.lang.Object implements com.google.android.exoplayer2.extractor.Extractor {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.mp4.FragmentedMp4Extractor>;
							public static FACTORY: com.google.android.exoplayer2.extractor.ExtractorsFactory;
							public static FLAG_WORKAROUND_EVERY_VIDEO_FRAME_IS_SYNC_FRAME: number;
							public static FLAG_WORKAROUND_IGNORE_TFDT_BOX: number;
							public static FLAG_ENABLE_EMSG_TRACK: number;
							public static FLAG_WORKAROUND_IGNORE_EDIT_LISTS: number;
							public constructor();
							public modifyTrack(track: com.google.android.exoplayer2.extractor.mp4.Track): com.google.android.exoplayer2.extractor.mp4.Track;
							public constructor(flags: number);
							public sniff(input: com.google.android.exoplayer2.extractor.ExtractorInput): boolean;
							public constructor(flags: number, timestampAdjuster: com.google.android.exoplayer2.util.TimestampAdjuster, sideloadedTrack: com.google.android.exoplayer2.extractor.mp4.Track, closedCaptionFormats: java.util.List<com.google.android.exoplayer2.Format>, additionalEmsgTrackOutput: com.google.android.exoplayer2.extractor.TrackOutput);
							public constructor(flags: number, timestampAdjuster: com.google.android.exoplayer2.util.TimestampAdjuster, sideloadedTrack: com.google.android.exoplayer2.extractor.mp4.Track, closedCaptionFormats: java.util.List<com.google.android.exoplayer2.Format>);
							public seek(position: number, timeUs: number): void;
							public release(): void;
							public constructor(flags: number, timestampAdjuster: com.google.android.exoplayer2.util.TimestampAdjuster);
							public constructor(flags: number, timestampAdjuster: com.google.android.exoplayer2.util.TimestampAdjuster, sideloadedTrack: com.google.android.exoplayer2.extractor.mp4.Track);
							public init(output: com.google.android.exoplayer2.extractor.ExtractorOutput): void;
							public read(input: com.google.android.exoplayer2.extractor.ExtractorInput, seekPosition: com.google.android.exoplayer2.extractor.PositionHolder): number;
						}
						export module FragmentedMp4Extractor {
							export class Flags extends java.lang.Object implements java.lang.annotation.Annotation {
								public static class: java.lang.Class<com.google.android.exoplayer2.extractor.mp4.FragmentedMp4Extractor.Flags>;
								/**
								 * Constructs a new instance of the com.google.android.exoplayer2.extractor.mp4.FragmentedMp4Extractor() when extending the interface class.
								 */
								public constructor(implementation: {
									equals(object0: any): boolean;
									hashCode(): number;
									toString(): string;
									annotationType(): java.lang.Class<any>;
								});
								public constructor();
								public toString(): string;
								public equals(obj: any): boolean;
								public annotationType(): java.lang.Class<any>;
								public hashCode(): number;
							}
							export class MetadataSampleInfo extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.extractor.mp4.FragmentedMp4Extractor.MetadataSampleInfo>;
								public presentationTimeDeltaUs: number;
								public size: number;
								public constructor(presentationTimeDeltaUs: number, size: number);
							}
							export class TrackBundle extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.extractor.mp4.FragmentedMp4Extractor.TrackBundle>;
								public output: com.google.android.exoplayer2.extractor.TrackOutput;
								public fragment: com.google.android.exoplayer2.extractor.mp4.TrackFragment;
								public scratch: com.google.android.exoplayer2.util.ParsableByteArray;
								public moovSampleTable: com.google.android.exoplayer2.extractor.mp4.TrackSampleTable;
								public defaultSampleValues: com.google.android.exoplayer2.extractor.mp4.DefaultSampleValues;
								public currentSampleIndex: number;
								public currentSampleInTrackRun: number;
								public currentTrackRunIndex: number;
								public firstSampleToOutputIndex: number;
								public getEncryptionBoxIfEncrypted(): com.google.android.exoplayer2.extractor.mp4.TrackEncryptionBox;
								public getCurrentSampleFlags(): number;
								public reset(moovSampleTable: com.google.android.exoplayer2.extractor.mp4.TrackSampleTable, defaultSampleValues: com.google.android.exoplayer2.extractor.mp4.DefaultSampleValues): void;
								public getCurrentSampleSize(): number;
								public next(): boolean;
								public getCurrentSampleOffset(): number;
								public skipSampleEncryptionData(): void;
								public updateDrmInitData(drmInitData: com.google.android.exoplayer2.drm.DrmInitData): void;
								public resetFragmentInfo(): void;
								public getCurrentSamplePresentationTimeUs(): number;
								public outputSampleEncryptionData(sampleSize: number, clearHeaderSize: number): number;
								public constructor(output: com.google.android.exoplayer2.extractor.TrackOutput, moovSampleTable: com.google.android.exoplayer2.extractor.mp4.TrackSampleTable, defaultSampleValues: com.google.android.exoplayer2.extractor.mp4.DefaultSampleValues);
								public seek(timeUs: number): void;
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
				export module extractor {
					export module mp4 {
						export class MetadataUtil extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.mp4.MetadataUtil>;
							public static setFormatGaplessInfo(trackType: number, gaplessInfoHolder: com.google.android.exoplayer2.extractor.GaplessInfoHolder, formatBuilder: com.google.android.exoplayer2.Format.Builder): void;
							public static setFormatMetadata(trackType: number, udtaMetaMetadata: com.google.android.exoplayer2.metadata.Metadata, mdtaMetadata: com.google.android.exoplayer2.metadata.Metadata, formatBuilder: com.google.android.exoplayer2.Format.Builder, additionalMetadata: native.Array<com.google.android.exoplayer2.metadata.Metadata>): void;
							public static parseMdtaMetadataEntryFromIlst(ilst: com.google.android.exoplayer2.util.ParsableByteArray, endPosition: number, key: string): com.google.android.exoplayer2.metadata.mp4.MdtaMetadataEntry;
							public static parseIlstElement(ilst: com.google.android.exoplayer2.util.ParsableByteArray): com.google.android.exoplayer2.metadata.Metadata.Entry;
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
				export module extractor {
					export module mp4 {
						export class Mp4Extractor extends java.lang.Object implements com.google.android.exoplayer2.extractor.Extractor, com.google.android.exoplayer2.extractor.SeekMap {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.mp4.Mp4Extractor>;
							public static FACTORY: com.google.android.exoplayer2.extractor.ExtractorsFactory;
							public static FLAG_WORKAROUND_IGNORE_EDIT_LISTS: number;
							public static FLAG_READ_MOTION_PHOTO_METADATA: number;
							public static FLAG_READ_SEF_DATA: number;
							public constructor();
							public constructor(flags: number);
							public sniff(input: com.google.android.exoplayer2.extractor.ExtractorInput): boolean;
							public getDurationUs(): number;
							public getSeekPoints(timeUs: number): com.google.android.exoplayer2.extractor.SeekMap.SeekPoints;
							public seek(position: number, timeUs: number): void;
							public release(): void;
							public init(output: com.google.android.exoplayer2.extractor.ExtractorOutput): void;
							public read(input: com.google.android.exoplayer2.extractor.ExtractorInput, seekPosition: com.google.android.exoplayer2.extractor.PositionHolder): number;
							public isSeekable(): boolean;
						}
						export module Mp4Extractor {
							export class Flags extends java.lang.Object implements java.lang.annotation.Annotation {
								public static class: java.lang.Class<com.google.android.exoplayer2.extractor.mp4.Mp4Extractor.Flags>;
								/**
								 * Constructs a new instance of the com.google.android.exoplayer2.extractor.mp4.Mp4Extractor() when extending the interface class.
								 */
								public constructor(implementation: {
									equals(object0: any): boolean;
									hashCode(): number;
									toString(): string;
									annotationType(): java.lang.Class<any>;
								});
								public constructor();
								public toString(): string;
								public equals(obj: any): boolean;
								public annotationType(): java.lang.Class<any>;
								public hashCode(): number;
							}
							export class Mp4Track extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.extractor.mp4.Mp4Extractor.Mp4Track>;
								public track: com.google.android.exoplayer2.extractor.mp4.Track;
								public sampleTable: com.google.android.exoplayer2.extractor.mp4.TrackSampleTable;
								public trackOutput: com.google.android.exoplayer2.extractor.TrackOutput;
								public sampleIndex: number;
								public constructor(track: com.google.android.exoplayer2.extractor.mp4.Track, sampleTable: com.google.android.exoplayer2.extractor.mp4.TrackSampleTable, trackOutput: com.google.android.exoplayer2.extractor.TrackOutput);
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
				export module extractor {
					export module mp4 {
						export class PsshAtomUtil extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.mp4.PsshAtomUtil>;
							public static parseVersion(atom: native.Array<number>): number;
							public static buildPsshAtom(systemId: java.util.UUID, keyIds: native.Array<java.util.UUID>, data: native.Array<number>): native.Array<number>;
							public static parseUuid(atom: native.Array<number>): java.util.UUID;
							public static isPsshAtom(data: native.Array<number>): boolean;
							public static buildPsshAtom(systemId: java.util.UUID, data: native.Array<number>): native.Array<number>;
							public static parseSchemeSpecificData(atom: native.Array<number>, uuid: java.util.UUID): native.Array<number>;
						}
						export module PsshAtomUtil {
							export class PsshAtom extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.extractor.mp4.PsshAtomUtil.PsshAtom>;
								public constructor(uuid: java.util.UUID, version: number, schemeData: native.Array<number>);
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
				export module extractor {
					export module mp4 {
						export class SefReader extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.mp4.SefReader>;
							public constructor();
							public reset(): void;
							public read(input: com.google.android.exoplayer2.extractor.ExtractorInput, seekPosition: com.google.android.exoplayer2.extractor.PositionHolder, slowMotionMetadataEntries: java.util.List<com.google.android.exoplayer2.metadata.Metadata.Entry>): number;
						}
						export module SefReader {
							export class DataReference extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.extractor.mp4.SefReader.DataReference>;
								public dataType: number;
								public startOffset: number;
								public size: number;
								public constructor(dataType: number, startOffset: number, size: number);
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
				export module extractor {
					export module mp4 {
						export class Sniffer extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.mp4.Sniffer>;
							public static BRAND_QUICKTIME: number;
							public static BRAND_HEIC: number;
							public static sniffUnfragmented(input: com.google.android.exoplayer2.extractor.ExtractorInput): boolean;
							public static sniffFragmented(input: com.google.android.exoplayer2.extractor.ExtractorInput): boolean;
							public static sniffUnfragmented(input: com.google.android.exoplayer2.extractor.ExtractorInput, acceptHeic: boolean): boolean;
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
				export module extractor {
					export module mp4 {
						export class Track extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.mp4.Track>;
							public static TRANSFORMATION_NONE: number;
							public static TRANSFORMATION_CEA608_CDAT: number;
							public id: number;
							public type: number;
							public timescale: number;
							public movieTimescale: number;
							public durationUs: number;
							public format: com.google.android.exoplayer2.Format;
							public sampleTransformation: number;
							public editListDurations: native.Array<number>;
							public editListMediaTimes: native.Array<number>;
							public nalUnitLengthFieldLength: number;
							public copyWithFormat(format: com.google.android.exoplayer2.Format): com.google.android.exoplayer2.extractor.mp4.Track;
							public getSampleDescriptionEncryptionBox(sampleDescriptionIndex: number): com.google.android.exoplayer2.extractor.mp4.TrackEncryptionBox;
							public constructor(id: number, type: number, timescale: number, movieTimescale: number, durationUs: number, format: com.google.android.exoplayer2.Format, sampleTransformation: number, sampleDescriptionEncryptionBoxes: native.Array<com.google.android.exoplayer2.extractor.mp4.TrackEncryptionBox>, nalUnitLengthFieldLength: number, editListDurations: native.Array<number>, editListMediaTimes: native.Array<number>);
						}
						export module Track {
							export class Transformation extends java.lang.Object implements java.lang.annotation.Annotation {
								public static class: java.lang.Class<com.google.android.exoplayer2.extractor.mp4.Track.Transformation>;
								/**
								 * Constructs a new instance of the com.google.android.exoplayer2.extractor.mp4.Track() when extending the interface class.
								 */
								public constructor(implementation: {
									equals(object0: any): boolean;
									hashCode(): number;
									toString(): string;
									annotationType(): java.lang.Class<any>;
								});
								public constructor();
								public toString(): string;
								public equals(obj: any): boolean;
								public annotationType(): java.lang.Class<any>;
								public hashCode(): number;
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
				export module extractor {
					export module mp4 {
						export class TrackEncryptionBox extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.mp4.TrackEncryptionBox>;
							public isEncrypted: boolean;
							public schemeType: string;
							public cryptoData: com.google.android.exoplayer2.extractor.TrackOutput.CryptoData;
							public perSampleIvSize: number;
							public defaultInitializationVector: native.Array<number>;
							public constructor(isEncrypted: boolean, schemeType: string, perSampleIvSize: number, keyId: native.Array<number>, defaultEncryptedBlocks: number, defaultClearBlocks: number, defaultInitializationVector: native.Array<number>);
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
				export module extractor {
					export module mp4 {
						export class TrackFragment extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.mp4.TrackFragment>;
							public header: com.google.android.exoplayer2.extractor.mp4.DefaultSampleValues;
							public atomPosition: number;
							public dataPosition: number;
							public auxiliaryDataPosition: number;
							public trunCount: number;
							public sampleCount: number;
							public trunDataPosition: native.Array<number>;
							public trunLength: native.Array<number>;
							public sampleSizeTable: native.Array<number>;
							public sampleCompositionTimeOffsetUsTable: native.Array<number>;
							public sampleDecodingTimeUsTable: native.Array<number>;
							public sampleIsSyncFrameTable: native.Array<boolean>;
							public definesEncryptionData: boolean;
							public trackEncryptionBox: com.google.android.exoplayer2.extractor.mp4.TrackEncryptionBox;
							public sampleEncryptionData: com.google.android.exoplayer2.util.ParsableByteArray;
							public sampleEncryptionDataNeedsFill: boolean;
							public nextFragmentDecodeTime: number;
							public nextFragmentDecodeTimeIncludesMoov: boolean;
							public constructor();
							public fillEncryptionData(source: com.google.android.exoplayer2.util.ParsableByteArray): void;
							public fillEncryptionData(input: com.google.android.exoplayer2.extractor.ExtractorInput): void;
							public getSamplePresentationTimeUs(index: number): number;
							public sampleHasSubsampleEncryptionTable(index: number): boolean;
							public initEncryptionData(length: number): void;
							public initTables(trunCount: number, sampleCount: number): void;
							public reset(): void;
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
				export module extractor {
					export module mp4 {
						export class TrackSampleTable extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.mp4.TrackSampleTable>;
							public track: com.google.android.exoplayer2.extractor.mp4.Track;
							public sampleCount: number;
							public offsets: native.Array<number>;
							public sizes: native.Array<number>;
							public maximumSize: number;
							public timestampsUs: native.Array<number>;
							public flags: native.Array<number>;
							public durationUs: number;
							public constructor(track: com.google.android.exoplayer2.extractor.mp4.Track, offsets: native.Array<number>, sizes: native.Array<number>, maximumSize: number, timestampsUs: native.Array<number>, flags: native.Array<number>, durationUs: number);
							public getIndexOfEarlierOrEqualSynchronizationSample(timeUs: number): number;
							public getIndexOfLaterOrEqualSynchronizationSample(timeUs: number): number;
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
				export module extractor {
					export module ogg {
						export class DefaultOggSeeker extends java.lang.Object implements com.google.android.exoplayer2.extractor.ogg.OggSeeker {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.ogg.DefaultOggSeeker>;
							public createSeekMap(): com.google.android.exoplayer2.extractor.ogg.DefaultOggSeeker.OggSeekMap;
							public createSeekMap(): com.google.android.exoplayer2.extractor.SeekMap;
							public read(input: com.google.android.exoplayer2.extractor.ExtractorInput): number;
							public startSeek(targetGranule: number): void;
							public constructor(streamReader: com.google.android.exoplayer2.extractor.ogg.StreamReader, payloadStartPosition: number, payloadEndPosition: number, firstPayloadPageSize: number, firstPayloadPageGranulePosition: number, firstPayloadPageIsLastPage: boolean);
						}
						export module DefaultOggSeeker {
							export class OggSeekMap extends java.lang.Object implements com.google.android.exoplayer2.extractor.SeekMap {
								public static class: java.lang.Class<com.google.android.exoplayer2.extractor.ogg.DefaultOggSeeker.OggSeekMap>;
								public getSeekPoints(timeUs: number): com.google.android.exoplayer2.extractor.SeekMap.SeekPoints;
								public getDurationUs(): number;
								public isSeekable(): boolean;
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
				export module extractor {
					export module ogg {
						export class FlacReader extends com.google.android.exoplayer2.extractor.ogg.StreamReader {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.ogg.FlacReader>;
							public preparePayload(packet: com.google.android.exoplayer2.util.ParsableByteArray): number;
							public readHeaders(parsableByteArray0: com.google.android.exoplayer2.util.ParsableByteArray, long1: number, setupData2: com.google.android.exoplayer2.extractor.ogg.StreamReader.SetupData): boolean;
							public reset(headerData: boolean): void;
							public readHeaders(packet: com.google.android.exoplayer2.util.ParsableByteArray, position: number, setupData: com.google.android.exoplayer2.extractor.ogg.StreamReader.SetupData): boolean;
							public preparePayload(parsableByteArray0: com.google.android.exoplayer2.util.ParsableByteArray): number;
							public static verifyBitstreamType(data: com.google.android.exoplayer2.util.ParsableByteArray): boolean;
						}
						export module FlacReader {
							export class FlacOggSeeker extends java.lang.Object implements com.google.android.exoplayer2.extractor.ogg.OggSeeker {
								public static class: java.lang.Class<com.google.android.exoplayer2.extractor.ogg.FlacReader.FlacOggSeeker>;
								public setFirstFrameOffset(firstFrameOffset: number): void;
								public startSeek(targetGranule: number): void;
								public createSeekMap(): com.google.android.exoplayer2.extractor.SeekMap;
								public constructor(streamMetadata: com.google.android.exoplayer2.extractor.FlacStreamMetadata, seekTable: com.google.android.exoplayer2.extractor.FlacStreamMetadata.SeekTable);
								public read(input: com.google.android.exoplayer2.extractor.ExtractorInput): number;
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
				export module extractor {
					export module ogg {
						export class OggExtractor extends java.lang.Object implements com.google.android.exoplayer2.extractor.Extractor {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.ogg.OggExtractor>;
							public static FACTORY: com.google.android.exoplayer2.extractor.ExtractorsFactory;
							public constructor();
							public sniff(input: com.google.android.exoplayer2.extractor.ExtractorInput): boolean;
							public seek(position: number, timeUs: number): void;
							public release(): void;
							public init(output: com.google.android.exoplayer2.extractor.ExtractorOutput): void;
							public read(input: com.google.android.exoplayer2.extractor.ExtractorInput, seekPosition: com.google.android.exoplayer2.extractor.PositionHolder): number;
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
				export module extractor {
					export module ogg {
						export class OggPacket extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.ogg.OggPacket>;
							public getPageHeader(): com.google.android.exoplayer2.extractor.ogg.OggPageHeader;
							public trimPayload(): void;
							public getPayload(): com.google.android.exoplayer2.util.ParsableByteArray;
							public populate(input: com.google.android.exoplayer2.extractor.ExtractorInput): boolean;
							public reset(): void;
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
				export module extractor {
					export module ogg {
						export class OggPageHeader extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.ogg.OggPageHeader>;
							public static EMPTY_PAGE_HEADER_SIZE: number;
							public static MAX_SEGMENT_COUNT: number;
							public static MAX_PAGE_PAYLOAD: number;
							public static MAX_PAGE_SIZE: number;
							public revision: number;
							public type: number;
							public granulePosition: number;
							public streamSerialNumber: number;
							public pageSequenceNumber: number;
							public pageChecksum: number;
							public pageSegmentCount: number;
							public headerSize: number;
							public bodySize: number;
							public laces: native.Array<number>;
							public skipToNextPage(input: com.google.android.exoplayer2.extractor.ExtractorInput): boolean;
							public populate(input: com.google.android.exoplayer2.extractor.ExtractorInput, quiet: boolean): boolean;
							public skipToNextPage(input: com.google.android.exoplayer2.extractor.ExtractorInput, limit: number): boolean;
							public reset(): void;
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
				export module extractor {
					export module ogg {
						export class OggSeeker extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.ogg.OggSeeker>;
							/**
							 * Constructs a new instance of the com.google.android.exoplayer2.extractor.ogg.OggSeeker interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								createSeekMap(): com.google.android.exoplayer2.extractor.SeekMap;
								startSeek(long0: number): void;
								read(extractorInput0: com.google.android.exoplayer2.extractor.ExtractorInput): number;
							});
							public constructor();
							public read(extractorInput0: com.google.android.exoplayer2.extractor.ExtractorInput): number;
							public createSeekMap(): com.google.android.exoplayer2.extractor.SeekMap;
							public startSeek(long0: number): void;
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
				export module extractor {
					export module ogg {
						export class OpusReader extends com.google.android.exoplayer2.extractor.ogg.StreamReader {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.ogg.OpusReader>;
							public preparePayload(packet: com.google.android.exoplayer2.util.ParsableByteArray): number;
							public readHeaders(parsableByteArray0: com.google.android.exoplayer2.util.ParsableByteArray, long1: number, setupData2: com.google.android.exoplayer2.extractor.ogg.StreamReader.SetupData): boolean;
							public reset(headerData: boolean): void;
							public readHeaders(packet: com.google.android.exoplayer2.util.ParsableByteArray, position: number, setupData: com.google.android.exoplayer2.extractor.ogg.StreamReader.SetupData): boolean;
							public preparePayload(parsableByteArray0: com.google.android.exoplayer2.util.ParsableByteArray): number;
							public static verifyBitstreamType(data: com.google.android.exoplayer2.util.ParsableByteArray): boolean;
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
				export module extractor {
					export module ogg {
						export abstract class StreamReader extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.ogg.StreamReader>;
							public constructor();
							public readHeaders(parsableByteArray0: com.google.android.exoplayer2.util.ParsableByteArray, long1: number, setupData2: com.google.android.exoplayer2.extractor.ogg.StreamReader.SetupData): boolean;
							public reset(headerData: boolean): void;
							public onSeekEnd(currentGranule: number): void;
							public preparePayload(parsableByteArray0: com.google.android.exoplayer2.util.ParsableByteArray): number;
							public convertGranuleToTime(granule: number): number;
							public convertTimeToGranule(timeUs: number): number;
						}
						export module StreamReader {
							export class SetupData extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.extractor.ogg.StreamReader.SetupData>;
							}
							export class UnseekableOggSeeker extends java.lang.Object implements com.google.android.exoplayer2.extractor.ogg.OggSeeker {
								public static class: java.lang.Class<com.google.android.exoplayer2.extractor.ogg.StreamReader.UnseekableOggSeeker>;
								public startSeek(targetGranule: number): void;
								public createSeekMap(): com.google.android.exoplayer2.extractor.SeekMap;
								public read(input: com.google.android.exoplayer2.extractor.ExtractorInput): number;
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
				export module extractor {
					export module ogg {
						export class VorbisReader extends com.google.android.exoplayer2.extractor.ogg.StreamReader {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.ogg.VorbisReader>;
							public preparePayload(packet: com.google.android.exoplayer2.util.ParsableByteArray): number;
							public readHeaders(parsableByteArray0: com.google.android.exoplayer2.util.ParsableByteArray, long1: number, setupData2: com.google.android.exoplayer2.extractor.ogg.StreamReader.SetupData): boolean;
							public reset(headerData: boolean): void;
							public onSeekEnd(currentGranule: number): void;
							public readHeaders(packet: com.google.android.exoplayer2.util.ParsableByteArray, position: number, setupData: com.google.android.exoplayer2.extractor.ogg.StreamReader.SetupData): boolean;
							public preparePayload(parsableByteArray0: com.google.android.exoplayer2.util.ParsableByteArray): number;
							public static verifyBitstreamType(data: com.google.android.exoplayer2.util.ParsableByteArray): boolean;
						}
						export module VorbisReader {
							export class VorbisSetup extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.extractor.ogg.VorbisReader.VorbisSetup>;
								public idHeader: com.google.android.exoplayer2.extractor.VorbisUtil.VorbisIdHeader;
								public commentHeader: com.google.android.exoplayer2.extractor.VorbisUtil.CommentHeader;
								public setupHeaderData: native.Array<number>;
								public modes: native.Array<com.google.android.exoplayer2.extractor.VorbisUtil.Mode>;
								public iLogModes: number;
								public constructor(idHeader: com.google.android.exoplayer2.extractor.VorbisUtil.VorbisIdHeader, commentHeader: com.google.android.exoplayer2.extractor.VorbisUtil.CommentHeader, setupHeaderData: native.Array<number>, modes: native.Array<com.google.android.exoplayer2.extractor.VorbisUtil.Mode>, iLogModes: number);
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
				export module extractor {
					export module rawcc {
						export class RawCcExtractor extends java.lang.Object implements com.google.android.exoplayer2.extractor.Extractor {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.rawcc.RawCcExtractor>;
							public constructor(format: com.google.android.exoplayer2.Format);
							public sniff(input: com.google.android.exoplayer2.extractor.ExtractorInput): boolean;
							public seek(position: number, timeUs: number): void;
							public release(): void;
							public init(output: com.google.android.exoplayer2.extractor.ExtractorOutput): void;
							public read(input: com.google.android.exoplayer2.extractor.ExtractorInput, seekPosition: com.google.android.exoplayer2.extractor.PositionHolder): number;
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
				export module extractor {
					export module ts {
						export class Ac3Extractor extends java.lang.Object implements com.google.android.exoplayer2.extractor.Extractor {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.ts.Ac3Extractor>;
							public static FACTORY: com.google.android.exoplayer2.extractor.ExtractorsFactory;
							public constructor();
							public sniff(input: com.google.android.exoplayer2.extractor.ExtractorInput): boolean;
							public seek(position: number, timeUs: number): void;
							public release(): void;
							public init(output: com.google.android.exoplayer2.extractor.ExtractorOutput): void;
							public read(input: com.google.android.exoplayer2.extractor.ExtractorInput, seekPosition: com.google.android.exoplayer2.extractor.PositionHolder): number;
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
				export module extractor {
					export module ts {
						export class Ac3Reader extends java.lang.Object implements com.google.android.exoplayer2.extractor.ts.ElementaryStreamReader {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.ts.Ac3Reader>;
							public constructor();
							public constructor(language: string);
							public createTracks(extractorOutput: com.google.android.exoplayer2.extractor.ExtractorOutput, generator: com.google.android.exoplayer2.extractor.ts.TsPayloadReader.TrackIdGenerator): void;
							public packetFinished(): void;
							public seek(): void;
							public consume(data: com.google.android.exoplayer2.util.ParsableByteArray): void;
							public packetStarted(pesTimeUs: number, flags: number): void;
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
				export module extractor {
					export module ts {
						export class Ac4Extractor extends java.lang.Object implements com.google.android.exoplayer2.extractor.Extractor {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.ts.Ac4Extractor>;
							public static FACTORY: com.google.android.exoplayer2.extractor.ExtractorsFactory;
							public constructor();
							public sniff(input: com.google.android.exoplayer2.extractor.ExtractorInput): boolean;
							public seek(position: number, timeUs: number): void;
							public release(): void;
							public init(output: com.google.android.exoplayer2.extractor.ExtractorOutput): void;
							public read(input: com.google.android.exoplayer2.extractor.ExtractorInput, seekPosition: com.google.android.exoplayer2.extractor.PositionHolder): number;
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
				export module extractor {
					export module ts {
						export class Ac4Reader extends java.lang.Object implements com.google.android.exoplayer2.extractor.ts.ElementaryStreamReader {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.ts.Ac4Reader>;
							public constructor();
							public constructor(language: string);
							public createTracks(extractorOutput: com.google.android.exoplayer2.extractor.ExtractorOutput, generator: com.google.android.exoplayer2.extractor.ts.TsPayloadReader.TrackIdGenerator): void;
							public packetFinished(): void;
							public seek(): void;
							public consume(data: com.google.android.exoplayer2.util.ParsableByteArray): void;
							public packetStarted(pesTimeUs: number, flags: number): void;
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
				export module extractor {
					export module ts {
						export class AdtsExtractor extends java.lang.Object implements com.google.android.exoplayer2.extractor.Extractor {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.ts.AdtsExtractor>;
							public static FACTORY: com.google.android.exoplayer2.extractor.ExtractorsFactory;
							public static FLAG_ENABLE_CONSTANT_BITRATE_SEEKING: number;
							public constructor();
							public constructor(flags: number);
							public sniff(input: com.google.android.exoplayer2.extractor.ExtractorInput): boolean;
							public seek(position: number, timeUs: number): void;
							public release(): void;
							public init(output: com.google.android.exoplayer2.extractor.ExtractorOutput): void;
							public read(input: com.google.android.exoplayer2.extractor.ExtractorInput, seekPosition: com.google.android.exoplayer2.extractor.PositionHolder): number;
						}
						export module AdtsExtractor {
							export class Flags extends java.lang.Object implements java.lang.annotation.Annotation {
								public static class: java.lang.Class<com.google.android.exoplayer2.extractor.ts.AdtsExtractor.Flags>;
								/**
								 * Constructs a new instance of the com.google.android.exoplayer2.extractor.ts.AdtsExtractor() when extending the interface class.
								 */
								public constructor(implementation: {
									equals(object0: any): boolean;
									hashCode(): number;
									toString(): string;
									annotationType(): java.lang.Class<any>;
								});
								public constructor();
								public toString(): string;
								public equals(obj: any): boolean;
								public annotationType(): java.lang.Class<any>;
								public hashCode(): number;
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
				export module extractor {
					export module ts {
						export class AdtsReader extends java.lang.Object implements com.google.android.exoplayer2.extractor.ts.ElementaryStreamReader {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.ts.AdtsReader>;
							public packetFinished(): void;
							public static isAdtsSyncWord(candidateSyncWord: number): boolean;
							public seek(): void;
							public createTracks(extractorOutput: com.google.android.exoplayer2.extractor.ExtractorOutput, idGenerator: com.google.android.exoplayer2.extractor.ts.TsPayloadReader.TrackIdGenerator): void;
							public consume(data: com.google.android.exoplayer2.util.ParsableByteArray): void;
							public getSampleDurationUs(): number;
							public packetStarted(pesTimeUs: number, flags: number): void;
							public constructor(exposeId3: boolean);
							public constructor(exposeId3: boolean, language: string);
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
				export module extractor {
					export module ts {
						export class DefaultTsPayloadReaderFactory extends java.lang.Object implements com.google.android.exoplayer2.extractor.ts.TsPayloadReader.Factory {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.ts.DefaultTsPayloadReaderFactory>;
							public static FLAG_ALLOW_NON_IDR_KEYFRAMES: number;
							public static FLAG_IGNORE_AAC_STREAM: number;
							public static FLAG_IGNORE_H264_STREAM: number;
							public static FLAG_DETECT_ACCESS_UNITS: number;
							public static FLAG_IGNORE_SPLICE_INFO_STREAM: number;
							public static FLAG_OVERRIDE_CAPTION_DESCRIPTORS: number;
							public static FLAG_ENABLE_HDMV_DTS_AUDIO_STREAMS: number;
							public constructor();
							public constructor(flags: number);
							public constructor(flags: number, closedCaptionFormats: java.util.List<com.google.android.exoplayer2.Format>);
							public createInitialPayloadReaders(): globalAndroid.util.SparseArray<com.google.android.exoplayer2.extractor.ts.TsPayloadReader>;
							public createPayloadReader(streamType: number, esInfo: com.google.android.exoplayer2.extractor.ts.TsPayloadReader.EsInfo): com.google.android.exoplayer2.extractor.ts.TsPayloadReader;
						}
						export module DefaultTsPayloadReaderFactory {
							export class Flags extends java.lang.Object implements java.lang.annotation.Annotation {
								public static class: java.lang.Class<com.google.android.exoplayer2.extractor.ts.DefaultTsPayloadReaderFactory.Flags>;
								/**
								 * Constructs a new instance of the com.google.android.exoplayer2.extractor.ts.DefaultTsPayloadReaderFactory() when extending the interface class.
								 */
								public constructor(implementation: {
									equals(object0: any): boolean;
									hashCode(): number;
									toString(): string;
									annotationType(): java.lang.Class<any>;
								});
								public constructor();
								public toString(): string;
								public equals(obj: any): boolean;
								public annotationType(): java.lang.Class<any>;
								public hashCode(): number;
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
				export module extractor {
					export module ts {
						export class DtsReader extends java.lang.Object implements com.google.android.exoplayer2.extractor.ts.ElementaryStreamReader {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.ts.DtsReader>;
							public constructor(language: string);
							public packetFinished(): void;
							public seek(): void;
							public createTracks(extractorOutput: com.google.android.exoplayer2.extractor.ExtractorOutput, idGenerator: com.google.android.exoplayer2.extractor.ts.TsPayloadReader.TrackIdGenerator): void;
							public consume(data: com.google.android.exoplayer2.util.ParsableByteArray): void;
							public packetStarted(pesTimeUs: number, flags: number): void;
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
				export module extractor {
					export module ts {
						export class DvbSubtitleReader extends java.lang.Object implements com.google.android.exoplayer2.extractor.ts.ElementaryStreamReader {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.ts.DvbSubtitleReader>;
							public packetFinished(): void;
							public seek(): void;
							public createTracks(extractorOutput: com.google.android.exoplayer2.extractor.ExtractorOutput, idGenerator: com.google.android.exoplayer2.extractor.ts.TsPayloadReader.TrackIdGenerator): void;
							public consume(data: com.google.android.exoplayer2.util.ParsableByteArray): void;
							public packetStarted(pesTimeUs: number, flags: number): void;
							public constructor(subtitleInfos: java.util.List<com.google.android.exoplayer2.extractor.ts.TsPayloadReader.DvbSubtitleInfo>);
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
				export module extractor {
					export module ts {
						export class ElementaryStreamReader extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.ts.ElementaryStreamReader>;
							/**
							 * Constructs a new instance of the com.google.android.exoplayer2.extractor.ts.ElementaryStreamReader interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								seek(): void;
								createTracks(extractorOutput0: com.google.android.exoplayer2.extractor.ExtractorOutput, trackIdGenerator1: com.google.android.exoplayer2.extractor.ts.TsPayloadReader.TrackIdGenerator): void;
								packetStarted(long0: number, int1: number): void;
								consume(parsableByteArray0: com.google.android.exoplayer2.util.ParsableByteArray): void;
								packetFinished(): void;
							});
							public constructor();
							public packetFinished(): void;
							public seek(): void;
							public consume(parsableByteArray0: com.google.android.exoplayer2.util.ParsableByteArray): void;
							public packetStarted(long0: number, int1: number): void;
							public createTracks(extractorOutput0: com.google.android.exoplayer2.extractor.ExtractorOutput, trackIdGenerator1: com.google.android.exoplayer2.extractor.ts.TsPayloadReader.TrackIdGenerator): void;
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
				export module extractor {
					export module ts {
						export class H262Reader extends java.lang.Object implements com.google.android.exoplayer2.extractor.ts.ElementaryStreamReader {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.ts.H262Reader>;
							public constructor();
							public packetFinished(): void;
							public seek(): void;
							public createTracks(extractorOutput: com.google.android.exoplayer2.extractor.ExtractorOutput, idGenerator: com.google.android.exoplayer2.extractor.ts.TsPayloadReader.TrackIdGenerator): void;
							public consume(data: com.google.android.exoplayer2.util.ParsableByteArray): void;
							public packetStarted(pesTimeUs: number, flags: number): void;
						}
						export module H262Reader {
							export class CsdBuffer extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.extractor.ts.H262Reader.CsdBuffer>;
								public length: number;
								public sequenceExtensionPosition: number;
								public data: native.Array<number>;
								public onData(newData: native.Array<number>, offset: number, limit: number): void;
								public onStartCode(startCodeValue: number, bytesAlreadyPassed: number): boolean;
								public constructor(initialCapacity: number);
								public reset(): void;
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
				export module extractor {
					export module ts {
						export class H263Reader extends java.lang.Object implements com.google.android.exoplayer2.extractor.ts.ElementaryStreamReader {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.ts.H263Reader>;
							public constructor();
							public packetFinished(): void;
							public seek(): void;
							public createTracks(extractorOutput: com.google.android.exoplayer2.extractor.ExtractorOutput, idGenerator: com.google.android.exoplayer2.extractor.ts.TsPayloadReader.TrackIdGenerator): void;
							public consume(data: com.google.android.exoplayer2.util.ParsableByteArray): void;
							public packetStarted(pesTimeUs: number, flags: number): void;
						}
						export module H263Reader {
							export class CsdBuffer extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.extractor.ts.H263Reader.CsdBuffer>;
								public length: number;
								public volStartPosition: number;
								public data: native.Array<number>;
								public onData(newData: native.Array<number>, offset: number, limit: number): void;
								public onStartCode(startCodeValue: number, bytesAlreadyPassed: number): boolean;
								public constructor(initialCapacity: number);
								public reset(): void;
							}
							export class SampleReader extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.extractor.ts.H263Reader.SampleReader>;
								public onStartCode(startCodeValue: number, pesTimeUs: number): void;
								public reset(): void;
								public onData(data: native.Array<number>, offset: number, limit: number): void;
								public constructor(output: com.google.android.exoplayer2.extractor.TrackOutput);
								public onDataEnd(position: number, bytesWrittenPastPosition: number, hasOutputFormat: boolean): void;
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
				export module extractor {
					export module ts {
						export class H264Reader extends java.lang.Object implements com.google.android.exoplayer2.extractor.ts.ElementaryStreamReader {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.ts.H264Reader>;
							public packetFinished(): void;
							public seek(): void;
							public createTracks(extractorOutput: com.google.android.exoplayer2.extractor.ExtractorOutput, idGenerator: com.google.android.exoplayer2.extractor.ts.TsPayloadReader.TrackIdGenerator): void;
							public consume(data: com.google.android.exoplayer2.util.ParsableByteArray): void;
							public packetStarted(pesTimeUs: number, flags: number): void;
							public constructor(seiReader: com.google.android.exoplayer2.extractor.ts.SeiReader, allowNonIdrKeyframes: boolean, detectAccessUnits: boolean);
						}
						export module H264Reader {
							export class SampleReader extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.extractor.ts.H264Reader.SampleReader>;
								public putPps(ppsData: com.google.android.exoplayer2.util.NalUnitUtil.PpsData): void;
								public constructor(output: com.google.android.exoplayer2.extractor.TrackOutput, allowNonIdrKeyframes: boolean, detectAccessUnits: boolean);
								public startNalUnit(position: number, type: number, pesTimeUs: number): void;
								public reset(): void;
								public putSps(spsData: com.google.android.exoplayer2.util.NalUnitUtil.SpsData): void;
								public appendToNalUnit(data: native.Array<number>, offset: number, limit: number): void;
								public endNalUnit(position: number, offset: number, hasOutputFormat: boolean, randomAccessIndicator: boolean): boolean;
								public needsSpsPps(): boolean;
							}
							export module SampleReader {
								export class SliceHeaderData extends java.lang.Object {
									public static class: java.lang.Class<com.google.android.exoplayer2.extractor.ts.H264Reader.SampleReader.SliceHeaderData>;
									public setAll(spsData: com.google.android.exoplayer2.util.NalUnitUtil.SpsData, nalRefIdc: number, sliceType: number, frameNum: number, picParameterSetId: number, fieldPicFlag: boolean, bottomFieldFlagPresent: boolean, bottomFieldFlag: boolean, idrPicFlag: boolean, idrPicId: number, picOrderCntLsb: number, deltaPicOrderCntBottom: number, deltaPicOrderCnt0: number, deltaPicOrderCnt1: number): void;
									public setSliceType(sliceType: number): void;
									public clear(): void;
									public isISlice(): boolean;
								}
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
				export module extractor {
					export module ts {
						export class H265Reader extends java.lang.Object implements com.google.android.exoplayer2.extractor.ts.ElementaryStreamReader {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.ts.H265Reader>;
							public packetFinished(): void;
							public constructor(seiReader: com.google.android.exoplayer2.extractor.ts.SeiReader);
							public seek(): void;
							public createTracks(extractorOutput: com.google.android.exoplayer2.extractor.ExtractorOutput, idGenerator: com.google.android.exoplayer2.extractor.ts.TsPayloadReader.TrackIdGenerator): void;
							public consume(data: com.google.android.exoplayer2.util.ParsableByteArray): void;
							public packetStarted(pesTimeUs: number, flags: number): void;
						}
						export module H265Reader {
							export class SampleReader extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.extractor.ts.H265Reader.SampleReader>;
								public endNalUnit(position: number, offset: number, hasOutputFormat: boolean): void;
								public readNalUnitData(data: native.Array<number>, offset: number, limit: number): void;
								public startNalUnit(position: number, offset: number, nalUnitType: number, pesTimeUs: number, hasOutputFormat: boolean): void;
								public reset(): void;
								public constructor(output: com.google.android.exoplayer2.extractor.TrackOutput);
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
				export module extractor {
					export module ts {
						export class Id3Reader extends java.lang.Object implements com.google.android.exoplayer2.extractor.ts.ElementaryStreamReader {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.ts.Id3Reader>;
							public constructor();
							public packetFinished(): void;
							public seek(): void;
							public createTracks(extractorOutput: com.google.android.exoplayer2.extractor.ExtractorOutput, idGenerator: com.google.android.exoplayer2.extractor.ts.TsPayloadReader.TrackIdGenerator): void;
							public consume(data: com.google.android.exoplayer2.util.ParsableByteArray): void;
							public packetStarted(pesTimeUs: number, flags: number): void;
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
				export module extractor {
					export module ts {
						export class LatmReader extends java.lang.Object implements com.google.android.exoplayer2.extractor.ts.ElementaryStreamReader {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.ts.LatmReader>;
							public constructor(language: string);
							public packetFinished(): void;
							public seek(): void;
							public createTracks(extractorOutput: com.google.android.exoplayer2.extractor.ExtractorOutput, idGenerator: com.google.android.exoplayer2.extractor.ts.TsPayloadReader.TrackIdGenerator): void;
							public consume(data: com.google.android.exoplayer2.util.ParsableByteArray): void;
							public packetStarted(pesTimeUs: number, flags: number): void;
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
				export module extractor {
					export module ts {
						export class MpegAudioReader extends java.lang.Object implements com.google.android.exoplayer2.extractor.ts.ElementaryStreamReader {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.ts.MpegAudioReader>;
							public constructor();
							public constructor(language: string);
							public packetFinished(): void;
							public seek(): void;
							public createTracks(extractorOutput: com.google.android.exoplayer2.extractor.ExtractorOutput, idGenerator: com.google.android.exoplayer2.extractor.ts.TsPayloadReader.TrackIdGenerator): void;
							public consume(data: com.google.android.exoplayer2.util.ParsableByteArray): void;
							public packetStarted(pesTimeUs: number, flags: number): void;
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
				export module extractor {
					export module ts {
						export class NalUnitTargetBuffer extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.ts.NalUnitTargetBuffer>;
							public nalData: native.Array<number>;
							public nalLength: number;
							public appendToNalUnit(data: native.Array<number>, offset: number, limit: number): void;
							public endNalUnit(discardPadding: number): boolean;
							public constructor(targetType: number, initialCapacity: number);
							public isCompleted(): boolean;
							public reset(): void;
							public startNalUnit(type: number): void;
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
				export module extractor {
					export module ts {
						export class PassthroughSectionPayloadReader extends java.lang.Object implements com.google.android.exoplayer2.extractor.ts.SectionPayloadReader {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.ts.PassthroughSectionPayloadReader>;
							public init(timestampAdjuster: com.google.android.exoplayer2.util.TimestampAdjuster, extractorOutput: com.google.android.exoplayer2.extractor.ExtractorOutput, idGenerator: com.google.android.exoplayer2.extractor.ts.TsPayloadReader.TrackIdGenerator): void;
							public constructor(mimeType: string);
							public consume(sectionData: com.google.android.exoplayer2.util.ParsableByteArray): void;
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
				export module extractor {
					export module ts {
						export class PesReader extends java.lang.Object implements com.google.android.exoplayer2.extractor.ts.TsPayloadReader {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.ts.PesReader>;
							public seek(): void;
							public consume(data: com.google.android.exoplayer2.util.ParsableByteArray, flags: number): void;
							public constructor(reader: com.google.android.exoplayer2.extractor.ts.ElementaryStreamReader);
							public init(timestampAdjuster: com.google.android.exoplayer2.util.TimestampAdjuster, extractorOutput: com.google.android.exoplayer2.extractor.ExtractorOutput, idGenerator: com.google.android.exoplayer2.extractor.ts.TsPayloadReader.TrackIdGenerator): void;
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
				export module extractor {
					export module ts {
						export class PsBinarySearchSeeker extends com.google.android.exoplayer2.extractor.BinarySearchSeeker {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.ts.PsBinarySearchSeeker>;
							public constructor(scrTimestampAdjuster: com.google.android.exoplayer2.util.TimestampAdjuster, streamDurationUs: number, inputLength: number);
							public constructor(seekTimestampConverter: com.google.android.exoplayer2.extractor.BinarySearchSeeker.SeekTimestampConverter, timestampSeeker: com.google.android.exoplayer2.extractor.BinarySearchSeeker.TimestampSeeker, durationUs: number, floorTimePosition: number, ceilingTimePosition: number, floorBytePosition: number, ceilingBytePosition: number, approxBytesPerFrame: number, minimumSearchRange: number);
						}
						export module PsBinarySearchSeeker {
							export class PsScrSeeker extends java.lang.Object implements com.google.android.exoplayer2.extractor.BinarySearchSeeker.TimestampSeeker {
								public static class: java.lang.Class<com.google.android.exoplayer2.extractor.ts.PsBinarySearchSeeker.PsScrSeeker>;
								public searchForTimestamp(input: com.google.android.exoplayer2.extractor.ExtractorInput, targetTimestamp: number): com.google.android.exoplayer2.extractor.BinarySearchSeeker.TimestampSearchResult;
								public onSeekFinished(): void;
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
				export module extractor {
					export module ts {
						export class PsDurationReader extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.ts.PsDurationReader>;
							public getDurationUs(): number;
							public isDurationReadFinished(): boolean;
							public static readScrValueFromPack(packetBuffer: com.google.android.exoplayer2.util.ParsableByteArray): number;
							public getScrTimestampAdjuster(): com.google.android.exoplayer2.util.TimestampAdjuster;
							public readDuration(input: com.google.android.exoplayer2.extractor.ExtractorInput, seekPositionHolder: com.google.android.exoplayer2.extractor.PositionHolder): number;
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
				export module extractor {
					export module ts {
						export class PsExtractor extends java.lang.Object implements com.google.android.exoplayer2.extractor.Extractor {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.ts.PsExtractor>;
							public static FACTORY: com.google.android.exoplayer2.extractor.ExtractorsFactory;
							public static PRIVATE_STREAM_1: number;
							public static AUDIO_STREAM: number;
							public static AUDIO_STREAM_MASK: number;
							public static VIDEO_STREAM: number;
							public static VIDEO_STREAM_MASK: number;
							public constructor();
							public sniff(input: com.google.android.exoplayer2.extractor.ExtractorInput): boolean;
							public seek(position: number, timeUs: number): void;
							public release(): void;
							public constructor(timestampAdjuster: com.google.android.exoplayer2.util.TimestampAdjuster);
							public init(output: com.google.android.exoplayer2.extractor.ExtractorOutput): void;
							public read(input: com.google.android.exoplayer2.extractor.ExtractorInput, seekPosition: com.google.android.exoplayer2.extractor.PositionHolder): number;
						}
						export module PsExtractor {
							export class PesReader extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.extractor.ts.PsExtractor.PesReader>;
								public seek(): void;
								public consume(data: com.google.android.exoplayer2.util.ParsableByteArray): void;
								public constructor(pesPayloadReader: com.google.android.exoplayer2.extractor.ts.ElementaryStreamReader, timestampAdjuster: com.google.android.exoplayer2.util.TimestampAdjuster);
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
				export module extractor {
					export module ts {
						export class SectionPayloadReader extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.ts.SectionPayloadReader>;
							/**
							 * Constructs a new instance of the com.google.android.exoplayer2.extractor.ts.SectionPayloadReader interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								init(timestampAdjuster0: com.google.android.exoplayer2.util.TimestampAdjuster, extractorOutput1: com.google.android.exoplayer2.extractor.ExtractorOutput, trackIdGenerator2: com.google.android.exoplayer2.extractor.ts.TsPayloadReader.TrackIdGenerator): void;
								consume(parsableByteArray0: com.google.android.exoplayer2.util.ParsableByteArray): void;
							});
							public constructor();
							public init(timestampAdjuster0: com.google.android.exoplayer2.util.TimestampAdjuster, extractorOutput1: com.google.android.exoplayer2.extractor.ExtractorOutput, trackIdGenerator2: com.google.android.exoplayer2.extractor.ts.TsPayloadReader.TrackIdGenerator): void;
							public consume(parsableByteArray0: com.google.android.exoplayer2.util.ParsableByteArray): void;
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
				export module extractor {
					export module ts {
						export class SectionReader extends java.lang.Object implements com.google.android.exoplayer2.extractor.ts.TsPayloadReader {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.ts.SectionReader>;
							public constructor(reader: com.google.android.exoplayer2.extractor.ts.SectionPayloadReader);
							public seek(): void;
							public consume(data: com.google.android.exoplayer2.util.ParsableByteArray, flags: number): void;
							public init(timestampAdjuster: com.google.android.exoplayer2.util.TimestampAdjuster, extractorOutput: com.google.android.exoplayer2.extractor.ExtractorOutput, idGenerator: com.google.android.exoplayer2.extractor.ts.TsPayloadReader.TrackIdGenerator): void;
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
				export module extractor {
					export module ts {
						export class SeiReader extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.ts.SeiReader>;
							public consume(pesTimeUs: number, seiBuffer: com.google.android.exoplayer2.util.ParsableByteArray): void;
							public constructor(closedCaptionFormats: java.util.List<com.google.android.exoplayer2.Format>);
							public createTracks(extractorOutput: com.google.android.exoplayer2.extractor.ExtractorOutput, idGenerator: com.google.android.exoplayer2.extractor.ts.TsPayloadReader.TrackIdGenerator): void;
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
				export module extractor {
					export module ts {
						export class TsBinarySearchSeeker extends com.google.android.exoplayer2.extractor.BinarySearchSeeker {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.ts.TsBinarySearchSeeker>;
							public constructor(seekTimestampConverter: com.google.android.exoplayer2.extractor.BinarySearchSeeker.SeekTimestampConverter, timestampSeeker: com.google.android.exoplayer2.extractor.BinarySearchSeeker.TimestampSeeker, durationUs: number, floorTimePosition: number, ceilingTimePosition: number, floorBytePosition: number, ceilingBytePosition: number, approxBytesPerFrame: number, minimumSearchRange: number);
							public constructor(pcrTimestampAdjuster: com.google.android.exoplayer2.util.TimestampAdjuster, streamDurationUs: number, inputLength: number, pcrPid: number, timestampSearchBytes: number);
						}
						export module TsBinarySearchSeeker {
							export class TsPcrSeeker extends java.lang.Object implements com.google.android.exoplayer2.extractor.BinarySearchSeeker.TimestampSeeker {
								public static class: java.lang.Class<com.google.android.exoplayer2.extractor.ts.TsBinarySearchSeeker.TsPcrSeeker>;
								public searchForTimestamp(input: com.google.android.exoplayer2.extractor.ExtractorInput, targetTimestamp: number): com.google.android.exoplayer2.extractor.BinarySearchSeeker.TimestampSearchResult;
								public constructor(pcrPid: number, pcrTimestampAdjuster: com.google.android.exoplayer2.util.TimestampAdjuster, timestampSearchBytes: number);
								public onSeekFinished(): void;
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
				export module extractor {
					export module ts {
						export class TsDurationReader extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.ts.TsDurationReader>;
							public getDurationUs(): number;
							public isDurationReadFinished(): boolean;
							public getPcrTimestampAdjuster(): com.google.android.exoplayer2.util.TimestampAdjuster;
							public readDuration(input: com.google.android.exoplayer2.extractor.ExtractorInput, seekPositionHolder: com.google.android.exoplayer2.extractor.PositionHolder, pcrPid: number): number;
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
				export module extractor {
					export module ts {
						export class TsExtractor extends java.lang.Object implements com.google.android.exoplayer2.extractor.Extractor {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.ts.TsExtractor>;
							public static FACTORY: com.google.android.exoplayer2.extractor.ExtractorsFactory;
							public static MODE_MULTI_PMT: number;
							public static MODE_SINGLE_PMT: number;
							public static MODE_HLS: number;
							public static TS_PACKET_SIZE: number;
							public static DEFAULT_TIMESTAMP_SEARCH_BYTES: number;
							public static TS_STREAM_TYPE_MPA: number;
							public static TS_STREAM_TYPE_MPA_LSF: number;
							public static TS_STREAM_TYPE_AAC_ADTS: number;
							public static TS_STREAM_TYPE_AAC_LATM: number;
							public static TS_STREAM_TYPE_AC3: number;
							public static TS_STREAM_TYPE_DTS: number;
							public static TS_STREAM_TYPE_HDMV_DTS: number;
							public static TS_STREAM_TYPE_E_AC3: number;
							public static TS_STREAM_TYPE_AC4: number;
							public static TS_STREAM_TYPE_H262: number;
							public static TS_STREAM_TYPE_H263: number;
							public static TS_STREAM_TYPE_H264: number;
							public static TS_STREAM_TYPE_H265: number;
							public static TS_STREAM_TYPE_ID3: number;
							public static TS_STREAM_TYPE_SPLICE_INFO: number;
							public static TS_STREAM_TYPE_DVBSUBS: number;
							public static TS_STREAM_TYPE_AIT: number;
							public static TS_SYNC_BYTE: number;
							public constructor();
							public sniff(input: com.google.android.exoplayer2.extractor.ExtractorInput): boolean;
							public constructor(mode: number, timestampAdjuster: com.google.android.exoplayer2.util.TimestampAdjuster, payloadReaderFactory: com.google.android.exoplayer2.extractor.ts.TsPayloadReader.Factory);
							public seek(position: number, timeUs: number): void;
							public constructor(mode: number, timestampAdjuster: com.google.android.exoplayer2.util.TimestampAdjuster, payloadReaderFactory: com.google.android.exoplayer2.extractor.ts.TsPayloadReader.Factory, timestampSearchBytes: number);
							public release(): void;
							public init(output: com.google.android.exoplayer2.extractor.ExtractorOutput): void;
							public read(input: com.google.android.exoplayer2.extractor.ExtractorInput, seekPosition: com.google.android.exoplayer2.extractor.PositionHolder): number;
							public constructor(defaultTsPayloadReaderFlags: number);
							public constructor(mode: number, defaultTsPayloadReaderFlags: number, timestampSearchBytes: number);
						}
						export module TsExtractor {
							export class Mode extends java.lang.Object implements java.lang.annotation.Annotation {
								public static class: java.lang.Class<com.google.android.exoplayer2.extractor.ts.TsExtractor.Mode>;
								/**
								 * Constructs a new instance of the com.google.android.exoplayer2.extractor.ts.TsExtractor() when extending the interface class.
								 */
								public constructor(implementation: {
									equals(object0: any): boolean;
									hashCode(): number;
									toString(): string;
									annotationType(): java.lang.Class<any>;
								});
								public constructor();
								public toString(): string;
								public equals(obj: any): boolean;
								public annotationType(): java.lang.Class<any>;
								public hashCode(): number;
							}
							export class PatReader extends java.lang.Object implements com.google.android.exoplayer2.extractor.ts.SectionPayloadReader {
								public static class: java.lang.Class<com.google.android.exoplayer2.extractor.ts.TsExtractor.PatReader>;
								public init(timestampAdjuster: com.google.android.exoplayer2.util.TimestampAdjuster, extractorOutput: com.google.android.exoplayer2.extractor.ExtractorOutput, idGenerator: com.google.android.exoplayer2.extractor.ts.TsPayloadReader.TrackIdGenerator): void;
								public consume(sectionData: com.google.android.exoplayer2.util.ParsableByteArray): void;
								public constructor(param0: com.google.android.exoplayer2.extractor.ts.TsExtractor);
							}
							export class PmtReader extends java.lang.Object implements com.google.android.exoplayer2.extractor.ts.SectionPayloadReader {
								public static class: java.lang.Class<com.google.android.exoplayer2.extractor.ts.TsExtractor.PmtReader>;
								public init(timestampAdjuster: com.google.android.exoplayer2.util.TimestampAdjuster, extractorOutput: com.google.android.exoplayer2.extractor.ExtractorOutput, idGenerator: com.google.android.exoplayer2.extractor.ts.TsPayloadReader.TrackIdGenerator): void;
								public consume(sectionData: com.google.android.exoplayer2.util.ParsableByteArray): void;
								public constructor(param0: com.google.android.exoplayer2.extractor.ts.TsExtractor, pid: number);
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
				export module extractor {
					export module ts {
						export class TsPayloadReader extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.ts.TsPayloadReader>;
							/**
							 * Constructs a new instance of the com.google.android.exoplayer2.extractor.ts.TsPayloadReader interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								init(timestampAdjuster0: com.google.android.exoplayer2.util.TimestampAdjuster, extractorOutput1: com.google.android.exoplayer2.extractor.ExtractorOutput, trackIdGenerator2: com.google.android.exoplayer2.extractor.ts.TsPayloadReader.TrackIdGenerator): void;
								seek(): void;
								consume(parsableByteArray0: com.google.android.exoplayer2.util.ParsableByteArray, int1: number): void;
							});
							public constructor();
							public static FLAG_PAYLOAD_UNIT_START_INDICATOR: number;
							public static FLAG_DATA_ALIGNMENT_INDICATOR: number;
							public static FLAG_RANDOM_ACCESS_INDICATOR: number;
							public consume(parsableByteArray0: com.google.android.exoplayer2.util.ParsableByteArray, int1: number): void;
							public init(timestampAdjuster0: com.google.android.exoplayer2.util.TimestampAdjuster, extractorOutput1: com.google.android.exoplayer2.extractor.ExtractorOutput, trackIdGenerator2: com.google.android.exoplayer2.extractor.ts.TsPayloadReader.TrackIdGenerator): void;
							public seek(): void;
						}
						export module TsPayloadReader {
							export class DvbSubtitleInfo extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.extractor.ts.TsPayloadReader.DvbSubtitleInfo>;
								public language: string;
								public type: number;
								public initializationData: native.Array<number>;
								public constructor(language: string, type: number, initializationData: native.Array<number>);
							}
							export class EsInfo extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.extractor.ts.TsPayloadReader.EsInfo>;
								public streamType: number;
								public language: string;
								public dvbSubtitleInfos: java.util.List<com.google.android.exoplayer2.extractor.ts.TsPayloadReader.DvbSubtitleInfo>;
								public descriptorBytes: native.Array<number>;
								public constructor(streamType: number, language: string, dvbSubtitleInfos: java.util.List<com.google.android.exoplayer2.extractor.ts.TsPayloadReader.DvbSubtitleInfo>, descriptorBytes: native.Array<number>);
							}
							export class Factory extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.extractor.ts.TsPayloadReader.Factory>;
								/**
								 * Constructs a new instance of the com.google.android.exoplayer2.extractor.ts.TsPayloadReader() when extending the interface class.
								 */
								public constructor(implementation: {
									createInitialPayloadReaders(): globalAndroid.util.SparseArray<com.google.android.exoplayer2.extractor.ts.TsPayloadReader>;
									createPayloadReader(int0: number, esInfo1: com.google.android.exoplayer2.extractor.ts.TsPayloadReader.EsInfo): com.google.android.exoplayer2.extractor.ts.TsPayloadReader;
								});
								public constructor();
								public createPayloadReader(int0: number, esInfo1: com.google.android.exoplayer2.extractor.ts.TsPayloadReader.EsInfo): com.google.android.exoplayer2.extractor.ts.TsPayloadReader;
								public createInitialPayloadReaders(): globalAndroid.util.SparseArray<com.google.android.exoplayer2.extractor.ts.TsPayloadReader>;
							}
							export class Flags extends java.lang.Object implements java.lang.annotation.Annotation {
								public static class: java.lang.Class<com.google.android.exoplayer2.extractor.ts.TsPayloadReader.Flags>;
								/**
								 * Constructs a new instance of the com.google.android.exoplayer2.extractor.ts.TsPayloadReader() when extending the interface class.
								 */
								public constructor(implementation: {
									equals(object0: any): boolean;
									hashCode(): number;
									toString(): string;
									annotationType(): java.lang.Class<any>;
								});
								public constructor();
								public toString(): string;
								public equals(obj: any): boolean;
								public annotationType(): java.lang.Class<any>;
								public hashCode(): number;
							}
							export class TrackIdGenerator extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.extractor.ts.TsPayloadReader.TrackIdGenerator>;
								public constructor(firstTrackId: number, trackIdIncrement: number);
								public generateNewId(): void;
								public getTrackId(): number;
								public getFormatId(): string;
								public constructor(programNumber: number, firstTrackId: number, trackIdIncrement: number);
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
				export module extractor {
					export module ts {
						export class TsUtil extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.ts.TsUtil>;
							public static findSyncBytePosition(data: native.Array<number>, startPosition: number, limitPosition: number): number;
							public static readPcrFromPacket(packetBuffer: com.google.android.exoplayer2.util.ParsableByteArray, startOfPacket: number, pcrPid: number): number;
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
				export module extractor {
					export module ts {
						export class UserDataReader extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.ts.UserDataReader>;
							public constructor(closedCaptionFormats: java.util.List<com.google.android.exoplayer2.Format>);
							public createTracks(extractorOutput: com.google.android.exoplayer2.extractor.ExtractorOutput, idGenerator: com.google.android.exoplayer2.extractor.ts.TsPayloadReader.TrackIdGenerator): void;
							public consume(pesTimeUs: number, userDataPayload: com.google.android.exoplayer2.util.ParsableByteArray): void;
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
				export module extractor {
					export module wav {
						export class WavExtractor extends java.lang.Object implements com.google.android.exoplayer2.extractor.Extractor {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.wav.WavExtractor>;
							public static FACTORY: com.google.android.exoplayer2.extractor.ExtractorsFactory;
							public constructor();
							public sniff(input: com.google.android.exoplayer2.extractor.ExtractorInput): boolean;
							public seek(position: number, timeUs: number): void;
							public release(): void;
							public init(output: com.google.android.exoplayer2.extractor.ExtractorOutput): void;
							public read(input: com.google.android.exoplayer2.extractor.ExtractorInput, seekPosition: com.google.android.exoplayer2.extractor.PositionHolder): number;
						}
						export module WavExtractor {
							export class ImaAdPcmOutputWriter extends java.lang.Object implements com.google.android.exoplayer2.extractor.wav.WavExtractor.OutputWriter {
								public static class: java.lang.Class<com.google.android.exoplayer2.extractor.wav.WavExtractor.ImaAdPcmOutputWriter>;
								public constructor(extractorOutput: com.google.android.exoplayer2.extractor.ExtractorOutput, trackOutput: com.google.android.exoplayer2.extractor.TrackOutput, header: com.google.android.exoplayer2.extractor.wav.WavHeader);
								public sampleData(input: com.google.android.exoplayer2.extractor.ExtractorInput, bytesLeft: number): boolean;
								public init(dataStartPosition: number, dataEndPosition: number): void;
								public reset(timeUs: number): void;
							}
							export class OutputWriter extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.extractor.wav.WavExtractor.OutputWriter>;
								/**
								 * Constructs a new instance of the com.google.android.exoplayer2.extractor.wav.WavExtractor() when extending the interface class.
								 */
								public constructor(implementation: {
									reset(long0: number): void;
									init(int0: number, long1: number): void;
									sampleData(extractorInput0: com.google.android.exoplayer2.extractor.ExtractorInput, long1: number): boolean;
								});
								public constructor();
								public init(int0: number, long1: number): void;
								public sampleData(extractorInput0: com.google.android.exoplayer2.extractor.ExtractorInput, long1: number): boolean;
								public reset(long0: number): void;
							}
							export class PassthroughOutputWriter extends java.lang.Object implements com.google.android.exoplayer2.extractor.wav.WavExtractor.OutputWriter {
								public static class: java.lang.Class<com.google.android.exoplayer2.extractor.wav.WavExtractor.PassthroughOutputWriter>;
								public sampleData(input: com.google.android.exoplayer2.extractor.ExtractorInput, bytesLeft: number): boolean;
								public constructor(extractorOutput: com.google.android.exoplayer2.extractor.ExtractorOutput, trackOutput: com.google.android.exoplayer2.extractor.TrackOutput, header: com.google.android.exoplayer2.extractor.wav.WavHeader, mimeType: string, pcmEncoding: number);
								public init(dataStartPosition: number, dataEndPosition: number): void;
								public reset(timeUs: number): void;
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
				export module extractor {
					export module wav {
						export class WavHeader extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.wav.WavHeader>;
							public formatType: number;
							public numChannels: number;
							public frameRateHz: number;
							public averageBytesPerSecond: number;
							public blockSize: number;
							public bitsPerSample: number;
							public extraData: native.Array<number>;
							public constructor(formatType: number, numChannels: number, frameRateHz: number, averageBytesPerSecond: number, blockSize: number, bitsPerSample: number, extraData: native.Array<number>);
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
				export module extractor {
					export module wav {
						export class WavHeaderReader extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.wav.WavHeaderReader>;
							public static skipToData(input: com.google.android.exoplayer2.extractor.ExtractorInput): globalAndroid.util.Pair<java.lang.Long,java.lang.Long>;
							public static peek(input: com.google.android.exoplayer2.extractor.ExtractorInput): com.google.android.exoplayer2.extractor.wav.WavHeader;
						}
						export module WavHeaderReader {
							export class ChunkHeader extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.extractor.wav.WavHeaderReader.ChunkHeader>;
								public static SIZE_IN_BYTES: number;
								public id: number;
								public size: number;
								public static peek(input: com.google.android.exoplayer2.extractor.ExtractorInput, scratch: com.google.android.exoplayer2.util.ParsableByteArray): com.google.android.exoplayer2.extractor.wav.WavHeaderReader.ChunkHeader;
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
				export module extractor {
					export module wav {
						export class WavSeekMap extends java.lang.Object implements com.google.android.exoplayer2.extractor.SeekMap {
							public static class: java.lang.Class<com.google.android.exoplayer2.extractor.wav.WavSeekMap>;
							public constructor(wavHeader: com.google.android.exoplayer2.extractor.wav.WavHeader, framesPerBlock: number, dataStartPosition: number, dataEndPosition: number);
							public getDurationUs(): number;
							public getSeekPoints(timeUs: number): com.google.android.exoplayer2.extractor.SeekMap.SeekPoints;
							public isSeekable(): boolean;
						}
					}
				}
			}
		}
	}
}


//Generics information:

