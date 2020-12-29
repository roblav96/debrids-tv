declare module androidx {
	export module recyclerview {
		export module widget {
			export class RecyclerViewUtils extends java.lang.Object {
				public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerViewUtils>;
				public static INSTANCE: androidx.recyclerview.widget.RecyclerViewUtils;
				public fetchItemViewParams(target: globalAndroid.view.View): androidx.recyclerview.widget.RecyclerView.LayoutParams;
				public accepts(recyclerView: androidx.recyclerview.widget.RecyclerView, params: androidx.recyclerview.widget.RecyclerView.LayoutParams): boolean;
				public fetchViewHolder(target: globalAndroid.view.View): androidx.recyclerview.widget.RecyclerView.ViewHolder;
			}
		}
	}
}

declare module kohii {
	export module v1 {
		export class Beta extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kohii.v1.Beta>;
			/**
			 * Constructs a new instance of the kohii.v1.Beta interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				message(): string;
				equals(object0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public toString(): string;
			public equals(obj: any): boolean;
			public message(): string;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kohii {
	export module v1 {
		export class BuildConfig extends java.lang.Object {
			public static class: java.lang.Class<kohii.v1.BuildConfig>;
			public static DEBUG: boolean;
			public static LIBRARY_PACKAGE_NAME: string;
			public static BUILD_TYPE: string;
			public static LIB_NAME: string;
			public constructor();
		}
	}
}

declare module kohii {
	export module v1 {
		export class Draft extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kohii.v1.Draft>;
			/**
			 * Constructs a new instance of the kohii.v1.Draft interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				message(): string;
				equals(object0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public toString(): string;
			public equals(obj: any): boolean;
			public message(): string;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kohii {
	export module v1 {
		export class Experiment extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kohii.v1.Experiment>;
			/**
			 * Constructs a new instance of the kohii.v1.Experiment interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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

declare module kohii {
	export module v1 {
		export class ExtensionsKt extends java.lang.Object {
			public static class: java.lang.Class<kohii.v1.ExtensionsKt>;
			public static logInfo(thislogInfo: string, tag: string): void;
			public static findActivity(thisfindActivity: globalAndroid.content.Context): globalAndroid.app.Activity;
			public static findCoordinatorLayoutDirectChildContainer(thisfindCoordinatorLayoutDirectChildContainer: globalAndroid.view.View, target: globalAndroid.view.View): globalAndroid.view.View;
			public static logDebug(thislogDebug: string, tag: string): void;
			public static partitionToMutableSets(thispartitionToMutableSets: java.lang.Iterable<any>, predicate: kotlin.jvm.functions.Function1<any,any>, transform: kotlin.jvm.functions.Function1<any,any>): kotlin.Pair<any,any>;
			public static distanceTo(thisdistanceTo: globalAndroid.graphics.Rect, target: kotlin.Pair<java.lang.Float,java.lang.Float>): number;
			public static logError(thislogError: string, tag: string): void;
			public static onEachAcquired(thisonEachAcquired: androidx.core.util.Pools.Pool<any>, action: kotlin.jvm.functions.Function1<any,any>): void;
			public static logWarn(thislogWarn: string, tag: string): void;
			public static viewBehavior(thisviewBehavior: globalAndroid.view.View): androidx.coordinatorlayout.widget.CoordinatorLayout.Behavior<any>;
			public static debugOnly(action: kotlin.jvm.functions.Function0<kotlin.Unit>): void;
		}
	}
}

declare module kohii {
	export module v1 {
		export class Stable extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kohii.v1.Stable>;
			/**
			 * Constructs a new instance of the kohii.v1.Stable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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

declare module kohii {
	export module v1 {
		export module core {
			export abstract class AbstractBridge<RENDERER>  extends kohii.v1.core.Bridge<any> {
				public static class: java.lang.Class<kohii.v1.core.AbstractBridge<any>>;
				public getPlayerState(): number;
				public addVolumeChangeListener(listener: kohii.v1.core.VolumeChangedListener): void;
				public seekTo(long0: number): void;
				public constructor();
				public removeEventListener(listener: kohii.v1.core.PlayerEventListener): void;
				public ready(): void;
				public setVolumeInfo(volumeInfo0: kohii.v1.media.VolumeInfo): void;
				public setVideoSize(param0: kohii.v1.core.VideoSize): void;
				public getRenderer(): any;
				/** @deprecated */
				public setVideoSize(param0: kohii.v1.core.VideoSize): void;
				public setPlayerParameters(param0: kohii.v1.core.PlayerParameters): void;
				public getPlaybackInfo(): kohii.v1.media.PlaybackInfo;
				/** @deprecated */
				public getVideoSize(): kohii.v1.core.VideoSize;
				public setPlaybackInfo(playbackInfo0: kohii.v1.media.PlaybackInfo): void;
				public getErrorListeners(): kohii.v1.core.ErrorListeners;
				public removeErrorListener(errorListener: kohii.v1.core.ErrorListener): void;
				public addEventListener(listener: kohii.v1.core.PlayerEventListener): void;
				public removeVolumeChangeListener(listener: kohii.v1.core.VolumeChangedListener): void;
				public addErrorListener(errorListener: kohii.v1.core.ErrorListener): void;
				public release(): void;
				public reset(boolean0: boolean): void;
				public prepare(boolean0: boolean): void;
				public play(): void;
				public getVolumeInfo(): kohii.v1.media.VolumeInfo;
				public pause(): void;
				public isPlaying(): boolean;
				public getRepeatMode(): number;
				public getEventListeners(): kohii.v1.core.PlayerEventListeners;
				public getPlayerParameters(): kohii.v1.core.PlayerParameters;
				public setRepeatMode(int0: number): void;
				public getVolumeListeners(): kohii.v1.core.VolumeChangedListeners;
				public getVideoSize(): kohii.v1.core.VideoSize;
				public setRenderer(object0: any): void;
			}
		}
	}
}

declare module kohii {
	export module v1 {
		export module core {
			export abstract class AbstractPlayable<RENDERER>  extends kohii.v1.core.Playable {
				public static class: java.lang.Class<kohii.v1.core.AbstractPlayable<any>>;
				public onRelease(): void;
				public teardownRenderer(playback: kohii.v1.core.Playback): void;
				public onPause(): void;
				public getPlayerState(): number;
				public onNetworkTypeChanged(from: number, to: number): void;
				public setManager(playableManager0: kohii.v1.core.PlayableManager): void;
				public onUnbind(playback0: kohii.v1.core.Playback): void;
				public onInActive(playback: kohii.v1.core.Playback): void;
				public setPlayback(playback0: kohii.v1.core.Playback): void;
				public getBridge(): kohii.v1.core.Bridge<any>;
				public setPlaybackInfo(playbackInfo0: kohii.v1.media.PlaybackInfo): void;
				public onPrepare(boolean0: boolean): void;
				public onPlaybackPriorityChanged(playback0: kohii.v1.core.Playback, int1: number, int2: number): void;
				public constructor(media: kohii.v1.media.Media, config: kohii.v1.core.Playable.Config);
				public setPlayback(value: kohii.v1.core.Playback): void;
				public setupRenderer(playback: kohii.v1.core.Playback): void;
				public onRemoved(playback: kohii.v1.core.Playback): void;
				public onAttached(playback: kohii.v1.core.Playback): void;
				public getTag(): any;
				public onPlay(): void;
				public onUnbind(playback: kohii.v1.core.Playback): void;
				public onRendererAttached(playback: kohii.v1.core.Playback, renderer: any): void;
				public getPlaybackInfo(): kohii.v1.media.PlaybackInfo;
				public setupRenderer(playback0: kohii.v1.core.Playback): void;
				public onVolumeInfoChanged(playback: kohii.v1.core.Playback, from: kohii.v1.media.VolumeInfo, to: kohii.v1.media.VolumeInfo): void;
				public onVolumeInfoChanged(playback0: kohii.v1.core.Playback, volumeInfo1: kohii.v1.media.VolumeInfo, volumeInfo2: kohii.v1.media.VolumeInfo): void;
				public onConfigChange(): boolean;
				public onPrepare(loadSource: boolean): void;
				public isPlaying(): boolean;
				public setManager(value: kohii.v1.core.PlayableManager): void;
				public onRendererDetached(playback: kohii.v1.core.Playback, renderer: any): void;
				public onPlaybackPriorityChanged(playback: kohii.v1.core.Playback, oldPriority: number, newPriority: number): void;
				public onPlayerParametersChanged(parameters: kohii.v1.core.PlayerParameters): void;
				public getMaster(): kohii.v1.core.Master;
				public onNetworkTypeChanged(int0: number, int1: number): void;
				public toString(): string;
				public onReset(): void;
				public constructor(master: kohii.v1.core.Master, media: kohii.v1.media.Media, config: kohii.v1.core.Playable.Config, bridge: kohii.v1.core.Bridge<any>);
				public getPlayback(): kohii.v1.core.Playback;
				public getManager(): kohii.v1.core.PlayableManager;
				public onAdded(playback: kohii.v1.core.Playback): void;
				public onReady(): void;
				public onDetached(playback: kohii.v1.core.Playback): void;
				public setPlaybackInfo(value: kohii.v1.media.PlaybackInfo): void;
				public teardownRenderer(playback0: kohii.v1.core.Playback): void;
				public onActive(playback: kohii.v1.core.Playback): void;
			}
			export module AbstractPlayable {
				export class WhenMappings extends java.lang.Object {
					public static class: java.lang.Class<kohii.v1.core.AbstractPlayable.WhenMappings>;
				}
			}
		}
	}
}

declare module kohii {
	export module v1 {
		export module core {
			export class Binder extends java.lang.Object {
				public static class: java.lang.Class<kohii.v1.core.Binder>;
				public bind(container: globalAndroid.view.ViewGroup): kohii.v1.core.Rebinder;
				public constructor(engine: kohii.v1.core.Engine<any>, media: kohii.v1.media.Media);
				public bind(container: globalAndroid.view.ViewGroup, callback: kotlin.jvm.functions.Function1<any,kotlin.Unit>): kohii.v1.core.Rebinder;
				public getMedia(): kohii.v1.media.Media;
				public getOptions(): kohii.v1.core.Binder.Options;
			}
			export module Binder {
				export class Options extends java.lang.Object {
					public static class: java.lang.Class<kohii.v1.core.Binder.Options>;
					public getPreload(): boolean;
					public getArtworkHintListener(): kohii.v1.core.Playback.ArtworkHintListener;
					public getTag(): any;
					public getRepeatMode(): number;
					public setArtworkHintListener(param0: kohii.v1.core.Playback.ArtworkHintListener): void;
					public setTag(param0: any): void;
					public getNetworkTypeChangeListener(): kohii.v1.core.Playback.NetworkTypeChangeListener;
					public setDelay(param0: number): void;
					public getThreshold(): number;
					public setInitialPlaybackInfo(param0: kohii.v1.media.PlaybackInfo): void;
					public getInitialPlaybackInfo(): kohii.v1.media.PlaybackInfo;
					public setThreshold(param0: number): void;
					public getDelay(): number;
					public constructor();
					public setTokenUpdateListener(param0: kohii.v1.core.Playback.TokenUpdateListener): void;
					public setNetworkTypeChangeListener(param0: kohii.v1.core.Playback.NetworkTypeChangeListener): void;
					public setRepeatMode(param0: number): void;
					public getTokenUpdateListener(): kohii.v1.core.Playback.TokenUpdateListener;
					public getCallbacks(): java.util.Set<kohii.v1.core.Playback.Callback>;
					public setPreload(param0: boolean): void;
					public getController(): kohii.v1.core.Playback.Controller;
					public setController(param0: kohii.v1.core.Playback.Controller): void;
				}
			}
		}
	}
}

declare module kohii {
	export module v1 {
		export module core {
			export class Bridge<RENDERER>  extends java.lang.Object {
				public static class: java.lang.Class<kohii.v1.core.Bridge<any>>;
				/**
				 * Constructs a new instance of the kohii.v1.core.Bridge<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getPlayerState(): number;
					getRenderer(): RENDERER;
					setRenderer(object0: RENDERER): void;
					getVideoSize(): kohii.v1.core.VideoSize;
					setVideoSize(videoSize0: kohii.v1.core.VideoSize): void;
					getPlaybackInfo(): kohii.v1.media.PlaybackInfo;
					setPlaybackInfo(playbackInfo0: kohii.v1.media.PlaybackInfo): void;
					getRepeatMode(): number;
					setRepeatMode(int0: number): void;
					getVolumeInfo(): kohii.v1.media.VolumeInfo;
					setVolumeInfo(volumeInfo0: kohii.v1.media.VolumeInfo): void;
					getPlayerParameters(): kohii.v1.core.PlayerParameters;
					setPlayerParameters(playerParameters0: kohii.v1.core.PlayerParameters): void;
					isPlaying(): boolean;
					seekTo(long0: number): void;
					prepare(boolean0: boolean): void;
					ready(): void;
					play(): void;
					pause(): void;
					reset(boolean0: boolean): void;
					release(): void;
					addEventListener(playerEventListener0: kohii.v1.core.PlayerEventListener): void;
					removeEventListener(playerEventListener0: kohii.v1.core.PlayerEventListener): void;
					addVolumeChangeListener(volumeChangedListener0: kohii.v1.core.VolumeChangedListener): void;
					removeVolumeChangeListener(volumeChangedListener0: kohii.v1.core.VolumeChangedListener): void;
					addErrorListener(errorListener0: kohii.v1.core.ErrorListener): void;
					removeErrorListener(errorListener0: kohii.v1.core.ErrorListener): void;
				});
				public constructor();
				public getPlayerState(): number;
				public seekTo(long0: number): void;
				public addEventListener(playerEventListener0: kohii.v1.core.PlayerEventListener): void;
				public addVolumeChangeListener(volumeChangedListener0: kohii.v1.core.VolumeChangedListener): void;
				public ready(): void;
				public setPlayerParameters(playerParameters0: kohii.v1.core.PlayerParameters): void;
				public setRenderer(object0: RENDERER): void;
				public setVolumeInfo(volumeInfo0: kohii.v1.media.VolumeInfo): void;
				public getPlaybackInfo(): kohii.v1.media.PlaybackInfo;
				public removeVolumeChangeListener(volumeChangedListener0: kohii.v1.core.VolumeChangedListener): void;
				/** @deprecated */
				public getVideoSize(): kohii.v1.core.VideoSize;
				public setPlaybackInfo(playbackInfo0: kohii.v1.media.PlaybackInfo): void;
				/** @deprecated */
				public setVideoSize(videoSize0: kohii.v1.core.VideoSize): void;
				public getRenderer(): RENDERER;
				public release(): void;
				public reset(boolean0: boolean): void;
				public prepare(boolean0: boolean): void;
				public getVolumeInfo(): kohii.v1.media.VolumeInfo;
				public play(): void;
				public isPlaying(): boolean;
				public pause(): void;
				public getRepeatMode(): number;
				public addErrorListener(errorListener0: kohii.v1.core.ErrorListener): void;
				public getPlayerParameters(): kohii.v1.core.PlayerParameters;
				public setRepeatMode(int0: number): void;
				public removeEventListener(playerEventListener0: kohii.v1.core.PlayerEventListener): void;
				public removeErrorListener(errorListener0: kohii.v1.core.ErrorListener): void;
			}
			export module Bridge {
				export class DefaultImpls extends java.lang.Object {
					public static class: java.lang.Class<kohii.v1.core.Bridge.DefaultImpls>;
				}
			}
		}
	}
}

declare module kohii {
	export module v1 {
		export module core {
			export class BridgeCreator<RENDERER>  extends java.lang.Object {
				public static class: java.lang.Class<kohii.v1.core.BridgeCreator<any>>;
				/**
				 * Constructs a new instance of the kohii.v1.core.BridgeCreator<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					createBridge(context0: globalAndroid.content.Context, media1: kohii.v1.media.Media): kohii.v1.core.Bridge<RENDERER>;
					cleanUp(): void;
				});
				public constructor();
				public createBridge(context0: globalAndroid.content.Context, media1: kohii.v1.media.Media): kohii.v1.core.Bridge<RENDERER>;
				public cleanUp(): void;
			}
		}
	}
}

declare module kohii {
	export module v1 {
		export module core {
			export abstract class Bucket extends java.lang.Object implements globalAndroid.view.View.OnLayoutChangeListener {
				public static class: java.lang.Class<kohii.v1.core.Bucket>;
				public static VERTICAL: number;
				public static HORIZONTAL: number;
				public static BOTH_AXIS: number;
				public static NONE_AXIS: number;
				public static Companion: kohii.v1.core.Bucket.Companion;
				public onLayoutChange(v: globalAndroid.view.View, left: number, top: number, right: number, bottom: number, oldLeft: number, oldTop: number, oldRight: number, oldBottom: number): void;
				public effectiveVolumeInfo(origin: kohii.v1.media.VolumeInfo): kohii.v1.media.VolumeInfo;
				public onRemoved(): void;
				public constructor(manager: kohii.v1.core.Manager, root: globalAndroid.view.View, strategy: kohii.v1.core.Strategy, selector: kotlin.jvm.functions.Function1<any,any>);
				public static get(manager: kohii.v1.core.Manager, root: globalAndroid.view.View, strategy: kohii.v1.core.Strategy, selector: kotlin.jvm.functions.Function1<any,any>): kohii.v1.core.Bucket;
				public getStrategy(): kohii.v1.core.Strategy;
				public onAdded(): void;
				public selectByOrientation(candidates: java.util.Collection<any>, orientation: number): java.util.Collection<kohii.v1.core.Playback>;
				public getRoot(): globalAndroid.view.View;
				public setLock(value: boolean): void;
				public selectToPlay(collection0: java.util.Collection<any>): java.util.Collection<kohii.v1.core.Playback>;
				public onAttached(): void;
				public equals(other: any): boolean;
				public hashCode(): number;
				public allowToPlay(playback: kohii.v1.core.Playback): boolean;
				public getManager(): kohii.v1.core.Manager;
				public accepts(viewGroup0: globalAndroid.view.ViewGroup): boolean;
				public setStrategy(value: kohii.v1.core.Strategy): void;
				public addContainer(container: globalAndroid.view.ViewGroup): void;
				public getVolumeInfo(): kohii.v1.media.VolumeInfo;
				public removeContainer(container: globalAndroid.view.ViewGroup): void;
				public setBucketVolumeInfo(value: kohii.v1.media.VolumeInfo): void;
				public getBucketVolumeInfo(): kohii.v1.media.VolumeInfo;
				public equals(obj: any): boolean;
				public getLock(): boolean;
				public getSelector(): kotlin.jvm.functions.Function1<java.util.Collection<any>,java.util.Collection<kohii.v1.core.Playback>>;
				public onDetached(): void;
			}
			export module Bucket {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<kohii.v1.core.Bucket.Companion>;
					public get(manager: kohii.v1.core.Manager, root: globalAndroid.view.View, strategy: kohii.v1.core.Strategy, selector: kotlin.jvm.functions.Function1<any,any>): kohii.v1.core.Bucket;
				}
			}
		}
	}
}

declare module kohii {
	export module v1 {
		export module core {
			export class Common extends java.lang.Object {
				public static class: java.lang.Class<kohii.v1.core.Common>;
				public static REPEAT_MODE_OFF: number;
				public static REPEAT_MODE_ONE: number;
				public static REPEAT_MODE_ALL: number;
				public static REPEAT_MODE_GROUP: number;
				public static STATE_IDLE: number;
				public static STATE_BUFFERING: number;
				public static STATE_READY: number;
				public static STATE_ENDED: number;
				public static INSTANCE: kohii.v1.core.Common;
				public getPLAY(): boolean;
				public getUserAgent(context: globalAndroid.content.Context, appName: string): string;
				public getPAUSE(): boolean;
			}
		}
	}
}

declare module kohii {
	export module v1 {
		export module core {
			export class CustomTypesKt extends java.lang.Object {
				public static class: java.lang.Class<kohii.v1.core.CustomTypesKt>;
			}
		}
	}
}

declare module kohii {
	export module v1 {
		export module core {
			export class DefaultTrackSelectorHolder extends java.lang.Object {
				public static class: java.lang.Class<kohii.v1.core.DefaultTrackSelectorHolder>;
				/**
				 * Constructs a new instance of the kohii.v1.core.DefaultTrackSelectorHolder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getTrackSelector(): com.google.android.exoplayer2.trackselection.DefaultTrackSelector;
				});
				public constructor();
				public getTrackSelector(): com.google.android.exoplayer2.trackselection.DefaultTrackSelector;
			}
		}
	}
}

declare module kohii {
	export module v1 {
		export module core {
			export abstract class Engine<RENDERER>  extends java.lang.Object {
				public static class: java.lang.Class<kohii.v1.core.Engine<any>>;
				public inject(group: kohii.v1.core.Group): void;
				public lockBucket(view: globalAndroid.view.View): void;
				public unstick(lifecycleOwner: androidx.lifecycle.LifecycleOwner): void;
				public unlockBucket(view: globalAndroid.view.View): void;
				public lockPlayback(playback: kohii.v1.core.Playback): void;
				/** @deprecated */
				public fetchRebinder(tag: any): kohii.v1.core.Rebinder;
				public register(activity: androidx.fragment.app.FragmentActivity): kohii.v1.core.Manager;
				public unstick(playback: kohii.v1.core.Playback): void;
				public register(fragment: androidx.fragment.app.Fragment, memoryMode: kohii.v1.core.MemoryMode, activeLifecycleState: androidx.lifecycle.Lifecycle.State): kohii.v1.core.Manager;
				public stick(lifecycleOwner: androidx.lifecycle.LifecycleOwner): void;
				public cancel(tag: any): void;
				public setUp(uri: globalAndroid.net.Uri): kohii.v1.core.Binder;
				public register(fragment: androidx.fragment.app.Fragment): kohii.v1.core.Manager;
				public prepare(manager0: kohii.v1.core.Manager): void;
				public register(activity: androidx.fragment.app.FragmentActivity, memoryMode: kohii.v1.core.MemoryMode): kohii.v1.core.Manager;
				public cleanUp(): void;
				public setUp(media: kohii.v1.media.Media): kohii.v1.core.Binder;
				public constructor(context: globalAndroid.content.Context, playableCreator: kohii.v1.core.PlayableCreator<RENDERER>);
				public lockActivity(activity: androidx.fragment.app.FragmentActivity): void;
				public lockManager(manager: kohii.v1.core.Manager): void;
				public setUp(media: kohii.v1.media.Media, options: kotlin.jvm.functions.Function1<any,kotlin.Unit>): kohii.v1.core.Binder;
				public register(activity: androidx.fragment.app.FragmentActivity, memoryMode: kohii.v1.core.MemoryMode, activeLifecycleState: androidx.lifecycle.Lifecycle.State): kohii.v1.core.Manager;
				public cancel(container: globalAndroid.view.ViewGroup): void;
				public getMaster(): kohii.v1.core.Master;
				public getPlayableCreator(): kohii.v1.core.PlayableCreator<RENDERER>;
				public unlockActivity(activity: androidx.fragment.app.FragmentActivity): void;
				public setUp(url: string, options: kotlin.jvm.functions.Function1<any,kotlin.Unit>): kohii.v1.core.Binder;
				public applyVolumeInfo(volumeInfo: kohii.v1.media.VolumeInfo, target: any, scope: kohii.v1.core.Scope): void;
				public unlockManager(manager: kohii.v1.core.Manager): void;
				public setUp(url: string): kohii.v1.core.Binder;
				public constructor(master: kohii.v1.core.Master, playableCreator: kohii.v1.core.PlayableCreator<RENDERER>);
				public register(fragment: androidx.fragment.app.Fragment, memoryMode: kohii.v1.core.MemoryMode): kohii.v1.core.Manager;
				public unlockPlayback(playback: kohii.v1.core.Playback): void;
				public stick(playback: kohii.v1.core.Playback): void;
				public setUp(uri: globalAndroid.net.Uri, options: kotlin.jvm.functions.Function1<any,kotlin.Unit>): kohii.v1.core.Binder;
			}
		}
	}
}

declare module kohii {
	export module v1 {
		export module core {
			export class ErrorListener extends java.lang.Object {
				public static class: java.lang.Class<kohii.v1.core.ErrorListener>;
				/**
				 * Constructs a new instance of the kohii.v1.core.ErrorListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onError(exception0: java.lang.Exception): void;
				});
				public constructor();
				public onError(exception0: java.lang.Exception): void;
			}
		}
	}
}

declare module kohii {
	export module v1 {
		export module core {
			export class ErrorListeners extends java.util.concurrent.CopyOnWriteArraySet<kohii.v1.core.ErrorListener> implements kohii.v1.core.ErrorListener  {
				public static class: java.lang.Class<kohii.v1.core.ErrorListeners>;
				public parallelStream(): java.util.stream.Stream<any>;
				public removeAll(c: java.util.Collection<any>): boolean;
				public constructor();
				public toArray(): native.Array<any>;
				public add(e: any): boolean;
				public getSize(): number;
				public hashCode(): number;
				public contains(errorListener0: kohii.v1.core.ErrorListener): boolean;
				public clear(): void;
				public constructor(c: java.util.Collection<any>);
				public addAll(c: java.util.Collection<any>): boolean;
				public equals(o: any): boolean;
				public isEmpty(): boolean;
				public contains(o: any): boolean;
				public spliterator(): java.util.Spliterator<any>;
				public toArray(a: native.Array<any>): native.Array<any>;
				public stream(): java.util.stream.Stream<any>;
				public remove(errorListener0: kohii.v1.core.ErrorListener): boolean;
				public remove(o: any): boolean;
				public iterator(): java.util.Iterator<any>;
				public containsAll(c: java.util.Collection<any>): boolean;
				public size(): number;
				public removeIf(filter: any /* any*/): boolean;
				public onError(error: java.lang.Exception): void;
				public retainAll(c: java.util.Collection<any>): boolean;
			}
		}
	}
}

declare module kohii {
	export module v1 {
		export module core {
			export class Group extends java.lang.Object implements androidx.lifecycle.DefaultLifecycleObserver, androidx.lifecycle.LifecycleEventObserver, globalAndroid.os.Handler.Callback {
				public static class: java.lang.Class<kohii.v1.core.Group>;
				public static DELAY: number;
				public static MSG_REFRESH: number;
				public static Companion: kohii.v1.core.Group.Companion;
				public setGroupVolumeInfo(value: kohii.v1.media.VolumeInfo): void;
				public onManagerDestroyed(manager: kohii.v1.core.Manager): void;
				public onStart(owner: androidx.lifecycle.LifecycleOwner): void;
				public getManagers(): java.util.ArrayDeque<kohii.v1.core.Manager>;
				public setLock(value: boolean): void;
				public equals(other: any): boolean;
				public setSelection(param0: java.util.Set<any>): void;
				public onStateChanged(source: androidx.lifecycle.LifecycleOwner, event: androidx.lifecycle.Lifecycle.Event): void;
				public hashCode(): number;
				public constructor(master: kohii.v1.core.Master, activity: androidx.fragment.app.FragmentActivity);
				public notifyPlaybackChanged(playable: kohii.v1.core.Playable, from: kohii.v1.core.Playback, to: kohii.v1.core.Playback): void;
				public onPause(owner: androidx.lifecycle.LifecycleOwner): void;
				public getSelection(): java.util.Set<kohii.v1.core.Playback>;
				public getMaster(): kohii.v1.core.Master;
				public handleMessage(msg: globalAndroid.os.Message): boolean;
				public getActivity(): androidx.fragment.app.FragmentActivity;
				public getVolumeInfo(): kohii.v1.media.VolumeInfo;
				public onCreate(owner: androidx.lifecycle.LifecycleOwner): void;
				public stick(manager: kohii.v1.core.Manager): void;
				public findBucketForContainer(container: globalAndroid.view.ViewGroup): kohii.v1.core.Bucket;
				public unstick(manager: kohii.v1.core.Manager): void;
				public getGroupVolumeInfo(): kohii.v1.media.VolumeInfo;
				public equals(obj: any): boolean;
				public getLock(): boolean;
				public onStop(owner: androidx.lifecycle.LifecycleOwner): void;
				public onRefresh(): void;
				public onResume(owner: androidx.lifecycle.LifecycleOwner): void;
				public onDestroy(owner: androidx.lifecycle.LifecycleOwner): void;
				public onManagerCreated(manager: kohii.v1.core.Manager): void;
			}
			export module Group {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<kohii.v1.core.Group.Companion>;
				}
			}
		}
	}
}

declare module kohii {
	export module v1 {
		export module core {
			export class Manager extends java.lang.Object {
				public static class: java.lang.Class<kohii.v1.core.Manager>;
				public static Companion: kohii.v1.core.Manager.Companion;
				public onStart(owner: androidx.lifecycle.LifecycleOwner): void;
				public findRendererProvider(playable: kohii.v1.core.Playable): kohii.v1.core.RendererProvider;
				public addBucket(view: globalAndroid.view.View): kohii.v1.core.Manager;
				public setLock(value: boolean): void;
				public getPlaybacks(): java.util.Map<any,kohii.v1.core.Playback>;
				public refresh(): void;
				public removePlayback(playback: kohii.v1.core.Playback): void;
				public notifyPlaybackChanged(playable: kohii.v1.core.Playable, from: kohii.v1.core.Playback, to: kohii.v1.core.Playback): void;
				public onPause(owner: androidx.lifecycle.LifecycleOwner): void;
				public setManagerVolumeInfo(value: kohii.v1.media.VolumeInfo): void;
				public addBucket(view: globalAndroid.view.View, strategy: kohii.v1.core.Strategy, selector: kotlin.jvm.functions.Function1<any,any>): kohii.v1.core.Manager;
				public addPlayback(playback: kohii.v1.core.Playback): void;
				public unstick(bucket: kohii.v1.core.Bucket): void;
				public getMaster(): kohii.v1.core.Master;
				public getLifecycleOwner(): androidx.lifecycle.LifecycleOwner;
				public getVolumeInfo(): kohii.v1.media.VolumeInfo;
				public findBucketForContainer(container: globalAndroid.view.ViewGroup): kohii.v1.core.Bucket;
				/** @deprecated */
				public addBucket(views: native.Array<globalAndroid.view.View>): kohii.v1.core.Manager;
				public getLock(): boolean;
				public onResume(owner: androidx.lifecycle.LifecycleOwner): void;
				public getHost(): any;
				public splitPlaybacks(): kotlin.Pair<java.util.Set<kohii.v1.core.Playback>,java.util.Set<kohii.v1.core.Playback>>;
				public onContainerLayoutChanged(container: any): void;
				public getActiveLifecycleState(): androidx.lifecycle.Lifecycle.State;
				public compareTo(other: kohii.v1.core.Manager): number;
				public onBucketVolumeInfoUpdated(bucket: kohii.v1.core.Bucket, effectiveVolumeInfo: kohii.v1.media.VolumeInfo): void;
				public observe(mediaTag: any, observer: kotlin.jvm.functions.Function3<any,any,any,kotlin.Unit>): boolean;
				public isChangingConfigurations(): boolean;
				public pause(playable: kohii.v1.core.Playable): void;
				public getGroup(): kohii.v1.core.Group;
				public onContainerDetachedFromWindow(container: any): void;
				public getSticky(): boolean;
				public getBuckets(): java.util.ArrayDeque<kohii.v1.core.Bucket>;
				public addBucket(view: globalAndroid.view.View, strategy: kohii.v1.core.Strategy): kohii.v1.core.Manager;
				public onStateChanged(source: androidx.lifecycle.LifecycleOwner, event: androidx.lifecycle.Lifecycle.Event): void;
				public removeBucket(views: native.Array<globalAndroid.view.View>): kohii.v1.core.Manager;
				public constructor(master: kohii.v1.core.Master, group: kohii.v1.core.Group, host: any, lifecycleOwner: androidx.lifecycle.LifecycleOwner, memoryMode: kohii.v1.core.MemoryMode, activeLifecycleState: androidx.lifecycle.Lifecycle.State);
				public onContainerAttachedToWindow(container: any): void;
				public onRemoveContainer(container: any): void;
				public setSticky(param0: boolean): void;
				public stick(bucket: kohii.v1.core.Bucket): void;
				public onCreate(owner: androidx.lifecycle.LifecycleOwner): void;
				public applyVolumeInfo(volumeInfo: kohii.v1.media.VolumeInfo, target: any, scope: kohii.v1.core.Scope): void;
				public getMemoryMode(): kohii.v1.core.MemoryMode;
				public registerRendererProvider(type: java.lang.Class<any>, provider: kohii.v1.core.RendererProvider): void;
				public play(playable: kohii.v1.core.Playable): void;
				public getManagerVolumeInfo(): kohii.v1.media.VolumeInfo;
				public onStop(owner: androidx.lifecycle.LifecycleOwner): void;
				public onDestroy(owner: androidx.lifecycle.LifecycleOwner): void;
			}
			export module Manager {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<kohii.v1.core.Manager.Companion>;
				}
				export class OnSelectionListener extends java.lang.Object {
					public static class: java.lang.Class<kohii.v1.core.Manager.OnSelectionListener>;
					/**
					 * Constructs a new instance of the kohii.v1.core.Manager() when extending the interface class.
					 */
					public constructor(implementation: {
						onSelection(collection0: java.util.Collection<any>): void;
					});
					public constructor();
					public onSelection(collection0: java.util.Collection<any>): void;
				}
				export class WhenMappings extends java.lang.Object {
					public static class: java.lang.Class<kohii.v1.core.Manager.WhenMappings>;
				}
			}
		}
	}
}

declare module kohii {
	export module v1 {
		export module core {
			export class Master extends java.lang.Object implements kohii.v1.core.PlayableManager {
				public static class: java.lang.Class<kohii.v1.core.Master>;
				public static Companion: kohii.v1.core.Master.Companion;
				public registerInternal(activity: androidx.fragment.app.FragmentActivity, host: any, managerLifecycleOwner: androidx.lifecycle.LifecycleOwner, memoryMode: kohii.v1.core.MemoryMode, activeLifecycleState: androidx.lifecycle.Lifecycle.State): kohii.v1.core.Manager;
				public getDispatcher(): kohii.v1.core.Master.Dispatcher;
				public play(playable: kohii.v1.core.Playable): void;
				public onLastManagerDestroyed(group: kohii.v1.core.Group): void;
				public onGroupUpdated(group: kohii.v1.core.Group): void;
				public preferredMemoryMode(actual: kohii.v1.core.MemoryMode): kohii.v1.core.MemoryMode;
				public unlock(): void;
				public onGroupLifecycleStateChanged(): void;
				public getGroups(): java.util.Set<kohii.v1.core.Group>;
				public getPlayables(): java.util.Map<kohii.v1.core.Playable,any>;
				public getPlayablesPendingActions(): androidx.collection.ArrayMap<any,kohii.v1.core.PlaybackAction>;
				public setLock(value: boolean): void;
				public cleanupPendingPlayables(): void;
				public getRequests(): java.util.Map<globalAndroid.view.ViewGroup,kohii.v1.core.Master.BindRequest>;
				public onGroupCreated(group: kohii.v1.core.Group): void;
				public static get(context: globalAndroid.content.Context): kohii.v1.core.Master;
				public registerEngine(engine: kohii.v1.core.Engine<any>): void;
				public setGroupsMaxLifecycleState(param0: androidx.lifecycle.Lifecycle.State): void;
				public notifyPlaybackChanged(playable: kohii.v1.core.Playable, from: kohii.v1.core.Playback, to: kohii.v1.core.Playback): void;
				public bind(playable: kohii.v1.core.Playable, tag: any, container: globalAndroid.view.ViewGroup, options: kohii.v1.core.Binder.Options, callback: kotlin.jvm.functions.Function1<any,kotlin.Unit>): void;
				public unlock(target: any, scope: kohii.v1.core.Scope): void;
				public onFirstManagerCreated(group: kohii.v1.core.Group): void;
				public getApp(): globalAndroid.app.Application;
				public getGroupsMaxLifecycleState(): androidx.lifecycle.Lifecycle.State;
				public getNetworkType(): number;
				public preparePlayable(playable: kohii.v1.core.Playable, loadSource: boolean): void;
				public getManuallyStartedPlayable(): java.util.concurrent.atomic.AtomicReference<kohii.v1.core.Playable>;
				public findBucketForContainer(container: globalAndroid.view.ViewGroup): kohii.v1.core.Bucket;
				public releasePlayable(playable: kohii.v1.core.Playable): void;
				public onGroupDestroyed(group: kohii.v1.core.Group): void;
				public getPlannedManualPlayables(): androidx.collection.ArraySet<any>;
				public trySavePlaybackInfo(playable: kohii.v1.core.Playable): void;
				public onPlaybackDetached(playback: kohii.v1.core.Playback): void;
				public releasePlaybackOnInActive(playback: kohii.v1.core.Playback): boolean;
				public onNetworkChanged(): void;
				public setNetworkType(value: number): void;
				public setTrimMemoryLevel(value: number): void;
				public pause(playable: kohii.v1.core.Playable): void;
				public onBind(playable: kohii.v1.core.Playable, tag: any, manager: kohii.v1.core.Manager, container: globalAndroid.view.ViewGroup, callback: kotlin.jvm.functions.Function1<any,kotlin.Unit>, createNewPlayback: kotlin.jvm.functions.Function0<any>): void;
				public tearDown(playable: kohii.v1.core.Playable, clearState: boolean): void;
				public getEngines(): java.util.Map<java.lang.Class<any>,kohii.v1.core.Engine<any>>;
				public getLock(): boolean;
				public removeBinding(container: any): void;
				public getTrimMemoryLevel(): number;
				public onTearDown(playable: kohii.v1.core.Playable, clearState: boolean): void;
				public lock(): void;
				public tryRestorePlaybackInfo(playable: kohii.v1.core.Playable): void;
				public lock(target: any, scope: kohii.v1.core.Scope): void;
			}
			export module Master {
				export class BindRequest extends java.lang.Object {
					public static class: java.lang.Class<kohii.v1.core.Master.BindRequest>;
					public setBucket(param0: kohii.v1.core.Bucket): void;
					public getContainer(): globalAndroid.view.ViewGroup;
					public getCallback(): kotlin.jvm.functions.Function1<kohii.v1.core.Playback,kotlin.Unit>;
					public toString(): string;
					public getTag(): any;
					public onRemoved(): void;
					public getMaster(): kohii.v1.core.Master;
					public getPlayable(): kohii.v1.core.Playable;
					public getBucket(): kohii.v1.core.Bucket;
					public onBind(): void;
					public getOptions(): kohii.v1.core.Binder.Options;
					public constructor(master: kohii.v1.core.Master, playable: kohii.v1.core.Playable, container: globalAndroid.view.ViewGroup, tag: any, options: kohii.v1.core.Binder.Options, callback: kotlin.jvm.functions.Function1<any,kotlin.Unit>);
				}
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<kohii.v1.core.Master.Companion>;
					public get(context: globalAndroid.content.Context): kohii.v1.core.Master;
					public getNO_TAG(): any;
				}
				export class Dispatcher extends globalAndroid.os.Handler {
					public static class: java.lang.Class<kohii.v1.core.Master.Dispatcher>;
					public constructor(looper: globalAndroid.os.Looper);
					public constructor(callback: globalAndroid.os.Handler.Callback);
					public constructor();
					public getMaster(): kohii.v1.core.Master;
					public constructor(master: kohii.v1.core.Master);
					public constructor(looper: globalAndroid.os.Looper, callback: globalAndroid.os.Handler.Callback);
				}
				export class WhenMappings extends java.lang.Object {
					public static class: java.lang.Class<kohii.v1.core.Master.WhenMappings>;
				}
			}
		}
	}
}

declare module kohii {
	export module v1 {
		export module core {
			export class MemoryMode {
				public static class: java.lang.Class<kohii.v1.core.MemoryMode>;
				public static AUTO: kohii.v1.core.MemoryMode;
				public static LOW: kohii.v1.core.MemoryMode;
				public static NORMAL: kohii.v1.core.MemoryMode;
				public static BALANCED: kohii.v1.core.MemoryMode;
				public static HIGH: kohii.v1.core.MemoryMode;
				public static INFINITE: kohii.v1.core.MemoryMode;
				public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static valueOf(string0: string): kohii.v1.core.MemoryMode;
				public static values(): native.Array<kohii.v1.core.MemoryMode>;
			}
		}
	}
}

declare module kohii {
	export module v1 {
		export module core {
			export abstract class Playable extends java.lang.Object {
				public static class: java.lang.Class<kohii.v1.core.Playable>;
				public onRelease(): void;
				public getPlayerState(): number;
				public onPause(): void;
				public getConfig(): kohii.v1.core.Playable.Config;
				public setManager(playableManager0: kohii.v1.core.PlayableManager): void;
				public onUnbind(playback0: kohii.v1.core.Playback): void;
				public setPlayback(playback0: kohii.v1.core.Playback): void;
				public setPlaybackInfo(playbackInfo0: kohii.v1.media.PlaybackInfo): void;
				public setRenderer(object0: any): void;
				public onPrepare(boolean0: boolean): void;
				public onPlaybackPriorityChanged(playback0: kohii.v1.core.Playback, int1: number, int2: number): void;
				public constructor(media: kohii.v1.media.Media, config: kohii.v1.core.Playable.Config);
				public getRenderer(): any;
				public getTag(): any;
				public onPlay(): void;
				public getPlaybackInfo(): kohii.v1.media.PlaybackInfo;
				public setupRenderer(playback0: kohii.v1.core.Playback): void;
				public onVolumeInfoChanged(playback0: kohii.v1.core.Playback, volumeInfo1: kohii.v1.media.VolumeInfo, volumeInfo2: kohii.v1.media.VolumeInfo): void;
				public isPlaying(): boolean;
				public onConfigChange(): boolean;
				public onNetworkTypeChanged(int0: number, int1: number): void;
				public onReset(): void;
				public getPlayback(): kohii.v1.core.Playback;
				public getManager(): kohii.v1.core.PlayableManager;
				public onReady(): void;
				public teardownRenderer(playback0: kohii.v1.core.Playback): void;
				public getMedia(): kohii.v1.media.Media;
			}
			export module Playable {
				export class Config extends java.lang.Object {
					public static class: java.lang.Class<kohii.v1.core.Playable.Config>;
					public constructor(tag: any, rendererType: java.lang.Class<any>);
					public toString(): string;
					public equals(obj: any): boolean;
					public component1(): any;
					public getRendererType(): java.lang.Class<any>;
					public copy(tag: any, rendererType: java.lang.Class<any>): kohii.v1.core.Playable.Config;
					public hashCode(): number;
					public getTag(): any;
					public component2(): java.lang.Class<any>;
				}
			}
		}
	}
}

declare module kohii {
	export module v1 {
		export module core {
			export class PlayableContainer extends java.lang.Object {
				public static class: java.lang.Class<kohii.v1.core.PlayableContainer>;
				/**
				 * Constructs a new instance of the kohii.v1.core.PlayableContainer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
				});
				public constructor();
			}
		}
	}
}

declare module kohii {
	export module v1 {
		export module core {
			export abstract class PlayableCreator<RENDERER>  extends java.lang.Object {
				public static class: java.lang.Class<kohii.v1.core.PlayableCreator<any>>;
				public createPlayable(config0: kohii.v1.core.Playable.Config, media1: kohii.v1.media.Media): kohii.v1.core.Playable;
				public constructor(rendererType: java.lang.Class<RENDERER>);
				public cleanUp(): void;
				public getRendererType(): java.lang.Class<RENDERER>;
			}
		}
	}
}

declare module kohii {
	export module v1 {
		export module core {
			export class PlayableManager extends java.lang.Object {
				public static class: java.lang.Class<kohii.v1.core.PlayableManager>;
				/**
				 * Constructs a new instance of the kohii.v1.core.PlayableManager interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
				});
				public constructor();
			}
		}
	}
}

declare module kohii {
	export module v1 {
		export module core {
			export abstract class Playback extends java.lang.Object implements kohii.v1.core.PlayableContainer, kohii.v1.core.PlayerEventListener, kohii.v1.core.ErrorListener {
				public static class: java.lang.Class<kohii.v1.core.Playback>;
				public static DELAY_INFINITE: number;
				public static Companion: kohii.v1.core.Playback.Companion;
				public onPlayerError(error: com.google.android.exoplayer2.ExoPlaybackException): void;
				public rewind(): void;
				public onPlay(): void;
				public onMetadata(metadata: com.google.android.exoplayer2.metadata.Metadata): void;
				public getLock(): boolean;
				public rewind(refresh: boolean): void;
				public getToken(): kohii.v1.core.Playback.Token;
				public onMediaItemTransition(mediaItem: com.google.android.exoplayer2.MediaItem, reason: number): void;
				public setLock(value: boolean): void;
				public getConfig(): kohii.v1.core.Playback.Config;
				public getLifecycleState(): androidx.lifecycle.Lifecycle.State;
				public acquireRenderer(): any;
				public onDetached(): void;
				public onAdded(): void;
				public onVolumeChanged(volume: number): void;
				public onCues(cues: java.util.List<com.google.android.exoplayer2.text.Cue>): void;
				public detachRenderer(renderer: any): boolean;
				public onSkipSilenceEnabledChanged(skipSilenceEnabled: boolean): void;
				public onRendererAttached(renderer: any): void;
				public onRepeatModeChanged(repeatMode: number): void;
				public onRemoved(): void;
				public onPause(): void;
				public getVolumeInfo(): kohii.v1.media.VolumeInfo;
				/** @deprecated */
				public onPlayerStateChanged(playWhenReady: boolean, playbackState: number): void;
				public onAudioSessionId(audioSessionId: number): void;
				public removeStateListener(listener: kohii.v1.core.Playback.StateListener): void;
				public onTracksChanged(trackGroups: com.google.android.exoplayer2.source.TrackGroupArray, trackSelections: com.google.android.exoplayer2.trackselection.TrackSelectionArray): void;
				public toString(): string;
				public setPlaybackVolumeInfo(value: kohii.v1.media.VolumeInfo): void;
				public getPlayerParametersChangeListener(): kohii.v1.internal.PlayerParametersChangeListener;
				public getPlayerParameters(): kohii.v1.core.PlayerParameters;
				public onSurfaceSizeChanged(width: number, height: number): void;
				public attachRenderer(renderer: any): boolean;
				public setPlayerParameters(value: kohii.v1.core.PlayerParameters): void;
				public onError(error: java.lang.Exception): void;
				/** @deprecated */
				public onLoadingChanged(isLoading: boolean): void;
				public isAttached(): boolean;
				public addCallback(callback: kohii.v1.core.Playback.Callback): void;
				/** @deprecated */
				public onTimelineChanged(timeline: com.google.android.exoplayer2.Timeline, manifest: any, reason: number): void;
				public setLifecycleState(param0: androidx.lifecycle.Lifecycle.State): void;
				public compareWith(other: kohii.v1.core.Playback, orientation: number): number;
				public updateToken(): kohii.v1.core.Playback.Token;
				public onPlaybackParametersChanged(playbackParameters: com.google.android.exoplayer2.PlaybackParameters): void;
				public setPlaybackPriority(value: number): void;
				public onDetachRenderer(object0: any): boolean;
				public onNetworkTypeChanged(networkType: number): void;
				public addStateListener(listener: kohii.v1.core.Playback.StateListener): void;
				public constructor(manager: kohii.v1.core.Manager, bucket: kohii.v1.core.Bucket, container: globalAndroid.view.ViewGroup, config: kohii.v1.core.Playback.Config);
				public getContainer(): globalAndroid.view.ViewGroup;
				public onIsPlayingChanged(isPlaying: boolean): void;
				public onPlayWhenReadyChanged(playWhenReady: boolean, reason: number): void;
				public onTimelineChanged(timeline: com.google.android.exoplayer2.Timeline, reason: number): void;
				public onRenderedFirstFrame(): void;
				public onActive(): void;
				public onPositionDiscontinuity(reason: number): void;
				public isActive(): boolean;
				public removeCallback(callback: kohii.v1.core.Playback.Callback): void;
				public setPlayable(value: kohii.v1.core.Playable): void;
				public getTag(): any;
				public onShuffleModeEnabledChanged(shuffleModeEnabled: boolean): void;
				public setPlayerParametersChangeListener(param0: kohii.v1.internal.PlayerParametersChangeListener): void;
				public getContainerRect(): globalAndroid.graphics.Rect;
				public getManager(): kohii.v1.core.Manager;
				public getPlayable(): kohii.v1.core.Playable;
				public onPlayerStateChanged(playWhenReady: boolean, playbackState: number): void;
				public onPlaybackSuppressionReasonChanged(playbackSuppressionReason: number): void;
				public onExperimentalOffloadSchedulingEnabledChanged(offloadSchedulingEnabled: boolean): void;
				public onInActive(): void;
				public getBucket(): kohii.v1.core.Bucket;
				/** @deprecated */
				public onSeekProcessed(): void;
				public onPlaybackStateChanged(state: number): void;
				public getPlaybackVolumeInfo(): kohii.v1.media.VolumeInfo;
				public onAttachRenderer(object0: any): boolean;
				public onVideoSizeChanged(width: number, height: number, unappliedRotationDegrees: number, pixelWidthHeightRatio: number): void;
				public onRendererDetached(renderer: any): void;
				public onRefresh(): void;
				public unbind(): void;
				public releaseRenderer(renderer: any): boolean;
				public onAttached(): void;
				public getPlaybackPriority(): number;
				public onIsLoadingChanged(isLoading: boolean): void;
				public onAudioAttributesChanged(audioAttributes: com.google.android.exoplayer2.audio.AudioAttributes): void;
			}
			export module Playback {
				export class ArtworkHintListener extends java.lang.Object {
					public static class: java.lang.Class<kohii.v1.core.Playback.ArtworkHintListener>;
					/**
					 * Constructs a new instance of the kohii.v1.core.Playback() when extending the interface class.
					 */
					public constructor(implementation: {
						onArtworkHint(playback0: kohii.v1.core.Playback, boolean1: boolean, long2: number, int3: number): void;
					});
					public constructor();
					public onArtworkHint(playback0: kohii.v1.core.Playback, boolean1: boolean, long2: number, int3: number): void;
				}
				export class Callback extends java.lang.Object {
					public static class: java.lang.Class<kohii.v1.core.Playback.Callback>;
					/**
					 * Constructs a new instance of the kohii.v1.core.Playback() when extending the interface class.
					 */
					public constructor(implementation: {
						onActive(playback: kohii.v1.core.Playback): void;
						onInActive(playback: kohii.v1.core.Playback): void;
						onAdded(playback: kohii.v1.core.Playback): void;
						onRemoved(playback: kohii.v1.core.Playback): void;
						onAttached(playback: kohii.v1.core.Playback): void;
						onDetached(playback: kohii.v1.core.Playback): void;
					});
					public constructor();
					public onActive(playback: kohii.v1.core.Playback): void;
					public onInActive(playback: kohii.v1.core.Playback): void;
					public onAttached(playback: kohii.v1.core.Playback): void;
					public onDetached(playback: kohii.v1.core.Playback): void;
					public onRemoved(playback: kohii.v1.core.Playback): void;
					public onAdded(playback: kohii.v1.core.Playback): void;
				}
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<kohii.v1.core.Playback.Companion>;
					public getBOTH_AXIS_COMPARATOR(): java.util.Comparator<kohii.v1.core.Playback>;
					public getVERTICAL_COMPARATOR(): java.util.Comparator<kohii.v1.core.Playback>;
					public getCENTER_Y(): java.util.Comparator<kohii.v1.core.Playback.Token>;
					public getHORIZONTAL_COMPARATOR(): java.util.Comparator<kohii.v1.core.Playback>;
					public getCENTER_X(): java.util.Comparator<kohii.v1.core.Playback.Token>;
				}
				export class Config extends java.lang.Object {
					public static class: java.lang.Class<kohii.v1.core.Playback.Config>;
					public component7(): java.util.Set<kohii.v1.core.Playback.Callback>;
					public equals(obj: any): boolean;
					public getPreload(): boolean;
					public getTag(): any;
					public getRepeatMode(): number;
					public component3(): number;
					public component12(): kohii.v1.core.Playback.NetworkTypeChangeListener;
					public getReleaseOnInActive(): boolean;
					public component5(): boolean;
					public getNetworkTypeChangeListener(): kohii.v1.core.Playback.NetworkTypeChangeListener;
					public toString(): string;
					public getInitialPlaybackInfo(): kohii.v1.media.PlaybackInfo;
					public component1(): any;
					public getDelay(): number;
					public constructor();
					public component10(): kohii.v1.core.Playback.ArtworkHintListener;
					public getCallbacks(): java.util.Set<kohii.v1.core.Playback.Callback>;
					public getTokenUpdateListener(): kohii.v1.core.Playback.TokenUpdateListener;
					public hashCode(): number;
					public getArtworkHintListener(): kohii.v1.core.Playback.ArtworkHintListener;
					public component9(): kohii.v1.media.PlaybackInfo;
					public component11(): kohii.v1.core.Playback.TokenUpdateListener;
					public component8(): kohii.v1.core.Playback.Controller;
					public copy(tag: any, delay: number, threshold: number, preload: boolean, releaseOnInActive: boolean, repeatMode: number, callbacks: java.util.Set<any>, controller: kohii.v1.core.Playback.Controller, initialPlaybackInfo: kohii.v1.media.PlaybackInfo, artworkHintListener: kohii.v1.core.Playback.ArtworkHintListener, tokenUpdateListener: kohii.v1.core.Playback.TokenUpdateListener, networkTypeChangeListener: kohii.v1.core.Playback.NetworkTypeChangeListener): kohii.v1.core.Playback.Config;
					public getThreshold(): number;
					public component6(): number;
					public constructor(tag: any, delay: number, threshold: number, preload: boolean, releaseOnInActive: boolean, repeatMode: number, callbacks: java.util.Set<any>, controller: kohii.v1.core.Playback.Controller, initialPlaybackInfo: kohii.v1.media.PlaybackInfo, artworkHintListener: kohii.v1.core.Playback.ArtworkHintListener, tokenUpdateListener: kohii.v1.core.Playback.TokenUpdateListener, networkTypeChangeListener: kohii.v1.core.Playback.NetworkTypeChangeListener);
					public component4(): boolean;
					public component2(): number;
					public getController(): kohii.v1.core.Playback.Controller;
				}
				export class Controller extends java.lang.Object {
					public static class: java.lang.Class<kohii.v1.core.Playback.Controller>;
					/**
					 * Constructs a new instance of the kohii.v1.core.Playback() when extending the interface class.
					 */
					public constructor(implementation: {
						kohiiCanPause(): boolean;
						kohiiCanStart(): boolean;
						setupRenderer(playback: kohii.v1.core.Playback, renderer: any): void;
						teardownRenderer(playback: kohii.v1.core.Playback, renderer: any): void;
					});
					public constructor();
					public setupRenderer(playback: kohii.v1.core.Playback, renderer: any): void;
					public teardownRenderer(playback: kohii.v1.core.Playback, renderer: any): void;
					public kohiiCanPause(): boolean;
					public kohiiCanStart(): boolean;
				}
				export class NetworkTypeChangeListener extends java.lang.Object {
					public static class: java.lang.Class<kohii.v1.core.Playback.NetworkTypeChangeListener>;
					/**
					 * Constructs a new instance of the kohii.v1.core.Playback() when extending the interface class.
					 */
					public constructor(implementation: {
						onNetworkTypeChanged(int0: number): kohii.v1.core.PlayerParameters;
					});
					public constructor();
					public onNetworkTypeChanged(int0: number): kohii.v1.core.PlayerParameters;
				}
				export class StateListener extends java.lang.Object {
					public static class: java.lang.Class<kohii.v1.core.Playback.StateListener>;
					/**
					 * Constructs a new instance of the kohii.v1.core.Playback() when extending the interface class.
					 */
					public constructor(implementation: {
						onRendered(playback: kohii.v1.core.Playback): void;
						onBuffering(playback: kohii.v1.core.Playback, playWhenReady: boolean): void;
						onPlaying(playback: kohii.v1.core.Playback): void;
						onPaused(playback: kohii.v1.core.Playback): void;
						onEnded(playback: kohii.v1.core.Playback): void;
						onVideoSizeChanged(playback: kohii.v1.core.Playback, width: number, height: number, unAppliedRotationDegrees: number, pixelWidthHeightRatio: number): void;
						onError(playback: kohii.v1.core.Playback, exception: java.lang.Exception): void;
					});
					public constructor();
					public onVideoSizeChanged(playback: kohii.v1.core.Playback, width: number, height: number, unAppliedRotationDegrees: number, pixelWidthHeightRatio: number): void;
					public onBuffering(playback: kohii.v1.core.Playback, playWhenReady: boolean): void;
					public onPaused(playback: kohii.v1.core.Playback): void;
					public onEnded(playback: kohii.v1.core.Playback): void;
					public onRendered(playback: kohii.v1.core.Playback): void;
					public onError(playback: kohii.v1.core.Playback, exception: java.lang.Exception): void;
					public onPlaying(playback: kohii.v1.core.Playback): void;
				}
				export class Token extends java.lang.Object {
					public static class: java.lang.Class<kohii.v1.core.Playback.Token>;
					public shouldPlay(): boolean;
					public getContainerRect(): globalAndroid.graphics.Rect;
					public constructor(threshold: number, areaOffset: number, containerRect: globalAndroid.graphics.Rect, containerWidth: number, containerHeight: number);
					public toString(): string;
					public shouldPrepare(): boolean;
					public getAreaOffset(): number;
					public getContainerHeight(): number;
					public getContainerWidth(): number;
				}
				export class TokenUpdateListener extends java.lang.Object {
					public static class: java.lang.Class<kohii.v1.core.Playback.TokenUpdateListener>;
					/**
					 * Constructs a new instance of the kohii.v1.core.Playback() when extending the interface class.
					 */
					public constructor(implementation: {
						onTokenUpdate(playback0: kohii.v1.core.Playback, token1: kohii.v1.core.Playback.Token): void;
					});
					public constructor();
					public onTokenUpdate(playback0: kohii.v1.core.Playback, token1: kohii.v1.core.Playback.Token): void;
				}
			}
		}
	}
}

declare module kohii {
	export module v1 {
		export module core {
			export class PlaybackAction extends java.lang.Object {
				public static class: java.lang.Class<kohii.v1.core.PlaybackAction>;
				public static equals(boolean0: boolean, object1: any): boolean;
				public equals(obj: any): boolean;
				public static hashCode(boolean0: boolean): number;
				public hashCode(): number;
				public static toString(boolean0: boolean): string;
				public static constructor(value: boolean): boolean;
				public static equals(p1: boolean, p2: boolean): boolean;
				public toString(): string;
				public getValue(): boolean;
			}
		}
	}
}

declare module kohii {
	export module v1 {
		export module core {
			export class PlaybackKt extends java.lang.Object {
				public static class: java.lang.Class<kohii.v1.core.PlaybackKt>;
				public static controller(kohiiCanStart: boolean, kohiiCanPause: boolean, setupRenderer: kotlin.jvm.functions.Function2<any,any,kotlin.Unit>): kohii.v1.core.Playback.Controller;
			}
		}
	}
}

declare module kohii {
	export module v1 {
		export module core {
			export class PlayerEventListener extends java.lang.Object implements com.google.android.exoplayer2.Player.EventListener, com.google.android.exoplayer2.video.VideoListener, com.google.android.exoplayer2.audio.AudioListener, com.google.android.exoplayer2.text.TextOutput, com.google.android.exoplayer2.metadata.MetadataOutput {
				public static class: java.lang.Class<kohii.v1.core.PlayerEventListener>;
				/**
				 * Constructs a new instance of the kohii.v1.core.PlayerEventListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onCues(cues: java.util.List<com.google.android.exoplayer2.text.Cue>): void;
					onMetadata(metadata: com.google.android.exoplayer2.metadata.Metadata): void;
					onTimelineChanged(timeline: com.google.android.exoplayer2.Timeline, reason: number): void;
					onTimelineChanged(timeline: com.google.android.exoplayer2.Timeline, manifest: any, reason: number): void;
					onMediaItemTransition(mediaItem: com.google.android.exoplayer2.MediaItem, reason: number): void;
					onTracksChanged(trackGroups: com.google.android.exoplayer2.source.TrackGroupArray, trackSelections: com.google.android.exoplayer2.trackselection.TrackSelectionArray): void;
					onIsLoadingChanged(isLoading: boolean): void;
					onLoadingChanged(isLoading: boolean): void;
					onPlayerStateChanged(playWhenReady: boolean, playbackState: number): void;
					onPlaybackStateChanged(state: number): void;
					onPlayWhenReadyChanged(playWhenReady: boolean, reason: number): void;
					onPlaybackSuppressionReasonChanged(playbackSuppressionReason: number): void;
					onIsPlayingChanged(isPlaying: boolean): void;
					onRepeatModeChanged(repeatMode: number): void;
					onShuffleModeEnabledChanged(shuffleModeEnabled: boolean): void;
					onPlayerError(error: com.google.android.exoplayer2.ExoPlaybackException): void;
					onPositionDiscontinuity(reason: number): void;
					onPlaybackParametersChanged(playbackParameters: com.google.android.exoplayer2.PlaybackParameters): void;
					onSeekProcessed(): void;
					onExperimentalOffloadSchedulingEnabledChanged(offloadSchedulingEnabled: boolean): void;
					onVideoSizeChanged(width: number, height: number, unappliedRotationDegrees: number, pixelWidthHeightRatio: number): void;
					onSurfaceSizeChanged(width: number, height: number): void;
					onRenderedFirstFrame(): void;
					onAudioSessionId(audioSessionId: number): void;
					onAudioAttributesChanged(audioAttributes: com.google.android.exoplayer2.audio.AudioAttributes): void;
					onVolumeChanged(volume: number): void;
					onSkipSilenceEnabledChanged(skipSilenceEnabled: boolean): void;
					onCues(cues: java.util.List<com.google.android.exoplayer2.text.Cue>): void;
					onMetadata(metadata: com.google.android.exoplayer2.metadata.Metadata): void;
				});
				public constructor();
				public onPlayerError(error: com.google.android.exoplayer2.ExoPlaybackException): void;
				/** @deprecated */
				public onTimelineChanged(timeline: com.google.android.exoplayer2.Timeline, manifest: any, reason: number): void;
				public onPlaybackParametersChanged(playbackParameters: com.google.android.exoplayer2.PlaybackParameters): void;
				public onMetadata(metadata: com.google.android.exoplayer2.metadata.Metadata): void;
				public onIsPlayingChanged(isPlaying: boolean): void;
				public onPlayWhenReadyChanged(playWhenReady: boolean, reason: number): void;
				public onMediaItemTransition(mediaItem: com.google.android.exoplayer2.MediaItem, reason: number): void;
				public onTimelineChanged(timeline: com.google.android.exoplayer2.Timeline, reason: number): void;
				public onRenderedFirstFrame(): void;
				public onPositionDiscontinuity(reason: number): void;
				public onShuffleModeEnabledChanged(shuffleModeEnabled: boolean): void;
				public onVolumeChanged(volume: number): void;
				public onCues(cues: java.util.List<com.google.android.exoplayer2.text.Cue>): void;
				public onSkipSilenceEnabledChanged(skipSilenceEnabled: boolean): void;
				public onRepeatModeChanged(repeatMode: number): void;
				public onPlaybackSuppressionReasonChanged(playbackSuppressionReason: number): void;
				public onExperimentalOffloadSchedulingEnabledChanged(offloadSchedulingEnabled: boolean): void;
				/** @deprecated */
				public onPlayerStateChanged(playWhenReady: boolean, playbackState: number): void;
				public onAudioSessionId(audioSessionId: number): void;
				public onTracksChanged(trackGroups: com.google.android.exoplayer2.source.TrackGroupArray, trackSelections: com.google.android.exoplayer2.trackselection.TrackSelectionArray): void;
				/** @deprecated */
				public onSeekProcessed(): void;
				public onPlaybackStateChanged(state: number): void;
				public onVideoSizeChanged(width: number, height: number, unappliedRotationDegrees: number, pixelWidthHeightRatio: number): void;
				public onSurfaceSizeChanged(width: number, height: number): void;
				/** @deprecated */
				public onLoadingChanged(isLoading: boolean): void;
				public onIsLoadingChanged(isLoading: boolean): void;
				public onAudioAttributesChanged(audioAttributes: com.google.android.exoplayer2.audio.AudioAttributes): void;
			}
		}
	}
}

declare module kohii {
	export module v1 {
		export module core {
			export class PlayerEventListeners extends java.util.concurrent.CopyOnWriteArraySet<kohii.v1.core.PlayerEventListener> implements kohii.v1.core.PlayerEventListener  {
				public static class: java.lang.Class<kohii.v1.core.PlayerEventListeners>;
				public onPlayerError(error: com.google.android.exoplayer2.ExoPlaybackException): void;
				public onMetadata(metadata: com.google.android.exoplayer2.metadata.Metadata): void;
				public onMediaItemTransition(mediaItem: com.google.android.exoplayer2.MediaItem, reason: number): void;
				public constructor();
				public toArray(): native.Array<any>;
				public getSize(): number;
				public hashCode(): number;
				public onVolumeChanged(volume: number): void;
				public onCues(cues: java.util.List<com.google.android.exoplayer2.text.Cue>): void;
				public constructor(c: java.util.Collection<any>);
				public addAll(c: java.util.Collection<any>): boolean;
				public isEmpty(): boolean;
				public remove(playerEventListener0: kohii.v1.core.PlayerEventListener): boolean;
				public onSkipSilenceEnabledChanged(skipSilenceEnabled: boolean): void;
				public onRepeatModeChanged(repeatMode: number): void;
				public spliterator(): java.util.Spliterator<any>;
				public stream(): java.util.stream.Stream<any>;
				/** @deprecated */
				public onPlayerStateChanged(playWhenReady: boolean, playbackState: number): void;
				public onAudioSessionId(audioSessionId: number): void;
				public iterator(): java.util.Iterator<any>;
				public onTracksChanged(trackGroups: com.google.android.exoplayer2.source.TrackGroupArray, trackSelections: com.google.android.exoplayer2.trackselection.TrackSelectionArray): void;
				public contains(playerEventListener0: kohii.v1.core.PlayerEventListener): boolean;
				public containsAll(c: java.util.Collection<any>): boolean;
				public size(): number;
				public removeIf(filter: any /* any*/): boolean;
				public onSurfaceSizeChanged(width: number, height: number): void;
				/** @deprecated */
				public onLoadingChanged(isLoading: boolean): void;
				public retainAll(c: java.util.Collection<any>): boolean;
				/** @deprecated */
				public onTimelineChanged(timeline: com.google.android.exoplayer2.Timeline, manifest: any, reason: number): void;
				public parallelStream(): java.util.stream.Stream<any>;
				public onSeekProcessed(): void;
				public onPlaybackParametersChanged(playbackParameters: com.google.android.exoplayer2.PlaybackParameters): void;
				public onIsPlayingChanged(isPlaying: boolean): void;
				public removeAll(c: java.util.Collection<any>): boolean;
				public onPlayWhenReadyChanged(playWhenReady: boolean, reason: number): void;
				public onTimelineChanged(timeline: com.google.android.exoplayer2.Timeline, reason: number): void;
				public onRenderedFirstFrame(): void;
				public add(e: any): boolean;
				public onPositionDiscontinuity(reason: number): void;
				public clear(): void;
				public onShuffleModeEnabledChanged(shuffleModeEnabled: boolean): void;
				public equals(o: any): boolean;
				public onPlayerStateChanged(playWhenReady: boolean, playbackState: number): void;
				public contains(o: any): boolean;
				public toArray(a: native.Array<any>): native.Array<any>;
				public onPlaybackSuppressionReasonChanged(playbackSuppressionReason: number): void;
				public onExperimentalOffloadSchedulingEnabledChanged(offloadSchedulingEnabled: boolean): void;
				public remove(o: any): boolean;
				/** @deprecated */
				public onSeekProcessed(): void;
				public onPlaybackStateChanged(state: number): void;
				public onLoadingChanged(isLoading: boolean): void;
				public onVideoSizeChanged(width: number, height: number, unappliedRotationDegrees: number, pixelWidthHeightRatio: number): void;
				public onAudioAttributesChanged(audioAttributes: com.google.android.exoplayer2.audio.AudioAttributes): void;
				public onIsLoadingChanged(isLoading: boolean): void;
			}
		}
	}
}

declare module kohii {
	export module v1 {
		export module core {
			export class PlayerParameters extends java.lang.Object {
				public static class: java.lang.Class<kohii.v1.core.PlayerParameters>;
				public static Companion: kohii.v1.core.PlayerParameters.Companion;
				public getMaxVideoHeight(): number;
				public component4(): number;
				public component2(): number;
				public component1(): number;
				public copy(maxVideoWidth: number, maxVideoHeight: number, maxVideoBitrate: number, maxAudioBitrate: number): kohii.v1.core.PlayerParameters;
				public toString(): string;
				public getMaxAudioBitrate(): number;
				public constructor();
				public getMaxVideoBitrate(): number;
				public component3(): number;
				public getMaxVideoWidth(): number;
				public constructor(maxVideoWidth: number, maxVideoHeight: number, maxVideoBitrate: number, maxAudioBitrate: number);
				public equals(obj: any): boolean;
				public playerShouldStart(): boolean;
				public hashCode(): number;
			}
			export module PlayerParameters {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<kohii.v1.core.PlayerParameters.Companion>;
					public getDEFAULT(): kohii.v1.core.PlayerParameters;
				}
			}
		}
	}
}

declare module kohii {
	export module v1 {
		export module core {
			export abstract class PlayerPool<PLAYER>  extends java.lang.Object {
				public static class: java.lang.Class<kohii.v1.core.PlayerPool<any>>;
				public static Companion: kohii.v1.core.PlayerPool.Companion;
				public destroyPlayer(object0: PLAYER): void;
				public getPlayer(media: kohii.v1.media.Media): PLAYER;
				public constructor(poolSize: number);
				public resetPlayer(player: PLAYER): void;
				public createPlayer(media0: kohii.v1.media.Media): PLAYER;
				public putPlayer(media: kohii.v1.media.Media, player: PLAYER): boolean;
				public clear(): void;
				public recyclePlayerForMedia(media: kohii.v1.media.Media): boolean;
				public constructor();
			}
			export module PlayerPool {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<kohii.v1.core.PlayerPool.Companion>;
					public getDEFAULT_POOL_SIZE(): number;
				}
			}
		}
	}
}

declare module kohii {
	export module v1 {
		export module core {
			export class Prioritized extends java.lang.Comparable<kohii.v1.core.Prioritized> {
				public static class: java.lang.Class<kohii.v1.core.Prioritized>;
				/**
				 * Constructs a new instance of the kohii.v1.core.Prioritized interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					compareTo(other: kohii.v1.core.Prioritized): number;
					compareTo(object0: any): number;
				});
				public constructor();
				public compareTo(other: kohii.v1.core.Prioritized): number;
			}
		}
	}
}

declare module kohii {
	export module v1 {
		export module core {
			export class Rebinder extends java.lang.Object implements globalAndroid.os.Parcelable {
				public static class: java.lang.Class<kohii.v1.core.Rebinder>;
				public static CREATOR: globalAndroid.os.Parcelable.Creator<any>;
				public getOptions(): kohii.v1.core.Rebinder.Options;
				public bind(engine: kohii.v1.core.Engine<any>, container: globalAndroid.view.ViewGroup, callback: kotlin.jvm.functions.Function1<any,kotlin.Unit>): void;
				public toString(): string;
				public with(options: kotlin.jvm.functions.Function1<any,kotlin.Unit>): kohii.v1.core.Rebinder;
				public writeToParcel(parcel: globalAndroid.os.Parcel, flags: number): void;
				public equals(obj: any): boolean;
				public copy(tag: any): kohii.v1.core.Rebinder;
				public hashCode(): number;
				public describeContents(): number;
				public getTag(): any;
				public component1(): any;
				public constructor(tag: any);
				public setOptions(param0: kohii.v1.core.Rebinder.Options): void;
			}
			export module Rebinder {
				export class Creator extends java.lang.Object implements globalAndroid.os.Parcelable.Creator<any> {
					public static class: java.lang.Class<kohii.v1.core.Rebinder.Creator>;
					public constructor();
					public newArray(size: number): native.Array<any>;
					public createFromParcel(in0: globalAndroid.os.Parcel): any;
				}
				export class Options extends java.lang.Object {
					public static class: java.lang.Class<kohii.v1.core.Rebinder.Options>;
					public getPreload(): boolean;
					public getArtworkHintListener(): kohii.v1.core.Playback.ArtworkHintListener;
					public getRepeatMode(): number;
					public setArtworkHintListener(param0: kohii.v1.core.Playback.ArtworkHintListener): void;
					public getNetworkTypeChangeListener(): kohii.v1.core.Playback.NetworkTypeChangeListener;
					public getThreshold(): number;
					public setThreshold(param0: number): void;
					public constructor();
					public setTokenUpdateListener(param0: kohii.v1.core.Playback.TokenUpdateListener): void;
					public setNetworkTypeChangeListener(param0: kohii.v1.core.Playback.NetworkTypeChangeListener): void;
					public setRepeatMode(param0: number): void;
					public getTokenUpdateListener(): kohii.v1.core.Playback.TokenUpdateListener;
					public getCallbacks(): java.util.Set<kohii.v1.core.Playback.Callback>;
					public setPreload(param0: boolean): void;
					public getController(): kohii.v1.core.Playback.Controller;
					public setController(param0: kohii.v1.core.Playback.Controller): void;
				}
			}
		}
	}
}

declare module kohii {
	export module v1 {
		export module core {
			export abstract class RecycledRendererProvider extends java.lang.Object implements kohii.v1.core.RendererProvider {
				public static class: java.lang.Class<kohii.v1.core.RecycledRendererProvider>;
				public getRendererType(container: globalAndroid.view.ViewGroup, media: kohii.v1.media.Media): number;
				public acquireRenderer(playback: kohii.v1.core.Playback, media: kohii.v1.media.Media): any;
				public onStart(owner: androidx.lifecycle.LifecycleOwner): void;
				public constructor(poolSize: number);
				public onCreate(owner: androidx.lifecycle.LifecycleOwner): void;
				public releaseRenderer(playback: kohii.v1.core.Playback, media: kohii.v1.media.Media, renderer: any): boolean;
				public constructor();
				public createRenderer(playback0: kohii.v1.core.Playback, int1: number): any;
				public onClear(renderer: any): void;
				public clear(): void;
				public onResume(owner: androidx.lifecycle.LifecycleOwner): void;
				public onPause(owner: androidx.lifecycle.LifecycleOwner): void;
				public onStop(owner: androidx.lifecycle.LifecycleOwner): void;
				public onDestroy(owner: androidx.lifecycle.LifecycleOwner): void;
			}
		}
	}
}

declare module kohii {
	export module v1 {
		export module core {
			export class RendererProvider extends java.lang.Object implements androidx.lifecycle.DefaultLifecycleObserver {
				public static class: java.lang.Class<kohii.v1.core.RendererProvider>;
				/**
				 * Constructs a new instance of the kohii.v1.core.RendererProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					acquireRenderer(playback: kohii.v1.core.Playback, media: kohii.v1.media.Media): any;
					releaseRenderer(playback: kohii.v1.core.Playback, media: kohii.v1.media.Media, renderer: any): boolean;
					clear(): void;
					onDestroy(owner: androidx.lifecycle.LifecycleOwner): void;
					onCreate(owner: androidx.lifecycle.LifecycleOwner): void;
					onStart(owner: androidx.lifecycle.LifecycleOwner): void;
					onResume(owner: androidx.lifecycle.LifecycleOwner): void;
					onPause(owner: androidx.lifecycle.LifecycleOwner): void;
					onStop(owner: androidx.lifecycle.LifecycleOwner): void;
					onDestroy(owner: androidx.lifecycle.LifecycleOwner): void;
					onCreate(owner: androidx.lifecycle.LifecycleOwner): void;
					onStart(owner: androidx.lifecycle.LifecycleOwner): void;
					onResume(owner: androidx.lifecycle.LifecycleOwner): void;
					onPause(owner: androidx.lifecycle.LifecycleOwner): void;
					onStop(owner: androidx.lifecycle.LifecycleOwner): void;
					onDestroy(owner: androidx.lifecycle.LifecycleOwner): void;
				});
				public constructor();
				public acquireRenderer(playback: kohii.v1.core.Playback, media: kohii.v1.media.Media): any;
				public onStart(owner: androidx.lifecycle.LifecycleOwner): void;
				public clear(): void;
				public onResume(owner: androidx.lifecycle.LifecycleOwner): void;
				public onPause(owner: androidx.lifecycle.LifecycleOwner): void;
				public onStop(owner: androidx.lifecycle.LifecycleOwner): void;
				public onCreate(owner: androidx.lifecycle.LifecycleOwner): void;
				public onDestroy(owner: androidx.lifecycle.LifecycleOwner): void;
				public releaseRenderer(playback: kohii.v1.core.Playback, media: kohii.v1.media.Media, renderer: any): boolean;
			}
		}
	}
}

declare module kohii {
	export module v1 {
		export module core {
			export class Scope {
				public static class: java.lang.Class<kohii.v1.core.Scope>;
				public static GLOBAL: kohii.v1.core.Scope;
				public static GROUP: kohii.v1.core.Scope;
				public static MANAGER: kohii.v1.core.Scope;
				public static BUCKET: kohii.v1.core.Scope;
				public static PLAYBACK: kohii.v1.core.Scope;
				public static values(): native.Array<kohii.v1.core.Scope>;
				public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static valueOf(string0: string): kohii.v1.core.Scope;
			}
		}
	}
}

declare module kohii {
	export module v1 {
		export module core {
			export abstract class Strategy extends kotlin.jvm.functions.Function1<java.util.Collection<any>,java.util.Collection<any>> {
				public static class: java.lang.Class<kohii.v1.core.Strategy>;
				public invoke(object0: any): any;
			}
			export module Strategy {
				export class MULTI_PLAYER extends kohii.v1.core.Strategy {
					public static class: java.lang.Class<kohii.v1.core.Strategy.MULTI_PLAYER>;
					public static INSTANCE: kohii.v1.core.Strategy.MULTI_PLAYER;
					public invoke(playbacks: java.util.Collection<any>): java.util.Collection<kohii.v1.core.Playback>;
					public invoke(object0: any): any;
				}
				export class NO_PLAYER extends kohii.v1.core.Strategy {
					public static class: java.lang.Class<kohii.v1.core.Strategy.NO_PLAYER>;
					public static INSTANCE: kohii.v1.core.Strategy.NO_PLAYER;
					public invoke(playbacks: java.util.Collection<any>): java.util.Collection<kohii.v1.core.Playback>;
					public invoke(object0: any): any;
				}
				export class SINGLE_PLAYER extends kohii.v1.core.Strategy {
					public static class: java.lang.Class<kohii.v1.core.Strategy.SINGLE_PLAYER>;
					public static INSTANCE: kohii.v1.core.Strategy.SINGLE_PLAYER;
					public invoke(playbacks: java.util.Collection<any>): java.util.Collection<kohii.v1.core.Playback>;
					public invoke(object0: any): any;
				}
			}
		}
	}
}

declare module kohii {
	export module v1 {
		export module core {
			export class VideoSize extends java.lang.Object {
				public static class: java.lang.Class<kohii.v1.core.VideoSize>;
				public static Companion: kohii.v1.core.VideoSize.Companion;
				public equals(obj: any): boolean;
				public component2(): number;
				public hashCode(): number;
				public getMaxWidth(): number;
				public component1(): number;
				public toString(): string;
				public getMaxHeight(): number;
				public constructor(maxWidth: number, maxHeight: number);
				public copy(maxWidth: number, maxHeight: number): kohii.v1.core.VideoSize;
			}
			export module VideoSize {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<kohii.v1.core.VideoSize.Companion>;
					public getSD(): kohii.v1.core.VideoSize;
					public getORIGINAL(): kohii.v1.core.VideoSize;
					public getUHD(): kohii.v1.core.VideoSize;
					public getNONE(): kohii.v1.core.VideoSize;
					public getFHD(): kohii.v1.core.VideoSize;
					public getHD(): kohii.v1.core.VideoSize;
				}
			}
		}
	}
}

declare module kohii {
	export module v1 {
		export module core {
			export abstract class ViewRendererProvider extends kohii.v1.core.RecycledRendererProvider {
				public static class: java.lang.Class<kohii.v1.core.ViewRendererProvider>;
				public acquireRenderer(playback: kohii.v1.core.Playback, media: kohii.v1.media.Media): any;
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
		export module core {
			export class VolumeChangedListener extends java.lang.Object {
				public static class: java.lang.Class<kohii.v1.core.VolumeChangedListener>;
				/**
				 * Constructs a new instance of the kohii.v1.core.VolumeChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onVolumeChanged(volumeInfo0: kohii.v1.media.VolumeInfo): void;
				});
				public constructor();
				public onVolumeChanged(volumeInfo0: kohii.v1.media.VolumeInfo): void;
			}
		}
	}
}

declare module kohii {
	export module v1 {
		export module core {
			export class VolumeChangedListeners extends java.util.concurrent.CopyOnWriteArraySet<kohii.v1.core.VolumeChangedListener> implements kohii.v1.core.VolumeChangedListener  {
				public static class: java.lang.Class<kohii.v1.core.VolumeChangedListeners>;
				public parallelStream(): java.util.stream.Stream<any>;
				public removeAll(c: java.util.Collection<any>): boolean;
				public constructor();
				public toArray(): native.Array<any>;
				public add(e: any): boolean;
				public getSize(): number;
				public hashCode(): number;
				public contains(volumeChangedListener0: kohii.v1.core.VolumeChangedListener): boolean;
				public clear(): void;
				public constructor(c: java.util.Collection<any>);
				public addAll(c: java.util.Collection<any>): boolean;
				public equals(o: any): boolean;
				public isEmpty(): boolean;
				public contains(o: any): boolean;
				public spliterator(): java.util.Spliterator<any>;
				public toArray(a: native.Array<any>): native.Array<any>;
				public stream(): java.util.stream.Stream<any>;
				public remove(o: any): boolean;
				public iterator(): java.util.Iterator<any>;
				public onVolumeChanged(volumeInfo: kohii.v1.media.VolumeInfo): void;
				public remove(volumeChangedListener0: kohii.v1.core.VolumeChangedListener): boolean;
				public containsAll(c: java.util.Collection<any>): boolean;
				public size(): number;
				public removeIf(filter: any /* any*/): boolean;
				public retainAll(c: java.util.Collection<any>): boolean;
			}
		}
	}
}

declare module kohii {
	export module v1 {
		export module core {
			export class VolumeInfoController extends java.lang.Object {
				public static class: java.lang.Class<kohii.v1.core.VolumeInfoController>;
				/**
				 * Constructs a new instance of the kohii.v1.core.VolumeInfoController interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getVolumeInfo(): kohii.v1.media.VolumeInfo;
					setVolumeInfo(volumeInfo0: kohii.v1.media.VolumeInfo): boolean;
					addVolumeChangedListener(volumeChangedListener0: kohii.v1.core.VolumeChangedListener): void;
					removeVolumeChangedListener(volumeChangedListener0: kohii.v1.core.VolumeChangedListener): void;
				});
				public constructor();
				public setVolumeInfo(volumeInfo0: kohii.v1.media.VolumeInfo): boolean;
				public getVolumeInfo(): kohii.v1.media.VolumeInfo;
				public addVolumeChangedListener(volumeChangedListener0: kohii.v1.core.VolumeChangedListener): void;
				public removeVolumeChangedListener(volumeChangedListener0: kohii.v1.core.VolumeChangedListener): void;
			}
		}
	}
}

declare module kohii {
	export module v1 {
		export module internal {
			export class BehaviorWrapper<V>  extends androidx.coordinatorlayout.widget.CoordinatorLayout.Behavior<any> implements globalAndroid.os.Handler.Callback  {
				public static class: java.lang.Class<kohii.v1.internal.BehaviorWrapper<any>>;
				public static Companion: kohii.v1.internal.BehaviorWrapper.Companion;
				public layoutDependsOn(parent: androidx.coordinatorlayout.widget.CoordinatorLayout, child: any, dependency: globalAndroid.view.View): boolean;
				public onStopNestedScroll(coordinatorLayout: androidx.coordinatorlayout.widget.CoordinatorLayout, child: any, target: globalAndroid.view.View): void;
				/** @deprecated */
				public onNestedScrollAccepted(coordinatorLayout: androidx.coordinatorlayout.widget.CoordinatorLayout, child: any, directTargetChild: globalAndroid.view.View, target: globalAndroid.view.View, axes: number): void;
				public getScrimOpacity(parent: androidx.coordinatorlayout.widget.CoordinatorLayout, child: any): number;
				public onDetach(): void;
				public onNestedScrollAccepted(coordinatorLayout: androidx.coordinatorlayout.widget.CoordinatorLayout, child: any, directTargetChild: globalAndroid.view.View, target: globalAndroid.view.View, axes: number): void;
				/** @deprecated */
				public onStopNestedScroll(coordinatorLayout: androidx.coordinatorlayout.widget.CoordinatorLayout, child: any, target: globalAndroid.view.View): void;
				public onStartNestedScroll(coordinatorLayout: androidx.coordinatorlayout.widget.CoordinatorLayout, child: any, directTargetChild: globalAndroid.view.View, target: globalAndroid.view.View, axes: number, type: number): boolean;
				public onRestoreInstanceState(parent: androidx.coordinatorlayout.widget.CoordinatorLayout, child: any, state: globalAndroid.os.Parcelable): void;
				public constructor();
				public getInsetDodgeRect(parent: androidx.coordinatorlayout.widget.CoordinatorLayout, child: any, rect: globalAndroid.graphics.Rect): boolean;
				public onDependentViewRemoved(parent: androidx.coordinatorlayout.widget.CoordinatorLayout, child: any, dependency: globalAndroid.view.View): void;
				public onApplyWindowInsets(coordinatorLayout: androidx.coordinatorlayout.widget.CoordinatorLayout, child: any, insets: androidx.core.view.WindowInsetsCompat): androidx.core.view.WindowInsetsCompat;
				public onNestedScroll(coordinatorLayout: androidx.coordinatorlayout.widget.CoordinatorLayout, child: any, target: globalAndroid.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number, type: number, consumed: native.Array<number>): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
				public onSaveInstanceState(parent: androidx.coordinatorlayout.widget.CoordinatorLayout, child: any): globalAndroid.os.Parcelable;
				public onNestedPreScroll(coordinatorLayout: androidx.coordinatorlayout.widget.CoordinatorLayout, child: any, target: globalAndroid.view.View, dx: number, dy: number, consumed: native.Array<number>, type: number): void;
				public getDelegate(): androidx.coordinatorlayout.widget.CoordinatorLayout.Behavior<any>;
				/** @deprecated */
				public onNestedScroll(coordinatorLayout: androidx.coordinatorlayout.widget.CoordinatorLayout, child: any, target: globalAndroid.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number, type: number): void;
				public onNestedPreFling(coordinatorLayout: androidx.coordinatorlayout.widget.CoordinatorLayout, child: any, target: globalAndroid.view.View, velocityX: number, velocityY: number): boolean;
				public onNestedFling(coordinatorLayout: androidx.coordinatorlayout.widget.CoordinatorLayout, child: any, target: globalAndroid.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
				public onTouchEvent(parent: androidx.coordinatorlayout.widget.CoordinatorLayout, child: any, ev: globalAndroid.view.MotionEvent): boolean;
				public onNestedPreScroll(coordinatorLayout: androidx.coordinatorlayout.widget.CoordinatorLayout, child: any, target: globalAndroid.view.View, dx: number, dy: number, consumed: native.Array<number>): void;
				public onDetachedFromLayoutParams(): void;
				public onRequestChildRectangleOnScreen(coordinatorLayout: androidx.coordinatorlayout.widget.CoordinatorLayout, child: any, rectangle: globalAndroid.graphics.Rect, immediate: boolean): boolean;
				public handleMessage(msg: globalAndroid.os.Message): boolean;
				public blocksInteractionBelow(parent: androidx.coordinatorlayout.widget.CoordinatorLayout, child: any): boolean;
				public onStartNestedScroll(coordinatorLayout: androidx.coordinatorlayout.widget.CoordinatorLayout, child: any, directTargetChild: globalAndroid.view.View, target: globalAndroid.view.View, axes: number): boolean;
				public onInterceptTouchEvent(parent: androidx.coordinatorlayout.widget.CoordinatorLayout, child: any, ev: globalAndroid.view.MotionEvent): boolean;
				/** @deprecated */
				public onNestedScroll(coordinatorLayout: androidx.coordinatorlayout.widget.CoordinatorLayout, child: any, target: globalAndroid.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
				public onLayoutChild(parent: androidx.coordinatorlayout.widget.CoordinatorLayout, child: any, layoutDirection: number): boolean;
				public onNestedScroll(coordinatorLayout: androidx.coordinatorlayout.widget.CoordinatorLayout, child: any, target: globalAndroid.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
				/** @deprecated */
				public onStartNestedScroll(coordinatorLayout: androidx.coordinatorlayout.widget.CoordinatorLayout, child: any, directTargetChild: globalAndroid.view.View, target: globalAndroid.view.View, axes: number): boolean;
				public getScrimColor(parent: androidx.coordinatorlayout.widget.CoordinatorLayout, child: any): number;
				public onStopNestedScroll(coordinatorLayout: androidx.coordinatorlayout.widget.CoordinatorLayout, child: any, target: globalAndroid.view.View, type: number): void;
				public onMeasureChild(parent: androidx.coordinatorlayout.widget.CoordinatorLayout, child: any, parentWidthMeasureSpec: number, widthUsed: number, parentHeightMeasureSpec: number, heightUsed: number): boolean;
				public onNestedScroll(coordinatorLayout: androidx.coordinatorlayout.widget.CoordinatorLayout, child: any, target: globalAndroid.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number, type: number): void;
				public onDependentViewChanged(parent: androidx.coordinatorlayout.widget.CoordinatorLayout, child: any, dependency: globalAndroid.view.View): boolean;
				public onAttachedToLayoutParams(params: androidx.coordinatorlayout.widget.CoordinatorLayout.LayoutParams): void;
				public constructor(delegate: androidx.coordinatorlayout.widget.CoordinatorLayout.Behavior<any>, manager: kohii.v1.core.Manager);
				/** @deprecated */
				public onNestedPreScroll(coordinatorLayout: androidx.coordinatorlayout.widget.CoordinatorLayout, child: any, target: globalAndroid.view.View, dx: number, dy: number, consumed: native.Array<number>): void;
				public onNestedScrollAccepted(coordinatorLayout: androidx.coordinatorlayout.widget.CoordinatorLayout, child: any, directTargetChild: globalAndroid.view.View, target: globalAndroid.view.View, axes: number, type: number): void;
			}
			export module BehaviorWrapper {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<kohii.v1.internal.BehaviorWrapper.Companion>;
				}
			}
		}
	}
}

declare module kohii {
	export module v1 {
		export module internal {
			export class DynamicFragmentRendererPlayback extends kohii.v1.core.Playback {
				public static class: java.lang.Class<kohii.v1.internal.DynamicFragmentRendererPlayback>;
				public onAttachRenderer(renderer: any): boolean;
				public onAttachRenderer(object0: any): boolean;
				public onDetachRenderer(object0: any): boolean;
				public constructor(manager: kohii.v1.core.Manager, bucket: kohii.v1.core.Bucket, container: globalAndroid.view.ViewGroup, config: kohii.v1.core.Playback.Config);
				public onPause(): void;
				public onPlay(): void;
				public onMetadata(metadata: com.google.android.exoplayer2.metadata.Metadata): void;
				public onCues(cues: java.util.List<com.google.android.exoplayer2.text.Cue>): void;
				public addViewToContainer(view: globalAndroid.view.View, container: globalAndroid.view.ViewGroup): void;
				public onError(error: java.lang.Exception): void;
				public scheduleAttachFragment(container: globalAndroid.view.ViewGroup, fragment: androidx.fragment.app.Fragment): void;
				public onDetachRenderer(renderer: any): boolean;
			}
		}
	}
}

declare module kohii {
	export module v1 {
		export module internal {
			export class DynamicViewRendererPlayback extends kohii.v1.core.Playback {
				public static class: java.lang.Class<kohii.v1.internal.DynamicViewRendererPlayback>;
				public onAttachRenderer(renderer: any): boolean;
				public onAttachRenderer(object0: any): boolean;
				public onDetachRenderer(object0: any): boolean;
				public constructor(manager: kohii.v1.core.Manager, bucket: kohii.v1.core.Bucket, container: globalAndroid.view.ViewGroup, config: kohii.v1.core.Playback.Config);
				public onPause(): void;
				public onPlay(): void;
				public onMetadata(metadata: com.google.android.exoplayer2.metadata.Metadata): void;
				public onCues(cues: java.util.List<com.google.android.exoplayer2.text.Cue>): void;
				public onError(error: java.lang.Exception): void;
				public onDetachRenderer(renderer: any): boolean;
			}
		}
	}
}

declare module kohii {
	export module v1 {
		export module internal {
			export class MasterNetworkCallback extends globalAndroid.net.ConnectivityManager.NetworkCallback {
				public static class: java.lang.Class<kohii.v1.internal.MasterNetworkCallback>;
				public onCapabilitiesChanged(network: globalAndroid.net.Network, networkCapabilities: globalAndroid.net.NetworkCapabilities): void;
				public onAvailable(network: globalAndroid.net.Network): void;
				public onLinkPropertiesChanged(network: globalAndroid.net.Network, linkProperties: globalAndroid.net.LinkProperties): void;
				public constructor(master: kohii.v1.core.Master);
				public getMaster(): kohii.v1.core.Master;
				public onUnavailable(): void;
				public onBlockedStatusChanged(network: globalAndroid.net.Network, blocked: boolean): void;
				public onLost(network: globalAndroid.net.Network): void;
				public onLosing(network: globalAndroid.net.Network, maxMsToLive: number): void;
				public constructor();
			}
		}
	}
}

declare module kohii {
	export module v1 {
		export module internal {
			export class NestedScrollViewBucket extends kohii.v1.core.Bucket implements androidx.core.widget.NestedScrollView.OnScrollChangeListener {
				public static class: java.lang.Class<kohii.v1.internal.NestedScrollViewBucket>;
				public constructor(manager: kohii.v1.core.Manager, root: androidx.core.widget.NestedScrollView, strategy: kohii.v1.core.Strategy, selector: kotlin.jvm.functions.Function1<any,any>);
				public onLayoutChange(v: globalAndroid.view.View, left: number, top: number, right: number, bottom: number, oldLeft: number, oldTop: number, oldRight: number, oldBottom: number): void;
				public selectToPlay(candidates: java.util.Collection<any>): java.util.Collection<kohii.v1.core.Playback>;
				public onScrollChange(v: androidx.core.widget.NestedScrollView, scrollX: number, scrollY: number, oldScrollX: number, oldScrollY: number): void;
				public accepts(viewGroup0: globalAndroid.view.ViewGroup): boolean;
				public onRemoved(): void;
				public accepts(container: globalAndroid.view.ViewGroup): boolean;
				public constructor(manager: kohii.v1.core.Manager, root: globalAndroid.view.View, strategy: kohii.v1.core.Strategy, selector: kotlin.jvm.functions.Function1<any,any>);
				public getRoot(): androidx.core.widget.NestedScrollView;
				public onAdded(): void;
				public getRoot(): globalAndroid.view.View;
				public selectToPlay(collection0: java.util.Collection<any>): java.util.Collection<kohii.v1.core.Playback>;
			}
		}
	}
}

declare module kohii {
	export module v1 {
		export module internal {
			export class PlayableDispatcher extends java.lang.Object implements globalAndroid.os.Handler.Callback {
				public static class: java.lang.Class<kohii.v1.internal.PlayableDispatcher>;
				public static Companion: kohii.v1.internal.PlayableDispatcher.Companion;
				public play(playable: kohii.v1.core.Playable): void;
				public handleMessage(msg: globalAndroid.os.Message): boolean;
				public onStop(): void;
				public pause(playable: kohii.v1.core.Playable): void;
				public constructor(master: kohii.v1.core.Master);
				public getMaster(): kohii.v1.core.Master;
				public onStart(): void;
			}
			export module PlayableDispatcher {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<kohii.v1.internal.PlayableDispatcher.Companion>;
				}
			}
		}
	}
}

declare module kohii {
	export module v1 {
		export module internal {
			export class PlayerParametersChangeListener extends java.lang.Object {
				public static class: java.lang.Class<kohii.v1.internal.PlayerParametersChangeListener>;
				/**
				 * Constructs a new instance of the kohii.v1.internal.PlayerParametersChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onPlayerParametersChanged(playerParameters0: kohii.v1.core.PlayerParameters): void;
				});
				public constructor();
				public onPlayerParametersChanged(playerParameters0: kohii.v1.core.PlayerParameters): void;
			}
		}
	}
}

declare module kohii {
	export module v1 {
		export module internal {
			export class RecyclerViewBucket extends kohii.v1.core.Bucket implements androidx.recyclerview.widget.RecyclerView.OnChildAttachStateChangeListener {
				public static class: java.lang.Class<kohii.v1.internal.RecyclerViewBucket>;
				public static Companion: kohii.v1.internal.RecyclerViewBucket.Companion;
				public onLayoutChange(v: globalAndroid.view.View, left: number, top: number, right: number, bottom: number, oldLeft: number, oldTop: number, oldRight: number, oldBottom: number): void;
				public selectToPlay(candidates: java.util.Collection<any>): java.util.Collection<kohii.v1.core.Playback>;
				public accepts(viewGroup0: globalAndroid.view.ViewGroup): boolean;
				public onChildViewDetachedFromWindow(view: globalAndroid.view.View): void;
				public onRemoved(): void;
				public accepts(container: globalAndroid.view.ViewGroup): boolean;
				public constructor(manager: kohii.v1.core.Manager, root: androidx.recyclerview.widget.RecyclerView, strategy: kohii.v1.core.Strategy, selector: kotlin.jvm.functions.Function1<any,any>);
				public constructor(manager: kohii.v1.core.Manager, root: globalAndroid.view.View, strategy: kohii.v1.core.Strategy, selector: kotlin.jvm.functions.Function1<any,any>);
				public onChildViewAttachedToWindow(view: globalAndroid.view.View): void;
				public onAdded(): void;
				public getRoot(): globalAndroid.view.View;
				public getRoot(): androidx.recyclerview.widget.RecyclerView;
				public selectToPlay(collection0: java.util.Collection<any>): java.util.Collection<kohii.v1.core.Playback>;
				public onAttached(): void;
				public allowToPlay(playback: kohii.v1.core.Playback): boolean;
			}
			export module RecyclerViewBucket {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<kohii.v1.internal.RecyclerViewBucket.Companion>;
					public fetchOrientation(thisfetchOrientation: androidx.recyclerview.widget.RecyclerView): number;
				}
			}
		}
	}
}

declare module kohii {
	export module v1 {
		export module internal {
			export class StaticViewRendererPlayback extends kohii.v1.core.Playback {
				public static class: java.lang.Class<kohii.v1.internal.StaticViewRendererPlayback>;
				public onActive(): void;
				public onAttachRenderer(renderer: any): boolean;
				public onAttachRenderer(object0: any): boolean;
				public onDetachRenderer(object0: any): boolean;
				public constructor(manager: kohii.v1.core.Manager, bucket: kohii.v1.core.Bucket, container: globalAndroid.view.ViewGroup, config: kohii.v1.core.Playback.Config);
				public onMetadata(metadata: com.google.android.exoplayer2.metadata.Metadata): void;
				public onInActive(): void;
				public releaseRenderer(renderer: any): boolean;
				public onCues(cues: java.util.List<com.google.android.exoplayer2.text.Cue>): void;
				public onError(error: java.lang.Exception): void;
				public acquireRenderer(): any;
				public onDetachRenderer(renderer: any): boolean;
			}
		}
	}
}

declare module kohii {
	export module v1 {
		export module internal {
			export class ViewGroupBucket extends kohii.v1.core.Bucket {
				public static class: java.lang.Class<kohii.v1.internal.ViewGroupBucket>;
				public onLayoutChange(v: globalAndroid.view.View, left: number, top: number, right: number, bottom: number, oldLeft: number, oldTop: number, oldRight: number, oldBottom: number): void;
				public selectToPlay(candidates: java.util.Collection<any>): java.util.Collection<kohii.v1.core.Playback>;
				public accepts(viewGroup0: globalAndroid.view.ViewGroup): boolean;
				public constructor(manager: kohii.v1.core.Manager, root: globalAndroid.view.ViewGroup, strategy: kohii.v1.core.Strategy, selector: kotlin.jvm.functions.Function1<any,any>);
				public onRemoved(): void;
				public accepts(container: globalAndroid.view.ViewGroup): boolean;
				public constructor(manager: kohii.v1.core.Manager, root: globalAndroid.view.View, strategy: kohii.v1.core.Strategy, selector: kotlin.jvm.functions.Function1<any,any>);
				public onAdded(): void;
				public getRoot(): globalAndroid.view.View;
				public selectToPlay(collection0: java.util.Collection<any>): java.util.Collection<kohii.v1.core.Playback>;
				public getRoot(): globalAndroid.view.ViewGroup;
				public onRemovedInternal(): void;
				public onAddedInternal(): void;
			}
		}
	}
}

declare module kohii {
	export module v1 {
		export module internal {
			export class ViewGroupV23Bucket extends kohii.v1.internal.ViewGroupBucket implements globalAndroid.view.View.OnScrollChangeListener {
				public static class: java.lang.Class<kohii.v1.internal.ViewGroupV23Bucket>;
				public onLayoutChange(v: globalAndroid.view.View, left: number, top: number, right: number, bottom: number, oldLeft: number, oldTop: number, oldRight: number, oldBottom: number): void;
				public constructor(manager: kohii.v1.core.Manager, root: globalAndroid.view.ViewGroup, strategy: kohii.v1.core.Strategy, selector: kotlin.jvm.functions.Function1<any,any>);
				public constructor(manager: kohii.v1.core.Manager, root: globalAndroid.view.View, strategy: kohii.v1.core.Strategy, selector: kotlin.jvm.functions.Function1<any,any>);
				public onRemovedInternal(): void;
				public onScrollChange(v: globalAndroid.view.View, scrollX: number, scrollY: number, oldScrollX: number, oldScrollY: number): void;
				public onAddedInternal(): void;
			}
		}
	}
}

declare module kohii {
	export module v1 {
		export module internal {
			export class ViewPager2Bucket extends kohii.v1.core.Bucket {
				public static class: java.lang.Class<kohii.v1.internal.ViewPager2Bucket>;
				public onLayoutChange(v: globalAndroid.view.View, left: number, top: number, right: number, bottom: number, oldLeft: number, oldTop: number, oldRight: number, oldBottom: number): void;
				public selectToPlay(candidates: java.util.Collection<any>): java.util.Collection<kohii.v1.core.Playback>;
				public accepts(viewGroup0: globalAndroid.view.ViewGroup): boolean;
				public onRemoved(): void;
				public accepts(container: globalAndroid.view.ViewGroup): boolean;
				public constructor(manager: kohii.v1.core.Manager, root: globalAndroid.view.View, strategy: kohii.v1.core.Strategy, selector: kotlin.jvm.functions.Function1<any,any>);
				public onAdded(): void;
				public getRoot(): globalAndroid.view.View;
				public constructor(manager: kohii.v1.core.Manager, root: androidx.viewpager2.widget.ViewPager2, strategy: kohii.v1.core.Strategy, selector: kotlin.jvm.functions.Function1<any,any>);
				public selectToPlay(collection0: java.util.Collection<any>): java.util.Collection<kohii.v1.core.Playback>;
				public getRoot(): androidx.viewpager2.widget.ViewPager2;
			}
			export module ViewPager2Bucket {
				export class SimplePageChangeCallback extends androidx.viewpager2.widget.ViewPager2.OnPageChangeCallback {
					public static class: java.lang.Class<kohii.v1.internal.ViewPager2Bucket.SimplePageChangeCallback>;
					public onPageScrollStateChanged(state: number): void;
					public constructor(manager: kohii.v1.core.Manager);
					public getManager(): kohii.v1.core.Manager;
					public constructor();
					public onPageSelected(position: number): void;
				}
			}
		}
	}
}

declare module kohii {
	export module v1 {
		export module internal {
			export class ViewPagerBucket extends kohii.v1.core.Bucket implements androidx.viewpager.widget.ViewPager.OnPageChangeListener {
				public static class: java.lang.Class<kohii.v1.internal.ViewPagerBucket>;
				public onLayoutChange(v: globalAndroid.view.View, left: number, top: number, right: number, bottom: number, oldLeft: number, oldTop: number, oldRight: number, oldBottom: number): void;
				public onPageSelected(position: number): void;
				public selectToPlay(candidates: java.util.Collection<any>): java.util.Collection<kohii.v1.core.Playback>;
				public accepts(viewGroup0: globalAndroid.view.ViewGroup): boolean;
				public onRemoved(): void;
				public accepts(container: globalAndroid.view.ViewGroup): boolean;
				public constructor(manager: kohii.v1.core.Manager, root: androidx.viewpager.widget.ViewPager, strategy: kohii.v1.core.Strategy, selector: kotlin.jvm.functions.Function1<any,any>);
				public constructor(manager: kohii.v1.core.Manager, root: globalAndroid.view.View, strategy: kohii.v1.core.Strategy, selector: kotlin.jvm.functions.Function1<any,any>);
				public onAdded(): void;
				public getRoot(): globalAndroid.view.View;
				public selectToPlay(collection0: java.util.Collection<any>): java.util.Collection<kohii.v1.core.Playback>;
				public getRoot(): androidx.viewpager.widget.ViewPager;
				public onPageScrollStateChanged(state: number): void;
				public onPageScrolled(position: number, positionOffset: number, positionOffsetPixels: number): void;
			}
		}
	}
}

declare module kohii {
	export module v1 {
		export module media {
			export class Media extends java.lang.Object {
				public static class: java.lang.Class<kohii.v1.media.Media>;
				/**
				 * Constructs a new instance of the kohii.v1.media.Media interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getUri(): globalAndroid.net.Uri;
					getType(): string;
					getMediaDrm(): kohii.v1.media.MediaDrm;
				});
				public constructor();
				public getType(): string;
				public getUri(): globalAndroid.net.Uri;
				public getMediaDrm(): kohii.v1.media.MediaDrm;
			}
		}
	}
}

declare module kohii {
	export module v1 {
		export module media {
			export class MediaDrm extends java.lang.Object {
				public static class: java.lang.Class<kohii.v1.media.MediaDrm>;
				/**
				 * Constructs a new instance of the kohii.v1.media.MediaDrm interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getType(): string;
					getLicenseUrl(): string;
					getKeyRequestPropertiesArray(): native.Array<string>;
					getMultiSession(): boolean;
					compareTo(mediaDrm0: kohii.v1.media.MediaDrm): number;
					describeContents(): number;
					writeToParcel(parcel0: globalAndroid.os.Parcel, int1: number): void;
				});
				public constructor();
				public static PARCELABLE_WRITE_RETURN_VALUE: number;
				public static CONTENTS_FILE_DESCRIPTOR: number;
				public getLicenseUrl(): string;
				public getType(): string;
				public getMultiSession(): boolean;
				public getKeyRequestPropertiesArray(): native.Array<string>;
				public compareTo(mediaDrm0: kohii.v1.media.MediaDrm): number;
				public describeContents(): number;
				public writeToParcel(parcel0: globalAndroid.os.Parcel, int1: number): void;
			}
			export module MediaDrm {
				export class DefaultImpls extends java.lang.Object {
					public static class: java.lang.Class<kohii.v1.media.MediaDrm.DefaultImpls>;
					public static compareTo(this0: kohii.v1.media.MediaDrm, other: kohii.v1.media.MediaDrm): number;
				}
			}
		}
	}
}

declare module kohii {
	export module v1 {
		export module media {
			export class MediaItem extends java.lang.Object implements kohii.v1.media.Media, globalAndroid.os.Parcelable {
				public static class: java.lang.Class<kohii.v1.media.MediaItem>;
				public static CREATOR: globalAndroid.os.Parcelable.Creator<any>;
				public getType(): string;
				public writeToParcel(parcel: globalAndroid.os.Parcel, flags: number): void;
				public equals(obj: any): boolean;
				public equals(other: any): boolean;
				public getUri(): globalAndroid.net.Uri;
				public hashCode(): number;
				public constructor(uri: globalAndroid.net.Uri, type: string, mediaDrm: kohii.v1.media.MediaDrm);
				public describeContents(): number;
				public constructor(url: string, type: string, mediaDrm: kohii.v1.media.MediaDrm);
				public toString(): string;
				public getMediaDrm(): kohii.v1.media.MediaDrm;
			}
			export module MediaItem {
				export class Creator extends java.lang.Object implements globalAndroid.os.Parcelable.Creator<any> {
					public static class: java.lang.Class<kohii.v1.media.MediaItem.Creator>;
					public constructor();
					public newArray(size: number): native.Array<any>;
					public createFromParcel(in0: globalAndroid.os.Parcel): any;
				}
			}
		}
	}
}

declare module kohii {
	export module v1 {
		export module media {
			export class PlaybackInfo extends java.lang.Object implements globalAndroid.os.Parcelable {
				public static class: java.lang.Class<kohii.v1.media.PlaybackInfo>;
				public static TIME_UNSET: number;
				public static INDEX_UNSET: number;
				public static Companion: kohii.v1.media.PlaybackInfo.Companion;
				public static CREATOR: globalAndroid.os.Parcelable.Creator<any>;
				public constructor(resumeWindow: number, resumePosition: number);
				public setResumeWindow(param0: number): void;
				public component2(): number;
				public component1(): number;
				public toString(): string;
				public getResumeWindow(): number;
				public constructor();
				public copy(resumeWindow: number, resumePosition: number): kohii.v1.media.PlaybackInfo;
				public writeToParcel(parcel: globalAndroid.os.Parcel, flags: number): void;
				public equals(obj: any): boolean;
				public hashCode(): number;
				public describeContents(): number;
				public getResumePosition(): number;
				public setResumePosition(param0: number): void;
			}
			export module PlaybackInfo {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<kohii.v1.media.PlaybackInfo.Companion>;
				}
				export class Creator extends java.lang.Object implements globalAndroid.os.Parcelable.Creator<any> {
					public static class: java.lang.Class<kohii.v1.media.PlaybackInfo.Creator>;
					public constructor();
					public newArray(size: number): native.Array<any>;
					public createFromParcel(in0: globalAndroid.os.Parcel): any;
				}
			}
		}
	}
}

declare module kohii {
	export module v1 {
		export module media {
			export class VolumeInfo extends java.lang.Object implements globalAndroid.os.Parcelable {
				public static class: java.lang.Class<kohii.v1.media.VolumeInfo>;
				public static Companion: kohii.v1.media.VolumeInfo.Companion;
				public static CREATOR: globalAndroid.os.Parcelable.Creator<any>;
				public constructor(original: kohii.v1.media.VolumeInfo);
				public component2(): number;
				public component1(): boolean;
				public toString(): string;
				public getVolume(): number;
				public constructor();
				public writeToParcel(parcel: globalAndroid.os.Parcel, flags: number): void;
				public constructor(mute: boolean, volume: number);
				public copy(mute: boolean, volume: number): kohii.v1.media.VolumeInfo;
				public equals(obj: any): boolean;
				public hashCode(): number;
				public describeContents(): number;
				public getMute(): boolean;
			}
			export module VolumeInfo {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<kohii.v1.media.VolumeInfo.Companion>;
					public getDEFAULT_INACTIVE(): kohii.v1.media.VolumeInfo;
					public getDEFAULT_ACTIVE(): kohii.v1.media.VolumeInfo;
				}
				export class Creator extends java.lang.Object implements globalAndroid.os.Parcelable.Creator<any> {
					public static class: java.lang.Class<kohii.v1.media.VolumeInfo.Creator>;
					public constructor();
					public newArray(size: number): native.Array<any>;
					public createFromParcel(in0: globalAndroid.os.Parcel): any;
				}
			}
		}
	}
}

declare module kohii {
	export module v1 {
		export module utils {
			export class Capsule<T, A>  extends java.lang.Object {
				public static class: java.lang.Class<kohii.v1.utils.Capsule<any,any>>;
				public getInstance(object0: A): T;
				public get(object0: A): T;
				public constructor(creator: kotlin.jvm.functions.Function1<any,any>, onCreate: kotlin.jvm.functions.Function1<any,kotlin.Unit>);
			}
		}
	}
}

//Generics information:
//kohii.v1.core.AbstractBridge:1
//kohii.v1.core.AbstractPlayable:1
//kohii.v1.core.Bridge:1
//kohii.v1.core.BridgeCreator:1
//kohii.v1.core.Engine:1
//kohii.v1.core.PlayableCreator:1
//kohii.v1.core.PlayerPool:1
//kohii.v1.internal.BehaviorWrapper:1
//kohii.v1.utils.Capsule:2

