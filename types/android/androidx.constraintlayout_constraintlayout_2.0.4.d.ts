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
					public loadParameters(constraint: androidx.constraintlayout.widget.ConstraintSet.Constraint, child: androidx.constraintlayout.solver.widgets.HelperWidget, layoutParams: androidx.constraintlayout.widget.ConstraintLayout.LayoutParams, mapIdToWidget: globalAndroid.util.SparseArray<androidx.constraintlayout.solver.widgets.ConstraintWidget>): void;
					public setVerticalBias(bias: number): void;
					public setWrapMode(mode: number): void;
					public setHorizontalBias(bias: number): void;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
					public setPaddingTop(paddingTop: number): void;
					public setOrientation(orientation: number): void;
					public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
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
					public constructor(context: globalAndroid.content.Context);
					public resolveRtl(widget: androidx.constraintlayout.solver.widgets.ConstraintWidget, isRtl: boolean): void;
					public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
					public onMeasure(layout: androidx.constraintlayout.solver.widgets.VirtualLayout, widthMeasureSpec: number, heightMeasureSpec: number): void;
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
		export module motion {
			export module utils {
				export class ArcCurveFit extends androidx.constraintlayout.motion.utils.CurveFit {
					public static class: java.lang.Class<androidx.constraintlayout.motion.utils.ArcCurveFit>;
					public static ARC_START_VERTICAL: number;
					public static ARC_START_HORIZONTAL: number;
					public static ARC_START_FLIP: number;
					public static ARC_START_LINEAR: number;
					public getSlope(double0: number, int1: number): number;
					public constructor();
					public getPos(t: number, v: native.Array<number>): void;
					public getPos(double0: number, doubles1: native.Array<number>): void;
					public getPos(t: number, j: number): number;
					public getPos(double0: number, floats1: native.Array<number>): void;
					public getSlope(t: number, v: native.Array<number>): void;
					public getTimePoints(): native.Array<number>;
					public getSlope(t: number, j: number): number;
					public constructor(arcModes: native.Array<number>, time: native.Array<number>, y: native.Array<native.Array<number>>);
					public getPos(double0: number, int1: number): number;
					public getSlope(double0: number, doubles1: native.Array<number>): void;
				}
				export module ArcCurveFit {
					export class Arc extends java.lang.Object {
						public static class: java.lang.Class<androidx.constraintlayout.motion.utils.ArcCurveFit.Arc>;
						public getLinearDY(t: number): number;
						public getLinearY(t: number): number;
						public getLinearDX(t: number): number;
						public getLinearX(t: number): number;
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
				export abstract class CurveFit extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.motion.utils.CurveFit>;
					public static SPLINE: number;
					public static LINEAR: number;
					public static CONSTANT: number;
					public getSlope(double0: number, int1: number): number;
					public constructor();
					public static getArc(arcModes: native.Array<number>, time: native.Array<number>, y: native.Array<native.Array<number>>): androidx.constraintlayout.motion.utils.CurveFit;
					public getPos(double0: number, doubles1: native.Array<number>): void;
					public getPos(double0: number, floats1: native.Array<number>): void;
					public getTimePoints(): native.Array<number>;
					public static get(type: number, time: native.Array<number>, y: native.Array<native.Array<number>>): androidx.constraintlayout.motion.utils.CurveFit;
					public getPos(double0: number, int1: number): number;
					public getSlope(double0: number, doubles1: native.Array<number>): void;
				}
				export module CurveFit {
					export class Constant extends androidx.constraintlayout.motion.utils.CurveFit {
						public static class: java.lang.Class<androidx.constraintlayout.motion.utils.CurveFit.Constant>;
						public getPos(double0: number, doubles1: native.Array<number>): void;
						public getSlope(double0: number, doubles1: native.Array<number>): void;
						public getTimePoints(): native.Array<number>;
						public getPos(t: number, j: number): number;
						public getPos(double0: number, floats1: native.Array<number>): void;
						public getPos(double0: number, int1: number): number;
						public getSlope(t: number, v: native.Array<number>): void;
						public getPos(t: number, v: native.Array<number>): void;
						public getSlope(double0: number, int1: number): number;
						public getSlope(t: number, j: number): number;
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
				export class Easing extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.motion.utils.Easing>;
					public static NAMED_EASING: native.Array<string>;
					public get(x: number): number;
					public toString(): string;
					public static getInterpolator(configString: string): androidx.constraintlayout.motion.utils.Easing;
					public constructor();
					public getDiff(x: number): number;
				}
				export module Easing {
					export class CubicEasing extends androidx.constraintlayout.motion.utils.Easing {
						public static class: java.lang.Class<androidx.constraintlayout.motion.utils.Easing.CubicEasing>;
						public constructor();
						public get(x: number): number;
						public getDiff(x: number): number;
						public constructor(x1: number, y1: number, x2: number, y2: number);
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
				export class HyperSpline extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.motion.utils.HyperSpline>;
					public getVelocity(p: number, v: native.Array<number>): void;
					public constructor(points: native.Array<native.Array<number>>);
					public constructor();
					public getPos(p: number, x: native.Array<number>): void;
					public approxLength(curve: native.Array<androidx.constraintlayout.motion.utils.HyperSpline.Cubic>): number;
					public setup(points: native.Array<native.Array<number>>): void;
					public getPos(p: number, splineNumber: number): number;
				}
				export module HyperSpline {
					export class Cubic extends java.lang.Object {
						public static class: java.lang.Class<androidx.constraintlayout.motion.utils.HyperSpline.Cubic>;
						public static THIRD: number;
						public static HALF: number;
						public eval(u: number): number;
						public vel(v: number): number;
						public constructor(a: number, b: number, c: number, d: number);
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
				export class LinearCurveFit extends androidx.constraintlayout.motion.utils.CurveFit {
					public static class: java.lang.Class<androidx.constraintlayout.motion.utils.LinearCurveFit>;
					public getSlope(double0: number, int1: number): number;
					public constructor();
					public getPos(t: number, v: native.Array<number>): void;
					public getPos(double0: number, doubles1: native.Array<number>): void;
					public getPos(t: number, j: number): number;
					public constructor(time: native.Array<number>, y: native.Array<native.Array<number>>);
					public getPos(double0: number, floats1: native.Array<number>): void;
					public getSlope(t: number, v: native.Array<number>): void;
					public getTimePoints(): native.Array<number>;
					public getSlope(t: number, j: number): number;
					public getPos(double0: number, int1: number): number;
					public getSlope(double0: number, doubles1: native.Array<number>): void;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module motion {
			export module utils {
				export class MonotonicCurveFit extends androidx.constraintlayout.motion.utils.CurveFit {
					public static class: java.lang.Class<androidx.constraintlayout.motion.utils.MonotonicCurveFit>;
					public getSlope(double0: number, int1: number): number;
					public constructor();
					public getPos(t: number, v: native.Array<number>): void;
					public getPos(double0: number, doubles1: native.Array<number>): void;
					public getPos(t: number, j: number): number;
					public constructor(time: native.Array<number>, y: native.Array<native.Array<number>>);
					public getPos(double0: number, floats1: native.Array<number>): void;
					public getSlope(t: number, v: native.Array<number>): void;
					public getTimePoints(): native.Array<number>;
					public getSlope(t: number, j: number): number;
					public getPos(double0: number, int1: number): number;
					public getSlope(double0: number, doubles1: native.Array<number>): void;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module motion {
			export module utils {
				export class Oscillator extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.motion.utils.Oscillator>;
					public static TAG: string;
					public static SIN_WAVE: number;
					public static SQUARE_WAVE: number;
					public static TRIANGLE_WAVE: number;
					public static SAW_WAVE: number;
					public static REVERSE_SAW_WAVE: number;
					public static COS_WAVE: number;
					public static BOUNCE: number;
					public getValue(time: number): number;
					public toString(): string;
					public setType(type: number): void;
					public constructor();
					public getSlope(time: number): number;
					public normalize(): void;
					public addPoint(position: number, period: number): void;
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
					public debug(tag: string, desc: string, time: number): void;
					public constructor();
					public getVelocity(x: number): number;
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
				export class VelocityMatrix extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.motion.utils.VelocityMatrix>;
					public setRotationVelocity(osc_r: androidx.constraintlayout.motion.widget.KeyCycleOscillator, position: number): void;
					public setTranslationVelocity(trans_x: androidx.constraintlayout.motion.widget.SplineSet, trans_y: androidx.constraintlayout.motion.widget.SplineSet, position: number): void;
					public setScaleVelocity(osc_sx: androidx.constraintlayout.motion.widget.KeyCycleOscillator, osc_sy: androidx.constraintlayout.motion.widget.KeyCycleOscillator, position: number): void;
					public constructor();
					public setScaleVelocity(scale_x: androidx.constraintlayout.motion.widget.SplineSet, scale_y: androidx.constraintlayout.motion.widget.SplineSet, position: number): void;
					public setTranslationVelocity(osc_x: androidx.constraintlayout.motion.widget.KeyCycleOscillator, osc_y: androidx.constraintlayout.motion.widget.KeyCycleOscillator, position: number): void;
					public clear(): void;
					public applyTransform(locationX: number, locationY: number, width: number, height: number, mAnchorDpDt: native.Array<number>): void;
					public setRotationVelocity(rot: androidx.constraintlayout.motion.widget.SplineSet, position: number): void;
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
				export abstract class Key extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.motion.widget.Key>;
					public static UNSET: number;
					public mType: number;
					public setValue(string0: string, object1: any): void;
					public constructor();
					public setInterpolation(interpolation: java.util.HashMap<string,java.lang.Integer>): void;
					public addValues(hashMap0: java.util.HashMap<string,androidx.constraintlayout.motion.widget.SplineSet>): void;
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
					public setValue(string0: string, object1: any): void;
					public constructor();
					public addValues(splines: java.util.HashMap<string,androidx.constraintlayout.motion.widget.SplineSet>): void;
					public load(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet): void;
					public setInterpolation(interpolation: java.util.HashMap<string,java.lang.Integer>): void;
					public getAttributeNames(attributes: java.util.HashSet<string>): void;
					public addValues(hashMap0: java.util.HashMap<string,androidx.constraintlayout.motion.widget.SplineSet>): void;
					public setValue(tag: string, value: any): void;
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
				export class KeyCache extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.motion.widget.KeyCache>;
					public constructor();
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
					public static KEY_TYPE: number;
					public setValue(string0: string, object1: any): void;
					public constructor();
					public addValues(splines: java.util.HashMap<string,androidx.constraintlayout.motion.widget.SplineSet>): void;
					public load(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet): void;
					public getAttributeNames(attributes: java.util.HashSet<string>): void;
					public addValues(hashMap0: java.util.HashMap<string,androidx.constraintlayout.motion.widget.SplineSet>): void;
					public setValue(tag: string, value: any): void;
					public getValue(key: string): number;
					public addCycleValues(oscSet: java.util.HashMap<string,androidx.constraintlayout.motion.widget.KeyCycleOscillator>): void;
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
				export abstract class KeyCycleOscillator extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.motion.widget.KeyCycleOscillator>;
					public mCustom: androidx.constraintlayout.widget.ConstraintAttribute;
					public mVariesBy: number;
					public getSlope(position: number): number;
					public setPoint(framePosition: number, shape: number, variesBy: number, period: number, offset: number, value: number): void;
					public toString(): string;
					public getCurveFit(): androidx.constraintlayout.motion.utils.CurveFit;
					public variesByPath(): boolean;
					public setType(type: string): void;
					public constructor();
					public get(t: number): number;
					public setPoint(framePosition: number, shape: number, variesBy: number, period: number, offset: number, value: number, custom: androidx.constraintlayout.widget.ConstraintAttribute): void;
					public setup(pathLength: number): void;
					public setProperty(view0: globalAndroid.view.View, float1: number): void;
				}
				export module KeyCycleOscillator {
					export class AlphaSet extends androidx.constraintlayout.motion.widget.KeyCycleOscillator {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.KeyCycleOscillator.AlphaSet>;
						public setProperty(view0: globalAndroid.view.View, float1: number): void;
						public setProperty(view: globalAndroid.view.View, t: number): void;
					}
					export class CustomSet extends androidx.constraintlayout.motion.widget.KeyCycleOscillator {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.KeyCycleOscillator.CustomSet>;
						public setProperty(view0: globalAndroid.view.View, float1: number): void;
						public setProperty(view: globalAndroid.view.View, t: number): void;
					}
					export class CycleOscillator extends java.lang.Object {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.KeyCycleOscillator.CycleOscillator>;
						public mCustomConstraints: java.util.HashMap<string,androidx.constraintlayout.widget.ConstraintAttribute>;
						public getValues(time: number): number;
						public setup(pathLength: number): void;
						public getSlope(time: number): number;
						public setPoint(index: number, framePosition: number, wavePeriod: number, offset: number, values: number): void;
					}
					export class ElevationSet extends androidx.constraintlayout.motion.widget.KeyCycleOscillator {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.KeyCycleOscillator.ElevationSet>;
						public setProperty(view0: globalAndroid.view.View, float1: number): void;
						public setProperty(view: globalAndroid.view.View, t: number): void;
					}
					export class IntDoubleSort extends java.lang.Object {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.KeyCycleOscillator.IntDoubleSort>;
					}
					export class IntFloatFloatSort extends java.lang.Object {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.KeyCycleOscillator.IntFloatFloatSort>;
					}
					export class PathRotateSet extends androidx.constraintlayout.motion.widget.KeyCycleOscillator {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.KeyCycleOscillator.PathRotateSet>;
						public setProperty(view0: globalAndroid.view.View, float1: number): void;
						public setProperty(view: globalAndroid.view.View, t: number): void;
						public setPathRotate(view: globalAndroid.view.View, t: number, dx: number, dy: number): void;
					}
					export class ProgressSet extends androidx.constraintlayout.motion.widget.KeyCycleOscillator {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.KeyCycleOscillator.ProgressSet>;
						public setProperty(view0: globalAndroid.view.View, float1: number): void;
						public setProperty(view: globalAndroid.view.View, t: number): void;
					}
					export class RotationSet extends androidx.constraintlayout.motion.widget.KeyCycleOscillator {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.KeyCycleOscillator.RotationSet>;
						public setProperty(view0: globalAndroid.view.View, float1: number): void;
						public setProperty(view: globalAndroid.view.View, t: number): void;
					}
					export class RotationXset extends androidx.constraintlayout.motion.widget.KeyCycleOscillator {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.KeyCycleOscillator.RotationXset>;
						public setProperty(view0: globalAndroid.view.View, float1: number): void;
						public setProperty(view: globalAndroid.view.View, t: number): void;
					}
					export class RotationYset extends androidx.constraintlayout.motion.widget.KeyCycleOscillator {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.KeyCycleOscillator.RotationYset>;
						public setProperty(view0: globalAndroid.view.View, float1: number): void;
						public setProperty(view: globalAndroid.view.View, t: number): void;
					}
					export class ScaleXset extends androidx.constraintlayout.motion.widget.KeyCycleOscillator {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.KeyCycleOscillator.ScaleXset>;
						public setProperty(view0: globalAndroid.view.View, float1: number): void;
						public setProperty(view: globalAndroid.view.View, t: number): void;
					}
					export class ScaleYset extends androidx.constraintlayout.motion.widget.KeyCycleOscillator {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.KeyCycleOscillator.ScaleYset>;
						public setProperty(view0: globalAndroid.view.View, float1: number): void;
						public setProperty(view: globalAndroid.view.View, t: number): void;
					}
					export class TranslationXset extends androidx.constraintlayout.motion.widget.KeyCycleOscillator {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.KeyCycleOscillator.TranslationXset>;
						public setProperty(view0: globalAndroid.view.View, float1: number): void;
						public setProperty(view: globalAndroid.view.View, t: number): void;
					}
					export class TranslationYset extends androidx.constraintlayout.motion.widget.KeyCycleOscillator {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.KeyCycleOscillator.TranslationYset>;
						public setProperty(view0: globalAndroid.view.View, float1: number): void;
						public setProperty(view: globalAndroid.view.View, t: number): void;
					}
					export class TranslationZset extends androidx.constraintlayout.motion.widget.KeyCycleOscillator {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.KeyCycleOscillator.TranslationZset>;
						public setProperty(view0: globalAndroid.view.View, float1: number): void;
						public setProperty(view: globalAndroid.view.View, t: number): void;
					}
					export class WavePoint extends java.lang.Object {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.KeyCycleOscillator.WavePoint>;
						public constructor(position: number, period: number, offset: number, value: number);
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
					public addFrames(motionController: androidx.constraintlayout.motion.widget.MotionController): void;
					public getKeys(): java.util.Set<java.lang.Integer>;
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
					public setValue(string0: string, object1: any): void;
					public constructor();
					public intersects(layoutWidth: number, layoutHeight: number, start: globalAndroid.graphics.RectF, end: globalAndroid.graphics.RectF, x: number, y: number): boolean;
					public addValues(splines: java.util.HashMap<string,androidx.constraintlayout.motion.widget.SplineSet>): void;
					public load(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet): void;
					public positionAttributes(view: globalAndroid.view.View, start: globalAndroid.graphics.RectF, end: globalAndroid.graphics.RectF, x: number, y: number, attribute: native.Array<string>, value: native.Array<number>): void;
					public addValues(hashMap0: java.util.HashMap<string,androidx.constraintlayout.motion.widget.SplineSet>): void;
					public intersects(int0: number, int1: number, rectF2: globalAndroid.graphics.RectF, rectF3: globalAndroid.graphics.RectF, float4: number, float5: number): boolean;
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
					public static KEY_TYPE: number;
					public addTimeValues(splines: java.util.HashMap<string,androidx.constraintlayout.motion.widget.TimeCycleSplineSet>): void;
					public setValue(string0: string, object1: any): void;
					public constructor();
					public addValues(splines: java.util.HashMap<string,androidx.constraintlayout.motion.widget.SplineSet>): void;
					public load(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet): void;
					public setInterpolation(interpolation: java.util.HashMap<string,java.lang.Integer>): void;
					public getAttributeNames(attributes: java.util.HashSet<string>): void;
					public addValues(hashMap0: java.util.HashMap<string,androidx.constraintlayout.motion.widget.SplineSet>): void;
					public setValue(tag: string, value: any): void;
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
					public static KEY_TYPE: number;
					public setValue(string0: string, object1: any): void;
					public constructor();
					public addValues(splines: java.util.HashMap<string,androidx.constraintlayout.motion.widget.SplineSet>): void;
					public load(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet): void;
					public conditionallyFire(pos: number, child: globalAndroid.view.View): void;
					public getAttributeNames(attributes: java.util.HashSet<string>): void;
					public addValues(hashMap0: java.util.HashMap<string,androidx.constraintlayout.motion.widget.SplineSet>): void;
					public setValue(tag: string, value: any): void;
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
					public constructor();
					public applyParameters(view: globalAndroid.view.View): void;
					public addValues(splines: java.util.HashMap<string,androidx.constraintlayout.motion.widget.SplineSet>, mFramePosition: number): void;
					public setState(cw: androidx.constraintlayout.solver.widgets.ConstraintWidget, constraintSet: androidx.constraintlayout.widget.ConstraintSet, viewId: number): void;
					public applyParameters(c: androidx.constraintlayout.widget.ConstraintSet.Constraint): void;
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
					public toString(): string;
					public setDrawPath(debugMode: number): void;
					public setup(parentWidth: number, parentHeight: number, transitionDuration: number, currentTime: number): void;
					public setPathMotionArc(arc: number): void;
					public setView(view: globalAndroid.view.View): void;
					public getkeyFramePositions(type: native.Array<number>, pos: native.Array<number>): number;
					public getKeyFrameInfo(type: number, info: native.Array<number>): number;
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
				export class MotionHelper extends androidx.constraintlayout.widget.ConstraintHelper implements androidx.constraintlayout.motion.widget.Animatable, androidx.constraintlayout.motion.widget.MotionLayout.TransitionListener {
					public static class: java.lang.Class<androidx.constraintlayout.motion.widget.MotionHelper>;
					public views: native.Array<globalAndroid.view.View>;
					public setProgress(progress: number): void;
					public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public sendAccessibilityEvent(eventType: number): void;
					public setProgress(view: globalAndroid.view.View, progress: number): void;
					public onTransitionCompleted(motionLayout: androidx.constraintlayout.motion.widget.MotionLayout, currentId: number): void;
					public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
					public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
					public getProgress(): number;
					public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
					public isUseOnHide(): boolean;
					public onTransitionStarted(motionLayout: androidx.constraintlayout.motion.widget.MotionLayout, startId: number, endId: number): void;
					public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
					public constructor(context: globalAndroid.content.Context);
					public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
					public isUsedOnShow(): boolean;
					public init(attrs: globalAndroid.util.AttributeSet): void;
					public onTransitionChange(motionLayout: androidx.constraintlayout.motion.widget.MotionLayout, startId: number, endId: number, progress: number): void;
					public onTransitionTrigger(motionLayout: androidx.constraintlayout.motion.widget.MotionLayout, triggerId: number, positive: boolean, progress: number): void;
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
					public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public onNestedScroll(target: globalAndroid.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
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
					public recomputeViewAttributes(child: globalAndroid.view.View): void;
					public notifySubtreeAccessibilityStateChanged(child: globalAndroid.view.View, source: globalAndroid.view.View, changeType: number): void;
					public getVelocity(): number;
					public transitionToEnd(): void;
					public getDefinedTransitions(): java.util.ArrayList<androidx.constraintlayout.motion.widget.MotionScene.Transition>;
					public setInteractionEnabled(enabled: boolean): void;
					public transitionToState(id: number, screenWidth: number, screenHeight: number): void;
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
					public onViewRemoved(view: globalAndroid.view.View): void;
					public updateState(): void;
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
					public updateState(stateId: number, set: androidx.constraintlayout.widget.ConstraintSet): void;
					public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback, type: number): globalAndroid.view.ActionMode;
					public setTransition(transition: androidx.constraintlayout.motion.widget.MotionScene.Transition): void;
					public onStartNestedScroll(child: globalAndroid.view.View, target: globalAndroid.view.View, nestedScrollAxes: number): boolean;
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
					public clearChildFocus(child: globalAndroid.view.View): void;
					public createContextMenu(menu: globalAndroid.view.ContextMenu): void;
					public setProgress(pos: number): void;
					public getParentForAccessibility(): globalAndroid.view.ViewParent;
					public addView(child: globalAndroid.view.View, index: number, params: globalAndroid.view.ViewGroup.LayoutParams): void;
					public childHasTransientStateChanged(child: globalAndroid.view.View, childHasTransientState: boolean): void;
					public canResolveLayoutDirection(): boolean;
					public onRtlPropertiesChanged(layoutDirection: number): void;
					public onNestedScrollAccepted(child: globalAndroid.view.View, target: globalAndroid.view.View, axes: number, type: number): void;
					public onTouchEvent(event: globalAndroid.view.MotionEvent): boolean;
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
					public constructor();
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
					public static TAG: string;
					public static UNSET: number;
					public static LAYOUT_IGNORE_REQUEST: number;
					public static LAYOUT_HONOR_REQUEST: number;
					public getInterpolator(): globalAndroid.view.animation.Interpolator;
					public onLayout(changed: boolean, left: number, top: number, right: number, bottom: number): void;
					public constructor(layout: androidx.constraintlayout.motion.widget.MotionLayout);
					public getTransitionById(id: number): androidx.constraintlayout.motion.widget.MotionScene.Transition;
					public getPathPercent(view: globalAndroid.view.View, position: number): number;
					public lookUpConstraintName(id: number): string;
					public setKeyframe(view: globalAndroid.view.View, position: number, name: string, value: any): void;
					public getKeyFrames(motionController: androidx.constraintlayout.motion.widget.MotionController): void;
					public gatPathMotionArc(): number;
					public bestTransitionFor(currentState: number, dx: number, dy: number, mLastTouchDown: globalAndroid.view.MotionEvent): androidx.constraintlayout.motion.widget.MotionScene.Transition;
					public getConstraintSetIds(): native.Array<number>;
					public getConstraintSet(context: globalAndroid.content.Context, id: string): androidx.constraintlayout.widget.ConstraintSet;
					public getDuration(): number;
					public getStaggered(): number;
					public getTransitionsWithState(stateid: number): java.util.List<androidx.constraintlayout.motion.widget.MotionScene.Transition>;
					public validateLayout(layout: androidx.constraintlayout.motion.widget.MotionLayout): boolean;
					public lookUpConstraintId(id: string): number;
					public setRtl(rtl: boolean): void;
					public static stripID(id: string): string;
					public addTransition(transition: androidx.constraintlayout.motion.widget.MotionScene.Transition): void;
					public setConstraintSet(id: number, set: androidx.constraintlayout.widget.ConstraintSet): void;
					public setTransition(transition: androidx.constraintlayout.motion.widget.MotionScene.Transition): void;
					public setDuration(duration: number): void;
					public removeTransition(transition: androidx.constraintlayout.motion.widget.MotionScene.Transition): void;
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
						public getTouchResponse(): androidx.constraintlayout.motion.widget.TouchResponse;
						public setEnable(enable: boolean): void;
						public setDuration(duration: number): void;
						public getDuration(): number;
						public setAutoTransition(type: number): void;
						public debugString(context: globalAndroid.content.Context): string;
						public setStagger(stagger: number): void;
						public isEnabled(): boolean;
						public isTransitionFlag(flag: number): boolean;
						public getId(): number;
						public getStagger(): number;
						public getPathMotionArc(): number;
						public getStartConstraintSetId(): number;
						public getKeyFrameList(): java.util.List<androidx.constraintlayout.motion.widget.KeyFrames>;
						public getEndConstraintSetId(): number;
						public addOnClick(context: globalAndroid.content.Context, parser: org.xmlpull.v1.XmlPullParser): void;
						public setPathMotionArc(arcMode: number): void;
						public getLayoutDuringTransition(): number;
						public constructor(id: number, motionScene: androidx.constraintlayout.motion.widget.MotionScene, constraintSetStartId: number, constraintSetEndId: number);
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
				export abstract class SplineSet extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.motion.widget.SplineSet>;
					public mCurveFit: androidx.constraintlayout.motion.utils.CurveFit;
					public mTimePoints: native.Array<number>;
					public mValues: native.Array<number>;
					public toString(): string;
					public getCurveFit(): androidx.constraintlayout.motion.utils.CurveFit;
					public setType(type: string): void;
					public constructor();
					public get(t: number): number;
					public setProperty(view0: globalAndroid.view.View, float1: number): void;
					public getSlope(t: number): number;
					public setPoint(position: number, value: number): void;
					public setup(curveType: number): void;
				}
				export module SplineSet {
					export class AlphaSet extends androidx.constraintlayout.motion.widget.SplineSet {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.SplineSet.AlphaSet>;
						public setProperty(view0: globalAndroid.view.View, float1: number): void;
						public setProperty(view: globalAndroid.view.View, t: number): void;
					}
					export class CustomSet extends androidx.constraintlayout.motion.widget.SplineSet {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.SplineSet.CustomSet>;
						public constructor();
						public setProperty(view0: globalAndroid.view.View, float1: number): void;
						public setup(curveType: number): void;
						public setPoint(position: number, value: androidx.constraintlayout.widget.ConstraintAttribute): void;
						public setProperty(view: globalAndroid.view.View, t: number): void;
						public setPoint(position: number, value: number): void;
						public constructor(attribute: string, attrList: globalAndroid.util.SparseArray<androidx.constraintlayout.widget.ConstraintAttribute>);
					}
					export class ElevationSet extends androidx.constraintlayout.motion.widget.SplineSet {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.SplineSet.ElevationSet>;
						public setProperty(view0: globalAndroid.view.View, float1: number): void;
						public setProperty(view: globalAndroid.view.View, t: number): void;
					}
					export class PathRotate extends androidx.constraintlayout.motion.widget.SplineSet {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.SplineSet.PathRotate>;
						public setProperty(view0: globalAndroid.view.View, float1: number): void;
						public setProperty(view: globalAndroid.view.View, t: number): void;
						public setPathRotate(view: globalAndroid.view.View, t: number, dx: number, dy: number): void;
					}
					export class PivotXset extends androidx.constraintlayout.motion.widget.SplineSet {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.SplineSet.PivotXset>;
						public setProperty(view0: globalAndroid.view.View, float1: number): void;
						public setProperty(view: globalAndroid.view.View, t: number): void;
					}
					export class PivotYset extends androidx.constraintlayout.motion.widget.SplineSet {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.SplineSet.PivotYset>;
						public setProperty(view0: globalAndroid.view.View, float1: number): void;
						public setProperty(view: globalAndroid.view.View, t: number): void;
					}
					export class ProgressSet extends androidx.constraintlayout.motion.widget.SplineSet {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.SplineSet.ProgressSet>;
						public setProperty(view0: globalAndroid.view.View, float1: number): void;
						public setProperty(view: globalAndroid.view.View, t: number): void;
					}
					export class RotationSet extends androidx.constraintlayout.motion.widget.SplineSet {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.SplineSet.RotationSet>;
						public setProperty(view0: globalAndroid.view.View, float1: number): void;
						public setProperty(view: globalAndroid.view.View, t: number): void;
					}
					export class RotationXset extends androidx.constraintlayout.motion.widget.SplineSet {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.SplineSet.RotationXset>;
						public setProperty(view0: globalAndroid.view.View, float1: number): void;
						public setProperty(view: globalAndroid.view.View, t: number): void;
					}
					export class RotationYset extends androidx.constraintlayout.motion.widget.SplineSet {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.SplineSet.RotationYset>;
						public setProperty(view0: globalAndroid.view.View, float1: number): void;
						public setProperty(view: globalAndroid.view.View, t: number): void;
					}
					export class ScaleXset extends androidx.constraintlayout.motion.widget.SplineSet {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.SplineSet.ScaleXset>;
						public setProperty(view0: globalAndroid.view.View, float1: number): void;
						public setProperty(view: globalAndroid.view.View, t: number): void;
					}
					export class ScaleYset extends androidx.constraintlayout.motion.widget.SplineSet {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.SplineSet.ScaleYset>;
						public setProperty(view0: globalAndroid.view.View, float1: number): void;
						public setProperty(view: globalAndroid.view.View, t: number): void;
					}
					export class Sort extends java.lang.Object {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.SplineSet.Sort>;
					}
					export class TranslationXset extends androidx.constraintlayout.motion.widget.SplineSet {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.SplineSet.TranslationXset>;
						public setProperty(view0: globalAndroid.view.View, float1: number): void;
						public setProperty(view: globalAndroid.view.View, t: number): void;
					}
					export class TranslationYset extends androidx.constraintlayout.motion.widget.SplineSet {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.SplineSet.TranslationYset>;
						public setProperty(view0: globalAndroid.view.View, float1: number): void;
						public setProperty(view: globalAndroid.view.View, t: number): void;
					}
					export class TranslationZset extends androidx.constraintlayout.motion.widget.SplineSet {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.SplineSet.TranslationZset>;
						public setProperty(view0: globalAndroid.view.View, float1: number): void;
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
			export module widget {
				export abstract class TimeCycleSplineSet extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.motion.widget.TimeCycleSplineSet>;
					public mCurveFit: androidx.constraintlayout.motion.utils.CurveFit;
					public mWaveShape: number;
					public mTimePoints: native.Array<number>;
					public mValues: native.Array<native.Array<number>>;
					public mContinue: boolean;
					public toString(): string;
					public getCurveFit(): androidx.constraintlayout.motion.utils.CurveFit;
					public setProperty(view0: globalAndroid.view.View, float1: number, long2: number, keyCache3: androidx.constraintlayout.motion.widget.KeyCache): boolean;
					public get(pos: number, time: number, view: globalAndroid.view.View, cache: androidx.constraintlayout.motion.widget.KeyCache): number;
					public setType(type: string): void;
					public setPoint(position: number, value: number, period: number, shape: number, offset: number): void;
					public constructor();
					public calcWave(period: number): number;
					public setup(curveType: number): void;
					public setStartTime(currentTime: number): void;
				}
				export module TimeCycleSplineSet {
					export class AlphaSet extends androidx.constraintlayout.motion.widget.TimeCycleSplineSet {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.TimeCycleSplineSet.AlphaSet>;
						public setProperty(view0: globalAndroid.view.View, float1: number, long2: number, keyCache3: androidx.constraintlayout.motion.widget.KeyCache): boolean;
						public setProperty(view: globalAndroid.view.View, t: number, time: number, cache: androidx.constraintlayout.motion.widget.KeyCache): boolean;
					}
					export class CustomSet extends androidx.constraintlayout.motion.widget.TimeCycleSplineSet {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.TimeCycleSplineSet.CustomSet>;
						public setPoint(position: number, value: androidx.constraintlayout.widget.ConstraintAttribute, period: number, shape: number, offset: number): void;
						public constructor();
						public setProperty(view0: globalAndroid.view.View, float1: number, long2: number, keyCache3: androidx.constraintlayout.motion.widget.KeyCache): boolean;
						public setup(curveType: number): void;
						public setProperty(view: globalAndroid.view.View, t: number, time: number, cache: androidx.constraintlayout.motion.widget.KeyCache): boolean;
						public constructor(attribute: string, attrList: globalAndroid.util.SparseArray<androidx.constraintlayout.widget.ConstraintAttribute>);
						public setPoint(position: number, value: number, period: number, shape: number, offset: number): void;
					}
					export class ElevationSet extends androidx.constraintlayout.motion.widget.TimeCycleSplineSet {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.TimeCycleSplineSet.ElevationSet>;
						public setProperty(view0: globalAndroid.view.View, float1: number, long2: number, keyCache3: androidx.constraintlayout.motion.widget.KeyCache): boolean;
						public setProperty(view: globalAndroid.view.View, t: number, time: number, cache: androidx.constraintlayout.motion.widget.KeyCache): boolean;
					}
					export class PathRotate extends androidx.constraintlayout.motion.widget.TimeCycleSplineSet {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.TimeCycleSplineSet.PathRotate>;
						public setProperty(view0: globalAndroid.view.View, float1: number, long2: number, keyCache3: androidx.constraintlayout.motion.widget.KeyCache): boolean;
						public setPathRotate(view: globalAndroid.view.View, cache: androidx.constraintlayout.motion.widget.KeyCache, t: number, time: number, dx: number, dy: number): boolean;
						public setProperty(view: globalAndroid.view.View, t: number, time: number, cache: androidx.constraintlayout.motion.widget.KeyCache): boolean;
					}
					export class ProgressSet extends androidx.constraintlayout.motion.widget.TimeCycleSplineSet {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.TimeCycleSplineSet.ProgressSet>;
						public setProperty(view0: globalAndroid.view.View, float1: number, long2: number, keyCache3: androidx.constraintlayout.motion.widget.KeyCache): boolean;
						public setProperty(view: globalAndroid.view.View, t: number, time: number, cache: androidx.constraintlayout.motion.widget.KeyCache): boolean;
					}
					export class RotationSet extends androidx.constraintlayout.motion.widget.TimeCycleSplineSet {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.TimeCycleSplineSet.RotationSet>;
						public setProperty(view0: globalAndroid.view.View, float1: number, long2: number, keyCache3: androidx.constraintlayout.motion.widget.KeyCache): boolean;
						public setProperty(view: globalAndroid.view.View, t: number, time: number, cache: androidx.constraintlayout.motion.widget.KeyCache): boolean;
					}
					export class RotationXset extends androidx.constraintlayout.motion.widget.TimeCycleSplineSet {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.TimeCycleSplineSet.RotationXset>;
						public setProperty(view0: globalAndroid.view.View, float1: number, long2: number, keyCache3: androidx.constraintlayout.motion.widget.KeyCache): boolean;
						public setProperty(view: globalAndroid.view.View, t: number, time: number, cache: androidx.constraintlayout.motion.widget.KeyCache): boolean;
					}
					export class RotationYset extends androidx.constraintlayout.motion.widget.TimeCycleSplineSet {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.TimeCycleSplineSet.RotationYset>;
						public setProperty(view0: globalAndroid.view.View, float1: number, long2: number, keyCache3: androidx.constraintlayout.motion.widget.KeyCache): boolean;
						public setProperty(view: globalAndroid.view.View, t: number, time: number, cache: androidx.constraintlayout.motion.widget.KeyCache): boolean;
					}
					export class ScaleXset extends androidx.constraintlayout.motion.widget.TimeCycleSplineSet {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.TimeCycleSplineSet.ScaleXset>;
						public setProperty(view0: globalAndroid.view.View, float1: number, long2: number, keyCache3: androidx.constraintlayout.motion.widget.KeyCache): boolean;
						public setProperty(view: globalAndroid.view.View, t: number, time: number, cache: androidx.constraintlayout.motion.widget.KeyCache): boolean;
					}
					export class ScaleYset extends androidx.constraintlayout.motion.widget.TimeCycleSplineSet {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.TimeCycleSplineSet.ScaleYset>;
						public setProperty(view0: globalAndroid.view.View, float1: number, long2: number, keyCache3: androidx.constraintlayout.motion.widget.KeyCache): boolean;
						public setProperty(view: globalAndroid.view.View, t: number, time: number, cache: androidx.constraintlayout.motion.widget.KeyCache): boolean;
					}
					export class Sort extends java.lang.Object {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.TimeCycleSplineSet.Sort>;
					}
					export class TranslationXset extends androidx.constraintlayout.motion.widget.TimeCycleSplineSet {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.TimeCycleSplineSet.TranslationXset>;
						public setProperty(view0: globalAndroid.view.View, float1: number, long2: number, keyCache3: androidx.constraintlayout.motion.widget.KeyCache): boolean;
						public setProperty(view: globalAndroid.view.View, t: number, time: number, cache: androidx.constraintlayout.motion.widget.KeyCache): boolean;
					}
					export class TranslationYset extends androidx.constraintlayout.motion.widget.TimeCycleSplineSet {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.TimeCycleSplineSet.TranslationYset>;
						public setProperty(view0: globalAndroid.view.View, float1: number, long2: number, keyCache3: androidx.constraintlayout.motion.widget.KeyCache): boolean;
						public setProperty(view: globalAndroid.view.View, t: number, time: number, cache: androidx.constraintlayout.motion.widget.KeyCache): boolean;
					}
					export class TranslationZset extends androidx.constraintlayout.motion.widget.TimeCycleSplineSet {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.TimeCycleSplineSet.TranslationZset>;
						public setProperty(view0: globalAndroid.view.View, float1: number, long2: number, keyCache3: androidx.constraintlayout.motion.widget.KeyCache): boolean;
						public setProperty(view: globalAndroid.view.View, t: number, time: number, cache: androidx.constraintlayout.motion.widget.KeyCache): boolean;
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
				export class TouchResponse extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.motion.widget.TouchResponse>;
					public setTouchAnchorLocation(x: number, y: number): void;
					public getMaxVelocity(): number;
					public toString(): string;
					public getFlags(): number;
					public setMaxVelocity(velocity: number): void;
					public getAnchorId(): number;
					public setMaxAcceleration(acceleration: number): void;
					public setRTL(rtl: boolean): void;
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
		export module utils {
			export module widget {
				export class ImageFilterButton extends androidx.appcompat.widget.AppCompatImageButton {
					public static class: java.lang.Class<androidx.constraintlayout.utils.widget.ImageFilterButton>;
					public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public sendAccessibilityEvent(eventType: number): void;
					public setBrightness(brightness: number): void;
					public setContrast(contrast: number): void;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
					public draw(canvas: globalAndroid.graphics.Canvas): void;
					public setSupportBackgroundTintList(tint: globalAndroid.content.res.ColorStateList): void;
					public getSupportImageTintMode(): globalAndroid.graphics.PorterDuff.Mode;
					public setRoundPercent(round: number): void;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
					public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
					public getWarmth(): number;
					public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
					public getRound(): number;
					public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
					public getRoundPercent(): number;
					public setSupportImageTintMode(tintMode: globalAndroid.graphics.PorterDuff.Mode): void;
					public setWarmth(warmth: number): void;
					public setSupportBackgroundTintMode(tintMode: globalAndroid.graphics.PorterDuff.Mode): void;
					public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
					public setCrossfade(crossfade: number): void;
					public getCrossfade(): number;
					public setRound(round: number): void;
					public getSupportBackgroundTintList(): globalAndroid.content.res.ColorStateList;
					public getContrast(): number;
					public getSupportBackgroundTintMode(): globalAndroid.graphics.PorterDuff.Mode;
					public invalidateDrawable(dr: globalAndroid.graphics.drawable.Drawable): void;
					public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
					public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
					public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public getSupportImageTintList(): globalAndroid.content.res.ColorStateList;
					public constructor(context: globalAndroid.content.Context);
					public getSaturation(): number;
					public setSupportImageTintList(tint: globalAndroid.content.res.ColorStateList): void;
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
					public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public sendAccessibilityEvent(eventType: number): void;
					public setBrightness(brightness: number): void;
					public setContrast(contrast: number): void;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
					public draw(canvas: globalAndroid.graphics.Canvas): void;
					public setSupportBackgroundTintList(tint: globalAndroid.content.res.ColorStateList): void;
					public getSupportImageTintMode(): globalAndroid.graphics.PorterDuff.Mode;
					public setRoundPercent(round: number): void;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
					public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
					public getWarmth(): number;
					public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
					public getRound(): number;
					public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
					public getRoundPercent(): number;
					public setSupportImageTintMode(tintMode: globalAndroid.graphics.PorterDuff.Mode): void;
					public setWarmth(warmth: number): void;
					public setSupportBackgroundTintMode(tintMode: globalAndroid.graphics.PorterDuff.Mode): void;
					public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
					public setCrossfade(crossfade: number): void;
					public getCrossfade(): number;
					public setRound(round: number): void;
					public getSupportBackgroundTintList(): globalAndroid.content.res.ColorStateList;
					public getContrast(): number;
					public getSupportBackgroundTintMode(): globalAndroid.graphics.PorterDuff.Mode;
					public invalidateDrawable(dr: globalAndroid.graphics.drawable.Drawable): void;
					public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
					public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
					public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public getSupportImageTintList(): globalAndroid.content.res.ColorStateList;
					public constructor(context: globalAndroid.content.Context);
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
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public constructor(context: globalAndroid.content.Context);
				public getType(): number;
				public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
				public resolveRtl(widget: androidx.constraintlayout.solver.widgets.ConstraintWidget, isRtl: boolean): void;
				public init(attrs: globalAndroid.util.AttributeSet): void;
				public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public setAllowsGoneWidget(supportGone: boolean): void;
				public allowsGoneWidget(): boolean;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
				public setType(type: number): void;
				public setDpMargin(margin: number): void;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
				public loadParameters(constraint: androidx.constraintlayout.widget.ConstraintSet.Constraint, child: androidx.constraintlayout.solver.widgets.HelperWidget, layoutParams: androidx.constraintlayout.widget.ConstraintLayout.LayoutParams, mapIdToWidget: globalAndroid.util.SparseArray<androidx.constraintlayout.solver.widgets.ConstraintWidget>): void;
				public sendAccessibilityEvent(eventType: number): void;
				public setMargin(margin: number): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
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
				public noOfInterpValues(): number;
				public setColorValue(value: number): void;
				public getValuesToInterpolate(ret: native.Array<number>): void;
				public setIntValue(value: number): void;
				public setValue(value: native.Array<number>): void;
				public constructor(name: string, attributeType: androidx.constraintlayout.widget.ConstraintAttribute.AttributeType, value: any);
				public setFloatValue(value: number): void;
				public constructor(source: androidx.constraintlayout.widget.ConstraintAttribute, value: any);
				public static setAttributes(view: globalAndroid.view.View, map: java.util.HashMap<string,androidx.constraintlayout.widget.ConstraintAttribute>): void;
				public setValue(value: any): void;
				public diff(constraintAttribute: androidx.constraintlayout.widget.ConstraintAttribute): boolean;
				public setInterpolatedValue(view: globalAndroid.view.View, value: native.Array<number>): void;
				public static parse(context: globalAndroid.content.Context, parser: org.xmlpull.v1.XmlPullParser, custom: java.util.HashMap<string,androidx.constraintlayout.widget.ConstraintAttribute>): void;
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
				public mHelperWidget: androidx.constraintlayout.solver.widgets.Helper;
				public mUseViewMeasure: boolean;
				public mReferenceIds: string;
				public mReferenceTags: string;
				public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
				public constructor(context: globalAndroid.content.Context);
				public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
				public init(attrs: globalAndroid.util.AttributeSet): void;
				public getReferencedIds(): native.Array<number>;
				public getViews(layout: androidx.constraintlayout.widget.ConstraintLayout): native.Array<globalAndroid.view.View>;
				public setTag(key: number, tag: any): void;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
				public loadParameters(constraint: androidx.constraintlayout.widget.ConstraintSet.Constraint, child: androidx.constraintlayout.solver.widgets.HelperWidget, layoutParams: androidx.constraintlayout.widget.ConstraintLayout.LayoutParams, mapIdToWidget: globalAndroid.util.SparseArray<androidx.constraintlayout.solver.widgets.ConstraintWidget>): void;
				public updatePostLayout(container: androidx.constraintlayout.widget.ConstraintLayout): void;
				public sendAccessibilityEvent(eventType: number): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
				public addView(view: globalAndroid.view.View): void;
				public updatePreLayout(container: androidx.constraintlayout.solver.widgets.ConstraintWidgetContainer, helper: androidx.constraintlayout.solver.widgets.Helper, map: globalAndroid.util.SparseArray<androidx.constraintlayout.solver.widgets.ConstraintWidget>): void;
				public setIds(idList: string): void;
				public applyLayoutFeatures(): void;
				public updatePostMeasure(container: androidx.constraintlayout.widget.ConstraintLayout): void;
				public applyLayoutFeatures(container: androidx.constraintlayout.widget.ConstraintLayout): void;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public removeView(view: globalAndroid.view.View): void;
				public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public resolveRtl(widget: androidx.constraintlayout.solver.widgets.ConstraintWidget, isRtl: boolean): void;
				public updatePreLayout(container: androidx.constraintlayout.widget.ConstraintLayout): void;
				public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public setTag(tag: any): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
				public validateParams(): void;
				public updatePreDraw(container: androidx.constraintlayout.widget.ConstraintLayout): void;
				public updatePostConstraints(constainer: androidx.constraintlayout.widget.ConstraintLayout): void;
				public setReferencedIds(ids: native.Array<number>): void;
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
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
				public mLayoutWidget: androidx.constraintlayout.solver.widgets.ConstraintWidgetContainer;
				public mDirtyHierarchy: boolean;
				public mConstraintLayoutSpec: androidx.constraintlayout.widget.ConstraintLayoutStates;
				public static DESIGN_INFO_ID: number;
				/** @deprecated */
				public invalidateChild(child: globalAndroid.view.View, dirty: globalAndroid.graphics.Rect): void;
				public focusSearch(direction: number): globalAndroid.view.View;
				public childDrawableStateChanged(child: globalAndroid.view.View): void;
				public onStopNestedScroll(child: globalAndroid.view.View): void;
				public getMaxHeight(): number;
				public isLayoutRequested(): boolean;
				public onNestedPrePerformAccessibilityAction(target: globalAndroid.view.View, action: number, bundle2: globalAndroid.os.Bundle): boolean;
				public resolveMeasuredDimension(widthMeasureSpec: number, heightMeasureSpec: number, measuredWidth: number, measuredHeight: number, isWidthMeasuredTooSmall: boolean, isHeightMeasuredTooSmall: boolean): void;
				public getTextDirection(): number;
				public resolveSystem(layout: androidx.constraintlayout.solver.widgets.ConstraintWidgetContainer, optimizationLevel: number, widthMeasureSpec: number, heightMeasureSpec: number): void;
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
				public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onLayout(boolean0: boolean, int1: number, int2: number, int3: number, int4: number): void;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
				public updateViewLayout(view: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public onNestedScroll(target: globalAndroid.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
				public focusSearch(focused: globalAndroid.view.View, direction: number): globalAndroid.view.View;
				/** @deprecated */
				public requestFitSystemWindows(): void;
				public forceLayout(): void;
				public showContextMenuForChild(originalView: globalAndroid.view.View, x: number, y: number): boolean;
				public bringChildToFront(child: globalAndroid.view.View): void;
				public clearChildFocus(child: globalAndroid.view.View): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public fillMetrics(metrics: androidx.constraintlayout.solver.Metrics): void;
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
				public getViewWidget(view: globalAndroid.view.View): androidx.constraintlayout.solver.widgets.ConstraintWidget;
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
				public addView(child: globalAndroid.view.View): void;
				public setSelfDimensionBehaviour(layout: androidx.constraintlayout.solver.widgets.ConstraintWidgetContainer, widthMode: number, widthSize: number, heightMode: number, heightSize: number): void;
				public getViewById(id: number): globalAndroid.view.View;
				public onViewRemoved(view: globalAndroid.view.View): void;
				public applyConstraintsFromLayoutParams(isInEditMode: boolean, child: globalAndroid.view.View, widget: androidx.constraintlayout.solver.widgets.ConstraintWidget, layoutParams: androidx.constraintlayout.widget.ConstraintLayout.LayoutParams, idToWidget: globalAndroid.util.SparseArray<androidx.constraintlayout.solver.widgets.ConstraintWidget>): void;
				public requestSendAccessibilityEvent(child: globalAndroid.view.View, event: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
				public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
				public isTextAlignmentResolved(): boolean;
				public getLayoutDirection(): number;
				public addView(child: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public getMinHeight(): number;
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
					public static HORIZONTAL: number;
					public static VERTICAL: number;
					public static LEFT: number;
					public static RIGHT: number;
					public static TOP: number;
					public static BOTTOM: number;
					public static BASELINE: number;
					public static START: number;
					public static END: number;
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
					public helped: boolean;
					public getConstraintWidget(): androidx.constraintlayout.solver.widgets.ConstraintWidget;
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
						public static map: globalAndroid.util.SparseIntArray;
					}
				}
				export class Measurer extends java.lang.Object implements androidx.constraintlayout.solver.widgets.analyzer.BasicMeasure.Measurer {
					public static class: java.lang.Class<androidx.constraintlayout.widget.ConstraintLayout.Measurer>;
					public didMeasures(): void;
					public captureLayoutInfos(widthSpec: number, heightSpec: number, top: number, bottom: number, width: number, height: number): void;
					public constructor(this0: androidx.constraintlayout.widget.ConstraintLayout, l: androidx.constraintlayout.widget.ConstraintLayout);
					public measure(widget: androidx.constraintlayout.solver.widgets.ConstraintWidget, measure: androidx.constraintlayout.solver.widgets.analyzer.BasicMeasure.Measure): void;
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
				public static UNSET: number;
				public static MATCH_CONSTRAINT: number;
				public static WRAP_CONTENT: number;
				public static MATCH_CONSTRAINT_WRAP: number;
				public static MATCH_CONSTRAINT_SPREAD: number;
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
				public applyToHelper(helper: androidx.constraintlayout.widget.ConstraintHelper, child: androidx.constraintlayout.solver.widgets.ConstraintWidget, layoutParams: androidx.constraintlayout.widget.ConstraintLayout.LayoutParams, mapIdToWidget: globalAndroid.util.SparseArray<androidx.constraintlayout.solver.widgets.ConstraintWidget>): void;
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
				public setDimensionRatio(viewId: number, ratio: string): void;
				public centerHorizontallyRtl(viewId: number, toView: number): void;
				public constrainHeight(viewId: number, height: number): void;
				public setHorizontalChainStyle(viewId: number, chainStyle: number): void;
				public setReferencedIds(id: number, referenced: native.Array<number>): void;
				public setGuidelinePercent(guidelineID: number, ratio: number): void;
				public createBarrier(id: number, direction: number, margin: number, referenced: native.Array<number>): void;
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
					public applyTo(param: androidx.constraintlayout.widget.ConstraintLayout.LayoutParams): void;
					public clone(): androidx.constraintlayout.widget.ConstraintSet.Constraint;
				}
				export class Layout extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.widget.ConstraintSet.Layout>;
					public mIsGuideline: boolean;
					public mApply: boolean;
					public mWidth: number;
					public mHeight: number;
					public static UNSET: number;
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
					public goneLeftMargin: number;
					public goneTopMargin: number;
					public goneRightMargin: number;
					public goneBottomMargin: number;
					public goneEndMargin: number;
					public goneStartMargin: number;
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
					public copyFrom(src: androidx.constraintlayout.widget.ConstraintSet.Layout): void;
					public constructor();
					public dump(scene: androidx.constraintlayout.motion.widget.MotionScene, stringBuilder: java.lang.StringBuilder): void;
				}
				export class Motion extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.widget.ConstraintSet.Motion>;
					public mApply: boolean;
					public mAnimateRelativeTo: number;
					public mTransitionEasing: string;
					public mPathMotionArc: number;
					public mDrawPath: number;
					public mMotionStagger: number;
					public mPathRotate: number;
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
					public translationX: number;
					public translationY: number;
					public translationZ: number;
					public applyElevation: boolean;
					public elevation: number;
					public constructor();
					public copyFrom(src: androidx.constraintlayout.widget.ConstraintSet.Transform): void;
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
			export class StateSet extends java.lang.Object {
				public static class: java.lang.Class<androidx.constraintlayout.widget.StateSet>;
				public static TAG: string;
				public convertToConstraintSet(currentConstrainSettId: number, stateId: number, width: number, height: number): number;
				public setOnConstraintsChanged(constraintsChangedListener: androidx.constraintlayout.widget.ConstraintsChangedListener): void;
				public stateGetConstraintID(id: number, width: number, height: number): number;
				public needsToChange(id: number, width: number, height: number): boolean;
				public constructor(context: globalAndroid.content.Context, parser: org.xmlpull.v1.XmlPullParser);
				public updateConstraints(currentid: number, id: number, width: number, height: number): number;
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
				public onMeasure(layout: androidx.constraintlayout.solver.widgets.VirtualLayout, widthMeasureSpec: number, heightMeasureSpec: number): void;
				public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
				public setVisibility(visibility: number): void;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
				public sendAccessibilityEvent(eventType: number): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public onAttachedToWindow(): void;
			}
		}
	}
}

//Generics information:

