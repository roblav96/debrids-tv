declare module androidx {
	export module constraintlayout {
		export module helper {
			export module widget {
				export class Carousel extends androidx.constraintlayout.motion.widget.MotionHelper {
					public static class: java.lang.Class<androidx.constraintlayout.helper.widget.Carousel>;
					public static TOUCH_UP_IMMEDIATE_STOP: number;
					public static TOUCH_UP_CARRY_ON: number;
					public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public transitionToIndex(index: number, delay: number): void;
					public getCount(): number;
					public sendAccessibilityEvent(eventType: number): void;
					public onPostDraw(canvas: globalAndroid.graphics.Canvas): void;
					public onTransitionCompleted(motionLayout: androidx.constraintlayout.motion.widget.MotionLayout, currentId: number): void;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
					public onAttachedToWindow(): void;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
					public jumpToIndex(index: number): void;
					public onPreDraw(canvas: globalAndroid.graphics.Canvas): void;
					public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
					public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
					public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
					public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
					public onFinishedMotionScene(motionLayout: androidx.constraintlayout.motion.widget.MotionLayout): void;
					public onPreSetup(motionLayout: androidx.constraintlayout.motion.widget.MotionLayout, controllerMap: java.util.HashMap<globalAndroid.view.View,androidx.constraintlayout.motion.widget.MotionController>): void;
					public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
					public setAdapter(adapter: androidx.constraintlayout.helper.widget.Carousel.Adapter): void;
					public getCurrentIndex(): number;
					public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
					public refresh(): void;
					public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public isUseOnHide(): boolean;
					public constructor(context: globalAndroid.content.Context);
					public isUsedOnShow(): boolean;
					public onTransitionChange(motionLayout: androidx.constraintlayout.motion.widget.MotionLayout, startId: number, endId: number, progress: number): void;
					public isDecorator(): boolean;
					public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				}
				export module Carousel {
					export class Adapter extends java.lang.Object {
						public static class: java.lang.Class<androidx.constraintlayout.helper.widget.Carousel.Adapter>;
						/**
						 * Constructs a new instance of the androidx.constraintlayout.helper.widget.Carousel() when extending the interface class.
						 */
						public constructor(implementation: {
							count(): number;
							populate(view0: globalAndroid.view.View, int1: number): void;
							onNewItem(int0: number): void;
						});
						public constructor();
						public count(): number;
						public populate(view0: globalAndroid.view.View, int1: number): void;
						public onNewItem(int0: number): void;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module helper {
			export module widget {
				export class CircularFlow extends androidx.constraintlayout.widget.VirtualLayout {
					public static class: java.lang.Class<androidx.constraintlayout.helper.widget.CircularFlow>;
					public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public sendAccessibilityEvent(eventType: number): void;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
					public onAttachedToWindow(): void;
					public removeView(view: globalAndroid.view.View): number;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
					public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
					public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
					public updateReference(view: globalAndroid.view.View, radius: number, angle: number): void;
					public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
					public init(attrs: globalAndroid.util.AttributeSet): void;
					public setDefaultRadius(radius: number): void;
					public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
					public updateAngle(view: globalAndroid.view.View, angle: number): void;
					public addViewToCircularFlow(view: globalAndroid.view.View, radius: number, angle: number): void;
					public isUpdatable(view: globalAndroid.view.View): boolean;
					public getAngles(): native.Array<number>;
					public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
					public getRadius(): native.Array<number>;
					public static removeElementFromArray(array: native.Array<number>, index: number): native.Array<number>;
					public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
					public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public setDefaultAngle(angle: number): void;
					public constructor(context: globalAndroid.content.Context);
					public updateRadius(view: globalAndroid.view.View, radius: number): void;
					public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module helper {
			export module widget {
				export class Flow extends androidx.constraintlayout.widget.VirtualLayout {
					public static class: java.lang.Class<androidx.constraintlayout.helper.widget.Flow>;
					public static HORIZONTAL: number;
					public static VERTICAL: number;
					public static WRAP_NONE: number;
					public static WRAP_CHAIN: number;
					public static WRAP_ALIGNED: number;
					public static CHAIN_SPREAD: number;
					public static CHAIN_SPREAD_INSIDE: number;
					public static CHAIN_PACKED: number;
					public static HORIZONTAL_ALIGN_START: number;
					public static HORIZONTAL_ALIGN_END: number;
					public static HORIZONTAL_ALIGN_CENTER: number;
					public static VERTICAL_ALIGN_TOP: number;
					public static VERTICAL_ALIGN_BOTTOM: number;
					public static VERTICAL_ALIGN_CENTER: number;
					public static VERTICAL_ALIGN_BASELINE: number;
					public setHorizontalAlign(align: number): void;
					public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public setPadding(padding: number): void;
					public setPaddingLeft(paddingLeft: number): void;
					public sendAccessibilityEvent(eventType: number): void;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
					public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
					public setVerticalBias(bias: number): void;
					public loadParameters(constraint: androidx.constraintlayout.widget.ConstraintSet.Constraint, child: androidx.constraintlayout.core.widgets.HelperWidget, layoutParams: androidx.constraintlayout.widget.ConstraintLayout.LayoutParams, mapIdToWidget: globalAndroid.util.SparseArray<androidx.constraintlayout.core.widgets.ConstraintWidget>): void;
					public setLastVerticalStyle(style: number): void;
					public setWrapMode(mode: number): void;
					public setHorizontalBias(bias: number): void;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
					public setPaddingTop(paddingTop: number): void;
					public setOrientation(orientation: number): void;
					public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
					public setLastVerticalBias(bias: number): void;
					public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
					public setFirstHorizontalBias(bias: number): void;
					public setVerticalGap(gap: number): void;
					public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
					public setFirstHorizontalStyle(style: number): void;
					public init(attrs: globalAndroid.util.AttributeSet): void;
					public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
					public setHorizontalStyle(style: number): void;
					public setPaddingBottom(paddingBottom: number): void;
					public setFirstVerticalStyle(style: number): void;
					public setHorizontalGap(gap: number): void;
					public setVerticalStyle(style: number): void;
					public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
					public setPadding(left: number, top: number, right: number, bottom: number): void;
					public setMaxElementsWrap(max: number): void;
					public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
					public setPaddingRight(paddingRight: number): void;
					public setVerticalAlign(align: number): void;
					public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public setFirstVerticalBias(bias: number): void;
					public setLastHorizontalBias(bias: number): void;
					public constructor(context: globalAndroid.content.Context);
					public onMeasure(layout: androidx.constraintlayout.core.widgets.VirtualLayout, widthMeasureSpec: number, heightMeasureSpec: number): void;
					public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
					public setLastHorizontalStyle(style: number): void;
					public resolveRtl(widget: androidx.constraintlayout.core.widgets.ConstraintWidget, isRtl: boolean): void;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module helper {
			export module widget {
				export class Layer extends androidx.constraintlayout.widget.ConstraintHelper {
					public static class: java.lang.Class<androidx.constraintlayout.helper.widget.Layer>;
					public mComputedCenterX: number;
					public mComputedCenterY: number;
					public mComputedMaxX: number;
					public mComputedMaxY: number;
					public mComputedMinX: number;
					public mComputedMinY: number;
					public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public setTranslationY(translationY: number): void;
					public sendAccessibilityEvent(eventType: number): void;
					public setElevation(elevation: number): void;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
					public onAttachedToWindow(): void;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
					public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
					public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
					public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
					public init(attrs: globalAndroid.util.AttributeSet): void;
					public setPivotY(pivotY: number): void;
					public setVisibility(visibility: number): void;
					public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
					public setPivotX(pivotX: number): void;
					public updatePostLayout(container: androidx.constraintlayout.widget.ConstraintLayout): void;
					public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
					public setRotation(angle: number): void;
					public setTranslationY(dy: number): void;
					public updatePreDraw(container: androidx.constraintlayout.widget.ConstraintLayout): void;
					public calcCenters(): void;
					public applyLayoutFeaturesInConstraintSet(container: androidx.constraintlayout.widget.ConstraintLayout): void;
					public setScaleY(scaleY: number): void;
					public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
					public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public setScaleX(scaleX: number): void;
					public setTranslationX(translationX: number): void;
					public constructor(context: globalAndroid.content.Context);
					public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
					public setTranslationX(dx: number): void;
					public setRotation(rotation: number): void;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module helper {
			export module widget {
				export class MotionEffect extends androidx.constraintlayout.motion.widget.MotionHelper {
					public static class: java.lang.Class<androidx.constraintlayout.helper.widget.MotionEffect>;
					public static TAG: string;
					public static AUTO: number;
					public static NORTH: number;
					public static SOUTH: number;
					public static EAST: number;
					public static WEST: number;
					public onPreSetup(motionLayout: androidx.constraintlayout.motion.widget.MotionLayout, controllerMap: java.util.HashMap<globalAndroid.view.View,androidx.constraintlayout.motion.widget.MotionController>): void;
					public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public sendAccessibilityEvent(eventType: number): void;
					public onPostDraw(canvas: globalAndroid.graphics.Canvas): void;
					public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
					public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
					public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public onPreDraw(canvas: globalAndroid.graphics.Canvas): void;
					public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
					public isUseOnHide(): boolean;
					public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
					public constructor(context: globalAndroid.content.Context);
					public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
					public isUsedOnShow(): boolean;
					public isDecorator(): boolean;
					public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
					public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
					public onFinishedMotionScene(motionLayout: androidx.constraintlayout.motion.widget.MotionLayout): void;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module helper {
			export module widget {
				export class MotionPlaceholder extends androidx.constraintlayout.widget.VirtualLayout {
					public static class: java.lang.Class<androidx.constraintlayout.helper.widget.MotionPlaceholder>;
					public updatePreLayout(container: androidx.constraintlayout.core.widgets.ConstraintWidgetContainer, helper: androidx.constraintlayout.core.widgets.Helper, map: globalAndroid.util.SparseArray<androidx.constraintlayout.core.widgets.ConstraintWidget>): void;
					public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public sendAccessibilityEvent(eventType: number): void;
					public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
					public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
					public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
					public updatePreLayout(container: androidx.constraintlayout.widget.ConstraintLayout): void;
					public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
					public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
					public constructor(context: globalAndroid.content.Context);
					public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
					public onMeasure(layout: androidx.constraintlayout.core.widgets.VirtualLayout, widthMeasureSpec: number, heightMeasureSpec: number): void;
					public init(attrs: globalAndroid.util.AttributeSet): void;
					public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
					public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module motion {
			export module utils {
				export class StopLogic extends androidx.constraintlayout.motion.widget.MotionInterpolator {
					public static class: java.lang.Class<androidx.constraintlayout.motion.utils.StopLogic>;
					public getInterpolation(v: number): number;
					public getVelocity(): number;
					public config(currentPos: number, destination: number, currentVelocity: number, maxTime: number, maxAcceleration: number, maxVelocity: number): void;
					public constructor();
					public debug(desc: string, time: number): string;
					public isStopped(): boolean;
					public getVelocity(x: number): number;
					public springConfig(currentPos: number, destination: number, currentVelocity: number, mass: number, stiffness: number, damping: number, stopThreshold: number, boundaryMode: number): void;
					public getInterpolation(float0: number): number;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module motion {
			export module utils {
				export abstract class ViewOscillator extends androidx.constraintlayout.core.motion.utils.KeyCycleOscillator {
					public static class: java.lang.Class<androidx.constraintlayout.motion.utils.ViewOscillator>;
					public setProperty(widget: androidx.constraintlayout.core.motion.MotionWidget, t: number): void;
					public constructor();
					public static makeSpline(str: string): androidx.constraintlayout.motion.utils.ViewOscillator;
					public setProperty(view0: globalAndroid.view.View, float1: number): void;
				}
				export module ViewOscillator {
					export class AlphaSet extends androidx.constraintlayout.motion.utils.ViewOscillator {
						public static class: java.lang.Class<androidx.constraintlayout.motion.utils.ViewOscillator.AlphaSet>;
						public setProperty(view0: globalAndroid.view.View, float1: number): void;
						public setProperty(view: globalAndroid.view.View, t: number): void;
						public setProperty(widget: androidx.constraintlayout.core.motion.MotionWidget, t: number): void;
					}
					export class CustomSet extends androidx.constraintlayout.motion.utils.ViewOscillator {
						public static class: java.lang.Class<androidx.constraintlayout.motion.utils.ViewOscillator.CustomSet>;
						public mCustom: androidx.constraintlayout.widget.ConstraintAttribute;
						public setProperty(view0: globalAndroid.view.View, float1: number): void;
						public setProperty(view: globalAndroid.view.View, t: number): void;
						public setProperty(widget: androidx.constraintlayout.core.motion.MotionWidget, t: number): void;
						public setCustom(custom: any): void;
					}
					export class ElevationSet extends androidx.constraintlayout.motion.utils.ViewOscillator {
						public static class: java.lang.Class<androidx.constraintlayout.motion.utils.ViewOscillator.ElevationSet>;
						public setProperty(view0: globalAndroid.view.View, float1: number): void;
						public setProperty(view: globalAndroid.view.View, t: number): void;
						public setProperty(widget: androidx.constraintlayout.core.motion.MotionWidget, t: number): void;
					}
					export class PathRotateSet extends androidx.constraintlayout.motion.utils.ViewOscillator {
						public static class: java.lang.Class<androidx.constraintlayout.motion.utils.ViewOscillator.PathRotateSet>;
						public constructor();
						public setProperty(view0: globalAndroid.view.View, float1: number): void;
						public setProperty(view: globalAndroid.view.View, t: number): void;
						public setPathRotate(view: globalAndroid.view.View, t: number, dx: number, dy: number): void;
						public setProperty(widget: androidx.constraintlayout.core.motion.MotionWidget, t: number): void;
					}
					export class ProgressSet extends androidx.constraintlayout.motion.utils.ViewOscillator {
						public static class: java.lang.Class<androidx.constraintlayout.motion.utils.ViewOscillator.ProgressSet>;
						public setProperty(view0: globalAndroid.view.View, float1: number): void;
						public setProperty(view: globalAndroid.view.View, t: number): void;
						public setProperty(widget: androidx.constraintlayout.core.motion.MotionWidget, t: number): void;
					}
					export class RotationSet extends androidx.constraintlayout.motion.utils.ViewOscillator {
						public static class: java.lang.Class<androidx.constraintlayout.motion.utils.ViewOscillator.RotationSet>;
						public setProperty(view0: globalAndroid.view.View, float1: number): void;
						public setProperty(view: globalAndroid.view.View, t: number): void;
						public setProperty(widget: androidx.constraintlayout.core.motion.MotionWidget, t: number): void;
					}
					export class RotationXset extends androidx.constraintlayout.motion.utils.ViewOscillator {
						public static class: java.lang.Class<androidx.constraintlayout.motion.utils.ViewOscillator.RotationXset>;
						public setProperty(view0: globalAndroid.view.View, float1: number): void;
						public setProperty(view: globalAndroid.view.View, t: number): void;
						public setProperty(widget: androidx.constraintlayout.core.motion.MotionWidget, t: number): void;
					}
					export class RotationYset extends androidx.constraintlayout.motion.utils.ViewOscillator {
						public static class: java.lang.Class<androidx.constraintlayout.motion.utils.ViewOscillator.RotationYset>;
						public setProperty(view0: globalAndroid.view.View, float1: number): void;
						public setProperty(view: globalAndroid.view.View, t: number): void;
						public setProperty(widget: androidx.constraintlayout.core.motion.MotionWidget, t: number): void;
					}
					export class ScaleXset extends androidx.constraintlayout.motion.utils.ViewOscillator {
						public static class: java.lang.Class<androidx.constraintlayout.motion.utils.ViewOscillator.ScaleXset>;
						public setProperty(view0: globalAndroid.view.View, float1: number): void;
						public setProperty(view: globalAndroid.view.View, t: number): void;
						public setProperty(widget: androidx.constraintlayout.core.motion.MotionWidget, t: number): void;
					}
					export class ScaleYset extends androidx.constraintlayout.motion.utils.ViewOscillator {
						public static class: java.lang.Class<androidx.constraintlayout.motion.utils.ViewOscillator.ScaleYset>;
						public setProperty(view0: globalAndroid.view.View, float1: number): void;
						public setProperty(view: globalAndroid.view.View, t: number): void;
						public setProperty(widget: androidx.constraintlayout.core.motion.MotionWidget, t: number): void;
					}
					export class TranslationXset extends androidx.constraintlayout.motion.utils.ViewOscillator {
						public static class: java.lang.Class<androidx.constraintlayout.motion.utils.ViewOscillator.TranslationXset>;
						public setProperty(view0: globalAndroid.view.View, float1: number): void;
						public setProperty(view: globalAndroid.view.View, t: number): void;
						public setProperty(widget: androidx.constraintlayout.core.motion.MotionWidget, t: number): void;
					}
					export class TranslationYset extends androidx.constraintlayout.motion.utils.ViewOscillator {
						public static class: java.lang.Class<androidx.constraintlayout.motion.utils.ViewOscillator.TranslationYset>;
						public setProperty(view0: globalAndroid.view.View, float1: number): void;
						public setProperty(view: globalAndroid.view.View, t: number): void;
						public setProperty(widget: androidx.constraintlayout.core.motion.MotionWidget, t: number): void;
					}
					export class TranslationZset extends androidx.constraintlayout.motion.utils.ViewOscillator {
						public static class: java.lang.Class<androidx.constraintlayout.motion.utils.ViewOscillator.TranslationZset>;
						public setProperty(view0: globalAndroid.view.View, float1: number): void;
						public setProperty(view: globalAndroid.view.View, t: number): void;
						public setProperty(widget: androidx.constraintlayout.core.motion.MotionWidget, t: number): void;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module motion {
			export module utils {
				export abstract class ViewSpline extends androidx.constraintlayout.core.motion.utils.SplineSet {
					public static class: java.lang.Class<androidx.constraintlayout.motion.utils.ViewSpline>;
					public setProperty(widget: androidx.constraintlayout.core.motion.utils.TypedValues, t: number): void;
					public static makeCustomSpline(str: string, attrList: androidx.constraintlayout.core.motion.utils.KeyFrameArray.CustomArray): androidx.constraintlayout.core.motion.utils.SplineSet;
					public constructor();
					public static makeSpline(str: string, currentTime: number): androidx.constraintlayout.core.motion.utils.SplineSet;
					public static makeSpline(str: string): androidx.constraintlayout.motion.utils.ViewSpline;
					public setProperty(view0: globalAndroid.view.View, float1: number): void;
					public static makeCustomSpline(str: string, attrList: globalAndroid.util.SparseArray<androidx.constraintlayout.widget.ConstraintAttribute>): androidx.constraintlayout.motion.utils.ViewSpline;
				}
				export module ViewSpline {
					export class AlphaSet extends androidx.constraintlayout.motion.utils.ViewSpline {
						public static class: java.lang.Class<androidx.constraintlayout.motion.utils.ViewSpline.AlphaSet>;
						public setProperty(view0: globalAndroid.view.View, float1: number): void;
						public setProperty(widget: androidx.constraintlayout.core.motion.utils.TypedValues, t: number): void;
						public setProperty(view: globalAndroid.view.View, t: number): void;
					}
					export class CustomSet extends androidx.constraintlayout.motion.utils.ViewSpline {
						public static class: java.lang.Class<androidx.constraintlayout.motion.utils.ViewSpline.CustomSet>;
						public constructor();
						public setProperty(view0: globalAndroid.view.View, float1: number): void;
						public setup(curveType: number): void;
						public setPoint(position: number, value: androidx.constraintlayout.widget.ConstraintAttribute): void;
						public setProperty(widget: androidx.constraintlayout.core.motion.utils.TypedValues, t: number): void;
						public setProperty(view: globalAndroid.view.View, t: number): void;
						public setPoint(position: number, value: number): void;
						public constructor(attribute: string, attrList: globalAndroid.util.SparseArray<androidx.constraintlayout.widget.ConstraintAttribute>);
					}
					export class ElevationSet extends androidx.constraintlayout.motion.utils.ViewSpline {
						public static class: java.lang.Class<androidx.constraintlayout.motion.utils.ViewSpline.ElevationSet>;
						public setProperty(view0: globalAndroid.view.View, float1: number): void;
						public setProperty(widget: androidx.constraintlayout.core.motion.utils.TypedValues, t: number): void;
						public setProperty(view: globalAndroid.view.View, t: number): void;
					}
					export class PathRotate extends androidx.constraintlayout.motion.utils.ViewSpline {
						public static class: java.lang.Class<androidx.constraintlayout.motion.utils.ViewSpline.PathRotate>;
						public constructor();
						public setProperty(view0: globalAndroid.view.View, float1: number): void;
						public setProperty(widget: androidx.constraintlayout.core.motion.utils.TypedValues, t: number): void;
						public setProperty(view: globalAndroid.view.View, t: number): void;
						public setPathRotate(view: globalAndroid.view.View, t: number, dx: number, dy: number): void;
					}
					export class PivotXset extends androidx.constraintlayout.motion.utils.ViewSpline {
						public static class: java.lang.Class<androidx.constraintlayout.motion.utils.ViewSpline.PivotXset>;
						public setProperty(view0: globalAndroid.view.View, float1: number): void;
						public setProperty(widget: androidx.constraintlayout.core.motion.utils.TypedValues, t: number): void;
						public setProperty(view: globalAndroid.view.View, t: number): void;
					}
					export class PivotYset extends androidx.constraintlayout.motion.utils.ViewSpline {
						public static class: java.lang.Class<androidx.constraintlayout.motion.utils.ViewSpline.PivotYset>;
						public setProperty(view0: globalAndroid.view.View, float1: number): void;
						public setProperty(widget: androidx.constraintlayout.core.motion.utils.TypedValues, t: number): void;
						public setProperty(view: globalAndroid.view.View, t: number): void;
					}
					export class ProgressSet extends androidx.constraintlayout.motion.utils.ViewSpline {
						public static class: java.lang.Class<androidx.constraintlayout.motion.utils.ViewSpline.ProgressSet>;
						public setProperty(view0: globalAndroid.view.View, float1: number): void;
						public setProperty(widget: androidx.constraintlayout.core.motion.utils.TypedValues, t: number): void;
						public setProperty(view: globalAndroid.view.View, t: number): void;
					}
					export class RotationSet extends androidx.constraintlayout.motion.utils.ViewSpline {
						public static class: java.lang.Class<androidx.constraintlayout.motion.utils.ViewSpline.RotationSet>;
						public setProperty(view0: globalAndroid.view.View, float1: number): void;
						public setProperty(widget: androidx.constraintlayout.core.motion.utils.TypedValues, t: number): void;
						public setProperty(view: globalAndroid.view.View, t: number): void;
					}
					export class RotationXset extends androidx.constraintlayout.motion.utils.ViewSpline {
						public static class: java.lang.Class<androidx.constraintlayout.motion.utils.ViewSpline.RotationXset>;
						public setProperty(view0: globalAndroid.view.View, float1: number): void;
						public setProperty(widget: androidx.constraintlayout.core.motion.utils.TypedValues, t: number): void;
						public setProperty(view: globalAndroid.view.View, t: number): void;
					}
					export class RotationYset extends androidx.constraintlayout.motion.utils.ViewSpline {
						public static class: java.lang.Class<androidx.constraintlayout.motion.utils.ViewSpline.RotationYset>;
						public setProperty(view0: globalAndroid.view.View, float1: number): void;
						public setProperty(widget: androidx.constraintlayout.core.motion.utils.TypedValues, t: number): void;
						public setProperty(view: globalAndroid.view.View, t: number): void;
					}
					export class ScaleXset extends androidx.constraintlayout.motion.utils.ViewSpline {
						public static class: java.lang.Class<androidx.constraintlayout.motion.utils.ViewSpline.ScaleXset>;
						public setProperty(view0: globalAndroid.view.View, float1: number): void;
						public setProperty(widget: androidx.constraintlayout.core.motion.utils.TypedValues, t: number): void;
						public setProperty(view: globalAndroid.view.View, t: number): void;
					}
					export class ScaleYset extends androidx.constraintlayout.motion.utils.ViewSpline {
						public static class: java.lang.Class<androidx.constraintlayout.motion.utils.ViewSpline.ScaleYset>;
						public setProperty(view0: globalAndroid.view.View, float1: number): void;
						public setProperty(widget: androidx.constraintlayout.core.motion.utils.TypedValues, t: number): void;
						public setProperty(view: globalAndroid.view.View, t: number): void;
					}
					export class TranslationXset extends androidx.constraintlayout.motion.utils.ViewSpline {
						public static class: java.lang.Class<androidx.constraintlayout.motion.utils.ViewSpline.TranslationXset>;
						public setProperty(view0: globalAndroid.view.View, float1: number): void;
						public setProperty(widget: androidx.constraintlayout.core.motion.utils.TypedValues, t: number): void;
						public setProperty(view: globalAndroid.view.View, t: number): void;
					}
					export class TranslationYset extends androidx.constraintlayout.motion.utils.ViewSpline {
						public static class: java.lang.Class<androidx.constraintlayout.motion.utils.ViewSpline.TranslationYset>;
						public setProperty(view0: globalAndroid.view.View, float1: number): void;
						public setProperty(widget: androidx.constraintlayout.core.motion.utils.TypedValues, t: number): void;
						public setProperty(view: globalAndroid.view.View, t: number): void;
					}
					export class TranslationZset extends androidx.constraintlayout.motion.utils.ViewSpline {
						public static class: java.lang.Class<androidx.constraintlayout.motion.utils.ViewSpline.TranslationZset>;
						public setProperty(view0: globalAndroid.view.View, float1: number): void;
						public setProperty(widget: androidx.constraintlayout.core.motion.utils.TypedValues, t: number): void;
						public setProperty(view: globalAndroid.view.View, t: number): void;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module motion {
			export module utils {
				export class ViewState extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.motion.utils.ViewState>;
					public rotation: number;
					public left: number;
					public top: number;
					public right: number;
					public bottom: number;
					public height(): number;
					public width(): number;
					public constructor();
					public getState(v: globalAndroid.view.View): void;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module motion {
			export module utils {
				export abstract class ViewTimeCycle extends androidx.constraintlayout.core.motion.utils.TimeCycleSplineSet {
					public static class: java.lang.Class<androidx.constraintlayout.motion.utils.ViewTimeCycle>;
					public get(pos: number, time: number, view: globalAndroid.view.View, cache: androidx.constraintlayout.core.motion.utils.KeyCache): number;
					public setProperty(view0: globalAndroid.view.View, float1: number, long2: number, keyCache3: androidx.constraintlayout.core.motion.utils.KeyCache): boolean;
					public static makeCustomSpline(str: string, attrList: globalAndroid.util.SparseArray<androidx.constraintlayout.widget.ConstraintAttribute>): androidx.constraintlayout.motion.utils.ViewTimeCycle;
					public constructor();
					public static makeSpline(str: string, currentTime: number): androidx.constraintlayout.motion.utils.ViewTimeCycle;
				}
				export module ViewTimeCycle {
					export class AlphaSet extends androidx.constraintlayout.motion.utils.ViewTimeCycle {
						public static class: java.lang.Class<androidx.constraintlayout.motion.utils.ViewTimeCycle.AlphaSet>;
						public setProperty(view: globalAndroid.view.View, t: number, time: number, cache: androidx.constraintlayout.core.motion.utils.KeyCache): boolean;
						public setProperty(view0: globalAndroid.view.View, float1: number, long2: number, keyCache3: androidx.constraintlayout.core.motion.utils.KeyCache): boolean;
					}
					export class CustomSet extends androidx.constraintlayout.motion.utils.ViewTimeCycle {
						public static class: java.lang.Class<androidx.constraintlayout.motion.utils.ViewTimeCycle.CustomSet>;
						public setPoint(position: number, value: androidx.constraintlayout.widget.ConstraintAttribute, period: number, shape: number, offset: number): void;
						public constructor();
						public setup(curveType: number): void;
						public setProperty(view: globalAndroid.view.View, t: number, time: number, cache: androidx.constraintlayout.core.motion.utils.KeyCache): boolean;
						public constructor(attribute: string, attrList: globalAndroid.util.SparseArray<androidx.constraintlayout.widget.ConstraintAttribute>);
						public setPoint(position: number, value: number, period: number, shape: number, offset: number): void;
						public setProperty(view0: globalAndroid.view.View, float1: number, long2: number, keyCache3: androidx.constraintlayout.core.motion.utils.KeyCache): boolean;
					}
					export class ElevationSet extends androidx.constraintlayout.motion.utils.ViewTimeCycle {
						public static class: java.lang.Class<androidx.constraintlayout.motion.utils.ViewTimeCycle.ElevationSet>;
						public setProperty(view: globalAndroid.view.View, t: number, time: number, cache: androidx.constraintlayout.core.motion.utils.KeyCache): boolean;
						public setProperty(view0: globalAndroid.view.View, float1: number, long2: number, keyCache3: androidx.constraintlayout.core.motion.utils.KeyCache): boolean;
					}
					export class PathRotate extends androidx.constraintlayout.motion.utils.ViewTimeCycle {
						public static class: java.lang.Class<androidx.constraintlayout.motion.utils.ViewTimeCycle.PathRotate>;
						public constructor();
						public setPathRotate(view: globalAndroid.view.View, cache: androidx.constraintlayout.core.motion.utils.KeyCache, t: number, time: number, dx: number, dy: number): boolean;
						public setProperty(view: globalAndroid.view.View, t: number, time: number, cache: androidx.constraintlayout.core.motion.utils.KeyCache): boolean;
						public setProperty(view0: globalAndroid.view.View, float1: number, long2: number, keyCache3: androidx.constraintlayout.core.motion.utils.KeyCache): boolean;
					}
					export class ProgressSet extends androidx.constraintlayout.motion.utils.ViewTimeCycle {
						public static class: java.lang.Class<androidx.constraintlayout.motion.utils.ViewTimeCycle.ProgressSet>;
						public setProperty(view: globalAndroid.view.View, t: number, time: number, cache: androidx.constraintlayout.core.motion.utils.KeyCache): boolean;
						public setProperty(view0: globalAndroid.view.View, float1: number, long2: number, keyCache3: androidx.constraintlayout.core.motion.utils.KeyCache): boolean;
					}
					export class RotationSet extends androidx.constraintlayout.motion.utils.ViewTimeCycle {
						public static class: java.lang.Class<androidx.constraintlayout.motion.utils.ViewTimeCycle.RotationSet>;
						public setProperty(view: globalAndroid.view.View, t: number, time: number, cache: androidx.constraintlayout.core.motion.utils.KeyCache): boolean;
						public setProperty(view0: globalAndroid.view.View, float1: number, long2: number, keyCache3: androidx.constraintlayout.core.motion.utils.KeyCache): boolean;
					}
					export class RotationXset extends androidx.constraintlayout.motion.utils.ViewTimeCycle {
						public static class: java.lang.Class<androidx.constraintlayout.motion.utils.ViewTimeCycle.RotationXset>;
						public setProperty(view: globalAndroid.view.View, t: number, time: number, cache: androidx.constraintlayout.core.motion.utils.KeyCache): boolean;
						public setProperty(view0: globalAndroid.view.View, float1: number, long2: number, keyCache3: androidx.constraintlayout.core.motion.utils.KeyCache): boolean;
					}
					export class RotationYset extends androidx.constraintlayout.motion.utils.ViewTimeCycle {
						public static class: java.lang.Class<androidx.constraintlayout.motion.utils.ViewTimeCycle.RotationYset>;
						public setProperty(view: globalAndroid.view.View, t: number, time: number, cache: androidx.constraintlayout.core.motion.utils.KeyCache): boolean;
						public setProperty(view0: globalAndroid.view.View, float1: number, long2: number, keyCache3: androidx.constraintlayout.core.motion.utils.KeyCache): boolean;
					}
					export class ScaleXset extends androidx.constraintlayout.motion.utils.ViewTimeCycle {
						public static class: java.lang.Class<androidx.constraintlayout.motion.utils.ViewTimeCycle.ScaleXset>;
						public setProperty(view: globalAndroid.view.View, t: number, time: number, cache: androidx.constraintlayout.core.motion.utils.KeyCache): boolean;
						public setProperty(view0: globalAndroid.view.View, float1: number, long2: number, keyCache3: androidx.constraintlayout.core.motion.utils.KeyCache): boolean;
					}
					export class ScaleYset extends androidx.constraintlayout.motion.utils.ViewTimeCycle {
						public static class: java.lang.Class<androidx.constraintlayout.motion.utils.ViewTimeCycle.ScaleYset>;
						public setProperty(view: globalAndroid.view.View, t: number, time: number, cache: androidx.constraintlayout.core.motion.utils.KeyCache): boolean;
						public setProperty(view0: globalAndroid.view.View, float1: number, long2: number, keyCache3: androidx.constraintlayout.core.motion.utils.KeyCache): boolean;
					}
					export class TranslationXset extends androidx.constraintlayout.motion.utils.ViewTimeCycle {
						public static class: java.lang.Class<androidx.constraintlayout.motion.utils.ViewTimeCycle.TranslationXset>;
						public setProperty(view: globalAndroid.view.View, t: number, time: number, cache: androidx.constraintlayout.core.motion.utils.KeyCache): boolean;
						public setProperty(view0: globalAndroid.view.View, float1: number, long2: number, keyCache3: androidx.constraintlayout.core.motion.utils.KeyCache): boolean;
					}
					export class TranslationYset extends androidx.constraintlayout.motion.utils.ViewTimeCycle {
						public static class: java.lang.Class<androidx.constraintlayout.motion.utils.ViewTimeCycle.TranslationYset>;
						public setProperty(view: globalAndroid.view.View, t: number, time: number, cache: androidx.constraintlayout.core.motion.utils.KeyCache): boolean;
						public setProperty(view0: globalAndroid.view.View, float1: number, long2: number, keyCache3: androidx.constraintlayout.core.motion.utils.KeyCache): boolean;
					}
					export class TranslationZset extends androidx.constraintlayout.motion.utils.ViewTimeCycle {
						public static class: java.lang.Class<androidx.constraintlayout.motion.utils.ViewTimeCycle.TranslationZset>;
						public setProperty(view: globalAndroid.view.View, t: number, time: number, cache: androidx.constraintlayout.core.motion.utils.KeyCache): boolean;
						public setProperty(view0: globalAndroid.view.View, float1: number, long2: number, keyCache3: androidx.constraintlayout.core.motion.utils.KeyCache): boolean;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module motion {
			export module widget {
				export class Animatable extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.motion.widget.Animatable>;
					/**
					 * Constructs a new instance of the androidx.constraintlayout.motion.widget.Animatable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						setProgress(float0: number): void;
						getProgress(): number;
					});
					public constructor();
					public getProgress(): number;
					public setProgress(float0: number): void;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module motion {
			export module widget {
				export class CustomFloatAttributes extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.motion.widget.CustomFloatAttributes>;
					/**
					 * Constructs a new instance of the androidx.constraintlayout.motion.widget.CustomFloatAttributes interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getListOfAttributes(): native.Array<string>;
						set(string0: string, float1: number): void;
						get(string0: string): number;
					});
					public constructor();
					public set(string0: string, float1: number): void;
					public get(string0: string): number;
					public getListOfAttributes(): native.Array<string>;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module motion {
			export module widget {
				export class Debug extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.motion.widget.Debug>;
					public static dumpPoc(obj: any): void;
					public static printStack(msg: string, n: number): void;
					public static getState(layout: androidx.constraintlayout.motion.widget.MotionLayout, stateId: number): string;
					public static getName(context: globalAndroid.content.Context, id: number): string;
					public static getName(context: globalAndroid.content.Context, id: native.Array<number>): string;
					public static logStack(tag: string, msg: string, n: number): void;
					public static getName(view: globalAndroid.view.View): string;
					public static getLocation2(): string;
					public constructor();
					public static getCallFrom(n: number): string;
					public static getLocation(): string;
					public static getLoc(): string;
					public static dumpLayoutParams(param: globalAndroid.view.ViewGroup.LayoutParams, str: string): void;
					public static getState(layout: androidx.constraintlayout.motion.widget.MotionLayout, stateId: number, len: number): string;
					public static getActionType(event: globalAndroid.view.MotionEvent): string;
					public static dumpLayoutParams(layout: globalAndroid.view.ViewGroup, str: string): void;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module motion {
			export module widget {
				export class DesignTool extends java.lang.Object implements androidx.constraintlayout.motion.widget.ProxyInterface {
					public static class: java.lang.Class<androidx.constraintlayout.motion.widget.DesignTool>;
					public getKeyframeAtLocation(viewObject: any, x: number, y: number): any;
					public getAnimationKeyFrames(view: any, key: native.Array<number>): number;
					public getKeyframe(type: number, target: number, position: number): any;
					public getKeyFramePosition(view: any, type: number, x: number, y: number): number;
					public setState(id: string): void;
					public setToolPosition(position: number): void;
					public getStartState(): string;
					public getAnimationRectangles(view: any, path: native.Array<number>): void;
					public getTransitionTimeMs(): number;
					public getEndState(): string;
					public dumpConstraintSet(set: string): void;
					public designAccess(cmd: number, type: string, viewObject: any, in3: native.Array<number>, inLength: number, out: native.Array<number>, outLength: number): number;
					public setKeyFrame(view: any, position: number, name: string, value: any): void;
					public getPositionKeyframe(keyFrame: any, view: any, x: number, y: number, attribute: native.Array<string>, value: native.Array<number>): java.lang.Boolean;
					public getKeyframe(view: any, type: number, position: number): any;
					public constructor(motionLayout: androidx.constraintlayout.motion.widget.MotionLayout);
					public getKeyFrameInfo(view: any, type: number, info: native.Array<number>): number;
					public isInTransition(): boolean;
					public setTransition(start: string, end: string): void;
					public setKeyFramePosition(view: any, position: number, type: number, x: number, y: number): boolean;
					public getState(): string;
					public getProgress(): number;
					public setAttributes(dpi: number, constraintSetId: string, opaqueView: any, opaqueAttributes: any): void;
					public disableAutoTransition(disable: boolean): void;
					public setViewDebug(view: any, debugMode: number): void;
					public getAnimationPath(view: any, path: native.Array<number>, len: number): number;
					public setKeyframe(keyFrame: any, tag: string, value: any): void;
					public getKeyFramePositions(view: any, type: native.Array<number>, pos: native.Array<number>): number;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module motion {
			export module widget {
				export class FloatLayout extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.motion.widget.FloatLayout>;
					/**
					 * Constructs a new instance of the androidx.constraintlayout.motion.widget.FloatLayout interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						layout(float0: number, float1: number, float2: number, float3: number): void;
					});
					public constructor();
					public layout(float0: number, float1: number, float2: number, float3: number): void;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module motion {
			export module widget {
				export abstract class Key extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.motion.widget.Key>;
					public static UNSET: number;
					public mType: number;
					public static ALPHA: string;
					public static ELEVATION: string;
					public static ROTATION: string;
					public static ROTATION_X: string;
					public static ROTATION_Y: string;
					public static PIVOT_X: string;
					public static PIVOT_Y: string;
					public static TRANSITION_PATH_ROTATE: string;
					public static SCALE_X: string;
					public static SCALE_Y: string;
					public static WAVE_PERIOD: string;
					public static WAVE_OFFSET: string;
					public static WAVE_PHASE: string;
					public static WAVE_VARIES_BY: string;
					public static TRANSLATION_X: string;
					public static TRANSLATION_Y: string;
					public static TRANSLATION_Z: string;
					public static PROGRESS: string;
					public static CUSTOM: string;
					public static CURVEFIT: string;
					public static MOTIONPROGRESS: string;
					public static TRANSITIONEASING: string;
					public static VISIBILITY: string;
					public getFramePosition(): number;
					public clone(): any;
					public setValue(string0: string, object1: any): void;
					public clone(): androidx.constraintlayout.motion.widget.Key;
					public constructor();
					public setViewId(id: number): androidx.constraintlayout.motion.widget.Key;
					public setFramePosition(pos: number): void;
					public setInterpolation(interpolation: java.util.HashMap<string,java.lang.Integer>): void;
					public copy(src: androidx.constraintlayout.motion.widget.Key): androidx.constraintlayout.motion.widget.Key;
					public addValues(hashMap0: java.util.HashMap<string,androidx.constraintlayout.motion.utils.ViewSpline>): void;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module motion {
			export module widget {
				export class KeyAttributes extends androidx.constraintlayout.motion.widget.Key {
					public static class: java.lang.Class<androidx.constraintlayout.motion.widget.KeyAttributes>;
					public static KEY_TYPE: number;
					public clone(): any;
					public setValue(string0: string, object1: any): void;
					public clone(): androidx.constraintlayout.motion.widget.Key;
					public constructor();
					public addValues(splines: java.util.HashMap<string,androidx.constraintlayout.motion.utils.ViewSpline>): void;
					public load(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet): void;
					public setInterpolation(interpolation: java.util.HashMap<string,java.lang.Integer>): void;
					public getAttributeNames(attributes: java.util.HashSet<string>): void;
					public copy(src: androidx.constraintlayout.motion.widget.Key): androidx.constraintlayout.motion.widget.Key;
					public setValue(tag: string, value: any): void;
					public addValues(hashMap0: java.util.HashMap<string,androidx.constraintlayout.motion.utils.ViewSpline>): void;
				}
				export module KeyAttributes {
					export class Loader extends java.lang.Object {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.KeyAttributes.Loader>;
						public static read(c: androidx.constraintlayout.motion.widget.KeyAttributes, a: globalAndroid.content.res.TypedArray): void;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module motion {
			export module widget {
				export class KeyCycle extends androidx.constraintlayout.motion.widget.Key {
					public static class: java.lang.Class<androidx.constraintlayout.motion.widget.KeyCycle>;
					public static WAVE_PERIOD: string;
					public static WAVE_OFFSET: string;
					public static WAVE_PHASE: string;
					public static WAVE_SHAPE: string;
					public static SHAPE_SIN_WAVE: number;
					public static SHAPE_SQUARE_WAVE: number;
					public static SHAPE_TRIANGLE_WAVE: number;
					public static SHAPE_SAW_WAVE: number;
					public static SHAPE_REVERSE_SAW_WAVE: number;
					public static SHAPE_COS_WAVE: number;
					public static SHAPE_BOUNCE: number;
					public static KEY_TYPE: number;
					public clone(): any;
					public setValue(string0: string, object1: any): void;
					public clone(): androidx.constraintlayout.motion.widget.Key;
					public constructor();
					public addValues(splines: java.util.HashMap<string,androidx.constraintlayout.motion.utils.ViewSpline>): void;
					public addCycleValues(oscSet: java.util.HashMap<string,androidx.constraintlayout.motion.utils.ViewOscillator>): void;
					public load(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet): void;
					public getAttributeNames(attributes: java.util.HashSet<string>): void;
					public copy(src: androidx.constraintlayout.motion.widget.Key): androidx.constraintlayout.motion.widget.Key;
					public setValue(tag: string, value: any): void;
					public getValue(key: string): number;
					public addValues(hashMap0: java.util.HashMap<string,androidx.constraintlayout.motion.utils.ViewSpline>): void;
				}
				export module KeyCycle {
					export class Loader extends java.lang.Object {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.KeyCycle.Loader>;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module motion {
			export module widget {
				export class KeyFrames extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.motion.widget.KeyFrames>;
					public static UNSET: number;
					public getKeyFramesForView(id: number): java.util.ArrayList<androidx.constraintlayout.motion.widget.Key>;
					public constructor();
					public addAllFrames(motionController: androidx.constraintlayout.motion.widget.MotionController): void;
					public addFrames(motionController: androidx.constraintlayout.motion.widget.MotionController): void;
					public getKeys(): java.util.Set<java.lang.Integer>;
					public addKey(key: androidx.constraintlayout.motion.widget.Key): void;
					public constructor(context: globalAndroid.content.Context, parser: org.xmlpull.v1.XmlPullParser);
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module motion {
			export module widget {
				export class KeyPosition extends androidx.constraintlayout.motion.widget.KeyPositionBase {
					public static class: java.lang.Class<androidx.constraintlayout.motion.widget.KeyPosition>;
					public static TYPE_SCREEN: number;
					public static TYPE_PATH: number;
					public static TYPE_CARTESIAN: number;
					public static TRANSITION_EASING: string;
					public static DRAWPATH: string;
					public static PERCENT_WIDTH: string;
					public static PERCENT_HEIGHT: string;
					public static SIZE_PERCENT: string;
					public static PERCENT_X: string;
					public static PERCENT_Y: string;
					public setType(type: number): void;
					public setValue(string0: string, object1: any): void;
					public clone(): androidx.constraintlayout.motion.widget.Key;
					public intersects(layoutWidth: number, layoutHeight: number, start: globalAndroid.graphics.RectF, end: globalAndroid.graphics.RectF, x: number, y: number): boolean;
					public positionAttributes(view: globalAndroid.view.View, start: globalAndroid.graphics.RectF, end: globalAndroid.graphics.RectF, x: number, y: number, attribute: native.Array<string>, value: native.Array<number>): void;
					public intersects(int0: number, int1: number, rectF2: globalAndroid.graphics.RectF, rectF3: globalAndroid.graphics.RectF, float4: number, float5: number): boolean;
					public addValues(hashMap0: java.util.HashMap<string,androidx.constraintlayout.motion.utils.ViewSpline>): void;
					public clone(): any;
					public constructor();
					public addValues(splines: java.util.HashMap<string,androidx.constraintlayout.motion.utils.ViewSpline>): void;
					public load(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet): void;
					public copy(src: androidx.constraintlayout.motion.widget.Key): androidx.constraintlayout.motion.widget.Key;
					public setValue(tag: string, value: any): void;
				}
				export module KeyPosition {
					export class Loader extends java.lang.Object {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.KeyPosition.Loader>;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module motion {
			export module widget {
				export abstract class KeyPositionBase extends androidx.constraintlayout.motion.widget.Key {
					public static class: java.lang.Class<androidx.constraintlayout.motion.widget.KeyPositionBase>;
					public static SELECTION_SLOPE: number;
					public intersects(int0: number, int1: number, rectF2: globalAndroid.graphics.RectF, rectF3: globalAndroid.graphics.RectF, float4: number, float5: number): boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module motion {
			export module widget {
				export class KeyTimeCycle extends androidx.constraintlayout.motion.widget.Key {
					public static class: java.lang.Class<androidx.constraintlayout.motion.widget.KeyTimeCycle>;
					public static WAVE_PERIOD: string;
					public static WAVE_OFFSET: string;
					public static WAVE_SHAPE: string;
					public static SHAPE_SIN_WAVE: number;
					public static SHAPE_SQUARE_WAVE: number;
					public static SHAPE_TRIANGLE_WAVE: number;
					public static SHAPE_SAW_WAVE: number;
					public static SHAPE_REVERSE_SAW_WAVE: number;
					public static SHAPE_COS_WAVE: number;
					public static SHAPE_BOUNCE: number;
					public static KEY_TYPE: number;
					public addTimeValues(splines: java.util.HashMap<string,androidx.constraintlayout.motion.utils.ViewTimeCycle>): void;
					public clone(): any;
					public setValue(string0: string, object1: any): void;
					public clone(): androidx.constraintlayout.motion.widget.Key;
					public constructor();
					public addValues(splines: java.util.HashMap<string,androidx.constraintlayout.motion.utils.ViewSpline>): void;
					public load(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet): void;
					public setInterpolation(interpolation: java.util.HashMap<string,java.lang.Integer>): void;
					public getAttributeNames(attributes: java.util.HashSet<string>): void;
					public copy(src: androidx.constraintlayout.motion.widget.Key): androidx.constraintlayout.motion.widget.Key;
					public setValue(tag: string, value: any): void;
					public addValues(hashMap0: java.util.HashMap<string,androidx.constraintlayout.motion.utils.ViewSpline>): void;
				}
				export module KeyTimeCycle {
					export class Loader extends java.lang.Object {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.KeyTimeCycle.Loader>;
						public static read(c: androidx.constraintlayout.motion.widget.KeyTimeCycle, a: globalAndroid.content.res.TypedArray): void;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module motion {
			export module widget {
				export class KeyTrigger extends androidx.constraintlayout.motion.widget.Key {
					public static class: java.lang.Class<androidx.constraintlayout.motion.widget.KeyTrigger>;
					public static VIEW_TRANSITION_ON_CROSS: string;
					public static VIEW_TRANSITION_ON_POSITIVE_CROSS: string;
					public static VIEW_TRANSITION_ON_NEGATIVE_CROSS: string;
					public static POST_LAYOUT: string;
					public static TRIGGER_SLACK: string;
					public static TRIGGER_COLLISION_VIEW: string;
					public static TRIGGER_COLLISION_ID: string;
					public static TRIGGER_ID: string;
					public static POSITIVE_CROSS: string;
					public static NEGATIVE_CROSS: string;
					public static TRIGGER_RECEIVER: string;
					public static CROSS: string;
					public static KEY_TYPE: number;
					public clone(): any;
					public setValue(string0: string, object1: any): void;
					public clone(): androidx.constraintlayout.motion.widget.Key;
					public constructor();
					public addValues(splines: java.util.HashMap<string,androidx.constraintlayout.motion.utils.ViewSpline>): void;
					public load(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet): void;
					public conditionallyFire(pos: number, child: globalAndroid.view.View): void;
					public getAttributeNames(attributes: java.util.HashSet<string>): void;
					public copy(src: androidx.constraintlayout.motion.widget.Key): androidx.constraintlayout.motion.widget.Key;
					public setValue(tag: string, value: any): void;
					public addValues(hashMap0: java.util.HashMap<string,androidx.constraintlayout.motion.utils.ViewSpline>): void;
				}
				export module KeyTrigger {
					export class Loader extends java.lang.Object {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.KeyTrigger.Loader>;
						public static read(c: androidx.constraintlayout.motion.widget.KeyTrigger, a: globalAndroid.content.res.TypedArray, context: globalAndroid.content.Context): void;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module motion {
			export module widget {
				export class MotionConstrainedPoint extends java.lang.Comparable<androidx.constraintlayout.motion.widget.MotionConstrainedPoint> {
					public static class: java.lang.Class<androidx.constraintlayout.motion.widget.MotionConstrainedPoint>;
					public static TAG: string;
					public static DEBUG: boolean;
					public rotationY: number;
					public setState(rect: globalAndroid.graphics.Rect, view: globalAndroid.view.View, rotation: number, prevous: number): void;
					public constructor();
					public applyParameters(view: globalAndroid.view.View): void;
					public setState(cw: globalAndroid.graphics.Rect, constraintSet: androidx.constraintlayout.widget.ConstraintSet, rotation: number, viewId: number): void;
					public applyParameters(c: androidx.constraintlayout.widget.ConstraintSet.Constraint): void;
					public addValues(splines: java.util.HashMap<string,androidx.constraintlayout.motion.utils.ViewSpline>, mFramePosition: number): void;
					public compareTo(o: androidx.constraintlayout.motion.widget.MotionConstrainedPoint): number;
					public setState(view: globalAndroid.view.View): void;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module motion {
			export module widget {
				export class MotionController extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.motion.widget.MotionController>;
					public static PATH_PERCENT: number;
					public static PATH_PERPENDICULAR: number;
					public static HORIZONTAL_PATH_X: number;
					public static HORIZONTAL_PATH_Y: number;
					public static VERTICAL_PATH_X: number;
					public static VERTICAL_PATH_Y: number;
					public static DRAW_PATH_NONE: number;
					public static DRAW_PATH_BASIC: number;
					public static DRAW_PATH_RELATIVE: number;
					public static DRAW_PATH_CARTESIAN: number;
					public static DRAW_PATH_AS_CONFIGURED: number;
					public static DRAW_PATH_RECTANGLE: number;
					public static DRAW_PATH_SCREEN: number;
					public static ROTATION_RIGHT: number;
					public static ROTATION_LEFT: number;
					public getView(): globalAndroid.view.View;
					public getCenter(p: number, pos: native.Array<number>, vel: native.Array<number>): void;
					public setup(parentWidth: number, parentHeight: number, transitionDuration: number, currentTime: number): void;
					public getKeyFrameInfo(type: number, info: native.Array<number>): number;
					public getStartWidth(): number;
					public getKeyFramePositions(type: native.Array<number>, pos: native.Array<number>): number;
					public setupRelative(motionController: androidx.constraintlayout.motion.widget.MotionController): void;
					public getFinalHeight(): number;
					public toString(): string;
					public setDrawPath(debugMode: number): void;
					public getTransformPivotTarget(): number;
					public setView(view: globalAndroid.view.View): void;
					public getStartX(): number;
					public getFinalX(): number;
					public getStartHeight(): number;
					public getStartY(): number;
					public addKey(key: androidx.constraintlayout.motion.widget.Key): void;
					public setStartState(rect: androidx.constraintlayout.motion.utils.ViewState, v: globalAndroid.view.View, rotation: number, preWidth: number, preHeight: number): void;
					public getFinalWidth(): number;
					public setTransformPivotTarget(transformPivotTarget: number): void;
					public getFinalY(): number;
					public getCenterY(): number;
					public setPathMotionArc(arc: number): void;
					public getCenterX(): number;
					public getAnimateRelativeTo(): number;
					public getDrawPath(): number;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module motion {
			export module widget {
				export class MotionHelper extends androidx.constraintlayout.widget.ConstraintHelper implements androidx.constraintlayout.motion.widget.MotionHelperInterface {
					public static class: java.lang.Class<androidx.constraintlayout.motion.widget.MotionHelper>;
					public views: native.Array<globalAndroid.view.View>;
					public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public sendAccessibilityEvent(eventType: number): void;
					public onPostDraw(canvas: globalAndroid.graphics.Canvas): void;
					public onTransitionCompleted(motionLayout: androidx.constraintlayout.motion.widget.MotionLayout, currentId: number): void;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
					public onPreDraw(canvas: globalAndroid.graphics.Canvas): void;
					public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
					public onTransitionStarted(motionLayout: androidx.constraintlayout.motion.widget.MotionLayout, startId: number, endId: number): void;
					public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
					public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
					public init(attrs: globalAndroid.util.AttributeSet): void;
					public onTransitionTrigger(motionLayout: androidx.constraintlayout.motion.widget.MotionLayout, triggerId: number, positive: boolean, progress: number): void;
					public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
					public onFinishedMotionScene(motionLayout: androidx.constraintlayout.motion.widget.MotionLayout): void;
					public setProgress(progress: number): void;
					public onPreSetup(motionLayout: androidx.constraintlayout.motion.widget.MotionLayout, controllerMap: java.util.HashMap<globalAndroid.view.View,androidx.constraintlayout.motion.widget.MotionController>): void;
					public setProgress(view: globalAndroid.view.View, progress: number): void;
					public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
					public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
					public getProgress(): number;
					public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public isUseOnHide(): boolean;
					public constructor(context: globalAndroid.content.Context);
					public isUsedOnShow(): boolean;
					public onTransitionChange(motionLayout: androidx.constraintlayout.motion.widget.MotionLayout, startId: number, endId: number, progress: number): void;
					public isDecorator(): boolean;
					public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module motion {
			export module widget {
				export class MotionHelperInterface extends java.lang.Object implements androidx.constraintlayout.motion.widget.Animatable, androidx.constraintlayout.motion.widget.MotionLayout.TransitionListener {
					public static class: java.lang.Class<androidx.constraintlayout.motion.widget.MotionHelperInterface>;
					/**
					 * Constructs a new instance of the androidx.constraintlayout.motion.widget.MotionHelperInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						isUsedOnShow(): boolean;
						isUseOnHide(): boolean;
						isDecorator(): boolean;
						onPreDraw(canvas0: globalAndroid.graphics.Canvas): void;
						onPostDraw(canvas0: globalAndroid.graphics.Canvas): void;
						onPreSetup(motionLayout0: androidx.constraintlayout.motion.widget.MotionLayout, hashMap1: java.util.HashMap<globalAndroid.view.View,androidx.constraintlayout.motion.widget.MotionController>): void;
						onFinishedMotionScene(motionLayout0: androidx.constraintlayout.motion.widget.MotionLayout): void;
						setProgress(float0: number): void;
						getProgress(): number;
						onTransitionStarted(motionLayout0: androidx.constraintlayout.motion.widget.MotionLayout, int1: number, int2: number): void;
						onTransitionChange(motionLayout0: androidx.constraintlayout.motion.widget.MotionLayout, int1: number, int2: number, float3: number): void;
						onTransitionCompleted(motionLayout0: androidx.constraintlayout.motion.widget.MotionLayout, int1: number): void;
						onTransitionTrigger(motionLayout0: androidx.constraintlayout.motion.widget.MotionLayout, int1: number, boolean2: boolean, float3: number): void;
					});
					public constructor();
					public onPostDraw(canvas0: globalAndroid.graphics.Canvas): void;
					public onTransitionStarted(motionLayout0: androidx.constraintlayout.motion.widget.MotionLayout, int1: number, int2: number): void;
					public onPreDraw(canvas0: globalAndroid.graphics.Canvas): void;
					public onTransitionChange(motionLayout0: androidx.constraintlayout.motion.widget.MotionLayout, int1: number, int2: number, float3: number): void;
					public onFinishedMotionScene(motionLayout0: androidx.constraintlayout.motion.widget.MotionLayout): void;
					public onPreSetup(motionLayout0: androidx.constraintlayout.motion.widget.MotionLayout, hashMap1: java.util.HashMap<globalAndroid.view.View,androidx.constraintlayout.motion.widget.MotionController>): void;
					public getProgress(): number;
					public setProgress(float0: number): void;
					public isUseOnHide(): boolean;
					public onTransitionTrigger(motionLayout0: androidx.constraintlayout.motion.widget.MotionLayout, int1: number, boolean2: boolean, float3: number): void;
					public onTransitionCompleted(motionLayout0: androidx.constraintlayout.motion.widget.MotionLayout, int1: number): void;
					public isUsedOnShow(): boolean;
					public isDecorator(): boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module motion {
			export module widget {
				export abstract class MotionInterpolator extends java.lang.Object implements globalAndroid.view.animation.Interpolator {
					public static class: java.lang.Class<androidx.constraintlayout.motion.widget.MotionInterpolator>;
					public getVelocity(): number;
					public constructor();
					public getInterpolation(float0: number): number;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module motion {
			export module widget {
				export class MotionLayout extends androidx.constraintlayout.widget.ConstraintLayout implements androidx.core.view.NestedScrollingParent3 {
					public static class: java.lang.Class<androidx.constraintlayout.motion.widget.MotionLayout>;
					public static TOUCH_UP_COMPLETE: number;
					public static TOUCH_UP_COMPLETE_TO_START: number;
					public static TOUCH_UP_COMPLETE_TO_END: number;
					public static TOUCH_UP_STOP: number;
					public static TOUCH_UP_DECELERATE: number;
					public static TOUCH_UP_DECELERATE_AND_COMPLETE: number;
					public static TOUCH_UP_NEVER_TO_START: number;
					public static TOUCH_UP_NEVER_TO_END: number;
					public static IS_IN_EDIT_MODE: boolean;
					public static DEBUG_SHOW_NONE: number;
					public static DEBUG_SHOW_PROGRESS: number;
					public static DEBUG_SHOW_PATH: number;
					public static VELOCITY_POST_LAYOUT: number;
					public static VELOCITY_LAYOUT: number;
					public static VELOCITY_STATIC_POST_LAYOUT: number;
					public static VELOCITY_STATIC_LAYOUT: number;
					public mMeasureDuringTransition: boolean;
					public setTransitionState(bundle: globalAndroid.os.Bundle): void;
					public onNestedFling(target: globalAndroid.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
					public setState(id: number, screenWidth: number, screenHeight: number): void;
					public getTransitionState(): globalAndroid.os.Bundle;
					public focusableViewAvailable(v: globalAndroid.view.View): void;
					public isTextDirectionResolved(): boolean;
					public touchSpringTo(position: number, currentVelocity: number): void;
					public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public onNestedScroll(target: globalAndroid.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
					public updateStateAnimate(stateId: number, set: androidx.constraintlayout.widget.ConstraintSet, duration: number): void;
					public jumpToState(id: number): void;
					public setScene(scene: androidx.constraintlayout.motion.widget.MotionScene): void;
					public setInterpolatedProgress(pos: number): void;
					public setOnShow(progress: number): void;
					public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
					public parseLayoutDescription(id: number): void;
					public getTargetPosition(): number;
					public removeTransitionListener(listener: androidx.constraintlayout.motion.widget.MotionLayout.TransitionListener): boolean;
					public onStopNestedScroll(target: globalAndroid.view.View, type: number): void;
					/** @deprecated */
					public rebuildMotion(): void;
					public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
					public getLayoutDirection(): number;
					public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
					public viewTransition(viewTransitionId: number, view: native.Array<globalAndroid.view.View>): void;
					public transitionToEnd(onComplete: java.lang.Runnable): void;
					public recomputeViewAttributes(child: globalAndroid.view.View): void;
					public notifySubtreeAccessibilityStateChanged(child: globalAndroid.view.View, source: globalAndroid.view.View, changeType: number): void;
					public getVelocity(): number;
					public transitionToEnd(): void;
					public getDefinedTransitions(): java.util.ArrayList<androidx.constraintlayout.motion.widget.MotionScene.Transition>;
					public setInteractionEnabled(enabled: boolean): void;
					public transitionToState(id: number, screenWidth: number, screenHeight: number): void;
					public isInRotation(): boolean;
					public addView(child: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
					public constructor(context: globalAndroid.content.Context);
					public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
					public getViewVelocity(view: globalAndroid.view.View, posOnViewX: number, posOnViewY: number, returnVelocity: native.Array<number>, type: number): void;
					public onNestedPreScroll(target: globalAndroid.view.View, dx: number, dy: number, consumed: native.Array<number>, type: number): void;
					public onLayout(changed: boolean, left: number, top: number, right: number, bottom: number): void;
					public getParent(): globalAndroid.view.ViewParent;
					public isTextAlignmentResolved(): boolean;
					public onInterceptTouchEvent(ev: globalAndroid.view.MotionEvent): boolean;
					public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public sendAccessibilityEvent(eventType: number): void;
					public getChildVisibleRect(child: globalAndroid.view.View, r: globalAndroid.graphics.Rect, offset: globalAndroid.graphics.Point): boolean;
					public transitionToStart(): void;
					public canResolveTextAlignment(): boolean;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
					/** @deprecated */
					public requestFitSystemWindows(): void;
					public getEndState(): number;
					public obtainVelocityTracker(): androidx.constraintlayout.motion.widget.MotionLayout.MotionTracker;
					public getConstraintSetIds(): native.Array<number>;
					public getTransitionTimeMs(): number;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
					public bringChildToFront(child: globalAndroid.view.View): void;
					public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
					public getNanoTime(): number;
					public requestLayout(): void;
					public getDesignTool(): androidx.constraintlayout.motion.widget.DesignTool;
					public loadLayoutDescription(layoutDescription: number): void;
					public setTransitionDuration(milliseconds: number): void;
					public onNestedScrollAccepted(child: globalAndroid.view.View, target: globalAndroid.view.View, axes: number): void;
					public dispatchDraw(canvas: globalAndroid.graphics.Canvas): void;
					public getTextAlignment(): number;
					public onDescendantInvalidated(child: globalAndroid.view.View, target: globalAndroid.view.View): void;
					public onNestedPrePerformAccessibilityAction(target: globalAndroid.view.View, action: number, bundle2: globalAndroid.os.Bundle): boolean;
					public setDebugMode(debugMode: number): void;
					public enableViewTransition(viewTransitionId: number, enable: boolean): void;
					public onViewRemoved(view: globalAndroid.view.View): void;
					public applyViewTransition(viewTransitionId: number, motionController: androidx.constraintlayout.motion.widget.MotionController): boolean;
					public transitionToState(id: number, duration: number): void;
					public updateState(): void;
					public setDelayedApplicationOfInitialState(delayedApply: boolean): void;
					public keyboardNavigationClusterSearch(currentCluster: globalAndroid.view.View, direction: number): globalAndroid.view.View;
					public getProgress(): number;
					public addView(child: globalAndroid.view.View, width: number, height: number): void;
					public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
					public setTransition(transitionId: number): void;
					public addView(child: globalAndroid.view.View, index: number): void;
					public removeView(view: globalAndroid.view.View): void;
					public focusSearch(focused: globalAndroid.view.View, direction: number): globalAndroid.view.View;
					public showContextMenuForChild(originalView: globalAndroid.view.View, x: number, y: number): boolean;
					public requestTransparentRegion(child: globalAndroid.view.View): void;
					public setProgress(pos: number, velocity: number): void;
					public childDrawableStateChanged(child: globalAndroid.view.View): void;
					public isLayoutRequested(): boolean;
					public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
					public onAttachedToWindow(): void;
					public addTransitionListener(listener: androidx.constraintlayout.motion.widget.MotionLayout.TransitionListener): void;
					/** @deprecated */
					public invalidateChild(child: globalAndroid.view.View, dirty: globalAndroid.graphics.Rect): void;
					public focusSearch(direction: number): globalAndroid.view.View;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
					public isLayoutDirectionResolved(): boolean;
					public showContextMenuForChild(originalView: globalAndroid.view.View): boolean;
					/** @deprecated */
					public getDebugMode(showPaths: boolean): void;
					public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
					public touchAnimateTo(touchUpMode: number, position: number, currentVelocity: number): void;
					public setTransition(beginId: number, endId: number): void;
					public requestSendAccessibilityEvent(child: globalAndroid.view.View, event: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
					public transitionToState(id: number, screenWidth: number, screenHeight: number, duration: number): void;
					public updateState(stateId: number, set: androidx.constraintlayout.widget.ConstraintSet): void;
					public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback, type: number): globalAndroid.view.ActionMode;
					public setTransition(transition: androidx.constraintlayout.motion.widget.MotionScene.Transition): void;
					public onStartNestedScroll(child: globalAndroid.view.View, target: globalAndroid.view.View, nestedScrollAxes: number): boolean;
					public isDelayedApplicationOfInitialState(): boolean;
					/** @deprecated */
					public invalidateChildInParent(location: native.Array<number>, dirty: globalAndroid.graphics.Rect): globalAndroid.view.ViewParent;
					public onViewAdded(view: globalAndroid.view.View): void;
					public getConstraintSet(id: number): androidx.constraintlayout.widget.ConstraintSet;
					public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
					public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public getCurrentState(): number;
					public getStartState(): number;
					public fireTransitionCompleted(): void;
					public getTextDirection(): number;
					public requestFitSystemWindows(): void;
					public rebuildScene(): void;
					public onNestedScroll(target: globalAndroid.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number, type: number): void;
					public isAttachedToWindow(): boolean;
					public isViewTransitionEnabled(viewTransitionId: number): boolean;
					public enableTransition(transitionID: number, enable: boolean): void;
					public transitionToState(id: number): void;
					public requestChildRectangleOnScreen(child: globalAndroid.view.View, rectangle: globalAndroid.graphics.Rect, immediate: boolean): boolean;
					public addView(child: globalAndroid.view.View): void;
					public onNestedScroll(target: globalAndroid.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number, type: number, consumed: native.Array<number>): void;
					public canResolveTextDirection(): boolean;
					public isInteractionEnabled(): boolean;
					public updateViewLayout(view: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
					public onInterceptTouchEvent(event: globalAndroid.view.MotionEvent): boolean;
					public toString(): string;
					public loadLayoutDescription(motionScene: number): void;
					public setOnHide(progress: number): void;
					public onNestedPreScroll(target: globalAndroid.view.View, dx: number, dy: number, consumed: native.Array<number>): void;
					public cloneConstraintSet(id: number): androidx.constraintlayout.widget.ConstraintSet;
					public clearChildFocus(child: globalAndroid.view.View): void;
					public createContextMenu(menu: globalAndroid.view.ContextMenu): void;
					public setProgress(pos: number): void;
					public getParentForAccessibility(): globalAndroid.view.ViewParent;
					public addView(child: globalAndroid.view.View, index: number, params: globalAndroid.view.ViewGroup.LayoutParams): void;
					public scheduleTransitionTo(id: number): void;
					public childHasTransientStateChanged(child: globalAndroid.view.View, childHasTransientState: boolean): void;
					public canResolveLayoutDirection(): boolean;
					public onRtlPropertiesChanged(layoutDirection: number): void;
					public rotateTo(id: number, duration: number): void;
					public onNestedScrollAccepted(child: globalAndroid.view.View, target: globalAndroid.view.View, axes: number, type: number): void;
					public onTouchEvent(event: globalAndroid.view.MotionEvent): boolean;
					public getScene(): androidx.constraintlayout.motion.widget.MotionScene;
					public fireTrigger(triggerId: number, positive: boolean, progress: number): void;
					public setTransitionListener(listener: androidx.constraintlayout.motion.widget.MotionLayout.TransitionListener): void;
					public onStopNestedScroll(child: globalAndroid.view.View): void;
					public getNestedScrollAxes(): number;
					public requestChildFocus(child: globalAndroid.view.View, focused: globalAndroid.view.View): void;
					public onNestedPreFling(target: globalAndroid.view.View, velocityX: number, velocityY: number): boolean;
					public getTransition(id: number): androidx.constraintlayout.motion.widget.MotionScene.Transition;
					public onStartNestedScroll(child: globalAndroid.view.View, target: globalAndroid.view.View, axes: number, type: number): boolean;
				}
				export module MotionLayout {
					export class DecelerateInterpolator extends androidx.constraintlayout.motion.widget.MotionInterpolator {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.MotionLayout.DecelerateInterpolator>;
						public getInterpolation(time: number): number;
						public getVelocity(): number;
						public config(velocity: number, position: number, maxAcceleration: number): void;
						public getInterpolation(float0: number): number;
					}
					export class DevModeDraw extends java.lang.Object {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.MotionLayout.DevModeDraw>;
						public draw(canvas: globalAndroid.graphics.Canvas, frameArrayList: java.util.HashMap<globalAndroid.view.View,androidx.constraintlayout.motion.widget.MotionController>, duration: number, debugPath: number): void;
						public drawAll(canvas: globalAndroid.graphics.Canvas, mode: number, keyFrames: number, motionController: androidx.constraintlayout.motion.widget.MotionController): void;
						public constructor(param0: androidx.constraintlayout.motion.widget.MotionLayout);
					}
					export class Model extends java.lang.Object {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.MotionLayout.Model>;
						public measure(widthMeasureSpec: number, heightMeasureSpec: number): void;
						public setMeasuredId(startId: number, endId: number): void;
						public reEvaluateState(): void;
						public build(): void;
						public isNotConfiguredWith(startId: number, endId: number): boolean;
					}
					export class MotionTracker extends java.lang.Object {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.MotionLayout.MotionTracker>;
						/**
						 * Constructs a new instance of the androidx.constraintlayout.motion.widget.MotionLayout() when extending the interface class.
						 */
						public constructor(implementation: {
							recycle(): void;
							clear(): void;
							addMovement(motionEvent0: globalAndroid.view.MotionEvent): void;
							computeCurrentVelocity(int0: number): void;
							computeCurrentVelocity(int0: number, float1: number): void;
							getXVelocity(): number;
							getYVelocity(): number;
							getXVelocity(int0: number): number;
							getYVelocity(int0: number): number;
						});
						public constructor();
						public getYVelocity(int0: number): number;
						public getXVelocity(int0: number): number;
						public getXVelocity(): number;
						public getYVelocity(): number;
						public computeCurrentVelocity(int0: number): void;
						public recycle(): void;
						public clear(): void;
						public computeCurrentVelocity(int0: number, float1: number): void;
						public addMovement(motionEvent0: globalAndroid.view.MotionEvent): void;
					}
					export class MyTracker extends java.lang.Object implements androidx.constraintlayout.motion.widget.MotionLayout.MotionTracker {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.MotionLayout.MyTracker>;
						public computeCurrentVelocity(units: number): void;
						public addMovement(event: globalAndroid.view.MotionEvent): void;
						public static obtain(): androidx.constraintlayout.motion.widget.MotionLayout.MyTracker;
						public getXVelocity(): number;
						public getYVelocity(): number;
						public recycle(): void;
						public clear(): void;
						public getXVelocity(id: number): number;
						public computeCurrentVelocity(units: number, maxVelocity: number): void;
						public getYVelocity(id: number): number;
					}
					export class StateCache extends java.lang.Object {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.MotionLayout.StateCache>;
						public getTransitionState(): globalAndroid.os.Bundle;
						public setVelocity(mVelocity: number): void;
						public setTransitionState(bundle: globalAndroid.os.Bundle): void;
						public setEndState(endState: number): void;
						public setProgress(progress: number): void;
						public setStartState(startState: number): void;
						public recordState(): void;
					}
					export class TransitionListener extends java.lang.Object {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.MotionLayout.TransitionListener>;
						/**
						 * Constructs a new instance of the androidx.constraintlayout.motion.widget.MotionLayout() when extending the interface class.
						 */
						public constructor(implementation: {
							onTransitionStarted(motionLayout0: androidx.constraintlayout.motion.widget.MotionLayout, int1: number, int2: number): void;
							onTransitionChange(motionLayout0: androidx.constraintlayout.motion.widget.MotionLayout, int1: number, int2: number, float3: number): void;
							onTransitionCompleted(motionLayout0: androidx.constraintlayout.motion.widget.MotionLayout, int1: number): void;
							onTransitionTrigger(motionLayout0: androidx.constraintlayout.motion.widget.MotionLayout, int1: number, boolean2: boolean, float3: number): void;
						});
						public constructor();
						public onTransitionStarted(motionLayout0: androidx.constraintlayout.motion.widget.MotionLayout, int1: number, int2: number): void;
						public onTransitionTrigger(motionLayout0: androidx.constraintlayout.motion.widget.MotionLayout, int1: number, boolean2: boolean, float3: number): void;
						public onTransitionCompleted(motionLayout0: androidx.constraintlayout.motion.widget.MotionLayout, int1: number): void;
						public onTransitionChange(motionLayout0: androidx.constraintlayout.motion.widget.MotionLayout, int1: number, int2: number, float3: number): void;
					}
					export class TransitionState {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.MotionLayout.TransitionState>;
						public static UNDEFINED: androidx.constraintlayout.motion.widget.MotionLayout.TransitionState;
						public static SETUP: androidx.constraintlayout.motion.widget.MotionLayout.TransitionState;
						public static MOVING: androidx.constraintlayout.motion.widget.MotionLayout.TransitionState;
						public static FINISHED: androidx.constraintlayout.motion.widget.MotionLayout.TransitionState;
						public static valueOf(name: string): androidx.constraintlayout.motion.widget.MotionLayout.TransitionState;
						public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
						public static values(): native.Array<androidx.constraintlayout.motion.widget.MotionLayout.TransitionState>;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module motion {
			export module widget {
				export class MotionPaths extends java.lang.Comparable<androidx.constraintlayout.motion.widget.MotionPaths> {
					public static class: java.lang.Class<androidx.constraintlayout.motion.widget.MotionPaths>;
					public static TAG: string;
					public static DEBUG: boolean;
					public static OLD_WAY: boolean;
					public configureRelativeTo(toOrbit: androidx.constraintlayout.motion.widget.MotionController): void;
					public constructor();
					public setupRelative(mc: androidx.constraintlayout.motion.widget.MotionController, relative: androidx.constraintlayout.motion.widget.MotionPaths): void;
					public compareTo(o: androidx.constraintlayout.motion.widget.MotionPaths): number;
					public applyParameters(c: androidx.constraintlayout.widget.ConstraintSet.Constraint): void;
					public constructor(parentWidth: number, parentHeight: number, c: androidx.constraintlayout.motion.widget.KeyPosition, startTimePoint: androidx.constraintlayout.motion.widget.MotionPaths, endTimePoint: androidx.constraintlayout.motion.widget.MotionPaths);
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module motion {
			export module widget {
				export class MotionScene extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.motion.widget.MotionScene>;
					public static UNSET: number;
					public static LAYOUT_IGNORE_REQUEST: number;
					public static LAYOUT_HONOR_REQUEST: number;
					public getInterpolator(): globalAndroid.view.animation.Interpolator;
					public onLayout(changed: boolean, left: number, top: number, right: number, bottom: number): void;
					public getTransitionsWithState(stateId: number): java.util.List<androidx.constraintlayout.motion.widget.MotionScene.Transition>;
					public constructor(layout: androidx.constraintlayout.motion.widget.MotionLayout);
					public getTransitionById(id: number): androidx.constraintlayout.motion.widget.MotionScene.Transition;
					public getPathPercent(view: globalAndroid.view.View, position: number): number;
					public lookUpConstraintName(id: number): string;
					public setKeyframe(view: globalAndroid.view.View, position: number, name: string, value: any): void;
					public getKeyFrames(motionController: androidx.constraintlayout.motion.widget.MotionController): void;
					public enableViewTransition(id: number, enable: boolean): void;
					public gatPathMotionArc(): number;
					public getConstraintSetIds(): native.Array<number>;
					public getConstraintSet(context: globalAndroid.content.Context, id: string): androidx.constraintlayout.widget.ConstraintSet;
					public getDuration(): number;
					public getStaggered(): number;
					public validateLayout(layout: androidx.constraintlayout.motion.widget.MotionLayout): boolean;
					public lookUpConstraintId(id: string): number;
					public isViewTransitionEnabled(id: number): boolean;
					public setRtl(rtl: boolean): void;
					public static stripID(id: string): string;
					public addTransition(transition: androidx.constraintlayout.motion.widget.MotionScene.Transition): void;
					public setConstraintSet(id: number, set: androidx.constraintlayout.widget.ConstraintSet): void;
					public setTransition(transition: androidx.constraintlayout.motion.widget.MotionScene.Transition): void;
					public bestTransitionFor(currentState: number, dx: number, dy: number, lastTouchDown: globalAndroid.view.MotionEvent): androidx.constraintlayout.motion.widget.MotionScene.Transition;
					public setDuration(duration: number): void;
					public removeTransition(transition: androidx.constraintlayout.motion.widget.MotionScene.Transition): void;
					public applyViewTransition(viewTransitionId: number, motionController: androidx.constraintlayout.motion.widget.MotionController): boolean;
					public viewTransition(id: number, view: native.Array<globalAndroid.view.View>): void;
					public getDefinedTransitions(): java.util.ArrayList<androidx.constraintlayout.motion.widget.MotionScene.Transition>;
					public disableAutoTransition(disable: boolean): void;
					public addOnClickListeners(motionLayout: androidx.constraintlayout.motion.widget.MotionLayout, currentState: number): void;
				}
				export module MotionScene {
					export class Transition extends java.lang.Object {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.MotionScene.Transition>;
						public static AUTO_NONE: number;
						public static AUTO_JUMP_TO_START: number;
						public static AUTO_JUMP_TO_END: number;
						public static AUTO_ANIMATE_TO_START: number;
						public static AUTO_ANIMATE_TO_END: number;
						public getOnClickList(): java.util.List<androidx.constraintlayout.motion.widget.MotionScene.Transition.TransitionOnClick>;
						public setAutoTransition(type: number): void;
						public debugString(context: globalAndroid.content.Context): string;
						public isTransitionFlag(flag: number): boolean;
						/** @deprecated */
						public setEnable(enable: boolean): void;
						public addOnClick(id: number, action: number): void;
						public getPathMotionArc(): number;
						public getStartConstraintSetId(): number;
						public setEnabled(enable: boolean): void;
						public getEndConstraintSetId(): number;
						public addOnClick(context: globalAndroid.content.Context, parser: org.xmlpull.v1.XmlPullParser): void;
						public setLayoutDuringTransition(mode: number): void;
						public getLayoutDuringTransition(): number;
						public constructor(id: number, motionScene: androidx.constraintlayout.motion.widget.MotionScene, constraintSetStartId: number, constraintSetEndId: number);
						public getTouchResponse(): androidx.constraintlayout.motion.widget.TouchResponse;
						public setDuration(duration: number): void;
						public getDuration(): number;
						public addKeyFrame(keyFrames: androidx.constraintlayout.motion.widget.KeyFrames): void;
						public setStagger(stagger: number): void;
						public isEnabled(): boolean;
						public getId(): number;
						public getStagger(): number;
						public setOnTouchUp(touchUpMode: number): void;
						public getKeyFrameList(): java.util.List<androidx.constraintlayout.motion.widget.KeyFrames>;
						public setInterpolatorInfo(interpolator: number, interpolatorString: string, interpolatorID: number): void;
						public setOnSwipe(onSwipe: androidx.constraintlayout.motion.widget.OnSwipe): void;
						public removeOnClick(id: number): void;
						public setPathMotionArc(arcMode: number): void;
						public setTransitionFlag(flag: number): void;
						public getAutoTransition(): number;
					}
					export module Transition {
						export class TransitionOnClick extends java.lang.Object implements globalAndroid.view.View.OnClickListener {
							public static class: java.lang.Class<androidx.constraintlayout.motion.widget.MotionScene.Transition.TransitionOnClick>;
							public static ANIM_TO_END: number;
							public static ANIM_TOGGLE: number;
							public static ANIM_TO_START: number;
							public static JUMP_TO_END: number;
							public static JUMP_TO_START: number;
							public constructor(context: globalAndroid.content.Context, transition: androidx.constraintlayout.motion.widget.MotionScene.Transition, parser: org.xmlpull.v1.XmlPullParser);
							public onClick(view: globalAndroid.view.View): void;
							public removeOnClickListeners(motionLayout: androidx.constraintlayout.motion.widget.MotionLayout): void;
							public constructor(transition: androidx.constraintlayout.motion.widget.MotionScene.Transition, id: number, action: number);
							public addOnClickListeners(motionLayout: androidx.constraintlayout.motion.widget.MotionLayout, currentState: number, transition: androidx.constraintlayout.motion.widget.MotionScene.Transition): void;
						}
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module motion {
			export module widget {
				export class OnSwipe extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.motion.widget.OnSwipe>;
					public static COMPLETE_MODE_CONTINUOUS_VELOCITY: number;
					public static COMPLETE_MODE_SPRING: number;
					public static SPRING_BOUNDARY_OVERSHOOT: number;
					public static SPRING_BOUNDARY_BOUNCESTART: number;
					public static SPRING_BOUNDARY_BOUNCEEND: number;
					public static SPRING_BOUNDARY_BOUNCEBOTH: number;
					public static DRAG_UP: number;
					public static DRAG_DOWN: number;
					public static DRAG_LEFT: number;
					public static DRAG_RIGHT: number;
					public static DRAG_START: number;
					public static DRAG_END: number;
					public static DRAG_CLOCKWISE: number;
					public static DRAG_ANTICLOCKWISE: number;
					public static FLAG_DISABLE_POST_SCROLL: number;
					public static FLAG_DISABLE_SCROLL: number;
					public static SIDE_TOP: number;
					public static SIDE_LEFT: number;
					public static SIDE_RIGHT: number;
					public static SIDE_BOTTOM: number;
					public static SIDE_MIDDLE: number;
					public static SIDE_START: number;
					public static SIDE_END: number;
					public static ON_UP_AUTOCOMPLETE: number;
					public static ON_UP_AUTOCOMPLETE_TO_START: number;
					public static ON_UP_AUTOCOMPLETE_TO_END: number;
					public static ON_UP_STOP: number;
					public static ON_UP_DECELERATE: number;
					public static ON_UP_DECELERATE_AND_COMPLETE: number;
					public static ON_UP_NEVER_TO_START: number;
					public static ON_UP_NEVER_TO_END: number;
					public setMoveWhenScrollAtTop(moveWhenScrollAtTop: boolean): androidx.constraintlayout.motion.widget.OnSwipe;
					public getMaxVelocity(): number;
					public getDragThreshold(): number;
					public setTouchAnchorId(side: number): androidx.constraintlayout.motion.widget.OnSwipe;
					public setTouchRegionId(side: number): androidx.constraintlayout.motion.widget.OnSwipe;
					public setRotateCenter(rotationCenterId: number): androidx.constraintlayout.motion.widget.OnSwipe;
					public getSpringMass(): number;
					public setTouchAnchorSide(side: number): androidx.constraintlayout.motion.widget.OnSwipe;
					public setDragDirection(dragDirection: number): androidx.constraintlayout.motion.widget.OnSwipe;
					public setMaxAcceleration(maxAcceleration: number): androidx.constraintlayout.motion.widget.OnSwipe;
					public getSpringBoundary(): number;
					public getTouchAnchorId(): number;
					public getLimitBoundsTo(): number;
					public setMaxVelocity(maxVelocity: number): androidx.constraintlayout.motion.widget.OnSwipe;
					public setOnTouchUp(mode: number): androidx.constraintlayout.motion.widget.OnSwipe;
					public getSpringStiffness(): number;
					public setDragThreshold(dragThreshold: number): androidx.constraintlayout.motion.widget.OnSwipe;
					public setSpringMass(springMass: number): androidx.constraintlayout.motion.widget.OnSwipe;
					public getDragDirection(): number;
					public setAutoCompleteMode(autoCompleteMode: number): void;
					public constructor();
					public setSpringBoundary(springBoundary: number): androidx.constraintlayout.motion.widget.OnSwipe;
					public getSpringDamping(): number;
					public setNestedScrollFlags(flags: number): androidx.constraintlayout.motion.widget.OnSwipe;
					public getMoveWhenScrollAtTop(): boolean;
					public getAutoCompleteMode(): number;
					public getTouchRegionId(): number;
					public getTouchAnchorSide(): number;
					public getMaxAcceleration(): number;
					public setSpringStiffness(springStiffness: number): androidx.constraintlayout.motion.widget.OnSwipe;
					public getOnTouchUp(): number;
					public setLimitBoundsTo(id: number): androidx.constraintlayout.motion.widget.OnSwipe;
					public getDragScale(): number;
					public getSpringStopThreshold(): number;
					public getNestedScrollFlags(): number;
					public setSpringDamping(springDamping: number): androidx.constraintlayout.motion.widget.OnSwipe;
					public setDragScale(dragScale: number): androidx.constraintlayout.motion.widget.OnSwipe;
					public setSpringStopThreshold(springStopThreshold: number): androidx.constraintlayout.motion.widget.OnSwipe;
					public getRotationCenterId(): number;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module motion {
			export module widget {
				export class ProxyInterface extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.motion.widget.ProxyInterface>;
					/**
					 * Constructs a new instance of the androidx.constraintlayout.motion.widget.ProxyInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						setToolPosition(float0: number): void;
						getTransitionTimeMs(): number;
						setKeyFramePosition(object0: any, int1: number, int2: number, float3: number, float4: number): boolean;
						designAccess(int0: number, string1: string, object2: any, floats3: native.Array<number>, int4: number, floats5: native.Array<number>, int6: number): number;
						setAttributes(int0: number, string1: string, object2: any, object3: any): void;
						getKeyFramePosition(object0: any, int1: number, float2: number, float3: number): number;
						setKeyFrame(object0: any, int1: number, string2: string, object3: any): void;
						getPositionKeyframe(object0: any, object1: any, float2: number, float3: number, strings4: native.Array<string>, floats5: native.Array<number>): java.lang.Boolean;
						getKeyframeAtLocation(object0: any, float1: number, float2: number): any;
					});
					public constructor();
					public getKeyFramePosition(object0: any, int1: number, float2: number, float3: number): number;
					public getTransitionTimeMs(): number;
					public setToolPosition(float0: number): void;
					public setAttributes(int0: number, string1: string, object2: any, object3: any): void;
					public getPositionKeyframe(object0: any, object1: any, float2: number, float3: number, strings4: native.Array<string>, floats5: native.Array<number>): java.lang.Boolean;
					public getKeyframeAtLocation(object0: any, float1: number, float2: number): any;
					public setKeyFramePosition(object0: any, int1: number, int2: number, float3: number, float4: number): boolean;
					public setKeyFrame(object0: any, int1: number, string2: string, object3: any): void;
					public designAccess(int0: number, string1: string, object2: any, floats3: native.Array<number>, int4: number, floats5: native.Array<number>, int6: number): number;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module motion {
			export module widget {
				export class TouchResponse extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.motion.widget.TouchResponse>;
					public static COMPLETE_MODE_CONTINUOUS_VELOCITY: number;
					public static COMPLETE_MODE_SPRING: number;
					public getMaxVelocity(): number;
					public getAutoCompleteMode(): number;
					public getFlags(): number;
					public getSpringMass(): number;
					public setMaxVelocity(velocity: number): void;
					public constructor(layout: androidx.constraintlayout.motion.widget.MotionLayout, onSwipe: androidx.constraintlayout.motion.widget.OnSwipe);
					public getSpringBoundary(): number;
					public setMaxAcceleration(acceleration: number): void;
					public setRTL(rtl: boolean): void;
					public setTouchAnchorLocation(x: number, y: number): void;
					public toString(): string;
					public getSpringStiffness(): number;
					public getSpringStopThreshold(): number;
					public setTouchUpMode(touchUpMode: number): void;
					public getAnchorId(): number;
					public getSpringDamping(): number;
					public setAnchorId(id: number): void;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module motion {
			export module widget {
				export abstract class TransitionAdapter extends java.lang.Object implements androidx.constraintlayout.motion.widget.MotionLayout.TransitionListener {
					public static class: java.lang.Class<androidx.constraintlayout.motion.widget.TransitionAdapter>;
					public onTransitionStarted(motionLayout: androidx.constraintlayout.motion.widget.MotionLayout, startId: number, endId: number): void;
					public constructor();
					public onTransitionCompleted(motionLayout: androidx.constraintlayout.motion.widget.MotionLayout, currentId: number): void;
					public onTransitionChange(motionLayout: androidx.constraintlayout.motion.widget.MotionLayout, startId: number, endId: number, progress: number): void;
					public onTransitionTrigger(motionLayout: androidx.constraintlayout.motion.widget.MotionLayout, triggerId: number, positive: boolean, progress: number): void;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module motion {
			export module widget {
				export class TransitionBuilder extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.motion.widget.TransitionBuilder>;
					public constructor();
					public static validate(layout: androidx.constraintlayout.motion.widget.MotionLayout): void;
					public static buildTransition(scene: androidx.constraintlayout.motion.widget.MotionScene, transitionId: number, startConstraintSetId: number, startConstraintSet: androidx.constraintlayout.widget.ConstraintSet, endConstraintSetId: number, endConstraintSet: androidx.constraintlayout.widget.ConstraintSet): androidx.constraintlayout.motion.widget.MotionScene.Transition;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module motion {
			export module widget {
				export class ViewTransition extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.motion.widget.ViewTransition>;
					public static VIEW_TRANSITION_TAG: string;
					public static KEY_FRAME_SET_TAG: string;
					public static CONSTRAINT_OVERRIDE: string;
					public static CUSTOM_ATTRIBUTE: string;
					public static CUSTOM_METHOD: string;
					public static ONSTATE_ACTION_DOWN: number;
					public static ONSTATE_ACTION_UP: number;
					public static ONSTATE_ACTION_DOWN_UP: number;
					public static ONSTATE_SHARED_VALUE_SET: number;
					public static ONSTATE_SHARED_VALUE_UNSET: number;
					public toString(): string;
					public setSharedValueCurrent(sharedValueCurrent: number): void;
					public getSharedValue(): number;
					public getSharedValueID(): number;
					public setSharedValueID(sharedValueID: number): void;
					public getSharedValueCurrent(): number;
					public getStateTransition(): number;
					public setSharedValue(sharedValue: number): void;
					public setStateTransition(stateTransition: number): void;
				}
				export module ViewTransition {
					export class Animate extends java.lang.Object {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.ViewTransition.Animate>;
						public reactTo(action: number, x: number, y: number): void;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module motion {
			export module widget {
				export class ViewTransitionController extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.motion.widget.ViewTransitionController>;
					public constructor(layout: androidx.constraintlayout.motion.widget.MotionLayout);
					public add(viewTransition: androidx.constraintlayout.motion.widget.ViewTransition): void;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module utils {
			export module widget {
				export class ImageFilterButton extends androidx.appcompat.widget.AppCompatImageButton {
					public static class: java.lang.Class<androidx.constraintlayout.utils.widget.ImageFilterButton>;
					public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public setImageResource(resId: number): void;
					public sendAccessibilityEvent(eventType: number): void;
					public setBrightness(brightness: number): void;
					public setContrast(contrast: number): void;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
					public draw(canvas: globalAndroid.graphics.Canvas): void;
					public setImagePanX(pan: number): void;
					public setSupportBackgroundTintList(tint: globalAndroid.content.res.ColorStateList): void;
					public getSupportImageTintMode(): globalAndroid.graphics.PorterDuff.Mode;
					public getImageZoom(): number;
					public getImageRotate(): number;
					public setRoundPercent(round: number): void;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
					public setAltImageResource(resId: number): void;
					public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
					public getWarmth(): number;
					public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
					public getRound(): number;
					public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
					public getRoundPercent(): number;
					public layout(l: number, t: number, r: number, b: number): void;
					public setSupportImageTintMode(tintMode: globalAndroid.graphics.PorterDuff.Mode): void;
					public setWarmth(warmth: number): void;
					public setImageRotate(rotation: number): void;
					public setSupportBackgroundTintMode(tintMode: globalAndroid.graphics.PorterDuff.Mode): void;
					public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
					public setCrossfade(crossfade: number): void;
					public getCrossfade(): number;
					public setImageZoom(zoom: number): void;
					public setRound(round: number): void;
					public getSupportBackgroundTintList(): globalAndroid.content.res.ColorStateList;
					public getContrast(): number;
					public getSupportBackgroundTintMode(): globalAndroid.graphics.PorterDuff.Mode;
					public invalidateDrawable(dr: globalAndroid.graphics.drawable.Drawable): void;
					public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
					public getImagePanY(): number;
					public setImagePanY(pan: number): void;
					public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
					public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public getSupportImageTintList(): globalAndroid.content.res.ColorStateList;
					public setImageDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
					public constructor(context: globalAndroid.content.Context);
					public getSaturation(): number;
					public setSupportImageTintList(tint: globalAndroid.content.res.ColorStateList): void;
					public getImagePanX(): number;
					public setSaturation(saturation: number): void;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module utils {
			export module widget {
				export class ImageFilterView extends androidx.appcompat.widget.AppCompatImageView {
					public static class: java.lang.Class<androidx.constraintlayout.utils.widget.ImageFilterView>;
					public setBrightness(brightness: number): void;
					public draw(canvas: globalAndroid.graphics.Canvas): void;
					public getImageZoom(): number;
					public getImageRotate(): number;
					public setRoundPercent(round: number): void;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
					public setAltImageResource(resId: number): void;
					public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public getWarmth(): number;
					public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
					public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
					public setCrossfade(crossfade: number): void;
					public getCrossfade(): number;
					public setRound(round: number): void;
					public getSupportBackgroundTintList(): globalAndroid.content.res.ColorStateList;
					public getContrast(): number;
					public getSupportBackgroundTintMode(): globalAndroid.graphics.PorterDuff.Mode;
					public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
					public getImagePanY(): number;
					public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
					public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public getSupportImageTintList(): globalAndroid.content.res.ColorStateList;
					public constructor(context: globalAndroid.content.Context);
					public getImagePanX(): number;
					public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public setImageResource(resId: number): void;
					public sendAccessibilityEvent(eventType: number): void;
					public setContrast(contrast: number): void;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
					public setImagePanX(pan: number): void;
					public setSupportBackgroundTintList(tint: globalAndroid.content.res.ColorStateList): void;
					public getSupportImageTintMode(): globalAndroid.graphics.PorterDuff.Mode;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
					public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
					public getRound(): number;
					public getRoundPercent(): number;
					public layout(l: number, t: number, r: number, b: number): void;
					public setSupportImageTintMode(tintMode: globalAndroid.graphics.PorterDuff.Mode): void;
					public setWarmth(warmth: number): void;
					public setImageRotate(rotation: number): void;
					public setSupportBackgroundTintMode(tintMode: globalAndroid.graphics.PorterDuff.Mode): void;
					public setImageZoom(zoom: number): void;
					public invalidateDrawable(dr: globalAndroid.graphics.drawable.Drawable): void;
					public setImagePanY(pan: number): void;
					public setImageDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
					public getSaturation(): number;
					public setSupportImageTintList(tint: globalAndroid.content.res.ColorStateList): void;
					public getBrightness(): number;
					public setSaturation(saturation: number): void;
				}
				export module ImageFilterView {
					export class ImageMatrix extends java.lang.Object {
						public static class: java.lang.Class<androidx.constraintlayout.utils.widget.ImageFilterView.ImageMatrix>;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module utils {
			export module widget {
				export class MockView extends globalAndroid.view.View {
					public static class: java.lang.Class<androidx.constraintlayout.utils.widget.MockView>;
					public mText: string;
					public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public sendAccessibilityEvent(eventType: number): void;
					public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
					public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
					public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
					public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
					public onDraw(canvas: globalAndroid.graphics.Canvas): void;
					public constructor(context: globalAndroid.content.Context);
					public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
					public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
					public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module utils {
			export module widget {
				export class MotionButton extends androidx.appcompat.widget.AppCompatButton {
					public static class: java.lang.Class<androidx.constraintlayout.utils.widget.MotionButton>;
					public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public getAutoSizeTextAvailableSizes(): native.Array<number>;
					public setSupportCompoundDrawablesTintList(tint: globalAndroid.content.res.ColorStateList): void;
					public sendAccessibilityEvent(eventType: number): void;
					public getAutoSizeStepGranularity(): number;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
					public draw(canvas: globalAndroid.graphics.Canvas): void;
					public setSupportBackgroundTintList(tint: globalAndroid.content.res.ColorStateList): void;
					public setRoundPercent(round: number): void;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
					public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
					public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
					public getRound(): number;
					public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
					public getRoundPercent(): number;
					public setSupportBackgroundTintMode(tintMode: globalAndroid.graphics.PorterDuff.Mode): void;
					public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
					public setAutoSizeTextTypeWithDefaults(autoSizeTextType: number): void;
					public onPreDraw(): boolean;
					public setRound(round: number): void;
					public setAutoSizeTextTypeUniformWithPresetSizes(presetSizes: native.Array<number>, unit: number): void;
					public getSupportBackgroundTintList(): globalAndroid.content.res.ColorStateList;
					public getSupportBackgroundTintMode(): globalAndroid.graphics.PorterDuff.Mode;
					public getAutoSizeTextType(): number;
					public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
					public getSupportCompoundDrawablesTintMode(): globalAndroid.graphics.PorterDuff.Mode;
					public setAutoSizeTextTypeUniformWithConfiguration(autoSizeMinTextSize: number, autoSizeMaxTextSize: number, autoSizeStepGranularity: number, unit: number): void;
					public setSupportCompoundDrawablesTintMode(tintMode: globalAndroid.graphics.PorterDuff.Mode): void;
					public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
					public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public getAutoSizeMaxTextSize(): number;
					public constructor(context: globalAndroid.content.Context);
					public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
					public getSupportCompoundDrawablesTintList(): globalAndroid.content.res.ColorStateList;
					public getAutoSizeMinTextSize(): number;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module utils {
			export module widget {
				export class MotionLabel extends globalAndroid.view.View implements androidx.constraintlayout.motion.widget.FloatLayout {
					public static class: java.lang.Class<androidx.constraintlayout.utils.widget.MotionLabel>;
					public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public sendAccessibilityEvent(eventType: number): void;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
					public setTextBackgroundPanY(pan: number): void;
					public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
					public getTextPanY(): number;
					public setRoundPercent(round: number): void;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
					public setTypeface(tf: globalAndroid.graphics.Typeface): void;
					public setTextPanY(textPanY: number): void;
					public getTextureWidth(): number;
					public setTextFillColor(color: number): void;
					public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
					public getTextBackgroundRotate(): number;
					public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
					public getRound(): number;
					public getTextPanX(): number;
					public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
					public getRoundPercent(): number;
					public layout(l: number, t: number, r: number, b: number): void;
					public getTypeface(): globalAndroid.graphics.Typeface;
					public getScaleFromTextSize(): number;
					public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
					public setTextOutlineThickness(width: number): void;
					public setTextSize(size: number): void;
					public setRound(round: number): void;
					public getTextOutlineColor(): number;
					public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
					public getTextureHeight(): number;
					public getTextBackgroundPanX(): number;
					public setScaleFromTextSize(size: number): void;
					public setGravity(gravity: number): void;
					public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
					public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public setTextBackgroundPanX(pan: number): void;
					public onDraw(canvas: globalAndroid.graphics.Canvas): void;
					public constructor(context: globalAndroid.content.Context);
					public setTextureWidth(mTextureWidth: number): void;
					public setTextureHeight(mTextureHeight: number): void;
					public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
					public setTextOutlineColor(color: number): void;
					public getTextBackgroundZoom(): number;
					public setTextBackgroundZoom(zoom: number): void;
					public setTextBackgroundRotate(rotation: number): void;
					public setTextPanX(textPanX: number): void;
					public setText(text: string): void;
					public getTextBackgroundPanY(): number;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module utils {
			export module widget {
				export class MotionTelltales extends androidx.constraintlayout.utils.widget.MockView {
					public static class: java.lang.Class<androidx.constraintlayout.utils.widget.MotionTelltales>;
					public onLayout(changed: boolean, left: number, top: number, right: number, bottom: number): void;
					public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public sendAccessibilityEvent(eventType: number): void;
					public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
					public onAttachedToWindow(): void;
					public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
					public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
					public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
					public onDraw(canvas: globalAndroid.graphics.Canvas): void;
					public constructor(context: globalAndroid.content.Context);
					public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
					public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
					public setText(text: string): void;
					public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module widget {
			export class Barrier extends androidx.constraintlayout.widget.ConstraintHelper {
				public static class: java.lang.Class<androidx.constraintlayout.widget.Barrier>;
				public static LEFT: number;
				public static TOP: number;
				public static RIGHT: number;
				public static BOTTOM: number;
				public static START: number;
				public static END: number;
				public constructor(context: globalAndroid.content.Context);
				public getType(): number;
				public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
				public init(attrs: globalAndroid.util.AttributeSet): void;
				public loadParameters(constraint: androidx.constraintlayout.widget.ConstraintSet.Constraint, child: androidx.constraintlayout.core.widgets.HelperWidget, layoutParams: androidx.constraintlayout.widget.ConstraintLayout.LayoutParams, mapIdToWidget: globalAndroid.util.SparseArray<androidx.constraintlayout.core.widgets.ConstraintWidget>): void;
				/** @deprecated */
				public allowsGoneWidget(): boolean;
				public setType(type: number): void;
				public setDpMargin(margin: number): void;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
				public sendAccessibilityEvent(eventType: number): void;
				public setMargin(margin: number): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public resolveRtl(widget: androidx.constraintlayout.core.widgets.ConstraintWidget, isRtl: boolean): void;
				public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public setAllowsGoneWidget(supportGone: boolean): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
				public getAllowsGoneWidget(): boolean;
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public getMargin(): number;
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module widget {
			export class ConstraintAttribute extends java.lang.Object {
				public static class: java.lang.Class<androidx.constraintlayout.widget.ConstraintAttribute>;
				public setStringValue(value: string): void;
				public getValueToInterpolate(): number;
				public getType(): androidx.constraintlayout.widget.ConstraintAttribute.AttributeType;
				public constructor(name: string, attributeType: androidx.constraintlayout.widget.ConstraintAttribute.AttributeType);
				public static extractAttributes(base: java.util.HashMap<string,androidx.constraintlayout.widget.ConstraintAttribute>, view: globalAndroid.view.View): java.util.HashMap<string,androidx.constraintlayout.widget.ConstraintAttribute>;
				public setColorValue(value: number): void;
				public getValuesToInterpolate(ret: native.Array<number>): void;
				public isContinuous(): boolean;
				public setIntValue(value: number): void;
				public setValue(value: native.Array<number>): void;
				public setFloatValue(value: number): void;
				public constructor(source: androidx.constraintlayout.widget.ConstraintAttribute, value: any);
				public static setAttributes(view: globalAndroid.view.View, map: java.util.HashMap<string,androidx.constraintlayout.widget.ConstraintAttribute>): void;
				public constructor(name: string, attributeType: androidx.constraintlayout.widget.ConstraintAttribute.AttributeType, value: any, method: boolean);
				public setValue(value: any): void;
				public diff(constraintAttribute: androidx.constraintlayout.widget.ConstraintAttribute): boolean;
				public setInterpolatedValue(view: globalAndroid.view.View, value: native.Array<number>): void;
				public static parse(context: globalAndroid.content.Context, parser: org.xmlpull.v1.XmlPullParser, custom: java.util.HashMap<string,androidx.constraintlayout.widget.ConstraintAttribute>): void;
				public numberOfInterpolatedValues(): number;
				public applyCustom(view: globalAndroid.view.View): void;
			}
			export module ConstraintAttribute {
				export class AttributeType {
					public static class: java.lang.Class<androidx.constraintlayout.widget.ConstraintAttribute.AttributeType>;
					public static INT_TYPE: androidx.constraintlayout.widget.ConstraintAttribute.AttributeType;
					public static FLOAT_TYPE: androidx.constraintlayout.widget.ConstraintAttribute.AttributeType;
					public static COLOR_TYPE: androidx.constraintlayout.widget.ConstraintAttribute.AttributeType;
					public static COLOR_DRAWABLE_TYPE: androidx.constraintlayout.widget.ConstraintAttribute.AttributeType;
					public static STRING_TYPE: androidx.constraintlayout.widget.ConstraintAttribute.AttributeType;
					public static BOOLEAN_TYPE: androidx.constraintlayout.widget.ConstraintAttribute.AttributeType;
					public static DIMENSION_TYPE: androidx.constraintlayout.widget.ConstraintAttribute.AttributeType;
					public static REFERENCE_TYPE: androidx.constraintlayout.widget.ConstraintAttribute.AttributeType;
					public static values(): native.Array<androidx.constraintlayout.widget.ConstraintAttribute.AttributeType>;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static valueOf(name: string): androidx.constraintlayout.widget.ConstraintAttribute.AttributeType;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module widget {
			export abstract class ConstraintHelper extends globalAndroid.view.View {
				public static class: java.lang.Class<androidx.constraintlayout.widget.ConstraintHelper>;
				public mIds: native.Array<number>;
				public mCount: number;
				public myContext: globalAndroid.content.Context;
				public mHelperWidget: androidx.constraintlayout.core.widgets.Helper;
				public mUseViewMeasure: boolean;
				public mReferenceIds: string;
				public mReferenceTags: string;
				public mMap: java.util.HashMap<java.lang.Integer,string>;
				public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
				public constructor(context: globalAndroid.content.Context);
				public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
				public init(attrs: globalAndroid.util.AttributeSet): void;
				public getReferencedIds(): native.Array<number>;
				public getViews(layout: androidx.constraintlayout.widget.ConstraintLayout): native.Array<globalAndroid.view.View>;
				public loadParameters(constraint: androidx.constraintlayout.widget.ConstraintSet.Constraint, child: androidx.constraintlayout.core.widgets.HelperWidget, layoutParams: androidx.constraintlayout.widget.ConstraintLayout.LayoutParams, mapIdToWidget: globalAndroid.util.SparseArray<androidx.constraintlayout.core.widgets.ConstraintWidget>): void;
				public setTag(key: number, tag: any): void;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
				public removeView(view: globalAndroid.view.View): number;
				public updatePostLayout(container: androidx.constraintlayout.widget.ConstraintLayout): void;
				public updatePostConstraints(container: androidx.constraintlayout.widget.ConstraintLayout): void;
				public sendAccessibilityEvent(eventType: number): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
				public addView(view: globalAndroid.view.View): void;
				public setIds(idList: string): void;
				public applyLayoutFeatures(): void;
				public containsId(id: number): boolean;
				public updatePreLayout(container: androidx.constraintlayout.core.widgets.ConstraintWidgetContainer, helper: androidx.constraintlayout.core.widgets.Helper, map: globalAndroid.util.SparseArray<androidx.constraintlayout.core.widgets.ConstraintWidget>): void;
				public updatePostMeasure(container: androidx.constraintlayout.widget.ConstraintLayout): void;
				public applyLayoutFeatures(container: androidx.constraintlayout.widget.ConstraintLayout): void;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public resolveRtl(widget: androidx.constraintlayout.core.widgets.ConstraintWidget, isRtl: boolean): void;
				public updatePreLayout(container: androidx.constraintlayout.widget.ConstraintLayout): void;
				public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public setTag(tag: any): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
				public validateParams(): void;
				public updatePreDraw(container: androidx.constraintlayout.widget.ConstraintLayout): void;
				public indexFromId(id: number): number;
				public setReferencedIds(ids: native.Array<number>): void;
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public applyLayoutFeaturesInConstraintSet(container: androidx.constraintlayout.widget.ConstraintLayout): void;
				public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public setReferenceTags(tagList: string): void;
				public onAttachedToWindow(): void;
				public onDraw(canvas: globalAndroid.graphics.Canvas): void;
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module widget {
			export class ConstraintLayout extends globalAndroid.view.ViewGroup {
				public static class: java.lang.Class<androidx.constraintlayout.widget.ConstraintLayout>;
				public static VERSION: string;
				public mLayoutWidget: androidx.constraintlayout.core.widgets.ConstraintWidgetContainer;
				public mDirtyHierarchy: boolean;
				public mConstraintLayoutSpec: androidx.constraintlayout.widget.ConstraintLayoutStates;
				public static DESIGN_INFO_ID: number;
				/** @deprecated */
				public invalidateChild(child: globalAndroid.view.View, dirty: globalAndroid.graphics.Rect): void;
				public focusSearch(direction: number): globalAndroid.view.View;
				public resolveSystem(layout: androidx.constraintlayout.core.widgets.ConstraintWidgetContainer, optimizationLevel: number, widthMeasureSpec: number, heightMeasureSpec: number): void;
				public childDrawableStateChanged(child: globalAndroid.view.View): void;
				public onStopNestedScroll(child: globalAndroid.view.View): void;
				public getMaxHeight(): number;
				public isLayoutRequested(): boolean;
				public onNestedPrePerformAccessibilityAction(target: globalAndroid.view.View, action: number, bundle2: globalAndroid.os.Bundle): boolean;
				public resolveMeasuredDimension(widthMeasureSpec: number, heightMeasureSpec: number, measuredWidth: number, measuredHeight: number, isWidthMeasuredTooSmall: boolean, isHeightMeasuredTooSmall: boolean): void;
				public getTextDirection(): number;
				public applyConstraintsFromLayoutParams(isInEditMode: boolean, child: globalAndroid.view.View, widget: androidx.constraintlayout.core.widgets.ConstraintWidget, layoutParams: androidx.constraintlayout.widget.ConstraintLayout.LayoutParams, idToWidget: globalAndroid.util.SparseArray<androidx.constraintlayout.core.widgets.ConstraintWidget>): void;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
				public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				/** @deprecated */
				public invalidateChildInParent(location: native.Array<number>, dirty: globalAndroid.graphics.Rect): globalAndroid.view.ViewParent;
				public getParentForAccessibility(): globalAndroid.view.ViewParent;
				public onNestedFling(target: globalAndroid.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
				public generateLayoutParams(attrs: globalAndroid.util.AttributeSet): globalAndroid.view.ViewGroup.LayoutParams;
				public keyboardNavigationClusterSearch(currentCluster: globalAndroid.view.View, direction: number): globalAndroid.view.View;
				public onLayout(changed: boolean, left: number, top: number, right: number, bottom: number): void;
				public setId(id: number): void;
				public isTextDirectionResolved(): boolean;
				public generateLayoutParams(attrs: globalAndroid.util.AttributeSet): androidx.constraintlayout.widget.ConstraintLayout.LayoutParams;
				public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
				public setMinHeight(value: number): void;
				public showContextMenuForChild(originalView: globalAndroid.view.View): boolean;
				public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public setState(id: number, screenWidth: number, screenHeight: number): void;
				public recomputeViewAttributes(child: globalAndroid.view.View): void;
				public isLayoutDirectionResolved(): boolean;
				public setConstraintSet(set: androidx.constraintlayout.widget.ConstraintSet): void;
				public fillMetrics(metrics: androidx.constraintlayout.core.Metrics): void;
				public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onLayout(boolean0: boolean, int1: number, int2: number, int3: number, int4: number): void;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
				public updateViewLayout(view: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public onNestedScroll(target: globalAndroid.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
				public setSelfDimensionBehaviour(layout: androidx.constraintlayout.core.widgets.ConstraintWidgetContainer, widthMode: number, widthSize: number, heightMode: number, heightSize: number): void;
				public focusSearch(focused: globalAndroid.view.View, direction: number): globalAndroid.view.View;
				/** @deprecated */
				public requestFitSystemWindows(): void;
				public forceLayout(): void;
				public showContextMenuForChild(originalView: globalAndroid.view.View, x: number, y: number): boolean;
				public bringChildToFront(child: globalAndroid.view.View): void;
				public clearChildFocus(child: globalAndroid.view.View): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public addView(child: globalAndroid.view.View, index: number, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public setMinWidth(value: number): void;
				public getParent(): globalAndroid.view.ViewParent;
				public constructor(context: globalAndroid.content.Context);
				public checkLayoutParams(p: globalAndroid.view.ViewGroup.LayoutParams): boolean;
				public onNestedScrollAccepted(child: globalAndroid.view.View, target: globalAndroid.view.View, axes: number): void;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
				public generateDefaultLayoutParams(): androidx.constraintlayout.widget.ConstraintLayout.LayoutParams;
				public sendAccessibilityEvent(eventType: number): void;
				public addView(child: globalAndroid.view.View, index: number): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
				public requestFitSystemWindows(): void;
				public static getSharedValues(): androidx.constraintlayout.widget.SharedValues;
				public getOptimizationLevel(): number;
				public setMaxWidth(value: number): void;
				public getDesignInformation(type: number, value: any): any;
				public isRtl(): boolean;
				public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback, type: number): globalAndroid.view.ActionMode;
				public getTextAlignment(): number;
				public setDesignInformation(type: number, value1: any, value2: any): void;
				public generateLayoutParams(p: globalAndroid.view.ViewGroup.LayoutParams): globalAndroid.view.ViewGroup.LayoutParams;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
				public addView(child: globalAndroid.view.View, width: number, height: number): void;
				public childHasTransientStateChanged(child: globalAndroid.view.View, childHasTransientState: boolean): void;
				public parseLayoutDescription(id: number): void;
				public focusableViewAvailable(v: globalAndroid.view.View): void;
				public generateDefaultLayoutParams(): globalAndroid.view.ViewGroup.LayoutParams;
				public getViewById(id: number): globalAndroid.view.View;
				public addView(child: globalAndroid.view.View): void;
				public onViewRemoved(view: globalAndroid.view.View): void;
				public requestSendAccessibilityEvent(child: globalAndroid.view.View, event: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
				public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
				public isTextAlignmentResolved(): boolean;
				public getLayoutDirection(): number;
				public getMinHeight(): number;
				public addView(child: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public loadLayoutDescription(layoutDescription: number): void;
				public canResolveTextDirection(): boolean;
				public getMaxWidth(): number;
				public canResolveTextAlignment(): boolean;
				public onViewRemoved(child: globalAndroid.view.View): void;
				public notifySubtreeAccessibilityStateChanged(child: globalAndroid.view.View, source: globalAndroid.view.View, changeType: number): void;
				public dispatchDraw(canvas: globalAndroid.graphics.Canvas): void;
				public setMaxHeight(value: number): void;
				public requestLayout(): void;
				public getMinWidth(): number;
				public requestTransparentRegion(child: globalAndroid.view.View): void;
				public onStartNestedScroll(child: globalAndroid.view.View, target: globalAndroid.view.View, nestedScrollAxes: number): boolean;
				public onViewAdded(view: globalAndroid.view.View): void;
				public onNestedPreScroll(target: globalAndroid.view.View, dx: number, dy: number, consumed: native.Array<number>): void;
				public setOnConstraintsChanged(constraintsChangedListener: androidx.constraintlayout.widget.ConstraintsChangedListener): void;
				public onDescendantInvalidated(child: globalAndroid.view.View, target: globalAndroid.view.View): void;
				public removeView(view: globalAndroid.view.View): void;
				public requestChildRectangleOnScreen(child: globalAndroid.view.View, rectangle: globalAndroid.graphics.Rect, immediate: boolean): boolean;
				public getChildVisibleRect(child: globalAndroid.view.View, r: globalAndroid.graphics.Rect, offset: globalAndroid.graphics.Point): boolean;
				public requestChildFocus(child: globalAndroid.view.View, focused: globalAndroid.view.View): void;
				public createContextMenu(menu: globalAndroid.view.ContextMenu): void;
				public canResolveLayoutDirection(): boolean;
				public getViewWidget(view: globalAndroid.view.View): androidx.constraintlayout.core.widgets.ConstraintWidget;
				public onViewAdded(child: globalAndroid.view.View): void;
				public setOptimizationLevel(level: number): void;
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public onNestedPreFling(target: globalAndroid.view.View, velocityX: number, velocityY: number): boolean;
				public shouldDelayChildPressedState(): boolean;
			}
			export module ConstraintLayout {
				export class LayoutParams extends globalAndroid.view.ViewGroup.MarginLayoutParams {
					public static class: java.lang.Class<androidx.constraintlayout.widget.ConstraintLayout.LayoutParams>;
					public static MATCH_CONSTRAINT: number;
					public static PARENT_ID: number;
					public static UNSET: number;
					public static GONE_UNSET: number;
					public static HORIZONTAL: number;
					public static VERTICAL: number;
					public static LEFT: number;
					public static RIGHT: number;
					public static TOP: number;
					public static BOTTOM: number;
					public static BASELINE: number;
					public static START: number;
					public static END: number;
					public static CIRCLE: number;
					public static MATCH_CONSTRAINT_WRAP: number;
					public static MATCH_CONSTRAINT_SPREAD: number;
					public static MATCH_CONSTRAINT_PERCENT: number;
					public static CHAIN_SPREAD: number;
					public static CHAIN_SPREAD_INSIDE: number;
					public static CHAIN_PACKED: number;
					public guideBegin: number;
					public guideEnd: number;
					public guidePercent: number;
					public leftToLeft: number;
					public leftToRight: number;
					public rightToLeft: number;
					public rightToRight: number;
					public topToTop: number;
					public topToBottom: number;
					public bottomToTop: number;
					public bottomToBottom: number;
					public baselineToBaseline: number;
					public baselineToTop: number;
					public baselineToBottom: number;
					public circleConstraint: number;
					public circleRadius: number;
					public circleAngle: number;
					public startToEnd: number;
					public startToStart: number;
					public endToStart: number;
					public endToEnd: number;
					public goneLeftMargin: number;
					public goneTopMargin: number;
					public goneRightMargin: number;
					public goneBottomMargin: number;
					public goneStartMargin: number;
					public goneEndMargin: number;
					public goneBaselineMargin: number;
					public baselineMargin: number;
					public horizontalBias: number;
					public verticalBias: number;
					public dimensionRatio: string;
					public horizontalWeight: number;
					public verticalWeight: number;
					public horizontalChainStyle: number;
					public verticalChainStyle: number;
					public matchConstraintDefaultWidth: number;
					public matchConstraintDefaultHeight: number;
					public matchConstraintMinWidth: number;
					public matchConstraintMinHeight: number;
					public matchConstraintMaxWidth: number;
					public matchConstraintMaxHeight: number;
					public matchConstraintPercentWidth: number;
					public matchConstraintPercentHeight: number;
					public editorAbsoluteX: number;
					public editorAbsoluteY: number;
					public orientation: number;
					public constrainedWidth: boolean;
					public constrainedHeight: boolean;
					public constraintTag: string;
					public static WRAP_BEHAVIOR_INCLUDED: number;
					public static WRAP_BEHAVIOR_HORIZONTAL_ONLY: number;
					public static WRAP_BEHAVIOR_VERTICAL_ONLY: number;
					public static WRAP_BEHAVIOR_SKIPPED: number;
					public wrapBehaviorInParent: number;
					public helped: boolean;
					public getConstraintWidget(): androidx.constraintlayout.core.widgets.ConstraintWidget;
					public constructor(source: androidx.constraintlayout.widget.ConstraintLayout.LayoutParams);
					public reset(): void;
					public constructor(source: globalAndroid.view.ViewGroup.LayoutParams);
					public constructor(c: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
					public getConstraintTag(): string;
					public validate(): void;
					public setWidgetDebugName(text: string): void;
					public resolveLayoutDirection(layoutDirection: number): void;
					public constructor(width: number, height: number);
					public constructor(source: globalAndroid.view.ViewGroup.MarginLayoutParams);
				}
				export module LayoutParams {
					export class Table extends java.lang.Object {
						public static class: java.lang.Class<androidx.constraintlayout.widget.ConstraintLayout.LayoutParams.Table>;
						public static UNUSED: number;
						public static ANDROID_ORIENTATION: number;
						public static LAYOUT_CONSTRAINT_CIRCLE: number;
						public static LAYOUT_CONSTRAINT_CIRCLE_RADIUS: number;
						public static LAYOUT_CONSTRAINT_CIRCLE_ANGLE: number;
						public static LAYOUT_CONSTRAINT_GUIDE_BEGIN: number;
						public static LAYOUT_CONSTRAINT_GUIDE_END: number;
						public static LAYOUT_CONSTRAINT_GUIDE_PERCENT: number;
						public static LAYOUT_CONSTRAINT_LEFT_TO_LEFT_OF: number;
						public static LAYOUT_CONSTRAINT_LEFT_TO_RIGHT_OF: number;
						public static LAYOUT_CONSTRAINT_RIGHT_TO_LEFT_OF: number;
						public static LAYOUT_CONSTRAINT_RIGHT_TO_RIGHT_OF: number;
						public static LAYOUT_CONSTRAINT_TOP_TO_TOP_OF: number;
						public static LAYOUT_CONSTRAINT_TOP_TO_BOTTOM_OF: number;
						public static LAYOUT_CONSTRAINT_BOTTOM_TO_TOP_OF: number;
						public static LAYOUT_CONSTRAINT_BOTTOM_TO_BOTTOM_OF: number;
						public static LAYOUT_CONSTRAINT_BASELINE_TO_BASELINE_OF: number;
						public static LAYOUT_CONSTRAINT_START_TO_END_OF: number;
						public static LAYOUT_CONSTRAINT_START_TO_START_OF: number;
						public static LAYOUT_CONSTRAINT_END_TO_START_OF: number;
						public static LAYOUT_CONSTRAINT_END_TO_END_OF: number;
						public static LAYOUT_GONE_MARGIN_LEFT: number;
						public static LAYOUT_GONE_MARGIN_TOP: number;
						public static LAYOUT_GONE_MARGIN_RIGHT: number;
						public static LAYOUT_GONE_MARGIN_BOTTOM: number;
						public static LAYOUT_GONE_MARGIN_START: number;
						public static LAYOUT_GONE_MARGIN_END: number;
						public static LAYOUT_CONSTRAINED_WIDTH: number;
						public static LAYOUT_CONSTRAINED_HEIGHT: number;
						public static LAYOUT_CONSTRAINT_HORIZONTAL_BIAS: number;
						public static LAYOUT_CONSTRAINT_VERTICAL_BIAS: number;
						public static LAYOUT_CONSTRAINT_WIDTH_DEFAULT: number;
						public static LAYOUT_CONSTRAINT_HEIGHT_DEFAULT: number;
						public static LAYOUT_CONSTRAINT_WIDTH_MIN: number;
						public static LAYOUT_CONSTRAINT_WIDTH_MAX: number;
						public static LAYOUT_CONSTRAINT_WIDTH_PERCENT: number;
						public static LAYOUT_CONSTRAINT_HEIGHT_MIN: number;
						public static LAYOUT_CONSTRAINT_HEIGHT_MAX: number;
						public static LAYOUT_CONSTRAINT_HEIGHT_PERCENT: number;
						public static LAYOUT_CONSTRAINT_LEFT_CREATOR: number;
						public static LAYOUT_CONSTRAINT_TOP_CREATOR: number;
						public static LAYOUT_CONSTRAINT_RIGHT_CREATOR: number;
						public static LAYOUT_CONSTRAINT_BOTTOM_CREATOR: number;
						public static LAYOUT_CONSTRAINT_BASELINE_CREATOR: number;
						public static LAYOUT_CONSTRAINT_DIMENSION_RATIO: number;
						public static LAYOUT_CONSTRAINT_HORIZONTAL_WEIGHT: number;
						public static LAYOUT_CONSTRAINT_VERTICAL_WEIGHT: number;
						public static LAYOUT_CONSTRAINT_HORIZONTAL_CHAINSTYLE: number;
						public static LAYOUT_CONSTRAINT_VERTICAL_CHAINSTYLE: number;
						public static LAYOUT_EDITOR_ABSOLUTEX: number;
						public static LAYOUT_EDITOR_ABSOLUTEY: number;
						public static LAYOUT_CONSTRAINT_TAG: number;
						public static LAYOUT_CONSTRAINT_BASELINE_TO_TOP_OF: number;
						public static LAYOUT_CONSTRAINT_BASELINE_TO_BOTTOM_OF: number;
						public static LAYOUT_MARGIN_BASELINE: number;
						public static LAYOUT_GONE_MARGIN_BASELINE: number;
						public static LAYOUT_CONSTRAINT_WIDTH: number;
						public static LAYOUT_CONSTRAINT_HEIGHT: number;
						public static LAYOUT_WRAP_BEHAVIOR_IN_PARENT: number;
						public static map: globalAndroid.util.SparseIntArray;
					}
				}
				export class Measurer extends java.lang.Object implements androidx.constraintlayout.core.widgets.analyzer.BasicMeasure.Measurer {
					public static class: java.lang.Class<androidx.constraintlayout.widget.ConstraintLayout.Measurer>;
					public captureLayoutInfo(widthSpec: number, heightSpec: number, top: number, bottom: number, width: number, height: number): void;
					public measure(widget: androidx.constraintlayout.core.widgets.ConstraintWidget, measure: androidx.constraintlayout.core.widgets.analyzer.BasicMeasure.Measure): void;
					public didMeasures(): void;
					public constructor(this0: androidx.constraintlayout.widget.ConstraintLayout, l: androidx.constraintlayout.widget.ConstraintLayout);
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module widget {
			export class ConstraintLayoutStates extends java.lang.Object {
				public static class: java.lang.Class<androidx.constraintlayout.widget.ConstraintLayoutStates>;
				public static TAG: string;
				public setOnConstraintsChanged(constraintsChangedListener: androidx.constraintlayout.widget.ConstraintsChangedListener): void;
				public updateConstraints(id: number, width: number, height: number): void;
				public needsToChange(id: number, width: number, height: number): boolean;
			}
			export module ConstraintLayoutStates {
				export class State extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.widget.ConstraintLayoutStates.State>;
					public findMatch(width: number, height: number): number;
					public constructor(context: globalAndroid.content.Context, parser: org.xmlpull.v1.XmlPullParser);
				}
				export class Variant extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.widget.ConstraintLayoutStates.Variant>;
					public constructor(context: globalAndroid.content.Context, parser: org.xmlpull.v1.XmlPullParser);
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module widget {
			export class ConstraintProperties extends java.lang.Object {
				public static class: java.lang.Class<androidx.constraintlayout.widget.ConstraintProperties>;
				public static LEFT: number;
				public static RIGHT: number;
				public static TOP: number;
				public static BOTTOM: number;
				public static BASELINE: number;
				public static START: number;
				public static END: number;
				public static UNSET: number;
				public static PARENT_ID: number;
				public static MATCH_CONSTRAINT: number;
				public static WRAP_CONTENT: number;
				public static MATCH_CONSTRAINT_WRAP: number;
				public static MATCH_CONSTRAINT_SPREAD: number;
				public constrainDefaultHeight(height: number): androidx.constraintlayout.widget.ConstraintProperties;
				public horizontalWeight(weight: number): androidx.constraintlayout.widget.ConstraintProperties;
				public transformPivotX(transformPivotX: number): androidx.constraintlayout.widget.ConstraintProperties;
				public constrainMinHeight(height: number): androidx.constraintlayout.widget.ConstraintProperties;
				public visibility(visibility: number): androidx.constraintlayout.widget.ConstraintProperties;
				public removeFromHorizontalChain(): androidx.constraintlayout.widget.ConstraintProperties;
				public centerHorizontallyRtl(toView: number): androidx.constraintlayout.widget.ConstraintProperties;
				public margin(anchor: number, value: number): androidx.constraintlayout.widget.ConstraintProperties;
				public scaleY(scaleY: number): androidx.constraintlayout.widget.ConstraintProperties;
				public removeConstraints(anchor: number): androidx.constraintlayout.widget.ConstraintProperties;
				public scaleX(scaleX: number): androidx.constraintlayout.widget.ConstraintProperties;
				public constrainWidth(width: number): androidx.constraintlayout.widget.ConstraintProperties;
				public constrainMinWidth(width: number): androidx.constraintlayout.widget.ConstraintProperties;
				public removeFromVerticalChain(): androidx.constraintlayout.widget.ConstraintProperties;
				public apply(): void;
				public centerVertically(toView: number): androidx.constraintlayout.widget.ConstraintProperties;
				public translation(translationX: number, translationY: number): androidx.constraintlayout.widget.ConstraintProperties;
				public constrainHeight(height: number): androidx.constraintlayout.widget.ConstraintProperties;
				public constrainMaxHeight(height: number): androidx.constraintlayout.widget.ConstraintProperties;
				public horizontalBias(bias: number): androidx.constraintlayout.widget.ConstraintProperties;
				public transformPivot(transformPivotX: number, transformPivotY: number): androidx.constraintlayout.widget.ConstraintProperties;
				public addToHorizontalChain(leftId: number, rightId: number): androidx.constraintlayout.widget.ConstraintProperties;
				public verticalBias(bias: number): androidx.constraintlayout.widget.ConstraintProperties;
				public centerHorizontally(toView: number): androidx.constraintlayout.widget.ConstraintProperties;
				public constrainDefaultWidth(width: number): androidx.constraintlayout.widget.ConstraintProperties;
				public transformPivotY(transformPivotY: number): androidx.constraintlayout.widget.ConstraintProperties;
				public constructor(view: globalAndroid.view.View);
				public addToVerticalChain(topId: number, bottomId: number): androidx.constraintlayout.widget.ConstraintProperties;
				public centerVertically(topId: number, topSide: number, topMargin: number, bottomId: number, bottomSide: number, bottomMargin: number, bias: number): androidx.constraintlayout.widget.ConstraintProperties;
				public rotationX(rotationX: number): androidx.constraintlayout.widget.ConstraintProperties;
				public verticalChainStyle(chainStyle: number): androidx.constraintlayout.widget.ConstraintProperties;
				public translationY(translationY: number): androidx.constraintlayout.widget.ConstraintProperties;
				public verticalWeight(weight: number): androidx.constraintlayout.widget.ConstraintProperties;
				public goneMargin(anchor: number, value: number): androidx.constraintlayout.widget.ConstraintProperties;
				public rotation(rotation: number): androidx.constraintlayout.widget.ConstraintProperties;
				public alpha(alpha: number): androidx.constraintlayout.widget.ConstraintProperties;
				public constrainMaxWidth(width: number): androidx.constraintlayout.widget.ConstraintProperties;
				public translationX(translationX: number): androidx.constraintlayout.widget.ConstraintProperties;
				public center(firstID: number, firstSide: number, firstMargin: number, secondId: number, secondSide: number, secondMargin: number, bias: number): androidx.constraintlayout.widget.ConstraintProperties;
				public addToHorizontalChainRTL(leftId: number, rightId: number): androidx.constraintlayout.widget.ConstraintProperties;
				public centerHorizontally(leftId: number, leftSide: number, leftMargin: number, rightId: number, rightSide: number, rightMargin: number, bias: number): androidx.constraintlayout.widget.ConstraintProperties;
				public connect(startSide: number, endID: number, endSide: number, margin: number): androidx.constraintlayout.widget.ConstraintProperties;
				public centerHorizontallyRtl(startId: number, startSide: number, startMargin: number, endId: number, endSide: number, endMargin: number, bias: number): androidx.constraintlayout.widget.ConstraintProperties;
				public horizontalChainStyle(chainStyle: number): androidx.constraintlayout.widget.ConstraintProperties;
				public elevation(elevation: number): androidx.constraintlayout.widget.ConstraintProperties;
				public rotationY(rotationY: number): androidx.constraintlayout.widget.ConstraintProperties;
				public translationZ(translationZ: number): androidx.constraintlayout.widget.ConstraintProperties;
				public dimensionRatio(ratio: string): androidx.constraintlayout.widget.ConstraintProperties;
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module widget {
			export class ConstraintSet extends java.lang.Object {
				public static class: java.lang.Class<androidx.constraintlayout.widget.ConstraintSet>;
				public mIdString: string;
				public derivedState: string;
				public static ROTATE_NONE: number;
				public static ROTATE_PORTRATE_OF_RIGHT: number;
				public static ROTATE_PORTRATE_OF_LEFT: number;
				public static ROTATE_RIGHT_OF_PORTRATE: number;
				public static ROTATE_LEFT_OF_PORTRATE: number;
				public mRotate: number;
				public static UNSET: number;
				public static MATCH_CONSTRAINT: number;
				public static WRAP_CONTENT: number;
				public static MATCH_CONSTRAINT_WRAP: number;
				public static MATCH_CONSTRAINT_SPREAD: number;
				public static MATCH_CONSTRAINT_PERCENT: number;
				public static PARENT_ID: number;
				public static HORIZONTAL: number;
				public static VERTICAL: number;
				public static HORIZONTAL_GUIDELINE: number;
				public static VERTICAL_GUIDELINE: number;
				public static VISIBLE: number;
				public static INVISIBLE: number;
				public static GONE: number;
				public static LEFT: number;
				public static RIGHT: number;
				public static TOP: number;
				public static BOTTOM: number;
				public static BASELINE: number;
				public static START: number;
				public static END: number;
				public static CIRCLE_REFERENCE: number;
				public static CHAIN_SPREAD: number;
				public static CHAIN_SPREAD_INSIDE: number;
				public static VISIBILITY_MODE_NORMAL: number;
				public static VISIBILITY_MODE_IGNORE: number;
				public static CHAIN_PACKED: number;
				public applyToWithoutCustom(constraintLayout: androidx.constraintlayout.widget.ConstraintLayout): void;
				public setHorizontalBias(viewId: number, bias: number): void;
				public clear(viewId: number): void;
				public load(context: globalAndroid.content.Context, parser: org.xmlpull.v1.XmlPullParser): void;
				public removeAttribute(attributeName: string): void;
				public getReferencedIds(id: number): native.Array<number>;
				public setAlpha(viewId: number, alpha: number): void;
				public getApplyElevation(viewId: number): boolean;
				public setTransformPivotY(viewId: number, transformPivotY: number): void;
				public centerVertically(viewId: number, toView: number): void;
				public constrainMinWidth(viewId: number, width: number): void;
				public setEditorAbsoluteX(viewId: number, position: number): void;
				public setVerticalChainStyle(viewId: number, chainStyle: number): void;
				public setColorValue(viewId: number, attributeName: string, value: number): void;
				public getCustomAttributeSet(): java.util.HashMap<string,androidx.constraintlayout.widget.ConstraintAttribute>;
				public constrainMinHeight(viewId: number, height: number): void;
				public setVerticalWeight(viewId: number, weight: number): void;
				public setHorizontalWeight(viewId: number, weight: number): void;
				public addColorAttributes(attributeName: native.Array<string>): void;
				public addFloatAttributes(attributeName: native.Array<string>): void;
				public setVisibilityMode(viewId: number, visibilityMode: number): void;
				public constrainedHeight(viewId: number, constrained: boolean): void;
				public setVisibility(viewId: number, visibility: number): void;
				public clone(set: androidx.constraintlayout.widget.ConstraintSet): void;
				public isForceId(): boolean;
				public addToHorizontalChainRTL(viewId: number, leftId: number, rightId: number): void;
				public clone(context: globalAndroid.content.Context, constraintLayoutId: number): void;
				public constrainWidth(viewId: number, width: number): void;
				public createHorizontalChain(leftId: number, leftSide: number, rightId: number, rightSide: number, chainIds: native.Array<number>, weights: native.Array<number>, style: number): void;
				public setTransformPivotX(viewId: number, transformPivotX: number): void;
				public setTranslationY(viewId: number, translationY: number): void;
				public setRotationY(viewId: number, rotationY: number): void;
				public getWidth(viewId: number): number;
				public setGuidelineBegin(guidelineID: number, margin: number): void;
				public dump(scene: androidx.constraintlayout.motion.widget.MotionScene, ids: native.Array<number>): void;
				public clear(viewId: number, anchor: number): void;
				public setApplyElevation(viewId: number, apply: boolean): void;
				public load(context: globalAndroid.content.Context, resourceId: number): void;
				public setElevation(viewId: number, elevation: number): void;
				public setTranslationZ(viewId: number, translationZ: number): void;
				public center(centerID: number, firstID: number, firstSide: number, firstMargin: number, secondId: number, secondSide: number, secondMargin: number, bias: number): void;
				public centerHorizontallyRtl(centerID: number, startId: number, startSide: number, startMargin: number, endId: number, endSide: number, endMargin: number, bias: number): void;
				public clone(constraints: androidx.constraintlayout.widget.Constraints): void;
				public setGoneMargin(viewId: number, anchor: number, value: number): void;
				public getConstraint(id: number): androidx.constraintlayout.widget.ConstraintSet.Constraint;
				public addIntAttributes(attributeName: native.Array<string>): void;
				public readFallback(constraintLayout: androidx.constraintlayout.widget.ConstraintLayout): void;
				public addStringAttributes(attributeName: native.Array<string>): void;
				public createHorizontalChainRtl(startId: number, startSide: number, endId: number, endSide: number, chainIds: native.Array<number>, weights: native.Array<number>, style: number): void;
				public setScaleY(viewId: number, scaleY: number): void;
				public centerVertically(centerID: number, topId: number, topSide: number, topMargin: number, bottomId: number, bottomSide: number, bottomMargin: number, bias: number): void;
				public clone(constraintLayout: androidx.constraintlayout.widget.ConstraintLayout): void;
				public createVerticalChain(topId: number, topSide: number, bottomId: number, bottomSide: number, chainIds: native.Array<number>, weights: native.Array<number>, style: number): void;
				public connect(startID: number, startSide: number, endID: number, endSide: number): void;
				public centerHorizontally(viewId: number, toView: number): void;
				public setValidateOnParse(validate: boolean): void;
				public setStringValue(viewId: number, attributeName: string, value: string): void;
				public applyDeltaFrom(cs: androidx.constraintlayout.widget.ConstraintSet): void;
				public centerHorizontally(centerID: number, leftId: number, leftSide: number, leftMargin: number, rightId: number, rightSide: number, rightMargin: number, bias: number): void;
				public getKnownIds(): native.Array<number>;
				public constructor();
				public constrainDefaultWidth(viewId: number, width: number): void;
				public parseIntAttributes(set: androidx.constraintlayout.widget.ConstraintSet.Constraint, attributes: string): void;
				public setScaleX(viewId: number, scaleX: number): void;
				public addToVerticalChain(viewId: number, topId: number, bottomId: number): void;
				public setGuidelineEnd(guidelineID: number, margin: number): void;
				public clone(): any;
				public constrainCircle(viewId: number, id: number, radius: number, angle: number): void;
				public constrainPercentWidth(viewId: number, percent: number): void;
				public parseColorAttributes(set: androidx.constraintlayout.widget.ConstraintSet.Constraint, attributes: string): void;
				public getHeight(viewId: number): number;
				public writeState(writer: java.io.Writer, layout: androidx.constraintlayout.widget.ConstraintLayout, flags: number): void;
				public constrainMaxHeight(viewId: number, height: number): void;
				public setRotation(viewId: number, rotation: number): void;
				public addToHorizontalChain(viewId: number, leftId: number, rightId: number): void;
				public constrainMaxWidth(viewId: number, width: number): void;
				public setMargin(viewId: number, anchor: number, value: number): void;
				public removeFromVerticalChain(viewId: number): void;
				public getVisibilityMode(viewId: number): number;
				public removeFromHorizontalChain(viewId: number): void;
				public setFloatValue(viewId: number, attributeName: string, value: number): void;
				public constrainDefaultHeight(viewId: number, height: number): void;
				public static buildDelta(context: globalAndroid.content.Context, parser: org.xmlpull.v1.XmlPullParser): androidx.constraintlayout.widget.ConstraintSet.Constraint;
				public setDimensionRatio(viewId: number, ratio: string): void;
				public centerHorizontallyRtl(viewId: number, toView: number): void;
				public constrainHeight(viewId: number, height: number): void;
				public setHorizontalChainStyle(viewId: number, chainStyle: number): void;
				public setReferencedIds(id: number, referenced: native.Array<number>): void;
				public setGuidelinePercent(guidelineID: number, ratio: number): void;
				public createBarrier(id: number, direction: number, margin: number, referenced: native.Array<number>): void;
				public setLayoutWrapBehavior(viewId: number, behavior: number): void;
				public applyTo(constraintLayout: androidx.constraintlayout.widget.ConstraintLayout): void;
				public parseStringAttributes(set: androidx.constraintlayout.widget.ConstraintSet.Constraint, attributes: string): void;
				public setEditorAbsoluteY(viewId: number, position: number): void;
				public applyCustomAttributes(constraintLayout: androidx.constraintlayout.widget.ConstraintLayout): void;
				public setTranslation(viewId: number, translationX: number, translationY: number): void;
				public applyToLayoutParams(id: number, layoutParams: androidx.constraintlayout.widget.ConstraintLayout.LayoutParams): void;
				public setForceId(forceId: boolean): void;
				public connect(startID: number, startSide: number, endID: number, endSide: number, margin: number): void;
				public setTranslationX(viewId: number, translationX: number): void;
				public setVerticalBias(viewId: number, bias: number): void;
				public getVisibility(viewId: number): number;
				public getParameters(mId: number): androidx.constraintlayout.widget.ConstraintSet.Constraint;
				public applyToHelper(helper: androidx.constraintlayout.widget.ConstraintHelper, child: androidx.constraintlayout.core.widgets.ConstraintWidget, layoutParams: androidx.constraintlayout.widget.ConstraintLayout.LayoutParams, mapIdToWidget: globalAndroid.util.SparseArray<androidx.constraintlayout.core.widgets.ConstraintWidget>): void;
				public create(guidelineID: number, orientation: number): void;
				public setBarrierType(id: number, type: number): void;
				public readFallback(set: androidx.constraintlayout.widget.ConstraintSet): void;
				public setIntValue(viewId: number, attributeName: string, value: number): void;
				public parseFloatAttributes(set: androidx.constraintlayout.widget.ConstraintSet.Constraint, attributes: string): void;
				public constrainedWidth(viewId: number, constrained: boolean): void;
				public setTransformPivot(viewId: number, transformPivotX: number, transformPivotY: number): void;
				public setRotationX(viewId: number, rotationX: number): void;
				public constrainPercentHeight(viewId: number, percent: number): void;
			}
			export module ConstraintSet {
				export class Constraint extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.widget.ConstraintSet.Constraint>;
					public propertySet: androidx.constraintlayout.widget.ConstraintSet.PropertySet;
					public motion: androidx.constraintlayout.widget.ConstraintSet.Motion;
					public layout: androidx.constraintlayout.widget.ConstraintSet.Layout;
					public transform: androidx.constraintlayout.widget.ConstraintSet.Transform;
					public mCustomConstraints: java.util.HashMap<string,androidx.constraintlayout.widget.ConstraintAttribute>;
					public clone(): any;
					public constructor();
					public printDelta(tag: string): void;
					public applyTo(param: androidx.constraintlayout.widget.ConstraintLayout.LayoutParams): void;
					public clone(): androidx.constraintlayout.widget.ConstraintSet.Constraint;
					public applyDelta(c: androidx.constraintlayout.widget.ConstraintSet.Constraint): void;
				}
				export module Constraint {
					export class Delta extends java.lang.Object {
						public static class: java.lang.Class<androidx.constraintlayout.widget.ConstraintSet.Constraint.Delta>;
					}
				}
				export class Layout extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.widget.ConstraintSet.Layout>;
					public mIsGuideline: boolean;
					public mApply: boolean;
					public mOverride: boolean;
					public mWidth: number;
					public mHeight: number;
					public static UNSET: number;
					public static UNSET_GONE_MARGIN: number;
					public guideBegin: number;
					public guideEnd: number;
					public guidePercent: number;
					public leftToLeft: number;
					public leftToRight: number;
					public rightToLeft: number;
					public rightToRight: number;
					public topToTop: number;
					public topToBottom: number;
					public bottomToTop: number;
					public bottomToBottom: number;
					public baselineToBaseline: number;
					public baselineToTop: number;
					public baselineToBottom: number;
					public startToEnd: number;
					public startToStart: number;
					public endToStart: number;
					public endToEnd: number;
					public horizontalBias: number;
					public verticalBias: number;
					public dimensionRatio: string;
					public circleConstraint: number;
					public circleRadius: number;
					public circleAngle: number;
					public editorAbsoluteX: number;
					public editorAbsoluteY: number;
					public orientation: number;
					public leftMargin: number;
					public rightMargin: number;
					public topMargin: number;
					public bottomMargin: number;
					public endMargin: number;
					public startMargin: number;
					public baselineMargin: number;
					public goneLeftMargin: number;
					public goneTopMargin: number;
					public goneRightMargin: number;
					public goneBottomMargin: number;
					public goneEndMargin: number;
					public goneStartMargin: number;
					public goneBaselineMargin: number;
					public verticalWeight: number;
					public horizontalWeight: number;
					public horizontalChainStyle: number;
					public verticalChainStyle: number;
					public widthDefault: number;
					public heightDefault: number;
					public widthMax: number;
					public heightMax: number;
					public widthMin: number;
					public heightMin: number;
					public widthPercent: number;
					public heightPercent: number;
					public mBarrierDirection: number;
					public mBarrierMargin: number;
					public mHelperType: number;
					public mReferenceIds: native.Array<number>;
					public mReferenceIdString: string;
					public mConstraintTag: string;
					public constrainedWidth: boolean;
					public constrainedHeight: boolean;
					public mBarrierAllowsGoneWidgets: boolean;
					public mWrapBehavior: number;
					public copyFrom(src: androidx.constraintlayout.widget.ConstraintSet.Layout): void;
					public constructor();
					public dump(scene: androidx.constraintlayout.motion.widget.MotionScene, stringBuilder: java.lang.StringBuilder): void;
				}
				export class Motion extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.widget.ConstraintSet.Motion>;
					public mApply: boolean;
					public mAnimateRelativeTo: number;
					public mAnimateCircleAngleTo: number;
					public mTransitionEasing: string;
					public mPathMotionArc: number;
					public mDrawPath: number;
					public mMotionStagger: number;
					public mPolarRelativeTo: number;
					public mPathRotate: number;
					public mQuantizeMotionPhase: number;
					public mQuantizeMotionSteps: number;
					public mQuantizeInterpolatorString: string;
					public mQuantizeInterpolatorType: number;
					public mQuantizeInterpolatorID: number;
					public constructor();
					public copyFrom(src: androidx.constraintlayout.widget.ConstraintSet.Motion): void;
				}
				export class PropertySet extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.widget.ConstraintSet.PropertySet>;
					public mApply: boolean;
					public visibility: number;
					public mVisibilityMode: number;
					public alpha: number;
					public mProgress: number;
					public constructor();
					public copyFrom(src: androidx.constraintlayout.widget.ConstraintSet.PropertySet): void;
				}
				export class Transform extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.widget.ConstraintSet.Transform>;
					public mApply: boolean;
					public rotation: number;
					public rotationX: number;
					public rotationY: number;
					public scaleX: number;
					public scaleY: number;
					public transformPivotX: number;
					public transformPivotY: number;
					public transformPivotTarget: number;
					public translationX: number;
					public translationY: number;
					public translationZ: number;
					public applyElevation: boolean;
					public elevation: number;
					public constructor();
					public copyFrom(src: androidx.constraintlayout.widget.ConstraintSet.Transform): void;
				}
				export class WriteJsonEngine extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.widget.ConstraintSet.WriteJsonEngine>;
				}
				export class WriteXmlEngine extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.widget.ConstraintSet.WriteXmlEngine>;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module widget {
			export class Constraints extends globalAndroid.view.ViewGroup {
				public static class: java.lang.Class<androidx.constraintlayout.widget.Constraints>;
				public static TAG: string;
				/** @deprecated */
				public invalidateChild(child: globalAndroid.view.View, dirty: globalAndroid.graphics.Rect): void;
				public focusSearch(direction: number): globalAndroid.view.View;
				public constructor(context: globalAndroid.content.Context);
				public onNestedScrollAccepted(child: globalAndroid.view.View, target: globalAndroid.view.View, axes: number): void;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
				public childDrawableStateChanged(child: globalAndroid.view.View): void;
				public onStopNestedScroll(child: globalAndroid.view.View): void;
				public isLayoutRequested(): boolean;
				public sendAccessibilityEvent(eventType: number): void;
				public onNestedPrePerformAccessibilityAction(target: globalAndroid.view.View, action: number, bundle2: globalAndroid.os.Bundle): boolean;
				public addView(child: globalAndroid.view.View, index: number): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
				public requestFitSystemWindows(): void;
				public getTextDirection(): number;
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
				public generateLayoutParams(p: globalAndroid.view.ViewGroup.LayoutParams): globalAndroid.view.ViewGroup.LayoutParams;
				public generateLayoutParams(attrs: globalAndroid.util.AttributeSet): globalAndroid.view.ViewGroup.LayoutParams;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
				public keyboardNavigationClusterSearch(currentCluster: globalAndroid.view.View, direction: number): globalAndroid.view.View;
				public getConstraintSet(): androidx.constraintlayout.widget.ConstraintSet;
				public addView(child: globalAndroid.view.View, width: number, height: number): void;
				public isTextDirectionResolved(): boolean;
				public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
				public childHasTransientStateChanged(child: globalAndroid.view.View, childHasTransientState: boolean): void;
				public focusableViewAvailable(v: globalAndroid.view.View): void;
				public showContextMenuForChild(originalView: globalAndroid.view.View): boolean;
				public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public generateDefaultLayoutParams(): globalAndroid.view.ViewGroup.LayoutParams;
				public recomputeViewAttributes(child: globalAndroid.view.View): void;
				public addView(child: globalAndroid.view.View): void;
				public requestSendAccessibilityEvent(child: globalAndroid.view.View, event: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
				public isLayoutDirectionResolved(): boolean;
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
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public removeView(view: globalAndroid.view.View): void;
				public requestChildRectangleOnScreen(child: globalAndroid.view.View, rectangle: globalAndroid.graphics.Rect, immediate: boolean): boolean;
				public generateLayoutParams(attrs: globalAndroid.util.AttributeSet): androidx.constraintlayout.widget.Constraints.LayoutParams;
				public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public getChildVisibleRect(child: globalAndroid.view.View, r: globalAndroid.graphics.Rect, offset: globalAndroid.graphics.Point): boolean;
				public requestChildFocus(child: globalAndroid.view.View, focused: globalAndroid.view.View): void;
				public createContextMenu(menu: globalAndroid.view.ContextMenu): void;
				public canResolveLayoutDirection(): boolean;
				public addView(child: globalAndroid.view.View, index: number, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public generateDefaultLayoutParams(): androidx.constraintlayout.widget.Constraints.LayoutParams;
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public onNestedPreFling(target: globalAndroid.view.View, velocityX: number, velocityY: number): boolean;
				public getParent(): globalAndroid.view.ViewParent;
			}
			export module Constraints {
				export class LayoutParams extends androidx.constraintlayout.widget.ConstraintLayout.LayoutParams {
					public static class: java.lang.Class<androidx.constraintlayout.widget.Constraints.LayoutParams>;
					public alpha: number;
					public applyElevation: boolean;
					public elevation: number;
					public rotation: number;
					public rotationX: number;
					public rotationY: number;
					public scaleX: number;
					public scaleY: number;
					public transformPivotX: number;
					public transformPivotY: number;
					public translationX: number;
					public translationY: number;
					public translationZ: number;
					public constructor(source: androidx.constraintlayout.widget.ConstraintLayout.LayoutParams);
					public constructor(source: globalAndroid.view.ViewGroup.LayoutParams);
					public constructor(c: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
					public constructor(source: androidx.constraintlayout.widget.Constraints.LayoutParams);
					public constructor(width: number, height: number);
					public constructor(source: globalAndroid.view.ViewGroup.MarginLayoutParams);
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module widget {
			export abstract class ConstraintsChangedListener extends java.lang.Object {
				public static class: java.lang.Class<androidx.constraintlayout.widget.ConstraintsChangedListener>;
				public preLayoutChange(stateId: number, constraintId: number): void;
				public postLayoutChange(stateId: number, constraintId: number): void;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module widget {
			export class Group extends androidx.constraintlayout.widget.ConstraintHelper {
				public static class: java.lang.Class<androidx.constraintlayout.widget.Group>;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public constructor(context: globalAndroid.content.Context);
				public setElevation(elevation: number): void;
				public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
				public init(attrs: globalAndroid.util.AttributeSet): void;
				public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
				public setVisibility(visibility: number): void;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
				public updatePostLayout(container: androidx.constraintlayout.widget.ConstraintLayout): void;
				public sendAccessibilityEvent(eventType: number): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public applyLayoutFeaturesInConstraintSet(container: androidx.constraintlayout.widget.ConstraintLayout): void;
				public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public onAttachedToWindow(): void;
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module widget {
			export class Guideline extends globalAndroid.view.View {
				public static class: java.lang.Class<androidx.constraintlayout.widget.Guideline>;
				public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
				public draw(canvas: globalAndroid.graphics.Canvas): void;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public setGuidelineEnd(margin: number): void;
				public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public constructor(context: globalAndroid.content.Context);
				public setGuidelinePercent(ratio: number): void;
				public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
				public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
				public setVisibility(visibility: number): void;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
				public sendAccessibilityEvent(eventType: number): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
				public setGuidelineBegin(margin: number): void;
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module widget {
			export class Placeholder extends globalAndroid.view.View {
				public static class: java.lang.Class<androidx.constraintlayout.widget.Placeholder>;
				public updatePostMeasure(container: androidx.constraintlayout.widget.ConstraintLayout): void;
				public setContentId(id: number): void;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public constructor(context: globalAndroid.content.Context);
				public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
				public getEmptyVisibility(): number;
				public updatePreLayout(container: androidx.constraintlayout.widget.ConstraintLayout): void;
				public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
				public sendAccessibilityEvent(eventType: number): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
				public getContent(): globalAndroid.view.View;
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public setEmptyVisibility(visibility: number): void;
				public onDraw(canvas: globalAndroid.graphics.Canvas): void;
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module widget {
			export class ReactiveGuide extends globalAndroid.view.View implements androidx.constraintlayout.widget.SharedValues.SharedValuesListener {
				public static class: java.lang.Class<androidx.constraintlayout.widget.ReactiveGuide>;
				public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
				public constructor(context: globalAndroid.content.Context);
				public setGuidelinePercent(ratio: number): void;
				public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
				public setApplyToConstraintSetId(id: number): void;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
				public sendAccessibilityEvent(eventType: number): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
				public setGuidelineBegin(margin: number): void;
				public setAnimateChange(animate: boolean): void;
				public onNewValue(key: number, newValue: number, oldValue: number): void;
				public draw(canvas: globalAndroid.graphics.Canvas): void;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public setGuidelineEnd(margin: number): void;
				public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public getAttributeId(): number;
				public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
				public setVisibility(visibility: number): void;
				public setAttributeId(id: number): void;
				public getApplyToConstraintSetId(): number;
				public isAnimatingChange(): boolean;
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module widget {
			export class SharedValues extends java.lang.Object {
				public static class: java.lang.Class<androidx.constraintlayout.widget.SharedValues>;
				public static UNSET: number;
				public addListener(key: number, listener: androidx.constraintlayout.widget.SharedValues.SharedValuesListener): void;
				public clearListeners(): void;
				public removeListener(key: number, listener: androidx.constraintlayout.widget.SharedValues.SharedValuesListener): void;
				public fireNewValue(key: number, value: number): void;
				public getValue(key: number): number;
				public constructor();
				public removeListener(listener: androidx.constraintlayout.widget.SharedValues.SharedValuesListener): void;
			}
			export module SharedValues {
				export class SharedValuesListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.widget.SharedValues.SharedValuesListener>;
					/**
					 * Constructs a new instance of the androidx.constraintlayout.widget.SharedValues() when extending the interface class.
					 */
					public constructor(implementation: {
						onNewValue(int0: number, int1: number, int2: number): void;
					});
					public constructor();
					public onNewValue(int0: number, int1: number, int2: number): void;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module widget {
			export class StateSet extends java.lang.Object {
				public static class: java.lang.Class<androidx.constraintlayout.widget.StateSet>;
				public static TAG: string;
				public updateConstraints(currentId: number, id: number, width: number, height: number): number;
				public convertToConstraintSet(currentConstrainSettId: number, stateId: number, width: number, height: number): number;
				public setOnConstraintsChanged(constraintsChangedListener: androidx.constraintlayout.widget.ConstraintsChangedListener): void;
				public stateGetConstraintID(id: number, width: number, height: number): number;
				public needsToChange(id: number, width: number, height: number): boolean;
				public constructor(context: globalAndroid.content.Context, parser: org.xmlpull.v1.XmlPullParser);
			}
			export module StateSet {
				export class State extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.widget.StateSet.State>;
					public findMatch(width: number, height: number): number;
					public constructor(context: globalAndroid.content.Context, parser: org.xmlpull.v1.XmlPullParser);
				}
				export class Variant extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.widget.StateSet.Variant>;
					public constructor(context: globalAndroid.content.Context, parser: org.xmlpull.v1.XmlPullParser);
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module widget {
			export abstract class VirtualLayout extends androidx.constraintlayout.widget.ConstraintHelper {
				public static class: java.lang.Class<androidx.constraintlayout.widget.VirtualLayout>;
				public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public constructor(context: globalAndroid.content.Context);
				public setElevation(elevation: number): void;
				public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
				public init(attrs: globalAndroid.util.AttributeSet): void;
				public onMeasure(layout: androidx.constraintlayout.core.widgets.VirtualLayout, widthMeasureSpec: number, heightMeasureSpec: number): void;
				public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
				public setVisibility(visibility: number): void;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
				public sendAccessibilityEvent(eventType: number): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public applyLayoutFeaturesInConstraintSet(container: androidx.constraintlayout.widget.ConstraintLayout): void;
				public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public onAttachedToWindow(): void;
			}
		}
	}
}

//Generics information:

