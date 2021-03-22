declare module com {
	export module google {
		export module android {
			export module exoplayer2 {
				export module source {
					export module dash {
						export class BuildConfig extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.source.dash.BuildConfig>;
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
					export module dash {
						export class DashChunkSource extends java.lang.Object implements com.google.android.exoplayer2.source.chunk.ChunkSource {
							public static class: java.lang.Class<com.google.android.exoplayer2.source.dash.DashChunkSource>;
							/**
							 * Constructs a new instance of the com.google.android.exoplayer2.source.dash.DashChunkSource interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								updateManifest(dashManifest0: com.google.android.exoplayer2.source.dash.manifest.DashManifest, int1: number): void;
								updateTrackSelection(exoTrackSelection0: com.google.android.exoplayer2.trackselection.ExoTrackSelection): void;
								getAdjustedSeekPositionUs(long0: number, seekParameters1: com.google.android.exoplayer2.SeekParameters): number;
								maybeThrowError(): void;
								getPreferredQueueSize(long0: number, list1: java.util.List<any>): number;
								shouldCancelLoad(long0: number, chunk1: com.google.android.exoplayer2.source.chunk.Chunk, list2: java.util.List<any>): boolean;
								getNextChunk(long0: number, long1: number, list2: java.util.List<any>, chunkHolder3: com.google.android.exoplayer2.source.chunk.ChunkHolder): void;
								onChunkLoadCompleted(chunk0: com.google.android.exoplayer2.source.chunk.Chunk): void;
								onChunkLoadError(chunk0: com.google.android.exoplayer2.source.chunk.Chunk, boolean1: boolean, exception2: java.lang.Exception, long3: number): boolean;
								release(): void;
							});
							public constructor();
							public updateManifest(dashManifest0: com.google.android.exoplayer2.source.dash.manifest.DashManifest, int1: number): void;
							public getAdjustedSeekPositionUs(long0: number, seekParameters1: com.google.android.exoplayer2.SeekParameters): number;
							public getNextChunk(long0: number, long1: number, list2: java.util.List<any>, chunkHolder3: com.google.android.exoplayer2.source.chunk.ChunkHolder): void;
							public onChunkLoadCompleted(chunk0: com.google.android.exoplayer2.source.chunk.Chunk): void;
							public shouldCancelLoad(long0: number, chunk1: com.google.android.exoplayer2.source.chunk.Chunk, list2: java.util.List<any>): boolean;
							public onChunkLoadError(chunk0: com.google.android.exoplayer2.source.chunk.Chunk, boolean1: boolean, exception2: java.lang.Exception, long3: number): boolean;
							public updateTrackSelection(exoTrackSelection0: com.google.android.exoplayer2.trackselection.ExoTrackSelection): void;
							public release(): void;
							public maybeThrowError(): void;
							public getPreferredQueueSize(long0: number, list1: java.util.List<any>): number;
						}
						export module DashChunkSource {
							export class Factory extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.dash.DashChunkSource.Factory>;
								/**
								 * Constructs a new instance of the com.google.android.exoplayer2.source.dash.DashChunkSource() when extending the interface class.
								 */
								public constructor(implementation: {
									createDashChunkSource(loaderErrorThrower0: com.google.android.exoplayer2.upstream.LoaderErrorThrower, dashManifest1: com.google.android.exoplayer2.source.dash.manifest.DashManifest, int2: number, ints3: native.Array<number>, exoTrackSelection4: com.google.android.exoplayer2.trackselection.ExoTrackSelection, int5: number, long6: number, boolean7: boolean, list8: java.util.List<com.google.android.exoplayer2.Format>, playerTrackEmsgHandler9: com.google.android.exoplayer2.source.dash.PlayerEmsgHandler.PlayerTrackEmsgHandler, transferListener10: com.google.android.exoplayer2.upstream.TransferListener): com.google.android.exoplayer2.source.dash.DashChunkSource;
								});
								public constructor();
								public createDashChunkSource(loaderErrorThrower0: com.google.android.exoplayer2.upstream.LoaderErrorThrower, dashManifest1: com.google.android.exoplayer2.source.dash.manifest.DashManifest, int2: number, ints3: native.Array<number>, exoTrackSelection4: com.google.android.exoplayer2.trackselection.ExoTrackSelection, int5: number, long6: number, boolean7: boolean, list8: java.util.List<com.google.android.exoplayer2.Format>, playerTrackEmsgHandler9: com.google.android.exoplayer2.source.dash.PlayerEmsgHandler.PlayerTrackEmsgHandler, transferListener10: com.google.android.exoplayer2.upstream.TransferListener): com.google.android.exoplayer2.source.dash.DashChunkSource;
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
					export module dash {
						export class DashManifestStaleException extends java.io.IOException {
							public static class: java.lang.Class<com.google.android.exoplayer2.source.dash.DashManifestStaleException>;
							public constructor();
							public constructor(message: string, cause: java.lang.Throwable);
							public constructor(cause: java.lang.Throwable);
							public constructor(message: string);
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
					export module dash {
						export class DashMediaPeriod extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.source.dash.DashMediaPeriod>;
							public onSampleStreamReleased(stream: com.google.android.exoplayer2.source.chunk.ChunkSampleStream<com.google.android.exoplayer2.source.dash.DashChunkSource>): void;
							public getTrackGroups(): com.google.android.exoplayer2.source.TrackGroupArray;
							public constructor(id: number, manifest: com.google.android.exoplayer2.source.dash.manifest.DashManifest, periodIndex: number, chunkSourceFactory: com.google.android.exoplayer2.source.dash.DashChunkSource.Factory, transferListener: com.google.android.exoplayer2.upstream.TransferListener, drmSessionManager: com.google.android.exoplayer2.drm.DrmSessionManager, drmEventDispatcher: com.google.android.exoplayer2.drm.DrmSessionEventListener.EventDispatcher, loadErrorHandlingPolicy: com.google.android.exoplayer2.upstream.LoadErrorHandlingPolicy, mediaSourceEventDispatcher: com.google.android.exoplayer2.source.MediaSourceEventListener.EventDispatcher, elapsedRealtimeOffsetMs: number, manifestLoaderErrorThrower: com.google.android.exoplayer2.upstream.LoaderErrorThrower, allocator: com.google.android.exoplayer2.upstream.Allocator, compositeSequenceableLoaderFactory: com.google.android.exoplayer2.source.CompositeSequenceableLoaderFactory, playerEmsgCallback: com.google.android.exoplayer2.source.dash.PlayerEmsgHandler.PlayerEmsgCallback);
							public reevaluateBuffer(positionUs: number): void;
							public onSampleStreamReleased(stream: com.google.android.exoplayer2.source.chunk.ChunkSampleStream<any>): void;
							public onContinueLoadingRequested(sequenceableLoader0: any): void;
							public seekToUs(positionUs: number): number;
							public isLoading(): boolean;
							public release(): void;
							public onContinueLoadingRequested(sampleStream: com.google.android.exoplayer2.source.chunk.ChunkSampleStream<com.google.android.exoplayer2.source.dash.DashChunkSource>): void;
							public maybeThrowPrepareError(): void;
							public getBufferedPositionUs(): number;
							public discardBuffer(positionUs: number, toKeyframe: boolean): void;
							public getNextLoadPositionUs(): number;
							public continueLoading(positionUs: number): boolean;
							public selectTracks(selections: native.Array<com.google.android.exoplayer2.trackselection.ExoTrackSelection>, mayRetainStreamFlags: native.Array<boolean>, streams: native.Array<com.google.android.exoplayer2.source.SampleStream>, streamResetFlags: native.Array<boolean>, positionUs: number): number;
							public getAdjustedSeekPositionUs(positionUs: number, seekParameters: com.google.android.exoplayer2.SeekParameters): number;
							public readDiscontinuity(): number;
							public updateManifest(manifest: com.google.android.exoplayer2.source.dash.manifest.DashManifest, periodIndex: number): void;
							public getStreamKeys(trackSelections: java.util.List<com.google.android.exoplayer2.trackselection.ExoTrackSelection>): java.util.List<com.google.android.exoplayer2.offline.StreamKey>;
							public prepare(callback: com.google.android.exoplayer2.source.MediaPeriod.Callback, positionUs: number): void;
						}
						export module DashMediaPeriod {
							export class TrackGroupInfo extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.dash.DashMediaPeriod.TrackGroupInfo>;
								public adaptationSetIndices: native.Array<number>;
								public trackType: number;
								public trackGroupCategory: number;
								public eventStreamGroupIndex: number;
								public primaryTrackGroupIndex: number;
								public embeddedEventMessageTrackGroupIndex: number;
								public embeddedClosedCaptionTrackGroupIndex: number;
								public static mpdEventTrack(eventStreamIndex: number): com.google.android.exoplayer2.source.dash.DashMediaPeriod.TrackGroupInfo;
								public static embeddedEmsgTrack(adaptationSetIndices: native.Array<number>, primaryTrackGroupIndex: number): com.google.android.exoplayer2.source.dash.DashMediaPeriod.TrackGroupInfo;
								public static embeddedClosedCaptionTrack(adaptationSetIndices: native.Array<number>, primaryTrackGroupIndex: number): com.google.android.exoplayer2.source.dash.DashMediaPeriod.TrackGroupInfo;
								public static primaryTrack(trackType: number, adaptationSetIndices: native.Array<number>, primaryTrackGroupIndex: number, embeddedEventMessageTrackGroupIndex: number, embeddedClosedCaptionTrackGroupIndex: number): com.google.android.exoplayer2.source.dash.DashMediaPeriod.TrackGroupInfo;
							}
							export module TrackGroupInfo {
								export class TrackGroupCategory extends java.lang.Object implements java.lang.annotation.Annotation {
									public static class: java.lang.Class<com.google.android.exoplayer2.source.dash.DashMediaPeriod.TrackGroupInfo.TrackGroupCategory>;
									/**
									 * Constructs a new instance of the com.google.android.exoplayer2.source.dash.DashMediaPeriod() when extending the interface class.
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
	}
}

declare module com {
	export module google {
		export module android {
			export module exoplayer2 {
				export module source {
					export module dash {
						export class DashMediaSource extends com.google.android.exoplayer2.source.BaseMediaSource {
							public static class: java.lang.Class<com.google.android.exoplayer2.source.dash.DashMediaSource>;
							public static DEFAULT_FALLBACK_TARGET_LIVE_OFFSET_MS: number;
							public static DEFAULT_LIVE_PRESENTATION_DELAY_MS: number;
							public static DEFAULT_MEDIA_ID: string;
							public addEventListener(handler: globalAndroid.os.Handler, eventListener: com.google.android.exoplayer2.source.MediaSourceEventListener): void;
							public getMediaItem(): com.google.android.exoplayer2.MediaItem;
							public enable(caller: com.google.android.exoplayer2.source.MediaSource.MediaSourceCaller): void;
							public releasePeriod(mediaPeriod: com.google.android.exoplayer2.source.MediaPeriod): void;
							public releaseSourceInternal(): void;
							public prepareSourceInternal(transferListener0: com.google.android.exoplayer2.upstream.TransferListener): void;
							public replaceManifestUri(manifestUri: globalAndroid.net.Uri): void;
							/** @deprecated */
							public getTag(): any;
							public maybeThrowSourceInfoRefreshError(): void;
							public prepareSource(caller: com.google.android.exoplayer2.source.MediaSource.MediaSourceCaller, mediaTransferListener: com.google.android.exoplayer2.upstream.TransferListener): void;
							public isSingleWindow(): boolean;
							public releaseSource(caller: com.google.android.exoplayer2.source.MediaSource.MediaSourceCaller): void;
							public getInitialTimeline(): com.google.android.exoplayer2.Timeline;
							public disable(caller: com.google.android.exoplayer2.source.MediaSource.MediaSourceCaller): void;
							public addDrmEventListener(handler: globalAndroid.os.Handler, eventListener: com.google.android.exoplayer2.drm.DrmSessionEventListener): void;
							public createPeriod(periodId: com.google.android.exoplayer2.source.MediaSource.MediaPeriodId, allocator: com.google.android.exoplayer2.upstream.Allocator, startPositionUs: number): com.google.android.exoplayer2.source.MediaPeriod;
							public removeDrmEventListener(eventListener: com.google.android.exoplayer2.drm.DrmSessionEventListener): void;
							public removeEventListener(eventListener: com.google.android.exoplayer2.source.MediaSourceEventListener): void;
							public prepareSourceInternal(mediaTransferListener: com.google.android.exoplayer2.upstream.TransferListener): void;
						}
						export module DashMediaSource {
							export class DashTimeline extends com.google.android.exoplayer2.Timeline {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.dash.DashMediaSource.DashTimeline>;
								public getIndexOfPeriod(object0: any): number;
								public getPeriod(periodIndex: number, period: com.google.android.exoplayer2.Timeline.Period): com.google.android.exoplayer2.Timeline.Period;
								public getPeriod(periodIndex: number, period: com.google.android.exoplayer2.Timeline.Period, setIdentifiers: boolean): com.google.android.exoplayer2.Timeline.Period;
								public getUidOfPeriod(int0: number): any;
								public getWindowCount(): number;
								public getIndexOfPeriod(uid: any): number;
								public constructor();
								public getPeriodCount(): number;
								public constructor(presentationStartTimeMs: number, windowStartTimeMs: number, elapsedRealtimeEpochOffsetMs: number, firstPeriodId: number, offsetInFirstPeriodUs: number, windowDurationUs: number, windowDefaultStartPositionUs: number, manifest: com.google.android.exoplayer2.source.dash.manifest.DashManifest, mediaItem: com.google.android.exoplayer2.MediaItem, liveConfiguration: com.google.android.exoplayer2.MediaItem.LiveConfiguration);
								public getWindow(windowIndex: number, window: com.google.android.exoplayer2.Timeline.Window, defaultPositionProjectionUs: number): com.google.android.exoplayer2.Timeline.Window;
								public getUidOfPeriod(periodIndex: number): any;
								public getPeriod(int0: number, period1: com.google.android.exoplayer2.Timeline.Period, boolean2: boolean): com.google.android.exoplayer2.Timeline.Period;
								public getWindow(windowIndex: number, window: com.google.android.exoplayer2.Timeline.Window): com.google.android.exoplayer2.Timeline.Window;
								/** @deprecated */
								public getWindow(windowIndex: number, window: com.google.android.exoplayer2.Timeline.Window, setTag: boolean): com.google.android.exoplayer2.Timeline.Window;
								public getWindow(int0: number, window1: com.google.android.exoplayer2.Timeline.Window, long2: number): com.google.android.exoplayer2.Timeline.Window;
							}
							export class DefaultPlayerEmsgCallback extends java.lang.Object implements com.google.android.exoplayer2.source.dash.PlayerEmsgHandler.PlayerEmsgCallback {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.dash.DashMediaSource.DefaultPlayerEmsgCallback>;
								public onDashManifestPublishTimeExpired(expiredManifestPublishTimeUs: number): void;
								public onDashManifestRefreshRequested(): void;
							}
							export class Factory extends java.lang.Object implements com.google.android.exoplayer2.source.MediaSourceFactory {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.dash.DashMediaSource.Factory>;
								public getSupportedTypes(): native.Array<number>;
								public setDrmHttpDataSourceFactory(drmHttpDataSourceFactory: com.google.android.exoplayer2.upstream.HttpDataSource.Factory): com.google.android.exoplayer2.source.dash.DashMediaSource.Factory;
								public createMediaSource(mediaItem: com.google.android.exoplayer2.MediaItem): com.google.android.exoplayer2.source.dash.DashMediaSource;
								/** @deprecated */
								public createMediaSource(uri: globalAndroid.net.Uri): com.google.android.exoplayer2.source.MediaSource;
								public setDrmSessionManager(drmSessionManager: com.google.android.exoplayer2.drm.DrmSessionManager): com.google.android.exoplayer2.source.dash.DashMediaSource.Factory;
								public createMediaSource(mediaItem0: com.google.android.exoplayer2.MediaItem): com.google.android.exoplayer2.source.MediaSource;
								public setDrmSessionManagerProvider(drmSessionManagerProvider: com.google.android.exoplayer2.drm.DrmSessionManagerProvider): com.google.android.exoplayer2.source.dash.DashMediaSource.Factory;
								public setFallbackTargetLiveOffsetMs(fallbackTargetLiveOffsetMs: number): com.google.android.exoplayer2.source.dash.DashMediaSource.Factory;
								public setCompositeSequenceableLoaderFactory(compositeSequenceableLoaderFactory: com.google.android.exoplayer2.source.CompositeSequenceableLoaderFactory): com.google.android.exoplayer2.source.dash.DashMediaSource.Factory;
								/** @deprecated */
								public setDrmUserAgent(string0: string): com.google.android.exoplayer2.source.MediaSourceFactory;
								public setDrmUserAgent(userAgent: string): com.google.android.exoplayer2.source.dash.DashMediaSource.Factory;
								/** @deprecated */
								public setStreamKeys(streamKeys: java.util.List<com.google.android.exoplayer2.offline.StreamKey>): com.google.android.exoplayer2.source.dash.DashMediaSource.Factory;
								/** @deprecated */
								public setStreamKeys(streamKeys: java.util.List<com.google.android.exoplayer2.offline.StreamKey>): com.google.android.exoplayer2.source.MediaSourceFactory;
								public setLoadErrorHandlingPolicy(loadErrorHandlingPolicy0: com.google.android.exoplayer2.upstream.LoadErrorHandlingPolicy): com.google.android.exoplayer2.source.MediaSourceFactory;
								/** @deprecated */
								public setLivePresentationDelayMs(livePresentationDelayMs: number, overridesManifest: boolean): com.google.android.exoplayer2.source.dash.DashMediaSource.Factory;
								/** @deprecated */
								public setDrmSessionManager(drmSessionManager0: com.google.android.exoplayer2.drm.DrmSessionManager): com.google.android.exoplayer2.source.MediaSourceFactory;
								public setManifestParser(manifestParser: com.google.android.exoplayer2.upstream.ParsingLoadable.Parser<any>): com.google.android.exoplayer2.source.dash.DashMediaSource.Factory;
								public constructor(dataSourceFactory: com.google.android.exoplayer2.upstream.DataSource.Factory);
								/** @deprecated */
								public createMediaSource(uri: globalAndroid.net.Uri): com.google.android.exoplayer2.source.dash.DashMediaSource;
								public constructor(chunkSourceFactory: com.google.android.exoplayer2.source.dash.DashChunkSource.Factory, manifestDataSourceFactory: com.google.android.exoplayer2.upstream.DataSource.Factory);
								public setLoadErrorHandlingPolicy(loadErrorHandlingPolicy: com.google.android.exoplayer2.upstream.LoadErrorHandlingPolicy): com.google.android.exoplayer2.source.dash.DashMediaSource.Factory;
								/** @deprecated */
								public setTag(tag: any): com.google.android.exoplayer2.source.dash.DashMediaSource.Factory;
								public createMediaSource(manifest: com.google.android.exoplayer2.source.dash.manifest.DashManifest): com.google.android.exoplayer2.source.dash.DashMediaSource;
								public createMediaSource(manifest: com.google.android.exoplayer2.source.dash.manifest.DashManifest, mediaItem: com.google.android.exoplayer2.MediaItem): com.google.android.exoplayer2.source.dash.DashMediaSource;
								public setDrmSessionManagerProvider(drmSessionManagerProvider0: com.google.android.exoplayer2.drm.DrmSessionManagerProvider): com.google.android.exoplayer2.source.MediaSourceFactory;
								/** @deprecated */
								public setDrmHttpDataSourceFactory(factory0: com.google.android.exoplayer2.upstream.HttpDataSource.Factory): com.google.android.exoplayer2.source.MediaSourceFactory;
							}
							export class Iso8601Parser extends com.google.android.exoplayer2.upstream.ParsingLoadable.Parser<java.lang.Long> {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.dash.DashMediaSource.Iso8601Parser>;
								public parse(uri: globalAndroid.net.Uri, inputStream: java.io.InputStream): java.lang.Long;
								public parse(uri0: globalAndroid.net.Uri, inputStream1: java.io.InputStream): any;
							}
							export class ManifestCallback extends com.google.android.exoplayer2.upstream.Loader.Callback<com.google.android.exoplayer2.upstream.ParsingLoadable<com.google.android.exoplayer2.source.dash.manifest.DashManifest>> {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.dash.DashMediaSource.ManifestCallback>;
								public onLoadError(loadable: com.google.android.exoplayer2.upstream.ParsingLoadable<com.google.android.exoplayer2.source.dash.manifest.DashManifest>, elapsedRealtimeMs: number, loadDurationMs: number, error: java.io.IOException, errorCount: number): com.google.android.exoplayer2.upstream.Loader.LoadErrorAction;
								public onLoadCanceled(loadable0: any, long1: number, long2: number, boolean3: boolean): void;
								public onLoadCompleted(loadable: com.google.android.exoplayer2.upstream.ParsingLoadable<com.google.android.exoplayer2.source.dash.manifest.DashManifest>, elapsedRealtimeMs: number, loadDurationMs: number): void;
								public onLoadCanceled(loadable: com.google.android.exoplayer2.upstream.ParsingLoadable<com.google.android.exoplayer2.source.dash.manifest.DashManifest>, elapsedRealtimeMs: number, loadDurationMs: number, released: boolean): void;
								public onLoadError(loadable0: any, long1: number, long2: number, iOException3: java.io.IOException, int4: number): com.google.android.exoplayer2.upstream.Loader.LoadErrorAction;
								public onLoadCompleted(loadable0: any, long1: number, long2: number): void;
							}
							export class ManifestLoadErrorThrower extends java.lang.Object implements com.google.android.exoplayer2.upstream.LoaderErrorThrower {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.dash.DashMediaSource.ManifestLoadErrorThrower>;
								public maybeThrowError(minRetryCount: number): void;
								public maybeThrowError(): void;
							}
							export class UtcTimestampCallback extends com.google.android.exoplayer2.upstream.Loader.Callback<com.google.android.exoplayer2.upstream.ParsingLoadable<java.lang.Long>> {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.dash.DashMediaSource.UtcTimestampCallback>;
								public onLoadError(loadable: com.google.android.exoplayer2.upstream.ParsingLoadable<java.lang.Long>, elapsedRealtimeMs: number, loadDurationMs: number, error: java.io.IOException, errorCount: number): com.google.android.exoplayer2.upstream.Loader.LoadErrorAction;
								public onLoadCompleted(loadable: com.google.android.exoplayer2.upstream.ParsingLoadable<java.lang.Long>, elapsedRealtimeMs: number, loadDurationMs: number): void;
								public onLoadCanceled(loadable: com.google.android.exoplayer2.upstream.ParsingLoadable<java.lang.Long>, elapsedRealtimeMs: number, loadDurationMs: number, released: boolean): void;
								public onLoadCanceled(loadable0: any, long1: number, long2: number, boolean3: boolean): void;
								public onLoadError(loadable0: any, long1: number, long2: number, iOException3: java.io.IOException, int4: number): com.google.android.exoplayer2.upstream.Loader.LoadErrorAction;
								public onLoadCompleted(loadable0: any, long1: number, long2: number): void;
							}
							export class XsDateTimeParser extends com.google.android.exoplayer2.upstream.ParsingLoadable.Parser<java.lang.Long> {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.dash.DashMediaSource.XsDateTimeParser>;
								public parse(uri: globalAndroid.net.Uri, inputStream: java.io.InputStream): java.lang.Long;
								public parse(uri0: globalAndroid.net.Uri, inputStream1: java.io.InputStream): any;
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
					export module dash {
						export class DashSegmentIndex extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.source.dash.DashSegmentIndex>;
							/**
							 * Constructs a new instance of the com.google.android.exoplayer2.source.dash.DashSegmentIndex interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getSegmentNum(long0: number, long1: number): number;
								getTimeUs(long0: number): number;
								getDurationUs(long0: number, long1: number): number;
								getSegmentUrl(long0: number): com.google.android.exoplayer2.source.dash.manifest.RangedUri;
								getFirstSegmentNum(): number;
								getFirstAvailableSegmentNum(long0: number, long1: number): number;
								getSegmentCount(long0: number): number;
								getAvailableSegmentCount(long0: number, long1: number): number;
								getNextSegmentAvailableTimeUs(long0: number, long1: number): number;
								isExplicit(): boolean;
							});
							public constructor();
							public static INDEX_UNBOUNDED: number;
							public getSegmentCount(long0: number): number;
							public getSegmentUrl(long0: number): com.google.android.exoplayer2.source.dash.manifest.RangedUri;
							public getNextSegmentAvailableTimeUs(long0: number, long1: number): number;
							public getFirstAvailableSegmentNum(long0: number, long1: number): number;
							public isExplicit(): boolean;
							public getSegmentNum(long0: number, long1: number): number;
							public getTimeUs(long0: number): number;
							public getAvailableSegmentCount(long0: number, long1: number): number;
							public getDurationUs(long0: number, long1: number): number;
							public getFirstSegmentNum(): number;
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
					export module dash {
						export class DashUtil extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.source.dash.DashUtil>;
							public static loadFormatWithDrmInitData(dataSource: com.google.android.exoplayer2.upstream.DataSource, period: com.google.android.exoplayer2.source.dash.manifest.Period): com.google.android.exoplayer2.Format;
							public static buildDataSpec(representation: com.google.android.exoplayer2.source.dash.manifest.Representation, requestUri: com.google.android.exoplayer2.source.dash.manifest.RangedUri, flags: number): com.google.android.exoplayer2.upstream.DataSpec;
							public static loadChunkIndex(dataSource: com.google.android.exoplayer2.upstream.DataSource, trackType: number, representation: com.google.android.exoplayer2.source.dash.manifest.Representation): com.google.android.exoplayer2.extractor.ChunkIndex;
							public static loadSampleFormat(dataSource: com.google.android.exoplayer2.upstream.DataSource, trackType: number, representation: com.google.android.exoplayer2.source.dash.manifest.Representation): com.google.android.exoplayer2.Format;
							public static loadManifest(dataSource: com.google.android.exoplayer2.upstream.DataSource, uri: globalAndroid.net.Uri): com.google.android.exoplayer2.source.dash.manifest.DashManifest;
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
					export module dash {
						export class DashWrappingSegmentIndex extends java.lang.Object implements com.google.android.exoplayer2.source.dash.DashSegmentIndex {
							public static class: java.lang.Class<com.google.android.exoplayer2.source.dash.DashWrappingSegmentIndex>;
							public getDurationUs(segmentNum: number, periodDurationUs: number): number;
							public getAvailableSegmentCount(periodDurationUs: number, nowUnixTimeUs: number): number;
							public getFirstAvailableSegmentNum(periodDurationUs: number, nowUnixTimeUs: number): number;
							public isExplicit(): boolean;
							public getNextSegmentAvailableTimeUs(periodDurationUs: number, nowUnixTimeUs: number): number;
							public getSegmentNum(timeUs: number, periodDurationUs: number): number;
							public getTimeUs(segmentNum: number): number;
							public getSegmentCount(periodDurationUs: number): number;
							public getFirstSegmentNum(): number;
							public getSegmentUrl(segmentNum: number): com.google.android.exoplayer2.source.dash.manifest.RangedUri;
							public constructor(chunkIndex: com.google.android.exoplayer2.extractor.ChunkIndex, timeOffsetUs: number);
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
					export module dash {
						export class DefaultDashChunkSource extends java.lang.Object implements com.google.android.exoplayer2.source.dash.DashChunkSource {
							public static class: java.lang.Class<com.google.android.exoplayer2.source.dash.DefaultDashChunkSource>;
							public representationHolders: native.Array<com.google.android.exoplayer2.source.dash.DefaultDashChunkSource.RepresentationHolder>;
							public getNextChunk(playbackPositionUs: number, loadPositionUs: number, queue: java.util.List<any>, out: com.google.android.exoplayer2.source.chunk.ChunkHolder): void;
							public getPreferredQueueSize(playbackPositionUs: number, queue: java.util.List<any>): number;
							public newInitializationChunk(representationHolder: com.google.android.exoplayer2.source.dash.DefaultDashChunkSource.RepresentationHolder, dataSource: com.google.android.exoplayer2.upstream.DataSource, trackFormat: com.google.android.exoplayer2.Format, trackSelectionReason: number, trackSelectionData: any, initializationUri: com.google.android.exoplayer2.source.dash.manifest.RangedUri, indexUri: com.google.android.exoplayer2.source.dash.manifest.RangedUri): com.google.android.exoplayer2.source.chunk.Chunk;
							public constructor(manifestLoaderErrorThrower: com.google.android.exoplayer2.upstream.LoaderErrorThrower, manifest: com.google.android.exoplayer2.source.dash.manifest.DashManifest, periodIndex: number, adaptationSetIndices: native.Array<number>, trackSelection: com.google.android.exoplayer2.trackselection.ExoTrackSelection, trackType: number, dataSource: com.google.android.exoplayer2.upstream.DataSource, elapsedRealtimeOffsetMs: number, maxSegmentsPerLoad: number, enableEventMessageTrack: boolean, closedCaptionFormats: java.util.List<com.google.android.exoplayer2.Format>, playerTrackEmsgHandler: com.google.android.exoplayer2.source.dash.PlayerEmsgHandler.PlayerTrackEmsgHandler);
							public release(): void;
							public shouldCancelLoad(playbackPositionUs: number, loadingChunk: com.google.android.exoplayer2.source.chunk.Chunk, queue: java.util.List<any>): boolean;
							public onChunkLoadError(chunk: com.google.android.exoplayer2.source.chunk.Chunk, cancelable: boolean, e: java.lang.Exception, exclusionDurationMs: number): boolean;
							public onChunkLoadCompleted(chunk: com.google.android.exoplayer2.source.chunk.Chunk): void;
							public getAdjustedSeekPositionUs(positionUs: number, seekParameters: com.google.android.exoplayer2.SeekParameters): number;
							public updateTrackSelection(trackSelection: com.google.android.exoplayer2.trackselection.ExoTrackSelection): void;
							public updateManifest(newManifest: com.google.android.exoplayer2.source.dash.manifest.DashManifest, newPeriodIndex: number): void;
							public newMediaChunk(representationHolder: com.google.android.exoplayer2.source.dash.DefaultDashChunkSource.RepresentationHolder, dataSource: com.google.android.exoplayer2.upstream.DataSource, trackType: number, trackFormat: com.google.android.exoplayer2.Format, trackSelectionReason: number, trackSelectionData: any, firstSegmentNum: number, maxSegmentCount: number, seekTimeUs: number, nowPeriodTimeUs: number): com.google.android.exoplayer2.source.chunk.Chunk;
							public maybeThrowError(): void;
						}
						export module DefaultDashChunkSource {
							export class Factory extends java.lang.Object implements com.google.android.exoplayer2.source.dash.DashChunkSource.Factory {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.dash.DefaultDashChunkSource.Factory>;
								public createDashChunkSource(manifestLoaderErrorThrower: com.google.android.exoplayer2.upstream.LoaderErrorThrower, manifest: com.google.android.exoplayer2.source.dash.manifest.DashManifest, periodIndex: number, adaptationSetIndices: native.Array<number>, trackSelection: com.google.android.exoplayer2.trackselection.ExoTrackSelection, trackType: number, elapsedRealtimeOffsetMs: number, enableEventMessageTrack: boolean, closedCaptionFormats: java.util.List<com.google.android.exoplayer2.Format>, playerEmsgHandler: com.google.android.exoplayer2.source.dash.PlayerEmsgHandler.PlayerTrackEmsgHandler, transferListener: com.google.android.exoplayer2.upstream.TransferListener): com.google.android.exoplayer2.source.dash.DashChunkSource;
								public constructor(dataSourceFactory: com.google.android.exoplayer2.upstream.DataSource.Factory, maxSegmentsPerLoad: number);
								public constructor(dataSourceFactory: com.google.android.exoplayer2.upstream.DataSource.Factory);
							}
							export class RepresentationHolder extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.dash.DefaultDashChunkSource.RepresentationHolder>;
								public representation: com.google.android.exoplayer2.source.dash.manifest.Representation;
								public segmentIndex: com.google.android.exoplayer2.source.dash.DashSegmentIndex;
								public getFirstAvailableSegmentNum(nowUnixTimeUs: number): number;
								public getLastAvailableSegmentNum(nowUnixTimeUs: number): number;
								public getSegmentNum(positionUs: number): number;
								public isSegmentAvailableAtFullNetworkSpeed(segmentNum: number, nowPeriodTimeUs: number): boolean;
								public getFirstSegmentNum(): number;
								public getSegmentUrl(segmentNum: number): com.google.android.exoplayer2.source.dash.manifest.RangedUri;
								public getSegmentCount(): number;
								public getSegmentStartTimeUs(segmentNum: number): number;
								public getSegmentEndTimeUs(segmentNum: number): number;
							}
							export class RepresentationSegmentIterator extends com.google.android.exoplayer2.source.chunk.BaseMediaChunkIterator {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.dash.DefaultDashChunkSource.RepresentationSegmentIterator>;
								public getChunkStartTimeUs(): number;
								public constructor(representation: com.google.android.exoplayer2.source.dash.DefaultDashChunkSource.RepresentationHolder, firstAvailableSegmentNum: number, lastAvailableSegmentNum: number, nowPeriodTimeUs: number);
								public getDataSpec(): com.google.android.exoplayer2.upstream.DataSpec;
								public constructor(fromIndex: number, toIndex: number);
								public reset(): void;
								public getChunkEndTimeUs(): number;
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
					export module dash {
						export class EventSampleStream extends java.lang.Object implements com.google.android.exoplayer2.source.SampleStream {
							public static class: java.lang.Class<com.google.android.exoplayer2.source.dash.EventSampleStream>;
							public seekToUs(positionUs: number): void;
							public skipData(positionUs: number): number;
							public updateEventStream(eventStream: com.google.android.exoplayer2.source.dash.manifest.EventStream, eventStreamAppendable: boolean): void;
							public constructor(eventStream: com.google.android.exoplayer2.source.dash.manifest.EventStream, upstreamFormat: com.google.android.exoplayer2.Format, eventStreamAppendable: boolean);
							public eventStreamId(): string;
							public isReady(): boolean;
							public maybeThrowError(): void;
							public readData(formatHolder: com.google.android.exoplayer2.FormatHolder, buffer: com.google.android.exoplayer2.decoder.DecoderInputBuffer, formatRequired: boolean): number;
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
					export module dash {
						export class PlayerEmsgHandler extends java.lang.Object implements globalAndroid.os.Handler.Callback {
							public static class: java.lang.Class<com.google.android.exoplayer2.source.dash.PlayerEmsgHandler>;
							public constructor(manifest: com.google.android.exoplayer2.source.dash.manifest.DashManifest, playerEmsgCallback: com.google.android.exoplayer2.source.dash.PlayerEmsgHandler.PlayerEmsgCallback, allocator: com.google.android.exoplayer2.upstream.Allocator);
							public newPlayerTrackEmsgHandler(): com.google.android.exoplayer2.source.dash.PlayerEmsgHandler.PlayerTrackEmsgHandler;
							public release(): void;
							public handleMessage(message: globalAndroid.os.Message): boolean;
							public updateManifest(newManifest: com.google.android.exoplayer2.source.dash.manifest.DashManifest): void;
						}
						export module PlayerEmsgHandler {
							export class ManifestExpiryEventInfo extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.dash.PlayerEmsgHandler.ManifestExpiryEventInfo>;
								public eventTimeUs: number;
								public manifestPublishTimeMsInEmsg: number;
								public constructor(eventTimeUs: number, manifestPublishTimeMsInEmsg: number);
							}
							export class PlayerEmsgCallback extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.dash.PlayerEmsgHandler.PlayerEmsgCallback>;
								/**
								 * Constructs a new instance of the com.google.android.exoplayer2.source.dash.PlayerEmsgHandler() when extending the interface class.
								 */
								public constructor(implementation: {
									onDashManifestRefreshRequested(): void;
									onDashManifestPublishTimeExpired(long0: number): void;
								});
								public constructor();
								public onDashManifestRefreshRequested(): void;
								public onDashManifestPublishTimeExpired(long0: number): void;
							}
							export class PlayerTrackEmsgHandler extends java.lang.Object implements com.google.android.exoplayer2.extractor.TrackOutput {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.dash.PlayerEmsgHandler.PlayerTrackEmsgHandler>;
								public sampleData(input: com.google.android.exoplayer2.upstream.DataReader, length: number, allowEndOfInput: boolean): number;
								public onChunkLoadError(chunk: com.google.android.exoplayer2.source.chunk.Chunk): boolean;
								public sampleMetadata(timeUs: number, flags: number, size: number, offset: number, encryptionData: com.google.android.exoplayer2.extractor.TrackOutput.CryptoData): void;
								public maybeRefreshManifestBeforeLoadingNextChunk(presentationPositionUs: number): boolean;
								public release(): void;
								public format(format: com.google.android.exoplayer2.Format): void;
								public onChunkLoadCompleted(chunk: com.google.android.exoplayer2.source.chunk.Chunk): void;
								public sampleData(input: com.google.android.exoplayer2.upstream.DataReader, length: number, allowEndOfInput: boolean, sampleDataPart: number): number;
								public sampleData(data: com.google.android.exoplayer2.util.ParsableByteArray, length: number, sampleDataPart: number): void;
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
					export module dash {
						export module manifest {
							export class AdaptationSet extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.dash.manifest.AdaptationSet>;
								public static ID_UNSET: number;
								public id: number;
								public type: number;
								public representations: java.util.List<com.google.android.exoplayer2.source.dash.manifest.Representation>;
								public accessibilityDescriptors: java.util.List<com.google.android.exoplayer2.source.dash.manifest.Descriptor>;
								public essentialProperties: java.util.List<com.google.android.exoplayer2.source.dash.manifest.Descriptor>;
								public supplementalProperties: java.util.List<com.google.android.exoplayer2.source.dash.manifest.Descriptor>;
								public constructor(id: number, type: number, representations: java.util.List<com.google.android.exoplayer2.source.dash.manifest.Representation>, accessibilityDescriptors: java.util.List<com.google.android.exoplayer2.source.dash.manifest.Descriptor>, essentialProperties: java.util.List<com.google.android.exoplayer2.source.dash.manifest.Descriptor>, supplementalProperties: java.util.List<com.google.android.exoplayer2.source.dash.manifest.Descriptor>);
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
					export module dash {
						export module manifest {
							export class DashManifest extends com.google.android.exoplayer2.offline.FilterableManifest<com.google.android.exoplayer2.source.dash.manifest.DashManifest> {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.dash.manifest.DashManifest>;
								public availabilityStartTimeMs: number;
								public durationMs: number;
								public minBufferTimeMs: number;
								public dynamic: boolean;
								public minUpdatePeriodMs: number;
								public timeShiftBufferDepthMs: number;
								public suggestedPresentationDelayMs: number;
								public publishTimeMs: number;
								public utcTiming: com.google.android.exoplayer2.source.dash.manifest.UtcTimingElement;
								public serviceDescription: com.google.android.exoplayer2.source.dash.manifest.ServiceDescriptionElement;
								public location: globalAndroid.net.Uri;
								public programInformation: com.google.android.exoplayer2.source.dash.manifest.ProgramInformation;
								public getPeriodDurationMs(index: number): number;
								public getPeriodCount(): number;
								public copy(streamKeys: java.util.List<com.google.android.exoplayer2.offline.StreamKey>): com.google.android.exoplayer2.source.dash.manifest.DashManifest;
								public getPeriodDurationUs(index: number): number;
								/** @deprecated */
								public constructor(availabilityStartTimeMs: number, durationMs: number, minBufferTimeMs: number, dynamic: boolean, minUpdatePeriodMs: number, timeShiftBufferDepthMs: number, suggestedPresentationDelayMs: number, publishTimeMs: number, utcTiming: com.google.android.exoplayer2.source.dash.manifest.UtcTimingElement, location: globalAndroid.net.Uri, periods: java.util.List<com.google.android.exoplayer2.source.dash.manifest.Period>);
								public copy(list0: java.util.List<com.google.android.exoplayer2.offline.StreamKey>): any;
								public constructor(availabilityStartTimeMs: number, durationMs: number, minBufferTimeMs: number, dynamic: boolean, minUpdatePeriodMs: number, timeShiftBufferDepthMs: number, suggestedPresentationDelayMs: number, publishTimeMs: number, programInformation: com.google.android.exoplayer2.source.dash.manifest.ProgramInformation, utcTiming: com.google.android.exoplayer2.source.dash.manifest.UtcTimingElement, serviceDescription: com.google.android.exoplayer2.source.dash.manifest.ServiceDescriptionElement, location: globalAndroid.net.Uri, periods: java.util.List<com.google.android.exoplayer2.source.dash.manifest.Period>);
								public getPeriod(index: number): com.google.android.exoplayer2.source.dash.manifest.Period;
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
					export module dash {
						export module manifest {
							export class DashManifestParser extends org.xml.sax.helpers.DefaultHandler implements com.google.android.exoplayer2.upstream.ParsingLoadable.Parser<com.google.android.exoplayer2.source.dash.manifest.DashManifest>  {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.dash.manifest.DashManifestParser>;
								public startElement(uri: string, localName: string, qName: string, attributes: org.xml.sax.Attributes): void;
								public parseRepresentation(xpp: org.xmlpull.v1.XmlPullParser, baseUrl: string, adaptationSetMimeType: string, adaptationSetCodecs: string, adaptationSetWidth: number, adaptationSetHeight: number, adaptationSetFrameRate: number, adaptationSetAudioChannels: number, adaptationSetAudioSamplingRate: number, adaptationSetLanguage: string, adaptationSetRoleDescriptors: java.util.List<com.google.android.exoplayer2.source.dash.manifest.Descriptor>, adaptationSetAccessibilityDescriptors: java.util.List<com.google.android.exoplayer2.source.dash.manifest.Descriptor>, adaptationSetEssentialProperties: java.util.List<com.google.android.exoplayer2.source.dash.manifest.Descriptor>, adaptationSetSupplementalProperties: java.util.List<com.google.android.exoplayer2.source.dash.manifest.Descriptor>, segmentBase: com.google.android.exoplayer2.source.dash.manifest.SegmentBase, periodStartUnixTimeMs: number, periodDurationMs: number, baseUrlAvailabilityTimeOffsetUs: number, segmentBaseAvailabilityTimeOffsetUs: number, timeShiftBufferDepthMs: number): com.google.android.exoplayer2.source.dash.manifest.DashManifestParser.RepresentationInfo;
								public parseSegmentList(xpp: org.xmlpull.v1.XmlPullParser, parent: com.google.android.exoplayer2.source.dash.manifest.SegmentBase.SegmentList, periodStartUnixTimeMs: number, periodDurationMs: number, baseUrlAvailabilityTimeOffsetUs: number, segmentBaseAvailabilityTimeOffsetUs: number, timeShiftBufferDepthMs: number): com.google.android.exoplayer2.source.dash.manifest.SegmentBase.SegmentList;
								public parseEventStream(xpp: org.xmlpull.v1.XmlPullParser): com.google.android.exoplayer2.source.dash.manifest.EventStream;
								public parseSegmentUrl(xpp: org.xmlpull.v1.XmlPullParser): com.google.android.exoplayer2.source.dash.manifest.RangedUri;
								public static parseString(xpp: org.xmlpull.v1.XmlPullParser, name: string, defaultValue: string): string;
								public parseRoleFlagsFromProperties(accessibilityDescriptors: java.util.List<com.google.android.exoplayer2.source.dash.manifest.Descriptor>): number;
								public buildPeriod(id: string, startMs: number, adaptationSets: java.util.List<com.google.android.exoplayer2.source.dash.manifest.AdaptationSet>, eventStreams: java.util.List<com.google.android.exoplayer2.source.dash.manifest.EventStream>, assetIdentifier: com.google.android.exoplayer2.source.dash.manifest.Descriptor): com.google.android.exoplayer2.source.dash.manifest.Period;
								public parseDashRoleSchemeValue(value: string): number;
								public static parseEac3SupplementalProperties(supplementalProperties: java.util.List<com.google.android.exoplayer2.source.dash.manifest.Descriptor>): string;
								public parseAdaptationSet(xpp: org.xmlpull.v1.XmlPullParser, baseUrl: string, segmentBase: com.google.android.exoplayer2.source.dash.manifest.SegmentBase, periodDurationMs: number, baseUrlAvailabilityTimeOffsetUs: number, segmentBaseAvailabilityTimeOffsetUs: number, periodStartUnixTimeMs: number, timeShiftBufferDepthMs: number): com.google.android.exoplayer2.source.dash.manifest.AdaptationSet;
								public static maybeSkipTag(xpp: org.xmlpull.v1.XmlPullParser): void;
								public parseUtcTiming(xpp: org.xmlpull.v1.XmlPullParser): com.google.android.exoplayer2.source.dash.manifest.UtcTimingElement;
								public parseAdaptationSetChild(xpp: org.xmlpull.v1.XmlPullParser): void;
								public static parseLastSegmentNumberSupplementalProperty(supplementalProperties: java.util.List<com.google.android.exoplayer2.source.dash.manifest.Descriptor>): number;
								public resolveEntity(publicId: string, systemId: string): org.xml.sax.InputSource;
								public static parseDuration(xpp: org.xmlpull.v1.XmlPullParser, name: string, defaultValue: number): number;
								public static parseInt(xpp: org.xmlpull.v1.XmlPullParser, name: string, defaultValue: number): number;
								public notationDecl(name: string, publicId: string, systemId: string): void;
								public buildEvent(schemeIdUri: string, value: string, id: number, durationMs: number, messageData: native.Array<number>): com.google.android.exoplayer2.metadata.emsg.EventMessage;
								public parseContentType(xpp: org.xmlpull.v1.XmlPullParser): number;
								public parseContentProtection(xpp: org.xmlpull.v1.XmlPullParser): globalAndroid.util.Pair<string,com.google.android.exoplayer2.drm.DrmInitData.SchemeData>;
								public parseEventObject(xpp: org.xmlpull.v1.XmlPullParser, scratchOutputStream: java.io.ByteArrayOutputStream): native.Array<number>;
								public parseRoleFlagsFromAccessibilityDescriptors(accessibilityDescriptors: java.util.List<com.google.android.exoplayer2.source.dash.manifest.Descriptor>): number;
								public error(e: org.xml.sax.SAXParseException): void;
								public buildSegmentList(initialization: com.google.android.exoplayer2.source.dash.manifest.RangedUri, timescale: number, presentationTimeOffset: number, startNumber: number, duration: number, timeline: java.util.List<com.google.android.exoplayer2.source.dash.manifest.SegmentBase.SegmentTimelineElement>, availabilityTimeOffsetUs: number, segments: java.util.List<com.google.android.exoplayer2.source.dash.manifest.RangedUri>, timeShiftBufferDepthMs: number, periodStartUnixTimeMs: number): com.google.android.exoplayer2.source.dash.manifest.SegmentBase.SegmentList;
								public startDocument(): void;
								public fatalError(e: org.xml.sax.SAXParseException): void;
								public skippedEntity(name: string): void;
								public parse(uri0: globalAndroid.net.Uri, inputStream1: java.io.InputStream): any;
								public constructor();
								public parseInitialization(xpp: org.xmlpull.v1.XmlPullParser): com.google.android.exoplayer2.source.dash.manifest.RangedUri;
								public static parseFrameRate(xpp: org.xmlpull.v1.XmlPullParser, defaultValue: number): number;
								public parseSegmentBase(xpp: org.xmlpull.v1.XmlPullParser, parent: com.google.android.exoplayer2.source.dash.manifest.SegmentBase.SingleSegmentBase): com.google.android.exoplayer2.source.dash.manifest.SegmentBase.SingleSegmentBase;
								public parseRoleFlagsFromRoleDescriptors(roleDescriptors: java.util.List<com.google.android.exoplayer2.source.dash.manifest.Descriptor>): number;
								public parsePeriod(xpp: org.xmlpull.v1.XmlPullParser, baseUrl: string, defaultStartMs: number, baseUrlAvailabilityTimeOffsetUs: number, availabilityStartTimeMs: number, timeShiftBufferDepthMs: number): globalAndroid.util.Pair<com.google.android.exoplayer2.source.dash.manifest.Period,java.lang.Long>;
								public parseEvent(xpp: org.xmlpull.v1.XmlPullParser, schemeIdUri: string, value: string, timescale: number, scratchOutputStream: java.io.ByteArrayOutputStream): globalAndroid.util.Pair<java.lang.Long,com.google.android.exoplayer2.metadata.emsg.EventMessage>;
								public static parseDescriptor(xpp: org.xmlpull.v1.XmlPullParser, tag: string): com.google.android.exoplayer2.source.dash.manifest.Descriptor;
								public parseAvailabilityTimeOffsetUs(xpp: org.xmlpull.v1.XmlPullParser, parentAvailabilityTimeOffsetUs: number): number;
								public buildSegmentTemplate(initialization: com.google.android.exoplayer2.source.dash.manifest.RangedUri, timescale: number, presentationTimeOffset: number, startNumber: number, endNumber: number, duration: number, timeline: java.util.List<com.google.android.exoplayer2.source.dash.manifest.SegmentBase.SegmentTimelineElement>, availabilityTimeOffsetUs: number, initializationTemplate: com.google.android.exoplayer2.source.dash.manifest.UrlTemplate, mediaTemplate: com.google.android.exoplayer2.source.dash.manifest.UrlTemplate, timeShiftBufferDepthMs: number, periodStartUnixTimeMs: number): com.google.android.exoplayer2.source.dash.manifest.SegmentBase.SegmentTemplate;
								public parseAudioChannelConfiguration(xpp: org.xmlpull.v1.XmlPullParser): number;
								public static parseDateTime(xpp: org.xmlpull.v1.XmlPullParser, name: string, defaultValue: number): number;
								public buildUtcTimingElement(schemeIdUri: string, value: string): com.google.android.exoplayer2.source.dash.manifest.UtcTimingElement;
								public unparsedEntityDecl(name: string, publicId: string, systemId: string, notationName: string): void;
								public parseMediaPresentationDescription(xpp: org.xmlpull.v1.XmlPullParser, baseUrl: string): com.google.android.exoplayer2.source.dash.manifest.DashManifest;
								public endElement(uri: string, localName: string, qName: string): void;
								public parseRangedUrl(xpp: org.xmlpull.v1.XmlPullParser, urlAttribute: string, rangeAttribute: string): com.google.android.exoplayer2.source.dash.manifest.RangedUri;
								public parseProgramInformation(xpp: org.xmlpull.v1.XmlPullParser): com.google.android.exoplayer2.source.dash.manifest.ProgramInformation;
								public static parseLong(xpp: org.xmlpull.v1.XmlPullParser, name: string, defaultValue: number): number;
								public static parseCea708AccessibilityChannel(accessibilityDescriptors: java.util.List<com.google.android.exoplayer2.source.dash.manifest.Descriptor>): number;
								public characters(ch: native.Array<string>, start: number, length: number): void;
								public parseLabel(xpp: org.xmlpull.v1.XmlPullParser): string;
								public static parseText(xpp: org.xmlpull.v1.XmlPullParser, label: string): string;
								public buildRangedUri(urlText: string, rangeStart: number, rangeLength: number): com.google.android.exoplayer2.source.dash.manifest.RangedUri;
								public warning(e: org.xml.sax.SAXParseException): void;
								public setDocumentLocator(locator: org.xml.sax.Locator): void;
								public static parseMpegChannelConfiguration(xpp: org.xmlpull.v1.XmlPullParser): number;
								public parseSegmentTemplate(xpp: org.xmlpull.v1.XmlPullParser, parent: com.google.android.exoplayer2.source.dash.manifest.SegmentBase.SegmentTemplate, adaptationSetSupplementalProperties: java.util.List<com.google.android.exoplayer2.source.dash.manifest.Descriptor>, periodStartUnixTimeMs: number, periodDurationMs: number, baseUrlAvailabilityTimeOffsetUs: number, segmentBaseAvailabilityTimeOffsetUs: number, timeShiftBufferDepthMs: number): com.google.android.exoplayer2.source.dash.manifest.SegmentBase.SegmentTemplate;
								public parse(uri: globalAndroid.net.Uri, inputStream: java.io.InputStream): com.google.android.exoplayer2.source.dash.manifest.DashManifest;
								public buildEventStream(schemeIdUri: string, value: string, timescale: number, presentationTimesUs: native.Array<number>, events: native.Array<com.google.android.exoplayer2.metadata.emsg.EventMessage>): com.google.android.exoplayer2.source.dash.manifest.EventStream;
								public buildAdaptationSet(id: number, contentType: number, representations: java.util.List<com.google.android.exoplayer2.source.dash.manifest.Representation>, accessibilityDescriptors: java.util.List<com.google.android.exoplayer2.source.dash.manifest.Descriptor>, essentialProperties: java.util.List<com.google.android.exoplayer2.source.dash.manifest.Descriptor>, supplementalProperties: java.util.List<com.google.android.exoplayer2.source.dash.manifest.Descriptor>): com.google.android.exoplayer2.source.dash.manifest.AdaptationSet;
								public parseSegmentTimeline(xpp: org.xmlpull.v1.XmlPullParser, timescale: number, periodDurationMs: number): java.util.List<com.google.android.exoplayer2.source.dash.manifest.SegmentBase.SegmentTimelineElement>;
								public parseSelectionFlagsFromRoleDescriptors(roleDescriptors: java.util.List<com.google.android.exoplayer2.source.dash.manifest.Descriptor>): number;
								public buildFormat(id: string, containerMimeType: string, width: number, height: number, frameRate: number, audioChannels: number, audioSamplingRate: number, bitrate: number, language: string, roleDescriptors: java.util.List<com.google.android.exoplayer2.source.dash.manifest.Descriptor>, accessibilityDescriptors: java.util.List<com.google.android.exoplayer2.source.dash.manifest.Descriptor>, codecs: string, essentialProperties: java.util.List<com.google.android.exoplayer2.source.dash.manifest.Descriptor>, supplementalProperties: java.util.List<com.google.android.exoplayer2.source.dash.manifest.Descriptor>): com.google.android.exoplayer2.Format;
								public processingInstruction(target: string, data: string): void;
								public static parseCea608AccessibilityChannel(accessibilityDescriptors: java.util.List<com.google.android.exoplayer2.source.dash.manifest.Descriptor>): number;
								public ignorableWhitespace(ch: native.Array<string>, start: number, length: number): void;
								public buildMediaPresentationDescription(availabilityStartTime: number, durationMs: number, minBufferTimeMs: number, dynamic: boolean, minUpdateTimeMs: number, timeShiftBufferDepthMs: number, suggestedPresentationDelayMs: number, publishTimeMs: number, programInformation: com.google.android.exoplayer2.source.dash.manifest.ProgramInformation, utcTiming: com.google.android.exoplayer2.source.dash.manifest.UtcTimingElement, serviceDescription: com.google.android.exoplayer2.source.dash.manifest.ServiceDescriptionElement, location: globalAndroid.net.Uri, periods: java.util.List<com.google.android.exoplayer2.source.dash.manifest.Period>): com.google.android.exoplayer2.source.dash.manifest.DashManifest;
								public endDocument(): void;
								public parseTvaAudioPurposeCsValue(value: string): number;
								public static parseDolbyChannelConfiguration(xpp: org.xmlpull.v1.XmlPullParser): number;
								public parseUrlTemplate(xpp: org.xmlpull.v1.XmlPullParser, name: string, defaultValue: com.google.android.exoplayer2.source.dash.manifest.UrlTemplate): com.google.android.exoplayer2.source.dash.manifest.UrlTemplate;
								public parseServiceDescription(xpp: org.xmlpull.v1.XmlPullParser): com.google.android.exoplayer2.source.dash.manifest.ServiceDescriptionElement;
								public buildSingleSegmentBase(initialization: com.google.android.exoplayer2.source.dash.manifest.RangedUri, timescale: number, presentationTimeOffset: number, indexStart: number, indexLength: number): com.google.android.exoplayer2.source.dash.manifest.SegmentBase.SingleSegmentBase;
								public static parseFloat(xpp: org.xmlpull.v1.XmlPullParser, name: string, defaultValue: number): number;
								public buildRepresentation(representationInfo: com.google.android.exoplayer2.source.dash.manifest.DashManifestParser.RepresentationInfo, label: string, extraDrmSchemeType: string, extraDrmSchemeDatas: java.util.ArrayList<com.google.android.exoplayer2.drm.DrmInitData.SchemeData>, extraInbandEventStreams: java.util.ArrayList<com.google.android.exoplayer2.source.dash.manifest.Descriptor>): com.google.android.exoplayer2.source.dash.manifest.Representation;
								public endPrefixMapping(prefix: string): void;
								public parseBaseUrl(xpp: org.xmlpull.v1.XmlPullParser, parentBaseUrl: string): string;
								public buildSegmentTimelineElement(startTime: number, duration: number): com.google.android.exoplayer2.source.dash.manifest.SegmentBase.SegmentTimelineElement;
								public startPrefixMapping(prefix: string, uri: string): void;
							}
							export module DashManifestParser {
								export class RepresentationInfo extends java.lang.Object {
									public static class: java.lang.Class<com.google.android.exoplayer2.source.dash.manifest.DashManifestParser.RepresentationInfo>;
									public format: com.google.android.exoplayer2.Format;
									public baseUrl: string;
									public segmentBase: com.google.android.exoplayer2.source.dash.manifest.SegmentBase;
									public drmSchemeType: string;
									public drmSchemeDatas: java.util.ArrayList<com.google.android.exoplayer2.drm.DrmInitData.SchemeData>;
									public inbandEventStreams: java.util.ArrayList<com.google.android.exoplayer2.source.dash.manifest.Descriptor>;
									public revisionId: number;
									public constructor(format: com.google.android.exoplayer2.Format, baseUrl: string, segmentBase: com.google.android.exoplayer2.source.dash.manifest.SegmentBase, drmSchemeType: string, drmSchemeDatas: java.util.ArrayList<com.google.android.exoplayer2.drm.DrmInitData.SchemeData>, inbandEventStreams: java.util.ArrayList<com.google.android.exoplayer2.source.dash.manifest.Descriptor>, revisionId: number);
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
					export module dash {
						export module manifest {
							export class Descriptor extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.dash.manifest.Descriptor>;
								public schemeIdUri: string;
								public value: string;
								public id: string;
								public equals(obj: any): boolean;
								public constructor(schemeIdUri: string, value: string, id: string);
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
					export module dash {
						export module manifest {
							export class EventStream extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.dash.manifest.EventStream>;
								public events: native.Array<com.google.android.exoplayer2.metadata.emsg.EventMessage>;
								public presentationTimesUs: native.Array<number>;
								public schemeIdUri: string;
								public value: string;
								public timescale: number;
								public constructor(schemeIdUri: string, value: string, timescale: number, presentationTimesUs: native.Array<number>, events: native.Array<com.google.android.exoplayer2.metadata.emsg.EventMessage>);
								public id(): string;
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
					export module dash {
						export module manifest {
							export class Period extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.dash.manifest.Period>;
								public id: string;
								public startMs: number;
								public adaptationSets: java.util.List<com.google.android.exoplayer2.source.dash.manifest.AdaptationSet>;
								public eventStreams: java.util.List<com.google.android.exoplayer2.source.dash.manifest.EventStream>;
								public assetIdentifier: com.google.android.exoplayer2.source.dash.manifest.Descriptor;
								public getAdaptationSetIndex(type: number): number;
								public constructor(id: string, startMs: number, adaptationSets: java.util.List<com.google.android.exoplayer2.source.dash.manifest.AdaptationSet>, eventStreams: java.util.List<com.google.android.exoplayer2.source.dash.manifest.EventStream>, assetIdentifier: com.google.android.exoplayer2.source.dash.manifest.Descriptor);
								public constructor(id: string, startMs: number, adaptationSets: java.util.List<com.google.android.exoplayer2.source.dash.manifest.AdaptationSet>, eventStreams: java.util.List<com.google.android.exoplayer2.source.dash.manifest.EventStream>);
								public constructor(id: string, startMs: number, adaptationSets: java.util.List<com.google.android.exoplayer2.source.dash.manifest.AdaptationSet>);
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
					export module dash {
						export module manifest {
							export class ProgramInformation extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.dash.manifest.ProgramInformation>;
								public title: string;
								public source: string;
								public copyright: string;
								public moreInformationURL: string;
								public lang: string;
								public equals(obj: any): boolean;
								public constructor(title: string, source: string, copyright: string, moreInformationURL: string, lang: string);
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
					export module dash {
						export module manifest {
							export class RangedUri extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.dash.manifest.RangedUri>;
								public start: number;
								public length: number;
								public toString(): string;
								public equals(obj: any): boolean;
								public resolveUri(baseUri: string): globalAndroid.net.Uri;
								public constructor(referenceUri: string, start: number, length: number);
								public attemptMerge(other: com.google.android.exoplayer2.source.dash.manifest.RangedUri, baseUri: string): com.google.android.exoplayer2.source.dash.manifest.RangedUri;
								public resolveUriString(baseUri: string): string;
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
					export module dash {
						export module manifest {
							export abstract class Representation extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.dash.manifest.Representation>;
								public static REVISION_ID_DEFAULT: number;
								public revisionId: number;
								public format: com.google.android.exoplayer2.Format;
								public baseUrl: string;
								public presentationTimeOffsetUs: number;
								public inbandEventStreams: java.util.List<com.google.android.exoplayer2.source.dash.manifest.Descriptor>;
								public getIndex(): com.google.android.exoplayer2.source.dash.DashSegmentIndex;
								public getCacheKey(): string;
								public static newInstance(revisionId: number, format: com.google.android.exoplayer2.Format, baseUrl: string, segmentBase: com.google.android.exoplayer2.source.dash.manifest.SegmentBase): com.google.android.exoplayer2.source.dash.manifest.Representation;
								public getInitializationUri(): com.google.android.exoplayer2.source.dash.manifest.RangedUri;
								public static newInstance(revisionId: number, format: com.google.android.exoplayer2.Format, baseUrl: string, segmentBase: com.google.android.exoplayer2.source.dash.manifest.SegmentBase, inbandEventStreams: java.util.List<com.google.android.exoplayer2.source.dash.manifest.Descriptor>, cacheKey: string): com.google.android.exoplayer2.source.dash.manifest.Representation;
								public getIndexUri(): com.google.android.exoplayer2.source.dash.manifest.RangedUri;
								public static newInstance(revisionId: number, format: com.google.android.exoplayer2.Format, baseUrl: string, segmentBase: com.google.android.exoplayer2.source.dash.manifest.SegmentBase, inbandEventStreams: java.util.List<com.google.android.exoplayer2.source.dash.manifest.Descriptor>): com.google.android.exoplayer2.source.dash.manifest.Representation;
							}
							export module Representation {
								export class MultiSegmentRepresentation extends com.google.android.exoplayer2.source.dash.manifest.Representation implements com.google.android.exoplayer2.source.dash.DashSegmentIndex {
									public static class: java.lang.Class<com.google.android.exoplayer2.source.dash.manifest.Representation.MultiSegmentRepresentation>;
									public getSegmentCount(periodDurationUs: number): number;
									public getAvailableSegmentCount(periodDurationUs: number, nowUnixTimeUs: number): number;
									public getCacheKey(): string;
									public getDurationUs(segmentIndex: number, periodDurationUs: number): number;
									public getIndex(): com.google.android.exoplayer2.source.dash.DashSegmentIndex;
									public getSegmentUrl(segmentIndex: number): com.google.android.exoplayer2.source.dash.manifest.RangedUri;
									public getFirstAvailableSegmentNum(periodDurationUs: number, nowUnixTimeUs: number): number;
									public getIndexUri(): com.google.android.exoplayer2.source.dash.manifest.RangedUri;
									public getTimeUs(segmentIndex: number): number;
									public getFirstSegmentNum(): number;
									public getSegmentNum(timeUs: number, periodDurationUs: number): number;
									public constructor(revisionId: number, format: com.google.android.exoplayer2.Format, baseUrl: string, segmentBase: com.google.android.exoplayer2.source.dash.manifest.SegmentBase.MultiSegmentBase, inbandEventStreams: java.util.List<com.google.android.exoplayer2.source.dash.manifest.Descriptor>);
									public isExplicit(): boolean;
									public getNextSegmentAvailableTimeUs(periodDurationUs: number, nowUnixTimeUs: number): number;
								}
								export class SingleSegmentRepresentation extends com.google.android.exoplayer2.source.dash.manifest.Representation {
									public static class: java.lang.Class<com.google.android.exoplayer2.source.dash.manifest.Representation.SingleSegmentRepresentation>;
									public uri: globalAndroid.net.Uri;
									public contentLength: number;
									public getCacheKey(): string;
									public static newInstance(revisionId: number, format: com.google.android.exoplayer2.Format, baseUrl: string, segmentBase: com.google.android.exoplayer2.source.dash.manifest.SegmentBase): com.google.android.exoplayer2.source.dash.manifest.Representation;
									public constructor(revisionId: number, format: com.google.android.exoplayer2.Format, baseUrl: string, segmentBase: com.google.android.exoplayer2.source.dash.manifest.SegmentBase.SingleSegmentBase, inbandEventStreams: java.util.List<com.google.android.exoplayer2.source.dash.manifest.Descriptor>, cacheKey: string, contentLength: number);
									public static newInstance(revisionId: number, format: com.google.android.exoplayer2.Format, baseUrl: string, segmentBase: com.google.android.exoplayer2.source.dash.manifest.SegmentBase, inbandEventStreams: java.util.List<com.google.android.exoplayer2.source.dash.manifest.Descriptor>): com.google.android.exoplayer2.source.dash.manifest.Representation;
									public getIndex(): com.google.android.exoplayer2.source.dash.DashSegmentIndex;
									public static newInstance(revisionId: number, format: com.google.android.exoplayer2.Format, baseUrl: string, segmentBase: com.google.android.exoplayer2.source.dash.manifest.SegmentBase, inbandEventStreams: java.util.List<com.google.android.exoplayer2.source.dash.manifest.Descriptor>, cacheKey: string): com.google.android.exoplayer2.source.dash.manifest.Representation;
									public getIndexUri(): com.google.android.exoplayer2.source.dash.manifest.RangedUri;
									public static newInstance(revisionId: number, format: com.google.android.exoplayer2.Format, uri: string, initializationStart: number, initializationEnd: number, indexStart: number, indexEnd: number, inbandEventStreams: java.util.List<com.google.android.exoplayer2.source.dash.manifest.Descriptor>, cacheKey: string, contentLength: number): com.google.android.exoplayer2.source.dash.manifest.Representation.SingleSegmentRepresentation;
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
					export module dash {
						export module manifest {
							export abstract class SegmentBase extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.dash.manifest.SegmentBase>;
								public getInitialization(representation: com.google.android.exoplayer2.source.dash.manifest.Representation): com.google.android.exoplayer2.source.dash.manifest.RangedUri;
								public getPresentationTimeOffsetUs(): number;
								public constructor(initialization: com.google.android.exoplayer2.source.dash.manifest.RangedUri, timescale: number, presentationTimeOffset: number);
							}
							export module SegmentBase {
								export abstract class MultiSegmentBase extends com.google.android.exoplayer2.source.dash.manifest.SegmentBase {
									public static class: java.lang.Class<com.google.android.exoplayer2.source.dash.manifest.SegmentBase.MultiSegmentBase>;
									public getSegmentUrl(representation0: com.google.android.exoplayer2.source.dash.manifest.Representation, long1: number): com.google.android.exoplayer2.source.dash.manifest.RangedUri;
									public getAvailableSegmentCount(periodDurationUs: number, nowUnixTimeUs: number): number;
									public getFirstSegmentNum(): number;
									public getSegmentCount(long0: number): number;
									public getSegmentNum(timeUs: number, periodDurationUs: number): number;
									public isExplicit(): boolean;
									public getSegmentTimeUs(sequenceNumber: number): number;
									public constructor(initialization: com.google.android.exoplayer2.source.dash.manifest.RangedUri, timescale: number, presentationTimeOffset: number);
									public constructor(initialization: com.google.android.exoplayer2.source.dash.manifest.RangedUri, timescale: number, presentationTimeOffset: number, startNumber: number, duration: number, segmentTimeline: java.util.List<com.google.android.exoplayer2.source.dash.manifest.SegmentBase.SegmentTimelineElement>, availabilityTimeOffsetUs: number, timeShiftBufferDepthUs: number, periodStartUnixTimeUs: number);
									public getFirstAvailableSegmentNum(periodDurationUs: number, nowUnixTimeUs: number): number;
									public getNextSegmentAvailableTimeUs(periodDurationUs: number, nowUnixTimeUs: number): number;
									public getSegmentDurationUs(sequenceNumber: number, periodDurationUs: number): number;
								}
								export class SegmentList extends com.google.android.exoplayer2.source.dash.manifest.SegmentBase.MultiSegmentBase {
									public static class: java.lang.Class<com.google.android.exoplayer2.source.dash.manifest.SegmentBase.SegmentList>;
									public constructor(initialization: com.google.android.exoplayer2.source.dash.manifest.RangedUri, timescale: number, presentationTimeOffset: number, startNumber: number, duration: number, segmentTimeline: java.util.List<com.google.android.exoplayer2.source.dash.manifest.SegmentBase.SegmentTimelineElement>, availabilityTimeOffsetUs: number, mediaSegments: java.util.List<com.google.android.exoplayer2.source.dash.manifest.RangedUri>, timeShiftBufferDepthUs: number, periodStartUnixTimeUs: number);
									public getSegmentCount(periodDurationUs: number): number;
									public getSegmentUrl(representation0: com.google.android.exoplayer2.source.dash.manifest.Representation, long1: number): com.google.android.exoplayer2.source.dash.manifest.RangedUri;
									public getSegmentCount(long0: number): number;
									public isExplicit(): boolean;
									public constructor(initialization: com.google.android.exoplayer2.source.dash.manifest.RangedUri, timescale: number, presentationTimeOffset: number);
									public constructor(initialization: com.google.android.exoplayer2.source.dash.manifest.RangedUri, timescale: number, presentationTimeOffset: number, startNumber: number, duration: number, segmentTimeline: java.util.List<com.google.android.exoplayer2.source.dash.manifest.SegmentBase.SegmentTimelineElement>, availabilityTimeOffsetUs: number, timeShiftBufferDepthUs: number, periodStartUnixTimeUs: number);
									public getSegmentUrl(representation: com.google.android.exoplayer2.source.dash.manifest.Representation, sequenceNumber: number): com.google.android.exoplayer2.source.dash.manifest.RangedUri;
								}
								export class SegmentTemplate extends com.google.android.exoplayer2.source.dash.manifest.SegmentBase.MultiSegmentBase {
									public static class: java.lang.Class<com.google.android.exoplayer2.source.dash.manifest.SegmentBase.SegmentTemplate>;
									public getSegmentCount(periodDurationUs: number): number;
									public getSegmentUrl(representation0: com.google.android.exoplayer2.source.dash.manifest.Representation, long1: number): com.google.android.exoplayer2.source.dash.manifest.RangedUri;
									public getSegmentCount(long0: number): number;
									public constructor(initialization: com.google.android.exoplayer2.source.dash.manifest.RangedUri, timescale: number, presentationTimeOffset: number);
									public constructor(initialization: com.google.android.exoplayer2.source.dash.manifest.RangedUri, timescale: number, presentationTimeOffset: number, startNumber: number, endNumber: number, duration: number, segmentTimeline: java.util.List<com.google.android.exoplayer2.source.dash.manifest.SegmentBase.SegmentTimelineElement>, availabilityTimeOffsetUs: number, initializationTemplate: com.google.android.exoplayer2.source.dash.manifest.UrlTemplate, mediaTemplate: com.google.android.exoplayer2.source.dash.manifest.UrlTemplate, timeShiftBufferDepthUs: number, periodStartUnixTimeUs: number);
									public constructor(initialization: com.google.android.exoplayer2.source.dash.manifest.RangedUri, timescale: number, presentationTimeOffset: number, startNumber: number, duration: number, segmentTimeline: java.util.List<com.google.android.exoplayer2.source.dash.manifest.SegmentBase.SegmentTimelineElement>, availabilityTimeOffsetUs: number, timeShiftBufferDepthUs: number, periodStartUnixTimeUs: number);
									public getInitialization(representation: com.google.android.exoplayer2.source.dash.manifest.Representation): com.google.android.exoplayer2.source.dash.manifest.RangedUri;
									public getSegmentUrl(representation: com.google.android.exoplayer2.source.dash.manifest.Representation, sequenceNumber: number): com.google.android.exoplayer2.source.dash.manifest.RangedUri;
								}
								export class SegmentTimelineElement extends java.lang.Object {
									public static class: java.lang.Class<com.google.android.exoplayer2.source.dash.manifest.SegmentBase.SegmentTimelineElement>;
									public equals(o: any): boolean;
									public constructor(startTime: number, duration: number);
									public hashCode(): number;
									public equals(obj: any): boolean;
								}
								export class SingleSegmentBase extends com.google.android.exoplayer2.source.dash.manifest.SegmentBase {
									public static class: java.lang.Class<com.google.android.exoplayer2.source.dash.manifest.SegmentBase.SingleSegmentBase>;
									public constructor();
									public constructor(initialization: com.google.android.exoplayer2.source.dash.manifest.RangedUri, timescale: number, presentationTimeOffset: number);
									public getIndex(): com.google.android.exoplayer2.source.dash.manifest.RangedUri;
									public constructor(initialization: com.google.android.exoplayer2.source.dash.manifest.RangedUri, timescale: number, presentationTimeOffset: number, indexStart: number, indexLength: number);
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
					export module dash {
						export module manifest {
							export class ServiceDescriptionElement extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.dash.manifest.ServiceDescriptionElement>;
								public targetOffsetMs: number;
								public minOffsetMs: number;
								public maxOffsetMs: number;
								public minPlaybackSpeed: number;
								public maxPlaybackSpeed: number;
								public constructor(targetOffsetMs: number, minOffsetMs: number, maxOffsetMs: number, minPlaybackSpeed: number, maxPlaybackSpeed: number);
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
					export module dash {
						export module manifest {
							export class SingleSegmentIndex extends java.lang.Object implements com.google.android.exoplayer2.source.dash.DashSegmentIndex {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.dash.manifest.SingleSegmentIndex>;
								public getTimeUs(segmentNum: number): number;
								public getSegmentNum(timeUs: number, periodDurationUs: number): number;
								public isExplicit(): boolean;
								public getDurationUs(segmentNum: number, periodDurationUs: number): number;
								public constructor(uri: com.google.android.exoplayer2.source.dash.manifest.RangedUri);
								public getSegmentUrl(segmentNum: number): com.google.android.exoplayer2.source.dash.manifest.RangedUri;
								public getFirstSegmentNum(): number;
								public getSegmentCount(periodDurationUs: number): number;
								public getAvailableSegmentCount(periodDurationUs: number, nowUnixTimeUs: number): number;
								public getNextSegmentAvailableTimeUs(periodDurationUs: number, nowUnixTimeUs: number): number;
								public getFirstAvailableSegmentNum(periodDurationUs: number, nowUnixTimeUs: number): number;
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
					export module dash {
						export module manifest {
							export class UrlTemplate extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.dash.manifest.UrlTemplate>;
								public buildUri(representationId: string, segmentNumber: number, bandwidth: number, time: number): string;
								public static compile(template: string): com.google.android.exoplayer2.source.dash.manifest.UrlTemplate;
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
					export module dash {
						export module manifest {
							export class UtcTimingElement extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.dash.manifest.UtcTimingElement>;
								public schemeIdUri: string;
								public value: string;
								public toString(): string;
								public constructor(schemeIdUri: string, value: string);
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
					export module dash {
						export module offline {
							export class DashDownloader extends com.google.android.exoplayer2.offline.SegmentDownloader<com.google.android.exoplayer2.source.dash.manifest.DashManifest> {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.dash.offline.DashDownloader>;
								/** @deprecated */
								public constructor(manifestUri: globalAndroid.net.Uri, streamKeys: java.util.List<com.google.android.exoplayer2.offline.StreamKey>, cacheDataSourceFactory: com.google.android.exoplayer2.upstream.cache.CacheDataSource.Factory, executor: java.util.concurrent.Executor);
								public constructor(mediaItem: com.google.android.exoplayer2.MediaItem, cacheDataSourceFactory: com.google.android.exoplayer2.upstream.cache.CacheDataSource.Factory);
								/** @deprecated */
								public constructor(manifestUri: globalAndroid.net.Uri, streamKeys: java.util.List<com.google.android.exoplayer2.offline.StreamKey>, cacheDataSourceFactory: com.google.android.exoplayer2.upstream.cache.CacheDataSource.Factory);
								public constructor(mediaItem: com.google.android.exoplayer2.MediaItem, cacheDataSourceFactory: com.google.android.exoplayer2.upstream.cache.CacheDataSource.Factory, executor: java.util.concurrent.Executor);
								public cancel(): void;
								public getSegments(dataSource: com.google.android.exoplayer2.upstream.DataSource, manifest: com.google.android.exoplayer2.source.dash.manifest.DashManifest, removing: boolean): java.util.List<com.google.android.exoplayer2.offline.SegmentDownloader.Segment>;
								public constructor(mediaItem: com.google.android.exoplayer2.MediaItem, manifestParser: com.google.android.exoplayer2.upstream.ParsingLoadable.Parser<com.google.android.exoplayer2.source.dash.manifest.DashManifest>, cacheDataSourceFactory: com.google.android.exoplayer2.upstream.cache.CacheDataSource.Factory, executor: java.util.concurrent.Executor);
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

