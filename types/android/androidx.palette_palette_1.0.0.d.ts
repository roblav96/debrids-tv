declare module androidx {
	export module palette {
		export module graphics {
			export class ColorCutQuantizer extends java.lang.Object {
				public static class: java.lang.Class<androidx.palette.graphics.ColorCutQuantizer>;
			}
			export module ColorCutQuantizer {
				export class Vbox extends java.lang.Object {
					public static class: java.lang.Class<androidx.palette.graphics.ColorCutQuantizer.Vbox>;
				}
			}
		}
	}
}

declare module androidx {
	export module palette {
		export module graphics {
			export class Palette extends java.lang.Object {
				public static class: java.lang.Class<androidx.palette.graphics.Palette>;
				public getVibrantColor(defaultColor: number): number;
				public getMutedColor(defaultColor: number): number;
				public getLightVibrantSwatch(): androidx.palette.graphics.Palette.Swatch;
				public getDominantColor(defaultColor: number): number;
				public getDarkVibrantSwatch(): androidx.palette.graphics.Palette.Swatch;
				public getLightMutedColor(defaultColor: number): number;
				public static from(swatches: java.util.List<androidx.palette.graphics.Palette.Swatch>): androidx.palette.graphics.Palette;
				/** @deprecated */
				public static generate(bitmap: globalAndroid.graphics.Bitmap): androidx.palette.graphics.Palette;
				public getDarkMutedColor(defaultColor: number): number;
				/** @deprecated */
				public static generateAsync(bitmap: globalAndroid.graphics.Bitmap, listener: androidx.palette.graphics.Palette.PaletteAsyncListener): globalAndroid.os.AsyncTask<globalAndroid.graphics.Bitmap,java.lang.Void,androidx.palette.graphics.Palette>;
				public static from(bitmap: globalAndroid.graphics.Bitmap): androidx.palette.graphics.Palette.Builder;
				public getVibrantSwatch(): androidx.palette.graphics.Palette.Swatch;
				public getLightMutedSwatch(): androidx.palette.graphics.Palette.Swatch;
				public getLightVibrantColor(defaultColor: number): number;
				public getMutedSwatch(): androidx.palette.graphics.Palette.Swatch;
				public getDarkVibrantColor(defaultColor: number): number;
				public getSwatches(): java.util.List<androidx.palette.graphics.Palette.Swatch>;
				public getDarkMutedSwatch(): androidx.palette.graphics.Palette.Swatch;
				public getSwatchForTarget(target: androidx.palette.graphics.Target): androidx.palette.graphics.Palette.Swatch;
				public getColorForTarget(target: androidx.palette.graphics.Target, defaultColor: number): number;
				public getDominantSwatch(): androidx.palette.graphics.Palette.Swatch;
				/** @deprecated */
				public static generateAsync(bitmap: globalAndroid.graphics.Bitmap, numColors: number, listener: androidx.palette.graphics.Palette.PaletteAsyncListener): globalAndroid.os.AsyncTask<globalAndroid.graphics.Bitmap,java.lang.Void,androidx.palette.graphics.Palette>;
				/** @deprecated */
				public static generate(bitmap: globalAndroid.graphics.Bitmap, numColors: number): androidx.palette.graphics.Palette;
				public getTargets(): java.util.List<androidx.palette.graphics.Target>;
			}
			export module Palette {
				export class Builder extends java.lang.Object {
					public static class: java.lang.Class<androidx.palette.graphics.Palette.Builder>;
					public maximumColorCount(colors: number): androidx.palette.graphics.Palette.Builder;
					/** @deprecated */
					public resizeBitmapSize(maxDimension: number): androidx.palette.graphics.Palette.Builder;
					public setRegion(left: number, top: number, right: number, bottom: number): androidx.palette.graphics.Palette.Builder;
					public constructor(swatches: java.util.List<androidx.palette.graphics.Palette.Swatch>);
					public clearRegion(): androidx.palette.graphics.Palette.Builder;
					public addTarget(target: androidx.palette.graphics.Target): androidx.palette.graphics.Palette.Builder;
					public addFilter(filter: androidx.palette.graphics.Palette.Filter): androidx.palette.graphics.Palette.Builder;
					public resizeBitmapArea(area: number): androidx.palette.graphics.Palette.Builder;
					public clearFilters(): androidx.palette.graphics.Palette.Builder;
					public generate(listener: androidx.palette.graphics.Palette.PaletteAsyncListener): globalAndroid.os.AsyncTask<globalAndroid.graphics.Bitmap,java.lang.Void,androidx.palette.graphics.Palette>;
					public clearTargets(): androidx.palette.graphics.Palette.Builder;
					public generate(): androidx.palette.graphics.Palette;
					public constructor(bitmap: globalAndroid.graphics.Bitmap);
				}
				export class Filter extends java.lang.Object {
					public static class: java.lang.Class<androidx.palette.graphics.Palette.Filter>;
					/**
					 * Constructs a new instance of the androidx.palette.graphics.Palette$Filter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						isAllowed(int0: number, floats1: native.Array<number>): boolean;
					});
					public constructor();
					public isAllowed(int0: number, floats1: native.Array<number>): boolean;
				}
				export class PaletteAsyncListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.palette.graphics.Palette.PaletteAsyncListener>;
					/**
					 * Constructs a new instance of the androidx.palette.graphics.Palette$PaletteAsyncListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onGenerated(palette0: androidx.palette.graphics.Palette): void;
					});
					public constructor();
					public onGenerated(palette0: androidx.palette.graphics.Palette): void;
				}
				export class Swatch extends java.lang.Object {
					public static class: java.lang.Class<androidx.palette.graphics.Palette.Swatch>;
					public toString(): string;
					public equals(obj: any): boolean;
					public getHsl(): native.Array<number>;
					public getPopulation(): number;
					public getTitleTextColor(): number;
					public getBodyTextColor(): number;
					public constructor(color: number, population: number);
					public equals(o: any): boolean;
					public hashCode(): number;
					public getRgb(): number;
				}
			}
		}
	}
}

declare module androidx {
	export module palette {
		export module graphics {
			export class Target extends java.lang.Object {
				public static class: java.lang.Class<androidx.palette.graphics.Target>;
				public static LIGHT_VIBRANT: androidx.palette.graphics.Target;
				public static VIBRANT: androidx.palette.graphics.Target;
				public static DARK_VIBRANT: androidx.palette.graphics.Target;
				public static LIGHT_MUTED: androidx.palette.graphics.Target;
				public static MUTED: androidx.palette.graphics.Target;
				public static DARK_MUTED: androidx.palette.graphics.Target;
				public getPopulationWeight(): number;
				public getTargetSaturation(): number;
				public getTargetLightness(): number;
				public getSaturationWeight(): number;
				public getMinimumLightness(): number;
				public getMaximumSaturation(): number;
				public getLightnessWeight(): number;
				public getMaximumLightness(): number;
				public getMinimumSaturation(): number;
				public isExclusive(): boolean;
			}
			export module Target {
				export class Builder extends java.lang.Object {
					public static class: java.lang.Class<androidx.palette.graphics.Target.Builder>;
					public setMinimumSaturation(value: number): androidx.palette.graphics.Target.Builder;
					public build(): androidx.palette.graphics.Target;
					public setTargetLightness(value: number): androidx.palette.graphics.Target.Builder;
					public setSaturationWeight(weight: number): androidx.palette.graphics.Target.Builder;
					public setMaximumSaturation(value: number): androidx.palette.graphics.Target.Builder;
					public setMinimumLightness(value: number): androidx.palette.graphics.Target.Builder;
					public setExclusive(exclusive: boolean): androidx.palette.graphics.Target.Builder;
					public setTargetSaturation(value: number): androidx.palette.graphics.Target.Builder;
					public setMaximumLightness(value: number): androidx.palette.graphics.Target.Builder;
					public setPopulationWeight(weight: number): androidx.palette.graphics.Target.Builder;
					public constructor();
					public constructor(target: androidx.palette.graphics.Target);
					public setLightnessWeight(weight: number): androidx.palette.graphics.Target.Builder;
				}
			}
		}
	}
}

//Generics information:

