declare module com {
	export module google {
		export module android {
			export module exoplayer2 {
				export module transformer {
					export class BuildConfig extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.transformer.BuildConfig>;
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
				export module transformer {
					export class FrameworkMuxer extends java.lang.Object implements com.google.android.exoplayer2.transformer.Muxer {
						public static class: java.lang.Class<com.google.android.exoplayer2.transformer.FrameworkMuxer>;
						public supportsSampleMimeType(mimeType: string): boolean;
						public addTrack(format: com.google.android.exoplayer2.Format): number;
						public writeSampleData(trackIndex: number, data: java.nio.ByteBuffer, isKeyFrame: boolean, presentationTimeUs: number): void;
						public release(forCancellation: boolean): void;
					}
					export module FrameworkMuxer {
						export class Factory extends java.lang.Object implements com.google.android.exoplayer2.transformer.Muxer.Factory {
							public static class: java.lang.Class<com.google.android.exoplayer2.transformer.FrameworkMuxer.Factory>;
							public constructor();
							public create(parcelFileDescriptor: globalAndroid.os.ParcelFileDescriptor, outputMimeType: string): com.google.android.exoplayer2.transformer.FrameworkMuxer;
							public supportsOutputMimeType(mimeType: string): boolean;
							public create(string0: string, string1: string): com.google.android.exoplayer2.transformer.Muxer;
							public create(parcelFileDescriptor0: globalAndroid.os.ParcelFileDescriptor, string1: string): com.google.android.exoplayer2.transformer.Muxer;
							public create(path: string, outputMimeType: string): com.google.android.exoplayer2.transformer.FrameworkMuxer;
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
				export module transformer {
					export class MediaCodecAdapterWrapper extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.transformer.MediaCodecAdapterWrapper>;
						public queueInputBuffer(inputBuffer: com.google.android.exoplayer2.decoder.DecoderInputBuffer): void;
						public getOutputBuffer(): java.nio.ByteBuffer;
						public getOutputFormat(): com.google.android.exoplayer2.Format;
						public static createForAudioEncoding(format: com.google.android.exoplayer2.Format): com.google.android.exoplayer2.transformer.MediaCodecAdapterWrapper;
						public static createForAudioDecoding(format: com.google.android.exoplayer2.Format): com.google.android.exoplayer2.transformer.MediaCodecAdapterWrapper;
						public releaseOutputBuffer(): void;
						public isEnded(): boolean;
						public release(): void;
						public maybeDequeueInputBuffer(inputBuffer: com.google.android.exoplayer2.decoder.DecoderInputBuffer): boolean;
						public getOutputBufferInfo(): globalAndroid.media.MediaCodec.BufferInfo;
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
				export module transformer {
					export class Muxer extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.transformer.Muxer>;
						/**
						 * Constructs a new instance of the com.google.android.exoplayer2.transformer.Muxer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							supportsSampleMimeType(string0: string): boolean;
							addTrack(format0: com.google.android.exoplayer2.Format): number;
							writeSampleData(int0: number, byteBuffer1: java.nio.ByteBuffer, boolean2: boolean, long3: number): void;
							release(boolean0: boolean): void;
						});
						public constructor();
						public supportsSampleMimeType(string0: string): boolean;
						public writeSampleData(int0: number, byteBuffer1: java.nio.ByteBuffer, boolean2: boolean, long3: number): void;
						public release(boolean0: boolean): void;
						public addTrack(format0: com.google.android.exoplayer2.Format): number;
					}
					export module Muxer {
						export class Factory extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.transformer.Muxer.Factory>;
							/**
							 * Constructs a new instance of the com.google.android.exoplayer2.transformer.Muxer() when extending the interface class.
							 */
							public constructor(implementation: {
								create(string0: string, string1: string): com.google.android.exoplayer2.transformer.Muxer;
								create(parcelFileDescriptor0: globalAndroid.os.ParcelFileDescriptor, string1: string): com.google.android.exoplayer2.transformer.Muxer;
								supportsOutputMimeType(string0: string): boolean;
							});
							public constructor();
							public create(string0: string, string1: string): com.google.android.exoplayer2.transformer.Muxer;
							public create(parcelFileDescriptor0: globalAndroid.os.ParcelFileDescriptor, string1: string): com.google.android.exoplayer2.transformer.Muxer;
							public supportsOutputMimeType(string0: string): boolean;
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
				export module transformer {
					export class MuxerWrapper extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.transformer.MuxerWrapper>;
						public addTrackFormat(format: com.google.android.exoplayer2.Format): void;
						public endTrack(trackType: number): void;
						public constructor(muxer: com.google.android.exoplayer2.transformer.Muxer);
						public supportsSampleMimeType(mimeType: string): boolean;
						public registerTrack(): void;
						public writeSample(trackType: number, data: java.nio.ByteBuffer, isKeyFrame: boolean, presentationTimeUs: number): boolean;
						public getTrackCount(): number;
						public release(forCancellation: boolean): void;
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
				export module transformer {
					export class ProgressHolder extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.transformer.ProgressHolder>;
						public progress: number;
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
				export module transformer {
					export class SampleTransformer extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.transformer.SampleTransformer>;
						/**
						 * Constructs a new instance of the com.google.android.exoplayer2.transformer.SampleTransformer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							transformSample(decoderInputBuffer0: com.google.android.exoplayer2.decoder.DecoderInputBuffer): void;
						});
						public constructor();
						public transformSample(decoderInputBuffer0: com.google.android.exoplayer2.decoder.DecoderInputBuffer): void;
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
				export module transformer {
					export class SefSlowMotionVideoSampleTransformer extends java.lang.Object implements com.google.android.exoplayer2.transformer.SampleTransformer {
						public static class: java.lang.Class<com.google.android.exoplayer2.transformer.SefSlowMotionVideoSampleTransformer>;
						public transformSample(buffer: com.google.android.exoplayer2.decoder.DecoderInputBuffer): void;
						public constructor(format: com.google.android.exoplayer2.Format);
					}
					export module SefSlowMotionVideoSampleTransformer {
						export class MetadataInfo extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.transformer.SefSlowMotionVideoSampleTransformer.MetadataInfo>;
							public captureFrameRate: number;
							public inputMaxLayer: number;
							public normalSpeedMaxLayer: number;
							public slowMotionData: com.google.android.exoplayer2.metadata.mp4.SlowMotionData;
							public constructor();
						}
						export class SegmentInfo extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.transformer.SefSlowMotionVideoSampleTransformer.SegmentInfo>;
							public startTimeUs: number;
							public endTimeUs: number;
							public speedDivisor: number;
							public maxLayer: number;
							public constructor(segment: com.google.android.exoplayer2.metadata.mp4.SlowMotionData.Segment, inputMaxLayer: number, normalSpeedLayer: number);
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
				export module transformer {
					export class SegmentSpeedProvider extends java.lang.Object implements com.google.android.exoplayer2.transformer.SpeedProvider {
						public static class: java.lang.Class<com.google.android.exoplayer2.transformer.SegmentSpeedProvider>;
						public constructor(format: com.google.android.exoplayer2.Format);
						public getSpeed(timeUs: number): number;
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
				export module transformer {
					export class SpeedProvider extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.transformer.SpeedProvider>;
						/**
						 * Constructs a new instance of the com.google.android.exoplayer2.transformer.SpeedProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getSpeed(long0: number): number;
						});
						public constructor();
						public getSpeed(long0: number): number;
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
				export module transformer {
					export class Transformation extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.transformer.Transformation>;
						public removeAudio: boolean;
						public removeVideo: boolean;
						public flattenForSlowMotion: boolean;
						public outputMimeType: string;
						public constructor(removeAudio: boolean, removeVideo: boolean, flattenForSlowMotion: boolean, outputMimeType: string);
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
				export module transformer {
					export class Transformer extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.transformer.Transformer>;
						public static PROGRESS_STATE_WAITING_FOR_AVAILABILITY: number;
						public static PROGRESS_STATE_AVAILABLE: number;
						public static PROGRESS_STATE_UNAVAILABLE: number;
						public static PROGRESS_STATE_NO_TRANSFORMATION: number;
						public setListener(listener: com.google.android.exoplayer2.transformer.Transformer.Listener): void;
						public getProgress(progressHolder: com.google.android.exoplayer2.transformer.ProgressHolder): number;
						public startTransformation(mediaItem: com.google.android.exoplayer2.MediaItem, path: string): void;
						public cancel(): void;
						public startTransformation(mediaItem: com.google.android.exoplayer2.MediaItem, parcelFileDescriptor: globalAndroid.os.ParcelFileDescriptor): void;
						public getApplicationLooper(): globalAndroid.os.Looper;
						public buildUpon(): com.google.android.exoplayer2.transformer.Transformer.Builder;
					}
					export module Transformer {
						export class Builder extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.transformer.Transformer.Builder>;
							public constructor();
							public setFlattenForSlowMotion(flattenForSlowMotion: boolean): com.google.android.exoplayer2.transformer.Transformer.Builder;
							public setListener(listener: com.google.android.exoplayer2.transformer.Transformer.Listener): com.google.android.exoplayer2.transformer.Transformer.Builder;
							public setMediaSourceFactory(mediaSourceFactory: com.google.android.exoplayer2.source.MediaSourceFactory): com.google.android.exoplayer2.transformer.Transformer.Builder;
							public setRemoveAudio(removeAudio: boolean): com.google.android.exoplayer2.transformer.Transformer.Builder;
							public setRemoveVideo(removeVideo: boolean): com.google.android.exoplayer2.transformer.Transformer.Builder;
							public setOutputMimeType(outputMimeType: string): com.google.android.exoplayer2.transformer.Transformer.Builder;
							public setContext(context: globalAndroid.content.Context): com.google.android.exoplayer2.transformer.Transformer.Builder;
							public setLooper(looper: globalAndroid.os.Looper): com.google.android.exoplayer2.transformer.Transformer.Builder;
							public build(): com.google.android.exoplayer2.transformer.Transformer;
						}
						export class Listener extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.transformer.Transformer.Listener>;
							/**
							 * Constructs a new instance of the com.google.android.exoplayer2.transformer.Transformer() when extending the interface class.
							 */
							public constructor(implementation: {
								onTransformationCompleted(inputMediaItem: com.google.android.exoplayer2.MediaItem): void;
								onTransformationError(inputMediaItem: com.google.android.exoplayer2.MediaItem, exception: java.lang.Exception): void;
							});
							public constructor();
							public onTransformationCompleted(inputMediaItem: com.google.android.exoplayer2.MediaItem): void;
							public onTransformationError(inputMediaItem: com.google.android.exoplayer2.MediaItem, exception: java.lang.Exception): void;
						}
						export class ProgressState extends java.lang.Object implements java.lang.annotation.Annotation {
							public static class: java.lang.Class<com.google.android.exoplayer2.transformer.Transformer.ProgressState>;
							/**
							 * Constructs a new instance of the com.google.android.exoplayer2.transformer.Transformer() when extending the interface class.
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
						export class TransformerAnalyticsListener extends java.lang.Object implements com.google.android.exoplayer2.analytics.AnalyticsListener {
							public static class: java.lang.Class<com.google.android.exoplayer2.transformer.Transformer.TransformerAnalyticsListener>;
							public onDrmSessionManagerError(eventTime: com.google.android.exoplayer2.analytics.AnalyticsListener.EventTime, error: java.lang.Exception): void;
							public onTimelineChanged(eventTime: com.google.android.exoplayer2.analytics.AnalyticsListener.EventTime, reason: number): void;
							public onDownstreamFormatChanged(eventTime: com.google.android.exoplayer2.analytics.AnalyticsListener.EventTime, mediaLoadData: com.google.android.exoplayer2.source.MediaLoadData): void;
							public onAudioEnabled(eventTime: com.google.android.exoplayer2.analytics.AnalyticsListener.EventTime, counters: com.google.android.exoplayer2.decoder.DecoderCounters): void;
							public onVideoSizeChanged(eventTime: com.google.android.exoplayer2.analytics.AnalyticsListener.EventTime, width: number, height: number, unappliedRotationDegrees: number, pixelWidthHeightRatio: number): void;
							public onAudioSessionIdChanged(eventTime: com.google.android.exoplayer2.analytics.AnalyticsListener.EventTime, audioSessionId: number): void;
							public onAudioSinkError(eventTime: com.google.android.exoplayer2.analytics.AnalyticsListener.EventTime, audioSinkError: java.lang.Exception): void;
							public onDrmKeysRemoved(eventTime: com.google.android.exoplayer2.analytics.AnalyticsListener.EventTime): void;
							/** @deprecated */
							public onAudioInputFormatChanged(eventTime: com.google.android.exoplayer2.analytics.AnalyticsListener.EventTime, format: com.google.android.exoplayer2.Format): void;
							public onAudioInputFormatChanged(eventTime: com.google.android.exoplayer2.analytics.AnalyticsListener.EventTime, format: com.google.android.exoplayer2.Format, decoderReuseEvaluation: com.google.android.exoplayer2.decoder.DecoderReuseEvaluation): void;
							public constructor(param0: com.google.android.exoplayer2.transformer.Transformer, mediaItem: com.google.android.exoplayer2.MediaItem, muxerWrapper: com.google.android.exoplayer2.transformer.MuxerWrapper);
							public onVolumeChanged(eventTime: com.google.android.exoplayer2.analytics.AnalyticsListener.EventTime, volume: number): void;
							/** @deprecated */
							public onVideoInputFormatChanged(eventTime: com.google.android.exoplayer2.analytics.AnalyticsListener.EventTime, format: com.google.android.exoplayer2.Format): void;
							public onPlayerReleased(eventTime: com.google.android.exoplayer2.analytics.AnalyticsListener.EventTime): void;
							public onAudioDisabled(eventTime: com.google.android.exoplayer2.analytics.AnalyticsListener.EventTime, counters: com.google.android.exoplayer2.decoder.DecoderCounters): void;
							public onShuffleModeChanged(eventTime: com.google.android.exoplayer2.analytics.AnalyticsListener.EventTime, shuffleModeEnabled: boolean): void;
							public onDrmKeysLoaded(eventTime: com.google.android.exoplayer2.analytics.AnalyticsListener.EventTime): void;
							public onMetadata(eventTime: com.google.android.exoplayer2.analytics.AnalyticsListener.EventTime, metadata: com.google.android.exoplayer2.metadata.Metadata): void;
							public onAudioDecoderInitialized(eventTime: com.google.android.exoplayer2.analytics.AnalyticsListener.EventTime, decoderName: string, initializationDurationMs: number): void;
							public onAudioAttributesChanged(eventTime: com.google.android.exoplayer2.analytics.AnalyticsListener.EventTime, audioAttributes: com.google.android.exoplayer2.audio.AudioAttributes): void;
							public onPositionDiscontinuity(eventTime: com.google.android.exoplayer2.analytics.AnalyticsListener.EventTime, reason: number): void;
							/** @deprecated */
							public onDecoderInputFormatChanged(eventTime: com.google.android.exoplayer2.analytics.AnalyticsListener.EventTime, trackType: number, format: com.google.android.exoplayer2.Format): void;
							public onSurfaceSizeChanged(eventTime: com.google.android.exoplayer2.analytics.AnalyticsListener.EventTime, width: number, height: number): void;
							/** @deprecated */
							public onDecoderEnabled(eventTime: com.google.android.exoplayer2.analytics.AnalyticsListener.EventTime, trackType: number, decoderCounters: com.google.android.exoplayer2.decoder.DecoderCounters): void;
							public onPlayerError(eventTime: com.google.android.exoplayer2.analytics.AnalyticsListener.EventTime, error: com.google.android.exoplayer2.ExoPlaybackException): void;
							/** @deprecated */
							public onPlayerStateChanged(eventTime: com.google.android.exoplayer2.analytics.AnalyticsListener.EventTime, playWhenReady: boolean, playbackState: number): void;
							public onLoadCanceled(eventTime: com.google.android.exoplayer2.analytics.AnalyticsListener.EventTime, loadEventInfo: com.google.android.exoplayer2.source.LoadEventInfo, mediaLoadData: com.google.android.exoplayer2.source.MediaLoadData): void;
							public onDrmSessionReleased(eventTime: com.google.android.exoplayer2.analytics.AnalyticsListener.EventTime): void;
							public onMediaItemTransition(eventTime: com.google.android.exoplayer2.analytics.AnalyticsListener.EventTime, mediaItem: com.google.android.exoplayer2.MediaItem, reason: number): void;
							public onLoadError(eventTime: com.google.android.exoplayer2.analytics.AnalyticsListener.EventTime, loadEventInfo: com.google.android.exoplayer2.source.LoadEventInfo, mediaLoadData: com.google.android.exoplayer2.source.MediaLoadData, error: java.io.IOException, wasCanceled: boolean): void;
							public onVideoDecoderReleased(eventTime: com.google.android.exoplayer2.analytics.AnalyticsListener.EventTime, decoderName: string): void;
							public onPlaybackSuppressionReasonChanged(eventTime: com.google.android.exoplayer2.analytics.AnalyticsListener.EventTime, playbackSuppressionReason: number): void;
							public onRenderedFirstFrame(eventTime: com.google.android.exoplayer2.analytics.AnalyticsListener.EventTime, surface: globalAndroid.view.Surface): void;
							public onVideoInputFormatChanged(eventTime: com.google.android.exoplayer2.analytics.AnalyticsListener.EventTime, format: com.google.android.exoplayer2.Format, decoderReuseEvaluation: com.google.android.exoplayer2.decoder.DecoderReuseEvaluation): void;
							public onTracksChanged(eventTime: com.google.android.exoplayer2.analytics.AnalyticsListener.EventTime, trackGroups: com.google.android.exoplayer2.source.TrackGroupArray, trackSelections: com.google.android.exoplayer2.trackselection.TrackSelectionArray): void;
							/** @deprecated */
							public onLoadingChanged(eventTime: com.google.android.exoplayer2.analytics.AnalyticsListener.EventTime, isLoading: boolean): void;
							public onSkipSilenceEnabledChanged(eventTime: com.google.android.exoplayer2.analytics.AnalyticsListener.EventTime, skipSilenceEnabled: boolean): void;
							public onAudioDecoderReleased(eventTime: com.google.android.exoplayer2.analytics.AnalyticsListener.EventTime, decoderName: string): void;
							public onAudioPositionAdvancing(eventTime: com.google.android.exoplayer2.analytics.AnalyticsListener.EventTime, playoutStartSystemTimeMs: number): void;
							public onUpstreamDiscarded(eventTime: com.google.android.exoplayer2.analytics.AnalyticsListener.EventTime, mediaLoadData: com.google.android.exoplayer2.source.MediaLoadData): void;
							public onPlayWhenReadyChanged(eventTime: com.google.android.exoplayer2.analytics.AnalyticsListener.EventTime, playWhenReady: boolean, reason: number): void;
							public onDroppedVideoFrames(eventTime: com.google.android.exoplayer2.analytics.AnalyticsListener.EventTime, droppedFrames: number, elapsedMs: number): void;
							public onRepeatModeChanged(eventTime: com.google.android.exoplayer2.analytics.AnalyticsListener.EventTime, repeatMode: number): void;
							/** @deprecated */
							public onDecoderDisabled(eventTime: com.google.android.exoplayer2.analytics.AnalyticsListener.EventTime, trackType: number, decoderCounters: com.google.android.exoplayer2.decoder.DecoderCounters): void;
							public onPlaybackStateChanged(eventTime: com.google.android.exoplayer2.analytics.AnalyticsListener.EventTime, state: number): void;
							public onVideoEnabled(eventTime: com.google.android.exoplayer2.analytics.AnalyticsListener.EventTime, counters: com.google.android.exoplayer2.decoder.DecoderCounters): void;
							public onVideoFrameProcessingOffset(eventTime: com.google.android.exoplayer2.analytics.AnalyticsListener.EventTime, totalProcessingOffsetUs: number, frameCount: number): void;
							public onLoadStarted(eventTime: com.google.android.exoplayer2.analytics.AnalyticsListener.EventTime, loadEventInfo: com.google.android.exoplayer2.source.LoadEventInfo, mediaLoadData: com.google.android.exoplayer2.source.MediaLoadData): void;
							public onPlaybackParametersChanged(eventTime: com.google.android.exoplayer2.analytics.AnalyticsListener.EventTime, playbackParameters: com.google.android.exoplayer2.PlaybackParameters): void;
							public onStaticMetadataChanged(eventTime: com.google.android.exoplayer2.analytics.AnalyticsListener.EventTime, metadataList: java.util.List<com.google.android.exoplayer2.metadata.Metadata>): void;
							public onLoadCompleted(eventTime: com.google.android.exoplayer2.analytics.AnalyticsListener.EventTime, loadEventInfo: com.google.android.exoplayer2.source.LoadEventInfo, mediaLoadData: com.google.android.exoplayer2.source.MediaLoadData): void;
							public onEvents(player: com.google.android.exoplayer2.Player, events: com.google.android.exoplayer2.analytics.AnalyticsListener.Events): void;
							/** @deprecated */
							public onDecoderInitialized(eventTime: com.google.android.exoplayer2.analytics.AnalyticsListener.EventTime, trackType: number, decoderName: string, initializationDurationMs: number): void;
							public onVideoDisabled(eventTime: com.google.android.exoplayer2.analytics.AnalyticsListener.EventTime, counters: com.google.android.exoplayer2.decoder.DecoderCounters): void;
							public onDrmKeysRestored(eventTime: com.google.android.exoplayer2.analytics.AnalyticsListener.EventTime): void;
							public onIsPlayingChanged(eventTime: com.google.android.exoplayer2.analytics.AnalyticsListener.EventTime, isPlaying: boolean): void;
							public onIsLoadingChanged(eventTime: com.google.android.exoplayer2.analytics.AnalyticsListener.EventTime, isLoading: boolean): void;
							public onAudioUnderrun(eventTime: com.google.android.exoplayer2.analytics.AnalyticsListener.EventTime, bufferSize: number, bufferSizeMs: number, elapsedSinceLastFeedMs: number): void;
							public onDrmSessionAcquired(eventTime: com.google.android.exoplayer2.analytics.AnalyticsListener.EventTime): void;
							public onVideoDecoderInitialized(eventTime: com.google.android.exoplayer2.analytics.AnalyticsListener.EventTime, decoderName: string, initializationDurationMs: number): void;
							public onBandwidthEstimate(eventTime: com.google.android.exoplayer2.analytics.AnalyticsListener.EventTime, totalLoadTimeMs: number, totalBytesLoaded: number, bitrateEstimate: number): void;
							/** @deprecated */
							public onSeekProcessed(eventTime: com.google.android.exoplayer2.analytics.AnalyticsListener.EventTime): void;
							public onSeekStarted(eventTime: com.google.android.exoplayer2.analytics.AnalyticsListener.EventTime): void;
						}
						export class TransformerRenderersFactory extends java.lang.Object implements com.google.android.exoplayer2.RenderersFactory {
							public static class: java.lang.Class<com.google.android.exoplayer2.transformer.Transformer.TransformerRenderersFactory>;
							public constructor(muxerWrapper: com.google.android.exoplayer2.transformer.MuxerWrapper, transformation: com.google.android.exoplayer2.transformer.Transformation);
							public createRenderers(eventHandler: globalAndroid.os.Handler, videoRendererEventListener: com.google.android.exoplayer2.video.VideoRendererEventListener, audioRendererEventListener: com.google.android.exoplayer2.audio.AudioRendererEventListener, textRendererOutput: com.google.android.exoplayer2.text.TextOutput, metadataRendererOutput: com.google.android.exoplayer2.metadata.MetadataOutput): native.Array<com.google.android.exoplayer2.Renderer>;
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
				export module transformer {
					export class TransformerAudioRenderer extends com.google.android.exoplayer2.transformer.TransformerBaseRenderer {
						public static class: java.lang.Class<com.google.android.exoplayer2.transformer.TransformerAudioRenderer>;
						public render(positionUs: number, elapsedRealtimeUs: number): void;
						public supportsFormat(format: com.google.android.exoplayer2.Format): number;
						public constructor(muxerWrapper: com.google.android.exoplayer2.transformer.MuxerWrapper, mediaClock: com.google.android.exoplayer2.transformer.TransformerMediaClock, transformation: com.google.android.exoplayer2.transformer.Transformation);
						public getName(): string;
						public static getFormatSupport(supportFlags: number): number;
						public getMediaClock(): com.google.android.exoplayer2.util.MediaClock;
						public isCurrentStreamFinal(): boolean;
						public resetPosition(positionUs: number): void;
						public constructor(trackType: number);
						public static create(formatSupport: number, adaptiveSupport: number, tunnelingSupport: number): number;
						public setPlaybackSpeed(currentPlaybackSpeed: number, targetPlaybackSpeed: number): void;
						public getStream(): com.google.android.exoplayer2.source.SampleStream;
						public static create(formatSupport: number): number;
						public static getAdaptiveSupport(supportFlags: number): number;
						public isEnded(): boolean;
						public getCapabilities(): com.google.android.exoplayer2.RendererCapabilities;
						public static getTunnelingSupport(supportFlags: number): number;
						public setCurrentStreamFinal(): void;
						public constructor(trackType: number, muxerWrapper: com.google.android.exoplayer2.transformer.MuxerWrapper, mediaClock: com.google.android.exoplayer2.transformer.TransformerMediaClock, transformation: com.google.android.exoplayer2.transformer.Transformation);
						public hasReadStreamToEnd(): boolean;
						public enable(configuration: com.google.android.exoplayer2.RendererConfiguration, formats: native.Array<com.google.android.exoplayer2.Format>, stream: com.google.android.exoplayer2.source.SampleStream, positionUs: number, joining: boolean, mayRenderStartOfStream: boolean, startPositionUs: number, offsetUs: number): void;
						public isReady(): boolean;
						public disable(): void;
						public getTrackType(): number;
						public supportsMixedMimeTypeAdaptation(): number;
						public stop(): void;
						public start(): void;
						public setIndex(index: number): void;
						public getState(): number;
						public maybeThrowStreamError(): void;
						public onReset(): void;
						public getReadingPositionUs(): number;
						public reset(): void;
						public replaceStream(formats: native.Array<com.google.android.exoplayer2.Format>, stream: com.google.android.exoplayer2.source.SampleStream, startPositionUs: number, offsetUs: number): void;
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
				export module transformer {
					export abstract class TransformerBaseRenderer extends com.google.android.exoplayer2.BaseRenderer {
						public static class: java.lang.Class<com.google.android.exoplayer2.transformer.TransformerBaseRenderer>;
						public muxerWrapper: com.google.android.exoplayer2.transformer.MuxerWrapper;
						public mediaClock: com.google.android.exoplayer2.transformer.TransformerMediaClock;
						public transformation: com.google.android.exoplayer2.transformer.Transformation;
						public isRendererStarted: boolean;
						public supportsFormat(format: com.google.android.exoplayer2.Format): number;
						public onStarted(): void;
						public getName(): string;
						public static getFormatSupport(supportFlags: number): number;
						public getMediaClock(): com.google.android.exoplayer2.util.MediaClock;
						public isCurrentStreamFinal(): boolean;
						public resetPosition(positionUs: number): void;
						public constructor(trackType: number);
						public static create(formatSupport: number, adaptiveSupport: number, tunnelingSupport: number): number;
						public setPlaybackSpeed(currentPlaybackSpeed: number, targetPlaybackSpeed: number): void;
						public getStream(): com.google.android.exoplayer2.source.SampleStream;
						public static create(formatSupport: number): number;
						public static getAdaptiveSupport(supportFlags: number): number;
						public isEnded(): boolean;
						public getCapabilities(): com.google.android.exoplayer2.RendererCapabilities;
						public static getTunnelingSupport(supportFlags: number): number;
						public setCurrentStreamFinal(): void;
						public constructor(trackType: number, muxerWrapper: com.google.android.exoplayer2.transformer.MuxerWrapper, mediaClock: com.google.android.exoplayer2.transformer.TransformerMediaClock, transformation: com.google.android.exoplayer2.transformer.Transformation);
						public onEnabled(joining: boolean, mayRenderStartOfStream: boolean): void;
						public hasReadStreamToEnd(): boolean;
						public isReady(): boolean;
						public enable(configuration: com.google.android.exoplayer2.RendererConfiguration, formats: native.Array<com.google.android.exoplayer2.Format>, stream: com.google.android.exoplayer2.source.SampleStream, positionUs: number, joining: boolean, mayRenderStartOfStream: boolean, startPositionUs: number, offsetUs: number): void;
						public disable(): void;
						public getTrackType(): number;
						public supportsMixedMimeTypeAdaptation(): number;
						public stop(): void;
						public start(): void;
						public setIndex(index: number): void;
						public render(long0: number, long1: number): void;
						public getState(): number;
						public maybeThrowStreamError(): void;
						public onStopped(): void;
						public getReadingPositionUs(): number;
						public reset(): void;
						public replaceStream(formats: native.Array<com.google.android.exoplayer2.Format>, stream: com.google.android.exoplayer2.source.SampleStream, startPositionUs: number, offsetUs: number): void;
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
				export module transformer {
					export class TransformerMediaClock extends java.lang.Object implements com.google.android.exoplayer2.util.MediaClock {
						public static class: java.lang.Class<com.google.android.exoplayer2.transformer.TransformerMediaClock>;
						public getPositionUs(): number;
						public constructor();
						public getPlaybackParameters(): com.google.android.exoplayer2.PlaybackParameters;
						public setPlaybackParameters(playbackParameters: com.google.android.exoplayer2.PlaybackParameters): void;
						public updateTimeForTrackType(trackType: number, timeUs: number): void;
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
				export module transformer {
					export class TransformerVideoRenderer extends com.google.android.exoplayer2.transformer.TransformerBaseRenderer {
						public static class: java.lang.Class<com.google.android.exoplayer2.transformer.TransformerVideoRenderer>;
						public render(positionUs: number, elapsedRealtimeUs: number): void;
						public supportsFormat(format: com.google.android.exoplayer2.Format): number;
						public constructor(muxerWrapper: com.google.android.exoplayer2.transformer.MuxerWrapper, mediaClock: com.google.android.exoplayer2.transformer.TransformerMediaClock, transformation: com.google.android.exoplayer2.transformer.Transformation);
						public getName(): string;
						public static getFormatSupport(supportFlags: number): number;
						public getMediaClock(): com.google.android.exoplayer2.util.MediaClock;
						public isCurrentStreamFinal(): boolean;
						public resetPosition(positionUs: number): void;
						public constructor(trackType: number);
						public static create(formatSupport: number, adaptiveSupport: number, tunnelingSupport: number): number;
						public setPlaybackSpeed(currentPlaybackSpeed: number, targetPlaybackSpeed: number): void;
						public getStream(): com.google.android.exoplayer2.source.SampleStream;
						public static create(formatSupport: number): number;
						public static getAdaptiveSupport(supportFlags: number): number;
						public isEnded(): boolean;
						public getCapabilities(): com.google.android.exoplayer2.RendererCapabilities;
						public static getTunnelingSupport(supportFlags: number): number;
						public setCurrentStreamFinal(): void;
						public constructor(trackType: number, muxerWrapper: com.google.android.exoplayer2.transformer.MuxerWrapper, mediaClock: com.google.android.exoplayer2.transformer.TransformerMediaClock, transformation: com.google.android.exoplayer2.transformer.Transformation);
						public hasReadStreamToEnd(): boolean;
						public enable(configuration: com.google.android.exoplayer2.RendererConfiguration, formats: native.Array<com.google.android.exoplayer2.Format>, stream: com.google.android.exoplayer2.source.SampleStream, positionUs: number, joining: boolean, mayRenderStartOfStream: boolean, startPositionUs: number, offsetUs: number): void;
						public isReady(): boolean;
						public disable(): void;
						public getTrackType(): number;
						public supportsMixedMimeTypeAdaptation(): number;
						public stop(): void;
						public start(): void;
						public setIndex(index: number): void;
						public getState(): number;
						public maybeThrowStreamError(): void;
						public getReadingPositionUs(): number;
						public reset(): void;
						public replaceStream(formats: native.Array<com.google.android.exoplayer2.Format>, stream: com.google.android.exoplayer2.source.SampleStream, startPositionUs: number, offsetUs: number): void;
					}
				}
			}
		}
	}
}


//Generics information:

