declare module androidx {
	export module collection {
		export class ArrayMapKt extends java.lang.Object {
			public static class: java.lang.Class<androidx.collection.ArrayMapKt>;
			public static arrayMapOf(pairs: native.Array<kotlin.Pair<any,any>>): androidx.collection.ArrayMap<any,any>;
			public static arrayMapOf(): androidx.collection.ArrayMap<any,any>;
		}
	}
}

declare module androidx {
	export module collection {
		export class ArraySetKt extends java.lang.Object {
			public static class: java.lang.Class<androidx.collection.ArraySetKt>;
			public static arraySetOf(values: native.Array<any>): androidx.collection.ArraySet<any>;
			public static arraySetOf(): androidx.collection.ArraySet<any>;
		}
	}
}

declare module androidx {
	export module collection {
		export class LongSparseArrayKt extends java.lang.Object {
			public static class: java.lang.Class<androidx.collection.LongSparseArrayKt>;
			/** @deprecated */
			public static remove(receiver: androidx.collection.LongSparseArray<any>, key: number, value: any): boolean;
			public static contains(receiver: androidx.collection.LongSparseArray<any>, key: number): boolean;
			public static forEach(receiver: androidx.collection.LongSparseArray<any>, action: kotlin.jvm.functions.Function2<any,any,any>): void;
			public static set(receiver: androidx.collection.LongSparseArray<any>, key: number, value: any): void;
			public static plus(receiver: androidx.collection.LongSparseArray<any>, other: androidx.collection.LongSparseArray<any>): androidx.collection.LongSparseArray<any>;
			public static valueIterator(receiver: androidx.collection.LongSparseArray<any>): java.util.Iterator<any>;
			public static keyIterator(receiver: androidx.collection.LongSparseArray<any>): kotlin.collections.LongIterator;
			public static isNotEmpty(receiver: androidx.collection.LongSparseArray<any>): boolean;
			public static getOrElse(receiver: androidx.collection.LongSparseArray<any>, key: number, defaultValue: kotlin.jvm.functions.Function0<any>): any;
			public static getOrDefault(receiver: androidx.collection.LongSparseArray<any>, key: number, defaultValue: any): any;
			public static getSize(receiver: androidx.collection.LongSparseArray<any>): number;
		}
	}
}

declare module androidx {
	export module collection {
		export class LruCacheKt extends java.lang.Object {
			public static class: java.lang.Class<androidx.collection.LruCacheKt>;
			public static lruCache(maxSize: number, sizeOf: kotlin.jvm.functions.Function2<any,any,any>, create: kotlin.jvm.functions.Function1<any,any>, onEntryRemoved: kotlin.jvm.functions.Function4<any,any,any,any,any>): androidx.collection.LruCache<any,any>;
		}
	}
}

declare module androidx {
	export module collection {
		export class SparseArrayKt extends java.lang.Object {
			public static class: java.lang.Class<androidx.collection.SparseArrayKt>;
			public static getSize(receiver: androidx.collection.SparseArrayCompat<any>): number;
			public static getOrElse(receiver: androidx.collection.SparseArrayCompat<any>, key: number, defaultValue: kotlin.jvm.functions.Function0<any>): any;
			public static plus(receiver: androidx.collection.SparseArrayCompat<any>, other: androidx.collection.SparseArrayCompat<any>): androidx.collection.SparseArrayCompat<any>;
			public static set(receiver: androidx.collection.SparseArrayCompat<any>, key: number, value: any): void;
			public static getOrDefault(receiver: androidx.collection.SparseArrayCompat<any>, key: number, defaultValue: any): any;
			public static valueIterator(receiver: androidx.collection.SparseArrayCompat<any>): java.util.Iterator<any>;
			public static contains(receiver: androidx.collection.SparseArrayCompat<any>, key: number): boolean;
			public static keyIterator(receiver: androidx.collection.SparseArrayCompat<any>): kotlin.collections.IntIterator;
			public static forEach(receiver: androidx.collection.SparseArrayCompat<any>, action: kotlin.jvm.functions.Function2<any,any,any>): void;
			public static isNotEmpty(receiver: androidx.collection.SparseArrayCompat<any>): boolean;
			/** @deprecated */
			public static remove(receiver: androidx.collection.SparseArrayCompat<any>, key: number, value: any): boolean;
		}
	}
}

//Generics information:

