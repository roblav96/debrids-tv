declare module androidx {
	export module appcompat {
		export module content {
			export module res {
				export class AppCompatResources extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.content.res.AppCompatResources>;
					public static getColorStateList(context: globalAndroid.content.Context, resId: number): globalAndroid.content.res.ColorStateList;
					public static getDrawable(context: globalAndroid.content.Context, resId: number): globalAndroid.graphics.drawable.Drawable;
				}
				export module AppCompatResources {
					export class ColorStateListCacheEntry extends java.lang.Object {
						public static class: java.lang.Class<androidx.appcompat.content.res.AppCompatResources.ColorStateListCacheEntry>;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module graphics {
			export module drawable {
				export class AnimatedStateListDrawableCompat extends androidx.appcompat.graphics.drawable.StateListDrawable implements androidx.core.graphics.drawable.TintAwareDrawable {
					public static class: java.lang.Class<androidx.appcompat.graphics.drawable.AnimatedStateListDrawableCompat>;
					public setTintMode(tintMode: globalAndroid.graphics.PorterDuff.Mode): void;
					public onStateChange(stateSet: native.Array<number>): boolean;
					public inflate(r: globalAndroid.content.res.Resources, parser: org.xmlpull.v1.XmlPullParser, attrs: globalAndroid.util.AttributeSet, theme: globalAndroid.content.res.Resources.Theme): void;
					public setTintList(tint: globalAndroid.content.res.ColorStateList): void;
					public jumpToCurrentState(): void;
					public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
					public isStateful(): boolean;
					public setVisible(visible: boolean, restart: boolean): boolean;
					public setTint(tintColor: number): void;
					public mutate(): globalAndroid.graphics.drawable.Drawable;
					public inflate(context: globalAndroid.content.Context, resources: globalAndroid.content.res.Resources, parser: org.xmlpull.v1.XmlPullParser, attrs: globalAndroid.util.AttributeSet, theme: globalAndroid.content.res.Resources.Theme): void;
					public addState(stateSet: native.Array<number>, drawable: globalAndroid.graphics.drawable.Drawable): void;
					public static createFromXmlInner(r: globalAndroid.content.res.Resources, parser: org.xmlpull.v1.XmlPullParser, attrs: globalAndroid.util.AttributeSet): globalAndroid.graphics.drawable.Drawable;
					public addState(stateSet: native.Array<number>, drawable: globalAndroid.graphics.drawable.Drawable, id: number): void;
					public constructor();
					public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
					public static createFromXmlInner(r: globalAndroid.content.res.Resources, parser: org.xmlpull.v1.XmlPullParser, attrs: globalAndroid.util.AttributeSet, theme: globalAndroid.content.res.Resources.Theme): globalAndroid.graphics.drawable.Drawable;
					public addTransition(fromId: number, toId: number, transition: globalAndroid.graphics.drawable.Drawable, reversible: boolean): void;
					public static create(context: globalAndroid.content.Context, resId: number, theme: globalAndroid.content.res.Resources.Theme): androidx.appcompat.graphics.drawable.AnimatedStateListDrawableCompat;
					public invalidateDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
					public inflate(context: globalAndroid.content.Context, r: globalAndroid.content.res.Resources, parser: org.xmlpull.v1.XmlPullParser, attrs: globalAndroid.util.AttributeSet, theme: globalAndroid.content.res.Resources.Theme): void;
					public inflate(r: globalAndroid.content.res.Resources, parser: org.xmlpull.v1.XmlPullParser, attrs: globalAndroid.util.AttributeSet): void;
					public static createFromXmlInner(context: globalAndroid.content.Context, resources: globalAndroid.content.res.Resources, parser: org.xmlpull.v1.XmlPullParser, attrs: globalAndroid.util.AttributeSet, theme: globalAndroid.content.res.Resources.Theme): androidx.appcompat.graphics.drawable.AnimatedStateListDrawableCompat;
				}
				export module AnimatedStateListDrawableCompat {
					export class AnimatableTransition extends androidx.appcompat.graphics.drawable.AnimatedStateListDrawableCompat.Transition {
						public static class: java.lang.Class<androidx.appcompat.graphics.drawable.AnimatedStateListDrawableCompat.AnimatableTransition>;
						public start(): void;
						public stop(): void;
					}
					export class AnimatedStateListState extends androidx.appcompat.graphics.drawable.StateListDrawable.StateListState {
						public static class: java.lang.Class<androidx.appcompat.graphics.drawable.AnimatedStateListDrawableCompat.AnimatedStateListState>;
						public newDrawable(res: globalAndroid.content.res.Resources, theme: globalAndroid.content.res.Resources.Theme): globalAndroid.graphics.drawable.Drawable;
						public newDrawable(): globalAndroid.graphics.drawable.Drawable;
						public newDrawable(res: globalAndroid.content.res.Resources): globalAndroid.graphics.drawable.Drawable;
					}
					export class AnimatedVectorDrawableTransition extends androidx.appcompat.graphics.drawable.AnimatedStateListDrawableCompat.Transition {
						public static class: java.lang.Class<androidx.appcompat.graphics.drawable.AnimatedStateListDrawableCompat.AnimatedVectorDrawableTransition>;
						public start(): void;
						public stop(): void;
					}
					export class AnimationDrawableTransition extends androidx.appcompat.graphics.drawable.AnimatedStateListDrawableCompat.Transition {
						public static class: java.lang.Class<androidx.appcompat.graphics.drawable.AnimatedStateListDrawableCompat.AnimationDrawableTransition>;
						public start(): void;
						public reverse(): void;
						public canReverse(): boolean;
						public stop(): void;
					}
					export class FrameInterpolator extends java.lang.Object implements globalAndroid.animation.TimeInterpolator {
						public static class: java.lang.Class<androidx.appcompat.graphics.drawable.AnimatedStateListDrawableCompat.FrameInterpolator>;
						public getInterpolation(input: number): number;
					}
					export abstract class Transition extends java.lang.Object {
						public static class: java.lang.Class<androidx.appcompat.graphics.drawable.AnimatedStateListDrawableCompat.Transition>;
						public start(): void;
						public reverse(): void;
						public canReverse(): boolean;
						public stop(): void;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module graphics {
			export module drawable {
				export class DrawableContainer extends globalAndroid.graphics.drawable.Drawable implements globalAndroid.graphics.drawable.Drawable.Callback {
					public static class: java.lang.Class<androidx.appcompat.graphics.drawable.DrawableContainer>;
					public setColorFilter(colorFilter0: globalAndroid.graphics.ColorFilter): void;
					public getMinimumWidth(): number;
					public onLevelChange(level: number): boolean;
					public draw(canvas: globalAndroid.graphics.Canvas): void;
					public isStateful(): boolean;
					public setDither(dither: boolean): void;
					public getIntrinsicWidth(): number;
					/** @deprecated */
					public setColorFilter(color: number, mode: globalAndroid.graphics.PorterDuff.Mode): void;
					public onLayoutDirectionChanged(layoutDirection: number): boolean;
					public setEnterFadeDuration(ms: number): void;
					/** @deprecated */
					public getOpacity(): number;
					public getChangingConfigurations(): number;
					public setAutoMirrored(mirrored: boolean): void;
					public applyTheme(t: globalAndroid.content.res.Resources.Theme): void;
					public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
					public applyTheme(theme: globalAndroid.content.res.Resources.Theme): void;
					public getMinimumHeight(): number;
					public draw(canvas0: globalAndroid.graphics.Canvas): void;
					public getOutline(outline: any): void;
					public canApplyTheme(): boolean;
					public setHotspot(x: number, y: number): void;
					public setAlpha(int0: number): void;
					public getOpacity(): number;
					public setTintMode(tintMode: globalAndroid.graphics.PorterDuff.Mode): void;
					public getAlpha(): number;
					public getHotspotBounds(outRect: globalAndroid.graphics.Rect): void;
					public onStateChange(state: native.Array<number>): boolean;
					public setTintList(tint: globalAndroid.content.res.ColorStateList): void;
					public setExitFadeDuration(ms: number): void;
					public jumpToCurrentState(): void;
					public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
					/** @deprecated */
					public setDither(dither: boolean): void;
					public getIntrinsicHeight(): number;
					public getConstantState(): globalAndroid.graphics.drawable.Drawable.ConstantState;
					public setVisible(visible: boolean, restart: boolean): boolean;
					public getCurrent(): globalAndroid.graphics.drawable.Drawable;
					public getPadding(padding: globalAndroid.graphics.Rect): boolean;
					public setColorFilter(colorFilter: globalAndroid.graphics.ColorFilter): void;
					public mutate(): globalAndroid.graphics.drawable.Drawable;
					public setHotspotBounds(left: number, top: number, right: number, bottom: number): void;
					public onBoundsChange(bounds: globalAndroid.graphics.Rect): void;
					public isAutoMirrored(): boolean;
					public invalidateDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
					public setAlpha(alpha: number): void;
				}
				export module DrawableContainer {
					export class BlockInvalidateCallback extends java.lang.Object implements globalAndroid.graphics.drawable.Drawable.Callback {
						public static class: java.lang.Class<androidx.appcompat.graphics.drawable.DrawableContainer.BlockInvalidateCallback>;
						public invalidateDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
						public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
						public unwrap(): globalAndroid.graphics.drawable.Drawable.Callback;
						public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
						public wrap(callback: globalAndroid.graphics.drawable.Drawable.Callback): androidx.appcompat.graphics.drawable.DrawableContainer.BlockInvalidateCallback;
					}
					export abstract class DrawableContainerState extends globalAndroid.graphics.drawable.Drawable.ConstantState {
						public static class: java.lang.Class<androidx.appcompat.graphics.drawable.DrawableContainer.DrawableContainerState>;
						public getConstantMinimumHeight(): number;
						public getChangingConfigurations(): number;
						public getChildCount(): number;
						public getExitFadeDuration(): number;
						public computeConstantSize(): void;
						public getConstantHeight(): number;
						public getOpacity(): number;
						public getConstantWidth(): number;
						public growArray(oldSize: number, newSize: number): void;
						public setVariablePadding(variable: boolean): void;
						public canConstantState(): boolean;
						public isStateful(): boolean;
						public getConstantPadding(): globalAndroid.graphics.Rect;
						public setConstantSize(constant: boolean): void;
						public getChild(index: number): globalAndroid.graphics.drawable.Drawable;
						public isConstantSize(): boolean;
						public setEnterFadeDuration(duration: number): void;
						public addChild(dr: globalAndroid.graphics.drawable.Drawable): number;
						public canApplyTheme(): boolean;
						public setExitFadeDuration(duration: number): void;
						public getConstantMinimumWidth(): number;
						public getEnterFadeDuration(): number;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module graphics {
			export module drawable {
				export class DrawableWrapper extends globalAndroid.graphics.drawable.Drawable implements globalAndroid.graphics.drawable.Drawable.Callback {
					public static class: java.lang.Class<androidx.appcompat.graphics.drawable.DrawableWrapper>;
					public setColorFilter(colorFilter0: globalAndroid.graphics.ColorFilter): void;
					public setState(stateSet: native.Array<number>): boolean;
					public getMinimumWidth(): number;
					public onLevelChange(level: number): boolean;
					public draw(canvas: globalAndroid.graphics.Canvas): void;
					public isStateful(): boolean;
					public setDither(dither: boolean): void;
					public getIntrinsicWidth(): number;
					/** @deprecated */
					public setColorFilter(color: number, mode: globalAndroid.graphics.PorterDuff.Mode): void;
					public setTint(tintColor: number): void;
					public constructor(drawable: globalAndroid.graphics.drawable.Drawable);
					/** @deprecated */
					public getOpacity(): number;
					public getChangingConfigurations(): number;
					public setAutoMirrored(mirrored: boolean): void;
					public constructor();
					public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
					public getState(): native.Array<number>;
					public setWrappedDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
					public getMinimumHeight(): number;
					public setChangingConfigurations(configs: number): void;
					public setColorFilter(cf: globalAndroid.graphics.ColorFilter): void;
					public draw(canvas0: globalAndroid.graphics.Canvas): void;
					public getWrappedDrawable(): globalAndroid.graphics.drawable.Drawable;
					public setHotspot(x: number, y: number): void;
					public setAlpha(int0: number): void;
					public getOpacity(): number;
					public setTintMode(tintMode: globalAndroid.graphics.PorterDuff.Mode): void;
					public setTintList(tint: globalAndroid.content.res.ColorStateList): void;
					public setFilterBitmap(filter: boolean): void;
					public jumpToCurrentState(): void;
					public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
					public setTint(tint: number): void;
					/** @deprecated */
					public setDither(dither: boolean): void;
					public getTransparentRegion(): globalAndroid.graphics.Region;
					public getIntrinsicHeight(): number;
					public getCurrent(): globalAndroid.graphics.drawable.Drawable;
					public setVisible(visible: boolean, restart: boolean): boolean;
					public getPadding(padding: globalAndroid.graphics.Rect): boolean;
					public setHotspotBounds(left: number, top: number, right: number, bottom: number): void;
					public onBoundsChange(bounds: globalAndroid.graphics.Rect): void;
					public isAutoMirrored(): boolean;
					public invalidateDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
					public setAlpha(alpha: number): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module graphics {
			export module drawable {
				export class StateListDrawable extends androidx.appcompat.graphics.drawable.DrawableContainer {
					public static class: java.lang.Class<androidx.appcompat.graphics.drawable.StateListDrawable>;
					public addState(stateSet: native.Array<number>, drawable: globalAndroid.graphics.drawable.Drawable): void;
					public onStateChange(state: native.Array<number>): boolean;
					public onStateChange(stateSet: native.Array<number>): boolean;
					public inflate(r: globalAndroid.content.res.Resources, parser: org.xmlpull.v1.XmlPullParser, attrs: globalAndroid.util.AttributeSet, theme: globalAndroid.content.res.Resources.Theme): void;
					public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
					public applyTheme(theme: globalAndroid.content.res.Resources.Theme): void;
					public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
					public isStateful(): boolean;
					public invalidateDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
					public inflate(r: globalAndroid.content.res.Resources, parser: org.xmlpull.v1.XmlPullParser, attrs: globalAndroid.util.AttributeSet): void;
					public inflate(context: globalAndroid.content.Context, r: globalAndroid.content.res.Resources, parser: org.xmlpull.v1.XmlPullParser, attrs: globalAndroid.util.AttributeSet, theme: globalAndroid.content.res.Resources.Theme): void;
					public mutate(): globalAndroid.graphics.drawable.Drawable;
				}
				export module StateListDrawable {
					export class StateListState extends androidx.appcompat.graphics.drawable.DrawableContainer.DrawableContainerState {
						public static class: java.lang.Class<androidx.appcompat.graphics.drawable.StateListDrawable.StateListState>;
						public newDrawable(res: globalAndroid.content.res.Resources, theme: globalAndroid.content.res.Resources.Theme): globalAndroid.graphics.drawable.Drawable;
						public newDrawable(): globalAndroid.graphics.drawable.Drawable;
						public newDrawable(res: globalAndroid.content.res.Resources): globalAndroid.graphics.drawable.Drawable;
						public growArray(oldSize: number, newSize: number): void;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class DrawableUtils extends java.lang.Object {
				public static class: java.lang.Class<androidx.appcompat.widget.DrawableUtils>;
				public static INSETS_NONE: globalAndroid.graphics.Rect;
				public static parseTintMode(value: number, defaultMode: globalAndroid.graphics.PorterDuff.Mode): globalAndroid.graphics.PorterDuff.Mode;
				public static canSafelyMutateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): boolean;
				public static getOpticalBounds(drawable: globalAndroid.graphics.drawable.Drawable): globalAndroid.graphics.Rect;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class ResourceManagerInternal extends java.lang.Object {
				public static class: java.lang.Class<androidx.appcompat.widget.ResourceManagerInternal>;
				public setHooks(hooks: androidx.appcompat.widget.ResourceManagerInternal.ResourceManagerHooks): void;
				public static get(): androidx.appcompat.widget.ResourceManagerInternal;
				public static getPorterDuffColorFilter(color: number, mode: globalAndroid.graphics.PorterDuff.Mode): globalAndroid.graphics.PorterDuffColorFilter;
				public onConfigurationChanged(context: globalAndroid.content.Context): void;
				public constructor();
				public getDrawable(context: globalAndroid.content.Context, resId: number): globalAndroid.graphics.drawable.Drawable;
			}
			export module ResourceManagerInternal {
				export class AsldcInflateDelegate extends java.lang.Object implements androidx.appcompat.widget.ResourceManagerInternal.InflateDelegate {
					public static class: java.lang.Class<androidx.appcompat.widget.ResourceManagerInternal.AsldcInflateDelegate>;
					public createFromXmlInner(context: globalAndroid.content.Context, parser: org.xmlpull.v1.XmlPullParser, attrs: globalAndroid.util.AttributeSet, theme: globalAndroid.content.res.Resources.Theme): globalAndroid.graphics.drawable.Drawable;
				}
				export class AvdcInflateDelegate extends java.lang.Object implements androidx.appcompat.widget.ResourceManagerInternal.InflateDelegate {
					public static class: java.lang.Class<androidx.appcompat.widget.ResourceManagerInternal.AvdcInflateDelegate>;
					public createFromXmlInner(context: globalAndroid.content.Context, parser: org.xmlpull.v1.XmlPullParser, attrs: globalAndroid.util.AttributeSet, theme: globalAndroid.content.res.Resources.Theme): globalAndroid.graphics.drawable.Drawable;
				}
				export class ColorFilterLruCache extends androidx.collection.LruCache<java.lang.Integer,globalAndroid.graphics.PorterDuffColorFilter> {
					public static class: java.lang.Class<androidx.appcompat.widget.ResourceManagerInternal.ColorFilterLruCache>;
					public constructor(maxSize: number);
				}
				export class InflateDelegate extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.widget.ResourceManagerInternal.InflateDelegate>;
					/**
					 * Constructs a new instance of the androidx.appcompat.widget.ResourceManagerInternal() when extending the interface class.
					 */
					public constructor(implementation: {
						createFromXmlInner(context0: globalAndroid.content.Context, xmlPullParser1: org.xmlpull.v1.XmlPullParser, attributeSet2: globalAndroid.util.AttributeSet, theme3: globalAndroid.content.res.Resources.Theme): globalAndroid.graphics.drawable.Drawable;
					});
					public constructor();
					public createFromXmlInner(context0: globalAndroid.content.Context, xmlPullParser1: org.xmlpull.v1.XmlPullParser, attributeSet2: globalAndroid.util.AttributeSet, theme3: globalAndroid.content.res.Resources.Theme): globalAndroid.graphics.drawable.Drawable;
				}
				export class ResourceManagerHooks extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.widget.ResourceManagerInternal.ResourceManagerHooks>;
					/**
					 * Constructs a new instance of the androidx.appcompat.widget.ResourceManagerInternal() when extending the interface class.
					 */
					public constructor(implementation: {
						createDrawableFor(resourceManagerInternal0: androidx.appcompat.widget.ResourceManagerInternal, context1: globalAndroid.content.Context, int2: number): globalAndroid.graphics.drawable.Drawable;
						tintDrawable(context0: globalAndroid.content.Context, int1: number, drawable2: globalAndroid.graphics.drawable.Drawable): boolean;
						getTintListForDrawableRes(context0: globalAndroid.content.Context, int1: number): globalAndroid.content.res.ColorStateList;
						tintDrawableUsingColorFilter(context0: globalAndroid.content.Context, int1: number, drawable2: globalAndroid.graphics.drawable.Drawable): boolean;
						getTintModeForDrawableRes(int0: number): globalAndroid.graphics.PorterDuff.Mode;
					});
					public constructor();
					public createDrawableFor(resourceManagerInternal0: androidx.appcompat.widget.ResourceManagerInternal, context1: globalAndroid.content.Context, int2: number): globalAndroid.graphics.drawable.Drawable;
					public tintDrawable(context0: globalAndroid.content.Context, int1: number, drawable2: globalAndroid.graphics.drawable.Drawable): boolean;
					public getTintModeForDrawableRes(int0: number): globalAndroid.graphics.PorterDuff.Mode;
					public getTintListForDrawableRes(context0: globalAndroid.content.Context, int1: number): globalAndroid.content.res.ColorStateList;
					public tintDrawableUsingColorFilter(context0: globalAndroid.content.Context, int1: number, drawable2: globalAndroid.graphics.drawable.Drawable): boolean;
				}
				export class VdcInflateDelegate extends java.lang.Object implements androidx.appcompat.widget.ResourceManagerInternal.InflateDelegate {
					public static class: java.lang.Class<androidx.appcompat.widget.ResourceManagerInternal.VdcInflateDelegate>;
					public createFromXmlInner(context: globalAndroid.content.Context, parser: org.xmlpull.v1.XmlPullParser, attrs: globalAndroid.util.AttributeSet, theme: globalAndroid.content.res.Resources.Theme): globalAndroid.graphics.drawable.Drawable;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class ResourcesWrapper extends globalAndroid.content.res.Resources {
				public static class: java.lang.Class<androidx.appcompat.widget.ResourcesWrapper>;
				public obtainAttributes(set: globalAndroid.util.AttributeSet, attrs: native.Array<number>): globalAndroid.content.res.TypedArray;
				public getColorStateList(id: number, theme: globalAndroid.content.res.Resources.Theme): globalAndroid.content.res.ColorStateList;
				public getConfiguration(): globalAndroid.content.res.Configuration;
				public getDisplayMetrics(): globalAndroid.util.DisplayMetrics;
				public parseBundleExtras(parser: globalAndroid.content.res.XmlResourceParser, outBundle: globalAndroid.os.Bundle): void;
				public getDimension(id: number): number;
				public getBoolean(id: number): boolean;
				public parseBundleExtra(tagName: string, attrs: globalAndroid.util.AttributeSet, outBundle: globalAndroid.os.Bundle): void;
				public getQuantityString(id: number, quantity: number): string;
				public getQuantityString(id: number, quantity: number, formatArgs: native.Array<any>): string;
				public getMovie(id: number): globalAndroid.graphics.Movie;
				public getIntArray(id: number): native.Array<number>;
				public getString(id: number): string;
				public getQuantityText(id: number, quantity: number): string;
				public getDrawable(id: number, theme: globalAndroid.content.res.Resources.Theme): globalAndroid.graphics.drawable.Drawable;
				public openRawResource(id: number): java.io.InputStream;
				public getColor(id: number, theme: globalAndroid.content.res.Resources.Theme): number;
				/** @deprecated */
				public getColor(id: number): number;
				/** @deprecated */
				public getColorStateList(id: number): globalAndroid.content.res.ColorStateList;
				public getFraction(id: number, base: number, pbase: number): number;
				public getXml(id: number): globalAndroid.content.res.XmlResourceParser;
				public getText(id: number): string;
				public getValue(id: number, outValue: globalAndroid.util.TypedValue, resolveRefs: boolean): void;
				public getResourceName(resid: number): string;
				public obtainTypedArray(id: number): globalAndroid.content.res.TypedArray;
				/** @deprecated */
				public getDrawable(id: number): globalAndroid.graphics.drawable.Drawable;
				public openRawResource(id: number, value: globalAndroid.util.TypedValue): java.io.InputStream;
				/** @deprecated */
				public getDrawableForDensity(id: number, density: number): globalAndroid.graphics.drawable.Drawable;
				public getColor(id: number): number;
				public getResourceTypeName(resid: number): string;
				public getIdentifier(name: string, defType: string, defPackage: string): number;
				/** @deprecated */
				public constructor(assets: globalAndroid.content.res.AssetManager, metrics: globalAndroid.util.DisplayMetrics, config: globalAndroid.content.res.Configuration);
				/** @deprecated */
				public updateConfiguration(config: globalAndroid.content.res.Configuration, metrics: globalAndroid.util.DisplayMetrics): void;
				public getLayout(id: number): globalAndroid.content.res.XmlResourceParser;
				public getColorStateList(id: number): globalAndroid.content.res.ColorStateList;
				/** @deprecated */
				public getMovie(id: number): globalAndroid.graphics.Movie;
				public getResourceEntryName(resid: number): string;
				public getString(id: number, formatArgs: native.Array<any>): string;
				public constructor(resources: globalAndroid.content.res.Resources);
				public getValue(name: string, outValue: globalAndroid.util.TypedValue, resolveRefs: boolean): void;
				public getStringArray(id: number): native.Array<string>;
				public getAnimation(id: number): globalAndroid.content.res.XmlResourceParser;
				public getDimensionPixelOffset(id: number): number;
				public getInteger(id: number): number;
				public getValueForDensity(id: number, density: number, outValue: globalAndroid.util.TypedValue, resolveRefs: boolean): void;
				public updateConfiguration(config: globalAndroid.content.res.Configuration, metrics: globalAndroid.util.DisplayMetrics): void;
				public getDimensionPixelSize(id: number): number;
				public getDrawableForDensity(id: number, density: number): globalAndroid.graphics.drawable.Drawable;
				public getText(id: number, def: string): string;
				public openRawResourceFd(id: number): globalAndroid.content.res.AssetFileDescriptor;
				public getDrawableForDensity(id: number, density: number, theme: globalAndroid.content.res.Resources.Theme): globalAndroid.graphics.drawable.Drawable;
				public getResourcePackageName(resid: number): string;
				public getTextArray(id: number): native.Array<string>;
				public getDrawable(id: number): globalAndroid.graphics.drawable.Drawable;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class TintContextWrapper extends globalAndroid.content.ContextWrapper {
				public static class: java.lang.Class<androidx.appcompat.widget.TintContextWrapper>;
				public getResources(): globalAndroid.content.res.Resources;
				public static wrap(context: globalAndroid.content.Context): globalAndroid.content.Context;
				public setTheme(resid: number): void;
				public getTheme(): globalAndroid.content.res.Resources.Theme;
				public getAssets(): globalAndroid.content.res.AssetManager;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class TintInfo extends java.lang.Object {
				public static class: java.lang.Class<androidx.appcompat.widget.TintInfo>;
				public mTintList: globalAndroid.content.res.ColorStateList;
				public mTintMode: globalAndroid.graphics.PorterDuff.Mode;
				public mHasTintMode: boolean;
				public mHasTintList: boolean;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class TintResources extends androidx.appcompat.widget.ResourcesWrapper {
				public static class: java.lang.Class<androidx.appcompat.widget.TintResources>;
				public getDrawable(id: number, theme: globalAndroid.content.res.Resources.Theme): globalAndroid.graphics.drawable.Drawable;
				public constructor(context: globalAndroid.content.Context, res: globalAndroid.content.res.Resources);
				/** @deprecated */
				public constructor(assets: globalAndroid.content.res.AssetManager, metrics: globalAndroid.util.DisplayMetrics, config: globalAndroid.content.res.Configuration);
				public constructor(resources: globalAndroid.content.res.Resources);
				public getDrawable(id: number): globalAndroid.graphics.drawable.Drawable;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class VectorEnabledTintResources extends globalAndroid.content.res.Resources {
				public static class: java.lang.Class<androidx.appcompat.widget.VectorEnabledTintResources>;
				public static MAX_SDK_WHERE_REQUIRED: number;
				public static shouldBeUsed(): boolean;
				public static setCompatVectorFromResourcesEnabled(enabled: boolean): void;
				public getDrawable(id: number, theme: globalAndroid.content.res.Resources.Theme): globalAndroid.graphics.drawable.Drawable;
				public constructor(context: globalAndroid.content.Context, res: globalAndroid.content.res.Resources);
				public static isCompatVectorFromResourcesEnabled(): boolean;
				/** @deprecated */
				public constructor(assets: globalAndroid.content.res.AssetManager, metrics: globalAndroid.util.DisplayMetrics, config: globalAndroid.content.res.Configuration);
				/** @deprecated */
				public getDrawable(id: number): globalAndroid.graphics.drawable.Drawable;
				public getDrawable(id: number): globalAndroid.graphics.drawable.Drawable;
			}
		}
	}
}

//Generics information:

