declare module kotlinx {
	export module android {
		export module extensions {
			export class CacheImplementation {
				public static class: java.lang.Class<kotlinx.android.extensions.CacheImplementation>;
				public static Companion: kotlinx.android.extensions.CacheImplementation.Companion;
				public static HASH_MAP: kotlinx.android.extensions.CacheImplementation;
				public static NO_CACHE: kotlinx.android.extensions.CacheImplementation;
				public static SPARSE_ARRAY: kotlinx.android.extensions.CacheImplementation;
				public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static valueOf(string0: string): kotlinx.android.extensions.CacheImplementation;
				public static values(): native.Array<kotlinx.android.extensions.CacheImplementation>;
			}
			export module CacheImplementation {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<kotlinx.android.extensions.CacheImplementation.Companion>;
					public getDEFAULT(): kotlinx.android.extensions.CacheImplementation;
				}
			}
		}
	}
}

declare module kotlinx {
	export module android {
		export module extensions {
			export class ContainerOptions extends java.lang.Object implements java.lang.annotation.Annotation {
				public static class: java.lang.Class<kotlinx.android.extensions.ContainerOptions>;
				/**
				 * Constructs a new instance of the kotlinx.android.extensions.ContainerOptions interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					cache(): kotlinx.android.extensions.CacheImplementation;
					equals(object0: any): boolean;
					hashCode(): number;
					toString(): string;
					annotationType(): java.lang.Class<any>;
				});
				public constructor();
				public equals(obj: any): boolean;
				public hashCode(): number;
				public annotationType(): java.lang.Class<any>;
				public cache(): kotlinx.android.extensions.CacheImplementation;
				public toString(): string;
			}
		}
	}
}

declare module kotlinx {
	export module android {
		export module extensions {
			export class LayoutContainer extends java.lang.Object {
				public static class: java.lang.Class<kotlinx.android.extensions.LayoutContainer>;
				/**
				 * Constructs a new instance of the kotlinx.android.extensions.LayoutContainer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getContainerView(): globalAndroid.view.View;
				});
				public constructor();
				public getContainerView(): globalAndroid.view.View;
			}
		}
	}
}

declare module kotlinx {
	export module android {
		export module parcel {
			export class IgnoredOnParcel extends java.lang.Object implements java.lang.annotation.Annotation {
				public static class: java.lang.Class<kotlinx.android.parcel.IgnoredOnParcel>;
				/**
				 * Constructs a new instance of the kotlinx.android.parcel.IgnoredOnParcel interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
				public annotationType(): java.lang.Class<any>;
				public toString(): string;
			}
		}
	}
}

declare module kotlinx {
	export module android {
		export module parcel {
			export class Parceler<T>  extends java.lang.Object {
				public static class: java.lang.Class<kotlinx.android.parcel.Parceler<any>>;
				/**
				 * Constructs a new instance of the kotlinx.android.parcel.Parceler<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					write(object0: T, parcel1: globalAndroid.os.Parcel, int2: number): void;
					create(parcel0: globalAndroid.os.Parcel): T;
					newArray(int0: number): native.Array<T>;
				});
				public constructor();
				public newArray(int0: number): native.Array<T>;
				public create(parcel0: globalAndroid.os.Parcel): T;
				public write(object0: T, parcel1: globalAndroid.os.Parcel, int2: number): void;
			}
			export module Parceler {
				export class DefaultImpls extends java.lang.Object {
					public static class: java.lang.Class<kotlinx.android.parcel.Parceler.DefaultImpls>;
					public static newArray(this0: kotlinx.android.parcel.Parceler<any>, size: number): native.Array<any>;
				}
			}
		}
	}
}

declare module kotlinx {
	export module android {
		export module parcel {
			export class Parcelize extends java.lang.Object implements java.lang.annotation.Annotation {
				public static class: java.lang.Class<kotlinx.android.parcel.Parcelize>;
				/**
				 * Constructs a new instance of the kotlinx.android.parcel.Parcelize interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
				public annotationType(): java.lang.Class<any>;
				public toString(): string;
			}
		}
	}
}

declare module kotlinx {
	export module android {
		export module parcel {
			export class RawValue extends java.lang.Object implements java.lang.annotation.Annotation {
				public static class: java.lang.Class<kotlinx.android.parcel.RawValue>;
				/**
				 * Constructs a new instance of the kotlinx.android.parcel.RawValue interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
				public annotationType(): java.lang.Class<any>;
				public toString(): string;
			}
		}
	}
}

declare module kotlinx {
	export module android {
		export module parcel {
			export class TypeParceler<T, P>  extends java.lang.annotation.Annotation {
				public static class: java.lang.Class<kotlinx.android.parcel.TypeParceler<any,any>>;
				/**
				 * Constructs a new instance of the kotlinx.android.parcel.TypeParceler<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
				public annotationType(): java.lang.Class<any>;
				public toString(): string;
			}
		}
	}
}

declare module kotlinx {
	export module android {
		export module parcel {
			export class WriteWith<P>  extends java.lang.annotation.Annotation {
				public static class: java.lang.Class<kotlinx.android.parcel.WriteWith<any>>;
				/**
				 * Constructs a new instance of the kotlinx.android.parcel.WriteWith<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
				public annotationType(): java.lang.Class<any>;
				public toString(): string;
			}
		}
	}
}

//Generics information:
//kotlinx.android.parcel.Parceler:1
//kotlinx.android.parcel.TypeParceler:2
//kotlinx.android.parcel.WriteWith:1

