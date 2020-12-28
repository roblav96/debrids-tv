declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export class AVPlayer extends java.lang.Object implements com.kk.taurus.playerbase.player.IPlayer {
					public static class: java.lang.Class<com.kk.taurus.playerbase.AVPlayer>;
					public setDisplay(surfaceHolder: globalAndroid.view.SurfaceHolder): void;
					public setUseTimerProxy(useTimerProxy: boolean): void;
					public setOnPlayerEventListener(onPlayerEventListener: com.kk.taurus.playerbase.event.OnPlayerEventListener): void;
					public setOnBufferingListener(onBufferingListener: com.kk.taurus.playerbase.player.OnBufferingListener): void;
					public getVideoWidth(): number;
					public setSpeed(speed: number): void;
					public start(): void;
					public setOnProviderListener(onProviderListener: com.kk.taurus.playerbase.provider.IDataProvider.OnProviderListener): void;
					public rePlay(msc: number): void;
					public getDuration(): number;
					public destroy(): void;
					public constructor();
					public isPlaying(): boolean;
					public pause(): void;
					public setDataProvider(dataProvider: com.kk.taurus.playerbase.provider.IDataProvider): void;
					public getCurrentPosition(): number;
					public switchDecoder(decoderPlanId: number): boolean;
					public getVideoHeight(): number;
					public start(msc: number): void;
					public getBufferPercentage(): number;
					public reset(): void;
					public getAudioSessionId(): number;
					public constructor(decoderPlanId: number);
					public setLooping(looping: boolean): void;
					public setVolume(left: number, right: number): void;
					public setOnErrorEventListener(onErrorEventListener: com.kk.taurus.playerbase.event.OnErrorEventListener): void;
					public resume(): void;
					public option(code: number, bundle: globalAndroid.os.Bundle): void;
					public stop(): void;
					public setSurface(surface: globalAndroid.view.Surface): void;
					public setDataSource(dataSource: com.kk.taurus.playerbase.entity.DataSource): void;
					public seekTo(msc: number): void;
					public getState(): number;
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export class BuildConfig extends java.lang.Object {
					public static class: java.lang.Class<com.kk.taurus.playerbase.BuildConfig>;
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

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module assist {
					export class AssistPlay extends java.lang.Object {
						public static class: java.lang.Class<com.kk.taurus.playerbase.assist.AssistPlay>;
						/**
						 * Constructs a new instance of the com.kk.taurus.playerbase.assist.AssistPlay interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							setOnPlayerEventListener(onPlayerEventListener0: com.kk.taurus.playerbase.event.OnPlayerEventListener): void;
							setOnErrorEventListener(onErrorEventListener0: com.kk.taurus.playerbase.event.OnErrorEventListener): void;
							setOnReceiverEventListener(onReceiverEventListener0: com.kk.taurus.playerbase.receiver.OnReceiverEventListener): void;
							setOnProviderListener(onProviderListener0: com.kk.taurus.playerbase.provider.IDataProvider.OnProviderListener): void;
							setDataProvider(iDataProvider0: com.kk.taurus.playerbase.provider.IDataProvider): void;
							switchDecoder(int0: number): boolean;
							setRenderType(int0: number): void;
							setAspectRatio(aspectRatio0: com.kk.taurus.playerbase.render.AspectRatio): void;
							setVolume(float0: number, float1: number): void;
							setSpeed(float0: number): void;
							setLooping(boolean0: boolean): void;
							setReceiverGroup(iReceiverGroup0: com.kk.taurus.playerbase.receiver.IReceiverGroup): void;
							attachContainer(viewGroup0: globalAndroid.view.ViewGroup): void;
							setDataSource(dataSource0: com.kk.taurus.playerbase.entity.DataSource): void;
							play(): void;
							play(boolean0: boolean): void;
							isInPlaybackState(): boolean;
							isPlaying(): boolean;
							getCurrentPosition(): number;
							getDuration(): number;
							getAudioSessionId(): number;
							getBufferPercentage(): number;
							getState(): number;
							rePlay(int0: number): void;
							pause(): void;
							resume(): void;
							seekTo(int0: number): void;
							stop(): void;
							reset(): void;
							destroy(): void;
						});
						public constructor();
						public isPlaying(): boolean;
						public seekTo(int0: number): void;
						public isInPlaybackState(): boolean;
						public pause(): void;
						public setOnProviderListener(onProviderListener0: com.kk.taurus.playerbase.provider.IDataProvider.OnProviderListener): void;
						public destroy(): void;
						public setOnErrorEventListener(onErrorEventListener0: com.kk.taurus.playerbase.event.OnErrorEventListener): void;
						public attachContainer(viewGroup0: globalAndroid.view.ViewGroup): void;
						public setLooping(boolean0: boolean): void;
						public resume(): void;
						public setDataSource(dataSource0: com.kk.taurus.playerbase.entity.DataSource): void;
						public setOnReceiverEventListener(onReceiverEventListener0: com.kk.taurus.playerbase.receiver.OnReceiverEventListener): void;
						public setRenderType(int0: number): void;
						public setOnPlayerEventListener(onPlayerEventListener0: com.kk.taurus.playerbase.event.OnPlayerEventListener): void;
						public getAudioSessionId(): number;
						public setAspectRatio(aspectRatio0: com.kk.taurus.playerbase.render.AspectRatio): void;
						public setSpeed(float0: number): void;
						public play(boolean0: boolean): void;
						public setDataProvider(iDataProvider0: com.kk.taurus.playerbase.provider.IDataProvider): void;
						public getDuration(): number;
						public setReceiverGroup(iReceiverGroup0: com.kk.taurus.playerbase.receiver.IReceiverGroup): void;
						public stop(): void;
						public rePlay(int0: number): void;
						public switchDecoder(int0: number): boolean;
						public setVolume(float0: number, float1: number): void;
						public getBufferPercentage(): number;
						public getState(): number;
						public play(): void;
						public reset(): void;
						public getCurrentPosition(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module assist {
					export abstract class BaseEventAssistHandler<T>  extends com.kk.taurus.playerbase.assist.OnEventAssistHandler<any> {
						public static class: java.lang.Class<com.kk.taurus.playerbase.assist.BaseEventAssistHandler<any>>;
						public requestReplay(object0: any, bundle1: globalAndroid.os.Bundle): void;
						public requestResume(object0: any, bundle1: globalAndroid.os.Bundle): void;
						public constructor();
						public requestReset(object0: any, bundle1: globalAndroid.os.Bundle): void;
						public requestStop(object0: any, bundle1: globalAndroid.os.Bundle): void;
						public requestPause(object0: any, bundle1: globalAndroid.os.Bundle): void;
						public onAssistHandle(assist: any, eventCode: number, bundle: globalAndroid.os.Bundle): void;
						public requestRetry(object0: any, bundle1: globalAndroid.os.Bundle): void;
						public requestSeek(object0: any, bundle1: globalAndroid.os.Bundle): void;
						public requestPlayDataSource(object0: any, bundle1: globalAndroid.os.Bundle): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module assist {
					export class InterEvent extends java.lang.Object {
						public static class: java.lang.Class<com.kk.taurus.playerbase.assist.InterEvent>;
						/**
						 * Constructs a new instance of the com.kk.taurus.playerbase.assist.InterEvent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
						public static CODE_REQUEST_RESUME: number;
						public static CODE_REQUEST_SEEK: number;
						public static CODE_REQUEST_PLAY_DATA_SOURCE: number;
						public static CODE_REQUEST_RESET: number;
						public static CODE_REQUEST_REPLAY: number;
						public static CODE_REQUEST_STOP_TIMER: number;
						public static CODE_REQUEST_PAUSE: number;
						public static CODE_REQUEST_STOP: number;
						public static CODE_REQUEST_NOTIFY_TIMER: number;
						public static CODE_REQUEST_RETRY: number;
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module assist {
					export class InterKey extends java.lang.Object {
						public static class: java.lang.Class<com.kk.taurus.playerbase.assist.InterKey>;
						/**
						 * Constructs a new instance of the com.kk.taurus.playerbase.assist.InterKey interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
						public static KEY_NETWORK_STATE: string;
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module assist {
					export class OnAssistPlayEventHandler extends com.kk.taurus.playerbase.assist.BaseEventAssistHandler<com.kk.taurus.playerbase.assist.AssistPlay> {
						public static class: java.lang.Class<com.kk.taurus.playerbase.assist.OnAssistPlayEventHandler>;
						public requestResume(object0: any, bundle1: globalAndroid.os.Bundle): void;
						public constructor();
						public requestPause(assistPlay: com.kk.taurus.playerbase.assist.AssistPlay, bundle: globalAndroid.os.Bundle): void;
						public requestStop(assistPlay: com.kk.taurus.playerbase.assist.AssistPlay, bundle: globalAndroid.os.Bundle): void;
						public requestStop(object0: any, bundle1: globalAndroid.os.Bundle): void;
						public requestResume(assistPlay: com.kk.taurus.playerbase.assist.AssistPlay, bundle: globalAndroid.os.Bundle): void;
						public onAssistHandle(assist: any, eventCode: number, bundle: globalAndroid.os.Bundle): void;
						public requestSeek(object0: any, bundle1: globalAndroid.os.Bundle): void;
						public requestReset(assist: com.kk.taurus.playerbase.assist.AssistPlay, bundle: globalAndroid.os.Bundle): void;
						public requestPlayDataSource(assist: com.kk.taurus.playerbase.assist.AssistPlay, bundle: globalAndroid.os.Bundle): void;
						public requestReplay(object0: any, bundle1: globalAndroid.os.Bundle): void;
						public requestSeek(assistPlay: com.kk.taurus.playerbase.assist.AssistPlay, bundle: globalAndroid.os.Bundle): void;
						public requestReset(object0: any, bundle1: globalAndroid.os.Bundle): void;
						public requestReplay(assistPlay: com.kk.taurus.playerbase.assist.AssistPlay, bundle: globalAndroid.os.Bundle): void;
						public requestPause(object0: any, bundle1: globalAndroid.os.Bundle): void;
						public requestRetry(object0: any, bundle1: globalAndroid.os.Bundle): void;
						public requestRetry(assistPlay: com.kk.taurus.playerbase.assist.AssistPlay, bundle: globalAndroid.os.Bundle): void;
						public requestPlayDataSource(object0: any, bundle1: globalAndroid.os.Bundle): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module assist {
					export class OnEventAssistHandler<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.kk.taurus.playerbase.assist.OnEventAssistHandler<any>>;
						/**
						 * Constructs a new instance of the com.kk.taurus.playerbase.assist.OnEventAssistHandler<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onAssistHandle(object0: T, int1: number, bundle2: globalAndroid.os.Bundle): void;
							requestPause(object0: T, bundle1: globalAndroid.os.Bundle): void;
							requestResume(object0: T, bundle1: globalAndroid.os.Bundle): void;
							requestSeek(object0: T, bundle1: globalAndroid.os.Bundle): void;
							requestStop(object0: T, bundle1: globalAndroid.os.Bundle): void;
							requestReset(object0: T, bundle1: globalAndroid.os.Bundle): void;
							requestRetry(object0: T, bundle1: globalAndroid.os.Bundle): void;
							requestReplay(object0: T, bundle1: globalAndroid.os.Bundle): void;
							requestPlayDataSource(object0: T, bundle1: globalAndroid.os.Bundle): void;
						});
						public constructor();
						public requestSeek(object0: T, bundle1: globalAndroid.os.Bundle): void;
						public requestReplay(object0: T, bundle1: globalAndroid.os.Bundle): void;
						public requestPause(object0: T, bundle1: globalAndroid.os.Bundle): void;
						public requestResume(object0: T, bundle1: globalAndroid.os.Bundle): void;
						public requestReset(object0: T, bundle1: globalAndroid.os.Bundle): void;
						public requestStop(object0: T, bundle1: globalAndroid.os.Bundle): void;
						public requestRetry(object0: T, bundle1: globalAndroid.os.Bundle): void;
						public requestPlayDataSource(object0: T, bundle1: globalAndroid.os.Bundle): void;
						public onAssistHandle(object0: T, int1: number, bundle2: globalAndroid.os.Bundle): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module assist {
					export class OnVideoViewEventHandler extends com.kk.taurus.playerbase.assist.BaseEventAssistHandler<com.kk.taurus.playerbase.widget.BaseVideoView> {
						public static class: java.lang.Class<com.kk.taurus.playerbase.assist.OnVideoViewEventHandler>;
						public requestResume(object0: any, bundle1: globalAndroid.os.Bundle): void;
						public constructor();
						public requestSeek(videoView: com.kk.taurus.playerbase.widget.BaseVideoView, bundle: globalAndroid.os.Bundle): void;
						public requestStop(videoView: com.kk.taurus.playerbase.widget.BaseVideoView, bundle: globalAndroid.os.Bundle): void;
						public requestStop(object0: any, bundle1: globalAndroid.os.Bundle): void;
						public requestPause(videoView: com.kk.taurus.playerbase.widget.BaseVideoView, bundle: globalAndroid.os.Bundle): void;
						public requestResume(videoView: com.kk.taurus.playerbase.widget.BaseVideoView, bundle: globalAndroid.os.Bundle): void;
						public onAssistHandle(assist: any, eventCode: number, bundle: globalAndroid.os.Bundle): void;
						public requestReset(videoView: com.kk.taurus.playerbase.widget.BaseVideoView, bundle: globalAndroid.os.Bundle): void;
						public requestSeek(object0: any, bundle1: globalAndroid.os.Bundle): void;
						public requestRetry(videoView: com.kk.taurus.playerbase.widget.BaseVideoView, bundle: globalAndroid.os.Bundle): void;
						public requestReplay(object0: any, bundle1: globalAndroid.os.Bundle): void;
						public requestReset(object0: any, bundle1: globalAndroid.os.Bundle): void;
						public requestPlayDataSource(assist: com.kk.taurus.playerbase.widget.BaseVideoView, bundle: globalAndroid.os.Bundle): void;
						public requestPause(object0: any, bundle1: globalAndroid.os.Bundle): void;
						public requestRetry(object0: any, bundle1: globalAndroid.os.Bundle): void;
						public requestReplay(videoView: com.kk.taurus.playerbase.widget.BaseVideoView, bundle: globalAndroid.os.Bundle): void;
						public requestPlayDataSource(object0: any, bundle1: globalAndroid.os.Bundle): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module assist {
					export class RelationAssist extends java.lang.Object implements com.kk.taurus.playerbase.assist.AssistPlay {
						public static class: java.lang.Class<com.kk.taurus.playerbase.assist.RelationAssist>;
						public isPlaying(): boolean;
						public isInPlaybackState(): boolean;
						public pause(): void;
						public destroy(): void;
						public setOnProviderListener(onProviderListener: com.kk.taurus.playerbase.provider.IDataProvider.OnProviderListener): void;
						public seekTo(msc: number): void;
						public resume(): void;
						public getRender(): com.kk.taurus.playerbase.render.IRender;
						public option(code: number, bundle: globalAndroid.os.Bundle): void;
						public setRenderType(renderType: number): void;
						public attachContainer(userContainer: globalAndroid.view.ViewGroup, updateRender: boolean): void;
						public setDataProvider(dataProvider: com.kk.taurus.playerbase.provider.IDataProvider): void;
						public play(updateRender: boolean): void;
						public getAudioSessionId(): number;
						public getDuration(): number;
						public setOnPlayerEventListener(onPlayerEventListener: com.kk.taurus.playerbase.event.OnPlayerEventListener): void;
						public setAspectRatio(aspectRatio: com.kk.taurus.playerbase.render.AspectRatio): void;
						public setDataSource(dataSource: com.kk.taurus.playerbase.entity.DataSource): void;
						public switchDecoder(decoderPlanId: number): boolean;
						public setOnErrorEventListener(onErrorEventListener: com.kk.taurus.playerbase.event.OnErrorEventListener): void;
						public constructor(context: globalAndroid.content.Context, superContainer: com.kk.taurus.playerbase.widget.SuperContainer);
						public stop(): void;
						public setOnReceiverEventListener(onReceiverEventListener: com.kk.taurus.playerbase.receiver.OnReceiverEventListener): void;
						public attachContainer(userContainer: globalAndroid.view.ViewGroup): void;
						public getBufferPercentage(): number;
						public getReceiverGroup(): com.kk.taurus.playerbase.receiver.IReceiverGroup;
						public getState(): number;
						public setReceiverGroup(receiverGroup: com.kk.taurus.playerbase.receiver.IReceiverGroup): void;
						public setEventAssistHandler(onEventAssistHandler: com.kk.taurus.playerbase.assist.OnAssistPlayEventHandler): void;
						public play(): void;
						public constructor(context: globalAndroid.content.Context);
						public getSuperContainer(): com.kk.taurus.playerbase.widget.SuperContainer;
						public setVolume(left: number, right: number): void;
						public setLooping(looping: boolean): void;
						public reset(): void;
						public setSpeed(speed: number): void;
						public getCurrentPosition(): number;
						public rePlay(msc: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module config {
					export class AppContextAttach extends java.lang.Object {
						public static class: java.lang.Class<com.kk.taurus.playerbase.config.AppContextAttach>;
						public constructor();
						public static getApplicationContext(): globalAndroid.content.Context;
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module config {
					export class PConst extends java.lang.Object {
						public static class: java.lang.Class<com.kk.taurus.playerbase.config.PConst>;
						/**
						 * Constructs a new instance of the com.kk.taurus.playerbase.config.PConst interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
						public static NETWORK_STATE_WIFI: number;
						public static NETWORK_STATE_CONNECTING: number;
						public static NETWORK_STATE_NONE: number;
						public static NETWORK_STATE_2G: number;
						public static NETWORK_STATE_MOBILE_UNKNOWN: number;
						public static NETWORK_STATE_4G: number;
						public static NETWORK_STATE_3G: number;
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module config {
					export class PlayerConfig extends java.lang.Object {
						public static class: java.lang.Class<com.kk.taurus.playerbase.config.PlayerConfig>;
						public static DEFAULT_PLAN_ID: number;
						public static addDecoderPlan(plan: com.kk.taurus.playerbase.entity.DecoderPlan): void;
						public static getDefaultPlanId(): number;
						public static isLegalPlanId(planId: number): boolean;
						public static getDefaultPlan(): com.kk.taurus.playerbase.entity.DecoderPlan;
						public constructor();
						public static playRecord(open: boolean): void;
						public static isPlayRecordOpen(): boolean;
						public static setDefaultPlanId(planId: number): void;
						public static isUseDefaultNetworkEventProducer(): boolean;
						public static setUseDefaultNetworkEventProducer(useDefaultNetworkEventProducer: boolean): void;
						public static getPlan(planId: number): com.kk.taurus.playerbase.entity.DecoderPlan;
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module config {
					export class PlayerLibrary extends java.lang.Object {
						public static class: java.lang.Class<com.kk.taurus.playerbase.config.PlayerLibrary>;
						public constructor();
						public static init(context: globalAndroid.content.Context): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module config {
					export class PlayerLoader extends java.lang.Object {
						public static class: java.lang.Class<com.kk.taurus.playerbase.config.PlayerLoader>;
						public constructor();
						public static loadInternalPlayer(decoderPlanId: number): com.kk.taurus.playerbase.player.BaseInternalPlayer;
						public static getDecoderInstance(planId: number): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module entity {
					export class DataSource extends java.lang.Object implements java.io.Serializable {
						public static class: java.lang.Class<com.kk.taurus.playerbase.entity.DataSource>;
						public setTitle(title: string): void;
						public getSid(): string;
						public setAssetsPath(assetsPath: string): void;
						public setLive(isLive: boolean): void;
						public getStartPos(): number;
						public setStartPos(startPos: number): void;
						public getData(): string;
						public static getAssetsFileDescriptor(context: globalAndroid.content.Context, assetsPath: string): globalAndroid.content.res.AssetFileDescriptor;
						public getUri(): globalAndroid.net.Uri;
						public constructor(tag: string, data: string);
						public setData(data: string): void;
						public setTag(tag: string): void;
						public setSid(sid: string): void;
						public setTimedTextSource(timedTextSource: com.kk.taurus.playerbase.entity.TimedTextSource): void;
						public setUri(uri: globalAndroid.net.Uri): void;
						public getTimedTextSource(): com.kk.taurus.playerbase.entity.TimedTextSource;
						public constructor();
						public setRawId(rawId: number): void;
						public static buildAssetsUri(assetsPath: string): globalAndroid.net.Uri;
						public toString(): string;
						public getId(): number;
						public getTitle(): string;
						public isLive(): boolean;
						public setId(id: number): void;
						public constructor(data: string);
						public getExtra(): java.util.HashMap<string,string>;
						public static buildRawPath(packageName: string, rawId: number): globalAndroid.net.Uri;
						public getAssetsPath(): string;
						public getRawId(): number;
						public getTag(): string;
						public setExtra(extra: java.util.HashMap<string,string>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module entity {
					export class DecoderPlan extends java.lang.Object {
						public static class: java.lang.Class<com.kk.taurus.playerbase.entity.DecoderPlan>;
						public getClassPath(): string;
						public getIdNumber(): number;
						public constructor(idNumber: number, classPath: string, desc: string);
						public constructor(idNumber: number, classPath: string);
						public getTag(): string;
						public setClassPath(classPath: string): void;
						public setIdNumber(idNumber: number): void;
						public getDesc(): string;
						public setTag(tag: string): void;
						public toString(): string;
						public setDesc(desc: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module entity {
					export class TimedTextSource extends java.lang.Object implements java.io.Serializable {
						public static class: java.lang.Class<com.kk.taurus.playerbase.entity.TimedTextSource>;
						public constructor(path: string, mimeType: string);
						public constructor(path: string);
						public constructor(path: string, mimeType: string, flag: number);
						public setPath(path: string): void;
						public getMimeType(): string;
						public getPath(): string;
						public setMimeType(mimeType: string): void;
						public getFlag(): number;
						public setFlag(flag: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module event {
					export class BundlePool extends java.lang.Object {
						public static class: java.lang.Class<com.kk.taurus.playerbase.event.BundlePool>;
						public constructor();
						public static obtain(): globalAndroid.os.Bundle;
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module event {
					export class EventDispatcher extends java.lang.Object implements com.kk.taurus.playerbase.event.IEventDispatcher {
						public static class: java.lang.Class<com.kk.taurus.playerbase.event.EventDispatcher>;
						public dispatchReceiverEvent(eventCode: number, bundle: globalAndroid.os.Bundle, onReceiverFilter: com.kk.taurus.playerbase.receiver.IReceiverGroup.OnReceiverFilter): void;
						public dispatchTouchEventOnDown(event: globalAndroid.view.MotionEvent): void;
						public dispatchTouchEventOnEndGesture(): void;
						public dispatchReceiverEvent(eventCode: number, bundle: globalAndroid.os.Bundle): void;
						public constructor(receiverGroup: com.kk.taurus.playerbase.receiver.IReceiverGroup);
						public dispatchErrorEvent(eventCode: number, bundle: globalAndroid.os.Bundle): void;
						public dispatchTouchEventOnDoubleTabUp(event: globalAndroid.view.MotionEvent): void;
						public dispatchTouchEventOnScroll(e1: globalAndroid.view.MotionEvent, e2: globalAndroid.view.MotionEvent, distanceX: number, distanceY: number): void;
						public dispatchProducerData(key: string, data: any, onReceiverFilter: com.kk.taurus.playerbase.receiver.IReceiverGroup.OnReceiverFilter): void;
						public dispatchPlayEvent(eventCode: number, bundle: globalAndroid.os.Bundle): void;
						public dispatchTouchEventOnSingleTapConfirmed(event: globalAndroid.view.MotionEvent): void;
						public dispatchProducerEvent(eventCode: number, bundle: globalAndroid.os.Bundle, onReceiverFilter: com.kk.taurus.playerbase.receiver.IReceiverGroup.OnReceiverFilter): void;
						public dispatchTouchEventOnLongPress(event: globalAndroid.view.MotionEvent): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module event {
					export class EventKey extends java.lang.Object {
						public static class: java.lang.Class<com.kk.taurus.playerbase.event.EventKey>;
						/**
						 * Constructs a new instance of the com.kk.taurus.playerbase.event.EventKey interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
						public static STRING_DATA: string;
						public static BYTE_DATA: string;
						public static INT_DATA: string;
						public static LONG_DATA: string;
						public static DOUBLE_DATA: string;
						public static SERIALIZABLE_DATA: string;
						public static INT_ARG3: string;
						public static INT_ARG2: string;
						public static INT_ARG4: string;
						public static FLOAT_DATA: string;
						public static BOOL_DATA: string;
						public static INT_ARG1: string;
						public static SERIALIZABLE_EXTRA_DATA: string;
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module event {
					export class IEventDispatcher extends java.lang.Object {
						public static class: java.lang.Class<com.kk.taurus.playerbase.event.IEventDispatcher>;
						/**
						 * Constructs a new instance of the com.kk.taurus.playerbase.event.IEventDispatcher interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							dispatchPlayEvent(int0: number, bundle1: globalAndroid.os.Bundle): void;
							dispatchErrorEvent(int0: number, bundle1: globalAndroid.os.Bundle): void;
							dispatchReceiverEvent(int0: number, bundle1: globalAndroid.os.Bundle): void;
							dispatchReceiverEvent(int0: number, bundle1: globalAndroid.os.Bundle, onReceiverFilter2: com.kk.taurus.playerbase.receiver.IReceiverGroup.OnReceiverFilter): void;
							dispatchProducerEvent(int0: number, bundle1: globalAndroid.os.Bundle, onReceiverFilter2: com.kk.taurus.playerbase.receiver.IReceiverGroup.OnReceiverFilter): void;
							dispatchProducerData(string0: string, object1: any, onReceiverFilter2: com.kk.taurus.playerbase.receiver.IReceiverGroup.OnReceiverFilter): void;
							dispatchTouchEventOnSingleTapConfirmed(motionEvent0: globalAndroid.view.MotionEvent): void;
							dispatchTouchEventOnLongPress(motionEvent0: globalAndroid.view.MotionEvent): void;
							dispatchTouchEventOnDoubleTabUp(motionEvent0: globalAndroid.view.MotionEvent): void;
							dispatchTouchEventOnDown(motionEvent0: globalAndroid.view.MotionEvent): void;
							dispatchTouchEventOnScroll(motionEvent0: globalAndroid.view.MotionEvent, motionEvent1: globalAndroid.view.MotionEvent, float2: number, float3: number): void;
							dispatchTouchEventOnEndGesture(): void;
						});
						public constructor();
						public dispatchProducerEvent(int0: number, bundle1: globalAndroid.os.Bundle, onReceiverFilter2: com.kk.taurus.playerbase.receiver.IReceiverGroup.OnReceiverFilter): void;
						public dispatchReceiverEvent(int0: number, bundle1: globalAndroid.os.Bundle): void;
						public dispatchErrorEvent(int0: number, bundle1: globalAndroid.os.Bundle): void;
						public dispatchTouchEventOnEndGesture(): void;
						public dispatchTouchEventOnDoubleTabUp(motionEvent0: globalAndroid.view.MotionEvent): void;
						public dispatchPlayEvent(int0: number, bundle1: globalAndroid.os.Bundle): void;
						public dispatchTouchEventOnDown(motionEvent0: globalAndroid.view.MotionEvent): void;
						public dispatchTouchEventOnSingleTapConfirmed(motionEvent0: globalAndroid.view.MotionEvent): void;
						public dispatchTouchEventOnLongPress(motionEvent0: globalAndroid.view.MotionEvent): void;
						public dispatchTouchEventOnScroll(motionEvent0: globalAndroid.view.MotionEvent, motionEvent1: globalAndroid.view.MotionEvent, float2: number, float3: number): void;
						public dispatchReceiverEvent(int0: number, bundle1: globalAndroid.os.Bundle, onReceiverFilter2: com.kk.taurus.playerbase.receiver.IReceiverGroup.OnReceiverFilter): void;
						public dispatchProducerData(string0: string, object1: any, onReceiverFilter2: com.kk.taurus.playerbase.receiver.IReceiverGroup.OnReceiverFilter): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module event {
					export class OnErrorEventListener extends java.lang.Object {
						public static class: java.lang.Class<com.kk.taurus.playerbase.event.OnErrorEventListener>;
						/**
						 * Constructs a new instance of the com.kk.taurus.playerbase.event.OnErrorEventListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onErrorEvent(int0: number, bundle1: globalAndroid.os.Bundle): void;
						});
						public constructor();
						public static ERROR_EVENT_SERVER_DIED: number;
						public static ERROR_EVENT_RENDER: number;
						public static ERROR_EVENT_IO: number;
						public static ERROR_EVENT_REMOTE: number;
						public static ERROR_EVENT_NOT_VALID_FOR_PROGRESSIVE_PLAYBACK: number;
						public static ERROR_EVENT_MALFORMED: number;
						public static ERROR_EVENT_UNKNOWN: number;
						public static ERROR_EVENT_DATA_PROVIDER_ERROR: number;
						public static ERROR_EVENT_TIMED_OUT: number;
						public static ERROR_EVENT_COMMON: number;
						public static ERROR_EVENT_UNSUPPORTED: number;
						public static ERROR_EVENT_OUT_OF_MEMORY: number;
						public onErrorEvent(int0: number, bundle1: globalAndroid.os.Bundle): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module event {
					export class OnPlayerEventListener extends java.lang.Object {
						public static class: java.lang.Class<com.kk.taurus.playerbase.event.OnPlayerEventListener>;
						/**
						 * Constructs a new instance of the com.kk.taurus.playerbase.event.OnPlayerEventListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onPlayerEvent(int0: number, bundle1: globalAndroid.os.Bundle): void;
						});
						public constructor();
						public static PLAYER_EVENT_ON_STOP: number;
						public static PLAYER_EVENT_ON_BUFFERING_END: number;
						public static PLAYER_EVENT_ON_SUBTITLE_TIMED_OUT: number;
						public static PLAYER_EVENT_ON_BUFFERING_START: number;
						public static PLAYER_EVENT_ON_UNSUPPORTED_SUBTITLE: number;
						public static PLAYER_EVENT_ON_SEEK_TO: number;
						public static PLAYER_EVENT_ON_VIDEO_SIZE_CHANGE: number;
						public static PLAYER_EVENT_ON_METADATA_UPDATE: number;
						public static PLAYER_EVENT_ON_BAD_INTERLEAVING: number;
						public static PLAYER_EVENT_ON_PAUSE: number;
						public static PLAYER_EVENT_ON_PROVIDER_DATA_SUCCESS: number;
						public static PLAYER_EVENT_ON_PROVIDER_DATA_ERROR: number;
						public static PLAYER_EVENT_ON_NETWORK_BANDWIDTH: number;
						public static PLAYER_EVENT_ON_TIMER_UPDATE: number;
						public static PLAYER_EVENT_ON_DATA_SOURCE_SET: number;
						public static PLAYER_EVENT_ON_PREPARED: number;
						public static PLAYER_EVENT_ON_SURFACE_UPDATE: number;
						public static PLAYER_EVENT_ON_RESET: number;
						public static PLAYER_EVENT_ON_DESTROY: number;
						public static PLAYER_EVENT_ON_BUFFERING_UPDATE: number;
						public static PLAYER_EVENT_ON_VIDEO_RENDER_START: number;
						public static PLAYER_EVENT_ON_STATUS_CHANGE: number;
						public static PLAYER_EVENT_ON_RESUME: number;
						public static PLAYER_EVENT_ON_PROVIDER_DATA_START: number;
						public static PLAYER_EVENT_ON_VIDEO_ROTATION_CHANGED: number;
						public static PLAYER_EVENT_ON_PLAY_COMPLETE: number;
						public static PLAYER_EVENT_ON_TIMED_TEXT_ERROR: number;
						public static PLAYER_EVENT_ON_AUDIO_DECODER_START: number;
						public static PLAYER_EVENT_ON_AUDIO_SEEK_RENDERING_START: number;
						public static PLAYER_EVENT_ON_SURFACE_HOLDER_UPDATE: number;
						public static PLAYER_EVENT_ON_NOT_SEEK_ABLE: number;
						public static PLAYER_EVENT_ON_SEEK_COMPLETE: number;
						public static PLAYER_EVENT_ON_AUDIO_RENDER_START: number;
						public static PLAYER_EVENT_ON_START: number;
						public onPlayerEvent(int0: number, bundle1: globalAndroid.os.Bundle): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module extension {
					export abstract class BaseEventProducer extends java.lang.Object implements com.kk.taurus.playerbase.extension.EventProducer {
						public static class: java.lang.Class<com.kk.taurus.playerbase.extension.BaseEventProducer>;
						public getEventCallback(): com.kk.taurus.playerbase.extension.EventCallback;
						public constructor();
						public onAdded(): void;
						public onRemoved(): void;
						public destroy(): void;
						public getPlayerStateGetter(): com.kk.taurus.playerbase.receiver.PlayerStateGetter;
						public getSender(): com.kk.taurus.playerbase.extension.ReceiverEventSender;
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module extension {
					export class DelegateReceiverEventSender extends java.lang.Object {
						public static class: java.lang.Class<com.kk.taurus.playerbase.extension.DelegateReceiverEventSender>;
						/**
						 * Constructs a new instance of the com.kk.taurus.playerbase.extension.DelegateReceiverEventSender interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							sendEvent(int0: number, bundle1: globalAndroid.os.Bundle, onReceiverFilter2: com.kk.taurus.playerbase.receiver.IReceiverGroup.OnReceiverFilter): void;
							sendObject(string0: string, object1: any, onReceiverFilter2: com.kk.taurus.playerbase.receiver.IReceiverGroup.OnReceiverFilter): void;
						});
						public constructor();
						public sendEvent(int0: number, bundle1: globalAndroid.os.Bundle, onReceiverFilter2: com.kk.taurus.playerbase.receiver.IReceiverGroup.OnReceiverFilter): void;
						public sendObject(string0: string, object1: any, onReceiverFilter2: com.kk.taurus.playerbase.receiver.IReceiverGroup.OnReceiverFilter): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module extension {
					export class EventCallback extends java.lang.Object {
						public static class: java.lang.Class<com.kk.taurus.playerbase.extension.EventCallback>;
						/**
						 * Constructs a new instance of the com.kk.taurus.playerbase.extension.EventCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onPlayerEvent(int0: number, bundle1: globalAndroid.os.Bundle): void;
							onErrorEvent(int0: number, bundle1: globalAndroid.os.Bundle): void;
							onReceiverEvent(int0: number, bundle1: globalAndroid.os.Bundle): void;
						});
						public constructor();
						public onPlayerEvent(int0: number, bundle1: globalAndroid.os.Bundle): void;
						public onReceiverEvent(int0: number, bundle1: globalAndroid.os.Bundle): void;
						public onErrorEvent(int0: number, bundle1: globalAndroid.os.Bundle): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module extension {
					export class EventProducer extends java.lang.Object {
						public static class: java.lang.Class<com.kk.taurus.playerbase.extension.EventProducer>;
						/**
						 * Constructs a new instance of the com.kk.taurus.playerbase.extension.EventProducer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onAdded(): void;
							onRemoved(): void;
							getPlayerStateGetter(): com.kk.taurus.playerbase.receiver.PlayerStateGetter;
							getSender(): com.kk.taurus.playerbase.extension.ReceiverEventSender;
							destroy(): void;
						});
						public constructor();
						public onAdded(): void;
						public onRemoved(): void;
						public destroy(): void;
						public getPlayerStateGetter(): com.kk.taurus.playerbase.receiver.PlayerStateGetter;
						public getSender(): com.kk.taurus.playerbase.extension.ReceiverEventSender;
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module extension {
					export class IProducerGroup extends java.lang.Object {
						public static class: java.lang.Class<com.kk.taurus.playerbase.extension.IProducerGroup>;
						/**
						 * Constructs a new instance of the com.kk.taurus.playerbase.extension.IProducerGroup interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							addEventProducer(baseEventProducer0: com.kk.taurus.playerbase.extension.BaseEventProducer): void;
							removeEventProducer(baseEventProducer0: com.kk.taurus.playerbase.extension.BaseEventProducer): boolean;
							bindStateGetter(stateGetter0: com.kk.taurus.playerbase.receiver.StateGetter): void;
							getEventCallback(): com.kk.taurus.playerbase.extension.EventCallback;
							destroy(): void;
						});
						public constructor();
						public getEventCallback(): com.kk.taurus.playerbase.extension.EventCallback;
						public removeEventProducer(baseEventProducer0: com.kk.taurus.playerbase.extension.BaseEventProducer): boolean;
						public bindStateGetter(stateGetter0: com.kk.taurus.playerbase.receiver.StateGetter): void;
						public destroy(): void;
						public addEventProducer(baseEventProducer0: com.kk.taurus.playerbase.extension.BaseEventProducer): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module extension {
					export class NetworkEventProducer extends com.kk.taurus.playerbase.extension.BaseEventProducer {
						public static class: java.lang.Class<com.kk.taurus.playerbase.extension.NetworkEventProducer>;
						public constructor();
						public onAdded(): void;
						public onRemoved(): void;
						public destroy(): void;
						public getPlayerStateGetter(): com.kk.taurus.playerbase.receiver.PlayerStateGetter;
						public constructor(context: globalAndroid.content.Context);
						public getSender(): com.kk.taurus.playerbase.extension.ReceiverEventSender;
					}
					export module NetworkEventProducer {
						export class NetChangeBroadcastReceiver extends globalAndroid.content.BroadcastReceiver {
							public static class: java.lang.Class<com.kk.taurus.playerbase.extension.NetworkEventProducer.NetChangeBroadcastReceiver>;
							public constructor();
							public destroy(): void;
							public onReceive(context: globalAndroid.content.Context, intent: globalAndroid.content.Intent): void;
							public constructor(context: globalAndroid.content.Context, handler: globalAndroid.os.Handler);
							public onReceive(context0: globalAndroid.content.Context, intent1: globalAndroid.content.Intent): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module extension {
					export class ProducerEventSender extends java.lang.Object implements com.kk.taurus.playerbase.extension.ReceiverEventSender {
						public static class: java.lang.Class<com.kk.taurus.playerbase.extension.ProducerEventSender>;
						public sendLong(key: string, value: number, receiverFilter: com.kk.taurus.playerbase.receiver.IReceiverGroup.OnReceiverFilter): void;
						public sendEvent(eventCode: number, bundle: globalAndroid.os.Bundle, receiverFilter: com.kk.taurus.playerbase.receiver.IReceiverGroup.OnReceiverFilter): void;
						public sendObject(key: string, value: any): void;
						public sendEvent(eventCode: number, bundle: globalAndroid.os.Bundle): void;
						public sendString(key: string, value: string, receiverFilter: com.kk.taurus.playerbase.receiver.IReceiverGroup.OnReceiverFilter): void;
						public sendBoolean(key: string, value: boolean, receiverFilter: com.kk.taurus.playerbase.receiver.IReceiverGroup.OnReceiverFilter): void;
						public sendInt(key: string, value: number): void;
						public sendLong(key: string, value: number): void;
						public sendInt(key: string, value: number, receiverFilter: com.kk.taurus.playerbase.receiver.IReceiverGroup.OnReceiverFilter): void;
						public constructor(eventSender: com.kk.taurus.playerbase.extension.DelegateReceiverEventSender);
						public sendDouble(key: string, value: number): void;
						public sendBoolean(key: string, value: boolean): void;
						public sendFloat(key: string, value: number): void;
						public sendObject(key: string, value: any, receiverFilter: com.kk.taurus.playerbase.receiver.IReceiverGroup.OnReceiverFilter): void;
						public sendFloat(key: string, value: number, receiverFilter: com.kk.taurus.playerbase.receiver.IReceiverGroup.OnReceiverFilter): void;
						public sendDouble(key: string, value: number, receiverFilter: com.kk.taurus.playerbase.receiver.IReceiverGroup.OnReceiverFilter): void;
						public sendString(key: string, value: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module extension {
					export class ProducerGroup extends java.lang.Object implements com.kk.taurus.playerbase.extension.IProducerGroup {
						public static class: java.lang.Class<com.kk.taurus.playerbase.extension.ProducerGroup>;
						public constructor(eventSender: com.kk.taurus.playerbase.extension.ReceiverEventSender);
						public getEventCallback(): com.kk.taurus.playerbase.extension.EventCallback;
						public removeEventProducer(eventProducer: com.kk.taurus.playerbase.extension.BaseEventProducer): boolean;
						public bindStateGetter(stateGetter: com.kk.taurus.playerbase.receiver.StateGetter): void;
						public destroy(): void;
						public addEventProducer(eventProducer: com.kk.taurus.playerbase.extension.BaseEventProducer): void;
					}
					export module ProducerGroup {
						export class OnEachListener extends java.lang.Object {
							public static class: java.lang.Class<com.kk.taurus.playerbase.extension.ProducerGroup.OnEachListener>;
							/**
							 * Constructs a new instance of the com.kk.taurus.playerbase.extension.ProducerGroup$OnEachListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onEach(baseEventProducer0: com.kk.taurus.playerbase.extension.BaseEventProducer): void;
							});
							public constructor();
							public onEach(baseEventProducer0: com.kk.taurus.playerbase.extension.BaseEventProducer): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module extension {
					export class ReceiverEventSender extends java.lang.Object {
						public static class: java.lang.Class<com.kk.taurus.playerbase.extension.ReceiverEventSender>;
						/**
						 * Constructs a new instance of the com.kk.taurus.playerbase.extension.ReceiverEventSender interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							sendEvent(int0: number, bundle1: globalAndroid.os.Bundle): void;
							sendEvent(int0: number, bundle1: globalAndroid.os.Bundle, onReceiverFilter2: com.kk.taurus.playerbase.receiver.IReceiverGroup.OnReceiverFilter): void;
							sendBoolean(string0: string, boolean1: boolean): void;
							sendBoolean(string0: string, boolean1: boolean, onReceiverFilter2: com.kk.taurus.playerbase.receiver.IReceiverGroup.OnReceiverFilter): void;
							sendInt(string0: string, int1: number): void;
							sendInt(string0: string, int1: number, onReceiverFilter2: com.kk.taurus.playerbase.receiver.IReceiverGroup.OnReceiverFilter): void;
							sendString(string0: string, string1: string): void;
							sendString(string0: string, string1: string, onReceiverFilter2: com.kk.taurus.playerbase.receiver.IReceiverGroup.OnReceiverFilter): void;
							sendFloat(string0: string, float1: number): void;
							sendFloat(string0: string, float1: number, onReceiverFilter2: com.kk.taurus.playerbase.receiver.IReceiverGroup.OnReceiverFilter): void;
							sendLong(string0: string, long1: number): void;
							sendLong(string0: string, long1: number, onReceiverFilter2: com.kk.taurus.playerbase.receiver.IReceiverGroup.OnReceiverFilter): void;
							sendDouble(string0: string, double1: number): void;
							sendDouble(string0: string, double1: number, onReceiverFilter2: com.kk.taurus.playerbase.receiver.IReceiverGroup.OnReceiverFilter): void;
							sendObject(string0: string, object1: any): void;
							sendObject(string0: string, object1: any, onReceiverFilter2: com.kk.taurus.playerbase.receiver.IReceiverGroup.OnReceiverFilter): void;
						});
						public constructor();
						public sendInt(string0: string, int1: number, onReceiverFilter2: com.kk.taurus.playerbase.receiver.IReceiverGroup.OnReceiverFilter): void;
						public sendObject(string0: string, object1: any): void;
						public sendEvent(int0: number, bundle1: globalAndroid.os.Bundle, onReceiverFilter2: com.kk.taurus.playerbase.receiver.IReceiverGroup.OnReceiverFilter): void;
						public sendFloat(string0: string, float1: number): void;
						public sendString(string0: string, string1: string, onReceiverFilter2: com.kk.taurus.playerbase.receiver.IReceiverGroup.OnReceiverFilter): void;
						public sendFloat(string0: string, float1: number, onReceiverFilter2: com.kk.taurus.playerbase.receiver.IReceiverGroup.OnReceiverFilter): void;
						public sendObject(string0: string, object1: any, onReceiverFilter2: com.kk.taurus.playerbase.receiver.IReceiverGroup.OnReceiverFilter): void;
						public sendLong(string0: string, long1: number, onReceiverFilter2: com.kk.taurus.playerbase.receiver.IReceiverGroup.OnReceiverFilter): void;
						public sendString(string0: string, string1: string): void;
						public sendEvent(int0: number, bundle1: globalAndroid.os.Bundle): void;
						public sendDouble(string0: string, double1: number): void;
						public sendBoolean(string0: string, boolean1: boolean, onReceiverFilter2: com.kk.taurus.playerbase.receiver.IReceiverGroup.OnReceiverFilter): void;
						public sendBoolean(string0: string, boolean1: boolean): void;
						public sendInt(string0: string, int1: number): void;
						public sendLong(string0: string, long1: number): void;
						public sendDouble(string0: string, double1: number, onReceiverFilter2: com.kk.taurus.playerbase.receiver.IReceiverGroup.OnReceiverFilter): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module log {
					export class DebugLog extends java.lang.Object {
						public static class: java.lang.Class<com.kk.taurus.playerbase.log.DebugLog>;
						public constructor();
						public static onPlayEventLog(eventCode: number, bundle: globalAndroid.os.Bundle): void;
						public static onErrorEventLog(eventCode: number, bundle: globalAndroid.os.Bundle): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module log {
					export class PLog extends java.lang.Object {
						public static class: java.lang.Class<com.kk.taurus.playerbase.log.PLog>;
						public static LOG_OPEN: boolean;
						public static d(tag: string, message: string): void;
						public constructor();
						public static e(tag: string, message: string): void;
						public static w(tag: string, message: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module player {
					export abstract class BaseInternalPlayer extends java.lang.Object implements com.kk.taurus.playerbase.player.IPlayer {
						public static class: java.lang.Class<com.kk.taurus.playerbase.player.BaseInternalPlayer>;
						public isPlaying(): boolean;
						public seekTo(int0: number): void;
						public pause(): void;
						public destroy(): void;
						public submitErrorEvent(eventCode: number, bundle: globalAndroid.os.Bundle): void;
						public submitBufferingUpdate(bufferPercentage: number, extra: globalAndroid.os.Bundle): void;
						public resume(): void;
						public option(code: number, bundle: globalAndroid.os.Bundle): void;
						public setOnBufferingListener(onBufferingListener: com.kk.taurus.playerbase.player.OnBufferingListener): void;
						public setDataSource(dataSource0: com.kk.taurus.playerbase.entity.DataSource): void;
						public getVideoWidth(): number;
						public setSurface(surface0: globalAndroid.view.Surface): void;
						public getAudioSessionId(): number;
						public getVideoHeight(): number;
						public setSpeed(float0: number): void;
						public constructor();
						public getDuration(): number;
						public setOnPlayerEventListener(onPlayerEventListener: com.kk.taurus.playerbase.event.OnPlayerEventListener): void;
						public setDisplay(surfaceHolder0: globalAndroid.view.SurfaceHolder): void;
						public setOnErrorEventListener(onErrorEventListener: com.kk.taurus.playerbase.event.OnErrorEventListener): void;
						public stop(): void;
						public isLooping(): boolean;
						public getBufferPercentage(): number;
						public setVolume(float0: number, float1: number): void;
						public start(): void;
						public getState(): number;
						public submitPlayerEvent(eventCode: number, bundle: globalAndroid.os.Bundle): void;
						public updateStatus(status: number): void;
						public setLooping(looping: boolean): void;
						public reset(): void;
						public getCurrentPosition(): number;
						public start(int0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module player {
					export class IPlayer extends java.lang.Object {
						public static class: java.lang.Class<com.kk.taurus.playerbase.player.IPlayer>;
						/**
						 * Constructs a new instance of the com.kk.taurus.playerbase.player.IPlayer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							option(int0: number, bundle1: globalAndroid.os.Bundle): void;
							setDataSource(dataSource0: com.kk.taurus.playerbase.entity.DataSource): void;
							setDisplay(surfaceHolder0: globalAndroid.view.SurfaceHolder): void;
							setSurface(surface0: globalAndroid.view.Surface): void;
							setVolume(float0: number, float1: number): void;
							setSpeed(float0: number): void;
							setLooping(boolean0: boolean): void;
							setOnPlayerEventListener(onPlayerEventListener0: com.kk.taurus.playerbase.event.OnPlayerEventListener): void;
							setOnErrorEventListener(onErrorEventListener0: com.kk.taurus.playerbase.event.OnErrorEventListener): void;
							setOnBufferingListener(onBufferingListener0: com.kk.taurus.playerbase.player.OnBufferingListener): void;
							getBufferPercentage(): number;
							isPlaying(): boolean;
							getCurrentPosition(): number;
							getDuration(): number;
							getAudioSessionId(): number;
							getVideoWidth(): number;
							getVideoHeight(): number;
							getState(): number;
							start(): void;
							start(int0: number): void;
							pause(): void;
							resume(): void;
							seekTo(int0: number): void;
							stop(): void;
							reset(): void;
							destroy(): void;
						});
						public constructor();
						public static STATE_STARTED: number;
						public static STATE_END: number;
						public static STATE_INITIALIZED: number;
						public static STATE_STOPPED: number;
						public static STATE_PLAYBACK_COMPLETE: number;
						public static STATE_PAUSED: number;
						public static STATE_ERROR: number;
						public static STATE_IDLE: number;
						public static STATE_PREPARED: number;
						public isPlaying(): boolean;
						public seekTo(int0: number): void;
						public pause(): void;
						public destroy(): void;
						public setOnErrorEventListener(onErrorEventListener0: com.kk.taurus.playerbase.event.OnErrorEventListener): void;
						public setLooping(boolean0: boolean): void;
						public resume(): void;
						public setDataSource(dataSource0: com.kk.taurus.playerbase.entity.DataSource): void;
						public setOnBufferingListener(onBufferingListener0: com.kk.taurus.playerbase.player.OnBufferingListener): void;
						public getVideoWidth(): number;
						public setSurface(surface0: globalAndroid.view.Surface): void;
						public option(int0: number, bundle1: globalAndroid.os.Bundle): void;
						public setOnPlayerEventListener(onPlayerEventListener0: com.kk.taurus.playerbase.event.OnPlayerEventListener): void;
						public getAudioSessionId(): number;
						public getVideoHeight(): number;
						public setSpeed(float0: number): void;
						public getDuration(): number;
						public setDisplay(surfaceHolder0: globalAndroid.view.SurfaceHolder): void;
						public stop(): void;
						public setVolume(float0: number, float1: number): void;
						public getBufferPercentage(): number;
						public start(): void;
						public getState(): number;
						public reset(): void;
						public getCurrentPosition(): number;
						public start(int0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module player {
					export class IPlayerProxy extends java.lang.Object {
						public static class: java.lang.Class<com.kk.taurus.playerbase.player.IPlayerProxy>;
						/**
						 * Constructs a new instance of the com.kk.taurus.playerbase.player.IPlayerProxy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onDataSourceReady(dataSource0: com.kk.taurus.playerbase.entity.DataSource): void;
							onIntentStop(): void;
							onIntentReset(): void;
							onIntentDestroy(): void;
							onPlayerEvent(int0: number, bundle1: globalAndroid.os.Bundle): void;
							onErrorEvent(int0: number, bundle1: globalAndroid.os.Bundle): void;
							getRecord(dataSource0: com.kk.taurus.playerbase.entity.DataSource): number;
						});
						public constructor();
						public onIntentStop(): void;
						public onPlayerEvent(int0: number, bundle1: globalAndroid.os.Bundle): void;
						public getRecord(dataSource0: com.kk.taurus.playerbase.entity.DataSource): number;
						public onIntentReset(): void;
						public onIntentDestroy(): void;
						public onErrorEvent(int0: number, bundle1: globalAndroid.os.Bundle): void;
						public onDataSourceReady(dataSource0: com.kk.taurus.playerbase.entity.DataSource): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module player {
					export class OnBufferingListener extends java.lang.Object {
						public static class: java.lang.Class<com.kk.taurus.playerbase.player.OnBufferingListener>;
						/**
						 * Constructs a new instance of the com.kk.taurus.playerbase.player.OnBufferingListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onBufferingUpdate(int0: number, bundle1: globalAndroid.os.Bundle): void;
						});
						public constructor();
						public onBufferingUpdate(int0: number, bundle1: globalAndroid.os.Bundle): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module player {
					export class OnTimerUpdateListener extends java.lang.Object {
						public static class: java.lang.Class<com.kk.taurus.playerbase.player.OnTimerUpdateListener>;
						/**
						 * Constructs a new instance of the com.kk.taurus.playerbase.player.OnTimerUpdateListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onTimerUpdate(int0: number, int1: number, int2: number): void;
						});
						public constructor();
						public onTimerUpdate(int0: number, int1: number, int2: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module player {
					export class SysMediaPlayer extends com.kk.taurus.playerbase.player.BaseInternalPlayer {
						public static class: java.lang.Class<com.kk.taurus.playerbase.player.SysMediaPlayer>;
						public isPlaying(): boolean;
						public pause(): void;
						public destroy(): void;
						public setSurface(surface: globalAndroid.view.Surface): void;
						public seekTo(msc: number): void;
						public resume(): void;
						public start(msc: number): void;
						public option(code: number, bundle: globalAndroid.os.Bundle): void;
						public setOnBufferingListener(onBufferingListener: com.kk.taurus.playerbase.player.OnBufferingListener): void;
						public getVideoWidth(): number;
						public getAudioSessionId(): number;
						public getVideoHeight(): number;
						public constructor();
						public getDuration(): number;
						public setOnPlayerEventListener(onPlayerEventListener: com.kk.taurus.playerbase.event.OnPlayerEventListener): void;
						public setDisplay(surfaceHolder: globalAndroid.view.SurfaceHolder): void;
						public setDataSource(dataSource: com.kk.taurus.playerbase.entity.DataSource): void;
						public setOnErrorEventListener(onErrorEventListener: com.kk.taurus.playerbase.event.OnErrorEventListener): void;
						public stop(): void;
						public getBufferPercentage(): number;
						public start(): void;
						public getState(): number;
						public setVolume(left: number, right: number): void;
						public setLooping(looping: boolean): void;
						public reset(): void;
						public setSpeed(speed: number): void;
						public getCurrentPosition(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module player {
					export class TimerCounterProxy extends java.lang.Object {
						public static class: java.lang.Class<com.kk.taurus.playerbase.player.TimerCounterProxy>;
						public constructor(counterIntervalMs: number);
						public start(): void;
						public cancel(): void;
						public setUseProxy(useProxy: boolean): void;
						public setOnCounterUpdateListener(onCounterUpdateListener: com.kk.taurus.playerbase.player.TimerCounterProxy.OnCounterUpdateListener): void;
						public proxyErrorEvent(eventCode: number, bundle: globalAndroid.os.Bundle): void;
						public proxyPlayEvent(eventCode: number, bundle: globalAndroid.os.Bundle): void;
					}
					export module TimerCounterProxy {
						export class OnCounterUpdateListener extends java.lang.Object {
							public static class: java.lang.Class<com.kk.taurus.playerbase.player.TimerCounterProxy.OnCounterUpdateListener>;
							/**
							 * Constructs a new instance of the com.kk.taurus.playerbase.player.TimerCounterProxy$OnCounterUpdateListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onCounter(): void;
							});
							public constructor();
							public onCounter(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module provider {
					export abstract class BaseDataProvider extends java.lang.Object implements com.kk.taurus.playerbase.provider.IDataProvider {
						public static class: java.lang.Class<com.kk.taurus.playerbase.provider.BaseDataProvider>;
						public onProviderExtraDataSuccess(code: number, bundle: globalAndroid.os.Bundle): void;
						public constructor();
						public onProviderDataStart(): void;
						public onProviderMediaDataError(bundle: globalAndroid.os.Bundle): void;
						public cancel(): void;
						public onProviderError(code: number, bundle: globalAndroid.os.Bundle): void;
						public destroy(): void;
						public handleSourceData(dataSource0: com.kk.taurus.playerbase.entity.DataSource): void;
						/** @deprecated */
						public onProviderMediaDataSuccess(bundle: globalAndroid.os.Bundle): void;
						public onProviderMediaDataSuccess(dataSource: com.kk.taurus.playerbase.entity.DataSource): void;
						public setOnProviderListener(onProviderListener: com.kk.taurus.playerbase.provider.IDataProvider.OnProviderListener): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module provider {
					export class IDataProvider extends java.lang.Object {
						public static class: java.lang.Class<com.kk.taurus.playerbase.provider.IDataProvider>;
						/**
						 * Constructs a new instance of the com.kk.taurus.playerbase.provider.IDataProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							setOnProviderListener(onProviderListener0: com.kk.taurus.playerbase.provider.IDataProvider.OnProviderListener): void;
							handleSourceData(dataSource0: com.kk.taurus.playerbase.entity.DataSource): void;
							cancel(): void;
							destroy(): void;
						});
						public constructor();
						public static PROVIDER_CODE_SUCCESS_MEDIA_DATA: number;
						public static PROVIDER_CODE_DATA_PROVIDER_ERROR: number;
						public cancel(): void;
						public setOnProviderListener(onProviderListener0: com.kk.taurus.playerbase.provider.IDataProvider.OnProviderListener): void;
						public destroy(): void;
						public handleSourceData(dataSource0: com.kk.taurus.playerbase.entity.DataSource): void;
					}
					export module IDataProvider {
						export class OnProviderListener extends java.lang.Object {
							public static class: java.lang.Class<com.kk.taurus.playerbase.provider.IDataProvider.OnProviderListener>;
							/**
							 * Constructs a new instance of the com.kk.taurus.playerbase.provider.IDataProvider$OnProviderListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onProviderDataStart(): void;
								onProviderDataSuccess(int0: number, bundle1: globalAndroid.os.Bundle): void;
								onProviderError(int0: number, bundle1: globalAndroid.os.Bundle): void;
							});
							public constructor();
							public onProviderError(int0: number, bundle1: globalAndroid.os.Bundle): void;
							public onProviderDataSuccess(int0: number, bundle1: globalAndroid.os.Bundle): void;
							public onProviderDataStart(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module receiver {
					export abstract class AbsCoverContainer extends java.lang.Object implements com.kk.taurus.playerbase.receiver.ICoverStrategy {
						public static class: java.lang.Class<com.kk.taurus.playerbase.receiver.AbsCoverContainer>;
						public mContext: globalAndroid.content.Context;
						public onCoverRemove(baseCover0: com.kk.taurus.playerbase.receiver.BaseCover): void;
						public isContainsCover(cover: com.kk.taurus.playerbase.receiver.BaseCover): boolean;
						public addCover(cover: com.kk.taurus.playerbase.receiver.BaseCover): void;
						public removeAllCovers(): void;
						public removeCover(cover: com.kk.taurus.playerbase.receiver.BaseCover): void;
						public onCoverAdd(baseCover0: com.kk.taurus.playerbase.receiver.BaseCover): void;
						public getCoverCount(): number;
						public onAvailableCoverAdd(baseCover0: com.kk.taurus.playerbase.receiver.BaseCover): void;
						public getRootChildCount(): number;
						public rootGetChildAt(index: number): globalAndroid.view.View;
						public onCoversRemoveAll(): void;
						public onAvailableCoverRemove(baseCover0: com.kk.taurus.playerbase.receiver.BaseCover): void;
						public rootIndexOfChild(view: globalAndroid.view.View): number;
						public initContainerRootView(): globalAndroid.view.ViewGroup;
						public isAvailableCover(cover: com.kk.taurus.playerbase.receiver.BaseCover): boolean;
						public getContainerView(): globalAndroid.view.ViewGroup;
						public constructor(context: globalAndroid.content.Context);
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module receiver {
					export abstract class BaseCover extends com.kk.taurus.playerbase.receiver.BaseReceiver implements com.kk.taurus.playerbase.receiver.ICover, com.kk.taurus.playerbase.receiver.ICoverHandle, globalAndroid.view.View.OnAttachStateChangeListener {
						public static class: java.lang.Class<com.kk.taurus.playerbase.receiver.BaseCover>;
						public findViewById(id: number): globalAndroid.view.View;
						public getCoverLevel(): number;
						public onProducerEvent(eventCode: number, bundle: globalAndroid.os.Bundle): void;
						public bindStateGetter(stateGetter: com.kk.taurus.playerbase.receiver.StateGetter): void;
						public requestReplay(bundle: globalAndroid.os.Bundle): void;
						public onErrorEvent(int0: number, bundle1: globalAndroid.os.Bundle): void;
						public onViewDetachedFromWindow(v: globalAndroid.view.View): void;
						public getKey(): string;
						public requestNotifyTimer(): void;
						public requestStop(bundle: globalAndroid.os.Bundle): void;
						public requestReset(bundle: globalAndroid.os.Bundle): void;
						public onReceiverBind(): void;
						public onViewAttachedToWindow(v: globalAndroid.view.View): void;
						public requestPlayDataSource(bundle: globalAndroid.os.Bundle): void;
						public getPlayerStateGetter(): com.kk.taurus.playerbase.receiver.PlayerStateGetter;
						public onCreateCoverView(context0: globalAndroid.content.Context): globalAndroid.view.View;
						public bindGroup(receiverGroup: com.kk.taurus.playerbase.receiver.IReceiverGroup): void;
						public bindReceiverEventListener(onReceiverEventListener: com.kk.taurus.playerbase.receiver.OnReceiverEventListener): void;
						public onCoverAttachedToWindow(): void;
						public requestSeek(bundle: globalAndroid.os.Bundle): void;
						public requestStopTimer(): void;
						public onPlayerEvent(int0: number, bundle1: globalAndroid.os.Bundle): void;
						public requestResume(bundle: globalAndroid.os.Bundle): void;
						public onCoverDetachedToWindow(): void;
						public onReceiverEvent(int0: number, bundle1: globalAndroid.os.Bundle): void;
						public onProducerData(key: string, data: any): void;
						public requestRetry(bundle: globalAndroid.os.Bundle): void;
						public levelLow(priority: number): number;
						public requestPause(bundle: globalAndroid.os.Bundle): void;
						public getView(): globalAndroid.view.View;
						public onPrivateEvent(eventCode: number, bundle: globalAndroid.os.Bundle): globalAndroid.os.Bundle;
						public onReceiverUnBind(): void;
						public setCoverVisibility(visibility: number): void;
						public levelHigh(priority: number): number;
						public levelMedium(priority: number): number;
						public constructor(context: globalAndroid.content.Context);
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module receiver {
					export abstract class BaseLevelCoverContainer extends com.kk.taurus.playerbase.receiver.AbsCoverContainer {
						public static class: java.lang.Class<com.kk.taurus.playerbase.receiver.BaseLevelCoverContainer>;
						public onCoverRemove(baseCover0: com.kk.taurus.playerbase.receiver.BaseCover): void;
						public isContainsCover(cover: com.kk.taurus.playerbase.receiver.BaseCover): boolean;
						public onCoverRemove(cover: com.kk.taurus.playerbase.receiver.BaseCover): void;
						public addCover(cover: com.kk.taurus.playerbase.receiver.BaseCover): void;
						public removeAllCovers(): void;
						public onAvailableCoverAdd(cover: com.kk.taurus.playerbase.receiver.BaseCover): void;
						public removeCover(cover: com.kk.taurus.playerbase.receiver.BaseCover): void;
						public onCoverAdd(baseCover0: com.kk.taurus.playerbase.receiver.BaseCover): void;
						public addLevelContainerView(container: globalAndroid.view.ViewGroup, layoutParams: globalAndroid.view.ViewGroup.LayoutParams): void;
						public getCoverCount(): number;
						public initLevelContainers(context0: globalAndroid.content.Context): void;
						public onAvailableCoverAdd(baseCover0: com.kk.taurus.playerbase.receiver.BaseCover): void;
						public onCoversRemoveAll(): void;
						public onAvailableCoverRemove(baseCover0: com.kk.taurus.playerbase.receiver.BaseCover): void;
						public onAvailableCoverRemove(cover: com.kk.taurus.playerbase.receiver.BaseCover): void;
						public initContainerRootView(): globalAndroid.view.ViewGroup;
						public getContainerView(): globalAndroid.view.ViewGroup;
						public constructor(context: globalAndroid.content.Context);
						public onCoverAdd(cover: com.kk.taurus.playerbase.receiver.BaseCover): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module receiver {
					export abstract class BaseReceiver extends java.lang.Object implements com.kk.taurus.playerbase.receiver.IReceiver, com.kk.taurus.playerbase.receiver.StateGetter {
						public static class: java.lang.Class<com.kk.taurus.playerbase.receiver.BaseReceiver>;
						public onProducerEvent(eventCode: number, bundle: globalAndroid.os.Bundle): void;
						public bindGroup(receiverGroup: com.kk.taurus.playerbase.receiver.IReceiverGroup): void;
						public bindReceiverEventListener(onReceiverEventListener: com.kk.taurus.playerbase.receiver.OnReceiverEventListener): void;
						public notifyReceiverPrivateEvent(key: string, eventCode: number, bundle: globalAndroid.os.Bundle): globalAndroid.os.Bundle;
						public getContext(): globalAndroid.content.Context;
						public getGroupValue(): com.kk.taurus.playerbase.receiver.GroupValue;
						public bindStateGetter(stateGetter: com.kk.taurus.playerbase.receiver.StateGetter): void;
						public onErrorEvent(int0: number, bundle1: globalAndroid.os.Bundle): void;
						public getKey(): string;
						public onPlayerEvent(int0: number, bundle1: globalAndroid.os.Bundle): void;
						public onReceiverEvent(int0: number, bundle1: globalAndroid.os.Bundle): void;
						public notifyReceiverEvent(eventCode: number, bundle: globalAndroid.os.Bundle): void;
						public onProducerData(key: string, data: any): void;
						public getTag(): any;
						public onReceiverBind(): void;
						public onReceiverUnBind(): void;
						public onPrivateEvent(eventCode: number, bundle: globalAndroid.os.Bundle): globalAndroid.os.Bundle;
						public getPlayerStateGetter(): com.kk.taurus.playerbase.receiver.PlayerStateGetter;
						public constructor(context: globalAndroid.content.Context);
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module receiver {
					export class CoverComparator extends java.util.Comparator<com.kk.taurus.playerbase.receiver.IReceiver> {
						public static class: java.lang.Class<com.kk.taurus.playerbase.receiver.CoverComparator>;
						public constructor();
						public equals(obj: any): boolean;
						public static nullsLast(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
						public compare(o1: com.kk.taurus.playerbase.receiver.IReceiver, o2: com.kk.taurus.playerbase.receiver.IReceiver): number;
						public compare(object0: any, object1: any): number;
						public thenComparing(keyExtractor: any /* any*/): java.util.Comparator<any>;
						public static reverseOrder(): java.util.Comparator<any>;
						public thenComparingLong(keyExtractor: any /* any*/): java.util.Comparator<any>;
						public static comparingDouble(keyExtractor: any /* any*/): java.util.Comparator<any>;
						public reversed(): java.util.Comparator<any>;
						public thenComparingInt(keyExtractor: any /* any*/): java.util.Comparator<any>;
						public thenComparingDouble(keyExtractor: any /* any*/): java.util.Comparator<any>;
						public static comparing(keyExtractor: any /* any*/): java.util.Comparator<any>;
						public static comparing(keyExtractor: any /* any*/, keyComparator: java.util.Comparator<any>): java.util.Comparator<any>;
						public thenComparing(keyExtractor: any /* any*/, keyComparator: java.util.Comparator<any>): java.util.Comparator<any>;
						public static nullsFirst(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
						public static naturalOrder(): java.util.Comparator<any>;
						public thenComparing(other: java.util.Comparator<any>): java.util.Comparator<any>;
						public static comparingLong(keyExtractor: any /* any*/): java.util.Comparator<any>;
						public static comparingInt(keyExtractor: any /* any*/): java.util.Comparator<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module receiver {
					export class DefaultLevelCoverContainer extends com.kk.taurus.playerbase.receiver.BaseLevelCoverContainer {
						public static class: java.lang.Class<com.kk.taurus.playerbase.receiver.DefaultLevelCoverContainer>;
						public initLevelContainers(context0: globalAndroid.content.Context): void;
						public initLevelContainers(context: globalAndroid.content.Context): void;
						public onCoversRemoveAll(): void;
						public onAvailableCoverRemove(cover: com.kk.taurus.playerbase.receiver.BaseCover): void;
						public isContainsCover(cover: com.kk.taurus.playerbase.receiver.BaseCover): boolean;
						public addCover(cover: com.kk.taurus.playerbase.receiver.BaseCover): void;
						public removeAllCovers(): void;
						public getContainerView(): globalAndroid.view.ViewGroup;
						public onAvailableCoverAdd(cover: com.kk.taurus.playerbase.receiver.BaseCover): void;
						public removeCover(cover: com.kk.taurus.playerbase.receiver.BaseCover): void;
						public constructor(context: globalAndroid.content.Context);
						public getCoverCount(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module receiver {
					export class GroupValue extends java.lang.Object implements com.kk.taurus.playerbase.receiver.ValueInter {
						public static class: java.lang.Class<com.kk.taurus.playerbase.receiver.GroupValue>;
						public putInt(key: string, value: number, notifyUpdate: boolean): void;
						public getInt(key: string, defaultValue: number): number;
						public putFloat(key: string, value: number, notifyUpdate: boolean): void;
						public getBoolean(key: string): boolean;
						public getDouble(key: string): number;
						public getFloat(key: string, defaultValue: number): number;
						public getBoolean(key: string, defaultValue: boolean): boolean;
						public registerOnGroupValueUpdateListener(onGroupValueUpdateListener: com.kk.taurus.playerbase.receiver.IReceiverGroup.OnGroupValueUpdateListener): void;
						public putInt(key: string, value: number): void;
						public putString(key: string, value: string, notifyUpdate: boolean): void;
						public getFloat(key: string): number;
						public getDouble(key: string, defaultValue: number): number;
						public putLong(key: string, value: number, notifyUpdate: boolean): void;
						public constructor();
						public putObject(key: string, value: any): void;
						public clearValues(): void;
						public getString(key: string): string;
						public putDouble(key: string, value: number, notifyUpdate: boolean): void;
						public getLong(key: string): number;
						public putBoolean(key: string, value: boolean, notifyUpdate: boolean): void;
						public putLong(key: string, value: number): void;
						public putString(key: string, value: string): void;
						public putBoolean(key: string, value: boolean): void;
						public getInt(key: string): number;
						public clearOnGroupValueUpdateListeners(): void;
						public getLong(key: string, defaultValue: number): number;
						public putObject(key: string, value: any, notifyUpdate: boolean): void;
						public putFloat(key: string, value: number): void;
						public unregisterOnGroupValueUpdateListener(onGroupValueUpdateListener: com.kk.taurus.playerbase.receiver.IReceiverGroup.OnGroupValueUpdateListener): void;
						public putDouble(key: string, value: number): void;
						public get(key: string): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module receiver {
					export class ICover extends java.lang.Object {
						public static class: java.lang.Class<com.kk.taurus.playerbase.receiver.ICover>;
						/**
						 * Constructs a new instance of the com.kk.taurus.playerbase.receiver.ICover interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							setCoverVisibility(int0: number): void;
							getView(): globalAndroid.view.View;
							getCoverLevel(): number;
						});
						public constructor();
						public static COVER_LEVEL_MEDIUM: number;
						public static COVER_LEVEL_LOW: number;
						public static LEVEL_MAX: number;
						public static COVER_LEVEL_HIGH: number;
						public getCoverLevel(): number;
						public getView(): globalAndroid.view.View;
						public setCoverVisibility(int0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module receiver {
					export class ICoverHandle extends java.lang.Object {
						public static class: java.lang.Class<com.kk.taurus.playerbase.receiver.ICoverHandle>;
						/**
						 * Constructs a new instance of the com.kk.taurus.playerbase.receiver.ICoverHandle interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							requestPause(bundle0: globalAndroid.os.Bundle): void;
							requestResume(bundle0: globalAndroid.os.Bundle): void;
							requestSeek(bundle0: globalAndroid.os.Bundle): void;
							requestStop(bundle0: globalAndroid.os.Bundle): void;
							requestReset(bundle0: globalAndroid.os.Bundle): void;
							requestRetry(bundle0: globalAndroid.os.Bundle): void;
							requestReplay(bundle0: globalAndroid.os.Bundle): void;
							requestPlayDataSource(bundle0: globalAndroid.os.Bundle): void;
							requestNotifyTimer(): void;
							requestStopTimer(): void;
						});
						public constructor();
						public requestPause(bundle0: globalAndroid.os.Bundle): void;
						public requestNotifyTimer(): void;
						public requestSeek(bundle0: globalAndroid.os.Bundle): void;
						public requestReset(bundle0: globalAndroid.os.Bundle): void;
						public requestRetry(bundle0: globalAndroid.os.Bundle): void;
						public requestResume(bundle0: globalAndroid.os.Bundle): void;
						public requestPlayDataSource(bundle0: globalAndroid.os.Bundle): void;
						public requestStop(bundle0: globalAndroid.os.Bundle): void;
						public requestReplay(bundle0: globalAndroid.os.Bundle): void;
						public requestStopTimer(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module receiver {
					export class ICoverStrategy extends java.lang.Object {
						public static class: java.lang.Class<com.kk.taurus.playerbase.receiver.ICoverStrategy>;
						/**
						 * Constructs a new instance of the com.kk.taurus.playerbase.receiver.ICoverStrategy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							addCover(baseCover0: com.kk.taurus.playerbase.receiver.BaseCover): void;
							removeCover(baseCover0: com.kk.taurus.playerbase.receiver.BaseCover): void;
							removeAllCovers(): void;
							isContainsCover(baseCover0: com.kk.taurus.playerbase.receiver.BaseCover): boolean;
							getCoverCount(): number;
							getContainerView(): globalAndroid.view.ViewGroup;
						});
						public constructor();
						public isContainsCover(baseCover0: com.kk.taurus.playerbase.receiver.BaseCover): boolean;
						public removeCover(baseCover0: com.kk.taurus.playerbase.receiver.BaseCover): void;
						public removeAllCovers(): void;
						public getContainerView(): globalAndroid.view.ViewGroup;
						public addCover(baseCover0: com.kk.taurus.playerbase.receiver.BaseCover): void;
						public getCoverCount(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module receiver {
					export class IReceiver extends java.lang.Object {
						public static class: java.lang.Class<com.kk.taurus.playerbase.receiver.IReceiver>;
						/**
						 * Constructs a new instance of the com.kk.taurus.playerbase.receiver.IReceiver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							bindGroup(iReceiverGroup0: com.kk.taurus.playerbase.receiver.IReceiverGroup): void;
							onReceiverBind(): void;
							onPlayerEvent(int0: number, bundle1: globalAndroid.os.Bundle): void;
							onErrorEvent(int0: number, bundle1: globalAndroid.os.Bundle): void;
							bindStateGetter(stateGetter0: com.kk.taurus.playerbase.receiver.StateGetter): void;
							bindReceiverEventListener(onReceiverEventListener0: com.kk.taurus.playerbase.receiver.OnReceiverEventListener): void;
							onReceiverEvent(int0: number, bundle1: globalAndroid.os.Bundle): void;
							onPrivateEvent(int0: number, bundle1: globalAndroid.os.Bundle): globalAndroid.os.Bundle;
							onProducerEvent(int0: number, bundle1: globalAndroid.os.Bundle): void;
							onProducerData(string0: string, object1: any): void;
							onReceiverUnBind(): void;
							getKey(): string;
						});
						public constructor();
						public onPlayerEvent(int0: number, bundle1: globalAndroid.os.Bundle): void;
						public onReceiverEvent(int0: number, bundle1: globalAndroid.os.Bundle): void;
						public bindGroup(iReceiverGroup0: com.kk.taurus.playerbase.receiver.IReceiverGroup): void;
						public onReceiverBind(): void;
						public bindStateGetter(stateGetter0: com.kk.taurus.playerbase.receiver.StateGetter): void;
						public onProducerEvent(int0: number, bundle1: globalAndroid.os.Bundle): void;
						public onReceiverUnBind(): void;
						public onErrorEvent(int0: number, bundle1: globalAndroid.os.Bundle): void;
						public bindReceiverEventListener(onReceiverEventListener0: com.kk.taurus.playerbase.receiver.OnReceiverEventListener): void;
						public getKey(): string;
						public onProducerData(string0: string, object1: any): void;
						public onPrivateEvent(int0: number, bundle1: globalAndroid.os.Bundle): globalAndroid.os.Bundle;
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module receiver {
					export class IReceiverGroup extends java.lang.Object {
						public static class: java.lang.Class<com.kk.taurus.playerbase.receiver.IReceiverGroup>;
						/**
						 * Constructs a new instance of the com.kk.taurus.playerbase.receiver.IReceiverGroup interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							addOnReceiverGroupChangeListener(onReceiverGroupChangeListener0: com.kk.taurus.playerbase.receiver.IReceiverGroup.OnReceiverGroupChangeListener): void;
							removeOnReceiverGroupChangeListener(onReceiverGroupChangeListener0: com.kk.taurus.playerbase.receiver.IReceiverGroup.OnReceiverGroupChangeListener): void;
							addReceiver(string0: string, iReceiver1: com.kk.taurus.playerbase.receiver.IReceiver): void;
							removeReceiver(string0: string): void;
							sort(comparator0: java.util.Comparator<com.kk.taurus.playerbase.receiver.IReceiver>): void;
							forEach(onLoopListener0: com.kk.taurus.playerbase.receiver.IReceiverGroup.OnLoopListener): void;
							forEach(onReceiverFilter0: com.kk.taurus.playerbase.receiver.IReceiverGroup.OnReceiverFilter, onLoopListener1: com.kk.taurus.playerbase.receiver.IReceiverGroup.OnLoopListener): void;
							getReceiver(string0: string): com.kk.taurus.playerbase.receiver.IReceiver;
							getGroupValue(): com.kk.taurus.playerbase.receiver.GroupValue;
							clearReceivers(): void;
						});
						public constructor();
						public addReceiver(string0: string, iReceiver1: com.kk.taurus.playerbase.receiver.IReceiver): void;
						public forEach(onLoopListener0: com.kk.taurus.playerbase.receiver.IReceiverGroup.OnLoopListener): void;
						public forEach(onReceiverFilter0: com.kk.taurus.playerbase.receiver.IReceiverGroup.OnReceiverFilter, onLoopListener1: com.kk.taurus.playerbase.receiver.IReceiverGroup.OnLoopListener): void;
						public clearReceivers(): void;
						public removeOnReceiverGroupChangeListener(onReceiverGroupChangeListener0: com.kk.taurus.playerbase.receiver.IReceiverGroup.OnReceiverGroupChangeListener): void;
						public getGroupValue(): com.kk.taurus.playerbase.receiver.GroupValue;
						public addOnReceiverGroupChangeListener(onReceiverGroupChangeListener0: com.kk.taurus.playerbase.receiver.IReceiverGroup.OnReceiverGroupChangeListener): void;
						public sort(comparator0: java.util.Comparator<com.kk.taurus.playerbase.receiver.IReceiver>): void;
						public removeReceiver(string0: string): void;
						public getReceiver(string0: string): com.kk.taurus.playerbase.receiver.IReceiver;
					}
					export module IReceiverGroup {
						export class OnGroupValueUpdateListener extends java.lang.Object {
							public static class: java.lang.Class<com.kk.taurus.playerbase.receiver.IReceiverGroup.OnGroupValueUpdateListener>;
							/**
							 * Constructs a new instance of the com.kk.taurus.playerbase.receiver.IReceiverGroup$OnGroupValueUpdateListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								filterKeys(): native.Array<string>;
								onValueUpdate(string0: string, object1: any): void;
							});
							public constructor();
							public onValueUpdate(string0: string, object1: any): void;
							public filterKeys(): native.Array<string>;
						}
						export class OnLoopListener extends java.lang.Object {
							public static class: java.lang.Class<com.kk.taurus.playerbase.receiver.IReceiverGroup.OnLoopListener>;
							/**
							 * Constructs a new instance of the com.kk.taurus.playerbase.receiver.IReceiverGroup$OnLoopListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onEach(iReceiver0: com.kk.taurus.playerbase.receiver.IReceiver): void;
							});
							public constructor();
							public onEach(iReceiver0: com.kk.taurus.playerbase.receiver.IReceiver): void;
						}
						export class OnReceiverFilter extends java.lang.Object {
							public static class: java.lang.Class<com.kk.taurus.playerbase.receiver.IReceiverGroup.OnReceiverFilter>;
							/**
							 * Constructs a new instance of the com.kk.taurus.playerbase.receiver.IReceiverGroup$OnReceiverFilter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								filter(iReceiver0: com.kk.taurus.playerbase.receiver.IReceiver): boolean;
							});
							public constructor();
							public filter(iReceiver0: com.kk.taurus.playerbase.receiver.IReceiver): boolean;
						}
						export class OnReceiverGroupChangeListener extends java.lang.Object {
							public static class: java.lang.Class<com.kk.taurus.playerbase.receiver.IReceiverGroup.OnReceiverGroupChangeListener>;
							/**
							 * Constructs a new instance of the com.kk.taurus.playerbase.receiver.IReceiverGroup$OnReceiverGroupChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onReceiverAdd(string0: string, iReceiver1: com.kk.taurus.playerbase.receiver.IReceiver): void;
								onReceiverRemove(string0: string, iReceiver1: com.kk.taurus.playerbase.receiver.IReceiver): void;
							});
							public constructor();
							public onReceiverAdd(string0: string, iReceiver1: com.kk.taurus.playerbase.receiver.IReceiver): void;
							public onReceiverRemove(string0: string, iReceiver1: com.kk.taurus.playerbase.receiver.IReceiver): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module receiver {
					export class OnReceiverEventListener extends java.lang.Object {
						public static class: java.lang.Class<com.kk.taurus.playerbase.receiver.OnReceiverEventListener>;
						/**
						 * Constructs a new instance of the com.kk.taurus.playerbase.receiver.OnReceiverEventListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onReceiverEvent(int0: number, bundle1: globalAndroid.os.Bundle): void;
						});
						public constructor();
						public onReceiverEvent(int0: number, bundle1: globalAndroid.os.Bundle): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module receiver {
					export class PlayerStateGetter extends java.lang.Object {
						public static class: java.lang.Class<com.kk.taurus.playerbase.receiver.PlayerStateGetter>;
						/**
						 * Constructs a new instance of the com.kk.taurus.playerbase.receiver.PlayerStateGetter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getState(): number;
							getCurrentPosition(): number;
							getDuration(): number;
							getBufferPercentage(): number;
							isBuffering(): boolean;
						});
						public constructor();
						public isBuffering(): boolean;
						public getBufferPercentage(): number;
						public getDuration(): number;
						public getState(): number;
						public getCurrentPosition(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module receiver {
					export class ReceiverGroup extends java.lang.Object implements com.kk.taurus.playerbase.receiver.IReceiverGroup {
						public static class: java.lang.Class<com.kk.taurus.playerbase.receiver.ReceiverGroup>;
						public constructor(groupValue: com.kk.taurus.playerbase.receiver.GroupValue);
						public forEach(filter: com.kk.taurus.playerbase.receiver.IReceiverGroup.OnReceiverFilter, onLoopListener: com.kk.taurus.playerbase.receiver.IReceiverGroup.OnLoopListener): void;
						public clearReceivers(): void;
						public constructor();
						public forEach(onLoopListener: com.kk.taurus.playerbase.receiver.IReceiverGroup.OnLoopListener): void;
						public addOnReceiverGroupChangeListener(onReceiverGroupChangeListener: com.kk.taurus.playerbase.receiver.IReceiverGroup.OnReceiverGroupChangeListener): void;
						public getGroupValue(): com.kk.taurus.playerbase.receiver.GroupValue;
						public removeReceiver(key: string): void;
						public sort(comparator: java.util.Comparator<com.kk.taurus.playerbase.receiver.IReceiver>): void;
						public removeOnReceiverGroupChangeListener(onReceiverGroupChangeListener: com.kk.taurus.playerbase.receiver.IReceiverGroup.OnReceiverGroupChangeListener): void;
						public addReceiver(key: string, receiver: com.kk.taurus.playerbase.receiver.IReceiver): void;
						public getReceiver(key: string): com.kk.taurus.playerbase.receiver.IReceiver;
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module receiver {
					export class StateGetter extends java.lang.Object {
						public static class: java.lang.Class<com.kk.taurus.playerbase.receiver.StateGetter>;
						/**
						 * Constructs a new instance of the com.kk.taurus.playerbase.receiver.StateGetter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getPlayerStateGetter(): com.kk.taurus.playerbase.receiver.PlayerStateGetter;
						});
						public constructor();
						public getPlayerStateGetter(): com.kk.taurus.playerbase.receiver.PlayerStateGetter;
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module receiver {
					export class ValueInter extends java.lang.Object {
						public static class: java.lang.Class<com.kk.taurus.playerbase.receiver.ValueInter>;
						/**
						 * Constructs a new instance of the com.kk.taurus.playerbase.receiver.ValueInter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							putBoolean(string0: string, boolean1: boolean): void;
							putBoolean(string0: string, boolean1: boolean, boolean2: boolean): void;
							putInt(string0: string, int1: number): void;
							putInt(string0: string, int1: number, boolean2: boolean): void;
							putString(string0: string, string1: string): void;
							putString(string0: string, string1: string, boolean2: boolean): void;
							putFloat(string0: string, float1: number): void;
							putFloat(string0: string, float1: number, boolean2: boolean): void;
							putLong(string0: string, long1: number): void;
							putLong(string0: string, long1: number, boolean2: boolean): void;
							putDouble(string0: string, double1: number): void;
							putDouble(string0: string, double1: number, boolean2: boolean): void;
							putObject(string0: string, object1: any): void;
							putObject(string0: string, object1: any, boolean2: boolean): void;
							get(string0: string): any;
							getBoolean(string0: string): boolean;
							getBoolean(string0: string, boolean1: boolean): boolean;
							getInt(string0: string): number;
							getInt(string0: string, int1: number): number;
							getString(string0: string): string;
							getFloat(string0: string): number;
							getFloat(string0: string, float1: number): number;
							getLong(string0: string): number;
							getLong(string0: string, long1: number): number;
							getDouble(string0: string): number;
							getDouble(string0: string, double1: number): number;
						});
						public constructor();
						public getInt(string0: string, int1: number): number;
						public putInt(string0: string, int1: number, boolean2: boolean): void;
						public putLong(string0: string, long1: number): void;
						public putDouble(string0: string, double1: number): void;
						public getInt(string0: string): number;
						public getDouble(string0: string): number;
						public putLong(string0: string, long1: number, boolean2: boolean): void;
						public getBoolean(string0: string): boolean;
						public get(string0: string): any;
						public getFloat(string0: string, float1: number): number;
						public getString(string0: string): string;
						public getFloat(string0: string): number;
						public putBoolean(string0: string, boolean1: boolean): void;
						public putString(string0: string, string1: string): void;
						public putObject(string0: string, object1: any, boolean2: boolean): void;
						public getLong(string0: string): number;
						public putInt(string0: string, int1: number): void;
						public getDouble(string0: string, double1: number): number;
						public putFloat(string0: string, float1: number): void;
						public putFloat(string0: string, float1: number, boolean2: boolean): void;
						public putObject(string0: string, object1: any): void;
						public putBoolean(string0: string, boolean1: boolean, boolean2: boolean): void;
						public getBoolean(string0: string, boolean1: boolean): boolean;
						public putString(string0: string, string1: string, boolean2: boolean): void;
						public putDouble(string0: string, double1: number, boolean2: boolean): void;
						public getLong(string0: string, long1: number): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module record {
					export class DefaultRecordKeyProvider extends java.lang.Object implements com.kk.taurus.playerbase.record.RecordKeyProvider {
						public static class: java.lang.Class<com.kk.taurus.playerbase.record.DefaultRecordKeyProvider>;
						public constructor();
						public generatorKey(dataSource: com.kk.taurus.playerbase.entity.DataSource): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module record {
					export class OnRecordCallBack extends java.lang.Object {
						public static class: java.lang.Class<com.kk.taurus.playerbase.record.OnRecordCallBack>;
						/**
						 * Constructs a new instance of the com.kk.taurus.playerbase.record.OnRecordCallBack interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onSaveRecord(dataSource0: com.kk.taurus.playerbase.entity.DataSource, int1: number): number;
							onGetRecord(dataSource0: com.kk.taurus.playerbase.entity.DataSource): number;
							onResetRecord(dataSource0: com.kk.taurus.playerbase.entity.DataSource): number;
							onRemoveRecord(dataSource0: com.kk.taurus.playerbase.entity.DataSource): number;
							onClearRecord(): void;
						});
						public constructor();
						public onRemoveRecord(dataSource0: com.kk.taurus.playerbase.entity.DataSource): number;
						public onResetRecord(dataSource0: com.kk.taurus.playerbase.entity.DataSource): number;
						public onSaveRecord(dataSource0: com.kk.taurus.playerbase.entity.DataSource, int1: number): number;
						public onClearRecord(): void;
						public onGetRecord(dataSource0: com.kk.taurus.playerbase.entity.DataSource): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module record {
					export class PlayRecord extends java.lang.Object {
						public static class: java.lang.Class<com.kk.taurus.playerbase.record.PlayRecord>;
						public reset(data: com.kk.taurus.playerbase.entity.DataSource): number;
						public removeRecord(data: com.kk.taurus.playerbase.entity.DataSource): number;
						public record(data: com.kk.taurus.playerbase.entity.DataSource, record: number): number;
						public clearRecord(): void;
						public destroy(): void;
						public getRecord(data: com.kk.taurus.playerbase.entity.DataSource): number;
						public static get(): com.kk.taurus.playerbase.record.PlayRecord;
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module record {
					export class PlayRecordManager extends java.lang.Object {
						public static class: java.lang.Class<com.kk.taurus.playerbase.record.PlayRecordManager>;
						public static getKey(dataSource: com.kk.taurus.playerbase.entity.DataSource): string;
						public constructor();
						public static removeRecord(dataSource: com.kk.taurus.playerbase.entity.DataSource): number;
						public static setRecordConfig(recordConfig: com.kk.taurus.playerbase.record.PlayRecordManager.RecordConfig): void;
						public static clearRecord(): void;
						public static destroyCache(): void;
					}
					export module PlayRecordManager {
						export class RecordConfig extends java.lang.Object {
							public static class: java.lang.Class<com.kk.taurus.playerbase.record.PlayRecordManager.RecordConfig>;
							public getMaxRecordCount(): number;
							public getOnRecordCallBack(): com.kk.taurus.playerbase.record.OnRecordCallBack;
							public getRecordKeyProvider(): com.kk.taurus.playerbase.record.RecordKeyProvider;
						}
						export module RecordConfig {
							export class Builder extends java.lang.Object {
								public static class: java.lang.Class<com.kk.taurus.playerbase.record.PlayRecordManager.RecordConfig.Builder>;
								public getRecordKeyProvider(): com.kk.taurus.playerbase.record.RecordKeyProvider;
								public build(): com.kk.taurus.playerbase.record.PlayRecordManager.RecordConfig;
								public getMaxRecordCount(): number;
								public setRecordKeyProvider(recordKeyProvider: com.kk.taurus.playerbase.record.RecordKeyProvider): com.kk.taurus.playerbase.record.PlayRecordManager.RecordConfig.Builder;
								public getOnRecordCallBack(): com.kk.taurus.playerbase.record.OnRecordCallBack;
								public constructor();
								public setOnRecordCallBack(onRecordCallBack: com.kk.taurus.playerbase.record.OnRecordCallBack): com.kk.taurus.playerbase.record.PlayRecordManager.RecordConfig.Builder;
								public setMaxRecordCount(maxRecordCount: number): com.kk.taurus.playerbase.record.PlayRecordManager.RecordConfig.Builder;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module record {
					export class PlayValueGetter extends java.lang.Object {
						public static class: java.lang.Class<com.kk.taurus.playerbase.record.PlayValueGetter>;
						/**
						 * Constructs a new instance of the com.kk.taurus.playerbase.record.PlayValueGetter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getCurrentPosition(): number;
							getBufferPercentage(): number;
							getDuration(): number;
							getState(): number;
						});
						public constructor();
						public getBufferPercentage(): number;
						public getDuration(): number;
						public getState(): number;
						public getCurrentPosition(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module record {
					export class RecordCache extends java.lang.Object {
						public static class: java.lang.Class<com.kk.taurus.playerbase.record.RecordCache>;
						public removeRecord(key: string): number;
						public clearRecord(): void;
						public putRecord(key: string, record: number): number;
						public constructor(maxCacheCount: number);
						public getRecord(key: string): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module record {
					export class RecordInvoker extends java.lang.Object {
						public static class: java.lang.Class<com.kk.taurus.playerbase.record.RecordInvoker>;
						public getRecord(dataSource: com.kk.taurus.playerbase.entity.DataSource): number;
						public removeRecord(dataSource: com.kk.taurus.playerbase.entity.DataSource): number;
						public clearRecord(): void;
						public constructor(config: com.kk.taurus.playerbase.record.PlayRecordManager.RecordConfig);
						public saveRecord(dataSource: com.kk.taurus.playerbase.entity.DataSource, record: number): number;
						public resetRecord(dataSource: com.kk.taurus.playerbase.entity.DataSource): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module record {
					export class RecordKeyProvider extends java.lang.Object {
						public static class: java.lang.Class<com.kk.taurus.playerbase.record.RecordKeyProvider>;
						/**
						 * Constructs a new instance of the com.kk.taurus.playerbase.record.RecordKeyProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							generatorKey(dataSource0: com.kk.taurus.playerbase.entity.DataSource): string;
						});
						public constructor();
						public generatorKey(dataSource0: com.kk.taurus.playerbase.entity.DataSource): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module record {
					export class RecordProxyPlayer extends java.lang.Object implements com.kk.taurus.playerbase.player.IPlayerProxy {
						public static class: java.lang.Class<com.kk.taurus.playerbase.record.RecordProxyPlayer>;
						public onIntentStop(): void;
						public constructor(valueGetter: com.kk.taurus.playerbase.record.PlayValueGetter);
						public getRecord(dataSource: com.kk.taurus.playerbase.entity.DataSource): number;
						public onPlayerEvent(eventCode: number, bundle: globalAndroid.os.Bundle): void;
						public onIntentReset(): void;
						public onIntentDestroy(): void;
						public onDataSourceReady(dataSource: com.kk.taurus.playerbase.entity.DataSource): void;
						public onErrorEvent(eventCode: number, bundle: globalAndroid.os.Bundle): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module render {
					export class AspectRatio extends java.io.Serializable {
						public static class: java.lang.Class<com.kk.taurus.playerbase.render.AspectRatio>;
						public static AspectRatio_16_9: com.kk.taurus.playerbase.render.AspectRatio;
						public static AspectRatio_4_3: com.kk.taurus.playerbase.render.AspectRatio;
						public static AspectRatio_MATCH_PARENT: com.kk.taurus.playerbase.render.AspectRatio;
						public static AspectRatio_FILL_PARENT: com.kk.taurus.playerbase.render.AspectRatio;
						public static AspectRatio_FIT_PARENT: com.kk.taurus.playerbase.render.AspectRatio;
						public static AspectRatio_ORIGIN: com.kk.taurus.playerbase.render.AspectRatio;
						public static AspectRatio_FILL_WIDTH: com.kk.taurus.playerbase.render.AspectRatio;
						public static AspectRatio_FILL_HEIGHT: com.kk.taurus.playerbase.render.AspectRatio;
						public static valueOf(name: string): com.kk.taurus.playerbase.render.AspectRatio;
						public static values(): native.Array<com.kk.taurus.playerbase.render.AspectRatio>;
						public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module render {
					export class IRender extends java.lang.Object {
						public static class: java.lang.Class<com.kk.taurus.playerbase.render.IRender>;
						/**
						 * Constructs a new instance of the com.kk.taurus.playerbase.render.IRender interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							setRenderCallback(iRenderCallback0: com.kk.taurus.playerbase.render.IRender.IRenderCallback): void;
							setVideoRotation(int0: number): void;
							setVideoSampleAspectRatio(int0: number, int1: number): void;
							updateAspectRatio(aspectRatio0: com.kk.taurus.playerbase.render.AspectRatio): void;
							updateVideoSize(int0: number, int1: number): void;
							getRenderView(): globalAndroid.view.View;
							release(): void;
							isReleased(): boolean;
						});
						public constructor();
						public static RENDER_TYPE_TEXTURE_VIEW: number;
						public static RENDER_TYPE_SURFACE_VIEW: number;
						public updateVideoSize(int0: number, int1: number): void;
						public setVideoRotation(int0: number): void;
						public setVideoSampleAspectRatio(int0: number, int1: number): void;
						public setRenderCallback(iRenderCallback0: com.kk.taurus.playerbase.render.IRender.IRenderCallback): void;
						public getRenderView(): globalAndroid.view.View;
						public isReleased(): boolean;
						public release(): void;
						public updateAspectRatio(aspectRatio0: com.kk.taurus.playerbase.render.AspectRatio): void;
					}
					export module IRender {
						export class IRenderCallback extends java.lang.Object {
							public static class: java.lang.Class<com.kk.taurus.playerbase.render.IRender.IRenderCallback>;
							/**
							 * Constructs a new instance of the com.kk.taurus.playerbase.render.IRender$IRenderCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onSurfaceCreated(iRenderHolder0: com.kk.taurus.playerbase.render.IRender.IRenderHolder, int1: number, int2: number): void;
								onSurfaceChanged(iRenderHolder0: com.kk.taurus.playerbase.render.IRender.IRenderHolder, int1: number, int2: number, int3: number): void;
								onSurfaceDestroy(iRenderHolder0: com.kk.taurus.playerbase.render.IRender.IRenderHolder): void;
							});
							public constructor();
							public onSurfaceDestroy(iRenderHolder0: com.kk.taurus.playerbase.render.IRender.IRenderHolder): void;
							public onSurfaceChanged(iRenderHolder0: com.kk.taurus.playerbase.render.IRender.IRenderHolder, int1: number, int2: number, int3: number): void;
							public onSurfaceCreated(iRenderHolder0: com.kk.taurus.playerbase.render.IRender.IRenderHolder, int1: number, int2: number): void;
						}
						export class IRenderHolder extends java.lang.Object {
							public static class: java.lang.Class<com.kk.taurus.playerbase.render.IRender.IRenderHolder>;
							/**
							 * Constructs a new instance of the com.kk.taurus.playerbase.render.IRender$IRenderHolder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								bindPlayer(iPlayer0: com.kk.taurus.playerbase.player.IPlayer): void;
							});
							public constructor();
							public bindPlayer(iPlayer0: com.kk.taurus.playerbase.player.IPlayer): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module render {
					export class RenderMeasure extends java.lang.Object {
						public static class: java.lang.Class<com.kk.taurus.playerbase.render.RenderMeasure>;
						public setVideoSize(videoWidth: number, videoHeight: number): void;
						public constructor();
						public getMeasureWidth(): number;
						public setAspectRatio(aspectRatio: com.kk.taurus.playerbase.render.AspectRatio): void;
						public doMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
						public getMeasureHeight(): number;
						public setVideoRotation(videoRotationDegree: number): void;
						public setVideoSampleAspectRatio(videoSarNum: number, videoSarDen: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module render {
					export class RenderSurfaceView extends globalAndroid.view.SurfaceView implements com.kk.taurus.playerbase.render.IRender {
						public static class: java.lang.Class<com.kk.taurus.playerbase.render.RenderSurfaceView>;
						public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
						public onAttachedToWindow(): void;
						public setRenderCallback(renderCallback: com.kk.taurus.playerbase.render.IRender.IRenderCallback): void;
						public getRenderView(): globalAndroid.view.View;
						public isReleased(): boolean;
						public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
						public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
						public updateAspectRatio(aspectRatio: com.kk.taurus.playerbase.render.AspectRatio): void;
						public updateVideoSize(videoWidth: number, videoHeight: number): void;
						public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
						public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
						public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
						public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
						public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
						public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
						public setVideoSampleAspectRatio(videoSarNum: number, videoSarDen: number): void;
						public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
						public onDetachedFromWindow(): void;
						public release(): void;
						public sendAccessibilityEvent(eventType: number): void;
						public setVideoRotation(degree: number): void;
						public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
						public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
						public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
						public constructor(context: globalAndroid.content.Context);
					}
					export module RenderSurfaceView {
						export class InternalRenderHolder extends java.lang.Object implements com.kk.taurus.playerbase.render.IRender.IRenderHolder {
							public static class: java.lang.Class<com.kk.taurus.playerbase.render.RenderSurfaceView.InternalRenderHolder>;
							public constructor(surfaceHolder: globalAndroid.view.SurfaceHolder);
							public bindPlayer(player: com.kk.taurus.playerbase.player.IPlayer): void;
						}
						export class InternalSurfaceHolderCallback extends java.lang.Object implements globalAndroid.view.SurfaceHolder.Callback {
							public static class: java.lang.Class<com.kk.taurus.playerbase.render.RenderSurfaceView.InternalSurfaceHolderCallback>;
							public surfaceDestroyed(holder: globalAndroid.view.SurfaceHolder): void;
							public surfaceCreated(holder: globalAndroid.view.SurfaceHolder): void;
							public surfaceChanged(holder: globalAndroid.view.SurfaceHolder, format: number, width: number, height: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module render {
					export class RenderTextureView extends globalAndroid.view.TextureView implements com.kk.taurus.playerbase.render.IRender {
						public static class: java.lang.Class<com.kk.taurus.playerbase.render.RenderTextureView>;
						public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
						public onAttachedToWindow(): void;
						public setRenderCallback(renderCallback: com.kk.taurus.playerbase.render.IRender.IRenderCallback): void;
						public getRenderView(): globalAndroid.view.View;
						public isReleased(): boolean;
						public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
						public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
						public updateAspectRatio(aspectRatio: com.kk.taurus.playerbase.render.AspectRatio): void;
						public updateVideoSize(videoWidth: number, videoHeight: number): void;
						public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
						public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
						public setTakeOverSurfaceTexture(takeOverSurfaceTexture: boolean): void;
						public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
						public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
						public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
						public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
						public setVideoSampleAspectRatio(videoSarNum: number, videoSarDen: number): void;
						public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
						public onDetachedFromWindow(): void;
						public release(): void;
						public sendAccessibilityEvent(eventType: number): void;
						public isTakeOverSurfaceTexture(): boolean;
						public setVideoRotation(degree: number): void;
						public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
						public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
						public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
						public constructor(context: globalAndroid.content.Context);
					}
					export module RenderTextureView {
						export class InternalRenderHolder extends java.lang.Object implements com.kk.taurus.playerbase.render.IRender.IRenderHolder {
							public static class: java.lang.Class<com.kk.taurus.playerbase.render.RenderTextureView.InternalRenderHolder>;
							public constructor(textureView: com.kk.taurus.playerbase.render.RenderTextureView, surfaceTexture: globalAndroid.graphics.SurfaceTexture);
							public bindPlayer(player: com.kk.taurus.playerbase.player.IPlayer): void;
						}
						export class InternalSurfaceTextureListener extends java.lang.Object implements globalAndroid.view.TextureView.SurfaceTextureListener {
							public static class: java.lang.Class<com.kk.taurus.playerbase.render.RenderTextureView.InternalSurfaceTextureListener>;
							public onSurfaceTextureUpdated(surface: globalAndroid.graphics.SurfaceTexture): void;
							public onSurfaceTextureSizeChanged(surface: globalAndroid.graphics.SurfaceTexture, width: number, height: number): void;
							public onSurfaceTextureAvailable(surface: globalAndroid.graphics.SurfaceTexture, width: number, height: number): void;
							public onSurfaceTextureDestroyed(surface: globalAndroid.graphics.SurfaceTexture): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module style {
					export class IStyleSetter extends java.lang.Object {
						public static class: java.lang.Class<com.kk.taurus.playerbase.style.IStyleSetter>;
						/**
						 * Constructs a new instance of the com.kk.taurus.playerbase.style.IStyleSetter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							setRoundRectShape(float0: number): void;
							setRoundRectShape(rect0: globalAndroid.graphics.Rect, float1: number): void;
							setOvalRectShape(): void;
							setOvalRectShape(rect0: globalAndroid.graphics.Rect): void;
							clearShapeStyle(): void;
							setElevationShadow(float0: number): void;
							setElevationShadow(int0: number, float1: number): void;
						});
						public constructor();
						public setOvalRectShape(): void;
						public setElevationShadow(float0: number): void;
						public setRoundRectShape(rect0: globalAndroid.graphics.Rect, float1: number): void;
						public clearShapeStyle(): void;
						public setElevationShadow(int0: number, float1: number): void;
						public setRoundRectShape(float0: number): void;
						public setOvalRectShape(rect0: globalAndroid.graphics.Rect): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module style {
					export class StyleSetter extends java.lang.Object implements com.kk.taurus.playerbase.style.IStyleSetter {
						public static class: java.lang.Class<com.kk.taurus.playerbase.style.StyleSetter>;
						public setOvalRectShape(): void;
						public setRoundRectShape(rect: globalAndroid.graphics.Rect, radius: number): void;
						public constructor(view: globalAndroid.view.View);
						public setElevationShadow(elevation: number): void;
						public clearShapeStyle(): void;
						public setRoundRectShape(radius: number): void;
						public setOvalRectShape(rect: globalAndroid.graphics.Rect): void;
						public setElevationShadow(backgroundColor: number, elevation: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module style {
					export class ViewOvalRectOutlineProvider extends globalAndroid.view.ViewOutlineProvider {
						public static class: java.lang.Class<com.kk.taurus.playerbase.style.ViewOvalRectOutlineProvider>;
						public constructor();
						public constructor(rect: globalAndroid.graphics.Rect);
						public getOutline(view0: globalAndroid.view.View, outline1: any): void;
						public getOutline(view: globalAndroid.view.View, outline: any): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module style {
					export class ViewRoundRectOutlineProvider extends globalAndroid.view.ViewOutlineProvider {
						public static class: java.lang.Class<com.kk.taurus.playerbase.style.ViewRoundRectOutlineProvider>;
						public constructor();
						public getOutline(view0: globalAndroid.view.View, outline1: any): void;
						public constructor(radius: number, rect: globalAndroid.graphics.Rect);
						public constructor(radius: number);
						public getOutline(view: globalAndroid.view.View, outline: any): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module touch {
					export class BaseGestureCallbackHandler extends globalAndroid.view.GestureDetector.SimpleOnGestureListener {
						public static class: java.lang.Class<com.kk.taurus.playerbase.touch.BaseGestureCallbackHandler>;
						public mOnTouchGestureListener: com.kk.taurus.playerbase.touch.OnTouchGestureListener;
						public constructor();
						public onFling(e1: globalAndroid.view.MotionEvent, e2: globalAndroid.view.MotionEvent, velocityX: number, velocityY: number): boolean;
						public onDoubleTapEvent(e: globalAndroid.view.MotionEvent): boolean;
						public onSingleTapUp(e: globalAndroid.view.MotionEvent): boolean;
						public constructor(onTouchGestureListener: com.kk.taurus.playerbase.touch.OnTouchGestureListener);
						public setGestureScrollEnable(gestureScrollEnable: boolean): void;
						public onSingleTapConfirmed(e: globalAndroid.view.MotionEvent): boolean;
						public setGestureEnable(enable: boolean): void;
						public onLongPress(e: globalAndroid.view.MotionEvent): void;
						public onEndGesture(event: globalAndroid.view.MotionEvent): void;
						public onContextClick(e: globalAndroid.view.MotionEvent): boolean;
						public onDoubleTap(e: globalAndroid.view.MotionEvent): boolean;
						public onScroll(e1: globalAndroid.view.MotionEvent, e2: globalAndroid.view.MotionEvent, distanceX: number, distanceY: number): boolean;
						public onDown(e: globalAndroid.view.MotionEvent): boolean;
						public onShowPress(e: globalAndroid.view.MotionEvent): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module touch {
					export class ContainerTouchHelper extends java.lang.Object {
						public static class: java.lang.Class<com.kk.taurus.playerbase.touch.ContainerTouchHelper>;
						public setGestureEnable(enable: boolean): void;
						public onEndGesture(event: globalAndroid.view.MotionEvent): void;
						public onTouch(event: globalAndroid.view.MotionEvent): boolean;
						public setGestureScrollEnable(enable: boolean): void;
						public constructor(context: globalAndroid.content.Context, gestureCallback: com.kk.taurus.playerbase.touch.BaseGestureCallbackHandler);
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module touch {
					export class OnTouchGestureListener extends java.lang.Object {
						public static class: java.lang.Class<com.kk.taurus.playerbase.touch.OnTouchGestureListener>;
						/**
						 * Constructs a new instance of the com.kk.taurus.playerbase.touch.OnTouchGestureListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onSingleTapConfirmed(motionEvent0: globalAndroid.view.MotionEvent): void;
							onLongPress(motionEvent0: globalAndroid.view.MotionEvent): void;
							onDoubleTap(motionEvent0: globalAndroid.view.MotionEvent): void;
							onDown(motionEvent0: globalAndroid.view.MotionEvent): void;
							onScroll(motionEvent0: globalAndroid.view.MotionEvent, motionEvent1: globalAndroid.view.MotionEvent, float2: number, float3: number): void;
							onEndGesture(): void;
						});
						public constructor();
						public onSingleTapConfirmed(motionEvent0: globalAndroid.view.MotionEvent): void;
						public onScroll(motionEvent0: globalAndroid.view.MotionEvent, motionEvent1: globalAndroid.view.MotionEvent, float2: number, float3: number): void;
						public onEndGesture(): void;
						public onLongPress(motionEvent0: globalAndroid.view.MotionEvent): void;
						public onDown(motionEvent0: globalAndroid.view.MotionEvent): void;
						public onDoubleTap(motionEvent0: globalAndroid.view.MotionEvent): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module touch {
					export class TouchEventIndicator extends java.lang.Object {
						public static class: java.lang.Class<com.kk.taurus.playerbase.touch.TouchEventIndicator>;
						/**
						 * Constructs a new instance of the com.kk.taurus.playerbase.touch.TouchEventIndicator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							disallowReceiveTouchEvent(): boolean;
						});
						public constructor();
						public disallowReceiveTouchEvent(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module utils {
					export class NetworkUtils extends java.lang.Object {
						public static class: java.lang.Class<com.kk.taurus.playerbase.utils.NetworkUtils>;
						public static isNetConnected(context: globalAndroid.content.Context): boolean;
						public constructor();
						public static isWifiConnected(context: globalAndroid.content.Context): boolean;
						public static isMobile(networkState: number): boolean;
						public static getNetworkState(context: globalAndroid.content.Context): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module utils {
					export class PUtils extends java.lang.Object {
						public static class: java.lang.Class<com.kk.taurus.playerbase.utils.PUtils>;
						public constructor();
						public static getStatusBarHeight(context: globalAndroid.content.Context): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module utils {
					export class RectUtils extends java.lang.Object {
						public static class: java.lang.Class<com.kk.taurus.playerbase.utils.RectUtils>;
						public constructor();
						public static getOvalRect(rect: globalAndroid.graphics.Rect): globalAndroid.graphics.Rect;
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module utils {
					export class TimeUtil extends java.lang.Object {
						public static class: java.lang.Class<com.kk.taurus.playerbase.utils.TimeUtil>;
						public static TIME_FORMAT_01: string;
						public static TIME_FORMAT_02: string;
						public constructor();
						public static getTimeFormat2(timeMs: number): string;
						public static getTimeSmartFormat(timeMs: number): string;
						public static getTime(format: string, time: number): string;
						public static getFormat(maxTimeMs: number): string;
						public static getTimeFormat1(timeMs: number): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module widget {
					export class BaseVideoView extends globalAndroid.widget.FrameLayout implements com.kk.taurus.playerbase.widget.IVideoView, com.kk.taurus.playerbase.style.IStyleSetter {
						public static class: java.lang.Class<com.kk.taurus.playerbase.widget.BaseVideoView>;
						public isLayoutRequested(): boolean;
						public bringChildToFront(child: globalAndroid.view.View): void;
						public pause(): void;
						public requestTransparentRegion(child: globalAndroid.view.View): void;
						public setOnProviderListener(onProviderListener: com.kk.taurus.playerbase.provider.IDataProvider.OnProviderListener): void;
						public seekTo(msc: number): void;
						public setRoundRectShape(rect: globalAndroid.graphics.Rect, radius: number): void;
						public getRender(): com.kk.taurus.playerbase.render.IRender;
						public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
						public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
						public getTextDirection(): number;
						public getChildVisibleRect(child: globalAndroid.view.View, r: globalAndroid.graphics.Rect, offset: globalAndroid.graphics.Point): boolean;
						public addView(child: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
						public setOnPlayerEventListener(onPlayerEventListener: com.kk.taurus.playerbase.event.OnPlayerEventListener): void;
						public switchDecoder(decoderPlanId: number): boolean;
						public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
						public sendAccessibilityEvent(eventType: number): void;
						public setElevationShadow(backgroundColor: number, elevation: number): void;
						public canResolveTextDirection(): boolean;
						public getBufferPercentage(): number;
						public start(): void;
						public recomputeViewAttributes(child: globalAndroid.view.View): void;
						public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
						public setRoundRectShape(radius: number): void;
						public requestLayout(): void;
						public keyboardNavigationClusterSearch(currentCluster: globalAndroid.view.View, direction: number): globalAndroid.view.View;
						public isTextDirectionResolved(): boolean;
						public isPlaying(): boolean;
						/** @deprecated */
						public requestFitSystemWindows(): void;
						public isInPlaybackState(): boolean;
						public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
						/** @deprecated */
						public invalidateChild(child: globalAndroid.view.View, dirty: globalAndroid.graphics.Rect): void;
						public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
						public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
						public requestSendAccessibilityEvent(child: globalAndroid.view.View, event: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
						public start(msc: number): void;
						public option(code: number, bundle: globalAndroid.os.Bundle): void;
						public setElevationShadow(elevation: number): void;
						public addView(child: globalAndroid.view.View, index: number): void;
						public focusSearch(focused: globalAndroid.view.View, direction: number): globalAndroid.view.View;
						public requestChildRectangleOnScreen(child: globalAndroid.view.View, rectangle: globalAndroid.graphics.Rect, immediate: boolean): boolean;
						public getAudioSessionId(): number;
						public requestFitSystemWindows(): void;
						public getParentForAccessibility(): globalAndroid.view.ViewParent;
						public focusSearch(direction: number): globalAndroid.view.View;
						public onStopNestedScroll(child: globalAndroid.view.View): void;
						public updateRender(): void;
						public setOnErrorEventListener(onErrorEventListener: com.kk.taurus.playerbase.event.OnErrorEventListener): void;
						public stop(): void;
						public setOnReceiverEventListener(onReceiverEventListener: com.kk.taurus.playerbase.receiver.OnReceiverEventListener): void;
						public setOvalRectShape(): void;
						public getTextAlignment(): number;
						public onNestedPreScroll(target: globalAndroid.view.View, dx: number, dy: number, consumed: native.Array<number>): void;
						public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
						public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
						public setReceiverGroup(receiverGroup: com.kk.taurus.playerbase.receiver.IReceiverGroup): void;
						public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback, type: number): globalAndroid.view.ActionMode;
						public notifySubtreeAccessibilityStateChanged(child: globalAndroid.view.View, source: globalAndroid.view.View, changeType: number): void;
						public setOvalRectShape(rect: globalAndroid.graphics.Rect): void;
						public getParent(): globalAndroid.view.ViewParent;
						public getLayoutDirection(): number;
						public canResolveTextAlignment(): boolean;
						public constructor(context: globalAndroid.content.Context);
						public getSuperContainer(): com.kk.taurus.playerbase.widget.SuperContainer;
						public setVolume(left: number, right: number): void;
						public onDescendantInvalidated(child: globalAndroid.view.View, target: globalAndroid.view.View): void;
						public getCurrentPosition(): number;
						public setEventHandler(eventHandler: com.kk.taurus.playerbase.assist.OnVideoViewEventHandler): void;
						public childHasTransientStateChanged(child: globalAndroid.view.View, childHasTransientState: boolean): void;
						public canResolveLayoutDirection(): boolean;
						public onNestedPrePerformAccessibilityAction(target: globalAndroid.view.View, action: number, bundle2: globalAndroid.os.Bundle): boolean;
						public clearShapeStyle(): void;
						public updateViewLayout(view: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
						public resume(): void;
						public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
						public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
						public isTextAlignmentResolved(): boolean;
						public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
						public onNestedScrollAccepted(child: globalAndroid.view.View, target: globalAndroid.view.View, axes: number): void;
						public addView(child: globalAndroid.view.View): void;
						public setAspectRatio(aspectRatio: com.kk.taurus.playerbase.render.AspectRatio): void;
						public focusableViewAvailable(v: globalAndroid.view.View): void;
						public requestChildFocus(child: globalAndroid.view.View, focused: globalAndroid.view.View): void;
						public setDataSource(dataSource: com.kk.taurus.playerbase.entity.DataSource): void;
						public isLayoutDirectionResolved(): boolean;
						public onStartNestedScroll(child: globalAndroid.view.View, target: globalAndroid.view.View, nestedScrollAxes: number): boolean;
						public getState(): number;
						public clearChildFocus(child: globalAndroid.view.View): void;
						public setLooping(looping: boolean): void;
						/** @deprecated */
						public invalidateChildInParent(location: native.Array<number>, dirty: globalAndroid.graphics.Rect): globalAndroid.view.ViewParent;
						public childDrawableStateChanged(child: globalAndroid.view.View): void;
						public removeView(view: globalAndroid.view.View): void;
						public showContextMenuForChild(originalView: globalAndroid.view.View, x: number, y: number): boolean;
						public onNestedScroll(target: globalAndroid.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
						public addView(child: globalAndroid.view.View, width: number, height: number): void;
						public addView(child: globalAndroid.view.View, index: number, params: globalAndroid.view.ViewGroup.LayoutParams): void;
						public setRenderType(renderType: number): void;
						public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
						public onNestedFling(target: globalAndroid.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
						public stopPlayback(): void;
						public onNestedPreFling(target: globalAndroid.view.View, velocityX: number, velocityY: number): boolean;
						public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
						public setDataProvider(dataProvider: com.kk.taurus.playerbase.provider.IDataProvider): void;
						public getDuration(): number;
						public createContextMenu(menu: globalAndroid.view.ContextMenu): void;
						public showContextMenuForChild(originalView: globalAndroid.view.View): boolean;
						public onCreateSuperContainer(context: globalAndroid.content.Context): com.kk.taurus.playerbase.widget.SuperContainer;
						public rePlay(msc: number): void;
						public setSpeed(speed: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module widget {
					export class IVideoView extends java.lang.Object {
						public static class: java.lang.Class<com.kk.taurus.playerbase.widget.IVideoView>;
						/**
						 * Constructs a new instance of the com.kk.taurus.playerbase.widget.IVideoView interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							setDataSource(dataSource0: com.kk.taurus.playerbase.entity.DataSource): void;
							setRenderType(int0: number): void;
							setAspectRatio(aspectRatio0: com.kk.taurus.playerbase.render.AspectRatio): void;
							switchDecoder(int0: number): boolean;
							setVolume(float0: number, float1: number): void;
							setSpeed(float0: number): void;
							setLooping(boolean0: boolean): void;
							getRender(): com.kk.taurus.playerbase.render.IRender;
							isInPlaybackState(): boolean;
							isPlaying(): boolean;
							getCurrentPosition(): number;
							getDuration(): number;
							getAudioSessionId(): number;
							getBufferPercentage(): number;
							getState(): number;
							start(): void;
							start(int0: number): void;
							pause(): void;
							resume(): void;
							seekTo(int0: number): void;
							stop(): void;
							stopPlayback(): void;
						});
						public constructor();
						public getDuration(): number;
						public isPlaying(): boolean;
						public seekTo(int0: number): void;
						public isInPlaybackState(): boolean;
						public pause(): void;
						public stop(): void;
						public switchDecoder(int0: number): boolean;
						public setLooping(boolean0: boolean): void;
						public resume(): void;
						public setVolume(float0: number, float1: number): void;
						public getBufferPercentage(): number;
						public getRender(): com.kk.taurus.playerbase.render.IRender;
						public setDataSource(dataSource0: com.kk.taurus.playerbase.entity.DataSource): void;
						public start(): void;
						public getState(): number;
						public stopPlayback(): void;
						public setRenderType(int0: number): void;
						public getAudioSessionId(): number;
						public setAspectRatio(aspectRatio0: com.kk.taurus.playerbase.render.AspectRatio): void;
						public setSpeed(float0: number): void;
						public getCurrentPosition(): number;
						public start(int0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module widget {
					export class SuperContainer extends globalAndroid.widget.FrameLayout implements com.kk.taurus.playerbase.touch.OnTouchGestureListener {
						public static class: java.lang.Class<com.kk.taurus.playerbase.widget.SuperContainer>;
						public isLayoutRequested(): boolean;
						public bringChildToFront(child: globalAndroid.view.View): void;
						public childHasTransientStateChanged(child: globalAndroid.view.View, childHasTransientState: boolean): void;
						public canResolveLayoutDirection(): boolean;
						public onNestedPrePerformAccessibilityAction(target: globalAndroid.view.View, action: number, bundle2: globalAndroid.os.Bundle): boolean;
						public destroy(): void;
						public requestTransparentRegion(child: globalAndroid.view.View): void;
						public removeAllCovers(): void;
						public updateViewLayout(view: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
						public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
						public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
						public isTextAlignmentResolved(): boolean;
						public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
						public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
						public setRenderView(view: globalAndroid.view.View): void;
						public addEventProducer(eventProducer: com.kk.taurus.playerbase.extension.BaseEventProducer): void;
						public onNestedScrollAccepted(child: globalAndroid.view.View, target: globalAndroid.view.View, axes: number): void;
						public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
						public getTextDirection(): number;
						public getGestureCallBackHandler(): com.kk.taurus.playerbase.touch.BaseGestureCallbackHandler;
						public getChildVisibleRect(child: globalAndroid.view.View, r: globalAndroid.graphics.Rect, offset: globalAndroid.graphics.Point): boolean;
						public addView(child: globalAndroid.view.View): void;
						public addView(child: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
						public setStateGetter(stateGetter: com.kk.taurus.playerbase.receiver.StateGetter): void;
						public focusableViewAvailable(v: globalAndroid.view.View): void;
						public requestChildFocus(child: globalAndroid.view.View, focused: globalAndroid.view.View): void;
						public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
						public sendAccessibilityEvent(eventType: number): void;
						public setGestureEnable(enable: boolean): void;
						public canResolveTextDirection(): boolean;
						public isLayoutDirectionResolved(): boolean;
						public onLongPress(event: globalAndroid.view.MotionEvent): void;
						public onStartNestedScroll(child: globalAndroid.view.View, target: globalAndroid.view.View, nestedScrollAxes: number): boolean;
						public setGestureScrollEnable(enable: boolean): void;
						public recomputeViewAttributes(child: globalAndroid.view.View): void;
						public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
						public onSingleTapConfirmed(event: globalAndroid.view.MotionEvent): void;
						public requestLayout(): void;
						public clearChildFocus(child: globalAndroid.view.View): void;
						public keyboardNavigationClusterSearch(currentCluster: globalAndroid.view.View, direction: number): globalAndroid.view.View;
						public onDown(event: globalAndroid.view.MotionEvent): void;
						public onScroll(e1: globalAndroid.view.MotionEvent, e2: globalAndroid.view.MotionEvent, distanceX: number, distanceY: number): void;
						public isTextDirectionResolved(): boolean;
						public getCoverStrategy(context: globalAndroid.content.Context): com.kk.taurus.playerbase.receiver.ICoverStrategy;
						/** @deprecated */
						public invalidateChildInParent(location: native.Array<number>, dirty: globalAndroid.graphics.Rect): globalAndroid.view.ViewParent;
						public childDrawableStateChanged(child: globalAndroid.view.View): void;
						/** @deprecated */
						public requestFitSystemWindows(): void;
						public initGesture(context: globalAndroid.content.Context): void;
						public removeView(view: globalAndroid.view.View): void;
						public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
						/** @deprecated */
						public invalidateChild(child: globalAndroid.view.View, dirty: globalAndroid.graphics.Rect): void;
						public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
						public showContextMenuForChild(originalView: globalAndroid.view.View, x: number, y: number): boolean;
						public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
						public requestSendAccessibilityEvent(child: globalAndroid.view.View, event: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
						public onNestedScroll(target: globalAndroid.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
						public addView(child: globalAndroid.view.View, width: number, height: number): void;
						public addView(child: globalAndroid.view.View, index: number, params: globalAndroid.view.ViewGroup.LayoutParams): void;
						public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
						public dispatchErrorEvent(eventCode: number, bundle: globalAndroid.os.Bundle): void;
						public onNestedFling(target: globalAndroid.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
						public addView(child: globalAndroid.view.View, index: number): void;
						public onEndGesture(): void;
						public onNestedPreFling(target: globalAndroid.view.View, velocityX: number, velocityY: number): boolean;
						public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
						public focusSearch(focused: globalAndroid.view.View, direction: number): globalAndroid.view.View;
						public requestChildRectangleOnScreen(child: globalAndroid.view.View, rectangle: globalAndroid.graphics.Rect, immediate: boolean): boolean;
						public requestFitSystemWindows(): void;
						public removeEventProducer(eventProducer: com.kk.taurus.playerbase.extension.BaseEventProducer): boolean;
						public getParentForAccessibility(): globalAndroid.view.ViewParent;
						public createContextMenu(menu: globalAndroid.view.ContextMenu): void;
						public focusSearch(direction: number): globalAndroid.view.View;
						public onStopNestedScroll(child: globalAndroid.view.View): void;
						public showContextMenuForChild(originalView: globalAndroid.view.View): boolean;
						public setOnReceiverEventListener(onReceiverEventListener: com.kk.taurus.playerbase.receiver.OnReceiverEventListener): void;
						public getTextAlignment(): number;
						public onNestedPreScroll(target: globalAndroid.view.View, dx: number, dy: number, consumed: native.Array<number>): void;
						public onTouchEvent(event: globalAndroid.view.MotionEvent): boolean;
						public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
						public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
						public setReceiverGroup(receiverGroup: com.kk.taurus.playerbase.receiver.IReceiverGroup): void;
						public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback, type: number): globalAndroid.view.ActionMode;
						public notifySubtreeAccessibilityStateChanged(child: globalAndroid.view.View, source: globalAndroid.view.View, changeType: number): void;
						public onDoubleTap(event: globalAndroid.view.MotionEvent): void;
						public getParent(): globalAndroid.view.ViewParent;
						public getLayoutDirection(): number;
						public canResolveTextAlignment(): boolean;
						public constructor(context: globalAndroid.content.Context);
						public dispatchPlayEvent(eventCode: number, bundle: globalAndroid.os.Bundle): void;
						public onDescendantInvalidated(child: globalAndroid.view.View, target: globalAndroid.view.View): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module window {
					export class FloatWindow extends globalAndroid.widget.FrameLayout implements com.kk.taurus.playerbase.window.IWindow, com.kk.taurus.playerbase.style.IStyleSetter {
						public static class: java.lang.Class<com.kk.taurus.playerbase.window.FloatWindow>;
						public isLayoutRequested(): boolean;
						public bringChildToFront(child: globalAndroid.view.View): void;
						public childHasTransientStateChanged(child: globalAndroid.view.View, childHasTransientState: boolean): void;
						public canResolveLayoutDirection(): boolean;
						public close(): void;
						public onNestedPrePerformAccessibilityAction(target: globalAndroid.view.View, action: number, bundle2: globalAndroid.os.Bundle): boolean;
						public clearShapeStyle(): void;
						public requestTransparentRegion(child: globalAndroid.view.View): void;
						public updateViewLayout(view: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
						public onInterceptTouchEvent(ev: globalAndroid.view.MotionEvent): boolean;
						public setRoundRectShape(rect: globalAndroid.graphics.Rect, radius: number): void;
						public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
						public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
						public isTextAlignmentResolved(): boolean;
						public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
						public setOnWindowListener(onWindowListener: com.kk.taurus.playerbase.window.IWindow.OnWindowListener): void;
						public show(): boolean;
						public resetStyle(): void;
						public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
						public onNestedScrollAccepted(child: globalAndroid.view.View, target: globalAndroid.view.View, axes: number): void;
						public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
						public getTextDirection(): number;
						public getChildVisibleRect(child: globalAndroid.view.View, r: globalAndroid.graphics.Rect, offset: globalAndroid.graphics.Point): boolean;
						public addView(child: globalAndroid.view.View): void;
						public addView(child: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
						public focusableViewAvailable(v: globalAndroid.view.View): void;
						public requestChildFocus(child: globalAndroid.view.View, focused: globalAndroid.view.View): void;
						public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
						public sendAccessibilityEvent(eventType: number): void;
						public setElevationShadow(backgroundColor: number, elevation: number): void;
						public canResolveTextDirection(): boolean;
						public isLayoutDirectionResolved(): boolean;
						public onStartNestedScroll(child: globalAndroid.view.View, target: globalAndroid.view.View, nestedScrollAxes: number): boolean;
						public recomputeViewAttributes(child: globalAndroid.view.View): void;
						public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
						public setRoundRectShape(radius: number): void;
						public requestLayout(): void;
						public clearChildFocus(child: globalAndroid.view.View): void;
						public keyboardNavigationClusterSearch(currentCluster: globalAndroid.view.View, direction: number): globalAndroid.view.View;
						public isTextDirectionResolved(): boolean;
						/** @deprecated */
						public invalidateChildInParent(location: native.Array<number>, dirty: globalAndroid.graphics.Rect): globalAndroid.view.ViewParent;
						public childDrawableStateChanged(child: globalAndroid.view.View): void;
						/** @deprecated */
						public requestFitSystemWindows(): void;
						public removeView(view: globalAndroid.view.View): void;
						public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
						public isWindowShow(): boolean;
						/** @deprecated */
						public invalidateChild(child: globalAndroid.view.View, dirty: globalAndroid.graphics.Rect): void;
						public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
						public showContextMenuForChild(originalView: globalAndroid.view.View, x: number, y: number): boolean;
						public close(items: native.Array<globalAndroid.animation.Animator>): void;
						public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
						public requestSendAccessibilityEvent(child: globalAndroid.view.View, event: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
						public onNestedScroll(target: globalAndroid.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
						public addView(child: globalAndroid.view.View, width: number, height: number): void;
						public addView(child: globalAndroid.view.View, index: number, params: globalAndroid.view.ViewGroup.LayoutParams): void;
						public setElevationShadow(elevation: number): void;
						public updateWindowViewLayout(x: number, y: number): void;
						public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
						public onNestedFling(target: globalAndroid.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
						public constructor(context: globalAndroid.content.Context, windowView: globalAndroid.view.View, params: com.kk.taurus.playerbase.window.FloatWindowParams);
						public addView(child: globalAndroid.view.View, index: number): void;
						public onNestedPreFling(target: globalAndroid.view.View, velocityX: number, velocityY: number): boolean;
						public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
						public show(items: native.Array<globalAndroid.animation.Animator>): boolean;
						public focusSearch(focused: globalAndroid.view.View, direction: number): globalAndroid.view.View;
						public requestChildRectangleOnScreen(child: globalAndroid.view.View, rectangle: globalAndroid.graphics.Rect, immediate: boolean): boolean;
						public requestFitSystemWindows(): void;
						public setDragEnable(dragEnable: boolean): void;
						public getParentForAccessibility(): globalAndroid.view.ViewParent;
						public createContextMenu(menu: globalAndroid.view.ContextMenu): void;
						public focusSearch(direction: number): globalAndroid.view.View;
						public onStopNestedScroll(child: globalAndroid.view.View): void;
						public showContextMenuForChild(originalView: globalAndroid.view.View): boolean;
						public setOvalRectShape(): void;
						public getTextAlignment(): number;
						public onNestedPreScroll(target: globalAndroid.view.View, dx: number, dy: number, consumed: native.Array<number>): void;
						public onTouchEvent(event: globalAndroid.view.MotionEvent): boolean;
						public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
						public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
						public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback, type: number): globalAndroid.view.ActionMode;
						public notifySubtreeAccessibilityStateChanged(child: globalAndroid.view.View, source: globalAndroid.view.View, changeType: number): void;
						public setOvalRectShape(rect: globalAndroid.graphics.Rect): void;
						public getParent(): globalAndroid.view.ViewParent;
						public getLayoutDirection(): number;
						public canResolveTextAlignment(): boolean;
						public constructor(context: globalAndroid.content.Context);
						public onDescendantInvalidated(child: globalAndroid.view.View, target: globalAndroid.view.View): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module window {
					export class FloatWindowParams extends java.lang.Object {
						public static class: java.lang.Class<com.kk.taurus.playerbase.window.FloatWindowParams>;
						public setGravity(gravity: number): com.kk.taurus.playerbase.window.FloatWindowParams;
						public setX(x: number): com.kk.taurus.playerbase.window.FloatWindowParams;
						public constructor();
						public setY(y: number): com.kk.taurus.playerbase.window.FloatWindowParams;
						public getX(): number;
						public getFlag(): number;
						public getHeight(): number;
						public isDefaultAnimation(): boolean;
						public getWindowType(): number;
						public setWidth(width: number): com.kk.taurus.playerbase.window.FloatWindowParams;
						public setHeight(height: number): com.kk.taurus.playerbase.window.FloatWindowParams;
						public getWidth(): number;
						public setDefaultAnimation(defaultAnimation: boolean): com.kk.taurus.playerbase.window.FloatWindowParams;
						public setWindowType(windowType: number): com.kk.taurus.playerbase.window.FloatWindowParams;
						public getFormat(): number;
						public getY(): number;
						public setFormat(format: number): com.kk.taurus.playerbase.window.FloatWindowParams;
						public setFlag(flag: number): com.kk.taurus.playerbase.window.FloatWindowParams;
						public getGravity(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module window {
					export class IWindow extends java.lang.Object {
						public static class: java.lang.Class<com.kk.taurus.playerbase.window.IWindow>;
						/**
						 * Constructs a new instance of the com.kk.taurus.playerbase.window.IWindow interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							setOnWindowListener(onWindowListener0: com.kk.taurus.playerbase.window.IWindow.OnWindowListener): void;
							updateWindowViewLayout(int0: number, int1: number): void;
							setDragEnable(boolean0: boolean): void;
							show(): boolean;
							show(animators0: native.Array<globalAndroid.animation.Animator>): boolean;
							close(): void;
							close(animators0: native.Array<globalAndroid.animation.Animator>): void;
							isWindowShow(): boolean;
						});
						public constructor();
						public static MIN_MOVE_DISTANCE: number;
						public static DURATION_ANIMATION: number;
						public close(): void;
						public setOnWindowListener(onWindowListener0: com.kk.taurus.playerbase.window.IWindow.OnWindowListener): void;
						public isWindowShow(): boolean;
						public show(): boolean;
						public show(animators0: native.Array<globalAndroid.animation.Animator>): boolean;
						public updateWindowViewLayout(int0: number, int1: number): void;
						public close(animators0: native.Array<globalAndroid.animation.Animator>): void;
						public setDragEnable(boolean0: boolean): void;
					}
					export module IWindow {
						export class OnWindowListener extends java.lang.Object {
							public static class: java.lang.Class<com.kk.taurus.playerbase.window.IWindow.OnWindowListener>;
							/**
							 * Constructs a new instance of the com.kk.taurus.playerbase.window.IWindow$OnWindowListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onShow(): void;
								onClose(): void;
							});
							public constructor();
							public onClose(): void;
							public onShow(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module window {
					export class WindowHelper extends java.lang.Object implements com.kk.taurus.playerbase.window.IWindow {
						public static class: java.lang.Class<com.kk.taurus.playerbase.window.WindowHelper>;
						public updateWindowViewLayout(x: number, y: number): void;
						public onTouchEvent(event: globalAndroid.view.MotionEvent): boolean;
						public setDragEnable(dragEnable: boolean): void;
						public close(): void;
						public constructor(context: globalAndroid.content.Context, windowView: globalAndroid.view.View, params: com.kk.taurus.playerbase.window.FloatWindowParams);
						public isWindowShow(): boolean;
						public setOnWindowListener(onWindowListener: com.kk.taurus.playerbase.window.IWindow.OnWindowListener): void;
						public show(): boolean;
						public close(items: native.Array<globalAndroid.animation.Animator>): void;
						public show(items: native.Array<globalAndroid.animation.Animator>): boolean;
						public onInterceptTouchEvent(ev: globalAndroid.view.MotionEvent): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module kk {
		export module taurus {
			export module playerbase {
				export module window {
					export class WindowVideoView extends com.kk.taurus.playerbase.widget.BaseVideoView implements com.kk.taurus.playerbase.window.IWindow {
						public static class: java.lang.Class<com.kk.taurus.playerbase.window.WindowVideoView>;
						public isLayoutRequested(): boolean;
						public bringChildToFront(child: globalAndroid.view.View): void;
						public close(): void;
						public pause(): void;
						public requestTransparentRegion(child: globalAndroid.view.View): void;
						public onInterceptTouchEvent(ev: globalAndroid.view.MotionEvent): boolean;
						public seekTo(msc: number): void;
						public setRoundRectShape(rect: globalAndroid.graphics.Rect, radius: number): void;
						public getRender(): com.kk.taurus.playerbase.render.IRender;
						public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
						public setOnWindowListener(onWindowListener: com.kk.taurus.playerbase.window.IWindow.OnWindowListener): void;
						public resetStyle(): void;
						public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
						public getTextDirection(): number;
						public getChildVisibleRect(child: globalAndroid.view.View, r: globalAndroid.graphics.Rect, offset: globalAndroid.graphics.Point): boolean;
						public addView(child: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
						public switchDecoder(decoderPlanId: number): boolean;
						public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
						public sendAccessibilityEvent(eventType: number): void;
						public setElevationShadow(backgroundColor: number, elevation: number): void;
						public canResolveTextDirection(): boolean;
						public getBufferPercentage(): number;
						public recomputeViewAttributes(child: globalAndroid.view.View): void;
						public start(): void;
						public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
						public requestLayout(): void;
						public setRoundRectShape(radius: number): void;
						public keyboardNavigationClusterSearch(currentCluster: globalAndroid.view.View, direction: number): globalAndroid.view.View;
						public isTextDirectionResolved(): boolean;
						public isPlaying(): boolean;
						/** @deprecated */
						public requestFitSystemWindows(): void;
						public isInPlaybackState(): boolean;
						public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
						/** @deprecated */
						public invalidateChild(child: globalAndroid.view.View, dirty: globalAndroid.graphics.Rect): void;
						public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
						public close(items: native.Array<globalAndroid.animation.Animator>): void;
						public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
						public requestSendAccessibilityEvent(child: globalAndroid.view.View, event: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
						public start(msc: number): void;
						public updateWindowViewLayout(x: number, y: number): void;
						public setElevationShadow(elevation: number): void;
						public addView(child: globalAndroid.view.View, index: number): void;
						public show(items: native.Array<globalAndroid.animation.Animator>): boolean;
						public focusSearch(focused: globalAndroid.view.View, direction: number): globalAndroid.view.View;
						public requestChildRectangleOnScreen(child: globalAndroid.view.View, rectangle: globalAndroid.graphics.Rect, immediate: boolean): boolean;
						public getAudioSessionId(): number;
						public requestFitSystemWindows(): void;
						public setDragEnable(dragEnable: boolean): void;
						public getParentForAccessibility(): globalAndroid.view.ViewParent;
						public focusSearch(direction: number): globalAndroid.view.View;
						public onStopNestedScroll(child: globalAndroid.view.View): void;
						public stop(): void;
						public setOvalRectShape(): void;
						public getTextAlignment(): number;
						public onNestedPreScroll(target: globalAndroid.view.View, dx: number, dy: number, consumed: native.Array<number>): void;
						public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
						public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
						public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback, type: number): globalAndroid.view.ActionMode;
						public notifySubtreeAccessibilityStateChanged(child: globalAndroid.view.View, source: globalAndroid.view.View, changeType: number): void;
						public getParent(): globalAndroid.view.ViewParent;
						public getLayoutDirection(): number;
						public canResolveTextAlignment(): boolean;
						public setOvalRectShape(rect: globalAndroid.graphics.Rect): void;
						public constructor(context: globalAndroid.content.Context);
						public onDescendantInvalidated(child: globalAndroid.view.View, target: globalAndroid.view.View): void;
						public setVolume(left: number, right: number): void;
						public getCurrentPosition(): number;
						public childHasTransientStateChanged(child: globalAndroid.view.View, childHasTransientState: boolean): void;
						public canResolveLayoutDirection(): boolean;
						public onNestedPrePerformAccessibilityAction(target: globalAndroid.view.View, action: number, bundle2: globalAndroid.os.Bundle): boolean;
						public clearShapeStyle(): void;
						public updateViewLayout(view: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
						public resume(): void;
						public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
						public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
						public isTextAlignmentResolved(): boolean;
						public show(): boolean;
						public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
						public onNestedScrollAccepted(child: globalAndroid.view.View, target: globalAndroid.view.View, axes: number): void;
						public addView(child: globalAndroid.view.View): void;
						public focusableViewAvailable(v: globalAndroid.view.View): void;
						public setAspectRatio(aspectRatio: com.kk.taurus.playerbase.render.AspectRatio): void;
						public requestChildFocus(child: globalAndroid.view.View, focused: globalAndroid.view.View): void;
						public setDataSource(dataSource: com.kk.taurus.playerbase.entity.DataSource): void;
						public isLayoutDirectionResolved(): boolean;
						public onStartNestedScroll(child: globalAndroid.view.View, target: globalAndroid.view.View, nestedScrollAxes: number): boolean;
						public getState(): number;
						public clearChildFocus(child: globalAndroid.view.View): void;
						public setLooping(looping: boolean): void;
						/** @deprecated */
						public invalidateChildInParent(location: native.Array<number>, dirty: globalAndroid.graphics.Rect): globalAndroid.view.ViewParent;
						public childDrawableStateChanged(child: globalAndroid.view.View): void;
						public removeView(view: globalAndroid.view.View): void;
						public isWindowShow(): boolean;
						public showContextMenuForChild(originalView: globalAndroid.view.View, x: number, y: number): boolean;
						public onNestedScroll(target: globalAndroid.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
						public addView(child: globalAndroid.view.View, width: number, height: number): void;
						public addView(child: globalAndroid.view.View, index: number, params: globalAndroid.view.ViewGroup.LayoutParams): void;
						public setRenderType(renderType: number): void;
						public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
						public onNestedFling(target: globalAndroid.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
						public stopPlayback(): void;
						public onNestedPreFling(target: globalAndroid.view.View, velocityX: number, velocityY: number): boolean;
						public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
						public getDuration(): number;
						public createContextMenu(menu: globalAndroid.view.ContextMenu): void;
						public showContextMenuForChild(originalView: globalAndroid.view.View): boolean;
						public onTouchEvent(event: globalAndroid.view.MotionEvent): boolean;
						public constructor(context: globalAndroid.content.Context, params: com.kk.taurus.playerbase.window.FloatWindowParams);
						public setSpeed(speed: number): void;
					}
				}
			}
		}
	}
}

//Generics information:
//com.kk.taurus.playerbase.assist.BaseEventAssistHandler:1
//com.kk.taurus.playerbase.assist.OnEventAssistHandler:1

