declare module com {
	export module github {
		export module florent37 {
			export module viewanimator {
				export class AnimationBuilder extends java.lang.Object {
					public static class: java.lang.Class<com.github.florent37.viewanimator.AnimationBuilder>;
					public pivotX(pivotX: native.Array<number>): com.github.florent37.viewanimator.AnimationBuilder;
					public getView(): globalAndroid.view.View;
					public toPx(dp: number): number;
					public translationY(y: native.Array<number>): com.github.florent37.viewanimator.AnimationBuilder;
					public onStart(startListener: com.github.florent37.viewanimator.AnimationListener.Start): com.github.florent37.viewanimator.AnimationBuilder;
					public duration(duration: number): com.github.florent37.viewanimator.AnimationBuilder;
					public zoomIn(): com.github.florent37.viewanimator.AnimationBuilder;
					public repeatCount(repeatCount: number): com.github.florent37.viewanimator.AnimationBuilder;
					public andAnimate(views: native.Array<globalAndroid.view.View>): com.github.florent37.viewanimator.AnimationBuilder;
					public pivotY(pivotY: native.Array<number>): com.github.florent37.viewanimator.AnimationBuilder;
					public repeatMode(repeatMode: number): com.github.florent37.viewanimator.AnimationBuilder;
					public createAnimators(): java.util.List<globalAndroid.animation.Animator>;
					public textColor(colors: native.Array<number>): com.github.florent37.viewanimator.AnimationBuilder;
					public flipHorizontal(): com.github.florent37.viewanimator.AnimationBuilder;
					public slideRightIn(): com.github.florent37.viewanimator.AnimationBuilder;
					public width(width: native.Array<number>): com.github.florent37.viewanimator.AnimationBuilder;
					public fadeIn(): com.github.florent37.viewanimator.AnimationBuilder;
					public bounceIn(): com.github.florent37.viewanimator.AnimationBuilder;
					public rollIn(): com.github.florent37.viewanimator.AnimationBuilder;
					public pivotY(pivotY: number): com.github.florent37.viewanimator.AnimationBuilder;
					public zoomOut(): com.github.florent37.viewanimator.AnimationBuilder;
					public backgroundColor(colors: native.Array<number>): com.github.florent37.viewanimator.AnimationBuilder;
					public rotation(rotation: native.Array<number>): com.github.florent37.viewanimator.AnimationBuilder;
					public slideBottomIn(): com.github.florent37.viewanimator.AnimationBuilder;
					public thenAnimate(views: native.Array<globalAndroid.view.View>): com.github.florent37.viewanimator.AnimationBuilder;
					public alpha(alpha: native.Array<number>): com.github.florent37.viewanimator.AnimationBuilder;
					public translationX(x: native.Array<number>): com.github.florent37.viewanimator.AnimationBuilder;
					public scale(scale: native.Array<number>): com.github.florent37.viewanimator.AnimationBuilder;
					public getValues(values: native.Array<number>): native.Array<number>;
					public isWaitForHeight(): boolean;
					public scaleX(scaleX: native.Array<number>): com.github.florent37.viewanimator.AnimationBuilder;
					public newsPaper(): com.github.florent37.viewanimator.AnimationBuilder;
					public slideLeftIn(): com.github.florent37.viewanimator.AnimationBuilder;
					public constructor(viewAnimator: com.github.florent37.viewanimator.ViewAnimator, views: native.Array<globalAndroid.view.View>);
					public getSingleInterpolator(): globalAndroid.view.animation.Interpolator;
					public rollOut(): com.github.florent37.viewanimator.AnimationBuilder;
					public startDelay(startDelay: number): com.github.florent37.viewanimator.AnimationBuilder;
					public accelerate(): com.github.florent37.viewanimator.ViewAnimator;
					public rotationX(rotationX: native.Array<number>): com.github.florent37.viewanimator.AnimationBuilder;
					public wave(): com.github.florent37.viewanimator.AnimationBuilder;
					public swing(): com.github.florent37.viewanimator.AnimationBuilder;
					public singleInterpolator(interpolator: globalAndroid.view.animation.Interpolator): com.github.florent37.viewanimator.AnimationBuilder;
					public dp(): com.github.florent37.viewanimator.AnimationBuilder;
					public scaleY(scaleY: native.Array<number>): com.github.florent37.viewanimator.AnimationBuilder;
					public onStop(stopListener: com.github.florent37.viewanimator.AnimationListener.Stop): com.github.florent37.viewanimator.AnimationBuilder;
					public pivotX(pivotX: number): com.github.florent37.viewanimator.AnimationBuilder;
					public flash(): com.github.florent37.viewanimator.AnimationBuilder;
					public property(propertyName: string, values: native.Array<number>): com.github.florent37.viewanimator.AnimationBuilder;
					public rubber(): com.github.florent37.viewanimator.AnimationBuilder;
					public wobble(): com.github.florent37.viewanimator.AnimationBuilder;
					public path(path: globalAndroid.graphics.Path): com.github.florent37.viewanimator.AnimationBuilder;
					public waitForHeight(): com.github.florent37.viewanimator.AnimationBuilder;
					public standUp(): com.github.florent37.viewanimator.AnimationBuilder;
					public flipVertical(): com.github.florent37.viewanimator.AnimationBuilder;
					public custom(update: com.github.florent37.viewanimator.AnimationListener.Update<any>, values: native.Array<number>): com.github.florent37.viewanimator.AnimationBuilder;
					public slideTopIn(): com.github.florent37.viewanimator.AnimationBuilder;
					public fall(): com.github.florent37.viewanimator.AnimationBuilder;
					public decelerate(): com.github.florent37.viewanimator.ViewAnimator;
					public shake(): com.github.florent37.viewanimator.AnimationBuilder;
					public rotationY(rotationY: native.Array<number>): com.github.florent37.viewanimator.AnimationBuilder;
					public interpolator(interpolator: globalAndroid.view.animation.Interpolator): com.github.florent37.viewanimator.AnimationBuilder;
					public start(): com.github.florent37.viewanimator.ViewAnimator;
					public slit(): com.github.florent37.viewanimator.AnimationBuilder;
					public tada(): com.github.florent37.viewanimator.AnimationBuilder;
					public bounce(): com.github.florent37.viewanimator.AnimationBuilder;
					public toDp(px: number): number;
					public getViews(): native.Array<globalAndroid.view.View>;
					public fadeOut(): com.github.florent37.viewanimator.AnimationBuilder;
					public pulse(): com.github.florent37.viewanimator.AnimationBuilder;
					public height(height: native.Array<number>): com.github.florent37.viewanimator.AnimationBuilder;
					public bounceOut(): com.github.florent37.viewanimator.AnimationBuilder;
					public add(animator: globalAndroid.animation.Animator): com.github.florent37.viewanimator.AnimationBuilder;
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module florent37 {
			export module viewanimator {
				export class AnimationListener extends java.lang.Object {
					public static class: java.lang.Class<com.github.florent37.viewanimator.AnimationListener>;
				}
				export module AnimationListener {
					export class Start extends java.lang.Object {
						public static class: java.lang.Class<com.github.florent37.viewanimator.AnimationListener.Start>;
						/**
						 * Constructs a new instance of the com.github.florent37.viewanimator.AnimationListener$Start interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onStart(): void;
						});
						public constructor();
						public onStart(): void;
					}
					export class Stop extends java.lang.Object {
						public static class: java.lang.Class<com.github.florent37.viewanimator.AnimationListener.Stop>;
						/**
						 * Constructs a new instance of the com.github.florent37.viewanimator.AnimationListener$Stop interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onStop(): void;
						});
						public constructor();
						public onStop(): void;
					}
					export class Update<V>  extends java.lang.Object {
						public static class: java.lang.Class<com.github.florent37.viewanimator.AnimationListener.Update<any>>;
						/**
						 * Constructs a new instance of the com.github.florent37.viewanimator.AnimationListener$Update interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							update(view0: V, float1: number): void;
						});
						public constructor();
						public update(view0: V, float1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module florent37 {
			export module viewanimator {
				export class BuildConfig extends java.lang.Object {
					public static class: java.lang.Class<com.github.florent37.viewanimator.BuildConfig>;
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
			export module viewanimator {
				export class ViewAnimator extends java.lang.Object {
					public static class: java.lang.Class<com.github.florent37.viewanimator.ViewAnimator>;
					public static RESTART: number;
					public static REVERSE: number;
					public static INFINITE: number;
					public onStart(startListener: com.github.florent37.viewanimator.AnimationListener.Start): com.github.florent37.viewanimator.ViewAnimator;
					public createAnimatorSet(): globalAndroid.animation.AnimatorSet;
					public cancel(): void;
					public repeatMode(repeatMode: number): com.github.florent37.viewanimator.ViewAnimator;
					public start(): void;
					public thenAnimate(views: native.Array<globalAndroid.view.View>): com.github.florent37.viewanimator.AnimationBuilder;
					public repeatCount(repeatCount: number): com.github.florent37.viewanimator.ViewAnimator;
					public duration(duration: number): com.github.florent37.viewanimator.ViewAnimator;
					public onStop(stopListener: com.github.florent37.viewanimator.AnimationListener.Stop): com.github.florent37.viewanimator.ViewAnimator;
					public interpolator(interpolator: globalAndroid.view.animation.Interpolator): com.github.florent37.viewanimator.ViewAnimator;
					public constructor();
					public static animate(view: native.Array<globalAndroid.view.View>): com.github.florent37.viewanimator.AnimationBuilder;
					public startDelay(startDelay: number): com.github.florent37.viewanimator.ViewAnimator;
					public addAnimationBuilder(views: native.Array<globalAndroid.view.View>): com.github.florent37.viewanimator.AnimationBuilder;
				}
				export module ViewAnimator {
					export class RepeatMode extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<com.github.florent37.viewanimator.ViewAnimator.RepeatMode>;
						/**
						 * Constructs a new instance of the com.github.florent37.viewanimator.ViewAnimator$RepeatMode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							equals(object0: any): boolean;
							hashCode(): number;
							toString(): string;
							annotationType(): java.lang.Class<any>;
						});
						public constructor();
						public equals(obj: any): boolean;
						public hashCode(): number;
						public toString(): string;
						public annotationType(): java.lang.Class<any>;
					}
				}
			}
		}
	}
}

//Generics information:
//com.github.florent37.viewanimator.AnimationListener.Update:1

