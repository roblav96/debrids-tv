declare module androidx {
	export module core {
		export module animation {
			export class AnimatorKt extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.animation.AnimatorKt>;
				public static doOnEnd(thisdoOnEnd: globalAndroid.animation.Animator, action: kotlin.jvm.functions.Function1<any,kotlin.Unit>): globalAndroid.animation.Animator.AnimatorListener;
				public static doOnStart(thisdoOnStart: globalAndroid.animation.Animator, action: kotlin.jvm.functions.Function1<any,kotlin.Unit>): globalAndroid.animation.Animator.AnimatorListener;
				public static addListener(thisaddListener: globalAndroid.animation.Animator, onEnd: kotlin.jvm.functions.Function1<any,kotlin.Unit>, onStart: kotlin.jvm.functions.Function1<any,kotlin.Unit>, onCancel: kotlin.jvm.functions.Function1<any,kotlin.Unit>, onRepeat: kotlin.jvm.functions.Function1<any,kotlin.Unit>): globalAndroid.animation.Animator.AnimatorListener;
				public static addPauseListener(thisaddPauseListener: globalAndroid.animation.Animator, onResume: kotlin.jvm.functions.Function1<any,kotlin.Unit>, onPause: kotlin.jvm.functions.Function1<any,kotlin.Unit>): globalAndroid.animation.Animator.AnimatorPauseListener;
				public static doOnPause(thisdoOnPause: globalAndroid.animation.Animator, action: kotlin.jvm.functions.Function1<any,kotlin.Unit>): globalAndroid.animation.Animator.AnimatorPauseListener;
				public static doOnRepeat(thisdoOnRepeat: globalAndroid.animation.Animator, action: kotlin.jvm.functions.Function1<any,kotlin.Unit>): globalAndroid.animation.Animator.AnimatorListener;
				public static doOnCancel(thisdoOnCancel: globalAndroid.animation.Animator, action: kotlin.jvm.functions.Function1<any,kotlin.Unit>): globalAndroid.animation.Animator.AnimatorListener;
				public static doOnResume(thisdoOnResume: globalAndroid.animation.Animator, action: kotlin.jvm.functions.Function1<any,kotlin.Unit>): globalAndroid.animation.Animator.AnimatorPauseListener;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module content {
			export class ContentValuesKt extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.content.ContentValuesKt>;
				public static contentValuesOf(pairs: native.Array<kotlin.Pair<string,any>>): globalAndroid.content.ContentValues;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module content {
			export class ContextKt extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.content.ContextKt>;
				public static withStyledAttributes(thiswithStyledAttributes: globalAndroid.content.Context, set: globalAndroid.util.AttributeSet, attrs: native.Array<number>, defStyleAttr: number, defStyleRes: number, block: kotlin.jvm.functions.Function1<any,kotlin.Unit>): void;
				public static withStyledAttributes(thiswithStyledAttributes: globalAndroid.content.Context, resourceId: number, attrs: native.Array<number>, block: kotlin.jvm.functions.Function1<any,kotlin.Unit>): void;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module content {
			export class SharedPreferencesKt extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.content.SharedPreferencesKt>;
				public static edit(thisedit: globalAndroid.content.SharedPreferences, commit: boolean, action: kotlin.jvm.functions.Function1<any,kotlin.Unit>): void;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module content {
			export module res {
				export class TypedArrayKt extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.content.res.TypedArrayKt>;
					public static getStringOrThrow(thisgetStringOrThrow: globalAndroid.content.res.TypedArray, index: number): string;
					public static getTextArrayOrThrow(thisgetTextArrayOrThrow: globalAndroid.content.res.TypedArray, index: number): native.Array<string>;
					public static getColorStateListOrThrow(thisgetColorStateListOrThrow: globalAndroid.content.res.TypedArray, index: number): globalAndroid.content.res.ColorStateList;
					public static getDimensionPixelSizeOrThrow(thisgetDimensionPixelSizeOrThrow: globalAndroid.content.res.TypedArray, index: number): number;
					public static getDrawableOrThrow(thisgetDrawableOrThrow: globalAndroid.content.res.TypedArray, index: number): globalAndroid.graphics.drawable.Drawable;
					public static use(thisuse: globalAndroid.content.res.TypedArray, block: kotlin.jvm.functions.Function1<any,any>): any;
					public static getResourceIdOrThrow(thisgetResourceIdOrThrow: globalAndroid.content.res.TypedArray, index: number): number;
					public static getFloatOrThrow(thisgetFloatOrThrow: globalAndroid.content.res.TypedArray, index: number): number;
					public static getIntOrThrow(thisgetIntOrThrow: globalAndroid.content.res.TypedArray, index: number): number;
					public static getBooleanOrThrow(thisgetBooleanOrThrow: globalAndroid.content.res.TypedArray, index: number): boolean;
					public static getTextOrThrow(thisgetTextOrThrow: globalAndroid.content.res.TypedArray, index: number): string;
					public static getColorOrThrow(thisgetColorOrThrow: globalAndroid.content.res.TypedArray, index: number): number;
					public static getIntegerOrThrow(thisgetIntegerOrThrow: globalAndroid.content.res.TypedArray, index: number): number;
					public static getFontOrThrow(thisgetFontOrThrow: globalAndroid.content.res.TypedArray, index: number): globalAndroid.graphics.Typeface;
					public static getDimensionOrThrow(thisgetDimensionOrThrow: globalAndroid.content.res.TypedArray, index: number): number;
					public static getDimensionPixelOffsetOrThrow(thisgetDimensionPixelOffsetOrThrow: globalAndroid.content.res.TypedArray, index: number): number;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module database {
			export class CursorKt extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.database.CursorKt>;
				public static getBlobOrNull(thisgetBlobOrNull: globalAndroid.database.Cursor, index: number): native.Array<number>;
				public static getDoubleOrNull(thisgetDoubleOrNull: globalAndroid.database.Cursor, index: number): java.lang.Double;
				public static getFloatOrNull(thisgetFloatOrNull: globalAndroid.database.Cursor, index: number): java.lang.Float;
				public static getIntOrNull(thisgetIntOrNull: globalAndroid.database.Cursor, index: number): java.lang.Integer;
				public static getShortOrNull(thisgetShortOrNull: globalAndroid.database.Cursor, index: number): java.lang.Short;
				public static getLongOrNull(thisgetLongOrNull: globalAndroid.database.Cursor, index: number): java.lang.Long;
				public static getStringOrNull(thisgetStringOrNull: globalAndroid.database.Cursor, index: number): string;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module database {
			export module sqlite {
				export class SQLiteDatabaseKt extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.database.sqlite.SQLiteDatabaseKt>;
					public static transaction(thistransaction: globalAndroid.database.sqlite.SQLiteDatabase, exclusive: boolean, body: kotlin.jvm.functions.Function1<any,any>): any;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module graphics {
			export class BitmapKt extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.graphics.BitmapKt>;
				public static createBitmap(width: number, height: number, config: globalAndroid.graphics.Bitmap.Config, hasAlpha: boolean, colorSpace: globalAndroid.graphics.ColorSpace): globalAndroid.graphics.Bitmap;
				public static scale(thisscale: globalAndroid.graphics.Bitmap, width: number, height: number, filter: boolean): globalAndroid.graphics.Bitmap;
				public static contains(thiscontains: globalAndroid.graphics.Bitmap, p: globalAndroid.graphics.PointF): boolean;
				public static applyCanvas(thisapplyCanvas: globalAndroid.graphics.Bitmap, block: kotlin.jvm.functions.Function1<any,kotlin.Unit>): globalAndroid.graphics.Bitmap;
				public static contains(thiscontains: globalAndroid.graphics.Bitmap, p: globalAndroid.graphics.Point): boolean;
				public static set(thisset: globalAndroid.graphics.Bitmap, x: number, y: number, color: number): void;
				public static createBitmap(width: number, height: number, config: globalAndroid.graphics.Bitmap.Config): globalAndroid.graphics.Bitmap;
				public static get(thisget: globalAndroid.graphics.Bitmap, x: number, y: number): number;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module graphics {
			export class CanvasKt extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.graphics.CanvasKt>;
				public static withTranslation(thiswithTranslation: globalAndroid.graphics.Canvas, x: number, y: number, block: kotlin.jvm.functions.Function1<any,kotlin.Unit>): void;
				public static withClip(thiswithClip: globalAndroid.graphics.Canvas, left: number, top: number, right: number, bottom: number, block: kotlin.jvm.functions.Function1<any,kotlin.Unit>): void;
				public static withScale(thiswithScale: globalAndroid.graphics.Canvas, x: number, y: number, pivotX: number, pivotY: number, block: kotlin.jvm.functions.Function1<any,kotlin.Unit>): void;
				public static withClip(thiswithClip: globalAndroid.graphics.Canvas, clipRect: globalAndroid.graphics.RectF, block: kotlin.jvm.functions.Function1<any,kotlin.Unit>): void;
				public static withClip(thiswithClip: globalAndroid.graphics.Canvas, clipPath: globalAndroid.graphics.Path, block: kotlin.jvm.functions.Function1<any,kotlin.Unit>): void;
				public static withRotation(thiswithRotation: globalAndroid.graphics.Canvas, degrees: number, pivotX: number, pivotY: number, block: kotlin.jvm.functions.Function1<any,kotlin.Unit>): void;
				public static withSkew(thiswithSkew: globalAndroid.graphics.Canvas, x: number, y: number, block: kotlin.jvm.functions.Function1<any,kotlin.Unit>): void;
				public static withMatrix(thiswithMatrix: globalAndroid.graphics.Canvas, matrix: globalAndroid.graphics.Matrix, block: kotlin.jvm.functions.Function1<any,kotlin.Unit>): void;
				public static withClip(thiswithClip: globalAndroid.graphics.Canvas, clipRect: globalAndroid.graphics.Rect, block: kotlin.jvm.functions.Function1<any,kotlin.Unit>): void;
				public static withSave(thiswithSave: globalAndroid.graphics.Canvas, block: kotlin.jvm.functions.Function1<any,kotlin.Unit>): void;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module graphics {
			export class ColorKt extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.graphics.ColorKt>;
				public static getBlue(thisblue: number): number;
				public static getColorSpace(thiscolorSpace: number): globalAndroid.graphics.ColorSpace;
				public static component4(thiscomponent4: globalAndroid.graphics.Color): number;
				public static getGreen(thisgreen: number): number;
				public static component2(thiscomponent2: number): number;
				public static convertTo(thisconvertTo: number, colorSpace: globalAndroid.graphics.ColorSpace): number;
				public static toColorLong(thistoColorLong: number): number;
				public static toColorInt(thistoColorInt: string): number;
				public static convertTo(thisconvertTo: number, colorSpace: globalAndroid.graphics.ColorSpace.Named): number;
				public static isWideGamut(thisisWideGamut: number): boolean;
				public static component3(thiscomponent3: number): number;
				public static getLuminance(thisluminance: number): number;
				public static convertTo(thisconvertTo: globalAndroid.graphics.Color, colorSpace: globalAndroid.graphics.ColorSpace): globalAndroid.graphics.Color;
				public static component1(thiscomponent1: globalAndroid.graphics.Color): number;
				public static toColor(thistoColor: number): globalAndroid.graphics.Color;
				public static component1(thiscomponent1: number): number;
				public static getRed(thisred: number): number;
				public static isSrgb(thisisSrgb: number): boolean;
				public static plus(thisplus: globalAndroid.graphics.Color, c: globalAndroid.graphics.Color): globalAndroid.graphics.Color;
				public static getAlpha(thisalpha: number): number;
				public static component4(thiscomponent4: number): number;
				public static component3(thiscomponent3: globalAndroid.graphics.Color): number;
				public static convertTo(thisconvertTo: globalAndroid.graphics.Color, colorSpace: globalAndroid.graphics.ColorSpace.Named): globalAndroid.graphics.Color;
				public static toColorInt(thistoColorInt: number): number;
				public static component2(thiscomponent2: globalAndroid.graphics.Color): number;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module graphics {
			export class ImageDecoderKt extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.graphics.ImageDecoderKt>;
				public static decodeDrawable(thisdecodeDrawable: globalAndroid.graphics.ImageDecoder.Source, action: kotlin.jvm.functions.Function3<any,any,any,kotlin.Unit>): globalAndroid.graphics.drawable.Drawable;
				public static decodeBitmap(thisdecodeBitmap: globalAndroid.graphics.ImageDecoder.Source, action: kotlin.jvm.functions.Function3<any,any,any,kotlin.Unit>): globalAndroid.graphics.Bitmap;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module graphics {
			export class MatrixKt extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.graphics.MatrixKt>;
				public static translationMatrix(tx: number, ty: number): globalAndroid.graphics.Matrix;
				public static values(thisvalues: globalAndroid.graphics.Matrix): native.Array<number>;
				public static rotationMatrix(degrees: number, px: number, py: number): globalAndroid.graphics.Matrix;
				public static scaleMatrix(sx: number, sy: number): globalAndroid.graphics.Matrix;
				public static times(thistimes: globalAndroid.graphics.Matrix, m: globalAndroid.graphics.Matrix): globalAndroid.graphics.Matrix;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module graphics {
			export class PaintKt extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.graphics.PaintKt>;
				public static setBlendMode(thissetBlendMode: globalAndroid.graphics.Paint, blendModeCompat: androidx.core.graphics.BlendModeCompat): boolean;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module graphics {
			export class PathKt extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.graphics.PathKt>;
				public static or(thisor: globalAndroid.graphics.Path, p: globalAndroid.graphics.Path): globalAndroid.graphics.Path;
				public static plus(thisplus: globalAndroid.graphics.Path, p: globalAndroid.graphics.Path): globalAndroid.graphics.Path;
				public static xor(thisxor: globalAndroid.graphics.Path, p: globalAndroid.graphics.Path): globalAndroid.graphics.Path;
				public static flatten(thisflatten: globalAndroid.graphics.Path, error: number): java.lang.Iterable<androidx.core.graphics.PathSegment>;
				public static and(thisand: globalAndroid.graphics.Path, p: globalAndroid.graphics.Path): globalAndroid.graphics.Path;
				public static minus(thisminus: globalAndroid.graphics.Path, p: globalAndroid.graphics.Path): globalAndroid.graphics.Path;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module graphics {
			export class PictureKt extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.graphics.PictureKt>;
				public static record(thisrecord: globalAndroid.graphics.Picture, width: number, height: number, block: kotlin.jvm.functions.Function1<any,kotlin.Unit>): globalAndroid.graphics.Picture;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module graphics {
			export class PointKt extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.graphics.PointKt>;
				public static component1(thiscomponent1: globalAndroid.graphics.Point): number;
				public static unaryMinus(thisunaryMinus: globalAndroid.graphics.PointF): globalAndroid.graphics.PointF;
				public static minus(thisminus: globalAndroid.graphics.PointF, p: globalAndroid.graphics.PointF): globalAndroid.graphics.PointF;
				public static component1(thiscomponent1: globalAndroid.graphics.PointF): number;
				public static minus(thisminus: globalAndroid.graphics.Point, xy: number): globalAndroid.graphics.Point;
				public static component2(thiscomponent2: globalAndroid.graphics.PointF): number;
				public static minus(thisminus: globalAndroid.graphics.PointF, xy: number): globalAndroid.graphics.PointF;
				public static unaryMinus(thisunaryMinus: globalAndroid.graphics.Point): globalAndroid.graphics.Point;
				public static minus(thisminus: globalAndroid.graphics.Point, p: globalAndroid.graphics.Point): globalAndroid.graphics.Point;
				public static plus(thisplus: globalAndroid.graphics.Point, p: globalAndroid.graphics.Point): globalAndroid.graphics.Point;
				public static toPoint(thistoPoint: globalAndroid.graphics.PointF): globalAndroid.graphics.Point;
				public static plus(thisplus: globalAndroid.graphics.PointF, p: globalAndroid.graphics.PointF): globalAndroid.graphics.PointF;
				public static plus(thisplus: globalAndroid.graphics.Point, xy: number): globalAndroid.graphics.Point;
				public static component2(thiscomponent2: globalAndroid.graphics.Point): number;
				public static plus(thisplus: globalAndroid.graphics.PointF, xy: number): globalAndroid.graphics.PointF;
				public static toPointF(thistoPointF: globalAndroid.graphics.Point): globalAndroid.graphics.PointF;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module graphics {
			export class PorterDuffKt extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.graphics.PorterDuffKt>;
				public static toColorFilter(thistoColorFilter: globalAndroid.graphics.PorterDuff.Mode, color: number): globalAndroid.graphics.PorterDuffColorFilter;
				public static toXfermode(thistoXfermode: globalAndroid.graphics.PorterDuff.Mode): globalAndroid.graphics.PorterDuffXfermode;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module graphics {
			export class RectKt extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.graphics.RectKt>;
				public static and(thisand: globalAndroid.graphics.Rect, r: globalAndroid.graphics.Rect): globalAndroid.graphics.Rect;
				public static plus(thisplus: globalAndroid.graphics.RectF, xy: globalAndroid.graphics.PointF): globalAndroid.graphics.RectF;
				public static times(thistimes: globalAndroid.graphics.RectF, factor: number): globalAndroid.graphics.RectF;
				public static xor(thisxor: globalAndroid.graphics.Rect, r: globalAndroid.graphics.Rect): globalAndroid.graphics.Region;
				public static component4(thiscomponent4: globalAndroid.graphics.RectF): number;
				public static and(thisand: globalAndroid.graphics.RectF, r: globalAndroid.graphics.RectF): globalAndroid.graphics.RectF;
				public static contains(thiscontains: globalAndroid.graphics.Rect, p: globalAndroid.graphics.Point): boolean;
				public static toRegion(thistoRegion: globalAndroid.graphics.RectF): globalAndroid.graphics.Region;
				public static component4(thiscomponent4: globalAndroid.graphics.Rect): number;
				public static minus(thisminus: globalAndroid.graphics.RectF, r: globalAndroid.graphics.RectF): globalAndroid.graphics.Region;
				public static plus(thisplus: globalAndroid.graphics.RectF, r: globalAndroid.graphics.RectF): globalAndroid.graphics.RectF;
				public static or(thisor: globalAndroid.graphics.RectF, r: globalAndroid.graphics.RectF): globalAndroid.graphics.RectF;
				public static toRegion(thistoRegion: globalAndroid.graphics.Rect): globalAndroid.graphics.Region;
				public static plus(thisplus: globalAndroid.graphics.Rect, xy: globalAndroid.graphics.Point): globalAndroid.graphics.Rect;
				public static minus(thisminus: globalAndroid.graphics.RectF, xy: globalAndroid.graphics.PointF): globalAndroid.graphics.RectF;
				public static component3(thiscomponent3: globalAndroid.graphics.Rect): number;
				public static component2(thiscomponent2: globalAndroid.graphics.Rect): number;
				public static xor(thisxor: globalAndroid.graphics.RectF, r: globalAndroid.graphics.RectF): globalAndroid.graphics.Region;
				public static component1(thiscomponent1: globalAndroid.graphics.RectF): number;
				public static minus(thisminus: globalAndroid.graphics.Rect, r: globalAndroid.graphics.Rect): globalAndroid.graphics.Region;
				public static plus(thisplus: globalAndroid.graphics.Rect, xy: number): globalAndroid.graphics.Rect;
				public static minus(thisminus: globalAndroid.graphics.Rect, xy: number): globalAndroid.graphics.Rect;
				public static plus(thisplus: globalAndroid.graphics.RectF, xy: number): globalAndroid.graphics.RectF;
				public static minus(thisminus: globalAndroid.graphics.Rect, xy: globalAndroid.graphics.Point): globalAndroid.graphics.Rect;
				public static plus(thisplus: globalAndroid.graphics.Rect, r: globalAndroid.graphics.Rect): globalAndroid.graphics.Rect;
				public static contains(thiscontains: globalAndroid.graphics.RectF, p: globalAndroid.graphics.PointF): boolean;
				public static times(thistimes: globalAndroid.graphics.Rect, factor: number): globalAndroid.graphics.Rect;
				public static component1(thiscomponent1: globalAndroid.graphics.Rect): number;
				public static toRect(thistoRect: globalAndroid.graphics.RectF): globalAndroid.graphics.Rect;
				public static component3(thiscomponent3: globalAndroid.graphics.RectF): number;
				public static toRectF(thistoRectF: globalAndroid.graphics.Rect): globalAndroid.graphics.RectF;
				public static or(thisor: globalAndroid.graphics.Rect, r: globalAndroid.graphics.Rect): globalAndroid.graphics.Rect;
				public static transform(thistransform: globalAndroid.graphics.RectF, m: globalAndroid.graphics.Matrix): globalAndroid.graphics.RectF;
				public static minus(thisminus: globalAndroid.graphics.RectF, xy: number): globalAndroid.graphics.RectF;
				public static component2(thiscomponent2: globalAndroid.graphics.RectF): number;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module graphics {
			export class RegionKt extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.graphics.RegionKt>;
				public static contains(thiscontains: globalAndroid.graphics.Region, p: globalAndroid.graphics.Point): boolean;
				public static iterator(thisiterator: globalAndroid.graphics.Region): java.util.Iterator<globalAndroid.graphics.Rect>;
				public static forEach(thisforEach: globalAndroid.graphics.Region, action: kotlin.jvm.functions.Function1<any,kotlin.Unit>): void;
				public static unaryMinus(thisunaryMinus: globalAndroid.graphics.Region): globalAndroid.graphics.Region;
				public static and(thisand: globalAndroid.graphics.Region, r: globalAndroid.graphics.Rect): globalAndroid.graphics.Region;
				public static not(thisnot: globalAndroid.graphics.Region): globalAndroid.graphics.Region;
				public static plus(thisplus: globalAndroid.graphics.Region, r: globalAndroid.graphics.Region): globalAndroid.graphics.Region;
				public static minus(thisminus: globalAndroid.graphics.Region, r: globalAndroid.graphics.Region): globalAndroid.graphics.Region;
				public static minus(thisminus: globalAndroid.graphics.Region, r: globalAndroid.graphics.Rect): globalAndroid.graphics.Region;
				public static or(thisor: globalAndroid.graphics.Region, r: globalAndroid.graphics.Region): globalAndroid.graphics.Region;
				public static and(thisand: globalAndroid.graphics.Region, r: globalAndroid.graphics.Region): globalAndroid.graphics.Region;
				public static or(thisor: globalAndroid.graphics.Region, r: globalAndroid.graphics.Rect): globalAndroid.graphics.Region;
				public static xor(thisxor: globalAndroid.graphics.Region, r: globalAndroid.graphics.Rect): globalAndroid.graphics.Region;
				public static plus(thisplus: globalAndroid.graphics.Region, r: globalAndroid.graphics.Rect): globalAndroid.graphics.Region;
				public static xor(thisxor: globalAndroid.graphics.Region, r: globalAndroid.graphics.Region): globalAndroid.graphics.Region;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module graphics {
			export class ShaderKt extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.graphics.ShaderKt>;
				public static transform(thistransform: globalAndroid.graphics.Shader, block: kotlin.jvm.functions.Function1<any,kotlin.Unit>): void;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module graphics {
			export module drawable {
				export class BitmapDrawableKt extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.graphics.drawable.BitmapDrawableKt>;
					public static toDrawable(thistoDrawable: globalAndroid.graphics.Bitmap, resources: globalAndroid.content.res.Resources): globalAndroid.graphics.drawable.BitmapDrawable;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module graphics {
			export module drawable {
				export class ColorDrawableKt extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.graphics.drawable.ColorDrawableKt>;
					public static toDrawable(thistoDrawable: number): globalAndroid.graphics.drawable.ColorDrawable;
					public static toDrawable(thistoDrawable: globalAndroid.graphics.Color): globalAndroid.graphics.drawable.ColorDrawable;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module graphics {
			export module drawable {
				export class DrawableKt extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.graphics.drawable.DrawableKt>;
					public static updateBounds(thisupdateBounds: globalAndroid.graphics.drawable.Drawable, left: number, top: number, right: number, bottom: number): void;
					public static toBitmap(thistoBitmap: globalAndroid.graphics.drawable.Drawable, width: number, height: number, config: globalAndroid.graphics.Bitmap.Config): globalAndroid.graphics.Bitmap;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module graphics {
			export module drawable {
				export class IconKt extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.graphics.drawable.IconKt>;
					public static toIcon(thistoIcon: globalAndroid.graphics.Bitmap): any;
					public static toIcon(thistoIcon: globalAndroid.net.Uri): any;
					public static toIcon(thistoIcon: native.Array<number>): any;
					public static toAdaptiveIcon(thistoAdaptiveIcon: globalAndroid.graphics.Bitmap): any;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module location {
			export class LocationKt extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.location.LocationKt>;
				public static component2(thiscomponent2: globalAndroid.location.Location): number;
				public static component1(thiscomponent1: globalAndroid.location.Location): number;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module net {
			export class UriKt extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.net.UriKt>;
				public static toUri(thistoUri: java.io.File): globalAndroid.net.Uri;
				public static toFile(thistoFile: globalAndroid.net.Uri): java.io.File;
				public static toUri(thistoUri: string): globalAndroid.net.Uri;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module os {
			export class BundleKt extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.os.BundleKt>;
				public static bundleOf(pairs: native.Array<kotlin.Pair<string,any>>): globalAndroid.os.Bundle;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module os {
			export class HandlerKt extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.os.HandlerKt>;
				public static postDelayed(thispostDelayed: globalAndroid.os.Handler, delayInMillis: number, token: any, action: kotlin.jvm.functions.Function0<kotlin.Unit>): java.lang.Runnable;
				public static postAtTime(thispostAtTime: globalAndroid.os.Handler, uptimeMillis: number, token: any, action: kotlin.jvm.functions.Function0<kotlin.Unit>): java.lang.Runnable;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module os {
			export class PersistableBundleKt extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.os.PersistableBundleKt>;
				public static persistableBundleOf(pairs: native.Array<kotlin.Pair<string,any>>): any;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module os {
			export class TraceKt extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.os.TraceKt>;
				public static trace(sectionName: string, block: kotlin.jvm.functions.Function0<any>): any;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module text {
			export class CharSequenceKt extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.text.CharSequenceKt>;
				public static trimmedLength(thistrimmedLength: string): number;
				public static isDigitsOnly(thisisDigitsOnly: string): boolean;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module text {
			export class HtmlKt extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.text.HtmlKt>;
				public static toHtml(thistoHtml: globalAndroid.text.Spanned, option: number): string;
				public static parseAsHtml(thisparseAsHtml: string, flags: number, imageGetter: globalAndroid.text.Html.ImageGetter, tagHandler: globalAndroid.text.Html.TagHandler): globalAndroid.text.Spanned;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module text {
			export class LocaleKt extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.text.LocaleKt>;
				public static getLayoutDirection(thislayoutDirection: java.util.Locale): number;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module text {
			export class SpannableStringBuilderKt extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.text.SpannableStringBuilderKt>;
				public static buildSpannedString(builderAction: kotlin.jvm.functions.Function1<any,kotlin.Unit>): globalAndroid.text.SpannedString;
				public static color(thiscolor: globalAndroid.text.SpannableStringBuilder, color: number, builderAction: kotlin.jvm.functions.Function1<any,kotlin.Unit>): globalAndroid.text.SpannableStringBuilder;
				public static inSpans(thisinSpans: globalAndroid.text.SpannableStringBuilder, spans: native.Array<any>, builderAction: kotlin.jvm.functions.Function1<any,kotlin.Unit>): globalAndroid.text.SpannableStringBuilder;
				public static italic(thisitalic: globalAndroid.text.SpannableStringBuilder, builderAction: kotlin.jvm.functions.Function1<any,kotlin.Unit>): globalAndroid.text.SpannableStringBuilder;
				public static scale(thisscale: globalAndroid.text.SpannableStringBuilder, proportion: number, builderAction: kotlin.jvm.functions.Function1<any,kotlin.Unit>): globalAndroid.text.SpannableStringBuilder;
				public static bold(thisbold: globalAndroid.text.SpannableStringBuilder, builderAction: kotlin.jvm.functions.Function1<any,kotlin.Unit>): globalAndroid.text.SpannableStringBuilder;
				public static superscript(thissuperscript: globalAndroid.text.SpannableStringBuilder, builderAction: kotlin.jvm.functions.Function1<any,kotlin.Unit>): globalAndroid.text.SpannableStringBuilder;
				public static underline(thisunderline: globalAndroid.text.SpannableStringBuilder, builderAction: kotlin.jvm.functions.Function1<any,kotlin.Unit>): globalAndroid.text.SpannableStringBuilder;
				public static strikeThrough(thisstrikeThrough: globalAndroid.text.SpannableStringBuilder, builderAction: kotlin.jvm.functions.Function1<any,kotlin.Unit>): globalAndroid.text.SpannableStringBuilder;
				public static subscript(thissubscript: globalAndroid.text.SpannableStringBuilder, builderAction: kotlin.jvm.functions.Function1<any,kotlin.Unit>): globalAndroid.text.SpannableStringBuilder;
				public static backgroundColor(thisbackgroundColor: globalAndroid.text.SpannableStringBuilder, color: number, builderAction: kotlin.jvm.functions.Function1<any,kotlin.Unit>): globalAndroid.text.SpannableStringBuilder;
				public static inSpans(thisinSpans: globalAndroid.text.SpannableStringBuilder, span: any, builderAction: kotlin.jvm.functions.Function1<any,kotlin.Unit>): globalAndroid.text.SpannableStringBuilder;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module text {
			export class SpannableStringKt extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.text.SpannableStringKt>;
				public static clearSpans(thisclearSpans: globalAndroid.text.Spannable): void;
				public static set(thisset: globalAndroid.text.Spannable, range: kotlin.ranges.IntRange, span: any): void;
				public static toSpannable(thistoSpannable: string): globalAndroid.text.Spannable;
				public static set(thisset: globalAndroid.text.Spannable, start: number, end: number, span: any): void;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module text {
			export class SpannedStringKt extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.text.SpannedStringKt>;
				public static toSpanned(thistoSpanned: string): globalAndroid.text.Spanned;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module text {
			export class StringKt extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.text.StringKt>;
				public static htmlEncode(thishtmlEncode: string): string;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module transition {
			export class TransitionKt extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.transition.TransitionKt>;
				public static doOnPause(thisdoOnPause: globalAndroid.transition.Transition, action: kotlin.jvm.functions.Function1<any,kotlin.Unit>): globalAndroid.transition.Transition.TransitionListener;
				public static doOnStart(thisdoOnStart: globalAndroid.transition.Transition, action: kotlin.jvm.functions.Function1<any,kotlin.Unit>): globalAndroid.transition.Transition.TransitionListener;
				public static addListener(thisaddListener: globalAndroid.transition.Transition, onEnd: kotlin.jvm.functions.Function1<any,kotlin.Unit>, onStart: kotlin.jvm.functions.Function1<any,kotlin.Unit>, onCancel: kotlin.jvm.functions.Function1<any,kotlin.Unit>, onResume: kotlin.jvm.functions.Function1<any,kotlin.Unit>, onPause: kotlin.jvm.functions.Function1<any,kotlin.Unit>): globalAndroid.transition.Transition.TransitionListener;
				public static doOnCancel(thisdoOnCancel: globalAndroid.transition.Transition, action: kotlin.jvm.functions.Function1<any,kotlin.Unit>): globalAndroid.transition.Transition.TransitionListener;
				public static doOnEnd(thisdoOnEnd: globalAndroid.transition.Transition, action: kotlin.jvm.functions.Function1<any,kotlin.Unit>): globalAndroid.transition.Transition.TransitionListener;
				public static doOnResume(thisdoOnResume: globalAndroid.transition.Transition, action: kotlin.jvm.functions.Function1<any,kotlin.Unit>): globalAndroid.transition.Transition.TransitionListener;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module util {
			export class AtomicFileKt extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.util.AtomicFileKt>;
				public static writeBytes(thiswriteBytes: globalAndroid.util.AtomicFile, array: native.Array<number>): void;
				public static tryWrite(thistryWrite: globalAndroid.util.AtomicFile, block: kotlin.jvm.functions.Function1<any,kotlin.Unit>): void;
				public static writeText(thiswriteText: globalAndroid.util.AtomicFile, text: string, charset: java.nio.charset.Charset): void;
				public static readText(thisreadText: globalAndroid.util.AtomicFile, charset: java.nio.charset.Charset): string;
				public static readBytes(thisreadBytes: globalAndroid.util.AtomicFile): native.Array<number>;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module util {
			export class HalfKt extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.util.HalfKt>;
				public static toHalf(thistoHalf: number): globalAndroid.util.Half;
				public static toHalf(thistoHalf: string): globalAndroid.util.Half;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module util {
			export class LongSparseArrayKt extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.util.LongSparseArrayKt>;
				public static containsValue(thiscontainsValue: globalAndroid.util.LongSparseArray<any>, value: any): boolean;
				public static isEmpty(thisisEmpty: globalAndroid.util.LongSparseArray<any>): boolean;
				public static valueIterator(thisvalueIterator: globalAndroid.util.LongSparseArray<any>): java.util.Iterator<any>;
				public static getOrElse(thisgetOrElse: globalAndroid.util.LongSparseArray<any>, key: number, defaultValue: kotlin.jvm.functions.Function0<any>): any;
				public static putAll(thisputAll: globalAndroid.util.LongSparseArray<any>, other: globalAndroid.util.LongSparseArray<any>): void;
				public static remove(thisremove: globalAndroid.util.LongSparseArray<any>, key: number, value: any): boolean;
				public static containsKey(thiscontainsKey: globalAndroid.util.LongSparseArray<any>, key: number): boolean;
				public static set(thisset: globalAndroid.util.LongSparseArray<any>, key: number, value: any): void;
				public static plus(thisplus: globalAndroid.util.LongSparseArray<any>, other: globalAndroid.util.LongSparseArray<any>): globalAndroid.util.LongSparseArray<any>;
				public static contains(thiscontains: globalAndroid.util.LongSparseArray<any>, key: number): boolean;
				public static forEach(thisforEach: globalAndroid.util.LongSparseArray<any>, action: kotlin.jvm.functions.Function2<any,any,any>): void;
				public static getOrDefault(thisgetOrDefault: globalAndroid.util.LongSparseArray<any>, key: number, defaultValue: any): any;
				public static keyIterator(thiskeyIterator: globalAndroid.util.LongSparseArray<any>): kotlin.collections.LongIterator;
				public static getSize(thissize: globalAndroid.util.LongSparseArray<any>): number;
				public static isNotEmpty(thisisNotEmpty: globalAndroid.util.LongSparseArray<any>): boolean;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module util {
			export class LruCacheKt extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.util.LruCacheKt>;
				public static lruCache(maxSize: number, sizeOf: kotlin.jvm.functions.Function2<any,any,any>, create: kotlin.jvm.functions.Function1<any,any>, onEntryRemoved: kotlin.jvm.functions.Function4<any,any,any,any,any>): globalAndroid.util.LruCache<any,any>;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module util {
			export class PairKt extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.util.PairKt>;
				public static toAndroidPair(thistoAndroidPair: kotlin.Pair<any,any>): globalAndroid.util.Pair<any,any>;
				public static component1(thiscomponent1: globalAndroid.util.Pair<any,any>): any;
				public static component2(thiscomponent2: globalAndroid.util.Pair<any,any>): any;
				public static toKotlinPair(thistoKotlinPair: globalAndroid.util.Pair<any,any>): kotlin.Pair<any,any>;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module util {
			export class RangeKt extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.util.RangeKt>;
				public static plus(thisplus: globalAndroid.util.Range<any>, value: java.lang.Comparable<any>): globalAndroid.util.Range<any>;
				public static plus(thisplus: globalAndroid.util.Range<any>, other: globalAndroid.util.Range<any>): globalAndroid.util.Range<any>;
				public static and(thisand: globalAndroid.util.Range<any>, other: globalAndroid.util.Range<any>): globalAndroid.util.Range<any>;
				public static toClosedRange(thistoClosedRange: globalAndroid.util.Range<any>): kotlin.ranges.ClosedRange<any>;
				public static toRange(thistoRange: kotlin.ranges.ClosedRange<any>): globalAndroid.util.Range<any>;
				public static rangeTo(thisrangeTo: java.lang.Comparable<any>, that: java.lang.Comparable<any>): globalAndroid.util.Range<any>;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module util {
			export class SizeKt extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.util.SizeKt>;
				public static component1(thiscomponent1: any): number;
				public static component2(thiscomponent2: any): number;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module util {
			export class SparseArrayKt extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.util.SparseArrayKt>;
				public static forEach(thisforEach: globalAndroid.util.SparseArray<any>, action: kotlin.jvm.functions.Function2<any,any,any>): void;
				public static keyIterator(thiskeyIterator: globalAndroid.util.SparseArray<any>): kotlin.collections.IntIterator;
				public static plus(thisplus: globalAndroid.util.SparseArray<any>, other: globalAndroid.util.SparseArray<any>): globalAndroid.util.SparseArray<any>;
				public static isEmpty(thisisEmpty: globalAndroid.util.SparseArray<any>): boolean;
				public static set(thisset: globalAndroid.util.SparseArray<any>, key: number, value: any): void;
				public static getSize(thissize: globalAndroid.util.SparseArray<any>): number;
				public static valueIterator(thisvalueIterator: globalAndroid.util.SparseArray<any>): java.util.Iterator<any>;
				public static contains(thiscontains: globalAndroid.util.SparseArray<any>, key: number): boolean;
				public static getOrDefault(thisgetOrDefault: globalAndroid.util.SparseArray<any>, key: number, defaultValue: any): any;
				public static putAll(thisputAll: globalAndroid.util.SparseArray<any>, other: globalAndroid.util.SparseArray<any>): void;
				public static getOrElse(thisgetOrElse: globalAndroid.util.SparseArray<any>, key: number, defaultValue: kotlin.jvm.functions.Function0<any>): any;
				public static remove(thisremove: globalAndroid.util.SparseArray<any>, key: number, value: any): boolean;
				public static containsKey(thiscontainsKey: globalAndroid.util.SparseArray<any>, key: number): boolean;
				public static isNotEmpty(thisisNotEmpty: globalAndroid.util.SparseArray<any>): boolean;
				public static containsValue(thiscontainsValue: globalAndroid.util.SparseArray<any>, value: any): boolean;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module util {
			export class SparseBooleanArrayKt extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.util.SparseBooleanArrayKt>;
				public static putAll(thisputAll: globalAndroid.util.SparseBooleanArray, other: globalAndroid.util.SparseBooleanArray): void;
				public static containsValue(thiscontainsValue: globalAndroid.util.SparseBooleanArray, value: boolean): boolean;
				public static valueIterator(thisvalueIterator: globalAndroid.util.SparseBooleanArray): kotlin.collections.BooleanIterator;
				public static isEmpty(thisisEmpty: globalAndroid.util.SparseBooleanArray): boolean;
				public static isNotEmpty(thisisNotEmpty: globalAndroid.util.SparseBooleanArray): boolean;
				public static getSize(thissize: globalAndroid.util.SparseBooleanArray): number;
				public static getOrDefault(thisgetOrDefault: globalAndroid.util.SparseBooleanArray, key: number, defaultValue: boolean): boolean;
				public static getOrElse(thisgetOrElse: globalAndroid.util.SparseBooleanArray, key: number, defaultValue: kotlin.jvm.functions.Function0<java.lang.Boolean>): boolean;
				public static set(thisset: globalAndroid.util.SparseBooleanArray, key: number, value: boolean): void;
				public static containsKey(thiscontainsKey: globalAndroid.util.SparseBooleanArray, key: number): boolean;
				public static forEach(thisforEach: globalAndroid.util.SparseBooleanArray, action: kotlin.jvm.functions.Function2<any,any,kotlin.Unit>): void;
				public static keyIterator(thiskeyIterator: globalAndroid.util.SparseBooleanArray): kotlin.collections.IntIterator;
				public static plus(thisplus: globalAndroid.util.SparseBooleanArray, other: globalAndroid.util.SparseBooleanArray): globalAndroid.util.SparseBooleanArray;
				public static contains(thiscontains: globalAndroid.util.SparseBooleanArray, key: number): boolean;
				public static remove(thisremove: globalAndroid.util.SparseBooleanArray, key: number, value: boolean): boolean;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module util {
			export class SparseIntArrayKt extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.util.SparseIntArrayKt>;
				public static plus(thisplus: globalAndroid.util.SparseIntArray, other: globalAndroid.util.SparseIntArray): globalAndroid.util.SparseIntArray;
				public static isEmpty(thisisEmpty: globalAndroid.util.SparseIntArray): boolean;
				public static putAll(thisputAll: globalAndroid.util.SparseIntArray, other: globalAndroid.util.SparseIntArray): void;
				public static isNotEmpty(thisisNotEmpty: globalAndroid.util.SparseIntArray): boolean;
				public static forEach(thisforEach: globalAndroid.util.SparseIntArray, action: kotlin.jvm.functions.Function2<any,any,kotlin.Unit>): void;
				public static getSize(thissize: globalAndroid.util.SparseIntArray): number;
				public static remove(thisremove: globalAndroid.util.SparseIntArray, key: number, value: number): boolean;
				public static keyIterator(thiskeyIterator: globalAndroid.util.SparseIntArray): kotlin.collections.IntIterator;
				public static containsKey(thiscontainsKey: globalAndroid.util.SparseIntArray, key: number): boolean;
				public static containsValue(thiscontainsValue: globalAndroid.util.SparseIntArray, value: number): boolean;
				public static getOrElse(thisgetOrElse: globalAndroid.util.SparseIntArray, key: number, defaultValue: kotlin.jvm.functions.Function0<java.lang.Integer>): number;
				public static contains(thiscontains: globalAndroid.util.SparseIntArray, key: number): boolean;
				public static valueIterator(thisvalueIterator: globalAndroid.util.SparseIntArray): kotlin.collections.IntIterator;
				public static set(thisset: globalAndroid.util.SparseIntArray, key: number, value: number): void;
				public static getOrDefault(thisgetOrDefault: globalAndroid.util.SparseIntArray, key: number, defaultValue: number): number;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module util {
			export class SparseLongArrayKt extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.util.SparseLongArrayKt>;
				public static valueIterator(thisvalueIterator: globalAndroid.util.SparseLongArray): kotlin.collections.LongIterator;
				public static contains(thiscontains: globalAndroid.util.SparseLongArray, key: number): boolean;
				public static getOrElse(thisgetOrElse: globalAndroid.util.SparseLongArray, key: number, defaultValue: kotlin.jvm.functions.Function0<java.lang.Long>): number;
				public static isEmpty(thisisEmpty: globalAndroid.util.SparseLongArray): boolean;
				public static containsValue(thiscontainsValue: globalAndroid.util.SparseLongArray, value: number): boolean;
				public static forEach(thisforEach: globalAndroid.util.SparseLongArray, action: kotlin.jvm.functions.Function2<any,any,kotlin.Unit>): void;
				public static putAll(thisputAll: globalAndroid.util.SparseLongArray, other: globalAndroid.util.SparseLongArray): void;
				public static getSize(thissize: globalAndroid.util.SparseLongArray): number;
				public static keyIterator(thiskeyIterator: globalAndroid.util.SparseLongArray): kotlin.collections.IntIterator;
				public static remove(thisremove: globalAndroid.util.SparseLongArray, key: number, value: number): boolean;
				public static isNotEmpty(thisisNotEmpty: globalAndroid.util.SparseLongArray): boolean;
				public static set(thisset: globalAndroid.util.SparseLongArray, key: number, value: number): void;
				public static plus(thisplus: globalAndroid.util.SparseLongArray, other: globalAndroid.util.SparseLongArray): globalAndroid.util.SparseLongArray;
				public static containsKey(thiscontainsKey: globalAndroid.util.SparseLongArray, key: number): boolean;
				public static getOrDefault(thisgetOrDefault: globalAndroid.util.SparseLongArray, key: number, defaultValue: number): number;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export class MenuKt extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.view.MenuKt>;
				public static getChildren(thischildren: globalAndroid.view.Menu): kotlin.sequences.Sequence<globalAndroid.view.MenuItem>;
				public static isNotEmpty(thisisNotEmpty: globalAndroid.view.Menu): boolean;
				public static iterator(thisiterator: globalAndroid.view.Menu): java.util.Iterator<globalAndroid.view.MenuItem>;
				public static getSize(thissize: globalAndroid.view.Menu): number;
				public static forEachIndexed(thisforEachIndexed: globalAndroid.view.Menu, action: kotlin.jvm.functions.Function2<any,any,kotlin.Unit>): void;
				public static minusAssign(thisminusAssign: globalAndroid.view.Menu, item: globalAndroid.view.MenuItem): void;
				public static get(thisget: globalAndroid.view.Menu, index: number): globalAndroid.view.MenuItem;
				public static isEmpty(thisisEmpty: globalAndroid.view.Menu): boolean;
				public static contains(thiscontains: globalAndroid.view.Menu, item: globalAndroid.view.MenuItem): boolean;
				public static forEach(thisforEach: globalAndroid.view.Menu, action: kotlin.jvm.functions.Function1<any,kotlin.Unit>): void;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export class ViewGroupKt extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.view.ViewGroupKt>;
				public static getChildren(thischildren: globalAndroid.view.ViewGroup): kotlin.sequences.Sequence<globalAndroid.view.View>;
				public static forEach(thisforEach: globalAndroid.view.ViewGroup, action: kotlin.jvm.functions.Function1<any,kotlin.Unit>): void;
				public static forEachIndexed(thisforEachIndexed: globalAndroid.view.ViewGroup, action: kotlin.jvm.functions.Function2<any,any,kotlin.Unit>): void;
				public static getSize(thissize: globalAndroid.view.ViewGroup): number;
				public static updateMargins(thisupdateMargins: globalAndroid.view.ViewGroup.MarginLayoutParams, left: number, top: number, right: number, bottom: number): void;
				public static updateMarginsRelative(thisupdateMarginsRelative: globalAndroid.view.ViewGroup.MarginLayoutParams, start: number, top: number, end: number, bottom: number): void;
				public static isNotEmpty(thisisNotEmpty: globalAndroid.view.ViewGroup): boolean;
				public static setMargins(thissetMargins: globalAndroid.view.ViewGroup.MarginLayoutParams, size: number): void;
				public static contains(thiscontains: globalAndroid.view.ViewGroup, view: globalAndroid.view.View): boolean;
				public static iterator(thisiterator: globalAndroid.view.ViewGroup): java.util.Iterator<globalAndroid.view.View>;
				public static plusAssign(thisplusAssign: globalAndroid.view.ViewGroup, view: globalAndroid.view.View): void;
				public static minusAssign(thisminusAssign: globalAndroid.view.ViewGroup, view: globalAndroid.view.View): void;
				public static get(thisget: globalAndroid.view.ViewGroup, index: number): globalAndroid.view.View;
				public static isEmpty(thisisEmpty: globalAndroid.view.ViewGroup): boolean;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export class ViewKt extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.view.ViewKt>;
				public static getMarginBottom(thismarginBottom: globalAndroid.view.View): number;
				public static postDelayed(thispostDelayed: globalAndroid.view.View, delayInMillis: number, action: kotlin.jvm.functions.Function0<kotlin.Unit>): java.lang.Runnable;
				public static doOnDetach(thisdoOnDetach: globalAndroid.view.View, action: kotlin.jvm.functions.Function1<any,kotlin.Unit>): void;
				public static getMarginStart(thismarginStart: globalAndroid.view.View): number;
				public static getMarginRight(thismarginRight: globalAndroid.view.View): number;
				public static isGone(thisisGone: globalAndroid.view.View): boolean;
				public static doOnAttach(thisdoOnAttach: globalAndroid.view.View, action: kotlin.jvm.functions.Function1<any,kotlin.Unit>): void;
				public static isVisible(thisisVisible: globalAndroid.view.View): boolean;
				public static setPadding(thissetPadding: globalAndroid.view.View, size: number): void;
				public static getMarginEnd(thismarginEnd: globalAndroid.view.View): number;
				public static doOnPreDraw(thisdoOnPreDraw: globalAndroid.view.View, action: kotlin.jvm.functions.Function1<any,kotlin.Unit>): androidx.core.view.OneShotPreDrawListener;
				public static postOnAnimationDelayed(thispostOnAnimationDelayed: globalAndroid.view.View, delayInMillis: number, action: kotlin.jvm.functions.Function0<kotlin.Unit>): java.lang.Runnable;
				public static setInvisible(thisisInvisible: globalAndroid.view.View, value: boolean): void;
				public static updatePadding(thisupdatePadding: globalAndroid.view.View, left: number, top: number, right: number, bottom: number): void;
				public static updatePaddingRelative(thisupdatePaddingRelative: globalAndroid.view.View, start: number, top: number, end: number, bottom: number): void;
				public static isInvisible(thisisInvisible: globalAndroid.view.View): boolean;
				public static doOnLayout(thisdoOnLayout: globalAndroid.view.View, action: kotlin.jvm.functions.Function1<any,kotlin.Unit>): void;
				public static getMarginLeft(thismarginLeft: globalAndroid.view.View): number;
				public static setVisible(thisisVisible: globalAndroid.view.View, value: boolean): void;
				public static drawToBitmap(thisdrawToBitmap: globalAndroid.view.View, config: globalAndroid.graphics.Bitmap.Config): globalAndroid.graphics.Bitmap;
				public static getMarginTop(thismarginTop: globalAndroid.view.View): number;
				public static doOnNextLayout(thisdoOnNextLayout: globalAndroid.view.View, action: kotlin.jvm.functions.Function1<any,kotlin.Unit>): void;
				public static updateLayoutParams(thisupdateLayoutParams: globalAndroid.view.View, block: kotlin.jvm.functions.Function1<any,kotlin.Unit>): void;
				public static setGone(thisisGone: globalAndroid.view.View, value: boolean): void;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module widget {
			export class TextViewKt extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.widget.TextViewKt>;
				public static doAfterTextChanged(thisdoAfterTextChanged: globalAndroid.widget.TextView, action: kotlin.jvm.functions.Function1<any,kotlin.Unit>): globalAndroid.text.TextWatcher;
				public static doOnTextChanged(thisdoOnTextChanged: globalAndroid.widget.TextView, action: kotlin.jvm.functions.Function4<any,any,any,any,kotlin.Unit>): globalAndroid.text.TextWatcher;
				public static doBeforeTextChanged(thisdoBeforeTextChanged: globalAndroid.widget.TextView, action: kotlin.jvm.functions.Function4<any,any,any,any,kotlin.Unit>): globalAndroid.text.TextWatcher;
				public static addTextChangedListener(thisaddTextChangedListener: globalAndroid.widget.TextView, beforeTextChanged: kotlin.jvm.functions.Function4<any,any,any,any,kotlin.Unit>, onTextChanged: kotlin.jvm.functions.Function4<any,any,any,any,kotlin.Unit>, afterTextChanged: kotlin.jvm.functions.Function1<any,kotlin.Unit>): globalAndroid.text.TextWatcher;
			}
		}
	}
}

//Generics information:

