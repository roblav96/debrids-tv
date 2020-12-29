declare module cn {
	export module jzvd {
		export class BuildConfig extends java.lang.Object {
			public static class: java.lang.Class<cn.jzvd.BuildConfig>;
			public static DEBUG: boolean;
			public static LIBRARY_PACKAGE_NAME: string;
			public static BUILD_TYPE: string;
			public static VERSION_CODE: number;
			public static VERSION_NAME: string;
			public constructor();
		}
	}
}

declare module cn {
	export module jzvd {
		export class JZDataSource extends java.lang.Object {
			public static class: java.lang.Class<cn.jzvd.JZDataSource>;
			public static URL_KEY_DEFAULT: string;
			public currentUrlIndex: number;
			public urlsMap: java.util.LinkedHashMap<any,any>;
			public title: string;
			public headerMap: java.util.HashMap<string,string>;
			public looping: boolean;
			public objects: native.Array<any>;
			public cloneMe(): cn.jzvd.JZDataSource;
			public constructor(url: any);
			public getCurrentKey(): any;
			public getCurrentUrl(): any;
			public getValueFromLinkedMap(index: number): any;
			public constructor(url: string, title: string);
			public constructor(urlsMap: java.util.LinkedHashMap<any,any>);
			public containsTheUrl(object: any): boolean;
			public constructor(urlsMap: java.util.LinkedHashMap<any,any>, title: string);
			public getKeyFromDataSource(index: number): string;
			public constructor(url: string);
		}
	}
}

declare module cn {
	export module jzvd {
		export abstract class JZMediaInterface extends java.lang.Object implements globalAndroid.view.TextureView.SurfaceTextureListener {
			public static class: java.lang.Class<cn.jzvd.JZMediaInterface>;
			public static SAVED_SURFACE: globalAndroid.graphics.SurfaceTexture;
			public mMediaHandlerThread: globalAndroid.os.HandlerThread;
			public mMediaHandler: globalAndroid.os.Handler;
			public handler: globalAndroid.os.Handler;
			public jzvd: cn.jzvd.Jzvd;
			public prepare(): void;
			public onSurfaceTextureSizeChanged(surfaceTexture0: globalAndroid.graphics.SurfaceTexture, int1: number, int2: number): void;
			public getDuration(): number;
			public getCurrentPosition(): number;
			public setSurface(surface0: globalAndroid.view.Surface): void;
			public constructor(jzvd: cn.jzvd.Jzvd);
			public isPlaying(): boolean;
			public pause(): void;
			public setVolume(float0: number, float1: number): void;
			public onSurfaceTextureUpdated(surfaceTexture0: globalAndroid.graphics.SurfaceTexture): void;
			public seekTo(long0: number): void;
			public onSurfaceTextureAvailable(surfaceTexture0: globalAndroid.graphics.SurfaceTexture, int1: number, int2: number): void;
			public onSurfaceTextureDestroyed(surfaceTexture0: globalAndroid.graphics.SurfaceTexture): boolean;
			public setSpeed(float0: number): void;
			public start(): void;
			public release(): void;
		}
	}
}

declare module cn {
	export module jzvd {
		export class JZMediaSystem extends cn.jzvd.JZMediaInterface implements globalAndroid.media.MediaPlayer.OnPreparedListener, globalAndroid.media.MediaPlayer.OnCompletionListener, globalAndroid.media.MediaPlayer.OnBufferingUpdateListener, globalAndroid.media.MediaPlayer.OnSeekCompleteListener, globalAndroid.media.MediaPlayer.OnErrorListener, globalAndroid.media.MediaPlayer.OnInfoListener, globalAndroid.media.MediaPlayer.OnVideoSizeChangedListener {
			public static class: java.lang.Class<cn.jzvd.JZMediaSystem>;
			public mediaPlayer: globalAndroid.media.MediaPlayer;
			public prepare(): void;
			public onSurfaceTextureAvailable(surface: globalAndroid.graphics.SurfaceTexture, width: number, height: number): void;
			public onSeekComplete(mediaPlayer: globalAndroid.media.MediaPlayer): void;
			public getDuration(): number;
			public onCompletion(mediaPlayer: globalAndroid.media.MediaPlayer): void;
			public onSurfaceTextureSizeChanged(surface: globalAndroid.graphics.SurfaceTexture, width: number, height: number): void;
			public isPlaying(): boolean;
			public pause(): void;
			public setVolume(float0: number, float1: number): void;
			public onPrepared(mediaPlayer: globalAndroid.media.MediaPlayer): void;
			public setSpeed(speed: number): void;
			public seekTo(long0: number): void;
			public start(): void;
			public release(): void;
			public setVolume(leftVolume: number, rightVolume: number): void;
			public onVideoSizeChanged(mediaPlayer: globalAndroid.media.MediaPlayer, width: number, height: number): void;
			public getCurrentPosition(): number;
			public setSurface(surface0: globalAndroid.view.Surface): void;
			public constructor(jzvd: cn.jzvd.Jzvd);
			public seekTo(time: number): void;
			public setSurface(surface: globalAndroid.view.Surface): void;
			public onSurfaceTextureDestroyed(surface: globalAndroid.graphics.SurfaceTexture): boolean;
			public onError(mediaPlayer: globalAndroid.media.MediaPlayer, what: number, extra: number): boolean;
			public onSurfaceTextureUpdated(surface: globalAndroid.graphics.SurfaceTexture): void;
			public setSpeed(float0: number): void;
			public onInfo(mediaPlayer: globalAndroid.media.MediaPlayer, what: number, extra: number): boolean;
			public onBufferingUpdate(mediaPlayer: globalAndroid.media.MediaPlayer, percent: number): void;
		}
	}
}

declare module cn {
	export module jzvd {
		export class JZTextureView extends globalAndroid.view.TextureView {
			public static class: java.lang.Class<cn.jzvd.JZTextureView>;
			public static TAG: string;
			public currentVideoWidth: number;
			public currentVideoHeight: number;
			public setRotation(rotation: number): void;
			public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
			public constructor(context: globalAndroid.content.Context);
			public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
			public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
			public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
			public setVideoSize(currentVideoWidth: number, currentVideoHeight: number): void;
			public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
			public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
			public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
			public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
			public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
			public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
			public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
			public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
			public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
			public sendAccessibilityEvent(eventType: number): void;
		}
	}
}

declare module cn {
	export module jzvd {
		export class JZUtils extends java.lang.Object {
			public static class: java.lang.Class<cn.jzvd.JZUtils>;
			public static TAG: string;
			public static SYSTEM_UI: number;
			public static getScreenWidth(context: globalAndroid.content.Context): number;
			public static getStatusBarHeight(context: globalAndroid.content.Context): number;
			public static stringForTime(timeMs: number): string;
			public static saveProgress(context: globalAndroid.content.Context, url: any, progress: number): void;
			public static hideStatusBar(context: globalAndroid.content.Context): void;
			public static getScreenHeight(context: globalAndroid.content.Context): number;
			public constructor();
			public static hideSystemUI(context: globalAndroid.content.Context): void;
			public static showStatusBar(context: globalAndroid.content.Context): void;
			public static setRequestedOrientation(context: globalAndroid.content.Context, orientation: number): void;
			public static isWifiConnected(context: globalAndroid.content.Context): boolean;
			public static getSavedProgress(context: globalAndroid.content.Context, url: any): number;
			public static scanForActivity(context: globalAndroid.content.Context): globalAndroid.app.Activity;
			public static getWindow(context: globalAndroid.content.Context): globalAndroid.view.Window;
			public static showSystemUI(context: globalAndroid.content.Context): void;
			public static dip2px(context: globalAndroid.content.Context, dpValue: number): number;
			public static clearSavedProgress(context: globalAndroid.content.Context, url: any): void;
			public static getNavigationBarHeight(context: globalAndroid.content.Context): number;
		}
	}
}

declare module cn {
	export module jzvd {
		export abstract class Jzvd extends globalAndroid.widget.FrameLayout implements globalAndroid.view.View.OnClickListener, globalAndroid.widget.SeekBar.OnSeekBarChangeListener, globalAndroid.view.View.OnTouchListener {
			public static class: java.lang.Class<cn.jzvd.Jzvd>;
			public static TAG: string;
			public static SCREEN_NORMAL: number;
			public static SCREEN_FULLSCREEN: number;
			public static SCREEN_TINY: number;
			public static STATE_IDLE: number;
			public static STATE_NORMAL: number;
			public static STATE_PREPARING: number;
			public static STATE_PREPARING_CHANGE_URL: number;
			public static STATE_PREPARING_PLAYING: number;
			public static STATE_PREPARED: number;
			public static STATE_PLAYING: number;
			public static STATE_PAUSE: number;
			public static STATE_AUTO_COMPLETE: number;
			public static STATE_ERROR: number;
			public static VIDEO_IMAGE_DISPLAY_TYPE_ADAPTER: number;
			public static VIDEO_IMAGE_DISPLAY_TYPE_FILL_PARENT: number;
			public static VIDEO_IMAGE_DISPLAY_TYPE_FILL_SCROP: number;
			public static VIDEO_IMAGE_DISPLAY_TYPE_ORIGINAL: number;
			public static THRESHOLD: number;
			public static CURRENT_JZVD: cn.jzvd.Jzvd;
			public static CONTAINER_LIST: java.util.LinkedList<globalAndroid.view.ViewGroup>;
			public static TOOL_BAR_EXIST: boolean;
			public static FULLSCREEN_ORIENTATION: number;
			public static NORMAL_ORIENTATION: number;
			public static SAVE_PROGRESS: boolean;
			public static WIFI_TIP_DIALOG_SHOWED: boolean;
			public static VIDEO_IMAGE_DISPLAY_TYPE: number;
			public static lastAutoFullscreenTime: number;
			public static ON_PLAY_PAUSE_TMP_STATE: number;
			public static backUpBufferState: number;
			public static onAudioFocusChangeListener: globalAndroid.media.AudioManager.OnAudioFocusChangeListener;
			public state: number;
			public screen: number;
			public jzDataSource: cn.jzvd.JZDataSource;
			public widthRatio: number;
			public heightRatio: number;
			public mediaInterfaceClass: java.lang.Class<any>;
			public mediaInterface: cn.jzvd.JZMediaInterface;
			public positionInList: number;
			public videoRotation: number;
			public seekToManulPosition: number;
			public seekToInAdvance: number;
			public startButton: globalAndroid.widget.ImageView;
			public progressBar: globalAndroid.widget.SeekBar;
			public fullscreenButton: globalAndroid.widget.ImageView;
			public currentTimeTextView: globalAndroid.widget.TextView;
			public totalTimeTextView: globalAndroid.widget.TextView;
			public textureViewContainer: globalAndroid.view.ViewGroup;
			public topContainer: globalAndroid.view.ViewGroup;
			public bottomContainer: globalAndroid.view.ViewGroup;
			public textureView: cn.jzvd.JZTextureView;
			public preloading: boolean;
			public gobakFullscreenTime: number;
			public gotoFullscreenTime: number;
			public UPDATE_PROGRESS_TIMER: java.util.Timer;
			public mScreenWidth: number;
			public mScreenHeight: number;
			public mAudioManager: globalAndroid.media.AudioManager;
			public mProgressTimerTask: cn.jzvd.Jzvd.ProgressTimerTask;
			public mTouchingProgressBar: boolean;
			public mDownX: number;
			public mDownY: number;
			public mChangeVolume: boolean;
			public mChangePosition: boolean;
			public mChangeBrightness: boolean;
			public mGestureDownPosition: number;
			public mGestureDownVolume: number;
			public mGestureDownBrightness: number;
			public mSeekTimePosition: number;
			public jzvdContext: globalAndroid.content.Context;
			public mCurrentPosition: number;
			public blockLayoutParams: globalAndroid.view.ViewGroup.LayoutParams;
			public blockIndex: number;
			public blockWidth: number;
			public blockHeight: number;
			public setUp(jzDataSource: cn.jzvd.JZDataSource, screen: number, mediaInterfaceClass: java.lang.Class<any>): void;
			public startPreloading(): void;
			public clearChildFocus(child: globalAndroid.view.View): void;
			public showBrightnessDialog(brightnessPercent: number): void;
			/** @deprecated */
			public invalidateChildInParent(location: native.Array<number>, dirty: globalAndroid.graphics.Rect): globalAndroid.view.ViewParent;
			public showContextMenuForChild(originalView: globalAndroid.view.View, x: number, y: number): boolean;
			public onStatePause(): void;
			public onCompletion(): void;
			public showProgressDialog(deltaX: number, seekTime: string, seekTimePosition: number, totalTime: string, totalTimeDuration: number): void;
			public static startFullscreenDirectly(context: globalAndroid.content.Context, _class: java.lang.Class<any>, jzDataSource: cn.jzvd.JZDataSource): void;
			public setUp(url: string, title: string): void;
			public createContextMenu(menu: globalAndroid.view.ContextMenu): void;
			public onStatePreparing(): void;
			public setUp(url: string, title: string, screen: number, mediaInterfaceClass: java.lang.Class<any>): void;
			public bringChildToFront(child: globalAndroid.view.View): void;
			public onStateError(): void;
			public dismissVolumeDialog(): void;
			public canResolveTextAlignment(): boolean;
			public static goOnPlayOnResume(): void;
			public addView(child: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
			public keyboardNavigationClusterSearch(currentCluster: globalAndroid.view.View, direction: number): globalAndroid.view.View;
			public changeUrl(jzDataSource: cn.jzvd.JZDataSource, seekToInAdvance: number): void;
			public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
			public touchActionUp(): void;
			public getLayoutDirection(): number;
			public focusSearch(direction: number): globalAndroid.view.View;
			public onStartNestedScroll(child: globalAndroid.view.View, target: globalAndroid.view.View, nestedScrollAxes: number): boolean;
			public onNestedPreScroll(target: globalAndroid.view.View, dx: number, dy: number, consumed: native.Array<number>): void;
			public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
			public gotoFullscreen(): void;
			public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
			public autoQuitFullscreen(): void;
			public touchActionMove(x: number, y: number): void;
			public updateViewLayout(view: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
			public isLayoutRequested(): boolean;
			public setBufferProgress(bufferProgress: number): void;
			public getLayoutId(): number;
			public onStatePreparingPlaying(): void;
			public setScreenNormal(): void;
			public dismissProgressDialog(): void;
			public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
			public addView(child: globalAndroid.view.View, index: number, params: globalAndroid.view.ViewGroup.LayoutParams): void;
			public clearFloatScreen(): void;
			public showWifiDialog(): void;
			public focusSearch(focused: globalAndroid.view.View, direction: number): globalAndroid.view.View;
			public onPrepared(): void;
			public touchActionDown(x: number, y: number): void;
			public onStateAutoComplete(): void;
			public showContextMenuForChild(originalView: globalAndroid.view.View): boolean;
			public resetProgressAndTime(): void;
			public onStateNormal(): void;
			public onNestedScroll(target: globalAndroid.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
			public addView(child: globalAndroid.view.View, index: number): void;
			public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
			public setUp(url: string, title: string, screen: number): void;
			public onStopTrackingTouch(seekBar: globalAndroid.widget.SeekBar): void;
			public requestLayout(): void;
			public addView(child: globalAndroid.view.View): void;
			public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
			public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
			public gotoNormalScreen(): void;
			public canResolveTextDirection(): boolean;
			public requestChildRectangleOnScreen(child: globalAndroid.view.View, rectangle: globalAndroid.graphics.Rect, immediate: boolean): boolean;
			public startVideoAfterPreloading(): void;
			public setScreenTiny(): void;
			public gotoNormalCompletion(): void;
			/** @deprecated */
			public requestFitSystemWindows(): void;
			public static startFullscreenDirectly(context: globalAndroid.content.Context, _class: java.lang.Class<any>, url: string, title: string): void;
			public onNestedFling(target: globalAndroid.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
			public onTouch(v: globalAndroid.view.View, event: globalAndroid.view.MotionEvent): boolean;
			public notifySubtreeAccessibilityStateChanged(child: globalAndroid.view.View, source: globalAndroid.view.View, changeType: number): void;
			public childHasTransientStateChanged(child: globalAndroid.view.View, childHasTransientState: boolean): void;
			public onSeekComplete(): void;
			public requestSendAccessibilityEvent(child: globalAndroid.view.View, event: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
			public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
			public dismissBrightnessDialog(): void;
			public addTextureView(): void;
			public requestFitSystemWindows(): void;
			public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback, type: number): globalAndroid.view.ActionMode;
			public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
			public onClick(v: globalAndroid.view.View): void;
			public isLayoutDirectionResolved(): boolean;
			public clickStart(): void;
			public static setCurrentJzvd(jzvd: cn.jzvd.Jzvd): void;
			public onStopNestedScroll(child: globalAndroid.view.View): void;
			public onVideoSizeChanged(width: number, height: number): void;
			public static setTextureViewRotation(rotation: number): void;
			public canResolveLayoutDirection(): boolean;
			public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
			public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
			public requestChildFocus(child: globalAndroid.view.View, focused: globalAndroid.view.View): void;
			public setUp(jzDataSource: cn.jzvd.JZDataSource, screen: number): void;
			public recomputeViewAttributes(child: globalAndroid.view.View): void;
			public autoFullscreen(x: number): void;
			public onDescendantInvalidated(child: globalAndroid.view.View, target: globalAndroid.view.View): void;
			public setState(state: number): void;
			public getChildVisibleRect(child: globalAndroid.view.View, r: globalAndroid.graphics.Rect, offset: globalAndroid.graphics.Point): boolean;
			public static releaseAllVideos(): void;
			public setMediaInterface(mediaInterfaceClass: java.lang.Class<any>): void;
			public onInfo(what: number, extra: number): void;
			public showVolumeDialog(deltaY: number, volumePercent: number): void;
			public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
			/** @deprecated */
			public invalidateChild(child: globalAndroid.view.View, dirty: globalAndroid.graphics.Rect): void;
			public setScreen(screen: number): void;
			public getTextAlignment(): number;
			public static setVideoImageDisplayType(type: number): void;
			public onNestedScrollAccepted(child: globalAndroid.view.View, target: globalAndroid.view.View, axes: number): void;
			public cloneAJzvd(vg: globalAndroid.view.ViewGroup): void;
			public static goOnPlayOnPause(): void;
			public clickFullscreen(): void;
			public static backPress(): boolean;
			public startVideo(): void;
			public onNestedPreFling(target: globalAndroid.view.View, velocityX: number, velocityY: number): boolean;
			public constructor(context: globalAndroid.content.Context);
			public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
			public cancelProgressTimer(): void;
			public getDuration(): number;
			public removeView(view: globalAndroid.view.View): void;
			public getParentForAccessibility(): globalAndroid.view.ViewParent;
			public onNestedPrePerformAccessibilityAction(target: globalAndroid.view.View, action: number, bundle2: globalAndroid.os.Bundle): boolean;
			public getCurrentPositionWhenPlaying(): number;
			public requestTransparentRegion(child: globalAndroid.view.View): void;
			public getParent(): globalAndroid.view.ViewParent;
			public focusableViewAvailable(v: globalAndroid.view.View): void;
			public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
			public childDrawableStateChanged(child: globalAndroid.view.View): void;
			public addView(child: globalAndroid.view.View, width: number, height: number): void;
			public onError(what: number, extra: number): void;
			public reset(): void;
			public startProgressTimer(): void;
			public onStartTrackingTouch(seekBar: globalAndroid.widget.SeekBar): void;
			public setScreenFullscreen(): void;
			public onStatePlaying(): void;
			public init(context: globalAndroid.content.Context): void;
			public isTextAlignmentResolved(): boolean;
			public onProgressChanged(seekBar: globalAndroid.widget.SeekBar, progress: number, fromUser: boolean): void;
			public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
			public getTextDirection(): number;
			public onProgress(progress: number, position: number, duration: number): void;
			public onStatePreparingChangeUrl(): void;
			public getApplicationContext(): globalAndroid.content.Context;
			public isTextDirectionResolved(): boolean;
			public sendAccessibilityEvent(eventType: number): void;
		}
		export module Jzvd {
			export class JZAutoFullscreenListener extends java.lang.Object implements globalAndroid.hardware.SensorEventListener {
				public static class: java.lang.Class<cn.jzvd.Jzvd.JZAutoFullscreenListener>;
				public onAccuracyChanged(sensor: globalAndroid.hardware.Sensor, accuracy: number): void;
				public onSensorChanged(event: globalAndroid.hardware.SensorEvent): void;
				public constructor();
			}
			export class ProgressTimerTask extends java.util.TimerTask {
				public static class: java.lang.Class<cn.jzvd.Jzvd.ProgressTimerTask>;
				public run(): void;
				public constructor(this0: cn.jzvd.Jzvd);
				public constructor();
			}
		}
	}
}

declare module cn {
	export module jzvd {
		export class JzvdStd extends cn.jzvd.Jzvd {
			public static class: java.lang.Class<cn.jzvd.JzvdStd>;
			public static LAST_GET_BATTERYLEVEL_TIME: number;
			public static LAST_GET_BATTERYLEVEL_PERCENT: number;
			public static DISMISS_CONTROL_VIEW_TIMER: java.util.Timer;
			public backButton: globalAndroid.widget.ImageView;
			public bottomProgressBar: globalAndroid.widget.ProgressBar;
			public loadingProgressBar: globalAndroid.widget.ProgressBar;
			public titleTextView: globalAndroid.widget.TextView;
			public posterImageView: globalAndroid.widget.ImageView;
			public tinyBackImageView: globalAndroid.widget.ImageView;
			public batteryTimeLayout: globalAndroid.widget.LinearLayout;
			public batteryLevel: globalAndroid.widget.ImageView;
			public videoCurrentTime: globalAndroid.widget.TextView;
			public replayTextView: globalAndroid.widget.TextView;
			public clarity: globalAndroid.widget.TextView;
			public clarityPopWindow: globalAndroid.widget.PopupWindow;
			public mRetryBtn: globalAndroid.widget.TextView;
			public mRetryLayout: globalAndroid.widget.LinearLayout;
			public battertReceiver: globalAndroid.content.BroadcastReceiver;
			public mDismissControlViewTimerTask: cn.jzvd.JzvdStd.DismissControlViewTimerTask;
			public mProgressDialog: globalAndroid.app.Dialog;
			public mDialogProgressBar: globalAndroid.widget.ProgressBar;
			public mDialogSeekTime: globalAndroid.widget.TextView;
			public mDialogTotalTime: globalAndroid.widget.TextView;
			public mDialogIcon: globalAndroid.widget.ImageView;
			public mVolumeDialog: globalAndroid.app.Dialog;
			public mDialogVolumeProgressBar: globalAndroid.widget.ProgressBar;
			public mDialogVolumeTextView: globalAndroid.widget.TextView;
			public mDialogVolumeImageView: globalAndroid.widget.ImageView;
			public mBrightnessDialog: globalAndroid.app.Dialog;
			public mDialogBrightnessProgressBar: globalAndroid.widget.ProgressBar;
			public mDialogBrightnessTextView: globalAndroid.widget.TextView;
			public mIsWifi: boolean;
			public wifiReceiver: globalAndroid.content.BroadcastReceiver;
			public lastClickTime: number;
			public doubleTime: number;
			public delayTask: java.util.ArrayDeque<java.lang.Runnable>;
			public setUp(jzDataSource: cn.jzvd.JZDataSource, screen: number, mediaInterfaceClass: java.lang.Class<any>): void;
			public clearChildFocus(child: globalAndroid.view.View): void;
			public changeUiToPlayingClear(): void;
			public showBrightnessDialog(brightnessPercent: number): void;
			/** @deprecated */
			public invalidateChildInParent(location: native.Array<number>, dirty: globalAndroid.graphics.Rect): globalAndroid.view.ViewParent;
			public showContextMenuForChild(originalView: globalAndroid.view.View, x: number, y: number): boolean;
			public onStatePause(): void;
			public onCompletion(): void;
			public setSystemTimeAndBattery(): void;
			public showProgressDialog(deltaX: number, seekTime: string, seekTimePosition: number, totalTime: string, totalTimeDuration: number): void;
			public setUp(url: string, title: string): void;
			public createContextMenu(menu: globalAndroid.view.ContextMenu): void;
			public onStatePreparing(): void;
			public setUp(url: string, title: string, screen: number, mediaInterfaceClass: java.lang.Class<any>): void;
			public setBatteryLevel(): void;
			public bringChildToFront(child: globalAndroid.view.View): void;
			public onStateError(): void;
			public dismissVolumeDialog(): void;
			public canResolveTextAlignment(): boolean;
			public addView(child: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
			public startDismissControlViewTimer(): void;
			public keyboardNavigationClusterSearch(currentCluster: globalAndroid.view.View, direction: number): globalAndroid.view.View;
			public changeUrl(jzDataSource: cn.jzvd.JZDataSource, seekToInAdvance: number): void;
			public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
			public getLayoutDirection(): number;
			public focusSearch(direction: number): globalAndroid.view.View;
			public onClickUiToggle(): void;
			public onStartNestedScroll(child: globalAndroid.view.View, target: globalAndroid.view.View, nestedScrollAxes: number): boolean;
			public onNestedPreScroll(target: globalAndroid.view.View, dx: number, dy: number, consumed: native.Array<number>): void;
			public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
			public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
			public updateViewLayout(view: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
			public isLayoutRequested(): boolean;
			public setBufferProgress(bufferProgress: number): void;
			public getLayoutId(): number;
			public onStatePreparingPlaying(): void;
			public setScreenNormal(): void;
			public dismissProgressDialog(): void;
			public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
			public addView(child: globalAndroid.view.View, index: number, params: globalAndroid.view.ViewGroup.LayoutParams): void;
			public clickClarity(): void;
			public showWifiDialog(): void;
			public focusSearch(focused: globalAndroid.view.View, direction: number): globalAndroid.view.View;
			public onStateAutoComplete(): void;
			public showContextMenuForChild(originalView: globalAndroid.view.View): boolean;
			public resetProgressAndTime(): void;
			public onStateNormal(): void;
			public onNestedScroll(target: globalAndroid.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
			public dissmissControlView(): void;
			public addView(child: globalAndroid.view.View, index: number): void;
			public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
			public setUp(url: string, title: string, screen: number): void;
			public onStopTrackingTouch(seekBar: globalAndroid.widget.SeekBar): void;
			public requestLayout(): void;
			public addView(child: globalAndroid.view.View): void;
			public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
			public createDialogWithView(localView: globalAndroid.view.View): globalAndroid.app.Dialog;
			public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
			public canResolveTextDirection(): boolean;
			public requestChildRectangleOnScreen(child: globalAndroid.view.View, rectangle: globalAndroid.graphics.Rect, immediate: boolean): boolean;
			public updateStartImage(): void;
			public setScreenTiny(): void;
			/** @deprecated */
			public requestFitSystemWindows(): void;
			public changeUiToError(): void;
			public onNestedFling(target: globalAndroid.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
			public changeStartButtonSize(size: number): void;
			public onTouch(v: globalAndroid.view.View, event: globalAndroid.view.MotionEvent): boolean;
			public clickBackTiny(): void;
			public notifySubtreeAccessibilityStateChanged(child: globalAndroid.view.View, source: globalAndroid.view.View, changeType: number): void;
			public cancelDismissControlViewTimer(): void;
			public childHasTransientStateChanged(child: globalAndroid.view.View, childHasTransientState: boolean): void;
			public clickSurfaceContainer(): void;
			public requestSendAccessibilityEvent(child: globalAndroid.view.View, event: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
			public changeUiToComplete(): void;
			public setAllControlsVisiblity(topCon: number, bottomCon: number, startBtn: number, loadingPro: number, posterImg: number, bottomPro: number, retryLayout: number): void;
			public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
			public dismissBrightnessDialog(): void;
			public requestFitSystemWindows(): void;
			public changeUiToPreparing(): void;
			public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback, type: number): globalAndroid.view.ActionMode;
			public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
			public onClick(v: globalAndroid.view.View): void;
			public isLayoutDirectionResolved(): boolean;
			public changeUIToPreparingChangeUrl(): void;
			public changeUiToPauseShow(): void;
			public onStopNestedScroll(child: globalAndroid.view.View): void;
			public clickPoster(): void;
			public canResolveLayoutDirection(): boolean;
			public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
			public changeUiToNormal(): void;
			public onCLickUiToggleToClear(): void;
			public requestChildFocus(child: globalAndroid.view.View, focused: globalAndroid.view.View): void;
			public clickBack(): void;
			public setUp(jzDataSource: cn.jzvd.JZDataSource, screen: number): void;
			public recomputeViewAttributes(child: globalAndroid.view.View): void;
			public onDescendantInvalidated(child: globalAndroid.view.View, target: globalAndroid.view.View): void;
			public getChildVisibleRect(child: globalAndroid.view.View, r: globalAndroid.graphics.Rect, offset: globalAndroid.graphics.Point): boolean;
			public unregisterWifiListener(context: globalAndroid.content.Context): void;
			public showVolumeDialog(deltaY: number, volumePercent: number): void;
			public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
			/** @deprecated */
			public invalidateChild(child: globalAndroid.view.View, dirty: globalAndroid.graphics.Rect): void;
			public getTextAlignment(): number;
			public changeUIToPreparingPlaying(): void;
			public onNestedScrollAccepted(child: globalAndroid.view.View, target: globalAndroid.view.View, axes: number): void;
			public clickRetryBtn(): void;
			public startVideo(): void;
			public registerWifiListener(context: globalAndroid.content.Context): void;
			public onNestedPreFling(target: globalAndroid.view.View, velocityX: number, velocityY: number): boolean;
			public constructor(context: globalAndroid.content.Context);
			public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
			public removeView(view: globalAndroid.view.View): void;
			public getParentForAccessibility(): globalAndroid.view.ViewParent;
			public onNestedPrePerformAccessibilityAction(target: globalAndroid.view.View, action: number, bundle2: globalAndroid.os.Bundle): boolean;
			public requestTransparentRegion(child: globalAndroid.view.View): void;
			public getParent(): globalAndroid.view.ViewParent;
			public focusableViewAvailable(v: globalAndroid.view.View): void;
			public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
			public childDrawableStateChanged(child: globalAndroid.view.View): void;
			public addView(child: globalAndroid.view.View, width: number, height: number): void;
			public reset(): void;
			public onStartTrackingTouch(seekBar: globalAndroid.widget.SeekBar): void;
			public setScreenFullscreen(): void;
			public onStatePlaying(): void;
			public init(context: globalAndroid.content.Context): void;
			public isTextAlignmentResolved(): boolean;
			public onProgressChanged(seekBar: globalAndroid.widget.SeekBar, progress: number, fromUser: boolean): void;
			public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
			public getTextDirection(): number;
			public changeUiToPlayingShow(): void;
			public onProgress(progress: number, position: number, duration: number): void;
			public onStatePreparingChangeUrl(): void;
			public isTextDirectionResolved(): boolean;
			public changeUiToPauseClear(): void;
			public sendAccessibilityEvent(eventType: number): void;
		}
		export module JzvdStd {
			export class DismissControlViewTimerTask extends java.util.TimerTask {
				public static class: java.lang.Class<cn.jzvd.JzvdStd.DismissControlViewTimerTask>;
				public run(): void;
				public constructor(this0: cn.jzvd.JzvdStd);
				public constructor();
			}
		}
	}
}

//Generics information:

