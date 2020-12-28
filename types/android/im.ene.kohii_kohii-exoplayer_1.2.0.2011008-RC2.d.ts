declare module kohii {
	export module v1 {
		export module exoplayer {
			export class BandwidthMeterFactory extends java.lang.Object {
				public static class: java.lang.Class<kohii.v1.exoplayer.BandwidthMeterFactory>;
				/**
				 * Constructs a new instance of the kohii.v1.exoplayer.BandwidthMeterFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					createBandwidthMeter(context0: globalAndroid.content.Context): com.google.android.exoplayer2.upstream.BandwidthMeter;
				});
				public constructor();
				public createBandwidthMeter(context0: globalAndroid.content.Context): com.google.android.exoplayer2.upstream.BandwidthMeter;
			}
		}
	}
}

declare module kohii {
	export module v1 {
		export module exoplayer {
			export class BuildConfig extends java.lang.Object {
				public static class: java.lang.Class<kohii.v1.exoplayer.BuildConfig>;
				public static BUILD_TYPE: string;
				public static DEBUG: boolean;
				public static LIBRARY_PACKAGE_NAME: string;
				public static LIB_NAME: string;
				public constructor();
			}
		}
	}
}

declare module kohii {
	export module v1 {
		export module exoplayer {
			export class DefaultControlDispatcher extends java.lang.Object implements com.google.android.exoplayer2.ControlDispatcher {
				public static class: java.lang.Class<kohii.v1.exoplayer.DefaultControlDispatcher>;
				public dispatchSetShuffleModeEnabled(player: com.google.android.exoplayer2.Player, shuffleModeEnabled: boolean): boolean;
				public dispatchNext(player0: com.google.android.exoplayer2.Player): boolean;
				public dispatchSetRepeatMode(player: com.google.android.exoplayer2.Player, repeatMode: number): boolean;
				public isFastForwardEnabled(): boolean;
				public dispatchSeekTo(player: com.google.android.exoplayer2.Player, windowIndex: number, positionMs: number): boolean;
				public dispatchRewind(player0: com.google.android.exoplayer2.Player): boolean;
				public isRewindEnabled(): boolean;
				public dispatchStop(player: com.google.android.exoplayer2.Player, reset: boolean): boolean;
				public dispatchPrepare(player0: com.google.android.exoplayer2.Player): boolean;
				public dispatchSetPlayWhenReady(player: com.google.android.exoplayer2.Player, playWhenReady: boolean): boolean;
				public dispatchFastForward(player0: com.google.android.exoplayer2.Player): boolean;
				public constructor(playback: kohii.v1.core.Playback);
				public dispatchPrevious(player0: com.google.android.exoplayer2.Player): boolean;
			}
		}
	}
}

declare module kohii {
	export module v1 {
		export module exoplayer {
			export class DefaultDrmSessionManagerProvider extends java.lang.Object implements kohii.v1.exoplayer.DrmSessionManagerProvider {
				public static class: java.lang.Class<kohii.v1.exoplayer.DefaultDrmSessionManagerProvider>;
				public provideDrmSessionManager(media: kohii.v1.media.Media): com.google.android.exoplayer2.drm.DrmSessionManager<com.google.android.exoplayer2.drm.ExoMediaCrypto>;
				public constructor(context: globalAndroid.content.Context, httpDataSourceFactory: com.google.android.exoplayer2.upstream.HttpDataSource.Factory);
			}
		}
	}
}

declare module kohii {
	export module v1 {
		export module exoplayer {
			export class DefaultMediaSourceFactoryProvider extends java.lang.Object implements kohii.v1.exoplayer.MediaSourceFactoryProvider {
				public static class: java.lang.Class<kohii.v1.exoplayer.DefaultMediaSourceFactoryProvider>;
				public constructor(dataSourceFactory: com.google.android.exoplayer2.upstream.DataSource.Factory, drmSessionManagerProvider: kohii.v1.exoplayer.DrmSessionManagerProvider);
				public constructor(context: globalAndroid.content.Context);
				public constructor(dataSourceFactory: com.google.android.exoplayer2.upstream.DataSource.Factory, drmSessionManagerProvider: kohii.v1.exoplayer.DrmSessionManagerProvider, mediaCache: com.google.android.exoplayer2.upstream.cache.Cache);
				public constructor(context: globalAndroid.content.Context, dataSourceFactory: com.google.android.exoplayer2.upstream.HttpDataSource.Factory);
				public constructor(dataSourceFactory: com.google.android.exoplayer2.upstream.DataSource.Factory);
				public provideMediaSourceFactory(media: kohii.v1.media.Media): com.google.android.exoplayer2.source.MediaSourceFactory;
			}
		}
	}
}

declare module kohii {
	export module v1 {
		export module exoplayer {
			export class DrmSessionManagerProvider extends java.lang.Object {
				public static class: java.lang.Class<kohii.v1.exoplayer.DrmSessionManagerProvider>;
				/**
				 * Constructs a new instance of the kohii.v1.exoplayer.DrmSessionManagerProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					provideDrmSessionManager(media0: kohii.v1.media.Media): com.google.android.exoplayer2.drm.DrmSessionManager<com.google.android.exoplayer2.drm.ExoMediaCrypto>;
				});
				public constructor();
				public provideDrmSessionManager(media0: kohii.v1.media.Media): com.google.android.exoplayer2.drm.DrmSessionManager<com.google.android.exoplayer2.drm.ExoMediaCrypto>;
			}
		}
	}
}

declare module kohii {
	export module v1 {
		export module exoplayer {
			export class ExoPlayerCache extends java.lang.Object {
				public static class: java.lang.Class<kohii.v1.exoplayer.ExoPlayerCache>;
				public static INSTANCE: kohii.v1.exoplayer.ExoPlayerCache;
				public getDownloadCacheSingleton(): kohii.v1.utils.Capsule<com.google.android.exoplayer2.upstream.cache.Cache,globalAndroid.content.Context>;
				public getLruCacheSingleton(): kohii.v1.utils.Capsule<com.google.android.exoplayer2.upstream.cache.Cache,globalAndroid.content.Context>;
			}
		}
	}
}

declare module kohii {
	export module v1 {
		export module exoplayer {
			export class ExoPlayerConfig extends java.lang.Object implements kohii.v1.exoplayer.LoadControlFactory, kohii.v1.exoplayer.BandwidthMeterFactory, kohii.v1.exoplayer.TrackSelectorFactory {
				public static class: java.lang.Class<kohii.v1.exoplayer.ExoPlayerConfig>;
				public static Companion: kohii.v1.exoplayer.ExoPlayerConfig.Companion;
				public createBandwidthMeter(context: globalAndroid.content.Context): com.google.android.exoplayer2.upstream.BandwidthMeter;
				public getCache$kohii_exoplayer_release(): com.google.android.exoplayer2.upstream.cache.Cache;
				public component10$kohii_exoplayer_release(): boolean;
				public component13$kohii_exoplayer_release(): number;
				public getMaxBufferMs$kohii_exoplayer_release(): number;
				public createDefaultTrackSelector(context: globalAndroid.content.Context): com.google.android.exoplayer2.trackselection.DefaultTrackSelector;
				public component8$kohii_exoplayer_release(): number;
				public copy(clock: com.google.android.exoplayer2.util.Clock, trackSelectorParameters: com.google.android.exoplayer2.trackselection.DefaultTrackSelector.Parameters, trackSelectionFactory: com.google.android.exoplayer2.trackselection.TrackSelection.Factory, overrideInitialBitrateEstimate: number, resetOnNetworkTypeChange: boolean, slidingWindowMaxWeight: number, enableDecoderFallback: boolean, allowedVideoJoiningTimeMs: number, extensionRendererMode: number, playClearSamplesWithoutKeys: boolean, mediaCodecSelector: com.google.android.exoplayer2.mediacodec.MediaCodecSelector, allocator: com.google.android.exoplayer2.upstream.DefaultAllocator, minBufferMs: number, maxBufferMs: number, bufferForPlaybackMs: number, bufferForPlaybackAfterRebufferMs: number, prioritizeTimeOverSizeThresholds: boolean, targetBufferBytes: number, backBufferDurationMs: number, retainBackBufferFromKeyframe: boolean, cache: com.google.android.exoplayer2.upstream.cache.Cache, drmSessionManagerProvider: kohii.v1.exoplayer.DefaultDrmSessionManagerProvider): kohii.v1.exoplayer.ExoPlayerConfig;
				public constructor();
				public getMinBufferMs$kohii_exoplayer_release(): number;
				public getBufferForPlaybackMs$kohii_exoplayer_release(): number;
				public component1$kohii_exoplayer_release(): com.google.android.exoplayer2.util.Clock;
				public component17$kohii_exoplayer_release(): boolean;
				public getBackBufferDurationMs$kohii_exoplayer_release(): number;
				public static getFAST_START(): kohii.v1.exoplayer.ExoPlayerConfig;
				public component3$kohii_exoplayer_release(): com.google.android.exoplayer2.trackselection.TrackSelection.Factory;
				public hashCode(): number;
				public getAllocator$kohii_exoplayer_release(): com.google.android.exoplayer2.upstream.DefaultAllocator;
				public getAllowedVideoJoiningTimeMs$kohii_exoplayer_release(): number;
				public getPlayClearSamplesWithoutKeys$kohii_exoplayer_release(): boolean;
				public component14$kohii_exoplayer_release(): number;
				public component18$kohii_exoplayer_release(): number;
				public component7$kohii_exoplayer_release(): boolean;
				public getExtensionRendererMode$kohii_exoplayer_release(): number;
				public toString(): string;
				public getBufferForPlaybackAfterRebufferMs$kohii_exoplayer_release(): number;
				public getDrmSessionManagerProvider$kohii_exoplayer_release(): kohii.v1.exoplayer.DefaultDrmSessionManagerProvider;
				public component9$kohii_exoplayer_release(): number;
				public createLoadControl(): com.google.android.exoplayer2.LoadControl;
				public component12$kohii_exoplayer_release(): com.google.android.exoplayer2.upstream.DefaultAllocator;
				public component4$kohii_exoplayer_release(): number;
				public component20$kohii_exoplayer_release(): boolean;
				public component22$kohii_exoplayer_release(): kohii.v1.exoplayer.DefaultDrmSessionManagerProvider;
				public getOverrideInitialBitrateEstimate$kohii_exoplayer_release(): number;
				public component15$kohii_exoplayer_release(): number;
				public component19$kohii_exoplayer_release(): number;
				public getEnableDecoderFallback$kohii_exoplayer_release(): boolean;
				public getClock$kohii_exoplayer_release(): com.google.android.exoplayer2.util.Clock;
				public constructor(clock: com.google.android.exoplayer2.util.Clock, trackSelectorParameters: com.google.android.exoplayer2.trackselection.DefaultTrackSelector.Parameters, trackSelectionFactory: com.google.android.exoplayer2.trackselection.TrackSelection.Factory, overrideInitialBitrateEstimate: number, resetOnNetworkTypeChange: boolean, slidingWindowMaxWeight: number, enableDecoderFallback: boolean, allowedVideoJoiningTimeMs: number, extensionRendererMode: number, playClearSamplesWithoutKeys: boolean, mediaCodecSelector: com.google.android.exoplayer2.mediacodec.MediaCodecSelector, allocator: com.google.android.exoplayer2.upstream.DefaultAllocator, minBufferMs: number, maxBufferMs: number, bufferForPlaybackMs: number, bufferForPlaybackAfterRebufferMs: number, prioritizeTimeOverSizeThresholds: boolean, targetBufferBytes: number, backBufferDurationMs: number, retainBackBufferFromKeyframe: boolean, cache: com.google.android.exoplayer2.upstream.cache.Cache, drmSessionManagerProvider: kohii.v1.exoplayer.DefaultDrmSessionManagerProvider);
				public getRetainBackBufferFromKeyframe$kohii_exoplayer_release(): boolean;
				public component21$kohii_exoplayer_release(): com.google.android.exoplayer2.upstream.cache.Cache;
				public getMediaCodecSelector$kohii_exoplayer_release(): com.google.android.exoplayer2.mediacodec.MediaCodecSelector;
				public component11$kohii_exoplayer_release(): com.google.android.exoplayer2.mediacodec.MediaCodecSelector;
				public getPrioritizeTimeOverSizeThresholds$kohii_exoplayer_release(): boolean;
				public component16$kohii_exoplayer_release(): number;
				public component2$kohii_exoplayer_release(): com.google.android.exoplayer2.trackselection.DefaultTrackSelector.Parameters;
				public component5$kohii_exoplayer_release(): boolean;
				public static getDEFAULT(): kohii.v1.exoplayer.ExoPlayerConfig;
				public equals(obj: any): boolean;
				public getResetOnNetworkTypeChange$kohii_exoplayer_release(): boolean;
				public getTrackSelectorParameters$kohii_exoplayer_release(): com.google.android.exoplayer2.trackselection.DefaultTrackSelector.Parameters;
				public component6$kohii_exoplayer_release(): number;
				public getTrackSelectionFactory$kohii_exoplayer_release(): com.google.android.exoplayer2.trackselection.TrackSelection.Factory;
				public getSlidingWindowMaxWeight$kohii_exoplayer_release(): number;
				public getTargetBufferBytes$kohii_exoplayer_release(): number;
			}
			export module ExoPlayerConfig {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<kohii.v1.exoplayer.ExoPlayerConfig.Companion>;
					public getFAST_START(): kohii.v1.exoplayer.ExoPlayerConfig;
					public getDEFAULT(): kohii.v1.exoplayer.ExoPlayerConfig;
				}
			}
		}
	}
}

declare module kohii {
	export module v1 {
		export module exoplayer {
			export class ExoPlayerConfigKt extends java.lang.Object {
				public static class: java.lang.Class<kohii.v1.exoplayer.ExoPlayerConfigKt>;
				public static createDefaultPlayerPool(thiscreateDefaultPlayerPool: kohii.v1.exoplayer.ExoPlayerConfig, context: globalAndroid.content.Context): kohii.v1.exoplayer.ExoPlayerPool;
				public static createDefaultMediaSourceFactoryProvider(thiscreateDefaultMediaSourceFactoryProvider: kohii.v1.exoplayer.ExoPlayerConfig, context: globalAndroid.content.Context, dataSourceFactory: com.google.android.exoplayer2.upstream.HttpDataSource.Factory): kohii.v1.exoplayer.DefaultMediaSourceFactoryProvider;
			}
		}
	}
}

declare module kohii {
	export module v1 {
		export module exoplayer {
			export class ExoPlayerPool extends kohii.v1.core.PlayerPool<com.google.android.exoplayer2.Player> {
				public static class: java.lang.Class<kohii.v1.exoplayer.ExoPlayerPool>;
				public destroyPlayer(player: com.google.android.exoplayer2.Player): void;
				public constructor(poolSize: number);
				public constructor(poolSize: number, context: globalAndroid.content.Context, clock: com.google.android.exoplayer2.util.Clock, bandwidthMeterFactory: kohii.v1.exoplayer.BandwidthMeterFactory, trackSelectorFactory: kohii.v1.exoplayer.TrackSelectorFactory, loadControlFactory: kohii.v1.exoplayer.LoadControlFactory, renderersFactory: com.google.android.exoplayer2.RenderersFactory);
				public resetPlayer(player: com.google.android.exoplayer2.Player): void;
				public destroyPlayer(object0: any): void;
				public createPlayer(media: kohii.v1.media.Media): com.google.android.exoplayer2.Player;
				public createPlayer(media0: kohii.v1.media.Media): any;
				public constructor();
				public resetPlayer(player: any): void;
			}
		}
	}
}

declare module kohii {
	export module v1 {
		export module exoplayer {
			export class HybridMediaItem extends java.lang.Object implements kohii.v1.media.Media, com.google.android.exoplayer2.source.MediaSource {
				public static class: java.lang.Class<kohii.v1.exoplayer.HybridMediaItem>;
				public maybeThrowSourceInfoRefreshError(): void;
				public constructor(media: kohii.v1.media.Media, mediaSource: com.google.android.exoplayer2.source.MediaSource);
				public getType(): string;
				public addDrmEventListener(handler0: globalAndroid.os.Handler, drmSessionEventListener1: com.google.android.exoplayer2.drm.DrmSessionEventListener): void;
				public getInitialTimeline(): com.google.android.exoplayer2.Timeline;
				public releaseSource(p0: com.google.android.exoplayer2.source.MediaSource.MediaSourceCaller): void;
				public getMediaSource(): com.google.android.exoplayer2.source.MediaSource;
				public addEventListener(p0: globalAndroid.os.Handler, p1: com.google.android.exoplayer2.source.MediaSourceEventListener): void;
				public prepareSource(p0: com.google.android.exoplayer2.source.MediaSource.MediaSourceCaller, p1: com.google.android.exoplayer2.upstream.TransferListener): void;
				public getUri(): globalAndroid.net.Uri;
				public isSingleWindow(): boolean;
				public removeEventListener(p0: com.google.android.exoplayer2.source.MediaSourceEventListener): void;
				public enable(p0: com.google.android.exoplayer2.source.MediaSource.MediaSourceCaller): void;
				/** @deprecated */
				public getTag(): any;
				public removeDrmEventListener(drmSessionEventListener0: com.google.android.exoplayer2.drm.DrmSessionEventListener): void;
				public getMediaItem(): com.google.android.exoplayer2.MediaItem;
				public releasePeriod(p0: com.google.android.exoplayer2.source.MediaPeriod): void;
				public disable(p0: com.google.android.exoplayer2.source.MediaSource.MediaSourceCaller): void;
				public createPeriod(p0: com.google.android.exoplayer2.source.MediaSource.MediaPeriodId, p1: com.google.android.exoplayer2.upstream.Allocator, p2: number): com.google.android.exoplayer2.source.MediaPeriod;
				public getMedia(): kohii.v1.media.Media;
				public getMediaDrm(): kohii.v1.media.MediaDrm;
			}
		}
	}
}

declare module kohii {
	export module v1 {
		export module exoplayer {
			export class Kohii extends kohii.v1.core.Engine<com.google.android.exoplayer2.ui.PlayerView> {
				public static class: java.lang.Class<kohii.v1.exoplayer.Kohii>;
				public static Companion: kohii.v1.exoplayer.Kohii.Companion;
				public static get(fragment: androidx.fragment.app.Fragment): kohii.v1.exoplayer.Kohii;
				public prepare(manager0: kohii.v1.core.Manager): void;
				public constructor(master: kohii.v1.core.Master, playableCreator: kohii.v1.core.PlayableCreator<any>);
				public constructor(master: kohii.v1.core.Master, playableCreator: kohii.v1.core.PlayableCreator<com.google.android.exoplayer2.ui.PlayerView>, rendererProviderFactory: kotlin.jvm.functions.Function0<any>);
				public static get(context: globalAndroid.content.Context): kohii.v1.exoplayer.Kohii;
				public constructor(context: globalAndroid.content.Context, playableCreator: kohii.v1.core.PlayableCreator<any>);
				public prepare(manager: kohii.v1.core.Manager): void;
				public createControlDispatcher(playback: kohii.v1.core.Playback): com.google.android.exoplayer2.ControlDispatcher;
			}
			export module Kohii {
				export class Builder extends java.lang.Object {
					public static class: java.lang.Class<kohii.v1.exoplayer.Kohii.Builder>;
					public build(): kohii.v1.exoplayer.Kohii;
					public setRendererProviderFactory(factory: kotlin.jvm.functions.Function0<any>): kohii.v1.exoplayer.Kohii.Builder;
					public constructor(context: globalAndroid.content.Context);
					public setPlayableCreator(playableCreator: kohii.v1.core.PlayableCreator<com.google.android.exoplayer2.ui.PlayerView>): kohii.v1.exoplayer.Kohii.Builder;
				}
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<kohii.v1.exoplayer.Kohii.Companion>;
					public get(fragment: androidx.fragment.app.Fragment): kohii.v1.exoplayer.Kohii;
					public get(context: globalAndroid.content.Context): kohii.v1.exoplayer.Kohii;
				}
			}
		}
	}
}

declare module kohii {
	export module v1 {
		export module exoplayer {
			export class KohiiExoPlayer extends com.google.android.exoplayer2.SimpleExoPlayer implements kohii.v1.core.VolumeInfoController, kohii.v1.core.DefaultTrackSelectorHolder {
				public static class: java.lang.Class<kohii.v1.exoplayer.KohiiExoPlayer>;
				public setMediaItems(mediaItems: java.util.List<com.google.android.exoplayer2.MediaItem>): void;
				public seekToDefaultPosition(windowIndex: number): void;
				public getContentBufferedPosition(): number;
				public clearCameraMotionListener(listener: com.google.android.exoplayer2.video.spherical.CameraMotionListener): void;
				/** @deprecated */
				public setAudioAttributes(audioAttributes: com.google.android.exoplayer2.audio.AudioAttributes): void;
				/** @deprecated */
				public getPlaybackError(): com.google.android.exoplayer2.ExoPlaybackException;
				/** @deprecated */
				public prepare(mediaSource: com.google.android.exoplayer2.source.MediaSource, resetPosition: boolean, resetState: boolean): void;
				public isDeviceMuted(): boolean;
				public getCurrentLiveOffset(): number;
				public constructor(context: globalAndroid.content.Context, clock: com.google.android.exoplayer2.util.Clock, renderersFactory: com.google.android.exoplayer2.RenderersFactory, trackSelector: com.google.android.exoplayer2.trackselection.DefaultTrackSelector, loadControl: com.google.android.exoplayer2.LoadControl, bandwidthMeter: com.google.android.exoplayer2.upstream.BandwidthMeter, looper: globalAndroid.os.Looper);
				public prepare(): void;
				public setCameraMotionListener(listener: com.google.android.exoplayer2.video.spherical.CameraMotionListener): void;
				public addDeviceListener(listener: com.google.android.exoplayer2.device.DeviceListener): void;
				public setMediaItem(mediaItem: com.google.android.exoplayer2.MediaItem, resetPosition: boolean): void;
				public removeVolumeChangedListener(listener: kohii.v1.core.VolumeChangedListener): void;
				public getAudioAttributes(): com.google.android.exoplayer2.audio.AudioAttributes;
				public setMediaSource(mediaSource: com.google.android.exoplayer2.source.MediaSource): void;
				public setVideoSurfaceView(surfaceView: globalAndroid.view.SurfaceView): void;
				public setAudioAttributes(audioAttributes: com.google.android.exoplayer2.audio.AudioAttributes): void;
				public getBufferedPercentage(): number;
				public addAudioListener(listener: com.google.android.exoplayer2.audio.AudioListener): void;
				public getApplicationLooper(): globalAndroid.os.Looper;
				public clearVideoSurface(surface: globalAndroid.view.Surface): void;
				public setMediaSources(mediaSources: java.util.List<com.google.android.exoplayer2.source.MediaSource>, startWindowIndex: number, startPositionMs: number): void;
				public addMediaSource(mediaSource: com.google.android.exoplayer2.source.MediaSource): void;
				public setMediaSources(mediaSources: java.util.List<com.google.android.exoplayer2.source.MediaSource>): void;
				public getContentDuration(): number;
				public clearVideoDecoderOutputBufferRenderer(): void;
				public getCurrentPosition(): number;
				public removeMetadataOutput(listener: com.google.android.exoplayer2.metadata.MetadataOutput): void;
				public setPlaybackParameters(playbackParameters: com.google.android.exoplayer2.PlaybackParameters): void;
				public addVideoListener(listener: com.google.android.exoplayer2.video.VideoListener): void;
				public setVolume(audioVolume: number): void;
				public getCurrentPeriodIndex(): number;
				public addMediaSources(mediaSources: java.util.List<com.google.android.exoplayer2.source.MediaSource>): void;
				public moveMediaItems(fromIndex: number, toIndex: number, newIndex: number): void;
				public getNextWindowIndex(): number;
				public setVideoScalingMode(videoScalingMode: number): void;
				public clearVideoFrameMetadataListener(listener: com.google.android.exoplayer2.video.VideoFrameMetadataListener): void;
				public getShuffleModeEnabled(): boolean;
				public stop(reset: boolean): void;
				public setForegroundMode(foregroundMode: boolean): void;
				public removeAudioListener(listener: com.google.android.exoplayer2.audio.AudioListener): void;
				public setPlayWhenReady(playWhenReady: boolean): void;
				public getRendererCount(): number;
				public createMessage(target: com.google.android.exoplayer2.PlayerMessage.Target): com.google.android.exoplayer2.PlayerMessage;
				public setDeviceVolume(volume: number): void;
				public setVolumeInfo(volumeInfo: kohii.v1.media.VolumeInfo): boolean;
				public getDuration(): number;
				public getMediaItemAt(index: number): com.google.android.exoplayer2.MediaItem;
				public getTrackSelector(): com.google.android.exoplayer2.trackselection.TrackSelector;
				public clearVideoTextureView(textureView: globalAndroid.view.TextureView): void;
				public isLoading(): boolean;
				public seekTo(positionMs: number): void;
				public getAudioComponent(): com.google.android.exoplayer2.Player.AudioComponent;
				public clearAuxEffectInfo(): void;
				public getBufferedPosition(): number;
				public addMediaSources(index: number, mediaSources: java.util.List<com.google.android.exoplayer2.source.MediaSource>): void;
				public setShuffleModeEnabled(shuffleModeEnabled: boolean): void;
				public next(): void;
				public getMediaItemCount(): number;
				public getCurrentAdIndexInAdGroup(): number;
				public release(): void;
				public getPlaybackSuppressionReason(): number;
				public getTrackSelector(): com.google.android.exoplayer2.trackselection.DefaultTrackSelector;
				public isCurrentWindowDynamic(): boolean;
				public isPlaying(): boolean;
				public removeDeviceListener(listener: com.google.android.exoplayer2.device.DeviceListener): void;
				public getContentPosition(): number;
				public getPlayerError(): com.google.android.exoplayer2.ExoPlaybackException;
				public clearVideoSurfaceHolder(surfaceHolder: globalAndroid.view.SurfaceHolder): void;
				public setMediaItems(mediaItems: java.util.List<com.google.android.exoplayer2.MediaItem>, startWindowIndex: number, startPositionMs: number): void;
				public clearMediaItems(): void;
				public hasNext(): boolean;
				public getDeviceInfo(): com.google.android.exoplayer2.device.DeviceInfo;
				public addMediaItems(index: number, mediaItems: java.util.List<com.google.android.exoplayer2.MediaItem>): void;
				public previous(): void;
				public setAudioAttributes(audioAttributes: com.google.android.exoplayer2.audio.AudioAttributes, handleAudioFocus: boolean): void;
				public getPreviousWindowIndex(): number;
				public setMediaItem(mediaItem: com.google.android.exoplayer2.MediaItem, startPositionMs: number): void;
				public getPlaybackState(): number;
				public getCurrentAdGroupIndex(): number;
				public addMediaItem(index: number, mediaItem: com.google.android.exoplayer2.MediaItem): void;
				public constructor();
				public getAudioSessionId(): number;
				public addTextOutput(listener: com.google.android.exoplayer2.text.TextOutput): void;
				public getVideoScalingMode(): number;
				public seekToDefaultPosition(): void;
				public setDeviceMuted(muted: boolean): void;
				/** @deprecated */
				public getCurrentTag(): any;
				public getPlaybackParameters(): com.google.android.exoplayer2.PlaybackParameters;
				public setMediaSources(mediaSources: java.util.List<com.google.android.exoplayer2.source.MediaSource>, resetPosition: boolean): void;
				public getDeviceComponent(): com.google.android.exoplayer2.Player.DeviceComponent;
				public increaseDeviceVolume(): void;
				public experimentalSetOffloadSchedulingEnabled(offloadSchedulingEnabled: boolean): void;
				public setMediaItems(mediaItems: java.util.List<com.google.android.exoplayer2.MediaItem>, resetPosition: boolean): void;
				public getDeviceVolume(): number;
				public getVolumeInfo(): kohii.v1.media.VolumeInfo;
				/** @deprecated */
				public retry(): void;
				public addMediaItem(mediaItem: com.google.android.exoplayer2.MediaItem): void;
				public setPauseAtEndOfMediaItems(pauseAtEndOfMediaItems: boolean): void;
				public addListener(listener: com.google.android.exoplayer2.Player.EventListener): void;
				public getCurrentWindowIndex(): number;
				public getVolume(): number;
				public removeMediaItem(index: number): void;
				public constructor(builder: com.google.android.exoplayer2.SimpleExoPlayer.Builder);
				public isCurrentWindowSeekable(): boolean;
				public seekTo(windowIndex: number, positionMs: number): void;
				/** @deprecated */
				public constructor(context: globalAndroid.content.Context, renderersFactory: com.google.android.exoplayer2.RenderersFactory, trackSelector: com.google.android.exoplayer2.trackselection.TrackSelector, mediaSourceFactory: com.google.android.exoplayer2.source.MediaSourceFactory, loadControl: com.google.android.exoplayer2.LoadControl, bandwidthMeter: com.google.android.exoplayer2.upstream.BandwidthMeter, analyticsCollector: com.google.android.exoplayer2.analytics.AnalyticsCollector, useLazyPreparation: boolean, clock: com.google.android.exoplayer2.util.Clock, applicationLooper: globalAndroid.os.Looper);
				public setVideoSurface(surface: globalAndroid.view.Surface): void;
				public hasPrevious(): boolean;
				public addMediaItems(mediaItems: java.util.List<com.google.android.exoplayer2.MediaItem>): void;
				public removeListener(listener: com.google.android.exoplayer2.Player.EventListener): void;
				public setAudioSessionId(audioSessionId: number): void;
				public removeMediaItems(fromIndex: number, toIndex: number): void;
				public setVideoDecoderOutputBufferRenderer(videoDecoderOutputBufferRenderer: com.google.android.exoplayer2.video.VideoDecoderOutputBufferRenderer): void;
				public getPlayWhenReady(): boolean;
				public getPauseAtEndOfMediaItems(): boolean;
				public isPlayingAd(): boolean;
				public addVolumeChangedListener(listener: kohii.v1.core.VolumeChangedListener): void;
				public setVideoFrameMetadataListener(listener: com.google.android.exoplayer2.video.VideoFrameMetadataListener): void;
				/** @deprecated */
				public prepare(mediaSource: com.google.android.exoplayer2.source.MediaSource): void;
				public getVideoComponent(): com.google.android.exoplayer2.Player.VideoComponent;
				public removeTextOutput(listener: com.google.android.exoplayer2.text.TextOutput): void;
				public getMetadataComponent(): com.google.android.exoplayer2.Player.MetadataComponent;
				public addMediaSource(index: number, mediaSource: com.google.android.exoplayer2.source.MediaSource): void;
				public setSeekParameters(seekParameters: com.google.android.exoplayer2.SeekParameters): void;
				public getCurrentTrackSelections(): com.google.android.exoplayer2.trackselection.TrackSelectionArray;
				public clearVideoSurface(): void;
				public removeVideoListener(listener: com.google.android.exoplayer2.video.VideoListener): void;
				public clearVideoSurfaceView(surfaceView: globalAndroid.view.SurfaceView): void;
				public setMediaSource(mediaSource: com.google.android.exoplayer2.source.MediaSource, resetPosition: boolean): void;
				public isCurrentWindowLive(): boolean;
				public setMediaItem(mediaItem: com.google.android.exoplayer2.MediaItem): void;
				public setRepeatMode(repeatMode: number): void;
				public getTextComponent(): com.google.android.exoplayer2.Player.TextComponent;
				public getCurrentTimeline(): com.google.android.exoplayer2.Timeline;
				public play(): void;
				public getSeekParameters(): com.google.android.exoplayer2.SeekParameters;
				public pause(): void;
				public getCurrentCues(): java.util.List<com.google.android.exoplayer2.text.Cue>;
				public addMetadataOutput(listener: com.google.android.exoplayer2.metadata.MetadataOutput): void;
				public getRepeatMode(): number;
				public setShuffleOrder(shuffleOrder: com.google.android.exoplayer2.source.ShuffleOrder): void;
				public setVideoSurfaceHolder(surfaceHolder: globalAndroid.view.SurfaceHolder): void;
				public getCurrentTrackGroups(): com.google.android.exoplayer2.source.TrackGroupArray;
				public stop(): void;
				public getPlaybackLooper(): globalAndroid.os.Looper;
				public getSkipSilenceEnabled(): boolean;
				public getCurrentMediaItem(): com.google.android.exoplayer2.MediaItem;
				public getTotalBufferedDuration(): number;
				public decreaseDeviceVolume(): void;
				public setVideoTextureView(textureView: globalAndroid.view.TextureView): void;
				public setSkipSilenceEnabled(skipSilenceEnabled: boolean): void;
				public setMediaSource(mediaSource: com.google.android.exoplayer2.source.MediaSource, startPositionMs: number): void;
				public clearVideoDecoderOutputBufferRenderer(videoDecoderOutputBufferRenderer: com.google.android.exoplayer2.video.VideoDecoderOutputBufferRenderer): void;
				public setAuxEffectInfo(auxEffectInfo: com.google.android.exoplayer2.audio.AuxEffectInfo): void;
				public getRendererType(index: number): number;
				public moveMediaItem(currentIndex: number, newIndex: number): void;
				public getCurrentManifest(): any;
			}
		}
	}
}

declare module kohii {
	export module v1 {
		export module exoplayer {
			export class KohiiKt extends java.lang.Object {
				public static class: java.lang.Class<kohii.v1.exoplayer.KohiiKt>;
				public static createKohii(context: globalAndroid.content.Context, config: kohii.v1.exoplayer.ExoPlayerConfig): kohii.v1.exoplayer.Kohii;
				public static createKohii(context: globalAndroid.content.Context, playerCreator: kotlin.jvm.functions.Function1<any,any>, mediaSourceFactoryCreator: kotlin.jvm.functions.Function1<any,any>, rendererProviderFactory: kotlin.jvm.functions.Function0<any>): kohii.v1.exoplayer.Kohii;
				public static createKohii(context: globalAndroid.content.Context, playerCreator: kotlin.jvm.functions.Function1<any,any>, mediaSourceFactoryCreator: kotlin.jvm.functions.Function1<any,any>): kohii.v1.exoplayer.Kohii;
				public static createKohii(context: globalAndroid.content.Context): kohii.v1.exoplayer.Kohii;
				public static createKohii(context: globalAndroid.content.Context, playerCreator: kotlin.jvm.functions.Function1<any,any>): kohii.v1.exoplayer.Kohii;
			}
		}
	}
}

declare module kohii {
	export module v1 {
		export module exoplayer {
			export class LoadControlFactory extends java.lang.Object {
				public static class: java.lang.Class<kohii.v1.exoplayer.LoadControlFactory>;
				/**
				 * Constructs a new instance of the kohii.v1.exoplayer.LoadControlFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					createLoadControl(): com.google.android.exoplayer2.LoadControl;
				});
				public constructor();
				public createLoadControl(): com.google.android.exoplayer2.LoadControl;
			}
		}
	}
}

declare module kohii {
	export module v1 {
		export module exoplayer {
			export class MediaSourceFactoryProvider extends java.lang.Object {
				public static class: java.lang.Class<kohii.v1.exoplayer.MediaSourceFactoryProvider>;
				/**
				 * Constructs a new instance of the kohii.v1.exoplayer.MediaSourceFactoryProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					provideMediaSourceFactory(media0: kohii.v1.media.Media): com.google.android.exoplayer2.source.MediaSourceFactory;
				});
				public constructor();
				public provideMediaSourceFactory(media0: kohii.v1.media.Media): com.google.android.exoplayer2.source.MediaSourceFactory;
			}
		}
	}
}

declare module kohii {
	export module v1 {
		export module exoplayer {
			export class PlayerViewBridge extends kohii.v1.core.AbstractBridge<com.google.android.exoplayer2.ui.PlayerView> implements kohii.v1.core.PlayerEventListener  {
				public static class: java.lang.Class<kohii.v1.exoplayer.PlayerViewBridge>;
				public static Companion: kohii.v1.exoplayer.PlayerViewBridge.Companion;
				public onPlayerError(error: com.google.android.exoplayer2.ExoPlaybackException): void;
				public addVolumeChangeListener(listener: kohii.v1.core.VolumeChangedListener): void;
				public getRenderer(): com.google.android.exoplayer2.ui.PlayerView;
				public onMetadata(metadata: com.google.android.exoplayer2.metadata.Metadata): void;
				public setVolumeInfo(value: kohii.v1.media.VolumeInfo): void;
				public onMediaItemTransition(mediaItem: com.google.android.exoplayer2.MediaItem, reason: number): void;
				public constructor();
				public setRepeatMode(value: number): void;
				public onVolumeChanged(volume: number): void;
				public onCues(cues: java.util.List<com.google.android.exoplayer2.text.Cue>): void;
				public setPlayerParameters(param0: kohii.v1.core.PlayerParameters): void;
				public getPlayerPool(): kohii.v1.core.PlayerPool<com.google.android.exoplayer2.Player>;
				public onSkipSilenceEnabledChanged(skipSilenceEnabled: boolean): void;
				public setPlaybackInfo(value: kohii.v1.media.PlaybackInfo): void;
				public removeVolumeChangeListener(listener: kohii.v1.core.VolumeChangedListener): void;
				public onRepeatModeChanged(repeatMode: number): void;
				public getVolumeInfo(): kohii.v1.media.VolumeInfo;
				/** @deprecated */
				public onPlayerStateChanged(playWhenReady: boolean, playbackState: number): void;
				public onAudioSessionId(audioSessionId: number): void;
				public onTracksChanged(trackGroups: com.google.android.exoplayer2.source.TrackGroupArray, trackSelections: com.google.android.exoplayer2.trackselection.TrackSelectionArray): void;
				public getPlayerParameters(): kohii.v1.core.PlayerParameters;
				public onSurfaceSizeChanged(width: number, height: number): void;
				public setPlayer(param0: com.google.android.exoplayer2.Player): void;
				public setRenderer(object0: any): void;
				public getVideoSize(): kohii.v1.core.VideoSize;
				public setRenderer(value: com.google.android.exoplayer2.ui.PlayerView): void;
				public setPlayerParameters(value: kohii.v1.core.PlayerParameters): void;
				/** @deprecated */
				public onLoadingChanged(isLoading: boolean): void;
				public constructor(context: globalAndroid.content.Context, media: kohii.v1.media.Media, playerPool: kohii.v1.core.PlayerPool<com.google.android.exoplayer2.Player>, mediaSourceFactoryProvider: kohii.v1.exoplayer.MediaSourceFactoryProvider);
				public getMedia(): kohii.v1.media.Media;
				public getPlayerState(): number;
				/** @deprecated */
				public onTimelineChanged(timeline: com.google.android.exoplayer2.Timeline, manifest: any, reason: number): void;
				public onPlaybackParametersChanged(playbackParameters: com.google.android.exoplayer2.PlaybackParameters): void;
				public onIsPlayingChanged(isPlaying: boolean): void;
				public onPlayWhenReadyChanged(playWhenReady: boolean, reason: number): void;
				public prepare(loadSource: boolean): void;
				public onTimelineChanged(timeline: com.google.android.exoplayer2.Timeline, reason: number): void;
				public onRenderedFirstFrame(): void;
				public removeEventListener(listener: kohii.v1.core.PlayerEventListener): void;
				public ready(): void;
				public onPositionDiscontinuity(reason: number): void;
				public seekTo(positionMs: number): void;
				public getRenderer(): any;
				public setVideoSize(param0: kohii.v1.core.VideoSize): void;
				/** @deprecated */
				public setVideoSize(param0: kohii.v1.core.VideoSize): void;
				public onShuffleModeEnabledChanged(shuffleModeEnabled: boolean): void;
				public getPlaybackInfo(): kohii.v1.media.PlaybackInfo;
				/** @deprecated */
				public getVideoSize(): kohii.v1.core.VideoSize;
				public removeErrorListener(errorListener: kohii.v1.core.ErrorListener): void;
				public getPlayer(): com.google.android.exoplayer2.Player;
				public addEventListener(listener: kohii.v1.core.PlayerEventListener): void;
				public release(): void;
				public addErrorListener(errorListener: kohii.v1.core.ErrorListener): void;
				public onExperimentalOffloadSchedulingEnabledChanged(offloadSchedulingEnabled: boolean): void;
				public onPlaybackSuppressionReasonChanged(playbackSuppressionReason: number): void;
				public play(): void;
				public isPlaying(): boolean;
				public pause(): void;
				public getRepeatMode(): number;
				/** @deprecated */
				public onSeekProcessed(): void;
				public createMediaSource(): com.google.android.exoplayer2.source.MediaSource;
				public onPlaybackStateChanged(state: number): void;
				public onVideoSizeChanged(width: number, height: number, unappliedRotationDegrees: number, pixelWidthHeightRatio: number): void;
				public reset(resetPlayer: boolean): void;
				public onAudioAttributesChanged(audioAttributes: com.google.android.exoplayer2.audio.AudioAttributes): void;
				public onIsLoadingChanged(isLoading: boolean): void;
			}
			export module PlayerViewBridge {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<kohii.v1.exoplayer.PlayerViewBridge.Companion>;
					public isBehindLiveWindow$kohii_exoplayer_release(error: com.google.android.exoplayer2.ExoPlaybackException): boolean;
				}
			}
		}
	}
}

declare module kohii {
	export module v1 {
		export module exoplayer {
			export class PlayerViewBridgeCreator extends kohii.v1.core.BridgeCreator<com.google.android.exoplayer2.ui.PlayerView> {
				public static class: java.lang.Class<kohii.v1.exoplayer.PlayerViewBridgeCreator>;
				public createBridge(context: globalAndroid.content.Context, media: kohii.v1.media.Media): kohii.v1.core.Bridge<any>;
				public constructor(playerPool: kohii.v1.core.PlayerPool<com.google.android.exoplayer2.Player>, mediaSourceFactoryProvider: kohii.v1.exoplayer.MediaSourceFactoryProvider);
				public cleanUp(): void;
				public createBridge(context: globalAndroid.content.Context, media: kohii.v1.media.Media): kohii.v1.core.Bridge<com.google.android.exoplayer2.ui.PlayerView>;
			}
		}
	}
}

declare module kohii {
	export module v1 {
		export module exoplayer {
			export class PlayerViewPlayable extends kohii.v1.core.AbstractPlayable<com.google.android.exoplayer2.ui.PlayerView> {
				public static class: java.lang.Class<kohii.v1.exoplayer.PlayerViewPlayable>;
				public onRendererDetached(playback: kohii.v1.core.Playback, renderer: any): void;
				public onPlayerParametersChanged(parameters: kohii.v1.core.PlayerParameters): void;
				public constructor(master: kohii.v1.core.Master, media: kohii.v1.media.Media, config: kohii.v1.core.Playable.Config, bridge: kohii.v1.core.Bridge<com.google.android.exoplayer2.ui.PlayerView>);
				public onInActive(playback: kohii.v1.core.Playback): void;
				public constructor(master: kohii.v1.core.Master, media: kohii.v1.media.Media, config: kohii.v1.core.Playable.Config, bridge: kohii.v1.core.Bridge<any>);
				public setRenderer$kohii_exoplayer_release(value: any): void;
				public constructor(media: kohii.v1.media.Media, config: kohii.v1.core.Playable.Config);
				public getRenderer(): any;
				public onAdded(playback: kohii.v1.core.Playback): void;
				public onDetached(playback: kohii.v1.core.Playback): void;
				public onRemoved(playback: kohii.v1.core.Playback): void;
				public onAttached(playback: kohii.v1.core.Playback): void;
				public onActive(playback: kohii.v1.core.Playback): void;
				public onRendererAttached(playback: kohii.v1.core.Playback, renderer: any): void;
			}
		}
	}
}

declare module kohii {
	export module v1 {
		export module exoplayer {
			export class PlayerViewPlayableCreator extends kohii.v1.core.PlayableCreator<com.google.android.exoplayer2.ui.PlayerView> {
				public static class: java.lang.Class<kohii.v1.exoplayer.PlayerViewPlayableCreator>;
				public static Companion: kohii.v1.exoplayer.PlayerViewPlayableCreator.Companion;
				public constructor(context: globalAndroid.content.Context);
				public createPlayable(config0: kohii.v1.core.Playable.Config, media1: kohii.v1.media.Media): kohii.v1.core.Playable;
				public constructor(master: kohii.v1.core.Master, bridgeCreatorFactory: kotlin.jvm.functions.Function1<any,any>);
				public cleanUp(): void;
				public constructor(rendererType: java.lang.Class<any>);
				public createPlayable(config: kohii.v1.core.Playable.Config, media: kohii.v1.media.Media): kohii.v1.core.Playable;
			}
			export module PlayerViewPlayableCreator {
				export class Builder extends java.lang.Object {
					public static class: java.lang.Class<kohii.v1.exoplayer.PlayerViewPlayableCreator.Builder>;
					public setBridgeCreatorFactory(factory: kotlin.jvm.functions.Function1<any,any>): kohii.v1.exoplayer.PlayerViewPlayableCreator.Builder;
					public constructor(context: globalAndroid.content.Context);
					public build(): kohii.v1.core.PlayableCreator<com.google.android.exoplayer2.ui.PlayerView>;
				}
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<kohii.v1.exoplayer.PlayerViewPlayableCreator.Companion>;
				}
			}
		}
	}
}

declare module kohii {
	export module v1 {
		export module exoplayer {
			export class PlayerViewPlayableCreatorKt extends java.lang.Object {
				public static class: java.lang.Class<kohii.v1.exoplayer.PlayerViewPlayableCreatorKt>;
			}
		}
	}
}

declare module kohii {
	export module v1 {
		export module exoplayer {
			export class PlayerViewProvider extends kohii.v1.core.ViewRendererProvider {
				public static class: java.lang.Class<kohii.v1.exoplayer.PlayerViewProvider>;
				public getRendererType(container: globalAndroid.view.ViewGroup, media: kohii.v1.media.Media): number;
				public acquireRenderer(playback: kohii.v1.core.Playback, media: kohii.v1.media.Media): any;
				public createRenderer(playback0: kohii.v1.core.Playback, int1: number): any;
				public createRenderer(playback: kohii.v1.core.Playback, rendererType: number): com.google.android.exoplayer2.ui.PlayerView;
				public constructor(poolSize: number);
				public clear(): void;
				public onDestroy(owner: androidx.lifecycle.LifecycleOwner): void;
				public releaseRenderer(playback: kohii.v1.core.Playback, media: kohii.v1.media.Media, renderer: any): boolean;
				public constructor();
			}
		}
	}
}

declare module kohii {
	export module v1 {
		export module exoplayer {
			export class TrackSelectorFactory extends java.lang.Object {
				public static class: java.lang.Class<kohii.v1.exoplayer.TrackSelectorFactory>;
				/**
				 * Constructs a new instance of the kohii.v1.exoplayer.TrackSelectorFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					createDefaultTrackSelector(context0: globalAndroid.content.Context): com.google.android.exoplayer2.trackselection.DefaultTrackSelector;
				});
				public constructor();
				public createDefaultTrackSelector(context0: globalAndroid.content.Context): com.google.android.exoplayer2.trackselection.DefaultTrackSelector;
			}
		}
	}
}

declare module kohii {
	export module v1 {
		export module exoplayer {
			export module internal {
				export class ExtensionsKt extends java.lang.Object {
					public static class: java.lang.Class<kohii.v1.exoplayer.internal.ExtensionsKt>;
					public static getVolumeInfo(thisgetVolumeInfo: com.google.android.exoplayer2.Player): kohii.v1.media.VolumeInfo;
					public static removeEventListener(thisremoveEventListener: com.google.android.exoplayer2.Player, listener: kohii.v1.core.PlayerEventListener): void;
					public static setVolumeInfo(thissetVolumeInfo: com.google.android.exoplayer2.Player, volume: kohii.v1.media.VolumeInfo): void;
					public static addEventListener(thisaddEventListener: com.google.android.exoplayer2.Player, listener: kohii.v1.core.PlayerEventListener): void;
				}
			}
		}
	}
}

//Generics information:

