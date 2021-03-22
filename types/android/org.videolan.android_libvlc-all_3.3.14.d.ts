declare module org {
	export module videolan {
		export class BuildConfig extends java.lang.Object {
			public static class: java.lang.Class<org.videolan.BuildConfig>;
			public static DEBUG: boolean;
			public static LIBRARY_PACKAGE_NAME: string;
			public static BUILD_TYPE: string;
			public constructor();
		}
	}
}

declare module org {
	export module videolan {
		export module libvlc {
			export class AWindow extends java.lang.Object implements org.videolan.libvlc.interfaces.IVLCVout {
				public static class: java.lang.Class<org.videolan.libvlc.AWindow>;
				public attachViews(): void;
				public setVideoView(videoSurfaceView: globalAndroid.view.SurfaceView): void;
				public constructor(surfaceCallback: org.videolan.libvlc.AWindow.SurfaceCallback);
				public setVideoView(videoTextureView: globalAndroid.view.TextureView): void;
				public setSubtitlesSurface(subtitlesSurfaceTexture: globalAndroid.graphics.SurfaceTexture): void;
				public detachViews(): void;
				public setSubtitlesSurface(subtitlesSurface: globalAndroid.view.Surface, surfaceHolder: globalAndroid.view.SurfaceHolder): void;
				public setWindowSize(width: number, height: number): void;
				public setSubtitlesView(subtitlesTextureView: globalAndroid.view.TextureView): void;
				public setVideoSurface(videoSurface: globalAndroid.view.Surface, surfaceHolder: globalAndroid.view.SurfaceHolder): void;
				public setVideoSurface(videoSurfaceTexture: globalAndroid.graphics.SurfaceTexture): void;
				public attachViews(onNewVideoLayoutListener: org.videolan.libvlc.interfaces.IVLCVout.OnNewVideoLayoutListener): void;
				public areViewsAttached(): boolean;
				public addCallback(callback: org.videolan.libvlc.interfaces.IVLCVout.Callback): void;
				public removeCallback(callback: org.videolan.libvlc.interfaces.IVLCVout.Callback): void;
				public sendMouseEvent(action: number, button: number, x: number, y: number): void;
				public setSubtitlesView(subtitlesSurfaceView: globalAndroid.view.SurfaceView): void;
			}
			export module AWindow {
				export class NativeLock extends java.lang.Object {
					public static class: java.lang.Class<org.videolan.libvlc.AWindow.NativeLock>;
				}
				export class SurfaceCallback extends java.lang.Object {
					public static class: java.lang.Class<org.videolan.libvlc.AWindow.SurfaceCallback>;
					/**
					 * Constructs a new instance of the org.videolan.libvlc.AWindow() when extending the interface class.
					 */
					public constructor(implementation: {
						onSurfacesCreated(aWindow0: org.videolan.libvlc.AWindow): void;
						onSurfacesDestroyed(aWindow0: org.videolan.libvlc.AWindow): void;
					});
					public constructor();
					public onSurfacesCreated(aWindow0: org.videolan.libvlc.AWindow): void;
					public onSurfacesDestroyed(aWindow0: org.videolan.libvlc.AWindow): void;
				}
				export class SurfaceHelper extends java.lang.Object {
					public static class: java.lang.Class<org.videolan.libvlc.AWindow.SurfaceHelper>;
					public isReady(): boolean;
					public attach(): void;
					public release(): void;
					public getSurface(): globalAndroid.view.Surface;
				}
				export class SurfaceTextureThread extends java.lang.Object implements java.lang.Runnable, globalAndroid.graphics.SurfaceTexture.OnFrameAvailableListener {
					public static class: java.lang.Class<org.videolan.libvlc.AWindow.SurfaceTextureThread>;
					public run(): void;
					public onFrameAvailable(surfaceTexture: globalAndroid.graphics.SurfaceTexture): void;
				}
			}
		}
	}
}

declare module org {
	export module videolan {
		export module libvlc {
			export abstract class Dialog extends java.lang.Object {
				public static class: java.lang.Class<org.videolan.libvlc.Dialog>;
				public static TYPE_ERROR: number;
				public static TYPE_LOGIN: number;
				public static TYPE_QUESTION: number;
				public static TYPE_PROGRESS: number;
				public mType: number;
				public mText: string;
				public constructor(type: number, title: string, text: string);
				public getType(): number;
				public setContext(context: any): void;
				public static setCallbacks(ILibVLC: org.videolan.libvlc.interfaces.ILibVLC, callbacks: org.videolan.libvlc.Dialog.Callbacks): void;
				public dismiss(): void;
				public getTitle(): string;
				public getContext(): any;
				public getText(): string;
			}
			export module Dialog {
				export class Callbacks extends java.lang.Object {
					public static class: java.lang.Class<org.videolan.libvlc.Dialog.Callbacks>;
					/**
					 * Constructs a new instance of the org.videolan.libvlc.Dialog() when extending the interface class.
					 */
					public constructor(implementation: {
						onDisplay(errorMessage0: org.videolan.libvlc.Dialog.ErrorMessage): void;
						onDisplay(loginDialog0: org.videolan.libvlc.Dialog.LoginDialog): void;
						onDisplay(questionDialog0: org.videolan.libvlc.Dialog.QuestionDialog): void;
						onDisplay(progressDialog0: org.videolan.libvlc.Dialog.ProgressDialog): void;
						onCanceled(dialog0: org.videolan.libvlc.Dialog): void;
						onProgressUpdate(progressDialog0: org.videolan.libvlc.Dialog.ProgressDialog): void;
					});
					public constructor();
					public onProgressUpdate(progressDialog0: org.videolan.libvlc.Dialog.ProgressDialog): void;
					public onDisplay(errorMessage0: org.videolan.libvlc.Dialog.ErrorMessage): void;
					public onDisplay(progressDialog0: org.videolan.libvlc.Dialog.ProgressDialog): void;
					public onDisplay(loginDialog0: org.videolan.libvlc.Dialog.LoginDialog): void;
					public onDisplay(questionDialog0: org.videolan.libvlc.Dialog.QuestionDialog): void;
					public onCanceled(dialog0: org.videolan.libvlc.Dialog): void;
				}
				export class ErrorMessage extends org.videolan.libvlc.Dialog {
					public static class: java.lang.Class<org.videolan.libvlc.Dialog.ErrorMessage>;
				}
				export abstract class IdDialog extends org.videolan.libvlc.Dialog {
					public static class: java.lang.Class<org.videolan.libvlc.Dialog.IdDialog>;
					public mId: number;
					public constructor(id: number, type: number, title: string, text: string);
					public dismiss(): void;
					public constructor(type: number, title: string, text: string);
				}
				export class LoginDialog extends org.videolan.libvlc.Dialog.IdDialog {
					public static class: java.lang.Class<org.videolan.libvlc.Dialog.LoginDialog>;
					public getDefaultUsername(): string;
					public asksStore(): boolean;
					public postLogin(username: string, password: string, store: boolean): void;
				}
				export class ProgressDialog extends org.videolan.libvlc.Dialog.IdDialog {
					public static class: java.lang.Class<org.videolan.libvlc.Dialog.ProgressDialog>;
					public getCancelText(): string;
					public isIndeterminate(): boolean;
					public isCancelable(): boolean;
					public getPosition(): number;
				}
				export class QuestionDialog extends org.videolan.libvlc.Dialog.IdDialog {
					public static class: java.lang.Class<org.videolan.libvlc.Dialog.QuestionDialog>;
					public static TYPE_NORMAL: number;
					public static TYPE_WARNING: number;
					public static TYPE_ERROR: number;
					public getQuestionType(): number;
					public getAction1Text(): string;
					public getCancelText(): string;
					public postAction(action: number): void;
					public getAction2Text(): string;
				}
			}
		}
	}
}

declare module org {
	export module videolan {
		export module libvlc {
			export class FactoryManager extends java.lang.Object {
				public static class: java.lang.Class<org.videolan.libvlc.FactoryManager>;
				public static registerFactory(factoryId: string, factory: org.videolan.libvlc.interfaces.IComponentFactory): void;
				public static getFactory(factoryId: string): org.videolan.libvlc.interfaces.IComponentFactory;
				public constructor();
			}
		}
	}
}

declare module org {
	export module videolan {
		export module libvlc {
			export class LibVLC extends org.videolan.libvlc.VLCObject<org.videolan.libvlc.interfaces.ILibVLC.Event> implements org.videolan.libvlc.interfaces.ILibVLC  {
				public static class: java.lang.Class<org.videolan.libvlc.LibVLC>;
				public release(): void;
				public static loadLibraries(): void;
				public constructor(context: globalAndroid.content.Context);
				public static version(): string;
				public getAppContext(): globalAndroid.content.Context;
				public static compiler(): string;
				public getLibVLC(): org.videolan.libvlc.interfaces.ILibVLC;
				public isReleased(): boolean;
				public onEventNative(eventType: number, long1: number, long2: number, float3: number, string4: string): org.videolan.libvlc.interfaces.ILibVLC.Event;
				public constructor();
				public static majorVersion(): number;
				public onReleaseNative(): void;
				public static changeset(): string;
				public retain(): boolean;
				public onEventNative(int0: number, long1: number, long2: number, float3: number, string4: string): any;
				public setUserAgent(name: string, http: string): void;
				public constructor(context: globalAndroid.content.Context, options: java.util.List<string>);
				public constructor(libvlc: org.videolan.libvlc.interfaces.ILibVLC);
				public constructor(parent: org.videolan.libvlc.interfaces.IVLCObject<any>);
			}
			export module LibVLC {
				export class Event extends org.videolan.libvlc.interfaces.AbstractVLCEvent {
					public static class: java.lang.Class<org.videolan.libvlc.LibVLC.Event>;
					public constructor(type: number);
					public constructor(type: number, long1: number);
					public constructor(type: number, long1: number, string2: string);
					public constructor(type: number, float1: number);
					public constructor(type: number, long1: number, long2: number);
				}
			}
		}
	}
}

declare module org {
	export module videolan {
		export module libvlc {
			export class LibVLCFactory extends java.lang.Object implements org.videolan.libvlc.interfaces.ILibVLCFactory {
				public static class: java.lang.Class<org.videolan.libvlc.LibVLCFactory>;
				public getFromOptions(context: globalAndroid.content.Context, options: java.util.List<string>): org.videolan.libvlc.interfaces.ILibVLC;
				public getFromContext(context: globalAndroid.content.Context): org.videolan.libvlc.interfaces.ILibVLC;
				public constructor();
			}
		}
	}
}

declare module org {
	export module videolan {
		export module libvlc {
			export class Media extends org.videolan.libvlc.VLCObject<org.videolan.libvlc.interfaces.IMedia.Event> implements org.videolan.libvlc.interfaces.IMedia  {
				public static class: java.lang.Class<org.videolan.libvlc.Media>;
				public setDefaultMediaPlayerOptions(): void;
				public getMeta(id: number): string;
				public getType(): number;
				public addOption(option: string): void;
				public getLibVLC(): org.videolan.libvlc.interfaces.ILibVLC;
				public getDuration(): number;
				public getSlaves(): native.Array<org.videolan.libvlc.interfaces.IMedia.Slave>;
				public constructor();
				public constructor(ILibVLC: org.videolan.libvlc.interfaces.ILibVLC, path: string);
				public onReleaseNative(): void;
				public getUri(): globalAndroid.net.Uri;
				public setHWDecoderEnabled(enabled: boolean, force: boolean): void;
				public parseAsync(flags: number): boolean;
				public parse(): boolean;
				public constructor(libvlc: org.videolan.libvlc.interfaces.ILibVLC);
				public addSlave(slave: org.videolan.libvlc.interfaces.IMedia.Slave): void;
				public setEventListener(listener: org.videolan.libvlc.interfaces.AbstractVLCEvent.Listener<any>, handler: globalAndroid.os.Handler): void;
				public constructor(parent: org.videolan.libvlc.interfaces.IVLCObject<any>);
				public getTrack(idx: number): org.videolan.libvlc.interfaces.IMedia.Track;
				public constructor(ILibVLC: org.videolan.libvlc.interfaces.ILibVLC, uri: globalAndroid.net.Uri);
				public constructor(ILibVLC: org.videolan.libvlc.interfaces.ILibVLC, afd: globalAndroid.content.res.AssetFileDescriptor);
				public setEventListener(listener: org.videolan.libvlc.interfaces.IMedia.EventListener): void;
				public subItems(): org.videolan.libvlc.interfaces.IMediaList;
				public onEventNative(eventType: number, long1: number, long2: number, float3: number, string4: string): org.videolan.libvlc.interfaces.IMedia.Event;
				public release(): void;
				public clearSlaves(): void;
				public isReleased(): boolean;
				public isParsed(): boolean;
				public getStats(): org.videolan.libvlc.interfaces.IMedia.Stats;
				public getTrackCount(): number;
				public parseAsync(): boolean;
				public constructor(ml: org.videolan.libvlc.interfaces.IMediaList, index: number);
				public constructor(ILibVLC: org.videolan.libvlc.interfaces.ILibVLC, fd: java.io.FileDescriptor);
				public retain(): boolean;
				public onEventNative(int0: number, long1: number, long2: number, float3: number, string4: string): any;
				public getState(): number;
				public parseAsync(flags: number, timeout: number): boolean;
				public setEventListener(listener: org.videolan.libvlc.interfaces.AbstractVLCEvent.Listener<any>): void;
				public parse(flags: number): boolean;
				public subItems(): org.videolan.libvlc.MediaList;
			}
		}
	}
}

declare module org {
	export module videolan {
		export module libvlc {
			export class MediaDiscoverer extends org.videolan.libvlc.VLCObject<org.videolan.libvlc.MediaDiscoverer.Event> {
				public static class: java.lang.Class<org.videolan.libvlc.MediaDiscoverer>;
				public release(): void;
				public getLibVLC(): org.videolan.libvlc.interfaces.ILibVLC;
				public static list(ILibVLC: org.videolan.libvlc.interfaces.ILibVLC, category: number): native.Array<org.videolan.libvlc.MediaDiscoverer.Description>;
				public constructor(ILibVLC: org.videolan.libvlc.interfaces.ILibVLC, name: string);
				public isReleased(): boolean;
				public getMediaList(): org.videolan.libvlc.MediaList;
				public constructor();
				public onReleaseNative(): void;
				public stop(): void;
				public setEventListener(listener: org.videolan.libvlc.MediaDiscoverer.EventListener): void;
				public retain(): boolean;
				public start(): boolean;
				public onEventNative(int0: number, long1: number, long2: number, float3: number, string4: string): any;
				public onEventNative(eventType: number, long1: number, long2: number, float3: number, string4: string): org.videolan.libvlc.MediaDiscoverer.Event;
				public setEventListener(listener: org.videolan.libvlc.interfaces.AbstractVLCEvent.Listener<any>): void;
				public constructor(libvlc: org.videolan.libvlc.interfaces.ILibVLC);
				public setEventListener(listener: org.videolan.libvlc.interfaces.AbstractVLCEvent.Listener<any>, handler: globalAndroid.os.Handler): void;
				public constructor(parent: org.videolan.libvlc.interfaces.IVLCObject<any>);
			}
			export module MediaDiscoverer {
				export class Description extends java.lang.Object {
					public static class: java.lang.Class<org.videolan.libvlc.MediaDiscoverer.Description>;
					public name: string;
					public longName: string;
					public category: number;
				}
				export module Description {
					export class Category extends java.lang.Object {
						public static class: java.lang.Class<org.videolan.libvlc.MediaDiscoverer.Description.Category>;
						public static Devices: number;
						public static Lan: number;
						public static Podcasts: number;
						public static LocalDirs: number;
						public constructor();
					}
				}
				export class Event extends org.videolan.libvlc.interfaces.AbstractVLCEvent {
					public static class: java.lang.Class<org.videolan.libvlc.MediaDiscoverer.Event>;
					public static Started: number;
					public static Ended: number;
					public constructor(type: number);
					public constructor(type: number, long1: number);
					public constructor(type: number, long1: number, string2: string);
					public constructor(type: number, float1: number);
					public constructor(type: number, long1: number, long2: number);
				}
				export class EventListener extends org.videolan.libvlc.interfaces.AbstractVLCEvent.Listener<org.videolan.libvlc.MediaDiscoverer.Event> {
					public static class: java.lang.Class<org.videolan.libvlc.MediaDiscoverer.EventListener>;
					/**
					 * Constructs a new instance of the org.videolan.libvlc.MediaDiscoverer() when extending the interface class.
					 */
					public constructor(implementation: {
						onEvent(abstractVLCEvent0: any): void;
					});
					public constructor();
					public onEvent(abstractVLCEvent0: any): void;
				}
			}
		}
	}
}

declare module org {
	export module videolan {
		export module libvlc {
			export class MediaFactory extends java.lang.Object implements org.videolan.libvlc.interfaces.IMediaFactory {
				public static class: java.lang.Class<org.videolan.libvlc.MediaFactory>;
				public getFromFileDescriptor(ILibVLC: org.videolan.libvlc.interfaces.ILibVLC, fd: java.io.FileDescriptor): org.videolan.libvlc.interfaces.IMedia;
				public getFromUri(ILibVLC: org.videolan.libvlc.interfaces.ILibVLC, uri: globalAndroid.net.Uri): org.videolan.libvlc.interfaces.IMedia;
				public constructor();
				public getFromLocalPath(ILibVLC: org.videolan.libvlc.interfaces.ILibVLC, path: string): org.videolan.libvlc.interfaces.IMedia;
				public getFromAssetFileDescriptor(ILibVLC: org.videolan.libvlc.interfaces.ILibVLC, assetFileDescriptor: globalAndroid.content.res.AssetFileDescriptor): org.videolan.libvlc.interfaces.IMedia;
			}
		}
	}
}

declare module org {
	export module videolan {
		export module libvlc {
			export class MediaList extends org.videolan.libvlc.VLCObject<org.videolan.libvlc.interfaces.IMediaList.Event> implements org.videolan.libvlc.interfaces.IMediaList  {
				public static class: java.lang.Class<org.videolan.libvlc.MediaList>;
				public release(): void;
				public getLibVLC(): org.videolan.libvlc.interfaces.ILibVLC;
				public onEventNative(eventType: number, long1: number, long2: number, float3: number, string4: string): org.videolan.libvlc.interfaces.IMediaList.Event;
				public setEventListener(listener: org.videolan.libvlc.interfaces.IMediaList.EventListener, handler: globalAndroid.os.Handler): void;
				public getCount(): number;
				public isReleased(): boolean;
				public constructor(ILibVLC: org.videolan.libvlc.interfaces.ILibVLC);
				public constructor();
				public onReleaseNative(): void;
				public constructor(m: org.videolan.libvlc.interfaces.IMedia);
				public retain(): boolean;
				public onEventNative(int0: number, long1: number, long2: number, float3: number, string4: string): any;
				public setEventListener(listener: org.videolan.libvlc.interfaces.AbstractVLCEvent.Listener<any>): void;
				public constructor(libvlc: org.videolan.libvlc.interfaces.ILibVLC);
				public setEventListener(listener: org.videolan.libvlc.interfaces.AbstractVLCEvent.Listener<any>, handler: globalAndroid.os.Handler): void;
				public constructor(parent: org.videolan.libvlc.interfaces.IVLCObject<any>);
				public constructor(md: org.videolan.libvlc.MediaDiscoverer);
				public isLocked(): boolean;
				public getMediaAt(index: number): org.videolan.libvlc.interfaces.IMedia;
			}
		}
	}
}

declare module org {
	export module videolan {
		export module libvlc {
			export class MediaPlayer extends org.videolan.libvlc.VLCObject<org.videolan.libvlc.MediaPlayer.Event> {
				public static class: java.lang.Class<org.videolan.libvlc.MediaPlayer>;
				public static SURFACE_SCALES_COUNT: number;
				public getAspectRatio(): string;
				public hasMedia(): boolean;
				public record(directory: string): boolean;
				public getChapter(): number;
				public setAudioOutput(aout: string): boolean;
				public getAudioTrack(): number;
				public getLibVLC(): org.videolan.libvlc.interfaces.ILibVLC;
				public setAspectRatio(aspect: string): void;
				public getRate(): number;
				public constructor();
				public setMedia(media: org.videolan.libvlc.interfaces.IMedia): void;
				public getSpuDelay(): number;
				public setEventListener(listener: org.videolan.libvlc.MediaPlayer.EventListener): void;
				public getSpuTracks(): native.Array<org.videolan.libvlc.MediaPlayer.TrackDescription>;
				public play(afd: globalAndroid.content.res.AssetFileDescriptor): void;
				public setVolume(int0: number): number;
				public navigate(int0: number): void;
				public getAudioTracksCount(): number;
				public forceAudioDigitalEncodings(encodings: native.Array<number>): boolean;
				public setPosition(float0: number): void;
				public setAudioDelay(delay: number): boolean;
				public constructor(libvlc: org.videolan.libvlc.interfaces.ILibVLC);
				public setAudioTrack(index: number): boolean;
				public constructor(parent: org.videolan.libvlc.interfaces.IVLCObject<any>);
				public getTitles(): native.Array<org.videolan.libvlc.MediaPlayer.Title>;
				public getCurrentVideoTrack(): org.videolan.libvlc.interfaces.IMedia.VideoTrack;
				public getAudioTracks(): native.Array<org.videolan.libvlc.MediaPlayer.TrackDescription>;
				public setRate(float0: number): void;
				public setVideoScale(type: org.videolan.libvlc.MediaPlayer.ScaleType): void;
				public setTitle(int0: number): void;
				public detachViews(): void;
				public playAsset(context: globalAndroid.content.Context, assetFilename: string): void;
				public setAudioDigitalOutputEnabled(enabled: boolean): boolean;
				public getVolume(): number;
				public constructor(media: org.videolan.libvlc.interfaces.IMedia);
				public setScale(scale: number): void;
				public updateViewpoint(yaw: number, pitch: number, roll: number, fov: number, absolute: boolean): boolean;
				public setEqualizer(equalizer: org.videolan.libvlc.MediaPlayer.Equalizer): boolean;
				public isSeekable(): boolean;
				public setRenderer(item: org.videolan.libvlc.RendererItem): number;
				public getChapters(title: number): native.Array<org.videolan.libvlc.MediaPlayer.Chapter>;
				public getSpuTracksCount(): number;
				public getVideoTrack(): number;
				public setVideoTitleDisplay(position: number, timeout: number): void;
				public getPlayerState(): number;
				public getTitle(): number;
				public getMedia(): org.videolan.libvlc.interfaces.IMedia;
				public getScale(): number;
				public setTime(long0: number): number;
				public getPosition(): number;
				public play(uri: globalAndroid.net.Uri): void;
				public onReleaseNative(): void;
				public getVideoScale(): org.videolan.libvlc.MediaPlayer.ScaleType;
				public setChapter(int0: number): void;
				public play(path: string): void;
				public getAudioDelay(): number;
				public addSlave(type: number, path: string, select: boolean): boolean;
				public setSpuDelay(delay: number): boolean;
				public setSpuTrack(index: number): boolean;
				public onEventNative(eventType: number, long1: number, long2: number, float3: number, string4: string): org.videolan.libvlc.MediaPlayer.Event;
				public setEventListener(listener: org.videolan.libvlc.interfaces.AbstractVLCEvent.Listener<any>, handler: globalAndroid.os.Handler): void;
				public addSlave(type: number, uri: globalAndroid.net.Uri, select: boolean): boolean;
				public getVLCVout(): org.videolan.libvlc.interfaces.IVLCVout;
				public getSpuTrack(): number;
				public getVideoTracks(): native.Array<org.videolan.libvlc.MediaPlayer.TrackDescription>;
				public setVideoTrackEnabled(enabled: boolean): void;
				public release(): void;
				public play(): void;
				public isPlaying(): boolean;
				public pause(): void;
				public nextChapter(): number;
				public isReleased(): boolean;
				public constructor(ILibVLC: org.videolan.libvlc.interfaces.ILibVLC);
				public attachViews(surfaceFrame: org.videolan.libvlc.util.VLCVideoLayout, dm: org.videolan.libvlc.util.DisplayManager, subtitles: boolean, textureView: boolean): void;
				public getTime(): number;
				public getLength(): number;
				public play(media: org.videolan.libvlc.interfaces.IMedia): void;
				public previousChapter(): number;
				public stop(): void;
				public retain(): boolean;
				public setVideoTrack(index: number): boolean;
				public onEventNative(int0: number, long1: number, long2: number, float3: number, string4: string): any;
				public canDoPassthrough(): boolean;
				public setEventListener(listener: org.videolan.libvlc.interfaces.AbstractVLCEvent.Listener<any>): void;
				public updateVideoSurfaces(): void;
				public setAudioOutputDevice(id: string): boolean;
				public getVideoTracksCount(): number;
			}
			export module MediaPlayer {
				export class Chapter extends java.lang.Object {
					public static class: java.lang.Class<org.videolan.libvlc.MediaPlayer.Chapter>;
					public timeOffset: number;
					public duration: number;
					public name: string;
				}
				export class Equalizer extends java.lang.Object {
					public static class: java.lang.Class<org.videolan.libvlc.MediaPlayer.Equalizer>;
					public setAmp(index: number, amp: number): boolean;
					public static getPresetName(index: number): string;
					public static getBandFrequency(index: number): number;
					public finalize(): void;
					public static create(): org.videolan.libvlc.MediaPlayer.Equalizer;
					public static getPresetCount(): number;
					public setPreAmp(preamp: number): boolean;
					public static createFromPreset(index: number): org.videolan.libvlc.MediaPlayer.Equalizer;
					public static getBandCount(): number;
					public getPreAmp(): number;
					public getAmp(index: number): number;
				}
				export class Event extends org.videolan.libvlc.interfaces.AbstractVLCEvent {
					public static class: java.lang.Class<org.videolan.libvlc.MediaPlayer.Event>;
					public static MediaChanged: number;
					public static Opening: number;
					public static Buffering: number;
					public static Playing: number;
					public static Paused: number;
					public static Stopped: number;
					public static EndReached: number;
					public static EncounteredError: number;
					public static TimeChanged: number;
					public static PositionChanged: number;
					public static SeekableChanged: number;
					public static PausableChanged: number;
					public static LengthChanged: number;
					public static Vout: number;
					public static ESAdded: number;
					public static ESDeleted: number;
					public static ESSelected: number;
					public static RecordChanged: number;
					public getBuffering(): number;
					public getEsChangedID(): number;
					public getRecordPath(): string;
					public getPausable(): boolean;
					public getRecording(): boolean;
					public constructor(type: number);
					public getPositionChanged(): number;
					public getEsChangedType(): number;
					public constructor(type: number, long1: number);
					public getTimeChanged(): number;
					public constructor(type: number, long1: number, string2: string);
					public getSeekable(): boolean;
					public getLengthChanged(): number;
					public getVoutCount(): number;
					public constructor(type: number, float1: number);
					public constructor(type: number, long1: number, long2: number);
				}
				export class EventListener extends org.videolan.libvlc.interfaces.AbstractVLCEvent.Listener<org.videolan.libvlc.MediaPlayer.Event> {
					public static class: java.lang.Class<org.videolan.libvlc.MediaPlayer.EventListener>;
					/**
					 * Constructs a new instance of the org.videolan.libvlc.MediaPlayer() when extending the interface class.
					 */
					public constructor(implementation: {
						onEvent(abstractVLCEvent0: any): void;
					});
					public constructor();
					public onEvent(abstractVLCEvent0: any): void;
				}
				export class Navigate extends java.lang.Object {
					public static class: java.lang.Class<org.videolan.libvlc.MediaPlayer.Navigate>;
					public static Activate: number;
					public static Up: number;
					public static Down: number;
					public static Left: number;
					public static Right: number;
					public constructor();
				}
				export class Position extends java.lang.Object {
					public static class: java.lang.Class<org.videolan.libvlc.MediaPlayer.Position>;
					public static Disable: number;
					public static Center: number;
					public static Left: number;
					public static Right: number;
					public static Top: number;
					public static TopLeft: number;
					public static TopRight: number;
					public static Bottom: number;
					public static BottomLeft: number;
					public static BottomRight: number;
					public constructor();
				}
				export class ScaleType {
					public static class: java.lang.Class<org.videolan.libvlc.MediaPlayer.ScaleType>;
					public static SURFACE_BEST_FIT: org.videolan.libvlc.MediaPlayer.ScaleType;
					public static SURFACE_FIT_SCREEN: org.videolan.libvlc.MediaPlayer.ScaleType;
					public static SURFACE_FILL: org.videolan.libvlc.MediaPlayer.ScaleType;
					public static SURFACE_16_9: org.videolan.libvlc.MediaPlayer.ScaleType;
					public static SURFACE_4_3: org.videolan.libvlc.MediaPlayer.ScaleType;
					public static SURFACE_ORIGINAL: org.videolan.libvlc.MediaPlayer.ScaleType;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static values(): native.Array<org.videolan.libvlc.MediaPlayer.ScaleType>;
					public static valueOf(name: string): org.videolan.libvlc.MediaPlayer.ScaleType;
				}
				export class Title extends java.lang.Object {
					public static class: java.lang.Class<org.videolan.libvlc.MediaPlayer.Title>;
					public duration: number;
					public name: string;
					public isInteractive(): boolean;
					public constructor(duration: number, name: string, flags: number);
					public isMenu(): boolean;
				}
				export module Title {
					export class Flags extends java.lang.Object {
						public static class: java.lang.Class<org.videolan.libvlc.MediaPlayer.Title.Flags>;
						public static MENU: number;
						public static INTERACTIVE: number;
					}
				}
				export class TrackDescription extends java.lang.Object {
					public static class: java.lang.Class<org.videolan.libvlc.MediaPlayer.TrackDescription>;
					public id: number;
					public name: string;
				}
			}
		}
	}
}

declare module org {
	export module videolan {
		export module libvlc {
			export class RendererDiscoverer extends org.videolan.libvlc.VLCObject<org.videolan.libvlc.RendererDiscoverer.Event> {
				public static class: java.lang.Class<org.videolan.libvlc.RendererDiscoverer>;
				public release(): void;
				public getLibVLC(): org.videolan.libvlc.interfaces.ILibVLC;
				public static list(ILibVlc: org.videolan.libvlc.interfaces.ILibVLC): native.Array<org.videolan.libvlc.RendererDiscoverer.Description>;
				public constructor(ILibVLC: org.videolan.libvlc.interfaces.ILibVLC, name: string);
				public isReleased(): boolean;
				public constructor();
				public setEventListener(listener: org.videolan.libvlc.RendererDiscoverer.EventListener): void;
				public onReleaseNative(): void;
				public stop(): void;
				public retain(): boolean;
				public start(): boolean;
				public onEventNative(int0: number, long1: number, long2: number, float3: number, string4: string): any;
				public setEventListener(listener: org.videolan.libvlc.interfaces.AbstractVLCEvent.Listener<any>): void;
				public onEventNative(eventType: number, long1: number, long2: number, float3: number, string4: string): org.videolan.libvlc.RendererDiscoverer.Event;
				public constructor(libvlc: org.videolan.libvlc.interfaces.ILibVLC);
				public setEventListener(listener: org.videolan.libvlc.interfaces.AbstractVLCEvent.Listener<any>, handler: globalAndroid.os.Handler): void;
				public constructor(parent: org.videolan.libvlc.interfaces.IVLCObject<any>);
			}
			export module RendererDiscoverer {
				export class Description extends java.lang.Object {
					public static class: java.lang.Class<org.videolan.libvlc.RendererDiscoverer.Description>;
					public name: string;
				}
				export class Event extends org.videolan.libvlc.interfaces.AbstractVLCEvent {
					public static class: java.lang.Class<org.videolan.libvlc.RendererDiscoverer.Event>;
					public static ItemAdded: number;
					public static ItemDeleted: number;
					public constructor(type: number);
					public constructor(type: number, long1: number);
					public constructor(type: number, long1: number, string2: string);
					public constructor(type: number, nativeHolder: number, item: org.videolan.libvlc.RendererItem);
					public getItem(): org.videolan.libvlc.RendererItem;
					public release(): void;
					public constructor(type: number, float1: number);
					public constructor(type: number, long1: number, long2: number);
				}
				export class EventListener extends org.videolan.libvlc.interfaces.AbstractVLCEvent.Listener<org.videolan.libvlc.RendererDiscoverer.Event> {
					public static class: java.lang.Class<org.videolan.libvlc.RendererDiscoverer.EventListener>;
					/**
					 * Constructs a new instance of the org.videolan.libvlc.RendererDiscoverer() when extending the interface class.
					 */
					public constructor(implementation: {
						onEvent(abstractVLCEvent0: any): void;
					});
					public constructor();
					public onEvent(abstractVLCEvent0: any): void;
				}
			}
		}
	}
}

declare module org {
	export module videolan {
		export module libvlc {
			export class RendererItem extends org.videolan.libvlc.VLCObject<org.videolan.libvlc.RendererItem.Event> {
				public static class: java.lang.Class<org.videolan.libvlc.RendererItem>;
				public static LIBVLC_RENDERER_CAN_AUDIO: number;
				public static LIBVLC_RENDERER_CAN_VIDEO: number;
				public name: string;
				public displayName: string;
				public onReleaseNative(): void;
				public equals(obj: any): boolean;
				public retain(): boolean;
				public release(): void;
				public onEventNative(int0: number, long1: number, long2: number, float3: number, string4: string): any;
				public onEventNative(eventType: number, long1: number, long2: number, float3: number, string4: string): org.videolan.libvlc.RendererItem.Event;
				public getLibVLC(): org.videolan.libvlc.interfaces.ILibVLC;
				public isReleased(): boolean;
			}
			export module RendererItem {
				export class Event extends org.videolan.libvlc.interfaces.AbstractVLCEvent {
					public static class: java.lang.Class<org.videolan.libvlc.RendererItem.Event>;
					public constructor(type: number);
					public constructor(type: number, long1: number);
					public constructor(type: number, long1: number, string2: string);
					public constructor(type: number, float1: number);
					public constructor(type: number, long1: number, long2: number);
				}
			}
		}
	}
}

declare module org {
	export module videolan {
		export module libvlc {
			export abstract class VLCObject<T>  extends org.videolan.libvlc.interfaces.IVLCObject<any> {
				public static class: java.lang.Class<org.videolan.libvlc.VLCObject<any>>;
				public onReleaseNative(): void;
				public retain(): boolean;
				public release(): void;
				public onEventNative(int0: number, long1: number, long2: number, float3: number, string4: string): any;
				public getLibVLC(): org.videolan.libvlc.interfaces.ILibVLC;
				public finalize(): void;
				public setEventListener(listener: org.videolan.libvlc.interfaces.AbstractVLCEvent.Listener<any>): void;
				public constructor(libvlc: org.videolan.libvlc.interfaces.ILibVLC);
				public isReleased(): boolean;
				public setEventListener(listener: org.videolan.libvlc.interfaces.AbstractVLCEvent.Listener<any>, handler: globalAndroid.os.Handler): void;
				public constructor(parent: org.videolan.libvlc.interfaces.IVLCObject<any>);
				public constructor();
			}
		}
	}
}

declare module org {
	export module videolan {
		export module libvlc {
			export class VideoHelper extends java.lang.Object implements org.videolan.libvlc.interfaces.IVLCVout.OnNewVideoLayoutListener {
				public static class: java.lang.Class<org.videolan.libvlc.VideoHelper>;
				public onNewVideoLayout(vlcVout: org.videolan.libvlc.interfaces.IVLCVout, width: number, height: number, visibleWidth: number, visibleHeight: number, sarNum: number, sarDen: number): void;
			}
		}
	}
}

declare module org {
	export module videolan {
		export module libvlc {
			export module interfaces {
				export abstract class AbstractVLCEvent extends java.lang.Object {
					public static class: java.lang.Class<org.videolan.libvlc.interfaces.AbstractVLCEvent>;
					public type: number;
					public arg1: number;
					public arg2: number;
					public argf1: number;
					public args1: string;
					public constructor(type: number);
					public constructor(type: number, long1: number);
					public constructor(type: number, long1: number, string2: string);
					public release(): void;
					public constructor(type: number, float1: number);
					public constructor(type: number, long1: number, long2: number);
				}
				export module AbstractVLCEvent {
					export class Listener<T>  extends java.lang.Object {
						public static class: java.lang.Class<org.videolan.libvlc.interfaces.AbstractVLCEvent.Listener<any>>;
						/**
						 * Constructs a new instance of the org.videolan.libvlc.interfaces.AbstractVLCEvent() when extending the interface class.
						 */
						public constructor(implementation: {
							onEvent(abstractVLCEvent0: T): void;
						});
						public constructor();
						public onEvent(abstractVLCEvent0: T): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module videolan {
		export module libvlc {
			export module interfaces {
				export class IComponentFactory extends java.lang.Object {
					public static class: java.lang.Class<org.videolan.libvlc.interfaces.IComponentFactory>;
					/**
					 * Constructs a new instance of the org.videolan.libvlc.interfaces.IComponentFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module org {
	export module videolan {
		export module libvlc {
			export module interfaces {
				export class ILibVLC extends org.videolan.libvlc.interfaces.IVLCObject<org.videolan.libvlc.interfaces.ILibVLC.Event> {
					public static class: java.lang.Class<org.videolan.libvlc.interfaces.ILibVLC>;
					/**
					 * Constructs a new instance of the org.videolan.libvlc.interfaces.ILibVLC interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getAppContext(): globalAndroid.content.Context;
						retain(): boolean;
						release(): void;
						isReleased(): boolean;
						getLibVLC(): org.videolan.libvlc.interfaces.ILibVLC;
					});
					public constructor();
					public getAppContext(): globalAndroid.content.Context;
					public getLibVLC(): org.videolan.libvlc.interfaces.ILibVLC;
					public retain(): boolean;
					public release(): void;
					public isReleased(): boolean;
				}
				export module ILibVLC {
					export class Event extends org.videolan.libvlc.interfaces.AbstractVLCEvent {
						public static class: java.lang.Class<org.videolan.libvlc.interfaces.ILibVLC.Event>;
						public constructor(type: number, long1: number, long2: number);
						public constructor(type: number, float1: number);
						public constructor(type: number, long1: number);
						public constructor(type: number);
						public constructor(type: number, long1: number, string2: string);
					}
				}
			}
		}
	}
}

declare module org {
	export module videolan {
		export module libvlc {
			export module interfaces {
				export class ILibVLCFactory extends java.lang.Object implements org.videolan.libvlc.interfaces.IComponentFactory {
					public static class: java.lang.Class<org.videolan.libvlc.interfaces.ILibVLCFactory>;
					/**
					 * Constructs a new instance of the org.videolan.libvlc.interfaces.ILibVLCFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getFromOptions(context0: globalAndroid.content.Context, list1: java.util.List<string>): org.videolan.libvlc.interfaces.ILibVLC;
						getFromContext(context0: globalAndroid.content.Context): org.videolan.libvlc.interfaces.ILibVLC;
					});
					public constructor();
					public static factoryId: string;
					public getFromOptions(context0: globalAndroid.content.Context, list1: java.util.List<string>): org.videolan.libvlc.interfaces.ILibVLC;
					public getFromContext(context0: globalAndroid.content.Context): org.videolan.libvlc.interfaces.ILibVLC;
				}
			}
		}
	}
}

declare module org {
	export module videolan {
		export module libvlc {
			export module interfaces {
				export class IMedia extends org.videolan.libvlc.interfaces.IVLCObject<org.videolan.libvlc.interfaces.IMedia.Event> {
					public static class: java.lang.Class<org.videolan.libvlc.interfaces.IMedia>;
					/**
					 * Constructs a new instance of the org.videolan.libvlc.interfaces.IMedia interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getDuration(): number;
						getState(): number;
						subItems(): org.videolan.libvlc.interfaces.IMediaList;
						parse(int0: number): boolean;
						parse(): boolean;
						parseAsync(int0: number, int1: number): boolean;
						parseAsync(int0: number): boolean;
						parseAsync(): boolean;
						getType(): number;
						getTrackCount(): number;
						getTrack(int0: number): org.videolan.libvlc.interfaces.IMedia.Track;
						getMeta(int0: number): string;
						setHWDecoderEnabled(boolean0: boolean, boolean1: boolean): void;
						setEventListener(eventListener0: org.videolan.libvlc.interfaces.IMedia.EventListener): void;
						addOption(string0: string): void;
						addSlave(slave0: org.videolan.libvlc.interfaces.IMedia.Slave): void;
						clearSlaves(): void;
						getSlaves(): native.Array<org.videolan.libvlc.interfaces.IMedia.Slave>;
						getUri(): globalAndroid.net.Uri;
						isParsed(): boolean;
						getStats(): org.videolan.libvlc.interfaces.IMedia.Stats;
						setDefaultMediaPlayerOptions(): void;
						retain(): boolean;
						release(): void;
						isReleased(): boolean;
						getLibVLC(): org.videolan.libvlc.interfaces.ILibVLC;
					});
					public constructor();
					public getType(): number;
					public getTrackCount(): number;
					public getSlaves(): native.Array<org.videolan.libvlc.interfaces.IMedia.Slave>;
					public parse(): boolean;
					public getDuration(): number;
					public getStats(): org.videolan.libvlc.interfaces.IMedia.Stats;
					public getLibVLC(): org.videolan.libvlc.interfaces.ILibVLC;
					public parse(int0: number): boolean;
					public retain(): boolean;
					public parseAsync(int0: number, int1: number): boolean;
					public parseAsync(int0: number): boolean;
					public addSlave(slave0: org.videolan.libvlc.interfaces.IMedia.Slave): void;
					public parseAsync(): boolean;
					public getTrack(int0: number): org.videolan.libvlc.interfaces.IMedia.Track;
					public release(): void;
					public getMeta(int0: number): string;
					public setEventListener(eventListener0: org.videolan.libvlc.interfaces.IMedia.EventListener): void;
					public isParsed(): boolean;
					public addOption(string0: string): void;
					public setHWDecoderEnabled(boolean0: boolean, boolean1: boolean): void;
					public subItems(): org.videolan.libvlc.interfaces.IMediaList;
					public getUri(): globalAndroid.net.Uri;
					public clearSlaves(): void;
					public setDefaultMediaPlayerOptions(): void;
					public isReleased(): boolean;
					public getState(): number;
				}
				export module IMedia {
					export class AudioTrack extends org.videolan.libvlc.interfaces.IMedia.Track {
						public static class: java.lang.Class<org.videolan.libvlc.interfaces.IMedia.AudioTrack>;
						public channels: number;
						public rate: number;
						public constructor(codec: string, originalCodec: string, id: number, profile: number, level: number, bitrate: number, language: string, description: string, channels: number, rate: number);
						public constructor(type: number, codec: string, originalCodec: string, id: number, profile: number, level: number, bitrate: number, language: string, description: string);
					}
					export class Event extends org.videolan.libvlc.interfaces.AbstractVLCEvent {
						public static class: java.lang.Class<org.videolan.libvlc.interfaces.IMedia.Event>;
						public static MetaChanged: number;
						public static SubItemAdded: number;
						public static DurationChanged: number;
						public static ParsedChanged: number;
						public static StateChanged: number;
						public static SubItemTreeAdded: number;
						public constructor(type: number, long1: number, long2: number);
						public constructor(type: number, float1: number);
						public constructor(type: number, long1: number);
						public constructor(type: number);
						public getMetaId(): number;
						public getParsedStatus(): number;
						public constructor(type: number, long1: number, string2: string);
					}
					export class EventListener extends org.videolan.libvlc.interfaces.AbstractVLCEvent.Listener<org.videolan.libvlc.interfaces.IMedia.Event> {
						public static class: java.lang.Class<org.videolan.libvlc.interfaces.IMedia.EventListener>;
						/**
						 * Constructs a new instance of the org.videolan.libvlc.interfaces.IMedia() when extending the interface class.
						 */
						public constructor(implementation: {
							onEvent(abstractVLCEvent0: any): void;
						});
						public constructor();
						public onEvent(abstractVLCEvent0: any): void;
					}
					export class Meta extends java.lang.Object {
						public static class: java.lang.Class<org.videolan.libvlc.interfaces.IMedia.Meta>;
						public static Title: number;
						public static Artist: number;
						public static Genre: number;
						public static Copyright: number;
						public static Album: number;
						public static TrackNumber: number;
						public static Description: number;
						public static Rating: number;
						public static Date: number;
						public static Setting: number;
						public static URL: number;
						public static Language: number;
						public static NowPlaying: number;
						public static Publisher: number;
						public static EncodedBy: number;
						public static ArtworkURL: number;
						public static TrackID: number;
						public static TrackTotal: number;
						public static Director: number;
						public static Season: number;
						public static Episode: number;
						public static ShowName: number;
						public static Actors: number;
						public static AlbumArtist: number;
						public static DiscNumber: number;
						public static MAX: number;
						public constructor();
					}
					export class Parse extends java.lang.Object {
						public static class: java.lang.Class<org.videolan.libvlc.interfaces.IMedia.Parse>;
						public static ParseLocal: number;
						public static ParseNetwork: number;
						public static FetchLocal: number;
						public static FetchNetwork: number;
						public static DoInteract: number;
						public constructor();
					}
					export class ParsedStatus extends java.lang.Object {
						public static class: java.lang.Class<org.videolan.libvlc.interfaces.IMedia.ParsedStatus>;
						public static Skipped: number;
						public static Failed: number;
						public static Timeout: number;
						public static Done: number;
						public constructor();
					}
					export class Slave extends java.lang.Object {
						public static class: java.lang.Class<org.videolan.libvlc.interfaces.IMedia.Slave>;
						public type: number;
						public priority: number;
						public uri: string;
						public constructor(type: number, priority: number, uri: string);
					}
					export module Slave {
						export class Type extends java.lang.Object {
							public static class: java.lang.Class<org.videolan.libvlc.interfaces.IMedia.Slave.Type>;
							public static Subtitle: number;
							public static Audio: number;
							public constructor();
						}
					}
					export class State extends java.lang.Object {
						public static class: java.lang.Class<org.videolan.libvlc.interfaces.IMedia.State>;
						public static NothingSpecial: number;
						public static Opening: number;
						public static Playing: number;
						public static Paused: number;
						public static Stopped: number;
						public static Ended: number;
						public static Error: number;
						public static MAX: number;
						public constructor();
					}
					export class Stats extends java.lang.Object {
						public static class: java.lang.Class<org.videolan.libvlc.interfaces.IMedia.Stats>;
						public readBytes: number;
						public inputBitrate: number;
						public demuxReadBytes: number;
						public demuxBitrate: number;
						public demuxCorrupted: number;
						public demuxDiscontinuity: number;
						public decodedVideo: number;
						public decodedAudio: number;
						public displayedPictures: number;
						public lostPictures: number;
						public playedAbuffers: number;
						public lostAbuffers: number;
						public sentPackets: number;
						public sentBytes: number;
						public sendBitrate: number;
						public constructor(readBytes: number, inputBitrate: number, demuxReadBytes: number, demuxBitrate: number, demuxCorrupted: number, demuxDiscontinuity: number, decodedVideo: number, decodedAudio: number, displayedPictures: number, lostPictures: number, playedAbuffers: number, lostAbuffers: number, sentPackets: number, sentBytes: number, sendBitrate: number);
					}
					export class SubtitleTrack extends org.videolan.libvlc.interfaces.IMedia.Track {
						public static class: java.lang.Class<org.videolan.libvlc.interfaces.IMedia.SubtitleTrack>;
						public encoding: string;
						public constructor(codec: string, originalCodec: string, id: number, profile: number, level: number, bitrate: number, language: string, description: string, encoding: string);
						public constructor(type: number, codec: string, originalCodec: string, id: number, profile: number, level: number, bitrate: number, language: string, description: string);
					}
					export abstract class Track extends java.lang.Object {
						public static class: java.lang.Class<org.videolan.libvlc.interfaces.IMedia.Track>;
						public type: number;
						public codec: string;
						public originalCodec: string;
						public id: number;
						public profile: number;
						public level: number;
						public bitrate: number;
						public language: string;
						public description: string;
						public constructor(type: number, codec: string, originalCodec: string, id: number, profile: number, level: number, bitrate: number, language: string, description: string);
					}
					export module Track {
						export class Type extends java.lang.Object {
							public static class: java.lang.Class<org.videolan.libvlc.interfaces.IMedia.Track.Type>;
							public static Unknown: number;
							public static Audio: number;
							public static Video: number;
							public static Text: number;
							public constructor();
						}
					}
					export class Type extends java.lang.Object {
						public static class: java.lang.Class<org.videolan.libvlc.interfaces.IMedia.Type>;
						public static Unknown: number;
						public static File: number;
						public static Directory: number;
						public static Disc: number;
						public static Stream: number;
						public static Playlist: number;
						public constructor();
					}
					export class UnknownTrack extends org.videolan.libvlc.interfaces.IMedia.Track {
						public static class: java.lang.Class<org.videolan.libvlc.interfaces.IMedia.UnknownTrack>;
						public constructor(type: number, codec: string, originalCodec: string, id: number, profile: number, level: number, bitrate: number, language: string, description: string);
						public constructor(codec: string, originalCodec: string, id: number, profile: number, level: number, bitrate: number, language: string, description: string);
					}
					export class VideoTrack extends org.videolan.libvlc.interfaces.IMedia.Track {
						public static class: java.lang.Class<org.videolan.libvlc.interfaces.IMedia.VideoTrack>;
						public height: number;
						public width: number;
						public sarNum: number;
						public sarDen: number;
						public frameRateNum: number;
						public frameRateDen: number;
						public orientation: number;
						public projection: number;
						public constructor(codec: string, originalCodec: string, id: number, profile: number, level: number, bitrate: number, language: string, description: string, height: number, width: number, sarNum: number, sarDen: number, frameRateNum: number, frameRateDen: number, orientation: number, projection: number);
						public constructor(type: number, codec: string, originalCodec: string, id: number, profile: number, level: number, bitrate: number, language: string, description: string);
					}
					export module VideoTrack {
						export class Orientation extends java.lang.Object {
							public static class: java.lang.Class<org.videolan.libvlc.interfaces.IMedia.VideoTrack.Orientation>;
							public static TopLeft: number;
							public static TopRight: number;
							public static BottomLeft: number;
							public static BottomRight: number;
							public static LeftTop: number;
							public static LeftBottom: number;
							public static RightTop: number;
							public static RightBottom: number;
							public constructor();
						}
						export class Projection extends java.lang.Object {
							public static class: java.lang.Class<org.videolan.libvlc.interfaces.IMedia.VideoTrack.Projection>;
							public static Rectangular: number;
							public static EquiRectangular: number;
							public static CubemapLayoutStandard: number;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module videolan {
		export module libvlc {
			export module interfaces {
				export class IMediaFactory extends java.lang.Object implements org.videolan.libvlc.interfaces.IComponentFactory {
					public static class: java.lang.Class<org.videolan.libvlc.interfaces.IMediaFactory>;
					/**
					 * Constructs a new instance of the org.videolan.libvlc.interfaces.IMediaFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getFromLocalPath(iLibVLC0: org.videolan.libvlc.interfaces.ILibVLC, string1: string): org.videolan.libvlc.interfaces.IMedia;
						getFromUri(iLibVLC0: org.videolan.libvlc.interfaces.ILibVLC, uri1: globalAndroid.net.Uri): org.videolan.libvlc.interfaces.IMedia;
						getFromFileDescriptor(iLibVLC0: org.videolan.libvlc.interfaces.ILibVLC, fileDescriptor1: java.io.FileDescriptor): org.videolan.libvlc.interfaces.IMedia;
						getFromAssetFileDescriptor(iLibVLC0: org.videolan.libvlc.interfaces.ILibVLC, assetFileDescriptor1: globalAndroid.content.res.AssetFileDescriptor): org.videolan.libvlc.interfaces.IMedia;
					});
					public constructor();
					public static factoryId: string;
					public getFromAssetFileDescriptor(iLibVLC0: org.videolan.libvlc.interfaces.ILibVLC, assetFileDescriptor1: globalAndroid.content.res.AssetFileDescriptor): org.videolan.libvlc.interfaces.IMedia;
					public getFromFileDescriptor(iLibVLC0: org.videolan.libvlc.interfaces.ILibVLC, fileDescriptor1: java.io.FileDescriptor): org.videolan.libvlc.interfaces.IMedia;
					public getFromLocalPath(iLibVLC0: org.videolan.libvlc.interfaces.ILibVLC, string1: string): org.videolan.libvlc.interfaces.IMedia;
					public getFromUri(iLibVLC0: org.videolan.libvlc.interfaces.ILibVLC, uri1: globalAndroid.net.Uri): org.videolan.libvlc.interfaces.IMedia;
				}
			}
		}
	}
}

declare module org {
	export module videolan {
		export module libvlc {
			export module interfaces {
				export class IMediaList extends org.videolan.libvlc.interfaces.IVLCObject<org.videolan.libvlc.interfaces.IMediaList.Event> {
					public static class: java.lang.Class<org.videolan.libvlc.interfaces.IMediaList>;
					/**
					 * Constructs a new instance of the org.videolan.libvlc.interfaces.IMediaList interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						setEventListener(eventListener0: org.videolan.libvlc.interfaces.IMediaList.EventListener, handler1: globalAndroid.os.Handler): void;
						getCount(): number;
						getMediaAt(int0: number): org.videolan.libvlc.interfaces.IMedia;
						isLocked(): boolean;
						retain(): boolean;
						release(): void;
						isReleased(): boolean;
						getLibVLC(): org.videolan.libvlc.interfaces.ILibVLC;
					});
					public constructor();
					public isLocked(): boolean;
					public getCount(): number;
					public getLibVLC(): org.videolan.libvlc.interfaces.ILibVLC;
					public retain(): boolean;
					public release(): void;
					public getMediaAt(int0: number): org.videolan.libvlc.interfaces.IMedia;
					public setEventListener(eventListener0: org.videolan.libvlc.interfaces.IMediaList.EventListener, handler1: globalAndroid.os.Handler): void;
					public isReleased(): boolean;
				}
				export module IMediaList {
					export class Event extends org.videolan.libvlc.interfaces.AbstractVLCEvent {
						public static class: java.lang.Class<org.videolan.libvlc.interfaces.IMediaList.Event>;
						public static ItemAdded: number;
						public static ItemDeleted: number;
						public static EndReached: number;
						public media: org.videolan.libvlc.interfaces.IMedia;
						public index: number;
						public constructor(type: number, long1: number, long2: number);
						public constructor(type: number, float1: number);
						public constructor(type: number, long1: number);
						public release(): void;
						public constructor(type: number);
						public constructor(type: number, long1: number, string2: string);
						public constructor(type: number, media: org.videolan.libvlc.interfaces.IMedia, retain: boolean, index: number);
					}
					export class EventListener extends org.videolan.libvlc.interfaces.AbstractVLCEvent.Listener<org.videolan.libvlc.interfaces.IMediaList.Event> {
						public static class: java.lang.Class<org.videolan.libvlc.interfaces.IMediaList.EventListener>;
						/**
						 * Constructs a new instance of the org.videolan.libvlc.interfaces.IMediaList() when extending the interface class.
						 */
						public constructor(implementation: {
							onEvent(abstractVLCEvent0: any): void;
						});
						public constructor();
						public onEvent(abstractVLCEvent0: any): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module videolan {
		export module libvlc {
			export module interfaces {
				export class IVLCObject<T>  extends java.lang.Object {
					public static class: java.lang.Class<org.videolan.libvlc.interfaces.IVLCObject<any>>;
					/**
					 * Constructs a new instance of the org.videolan.libvlc.interfaces.IVLCObject<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						retain(): boolean;
						release(): void;
						isReleased(): boolean;
						getLibVLC(): org.videolan.libvlc.interfaces.ILibVLC;
					});
					public constructor();
					public getLibVLC(): org.videolan.libvlc.interfaces.ILibVLC;
					public retain(): boolean;
					public release(): void;
					public isReleased(): boolean;
				}
			}
		}
	}
}

declare module org {
	export module videolan {
		export module libvlc {
			export module interfaces {
				export class IVLCVout extends java.lang.Object {
					public static class: java.lang.Class<org.videolan.libvlc.interfaces.IVLCVout>;
					/**
					 * Constructs a new instance of the org.videolan.libvlc.interfaces.IVLCVout interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						setVideoView(surfaceView0: globalAndroid.view.SurfaceView): void;
						setVideoView(textureView0: globalAndroid.view.TextureView): void;
						setVideoSurface(surface0: globalAndroid.view.Surface, surfaceHolder1: globalAndroid.view.SurfaceHolder): void;
						setVideoSurface(surfaceTexture0: globalAndroid.graphics.SurfaceTexture): void;
						setSubtitlesView(surfaceView0: globalAndroid.view.SurfaceView): void;
						setSubtitlesView(textureView0: globalAndroid.view.TextureView): void;
						setSubtitlesSurface(surface0: globalAndroid.view.Surface, surfaceHolder1: globalAndroid.view.SurfaceHolder): void;
						setSubtitlesSurface(surfaceTexture0: globalAndroid.graphics.SurfaceTexture): void;
						attachViews(onNewVideoLayoutListener0: org.videolan.libvlc.interfaces.IVLCVout.OnNewVideoLayoutListener): void;
						attachViews(): void;
						detachViews(): void;
						areViewsAttached(): boolean;
						addCallback(callback0: org.videolan.libvlc.interfaces.IVLCVout.Callback): void;
						removeCallback(callback0: org.videolan.libvlc.interfaces.IVLCVout.Callback): void;
						sendMouseEvent(int0: number, int1: number, int2: number, int3: number): void;
						setWindowSize(int0: number, int1: number): void;
					});
					public constructor();
					public setSubtitlesSurface(surfaceTexture0: globalAndroid.graphics.SurfaceTexture): void;
					public setVideoView(textureView0: globalAndroid.view.TextureView): void;
					public attachViews(onNewVideoLayoutListener0: org.videolan.libvlc.interfaces.IVLCVout.OnNewVideoLayoutListener): void;
					public areViewsAttached(): boolean;
					public setVideoSurface(surface0: globalAndroid.view.Surface, surfaceHolder1: globalAndroid.view.SurfaceHolder): void;
					public setWindowSize(int0: number, int1: number): void;
					public sendMouseEvent(int0: number, int1: number, int2: number, int3: number): void;
					public setVideoSurface(surfaceTexture0: globalAndroid.graphics.SurfaceTexture): void;
					public addCallback(callback0: org.videolan.libvlc.interfaces.IVLCVout.Callback): void;
					public setSubtitlesView(surfaceView0: globalAndroid.view.SurfaceView): void;
					public setSubtitlesSurface(surface0: globalAndroid.view.Surface, surfaceHolder1: globalAndroid.view.SurfaceHolder): void;
					public setSubtitlesView(textureView0: globalAndroid.view.TextureView): void;
					public removeCallback(callback0: org.videolan.libvlc.interfaces.IVLCVout.Callback): void;
					public setVideoView(surfaceView0: globalAndroid.view.SurfaceView): void;
					public attachViews(): void;
					public detachViews(): void;
				}
				export module IVLCVout {
					export class Callback extends java.lang.Object {
						public static class: java.lang.Class<org.videolan.libvlc.interfaces.IVLCVout.Callback>;
						/**
						 * Constructs a new instance of the org.videolan.libvlc.interfaces.IVLCVout() when extending the interface class.
						 */
						public constructor(implementation: {
							onSurfacesCreated(iVLCVout0: org.videolan.libvlc.interfaces.IVLCVout): void;
							onSurfacesDestroyed(iVLCVout0: org.videolan.libvlc.interfaces.IVLCVout): void;
						});
						public constructor();
						public onSurfacesCreated(iVLCVout0: org.videolan.libvlc.interfaces.IVLCVout): void;
						public onSurfacesDestroyed(iVLCVout0: org.videolan.libvlc.interfaces.IVLCVout): void;
					}
					export class OnNewVideoLayoutListener extends java.lang.Object {
						public static class: java.lang.Class<org.videolan.libvlc.interfaces.IVLCVout.OnNewVideoLayoutListener>;
						/**
						 * Constructs a new instance of the org.videolan.libvlc.interfaces.IVLCVout() when extending the interface class.
						 */
						public constructor(implementation: {
							onNewVideoLayout(iVLCVout0: org.videolan.libvlc.interfaces.IVLCVout, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number): void;
						});
						public constructor();
						public onNewVideoLayout(iVLCVout0: org.videolan.libvlc.interfaces.IVLCVout, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module videolan {
		export module libvlc {
			export module media {
				export class MediaPlayer extends java.lang.Object {
					public static class: java.lang.Class<org.videolan.libvlc.media.MediaPlayer>;
					public static MEDIA_ERROR_UNKNOWN: number;
					public static MEDIA_ERROR_SERVER_DIED: number;
					public static MEDIA_ERROR_NOT_VALID_FOR_PROGRESSIVE_PLAYBACK: number;
					public static MEDIA_ERROR_IO: number;
					public static MEDIA_ERROR_MALFORMED: number;
					public static MEDIA_ERROR_UNSUPPORTED: number;
					public static MEDIA_ERROR_TIMED_OUT: number;
					public static MEDIA_INFO_UNKNOWN: number;
					public static MEDIA_INFO_STARTED_AS_NEXT: number;
					public static MEDIA_INFO_VIDEO_RENDERING_START: number;
					public static MEDIA_INFO_VIDEO_TRACK_LAGGING: number;
					public static MEDIA_INFO_BUFFERING_START: number;
					public static MEDIA_INFO_BUFFERING_END: number;
					public static MEDIA_INFO_BAD_INTERLEAVING: number;
					public static MEDIA_INFO_NOT_SEEKABLE: number;
					public static MEDIA_INFO_METADATA_UPDATE: number;
					public static MEDIA_INFO_EXTERNAL_METADATA_UPDATE: number;
					public static MEDIA_INFO_TIMED_TEXT_ERROR: number;
					public static MEDIA_INFO_UNSUPPORTED_SUBTITLE: number;
					public static MEDIA_INFO_SUBTITLE_TIMED_OUT: number;
					public static VIDEO_SCALING_MODE_SCALE_TO_FIT: number;
					public static VIDEO_SCALING_MODE_SCALE_TO_FIT_WITH_CROPPING: number;
					public static MEDIA_MIMETYPE_TEXT_SUBRIP: string;
					public setDataSource(path: string): void;
					public finalize(): void;
					public getVideoWidth(): number;
					public setAudioStreamType(streamtype: number): void;
					public setVolume(leftVolume: number, rightVolume: number): void;
					public static create(context: globalAndroid.content.Context, uri: globalAndroid.net.Uri, holder: globalAndroid.view.SurfaceHolder, audioAttributes: any, audioSessionId: number): org.videolan.libvlc.media.MediaPlayer;
					public getTrackInfo(): native.Array<org.videolan.libvlc.media.MediaPlayer.TrackInfo>;
					public constructor();
					public pause(): void;
					public setDataSource(context: globalAndroid.content.Context, uri: globalAndroid.net.Uri): void;
					public addTimedTextSource(fd: java.io.FileDescriptor, offset: number, length: number, mime: string): void;
					public selectTrack(index: number): void;
					public setAudioAttributes(attributes: any): void;
					public setWakeMode(context: globalAndroid.content.Context, mode: number): void;
					public prepare(): void;
					public setScreenOnWhilePlaying(screenOn: boolean): void;
					public getAudioSessionId(): number;
					public setOnBufferingUpdateListener(listener: org.videolan.libvlc.media.MediaPlayer.OnBufferingUpdateListener): void;
					public setDataSource(context: globalAndroid.content.Context, uri: globalAndroid.net.Uri, headers: java.util.Map<string,string>): void;
					public setNextMediaPlayer(next: org.videolan.libvlc.media.MediaPlayer): void;
					public setLooping(looping: boolean): void;
					public release(): void;
					public addTimedTextSource(path: string, mimeType: string): void;
					public setOnTimedTextListener(listener: org.videolan.libvlc.media.MediaPlayer.OnTimedTextListener): void;
					public setDisplay(sh: globalAndroid.view.SurfaceHolder): void;
					public getSelectedTrack(trackType: number): number;
					public setVideoScalingMode(mode: number): void;
					public stop(): void;
					public static create(context: globalAndroid.content.Context, resid: number): org.videolan.libvlc.media.MediaPlayer;
					public prepareAsync(): void;
					public setSurface(surface: globalAndroid.view.Surface): void;
					public setOnSeekCompleteListener(listener: org.videolan.libvlc.media.MediaPlayer.OnSeekCompleteListener): void;
					public setOnInfoListener(listener: org.videolan.libvlc.media.MediaPlayer.OnInfoListener): void;
					public static create(context: globalAndroid.content.Context, resid: number, audioAttributes: any, audioSessionId: number): org.videolan.libvlc.media.MediaPlayer;
					public setOnCompletionListener(listener: org.videolan.libvlc.media.MediaPlayer.OnCompletionListener): void;
					public start(): void;
					public seekTo(msec: number): void;
					public deselectTrack(index: number): void;
					public getDuration(): number;
					public isPlaying(): boolean;
					public addTimedTextSource(context: globalAndroid.content.Context, uri: globalAndroid.net.Uri, mimeType: string): void;
					public getCurrentPosition(): number;
					public isLooping(): boolean;
					public setDataSource(fd: java.io.FileDescriptor): void;
					public getVideoHeight(): number;
					public setOnErrorListener(listener: org.videolan.libvlc.media.MediaPlayer.OnErrorListener): void;
					public reset(): void;
					public static create(context: globalAndroid.content.Context, uri: globalAndroid.net.Uri): org.videolan.libvlc.media.MediaPlayer;
					public setOnVideoSizeChangedListener(listener: org.videolan.libvlc.media.MediaPlayer.OnVideoSizeChangedListener): void;
					public setDataSource(fd: java.io.FileDescriptor, offset: number, length: number): void;
					public attachAuxEffect(effectId: number): void;
					public setAudioSessionId(sessionId: number): void;
					public setAuxEffectSendLevel(level: number): void;
					public static create(context: globalAndroid.content.Context, uri: globalAndroid.net.Uri, holder: globalAndroid.view.SurfaceHolder): org.videolan.libvlc.media.MediaPlayer;
					public addTimedTextSource(fd: java.io.FileDescriptor, mimeType: string): void;
					public setOnPreparedListener(listener: org.videolan.libvlc.media.MediaPlayer.OnPreparedListener): void;
				}
				export module MediaPlayer {
					export class OnBufferingUpdateListener extends java.lang.Object {
						public static class: java.lang.Class<org.videolan.libvlc.media.MediaPlayer.OnBufferingUpdateListener>;
						/**
						 * Constructs a new instance of the org.videolan.libvlc.media.MediaPlayer() when extending the interface class.
						 */
						public constructor(implementation: {
							onBufferingUpdate(mediaPlayer0: org.videolan.libvlc.media.MediaPlayer, int1: number): void;
						});
						public constructor();
						public onBufferingUpdate(mediaPlayer0: org.videolan.libvlc.media.MediaPlayer, int1: number): void;
					}
					export class OnCompletionListener extends java.lang.Object {
						public static class: java.lang.Class<org.videolan.libvlc.media.MediaPlayer.OnCompletionListener>;
						/**
						 * Constructs a new instance of the org.videolan.libvlc.media.MediaPlayer() when extending the interface class.
						 */
						public constructor(implementation: {
							onCompletion(mediaPlayer0: org.videolan.libvlc.media.MediaPlayer): void;
						});
						public constructor();
						public onCompletion(mediaPlayer0: org.videolan.libvlc.media.MediaPlayer): void;
					}
					export class OnErrorListener extends java.lang.Object {
						public static class: java.lang.Class<org.videolan.libvlc.media.MediaPlayer.OnErrorListener>;
						/**
						 * Constructs a new instance of the org.videolan.libvlc.media.MediaPlayer() when extending the interface class.
						 */
						public constructor(implementation: {
							onError(mediaPlayer0: org.videolan.libvlc.media.MediaPlayer, int1: number, int2: number): boolean;
						});
						public constructor();
						public onError(mediaPlayer0: org.videolan.libvlc.media.MediaPlayer, int1: number, int2: number): boolean;
					}
					export class OnInfoListener extends java.lang.Object {
						public static class: java.lang.Class<org.videolan.libvlc.media.MediaPlayer.OnInfoListener>;
						/**
						 * Constructs a new instance of the org.videolan.libvlc.media.MediaPlayer() when extending the interface class.
						 */
						public constructor(implementation: {
							onInfo(mediaPlayer0: org.videolan.libvlc.media.MediaPlayer, int1: number, int2: number): boolean;
						});
						public constructor();
						public onInfo(mediaPlayer0: org.videolan.libvlc.media.MediaPlayer, int1: number, int2: number): boolean;
					}
					export class OnPreparedListener extends java.lang.Object {
						public static class: java.lang.Class<org.videolan.libvlc.media.MediaPlayer.OnPreparedListener>;
						/**
						 * Constructs a new instance of the org.videolan.libvlc.media.MediaPlayer() when extending the interface class.
						 */
						public constructor(implementation: {
							onPrepared(mediaPlayer0: org.videolan.libvlc.media.MediaPlayer): void;
						});
						public constructor();
						public onPrepared(mediaPlayer0: org.videolan.libvlc.media.MediaPlayer): void;
					}
					export class OnSeekCompleteListener extends java.lang.Object {
						public static class: java.lang.Class<org.videolan.libvlc.media.MediaPlayer.OnSeekCompleteListener>;
						/**
						 * Constructs a new instance of the org.videolan.libvlc.media.MediaPlayer() when extending the interface class.
						 */
						public constructor(implementation: {
							onSeekComplete(mediaPlayer0: org.videolan.libvlc.media.MediaPlayer): void;
						});
						public constructor();
						public onSeekComplete(mediaPlayer0: org.videolan.libvlc.media.MediaPlayer): void;
					}
					export class OnTimedTextListener extends java.lang.Object {
						public static class: java.lang.Class<org.videolan.libvlc.media.MediaPlayer.OnTimedTextListener>;
						/**
						 * Constructs a new instance of the org.videolan.libvlc.media.MediaPlayer() when extending the interface class.
						 */
						public constructor(implementation: {
							onTimedText(mediaPlayer0: org.videolan.libvlc.media.MediaPlayer, timedText1: globalAndroid.media.TimedText): void;
						});
						public constructor();
						public onTimedText(mediaPlayer0: org.videolan.libvlc.media.MediaPlayer, timedText1: globalAndroid.media.TimedText): void;
					}
					export class OnVideoSizeChangedListener extends java.lang.Object {
						public static class: java.lang.Class<org.videolan.libvlc.media.MediaPlayer.OnVideoSizeChangedListener>;
						/**
						 * Constructs a new instance of the org.videolan.libvlc.media.MediaPlayer() when extending the interface class.
						 */
						public constructor(implementation: {
							onVideoSizeChanged(mediaPlayer0: org.videolan.libvlc.media.MediaPlayer, int1: number, int2: number): void;
						});
						public constructor();
						public onVideoSizeChanged(mediaPlayer0: org.videolan.libvlc.media.MediaPlayer, int1: number, int2: number): void;
					}
					export class TrackInfo extends java.lang.Object implements globalAndroid.os.Parcelable {
						public static class: java.lang.Class<org.videolan.libvlc.media.MediaPlayer.TrackInfo>;
						public static MEDIA_TRACK_TYPE_UNKNOWN: number;
						public static MEDIA_TRACK_TYPE_VIDEO: number;
						public static MEDIA_TRACK_TYPE_AUDIO: number;
						public static MEDIA_TRACK_TYPE_TIMEDTEXT: number;
						public static MEDIA_TRACK_TYPE_SUBTITLE: number;
						public describeContents(): number;
						public getLanguage(): string;
						public getFormat(): globalAndroid.media.MediaFormat;
						public getTrackType(): number;
						public writeToParcel(dest: globalAndroid.os.Parcel, flags: number): void;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module org {
	export module videolan {
		export module libvlc {
			export module media {
				export class VideoView extends globalAndroid.view.SurfaceView implements globalAndroid.widget.MediaController.MediaPlayerControl {
					public static class: java.lang.Class<org.videolan.libvlc.media.VideoView>;
					public setVideoPath(path: string): void;
					public addSubtitleSource(is: java.io.InputStream, format: globalAndroid.media.MediaFormat): void;
					public draw(canvas: globalAndroid.graphics.Canvas): void;
					public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
					public onAttachedToWindow(): void;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
					public canSeekBackward(): boolean;
					public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public pause(): void;
					public onTrackballEvent(ev: globalAndroid.view.MotionEvent): boolean;
					public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
					public setOnCompletionListener(l: globalAndroid.media.MediaPlayer.OnCompletionListener): void;
					public suspend(): void;
					public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
					public onInitializeAccessibilityEvent(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
					public setVideoURI(uri: globalAndroid.net.Uri): void;
					public getBufferPercentage(): number;
					public resolveAdjustedSize(desiredSize: number, measureSpec: number): number;
					public getAudioSessionId(): number;
					public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
					public setOnInfoListener(l: globalAndroid.media.MediaPlayer.OnInfoListener): void;
					public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
					public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public resume(): void;
					public constructor(context: globalAndroid.content.Context);
					public setMediaController(controller: globalAndroid.widget.MediaController): void;
					public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
					public onInitializeAccessibilityNodeInfo(info: globalAndroid.view.accessibility.AccessibilityNodeInfo): void;
					public onLayout(changed: boolean, left: number, top: number, right: number, bottom: number): void;
					public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public sendAccessibilityEvent(eventType: number): void;
					public canPause(): boolean;
					public setVideoURI(uri: globalAndroid.net.Uri, headers: java.util.Map<string,string>): void;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
					public stopPlayback(): void;
					public start(): void;
					public setOnErrorListener(l: globalAndroid.media.MediaPlayer.OnErrorListener): void;
					public onTrackballEvent(event: globalAndroid.view.MotionEvent): boolean;
					public seekTo(msec: number): void;
					public getDuration(): number;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
					public isPlaying(): boolean;
					public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
					public getCurrentPosition(): number;
					public onDetachedFromWindow(): void;
					public setOnPreparedListener(l: globalAndroid.media.MediaPlayer.OnPreparedListener): void;
					public canSeekForward(): boolean;
					public onTouchEvent(event: globalAndroid.view.MotionEvent): boolean;
					public onTouchEvent(ev: globalAndroid.view.MotionEvent): boolean;
				}
			}
		}
	}
}

declare module org {
	export module videolan {
		export module libvlc {
			export module stubs {
				export class StubLibVLC extends org.videolan.libvlc.stubs.StubVLCObject<org.videolan.libvlc.interfaces.ILibVLC.Event> implements org.videolan.libvlc.interfaces.ILibVLC  {
					public static class: java.lang.Class<org.videolan.libvlc.stubs.StubLibVLC>;
					public constructor();
					public constructor(context: globalAndroid.content.Context, options: java.util.List<string>);
					public getAppContext(): globalAndroid.content.Context;
					public getLibVLC(): org.videolan.libvlc.interfaces.ILibVLC;
					public constructor(context: globalAndroid.content.Context);
					public retain(): boolean;
					public release(): void;
					public isReleased(): boolean;
				}
			}
		}
	}
}

declare module org {
	export module videolan {
		export module libvlc {
			export module stubs {
				export class StubLibVLCFactory extends java.lang.Object implements org.videolan.libvlc.interfaces.ILibVLCFactory {
					public static class: java.lang.Class<org.videolan.libvlc.stubs.StubLibVLCFactory>;
					public getFromContext(context: globalAndroid.content.Context): org.videolan.libvlc.interfaces.ILibVLC;
					public getFromOptions(context: globalAndroid.content.Context, options: java.util.List<string>): org.videolan.libvlc.interfaces.ILibVLC;
					public constructor();
				}
			}
		}
	}
}

declare module org {
	export module videolan {
		export module libvlc {
			export module stubs {
				export class StubMedia extends org.videolan.libvlc.stubs.StubVLCObject<org.videolan.libvlc.interfaces.IMedia.Event> implements org.videolan.libvlc.interfaces.IMedia  {
					public static class: java.lang.Class<org.videolan.libvlc.stubs.StubMedia>;
					public getType(): number;
					public getTrackCount(): number;
					public setType(type: number): void;
					public constructor(ILibVLC: org.videolan.libvlc.interfaces.ILibVLC, uri: globalAndroid.net.Uri);
					public getSlaves(): native.Array<org.videolan.libvlc.interfaces.IMedia.Slave>;
					public setHWDecoderEnabled(enabled: boolean, force: boolean): void;
					public setEventListener(listener: org.videolan.libvlc.interfaces.IMedia.EventListener): void;
					public parse(): boolean;
					public constructor(ILibVLC: org.videolan.libvlc.interfaces.ILibVLC, fd: java.io.FileDescriptor);
					public getDuration(): number;
					public addSlave(slave: org.videolan.libvlc.interfaces.IMedia.Slave): void;
					public getTrack(idx: number): org.videolan.libvlc.interfaces.IMedia.Track;
					public getStats(): org.videolan.libvlc.interfaces.IMedia.Stats;
					public constructor();
					public parseAsync(flags: number): boolean;
					public getLibVLC(): org.videolan.libvlc.interfaces.ILibVLC;
					public retain(): boolean;
					public constructor(ILibVLC: org.videolan.libvlc.interfaces.ILibVLC, path: string);
					public parse(flags: number): boolean;
					public parseAsync(): boolean;
					public parseAsync(flags: number, timeout: number): boolean;
					public release(): void;
					public isParsed(): boolean;
					public getMeta(id: number): string;
					public subItems(): org.videolan.libvlc.interfaces.IMediaList;
					public getUri(): globalAndroid.net.Uri;
					public constructor(ILibVLC: org.videolan.libvlc.interfaces.ILibVLC, assetFileDescriptor: globalAndroid.content.res.AssetFileDescriptor);
					public clearSlaves(): void;
					public addOption(option: string): void;
					public setDefaultMediaPlayerOptions(): void;
					public isReleased(): boolean;
					public getState(): number;
				}
			}
		}
	}
}

declare module org {
	export module videolan {
		export module libvlc {
			export module stubs {
				export class StubMediaFactory extends java.lang.Object implements org.videolan.libvlc.interfaces.IMediaFactory {
					public static class: java.lang.Class<org.videolan.libvlc.stubs.StubMediaFactory>;
					public getFromFileDescriptor(ILibVLC: org.videolan.libvlc.interfaces.ILibVLC, fd: java.io.FileDescriptor): org.videolan.libvlc.interfaces.IMedia;
					public getFromLocalPath(ILibVLC: org.videolan.libvlc.interfaces.ILibVLC, path: string): org.videolan.libvlc.interfaces.IMedia;
					public getFromUri(ILibVLC: org.videolan.libvlc.interfaces.ILibVLC, uri: globalAndroid.net.Uri): org.videolan.libvlc.interfaces.IMedia;
					public constructor();
					public getFromAssetFileDescriptor(ILibVLC: org.videolan.libvlc.interfaces.ILibVLC, assetFileDescriptor: globalAndroid.content.res.AssetFileDescriptor): org.videolan.libvlc.interfaces.IMedia;
				}
			}
		}
	}
}

declare module org {
	export module videolan {
		export module libvlc {
			export module stubs {
				export class StubMediaList extends org.videolan.libvlc.stubs.StubVLCObject<org.videolan.libvlc.interfaces.IMediaList.Event> implements org.videolan.libvlc.interfaces.IMediaList  {
					public static class: java.lang.Class<org.videolan.libvlc.stubs.StubMediaList>;
					public isLocked(): boolean;
					public getCount(): number;
					public getMediaAt(index: number): org.videolan.libvlc.interfaces.IMedia;
					public constructor();
					public getLibVLC(): org.videolan.libvlc.interfaces.ILibVLC;
					public retain(): boolean;
					public release(): void;
					public setEventListener(listener: org.videolan.libvlc.interfaces.IMediaList.EventListener, handler: globalAndroid.os.Handler): void;
					public isReleased(): boolean;
				}
			}
		}
	}
}

declare module org {
	export module videolan {
		export module libvlc {
			export module stubs {
				export class StubVLCObject<T>  extends org.videolan.libvlc.interfaces.IVLCObject<any> {
					public static class: java.lang.Class<org.videolan.libvlc.stubs.StubVLCObject<any>>;
					public constructor();
					public getLibVLC(): org.videolan.libvlc.interfaces.ILibVLC;
					public retain(): boolean;
					public release(): void;
					public isReleased(): boolean;
				}
			}
		}
	}
}

declare module org {
	export module videolan {
		export module libvlc {
			export module util {
				export class AndroidUtil extends java.lang.Object {
					public static class: java.lang.Class<org.videolan.libvlc.util.AndroidUtil>;
					public static isPOrLater: boolean;
					public static isOOrLater: boolean;
					public static isNougatMR1OrLater: boolean;
					public static isNougatOrLater: boolean;
					public static isMarshMallowOrLater: boolean;
					public static isLolliPopOrLater: boolean;
					public static isKitKatOrLater: boolean;
					public static isJellyBeanMR2OrLater: boolean;
					public constructor();
					public static PathToUri(path: string): globalAndroid.net.Uri;
					public static UriToFile(uri: globalAndroid.net.Uri): java.io.File;
					public static FileToUri(file: java.io.File): globalAndroid.net.Uri;
					public static LocationToUri(location: string): globalAndroid.net.Uri;
				}
			}
		}
	}
}

declare module org {
	export module videolan {
		export module libvlc {
			export module util {
				export class DisplayManager extends java.lang.Object {
					public static class: java.lang.Class<org.videolan.libvlc.util.DisplayManager>;
					public isSecondary(): boolean;
					public getPresentation(): org.videolan.libvlc.util.DisplayManager.SecondaryDisplay;
					public isOnRenderer(): boolean;
					public getDisplayType(): org.videolan.libvlc.util.DisplayManager.DisplayType;
					public release(): void;
					public setMediaRouterCallback(): boolean;
					public removeMediaRouterCallback(): void;
					public constructor(activity: globalAndroid.app.Activity, selectedRender: androidx.lifecycle.LiveData<org.videolan.libvlc.RendererItem>, textureView: boolean, cloneMode: boolean, benchmark: boolean);
					public isPrimary(): boolean;
				}
				export module DisplayManager {
					export class DisplayType {
						public static class: java.lang.Class<org.videolan.libvlc.util.DisplayManager.DisplayType>;
						public static PRIMARY: org.videolan.libvlc.util.DisplayManager.DisplayType;
						public static PRESENTATION: org.videolan.libvlc.util.DisplayManager.DisplayType;
						public static RENDERER: org.videolan.libvlc.util.DisplayManager.DisplayType;
						public static values(): native.Array<org.videolan.libvlc.util.DisplayManager.DisplayType>;
						public static valueOf(name: string): org.videolan.libvlc.util.DisplayManager.DisplayType;
						public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					}
					export class SecondaryDisplay extends globalAndroid.app.Presentation {
						public static class: java.lang.Class<org.videolan.libvlc.util.DisplayManager.SecondaryDisplay>;
						public static TAG: string;
						public dispatchKeyShortcutEvent(event: globalAndroid.view.KeyEvent): boolean;
						public getSurfaceFrame(): globalAndroid.widget.FrameLayout;
						public dismiss(): void;
						public onActionModeFinished(mode: globalAndroid.view.ActionMode): void;
						public onSearchRequested(searchEvent: any): boolean;
						public onAttachedToWindow(): void;
						public onWindowStartingActionMode(callback: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
						public onWindowFocusChanged(hasFocus: boolean): void;
						public onSearchRequested(): boolean;
						public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
						public dispatchTouchEvent(ev: globalAndroid.view.MotionEvent): boolean;
						public dispatchGenericMotionEvent(ev: globalAndroid.view.MotionEvent): boolean;
						public constructor(this0: org.videolan.libvlc.util.DisplayManager, outerContext: globalAndroid.content.Context, display: globalAndroid.view.Display);
						public getSubtitlesSurfaceView(): globalAndroid.view.SurfaceView;
						public dispatchKeyEvent(event: globalAndroid.view.KeyEvent): boolean;
						public onCreatePanelView(featureId: number): globalAndroid.view.View;
						public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
						public dispatchPopulateAccessibilityEvent(event: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
						public onCreate(savedInstanceState: globalAndroid.os.Bundle): void;
						public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
						public onWindowStartingActionMode(callback: globalAndroid.view.ActionMode.Callback, type: number): globalAndroid.view.ActionMode;
						public constructor(context: globalAndroid.content.Context, cancelable: boolean, cancelListener: globalAndroid.content.DialogInterface.OnCancelListener);
						public getSurfaceView(): globalAndroid.view.SurfaceView;
						public onPreparePanel(featureId: number, view: globalAndroid.view.View, menu: globalAndroid.view.Menu): boolean;
						public onActionModeStarted(mode: globalAndroid.view.ActionMode): void;
						public constructor(outerContext: globalAndroid.content.Context, display: globalAndroid.view.Display);
						public constructor(outerContext: globalAndroid.content.Context, display: globalAndroid.view.Display, theme: number);
						public onCreateContextMenu(menu: globalAndroid.view.ContextMenu, v: globalAndroid.view.View, menuInfo: globalAndroid.view.ContextMenu.ContextMenuInfo): void;
						public onWindowAttributesChanged(params: globalAndroid.view.WindowManager.LayoutParams): void;
						public constructor(this0: org.videolan.libvlc.util.DisplayManager, outerContext: globalAndroid.content.Context, display: globalAndroid.view.Display, theme: number);
						public onContentChanged(): void;
						public onProvideKeyboardShortcuts(data: java.util.List<any>, menu: globalAndroid.view.Menu, deviceId: number): void;
						public cancel(): void;
						public onDetachedFromWindow(): void;
						public dispatchTrackballEvent(ev: globalAndroid.view.MotionEvent): boolean;
						public onMenuItemSelected(featureId: number, item: globalAndroid.view.MenuItem): boolean;
						public onPointerCaptureChanged(hasCapture: boolean): void;
						public onCreatePanelMenu(featureId: number, menu: globalAndroid.view.Menu): boolean;
						public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
						public constructor(context: globalAndroid.content.Context, themeResId: number);
						public onPanelClosed(featureId: number, menu: globalAndroid.view.Menu): void;
						public constructor(context: globalAndroid.content.Context);
						public onMenuOpened(featureId: number, menu: globalAndroid.view.Menu): boolean;
					}
				}
			}
		}
	}
}

declare module org {
	export module videolan {
		export module libvlc {
			export module util {
				export class Dumper extends java.lang.Object {
					public static class: java.lang.Class<org.videolan.libvlc.util.Dumper>;
					public constructor(uri: globalAndroid.net.Uri, filepath: string, listener: org.videolan.libvlc.util.Dumper.Listener);
					public cancel(): void;
					public start(): void;
				}
				export module Dumper {
					export class Listener extends java.lang.Object {
						public static class: java.lang.Class<org.videolan.libvlc.util.Dumper.Listener>;
						/**
						 * Constructs a new instance of the org.videolan.libvlc.util.Dumper() when extending the interface class.
						 */
						public constructor(implementation: {
							onFinish(boolean0: boolean): void;
							onProgress(float0: number): void;
						});
						public constructor();
						public onFinish(boolean0: boolean): void;
						public onProgress(float0: number): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module videolan {
		export module libvlc {
			export module util {
				export class Extensions extends java.lang.Object {
					public static class: java.lang.Class<org.videolan.libvlc.util.Extensions>;
					public static VIDEO: java.util.HashSet<string>;
					public static AUDIO: java.util.HashSet<string>;
					public static SUBTITLES: java.util.HashSet<string>;
					public static PLAYLIST: java.util.HashSet<string>;
					public constructor();
				}
			}
		}
	}
}

declare module org {
	export module videolan {
		export module libvlc {
			export module util {
				export class HWDecoderUtil extends java.lang.Object {
					public static class: java.lang.Class<org.videolan.libvlc.util.HWDecoderUtil>;
					public constructor();
					public static getDecoderFromDevice(): org.videolan.libvlc.util.HWDecoderUtil.Decoder;
					public static getAudioOutputFromDevice(): org.videolan.libvlc.util.HWDecoderUtil.AudioOutput;
				}
				export module HWDecoderUtil {
					export class AudioOutput {
						public static class: java.lang.Class<org.videolan.libvlc.util.HWDecoderUtil.AudioOutput>;
						public static OPENSLES: org.videolan.libvlc.util.HWDecoderUtil.AudioOutput;
						public static AUDIOTRACK: org.videolan.libvlc.util.HWDecoderUtil.AudioOutput;
						public static ALL: org.videolan.libvlc.util.HWDecoderUtil.AudioOutput;
						public static valueOf(name: string): org.videolan.libvlc.util.HWDecoderUtil.AudioOutput;
						public static values(): native.Array<org.videolan.libvlc.util.HWDecoderUtil.AudioOutput>;
						public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					}
					export class AudioOutputBySOC extends java.lang.Object {
						public static class: java.lang.Class<org.videolan.libvlc.util.HWDecoderUtil.AudioOutputBySOC>;
						public key: string;
						public value: string;
						public aout: org.videolan.libvlc.util.HWDecoderUtil.AudioOutput;
						public constructor(key: string, value: string, aout: org.videolan.libvlc.util.HWDecoderUtil.AudioOutput);
					}
					export class Decoder {
						public static class: java.lang.Class<org.videolan.libvlc.util.HWDecoderUtil.Decoder>;
						public static UNKNOWN: org.videolan.libvlc.util.HWDecoderUtil.Decoder;
						public static NONE: org.videolan.libvlc.util.HWDecoderUtil.Decoder;
						public static OMX: org.videolan.libvlc.util.HWDecoderUtil.Decoder;
						public static MEDIACODEC: org.videolan.libvlc.util.HWDecoderUtil.Decoder;
						public static ALL: org.videolan.libvlc.util.HWDecoderUtil.Decoder;
						public static valueOf(name: string): org.videolan.libvlc.util.HWDecoderUtil.Decoder;
						public static values(): native.Array<org.videolan.libvlc.util.HWDecoderUtil.Decoder>;
						public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					}
					export class DecoderBySOC extends java.lang.Object {
						public static class: java.lang.Class<org.videolan.libvlc.util.HWDecoderUtil.DecoderBySOC>;
						public key: string;
						public value: string;
						public dec: org.videolan.libvlc.util.HWDecoderUtil.Decoder;
						public constructor(key: string, value: string, dec: org.videolan.libvlc.util.HWDecoderUtil.Decoder);
					}
				}
			}
		}
	}
}

declare module org {
	export module videolan {
		export module libvlc {
			export module util {
				export class MediaBrowser extends java.lang.Object {
					public static class: java.lang.Class<org.videolan.libvlc.util.MediaBrowser>;
					public discoverNetworkShares(): void;
					public browse(path: string, flags: number): void;
					public getMediaAt(index: number): org.videolan.libvlc.interfaces.IMedia;
					public constructor(libvlc: org.videolan.libvlc.interfaces.ILibVLC, listener: org.videolan.libvlc.util.MediaBrowser.EventListener, handler: globalAndroid.os.Handler);
					public getMediaCount(): number;
					public constructor(libvlc: org.videolan.libvlc.interfaces.ILibVLC, listener: org.videolan.libvlc.util.MediaBrowser.EventListener);
					public changeEventListener(eventListener: org.videolan.libvlc.util.MediaBrowser.EventListener): void;
					public release(): void;
					public browse(uri: globalAndroid.net.Uri, flags: number): void;
					public browse(media: org.videolan.libvlc.interfaces.IMedia, flags: number): void;
					public discoverNetworkShares(serviceName: string): void;
					public setIgnoreFileTypes(list: string): void;
				}
				export module MediaBrowser {
					export class EventListener extends java.lang.Object {
						public static class: java.lang.Class<org.videolan.libvlc.util.MediaBrowser.EventListener>;
						/**
						 * Constructs a new instance of the org.videolan.libvlc.util.MediaBrowser() when extending the interface class.
						 */
						public constructor(implementation: {
							onMediaAdded(int0: number, iMedia1: org.videolan.libvlc.interfaces.IMedia): void;
							onMediaRemoved(int0: number, iMedia1: org.videolan.libvlc.interfaces.IMedia): void;
							onBrowseEnd(): void;
						});
						public constructor();
						public onMediaRemoved(int0: number, iMedia1: org.videolan.libvlc.interfaces.IMedia): void;
						public onBrowseEnd(): void;
						public onMediaAdded(int0: number, iMedia1: org.videolan.libvlc.interfaces.IMedia): void;
					}
					export class Flag extends java.lang.Object {
						public static class: java.lang.Class<org.videolan.libvlc.util.MediaBrowser.Flag>;
						public static Interact: number;
						public static NoSlavesAutodetect: number;
						public static ShowHiddenFiles: number;
						public constructor();
					}
				}
			}
		}
	}
}

declare module org {
	export module videolan {
		export module libvlc {
			export module util {
				export class VLCUtil extends java.lang.Object {
					public static class: java.lang.Class<org.videolan.libvlc.util.VLCUtil>;
					public static TAG: string;
					public static getErrorMsg(): string;
					public static encodeVLCUri(uri: globalAndroid.net.Uri): string;
					public static getABIList(): native.Array<string>;
					public constructor();
					public static encodeVLCString(mrl: string): string;
					public static hasCompatibleCPU(context: globalAndroid.content.Context): boolean;
					public static UriFromMrl(mrl: string): globalAndroid.net.Uri;
					public static getABIList21(): native.Array<string>;
					public static getMachineSpecs(): org.videolan.libvlc.util.VLCUtil.MachineSpecs;
				}
				export module VLCUtil {
					export class ElfData extends java.lang.Object {
						public static class: java.lang.Class<org.videolan.libvlc.util.VLCUtil.ElfData>;
					}
					export class MachineSpecs extends java.lang.Object {
						public static class: java.lang.Class<org.videolan.libvlc.util.VLCUtil.MachineSpecs>;
						public hasNeon: boolean;
						public hasFpu: boolean;
						public hasArmV6: boolean;
						public hasArmV7: boolean;
						public hasMips: boolean;
						public hasX86: boolean;
						public is64bits: boolean;
						public bogoMIPS: number;
						public processors: number;
						public frequency: number;
						public constructor();
					}
				}
			}
		}
	}
}

declare module org {
	export module videolan {
		export module libvlc {
			export module util {
				export class VLCVideoLayout extends globalAndroid.widget.FrameLayout {
					public static class: java.lang.Class<org.videolan.libvlc.util.VLCVideoLayout>;
					public showContextMenuForChild(originalView: globalAndroid.view.View, x: number, y: number): boolean;
					public requestTransparentRegion(child: globalAndroid.view.View): void;
					public childDrawableStateChanged(child: globalAndroid.view.View): void;
					public onNestedFling(target: globalAndroid.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
					public isLayoutRequested(): boolean;
					public onAttachedToWindow(): void;
					/** @deprecated */
					public invalidateChild(child: globalAndroid.view.View, dirty: globalAndroid.graphics.Rect): void;
					public focusableViewAvailable(v: globalAndroid.view.View): void;
					public focusSearch(direction: number): globalAndroid.view.View;
					public isTextDirectionResolved(): boolean;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
					public isLayoutDirectionResolved(): boolean;
					public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public showContextMenuForChild(originalView: globalAndroid.view.View): boolean;
					public onNestedScroll(target: globalAndroid.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
					public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
					public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
					public requestSendAccessibilityEvent(child: globalAndroid.view.View, event: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
					public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
					public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback, type: number): globalAndroid.view.ActionMode;
					public getLayoutDirection(): number;
					public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
					public onStartNestedScroll(child: globalAndroid.view.View, target: globalAndroid.view.View, nestedScrollAxes: number): boolean;
					/** @deprecated */
					public invalidateChildInParent(location: native.Array<number>, dirty: globalAndroid.graphics.Rect): globalAndroid.view.ViewParent;
					public recomputeViewAttributes(child: globalAndroid.view.View): void;
					public notifySubtreeAccessibilityStateChanged(child: globalAndroid.view.View, source: globalAndroid.view.View, changeType: number): void;
					public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
					public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public addView(child: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
					public constructor(context: globalAndroid.content.Context);
					public getTextDirection(): number;
					public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
					public requestFitSystemWindows(): void;
					public getParent(): globalAndroid.view.ViewParent;
					public isTextAlignmentResolved(): boolean;
					public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public sendAccessibilityEvent(eventType: number): void;
					public getChildVisibleRect(child: globalAndroid.view.View, r: globalAndroid.graphics.Rect, offset: globalAndroid.graphics.Point): boolean;
					public requestChildRectangleOnScreen(child: globalAndroid.view.View, rectangle: globalAndroid.graphics.Rect, immediate: boolean): boolean;
					public canResolveTextAlignment(): boolean;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
					/** @deprecated */
					public requestFitSystemWindows(): void;
					public addView(child: globalAndroid.view.View): void;
					public canResolveTextDirection(): boolean;
					public updateViewLayout(view: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
					public bringChildToFront(child: globalAndroid.view.View): void;
					public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
					public onNestedPreScroll(target: globalAndroid.view.View, dx: number, dy: number, consumed: native.Array<number>): void;
					public clearChildFocus(child: globalAndroid.view.View): void;
					public requestLayout(): void;
					public createContextMenu(menu: globalAndroid.view.ContextMenu): void;
					public getParentForAccessibility(): globalAndroid.view.ViewParent;
					public addView(child: globalAndroid.view.View, index: number, params: globalAndroid.view.ViewGroup.LayoutParams): void;
					public childHasTransientStateChanged(child: globalAndroid.view.View, childHasTransientState: boolean): void;
					public canResolveLayoutDirection(): boolean;
					public onNestedScrollAccepted(child: globalAndroid.view.View, target: globalAndroid.view.View, axes: number): void;
					public getTextAlignment(): number;
					public onDescendantInvalidated(child: globalAndroid.view.View, target: globalAndroid.view.View): void;
					public onNestedPrePerformAccessibilityAction(target: globalAndroid.view.View, action: number, bundle2: globalAndroid.os.Bundle): boolean;
					public keyboardNavigationClusterSearch(currentCluster: globalAndroid.view.View, direction: number): globalAndroid.view.View;
					public addView(child: globalAndroid.view.View, width: number, height: number): void;
					public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
					public requestChildFocus(child: globalAndroid.view.View, focused: globalAndroid.view.View): void;
					public onStopNestedScroll(child: globalAndroid.view.View): void;
					public onNestedPreFling(target: globalAndroid.view.View, velocityX: number, velocityY: number): boolean;
					public addView(child: globalAndroid.view.View, index: number): void;
					public removeView(view: globalAndroid.view.View): void;
					public focusSearch(focused: globalAndroid.view.View, direction: number): globalAndroid.view.View;
				}
			}
		}
	}
}

//Generics information:
//org.videolan.libvlc.VLCObject:1
//org.videolan.libvlc.interfaces.AbstractVLCEvent.Listener:1
//org.videolan.libvlc.interfaces.IVLCObject:1
//org.videolan.libvlc.stubs.StubVLCObject:1

