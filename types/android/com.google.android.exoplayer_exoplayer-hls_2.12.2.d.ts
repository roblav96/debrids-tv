declare module com {
	export module google {
		export module android {
			export module exoplayer2 {
				export module source {
					export module hls {
						export class Aes128DataSource extends java.lang.Object implements com.google.android.exoplayer2.upstream.DataSource {
							public static class: java.lang.Class<com.google.android.exoplayer2.source.hls.Aes128DataSource>;
							public getCipherInstance(): javax.crypto.Cipher;
							public getUri(): globalAndroid.net.Uri;
							public close(): void;
							public read(buffer: native.Array<number>, offset: number, readLength: number): number;
							public open(dataSpec: com.google.android.exoplayer2.upstream.DataSpec): number;
							public addTransferListener(transferListener: com.google.android.exoplayer2.upstream.TransferListener): void;
							public constructor(upstream: com.google.android.exoplayer2.upstream.DataSource, encryptionKey: native.Array<number>, encryptionIv: native.Array<number>);
							public getResponseHeaders(): java.util.Map<string,java.util.List<string>>;
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
				export module source {
					export module hls {
						export class BuildConfig extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.source.hls.BuildConfig>;
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
}

declare module com {
	export module google {
		export module android {
			export module exoplayer2 {
				export module source {
					export module hls {
						export class BundledHlsMediaChunkExtractor extends java.lang.Object implements com.google.android.exoplayer2.source.hls.HlsMediaChunkExtractor {
							public static class: java.lang.Class<com.google.android.exoplayer2.source.hls.BundledHlsMediaChunkExtractor>;
							public constructor(extractor: com.google.android.exoplayer2.extractor.Extractor, masterPlaylistFormat: com.google.android.exoplayer2.Format, timestampAdjuster: com.google.android.exoplayer2.util.TimestampAdjuster);
							public isPackedAudioExtractor(): boolean;
							public isReusable(): boolean;
							public read(extractorInput: com.google.android.exoplayer2.extractor.ExtractorInput): boolean;
							public init(extractorOutput: com.google.android.exoplayer2.extractor.ExtractorOutput): void;
							public recreate(): com.google.android.exoplayer2.source.hls.HlsMediaChunkExtractor;
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
				export module source {
					export module hls {
						export class DefaultHlsDataSourceFactory extends java.lang.Object implements com.google.android.exoplayer2.source.hls.HlsDataSourceFactory {
							public static class: java.lang.Class<com.google.android.exoplayer2.source.hls.DefaultHlsDataSourceFactory>;
							public constructor(dataSourceFactory: com.google.android.exoplayer2.upstream.DataSource.Factory);
							public createDataSource(dataType: number): com.google.android.exoplayer2.upstream.DataSource;
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
				export module source {
					export module hls {
						export class DefaultHlsExtractorFactory extends java.lang.Object implements com.google.android.exoplayer2.source.hls.HlsExtractorFactory {
							public static class: java.lang.Class<com.google.android.exoplayer2.source.hls.DefaultHlsExtractorFactory>;
							public constructor();
							public createExtractor(uri: globalAndroid.net.Uri, format: com.google.android.exoplayer2.Format, muxedCaptionFormats: java.util.List<com.google.android.exoplayer2.Format>, timestampAdjuster: com.google.android.exoplayer2.util.TimestampAdjuster, responseHeaders: java.util.Map<string,java.util.List<string>>, extractorInput: com.google.android.exoplayer2.extractor.ExtractorInput): com.google.android.exoplayer2.source.hls.BundledHlsMediaChunkExtractor;
							public constructor(payloadReaderFactoryFlags: number, exposeCea608WhenMissingDeclarations: boolean);
							public createExtractor(uri0: globalAndroid.net.Uri, format1: com.google.android.exoplayer2.Format, list2: java.util.List<com.google.android.exoplayer2.Format>, timestampAdjuster3: com.google.android.exoplayer2.util.TimestampAdjuster, map4: java.util.Map<string,java.util.List<string>>, extractorInput5: com.google.android.exoplayer2.extractor.ExtractorInput): com.google.android.exoplayer2.source.hls.HlsMediaChunkExtractor;
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
				export module source {
					export module hls {
						export class FullSegmentEncryptionKeyCache extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.source.hls.FullSegmentEncryptionKeyCache>;
							public get(uri: globalAndroid.net.Uri): native.Array<number>;
							public put(uri: globalAndroid.net.Uri, encryptionKey: native.Array<number>): native.Array<number>;
							public remove(uri: globalAndroid.net.Uri): native.Array<number>;
							public constructor(maxSize: number);
							public containsUri(uri: globalAndroid.net.Uri): boolean;
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
				export module source {
					export module hls {
						export class HlsChunkSource extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.source.hls.HlsChunkSource>;
							public getPreferredQueueSize(playbackPositionUs: number, queue: java.util.List<any>): number;
							public constructor(extractorFactory: com.google.android.exoplayer2.source.hls.HlsExtractorFactory, playlistTracker: com.google.android.exoplayer2.source.hls.playlist.HlsPlaylistTracker, playlistUrls: native.Array<globalAndroid.net.Uri>, playlistFormats: native.Array<com.google.android.exoplayer2.Format>, dataSourceFactory: com.google.android.exoplayer2.source.hls.HlsDataSourceFactory, mediaTransferListener: com.google.android.exoplayer2.upstream.TransferListener, timestampAdjusterProvider: com.google.android.exoplayer2.source.hls.TimestampAdjusterProvider, muxedCaptionFormats: java.util.List<com.google.android.exoplayer2.Format>);
							public setTrackSelection(trackSelection: com.google.android.exoplayer2.trackselection.TrackSelection): void;
							public reset(): void;
							public getTrackGroup(): com.google.android.exoplayer2.source.TrackGroup;
							public setIsTimestampMaster(isTimestampMaster: boolean): void;
							public shouldCancelLoad(playbackPositionUs: number, loadingChunk: com.google.android.exoplayer2.source.chunk.Chunk, queue: java.util.List<any>): boolean;
							public maybeExcludeTrack(chunk: com.google.android.exoplayer2.source.chunk.Chunk, exclusionDurationMs: number): boolean;
							public onChunkLoadCompleted(chunk: com.google.android.exoplayer2.source.chunk.Chunk): void;
							public getNextChunk(playbackPositionUs: number, loadPositionUs: number, queue: java.util.List<com.google.android.exoplayer2.source.hls.HlsMediaChunk>, allowEndOfStream: boolean, out: com.google.android.exoplayer2.source.hls.HlsChunkSource.HlsChunkHolder): void;
							public getTrackSelection(): com.google.android.exoplayer2.trackselection.TrackSelection;
							public createMediaChunkIterators(previous: com.google.android.exoplayer2.source.hls.HlsMediaChunk, loadPositionUs: number): native.Array<com.google.android.exoplayer2.source.chunk.MediaChunkIterator>;
							public maybeThrowError(): void;
							public onPlaylistError(playlistUrl: globalAndroid.net.Uri, exclusionDurationMs: number): boolean;
						}
						export module HlsChunkSource {
							export class EncryptionKeyChunk extends com.google.android.exoplayer2.source.chunk.DataChunk {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.hls.HlsChunkSource.EncryptionKeyChunk>;
								public consume(data: native.Array<number>, limit: number): void;
								public consume(bytes0: native.Array<number>, int1: number): void;
								public constructor(dataSource: com.google.android.exoplayer2.upstream.DataSource, dataSpec: com.google.android.exoplayer2.upstream.DataSpec, type: number, trackFormat: com.google.android.exoplayer2.Format, trackSelectionReason: number, trackSelectionData: any, data: native.Array<number>);
								public constructor(dataSource: com.google.android.exoplayer2.upstream.DataSource, dataSpec: com.google.android.exoplayer2.upstream.DataSpec, type: number, trackFormat: com.google.android.exoplayer2.Format, trackSelectionReason: number, trackSelectionData: any, startTimeUs: number, endTimeUs: number);
								public getResult(): native.Array<number>;
								public cancelLoad(): void;
								public constructor(dataSource: com.google.android.exoplayer2.upstream.DataSource, dataSpec: com.google.android.exoplayer2.upstream.DataSpec, trackFormat: com.google.android.exoplayer2.Format, trackSelectionReason: number, trackSelectionData: any, scratchSpace: native.Array<number>);
								public load(): void;
							}
							export class HlsChunkHolder extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.hls.HlsChunkSource.HlsChunkHolder>;
								public chunk: com.google.android.exoplayer2.source.chunk.Chunk;
								public endOfStream: boolean;
								public playlistUrl: globalAndroid.net.Uri;
								public clear(): void;
								public constructor();
							}
							export class HlsMediaPlaylistSegmentIterator extends com.google.android.exoplayer2.source.chunk.BaseMediaChunkIterator {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.hls.HlsChunkSource.HlsMediaPlaylistSegmentIterator>;
								public getChunkStartTimeUs(): number;
								public getDataSpec(): com.google.android.exoplayer2.upstream.DataSpec;
								public constructor(fromIndex: number, toIndex: number);
								public constructor(playlist: com.google.android.exoplayer2.source.hls.playlist.HlsMediaPlaylist, startOfPlaylistInPeriodUs: number, chunkIndex: number);
								public reset(): void;
								public getChunkEndTimeUs(): number;
								public next(): boolean;
								public isEnded(): boolean;
							}
							export class InitializationTrackSelection extends com.google.android.exoplayer2.trackselection.BaseTrackSelection {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.hls.HlsChunkSource.InitializationTrackSelection>;
								public length(): number;
								public evaluateQueueSize(playbackPositionUs: number, queue: java.util.List<any>): number;
								public updateSelectedTrack(playbackPositionUs: number, bufferedDurationUs: number, availableDurationUs: number, queue: java.util.List<any>, mediaChunkIterators: native.Array<com.google.android.exoplayer2.source.chunk.MediaChunkIterator>): void;
								public getTrackGroup(): com.google.android.exoplayer2.source.TrackGroup;
								public getSelectedIndex(): number;
								public disable(): void;
								public getFormat(index: number): com.google.android.exoplayer2.Format;
								public enable(): void;
								public indexOf(indexInTrackGroup: number): number;
								public onDiscontinuity(): void;
								public onPlaybackSpeed(playbackSpeed: number): void;
								public getSelectedFormat(): com.google.android.exoplayer2.Format;
								public constructor(group: com.google.android.exoplayer2.source.TrackGroup, tracks: native.Array<number>);
								public getSelectionData(): any;
								public getSelectionReason(): number;
								public blacklist(index: number, exclusionDurationMs: number): boolean;
								public indexOf(format: com.google.android.exoplayer2.Format): number;
								public getSelectedIndexInTrackGroup(): number;
								public getIndexInTrackGroup(index: number): number;
								public shouldCancelChunkLoad(playbackPositionUs: number, loadingChunk: com.google.android.exoplayer2.source.chunk.Chunk, queue: java.util.List<any>): boolean;
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
				export module source {
					export module hls {
						export class HlsDataSourceFactory extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.source.hls.HlsDataSourceFactory>;
							/**
							 * Constructs a new instance of the com.google.android.exoplayer2.source.hls.HlsDataSourceFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								createDataSource(int0: number): com.google.android.exoplayer2.upstream.DataSource;
							});
							public constructor();
							public createDataSource(int0: number): com.google.android.exoplayer2.upstream.DataSource;
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
				export module source {
					export module hls {
						export class HlsExtractorFactory extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.source.hls.HlsExtractorFactory>;
							/**
							 * Constructs a new instance of the com.google.android.exoplayer2.source.hls.HlsExtractorFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								createExtractor(uri0: globalAndroid.net.Uri, format1: com.google.android.exoplayer2.Format, list2: java.util.List<com.google.android.exoplayer2.Format>, timestampAdjuster3: com.google.android.exoplayer2.util.TimestampAdjuster, map4: java.util.Map<string,java.util.List<string>>, extractorInput5: com.google.android.exoplayer2.extractor.ExtractorInput): com.google.android.exoplayer2.source.hls.HlsMediaChunkExtractor;
								<clinit>(): void;
							});
							public constructor();
							public static DEFAULT: com.google.android.exoplayer2.source.hls.HlsExtractorFactory;
							public createExtractor(uri0: globalAndroid.net.Uri, format1: com.google.android.exoplayer2.Format, list2: java.util.List<com.google.android.exoplayer2.Format>, timestampAdjuster3: com.google.android.exoplayer2.util.TimestampAdjuster, map4: java.util.Map<string,java.util.List<string>>, extractorInput5: com.google.android.exoplayer2.extractor.ExtractorInput): com.google.android.exoplayer2.source.hls.HlsMediaChunkExtractor;
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
				export module source {
					export module hls {
						export class HlsManifest extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.source.hls.HlsManifest>;
							public masterPlaylist: com.google.android.exoplayer2.source.hls.playlist.HlsMasterPlaylist;
							public mediaPlaylist: com.google.android.exoplayer2.source.hls.playlist.HlsMediaPlaylist;
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
				export module source {
					export module hls {
						export class HlsMediaChunk extends com.google.android.exoplayer2.source.chunk.MediaChunk {
							public static class: java.lang.Class<com.google.android.exoplayer2.source.hls.HlsMediaChunk>;
							public static PRIV_TIMESTAMP_FRAME_OWNER: string;
							public uid: number;
							public discontinuitySequenceNumber: number;
							public playlistUrl: globalAndroid.net.Uri;
							public shouldSpliceIn: boolean;
							public isLoadCompleted(): boolean;
							public cancelLoad(): void;
							public load(): void;
							public init(output: com.google.android.exoplayer2.source.hls.HlsSampleStreamWrapper, sampleQueueWriteIndices: com.google.common.collect.ImmutableList<java.lang.Integer>): void;
							public getFirstSampleIndex(sampleQueueIndex: number): number;
							public static createInstance(extractorFactory: com.google.android.exoplayer2.source.hls.HlsExtractorFactory, dataSource: com.google.android.exoplayer2.upstream.DataSource, format: com.google.android.exoplayer2.Format, startOfPlaylistInPeriodUs: number, mediaPlaylist: com.google.android.exoplayer2.source.hls.playlist.HlsMediaPlaylist, segmentIndexInPlaylist: number, playlistUrl: globalAndroid.net.Uri, muxedCaptionFormats: java.util.List<com.google.android.exoplayer2.Format>, trackSelectionReason: number, trackSelectionData: any, isMasterTimestampSource: boolean, timestampAdjusterProvider: com.google.android.exoplayer2.source.hls.TimestampAdjusterProvider, previousChunk: com.google.android.exoplayer2.source.hls.HlsMediaChunk, mediaSegmentKey: native.Array<number>, initSegmentKey: native.Array<number>): com.google.android.exoplayer2.source.hls.HlsMediaChunk;
							public invalidateExtractor(): void;
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
				export module source {
					export module hls {
						export class HlsMediaChunkExtractor extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.source.hls.HlsMediaChunkExtractor>;
							/**
							 * Constructs a new instance of the com.google.android.exoplayer2.source.hls.HlsMediaChunkExtractor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								init(extractorOutput0: com.google.android.exoplayer2.extractor.ExtractorOutput): void;
								read(extractorInput0: com.google.android.exoplayer2.extractor.ExtractorInput): boolean;
								isPackedAudioExtractor(): boolean;
								isReusable(): boolean;
								recreate(): com.google.android.exoplayer2.source.hls.HlsMediaChunkExtractor;
							});
							public constructor();
							public init(extractorOutput0: com.google.android.exoplayer2.extractor.ExtractorOutput): void;
							public read(extractorInput0: com.google.android.exoplayer2.extractor.ExtractorInput): boolean;
							public isPackedAudioExtractor(): boolean;
							public isReusable(): boolean;
							public recreate(): com.google.android.exoplayer2.source.hls.HlsMediaChunkExtractor;
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
				export module source {
					export module hls {
						export class HlsMediaPeriod extends java.lang.Object implements com.google.android.exoplayer2.source.MediaPeriod, com.google.android.exoplayer2.source.hls.HlsSampleStreamWrapper.Callback, com.google.android.exoplayer2.source.hls.playlist.HlsPlaylistTracker.PlaylistEventListener {
							public static class: java.lang.Class<com.google.android.exoplayer2.source.hls.HlsMediaPeriod>;
							public getTrackGroups(): com.google.android.exoplayer2.source.TrackGroupArray;
							public reevaluateBuffer(positionUs: number): void;
							public onContinueLoadingRequested(sequenceableLoader0: any): void;
							public getStreamKeys(trackSelections: java.util.List<com.google.android.exoplayer2.trackselection.TrackSelection>): java.util.List<com.google.android.exoplayer2.offline.StreamKey>;
							public seekToUs(positionUs: number): number;
							public isLoading(): boolean;
							public release(): void;
							public onPlaylistRefreshRequired(url: globalAndroid.net.Uri): void;
							public constructor(extractorFactory: com.google.android.exoplayer2.source.hls.HlsExtractorFactory, playlistTracker: com.google.android.exoplayer2.source.hls.playlist.HlsPlaylistTracker, dataSourceFactory: com.google.android.exoplayer2.source.hls.HlsDataSourceFactory, mediaTransferListener: com.google.android.exoplayer2.upstream.TransferListener, drmSessionManager: com.google.android.exoplayer2.drm.DrmSessionManager, drmEventDispatcher: com.google.android.exoplayer2.drm.DrmSessionEventListener.EventDispatcher, loadErrorHandlingPolicy: com.google.android.exoplayer2.upstream.LoadErrorHandlingPolicy, eventDispatcher: com.google.android.exoplayer2.source.MediaSourceEventListener.EventDispatcher, allocator: com.google.android.exoplayer2.upstream.Allocator, compositeSequenceableLoaderFactory: com.google.android.exoplayer2.source.CompositeSequenceableLoaderFactory, allowChunklessPreparation: boolean, metadataType: number, useSessionKeys: boolean);
							public selectTracks(selections: native.Array<com.google.android.exoplayer2.trackselection.TrackSelection>, mayRetainStreamFlags: native.Array<boolean>, streams: native.Array<com.google.android.exoplayer2.source.SampleStream>, streamResetFlags: native.Array<boolean>, positionUs: number): number;
							public onPlaylistChanged(): void;
							public maybeThrowPrepareError(): void;
							public getBufferedPositionUs(): number;
							public discardBuffer(positionUs: number, toKeyframe: boolean): void;
							public getNextLoadPositionUs(): number;
							public continueLoading(positionUs: number): boolean;
							public onContinueLoadingRequested(sampleStreamWrapper: com.google.android.exoplayer2.source.hls.HlsSampleStreamWrapper): void;
							public getAdjustedSeekPositionUs(positionUs: number, seekParameters: com.google.android.exoplayer2.SeekParameters): number;
							public onPlaylistError(url: globalAndroid.net.Uri, exclusionDurationMs: number): boolean;
							public readDiscontinuity(): number;
							public onPrepared(): void;
							public prepare(callback: com.google.android.exoplayer2.source.MediaPeriod.Callback, positionUs: number): void;
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
				export module source {
					export module hls {
						export class HlsMediaSource extends com.google.android.exoplayer2.source.BaseMediaSource implements com.google.android.exoplayer2.source.hls.playlist.HlsPlaylistTracker.PrimaryPlaylistListener {
							public static class: java.lang.Class<com.google.android.exoplayer2.source.hls.HlsMediaSource>;
							public static METADATA_TYPE_ID3: number;
							public static METADATA_TYPE_EMSG: number;
							public addEventListener(handler: globalAndroid.os.Handler, eventListener: com.google.android.exoplayer2.source.MediaSourceEventListener): void;
							public getMediaItem(): com.google.android.exoplayer2.MediaItem;
							public enable(caller: com.google.android.exoplayer2.source.MediaSource.MediaSourceCaller): void;
							public releasePeriod(mediaPeriod: com.google.android.exoplayer2.source.MediaPeriod): void;
							public releaseSourceInternal(): void;
							public prepareSourceInternal(transferListener0: com.google.android.exoplayer2.upstream.TransferListener): void;
							/** @deprecated */
							public getTag(): any;
							public maybeThrowSourceInfoRefreshError(): void;
							public prepareSource(caller: com.google.android.exoplayer2.source.MediaSource.MediaSourceCaller, mediaTransferListener: com.google.android.exoplayer2.upstream.TransferListener): void;
							public isSingleWindow(): boolean;
							public releaseSource(caller: com.google.android.exoplayer2.source.MediaSource.MediaSourceCaller): void;
							public getInitialTimeline(): com.google.android.exoplayer2.Timeline;
							public disable(caller: com.google.android.exoplayer2.source.MediaSource.MediaSourceCaller): void;
							public addDrmEventListener(handler: globalAndroid.os.Handler, eventListener: com.google.android.exoplayer2.drm.DrmSessionEventListener): void;
							public removeDrmEventListener(eventListener: com.google.android.exoplayer2.drm.DrmSessionEventListener): void;
							public onPrimaryPlaylistRefreshed(playlist: com.google.android.exoplayer2.source.hls.playlist.HlsMediaPlaylist): void;
							public removeEventListener(eventListener: com.google.android.exoplayer2.source.MediaSourceEventListener): void;
							public prepareSourceInternal(mediaTransferListener: com.google.android.exoplayer2.upstream.TransferListener): void;
							public createPeriod(id: com.google.android.exoplayer2.source.MediaSource.MediaPeriodId, allocator: com.google.android.exoplayer2.upstream.Allocator, startPositionUs: number): com.google.android.exoplayer2.source.MediaPeriod;
						}
						export module HlsMediaSource {
							export class Factory extends java.lang.Object implements com.google.android.exoplayer2.source.MediaSourceFactory {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.hls.HlsMediaSource.Factory>;
								public getSupportedTypes(): native.Array<number>;
								public setPlaylistParserFactory(playlistParserFactory: com.google.android.exoplayer2.source.hls.playlist.HlsPlaylistParserFactory): com.google.android.exoplayer2.source.hls.HlsMediaSource.Factory;
								/** @deprecated */
								public createMediaSource(uri: globalAndroid.net.Uri): com.google.android.exoplayer2.source.hls.HlsMediaSource;
								public setPlaylistTrackerFactory(playlistTrackerFactory: com.google.android.exoplayer2.source.hls.playlist.HlsPlaylistTracker.Factory): com.google.android.exoplayer2.source.hls.HlsMediaSource.Factory;
								/** @deprecated */
								public createMediaSource(uri: globalAndroid.net.Uri): com.google.android.exoplayer2.source.MediaSource;
								public constructor(hlsDataSourceFactory: com.google.android.exoplayer2.source.hls.HlsDataSourceFactory);
								public createMediaSource(mediaItem0: com.google.android.exoplayer2.MediaItem): com.google.android.exoplayer2.source.MediaSource;
								/** @deprecated */
								public setTag(tag: any): com.google.android.exoplayer2.source.hls.HlsMediaSource.Factory;
								public createMediaSource(mediaItem: com.google.android.exoplayer2.MediaItem): com.google.android.exoplayer2.source.hls.HlsMediaSource;
								public setExtractorFactory(extractorFactory: com.google.android.exoplayer2.source.hls.HlsExtractorFactory): com.google.android.exoplayer2.source.hls.HlsMediaSource.Factory;
								public setDrmHttpDataSourceFactory(drmHttpDataSourceFactory: com.google.android.exoplayer2.upstream.HttpDataSource.Factory): com.google.android.exoplayer2.source.hls.HlsMediaSource.Factory;
								public setDrmUserAgent(userAgent: string): com.google.android.exoplayer2.source.MediaSourceFactory;
								/** @deprecated */
								public setStreamKeys(streamKeys: java.util.List<com.google.android.exoplayer2.offline.StreamKey>): com.google.android.exoplayer2.source.MediaSourceFactory;
								public setMetadataType(metadataType: number): com.google.android.exoplayer2.source.hls.HlsMediaSource.Factory;
								public setDrmSessionManager(drmSessionManager: com.google.android.exoplayer2.drm.DrmSessionManager): com.google.android.exoplayer2.source.hls.HlsMediaSource.Factory;
								/** @deprecated */
								public setMinLoadableRetryCount(minLoadableRetryCount: number): com.google.android.exoplayer2.source.hls.HlsMediaSource.Factory;
								public setLoadErrorHandlingPolicy(loadErrorHandlingPolicy0: com.google.android.exoplayer2.upstream.LoadErrorHandlingPolicy): com.google.android.exoplayer2.source.MediaSourceFactory;
								/** @deprecated */
								public setStreamKeys(streamKeys: java.util.List<com.google.android.exoplayer2.offline.StreamKey>): com.google.android.exoplayer2.source.hls.HlsMediaSource.Factory;
								/** @deprecated */
								public createMediaSource(playlistUri: globalAndroid.net.Uri, eventHandler: globalAndroid.os.Handler, eventListener: com.google.android.exoplayer2.source.MediaSourceEventListener): com.google.android.exoplayer2.source.hls.HlsMediaSource;
								public constructor(dataSourceFactory: com.google.android.exoplayer2.upstream.DataSource.Factory);
								public setLoadErrorHandlingPolicy(loadErrorHandlingPolicy: com.google.android.exoplayer2.upstream.LoadErrorHandlingPolicy): com.google.android.exoplayer2.source.hls.HlsMediaSource.Factory;
								public setUseSessionKeys(useSessionKeys: boolean): com.google.android.exoplayer2.source.hls.HlsMediaSource.Factory;
								public setDrmHttpDataSourceFactory(factory0: com.google.android.exoplayer2.upstream.HttpDataSource.Factory): com.google.android.exoplayer2.source.MediaSourceFactory;
								public setAllowChunklessPreparation(allowChunklessPreparation: boolean): com.google.android.exoplayer2.source.hls.HlsMediaSource.Factory;
								public setDrmSessionManager(drmSessionManager0: com.google.android.exoplayer2.drm.DrmSessionManager): com.google.android.exoplayer2.source.MediaSourceFactory;
								public setCompositeSequenceableLoaderFactory(compositeSequenceableLoaderFactory: com.google.android.exoplayer2.source.CompositeSequenceableLoaderFactory): com.google.android.exoplayer2.source.hls.HlsMediaSource.Factory;
							}
							export class MetadataType extends java.lang.Object implements java.lang.annotation.Annotation {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.hls.HlsMediaSource.MetadataType>;
								/**
								 * Constructs a new instance of the com.google.android.exoplayer2.source.hls.HlsMediaSource$MetadataType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
				export module source {
					export module hls {
						export class HlsSampleStream extends java.lang.Object implements com.google.android.exoplayer2.source.SampleStream {
							public static class: java.lang.Class<com.google.android.exoplayer2.source.hls.HlsSampleStream>;
							public skipData(positionUs: number): number;
							public isReady(): boolean;
							public constructor(sampleStreamWrapper: com.google.android.exoplayer2.source.hls.HlsSampleStreamWrapper, trackGroupIndex: number);
							public readData(formatHolder: com.google.android.exoplayer2.FormatHolder, buffer: com.google.android.exoplayer2.decoder.DecoderInputBuffer, requireFormat: boolean): number;
							public maybeThrowError(): void;
							public unbindSampleQueue(): void;
							public bindSampleQueue(): void;
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
				export module source {
					export module hls {
						export class HlsSampleStreamWrapper extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.source.hls.HlsSampleStreamWrapper>;
							public static SAMPLE_QUEUE_INDEX_PENDING: number;
							public static SAMPLE_QUEUE_INDEX_NO_MAPPING_FATAL: number;
							public static SAMPLE_QUEUE_INDEX_NO_MAPPING_NON_FATAL: number;
							public getTrackGroups(): com.google.android.exoplayer2.source.TrackGroupArray;
							public onLoadCompleted(loadable0: any, long1: number, long2: number): void;
							public onNewExtractor(): void;
							public seekToUs(positionUs: number, forceReset: boolean): boolean;
							public maybeThrowPrepareError(): void;
							public unbindSampleQueue(trackGroupIndex: number): void;
							public discardBuffer(positionUs: number, toKeyframe: boolean): void;
							public maybeThrowError(sampleQueueIndex: number): void;
							public skipData(sampleQueueIndex: number, positionUs: number): number;
							public setIsTimestampMaster(isTimestampMaster: boolean): void;
							public readData(sampleQueueIndex: number, formatHolder: com.google.android.exoplayer2.FormatHolder, buffer: com.google.android.exoplayer2.decoder.DecoderInputBuffer, requireFormat: boolean): number;
							public continueLoading(positionUs: number): boolean;
							public onLoadCompleted(loadable: com.google.android.exoplayer2.source.chunk.Chunk, elapsedRealtimeMs: number, loadDurationMs: number): void;
							public selectTracks(selections: native.Array<com.google.android.exoplayer2.trackselection.TrackSelection>, mayRetainStreamFlags: native.Array<boolean>, streams: native.Array<com.google.android.exoplayer2.source.SampleStream>, streamResetFlags: native.Array<boolean>, positionUs: number, forceReset: boolean): boolean;
							public continuePreparing(): void;
							public onUpstreamFormatChanged(format: com.google.android.exoplayer2.Format): void;
							public reevaluateBuffer(positionUs: number): void;
							public isReady(sampleQueueIndex: number): boolean;
							public isLoading(): boolean;
							public onLoadError(loadable: com.google.android.exoplayer2.source.chunk.Chunk, elapsedRealtimeMs: number, loadDurationMs: number, error: java.io.IOException, errorCount: number): com.google.android.exoplayer2.upstream.Loader.LoadErrorAction;
							public bindSampleQueueToSampleStream(trackGroupIndex: number): number;
							public release(): void;
							public getPrimaryTrackGroupIndex(): number;
							public track(id: number, type: number): com.google.android.exoplayer2.extractor.TrackOutput;
							public setSampleOffsetUs(sampleOffsetUs: number): void;
							public endTracks(): void;
							public getBufferedPositionUs(): number;
							public getNextLoadPositionUs(): number;
							public constructor(trackType: number, callback: com.google.android.exoplayer2.source.hls.HlsSampleStreamWrapper.Callback, chunkSource: com.google.android.exoplayer2.source.hls.HlsChunkSource, overridingDrmInitData: java.util.Map<string,com.google.android.exoplayer2.drm.DrmInitData>, allocator: com.google.android.exoplayer2.upstream.Allocator, positionUs: number, muxedAudioFormat: com.google.android.exoplayer2.Format, drmSessionManager: com.google.android.exoplayer2.drm.DrmSessionManager, drmEventDispatcher: com.google.android.exoplayer2.drm.DrmSessionEventListener.EventDispatcher, loadErrorHandlingPolicy: com.google.android.exoplayer2.upstream.LoadErrorHandlingPolicy, mediaSourceEventDispatcher: com.google.android.exoplayer2.source.MediaSourceEventListener.EventDispatcher, metadataType: number);
							public onLoadCanceled(loadable: com.google.android.exoplayer2.source.chunk.Chunk, elapsedRealtimeMs: number, loadDurationMs: number, released: boolean): void;
							public onLoaderReleased(): void;
							public onLoadCanceled(loadable0: any, long1: number, long2: number, boolean3: boolean): void;
							public onLoadError(loadable0: any, long1: number, long2: number, iOException3: java.io.IOException, int4: number): com.google.android.exoplayer2.upstream.Loader.LoadErrorAction;
							public prepareWithMasterPlaylistInfo(trackGroups: native.Array<com.google.android.exoplayer2.source.TrackGroup>, primaryTrackGroupIndex: number, optionalTrackGroupsIndices: native.Array<number>): void;
							public maybeThrowError(): void;
							public setDrmInitData(drmInitData: com.google.android.exoplayer2.drm.DrmInitData): void;
							public onPlaylistError(playlistUrl: globalAndroid.net.Uri, exclusionDurationMs: number): boolean;
							public seekMap(seekMap: com.google.android.exoplayer2.extractor.SeekMap): void;
						}
						export module HlsSampleStreamWrapper {
							export class Callback extends com.google.android.exoplayer2.source.SequenceableLoader.Callback<com.google.android.exoplayer2.source.hls.HlsSampleStreamWrapper> {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.hls.HlsSampleStreamWrapper.Callback>;
								/**
								 * Constructs a new instance of the com.google.android.exoplayer2.source.hls.HlsSampleStreamWrapper$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onPrepared(): void;
									onPlaylistRefreshRequired(uri0: globalAndroid.net.Uri): void;
									onContinueLoadingRequested(sequenceableLoader0: any): void;
								});
								public constructor();
								public onContinueLoadingRequested(sequenceableLoader0: any): void;
								public onPrepared(): void;
								public onPlaylistRefreshRequired(uri0: globalAndroid.net.Uri): void;
							}
							export class EmsgUnwrappingTrackOutput extends java.lang.Object implements com.google.android.exoplayer2.extractor.TrackOutput {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.hls.HlsSampleStreamWrapper.EmsgUnwrappingTrackOutput>;
								public sampleMetadata(timeUs: number, flags: number, size: number, offset: number, cryptoData: com.google.android.exoplayer2.extractor.TrackOutput.CryptoData): void;
								public constructor(delegate: com.google.android.exoplayer2.extractor.TrackOutput, metadataType: number);
								public sampleData(input: com.google.android.exoplayer2.upstream.DataReader, length: number, allowEndOfInput: boolean): number;
								public sampleData(buffer: com.google.android.exoplayer2.util.ParsableByteArray, length: number, sampleDataPart: number): void;
								public format(format: com.google.android.exoplayer2.Format): void;
								public sampleData(input: com.google.android.exoplayer2.upstream.DataReader, length: number, allowEndOfInput: boolean, sampleDataPart: number): number;
								public sampleData(data: com.google.android.exoplayer2.util.ParsableByteArray, length: number): void;
							}
							export class HlsSampleQueue extends com.google.android.exoplayer2.source.SampleQueue {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.hls.HlsSampleStreamWrapper.HlsSampleQueue>;
								public setDrmInitData(drmInitData: com.google.android.exoplayer2.drm.DrmInitData): void;
								public sampleMetadata(timeUs: number, flags: number, size: number, offset: number, cryptoData: com.google.android.exoplayer2.extractor.TrackOutput.CryptoData): void;
								public sampleData(input: com.google.android.exoplayer2.upstream.DataReader, length: number, allowEndOfInput: boolean): number;
								public sampleData(buffer: com.google.android.exoplayer2.util.ParsableByteArray, length: number, sampleDataPart: number): void;
								public getAdjustedUpstreamFormat(format: com.google.android.exoplayer2.Format): com.google.android.exoplayer2.Format;
								public setSourceChunk(chunk: com.google.android.exoplayer2.source.hls.HlsMediaChunk): void;
								public format(unadjustedUpstreamFormat: com.google.android.exoplayer2.Format): void;
								public sampleData(input: com.google.android.exoplayer2.upstream.DataReader, length: number, allowEndOfInput: boolean, sampleDataPart: number): number;
								public sampleData(data: com.google.android.exoplayer2.util.ParsableByteArray, length: number): void;
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
				export module source {
					export module hls {
						export class HlsTrackMetadataEntry extends java.lang.Object implements com.google.android.exoplayer2.metadata.Metadata.Entry {
							public static class: java.lang.Class<com.google.android.exoplayer2.source.hls.HlsTrackMetadataEntry>;
							public groupId: string;
							public name: string;
							public variantInfos: java.util.List<com.google.android.exoplayer2.source.hls.HlsTrackMetadataEntry.VariantInfo>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.exoplayer2.source.hls.HlsTrackMetadataEntry>;
							public constructor(groupId: string, name: string, variantInfos: java.util.List<com.google.android.exoplayer2.source.hls.HlsTrackMetadataEntry.VariantInfo>);
							public getWrappedMetadataFormat(): com.google.android.exoplayer2.Format;
							public hashCode(): number;
							public equals(other: any): boolean;
							public describeContents(): number;
							public writeToParcel(dest: globalAndroid.os.Parcel, flags: number): void;
							public getWrappedMetadataBytes(): native.Array<number>;
							public equals(obj: any): boolean;
							public toString(): string;
						}
						export module HlsTrackMetadataEntry {
							export class VariantInfo extends java.lang.Object implements globalAndroid.os.Parcelable {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.hls.HlsTrackMetadataEntry.VariantInfo>;
								public averageBitrate: number;
								public peakBitrate: number;
								public videoGroupId: string;
								public audioGroupId: string;
								public subtitleGroupId: string;
								public captionGroupId: string;
								public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.exoplayer2.source.hls.HlsTrackMetadataEntry.VariantInfo>;
								public describeContents(): number;
								public equals(obj: any): boolean;
								public writeToParcel(dest: globalAndroid.os.Parcel, flags: number): void;
								public hashCode(): number;
								public equals(other: any): boolean;
								public constructor(averageBitrate: number, peakBitrate: number, videoGroupId: string, audioGroupId: string, subtitleGroupId: string, captionGroupId: string);
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
				export module source {
					export module hls {
						export class SampleQueueMappingException extends java.io.IOException {
							public static class: java.lang.Class<com.google.android.exoplayer2.source.hls.SampleQueueMappingException>;
							public constructor();
							public constructor(message: string, cause: java.lang.Throwable);
							public constructor(cause: java.lang.Throwable);
							public constructor(message: string);
							public constructor(mimeType: string);
							public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
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
				export module source {
					export module hls {
						export class TimestampAdjusterProvider extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.source.hls.TimestampAdjusterProvider>;
							public constructor();
							public getAdjuster(discontinuitySequence: number): com.google.android.exoplayer2.util.TimestampAdjuster;
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
				export module source {
					export module hls {
						export class UnexpectedSampleTimestampException extends java.io.IOException {
							public static class: java.lang.Class<com.google.android.exoplayer2.source.hls.UnexpectedSampleTimestampException>;
							public mediaChunk: com.google.android.exoplayer2.source.chunk.MediaChunk;
							public lastAcceptedSampleTimeUs: number;
							public rejectedSampleTimeUs: number;
							public constructor();
							public constructor(message: string, cause: java.lang.Throwable);
							public constructor(cause: java.lang.Throwable);
							public constructor(message: string);
							public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
							public constructor(mediaChunk: com.google.android.exoplayer2.source.chunk.MediaChunk, lastAcceptedSampleTimeUs: number, rejectedSampleTimeUs: number);
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
				export module source {
					export module hls {
						export class WebvttExtractor extends java.lang.Object implements com.google.android.exoplayer2.extractor.Extractor {
							public static class: java.lang.Class<com.google.android.exoplayer2.source.hls.WebvttExtractor>;
							public sniff(input: com.google.android.exoplayer2.extractor.ExtractorInput): boolean;
							public constructor(language: string, timestampAdjuster: com.google.android.exoplayer2.util.TimestampAdjuster);
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
				export module source {
					export module hls {
						export module offline {
							export class HlsDownloader extends com.google.android.exoplayer2.offline.SegmentDownloader<com.google.android.exoplayer2.source.hls.playlist.HlsPlaylist> {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.hls.offline.HlsDownloader>;
								public constructor(mediaItem: com.google.android.exoplayer2.MediaItem, cacheDataSourceFactory: com.google.android.exoplayer2.upstream.cache.CacheDataSource.Factory);
								/** @deprecated */
								public constructor(playlistUri: globalAndroid.net.Uri, streamKeys: java.util.List<com.google.android.exoplayer2.offline.StreamKey>, cacheDataSourceFactory: com.google.android.exoplayer2.upstream.cache.CacheDataSource.Factory, executor: java.util.concurrent.Executor);
								public constructor(mediaItem: com.google.android.exoplayer2.MediaItem, cacheDataSourceFactory: com.google.android.exoplayer2.upstream.cache.CacheDataSource.Factory, executor: java.util.concurrent.Executor);
								public cancel(): void;
								public constructor(mediaItem: com.google.android.exoplayer2.MediaItem, manifestParser: com.google.android.exoplayer2.upstream.ParsingLoadable.Parser<com.google.android.exoplayer2.source.hls.playlist.HlsPlaylist>, cacheDataSourceFactory: com.google.android.exoplayer2.upstream.cache.CacheDataSource.Factory, executor: java.util.concurrent.Executor);
								public getSegments(dataSource: com.google.android.exoplayer2.upstream.DataSource, playlist: com.google.android.exoplayer2.source.hls.playlist.HlsPlaylist, removing: boolean): java.util.List<com.google.android.exoplayer2.offline.SegmentDownloader.Segment>;
								public constructor(mediaItem: com.google.android.exoplayer2.MediaItem, manifestParser: com.google.android.exoplayer2.upstream.ParsingLoadable.Parser<any>, cacheDataSourceFactory: com.google.android.exoplayer2.upstream.cache.CacheDataSource.Factory, executor: java.util.concurrent.Executor);
								public getSegments(dataSource0: com.google.android.exoplayer2.upstream.DataSource, filterableManifest1: any, boolean2: boolean): java.util.List<com.google.android.exoplayer2.offline.SegmentDownloader.Segment>;
								public download(progressListener: com.google.android.exoplayer2.offline.Downloader.ProgressListener): void;
								public remove(): void;
								/** @deprecated */
								public constructor(playlistUri: globalAndroid.net.Uri, streamKeys: java.util.List<com.google.android.exoplayer2.offline.StreamKey>, cacheDataSourceFactory: com.google.android.exoplayer2.upstream.cache.CacheDataSource.Factory);
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
				export module source {
					export module hls {
						export module playlist {
							export class DefaultHlsPlaylistParserFactory extends java.lang.Object implements com.google.android.exoplayer2.source.hls.playlist.HlsPlaylistParserFactory {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.hls.playlist.DefaultHlsPlaylistParserFactory>;
								public createPlaylistParser(): com.google.android.exoplayer2.upstream.ParsingLoadable.Parser<com.google.android.exoplayer2.source.hls.playlist.HlsPlaylist>;
								public createPlaylistParser(masterPlaylist: com.google.android.exoplayer2.source.hls.playlist.HlsMasterPlaylist): com.google.android.exoplayer2.upstream.ParsingLoadable.Parser<com.google.android.exoplayer2.source.hls.playlist.HlsPlaylist>;
								public constructor();
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
				export module source {
					export module hls {
						export module playlist {
							export class DefaultHlsPlaylistTracker extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.hls.playlist.DefaultHlsPlaylistTracker>;
								public static FACTORY: com.google.android.exoplayer2.source.hls.playlist.HlsPlaylistTracker.Factory;
								public static DEFAULT_PLAYLIST_STUCK_TARGET_DURATION_COEFFICIENT: number;
								public constructor(dataSourceFactory: com.google.android.exoplayer2.source.hls.HlsDataSourceFactory, loadErrorHandlingPolicy: com.google.android.exoplayer2.upstream.LoadErrorHandlingPolicy, playlistParserFactory: com.google.android.exoplayer2.source.hls.playlist.HlsPlaylistParserFactory);
								public getPlaylistSnapshot(url: globalAndroid.net.Uri, isForPlayback: boolean): com.google.android.exoplayer2.source.hls.playlist.HlsMediaPlaylist;
								public onLoadError(loadable: com.google.android.exoplayer2.upstream.ParsingLoadable<com.google.android.exoplayer2.source.hls.playlist.HlsPlaylist>, elapsedRealtimeMs: number, loadDurationMs: number, error: java.io.IOException, errorCount: number): com.google.android.exoplayer2.upstream.Loader.LoadErrorAction;
								public onLoadCanceled(loadable0: any, long1: number, long2: number, boolean3: boolean): void;
								public refreshPlaylist(url: globalAndroid.net.Uri): void;
								public getMasterPlaylist(): com.google.android.exoplayer2.source.hls.playlist.HlsMasterPlaylist;
								public isSnapshotValid(url: globalAndroid.net.Uri): boolean;
								public start(initialPlaylistUri: globalAndroid.net.Uri, eventDispatcher: com.google.android.exoplayer2.source.MediaSourceEventListener.EventDispatcher, primaryPlaylistListener: com.google.android.exoplayer2.source.hls.playlist.HlsPlaylistTracker.PrimaryPlaylistListener): void;
								public maybeThrowPrimaryPlaylistRefreshError(): void;
								public getInitialStartTimeUs(): number;
								public maybeThrowPlaylistRefreshError(url: globalAndroid.net.Uri): void;
								public onLoadCanceled(loadable: com.google.android.exoplayer2.upstream.ParsingLoadable<com.google.android.exoplayer2.source.hls.playlist.HlsPlaylist>, elapsedRealtimeMs: number, loadDurationMs: number, released: boolean): void;
								public addListener(listener: com.google.android.exoplayer2.source.hls.playlist.HlsPlaylistTracker.PlaylistEventListener): void;
								public onLoadCompleted(loadable: com.google.android.exoplayer2.upstream.ParsingLoadable<com.google.android.exoplayer2.source.hls.playlist.HlsPlaylist>, elapsedRealtimeMs: number, loadDurationMs: number): void;
								public constructor(dataSourceFactory: com.google.android.exoplayer2.source.hls.HlsDataSourceFactory, loadErrorHandlingPolicy: com.google.android.exoplayer2.upstream.LoadErrorHandlingPolicy, playlistParserFactory: com.google.android.exoplayer2.source.hls.playlist.HlsPlaylistParserFactory, playlistStuckTargetDurationCoefficient: number);
								public isLive(): boolean;
								public stop(): void;
								public removeListener(listener: com.google.android.exoplayer2.source.hls.playlist.HlsPlaylistTracker.PlaylistEventListener): void;
								public onLoadError(loadable0: any, long1: number, long2: number, iOException3: java.io.IOException, int4: number): com.google.android.exoplayer2.upstream.Loader.LoadErrorAction;
								public onLoadCompleted(loadable0: any, long1: number, long2: number): void;
							}
							export module DefaultHlsPlaylistTracker {
								export class MediaPlaylistBundle extends java.lang.Object {
									public static class: java.lang.Class<com.google.android.exoplayer2.source.hls.playlist.DefaultHlsPlaylistTracker.MediaPlaylistBundle>;
									public release(): void;
									public run(): void;
									public onLoadCompleted(loadable0: any, long1: number, long2: number): void;
									public maybeThrowPlaylistRefreshError(): void;
									public onLoadError(loadable: com.google.android.exoplayer2.upstream.ParsingLoadable<com.google.android.exoplayer2.source.hls.playlist.HlsPlaylist>, elapsedRealtimeMs: number, loadDurationMs: number, error: java.io.IOException, errorCount: number): com.google.android.exoplayer2.upstream.Loader.LoadErrorAction;
									public onLoadCanceled(loadable0: any, long1: number, long2: number, boolean3: boolean): void;
									public constructor(param0: com.google.android.exoplayer2.source.hls.playlist.DefaultHlsPlaylistTracker, playlistUrl: globalAndroid.net.Uri);
									public onLoadError(loadable0: any, long1: number, long2: number, iOException3: java.io.IOException, int4: number): com.google.android.exoplayer2.upstream.Loader.LoadErrorAction;
									public onLoadCompleted(loadable: com.google.android.exoplayer2.upstream.ParsingLoadable<com.google.android.exoplayer2.source.hls.playlist.HlsPlaylist>, elapsedRealtimeMs: number, loadDurationMs: number): void;
									public getPlaylistSnapshot(): com.google.android.exoplayer2.source.hls.playlist.HlsMediaPlaylist;
									public isSnapshotValid(): boolean;
									public loadPlaylist(): void;
									public onLoadCanceled(loadable: com.google.android.exoplayer2.upstream.ParsingLoadable<com.google.android.exoplayer2.source.hls.playlist.HlsPlaylist>, elapsedRealtimeMs: number, loadDurationMs: number, released: boolean): void;
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
				export module source {
					export module hls {
						export module playlist {
							export class FilteringHlsPlaylistParserFactory extends java.lang.Object implements com.google.android.exoplayer2.source.hls.playlist.HlsPlaylistParserFactory {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.hls.playlist.FilteringHlsPlaylistParserFactory>;
								public createPlaylistParser(): com.google.android.exoplayer2.upstream.ParsingLoadable.Parser<com.google.android.exoplayer2.source.hls.playlist.HlsPlaylist>;
								public createPlaylistParser(masterPlaylist: com.google.android.exoplayer2.source.hls.playlist.HlsMasterPlaylist): com.google.android.exoplayer2.upstream.ParsingLoadable.Parser<com.google.android.exoplayer2.source.hls.playlist.HlsPlaylist>;
								public constructor(hlsPlaylistParserFactory: com.google.android.exoplayer2.source.hls.playlist.HlsPlaylistParserFactory, streamKeys: java.util.List<com.google.android.exoplayer2.offline.StreamKey>);
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
				export module source {
					export module hls {
						export module playlist {
							export class HlsMasterPlaylist extends com.google.android.exoplayer2.source.hls.playlist.HlsPlaylist {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.hls.playlist.HlsMasterPlaylist>;
								public static EMPTY: com.google.android.exoplayer2.source.hls.playlist.HlsMasterPlaylist;
								public static GROUP_INDEX_VARIANT: number;
								public static GROUP_INDEX_AUDIO: number;
								public static GROUP_INDEX_SUBTITLE: number;
								public mediaPlaylistUrls: java.util.List<globalAndroid.net.Uri>;
								public variants: java.util.List<com.google.android.exoplayer2.source.hls.playlist.HlsMasterPlaylist.Variant>;
								public videos: java.util.List<com.google.android.exoplayer2.source.hls.playlist.HlsMasterPlaylist.Rendition>;
								public audios: java.util.List<com.google.android.exoplayer2.source.hls.playlist.HlsMasterPlaylist.Rendition>;
								public subtitles: java.util.List<com.google.android.exoplayer2.source.hls.playlist.HlsMasterPlaylist.Rendition>;
								public closedCaptions: java.util.List<com.google.android.exoplayer2.source.hls.playlist.HlsMasterPlaylist.Rendition>;
								public muxedAudioFormat: com.google.android.exoplayer2.Format;
								public muxedCaptionFormats: java.util.List<com.google.android.exoplayer2.Format>;
								public variableDefinitions: java.util.Map<string,string>;
								public sessionKeyDrmInitData: java.util.List<com.google.android.exoplayer2.drm.DrmInitData>;
								public static createSingleVariantMasterPlaylist(variantUrl: string): com.google.android.exoplayer2.source.hls.playlist.HlsMasterPlaylist;
								public constructor(baseUri: string, tags: java.util.List<string>, hasIndependentSegments: boolean);
								public copy(streamKeys: java.util.List<com.google.android.exoplayer2.offline.StreamKey>): com.google.android.exoplayer2.source.hls.playlist.HlsMasterPlaylist;
								public constructor(baseUri: string, tags: java.util.List<string>, variants: java.util.List<com.google.android.exoplayer2.source.hls.playlist.HlsMasterPlaylist.Variant>, videos: java.util.List<com.google.android.exoplayer2.source.hls.playlist.HlsMasterPlaylist.Rendition>, audios: java.util.List<com.google.android.exoplayer2.source.hls.playlist.HlsMasterPlaylist.Rendition>, subtitles: java.util.List<com.google.android.exoplayer2.source.hls.playlist.HlsMasterPlaylist.Rendition>, closedCaptions: java.util.List<com.google.android.exoplayer2.source.hls.playlist.HlsMasterPlaylist.Rendition>, muxedAudioFormat: com.google.android.exoplayer2.Format, muxedCaptionFormats: java.util.List<com.google.android.exoplayer2.Format>, hasIndependentSegments: boolean, variableDefinitions: java.util.Map<string,string>, sessionKeyDrmInitData: java.util.List<com.google.android.exoplayer2.drm.DrmInitData>);
								public copy(list0: java.util.List<com.google.android.exoplayer2.offline.StreamKey>): any;
							}
							export module HlsMasterPlaylist {
								export class Rendition extends java.lang.Object {
									public static class: java.lang.Class<com.google.android.exoplayer2.source.hls.playlist.HlsMasterPlaylist.Rendition>;
									public url: globalAndroid.net.Uri;
									public format: com.google.android.exoplayer2.Format;
									public groupId: string;
									public name: string;
									public constructor(url: globalAndroid.net.Uri, format: com.google.android.exoplayer2.Format, groupId: string, name: string);
								}
								export class Variant extends java.lang.Object {
									public static class: java.lang.Class<com.google.android.exoplayer2.source.hls.playlist.HlsMasterPlaylist.Variant>;
									public url: globalAndroid.net.Uri;
									public format: com.google.android.exoplayer2.Format;
									public videoGroupId: string;
									public audioGroupId: string;
									public subtitleGroupId: string;
									public captionGroupId: string;
									public copyWithFormat(format: com.google.android.exoplayer2.Format): com.google.android.exoplayer2.source.hls.playlist.HlsMasterPlaylist.Variant;
									public static createMediaPlaylistVariantUrl(url: globalAndroid.net.Uri): com.google.android.exoplayer2.source.hls.playlist.HlsMasterPlaylist.Variant;
									public constructor(url: globalAndroid.net.Uri, format: com.google.android.exoplayer2.Format, videoGroupId: string, audioGroupId: string, subtitleGroupId: string, captionGroupId: string);
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
				export module source {
					export module hls {
						export module playlist {
							export class HlsMediaPlaylist extends com.google.android.exoplayer2.source.hls.playlist.HlsPlaylist {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.hls.playlist.HlsMediaPlaylist>;
								public static PLAYLIST_TYPE_UNKNOWN: number;
								public static PLAYLIST_TYPE_VOD: number;
								public static PLAYLIST_TYPE_EVENT: number;
								public playlistType: number;
								public startOffsetUs: number;
								public startTimeUs: number;
								public hasDiscontinuitySequence: boolean;
								public discontinuitySequence: number;
								public mediaSequence: number;
								public version: number;
								public targetDurationUs: number;
								public hasEndTag: boolean;
								public hasProgramDateTime: boolean;
								public protectionSchemes: com.google.android.exoplayer2.drm.DrmInitData;
								public segments: java.util.List<com.google.android.exoplayer2.source.hls.playlist.HlsMediaPlaylist.Segment>;
								public durationUs: number;
								public constructor(playlistType: number, baseUri: string, tags: java.util.List<string>, startOffsetUs: number, startTimeUs: number, hasDiscontinuitySequence: boolean, discontinuitySequence: number, mediaSequence: number, version: number, targetDurationUs: number, hasIndependentSegments: boolean, hasEndTag: boolean, hasProgramDateTime: boolean, protectionSchemes: com.google.android.exoplayer2.drm.DrmInitData, segments: java.util.List<com.google.android.exoplayer2.source.hls.playlist.HlsMediaPlaylist.Segment>);
								public copyWithEndTag(): com.google.android.exoplayer2.source.hls.playlist.HlsMediaPlaylist;
								public copy(streamKeys: java.util.List<com.google.android.exoplayer2.offline.StreamKey>): com.google.android.exoplayer2.source.hls.playlist.HlsMediaPlaylist;
								public copyWith(startTimeUs: number, discontinuitySequence: number): com.google.android.exoplayer2.source.hls.playlist.HlsMediaPlaylist;
								public isNewerThan(other: com.google.android.exoplayer2.source.hls.playlist.HlsMediaPlaylist): boolean;
								public constructor(baseUri: string, tags: java.util.List<string>, hasIndependentSegments: boolean);
								public getEndTimeUs(): number;
								public copy(list0: java.util.List<com.google.android.exoplayer2.offline.StreamKey>): any;
							}
							export module HlsMediaPlaylist {
								export class PlaylistType extends java.lang.Object implements java.lang.annotation.Annotation {
									public static class: java.lang.Class<com.google.android.exoplayer2.source.hls.playlist.HlsMediaPlaylist.PlaylistType>;
									/**
									 * Constructs a new instance of the com.google.android.exoplayer2.source.hls.playlist.HlsMediaPlaylist$PlaylistType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
								export class Segment extends java.lang.Comparable<java.lang.Long> {
									public static class: java.lang.Class<com.google.android.exoplayer2.source.hls.playlist.HlsMediaPlaylist.Segment>;
									public url: string;
									public initializationSegment: com.google.android.exoplayer2.source.hls.playlist.HlsMediaPlaylist.Segment;
									public durationUs: number;
									public title: string;
									public relativeDiscontinuitySequence: number;
									public relativeStartTimeUs: number;
									public drmInitData: com.google.android.exoplayer2.drm.DrmInitData;
									public fullSegmentEncryptionKeyUri: string;
									public encryptionIV: string;
									public byteRangeOffset: number;
									public byteRangeLength: number;
									public hasGapTag: boolean;
									public compareTo(relativeStartTimeUs: java.lang.Long): number;
									public constructor(url: string, initializationSegment: com.google.android.exoplayer2.source.hls.playlist.HlsMediaPlaylist.Segment, title: string, durationUs: number, relativeDiscontinuitySequence: number, relativeStartTimeUs: number, drmInitData: com.google.android.exoplayer2.drm.DrmInitData, fullSegmentEncryptionKeyUri: string, encryptionIV: string, byteRangeOffset: number, byteRangeLength: number, hasGapTag: boolean);
									public constructor(uri: string, byteRangeOffset: number, byteRangeLength: number, fullSegmentEncryptionKeyUri: string, encryptionIV: string);
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
				export module source {
					export module hls {
						export module playlist {
							export abstract class HlsPlaylist extends com.google.android.exoplayer2.offline.FilterableManifest<com.google.android.exoplayer2.source.hls.playlist.HlsPlaylist> {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.hls.playlist.HlsPlaylist>;
								public baseUri: string;
								public tags: java.util.List<string>;
								public hasIndependentSegments: boolean;
								public constructor(baseUri: string, tags: java.util.List<string>, hasIndependentSegments: boolean);
								public copy(list0: java.util.List<com.google.android.exoplayer2.offline.StreamKey>): any;
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
				export module source {
					export module hls {
						export module playlist {
							export class HlsPlaylistParser extends com.google.android.exoplayer2.upstream.ParsingLoadable.Parser<com.google.android.exoplayer2.source.hls.playlist.HlsPlaylist> {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.hls.playlist.HlsPlaylistParser>;
								public parse(uri0: globalAndroid.net.Uri, inputStream1: java.io.InputStream): any;
								public constructor();
								public constructor(masterPlaylist: com.google.android.exoplayer2.source.hls.playlist.HlsMasterPlaylist);
								public parse(uri: globalAndroid.net.Uri, inputStream: java.io.InputStream): com.google.android.exoplayer2.source.hls.playlist.HlsPlaylist;
							}
							export module HlsPlaylistParser {
								export class LineIterator extends java.lang.Object {
									public static class: java.lang.Class<com.google.android.exoplayer2.source.hls.playlist.HlsPlaylistParser.LineIterator>;
									public hasNext(): boolean;
									public next(): string;
									public constructor(extraLines: java.util.Queue<string>, reader: java.io.BufferedReader);
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
				export module source {
					export module hls {
						export module playlist {
							export class HlsPlaylistParserFactory extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.hls.playlist.HlsPlaylistParserFactory>;
								/**
								 * Constructs a new instance of the com.google.android.exoplayer2.source.hls.playlist.HlsPlaylistParserFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									createPlaylistParser(): com.google.android.exoplayer2.upstream.ParsingLoadable.Parser<com.google.android.exoplayer2.source.hls.playlist.HlsPlaylist>;
									createPlaylistParser(hlsMasterPlaylist0: com.google.android.exoplayer2.source.hls.playlist.HlsMasterPlaylist): com.google.android.exoplayer2.upstream.ParsingLoadable.Parser<com.google.android.exoplayer2.source.hls.playlist.HlsPlaylist>;
								});
								public constructor();
								public createPlaylistParser(): com.google.android.exoplayer2.upstream.ParsingLoadable.Parser<com.google.android.exoplayer2.source.hls.playlist.HlsPlaylist>;
								public createPlaylistParser(hlsMasterPlaylist0: com.google.android.exoplayer2.source.hls.playlist.HlsMasterPlaylist): com.google.android.exoplayer2.upstream.ParsingLoadable.Parser<com.google.android.exoplayer2.source.hls.playlist.HlsPlaylist>;
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
				export module source {
					export module hls {
						export module playlist {
							export class HlsPlaylistTracker extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.hls.playlist.HlsPlaylistTracker>;
								/**
								 * Constructs a new instance of the com.google.android.exoplayer2.source.hls.playlist.HlsPlaylistTracker interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									start(uri0: globalAndroid.net.Uri, eventDispatcher1: com.google.android.exoplayer2.source.MediaSourceEventListener.EventDispatcher, primaryPlaylistListener2: com.google.android.exoplayer2.source.hls.playlist.HlsPlaylistTracker.PrimaryPlaylistListener): void;
									stop(): void;
									addListener(playlistEventListener0: com.google.android.exoplayer2.source.hls.playlist.HlsPlaylistTracker.PlaylistEventListener): void;
									removeListener(playlistEventListener0: com.google.android.exoplayer2.source.hls.playlist.HlsPlaylistTracker.PlaylistEventListener): void;
									getMasterPlaylist(): com.google.android.exoplayer2.source.hls.playlist.HlsMasterPlaylist;
									getPlaylistSnapshot(uri0: globalAndroid.net.Uri, boolean1: boolean): com.google.android.exoplayer2.source.hls.playlist.HlsMediaPlaylist;
									getInitialStartTimeUs(): number;
									isSnapshotValid(uri0: globalAndroid.net.Uri): boolean;
									maybeThrowPrimaryPlaylistRefreshError(): void;
									maybeThrowPlaylistRefreshError(uri0: globalAndroid.net.Uri): void;
									refreshPlaylist(uri0: globalAndroid.net.Uri): void;
									isLive(): boolean;
								});
								public constructor();
								public removeListener(playlistEventListener0: com.google.android.exoplayer2.source.hls.playlist.HlsPlaylistTracker.PlaylistEventListener): void;
								public maybeThrowPrimaryPlaylistRefreshError(): void;
								public getPlaylistSnapshot(uri0: globalAndroid.net.Uri, boolean1: boolean): com.google.android.exoplayer2.source.hls.playlist.HlsMediaPlaylist;
								public getInitialStartTimeUs(): number;
								public addListener(playlistEventListener0: com.google.android.exoplayer2.source.hls.playlist.HlsPlaylistTracker.PlaylistEventListener): void;
								public maybeThrowPlaylistRefreshError(uri0: globalAndroid.net.Uri): void;
								public isLive(): boolean;
								public stop(): void;
								public isSnapshotValid(uri0: globalAndroid.net.Uri): boolean;
								public start(uri0: globalAndroid.net.Uri, eventDispatcher1: com.google.android.exoplayer2.source.MediaSourceEventListener.EventDispatcher, primaryPlaylistListener2: com.google.android.exoplayer2.source.hls.playlist.HlsPlaylistTracker.PrimaryPlaylistListener): void;
								public getMasterPlaylist(): com.google.android.exoplayer2.source.hls.playlist.HlsMasterPlaylist;
								public refreshPlaylist(uri0: globalAndroid.net.Uri): void;
							}
							export module HlsPlaylistTracker {
								export class Factory extends java.lang.Object {
									public static class: java.lang.Class<com.google.android.exoplayer2.source.hls.playlist.HlsPlaylistTracker.Factory>;
									/**
									 * Constructs a new instance of the com.google.android.exoplayer2.source.hls.playlist.HlsPlaylistTracker$Factory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										createTracker(hlsDataSourceFactory0: com.google.android.exoplayer2.source.hls.HlsDataSourceFactory, loadErrorHandlingPolicy1: com.google.android.exoplayer2.upstream.LoadErrorHandlingPolicy, hlsPlaylistParserFactory2: com.google.android.exoplayer2.source.hls.playlist.HlsPlaylistParserFactory): com.google.android.exoplayer2.source.hls.playlist.HlsPlaylistTracker;
									});
									public constructor();
									public createTracker(hlsDataSourceFactory0: com.google.android.exoplayer2.source.hls.HlsDataSourceFactory, loadErrorHandlingPolicy1: com.google.android.exoplayer2.upstream.LoadErrorHandlingPolicy, hlsPlaylistParserFactory2: com.google.android.exoplayer2.source.hls.playlist.HlsPlaylistParserFactory): com.google.android.exoplayer2.source.hls.playlist.HlsPlaylistTracker;
								}
								export class PlaylistEventListener extends java.lang.Object {
									public static class: java.lang.Class<com.google.android.exoplayer2.source.hls.playlist.HlsPlaylistTracker.PlaylistEventListener>;
									/**
									 * Constructs a new instance of the com.google.android.exoplayer2.source.hls.playlist.HlsPlaylistTracker$PlaylistEventListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										onPlaylistChanged(): void;
										onPlaylistError(uri0: globalAndroid.net.Uri, long1: number): boolean;
									});
									public constructor();
									public onPlaylistError(uri0: globalAndroid.net.Uri, long1: number): boolean;
									public onPlaylistChanged(): void;
								}
								export class PlaylistResetException extends java.io.IOException {
									public static class: java.lang.Class<com.google.android.exoplayer2.source.hls.playlist.HlsPlaylistTracker.PlaylistResetException>;
									public url: globalAndroid.net.Uri;
									public constructor();
									public constructor(cause: java.lang.Throwable);
									public constructor(message: string);
									public constructor(url: globalAndroid.net.Uri);
									public constructor(message: string, cause: java.lang.Throwable);
									public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
								}
								export class PlaylistStuckException extends java.io.IOException {
									public static class: java.lang.Class<com.google.android.exoplayer2.source.hls.playlist.HlsPlaylistTracker.PlaylistStuckException>;
									public url: globalAndroid.net.Uri;
									public constructor();
									public constructor(cause: java.lang.Throwable);
									public constructor(message: string);
									public constructor(url: globalAndroid.net.Uri);
									public constructor(message: string, cause: java.lang.Throwable);
									public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
								}
								export class PrimaryPlaylistListener extends java.lang.Object {
									public static class: java.lang.Class<com.google.android.exoplayer2.source.hls.playlist.HlsPlaylistTracker.PrimaryPlaylistListener>;
									/**
									 * Constructs a new instance of the com.google.android.exoplayer2.source.hls.playlist.HlsPlaylistTracker$PrimaryPlaylistListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										onPrimaryPlaylistRefreshed(hlsMediaPlaylist0: com.google.android.exoplayer2.source.hls.playlist.HlsMediaPlaylist): void;
									});
									public constructor();
									public onPrimaryPlaylistRefreshed(hlsMediaPlaylist0: com.google.android.exoplayer2.source.hls.playlist.HlsMediaPlaylist): void;
								}
							}
						}
					}
				}
			}
		}
	}
}


//Generics information:

