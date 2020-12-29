declare module com {
	export module google {
		export module android {
			export module exoplayer2 {
				export module ui {
					export class AspectRatioFrameLayout extends globalAndroid.widget.FrameLayout {
						public static class: java.lang.Class<com.google.android.exoplayer2.ui.AspectRatioFrameLayout>;
						public static RESIZE_MODE_FIT: number;
						public static RESIZE_MODE_FIXED_WIDTH: number;
						public static RESIZE_MODE_FIXED_HEIGHT: number;
						public static RESIZE_MODE_FILL: number;
						public static RESIZE_MODE_ZOOM: number;
						public isLayoutRequested(): boolean;
						public bringChildToFront(child: globalAndroid.view.View): void;
						public childHasTransientStateChanged(child: globalAndroid.view.View, childHasTransientState: boolean): void;
						public canResolveLayoutDirection(): boolean;
						public onNestedPrePerformAccessibilityAction(target: globalAndroid.view.View, action: number, bundle2: globalAndroid.os.Bundle): boolean;
						public requestTransparentRegion(child: globalAndroid.view.View): void;
						public updateViewLayout(view: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
						public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
						public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
						public isTextAlignmentResolved(): boolean;
						public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
						public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
						public onNestedScrollAccepted(child: globalAndroid.view.View, target: globalAndroid.view.View, axes: number): void;
						public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
						public getTextDirection(): number;
						public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
						public getChildVisibleRect(child: globalAndroid.view.View, r: globalAndroid.graphics.Rect, offset: globalAndroid.graphics.Point): boolean;
						public addView(child: globalAndroid.view.View): void;
						public addView(child: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
						public focusableViewAvailable(v: globalAndroid.view.View): void;
						public requestChildFocus(child: globalAndroid.view.View, focused: globalAndroid.view.View): void;
						public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
						public sendAccessibilityEvent(eventType: number): void;
						public canResolveTextDirection(): boolean;
						public isLayoutDirectionResolved(): boolean;
						public onStartNestedScroll(child: globalAndroid.view.View, target: globalAndroid.view.View, nestedScrollAxes: number): boolean;
						public recomputeViewAttributes(child: globalAndroid.view.View): void;
						public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
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
						public onNestedFling(target: globalAndroid.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
						public addView(child: globalAndroid.view.View, index: number): void;
						public onNestedPreFling(target: globalAndroid.view.View, velocityX: number, velocityY: number): boolean;
						public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
						public focusSearch(focused: globalAndroid.view.View, direction: number): globalAndroid.view.View;
						public requestChildRectangleOnScreen(child: globalAndroid.view.View, rectangle: globalAndroid.graphics.Rect, immediate: boolean): boolean;
						public requestFitSystemWindows(): void;
						public getParentForAccessibility(): globalAndroid.view.ViewParent;
						public createContextMenu(menu: globalAndroid.view.ContextMenu): void;
						public setAspectRatio(widthHeightRatio: number): void;
						public focusSearch(direction: number): globalAndroid.view.View;
						public onStopNestedScroll(child: globalAndroid.view.View): void;
						public showContextMenuForChild(originalView: globalAndroid.view.View): boolean;
						public getResizeMode(): number;
						public getTextAlignment(): number;
						public onNestedPreScroll(target: globalAndroid.view.View, dx: number, dy: number, consumed: native.Array<number>): void;
						public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
						public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
						public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback, type: number): globalAndroid.view.ActionMode;
						public notifySubtreeAccessibilityStateChanged(child: globalAndroid.view.View, source: globalAndroid.view.View, changeType: number): void;
						public setResizeMode(resizeMode: number): void;
						public setAspectRatioListener(listener: com.google.android.exoplayer2.ui.AspectRatioFrameLayout.AspectRatioListener): void;
						public getParent(): globalAndroid.view.ViewParent;
						public getLayoutDirection(): number;
						public canResolveTextAlignment(): boolean;
						public constructor(context: globalAndroid.content.Context);
						public onDescendantInvalidated(child: globalAndroid.view.View, target: globalAndroid.view.View): void;
					}
					export module AspectRatioFrameLayout {
						export class AspectRatioListener extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.ui.AspectRatioFrameLayout.AspectRatioListener>;
							/**
							 * Constructs a new instance of the com.google.android.exoplayer2.ui.AspectRatioFrameLayout() when extending the interface class.
							 */
							public constructor(implementation: {
								onAspectRatioUpdated(float0: number, float1: number, boolean2: boolean): void;
							});
							public constructor();
							public onAspectRatioUpdated(float0: number, float1: number, boolean2: boolean): void;
						}
						export class AspectRatioUpdateDispatcher extends java.lang.Object implements java.lang.Runnable {
							public static class: java.lang.Class<com.google.android.exoplayer2.ui.AspectRatioFrameLayout.AspectRatioUpdateDispatcher>;
							public scheduleUpdate(targetAspectRatio: number, naturalAspectRatio: number, aspectRatioMismatch: boolean): void;
							public run(): void;
						}
						export class ResizeMode extends java.lang.Object implements java.lang.annotation.Annotation {
							public static class: java.lang.Class<com.google.android.exoplayer2.ui.AspectRatioFrameLayout.ResizeMode>;
							/**
							 * Constructs a new instance of the com.google.android.exoplayer2.ui.AspectRatioFrameLayout() when extending the interface class.
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

declare module com {
	export module google {
		export module android {
			export module exoplayer2 {
				export module ui {
					export class BuildConfig extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.ui.BuildConfig>;
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
				export module ui {
					export class CanvasSubtitleOutput extends globalAndroid.view.View implements com.google.android.exoplayer2.ui.SubtitleView.Output {
						public static class: java.lang.Class<com.google.android.exoplayer2.ui.CanvasSubtitleOutput>;
						public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
						public update(cues: java.util.List<com.google.android.exoplayer2.text.Cue>, style: com.google.android.exoplayer2.text.CaptionStyleCompat, textSize: number, textSizeType: number, bottomPaddingFraction: number): void;
						public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
						public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
						public sendAccessibilityEvent(eventType: number): void;
						public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
						public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
						public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
						public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
						public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
						public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
						public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
						public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
						public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
						public dispatchDraw(canvas: globalAndroid.graphics.Canvas): void;
						public constructor(context: globalAndroid.content.Context);
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
				export module ui {
					export class DebugTextViewHelper extends java.lang.Object implements com.google.android.exoplayer2.Player.EventListener, java.lang.Runnable {
						public static class: java.lang.Class<com.google.android.exoplayer2.ui.DebugTextViewHelper>;
						/** @deprecated */
						public onTimelineChanged(timeline: com.google.android.exoplayer2.Timeline, manifest: any, reason: number): void;
						public onPlaybackSuppressionReasonChanged(playbackSuppressionReason: number): void;
						public getAudioString(): string;
						public onExperimentalOffloadSchedulingEnabledChanged(offloadSchedulingEnabled: boolean): void;
						public onIsLoadingChanged(isLoading: boolean): void;
						public onPlayerError(error: com.google.android.exoplayer2.ExoPlaybackException): void;
						public onPositionDiscontinuity(reason: number): void;
						public onRepeatModeChanged(repeatMode: number): void;
						public onTimelineChanged(timeline: com.google.android.exoplayer2.Timeline, reason: number): void;
						public getVideoString(): string;
						public onPlayWhenReadyChanged(playWhenReady: boolean, playbackState: number): void;
						/** @deprecated */
						public onLoadingChanged(isLoading: boolean): void;
						public onTracksChanged(trackGroups: com.google.android.exoplayer2.source.TrackGroupArray, trackSelections: com.google.android.exoplayer2.trackselection.TrackSelectionArray): void;
						public onPlaybackParametersChanged(playbackParameters: com.google.android.exoplayer2.PlaybackParameters): void;
						public constructor(player: com.google.android.exoplayer2.SimpleExoPlayer, textView: globalAndroid.widget.TextView);
						public onIsPlayingChanged(isPlaying: boolean): void;
						public updateAndPost(): void;
						public onShuffleModeEnabledChanged(shuffleModeEnabled: boolean): void;
						public onPlayWhenReadyChanged(playWhenReady: boolean, reason: number): void;
						/** @deprecated */
						public onSeekProcessed(): void;
						public stop(): void;
						public onPlaybackStateChanged(playbackState: number): void;
						public start(): void;
						public run(): void;
						public getDebugString(): string;
						public onPlaybackStateChanged(state: number): void;
						public getPlayerStateString(): string;
						/** @deprecated */
						public onPlayerStateChanged(playWhenReady: boolean, playbackState: number): void;
						public onMediaItemTransition(mediaItem: com.google.android.exoplayer2.MediaItem, reason: number): void;
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
				export module ui {
					export class DefaultTimeBar extends globalAndroid.view.View implements com.google.android.exoplayer2.ui.TimeBar {
						public static class: java.lang.Class<com.google.android.exoplayer2.ui.DefaultTimeBar>;
						public static DEFAULT_BAR_HEIGHT_DP: number;
						public static DEFAULT_TOUCH_TARGET_HEIGHT_DP: number;
						public static DEFAULT_AD_MARKER_WIDTH_DP: number;
						public static DEFAULT_SCRUBBER_ENABLED_SIZE_DP: number;
						public static DEFAULT_SCRUBBER_DISABLED_SIZE_DP: number;
						public static DEFAULT_SCRUBBER_DRAGGED_SIZE_DP: number;
						public static DEFAULT_PLAYED_COLOR: number;
						public static DEFAULT_UNPLAYED_COLOR: number;
						public static DEFAULT_BUFFERED_COLOR: number;
						public static DEFAULT_SCRUBBER_COLOR: number;
						public static DEFAULT_AD_MARKER_COLOR: number;
						public static DEFAULT_PLAYED_AD_MARKER_COLOR: number;
						public static BAR_GRAVITY_CENTER: number;
						public static BAR_GRAVITY_BOTTOM: number;
						public static BAR_GRAVITY_TOP: number;
						public setKeyCountIncrement(count: number): void;
						public setPosition(position: number): void;
						public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
						public setBufferedColor(bufferedColor: number): void;
						public onInitializeAccessibilityEvent(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
						public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
						public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
						public addListener(listener: com.google.android.exoplayer2.ui.TimeBar.OnScrubListener): void;
						public drawableStateChanged(): void;
						public setPlayedColor(playedColor: number): void;
						public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
						public removeListener(listener: com.google.android.exoplayer2.ui.TimeBar.OnScrubListener): void;
						public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
						public onLayout(changed: boolean, left: number, top: number, right: number, bottom: number): void;
						public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
						public setBufferedPosition(bufferedPosition: number): void;
						public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
						public showScrubber(): void;
						public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
						public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
						public setAdGroupTimesMs(adGroupTimesMs: native.Array<number>, playedAdGroups: native.Array<boolean>, adGroupCount: number): void;
						public onRtlPropertiesChanged(layoutDirection: number): void;
						public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
						public showScrubber(showAnimationDurationMs: number): void;
						public setDuration(duration: number): void;
						public setAdMarkerColor(adMarkerColor: number): void;
						public hideScrubber(hideAnimationDurationMs: number): void;
						public setUnplayedColor(unplayedColor: number): void;
						public sendAccessibilityEvent(eventType: number): void;
						public setEnabled(enabled: boolean): void;
						public jumpDrawablesToCurrentState(): void;
						public setKeyTimeIncrement(time: number): void;
						public getPreferredUpdateDelay(): number;
						public setPlayedAdMarkerColor(playedAdMarkerColor: number): void;
						public onTouchEvent(event: globalAndroid.view.MotionEvent): boolean;
						public hideScrubber(): void;
						public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
						public setScrubberColor(scrubberColor: number): void;
						public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
						public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, timebarAttrs: globalAndroid.util.AttributeSet);
						public onFocusChanged(gainFocus: boolean, direction: number, previouslyFocusedRect: globalAndroid.graphics.Rect): void;
						public onInitializeAccessibilityNodeInfo(info: globalAndroid.view.accessibility.AccessibilityNodeInfo): void;
						public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
						public onDraw(canvas: globalAndroid.graphics.Canvas): void;
						public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, timebarAttrs: globalAndroid.util.AttributeSet, defStyleRes: number);
						public performAccessibilityAction(action: number, bundle1: globalAndroid.os.Bundle): boolean;
						public constructor(context: globalAndroid.content.Context);
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
				export module ui {
					export class DefaultTrackNameProvider extends java.lang.Object implements com.google.android.exoplayer2.ui.TrackNameProvider {
						public static class: java.lang.Class<com.google.android.exoplayer2.ui.DefaultTrackNameProvider>;
						public constructor(resources: globalAndroid.content.res.Resources);
						public getTrackName(format: com.google.android.exoplayer2.Format): string;
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
				export module ui {
					export class DownloadNotificationHelper extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.ui.DownloadNotificationHelper>;
						public buildDownloadCompletedNotification(context: globalAndroid.content.Context, smallIcon: number, contentIntent: globalAndroid.app.PendingIntent, message: string): globalAndroid.app.Notification;
						public constructor(context: globalAndroid.content.Context, channelId: string);
						public buildDownloadFailedNotification(context: globalAndroid.content.Context, smallIcon: number, contentIntent: globalAndroid.app.PendingIntent, message: string): globalAndroid.app.Notification;
						public buildProgressNotification(context: globalAndroid.content.Context, smallIcon: number, contentIntent: globalAndroid.app.PendingIntent, message: string, downloads: java.util.List<com.google.android.exoplayer2.offline.Download>): globalAndroid.app.Notification;
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
				export module ui {
					export class DownloadNotificationUtil extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.ui.DownloadNotificationUtil>;
						public static buildDownloadFailedNotification(context: globalAndroid.content.Context, smallIcon: number, channelId: string, contentIntent: globalAndroid.app.PendingIntent, message: string): globalAndroid.app.Notification;
						public static buildDownloadCompletedNotification(context: globalAndroid.content.Context, smallIcon: number, channelId: string, contentIntent: globalAndroid.app.PendingIntent, message: string): globalAndroid.app.Notification;
						public static buildProgressNotification(context: globalAndroid.content.Context, smallIcon: number, channelId: string, contentIntent: globalAndroid.app.PendingIntent, message: string, downloads: java.util.List<com.google.android.exoplayer2.offline.Download>): globalAndroid.app.Notification;
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
				export module ui {
					export class HtmlUtils extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.ui.HtmlUtils>;
						public static cssAllClassDescendantsSelector(className: string): string;
						public static toCssRgba(color: number): string;
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
				export module ui {
					export class PlayerControlView extends globalAndroid.widget.FrameLayout {
						public static class: java.lang.Class<com.google.android.exoplayer2.ui.PlayerControlView>;
						public static DEFAULT_SHOW_TIMEOUT_MS: number;
						public static DEFAULT_REPEAT_TOGGLE_MODES: number;
						public static DEFAULT_TIME_BAR_MIN_UPDATE_INTERVAL_MS: number;
						public static MAX_WINDOWS_FOR_MULTI_WINDOW_TIME_BAR: number;
						public isLayoutRequested(): boolean;
						public bringChildToFront(child: globalAndroid.view.View): void;
						public getShowShuffleButton(): boolean;
						public setShowTimeoutMs(showTimeoutMs: number): void;
						public setShowRewindButton(showRewindButton: boolean): void;
						public requestTransparentRegion(child: globalAndroid.view.View): void;
						/** @deprecated */
						public setPlaybackPreparer(playbackPreparer: com.google.android.exoplayer2.PlaybackPreparer): void;
						public dispatchMediaKeyEvent(event: globalAndroid.view.KeyEvent): boolean;
						public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
						public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
						public getTextDirection(): number;
						public getShowVrButton(): boolean;
						public setShowFastForwardButton(showFastForwardButton: boolean): void;
						public getChildVisibleRect(child: globalAndroid.view.View, r: globalAndroid.graphics.Rect, offset: globalAndroid.graphics.Point): boolean;
						public addView(child: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
						public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
						public sendAccessibilityEvent(eventType: number): void;
						public setExtraAdGroupMarkers(extraAdGroupTimesMs: native.Array<number>, extraPlayedAdGroups: native.Array<boolean>): void;
						public canResolveTextDirection(): boolean;
						public recomputeViewAttributes(child: globalAndroid.view.View): void;
						public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
						public requestLayout(): void;
						public keyboardNavigationClusterSearch(currentCluster: globalAndroid.view.View, direction: number): globalAndroid.view.View;
						public isTextDirectionResolved(): boolean;
						/** @deprecated */
						public requestFitSystemWindows(): void;
						public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
						public onAttachedToWindow(): void;
						/** @deprecated */
						public invalidateChild(child: globalAndroid.view.View, dirty: globalAndroid.graphics.Rect): void;
						public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
						public setShowPreviousButton(showPreviousButton: boolean): void;
						public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
						public dispatchKeyEvent(event: globalAndroid.view.KeyEvent): boolean;
						public requestSendAccessibilityEvent(child: globalAndroid.view.View, event: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
						public setShowShuffleButton(showShuffleButton: boolean): void;
						public addView(child: globalAndroid.view.View, index: number): void;
						public focusSearch(focused: globalAndroid.view.View, direction: number): globalAndroid.view.View;
						public requestChildRectangleOnScreen(child: globalAndroid.view.View, rectangle: globalAndroid.graphics.Rect, immediate: boolean): boolean;
						public getRepeatToggleModes(): number;
						public requestFitSystemWindows(): void;
						public setShowNextButton(showNextButton: boolean): void;
						public getParentForAccessibility(): globalAndroid.view.ViewParent;
						public focusSearch(direction: number): globalAndroid.view.View;
						public onStopNestedScroll(child: globalAndroid.view.View): void;
						public getTextAlignment(): number;
						public onNestedPreScroll(target: globalAndroid.view.View, dx: number, dy: number, consumed: native.Array<number>): void;
						public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
						public show(): void;
						public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
						public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback, type: number): globalAndroid.view.ActionMode;
						public setVrButtonListener(onClickListener: globalAndroid.view.View.OnClickListener): void;
						public notifySubtreeAccessibilityStateChanged(child: globalAndroid.view.View, source: globalAndroid.view.View, changeType: number): void;
						public getParent(): globalAndroid.view.ViewParent;
						public getLayoutDirection(): number;
						public canResolveTextAlignment(): boolean;
						public constructor(context: globalAndroid.content.Context);
						public onDescendantInvalidated(child: globalAndroid.view.View, target: globalAndroid.view.View): void;
						public getPlayer(): com.google.android.exoplayer2.Player;
						public childHasTransientStateChanged(child: globalAndroid.view.View, childHasTransientState: boolean): void;
						public canResolveLayoutDirection(): boolean;
						public onNestedPrePerformAccessibilityAction(target: globalAndroid.view.View, action: number, bundle2: globalAndroid.os.Bundle): boolean;
						public setPlayer(player: com.google.android.exoplayer2.Player): void;
						public setShowVrButton(showVrButton: boolean): void;
						public updateViewLayout(view: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
						public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
						public setProgressUpdateListener(listener: com.google.android.exoplayer2.ui.PlayerControlView.ProgressUpdateListener): void;
						public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
						public isTextAlignmentResolved(): boolean;
						public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
						public onNestedScrollAccepted(child: globalAndroid.view.View, target: globalAndroid.view.View, axes: number): void;
						public setControlDispatcher(controlDispatcher: com.google.android.exoplayer2.ControlDispatcher): void;
						public addView(child: globalAndroid.view.View): void;
						public focusableViewAvailable(v: globalAndroid.view.View): void;
						public requestChildFocus(child: globalAndroid.view.View, focused: globalAndroid.view.View): void;
						/** @deprecated */
						public setRewindIncrementMs(rewindMs: number): void;
						public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, playbackAttrs: globalAndroid.util.AttributeSet);
						public isLayoutDirectionResolved(): boolean;
						public onStartNestedScroll(child: globalAndroid.view.View, target: globalAndroid.view.View, nestedScrollAxes: number): boolean;
						/** @deprecated */
						public setFastForwardIncrementMs(fastForwardMs: number): void;
						public clearChildFocus(child: globalAndroid.view.View): void;
						public addVisibilityListener(listener: com.google.android.exoplayer2.ui.PlayerControlView.VisibilityListener): void;
						public getShowTimeoutMs(): number;
						/** @deprecated */
						public invalidateChildInParent(location: native.Array<number>, dirty: globalAndroid.graphics.Rect): globalAndroid.view.ViewParent;
						public childDrawableStateChanged(child: globalAndroid.view.View): void;
						public removeView(view: globalAndroid.view.View): void;
						public removeVisibilityListener(listener: com.google.android.exoplayer2.ui.PlayerControlView.VisibilityListener): void;
						public showContextMenuForChild(originalView: globalAndroid.view.View, x: number, y: number): boolean;
						public setShowMultiWindowTimeBar(showMultiWindowTimeBar: boolean): void;
						public dispatchTouchEvent(ev: globalAndroid.view.MotionEvent): boolean;
						public onNestedScroll(target: globalAndroid.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
						public addView(child: globalAndroid.view.View, width: number, height: number): void;
						public addView(child: globalAndroid.view.View, index: number, params: globalAndroid.view.ViewGroup.LayoutParams): void;
						public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
						public onNestedFling(target: globalAndroid.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
						public isVisible(): boolean;
						public onNestedPreFling(target: globalAndroid.view.View, velocityX: number, velocityY: number): boolean;
						public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
						public setTimeBarMinUpdateInterval(minUpdateIntervalMs: number): void;
						public createContextMenu(menu: globalAndroid.view.ContextMenu): void;
						public setRepeatToggleModes(repeatToggleModes: number): void;
						public onDetachedFromWindow(): void;
						public hide(): void;
						public showContextMenuForChild(originalView: globalAndroid.view.View): boolean;
					}
					export module PlayerControlView {
						export class ComponentListener extends java.lang.Object implements com.google.android.exoplayer2.Player.EventListener, com.google.android.exoplayer2.ui.TimeBar.OnScrubListener, globalAndroid.view.View.OnClickListener {
							public static class: java.lang.Class<com.google.android.exoplayer2.ui.PlayerControlView.ComponentListener>;
							public onIsPlayingChanged(isPlaying: boolean): void;
							public onRepeatModeChanged(repeatMode: number): void;
							public onExperimentalOffloadSchedulingEnabledChanged(offloadSchedulingEnabled: boolean): void;
							public onScrubStart(timeBar: com.google.android.exoplayer2.ui.TimeBar, position: number): void;
							public onPlaybackParametersChanged(playbackParameters: com.google.android.exoplayer2.PlaybackParameters): void;
							/** @deprecated */
							public onSeekProcessed(): void;
							public onPlaybackStateChanged(playbackState: number): void;
							public onClick(view: globalAndroid.view.View): void;
							public onPlayWhenReadyChanged(playWhenReady: boolean, reason: number): void;
							/** @deprecated */
							public onLoadingChanged(isLoading: boolean): void;
							public onMediaItemTransition(mediaItem: com.google.android.exoplayer2.MediaItem, reason: number): void;
							/** @deprecated */
							public onTimelineChanged(timeline: com.google.android.exoplayer2.Timeline, manifest: any, reason: number): void;
							public onTimelineChanged(timeline: com.google.android.exoplayer2.Timeline, reason: number): void;
							public onScrubStop(timeBar: com.google.android.exoplayer2.ui.TimeBar, position: number, canceled: boolean): void;
							public onTracksChanged(trackGroups: com.google.android.exoplayer2.source.TrackGroupArray, trackSelections: com.google.android.exoplayer2.trackselection.TrackSelectionArray): void;
							public onScrubMove(timeBar: com.google.android.exoplayer2.ui.TimeBar, position: number): void;
							/** @deprecated */
							public onPlayerStateChanged(playWhenReady: boolean, playbackState: number): void;
							public onPlaybackStateChanged(state: number): void;
							public onIsLoadingChanged(isLoading: boolean): void;
							public onPositionDiscontinuity(reason: number): void;
							public onPlayerError(error: com.google.android.exoplayer2.ExoPlaybackException): void;
							public onShuffleModeEnabledChanged(shuffleModeEnabled: boolean): void;
							public onPlaybackSuppressionReasonChanged(playbackSuppressionReason: number): void;
						}
						export class ProgressUpdateListener extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.ui.PlayerControlView.ProgressUpdateListener>;
							/**
							 * Constructs a new instance of the com.google.android.exoplayer2.ui.PlayerControlView() when extending the interface class.
							 */
							public constructor(implementation: {
								onProgressUpdate(long0: number, long1: number): void;
							});
							public constructor();
							public onProgressUpdate(long0: number, long1: number): void;
						}
						export class VisibilityListener extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.ui.PlayerControlView.VisibilityListener>;
							/**
							 * Constructs a new instance of the com.google.android.exoplayer2.ui.PlayerControlView() when extending the interface class.
							 */
							public constructor(implementation: {
								onVisibilityChange(int0: number): void;
							});
							public constructor();
							public onVisibilityChange(int0: number): void;
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
				export module ui {
					export class PlayerNotificationManager extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.ui.PlayerNotificationManager>;
						public static ACTION_PLAY: string;
						public static ACTION_PAUSE: string;
						public static ACTION_PREVIOUS: string;
						public static ACTION_NEXT: string;
						public static ACTION_FAST_FORWARD: string;
						public static ACTION_REWIND: string;
						public static ACTION_STOP: string;
						public static EXTRA_INSTANCE_ID: string;
						public setUseNextAction(useNextAction: boolean): void;
						public getActions(player: com.google.android.exoplayer2.Player): java.util.List<string>;
						public constructor(context: globalAndroid.content.Context, channelId: string, notificationId: number, mediaDescriptionAdapter: com.google.android.exoplayer2.ui.PlayerNotificationManager.MediaDescriptionAdapter, customActionReceiver: com.google.android.exoplayer2.ui.PlayerNotificationManager.CustomActionReceiver);
						/** @deprecated */
						public static createWithNotificationChannel(context: globalAndroid.content.Context, channelId: string, channelName: number, notificationId: number, mediaDescriptionAdapter: com.google.android.exoplayer2.ui.PlayerNotificationManager.MediaDescriptionAdapter): com.google.android.exoplayer2.ui.PlayerNotificationManager;
						/** @deprecated */
						public setUseNavigationActionsInCompactView(useNavigationActionsInCompactView: boolean): void;
						public setPlayer(player: com.google.android.exoplayer2.Player): void;
						/** @deprecated */
						public setNotificationListener(notificationListener: com.google.android.exoplayer2.ui.PlayerNotificationManager.NotificationListener): void;
						public getActionIndicesForCompactView(actionNames: java.util.List<string>, player: com.google.android.exoplayer2.Player): native.Array<number>;
						public setUseChronometer(useChronometer: boolean): void;
						public constructor(context: globalAndroid.content.Context, channelId: string, notificationId: number, mediaDescriptionAdapter: com.google.android.exoplayer2.ui.PlayerNotificationManager.MediaDescriptionAdapter, notificationListener: com.google.android.exoplayer2.ui.PlayerNotificationManager.NotificationListener);
						public setMediaSessionToken(token: globalAndroid.support.v4.media.session.MediaSessionCompat.Token): void;
						public setUsePreviousActionInCompactView(usePreviousActionInCompactView: boolean): void;
						public setPriority(priority: number): void;
						public static createWithNotificationChannel(context: globalAndroid.content.Context, channelId: string, channelName: number, channelDescription: number, notificationId: number, mediaDescriptionAdapter: com.google.android.exoplayer2.ui.PlayerNotificationManager.MediaDescriptionAdapter): com.google.android.exoplayer2.ui.PlayerNotificationManager;
						/** @deprecated */
						public setPlaybackPreparer(playbackPreparer: com.google.android.exoplayer2.PlaybackPreparer): void;
						public setBadgeIconType(badgeIconType: number): void;
						public createNotification(player: com.google.android.exoplayer2.Player, builder: androidx.core.app.NotificationCompat.Builder, ongoing: boolean, largeIcon: globalAndroid.graphics.Bitmap): androidx.core.app.NotificationCompat.Builder;
						/** @deprecated */
						public setUseNavigationActions(useNavigationActions: boolean): void;
						public setUseStopAction(useStopAction: boolean): void;
						public setControlDispatcher(controlDispatcher: com.google.android.exoplayer2.ControlDispatcher): void;
						public setSmallIcon(smallIconResourceId: number): void;
						public static createWithNotificationChannel(context: globalAndroid.content.Context, channelId: string, channelName: number, channelDescription: number, notificationId: number, mediaDescriptionAdapter: com.google.android.exoplayer2.ui.PlayerNotificationManager.MediaDescriptionAdapter, notificationListener: com.google.android.exoplayer2.ui.PlayerNotificationManager.NotificationListener): com.google.android.exoplayer2.ui.PlayerNotificationManager;
						public constructor(context: globalAndroid.content.Context, channelId: string, notificationId: number, mediaDescriptionAdapter: com.google.android.exoplayer2.ui.PlayerNotificationManager.MediaDescriptionAdapter, notificationListener: com.google.android.exoplayer2.ui.PlayerNotificationManager.NotificationListener, customActionReceiver: com.google.android.exoplayer2.ui.PlayerNotificationManager.CustomActionReceiver);
						public setColor(color: number): void;
						/** @deprecated */
						public static createWithNotificationChannel(context: globalAndroid.content.Context, channelId: string, channelName: number, notificationId: number, mediaDescriptionAdapter: com.google.android.exoplayer2.ui.PlayerNotificationManager.MediaDescriptionAdapter, notificationListener: com.google.android.exoplayer2.ui.PlayerNotificationManager.NotificationListener): com.google.android.exoplayer2.ui.PlayerNotificationManager;
						/** @deprecated */
						public setRewindIncrementMs(rewindMs: number): void;
						public setUseNextActionInCompactView(useNextActionInCompactView: boolean): void;
						public setUsePlayPauseActions(usePlayPauseActions: boolean): void;
						public setUsePreviousAction(usePreviousAction: boolean): void;
						public setColorized(colorized: boolean): void;
						public invalidate(): void;
						/** @deprecated */
						public setFastForwardIncrementMs(fastForwardMs: number): void;
						public setDefaults(defaults: number): void;
						public setVisibility(visibility: number): void;
						public getOngoing(player: com.google.android.exoplayer2.Player): boolean;
						public constructor(context: globalAndroid.content.Context, channelId: string, notificationId: number, mediaDescriptionAdapter: com.google.android.exoplayer2.ui.PlayerNotificationManager.MediaDescriptionAdapter);
					}
					export module PlayerNotificationManager {
						export class BitmapCallback extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.ui.PlayerNotificationManager.BitmapCallback>;
							public onBitmap(bitmap: globalAndroid.graphics.Bitmap): void;
						}
						export class CustomActionReceiver extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.ui.PlayerNotificationManager.CustomActionReceiver>;
							/**
							 * Constructs a new instance of the com.google.android.exoplayer2.ui.PlayerNotificationManager() when extending the interface class.
							 */
							public constructor(implementation: {
								createCustomActions(context0: globalAndroid.content.Context, int1: number): java.util.Map<string,androidx.core.app.NotificationCompat.Action>;
								getCustomActions(player0: com.google.android.exoplayer2.Player): java.util.List<string>;
								onCustomAction(player0: com.google.android.exoplayer2.Player, string1: string, intent2: globalAndroid.content.Intent): void;
							});
							public constructor();
							public createCustomActions(context0: globalAndroid.content.Context, int1: number): java.util.Map<string,androidx.core.app.NotificationCompat.Action>;
							public onCustomAction(player0: com.google.android.exoplayer2.Player, string1: string, intent2: globalAndroid.content.Intent): void;
							public getCustomActions(player0: com.google.android.exoplayer2.Player): java.util.List<string>;
						}
						export class MediaDescriptionAdapter extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.ui.PlayerNotificationManager.MediaDescriptionAdapter>;
							/**
							 * Constructs a new instance of the com.google.android.exoplayer2.ui.PlayerNotificationManager() when extending the interface class.
							 */
							public constructor(implementation: {
								getCurrentContentTitle(player0: com.google.android.exoplayer2.Player): string;
								createCurrentContentIntent(player0: com.google.android.exoplayer2.Player): globalAndroid.app.PendingIntent;
								getCurrentContentText(player0: com.google.android.exoplayer2.Player): string;
								getCurrentSubText(player: com.google.android.exoplayer2.Player): string;
								getCurrentLargeIcon(player0: com.google.android.exoplayer2.Player, bitmapCallback1: com.google.android.exoplayer2.ui.PlayerNotificationManager.BitmapCallback): globalAndroid.graphics.Bitmap;
							});
							public constructor();
							public getCurrentLargeIcon(player0: com.google.android.exoplayer2.Player, bitmapCallback1: com.google.android.exoplayer2.ui.PlayerNotificationManager.BitmapCallback): globalAndroid.graphics.Bitmap;
							public getCurrentSubText(player: com.google.android.exoplayer2.Player): string;
							public getCurrentContentTitle(player0: com.google.android.exoplayer2.Player): string;
							public getCurrentContentText(player0: com.google.android.exoplayer2.Player): string;
							public createCurrentContentIntent(player0: com.google.android.exoplayer2.Player): globalAndroid.app.PendingIntent;
						}
						export class NotificationBroadcastReceiver extends globalAndroid.content.BroadcastReceiver {
							public static class: java.lang.Class<com.google.android.exoplayer2.ui.PlayerNotificationManager.NotificationBroadcastReceiver>;
							public onReceive(context: globalAndroid.content.Context, intent: globalAndroid.content.Intent): void;
							public onReceive(context0: globalAndroid.content.Context, intent1: globalAndroid.content.Intent): void;
						}
						export class NotificationListener extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.ui.PlayerNotificationManager.NotificationListener>;
							/**
							 * Constructs a new instance of the com.google.android.exoplayer2.ui.PlayerNotificationManager() when extending the interface class.
							 */
							public constructor(implementation: {
								onNotificationStarted(notificationId: number, notification: globalAndroid.app.Notification): void;
								onNotificationCancelled(notificationId: number): void;
								onNotificationCancelled(notificationId: number, dismissedByUser: boolean): void;
								onNotificationPosted(notificationId: number, notification: globalAndroid.app.Notification, ongoing: boolean): void;
							});
							public constructor();
							public onNotificationCancelled(notificationId: number, dismissedByUser: boolean): void;
							public onNotificationPosted(notificationId: number, notification: globalAndroid.app.Notification, ongoing: boolean): void;
							/** @deprecated */
							public onNotificationStarted(notificationId: number, notification: globalAndroid.app.Notification): void;
							/** @deprecated */
							public onNotificationCancelled(notificationId: number): void;
						}
						export class PlayerListener extends java.lang.Object implements com.google.android.exoplayer2.Player.EventListener {
							public static class: java.lang.Class<com.google.android.exoplayer2.ui.PlayerNotificationManager.PlayerListener>;
							public onIsPlayingChanged(isPlaying: boolean): void;
							public onRepeatModeChanged(repeatMode: number): void;
							public onExperimentalOffloadSchedulingEnabledChanged(offloadSchedulingEnabled: boolean): void;
							public onPlaybackParametersChanged(playbackParameters: com.google.android.exoplayer2.PlaybackParameters): void;
							/** @deprecated */
							public onSeekProcessed(): void;
							public onPlaybackStateChanged(playbackState: number): void;
							public onPlayWhenReadyChanged(playWhenReady: boolean, reason: number): void;
							/** @deprecated */
							public onLoadingChanged(isLoading: boolean): void;
							public onMediaItemTransition(mediaItem: com.google.android.exoplayer2.MediaItem, reason: number): void;
							/** @deprecated */
							public onTimelineChanged(timeline: com.google.android.exoplayer2.Timeline, manifest: any, reason: number): void;
							public onTimelineChanged(timeline: com.google.android.exoplayer2.Timeline, reason: number): void;
							public onTracksChanged(trackGroups: com.google.android.exoplayer2.source.TrackGroupArray, trackSelections: com.google.android.exoplayer2.trackselection.TrackSelectionArray): void;
							/** @deprecated */
							public onPlayerStateChanged(playWhenReady: boolean, playbackState: number): void;
							public onPlaybackStateChanged(state: number): void;
							public onIsLoadingChanged(isLoading: boolean): void;
							public onPositionDiscontinuity(reason: number): void;
							public onPlayerError(error: com.google.android.exoplayer2.ExoPlaybackException): void;
							public onShuffleModeEnabledChanged(shuffleModeEnabled: boolean): void;
							public onPlaybackSuppressionReasonChanged(playbackSuppressionReason: number): void;
						}
						export class Priority extends java.lang.Object implements java.lang.annotation.Annotation {
							public static class: java.lang.Class<com.google.android.exoplayer2.ui.PlayerNotificationManager.Priority>;
							/**
							 * Constructs a new instance of the com.google.android.exoplayer2.ui.PlayerNotificationManager() when extending the interface class.
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
						export class Visibility extends java.lang.Object implements java.lang.annotation.Annotation {
							public static class: java.lang.Class<com.google.android.exoplayer2.ui.PlayerNotificationManager.Visibility>;
							/**
							 * Constructs a new instance of the com.google.android.exoplayer2.ui.PlayerNotificationManager() when extending the interface class.
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

declare module com {
	export module google {
		export module android {
			export module exoplayer2 {
				export module ui {
					export class PlayerView extends globalAndroid.widget.FrameLayout implements com.google.android.exoplayer2.source.ads.AdsLoader.AdViewProvider {
						public static class: java.lang.Class<com.google.android.exoplayer2.ui.PlayerView>;
						public static SHOW_BUFFERING_NEVER: number;
						public static SHOW_BUFFERING_WHEN_PLAYING: number;
						public static SHOW_BUFFERING_ALWAYS: number;
						public setErrorMessageProvider(errorMessageProvider: com.google.android.exoplayer2.util.ErrorMessageProvider<any>): void;
						public isLayoutRequested(): boolean;
						/** @deprecated */
						public setDefaultArtwork(defaultArtwork: globalAndroid.graphics.Bitmap): void;
						public bringChildToFront(child: globalAndroid.view.View): void;
						public setShowRewindButton(showRewindButton: boolean): void;
						public requestTransparentRegion(child: globalAndroid.view.View): void;
						public setShowBuffering(showBuffering: number): void;
						public performClick(): boolean;
						public setUseArtwork(useArtwork: boolean): void;
						public dispatchMediaKeyEvent(event: globalAndroid.view.KeyEvent): boolean;
						/** @deprecated */
						public setPlaybackPreparer(playbackPreparer: com.google.android.exoplayer2.PlaybackPreparer): void;
						public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
						public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
						public getTextDirection(): number;
						public setShowFastForwardButton(showFastForwardButton: boolean): void;
						public getChildVisibleRect(child: globalAndroid.view.View, r: globalAndroid.graphics.Rect, offset: globalAndroid.graphics.Point): boolean;
						public addView(child: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
						public onResume(): void;
						public setCustomErrorMessage(message: string): void;
						public onContentAspectRatioChanged(contentAspectRatio: number, contentFrame: com.google.android.exoplayer2.ui.AspectRatioFrameLayout, contentView: globalAndroid.view.View): void;
						public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
						public sendAccessibilityEvent(eventType: number): void;
						public setExtraAdGroupMarkers(extraAdGroupTimesMs: native.Array<number>, extraPlayedAdGroups: native.Array<boolean>): void;
						public canResolveTextDirection(): boolean;
						public setControllerHideOnTouch(controllerHideOnTouch: boolean): void;
						public recomputeViewAttributes(child: globalAndroid.view.View): void;
						public static switchTargetView(player: com.google.android.exoplayer2.Player, oldPlayerView: com.google.android.exoplayer2.ui.PlayerView, newPlayerView: com.google.android.exoplayer2.ui.PlayerView): void;
						public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
						public requestLayout(): void;
						public keyboardNavigationClusterSearch(currentCluster: globalAndroid.view.View, direction: number): globalAndroid.view.View;
						/** @deprecated */
						public getAdOverlayViews(): native.Array<globalAndroid.view.View>;
						public isTextDirectionResolved(): boolean;
						/** @deprecated */
						public requestFitSystemWindows(): void;
						public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
						/** @deprecated */
						public invalidateChild(child: globalAndroid.view.View, dirty: globalAndroid.graphics.Rect): void;
						public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
						public setShowPreviousButton(showPreviousButton: boolean): void;
						public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
						public dispatchKeyEvent(event: globalAndroid.view.KeyEvent): boolean;
						public requestSendAccessibilityEvent(child: globalAndroid.view.View, event: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
						public setKeepContentOnPlayerReset(keepContentOnPlayerReset: boolean): void;
						public setShowShuffleButton(showShuffleButton: boolean): void;
						public addView(child: globalAndroid.view.View, index: number): void;
						public setControllerVisibilityListener(listener: com.google.android.exoplayer2.ui.PlayerControlView.VisibilityListener): void;
						public focusSearch(focused: globalAndroid.view.View, direction: number): globalAndroid.view.View;
						public requestChildRectangleOnScreen(child: globalAndroid.view.View, rectangle: globalAndroid.graphics.Rect, immediate: boolean): boolean;
						public requestFitSystemWindows(): void;
						public setShowNextButton(showNextButton: boolean): void;
						public getParentForAccessibility(): globalAndroid.view.ViewParent;
						public focusSearch(direction: number): globalAndroid.view.View;
						public onStopNestedScroll(child: globalAndroid.view.View): void;
						public getUseArtwork(): boolean;
						public getTextAlignment(): number;
						public onNestedPreScroll(target: globalAndroid.view.View, dx: number, dy: number, consumed: native.Array<number>): void;
						public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
						public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
						public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback, type: number): globalAndroid.view.ActionMode;
						public notifySubtreeAccessibilityStateChanged(child: globalAndroid.view.View, source: globalAndroid.view.View, changeType: number): void;
						public onTrackballEvent(ev: globalAndroid.view.MotionEvent): boolean;
						public setAspectRatioListener(listener: com.google.android.exoplayer2.ui.AspectRatioFrameLayout.AspectRatioListener): void;
						public getParent(): globalAndroid.view.ViewParent;
						public getLayoutDirection(): number;
						public canResolveTextAlignment(): boolean;
						public constructor(context: globalAndroid.content.Context);
						public onDescendantInvalidated(child: globalAndroid.view.View, target: globalAndroid.view.View): void;
						public isControllerVisible(): boolean;
						public getPlayer(): com.google.android.exoplayer2.Player;
						public childHasTransientStateChanged(child: globalAndroid.view.View, childHasTransientState: boolean): void;
						public canResolveLayoutDirection(): boolean;
						public onNestedPrePerformAccessibilityAction(target: globalAndroid.view.View, action: number, bundle2: globalAndroid.os.Bundle): boolean;
						public setPlayer(player: com.google.android.exoplayer2.Player): void;
						public getControllerHideOnTouch(): boolean;
						public updateViewLayout(view: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
						public onPause(): void;
						public setControllerHideDuringAds(controllerHideDuringAds: boolean): void;
						public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
						public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
						public isTextAlignmentResolved(): boolean;
						public getDefaultArtwork(): globalAndroid.graphics.drawable.Drawable;
						public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
						public getOverlayFrameLayout(): globalAndroid.widget.FrameLayout;
						public onNestedScrollAccepted(child: globalAndroid.view.View, target: globalAndroid.view.View, axes: number): void;
						public getControllerShowTimeoutMs(): number;
						public setControlDispatcher(controlDispatcher: com.google.android.exoplayer2.ControlDispatcher): void;
						public addView(child: globalAndroid.view.View): void;
						public focusableViewAvailable(v: globalAndroid.view.View): void;
						public requestChildFocus(child: globalAndroid.view.View, focused: globalAndroid.view.View): void;
						public getSubtitleView(): com.google.android.exoplayer2.ui.SubtitleView;
						/** @deprecated */
						public setRewindIncrementMs(rewindMs: number): void;
						public isLayoutDirectionResolved(): boolean;
						public onStartNestedScroll(child: globalAndroid.view.View, target: globalAndroid.view.View, nestedScrollAxes: number): boolean;
						/** @deprecated */
						public setFastForwardIncrementMs(fastForwardMs: number): void;
						public clearChildFocus(child: globalAndroid.view.View): void;
						public setUseSensorRotation(useSensorRotation: boolean): void;
						public setVisibility(visibility: number): void;
						public getAdOverlayInfos(): java.util.List<com.google.android.exoplayer2.source.ads.AdsLoader.OverlayInfo>;
						public setControllerAutoShow(controllerAutoShow: boolean): void;
						/** @deprecated */
						public setShowBuffering(showBuffering: boolean): void;
						/** @deprecated */
						public invalidateChildInParent(location: native.Array<number>, dirty: globalAndroid.graphics.Rect): globalAndroid.view.ViewParent;
						public childDrawableStateChanged(child: globalAndroid.view.View): void;
						public removeView(view: globalAndroid.view.View): void;
						public setUseController(useController: boolean): void;
						public showContextMenuForChild(originalView: globalAndroid.view.View, x: number, y: number): boolean;
						public setShowMultiWindowTimeBar(showMultiWindowTimeBar: boolean): void;
						public onTrackballEvent(event: globalAndroid.view.MotionEvent): boolean;
						public getVideoSurfaceView(): globalAndroid.view.View;
						public onNestedScroll(target: globalAndroid.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
						public addView(child: globalAndroid.view.View, width: number, height: number): void;
						public addView(child: globalAndroid.view.View, index: number, params: globalAndroid.view.ViewGroup.LayoutParams): void;
						public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
						public getUseController(): boolean;
						public onNestedFling(target: globalAndroid.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
						public setControllerShowTimeoutMs(controllerShowTimeoutMs: number): void;
						public onNestedPreFling(target: globalAndroid.view.View, velocityX: number, velocityY: number): boolean;
						public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
						public createContextMenu(menu: globalAndroid.view.ContextMenu): void;
						public setRepeatToggleModes(repeatToggleModes: number): void;
						public showContextMenuForChild(originalView: globalAndroid.view.View): boolean;
						public getResizeMode(): number;
						public onTouchEvent(event: globalAndroid.view.MotionEvent): boolean;
						public getAdViewGroup(): globalAndroid.view.ViewGroup;
						public hideController(): void;
						public getControllerAutoShow(): boolean;
						public setShutterBackgroundColor(color: number): void;
						public setResizeMode(resizeMode: number): void;
						public showController(): void;
						public setDefaultArtwork(defaultArtwork: globalAndroid.graphics.drawable.Drawable): void;
					}
					export module PlayerView {
						export class ComponentListener extends java.lang.Object implements com.google.android.exoplayer2.Player.EventListener, com.google.android.exoplayer2.text.TextOutput, com.google.android.exoplayer2.video.VideoListener, globalAndroid.view.View.OnLayoutChangeListener, com.google.android.exoplayer2.ui.spherical.SingleTapListener, com.google.android.exoplayer2.ui.PlayerControlView.VisibilityListener {
							public static class: java.lang.Class<com.google.android.exoplayer2.ui.PlayerView.ComponentListener>;
							public onIsPlayingChanged(isPlaying: boolean): void;
							public onRepeatModeChanged(repeatMode: number): void;
							public onPlaybackParametersChanged(playbackParameters: com.google.android.exoplayer2.PlaybackParameters): void;
							public onPlaybackStateChanged(playbackState: number): void;
							public constructor(param0: com.google.android.exoplayer2.ui.PlayerView);
							public onRenderedFirstFrame(): void;
							/** @deprecated */
							public onLoadingChanged(isLoading: boolean): void;
							public onTracksChanged(tracks: com.google.android.exoplayer2.source.TrackGroupArray, selections: com.google.android.exoplayer2.trackselection.TrackSelectionArray): void;
							public onMediaItemTransition(mediaItem: com.google.android.exoplayer2.MediaItem, reason: number): void;
							public onSurfaceSizeChanged(width: number, height: number): void;
							/** @deprecated */
							public onTimelineChanged(timeline: com.google.android.exoplayer2.Timeline, manifest: any, reason: number): void;
							public onTracksChanged(trackGroups: com.google.android.exoplayer2.source.TrackGroupArray, trackSelections: com.google.android.exoplayer2.trackselection.TrackSelectionArray): void;
							public onVisibilityChange(visibility: number): void;
							public onPlaybackStateChanged(state: number): void;
							public onIsLoadingChanged(isLoading: boolean): void;
							public onPositionDiscontinuity(reason: number): void;
							public onSingleTapUp(e: globalAndroid.view.MotionEvent): boolean;
							public onLayoutChange(view: globalAndroid.view.View, left: number, top: number, right: number, bottom: number, oldLeft: number, oldTop: number, oldRight: number, oldBottom: number): void;
							public onPlaybackSuppressionReasonChanged(playbackSuppressionReason: number): void;
							public onExperimentalOffloadSchedulingEnabledChanged(offloadSchedulingEnabled: boolean): void;
							/** @deprecated */
							public onSeekProcessed(): void;
							public onPlayWhenReadyChanged(playWhenReady: boolean, reason: number): void;
							public onTimelineChanged(timeline: com.google.android.exoplayer2.Timeline, reason: number): void;
							public onVideoSizeChanged(width: number, height: number, unappliedRotationDegrees: number, pixelWidthHeightRatio: number): void;
							/** @deprecated */
							public onPlayerStateChanged(playWhenReady: boolean, playbackState: number): void;
							public onCues(cues: java.util.List<com.google.android.exoplayer2.text.Cue>): void;
							public onPlayerError(error: com.google.android.exoplayer2.ExoPlaybackException): void;
							public onShuffleModeEnabledChanged(shuffleModeEnabled: boolean): void;
						}
						export class ShowBuffering extends java.lang.Object implements java.lang.annotation.Annotation {
							public static class: java.lang.Class<com.google.android.exoplayer2.ui.PlayerView.ShowBuffering>;
							/**
							 * Constructs a new instance of the com.google.android.exoplayer2.ui.PlayerView() when extending the interface class.
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

declare module com {
	export module google {
		export module android {
			export module exoplayer2 {
				export module ui {
					export class SpannedToHtmlConverter extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.ui.SpannedToHtmlConverter>;
						public static convert(text: string, displayDensity: number): com.google.android.exoplayer2.ui.SpannedToHtmlConverter.HtmlAndCss;
					}
					export module SpannedToHtmlConverter {
						export class HtmlAndCss extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.ui.SpannedToHtmlConverter.HtmlAndCss>;
							public html: string;
							public cssRuleSets: java.util.Map<string,string>;
						}
						export class SpanInfo extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.ui.SpannedToHtmlConverter.SpanInfo>;
							public start: number;
							public end: number;
							public openingTag: string;
							public closingTag: string;
						}
						export class Transition extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.ui.SpannedToHtmlConverter.Transition>;
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
				export module ui {
					export class StyledPlayerControlView extends globalAndroid.widget.FrameLayout {
						public static class: java.lang.Class<com.google.android.exoplayer2.ui.StyledPlayerControlView>;
						public static DEFAULT_SHOW_TIMEOUT_MS: number;
						public static DEFAULT_REPEAT_TOGGLE_MODES: number;
						public static DEFAULT_TIME_BAR_MIN_UPDATE_INTERVAL_MS: number;
						public static MAX_WINDOWS_FOR_MULTI_WINDOW_TIME_BAR: number;
						public isLayoutRequested(): boolean;
						public bringChildToFront(child: globalAndroid.view.View): void;
						public getShowShuffleButton(): boolean;
						public setShowTimeoutMs(showTimeoutMs: number): void;
						public setShowRewindButton(showRewindButton: boolean): void;
						public requestTransparentRegion(child: globalAndroid.view.View): void;
						public setProgressUpdateListener(listener: com.google.android.exoplayer2.ui.StyledPlayerControlView.ProgressUpdateListener): void;
						/** @deprecated */
						public setPlaybackPreparer(playbackPreparer: com.google.android.exoplayer2.PlaybackPreparer): void;
						public dispatchMediaKeyEvent(event: globalAndroid.view.KeyEvent): boolean;
						public setAnimationEnabled(animationEnabled: boolean): void;
						public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
						public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
						public getTextDirection(): number;
						public getShowVrButton(): boolean;
						public setShowFastForwardButton(showFastForwardButton: boolean): void;
						public getChildVisibleRect(child: globalAndroid.view.View, r: globalAndroid.graphics.Rect, offset: globalAndroid.graphics.Point): boolean;
						public addView(child: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
						public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
						public sendAccessibilityEvent(eventType: number): void;
						public setExtraAdGroupMarkers(extraAdGroupTimesMs: native.Array<number>, extraPlayedAdGroups: native.Array<boolean>): void;
						public canResolveTextDirection(): boolean;
						public recomputeViewAttributes(child: globalAndroid.view.View): void;
						public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
						public requestLayout(): void;
						public keyboardNavigationClusterSearch(currentCluster: globalAndroid.view.View, direction: number): globalAndroid.view.View;
						public isTextDirectionResolved(): boolean;
						/** @deprecated */
						public requestFitSystemWindows(): void;
						public setShowSubtitleButton(showSubtitleButton: boolean): void;
						public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
						public onAttachedToWindow(): void;
						/** @deprecated */
						public invalidateChild(child: globalAndroid.view.View, dirty: globalAndroid.graphics.Rect): void;
						public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
						public setShowPreviousButton(showPreviousButton: boolean): void;
						public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
						public dispatchKeyEvent(event: globalAndroid.view.KeyEvent): boolean;
						public requestSendAccessibilityEvent(child: globalAndroid.view.View, event: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
						public setShowShuffleButton(showShuffleButton: boolean): void;
						public addView(child: globalAndroid.view.View, index: number): void;
						public focusSearch(focused: globalAndroid.view.View, direction: number): globalAndroid.view.View;
						public requestChildRectangleOnScreen(child: globalAndroid.view.View, rectangle: globalAndroid.graphics.Rect, immediate: boolean): boolean;
						public getRepeatToggleModes(): number;
						public requestFitSystemWindows(): void;
						public setShowNextButton(showNextButton: boolean): void;
						public getParentForAccessibility(): globalAndroid.view.ViewParent;
						public focusSearch(direction: number): globalAndroid.view.View;
						public onStopNestedScroll(child: globalAndroid.view.View): void;
						public getTextAlignment(): number;
						public onNestedPreScroll(target: globalAndroid.view.View, dx: number, dy: number, consumed: native.Array<number>): void;
						public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
						public show(): void;
						public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
						public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback, type: number): globalAndroid.view.ActionMode;
						public setVrButtonListener(onClickListener: globalAndroid.view.View.OnClickListener): void;
						public notifySubtreeAccessibilityStateChanged(child: globalAndroid.view.View, source: globalAndroid.view.View, changeType: number): void;
						public getParent(): globalAndroid.view.ViewParent;
						public getLayoutDirection(): number;
						public canResolveTextAlignment(): boolean;
						public constructor(context: globalAndroid.content.Context);
						public hideImmediately(): void;
						public onDescendantInvalidated(child: globalAndroid.view.View, target: globalAndroid.view.View): void;
						public getPlayer(): com.google.android.exoplayer2.Player;
						public childHasTransientStateChanged(child: globalAndroid.view.View, childHasTransientState: boolean): void;
						public canResolveLayoutDirection(): boolean;
						public setOnFullScreenModeChangedListener(listener: com.google.android.exoplayer2.ui.StyledPlayerControlView.OnFullScreenModeChangedListener): void;
						public onNestedPrePerformAccessibilityAction(target: globalAndroid.view.View, action: number, bundle2: globalAndroid.os.Bundle): boolean;
						public setPlayer(player: com.google.android.exoplayer2.Player): void;
						public setShowVrButton(showVrButton: boolean): void;
						public updateViewLayout(view: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
						public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
						public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
						public isTextAlignmentResolved(): boolean;
						public addVisibilityListener(listener: com.google.android.exoplayer2.ui.StyledPlayerControlView.VisibilityListener): void;
						public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
						public onNestedScrollAccepted(child: globalAndroid.view.View, target: globalAndroid.view.View, axes: number): void;
						public isAnimationEnabled(): boolean;
						public setControlDispatcher(controlDispatcher: com.google.android.exoplayer2.ControlDispatcher): void;
						public addView(child: globalAndroid.view.View): void;
						public focusableViewAvailable(v: globalAndroid.view.View): void;
						public requestChildFocus(child: globalAndroid.view.View, focused: globalAndroid.view.View): void;
						public isFullyVisible(): boolean;
						public getShowSubtitleButton(): boolean;
						public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, playbackAttrs: globalAndroid.util.AttributeSet);
						public isLayoutDirectionResolved(): boolean;
						public onStartNestedScroll(child: globalAndroid.view.View, target: globalAndroid.view.View, nestedScrollAxes: number): boolean;
						public clearChildFocus(child: globalAndroid.view.View): void;
						public getShowTimeoutMs(): number;
						/** @deprecated */
						public invalidateChildInParent(location: native.Array<number>, dirty: globalAndroid.graphics.Rect): globalAndroid.view.ViewParent;
						public removeVisibilityListener(listener: com.google.android.exoplayer2.ui.StyledPlayerControlView.VisibilityListener): void;
						public childDrawableStateChanged(child: globalAndroid.view.View): void;
						public removeView(view: globalAndroid.view.View): void;
						public showContextMenuForChild(originalView: globalAndroid.view.View, x: number, y: number): boolean;
						public setShowMultiWindowTimeBar(showMultiWindowTimeBar: boolean): void;
						public onNestedScroll(target: globalAndroid.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
						public addView(child: globalAndroid.view.View, width: number, height: number): void;
						public addView(child: globalAndroid.view.View, index: number, params: globalAndroid.view.ViewGroup.LayoutParams): void;
						public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
						public onNestedFling(target: globalAndroid.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
						public isVisible(): boolean;
						public onNestedPreFling(target: globalAndroid.view.View, velocityX: number, velocityY: number): boolean;
						public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
						public setTimeBarMinUpdateInterval(minUpdateIntervalMs: number): void;
						public createContextMenu(menu: globalAndroid.view.ContextMenu): void;
						public setRepeatToggleModes(repeatToggleModes: number): void;
						public onDetachedFromWindow(): void;
						public hide(): void;
						public showContextMenuForChild(originalView: globalAndroid.view.View): boolean;
					}
					export module StyledPlayerControlView {
						export class AudioTrackSelectionAdapter extends com.google.android.exoplayer2.ui.StyledPlayerControlView.TrackSelectionAdapter {
							public static class: java.lang.Class<com.google.android.exoplayer2.ui.StyledPlayerControlView.AudioTrackSelectionAdapter>;
							public onTrackSelection(string0: string): void;
							public onTrackSelection(subtext: string): void;
							public onBindViewHolderAtZeroPosition(holder: com.google.android.exoplayer2.ui.StyledPlayerControlView.TrackSelectionViewHolder): void;
							public onBindViewHolderAtZeroPosition(trackSelectionViewHolder0: com.google.android.exoplayer2.ui.StyledPlayerControlView.TrackSelectionViewHolder): void;
							public init(list0: java.util.List<java.lang.Integer>, list1: java.util.List<com.google.android.exoplayer2.ui.StyledPlayerControlView.TrackInfo>, mappedTrackInfo2: com.google.android.exoplayer2.trackselection.MappingTrackSelector.MappedTrackInfo): void;
							public init(rendererIndices: java.util.List<java.lang.Integer>, trackInfos: java.util.List<com.google.android.exoplayer2.ui.StyledPlayerControlView.TrackInfo>, mappedTrackInfo: com.google.android.exoplayer2.trackselection.MappingTrackSelector.MappedTrackInfo): void;
						}
						export class ComponentListener extends java.lang.Object implements com.google.android.exoplayer2.Player.EventListener, com.google.android.exoplayer2.ui.TimeBar.OnScrubListener, globalAndroid.view.View.OnClickListener, globalAndroid.widget.PopupWindow.OnDismissListener {
							public static class: java.lang.Class<com.google.android.exoplayer2.ui.StyledPlayerControlView.ComponentListener>;
							public onIsPlayingChanged(isPlaying: boolean): void;
							public onRepeatModeChanged(repeatMode: number): void;
							public onPlayWhenReadyChanged(playWhenReady: boolean, state: number): void;
							public onPlaybackParametersChanged(playbackParameters: com.google.android.exoplayer2.PlaybackParameters): void;
							public onPlaybackStateChanged(playbackState: number): void;
							/** @deprecated */
							public onLoadingChanged(isLoading: boolean): void;
							public onMediaItemTransition(mediaItem: com.google.android.exoplayer2.MediaItem, reason: number): void;
							/** @deprecated */
							public onTimelineChanged(timeline: com.google.android.exoplayer2.Timeline, manifest: any, reason: number): void;
							public onDismiss(): void;
							public onTracksChanged(trackGroups: com.google.android.exoplayer2.source.TrackGroupArray, trackSelections: com.google.android.exoplayer2.trackselection.TrackSelectionArray): void;
							public onPlaybackStateChanged(state: number): void;
							public onIsLoadingChanged(isLoading: boolean): void;
							public onPositionDiscontinuity(reason: number): void;
							public onPlaybackSuppressionReasonChanged(playbackSuppressionReason: number): void;
							public onExperimentalOffloadSchedulingEnabledChanged(offloadSchedulingEnabled: boolean): void;
							public onScrubStart(timeBar: com.google.android.exoplayer2.ui.TimeBar, position: number): void;
							/** @deprecated */
							public onSeekProcessed(): void;
							public onClick(view: globalAndroid.view.View): void;
							public onPlayWhenReadyChanged(playWhenReady: boolean, reason: number): void;
							public onTimelineChanged(timeline: com.google.android.exoplayer2.Timeline, reason: number): void;
							public onScrubStop(timeBar: com.google.android.exoplayer2.ui.TimeBar, position: number, canceled: boolean): void;
							public onScrubMove(timeBar: com.google.android.exoplayer2.ui.TimeBar, position: number): void;
							/** @deprecated */
							public onPlayerStateChanged(playWhenReady: boolean, playbackState: number): void;
							public onPlayerError(error: com.google.android.exoplayer2.ExoPlaybackException): void;
							public onShuffleModeEnabledChanged(shuffleModeEnabled: boolean): void;
						}
						export class OnFullScreenModeChangedListener extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.ui.StyledPlayerControlView.OnFullScreenModeChangedListener>;
							/**
							 * Constructs a new instance of the com.google.android.exoplayer2.ui.StyledPlayerControlView() when extending the interface class.
							 */
							public constructor(implementation: {
								onFullScreenModeChanged(boolean0: boolean): void;
							});
							public constructor();
							public onFullScreenModeChanged(boolean0: boolean): void;
						}
						export class ProgressUpdateListener extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.ui.StyledPlayerControlView.ProgressUpdateListener>;
							/**
							 * Constructs a new instance of the com.google.android.exoplayer2.ui.StyledPlayerControlView() when extending the interface class.
							 */
							public constructor(implementation: {
								onProgressUpdate(long0: number, long1: number): void;
							});
							public constructor();
							public onProgressUpdate(long0: number, long1: number): void;
						}
						export class SettingViewHolder extends androidx.recyclerview.widget.RecyclerView.ViewHolder {
							public static class: java.lang.Class<com.google.android.exoplayer2.ui.StyledPlayerControlView.SettingViewHolder>;
							public constructor(itemView: globalAndroid.view.View);
							public constructor(param0: com.google.android.exoplayer2.ui.StyledPlayerControlView, itemView: globalAndroid.view.View);
						}
						export class SettingsAdapter extends androidx.recyclerview.widget.RecyclerView.Adapter<com.google.android.exoplayer2.ui.StyledPlayerControlView.SettingViewHolder> {
							public static class: java.lang.Class<com.google.android.exoplayer2.ui.StyledPlayerControlView.SettingsAdapter>;
							public constructor();
							public onCreateViewHolder(viewGroup0: globalAndroid.view.ViewGroup, int1: number): any;
							public onBindViewHolder(holder: any, position: number, payloads: java.util.List<any>): void;
							public setSubTextAtPosition(position: number, subText: string): void;
							public getItemCount(): number;
							public onBindViewHolder(viewHolder0: any, int1: number): void;
							public onCreateViewHolder(viewGroup: globalAndroid.view.ViewGroup, viewType: number): com.google.android.exoplayer2.ui.StyledPlayerControlView.SettingViewHolder;
							public onBindViewHolder(holder: com.google.android.exoplayer2.ui.StyledPlayerControlView.SettingViewHolder, position: number): void;
							public constructor(param0: com.google.android.exoplayer2.ui.StyledPlayerControlView, mainTexts: native.Array<string>, iconIds: native.Array<globalAndroid.graphics.drawable.Drawable>);
							public getItemId(position: number): number;
						}
						export class SubSettingViewHolder extends androidx.recyclerview.widget.RecyclerView.ViewHolder {
							public static class: java.lang.Class<com.google.android.exoplayer2.ui.StyledPlayerControlView.SubSettingViewHolder>;
							public constructor(itemView: globalAndroid.view.View);
							public constructor(param0: com.google.android.exoplayer2.ui.StyledPlayerControlView, itemView: globalAndroid.view.View);
						}
						export class SubSettingsAdapter extends androidx.recyclerview.widget.RecyclerView.Adapter<com.google.android.exoplayer2.ui.StyledPlayerControlView.SubSettingViewHolder> {
							public static class: java.lang.Class<com.google.android.exoplayer2.ui.StyledPlayerControlView.SubSettingsAdapter>;
							public onCreateViewHolder(viewGroup0: globalAndroid.view.ViewGroup, int1: number): any;
							public onBindViewHolder(holder: any, position: number, payloads: java.util.List<any>): void;
							public getItemCount(): number;
							public onCreateViewHolder(parent: globalAndroid.view.ViewGroup, viewType: number): com.google.android.exoplayer2.ui.StyledPlayerControlView.SubSettingViewHolder;
							public onBindViewHolder(viewHolder0: any, int1: number): void;
							public onBindViewHolder(holder: com.google.android.exoplayer2.ui.StyledPlayerControlView.SubSettingViewHolder, position: number): void;
							public setCheckPosition(checkPosition: number): void;
							public setTexts(texts: java.util.List<string>): void;
						}
						export class TextTrackSelectionAdapter extends com.google.android.exoplayer2.ui.StyledPlayerControlView.TrackSelectionAdapter {
							public static class: java.lang.Class<com.google.android.exoplayer2.ui.StyledPlayerControlView.TextTrackSelectionAdapter>;
							public onBindViewHolder(holder: com.google.android.exoplayer2.ui.StyledPlayerControlView.TrackSelectionViewHolder, position: number): void;
							public onTrackSelection(string0: string): void;
							public onTrackSelection(subtext: string): void;
							public onBindViewHolder(holder: any, position: number, payloads: java.util.List<any>): void;
							public onBindViewHolderAtZeroPosition(holder: com.google.android.exoplayer2.ui.StyledPlayerControlView.TrackSelectionViewHolder): void;
							public onBindViewHolder(viewHolder0: any, int1: number): void;
							public onBindViewHolderAtZeroPosition(trackSelectionViewHolder0: com.google.android.exoplayer2.ui.StyledPlayerControlView.TrackSelectionViewHolder): void;
							public init(list0: java.util.List<java.lang.Integer>, list1: java.util.List<com.google.android.exoplayer2.ui.StyledPlayerControlView.TrackInfo>, mappedTrackInfo2: com.google.android.exoplayer2.trackselection.MappingTrackSelector.MappedTrackInfo): void;
							public init(rendererIndices: java.util.List<java.lang.Integer>, trackInfos: java.util.List<com.google.android.exoplayer2.ui.StyledPlayerControlView.TrackInfo>, mappedTrackInfo: com.google.android.exoplayer2.trackselection.MappingTrackSelector.MappedTrackInfo): void;
						}
						export class TrackInfo extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.ui.StyledPlayerControlView.TrackInfo>;
							public rendererIndex: number;
							public groupIndex: number;
							public trackIndex: number;
							public trackName: string;
							public selected: boolean;
							public constructor(rendererIndex: number, groupIndex: number, trackIndex: number, trackName: string, selected: boolean);
						}
						export abstract class TrackSelectionAdapter extends androidx.recyclerview.widget.RecyclerView.Adapter<com.google.android.exoplayer2.ui.StyledPlayerControlView.TrackSelectionViewHolder> {
							public static class: java.lang.Class<com.google.android.exoplayer2.ui.StyledPlayerControlView.TrackSelectionAdapter>;
							public rendererIndices: java.util.List<java.lang.Integer>;
							public tracks: java.util.List<com.google.android.exoplayer2.ui.StyledPlayerControlView.TrackInfo>;
							public mappedTrackInfo: com.google.android.exoplayer2.trackselection.MappingTrackSelector.MappedTrackInfo;
							public constructor();
							public onTrackSelection(string0: string): void;
							public onBindViewHolder(holder: com.google.android.exoplayer2.ui.StyledPlayerControlView.TrackSelectionViewHolder, position: number): void;
							public onCreateViewHolder(viewGroup0: globalAndroid.view.ViewGroup, int1: number): any;
							public onCreateViewHolder(parent: globalAndroid.view.ViewGroup, viewType: number): com.google.android.exoplayer2.ui.StyledPlayerControlView.TrackSelectionViewHolder;
							public constructor(param0: com.google.android.exoplayer2.ui.StyledPlayerControlView);
							public onBindViewHolder(holder: any, position: number, payloads: java.util.List<any>): void;
							public getItemCount(): number;
							public clear(): void;
							public onBindViewHolder(viewHolder0: any, int1: number): void;
							public onBindViewHolderAtZeroPosition(trackSelectionViewHolder0: com.google.android.exoplayer2.ui.StyledPlayerControlView.TrackSelectionViewHolder): void;
							public init(list0: java.util.List<java.lang.Integer>, list1: java.util.List<com.google.android.exoplayer2.ui.StyledPlayerControlView.TrackInfo>, mappedTrackInfo2: com.google.android.exoplayer2.trackselection.MappingTrackSelector.MappedTrackInfo): void;
						}
						export class TrackSelectionViewHolder extends androidx.recyclerview.widget.RecyclerView.ViewHolder {
							public static class: java.lang.Class<com.google.android.exoplayer2.ui.StyledPlayerControlView.TrackSelectionViewHolder>;
							public textView: globalAndroid.widget.TextView;
							public checkView: globalAndroid.view.View;
							public constructor(itemView: globalAndroid.view.View);
						}
						export class VisibilityListener extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.ui.StyledPlayerControlView.VisibilityListener>;
							/**
							 * Constructs a new instance of the com.google.android.exoplayer2.ui.StyledPlayerControlView() when extending the interface class.
							 */
							public constructor(implementation: {
								onVisibilityChange(int0: number): void;
							});
							public constructor();
							public onVisibilityChange(int0: number): void;
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
				export module ui {
					export class StyledPlayerControlViewLayoutManager extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.ui.StyledPlayerControlViewLayoutManager>;
						public isAnimationEnabled(): boolean;
						public onAttachedToWindow(): void;
						public onDetachedFromWindow(): void;
						public hide(): void;
						public isFullyVisible(): boolean;
						public resetHideCallbacks(): void;
						public constructor(styledPlayerControlView: com.google.android.exoplayer2.ui.StyledPlayerControlView);
						public show(): void;
						public setAnimationEnabled(animationEnabled: boolean): void;
						public removeHideCallbacks(): void;
						public getShowButton(button: globalAndroid.view.View): boolean;
						public hideImmediately(): void;
						public setShowButton(button: globalAndroid.view.View, showButton: boolean): void;
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
				export module ui {
					export class StyledPlayerView extends globalAndroid.widget.FrameLayout implements com.google.android.exoplayer2.source.ads.AdsLoader.AdViewProvider {
						public static class: java.lang.Class<com.google.android.exoplayer2.ui.StyledPlayerView>;
						public static SHOW_BUFFERING_NEVER: number;
						public static SHOW_BUFFERING_WHEN_PLAYING: number;
						public static SHOW_BUFFERING_ALWAYS: number;
						public setErrorMessageProvider(errorMessageProvider: com.google.android.exoplayer2.util.ErrorMessageProvider<any>): void;
						public isLayoutRequested(): boolean;
						public bringChildToFront(child: globalAndroid.view.View): void;
						public setShowRewindButton(showRewindButton: boolean): void;
						public requestTransparentRegion(child: globalAndroid.view.View): void;
						public setShowBuffering(showBuffering: number): void;
						public performClick(): boolean;
						public setUseArtwork(useArtwork: boolean): void;
						public setControllerVisibilityListener(listener: com.google.android.exoplayer2.ui.StyledPlayerControlView.VisibilityListener): void;
						public dispatchMediaKeyEvent(event: globalAndroid.view.KeyEvent): boolean;
						/** @deprecated */
						public setPlaybackPreparer(playbackPreparer: com.google.android.exoplayer2.PlaybackPreparer): void;
						public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
						public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
						public getTextDirection(): number;
						public setShowFastForwardButton(showFastForwardButton: boolean): void;
						public getChildVisibleRect(child: globalAndroid.view.View, r: globalAndroid.graphics.Rect, offset: globalAndroid.graphics.Point): boolean;
						public static switchTargetView(player: com.google.android.exoplayer2.Player, oldPlayerView: com.google.android.exoplayer2.ui.StyledPlayerView, newPlayerView: com.google.android.exoplayer2.ui.StyledPlayerView): void;
						public addView(child: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
						public onResume(): void;
						public setCustomErrorMessage(message: string): void;
						public onContentAspectRatioChanged(contentAspectRatio: number, contentFrame: com.google.android.exoplayer2.ui.AspectRatioFrameLayout, contentView: globalAndroid.view.View): void;
						public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
						public sendAccessibilityEvent(eventType: number): void;
						public setExtraAdGroupMarkers(extraAdGroupTimesMs: native.Array<number>, extraPlayedAdGroups: native.Array<boolean>): void;
						public canResolveTextDirection(): boolean;
						public setControllerHideOnTouch(controllerHideOnTouch: boolean): void;
						public recomputeViewAttributes(child: globalAndroid.view.View): void;
						public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
						public requestLayout(): void;
						public keyboardNavigationClusterSearch(currentCluster: globalAndroid.view.View, direction: number): globalAndroid.view.View;
						/** @deprecated */
						public getAdOverlayViews(): native.Array<globalAndroid.view.View>;
						public isTextDirectionResolved(): boolean;
						/** @deprecated */
						public requestFitSystemWindows(): void;
						public setShowSubtitleButton(showSubtitleButton: boolean): void;
						public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
						/** @deprecated */
						public invalidateChild(child: globalAndroid.view.View, dirty: globalAndroid.graphics.Rect): void;
						public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
						public setShowPreviousButton(showPreviousButton: boolean): void;
						public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
						public dispatchKeyEvent(event: globalAndroid.view.KeyEvent): boolean;
						public requestSendAccessibilityEvent(child: globalAndroid.view.View, event: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
						public setKeepContentOnPlayerReset(keepContentOnPlayerReset: boolean): void;
						public setShowShuffleButton(showShuffleButton: boolean): void;
						public addView(child: globalAndroid.view.View, index: number): void;
						public focusSearch(focused: globalAndroid.view.View, direction: number): globalAndroid.view.View;
						public requestChildRectangleOnScreen(child: globalAndroid.view.View, rectangle: globalAndroid.graphics.Rect, immediate: boolean): boolean;
						public requestFitSystemWindows(): void;
						public setShowNextButton(showNextButton: boolean): void;
						public getParentForAccessibility(): globalAndroid.view.ViewParent;
						public focusSearch(direction: number): globalAndroid.view.View;
						public onStopNestedScroll(child: globalAndroid.view.View): void;
						public getUseArtwork(): boolean;
						public getTextAlignment(): number;
						public onNestedPreScroll(target: globalAndroid.view.View, dx: number, dy: number, consumed: native.Array<number>): void;
						public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
						public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
						public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback, type: number): globalAndroid.view.ActionMode;
						public notifySubtreeAccessibilityStateChanged(child: globalAndroid.view.View, source: globalAndroid.view.View, changeType: number): void;
						public onTrackballEvent(ev: globalAndroid.view.MotionEvent): boolean;
						public setAspectRatioListener(listener: com.google.android.exoplayer2.ui.AspectRatioFrameLayout.AspectRatioListener): void;
						public getParent(): globalAndroid.view.ViewParent;
						public getLayoutDirection(): number;
						public canResolveTextAlignment(): boolean;
						public constructor(context: globalAndroid.content.Context);
						public onDescendantInvalidated(child: globalAndroid.view.View, target: globalAndroid.view.View): void;
						public isControllerFullyVisible(): boolean;
						public getPlayer(): com.google.android.exoplayer2.Player;
						public childHasTransientStateChanged(child: globalAndroid.view.View, childHasTransientState: boolean): void;
						public canResolveLayoutDirection(): boolean;
						public onNestedPrePerformAccessibilityAction(target: globalAndroid.view.View, action: number, bundle2: globalAndroid.os.Bundle): boolean;
						public setPlayer(player: com.google.android.exoplayer2.Player): void;
						public getControllerHideOnTouch(): boolean;
						public setShowVrButton(showVrButton: boolean): void;
						public updateViewLayout(view: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
						public onPause(): void;
						public setControllerHideDuringAds(controllerHideDuringAds: boolean): void;
						public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
						public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
						public isTextAlignmentResolved(): boolean;
						public getDefaultArtwork(): globalAndroid.graphics.drawable.Drawable;
						public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
						public getOverlayFrameLayout(): globalAndroid.widget.FrameLayout;
						public onNestedScrollAccepted(child: globalAndroid.view.View, target: globalAndroid.view.View, axes: number): void;
						public getControllerShowTimeoutMs(): number;
						public setControlDispatcher(controlDispatcher: com.google.android.exoplayer2.ControlDispatcher): void;
						public addView(child: globalAndroid.view.View): void;
						public focusableViewAvailable(v: globalAndroid.view.View): void;
						public requestChildFocus(child: globalAndroid.view.View, focused: globalAndroid.view.View): void;
						public getSubtitleView(): com.google.android.exoplayer2.ui.SubtitleView;
						public isLayoutDirectionResolved(): boolean;
						public onStartNestedScroll(child: globalAndroid.view.View, target: globalAndroid.view.View, nestedScrollAxes: number): boolean;
						public clearChildFocus(child: globalAndroid.view.View): void;
						public setUseSensorRotation(useSensorRotation: boolean): void;
						public setVisibility(visibility: number): void;
						public getAdOverlayInfos(): java.util.List<com.google.android.exoplayer2.source.ads.AdsLoader.OverlayInfo>;
						public setControllerAutoShow(controllerAutoShow: boolean): void;
						/** @deprecated */
						public invalidateChildInParent(location: native.Array<number>, dirty: globalAndroid.graphics.Rect): globalAndroid.view.ViewParent;
						public setControllerOnFullScreenModeChangedListener(listener: com.google.android.exoplayer2.ui.StyledPlayerControlView.OnFullScreenModeChangedListener): void;
						public childDrawableStateChanged(child: globalAndroid.view.View): void;
						public removeView(view: globalAndroid.view.View): void;
						public setUseController(useController: boolean): void;
						public showContextMenuForChild(originalView: globalAndroid.view.View, x: number, y: number): boolean;
						public setShowMultiWindowTimeBar(showMultiWindowTimeBar: boolean): void;
						public onTrackballEvent(event: globalAndroid.view.MotionEvent): boolean;
						public getVideoSurfaceView(): globalAndroid.view.View;
						public onNestedScroll(target: globalAndroid.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
						public addView(child: globalAndroid.view.View, width: number, height: number): void;
						public addView(child: globalAndroid.view.View, index: number, params: globalAndroid.view.ViewGroup.LayoutParams): void;
						public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
						public getUseController(): boolean;
						public onNestedFling(target: globalAndroid.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
						public setControllerShowTimeoutMs(controllerShowTimeoutMs: number): void;
						public onNestedPreFling(target: globalAndroid.view.View, velocityX: number, velocityY: number): boolean;
						public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
						public createContextMenu(menu: globalAndroid.view.ContextMenu): void;
						public setRepeatToggleModes(repeatToggleModes: number): void;
						public showContextMenuForChild(originalView: globalAndroid.view.View): boolean;
						public getResizeMode(): number;
						public onTouchEvent(event: globalAndroid.view.MotionEvent): boolean;
						public getAdViewGroup(): globalAndroid.view.ViewGroup;
						public hideController(): void;
						public getControllerAutoShow(): boolean;
						public setShutterBackgroundColor(color: number): void;
						public setResizeMode(resizeMode: number): void;
						public showController(): void;
						public setDefaultArtwork(defaultArtwork: globalAndroid.graphics.drawable.Drawable): void;
					}
					export module StyledPlayerView {
						export class ComponentListener extends java.lang.Object implements com.google.android.exoplayer2.Player.EventListener, com.google.android.exoplayer2.text.TextOutput, com.google.android.exoplayer2.video.VideoListener, globalAndroid.view.View.OnLayoutChangeListener, com.google.android.exoplayer2.ui.spherical.SingleTapListener, com.google.android.exoplayer2.ui.StyledPlayerControlView.VisibilityListener {
							public static class: java.lang.Class<com.google.android.exoplayer2.ui.StyledPlayerView.ComponentListener>;
							public onIsPlayingChanged(isPlaying: boolean): void;
							public onRepeatModeChanged(repeatMode: number): void;
							public onPlaybackParametersChanged(playbackParameters: com.google.android.exoplayer2.PlaybackParameters): void;
							public onPlaybackStateChanged(playbackState: number): void;
							public onRenderedFirstFrame(): void;
							/** @deprecated */
							public onLoadingChanged(isLoading: boolean): void;
							public onTracksChanged(tracks: com.google.android.exoplayer2.source.TrackGroupArray, selections: com.google.android.exoplayer2.trackselection.TrackSelectionArray): void;
							public onMediaItemTransition(mediaItem: com.google.android.exoplayer2.MediaItem, reason: number): void;
							public onSurfaceSizeChanged(width: number, height: number): void;
							/** @deprecated */
							public onTimelineChanged(timeline: com.google.android.exoplayer2.Timeline, manifest: any, reason: number): void;
							public onTracksChanged(trackGroups: com.google.android.exoplayer2.source.TrackGroupArray, trackSelections: com.google.android.exoplayer2.trackselection.TrackSelectionArray): void;
							public onVisibilityChange(visibility: number): void;
							public onPlaybackStateChanged(state: number): void;
							public onIsLoadingChanged(isLoading: boolean): void;
							public onPositionDiscontinuity(reason: number): void;
							public onSingleTapUp(e: globalAndroid.view.MotionEvent): boolean;
							public onLayoutChange(view: globalAndroid.view.View, left: number, top: number, right: number, bottom: number, oldLeft: number, oldTop: number, oldRight: number, oldBottom: number): void;
							public onPlaybackSuppressionReasonChanged(playbackSuppressionReason: number): void;
							public onExperimentalOffloadSchedulingEnabledChanged(offloadSchedulingEnabled: boolean): void;
							/** @deprecated */
							public onSeekProcessed(): void;
							public onPlayWhenReadyChanged(playWhenReady: boolean, reason: number): void;
							public constructor(param0: com.google.android.exoplayer2.ui.StyledPlayerView);
							public onTimelineChanged(timeline: com.google.android.exoplayer2.Timeline, reason: number): void;
							public onVideoSizeChanged(width: number, height: number, unappliedRotationDegrees: number, pixelWidthHeightRatio: number): void;
							/** @deprecated */
							public onPlayerStateChanged(playWhenReady: boolean, playbackState: number): void;
							public onCues(cues: java.util.List<com.google.android.exoplayer2.text.Cue>): void;
							public onPlayerError(error: com.google.android.exoplayer2.ExoPlaybackException): void;
							public onShuffleModeEnabledChanged(shuffleModeEnabled: boolean): void;
						}
						export class ShowBuffering extends java.lang.Object implements java.lang.annotation.Annotation {
							public static class: java.lang.Class<com.google.android.exoplayer2.ui.StyledPlayerView.ShowBuffering>;
							/**
							 * Constructs a new instance of the com.google.android.exoplayer2.ui.StyledPlayerView() when extending the interface class.
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

declare module com {
	export module google {
		export module android {
			export module exoplayer2 {
				export module ui {
					export class SubtitlePainter extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.ui.SubtitlePainter>;
						public draw(cue: com.google.android.exoplayer2.text.Cue, style: com.google.android.exoplayer2.text.CaptionStyleCompat, defaultTextSizePx: number, cueTextSizePx: number, bottomPaddingFraction: number, canvas: globalAndroid.graphics.Canvas, cueBoxLeft: number, cueBoxTop: number, cueBoxRight: number, cueBoxBottom: number): void;
						public constructor(context: globalAndroid.content.Context);
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
				export module ui {
					export class SubtitleView extends globalAndroid.widget.FrameLayout implements com.google.android.exoplayer2.text.TextOutput {
						public static class: java.lang.Class<com.google.android.exoplayer2.ui.SubtitleView>;
						public static DEFAULT_TEXT_SIZE_FRACTION: number;
						public static DEFAULT_BOTTOM_PADDING_FRACTION: number;
						public static VIEW_TYPE_CANVAS: number;
						public static VIEW_TYPE_WEB: number;
						public isLayoutRequested(): boolean;
						public bringChildToFront(child: globalAndroid.view.View): void;
						public childHasTransientStateChanged(child: globalAndroid.view.View, childHasTransientState: boolean): void;
						public canResolveLayoutDirection(): boolean;
						public setFractionalTextSize(fractionOfHeight: number, ignorePadding: boolean): void;
						public onNestedPrePerformAccessibilityAction(target: globalAndroid.view.View, action: number, bundle2: globalAndroid.os.Bundle): boolean;
						public requestTransparentRegion(child: globalAndroid.view.View): void;
						public updateViewLayout(view: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
						public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
						public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
						public isTextAlignmentResolved(): boolean;
						public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
						public setViewType(viewType: number): void;
						public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
						public setFractionalTextSize(fractionOfHeight: number): void;
						public onNestedScrollAccepted(child: globalAndroid.view.View, target: globalAndroid.view.View, axes: number): void;
						public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
						public getTextDirection(): number;
						public getChildVisibleRect(child: globalAndroid.view.View, r: globalAndroid.graphics.Rect, offset: globalAndroid.graphics.Point): boolean;
						public setStyle(style: com.google.android.exoplayer2.text.CaptionStyleCompat): void;
						public addView(child: globalAndroid.view.View): void;
						public addView(child: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
						public focusableViewAvailable(v: globalAndroid.view.View): void;
						public requestChildFocus(child: globalAndroid.view.View, focused: globalAndroid.view.View): void;
						public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
						public sendAccessibilityEvent(eventType: number): void;
						public canResolveTextDirection(): boolean;
						public isLayoutDirectionResolved(): boolean;
						public onStartNestedScroll(child: globalAndroid.view.View, target: globalAndroid.view.View, nestedScrollAxes: number): boolean;
						public recomputeViewAttributes(child: globalAndroid.view.View): void;
						public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
						public requestLayout(): void;
						public clearChildFocus(child: globalAndroid.view.View): void;
						public setFixedTextSize(unit: number, size: number): void;
						public keyboardNavigationClusterSearch(currentCluster: globalAndroid.view.View, direction: number): globalAndroid.view.View;
						public isTextDirectionResolved(): boolean;
						/** @deprecated */
						public invalidateChildInParent(location: native.Array<number>, dirty: globalAndroid.graphics.Rect): globalAndroid.view.ViewParent;
						public childDrawableStateChanged(child: globalAndroid.view.View): void;
						/** @deprecated */
						public requestFitSystemWindows(): void;
						public removeView(view: globalAndroid.view.View): void;
						public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
						public setApplyEmbeddedStyles(applyEmbeddedStyles: boolean): void;
						/** @deprecated */
						public invalidateChild(child: globalAndroid.view.View, dirty: globalAndroid.graphics.Rect): void;
						public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
						public showContextMenuForChild(originalView: globalAndroid.view.View, x: number, y: number): boolean;
						public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
						public setUserDefaultTextSize(): void;
						public requestSendAccessibilityEvent(child: globalAndroid.view.View, event: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
						public onNestedScroll(target: globalAndroid.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
						public addView(child: globalAndroid.view.View, width: number, height: number): void;
						public addView(child: globalAndroid.view.View, index: number, params: globalAndroid.view.ViewGroup.LayoutParams): void;
						public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
						public setApplyEmbeddedFontSizes(applyEmbeddedFontSizes: boolean): void;
						public onNestedFling(target: globalAndroid.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
						public addView(child: globalAndroid.view.View, index: number): void;
						public onNestedPreFling(target: globalAndroid.view.View, velocityX: number, velocityY: number): boolean;
						public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
						public focusSearch(focused: globalAndroid.view.View, direction: number): globalAndroid.view.View;
						public requestChildRectangleOnScreen(child: globalAndroid.view.View, rectangle: globalAndroid.graphics.Rect, immediate: boolean): boolean;
						public requestFitSystemWindows(): void;
						public onCues(cues: java.util.List<com.google.android.exoplayer2.text.Cue>): void;
						public getParentForAccessibility(): globalAndroid.view.ViewParent;
						public createContextMenu(menu: globalAndroid.view.ContextMenu): void;
						public focusSearch(direction: number): globalAndroid.view.View;
						public onStopNestedScroll(child: globalAndroid.view.View): void;
						public showContextMenuForChild(originalView: globalAndroid.view.View): boolean;
						public getTextAlignment(): number;
						public onNestedPreScroll(target: globalAndroid.view.View, dx: number, dy: number, consumed: native.Array<number>): void;
						public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
						public setBottomPaddingFraction(bottomPaddingFraction: number): void;
						public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
						public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback, type: number): globalAndroid.view.ActionMode;
						public notifySubtreeAccessibilityStateChanged(child: globalAndroid.view.View, source: globalAndroid.view.View, changeType: number): void;
						public setCues(cues: java.util.List<com.google.android.exoplayer2.text.Cue>): void;
						public getParent(): globalAndroid.view.ViewParent;
						public getLayoutDirection(): number;
						public canResolveTextAlignment(): boolean;
						public constructor(context: globalAndroid.content.Context);
						public onDescendantInvalidated(child: globalAndroid.view.View, target: globalAndroid.view.View): void;
						public setUserDefaultStyle(): void;
					}
					export module SubtitleView {
						export class Output extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.ui.SubtitleView.Output>;
							/**
							 * Constructs a new instance of the com.google.android.exoplayer2.ui.SubtitleView() when extending the interface class.
							 */
							public constructor(implementation: {
								update(list0: java.util.List<com.google.android.exoplayer2.text.Cue>, captionStyleCompat1: com.google.android.exoplayer2.text.CaptionStyleCompat, float2: number, int3: number, float4: number): void;
							});
							public constructor();
							public update(list0: java.util.List<com.google.android.exoplayer2.text.Cue>, captionStyleCompat1: com.google.android.exoplayer2.text.CaptionStyleCompat, float2: number, int3: number, float4: number): void;
						}
						export class ViewType extends java.lang.Object implements java.lang.annotation.Annotation {
							public static class: java.lang.Class<com.google.android.exoplayer2.ui.SubtitleView.ViewType>;
							/**
							 * Constructs a new instance of the com.google.android.exoplayer2.ui.SubtitleView() when extending the interface class.
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

declare module com {
	export module google {
		export module android {
			export module exoplayer2 {
				export module ui {
					export class SubtitleViewUtils extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.ui.SubtitleViewUtils>;
						public static resolveTextSize(textSizeType: number, textSize: number, rawViewHeight: number, viewHeightMinusPadding: number): number;
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
				export module ui {
					export class TimeBar extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.ui.TimeBar>;
						/**
						 * Constructs a new instance of the com.google.android.exoplayer2.ui.TimeBar interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							addListener(onScrubListener0: com.google.android.exoplayer2.ui.TimeBar.OnScrubListener): void;
							removeListener(onScrubListener0: com.google.android.exoplayer2.ui.TimeBar.OnScrubListener): void;
							setEnabled(boolean0: boolean): void;
							setKeyTimeIncrement(long0: number): void;
							setKeyCountIncrement(int0: number): void;
							setPosition(long0: number): void;
							setBufferedPosition(long0: number): void;
							setDuration(long0: number): void;
							getPreferredUpdateDelay(): number;
							setAdGroupTimesMs(longs0: native.Array<number>, booleans1: native.Array<boolean>, int2: number): void;
						});
						public constructor();
						public setBufferedPosition(long0: number): void;
						public getPreferredUpdateDelay(): number;
						public setDuration(long0: number): void;
						public removeListener(onScrubListener0: com.google.android.exoplayer2.ui.TimeBar.OnScrubListener): void;
						public setKeyCountIncrement(int0: number): void;
						public setAdGroupTimesMs(longs0: native.Array<number>, booleans1: native.Array<boolean>, int2: number): void;
						public setEnabled(boolean0: boolean): void;
						public addListener(onScrubListener0: com.google.android.exoplayer2.ui.TimeBar.OnScrubListener): void;
						public setKeyTimeIncrement(long0: number): void;
						public setPosition(long0: number): void;
					}
					export module TimeBar {
						export class OnScrubListener extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.ui.TimeBar.OnScrubListener>;
							/**
							 * Constructs a new instance of the com.google.android.exoplayer2.ui.TimeBar() when extending the interface class.
							 */
							public constructor(implementation: {
								onScrubStart(timeBar0: com.google.android.exoplayer2.ui.TimeBar, long1: number): void;
								onScrubMove(timeBar0: com.google.android.exoplayer2.ui.TimeBar, long1: number): void;
								onScrubStop(timeBar0: com.google.android.exoplayer2.ui.TimeBar, long1: number, boolean2: boolean): void;
							});
							public constructor();
							public onScrubStart(timeBar0: com.google.android.exoplayer2.ui.TimeBar, long1: number): void;
							public onScrubMove(timeBar0: com.google.android.exoplayer2.ui.TimeBar, long1: number): void;
							public onScrubStop(timeBar0: com.google.android.exoplayer2.ui.TimeBar, long1: number, boolean2: boolean): void;
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
				export module ui {
					export class TrackNameProvider extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.ui.TrackNameProvider>;
						/**
						 * Constructs a new instance of the com.google.android.exoplayer2.ui.TrackNameProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getTrackName(format0: com.google.android.exoplayer2.Format): string;
						});
						public constructor();
						public getTrackName(format0: com.google.android.exoplayer2.Format): string;
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
				export module ui {
					export class TrackSelectionDialogBuilder extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.ui.TrackSelectionDialogBuilder>;
						public setTrackFormatComparator(trackFormatComparator: java.util.Comparator<com.google.android.exoplayer2.Format>): void;
						public constructor(context: globalAndroid.content.Context, title: string, trackSelector: com.google.android.exoplayer2.trackselection.DefaultTrackSelector, rendererIndex: number);
						public setAllowAdaptiveSelections(allowAdaptiveSelections: boolean): com.google.android.exoplayer2.ui.TrackSelectionDialogBuilder;
						public setTrackNameProvider(trackNameProvider: com.google.android.exoplayer2.ui.TrackNameProvider): com.google.android.exoplayer2.ui.TrackSelectionDialogBuilder;
						public setTheme(themeResId: number): com.google.android.exoplayer2.ui.TrackSelectionDialogBuilder;
						public setShowDisableOption(showDisableOption: boolean): com.google.android.exoplayer2.ui.TrackSelectionDialogBuilder;
						public setOverrides(overrides: java.util.List<com.google.android.exoplayer2.trackselection.DefaultTrackSelector.SelectionOverride>): com.google.android.exoplayer2.ui.TrackSelectionDialogBuilder;
						public setIsDisabled(isDisabled: boolean): com.google.android.exoplayer2.ui.TrackSelectionDialogBuilder;
						public setAllowMultipleOverrides(allowMultipleOverrides: boolean): com.google.android.exoplayer2.ui.TrackSelectionDialogBuilder;
						public constructor(context: globalAndroid.content.Context, title: string, mappedTrackInfo: com.google.android.exoplayer2.trackselection.MappingTrackSelector.MappedTrackInfo, rendererIndex: number, callback: com.google.android.exoplayer2.ui.TrackSelectionDialogBuilder.DialogCallback);
						public build(): globalAndroid.app.Dialog;
						public setOverride(override: com.google.android.exoplayer2.trackselection.DefaultTrackSelector.SelectionOverride): com.google.android.exoplayer2.ui.TrackSelectionDialogBuilder;
					}
					export module TrackSelectionDialogBuilder {
						export class DialogCallback extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.ui.TrackSelectionDialogBuilder.DialogCallback>;
							/**
							 * Constructs a new instance of the com.google.android.exoplayer2.ui.TrackSelectionDialogBuilder() when extending the interface class.
							 */
							public constructor(implementation: {
								onTracksSelected(boolean0: boolean, list1: java.util.List<com.google.android.exoplayer2.trackselection.DefaultTrackSelector.SelectionOverride>): void;
							});
							public constructor();
							public onTracksSelected(boolean0: boolean, list1: java.util.List<com.google.android.exoplayer2.trackselection.DefaultTrackSelector.SelectionOverride>): void;
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
				export module ui {
					export class TrackSelectionView extends globalAndroid.widget.LinearLayout {
						public static class: java.lang.Class<com.google.android.exoplayer2.ui.TrackSelectionView>;
						public isLayoutRequested(): boolean;
						public setAllowMultipleOverrides(allowMultipleOverrides: boolean): void;
						public bringChildToFront(child: globalAndroid.view.View): void;
						public childHasTransientStateChanged(child: globalAndroid.view.View, childHasTransientState: boolean): void;
						public canResolveLayoutDirection(): boolean;
						public onNestedPrePerformAccessibilityAction(target: globalAndroid.view.View, action: number, bundle2: globalAndroid.os.Bundle): boolean;
						public requestTransparentRegion(child: globalAndroid.view.View): void;
						public updateViewLayout(view: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
						public setShowDisableOption(showDisableOption: boolean): void;
						public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
						public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
						public isTextAlignmentResolved(): boolean;
						public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
						public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
						public onNestedScrollAccepted(child: globalAndroid.view.View, target: globalAndroid.view.View, axes: number): void;
						public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
						public getTextDirection(): number;
						public getOverrides(): java.util.List<com.google.android.exoplayer2.trackselection.DefaultTrackSelector.SelectionOverride>;
						public getChildVisibleRect(child: globalAndroid.view.View, r: globalAndroid.graphics.Rect, offset: globalAndroid.graphics.Point): boolean;
						public init(mappedTrackInfo: com.google.android.exoplayer2.trackselection.MappingTrackSelector.MappedTrackInfo, rendererIndex: number, isDisabled: boolean, overrides: java.util.List<com.google.android.exoplayer2.trackselection.DefaultTrackSelector.SelectionOverride>, trackFormatComparator: java.util.Comparator<com.google.android.exoplayer2.Format>, listener: com.google.android.exoplayer2.ui.TrackSelectionView.TrackSelectionListener): void;
						public addView(child: globalAndroid.view.View): void;
						public addView(child: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
						public focusableViewAvailable(v: globalAndroid.view.View): void;
						public requestChildFocus(child: globalAndroid.view.View, focused: globalAndroid.view.View): void;
						public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
						public sendAccessibilityEvent(eventType: number): void;
						public canResolveTextDirection(): boolean;
						public isLayoutDirectionResolved(): boolean;
						public onStartNestedScroll(child: globalAndroid.view.View, target: globalAndroid.view.View, nestedScrollAxes: number): boolean;
						public recomputeViewAttributes(child: globalAndroid.view.View): void;
						public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
						public requestLayout(): void;
						public clearChildFocus(child: globalAndroid.view.View): void;
						public keyboardNavigationClusterSearch(currentCluster: globalAndroid.view.View, direction: number): globalAndroid.view.View;
						public isTextDirectionResolved(): boolean;
						/** @deprecated */
						public invalidateChildInParent(location: native.Array<number>, dirty: globalAndroid.graphics.Rect): globalAndroid.view.ViewParent;
						public setAllowAdaptiveSelections(allowAdaptiveSelections: boolean): void;
						public childDrawableStateChanged(child: globalAndroid.view.View): void;
						/** @deprecated */
						public requestFitSystemWindows(): void;
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
						public onNestedFling(target: globalAndroid.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
						public addView(child: globalAndroid.view.View, index: number): void;
						public onNestedPreFling(target: globalAndroid.view.View, velocityX: number, velocityY: number): boolean;
						public getIsDisabled(): boolean;
						public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
						public focusSearch(focused: globalAndroid.view.View, direction: number): globalAndroid.view.View;
						public requestChildRectangleOnScreen(child: globalAndroid.view.View, rectangle: globalAndroid.graphics.Rect, immediate: boolean): boolean;
						public requestFitSystemWindows(): void;
						public getParentForAccessibility(): globalAndroid.view.ViewParent;
						public createContextMenu(menu: globalAndroid.view.ContextMenu): void;
						public focusSearch(direction: number): globalAndroid.view.View;
						public onStopNestedScroll(child: globalAndroid.view.View): void;
						public showContextMenuForChild(originalView: globalAndroid.view.View): boolean;
						public getTextAlignment(): number;
						public onNestedPreScroll(target: globalAndroid.view.View, dx: number, dy: number, consumed: native.Array<number>): void;
						public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
						public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
						public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback, type: number): globalAndroid.view.ActionMode;
						public notifySubtreeAccessibilityStateChanged(child: globalAndroid.view.View, source: globalAndroid.view.View, changeType: number): void;
						public setTrackNameProvider(trackNameProvider: com.google.android.exoplayer2.ui.TrackNameProvider): void;
						public getParent(): globalAndroid.view.ViewParent;
						public getLayoutDirection(): number;
						public canResolveTextAlignment(): boolean;
						public constructor(context: globalAndroid.content.Context);
						public onDescendantInvalidated(child: globalAndroid.view.View, target: globalAndroid.view.View): void;
					}
					export module TrackSelectionView {
						export class ComponentListener extends java.lang.Object implements globalAndroid.view.View.OnClickListener {
							public static class: java.lang.Class<com.google.android.exoplayer2.ui.TrackSelectionView.ComponentListener>;
							public onClick(view: globalAndroid.view.View): void;
						}
						export class TrackInfo extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.ui.TrackSelectionView.TrackInfo>;
							public groupIndex: number;
							public trackIndex: number;
							public format: com.google.android.exoplayer2.Format;
							public constructor(groupIndex: number, trackIndex: number, format: com.google.android.exoplayer2.Format);
						}
						export class TrackSelectionListener extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.ui.TrackSelectionView.TrackSelectionListener>;
							/**
							 * Constructs a new instance of the com.google.android.exoplayer2.ui.TrackSelectionView() when extending the interface class.
							 */
							public constructor(implementation: {
								onTrackSelectionChanged(boolean0: boolean, list1: java.util.List<com.google.android.exoplayer2.trackselection.DefaultTrackSelector.SelectionOverride>): void;
							});
							public constructor();
							public onTrackSelectionChanged(boolean0: boolean, list1: java.util.List<com.google.android.exoplayer2.trackselection.DefaultTrackSelector.SelectionOverride>): void;
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
				export module ui {
					export class WebViewSubtitleOutput extends globalAndroid.widget.FrameLayout implements com.google.android.exoplayer2.ui.SubtitleView.Output {
						public static class: java.lang.Class<com.google.android.exoplayer2.ui.WebViewSubtitleOutput>;
						public isLayoutRequested(): boolean;
						public bringChildToFront(child: globalAndroid.view.View): void;
						public childHasTransientStateChanged(child: globalAndroid.view.View, childHasTransientState: boolean): void;
						public canResolveLayoutDirection(): boolean;
						public onNestedPrePerformAccessibilityAction(target: globalAndroid.view.View, action: number, bundle2: globalAndroid.os.Bundle): boolean;
						public update(cues: java.util.List<com.google.android.exoplayer2.text.Cue>, style: com.google.android.exoplayer2.text.CaptionStyleCompat, textSize: number, textSizeType: number, bottomPaddingFraction: number): void;
						public destroy(): void;
						public requestTransparentRegion(child: globalAndroid.view.View): void;
						public updateViewLayout(view: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
						public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
						public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
						public isTextAlignmentResolved(): boolean;
						public onLayout(changed: boolean, left: number, top: number, right: number, bottom: number): void;
						public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
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
						public canResolveTextDirection(): boolean;
						public isLayoutDirectionResolved(): boolean;
						public onStartNestedScroll(child: globalAndroid.view.View, target: globalAndroid.view.View, nestedScrollAxes: number): boolean;
						public recomputeViewAttributes(child: globalAndroid.view.View): void;
						public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
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
						public onNestedFling(target: globalAndroid.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
						public addView(child: globalAndroid.view.View, index: number): void;
						public onNestedPreFling(target: globalAndroid.view.View, velocityX: number, velocityY: number): boolean;
						public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
						public focusSearch(focused: globalAndroid.view.View, direction: number): globalAndroid.view.View;
						public requestChildRectangleOnScreen(child: globalAndroid.view.View, rectangle: globalAndroid.graphics.Rect, immediate: boolean): boolean;
						public requestFitSystemWindows(): void;
						public getParentForAccessibility(): globalAndroid.view.ViewParent;
						public createContextMenu(menu: globalAndroid.view.ContextMenu): void;
						public focusSearch(direction: number): globalAndroid.view.View;
						public onStopNestedScroll(child: globalAndroid.view.View): void;
						public showContextMenuForChild(originalView: globalAndroid.view.View): boolean;
						public getTextAlignment(): number;
						public onNestedPreScroll(target: globalAndroid.view.View, dx: number, dy: number, consumed: native.Array<number>): void;
						public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
						public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
						public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback, type: number): globalAndroid.view.ActionMode;
						public notifySubtreeAccessibilityStateChanged(child: globalAndroid.view.View, source: globalAndroid.view.View, changeType: number): void;
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
	export module google {
		export module android {
			export module exoplayer2 {
				export module ui {
					export module spherical {
						export class OrientationListener extends java.lang.Object implements globalAndroid.hardware.SensorEventListener {
							public static class: java.lang.Class<com.google.android.exoplayer2.ui.spherical.OrientationListener>;
							public onAccuracyChanged(sensor: globalAndroid.hardware.Sensor, accuracy: number): void;
							public onSensorChanged(event: globalAndroid.hardware.SensorEvent): void;
							public constructor(display: globalAndroid.view.Display, listeners: native.Array<com.google.android.exoplayer2.ui.spherical.OrientationListener.Listener>);
						}
						export module OrientationListener {
							export class Listener extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.ui.spherical.OrientationListener.Listener>;
								/**
								 * Constructs a new instance of the com.google.android.exoplayer2.ui.spherical.OrientationListener() when extending the interface class.
								 */
								public constructor(implementation: {
									onOrientationChange(floats0: native.Array<number>, float1: number): void;
								});
								public constructor();
								public onOrientationChange(floats0: native.Array<number>, float1: number): void;
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
				export module ui {
					export module spherical {
						export class ProjectionRenderer extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.ui.spherical.ProjectionRenderer>;
							public setProjection(projection: com.google.android.exoplayer2.video.spherical.Projection): void;
							public static isSupported(projection: com.google.android.exoplayer2.video.spherical.Projection): boolean;
						}
						export module ProjectionRenderer {
							export class MeshData extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.ui.spherical.ProjectionRenderer.MeshData>;
								public constructor(subMesh: com.google.android.exoplayer2.video.spherical.Projection.SubMesh);
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
				export module ui {
					export module spherical {
						export class SceneRenderer extends java.lang.Object implements com.google.android.exoplayer2.video.VideoFrameMetadataListener, com.google.android.exoplayer2.video.spherical.CameraMotionListener {
							public static class: java.lang.Class<com.google.android.exoplayer2.ui.spherical.SceneRenderer>;
							public constructor();
							public init(): globalAndroid.graphics.SurfaceTexture;
							public onVideoFrameAboutToBeRendered(presentationTimeUs: number, releaseTimeNs: number, format: com.google.android.exoplayer2.Format, mediaFormat: globalAndroid.media.MediaFormat): void;
							public setDefaultStereoMode(stereoMode: number): void;
							public drawFrame(viewProjectionMatrix: native.Array<number>, rightEye: boolean): void;
							public onCameraMotion(timeUs: number, rotation: native.Array<number>): void;
							public shutdown(): void;
							public onCameraMotionReset(): void;
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
				export module ui {
					export module spherical {
						export class SingleTapListener extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.ui.spherical.SingleTapListener>;
							/**
							 * Constructs a new instance of the com.google.android.exoplayer2.ui.spherical.SingleTapListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onSingleTapUp(motionEvent0: globalAndroid.view.MotionEvent): boolean;
							});
							public constructor();
							public onSingleTapUp(motionEvent0: globalAndroid.view.MotionEvent): boolean;
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
				export module ui {
					export module spherical {
						export class SphericalGLSurfaceView extends globalAndroid.opengl.GLSurfaceView {
							public static class: java.lang.Class<com.google.android.exoplayer2.ui.spherical.SphericalGLSurfaceView>;
							public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
							public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
							public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
							public setUseSensorRotation(useSensorRotation: boolean): void;
							public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
							public onResume(): void;
							public sendAccessibilityEvent(eventType: number): void;
							public setSingleTapListener(listener: com.google.android.exoplayer2.ui.spherical.SingleTapListener): void;
							public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
							public constructor(context: globalAndroid.content.Context, attributeSet: globalAndroid.util.AttributeSet);
							public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
							public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
							public onDetachedFromWindow(): void;
							/** @deprecated */
							public surfaceRedrawNeeded(holder: globalAndroid.view.SurfaceHolder): void;
							public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
							public surfaceRedrawNeeded(holder: globalAndroid.view.SurfaceHolder): void;
							public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
							public setVideoComponent(newVideoComponent: com.google.android.exoplayer2.Player.VideoComponent): void;
							public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
							public surfaceRedrawNeededAsync(holder: globalAndroid.view.SurfaceHolder, drawingFinished: java.lang.Runnable): void;
							public onPause(): void;
							public surfaceRedrawNeededAsync(holder: globalAndroid.view.SurfaceHolder, finishDrawing: java.lang.Runnable): void;
							public setDefaultStereoMode(stereoMode: number): void;
							public constructor(context: globalAndroid.content.Context);
							public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
							public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
						}
						export module SphericalGLSurfaceView {
							export class Renderer extends java.lang.Object implements globalAndroid.opengl.GLSurfaceView.Renderer, com.google.android.exoplayer2.ui.spherical.TouchTracker.Listener, com.google.android.exoplayer2.ui.spherical.OrientationListener.Listener {
								public static class: java.lang.Class<com.google.android.exoplayer2.ui.spherical.SphericalGLSurfaceView.Renderer>;
								public onOrientationChange(matrix: native.Array<number>, deviceRoll: number): void;
								public constructor(this0: com.google.android.exoplayer2.ui.spherical.SphericalGLSurfaceView, scene: com.google.android.exoplayer2.ui.spherical.SceneRenderer);
								public onSurfaceChanged(gl: javax.microedition.khronos.opengles.GL10, width: number, height: number): void;
								public onScrollChange(scrollOffsetDegrees: globalAndroid.graphics.PointF): void;
								public onDrawFrame(gl: javax.microedition.khronos.opengles.GL10): void;
								public onSurfaceCreated(gl: javax.microedition.khronos.opengles.GL10, config: javax.microedition.khronos.egl.EGLConfig): void;
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
				export module ui {
					export module spherical {
						export class TouchTracker extends globalAndroid.view.GestureDetector.SimpleOnGestureListener implements globalAndroid.view.View.OnTouchListener, com.google.android.exoplayer2.ui.spherical.OrientationListener.Listener {
							public static class: java.lang.Class<com.google.android.exoplayer2.ui.spherical.TouchTracker>;
							public constructor();
							public onOrientationChange(deviceOrientationMatrix: native.Array<number>, roll: number): void;
							public onSingleTapConfirmed(e: globalAndroid.view.MotionEvent): boolean;
							public onScroll(e1: globalAndroid.view.MotionEvent, e2: globalAndroid.view.MotionEvent, distanceX: number, distanceY: number): boolean;
							public onDoubleTap(e: globalAndroid.view.MotionEvent): boolean;
							public onDoubleTapEvent(e: globalAndroid.view.MotionEvent): boolean;
							public onTouch(v: globalAndroid.view.View, event: globalAndroid.view.MotionEvent): boolean;
							public onFling(e1: globalAndroid.view.MotionEvent, e2: globalAndroid.view.MotionEvent, velocityX: number, velocityY: number): boolean;
							public setSingleTapListener(listener: com.google.android.exoplayer2.ui.spherical.SingleTapListener): void;
							public constructor(context: globalAndroid.content.Context, listener: com.google.android.exoplayer2.ui.spherical.TouchTracker.Listener, pxPerDegrees: number);
							public onContextClick(e: globalAndroid.view.MotionEvent): boolean;
							public onLongPress(e: globalAndroid.view.MotionEvent): void;
							public onShowPress(e: globalAndroid.view.MotionEvent): void;
							public onSingleTapUp(e: globalAndroid.view.MotionEvent): boolean;
							public onDown(e: globalAndroid.view.MotionEvent): boolean;
						}
						export module TouchTracker {
							export class Listener extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.ui.spherical.TouchTracker.Listener>;
								/**
								 * Constructs a new instance of the com.google.android.exoplayer2.ui.spherical.TouchTracker() when extending the interface class.
								 */
								public constructor(implementation: {
									onScrollChange(pointF0: globalAndroid.graphics.PointF): void;
								});
								public constructor();
								public onScrollChange(pointF0: globalAndroid.graphics.PointF): void;
							}
						}
					}
				}
			}
		}
	}
}


//Generics information:

