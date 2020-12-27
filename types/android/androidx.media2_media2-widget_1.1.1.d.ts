declare module androidx {
	export module media2 {
		export module widget {
			export class AnimatorUtil extends java.lang.Object {
				public static class: java.lang.Class<androidx.media2.widget.AnimatorUtil>;
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module widget {
			export class CaptionStyle extends java.lang.Object {
				public static class: java.lang.Class<androidx.media2.widget.CaptionStyle>;
				public static COLOR_UNSPECIFIED: number;
				public static DEFAULT: androidx.media2.widget.CaptionStyle;
				public static EDGE_TYPE_DEPRESSED: number;
				public static EDGE_TYPE_DROP_SHADOW: number;
				public static EDGE_TYPE_NONE: number;
				public static EDGE_TYPE_OUTLINE: number;
				public static EDGE_TYPE_RAISED: number;
				public static EDGE_TYPE_UNSPECIFIED: number;
				public backgroundColor: number;
				public edgeColor: number;
				public edgeType: number;
				public foregroundColor: number;
				public windowColor: number;
				public getTypeface(): globalAndroid.graphics.Typeface;
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module widget {
			export class Cea608CCParser extends java.lang.Object {
				public static class: java.lang.Class<androidx.media2.widget.Cea608CCParser>;
				public static MAX_COLS: number;
				public static MAX_ROWS: number;
				public parse(data: native.Array<number>): void;
			}
			export module Cea608CCParser {
				export class CCData extends java.lang.Object {
					public static class: java.lang.Class<androidx.media2.widget.Cea608CCParser.CCData>;
					public toString(): string;
				}
				export class CCLineBuilder extends java.lang.Object {
					public static class: java.lang.Class<androidx.media2.widget.Cea608CCParser.CCLineBuilder>;
				}
				export class CCMemory extends java.lang.Object {
					public static class: java.lang.Class<androidx.media2.widget.Cea608CCParser.CCMemory>;
				}
				export class DisplayListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.media2.widget.Cea608CCParser.DisplayListener>;
					/**
					 * Constructs a new instance of the androidx.media2.widget.Cea608CCParser$DisplayListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onDisplayChanged(spannableStringBuilders0: native.Array<globalAndroid.text.SpannableStringBuilder>): void;
						getCaptionStyle(): androidx.media2.widget.CaptionStyle;
					});
					public constructor();
					public onDisplayChanged(spannableStringBuilders0: native.Array<globalAndroid.text.SpannableStringBuilder>): void;
					public getCaptionStyle(): androidx.media2.widget.CaptionStyle;
				}
				export class MutableBackgroundColorSpan extends globalAndroid.text.style.CharacterStyle implements globalAndroid.text.style.UpdateAppearance {
					public static class: java.lang.Class<androidx.media2.widget.Cea608CCParser.MutableBackgroundColorSpan>;
					public setBackgroundColor(color: number): void;
					public getBackgroundColor(): number;
					public updateDrawState(ds: globalAndroid.text.TextPaint): void;
					public updateDrawState(textPaint0: globalAndroid.text.TextPaint): void;
				}
				export class PAC extends androidx.media2.widget.Cea608CCParser.StyleCode {
					public static class: java.lang.Class<androidx.media2.widget.Cea608CCParser.PAC>;
					public toString(): string;
				}
				export class StyleCode extends java.lang.Object {
					public static class: java.lang.Class<androidx.media2.widget.Cea608CCParser.StyleCode>;
					public toString(): string;
				}
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module widget {
			export class Cea608CaptionRenderer extends androidx.media2.widget.SubtitleController.Renderer {
				public static class: java.lang.Class<androidx.media2.widget.Cea608CaptionRenderer>;
				public supports(format: globalAndroid.media.MediaFormat): boolean;
				public supports(mediaFormat0: globalAndroid.media.MediaFormat): boolean;
				public createTrack(mediaFormat0: globalAndroid.media.MediaFormat): androidx.media2.widget.SubtitleTrack;
				public createTrack(format: globalAndroid.media.MediaFormat): androidx.media2.widget.SubtitleTrack;
			}
			export module Cea608CaptionRenderer {
				export class Cea608CCWidget extends androidx.media2.widget.ClosedCaptionWidget implements androidx.media2.widget.Cea608CCParser.DisplayListener {
					public static class: java.lang.Class<androidx.media2.widget.Cea608CaptionRenderer.Cea608CCWidget>;
					public showContextMenuForChild(originalView: globalAndroid.view.View, x: number, y: number): boolean;
					public createCaptionLayout(context: globalAndroid.content.Context): androidx.media2.widget.ClosedCaptionWidget.ClosedCaptionLayout;
					public requestTransparentRegion(child: globalAndroid.view.View): void;
					public childDrawableStateChanged(child: globalAndroid.view.View): void;
					public onNestedFling(target: globalAndroid.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
					public draw(canvas: globalAndroid.graphics.Canvas): void;
					public isLayoutRequested(): boolean;
					public onAttachedToWindow(): void;
					public onDisplayChanged(styledTexts: native.Array<globalAndroid.text.SpannableStringBuilder>): void;
					/** @deprecated */
					public invalidateChild(child: globalAndroid.view.View, dirty: globalAndroid.graphics.Rect): void;
					public setVisible(visible: boolean): void;
					public focusableViewAvailable(v: globalAndroid.view.View): void;
					public focusSearch(direction: number): globalAndroid.view.View;
					public isTextDirectionResolved(): boolean;
					public isLayoutDirectionResolved(): boolean;
					public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public showContextMenuForChild(originalView: globalAndroid.view.View): boolean;
					public setOnChangedListener(listener: androidx.media2.widget.SubtitleTrack.RenderingWidget.OnChangedListener): void;
					public onNestedScroll(target: globalAndroid.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
					public setSize(width: number, height: number): void;
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
					public getCaptionStyle(): androidx.media2.widget.CaptionStyle;
					public notifySubtreeAccessibilityStateChanged(child: globalAndroid.view.View, source: globalAndroid.view.View, changeType: number): void;
					public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
					public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public addView(child: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
					public createCaptionLayout(context0: globalAndroid.content.Context): androidx.media2.widget.ClosedCaptionWidget.ClosedCaptionLayout;
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
					/** @deprecated */
					public requestFitSystemWindows(): void;
					public addView(child: globalAndroid.view.View): void;
					public canResolveTextDirection(): boolean;
					public updateViewLayout(view: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
					public bringChildToFront(child: globalAndroid.view.View): void;
					public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
					public onNestedPreScroll(target: globalAndroid.view.View, dx: number, dy: number, consumed: native.Array<number>): void;
					public clearChildFocus(child: globalAndroid.view.View): void;
					public requestLayout(): void;
					public createContextMenu(menu: globalAndroid.view.ContextMenu): void;
					public getParentForAccessibility(): globalAndroid.view.ViewParent;
					public addView(child: globalAndroid.view.View, index: number, params: globalAndroid.view.ViewGroup.LayoutParams): void;
					public onDetachedFromWindow(): void;
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
				export module Cea608CCWidget {
					export class CCLayout extends globalAndroid.widget.LinearLayout implements androidx.media2.widget.ClosedCaptionWidget.ClosedCaptionLayout {
						public static class: java.lang.Class<androidx.media2.widget.Cea608CaptionRenderer.Cea608CCWidget.CCLayout>;
						public isLayoutRequested(): boolean;
						public bringChildToFront(child: globalAndroid.view.View): void;
						public childHasTransientStateChanged(child: globalAndroid.view.View, childHasTransientState: boolean): void;
						public canResolveLayoutDirection(): boolean;
						public onNestedPrePerformAccessibilityAction(target: globalAndroid.view.View, action: number, bundle2: globalAndroid.os.Bundle): boolean;
						public onLayout(changed: boolean, l: number, t: number, r: number, b: number): void;
						public requestTransparentRegion(child: globalAndroid.view.View): void;
						public updateViewLayout(view: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
						public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
						public setFontScale(fontScale: number): void;
						public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
						public isTextAlignmentResolved(): boolean;
						public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
						public onNestedScrollAccepted(child: globalAndroid.view.View, target: globalAndroid.view.View, axes: number): void;
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
						public setCaptionStyle(captionStyle: androidx.media2.widget.CaptionStyle): void;
						public getParent(): globalAndroid.view.ViewParent;
						public getLayoutDirection(): number;
						public canResolveTextAlignment(): boolean;
						public onDescendantInvalidated(child: globalAndroid.view.View, target: globalAndroid.view.View): void;
					}
					export class CCLineBox extends androidx.appcompat.widget.AppCompatTextView {
						public static class: java.lang.Class<androidx.media2.widget.Cea608CaptionRenderer.Cea608CCWidget.CCLineBox>;
						public getAutoSizeTextAvailableSizes(): native.Array<number>;
						public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
						public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
						public setSupportCompoundDrawablesTintList(tintList: globalAndroid.content.res.ColorStateList): void;
						public setSupportBackgroundTintList(tint: globalAndroid.content.res.ColorStateList): void;
						public getSupportCompoundDrawablesTintList(): globalAndroid.content.res.ColorStateList;
						public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
						public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
						public getSupportBackgroundTintMode(): globalAndroid.graphics.PorterDuff.Mode;
						public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
						public setSupportBackgroundTintMode(tintMode: globalAndroid.graphics.PorterDuff.Mode): void;
						public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
						public onDraw(c: globalAndroid.graphics.Canvas): void;
						public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
						public getSupportCompoundDrawablesTintMode(): globalAndroid.graphics.PorterDuff.Mode;
						public getAutoSizeStepGranularity(): number;
						public setAutoSizeTextTypeUniformWithPresetSizes(presetSizes: native.Array<number>, unit: number): void;
						public setAutoSizeTextTypeWithDefaults(autoSizeTextType: number): void;
						public getAutoSizeMinTextSize(): number;
						public getAutoSizeTextType(): number;
						public sendAccessibilityEvent(eventType: number): void;
						public getSupportBackgroundTintList(): globalAndroid.content.res.ColorStateList;
						public getAutoSizeMaxTextSize(): number;
						public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
						public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
						public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
						public setAutoSizeTextTypeUniformWithConfiguration(autoSizeMinTextSize: number, autoSizeMaxTextSize: number, autoSizeStepGranularity: number, unit: number): void;
						public onPreDraw(): boolean;
						public onDraw(canvas: globalAndroid.graphics.Canvas): void;
						public setSupportCompoundDrawablesTintMode(tintMode: globalAndroid.graphics.PorterDuff.Mode): void;
					}
				}
				export class Cea608CaptionTrack extends androidx.media2.widget.SubtitleTrack {
					public static class: java.lang.Class<androidx.media2.widget.Cea608CaptionRenderer.Cea608CaptionTrack>;
					public onSeek(timeUs: number): void;
					public onData(bytes0: native.Array<number>, boolean1: boolean, long2: number): void;
					public updateView(arrayList0: java.util.ArrayList<androidx.media2.widget.SubtitleTrack.Cue>): void;
					public onData(data: native.Array<number>, eos: boolean, runID: number): void;
					public updateView(activeCues: java.util.ArrayList<androidx.media2.widget.SubtitleTrack.Cue>): void;
					public onTimedEvent(timeUs: number): void;
					public onStop(): void;
					public onData(data: androidx.media2.common.SubtitleData): void;
					public getRenderingWidget(): androidx.media2.widget.SubtitleTrack.RenderingWidget;
				}
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module widget {
			export class Cea708CCParser extends java.lang.Object {
				public static class: java.lang.Class<androidx.media2.widget.Cea708CCParser>;
				public static CAPTION_EMIT_TYPE_BUFFER: number;
				public static CAPTION_EMIT_TYPE_COMMAND_CLW: number;
				public static CAPTION_EMIT_TYPE_COMMAND_CWX: number;
				public static CAPTION_EMIT_TYPE_COMMAND_DFX: number;
				public static CAPTION_EMIT_TYPE_COMMAND_DLC: number;
				public static CAPTION_EMIT_TYPE_COMMAND_DLW: number;
				public static CAPTION_EMIT_TYPE_COMMAND_DLY: number;
				public static CAPTION_EMIT_TYPE_COMMAND_DSW: number;
				public static CAPTION_EMIT_TYPE_COMMAND_HDW: number;
				public static CAPTION_EMIT_TYPE_COMMAND_RST: number;
				public static CAPTION_EMIT_TYPE_COMMAND_SPA: number;
				public static CAPTION_EMIT_TYPE_COMMAND_SPC: number;
				public static CAPTION_EMIT_TYPE_COMMAND_SPL: number;
				public static CAPTION_EMIT_TYPE_COMMAND_SWA: number;
				public static CAPTION_EMIT_TYPE_COMMAND_TGW: number;
				public static CAPTION_EMIT_TYPE_CONTROL: number;
				public parse(data: native.Array<number>): void;
			}
			export module Cea708CCParser {
				export class CaptionColor extends java.lang.Object {
					public static class: java.lang.Class<androidx.media2.widget.Cea708CCParser.CaptionColor>;
					public static OPACITY_FLASH: number;
					public static OPACITY_SOLID: number;
					public static OPACITY_TRANSLUCENT: number;
					public static OPACITY_TRANSPARENT: number;
					public blue: number;
					public green: number;
					public opacity: number;
					public red: number;
					public getArgbValue(): number;
				}
				export class CaptionEvent extends java.lang.Object {
					public static class: java.lang.Class<androidx.media2.widget.Cea708CCParser.CaptionEvent>;
					public obj: any;
					public type: number;
				}
				export class CaptionPenAttr extends java.lang.Object {
					public static class: java.lang.Class<androidx.media2.widget.Cea708CCParser.CaptionPenAttr>;
					public static OFFSET_NORMAL: number;
					public static OFFSET_SUBSCRIPT: number;
					public static OFFSET_SUPERSCRIPT: number;
					public static PEN_SIZE_LARGE: number;
					public static PEN_SIZE_SMALL: number;
					public static PEN_SIZE_STANDARD: number;
					public edgeType: number;
					public fontTag: number;
					public italic: boolean;
					public penOffset: number;
					public penSize: number;
					public textTag: number;
					public underline: boolean;
				}
				export class CaptionPenColor extends java.lang.Object {
					public static class: java.lang.Class<androidx.media2.widget.Cea708CCParser.CaptionPenColor>;
					public backgroundColor: androidx.media2.widget.Cea708CCParser.CaptionColor;
					public edgeColor: androidx.media2.widget.Cea708CCParser.CaptionColor;
					public foregroundColor: androidx.media2.widget.Cea708CCParser.CaptionColor;
				}
				export class CaptionPenLocation extends java.lang.Object {
					public static class: java.lang.Class<androidx.media2.widget.Cea708CCParser.CaptionPenLocation>;
					public column: number;
					public row: number;
				}
				export class CaptionWindow extends java.lang.Object {
					public static class: java.lang.Class<androidx.media2.widget.Cea708CCParser.CaptionWindow>;
					public anchorHorizontal: number;
					public anchorId: number;
					public anchorVertical: number;
					public columnCount: number;
					public columnLock: boolean;
					public id: number;
					public penStyle: number;
					public priority: number;
					public relativePositioning: boolean;
					public rowCount: number;
					public rowLock: boolean;
					public visible: boolean;
					public windowStyle: number;
				}
				export class CaptionWindowAttr extends java.lang.Object {
					public static class: java.lang.Class<androidx.media2.widget.Cea708CCParser.CaptionWindowAttr>;
					public borderColor: androidx.media2.widget.Cea708CCParser.CaptionColor;
					public borderType: number;
					public displayEffect: number;
					public effectDirection: number;
					public effectSpeed: number;
					public fillColor: androidx.media2.widget.Cea708CCParser.CaptionColor;
					public justify: number;
					public printDirection: number;
					public scrollDirection: number;
					public wordWrap: boolean;
				}
				export class Const extends java.lang.Object {
					public static class: java.lang.Class<androidx.media2.widget.Cea708CCParser.Const>;
					public static CODE_C0_BS: number;
					public static CODE_C0_CR: number;
					public static CODE_C0_ETX: number;
					public static CODE_C0_EXT1: number;
					public static CODE_C0_FF: number;
					public static CODE_C0_HCR: number;
					public static CODE_C0_NUL: number;
					public static CODE_C0_P16: number;
					public static CODE_C0_RANGE_END: number;
					public static CODE_C0_RANGE_START: number;
					public static CODE_C0_SKIP1_RANGE_END: number;
					public static CODE_C0_SKIP1_RANGE_START: number;
					public static CODE_C0_SKIP2_RANGE_END: number;
					public static CODE_C0_SKIP2_RANGE_START: number;
					public static CODE_C1_CLW: number;
					public static CODE_C1_CW0: number;
					public static CODE_C1_CW1: number;
					public static CODE_C1_CW2: number;
					public static CODE_C1_CW3: number;
					public static CODE_C1_CW4: number;
					public static CODE_C1_CW5: number;
					public static CODE_C1_CW6: number;
					public static CODE_C1_CW7: number;
					public static CODE_C1_DF0: number;
					public static CODE_C1_DF1: number;
					public static CODE_C1_DF2: number;
					public static CODE_C1_DF3: number;
					public static CODE_C1_DF4: number;
					public static CODE_C1_DF5: number;
					public static CODE_C1_DF6: number;
					public static CODE_C1_DF7: number;
					public static CODE_C1_DLC: number;
					public static CODE_C1_DLW: number;
					public static CODE_C1_DLY: number;
					public static CODE_C1_DSW: number;
					public static CODE_C1_HDW: number;
					public static CODE_C1_RANGE_END: number;
					public static CODE_C1_RANGE_START: number;
					public static CODE_C1_RST: number;
					public static CODE_C1_SPA: number;
					public static CODE_C1_SPC: number;
					public static CODE_C1_SPL: number;
					public static CODE_C1_SWA: number;
					public static CODE_C1_TGW: number;
					public static CODE_C2_RANGE_END: number;
					public static CODE_C2_RANGE_START: number;
					public static CODE_C2_SKIP0_RANGE_END: number;
					public static CODE_C2_SKIP0_RANGE_START: number;
					public static CODE_C2_SKIP1_RANGE_END: number;
					public static CODE_C2_SKIP1_RANGE_START: number;
					public static CODE_C2_SKIP2_RANGE_END: number;
					public static CODE_C2_SKIP2_RANGE_START: number;
					public static CODE_C2_SKIP3_RANGE_END: number;
					public static CODE_C2_SKIP3_RANGE_START: number;
					public static CODE_C3_RANGE_END: number;
					public static CODE_C3_RANGE_START: number;
					public static CODE_C3_SKIP4_RANGE_END: number;
					public static CODE_C3_SKIP4_RANGE_START: number;
					public static CODE_C3_SKIP5_RANGE_END: number;
					public static CODE_C3_SKIP5_RANGE_START: number;
					public static CODE_G0_MUSICNOTE: number;
					public static CODE_G0_RANGE_END: number;
					public static CODE_G0_RANGE_START: number;
					public static CODE_G1_RANGE_END: number;
					public static CODE_G1_RANGE_START: number;
					public static CODE_G2_BLK: number;
					public static CODE_G2_NBTSP: number;
					public static CODE_G2_RANGE_END: number;
					public static CODE_G2_RANGE_START: number;
					public static CODE_G2_TSP: number;
					public static CODE_G3_CC: number;
					public static CODE_G3_RANGE_END: number;
					public static CODE_G3_RANGE_START: number;
				}
				export class DisplayListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.media2.widget.Cea708CCParser.DisplayListener>;
					/**
					 * Constructs a new instance of the androidx.media2.widget.Cea708CCParser$DisplayListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						emitEvent(captionEvent0: androidx.media2.widget.Cea708CCParser.CaptionEvent): void;
					});
					public constructor();
					public emitEvent(captionEvent0: androidx.media2.widget.Cea708CCParser.CaptionEvent): void;
				}
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module widget {
			export class Cea708CaptionRenderer extends androidx.media2.widget.SubtitleController.Renderer {
				public static class: java.lang.Class<androidx.media2.widget.Cea708CaptionRenderer>;
				public supports(format: globalAndroid.media.MediaFormat): boolean;
				public supports(mediaFormat0: globalAndroid.media.MediaFormat): boolean;
				public createTrack(mediaFormat0: globalAndroid.media.MediaFormat): androidx.media2.widget.SubtitleTrack;
				public createTrack(format: globalAndroid.media.MediaFormat): androidx.media2.widget.SubtitleTrack;
			}
			export module Cea708CaptionRenderer {
				export class Cea708CCWidget extends androidx.media2.widget.ClosedCaptionWidget implements androidx.media2.widget.Cea708CCParser.DisplayListener {
					public static class: java.lang.Class<androidx.media2.widget.Cea708CaptionRenderer.Cea708CCWidget>;
					public showContextMenuForChild(originalView: globalAndroid.view.View, x: number, y: number): boolean;
					public createCaptionLayout(context: globalAndroid.content.Context): androidx.media2.widget.ClosedCaptionWidget.ClosedCaptionLayout;
					public requestTransparentRegion(child: globalAndroid.view.View): void;
					public childDrawableStateChanged(child: globalAndroid.view.View): void;
					public onNestedFling(target: globalAndroid.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
					public draw(canvas: globalAndroid.graphics.Canvas): void;
					public isLayoutRequested(): boolean;
					public onAttachedToWindow(): void;
					/** @deprecated */
					public invalidateChild(child: globalAndroid.view.View, dirty: globalAndroid.graphics.Rect): void;
					public setVisible(visible: boolean): void;
					public focusableViewAvailable(v: globalAndroid.view.View): void;
					public focusSearch(direction: number): globalAndroid.view.View;
					public isTextDirectionResolved(): boolean;
					public isLayoutDirectionResolved(): boolean;
					public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public showContextMenuForChild(originalView: globalAndroid.view.View): boolean;
					public setOnChangedListener(listener: androidx.media2.widget.SubtitleTrack.RenderingWidget.OnChangedListener): void;
					public onNestedScroll(target: globalAndroid.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
					public setSize(width: number, height: number): void;
					public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
					public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
					public requestSendAccessibilityEvent(child: globalAndroid.view.View, event: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
					public emitEvent(event: androidx.media2.widget.Cea708CCParser.CaptionEvent): void;
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
					public createCaptionLayout(context0: globalAndroid.content.Context): androidx.media2.widget.ClosedCaptionWidget.ClosedCaptionLayout;
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
					/** @deprecated */
					public requestFitSystemWindows(): void;
					public addView(child: globalAndroid.view.View): void;
					public canResolveTextDirection(): boolean;
					public updateViewLayout(view: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
					public bringChildToFront(child: globalAndroid.view.View): void;
					public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
					public onNestedPreScroll(target: globalAndroid.view.View, dx: number, dy: number, consumed: native.Array<number>): void;
					public clearChildFocus(child: globalAndroid.view.View): void;
					public requestLayout(): void;
					public createContextMenu(menu: globalAndroid.view.ContextMenu): void;
					public getParentForAccessibility(): globalAndroid.view.ViewParent;
					public addView(child: globalAndroid.view.View, index: number, params: globalAndroid.view.ViewGroup.LayoutParams): void;
					public onDetachedFromWindow(): void;
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
					public onDraw(canvas: globalAndroid.graphics.Canvas): void;
					public removeView(view: globalAndroid.view.View): void;
					public focusSearch(focused: globalAndroid.view.View, direction: number): globalAndroid.view.View;
				}
				export module Cea708CCWidget {
					export class CCHandler extends java.lang.Object implements globalAndroid.os.Handler.Callback {
						public static class: java.lang.Class<androidx.media2.widget.Cea708CaptionRenderer.Cea708CCWidget.CCHandler>;
						public processCaptionEvent(event: androidx.media2.widget.Cea708CCParser.CaptionEvent): void;
						public handleMessage(msg: globalAndroid.os.Message): boolean;
						public reset(): void;
					}
					export class CCLayout extends androidx.media2.widget.Cea708CaptionRenderer.Cea708CCWidget.ScaledLayout implements androidx.media2.widget.ClosedCaptionWidget.ClosedCaptionLayout {
						public static class: java.lang.Class<androidx.media2.widget.Cea708CaptionRenderer.Cea708CCWidget.CCLayout>;
						public isLayoutRequested(): boolean;
						public bringChildToFront(child: globalAndroid.view.View): void;
						public childHasTransientStateChanged(child: globalAndroid.view.View, childHasTransientState: boolean): void;
						public canResolveLayoutDirection(): boolean;
						public onNestedPrePerformAccessibilityAction(target: globalAndroid.view.View, action: number, bundle2: globalAndroid.os.Bundle): boolean;
						public setCaptionStyle(style: androidx.media2.widget.CaptionStyle): void;
						public requestTransparentRegion(child: globalAndroid.view.View): void;
						public addOrUpdateViewToSafeTitleArea(captionWindowLayout: androidx.media2.widget.Cea708CaptionRenderer.Cea708CCWidget.CCWindowLayout, scaledLayoutParams: androidx.media2.widget.Cea708CaptionRenderer.Cea708CCWidget.ScaledLayout.ScaledLayoutParams): void;
						public updateViewLayout(view: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
						public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
						public setFontScale(fontScale: number): void;
						public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
						public isTextAlignmentResolved(): boolean;
						public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
						public onNestedScrollAccepted(child: globalAndroid.view.View, target: globalAndroid.view.View, axes: number): void;
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
						public removeViewFromSafeTitleArea(captionWindowLayout: androidx.media2.widget.Cea708CaptionRenderer.Cea708CCWidget.CCWindowLayout): void;
						public getParent(): globalAndroid.view.ViewParent;
						public getLayoutDirection(): number;
						public canResolveTextAlignment(): boolean;
						public onDescendantInvalidated(child: globalAndroid.view.View, target: globalAndroid.view.View): void;
					}
					export class CCView extends androidx.media2.widget.SubtitleView {
						public static class: java.lang.Class<androidx.media2.widget.Cea708CaptionRenderer.Cea708CCWidget.CCView>;
						public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
						public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
						public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
						public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
						public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
						public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
						public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
						public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
						public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
						public sendAccessibilityEvent(eventType: number): void;
					}
					export class CCWindowLayout extends globalAndroid.widget.RelativeLayout implements globalAndroid.view.View.OnLayoutChangeListener {
						public static class: java.lang.Class<androidx.media2.widget.Cea708CaptionRenderer.Cea708CCWidget.CCWindowLayout>;
						public isLayoutRequested(): boolean;
						public bringChildToFront(child: globalAndroid.view.View): void;
						public childHasTransientStateChanged(child: globalAndroid.view.View, childHasTransientState: boolean): void;
						public canResolveLayoutDirection(): boolean;
						public getCaptionWindowId(): number;
						public onNestedPrePerformAccessibilityAction(target: globalAndroid.view.View, action: number, bundle2: globalAndroid.os.Bundle): boolean;
						public onLayoutChange(v: globalAndroid.view.View, left: number, top: number, right: number, bottom: number, oldLeft: number, oldTop: number, oldRight: number, oldBottom: number): void;
						public setCaptionStyle(style: androidx.media2.widget.CaptionStyle): void;
						public requestTransparentRegion(child: globalAndroid.view.View): void;
						public updateViewLayout(view: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
						public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
						public initWindow(ccLayout: androidx.media2.widget.Cea708CaptionRenderer.Cea708CCWidget.CCLayout, captionWindow: androidx.media2.widget.Cea708CCParser.CaptionWindow): void;
						public setFontScale(fontScale: number): void;
						public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
						public isTextAlignmentResolved(): boolean;
						public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
						public onNestedScrollAccepted(child: globalAndroid.view.View, target: globalAndroid.view.View, axes: number): void;
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
						public setPenLocation(row: number, column: number): void;
						public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
						public requestLayout(): void;
						public clearChildFocus(child: globalAndroid.view.View): void;
						public clear(): void;
						public removeFromCaptionView(): void;
						public keyboardNavigationClusterSearch(currentCluster: globalAndroid.view.View, direction: number): globalAndroid.view.View;
						public isTextDirectionResolved(): boolean;
						/** @deprecated */
						public invalidateChildInParent(location: native.Array<number>, dirty: globalAndroid.graphics.Rect): globalAndroid.view.ViewParent;
						public childDrawableStateChanged(child: globalAndroid.view.View): void;
						/** @deprecated */
						public requestFitSystemWindows(): void;
						public appendText(text: string): void;
						public removeView(view: globalAndroid.view.View): void;
						/** @deprecated */
						public invalidateChild(child: globalAndroid.view.View, dirty: globalAndroid.graphics.Rect): void;
						public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
						public showContextMenuForChild(originalView: globalAndroid.view.View, x: number, y: number): boolean;
						public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
						public requestSendAccessibilityEvent(child: globalAndroid.view.View, event: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
						public onNestedScroll(target: globalAndroid.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
						public addView(child: globalAndroid.view.View, width: number, height: number): void;
						public addView(child: globalAndroid.view.View, index: number, params: globalAndroid.view.ViewGroup.LayoutParams): void;
						public setCaptionWindowId(captionWindowId: number): void;
						public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
						public onNestedFling(target: globalAndroid.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
						public addView(child: globalAndroid.view.View, index: number): void;
						public setRowLimit(rowLimit: number): void;
						public onNestedPreFling(target: globalAndroid.view.View, velocityX: number, velocityY: number): boolean;
						public setPenAttr(penAttr: androidx.media2.widget.Cea708CCParser.CaptionPenAttr): void;
						public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
						public focusSearch(focused: globalAndroid.view.View, direction: number): globalAndroid.view.View;
						public setPenColor(penColor: androidx.media2.widget.Cea708CCParser.CaptionPenColor): void;
						public requestChildRectangleOnScreen(child: globalAndroid.view.View, rectangle: globalAndroid.graphics.Rect, immediate: boolean): boolean;
						public requestFitSystemWindows(): void;
						public getParentForAccessibility(): globalAndroid.view.ViewParent;
						public createContextMenu(menu: globalAndroid.view.ContextMenu): void;
						public clearText(): void;
						public focusSearch(direction: number): globalAndroid.view.View;
						public onStopNestedScroll(child: globalAndroid.view.View): void;
						public hide(): void;
						public setText(text: string): void;
						public showContextMenuForChild(originalView: globalAndroid.view.View): boolean;
						public sendBuffer(buffer: string): void;
						public sendControl(control: string): void;
						public setWindowAttr(windowAttr: androidx.media2.widget.Cea708CCParser.CaptionWindowAttr): void;
						public getTextAlignment(): number;
						public onNestedPreScroll(target: globalAndroid.view.View, dx: number, dy: number, consumed: native.Array<number>): void;
						public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
						public show(): void;
						public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
						public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback, type: number): globalAndroid.view.ActionMode;
						public notifySubtreeAccessibilityStateChanged(child: globalAndroid.view.View, source: globalAndroid.view.View, changeType: number): void;
						public getParent(): globalAndroid.view.ViewParent;
						public getLayoutDirection(): number;
						public canResolveTextAlignment(): boolean;
						public onDescendantInvalidated(child: globalAndroid.view.View, target: globalAndroid.view.View): void;
					}
					export class ScaledLayout extends globalAndroid.view.ViewGroup {
						public static class: java.lang.Class<androidx.media2.widget.Cea708CaptionRenderer.Cea708CCWidget.ScaledLayout>;
						public isLayoutRequested(): boolean;
						public bringChildToFront(child: globalAndroid.view.View): void;
						public childHasTransientStateChanged(child: globalAndroid.view.View, childHasTransientState: boolean): void;
						public canResolveLayoutDirection(): boolean;
						public onNestedPrePerformAccessibilityAction(target: globalAndroid.view.View, action: number, bundle2: globalAndroid.os.Bundle): boolean;
						public onLayout(changed: boolean, l: number, t: number, r: number, b: number): void;
						public requestTransparentRegion(child: globalAndroid.view.View): void;
						public updateViewLayout(view: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
						public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
						public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
						public generateLayoutParams(p: globalAndroid.view.ViewGroup.LayoutParams): globalAndroid.view.ViewGroup.LayoutParams;
						public isTextAlignmentResolved(): boolean;
						public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
						public onNestedScrollAccepted(child: globalAndroid.view.View, target: globalAndroid.view.View, axes: number): void;
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
						/** @deprecated */
						public invalidateChild(child: globalAndroid.view.View, dirty: globalAndroid.graphics.Rect): void;
						public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
						public showContextMenuForChild(originalView: globalAndroid.view.View, x: number, y: number): boolean;
						public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
						public onLayout(boolean0: boolean, int1: number, int2: number, int3: number, int4: number): void;
						public requestSendAccessibilityEvent(child: globalAndroid.view.View, event: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
						public onNestedScroll(target: globalAndroid.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
						public addView(child: globalAndroid.view.View, width: number, height: number): void;
						public addView(child: globalAndroid.view.View, index: number, params: globalAndroid.view.ViewGroup.LayoutParams): void;
						public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
						public onNestedFling(target: globalAndroid.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
						public addView(child: globalAndroid.view.View, index: number): void;
						public checkLayoutParams(p: globalAndroid.view.ViewGroup.LayoutParams): boolean;
						public onNestedPreFling(target: globalAndroid.view.View, velocityX: number, velocityY: number): boolean;
						public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
						public focusSearch(focused: globalAndroid.view.View, direction: number): globalAndroid.view.View;
						public dispatchDraw(canvas: globalAndroid.graphics.Canvas): void;
						public requestChildRectangleOnScreen(child: globalAndroid.view.View, rectangle: globalAndroid.graphics.Rect, immediate: boolean): boolean;
						public requestFitSystemWindows(): void;
						public generateLayoutParams(attrs: globalAndroid.util.AttributeSet): globalAndroid.view.ViewGroup.LayoutParams;
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
						public onDescendantInvalidated(child: globalAndroid.view.View, target: globalAndroid.view.View): void;
					}
					export module ScaledLayout {
						export class ScaledLayoutParams extends globalAndroid.view.ViewGroup.LayoutParams {
							public static class: java.lang.Class<androidx.media2.widget.Cea708CaptionRenderer.Cea708CCWidget.ScaledLayout.ScaledLayoutParams>;
							public static SCALE_UNSPECIFIED: number;
							public scaleEndCol: number;
							public scaleEndRow: number;
							public scaleStartCol: number;
							public scaleStartRow: number;
						}
					}
				}
				export class Cea708CaptionTrack extends androidx.media2.widget.SubtitleTrack {
					public static class: java.lang.Class<androidx.media2.widget.Cea708CaptionRenderer.Cea708CaptionTrack>;
					public onSeek(timeUs: number): void;
					public onData(bytes0: native.Array<number>, boolean1: boolean, long2: number): void;
					public updateView(arrayList0: java.util.ArrayList<androidx.media2.widget.SubtitleTrack.Cue>): void;
					public onData(data: native.Array<number>, eos: boolean, runID: number): void;
					public updateView(activeCues: java.util.ArrayList<androidx.media2.widget.SubtitleTrack.Cue>): void;
					public onTimedEvent(timeUs: number): void;
					public onStop(): void;
					public onData(data: androidx.media2.common.SubtitleData): void;
					public getRenderingWidget(): androidx.media2.widget.SubtitleTrack.RenderingWidget;
				}
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module widget {
			export abstract class ClosedCaptionWidget extends globalAndroid.view.ViewGroup implements androidx.media2.widget.SubtitleTrack.RenderingWidget {
				public static class: java.lang.Class<androidx.media2.widget.ClosedCaptionWidget>;
				public mCaptionStyle: androidx.media2.widget.CaptionStyle;
				public mClosedCaptionLayout: androidx.media2.widget.ClosedCaptionWidget.ClosedCaptionLayout;
				public mListener: androidx.media2.widget.SubtitleTrack.RenderingWidget.OnChangedListener;
				/** @deprecated */
				public invalidateChild(child: globalAndroid.view.View, dirty: globalAndroid.graphics.Rect): void;
				public focusSearch(direction: number): globalAndroid.view.View;
				public onNestedScrollAccepted(child: globalAndroid.view.View, target: globalAndroid.view.View, axes: number): void;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
				public childDrawableStateChanged(child: globalAndroid.view.View): void;
				public onStopNestedScroll(child: globalAndroid.view.View): void;
				public createCaptionLayout(context0: globalAndroid.content.Context): androidx.media2.widget.ClosedCaptionWidget.ClosedCaptionLayout;
				public isLayoutRequested(): boolean;
				public sendAccessibilityEvent(eventType: number): void;
				public setSize(width: number, height: number): void;
				public onNestedPrePerformAccessibilityAction(target: globalAndroid.view.View, action: number, bundle2: globalAndroid.os.Bundle): boolean;
				public addView(child: globalAndroid.view.View, index: number): void;
				public requestFitSystemWindows(): void;
				public getTextDirection(): number;
				public setVisible(visible: boolean): void;
				public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback, type: number): globalAndroid.view.ActionMode;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
				public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public getTextAlignment(): number;
				public onLayout(changed: boolean, l: number, t: number, r: number, b: number): void;
				/** @deprecated */
				public invalidateChildInParent(location: native.Array<number>, dirty: globalAndroid.graphics.Rect): globalAndroid.view.ViewParent;
				public getParentForAccessibility(): globalAndroid.view.ViewParent;
				public onNestedFling(target: globalAndroid.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
				public keyboardNavigationClusterSearch(currentCluster: globalAndroid.view.View, direction: number): globalAndroid.view.View;
				public addView(child: globalAndroid.view.View, width: number, height: number): void;
				public isTextDirectionResolved(): boolean;
				public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
				public childHasTransientStateChanged(child: globalAndroid.view.View, childHasTransientState: boolean): void;
				public onDetachedFromWindow(): void;
				public focusableViewAvailable(v: globalAndroid.view.View): void;
				public showContextMenuForChild(originalView: globalAndroid.view.View): boolean;
				public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public recomputeViewAttributes(child: globalAndroid.view.View): void;
				public addView(child: globalAndroid.view.View): void;
				public requestSendAccessibilityEvent(child: globalAndroid.view.View, event: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
				public isLayoutDirectionResolved(): boolean;
				public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
				public isTextAlignmentResolved(): boolean;
				public getLayoutDirection(): number;
				public addView(child: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onLayout(boolean0: boolean, int1: number, int2: number, int3: number, int4: number): void;
				public canResolveTextDirection(): boolean;
				public canResolveTextAlignment(): boolean;
				public notifySubtreeAccessibilityStateChanged(child: globalAndroid.view.View, source: globalAndroid.view.View, changeType: number): void;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
				public updateViewLayout(view: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public setOnChangedListener(listener: androidx.media2.widget.SubtitleTrack.RenderingWidget.OnChangedListener): void;
				public onNestedScroll(target: globalAndroid.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
				public requestLayout(): void;
				public focusSearch(focused: globalAndroid.view.View, direction: number): globalAndroid.view.View;
				public requestTransparentRegion(child: globalAndroid.view.View): void;
				public onStartNestedScroll(child: globalAndroid.view.View, target: globalAndroid.view.View, nestedScrollAxes: number): boolean;
				/** @deprecated */
				public requestFitSystemWindows(): void;
				public showContextMenuForChild(originalView: globalAndroid.view.View, x: number, y: number): boolean;
				public bringChildToFront(child: globalAndroid.view.View): void;
				public onNestedPreScroll(target: globalAndroid.view.View, dx: number, dy: number, consumed: native.Array<number>): void;
				public clearChildFocus(child: globalAndroid.view.View): void;
				public draw(canvas: globalAndroid.graphics.Canvas): void;
				public onDescendantInvalidated(child: globalAndroid.view.View, target: globalAndroid.view.View): void;
				public removeView(view: globalAndroid.view.View): void;
				public requestChildRectangleOnScreen(child: globalAndroid.view.View, rectangle: globalAndroid.graphics.Rect, immediate: boolean): boolean;
				public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public getChildVisibleRect(child: globalAndroid.view.View, r: globalAndroid.graphics.Rect, offset: globalAndroid.graphics.Point): boolean;
				public requestChildFocus(child: globalAndroid.view.View, focused: globalAndroid.view.View): void;
				public createContextMenu(menu: globalAndroid.view.ContextMenu): void;
				public canResolveLayoutDirection(): boolean;
				public addView(child: globalAndroid.view.View, index: number, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public onNestedPreFling(target: globalAndroid.view.View, velocityX: number, velocityY: number): boolean;
				public onAttachedToWindow(): void;
				public getParent(): globalAndroid.view.ViewParent;
			}
			export module ClosedCaptionWidget {
				export class ClosedCaptionLayout extends java.lang.Object {
					public static class: java.lang.Class<androidx.media2.widget.ClosedCaptionWidget.ClosedCaptionLayout>;
					/**
					 * Constructs a new instance of the androidx.media2.widget.ClosedCaptionWidget$ClosedCaptionLayout interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						setCaptionStyle(captionStyle0: androidx.media2.widget.CaptionStyle): void;
						setFontScale(float0: number): void;
					});
					public constructor();
					public setCaptionStyle(captionStyle0: androidx.media2.widget.CaptionStyle): void;
					public setFontScale(float0: number): void;
				}
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module widget {
			export class MediaControlView extends androidx.media2.widget.MediaViewGroup {
				public static class: java.lang.Class<androidx.media2.widget.MediaControlView>;
				/** @deprecated */
				public invalidateChild(child: globalAndroid.view.View, dirty: globalAndroid.graphics.Rect): void;
				public focusSearch(direction: number): globalAndroid.view.View;
				public constructor(context: globalAndroid.content.Context);
				public onNestedScrollAccepted(child: globalAndroid.view.View, target: globalAndroid.view.View, axes: number): void;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
				public childDrawableStateChanged(child: globalAndroid.view.View): void;
				public onStopNestedScroll(child: globalAndroid.view.View): void;
				public setOnFullScreenListener(listener: androidx.media2.widget.MediaControlView.OnFullScreenListener): void;
				public isLayoutRequested(): boolean;
				public sendAccessibilityEvent(eventType: number): void;
				public onNestedPrePerformAccessibilityAction(target: globalAndroid.view.View, action: number, bundle2: globalAndroid.os.Bundle): boolean;
				public addView(child: globalAndroid.view.View, index: number): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
				public requestFitSystemWindows(): void;
				public getTextDirection(): number;
				public onTrackballEvent(event: globalAndroid.view.MotionEvent): boolean;
				public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback, type: number): globalAndroid.view.ActionMode;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
				public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public getTextAlignment(): number;
				/** @deprecated */
				public invalidateChildInParent(location: native.Array<number>, dirty: globalAndroid.graphics.Rect): globalAndroid.view.ViewParent;
				public getParentForAccessibility(): globalAndroid.view.ViewParent;
				public onNestedFling(target: globalAndroid.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
				public keyboardNavigationClusterSearch(currentCluster: globalAndroid.view.View, direction: number): globalAndroid.view.View;
				public onLayout(changed: boolean, left: number, top: number, right: number, bottom: number): void;
				public addView(child: globalAndroid.view.View, width: number, height: number): void;
				public isTextDirectionResolved(): boolean;
				public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
				public childHasTransientStateChanged(child: globalAndroid.view.View, childHasTransientState: boolean): void;
				public onDetachedFromWindow(): void;
				public focusableViewAvailable(v: globalAndroid.view.View): void;
				public showContextMenuForChild(originalView: globalAndroid.view.View): boolean;
				public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public recomputeViewAttributes(child: globalAndroid.view.View): void;
				public addView(child: globalAndroid.view.View): void;
				public requestSendAccessibilityEvent(child: globalAndroid.view.View, event: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
				public isLayoutDirectionResolved(): boolean;
				public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
				public isTextAlignmentResolved(): boolean;
				public getLayoutDirection(): number;
				public addView(child: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onLayout(boolean0: boolean, int1: number, int2: number, int3: number, int4: number): void;
				public canResolveTextDirection(): boolean;
				public canResolveTextAlignment(): boolean;
				public notifySubtreeAccessibilityStateChanged(child: globalAndroid.view.View, source: globalAndroid.view.View, changeType: number): void;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
				public updateViewLayout(view: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public onNestedScroll(target: globalAndroid.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
				public requestLayout(): void;
				public focusSearch(focused: globalAndroid.view.View, direction: number): globalAndroid.view.View;
				public requestTransparentRegion(child: globalAndroid.view.View): void;
				public onStartNestedScroll(child: globalAndroid.view.View, target: globalAndroid.view.View, nestedScrollAxes: number): boolean;
				/** @deprecated */
				public requestFitSystemWindows(): void;
				public showContextMenuForChild(originalView: globalAndroid.view.View, x: number, y: number): boolean;
				public getAccessibilityClassName(): string;
				public bringChildToFront(child: globalAndroid.view.View): void;
				public onNestedPreScroll(target: globalAndroid.view.View, dx: number, dy: number, consumed: native.Array<number>): void;
				public clearChildFocus(child: globalAndroid.view.View): void;
				public onDescendantInvalidated(child: globalAndroid.view.View, target: globalAndroid.view.View): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public removeView(view: globalAndroid.view.View): void;
				public setMediaController(controller: androidx.media2.session.MediaController): void;
				public requestChildRectangleOnScreen(child: globalAndroid.view.View, rectangle: globalAndroid.graphics.Rect, immediate: boolean): boolean;
				public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public getChildVisibleRect(child: globalAndroid.view.View, r: globalAndroid.graphics.Rect, offset: globalAndroid.graphics.Point): boolean;
				public requestChildFocus(child: globalAndroid.view.View, focused: globalAndroid.view.View): void;
				public createContextMenu(menu: globalAndroid.view.ContextMenu): void;
				public onTouchEvent(ev: globalAndroid.view.MotionEvent): boolean;
				public requestPlayButtonFocus(): void;
				public canResolveLayoutDirection(): boolean;
				public onTrackballEvent(ev: globalAndroid.view.MotionEvent): boolean;
				public addView(child: globalAndroid.view.View, index: number, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public onTouchEvent(event: globalAndroid.view.MotionEvent): boolean;
				public onNestedPreFling(target: globalAndroid.view.View, velocityX: number, velocityY: number): boolean;
				public setPlayer(player: androidx.media2.common.SessionPlayer): void;
				public onAttachedToWindow(): void;
				public getParent(): globalAndroid.view.ViewParent;
			}
			export module MediaControlView {
				export class OnFullScreenListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.media2.widget.MediaControlView.OnFullScreenListener>;
					/**
					 * Constructs a new instance of the androidx.media2.widget.MediaControlView$OnFullScreenListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onFullScreen(view0: globalAndroid.view.View, boolean1: boolean): void;
					});
					public constructor();
					public onFullScreen(view0: globalAndroid.view.View, boolean1: boolean): void;
				}
				export class PlayerCallback extends androidx.media2.widget.PlayerWrapper.PlayerCallback {
					public static class: java.lang.Class<androidx.media2.widget.MediaControlView.PlayerCallback>;
					public onPlayerStateChanged(player: androidx.media2.widget.PlayerWrapper, state: number): void;
					public onAllowedCommandsChanged(player: androidx.media2.widget.PlayerWrapper, commands: androidx.media2.session.SessionCommandGroup): void;
					public onPlaybackCompleted(player: androidx.media2.widget.PlayerWrapper): void;
					public onSeekCompleted(player: androidx.media2.widget.PlayerWrapper, position: number): void;
					public onPlaybackSpeedChanged(player: androidx.media2.widget.PlayerWrapper, speed: number): void;
					public onCurrentMediaItemChanged(player: androidx.media2.widget.PlayerWrapper, mediaItem: androidx.media2.common.MediaItem): void;
				}
				export class SettingsAdapter extends globalAndroid.widget.BaseAdapter {
					public static class: java.lang.Class<androidx.media2.widget.MediaControlView.SettingsAdapter>;
					public getItem(position: number): any;
					public getCount(): number;
					public areAllItemsEnabled(): boolean;
					public isEnabled(position: number): boolean;
					public setSubTexts(subTexts: java.util.List<string>): void;
					public getView(position: number, convertView: globalAndroid.view.View, container: globalAndroid.view.ViewGroup): globalAndroid.view.View;
					public getItemId(position: number): number;
					public getDropDownView(position: number, convertView: globalAndroid.view.View, parent: globalAndroid.view.ViewGroup): globalAndroid.view.View;
				}
				export class SubSettingsAdapter extends globalAndroid.widget.BaseAdapter {
					public static class: java.lang.Class<androidx.media2.widget.MediaControlView.SubSettingsAdapter>;
					public setTexts(texts: java.util.List<string>): void;
					public getItem(position: number): any;
					public getMainText(position: number): string;
					public getCount(): number;
					public areAllItemsEnabled(): boolean;
					public isEnabled(position: number): boolean;
					public setCheckPosition(checkPosition: number): void;
					public getView(position: number, convertView: globalAndroid.view.View, container: globalAndroid.view.ViewGroup): globalAndroid.view.View;
					public getItemId(position: number): number;
					public getDropDownView(position: number, convertView: globalAndroid.view.View, parent: globalAndroid.view.ViewGroup): globalAndroid.view.View;
				}
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module widget {
			export class MediaTimeProvider extends java.lang.Object {
				public static class: java.lang.Class<androidx.media2.widget.MediaTimeProvider>;
				/**
				 * Constructs a new instance of the androidx.media2.widget.MediaTimeProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					notifyAt(long0: number, onMediaTimeListener1: androidx.media2.widget.MediaTimeProvider.OnMediaTimeListener): void;
					scheduleUpdate(onMediaTimeListener0: androidx.media2.widget.MediaTimeProvider.OnMediaTimeListener): void;
					cancelNotifications(onMediaTimeListener0: androidx.media2.widget.MediaTimeProvider.OnMediaTimeListener): void;
					getCurrentTimeUs(boolean0: boolean, boolean1: boolean): number;
				});
				public constructor();
				public static NO_TIME: number;
				public notifyAt(long0: number, onMediaTimeListener1: androidx.media2.widget.MediaTimeProvider.OnMediaTimeListener): void;
				public cancelNotifications(onMediaTimeListener0: androidx.media2.widget.MediaTimeProvider.OnMediaTimeListener): void;
				public scheduleUpdate(onMediaTimeListener0: androidx.media2.widget.MediaTimeProvider.OnMediaTimeListener): void;
				public getCurrentTimeUs(boolean0: boolean, boolean1: boolean): number;
			}
			export module MediaTimeProvider {
				export class OnMediaTimeListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.media2.widget.MediaTimeProvider.OnMediaTimeListener>;
					/**
					 * Constructs a new instance of the androidx.media2.widget.MediaTimeProvider$OnMediaTimeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onTimedEvent(long0: number): void;
						onSeek(long0: number): void;
						onStop(): void;
					});
					public constructor();
					public onTimedEvent(long0: number): void;
					public onStop(): void;
					public onSeek(long0: number): void;
				}
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module widget {
			export abstract class MediaViewGroup extends globalAndroid.view.ViewGroup {
				public static class: java.lang.Class<androidx.media2.widget.MediaViewGroup>;
				/** @deprecated */
				public invalidateChild(child: globalAndroid.view.View, dirty: globalAndroid.graphics.Rect): void;
				public focusSearch(direction: number): globalAndroid.view.View;
				public onNestedScrollAccepted(child: globalAndroid.view.View, target: globalAndroid.view.View, axes: number): void;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
				public childDrawableStateChanged(child: globalAndroid.view.View): void;
				public onStopNestedScroll(child: globalAndroid.view.View): void;
				public isLayoutRequested(): boolean;
				public sendAccessibilityEvent(eventType: number): void;
				public onNestedPrePerformAccessibilityAction(target: globalAndroid.view.View, action: number, bundle2: globalAndroid.os.Bundle): boolean;
				public addView(child: globalAndroid.view.View, index: number): void;
				public requestFitSystemWindows(): void;
				public getTextDirection(): number;
				public onWindowVisibilityChanged(visibility: number): void;
				public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback, type: number): globalAndroid.view.ActionMode;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
				public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public getTextAlignment(): number;
				/** @deprecated */
				public invalidateChildInParent(location: native.Array<number>, dirty: globalAndroid.graphics.Rect): globalAndroid.view.ViewParent;
				public getParentForAccessibility(): globalAndroid.view.ViewParent;
				public onNestedFling(target: globalAndroid.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
				public keyboardNavigationClusterSearch(currentCluster: globalAndroid.view.View, direction: number): globalAndroid.view.View;
				public addView(child: globalAndroid.view.View, width: number, height: number): void;
				public isTextDirectionResolved(): boolean;
				public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
				public childHasTransientStateChanged(child: globalAndroid.view.View, childHasTransientState: boolean): void;
				public focusableViewAvailable(v: globalAndroid.view.View): void;
				public showContextMenuForChild(originalView: globalAndroid.view.View): boolean;
				public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public recomputeViewAttributes(child: globalAndroid.view.View): void;
				public addView(child: globalAndroid.view.View): void;
				public requestSendAccessibilityEvent(child: globalAndroid.view.View, event: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
				public isLayoutDirectionResolved(): boolean;
				public isTextAlignmentResolved(): boolean;
				public getLayoutDirection(): number;
				public addView(child: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public canResolveTextDirection(): boolean;
				public canResolveTextAlignment(): boolean;
				public onVisibilityChanged(view: globalAndroid.view.View, visibility: number): void;
				public notifySubtreeAccessibilityStateChanged(child: globalAndroid.view.View, source: globalAndroid.view.View, changeType: number): void;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
				public onVisibilityAggregated(isVisible: boolean): void;
				public updateViewLayout(view: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public onNestedScroll(target: globalAndroid.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
				public requestLayout(): void;
				public focusSearch(focused: globalAndroid.view.View, direction: number): globalAndroid.view.View;
				public requestTransparentRegion(child: globalAndroid.view.View): void;
				public onStartNestedScroll(child: globalAndroid.view.View, target: globalAndroid.view.View, nestedScrollAxes: number): boolean;
				/** @deprecated */
				public requestFitSystemWindows(): void;
				public showContextMenuForChild(originalView: globalAndroid.view.View, x: number, y: number): boolean;
				public bringChildToFront(child: globalAndroid.view.View): void;
				public onNestedPreScroll(target: globalAndroid.view.View, dx: number, dy: number, consumed: native.Array<number>): void;
				public clearChildFocus(child: globalAndroid.view.View): void;
				public onDescendantInvalidated(child: globalAndroid.view.View, target: globalAndroid.view.View): void;
				public removeView(view: globalAndroid.view.View): void;
				public onVisibilityChanged(changedView: globalAndroid.view.View, visibility: number): void;
				public requestChildRectangleOnScreen(child: globalAndroid.view.View, rectangle: globalAndroid.graphics.Rect, immediate: boolean): boolean;
				public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public getChildVisibleRect(child: globalAndroid.view.View, r: globalAndroid.graphics.Rect, offset: globalAndroid.graphics.Point): boolean;
				public requestChildFocus(child: globalAndroid.view.View, focused: globalAndroid.view.View): void;
				public createContextMenu(menu: globalAndroid.view.ContextMenu): void;
				public canResolveLayoutDirection(): boolean;
				public addView(child: globalAndroid.view.View, index: number, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public onNestedPreFling(target: globalAndroid.view.View, velocityX: number, velocityY: number): boolean;
				public getParent(): globalAndroid.view.ViewParent;
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module widget {
			export class MusicView extends globalAndroid.view.ViewGroup {
				public static class: java.lang.Class<androidx.media2.widget.MusicView>;
				/** @deprecated */
				public invalidateChild(child: globalAndroid.view.View, dirty: globalAndroid.graphics.Rect): void;
				public focusSearch(direction: number): globalAndroid.view.View;
				public onNestedScrollAccepted(child: globalAndroid.view.View, target: globalAndroid.view.View, axes: number): void;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
				public childDrawableStateChanged(child: globalAndroid.view.View): void;
				public onStopNestedScroll(child: globalAndroid.view.View): void;
				public isLayoutRequested(): boolean;
				public sendAccessibilityEvent(eventType: number): void;
				public onNestedPrePerformAccessibilityAction(target: globalAndroid.view.View, action: number, bundle2: globalAndroid.os.Bundle): boolean;
				public addView(child: globalAndroid.view.View, index: number): void;
				public requestFitSystemWindows(): void;
				public getTextDirection(): number;
				public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback, type: number): globalAndroid.view.ActionMode;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
				public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public getTextAlignment(): number;
				/** @deprecated */
				public invalidateChildInParent(location: native.Array<number>, dirty: globalAndroid.graphics.Rect): globalAndroid.view.ViewParent;
				public getParentForAccessibility(): globalAndroid.view.ViewParent;
				public onNestedFling(target: globalAndroid.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
				public keyboardNavigationClusterSearch(currentCluster: globalAndroid.view.View, direction: number): globalAndroid.view.View;
				public onLayout(changed: boolean, left: number, top: number, right: number, bottom: number): void;
				public addView(child: globalAndroid.view.View, width: number, height: number): void;
				public isTextDirectionResolved(): boolean;
				public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
				public childHasTransientStateChanged(child: globalAndroid.view.View, childHasTransientState: boolean): void;
				public focusableViewAvailable(v: globalAndroid.view.View): void;
				public showContextMenuForChild(originalView: globalAndroid.view.View): boolean;
				public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public recomputeViewAttributes(child: globalAndroid.view.View): void;
				public addView(child: globalAndroid.view.View): void;
				public requestSendAccessibilityEvent(child: globalAndroid.view.View, event: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
				public isLayoutDirectionResolved(): boolean;
				public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
				public isTextAlignmentResolved(): boolean;
				public getLayoutDirection(): number;
				public addView(child: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onLayout(boolean0: boolean, int1: number, int2: number, int3: number, int4: number): void;
				public canResolveTextDirection(): boolean;
				public canResolveTextAlignment(): boolean;
				public notifySubtreeAccessibilityStateChanged(child: globalAndroid.view.View, source: globalAndroid.view.View, changeType: number): void;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
				public updateViewLayout(view: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public onNestedScroll(target: globalAndroid.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
				public requestLayout(): void;
				public focusSearch(focused: globalAndroid.view.View, direction: number): globalAndroid.view.View;
				public requestTransparentRegion(child: globalAndroid.view.View): void;
				public onStartNestedScroll(child: globalAndroid.view.View, target: globalAndroid.view.View, nestedScrollAxes: number): boolean;
				/** @deprecated */
				public requestFitSystemWindows(): void;
				public showContextMenuForChild(originalView: globalAndroid.view.View, x: number, y: number): boolean;
				public bringChildToFront(child: globalAndroid.view.View): void;
				public onNestedPreScroll(target: globalAndroid.view.View, dx: number, dy: number, consumed: native.Array<number>): void;
				public clearChildFocus(child: globalAndroid.view.View): void;
				public onDescendantInvalidated(child: globalAndroid.view.View, target: globalAndroid.view.View): void;
				public removeView(view: globalAndroid.view.View): void;
				public requestChildRectangleOnScreen(child: globalAndroid.view.View, rectangle: globalAndroid.graphics.Rect, immediate: boolean): boolean;
				public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public getChildVisibleRect(child: globalAndroid.view.View, r: globalAndroid.graphics.Rect, offset: globalAndroid.graphics.Point): boolean;
				public requestChildFocus(child: globalAndroid.view.View, focused: globalAndroid.view.View): void;
				public createContextMenu(menu: globalAndroid.view.ContextMenu): void;
				public canResolveLayoutDirection(): boolean;
				public addView(child: globalAndroid.view.View, index: number, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public onNestedPreFling(target: globalAndroid.view.View, velocityX: number, velocityY: number): boolean;
				public getParent(): globalAndroid.view.ViewParent;
			}
			export module MusicView {
				export class MusicViewType {
					public static class: java.lang.Class<androidx.media2.widget.MusicView.MusicViewType>;
					public static WITHOUT_TITLE: androidx.media2.widget.MusicView.MusicViewType;
					public static WITH_TITLE_LANDSCAPE: androidx.media2.widget.MusicView.MusicViewType;
					public static WITH_TITLE_PORTRAIT: androidx.media2.widget.MusicView.MusicViewType;
					public static values(): native.Array<androidx.media2.widget.MusicView.MusicViewType>;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static valueOf(name: string): androidx.media2.widget.MusicView.MusicViewType;
				}
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module widget {
			export class PlayerWrapper extends java.lang.Object {
				public static class: java.lang.Class<androidx.media2.widget.PlayerWrapper>;
			}
			export module PlayerWrapper {
				export class MediaControllerCallback extends androidx.media2.session.MediaController.ControllerCallback {
					public static class: java.lang.Class<androidx.media2.widget.PlayerWrapper.MediaControllerCallback>;
					public onVideoSizeChanged(controller: androidx.media2.session.MediaController, videoSize: androidx.media2.common.VideoSize): void;
					public onPlaybackSpeedChanged(controller: androidx.media2.session.MediaController, speed: number): void;
					public onTrackDeselected(controller: androidx.media2.session.MediaController, trackInfo: androidx.media2.common.SessionPlayer.TrackInfo): void;
					public onCurrentMediaItemChanged(controller: androidx.media2.session.MediaController, item: androidx.media2.common.MediaItem): void;
					public onTrackSelected(controller: androidx.media2.session.MediaController, trackInfo: androidx.media2.common.SessionPlayer.TrackInfo): void;
					public onAllowedCommandsChanged(controller: androidx.media2.session.MediaController, commands: androidx.media2.session.SessionCommandGroup): void;
					public onSubtitleData(controller: androidx.media2.session.MediaController, item: androidx.media2.common.MediaItem, track: androidx.media2.common.SessionPlayer.TrackInfo, data: androidx.media2.common.SubtitleData): void;
					public onTracksChanged(controller: androidx.media2.session.MediaController, tracks: java.util.List<androidx.media2.common.SessionPlayer.TrackInfo>): void;
					public onPlaylistChanged(controller: androidx.media2.session.MediaController, list: java.util.List<androidx.media2.common.MediaItem>, metadata: androidx.media2.common.MediaMetadata): void;
					public onConnected(controller: androidx.media2.session.MediaController, allowedCommands: androidx.media2.session.SessionCommandGroup): void;
					public onPlaybackCompleted(controller: androidx.media2.session.MediaController): void;
					/** @deprecated */
					public onVideoSizeChanged(controller: androidx.media2.session.MediaController, item: androidx.media2.common.MediaItem, videoSize: androidx.media2.common.VideoSize): void;
					public onPlayerStateChanged(controller: androidx.media2.session.MediaController, state: number): void;
					public onSeekCompleted(controller: androidx.media2.session.MediaController, position: number): void;
				}
				export abstract class PlayerCallback extends java.lang.Object {
					public static class: java.lang.Class<androidx.media2.widget.PlayerWrapper.PlayerCallback>;
				}
				export class SessionPlayerCallback extends androidx.media2.common.SessionPlayer.PlayerCallback {
					public static class: java.lang.Class<androidx.media2.widget.PlayerWrapper.SessionPlayerCallback>;
					public onTrackSelected(player: androidx.media2.common.SessionPlayer, trackInfo: androidx.media2.common.SessionPlayer.TrackInfo): void;
					public onPlaylistChanged(player: androidx.media2.common.SessionPlayer, list: java.util.List<androidx.media2.common.MediaItem>, metadata: androidx.media2.common.MediaMetadata): void;
					public onSeekCompleted(player: androidx.media2.common.SessionPlayer, position: number): void;
					public onCurrentMediaItemChanged(player: androidx.media2.common.SessionPlayer, item: androidx.media2.common.MediaItem): void;
					public onPlayerStateChanged(player: androidx.media2.common.SessionPlayer, playerState: number): void;
					public onPlaybackSpeedChanged(player: androidx.media2.common.SessionPlayer, playbackSpeed: number): void;
					public onPlaybackCompleted(player: androidx.media2.common.SessionPlayer): void;
					public onSubtitleData(player: androidx.media2.common.SessionPlayer, item: androidx.media2.common.MediaItem, track: androidx.media2.common.SessionPlayer.TrackInfo, data: androidx.media2.common.SubtitleData): void;
					public onTrackDeselected(player: androidx.media2.common.SessionPlayer, trackInfo: androidx.media2.common.SessionPlayer.TrackInfo): void;
					public onTracksChanged(player: androidx.media2.common.SessionPlayer, tracks: java.util.List<androidx.media2.common.SessionPlayer.TrackInfo>): void;
					public onVideoSizeChanged(player: androidx.media2.common.SessionPlayer, size: androidx.media2.common.VideoSize): void;
				}
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module widget {
			export class SelectiveLayout extends androidx.media2.widget.MediaViewGroup {
				public static class: java.lang.Class<androidx.media2.widget.SelectiveLayout>;
				/** @deprecated */
				public invalidateChild(child: globalAndroid.view.View, dirty: globalAndroid.graphics.Rect): void;
				public focusSearch(direction: number): globalAndroid.view.View;
				public checkLayoutParams(p: globalAndroid.view.ViewGroup.LayoutParams): boolean;
				public onNestedScrollAccepted(child: globalAndroid.view.View, target: globalAndroid.view.View, axes: number): void;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
				public childDrawableStateChanged(child: globalAndroid.view.View): void;
				public onStopNestedScroll(child: globalAndroid.view.View): void;
				public isLayoutRequested(): boolean;
				public sendAccessibilityEvent(eventType: number): void;
				public onNestedPrePerformAccessibilityAction(target: globalAndroid.view.View, action: number, bundle2: globalAndroid.os.Bundle): boolean;
				public addView(child: globalAndroid.view.View, index: number): void;
				public requestFitSystemWindows(): void;
				public getTextDirection(): number;
				public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback, type: number): globalAndroid.view.ActionMode;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
				public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public getTextAlignment(): number;
				/** @deprecated */
				public invalidateChildInParent(location: native.Array<number>, dirty: globalAndroid.graphics.Rect): globalAndroid.view.ViewParent;
				public getParentForAccessibility(): globalAndroid.view.ViewParent;
				public onNestedFling(target: globalAndroid.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
				public generateLayoutParams(p: globalAndroid.view.ViewGroup.LayoutParams): globalAndroid.view.ViewGroup.LayoutParams;
				public generateLayoutParams(attrs: globalAndroid.util.AttributeSet): globalAndroid.view.ViewGroup.LayoutParams;
				public keyboardNavigationClusterSearch(currentCluster: globalAndroid.view.View, direction: number): globalAndroid.view.View;
				public onLayout(changed: boolean, left: number, top: number, right: number, bottom: number): void;
				public addView(child: globalAndroid.view.View, width: number, height: number): void;
				public isTextDirectionResolved(): boolean;
				public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
				public childHasTransientStateChanged(child: globalAndroid.view.View, childHasTransientState: boolean): void;
				public focusableViewAvailable(v: globalAndroid.view.View): void;
				public showContextMenuForChild(originalView: globalAndroid.view.View): boolean;
				public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public generateDefaultLayoutParams(): globalAndroid.view.ViewGroup.LayoutParams;
				public recomputeViewAttributes(child: globalAndroid.view.View): void;
				public generateLayoutParams(lp: globalAndroid.view.ViewGroup.LayoutParams): globalAndroid.view.ViewGroup.LayoutParams;
				public addView(child: globalAndroid.view.View): void;
				public requestSendAccessibilityEvent(child: globalAndroid.view.View, event: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
				public isLayoutDirectionResolved(): boolean;
				public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
				public isTextAlignmentResolved(): boolean;
				public getLayoutDirection(): number;
				public addView(child: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onLayout(boolean0: boolean, int1: number, int2: number, int3: number, int4: number): void;
				public canResolveTextDirection(): boolean;
				public canResolveTextAlignment(): boolean;
				public notifySubtreeAccessibilityStateChanged(child: globalAndroid.view.View, source: globalAndroid.view.View, changeType: number): void;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
				public updateViewLayout(view: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public onNestedScroll(target: globalAndroid.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
				public requestLayout(): void;
				public focusSearch(focused: globalAndroid.view.View, direction: number): globalAndroid.view.View;
				public requestTransparentRegion(child: globalAndroid.view.View): void;
				public onStartNestedScroll(child: globalAndroid.view.View, target: globalAndroid.view.View, nestedScrollAxes: number): boolean;
				/** @deprecated */
				public requestFitSystemWindows(): void;
				public showContextMenuForChild(originalView: globalAndroid.view.View, x: number, y: number): boolean;
				public bringChildToFront(child: globalAndroid.view.View): void;
				public onNestedPreScroll(target: globalAndroid.view.View, dx: number, dy: number, consumed: native.Array<number>): void;
				public clearChildFocus(child: globalAndroid.view.View): void;
				public onDescendantInvalidated(child: globalAndroid.view.View, target: globalAndroid.view.View): void;
				public removeView(view: globalAndroid.view.View): void;
				public requestChildRectangleOnScreen(child: globalAndroid.view.View, rectangle: globalAndroid.graphics.Rect, immediate: boolean): boolean;
				public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public getChildVisibleRect(child: globalAndroid.view.View, r: globalAndroid.graphics.Rect, offset: globalAndroid.graphics.Point): boolean;
				public requestChildFocus(child: globalAndroid.view.View, focused: globalAndroid.view.View): void;
				public createContextMenu(menu: globalAndroid.view.ContextMenu): void;
				public canResolveLayoutDirection(): boolean;
				public addView(child: globalAndroid.view.View, index: number, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public onNestedPreFling(target: globalAndroid.view.View, velocityX: number, velocityY: number): boolean;
				public getParent(): globalAndroid.view.ViewParent;
				public shouldDelayChildPressedState(): boolean;
			}
			export module SelectiveLayout {
				export class LayoutParams extends globalAndroid.view.ViewGroup.LayoutParams {
					public static class: java.lang.Class<androidx.media2.widget.SelectiveLayout.LayoutParams>;
					public forceMatchParent: boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module widget {
			export class SubtitleAnchorView extends globalAndroid.view.View implements androidx.media2.widget.SubtitleController.Anchor {
				public static class: java.lang.Class<androidx.media2.widget.SubtitleAnchorView>;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
				public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
				public onLayout(changed: boolean, left: number, top: number, right: number, bottom: number): void;
				public sendAccessibilityEvent(eventType: number): void;
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public onDetachedFromWindow(): void;
				public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public getSubtitleLooper(): globalAndroid.os.Looper;
				public onAttachedToWindow(): void;
				public getAccessibilityClassName(): string;
				public onDraw(canvas: globalAndroid.graphics.Canvas): void;
				public setSubtitleWidget(subtitleWidget: androidx.media2.widget.SubtitleTrack.RenderingWidget): void;
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module widget {
			export class SubtitleController extends java.lang.Object {
				public static class: java.lang.Class<androidx.media2.widget.SubtitleController>;
				public getSelectedTrack(): androidx.media2.widget.SubtitleTrack;
				public finalize(): void;
				public setAnchor(anchor: androidx.media2.widget.SubtitleController.Anchor): void;
				public hasRendererFor(format: globalAndroid.media.MediaFormat): boolean;
				public selectTrack(track: androidx.media2.widget.SubtitleTrack): boolean;
				public registerRenderer(renderer: androidx.media2.widget.SubtitleController.Renderer): void;
				public show(): void;
				public addTrack(format: globalAndroid.media.MediaFormat): androidx.media2.widget.SubtitleTrack;
				public hide(): void;
				public reset(): void;
				public getDefaultTrack(): androidx.media2.widget.SubtitleTrack;
				public getTracks(): native.Array<androidx.media2.widget.SubtitleTrack>;
				public selectDefaultTrack(): void;
			}
			export module SubtitleController {
				export class Anchor extends java.lang.Object {
					public static class: java.lang.Class<androidx.media2.widget.SubtitleController.Anchor>;
					/**
					 * Constructs a new instance of the androidx.media2.widget.SubtitleController$Anchor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						setSubtitleWidget(renderingWidget0: androidx.media2.widget.SubtitleTrack.RenderingWidget): void;
						getSubtitleLooper(): globalAndroid.os.Looper;
					});
					public constructor();
					public getSubtitleLooper(): globalAndroid.os.Looper;
					public setSubtitleWidget(renderingWidget0: androidx.media2.widget.SubtitleTrack.RenderingWidget): void;
				}
				export class Listener extends java.lang.Object {
					public static class: java.lang.Class<androidx.media2.widget.SubtitleController.Listener>;
					/**
					 * Constructs a new instance of the androidx.media2.widget.SubtitleController$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onSubtitleTrackSelected(subtitleTrack0: androidx.media2.widget.SubtitleTrack): void;
					});
					public constructor();
					public onSubtitleTrackSelected(subtitleTrack0: androidx.media2.widget.SubtitleTrack): void;
				}
				export class MediaFormatUtil extends java.lang.Object {
					public static class: java.lang.Class<androidx.media2.widget.SubtitleController.MediaFormatUtil>;
				}
				export abstract class Renderer extends java.lang.Object {
					public static class: java.lang.Class<androidx.media2.widget.SubtitleController.Renderer>;
					public constructor();
					public createTrack(mediaFormat0: globalAndroid.media.MediaFormat): androidx.media2.widget.SubtitleTrack;
					public supports(mediaFormat0: globalAndroid.media.MediaFormat): boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module widget {
			export abstract class SubtitleTrack extends java.lang.Object implements androidx.media2.widget.MediaTimeProvider.OnMediaTimeListener {
				public static class: java.lang.Class<androidx.media2.widget.SubtitleTrack>;
				public DEBUG: boolean;
				public mHandler: globalAndroid.os.Handler;
				public mTimeProvider: androidx.media2.widget.MediaTimeProvider;
				public mVisible: boolean;
				public updateView(arrayList0: java.util.ArrayList<androidx.media2.widget.SubtitleTrack.Cue>): void;
				public getRenderingWidget(): androidx.media2.widget.SubtitleTrack.RenderingWidget;
				public finalize(): void;
				public addCue(cue: androidx.media2.widget.SubtitleTrack.Cue): boolean;
				public onSeek(timeUs: number): void;
				public onData(bytes0: native.Array<number>, boolean1: boolean, long2: number): void;
				public setTimeProvider(timeProvider: androidx.media2.widget.MediaTimeProvider): void;
				public getFormat(): globalAndroid.media.MediaFormat;
				public setRunDiscardTimeMs(runID: number, timeMs: number): void;
				public show(): void;
				public scheduleTimedEvents(): void;
				public hide(): void;
				public getTrackType(): number;
				public onData(data: androidx.media2.common.SubtitleData): void;
				public updateActiveCues(rebuild: boolean, timeMs: number): void;
				public onTimedEvent(timeUs: number): void;
				public onStop(): void;
				public finishedRun(runID: number): void;
				public clearActiveCues(): void;
			}
			export module SubtitleTrack {
				export class Cue extends java.lang.Object {
					public static class: java.lang.Class<androidx.media2.widget.SubtitleTrack.Cue>;
					public mEndTimeMs: number;
					public mInnerTimesMs: native.Array<number>;
					public mNextInRun: androidx.media2.widget.SubtitleTrack.Cue;
					public mRunID: number;
					public mStartTimeMs: number;
					public constructor();
					public onTime(timeMs: number): void;
				}
				export class CueList extends java.lang.Object {
					public static class: java.lang.Class<androidx.media2.widget.SubtitleTrack.CueList>;
					public DEBUG: boolean;
					public remove(cue: androidx.media2.widget.SubtitleTrack.Cue): void;
					public entriesBetween(lastTimeMs: number, timeMs: number): java.lang.Iterable<globalAndroid.util.Pair<java.lang.Long,androidx.media2.widget.SubtitleTrack.Cue>>;
					public nextTimeAfter(timeMs: number): number;
					public add(cue: androidx.media2.widget.SubtitleTrack.Cue): void;
				}
				export module CueList {
					export class EntryIterator extends java.util.Iterator<globalAndroid.util.Pair<java.lang.Long,androidx.media2.widget.SubtitleTrack.Cue>> {
						public static class: java.lang.Class<androidx.media2.widget.SubtitleTrack.CueList.EntryIterator>;
						public hasNext(): boolean;
						public next(): globalAndroid.util.Pair<java.lang.Long,androidx.media2.widget.SubtitleTrack.Cue>;
						public remove(): void;
					}
				}
				export class RenderingWidget extends java.lang.Object {
					public static class: java.lang.Class<androidx.media2.widget.SubtitleTrack.RenderingWidget>;
					/**
					 * Constructs a new instance of the androidx.media2.widget.SubtitleTrack$RenderingWidget interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						setOnChangedListener(onChangedListener0: androidx.media2.widget.SubtitleTrack.RenderingWidget.OnChangedListener): void;
						setSize(int0: number, int1: number): void;
						setVisible(boolean0: boolean): void;
						draw(canvas0: globalAndroid.graphics.Canvas): void;
						onAttachedToWindow(): void;
						onDetachedFromWindow(): void;
					});
					public constructor();
					public onDetachedFromWindow(): void;
					public setVisible(boolean0: boolean): void;
					public setOnChangedListener(onChangedListener0: androidx.media2.widget.SubtitleTrack.RenderingWidget.OnChangedListener): void;
					public setSize(int0: number, int1: number): void;
					public draw(canvas0: globalAndroid.graphics.Canvas): void;
					public onAttachedToWindow(): void;
				}
				export module RenderingWidget {
					export class OnChangedListener extends java.lang.Object {
						public static class: java.lang.Class<androidx.media2.widget.SubtitleTrack.RenderingWidget.OnChangedListener>;
						/**
						 * Constructs a new instance of the androidx.media2.widget.SubtitleTrack$RenderingWidget$OnChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onChanged(renderingWidget0: androidx.media2.widget.SubtitleTrack.RenderingWidget): void;
						});
						public constructor();
						public onChanged(renderingWidget0: androidx.media2.widget.SubtitleTrack.RenderingWidget): void;
					}
				}
				export class Run extends java.lang.Object {
					public static class: java.lang.Class<androidx.media2.widget.SubtitleTrack.Run>;
					public mEndTimeMs: number;
					public mFirstCue: androidx.media2.widget.SubtitleTrack.Cue;
					public mNextRunAtEndTimeMs: androidx.media2.widget.SubtitleTrack.Run;
					public mPrevRunAtEndTimeMs: androidx.media2.widget.SubtitleTrack.Run;
					public mRunID: number;
					public removeAtEndTimeMs(): void;
					public storeByEndTimeMs(runsByEndTime: globalAndroid.util.LongSparseArray<androidx.media2.widget.SubtitleTrack.Run>): void;
				}
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module widget {
			export class SubtitleView extends globalAndroid.view.View {
				public static class: java.lang.Class<androidx.media2.widget.SubtitleView>;
				public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public setEdgeType(edgeType: number): void;
				public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public onLayout(changed: boolean, l: number, t: number, r: number, b: number): void;
				public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
				public setAlignment(textAlignment: globalAndroid.text.Layout.Alignment): void;
				public setTextSize(size: number): void;
				public setBackgroundColor(color: number): void;
				public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
				public onLayout(changed: boolean, left: number, top: number, right: number, bottom: number): void;
				public setText(resId: number): void;
				public sendAccessibilityEvent(eventType: number): void;
				public setTypeface(typeface: globalAndroid.graphics.Typeface): void;
				public onDraw(c: globalAndroid.graphics.Canvas): void;
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public setForegroundColor(color: number): void;
				public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public setText(text: string): void;
				public onDraw(canvas: globalAndroid.graphics.Canvas): void;
				public setEdgeColor(color: number): void;
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module widget {
			export class UriUtil extends java.lang.Object {
				public static class: java.lang.Class<androidx.media2.widget.UriUtil>;
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module widget {
			export class VideoSurfaceView extends globalAndroid.view.SurfaceView implements androidx.media2.widget.VideoViewInterface, globalAndroid.view.SurfaceHolder.Callback {
				public static class: java.lang.Class<androidx.media2.widget.VideoSurfaceView>;
				public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public assignSurfaceToPlayerWrapper(player: androidx.media2.widget.PlayerWrapper): boolean;
				public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
				public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public surfaceCreated(holder: globalAndroid.view.SurfaceHolder): void;
				public setSurfaceListener(l: androidx.media2.widget.VideoViewInterface.SurfaceListener): void;
				public surfaceChanged(holder: globalAndroid.view.SurfaceHolder, format: number, width: number, height: number): void;
				public hasAvailableSurface(): boolean;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
				public sendAccessibilityEvent(eventType: number): void;
				public getViewType(): number;
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public surfaceDestroyed(holder: globalAndroid.view.SurfaceHolder): void;
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module widget {
			export class VideoTextureView extends globalAndroid.view.TextureView implements androidx.media2.widget.VideoViewInterface, globalAndroid.view.TextureView.SurfaceTextureListener {
				public static class: java.lang.Class<androidx.media2.widget.VideoTextureView>;
				public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public assignSurfaceToPlayerWrapper(player: androidx.media2.widget.PlayerWrapper): boolean;
				public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
				public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public onSurfaceTextureUpdated(surface: globalAndroid.graphics.SurfaceTexture): void;
				public setSurfaceListener(l: androidx.media2.widget.VideoViewInterface.SurfaceListener): void;
				public hasAvailableSurface(): boolean;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
				public sendAccessibilityEvent(eventType: number): void;
				public getViewType(): number;
				public onSurfaceTextureAvailable(surfaceTexture: globalAndroid.graphics.SurfaceTexture, width: number, height: number): void;
				public onSurfaceTextureDestroyed(surfaceTexture: globalAndroid.graphics.SurfaceTexture): boolean;
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public onSurfaceTextureSizeChanged(surfaceTexture: globalAndroid.graphics.SurfaceTexture, width: number, height: number): void;
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module widget {
			export class VideoView extends androidx.media2.widget.SelectiveLayout {
				public static class: java.lang.Class<androidx.media2.widget.VideoView>;
				public static VIEW_TYPE_SURFACEVIEW: number;
				public static VIEW_TYPE_TEXTUREVIEW: number;
				/** @deprecated */
				public invalidateChild(child: globalAndroid.view.View, dirty: globalAndroid.graphics.Rect): void;
				public setViewType(viewType: number): void;
				public focusSearch(direction: number): globalAndroid.view.View;
				public constructor(context: globalAndroid.content.Context);
				public onNestedScrollAccepted(child: globalAndroid.view.View, target: globalAndroid.view.View, axes: number): void;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
				public childDrawableStateChanged(child: globalAndroid.view.View): void;
				public onStopNestedScroll(child: globalAndroid.view.View): void;
				public isLayoutRequested(): boolean;
				public sendAccessibilityEvent(eventType: number): void;
				public onNestedPrePerformAccessibilityAction(target: globalAndroid.view.View, action: number, bundle2: globalAndroid.os.Bundle): boolean;
				public getMediaControlView(): androidx.media2.widget.MediaControlView;
				public addView(child: globalAndroid.view.View, index: number): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
				public requestFitSystemWindows(): void;
				public getTextDirection(): number;
				public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback, type: number): globalAndroid.view.ActionMode;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
				public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public getTextAlignment(): number;
				/** @deprecated */
				public invalidateChildInParent(location: native.Array<number>, dirty: globalAndroid.graphics.Rect): globalAndroid.view.ViewParent;
				public getParentForAccessibility(): globalAndroid.view.ViewParent;
				public onNestedFling(target: globalAndroid.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
				public setMediaControlView(mediaControlView: androidx.media2.widget.MediaControlView, intervalMs: number): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
				public keyboardNavigationClusterSearch(currentCluster: globalAndroid.view.View, direction: number): globalAndroid.view.View;
				public addView(child: globalAndroid.view.View, width: number, height: number): void;
				public isTextDirectionResolved(): boolean;
				public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
				public childHasTransientStateChanged(child: globalAndroid.view.View, childHasTransientState: boolean): void;
				public onDetachedFromWindow(): void;
				public focusableViewAvailable(v: globalAndroid.view.View): void;
				public showContextMenuForChild(originalView: globalAndroid.view.View): boolean;
				public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public recomputeViewAttributes(child: globalAndroid.view.View): void;
				public addView(child: globalAndroid.view.View): void;
				public requestSendAccessibilityEvent(child: globalAndroid.view.View, event: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
				public isLayoutDirectionResolved(): boolean;
				public isTextAlignmentResolved(): boolean;
				public getLayoutDirection(): number;
				public addView(child: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public canResolveTextDirection(): boolean;
				public canResolveTextAlignment(): boolean;
				public notifySubtreeAccessibilityStateChanged(child: globalAndroid.view.View, source: globalAndroid.view.View, changeType: number): void;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
				public getViewType(): number;
				public updateViewLayout(view: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public onNestedScroll(target: globalAndroid.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
				public requestLayout(): void;
				public focusSearch(focused: globalAndroid.view.View, direction: number): globalAndroid.view.View;
				public requestTransparentRegion(child: globalAndroid.view.View): void;
				public onStartNestedScroll(child: globalAndroid.view.View, target: globalAndroid.view.View, nestedScrollAxes: number): boolean;
				/** @deprecated */
				public requestFitSystemWindows(): void;
				public showContextMenuForChild(originalView: globalAndroid.view.View, x: number, y: number): boolean;
				public getAccessibilityClassName(): string;
				public bringChildToFront(child: globalAndroid.view.View): void;
				public onNestedPreScroll(target: globalAndroid.view.View, dx: number, dy: number, consumed: native.Array<number>): void;
				public clearChildFocus(child: globalAndroid.view.View): void;
				public setOnViewTypeChangedListener(listener: androidx.media2.widget.VideoView.OnViewTypeChangedListener): void;
				public onDescendantInvalidated(child: globalAndroid.view.View, target: globalAndroid.view.View): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public removeView(view: globalAndroid.view.View): void;
				public setMediaController(controller: androidx.media2.session.MediaController): void;
				public requestChildRectangleOnScreen(child: globalAndroid.view.View, rectangle: globalAndroid.graphics.Rect, immediate: boolean): boolean;
				public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public getChildVisibleRect(child: globalAndroid.view.View, r: globalAndroid.graphics.Rect, offset: globalAndroid.graphics.Point): boolean;
				public requestChildFocus(child: globalAndroid.view.View, focused: globalAndroid.view.View): void;
				public createContextMenu(menu: globalAndroid.view.ContextMenu): void;
				public canResolveLayoutDirection(): boolean;
				public addView(child: globalAndroid.view.View, index: number, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public onNestedPreFling(target: globalAndroid.view.View, velocityX: number, velocityY: number): boolean;
				public setPlayer(player: androidx.media2.common.SessionPlayer): void;
				public onAttachedToWindow(): void;
				public getParent(): globalAndroid.view.ViewParent;
			}
			export module VideoView {
				export class OnViewTypeChangedListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.media2.widget.VideoView.OnViewTypeChangedListener>;
					/**
					 * Constructs a new instance of the androidx.media2.widget.VideoView$OnViewTypeChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onViewTypeChanged(view0: globalAndroid.view.View, int1: number): void;
					});
					public constructor();
					public onViewTypeChanged(view0: globalAndroid.view.View, int1: number): void;
				}
				export class PlayerCallback extends androidx.media2.widget.PlayerWrapper.PlayerCallback {
					public static class: java.lang.Class<androidx.media2.widget.VideoView.PlayerCallback>;
				}
			}
		}
	}
}

declare module androidx {
	export module media2 {
		export module widget {
			export class VideoViewInterface extends java.lang.Object {
				public static class: java.lang.Class<androidx.media2.widget.VideoViewInterface>;
				/**
				 * Constructs a new instance of the androidx.media2.widget.VideoViewInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					assignSurfaceToPlayerWrapper(playerWrapper0: androidx.media2.widget.PlayerWrapper): boolean;
					setSurfaceListener(surfaceListener0: androidx.media2.widget.VideoViewInterface.SurfaceListener): void;
					getViewType(): number;
					hasAvailableSurface(): boolean;
				});
				public constructor();
				public getViewType(): number;
				public assignSurfaceToPlayerWrapper(playerWrapper0: androidx.media2.widget.PlayerWrapper): boolean;
				public setSurfaceListener(surfaceListener0: androidx.media2.widget.VideoViewInterface.SurfaceListener): void;
				public hasAvailableSurface(): boolean;
			}
			export module VideoViewInterface {
				export class SurfaceListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.media2.widget.VideoViewInterface.SurfaceListener>;
					/**
					 * Constructs a new instance of the androidx.media2.widget.VideoViewInterface$SurfaceListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onSurfaceCreated(view0: globalAndroid.view.View, int1: number, int2: number): void;
						onSurfaceDestroyed(view0: globalAndroid.view.View): void;
						onSurfaceChanged(view0: globalAndroid.view.View, int1: number, int2: number): void;
						onSurfaceTakeOverDone(videoViewInterface0: androidx.media2.widget.VideoViewInterface): void;
					});
					public constructor();
					public onSurfaceDestroyed(view0: globalAndroid.view.View): void;
					public onSurfaceChanged(view0: globalAndroid.view.View, int1: number, int2: number): void;
					public onSurfaceCreated(view0: globalAndroid.view.View, int1: number, int2: number): void;
					public onSurfaceTakeOverDone(videoViewInterface0: androidx.media2.widget.VideoViewInterface): void;
				}
			}
		}
	}
}

//Generics information:

