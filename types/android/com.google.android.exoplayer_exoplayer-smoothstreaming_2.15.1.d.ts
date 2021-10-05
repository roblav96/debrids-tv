declare module com {
	export module google {
		export module android {
			export module exoplayer2 {
				export module source {
					export module smoothstreaming {
						export class BuildConfig extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.source.smoothstreaming.BuildConfig>;
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
				export module source {
					export module smoothstreaming {
						export class DefaultSsChunkSource extends java.lang.Object implements com.google.android.exoplayer2.source.smoothstreaming.SsChunkSource {
							public static class: java.lang.Class<com.google.android.exoplayer2.source.smoothstreaming.DefaultSsChunkSource>;
							public getNextChunk(playbackPositionUs: number, loadPositionUs: number, queue: java.util.List<any>, out: com.google.android.exoplayer2.source.chunk.ChunkHolder): void;
							public constructor(manifestLoaderErrorThrower: com.google.android.exoplayer2.upstream.LoaderErrorThrower, manifest: com.google.android.exoplayer2.source.smoothstreaming.manifest.SsManifest, streamElementIndex: number, trackSelection: com.google.android.exoplayer2.trackselection.ExoTrackSelection, dataSource: com.google.android.exoplayer2.upstream.DataSource);
							public shouldCancelLoad(playbackPositionUs: number, loadingChunk: com.google.android.exoplayer2.source.chunk.Chunk, queue: java.util.List<any>): boolean;
							public getPreferredQueueSize(playbackPositionUs: number, queue: java.util.List<any>): number;
							public onChunkLoadCompleted(chunk: com.google.android.exoplayer2.source.chunk.Chunk): void;
							public onChunkLoadError(chunk: com.google.android.exoplayer2.source.chunk.Chunk, cancelable: boolean, loadErrorInfo: com.google.android.exoplayer2.upstream.LoadErrorHandlingPolicy.LoadErrorInfo, loadErrorHandlingPolicy: com.google.android.exoplayer2.upstream.LoadErrorHandlingPolicy): boolean;
							public updateManifest(newManifest: com.google.android.exoplayer2.source.smoothstreaming.manifest.SsManifest): void;
							public getAdjustedSeekPositionUs(positionUs: number, seekParameters: com.google.android.exoplayer2.SeekParameters): number;
							public updateTrackSelection(trackSelection: com.google.android.exoplayer2.trackselection.ExoTrackSelection): void;
							public release(): void;
							public maybeThrowError(): void;
						}
						export module DefaultSsChunkSource {
							export class Factory extends java.lang.Object implements com.google.android.exoplayer2.source.smoothstreaming.SsChunkSource.Factory {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.smoothstreaming.DefaultSsChunkSource.Factory>;
								public createChunkSource(manifestLoaderErrorThrower: com.google.android.exoplayer2.upstream.LoaderErrorThrower, manifest: com.google.android.exoplayer2.source.smoothstreaming.manifest.SsManifest, streamElementIndex: number, trackSelection: com.google.android.exoplayer2.trackselection.ExoTrackSelection, transferListener: com.google.android.exoplayer2.upstream.TransferListener): com.google.android.exoplayer2.source.smoothstreaming.SsChunkSource;
								public constructor(dataSourceFactory: com.google.android.exoplayer2.upstream.DataSource.Factory);
							}
							export class StreamElementIterator extends com.google.android.exoplayer2.source.chunk.BaseMediaChunkIterator {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.smoothstreaming.DefaultSsChunkSource.StreamElementIterator>;
								public getChunkStartTimeUs(): number;
								public getDataSpec(): com.google.android.exoplayer2.upstream.DataSpec;
								public constructor(fromIndex: number, toIndex: number);
								public reset(): void;
								public getChunkEndTimeUs(): number;
								public constructor(streamElement: com.google.android.exoplayer2.source.smoothstreaming.manifest.SsManifest.StreamElement, trackIndex: number, chunkIndex: number);
								public next(): boolean;
								public isEnded(): boolean;
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
					export module smoothstreaming {
						export class SsChunkSource extends java.lang.Object implements com.google.android.exoplayer2.source.chunk.ChunkSource {
							public static class: java.lang.Class<com.google.android.exoplayer2.source.smoothstreaming.SsChunkSource>;
							/**
							 * Constructs a new instance of the com.google.android.exoplayer2.source.smoothstreaming.SsChunkSource interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								updateManifest(ssManifest0: com.google.android.exoplayer2.source.smoothstreaming.manifest.SsManifest): void;
								updateTrackSelection(exoTrackSelection0: com.google.android.exoplayer2.trackselection.ExoTrackSelection): void;
								getAdjustedSeekPositionUs(long0: number, seekParameters1: com.google.android.exoplayer2.SeekParameters): number;
								maybeThrowError(): void;
								getPreferredQueueSize(long0: number, list1: java.util.List<any>): number;
								shouldCancelLoad(long0: number, chunk1: com.google.android.exoplayer2.source.chunk.Chunk, list2: java.util.List<any>): boolean;
								getNextChunk(long0: number, long1: number, list2: java.util.List<any>, chunkHolder3: com.google.android.exoplayer2.source.chunk.ChunkHolder): void;
								onChunkLoadCompleted(chunk0: com.google.android.exoplayer2.source.chunk.Chunk): void;
								onChunkLoadError(chunk0: com.google.android.exoplayer2.source.chunk.Chunk, boolean1: boolean, loadErrorInfo2: com.google.android.exoplayer2.upstream.LoadErrorHandlingPolicy.LoadErrorInfo, loadErrorHandlingPolicy3: com.google.android.exoplayer2.upstream.LoadErrorHandlingPolicy): boolean;
								release(): void;
							});
							public constructor();
							public getAdjustedSeekPositionUs(long0: number, seekParameters1: com.google.android.exoplayer2.SeekParameters): number;
							public updateManifest(ssManifest0: com.google.android.exoplayer2.source.smoothstreaming.manifest.SsManifest): void;
							public getNextChunk(long0: number, long1: number, list2: java.util.List<any>, chunkHolder3: com.google.android.exoplayer2.source.chunk.ChunkHolder): void;
							public onChunkLoadCompleted(chunk0: com.google.android.exoplayer2.source.chunk.Chunk): void;
							public onChunkLoadError(chunk0: com.google.android.exoplayer2.source.chunk.Chunk, boolean1: boolean, loadErrorInfo2: com.google.android.exoplayer2.upstream.LoadErrorHandlingPolicy.LoadErrorInfo, loadErrorHandlingPolicy3: com.google.android.exoplayer2.upstream.LoadErrorHandlingPolicy): boolean;
							public shouldCancelLoad(long0: number, chunk1: com.google.android.exoplayer2.source.chunk.Chunk, list2: java.util.List<any>): boolean;
							public updateTrackSelection(exoTrackSelection0: com.google.android.exoplayer2.trackselection.ExoTrackSelection): void;
							public release(): void;
							public maybeThrowError(): void;
							public getPreferredQueueSize(long0: number, list1: java.util.List<any>): number;
						}
						export module SsChunkSource {
							export class Factory extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.smoothstreaming.SsChunkSource.Factory>;
								/**
								 * Constructs a new instance of the com.google.android.exoplayer2.source.smoothstreaming.SsChunkSource() when extending the interface class.
								 */
								public constructor(implementation: {
									createChunkSource(loaderErrorThrower0: com.google.android.exoplayer2.upstream.LoaderErrorThrower, ssManifest1: com.google.android.exoplayer2.source.smoothstreaming.manifest.SsManifest, int2: number, exoTrackSelection3: com.google.android.exoplayer2.trackselection.ExoTrackSelection, transferListener4: com.google.android.exoplayer2.upstream.TransferListener): com.google.android.exoplayer2.source.smoothstreaming.SsChunkSource;
								});
								public constructor();
								public createChunkSource(loaderErrorThrower0: com.google.android.exoplayer2.upstream.LoaderErrorThrower, ssManifest1: com.google.android.exoplayer2.source.smoothstreaming.manifest.SsManifest, int2: number, exoTrackSelection3: com.google.android.exoplayer2.trackselection.ExoTrackSelection, transferListener4: com.google.android.exoplayer2.upstream.TransferListener): com.google.android.exoplayer2.source.smoothstreaming.SsChunkSource;
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
					export module smoothstreaming {
						export class SsMediaPeriod extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.source.smoothstreaming.SsMediaPeriod>;
							public getTrackGroups(): com.google.android.exoplayer2.source.TrackGroupArray;
							public reevaluateBuffer(positionUs: number): void;
							public onContinueLoadingRequested(sequenceableLoader0: any): void;
							public seekToUs(positionUs: number): number;
							public constructor(manifest: com.google.android.exoplayer2.source.smoothstreaming.manifest.SsManifest, chunkSourceFactory: com.google.android.exoplayer2.source.smoothstreaming.SsChunkSource.Factory, transferListener: com.google.android.exoplayer2.upstream.TransferListener, compositeSequenceableLoaderFactory: com.google.android.exoplayer2.source.CompositeSequenceableLoaderFactory, drmSessionManager: com.google.android.exoplayer2.drm.DrmSessionManager, drmEventDispatcher: com.google.android.exoplayer2.drm.DrmSessionEventListener.EventDispatcher, loadErrorHandlingPolicy: com.google.android.exoplayer2.upstream.LoadErrorHandlingPolicy, mediaSourceEventDispatcher: com.google.android.exoplayer2.source.MediaSourceEventListener.EventDispatcher, manifestLoaderErrorThrower: com.google.android.exoplayer2.upstream.LoaderErrorThrower, allocator: com.google.android.exoplayer2.upstream.Allocator);
							public isLoading(): boolean;
							public release(): void;
							public onContinueLoadingRequested(sampleStream: com.google.android.exoplayer2.source.chunk.ChunkSampleStream<com.google.android.exoplayer2.source.smoothstreaming.SsChunkSource>): void;
							public maybeThrowPrepareError(): void;
							public getBufferedPositionUs(): number;
							public discardBuffer(positionUs: number, toKeyframe: boolean): void;
							public getNextLoadPositionUs(): number;
							public continueLoading(positionUs: number): boolean;
							public selectTracks(selections: native.Array<com.google.android.exoplayer2.trackselection.ExoTrackSelection>, mayRetainStreamFlags: native.Array<boolean>, streams: native.Array<com.google.android.exoplayer2.source.SampleStream>, streamResetFlags: native.Array<boolean>, positionUs: number): number;
							public getAdjustedSeekPositionUs(positionUs: number, seekParameters: com.google.android.exoplayer2.SeekParameters): number;
							public readDiscontinuity(): number;
							public updateManifest(manifest: com.google.android.exoplayer2.source.smoothstreaming.manifest.SsManifest): void;
							public getStreamKeys(trackSelections: java.util.List<com.google.android.exoplayer2.trackselection.ExoTrackSelection>): java.util.List<com.google.android.exoplayer2.offline.StreamKey>;
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
					export module smoothstreaming {
						export class SsMediaSource extends com.google.android.exoplayer2.source.BaseMediaSource implements com.google.android.exoplayer2.upstream.Loader.Callback<com.google.android.exoplayer2.upstream.ParsingLoadable<com.google.android.exoplayer2.source.smoothstreaming.manifest.SsManifest>>  {
							public static class: java.lang.Class<com.google.android.exoplayer2.source.smoothstreaming.SsMediaSource>;
							public static DEFAULT_LIVE_PRESENTATION_DELAY_MS: number;
							public addEventListener(handler: globalAndroid.os.Handler, eventListener: com.google.android.exoplayer2.source.MediaSourceEventListener): void;
							public getMediaItem(): com.google.android.exoplayer2.MediaItem;
							public onLoadCompleted(loadable0: any, long1: number, long2: number): void;
							public enable(caller: com.google.android.exoplayer2.source.MediaSource.MediaSourceCaller): void;
							public releasePeriod(mediaPeriod: com.google.android.exoplayer2.source.MediaPeriod): void;
							public releaseSourceInternal(): void;
							public prepareSourceInternal(transferListener0: com.google.android.exoplayer2.upstream.TransferListener): void;
							public maybeThrowSourceInfoRefreshError(): void;
							public prepareSource(caller: com.google.android.exoplayer2.source.MediaSource.MediaSourceCaller, mediaTransferListener: com.google.android.exoplayer2.upstream.TransferListener): void;
							public onLoadCompleted(loadable: com.google.android.exoplayer2.upstream.ParsingLoadable<com.google.android.exoplayer2.source.smoothstreaming.manifest.SsManifest>, elapsedRealtimeMs: number, loadDurationMs: number): void;
							public onLoadError(loadable: com.google.android.exoplayer2.upstream.ParsingLoadable<com.google.android.exoplayer2.source.smoothstreaming.manifest.SsManifest>, elapsedRealtimeMs: number, loadDurationMs: number, error: java.io.IOException, errorCount: number): com.google.android.exoplayer2.upstream.Loader.LoadErrorAction;
							public isSingleWindow(): boolean;
							public releaseSource(caller: com.google.android.exoplayer2.source.MediaSource.MediaSourceCaller): void;
							public onLoadCanceled(loadable: com.google.android.exoplayer2.upstream.ParsingLoadable<com.google.android.exoplayer2.source.smoothstreaming.manifest.SsManifest>, elapsedRealtimeMs: number, loadDurationMs: number, released: boolean): void;
							public getInitialTimeline(): com.google.android.exoplayer2.Timeline;
							public disable(caller: com.google.android.exoplayer2.source.MediaSource.MediaSourceCaller): void;
							public addDrmEventListener(handler: globalAndroid.os.Handler, eventListener: com.google.android.exoplayer2.drm.DrmSessionEventListener): void;
							public removeDrmEventListener(eventListener: com.google.android.exoplayer2.drm.DrmSessionEventListener): void;
							public removeEventListener(eventListener: com.google.android.exoplayer2.source.MediaSourceEventListener): void;
							public onLoadCanceled(loadable0: any, long1: number, long2: number, boolean3: boolean): void;
							public prepareSourceInternal(mediaTransferListener: com.google.android.exoplayer2.upstream.TransferListener): void;
							public createPeriod(id: com.google.android.exoplayer2.source.MediaSource.MediaPeriodId, allocator: com.google.android.exoplayer2.upstream.Allocator, startPositionUs: number): com.google.android.exoplayer2.source.MediaPeriod;
							public onLoadError(loadable0: any, long1: number, long2: number, iOException3: java.io.IOException, int4: number): com.google.android.exoplayer2.upstream.Loader.LoadErrorAction;
						}
						export module SsMediaSource {
							export class Factory extends java.lang.Object implements com.google.android.exoplayer2.source.MediaSourceFactory {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.smoothstreaming.SsMediaSource.Factory>;
								public getSupportedTypes(): native.Array<number>;
								/** @deprecated */
								public createMediaSource(uri: globalAndroid.net.Uri): com.google.android.exoplayer2.source.MediaSource;
								public createMediaSource(manifest: com.google.android.exoplayer2.source.smoothstreaming.manifest.SsManifest, mediaItem: com.google.android.exoplayer2.MediaItem): com.google.android.exoplayer2.source.smoothstreaming.SsMediaSource;
								public setLivePresentationDelayMs(livePresentationDelayMs: number): com.google.android.exoplayer2.source.smoothstreaming.SsMediaSource.Factory;
								public createMediaSource(mediaItem0: com.google.android.exoplayer2.MediaItem): com.google.android.exoplayer2.source.MediaSource;
								public setLoadErrorHandlingPolicy(loadErrorHandlingPolicy: com.google.android.exoplayer2.upstream.LoadErrorHandlingPolicy): com.google.android.exoplayer2.source.smoothstreaming.SsMediaSource.Factory;
								public setCompositeSequenceableLoaderFactory(compositeSequenceableLoaderFactory: com.google.android.exoplayer2.source.CompositeSequenceableLoaderFactory): com.google.android.exoplayer2.source.smoothstreaming.SsMediaSource.Factory;
								/** @deprecated */
								public setTag(tag: any): com.google.android.exoplayer2.source.smoothstreaming.SsMediaSource.Factory;
								/** @deprecated */
								public setDrmUserAgent(string0: string): com.google.android.exoplayer2.source.MediaSourceFactory;
								public setManifestParser(manifestParser: com.google.android.exoplayer2.upstream.ParsingLoadable.Parser<any>): com.google.android.exoplayer2.source.smoothstreaming.SsMediaSource.Factory;
								/** @deprecated */
								public setStreamKeys(streamKeys: java.util.List<com.google.android.exoplayer2.offline.StreamKey>): com.google.android.exoplayer2.source.MediaSourceFactory;
								public setDrmSessionManagerProvider(drmSessionManagerProvider: com.google.android.exoplayer2.drm.DrmSessionManagerProvider): com.google.android.exoplayer2.source.smoothstreaming.SsMediaSource.Factory;
								public constructor(chunkSourceFactory: com.google.android.exoplayer2.source.smoothstreaming.SsChunkSource.Factory, manifestDataSourceFactory: com.google.android.exoplayer2.upstream.DataSource.Factory);
								public setLoadErrorHandlingPolicy(loadErrorHandlingPolicy0: com.google.android.exoplayer2.upstream.LoadErrorHandlingPolicy): com.google.android.exoplayer2.source.MediaSourceFactory;
								/** @deprecated */
								public setDrmSessionManager(drmSessionManager0: com.google.android.exoplayer2.drm.DrmSessionManager): com.google.android.exoplayer2.source.MediaSourceFactory;
								public setDrmHttpDataSourceFactory(drmHttpDataSourceFactory: com.google.android.exoplayer2.upstream.HttpDataSource.Factory): com.google.android.exoplayer2.source.smoothstreaming.SsMediaSource.Factory;
								public constructor(dataSourceFactory: com.google.android.exoplayer2.upstream.DataSource.Factory);
								public setDrmSessionManager(drmSessionManager: com.google.android.exoplayer2.drm.DrmSessionManager): com.google.android.exoplayer2.source.smoothstreaming.SsMediaSource.Factory;
								public createMediaSource(mediaItem: com.google.android.exoplayer2.MediaItem): com.google.android.exoplayer2.source.smoothstreaming.SsMediaSource;
								public createMediaSource(manifest: com.google.android.exoplayer2.source.smoothstreaming.manifest.SsManifest): com.google.android.exoplayer2.source.smoothstreaming.SsMediaSource;
								/** @deprecated */
								public setStreamKeys(streamKeys: java.util.List<com.google.android.exoplayer2.offline.StreamKey>): com.google.android.exoplayer2.source.smoothstreaming.SsMediaSource.Factory;
								/** @deprecated */
								public createMediaSource(uri: globalAndroid.net.Uri): com.google.android.exoplayer2.source.smoothstreaming.SsMediaSource;
								public setDrmUserAgent(userAgent: string): com.google.android.exoplayer2.source.smoothstreaming.SsMediaSource.Factory;
								public setDrmSessionManagerProvider(drmSessionManagerProvider0: com.google.android.exoplayer2.drm.DrmSessionManagerProvider): com.google.android.exoplayer2.source.MediaSourceFactory;
								/** @deprecated */
								public setDrmHttpDataSourceFactory(factory0: com.google.android.exoplayer2.upstream.HttpDataSource.Factory): com.google.android.exoplayer2.source.MediaSourceFactory;
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
					export module smoothstreaming {
						export module manifest {
							export class SsManifest extends com.google.android.exoplayer2.offline.FilterableManifest<com.google.android.exoplayer2.source.smoothstreaming.manifest.SsManifest> {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.smoothstreaming.manifest.SsManifest>;
								public static UNSET_LOOKAHEAD: number;
								public majorVersion: number;
								public minorVersion: number;
								public lookAheadCount: number;
								public isLive: boolean;
								public protectionElement: com.google.android.exoplayer2.source.smoothstreaming.manifest.SsManifest.ProtectionElement;
								public streamElements: native.Array<com.google.android.exoplayer2.source.smoothstreaming.manifest.SsManifest.StreamElement>;
								public durationUs: number;
								public dvrWindowLengthUs: number;
								public copy(streamKeys: java.util.List<com.google.android.exoplayer2.offline.StreamKey>): com.google.android.exoplayer2.source.smoothstreaming.manifest.SsManifest;
								public constructor(majorVersion: number, minorVersion: number, timescale: number, duration: number, dvrWindowLength: number, lookAheadCount: number, isLive: boolean, protectionElement: com.google.android.exoplayer2.source.smoothstreaming.manifest.SsManifest.ProtectionElement, streamElements: native.Array<com.google.android.exoplayer2.source.smoothstreaming.manifest.SsManifest.StreamElement>);
								public copy(list0: java.util.List<com.google.android.exoplayer2.offline.StreamKey>): any;
							}
							export module SsManifest {
								export class ProtectionElement extends java.lang.Object {
									public static class: java.lang.Class<com.google.android.exoplayer2.source.smoothstreaming.manifest.SsManifest.ProtectionElement>;
									public uuid: java.util.UUID;
									public data: native.Array<number>;
									public trackEncryptionBoxes: native.Array<com.google.android.exoplayer2.extractor.mp4.TrackEncryptionBox>;
									public constructor(uuid: java.util.UUID, data: native.Array<number>, trackEncryptionBoxes: native.Array<com.google.android.exoplayer2.extractor.mp4.TrackEncryptionBox>);
								}
								export class StreamElement extends java.lang.Object {
									public static class: java.lang.Class<com.google.android.exoplayer2.source.smoothstreaming.manifest.SsManifest.StreamElement>;
									public type: number;
									public subType: string;
									public timescale: number;
									public name: string;
									public maxWidth: number;
									public maxHeight: number;
									public displayWidth: number;
									public displayHeight: number;
									public language: string;
									public formats: native.Array<com.google.android.exoplayer2.Format>;
									public chunkCount: number;
									public getStartTimeUs(chunkIndex: number): number;
									public copy(formats: native.Array<com.google.android.exoplayer2.Format>): com.google.android.exoplayer2.source.smoothstreaming.manifest.SsManifest.StreamElement;
									public getChunkDurationUs(chunkIndex: number): number;
									public getChunkIndex(timeUs: number): number;
									public constructor(baseUri: string, chunkTemplate: string, type: number, subType: string, timescale: number, name: string, maxWidth: number, maxHeight: number, displayWidth: number, displayHeight: number, language: string, formats: native.Array<com.google.android.exoplayer2.Format>, chunkStartTimes: java.util.List<java.lang.Long>, lastChunkDuration: number);
									public buildRequestUri(track: number, chunkIndex: number): globalAndroid.net.Uri;
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
					export module smoothstreaming {
						export module manifest {
							export class SsManifestParser extends com.google.android.exoplayer2.upstream.ParsingLoadable.Parser<com.google.android.exoplayer2.source.smoothstreaming.manifest.SsManifest> {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.smoothstreaming.manifest.SsManifestParser>;
								public parse(uri: globalAndroid.net.Uri, inputStream: java.io.InputStream): com.google.android.exoplayer2.source.smoothstreaming.manifest.SsManifest;
								public parse(uri0: globalAndroid.net.Uri, inputStream1: java.io.InputStream): any;
								public constructor();
							}
							export module SsManifestParser {
								export abstract class ElementParser extends java.lang.Object {
									public static class: java.lang.Class<com.google.android.exoplayer2.source.smoothstreaming.manifest.SsManifestParser.ElementParser>;
									public parse(xmlParser: org.xmlpull.v1.XmlPullParser): any;
									public constructor(parent: com.google.android.exoplayer2.source.smoothstreaming.manifest.SsManifestParser.ElementParser, baseUri: string, tag: string);
									public handleChildInline(tagName: string): boolean;
									public parseStartTag(xmlParser: org.xmlpull.v1.XmlPullParser): void;
									public putNormalizedAttribute(key: string, value: any): void;
									public parseText(xmlParser: org.xmlpull.v1.XmlPullParser): void;
									public addChild(parsedChild: any): void;
									public parseEndTag(xmlParser: org.xmlpull.v1.XmlPullParser): void;
									public build(): any;
									public getNormalizedAttribute(key: string): any;
									public parseRequiredString(parser: org.xmlpull.v1.XmlPullParser, key: string): string;
									public parseInt(parser: org.xmlpull.v1.XmlPullParser, key: string, defaultValue: number): number;
									public parseLong(parser: org.xmlpull.v1.XmlPullParser, key: string, defaultValue: number): number;
									public parseRequiredLong(parser: org.xmlpull.v1.XmlPullParser, key: string): number;
									public parseRequiredInt(parser: org.xmlpull.v1.XmlPullParser, key: string): number;
									public parseBoolean(parser: org.xmlpull.v1.XmlPullParser, key: string, defaultValue: boolean): boolean;
								}
								export class MissingFieldException extends com.google.android.exoplayer2.ParserException {
									public static class: java.lang.Class<com.google.android.exoplayer2.source.smoothstreaming.manifest.SsManifestParser.MissingFieldException>;
									public constructor();
									public constructor(cause: java.lang.Throwable);
									public constructor(message: string);
									public constructor(fieldName: string);
									public constructor(message: string, cause: java.lang.Throwable);
									public constructor(message: string, cause: java.lang.Throwable, contentIsMalformed: boolean, dataType: number);
									public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
								}
								export class ProtectionParser extends com.google.android.exoplayer2.source.smoothstreaming.manifest.SsManifestParser.ElementParser {
									public static class: java.lang.Class<com.google.android.exoplayer2.source.smoothstreaming.manifest.SsManifestParser.ProtectionParser>;
									public static TAG: string;
									public static TAG_PROTECTION_HEADER: string;
									public static KEY_SYSTEM_ID: string;
									public handleChildInline(tag: string): boolean;
									public parseStartTag(parser: org.xmlpull.v1.XmlPullParser): void;
									public parseEndTag(parser: org.xmlpull.v1.XmlPullParser): void;
									public build(): any;
									public constructor(parent: com.google.android.exoplayer2.source.smoothstreaming.manifest.SsManifestParser.ElementParser, baseUri: string, tag: string);
									public constructor(parent: com.google.android.exoplayer2.source.smoothstreaming.manifest.SsManifestParser.ElementParser, baseUri: string);
									public handleChildInline(tagName: string): boolean;
									public parseStartTag(xmlParser: org.xmlpull.v1.XmlPullParser): void;
									public parseText(xmlParser: org.xmlpull.v1.XmlPullParser): void;
									public parseEndTag(xmlParser: org.xmlpull.v1.XmlPullParser): void;
									public parseText(parser: org.xmlpull.v1.XmlPullParser): void;
								}
								export class QualityLevelParser extends com.google.android.exoplayer2.source.smoothstreaming.manifest.SsManifestParser.ElementParser {
									public static class: java.lang.Class<com.google.android.exoplayer2.source.smoothstreaming.manifest.SsManifestParser.QualityLevelParser>;
									public static TAG: string;
									public parseStartTag(parser: org.xmlpull.v1.XmlPullParser): void;
									public build(): any;
									public constructor(parent: com.google.android.exoplayer2.source.smoothstreaming.manifest.SsManifestParser.ElementParser, baseUri: string, tag: string);
									public constructor(parent: com.google.android.exoplayer2.source.smoothstreaming.manifest.SsManifestParser.ElementParser, baseUri: string);
									public parseStartTag(xmlParser: org.xmlpull.v1.XmlPullParser): void;
								}
								export class SmoothStreamingMediaParser extends com.google.android.exoplayer2.source.smoothstreaming.manifest.SsManifestParser.ElementParser {
									public static class: java.lang.Class<com.google.android.exoplayer2.source.smoothstreaming.manifest.SsManifestParser.SmoothStreamingMediaParser>;
									public static TAG: string;
									public parseStartTag(parser: org.xmlpull.v1.XmlPullParser): void;
									public build(): any;
									public constructor(parent: com.google.android.exoplayer2.source.smoothstreaming.manifest.SsManifestParser.ElementParser, baseUri: string, tag: string);
									public constructor(parent: com.google.android.exoplayer2.source.smoothstreaming.manifest.SsManifestParser.ElementParser, baseUri: string);
									public parseStartTag(xmlParser: org.xmlpull.v1.XmlPullParser): void;
									public addChild(parsedChild: any): void;
									public addChild(child: any): void;
								}
								export class StreamIndexParser extends com.google.android.exoplayer2.source.smoothstreaming.manifest.SsManifestParser.ElementParser {
									public static class: java.lang.Class<com.google.android.exoplayer2.source.smoothstreaming.manifest.SsManifestParser.StreamIndexParser>;
									public static TAG: string;
									public handleChildInline(tag: string): boolean;
									public parseStartTag(parser: org.xmlpull.v1.XmlPullParser): void;
									public build(): any;
									public constructor(parent: com.google.android.exoplayer2.source.smoothstreaming.manifest.SsManifestParser.ElementParser, baseUri: string, tag: string);
									public constructor(parent: com.google.android.exoplayer2.source.smoothstreaming.manifest.SsManifestParser.ElementParser, baseUri: string);
									public handleChildInline(tagName: string): boolean;
									public parseStartTag(xmlParser: org.xmlpull.v1.XmlPullParser): void;
									public addChild(parsedChild: any): void;
									public addChild(child: any): void;
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
					export module smoothstreaming {
						export module offline {
							export class SsDownloader extends com.google.android.exoplayer2.offline.SegmentDownloader<com.google.android.exoplayer2.source.smoothstreaming.manifest.SsManifest> {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.smoothstreaming.offline.SsDownloader>;
								public constructor(mediaItem: com.google.android.exoplayer2.MediaItem, manifestParser: com.google.android.exoplayer2.upstream.ParsingLoadable.Parser<com.google.android.exoplayer2.source.smoothstreaming.manifest.SsManifest>, cacheDataSourceFactory: com.google.android.exoplayer2.upstream.cache.CacheDataSource.Factory, executor: java.util.concurrent.Executor);
								public constructor(mediaItem: com.google.android.exoplayer2.MediaItem, cacheDataSourceFactory: com.google.android.exoplayer2.upstream.cache.CacheDataSource.Factory);
								public constructor(mediaItem: com.google.android.exoplayer2.MediaItem, cacheDataSourceFactory: com.google.android.exoplayer2.upstream.cache.CacheDataSource.Factory, executor: java.util.concurrent.Executor);
								public cancel(): void;
								public getSegments(dataSource: com.google.android.exoplayer2.upstream.DataSource, manifest: com.google.android.exoplayer2.source.smoothstreaming.manifest.SsManifest, allowIncompleteList: boolean): java.util.List<com.google.android.exoplayer2.offline.SegmentDownloader.Segment>;
								public constructor(mediaItem: com.google.android.exoplayer2.MediaItem, manifestParser: com.google.android.exoplayer2.upstream.ParsingLoadable.Parser<any>, cacheDataSourceFactory: com.google.android.exoplayer2.upstream.cache.CacheDataSource.Factory, executor: java.util.concurrent.Executor);
								public getSegments(dataSource0: com.google.android.exoplayer2.upstream.DataSource, filterableManifest1: any, boolean2: boolean): java.util.List<com.google.android.exoplayer2.offline.SegmentDownloader.Segment>;
								public download(progressListener: com.google.android.exoplayer2.offline.Downloader.ProgressListener): void;
								public remove(): void;
							}
						}
					}
				}
			}
		}
	}
}



//Generics information:

