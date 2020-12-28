declare module com {
	export module kk {
		export module taurus {
			export module ijkplayer {
				export class BuildConfig extends java.lang.Object {
					public static class: java.lang.Class<com.kk.taurus.ijkplayer.BuildConfig>;
					public static DEBUG: boolean;
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
			export module ijkplayer {
				export class IjkPlayer extends com.kk.taurus.playerbase.player.BaseInternalPlayer {
					public static class: java.lang.Class<com.kk.taurus.ijkplayer.IjkPlayer>;
					public static PLAN_ID: number;
					public setDisplay(surfaceHolder: globalAndroid.view.SurfaceHolder): void;
					public setOnPlayerEventListener(onPlayerEventListener: com.kk.taurus.playerbase.event.OnPlayerEventListener): void;
					public setOnBufferingListener(onBufferingListener: com.kk.taurus.playerbase.player.OnBufferingListener): void;
					public static init(context: globalAndroid.content.Context): void;
					public getVideoWidth(): number;
					public setVolume(leftVolume: number, rightVolume: number): void;
					public setSpeed(speed: number): void;
					public start(): void;
					public setDataSource(data: com.kk.taurus.playerbase.entity.DataSource): void;
					public getDuration(): number;
					public destroy(): void;
					public constructor();
					public pause(): void;
					public isPlaying(): boolean;
					public getCurrentPosition(): number;
					public createPlayer(): tv.danmaku.ijk.media.player.IjkMediaPlayer;
					public getVideoHeight(): number;
					public start(msc: number): void;
					public getBufferPercentage(): number;
					public reset(): void;
					public getAudioSessionId(): number;
					public setLooping(looping: boolean): void;
					public setOnErrorEventListener(onErrorEventListener: com.kk.taurus.playerbase.event.OnErrorEventListener): void;
					public resume(): void;
					public option(code: number, bundle: globalAndroid.os.Bundle): void;
					public stop(): void;
					public setSurface(surface: globalAndroid.view.Surface): void;
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
			export module ijkplayer {
				export class RawDataSourceProvider extends java.lang.Object implements tv.danmaku.ijk.media.player.misc.IMediaDataSource {
					public static class: java.lang.Class<com.kk.taurus.ijkplayer.RawDataSourceProvider>;
					public static create(context: globalAndroid.content.Context, uri: globalAndroid.net.Uri): com.kk.taurus.ijkplayer.RawDataSourceProvider;
					public readAt(position: number, buffer: native.Array<number>, offset: number, size: number): number;
					public close(): void;
					public getSize(): number;
				}
			}
		}
	}
}

//Generics information:

