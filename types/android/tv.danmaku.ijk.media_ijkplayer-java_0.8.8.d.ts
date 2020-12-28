declare module tv {
	export module danmaku {
		export module ijk {
			export module media {
				export module player {
					export abstract class AbstractMediaPlayer extends java.lang.Object implements tv.danmaku.ijk.media.player.IMediaPlayer {
						public static class: java.lang.Class<tv.danmaku.ijk.media.player.AbstractMediaPlayer>;
						public notifyOnTimedText(text: tv.danmaku.ijk.media.player.IjkTimedText): void;
						public setScreenOnWhilePlaying(boolean0: boolean): void;
						public notifyOnInfo(what: number, extra: number): boolean;
						public pause(): void;
						public setDataSource(context0: globalAndroid.content.Context, uri1: globalAndroid.net.Uri): void;
						public notifyOnVideoSizeChanged(width: number, height: number, sarNum: number, sarDen: number): void;
						public notifyOnCompletion(): void;
						public setLooping(boolean0: boolean): void;
						public setAudioStreamType(int0: number): void;
						public setOnTimedTextListener(listener: tv.danmaku.ijk.media.player.IMediaPlayer.OnTimedTextListener): void;
						public setOnErrorListener(listener: tv.danmaku.ijk.media.player.IMediaPlayer.OnErrorListener): void;
						public getVideoHeight(): number;
						public getTrackInfo(): native.Array<tv.danmaku.ijk.media.player.misc.ITrackInfo>;
						public constructor();
						/** @deprecated */
						public setLogEnabled(boolean0: boolean): void;
						public notifyOnPrepared(): void;
						public setOnVideoSizeChangedListener(listener: tv.danmaku.ijk.media.player.IMediaPlayer.OnVideoSizeChangedListener): void;
						public resetListeners(): void;
						public setDataSource(string0: string): void;
						public notifyOnBufferingUpdate(percent: number): void;
						public setVolume(float0: number, float1: number): void;
						public start(): void;
						public reset(): void;
						public setDataSource(fileDescriptor0: java.io.FileDescriptor): void;
						/** @deprecated */
						public isPlayable(): boolean;
						public setOnInfoListener(listener: tv.danmaku.ijk.media.player.IMediaPlayer.OnInfoListener): void;
						public setOnPreparedListener(listener: tv.danmaku.ijk.media.player.IMediaPlayer.OnPreparedListener): void;
						public isPlaying(): boolean;
						public setOnCompletionListener(listener: tv.danmaku.ijk.media.player.IMediaPlayer.OnCompletionListener): void;
						public setDataSource(context0: globalAndroid.content.Context, uri1: globalAndroid.net.Uri, map2: java.util.Map<string,string>): void;
						public getVideoWidth(): number;
						public setSurface(surface0: globalAndroid.view.Surface): void;
						public notifyOnError(what: number, extra: number): boolean;
						public getMediaInfo(): tv.danmaku.ijk.media.player.MediaInfo;
						/** @deprecated */
						public setWakeMode(context0: globalAndroid.content.Context, int1: number): void;
						public getAudioSessionId(): number;
						public notifyOnSeekComplete(): void;
						public getDuration(): number;
						public setOnSeekCompleteListener(listener: tv.danmaku.ijk.media.player.IMediaPlayer.OnSeekCompleteListener): void;
						public setDisplay(surfaceHolder0: globalAndroid.view.SurfaceHolder): void;
						public getVideoSarDen(): number;
						public release(): void;
						public getDataSource(): string;
						public stop(): void;
						/** @deprecated */
						public setKeepInBackground(boolean0: boolean): void;
						public isLooping(): boolean;
						public prepareAsync(): void;
						public setDataSource(mediaDataSource: tv.danmaku.ijk.media.player.misc.IMediaDataSource): void;
						public setOnBufferingUpdateListener(listener: tv.danmaku.ijk.media.player.IMediaPlayer.OnBufferingUpdateListener): void;
						public getVideoSarNum(): number;
						public seekTo(long0: number): void;
						public getCurrentPosition(): number;
					}
				}
			}
		}
	}
}

declare module tv {
	export module danmaku {
		export module ijk {
			export module media {
				export module player {
					export class AndroidMediaPlayer extends tv.danmaku.ijk.media.player.AbstractMediaPlayer {
						public static class: java.lang.Class<tv.danmaku.ijk.media.player.AndroidMediaPlayer>;
						/** @deprecated */
						public isPlayable(): boolean;
						public setOnInfoListener(listener: tv.danmaku.ijk.media.player.IMediaPlayer.OnInfoListener): void;
						public setOnPreparedListener(listener: tv.danmaku.ijk.media.player.IMediaPlayer.OnPreparedListener): void;
						public seekTo(msec: number): void;
						public isPlaying(): boolean;
						public pause(): void;
						public setScreenOnWhilePlaying(screenOn: boolean): void;
						public setOnCompletionListener(listener: tv.danmaku.ijk.media.player.IMediaPlayer.OnCompletionListener): void;
						public setVolume(leftVolume: number, rightVolume: number): void;
						public setDataSource(context: globalAndroid.content.Context, uri: globalAndroid.net.Uri, headers: java.util.Map<string,string>): void;
						public setSurface(surface: globalAndroid.view.Surface): void;
						/** @deprecated */
						public setWakeMode(context: globalAndroid.content.Context, mode: number): void;
						public getVideoWidth(): number;
						public setOnTimedTextListener(listener: tv.danmaku.ijk.media.player.IMediaPlayer.OnTimedTextListener): void;
						public setOnErrorListener(listener: tv.danmaku.ijk.media.player.IMediaPlayer.OnErrorListener): void;
						public getMediaInfo(): tv.danmaku.ijk.media.player.MediaInfo;
						public setDataSource(path: string): void;
						public setLogEnabled(enable: boolean): void;
						public getAudioSessionId(): number;
						public getVideoHeight(): number;
						public isPlayable(): boolean;
						public getTrackInfo(): native.Array<tv.danmaku.ijk.media.player.misc.ITrackInfo>;
						public setKeepInBackground(keepInBackground: boolean): void;
						public constructor();
						public getDuration(): number;
						public setOnSeekCompleteListener(listener: tv.danmaku.ijk.media.player.IMediaPlayer.OnSeekCompleteListener): void;
						public setDisplay(sh: globalAndroid.view.SurfaceHolder): void;
						public setOnVideoSizeChangedListener(listener: tv.danmaku.ijk.media.player.IMediaPlayer.OnVideoSizeChangedListener): void;
						public setDataSource(fd: java.io.FileDescriptor): void;
						public getVideoSarDen(): number;
						public release(): void;
						public getDataSource(): string;
						public stop(): void;
						/** @deprecated */
						public setKeepInBackground(keepInBackground: boolean): void;
						public isLooping(): boolean;
						public prepareAsync(): void;
						public setDataSource(mediaDataSource: tv.danmaku.ijk.media.player.misc.IMediaDataSource): void;
						public start(): void;
						public setWakeMode(context: globalAndroid.content.Context, mode: number): void;
						public setOnBufferingUpdateListener(listener: tv.danmaku.ijk.media.player.IMediaPlayer.OnBufferingUpdateListener): void;
						public setDataSource(context: globalAndroid.content.Context, uri: globalAndroid.net.Uri): void;
						public getVideoSarNum(): number;
						public getInternalMediaPlayer(): globalAndroid.media.MediaPlayer;
						public reset(): void;
						public setLooping(looping: boolean): void;
						/** @deprecated */
						public setLogEnabled(enable: boolean): void;
						public getCurrentPosition(): number;
						public setAudioStreamType(streamtype: number): void;
					}
					export module AndroidMediaPlayer {
						export class AndroidMediaPlayerListenerHolder extends java.lang.Object implements globalAndroid.media.MediaPlayer.OnPreparedListener, globalAndroid.media.MediaPlayer.OnCompletionListener, globalAndroid.media.MediaPlayer.OnBufferingUpdateListener, globalAndroid.media.MediaPlayer.OnSeekCompleteListener, globalAndroid.media.MediaPlayer.OnVideoSizeChangedListener, globalAndroid.media.MediaPlayer.OnErrorListener, globalAndroid.media.MediaPlayer.OnInfoListener, globalAndroid.media.MediaPlayer.OnTimedTextListener {
							public static class: java.lang.Class<tv.danmaku.ijk.media.player.AndroidMediaPlayer.AndroidMediaPlayerListenerHolder>;
							public mWeakMediaPlayer: java.lang.ref.WeakReference<tv.danmaku.ijk.media.player.AndroidMediaPlayer>;
							public onCompletion(mp: globalAndroid.media.MediaPlayer): void;
							public onTimedText(mp: globalAndroid.media.MediaPlayer, text: globalAndroid.media.TimedText): void;
							public onError(mp: globalAndroid.media.MediaPlayer, what: number, extra: number): boolean;
							public onPrepared(mp: globalAndroid.media.MediaPlayer): void;
							public onInfo(mp: globalAndroid.media.MediaPlayer, what: number, extra: number): boolean;
							public constructor(param0: tv.danmaku.ijk.media.player.AndroidMediaPlayer, mp: tv.danmaku.ijk.media.player.AndroidMediaPlayer);
							public onSeekComplete(mp: globalAndroid.media.MediaPlayer): void;
							public onVideoSizeChanged(mp: globalAndroid.media.MediaPlayer, width: number, height: number): void;
							public onBufferingUpdate(mp: globalAndroid.media.MediaPlayer, percent: number): void;
						}
						export class MediaDataSourceProxy extends globalAndroid.media.MediaDataSource {
							public static class: java.lang.Class<tv.danmaku.ijk.media.player.AndroidMediaPlayer.MediaDataSourceProxy>;
							public constructor();
							public constructor(mediaDataSource: tv.danmaku.ijk.media.player.misc.IMediaDataSource);
							public close(): void;
							public getSize(): number;
							public readAt(long0: number, bytes1: native.Array<number>, int2: number, int3: number): number;
							public readAt(position: number, buffer: native.Array<number>, offset: number, size: number): number;
						}
					}
				}
			}
		}
	}
}

declare module tv {
	export module danmaku {
		export module ijk {
			export module media {
				export module player {
					export class BuildConfig extends java.lang.Object {
						public static class: java.lang.Class<tv.danmaku.ijk.media.player.BuildConfig>;
						public static APPLICATION_ID: string;
						public static BUILD_TYPE: string;
						public static DEBUG: boolean;
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

declare module tv {
	export module danmaku {
		export module ijk {
			export module media {
				export module player {
					export class IMediaPlayer extends java.lang.Object {
						public static class: java.lang.Class<tv.danmaku.ijk.media.player.IMediaPlayer>;
						/**
						 * Constructs a new instance of the tv.danmaku.ijk.media.player.IMediaPlayer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							setDisplay(surfaceHolder0: globalAndroid.view.SurfaceHolder): void;
							setDataSource(context0: globalAndroid.content.Context, uri1: globalAndroid.net.Uri): void;
							setDataSource(context0: globalAndroid.content.Context, uri1: globalAndroid.net.Uri, map2: java.util.Map<string,string>): void;
							setDataSource(fileDescriptor0: java.io.FileDescriptor): void;
							setDataSource(string0: string): void;
							getDataSource(): string;
							prepareAsync(): void;
							start(): void;
							stop(): void;
							pause(): void;
							setScreenOnWhilePlaying(boolean0: boolean): void;
							getVideoWidth(): number;
							getVideoHeight(): number;
							isPlaying(): boolean;
							seekTo(long0: number): void;
							getCurrentPosition(): number;
							getDuration(): number;
							release(): void;
							reset(): void;
							setVolume(float0: number, float1: number): void;
							getAudioSessionId(): number;
							getMediaInfo(): tv.danmaku.ijk.media.player.MediaInfo;
							setLogEnabled(boolean0: boolean): void;
							isPlayable(): boolean;
							setOnPreparedListener(onPreparedListener0: tv.danmaku.ijk.media.player.IMediaPlayer.OnPreparedListener): void;
							setOnCompletionListener(onCompletionListener0: tv.danmaku.ijk.media.player.IMediaPlayer.OnCompletionListener): void;
							setOnBufferingUpdateListener(onBufferingUpdateListener0: tv.danmaku.ijk.media.player.IMediaPlayer.OnBufferingUpdateListener): void;
							setOnSeekCompleteListener(onSeekCompleteListener0: tv.danmaku.ijk.media.player.IMediaPlayer.OnSeekCompleteListener): void;
							setOnVideoSizeChangedListener(onVideoSizeChangedListener0: tv.danmaku.ijk.media.player.IMediaPlayer.OnVideoSizeChangedListener): void;
							setOnErrorListener(onErrorListener0: tv.danmaku.ijk.media.player.IMediaPlayer.OnErrorListener): void;
							setOnInfoListener(onInfoListener0: tv.danmaku.ijk.media.player.IMediaPlayer.OnInfoListener): void;
							setOnTimedTextListener(onTimedTextListener0: tv.danmaku.ijk.media.player.IMediaPlayer.OnTimedTextListener): void;
							setAudioStreamType(int0: number): void;
							setKeepInBackground(boolean0: boolean): void;
							getVideoSarNum(): number;
							getVideoSarDen(): number;
							setWakeMode(context0: globalAndroid.content.Context, int1: number): void;
							setLooping(boolean0: boolean): void;
							isLooping(): boolean;
							getTrackInfo(): native.Array<tv.danmaku.ijk.media.player.misc.ITrackInfo>;
							setSurface(surface0: globalAndroid.view.Surface): void;
							setDataSource(iMediaDataSource0: tv.danmaku.ijk.media.player.misc.IMediaDataSource): void;
						});
						public constructor();
						public static MEDIA_INFO_VIDEO_ROTATION_CHANGED: number;
						public static MEDIA_INFO_AUDIO_RENDERING_START: number;
						public static MEDIA_INFO_SUBTITLE_TIMED_OUT: number;
						public static MEDIA_INFO_AUDIO_DECODED_START: number;
						public static MEDIA_INFO_VIDEO_DECODED_START: number;
						public static MEDIA_ERROR_MALFORMED: number;
						public static MEDIA_INFO_NOT_SEEKABLE: number;
						public static MEDIA_INFO_NETWORK_BANDWIDTH: number;
						public static MEDIA_INFO_STARTED_AS_NEXT: number;
						public static MEDIA_INFO_VIDEO_SEEK_RENDERING_START: number;
						public static MEDIA_INFO_MEDIA_ACCURATE_SEEK_COMPLETE: number;
						public static MEDIA_INFO_BUFFERING_END: number;
						public static MEDIA_INFO_BAD_INTERLEAVING: number;
						public static MEDIA_ERROR_NOT_VALID_FOR_PROGRESSIVE_PLAYBACK: number;
						public static MEDIA_ERROR_SERVER_DIED: number;
						public static MEDIA_INFO_AUDIO_SEEK_RENDERING_START: number;
						public static MEDIA_ERROR_IO: number;
						public static MEDIA_INFO_TIMED_TEXT_ERROR: number;
						public static MEDIA_INFO_UNKNOWN: number;
						public static MEDIA_ERROR_UNKNOWN: number;
						public static MEDIA_INFO_VIDEO_TRACK_LAGGING: number;
						public static MEDIA_INFO_FIND_STREAM_INFO: number;
						public static MEDIA_INFO_COMPONENT_OPEN: number;
						public static MEDIA_ERROR_TIMED_OUT: number;
						public static MEDIA_INFO_OPEN_INPUT: number;
						public static MEDIA_INFO_VIDEO_RENDERING_START: number;
						public static MEDIA_ERROR_UNSUPPORTED: number;
						public static MEDIA_INFO_METADATA_UPDATE: number;
						public static MEDIA_INFO_BUFFERING_START: number;
						public static MEDIA_INFO_UNSUPPORTED_SUBTITLE: number;
						public setDataSource(fileDescriptor0: java.io.FileDescriptor): void;
						/** @deprecated */
						public isPlayable(): boolean;
						public setScreenOnWhilePlaying(boolean0: boolean): void;
						public isPlaying(): boolean;
						public setDataSource(iMediaDataSource0: tv.danmaku.ijk.media.player.misc.IMediaDataSource): void;
						public setOnBufferingUpdateListener(onBufferingUpdateListener0: tv.danmaku.ijk.media.player.IMediaPlayer.OnBufferingUpdateListener): void;
						public pause(): void;
						public setDataSource(context0: globalAndroid.content.Context, uri1: globalAndroid.net.Uri): void;
						public setOnErrorListener(onErrorListener0: tv.danmaku.ijk.media.player.IMediaPlayer.OnErrorListener): void;
						public setOnPreparedListener(onPreparedListener0: tv.danmaku.ijk.media.player.IMediaPlayer.OnPreparedListener): void;
						public setLooping(boolean0: boolean): void;
						public setDataSource(context0: globalAndroid.content.Context, uri1: globalAndroid.net.Uri, map2: java.util.Map<string,string>): void;
						public setAudioStreamType(int0: number): void;
						public getVideoWidth(): number;
						public setOnCompletionListener(onCompletionListener0: tv.danmaku.ijk.media.player.IMediaPlayer.OnCompletionListener): void;
						public setSurface(surface0: globalAndroid.view.Surface): void;
						public getMediaInfo(): tv.danmaku.ijk.media.player.MediaInfo;
						/** @deprecated */
						public setWakeMode(context0: globalAndroid.content.Context, int1: number): void;
						public getVideoHeight(): number;
						public getAudioSessionId(): number;
						public getTrackInfo(): native.Array<tv.danmaku.ijk.media.player.misc.ITrackInfo>;
						public getDuration(): number;
						public setOnSeekCompleteListener(onSeekCompleteListener0: tv.danmaku.ijk.media.player.IMediaPlayer.OnSeekCompleteListener): void;
						public setOnTimedTextListener(onTimedTextListener0: tv.danmaku.ijk.media.player.IMediaPlayer.OnTimedTextListener): void;
						/** @deprecated */
						public setLogEnabled(boolean0: boolean): void;
						public setDisplay(surfaceHolder0: globalAndroid.view.SurfaceHolder): void;
						public setOnVideoSizeChangedListener(onVideoSizeChangedListener0: tv.danmaku.ijk.media.player.IMediaPlayer.OnVideoSizeChangedListener): void;
						public setOnInfoListener(onInfoListener0: tv.danmaku.ijk.media.player.IMediaPlayer.OnInfoListener): void;
						public release(): void;
						public getVideoSarDen(): number;
						public getDataSource(): string;
						public stop(): void;
						public setDataSource(string0: string): void;
						/** @deprecated */
						public setKeepInBackground(boolean0: boolean): void;
						public isLooping(): boolean;
						public prepareAsync(): void;
						public setVolume(float0: number, float1: number): void;
						public start(): void;
						public getVideoSarNum(): number;
						public seekTo(long0: number): void;
						public reset(): void;
						public getCurrentPosition(): number;
					}
					export module IMediaPlayer {
						export class OnBufferingUpdateListener extends java.lang.Object {
							public static class: java.lang.Class<tv.danmaku.ijk.media.player.IMediaPlayer.OnBufferingUpdateListener>;
							/**
							 * Constructs a new instance of the tv.danmaku.ijk.media.player.IMediaPlayer$OnBufferingUpdateListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onBufferingUpdate(iMediaPlayer0: tv.danmaku.ijk.media.player.IMediaPlayer, int1: number): void;
							});
							public constructor();
							public onBufferingUpdate(iMediaPlayer0: tv.danmaku.ijk.media.player.IMediaPlayer, int1: number): void;
						}
						export class OnCompletionListener extends java.lang.Object {
							public static class: java.lang.Class<tv.danmaku.ijk.media.player.IMediaPlayer.OnCompletionListener>;
							/**
							 * Constructs a new instance of the tv.danmaku.ijk.media.player.IMediaPlayer$OnCompletionListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onCompletion(iMediaPlayer0: tv.danmaku.ijk.media.player.IMediaPlayer): void;
							});
							public constructor();
							public onCompletion(iMediaPlayer0: tv.danmaku.ijk.media.player.IMediaPlayer): void;
						}
						export class OnErrorListener extends java.lang.Object {
							public static class: java.lang.Class<tv.danmaku.ijk.media.player.IMediaPlayer.OnErrorListener>;
							/**
							 * Constructs a new instance of the tv.danmaku.ijk.media.player.IMediaPlayer$OnErrorListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onError(iMediaPlayer0: tv.danmaku.ijk.media.player.IMediaPlayer, int1: number, int2: number): boolean;
							});
							public constructor();
							public onError(iMediaPlayer0: tv.danmaku.ijk.media.player.IMediaPlayer, int1: number, int2: number): boolean;
						}
						export class OnInfoListener extends java.lang.Object {
							public static class: java.lang.Class<tv.danmaku.ijk.media.player.IMediaPlayer.OnInfoListener>;
							/**
							 * Constructs a new instance of the tv.danmaku.ijk.media.player.IMediaPlayer$OnInfoListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onInfo(iMediaPlayer0: tv.danmaku.ijk.media.player.IMediaPlayer, int1: number, int2: number): boolean;
							});
							public constructor();
							public onInfo(iMediaPlayer0: tv.danmaku.ijk.media.player.IMediaPlayer, int1: number, int2: number): boolean;
						}
						export class OnPreparedListener extends java.lang.Object {
							public static class: java.lang.Class<tv.danmaku.ijk.media.player.IMediaPlayer.OnPreparedListener>;
							/**
							 * Constructs a new instance of the tv.danmaku.ijk.media.player.IMediaPlayer$OnPreparedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onPrepared(iMediaPlayer0: tv.danmaku.ijk.media.player.IMediaPlayer): void;
							});
							public constructor();
							public onPrepared(iMediaPlayer0: tv.danmaku.ijk.media.player.IMediaPlayer): void;
						}
						export class OnSeekCompleteListener extends java.lang.Object {
							public static class: java.lang.Class<tv.danmaku.ijk.media.player.IMediaPlayer.OnSeekCompleteListener>;
							/**
							 * Constructs a new instance of the tv.danmaku.ijk.media.player.IMediaPlayer$OnSeekCompleteListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onSeekComplete(iMediaPlayer0: tv.danmaku.ijk.media.player.IMediaPlayer): void;
							});
							public constructor();
							public onSeekComplete(iMediaPlayer0: tv.danmaku.ijk.media.player.IMediaPlayer): void;
						}
						export class OnTimedTextListener extends java.lang.Object {
							public static class: java.lang.Class<tv.danmaku.ijk.media.player.IMediaPlayer.OnTimedTextListener>;
							/**
							 * Constructs a new instance of the tv.danmaku.ijk.media.player.IMediaPlayer$OnTimedTextListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onTimedText(iMediaPlayer0: tv.danmaku.ijk.media.player.IMediaPlayer, ijkTimedText1: tv.danmaku.ijk.media.player.IjkTimedText): void;
							});
							public constructor();
							public onTimedText(iMediaPlayer0: tv.danmaku.ijk.media.player.IMediaPlayer, ijkTimedText1: tv.danmaku.ijk.media.player.IjkTimedText): void;
						}
						export class OnVideoSizeChangedListener extends java.lang.Object {
							public static class: java.lang.Class<tv.danmaku.ijk.media.player.IMediaPlayer.OnVideoSizeChangedListener>;
							/**
							 * Constructs a new instance of the tv.danmaku.ijk.media.player.IMediaPlayer$OnVideoSizeChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onVideoSizeChanged(iMediaPlayer0: tv.danmaku.ijk.media.player.IMediaPlayer, int1: number, int2: number, int3: number, int4: number): void;
							});
							public constructor();
							public onVideoSizeChanged(iMediaPlayer0: tv.danmaku.ijk.media.player.IMediaPlayer, int1: number, int2: number, int3: number, int4: number): void;
						}
					}
				}
			}
		}
	}
}

declare module tv {
	export module danmaku {
		export module ijk {
			export module media {
				export module player {
					export class ISurfaceTextureHolder extends java.lang.Object {
						public static class: java.lang.Class<tv.danmaku.ijk.media.player.ISurfaceTextureHolder>;
						/**
						 * Constructs a new instance of the tv.danmaku.ijk.media.player.ISurfaceTextureHolder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							setSurfaceTexture(surfaceTexture0: globalAndroid.graphics.SurfaceTexture): void;
							getSurfaceTexture(): globalAndroid.graphics.SurfaceTexture;
							setSurfaceTextureHost(iSurfaceTextureHost0: tv.danmaku.ijk.media.player.ISurfaceTextureHost): void;
						});
						public constructor();
						public getSurfaceTexture(): globalAndroid.graphics.SurfaceTexture;
						public setSurfaceTexture(surfaceTexture0: globalAndroid.graphics.SurfaceTexture): void;
						public setSurfaceTextureHost(iSurfaceTextureHost0: tv.danmaku.ijk.media.player.ISurfaceTextureHost): void;
					}
				}
			}
		}
	}
}

declare module tv {
	export module danmaku {
		export module ijk {
			export module media {
				export module player {
					export class ISurfaceTextureHost extends java.lang.Object {
						public static class: java.lang.Class<tv.danmaku.ijk.media.player.ISurfaceTextureHost>;
						/**
						 * Constructs a new instance of the tv.danmaku.ijk.media.player.ISurfaceTextureHost interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							releaseSurfaceTexture(surfaceTexture0: globalAndroid.graphics.SurfaceTexture): void;
						});
						public constructor();
						public releaseSurfaceTexture(surfaceTexture0: globalAndroid.graphics.SurfaceTexture): void;
					}
				}
			}
		}
	}
}

declare module tv {
	export module danmaku {
		export module ijk {
			export module media {
				export module player {
					export class IjkLibLoader extends java.lang.Object {
						public static class: java.lang.Class<tv.danmaku.ijk.media.player.IjkLibLoader>;
						/**
						 * Constructs a new instance of the tv.danmaku.ijk.media.player.IjkLibLoader interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							loadLibrary(string0: string): void;
						});
						public constructor();
						public loadLibrary(string0: string): void;
					}
				}
			}
		}
	}
}

declare module tv {
	export module danmaku {
		export module ijk {
			export module media {
				export module player {
					export class IjkMediaCodecInfo extends java.lang.Object {
						public static class: java.lang.Class<tv.danmaku.ijk.media.player.IjkMediaCodecInfo>;
						public static RANK_ACCEPTABLE: number;
						public static RANK_LAST_CHANCE: number;
						public static RANK_MAX: number;
						public static RANK_NON_STANDARD: number;
						public static RANK_NO_SENSE: number;
						public static RANK_SECURE: number;
						public static RANK_SOFTWARE: number;
						public static RANK_TESTED: number;
						public mCodecInfo: globalAndroid.media.MediaCodecInfo;
						public mMimeType: string;
						public mRank: number;
						public constructor();
						public static getLevelName(level: number): string;
						public static getProfileName(profile: number): string;
						public dumpProfileLevels(mimeType: string): void;
						public static getProfileLevelName(profile: number, level: number): string;
						public static setupCandidate(codecInfo: globalAndroid.media.MediaCodecInfo, mimeType: string): tv.danmaku.ijk.media.player.IjkMediaCodecInfo;
					}
				}
			}
		}
	}
}

declare module tv {
	export module danmaku {
		export module ijk {
			export module media {
				export module player {
					export class IjkMediaMeta extends java.lang.Object {
						public static class: java.lang.Class<tv.danmaku.ijk.media.player.IjkMediaMeta>;
						public static AV_CH_BACK_CENTER: number;
						public static AV_CH_BACK_LEFT: number;
						public static AV_CH_BACK_RIGHT: number;
						public static AV_CH_FRONT_CENTER: number;
						public static AV_CH_FRONT_LEFT: number;
						public static AV_CH_FRONT_LEFT_OF_CENTER: number;
						public static AV_CH_FRONT_RIGHT: number;
						public static AV_CH_FRONT_RIGHT_OF_CENTER: number;
						public static AV_CH_LAYOUT_2POINT1: number;
						public static AV_CH_LAYOUT_2_1: number;
						public static AV_CH_LAYOUT_2_2: number;
						public static AV_CH_LAYOUT_3POINT1: number;
						public static AV_CH_LAYOUT_4POINT0: number;
						public static AV_CH_LAYOUT_4POINT1: number;
						public static AV_CH_LAYOUT_5POINT0: number;
						public static AV_CH_LAYOUT_5POINT0_BACK: number;
						public static AV_CH_LAYOUT_5POINT1: number;
						public static AV_CH_LAYOUT_5POINT1_BACK: number;
						public static AV_CH_LAYOUT_6POINT0: number;
						public static AV_CH_LAYOUT_6POINT0_FRONT: number;
						public static AV_CH_LAYOUT_6POINT1: number;
						public static AV_CH_LAYOUT_6POINT1_BACK: number;
						public static AV_CH_LAYOUT_6POINT1_FRONT: number;
						public static AV_CH_LAYOUT_7POINT0: number;
						public static AV_CH_LAYOUT_7POINT0_FRONT: number;
						public static AV_CH_LAYOUT_7POINT1: number;
						public static AV_CH_LAYOUT_7POINT1_WIDE: number;
						public static AV_CH_LAYOUT_7POINT1_WIDE_BACK: number;
						public static AV_CH_LAYOUT_HEXAGONAL: number;
						public static AV_CH_LAYOUT_MONO: number;
						public static AV_CH_LAYOUT_OCTAGONAL: number;
						public static AV_CH_LAYOUT_QUAD: number;
						public static AV_CH_LAYOUT_STEREO: number;
						public static AV_CH_LAYOUT_STEREO_DOWNMIX: number;
						public static AV_CH_LAYOUT_SURROUND: number;
						public static AV_CH_LOW_FREQUENCY: number;
						public static AV_CH_LOW_FREQUENCY_2: number;
						public static AV_CH_SIDE_LEFT: number;
						public static AV_CH_SIDE_RIGHT: number;
						public static AV_CH_STEREO_LEFT: number;
						public static AV_CH_STEREO_RIGHT: number;
						public static AV_CH_SURROUND_DIRECT_LEFT: number;
						public static AV_CH_SURROUND_DIRECT_RIGHT: number;
						public static AV_CH_TOP_BACK_CENTER: number;
						public static AV_CH_TOP_BACK_LEFT: number;
						public static AV_CH_TOP_BACK_RIGHT: number;
						public static AV_CH_TOP_CENTER: number;
						public static AV_CH_TOP_FRONT_CENTER: number;
						public static AV_CH_TOP_FRONT_LEFT: number;
						public static AV_CH_TOP_FRONT_RIGHT: number;
						public static AV_CH_WIDE_LEFT: number;
						public static AV_CH_WIDE_RIGHT: number;
						public static FF_PROFILE_H264_BASELINE: number;
						public static FF_PROFILE_H264_CAVLC_444: number;
						public static FF_PROFILE_H264_CONSTRAINED: number;
						public static FF_PROFILE_H264_CONSTRAINED_BASELINE: number;
						public static FF_PROFILE_H264_EXTENDED: number;
						public static FF_PROFILE_H264_HIGH: number;
						public static FF_PROFILE_H264_HIGH_10: number;
						public static FF_PROFILE_H264_HIGH_10_INTRA: number;
						public static FF_PROFILE_H264_HIGH_422: number;
						public static FF_PROFILE_H264_HIGH_422_INTRA: number;
						public static FF_PROFILE_H264_HIGH_444: number;
						public static FF_PROFILE_H264_HIGH_444_INTRA: number;
						public static FF_PROFILE_H264_HIGH_444_PREDICTIVE: number;
						public static FF_PROFILE_H264_INTRA: number;
						public static FF_PROFILE_H264_MAIN: number;
						public static IJKM_KEY_AUDIO_STREAM: string;
						public static IJKM_KEY_BITRATE: string;
						public static IJKM_KEY_CHANNEL_LAYOUT: string;
						public static IJKM_KEY_CODEC_LEVEL: string;
						public static IJKM_KEY_CODEC_LONG_NAME: string;
						public static IJKM_KEY_CODEC_NAME: string;
						public static IJKM_KEY_CODEC_PIXEL_FORMAT: string;
						public static IJKM_KEY_CODEC_PROFILE: string;
						public static IJKM_KEY_CODEC_PROFILE_ID: string;
						public static IJKM_KEY_DURATION_US: string;
						public static IJKM_KEY_FORMAT: string;
						public static IJKM_KEY_FPS_DEN: string;
						public static IJKM_KEY_FPS_NUM: string;
						public static IJKM_KEY_HEIGHT: string;
						public static IJKM_KEY_LANGUAGE: string;
						public static IJKM_KEY_SAMPLE_RATE: string;
						public static IJKM_KEY_SAR_DEN: string;
						public static IJKM_KEY_SAR_NUM: string;
						public static IJKM_KEY_START_US: string;
						public static IJKM_KEY_STREAMS: string;
						public static IJKM_KEY_TBR_DEN: string;
						public static IJKM_KEY_TBR_NUM: string;
						public static IJKM_KEY_TIMEDTEXT_STREAM: string;
						public static IJKM_KEY_TYPE: string;
						public static IJKM_KEY_VIDEO_STREAM: string;
						public static IJKM_KEY_WIDTH: string;
						public static IJKM_VAL_TYPE__AUDIO: string;
						public static IJKM_VAL_TYPE__TIMEDTEXT: string;
						public static IJKM_VAL_TYPE__UNKNOWN: string;
						public static IJKM_VAL_TYPE__VIDEO: string;
						public mAudioStream: tv.danmaku.ijk.media.player.IjkMediaMeta.IjkStreamMeta;
						public mBitrate: number;
						public mDurationUS: number;
						public mFormat: string;
						public mMediaMeta: globalAndroid.os.Bundle;
						public mStartUS: number;
						public mStreams: java.util.ArrayList<tv.danmaku.ijk.media.player.IjkMediaMeta.IjkStreamMeta>;
						public mVideoStream: tv.danmaku.ijk.media.player.IjkMediaMeta.IjkStreamMeta;
						public getDurationInline(): string;
						public constructor();
						public getInt(key: string, defaultValue: number): number;
						public getParcelableArrayList(key: string): java.util.ArrayList<globalAndroid.os.Bundle>;
						public getString(key: string): string;
						public getInt(key: string): number;
						public getLong(key: string, defaultValue: number): number;
						public getLong(key: string): number;
						public static parse(mediaMeta: globalAndroid.os.Bundle): tv.danmaku.ijk.media.player.IjkMediaMeta;
					}
					export module IjkMediaMeta {
						export class IjkStreamMeta extends java.lang.Object {
							public static class: java.lang.Class<tv.danmaku.ijk.media.player.IjkMediaMeta.IjkStreamMeta>;
							public mBitrate: number;
							public mChannelLayout: number;
							public mCodecLongName: string;
							public mCodecName: string;
							public mCodecProfile: string;
							public mFpsDen: number;
							public mFpsNum: number;
							public mHeight: number;
							public mIndex: number;
							public mLanguage: string;
							public mMeta: globalAndroid.os.Bundle;
							public mSampleRate: number;
							public mSarDen: number;
							public mSarNum: number;
							public mTbrDen: number;
							public mTbrNum: number;
							public mType: string;
							public mWidth: number;
							public getString(key: string): string;
							public getResolutionInline(): string;
							public getLong(key: string): number;
							public getBitrateInline(): string;
							public getLong(key: string, defaultValue: number): number;
							public getCodecShortNameInline(): string;
							public constructor(index: number);
							public getSampleRateInline(): string;
							public getCodecLongNameInline(): string;
							public getChannelLayoutInline(): string;
							public getInt(key: string, defaultValue: number): number;
							public getFpsInline(): string;
							public getInt(key: string): number;
						}
					}
				}
			}
		}
	}
}

declare module tv {
	export module danmaku {
		export module ijk {
			export module media {
				export module player {
					export class IjkMediaPlayer extends tv.danmaku.ijk.media.player.AbstractMediaPlayer {
						public static class: java.lang.Class<tv.danmaku.ijk.media.player.IjkMediaPlayer>;
						public static FFP_PROPV_DECODER_AVCODEC: number;
						public static FFP_PROPV_DECODER_MEDIACODEC: number;
						public static FFP_PROPV_DECODER_UNKNOWN: number;
						public static FFP_PROPV_DECODER_VIDEOTOOLBOX: number;
						public static FFP_PROP_FLOAT_DROP_FRAME_RATE: number;
						public static FFP_PROP_FLOAT_PLAYBACK_RATE: number;
						public static FFP_PROP_INT64_ASYNC_STATISTIC_BUF_BACKWARDS: number;
						public static FFP_PROP_INT64_ASYNC_STATISTIC_BUF_CAPACITY: number;
						public static FFP_PROP_INT64_ASYNC_STATISTIC_BUF_FORWARDS: number;
						public static FFP_PROP_INT64_AUDIO_CACHED_BYTES: number;
						public static FFP_PROP_INT64_AUDIO_CACHED_DURATION: number;
						public static FFP_PROP_INT64_AUDIO_CACHED_PACKETS: number;
						public static FFP_PROP_INT64_AUDIO_DECODER: number;
						public static FFP_PROP_INT64_BIT_RATE: number;
						public static FFP_PROP_INT64_CACHE_STATISTIC_COUNT_BYTES: number;
						public static FFP_PROP_INT64_CACHE_STATISTIC_FILE_FORWARDS: number;
						public static FFP_PROP_INT64_CACHE_STATISTIC_FILE_POS: number;
						public static FFP_PROP_INT64_CACHE_STATISTIC_PHYSICAL_POS: number;
						public static FFP_PROP_INT64_IMMEDIATE_RECONNECT: number;
						public static FFP_PROP_INT64_LATEST_SEEK_LOAD_DURATION: number;
						public static FFP_PROP_INT64_LOGICAL_FILE_SIZE: number;
						public static FFP_PROP_INT64_SELECTED_AUDIO_STREAM: number;
						public static FFP_PROP_INT64_SELECTED_TIMEDTEXT_STREAM: number;
						public static FFP_PROP_INT64_SELECTED_VIDEO_STREAM: number;
						public static FFP_PROP_INT64_SHARE_CACHE_DATA: number;
						public static FFP_PROP_INT64_TCP_SPEED: number;
						public static FFP_PROP_INT64_TRAFFIC_STATISTIC_BYTE_COUNT: number;
						public static FFP_PROP_INT64_VIDEO_CACHED_BYTES: number;
						public static FFP_PROP_INT64_VIDEO_CACHED_DURATION: number;
						public static FFP_PROP_INT64_VIDEO_CACHED_PACKETS: number;
						public static FFP_PROP_INT64_VIDEO_DECODER: number;
						public static IJK_LOG_DEBUG: number;
						public static IJK_LOG_DEFAULT: number;
						public static IJK_LOG_ERROR: number;
						public static IJK_LOG_FATAL: number;
						public static IJK_LOG_INFO: number;
						public static IJK_LOG_SILENT: number;
						public static IJK_LOG_UNKNOWN: number;
						public static IJK_LOG_VERBOSE: number;
						public static IJK_LOG_WARN: number;
						public static MEDIA_SET_VIDEO_SAR: number;
						public static OPT_CATEGORY_CODEC: number;
						public static OPT_CATEGORY_FORMAT: number;
						public static OPT_CATEGORY_PLAYER: number;
						public static OPT_CATEGORY_SWS: number;
						public static PROP_FLOAT_VIDEO_DECODE_FRAMES_PER_SECOND: number;
						public static PROP_FLOAT_VIDEO_OUTPUT_FRAMES_PER_SECOND: number;
						public static SDL_FCC_RV16: number;
						public static SDL_FCC_RV32: number;
						public static SDL_FCC_YV12: number;
						public pause(): void;
						public getTrafficStatisticByteCount(): number;
						public setScreenOnWhilePlaying(screenOn: boolean): void;
						public static native_profileEnd(): void;
						public setAndroidIOCallback(androidIO: tv.danmaku.ijk.media.player.misc.IAndroidIO): void;
						public getCacheStatisticFileForwards(): number;
						public static native_profileBegin(string0: string): void;
						public setDataSource(context: globalAndroid.content.Context, uri: globalAndroid.net.Uri, headers: java.util.Map<string,string>): void;
						public setSurface(surface: globalAndroid.view.Surface): void;
						public getSelectedTrack(trackType: number): number;
						public finalize(): void;
						/** @deprecated */
						public setWakeMode(context: globalAndroid.content.Context, mode: number): void;
						public getAudioCachedPackets(): number;
						public setOption(category: number, name: string, value: string): void;
						public getAsyncStatisticBufCapacity(): number;
						public setOnTimedTextListener(listener: tv.danmaku.ijk.media.player.IMediaPlayer.OnTimedTextListener): void;
						public setOnErrorListener(listener: tv.danmaku.ijk.media.player.IMediaPlayer.OnErrorListener): void;
						public setDataSource(path: string): void;
						public httphookReconnect(): void;
						public getVideoHeight(): number;
						public setKeepInBackground(keepInBackground: boolean): void;
						public getTrackInfo(): native.Array<tv.danmaku.ijk.media.player.misc.ITrackInfo>;
						public getVideoOutputFramesPerSecond(): number;
						public constructor();
						public setOnMediaCodecSelectListener(listener: tv.danmaku.ijk.media.player.IjkMediaPlayer.OnMediaCodecSelectListener): void;
						public getVideoDecoder(): number;
						public setOnNativeInvokeListener(listener: tv.danmaku.ijk.media.player.IjkMediaPlayer.OnNativeInvokeListener): void;
						public static loadLibrariesOnce(libLoader: tv.danmaku.ijk.media.player.IjkLibLoader): void;
						public setOnVideoSizeChangedListener(listener: tv.danmaku.ijk.media.player.IMediaPlayer.OnVideoSizeChangedListener): void;
						public resetListeners(): void;
						/** @deprecated */
						public setKeepInBackground(keepInBackground: boolean): void;
						public getFileSize(): number;
						public setVolume(float0: number, float1: number): void;
						public selectTrack(track: number): void;
						public start(): void;
						public getDropFrameRate(): number;
						public setOnControlMessageListener(listener: tv.danmaku.ijk.media.player.IjkMediaPlayer.OnControlMessageListener): void;
						public getVideoCachedDuration(): number;
						public getCacheStatisticPhysicalPos(): number;
						public reset(): void;
						public setLooping(looping: boolean): void;
						public static native_setLogLevel(int0: number): void;
						/** @deprecated */
						public isPlayable(): boolean;
						public setOnInfoListener(listener: tv.danmaku.ijk.media.player.IMediaPlayer.OnInfoListener): void;
						public setOnPreparedListener(listener: tv.danmaku.ijk.media.player.IMediaPlayer.OnPreparedListener): void;
						public getVideoCachedBytes(): number;
						public getBitRate(): number;
						public isPlaying(): boolean;
						public setOnCompletionListener(listener: tv.danmaku.ijk.media.player.IMediaPlayer.OnCompletionListener): void;
						public getSpeed(speed: number): number;
						public getAudioCachedBytes(): number;
						public static getColorFormatName(mediaCodecColorFormat: number): string;
						public deselectTrack(track: number): void;
						public getVideoCachedPackets(): number;
						public getVideoWidth(): number;
						public getTcpSpeed(): number;
						public getCacheStatisticCountBytes(): number;
						public getMediaInfo(): tv.danmaku.ijk.media.player.MediaInfo;
						public getSeekLoadDuration(): number;
						public setLogEnabled(enable: boolean): void;
						public getAudioSessionId(): number;
						public isPlayable(): boolean;
						public setDataSource(path: string, headers: java.util.Map<string,string>): void;
						public setOption(category: number, name: string, value: number): void;
						public getAudioCachedDuration(): number;
						public getDuration(): number;
						public setOnSeekCompleteListener(listener: tv.danmaku.ijk.media.player.IMediaPlayer.OnSeekCompleteListener): void;
						public getAsyncStatisticBufForwards(): number;
						public setDisplay(sh: globalAndroid.view.SurfaceHolder): void;
						public _prepareAsync(): void;
						public setDataSource(fd: java.io.FileDescriptor): void;
						public getTrackInfo(): native.Array<tv.danmaku.ijk.media.player.misc.IjkTrackInfo>;
						public getVideoSarDen(): number;
						public release(): void;
						public getDataSource(): string;
						public stop(): void;
						public getMediaMeta(): globalAndroid.os.Bundle;
						public isLooping(): boolean;
						public prepareAsync(): void;
						public setDataSource(mediaDataSource: tv.danmaku.ijk.media.player.misc.IMediaDataSource): void;
						public getCacheStatisticFilePos(): number;
						public setCacheShare(share: number): void;
						public getAsyncStatisticBufBackwards(): number;
						public setWakeMode(context: globalAndroid.content.Context, mode: number): void;
						public setOnBufferingUpdateListener(listener: tv.danmaku.ijk.media.player.IMediaPlayer.OnBufferingUpdateListener): void;
						public setDataSource(context: globalAndroid.content.Context, uri: globalAndroid.net.Uri): void;
						public getVideoSarNum(): number;
						public constructor(libLoader: tv.danmaku.ijk.media.player.IjkLibLoader);
						public seekTo(long0: number): void;
						/** @deprecated */
						public setLogEnabled(enable: boolean): void;
						public getCurrentPosition(): number;
						public getVideoDecodeFramesPerSecond(): number;
						public setAudioStreamType(streamtype: number): void;
						public setSpeed(speed: number): void;
					}
					export module IjkMediaPlayer {
						export class DefaultMediaCodecSelector extends java.lang.Object implements tv.danmaku.ijk.media.player.IjkMediaPlayer.OnMediaCodecSelectListener {
							public static class: java.lang.Class<tv.danmaku.ijk.media.player.IjkMediaPlayer.DefaultMediaCodecSelector>;
							public static sInstance: tv.danmaku.ijk.media.player.IjkMediaPlayer.DefaultMediaCodecSelector;
							public constructor();
							public onMediaCodecSelect(mp: tv.danmaku.ijk.media.player.IMediaPlayer, mimeType: string, profile: number, level: number): string;
						}
						export class EventHandler extends globalAndroid.os.Handler {
							public static class: java.lang.Class<tv.danmaku.ijk.media.player.IjkMediaPlayer.EventHandler>;
							public constructor();
							public constructor(callback: globalAndroid.os.Handler.Callback);
							public constructor(mp: tv.danmaku.ijk.media.player.IjkMediaPlayer, looper: globalAndroid.os.Looper);
							public handleMessage(msg: globalAndroid.os.Message): void;
							public constructor(looper: globalAndroid.os.Looper);
							public constructor(looper: globalAndroid.os.Looper, callback: globalAndroid.os.Handler.Callback);
						}
						export class OnControlMessageListener extends java.lang.Object {
							public static class: java.lang.Class<tv.danmaku.ijk.media.player.IjkMediaPlayer.OnControlMessageListener>;
							/**
							 * Constructs a new instance of the tv.danmaku.ijk.media.player.IjkMediaPlayer$OnControlMessageListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onControlResolveSegmentUrl(int0: number): string;
							});
							public constructor();
							public onControlResolveSegmentUrl(int0: number): string;
						}
						export class OnMediaCodecSelectListener extends java.lang.Object {
							public static class: java.lang.Class<tv.danmaku.ijk.media.player.IjkMediaPlayer.OnMediaCodecSelectListener>;
							/**
							 * Constructs a new instance of the tv.danmaku.ijk.media.player.IjkMediaPlayer$OnMediaCodecSelectListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onMediaCodecSelect(iMediaPlayer0: tv.danmaku.ijk.media.player.IMediaPlayer, string1: string, int2: number, int3: number): string;
							});
							public constructor();
							public onMediaCodecSelect(iMediaPlayer0: tv.danmaku.ijk.media.player.IMediaPlayer, string1: string, int2: number, int3: number): string;
						}
						export class OnNativeInvokeListener extends java.lang.Object {
							public static class: java.lang.Class<tv.danmaku.ijk.media.player.IjkMediaPlayer.OnNativeInvokeListener>;
							/**
							 * Constructs a new instance of the tv.danmaku.ijk.media.player.IjkMediaPlayer$OnNativeInvokeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onNativeInvoke(int0: number, bundle1: globalAndroid.os.Bundle): boolean;
							});
							public constructor();
							public static ARG_URL: string;
							public static EVENT_WILL_HTTP_SEEK: number;
							public static ARG_ERROR: string;
							public static ARG_FD: string;
							public static ARG_RETRY_COUNTER: string;
							public static CTRL_WILL_HTTP_OPEN: number;
							public static ARG_PORT: string;
							public static EVENT_DID_HTTP_OPEN: number;
							public static CTRL_WILL_TCP_OPEN: number;
							public static ARG_FAMILIY: string;
							public static ARG_SEGMENT_INDEX: string;
							public static ARG_HTTP_CODE: string;
							public static CTRL_WILL_CONCAT_RESOLVE_SEGMENT: number;
							public static ARG_IP: string;
							public static CTRL_DID_TCP_OPEN: number;
							public static ARG_OFFSET: string;
							public static ARG_FILE_SIZE: string;
							public static CTRL_WILL_LIVE_OPEN: number;
							public static EVENT_WILL_HTTP_OPEN: number;
							public static EVENT_DID_HTTP_SEEK: number;
							public onNativeInvoke(int0: number, bundle1: globalAndroid.os.Bundle): boolean;
						}
					}
				}
			}
		}
	}
}

declare module tv {
	export module danmaku {
		export module ijk {
			export module media {
				export module player {
					export class IjkTimedText extends java.lang.Object {
						public static class: java.lang.Class<tv.danmaku.ijk.media.player.IjkTimedText>;
						public constructor(bounds: globalAndroid.graphics.Rect, text: string);
						public getBounds(): globalAndroid.graphics.Rect;
						public getText(): string;
					}
				}
			}
		}
	}
}

declare module tv {
	export module danmaku {
		export module ijk {
			export module media {
				export module player {
					export class MediaInfo extends java.lang.Object {
						public static class: java.lang.Class<tv.danmaku.ijk.media.player.MediaInfo>;
						public mAudioDecoder: string;
						public mAudioDecoderImpl: string;
						public mMediaPlayerName: string;
						public mMeta: tv.danmaku.ijk.media.player.IjkMediaMeta;
						public mVideoDecoder: string;
						public mVideoDecoderImpl: string;
						public constructor();
					}
				}
			}
		}
	}
}

declare module tv {
	export module danmaku {
		export module ijk {
			export module media {
				export module player {
					export class MediaPlayerProxy extends java.lang.Object implements tv.danmaku.ijk.media.player.IMediaPlayer {
						public static class: java.lang.Class<tv.danmaku.ijk.media.player.MediaPlayerProxy>;
						public mBackEndMediaPlayer: tv.danmaku.ijk.media.player.IMediaPlayer;
						/** @deprecated */
						public isPlayable(): boolean;
						public setOnInfoListener(listener: tv.danmaku.ijk.media.player.IMediaPlayer.OnInfoListener): void;
						public setOnPreparedListener(listener: tv.danmaku.ijk.media.player.IMediaPlayer.OnPreparedListener): void;
						public seekTo(msec: number): void;
						public isPlaying(): boolean;
						public pause(): void;
						public setOnCompletionListener(listener: tv.danmaku.ijk.media.player.IMediaPlayer.OnCompletionListener): void;
						public setScreenOnWhilePlaying(screenOn: boolean): void;
						public setVolume(leftVolume: number, rightVolume: number): void;
						public setDataSource(context: globalAndroid.content.Context, uri: globalAndroid.net.Uri, headers: java.util.Map<string,string>): void;
						public setSurface(surface: globalAndroid.view.Surface): void;
						/** @deprecated */
						public setWakeMode(context: globalAndroid.content.Context, mode: number): void;
						public getVideoWidth(): number;
						public setOnTimedTextListener(listener: tv.danmaku.ijk.media.player.IMediaPlayer.OnTimedTextListener): void;
						public setOnErrorListener(listener: tv.danmaku.ijk.media.player.IMediaPlayer.OnErrorListener): void;
						public getMediaInfo(): tv.danmaku.ijk.media.player.MediaInfo;
						public setDataSource(path: string): void;
						public setLogEnabled(enable: boolean): void;
						public getAudioSessionId(): number;
						public getVideoHeight(): number;
						public isPlayable(): boolean;
						public getTrackInfo(): native.Array<tv.danmaku.ijk.media.player.misc.ITrackInfo>;
						public setKeepInBackground(keepInBackground: boolean): void;
						public getDuration(): number;
						public setOnSeekCompleteListener(listener: tv.danmaku.ijk.media.player.IMediaPlayer.OnSeekCompleteListener): void;
						public constructor(backEndMediaPlayer: tv.danmaku.ijk.media.player.IMediaPlayer);
						public setDisplay(sh: globalAndroid.view.SurfaceHolder): void;
						public setOnVideoSizeChangedListener(listener: tv.danmaku.ijk.media.player.IMediaPlayer.OnVideoSizeChangedListener): void;
						public setDataSource(fd: java.io.FileDescriptor): void;
						public getVideoSarDen(): number;
						public release(): void;
						public getDataSource(): string;
						/** @deprecated */
						public setKeepInBackground(keepInBackground: boolean): void;
						public stop(): void;
						public isLooping(): boolean;
						public prepareAsync(): void;
						public setDataSource(mediaDataSource: tv.danmaku.ijk.media.player.misc.IMediaDataSource): void;
						public start(): void;
						public setWakeMode(context: globalAndroid.content.Context, mode: number): void;
						public setOnBufferingUpdateListener(listener: tv.danmaku.ijk.media.player.IMediaPlayer.OnBufferingUpdateListener): void;
						public setDataSource(context: globalAndroid.content.Context, uri: globalAndroid.net.Uri): void;
						public getVideoSarNum(): number;
						public getInternalMediaPlayer(): tv.danmaku.ijk.media.player.IMediaPlayer;
						public reset(): void;
						/** @deprecated */
						public setLogEnabled(enable: boolean): void;
						public setLooping(looping: boolean): void;
						public getCurrentPosition(): number;
						public setAudioStreamType(streamtype: number): void;
					}
				}
			}
		}
	}
}

declare module tv {
	export module danmaku {
		export module ijk {
			export module media {
				export module player {
					export class TextureMediaPlayer extends tv.danmaku.ijk.media.player.MediaPlayerProxy implements tv.danmaku.ijk.media.player.IMediaPlayer, tv.danmaku.ijk.media.player.ISurfaceTextureHolder {
						public static class: java.lang.Class<tv.danmaku.ijk.media.player.TextureMediaPlayer>;
						public seekTo(msec: number): void;
						public pause(): void;
						public setScreenOnWhilePlaying(screenOn: boolean): void;
						public releaseSurfaceTexture(): void;
						public setDataSource(context: globalAndroid.content.Context, uri: globalAndroid.net.Uri, headers: java.util.Map<string,string>): void;
						public setSurface(surface: globalAndroid.view.Surface): void;
						/** @deprecated */
						public setWakeMode(context: globalAndroid.content.Context, mode: number): void;
						public setOnTimedTextListener(listener: tv.danmaku.ijk.media.player.IMediaPlayer.OnTimedTextListener): void;
						public setOnErrorListener(listener: tv.danmaku.ijk.media.player.IMediaPlayer.OnErrorListener): void;
						public setDataSource(path: string): void;
						public getVideoHeight(): number;
						public getTrackInfo(): native.Array<tv.danmaku.ijk.media.player.misc.ITrackInfo>;
						public setKeepInBackground(keepInBackground: boolean): void;
						public setSurfaceTexture(surfaceTexture: globalAndroid.graphics.SurfaceTexture): void;
						public setOnVideoSizeChangedListener(listener: tv.danmaku.ijk.media.player.IMediaPlayer.OnVideoSizeChangedListener): void;
						/** @deprecated */
						public setKeepInBackground(keepInBackground: boolean): void;
						public start(): void;
						public reset(): void;
						public setLooping(looping: boolean): void;
						/** @deprecated */
						public isPlayable(): boolean;
						public setOnInfoListener(listener: tv.danmaku.ijk.media.player.IMediaPlayer.OnInfoListener): void;
						public setOnPreparedListener(listener: tv.danmaku.ijk.media.player.IMediaPlayer.OnPreparedListener): void;
						public isPlaying(): boolean;
						public setOnCompletionListener(listener: tv.danmaku.ijk.media.player.IMediaPlayer.OnCompletionListener): void;
						public setVolume(leftVolume: number, rightVolume: number): void;
						public getVideoWidth(): number;
						public getMediaInfo(): tv.danmaku.ijk.media.player.MediaInfo;
						public setLogEnabled(enable: boolean): void;
						public getAudioSessionId(): number;
						public isPlayable(): boolean;
						public getDuration(): number;
						public setOnSeekCompleteListener(listener: tv.danmaku.ijk.media.player.IMediaPlayer.OnSeekCompleteListener): void;
						public constructor(backEndMediaPlayer: tv.danmaku.ijk.media.player.IMediaPlayer);
						public setDisplay(sh: globalAndroid.view.SurfaceHolder): void;
						public setSurfaceTextureHost(surfaceTextureHost: tv.danmaku.ijk.media.player.ISurfaceTextureHost): void;
						public setDataSource(fd: java.io.FileDescriptor): void;
						public getVideoSarDen(): number;
						public release(): void;
						public getDataSource(): string;
						public stop(): void;
						public isLooping(): boolean;
						public prepareAsync(): void;
						public setDataSource(mediaDataSource: tv.danmaku.ijk.media.player.misc.IMediaDataSource): void;
						public getSurfaceTexture(): globalAndroid.graphics.SurfaceTexture;
						public setWakeMode(context: globalAndroid.content.Context, mode: number): void;
						public setOnBufferingUpdateListener(listener: tv.danmaku.ijk.media.player.IMediaPlayer.OnBufferingUpdateListener): void;
						public setDataSource(context: globalAndroid.content.Context, uri: globalAndroid.net.Uri): void;
						public getVideoSarNum(): number;
						/** @deprecated */
						public setLogEnabled(enable: boolean): void;
						public getCurrentPosition(): number;
						public setAudioStreamType(streamtype: number): void;
					}
				}
			}
		}
	}
}

declare module tv {
	export module danmaku {
		export module ijk {
			export module media {
				export module player {
					export module annotations {
						export class AccessedByNative extends java.lang.Object implements java.lang.annotation.Annotation {
							public static class: java.lang.Class<tv.danmaku.ijk.media.player.annotations.AccessedByNative>;
							/**
							 * Constructs a new instance of the tv.danmaku.ijk.media.player.annotations.AccessedByNative interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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

declare module tv {
	export module danmaku {
		export module ijk {
			export module media {
				export module player {
					export module annotations {
						export class CalledByNative extends java.lang.Object implements java.lang.annotation.Annotation {
							public static class: java.lang.Class<tv.danmaku.ijk.media.player.annotations.CalledByNative>;
							/**
							 * Constructs a new instance of the tv.danmaku.ijk.media.player.annotations.CalledByNative interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								value(): string;
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
							public value(): string;
						}
					}
				}
			}
		}
	}
}

declare module tv {
	export module danmaku {
		export module ijk {
			export module media {
				export module player {
					export module exceptions {
						export class IjkMediaException extends java.lang.Exception {
							public static class: java.lang.Class<tv.danmaku.ijk.media.player.exceptions.IjkMediaException>;
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

declare module tv {
	export module danmaku {
		export module ijk {
			export module media {
				export module player {
					export module ffmpeg {
						export class FFmpegApi extends java.lang.Object {
							public static class: java.lang.Class<tv.danmaku.ijk.media.player.ffmpeg.FFmpegApi>;
							public constructor();
							public static av_base64_encode(bytes0: native.Array<number>): string;
						}
					}
				}
			}
		}
	}
}

declare module tv {
	export module danmaku {
		export module ijk {
			export module media {
				export module player {
					export module misc {
						export class AndroidMediaFormat extends java.lang.Object implements tv.danmaku.ijk.media.player.misc.IMediaFormat {
							public static class: java.lang.Class<tv.danmaku.ijk.media.player.misc.AndroidMediaFormat>;
							public constructor(mediaFormat: globalAndroid.media.MediaFormat);
							public getInteger(name: string): number;
							public toString(): string;
							public getString(name: string): string;
						}
					}
				}
			}
		}
	}
}

declare module tv {
	export module danmaku {
		export module ijk {
			export module media {
				export module player {
					export module misc {
						export class AndroidTrackInfo extends java.lang.Object implements tv.danmaku.ijk.media.player.misc.ITrackInfo {
							public static class: java.lang.Class<tv.danmaku.ijk.media.player.misc.AndroidTrackInfo>;
							public getFormat(): tv.danmaku.ijk.media.player.misc.IMediaFormat;
							public getLanguage(): string;
							public static fromMediaPlayer(mp: globalAndroid.media.MediaPlayer): native.Array<tv.danmaku.ijk.media.player.misc.AndroidTrackInfo>;
							public getInfoInline(): string;
							public toString(): string;
							public getTrackType(): number;
						}
					}
				}
			}
		}
	}
}

declare module tv {
	export module danmaku {
		export module ijk {
			export module media {
				export module player {
					export module misc {
						export class IAndroidIO extends java.lang.Object {
							public static class: java.lang.Class<tv.danmaku.ijk.media.player.misc.IAndroidIO>;
							/**
							 * Constructs a new instance of the tv.danmaku.ijk.media.player.misc.IAndroidIO interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								open(string0: string): number;
								read(bytes0: native.Array<number>, int1: number): number;
								seek(long0: number, int1: number): number;
								close(): number;
							});
							public constructor();
							public seek(long0: number, int1: number): number;
							public close(): number;
							public open(string0: string): number;
							public read(bytes0: native.Array<number>, int1: number): number;
						}
					}
				}
			}
		}
	}
}

declare module tv {
	export module danmaku {
		export module ijk {
			export module media {
				export module player {
					export module misc {
						export class IMediaDataSource extends java.lang.Object {
							public static class: java.lang.Class<tv.danmaku.ijk.media.player.misc.IMediaDataSource>;
							/**
							 * Constructs a new instance of the tv.danmaku.ijk.media.player.misc.IMediaDataSource interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								readAt(long0: number, bytes1: native.Array<number>, int2: number, int3: number): number;
								getSize(): number;
								close(): void;
							});
							public constructor();
							public close(): void;
							public readAt(long0: number, bytes1: native.Array<number>, int2: number, int3: number): number;
							public getSize(): number;
						}
					}
				}
			}
		}
	}
}

declare module tv {
	export module danmaku {
		export module ijk {
			export module media {
				export module player {
					export module misc {
						export class IMediaFormat extends java.lang.Object {
							public static class: java.lang.Class<tv.danmaku.ijk.media.player.misc.IMediaFormat>;
							/**
							 * Constructs a new instance of the tv.danmaku.ijk.media.player.misc.IMediaFormat interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getString(string0: string): string;
								getInteger(string0: string): number;
							});
							public constructor();
							public static KEY_MIME: string;
							public static KEY_WIDTH: string;
							public static KEY_HEIGHT: string;
							public getString(string0: string): string;
							public getInteger(string0: string): number;
						}
					}
				}
			}
		}
	}
}

declare module tv {
	export module danmaku {
		export module ijk {
			export module media {
				export module player {
					export module misc {
						export class ITrackInfo extends java.lang.Object {
							public static class: java.lang.Class<tv.danmaku.ijk.media.player.misc.ITrackInfo>;
							/**
							 * Constructs a new instance of the tv.danmaku.ijk.media.player.misc.ITrackInfo interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getFormat(): tv.danmaku.ijk.media.player.misc.IMediaFormat;
								getLanguage(): string;
								getTrackType(): number;
								getInfoInline(): string;
							});
							public constructor();
							public static MEDIA_TRACK_TYPE_VIDEO: number;
							public static MEDIA_TRACK_TYPE_AUDIO: number;
							public static MEDIA_TRACK_TYPE_METADATA: number;
							public static MEDIA_TRACK_TYPE_UNKNOWN: number;
							public static MEDIA_TRACK_TYPE_SUBTITLE: number;
							public static MEDIA_TRACK_TYPE_TIMEDTEXT: number;
							public getFormat(): tv.danmaku.ijk.media.player.misc.IMediaFormat;
							public getLanguage(): string;
							public getInfoInline(): string;
							public getTrackType(): number;
						}
					}
				}
			}
		}
	}
}

declare module tv {
	export module danmaku {
		export module ijk {
			export module media {
				export module player {
					export module misc {
						export class IjkMediaFormat extends java.lang.Object implements tv.danmaku.ijk.media.player.misc.IMediaFormat {
							public static class: java.lang.Class<tv.danmaku.ijk.media.player.misc.IjkMediaFormat>;
							public static CODEC_NAME_H264: string;
							public static KEY_IJK_BIT_RATE_UI: string;
							public static KEY_IJK_CHANNEL_UI: string;
							public static KEY_IJK_CODEC_LONG_NAME_UI: string;
							public static KEY_IJK_CODEC_NAME_UI: string;
							public static KEY_IJK_CODEC_PIXEL_FORMAT_UI: string;
							public static KEY_IJK_CODEC_PROFILE_LEVEL_UI: string;
							public static KEY_IJK_FRAME_RATE_UI: string;
							public static KEY_IJK_RESOLUTION_UI: string;
							public static KEY_IJK_SAMPLE_RATE_UI: string;
							public mMediaFormat: tv.danmaku.ijk.media.player.IjkMediaMeta.IjkStreamMeta;
							public getInteger(name: string): number;
							public constructor(streamMeta: tv.danmaku.ijk.media.player.IjkMediaMeta.IjkStreamMeta);
							public getString(name: string): string;
						}
						export module IjkMediaFormat {
							export abstract class Formatter extends java.lang.Object {
								public static class: java.lang.Class<tv.danmaku.ijk.media.player.misc.IjkMediaFormat.Formatter>;
								public getDefaultString(): string;
								public format(mediaFormat: tv.danmaku.ijk.media.player.misc.IjkMediaFormat): string;
								public doFormat(ijkMediaFormat0: tv.danmaku.ijk.media.player.misc.IjkMediaFormat): string;
							}
						}
					}
				}
			}
		}
	}
}

declare module tv {
	export module danmaku {
		export module ijk {
			export module media {
				export module player {
					export module misc {
						export class IjkTrackInfo extends java.lang.Object implements tv.danmaku.ijk.media.player.misc.ITrackInfo {
							public static class: java.lang.Class<tv.danmaku.ijk.media.player.misc.IjkTrackInfo>;
							public getFormat(): tv.danmaku.ijk.media.player.misc.IMediaFormat;
							public getLanguage(): string;
							public setMediaMeta(streamMeta: tv.danmaku.ijk.media.player.IjkMediaMeta.IjkStreamMeta): void;
							public getInfoInline(): string;
							public setTrackType(trackType: number): void;
							public constructor(streamMeta: tv.danmaku.ijk.media.player.IjkMediaMeta.IjkStreamMeta);
							public toString(): string;
							public getTrackType(): number;
						}
					}
				}
			}
		}
	}
}

declare module tv {
	export module danmaku {
		export module ijk {
			export module media {
				export module player {
					export module pragma {
						export class DebugLog extends java.lang.Object {
							public static class: java.lang.Class<tv.danmaku.ijk.media.player.pragma.DebugLog>;
							public static ENABLE_DEBUG: boolean;
							public static ENABLE_ERROR: boolean;
							public static ENABLE_INFO: boolean;
							public static ENABLE_VERBOSE: boolean;
							public static ENABLE_WARN: boolean;
							public constructor();
							public static wfmt(tag: string, fmt: string, objects2: native.Array<any>): void;
							public static printCause(e: java.lang.Throwable): void;
							public static dfmt(tag: string, fmt: string, objects2: native.Array<any>): void;
							public static d(tag: string, msg: string, tr: java.lang.Throwable): void;
							public static printStackTrace(e: java.lang.Throwable): void;
							public static ifmt(tag: string, fmt: string, objects2: native.Array<any>): void;
							public static d(tag: string, msg: string): void;
							public static e(tag: string, msg: string): void;
							public static vfmt(tag: string, fmt: string, objects2: native.Array<any>): void;
							public static w(tag: string, msg: string, tr: java.lang.Throwable): void;
							public static v(tag: string, msg: string): void;
							public static w(tag: string, msg: string): void;
							public static i(tag: string, msg: string, tr: java.lang.Throwable): void;
							public static efmt(tag: string, fmt: string, objects2: native.Array<any>): void;
							public static i(tag: string, msg: string): void;
							public static v(tag: string, msg: string, tr: java.lang.Throwable): void;
							public static e(tag: string, msg: string, tr: java.lang.Throwable): void;
						}
					}
				}
			}
		}
	}
}

declare module tv {
	export module danmaku {
		export module ijk {
			export module media {
				export module player {
					export module pragma {
						export class Pragma extends java.lang.Object {
							public static class: java.lang.Class<tv.danmaku.ijk.media.player.pragma.Pragma>;
							public static ENABLE_VERBOSE: boolean;
							public constructor();
						}
					}
				}
			}
		}
	}
}

//Generics information:

