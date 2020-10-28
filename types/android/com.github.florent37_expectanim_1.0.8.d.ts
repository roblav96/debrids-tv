declare module com {
	export module github {
		export module florent37 {
			export module expectanim {
				export class BuildConfig extends java.lang.Object {
					public static class: java.lang.Class<com.github.florent37.expectanim.BuildConfig>;
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
	export module github {
		export module florent37 {
			export module expectanim {
				export class ExpectAnim extends java.lang.Object {
					public static class: java.lang.Class<com.github.florent37.expectanim.ExpectAnim>;
					public reset(): void;
					public start(): com.github.florent37.expectanim.ExpectAnim;
					public static concat(expectAnim: com.github.florent37.expectanim.ExpectAnim, expectAnims: native.Array<com.github.florent37.expectanim.ExpectAnim>): com.github.florent37.expectanim.ExpectAnim;
					public setInterpolator(interpolator: globalAndroid.view.animation.Interpolator): com.github.florent37.expectanim.ExpectAnim;
					public expect(view: globalAndroid.view.View): com.github.florent37.expectanim.ViewExpectation;
					public setNow(): void;
					public executeAfterDraw(view: globalAndroid.view.View, runnable: java.lang.Runnable): void;
					public addEndListener(listener: com.github.florent37.expectanim.listener.AnimationEndListener): com.github.florent37.expectanim.ExpectAnim;
					public constructor();
					public isPlaying(): boolean;
					public addStartListener(listener: com.github.florent37.expectanim.listener.AnimationStartListener): com.github.florent37.expectanim.ExpectAnim;
					public setPercent(percent: number): void;
					public setStartDelay(startDelay: number): com.github.florent37.expectanim.ExpectAnim;
					public setDuration(duration: number): com.github.florent37.expectanim.ExpectAnim;
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module florent37 {
			export module expectanim {
				export class ViewCalculator extends java.lang.Object {
					public static class: java.lang.Class<com.github.florent37.expectanim.ViewCalculator>;
					public finalPositionLeftOfView(view: globalAndroid.view.View, itsMe: boolean): number;
					public finalPositionTopOfView(view: globalAndroid.view.View, itsMe: boolean): number;
					public setExpectationForView(view: globalAndroid.view.View, viewExpectation: com.github.florent37.expectanim.ViewExpectation): void;
					public finalPositionBottomOfView(view: globalAndroid.view.View): number;
					public finalWidthOfView(view: globalAndroid.view.View): number;
					public finalHeightOfView(view: globalAndroid.view.View): number;
					public finalPositionRightOfView(view: globalAndroid.view.View): number;
					public finalCenterYOfView(view: globalAndroid.view.View): number;
					public finalPositionTopOfView(view: globalAndroid.view.View): number;
					public constructor();
					public finalPositionLeftOfView(view: globalAndroid.view.View): number;
					public finalCenterXOfView(view: globalAndroid.view.View): number;
					public wasCalculated(viewExpectation: com.github.florent37.expectanim.ViewExpectation): void;
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module florent37 {
			export module expectanim {
				export class ViewExpectation extends java.lang.Object {
					public static class: java.lang.Class<com.github.florent37.expectanim.ViewExpectation>;
					public toAnimation(): com.github.florent37.expectanim.ExpectAnim;
					public expect(view: globalAndroid.view.View): com.github.florent37.expectanim.ViewExpectation;
					public toBe(animExpectations: native.Array<com.github.florent37.expectanim.core.AnimExpectation>): com.github.florent37.expectanim.ViewExpectation;
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module florent37 {
			export module expectanim {
				export module core {
					export abstract class AnimExpectation extends java.lang.Object {
						public static class: java.lang.Class<com.github.florent37.expectanim.core.AnimExpectation>;
						public viewCalculator: com.github.florent37.expectanim.ViewCalculator;
						public constructor();
						public setViewCalculator(viewCalculator: com.github.florent37.expectanim.ViewCalculator): void;
						public getViewsDependencies(): java.util.List<globalAndroid.view.View>;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module florent37 {
			export module expectanim {
				export module core {
					export abstract class ExpectAnimManager extends java.lang.Object {
						public static class: java.lang.Class<com.github.florent37.expectanim.core.ExpectAnimManager>;
						public animExpectations: java.util.List<com.github.florent37.expectanim.core.AnimExpectation>;
						public viewToMove: globalAndroid.view.View;
						public viewCalculator: com.github.florent37.expectanim.ViewCalculator;
						public calculate(): void;
						public getAnimators(): java.util.List<globalAndroid.animation.Animator>;
						public constructor(animExpectations: java.util.List<com.github.florent37.expectanim.core.AnimExpectation>, viewToMove: globalAndroid.view.View, viewCalculator: com.github.florent37.expectanim.ViewCalculator);
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module florent37 {
			export module expectanim {
				export module core {
					export class Expectations extends java.lang.Object {
						public static class: java.lang.Class<com.github.florent37.expectanim.core.Expectations>;
						public static atItsOriginalPosition(): com.github.florent37.expectanim.core.position.PositionAnimExpectation;
						public static height(height: number): com.github.florent37.expectanim.core.scale.ScaleAnimExpectation;
						public static toLeftOf(view: globalAndroid.view.View): com.github.florent37.expectanim.core.position.PositionAnimExpectation;
						public static alignTop(otherView: globalAndroid.view.View): com.github.florent37.expectanim.core.position.PositionAnimExpectation;
						public static scale(scaleX: number, scaleY: number): com.github.florent37.expectanim.core.scale.ScaleAnimExpectation;
						public static alignLeft(otherView: globalAndroid.view.View): com.github.florent37.expectanim.core.position.PositionAnimExpectation;
						public static toHaveBackgroundAlpha(alpha: number): com.github.florent37.expectanim.core.custom.CustomAnimExpectation;
						public static withCameraDistance(cameraDistance: number): com.github.florent37.expectanim.core.anim3d.CameraDistanceExpectation;
						public static centerBetweenViews(view1: globalAndroid.view.View, view2: globalAndroid.view.View, horizontal: boolean, vertical: boolean): com.github.florent37.expectanim.core.position.PositionAnimExpectation;
						public static rightOfParent(): com.github.florent37.expectanim.core.position.PositionAnimExpectation;
						public static centerBetweenViewAndParent(otherView: globalAndroid.view.View, horizontal: boolean, vertical: boolean, toBeOnRight: boolean, toBeOnBottom: boolean): com.github.florent37.expectanim.core.position.PositionAnimExpectation;
						public static alignBottom(otherView: globalAndroid.view.View): com.github.florent37.expectanim.core.position.PositionAnimExpectation;
						public static aboveOf(view: globalAndroid.view.View): com.github.florent37.expectanim.core.position.PositionAnimExpectation;
						public static centerHorizontalInParent(): com.github.florent37.expectanim.core.position.PositionAnimExpectation;
						public static atItsOriginalRotation(): com.github.florent37.expectanim.core.rotation.RotationExpectation;
						public static rotated(rotation: number): com.github.florent37.expectanim.core.rotation.RotationExpectation;
						public static vertical(bottomOfViewAtLeft: boolean): com.github.florent37.expectanim.core.rotation.RotationExpectation;
						public static height(height: number, gravityHorizontal: number, gravityVertical: number): com.github.florent37.expectanim.core.scale.ScaleAnimExpectation;
						public static toRightOf(view: globalAndroid.view.View): com.github.florent37.expectanim.core.position.PositionAnimExpectation;
						public static invisible(): com.github.florent37.expectanim.core.alpha.AlphaAnimExpectation;
						public static sameWidthAs(otherView: globalAndroid.view.View): com.github.florent37.expectanim.core.scale.ScaleAnimExpectation;
						public static visible(): com.github.florent37.expectanim.core.alpha.AlphaAnimExpectation;
						public static sameCenterHorizontalAs(view: globalAndroid.view.View): com.github.florent37.expectanim.core.position.PositionAnimExpectation;
						public static atItsOriginalScale(): com.github.florent37.expectanim.core.scale.ScaleAnimExpectation;
						public static toHaveTextColor(textColor: number): com.github.florent37.expectanim.core.custom.CustomAnimExpectation;
						public constructor();
						public static width(width: number, gravityHorizontal: number, gravityVertical: number): com.github.florent37.expectanim.core.scale.ScaleAnimExpectation;
						public static sameAlphaAs(otherView: globalAndroid.view.View): com.github.florent37.expectanim.core.alpha.AlphaAnimExpectation;
						public static flippedVertically(): com.github.florent37.expectanim.core.rotation.RotationExpectation;
						public static sameHeightAs(otherView: globalAndroid.view.View): com.github.florent37.expectanim.core.scale.ScaleAnimExpectation;
						public static sameCenterVerticalAs(view: globalAndroid.view.View): com.github.florent37.expectanim.core.position.PositionAnimExpectation;
						public static centerInParent(horizontal: boolean, vertical: boolean): com.github.florent37.expectanim.core.position.PositionAnimExpectation;
						public static leftOfParent(): com.github.florent37.expectanim.core.position.PositionAnimExpectation;
						public static flippedHorizontally(): com.github.florent37.expectanim.core.rotation.RotationExpectation;
						public static topOfParent(): com.github.florent37.expectanim.core.position.PositionAnimExpectation;
						public static belowOf(view: globalAndroid.view.View): com.github.florent37.expectanim.core.position.PositionAnimExpectation;
						public static bottomOfParent(): com.github.florent37.expectanim.core.position.PositionAnimExpectation;
						public static centerVerticalInParent(): com.github.florent37.expectanim.core.position.PositionAnimExpectation;
						public static outOfScreen(gravities: native.Array<number>): com.github.florent37.expectanim.core.position.PositionAnimExpectation;
						public static flippedHorizontallyAndVertically(): com.github.florent37.expectanim.core.rotation.RotationExpectation;
						public static alpha(alpha: number): com.github.florent37.expectanim.core.alpha.AlphaAnimExpectation;
						public static sameCenterAs(view: globalAndroid.view.View, horizontal: boolean, vertical: boolean): com.github.florent37.expectanim.core.position.PositionAnimExpectation;
						public static width(width: number): com.github.florent37.expectanim.core.scale.ScaleAnimExpectation;
						public static scale(scaleX: number, scaleY: number, gravityHorizontal: number, gravityVertical: number): com.github.florent37.expectanim.core.scale.ScaleAnimExpectation;
						public static sameScaleAs(otherView: globalAndroid.view.View): com.github.florent37.expectanim.core.scale.ScaleAnimExpectation;
						public static alignRight(otherView: globalAndroid.view.View): com.github.florent37.expectanim.core.position.PositionAnimExpectation;
					}
					export module Expectations {
						export class GravityScaleHorizontalIntDef extends java.lang.Object implements java.lang.annotation.Annotation {
							public static class: java.lang.Class<com.github.florent37.expectanim.core.Expectations.GravityScaleHorizontalIntDef>;
							/**
							 * Constructs a new instance of the com.github.florent37.expectanim.core.Expectations$GravityScaleHorizontalIntDef interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
						export class GravityScaleVerticalIntDef extends java.lang.Object implements java.lang.annotation.Annotation {
							public static class: java.lang.Class<com.github.florent37.expectanim.core.Expectations.GravityScaleVerticalIntDef>;
							/**
							 * Constructs a new instance of the com.github.florent37.expectanim.core.Expectations$GravityScaleVerticalIntDef interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
	export module github {
		export module florent37 {
			export module expectanim {
				export module core {
					export module alpha {
						export abstract class AlphaAnimExpectation extends com.github.florent37.expectanim.core.AnimExpectation {
							public static class: java.lang.Class<com.github.florent37.expectanim.core.alpha.AlphaAnimExpectation>;
							public constructor();
							public getCalculatedAlpha(view0: globalAndroid.view.View): java.lang.Float;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module florent37 {
			export module expectanim {
				export module core {
					export module alpha {
						export class AlphaAnimExpectationValue extends com.github.florent37.expectanim.core.alpha.AlphaAnimExpectation {
							public static class: java.lang.Class<com.github.florent37.expectanim.core.alpha.AlphaAnimExpectationValue>;
							public constructor();
							public getCalculatedAlpha(view0: globalAndroid.view.View): java.lang.Float;
							public getCalculatedAlpha(viewToMove: globalAndroid.view.View): java.lang.Float;
							public constructor(alpha: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module florent37 {
			export module expectanim {
				export module core {
					export module alpha {
						export class ExpectAnimAlphaManager extends com.github.florent37.expectanim.core.ExpectAnimManager {
							public static class: java.lang.Class<com.github.florent37.expectanim.core.alpha.ExpectAnimAlphaManager>;
							public calculate(): void;
							public getAnimators(): java.util.List<globalAndroid.animation.Animator>;
							public constructor(animExpectations: java.util.List<com.github.florent37.expectanim.core.AnimExpectation>, viewToMove: globalAndroid.view.View, viewCalculator: com.github.florent37.expectanim.ViewCalculator);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module florent37 {
			export module expectanim {
				export module core {
					export module anim3d {
						export abstract class CameraDistanceExpectation extends com.github.florent37.expectanim.core.AnimExpectation {
							public static class: java.lang.Class<com.github.florent37.expectanim.core.anim3d.CameraDistanceExpectation>;
							public constructor();
							public getCalculatedCameraDistance(view0: globalAndroid.view.View): java.lang.Float;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module florent37 {
			export module expectanim {
				export module core {
					export module anim3d {
						export class CameraDistanceExpectationValue extends com.github.florent37.expectanim.core.anim3d.CameraDistanceExpectation {
							public static class: java.lang.Class<com.github.florent37.expectanim.core.anim3d.CameraDistanceExpectationValue>;
							public constructor();
							public getCalculatedCameraDistance(view0: globalAndroid.view.View): java.lang.Float;
							public constructor(cameraDistance: number);
							public getCalculatedCameraDistance(viewToMove: globalAndroid.view.View): java.lang.Float;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module florent37 {
			export module expectanim {
				export module core {
					export module anim3d {
						export class ExpectAnimCameraDistanceManager extends com.github.florent37.expectanim.core.ExpectAnimManager {
							public static class: java.lang.Class<com.github.florent37.expectanim.core.anim3d.ExpectAnimCameraDistanceManager>;
							public calculate(): void;
							public getAnimators(): java.util.List<globalAndroid.animation.Animator>;
							public getCameraDistance(): java.lang.Float;
							public constructor(animExpectations: java.util.List<com.github.florent37.expectanim.core.AnimExpectation>, viewToMove: globalAndroid.view.View, viewCalculator: com.github.florent37.expectanim.ViewCalculator);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module florent37 {
			export module expectanim {
				export module core {
					export module custom {
						export abstract class CustomAnimExpectation extends com.github.florent37.expectanim.core.AnimExpectation {
							public static class: java.lang.Class<com.github.florent37.expectanim.core.custom.CustomAnimExpectation>;
							public constructor();
							public getAnimator(view0: globalAndroid.view.View): globalAndroid.animation.Animator;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module florent37 {
			export module expectanim {
				export module core {
					export module custom {
						export class ExpectAnimCustomManager extends com.github.florent37.expectanim.core.ExpectAnimManager {
							public static class: java.lang.Class<com.github.florent37.expectanim.core.custom.ExpectAnimCustomManager>;
							public calculate(): void;
							public getAnimators(): java.util.List<globalAndroid.animation.Animator>;
							public constructor(animExpectations: java.util.List<com.github.florent37.expectanim.core.AnimExpectation>, viewToMove: globalAndroid.view.View, viewCalculator: com.github.florent37.expectanim.ViewCalculator);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module florent37 {
			export module expectanim {
				export module core {
					export module custom {
						export class TextColorAnimExpectation extends com.github.florent37.expectanim.core.custom.CustomAnimExpectation {
							public static class: java.lang.Class<com.github.florent37.expectanim.core.custom.TextColorAnimExpectation>;
							public constructor();
							public getAnimator(viewToMove: globalAndroid.view.View): globalAndroid.animation.Animator;
							public constructor(textColor: number);
							public getAnimator(view0: globalAndroid.view.View): globalAndroid.animation.Animator;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module florent37 {
			export module expectanim {
				export module core {
					export module custom {
						export class ViewBackgroundAlphaAnimExpectation extends com.github.florent37.expectanim.core.custom.CustomAnimExpectation {
							public static class: java.lang.Class<com.github.florent37.expectanim.core.custom.ViewBackgroundAlphaAnimExpectation>;
							public constructor();
							public getAnimator(viewToMove: globalAndroid.view.View): globalAndroid.animation.Animator;
							public constructor(alpha: number);
							public getAnimator(view0: globalAndroid.view.View): globalAndroid.animation.Animator;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module florent37 {
			export module expectanim {
				export module core {
					export module position {
						export class ExpectAnimPositionManager extends com.github.florent37.expectanim.core.ExpectAnimManager {
							public static class: java.lang.Class<com.github.florent37.expectanim.core.position.ExpectAnimPositionManager>;
							public calculate(): void;
							public getAnimators(): java.util.List<globalAndroid.animation.Animator>;
							public getPositionX(): java.lang.Float;
							public constructor(animExpectations: java.util.List<com.github.florent37.expectanim.core.AnimExpectation>, viewToMove: globalAndroid.view.View, viewCalculator: com.github.florent37.expectanim.ViewCalculator);
							public getPositionY(): java.lang.Float;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module florent37 {
			export module expectanim {
				export module core {
					export module position {
						export abstract class PositionAnimExpectation extends com.github.florent37.expectanim.core.AnimExpectation {
							public static class: java.lang.Class<com.github.florent37.expectanim.core.position.PositionAnimExpectation>;
							public constructor();
							public static dpToPx(context: globalAndroid.content.Context, dp: number): number;
							public setForTranslationY(forTranslationY: boolean): void;
							public getMargin(view: globalAndroid.view.View): number;
							public isForPositionX(): boolean;
							public isForPositionY(): boolean;
							public setForTranslationX(forTranslationX: boolean): void;
							public withMarginDp(marginDp: number): com.github.florent37.expectanim.core.position.PositionAnimExpectation;
							public getCalculatedValueY(view0: globalAndroid.view.View): java.lang.Float;
							public withMargin(margin: number): com.github.florent37.expectanim.core.position.PositionAnimExpectation;
							public isForTranslationY(): boolean;
							public withMarginDimen(marginRes: number): com.github.florent37.expectanim.core.position.PositionAnimExpectation;
							public setForPositionY(forPositionY: boolean): void;
							public isForTranslationX(): boolean;
							public setForPositionX(forPositionX: boolean): void;
							public getCalculatedValueX(view0: globalAndroid.view.View): java.lang.Float;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module florent37 {
			export module expectanim {
				export module core {
					export module position {
						export class PositionAnimExpectationAboveOf extends com.github.florent37.expectanim.core.position.PositionAnimationViewDependant {
							public static class: java.lang.Class<com.github.florent37.expectanim.core.position.PositionAnimExpectationAboveOf>;
							public constructor(otherView: globalAndroid.view.View);
							public constructor();
							public getCalculatedValueY(view0: globalAndroid.view.View): java.lang.Float;
							public getCalculatedValueY(viewToMove: globalAndroid.view.View): java.lang.Float;
							public getCalculatedValueX(view0: globalAndroid.view.View): java.lang.Float;
							public getCalculatedValueX(viewToMove: globalAndroid.view.View): java.lang.Float;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module florent37 {
			export module expectanim {
				export module core {
					export module position {
						export class PositionAnimExpectationAlignBottom extends com.github.florent37.expectanim.core.position.PositionAnimationViewDependant {
							public static class: java.lang.Class<com.github.florent37.expectanim.core.position.PositionAnimExpectationAlignBottom>;
							public constructor(otherView: globalAndroid.view.View);
							public constructor();
							public getCalculatedValueY(view0: globalAndroid.view.View): java.lang.Float;
							public getCalculatedValueY(viewToMove: globalAndroid.view.View): java.lang.Float;
							public getCalculatedValueX(view0: globalAndroid.view.View): java.lang.Float;
							public getCalculatedValueX(viewToMove: globalAndroid.view.View): java.lang.Float;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module florent37 {
			export module expectanim {
				export module core {
					export module position {
						export class PositionAnimExpectationAlignLeft extends com.github.florent37.expectanim.core.position.PositionAnimationViewDependant {
							public static class: java.lang.Class<com.github.florent37.expectanim.core.position.PositionAnimExpectationAlignLeft>;
							public constructor(otherView: globalAndroid.view.View);
							public constructor();
							public getCalculatedValueY(view0: globalAndroid.view.View): java.lang.Float;
							public getCalculatedValueY(viewToMove: globalAndroid.view.View): java.lang.Float;
							public getCalculatedValueX(view0: globalAndroid.view.View): java.lang.Float;
							public getCalculatedValueX(viewToMove: globalAndroid.view.View): java.lang.Float;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module florent37 {
			export module expectanim {
				export module core {
					export module position {
						export class PositionAnimExpectationAlignRight extends com.github.florent37.expectanim.core.position.PositionAnimationViewDependant {
							public static class: java.lang.Class<com.github.florent37.expectanim.core.position.PositionAnimExpectationAlignRight>;
							public constructor(otherView: globalAndroid.view.View);
							public constructor();
							public getCalculatedValueY(view0: globalAndroid.view.View): java.lang.Float;
							public getCalculatedValueY(viewToMove: globalAndroid.view.View): java.lang.Float;
							public getCalculatedValueX(view0: globalAndroid.view.View): java.lang.Float;
							public getCalculatedValueX(viewToMove: globalAndroid.view.View): java.lang.Float;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module florent37 {
			export module expectanim {
				export module core {
					export module position {
						export class PositionAnimExpectationAlignTop extends com.github.florent37.expectanim.core.position.PositionAnimationViewDependant {
							public static class: java.lang.Class<com.github.florent37.expectanim.core.position.PositionAnimExpectationAlignTop>;
							public constructor(otherView: globalAndroid.view.View);
							public constructor();
							public getCalculatedValueY(view0: globalAndroid.view.View): java.lang.Float;
							public getCalculatedValueY(viewToMove: globalAndroid.view.View): java.lang.Float;
							public getCalculatedValueX(view0: globalAndroid.view.View): java.lang.Float;
							public getCalculatedValueX(viewToMove: globalAndroid.view.View): java.lang.Float;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module florent37 {
			export module expectanim {
				export module core {
					export module position {
						export class PositionAnimExpectationBelowOf extends com.github.florent37.expectanim.core.position.PositionAnimationViewDependant {
							public static class: java.lang.Class<com.github.florent37.expectanim.core.position.PositionAnimExpectationBelowOf>;
							public constructor(otherView: globalAndroid.view.View);
							public constructor();
							public getCalculatedValueY(view0: globalAndroid.view.View): java.lang.Float;
							public getCalculatedValueY(viewToMove: globalAndroid.view.View): java.lang.Float;
							public getCalculatedValueX(view0: globalAndroid.view.View): java.lang.Float;
							public getCalculatedValueX(viewToMove: globalAndroid.view.View): java.lang.Float;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module florent37 {
			export module expectanim {
				export module core {
					export module position {
						export class PositionAnimExpectationBottomOfParent extends com.github.florent37.expectanim.core.position.PositionAnimExpectation {
							public static class: java.lang.Class<com.github.florent37.expectanim.core.position.PositionAnimExpectationBottomOfParent>;
							public constructor();
							public getCalculatedValueY(view0: globalAndroid.view.View): java.lang.Float;
							public getCalculatedValueY(viewToMove: globalAndroid.view.View): java.lang.Float;
							public getCalculatedValueX(view0: globalAndroid.view.View): java.lang.Float;
							public getCalculatedValueX(viewToMove: globalAndroid.view.View): java.lang.Float;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module florent37 {
			export module expectanim {
				export module core {
					export module position {
						export class PositionAnimExpectationCenterBetweenViewAndParent extends com.github.florent37.expectanim.core.position.PositionAnimationViewDependant {
							public static class: java.lang.Class<com.github.florent37.expectanim.core.position.PositionAnimExpectationCenterBetweenViewAndParent>;
							public constructor(otherView: globalAndroid.view.View);
							public constructor();
							public getCalculatedValueY(view0: globalAndroid.view.View): java.lang.Float;
							public constructor(otherView: globalAndroid.view.View, horizontal: boolean, vertical: boolean, toBeOnRight: boolean, toBeOnBottom: boolean);
							public getCalculatedValueY(viewToMove: globalAndroid.view.View): java.lang.Float;
							public getCalculatedValueX(view0: globalAndroid.view.View): java.lang.Float;
							public getCalculatedValueX(viewToMove: globalAndroid.view.View): java.lang.Float;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module florent37 {
			export module expectanim {
				export module core {
					export module position {
						export class PositionAnimExpectationCenterBetweenViews extends com.github.florent37.expectanim.core.position.PositionAnimExpectation {
							public static class: java.lang.Class<com.github.florent37.expectanim.core.position.PositionAnimExpectationCenterBetweenViews>;
							public constructor();
							public getCalculatedValueY(view0: globalAndroid.view.View): java.lang.Float;
							public getViewsDependencies(): java.util.List<globalAndroid.view.View>;
							public getCalculatedValueY(viewToMove: globalAndroid.view.View): java.lang.Float;
							public constructor(view1: globalAndroid.view.View, view2: globalAndroid.view.View, horizontal: boolean, vertical: boolean);
							public getCalculatedValueX(view0: globalAndroid.view.View): java.lang.Float;
							public getCalculatedValueX(viewToMove: globalAndroid.view.View): java.lang.Float;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module florent37 {
			export module expectanim {
				export module core {
					export module position {
						export class PositionAnimExpectationCenterInParent extends com.github.florent37.expectanim.core.position.PositionAnimExpectation {
							public static class: java.lang.Class<com.github.florent37.expectanim.core.position.PositionAnimExpectationCenterInParent>;
							public horizontal: boolean;
							public vertical: boolean;
							public constructor();
							public getCalculatedValueY(view0: globalAndroid.view.View): java.lang.Float;
							public constructor(horizontal: boolean, vertical: boolean);
							public getCalculatedValueY(viewToMove: globalAndroid.view.View): java.lang.Float;
							public getCalculatedValueX(view0: globalAndroid.view.View): java.lang.Float;
							public getCalculatedValueX(viewToMove: globalAndroid.view.View): java.lang.Float;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module florent37 {
			export module expectanim {
				export module core {
					export module position {
						export class PositionAnimExpectationLeftOf extends com.github.florent37.expectanim.core.position.PositionAnimationViewDependant {
							public static class: java.lang.Class<com.github.florent37.expectanim.core.position.PositionAnimExpectationLeftOf>;
							public constructor(otherView: globalAndroid.view.View);
							public constructor();
							public getCalculatedValueY(view0: globalAndroid.view.View): java.lang.Float;
							public getCalculatedValueY(viewToMove: globalAndroid.view.View): java.lang.Float;
							public getCalculatedValueX(view0: globalAndroid.view.View): java.lang.Float;
							public getCalculatedValueX(viewToMove: globalAndroid.view.View): java.lang.Float;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module florent37 {
			export module expectanim {
				export module core {
					export module position {
						export class PositionAnimExpectationLeftOfParent extends com.github.florent37.expectanim.core.position.PositionAnimExpectation {
							public static class: java.lang.Class<com.github.florent37.expectanim.core.position.PositionAnimExpectationLeftOfParent>;
							public constructor();
							public getCalculatedValueY(view0: globalAndroid.view.View): java.lang.Float;
							public getCalculatedValueY(viewToMove: globalAndroid.view.View): java.lang.Float;
							public getCalculatedValueX(view0: globalAndroid.view.View): java.lang.Float;
							public getCalculatedValueX(viewToMove: globalAndroid.view.View): java.lang.Float;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module florent37 {
			export module expectanim {
				export module core {
					export module position {
						export class PositionAnimExpectationOriginal extends com.github.florent37.expectanim.core.position.PositionAnimExpectation {
							public static class: java.lang.Class<com.github.florent37.expectanim.core.position.PositionAnimExpectationOriginal>;
							public constructor();
							public getCalculatedValueY(view0: globalAndroid.view.View): java.lang.Float;
							public getCalculatedValueY(viewToMove: globalAndroid.view.View): java.lang.Float;
							public getCalculatedValueX(view0: globalAndroid.view.View): java.lang.Float;
							public getCalculatedValueX(viewToMove: globalAndroid.view.View): java.lang.Float;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module florent37 {
			export module expectanim {
				export module core {
					export module position {
						export class PositionAnimExpectationOutOfScreen extends com.github.florent37.expectanim.core.position.PositionAnimExpectation {
							public static class: java.lang.Class<com.github.florent37.expectanim.core.position.PositionAnimExpectationOutOfScreen>;
							public constructor();
							public getCalculatedValueY(view0: globalAndroid.view.View): java.lang.Float;
							public getCalculatedValueY(viewToMove: globalAndroid.view.View): java.lang.Float;
							public constructor(gravities: native.Array<number>);
							public getCalculatedValueX(view0: globalAndroid.view.View): java.lang.Float;
							public getCalculatedValueX(viewToMove: globalAndroid.view.View): java.lang.Float;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module florent37 {
			export module expectanim {
				export module core {
					export module position {
						export class PositionAnimExpectationRightOf extends com.github.florent37.expectanim.core.position.PositionAnimationViewDependant {
							public static class: java.lang.Class<com.github.florent37.expectanim.core.position.PositionAnimExpectationRightOf>;
							public constructor(otherView: globalAndroid.view.View);
							public constructor();
							public getCalculatedValueY(view0: globalAndroid.view.View): java.lang.Float;
							public getCalculatedValueY(viewToMove: globalAndroid.view.View): java.lang.Float;
							public getCalculatedValueX(view0: globalAndroid.view.View): java.lang.Float;
							public getCalculatedValueX(viewToMove: globalAndroid.view.View): java.lang.Float;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module florent37 {
			export module expectanim {
				export module core {
					export module position {
						export class PositionAnimExpectationRightOfParent extends com.github.florent37.expectanim.core.position.PositionAnimExpectation {
							public static class: java.lang.Class<com.github.florent37.expectanim.core.position.PositionAnimExpectationRightOfParent>;
							public constructor();
							public getCalculatedValueY(view0: globalAndroid.view.View): java.lang.Float;
							public getCalculatedValueY(viewToMove: globalAndroid.view.View): java.lang.Float;
							public getCalculatedValueX(view0: globalAndroid.view.View): java.lang.Float;
							public getCalculatedValueX(viewToMove: globalAndroid.view.View): java.lang.Float;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module florent37 {
			export module expectanim {
				export module core {
					export module position {
						export class PositionAnimExpectationSameCenterAs extends com.github.florent37.expectanim.core.position.PositionAnimationViewDependant {
							public static class: java.lang.Class<com.github.florent37.expectanim.core.position.PositionAnimExpectationSameCenterAs>;
							public constructor(otherView: globalAndroid.view.View);
							public constructor();
							public getCalculatedValueY(view0: globalAndroid.view.View): java.lang.Float;
							public constructor(otherView: globalAndroid.view.View, horizontal: boolean, vertical: boolean);
							public getCalculatedValueY(viewToMove: globalAndroid.view.View): java.lang.Float;
							public getCalculatedValueX(view0: globalAndroid.view.View): java.lang.Float;
							public getCalculatedValueX(viewToMove: globalAndroid.view.View): java.lang.Float;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module florent37 {
			export module expectanim {
				export module core {
					export module position {
						export class PositionAnimExpectationTopOfParent extends com.github.florent37.expectanim.core.position.PositionAnimExpectation {
							public static class: java.lang.Class<com.github.florent37.expectanim.core.position.PositionAnimExpectationTopOfParent>;
							public constructor();
							public getCalculatedValueY(view0: globalAndroid.view.View): java.lang.Float;
							public getCalculatedValueY(viewToMove: globalAndroid.view.View): java.lang.Float;
							public getCalculatedValueX(view0: globalAndroid.view.View): java.lang.Float;
							public getCalculatedValueX(viewToMove: globalAndroid.view.View): java.lang.Float;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module florent37 {
			export module expectanim {
				export module core {
					export module position {
						export abstract class PositionAnimationViewDependant extends com.github.florent37.expectanim.core.position.PositionAnimExpectation {
							public static class: java.lang.Class<com.github.florent37.expectanim.core.position.PositionAnimationViewDependant>;
							public otherView: globalAndroid.view.View;
							public constructor();
							public constructor(otherView: globalAndroid.view.View);
							public setViewCalculator(viewCalculator: com.github.florent37.expectanim.ViewCalculator): void;
							public getViewsDependencies(): java.util.List<globalAndroid.view.View>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module florent37 {
			export module expectanim {
				export module core {
					export module rotation {
						export class ExpectAnimRotationManager extends com.github.florent37.expectanim.core.ExpectAnimManager {
							public static class: java.lang.Class<com.github.florent37.expectanim.core.rotation.ExpectAnimRotationManager>;
							public getRotationX(): java.lang.Float;
							public calculate(): void;
							public getAnimators(): java.util.List<globalAndroid.animation.Animator>;
							public constructor(animExpectations: java.util.List<com.github.florent37.expectanim.core.AnimExpectation>, viewToMove: globalAndroid.view.View, viewCalculator: com.github.florent37.expectanim.ViewCalculator);
							public getRotationY(): java.lang.Float;
							public getRotation(): java.lang.Float;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module florent37 {
			export module expectanim {
				export module core {
					export module rotation {
						export abstract class RotationExpectation extends com.github.florent37.expectanim.core.AnimExpectation {
							public static class: java.lang.Class<com.github.florent37.expectanim.core.rotation.RotationExpectation>;
							public constructor();
							public getCalculatedRotationY(view0: globalAndroid.view.View): java.lang.Float;
							public getCalculatedRotation(view0: globalAndroid.view.View): java.lang.Float;
							public getCalculatedRotationX(view0: globalAndroid.view.View): java.lang.Float;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module florent37 {
			export module expectanim {
				export module core {
					export module rotation {
						export class RotationExpectationOriginal extends com.github.florent37.expectanim.core.rotation.RotationExpectation {
							public static class: java.lang.Class<com.github.florent37.expectanim.core.rotation.RotationExpectationOriginal>;
							public constructor();
							public getCalculatedRotationY(view0: globalAndroid.view.View): java.lang.Float;
							public getCalculatedRotationX(viewToMove: globalAndroid.view.View): java.lang.Float;
							public getCalculatedRotationY(viewToMove: globalAndroid.view.View): java.lang.Float;
							public getCalculatedRotation(view0: globalAndroid.view.View): java.lang.Float;
							public getCalculatedRotationX(view0: globalAndroid.view.View): java.lang.Float;
							public getCalculatedRotation(viewToMove: globalAndroid.view.View): java.lang.Float;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module florent37 {
			export module expectanim {
				export module core {
					export module rotation {
						export class RotationExpectationValue extends com.github.florent37.expectanim.core.rotation.RotationExpectation {
							public static class: java.lang.Class<com.github.florent37.expectanim.core.rotation.RotationExpectationValue>;
							public constructor();
							public getCalculatedRotationY(view0: globalAndroid.view.View): java.lang.Float;
							public getCalculatedRotationX(viewToMove: globalAndroid.view.View): java.lang.Float;
							public constructor(rotation: number);
							public getCalculatedRotationY(viewToMove: globalAndroid.view.View): java.lang.Float;
							public getCalculatedRotation(view0: globalAndroid.view.View): java.lang.Float;
							public getCalculatedRotationX(view0: globalAndroid.view.View): java.lang.Float;
							public getCalculatedRotation(viewToMove: globalAndroid.view.View): java.lang.Float;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module florent37 {
			export module expectanim {
				export module core {
					export module rotation {
						export class RotationFlipExpectationValue extends com.github.florent37.expectanim.core.rotation.RotationExpectation {
							public static class: java.lang.Class<com.github.florent37.expectanim.core.rotation.RotationFlipExpectationValue>;
							public constructor();
							public getCalculatedRotationY(view0: globalAndroid.view.View): java.lang.Float;
							public getCalculatedRotationX(viewToMove: globalAndroid.view.View): java.lang.Float;
							public getCalculatedRotationY(viewToMove: globalAndroid.view.View): java.lang.Float;
							public constructor(rotationX: number, rotationY: number);
							public getCalculatedRotation(view0: globalAndroid.view.View): java.lang.Float;
							public getCalculatedRotationX(view0: globalAndroid.view.View): java.lang.Float;
							public getCalculatedRotation(viewToMove: globalAndroid.view.View): java.lang.Float;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module florent37 {
			export module expectanim {
				export module core {
					export module scale {
						export class ExpectAnimScaleManager extends java.lang.Object {
							public static class: java.lang.Class<com.github.florent37.expectanim.core.scale.ExpectAnimScaleManager>;
							public calculate(): void;
							public getAnimators(): java.util.List<globalAndroid.animation.Animator>;
							public getScaleY(): java.lang.Float;
							public constructor(animExpectations: java.util.List<com.github.florent37.expectanim.core.AnimExpectation>, viewToMove: globalAndroid.view.View, viewCalculator: com.github.florent37.expectanim.ViewCalculator);
							public getScaleX(): java.lang.Float;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module florent37 {
			export module expectanim {
				export module core {
					export module scale {
						export abstract class ScaleAnimExpectation extends com.github.florent37.expectanim.core.AnimExpectation {
							public static class: java.lang.Class<com.github.florent37.expectanim.core.scale.ScaleAnimExpectation>;
							public constructor();
							public dpToPx(value: number, view: globalAndroid.view.View): number;
							public constructor(gravityHorizontal: java.lang.Integer, gravityVertical: java.lang.Integer);
							public getCalculatedValueScaleX(view0: globalAndroid.view.View): java.lang.Float;
							public getGravityVertical(): java.lang.Integer;
							public keepRatio(): com.github.florent37.expectanim.core.scale.ScaleAnimExpectation;
							public getGravityHorizontal(): java.lang.Integer;
							public toDp(): com.github.florent37.expectanim.core.scale.ScaleAnimExpectation;
							public withGravity(gravityHorizontal: java.lang.Integer, gravityVertical: java.lang.Integer): com.github.florent37.expectanim.core.scale.ScaleAnimExpectation;
							public getCalculatedValueScaleY(view0: globalAndroid.view.View): java.lang.Float;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module florent37 {
			export module expectanim {
				export module core {
					export module scale {
						export class ScaleAnimExpectationHeight extends com.github.florent37.expectanim.core.scale.ScaleAnimExpectation {
							public static class: java.lang.Class<com.github.florent37.expectanim.core.scale.ScaleAnimExpectationHeight>;
							public constructor();
							public constructor(gravityHorizontal: java.lang.Integer, gravityVertical: java.lang.Integer);
							public getCalculatedValueScaleX(view0: globalAndroid.view.View): java.lang.Float;
							public constructor(height: number, gravityHorizontal: java.lang.Integer, gravityVertical: java.lang.Integer);
							public getCalculatedValueScaleY(viewToMove: globalAndroid.view.View): java.lang.Float;
							public getCalculatedValueScaleX(viewToMove: globalAndroid.view.View): java.lang.Float;
							public getCalculatedValueScaleY(view0: globalAndroid.view.View): java.lang.Float;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module florent37 {
			export module expectanim {
				export module core {
					export module scale {
						export class ScaleAnimExpectationOriginalScale extends com.github.florent37.expectanim.core.scale.ScaleAnimExpectation {
							public static class: java.lang.Class<com.github.florent37.expectanim.core.scale.ScaleAnimExpectationOriginalScale>;
							public constructor();
							public constructor(gravityHorizontal: java.lang.Integer, gravityVertical: java.lang.Integer);
							public getCalculatedValueScaleX(view0: globalAndroid.view.View): java.lang.Float;
							public getCalculatedValueScaleY(viewToMove: globalAndroid.view.View): java.lang.Float;
							public getCalculatedValueScaleX(viewToMove: globalAndroid.view.View): java.lang.Float;
							public getCalculatedValueScaleY(view0: globalAndroid.view.View): java.lang.Float;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module florent37 {
			export module expectanim {
				export module core {
					export module scale {
						export class ScaleAnimExpectationSameHeightAs extends com.github.florent37.expectanim.core.scale.ScaleAnimExpectationViewDependant {
							public static class: java.lang.Class<com.github.florent37.expectanim.core.scale.ScaleAnimExpectationSameHeightAs>;
							public constructor();
							public constructor(gravityHorizontal: java.lang.Integer, gravityVertical: java.lang.Integer);
							public getCalculatedValueScaleX(view0: globalAndroid.view.View): java.lang.Float;
							public getCalculatedValueScaleY(viewToMove: globalAndroid.view.View): java.lang.Float;
							public constructor(otherView: globalAndroid.view.View, gravityHorizontal: java.lang.Integer, gravityVertical: java.lang.Integer);
							public getCalculatedValueScaleX(viewToMove: globalAndroid.view.View): java.lang.Float;
							public getCalculatedValueScaleY(view0: globalAndroid.view.View): java.lang.Float;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module florent37 {
			export module expectanim {
				export module core {
					export module scale {
						export class ScaleAnimExpectationSameScaleAs extends com.github.florent37.expectanim.core.scale.ScaleAnimExpectationViewDependant {
							public static class: java.lang.Class<com.github.florent37.expectanim.core.scale.ScaleAnimExpectationSameScaleAs>;
							public constructor();
							public constructor(otherView: globalAndroid.view.View);
							public constructor(gravityHorizontal: java.lang.Integer, gravityVertical: java.lang.Integer);
							public getCalculatedValueScaleX(view0: globalAndroid.view.View): java.lang.Float;
							public getCalculatedValueScaleY(viewToMove: globalAndroid.view.View): java.lang.Float;
							public constructor(otherView: globalAndroid.view.View, gravityHorizontal: java.lang.Integer, gravityVertical: java.lang.Integer);
							public getCalculatedValueScaleX(viewToMove: globalAndroid.view.View): java.lang.Float;
							public getCalculatedValueScaleY(view0: globalAndroid.view.View): java.lang.Float;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module florent37 {
			export module expectanim {
				export module core {
					export module scale {
						export class ScaleAnimExpectationSameWidthAs extends com.github.florent37.expectanim.core.scale.ScaleAnimExpectationViewDependant {
							public static class: java.lang.Class<com.github.florent37.expectanim.core.scale.ScaleAnimExpectationSameWidthAs>;
							public constructor();
							public constructor(gravityHorizontal: java.lang.Integer, gravityVertical: java.lang.Integer);
							public getCalculatedValueScaleX(view0: globalAndroid.view.View): java.lang.Float;
							public getCalculatedValueScaleY(viewToMove: globalAndroid.view.View): java.lang.Float;
							public constructor(otherView: globalAndroid.view.View, gravityHorizontal: java.lang.Integer, gravityVertical: java.lang.Integer);
							public getCalculatedValueScaleX(viewToMove: globalAndroid.view.View): java.lang.Float;
							public getCalculatedValueScaleY(view0: globalAndroid.view.View): java.lang.Float;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module florent37 {
			export module expectanim {
				export module core {
					export module scale {
						export class ScaleAnimExpectationValues extends com.github.florent37.expectanim.core.scale.ScaleAnimExpectation {
							public static class: java.lang.Class<com.github.florent37.expectanim.core.scale.ScaleAnimExpectationValues>;
							public constructor();
							public constructor(gravityHorizontal: java.lang.Integer, gravityVertical: java.lang.Integer);
							public getCalculatedValueScaleX(view0: globalAndroid.view.View): java.lang.Float;
							public constructor(scaleX: number, scaleY: number, gravityHorizontal: java.lang.Integer, gravityVertical: java.lang.Integer);
							public getCalculatedValueScaleY(viewToMove: globalAndroid.view.View): java.lang.Float;
							public getCalculatedValueScaleX(viewToMove: globalAndroid.view.View): java.lang.Float;
							public getCalculatedValueScaleY(view0: globalAndroid.view.View): java.lang.Float;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module florent37 {
			export module expectanim {
				export module core {
					export module scale {
						export abstract class ScaleAnimExpectationViewDependant extends com.github.florent37.expectanim.core.scale.ScaleAnimExpectation {
							public static class: java.lang.Class<com.github.florent37.expectanim.core.scale.ScaleAnimExpectationViewDependant>;
							public otherView: globalAndroid.view.View;
							public constructor();
							public constructor(gravityHorizontal: java.lang.Integer, gravityVertical: java.lang.Integer);
							public constructor(otherView: globalAndroid.view.View, gravityHorizontal: java.lang.Integer, gravityVertical: java.lang.Integer);
							public getViewsDependencies(): java.util.List<globalAndroid.view.View>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module florent37 {
			export module expectanim {
				export module core {
					export module scale {
						export class ScaleAnimExpectationWidth extends com.github.florent37.expectanim.core.scale.ScaleAnimExpectation {
							public static class: java.lang.Class<com.github.florent37.expectanim.core.scale.ScaleAnimExpectationWidth>;
							public constructor();
							public constructor(gravityHorizontal: java.lang.Integer, gravityVertical: java.lang.Integer);
							public getCalculatedValueScaleX(view0: globalAndroid.view.View): java.lang.Float;
							public getCalculatedValueScaleY(viewToMove: globalAndroid.view.View): java.lang.Float;
							public constructor(width: number, gravityHorizontal: java.lang.Integer, gravityVertical: java.lang.Integer);
							public getCalculatedValueScaleX(viewToMove: globalAndroid.view.View): java.lang.Float;
							public getCalculatedValueScaleY(view0: globalAndroid.view.View): java.lang.Float;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module florent37 {
			export module expectanim {
				export module listener {
					export class AnimationEndListener extends java.lang.Object {
						public static class: java.lang.Class<com.github.florent37.expectanim.listener.AnimationEndListener>;
						/**
						 * Constructs a new instance of the com.github.florent37.expectanim.listener.AnimationEndListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onAnimationEnd(expectAnim0: com.github.florent37.expectanim.ExpectAnim): void;
						});
						public constructor();
						public onAnimationEnd(expectAnim0: com.github.florent37.expectanim.ExpectAnim): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module florent37 {
			export module expectanim {
				export module listener {
					export class AnimationStartListener extends java.lang.Object {
						public static class: java.lang.Class<com.github.florent37.expectanim.listener.AnimationStartListener>;
						/**
						 * Constructs a new instance of the com.github.florent37.expectanim.listener.AnimationStartListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onAnimationStart(expectAnim0: com.github.florent37.expectanim.ExpectAnim): void;
						});
						public constructor();
						public onAnimationStart(expectAnim0: com.github.florent37.expectanim.ExpectAnim): void;
					}
				}
			}
		}
	}
}

//Generics information:

