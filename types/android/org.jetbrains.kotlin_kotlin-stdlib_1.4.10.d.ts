declare class ModuleInfo extends java.lang.Object {
	public static class: java.lang.Class<ModuleInfo>;
}

declare module kotlin {
	export class ArrayIntrinsicsKt extends java.lang.Object {
		public static class: java.lang.Class<kotlin.ArrayIntrinsicsKt>;
	}
}

declare module kotlin {
	export class BuilderInference extends java.lang.Object implements java.lang.annotation.Annotation {
		public static class: java.lang.Class<kotlin.BuilderInference>;
		/**
		 * Constructs a new instance of the kotlin.BuilderInference interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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

declare module kotlin {
	export class DeepRecursiveFunction<T, R>  extends java.lang.Object {
		public static class: java.lang.Class<kotlin.DeepRecursiveFunction<any,any>>;
		public constructor(block: kotlin.jvm.functions.Function3<any,any,any,any>);
		public getBlock(): kotlin.jvm.functions.Function3<kotlin.DeepRecursiveScope<T,R>,T,kotlin.coroutines.Continuation<any>,any>;
	}
}

declare module kotlin {
	export class DeepRecursiveKt extends java.lang.Object {
		public static class: java.lang.Class<kotlin.DeepRecursiveKt>;
		public static invoke(thisinvoke: kotlin.DeepRecursiveFunction<any,any>, value: any): any;
	}
}

declare module kotlin {
	export abstract class DeepRecursiveScope<T, R>  extends java.lang.Object {
		public static class: java.lang.Class<kotlin.DeepRecursiveScope<any,any>>;
		public callRecursive(object0: T, continuation1: kotlin.coroutines.Continuation<any>): any;
		public callRecursive(deepRecursiveFunction0: kotlin.DeepRecursiveFunction<any,any>, object1: any, continuation2: kotlin.coroutines.Continuation<any>): any;
		/** @deprecated */
		public invoke(thisinvoke: kotlin.DeepRecursiveFunction<any,any>, value: any): java.lang.Void;
	}
}

declare module kotlin {
	export class DeepRecursiveScopeImpl<T, R>  extends kotlin.DeepRecursiveScope<any,any> implements kotlin.coroutines.Continuation<any>  {
		public static class: java.lang.Class<kotlin.DeepRecursiveScopeImpl<any,any>>;
		public callRecursive(thiscallRecursive: kotlin.DeepRecursiveFunction<any,any>, value: any, completion: kotlin.coroutines.Continuation<any>): any;
		public callRecursive(deepRecursiveFunction0: kotlin.DeepRecursiveFunction<any,any>, object1: any, continuation2: kotlin.coroutines.Continuation<any>): any;
		public constructor(block: kotlin.jvm.functions.Function3<any,any,any,any>, value: any);
		public resumeWith(result: any): void;
		public getContext(): kotlin.coroutines.CoroutineContext;
		public callRecursive(value: any, completion: kotlin.coroutines.Continuation<any>): any;
		public callRecursive(object0: any, continuation1: kotlin.coroutines.Continuation<any>): any;
		public runCallLoop(): any;
	}
}

declare module kotlin {
	export class Deprecated extends java.lang.Object implements java.lang.annotation.Annotation {
		public static class: java.lang.Class<kotlin.Deprecated>;
		/**
		 * Constructs a new instance of the kotlin.Deprecated interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			message(): string;
			replaceWith(): kotlin.ReplaceWith;
			level(): kotlin.DeprecationLevel;
			equals(object0: any): boolean;
			hashCode(): number;
			toString(): string;
			annotationType(): java.lang.Class<any>;
		});
		public constructor();
		public equals(obj: any): boolean;
		public hashCode(): number;
		public level(): kotlin.DeprecationLevel;
		public message(): string;
		public toString(): string;
		public replaceWith(): kotlin.ReplaceWith;
		public annotationType(): java.lang.Class<any>;
	}
}

declare module kotlin {
	export class DeprecatedSinceKotlin extends java.lang.Object implements java.lang.annotation.Annotation {
		public static class: java.lang.Class<kotlin.DeprecatedSinceKotlin>;
		/**
		 * Constructs a new instance of the kotlin.DeprecatedSinceKotlin interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			warningSince(): string;
			errorSince(): string;
			hiddenSince(): string;
			equals(object0: any): boolean;
			hashCode(): number;
			toString(): string;
			annotationType(): java.lang.Class<any>;
		});
		public constructor();
		public hiddenSince(): string;
		public equals(obj: any): boolean;
		public warningSince(): string;
		public hashCode(): number;
		public errorSince(): string;
		public toString(): string;
		public annotationType(): java.lang.Class<any>;
	}
}

declare module kotlin {
	export class DeprecationLevel {
		public static class: java.lang.Class<kotlin.DeprecationLevel>;
		public static WARNING: kotlin.DeprecationLevel;
		public static ERROR: kotlin.DeprecationLevel;
		public static HIDDEN: kotlin.DeprecationLevel;
		public static values(): native.Array<kotlin.DeprecationLevel>;
		public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
		public static valueOf(string0: string): kotlin.DeprecationLevel;
	}
}

declare module kotlin {
	export class DslMarker extends java.lang.Object implements java.lang.annotation.Annotation {
		public static class: java.lang.Class<kotlin.DslMarker>;
		/**
		 * Constructs a new instance of the kotlin.DslMarker interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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

declare module kotlin {
	export class ExceptionsKt extends kotlin.ExceptionsKt__ExceptionsKt {
		public static class: java.lang.Class<kotlin.ExceptionsKt>;
	}
}

declare module kotlin {
	export class ExceptionsKt__ExceptionsKt extends java.lang.Object {
		public static class: java.lang.Class<kotlin.ExceptionsKt__ExceptionsKt>;
		public constructor();
		public static stackTraceToString(thisstackTraceToString: java.lang.Throwable): string;
		public static getStackTrace(thisstackTrace: java.lang.Throwable): native.Array<java.lang.StackTraceElement>;
		public static getSuppressedExceptions(thissuppressedExceptions: java.lang.Throwable): java.util.List<java.lang.Throwable>;
		public static addSuppressed(thisaddSuppressed: java.lang.Throwable, exception: java.lang.Throwable): void;
	}
}

declare module kotlin {
	export class Experimental extends java.lang.Object implements java.lang.annotation.Annotation {
		public static class: java.lang.Class<kotlin.Experimental>;
		/**
		 * Constructs a new instance of the kotlin.Experimental interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			level(): kotlin.Experimental.Level;
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
		public level(): kotlin.Experimental.Level;
	}
	export module Experimental {
		export class Level {
			public static class: java.lang.Class<kotlin.Experimental.Level>;
			public static WARNING: kotlin.Experimental.Level;
			public static ERROR: kotlin.Experimental.Level;
			public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
			public static values(): native.Array<kotlin.Experimental.Level>;
			public static valueOf(string0: string): kotlin.Experimental.Level;
		}
	}
}

declare module kotlin {
	export class ExperimentalMultiplatform extends java.lang.Object implements java.lang.annotation.Annotation {
		public static class: java.lang.Class<kotlin.ExperimentalMultiplatform>;
		/**
		 * Constructs a new instance of the kotlin.ExperimentalMultiplatform interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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

declare module kotlin {
	export class ExperimentalStdlibApi extends java.lang.Object implements java.lang.annotation.Annotation {
		public static class: java.lang.Class<kotlin.ExperimentalStdlibApi>;
		/**
		 * Constructs a new instance of the kotlin.ExperimentalStdlibApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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

declare module kotlin {
	export class ExperimentalUnsignedTypes extends java.lang.Object implements java.lang.annotation.Annotation {
		public static class: java.lang.Class<kotlin.ExperimentalUnsignedTypes>;
		/**
		 * Constructs a new instance of the kotlin.ExperimentalUnsignedTypes interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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

declare module kotlin {
	export class ExtensionFunctionType extends java.lang.Object implements java.lang.annotation.Annotation {
		public static class: java.lang.Class<kotlin.ExtensionFunctionType>;
		/**
		 * Constructs a new instance of the kotlin.ExtensionFunctionType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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

declare module kotlin {
	export class Function<R>  extends java.lang.Object {
		public static class: java.lang.Class<kotlin.Function<any>>;
		/**
		 * Constructs a new instance of the kotlin.Function<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
		});
		public constructor();
	}
}

declare module kotlin {
	export class HashCodeKt extends java.lang.Object {
		public static class: java.lang.Class<kotlin.HashCodeKt>;
	}
}

declare module kotlin {
	export class InitializedLazyImpl<T>  extends java.lang.Object {
		public static class: java.lang.Class<kotlin.InitializedLazyImpl<any>>;
		public constructor(value: T);
		public isInitialized(): boolean;
		public toString(): string;
		public getValue(): T;
	}
}

declare module kotlin {
	export class KotlinNothingValueException extends java.lang.RuntimeException {
		public static class: java.lang.Class<kotlin.KotlinNothingValueException>;
		public constructor();
		public constructor(message: string, cause: java.lang.Throwable);
		public constructor(message: string);
		public constructor(cause: java.lang.Throwable);
		public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
	}
}

declare module kotlin {
	export class KotlinNullPointerException extends java.lang.NullPointerException {
		public static class: java.lang.Class<kotlin.KotlinNullPointerException>;
		public constructor();
		public constructor(message: string, cause: java.lang.Throwable);
		public constructor(s: string);
		public constructor(message: string);
		public constructor(cause: java.lang.Throwable);
		public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
	}
}

declare module kotlin {
	export class KotlinVersion extends java.lang.Comparable<kotlin.KotlinVersion> {
		public static class: java.lang.Class<kotlin.KotlinVersion>;
		public static MAX_COMPONENT_VALUE: number;
		public static CURRENT: kotlin.KotlinVersion;
		public static Companion: kotlin.KotlinVersion.Companion;
		public constructor(major: number, minor: number);
		public equals(obj: any): boolean;
		public equals(other: any): boolean;
		public isAtLeast(major: number, minor: number, patch: number): boolean;
		public getPatch(): number;
		public compareTo(other: kotlin.KotlinVersion): number;
		public hashCode(): number;
		public constructor(major: number, minor: number, patch: number);
		public getMinor(): number;
		public isAtLeast(major: number, minor: number): boolean;
		public getMajor(): number;
		public toString(): string;
	}
	export module KotlinVersion {
		export class Companion extends java.lang.Object {
			public static class: java.lang.Class<kotlin.KotlinVersion.Companion>;
		}
	}
}

declare module kotlin {
	export class LateinitKt extends java.lang.Object {
		public static class: java.lang.Class<kotlin.LateinitKt>;
	}
}

declare module kotlin {
	export class Lazy<T>  extends java.lang.Object {
		public static class: java.lang.Class<kotlin.Lazy<any>>;
		/**
		 * Constructs a new instance of the kotlin.Lazy<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			getValue(): T;
			isInitialized(): boolean;
		});
		public constructor();
		public isInitialized(): boolean;
		public getValue(): T;
	}
}

declare module kotlin {
	export class LazyKt extends kotlin.LazyKt__LazyKt {
		public static class: java.lang.Class<kotlin.LazyKt>;
	}
	export module LazyKt {
		export class WhenMappings extends java.lang.Object {
			public static class: java.lang.Class<kotlin.LazyKt.WhenMappings>;
		}
	}
}

declare module kotlin {
	export class LazyKt__LazyJVMKt extends java.lang.Object {
		public static class: java.lang.Class<kotlin.LazyKt__LazyJVMKt>;
		public constructor();
		public static lazy(initializer: kotlin.jvm.functions.Function0<any>): kotlin.Lazy<any>;
		public static lazy(lock: any, initializer: kotlin.jvm.functions.Function0<any>): kotlin.Lazy<any>;
		public static lazy(mode: kotlin.LazyThreadSafetyMode, initializer: kotlin.jvm.functions.Function0<any>): kotlin.Lazy<any>;
	}
}

declare module kotlin {
	export class LazyKt__LazyKt extends kotlin.LazyKt__LazyJVMKt {
		public static class: java.lang.Class<kotlin.LazyKt__LazyKt>;
		public static lazyOf(value: any): kotlin.Lazy<any>;
		public constructor();
	}
}

declare module kotlin {
	export class LazyThreadSafetyMode {
		public static class: java.lang.Class<kotlin.LazyThreadSafetyMode>;
		public static SYNCHRONIZED: kotlin.LazyThreadSafetyMode;
		public static PUBLICATION: kotlin.LazyThreadSafetyMode;
		public static NONE: kotlin.LazyThreadSafetyMode;
		public static valueOf(string0: string): kotlin.LazyThreadSafetyMode;
		public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
		public static values(): native.Array<kotlin.LazyThreadSafetyMode>;
	}
}

declare module kotlin {
	export class Metadata extends java.lang.Object implements java.lang.annotation.Annotation {
		public static class: java.lang.Class<kotlin.Metadata>;
		/**
		 * Constructs a new instance of the kotlin.Metadata interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			k(): number;
			mv(): native.Array<number>;
			bv(): native.Array<number>;
			d1(): native.Array<string>;
			d2(): native.Array<string>;
			xs(): string;
			pn(): string;
			xi(): number;
			equals(object0: any): boolean;
			hashCode(): number;
			toString(): string;
			annotationType(): java.lang.Class<any>;
		});
		public constructor();
		public pn(): string;
		public k(): number;
		public equals(obj: any): boolean;
		public d2(): native.Array<string>;
		public bv(): native.Array<number>;
		public hashCode(): number;
		public d1(): native.Array<string>;
		public xi(): number;
		public toString(): string;
		public annotationType(): java.lang.Class<any>;
		public mv(): native.Array<number>;
		public xs(): string;
	}
}

declare module kotlin {
	export class NoWhenBranchMatchedException extends java.lang.RuntimeException {
		public static class: java.lang.Class<kotlin.NoWhenBranchMatchedException>;
		public constructor();
		public constructor(message: string, cause: java.lang.Throwable);
		public constructor(message: string);
		public constructor(cause: java.lang.Throwable);
		public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
	}
}

declare module kotlin {
	export class NotImplementedError extends java.lang.Error {
		public static class: java.lang.Class<kotlin.NotImplementedError>;
		public constructor();
		public constructor(message: string, cause: java.lang.Throwable);
		public constructor(message: string);
		public constructor(cause: java.lang.Throwable);
		public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
	}
}

declare module kotlin {
	export class NumbersKt extends kotlin.NumbersKt__NumbersKt {
		public static class: java.lang.Class<kotlin.NumbersKt>;
	}
}

declare module kotlin {
	export class NumbersKt__BigDecimalsKt extends java.lang.Object {
		public static class: java.lang.Class<kotlin.NumbersKt__BigDecimalsKt>;
		public constructor();
	}
}

declare module kotlin {
	export class NumbersKt__BigIntegersKt extends kotlin.NumbersKt__BigDecimalsKt {
		public static class: java.lang.Class<kotlin.NumbersKt__BigIntegersKt>;
		public constructor();
	}
}

declare module kotlin {
	export class NumbersKt__NumbersJVMKt extends kotlin.NumbersKt__BigIntegersKt {
		public static class: java.lang.Class<kotlin.NumbersKt__NumbersJVMKt>;
		public constructor();
	}
}

declare module kotlin {
	export class NumbersKt__NumbersKt extends kotlin.NumbersKt__NumbersJVMKt {
		public static class: java.lang.Class<kotlin.NumbersKt__NumbersKt>;
		public constructor();
		public static rotateLeft(thisrotateLeft: number, bitCount: number): number;
		public static rotateRight(thisrotateRight: number, bitCount: number): number;
	}
}

declare module kotlin {
	export class OptIn extends java.lang.Object implements java.lang.annotation.Annotation {
		public static class: java.lang.Class<kotlin.OptIn>;
		/**
		 * Constructs a new instance of the kotlin.OptIn interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			markerClass(): native.Array<java.lang.Class<any>>;
			equals(object0: any): boolean;
			hashCode(): number;
			toString(): string;
			annotationType(): java.lang.Class<any>;
		});
		public constructor();
		public markerClass(): native.Array<java.lang.Class<any>>;
		public equals(obj: any): boolean;
		public hashCode(): number;
		public toString(): string;
		public annotationType(): java.lang.Class<any>;
	}
}

declare module kotlin {
	export class OptionalExpectation extends java.lang.Object implements java.lang.annotation.Annotation {
		public static class: java.lang.Class<kotlin.OptionalExpectation>;
		/**
		 * Constructs a new instance of the kotlin.OptionalExpectation interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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

declare module kotlin {
	export class OverloadResolutionByLambdaReturnType extends java.lang.Object implements java.lang.annotation.Annotation {
		public static class: java.lang.Class<kotlin.OverloadResolutionByLambdaReturnType>;
		/**
		 * Constructs a new instance of the kotlin.OverloadResolutionByLambdaReturnType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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

declare module kotlin {
	export class Pair<A, B>  extends java.io.Serializable {
		public static class: java.lang.Class<kotlin.Pair<any,any>>;
		public equals(obj: any): boolean;
		public component1(): any;
		public component2(): any;
		public hashCode(): number;
		public getFirst(): any;
		public getSecond(): any;
		public toString(): string;
		public constructor(first: any, second: any);
		public copy(first: any, second: any): kotlin.Pair<any,any>;
	}
}

declare module kotlin {
	export class ParameterName extends java.lang.Object implements java.lang.annotation.Annotation {
		public static class: java.lang.Class<kotlin.ParameterName>;
		/**
		 * Constructs a new instance of the kotlin.ParameterName interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			name(): string;
			equals(object0: any): boolean;
			hashCode(): number;
			toString(): string;
			annotationType(): java.lang.Class<any>;
		});
		public constructor();
		public equals(obj: any): boolean;
		public hashCode(): number;
		public name(): string;
		public toString(): string;
		public annotationType(): java.lang.Class<any>;
	}
}

declare module kotlin {
	export class PreconditionsKt extends kotlin.PreconditionsKt__PreconditionsKt {
		public static class: java.lang.Class<kotlin.PreconditionsKt>;
	}
}

declare module kotlin {
	export class PreconditionsKt__AssertionsJVMKt extends java.lang.Object {
		public static class: java.lang.Class<kotlin.PreconditionsKt__AssertionsJVMKt>;
		public constructor();
	}
}

declare module kotlin {
	export class PreconditionsKt__PreconditionsKt extends kotlin.PreconditionsKt__AssertionsJVMKt {
		public static class: java.lang.Class<kotlin.PreconditionsKt__PreconditionsKt>;
		public constructor();
	}
}

declare module kotlin {
	export class PropertyReferenceDelegatesKt extends java.lang.Object {
		public static class: java.lang.Class<kotlin.PropertyReferenceDelegatesKt>;
	}
}

declare module kotlin {
	export class PublishedApi extends java.lang.Object implements java.lang.annotation.Annotation {
		public static class: java.lang.Class<kotlin.PublishedApi>;
		/**
		 * Constructs a new instance of the kotlin.PublishedApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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

declare module kotlin {
	export class ReplaceWith extends java.lang.Object implements java.lang.annotation.Annotation {
		public static class: java.lang.Class<kotlin.ReplaceWith>;
		/**
		 * Constructs a new instance of the kotlin.ReplaceWith interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			expression(): string;
			imports(): native.Array<string>;
			equals(object0: any): boolean;
			hashCode(): number;
			toString(): string;
			annotationType(): java.lang.Class<any>;
		});
		public constructor();
		public equals(obj: any): boolean;
		public imports(): native.Array<string>;
		public hashCode(): number;
		public toString(): string;
		public expression(): string;
		public annotationType(): java.lang.Class<any>;
	}
}

declare module kotlin {
	export class RequiresOptIn extends java.lang.Object implements java.lang.annotation.Annotation {
		public static class: java.lang.Class<kotlin.RequiresOptIn>;
		/**
		 * Constructs a new instance of the kotlin.RequiresOptIn interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			message(): string;
			level(): kotlin.RequiresOptIn.Level;
			equals(object0: any): boolean;
			hashCode(): number;
			toString(): string;
			annotationType(): java.lang.Class<any>;
		});
		public constructor();
		public equals(obj: any): boolean;
		public hashCode(): number;
		public message(): string;
		public toString(): string;
		public annotationType(): java.lang.Class<any>;
		public level(): kotlin.RequiresOptIn.Level;
	}
	export module RequiresOptIn {
		export class Level {
			public static class: java.lang.Class<kotlin.RequiresOptIn.Level>;
			public static WARNING: kotlin.RequiresOptIn.Level;
			public static ERROR: kotlin.RequiresOptIn.Level;
			public static valueOf(string0: string): kotlin.RequiresOptIn.Level;
			public static values(): native.Array<kotlin.RequiresOptIn.Level>;
			public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
		}
	}
}

declare module kotlin {
	export class Result<T>  extends java.io.Serializable {
		public static class: java.lang.Class<kotlin.Result<any>>;
		public static Companion: kotlin.Result.Companion;
		public static exceptionOrNull(this0: any): java.lang.Throwable;
		public equals(obj: any): boolean;
		public static isSuccess(this0: any): boolean;
		public static equals(p1: any, p2: any): boolean;
		public static equals(object0: any, object1: any): boolean;
		public hashCode(): number;
		public static toString(this0: any): string;
		public static hashCode(object0: any): number;
		public toString(): string;
		public static constructor(value: any): any;
		public static isFailure(this0: any): boolean;
	}
	export module Result {
		export class Companion extends java.lang.Object {
			public static class: java.lang.Class<kotlin.Result.Companion>;
		}
		export class Failure extends java.lang.Object implements java.io.Serializable {
			public static class: java.lang.Class<kotlin.Result.Failure>;
			public exception: java.lang.Throwable;
			public equals(other: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public constructor(exception: java.lang.Throwable);
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export class ResultKt extends java.lang.Object {
		public static class: java.lang.Class<kotlin.ResultKt>;
		public static createFailure(exception: java.lang.Throwable): any;
		public static throwOnFailure(thisthrowOnFailure: any): void;
	}
}

declare module kotlin {
	export class SafePublicationLazyImpl<T>  extends java.lang.Object {
		public static class: java.lang.Class<kotlin.SafePublicationLazyImpl<any>>;
		public static Companion: kotlin.SafePublicationLazyImpl.Companion;
		public isInitialized(): boolean;
		public toString(): string;
		public getValue(): T;
		public constructor(initializer: kotlin.jvm.functions.Function0<any>);
	}
	export module SafePublicationLazyImpl {
		export class Companion extends java.lang.Object {
			public static class: java.lang.Class<kotlin.SafePublicationLazyImpl.Companion>;
		}
	}
}

declare module kotlin {
	export class SinceKotlin extends java.lang.Object implements java.lang.annotation.Annotation {
		public static class: java.lang.Class<kotlin.SinceKotlin>;
		/**
		 * Constructs a new instance of the kotlin.SinceKotlin interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			version(): string;
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
		public version(): string;
	}
}

declare module kotlin {
	export class StandardKt extends kotlin.StandardKt__SynchronizedKt {
		public static class: java.lang.Class<kotlin.StandardKt>;
	}
}

declare module kotlin {
	export class StandardKt__StandardKt extends java.lang.Object {
		public static class: java.lang.Class<kotlin.StandardKt__StandardKt>;
		public constructor();
	}
}

declare module kotlin {
	export class StandardKt__SynchronizedKt extends kotlin.StandardKt__StandardKt {
		public static class: java.lang.Class<kotlin.StandardKt__SynchronizedKt>;
		public constructor();
	}
}

declare module kotlin {
	export class Suppress extends java.lang.Object implements java.lang.annotation.Annotation {
		public static class: java.lang.Class<kotlin.Suppress>;
		/**
		 * Constructs a new instance of the kotlin.Suppress interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			names(): native.Array<string>;
			equals(object0: any): boolean;
			hashCode(): number;
			toString(): string;
			annotationType(): java.lang.Class<any>;
		});
		public constructor();
		public equals(obj: any): boolean;
		public hashCode(): number;
		public names(): native.Array<string>;
		public toString(): string;
		public annotationType(): java.lang.Class<any>;
	}
}

declare module kotlin {
	export class SuspendKt extends java.lang.Object {
		public static class: java.lang.Class<kotlin.SuspendKt>;
	}
}

declare module kotlin {
	export class SynchronizedLazyImpl<T>  extends java.lang.Object {
		public static class: java.lang.Class<kotlin.SynchronizedLazyImpl<any>>;
		public isInitialized(): boolean;
		public constructor(initializer: kotlin.jvm.functions.Function0<any>, lock: any);
		public toString(): string;
		public getValue(): T;
	}
}

declare module kotlin {
	export class ThrowsKt extends java.lang.Object {
		public static class: java.lang.Class<kotlin.ThrowsKt>;
	}
}

declare module kotlin {
	export class Triple<A, B, C>  extends java.io.Serializable {
		public static class: java.lang.Class<kotlin.Triple<any,any,any>>;
		public equals(obj: any): boolean;
		public getThird(): any;
		public constructor(first: any, second: any, third: any);
		public component1(): any;
		public copy(first: any, second: any, third: any): kotlin.Triple<any,any,any>;
		public component2(): any;
		public hashCode(): number;
		public getFirst(): any;
		public component3(): any;
		public getSecond(): any;
		public toString(): string;
	}
}

declare module kotlin {
	export class TuplesKt extends java.lang.Object {
		public static class: java.lang.Class<kotlin.TuplesKt>;
		public static toList(thistoList: kotlin.Pair<any,any>): java.util.List<any>;
		public static to(thisto: any, that: any): kotlin.Pair<any,any>;
		public static toList(thistoList: kotlin.Triple<any,any,any>): java.util.List<any>;
	}
}

declare module kotlin {
	export class TypeAliasesKt extends java.lang.Object {
		public static class: java.lang.Class<kotlin.TypeAliasesKt>;
	}
}

declare module kotlin {
	export class TypeCastException extends java.lang.ClassCastException {
		public static class: java.lang.Class<kotlin.TypeCastException>;
		public constructor();
		public constructor(message: string, cause: java.lang.Throwable);
		public constructor(s: string);
		public constructor(message: string);
		public constructor(cause: java.lang.Throwable);
		public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
	}
}

declare module kotlin {
	export class UByte extends java.lang.Comparable<kotlin.UByte> {
		public static class: java.lang.Class<kotlin.UByte>;
		public static MIN_VALUE: number;
		public static MAX_VALUE: number;
		public static SIZE_BYTES: number;
		public static SIZE_BITS: number;
		public static Companion: kotlin.UByte.Companion;
		public equals(obj: any): boolean;
		public static equals(p1: number, p2: number): boolean;
		public static constructor(data: number): number;
		public static hashCode(byte0: number): number;
		public hashCode(): number;
		public static toString(this0: number): string;
		public toString(): string;
		public static equals(byte0: number, object1: any): boolean;
	}
	export module UByte {
		export class Companion extends java.lang.Object {
			public static class: java.lang.Class<kotlin.UByte.Companion>;
		}
	}
}

declare module kotlin {
	export class UByteArray extends java.lang.Object {
		public static class: java.lang.Class<kotlin.UByteArray>;
		public toArray(): native.Array<any>;
		public add(byte0: number): boolean;
		public static toString(bytes0: native.Array<number>): string;
		public retainAll(collection0: java.util.Collection<any>): boolean;
		public iterator(): java.util.Iterator<any>;
		public contains(object0: any): boolean;
		public static contains(this0: native.Array<number>, element: number): boolean;
		public remove(object0: any): boolean;
		public containsAll(collection0: java.util.Collection<any>): boolean;
		public stream(): java.util.stream.Stream<any>;
		public size(): number;
		public hashCode(): number;
		public toArray(objects0: native.Array<any>): native.Array<any>;
		public static constructor(storage: native.Array<number>): native.Array<number>;
		public isEmpty(): boolean;
		public static get(this0: native.Array<number>, index: number): number;
		public getSize(): number;
		public static getSize(this0: native.Array<number>): number;
		public static equals(p1: native.Array<number>, p2: native.Array<number>): boolean;
		public static constructor(size: number): native.Array<number>;
		public iterator(): kotlin.collections.UByteIterator;
		public static iterator(this0: native.Array<number>): kotlin.collections.UByteIterator;
		public removeAll(collection0: java.util.Collection<any>): boolean;
		public contains(byte0: number): boolean;
		public toString(): string;
		public static equals(bytes0: native.Array<number>, object1: any): boolean;
		public addAll(collection0: java.util.Collection<any>): boolean;
		public static hashCode(bytes0: native.Array<number>): number;
		public equals(obj: any): boolean;
		public add(object0: any): boolean;
		public spliterator(): java.util.Spliterator<any>;
		public clear(): void;
		public static set(this0: native.Array<number>, index: number, value: number): void;
		public static isEmpty(this0: native.Array<number>): boolean;
		public parallelStream(): java.util.stream.Stream<any>;
		public forEach(action: any /* any*/): void;
		public removeIf(filter: any /* any*/): boolean;
		public static containsAll(this0: native.Array<number>, elements: java.util.Collection<kotlin.UByte>): boolean;
	}
	export module UByteArray {
		export class Iterator extends kotlin.collections.UByteIterator {
			public static class: java.lang.Class<kotlin.UByteArray.Iterator>;
			public nextUByte(): number;
			public constructor();
			public hasNext(): boolean;
			public constructor(array: native.Array<number>);
		}
	}
}

declare module kotlin {
	export class UByteArrayKt extends java.lang.Object {
		public static class: java.lang.Class<kotlin.UByteArrayKt>;
	}
}

declare module kotlin {
	export class UByteKt extends java.lang.Object {
		public static class: java.lang.Class<kotlin.UByteKt>;
	}
}

declare module kotlin {
	export class UInt extends java.lang.Comparable<kotlin.UInt> {
		public static class: java.lang.Class<kotlin.UInt>;
		public static MIN_VALUE: number;
		public static MAX_VALUE: number;
		public static SIZE_BYTES: number;
		public static SIZE_BITS: number;
		public static Companion: kotlin.UInt.Companion;
		public equals(obj: any): boolean;
		public static equals(p1: number, p2: number): boolean;
		public static constructor(data: number): number;
		public hashCode(): number;
		public static toString(this0: number): string;
		public static equals(int0: number, object1: any): boolean;
		public toString(): string;
		public static hashCode(int0: number): number;
	}
	export module UInt {
		export class Companion extends java.lang.Object {
			public static class: java.lang.Class<kotlin.UInt.Companion>;
		}
	}
}

declare module kotlin {
	export class UIntArray extends java.lang.Object {
		public static class: java.lang.Class<kotlin.UIntArray>;
		public toArray(): native.Array<any>;
		public retainAll(collection0: java.util.Collection<any>): boolean;
		public iterator(): java.util.Iterator<any>;
		public contains(object0: any): boolean;
		public static contains(this0: native.Array<number>, element: number): boolean;
		public remove(object0: any): boolean;
		public static containsAll(this0: native.Array<number>, elements: java.util.Collection<kotlin.UInt>): boolean;
		public containsAll(collection0: java.util.Collection<any>): boolean;
		public stream(): java.util.stream.Stream<any>;
		public size(): number;
		public hashCode(): number;
		public toArray(objects0: native.Array<any>): native.Array<any>;
		public static constructor(storage: native.Array<number>): native.Array<number>;
		public static hashCode(ints0: native.Array<number>): number;
		public isEmpty(): boolean;
		public static get(this0: native.Array<number>, index: number): number;
		public static iterator(this0: native.Array<number>): kotlin.collections.UIntIterator;
		public getSize(): number;
		public static getSize(this0: native.Array<number>): number;
		public static equals(p1: native.Array<number>, p2: native.Array<number>): boolean;
		public static constructor(size: number): native.Array<number>;
		public static toString(ints0: native.Array<number>): string;
		public removeAll(collection0: java.util.Collection<any>): boolean;
		public contains(int0: number): boolean;
		public toString(): string;
		public addAll(collection0: java.util.Collection<any>): boolean;
		public static equals(ints0: native.Array<number>, object1: any): boolean;
		public equals(obj: any): boolean;
		public add(object0: any): boolean;
		public spliterator(): java.util.Spliterator<any>;
		public iterator(): kotlin.collections.UIntIterator;
		public add(int0: number): boolean;
		public clear(): void;
		public static set(this0: native.Array<number>, index: number, value: number): void;
		public static isEmpty(this0: native.Array<number>): boolean;
		public parallelStream(): java.util.stream.Stream<any>;
		public forEach(action: any /* any*/): void;
		public removeIf(filter: any /* any*/): boolean;
	}
	export module UIntArray {
		export class Iterator extends kotlin.collections.UIntIterator {
			public static class: java.lang.Class<kotlin.UIntArray.Iterator>;
			public nextUInt(): number;
			public constructor();
			public hasNext(): boolean;
			public constructor(array: native.Array<number>);
		}
	}
}

declare module kotlin {
	export class UIntArrayKt extends java.lang.Object {
		public static class: java.lang.Class<kotlin.UIntArrayKt>;
	}
}

declare module kotlin {
	export class UIntKt extends java.lang.Object {
		public static class: java.lang.Class<kotlin.UIntKt>;
	}
}

declare module kotlin {
	export class ULong extends java.lang.Comparable<kotlin.ULong> {
		public static class: java.lang.Class<kotlin.ULong>;
		public static MIN_VALUE: number;
		public static MAX_VALUE: number;
		public static SIZE_BYTES: number;
		public static SIZE_BITS: number;
		public static Companion: kotlin.ULong.Companion;
		public equals(obj: any): boolean;
		public static equals(p1: number, p2: number): boolean;
		public static constructor(data: number): number;
		public static hashCode(long0: number): number;
		public hashCode(): number;
		public static toString(this0: number): string;
		public static equals(long0: number, object1: any): boolean;
		public toString(): string;
	}
	export module ULong {
		export class Companion extends java.lang.Object {
			public static class: java.lang.Class<kotlin.ULong.Companion>;
		}
	}
}

declare module kotlin {
	export class ULongArray extends java.lang.Object {
		public static class: java.lang.Class<kotlin.ULongArray>;
		public toArray(): native.Array<any>;
		public static hashCode(longs0: native.Array<number>): number;
		public static equals(longs0: native.Array<number>, object1: any): boolean;
		public retainAll(collection0: java.util.Collection<any>): boolean;
		public add(long0: number): boolean;
		public iterator(): java.util.Iterator<any>;
		public contains(object0: any): boolean;
		public static contains(this0: native.Array<number>, element: number): boolean;
		public remove(object0: any): boolean;
		public containsAll(collection0: java.util.Collection<any>): boolean;
		public stream(): java.util.stream.Stream<any>;
		public size(): number;
		public static toString(longs0: native.Array<number>): string;
		public hashCode(): number;
		public toArray(objects0: native.Array<any>): native.Array<any>;
		public static constructor(storage: native.Array<number>): native.Array<number>;
		public isEmpty(): boolean;
		public static get(this0: native.Array<number>, index: number): number;
		public iterator(): kotlin.collections.ULongIterator;
		public getSize(): number;
		public static getSize(this0: native.Array<number>): number;
		public static equals(p1: native.Array<number>, p2: native.Array<number>): boolean;
		public static constructor(size: number): native.Array<number>;
		public static containsAll(this0: native.Array<number>, elements: java.util.Collection<kotlin.ULong>): boolean;
		public removeAll(collection0: java.util.Collection<any>): boolean;
		public toString(): string;
		public addAll(collection0: java.util.Collection<any>): boolean;
		public equals(obj: any): boolean;
		public contains(long0: number): boolean;
		public add(object0: any): boolean;
		public spliterator(): java.util.Spliterator<any>;
		public clear(): void;
		public static set(this0: native.Array<number>, index: number, value: number): void;
		public static isEmpty(this0: native.Array<number>): boolean;
		public parallelStream(): java.util.stream.Stream<any>;
		public forEach(action: any /* any*/): void;
		public removeIf(filter: any /* any*/): boolean;
		public static iterator(this0: native.Array<number>): kotlin.collections.ULongIterator;
	}
	export module ULongArray {
		export class Iterator extends kotlin.collections.ULongIterator {
			public static class: java.lang.Class<kotlin.ULongArray.Iterator>;
			public nextULong(): number;
			public constructor();
			public hasNext(): boolean;
			public constructor(array: native.Array<number>);
		}
	}
}

declare module kotlin {
	export class ULongArrayKt extends java.lang.Object {
		public static class: java.lang.Class<kotlin.ULongArrayKt>;
	}
}

declare module kotlin {
	export class ULongKt extends java.lang.Object {
		public static class: java.lang.Class<kotlin.ULongKt>;
	}
}

declare module kotlin {
	export class UNINITIALIZED_VALUE extends java.lang.Object {
		public static class: java.lang.Class<kotlin.UNINITIALIZED_VALUE>;
		public static INSTANCE: kotlin.UNINITIALIZED_VALUE;
	}
}

declare module kotlin {
	export class UNumbersKt extends java.lang.Object {
		public static class: java.lang.Class<kotlin.UNumbersKt>;
	}
}

declare module kotlin {
	export class UShort extends java.lang.Comparable<kotlin.UShort> {
		public static class: java.lang.Class<kotlin.UShort>;
		public static MIN_VALUE: number;
		public static MAX_VALUE: number;
		public static SIZE_BYTES: number;
		public static SIZE_BITS: number;
		public static Companion: kotlin.UShort.Companion;
		public equals(obj: any): boolean;
		public static equals(p1: number, p2: number): boolean;
		public static constructor(data: number): number;
		public static equals(short0: number, object1: any): boolean;
		public hashCode(): number;
		public static toString(this0: number): string;
		public toString(): string;
		public static hashCode(short0: number): number;
	}
	export module UShort {
		export class Companion extends java.lang.Object {
			public static class: java.lang.Class<kotlin.UShort.Companion>;
		}
	}
}

declare module kotlin {
	export class UShortArray extends java.lang.Object {
		public static class: java.lang.Class<kotlin.UShortArray>;
		public toArray(): native.Array<any>;
		public static toString(shorts0: native.Array<number>): string;
		public retainAll(collection0: java.util.Collection<any>): boolean;
		public iterator(): java.util.Iterator<any>;
		public contains(object0: any): boolean;
		public static contains(this0: native.Array<number>, element: number): boolean;
		public remove(object0: any): boolean;
		public static containsAll(this0: native.Array<number>, elements: java.util.Collection<kotlin.UShort>): boolean;
		public containsAll(collection0: java.util.Collection<any>): boolean;
		public stream(): java.util.stream.Stream<any>;
		public size(): number;
		public hashCode(): number;
		public toArray(objects0: native.Array<any>): native.Array<any>;
		public static constructor(storage: native.Array<number>): native.Array<number>;
		public isEmpty(): boolean;
		public static get(this0: native.Array<number>, index: number): number;
		public iterator(): kotlin.collections.UShortIterator;
		public getSize(): number;
		public static getSize(this0: native.Array<number>): number;
		public static equals(p1: native.Array<number>, p2: native.Array<number>): boolean;
		public static hashCode(shorts0: native.Array<number>): number;
		public static constructor(size: number): native.Array<number>;
		public removeAll(collection0: java.util.Collection<any>): boolean;
		public toString(): string;
		public static equals(shorts0: native.Array<number>, object1: any): boolean;
		public addAll(collection0: java.util.Collection<any>): boolean;
		public add(short0: number): boolean;
		public equals(obj: any): boolean;
		public add(object0: any): boolean;
		public spliterator(): java.util.Spliterator<any>;
		public clear(): void;
		public static set(this0: native.Array<number>, index: number, value: number): void;
		public static isEmpty(this0: native.Array<number>): boolean;
		public parallelStream(): java.util.stream.Stream<any>;
		public forEach(action: any /* any*/): void;
		public static iterator(this0: native.Array<number>): kotlin.collections.UShortIterator;
		public removeIf(filter: any /* any*/): boolean;
		public contains(short0: number): boolean;
	}
	export module UShortArray {
		export class Iterator extends kotlin.collections.UShortIterator {
			public static class: java.lang.Class<kotlin.UShortArray.Iterator>;
			public nextUShort(): number;
			public constructor();
			public hasNext(): boolean;
			public constructor(array: native.Array<number>);
		}
	}
}

declare module kotlin {
	export class UShortArrayKt extends java.lang.Object {
		public static class: java.lang.Class<kotlin.UShortArrayKt>;
	}
}

declare module kotlin {
	export class UShortKt extends java.lang.Object {
		public static class: java.lang.Class<kotlin.UShortKt>;
	}
}

declare module kotlin {
	export class UninitializedPropertyAccessException extends java.lang.RuntimeException {
		public static class: java.lang.Class<kotlin.UninitializedPropertyAccessException>;
		public constructor();
		public constructor(message: string, cause: java.lang.Throwable);
		public constructor(message: string);
		public constructor(cause: java.lang.Throwable);
		public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
	}
}

declare module kotlin {
	export class Unit extends java.lang.Object {
		public static class: java.lang.Class<kotlin.Unit>;
		public static INSTANCE: kotlin.Unit;
		public toString(): string;
	}
}

declare module kotlin {
	export class UnsafeLazyImpl<T>  extends java.lang.Object {
		public static class: java.lang.Class<kotlin.UnsafeLazyImpl<any>>;
		public isInitialized(): boolean;
		public toString(): string;
		public getValue(): T;
		public constructor(initializer: kotlin.jvm.functions.Function0<any>);
	}
}

declare module kotlin {
	export class UnsafeVariance extends java.lang.Object implements java.lang.annotation.Annotation {
		public static class: java.lang.Class<kotlin.UnsafeVariance>;
		/**
		 * Constructs a new instance of the kotlin.UnsafeVariance interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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

declare module kotlin {
	export class UnsignedKt extends java.lang.Object {
		public static class: java.lang.Class<kotlin.UnsignedKt>;
		public static doubleToUInt(v: number): number;
		public static ulongToDouble(v: number): number;
		public static doubleToULong(v: number): number;
		public static ulongCompare(v1: number, v2: number): number;
		public static uintCompare(v1: number, v2: number): number;
		public static ulongRemainder(v1: number, v2: number): number;
		public static ulongToString(v: number, base: number): string;
		public static uintDivide(v1: number, v2: number): number;
		public static uintToDouble(v: number): number;
		public static uintRemainder(v1: number, v2: number): number;
		public static ulongDivide(v1: number, v2: number): number;
		public static ulongToString(v: number): string;
	}
}

declare module kotlin {
	export class UseExperimental extends java.lang.Object implements java.lang.annotation.Annotation {
		public static class: java.lang.Class<kotlin.UseExperimental>;
		/**
		 * Constructs a new instance of the kotlin.UseExperimental interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			markerClass(): native.Array<java.lang.Class<any>>;
			equals(object0: any): boolean;
			hashCode(): number;
			toString(): string;
			annotationType(): java.lang.Class<any>;
		});
		public constructor();
		public markerClass(): native.Array<java.lang.Class<any>>;
		public equals(obj: any): boolean;
		public hashCode(): number;
		public toString(): string;
		public annotationType(): java.lang.Class<any>;
	}
}

declare module kotlin {
	export class WasExperimental extends java.lang.Object implements java.lang.annotation.Annotation {
		public static class: java.lang.Class<kotlin.WasExperimental>;
		/**
		 * Constructs a new instance of the kotlin.WasExperimental interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			markerClass(): native.Array<java.lang.Class<any>>;
			equals(object0: any): boolean;
			hashCode(): number;
			toString(): string;
			annotationType(): java.lang.Class<any>;
		});
		public constructor();
		public markerClass(): native.Array<java.lang.Class<any>>;
		public equals(obj: any): boolean;
		public hashCode(): number;
		public toString(): string;
		public annotationType(): java.lang.Class<any>;
	}
}

declare module kotlin {
	export class _Assertions extends java.lang.Object {
		public static class: java.lang.Class<kotlin._Assertions>;
		public static ENABLED: boolean;
		public static INSTANCE: kotlin._Assertions;
	}
}

declare module kotlin {
	export module annotation {
		export class AnnotationRetention {
			public static class: java.lang.Class<kotlin.annotation.AnnotationRetention>;
			public static SOURCE: kotlin.annotation.AnnotationRetention;
			public static BINARY: kotlin.annotation.AnnotationRetention;
			public static RUNTIME: kotlin.annotation.AnnotationRetention;
			public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
			public static valueOf(string0: string): kotlin.annotation.AnnotationRetention;
			public static values(): native.Array<kotlin.annotation.AnnotationRetention>;
		}
	}
}

declare module kotlin {
	export module annotation {
		export class AnnotationTarget {
			public static class: java.lang.Class<kotlin.annotation.AnnotationTarget>;
			public static CLASS: kotlin.annotation.AnnotationTarget;
			public static ANNOTATION_CLASS: kotlin.annotation.AnnotationTarget;
			public static TYPE_PARAMETER: kotlin.annotation.AnnotationTarget;
			public static PROPERTY: kotlin.annotation.AnnotationTarget;
			public static FIELD: kotlin.annotation.AnnotationTarget;
			public static LOCAL_VARIABLE: kotlin.annotation.AnnotationTarget;
			public static VALUE_PARAMETER: kotlin.annotation.AnnotationTarget;
			public static CONSTRUCTOR: kotlin.annotation.AnnotationTarget;
			public static FUNCTION: kotlin.annotation.AnnotationTarget;
			public static PROPERTY_GETTER: kotlin.annotation.AnnotationTarget;
			public static PROPERTY_SETTER: kotlin.annotation.AnnotationTarget;
			public static TYPE: kotlin.annotation.AnnotationTarget;
			public static EXPRESSION: kotlin.annotation.AnnotationTarget;
			public static FILE: kotlin.annotation.AnnotationTarget;
			public static TYPEALIAS: kotlin.annotation.AnnotationTarget;
			public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
			public static values(): native.Array<kotlin.annotation.AnnotationTarget>;
			public static valueOf(string0: string): kotlin.annotation.AnnotationTarget;
		}
	}
}

declare module kotlin {
	export module annotation {
		export class MustBeDocumented extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kotlin.annotation.MustBeDocumented>;
			/**
			 * Constructs a new instance of the kotlin.annotation.MustBeDocumented interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				equals(object0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public toString(): string;
			public equals(obj: any): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module annotation {
		export class Repeatable extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kotlin.annotation.Repeatable>;
			/**
			 * Constructs a new instance of the kotlin.annotation.Repeatable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				equals(object0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public toString(): string;
			public equals(obj: any): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module annotation {
		export class Retention extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kotlin.annotation.Retention>;
			/**
			 * Constructs a new instance of the kotlin.annotation.Retention interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				value(): kotlin.annotation.AnnotationRetention;
				equals(object0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public value(): kotlin.annotation.AnnotationRetention;
			public toString(): string;
			public equals(obj: any): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module annotation {
		export class Target extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kotlin.annotation.Target>;
			/**
			 * Constructs a new instance of the kotlin.annotation.Target interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				allowedTargets(): native.Array<kotlin.annotation.AnnotationTarget>;
				equals(object0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public allowedTargets(): native.Array<kotlin.annotation.AnnotationTarget>;
			public toString(): string;
			public equals(obj: any): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module collections {
		export abstract class AbstractCollection<E>  extends java.lang.Object {
			public static class: java.lang.Class<kotlin.collections.AbstractCollection<any>>;
			public toArray(): native.Array<any>;
			public iterator(): java.util.Iterator<E>;
			public getSize(): number;
			public remove(object0: any): boolean;
			public spliterator(): java.util.Spliterator<E>;
			public addAll(collection0: java.util.Collection<any>): boolean;
			public contains(element: any): boolean;
			public removeIf(filter: any /* any*/): boolean;
			public stream(): java.util.stream.Stream<E>;
			public add(object0: E): boolean;
			public iterator(): java.util.Iterator<any>;
			public clear(): void;
			public size(): number;
			public isEmpty(): boolean;
			public parallelStream(): java.util.stream.Stream<E>;
			public containsAll(elements: java.util.Collection<any>): boolean;
			public constructor();
			public forEach(action: any /* any*/): void;
			public toArray(array: native.Array<any>): native.Array<any>;
			public removeAll(collection0: java.util.Collection<any>): boolean;
			public retainAll(collection0: java.util.Collection<any>): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public spliterator(): java.util.Spliterator<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module collections {
		export abstract class AbstractIterator<T>  extends java.lang.Object {
			public static class: java.lang.Class<kotlin.collections.AbstractIterator<any>>;
			public next(): T;
			public done(): void;
			public constructor();
			public hasNext(): boolean;
			public remove(): void;
			public computeNext(): void;
			public setNext(value: T): void;
		}
		export module AbstractIterator {
			export class WhenMappings extends java.lang.Object {
				public static class: java.lang.Class<kotlin.collections.AbstractIterator.WhenMappings>;
			}
		}
	}
}

declare module kotlin {
	export module collections {
		export abstract class AbstractList<E>  extends kotlin.collections.AbstractCollection<any> {
			public static class: java.lang.Class<kotlin.collections.AbstractList<any>>;
			public static Companion: kotlin.collections.AbstractList.Companion;
			public get(int0: number): any;
			public remove(int0: number): any;
			public toArray(): native.Array<any>;
			public stream(): java.util.stream.Stream<any>;
			public add(object0: any): boolean;
			public subList(fromIndex: number, toIndex: number): java.util.List<any>;
			public add(int0: number, object1: any): void;
			public replaceAll(operator: any /* any*/): void;
			public getSize(): number;
			public remove(object0: any): boolean;
			public set(int0: number, object1: any): any;
			public equals(other: any): boolean;
			public addAll(int0: number, collection1: java.util.Collection<any>): boolean;
			public addAll(collection0: java.util.Collection<any>): boolean;
			public contains(element: any): boolean;
			public removeIf(filter: any /* any*/): boolean;
			public sort(c: java.util.Comparator<any>): void;
			public lastIndexOf(element: any): number;
			public iterator(): java.util.Iterator<any>;
			public clear(): void;
			public size(): number;
			public isEmpty(): boolean;
			public listIterator(index: number): java.util.ListIterator<any>;
			public indexOf(element: any): number;
			public containsAll(elements: java.util.Collection<any>): boolean;
			public constructor();
			public forEach(action: any /* any*/): void;
			public toArray(array: native.Array<any>): native.Array<any>;
			public removeAll(collection0: java.util.Collection<any>): boolean;
			public retainAll(collection0: java.util.Collection<any>): boolean;
			public equals(obj: any): boolean;
			public listIterator(): java.util.ListIterator<any>;
			public spliterator(): java.util.Spliterator<any>;
			public parallelStream(): java.util.stream.Stream<any>;
			public hashCode(): number;
		}
		export module AbstractList {
			export class Companion extends java.lang.Object {
				public static class: java.lang.Class<kotlin.collections.AbstractList.Companion>;
				public checkElementIndex(index: number, size: number): void;
				public orderedHashCode(c: java.util.Collection<any>): number;
				public checkRangeIndexes(fromIndex: number, toIndex: number, size: number): void;
				public orderedEquals(c: java.util.Collection<any>, other: java.util.Collection<any>): boolean;
				public checkPositionIndex(index: number, size: number): void;
				public checkBoundsIndexes(startIndex: number, endIndex: number, size: number): void;
			}
			export class IteratorImpl extends java.lang.Object {
				public static class: java.lang.Class<kotlin.collections.AbstractList.IteratorImpl>;
				public remove(): void;
				public next(): any;
				public constructor(this0: kotlin.collections.AbstractList<any>);
				public hasNext(): boolean;
				public getIndex(): number;
				public setIndex(param0: number): void;
			}
			export class ListIteratorImpl extends kotlin.collections.AbstractList.IteratorImpl {
				public static class: java.lang.Class<kotlin.collections.AbstractList.ListIteratorImpl>;
				public set(object0: any): void;
				public previous(): any;
				public previousIndex(): number;
				public constructor(this0: number);
				public remove(): void;
				public nextIndex(): number;
				public constructor(this0: kotlin.collections.AbstractList<any>);
				public next(): any;
				public hasNext(): boolean;
				public add(object0: any): void;
				public hasPrevious(): boolean;
			}
			export class SubList<E>  extends kotlin.collections.AbstractList<any> implements java.util.RandomAccess  {
				public static class: java.lang.Class<kotlin.collections.AbstractList.SubList<any>>;
				public subList(fromIndex: number, toIndex: number): java.util.List<any>;
				public parallelStream(): java.util.stream.Stream<any>;
				public containsAll(elements: java.util.Collection<any>): boolean;
				public listIterator(): java.util.ListIterator<any>;
				public addAll(collection0: java.util.Collection<any>): boolean;
				public removeAll(collection0: java.util.Collection<any>): boolean;
				public constructor(list: kotlin.collections.AbstractList<any>, fromIndex: number, toIndex: number);
				public get(int0: number): any;
				public constructor();
				public toArray(): native.Array<any>;
				public equals(other: any): boolean;
				public getSize(): number;
				public hashCode(): number;
				public set(int0: number, object1: any): any;
				public clear(): void;
				public isEmpty(): boolean;
				public remove(object0: any): boolean;
				public remove(int0: number): any;
				public replaceAll(operator: any /* any*/): void;
				public sort(c: java.util.Comparator<any>): void;
				public retainAll(collection0: java.util.Collection<any>): boolean;
				public spliterator(): java.util.Spliterator<any>;
				public get(index: number): any;
				public stream(): java.util.stream.Stream<any>;
				public add(object0: any): boolean;
				public iterator(): java.util.Iterator<any>;
				public add(int0: number, object1: any): void;
				public lastIndexOf(element: any): number;
				public toArray(array: native.Array<any>): native.Array<any>;
				public size(): number;
				public contains(element: any): boolean;
				public removeIf(filter: any /* any*/): boolean;
				public addAll(int0: number, collection1: java.util.Collection<any>): boolean;
				public indexOf(element: any): number;
				public listIterator(index: number): java.util.ListIterator<any>;
			}
		}
	}
}

declare module kotlin {
	export module collections {
		export abstract class AbstractMap<K, V>  extends java.lang.Object {
			public static class: java.lang.Class<kotlin.collections.AbstractMap<any,any>>;
			public static Companion: kotlin.collections.AbstractMap.Companion;
			public computeIfAbsent(key: K, mappingFunction: any /* any<any,any>*/): V;
			public replace(key: K, value: V): V;
			public merge(key: K, value: V, remappingFunction: any /* any<any,any,any>*/): V;
			public containsKey(key: any): boolean;
			public getSize(): number;
			public containsValue(value: any): boolean;
			public containsEntry(entry: java.util.Map.Entry<any,any>): boolean;
			public forEach(action: any /* any<any,any>*/): void;
			public equals(other: any): boolean;
			public keySet(): java.util.Set<K>;
			public values(): java.util.Collection<V>;
			public get(key: any): V;
			public compute(key: K, remappingFunction: any /* any<any,any,any>*/): V;
			public clear(): void;
			public replace(key: K, oldValue: V, newValue: V): boolean;
			public getOrDefault(key: any, defaultValue: V): V;
			public isEmpty(): boolean;
			public size(): number;
			public putIfAbsent(key: K, value: V): V;
			public getKeys(): java.util.Set<K>;
			public computeIfPresent(key: K, remappingFunction: any /* any<any,any,any>*/): V;
			public replaceAll(function0: any /* any<any,any,any>*/): void;
			public constructor();
			public getValues(): java.util.Collection<V>;
			public toString(): string;
			public equals(obj: any): boolean;
			public getEntries(): java.util.Set<any>;
			public putAll(map0: java.util.Map<any,any>): void;
			public remove(object0: any): V;
			public remove(key: any, value: any): boolean;
			public entrySet(): java.util.Set<java.util.Map.Entry<K,V>>;
			public hashCode(): number;
			public put(object0: K, object1: V): V;
		}
		export module AbstractMap {
			export class Companion extends java.lang.Object {
				public static class: java.lang.Class<kotlin.collections.AbstractMap.Companion>;
				public entryEquals(e: java.util.Map.Entry<any,any>, other: any): boolean;
				public entryToString(e: java.util.Map.Entry<any,any>): string;
				public entryHashCode(e: java.util.Map.Entry<any,any>): number;
			}
		}
	}
}

declare module kotlin {
	export module collections {
		export abstract class AbstractMutableCollection<E>  extends java.util.AbstractCollection<any> {
			public static class: java.lang.Class<kotlin.collections.AbstractMutableCollection<any>>;
			public clear(): void;
			public contains(o: any): boolean;
			public toArray(): native.Array<any>;
			public remove(o: any): boolean;
			public size(): number;
			public isEmpty(): boolean;
			public retainAll(c: java.util.Collection<any>): boolean;
			public stream(): java.util.stream.Stream<any>;
			public constructor();
			public getSize(): number;
			public forEach(action: any /* any*/): void;
			public add(e: any): boolean;
			public removeAll(c: java.util.Collection<any>): boolean;
			public removeIf(filter: any /* any*/): boolean;
			public equals(obj: any): boolean;
			public containsAll(c: java.util.Collection<any>): boolean;
			public toArray(a: native.Array<any>): native.Array<any>;
			public addAll(c: java.util.Collection<any>): boolean;
			public spliterator(): java.util.Spliterator<any>;
			public parallelStream(): java.util.stream.Stream<any>;
			public iterator(): java.util.Iterator<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module collections {
		export abstract class AbstractMutableList<E>  extends java.util.AbstractList<any> {
			public static class: java.lang.Class<kotlin.collections.AbstractMutableList<any>>;
			public removeAt(int0: number): any;
			public contains(o: any): boolean;
			public toArray(): native.Array<any>;
			public get(int0: number): any;
			public remove(o: any): boolean;
			public retainAll(c: java.util.Collection<any>): boolean;
			public stream(): java.util.stream.Stream<any>;
			public subList(fromIndex: number, toIndex: number): java.util.List<any>;
			public lastIndexOf(o: any): number;
			public addAll(index: number, c: java.util.Collection<any>): boolean;
			public replaceAll(operator: any /* any*/): void;
			public getSize(): number;
			public add(e: any): boolean;
			public removeIf(filter: any /* any*/): boolean;
			public sort(c: java.util.Comparator<any>): void;
			public remove(index: number): any;
			public toArray(a: native.Array<any>): native.Array<any>;
			public addAll(c: java.util.Collection<any>): boolean;
			public iterator(): java.util.Iterator<any>;
			public clear(): void;
			public size(): number;
			public isEmpty(): boolean;
			public listIterator(index: number): java.util.ListIterator<any>;
			public constructor();
			public forEach(action: any /* any*/): void;
			public removeAll(c: java.util.Collection<any>): boolean;
			public equals(o: any): boolean;
			public indexOf(o: any): number;
			public listIterator(): java.util.ListIterator<any>;
			public containsAll(c: java.util.Collection<any>): boolean;
			public add(index: number, element: any): void;
			public spliterator(): java.util.Spliterator<any>;
			public set(index: number, element: any): any;
			public parallelStream(): java.util.stream.Stream<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module collections {
		export abstract class AbstractMutableMap<K, V>  extends java.util.AbstractMap<any,any> {
			public static class: java.lang.Class<kotlin.collections.AbstractMutableMap<any,any>>;
			public replace(key: any, oldValue: any, newValue: any): boolean;
			public getKeys(): java.util.Set<any>;
			public computeIfPresent(key: any, remappingFunction: any /* any<any,any,any>*/): any;
			public replace(key: any, value: any): any;
			public getSize(): number;
			public containsKey(key: any): boolean;
			public remove(key: any): any;
			public containsValue(value: any): boolean;
			public forEach(action: any /* any<any,any>*/): void;
			public compute(key: any, remappingFunction: any /* any<any,any,any>*/): any;
			public putAll(m: java.util.Map<any,any>): void;
			public putIfAbsent(key: any, value: any): any;
			public values(): java.util.Collection<any>;
			public merge(key: any, value: any, remappingFunction: any /* any<any,any,any>*/): any;
			public clear(): void;
			public get(key: any): any;
			public entrySet(): java.util.Set<java.util.Map.Entry<any,any>>;
			public keySet(): java.util.Set<any>;
			public size(): number;
			public isEmpty(): boolean;
			public getValues(): java.util.Collection<any>;
			public computeIfAbsent(key: any, mappingFunction: any /* any<any,any>*/): any;
			public replaceAll(function0: any /* any<any,any,any>*/): void;
			public constructor();
			public getOrDefault(key: any, defaultValue: any): any;
			public put(key: any, value: any): any;
			public getEntries(): java.util.Set<any>;
			public equals(o: any): boolean;
			public remove(key: any, value: any): boolean;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module collections {
		export abstract class AbstractMutableSet<E>  extends java.util.AbstractSet<any> {
			public static class: java.lang.Class<kotlin.collections.AbstractMutableSet<any>>;
			public clear(): void;
			public contains(o: any): boolean;
			public toArray(): native.Array<any>;
			public remove(o: any): boolean;
			public size(): number;
			public isEmpty(): boolean;
			public retainAll(c: java.util.Collection<any>): boolean;
			public stream(): java.util.stream.Stream<any>;
			public constructor();
			public getSize(): number;
			public forEach(action: any /* any*/): void;
			public add(e: any): boolean;
			public removeAll(c: java.util.Collection<any>): boolean;
			public equals(o: any): boolean;
			public removeIf(filter: any /* any*/): boolean;
			public containsAll(c: java.util.Collection<any>): boolean;
			public toArray(a: native.Array<any>): native.Array<any>;
			public addAll(c: java.util.Collection<any>): boolean;
			public spliterator(): java.util.Spliterator<any>;
			public parallelStream(): java.util.stream.Stream<any>;
			public iterator(): java.util.Iterator<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module collections {
		export abstract class AbstractSet<E>  extends kotlin.collections.AbstractCollection<any> {
			public static class: java.lang.Class<kotlin.collections.AbstractSet<any>>;
			public static Companion: kotlin.collections.AbstractSet.Companion;
			public clear(): void;
			public toArray(): native.Array<any>;
			public size(): number;
			public isEmpty(): boolean;
			public stream(): java.util.stream.Stream<any>;
			public add(object0: any): boolean;
			public containsAll(elements: java.util.Collection<any>): boolean;
			public constructor();
			public remove(object0: any): boolean;
			public forEach(action: any /* any*/): void;
			public toArray(array: native.Array<any>): native.Array<any>;
			public removeAll(collection0: java.util.Collection<any>): boolean;
			public equals(other: any): boolean;
			public retainAll(collection0: java.util.Collection<any>): boolean;
			public addAll(collection0: java.util.Collection<any>): boolean;
			public equals(obj: any): boolean;
			public contains(element: any): boolean;
			public removeIf(filter: any /* any*/): boolean;
			public spliterator(): java.util.Spliterator<any>;
			public parallelStream(): java.util.stream.Stream<any>;
			public hashCode(): number;
			public iterator(): java.util.Iterator<any>;
		}
		export module AbstractSet {
			export class Companion extends java.lang.Object {
				public static class: java.lang.Class<kotlin.collections.AbstractSet.Companion>;
				public unorderedHashCode(c: java.util.Collection<any>): number;
				public setEquals(c: java.util.Set<any>, other: java.util.Set<any>): boolean;
			}
		}
	}
}

declare module kotlin {
	export module collections {
		export class ArrayAsCollection<T>  extends java.lang.Object {
			public static class: java.lang.Class<kotlin.collections.ArrayAsCollection<any>>;
			public toArray(): native.Array<any>;
			public stream(): java.util.stream.Stream<any>;
			public add(object0: any): boolean;
			public getSize(): number;
			public remove(object0: any): boolean;
			public addAll(collection0: java.util.Collection<any>): boolean;
			public contains(element: any): boolean;
			public removeIf(filter: any /* any*/): boolean;
			public toArray(objects0: native.Array<any>): native.Array<any>;
			public isVarargs(): boolean;
			public add(object0: T): boolean;
			public spliterator(): java.util.Spliterator<T>;
			public iterator(): java.util.Iterator<any>;
			public clear(): void;
			public size(): number;
			public isEmpty(): boolean;
			public containsAll(elements: java.util.Collection<any>): boolean;
			public forEach(action: any /* any*/): void;
			public getValues(): native.Array<T>;
			public constructor(values: native.Array<T>, isVarargs: boolean);
			public removeAll(collection0: java.util.Collection<any>): boolean;
			public retainAll(collection0: java.util.Collection<any>): boolean;
			public equals(obj: any): boolean;
			public iterator(): java.util.Iterator<T>;
			public spliterator(): java.util.Spliterator<any>;
			public parallelStream(): java.util.stream.Stream<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module collections {
		export class ArrayDeque<E>  extends kotlin.collections.AbstractMutableList<any> {
			public static class: java.lang.Class<kotlin.collections.ArrayDeque<any>>;
			public static Companion: kotlin.collections.ArrayDeque.Companion;
			public add(element: any): boolean;
			public removeAt(int0: number): any;
			public get(int0: number): any;
			public contains(o: any): boolean;
			public retainAll(c: java.util.Collection<any>): boolean;
			public removeLast(): any;
			public addAll(elements: java.util.Collection<any>): boolean;
			public subList(fromIndex: number, toIndex: number): java.util.List<any>;
			public lastIndexOf(o: any): number;
			public add(int0: number, object1: any): void;
			public addAll(index: number, c: java.util.Collection<any>): boolean;
			public removeAll(elements: java.util.Collection<any>): boolean;
			public replaceAll(operator: any /* any*/): void;
			public add(e: any): boolean;
			public first(): any;
			public removeLastOrNull(): any;
			public contains(element: any): boolean;
			public constructor(elements: java.util.Collection<any>);
			public lastOrNull(): any;
			public sort(c: java.util.Comparator<any>): void;
			public clear(): void;
			public constructor();
			public equals(o: any): boolean;
			public removeFirst(): any;
			public addFirst(element: any): void;
			public remove(element: any): boolean;
			public spliterator(): java.util.Spliterator<any>;
			public set(index: number, element: any): any;
			public get(index: number): any;
			public remove(int0: number): any;
			public toArray(): native.Array<any>;
			public remove(o: any): boolean;
			public constructor(initialCapacity: number);
			public stream(): java.util.stream.Stream<any>;
			public getSize(): number;
			public set(int0: number, object1: any): any;
			public addAll(index: number, elements: java.util.Collection<any>): boolean;
			public removeIf(filter: any /* any*/): boolean;
			public internalStructure(structure: kotlin.jvm.functions.Function2<any,any,kotlin.Unit>): void;
			public last(): any;
			public addAll(c: java.util.Collection<any>): boolean;
			public toArray(a: native.Array<any>): native.Array<any>;
			public lastIndexOf(element: any): number;
			public iterator(): java.util.Iterator<any>;
			public isEmpty(): boolean;
			public size(): number;
			public removeFirstOrNull(): any;
			public listIterator(index: number): java.util.ListIterator<any>;
			public indexOf(element: any): number;
			public addLast(element: any): void;
			public removeAt(index: number): any;
			public removeAll(c: java.util.Collection<any>): boolean;
			public indexOf(o: any): number;
			public listIterator(): java.util.ListIterator<any>;
			public containsAll(c: java.util.Collection<any>): boolean;
			public add(index: number, element: any): void;
			public retainAll(elements: java.util.Collection<any>): boolean;
			public parallelStream(): java.util.stream.Stream<any>;
			public firstOrNull(): any;
			public hashCode(): number;
		}
		export module ArrayDeque {
			export class Companion extends java.lang.Object {
				public static class: java.lang.Class<kotlin.collections.ArrayDeque.Companion>;
				public newCapacity(oldCapacity: number, minCapacity: number): number;
			}
		}
	}
}

declare module kotlin {
	export module collections {
		export class ArraysKt extends kotlin.collections.ArraysKt___ArraysKt {
			public static class: java.lang.Class<kotlin.collections.ArraysKt>;
		}
	}
}

declare module kotlin {
	export module collections {
		export class ArraysKt__ArraysJVMKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.collections.ArraysKt__ArraysJVMKt>;
			public static arrayOfNulls(reference: native.Array<any>, size: number): native.Array<any>;
			public static contentDeepHashCode(thiscontentDeepHashCodeImpl: native.Array<any>): number;
			public static copyOfRangeToIndexCheck(toIndex: number, size: number): void;
			public constructor();
		}
	}
}

declare module kotlin {
	export module collections {
		export class ArraysKt__ArraysKt extends kotlin.collections.ArraysKt__ArraysJVMKt {
			public static class: java.lang.Class<kotlin.collections.ArraysKt__ArraysKt>;
			public static contentDeepToString(thiscontentDeepToStringImpl: native.Array<any>): string;
			public static flatten(thisflatten: native.Array<native.Array<any>>): java.util.List<any>;
			public static unzip(thisunzip: native.Array<kotlin.Pair<any,any>>): kotlin.Pair<any,any>;
			public constructor();
			public static contentDeepEquals(thiscontentDeepEqualsImpl: native.Array<any>, other: native.Array<any>): boolean;
		}
	}
}

declare module kotlin {
	export module collections {
		export class ArraysKt___ArraysJvmKt extends kotlin.collections.ArraysKt__ArraysKt {
			public static class: java.lang.Class<kotlin.collections.ArraysKt___ArraysJvmKt>;
			public static asList(thisasList: native.Array<number>): java.util.List<java.lang.Byte>;
			public static asList(thisasList: native.Array<any>): java.util.List<any>;
			public static plus(thisplus: native.Array<number>, elements: java.util.Collection<java.lang.Integer>): native.Array<number>;
			public static toSortedSet(thistoSortedSet: native.Array<number>): java.util.SortedSet<java.lang.Long>;
			public static toSortedSet(thistoSortedSet: native.Array<number>): java.util.SortedSet<java.lang.Float>;
			public static asList(thisasList: native.Array<boolean>): java.util.List<java.lang.Boolean>;
			public static sort(thissort: native.Array<string>): void;
			public static toSortedSet(thistoSortedSet: native.Array<string>): java.util.SortedSet<java.lang.Character>;
			public static sort(thissort: native.Array<any>, fromIndex: number, toIndex: number): void;
			public static plus(thisplus: native.Array<number>, elements: java.util.Collection<java.lang.Long>): native.Array<number>;
			public static toTypedArray(thistoTypedArray: native.Array<number>): native.Array<java.lang.Double>;
			public static plus(thisplus: native.Array<number>, elements: java.util.Collection<java.lang.Float>): native.Array<number>;
			public static copyInto(thiscopyInto: native.Array<boolean>, destination: native.Array<boolean>, destinationOffset: number, startIndex: number, endIndex: number): native.Array<boolean>;
			public static toTypedArray(thistoTypedArray: native.Array<boolean>): native.Array<java.lang.Boolean>;
			public static binarySearch(thisbinarySearch: native.Array<number>, element: number, fromIndex: number, toIndex: number): number;
			public static toSortedSet(thistoSortedSet: native.Array<java.lang.Comparable<any>>): java.util.SortedSet<any>;
			public static copyInto(thiscopyInto: native.Array<number>, destination: native.Array<number>, destinationOffset: number, startIndex: number, endIndex: number): native.Array<number>;
			public static sort(thissort: native.Array<string>, fromIndex: number, toIndex: number): void;
			public static sortWith(thissortWith: native.Array<any>, comparator: java.util.Comparator<any>): void;
			public static toSortedSet(thistoSortedSet: native.Array<number>): java.util.SortedSet<java.lang.Byte>;
			public static plus(thisplus: native.Array<number>, elements: java.util.Collection<java.lang.Short>): native.Array<number>;
			public static filterIsInstance(thisfilterIsInstance: native.Array<any>, klass: java.lang.Class<any>): java.util.List<any>;
			public static plus(thisplus: native.Array<string>, elements: native.Array<string>): native.Array<string>;
			public constructor();
			public static asList(thisasList: native.Array<number>): java.util.List<java.lang.Integer>;
			public static sort(thissort: native.Array<number>, fromIndex: number, toIndex: number): void;
			public static plus(thisplus: native.Array<number>, elements: java.util.Collection<java.lang.Double>): native.Array<number>;
			public static toSortedSet(thistoSortedSet: native.Array<number>): java.util.SortedSet<java.lang.Double>;
			public static toSortedSet(thistoSortedSet: native.Array<number>): java.util.SortedSet<java.lang.Integer>;
			public static copyInto(thiscopyInto: native.Array<string>, destination: native.Array<string>, destinationOffset: number, startIndex: number, endIndex: number): native.Array<string>;
			public static copyOfRange(thiscopyOfRangeImpl: native.Array<any>, fromIndex: number, toIndex: number): native.Array<any>;
			public static plus(thisplus: native.Array<any>, elements: native.Array<any>): native.Array<any>;
			public static fill(thisfill: native.Array<any>, element: any, fromIndex: number, toIndex: number): void;
			public static toTypedArray(thistoTypedArray: native.Array<number>): native.Array<java.lang.Integer>;
			public static copyOfRange(thiscopyOfRangeImpl: native.Array<number>, fromIndex: number, toIndex: number): native.Array<number>;
			public static toTypedArray(thistoTypedArray: native.Array<number>): native.Array<java.lang.Short>;
			public static toTypedArray(thistoTypedArray: native.Array<number>): native.Array<java.lang.Long>;
			public static asList(thisasList: native.Array<string>): java.util.List<java.lang.Character>;
			public static binarySearch(thisbinarySearch: native.Array<string>, element: string, fromIndex: number, toIndex: number): number;
			public static toTypedArray(thistoTypedArray: native.Array<number>): native.Array<java.lang.Float>;
			public static toTypedArray(thistoTypedArray: native.Array<number>): native.Array<java.lang.Byte>;
			public static filterIsInstanceTo(thisfilterIsInstanceTo: native.Array<any>, destination: java.util.Collection<any>, klass: java.lang.Class<any>): java.util.Collection<any>;
			public static toSortedSet(thistoSortedSet: native.Array<boolean>): java.util.SortedSet<java.lang.Boolean>;
			public static fill(thisfill: native.Array<boolean>, element: boolean, fromIndex: number, toIndex: number): void;
			public static plus(thisplus: native.Array<string>, elements: java.util.Collection<java.lang.Character>): native.Array<string>;
			public static plus(thisplus: native.Array<boolean>, elements: native.Array<boolean>): native.Array<boolean>;
			public static plus(thisplus: native.Array<string>, element: string): native.Array<string>;
			public static asList(thisasList: native.Array<number>): java.util.List<java.lang.Float>;
			public static fill(thisfill: native.Array<number>, element: number, fromIndex: number, toIndex: number): void;
			public static plus(thisplus: native.Array<number>, elements: java.util.Collection<java.lang.Byte>): native.Array<number>;
			public static copyOfRange(thiscopyOfRangeImpl: native.Array<boolean>, fromIndex: number, toIndex: number): native.Array<boolean>;
			public static plus(thisplus: native.Array<boolean>, element: boolean): native.Array<boolean>;
			public static binarySearch(thisbinarySearch: native.Array<any>, element: any, comparator: java.util.Comparator<any>, fromIndex: number, toIndex: number): number;
			public static plus(thisplus: native.Array<any>, elements: java.util.Collection<any>): native.Array<any>;
			public static toSortedSet(thistoSortedSet: native.Array<number>): java.util.SortedSet<java.lang.Short>;
			public static copyInto(thiscopyInto: native.Array<any>, destination: native.Array<any>, destinationOffset: number, startIndex: number, endIndex: number): native.Array<any>;
			public static sort(thissort: native.Array<java.lang.Comparable<any>>, fromIndex: number, toIndex: number): void;
			public static fill(thisfill: native.Array<string>, element: string, fromIndex: number, toIndex: number): void;
			public static plus(thisplus: native.Array<boolean>, elements: java.util.Collection<java.lang.Boolean>): native.Array<boolean>;
			public static asList(thisasList: native.Array<number>): java.util.List<java.lang.Double>;
			public static plus(thisplus: native.Array<number>, elements: native.Array<number>): native.Array<number>;
			public static sort(thissort: native.Array<any>): void;
			public static sortWith(thissortWith: native.Array<any>, comparator: java.util.Comparator<any>, fromIndex: number, toIndex: number): void;
			public static toTypedArray(thistoTypedArray: native.Array<string>): native.Array<java.lang.Character>;
			public static toSortedSet(thistoSortedSet: native.Array<any>, comparator: java.util.Comparator<any>): java.util.SortedSet<any>;
			public static binarySearch(thisbinarySearch: native.Array<any>, element: any, fromIndex: number, toIndex: number): number;
			public static asList(thisasList: native.Array<number>): java.util.List<java.lang.Short>;
			public static copyOfRange(thiscopyOfRangeImpl: native.Array<string>, fromIndex: number, toIndex: number): native.Array<string>;
			public static plus(thisplus: native.Array<any>, element: any): native.Array<any>;
			public static asList(thisasList: native.Array<number>): java.util.List<java.lang.Long>;
			public static sort(thissort: native.Array<number>): void;
			public static plus(thisplus: native.Array<number>, element: number): native.Array<number>;
		}
	}
}

declare module kotlin {
	export module collections {
		export class ArraysKt___ArraysKt extends kotlin.collections.ArraysKt___ArraysJvmKt {
			public static class: java.lang.Class<kotlin.collections.ArraysKt___ArraysKt>;
			public static union(thisunion: native.Array<boolean>, other: java.lang.Iterable<java.lang.Boolean>): java.util.Set<java.lang.Boolean>;
			public static reverse(thisreverse: native.Array<any>): void;
			public static toHashSet(thistoHashSet: native.Array<boolean>): java.util.HashSet<java.lang.Boolean>;
			public static reduceRightIndexedOrNull(thisreduceRightIndexedOrNull: native.Array<number>, operation: kotlin.jvm.functions.Function3<any,any,any,java.lang.Byte>): java.lang.Byte;
			/** @deprecated */
			public static min(thismin: native.Array<number>): java.lang.Long;
			/** @deprecated */
			public static minWith(thisminWith: native.Array<number>, comparator: java.util.Comparator<any>): java.lang.Long;
			public static filter(thisfilter: native.Array<number>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Double>;
			public static groupingBy(thisgroupingBy: native.Array<any>, keySelector: kotlin.jvm.functions.Function1<any,any>): kotlin.collections.Grouping<any,any>;
			public static reduce(thisreduce: native.Array<number>, operation: kotlin.jvm.functions.Function2<any,any,java.lang.Float>): number;
			public static reduceRight(thisreduceRight: native.Array<number>, operation: kotlin.jvm.functions.Function2<any,any,java.lang.Integer>): number;
			public static takeLastWhile(thistakeLastWhile: native.Array<number>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Short>;
			public static takeLastWhile(thistakeLastWhile: native.Array<number>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Double>;
			public static partition(thispartition: native.Array<number>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): kotlin.Pair<java.util.List<java.lang.Integer>,java.util.List<java.lang.Integer>>;
			public static slice(thisslice: native.Array<number>, indices: kotlin.ranges.IntRange): java.util.List<java.lang.Float>;
			public static flatMap(thisflatMap: native.Array<boolean>, transform: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static singleOrNull(thissingleOrNull: native.Array<number>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.lang.Float;
			public static toMutableSet(thistoMutableSet: native.Array<number>): java.util.Set<java.lang.Float>;
			public static lastOrNull(thislastOrNull: native.Array<number>): java.lang.Short;
			public static zip(thiszip: native.Array<any>, other: java.lang.Iterable<any>): java.util.List<any>;
			public static zip(thiszip: native.Array<boolean>, other: native.Array<any>): java.util.List<any>;
			public static randomOrNull(thisrandomOrNull: native.Array<string>, random: kotlin.random.Random): java.lang.Character;
			public static sortedWith(thissortedWith: native.Array<number>, comparator: java.util.Comparator<any>): java.util.List<java.lang.Byte>;
			public static maxOrNull(thismaxOrNull: native.Array<java.lang.Comparable<any>>): java.lang.Comparable<any>;
			/** @deprecated */
			public static lastIndexOf(thislastIndexOf: native.Array<number>, element: number): number;
			public static contains(thiscontains: native.Array<string>, element: string): boolean;
			public static dropLastWhile(thisdropLastWhile: native.Array<number>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Integer>;
			public static sortedWith(thissortedWith: native.Array<number>, comparator: java.util.Comparator<any>): java.util.List<java.lang.Double>;
			public static sortedWith(thissortedWith: native.Array<number>, comparator: java.util.Comparator<any>): java.util.List<java.lang.Long>;
			public static slice(thisslice: native.Array<string>, indices: java.lang.Iterable<java.lang.Integer>): java.util.List<java.lang.Character>;
			public static subtract(thissubtract: native.Array<number>, other: java.lang.Iterable<java.lang.Integer>): java.util.Set<java.lang.Integer>;
			public static associateBy(thisassociateBy: native.Array<any>, keySelector: kotlin.jvm.functions.Function1<any,any>, valueTransform: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			public static mapIndexed(thismapIndexed: native.Array<string>, transform: kotlin.jvm.functions.Function2<any,any,any>): java.util.List<any>;
			public static filterTo(thisfilterTo: native.Array<number>, destination: java.util.Collection<any>, predicate: kotlin.jvm.functions.Function1<any,any>): java.util.Collection<any>;
			public static toMutableSet(thistoMutableSet: native.Array<number>): java.util.Set<java.lang.Double>;
			public static maxWithOrNull(thismaxWithOrNull: native.Array<any>, comparator: java.util.Comparator<any>): any;
			public static slice(thisslice: native.Array<boolean>, indices: kotlin.ranges.IntRange): java.util.List<java.lang.Boolean>;
			public static sortedWith(thissortedWith: native.Array<boolean>, comparator: java.util.Comparator<any>): java.util.List<java.lang.Boolean>;
			public static associateByTo(thisassociateByTo: native.Array<number>, destination: java.util.Map<any,any>, keySelector: kotlin.jvm.functions.Function1<any,any>, valueTransform: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			public static joinTo(thisjoinTo: native.Array<any>, buffer: java.lang.Appendable, separator: string, prefix: string, postfix: string, limit: number, truncated: string, transform: kotlin.jvm.functions.Function1<any,any>): java.lang.Appendable;
			public static zip(thiszip: native.Array<boolean>, other: java.lang.Iterable<any>, transform: kotlin.jvm.functions.Function2<any,any,any>): java.util.List<any>;
			public static singleOrNull(thissingleOrNull: native.Array<number>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.lang.Long;
			public static last(thislast: native.Array<string>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): string;
			/** @deprecated */
			public static maxBy(thismaxBy: native.Array<number>, selector: kotlin.jvm.functions.Function1<any,any>): java.lang.Long;
			public static requireNoNulls(thisrequireNoNulls: native.Array<any>): native.Array<any>;
			public static sortedBy(thissortedBy: native.Array<boolean>, selector: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static contains(thiscontains: native.Array<number>, element: number): boolean;
			public static subtract(thissubtract: native.Array<number>, other: java.lang.Iterable<java.lang.Short>): java.util.Set<java.lang.Short>;
			public static reverse(thisreverse: native.Array<boolean>, fromIndex: number, toIndex: number): void;
			public static sumByDouble(thissumByDouble: native.Array<boolean>, selector: kotlin.jvm.functions.Function1<any,java.lang.Double>): number;
			public static maxWithOrNull(thismaxWithOrNull: native.Array<number>, comparator: java.util.Comparator<any>): java.lang.Float;
			public static none(thisnone: native.Array<number>): boolean;
			public static mapIndexedNotNullTo(thismapIndexedNotNullTo: native.Array<any>, destination: java.util.Collection<any>, transform: kotlin.jvm.functions.Function2<any,any,any>): java.util.Collection<any>;
			public static flatMapTo(thisflatMapTo: native.Array<any>, destination: java.util.Collection<any>, transform: kotlin.jvm.functions.Function1<any,any>): java.util.Collection<any>;
			public static singleOrNull(thissingleOrNull: native.Array<any>, predicate: kotlin.jvm.functions.Function1<any,any>): any;
			public static zip(thiszip: native.Array<string>, other: java.lang.Iterable<any>, transform: kotlin.jvm.functions.Function2<any,any,any>): java.util.List<any>;
			/** @deprecated */
			public static min(thismin: native.Array<number>): java.lang.Double;
			public static groupByTo(thisgroupByTo: native.Array<string>, destination: java.util.Map<any,any>, keySelector: kotlin.jvm.functions.Function1<any,any>, valueTransform: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			public static sumBy(thissumBy: native.Array<string>, selector: kotlin.jvm.functions.Function1<any,java.lang.Integer>): number;
			public static sorted(thissorted: native.Array<java.lang.Comparable<any>>): java.util.List<any>;
			public static firstOrNull(thisfirstOrNull: native.Array<number>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.lang.Byte;
			public static reverse(thisreverse: native.Array<number>, fromIndex: number, toIndex: number): void;
			public static take(thistake: native.Array<number>, n: number): java.util.List<java.lang.Byte>;
			public static indexOf(thisindexOf: native.Array<number>, element: number): number;
			/** @deprecated */
			public static maxBy(thismaxBy: native.Array<boolean>, selector: kotlin.jvm.functions.Function1<any,any>): java.lang.Boolean;
			public static filterIndexed(thisfilterIndexed: native.Array<boolean>, predicate: kotlin.jvm.functions.Function2<any,any,java.lang.Boolean>): java.util.List<java.lang.Boolean>;
			public static reduce(thisreduce: native.Array<boolean>, operation: kotlin.jvm.functions.Function2<any,any,java.lang.Boolean>): boolean;
			public static slice(thisslice: native.Array<string>, indices: kotlin.ranges.IntRange): java.util.List<java.lang.Character>;
			public static sortedByDescending(thissortedByDescending: native.Array<boolean>, selector: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static toMutableList(thistoMutableList: native.Array<boolean>): java.util.List<java.lang.Boolean>;
			public static associateBy(thisassociateBy: native.Array<boolean>, keySelector: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			public static zip(thiszip: native.Array<any>, other: native.Array<any>, transform: kotlin.jvm.functions.Function2<any,any,any>): java.util.List<any>;
			public static toMutableList(thistoMutableList: native.Array<string>): java.util.List<java.lang.Character>;
			public static reduceRightOrNull(thisreduceRightOrNull: native.Array<number>, operation: kotlin.jvm.functions.Function2<any,any,java.lang.Double>): java.lang.Double;
			public static takeLast(thistakeLast: native.Array<number>, n: number): java.util.List<java.lang.Byte>;
			public static reduceRightOrNull(thisreduceRightOrNull: native.Array<boolean>, operation: kotlin.jvm.functions.Function2<any,any,java.lang.Boolean>): java.lang.Boolean;
			public static distinct(thisdistinct: native.Array<boolean>): java.util.List<java.lang.Boolean>;
			public static sumBy(thissumBy: native.Array<number>, selector: kotlin.jvm.functions.Function1<any,java.lang.Integer>): number;
			public static map(thismap: native.Array<number>, transform: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static foldRightIndexed(thisfoldRightIndexed: native.Array<any>, initial: any, operation: kotlin.jvm.functions.Function3<any,any,any,any>): any;
			public static reduceIndexedOrNull(thisreduceIndexedOrNull: native.Array<number>, operation: kotlin.jvm.functions.Function3<any,any,any,java.lang.Long>): java.lang.Long;
			public static partition(thispartition: native.Array<number>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): kotlin.Pair<java.util.List<java.lang.Byte>,java.util.List<java.lang.Byte>>;
			public static runningFoldIndexed(thisrunningFoldIndexed: native.Array<any>, initial: any, operation: kotlin.jvm.functions.Function3<any,any,any,any>): java.util.List<any>;
			public static mapIndexed(thismapIndexed: native.Array<boolean>, transform: kotlin.jvm.functions.Function2<any,any,any>): java.util.List<any>;
			public static reduceIndexed(thisreduceIndexed: native.Array<number>, operation: kotlin.jvm.functions.Function3<any,any,any,java.lang.Short>): number;
			public static scan(thisscan: native.Array<any>, initial: any, operation: kotlin.jvm.functions.Function2<any,any,any>): java.util.List<any>;
			public static mapIndexed(thismapIndexed: native.Array<number>, transform: kotlin.jvm.functions.Function2<any,any,any>): java.util.List<any>;
			public static singleOrNull(thissingleOrNull: native.Array<number>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.lang.Byte;
			public static associateBy(thisassociateBy: native.Array<number>, keySelector: kotlin.jvm.functions.Function1<any,any>, valueTransform: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			public static average(thisaverage: native.Array<number>): number;
			public static subtract(thissubtract: native.Array<number>, other: java.lang.Iterable<java.lang.Byte>): java.util.Set<java.lang.Byte>;
			public static reduceRightOrNull(thisreduceRightOrNull: native.Array<number>, operation: kotlin.jvm.functions.Function2<any,any,java.lang.Byte>): java.lang.Byte;
			public static partition(thispartition: native.Array<number>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): kotlin.Pair<java.util.List<java.lang.Float>,java.util.List<java.lang.Float>>;
			public static mapIndexed(thismapIndexed: native.Array<any>, transform: kotlin.jvm.functions.Function2<any,any,any>): java.util.List<any>;
			public static shuffle(thisshuffle: native.Array<string>, random: kotlin.random.Random): void;
			public static joinToString(thisjoinToString: native.Array<string>, separator: string, prefix: string, postfix: string, limit: number, truncated: string, transform: kotlin.jvm.functions.Function1<any,any>): string;
			public static zip(thiszip: native.Array<number>, other: native.Array<number>): java.util.List<kotlin.Pair<java.lang.Byte,java.lang.Byte>>;
			public static filterNotNullTo(thisfilterNotNullTo: native.Array<any>, destination: java.util.Collection<any>): java.util.Collection<any>;
			public static firstOrNull(thisfirstOrNull: native.Array<number>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.lang.Short;
			/** @deprecated */
			public static maxBy(thismaxBy: native.Array<string>, selector: kotlin.jvm.functions.Function1<any,any>): java.lang.Character;
			public static associateByTo(thisassociateByTo: native.Array<any>, destination: java.util.Map<any,any>, keySelector: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			public static reduceIndexedOrNull(thisreduceIndexedOrNull: native.Array<number>, operation: kotlin.jvm.functions.Function3<any,any,any,java.lang.Short>): java.lang.Short;
			public static withIndex(thiswithIndex: native.Array<string>): java.lang.Iterable<kotlin.collections.IndexedValue<java.lang.Character>>;
			public static foldRight(thisfoldRight: native.Array<any>, initial: any, operation: kotlin.jvm.functions.Function2<any,any,any>): any;
			public static filterIndexedTo(thisfilterIndexedTo: native.Array<number>, destination: java.util.Collection<any>, predicate: kotlin.jvm.functions.Function2<any,any,any>): java.util.Collection<any>;
			public static subtract(thissubtract: native.Array<string>, other: java.lang.Iterable<java.lang.Character>): java.util.Set<java.lang.Character>;
			public static toMutableSet(thistoMutableSet: native.Array<any>): java.util.Set<any>;
			public static reverse(thisreverse: native.Array<string>): void;
			public static take(thistake: native.Array<any>, n: number): java.util.List<any>;
			public static last(thislast: native.Array<boolean>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): boolean;
			public static singleOrNull(thissingleOrNull: native.Array<number>): java.lang.Short;
			public static firstOrNull(thisfirstOrNull: native.Array<number>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.lang.Long;
			public static flatMapTo(thisflatMapTo: native.Array<number>, destination: java.util.Collection<any>, transform: kotlin.jvm.functions.Function1<any,any>): java.util.Collection<any>;
			public static none(thisnone: native.Array<number>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): boolean;
			public static sortedWith(thissortedWith: native.Array<string>, comparator: java.util.Comparator<any>): java.util.List<java.lang.Character>;
			public static takeWhile(thistakeWhile: native.Array<number>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Double>;
			public static firstOrNull(thisfirstOrNull: native.Array<string>): java.lang.Character;
			public static shuffle(thisshuffle: native.Array<boolean>, random: kotlin.random.Random): void;
			public static partition(thispartition: native.Array<number>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): kotlin.Pair<java.util.List<java.lang.Double>,java.util.List<java.lang.Double>>;
			public static sortedWith(thissortedWith: native.Array<any>, comparator: java.util.Comparator<any>): java.util.List<any>;
			public static toCollection(thistoCollection: native.Array<any>, destination: java.util.Collection<any>): java.util.Collection<any>;
			public static associateByTo(thisassociateByTo: native.Array<any>, destination: java.util.Map<any,any>, keySelector: kotlin.jvm.functions.Function1<any,any>, valueTransform: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			public static mapIndexedTo(thismapIndexedTo: native.Array<any>, destination: java.util.Collection<any>, transform: kotlin.jvm.functions.Function2<any,any,any>): java.util.Collection<any>;
			public static single(thissingle: native.Array<any>, predicate: kotlin.jvm.functions.Function1<any,any>): any;
			public static takeWhile(thistakeWhile: native.Array<number>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Short>;
			public static reduceRight(thisreduceRight: native.Array<number>, operation: kotlin.jvm.functions.Function2<any,any,java.lang.Long>): number;
			public static associateByTo(thisassociateByTo: native.Array<string>, destination: java.util.Map<any,any>, keySelector: kotlin.jvm.functions.Function1<any,any>, valueTransform: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			public static sorted(thissorted: native.Array<string>): java.util.List<java.lang.Character>;
			public static minOrNull(thisminOrNull: native.Array<number>): java.lang.Long;
			public static reversed(thisreversed: native.Array<any>): java.util.List<any>;
			public static sumOfLong(thissum: native.Array<java.lang.Long>): number;
			public static singleOrNull(thissingleOrNull: native.Array<number>): java.lang.Byte;
			public static shuffle(thisshuffle: native.Array<any>): void;
			public static slice(thisslice: native.Array<number>, indices: java.lang.Iterable<java.lang.Integer>): java.util.List<java.lang.Double>;
			public static reduceIndexed(thisreduceIndexed: native.Array<any>, operation: kotlin.jvm.functions.Function3<any,any,any,any>): any;
			public static withIndex(thiswithIndex: native.Array<number>): java.lang.Iterable<kotlin.collections.IndexedValue<java.lang.Short>>;
			public static maxWithOrNull(thismaxWithOrNull: native.Array<number>, comparator: java.util.Comparator<any>): java.lang.Long;
			public static random(thisrandom: native.Array<string>, random: kotlin.random.Random): string;
			public static reduceIndexed(thisreduceIndexed: native.Array<number>, operation: kotlin.jvm.functions.Function3<any,any,any,java.lang.Byte>): number;
			public static foldIndexed(thisfoldIndexed: native.Array<boolean>, initial: any, operation: kotlin.jvm.functions.Function3<any,any,any,any>): any;
			public static distinctBy(thisdistinctBy: native.Array<string>, selector: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static reversed(thisreversed: native.Array<number>): java.util.List<java.lang.Integer>;
			public static groupByTo(thisgroupByTo: native.Array<boolean>, destination: java.util.Map<any,any>, keySelector: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			public static reduceRightOrNull(thisreduceRightOrNull: native.Array<number>, operation: kotlin.jvm.functions.Function2<any,any,java.lang.Short>): java.lang.Short;
			/** @deprecated */
			public static minBy(thisminBy: native.Array<boolean>, selector: kotlin.jvm.functions.Function1<any,any>): java.lang.Boolean;
			public static forEachIndexed(thisforEachIndexed: native.Array<boolean>, action: kotlin.jvm.functions.Function2<any,any,kotlin.Unit>): void;
			public static minWithOrNull(thisminWithOrNull: native.Array<number>, comparator: java.util.Comparator<any>): java.lang.Short;
			public static sumOfFloat(thissum: native.Array<java.lang.Float>): number;
			public static single(thissingle: native.Array<string>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): string;
			public static indexOfFirst(thisindexOfFirst: native.Array<string>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): number;
			/** @deprecated */
			public static minWith(thisminWith: native.Array<number>, comparator: java.util.Comparator<any>): java.lang.Byte;
			public static slice(thisslice: native.Array<number>, indices: java.lang.Iterable<java.lang.Integer>): java.util.List<java.lang.Byte>;
			public static take(thistake: native.Array<number>, n: number): java.util.List<java.lang.Long>;
			public static zip(thiszip: native.Array<number>, other: native.Array<number>): java.util.List<kotlin.Pair<java.lang.Double,java.lang.Double>>;
			public static lastOrNull(thislastOrNull: native.Array<number>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.lang.Float;
			/** @deprecated */
			public static maxWith(thismaxWith: native.Array<number>, comparator: java.util.Comparator<any>): java.lang.Integer;
			public static lastOrNull(thislastOrNull: native.Array<number>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.lang.Double;
			public static withIndex(thiswithIndex: native.Array<boolean>): java.lang.Iterable<kotlin.collections.IndexedValue<java.lang.Boolean>>;
			public static reduceIndexedOrNull(thisreduceIndexedOrNull: native.Array<number>, operation: kotlin.jvm.functions.Function3<any,any,any,java.lang.Float>): java.lang.Float;
			public static indexOfLast(thisindexOfLast: native.Array<any>, predicate: kotlin.jvm.functions.Function1<any,any>): number;
			public static union(thisunion: native.Array<number>, other: java.lang.Iterable<java.lang.Byte>): java.util.Set<java.lang.Byte>;
			public static getOrNull(thisgetOrNull: native.Array<number>, index: number): java.lang.Double;
			public static toSet(thistoSet: native.Array<boolean>): java.util.Set<java.lang.Boolean>;
			public static groupByTo(thisgroupByTo: native.Array<number>, destination: java.util.Map<any,any>, keySelector: kotlin.jvm.functions.Function1<any,any>, valueTransform: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			public static sliceArray(thissliceArray: native.Array<any>, indices: kotlin.ranges.IntRange): native.Array<any>;
			public static mapTo(thismapTo: native.Array<number>, destination: java.util.Collection<any>, transform: kotlin.jvm.functions.Function1<any,any>): java.util.Collection<any>;
			public static takeLast(thistakeLast: native.Array<number>, n: number): java.util.List<java.lang.Integer>;
			public static reversed(thisreversed: native.Array<number>): java.util.List<java.lang.Byte>;
			/** @deprecated */
			public static minBy(thisminBy: native.Array<number>, selector: kotlin.jvm.functions.Function1<any,any>): java.lang.Float;
			public static firstOrNull(thisfirstOrNull: native.Array<number>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.lang.Double;
			public static reduce(thisreduce: native.Array<number>, operation: kotlin.jvm.functions.Function2<any,any,java.lang.Double>): number;
			public static distinct(thisdistinct: native.Array<string>): java.util.List<java.lang.Character>;
			public static maxWithOrNull(thismaxWithOrNull: native.Array<string>, comparator: java.util.Comparator<any>): java.lang.Character;
			public static dropLastWhile(thisdropLastWhile: native.Array<number>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Short>;
			public static takeLast(thistakeLast: native.Array<number>, n: number): java.util.List<java.lang.Long>;
			public static sorted(thissorted: native.Array<number>): java.util.List<java.lang.Short>;
			public static first(thisfirst: native.Array<any>, predicate: kotlin.jvm.functions.Function1<any,any>): any;
			public static indexOfLast(thisindexOfLast: native.Array<boolean>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): number;
			public static takeLast(thistakeLast: native.Array<number>, n: number): java.util.List<java.lang.Short>;
			public static count(thiscount: native.Array<any>, predicate: kotlin.jvm.functions.Function1<any,any>): number;
			public static drop(thisdrop: native.Array<number>, n: number): java.util.List<java.lang.Short>;
			public static last(thislast: native.Array<string>): string;
			public static single(thissingle: native.Array<boolean>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): boolean;
			public static reduceRightIndexed(thisreduceRightIndexed: native.Array<number>, operation: kotlin.jvm.functions.Function3<any,any,any,java.lang.Short>): number;
			public static minWithOrNull(thisminWithOrNull: native.Array<number>, comparator: java.util.Comparator<any>): java.lang.Integer;
			public static filterIndexed(thisfilterIndexed: native.Array<number>, predicate: kotlin.jvm.functions.Function2<any,any,java.lang.Boolean>): java.util.List<java.lang.Integer>;
			/** @deprecated */
			public static scanReduceIndexed(thisscanReduceIndexed: native.Array<any>, operation: kotlin.jvm.functions.Function3<any,any,any,any>): java.util.List<any>;
			public static toShortArray(thistoShortArray: native.Array<java.lang.Short>): native.Array<number>;
			public static foldRightIndexed(thisfoldRightIndexed: native.Array<boolean>, initial: any, operation: kotlin.jvm.functions.Function3<any,any,any,any>): any;
			/** @deprecated */
			public static minWith(thisminWith: native.Array<number>, comparator: java.util.Comparator<any>): java.lang.Float;
			public static reduceIndexedOrNull(thisreduceIndexedOrNull: native.Array<string>, operation: kotlin.jvm.functions.Function3<any,any,any,java.lang.Character>): java.lang.Character;
			public static indexOfFirst(thisindexOfFirst: native.Array<number>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): number;
			public static takeWhile(thistakeWhile: native.Array<boolean>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Boolean>;
			public static reduceIndexed(thisreduceIndexed: native.Array<number>, operation: kotlin.jvm.functions.Function3<any,any,any,java.lang.Integer>): number;
			public static averageOfDouble(thisaverage: native.Array<java.lang.Double>): number;
			public static drop(thisdrop: native.Array<number>, n: number): java.util.List<java.lang.Byte>;
			public static filterTo(thisfilterTo: native.Array<boolean>, destination: java.util.Collection<any>, predicate: kotlin.jvm.functions.Function1<any,any>): java.util.Collection<any>;
			public static filterNotTo(thisfilterNotTo: native.Array<string>, destination: java.util.Collection<any>, predicate: kotlin.jvm.functions.Function1<any,any>): java.util.Collection<any>;
			public static toBooleanArray(thistoBooleanArray: native.Array<java.lang.Boolean>): native.Array<boolean>;
			public static maxWithOrNull(thismaxWithOrNull: native.Array<number>, comparator: java.util.Comparator<any>): java.lang.Double;
			public static reduceRightIndexed(thisreduceRightIndexed: native.Array<number>, operation: kotlin.jvm.functions.Function3<any,any,any,java.lang.Byte>): number;
			/** @deprecated */
			public static min(thismin: native.Array<number>): java.lang.Byte;
			public static foldRight(thisfoldRight: native.Array<string>, initial: any, operation: kotlin.jvm.functions.Function2<any,any,any>): any;
			public static indexOf(thisindexOf: native.Array<string>, element: string): number;
			public static firstOrNull(thisfirstOrNull: native.Array<boolean>): java.lang.Boolean;
			public static foldRightIndexed(thisfoldRightIndexed: native.Array<string>, initial: any, operation: kotlin.jvm.functions.Function3<any,any,any,any>): any;
			public static getOrNull(thisgetOrNull: native.Array<string>, index: number): java.lang.Character;
			public static filterIndexed(thisfilterIndexed: native.Array<number>, predicate: kotlin.jvm.functions.Function2<any,any,java.lang.Boolean>): java.util.List<java.lang.Byte>;
			public static joinToString(thisjoinToString: native.Array<number>, separator: string, prefix: string, postfix: string, limit: number, truncated: string, transform: kotlin.jvm.functions.Function1<any,any>): string;
			public static joinTo(thisjoinTo: native.Array<string>, buffer: java.lang.Appendable, separator: string, prefix: string, postfix: string, limit: number, truncated: string, transform: kotlin.jvm.functions.Function1<any,any>): java.lang.Appendable;
			public static sumByDouble(thissumByDouble: native.Array<string>, selector: kotlin.jvm.functions.Function1<any,java.lang.Double>): number;
			public static lastOrNull(thislastOrNull: native.Array<number>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.lang.Byte;
			public static singleOrNull(thissingleOrNull: native.Array<boolean>): java.lang.Boolean;
			/** @deprecated */
			public static max(thismax: native.Array<number>): java.lang.Integer;
			public static reduce(thisreduce: native.Array<number>, operation: kotlin.jvm.functions.Function2<any,any,java.lang.Short>): number;
			public static reversed(thisreversed: native.Array<number>): java.util.List<java.lang.Short>;
			public static mapIndexedTo(thismapIndexedTo: native.Array<boolean>, destination: java.util.Collection<any>, transform: kotlin.jvm.functions.Function2<any,any,any>): java.util.Collection<any>;
			public static intersect(thisintersect: native.Array<number>, other: java.lang.Iterable<java.lang.Float>): java.util.Set<java.lang.Float>;
			public static mapNotNullTo(thismapNotNullTo: native.Array<any>, destination: java.util.Collection<any>, transform: kotlin.jvm.functions.Function1<any,any>): java.util.Collection<any>;
			public static intersect(thisintersect: native.Array<string>, other: java.lang.Iterable<java.lang.Character>): java.util.Set<java.lang.Character>;
			public static groupBy(thisgroupBy: native.Array<number>, keySelector: kotlin.jvm.functions.Function1<any,any>, valueTransform: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			public static sortedBy(thissortedBy: native.Array<string>, selector: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static foldIndexed(thisfoldIndexed: native.Array<any>, initial: any, operation: kotlin.jvm.functions.Function3<any,any,any,any>): any;
			public static sortedDescending(thissortedDescending: native.Array<number>): java.util.List<java.lang.Short>;
			public static zip(thiszip: native.Array<boolean>, other: native.Array<boolean>, transform: kotlin.jvm.functions.Function2<any,any,any>): java.util.List<any>;
			public static maxOrNull(thismaxOrNull: native.Array<number>): java.lang.Float;
			public static reduceIndexedOrNull(thisreduceIndexedOrNull: native.Array<boolean>, operation: kotlin.jvm.functions.Function3<any,any,any,java.lang.Boolean>): java.lang.Boolean;
			public static last(thislast: native.Array<number>): number;
			public static toMutableList(thistoMutableList: native.Array<number>): java.util.List<java.lang.Short>;
			public static filterNot(thisfilterNot: native.Array<number>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Integer>;
			public static getIndices(thisindices: native.Array<any>): kotlin.ranges.IntRange;
			public static groupBy(thisgroupBy: native.Array<number>, keySelector: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			public static distinct(thisdistinct: native.Array<number>): java.util.List<java.lang.Long>;
			public static intersect(thisintersect: native.Array<number>, other: java.lang.Iterable<java.lang.Long>): java.util.Set<java.lang.Long>;
			public static indexOf(thisindexOf: native.Array<boolean>, element: boolean): number;
			public static filterNotTo(thisfilterNotTo: native.Array<any>, destination: java.util.Collection<any>, predicate: kotlin.jvm.functions.Function1<any,any>): java.util.Collection<any>;
			public static toSet(thistoSet: native.Array<number>): java.util.Set<java.lang.Short>;
			public static filter(thisfilter: native.Array<number>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Long>;
			/** @deprecated */
			public static max(thismax: native.Array<java.lang.Float>): java.lang.Float;
			public static groupByTo(thisgroupByTo: native.Array<number>, destination: java.util.Map<any,any>, keySelector: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			public static filter(thisfilter: native.Array<number>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Byte>;
			public static drop(thisdrop: native.Array<number>, n: number): java.util.List<java.lang.Double>;
			public static sliceArray(thissliceArray: native.Array<number>, indices: kotlin.ranges.IntRange): native.Array<number>;
			public static dropWhile(thisdropWhile: native.Array<any>, predicate: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static dropLastWhile(thisdropLastWhile: native.Array<string>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Character>;
			public static toCharArray(thistoCharArray: native.Array<java.lang.Character>): native.Array<string>;
			public static reduceRightIndexed(thisreduceRightIndexed: native.Array<number>, operation: kotlin.jvm.functions.Function3<any,any,any,java.lang.Float>): number;
			public static lastOrNull(thislastOrNull: native.Array<number>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.lang.Short;
			public static takeWhile(thistakeWhile: native.Array<number>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Float>;
			public static sortBy(thissortBy: native.Array<any>, selector: kotlin.jvm.functions.Function1<any,any>): void;
			public static dropLast(thisdropLast: native.Array<boolean>, n: number): java.util.List<java.lang.Boolean>;
			public static none(thisnone: native.Array<string>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): boolean;
			public static shuffle(thisshuffle: native.Array<boolean>): void;
			public static associateByTo(thisassociateByTo: native.Array<boolean>, destination: java.util.Map<any,any>, keySelector: kotlin.jvm.functions.Function1<any,any>, valueTransform: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			public static dropWhile(thisdropWhile: native.Array<number>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Short>;
			public static filterIndexed(thisfilterIndexed: native.Array<any>, predicate: kotlin.jvm.functions.Function2<any,any,any>): java.util.List<any>;
			public static reverse(thisreverse: native.Array<boolean>): void;
			public static indexOfFirst(thisindexOfFirst: native.Array<boolean>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): number;
			public static distinct(thisdistinct: native.Array<number>): java.util.List<java.lang.Integer>;
			public static sorted(thissorted: native.Array<number>): java.util.List<java.lang.Float>;
			public static drop(thisdrop: native.Array<boolean>, n: number): java.util.List<java.lang.Boolean>;
			public static slice(thisslice: native.Array<number>, indices: java.lang.Iterable<java.lang.Integer>): java.util.List<java.lang.Long>;
			public static any(thisany: native.Array<number>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): boolean;
			public static partition(thispartition: native.Array<number>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): kotlin.Pair<java.util.List<java.lang.Short>,java.util.List<java.lang.Short>>;
			public static mapNotNull(thismapNotNull: native.Array<any>, transform: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static foldRight(thisfoldRight: native.Array<number>, initial: any, operation: kotlin.jvm.functions.Function2<any,any,any>): any;
			public static zip(thiszip: native.Array<number>, other: native.Array<any>, transform: kotlin.jvm.functions.Function2<any,any,any>): java.util.List<any>;
			public static fold(thisfold: native.Array<string>, initial: any, operation: kotlin.jvm.functions.Function2<any,any,any>): any;
			public static getLastIndex(thislastIndex: native.Array<number>): number;
			public static asSequence(thisasSequence: native.Array<number>): kotlin.sequences.Sequence<java.lang.Short>;
			public static averageOfInt(thisaverage: native.Array<java.lang.Integer>): number;
			public static lastOrNull(thislastOrNull: native.Array<number>): java.lang.Long;
			public static filterIndexed(thisfilterIndexed: native.Array<number>, predicate: kotlin.jvm.functions.Function2<any,any,java.lang.Boolean>): java.util.List<java.lang.Float>;
			public static filterNotNull(thisfilterNotNull: native.Array<any>): java.util.List<any>;
			public static maxWithOrNull(thismaxWithOrNull: native.Array<number>, comparator: java.util.Comparator<any>): java.lang.Integer;
			/** @deprecated */
			public static minBy(thisminBy: native.Array<number>, selector: kotlin.jvm.functions.Function1<any,any>): java.lang.Byte;
			public static mapIndexedNotNull(thismapIndexedNotNull: native.Array<any>, transform: kotlin.jvm.functions.Function2<any,any,any>): java.util.List<any>;
			public static maxByOrNull(thismaxByOrNull: native.Array<number>, selector: kotlin.jvm.functions.Function1<any,any>): java.lang.Integer;
			public static minByOrNull(thisminByOrNull: native.Array<number>, selector: kotlin.jvm.functions.Function1<any,any>): java.lang.Short;
			public static count(thiscount: native.Array<boolean>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): number;
			public static maxOrNull(thismaxOrNull: native.Array<java.lang.Double>): java.lang.Double;
			public static lastOrNull(thislastOrNull: native.Array<any>, predicate: kotlin.jvm.functions.Function1<any,any>): any;
			public static slice(thisslice: native.Array<boolean>, indices: java.lang.Iterable<java.lang.Integer>): java.util.List<java.lang.Boolean>;
			public static forEach(thisforEach: native.Array<number>, action: kotlin.jvm.functions.Function1<any,kotlin.Unit>): void;
			public static slice(thisslice: native.Array<number>, indices: kotlin.ranges.IntRange): java.util.List<java.lang.Byte>;
			public static filter(thisfilter: native.Array<boolean>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Boolean>;
			public static sumBy(thissumBy: native.Array<any>, selector: kotlin.jvm.functions.Function1<any,any>): number;
			public static runningFold(thisrunningFold: native.Array<any>, initial: any, operation: kotlin.jvm.functions.Function2<any,any,any>): java.util.List<any>;
			/** @deprecated */
			public static maxWith(thismaxWith: native.Array<number>, comparator: java.util.Comparator<any>): java.lang.Short;
			public static distinct(thisdistinct: native.Array<number>): java.util.List<java.lang.Byte>;
			public static reversedArray(thisreversedArray: native.Array<number>): native.Array<number>;
			public static indexOf(thisindexOf: native.Array<any>, element: any): number;
			public static groupByTo(thisgroupByTo: native.Array<any>, destination: java.util.Map<any,any>, keySelector: kotlin.jvm.functions.Function1<any,any>, valueTransform: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			public static reduce(thisreduce: native.Array<any>, operation: kotlin.jvm.functions.Function2<any,any,any>): any;
			public static mapTo(thismapTo: native.Array<string>, destination: java.util.Collection<any>, transform: kotlin.jvm.functions.Function1<any,any>): java.util.Collection<any>;
			public static sortedDescending(thissortedDescending: native.Array<number>): java.util.List<java.lang.Integer>;
			public static shuffle(thisshuffle: native.Array<number>, random: kotlin.random.Random): void;
			public static reduceRightOrNull(thisreduceRightOrNull: native.Array<number>, operation: kotlin.jvm.functions.Function2<any,any,java.lang.Float>): java.lang.Float;
			public static minByOrNull(thisminByOrNull: native.Array<number>, selector: kotlin.jvm.functions.Function1<any,any>): java.lang.Float;
			/** @deprecated */
			public static min(thismin: native.Array<java.lang.Float>): java.lang.Float;
			public static reduceIndexedOrNull(thisreduceIndexedOrNull: native.Array<any>, operation: kotlin.jvm.functions.Function3<any,any,any,any>): any;
			public static asSequence(thisasSequence: native.Array<any>): kotlin.sequences.Sequence<any>;
			public static toList(thistoList: native.Array<string>): java.util.List<java.lang.Character>;
			public static dropWhile(thisdropWhile: native.Array<string>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Character>;
			/** @deprecated */
			public static maxWith(thismaxWith: native.Array<number>, comparator: java.util.Comparator<any>): java.lang.Float;
			public static lastOrNull(thislastOrNull: native.Array<string>): java.lang.Character;
			public static forEachIndexed(thisforEachIndexed: native.Array<any>, action: kotlin.jvm.functions.Function2<any,any,any>): void;
			public static toList(thistoList: native.Array<boolean>): java.util.List<java.lang.Boolean>;
			public static slice(thisslice: native.Array<number>, indices: kotlin.ranges.IntRange): java.util.List<java.lang.Double>;
			public static toMutableSet(thistoMutableSet: native.Array<number>): java.util.Set<java.lang.Byte>;
			public static dropWhile(thisdropWhile: native.Array<number>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Byte>;
			public static dropLastWhile(thisdropLastWhile: native.Array<number>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Long>;
			public static filterIndexed(thisfilterIndexed: native.Array<number>, predicate: kotlin.jvm.functions.Function2<any,any,java.lang.Boolean>): java.util.List<java.lang.Long>;
			public static associate(thisassociate: native.Array<any>, transform: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			public static none(thisnone: native.Array<any>): boolean;
			public static take(thistake: native.Array<number>, n: number): java.util.List<java.lang.Integer>;
			public static flatMapSequence(thisflatMap: native.Array<any>, transform: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static forEachIndexed(thisforEachIndexed: native.Array<number>, action: kotlin.jvm.functions.Function2<any,any,kotlin.Unit>): void;
			public static zip(thiszip: native.Array<any>, other: native.Array<any>): java.util.List<any>;
			public static dropWhile(thisdropWhile: native.Array<boolean>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Boolean>;
			public static asSequence(thisasSequence: native.Array<number>): kotlin.sequences.Sequence<java.lang.Long>;
			public static groupBy(thisgroupBy: native.Array<boolean>, keySelector: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			public static firstOrNull(thisfirstOrNull: native.Array<boolean>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.lang.Boolean;
			/** @deprecated */
			public static max(thismax: native.Array<java.lang.Double>): java.lang.Double;
			/** @deprecated */
			public static minWith(thisminWith: native.Array<string>, comparator: java.util.Comparator<any>): java.lang.Character;
			public static sortByDescending(thissortByDescending: native.Array<any>, selector: kotlin.jvm.functions.Function1<any,any>): void;
			public static maxByOrNull(thismaxByOrNull: native.Array<number>, selector: kotlin.jvm.functions.Function1<any,any>): java.lang.Double;
			public static foldIndexed(thisfoldIndexed: native.Array<number>, initial: any, operation: kotlin.jvm.functions.Function3<any,any,any,any>): any;
			public static sortedWith(thissortedWith: native.Array<number>, comparator: java.util.Comparator<any>): java.util.List<java.lang.Short>;
			public static randomOrNull(thisrandomOrNull: native.Array<number>, random: kotlin.random.Random): java.lang.Byte;
			public static groupBy(thisgroupBy: native.Array<boolean>, keySelector: kotlin.jvm.functions.Function1<any,any>, valueTransform: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			/** @deprecated */
			public static min(thismin: native.Array<number>): java.lang.Float;
			public static asSequence(thisasSequence: native.Array<number>): kotlin.sequences.Sequence<java.lang.Byte>;
			public static toMutableList(thistoMutableList: native.Array<number>): java.util.List<java.lang.Double>;
			public static withIndex(thiswithIndex: native.Array<number>): java.lang.Iterable<kotlin.collections.IndexedValue<java.lang.Float>>;
			public static lastOrNull(thislastOrNull: native.Array<number>): java.lang.Byte;
			public static union(thisunion: native.Array<number>, other: java.lang.Iterable<java.lang.Float>): java.util.Set<java.lang.Float>;
			public static zip(thiszip: native.Array<string>, other: native.Array<any>, transform: kotlin.jvm.functions.Function2<any,any,any>): java.util.List<any>;
			/** @deprecated */
			public static max(thismax: native.Array<number>): java.lang.Float;
			public static takeLast(thistakeLast: native.Array<boolean>, n: number): java.util.List<java.lang.Boolean>;
			public static fold(thisfold: native.Array<boolean>, initial: any, operation: kotlin.jvm.functions.Function2<any,any,any>): any;
			public static maxWithOrNull(thismaxWithOrNull: native.Array<boolean>, comparator: java.util.Comparator<any>): java.lang.Boolean;
			public static subtract(thissubtract: native.Array<number>, other: java.lang.Iterable<java.lang.Long>): java.util.Set<java.lang.Long>;
			public static toHashSet(thistoHashSet: native.Array<number>): java.util.HashSet<java.lang.Short>;
			public static sortDescending(thissortDescending: native.Array<string>): void;
			public static toCollection(thistoCollection: native.Array<boolean>, destination: java.util.Collection<any>): java.util.Collection<any>;
			public static foldRight(thisfoldRight: native.Array<boolean>, initial: any, operation: kotlin.jvm.functions.Function2<any,any,any>): any;
			public static sortedDescending(thissortedDescending: native.Array<string>): java.util.List<java.lang.Character>;
			public static filter(thisfilter: native.Array<string>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Character>;
			public static asIterable(thisasIterable: native.Array<number>): java.lang.Iterable<java.lang.Float>;
			/** @deprecated */
			public static min(thismin: native.Array<string>): java.lang.Character;
			public static joinTo(thisjoinTo: native.Array<boolean>, buffer: java.lang.Appendable, separator: string, prefix: string, postfix: string, limit: number, truncated: string, transform: kotlin.jvm.functions.Function1<any,any>): java.lang.Appendable;
			public static dropLast(thisdropLast: native.Array<any>, n: number): java.util.List<any>;
			public static flatMapSequenceTo(thisflatMapTo: native.Array<any>, destination: java.util.Collection<any>, transform: kotlin.jvm.functions.Function1<any,any>): java.util.Collection<any>;
			public static joinToString(thisjoinToString: native.Array<any>, separator: string, prefix: string, postfix: string, limit: number, truncated: string, transform: kotlin.jvm.functions.Function1<any,any>): string;
			public static firstOrNull(thisfirstOrNull: native.Array<number>): java.lang.Double;
			public static associate(thisassociate: native.Array<number>, transform: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			public static getIndices(thisindices: native.Array<boolean>): kotlin.ranges.IntRange;
			public static union(thisunion: native.Array<string>, other: java.lang.Iterable<java.lang.Character>): java.util.Set<java.lang.Character>;
			public static getOrNull(thisgetOrNull: native.Array<number>, index: number): java.lang.Byte;
			public static intersect(thisintersect: native.Array<number>, other: java.lang.Iterable<java.lang.Double>): java.util.Set<java.lang.Double>;
			public static minWithOrNull(thisminWithOrNull: native.Array<number>, comparator: java.util.Comparator<any>): java.lang.Byte;
			public static associateTo(thisassociateTo: native.Array<number>, destination: java.util.Map<any,any>, transform: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			public static intersect(thisintersect: native.Array<number>, other: java.lang.Iterable<java.lang.Byte>): java.util.Set<java.lang.Byte>;
			public static distinctBy(thisdistinctBy: native.Array<any>, selector: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static dropLast(thisdropLast: native.Array<number>, n: number): java.util.List<java.lang.Double>;
			/** @deprecated */
			public static maxBy(thismaxBy: native.Array<number>, selector: kotlin.jvm.functions.Function1<any,any>): java.lang.Integer;
			public static sliceArray(thissliceArray: native.Array<string>, indices: java.util.Collection<java.lang.Integer>): native.Array<string>;
			public static withIndex(thiswithIndex: native.Array<number>): java.lang.Iterable<kotlin.collections.IndexedValue<java.lang.Long>>;
			public static reversed(thisreversed: native.Array<boolean>): java.util.List<java.lang.Boolean>;
			public static sorted(thissorted: native.Array<number>): java.util.List<java.lang.Integer>;
			public static minByOrNull(thisminByOrNull: native.Array<number>, selector: kotlin.jvm.functions.Function1<any,any>): java.lang.Integer;
			/** @deprecated */
			public static max(thismax: native.Array<number>): java.lang.Short;
			public static reduceOrNull(thisreduceOrNull: native.Array<string>, operation: kotlin.jvm.functions.Function2<any,any,java.lang.Character>): java.lang.Character;
			/** @deprecated */
			public static minBy(thisminBy: native.Array<any>, selector: kotlin.jvm.functions.Function1<any,any>): any;
			public static any(thisany: native.Array<number>): boolean;
			/** @deprecated */
			public static maxWith(thismaxWith: native.Array<any>, comparator: java.util.Comparator<any>): any;
			public static dropLast(thisdropLast: native.Array<number>, n: number): java.util.List<java.lang.Float>;
			public static flatMapTo(thisflatMapTo: native.Array<boolean>, destination: java.util.Collection<any>, transform: kotlin.jvm.functions.Function1<any,any>): java.util.Collection<any>;
			public static maxOrNull(thismaxOrNull: native.Array<number>): java.lang.Double;
			public static minByOrNull(thisminByOrNull: native.Array<number>, selector: kotlin.jvm.functions.Function1<any,any>): java.lang.Byte;
			/** @deprecated */
			public static minWith(thisminWith: native.Array<number>, comparator: java.util.Comparator<any>): java.lang.Integer;
			public static none(thisnone: native.Array<boolean>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): boolean;
			public static minOrNull(thisminOrNull: native.Array<number>): java.lang.Short;
			public static zip(thiszip: native.Array<number>, other: java.lang.Iterable<any>, transform: kotlin.jvm.functions.Function2<any,any,any>): java.util.List<any>;
			public static minOrNull(thisminOrNull: native.Array<number>): java.lang.Float;
			public static asIterable(thisasIterable: native.Array<any>): java.lang.Iterable<any>;
			public static last(thislast: native.Array<boolean>): boolean;
			/** @deprecated */
			public static scanReduce(thisscanReduce: native.Array<any>, operation: kotlin.jvm.functions.Function2<any,any,any>): java.util.List<any>;
			public static partition(thispartition: native.Array<string>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): kotlin.Pair<java.util.List<java.lang.Character>,java.util.List<java.lang.Character>>;
			public static firstOrNull(thisfirstOrNull: native.Array<string>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.lang.Character;
			public static takeLastWhile(thistakeLastWhile: native.Array<number>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Integer>;
			public static filterNot(thisfilterNot: native.Array<number>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Float>;
			public static distinct(thisdistinct: native.Array<number>): java.util.List<java.lang.Float>;
			public static filterNot(thisfilterNot: native.Array<string>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Character>;
			public static all(thisall: native.Array<number>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): boolean;
			public static slice(thisslice: native.Array<number>, indices: kotlin.ranges.IntRange): java.util.List<java.lang.Long>;
			public static reduce(thisreduce: native.Array<number>, operation: kotlin.jvm.functions.Function2<any,any,java.lang.Long>): number;
			public static reduceIndexed(thisreduceIndexed: native.Array<number>, operation: kotlin.jvm.functions.Function3<any,any,any,java.lang.Long>): number;
			public static reduceRightIndexed(thisreduceRightIndexed: native.Array<number>, operation: kotlin.jvm.functions.Function3<any,any,any,java.lang.Double>): number;
			public static map(thismap: native.Array<any>, transform: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static maxOrNull(thismaxOrNull: native.Array<number>): java.lang.Short;
			public static toList(thistoList: native.Array<any>): java.util.List<any>;
			public static randomOrNull(thisrandomOrNull: native.Array<number>, random: kotlin.random.Random): java.lang.Integer;
			public static associateBy(thisassociateBy: native.Array<string>, keySelector: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			public static associateBy(thisassociateBy: native.Array<any>, keySelector: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			public static minOrNull(thisminOrNull: native.Array<number>): java.lang.Integer;
			public static lastIndexOf(thislastIndexOf: native.Array<number>, element: number): number;
			public static singleOrNull(thissingleOrNull: native.Array<string>): java.lang.Character;
			public static filterTo(thisfilterTo: native.Array<string>, destination: java.util.Collection<any>, predicate: kotlin.jvm.functions.Function1<any,any>): java.util.Collection<any>;
			public static sumOfShort(thissum: native.Array<java.lang.Short>): number;
			public static reduceRight(thisreduceRight: native.Array<boolean>, operation: kotlin.jvm.functions.Function2<any,any,java.lang.Boolean>): boolean;
			public static partition(thispartition: native.Array<any>, predicate: kotlin.jvm.functions.Function1<any,any>): kotlin.Pair<any,any>;
			/** @deprecated */
			public static maxBy(thismaxBy: native.Array<number>, selector: kotlin.jvm.functions.Function1<any,any>): java.lang.Byte;
			public static reduceRightIndexedOrNull(thisreduceRightIndexedOrNull: native.Array<boolean>, operation: kotlin.jvm.functions.Function3<any,any,any,java.lang.Boolean>): java.lang.Boolean;
			public static joinToString(thisjoinToString: native.Array<boolean>, separator: string, prefix: string, postfix: string, limit: number, truncated: string, transform: kotlin.jvm.functions.Function1<any,any>): string;
			/** @deprecated */
			public static min(thismin: native.Array<java.lang.Comparable<any>>): java.lang.Comparable<any>;
			public static reversedArray(thisreversedArray: native.Array<boolean>): native.Array<boolean>;
			public static groupBy(thisgroupBy: native.Array<any>, keySelector: kotlin.jvm.functions.Function1<any,any>, valueTransform: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			public static zip(thiszip: native.Array<number>, other: native.Array<any>): java.util.List<any>;
			public static toMutableSet(thistoMutableSet: native.Array<number>): java.util.Set<java.lang.Long>;
			public static subtract(thissubtract: native.Array<number>, other: java.lang.Iterable<java.lang.Float>): java.util.Set<java.lang.Float>;
			public static dropWhile(thisdropWhile: native.Array<number>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Long>;
			public static joinTo(thisjoinTo: native.Array<number>, buffer: java.lang.Appendable, separator: string, prefix: string, postfix: string, limit: number, truncated: string, transform: kotlin.jvm.functions.Function1<any,any>): java.lang.Appendable;
			/** @deprecated */
			public static min(thismin: native.Array<number>): java.lang.Short;
			public static singleOrNull(thissingleOrNull: native.Array<number>): java.lang.Double;
			public static dropLast(thisdropLast: native.Array<number>, n: number): java.util.List<java.lang.Long>;
			public static distinctBy(thisdistinctBy: native.Array<boolean>, selector: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static maxByOrNull(thismaxByOrNull: native.Array<boolean>, selector: kotlin.jvm.functions.Function1<any,any>): java.lang.Boolean;
			public static asIterable(thisasIterable: native.Array<string>): java.lang.Iterable<java.lang.Character>;
			public static toMutableList(thistoMutableList: native.Array<number>): java.util.List<java.lang.Long>;
			public static sortedArrayDescending(thissortedArrayDescending: native.Array<java.lang.Comparable<any>>): native.Array<java.lang.Comparable<any>>;
			public static takeWhile(thistakeWhile: native.Array<number>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Byte>;
			public static mapTo(thismapTo: native.Array<boolean>, destination: java.util.Collection<any>, transform: kotlin.jvm.functions.Function1<any,any>): java.util.Collection<any>;
			/** @deprecated */
			public static max(thismax: native.Array<java.lang.Comparable<any>>): java.lang.Comparable<any>;
			public static reduceOrNull(thisreduceOrNull: native.Array<any>, operation: kotlin.jvm.functions.Function2<any,any,any>): any;
			public static toMutableList(thistoMutableList: native.Array<number>): java.util.List<java.lang.Byte>;
			public static sortDescending(thissortDescending: native.Array<java.lang.Comparable<any>>): void;
			public static getLastIndex(thislastIndex: native.Array<any>): number;
			public static reduceOrNull(thisreduceOrNull: native.Array<number>, operation: kotlin.jvm.functions.Function2<any,any,java.lang.Double>): java.lang.Double;
			public static maxWithOrNull(thismaxWithOrNull: native.Array<number>, comparator: java.util.Comparator<any>): java.lang.Short;
			public static reduceRightIndexed(thisreduceRightIndexed: native.Array<boolean>, operation: kotlin.jvm.functions.Function3<any,any,any,java.lang.Boolean>): boolean;
			public static getLastIndex(thislastIndex: native.Array<boolean>): number;
			public static maxByOrNull(thismaxByOrNull: native.Array<any>, selector: kotlin.jvm.functions.Function1<any,any>): any;
			public static takeLast(thistakeLast: native.Array<number>, n: number): java.util.List<java.lang.Double>;
			public static averageOfFloat(thisaverage: native.Array<java.lang.Float>): number;
			public static averageOfByte(thisaverage: native.Array<java.lang.Byte>): number;
			public static drop(thisdrop: native.Array<any>, n: number): java.util.List<any>;
			public static toSet(thistoSet: native.Array<any>): java.util.Set<any>;
			public static indexOfFirst(thisindexOfFirst: native.Array<any>, predicate: kotlin.jvm.functions.Function1<any,any>): number;
			public static toHashSet(thistoHashSet: native.Array<string>): java.util.HashSet<java.lang.Character>;
			public static count(thiscount: native.Array<string>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): number;
			public static forEachIndexed(thisforEachIndexed: native.Array<string>, action: kotlin.jvm.functions.Function2<any,any,kotlin.Unit>): void;
			public static lastOrNull(thislastOrNull: native.Array<number>): java.lang.Float;
			public static lastOrNull(thislastOrNull: native.Array<boolean>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.lang.Boolean;
			public static take(thistake: native.Array<number>, n: number): java.util.List<java.lang.Short>;
			public static single(thissingle: native.Array<number>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): number;
			public static minWithOrNull(thisminWithOrNull: native.Array<boolean>, comparator: java.util.Comparator<any>): java.lang.Boolean;
			public static sortedWith(thissortedWith: native.Array<number>, comparator: java.util.Comparator<any>): java.util.List<java.lang.Float>;
			public static sortDescending(thissortDescending: native.Array<java.lang.Comparable<any>>, fromIndex: number, toIndex: number): void;
			public static filterIndexedTo(thisfilterIndexedTo: native.Array<any>, destination: java.util.Collection<any>, predicate: kotlin.jvm.functions.Function2<any,any,any>): java.util.Collection<any>;
			public static toMutableSet(thistoMutableSet: native.Array<boolean>): java.util.Set<java.lang.Boolean>;
			public static minOrNull(thisminOrNull: native.Array<java.lang.Float>): java.lang.Float;
			public static sortedByDescending(thissortedByDescending: native.Array<number>, selector: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static takeLastWhile(thistakeLastWhile: native.Array<string>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Character>;
			public static firstOrNull(thisfirstOrNull: native.Array<number>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.lang.Integer;
			public static contains(thiscontains: native.Array<boolean>, element: boolean): boolean;
			public static toList(thistoList: native.Array<number>): java.util.List<java.lang.Double>;
			public static sumByDouble(thissumByDouble: native.Array<any>, selector: kotlin.jvm.functions.Function1<any,any>): number;
			public static maxByOrNull(thismaxByOrNull: native.Array<string>, selector: kotlin.jvm.functions.Function1<any,any>): java.lang.Character;
			public static minByOrNull(thisminByOrNull: native.Array<number>, selector: kotlin.jvm.functions.Function1<any,any>): java.lang.Double;
			public static single(thissingle: native.Array<boolean>): boolean;
			public static shuffle(thisshuffle: native.Array<string>): void;
			public static averageOfShort(thisaverage: native.Array<java.lang.Short>): number;
			public static singleOrNull(thissingleOrNull: native.Array<number>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.lang.Short;
			public static contains(thiscontains: native.Array<any>, element: any): boolean;
			public static filterNotTo(thisfilterNotTo: native.Array<number>, destination: java.util.Collection<any>, predicate: kotlin.jvm.functions.Function1<any,any>): java.util.Collection<any>;
			public static union(thisunion: native.Array<number>, other: java.lang.Iterable<java.lang.Long>): java.util.Set<java.lang.Long>;
			public static scanIndexed(thisscanIndexed: native.Array<any>, initial: any, operation: kotlin.jvm.functions.Function3<any,any,any,any>): java.util.List<any>;
			public static associate(thisassociate: native.Array<boolean>, transform: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			public static associateByTo(thisassociateByTo: native.Array<boolean>, destination: java.util.Map<any,any>, keySelector: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			public static forEach(thisforEach: native.Array<string>, action: kotlin.jvm.functions.Function1<any,kotlin.Unit>): void;
			public static indexOfLast(thisindexOfLast: native.Array<string>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): number;
			public static reduceRightOrNull(thisreduceRightOrNull: native.Array<number>, operation: kotlin.jvm.functions.Function2<any,any,java.lang.Integer>): java.lang.Integer;
			public static any(thisany: native.Array<boolean>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): boolean;
			public static toIntArray(thistoIntArray: native.Array<java.lang.Integer>): native.Array<number>;
			public static toList(thistoList: native.Array<number>): java.util.List<java.lang.Float>;
			public static intersect(thisintersect: native.Array<number>, other: java.lang.Iterable<java.lang.Integer>): java.util.Set<java.lang.Integer>;
			public static zip(thiszip: native.Array<string>, other: native.Array<string>): java.util.List<kotlin.Pair<java.lang.Character,java.lang.Character>>;
			public static sumOfByte(thissum: native.Array<java.lang.Byte>): number;
			public static first(thisfirst: native.Array<boolean>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): boolean;
			public static indexOfLast(thisindexOfLast: native.Array<number>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): number;
			public static averageOfLong(thisaverage: native.Array<java.lang.Long>): number;
			public static sortedArray(thissortedArray: native.Array<number>): native.Array<number>;
			/** @deprecated */
			public static minWith(thisminWith: native.Array<any>, comparator: java.util.Comparator<any>): any;
			public static toMutableSet(thistoMutableSet: native.Array<number>): java.util.Set<java.lang.Integer>;
			public static flatMap(thisflatMap: native.Array<string>, transform: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static takeLast(thistakeLast: native.Array<any>, n: number): java.util.List<any>;
			public static sortDescending(thissortDescending: native.Array<number>): void;
			public static filter(thisfilter: native.Array<number>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Float>;
			public static maxByOrNull(thismaxByOrNull: native.Array<number>, selector: kotlin.jvm.functions.Function1<any,any>): java.lang.Long;
			public static takeLast(thistakeLast: native.Array<string>, n: number): java.util.List<java.lang.Character>;
			public static reduceRightIndexedOrNull(thisreduceRightIndexedOrNull: native.Array<number>, operation: kotlin.jvm.functions.Function3<any,any,any,java.lang.Double>): java.lang.Double;
			public static sortedArray(thissortedArray: native.Array<string>): native.Array<string>;
			public static distinct(thisdistinct: native.Array<number>): java.util.List<java.lang.Double>;
			public static slice(thisslice: native.Array<number>, indices: java.lang.Iterable<java.lang.Integer>): java.util.List<java.lang.Short>;
			public static randomOrNull(thisrandomOrNull: native.Array<any>, random: kotlin.random.Random): any;
			public static dropLast(thisdropLast: native.Array<number>, n: number): java.util.List<java.lang.Short>;
			public static associateTo(thisassociateTo: native.Array<string>, destination: java.util.Map<any,any>, transform: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			public static filterIndexedTo(thisfilterIndexedTo: native.Array<boolean>, destination: java.util.Collection<any>, predicate: kotlin.jvm.functions.Function2<any,any,any>): java.util.Collection<any>;
			public static withIndex(thiswithIndex: native.Array<any>): java.lang.Iterable<any>;
			public static minByOrNull(thisminByOrNull: native.Array<boolean>, selector: kotlin.jvm.functions.Function1<any,any>): java.lang.Boolean;
			public static sortedWith(thissortedWith: native.Array<number>, comparator: java.util.Comparator<any>): java.util.List<java.lang.Integer>;
			public static toCollection(thistoCollection: native.Array<string>, destination: java.util.Collection<any>): java.util.Collection<any>;
			public static toMutableList(thistoMutableList: native.Array<number>): java.util.List<java.lang.Integer>;
			public static slice(thisslice: native.Array<number>, indices: kotlin.ranges.IntRange): java.util.List<java.lang.Integer>;
			public static dropWhile(thisdropWhile: native.Array<number>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Integer>;
			public static reduce(thisreduce: native.Array<string>, operation: kotlin.jvm.functions.Function2<any,any,java.lang.Character>): string;
			public static toSet(thistoSet: native.Array<number>): java.util.Set<java.lang.Double>;
			public static sumOfDouble(thissum: native.Array<java.lang.Double>): number;
			public static reversed(thisreversed: native.Array<number>): java.util.List<java.lang.Double>;
			public static filterNot(thisfilterNot: native.Array<number>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Double>;
			public static reduceOrNull(thisreduceOrNull: native.Array<boolean>, operation: kotlin.jvm.functions.Function2<any,any,java.lang.Boolean>): java.lang.Boolean;
			public static none(thisnone: native.Array<boolean>): boolean;
			public static runningReduceIndexed(thisrunningReduceIndexed: native.Array<any>, operation: kotlin.jvm.functions.Function3<any,any,any,any>): java.util.List<any>;
			public static filterIndexedTo(thisfilterIndexedTo: native.Array<string>, destination: java.util.Collection<any>, predicate: kotlin.jvm.functions.Function2<any,any,any>): java.util.Collection<any>;
			public static asIterable(thisasIterable: native.Array<boolean>): java.lang.Iterable<java.lang.Boolean>;
			public static takeWhile(thistakeWhile: native.Array<number>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Long>;
			public static forEach(thisforEach: native.Array<any>, action: kotlin.jvm.functions.Function1<any,any>): void;
			public static filterTo(thisfilterTo: native.Array<any>, destination: java.util.Collection<any>, predicate: kotlin.jvm.functions.Function1<any,any>): java.util.Collection<any>;
			public static zip(thiszip: native.Array<number>, other: native.Array<number>, transform: kotlin.jvm.functions.Function2<any,any,any>): java.util.List<any>;
			public static dropLast(thisdropLast: native.Array<number>, n: number): java.util.List<java.lang.Byte>;
			public static getIndices(thisindices: native.Array<string>): kotlin.ranges.IntRange;
			public static reversed(thisreversed: native.Array<string>): java.util.List<java.lang.Character>;
			public static takeWhile(thistakeWhile: native.Array<string>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Character>;
			public static subtract(thissubtract: native.Array<number>, other: java.lang.Iterable<java.lang.Double>): java.util.Set<java.lang.Double>;
			public static first(thisfirst: native.Array<boolean>): boolean;
			public static toHashSet(thistoHashSet: native.Array<number>): java.util.HashSet<java.lang.Double>;
			public static sortedBy(thissortedBy: native.Array<number>, selector: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static toSet(thistoSet: native.Array<number>): java.util.Set<java.lang.Float>;
			public static reduceRight(thisreduceRight: native.Array<number>, operation: kotlin.jvm.functions.Function2<any,any,java.lang.Float>): number;
			public static reduceIndexed(thisreduceIndexed: native.Array<number>, operation: kotlin.jvm.functions.Function3<any,any,any,java.lang.Double>): number;
			/** @deprecated */
			public static minBy(thisminBy: native.Array<number>, selector: kotlin.jvm.functions.Function1<any,any>): java.lang.Long;
			public static toFloatArray(thistoFloatArray: native.Array<java.lang.Float>): native.Array<number>;
			public static toList(thistoList: native.Array<number>): java.util.List<java.lang.Integer>;
			public static singleOrNull(thissingleOrNull: native.Array<string>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.lang.Character;
			public static lastOrNull(thislastOrNull: native.Array<number>): java.lang.Integer;
			public static maxByOrNull(thismaxByOrNull: native.Array<number>, selector: kotlin.jvm.functions.Function1<any,any>): java.lang.Byte;
			public static filterIndexed(thisfilterIndexed: native.Array<number>, predicate: kotlin.jvm.functions.Function2<any,any,java.lang.Boolean>): java.util.List<java.lang.Double>;
			public static reduceIndexedOrNull(thisreduceIndexedOrNull: native.Array<number>, operation: kotlin.jvm.functions.Function3<any,any,any,java.lang.Integer>): java.lang.Integer;
			public static sortedArrayDescending(thissortedArrayDescending: native.Array<string>): native.Array<string>;
			public static any(thisany: native.Array<boolean>): boolean;
			public static reduceOrNull(thisreduceOrNull: native.Array<number>, operation: kotlin.jvm.functions.Function2<any,any,java.lang.Integer>): java.lang.Integer;
			public static zip(thiszip: native.Array<number>, other: native.Array<number>): java.util.List<kotlin.Pair<java.lang.Integer,java.lang.Integer>>;
			public static asSequence(thisasSequence: native.Array<boolean>): kotlin.sequences.Sequence<java.lang.Boolean>;
			public static zip(thiszip: native.Array<boolean>, other: java.lang.Iterable<any>): java.util.List<any>;
			public static reduceOrNull(thisreduceOrNull: native.Array<number>, operation: kotlin.jvm.functions.Function2<any,any,java.lang.Float>): java.lang.Float;
			public static sliceArray(thissliceArray: native.Array<any>, indices: java.util.Collection<any>): native.Array<any>;
			public static first(thisfirst: native.Array<string>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): string;
			public static firstOrNull(thisfirstOrNull: native.Array<number>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.lang.Float;
			public static filterNot(thisfilterNot: native.Array<boolean>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Boolean>;
			public static sliceArray(thissliceArray: native.Array<string>, indices: kotlin.ranges.IntRange): native.Array<string>;
			public static minOrNull(thisminOrNull: native.Array<java.lang.Double>): java.lang.Double;
			public static associateTo(thisassociateTo: native.Array<any>, destination: java.util.Map<any,any>, transform: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			public static intersect(thisintersect: native.Array<any>, other: java.lang.Iterable<any>): java.util.Set<any>;
			public static groupBy(thisgroupBy: native.Array<any>, keySelector: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			public static reduceIndexedOrNull(thisreduceIndexedOrNull: native.Array<number>, operation: kotlin.jvm.functions.Function3<any,any,any,java.lang.Double>): java.lang.Double;
			public static reduceRightOrNull(thisreduceRightOrNull: native.Array<any>, operation: kotlin.jvm.functions.Function2<any,any,any>): any;
			public static runningReduce(thisrunningReduce: native.Array<any>, operation: kotlin.jvm.functions.Function2<any,any,any>): java.util.List<any>;
			public static reduceRight(thisreduceRight: native.Array<any>, operation: kotlin.jvm.functions.Function2<any,any,any>): any;
			public static slice(thisslice: native.Array<any>, indices: java.lang.Iterable<any>): java.util.List<any>;
			public static sortedBy(thissortedBy: native.Array<any>, selector: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			/** @deprecated */
			public static minWith(thisminWith: native.Array<number>, comparator: java.util.Comparator<any>): java.lang.Short;
			public static asSequence(thisasSequence: native.Array<number>): kotlin.sequences.Sequence<java.lang.Double>;
			public static dropLastWhile(thisdropLastWhile: native.Array<number>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Double>;
			public static minWithOrNull(thisminWithOrNull: native.Array<any>, comparator: java.util.Comparator<any>): any;
			public static dropLastWhile(thisdropLastWhile: native.Array<any>, predicate: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static sliceArray(thissliceArray: native.Array<boolean>, indices: java.util.Collection<java.lang.Integer>): native.Array<boolean>;
			public static dropWhile(thisdropWhile: native.Array<number>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Float>;
			public static toDoubleArray(thistoDoubleArray: native.Array<java.lang.Double>): native.Array<number>;
			public static toList(thistoList: native.Array<number>): java.util.List<java.lang.Byte>;
			public static sortDescending(thissortDescending: native.Array<number>, fromIndex: number, toIndex: number): void;
			public static slice(thisslice: native.Array<number>, indices: java.lang.Iterable<java.lang.Integer>): java.util.List<java.lang.Integer>;
			public static toSet(thistoSet: native.Array<number>): java.util.Set<java.lang.Byte>;
			public static sumByDouble(thissumByDouble: native.Array<number>, selector: kotlin.jvm.functions.Function1<any,java.lang.Double>): number;
			public static lastIndexOf(thislastIndexOf: native.Array<string>, element: string): number;
			public static reverse(thisreverse: native.Array<string>, fromIndex: number, toIndex: number): void;
			public static zip(thiszip: native.Array<any>, other: java.lang.Iterable<any>, transform: kotlin.jvm.functions.Function2<any,any,any>): java.util.List<any>;
			/** @deprecated */
			public static minBy(thisminBy: native.Array<string>, selector: kotlin.jvm.functions.Function1<any,any>): java.lang.Character;
			public static takeWhile(thistakeWhile: native.Array<any>, predicate: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static last(thislast: native.Array<any>): any;
			public static minByOrNull(thisminByOrNull: native.Array<number>, selector: kotlin.jvm.functions.Function1<any,any>): java.lang.Long;
			public static lastOrNull(thislastOrNull: native.Array<number>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.lang.Integer;
			/** @deprecated */
			public static maxWith(thismaxWith: native.Array<number>, comparator: java.util.Comparator<any>): java.lang.Long;
			/** @deprecated */
			public static maxBy(thismaxBy: native.Array<any>, selector: kotlin.jvm.functions.Function1<any,any>): any;
			public static dropLastWhile(thisdropLastWhile: native.Array<number>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Byte>;
			public static take(thistake: native.Array<number>, n: number): java.util.List<java.lang.Float>;
			public static getOrNull(thisgetOrNull: native.Array<boolean>, index: number): java.lang.Boolean;
			public static randomOrNull(thisrandomOrNull: native.Array<number>, random: kotlin.random.Random): java.lang.Long;
			public static reduceIndexed(thisreduceIndexed: native.Array<boolean>, operation: kotlin.jvm.functions.Function3<any,any,any,java.lang.Boolean>): boolean;
			public static sliceArray(thissliceArray: native.Array<boolean>, indices: kotlin.ranges.IntRange): native.Array<boolean>;
			public static fold(thisfold: native.Array<any>, initial: any, operation: kotlin.jvm.functions.Function2<any,any,any>): any;
			public static drop(thisdrop: native.Array<string>, n: number): java.util.List<java.lang.Character>;
			public static flatMap(thisflatMap: native.Array<number>, transform: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static zip(thiszip: native.Array<number>, other: native.Array<number>): java.util.List<kotlin.Pair<java.lang.Long,java.lang.Long>>;
			public static associateBy(thisassociateBy: native.Array<string>, keySelector: kotlin.jvm.functions.Function1<any,any>, valueTransform: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			public static minOrNull(thisminOrNull: native.Array<java.lang.Comparable<any>>): java.lang.Comparable<any>;
			public static sorted(thissorted: native.Array<number>): java.util.List<java.lang.Double>;
			public static mapIndexedTo(thismapIndexedTo: native.Array<string>, destination: java.util.Collection<any>, transform: kotlin.jvm.functions.Function2<any,any,any>): java.util.Collection<any>;
			public static distinctBy(thisdistinctBy: native.Array<number>, selector: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static union(thisunion: native.Array<any>, other: java.lang.Iterable<any>): java.util.Set<any>;
			public static count(thiscount: native.Array<number>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): number;
			public static sum(thissum: native.Array<number>): number;
			public static filter(thisfilter: native.Array<number>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Short>;
			public static sortedDescending(thissortedDescending: native.Array<number>): java.util.List<java.lang.Byte>;
			public static subtract(thissubtract: native.Array<any>, other: java.lang.Iterable<any>): java.util.Set<any>;
			public static minWithOrNull(thisminWithOrNull: native.Array<number>, comparator: java.util.Comparator<any>): java.lang.Float;
			public static reverse(thisreverse: native.Array<number>): void;
			public static flatMap(thisflatMap: native.Array<any>, transform: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			/** @deprecated */
			public static minBy(thisminBy: native.Array<number>, selector: kotlin.jvm.functions.Function1<any,any>): java.lang.Integer;
			public static reduceRight(thisreduceRight: native.Array<string>, operation: kotlin.jvm.functions.Function2<any,any,java.lang.Character>): string;
			public static sortedDescending(thissortedDescending: native.Array<number>): java.util.List<java.lang.Double>;
			public static zip(thiszip: native.Array<number>, other: java.lang.Iterable<any>): java.util.List<any>;
			public static firstOrNull(thisfirstOrNull: native.Array<number>): java.lang.Long;
			public static drop(thisdrop: native.Array<number>, n: number): java.util.List<java.lang.Integer>;
			public static filterNot(thisfilterNot: native.Array<any>, predicate: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static getOrNull(thisgetOrNull: native.Array<number>, index: number): java.lang.Long;
			public static singleOrNull(thissingleOrNull: native.Array<number>): java.lang.Float;
			/** @deprecated */
			public static maxWith(thismaxWith: native.Array<string>, comparator: java.util.Comparator<any>): java.lang.Character;
			public static groupByTo(thisgroupByTo: native.Array<string>, destination: java.util.Map<any,any>, keySelector: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			public static sortDescending(thissortDescending: native.Array<string>, fromIndex: number, toIndex: number): void;
			public static reduceRightIndexedOrNull(thisreduceRightIndexedOrNull: native.Array<number>, operation: kotlin.jvm.functions.Function3<any,any,any,java.lang.Integer>): java.lang.Integer;
			/** @deprecated */
			public static minBy(thisminBy: native.Array<number>, selector: kotlin.jvm.functions.Function1<any,any>): java.lang.Short;
			public static groupBy(thisgroupBy: native.Array<string>, keySelector: kotlin.jvm.functions.Function1<any,any>, valueTransform: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			public static reduce(thisreduce: native.Array<number>, operation: kotlin.jvm.functions.Function2<any,any,java.lang.Byte>): number;
			public static sortedArray(thissortedArray: native.Array<java.lang.Comparable<any>>): native.Array<java.lang.Comparable<any>>;
			/** @deprecated */
			public static minWith(thisminWith: native.Array<number>, comparator: java.util.Comparator<any>): java.lang.Double;
			public static all(thisall: native.Array<any>, predicate: kotlin.jvm.functions.Function1<any,any>): boolean;
			public static toList(thistoList: native.Array<number>): java.util.List<java.lang.Short>;
			public static toSet(thistoSet: native.Array<string>): java.util.Set<java.lang.Character>;
			public static withIndex(thiswithIndex: native.Array<number>): java.lang.Iterable<kotlin.collections.IndexedValue<java.lang.Byte>>;
			public static toByteArray(thistoByteArray: native.Array<java.lang.Byte>): native.Array<number>;
			/** @deprecated */
			public static indexOf(thisindexOf: native.Array<number>, element: number): number;
			public static minWithOrNull(thisminWithOrNull: native.Array<number>, comparator: java.util.Comparator<any>): java.lang.Long;
			public static shuffle(thisshuffle: native.Array<any>, random: kotlin.random.Random): void;
			public static withIndex(thiswithIndex: native.Array<number>): java.lang.Iterable<kotlin.collections.IndexedValue<java.lang.Integer>>;
			public static dropLastWhile(thisdropLastWhile: native.Array<number>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Float>;
			public static firstOrNull(thisfirstOrNull: native.Array<number>): java.lang.Float;
			public static toHashSet(thistoHashSet: native.Array<number>): java.util.HashSet<java.lang.Byte>;
			public static filterNot(thisfilterNot: native.Array<number>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Long>;
			public static associateByTo(thisassociateByTo: native.Array<number>, destination: java.util.Map<any,any>, keySelector: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			public static single(thissingle: native.Array<any>): any;
			public static maxOrNull(thismaxOrNull: native.Array<number>): java.lang.Long;
			public static maxWithOrNull(thismaxWithOrNull: native.Array<number>, comparator: java.util.Comparator<any>): java.lang.Byte;
			public static associateByTo(thisassociateByTo: native.Array<string>, destination: java.util.Map<any,any>, keySelector: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			/** @deprecated */
			public static maxWith(thismaxWith: native.Array<number>, comparator: java.util.Comparator<any>): java.lang.Double;
			public static sortedDescending(thissortedDescending: native.Array<java.lang.Comparable<any>>): java.util.List<any>;
			public static sortedArrayWith(thissortedArrayWith: native.Array<any>, comparator: java.util.Comparator<any>): native.Array<any>;
			/** @deprecated */
			public static maxWith(thismaxWith: native.Array<number>, comparator: java.util.Comparator<any>): java.lang.Byte;
			public static asIterable(thisasIterable: native.Array<number>): java.lang.Iterable<java.lang.Long>;
			public static flatMapTo(thisflatMapTo: native.Array<string>, destination: java.util.Collection<any>, transform: kotlin.jvm.functions.Function1<any,any>): java.util.Collection<any>;
			public static asIterable(thisasIterable: native.Array<number>): java.lang.Iterable<java.lang.Byte>;
			public static subtract(thissubtract: native.Array<boolean>, other: java.lang.Iterable<java.lang.Boolean>): java.util.Set<java.lang.Boolean>;
			public static filterNot(thisfilterNot: native.Array<number>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Byte>;
			public static reduceRightIndexed(thisreduceRightIndexed: native.Array<number>, operation: kotlin.jvm.functions.Function3<any,any,any,java.lang.Long>): number;
			public static firstOrNull(thisfirstOrNull: native.Array<number>): java.lang.Short;
			public static toHashSet(thistoHashSet: native.Array<number>): java.util.HashSet<java.lang.Long>;
			public static singleOrNull(thissingleOrNull: native.Array<number>): java.lang.Integer;
			public static map(thismap: native.Array<string>, transform: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			/** @deprecated */
			public static max(thismax: native.Array<number>): java.lang.Double;
			public static zip(thiszip: native.Array<number>, other: native.Array<number>): java.util.List<kotlin.Pair<java.lang.Float,java.lang.Float>>;
			public static any(thisany: native.Array<any>, predicate: kotlin.jvm.functions.Function1<any,any>): boolean;
			public static single(thissingle: native.Array<string>): string;
			public static associateTo(thisassociateTo: native.Array<boolean>, destination: java.util.Map<any,any>, transform: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			public static reduceRightIndexedOrNull(thisreduceRightIndexedOrNull: native.Array<number>, operation: kotlin.jvm.functions.Function3<any,any,any,java.lang.Long>): java.lang.Long;
			public static reduceOrNull(thisreduceOrNull: native.Array<number>, operation: kotlin.jvm.functions.Function2<any,any,java.lang.Short>): java.lang.Short;
			public static firstOrNull(thisfirstOrNull: native.Array<any>, predicate: kotlin.jvm.functions.Function1<any,any>): any;
			/** @deprecated */
			public static contains(thiscontains: native.Array<number>, element: number): boolean;
			public static maxOrNull(thismaxOrNull: native.Array<string>): java.lang.Character;
			public static randomOrNull(thisrandomOrNull: native.Array<number>, random: kotlin.random.Random): java.lang.Double;
			public static reduceIndexed(thisreduceIndexed: native.Array<number>, operation: kotlin.jvm.functions.Function3<any,any,any,java.lang.Float>): number;
			public static getOrNull(thisgetOrNull: native.Array<number>, index: number): java.lang.Integer;
			public static toHashSet(thistoHashSet: native.Array<any>): java.util.HashSet<any>;
			public static takeLastWhile(thistakeLastWhile: native.Array<any>, predicate: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			/** @deprecated */
			public static minBy(thisminBy: native.Array<number>, selector: kotlin.jvm.functions.Function1<any,any>): java.lang.Double;
			public static minWithOrNull(thisminWithOrNull: native.Array<number>, comparator: java.util.Comparator<any>): java.lang.Double;
			public static reduceIndexed(thisreduceIndexed: native.Array<string>, operation: kotlin.jvm.functions.Function3<any,any,any,java.lang.Character>): string;
			public static firstOrNull(thisfirstOrNull: native.Array<number>): java.lang.Byte;
			public static lastOrNull(thislastOrNull: native.Array<number>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.lang.Long;
			public static takeLast(thistakeLast: native.Array<number>, n: number): java.util.List<java.lang.Float>;
			/** @deprecated */
			public static max(thismax: native.Array<number>): java.lang.Byte;
			public static groupByTo(thisgroupByTo: native.Array<any>, destination: java.util.Map<any,any>, keySelector: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			public static sortedDescending(thissortedDescending: native.Array<number>): java.util.List<java.lang.Long>;
			public static minOrNull(thisminOrNull: native.Array<number>): java.lang.Double;
			public static asIterable(thisasIterable: native.Array<number>): java.lang.Iterable<java.lang.Integer>;
			public static distinct(thisdistinct: native.Array<number>): java.util.List<java.lang.Short>;
			public static associateBy(thisassociateBy: native.Array<boolean>, keySelector: kotlin.jvm.functions.Function1<any,any>, valueTransform: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			/** @deprecated */
			public static min(thismin: native.Array<number>): java.lang.Integer;
			public static reduceIndexedOrNull(thisreduceIndexedOrNull: native.Array<number>, operation: kotlin.jvm.functions.Function3<any,any,any,java.lang.Byte>): java.lang.Byte;
			public static union(thisunion: native.Array<number>, other: java.lang.Iterable<java.lang.Short>): java.util.Set<java.lang.Short>;
			public static all(thisall: native.Array<string>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): boolean;
			public static last(thislast: native.Array<number>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): number;
			public static reduceRightOrNull(thisreduceRightOrNull: native.Array<string>, operation: kotlin.jvm.functions.Function2<any,any,java.lang.Character>): java.lang.Character;
			public static asIterable(thisasIterable: native.Array<number>): java.lang.Iterable<java.lang.Double>;
			public static takeLastWhile(thistakeLastWhile: native.Array<number>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Float>;
			public static sortedByDescending(thissortedByDescending: native.Array<any>, selector: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static filterNot(thisfilterNot: native.Array<number>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Short>;
			public static reversedArray(thisreversedArray: native.Array<string>): native.Array<string>;
			public static lastIndexOf(thislastIndexOf: native.Array<any>, element: any): number;
			public static takeLastWhile(thistakeLastWhile: native.Array<number>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Long>;
			public static random(thisrandom: native.Array<boolean>, random: kotlin.random.Random): boolean;
			public static sumOfInt(thissum: native.Array<java.lang.Integer>): number;
			public static take(thistake: native.Array<boolean>, n: number): java.util.List<java.lang.Boolean>;
			public static minByOrNull(thisminByOrNull: native.Array<any>, selector: kotlin.jvm.functions.Function1<any,any>): any;
			public static asSequence(thisasSequence: native.Array<string>): kotlin.sequences.Sequence<java.lang.Character>;
			public static reversed(thisreversed: native.Array<number>): java.util.List<java.lang.Long>;
			public static intersect(thisintersect: native.Array<number>, other: java.lang.Iterable<java.lang.Short>): java.util.Set<java.lang.Short>;
			public static singleOrNull(thissingleOrNull: native.Array<boolean>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.lang.Boolean;
			public static foldIndexed(thisfoldIndexed: native.Array<string>, initial: any, operation: kotlin.jvm.functions.Function3<any,any,any,any>): any;
			public static singleOrNull(thissingleOrNull: native.Array<number>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.lang.Integer;
			public static toCollection(thistoCollection: native.Array<number>, destination: java.util.Collection<any>): java.util.Collection<any>;
			public static reduceRightIndexedOrNull(thisreduceRightIndexedOrNull: native.Array<number>, operation: kotlin.jvm.functions.Function3<any,any,any,java.lang.Float>): java.lang.Float;
			public static first(thisfirst: native.Array<any>): any;
			public static first(thisfirst: native.Array<number>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): number;
			public static sortedByDescending(thissortedByDescending: native.Array<string>, selector: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			/** @deprecated */
			public static max(thismax: native.Array<string>): java.lang.Character;
			public static filter(thisfilter: native.Array<number>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Integer>;
			public static drop(thisdrop: native.Array<number>, n: number): java.util.List<java.lang.Long>;
			public static partition(thispartition: native.Array<boolean>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): kotlin.Pair<java.util.List<java.lang.Boolean>,java.util.List<java.lang.Boolean>>;
			public static firstOrNull(thisfirstOrNull: native.Array<number>): java.lang.Integer;
			public static reduceRightOrNull(thisreduceRightOrNull: native.Array<number>, operation: kotlin.jvm.functions.Function2<any,any,java.lang.Long>): java.lang.Long;
			public static maxOrNull(thismaxOrNull: native.Array<java.lang.Float>): java.lang.Float;
			public static reversedArray(thisreversedArray: native.Array<any>): native.Array<any>;
			public static reduceRightIndexedOrNull(thisreduceRightIndexedOrNull: native.Array<any>, operation: kotlin.jvm.functions.Function3<any,any,any,any>): any;
			public static reduceRightIndexed(thisreduceRightIndexed: native.Array<number>, operation: kotlin.jvm.functions.Function3<any,any,any,java.lang.Integer>): number;
			public static filterIndexed(thisfilterIndexed: native.Array<string>, predicate: kotlin.jvm.functions.Function2<any,any,java.lang.Boolean>): java.util.List<java.lang.Character>;
			/** @deprecated */
			public static max(thismax: native.Array<number>): java.lang.Long;
			public static sumBy(thissumBy: native.Array<boolean>, selector: kotlin.jvm.functions.Function1<any,java.lang.Integer>): number;
			public static single(thissingle: native.Array<number>): number;
			public static drop(thisdrop: native.Array<number>, n: number): java.util.List<java.lang.Float>;
			/** @deprecated */
			public static maxBy(thismaxBy: native.Array<number>, selector: kotlin.jvm.functions.Function1<any,any>): java.lang.Double;
			public static toHashSet(thistoHashSet: native.Array<number>): java.util.HashSet<java.lang.Integer>;
			public static sortedArrayDescending(thissortedArrayDescending: native.Array<number>): native.Array<number>;
			public static randomOrNull(thisrandomOrNull: native.Array<number>, random: kotlin.random.Random): java.lang.Short;
			public static reduceOrNull(thisreduceOrNull: native.Array<number>, operation: kotlin.jvm.functions.Function2<any,any,java.lang.Byte>): java.lang.Byte;
			public static random(thisrandom: native.Array<any>, random: kotlin.random.Random): any;
			public static zip(thiszip: native.Array<string>, other: java.lang.Iterable<any>): java.util.List<any>;
			public static dropLastWhile(thisdropLastWhile: native.Array<boolean>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Boolean>;
			public static maxOrNull(thismaxOrNull: native.Array<number>): java.lang.Integer;
			public static slice(thisslice: native.Array<number>, indices: kotlin.ranges.IntRange): java.util.List<java.lang.Short>;
			/** @deprecated */
			public static min(thismin: native.Array<java.lang.Double>): java.lang.Double;
			public static toMutableList(thistoMutableList: native.Array<number>): java.util.List<java.lang.Float>;
			public static minOrNull(thisminOrNull: native.Array<number>): java.lang.Byte;
			public static filter(thisfilter: native.Array<any>, predicate: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static toLongArray(thistoLongArray: native.Array<java.lang.Long>): native.Array<number>;
			public static intersect(thisintersect: native.Array<boolean>, other: java.lang.Iterable<java.lang.Boolean>): java.util.Set<java.lang.Boolean>;
			public static union(thisunion: native.Array<number>, other: java.lang.Iterable<java.lang.Double>): java.util.Set<java.lang.Double>;
			public static reduceRightIndexed(thisreduceRightIndexed: native.Array<any>, operation: kotlin.jvm.functions.Function3<any,any,any,any>): any;
			/** @deprecated */
			public static maxWith(thismaxWith: native.Array<boolean>, comparator: java.util.Comparator<any>): java.lang.Boolean;
			public constructor();
			public static reversed(thisreversed: native.Array<number>): java.util.List<java.lang.Float>;
			public static toMutableSet(thistoMutableSet: native.Array<number>): java.util.Set<java.lang.Short>;
			public static reverse(thisreverse: native.Array<any>, fromIndex: number, toIndex: number): void;
			public static randomOrNull(thisrandomOrNull: native.Array<number>, random: kotlin.random.Random): java.lang.Float;
			public static union(thisunion: native.Array<number>, other: java.lang.Iterable<java.lang.Integer>): java.util.Set<java.lang.Integer>;
			public static distinct(thisdistinct: native.Array<any>): java.util.List<any>;
			public static maxByOrNull(thismaxByOrNull: native.Array<number>, selector: kotlin.jvm.functions.Function1<any,any>): java.lang.Short;
			public static lastOrNull(thislastOrNull: native.Array<any>): any;
			public static dropWhile(thisdropWhile: native.Array<number>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Double>;
			public static zip(thiszip: native.Array<number>, other: native.Array<number>): java.util.List<kotlin.Pair<java.lang.Short,java.lang.Short>>;
			public static minWithOrNull(thisminWithOrNull: native.Array<string>, comparator: java.util.Comparator<any>): java.lang.Character;
			public static associateWith(thisassociateWith: native.Array<any>, valueSelector: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			public static all(thisall: native.Array<boolean>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): boolean;
			public static first(thisfirst: native.Array<string>): string;
			public static randomOrNull(thisrandomOrNull: native.Array<boolean>, random: kotlin.random.Random): java.lang.Boolean;
			public static toList(thistoList: native.Array<number>): java.util.List<java.lang.Long>;
			public static sliceArray(thissliceArray: native.Array<number>, indices: java.util.Collection<java.lang.Integer>): native.Array<number>;
			public static shuffle(thisshuffle: native.Array<number>): void;
			public static none(thisnone: native.Array<any>, predicate: kotlin.jvm.functions.Function1<any,any>): boolean;
			public static takeWhile(thistakeWhile: native.Array<number>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Integer>;
			public static mapIndexedTo(thismapIndexedTo: native.Array<number>, destination: java.util.Collection<any>, transform: kotlin.jvm.functions.Function2<any,any,any>): java.util.Collection<any>;
			public static withIndex(thiswithIndex: native.Array<number>): java.lang.Iterable<kotlin.collections.IndexedValue<java.lang.Double>>;
			public static sorted(thissorted: native.Array<number>): java.util.List<java.lang.Byte>;
			public static reduceRight(thisreduceRight: native.Array<number>, operation: kotlin.jvm.functions.Function2<any,any,java.lang.Short>): number;
			public static getIndices(thisindices: native.Array<number>): kotlin.ranges.IntRange;
			/** @deprecated */
			public static maxBy(thismaxBy: native.Array<number>, selector: kotlin.jvm.functions.Function1<any,any>): java.lang.Short;
			public static toMutableList(thistoMutableList: native.Array<any>): java.util.List<any>;
			public static toSet(thistoSet: native.Array<number>): java.util.Set<java.lang.Long>;
			/** @deprecated */
			public static maxBy(thismaxBy: native.Array<number>, selector: kotlin.jvm.functions.Function1<any,any>): java.lang.Float;
			public static last(thislast: native.Array<any>, predicate: kotlin.jvm.functions.Function1<any,any>): any;
			public static sorted(thissorted: native.Array<number>): java.util.List<java.lang.Long>;
			public static singleOrNull(thissingleOrNull: native.Array<number>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.lang.Double;
			public static groupBy(thisgroupBy: native.Array<string>, keySelector: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			public static take(thistake: native.Array<number>, n: number): java.util.List<java.lang.Double>;
			public static foldRightIndexed(thisfoldRightIndexed: native.Array<number>, initial: any, operation: kotlin.jvm.functions.Function3<any,any,any,any>): any;
			/** @deprecated */
			public static minWith(thisminWith: native.Array<boolean>, comparator: java.util.Comparator<any>): java.lang.Boolean;
			public static lastOrNull(thislastOrNull: native.Array<string>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.lang.Character;
			public static reduceRightIndexed(thisreduceRightIndexed: native.Array<string>, operation: kotlin.jvm.functions.Function3<any,any,any,java.lang.Character>): string;
			public static random(thisrandom: native.Array<number>, random: kotlin.random.Random): number;
			public static any(thisany: native.Array<any>): boolean;
			public static lastOrNull(thislastOrNull: native.Array<boolean>): java.lang.Boolean;
			public static reduceRightIndexedOrNull(thisreduceRightIndexedOrNull: native.Array<number>, operation: kotlin.jvm.functions.Function3<any,any,any,java.lang.Short>): java.lang.Short;
			public static slice(thisslice: native.Array<any>, indices: kotlin.ranges.IntRange): java.util.List<any>;
			public static any(thisany: native.Array<string>): boolean;
			public static zip(thiszip: native.Array<boolean>, other: native.Array<boolean>): java.util.List<kotlin.Pair<java.lang.Boolean,java.lang.Boolean>>;
			public static map(thismap: native.Array<boolean>, transform: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static slice(thisslice: native.Array<number>, indices: java.lang.Iterable<java.lang.Integer>): java.util.List<java.lang.Float>;
			public static toMutableSet(thistoMutableSet: native.Array<string>): java.util.Set<java.lang.Character>;
			public static singleOrNull(thissingleOrNull: native.Array<any>): any;
			public static minByOrNull(thisminByOrNull: native.Array<string>, selector: kotlin.jvm.functions.Function1<any,any>): java.lang.Character;
			public static maxOrNull(thismaxOrNull: native.Array<number>): java.lang.Byte;
			public static zip(thiszip: native.Array<boolean>, other: native.Array<any>, transform: kotlin.jvm.functions.Function2<any,any,any>): java.util.List<any>;
			public static fold(thisfold: native.Array<number>, initial: any, operation: kotlin.jvm.functions.Function2<any,any,any>): any;
			public static minOrNull(thisminOrNull: native.Array<string>): java.lang.Character;
			public static getLastIndex(thislastIndex: native.Array<string>): number;
			public static asSequence(thisasSequence: native.Array<number>): kotlin.sequences.Sequence<java.lang.Float>;
			public static filterIndexed(thisfilterIndexed: native.Array<number>, predicate: kotlin.jvm.functions.Function2<any,any,java.lang.Boolean>): java.util.List<java.lang.Short>;
			public static takeLastWhile(thistakeLastWhile: native.Array<number>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Byte>;
			public static firstOrNull(thisfirstOrNull: native.Array<any>): any;
			public static reduceRightIndexedOrNull(thisreduceRightIndexedOrNull: native.Array<string>, operation: kotlin.jvm.functions.Function3<any,any,any,java.lang.Character>): java.lang.Character;
			public static toHashSet(thistoHashSet: native.Array<number>): java.util.HashSet<java.lang.Float>;
			public static groupByTo(thisgroupByTo: native.Array<boolean>, destination: java.util.Map<any,any>, keySelector: kotlin.jvm.functions.Function1<any,any>, valueTransform: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			public static asIterable(thisasIterable: native.Array<number>): java.lang.Iterable<java.lang.Short>;
			public static getOrNull(thisgetOrNull: native.Array<number>, index: number): java.lang.Float;
			public static zip(thiszip: native.Array<string>, other: native.Array<string>, transform: kotlin.jvm.functions.Function2<any,any,any>): java.util.List<any>;
			public static associateBy(thisassociateBy: native.Array<number>, keySelector: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			public static zip(thiszip: native.Array<string>, other: native.Array<any>): java.util.List<any>;
			public static toSet(thistoSet: native.Array<number>): java.util.Set<java.lang.Integer>;
			public static reduceRight(thisreduceRight: native.Array<number>, operation: kotlin.jvm.functions.Function2<any,any,java.lang.Byte>): number;
			public static mapTo(thismapTo: native.Array<any>, destination: java.util.Collection<any>, transform: kotlin.jvm.functions.Function1<any,any>): java.util.Collection<any>;
			public static reduceOrNull(thisreduceOrNull: native.Array<number>, operation: kotlin.jvm.functions.Function2<any,any,java.lang.Long>): java.lang.Long;
			public static sortedDescending(thissortedDescending: native.Array<number>): java.util.List<java.lang.Float>;
			public static lastIndexOf(thislastIndexOf: native.Array<boolean>, element: boolean): number;
			public static forEach(thisforEach: native.Array<boolean>, action: kotlin.jvm.functions.Function1<any,kotlin.Unit>): void;
			public static maxByOrNull(thismaxByOrNull: native.Array<number>, selector: kotlin.jvm.functions.Function1<any,any>): java.lang.Float;
			public static dropLast(thisdropLast: native.Array<number>, n: number): java.util.List<java.lang.Integer>;
			public static any(thisany: native.Array<string>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): boolean;
			public static reduce(thisreduce: native.Array<number>, operation: kotlin.jvm.functions.Function2<any,any,java.lang.Integer>): number;
			public static partition(thispartition: native.Array<number>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): kotlin.Pair<java.util.List<java.lang.Long>,java.util.List<java.lang.Long>>;
			public static getOrNull(thisgetOrNull: native.Array<any>, index: number): any;
			public static first(thisfirst: native.Array<number>): number;
			public static reduceRight(thisreduceRight: native.Array<number>, operation: kotlin.jvm.functions.Function2<any,any,java.lang.Double>): number;
			public static lastOrNull(thislastOrNull: native.Array<number>): java.lang.Double;
			public static filterNotTo(thisfilterNotTo: native.Array<boolean>, destination: java.util.Collection<any>, predicate: kotlin.jvm.functions.Function1<any,any>): java.util.Collection<any>;
			public static asSequence(thisasSequence: native.Array<number>): kotlin.sequences.Sequence<java.lang.Integer>;
			public static dropLast(thisdropLast: native.Array<string>, n: number): java.util.List<java.lang.Character>;
			public static getOrNull(thisgetOrNull: native.Array<number>, index: number): java.lang.Short;
			public static singleOrNull(thissingleOrNull: native.Array<number>): java.lang.Long;
			public static take(thistake: native.Array<string>, n: number): java.util.List<java.lang.Character>;
			public static associateWithTo(thisassociateWithTo: native.Array<any>, destination: java.util.Map<any,any>, valueSelector: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			public static none(thisnone: native.Array<string>): boolean;
			public static associate(thisassociate: native.Array<string>, transform: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			public static takeLastWhile(thistakeLastWhile: native.Array<boolean>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Boolean>;
		}
	}
}

declare module kotlin {
	export module collections {
		export class ArraysUtilJVM extends java.lang.Object {
			public static class: java.lang.Class<kotlin.collections.ArraysUtilJVM>;
		}
	}
}

declare module kotlin {
	export module collections {
		export abstract class BooleanIterator extends java.lang.Object {
			public static class: java.lang.Class<kotlin.collections.BooleanIterator>;
			public nextBoolean(): boolean;
			public next(): java.lang.Boolean;
			public constructor();
			public remove(): void;
		}
	}
}

declare module kotlin {
	export module collections {
		export abstract class ByteIterator extends java.lang.Object {
			public static class: java.lang.Class<kotlin.collections.ByteIterator>;
			public next(): java.lang.Byte;
			public nextByte(): number;
			public constructor();
			public remove(): void;
		}
	}
}

declare module kotlin {
	export module collections {
		export abstract class CharIterator extends java.lang.Object {
			public static class: java.lang.Class<kotlin.collections.CharIterator>;
			public nextChar(): string;
			public constructor();
			public remove(): void;
			public next(): java.lang.Character;
		}
	}
}

declare module kotlin {
	export module collections {
		export class CollectionsKt extends kotlin.collections.CollectionsKt___CollectionsKt {
			public static class: java.lang.Class<kotlin.collections.CollectionsKt>;
		}
	}
}

declare module kotlin {
	export module collections {
		export class CollectionsKt__CollectionsJVMKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.collections.CollectionsKt__CollectionsJVMKt>;
			public static shuffled(thisshuffled: java.lang.Iterable<any>, random: java.util.Random): java.util.List<any>;
			public static shuffled(thisshuffled: java.lang.Iterable<any>): java.util.List<any>;
			public static createListBuilder(capacity: number): java.util.List<any>;
			public static createListBuilder(): java.util.List<any>;
			public static copyToArrayOfAny(thiscopyToArrayOfAny: native.Array<any>, isVarargs: boolean): native.Array<any>;
			public static listOf(element: any): java.util.List<any>;
			public static build(builder: java.util.List<any>): java.util.List<any>;
			public constructor();
		}
	}
}

declare module kotlin {
	export module collections {
		export class CollectionsKt__CollectionsKt extends kotlin.collections.CollectionsKt__CollectionsJVMKt {
			public static class: java.lang.Class<kotlin.collections.CollectionsKt__CollectionsKt>;
			public static asCollection(thisasCollection: native.Array<any>): java.util.Collection<any>;
			public static arrayListOf(elements: native.Array<any>): java.util.ArrayList<any>;
			public static getLastIndex(thislastIndex: java.util.List<any>): number;
			public static emptyList(): java.util.List<any>;
			public static listOf(element: any): java.util.List<any>;
			public static listOf(elements: native.Array<any>): java.util.List<any>;
			public static binarySearchBy(thisbinarySearchBy: java.util.List<any>, key: java.lang.Comparable<any>, fromIndex: number, toIndex: number, selector: kotlin.jvm.functions.Function1<any,any>): number;
			public static binarySearch(thisbinarySearch: java.util.List<any>, fromIndex: number, toIndex: number, comparison: kotlin.jvm.functions.Function1<any,any>): number;
			public constructor();
			public static mutableListOf(elements: native.Array<any>): java.util.List<any>;
			public static throwIndexOverflow(): void;
			public static shuffled(thisshuffled: java.lang.Iterable<any>, random: java.util.Random): java.util.List<any>;
			public static binarySearch(thisbinarySearch: java.util.List<any>, element: java.lang.Comparable<any>, fromIndex: number, toIndex: number): number;
			public static shuffled(thisshuffled: java.lang.Iterable<any>): java.util.List<any>;
			public static optimizeReadOnlyList(thisoptimizeReadOnlyList: java.util.List<any>): java.util.List<any>;
			public static listOfNotNull(element: any): java.util.List<any>;
			public static listOfNotNull(elements: native.Array<any>): java.util.List<any>;
			public static binarySearch(thisbinarySearch: java.util.List<any>, element: any, comparator: java.util.Comparator<any>, fromIndex: number, toIndex: number): number;
			public static throwCountOverflow(): void;
			public static getIndices(thisindices: java.util.Collection<any>): kotlin.ranges.IntRange;
			public static shuffled(thisshuffled: java.lang.Iterable<any>, random: kotlin.random.Random): java.util.List<any>;
		}
	}
}

declare module kotlin {
	export module collections {
		export class CollectionsKt__IterablesKt extends kotlin.collections.CollectionsKt__CollectionsKt {
			public static class: java.lang.Class<kotlin.collections.CollectionsKt__IterablesKt>;
			public static unzip(thisunzip: java.lang.Iterable<any>): kotlin.Pair<any,any>;
			public static convertToSetForSetOperation(thisconvertToSetForSetOperation: java.lang.Iterable<any>): java.util.Collection<any>;
			public static collectionSizeOrNull(thiscollectionSizeOrNull: java.lang.Iterable<any>): java.lang.Integer;
			public static convertToSetForSetOperationWith(thisconvertToSetForSetOperationWith: java.lang.Iterable<any>, source: java.lang.Iterable<any>): java.util.Collection<any>;
			public constructor();
			public static flatten(thisflatten: java.lang.Iterable<any>): java.util.List<any>;
			public static collectionSizeOrDefault(thiscollectionSizeOrDefault: java.lang.Iterable<any>, default1: number): number;
		}
	}
}

declare module kotlin {
	export module collections {
		export class CollectionsKt__IteratorsJVMKt extends kotlin.collections.CollectionsKt__IterablesKt {
			public static class: java.lang.Class<kotlin.collections.CollectionsKt__IteratorsJVMKt>;
			public static iterator(thisiterator: java.util.Enumeration<any>): java.util.Iterator<any>;
			public constructor();
		}
	}
}

declare module kotlin {
	export module collections {
		export class CollectionsKt__IteratorsKt extends kotlin.collections.CollectionsKt__IteratorsJVMKt {
			public static class: java.lang.Class<kotlin.collections.CollectionsKt__IteratorsKt>;
			public static forEach(thisforEach: java.util.Iterator<any>, operation: kotlin.jvm.functions.Function1<any,any>): void;
			public static withIndex(thiswithIndex: java.util.Iterator<any>): java.util.Iterator<any>;
			public constructor();
		}
	}
}

declare module kotlin {
	export module collections {
		export class CollectionsKt__MutableCollectionsJVMKt extends kotlin.collections.CollectionsKt__IteratorsKt {
			public static class: java.lang.Class<kotlin.collections.CollectionsKt__MutableCollectionsJVMKt>;
			public static sortWith(thissortWith: java.util.List<any>, comparator: java.util.Comparator<any>): void;
			public constructor();
			public static sort(thissort: java.util.List<any>): void;
		}
	}
}

declare module kotlin {
	export module collections {
		export class CollectionsKt__MutableCollectionsKt extends kotlin.collections.CollectionsKt__MutableCollectionsJVMKt {
			public static class: java.lang.Class<kotlin.collections.CollectionsKt__MutableCollectionsKt>;
			public static addAll(thisaddAll: java.util.Collection<any>, elements: kotlin.sequences.Sequence<any>): boolean;
			public static retainAll(thisretainAll: java.lang.Iterable<any>, predicate: kotlin.jvm.functions.Function1<any,any>): boolean;
			public static retainAll(thisretainAll: java.util.Collection<any>, elements: kotlin.sequences.Sequence<any>): boolean;
			public static removeFirstOrNull(thisremoveFirstOrNull: java.util.List<any>): any;
			public constructor();
			public static removeAll(thisremoveAll: java.lang.Iterable<any>, predicate: kotlin.jvm.functions.Function1<any,any>): boolean;
			public static removeLastOrNull(thisremoveLastOrNull: java.util.List<any>): any;
			public static removeAll(thisremoveAll: java.util.Collection<any>, elements: native.Array<any>): boolean;
			public static removeAll(thisremoveAll: java.util.Collection<any>, elements: java.lang.Iterable<any>): boolean;
			public static retainAll(thisretainAll: java.util.Collection<any>, elements: native.Array<any>): boolean;
			public static removeAll(thisremoveAll: java.util.List<any>, predicate: kotlin.jvm.functions.Function1<any,any>): boolean;
			public static removeAll(thisremoveAll: java.util.Collection<any>, elements: kotlin.sequences.Sequence<any>): boolean;
			public static retainAll(thisretainAll: java.util.Collection<any>, elements: java.lang.Iterable<any>): boolean;
			public static addAll(thisaddAll: java.util.Collection<any>, elements: java.lang.Iterable<any>): boolean;
			public static removeFirst(thisremoveFirst: java.util.List<any>): any;
			public static addAll(thisaddAll: java.util.Collection<any>, elements: native.Array<any>): boolean;
			public static removeLast(thisremoveLast: java.util.List<any>): any;
			public static retainAll(thisretainAll: java.util.List<any>, predicate: kotlin.jvm.functions.Function1<any,any>): boolean;
		}
	}
}

declare module kotlin {
	export module collections {
		export class CollectionsKt__ReversedViewsKt extends kotlin.collections.CollectionsKt__MutableCollectionsKt {
			public static class: java.lang.Class<kotlin.collections.CollectionsKt__ReversedViewsKt>;
			public static asReversed(thisasReversed: java.util.List<any>): java.util.List<any>;
			public constructor();
			public static asReversedMutable(thisasReversed: java.util.List<any>): java.util.List<any>;
		}
	}
}

declare module kotlin {
	export module collections {
		export class CollectionsKt___CollectionsJvmKt extends kotlin.collections.CollectionsKt__ReversedViewsKt {
			public static class: java.lang.Class<kotlin.collections.CollectionsKt___CollectionsJvmKt>;
			public static reverse(thisreverse: java.util.List<any>): void;
			public static filterIsInstanceTo(thisfilterIsInstanceTo: java.lang.Iterable<any>, destination: java.util.Collection<any>, klass: java.lang.Class<any>): java.util.Collection<any>;
			public constructor();
			public static toSortedSet(thistoSortedSet: java.lang.Iterable<any>, comparator: java.util.Comparator<any>): java.util.SortedSet<any>;
			public static filterIsInstance(thisfilterIsInstance: java.lang.Iterable<any>, klass: java.lang.Class<any>): java.util.List<any>;
			public static toSortedSet(thistoSortedSet: java.lang.Iterable<any>): java.util.SortedSet<any>;
		}
	}
}

declare module kotlin {
	export module collections {
		export class CollectionsKt___CollectionsKt extends kotlin.collections.CollectionsKt___CollectionsJvmKt {
			public static class: java.lang.Class<kotlin.collections.CollectionsKt___CollectionsKt>;
			public static flatMap(thisflatMap: java.lang.Iterable<any>, transform: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static drop(thisdrop: java.lang.Iterable<any>, n: number): java.util.List<any>;
			public static zip(thiszip: java.lang.Iterable<any>, other: native.Array<any>, transform: kotlin.jvm.functions.Function2<any,any,any>): java.util.List<any>;
			public static single(thissingle: java.lang.Iterable<any>, predicate: kotlin.jvm.functions.Function1<any,any>): any;
			/** @deprecated */
			public static max(thismax: java.lang.Iterable<java.lang.Float>): java.lang.Float;
			public static minus(thisminus: java.lang.Iterable<any>, element: any): java.util.List<any>;
			public static first(thisfirst: java.util.List<any>): any;
			public static filterNotNull(thisfilterNotNull: java.lang.Iterable<any>): java.util.List<any>;
			public static sortByDescending(thissortByDescending: java.util.List<any>, selector: kotlin.jvm.functions.Function1<any,any>): void;
			public static mapTo(thismapTo: java.lang.Iterable<any>, destination: java.util.Collection<any>, transform: kotlin.jvm.functions.Function1<any,any>): java.util.Collection<any>;
			public static filterIndexed(thisfilterIndexed: java.lang.Iterable<any>, predicate: kotlin.jvm.functions.Function2<any,any,any>): java.util.List<any>;
			public static averageOfByte(thisaverage: java.lang.Iterable<java.lang.Byte>): number;
			public static sumOfLong(thissum: java.lang.Iterable<java.lang.Long>): number;
			public static minus(thisminus: java.lang.Iterable<any>, elements: native.Array<any>): java.util.List<any>;
			public static toByteArray(thistoByteArray: java.util.Collection<java.lang.Byte>): native.Array<number>;
			public static toFloatArray(thistoFloatArray: java.util.Collection<java.lang.Float>): native.Array<number>;
			public static reduceRight(thisreduceRight: java.util.List<any>, operation: kotlin.jvm.functions.Function2<any,any,any>): any;
			public static none(thisnone: java.lang.Iterable<any>, predicate: kotlin.jvm.functions.Function1<any,any>): boolean;
			public static filterNotTo(thisfilterNotTo: java.lang.Iterable<any>, destination: java.util.Collection<any>, predicate: kotlin.jvm.functions.Function1<any,any>): java.util.Collection<any>;
			public static associateTo(thisassociateTo: java.lang.Iterable<any>, destination: java.util.Map<any,any>, transform: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			public static toMutableList(thistoMutableList: java.lang.Iterable<any>): java.util.List<any>;
			public static contains(thiscontains: java.lang.Iterable<any>, element: any): boolean;
			public static associateByTo(thisassociateByTo: java.lang.Iterable<any>, destination: java.util.Map<any,any>, keySelector: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			public static forEach(thisforEach: java.lang.Iterable<any>, action: kotlin.jvm.functions.Function1<any,any>): void;
			public static plus(thisplus: java.util.Collection<any>, elements: java.lang.Iterable<any>): java.util.List<any>;
			public static windowed(thiswindowed: java.lang.Iterable<any>, size: number, step: number, partialWindows: boolean): java.util.List<any>;
			public static sorted(thissorted: java.lang.Iterable<any>): java.util.List<any>;
			public static forEach(thisforEach: java.util.Iterator<any>, operation: kotlin.jvm.functions.Function1<any,any>): void;
			/** @deprecated */
			public static min(thismin: java.lang.Iterable<java.lang.Float>): java.lang.Float;
			public static lastIndexOf(thislastIndexOf: java.util.List<any>, element: any): number;
			public static toCollection(thistoCollection: java.lang.Iterable<any>, destination: java.util.Collection<any>): java.util.Collection<any>;
			public static any(thisany: java.lang.Iterable<any>, predicate: kotlin.jvm.functions.Function1<any,any>): boolean;
			public static plus(thisplus: java.lang.Iterable<any>, element: any): java.util.List<any>;
			public static sumOfShort(thissum: java.lang.Iterable<java.lang.Short>): number;
			public static minByOrNull(thisminByOrNull: java.lang.Iterable<any>, selector: kotlin.jvm.functions.Function1<any,any>): any;
			public static sumByDouble(thissumByDouble: java.lang.Iterable<any>, selector: kotlin.jvm.functions.Function1<any,any>): number;
			public static any(thisany: java.lang.Iterable<any>): boolean;
			public static mapIndexed(thismapIndexed: java.lang.Iterable<any>, transform: kotlin.jvm.functions.Function2<any,any,any>): java.util.List<any>;
			public static associateWith(thisassociateWith: java.lang.Iterable<any>, valueSelector: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			public static toMutableList(thistoMutableList: java.util.Collection<any>): java.util.List<any>;
			public static zipWithNext(thiszipWithNext: java.lang.Iterable<any>, transform: kotlin.jvm.functions.Function2<any,any,any>): java.util.List<any>;
			public static single(thissingle: java.util.List<any>): any;
			public static slice(thisslice: java.util.List<any>, indices: kotlin.ranges.IntRange): java.util.List<any>;
			public static runningFold(thisrunningFold: java.lang.Iterable<any>, initial: any, operation: kotlin.jvm.functions.Function2<any,any,any>): java.util.List<any>;
			/** @deprecated */
			public static scanReduce(thisscanReduce: java.lang.Iterable<any>, operation: kotlin.jvm.functions.Function2<any,any,any>): java.util.List<any>;
			public static map(thismap: java.lang.Iterable<any>, transform: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static reduceRightOrNull(thisreduceRightOrNull: java.util.List<any>, operation: kotlin.jvm.functions.Function2<any,any,any>): any;
			public static indexOfLast(thisindexOfLast: java.lang.Iterable<any>, predicate: kotlin.jvm.functions.Function1<any,any>): number;
			public static dropWhile(thisdropWhile: java.lang.Iterable<any>, predicate: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static toMutableSet(thistoMutableSet: java.lang.Iterable<any>): java.util.Set<any>;
			public static foldIndexed(thisfoldIndexed: java.lang.Iterable<any>, initial: any, operation: kotlin.jvm.functions.Function3<any,any,any,any>): any;
			public static filterIndexedTo(thisfilterIndexedTo: java.lang.Iterable<any>, destination: java.util.Collection<any>, predicate: kotlin.jvm.functions.Function2<any,any,any>): java.util.Collection<any>;
			public static toIntArray(thistoIntArray: java.util.Collection<java.lang.Integer>): native.Array<number>;
			public static distinctBy(thisdistinctBy: java.lang.Iterable<any>, selector: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static asSequence(thisasSequence: java.lang.Iterable<any>): kotlin.sequences.Sequence<any>;
			public static withIndex(thiswithIndex: java.lang.Iterable<any>): java.lang.Iterable<any>;
			public static reduceIndexedOrNull(thisreduceIndexedOrNull: java.lang.Iterable<any>, operation: kotlin.jvm.functions.Function3<any,any,any,any>): any;
			public static indexOfFirst(thisindexOfFirst: java.lang.Iterable<any>, predicate: kotlin.jvm.functions.Function1<any,any>): number;
			public static plus(thisplus: java.lang.Iterable<any>, elements: native.Array<any>): java.util.List<any>;
			public static sumOfByte(thissum: java.lang.Iterable<java.lang.Byte>): number;
			public static associateByTo(thisassociateByTo: java.lang.Iterable<any>, destination: java.util.Map<any,any>, keySelector: kotlin.jvm.functions.Function1<any,any>, valueTransform: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			public static singleOrNull(thissingleOrNull: java.lang.Iterable<any>): any;
			public static requireNoNulls(thisrequireNoNulls: java.lang.Iterable<any>): java.lang.Iterable<any>;
			public static minOrNull(thisminOrNull: java.lang.Iterable<java.lang.Double>): java.lang.Double;
			public static lastOrNull(thislastOrNull: java.lang.Iterable<any>): any;
			public static toSet(thistoSet: java.lang.Iterable<any>): java.util.Set<any>;
			public static forEachIndexed(thisforEachIndexed: java.lang.Iterable<any>, action: kotlin.jvm.functions.Function2<any,any,any>): void;
			public static takeLast(thistakeLast: java.util.List<any>, n: number): java.util.List<any>;
			public static last(thislast: java.lang.Iterable<any>): any;
			public static firstOrNull(thisfirstOrNull: java.lang.Iterable<any>, predicate: kotlin.jvm.functions.Function1<any,any>): any;
			/** @deprecated */
			public static max(thismax: java.lang.Iterable<java.lang.Double>): java.lang.Double;
			public static plus(thisplus: java.util.Collection<any>, elements: kotlin.sequences.Sequence<any>): java.util.List<any>;
			public static takeWhile(thistakeWhile: java.lang.Iterable<any>, predicate: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static union(thisunion: java.lang.Iterable<any>, other: java.lang.Iterable<any>): java.util.Set<any>;
			public static indexOfLast(thisindexOfLast: java.util.List<any>, predicate: kotlin.jvm.functions.Function1<any,any>): number;
			public static randomOrNull(thisrandomOrNull: java.util.Collection<any>, random: kotlin.random.Random): any;
			public static windowed(thiswindowed: java.lang.Iterable<any>, size: number, step: number, partialWindows: boolean, transform: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static mapNotNullTo(thismapNotNullTo: java.lang.Iterable<any>, destination: java.util.Collection<any>, transform: kotlin.jvm.functions.Function1<any,any>): java.util.Collection<any>;
			public static runningFoldIndexed(thisrunningFoldIndexed: java.lang.Iterable<any>, initial: any, operation: kotlin.jvm.functions.Function3<any,any,any,any>): java.util.List<any>;
			public static averageOfLong(thisaverage: java.lang.Iterable<java.lang.Long>): number;
			public static partition(thispartition: java.lang.Iterable<any>, predicate: kotlin.jvm.functions.Function1<any,any>): kotlin.Pair<any,any>;
			public static associate(thisassociate: java.lang.Iterable<any>, transform: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			public static flatMapSequence(thisflatMap: java.lang.Iterable<any>, transform: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static chunked(thischunked: java.lang.Iterable<any>, size: number): java.util.List<any>;
			public static reduceIndexed(thisreduceIndexed: java.lang.Iterable<any>, operation: kotlin.jvm.functions.Function3<any,any,any,any>): any;
			public static elementAt(thiselementAt: java.lang.Iterable<any>, index: number): any;
			public static sortBy(thissortBy: java.util.List<any>, selector: kotlin.jvm.functions.Function1<any,any>): void;
			public static toHashSet(thistoHashSet: java.lang.Iterable<any>): java.util.HashSet<any>;
			public static plus(thisplus: java.util.Collection<any>, element: any): java.util.List<any>;
			public static single(thissingle: java.lang.Iterable<any>): any;
			public static plus(thisplus: java.lang.Iterable<any>, elements: java.lang.Iterable<any>): java.util.List<any>;
			/** @deprecated */
			public static maxWith(thismaxWith: java.lang.Iterable<any>, comparator: java.util.Comparator<any>): any;
			public static filterNotNullTo(thisfilterNotNullTo: java.lang.Iterable<any>, destination: java.util.Collection<any>): java.util.Collection<any>;
			public static random(thisrandom: java.util.Collection<any>, random: kotlin.random.Random): any;
			public static subtract(thissubtract: java.lang.Iterable<any>, other: java.lang.Iterable<any>): java.util.Set<any>;
			/** @deprecated */
			public static minWith(thisminWith: java.lang.Iterable<any>, comparator: java.util.Comparator<any>): any;
			public static minOrNull(thisminOrNull: java.lang.Iterable<java.lang.Float>): java.lang.Float;
			public static dropLastWhile(thisdropLastWhile: java.util.List<any>, predicate: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static withIndex(thiswithIndex: java.util.Iterator<any>): java.util.Iterator<any>;
			public static foldRightIndexed(thisfoldRightIndexed: java.util.List<any>, initial: any, operation: kotlin.jvm.functions.Function3<any,any,any,any>): any;
			public static lastOrNull(thislastOrNull: java.util.List<any>): any;
			public static sumOfFloat(thissum: java.lang.Iterable<java.lang.Float>): number;
			public static reduceRightIndexedOrNull(thisreduceRightIndexedOrNull: java.util.List<any>, operation: kotlin.jvm.functions.Function3<any,any,any,any>): any;
			public static lastOrNull(thislastOrNull: java.util.List<any>, predicate: kotlin.jvm.functions.Function1<any,any>): any;
			public static lastOrNull(thislastOrNull: java.lang.Iterable<any>, predicate: kotlin.jvm.functions.Function1<any,any>): any;
			public static elementAtOrElse(thiselementAtOrElse: java.lang.Iterable<any>, index: number, defaultValue: kotlin.jvm.functions.Function1<any,any>): any;
			public static mapIndexedNotNullTo(thismapIndexedNotNullTo: java.lang.Iterable<any>, destination: java.util.Collection<any>, transform: kotlin.jvm.functions.Function2<any,any,any>): java.util.Collection<any>;
			/** @deprecated */
			public static min(thismin: java.lang.Iterable<any>): java.lang.Comparable<any>;
			public static fold(thisfold: java.lang.Iterable<any>, initial: any, operation: kotlin.jvm.functions.Function2<any,any,any>): any;
			public static take(thistake: java.lang.Iterable<any>, n: number): java.util.List<any>;
			public static first(thisfirst: java.lang.Iterable<any>): any;
			/** @deprecated */
			public static max(thismax: java.lang.Iterable<any>): java.lang.Comparable<any>;
			public static indexOf(thisindexOf: java.lang.Iterable<any>, element: any): number;
			public static runningReduceIndexed(thisrunningReduceIndexed: java.lang.Iterable<any>, operation: kotlin.jvm.functions.Function3<any,any,any,any>): java.util.List<any>;
			public constructor();
			public static sumBy(thissumBy: java.lang.Iterable<any>, selector: kotlin.jvm.functions.Function1<any,any>): number;
			public static slice(thisslice: java.util.List<any>, indices: java.lang.Iterable<any>): java.util.List<any>;
			public static scanIndexed(thisscanIndexed: java.lang.Iterable<any>, initial: any, operation: kotlin.jvm.functions.Function3<any,any,any,any>): java.util.List<any>;
			public static takeLastWhile(thistakeLastWhile: java.util.List<any>, predicate: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static maxOrNull(thismaxOrNull: java.lang.Iterable<java.lang.Float>): java.lang.Float;
			public static reduceOrNull(thisreduceOrNull: java.lang.Iterable<any>, operation: kotlin.jvm.functions.Function2<any,any,any>): any;
			public static foldRight(thisfoldRight: java.util.List<any>, initial: any, operation: kotlin.jvm.functions.Function2<any,any,any>): any;
			public static sortedDescending(thissortedDescending: java.lang.Iterable<any>): java.util.List<any>;
			public static singleOrNull(thissingleOrNull: java.util.List<any>): any;
			public static joinTo(thisjoinTo: java.lang.Iterable<any>, buffer: java.lang.Appendable, separator: string, prefix: string, postfix: string, limit: number, truncated: string, transform: kotlin.jvm.functions.Function1<any,any>): java.lang.Appendable;
			/** @deprecated */
			public static maxBy(thismaxBy: java.lang.Iterable<any>, selector: kotlin.jvm.functions.Function1<any,any>): any;
			public static elementAtOrNull(thiselementAtOrNull: java.lang.Iterable<any>, index: number): any;
			/** @deprecated */
			public static minBy(thisminBy: java.lang.Iterable<any>, selector: kotlin.jvm.functions.Function1<any,any>): any;
			public static sumOfInt(thissum: java.lang.Iterable<java.lang.Integer>): number;
			public static toShortArray(thistoShortArray: java.util.Collection<java.lang.Short>): native.Array<number>;
			public static singleOrNull(thissingleOrNull: java.lang.Iterable<any>, predicate: kotlin.jvm.functions.Function1<any,any>): any;
			public static dropLast(thisdropLast: java.util.List<any>, n: number): java.util.List<any>;
			public static filterTo(thisfilterTo: java.lang.Iterable<any>, destination: java.util.Collection<any>, predicate: kotlin.jvm.functions.Function1<any,any>): java.util.Collection<any>;
			public static runningReduce(thisrunningReduce: java.lang.Iterable<any>, operation: kotlin.jvm.functions.Function2<any,any,any>): java.util.List<any>;
			public static first(thisfirst: java.lang.Iterable<any>, predicate: kotlin.jvm.functions.Function1<any,any>): any;
			public static toCharArray(thistoCharArray: java.util.Collection<java.lang.Character>): native.Array<string>;
			public static last(thislast: java.util.List<any>, predicate: kotlin.jvm.functions.Function1<any,any>): any;
			public static groupByTo(thisgroupByTo: java.lang.Iterable<any>, destination: java.util.Map<any,any>, keySelector: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			public static mapIndexedTo(thismapIndexedTo: java.lang.Iterable<any>, destination: java.util.Collection<any>, transform: kotlin.jvm.functions.Function2<any,any,any>): java.util.Collection<any>;
			public static toBooleanArray(thistoBooleanArray: java.util.Collection<java.lang.Boolean>): native.Array<boolean>;
			public static groupBy(thisgroupBy: java.lang.Iterable<any>, keySelector: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			public static filter(thisfilter: java.lang.Iterable<any>, predicate: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static joinToString(thisjoinToString: java.lang.Iterable<any>, separator: string, prefix: string, postfix: string, limit: number, truncated: string, transform: kotlin.jvm.functions.Function1<any,any>): string;
			public static lastIndexOf(thislastIndexOf: java.lang.Iterable<any>, element: any): number;
			/** @deprecated */
			public static min(thismin: java.lang.Iterable<java.lang.Double>): java.lang.Double;
			public static mapNotNull(thismapNotNull: java.lang.Iterable<any>, transform: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static getOrNull(thisgetOrNull: java.util.List<any>, index: number): any;
			public static reduceRightIndexed(thisreduceRightIndexed: java.util.List<any>, operation: kotlin.jvm.functions.Function3<any,any,any,any>): any;
			public static zip(thiszip: java.lang.Iterable<any>, other: java.lang.Iterable<any>, transform: kotlin.jvm.functions.Function2<any,any,any>): java.util.List<any>;
			public static toLongArray(thistoLongArray: java.util.Collection<java.lang.Long>): native.Array<number>;
			public static firstOrNull(thisfirstOrNull: java.util.List<any>): any;
			public static zip(thiszip: java.lang.Iterable<any>, other: native.Array<any>): java.util.List<any>;
			public static count(thiscount: java.lang.Iterable<any>, predicate: kotlin.jvm.functions.Function1<any,any>): number;
			public static maxByOrNull(thismaxByOrNull: java.lang.Iterable<any>, selector: kotlin.jvm.functions.Function1<any,any>): any;
			public static associateBy(thisassociateBy: java.lang.Iterable<any>, keySelector: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			public static mapIndexedNotNull(thismapIndexedNotNull: java.lang.Iterable<any>, transform: kotlin.jvm.functions.Function2<any,any,any>): java.util.List<any>;
			public static scan(thisscan: java.lang.Iterable<any>, initial: any, operation: kotlin.jvm.functions.Function2<any,any,any>): java.util.List<any>;
			public static zip(thiszip: java.lang.Iterable<any>, other: java.lang.Iterable<any>): java.util.List<any>;
			public static minus(thisminus: java.lang.Iterable<any>, elements: java.lang.Iterable<any>): java.util.List<any>;
			public static flatMapTo(thisflatMapTo: java.lang.Iterable<any>, destination: java.util.Collection<any>, transform: kotlin.jvm.functions.Function1<any,any>): java.util.Collection<any>;
			public static maxOrNull(thismaxOrNull: java.lang.Iterable<any>): java.lang.Comparable<any>;
			public static toList(thistoList: java.lang.Iterable<any>): java.util.List<any>;
			public static chunked(thischunked: java.lang.Iterable<any>, size: number, transform: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static last(thislast: java.lang.Iterable<any>, predicate: kotlin.jvm.functions.Function1<any,any>): any;
			public static distinct(thisdistinct: java.lang.Iterable<any>): java.util.List<any>;
			public static averageOfDouble(thisaverage: java.lang.Iterable<java.lang.Double>): number;
			public static reduce(thisreduce: java.lang.Iterable<any>, operation: kotlin.jvm.functions.Function2<any,any,any>): any;
			public static minOrNull(thisminOrNull: java.lang.Iterable<any>): java.lang.Comparable<any>;
			public static indexOfFirst(thisindexOfFirst: java.util.List<any>, predicate: kotlin.jvm.functions.Function1<any,any>): number;
			public static associateBy(thisassociateBy: java.lang.Iterable<any>, keySelector: kotlin.jvm.functions.Function1<any,any>, valueTransform: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			public static maxWithOrNull(thismaxWithOrNull: java.lang.Iterable<any>, comparator: java.util.Comparator<any>): any;
			public static sortDescending(thissortDescending: java.util.List<any>): void;
			public static filterNot(thisfilterNot: java.lang.Iterable<any>, predicate: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static plus(thisplus: java.lang.Iterable<any>, elements: kotlin.sequences.Sequence<any>): java.util.List<any>;
			public static requireNoNulls(thisrequireNoNulls: java.util.List<any>): java.util.List<any>;
			public static sortedBy(thissortedBy: java.lang.Iterable<any>, selector: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static flatMapSequenceTo(thisflatMapTo: java.lang.Iterable<any>, destination: java.util.Collection<any>, transform: kotlin.jvm.functions.Function1<any,any>): java.util.Collection<any>;
			public static associateWithTo(thisassociateWithTo: java.lang.Iterable<any>, destination: java.util.Map<any,any>, valueSelector: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			public static sortedWith(thissortedWith: java.lang.Iterable<any>, comparator: java.util.Comparator<any>): java.util.List<any>;
			public static onEachIndexed(thisonEachIndexed: java.lang.Iterable<any>, action: kotlin.jvm.functions.Function2<any,any,any>): java.lang.Iterable<any>;
			public static averageOfInt(thisaverage: java.lang.Iterable<java.lang.Integer>): number;
			public static sortedByDescending(thissortedByDescending: java.lang.Iterable<any>, selector: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static firstOrNull(thisfirstOrNull: java.lang.Iterable<any>): any;
			public static count(thiscount: java.lang.Iterable<any>): number;
			public static groupingBy(thisgroupingBy: java.lang.Iterable<any>, keySelector: kotlin.jvm.functions.Function1<any,any>): kotlin.collections.Grouping<any,any>;
			public static last(thislast: java.util.List<any>): any;
			public static indexOf(thisindexOf: java.util.List<any>, element: any): number;
			public static reversed(thisreversed: java.lang.Iterable<any>): java.util.List<any>;
			public static intersect(thisintersect: java.lang.Iterable<any>, other: java.lang.Iterable<any>): java.util.Set<any>;
			public static groupByTo(thisgroupByTo: java.lang.Iterable<any>, destination: java.util.Map<any,any>, keySelector: kotlin.jvm.functions.Function1<any,any>, valueTransform: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			public static shuffle(thisshuffle: java.util.List<any>, random: kotlin.random.Random): void;
			public static averageOfFloat(thisaverage: java.lang.Iterable<java.lang.Float>): number;
			public static plus(thisplus: java.util.Collection<any>, elements: native.Array<any>): java.util.List<any>;
			public static minWithOrNull(thisminWithOrNull: java.lang.Iterable<any>, comparator: java.util.Comparator<any>): any;
			/** @deprecated */
			public static scanReduceIndexed(thisscanReduceIndexed: java.lang.Iterable<any>, operation: kotlin.jvm.functions.Function3<any,any,any,any>): java.util.List<any>;
			public static sumOfDouble(thissum: java.lang.Iterable<java.lang.Double>): number;
			public static toDoubleArray(thistoDoubleArray: java.util.Collection<java.lang.Double>): native.Array<number>;
			public static groupBy(thisgroupBy: java.lang.Iterable<any>, keySelector: kotlin.jvm.functions.Function1<any,any>, valueTransform: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			public static maxOrNull(thismaxOrNull: java.lang.Iterable<java.lang.Double>): java.lang.Double;
			public static minus(thisminus: java.lang.Iterable<any>, elements: kotlin.sequences.Sequence<any>): java.util.List<any>;
			public static onEach(thisonEach: java.lang.Iterable<any>, action: kotlin.jvm.functions.Function1<any,any>): java.lang.Iterable<any>;
			public static none(thisnone: java.lang.Iterable<any>): boolean;
			public static zipWithNext(thiszipWithNext: java.lang.Iterable<any>): java.util.List<any>;
			public static averageOfShort(thisaverage: java.lang.Iterable<java.lang.Short>): number;
			public static all(thisall: java.lang.Iterable<any>, predicate: kotlin.jvm.functions.Function1<any,any>): boolean;
		}
	}
}

declare module kotlin {
	export module collections {
		export abstract class DoubleIterator extends java.lang.Object {
			public static class: java.lang.Class<kotlin.collections.DoubleIterator>;
			public nextDouble(): number;
			public next(): java.lang.Double;
			public constructor();
			public remove(): void;
		}
	}
}

declare module kotlin {
	export module collections {
		export class EmptyIterator extends java.lang.Object implements java.util.ListIterator<any>, kotlin.jvm.internal.markers.KMappedMarker {
			public static class: java.lang.Class<kotlin.collections.EmptyIterator>;
			public static INSTANCE: kotlin.collections.EmptyIterator;
			public add(void0: java.lang.Void): void;
			public hasNext(): boolean;
			public nextIndex(): number;
			public remove(): void;
			public next(): java.lang.Void;
			public next(): any;
			public previous(): any;
			public add(object0: any): void;
			public previous(): java.lang.Void;
			public hasPrevious(): boolean;
			public previousIndex(): number;
			public set(object0: any): void;
			public set(void0: java.lang.Void): void;
		}
	}
}

declare module kotlin {
	export module collections {
		export class EmptyList extends java.lang.Object implements java.util.List<any>, java.io.Serializable, java.util.RandomAccess, kotlin.jvm.internal.markers.KMappedMarker {
			public static class: java.lang.Class<kotlin.collections.EmptyList>;
			public static INSTANCE: kotlin.collections.EmptyList;
			public get(index: number): java.lang.Void;
			public get(int0: number): any;
			public subList(fromIndex: number, toIndex: number): java.util.List<any>;
			public subList(fromIndex: number, toIndex: number): java.util.List<any>;
			public replaceAll(operator: any /* any*/): void;
			public add(int0: number, object1: any): void;
			public remove(object0: any): boolean;
			public lastIndexOf(element: java.lang.Void): number;
			public equals(other: any): boolean;
			public sort(c: java.util.Comparator<any>): void;
			public listIterator(index: number): java.util.ListIterator<any>;
			public clear(): void;
			public lastIndexOf(object0: any): number;
			public forEach(action: any /* any*/): void;
			public add(void0: java.lang.Void): boolean;
			public addAll(collection0: java.util.Collection<any>): boolean;
			public spliterator(): java.util.Spliterator<any>;
			public iterator(): java.util.Iterator<any>;
			public toArray(): native.Array<any>;
			public remove(int0: number): any;
			public stream(): java.util.stream.Stream<any>;
			public add(object0: any): boolean;
			public indexOf(object0: any): number;
			public listIterator(): java.util.ListIterator<any>;
			public contains(element: java.lang.Void): boolean;
			public getSize(): number;
			public set(int0: number, object1: any): any;
			public remove(int0: number): java.lang.Void;
			public addAll(int0: number, collection1: java.util.Collection<any>): boolean;
			public addAll(collection0: java.util.Collection<any>): boolean;
			public removeIf(filter: any /* any*/): boolean;
			public toArray(objects0: native.Array<any>): native.Array<any>;
			public contains(object0: any): boolean;
			public iterator(): java.util.Iterator<any>;
			public size(): number;
			public isEmpty(): boolean;
			public listIterator(index: number): java.util.ListIterator<any>;
			public containsAll(elements: java.util.Collection<any>): boolean;
			public add(int0: number, void1: java.lang.Void): void;
			public removeAll(collection0: java.util.Collection<any>): boolean;
			public addAll(int0: number, collection1: java.util.Collection<any>): boolean;
			public retainAll(collection0: java.util.Collection<any>): boolean;
			public toString(): string;
			public indexOf(element: java.lang.Void): number;
			public equals(obj: any): boolean;
			public removeAll(collection0: java.util.Collection<any>): boolean;
			public set(int0: number, void1: java.lang.Void): java.lang.Void;
			public listIterator(): java.util.ListIterator<any>;
			public containsAll(elements: java.util.Collection<any>): boolean;
			public retainAll(collection0: java.util.Collection<any>): boolean;
			public parallelStream(): java.util.stream.Stream<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module collections {
		export class EmptyMap extends java.lang.Object implements java.util.Map<any,any>, java.io.Serializable, kotlin.jvm.internal.markers.KMappedMarker {
			public static class: java.lang.Class<kotlin.collections.EmptyMap>;
			public static INSTANCE: kotlin.collections.EmptyMap;
			public replace(key: any, oldValue: any, newValue: any): boolean;
			public computeIfPresent(key: any, remappingFunction: any /* any<any,any,any>*/): any;
			public getEntries(): java.util.Set<java.util.Map.Entry<any,any>>;
			public replace(key: any, value: any): any;
			public containsValue(object0: any): boolean;
			public getSize(): number;
			public containsKey(key: any): boolean;
			public values(): java.util.Collection<any>;
			public put(object0: any, object1: any): any;
			public forEach(action: any /* any<any,any>*/): void;
			public compute(key: any, remappingFunction: any /* any<any,any,any>*/): any;
			public equals(other: any): boolean;
			public putIfAbsent(key: any, value: any): any;
			public putAll(map0: java.util.Map<any,any>): void;
			public get(object0: any): any;
			public values(): java.util.Collection<any>;
			public merge(key: any, value: any, remappingFunction: any /* any<any,any,any>*/): any;
			public get(key: any): java.lang.Void;
			public clear(): void;
			public size(): number;
			public isEmpty(): boolean;
			public keySet(): java.util.Set<any>;
			public entrySet(): java.util.Set<java.util.Map.Entry<any,any>>;
			public getValues(): java.util.Collection<any>;
			public computeIfAbsent(key: any, mappingFunction: any /* any<any,any>*/): any;
			public replaceAll(function0: any /* any<any,any,any>*/): void;
			public entrySet(): java.util.Set<java.util.Map.Entry<any,any>>;
			public getOrDefault(key: any, defaultValue: any): any;
			public toString(): string;
			public equals(obj: any): boolean;
			public getKeys(): java.util.Set<any>;
			public putAll(map0: java.util.Map<any,any>): void;
			public containsValue(value: java.lang.Void): boolean;
			public remove(key: any, value: any): boolean;
			public put(object0: any, void1: java.lang.Void): java.lang.Void;
			public hashCode(): number;
			public remove(object0: any): any;
		}
	}
}

declare module kotlin {
	export module collections {
		export class EmptySet extends java.lang.Object implements java.util.Set<any>, java.io.Serializable, kotlin.jvm.internal.markers.KMappedMarker {
			public static class: java.lang.Class<kotlin.collections.EmptySet>;
			public static INSTANCE: kotlin.collections.EmptySet;
			public toArray(): native.Array<any>;
			public stream(): java.util.stream.Stream<any>;
			public add(object0: any): boolean;
			public contains(element: java.lang.Void): boolean;
			public getSize(): number;
			public remove(object0: any): boolean;
			public equals(other: any): boolean;
			public addAll(collection0: java.util.Collection<any>): boolean;
			public removeIf(filter: any /* any*/): boolean;
			public toArray(objects0: native.Array<any>): native.Array<any>;
			public contains(object0: any): boolean;
			public iterator(): java.util.Iterator<any>;
			public clear(): void;
			public size(): number;
			public isEmpty(): boolean;
			public containsAll(elements: java.util.Collection<any>): boolean;
			public forEach(action: any /* any*/): void;
			public removeAll(collection0: java.util.Collection<any>): boolean;
			public retainAll(collection0: java.util.Collection<any>): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public removeAll(collection0: java.util.Collection<any>): boolean;
			public containsAll(elements: java.util.Collection<any>): boolean;
			public add(void0: java.lang.Void): boolean;
			public addAll(collection0: java.util.Collection<any>): boolean;
			public retainAll(collection0: java.util.Collection<any>): boolean;
			public spliterator(): java.util.Spliterator<any>;
			public iterator(): java.util.Iterator<any>;
			public parallelStream(): java.util.stream.Stream<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module collections {
		export abstract class FloatIterator extends java.lang.Object {
			public static class: java.lang.Class<kotlin.collections.FloatIterator>;
			public nextFloat(): number;
			public constructor();
			public remove(): void;
			public next(): java.lang.Float;
		}
	}
}

declare module kotlin {
	export module collections {
		export class Grouping<T, K>  extends java.lang.Object {
			public static class: java.lang.Class<kotlin.collections.Grouping<any,any>>;
			/**
			 * Constructs a new instance of the kotlin.collections.Grouping<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				sourceIterator(): java.util.Iterator<T>;
				keyOf(object0: T): K;
			});
			public constructor();
			public keyOf(object0: T): K;
			public sourceIterator(): java.util.Iterator<T>;
		}
	}
}

declare module kotlin {
	export module collections {
		export class GroupingKt extends kotlin.collections.GroupingKt__GroupingKt {
			public static class: java.lang.Class<kotlin.collections.GroupingKt>;
		}
	}
}

declare module kotlin {
	export module collections {
		export class GroupingKt__GroupingJVMKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.collections.GroupingKt__GroupingJVMKt>;
			public static eachCount(thiseachCount: kotlin.collections.Grouping<any,any>): java.util.Map<any,any>;
			public constructor();
		}
	}
}

declare module kotlin {
	export module collections {
		export class GroupingKt__GroupingKt extends kotlin.collections.GroupingKt__GroupingJVMKt {
			public static class: java.lang.Class<kotlin.collections.GroupingKt__GroupingKt>;
			public static fold(thisfold: kotlin.collections.Grouping<any,any>, initialValue: any, operation: kotlin.jvm.functions.Function2<any,any,any>): java.util.Map<any,any>;
			public static aggregate(thisaggregate: kotlin.collections.Grouping<any,any>, operation: kotlin.jvm.functions.Function4<any,any,any,any,any>): java.util.Map<any,any>;
			public static reduce(thisreduce: kotlin.collections.Grouping<any,any>, operation: kotlin.jvm.functions.Function3<any,any,any,any>): java.util.Map<any,any>;
			public static foldTo(thisfoldTo: kotlin.collections.Grouping<any,any>, destination: java.util.Map<any,any>, initialValue: any, operation: kotlin.jvm.functions.Function2<any,any,any>): java.util.Map<any,any>;
			public static aggregateTo(thisaggregateTo: kotlin.collections.Grouping<any,any>, destination: java.util.Map<any,any>, operation: kotlin.jvm.functions.Function4<any,any,any,any,any>): java.util.Map<any,any>;
			public static fold(thisfold: kotlin.collections.Grouping<any,any>, initialValueSelector: kotlin.jvm.functions.Function2<any,any,any>, operation: kotlin.jvm.functions.Function3<any,any,any,any>): java.util.Map<any,any>;
			public static reduceTo(thisreduceTo: kotlin.collections.Grouping<any,any>, destination: java.util.Map<any,any>, operation: kotlin.jvm.functions.Function3<any,any,any,any>): java.util.Map<any,any>;
			public static eachCountTo(thiseachCountTo: kotlin.collections.Grouping<any,any>, destination: java.util.Map<any,any>): java.util.Map<any,any>;
			public constructor();
			public static foldTo(thisfoldTo: kotlin.collections.Grouping<any,any>, destination: java.util.Map<any,any>, initialValueSelector: kotlin.jvm.functions.Function2<any,any,any>, operation: kotlin.jvm.functions.Function3<any,any,any,any>): java.util.Map<any,any>;
		}
	}
}

declare module kotlin {
	export module collections {
		export class IndexedValue<T>  extends java.lang.Object {
			public static class: java.lang.Class<kotlin.collections.IndexedValue<any>>;
			public getIndex(): number;
			public toString(): string;
			public equals(obj: any): boolean;
			public constructor(index: number, value: T);
			public component2(): T;
			public getValue(): T;
			public component1(): number;
			public copy(index: number, value: T): kotlin.collections.IndexedValue<T>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module collections {
		export class IndexingIterable<T>  extends java.lang.Object {
			public static class: java.lang.Class<kotlin.collections.IndexingIterable<any>>;
			public iterator(): java.util.Iterator<T>;
			public iterator(): java.util.Iterator<kotlin.collections.IndexedValue<T>>;
			public forEach(action: any /* any*/): void;
			public spliterator(): java.util.Spliterator<T>;
			public constructor(iteratorFactory: kotlin.jvm.functions.Function0<any>);
		}
	}
}

declare module kotlin {
	export module collections {
		export class IndexingIterator<T>  extends java.lang.Object {
			public static class: java.lang.Class<kotlin.collections.IndexingIterator<any>>;
			public constructor(iterator: java.util.Iterator<any>);
			public hasNext(): boolean;
			public next(): kotlin.collections.IndexedValue<T>;
			public remove(): void;
		}
	}
}

declare module kotlin {
	export module collections {
		export abstract class IntIterator extends java.lang.Object {
			public static class: java.lang.Class<kotlin.collections.IntIterator>;
			public next(): java.lang.Integer;
			public nextInt(): number;
			public constructor();
			public remove(): void;
		}
	}
}

declare module kotlin {
	export module collections {
		export abstract class LongIterator extends java.lang.Object {
			public static class: java.lang.Class<kotlin.collections.LongIterator>;
			public constructor();
			public next(): java.lang.Long;
			public nextLong(): number;
			public remove(): void;
		}
	}
}

declare module kotlin {
	export module collections {
		export class MapAccessorsKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.collections.MapAccessorsKt>;
		}
	}
}

declare module kotlin {
	export module collections {
		export class MapWithDefault<K, V>  extends java.lang.Object {
			public static class: java.lang.Class<kotlin.collections.MapWithDefault<any,any>>;
			/**
			 * Constructs a new instance of the kotlin.collections.MapWithDefault<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getMap(): java.util.Map<K,V>;
				getOrImplicitDefault(object0: K): V;
				size(): number;
				isEmpty(): boolean;
				containsKey(object0: any): boolean;
				containsValue(object0: any): boolean;
				get(object0: any): V;
				put(object0: K, object1: V): V;
				remove(object0: any): V;
				putAll(map0: java.util.Map<any,any>): void;
				clear(): void;
				keySet(): java.util.Set<K>;
				values(): java.util.Collection<V>;
				entrySet(): java.util.Set<java.util.Map.Entry<K,V>>;
				equals(object0: any): boolean;
				hashCode(): number;
				getOrDefault(key: any, defaultValue: V): V;
				forEach(action: any /* any<any,any>*/): void;
				replaceAll(function0: any /* any<any,any,any>*/): void;
				putIfAbsent(key: K, value: V): V;
				remove(key: any, value: any): boolean;
				replace(key: K, oldValue: V, newValue: V): boolean;
				replace(key: K, value: V): V;
				computeIfAbsent(key: K, mappingFunction: any /* any<any,any>*/): V;
				computeIfPresent(key: K, remappingFunction: any /* any<any,any,any>*/): V;
				compute(key: K, remappingFunction: any /* any<any,any,any>*/): V;
				merge(key: K, value: V, remappingFunction: any /* any<any,any,any>*/): V;
			});
			public constructor();
			public computeIfAbsent(key: K, mappingFunction: any /* any<any,any>*/): V;
			public replace(key: K, value: V): V;
			public containsValue(object0: any): boolean;
			public merge(key: K, value: V, remappingFunction: any /* any<any,any,any>*/): V;
			public forEach(action: any /* any<any,any>*/): void;
			public keySet(): java.util.Set<K>;
			public values(): java.util.Collection<V>;
			public containsKey(object0: any): boolean;
			public compute(key: K, remappingFunction: any /* any<any,any,any>*/): V;
			public clear(): void;
			public replace(key: K, oldValue: V, newValue: V): boolean;
			public get(object0: any): V;
			public getOrDefault(key: any, defaultValue: V): V;
			public size(): number;
			public isEmpty(): boolean;
			public getMap(): java.util.Map<K,V>;
			public putIfAbsent(key: K, value: V): V;
			public computeIfPresent(key: K, remappingFunction: any /* any<any,any,any>*/): V;
			public getOrImplicitDefault(object0: K): V;
			public replaceAll(function0: any /* any<any,any,any>*/): void;
			public equals(obj: any): boolean;
			public putAll(map0: java.util.Map<any,any>): void;
			public remove(object0: any): V;
			public remove(key: any, value: any): boolean;
			public entrySet(): java.util.Set<java.util.Map.Entry<K,V>>;
			public put(object0: K, object1: V): V;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module collections {
		export class MapWithDefaultImpl<K, V>  extends kotlin.collections.MapWithDefault<any,any> {
			public static class: java.lang.Class<kotlin.collections.MapWithDefaultImpl<any,any>>;
			public replace(key: any, oldValue: any, newValue: any): boolean;
			public computeIfPresent(key: any, remappingFunction: any /* any<any,any,any>*/): any;
			public replace(key: any, value: any): any;
			public getSize(): number;
			public containsKey(key: any): boolean;
			public containsValue(value: any): boolean;
			public getEntries(): java.util.Set<java.util.Map.Entry<any,any>>;
			public put(object0: any, object1: any): any;
			public forEach(action: any /* any<any,any>*/): void;
			public compute(key: any, remappingFunction: any /* any<any,any,any>*/): any;
			public equals(other: any): boolean;
			public putIfAbsent(key: any, value: any): any;
			public values(): java.util.Collection<any>;
			public getValues(): java.util.Collection<any>;
			public merge(key: any, value: any, remappingFunction: any /* any<any,any,any>*/): any;
			public clear(): void;
			public get(key: any): any;
			public size(): number;
			public isEmpty(): boolean;
			public keySet(): java.util.Set<any>;
			public entrySet(): java.util.Set<java.util.Map.Entry<any,any>>;
			public getMap(): java.util.Map<any,any>;
			public computeIfAbsent(key: any, mappingFunction: any /* any<any,any>*/): any;
			public replaceAll(function0: any /* any<any,any,any>*/): void;
			public getOrDefault(key: any, defaultValue: any): any;
			public toString(): string;
			public equals(obj: any): boolean;
			public getKeys(): java.util.Set<any>;
			public putAll(map0: java.util.Map<any,any>): void;
			public remove(key: any, value: any): boolean;
			public getOrImplicitDefault(key: any): any;
			public constructor(map: java.util.Map<any,any>, default1: kotlin.jvm.functions.Function1<any,any>);
			public hashCode(): number;
			public remove(object0: any): any;
		}
	}
}

declare module kotlin {
	export module collections {
		export class MapsKt extends kotlin.collections.MapsKt___MapsKt {
			public static class: java.lang.Class<kotlin.collections.MapsKt>;
		}
	}
}

declare module kotlin {
	export module collections {
		export class MapsKt__MapWithDefaultKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.collections.MapsKt__MapWithDefaultKt>;
			public static getOrImplicitDefaultNullable(thisgetOrImplicitDefault: java.util.Map<any,any>, key: any): any;
			public static withDefault(thiswithDefault: java.util.Map<any,any>, defaultValue: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			public static withDefaultMutable(thiswithDefault: java.util.Map<any,any>, defaultValue: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			public constructor();
		}
	}
}

declare module kotlin {
	export module collections {
		export class MapsKt__MapsJVMKt extends kotlin.collections.MapsKt__MapWithDefaultKt {
			public static class: java.lang.Class<kotlin.collections.MapsKt__MapsJVMKt>;
			public static createMapBuilder(capacity: number): java.util.Map<any,any>;
			public static build(builder: java.util.Map<any,any>): java.util.Map<any,any>;
			public static toSortedMap(thistoSortedMap: java.util.Map<any,any>): java.util.SortedMap<any,any>;
			public static sortedMapOf(comparator: java.util.Comparator<any>, pairs: native.Array<kotlin.Pair<any,any>>): java.util.SortedMap<any,any>;
			public static mapCapacity(expectedSize: number): number;
			public static createMapBuilder(): java.util.Map<any,any>;
			public static toSingletonMap(thistoSingletonMap: java.util.Map<any,any>): java.util.Map<any,any>;
			public static getOrPut(thisgetOrPut: java.util.concurrent.ConcurrentMap<any,any>, key: any, defaultValue: kotlin.jvm.functions.Function0<any>): any;
			public static mapOf(pair: kotlin.Pair<any,any>): java.util.Map<any,any>;
			public static sortedMapOf(pairs: native.Array<kotlin.Pair<any,any>>): java.util.SortedMap<any,any>;
			public constructor();
			public static toSortedMap(thistoSortedMap: java.util.Map<any,any>, comparator: java.util.Comparator<any>): java.util.SortedMap<any,any>;
		}
	}
}

declare module kotlin {
	export module collections {
		export class MapsKt__MapsKt extends kotlin.collections.MapsKt__MapsJVMKt {
			public static class: java.lang.Class<kotlin.collections.MapsKt__MapsKt>;
			public static toMap(thistoMap: native.Array<kotlin.Pair<any,any>>, destination: java.util.Map<any,any>): java.util.Map<any,any>;
			public static toMutableMap(thistoMutableMap: java.util.Map<any,any>): java.util.Map<any,any>;
			public static filterKeys(thisfilterKeys: java.util.Map<any,any>, predicate: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			public static getOrPut(thisgetOrPut: java.util.concurrent.ConcurrentMap<any,any>, key: any, defaultValue: kotlin.jvm.functions.Function0<any>): any;
			public static minus(thisminus: java.util.Map<any,any>, keys: kotlin.sequences.Sequence<any>): java.util.Map<any,any>;
			public static minus(thisminus: java.util.Map<any,any>, keys: native.Array<any>): java.util.Map<any,any>;
			public static filterTo(thisfilterTo: java.util.Map<any,any>, destination: java.util.Map<any,any>, predicate: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			public static minus(thisminus: java.util.Map<any,any>, keys: java.lang.Iterable<any>): java.util.Map<any,any>;
			public static toMap(thistoMap: java.lang.Iterable<any>): java.util.Map<any,any>;
			public static plus(thisplus: java.util.Map<any,any>, map: java.util.Map<any,any>): java.util.Map<any,any>;
			public static optimizeReadOnlyMap(thisoptimizeReadOnlyMap: java.util.Map<any,any>): java.util.Map<any,any>;
			public static mapOf(pairs: native.Array<kotlin.Pair<any,any>>): java.util.Map<any,any>;
			public static toMap(thistoMap: native.Array<kotlin.Pair<any,any>>): java.util.Map<any,any>;
			public static mapKeys(thismapKeys: java.util.Map<any,any>, transform: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			public static mapOf(pair: kotlin.Pair<any,any>): java.util.Map<any,any>;
			public static toMap(thistoMap: java.util.Map<any,any>, destination: java.util.Map<any,any>): java.util.Map<any,any>;
			public static filter(thisfilter: java.util.Map<any,any>, predicate: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			public static mapValues(thismapValues: java.util.Map<any,any>, transform: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			public static getOrPut(thisgetOrPut: java.util.Map<any,any>, key: any, defaultValue: kotlin.jvm.functions.Function0<any>): any;
			public static hashMapOf(pairs: native.Array<kotlin.Pair<any,any>>): java.util.HashMap<any,any>;
			public static mapValuesTo(thismapValuesTo: java.util.Map<any,any>, destination: java.util.Map<any,any>, transform: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			public static toMap(thistoMap: java.lang.Iterable<any>, destination: java.util.Map<any,any>): java.util.Map<any,any>;
			public static plus(thisplus: java.util.Map<any,any>, pairs: java.lang.Iterable<any>): java.util.Map<any,any>;
			public static plus(thisplus: java.util.Map<any,any>, pair: kotlin.Pair<any,any>): java.util.Map<any,any>;
			public static mapKeysTo(thismapKeysTo: java.util.Map<any,any>, destination: java.util.Map<any,any>, transform: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			public static putAll(thisputAll: java.util.Map<any,any>, pairs: native.Array<kotlin.Pair<any,any>>): void;
			public static plus(thisplus: java.util.Map<any,any>, pairs: kotlin.sequences.Sequence<any>): java.util.Map<any,any>;
			public static minus(thisminus: java.util.Map<any,any>, key: any): java.util.Map<any,any>;
			public static filterNot(thisfilterNot: java.util.Map<any,any>, predicate: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			public static emptyMap(): java.util.Map<any,any>;
			public constructor();
			public static getValue(thisgetValue: java.util.Map<any,any>, key: any): any;
			public static putAll(thisputAll: java.util.Map<any,any>, pairs: java.lang.Iterable<any>): void;
			public static getOrElseNullable(thisgetOrElseNullable: java.util.Map<any,any>, key: any, defaultValue: kotlin.jvm.functions.Function0<any>): any;
			public static toMap(thistoMap: kotlin.sequences.Sequence<any>): java.util.Map<any,any>;
			public static toMap(thistoMap: kotlin.sequences.Sequence<any>, destination: java.util.Map<any,any>): java.util.Map<any,any>;
			public static plus(thisplus: java.util.Map<any,any>, pairs: native.Array<kotlin.Pair<any,any>>): java.util.Map<any,any>;
			public static putAll(thisputAll: java.util.Map<any,any>, pairs: kotlin.sequences.Sequence<any>): void;
			public static toMap(thistoMap: java.util.Map<any,any>): java.util.Map<any,any>;
			public static filterNotTo(thisfilterNotTo: java.util.Map<any,any>, destination: java.util.Map<any,any>, predicate: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			public static filterValues(thisfilterValues: java.util.Map<any,any>, predicate: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			public static linkedMapOf(pairs: native.Array<kotlin.Pair<any,any>>): java.util.LinkedHashMap<any,any>;
			public static mutableMapOf(pairs: native.Array<kotlin.Pair<any,any>>): java.util.Map<any,any>;
		}
	}
}

declare module kotlin {
	export module collections {
		export class MapsKt___MapsKt extends kotlin.collections.MapsKt__MapsKt {
			public static class: java.lang.Class<kotlin.collections.MapsKt___MapsKt>;
			/** @deprecated */
			public static minWith(thisminWith: java.util.Map<any,any>, comparator: java.util.Comparator<any>): java.util.Map.Entry<any,any>;
			public static forEach(thisforEach: java.util.Map<any,any>, action: kotlin.jvm.functions.Function1<any,any>): void;
			public static onEachIndexed(thisonEachIndexed: java.util.Map<any,any>, action: kotlin.jvm.functions.Function2<any,any,any>): java.util.Map<any,any>;
			public static asSequence(thisasSequence: java.util.Map<any,any>): kotlin.sequences.Sequence<any>;
			public static any(thisany: java.util.Map<any,any>, predicate: kotlin.jvm.functions.Function1<any,any>): boolean;
			public static mapNotNullTo(thismapNotNullTo: java.util.Map<any,any>, destination: java.util.Collection<any>, transform: kotlin.jvm.functions.Function1<any,any>): java.util.Collection<any>;
			public static none(thisnone: java.util.Map<any,any>): boolean;
			public static any(thisany: java.util.Map<any,any>): boolean;
			/** @deprecated */
			public static minBy(thisminBy: java.util.Map<any,any>, selector: kotlin.jvm.functions.Function1<any,any>): java.util.Map.Entry<any,any>;
			public constructor();
			public static flatMapSequence(thisflatMap: java.util.Map<any,any>, transform: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static none(thisnone: java.util.Map<any,any>, predicate: kotlin.jvm.functions.Function1<any,any>): boolean;
			public static toList(thistoList: java.util.Map<any,any>): java.util.List<any>;
			public static mapTo(thismapTo: java.util.Map<any,any>, destination: java.util.Collection<any>, transform: kotlin.jvm.functions.Function1<any,any>): java.util.Collection<any>;
			public static count(thiscount: java.util.Map<any,any>, predicate: kotlin.jvm.functions.Function1<any,any>): number;
			public static flatMapSequenceTo(thisflatMapTo: java.util.Map<any,any>, destination: java.util.Collection<any>, transform: kotlin.jvm.functions.Function1<any,any>): java.util.Collection<any>;
			public static map(thismap: java.util.Map<any,any>, transform: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static mapNotNull(thismapNotNull: java.util.Map<any,any>, transform: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static flatMap(thisflatMap: java.util.Map<any,any>, transform: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static onEach(thisonEach: java.util.Map<any,any>, action: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			public static flatMapTo(thisflatMapTo: java.util.Map<any,any>, destination: java.util.Collection<any>, transform: kotlin.jvm.functions.Function1<any,any>): java.util.Collection<any>;
			public static all(thisall: java.util.Map<any,any>, predicate: kotlin.jvm.functions.Function1<any,any>): boolean;
		}
	}
}

declare module kotlin {
	export module collections {
		export class MovingSubList<E>  extends kotlin.collections.AbstractList<any> implements java.util.RandomAccess  {
			public static class: java.lang.Class<kotlin.collections.MovingSubList<any>>;
			public get(int0: number): any;
			public toArray(): native.Array<any>;
			public remove(int0: number): any;
			public stream(): java.util.stream.Stream<any>;
			public add(object0: any): boolean;
			public subList(fromIndex: number, toIndex: number): java.util.List<any>;
			public add(int0: number, object1: any): void;
			public replaceAll(operator: any /* any*/): void;
			public getSize(): number;
			public remove(object0: any): boolean;
			public set(int0: number, object1: any): any;
			public equals(other: any): boolean;
			public addAll(int0: number, collection1: java.util.Collection<any>): boolean;
			public addAll(collection0: java.util.Collection<any>): boolean;
			public contains(element: any): boolean;
			public removeIf(filter: any /* any*/): boolean;
			public sort(c: java.util.Comparator<any>): void;
			public constructor(list: java.util.List<any>);
			public lastIndexOf(element: any): number;
			public iterator(): java.util.Iterator<any>;
			public move(fromIndex: number, toIndex: number): void;
			public clear(): void;
			public size(): number;
			public isEmpty(): boolean;
			public listIterator(index: number): java.util.ListIterator<any>;
			public indexOf(element: any): number;
			public containsAll(elements: java.util.Collection<any>): boolean;
			public constructor();
			public toArray(array: native.Array<any>): native.Array<any>;
			public removeAll(collection0: java.util.Collection<any>): boolean;
			public retainAll(collection0: java.util.Collection<any>): boolean;
			public listIterator(): java.util.ListIterator<any>;
			public spliterator(): java.util.Spliterator<any>;
			public parallelStream(): java.util.stream.Stream<any>;
			public get(index: number): any;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module collections {
		export class MutableMapWithDefault<K, V>  extends java.lang.Object {
			public static class: java.lang.Class<kotlin.collections.MutableMapWithDefault<any,any>>;
			/**
			 * Constructs a new instance of the kotlin.collections.MutableMapWithDefault<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getMap(): java.util.Map<K,V>;
				size(): number;
				isEmpty(): boolean;
				containsKey(object0: any): boolean;
				containsValue(object0: any): boolean;
				get(object0: any): V;
				put(object0: K, object1: V): V;
				remove(object0: any): V;
				putAll(map0: java.util.Map<any,any>): void;
				clear(): void;
				keySet(): java.util.Set<K>;
				values(): java.util.Collection<V>;
				entrySet(): java.util.Set<java.util.Map.Entry<K,V>>;
				equals(object0: any): boolean;
				hashCode(): number;
				getOrDefault(key: any, defaultValue: V): V;
				forEach(action: any /* any<any,any>*/): void;
				replaceAll(function0: any /* any<any,any,any>*/): void;
				putIfAbsent(key: K, value: V): V;
				remove(key: any, value: any): boolean;
				replace(key: K, oldValue: V, newValue: V): boolean;
				replace(key: K, value: V): V;
				computeIfAbsent(key: K, mappingFunction: any /* any<any,any>*/): V;
				computeIfPresent(key: K, remappingFunction: any /* any<any,any,any>*/): V;
				compute(key: K, remappingFunction: any /* any<any,any,any>*/): V;
				merge(key: K, value: V, remappingFunction: any /* any<any,any,any>*/): V;
				getMap(): java.util.Map<K,V>;
				getOrImplicitDefault(object0: K): V;
				size(): number;
				isEmpty(): boolean;
				containsKey(object0: any): boolean;
				containsValue(object0: any): boolean;
				get(object0: any): V;
				put(object0: K, object1: V): V;
				remove(object0: any): V;
				putAll(map0: java.util.Map<any,any>): void;
				clear(): void;
				keySet(): java.util.Set<K>;
				values(): java.util.Collection<V>;
				entrySet(): java.util.Set<java.util.Map.Entry<K,V>>;
				equals(object0: any): boolean;
				hashCode(): number;
				getOrDefault(key: any, defaultValue: V): V;
				forEach(action: any /* any<any,any>*/): void;
				replaceAll(function0: any /* any<any,any,any>*/): void;
				putIfAbsent(key: K, value: V): V;
				remove(key: any, value: any): boolean;
				replace(key: K, oldValue: V, newValue: V): boolean;
				replace(key: K, value: V): V;
				computeIfAbsent(key: K, mappingFunction: any /* any<any,any>*/): V;
				computeIfPresent(key: K, remappingFunction: any /* any<any,any,any>*/): V;
				compute(key: K, remappingFunction: any /* any<any,any,any>*/): V;
				merge(key: K, value: V, remappingFunction: any /* any<any,any,any>*/): V;
			});
			public constructor();
			public computeIfAbsent(key: K, mappingFunction: any /* any<any,any>*/): V;
			public replace(key: K, value: V): V;
			public containsValue(object0: any): boolean;
			public merge(key: K, value: V, remappingFunction: any /* any<any,any,any>*/): V;
			public forEach(action: any /* any<any,any>*/): void;
			public keySet(): java.util.Set<K>;
			public values(): java.util.Collection<V>;
			public containsKey(object0: any): boolean;
			public compute(key: K, remappingFunction: any /* any<any,any,any>*/): V;
			public clear(): void;
			public replace(key: K, oldValue: V, newValue: V): boolean;
			public get(object0: any): V;
			public getOrDefault(key: any, defaultValue: V): V;
			public size(): number;
			public isEmpty(): boolean;
			public getMap(): java.util.Map<K,V>;
			public putIfAbsent(key: K, value: V): V;
			public computeIfPresent(key: K, remappingFunction: any /* any<any,any,any>*/): V;
			public replaceAll(function0: any /* any<any,any,any>*/): void;
			public getOrImplicitDefault(object0: K): V;
			public equals(obj: any): boolean;
			public putAll(map0: java.util.Map<any,any>): void;
			public remove(object0: any): V;
			public remove(key: any, value: any): boolean;
			public entrySet(): java.util.Set<java.util.Map.Entry<K,V>>;
			public put(object0: K, object1: V): V;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module collections {
		export class MutableMapWithDefaultImpl<K, V>  extends kotlin.collections.MutableMapWithDefault<any,any> {
			public static class: java.lang.Class<kotlin.collections.MutableMapWithDefaultImpl<any,any>>;
			public replace(key: any, oldValue: any, newValue: any): boolean;
			public putAll(from: java.util.Map<any,any>): void;
			public computeIfPresent(key: any, remappingFunction: any /* any<any,any,any>*/): any;
			public replace(key: any, value: any): any;
			public getSize(): number;
			public containsKey(key: any): boolean;
			public remove(key: any): any;
			public containsValue(value: any): boolean;
			public getEntries(): java.util.Set<java.util.Map.Entry<any,any>>;
			public forEach(action: any /* any<any,any>*/): void;
			public compute(key: any, remappingFunction: any /* any<any,any,any>*/): any;
			public equals(other: any): boolean;
			public putIfAbsent(key: any, value: any): any;
			public values(): java.util.Collection<any>;
			public getValues(): java.util.Collection<any>;
			public merge(key: any, value: any, remappingFunction: any /* any<any,any,any>*/): any;
			public clear(): void;
			public get(key: any): any;
			public size(): number;
			public isEmpty(): boolean;
			public keySet(): java.util.Set<any>;
			public entrySet(): java.util.Set<java.util.Map.Entry<any,any>>;
			public getMap(): java.util.Map<any,any>;
			public computeIfAbsent(key: any, mappingFunction: any /* any<any,any>*/): any;
			public replaceAll(function0: any /* any<any,any,any>*/): void;
			public getOrDefault(key: any, defaultValue: any): any;
			public toString(): string;
			public put(key: any, value: any): any;
			public equals(obj: any): boolean;
			public getKeys(): java.util.Set<any>;
			public remove(key: any, value: any): boolean;
			public getOrImplicitDefault(key: any): any;
			public constructor(map: java.util.Map<any,any>, default1: kotlin.jvm.functions.Function1<any,any>);
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module collections {
		export class ReversedList<T>  extends kotlin.collections.AbstractMutableList<any> {
			public static class: java.lang.Class<kotlin.collections.ReversedList<any>>;
			public removeAt(int0: number): any;
			public get(int0: number): any;
			public contains(o: any): boolean;
			public toArray(): native.Array<any>;
			public remove(int0: number): any;
			public remove(o: any): boolean;
			public retainAll(c: java.util.Collection<any>): boolean;
			public stream(): java.util.stream.Stream<any>;
			public subList(fromIndex: number, toIndex: number): java.util.List<any>;
			public lastIndexOf(o: any): number;
			public add(int0: number, object1: any): void;
			public addAll(index: number, c: java.util.Collection<any>): boolean;
			public replaceAll(operator: any /* any*/): void;
			public getSize(): number;
			public set(int0: number, object1: any): any;
			public add(e: any): boolean;
			public removeIf(filter: any /* any*/): boolean;
			public sort(c: java.util.Comparator<any>): void;
			public toArray(a: native.Array<any>): native.Array<any>;
			public addAll(c: java.util.Collection<any>): boolean;
			public iterator(): java.util.Iterator<any>;
			public clear(): void;
			public size(): number;
			public isEmpty(): boolean;
			public listIterator(index: number): java.util.ListIterator<any>;
			public constructor();
			public removeAt(index: number): any;
			public removeAll(c: java.util.Collection<any>): boolean;
			public equals(o: any): boolean;
			public indexOf(o: any): number;
			public listIterator(): java.util.ListIterator<any>;
			public containsAll(c: java.util.Collection<any>): boolean;
			public add(index: number, element: any): void;
			public constructor(delegate: java.util.List<any>);
			public spliterator(): java.util.Spliterator<any>;
			public set(index: number, element: any): any;
			public parallelStream(): java.util.stream.Stream<any>;
			public get(index: number): any;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module collections {
		export class ReversedListReadOnly<T>  extends kotlin.collections.AbstractList<any> {
			public static class: java.lang.Class<kotlin.collections.ReversedListReadOnly<any>>;
			public get(int0: number): any;
			public toArray(): native.Array<any>;
			public remove(int0: number): any;
			public stream(): java.util.stream.Stream<any>;
			public add(object0: any): boolean;
			public subList(fromIndex: number, toIndex: number): java.util.List<any>;
			public add(int0: number, object1: any): void;
			public replaceAll(operator: any /* any*/): void;
			public getSize(): number;
			public remove(object0: any): boolean;
			public set(int0: number, object1: any): any;
			public equals(other: any): boolean;
			public addAll(int0: number, collection1: java.util.Collection<any>): boolean;
			public addAll(collection0: java.util.Collection<any>): boolean;
			public contains(element: any): boolean;
			public removeIf(filter: any /* any*/): boolean;
			public sort(c: java.util.Comparator<any>): void;
			public lastIndexOf(element: any): number;
			public iterator(): java.util.Iterator<any>;
			public clear(): void;
			public size(): number;
			public isEmpty(): boolean;
			public listIterator(index: number): java.util.ListIterator<any>;
			public indexOf(element: any): number;
			public containsAll(elements: java.util.Collection<any>): boolean;
			public constructor();
			public toArray(array: native.Array<any>): native.Array<any>;
			public removeAll(collection0: java.util.Collection<any>): boolean;
			public retainAll(collection0: java.util.Collection<any>): boolean;
			public listIterator(): java.util.ListIterator<any>;
			public constructor(delegate: java.util.List<any>);
			public spliterator(): java.util.Spliterator<any>;
			public parallelStream(): java.util.stream.Stream<any>;
			public get(index: number): any;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module collections {
		export class RingBuffer<T>  extends kotlin.collections.AbstractList<any> implements java.util.RandomAccess  {
			public static class: java.lang.Class<kotlin.collections.RingBuffer<any>>;
			public get(int0: number): any;
			public toArray(): native.Array<any>;
			public remove(int0: number): any;
			public stream(): java.util.stream.Stream<any>;
			public add(object0: any): boolean;
			public subList(fromIndex: number, toIndex: number): java.util.List<any>;
			public add(int0: number, object1: any): void;
			public replaceAll(operator: any /* any*/): void;
			public getSize(): number;
			public remove(object0: any): boolean;
			public set(int0: number, object1: any): any;
			public constructor(buffer: native.Array<any>, filledSize: number);
			public equals(other: any): boolean;
			public addAll(int0: number, collection1: java.util.Collection<any>): boolean;
			public addAll(collection0: java.util.Collection<any>): boolean;
			public contains(element: any): boolean;
			public removeIf(filter: any /* any*/): boolean;
			public sort(c: java.util.Comparator<any>): void;
			public expanded(maxCapacity: number): kotlin.collections.RingBuffer<any>;
			public lastIndexOf(element: any): number;
			public iterator(): java.util.Iterator<any>;
			public isFull(): boolean;
			public clear(): void;
			public size(): number;
			public isEmpty(): boolean;
			public listIterator(index: number): java.util.ListIterator<any>;
			public indexOf(element: any): number;
			public containsAll(elements: java.util.Collection<any>): boolean;
			public constructor();
			public toArray(array: native.Array<any>): native.Array<any>;
			public removeAll(collection0: java.util.Collection<any>): boolean;
			public constructor(capacity: number);
			public retainAll(collection0: java.util.Collection<any>): boolean;
			public add(element: any): void;
			public listIterator(): java.util.ListIterator<any>;
			public spliterator(): java.util.Spliterator<any>;
			public removeFirst(n: number): void;
			public parallelStream(): java.util.stream.Stream<any>;
			public get(index: number): any;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module collections {
		export class SetsKt extends kotlin.collections.SetsKt___SetsKt {
			public static class: java.lang.Class<kotlin.collections.SetsKt>;
		}
	}
}

declare module kotlin {
	export module collections {
		export class SetsKt__SetsJVMKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.collections.SetsKt__SetsJVMKt>;
			public static createSetBuilder(capacity: number): java.util.Set<any>;
			public static setOf(element: any): java.util.Set<any>;
			public static sortedSetOf(elements: native.Array<any>): java.util.TreeSet<any>;
			public static sortedSetOf(comparator: java.util.Comparator<any>, elements: native.Array<any>): java.util.TreeSet<any>;
			public static createSetBuilder(): java.util.Set<any>;
			public static build(builder: java.util.Set<any>): java.util.Set<any>;
			public constructor();
		}
	}
}

declare module kotlin {
	export module collections {
		export class SetsKt__SetsKt extends kotlin.collections.SetsKt__SetsJVMKt {
			public static class: java.lang.Class<kotlin.collections.SetsKt__SetsKt>;
			public static mutableSetOf(elements: native.Array<any>): java.util.Set<any>;
			public static emptySet(): java.util.Set<any>;
			public static setOf(element: any): java.util.Set<any>;
			public static hashSetOf(elements: native.Array<any>): java.util.HashSet<any>;
			public static setOfNotNull(element: any): java.util.Set<any>;
			public static optimizeReadOnlySet(thisoptimizeReadOnlySet: java.util.Set<any>): java.util.Set<any>;
			public static linkedSetOf(elements: native.Array<any>): java.util.LinkedHashSet<any>;
			public static setOfNotNull(elements: native.Array<any>): java.util.Set<any>;
			public constructor();
			public static setOf(elements: native.Array<any>): java.util.Set<any>;
		}
	}
}

declare module kotlin {
	export module collections {
		export class SetsKt___SetsKt extends kotlin.collections.SetsKt__SetsKt {
			public static class: java.lang.Class<kotlin.collections.SetsKt___SetsKt>;
			public static plus(thisplus: java.util.Set<any>, elements: kotlin.sequences.Sequence<any>): java.util.Set<any>;
			public static plus(thisplus: java.util.Set<any>, element: any): java.util.Set<any>;
			public static plus(thisplus: java.util.Set<any>, elements: java.lang.Iterable<any>): java.util.Set<any>;
			public static minus(thisminus: java.util.Set<any>, elements: java.lang.Iterable<any>): java.util.Set<any>;
			public static minus(thisminus: java.util.Set<any>, element: any): java.util.Set<any>;
			public static minus(thisminus: java.util.Set<any>, elements: kotlin.sequences.Sequence<any>): java.util.Set<any>;
			public static minus(thisminus: java.util.Set<any>, elements: native.Array<any>): java.util.Set<any>;
			public constructor();
			public static plus(thisplus: java.util.Set<any>, elements: native.Array<any>): java.util.Set<any>;
		}
	}
}

declare module kotlin {
	export module collections {
		export abstract class ShortIterator extends java.lang.Object {
			public static class: java.lang.Class<kotlin.collections.ShortIterator>;
			public next(): java.lang.Short;
			public constructor();
			public remove(): void;
			public nextShort(): number;
		}
	}
}

declare module kotlin {
	export module collections {
		export class SlidingWindowKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.collections.SlidingWindowKt>;
			public static windowedSequence(thiswindowedSequence: kotlin.sequences.Sequence<any>, size: number, step: number, partialWindows: boolean, reuseBuffer: boolean): kotlin.sequences.Sequence<any>;
			public static windowedIterator(iterator: java.util.Iterator<any>, size: number, step: number, partialWindows: boolean, reuseBuffer: boolean): java.util.Iterator<any>;
			public static checkWindowSizeStep(size: number, step: number): void;
		}
	}
}

declare module kotlin {
	export module collections {
		export class State {
			public static class: java.lang.Class<kotlin.collections.State>;
			public static Ready: kotlin.collections.State;
			public static NotReady: kotlin.collections.State;
			public static Done: kotlin.collections.State;
			public static Failed: kotlin.collections.State;
			public static values(): native.Array<kotlin.collections.State>;
			public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
			public static valueOf(string0: string): kotlin.collections.State;
		}
	}
}

declare module kotlin {
	export module collections {
		export class TypeAliasesKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.collections.TypeAliasesKt>;
		}
	}
}

declare module kotlin {
	export module collections {
		export class UArraySortingKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.collections.UArraySortingKt>;
			public static sortArray(array: native.Array<number>, fromIndex: number, toIndex: number): void;
		}
	}
}

declare module kotlin {
	export module collections {
		export abstract class UByteIterator extends java.lang.Object {
			public static class: java.lang.Class<kotlin.collections.UByteIterator>;
			public next(): number;
			public nextUByte(): number;
			public constructor();
			public remove(): void;
		}
	}
}

declare module kotlin {
	export module collections {
		export class UCollectionsKt extends kotlin.collections.UCollectionsKt___UCollectionsKt {
			public static class: java.lang.Class<kotlin.collections.UCollectionsKt>;
		}
	}
}

declare module kotlin {
	export module collections {
		export class UCollectionsKt___UCollectionsKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.collections.UCollectionsKt___UCollectionsKt>;
			public static toUShortArray(thistoUShortArray: java.util.Collection<kotlin.UShort>): native.Array<number>;
			public static toUIntArray(thistoUIntArray: java.util.Collection<kotlin.UInt>): native.Array<number>;
			public static toUByteArray(thistoUByteArray: java.util.Collection<kotlin.UByte>): native.Array<number>;
			public static sumOfUShort(thissum: java.lang.Iterable<kotlin.UShort>): number;
			public static sumOfUInt(thissum: java.lang.Iterable<kotlin.UInt>): number;
			public static sumOfUByte(thissum: java.lang.Iterable<kotlin.UByte>): number;
			public constructor();
			public static toULongArray(thistoULongArray: java.util.Collection<kotlin.ULong>): native.Array<number>;
			public static sumOfULong(thissum: java.lang.Iterable<kotlin.ULong>): number;
		}
	}
}

declare module kotlin {
	export module collections {
		export abstract class UIntIterator extends java.lang.Object {
			public static class: java.lang.Class<kotlin.collections.UIntIterator>;
			public next(): number;
			public nextUInt(): number;
			public constructor();
			public remove(): void;
		}
	}
}

declare module kotlin {
	export module collections {
		export abstract class ULongIterator extends java.lang.Object {
			public static class: java.lang.Class<kotlin.collections.ULongIterator>;
			public next(): number;
			public nextULong(): number;
			public constructor();
			public remove(): void;
		}
	}
}

declare module kotlin {
	export module collections {
		export abstract class UShortIterator extends java.lang.Object {
			public static class: java.lang.Class<kotlin.collections.UShortIterator>;
			public next(): number;
			public nextUShort(): number;
			public constructor();
			public remove(): void;
		}
	}
}

declare module kotlin {
	export module collections {
		export module builders {
			export class ListBuilder<E>  extends kotlin.collections.AbstractMutableList<any> {
				public static class: java.lang.Class<kotlin.collections.builders.ListBuilder<any>>;
				public removeAll(elements: java.util.Collection<any>): boolean;
				public subList(fromIndex: number, toIndex: number): java.util.List<any>;
				public build(): java.util.List<any>;
				public indexOf(o: any): number;
				public addAll(elements: java.util.Collection<any>): boolean;
				public get(int0: number): any;
				public constructor();
				public toArray(): native.Array<any>;
				public getSize(): number;
				public removeAt(index: number): any;
				public hashCode(): number;
				public set(int0: number, object1: any): any;
				public set(index: number, element: any): any;
				public addAll(c: java.util.Collection<any>): boolean;
				public isEmpty(): boolean;
				public addAll(index: number, elements: java.util.Collection<any>): boolean;
				public remove(int0: number): any;
				public replaceAll(operator: any /* any*/): void;
				public spliterator(): java.util.Spliterator<any>;
				public get(index: number): any;
				public stream(): java.util.stream.Stream<any>;
				public iterator(): java.util.Iterator<any>;
				public add(int0: number, object1: any): void;
				public forEach(action: any /* any*/): void;
				public lastIndexOf(element: any): number;
				public toString(): string;
				public containsAll(c: java.util.Collection<any>): boolean;
				public size(): number;
				public removeIf(filter: any /* any*/): boolean;
				public constructor(initialCapacity: number);
				public indexOf(element: any): number;
				public listIterator(index: number): java.util.ListIterator<any>;
				public retainAll(c: java.util.Collection<any>): boolean;
				public parallelStream(): java.util.stream.Stream<any>;
				public lastIndexOf(o: any): number;
				public listIterator(): java.util.ListIterator<any>;
				public removeAt(int0: number): any;
				public removeAll(c: java.util.Collection<any>): boolean;
				public add(e: any): boolean;
				public equals(other: any): boolean;
				public clear(): void;
				public equals(o: any): boolean;
				public contains(o: any): boolean;
				public sort(c: java.util.Comparator<any>): void;
				public toArray(a: native.Array<any>): native.Array<any>;
				public remove(o: any): boolean;
				public remove(element: any): boolean;
				public retainAll(elements: java.util.Collection<any>): boolean;
				public add(element: any): boolean;
				public add(index: number, element: any): void;
				public addAll(index: number, c: java.util.Collection<any>): boolean;
			}
			export module ListBuilder {
				export class Itr<E>  extends java.lang.Object {
					public static class: java.lang.Class<kotlin.collections.builders.ListBuilder.Itr<any>>;
					public previousIndex(): number;
					public nextIndex(): number;
					public previous(): E;
					public set(element: E): void;
					public hasPrevious(): boolean;
					public constructor(list: kotlin.collections.builders.ListBuilder<E>, index: number);
					public next(): E;
					public hasNext(): boolean;
					public add(element: E): void;
					public remove(): void;
				}
			}
		}
	}
}

declare module kotlin {
	export module collections {
		export module builders {
			export class ListBuilderKt extends java.lang.Object {
				public static class: java.lang.Class<kotlin.collections.builders.ListBuilderKt>;
				public static resetAt(thisresetAt: native.Array<any>, index: number): void;
				public static arrayOfUninitializedElements(size: number): native.Array<any>;
				public static resetRange(thisresetRange: native.Array<any>, fromIndex: number, toIndex: number): void;
				public static copyOfUninitializedElements(thiscopyOfUninitializedElements: native.Array<any>, newSize: number): native.Array<any>;
			}
		}
	}
}

declare module kotlin {
	export module collections {
		export module builders {
			export class MapBuilder<K, V>  extends java.lang.Object {
				public static class: java.lang.Class<kotlin.collections.builders.MapBuilder<any,any>>;
				public getOrDefault(key: any, defaultValue: V): V;
				public containsAllEntries(m: java.util.Collection<any>): boolean;
				public entrySet(): java.util.Set<java.util.Map.Entry<K,V>>;
				public containsKey(key: any): boolean;
				public remove(key: any): V;
				public computeIfPresent(key: K, remappingFunction: any /* any<any,any,any>*/): V;
				public merge(key: K, value: V, remappingFunction: any /* any<any,any,any>*/): V;
				public keySet(): java.util.Set<K>;
				public get(key: any): V;
				public replace(key: K, oldValue: V, newValue: V): boolean;
				public constructor();
				public computeIfAbsent(key: K, mappingFunction: any /* any<any,any>*/): V;
				public containsEntry(entry: java.util.Map.Entry<any,any>): boolean;
				public build(): java.util.Map<K,V>;
				public equals(other: any): boolean;
				public checkIsMutable(): void;
				public forEach(action: any /* any<any,any>*/): void;
				public getEntries(): java.util.Set<java.util.Map.Entry<K,V>>;
				public getSize(): number;
				public hashCode(): number;
				public removeEntry(entry: java.util.Map.Entry<any,any>): boolean;
				public valuesIterator(): kotlin.collections.builders.MapBuilder.ValuesItr<K,V>;
				public entriesIterator(): kotlin.collections.builders.MapBuilder.EntriesItr<K,V>;
				public getValues(): java.util.Collection<V>;
				public clear(): void;
				public remove(key: any, value: any): boolean;
				public putIfAbsent(key: K, value: V): V;
				public isEmpty(): boolean;
				public containsValue(value: any): boolean;
				public replace(key: K, value: V): V;
				public putAll(from: java.util.Map<any,any>): void;
				public toString(): string;
				public removeKey(key: K): number;
				public values(): java.util.Collection<V>;
				public size(): number;
				public equals(obj: any): boolean;
				public put(key: K, value: V): V;
				public keysIterator(): kotlin.collections.builders.MapBuilder.KeysItr<K,V>;
				public constructor(initialCapacity: number);
				public replaceAll(function0: any /* any<any,any,any>*/): void;
				public compute(key: K, remappingFunction: any /* any<any,any,any>*/): V;
				public removeValue(element: V): boolean;
				public addKey(key: K): number;
				public getKeys(): java.util.Set<K>;
			}
			export module MapBuilder {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<kotlin.collections.builders.MapBuilder.Companion>;
				}
				export class EntriesItr<K, V>  extends kotlin.collections.builders.MapBuilder.Itr<any,any> {
					public static class: java.lang.Class<kotlin.collections.builders.MapBuilder.EntriesItr<any,any>>;
					public nextAppendString(sb: java.lang.StringBuilder): void;
					public constructor(map: kotlin.collections.builders.MapBuilder<any,any>);
					public next(): kotlin.collections.builders.MapBuilder.EntryRef<any,any>;
					public nextHashCode(): number;
				}
				export class EntryRef<K, V>  extends java.lang.Object {
					public static class: java.lang.Class<kotlin.collections.builders.MapBuilder.EntryRef<any,any>>;
					public static comparingByValue(cmp: java.util.Comparator<any>): java.util.Comparator<any>;
					public getKey(): K;
					public equals(obj: any): boolean;
					public toString(): string;
					public getValue(): V;
					public static comparingByKey(): java.util.Comparator<any>;
					public setValue(newValue: V): V;
					public equals(other: any): boolean;
					public static comparingByValue(): java.util.Comparator<any>;
					public static comparingByKey(cmp: java.util.Comparator<any>): java.util.Comparator<any>;
					public constructor(map: kotlin.collections.builders.MapBuilder<K,V>, index: number);
					public hashCode(): number;
				}
				export class Itr<K, V>  extends java.lang.Object {
					public static class: java.lang.Class<kotlin.collections.builders.MapBuilder.Itr<any,any>>;
					public setLastIndex(param0: number): void;
					public getMap(): kotlin.collections.builders.MapBuilder<K,V>;
					public constructor(map: kotlin.collections.builders.MapBuilder<K,V>);
					public getIndex(): number;
					public initNext(): void;
					public setIndex(param0: number): void;
					public getLastIndex(): number;
					public hasNext(): boolean;
					public remove(): void;
				}
				export class KeysItr<K, V>  extends kotlin.collections.builders.MapBuilder.Itr<any,any> {
					public static class: java.lang.Class<kotlin.collections.builders.MapBuilder.KeysItr<any,any>>;
					public constructor(map: kotlin.collections.builders.MapBuilder<any,any>);
					public next(): any;
				}
				export class ValuesItr<K, V>  extends kotlin.collections.builders.MapBuilder.Itr<any,any> {
					public static class: java.lang.Class<kotlin.collections.builders.MapBuilder.ValuesItr<any,any>>;
					public constructor(map: kotlin.collections.builders.MapBuilder<any,any>);
					public next(): any;
				}
			}
		}
	}
}

declare module kotlin {
	export module collections {
		export module builders {
			export class MapBuilderEntries<K, V>  extends kotlin.collections.AbstractMutableSet<java.util.Map.Entry<any,any>> {
				public static class: java.lang.Class<kotlin.collections.builders.MapBuilderEntries<any,any>>;
				public contains(element: java.util.Map.Entry<any,any>): boolean;
				public removeAll(elements: java.util.Collection<any>): boolean;
				public parallelStream(): java.util.stream.Stream<any>;
				public containsAll(elements: java.util.Collection<any>): boolean;
				public addAll(elements: java.util.Collection<any>): boolean;
				public removeAll(c: java.util.Collection<any>): boolean;
				public constructor();
				public toArray(): native.Array<any>;
				public getSize(): number;
				public hashCode(): number;
				public clear(): void;
				public addAll(c: java.util.Collection<any>): boolean;
				public equals(o: any): boolean;
				public isEmpty(): boolean;
				public constructor(backing: kotlin.collections.builders.MapBuilder<any,any>);
				public add(element: java.util.Map.Entry<any,any>): boolean;
				public contains(o: any): boolean;
				public spliterator(): java.util.Spliterator<any>;
				public toArray(a: native.Array<any>): native.Array<any>;
				public stream(): java.util.stream.Stream<any>;
				public add(object0: any): boolean;
				public iterator(): java.util.Iterator<java.util.Map.Entry<any,any>>;
				public remove(o: any): boolean;
				public iterator(): java.util.Iterator<any>;
				public forEach(action: any /* any*/): void;
				public retainAll(elements: java.util.Collection<any>): boolean;
				public containsAll(c: java.util.Collection<any>): boolean;
				public size(): number;
				public remove(element: java.util.Map.Entry<any,any>): boolean;
				public removeIf(filter: any /* any*/): boolean;
				public getBacking(): kotlin.collections.builders.MapBuilder<any,any>;
				public retainAll(c: java.util.Collection<any>): boolean;
			}
		}
	}
}

declare module kotlin {
	export module collections {
		export module builders {
			export class MapBuilderKeys<E>  extends kotlin.collections.AbstractMutableSet<any> {
				public static class: java.lang.Class<kotlin.collections.builders.MapBuilderKeys<any>>;
				public removeAll(elements: java.util.Collection<any>): boolean;
				public parallelStream(): java.util.stream.Stream<any>;
				public addAll(elements: java.util.Collection<any>): boolean;
				public removeAll(c: java.util.Collection<any>): boolean;
				public constructor();
				public toArray(): native.Array<any>;
				public getSize(): number;
				public hashCode(): number;
				public clear(): void;
				public addAll(c: java.util.Collection<any>): boolean;
				public equals(o: any): boolean;
				public isEmpty(): boolean;
				public constructor(backing: kotlin.collections.builders.MapBuilder<any,any>);
				public contains(o: any): boolean;
				public spliterator(): java.util.Spliterator<any>;
				public toArray(a: native.Array<any>): native.Array<any>;
				public stream(): java.util.stream.Stream<any>;
				public add(object0: any): boolean;
				public remove(o: any): boolean;
				public iterator(): java.util.Iterator<any>;
				public remove(element: any): boolean;
				public forEach(action: any /* any*/): void;
				public retainAll(elements: java.util.Collection<any>): boolean;
				public containsAll(c: java.util.Collection<any>): boolean;
				public size(): number;
				public contains(element: any): boolean;
				public add(element: any): boolean;
				public removeIf(filter: any /* any*/): boolean;
				public retainAll(c: java.util.Collection<any>): boolean;
			}
		}
	}
}

declare module kotlin {
	export module collections {
		export module builders {
			export class MapBuilderValues<V>  extends kotlin.collections.AbstractMutableCollection<any> {
				public static class: java.lang.Class<kotlin.collections.builders.MapBuilderValues<any>>;
				public removeAll(elements: java.util.Collection<any>): boolean;
				public parallelStream(): java.util.stream.Stream<any>;
				public addAll(elements: java.util.Collection<any>): boolean;
				public removeAll(c: java.util.Collection<any>): boolean;
				public constructor();
				public toArray(): native.Array<any>;
				public getSize(): number;
				public hashCode(): number;
				public clear(): void;
				public addAll(c: java.util.Collection<any>): boolean;
				public isEmpty(): boolean;
				public constructor(backing: kotlin.collections.builders.MapBuilder<any,any>);
				public contains(o: any): boolean;
				public spliterator(): java.util.Spliterator<any>;
				public toArray(a: native.Array<any>): native.Array<any>;
				public stream(): java.util.stream.Stream<any>;
				public add(object0: any): boolean;
				public iterator(): java.util.Iterator<any>;
				public remove(o: any): boolean;
				public remove(element: any): boolean;
				public forEach(action: any /* any*/): void;
				public retainAll(elements: java.util.Collection<any>): boolean;
				public containsAll(c: java.util.Collection<any>): boolean;
				public size(): number;
				public contains(element: any): boolean;
				public add(element: any): boolean;
				public removeIf(filter: any /* any*/): boolean;
				public getBacking(): kotlin.collections.builders.MapBuilder<any,any>;
				public equals(obj: any): boolean;
				public retainAll(c: java.util.Collection<any>): boolean;
			}
		}
	}
}

declare module kotlin {
	export module collections {
		export module builders {
			export class SetBuilder<E>  extends kotlin.collections.AbstractMutableSet<any> {
				public static class: java.lang.Class<kotlin.collections.builders.SetBuilder<any>>;
				public removeAll(elements: java.util.Collection<any>): boolean;
				public parallelStream(): java.util.stream.Stream<any>;
				public build(): java.util.Set<any>;
				public addAll(elements: java.util.Collection<any>): boolean;
				public removeAll(c: java.util.Collection<any>): boolean;
				public constructor();
				public toArray(): native.Array<any>;
				public getSize(): number;
				public hashCode(): number;
				public clear(): void;
				public addAll(c: java.util.Collection<any>): boolean;
				public equals(o: any): boolean;
				public isEmpty(): boolean;
				public constructor(backing: kotlin.collections.builders.MapBuilder<any,any>);
				public contains(o: any): boolean;
				public spliterator(): java.util.Spliterator<any>;
				public toArray(a: native.Array<any>): native.Array<any>;
				public stream(): java.util.stream.Stream<any>;
				public add(object0: any): boolean;
				public remove(o: any): boolean;
				public iterator(): java.util.Iterator<any>;
				public remove(element: any): boolean;
				public forEach(action: any /* any*/): void;
				public retainAll(elements: java.util.Collection<any>): boolean;
				public containsAll(c: java.util.Collection<any>): boolean;
				public size(): number;
				public contains(element: any): boolean;
				public add(element: any): boolean;
				public removeIf(filter: any /* any*/): boolean;
				public constructor(initialCapacity: number);
				public retainAll(c: java.util.Collection<any>): boolean;
			}
		}
	}
}

declare module kotlin {
	export module collections {
		export module unsigned {
			export class UArraysKt extends kotlin.collections.unsigned.UArraysKt___UArraysKt {
				public static class: java.lang.Class<kotlin.collections.unsigned.UArraysKt>;
			}
		}
	}
}

declare module kotlin {
	export module collections {
		export module unsigned {
			export class UArraysKt___UArraysJvmKt extends java.lang.Object {
				public static class: java.lang.Class<kotlin.collections.unsigned.UArraysKt___UArraysJvmKt>;
				public static binarySearch(thisbinarySearch: native.Array<number>, element: number, fromIndex: number, toIndex: number): number;
				public static asList(thisasList: native.Array<number>): java.util.List<kotlin.UShort>;
				public static asList(thisasList: native.Array<number>): java.util.List<kotlin.UInt>;
				public static asList(thisasList: native.Array<number>): java.util.List<kotlin.ULong>;
				public static asList(thisasList: native.Array<number>): java.util.List<kotlin.UByte>;
				public constructor();
			}
		}
	}
}

declare module kotlin {
	export module collections {
		export module unsigned {
			export class UArraysKt___UArraysKt extends kotlin.collections.unsigned.UArraysKt___UArraysJvmKt {
				public static class: java.lang.Class<kotlin.collections.unsigned.UArraysKt___UArraysKt>;
				public static sorted(thissorted: native.Array<number>): java.util.List<kotlin.UByte>;
				/** @deprecated */
				public static max(thismax: native.Array<number>): kotlin.ULong;
				/** @deprecated */
				public static minWith(thisminWith: native.Array<number>, comparator: java.util.Comparator<any>): kotlin.UByte;
				public static sumOfUShort(thissum: native.Array<kotlin.UShort>): number;
				/** @deprecated */
				public static maxWith(thismaxWith: native.Array<number>, comparator: java.util.Comparator<any>): kotlin.UByte;
				public static toUShortArray(thistoUShortArray: native.Array<kotlin.UShort>): native.Array<number>;
				public static fill(thisfill: native.Array<number>, element: number, fromIndex: number, toIndex: number): void;
				public static take(thistake: native.Array<number>, n: number): java.util.List<kotlin.UInt>;
				public static drop(thisdrop: native.Array<number>, n: number): java.util.List<kotlin.UShort>;
				public static maxOrNull(thismaxOrNull: native.Array<number>): kotlin.UByte;
				public static sortedArray(thissortedArray: native.Array<number>): native.Array<number>;
				public static sumOfULong(thissum: native.Array<kotlin.ULong>): number;
				public static takeLast(thistakeLast: native.Array<number>, n: number): java.util.List<kotlin.UInt>;
				public static sortedArrayDescending(thissortedArrayDescending: native.Array<number>): native.Array<number>;
				public static maxWithOrNull(thismaxWithOrNull: native.Array<number>, comparator: java.util.Comparator<any>): kotlin.UInt;
				public static zip(thiszip: native.Array<number>, other: java.lang.Iterable<any>): java.util.List<any>;
				public static takeLast(thistakeLast: native.Array<number>, n: number): java.util.List<kotlin.ULong>;
				public static getOrNull(thisgetOrNull: native.Array<number>, index: number): kotlin.ULong;
				public static withIndex(thiswithIndex: native.Array<number>): java.lang.Iterable<kotlin.collections.IndexedValue<kotlin.UShort>>;
				public static dropLast(thisdropLast: native.Array<number>, n: number): java.util.List<kotlin.UInt>;
				public static slice(thisslice: native.Array<number>, indices: kotlin.ranges.IntRange): java.util.List<kotlin.UShort>;
				public static shuffle(thisshuffle: native.Array<number>, random: kotlin.random.Random): void;
				public static getIndices(thisindices: native.Array<number>): kotlin.ranges.IntRange;
				public static lastOrNull(thislastOrNull: native.Array<number>): kotlin.ULong;
				/** @deprecated */
				public static minWith(thisminWith: native.Array<number>, comparator: java.util.Comparator<any>): kotlin.UShort;
				public static maxWithOrNull(thismaxWithOrNull: native.Array<number>, comparator: java.util.Comparator<any>): kotlin.UByte;
				public static sliceArray(thissliceArray: native.Array<number>, indices: kotlin.ranges.IntRange): native.Array<number>;
				public static sorted(thissorted: native.Array<number>): java.util.List<kotlin.ULong>;
				public static takeLast(thistakeLast: native.Array<number>, n: number): java.util.List<kotlin.UByte>;
				public static contentEquals(thiscontentEquals: native.Array<number>, other: native.Array<number>): boolean;
				public static takeLast(thistakeLast: native.Array<number>, n: number): java.util.List<kotlin.UShort>;
				public static plus(thisplus: native.Array<number>, elements: java.util.Collection<kotlin.ULong>): native.Array<number>;
				public static toULongArray(thistoULongArray: native.Array<kotlin.ULong>): native.Array<number>;
				public static maxWithOrNull(thismaxWithOrNull: native.Array<number>, comparator: java.util.Comparator<any>): kotlin.UShort;
				public static slice(thisslice: native.Array<number>, indices: java.lang.Iterable<java.lang.Integer>): java.util.List<kotlin.UShort>;
				/** @deprecated */
				public static maxWith(thismaxWith: native.Array<number>, comparator: java.util.Comparator<any>): kotlin.UInt;
				public static sort(thissort: native.Array<number>, fromIndex: number, toIndex: number): void;
				public static randomOrNull(thisrandomOrNull: native.Array<number>, random: kotlin.random.Random): kotlin.UByte;
				public static firstOrNull(thisfirstOrNull: native.Array<number>): kotlin.UByte;
				public static contentHashCode(thiscontentHashCode: native.Array<number>): number;
				public static singleOrNull(thissingleOrNull: native.Array<number>): kotlin.ULong;
				public static sorted(thissorted: native.Array<number>): java.util.List<kotlin.UInt>;
				public static sortedDescending(thissortedDescending: native.Array<number>): java.util.List<kotlin.ULong>;
				/** @deprecated */
				public static max(thismax: native.Array<number>): kotlin.UInt;
				public static lastOrNull(thislastOrNull: native.Array<number>): kotlin.UInt;
				public static slice(thisslice: native.Array<number>, indices: kotlin.ranges.IntRange): java.util.List<kotlin.ULong>;
				public static withIndex(thiswithIndex: native.Array<number>): java.lang.Iterable<kotlin.collections.IndexedValue<kotlin.ULong>>;
				public static drop(thisdrop: native.Array<number>, n: number): java.util.List<kotlin.UInt>;
				public static sortedDescending(thissortedDescending: native.Array<number>): java.util.List<kotlin.UByte>;
				public static randomOrNull(thisrandomOrNull: native.Array<number>, random: kotlin.random.Random): kotlin.UShort;
				public static getOrNull(thisgetOrNull: native.Array<number>, index: number): kotlin.UShort;
				public static minOrNull(thisminOrNull: native.Array<number>): kotlin.UInt;
				public static minOrNull(thisminOrNull: native.Array<number>): kotlin.UShort;
				public static withIndex(thiswithIndex: native.Array<number>): java.lang.Iterable<kotlin.collections.IndexedValue<kotlin.UInt>>;
				public static lastOrNull(thislastOrNull: native.Array<number>): kotlin.UShort;
				public static dropLast(thisdropLast: native.Array<number>, n: number): java.util.List<kotlin.UShort>;
				public static plus(thisplus: native.Array<number>, elements: java.util.Collection<kotlin.UShort>): native.Array<number>;
				public static minOrNull(thisminOrNull: native.Array<number>): kotlin.UByte;
				public static getLastIndex(thislastIndex: native.Array<number>): number;
				public static sortedDescending(thissortedDescending: native.Array<number>): java.util.List<kotlin.UInt>;
				/** @deprecated */
				public static maxWith(thismaxWith: native.Array<number>, comparator: java.util.Comparator<any>): kotlin.ULong;
				public static sumOfUInt(thissum: native.Array<kotlin.UInt>): number;
				public static firstOrNull(thisfirstOrNull: native.Array<number>): kotlin.UShort;
				public static sliceArray(thissliceArray: native.Array<number>, indices: java.util.Collection<java.lang.Integer>): native.Array<number>;
				public static reversed(thisreversed: native.Array<number>): java.util.List<kotlin.UByte>;
				/** @deprecated */
				public static minWith(thisminWith: native.Array<number>, comparator: java.util.Comparator<any>): kotlin.ULong;
				public static reversed(thisreversed: native.Array<number>): java.util.List<kotlin.UInt>;
				public static slice(thisslice: native.Array<number>, indices: java.lang.Iterable<java.lang.Integer>): java.util.List<kotlin.UByte>;
				public static sortDescending(thissortDescending: native.Array<number>): void;
				public static minOrNull(thisminOrNull: native.Array<number>): kotlin.ULong;
				/** @deprecated */
				public static minWith(thisminWith: native.Array<number>, comparator: java.util.Comparator<any>): kotlin.UInt;
				public constructor();
				public static maxWithOrNull(thismaxWithOrNull: native.Array<number>, comparator: java.util.Comparator<any>): kotlin.ULong;
				public static minWithOrNull(thisminWithOrNull: native.Array<number>, comparator: java.util.Comparator<any>): kotlin.UInt;
				public static zip(thiszip: native.Array<number>, other: native.Array<number>): java.util.List<kotlin.Pair<kotlin.UShort,kotlin.UShort>>;
				public static slice(thisslice: native.Array<number>, indices: java.lang.Iterable<java.lang.Integer>): java.util.List<kotlin.ULong>;
				/** @deprecated */
				public static min(thismin: native.Array<number>): kotlin.ULong;
				public static zip(thiszip: native.Array<number>, other: native.Array<number>): java.util.List<kotlin.Pair<kotlin.UByte,kotlin.UByte>>;
				public static sort(thissort: native.Array<number>): void;
				public static reversed(thisreversed: native.Array<number>): java.util.List<kotlin.UShort>;
				public static toTypedArray(thistoTypedArray: native.Array<number>): native.Array<kotlin.UInt>;
				public static getOrNull(thisgetOrNull: native.Array<number>, index: number): kotlin.UByte;
				public static slice(thisslice: native.Array<number>, indices: kotlin.ranges.IntRange): java.util.List<kotlin.UByte>;
				public static shuffle(thisshuffle: native.Array<number>): void;
				public static plus(thisplus: native.Array<number>, elements: java.util.Collection<kotlin.UInt>): native.Array<number>;
				public static dropLast(thisdropLast: native.Array<number>, n: number): java.util.List<kotlin.ULong>;
				public static take(thistake: native.Array<number>, n: number): java.util.List<kotlin.UByte>;
				public static toUIntArray(thistoUIntArray: native.Array<kotlin.UInt>): native.Array<number>;
				public static toTypedArray(thistoTypedArray: native.Array<number>): native.Array<kotlin.ULong>;
				/** @deprecated */
				public static min(thismin: native.Array<number>): kotlin.UShort;
				public static withIndex(thiswithIndex: native.Array<number>): java.lang.Iterable<kotlin.collections.IndexedValue<kotlin.UByte>>;
				public static sortedDescending(thissortedDescending: native.Array<number>): java.util.List<kotlin.UShort>;
				public static singleOrNull(thissingleOrNull: native.Array<number>): kotlin.UByte;
				public static maxOrNull(thismaxOrNull: native.Array<number>): kotlin.ULong;
				public static minWithOrNull(thisminWithOrNull: native.Array<number>, comparator: java.util.Comparator<any>): kotlin.UShort;
				public static zip(thiszip: native.Array<number>, other: native.Array<any>): java.util.List<any>;
				public static sorted(thissorted: native.Array<number>): java.util.List<kotlin.UShort>;
				/** @deprecated */
				public static max(thismax: native.Array<number>): kotlin.UByte;
				public static minWithOrNull(thisminWithOrNull: native.Array<number>, comparator: java.util.Comparator<any>): kotlin.UByte;
				public static take(thistake: native.Array<number>, n: number): java.util.List<kotlin.ULong>;
				public static toTypedArray(thistoTypedArray: native.Array<number>): native.Array<kotlin.UShort>;
				public static dropLast(thisdropLast: native.Array<number>, n: number): java.util.List<kotlin.UByte>;
				public static lastOrNull(thislastOrNull: native.Array<number>): kotlin.UByte;
				public static firstOrNull(thisfirstOrNull: native.Array<number>): kotlin.ULong;
				public static singleOrNull(thissingleOrNull: native.Array<number>): kotlin.UInt;
				public static maxOrNull(thismaxOrNull: native.Array<number>): kotlin.UShort;
				public static randomOrNull(thisrandomOrNull: native.Array<number>, random: kotlin.random.Random): kotlin.ULong;
				/** @deprecated */
				public static max(thismax: native.Array<number>): kotlin.UShort;
				public static plus(thisplus: native.Array<number>, elements: java.util.Collection<kotlin.UByte>): native.Array<number>;
				public static maxOrNull(thismaxOrNull: native.Array<number>): kotlin.UInt;
				public static minWithOrNull(thisminWithOrNull: native.Array<number>, comparator: java.util.Comparator<any>): kotlin.ULong;
				public static singleOrNull(thissingleOrNull: native.Array<number>): kotlin.UShort;
				public static toUByteArray(thistoUByteArray: native.Array<kotlin.UByte>): native.Array<number>;
				public static toTypedArray(thistoTypedArray: native.Array<number>): native.Array<kotlin.UByte>;
				public static sortDescending(thissortDescending: native.Array<number>, fromIndex: number, toIndex: number): void;
				public static zip(thiszip: native.Array<number>, other: native.Array<number>): java.util.List<kotlin.Pair<kotlin.ULong,kotlin.ULong>>;
				public static firstOrNull(thisfirstOrNull: native.Array<number>): kotlin.UInt;
				public static randomOrNull(thisrandomOrNull: native.Array<number>, random: kotlin.random.Random): kotlin.UInt;
				public static contentToString(thiscontentToString: native.Array<number>): string;
				public static random(thisrandom: native.Array<number>, random: kotlin.random.Random): number;
				public static slice(thisslice: native.Array<number>, indices: kotlin.ranges.IntRange): java.util.List<kotlin.UInt>;
				public static take(thistake: native.Array<number>, n: number): java.util.List<kotlin.UShort>;
				/** @deprecated */
				public static min(thismin: native.Array<number>): kotlin.UByte;
				/** @deprecated */
				public static min(thismin: native.Array<number>): kotlin.UInt;
				public static zip(thiszip: native.Array<number>, other: native.Array<number>): java.util.List<kotlin.Pair<kotlin.UInt,kotlin.UInt>>;
				public static slice(thisslice: native.Array<number>, indices: java.lang.Iterable<java.lang.Integer>): java.util.List<kotlin.UInt>;
				public static drop(thisdrop: native.Array<number>, n: number): java.util.List<kotlin.UByte>;
				public static reversed(thisreversed: native.Array<number>): java.util.List<kotlin.ULong>;
				/** @deprecated */
				public static maxWith(thismaxWith: native.Array<number>, comparator: java.util.Comparator<any>): kotlin.UShort;
				public static getOrNull(thisgetOrNull: native.Array<number>, index: number): kotlin.UInt;
				public static drop(thisdrop: native.Array<number>, n: number): java.util.List<kotlin.ULong>;
				public static sumOfUByte(thissum: native.Array<kotlin.UByte>): number;
			}
		}
	}
}

declare module kotlin {
	export module comparisons {
		export class ComparisonsKt extends kotlin.comparisons.ComparisonsKt___ComparisonsKt {
			public static class: java.lang.Class<kotlin.comparisons.ComparisonsKt>;
		}
	}
}

declare module kotlin {
	export module comparisons {
		export class ComparisonsKt__ComparisonsKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.comparisons.ComparisonsKt__ComparisonsKt>;
			public static compareValues(a: java.lang.Comparable<any>, b: java.lang.Comparable<any>): number;
			public static reversed(thisreversed: java.util.Comparator<any>): java.util.Comparator<any>;
			public static nullsLast(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
			public static nullsFirst(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
			public static reverseOrder(): java.util.Comparator<any>;
			public static naturalOrder(): java.util.Comparator<any>;
			public constructor();
			public static compareValuesBy(a: any, b: any, selectors: native.Array<kotlin.jvm.functions.Function1<any,any>>): number;
			public static thenDescending(thisthenDescending: java.util.Comparator<any>, comparator: java.util.Comparator<any>): java.util.Comparator<any>;
			public static then(thisthen: java.util.Comparator<any>, comparator: java.util.Comparator<any>): java.util.Comparator<any>;
			public static compareBy(selectors: native.Array<kotlin.jvm.functions.Function1<any,any>>): java.util.Comparator<any>;
		}
	}
}

declare module kotlin {
	export module comparisons {
		export class ComparisonsKt___ComparisonsJvmKt extends kotlin.comparisons.ComparisonsKt__ComparisonsKt {
			public static class: java.lang.Class<kotlin.comparisons.ComparisonsKt___ComparisonsJvmKt>;
			public static maxOf(a: java.lang.Comparable<any>, b: java.lang.Comparable<any>, c: java.lang.Comparable<any>): java.lang.Comparable<any>;
			public static maxOf(a: java.lang.Comparable<any>, b: java.lang.Comparable<any>): java.lang.Comparable<any>;
			public static minOf(a: number, other: native.Array<number>): number;
			public static minOf(a: java.lang.Comparable<any>, b: java.lang.Comparable<any>, c: java.lang.Comparable<any>): java.lang.Comparable<any>;
			public static maxOf(a: number, other: native.Array<number>): number;
			public static minOf(a: java.lang.Comparable<any>, b: java.lang.Comparable<any>): java.lang.Comparable<any>;
			public static maxOf(a: java.lang.Comparable<any>, other: native.Array<java.lang.Comparable<any>>): java.lang.Comparable<any>;
			public constructor();
			public static minOf(a: java.lang.Comparable<any>, other: native.Array<java.lang.Comparable<any>>): java.lang.Comparable<any>;
		}
	}
}

declare module kotlin {
	export module comparisons {
		export class ComparisonsKt___ComparisonsKt extends kotlin.comparisons.ComparisonsKt___ComparisonsJvmKt {
			public static class: java.lang.Class<kotlin.comparisons.ComparisonsKt___ComparisonsKt>;
			public static maxOf(a: java.lang.Comparable<any>, b: java.lang.Comparable<any>, c: java.lang.Comparable<any>): java.lang.Comparable<any>;
			public static maxOf(a: java.lang.Comparable<any>, b: java.lang.Comparable<any>): java.lang.Comparable<any>;
			public static maxOf(a: number, other: native.Array<number>): number;
			public static maxOf(a: any, b: any, comparator: java.util.Comparator<any>): any;
			public static minOf(a: java.lang.Comparable<any>, b: java.lang.Comparable<any>): java.lang.Comparable<any>;
			public static maxOf(a: any, b: any, c: any, comparator: java.util.Comparator<any>): any;
			public constructor();
			public static minOf(a: number, other: native.Array<number>): number;
			public static minOf(a: java.lang.Comparable<any>, b: java.lang.Comparable<any>, c: java.lang.Comparable<any>): java.lang.Comparable<any>;
			public static minOf(a: any, b: any, comparator: java.util.Comparator<any>): any;
			public static minOf(a: any, b: any, c: any, comparator: java.util.Comparator<any>): any;
			public static minOf(a: any, other: native.Array<any>, comparator: java.util.Comparator<any>): any;
			public static maxOf(a: java.lang.Comparable<any>, other: native.Array<java.lang.Comparable<any>>): java.lang.Comparable<any>;
			public static minOf(a: java.lang.Comparable<any>, other: native.Array<java.lang.Comparable<any>>): java.lang.Comparable<any>;
			public static maxOf(a: any, other: native.Array<any>, comparator: java.util.Comparator<any>): any;
		}
	}
}

declare module kotlin {
	export module comparisons {
		export class NaturalOrderComparator extends java.util.Comparator<java.lang.Comparable<any>> {
			public static class: java.lang.Class<kotlin.comparisons.NaturalOrderComparator>;
			public static INSTANCE: kotlin.comparisons.NaturalOrderComparator;
			public thenComparing(keyExtractor: any /* any*/, keyComparator: java.util.Comparator<any>): java.util.Comparator<any>;
			public static comparingInt(keyExtractor: any /* any*/): java.util.Comparator<any>;
			public reversed(): java.util.Comparator<java.lang.Comparable<any>>;
			public thenComparing(keyExtractor: any /* any*/): java.util.Comparator<any>;
			public static comparing(keyExtractor: any /* any*/): java.util.Comparator<any>;
			public static nullsLast(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
			public static comparing(keyExtractor: any /* any*/, keyComparator: java.util.Comparator<any>): java.util.Comparator<any>;
			public static reverseOrder(): java.util.Comparator<any>;
			public thenComparingInt(keyExtractor: any /* any*/): java.util.Comparator<any>;
			public compare(object0: any, object1: any): number;
			public thenComparingLong(keyExtractor: any /* any*/): java.util.Comparator<any>;
			public thenComparing(other: java.util.Comparator<any>): java.util.Comparator<any>;
			public equals(obj: any): boolean;
			public thenComparingDouble(keyExtractor: any /* any*/): java.util.Comparator<any>;
			public static comparingDouble(keyExtractor: any /* any*/): java.util.Comparator<any>;
			public compare(a: java.lang.Comparable<any>, b: java.lang.Comparable<any>): number;
			public static comparingLong(keyExtractor: any /* any*/): java.util.Comparator<any>;
			public static nullsFirst(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
			public reversed(): java.util.Comparator<any>;
			public static naturalOrder(): java.util.Comparator<any>;
		}
	}
}

declare module kotlin {
	export module comparisons {
		export class ReverseOrderComparator extends java.util.Comparator<java.lang.Comparable<any>> {
			public static class: java.lang.Class<kotlin.comparisons.ReverseOrderComparator>;
			public static INSTANCE: kotlin.comparisons.ReverseOrderComparator;
			public thenComparing(keyExtractor: any /* any*/, keyComparator: java.util.Comparator<any>): java.util.Comparator<any>;
			public static comparingInt(keyExtractor: any /* any*/): java.util.Comparator<any>;
			public reversed(): java.util.Comparator<java.lang.Comparable<any>>;
			public thenComparing(keyExtractor: any /* any*/): java.util.Comparator<any>;
			public static comparing(keyExtractor: any /* any*/): java.util.Comparator<any>;
			public static nullsLast(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
			public static comparing(keyExtractor: any /* any*/, keyComparator: java.util.Comparator<any>): java.util.Comparator<any>;
			public static reverseOrder(): java.util.Comparator<any>;
			public thenComparingInt(keyExtractor: any /* any*/): java.util.Comparator<any>;
			public compare(object0: any, object1: any): number;
			public thenComparingLong(keyExtractor: any /* any*/): java.util.Comparator<any>;
			public thenComparing(other: java.util.Comparator<any>): java.util.Comparator<any>;
			public equals(obj: any): boolean;
			public thenComparingDouble(keyExtractor: any /* any*/): java.util.Comparator<any>;
			public static comparingDouble(keyExtractor: any /* any*/): java.util.Comparator<any>;
			public compare(a: java.lang.Comparable<any>, b: java.lang.Comparable<any>): number;
			public static comparingLong(keyExtractor: any /* any*/): java.util.Comparator<any>;
			public static nullsFirst(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
			public reversed(): java.util.Comparator<any>;
			public static naturalOrder(): java.util.Comparator<any>;
		}
	}
}

declare module kotlin {
	export module comparisons {
		export class ReversedComparator<T>  extends java.util.Comparator<any> {
			public static class: java.lang.Class<kotlin.comparisons.ReversedComparator<any>>;
			public thenComparing(keyExtractor: any /* any*/, keyComparator: java.util.Comparator<any>): java.util.Comparator<any>;
			public static comparingInt(keyExtractor: any /* any*/): java.util.Comparator<any>;
			public thenComparing(keyExtractor: any /* any*/): java.util.Comparator<any>;
			public static comparing(keyExtractor: any /* any*/): java.util.Comparator<any>;
			public static nullsLast(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
			public static comparing(keyExtractor: any /* any*/, keyComparator: java.util.Comparator<any>): java.util.Comparator<any>;
			public getComparator(): java.util.Comparator<any>;
			public static reverseOrder(): java.util.Comparator<any>;
			public thenComparingInt(keyExtractor: any /* any*/): java.util.Comparator<any>;
			public constructor(comparator: java.util.Comparator<any>);
			public thenComparingLong(keyExtractor: any /* any*/): java.util.Comparator<any>;
			public thenComparing(other: java.util.Comparator<any>): java.util.Comparator<any>;
			public equals(obj: any): boolean;
			public thenComparingDouble(keyExtractor: any /* any*/): java.util.Comparator<any>;
			public static comparingDouble(keyExtractor: any /* any*/): java.util.Comparator<any>;
			public static comparingLong(keyExtractor: any /* any*/): java.util.Comparator<any>;
			public static nullsFirst(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
			public compare(a: any, b: any): number;
			public reversed(): java.util.Comparator<any>;
			public static naturalOrder(): java.util.Comparator<any>;
		}
	}
}

declare module kotlin {
	export module comparisons {
		export class UComparisonsKt extends kotlin.comparisons.UComparisonsKt___UComparisonsKt {
			public static class: java.lang.Class<kotlin.comparisons.UComparisonsKt>;
		}
	}
}

declare module kotlin {
	export module comparisons {
		export class UComparisonsKt___UComparisonsKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.comparisons.UComparisonsKt___UComparisonsKt>;
			public static minOf(a: number, other: native.Array<number>): number;
			public static maxOf(a: number, other: native.Array<number>): number;
			public static minOf(a: number, b: number): number;
			public constructor();
			public static maxOf(a: number, b: number): number;
		}
	}
}

declare module kotlin {
	export module concurrent {
		export class LocksKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.concurrent.LocksKt>;
		}
	}
}

declare module kotlin {
	export module concurrent {
		export class ThreadsKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.concurrent.ThreadsKt>;
			public static thread(start: boolean, isDaemon: boolean, contextClassLoader: java.lang.ClassLoader, name: string, priority: number, block: kotlin.jvm.functions.Function0<kotlin.Unit>): java.lang.Thread;
		}
	}
}

declare module kotlin {
	export module concurrent {
		export class TimersKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.concurrent.TimersKt>;
			public static timer(name: string, daemon: boolean): java.util.Timer;
		}
	}
}

declare module kotlin {
	export module contracts {
		export class CallsInPlace extends java.lang.Object implements kotlin.contracts.Effect {
			public static class: java.lang.Class<kotlin.contracts.CallsInPlace>;
			/**
			 * Constructs a new instance of the kotlin.contracts.CallsInPlace interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
			});
			public constructor();
		}
	}
}

declare module kotlin {
	export module contracts {
		export class ConditionalEffect extends java.lang.Object implements kotlin.contracts.Effect {
			public static class: java.lang.Class<kotlin.contracts.ConditionalEffect>;
			/**
			 * Constructs a new instance of the kotlin.contracts.ConditionalEffect interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
			});
			public constructor();
		}
	}
}

declare module kotlin {
	export module contracts {
		export class ContractBuilder extends java.lang.Object {
			public static class: java.lang.Class<kotlin.contracts.ContractBuilder>;
			/**
			 * Constructs a new instance of the kotlin.contracts.ContractBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				returns(): kotlin.contracts.Returns;
				returns(object0: any): kotlin.contracts.Returns;
				returnsNotNull(): kotlin.contracts.ReturnsNotNull;
				callsInPlace(function0: kotlin.Function<any>, invocationKind1: kotlin.contracts.InvocationKind): kotlin.contracts.CallsInPlace;
			});
			public constructor();
			public returns(): kotlin.contracts.Returns;
			public returns(object0: any): kotlin.contracts.Returns;
			public returnsNotNull(): kotlin.contracts.ReturnsNotNull;
			public callsInPlace(function0: kotlin.Function<any>, invocationKind1: kotlin.contracts.InvocationKind): kotlin.contracts.CallsInPlace;
		}
		export module ContractBuilder {
			export class DefaultImpls extends java.lang.Object {
				public static class: java.lang.Class<kotlin.contracts.ContractBuilder.DefaultImpls>;
			}
		}
	}
}

declare module kotlin {
	export module contracts {
		export class ContractBuilderKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.contracts.ContractBuilderKt>;
		}
	}
}

declare module kotlin {
	export module contracts {
		export class Effect extends java.lang.Object {
			public static class: java.lang.Class<kotlin.contracts.Effect>;
			/**
			 * Constructs a new instance of the kotlin.contracts.Effect interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
			});
			public constructor();
		}
	}
}

declare module kotlin {
	export module contracts {
		export class ExperimentalContracts extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kotlin.contracts.ExperimentalContracts>;
			/**
			 * Constructs a new instance of the kotlin.contracts.ExperimentalContracts interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				equals(object0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public toString(): string;
			public equals(obj: any): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module contracts {
		export class InvocationKind {
			public static class: java.lang.Class<kotlin.contracts.InvocationKind>;
			public static AT_MOST_ONCE: kotlin.contracts.InvocationKind;
			public static AT_LEAST_ONCE: kotlin.contracts.InvocationKind;
			public static EXACTLY_ONCE: kotlin.contracts.InvocationKind;
			public static UNKNOWN: kotlin.contracts.InvocationKind;
			public static values(): native.Array<kotlin.contracts.InvocationKind>;
			public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
			public static valueOf(string0: string): kotlin.contracts.InvocationKind;
		}
	}
}

declare module kotlin {
	export module contracts {
		export class Returns extends java.lang.Object implements kotlin.contracts.SimpleEffect {
			public static class: java.lang.Class<kotlin.contracts.Returns>;
			/**
			 * Constructs a new instance of the kotlin.contracts.Returns interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				implies(boolean0: boolean): kotlin.contracts.ConditionalEffect;
			});
			public constructor();
			public implies(boolean0: boolean): kotlin.contracts.ConditionalEffect;
		}
	}
}

declare module kotlin {
	export module contracts {
		export class ReturnsNotNull extends java.lang.Object implements kotlin.contracts.SimpleEffect {
			public static class: java.lang.Class<kotlin.contracts.ReturnsNotNull>;
			/**
			 * Constructs a new instance of the kotlin.contracts.ReturnsNotNull interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				implies(boolean0: boolean): kotlin.contracts.ConditionalEffect;
			});
			public constructor();
			public implies(boolean0: boolean): kotlin.contracts.ConditionalEffect;
		}
	}
}

declare module kotlin {
	export module contracts {
		export class SimpleEffect extends java.lang.Object implements kotlin.contracts.Effect {
			public static class: java.lang.Class<kotlin.contracts.SimpleEffect>;
			/**
			 * Constructs a new instance of the kotlin.contracts.SimpleEffect interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				implies(boolean0: boolean): kotlin.contracts.ConditionalEffect;
			});
			public constructor();
			public implies(boolean0: boolean): kotlin.contracts.ConditionalEffect;
		}
	}
}

declare module kotlin {
	export module coroutines {
		export abstract class AbstractCoroutineContextElement extends java.lang.Object implements kotlin.coroutines.CoroutineContext.Element {
			public static class: java.lang.Class<kotlin.coroutines.AbstractCoroutineContextElement>;
			public fold(initial: any, operation: kotlin.jvm.functions.Function2<any,any,any>): any;
			public minusKey(key: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext;
			public get(key: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext.Element;
			public getKey(): kotlin.coroutines.CoroutineContext.Key<any>;
			public constructor(key: kotlin.coroutines.CoroutineContext.Key<any>);
			public plus(context: kotlin.coroutines.CoroutineContext): kotlin.coroutines.CoroutineContext;
		}
	}
}

declare module kotlin {
	export module coroutines {
		export abstract class AbstractCoroutineContextKey<B>  extends kotlin.coroutines.CoroutineContext.Key<any> {
			public static class: java.lang.Class<kotlin.coroutines.AbstractCoroutineContextKey<any>>;
			public constructor(baseKey: kotlin.coroutines.CoroutineContext.Key<any>, safeCast: kotlin.jvm.functions.Function1<any,any>);
			public tryCast(element: kotlin.coroutines.CoroutineContext.Element): any;
			public isSubKey(key: kotlin.coroutines.CoroutineContext.Key<any>): boolean;
		}
	}
}

declare module kotlin {
	export module coroutines {
		export class CombinedContext extends java.lang.Object implements kotlin.coroutines.CoroutineContext, java.io.Serializable {
			public static class: java.lang.Class<kotlin.coroutines.CombinedContext>;
			public fold(initial: any, operation: kotlin.jvm.functions.Function2<any,any,any>): any;
			public minusKey(key: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext;
			public equals(other: any): boolean;
			public get(key: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext.Element;
			public toString(): string;
			public equals(obj: any): boolean;
			public plus(context: kotlin.coroutines.CoroutineContext): kotlin.coroutines.CoroutineContext;
			public hashCode(): number;
			public constructor(left: kotlin.coroutines.CoroutineContext, element: kotlin.coroutines.CoroutineContext.Element);
		}
		export module CombinedContext {
			export class Serialized extends java.lang.Object implements java.io.Serializable {
				public static class: java.lang.Class<kotlin.coroutines.CombinedContext.Serialized>;
				public static Companion: kotlin.coroutines.CombinedContext.Serialized.Companion;
				public constructor(elements: native.Array<kotlin.coroutines.CoroutineContext>);
				public getElements(): native.Array<kotlin.coroutines.CoroutineContext>;
			}
			export module Serialized {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<kotlin.coroutines.CombinedContext.Serialized.Companion>;
				}
			}
		}
	}
}

declare module kotlin {
	export module coroutines {
		export class Continuation<T>  extends java.lang.Object {
			public static class: java.lang.Class<kotlin.coroutines.Continuation<any>>;
			/**
			 * Constructs a new instance of the kotlin.coroutines.Continuation<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getContext(): kotlin.coroutines.CoroutineContext;
				resumeWith(object0: any): void;
			});
			public constructor();
			public getContext(): kotlin.coroutines.CoroutineContext;
			public resumeWith(object0: any): void;
		}
	}
}

declare module kotlin {
	export module coroutines {
		export class ContinuationInterceptor extends java.lang.Object implements kotlin.coroutines.CoroutineContext.Element {
			public static class: java.lang.Class<kotlin.coroutines.ContinuationInterceptor>;
			/**
			 * Constructs a new instance of the kotlin.coroutines.ContinuationInterceptor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				interceptContinuation(continuation0: kotlin.coroutines.Continuation<any>): kotlin.coroutines.Continuation<any>;
				releaseInterceptedContinuation(continuation0: kotlin.coroutines.Continuation<any>): void;
				get(key0: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext.Element;
				minusKey(key0: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext;
				getKey(): kotlin.coroutines.CoroutineContext.Key<any>;
				get(key0: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext.Element;
				fold(object0: any, function21: kotlin.jvm.functions.Function2<any,any,any>): any;
				minusKey(key0: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext;
				get(key0: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext.Element;
				fold(object0: any, function21: kotlin.jvm.functions.Function2<any,any,any>): any;
				plus(coroutineContext0: kotlin.coroutines.CoroutineContext): kotlin.coroutines.CoroutineContext;
				minusKey(key0: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext;
			});
			public constructor();
			public static Key: kotlin.coroutines.ContinuationInterceptor.Key;
			public get(key0: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext.Element;
			public interceptContinuation(continuation0: kotlin.coroutines.Continuation<any>): kotlin.coroutines.Continuation<any>;
			public plus(coroutineContext0: kotlin.coroutines.CoroutineContext): kotlin.coroutines.CoroutineContext;
			public getKey(): kotlin.coroutines.CoroutineContext.Key<any>;
			public releaseInterceptedContinuation(continuation0: kotlin.coroutines.Continuation<any>): void;
			public fold(object0: any, function21: kotlin.jvm.functions.Function2<any,any,any>): any;
			public minusKey(key0: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext;
		}
		export module ContinuationInterceptor {
			export class DefaultImpls extends java.lang.Object {
				public static class: java.lang.Class<kotlin.coroutines.ContinuationInterceptor.DefaultImpls>;
				public static get(this0: kotlin.coroutines.ContinuationInterceptor, key: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext.Element;
				public static minusKey(this0: kotlin.coroutines.ContinuationInterceptor, key: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext;
				public static plus(this0: kotlin.coroutines.ContinuationInterceptor, context: kotlin.coroutines.CoroutineContext): kotlin.coroutines.CoroutineContext;
				public static fold(this0: kotlin.coroutines.ContinuationInterceptor, initial: any, operation: kotlin.jvm.functions.Function2<any,any,any>): any;
				public static releaseInterceptedContinuation(this0: kotlin.coroutines.ContinuationInterceptor, continuation: kotlin.coroutines.Continuation<any>): void;
			}
			export class Key extends kotlin.coroutines.CoroutineContext.Key<kotlin.coroutines.ContinuationInterceptor> {
				public static class: java.lang.Class<kotlin.coroutines.ContinuationInterceptor.Key>;
			}
		}
	}
}

declare module kotlin {
	export module coroutines {
		export class ContinuationKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.coroutines.ContinuationKt>;
			public static startCoroutine(thisstartCoroutine: kotlin.jvm.functions.Function2<any,any,any>, receiver: any, completion: kotlin.coroutines.Continuation<any>): void;
			public static createCoroutine(thiscreateCoroutine: kotlin.jvm.functions.Function2<any,any,any>, receiver: any, completion: kotlin.coroutines.Continuation<any>): kotlin.coroutines.Continuation<any>;
			public static startCoroutine(thisstartCoroutine: kotlin.jvm.functions.Function1<any,any>, completion: kotlin.coroutines.Continuation<any>): void;
			public static createCoroutine(thiscreateCoroutine: kotlin.jvm.functions.Function1<any,any>, completion: kotlin.coroutines.Continuation<any>): kotlin.coroutines.Continuation<any>;
		}
	}
}

declare module kotlin {
	export module coroutines {
		export class CoroutineContext extends java.lang.Object {
			public static class: java.lang.Class<kotlin.coroutines.CoroutineContext>;
			/**
			 * Constructs a new instance of the kotlin.coroutines.CoroutineContext interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				get(key0: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext.Element;
				fold(object0: any, function21: kotlin.jvm.functions.Function2<any,any,any>): any;
				plus(coroutineContext0: kotlin.coroutines.CoroutineContext): kotlin.coroutines.CoroutineContext;
				minusKey(key0: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext;
			});
			public constructor();
			public get(key0: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext.Element;
			public plus(coroutineContext0: kotlin.coroutines.CoroutineContext): kotlin.coroutines.CoroutineContext;
			public fold(object0: any, function21: kotlin.jvm.functions.Function2<any,any,any>): any;
			public minusKey(key0: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext;
		}
		export module CoroutineContext {
			export class DefaultImpls extends java.lang.Object {
				public static class: java.lang.Class<kotlin.coroutines.CoroutineContext.DefaultImpls>;
				public static plus(this0: kotlin.coroutines.CoroutineContext, context: kotlin.coroutines.CoroutineContext): kotlin.coroutines.CoroutineContext;
			}
			export class Element extends java.lang.Object implements kotlin.coroutines.CoroutineContext {
				public static class: java.lang.Class<kotlin.coroutines.CoroutineContext.Element>;
				/**
				 * Constructs a new instance of the kotlin.coroutines.CoroutineContext() when extending the interface class.
				 */
				public constructor(implementation: {
					getKey(): kotlin.coroutines.CoroutineContext.Key<any>;
					get(key0: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext.Element;
					fold(object0: any, function21: kotlin.jvm.functions.Function2<any,any,any>): any;
					minusKey(key0: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext;
					get(key0: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext.Element;
					fold(object0: any, function21: kotlin.jvm.functions.Function2<any,any,any>): any;
					plus(coroutineContext0: kotlin.coroutines.CoroutineContext): kotlin.coroutines.CoroutineContext;
					minusKey(key0: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext;
				});
				public constructor();
				public fold(object0: any, function21: kotlin.jvm.functions.Function2<any,any,any>): any;
				public get(key0: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext.Element;
				public getKey(): kotlin.coroutines.CoroutineContext.Key<any>;
				public plus(coroutineContext0: kotlin.coroutines.CoroutineContext): kotlin.coroutines.CoroutineContext;
				public minusKey(key0: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext;
			}
			export module Element {
				export class DefaultImpls extends java.lang.Object {
					public static class: java.lang.Class<kotlin.coroutines.CoroutineContext.Element.DefaultImpls>;
					public static minusKey(this0: kotlin.coroutines.CoroutineContext.Element, key: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext;
					public static plus(this0: kotlin.coroutines.CoroutineContext.Element, context: kotlin.coroutines.CoroutineContext): kotlin.coroutines.CoroutineContext;
					public static get(this0: kotlin.coroutines.CoroutineContext.Element, key: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext.Element;
					public static fold(this0: kotlin.coroutines.CoroutineContext.Element, initial: any, operation: kotlin.jvm.functions.Function2<any,any,any>): any;
				}
			}
			export class Key<E>  extends java.lang.Object {
				public static class: java.lang.Class<kotlin.coroutines.CoroutineContext.Key<any>>;
				/**
				 * Constructs a new instance of the kotlin.coroutines.CoroutineContext() when extending the interface class.
				 */
				public constructor(implementation: {
				});
				public constructor();
			}
		}
	}
}

declare module kotlin {
	export module coroutines {
		export class CoroutineContextImplKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.coroutines.CoroutineContextImplKt>;
			public static minusPolymorphicKey(thisminusPolymorphicKey: kotlin.coroutines.CoroutineContext.Element, key: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext;
			public static getPolymorphicElement(thisgetPolymorphicElement: kotlin.coroutines.CoroutineContext.Element, key: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext.Element;
		}
	}
}

declare module kotlin {
	export module coroutines {
		export class EmptyCoroutineContext extends java.lang.Object implements kotlin.coroutines.CoroutineContext, java.io.Serializable {
			public static class: java.lang.Class<kotlin.coroutines.EmptyCoroutineContext>;
			public static INSTANCE: kotlin.coroutines.EmptyCoroutineContext;
			public fold(initial: any, operation: kotlin.jvm.functions.Function2<any,any,any>): any;
			public minusKey(key: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext;
			public get(key: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext.Element;
			public toString(): string;
			public plus(context: kotlin.coroutines.CoroutineContext): kotlin.coroutines.CoroutineContext;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module coroutines {
		export class RestrictsSuspension extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kotlin.coroutines.RestrictsSuspension>;
			/**
			 * Constructs a new instance of the kotlin.coroutines.RestrictsSuspension interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				equals(object0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public toString(): string;
			public equals(obj: any): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module coroutines {
		export class SafeContinuation<T>  extends java.lang.Object {
			public static class: java.lang.Class<kotlin.coroutines.SafeContinuation<any>>;
			public getContext(): kotlin.coroutines.CoroutineContext;
			public getCallerFrame(): kotlin.coroutines.jvm.internal.CoroutineStackFrame;
			public toString(): string;
			public constructor(delegate: kotlin.coroutines.Continuation<any>);
			public constructor(delegate: kotlin.coroutines.Continuation<any>, initialResult: any);
			public resumeWith(result: any): void;
			public getStackTraceElement(): java.lang.StackTraceElement;
			public getOrThrow(): any;
		}
		export module SafeContinuation {
			export class Companion extends java.lang.Object {
				public static class: java.lang.Class<kotlin.coroutines.SafeContinuation.Companion>;
			}
		}
	}
}

declare module kotlin {
	export module coroutines {
		export module cancellation {
			export class CancellationExceptionKt extends java.lang.Object {
				public static class: java.lang.Class<kotlin.coroutines.cancellation.CancellationExceptionKt>;
			}
		}
	}
}

declare module kotlin {
	export module coroutines {
		export module intrinsics {
			export class CoroutineSingletons {
				public static class: java.lang.Class<kotlin.coroutines.intrinsics.CoroutineSingletons>;
				public static COROUTINE_SUSPENDED: kotlin.coroutines.intrinsics.CoroutineSingletons;
				public static UNDECIDED: kotlin.coroutines.intrinsics.CoroutineSingletons;
				public static RESUMED: kotlin.coroutines.intrinsics.CoroutineSingletons;
				public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static valueOf(string0: string): kotlin.coroutines.intrinsics.CoroutineSingletons;
				public static values(): native.Array<kotlin.coroutines.intrinsics.CoroutineSingletons>;
			}
		}
	}
}

declare module kotlin {
	export module coroutines {
		export module intrinsics {
			export class IntrinsicsKt extends kotlin.coroutines.intrinsics.IntrinsicsKt__IntrinsicsKt {
				public static class: java.lang.Class<kotlin.coroutines.intrinsics.IntrinsicsKt>;
			}
		}
	}
}

declare module kotlin {
	export module coroutines {
		export module intrinsics {
			export class IntrinsicsKt__IntrinsicsJvmKt extends java.lang.Object {
				public static class: java.lang.Class<kotlin.coroutines.intrinsics.IntrinsicsKt__IntrinsicsJvmKt>;
				public static createCoroutineUnintercepted(thiscreateCoroutineUnintercepted: kotlin.jvm.functions.Function2<any,any,any>, receiver: any, completion: kotlin.coroutines.Continuation<any>): kotlin.coroutines.Continuation<any>;
				public static createCoroutineUnintercepted(thiscreateCoroutineUnintercepted: kotlin.jvm.functions.Function1<any,any>, completion: kotlin.coroutines.Continuation<any>): kotlin.coroutines.Continuation<any>;
				public static intercepted(thisintercepted: kotlin.coroutines.Continuation<any>): kotlin.coroutines.Continuation<any>;
				public constructor();
			}
		}
	}
}

declare module kotlin {
	export module coroutines {
		export module intrinsics {
			export class IntrinsicsKt__IntrinsicsKt extends kotlin.coroutines.intrinsics.IntrinsicsKt__IntrinsicsJvmKt {
				public static class: java.lang.Class<kotlin.coroutines.intrinsics.IntrinsicsKt__IntrinsicsKt>;
				public static getCOROUTINE_SUSPENDED(): any;
				public constructor();
			}
		}
	}
}

declare module kotlin {
	export module coroutines {
		export module jvm {
			export module internal {
				export abstract class BaseContinuationImpl extends java.lang.Object {
					public static class: java.lang.Class<kotlin.coroutines.jvm.internal.BaseContinuationImpl>;
					public toString(): string;
					public getCompletion(): kotlin.coroutines.Continuation<any>;
					public create(completion: kotlin.coroutines.Continuation<any>): kotlin.coroutines.Continuation<kotlin.Unit>;
					public create(value: any, completion: kotlin.coroutines.Continuation<any>): kotlin.coroutines.Continuation<kotlin.Unit>;
					public getCallerFrame(): kotlin.coroutines.jvm.internal.CoroutineStackFrame;
					public getContext(): kotlin.coroutines.CoroutineContext;
					public releaseIntercepted(): void;
					public invokeSuspend(object0: any): any;
					public constructor(completion: kotlin.coroutines.Continuation<any>);
					public getStackTraceElement(): java.lang.StackTraceElement;
					public resumeWith(result: any): void;
				}
			}
		}
	}
}

declare module kotlin {
	export module coroutines {
		export module jvm {
			export module internal {
				export class Boxing extends java.lang.Object {
					public static class: java.lang.Class<kotlin.coroutines.jvm.internal.Boxing>;
					public static boxFloat(primitive: number): java.lang.Float;
					public static boxByte(primitive: number): java.lang.Byte;
					public static boxLong(primitive: number): java.lang.Long;
					public static boxShort(primitive: number): java.lang.Short;
					public static boxBoolean(primitive: boolean): java.lang.Boolean;
					public static boxChar(primitive: string): java.lang.Character;
					public static boxInt(primitive: number): java.lang.Integer;
					public static boxDouble(primitive: number): java.lang.Double;
				}
			}
		}
	}
}

declare module kotlin {
	export module coroutines {
		export module jvm {
			export module internal {
				export class CompletedContinuation extends kotlin.coroutines.Continuation<any> {
					public static class: java.lang.Class<kotlin.coroutines.jvm.internal.CompletedContinuation>;
					public static INSTANCE: kotlin.coroutines.jvm.internal.CompletedContinuation;
					public toString(): string;
					public getContext(): kotlin.coroutines.CoroutineContext;
					public resumeWith(result: any): void;
				}
			}
		}
	}
}

declare module kotlin {
	export module coroutines {
		export module jvm {
			export module internal {
				export abstract class ContinuationImpl extends kotlin.coroutines.jvm.internal.BaseContinuationImpl {
					public static class: java.lang.Class<kotlin.coroutines.jvm.internal.ContinuationImpl>;
					public constructor(completion: kotlin.coroutines.Continuation<any>, _context: kotlin.coroutines.CoroutineContext);
					public getContext(): kotlin.coroutines.CoroutineContext;
					public intercepted(): kotlin.coroutines.Continuation<any>;
					public getCallerFrame(): kotlin.coroutines.jvm.internal.CoroutineStackFrame;
					public releaseIntercepted(): void;
					public constructor(completion: kotlin.coroutines.Continuation<any>);
					public getStackTraceElement(): java.lang.StackTraceElement;
					public resumeWith(result: any): void;
				}
			}
		}
	}
}

declare module kotlin {
	export module coroutines {
		export module jvm {
			export module internal {
				export class CoroutineStackFrame extends java.lang.Object {
					public static class: java.lang.Class<kotlin.coroutines.jvm.internal.CoroutineStackFrame>;
					/**
					 * Constructs a new instance of the kotlin.coroutines.jvm.internal.CoroutineStackFrame interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getCallerFrame(): kotlin.coroutines.jvm.internal.CoroutineStackFrame;
						getStackTraceElement(): java.lang.StackTraceElement;
					});
					public constructor();
					public getCallerFrame(): kotlin.coroutines.jvm.internal.CoroutineStackFrame;
					public getStackTraceElement(): java.lang.StackTraceElement;
				}
			}
		}
	}
}

declare module kotlin {
	export module coroutines {
		export module jvm {
			export module internal {
				export class DebugMetadata extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<kotlin.coroutines.jvm.internal.DebugMetadata>;
					/**
					 * Constructs a new instance of the kotlin.coroutines.jvm.internal.DebugMetadata interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						v(): number;
						f(): string;
						l(): native.Array<number>;
						n(): native.Array<string>;
						s(): native.Array<string>;
						i(): native.Array<number>;
						m(): string;
						c(): string;
						equals(object0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public l(): native.Array<number>;
					public i(): native.Array<number>;
					public c(): string;
					public equals(obj: any): boolean;
					public toString(): string;
					public v(): number;
					public annotationType(): java.lang.Class<any>;
					public s(): native.Array<string>;
					public m(): string;
					public f(): string;
					public hashCode(): number;
					public n(): native.Array<string>;
				}
			}
		}
	}
}

declare module kotlin {
	export module coroutines {
		export module jvm {
			export module internal {
				export class DebugMetadataKt extends java.lang.Object {
					public static class: java.lang.Class<kotlin.coroutines.jvm.internal.DebugMetadataKt>;
					public static getStackTraceElement(thisgetStackTraceElementImpl: kotlin.coroutines.jvm.internal.BaseContinuationImpl): java.lang.StackTraceElement;
					public static getSpilledVariableFieldMapping(thisgetSpilledVariableFieldMapping: kotlin.coroutines.jvm.internal.BaseContinuationImpl): native.Array<string>;
				}
			}
		}
	}
}

declare module kotlin {
	export module coroutines {
		export module jvm {
			export module internal {
				export class DebugProbesKt extends java.lang.Object {
					public static class: java.lang.Class<kotlin.coroutines.jvm.internal.DebugProbesKt>;
					public static probeCoroutineSuspended(frame: kotlin.coroutines.Continuation<any>): void;
					public static probeCoroutineResumed(frame: kotlin.coroutines.Continuation<any>): void;
					public static probeCoroutineCreated(completion: kotlin.coroutines.Continuation<any>): kotlin.coroutines.Continuation<any>;
				}
			}
		}
	}
}

declare module kotlin {
	export module coroutines {
		export module jvm {
			export module internal {
				export class ModuleNameRetriever extends java.lang.Object {
					public static class: java.lang.Class<kotlin.coroutines.jvm.internal.ModuleNameRetriever>;
					public static cache: kotlin.coroutines.jvm.internal.ModuleNameRetriever.Cache;
					public static INSTANCE: kotlin.coroutines.jvm.internal.ModuleNameRetriever;
					public getModuleName(continuation: kotlin.coroutines.jvm.internal.BaseContinuationImpl): string;
				}
				export module ModuleNameRetriever {
					export class Cache extends java.lang.Object {
						public static class: java.lang.Class<kotlin.coroutines.jvm.internal.ModuleNameRetriever.Cache>;
						public getModuleMethod: java.lang.reflect.Method;
						public getDescriptorMethod: java.lang.reflect.Method;
						public nameMethod: java.lang.reflect.Method;
						public constructor(getModuleMethod: java.lang.reflect.Method, getDescriptorMethod: java.lang.reflect.Method, nameMethod: java.lang.reflect.Method);
					}
				}
			}
		}
	}
}

declare module kotlin {
	export module coroutines {
		export module jvm {
			export module internal {
				export abstract class RestrictedContinuationImpl extends kotlin.coroutines.jvm.internal.BaseContinuationImpl {
					public static class: java.lang.Class<kotlin.coroutines.jvm.internal.RestrictedContinuationImpl>;
					public getContext(): kotlin.coroutines.CoroutineContext;
					public getCallerFrame(): kotlin.coroutines.jvm.internal.CoroutineStackFrame;
					public constructor(completion: kotlin.coroutines.Continuation<any>);
					public getStackTraceElement(): java.lang.StackTraceElement;
					public resumeWith(result: any): void;
				}
			}
		}
	}
}

declare module kotlin {
	export module coroutines {
		export module jvm {
			export module internal {
				export abstract class RestrictedSuspendLambda extends kotlin.coroutines.jvm.internal.RestrictedContinuationImpl {
					public static class: java.lang.Class<kotlin.coroutines.jvm.internal.RestrictedSuspendLambda>;
					public toString(): string;
					public getArity(): number;
					public constructor(arity: number);
					public getContext(): kotlin.coroutines.CoroutineContext;
					public getCallerFrame(): kotlin.coroutines.jvm.internal.CoroutineStackFrame;
					public constructor(completion: kotlin.coroutines.Continuation<any>);
					public constructor(arity: number, completion: kotlin.coroutines.Continuation<any>);
					public getStackTraceElement(): java.lang.StackTraceElement;
					public resumeWith(result: any): void;
				}
			}
		}
	}
}

declare module kotlin {
	export module coroutines {
		export module jvm {
			export module internal {
				export class RunSuspend extends kotlin.coroutines.Continuation<kotlin.Unit> {
					public static class: java.lang.Class<kotlin.coroutines.jvm.internal.RunSuspend>;
					public getContext(): kotlin.coroutines.CoroutineContext;
					public constructor();
					public await(): void;
					public setResult(param0: kotlin.Result<kotlin.Unit>): void;
					public resumeWith(result: any): void;
					public getResult(): kotlin.Result<kotlin.Unit>;
				}
			}
		}
	}
}

declare module kotlin {
	export module coroutines {
		export module jvm {
			export module internal {
				export class RunSuspendKt extends java.lang.Object {
					public static class: java.lang.Class<kotlin.coroutines.jvm.internal.RunSuspendKt>;
					public static runSuspend(block: kotlin.jvm.functions.Function1<any,any>): void;
				}
			}
		}
	}
}

declare module kotlin {
	export module coroutines {
		export module jvm {
			export module internal {
				export class SuspendFunction extends java.lang.Object {
					public static class: java.lang.Class<kotlin.coroutines.jvm.internal.SuspendFunction>;
					/**
					 * Constructs a new instance of the kotlin.coroutines.jvm.internal.SuspendFunction interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module kotlin {
	export module coroutines {
		export module jvm {
			export module internal {
				export abstract class SuspendLambda extends kotlin.coroutines.jvm.internal.ContinuationImpl {
					public static class: java.lang.Class<kotlin.coroutines.jvm.internal.SuspendLambda>;
					public constructor(completion: kotlin.coroutines.Continuation<any>, _context: kotlin.coroutines.CoroutineContext);
					public toString(): string;
					public getArity(): number;
					public constructor(arity: number);
					public getContext(): kotlin.coroutines.CoroutineContext;
					public getCallerFrame(): kotlin.coroutines.jvm.internal.CoroutineStackFrame;
					public constructor(completion: kotlin.coroutines.Continuation<any>);
					public constructor(arity: number, completion: kotlin.coroutines.Continuation<any>);
					public getStackTraceElement(): java.lang.StackTraceElement;
					public resumeWith(result: any): void;
				}
			}
		}
	}
}

declare module kotlin {
	export module experimental {
		export class BitwiseOperationsKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.experimental.BitwiseOperationsKt>;
		}
	}
}

declare module kotlin {
	export module experimental {
		export class ExperimentalTypeInference extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kotlin.experimental.ExperimentalTypeInference>;
			/**
			 * Constructs a new instance of the kotlin.experimental.ExperimentalTypeInference interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				equals(object0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public toString(): string;
			public equals(obj: any): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module internal {
		export class AccessibleLateinitPropertyLiteral extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kotlin.internal.AccessibleLateinitPropertyLiteral>;
			/**
			 * Constructs a new instance of the kotlin.internal.AccessibleLateinitPropertyLiteral interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				equals(object0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public toString(): string;
			public equals(obj: any): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module internal {
		export class ContractsDsl extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kotlin.internal.ContractsDsl>;
			/**
			 * Constructs a new instance of the kotlin.internal.ContractsDsl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				equals(object0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public toString(): string;
			public equals(obj: any): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module internal {
		export class DynamicExtension extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kotlin.internal.DynamicExtension>;
			/**
			 * Constructs a new instance of the kotlin.internal.DynamicExtension interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				equals(object0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public toString(): string;
			public equals(obj: any): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module internal {
		export class Exact extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kotlin.internal.Exact>;
			/**
			 * Constructs a new instance of the kotlin.internal.Exact interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				equals(object0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public toString(): string;
			public equals(obj: any): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module internal {
		export class HidesMembers extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kotlin.internal.HidesMembers>;
			/**
			 * Constructs a new instance of the kotlin.internal.HidesMembers interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				equals(object0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public toString(): string;
			public equals(obj: any): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module internal {
		export class InlineOnly extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kotlin.internal.InlineOnly>;
			/**
			 * Constructs a new instance of the kotlin.internal.InlineOnly interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				equals(object0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public toString(): string;
			public equals(obj: any): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module internal {
		export class LowPriorityInOverloadResolution extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kotlin.internal.LowPriorityInOverloadResolution>;
			/**
			 * Constructs a new instance of the kotlin.internal.LowPriorityInOverloadResolution interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				equals(object0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public toString(): string;
			public equals(obj: any): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module internal {
		export class NoInfer extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kotlin.internal.NoInfer>;
			/**
			 * Constructs a new instance of the kotlin.internal.NoInfer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				equals(object0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public toString(): string;
			public equals(obj: any): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module internal {
		export class OnlyInputTypes extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kotlin.internal.OnlyInputTypes>;
			/**
			 * Constructs a new instance of the kotlin.internal.OnlyInputTypes interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				equals(object0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public toString(): string;
			public equals(obj: any): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module internal {
		export class PlatformDependent extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kotlin.internal.PlatformDependent>;
			/**
			 * Constructs a new instance of the kotlin.internal.PlatformDependent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				equals(object0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public toString(): string;
			public equals(obj: any): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module internal {
		export class PlatformImplementations extends java.lang.Object {
			public static class: java.lang.Class<kotlin.internal.PlatformImplementations>;
			public getSuppressed(exception: java.lang.Throwable): java.util.List<java.lang.Throwable>;
			public getMatchResultNamedGroup(matchResult: java.util.regex.MatchResult, name: string): kotlin.text.MatchGroup;
			public defaultPlatformRandom(): kotlin.random.Random;
			public constructor();
			public addSuppressed(cause: java.lang.Throwable, exception: java.lang.Throwable): void;
		}
		export module PlatformImplementations {
			export class ReflectThrowable extends java.lang.Object {
				public static class: java.lang.Class<kotlin.internal.PlatformImplementations.ReflectThrowable>;
				public static addSuppressed: java.lang.reflect.Method;
				public static getSuppressed: java.lang.reflect.Method;
				public static INSTANCE: kotlin.internal.PlatformImplementations.ReflectThrowable;
			}
		}
	}
}

declare module kotlin {
	export module internal {
		export class PlatformImplementationsKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.internal.PlatformImplementationsKt>;
			public static IMPLEMENTATIONS: kotlin.internal.PlatformImplementations;
			public static apiVersionIsAtLeast(major: number, minor: number, patch: number): boolean;
		}
	}
}

declare module kotlin {
	export module internal {
		export class ProgressionUtilKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.internal.ProgressionUtilKt>;
			public static getProgressionLastElement(start: number, end: number, step: number): number;
		}
	}
}

declare module kotlin {
	export module internal {
		export class PureReifiable extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kotlin.internal.PureReifiable>;
			/**
			 * Constructs a new instance of the kotlin.internal.PureReifiable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				equals(object0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public toString(): string;
			public equals(obj: any): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module internal {
		export class RequireKotlin extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kotlin.internal.RequireKotlin>;
			/**
			 * Constructs a new instance of the kotlin.internal.RequireKotlin interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				version(): string;
				message(): string;
				level(): kotlin.DeprecationLevel;
				versionKind(): kotlin.internal.RequireKotlinVersionKind;
				errorCode(): number;
				equals(object0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public toString(): string;
			public equals(obj: any): boolean;
			public versionKind(): kotlin.internal.RequireKotlinVersionKind;
			public message(): string;
			public errorCode(): number;
			public level(): kotlin.DeprecationLevel;
			public annotationType(): java.lang.Class<any>;
			public version(): string;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module internal {
		export class RequireKotlinVersionKind {
			public static class: java.lang.Class<kotlin.internal.RequireKotlinVersionKind>;
			public static LANGUAGE_VERSION: kotlin.internal.RequireKotlinVersionKind;
			public static COMPILER_VERSION: kotlin.internal.RequireKotlinVersionKind;
			public static API_VERSION: kotlin.internal.RequireKotlinVersionKind;
			public static valueOf(string0: string): kotlin.internal.RequireKotlinVersionKind;
			public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
			public static values(): native.Array<kotlin.internal.RequireKotlinVersionKind>;
		}
	}
}

declare module kotlin {
	export module internal {
		export class UProgressionUtilKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.internal.UProgressionUtilKt>;
			public static getProgressionLastElement(start: number, end: number, step: number): number;
		}
	}
}

declare module kotlin {
	export module io {
		export class AccessDeniedException extends kotlin.io.FileSystemException {
			public static class: java.lang.Class<kotlin.io.AccessDeniedException>;
			public constructor(message: string);
			public constructor(file: java.io.File, other: java.io.File, reason: string);
			public constructor(message: string, cause: java.lang.Throwable);
			public constructor(cause: java.lang.Throwable);
			public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
			public constructor();
		}
	}
}

declare module kotlin {
	export module io {
		export class ByteStreamsKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.io.ByteStreamsKt>;
			public static iterator(thisiterator: java.io.BufferedInputStream): kotlin.collections.ByteIterator;
			/** @deprecated */
			public static readBytes(thisreadBytes: java.io.InputStream, estimatedSize: number): native.Array<number>;
			public static copyTo(thiscopyTo: java.io.InputStream, out: java.io.OutputStream, bufferSize: number): number;
			public static readBytes(thisreadBytes: java.io.InputStream): native.Array<number>;
		}
	}
}

declare module kotlin {
	export module io {
		export class CloseableKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.io.CloseableKt>;
			public static closeFinally(thiscloseFinally: java.io.Closeable, cause: java.lang.Throwable): void;
		}
	}
}

declare module kotlin {
	export module io {
		export class ConsoleKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.io.ConsoleKt>;
			public static readLine(): string;
		}
	}
}

declare module kotlin {
	export module io {
		export class ConstantsKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.io.ConstantsKt>;
			public static DEFAULT_BUFFER_SIZE: number;
			public static DEFAULT_BLOCK_SIZE: number;
			public static MINIMUM_BLOCK_SIZE: number;
		}
	}
}

declare module kotlin {
	export module io {
		export class ExceptionsKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.io.ExceptionsKt>;
		}
	}
}

declare module kotlin {
	export module io {
		export class ExposingBufferByteArrayOutputStream extends java.io.ByteArrayOutputStream {
			public static class: java.lang.Class<kotlin.io.ExposingBufferByteArrayOutputStream>;
			public flush(): void;
			public constructor(size: number);
			public constructor();
			public close(): void;
			public getBuffer(): native.Array<number>;
		}
	}
}

declare module kotlin {
	export module io {
		export class FileAlreadyExistsException extends kotlin.io.FileSystemException {
			public static class: java.lang.Class<kotlin.io.FileAlreadyExistsException>;
			public constructor(message: string);
			public constructor(file: java.io.File, other: java.io.File, reason: string);
			public constructor(message: string, cause: java.lang.Throwable);
			public constructor(cause: java.lang.Throwable);
			public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
			public constructor();
		}
	}
}

declare module kotlin {
	export module io {
		export class FilePathComponents extends java.lang.Object {
			public static class: java.lang.Class<kotlin.io.FilePathComponents>;
			public getSegments(): java.util.List<java.io.File>;
			public component1(): java.io.File;
			public subPath(beginIndex: number, endIndex: number): java.io.File;
			public getRoot(): java.io.File;
			public getSize(): number;
			public component2(): java.util.List<java.io.File>;
			public constructor(root: java.io.File, segments: java.util.List<any>);
			public toString(): string;
			public equals(obj: any): boolean;
			public copy(root: java.io.File, segments: java.util.List<any>): kotlin.io.FilePathComponents;
			public isRooted(): boolean;
			public getRootName(): string;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module io {
		export class FileSystemException extends java.io.IOException {
			public static class: java.lang.Class<kotlin.io.FileSystemException>;
			public getFile(): java.io.File;
			public constructor(message: string);
			public getReason(): string;
			public constructor(file: java.io.File, other: java.io.File, reason: string);
			public getOther(): java.io.File;
			public constructor(message: string, cause: java.lang.Throwable);
			public constructor(cause: java.lang.Throwable);
			public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
			public constructor();
		}
	}
}

declare module kotlin {
	export module io {
		export class FileTreeWalk extends kotlin.sequences.Sequence<java.io.File> {
			public static class: java.lang.Class<kotlin.io.FileTreeWalk>;
			public onEnter(function0: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): kotlin.io.FileTreeWalk;
			public constructor(start: java.io.File, direction: kotlin.io.FileWalkDirection);
			public iterator(): java.util.Iterator<java.io.File>;
			public maxDepth(depth: number): kotlin.io.FileTreeWalk;
			public onFail(function0: kotlin.jvm.functions.Function2<any,any,kotlin.Unit>): kotlin.io.FileTreeWalk;
			public onLeave(function0: kotlin.jvm.functions.Function1<any,kotlin.Unit>): kotlin.io.FileTreeWalk;
			public iterator(): java.util.Iterator<any>;
		}
		export module FileTreeWalk {
			export abstract class DirectoryState extends kotlin.io.FileTreeWalk.WalkState {
				public static class: java.lang.Class<kotlin.io.FileTreeWalk.DirectoryState>;
				public constructor(root: java.io.File);
				public constructor(rootDir: java.io.File);
			}
			export class FileTreeWalkIterator extends kotlin.collections.AbstractIterator<java.io.File> {
				public static class: java.lang.Class<kotlin.io.FileTreeWalk.FileTreeWalkIterator>;
				public computeNext(): void;
				public constructor(this0: kotlin.io.FileTreeWalk);
				public constructor();
			}
			export module FileTreeWalkIterator {
				export class BottomUpDirectoryState extends kotlin.io.FileTreeWalk.DirectoryState {
					public static class: java.lang.Class<kotlin.io.FileTreeWalk.FileTreeWalkIterator.BottomUpDirectoryState>;
					public constructor(this0: java.io.File);
					public constructor(rootDir: java.io.File);
					public step(): java.io.File;
				}
				export class SingleFileState extends kotlin.io.FileTreeWalk.WalkState {
					public static class: java.lang.Class<kotlin.io.FileTreeWalk.FileTreeWalkIterator.SingleFileState>;
					public constructor(root: java.io.File);
					public constructor(this0: java.io.File);
					public step(): java.io.File;
				}
				export class TopDownDirectoryState extends kotlin.io.FileTreeWalk.DirectoryState {
					public static class: java.lang.Class<kotlin.io.FileTreeWalk.FileTreeWalkIterator.TopDownDirectoryState>;
					public constructor(this0: java.io.File);
					public constructor(rootDir: java.io.File);
					public step(): java.io.File;
				}
				export class WhenMappings extends java.lang.Object {
					public static class: java.lang.Class<kotlin.io.FileTreeWalk.FileTreeWalkIterator.WhenMappings>;
				}
			}
			export abstract class WalkState extends java.lang.Object {
				public static class: java.lang.Class<kotlin.io.FileTreeWalk.WalkState>;
				public getRoot(): java.io.File;
				public step(): java.io.File;
				public constructor(root: java.io.File);
			}
		}
	}
}

declare module kotlin {
	export module io {
		export class FileWalkDirection {
			public static class: java.lang.Class<kotlin.io.FileWalkDirection>;
			public static TOP_DOWN: kotlin.io.FileWalkDirection;
			public static BOTTOM_UP: kotlin.io.FileWalkDirection;
			public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
			public static values(): native.Array<kotlin.io.FileWalkDirection>;
			public static valueOf(string0: string): kotlin.io.FileWalkDirection;
		}
	}
}

declare module kotlin {
	export module io {
		export class FilesKt extends kotlin.io.FilesKt__UtilsKt {
			public static class: java.lang.Class<kotlin.io.FilesKt>;
		}
	}
}

declare module kotlin {
	export module io {
		export class FilesKt__FilePathComponentsKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.io.FilesKt__FilePathComponentsKt>;
			public static subPath(thissubPath: java.io.File, beginIndex: number, endIndex: number): java.io.File;
			public static toComponents(thistoComponents: java.io.File): kotlin.io.FilePathComponents;
			public static getRoot(thisroot: java.io.File): java.io.File;
			public static isRooted(thisisRooted: java.io.File): boolean;
			public constructor();
			public static getRootName(thisrootName: java.io.File): string;
		}
	}
}

declare module kotlin {
	export module io {
		export class FilesKt__FileReadWriteKt extends kotlin.io.FilesKt__FilePathComponentsKt {
			public static class: java.lang.Class<kotlin.io.FilesKt__FileReadWriteKt>;
			public static readLines(thisreadLines: java.io.File, charset: java.nio.charset.Charset): java.util.List<string>;
			public static writeBytes(thiswriteBytes: java.io.File, array: native.Array<number>): void;
			public static appendBytes(thisappendBytes: java.io.File, array: native.Array<number>): void;
			public static readText(thisreadText: java.io.File, charset: java.nio.charset.Charset): string;
			public static forEachBlock(thisforEachBlock: java.io.File, blockSize: number, action: kotlin.jvm.functions.Function2<any,any,kotlin.Unit>): void;
			public static forEachBlock(thisforEachBlock: java.io.File, action: kotlin.jvm.functions.Function2<any,any,kotlin.Unit>): void;
			public static writeText(thiswriteText: java.io.File, text: string, charset: java.nio.charset.Charset): void;
			public static useLines(thisuseLines: java.io.File, charset: java.nio.charset.Charset, block: kotlin.jvm.functions.Function1<any,any>): any;
			public constructor();
			public static readBytes(thisreadBytes: java.io.File): native.Array<number>;
			public static forEachLine(thisforEachLine: java.io.File, charset: java.nio.charset.Charset, action: kotlin.jvm.functions.Function1<any,kotlin.Unit>): void;
			public static appendText(thisappendText: java.io.File, text: string, charset: java.nio.charset.Charset): void;
		}
	}
}

declare module kotlin {
	export module io {
		export class FilesKt__FileTreeWalkKt extends kotlin.io.FilesKt__FileReadWriteKt {
			public static class: java.lang.Class<kotlin.io.FilesKt__FileTreeWalkKt>;
			public static walkTopDown(thiswalkTopDown: java.io.File): kotlin.io.FileTreeWalk;
			public static walkBottomUp(thiswalkBottomUp: java.io.File): kotlin.io.FileTreeWalk;
			public constructor();
			public static walk(thiswalk: java.io.File, direction: kotlin.io.FileWalkDirection): kotlin.io.FileTreeWalk;
		}
	}
}

declare module kotlin {
	export module io {
		export class FilesKt__UtilsKt extends kotlin.io.FilesKt__FileTreeWalkKt {
			public static class: java.lang.Class<kotlin.io.FilesKt__UtilsKt>;
			public static relativeTo(thisrelativeTo: java.io.File, base: java.io.File): java.io.File;
			public static resolveSibling(thisresolveSibling: java.io.File, relative: java.io.File): java.io.File;
			public static copyRecursively(thiscopyRecursively: java.io.File, target: java.io.File, overwrite: boolean, onError: kotlin.jvm.functions.Function2<any,any,any>): boolean;
			public static resolve(thisresolve: java.io.File, relative: string): java.io.File;
			public static endsWith(thisendsWith: java.io.File, other: java.io.File): boolean;
			public static startsWith(thisstartsWith: java.io.File, other: java.io.File): boolean;
			public static copyTo(thiscopyTo: java.io.File, target: java.io.File, overwrite: boolean, bufferSize: number): java.io.File;
			public constructor();
			public static relativeToOrNull(thisrelativeToOrNull: java.io.File, base: java.io.File): java.io.File;
			public static createTempFile(prefix: string, suffix: string, directory: java.io.File): java.io.File;
			public static startsWith(thisstartsWith: java.io.File, other: string): boolean;
			public static endsWith(thisendsWith: java.io.File, other: string): boolean;
			public static normalize(thisnormalize: java.io.File): java.io.File;
			public static getInvariantSeparatorsPath(thisinvariantSeparatorsPath: java.io.File): string;
			public static resolve(thisresolve: java.io.File, relative: java.io.File): java.io.File;
			public static toRelativeString(thistoRelativeString: java.io.File, base: java.io.File): string;
			public static resolveSibling(thisresolveSibling: java.io.File, relative: string): java.io.File;
			public static getNameWithoutExtension(thisnameWithoutExtension: java.io.File): string;
			public static deleteRecursively(thisdeleteRecursively: java.io.File): boolean;
			public static getExtension(thisextension: java.io.File): string;
			public static relativeToOrSelf(thisrelativeToOrSelf: java.io.File, base: java.io.File): java.io.File;
			public static createTempDir(prefix: string, suffix: string, directory: java.io.File): java.io.File;
		}
	}
}

declare module kotlin {
	export module io {
		export class LineReader extends java.lang.Object {
			public static class: java.lang.Class<kotlin.io.LineReader>;
			public static INSTANCE: kotlin.io.LineReader;
			public readLine(inputStream: java.io.InputStream, charset: java.nio.charset.Charset): string;
		}
	}
}

declare module kotlin {
	export module io {
		export class LinesSequence extends kotlin.sequences.Sequence<string> {
			public static class: java.lang.Class<kotlin.io.LinesSequence>;
			public iterator(): java.util.Iterator<string>;
			public constructor(reader: java.io.BufferedReader);
			public iterator(): java.util.Iterator<any>;
		}
	}
}

declare module kotlin {
	export module io {
		export class NoSuchFileException extends kotlin.io.FileSystemException {
			public static class: java.lang.Class<kotlin.io.NoSuchFileException>;
			public constructor(message: string);
			public constructor(file: java.io.File, other: java.io.File, reason: string);
			public constructor(message: string, cause: java.lang.Throwable);
			public constructor(cause: java.lang.Throwable);
			public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
			public constructor();
		}
	}
}

declare module kotlin {
	export module io {
		export class OnErrorAction {
			public static class: java.lang.Class<kotlin.io.OnErrorAction>;
			public static SKIP: kotlin.io.OnErrorAction;
			public static TERMINATE: kotlin.io.OnErrorAction;
			public static values(): native.Array<kotlin.io.OnErrorAction>;
			public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
			public static valueOf(string0: string): kotlin.io.OnErrorAction;
		}
	}
}

declare module kotlin {
	export module io {
		export class SerializableKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.io.SerializableKt>;
		}
	}
}

declare module kotlin {
	export module io {
		export class TerminateException extends kotlin.io.FileSystemException {
			public static class: java.lang.Class<kotlin.io.TerminateException>;
			public constructor(message: string);
			public constructor(file: java.io.File, other: java.io.File, reason: string);
			public constructor(message: string, cause: java.lang.Throwable);
			public constructor(cause: java.lang.Throwable);
			public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
			public constructor();
			public constructor(file: java.io.File);
		}
	}
}

declare module kotlin {
	export module io {
		export class TextStreamsKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.io.TextStreamsKt>;
			public static readText(thisreadText: java.io.Reader): string;
			public static readBytes(thisreadBytes: java.net.URL): native.Array<number>;
			public static forEachLine(thisforEachLine: java.io.Reader, action: kotlin.jvm.functions.Function1<any,kotlin.Unit>): void;
			public static readLines(thisreadLines: java.io.Reader): java.util.List<string>;
			public static copyTo(thiscopyTo: java.io.Reader, out: java.io.Writer, bufferSize: number): number;
			public static useLines(thisuseLines: java.io.Reader, block: kotlin.jvm.functions.Function1<any,any>): any;
			public static lineSequence(thislineSequence: java.io.BufferedReader): kotlin.sequences.Sequence<string>;
		}
	}
}

declare module kotlin {
	export module js {
		export class ExperimentalJsExport extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kotlin.js.ExperimentalJsExport>;
			/**
			 * Constructs a new instance of the kotlin.js.ExperimentalJsExport interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				equals(object0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public toString(): string;
			public equals(obj: any): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module jvm {
		export class JvmClassMappingKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.jvm.JvmClassMappingKt>;
			public static getJavaPrimitiveType(thisjavaPrimitiveType: kotlin.reflect.KClass<any>): java.lang.Class<any>;
			public static getJavaObjectType(thisjavaObjectType: kotlin.reflect.KClass<any>): java.lang.Class<any>;
			public static getKotlinClass(thiskotlin: java.lang.Class<any>): kotlin.reflect.KClass<any>;
			public static getJavaClass(thisjavaClass: any): java.lang.Class<any>;
			public static getAnnotationClass(thisannotationClass: java.lang.annotation.Annotation): kotlin.reflect.KClass<any>;
			public static getJavaClass(thisjava: kotlin.reflect.KClass<any>): java.lang.Class<any>;
			/** @deprecated */
			public static getRuntimeClassOfKClassInstance(thisjavaClass: kotlin.reflect.KClass<any>): java.lang.Class<any>;
		}
	}
}

declare module kotlin {
	export module jvm {
		export class JvmDefault extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kotlin.jvm.JvmDefault>;
			/**
			 * Constructs a new instance of the kotlin.jvm.JvmDefault interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				equals(object0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public toString(): string;
			public equals(obj: any): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module jvm {
		export class JvmDefaultWithoutCompatibility extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kotlin.jvm.JvmDefaultWithoutCompatibility>;
			/**
			 * Constructs a new instance of the kotlin.jvm.JvmDefaultWithoutCompatibility interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				equals(object0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public toString(): string;
			public equals(obj: any): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module jvm {
		export class JvmField extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kotlin.jvm.JvmField>;
			/**
			 * Constructs a new instance of the kotlin.jvm.JvmField interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				equals(object0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public toString(): string;
			public equals(obj: any): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module jvm {
		export class JvmMultifileClass extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kotlin.jvm.JvmMultifileClass>;
			/**
			 * Constructs a new instance of the kotlin.jvm.JvmMultifileClass interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				equals(object0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public toString(): string;
			public equals(obj: any): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module jvm {
		export class JvmName extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kotlin.jvm.JvmName>;
			/**
			 * Constructs a new instance of the kotlin.jvm.JvmName interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				name(): string;
				equals(object0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public toString(): string;
			public name(): string;
			public equals(obj: any): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module jvm {
		export class JvmOverloads extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kotlin.jvm.JvmOverloads>;
			/**
			 * Constructs a new instance of the kotlin.jvm.JvmOverloads interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				equals(object0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public toString(): string;
			public equals(obj: any): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module jvm {
		export class JvmPackageName extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kotlin.jvm.JvmPackageName>;
			/**
			 * Constructs a new instance of the kotlin.jvm.JvmPackageName interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				name(): string;
				equals(object0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public toString(): string;
			public name(): string;
			public equals(obj: any): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module jvm {
		export class JvmStatic extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kotlin.jvm.JvmStatic>;
			/**
			 * Constructs a new instance of the kotlin.jvm.JvmStatic interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				equals(object0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public toString(): string;
			public equals(obj: any): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module jvm {
		export class JvmSuppressWildcards extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kotlin.jvm.JvmSuppressWildcards>;
			/**
			 * Constructs a new instance of the kotlin.jvm.JvmSuppressWildcards interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				suppress(): boolean;
				equals(object0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public toString(): string;
			public equals(obj: any): boolean;
			public suppress(): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module jvm {
		export class JvmSynthetic extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kotlin.jvm.JvmSynthetic>;
			/**
			 * Constructs a new instance of the kotlin.jvm.JvmSynthetic interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				equals(object0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public toString(): string;
			public equals(obj: any): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module jvm {
		export class JvmWildcard extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kotlin.jvm.JvmWildcard>;
			/**
			 * Constructs a new instance of the kotlin.jvm.JvmWildcard interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				equals(object0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public toString(): string;
			public equals(obj: any): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module jvm {
		export class KotlinReflectionNotSupportedError extends java.lang.Error {
			public static class: java.lang.Class<kotlin.jvm.KotlinReflectionNotSupportedError>;
			public constructor(message: string);
			public constructor(message: string, cause: java.lang.Throwable);
			public constructor(cause: java.lang.Throwable);
			public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
			public constructor();
		}
	}
}

declare module kotlin {
	export module jvm {
		export class PurelyImplements extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kotlin.jvm.PurelyImplements>;
			/**
			 * Constructs a new instance of the kotlin.jvm.PurelyImplements interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				value(): string;
				equals(object0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public toString(): string;
			public equals(obj: any): boolean;
			public value(): string;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module jvm {
		export class Strictfp extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kotlin.jvm.Strictfp>;
			/**
			 * Constructs a new instance of the kotlin.jvm.Strictfp interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				equals(object0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public toString(): string;
			public equals(obj: any): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module jvm {
		export class Synchronized extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kotlin.jvm.Synchronized>;
			/**
			 * Constructs a new instance of the kotlin.jvm.Synchronized interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				equals(object0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public toString(): string;
			public equals(obj: any): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module jvm {
		export class Throws extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kotlin.jvm.Throws>;
			/**
			 * Constructs a new instance of the kotlin.jvm.Throws interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				exceptionClasses(): native.Array<java.lang.Class<any>>;
				equals(object0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public exceptionClasses(): native.Array<java.lang.Class<any>>;
			public toString(): string;
			public equals(obj: any): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module jvm {
		export class Transient extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kotlin.jvm.Transient>;
			/**
			 * Constructs a new instance of the kotlin.jvm.Transient interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				equals(object0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public toString(): string;
			public equals(obj: any): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module jvm {
		export class Volatile extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kotlin.jvm.Volatile>;
			/**
			 * Constructs a new instance of the kotlin.jvm.Volatile interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				equals(object0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public toString(): string;
			public equals(obj: any): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module jvm {
		export module functions {
			export class Function0<R>  extends kotlin.Function<any> {
				public static class: java.lang.Class<kotlin.jvm.functions.Function0<any>>;
				/**
				 * Constructs a new instance of the kotlin.jvm.functions.Function0<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					invoke(): any;
				});
				public constructor();
				public invoke(): any;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module functions {
			export class Function1<P1, R>  extends kotlin.Function<any> {
				public static class: java.lang.Class<kotlin.jvm.functions.Function1<any,any>>;
				/**
				 * Constructs a new instance of the kotlin.jvm.functions.Function1<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					invoke(object0: any): any;
				});
				public constructor();
				public invoke(object0: any): any;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module functions {
			export class Function10<P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, R>  extends kotlin.Function<any> {
				public static class: java.lang.Class<kotlin.jvm.functions.Function10<any,any,any,any,any,any,any,any,any,any,any>>;
				/**
				 * Constructs a new instance of the kotlin.jvm.functions.Function10<any,any,any,any,any,any,any,any,any,any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					invoke(object0: any, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any): any;
				});
				public constructor();
				public invoke(object0: any, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any): any;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module functions {
			export class Function11<P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, R>  extends kotlin.Function<any> {
				public static class: java.lang.Class<kotlin.jvm.functions.Function11<any,any,any,any,any,any,any,any,any,any,any,any>>;
				/**
				 * Constructs a new instance of the kotlin.jvm.functions.Function11<any,any,any,any,any,any,any,any,any,any,any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					invoke(object0: any, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any): any;
				});
				public constructor();
				public invoke(object0: any, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any): any;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module functions {
			export class Function12<P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, R>  extends kotlin.Function<any> {
				public static class: java.lang.Class<kotlin.jvm.functions.Function12<any,any,any,any,any,any,any,any,any,any,any,any,any>>;
				/**
				 * Constructs a new instance of the kotlin.jvm.functions.Function12<any,any,any,any,any,any,any,any,any,any,any,any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					invoke(object0: any, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any, object11: any): any;
				});
				public constructor();
				public invoke(object0: any, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any, object11: any): any;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module functions {
			export class Function13<P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13, R>  extends kotlin.Function<any> {
				public static class: java.lang.Class<kotlin.jvm.functions.Function13<any,any,any,any,any,any,any,any,any,any,any,any,any,any>>;
				/**
				 * Constructs a new instance of the kotlin.jvm.functions.Function13<any,any,any,any,any,any,any,any,any,any,any,any,any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					invoke(object0: any, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any, object11: any, object12: any): any;
				});
				public constructor();
				public invoke(object0: any, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any, object11: any, object12: any): any;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module functions {
			export class Function14<P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13, P14, R>  extends kotlin.Function<any> {
				public static class: java.lang.Class<kotlin.jvm.functions.Function14<any,any,any,any,any,any,any,any,any,any,any,any,any,any,any>>;
				/**
				 * Constructs a new instance of the kotlin.jvm.functions.Function14<any,any,any,any,any,any,any,any,any,any,any,any,any,any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					invoke(object0: any, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any, object11: any, object12: any, object13: any): any;
				});
				public constructor();
				public invoke(object0: any, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any, object11: any, object12: any, object13: any): any;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module functions {
			export class Function15<P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13, P14, P15, R>  extends kotlin.Function<any> {
				public static class: java.lang.Class<kotlin.jvm.functions.Function15<any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any>>;
				/**
				 * Constructs a new instance of the kotlin.jvm.functions.Function15<any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					invoke(object0: any, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any, object11: any, object12: any, object13: any, object14: any): any;
				});
				public constructor();
				public invoke(object0: any, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any, object11: any, object12: any, object13: any, object14: any): any;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module functions {
			export class Function16<P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13, P14, P15, P16, R>  extends kotlin.Function<any> {
				public static class: java.lang.Class<kotlin.jvm.functions.Function16<any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any>>;
				/**
				 * Constructs a new instance of the kotlin.jvm.functions.Function16<any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					invoke(object0: any, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any, object11: any, object12: any, object13: any, object14: any, object15: any): any;
				});
				public constructor();
				public invoke(object0: any, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any, object11: any, object12: any, object13: any, object14: any, object15: any): any;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module functions {
			export class Function17<P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13, P14, P15, P16, P17, R>  extends kotlin.Function<any> {
				public static class: java.lang.Class<kotlin.jvm.functions.Function17<any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any>>;
				/**
				 * Constructs a new instance of the kotlin.jvm.functions.Function17<any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					invoke(object0: any, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any, object11: any, object12: any, object13: any, object14: any, object15: any, object16: any): any;
				});
				public constructor();
				public invoke(object0: any, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any, object11: any, object12: any, object13: any, object14: any, object15: any, object16: any): any;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module functions {
			export class Function18<P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13, P14, P15, P16, P17, P18, R>  extends kotlin.Function<any> {
				public static class: java.lang.Class<kotlin.jvm.functions.Function18<any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any>>;
				/**
				 * Constructs a new instance of the kotlin.jvm.functions.Function18<any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					invoke(object0: any, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any, object11: any, object12: any, object13: any, object14: any, object15: any, object16: any, object17: any): any;
				});
				public constructor();
				public invoke(object0: any, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any, object11: any, object12: any, object13: any, object14: any, object15: any, object16: any, object17: any): any;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module functions {
			export class Function19<P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, R>  extends kotlin.Function<any> {
				public static class: java.lang.Class<kotlin.jvm.functions.Function19<any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any>>;
				/**
				 * Constructs a new instance of the kotlin.jvm.functions.Function19<any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					invoke(object0: any, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any, object11: any, object12: any, object13: any, object14: any, object15: any, object16: any, object17: any, object18: any): any;
				});
				public constructor();
				public invoke(object0: any, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any, object11: any, object12: any, object13: any, object14: any, object15: any, object16: any, object17: any, object18: any): any;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module functions {
			export class Function2<P1, P2, R>  extends kotlin.Function<any> {
				public static class: java.lang.Class<kotlin.jvm.functions.Function2<any,any,any>>;
				/**
				 * Constructs a new instance of the kotlin.jvm.functions.Function2<any,any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					invoke(object0: any, object1: any): any;
				});
				public constructor();
				public invoke(object0: any, object1: any): any;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module functions {
			export class Function20<P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, R>  extends kotlin.Function<any> {
				public static class: java.lang.Class<kotlin.jvm.functions.Function20<any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any>>;
				/**
				 * Constructs a new instance of the kotlin.jvm.functions.Function20<any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					invoke(object0: any, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any, object11: any, object12: any, object13: any, object14: any, object15: any, object16: any, object17: any, object18: any, object19: any): any;
				});
				public constructor();
				public invoke(object0: any, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any, object11: any, object12: any, object13: any, object14: any, object15: any, object16: any, object17: any, object18: any, object19: any): any;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module functions {
			export class Function21<P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, R>  extends kotlin.Function<any> {
				public static class: java.lang.Class<kotlin.jvm.functions.Function21<any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any>>;
				/**
				 * Constructs a new instance of the kotlin.jvm.functions.Function21<any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					invoke(object0: any, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any, object11: any, object12: any, object13: any, object14: any, object15: any, object16: any, object17: any, object18: any, object19: any, object20: any): any;
				});
				public constructor();
				public invoke(object0: any, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any, object11: any, object12: any, object13: any, object14: any, object15: any, object16: any, object17: any, object18: any, object19: any, object20: any): any;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module functions {
			export class Function22<P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, R>  extends kotlin.Function<any> {
				public static class: java.lang.Class<kotlin.jvm.functions.Function22<any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any>>;
				/**
				 * Constructs a new instance of the kotlin.jvm.functions.Function22<any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					invoke(object0: any, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any, object11: any, object12: any, object13: any, object14: any, object15: any, object16: any, object17: any, object18: any, object19: any, object20: any, object21: any): any;
				});
				public constructor();
				public invoke(object0: any, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any, object11: any, object12: any, object13: any, object14: any, object15: any, object16: any, object17: any, object18: any, object19: any, object20: any, object21: any): any;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module functions {
			export class Function3<P1, P2, P3, R>  extends kotlin.Function<any> {
				public static class: java.lang.Class<kotlin.jvm.functions.Function3<any,any,any,any>>;
				/**
				 * Constructs a new instance of the kotlin.jvm.functions.Function3<any,any,any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					invoke(object0: any, object1: any, object2: any): any;
				});
				public constructor();
				public invoke(object0: any, object1: any, object2: any): any;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module functions {
			export class Function4<P1, P2, P3, P4, R>  extends kotlin.Function<any> {
				public static class: java.lang.Class<kotlin.jvm.functions.Function4<any,any,any,any,any>>;
				/**
				 * Constructs a new instance of the kotlin.jvm.functions.Function4<any,any,any,any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					invoke(object0: any, object1: any, object2: any, object3: any): any;
				});
				public constructor();
				public invoke(object0: any, object1: any, object2: any, object3: any): any;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module functions {
			export class Function5<P1, P2, P3, P4, P5, R>  extends kotlin.Function<any> {
				public static class: java.lang.Class<kotlin.jvm.functions.Function5<any,any,any,any,any,any>>;
				/**
				 * Constructs a new instance of the kotlin.jvm.functions.Function5<any,any,any,any,any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					invoke(object0: any, object1: any, object2: any, object3: any, object4: any): any;
				});
				public constructor();
				public invoke(object0: any, object1: any, object2: any, object3: any, object4: any): any;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module functions {
			export class Function6<P1, P2, P3, P4, P5, P6, R>  extends kotlin.Function<any> {
				public static class: java.lang.Class<kotlin.jvm.functions.Function6<any,any,any,any,any,any,any>>;
				/**
				 * Constructs a new instance of the kotlin.jvm.functions.Function6<any,any,any,any,any,any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					invoke(object0: any, object1: any, object2: any, object3: any, object4: any, object5: any): any;
				});
				public constructor();
				public invoke(object0: any, object1: any, object2: any, object3: any, object4: any, object5: any): any;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module functions {
			export class Function7<P1, P2, P3, P4, P5, P6, P7, R>  extends kotlin.Function<any> {
				public static class: java.lang.Class<kotlin.jvm.functions.Function7<any,any,any,any,any,any,any,any>>;
				/**
				 * Constructs a new instance of the kotlin.jvm.functions.Function7<any,any,any,any,any,any,any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					invoke(object0: any, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any): any;
				});
				public constructor();
				public invoke(object0: any, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any): any;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module functions {
			export class Function8<P1, P2, P3, P4, P5, P6, P7, P8, R>  extends kotlin.Function<any> {
				public static class: java.lang.Class<kotlin.jvm.functions.Function8<any,any,any,any,any,any,any,any,any>>;
				/**
				 * Constructs a new instance of the kotlin.jvm.functions.Function8<any,any,any,any,any,any,any,any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					invoke(object0: any, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any): any;
				});
				public constructor();
				public invoke(object0: any, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any): any;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module functions {
			export class Function9<P1, P2, P3, P4, P5, P6, P7, P8, P9, R>  extends kotlin.Function<any> {
				public static class: java.lang.Class<kotlin.jvm.functions.Function9<any,any,any,any,any,any,any,any,any,any>>;
				/**
				 * Constructs a new instance of the kotlin.jvm.functions.Function9<any,any,any,any,any,any,any,any,any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					invoke(object0: any, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any): any;
				});
				public constructor();
				public invoke(object0: any, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any): any;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module functions {
			export class FunctionN<R>  extends java.lang.Object {
				public static class: java.lang.Class<kotlin.jvm.functions.FunctionN<any>>;
				/**
				 * Constructs a new instance of the kotlin.jvm.functions.FunctionN<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					invoke(objects0: native.Array<any>): R;
					getArity(): number;
					getArity(): number;
				});
				public constructor();
				public getArity(): number;
				public invoke(objects0: native.Array<any>): R;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class AdaptedFunctionReference extends java.lang.Object implements kotlin.jvm.internal.FunctionBase<any>, java.io.Serializable {
				public static class: java.lang.Class<kotlin.jvm.internal.AdaptedFunctionReference>;
				public receiver: any;
				public equals(obj: any): boolean;
				public hashCode(): number;
				public constructor(arity: number, receiver: any, owner: java.lang.Class<any>, name: string, signature: string, flags: number);
				public getArity(): number;
				public getOwner(): kotlin.reflect.KDeclarationContainer;
				public equals(o: any): boolean;
				public toString(): string;
				public constructor(arity: number, owner: java.lang.Class<any>, name: string, signature: string, flags: number);
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class ArrayBooleanIterator extends kotlin.collections.BooleanIterator {
				public static class: java.lang.Class<kotlin.jvm.internal.ArrayBooleanIterator>;
				public hasNext(): boolean;
				public constructor(array: native.Array<boolean>);
				public nextBoolean(): boolean;
				public constructor();
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class ArrayByteIterator extends kotlin.collections.ByteIterator {
				public static class: java.lang.Class<kotlin.jvm.internal.ArrayByteIterator>;
				public nextByte(): number;
				public hasNext(): boolean;
				public constructor(array: native.Array<number>);
				public constructor();
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class ArrayCharIterator extends kotlin.collections.CharIterator {
				public static class: java.lang.Class<kotlin.jvm.internal.ArrayCharIterator>;
				public constructor(array: native.Array<string>);
				public hasNext(): boolean;
				public nextChar(): string;
				public constructor();
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class ArrayDoubleIterator extends kotlin.collections.DoubleIterator {
				public static class: java.lang.Class<kotlin.jvm.internal.ArrayDoubleIterator>;
				public hasNext(): boolean;
				public nextDouble(): number;
				public constructor(array: native.Array<number>);
				public constructor();
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class ArrayFloatIterator extends kotlin.collections.FloatIterator {
				public static class: java.lang.Class<kotlin.jvm.internal.ArrayFloatIterator>;
				public nextFloat(): number;
				public hasNext(): boolean;
				public constructor(array: native.Array<number>);
				public constructor();
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class ArrayIntIterator extends kotlin.collections.IntIterator {
				public static class: java.lang.Class<kotlin.jvm.internal.ArrayIntIterator>;
				public nextInt(): number;
				public hasNext(): boolean;
				public constructor(array: native.Array<number>);
				public constructor();
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class ArrayIterator<T>  extends java.lang.Object {
				public static class: java.lang.Class<kotlin.jvm.internal.ArrayIterator<any>>;
				public getArray(): native.Array<T>;
				public constructor(array: native.Array<T>);
				public remove(): void;
				public next(): T;
				public hasNext(): boolean;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class ArrayIteratorKt extends java.lang.Object {
				public static class: java.lang.Class<kotlin.jvm.internal.ArrayIteratorKt>;
				public static iterator(array: native.Array<any>): java.util.Iterator<any>;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class ArrayIteratorsKt extends java.lang.Object {
				public static class: java.lang.Class<kotlin.jvm.internal.ArrayIteratorsKt>;
				public static iterator(array: native.Array<string>): kotlin.collections.CharIterator;
				public static iterator(array: native.Array<number>): kotlin.collections.DoubleIterator;
				public static iterator(array: native.Array<number>): kotlin.collections.FloatIterator;
				public static iterator(array: native.Array<number>): kotlin.collections.ByteIterator;
				public static iterator(array: native.Array<boolean>): kotlin.collections.BooleanIterator;
				public static iterator(array: native.Array<number>): kotlin.collections.ShortIterator;
				public static iterator(array: native.Array<number>): kotlin.collections.IntIterator;
				public static iterator(array: native.Array<number>): kotlin.collections.LongIterator;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class ArrayLongIterator extends kotlin.collections.LongIterator {
				public static class: java.lang.Class<kotlin.jvm.internal.ArrayLongIterator>;
				public nextLong(): number;
				public hasNext(): boolean;
				public constructor(array: native.Array<number>);
				public constructor();
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class ArrayShortIterator extends kotlin.collections.ShortIterator {
				public static class: java.lang.Class<kotlin.jvm.internal.ArrayShortIterator>;
				public nextShort(): number;
				public hasNext(): boolean;
				public constructor(array: native.Array<number>);
				public constructor();
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class BooleanCompanionObject extends java.lang.Object {
				public static class: java.lang.Class<kotlin.jvm.internal.BooleanCompanionObject>;
				public static INSTANCE: kotlin.jvm.internal.BooleanCompanionObject;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class BooleanSpreadBuilder extends kotlin.jvm.internal.PrimitiveSpreadBuilder<native.Array<boolean>> {
				public static class: java.lang.Class<kotlin.jvm.internal.BooleanSpreadBuilder>;
				public getSize(object0: any): number;
				public getSize(thisgetSize: native.Array<boolean>): number;
				public toArray(): native.Array<boolean>;
				public constructor(size: number);
				public toArray(values: any, result: any): any;
				public add(value: boolean): void;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class ByteCompanionObject extends java.lang.Object {
				public static class: java.lang.Class<kotlin.jvm.internal.ByteCompanionObject>;
				public static MIN_VALUE: number;
				public static MAX_VALUE: number;
				public static SIZE_BYTES: number;
				public static SIZE_BITS: number;
				public static INSTANCE: kotlin.jvm.internal.ByteCompanionObject;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class ByteSpreadBuilder extends kotlin.jvm.internal.PrimitiveSpreadBuilder<native.Array<number>> {
				public static class: java.lang.Class<kotlin.jvm.internal.ByteSpreadBuilder>;
				public getSize(object0: any): number;
				public add(value: number): void;
				public getSize(thisgetSize: native.Array<number>): number;
				public constructor(size: number);
				public toArray(values: any, result: any): any;
				public toArray(): native.Array<number>;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export abstract class CallableReference extends java.lang.Object implements kotlin.reflect.KCallable<any>, java.io.Serializable {
				public static class: java.lang.Class<kotlin.jvm.internal.CallableReference>;
				public receiver: any;
				public static NO_RECEIVER: any;
				public getVisibility(): kotlin.reflect.KVisibility;
				public isAbstract(): boolean;
				public getSignature(): string;
				public getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
				public isFinal(): boolean;
				public getBoundReceiver(): any;
				public getName(): string;
				public getReturnType(): kotlin.reflect.KType;
				public constructor();
				public compute(): kotlin.reflect.KCallable<any>;
				public constructor(receiver: any);
				public callBy(map0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				public call(objects0: native.Array<any>): any;
				public callBy(map0: java.util.Map<any,any>): any;
				public isOpen(): boolean;
				public getOwner(): kotlin.reflect.KDeclarationContainer;
				public constructor(receiver: any, owner: java.lang.Class<any>, name: string, signature: string, isTopLevel: boolean);
				public getReflected(): kotlin.reflect.KCallable<any>;
				public isSuspend(): boolean;
				public getParameters(): java.util.List<kotlin.reflect.KParameter>;
				public computeReflected(): kotlin.reflect.KCallable<any>;
			}
			export module CallableReference {
				export class NoReceiver extends java.lang.Object implements java.io.Serializable {
					public static class: java.lang.Class<kotlin.jvm.internal.CallableReference.NoReceiver>;
				}
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class CharCompanionObject extends java.lang.Object {
				public static class: java.lang.Class<kotlin.jvm.internal.CharCompanionObject>;
				public static MIN_VALUE: string;
				public static MAX_VALUE: string;
				public static MIN_HIGH_SURROGATE: string;
				public static MAX_HIGH_SURROGATE: string;
				public static MIN_LOW_SURROGATE: string;
				public static MAX_LOW_SURROGATE: string;
				public static MIN_SURROGATE: string;
				public static MAX_SURROGATE: string;
				public static SIZE_BYTES: number;
				public static SIZE_BITS: number;
				public static INSTANCE: kotlin.jvm.internal.CharCompanionObject;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class CharSpreadBuilder extends kotlin.jvm.internal.PrimitiveSpreadBuilder<native.Array<string>> {
				public static class: java.lang.Class<kotlin.jvm.internal.CharSpreadBuilder>;
				public getSize(object0: any): number;
				public toArray(): native.Array<string>;
				public constructor(size: number);
				public toArray(values: any, result: any): any;
				public getSize(thisgetSize: native.Array<string>): number;
				public add(value: string): void;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class ClassBasedDeclarationContainer extends java.lang.Object implements kotlin.reflect.KDeclarationContainer {
				public static class: java.lang.Class<kotlin.jvm.internal.ClassBasedDeclarationContainer>;
				/**
				 * Constructs a new instance of the kotlin.jvm.internal.ClassBasedDeclarationContainer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getJClass(): java.lang.Class<any>;
					getMembers(): java.util.Collection<kotlin.reflect.KCallable<any>>;
				});
				public constructor();
				public getJClass(): java.lang.Class<any>;
				public getMembers(): java.util.Collection<kotlin.reflect.KCallable<any>>;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class ClassReference extends java.lang.Object {
				public static class: java.lang.Class<kotlin.jvm.internal.ClassReference>;
				public static Companion: kotlin.jvm.internal.ClassReference.Companion;
				public getVisibility(): kotlin.reflect.KVisibility;
				public getJClass(): java.lang.Class<any>;
				public getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
				public isFinal(): boolean;
				public isInner(): boolean;
				public isCompanion(): boolean;
				public getQualifiedName(): string;
				public getObjectInstance(): any;
				public getSupertypes(): java.util.List<kotlin.reflect.KType>;
				public constructor(jClass: java.lang.Class<any>);
				public getConstructors(): java.util.Collection<kotlin.reflect.KFunction<any>>;
				public isInstance(value: any): boolean;
				public getSimpleName(): string;
				public isData(): boolean;
				public getMembers(): java.util.Collection<kotlin.reflect.KCallable<any>>;
				public equals(other: any): boolean;
				public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				public hashCode(): number;
				public isSealed(): boolean;
				public isAbstract(): boolean;
				public isFun(): boolean;
				public getNestedClasses(): java.util.Collection<kotlin.reflect.KClass<any>>;
				public toString(): string;
				public equals(obj: any): boolean;
				public getSealedSubclasses(): java.util.List<kotlin.reflect.KClass<any>>;
				public isOpen(): boolean;
			}
			export module ClassReference {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<kotlin.jvm.internal.ClassReference.Companion>;
					public getClassSimpleName(jClass: java.lang.Class<any>): string;
					public isInstance(value: any, jClass: java.lang.Class<any>): boolean;
					public getClassQualifiedName(jClass: java.lang.Class<any>): string;
				}
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class CollectionToArray extends java.lang.Object {
				public static class: java.lang.Class<kotlin.jvm.internal.CollectionToArray>;
				public static toArray(collection: java.util.Collection<any>, a: native.Array<any>): native.Array<any>;
				public static toArray(collection: java.util.Collection<any>): native.Array<any>;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class DefaultConstructorMarker extends java.lang.Object {
				public static class: java.lang.Class<kotlin.jvm.internal.DefaultConstructorMarker>;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class DoubleCompanionObject extends java.lang.Object {
				public static class: java.lang.Class<kotlin.jvm.internal.DoubleCompanionObject>;
				public static MIN_VALUE: number;
				public static MAX_VALUE: number;
				public static POSITIVE_INFINITY: number;
				public static NEGATIVE_INFINITY: number;
				public static NaN: number;
				public static SIZE_BYTES: number;
				public static SIZE_BITS: number;
				public static INSTANCE: kotlin.jvm.internal.DoubleCompanionObject;
				public getNaN(): number;
				public getMAX_VALUE(): number;
				public getNEGATIVE_INFINITY(): number;
				public getMIN_VALUE(): number;
				public getPOSITIVE_INFINITY(): number;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class DoubleSpreadBuilder extends kotlin.jvm.internal.PrimitiveSpreadBuilder<native.Array<number>> {
				public static class: java.lang.Class<kotlin.jvm.internal.DoubleSpreadBuilder>;
				public getSize(object0: any): number;
				public add(value: number): void;
				public getSize(thisgetSize: native.Array<number>): number;
				public constructor(size: number);
				public toArray(values: any, result: any): any;
				public toArray(): native.Array<number>;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class EnumCompanionObject extends java.lang.Object {
				public static class: java.lang.Class<kotlin.jvm.internal.EnumCompanionObject>;
				public static INSTANCE: kotlin.jvm.internal.EnumCompanionObject;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class FloatCompanionObject extends java.lang.Object {
				public static class: java.lang.Class<kotlin.jvm.internal.FloatCompanionObject>;
				public static MIN_VALUE: number;
				public static MAX_VALUE: number;
				public static POSITIVE_INFINITY: number;
				public static NEGATIVE_INFINITY: number;
				public static NaN: number;
				public static SIZE_BYTES: number;
				public static SIZE_BITS: number;
				public static INSTANCE: kotlin.jvm.internal.FloatCompanionObject;
				public getNaN(): number;
				public getMAX_VALUE(): number;
				public getNEGATIVE_INFINITY(): number;
				public getMIN_VALUE(): number;
				public getPOSITIVE_INFINITY(): number;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class FloatSpreadBuilder extends kotlin.jvm.internal.PrimitiveSpreadBuilder<native.Array<number>> {
				public static class: java.lang.Class<kotlin.jvm.internal.FloatSpreadBuilder>;
				public getSize(object0: any): number;
				public add(value: number): void;
				public getSize(thisgetSize: native.Array<number>): number;
				public constructor(size: number);
				public toArray(values: any, result: any): any;
				public toArray(): native.Array<number>;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class FunctionAdapter extends java.lang.Object {
				public static class: java.lang.Class<kotlin.jvm.internal.FunctionAdapter>;
				/**
				 * Constructs a new instance of the kotlin.jvm.internal.FunctionAdapter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getFunctionDelegate(): kotlin.Function<any>;
				});
				public constructor();
				public getFunctionDelegate(): kotlin.Function<any>;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class FunctionBase<R>  extends kotlin.Function<any> {
				public static class: java.lang.Class<kotlin.jvm.internal.FunctionBase<any>>;
				/**
				 * Constructs a new instance of the kotlin.jvm.internal.FunctionBase<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getArity(): number;
				});
				public constructor();
				public getArity(): number;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export abstract class FunctionImpl extends java.lang.Object implements kotlin.Function<any>, java.io.Serializable, kotlin.jvm.functions.Function0<any>, kotlin.jvm.functions.Function1<any,any>, kotlin.jvm.functions.Function2<any,any,any>, kotlin.jvm.functions.Function3<any,any,any,any>, kotlin.jvm.functions.Function4<any,any,any,any,any>, kotlin.jvm.functions.Function5<any,any,any,any,any,any>, kotlin.jvm.functions.Function6<any,any,any,any,any,any,any>, kotlin.jvm.functions.Function7<any,any,any,any,any,any,any,any>, kotlin.jvm.functions.Function8<any,any,any,any,any,any,any,any,any>, kotlin.jvm.functions.Function9<any,any,any,any,any,any,any,any,any,any>, kotlin.jvm.functions.Function10<any,any,any,any,any,any,any,any,any,any,any>, kotlin.jvm.functions.Function11<any,any,any,any,any,any,any,any,any,any,any,any>, kotlin.jvm.functions.Function12<any,any,any,any,any,any,any,any,any,any,any,any,any>, kotlin.jvm.functions.Function13<any,any,any,any,any,any,any,any,any,any,any,any,any,any>, kotlin.jvm.functions.Function14<any,any,any,any,any,any,any,any,any,any,any,any,any,any,any>, kotlin.jvm.functions.Function15<any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any>, kotlin.jvm.functions.Function16<any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any>, kotlin.jvm.functions.Function17<any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any>, kotlin.jvm.functions.Function18<any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any>, kotlin.jvm.functions.Function19<any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any>, kotlin.jvm.functions.Function20<any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any>, kotlin.jvm.functions.Function21<any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any>, kotlin.jvm.functions.Function22<any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any> {
				public static class: java.lang.Class<kotlin.jvm.internal.FunctionImpl>;
				public invoke(p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any, p10: any, p11: any, p12: any, p13: any): any;
				public invoke(p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any, p10: any, p11: any, p12: any, p13: any, p14: any, p15: any, p16: any, p17: any, p18: any, p19: any, p20: any, p21: any, p22: any): any;
				public invoke(p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): any;
				public invoke(p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any, p10: any, p11: any, p12: any): any;
				public getArity(): number;
				public invoke(p1: any, p2: any, p3: any, p4: any, p5: any): any;
				public invoke(p1: any, p2: any, p3: any, p4: any): any;
				public invoke(p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any, p10: any, p11: any, p12: any, p13: any, p14: any, p15: any): any;
				public constructor();
				public invoke(p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any, p10: any, p11: any): any;
				public invoke(): any;
				public invokeVararg(p: native.Array<any>): any;
				public invoke(p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): any;
				public invoke(p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): any;
				public invoke(p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any, p10: any, p11: any, p12: any, p13: any, p14: any, p15: any, p16: any, p17: any, p18: any, p19: any): any;
				public invoke(p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any, p10: any, p11: any, p12: any, p13: any, p14: any, p15: any, p16: any, p17: any, p18: any): any;
				public invoke(p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any, p10: any, p11: any, p12: any, p13: any, p14: any, p15: any, p16: any, p17: any): any;
				public invoke(p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any, p10: any, p11: any, p12: any, p13: any, p14: any, p15: any, p16: any): any;
				public invoke(p1: any, p2: any, p3: any): any;
				public invoke(p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any, p10: any, p11: any, p12: any, p13: any, p14: any, p15: any, p16: any, p17: any, p18: any, p19: any, p20: any, p21: any): any;
				public invoke(p1: any, p2: any): any;
				public invoke(p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any, p10: any, p11: any, p12: any, p13: any, p14: any): any;
				public invoke(p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any, p10: any, p11: any, p12: any, p13: any, p14: any, p15: any, p16: any, p17: any, p18: any, p19: any, p20: any): any;
				public invoke(p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any, p10: any): any;
				public invoke(p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): any;
				public invoke(p1: any): any;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class FunctionReference extends kotlin.jvm.internal.CallableReference implements kotlin.jvm.internal.FunctionBase<any>, kotlin.reflect.KFunction<any> {
				public static class: java.lang.Class<kotlin.jvm.internal.FunctionReference>;
				public constructor(arity: number);
				public getVisibility(): kotlin.reflect.KVisibility;
				public isInline(): boolean;
				public isFinal(): boolean;
				public getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
				public getArity(): number;
				public getReturnType(): kotlin.reflect.KType;
				public isOperator(): boolean;
				public constructor();
				public isExternal(): boolean;
				public constructor(receiver: any);
				public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				public hashCode(): number;
				public getReflected(): kotlin.reflect.KCallable<any>;
				public getReflected(): kotlin.reflect.KFunction<any>;
				public isAbstract(): boolean;
				public constructor(arity: number, receiver: any);
				public constructor(arity: number, receiver: any, owner: java.lang.Class<any>, name: string, signature: string, flags: number);
				public getName(): string;
				public toString(): string;
				public isInfix(): boolean;
				public equals(obj: any): boolean;
				public callBy(map0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				public call(objects0: native.Array<any>): any;
				public callBy(map0: java.util.Map<any,any>): any;
				public isOpen(): boolean;
				public constructor(receiver: any, owner: java.lang.Class<any>, name: string, signature: string, isTopLevel: boolean);
				public isSuspend(): boolean;
				public getParameters(): java.util.List<kotlin.reflect.KParameter>;
				public computeReflected(): kotlin.reflect.KCallable<any>;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class FunctionReferenceImpl extends kotlin.jvm.internal.FunctionReference {
				public static class: java.lang.Class<kotlin.jvm.internal.FunctionReferenceImpl>;
				public constructor(arity: number);
				public getVisibility(): kotlin.reflect.KVisibility;
				public isInline(): boolean;
				public isFinal(): boolean;
				public getArity(): number;
				public getReturnType(): kotlin.reflect.KType;
				public isOperator(): boolean;
				public constructor();
				public isExternal(): boolean;
				public constructor(receiver: any);
				public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				public constructor(arity: number, owner: kotlin.reflect.KDeclarationContainer, name: string, signature: string);
				public isAbstract(): boolean;
				public constructor(arity: number, receiver: any);
				public constructor(arity: number, receiver: any, owner: java.lang.Class<any>, name: string, signature: string, flags: number);
				public getName(): string;
				public constructor(arity: number, owner: java.lang.Class<any>, name: string, signature: string, flags: number);
				public isInfix(): boolean;
				public callBy(map0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				public call(objects0: native.Array<any>): any;
				public callBy(map0: java.util.Map<any,any>): any;
				public isOpen(): boolean;
				public constructor(receiver: any, owner: java.lang.Class<any>, name: string, signature: string, isTopLevel: boolean);
				public isSuspend(): boolean;
				public getParameters(): java.util.List<kotlin.reflect.KParameter>;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class InlineMarker extends java.lang.Object {
				public static class: java.lang.Class<kotlin.jvm.internal.InlineMarker>;
				public static mark(name: string): void;
				public static finallyStart(finallyDepth: number): void;
				public static beforeInlineCall(): void;
				public static finallyEnd(finallyDepth: number): void;
				public static afterInlineCall(): void;
				public static mark(i: number): void;
				public constructor();
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class IntCompanionObject extends java.lang.Object {
				public static class: java.lang.Class<kotlin.jvm.internal.IntCompanionObject>;
				public static MIN_VALUE: number;
				public static MAX_VALUE: number;
				public static SIZE_BYTES: number;
				public static SIZE_BITS: number;
				public static INSTANCE: kotlin.jvm.internal.IntCompanionObject;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class IntSpreadBuilder extends kotlin.jvm.internal.PrimitiveSpreadBuilder<native.Array<number>> {
				public static class: java.lang.Class<kotlin.jvm.internal.IntSpreadBuilder>;
				public getSize(object0: any): number;
				public add(value: number): void;
				public getSize(thisgetSize: native.Array<number>): number;
				public constructor(size: number);
				public toArray(values: any, result: any): any;
				public toArray(): native.Array<number>;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class Intrinsics extends java.lang.Object {
				public static class: java.lang.Class<kotlin.jvm.internal.Intrinsics>;
				public static throwAssert(message: string): void;
				public static reifiedOperationMarker(id: number, typeParameterIdentifier: string, message: string): void;
				public static areEqual(first: java.lang.Float, second: java.lang.Float): boolean;
				public static checkNotNullParameter(value: any, paramName: string): void;
				public static checkFieldIsNotNull(value: any, message: string): void;
				public static throwUndefinedForReified(): void;
				public static checkHasClass(internalName: string): void;
				public static checkNotNull(object: any): void;
				public static throwUndefinedForReified(message: string): void;
				public static checkNotNull(object: any, message: string): void;
				public static throwIllegalArgument(): void;
				public static needClassReification(): void;
				public static throwUninitializedProperty(message: string): void;
				public static areEqual(first: number, second: java.lang.Double): boolean;
				public static reifiedOperationMarker(id: number, typeParameterIdentifier: string): void;
				public static throwAssert(): void;
				public static throwUninitializedPropertyAccessException(propertyName: string): void;
				public static checkFieldIsNotNull(value: any, className: string, fieldName: string): void;
				public static areEqual(first: java.lang.Float, second: number): boolean;
				public static stringPlus(self: string, other: any): string;
				public static checkExpressionValueIsNotNull(value: any, expression: string): void;
				public static areEqual(first: any, second: any): boolean;
				public static throwIllegalState(message: string): void;
				public static throwNpe(): void;
				public static areEqual(first: java.lang.Double, second: number): boolean;
				public static areEqual(first: number, second: java.lang.Float): boolean;
				public static checkReturnedValueIsNotNull(value: any, className: string, methodName: string): void;
				public static checkParameterIsNotNull(value: any, paramName: string): void;
				public static needClassReification(message: string): void;
				public static throwJavaNpe(message: string): void;
				public static throwIllegalState(): void;
				public static checkHasClass(internalName: string, requiredVersion: string): void;
				public static checkNotNullExpressionValue(value: any, expression: string): void;
				public static throwNpe(message: string): void;
				public static throwIllegalArgument(message: string): void;
				public static areEqual(first: java.lang.Double, second: java.lang.Double): boolean;
				public static compare(thisVal: number, anotherVal: number): number;
				public static throwJavaNpe(): void;
				public static checkReturnedValueIsNotNull(value: any, message: string): void;
			}
			export module Intrinsics {
				export class Kotlin extends java.lang.Object {
					public static class: java.lang.Class<kotlin.jvm.internal.Intrinsics.Kotlin>;
				}
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class KTypeBase extends java.lang.Object implements kotlin.reflect.KType {
				public static class: java.lang.Class<kotlin.jvm.internal.KTypeBase>;
				/**
				 * Constructs a new instance of the kotlin.jvm.internal.KTypeBase interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getJavaType(): java.lang.reflect.Type;
					getClassifier(): kotlin.reflect.KClassifier;
					getArguments(): java.util.List<kotlin.reflect.KTypeProjection>;
					isMarkedNullable(): boolean;
					getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
				});
				public constructor();
				public getJavaType(): java.lang.reflect.Type;
				public getClassifier(): kotlin.reflect.KClassifier;
				public getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
				public getArguments(): java.util.List<kotlin.reflect.KTypeProjection>;
				public isMarkedNullable(): boolean;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export abstract class Lambda<R>  extends java.lang.Object {
				public static class: java.lang.Class<kotlin.jvm.internal.Lambda<any>>;
				public constructor(arity: number);
				public getArity(): number;
				public toString(): string;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class LocalVariableReference extends kotlin.jvm.internal.PropertyReference0 {
				public static class: java.lang.Class<kotlin.jvm.internal.LocalVariableReference>;
				public getVisibility(): kotlin.reflect.KVisibility;
				public isAbstract(): boolean;
				public getGetter(): kotlin.reflect.KProperty.Getter<any>;
				public isFinal(): boolean;
				public isLateinit(): boolean;
				public getName(): string;
				public getReturnType(): kotlin.reflect.KType;
				public constructor(receiver: any, owner: java.lang.Class<any>, name: string, signature: string, flags: number);
				public getGetter(): kotlin.reflect.KProperty0.Getter<any>;
				public constructor();
				public constructor(receiver: any);
				public getGetter(): kotlin.reflect.KProperty0.Getter<any>;
				public callBy(map0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				public isConst(): boolean;
				public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				public call(objects0: native.Array<any>): any;
				public callBy(map0: java.util.Map<any,any>): any;
				public isOpen(): boolean;
				public getOwner(): kotlin.reflect.KDeclarationContainer;
				public getDelegate(): any;
				public get(): any;
				public constructor(receiver: any, owner: java.lang.Class<any>, name: string, signature: string, isTopLevel: boolean);
				public isSuspend(): boolean;
				public getParameters(): java.util.List<kotlin.reflect.KParameter>;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class LocalVariableReferencesKt extends java.lang.Object {
				public static class: java.lang.Class<kotlin.jvm.internal.LocalVariableReferencesKt>;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class LongCompanionObject extends java.lang.Object {
				public static class: java.lang.Class<kotlin.jvm.internal.LongCompanionObject>;
				public static MIN_VALUE: number;
				public static MAX_VALUE: number;
				public static SIZE_BYTES: number;
				public static SIZE_BITS: number;
				public static INSTANCE: kotlin.jvm.internal.LongCompanionObject;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class LongSpreadBuilder extends kotlin.jvm.internal.PrimitiveSpreadBuilder<native.Array<number>> {
				public static class: java.lang.Class<kotlin.jvm.internal.LongSpreadBuilder>;
				public getSize(object0: any): number;
				public add(value: number): void;
				public getSize(thisgetSize: native.Array<number>): number;
				public constructor(size: number);
				public toArray(values: any, result: any): any;
				public toArray(): native.Array<number>;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class MagicApiIntrinsics extends java.lang.Object {
				public static class: java.lang.Class<kotlin.jvm.internal.MagicApiIntrinsics>;
				public static voidMagicApiCall(id: number): void;
				public static intMagicApiCall(id: number, longData: number, anyData: any): number;
				public static anyMagicApiCall(id: number): any;
				public static intMagicApiCall(id: number, anyData1: any, anyData2: any): number;
				public static anyMagicApiCall(id: number, longData: number, anyData: any): any;
				public static intMagicApiCall(id: number): number;
				public constructor();
				public static intMagicApiCall(data: any): number;
				public static intMagicApiCall(id: number, anyData1: any, anyData2: any, anyData3: any, anyData4: any): number;
				public static anyMagicApiCall(id: number, longData1: number, longData2: number, anyData: any): any;
				public static anyMagicApiCall(id: number, anyData1: any, anyData2: any): any;
				public static voidMagicApiCall(data: any): void;
				public static anyMagicApiCall(id: number, anyData1: any, anyData2: any, anyData3: any, anyData4: any): any;
				public static anyMagicApiCall(data: any): any;
				public static intMagicApiCall(id: number, longData1: number, longData2: number, anyData: any): number;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class MutableLocalVariableReference extends kotlin.jvm.internal.MutablePropertyReference0 {
				public static class: java.lang.Class<kotlin.jvm.internal.MutableLocalVariableReference>;
				public getVisibility(): kotlin.reflect.KVisibility;
				public getGetter(): kotlin.reflect.KProperty.Getter<any>;
				public isFinal(): boolean;
				public getSetter(): kotlin.reflect.KMutableProperty.Setter<any>;
				public getReturnType(): kotlin.reflect.KType;
				public constructor(receiver: any, owner: java.lang.Class<any>, name: string, signature: string, flags: number);
				public constructor();
				public constructor(receiver: any);
				public isConst(): boolean;
				public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				public isAbstract(): boolean;
				public isLateinit(): boolean;
				public getName(): string;
				public set(value: any): void;
				public getGetter(): kotlin.reflect.KProperty0.Getter<any>;
				public getSetter(): kotlin.reflect.KMutableProperty0.Setter<any>;
				public callBy(map0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				public call(objects0: native.Array<any>): any;
				public callBy(map0: java.util.Map<any,any>): any;
				public isOpen(): boolean;
				public getOwner(): kotlin.reflect.KDeclarationContainer;
				public getSetter(): kotlin.reflect.KMutableProperty0.Setter<any>;
				public get(): any;
				public constructor(receiver: any, owner: java.lang.Class<any>, name: string, signature: string, isTopLevel: boolean);
				public isSuspend(): boolean;
				public getParameters(): java.util.List<kotlin.reflect.KParameter>;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export abstract class MutablePropertyReference extends kotlin.jvm.internal.PropertyReference implements kotlin.reflect.KMutableProperty<any> {
				public static class: java.lang.Class<kotlin.jvm.internal.MutablePropertyReference>;
				public getVisibility(): kotlin.reflect.KVisibility;
				public isAbstract(): boolean;
				public getGetter(): kotlin.reflect.KProperty.Getter<any>;
				public isFinal(): boolean;
				public getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
				public getSetter(): kotlin.reflect.KMutableProperty.Setter<any>;
				public isLateinit(): boolean;
				public getName(): string;
				public getReturnType(): kotlin.reflect.KType;
				public constructor(receiver: any, owner: java.lang.Class<any>, name: string, signature: string, flags: number);
				public constructor();
				public constructor(receiver: any);
				public callBy(map0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				public isConst(): boolean;
				public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				public call(objects0: native.Array<any>): any;
				public callBy(map0: java.util.Map<any,any>): any;
				public isOpen(): boolean;
				public constructor(receiver: any, owner: java.lang.Class<any>, name: string, signature: string, isTopLevel: boolean);
				public isSuspend(): boolean;
				public getParameters(): java.util.List<kotlin.reflect.KParameter>;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export abstract class MutablePropertyReference0 extends kotlin.jvm.internal.MutablePropertyReference implements kotlin.reflect.KMutableProperty0<any> {
				public static class: java.lang.Class<kotlin.jvm.internal.MutablePropertyReference0>;
				public getVisibility(): kotlin.reflect.KVisibility;
				public getGetter(): kotlin.reflect.KProperty.Getter<any>;
				public isFinal(): boolean;
				public getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
				public getSetter(): kotlin.reflect.KMutableProperty.Setter<any>;
				public getReturnType(): kotlin.reflect.KType;
				public constructor(receiver: any, owner: java.lang.Class<any>, name: string, signature: string, flags: number);
				public constructor();
				public invoke(): any;
				public constructor(receiver: any);
				public getGetter(): kotlin.reflect.KProperty0.Getter<any>;
				public isConst(): boolean;
				public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				public isAbstract(): boolean;
				public isLateinit(): boolean;
				public getName(): string;
				public getGetter(): kotlin.reflect.KProperty0.Getter<any>;
				public set(object0: any): void;
				public getSetter(): kotlin.reflect.KMutableProperty0.Setter<any>;
				public callBy(map0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				public call(objects0: native.Array<any>): any;
				public callBy(map0: java.util.Map<any,any>): any;
				public isOpen(): boolean;
				public getDelegate(): any;
				public getSetter(): kotlin.reflect.KMutableProperty0.Setter<any>;
				public constructor(receiver: any, owner: java.lang.Class<any>, name: string, signature: string, isTopLevel: boolean);
				public get(): any;
				public isSuspend(): boolean;
				public getParameters(): java.util.List<kotlin.reflect.KParameter>;
				public computeReflected(): kotlin.reflect.KCallable<any>;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class MutablePropertyReference0Impl extends kotlin.jvm.internal.MutablePropertyReference0 {
				public static class: java.lang.Class<kotlin.jvm.internal.MutablePropertyReference0Impl>;
				public getVisibility(): kotlin.reflect.KVisibility;
				public getGetter(): kotlin.reflect.KProperty.Getter<any>;
				public isFinal(): boolean;
				public getSetter(): kotlin.reflect.KMutableProperty.Setter<any>;
				public getReturnType(): kotlin.reflect.KType;
				public constructor(receiver: any, owner: java.lang.Class<any>, name: string, signature: string, flags: number);
				public constructor();
				public constructor(owner: java.lang.Class<any>, name: string, signature: string, flags: number);
				public constructor(receiver: any);
				public isConst(): boolean;
				public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				public constructor(owner: kotlin.reflect.KDeclarationContainer, name: string, signature: string);
				public isAbstract(): boolean;
				public isLateinit(): boolean;
				public getName(): string;
				public set(value: any): void;
				public getGetter(): kotlin.reflect.KProperty0.Getter<any>;
				public getSetter(): kotlin.reflect.KMutableProperty0.Setter<any>;
				public callBy(map0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				public call(objects0: native.Array<any>): any;
				public callBy(map0: java.util.Map<any,any>): any;
				public isOpen(): boolean;
				public getSetter(): kotlin.reflect.KMutableProperty0.Setter<any>;
				public constructor(receiver: any, owner: java.lang.Class<any>, name: string, signature: string, isTopLevel: boolean);
				public get(): any;
				public isSuspend(): boolean;
				public getParameters(): java.util.List<kotlin.reflect.KParameter>;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export abstract class MutablePropertyReference1 extends kotlin.jvm.internal.MutablePropertyReference implements kotlin.reflect.KMutableProperty1<any,any> {
				public static class: java.lang.Class<kotlin.jvm.internal.MutablePropertyReference1>;
				public getVisibility(): kotlin.reflect.KVisibility;
				public getGetter(): kotlin.reflect.KProperty.Getter<any>;
				public isFinal(): boolean;
				public getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
				public getSetter(): kotlin.reflect.KMutableProperty.Setter<any>;
				public getReturnType(): kotlin.reflect.KType;
				public constructor(receiver: any, owner: java.lang.Class<any>, name: string, signature: string, flags: number);
				public getDelegate(receiver: any): any;
				public constructor();
				public constructor(receiver: any);
				public isConst(): boolean;
				public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				public getGetter(): kotlin.reflect.KProperty1.Getter<any,any>;
				public set(object0: any, object1: any): void;
				public get(object0: any): any;
				public getSetter(): kotlin.reflect.KMutableProperty1.Setter<any,any>;
				public isAbstract(): boolean;
				public isLateinit(): boolean;
				public getName(): string;
				public getGetter(): kotlin.reflect.KProperty1.Getter<any,any>;
				public invoke(receiver: any): any;
				public callBy(map0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				public call(objects0: native.Array<any>): any;
				public callBy(map0: java.util.Map<any,any>): any;
				public isOpen(): boolean;
				public constructor(receiver: any, owner: java.lang.Class<any>, name: string, signature: string, isTopLevel: boolean);
				public isSuspend(): boolean;
				public getParameters(): java.util.List<kotlin.reflect.KParameter>;
				public getSetter(): kotlin.reflect.KMutableProperty1.Setter<any,any>;
				public computeReflected(): kotlin.reflect.KCallable<any>;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class MutablePropertyReference1Impl extends kotlin.jvm.internal.MutablePropertyReference1 {
				public static class: java.lang.Class<kotlin.jvm.internal.MutablePropertyReference1Impl>;
				public getVisibility(): kotlin.reflect.KVisibility;
				public getGetter(): kotlin.reflect.KProperty.Getter<any>;
				public isFinal(): boolean;
				public getSetter(): kotlin.reflect.KMutableProperty.Setter<any>;
				public getReturnType(): kotlin.reflect.KType;
				public constructor(receiver: any, owner: java.lang.Class<any>, name: string, signature: string, flags: number);
				public constructor();
				public constructor(owner: java.lang.Class<any>, name: string, signature: string, flags: number);
				public get(receiver: any): any;
				public constructor(receiver: any);
				public isConst(): boolean;
				public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				public getGetter(): kotlin.reflect.KProperty1.Getter<any,any>;
				public constructor(owner: kotlin.reflect.KDeclarationContainer, name: string, signature: string);
				public getSetter(): kotlin.reflect.KMutableProperty1.Setter<any,any>;
				public isAbstract(): boolean;
				public set(receiver: any, value: any): void;
				public isLateinit(): boolean;
				public getName(): string;
				public callBy(map0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				public call(objects0: native.Array<any>): any;
				public callBy(map0: java.util.Map<any,any>): any;
				public isOpen(): boolean;
				public constructor(receiver: any, owner: java.lang.Class<any>, name: string, signature: string, isTopLevel: boolean);
				public isSuspend(): boolean;
				public getParameters(): java.util.List<kotlin.reflect.KParameter>;
				public getSetter(): kotlin.reflect.KMutableProperty1.Setter<any,any>;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export abstract class MutablePropertyReference2 extends kotlin.jvm.internal.MutablePropertyReference implements kotlin.reflect.KMutableProperty2<any,any,any> {
				public static class: java.lang.Class<kotlin.jvm.internal.MutablePropertyReference2>;
				public getVisibility(): kotlin.reflect.KVisibility;
				public getGetter(): kotlin.reflect.KProperty.Getter<any>;
				public isFinal(): boolean;
				public getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
				public getSetter(): kotlin.reflect.KMutableProperty.Setter<any>;
				public getSetter(): kotlin.reflect.KMutableProperty2.Setter<any,any,any>;
				public getReturnType(): kotlin.reflect.KType;
				public constructor(receiver: any, owner: java.lang.Class<any>, name: string, signature: string, flags: number);
				public constructor();
				public constructor(owner: java.lang.Class<any>, name: string, signature: string, flags: number);
				public constructor(receiver: any);
				public set(object0: any, object1: any, object2: any): void;
				public isConst(): boolean;
				public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				public getGetter(): kotlin.reflect.KProperty2.Getter<any,any,any>;
				public isAbstract(): boolean;
				public get(object0: any, object1: any): any;
				public getGetter(): kotlin.reflect.KProperty2.Getter<any,any,any>;
				public isLateinit(): boolean;
				public getName(): string;
				public callBy(map0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				public call(objects0: native.Array<any>): any;
				public getDelegate(receiver1: any, receiver2: any): any;
				public callBy(map0: java.util.Map<any,any>): any;
				public isOpen(): boolean;
				public invoke(receiver1: any, receiver2: any): any;
				public constructor(receiver: any, owner: java.lang.Class<any>, name: string, signature: string, isTopLevel: boolean);
				public getSetter(): kotlin.reflect.KMutableProperty2.Setter<any,any,any>;
				public isSuspend(): boolean;
				public getParameters(): java.util.List<kotlin.reflect.KParameter>;
				public computeReflected(): kotlin.reflect.KCallable<any>;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class MutablePropertyReference2Impl extends kotlin.jvm.internal.MutablePropertyReference2 {
				public static class: java.lang.Class<kotlin.jvm.internal.MutablePropertyReference2Impl>;
				public getVisibility(): kotlin.reflect.KVisibility;
				public getGetter(): kotlin.reflect.KProperty.Getter<any>;
				public isFinal(): boolean;
				public getSetter(): kotlin.reflect.KMutableProperty.Setter<any>;
				public getSetter(): kotlin.reflect.KMutableProperty2.Setter<any,any,any>;
				public getReturnType(): kotlin.reflect.KType;
				public constructor(receiver: any, owner: java.lang.Class<any>, name: string, signature: string, flags: number);
				public constructor();
				public constructor(owner: java.lang.Class<any>, name: string, signature: string, flags: number);
				public constructor(receiver: any);
				public isConst(): boolean;
				public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				public getGetter(): kotlin.reflect.KProperty2.Getter<any,any,any>;
				public constructor(owner: kotlin.reflect.KDeclarationContainer, name: string, signature: string);
				public get(receiver1: any, receiver2: any): any;
				public isAbstract(): boolean;
				public isLateinit(): boolean;
				public getName(): string;
				public set(receiver1: any, receiver2: any, value: any): void;
				public callBy(map0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				public call(objects0: native.Array<any>): any;
				public callBy(map0: java.util.Map<any,any>): any;
				public isOpen(): boolean;
				public constructor(receiver: any, owner: java.lang.Class<any>, name: string, signature: string, isTopLevel: boolean);
				public getSetter(): kotlin.reflect.KMutableProperty2.Setter<any,any,any>;
				public isSuspend(): boolean;
				public getParameters(): java.util.List<kotlin.reflect.KParameter>;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class PackageReference extends java.lang.Object implements kotlin.jvm.internal.ClassBasedDeclarationContainer {
				public static class: java.lang.Class<kotlin.jvm.internal.PackageReference>;
				public getJClass(): java.lang.Class<any>;
				public getMembers(): java.util.Collection<kotlin.reflect.KCallable<any>>;
				public equals(obj: any): boolean;
				public equals(other: any): boolean;
				public constructor(jClass: java.lang.Class<any>, moduleName: string);
				public hashCode(): number;
				public toString(): string;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export abstract class PrimitiveSpreadBuilder<T>  extends java.lang.Object {
				public static class: java.lang.Class<kotlin.jvm.internal.PrimitiveSpreadBuilder<any>>;
				public toArray(values: T, result: T): T;
				public addSpread(spreadArgument: T): void;
				public constructor(size: number);
				public getPosition(): number;
				public setPosition(param0: number): void;
				public getSize(object0: T): number;
				public size(): number;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export abstract class PropertyReference extends kotlin.jvm.internal.CallableReference implements kotlin.reflect.KProperty<any> {
				public static class: java.lang.Class<kotlin.jvm.internal.PropertyReference>;
				public getVisibility(): kotlin.reflect.KVisibility;
				public getGetter(): kotlin.reflect.KProperty.Getter<any>;
				public isFinal(): boolean;
				public getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
				public getReturnType(): kotlin.reflect.KType;
				public constructor(receiver: any, owner: java.lang.Class<any>, name: string, signature: string, flags: number);
				public constructor();
				public constructor(receiver: any);
				public isConst(): boolean;
				public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				public hashCode(): number;
				public getReflected(): kotlin.reflect.KCallable<any>;
				public isAbstract(): boolean;
				public getReflected(): kotlin.reflect.KProperty<any>;
				public isLateinit(): boolean;
				public getName(): string;
				public toString(): string;
				public equals(obj: any): boolean;
				public callBy(map0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				public call(objects0: native.Array<any>): any;
				public callBy(map0: java.util.Map<any,any>): any;
				public isOpen(): boolean;
				public constructor(receiver: any, owner: java.lang.Class<any>, name: string, signature: string, isTopLevel: boolean);
				public isSuspend(): boolean;
				public getParameters(): java.util.List<kotlin.reflect.KParameter>;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export abstract class PropertyReference0 extends kotlin.jvm.internal.PropertyReference implements kotlin.reflect.KProperty0<any> {
				public static class: java.lang.Class<kotlin.jvm.internal.PropertyReference0>;
				public getVisibility(): kotlin.reflect.KVisibility;
				public getGetter(): kotlin.reflect.KProperty.Getter<any>;
				public isFinal(): boolean;
				public getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
				public getReturnType(): kotlin.reflect.KType;
				public constructor(receiver: any, owner: java.lang.Class<any>, name: string, signature: string, flags: number);
				public constructor();
				public invoke(): any;
				public constructor(receiver: any);
				public getGetter(): kotlin.reflect.KProperty0.Getter<any>;
				public isConst(): boolean;
				public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				public isAbstract(): boolean;
				public isLateinit(): boolean;
				public getName(): string;
				public getGetter(): kotlin.reflect.KProperty0.Getter<any>;
				public callBy(map0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				public call(objects0: native.Array<any>): any;
				public callBy(map0: java.util.Map<any,any>): any;
				public isOpen(): boolean;
				public getDelegate(): any;
				public constructor(receiver: any, owner: java.lang.Class<any>, name: string, signature: string, isTopLevel: boolean);
				public get(): any;
				public isSuspend(): boolean;
				public getParameters(): java.util.List<kotlin.reflect.KParameter>;
				public computeReflected(): kotlin.reflect.KCallable<any>;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class PropertyReference0Impl extends kotlin.jvm.internal.PropertyReference0 {
				public static class: java.lang.Class<kotlin.jvm.internal.PropertyReference0Impl>;
				public getVisibility(): kotlin.reflect.KVisibility;
				public getGetter(): kotlin.reflect.KProperty.Getter<any>;
				public isFinal(): boolean;
				public getReturnType(): kotlin.reflect.KType;
				public constructor(receiver: any, owner: java.lang.Class<any>, name: string, signature: string, flags: number);
				public constructor();
				public constructor(owner: java.lang.Class<any>, name: string, signature: string, flags: number);
				public constructor(receiver: any);
				public getGetter(): kotlin.reflect.KProperty0.Getter<any>;
				public isConst(): boolean;
				public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				public constructor(owner: kotlin.reflect.KDeclarationContainer, name: string, signature: string);
				public isAbstract(): boolean;
				public isLateinit(): boolean;
				public getName(): string;
				public getGetter(): kotlin.reflect.KProperty0.Getter<any>;
				public callBy(map0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				public call(objects0: native.Array<any>): any;
				public callBy(map0: java.util.Map<any,any>): any;
				public isOpen(): boolean;
				public getDelegate(): any;
				public constructor(receiver: any, owner: java.lang.Class<any>, name: string, signature: string, isTopLevel: boolean);
				public get(): any;
				public isSuspend(): boolean;
				public getParameters(): java.util.List<kotlin.reflect.KParameter>;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export abstract class PropertyReference1 extends kotlin.jvm.internal.PropertyReference implements kotlin.reflect.KProperty1<any,any> {
				public static class: java.lang.Class<kotlin.jvm.internal.PropertyReference1>;
				public getVisibility(): kotlin.reflect.KVisibility;
				public getGetter(): kotlin.reflect.KProperty.Getter<any>;
				public isFinal(): boolean;
				public getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
				public getReturnType(): kotlin.reflect.KType;
				public constructor(receiver: any, owner: java.lang.Class<any>, name: string, signature: string, flags: number);
				public getDelegate(receiver: any): any;
				public constructor();
				public constructor(receiver: any);
				public isConst(): boolean;
				public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				public getGetter(): kotlin.reflect.KProperty1.Getter<any,any>;
				public get(object0: any): any;
				public isAbstract(): boolean;
				public isLateinit(): boolean;
				public getName(): string;
				public getGetter(): kotlin.reflect.KProperty1.Getter<any,any>;
				public invoke(receiver: any): any;
				public callBy(map0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				public call(objects0: native.Array<any>): any;
				public callBy(map0: java.util.Map<any,any>): any;
				public isOpen(): boolean;
				public constructor(receiver: any, owner: java.lang.Class<any>, name: string, signature: string, isTopLevel: boolean);
				public isSuspend(): boolean;
				public getParameters(): java.util.List<kotlin.reflect.KParameter>;
				public computeReflected(): kotlin.reflect.KCallable<any>;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class PropertyReference1Impl extends kotlin.jvm.internal.PropertyReference1 {
				public static class: java.lang.Class<kotlin.jvm.internal.PropertyReference1Impl>;
				public getVisibility(): kotlin.reflect.KVisibility;
				public getGetter(): kotlin.reflect.KProperty.Getter<any>;
				public isFinal(): boolean;
				public getReturnType(): kotlin.reflect.KType;
				public constructor(receiver: any, owner: java.lang.Class<any>, name: string, signature: string, flags: number);
				public getDelegate(receiver: any): any;
				public constructor();
				public constructor(owner: java.lang.Class<any>, name: string, signature: string, flags: number);
				public get(receiver: any): any;
				public constructor(receiver: any);
				public isConst(): boolean;
				public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				public getGetter(): kotlin.reflect.KProperty1.Getter<any,any>;
				public constructor(owner: kotlin.reflect.KDeclarationContainer, name: string, signature: string);
				public isAbstract(): boolean;
				public isLateinit(): boolean;
				public getName(): string;
				public getGetter(): kotlin.reflect.KProperty1.Getter<any,any>;
				public callBy(map0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				public call(objects0: native.Array<any>): any;
				public callBy(map0: java.util.Map<any,any>): any;
				public isOpen(): boolean;
				public constructor(receiver: any, owner: java.lang.Class<any>, name: string, signature: string, isTopLevel: boolean);
				public isSuspend(): boolean;
				public getParameters(): java.util.List<kotlin.reflect.KParameter>;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export abstract class PropertyReference2 extends kotlin.jvm.internal.PropertyReference implements kotlin.reflect.KProperty2<any,any,any> {
				public static class: java.lang.Class<kotlin.jvm.internal.PropertyReference2>;
				public getVisibility(): kotlin.reflect.KVisibility;
				public getGetter(): kotlin.reflect.KProperty.Getter<any>;
				public isFinal(): boolean;
				public getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
				public getReturnType(): kotlin.reflect.KType;
				public constructor(receiver: any, owner: java.lang.Class<any>, name: string, signature: string, flags: number);
				public constructor();
				public constructor(owner: java.lang.Class<any>, name: string, signature: string, flags: number);
				public constructor(receiver: any);
				public isConst(): boolean;
				public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				public getGetter(): kotlin.reflect.KProperty2.Getter<any,any,any>;
				public isAbstract(): boolean;
				public get(object0: any, object1: any): any;
				public getGetter(): kotlin.reflect.KProperty2.Getter<any,any,any>;
				public isLateinit(): boolean;
				public getName(): string;
				public callBy(map0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				public call(objects0: native.Array<any>): any;
				public getDelegate(receiver1: any, receiver2: any): any;
				public callBy(map0: java.util.Map<any,any>): any;
				public isOpen(): boolean;
				public invoke(receiver1: any, receiver2: any): any;
				public constructor(receiver: any, owner: java.lang.Class<any>, name: string, signature: string, isTopLevel: boolean);
				public isSuspend(): boolean;
				public getParameters(): java.util.List<kotlin.reflect.KParameter>;
				public computeReflected(): kotlin.reflect.KCallable<any>;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class PropertyReference2Impl extends kotlin.jvm.internal.PropertyReference2 {
				public static class: java.lang.Class<kotlin.jvm.internal.PropertyReference2Impl>;
				public getVisibility(): kotlin.reflect.KVisibility;
				public getGetter(): kotlin.reflect.KProperty.Getter<any>;
				public isFinal(): boolean;
				public getReturnType(): kotlin.reflect.KType;
				public constructor(receiver: any, owner: java.lang.Class<any>, name: string, signature: string, flags: number);
				public constructor();
				public constructor(owner: java.lang.Class<any>, name: string, signature: string, flags: number);
				public constructor(receiver: any);
				public isConst(): boolean;
				public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				public getGetter(): kotlin.reflect.KProperty2.Getter<any,any,any>;
				public constructor(owner: kotlin.reflect.KDeclarationContainer, name: string, signature: string);
				public get(receiver1: any, receiver2: any): any;
				public isAbstract(): boolean;
				public getGetter(): kotlin.reflect.KProperty2.Getter<any,any,any>;
				public isLateinit(): boolean;
				public getName(): string;
				public callBy(map0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				public call(objects0: native.Array<any>): any;
				public getDelegate(receiver1: any, receiver2: any): any;
				public callBy(map0: java.util.Map<any,any>): any;
				public isOpen(): boolean;
				public constructor(receiver: any, owner: java.lang.Class<any>, name: string, signature: string, isTopLevel: boolean);
				public isSuspend(): boolean;
				public getParameters(): java.util.List<kotlin.reflect.KParameter>;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class Ref extends java.lang.Object {
				public static class: java.lang.Class<kotlin.jvm.internal.Ref>;
			}
			export module Ref {
				export class BooleanRef extends java.lang.Object implements java.io.Serializable {
					public static class: java.lang.Class<kotlin.jvm.internal.Ref.BooleanRef>;
					public element: boolean;
					public toString(): string;
					public constructor();
				}
				export class ByteRef extends java.lang.Object implements java.io.Serializable {
					public static class: java.lang.Class<kotlin.jvm.internal.Ref.ByteRef>;
					public element: number;
					public toString(): string;
					public constructor();
				}
				export class CharRef extends java.lang.Object implements java.io.Serializable {
					public static class: java.lang.Class<kotlin.jvm.internal.Ref.CharRef>;
					public element: string;
					public toString(): string;
					public constructor();
				}
				export class DoubleRef extends java.lang.Object implements java.io.Serializable {
					public static class: java.lang.Class<kotlin.jvm.internal.Ref.DoubleRef>;
					public element: number;
					public toString(): string;
					public constructor();
				}
				export class FloatRef extends java.lang.Object implements java.io.Serializable {
					public static class: java.lang.Class<kotlin.jvm.internal.Ref.FloatRef>;
					public element: number;
					public toString(): string;
					public constructor();
				}
				export class IntRef extends java.lang.Object implements java.io.Serializable {
					public static class: java.lang.Class<kotlin.jvm.internal.Ref.IntRef>;
					public element: number;
					public toString(): string;
					public constructor();
				}
				export class LongRef extends java.lang.Object implements java.io.Serializable {
					public static class: java.lang.Class<kotlin.jvm.internal.Ref.LongRef>;
					public element: number;
					public toString(): string;
					public constructor();
				}
				export class ObjectRef<T>  extends java.io.Serializable {
					public static class: java.lang.Class<kotlin.jvm.internal.Ref.ObjectRef<any>>;
					public element: any;
					public toString(): string;
					public constructor();
				}
				export class ShortRef extends java.lang.Object implements java.io.Serializable {
					public static class: java.lang.Class<kotlin.jvm.internal.Ref.ShortRef>;
					public element: number;
					public toString(): string;
					public constructor();
				}
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class Reflection extends java.lang.Object {
				public static class: java.lang.Class<kotlin.jvm.internal.Reflection>;
				public static nullableTypeOf(klass: java.lang.Class<any>, kTypeProjections1: native.Array<kotlin.reflect.KTypeProjection>): kotlin.reflect.KType;
				public static renderLambdaToString(lambda: kotlin.jvm.internal.Lambda<any>): string;
				public static typeParameter(container: any, name: string, variance: kotlin.reflect.KVariance, isReified: boolean): kotlin.reflect.KTypeParameter;
				public static function(f: kotlin.jvm.internal.FunctionReference): kotlin.reflect.KFunction<any>;
				public static typeOf(klass: java.lang.Class<any>, kTypeProjection1: kotlin.reflect.KTypeProjection, kTypeProjection2: kotlin.reflect.KTypeProjection): kotlin.reflect.KType;
				public static nullableTypeOf(klass: java.lang.Class<any>): kotlin.reflect.KType;
				public constructor();
				public static property2(p: kotlin.jvm.internal.PropertyReference2): kotlin.reflect.KProperty2<any,any,any>;
				public static getOrCreateKotlinClasses(javaClasses: native.Array<java.lang.Class<any>>): native.Array<kotlin.reflect.KClass<any>>;
				public static property1(p: kotlin.jvm.internal.PropertyReference1): kotlin.reflect.KProperty1<any,any>;
				public static getOrCreateKotlinClass(javaClass: java.lang.Class<any>): kotlin.reflect.KClass<any>;
				public static createKotlinClass(javaClass: java.lang.Class<any>, internalName: string): kotlin.reflect.KClass<any>;
				public static typeOf(klass: java.lang.Class<any>, kTypeProjections1: native.Array<kotlin.reflect.KTypeProjection>): kotlin.reflect.KType;
				public static typeOf(klass: java.lang.Class<any>): kotlin.reflect.KType;
				public static renderLambdaToString(lambda: kotlin.jvm.internal.FunctionBase<any>): string;
				public static mutableProperty1(p: kotlin.jvm.internal.MutablePropertyReference1): kotlin.reflect.KMutableProperty1<any,any>;
				public static nullableTypeOf(klass: java.lang.Class<any>, kTypeProjection1: kotlin.reflect.KTypeProjection): kotlin.reflect.KType;
				public static mutableProperty2(p: kotlin.jvm.internal.MutablePropertyReference2): kotlin.reflect.KMutableProperty2<any,any,any>;
				public static createKotlinClass(javaClass: java.lang.Class<any>): kotlin.reflect.KClass<any>;
				public static nullableTypeOf(klass: java.lang.Class<any>, kTypeProjection1: kotlin.reflect.KTypeProjection, kTypeProjection2: kotlin.reflect.KTypeProjection): kotlin.reflect.KType;
				public static typeOf(classifier: kotlin.reflect.KClassifier): kotlin.reflect.KType;
				public static nullableTypeOf(classifier: kotlin.reflect.KClassifier): kotlin.reflect.KType;
				public static property0(p: kotlin.jvm.internal.PropertyReference0): kotlin.reflect.KProperty0<any>;
				public static setUpperBounds(typeParameter: kotlin.reflect.KTypeParameter, bound: kotlin.reflect.KType): void;
				public static setUpperBounds(typeParameter: kotlin.reflect.KTypeParameter, bounds: native.Array<kotlin.reflect.KType>): void;
				public static typeOf(klass: java.lang.Class<any>, kTypeProjection1: kotlin.reflect.KTypeProjection): kotlin.reflect.KType;
				public static getOrCreateKotlinPackage(javaClass: java.lang.Class<any>): kotlin.reflect.KDeclarationContainer;
				public static getOrCreateKotlinClass(javaClass: java.lang.Class<any>, internalName: string): kotlin.reflect.KClass<any>;
				public static mutableProperty0(p: kotlin.jvm.internal.MutablePropertyReference0): kotlin.reflect.KMutableProperty0<any>;
				public static getOrCreateKotlinPackage(javaClass: java.lang.Class<any>, moduleName: string): kotlin.reflect.KDeclarationContainer;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class ReflectionFactory extends java.lang.Object {
				public static class: java.lang.Class<kotlin.jvm.internal.ReflectionFactory>;
				public mutableProperty2(p: kotlin.jvm.internal.MutablePropertyReference2): kotlin.reflect.KMutableProperty2<any,any,any>;
				public createKotlinClass(javaClass: java.lang.Class<any>, internalName: string): kotlin.reflect.KClass<any>;
				public function(f: kotlin.jvm.internal.FunctionReference): kotlin.reflect.KFunction<any>;
				public createKotlinClass(javaClass: java.lang.Class<any>): kotlin.reflect.KClass<any>;
				public getOrCreateKotlinClass(javaClass: java.lang.Class<any>): kotlin.reflect.KClass<any>;
				public property2(p: kotlin.jvm.internal.PropertyReference2): kotlin.reflect.KProperty2<any,any,any>;
				public setUpperBounds(typeParameter: kotlin.reflect.KTypeParameter, bounds: java.util.List<kotlin.reflect.KType>): void;
				public renderLambdaToString(lambda: kotlin.jvm.internal.Lambda<any>): string;
				public typeParameter(container: any, name: string, variance: kotlin.reflect.KVariance, isReified: boolean): kotlin.reflect.KTypeParameter;
				public constructor();
				public typeOf(klass: kotlin.reflect.KClassifier, list1: java.util.List<kotlin.reflect.KTypeProjection>, isMarkedNullable: boolean): kotlin.reflect.KType;
				public getOrCreateKotlinPackage(javaClass: java.lang.Class<any>, moduleName: string): kotlin.reflect.KDeclarationContainer;
				public property0(p: kotlin.jvm.internal.PropertyReference0): kotlin.reflect.KProperty0<any>;
				public property1(p: kotlin.jvm.internal.PropertyReference1): kotlin.reflect.KProperty1<any,any>;
				public mutableProperty1(p: kotlin.jvm.internal.MutablePropertyReference1): kotlin.reflect.KMutableProperty1<any,any>;
				public getOrCreateKotlinClass(javaClass: java.lang.Class<any>, internalName: string): kotlin.reflect.KClass<any>;
				public renderLambdaToString(lambda: kotlin.jvm.internal.FunctionBase<any>): string;
				public mutableProperty0(p: kotlin.jvm.internal.MutablePropertyReference0): kotlin.reflect.KMutableProperty0<any>;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class ShortCompanionObject extends java.lang.Object {
				public static class: java.lang.Class<kotlin.jvm.internal.ShortCompanionObject>;
				public static MIN_VALUE: number;
				public static MAX_VALUE: number;
				public static SIZE_BYTES: number;
				public static SIZE_BITS: number;
				public static INSTANCE: kotlin.jvm.internal.ShortCompanionObject;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class ShortSpreadBuilder extends kotlin.jvm.internal.PrimitiveSpreadBuilder<native.Array<number>> {
				public static class: java.lang.Class<kotlin.jvm.internal.ShortSpreadBuilder>;
				public getSize(object0: any): number;
				public add(value: number): void;
				public getSize(thisgetSize: native.Array<number>): number;
				public constructor(size: number);
				public toArray(values: any, result: any): any;
				public toArray(): native.Array<number>;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class SpreadBuilder extends java.lang.Object {
				public static class: java.lang.Class<kotlin.jvm.internal.SpreadBuilder>;
				public add(element: any): void;
				public toArray(a: native.Array<any>): native.Array<any>;
				public constructor(size: number);
				public addSpread(container: any): void;
				public size(): number;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class StringCompanionObject extends java.lang.Object {
				public static class: java.lang.Class<kotlin.jvm.internal.StringCompanionObject>;
				public static INSTANCE: kotlin.jvm.internal.StringCompanionObject;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class TypeIntrinsics extends java.lang.Object {
				public static class: java.lang.Class<kotlin.jvm.internal.TypeIntrinsics>;
				public static isMutableListIterator(obj: any): boolean;
				public static isMutableMapEntry(obj: any): boolean;
				public static getFunctionArity(obj: any): number;
				public static throwCce(e: java.lang.ClassCastException): java.lang.ClassCastException;
				public static asMutableCollection(obj: any, message: string): java.util.Collection<any>;
				public static isMutableMap(obj: any): boolean;
				public static throwCce(message: string): void;
				public static asMutableMap(obj: any): java.util.Map<any,any>;
				public static asMutableMapEntry(obj: any): java.util.Map.Entry<any,any>;
				public static castToMap(obj: any): java.util.Map<any,any>;
				public static asMutableList(obj: any): java.util.List<any>;
				public static asMutableListIterator(obj: any): java.util.ListIterator<any>;
				public static isMutableCollection(obj: any): boolean;
				public static throwCce(object0: any, requestedClassName: string): void;
				public constructor();
				public static asMutableSet(obj: any): java.util.Set<any>;
				public static asMutableIterable(obj: any): java.lang.Iterable<any>;
				public static beforeCheckcastToFunctionOfArity(obj: any, arity: number, message: string): any;
				public static isFunctionOfArity(obj: any, arity: number): boolean;
				public static castToIterator(obj: any): java.util.Iterator<any>;
				public static asMutableIterator(obj: any, message: string): java.util.Iterator<any>;
				public static asMutableCollection(obj: any): java.util.Collection<any>;
				public static asMutableList(obj: any, message: string): java.util.List<any>;
				public static castToSet(obj: any): java.util.Set<any>;
				public static asMutableMap(obj: any, message: string): java.util.Map<any,any>;
				public static isMutableSet(obj: any): boolean;
				public static castToMapEntry(obj: any): java.util.Map.Entry<any,any>;
				public static asMutableIterator(obj: any): java.util.Iterator<any>;
				public static castToCollection(obj: any): java.util.Collection<any>;
				public static isMutableIterator(obj: any): boolean;
				public static asMutableIterable(obj: any, message: string): java.lang.Iterable<any>;
				public static castToIterable(obj: any): java.lang.Iterable<any>;
				public static isMutableList(obj: any): boolean;
				public static asMutableMapEntry(obj: any, message: string): java.util.Map.Entry<any,any>;
				public static beforeCheckcastToFunctionOfArity(obj: any, arity: number): any;
				public static castToListIterator(obj: any): java.util.ListIterator<any>;
				public static asMutableListIterator(obj: any, message: string): java.util.ListIterator<any>;
				public static asMutableSet(obj: any, message: string): java.util.Set<any>;
				public static castToList(obj: any): java.util.List<any>;
				public static isMutableIterable(obj: any): boolean;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class TypeParameterReference extends java.lang.Object implements kotlin.reflect.KTypeParameter {
				public static class: java.lang.Class<kotlin.jvm.internal.TypeParameterReference>;
				public static Companion: kotlin.jvm.internal.TypeParameterReference.Companion;
				public equals(obj: any): boolean;
				public equals(other: any): boolean;
				public constructor(container: any, name: string, variance: kotlin.reflect.KVariance, isReified: boolean);
				public hashCode(): number;
				public getName(): string;
				public getUpperBounds(): java.util.List<kotlin.reflect.KType>;
				public setUpperBounds(upperBounds: java.util.List<any>): void;
				public toString(): string;
				public isReified(): boolean;
				public getVariance(): kotlin.reflect.KVariance;
			}
			export module TypeParameterReference {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<kotlin.jvm.internal.TypeParameterReference.Companion>;
					public toString(): string;
					public toString(typeParameter: kotlin.reflect.KTypeParameter): string;
				}
				export module Companion {
					export class WhenMappings extends java.lang.Object {
						public static class: java.lang.Class<kotlin.jvm.internal.TypeParameterReference.Companion.WhenMappings>;
					}
				}
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class TypeReference extends java.lang.Object implements kotlin.reflect.KType {
				public static class: java.lang.Class<kotlin.jvm.internal.TypeReference>;
				public equals(obj: any): boolean;
				public equals(other: any): boolean;
				public getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
				public getClassifier(): kotlin.reflect.KClassifier;
				public hashCode(): number;
				public constructor(classifier: kotlin.reflect.KClassifier, list1: java.util.List<kotlin.reflect.KTypeProjection>, isMarkedNullable: boolean);
				public getArguments(): java.util.List<kotlin.reflect.KTypeProjection>;
				public toString(): string;
				public isMarkedNullable(): boolean;
			}
			export module TypeReference {
				export class WhenMappings extends java.lang.Object {
					public static class: java.lang.Class<kotlin.jvm.internal.TypeReference.WhenMappings>;
				}
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export module markers {
				export class KMappedMarker extends java.lang.Object {
					public static class: java.lang.Class<kotlin.jvm.internal.markers.KMappedMarker>;
					/**
					 * Constructs a new instance of the kotlin.jvm.internal.markers.KMappedMarker interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export module markers {
				export class KMutableCollection extends java.lang.Object implements kotlin.jvm.internal.markers.KMutableIterable {
					public static class: java.lang.Class<kotlin.jvm.internal.markers.KMutableCollection>;
					/**
					 * Constructs a new instance of the kotlin.jvm.internal.markers.KMutableCollection interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export module markers {
				export class KMutableIterable extends java.lang.Object implements kotlin.jvm.internal.markers.KMappedMarker {
					public static class: java.lang.Class<kotlin.jvm.internal.markers.KMutableIterable>;
					/**
					 * Constructs a new instance of the kotlin.jvm.internal.markers.KMutableIterable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export module markers {
				export class KMutableIterator extends java.lang.Object implements kotlin.jvm.internal.markers.KMappedMarker {
					public static class: java.lang.Class<kotlin.jvm.internal.markers.KMutableIterator>;
					/**
					 * Constructs a new instance of the kotlin.jvm.internal.markers.KMutableIterator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export module markers {
				export class KMutableList extends java.lang.Object implements kotlin.jvm.internal.markers.KMutableCollection {
					public static class: java.lang.Class<kotlin.jvm.internal.markers.KMutableList>;
					/**
					 * Constructs a new instance of the kotlin.jvm.internal.markers.KMutableList interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export module markers {
				export class KMutableListIterator extends java.lang.Object implements kotlin.jvm.internal.markers.KMutableIterator {
					public static class: java.lang.Class<kotlin.jvm.internal.markers.KMutableListIterator>;
					/**
					 * Constructs a new instance of the kotlin.jvm.internal.markers.KMutableListIterator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export module markers {
				export class KMutableMap extends java.lang.Object implements kotlin.jvm.internal.markers.KMappedMarker {
					public static class: java.lang.Class<kotlin.jvm.internal.markers.KMutableMap>;
					/**
					 * Constructs a new instance of the kotlin.jvm.internal.markers.KMutableMap interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
				export module KMutableMap {
					export class Entry extends java.lang.Object implements kotlin.jvm.internal.markers.KMappedMarker {
						public static class: java.lang.Class<kotlin.jvm.internal.markers.KMutableMap.Entry>;
						/**
						 * Constructs a new instance of the kotlin.jvm.internal.markers.KMutableMap() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
				}
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export module markers {
				export class KMutableSet extends java.lang.Object implements kotlin.jvm.internal.markers.KMutableCollection {
					public static class: java.lang.Class<kotlin.jvm.internal.markers.KMutableSet>;
					/**
					 * Constructs a new instance of the kotlin.jvm.internal.markers.KMutableSet interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export module unsafe {
				export class MonitorKt extends java.lang.Object {
					public static class: java.lang.Class<kotlin.jvm.internal.unsafe.MonitorKt>;
				}
			}
		}
	}
}

declare module kotlin {
	export module math {
		export class Constants extends java.lang.Object {
			public static class: java.lang.Class<kotlin.math.Constants>;
			public static LN2: number;
			public static epsilon: number;
			public static taylor_2_bound: number;
			public static taylor_n_bound: number;
			public static upper_taylor_2_bound: number;
			public static upper_taylor_n_bound: number;
			public static INSTANCE: kotlin.math.Constants;
		}
	}
}

declare module kotlin {
	export module math {
		export class MathKt extends kotlin.math.MathKt__MathJVMKt {
			public static class: java.lang.Class<kotlin.math.MathKt>;
			public static E: number;
			public static PI: number;
		}
	}
}

declare module kotlin {
	export module math {
		export class MathKt__MathHKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.math.MathKt__MathHKt>;
			public constructor();
		}
	}
}

declare module kotlin {
	export module math {
		export class MathKt__MathJVMKt extends kotlin.math.MathKt__MathHKt {
			public static class: java.lang.Class<kotlin.math.MathKt__MathJVMKt>;
			public static asinh(x: number): number;
			public static log(x: number, base: number): number;
			public static atanh(x: number): number;
			public static log2(x: number): number;
			public static getSign(thissign: number): number;
			public static truncate(x: number): number;
			public static roundToLong(thisroundToLong: number): number;
			public static acosh(x: number): number;
			public constructor();
			public static roundToInt(thisroundToInt: number): number;
		}
	}
}

declare module kotlin {
	export module math {
		export class UMathKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.math.UMathKt>;
		}
	}
}

declare module kotlin {
	export module properties {
		export class Delegates extends java.lang.Object {
			public static class: java.lang.Class<kotlin.properties.Delegates>;
			public static INSTANCE: kotlin.properties.Delegates;
			public observable(initialValue: any, onChange: kotlin.jvm.functions.Function3<any,any,any,any>): kotlin.properties.ReadWriteProperty<any,any>;
			public vetoable(initialValue: any, onChange: kotlin.jvm.functions.Function3<any,any,any,any>): kotlin.properties.ReadWriteProperty<any,any>;
			public notNull(): kotlin.properties.ReadWriteProperty<any,any>;
		}
	}
}

declare module kotlin {
	export module properties {
		export class NotNullVar<T>  extends kotlin.properties.ReadWriteProperty<any,any> {
			public static class: java.lang.Class<kotlin.properties.NotNullVar<any>>;
			public setValue(thisRef: any, property: kotlin.reflect.KProperty<any>, value: any): void;
			public getValue(thisRef: any, property: kotlin.reflect.KProperty<any>): any;
			public constructor();
		}
	}
}

declare module kotlin {
	export module properties {
		export abstract class ObservableProperty<V>  extends kotlin.properties.ReadWriteProperty<any,any> {
			public static class: java.lang.Class<kotlin.properties.ObservableProperty<any>>;
			public constructor(initialValue: any);
			public afterChange(property: kotlin.reflect.KProperty<any>, oldValue: any, newValue: any): void;
			public setValue(thisRef: any, property: kotlin.reflect.KProperty<any>, value: any): void;
			public getValue(thisRef: any, property: kotlin.reflect.KProperty<any>): any;
			public beforeChange(property: kotlin.reflect.KProperty<any>, oldValue: any, newValue: any): boolean;
		}
	}
}

declare module kotlin {
	export module properties {
		export class PropertyDelegateProvider<T, D>  extends java.lang.Object {
			public static class: java.lang.Class<kotlin.properties.PropertyDelegateProvider<any,any>>;
			/**
			 * Constructs a new instance of the kotlin.properties.PropertyDelegateProvider<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				provideDelegate(object0: T, kProperty1: kotlin.reflect.KProperty<any>): D;
			});
			public constructor();
			public provideDelegate(object0: T, kProperty1: kotlin.reflect.KProperty<any>): D;
		}
	}
}

declare module kotlin {
	export module properties {
		export class ReadOnlyProperty<T, V>  extends java.lang.Object {
			public static class: java.lang.Class<kotlin.properties.ReadOnlyProperty<any,any>>;
			/**
			 * Constructs a new instance of the kotlin.properties.ReadOnlyProperty<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getValue(object0: T, kProperty1: kotlin.reflect.KProperty<any>): V;
			});
			public constructor();
			public getValue(object0: T, kProperty1: kotlin.reflect.KProperty<any>): V;
		}
	}
}

declare module kotlin {
	export module properties {
		export class ReadWriteProperty<T, V>  extends kotlin.properties.ReadOnlyProperty<any,any> {
			public static class: java.lang.Class<kotlin.properties.ReadWriteProperty<any,any>>;
			/**
			 * Constructs a new instance of the kotlin.properties.ReadWriteProperty<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getValue(object0: any, kProperty1: kotlin.reflect.KProperty<any>): any;
				setValue(object0: any, kProperty1: kotlin.reflect.KProperty<any>, object2: any): void;
				getValue(object0: any, kProperty1: kotlin.reflect.KProperty<any>): any;
			});
			public constructor();
			public getValue(object0: any, kProperty1: kotlin.reflect.KProperty<any>): any;
			public setValue(object0: any, kProperty1: kotlin.reflect.KProperty<any>, object2: any): void;
		}
	}
}

declare module kotlin {
	export module random {
		export abstract class AbstractPlatformRandom extends kotlin.random.Random {
			public static class: java.lang.Class<kotlin.random.AbstractPlatformRandom>;
			public nextBytes(size: number): native.Array<number>;
			public getImpl(): java.util.Random;
			public nextBoolean(): boolean;
			public nextBits(bitCount: number): number;
			public nextDouble(until: number): number;
			public constructor();
			public nextLong(): number;
			public nextDouble(): number;
			public nextFloat(): number;
			public nextInt(until: number): number;
			public nextBytes(array: native.Array<number>): native.Array<number>;
			public nextDouble(from: number, until: number): number;
			public nextLong(from: number, until: number): number;
			public nextInt(from: number, until: number): number;
			public nextInt(): number;
			public nextLong(until: number): number;
			public nextBits(int0: number): number;
			public nextBytes(array: native.Array<number>, fromIndex: number, toIndex: number): native.Array<number>;
		}
	}
}

declare module kotlin {
	export module random {
		export class FallbackThreadLocalRandom extends kotlin.random.AbstractPlatformRandom {
			public static class: java.lang.Class<kotlin.random.FallbackThreadLocalRandom>;
			public getImpl(): java.util.Random;
			public constructor();
		}
	}
}

declare module kotlin {
	export module random {
		export class KotlinRandom extends java.util.Random {
			public static class: java.lang.Class<kotlin.random.KotlinRandom>;
			public nextBoolean(): boolean;
			public constructor();
			public constructor(impl: kotlin.random.Random);
			public nextLong(): number;
			public nextFloat(): number;
			public nextDouble(): number;
			public setSeed(seed: number): void;
			public next(bits: number): number;
			public getImpl(): kotlin.random.Random;
			public constructor(seed: number);
			public nextInt(): number;
			public nextInt(bound: number): number;
			public nextBytes(bytes: native.Array<number>): void;
		}
	}
}

declare module kotlin {
	export module random {
		export class PlatformRandom extends kotlin.random.AbstractPlatformRandom {
			public static class: java.lang.Class<kotlin.random.PlatformRandom>;
			public getImpl(): java.util.Random;
			public constructor(impl: java.util.Random);
			public constructor();
		}
	}
}

declare module kotlin {
	export module random {
		export class PlatformRandomKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.random.PlatformRandomKt>;
			public static doubleFromParts(hi26: number, low27: number): number;
			public static asJavaRandom(thisasJavaRandom: kotlin.random.Random): java.util.Random;
			public static asKotlinRandom(thisasKotlinRandom: java.util.Random): kotlin.random.Random;
		}
	}
}

declare module kotlin {
	export module random {
		export abstract class Random extends java.lang.Object {
			public static class: java.lang.Class<kotlin.random.Random>;
			public static Default: kotlin.random.Random.Default;
			public nextBytes(size: number): native.Array<number>;
			public nextBoolean(): boolean;
			public nextDouble(until: number): number;
			public constructor();
			public nextLong(): number;
			public nextDouble(): number;
			public nextFloat(): number;
			public nextInt(until: number): number;
			public nextBytes(array: native.Array<number>): native.Array<number>;
			public nextDouble(from: number, until: number): number;
			public nextLong(from: number, until: number): number;
			public nextInt(from: number, until: number): number;
			public nextInt(): number;
			public nextLong(until: number): number;
			public nextBits(int0: number): number;
			public nextBytes(array: native.Array<number>, fromIndex: number, toIndex: number): native.Array<number>;
		}
		export module Random {
			export class Default extends kotlin.random.Random {
				public static class: java.lang.Class<kotlin.random.Random.Default>;
				public nextLong(until: number): number;
				public nextDouble(from: number, until: number): number;
				public nextBits(bitCount: number): number;
				public nextDouble(): number;
				public nextInt(): number;
				public nextLong(): number;
				public nextBits(int0: number): number;
				public nextLong(from: number, until: number): number;
				public nextFloat(): number;
				public nextBytes(array: native.Array<number>, fromIndex: number, toIndex: number): native.Array<number>;
				public nextInt(from: number, until: number): number;
				public nextDouble(until: number): number;
				public nextBytes(size: number): native.Array<number>;
				public nextBoolean(): boolean;
				public nextBytes(array: native.Array<number>): native.Array<number>;
				public nextInt(until: number): number;
			}
		}
	}
}

declare module kotlin {
	export module random {
		export class RandomKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.random.RandomKt>;
			public static fastLog2(value: number): number;
			public static Random(seed: number): kotlin.random.Random;
			public static takeUpperBits(thistakeUpperBits: number, bitCount: number): number;
			public static boundsErrorMessage(from: any, until: any): string;
			public static nextLong(thisnextLong: kotlin.random.Random, range: kotlin.ranges.LongRange): number;
			public static checkRangeBounds(from: number, until: number): void;
			public static nextInt(thisnextInt: kotlin.random.Random, range: kotlin.ranges.IntRange): number;
		}
	}
}

declare module kotlin {
	export module random {
		export class URandomKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.random.URandomKt>;
			public static checkUIntRangeBounds(from: number, until: number): void;
			public static nextUInt(thisnextUInt: kotlin.random.Random, from: number, until: number): number;
			public static nextUBytes(thisnextUBytes: kotlin.random.Random, array: native.Array<number>): native.Array<number>;
			public static nextULong(thisnextULong: kotlin.random.Random): number;
			public static nextULong(thisnextULong: kotlin.random.Random, from: number, until: number): number;
			public static nextUInt(thisnextUInt: kotlin.random.Random, until: number): number;
			public static nextUInt(thisnextUInt: kotlin.random.Random, range: kotlin.ranges.UIntRange): number;
			public static nextULong(thisnextULong: kotlin.random.Random, range: kotlin.ranges.ULongRange): number;
			public static nextUBytes(thisnextUBytes: kotlin.random.Random, array: native.Array<number>, fromIndex: number, toIndex: number): native.Array<number>;
			public static nextUBytes(thisnextUBytes: kotlin.random.Random, size: number): native.Array<number>;
			public static nextUInt(thisnextUInt: kotlin.random.Random): number;
			public static checkULongRangeBounds(from: number, until: number): void;
			public static nextULong(thisnextULong: kotlin.random.Random, until: number): number;
		}
	}
}

declare module kotlin {
	export module random {
		export class XorWowRandom extends kotlin.random.Random {
			public static class: java.lang.Class<kotlin.random.XorWowRandom>;
			public nextInt(until: number): number;
			public constructor(x: number, y: number, z: number, w: number, v: number, addend: number);
			public nextBits(bitCount: number): number;
			public constructor(seed1: number, seed2: number);
			public nextInt(from: number, until: number): number;
			public nextInt(): number;
			public constructor();
			public nextBits(int0: number): number;
		}
	}
}

declare module kotlin {
	export module ranges {
		export class CharProgression extends java.lang.Object {
			public static class: java.lang.Class<kotlin.ranges.CharProgression>;
			public static Companion: kotlin.ranges.CharProgression.Companion;
			public getFirst(): string;
			public iterator(): kotlin.collections.CharIterator;
			public constructor(start: string, endInclusive: string, step: number);
			public isEmpty(): boolean;
			public forEach(action: any /* any*/): void;
			public getLast(): string;
			public getStep(): number;
			public equals(other: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public spliterator(): java.util.Spliterator<any>;
			public hashCode(): number;
			public iterator(): java.util.Iterator<any>;
		}
		export module CharProgression {
			export class Companion extends java.lang.Object {
				public static class: java.lang.Class<kotlin.ranges.CharProgression.Companion>;
				public fromClosedRange(rangeStart: string, rangeEnd: string, step: number): kotlin.ranges.CharProgression;
			}
		}
	}
}

declare module kotlin {
	export module ranges {
		export class CharProgressionIterator extends kotlin.collections.CharIterator {
			public static class: java.lang.Class<kotlin.ranges.CharProgressionIterator>;
			public constructor(first: string, last: string, step: number);
			public nextChar(): string;
			public constructor();
			public hasNext(): boolean;
			public getStep(): number;
		}
	}
}

declare module kotlin {
	export module ranges {
		export class CharRange extends kotlin.ranges.CharProgression implements kotlin.ranges.ClosedRange<java.lang.Character>  {
			public static class: java.lang.Class<kotlin.ranges.CharRange>;
			public static Companion: kotlin.ranges.CharRange.Companion;
			public getEndInclusive(): any;
			public iterator(): kotlin.collections.CharIterator;
			public constructor(start: string, endInclusive: string, step: number);
			public isEmpty(): boolean;
			public contains(value: string): boolean;
			public contains(comparable0: any): boolean;
			public forEach(action: any /* any*/): void;
			public getEndInclusive(): java.lang.Character;
			public equals(other: any): boolean;
			public toString(): string;
			public getStart(): any;
			public getStart(): java.lang.Character;
			public constructor(start: string, endInclusive: string);
			public spliterator(): java.util.Spliterator<any>;
			public hashCode(): number;
			public iterator(): java.util.Iterator<any>;
		}
		export module CharRange {
			export class Companion extends java.lang.Object {
				public static class: java.lang.Class<kotlin.ranges.CharRange.Companion>;
				public getEMPTY(): kotlin.ranges.CharRange;
			}
		}
	}
}

declare module kotlin {
	export module ranges {
		export class ClosedDoubleRange extends kotlin.ranges.ClosedFloatingPointRange<java.lang.Double> {
			public static class: java.lang.Class<kotlin.ranges.ClosedDoubleRange>;
			public getEndInclusive(): any;
			public constructor(start: number, endInclusive: number);
			public isEmpty(): boolean;
			public lessThanOrEquals(comparable0: any, comparable1: any): boolean;
			public contains(comparable0: any): boolean;
			public equals(other: any): boolean;
			public toString(): string;
			public getStart(): any;
			public equals(obj: any): boolean;
			public getEndInclusive(): java.lang.Double;
			public getStart(): java.lang.Double;
			public contains(value: number): boolean;
			public lessThanOrEquals(a: number, b: number): boolean;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module ranges {
		export class ClosedFloatRange extends kotlin.ranges.ClosedFloatingPointRange<java.lang.Float> {
			public static class: java.lang.Class<kotlin.ranges.ClosedFloatRange>;
			public getEndInclusive(): any;
			public constructor(start: number, endInclusive: number);
			public isEmpty(): boolean;
			public lessThanOrEquals(comparable0: any, comparable1: any): boolean;
			public contains(comparable0: any): boolean;
			public getStart(): java.lang.Float;
			public getEndInclusive(): java.lang.Float;
			public equals(other: any): boolean;
			public toString(): string;
			public getStart(): any;
			public equals(obj: any): boolean;
			public contains(value: number): boolean;
			public lessThanOrEquals(a: number, b: number): boolean;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module ranges {
		export class ClosedFloatingPointRange<T>  extends kotlin.ranges.ClosedRange<any> {
			public static class: java.lang.Class<kotlin.ranges.ClosedFloatingPointRange<any>>;
			/**
			 * Constructs a new instance of the kotlin.ranges.ClosedFloatingPointRange<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				contains(comparable0: any): boolean;
				isEmpty(): boolean;
				lessThanOrEquals(comparable0: any, comparable1: any): boolean;
				getStart(): any;
				getEndInclusive(): any;
				contains(comparable0: any): boolean;
				isEmpty(): boolean;
			});
			public constructor();
			public getEndInclusive(): any;
			public getStart(): any;
			public isEmpty(): boolean;
			public lessThanOrEquals(comparable0: any, comparable1: any): boolean;
			public contains(comparable0: any): boolean;
		}
		export module ClosedFloatingPointRange {
			export class DefaultImpls extends java.lang.Object {
				public static class: java.lang.Class<kotlin.ranges.ClosedFloatingPointRange.DefaultImpls>;
				public static contains(this0: kotlin.ranges.ClosedFloatingPointRange<any>, value: java.lang.Comparable<any>): boolean;
				public static isEmpty(this0: kotlin.ranges.ClosedFloatingPointRange<any>): boolean;
			}
		}
	}
}

declare module kotlin {
	export module ranges {
		export class ClosedRange<T>  extends java.lang.Object {
			public static class: java.lang.Class<kotlin.ranges.ClosedRange<any>>;
			/**
			 * Constructs a new instance of the kotlin.ranges.ClosedRange<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getStart(): T;
				getEndInclusive(): T;
				contains(comparable0: T): boolean;
				isEmpty(): boolean;
			});
			public constructor();
			public getStart(): T;
			public isEmpty(): boolean;
			public getEndInclusive(): T;
			public contains(comparable0: T): boolean;
		}
		export module ClosedRange {
			export class DefaultImpls extends java.lang.Object {
				public static class: java.lang.Class<kotlin.ranges.ClosedRange.DefaultImpls>;
				public static contains(this0: kotlin.ranges.ClosedRange<any>, value: java.lang.Comparable<any>): boolean;
				public static isEmpty(this0: kotlin.ranges.ClosedRange<any>): boolean;
			}
		}
	}
}

declare module kotlin {
	export module ranges {
		export class ComparableRange<T>  extends kotlin.ranges.ClosedRange<any> {
			public static class: java.lang.Class<kotlin.ranges.ComparableRange<any>>;
			public getEndInclusive(): any;
			public equals(other: any): boolean;
			public constructor(start: any, endInclusive: any);
			public toString(): string;
			public getStart(): any;
			public equals(obj: any): boolean;
			public isEmpty(): boolean;
			public contains(value: any): boolean;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module ranges {
		export class IntProgression extends java.lang.Object {
			public static class: java.lang.Class<kotlin.ranges.IntProgression>;
			public static Companion: kotlin.ranges.IntProgression.Companion;
			public isEmpty(): boolean;
			public getFirst(): number;
			public iterator(): kotlin.collections.IntIterator;
			public forEach(action: any /* any*/): void;
			public getStep(): number;
			public equals(other: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public getLast(): number;
			public constructor(start: number, endInclusive: number, step: number);
			public spliterator(): java.util.Spliterator<any>;
			public hashCode(): number;
			public iterator(): java.util.Iterator<any>;
		}
		export module IntProgression {
			export class Companion extends java.lang.Object {
				public static class: java.lang.Class<kotlin.ranges.IntProgression.Companion>;
				public fromClosedRange(rangeStart: number, rangeEnd: number, step: number): kotlin.ranges.IntProgression;
			}
		}
	}
}

declare module kotlin {
	export module ranges {
		export class IntProgressionIterator extends kotlin.collections.IntIterator {
			public static class: java.lang.Class<kotlin.ranges.IntProgressionIterator>;
			public constructor(first: number, last: number, step: number);
			public nextInt(): number;
			public constructor();
			public hasNext(): boolean;
			public getStep(): number;
		}
	}
}

declare module kotlin {
	export module ranges {
		export class IntRange extends kotlin.ranges.IntProgression implements kotlin.ranges.ClosedRange<java.lang.Integer>  {
			public static class: java.lang.Class<kotlin.ranges.IntRange>;
			public static Companion: kotlin.ranges.IntRange.Companion;
			public getEndInclusive(): any;
			public constructor(start: number, endInclusive: number);
			public isEmpty(): boolean;
			public iterator(): kotlin.collections.IntIterator;
			public contains(comparable0: any): boolean;
			public forEach(action: any /* any*/): void;
			public getStart(): java.lang.Integer;
			public getEndInclusive(): java.lang.Integer;
			public equals(other: any): boolean;
			public toString(): string;
			public getStart(): any;
			public constructor(start: number, endInclusive: number, step: number);
			public contains(value: number): boolean;
			public spliterator(): java.util.Spliterator<any>;
			public hashCode(): number;
			public iterator(): java.util.Iterator<any>;
		}
		export module IntRange {
			export class Companion extends java.lang.Object {
				public static class: java.lang.Class<kotlin.ranges.IntRange.Companion>;
				public getEMPTY(): kotlin.ranges.IntRange;
			}
		}
	}
}

declare module kotlin {
	export module ranges {
		export class LongProgression extends java.lang.Object {
			public static class: java.lang.Class<kotlin.ranges.LongProgression>;
			public static Companion: kotlin.ranges.LongProgression.Companion;
			public isEmpty(): boolean;
			public getFirst(): number;
			public forEach(action: any /* any*/): void;
			public getStep(): number;
			public iterator(): kotlin.collections.LongIterator;
			public equals(other: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public getLast(): number;
			public constructor(start: number, endInclusive: number, step: number);
			public spliterator(): java.util.Spliterator<any>;
			public hashCode(): number;
			public iterator(): java.util.Iterator<any>;
		}
		export module LongProgression {
			export class Companion extends java.lang.Object {
				public static class: java.lang.Class<kotlin.ranges.LongProgression.Companion>;
				public fromClosedRange(rangeStart: number, rangeEnd: number, step: number): kotlin.ranges.LongProgression;
			}
		}
	}
}

declare module kotlin {
	export module ranges {
		export class LongProgressionIterator extends kotlin.collections.LongIterator {
			public static class: java.lang.Class<kotlin.ranges.LongProgressionIterator>;
			public constructor(first: number, last: number, step: number);
			public constructor();
			public hasNext(): boolean;
			public nextLong(): number;
			public getStep(): number;
		}
	}
}

declare module kotlin {
	export module ranges {
		export class LongRange extends kotlin.ranges.LongProgression implements kotlin.ranges.ClosedRange<java.lang.Long>  {
			public static class: java.lang.Class<kotlin.ranges.LongRange>;
			public static Companion: kotlin.ranges.LongRange.Companion;
			public getEndInclusive(): any;
			public constructor(start: number, endInclusive: number);
			public getEndInclusive(): java.lang.Long;
			public isEmpty(): boolean;
			public getStart(): java.lang.Long;
			public contains(comparable0: any): boolean;
			public forEach(action: any /* any*/): void;
			public iterator(): kotlin.collections.LongIterator;
			public equals(other: any): boolean;
			public toString(): string;
			public getStart(): any;
			public constructor(start: number, endInclusive: number, step: number);
			public contains(value: number): boolean;
			public spliterator(): java.util.Spliterator<any>;
			public hashCode(): number;
			public iterator(): java.util.Iterator<any>;
		}
		export module LongRange {
			export class Companion extends java.lang.Object {
				public static class: java.lang.Class<kotlin.ranges.LongRange.Companion>;
				public getEMPTY(): kotlin.ranges.LongRange;
			}
		}
	}
}

declare module kotlin {
	export module ranges {
		export class RangesKt extends kotlin.ranges.RangesKt___RangesKt {
			public static class: java.lang.Class<kotlin.ranges.RangesKt>;
		}
	}
}

declare module kotlin {
	export module ranges {
		export class RangesKt__RangesKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.ranges.RangesKt__RangesKt>;
			public static rangeTo(thisrangeTo: number, that: number): kotlin.ranges.ClosedFloatingPointRange<java.lang.Double>;
			public static checkStepIsPositive(isPositive: boolean, step: java.lang.Number): void;
			public constructor();
			public static rangeTo(thisrangeTo: java.lang.Comparable<any>, that: java.lang.Comparable<any>): kotlin.ranges.ClosedRange<any>;
			public static rangeTo(thisrangeTo: number, that: number): kotlin.ranges.ClosedFloatingPointRange<java.lang.Float>;
		}
	}
}

declare module kotlin {
	export module ranges {
		export class RangesKt___RangesKt extends kotlin.ranges.RangesKt__RangesKt {
			public static class: java.lang.Class<kotlin.ranges.RangesKt___RangesKt>;
			public static randomOrNull(thisrandomOrNull: kotlin.ranges.IntRange, random: kotlin.random.Random): java.lang.Integer;
			public static intRangeContains(thiscontains: kotlin.ranges.ClosedRange<java.lang.Integer>, value: number): boolean;
			public static step(thisstep: kotlin.ranges.LongProgression, step: number): kotlin.ranges.LongProgression;
			public static coerceIn(thiscoerceIn: number, range: kotlin.ranges.ClosedRange<java.lang.Long>): number;
			public static step(thisstep: kotlin.ranges.CharProgression, step: number): kotlin.ranges.CharProgression;
			/** @deprecated */
			public static shortRangeContains(thiscontains: kotlin.ranges.ClosedRange<java.lang.Short>, value: number): boolean;
			public static coerceAtLeast(thiscoerceAtLeast: number, minimumValue: number): number;
			public static byteRangeContains(thiscontains: kotlin.ranges.ClosedRange<java.lang.Byte>, value: number): boolean;
			/** @deprecated */
			public static byteRangeContains(thiscontains: kotlin.ranges.ClosedRange<java.lang.Byte>, value: number): boolean;
			public static randomOrNull(thisrandomOrNull: kotlin.ranges.CharRange, random: kotlin.random.Random): java.lang.Character;
			/** @deprecated */
			public static longRangeContains(thiscontains: kotlin.ranges.ClosedRange<java.lang.Long>, value: number): boolean;
			/** @deprecated */
			public static doubleRangeContains(thiscontains: kotlin.ranges.ClosedRange<java.lang.Double>, value: number): boolean;
			public static random(thisrandom: kotlin.ranges.IntRange, random: kotlin.random.Random): number;
			public static longRangeContains(thiscontains: kotlin.ranges.ClosedRange<java.lang.Long>, value: number): boolean;
			public static coerceAtMost(thiscoerceAtMost: java.lang.Comparable<any>, maximumValue: java.lang.Comparable<any>): java.lang.Comparable<any>;
			public static coerceIn(thiscoerceIn: java.lang.Comparable<any>, range: kotlin.ranges.ClosedFloatingPointRange<any>): java.lang.Comparable<any>;
			public static shortRangeContains(thiscontains: kotlin.ranges.ClosedRange<java.lang.Short>, value: number): boolean;
			public static random(thisrandom: kotlin.ranges.CharRange, random: kotlin.random.Random): string;
			public static coerceAtLeast(thiscoerceAtLeast: java.lang.Comparable<any>, minimumValue: java.lang.Comparable<any>): java.lang.Comparable<any>;
			public static coerceIn(thiscoerceIn: java.lang.Comparable<any>, range: kotlin.ranges.ClosedRange<any>): java.lang.Comparable<any>;
			public static random(thisrandom: kotlin.ranges.LongRange, random: kotlin.random.Random): number;
			public static until(thisuntil: number, to: number): kotlin.ranges.IntRange;
			/** @deprecated */
			public static intRangeContains(thiscontains: kotlin.ranges.ClosedRange<java.lang.Integer>, value: number): boolean;
			/** @deprecated */
			public static floatRangeContains(thiscontains: kotlin.ranges.ClosedRange<java.lang.Float>, value: number): boolean;
			public static toIntExactOrNull(thistoIntExactOrNull: number): java.lang.Integer;
			public static randomOrNull(thisrandomOrNull: kotlin.ranges.LongRange, random: kotlin.random.Random): java.lang.Long;
			public static downTo(thisdownTo: string, to: string): kotlin.ranges.CharProgression;
			public static step(thisstep: kotlin.ranges.IntProgression, step: number): kotlin.ranges.IntProgression;
			public static coerceAtMost(thiscoerceAtMost: number, maximumValue: number): number;
			public static toShortExactOrNull(thistoShortExactOrNull: number): java.lang.Short;
			public static downTo(thisdownTo: number, to: number): kotlin.ranges.IntProgression;
			public static reversed(thisreversed: kotlin.ranges.CharProgression): kotlin.ranges.CharProgression;
			public static coerceIn(thiscoerceIn: java.lang.Comparable<any>, minimumValue: java.lang.Comparable<any>, maximumValue: java.lang.Comparable<any>): java.lang.Comparable<any>;
			public static doubleRangeContains(thiscontains: kotlin.ranges.ClosedRange<java.lang.Double>, value: number): boolean;
			public static toByteExactOrNull(thistoByteExactOrNull: number): java.lang.Byte;
			public static reversed(thisreversed: kotlin.ranges.IntProgression): kotlin.ranges.IntProgression;
			public constructor();
			public static coerceIn(thiscoerceIn: number, minimumValue: number, maximumValue: number): number;
			public static downTo(thisdownTo: number, to: number): kotlin.ranges.LongProgression;
			public static reversed(thisreversed: kotlin.ranges.LongProgression): kotlin.ranges.LongProgression;
			public static coerceIn(thiscoerceIn: number, range: kotlin.ranges.ClosedRange<java.lang.Integer>): number;
			public static until(thisuntil: string, to: string): kotlin.ranges.CharRange;
			public static floatRangeContains(thiscontains: kotlin.ranges.ClosedRange<java.lang.Float>, value: number): boolean;
			public static toLongExactOrNull(thistoLongExactOrNull: number): java.lang.Long;
			public static until(thisuntil: number, to: number): kotlin.ranges.LongRange;
		}
	}
}

declare module kotlin {
	export module ranges {
		export class UIntProgression extends java.lang.Object {
			public static class: java.lang.Class<kotlin.ranges.UIntProgression>;
			public static Companion: kotlin.ranges.UIntProgression.Companion;
			public equals(other: any): boolean;
			public toString(): string;
			public isEmpty(): boolean;
			public equals(obj: any): boolean;
			public getFirst(): number;
			public getLast(): number;
			public iterator(): kotlin.collections.UIntIterator;
			public forEach(action: any /* any*/): void;
			public spliterator(): java.util.Spliterator<any>;
			public getStep(): number;
			public hashCode(): number;
			public iterator(): java.util.Iterator<any>;
		}
		export module UIntProgression {
			export class Companion extends java.lang.Object {
				public static class: java.lang.Class<kotlin.ranges.UIntProgression.Companion>;
				public fromClosedRange(rangeStart: number, rangeEnd: number, step: number): kotlin.ranges.UIntProgression;
			}
		}
	}
}

declare module kotlin {
	export module ranges {
		export class UIntProgressionIterator extends kotlin.collections.UIntIterator {
			public static class: java.lang.Class<kotlin.ranges.UIntProgressionIterator>;
			public nextUInt(): number;
			public hasNext(): boolean;
		}
	}
}

declare module kotlin {
	export module ranges {
		export class UIntRange extends kotlin.ranges.UIntProgression implements kotlin.ranges.ClosedRange<kotlin.UInt>  {
			public static class: java.lang.Class<kotlin.ranges.UIntRange>;
			public static Companion: kotlin.ranges.UIntRange.Companion;
			public getEndInclusive(): any;
			public isEmpty(): boolean;
			public contains(comparable0: any): boolean;
			public iterator(): kotlin.collections.UIntIterator;
			public forEach(action: any /* any*/): void;
			public getStart(): number;
			public equals(other: any): boolean;
			public toString(): string;
			public getStart(): any;
			public getEndInclusive(): number;
			public contains(value: number): boolean;
			public spliterator(): java.util.Spliterator<any>;
			public hashCode(): number;
			public iterator(): java.util.Iterator<any>;
		}
		export module UIntRange {
			export class Companion extends java.lang.Object {
				public static class: java.lang.Class<kotlin.ranges.UIntRange.Companion>;
				public getEMPTY(): kotlin.ranges.UIntRange;
			}
		}
	}
}

declare module kotlin {
	export module ranges {
		export class ULongProgression extends java.lang.Object {
			public static class: java.lang.Class<kotlin.ranges.ULongProgression>;
			public static Companion: kotlin.ranges.ULongProgression.Companion;
			public equals(other: any): boolean;
			public toString(): string;
			public isEmpty(): boolean;
			public equals(obj: any): boolean;
			public getFirst(): number;
			public getLast(): number;
			public iterator(): kotlin.collections.ULongIterator;
			public forEach(action: any /* any*/): void;
			public spliterator(): java.util.Spliterator<any>;
			public getStep(): number;
			public hashCode(): number;
			public iterator(): java.util.Iterator<any>;
		}
		export module ULongProgression {
			export class Companion extends java.lang.Object {
				public static class: java.lang.Class<kotlin.ranges.ULongProgression.Companion>;
				public fromClosedRange(rangeStart: number, rangeEnd: number, step: number): kotlin.ranges.ULongProgression;
			}
		}
	}
}

declare module kotlin {
	export module ranges {
		export class ULongProgressionIterator extends kotlin.collections.ULongIterator {
			public static class: java.lang.Class<kotlin.ranges.ULongProgressionIterator>;
			public nextULong(): number;
			public hasNext(): boolean;
		}
	}
}

declare module kotlin {
	export module ranges {
		export class ULongRange extends kotlin.ranges.ULongProgression implements kotlin.ranges.ClosedRange<kotlin.ULong>  {
			public static class: java.lang.Class<kotlin.ranges.ULongRange>;
			public static Companion: kotlin.ranges.ULongRange.Companion;
			public getEndInclusive(): any;
			public isEmpty(): boolean;
			public contains(comparable0: any): boolean;
			public forEach(action: any /* any*/): void;
			public getStart(): number;
			public equals(other: any): boolean;
			public toString(): string;
			public getStart(): any;
			public getEndInclusive(): number;
			public iterator(): kotlin.collections.ULongIterator;
			public contains(value: number): boolean;
			public spliterator(): java.util.Spliterator<any>;
			public hashCode(): number;
			public iterator(): java.util.Iterator<any>;
		}
		export module ULongRange {
			export class Companion extends java.lang.Object {
				public static class: java.lang.Class<kotlin.ranges.ULongRange.Companion>;
				public getEMPTY(): kotlin.ranges.ULongRange;
			}
		}
	}
}

declare module kotlin {
	export module ranges {
		export class URangesKt extends kotlin.ranges.URangesKt___URangesKt {
			public static class: java.lang.Class<kotlin.ranges.URangesKt>;
		}
	}
}

declare module kotlin {
	export module ranges {
		export class URangesKt___URangesKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.ranges.URangesKt___URangesKt>;
			public static contains(thiscontains: kotlin.ranges.ULongRange, value: number): boolean;
			public static randomOrNull(thisrandomOrNull: kotlin.ranges.ULongRange, random: kotlin.random.Random): kotlin.ULong;
			public static until(thisuntil: number, to: number): kotlin.ranges.ULongRange;
			public static contains(thiscontains: kotlin.ranges.UIntRange, value: number): boolean;
			public static coerceAtLeast(thiscoerceAtLeast: number, minimumValue: number): number;
			public static reversed(thisreversed: kotlin.ranges.ULongProgression): kotlin.ranges.ULongProgression;
			public constructor();
			public static coerceIn(thiscoerceIn: number, minimumValue: number, maximumValue: number): number;
			public static randomOrNull(thisrandomOrNull: kotlin.ranges.UIntRange, random: kotlin.random.Random): kotlin.UInt;
			public static step(thisstep: kotlin.ranges.UIntProgression, step: number): kotlin.ranges.UIntProgression;
			public static coerceIn(thiscoerceIn: number, range: kotlin.ranges.ClosedRange<kotlin.ULong>): number;
			public static step(thisstep: kotlin.ranges.ULongProgression, step: number): kotlin.ranges.ULongProgression;
			public static coerceIn(thiscoerceIn: number, range: kotlin.ranges.ClosedRange<kotlin.UInt>): number;
			public static downTo(thisdownTo: number, to: number): kotlin.ranges.UIntProgression;
			public static reversed(thisreversed: kotlin.ranges.UIntProgression): kotlin.ranges.UIntProgression;
			public static until(thisuntil: number, to: number): kotlin.ranges.UIntRange;
			public static downTo(thisdownTo: number, to: number): kotlin.ranges.ULongProgression;
			public static coerceAtMost(thiscoerceAtMost: number, maximumValue: number): number;
			public static random(thisrandom: kotlin.ranges.ULongRange, random: kotlin.random.Random): number;
			public static random(thisrandom: kotlin.ranges.UIntRange, random: kotlin.random.Random): number;
		}
	}
}

declare module kotlin {
	export module reflect {
		export class GenericArrayTypeImpl extends java.lang.Object implements java.lang.reflect.GenericArrayType, kotlin.reflect.TypeImpl {
			public static class: java.lang.Class<kotlin.reflect.GenericArrayTypeImpl>;
			public equals(other: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public getGenericComponentType(): java.lang.reflect.Type;
			public constructor(elementType: java.lang.reflect.Type);
			public getTypeName(): string;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module reflect {
		export class KAnnotatedElement extends java.lang.Object {
			public static class: java.lang.Class<kotlin.reflect.KAnnotatedElement>;
			/**
			 * Constructs a new instance of the kotlin.reflect.KAnnotatedElement interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
			});
			public constructor();
			public getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
		}
	}
}

declare module kotlin {
	export module reflect {
		export class KCallable<R>  extends kotlin.reflect.KAnnotatedElement {
			public static class: java.lang.Class<kotlin.reflect.KCallable<any>>;
			/**
			 * Constructs a new instance of the kotlin.reflect.KCallable<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getName(): string;
				getParameters(): java.util.List<kotlin.reflect.KParameter>;
				getReturnType(): kotlin.reflect.KType;
				getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				call(objects0: native.Array<any>): any;
				callBy(map0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				getVisibility(): kotlin.reflect.KVisibility;
				isFinal(): boolean;
				isOpen(): boolean;
				isAbstract(): boolean;
				isSuspend(): boolean;
				getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
			});
			public constructor();
			public isFinal(): boolean;
			public getReturnType(): kotlin.reflect.KType;
			public isOpen(): boolean;
			public getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
			public getName(): string;
			public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
			public getVisibility(): kotlin.reflect.KVisibility;
			public getParameters(): java.util.List<kotlin.reflect.KParameter>;
			public isSuspend(): boolean;
			public call(objects0: native.Array<any>): any;
			public isAbstract(): boolean;
			public callBy(map0: java.util.Map<kotlin.reflect.KParameter,any>): any;
		}
		export module KCallable {
			export class DefaultImpls extends java.lang.Object {
				public static class: java.lang.Class<kotlin.reflect.KCallable.DefaultImpls>;
			}
		}
	}
}

declare module kotlin {
	export module reflect {
		export class KClass<T>  extends java.lang.Object {
			public static class: java.lang.Class<kotlin.reflect.KClass<any>>;
			/**
			 * Constructs a new instance of the kotlin.reflect.KClass<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getSimpleName(): string;
				getQualifiedName(): string;
				getMembers(): java.util.Collection<kotlin.reflect.KCallable<any>>;
				getConstructors(): java.util.Collection<kotlin.reflect.KFunction<T>>;
				getNestedClasses(): java.util.Collection<kotlin.reflect.KClass<any>>;
				getObjectInstance(): T;
				isInstance(object0: any): boolean;
				getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				getSupertypes(): java.util.List<kotlin.reflect.KType>;
				getSealedSubclasses(): java.util.List<kotlin.reflect.KClass<any>>;
				getVisibility(): kotlin.reflect.KVisibility;
				isFinal(): boolean;
				isOpen(): boolean;
				isAbstract(): boolean;
				isSealed(): boolean;
				isData(): boolean;
				isInner(): boolean;
				isCompanion(): boolean;
				isFun(): boolean;
				equals(object0: any): boolean;
				hashCode(): number;
				getMembers(): java.util.Collection<kotlin.reflect.KCallable<any>>;
				getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
			});
			public constructor();
			public isFinal(): boolean;
			public isInner(): boolean;
			public getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
			public isFun(): boolean;
			public getObjectInstance(): T;
			public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
			public getSimpleName(): string;
			public getSupertypes(): java.util.List<kotlin.reflect.KType>;
			public isCompanion(): boolean;
			public isSealed(): boolean;
			public getNestedClasses(): java.util.Collection<kotlin.reflect.KClass<any>>;
			public getQualifiedName(): string;
			public isOpen(): boolean;
			public getSealedSubclasses(): java.util.List<kotlin.reflect.KClass<any>>;
			public equals(obj: any): boolean;
			public getVisibility(): kotlin.reflect.KVisibility;
			public getMembers(): java.util.Collection<kotlin.reflect.KCallable<any>>;
			public isInstance(object0: any): boolean;
			public isData(): boolean;
			public isAbstract(): boolean;
			public getConstructors(): java.util.Collection<kotlin.reflect.KFunction<T>>;
			public hashCode(): number;
		}
		export module KClass {
			export class DefaultImpls extends java.lang.Object {
				public static class: java.lang.Class<kotlin.reflect.KClass.DefaultImpls>;
			}
		}
	}
}

declare module kotlin {
	export module reflect {
		export class KClasses extends java.lang.Object {
			public static class: java.lang.Class<kotlin.reflect.KClasses>;
			public static safeCast(thissafeCast: kotlin.reflect.KClass<any>, value: any): any;
			public static cast(thiscast: kotlin.reflect.KClass<any>, value: any): any;
		}
	}
}

declare module kotlin {
	export module reflect {
		export class KClassesImplKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.reflect.KClassesImplKt>;
			public static getQualifiedOrSimpleName(thisqualifiedOrSimpleName: kotlin.reflect.KClass<any>): string;
		}
	}
}

declare module kotlin {
	export module reflect {
		export class KClassifier extends java.lang.Object {
			public static class: java.lang.Class<kotlin.reflect.KClassifier>;
			/**
			 * Constructs a new instance of the kotlin.reflect.KClassifier interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
			});
			public constructor();
		}
	}
}

declare module kotlin {
	export module reflect {
		export class KDeclarationContainer extends java.lang.Object {
			public static class: java.lang.Class<kotlin.reflect.KDeclarationContainer>;
			/**
			 * Constructs a new instance of the kotlin.reflect.KDeclarationContainer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getMembers(): java.util.Collection<kotlin.reflect.KCallable<any>>;
			});
			public constructor();
			public getMembers(): java.util.Collection<kotlin.reflect.KCallable<any>>;
		}
	}
}

declare module kotlin {
	export module reflect {
		export class KFunction<R>  extends java.lang.Object {
			public static class: java.lang.Class<kotlin.reflect.KFunction<any>>;
			/**
			 * Constructs a new instance of the kotlin.reflect.KFunction<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				isInline(): boolean;
				isExternal(): boolean;
				isOperator(): boolean;
				isInfix(): boolean;
				isSuspend(): boolean;
				getName(): string;
				getParameters(): java.util.List<kotlin.reflect.KParameter>;
				getReturnType(): kotlin.reflect.KType;
				getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				call(objects0: native.Array<any>): R;
				callBy(map0: java.util.Map<kotlin.reflect.KParameter,any>): R;
				getVisibility(): kotlin.reflect.KVisibility;
				isFinal(): boolean;
				isOpen(): boolean;
				isAbstract(): boolean;
				isSuspend(): boolean;
				getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
			});
			public constructor();
			public isFinal(): boolean;
			public getReturnType(): kotlin.reflect.KType;
			public getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
			public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
			public getParameters(): java.util.List<kotlin.reflect.KParameter>;
			public isSuspend(): boolean;
			public call(objects0: native.Array<any>): R;
			public isOperator(): boolean;
			public isInline(): boolean;
			public isOpen(): boolean;
			public getName(): string;
			public isInfix(): boolean;
			public getVisibility(): kotlin.reflect.KVisibility;
			public callBy(map0: java.util.Map<kotlin.reflect.KParameter,any>): R;
			public isAbstract(): boolean;
			public isExternal(): boolean;
		}
		export module KFunction {
			export class DefaultImpls extends java.lang.Object {
				public static class: java.lang.Class<kotlin.reflect.KFunction.DefaultImpls>;
			}
		}
	}
}

declare module kotlin {
	export module reflect {
		export class KMutableProperty<V>  extends kotlin.reflect.KProperty<any> {
			public static class: java.lang.Class<kotlin.reflect.KMutableProperty<any>>;
			/**
			 * Constructs a new instance of the kotlin.reflect.KMutableProperty<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getSetter(): kotlin.reflect.KMutableProperty.Setter<any>;
				isLateinit(): boolean;
				isConst(): boolean;
				getGetter(): kotlin.reflect.KProperty.Getter<any>;
				getName(): string;
				getParameters(): java.util.List<kotlin.reflect.KParameter>;
				getReturnType(): kotlin.reflect.KType;
				getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				call(objects0: native.Array<any>): any;
				callBy(map0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				getVisibility(): kotlin.reflect.KVisibility;
				isFinal(): boolean;
				isOpen(): boolean;
				isAbstract(): boolean;
				isSuspend(): boolean;
				getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
			});
			public constructor();
			public isFinal(): boolean;
			public getReturnType(): kotlin.reflect.KType;
			public getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
			public getGetter(): kotlin.reflect.KProperty.Getter<any>;
			public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
			public getParameters(): java.util.List<kotlin.reflect.KParameter>;
			public isSuspend(): boolean;
			public call(objects0: native.Array<any>): any;
			public getSetter(): kotlin.reflect.KMutableProperty.Setter<any>;
			public isLateinit(): boolean;
			public callBy(map0: java.util.Map<kotlin.reflect.KParameter,any>): any;
			public isConst(): boolean;
			public isOpen(): boolean;
			public getName(): string;
			public getVisibility(): kotlin.reflect.KVisibility;
			public isAbstract(): boolean;
		}
		export module KMutableProperty {
			export class Setter<V>  extends java.lang.Object {
				public static class: java.lang.Class<kotlin.reflect.KMutableProperty.Setter<any>>;
				/**
				 * Constructs a new instance of the kotlin.reflect.KMutableProperty() when extending the interface class.
				 */
				public constructor(implementation: {
					getProperty(): kotlin.reflect.KProperty<V>;
					isInline(): boolean;
					isExternal(): boolean;
					isOperator(): boolean;
					isInfix(): boolean;
					isSuspend(): boolean;
					getName(): string;
					getParameters(): java.util.List<kotlin.reflect.KParameter>;
					getReturnType(): kotlin.reflect.KType;
					getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
					call(objects0: native.Array<any>): any;
					callBy(map0: java.util.Map<kotlin.reflect.KParameter,any>): any;
					getVisibility(): kotlin.reflect.KVisibility;
					isFinal(): boolean;
					isOpen(): boolean;
					isAbstract(): boolean;
					isSuspend(): boolean;
					getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
				});
				public constructor();
				public getVisibility(): kotlin.reflect.KVisibility;
				public isAbstract(): boolean;
				public isInline(): boolean;
				public isFinal(): boolean;
				public getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
				public getName(): string;
				public getReturnType(): kotlin.reflect.KType;
				public isOperator(): boolean;
				public isInfix(): boolean;
				public isExternal(): boolean;
				public callBy(map0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				public call(objects0: native.Array<any>): any;
				public getProperty(): kotlin.reflect.KProperty<V>;
				public isOpen(): boolean;
				public isSuspend(): boolean;
				public getParameters(): java.util.List<kotlin.reflect.KParameter>;
			}
		}
	}
}

declare module kotlin {
	export module reflect {
		export class KMutableProperty0<V>  extends java.lang.Object {
			public static class: java.lang.Class<kotlin.reflect.KMutableProperty0<any>>;
			/**
			 * Constructs a new instance of the kotlin.reflect.KMutableProperty0<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				set(object0: V): void;
				getSetter(): kotlin.reflect.KMutableProperty0.Setter<V>;
				get(): V;
				getDelegate(): any;
				getGetter(): kotlin.reflect.KProperty0.Getter<V>;
				getSetter(): kotlin.reflect.KMutableProperty.Setter<V>;
				isLateinit(): boolean;
				isConst(): boolean;
				getGetter(): kotlin.reflect.KProperty.Getter<V>;
				invoke(): any;
				isLateinit(): boolean;
				isConst(): boolean;
				getGetter(): kotlin.reflect.KProperty.Getter<V>;
				getName(): string;
				getParameters(): java.util.List<kotlin.reflect.KParameter>;
				getReturnType(): kotlin.reflect.KType;
				getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				call(objects0: native.Array<any>): any;
				callBy(map0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				getVisibility(): kotlin.reflect.KVisibility;
				isFinal(): boolean;
				isOpen(): boolean;
				isAbstract(): boolean;
				isSuspend(): boolean;
				getName(): string;
				getParameters(): java.util.List<kotlin.reflect.KParameter>;
				getReturnType(): kotlin.reflect.KType;
				getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				call(objects0: native.Array<any>): any;
				callBy(map0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				getVisibility(): kotlin.reflect.KVisibility;
				isFinal(): boolean;
				isOpen(): boolean;
				isAbstract(): boolean;
				isSuspend(): boolean;
				getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
				getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
			});
			public constructor();
			public isFinal(): boolean;
			public getReturnType(): kotlin.reflect.KType;
			public getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
			public getGetter(): kotlin.reflect.KProperty.Getter<V>;
			public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
			public getParameters(): java.util.List<kotlin.reflect.KParameter>;
			public isSuspend(): boolean;
			public call(objects0: native.Array<any>): any;
			public isLateinit(): boolean;
			public callBy(map0: java.util.Map<kotlin.reflect.KParameter,any>): any;
			public set(object0: V): void;
			public getSetter(): kotlin.reflect.KMutableProperty0.Setter<V>;
			public getDelegate(): any;
			public getSetter(): kotlin.reflect.KMutableProperty.Setter<V>;
			public isConst(): boolean;
			public isOpen(): boolean;
			public getName(): string;
			public getVisibility(): kotlin.reflect.KVisibility;
			public isAbstract(): boolean;
			public get(): V;
			public getGetter(): kotlin.reflect.KProperty0.Getter<V>;
			public invoke(): any;
		}
		export module KMutableProperty0 {
			export class Setter<V>  extends java.lang.Object {
				public static class: java.lang.Class<kotlin.reflect.KMutableProperty0.Setter<any>>;
				/**
				 * Constructs a new instance of the kotlin.reflect.KMutableProperty0() when extending the interface class.
				 */
				public constructor(implementation: {
					invoke(object0: any): any;
					getProperty(): kotlin.reflect.KProperty<V>;
					isInline(): boolean;
					isExternal(): boolean;
					isOperator(): boolean;
					isInfix(): boolean;
					isSuspend(): boolean;
					getName(): string;
					getParameters(): java.util.List<kotlin.reflect.KParameter>;
					getReturnType(): kotlin.reflect.KType;
					getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
					call(objects0: native.Array<any>): any;
					callBy(map0: java.util.Map<kotlin.reflect.KParameter,any>): any;
					getVisibility(): kotlin.reflect.KVisibility;
					isFinal(): boolean;
					isOpen(): boolean;
					isAbstract(): boolean;
					isSuspend(): boolean;
					getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
				});
				public constructor();
				public invoke(object0: any): any;
				public getVisibility(): kotlin.reflect.KVisibility;
				public isAbstract(): boolean;
				public isInline(): boolean;
				public isFinal(): boolean;
				public getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
				public getName(): string;
				public getReturnType(): kotlin.reflect.KType;
				public isOperator(): boolean;
				public isInfix(): boolean;
				public isExternal(): boolean;
				public callBy(map0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				public call(objects0: native.Array<any>): any;
				public getProperty(): kotlin.reflect.KProperty<V>;
				public isOpen(): boolean;
				public isSuspend(): boolean;
				public getParameters(): java.util.List<kotlin.reflect.KParameter>;
			}
		}
	}
}

declare module kotlin {
	export module reflect {
		export class KMutableProperty1<T, V>  extends java.lang.Object {
			public static class: java.lang.Class<kotlin.reflect.KMutableProperty1<any,any>>;
			/**
			 * Constructs a new instance of the kotlin.reflect.KMutableProperty1<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				set(object0: T, object1: V): void;
				getSetter(): kotlin.reflect.KMutableProperty1.Setter<T,V>;
				get(object0: T): V;
				getDelegate(object0: T): any;
				getGetter(): kotlin.reflect.KProperty1.Getter<T,V>;
				getSetter(): kotlin.reflect.KMutableProperty.Setter<V>;
				isLateinit(): boolean;
				isConst(): boolean;
				getGetter(): kotlin.reflect.KProperty.Getter<V>;
				invoke(object0: any): any;
				isLateinit(): boolean;
				isConst(): boolean;
				getGetter(): kotlin.reflect.KProperty.Getter<V>;
				getName(): string;
				getParameters(): java.util.List<kotlin.reflect.KParameter>;
				getReturnType(): kotlin.reflect.KType;
				getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				call(objects0: native.Array<any>): any;
				callBy(map0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				getVisibility(): kotlin.reflect.KVisibility;
				isFinal(): boolean;
				isOpen(): boolean;
				isAbstract(): boolean;
				isSuspend(): boolean;
				getName(): string;
				getParameters(): java.util.List<kotlin.reflect.KParameter>;
				getReturnType(): kotlin.reflect.KType;
				getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				call(objects0: native.Array<any>): any;
				callBy(map0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				getVisibility(): kotlin.reflect.KVisibility;
				isFinal(): boolean;
				isOpen(): boolean;
				isAbstract(): boolean;
				isSuspend(): boolean;
				getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
				getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
			});
			public constructor();
			public get(object0: T): V;
			public isFinal(): boolean;
			public getReturnType(): kotlin.reflect.KType;
			public getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
			public getGetter(): kotlin.reflect.KProperty.Getter<V>;
			public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
			public getParameters(): java.util.List<kotlin.reflect.KParameter>;
			public isSuspend(): boolean;
			public call(objects0: native.Array<any>): any;
			public invoke(object0: any): any;
			public isLateinit(): boolean;
			public getSetter(): kotlin.reflect.KMutableProperty1.Setter<T,V>;
			public callBy(map0: java.util.Map<kotlin.reflect.KParameter,any>): any;
			public getGetter(): kotlin.reflect.KProperty1.Getter<T,V>;
			public getSetter(): kotlin.reflect.KMutableProperty.Setter<V>;
			public isConst(): boolean;
			public isOpen(): boolean;
			public getName(): string;
			public getVisibility(): kotlin.reflect.KVisibility;
			public set(object0: T, object1: V): void;
			public isAbstract(): boolean;
			public getDelegate(object0: T): any;
		}
		export module KMutableProperty1 {
			export class Setter<T, V>  extends java.lang.Object {
				public static class: java.lang.Class<kotlin.reflect.KMutableProperty1.Setter<any,any>>;
				/**
				 * Constructs a new instance of the kotlin.reflect.KMutableProperty1() when extending the interface class.
				 */
				public constructor(implementation: {
					invoke(object0: any, object1: any): any;
					getProperty(): kotlin.reflect.KProperty<V>;
					isInline(): boolean;
					isExternal(): boolean;
					isOperator(): boolean;
					isInfix(): boolean;
					isSuspend(): boolean;
					getName(): string;
					getParameters(): java.util.List<kotlin.reflect.KParameter>;
					getReturnType(): kotlin.reflect.KType;
					getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
					call(objects0: native.Array<any>): any;
					callBy(map0: java.util.Map<kotlin.reflect.KParameter,any>): any;
					getVisibility(): kotlin.reflect.KVisibility;
					isFinal(): boolean;
					isOpen(): boolean;
					isAbstract(): boolean;
					isSuspend(): boolean;
					getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
				});
				public constructor();
				public getVisibility(): kotlin.reflect.KVisibility;
				public isAbstract(): boolean;
				public isInline(): boolean;
				public invoke(object0: any, object1: any): any;
				public isFinal(): boolean;
				public getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
				public getName(): string;
				public getReturnType(): kotlin.reflect.KType;
				public isOperator(): boolean;
				public isInfix(): boolean;
				public isExternal(): boolean;
				public callBy(map0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				public call(objects0: native.Array<any>): any;
				public getProperty(): kotlin.reflect.KProperty<V>;
				public isOpen(): boolean;
				public isSuspend(): boolean;
				public getParameters(): java.util.List<kotlin.reflect.KParameter>;
			}
		}
	}
}

declare module kotlin {
	export module reflect {
		export class KMutableProperty2<D, E, V>  extends java.lang.Object {
			public static class: java.lang.Class<kotlin.reflect.KMutableProperty2<any,any,any>>;
			/**
			 * Constructs a new instance of the kotlin.reflect.KMutableProperty2<any,any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				set(object0: D, object1: E, object2: V): void;
				getSetter(): kotlin.reflect.KMutableProperty2.Setter<D,E,V>;
				get(object0: D, object1: E): V;
				getDelegate(object0: D, object1: E): any;
				getGetter(): kotlin.reflect.KProperty2.Getter<D,E,V>;
				getSetter(): kotlin.reflect.KMutableProperty.Setter<V>;
				isLateinit(): boolean;
				isConst(): boolean;
				getGetter(): kotlin.reflect.KProperty.Getter<V>;
				invoke(object0: any, object1: any): any;
				isLateinit(): boolean;
				isConst(): boolean;
				getGetter(): kotlin.reflect.KProperty.Getter<V>;
				getName(): string;
				getParameters(): java.util.List<kotlin.reflect.KParameter>;
				getReturnType(): kotlin.reflect.KType;
				getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				call(objects0: native.Array<any>): any;
				callBy(map0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				getVisibility(): kotlin.reflect.KVisibility;
				isFinal(): boolean;
				isOpen(): boolean;
				isAbstract(): boolean;
				isSuspend(): boolean;
				getName(): string;
				getParameters(): java.util.List<kotlin.reflect.KParameter>;
				getReturnType(): kotlin.reflect.KType;
				getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				call(objects0: native.Array<any>): any;
				callBy(map0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				getVisibility(): kotlin.reflect.KVisibility;
				isFinal(): boolean;
				isOpen(): boolean;
				isAbstract(): boolean;
				isSuspend(): boolean;
				getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
				getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
			});
			public constructor();
			public getDelegate(object0: D, object1: E): any;
			public isFinal(): boolean;
			public getReturnType(): kotlin.reflect.KType;
			public getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
			public getGetter(): kotlin.reflect.KProperty.Getter<V>;
			public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
			public getParameters(): java.util.List<kotlin.reflect.KParameter>;
			public isSuspend(): boolean;
			public call(objects0: native.Array<any>): any;
			public getGetter(): kotlin.reflect.KProperty2.Getter<D,E,V>;
			public isLateinit(): boolean;
			public callBy(map0: java.util.Map<kotlin.reflect.KParameter,any>): any;
			public getSetter(): kotlin.reflect.KMutableProperty.Setter<V>;
			public isConst(): boolean;
			public isOpen(): boolean;
			public getName(): string;
			public getVisibility(): kotlin.reflect.KVisibility;
			public invoke(object0: any, object1: any): any;
			public get(object0: D, object1: E): V;
			public isAbstract(): boolean;
			public set(object0: D, object1: E, object2: V): void;
			public getSetter(): kotlin.reflect.KMutableProperty2.Setter<D,E,V>;
		}
		export module KMutableProperty2 {
			export class Setter<D, E, V>  extends java.lang.Object {
				public static class: java.lang.Class<kotlin.reflect.KMutableProperty2.Setter<any,any,any>>;
				/**
				 * Constructs a new instance of the kotlin.reflect.KMutableProperty2() when extending the interface class.
				 */
				public constructor(implementation: {
					invoke(object0: any, object1: any, object2: any): any;
					getProperty(): kotlin.reflect.KProperty<V>;
					isInline(): boolean;
					isExternal(): boolean;
					isOperator(): boolean;
					isInfix(): boolean;
					isSuspend(): boolean;
					getName(): string;
					getParameters(): java.util.List<kotlin.reflect.KParameter>;
					getReturnType(): kotlin.reflect.KType;
					getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
					call(objects0: native.Array<any>): any;
					callBy(map0: java.util.Map<kotlin.reflect.KParameter,any>): any;
					getVisibility(): kotlin.reflect.KVisibility;
					isFinal(): boolean;
					isOpen(): boolean;
					isAbstract(): boolean;
					isSuspend(): boolean;
					getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
				});
				public constructor();
				public getVisibility(): kotlin.reflect.KVisibility;
				public isAbstract(): boolean;
				public isInline(): boolean;
				public isFinal(): boolean;
				public getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
				public getName(): string;
				public getReturnType(): kotlin.reflect.KType;
				public invoke(object0: any, object1: any, object2: any): any;
				public isOperator(): boolean;
				public isInfix(): boolean;
				public isExternal(): boolean;
				public callBy(map0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				public call(objects0: native.Array<any>): any;
				public getProperty(): kotlin.reflect.KProperty<V>;
				public isOpen(): boolean;
				public isSuspend(): boolean;
				public getParameters(): java.util.List<kotlin.reflect.KParameter>;
			}
		}
	}
}

declare module kotlin {
	export module reflect {
		export class KParameter extends java.lang.Object implements kotlin.reflect.KAnnotatedElement {
			public static class: java.lang.Class<kotlin.reflect.KParameter>;
			/**
			 * Constructs a new instance of the kotlin.reflect.KParameter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getIndex(): number;
				getName(): string;
				getType(): kotlin.reflect.KType;
				getKind(): kotlin.reflect.KParameter.Kind;
				isOptional(): boolean;
				isVararg(): boolean;
				getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
			});
			public constructor();
			public getIndex(): number;
			public isOptional(): boolean;
			public getType(): kotlin.reflect.KType;
			public getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
			public getName(): string;
			public getKind(): kotlin.reflect.KParameter.Kind;
			public isVararg(): boolean;
		}
		export module KParameter {
			export class DefaultImpls extends java.lang.Object {
				public static class: java.lang.Class<kotlin.reflect.KParameter.DefaultImpls>;
			}
			export class Kind {
				public static class: java.lang.Class<kotlin.reflect.KParameter.Kind>;
				public static INSTANCE: kotlin.reflect.KParameter.Kind;
				public static EXTENSION_RECEIVER: kotlin.reflect.KParameter.Kind;
				public static VALUE: kotlin.reflect.KParameter.Kind;
				public static values(): native.Array<kotlin.reflect.KParameter.Kind>;
				public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static valueOf(string0: string): kotlin.reflect.KParameter.Kind;
			}
		}
	}
}

declare module kotlin {
	export module reflect {
		export class KProperty<V>  extends kotlin.reflect.KCallable<any> {
			public static class: java.lang.Class<kotlin.reflect.KProperty<any>>;
			/**
			 * Constructs a new instance of the kotlin.reflect.KProperty<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				isLateinit(): boolean;
				isConst(): boolean;
				getGetter(): kotlin.reflect.KProperty.Getter<any>;
				getName(): string;
				getParameters(): java.util.List<kotlin.reflect.KParameter>;
				getReturnType(): kotlin.reflect.KType;
				getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				call(objects0: native.Array<any>): any;
				callBy(map0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				getVisibility(): kotlin.reflect.KVisibility;
				isFinal(): boolean;
				isOpen(): boolean;
				isAbstract(): boolean;
				isSuspend(): boolean;
				getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
			});
			public constructor();
			public isFinal(): boolean;
			public getReturnType(): kotlin.reflect.KType;
			public getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
			public getGetter(): kotlin.reflect.KProperty.Getter<any>;
			public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
			public getParameters(): java.util.List<kotlin.reflect.KParameter>;
			public isSuspend(): boolean;
			public call(objects0: native.Array<any>): any;
			public isLateinit(): boolean;
			public callBy(map0: java.util.Map<kotlin.reflect.KParameter,any>): any;
			public isConst(): boolean;
			public isOpen(): boolean;
			public getName(): string;
			public getVisibility(): kotlin.reflect.KVisibility;
			public isAbstract(): boolean;
		}
		export module KProperty {
			export class Accessor<V>  extends java.lang.Object {
				public static class: java.lang.Class<kotlin.reflect.KProperty.Accessor<any>>;
				/**
				 * Constructs a new instance of the kotlin.reflect.KProperty() when extending the interface class.
				 */
				public constructor(implementation: {
					getProperty(): kotlin.reflect.KProperty<V>;
				});
				public constructor();
				public getProperty(): kotlin.reflect.KProperty<V>;
			}
			export class DefaultImpls extends java.lang.Object {
				public static class: java.lang.Class<kotlin.reflect.KProperty.DefaultImpls>;
			}
			export class Getter<V>  extends java.lang.Object {
				public static class: java.lang.Class<kotlin.reflect.KProperty.Getter<any>>;
				/**
				 * Constructs a new instance of the kotlin.reflect.KProperty() when extending the interface class.
				 */
				public constructor(implementation: {
					getProperty(): kotlin.reflect.KProperty<V>;
					isInline(): boolean;
					isExternal(): boolean;
					isOperator(): boolean;
					isInfix(): boolean;
					isSuspend(): boolean;
					getName(): string;
					getParameters(): java.util.List<kotlin.reflect.KParameter>;
					getReturnType(): kotlin.reflect.KType;
					getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
					call(objects0: native.Array<any>): any;
					callBy(map0: java.util.Map<kotlin.reflect.KParameter,any>): any;
					getVisibility(): kotlin.reflect.KVisibility;
					isFinal(): boolean;
					isOpen(): boolean;
					isAbstract(): boolean;
					isSuspend(): boolean;
					getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
				});
				public constructor();
				public getVisibility(): kotlin.reflect.KVisibility;
				public isAbstract(): boolean;
				public isInline(): boolean;
				public isFinal(): boolean;
				public getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
				public getName(): string;
				public getReturnType(): kotlin.reflect.KType;
				public isOperator(): boolean;
				public isInfix(): boolean;
				public isExternal(): boolean;
				public callBy(map0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				public call(objects0: native.Array<any>): any;
				public getProperty(): kotlin.reflect.KProperty<V>;
				public isOpen(): boolean;
				public isSuspend(): boolean;
				public getParameters(): java.util.List<kotlin.reflect.KParameter>;
			}
		}
	}
}

declare module kotlin {
	export module reflect {
		export class KProperty0<V>  extends java.lang.Object {
			public static class: java.lang.Class<kotlin.reflect.KProperty0<any>>;
			/**
			 * Constructs a new instance of the kotlin.reflect.KProperty0<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				get(): V;
				getDelegate(): any;
				getGetter(): kotlin.reflect.KProperty0.Getter<V>;
				isLateinit(): boolean;
				isConst(): boolean;
				getGetter(): kotlin.reflect.KProperty.Getter<V>;
				invoke(): any;
				getName(): string;
				getParameters(): java.util.List<kotlin.reflect.KParameter>;
				getReturnType(): kotlin.reflect.KType;
				getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				call(objects0: native.Array<any>): any;
				callBy(map0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				getVisibility(): kotlin.reflect.KVisibility;
				isFinal(): boolean;
				isOpen(): boolean;
				isAbstract(): boolean;
				isSuspend(): boolean;
				getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
			});
			public constructor();
			public isFinal(): boolean;
			public getReturnType(): kotlin.reflect.KType;
			public getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
			public getGetter(): kotlin.reflect.KProperty.Getter<V>;
			public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
			public getParameters(): java.util.List<kotlin.reflect.KParameter>;
			public isSuspend(): boolean;
			public call(objects0: native.Array<any>): any;
			public isLateinit(): boolean;
			public callBy(map0: java.util.Map<kotlin.reflect.KParameter,any>): any;
			public getDelegate(): any;
			public isConst(): boolean;
			public isOpen(): boolean;
			public getName(): string;
			public getVisibility(): kotlin.reflect.KVisibility;
			public isAbstract(): boolean;
			public get(): V;
			public getGetter(): kotlin.reflect.KProperty0.Getter<V>;
			public invoke(): any;
		}
		export module KProperty0 {
			export class Getter<V>  extends java.lang.Object {
				public static class: java.lang.Class<kotlin.reflect.KProperty0.Getter<any>>;
				/**
				 * Constructs a new instance of the kotlin.reflect.KProperty0() when extending the interface class.
				 */
				public constructor(implementation: {
					invoke(): any;
					getProperty(): kotlin.reflect.KProperty<V>;
					isInline(): boolean;
					isExternal(): boolean;
					isOperator(): boolean;
					isInfix(): boolean;
					isSuspend(): boolean;
					getName(): string;
					getParameters(): java.util.List<kotlin.reflect.KParameter>;
					getReturnType(): kotlin.reflect.KType;
					getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
					call(objects0: native.Array<any>): any;
					callBy(map0: java.util.Map<kotlin.reflect.KParameter,any>): any;
					getVisibility(): kotlin.reflect.KVisibility;
					isFinal(): boolean;
					isOpen(): boolean;
					isAbstract(): boolean;
					isSuspend(): boolean;
					getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
				});
				public constructor();
				public getVisibility(): kotlin.reflect.KVisibility;
				public isAbstract(): boolean;
				public isInline(): boolean;
				public isFinal(): boolean;
				public getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
				public getName(): string;
				public getReturnType(): kotlin.reflect.KType;
				public isOperator(): boolean;
				public isInfix(): boolean;
				public isExternal(): boolean;
				public invoke(): any;
				public callBy(map0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				public call(objects0: native.Array<any>): any;
				public getProperty(): kotlin.reflect.KProperty<V>;
				public isOpen(): boolean;
				public isSuspend(): boolean;
				public getParameters(): java.util.List<kotlin.reflect.KParameter>;
			}
		}
	}
}

declare module kotlin {
	export module reflect {
		export class KProperty1<T, V>  extends java.lang.Object {
			public static class: java.lang.Class<kotlin.reflect.KProperty1<any,any>>;
			/**
			 * Constructs a new instance of the kotlin.reflect.KProperty1<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				get(object0: T): V;
				getDelegate(object0: T): any;
				getGetter(): kotlin.reflect.KProperty1.Getter<T,V>;
				isLateinit(): boolean;
				isConst(): boolean;
				getGetter(): kotlin.reflect.KProperty.Getter<V>;
				invoke(object0: any): any;
				getName(): string;
				getParameters(): java.util.List<kotlin.reflect.KParameter>;
				getReturnType(): kotlin.reflect.KType;
				getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				call(objects0: native.Array<any>): any;
				callBy(map0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				getVisibility(): kotlin.reflect.KVisibility;
				isFinal(): boolean;
				isOpen(): boolean;
				isAbstract(): boolean;
				isSuspend(): boolean;
				getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
			});
			public constructor();
			public get(object0: T): V;
			public isFinal(): boolean;
			public getReturnType(): kotlin.reflect.KType;
			public getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
			public getGetter(): kotlin.reflect.KProperty.Getter<V>;
			public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
			public getParameters(): java.util.List<kotlin.reflect.KParameter>;
			public isSuspend(): boolean;
			public call(objects0: native.Array<any>): any;
			public invoke(object0: any): any;
			public isLateinit(): boolean;
			public callBy(map0: java.util.Map<kotlin.reflect.KParameter,any>): any;
			public getGetter(): kotlin.reflect.KProperty1.Getter<T,V>;
			public isConst(): boolean;
			public isOpen(): boolean;
			public getName(): string;
			public getVisibility(): kotlin.reflect.KVisibility;
			public isAbstract(): boolean;
			public getDelegate(object0: T): any;
		}
		export module KProperty1 {
			export class Getter<T, V>  extends java.lang.Object {
				public static class: java.lang.Class<kotlin.reflect.KProperty1.Getter<any,any>>;
				/**
				 * Constructs a new instance of the kotlin.reflect.KProperty1() when extending the interface class.
				 */
				public constructor(implementation: {
					invoke(object0: any): any;
					getProperty(): kotlin.reflect.KProperty<V>;
					isInline(): boolean;
					isExternal(): boolean;
					isOperator(): boolean;
					isInfix(): boolean;
					isSuspend(): boolean;
					getName(): string;
					getParameters(): java.util.List<kotlin.reflect.KParameter>;
					getReturnType(): kotlin.reflect.KType;
					getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
					call(objects0: native.Array<any>): any;
					callBy(map0: java.util.Map<kotlin.reflect.KParameter,any>): any;
					getVisibility(): kotlin.reflect.KVisibility;
					isFinal(): boolean;
					isOpen(): boolean;
					isAbstract(): boolean;
					isSuspend(): boolean;
					getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
				});
				public constructor();
				public invoke(object0: any): any;
				public getVisibility(): kotlin.reflect.KVisibility;
				public isAbstract(): boolean;
				public isInline(): boolean;
				public isFinal(): boolean;
				public getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
				public getName(): string;
				public getReturnType(): kotlin.reflect.KType;
				public isOperator(): boolean;
				public isInfix(): boolean;
				public isExternal(): boolean;
				public callBy(map0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				public call(objects0: native.Array<any>): any;
				public getProperty(): kotlin.reflect.KProperty<V>;
				public isOpen(): boolean;
				public isSuspend(): boolean;
				public getParameters(): java.util.List<kotlin.reflect.KParameter>;
			}
		}
	}
}

declare module kotlin {
	export module reflect {
		export class KProperty2<D, E, V>  extends java.lang.Object {
			public static class: java.lang.Class<kotlin.reflect.KProperty2<any,any,any>>;
			/**
			 * Constructs a new instance of the kotlin.reflect.KProperty2<any,any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				get(object0: D, object1: E): V;
				getDelegate(object0: D, object1: E): any;
				getGetter(): kotlin.reflect.KProperty2.Getter<D,E,V>;
				isLateinit(): boolean;
				isConst(): boolean;
				getGetter(): kotlin.reflect.KProperty.Getter<V>;
				invoke(object0: any, object1: any): any;
				getName(): string;
				getParameters(): java.util.List<kotlin.reflect.KParameter>;
				getReturnType(): kotlin.reflect.KType;
				getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				call(objects0: native.Array<any>): any;
				callBy(map0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				getVisibility(): kotlin.reflect.KVisibility;
				isFinal(): boolean;
				isOpen(): boolean;
				isAbstract(): boolean;
				isSuspend(): boolean;
				getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
			});
			public constructor();
			public getDelegate(object0: D, object1: E): any;
			public isFinal(): boolean;
			public getReturnType(): kotlin.reflect.KType;
			public getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
			public getGetter(): kotlin.reflect.KProperty.Getter<V>;
			public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
			public getParameters(): java.util.List<kotlin.reflect.KParameter>;
			public isSuspend(): boolean;
			public call(objects0: native.Array<any>): any;
			public getGetter(): kotlin.reflect.KProperty2.Getter<D,E,V>;
			public isLateinit(): boolean;
			public callBy(map0: java.util.Map<kotlin.reflect.KParameter,any>): any;
			public isConst(): boolean;
			public isOpen(): boolean;
			public getName(): string;
			public getVisibility(): kotlin.reflect.KVisibility;
			public invoke(object0: any, object1: any): any;
			public get(object0: D, object1: E): V;
			public isAbstract(): boolean;
		}
		export module KProperty2 {
			export class Getter<D, E, V>  extends java.lang.Object {
				public static class: java.lang.Class<kotlin.reflect.KProperty2.Getter<any,any,any>>;
				/**
				 * Constructs a new instance of the kotlin.reflect.KProperty2() when extending the interface class.
				 */
				public constructor(implementation: {
					invoke(object0: any, object1: any): any;
					getProperty(): kotlin.reflect.KProperty<V>;
					isInline(): boolean;
					isExternal(): boolean;
					isOperator(): boolean;
					isInfix(): boolean;
					isSuspend(): boolean;
					getName(): string;
					getParameters(): java.util.List<kotlin.reflect.KParameter>;
					getReturnType(): kotlin.reflect.KType;
					getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
					call(objects0: native.Array<any>): any;
					callBy(map0: java.util.Map<kotlin.reflect.KParameter,any>): any;
					getVisibility(): kotlin.reflect.KVisibility;
					isFinal(): boolean;
					isOpen(): boolean;
					isAbstract(): boolean;
					isSuspend(): boolean;
					getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
				});
				public constructor();
				public getVisibility(): kotlin.reflect.KVisibility;
				public isAbstract(): boolean;
				public isInline(): boolean;
				public invoke(object0: any, object1: any): any;
				public isFinal(): boolean;
				public getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
				public getName(): string;
				public getReturnType(): kotlin.reflect.KType;
				public isOperator(): boolean;
				public isInfix(): boolean;
				public isExternal(): boolean;
				public callBy(map0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				public call(objects0: native.Array<any>): any;
				public getProperty(): kotlin.reflect.KProperty<V>;
				public isOpen(): boolean;
				public isSuspend(): boolean;
				public getParameters(): java.util.List<kotlin.reflect.KParameter>;
			}
		}
	}
}

declare module kotlin {
	export module reflect {
		export class KType extends java.lang.Object implements kotlin.reflect.KAnnotatedElement {
			public static class: java.lang.Class<kotlin.reflect.KType>;
			/**
			 * Constructs a new instance of the kotlin.reflect.KType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getClassifier(): kotlin.reflect.KClassifier;
				getArguments(): java.util.List<kotlin.reflect.KTypeProjection>;
				isMarkedNullable(): boolean;
				getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
			});
			public constructor();
			public isMarkedNullable(): boolean;
			public getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
			public getArguments(): java.util.List<kotlin.reflect.KTypeProjection>;
			public getClassifier(): kotlin.reflect.KClassifier;
		}
		export module KType {
			export class DefaultImpls extends java.lang.Object {
				public static class: java.lang.Class<kotlin.reflect.KType.DefaultImpls>;
			}
		}
	}
}

declare module kotlin {
	export module reflect {
		export class KTypeParameter extends java.lang.Object implements kotlin.reflect.KClassifier {
			public static class: java.lang.Class<kotlin.reflect.KTypeParameter>;
			/**
			 * Constructs a new instance of the kotlin.reflect.KTypeParameter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getName(): string;
				getUpperBounds(): java.util.List<kotlin.reflect.KType>;
				getVariance(): kotlin.reflect.KVariance;
				isReified(): boolean;
			});
			public constructor();
			public isReified(): boolean;
			public getName(): string;
			public getUpperBounds(): java.util.List<kotlin.reflect.KType>;
			public getVariance(): kotlin.reflect.KVariance;
		}
	}
}

declare module kotlin {
	export module reflect {
		export class KTypeProjection extends java.lang.Object {
			public static class: java.lang.Class<kotlin.reflect.KTypeProjection>;
			public static star: kotlin.reflect.KTypeProjection;
			public static Companion: kotlin.reflect.KTypeProjection.Companion;
			public getType(): kotlin.reflect.KType;
			public toString(): string;
			public copy(variance: kotlin.reflect.KVariance, type: kotlin.reflect.KType): kotlin.reflect.KTypeProjection;
			public equals(obj: any): boolean;
			public static covariant(type: kotlin.reflect.KType): kotlin.reflect.KTypeProjection;
			public constructor(variance: kotlin.reflect.KVariance, type: kotlin.reflect.KType);
			public getVariance(): kotlin.reflect.KVariance;
			public component1(): kotlin.reflect.KVariance;
			public static contravariant(type: kotlin.reflect.KType): kotlin.reflect.KTypeProjection;
			public component2(): kotlin.reflect.KType;
			public hashCode(): number;
			public static invariant(type: kotlin.reflect.KType): kotlin.reflect.KTypeProjection;
		}
		export module KTypeProjection {
			export class Companion extends java.lang.Object {
				public static class: java.lang.Class<kotlin.reflect.KTypeProjection.Companion>;
				public invariant(type: kotlin.reflect.KType): kotlin.reflect.KTypeProjection;
				public getSTAR(): kotlin.reflect.KTypeProjection;
				public covariant(type: kotlin.reflect.KType): kotlin.reflect.KTypeProjection;
				public contravariant(type: kotlin.reflect.KType): kotlin.reflect.KTypeProjection;
			}
			export class WhenMappings extends java.lang.Object {
				public static class: java.lang.Class<kotlin.reflect.KTypeProjection.WhenMappings>;
			}
		}
	}
}

declare module kotlin {
	export module reflect {
		export class KVariance {
			public static class: java.lang.Class<kotlin.reflect.KVariance>;
			public static INVARIANT: kotlin.reflect.KVariance;
			public static IN: kotlin.reflect.KVariance;
			public static OUT: kotlin.reflect.KVariance;
			public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
			public static values(): native.Array<kotlin.reflect.KVariance>;
			public static valueOf(string0: string): kotlin.reflect.KVariance;
		}
	}
}

declare module kotlin {
	export module reflect {
		export class KVisibility {
			public static class: java.lang.Class<kotlin.reflect.KVisibility>;
			public static PUBLIC: kotlin.reflect.KVisibility;
			public static PROTECTED: kotlin.reflect.KVisibility;
			public static INTERNAL: kotlin.reflect.KVisibility;
			public static PRIVATE: kotlin.reflect.KVisibility;
			public static valueOf(string0: string): kotlin.reflect.KVisibility;
			public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
			public static values(): native.Array<kotlin.reflect.KVisibility>;
		}
	}
}

declare module kotlin {
	export module reflect {
		export class ParameterizedTypeImpl extends java.lang.Object implements java.lang.reflect.ParameterizedType, kotlin.reflect.TypeImpl {
			public static class: java.lang.Class<kotlin.reflect.ParameterizedTypeImpl>;
			public getRawType(): java.lang.reflect.Type;
			public equals(other: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public getOwnerType(): java.lang.reflect.Type;
			public getTypeName(): string;
			public constructor(rawType: java.lang.Class<any>, ownerType: java.lang.reflect.Type, typeArguments: java.util.List<any>);
			public getActualTypeArguments(): native.Array<java.lang.reflect.Type>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module reflect {
		export class TypeImpl extends java.lang.Object implements java.lang.reflect.Type {
			public static class: java.lang.Class<kotlin.reflect.TypeImpl>;
			/**
			 * Constructs a new instance of the kotlin.reflect.TypeImpl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getTypeName(): string;
				getTypeName(): string;
			});
			public constructor();
			public getTypeName(): string;
		}
	}
}

declare module kotlin {
	export module reflect {
		export class TypeOfKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.reflect.TypeOfKt>;
		}
	}
}

declare module kotlin {
	export module reflect {
		export class TypeVariableImpl extends java.lang.Object {
			public static class: java.lang.Class<kotlin.reflect.TypeVariableImpl>;
			public getGenericDeclaration(): any;
			public getDeclaredAnnotations(): native.Array<java.lang.annotation.Annotation>;
			public getBounds(): native.Array<java.lang.reflect.Type>;
			public getTypeName(): string;
			public constructor(typeParameter: kotlin.reflect.KTypeParameter);
			public getAnnotatedBounds(): native.Array<java.lang.annotation.Annotation>;
			public equals(other: any): boolean;
			public toString(): string;
			public getName(): string;
			public equals(obj: any): boolean;
			public getGenericDeclaration(): java.lang.reflect.GenericDeclaration;
			public getAnnotations(): native.Array<java.lang.annotation.Annotation>;
			public getAnnotation(annotationClass: java.lang.Class<any>): java.lang.annotation.Annotation;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module reflect {
		export class TypesJVMKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.reflect.TypesJVMKt>;
			public static getJavaType(thisjavaType: kotlin.reflect.KType): java.lang.reflect.Type;
		}
		export module TypesJVMKt {
			export class WhenMappings extends java.lang.Object {
				public static class: java.lang.Class<kotlin.reflect.TypesJVMKt.WhenMappings>;
			}
		}
	}
}

declare module kotlin {
	export module reflect {
		export class WildcardTypeImpl extends java.lang.Object implements java.lang.reflect.WildcardType, kotlin.reflect.TypeImpl {
			public static class: java.lang.Class<kotlin.reflect.WildcardTypeImpl>;
			public static Companion: kotlin.reflect.WildcardTypeImpl.Companion;
			public equals(other: any): boolean;
			public getUpperBounds(): native.Array<java.lang.reflect.Type>;
			public toString(): string;
			public equals(obj: any): boolean;
			public getTypeName(): string;
			public constructor(upperBound: java.lang.reflect.Type, lowerBound: java.lang.reflect.Type);
			public getLowerBounds(): native.Array<java.lang.reflect.Type>;
			public hashCode(): number;
		}
		export module WildcardTypeImpl {
			export class Companion extends java.lang.Object {
				public static class: java.lang.Class<kotlin.reflect.WildcardTypeImpl.Companion>;
				public getSTAR(): kotlin.reflect.WildcardTypeImpl;
			}
		}
	}
}

declare module kotlin {
	export module sequences {
		export class ConstrainedOnceSequence<T>  extends kotlin.sequences.Sequence<any> {
			public static class: java.lang.Class<kotlin.sequences.ConstrainedOnceSequence<any>>;
			public constructor(sequence: kotlin.sequences.Sequence<any>);
			public iterator(): java.util.Iterator<any>;
		}
	}
}

declare module kotlin {
	export module sequences {
		export class DistinctIterator<T, K>  extends kotlin.collections.AbstractIterator<any> {
			public static class: java.lang.Class<kotlin.sequences.DistinctIterator<any,any>>;
			public constructor(source: java.util.Iterator<any>, keySelector: kotlin.jvm.functions.Function1<any,any>);
			public constructor();
			public computeNext(): void;
		}
	}
}

declare module kotlin {
	export module sequences {
		export class DistinctSequence<T, K>  extends kotlin.sequences.Sequence<any> {
			public static class: java.lang.Class<kotlin.sequences.DistinctSequence<any,any>>;
			public constructor(source: kotlin.sequences.Sequence<any>, keySelector: kotlin.jvm.functions.Function1<any,any>);
			public iterator(): java.util.Iterator<any>;
		}
	}
}

declare module kotlin {
	export module sequences {
		export class DropSequence<T>  extends java.lang.Object {
			public static class: java.lang.Class<kotlin.sequences.DropSequence<any>>;
			public drop(n: number): kotlin.sequences.Sequence<T>;
			public take(n: number): kotlin.sequences.Sequence<T>;
			public iterator(): java.util.Iterator<T>;
			public constructor(sequence: kotlin.sequences.Sequence<any>, count: number);
		}
	}
}

declare module kotlin {
	export module sequences {
		export class DropTakeSequence<T>  extends kotlin.sequences.Sequence<any> {
			public static class: java.lang.Class<kotlin.sequences.DropTakeSequence<any>>;
			/**
			 * Constructs a new instance of the kotlin.sequences.DropTakeSequence<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				drop(int0: number): kotlin.sequences.Sequence<any>;
				take(int0: number): kotlin.sequences.Sequence<any>;
				iterator(): java.util.Iterator<any>;
			});
			public constructor();
			public take(int0: number): kotlin.sequences.Sequence<any>;
			public drop(int0: number): kotlin.sequences.Sequence<any>;
			public iterator(): java.util.Iterator<any>;
		}
	}
}

declare module kotlin {
	export module sequences {
		export class DropWhileSequence<T>  extends kotlin.sequences.Sequence<any> {
			public static class: java.lang.Class<kotlin.sequences.DropWhileSequence<any>>;
			public constructor(sequence: kotlin.sequences.Sequence<any>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>);
			public iterator(): java.util.Iterator<any>;
		}
	}
}

declare module kotlin {
	export module sequences {
		export class EmptySequence extends java.lang.Object implements kotlin.sequences.Sequence<any>, kotlin.sequences.DropTakeSequence<any> {
			public static class: java.lang.Class<kotlin.sequences.EmptySequence>;
			public static INSTANCE: kotlin.sequences.EmptySequence;
			public drop(n: number): kotlin.sequences.EmptySequence;
			public take(n: number): kotlin.sequences.EmptySequence;
			public take(int0: number): kotlin.sequences.Sequence<any>;
			public drop(int0: number): kotlin.sequences.Sequence<any>;
			public iterator(): java.util.Iterator<any>;
			public iterator(): java.util.Iterator<any>;
		}
	}
}

declare module kotlin {
	export module sequences {
		export class FilteringSequence<T>  extends kotlin.sequences.Sequence<any> {
			public static class: java.lang.Class<kotlin.sequences.FilteringSequence<any>>;
			public constructor(sequence: kotlin.sequences.Sequence<any>, sendWhen: boolean, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>);
			public iterator(): java.util.Iterator<any>;
		}
	}
}

declare module kotlin {
	export module sequences {
		export class FlatteningSequence<T, R, E>  extends kotlin.sequences.Sequence<any> {
			public static class: java.lang.Class<kotlin.sequences.FlatteningSequence<any,any,any>>;
			public constructor(sequence: kotlin.sequences.Sequence<any>, transformer: kotlin.jvm.functions.Function1<any,any>, iterator: kotlin.jvm.functions.Function1<any,any>);
			public iterator(): java.util.Iterator<any>;
		}
	}
}

declare module kotlin {
	export module sequences {
		export class GeneratorSequence<T>  extends kotlin.sequences.Sequence<any> {
			public static class: java.lang.Class<kotlin.sequences.GeneratorSequence<any>>;
			public constructor(getInitialValue: kotlin.jvm.functions.Function0<any>, getNextValue: kotlin.jvm.functions.Function1<any,any>);
			public iterator(): java.util.Iterator<any>;
		}
	}
}

declare module kotlin {
	export module sequences {
		export class IndexingSequence<T>  extends kotlin.sequences.Sequence<kotlin.collections.IndexedValue<any>> {
			public static class: java.lang.Class<kotlin.sequences.IndexingSequence<any>>;
			public constructor(sequence: kotlin.sequences.Sequence<any>);
			public iterator(): java.util.Iterator<kotlin.collections.IndexedValue<any>>;
			public iterator(): java.util.Iterator<any>;
		}
	}
}

declare module kotlin {
	export module sequences {
		export class MergingSequence<T1, T2, V>  extends kotlin.sequences.Sequence<any> {
			public static class: java.lang.Class<kotlin.sequences.MergingSequence<any,any,any>>;
			public constructor(sequence1: kotlin.sequences.Sequence<any>, sequence2: kotlin.sequences.Sequence<any>, transform: kotlin.jvm.functions.Function2<any,any,any>);
			public iterator(): java.util.Iterator<any>;
		}
	}
}

declare module kotlin {
	export module sequences {
		export class Sequence<T>  extends java.lang.Object {
			public static class: java.lang.Class<kotlin.sequences.Sequence<any>>;
			/**
			 * Constructs a new instance of the kotlin.sequences.Sequence<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				iterator(): java.util.Iterator<T>;
			});
			public constructor();
			public iterator(): java.util.Iterator<T>;
		}
	}
}

declare module kotlin {
	export module sequences {
		export class SequenceBuilderIterator<T>  extends kotlin.sequences.SequenceScope<any> {
			public static class: java.lang.Class<kotlin.sequences.SequenceBuilderIterator<any>>;
			public getContext(): kotlin.coroutines.CoroutineContext;
			public yieldAll(iterator0: java.util.Iterator<any>, continuation1: kotlin.coroutines.Continuation<any>): any;
			public yieldAll(iterator: java.util.Iterator<any>, completion: kotlin.coroutines.Continuation<any>): any;
			public getNextStep(): kotlin.coroutines.Continuation<kotlin.Unit>;
			public yield(object0: any, continuation1: kotlin.coroutines.Continuation<any>): any;
			public constructor();
			public hasNext(): boolean;
			public resumeWith(result: any): void;
			public remove(): void;
			public next(): any;
			public setNextStep(param0: kotlin.coroutines.Continuation<any>): void;
			public yieldAll(sequence: kotlin.sequences.Sequence<any>, completion: kotlin.coroutines.Continuation<any>): any;
			public yield(value: any, completion: kotlin.coroutines.Continuation<any>): any;
			public yieldAll(elements: java.lang.Iterable<any>, completion: kotlin.coroutines.Continuation<any>): any;
		}
	}
}

declare module kotlin {
	export module sequences {
		export abstract class SequenceScope<T>  extends java.lang.Object {
			public static class: java.lang.Class<kotlin.sequences.SequenceScope<any>>;
			public yieldAll(iterator0: java.util.Iterator<any>, continuation1: kotlin.coroutines.Continuation<any>): any;
			public yield(object0: T, continuation1: kotlin.coroutines.Continuation<any>): any;
			public yieldAll(sequence: kotlin.sequences.Sequence<any>, completion: kotlin.coroutines.Continuation<any>): any;
			public constructor();
			public yieldAll(elements: java.lang.Iterable<any>, completion: kotlin.coroutines.Continuation<any>): any;
		}
	}
}

declare module kotlin {
	export module sequences {
		export class SequencesKt extends kotlin.sequences.SequencesKt___SequencesKt {
			public static class: java.lang.Class<kotlin.sequences.SequencesKt>;
		}
	}
}

declare module kotlin {
	export module sequences {
		export class SequencesKt__SequenceBuilderKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.sequences.SequencesKt__SequenceBuilderKt>;
			public static sequence(block: kotlin.jvm.functions.Function2<any,any,any>): kotlin.sequences.Sequence<any>;
			public static iterator(block: kotlin.jvm.functions.Function2<any,any,any>): java.util.Iterator<any>;
			public constructor();
		}
	}
}

declare module kotlin {
	export module sequences {
		export class SequencesKt__SequencesJVMKt extends kotlin.sequences.SequencesKt__SequenceBuilderKt {
			public static class: java.lang.Class<kotlin.sequences.SequencesKt__SequencesJVMKt>;
			public constructor();
		}
	}
}

declare module kotlin {
	export module sequences {
		export class SequencesKt__SequencesKt extends kotlin.sequences.SequencesKt__SequencesJVMKt {
			public static class: java.lang.Class<kotlin.sequences.SequencesKt__SequencesKt>;
			public static generateSequence(nextFunction: kotlin.jvm.functions.Function0<any>): kotlin.sequences.Sequence<any>;
			public static emptySequence(): kotlin.sequences.Sequence<any>;
			public static unzip(thisunzip: kotlin.sequences.Sequence<any>): kotlin.Pair<any,any>;
			public static generateSequence(seedFunction: kotlin.jvm.functions.Function0<any>, nextFunction: kotlin.jvm.functions.Function1<any,any>): kotlin.sequences.Sequence<any>;
			public constructor();
			public static sequenceOf(elements: native.Array<any>): kotlin.sequences.Sequence<any>;
			public static shuffled(thisshuffled: kotlin.sequences.Sequence<any>, random: kotlin.random.Random): kotlin.sequences.Sequence<any>;
			public static ifEmpty(thisifEmpty: kotlin.sequences.Sequence<any>, defaultValue: kotlin.jvm.functions.Function0<any>): kotlin.sequences.Sequence<any>;
			public static constrainOnce(thisconstrainOnce: kotlin.sequences.Sequence<any>): kotlin.sequences.Sequence<any>;
			public static flatMapIndexed(source: kotlin.sequences.Sequence<any>, transform: kotlin.jvm.functions.Function2<any,any,any>, iterator: kotlin.jvm.functions.Function1<any,any>): kotlin.sequences.Sequence<any>;
			public static asSequence(thisasSequence: java.util.Iterator<any>): kotlin.sequences.Sequence<any>;
			public static flatten(thisflatten: kotlin.sequences.Sequence<any>): kotlin.sequences.Sequence<any>;
			public static flattenSequenceOfIterable(thisflatten: kotlin.sequences.Sequence<any>): kotlin.sequences.Sequence<any>;
			public static generateSequence(seed: any, nextFunction: kotlin.jvm.functions.Function1<any,any>): kotlin.sequences.Sequence<any>;
			public static shuffled(thisshuffled: kotlin.sequences.Sequence<any>): kotlin.sequences.Sequence<any>;
		}
	}
}

declare module kotlin {
	export module sequences {
		export class SequencesKt___SequencesJvmKt extends kotlin.sequences.SequencesKt__SequencesKt {
			public static class: java.lang.Class<kotlin.sequences.SequencesKt___SequencesJvmKt>;
			public static toSortedSet(thistoSortedSet: kotlin.sequences.Sequence<any>): java.util.SortedSet<any>;
			public static filterIsInstanceTo(thisfilterIsInstanceTo: kotlin.sequences.Sequence<any>, destination: java.util.Collection<any>, klass: java.lang.Class<any>): java.util.Collection<any>;
			public constructor();
			public static filterIsInstance(thisfilterIsInstance: kotlin.sequences.Sequence<any>, klass: java.lang.Class<any>): kotlin.sequences.Sequence<any>;
			public static toSortedSet(thistoSortedSet: kotlin.sequences.Sequence<any>, comparator: java.util.Comparator<any>): java.util.SortedSet<any>;
		}
	}
}

declare module kotlin {
	export module sequences {
		export class SequencesKt___SequencesKt extends kotlin.sequences.SequencesKt___SequencesJvmKt {
			public static class: java.lang.Class<kotlin.sequences.SequencesKt___SequencesKt>;
			public static filterNotNullTo(thisfilterNotNullTo: kotlin.sequences.Sequence<any>, destination: java.util.Collection<any>): java.util.Collection<any>;
			public static maxOrNull(thismaxOrNull: kotlin.sequences.Sequence<java.lang.Double>): java.lang.Double;
			public static flatMapIndexedSequence(thisflatMapIndexed: kotlin.sequences.Sequence<any>, transform: kotlin.jvm.functions.Function2<any,any,any>): kotlin.sequences.Sequence<any>;
			public static elementAt(thiselementAt: kotlin.sequences.Sequence<any>, index: number): any;
			/** @deprecated */
			public static maxWith(thismaxWith: kotlin.sequences.Sequence<any>, comparator: java.util.Comparator<any>): any;
			public static minus(thisminus: kotlin.sequences.Sequence<any>, elements: native.Array<any>): kotlin.sequences.Sequence<any>;
			public static flatMapTo(thisflatMapTo: kotlin.sequences.Sequence<any>, destination: java.util.Collection<any>, transform: kotlin.jvm.functions.Function1<any,any>): java.util.Collection<any>;
			/** @deprecated */
			public static minWith(thisminWith: kotlin.sequences.Sequence<any>, comparator: java.util.Comparator<any>): any;
			public static associateBy(thisassociateBy: kotlin.sequences.Sequence<any>, keySelector: kotlin.jvm.functions.Function1<any,any>, valueTransform: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			public static zipWithNext(thiszipWithNext: kotlin.sequences.Sequence<any>, transform: kotlin.jvm.functions.Function2<any,any,any>): kotlin.sequences.Sequence<any>;
			public static sumOfInt(thissum: kotlin.sequences.Sequence<java.lang.Integer>): number;
			public static groupBy(thisgroupBy: kotlin.sequences.Sequence<any>, keySelector: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			public static elementAtOrNull(thiselementAtOrNull: kotlin.sequences.Sequence<any>, index: number): any;
			/** @deprecated */
			public static max(thismax: kotlin.sequences.Sequence<any>): java.lang.Comparable<any>;
			public static toList(thistoList: kotlin.sequences.Sequence<any>): java.util.List<any>;
			public static minOrNull(thisminOrNull: kotlin.sequences.Sequence<any>): java.lang.Comparable<any>;
			public static filterNotNull(thisfilterNotNull: kotlin.sequences.Sequence<any>): kotlin.sequences.Sequence<any>;
			public static reduceIndexed(thisreduceIndexed: kotlin.sequences.Sequence<any>, operation: kotlin.jvm.functions.Function3<any,any,any,any>): any;
			public static mapTo(thismapTo: kotlin.sequences.Sequence<any>, destination: java.util.Collection<any>, transform: kotlin.jvm.functions.Function1<any,any>): java.util.Collection<any>;
			public static onEachIndexed(thisonEachIndexed: kotlin.sequences.Sequence<any>, action: kotlin.jvm.functions.Function2<any,any,any>): kotlin.sequences.Sequence<any>;
			public static partition(thispartition: kotlin.sequences.Sequence<any>, predicate: kotlin.jvm.functions.Function1<any,any>): kotlin.Pair<any,any>;
			public static zip(thiszip: kotlin.sequences.Sequence<any>, other: kotlin.sequences.Sequence<any>, transform: kotlin.jvm.functions.Function2<any,any,any>): kotlin.sequences.Sequence<any>;
			public static groupByTo(thisgroupByTo: kotlin.sequences.Sequence<any>, destination: java.util.Map<any,any>, keySelector: kotlin.jvm.functions.Function1<any,any>, valueTransform: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			public static withIndex(thiswithIndex: kotlin.sequences.Sequence<any>): kotlin.sequences.Sequence<any>;
			public static groupBy(thisgroupBy: kotlin.sequences.Sequence<any>, keySelector: kotlin.jvm.functions.Function1<any,any>, valueTransform: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			public static filterNot(thisfilterNot: kotlin.sequences.Sequence<any>, predicate: kotlin.jvm.functions.Function1<any,any>): kotlin.sequences.Sequence<any>;
			public static averageOfFloat(thisaverage: kotlin.sequences.Sequence<java.lang.Float>): number;
			public static take(thistake: kotlin.sequences.Sequence<any>, n: number): kotlin.sequences.Sequence<any>;
			/** @deprecated */
			public static min(thismin: kotlin.sequences.Sequence<java.lang.Double>): java.lang.Double;
			/** @deprecated */
			public static minBy(thisminBy: kotlin.sequences.Sequence<any>, selector: kotlin.jvm.functions.Function1<any,any>): any;
			public constructor();
			public static indexOf(thisindexOf: kotlin.sequences.Sequence<any>, element: any): number;
			public static mapNotNull(thismapNotNull: kotlin.sequences.Sequence<any>, transform: kotlin.jvm.functions.Function1<any,any>): kotlin.sequences.Sequence<any>;
			public static forEachIndexed(thisforEachIndexed: kotlin.sequences.Sequence<any>, action: kotlin.jvm.functions.Function2<any,any,any>): void;
			public static minus(thisminus: kotlin.sequences.Sequence<any>, element: any): kotlin.sequences.Sequence<any>;
			public static forEach(thisforEach: kotlin.sequences.Sequence<any>, action: kotlin.jvm.functions.Function1<any,any>): void;
			public static runningReduceIndexed(thisrunningReduceIndexed: kotlin.sequences.Sequence<any>, operation: kotlin.jvm.functions.Function3<any,any,any,any>): kotlin.sequences.Sequence<any>;
			/** @deprecated */
			public static max(thismax: kotlin.sequences.Sequence<java.lang.Float>): java.lang.Float;
			public static mapIndexedNotNull(thismapIndexedNotNull: kotlin.sequences.Sequence<any>, transform: kotlin.jvm.functions.Function2<any,any,any>): kotlin.sequences.Sequence<any>;
			public static associateByTo(thisassociateByTo: kotlin.sequences.Sequence<any>, destination: java.util.Map<any,any>, keySelector: kotlin.jvm.functions.Function1<any,any>, valueTransform: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			public static map(thismap: kotlin.sequences.Sequence<any>, transform: kotlin.jvm.functions.Function1<any,any>): kotlin.sequences.Sequence<any>;
			public static count(thiscount: kotlin.sequences.Sequence<any>): number;
			public static reduceIndexedOrNull(thisreduceIndexedOrNull: kotlin.sequences.Sequence<any>, operation: kotlin.jvm.functions.Function3<any,any,any,any>): any;
			public static runningFold(thisrunningFold: kotlin.sequences.Sequence<any>, initial: any, operation: kotlin.jvm.functions.Function2<any,any,any>): kotlin.sequences.Sequence<any>;
			public static minOrNull(thisminOrNull: kotlin.sequences.Sequence<java.lang.Float>): java.lang.Float;
			public static windowed(thiswindowed: kotlin.sequences.Sequence<any>, size: number, step: number, partialWindows: boolean, transform: kotlin.jvm.functions.Function1<any,any>): kotlin.sequences.Sequence<any>;
			public static minByOrNull(thisminByOrNull: kotlin.sequences.Sequence<any>, selector: kotlin.jvm.functions.Function1<any,any>): any;
			public static joinTo(thisjoinTo: kotlin.sequences.Sequence<any>, buffer: java.lang.Appendable, separator: string, prefix: string, postfix: string, limit: number, truncated: string, transform: kotlin.jvm.functions.Function1<any,any>): java.lang.Appendable;
			public static associateByTo(thisassociateByTo: kotlin.sequences.Sequence<any>, destination: java.util.Map<any,any>, keySelector: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			public static toCollection(thistoCollection: kotlin.sequences.Sequence<any>, destination: java.util.Collection<any>): java.util.Collection<any>;
			public static sortedBy(thissortedBy: kotlin.sequences.Sequence<any>, selector: kotlin.jvm.functions.Function1<any,any>): kotlin.sequences.Sequence<any>;
			public static toMutableSet(thistoMutableSet: kotlin.sequences.Sequence<any>): java.util.Set<any>;
			public static sumBy(thissumBy: kotlin.sequences.Sequence<any>, selector: kotlin.jvm.functions.Function1<any,any>): number;
			public static lastOrNull(thislastOrNull: kotlin.sequences.Sequence<any>): any;
			/** @deprecated */
			public static scanReduceIndexed(thisscanReduceIndexed: kotlin.sequences.Sequence<any>, operation: kotlin.jvm.functions.Function3<any,any,any,any>): kotlin.sequences.Sequence<any>;
			public static flatMapIterableTo(thisflatMapTo: kotlin.sequences.Sequence<any>, destination: java.util.Collection<any>, transform: kotlin.jvm.functions.Function1<any,any>): java.util.Collection<any>;
			public static minus(thisminus: kotlin.sequences.Sequence<any>, elements: kotlin.sequences.Sequence<any>): kotlin.sequences.Sequence<any>;
			public static averageOfByte(thisaverage: kotlin.sequences.Sequence<java.lang.Byte>): number;
			public static distinct(thisdistinct: kotlin.sequences.Sequence<any>): kotlin.sequences.Sequence<any>;
			public static single(thissingle: kotlin.sequences.Sequence<any>, predicate: kotlin.jvm.functions.Function1<any,any>): any;
			public static indexOfFirst(thisindexOfFirst: kotlin.sequences.Sequence<any>, predicate: kotlin.jvm.functions.Function1<any,any>): number;
			public static lastOrNull(thislastOrNull: kotlin.sequences.Sequence<any>, predicate: kotlin.jvm.functions.Function1<any,any>): any;
			public static any(thisany: kotlin.sequences.Sequence<any>): boolean;
			public static maxOrNull(thismaxOrNull: kotlin.sequences.Sequence<java.lang.Float>): java.lang.Float;
			public static indexOfLast(thisindexOfLast: kotlin.sequences.Sequence<any>, predicate: kotlin.jvm.functions.Function1<any,any>): number;
			public static averageOfInt(thisaverage: kotlin.sequences.Sequence<java.lang.Integer>): number;
			public static sumByDouble(thissumByDouble: kotlin.sequences.Sequence<any>, selector: kotlin.jvm.functions.Function1<any,any>): number;
			public static filter(thisfilter: kotlin.sequences.Sequence<any>, predicate: kotlin.jvm.functions.Function1<any,any>): kotlin.sequences.Sequence<any>;
			/** @deprecated */
			public static scanReduce(thisscanReduce: kotlin.sequences.Sequence<any>, operation: kotlin.jvm.functions.Function2<any,any,any>): kotlin.sequences.Sequence<any>;
			public static associateWith(thisassociateWith: kotlin.sequences.Sequence<any>, valueSelector: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			public static fold(thisfold: kotlin.sequences.Sequence<any>, initial: any, operation: kotlin.jvm.functions.Function2<any,any,any>): any;
			/** @deprecated */
			public static max(thismax: kotlin.sequences.Sequence<java.lang.Double>): java.lang.Double;
			public static scan(thisscan: kotlin.sequences.Sequence<any>, initial: any, operation: kotlin.jvm.functions.Function2<any,any,any>): kotlin.sequences.Sequence<any>;
			/** @deprecated */
			public static min(thismin: kotlin.sequences.Sequence<java.lang.Float>): java.lang.Float;
			public static asIterable(thisasIterable: kotlin.sequences.Sequence<any>): java.lang.Iterable<any>;
			public static takeWhile(thistakeWhile: kotlin.sequences.Sequence<any>, predicate: kotlin.jvm.functions.Function1<any,any>): kotlin.sequences.Sequence<any>;
			public static averageOfLong(thisaverage: kotlin.sequences.Sequence<java.lang.Long>): number;
			public static groupByTo(thisgroupByTo: kotlin.sequences.Sequence<any>, destination: java.util.Map<any,any>, keySelector: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			public static sorted(thissorted: kotlin.sequences.Sequence<any>): kotlin.sequences.Sequence<any>;
			public static requireNoNulls(thisrequireNoNulls: kotlin.sequences.Sequence<any>): kotlin.sequences.Sequence<any>;
			public static contains(thiscontains: kotlin.sequences.Sequence<any>, element: any): boolean;
			public static mapIndexedTo(thismapIndexedTo: kotlin.sequences.Sequence<any>, destination: java.util.Collection<any>, transform: kotlin.jvm.functions.Function2<any,any,any>): java.util.Collection<any>;
			public static maxByOrNull(thismaxByOrNull: kotlin.sequences.Sequence<any>, selector: kotlin.jvm.functions.Function1<any,any>): any;
			public static runningReduce(thisrunningReduce: kotlin.sequences.Sequence<any>, operation: kotlin.jvm.functions.Function2<any,any,any>): kotlin.sequences.Sequence<any>;
			public static reduceOrNull(thisreduceOrNull: kotlin.sequences.Sequence<any>, operation: kotlin.jvm.functions.Function2<any,any,any>): any;
			public static foldIndexed(thisfoldIndexed: kotlin.sequences.Sequence<any>, initial: any, operation: kotlin.jvm.functions.Function3<any,any,any,any>): any;
			public static sortedWith(thissortedWith: kotlin.sequences.Sequence<any>, comparator: java.util.Comparator<any>): kotlin.sequences.Sequence<any>;
			public static toMutableList(thistoMutableList: kotlin.sequences.Sequence<any>): java.util.List<any>;
			public static none(thisnone: kotlin.sequences.Sequence<any>, predicate: kotlin.jvm.functions.Function1<any,any>): boolean;
			public static singleOrNull(thissingleOrNull: kotlin.sequences.Sequence<any>, predicate: kotlin.jvm.functions.Function1<any,any>): any;
			public static chunked(thischunked: kotlin.sequences.Sequence<any>, size: number): kotlin.sequences.Sequence<any>;
			public static plus(thisplus: kotlin.sequences.Sequence<any>, element: any): kotlin.sequences.Sequence<any>;
			public static toHashSet(thistoHashSet: kotlin.sequences.Sequence<any>): java.util.HashSet<any>;
			public static any(thisany: kotlin.sequences.Sequence<any>, predicate: kotlin.jvm.functions.Function1<any,any>): boolean;
			public static toSet(thistoSet: kotlin.sequences.Sequence<any>): java.util.Set<any>;
			public static plus(thisplus: kotlin.sequences.Sequence<any>, elements: java.lang.Iterable<any>): kotlin.sequences.Sequence<any>;
			public static chunked(thischunked: kotlin.sequences.Sequence<any>, size: number, transform: kotlin.jvm.functions.Function1<any,any>): kotlin.sequences.Sequence<any>;
			public static sumOfLong(thissum: kotlin.sequences.Sequence<java.lang.Long>): number;
			public static sortedDescending(thissortedDescending: kotlin.sequences.Sequence<any>): kotlin.sequences.Sequence<any>;
			public static runningFoldIndexed(thisrunningFoldIndexed: kotlin.sequences.Sequence<any>, initial: any, operation: kotlin.jvm.functions.Function3<any,any,any,any>): kotlin.sequences.Sequence<any>;
			public static mapIndexed(thismapIndexed: kotlin.sequences.Sequence<any>, transform: kotlin.jvm.functions.Function2<any,any,any>): kotlin.sequences.Sequence<any>;
			public static lastIndexOf(thislastIndexOf: kotlin.sequences.Sequence<any>, element: any): number;
			public static sumOfShort(thissum: kotlin.sequences.Sequence<java.lang.Short>): number;
			public static sumOfDouble(thissum: kotlin.sequences.Sequence<java.lang.Double>): number;
			public static minus(thisminus: kotlin.sequences.Sequence<any>, elements: java.lang.Iterable<any>): kotlin.sequences.Sequence<any>;
			public static plus(thisplus: kotlin.sequences.Sequence<any>, elements: native.Array<any>): kotlin.sequences.Sequence<any>;
			public static associate(thisassociate: kotlin.sequences.Sequence<any>, transform: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			public static mapIndexedNotNullTo(thismapIndexedNotNullTo: kotlin.sequences.Sequence<any>, destination: java.util.Collection<any>, transform: kotlin.jvm.functions.Function2<any,any,any>): java.util.Collection<any>;
			public static mapNotNullTo(thismapNotNullTo: kotlin.sequences.Sequence<any>, destination: java.util.Collection<any>, transform: kotlin.jvm.functions.Function1<any,any>): java.util.Collection<any>;
			public static reduce(thisreduce: kotlin.sequences.Sequence<any>, operation: kotlin.jvm.functions.Function2<any,any,any>): any;
			public static maxWithOrNull(thismaxWithOrNull: kotlin.sequences.Sequence<any>, comparator: java.util.Comparator<any>): any;
			public static scanIndexed(thisscanIndexed: kotlin.sequences.Sequence<any>, initial: any, operation: kotlin.jvm.functions.Function3<any,any,any,any>): kotlin.sequences.Sequence<any>;
			public static distinctBy(thisdistinctBy: kotlin.sequences.Sequence<any>, selector: kotlin.jvm.functions.Function1<any,any>): kotlin.sequences.Sequence<any>;
			public static filterIndexedTo(thisfilterIndexedTo: kotlin.sequences.Sequence<any>, destination: java.util.Collection<any>, predicate: kotlin.jvm.functions.Function2<any,any,any>): java.util.Collection<any>;
			public static none(thisnone: kotlin.sequences.Sequence<any>): boolean;
			public static associateBy(thisassociateBy: kotlin.sequences.Sequence<any>, keySelector: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			public static zipWithNext(thiszipWithNext: kotlin.sequences.Sequence<any>): kotlin.sequences.Sequence<any>;
			public static filterTo(thisfilterTo: kotlin.sequences.Sequence<any>, destination: java.util.Collection<any>, predicate: kotlin.jvm.functions.Function1<any,any>): java.util.Collection<any>;
			public static associateTo(thisassociateTo: kotlin.sequences.Sequence<any>, destination: java.util.Map<any,any>, transform: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			public static averageOfDouble(thisaverage: kotlin.sequences.Sequence<java.lang.Double>): number;
			public static firstOrNull(thisfirstOrNull: kotlin.sequences.Sequence<any>, predicate: kotlin.jvm.functions.Function1<any,any>): any;
			public static singleOrNull(thissingleOrNull: kotlin.sequences.Sequence<any>): any;
			public static plus(thisplus: kotlin.sequences.Sequence<any>, elements: kotlin.sequences.Sequence<any>): kotlin.sequences.Sequence<any>;
			public static first(thisfirst: kotlin.sequences.Sequence<any>, predicate: kotlin.jvm.functions.Function1<any,any>): any;
			public static joinToString(thisjoinToString: kotlin.sequences.Sequence<any>, separator: string, prefix: string, postfix: string, limit: number, truncated: string, transform: kotlin.jvm.functions.Function1<any,any>): string;
			/** @deprecated */
			public static maxBy(thismaxBy: kotlin.sequences.Sequence<any>, selector: kotlin.jvm.functions.Function1<any,any>): any;
			public static associateWithTo(thisassociateWithTo: kotlin.sequences.Sequence<any>, destination: java.util.Map<any,any>, valueSelector: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			public static dropWhile(thisdropWhile: kotlin.sequences.Sequence<any>, predicate: kotlin.jvm.functions.Function1<any,any>): kotlin.sequences.Sequence<any>;
			public static minOrNull(thisminOrNull: kotlin.sequences.Sequence<java.lang.Double>): java.lang.Double;
			public static firstOrNull(thisfirstOrNull: kotlin.sequences.Sequence<any>): any;
			public static last(thislast: kotlin.sequences.Sequence<any>): any;
			public static all(thisall: kotlin.sequences.Sequence<any>, predicate: kotlin.jvm.functions.Function1<any,any>): boolean;
			public static filterNotTo(thisfilterNotTo: kotlin.sequences.Sequence<any>, destination: java.util.Collection<any>, predicate: kotlin.jvm.functions.Function1<any,any>): java.util.Collection<any>;
			public static count(thiscount: kotlin.sequences.Sequence<any>, predicate: kotlin.jvm.functions.Function1<any,any>): number;
			public static first(thisfirst: kotlin.sequences.Sequence<any>): any;
			public static flatMapIterable(thisflatMap: kotlin.sequences.Sequence<any>, transform: kotlin.jvm.functions.Function1<any,any>): kotlin.sequences.Sequence<any>;
			public static flatMapIndexedIterable(thisflatMapIndexed: kotlin.sequences.Sequence<any>, transform: kotlin.jvm.functions.Function2<any,any,any>): kotlin.sequences.Sequence<any>;
			public static sortedByDescending(thissortedByDescending: kotlin.sequences.Sequence<any>, selector: kotlin.jvm.functions.Function1<any,any>): kotlin.sequences.Sequence<any>;
			public static maxOrNull(thismaxOrNull: kotlin.sequences.Sequence<any>): java.lang.Comparable<any>;
			public static last(thislast: kotlin.sequences.Sequence<any>, predicate: kotlin.jvm.functions.Function1<any,any>): any;
			public static drop(thisdrop: kotlin.sequences.Sequence<any>, n: number): kotlin.sequences.Sequence<any>;
			public static minWithOrNull(thisminWithOrNull: kotlin.sequences.Sequence<any>, comparator: java.util.Comparator<any>): any;
			/** @deprecated */
			public static min(thismin: kotlin.sequences.Sequence<any>): java.lang.Comparable<any>;
			public static flatMap(thisflatMap: kotlin.sequences.Sequence<any>, transform: kotlin.jvm.functions.Function1<any,any>): kotlin.sequences.Sequence<any>;
			public static zip(thiszip: kotlin.sequences.Sequence<any>, other: kotlin.sequences.Sequence<any>): kotlin.sequences.Sequence<any>;
			public static sumOfFloat(thissum: kotlin.sequences.Sequence<java.lang.Float>): number;
			public static onEach(thisonEach: kotlin.sequences.Sequence<any>, action: kotlin.jvm.functions.Function1<any,any>): kotlin.sequences.Sequence<any>;
			public static averageOfShort(thisaverage: kotlin.sequences.Sequence<java.lang.Short>): number;
			public static filterIndexed(thisfilterIndexed: kotlin.sequences.Sequence<any>, predicate: kotlin.jvm.functions.Function2<any,any,any>): kotlin.sequences.Sequence<any>;
			public static elementAtOrElse(thiselementAtOrElse: kotlin.sequences.Sequence<any>, index: number, defaultValue: kotlin.jvm.functions.Function1<any,any>): any;
			public static sumOfByte(thissum: kotlin.sequences.Sequence<java.lang.Byte>): number;
			public static single(thissingle: kotlin.sequences.Sequence<any>): any;
			public static groupingBy(thisgroupingBy: kotlin.sequences.Sequence<any>, keySelector: kotlin.jvm.functions.Function1<any,any>): kotlin.collections.Grouping<any,any>;
			public static windowed(thiswindowed: kotlin.sequences.Sequence<any>, size: number, step: number, partialWindows: boolean): kotlin.sequences.Sequence<any>;
		}
	}
}

declare module kotlin {
	export module sequences {
		export class SubSequence<T>  extends java.lang.Object {
			public static class: java.lang.Class<kotlin.sequences.SubSequence<any>>;
			public drop(n: number): kotlin.sequences.Sequence<T>;
			public take(n: number): kotlin.sequences.Sequence<T>;
			public iterator(): java.util.Iterator<T>;
			public constructor(sequence: kotlin.sequences.Sequence<any>, startIndex: number, endIndex: number);
		}
	}
}

declare module kotlin {
	export module sequences {
		export class TakeSequence<T>  extends java.lang.Object {
			public static class: java.lang.Class<kotlin.sequences.TakeSequence<any>>;
			public drop(n: number): kotlin.sequences.Sequence<T>;
			public take(n: number): kotlin.sequences.Sequence<T>;
			public iterator(): java.util.Iterator<T>;
			public constructor(sequence: kotlin.sequences.Sequence<any>, count: number);
		}
	}
}

declare module kotlin {
	export module sequences {
		export class TakeWhileSequence<T>  extends kotlin.sequences.Sequence<any> {
			public static class: java.lang.Class<kotlin.sequences.TakeWhileSequence<any>>;
			public constructor(sequence: kotlin.sequences.Sequence<any>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>);
			public iterator(): java.util.Iterator<any>;
		}
	}
}

declare module kotlin {
	export module sequences {
		export class TransformingIndexedSequence<T, R>  extends kotlin.sequences.Sequence<any> {
			public static class: java.lang.Class<kotlin.sequences.TransformingIndexedSequence<any,any>>;
			public constructor(sequence: kotlin.sequences.Sequence<any>, transformer: kotlin.jvm.functions.Function2<any,any,any>);
			public iterator(): java.util.Iterator<any>;
		}
	}
}

declare module kotlin {
	export module sequences {
		export class TransformingSequence<T, R>  extends kotlin.sequences.Sequence<any> {
			public static class: java.lang.Class<kotlin.sequences.TransformingSequence<any,any>>;
			public constructor(sequence: kotlin.sequences.Sequence<any>, transformer: kotlin.jvm.functions.Function1<any,any>);
			public flatten(iterator: kotlin.jvm.functions.Function1<any,any>): kotlin.sequences.Sequence<any>;
			public iterator(): java.util.Iterator<any>;
		}
	}
}

declare module kotlin {
	export module sequences {
		export class USequencesKt extends kotlin.sequences.USequencesKt___USequencesKt {
			public static class: java.lang.Class<kotlin.sequences.USequencesKt>;
		}
	}
}

declare module kotlin {
	export module sequences {
		export class USequencesKt___USequencesKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.sequences.USequencesKt___USequencesKt>;
			public static sumOfUByte(thissum: kotlin.sequences.Sequence<kotlin.UByte>): number;
			public static sumOfULong(thissum: kotlin.sequences.Sequence<kotlin.ULong>): number;
			public static sumOfUInt(thissum: kotlin.sequences.Sequence<kotlin.UInt>): number;
			public static sumOfUShort(thissum: kotlin.sequences.Sequence<kotlin.UShort>): number;
			public constructor();
		}
	}
}

declare module kotlin {
	export module system {
		export class ProcessKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.system.ProcessKt>;
		}
	}
}

declare module kotlin {
	export module system {
		export class TimingKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.system.TimingKt>;
			public static measureNanoTime(block: kotlin.jvm.functions.Function0<kotlin.Unit>): number;
			public static measureTimeMillis(block: kotlin.jvm.functions.Function0<kotlin.Unit>): number;
		}
	}
}

declare module kotlin {
	export module text {
		export class CharCategory {
			public static class: java.lang.Class<kotlin.text.CharCategory>;
			public static UNASSIGNED: kotlin.text.CharCategory;
			public static UPPERCASE_LETTER: kotlin.text.CharCategory;
			public static LOWERCASE_LETTER: kotlin.text.CharCategory;
			public static TITLECASE_LETTER: kotlin.text.CharCategory;
			public static MODIFIER_LETTER: kotlin.text.CharCategory;
			public static OTHER_LETTER: kotlin.text.CharCategory;
			public static NON_SPACING_MARK: kotlin.text.CharCategory;
			public static ENCLOSING_MARK: kotlin.text.CharCategory;
			public static COMBINING_SPACING_MARK: kotlin.text.CharCategory;
			public static DECIMAL_DIGIT_NUMBER: kotlin.text.CharCategory;
			public static LETTER_NUMBER: kotlin.text.CharCategory;
			public static OTHER_NUMBER: kotlin.text.CharCategory;
			public static SPACE_SEPARATOR: kotlin.text.CharCategory;
			public static LINE_SEPARATOR: kotlin.text.CharCategory;
			public static PARAGRAPH_SEPARATOR: kotlin.text.CharCategory;
			public static CONTROL: kotlin.text.CharCategory;
			public static FORMAT: kotlin.text.CharCategory;
			public static PRIVATE_USE: kotlin.text.CharCategory;
			public static SURROGATE: kotlin.text.CharCategory;
			public static DASH_PUNCTUATION: kotlin.text.CharCategory;
			public static START_PUNCTUATION: kotlin.text.CharCategory;
			public static END_PUNCTUATION: kotlin.text.CharCategory;
			public static CONNECTOR_PUNCTUATION: kotlin.text.CharCategory;
			public static OTHER_PUNCTUATION: kotlin.text.CharCategory;
			public static MATH_SYMBOL: kotlin.text.CharCategory;
			public static CURRENCY_SYMBOL: kotlin.text.CharCategory;
			public static MODIFIER_SYMBOL: kotlin.text.CharCategory;
			public static OTHER_SYMBOL: kotlin.text.CharCategory;
			public static INITIAL_QUOTE_PUNCTUATION: kotlin.text.CharCategory;
			public static FINAL_QUOTE_PUNCTUATION: kotlin.text.CharCategory;
			public static Companion: kotlin.text.CharCategory.Companion;
			public getValue(): number;
			public getCode(): string;
			public contains(char: string): boolean;
			public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
			public static valueOf(string0: string): kotlin.text.CharCategory;
			public static values(): native.Array<kotlin.text.CharCategory>;
		}
		export module CharCategory {
			export class Companion extends java.lang.Object {
				public static class: java.lang.Class<kotlin.text.CharCategory.Companion>;
				public valueOf(category: number): kotlin.text.CharCategory;
			}
		}
	}
}

declare module kotlin {
	export module text {
		export class CharDirectionality {
			public static class: java.lang.Class<kotlin.text.CharDirectionality>;
			public static UNDEFINED: kotlin.text.CharDirectionality;
			public static LEFT_TO_RIGHT: kotlin.text.CharDirectionality;
			public static RIGHT_TO_LEFT: kotlin.text.CharDirectionality;
			public static RIGHT_TO_LEFT_ARABIC: kotlin.text.CharDirectionality;
			public static EUROPEAN_NUMBER: kotlin.text.CharDirectionality;
			public static EUROPEAN_NUMBER_SEPARATOR: kotlin.text.CharDirectionality;
			public static EUROPEAN_NUMBER_TERMINATOR: kotlin.text.CharDirectionality;
			public static ARABIC_NUMBER: kotlin.text.CharDirectionality;
			public static COMMON_NUMBER_SEPARATOR: kotlin.text.CharDirectionality;
			public static NONSPACING_MARK: kotlin.text.CharDirectionality;
			public static BOUNDARY_NEUTRAL: kotlin.text.CharDirectionality;
			public static PARAGRAPH_SEPARATOR: kotlin.text.CharDirectionality;
			public static SEGMENT_SEPARATOR: kotlin.text.CharDirectionality;
			public static WHITESPACE: kotlin.text.CharDirectionality;
			public static OTHER_NEUTRALS: kotlin.text.CharDirectionality;
			public static LEFT_TO_RIGHT_EMBEDDING: kotlin.text.CharDirectionality;
			public static LEFT_TO_RIGHT_OVERRIDE: kotlin.text.CharDirectionality;
			public static RIGHT_TO_LEFT_EMBEDDING: kotlin.text.CharDirectionality;
			public static RIGHT_TO_LEFT_OVERRIDE: kotlin.text.CharDirectionality;
			public static POP_DIRECTIONAL_FORMAT: kotlin.text.CharDirectionality;
			public static Companion: kotlin.text.CharDirectionality.Companion;
			public getValue(): number;
			public static valueOf(string0: string): kotlin.text.CharDirectionality;
			public static values(): native.Array<kotlin.text.CharDirectionality>;
			public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
		}
		export module CharDirectionality {
			export class Companion extends java.lang.Object {
				public static class: java.lang.Class<kotlin.text.CharDirectionality.Companion>;
				public valueOf(directionality: number): kotlin.text.CharDirectionality;
			}
		}
	}
}

declare module kotlin {
	export module text {
		export class CharsKt extends kotlin.text.CharsKt__CharKt {
			public static class: java.lang.Class<kotlin.text.CharsKt>;
		}
	}
}

declare module kotlin {
	export module text {
		export class CharsKt__CharJVMKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.text.CharsKt__CharJVMKt>;
			public static isWhitespace(thisisWhitespace: string): boolean;
			public constructor();
			public static getCategory(thiscategory: string): kotlin.text.CharCategory;
			public static getDirectionality(thisdirectionality: string): kotlin.text.CharDirectionality;
			public static digitOf(char: string, radix: number): number;
			public static checkRadix(radix: number): number;
		}
	}
}

declare module kotlin {
	export module text {
		export class CharsKt__CharKt extends kotlin.text.CharsKt__CharJVMKt {
			public static class: java.lang.Class<kotlin.text.CharsKt__CharKt>;
			public static equals(thisequals: string, other: string, ignoreCase: boolean): boolean;
			public equals(obj: any): boolean;
			public static isSurrogate(thisisSurrogate: string): boolean;
			public constructor();
		}
	}
}

declare module kotlin {
	export module text {
		export class Charsets extends java.lang.Object {
			public static class: java.lang.Class<kotlin.text.Charsets>;
			public static UTF_8: java.nio.charset.Charset;
			public static UTF_16: java.nio.charset.Charset;
			public static UTF_16BE: java.nio.charset.Charset;
			public static UTF_16LE: java.nio.charset.Charset;
			public static US_ASCII: java.nio.charset.Charset;
			public static ISO_8859_1: java.nio.charset.Charset;
			public static INSTANCE: kotlin.text.Charsets;
			public UTF32_LE(): java.nio.charset.Charset;
			public UTF32_BE(): java.nio.charset.Charset;
			public UTF32(): java.nio.charset.Charset;
		}
	}
}

declare module kotlin {
	export module text {
		export class CharsetsKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.text.CharsetsKt>;
		}
	}
}

declare module kotlin {
	export module text {
		export class DelimitedRangesSequence extends kotlin.sequences.Sequence<kotlin.ranges.IntRange> {
			public static class: java.lang.Class<kotlin.text.DelimitedRangesSequence>;
			public constructor(input: string, startIndex: number, limit: number, getNextMatch: kotlin.jvm.functions.Function2<any,any,kotlin.Pair<java.lang.Integer,java.lang.Integer>>);
			public iterator(): java.util.Iterator<kotlin.ranges.IntRange>;
			public iterator(): java.util.Iterator<any>;
		}
	}
}

declare module kotlin {
	export module text {
		export class FlagEnum extends java.lang.Object {
			public static class: java.lang.Class<kotlin.text.FlagEnum>;
			/**
			 * Constructs a new instance of the kotlin.text.FlagEnum interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getValue(): number;
				getMask(): number;
			});
			public constructor();
			public getValue(): number;
			public getMask(): number;
		}
	}
}

declare module kotlin {
	export module text {
		export class MatchGroup extends java.lang.Object {
			public static class: java.lang.Class<kotlin.text.MatchGroup>;
			public toString(): string;
			public copy(value: string, range: kotlin.ranges.IntRange): kotlin.text.MatchGroup;
			public equals(obj: any): boolean;
			public getRange(): kotlin.ranges.IntRange;
			public component2(): kotlin.ranges.IntRange;
			public component1(): string;
			public constructor(value: string, range: kotlin.ranges.IntRange);
			public getValue(): string;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module text {
		export class MatchGroupCollection extends java.lang.Object {
			public static class: java.lang.Class<kotlin.text.MatchGroupCollection>;
			/**
			 * Constructs a new instance of the kotlin.text.MatchGroupCollection interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				get(int0: number): kotlin.text.MatchGroup;
				size(): number;
				isEmpty(): boolean;
				contains(object0: any): boolean;
				iterator(): java.util.Iterator<any>;
				toArray(): native.Array<any>;
				toArray(objects0: native.Array<any>): native.Array<any>;
				add(object0: any): boolean;
				remove(object0: any): boolean;
				containsAll(collection0: java.util.Collection<any>): boolean;
				addAll(collection0: java.util.Collection<any>): boolean;
				removeAll(collection0: java.util.Collection<any>): boolean;
				removeIf(filter: any /* any*/): boolean;
				retainAll(collection0: java.util.Collection<any>): boolean;
				clear(): void;
				equals(object0: any): boolean;
				hashCode(): number;
				spliterator(): java.util.Spliterator<any>;
				stream(): java.util.stream.Stream<any>;
				parallelStream(): java.util.stream.Stream<any>;
				iterator(): java.util.Iterator<any>;
				forEach(action: any /* any*/): void;
				spliterator(): java.util.Spliterator<any>;
			});
			public constructor();
			public clear(): void;
			public toArray(): native.Array<any>;
			public size(): number;
			public isEmpty(): boolean;
			public stream(): java.util.stream.Stream<any>;
			public add(object0: any): boolean;
			public get(int0: number): kotlin.text.MatchGroup;
			public remove(object0: any): boolean;
			public forEach(action: any /* any*/): void;
			public removeAll(collection0: java.util.Collection<any>): boolean;
			public retainAll(collection0: java.util.Collection<any>): boolean;
			public containsAll(collection0: java.util.Collection<any>): boolean;
			public addAll(collection0: java.util.Collection<any>): boolean;
			public removeIf(filter: any /* any*/): boolean;
			public equals(obj: any): boolean;
			public toArray(objects0: native.Array<any>): native.Array<any>;
			public contains(object0: any): boolean;
			public spliterator(): java.util.Spliterator<any>;
			public parallelStream(): java.util.stream.Stream<any>;
			public iterator(): java.util.Iterator<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module text {
		export class MatchNamedGroupCollection extends java.lang.Object implements kotlin.text.MatchGroupCollection {
			public static class: java.lang.Class<kotlin.text.MatchNamedGroupCollection>;
			/**
			 * Constructs a new instance of the kotlin.text.MatchNamedGroupCollection interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				get(string0: string): kotlin.text.MatchGroup;
				get(int0: number): kotlin.text.MatchGroup;
				size(): number;
				isEmpty(): boolean;
				contains(object0: any): boolean;
				iterator(): java.util.Iterator<any>;
				toArray(): native.Array<any>;
				toArray(objects0: native.Array<any>): native.Array<any>;
				add(object0: any): boolean;
				remove(object0: any): boolean;
				containsAll(collection0: java.util.Collection<any>): boolean;
				addAll(collection0: java.util.Collection<any>): boolean;
				removeAll(collection0: java.util.Collection<any>): boolean;
				removeIf(filter: any /* any*/): boolean;
				retainAll(collection0: java.util.Collection<any>): boolean;
				clear(): void;
				equals(object0: any): boolean;
				hashCode(): number;
				spliterator(): java.util.Spliterator<any>;
				stream(): java.util.stream.Stream<any>;
				parallelStream(): java.util.stream.Stream<any>;
				iterator(): java.util.Iterator<any>;
				forEach(action: any /* any*/): void;
				spliterator(): java.util.Spliterator<any>;
			});
			public constructor();
			public clear(): void;
			public toArray(): native.Array<any>;
			public size(): number;
			public isEmpty(): boolean;
			public stream(): java.util.stream.Stream<any>;
			public add(object0: any): boolean;
			public get(string0: string): kotlin.text.MatchGroup;
			public get(int0: number): kotlin.text.MatchGroup;
			public remove(object0: any): boolean;
			public forEach(action: any /* any*/): void;
			public removeAll(collection0: java.util.Collection<any>): boolean;
			public retainAll(collection0: java.util.Collection<any>): boolean;
			public containsAll(collection0: java.util.Collection<any>): boolean;
			public addAll(collection0: java.util.Collection<any>): boolean;
			public removeIf(filter: any /* any*/): boolean;
			public equals(obj: any): boolean;
			public toArray(objects0: native.Array<any>): native.Array<any>;
			public contains(object0: any): boolean;
			public spliterator(): java.util.Spliterator<any>;
			public parallelStream(): java.util.stream.Stream<any>;
			public iterator(): java.util.Iterator<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module text {
		export class MatchResult extends java.lang.Object {
			public static class: java.lang.Class<kotlin.text.MatchResult>;
			/**
			 * Constructs a new instance of the kotlin.text.MatchResult interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getRange(): kotlin.ranges.IntRange;
				getValue(): string;
				getGroups(): kotlin.text.MatchGroupCollection;
				getGroupValues(): java.util.List<string>;
				getDestructured(): kotlin.text.MatchResult.Destructured;
				next(): kotlin.text.MatchResult;
			});
			public constructor();
			public next(): kotlin.text.MatchResult;
			public getRange(): kotlin.ranges.IntRange;
			public getDestructured(): kotlin.text.MatchResult.Destructured;
			public getGroups(): kotlin.text.MatchGroupCollection;
			public getValue(): string;
			public getGroupValues(): java.util.List<string>;
		}
		export module MatchResult {
			export class DefaultImpls extends java.lang.Object {
				public static class: java.lang.Class<kotlin.text.MatchResult.DefaultImpls>;
				public static getDestructured(this0: kotlin.text.MatchResult): kotlin.text.MatchResult.Destructured;
			}
			export class Destructured extends java.lang.Object {
				public static class: java.lang.Class<kotlin.text.MatchResult.Destructured>;
				public toList(): java.util.List<string>;
				public constructor(match: kotlin.text.MatchResult);
				public getMatch(): kotlin.text.MatchResult;
			}
		}
	}
}

declare module kotlin {
	export module text {
		export class MatcherMatchResult extends java.lang.Object implements kotlin.text.MatchResult {
			public static class: java.lang.Class<kotlin.text.MatcherMatchResult>;
			public next(): kotlin.text.MatchResult;
			public getRange(): kotlin.ranges.IntRange;
			public constructor(matcher: java.util.regex.Matcher, input: string);
			public getDestructured(): kotlin.text.MatchResult.Destructured;
			public getGroups(): kotlin.text.MatchGroupCollection;
			public getValue(): string;
			public getGroupValues(): java.util.List<string>;
		}
	}
}

declare module kotlin {
	export module text {
		export class Regex extends java.lang.Object implements java.io.Serializable {
			public static class: java.lang.Class<kotlin.text.Regex>;
			public static Companion: kotlin.text.Regex.Companion;
			public getOptions(): java.util.Set<kotlin.text.RegexOption>;
			public constructor(pattern: string);
			public find(input: string, startIndex: number): kotlin.text.MatchResult;
			public constructor(pattern: string, option: kotlin.text.RegexOption);
			public constructor(pattern: string, options: java.util.Set<any>);
			public matchEntire(input: string): kotlin.text.MatchResult;
			public replace(input: string, transform: kotlin.jvm.functions.Function1<any,any>): string;
			public split(input: string, limit: number): java.util.List<string>;
			public toString(): string;
			public toPattern(): java.util.regex.Pattern;
			public replaceFirst(input: string, replacement: string): string;
			public containsMatchIn(input: string): boolean;
			public getPattern(): string;
			public constructor(nativePattern: java.util.regex.Pattern);
			public findAll(input: string, startIndex: number): kotlin.sequences.Sequence<kotlin.text.MatchResult>;
			public replace(input: string, replacement: string): string;
			public matches(input: string): boolean;
		}
		export module Regex {
			export class Companion extends java.lang.Object {
				public static class: java.lang.Class<kotlin.text.Regex.Companion>;
				public fromLiteral(literal: string): kotlin.text.Regex;
				public escapeReplacement(literal: string): string;
				public escape(literal: string): string;
			}
			export class Serialized extends java.lang.Object implements java.io.Serializable {
				public static class: java.lang.Class<kotlin.text.Regex.Serialized>;
				public static Companion: kotlin.text.Regex.Serialized.Companion;
				public getFlags(): number;
				public getPattern(): string;
				public constructor(pattern: string, flags: number);
			}
			export module Serialized {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<kotlin.text.Regex.Serialized.Companion>;
				}
			}
		}
	}
}

declare module kotlin {
	export module text {
		export class RegexKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.text.RegexKt>;
		}
	}
}

declare module kotlin {
	export module text {
		export class RegexOption extends kotlin.text.FlagEnum {
			public static class: java.lang.Class<kotlin.text.RegexOption>;
			public static IGNORE_CASE: kotlin.text.RegexOption;
			public static MULTILINE: kotlin.text.RegexOption;
			public static LITERAL: kotlin.text.RegexOption;
			public static UNIX_LINES: kotlin.text.RegexOption;
			public static COMMENTS: kotlin.text.RegexOption;
			public static DOT_MATCHES_ALL: kotlin.text.RegexOption;
			public static CANON_EQ: kotlin.text.RegexOption;
			public getValue(): number;
			public static valueOf(string0: string): kotlin.text.RegexOption;
			public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
			public getMask(): number;
			public static values(): native.Array<kotlin.text.RegexOption>;
		}
	}
}

declare module kotlin {
	export module text {
		export class ScreenFloatValueRegEx extends java.lang.Object {
			public static class: java.lang.Class<kotlin.text.ScreenFloatValueRegEx>;
			public static value: kotlin.text.Regex;
			public static INSTANCE: kotlin.text.ScreenFloatValueRegEx;
		}
	}
}

declare module kotlin {
	export module text {
		export class StringsKt extends kotlin.text.StringsKt___StringsKt {
			public static class: java.lang.Class<kotlin.text.StringsKt>;
		}
	}
}

declare module kotlin {
	export module text {
		export class StringsKt__AppendableKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.text.StringsKt__AppendableKt>;
			public static append(thisappend: java.lang.Appendable, value: native.Array<string>): java.lang.Appendable;
			public static appendRange(thisappendRange: java.lang.Appendable, value: string, startIndex: number, endIndex: number): java.lang.Appendable;
			public constructor();
			public static appendElement(thisappendElement: java.lang.Appendable, element: any, transform: kotlin.jvm.functions.Function1<any,any>): void;
		}
	}
}

declare module kotlin {
	export module text {
		export class StringsKt__IndentKt extends kotlin.text.StringsKt__AppendableKt {
			public static class: java.lang.Class<kotlin.text.StringsKt__IndentKt>;
			public static replaceIndentByMargin(thisreplaceIndentByMargin: string, newIndent: string, marginPrefix: string): string;
			public static trimMargin(thistrimMargin: string, marginPrefix: string): string;
			public static trimIndent(thistrimIndent: string): string;
			public static replaceIndent(thisreplaceIndent: string, newIndent: string): string;
			public constructor();
			public static prependIndent(thisprependIndent: string, indent: string): string;
		}
	}
}

declare module kotlin {
	export module text {
		export class StringsKt__RegexExtensionsJVMKt extends kotlin.text.StringsKt__IndentKt {
			public static class: java.lang.Class<kotlin.text.StringsKt__RegexExtensionsJVMKt>;
			public constructor();
		}
	}
}

declare module kotlin {
	export module text {
		export class StringsKt__RegexExtensionsKt extends kotlin.text.StringsKt__RegexExtensionsJVMKt {
			public static class: java.lang.Class<kotlin.text.StringsKt__RegexExtensionsKt>;
			public constructor();
		}
	}
}

declare module kotlin {
	export module text {
		export class StringsKt__StringBuilderJVMKt extends kotlin.text.StringsKt__RegexExtensionsKt {
			public static class: java.lang.Class<kotlin.text.StringsKt__StringBuilderJVMKt>;
			/** @deprecated */
			public static appendln(thisappendln: java.lang.StringBuilder): java.lang.StringBuilder;
			public constructor();
			public static clear(thisclear: java.lang.StringBuilder): java.lang.StringBuilder;
			/** @deprecated */
			public static appendln(thisappendln: java.lang.Appendable): java.lang.Appendable;
		}
	}
}

declare module kotlin {
	export module text {
		export class StringsKt__StringBuilderKt extends kotlin.text.StringsKt__StringBuilderJVMKt {
			public static class: java.lang.Class<kotlin.text.StringsKt__StringBuilderKt>;
			public static append(thisappend: java.lang.StringBuilder, value: native.Array<string>): java.lang.StringBuilder;
			public static append(thisappend: java.lang.StringBuilder, value: native.Array<any>): java.lang.StringBuilder;
			public static append(thisappend: java.lang.Appendable, value: native.Array<string>): java.lang.Appendable;
			public constructor();
		}
	}
}

declare module kotlin {
	export module text {
		export class StringsKt__StringNumberConversionsJVMKt extends kotlin.text.StringsKt__StringBuilderKt {
			public static class: java.lang.Class<kotlin.text.StringsKt__StringNumberConversionsJVMKt>;
			public static toBigDecimalOrNull(thistoBigDecimalOrNull: string): java.math.BigDecimal;
			public static toFloatOrNull(thistoFloatOrNull: string): java.lang.Float;
			public static toDoubleOrNull(thistoDoubleOrNull: string): java.lang.Double;
			public static toBigIntegerOrNull(thistoBigIntegerOrNull: string): java.math.BigInteger;
			public static toBigIntegerOrNull(thistoBigIntegerOrNull: string, radix: number): java.math.BigInteger;
			public static toBigDecimalOrNull(thistoBigDecimalOrNull: string, mathContext: java.math.MathContext): java.math.BigDecimal;
			public constructor();
		}
	}
}

declare module kotlin {
	export module text {
		export class StringsKt__StringNumberConversionsKt extends kotlin.text.StringsKt__StringNumberConversionsJVMKt {
			public static class: java.lang.Class<kotlin.text.StringsKt__StringNumberConversionsKt>;
			public static toByteOrNull(thistoByteOrNull: string): java.lang.Byte;
			public static toLongOrNull(thistoLongOrNull: string, radix: number): java.lang.Long;
			public static toByteOrNull(thistoByteOrNull: string, radix: number): java.lang.Byte;
			public static toIntOrNull(thistoIntOrNull: string, radix: number): java.lang.Integer;
			public static toShortOrNull(thistoShortOrNull: string, radix: number): java.lang.Short;
			public static toIntOrNull(thistoIntOrNull: string): java.lang.Integer;
			public constructor();
			public static toLongOrNull(thistoLongOrNull: string): java.lang.Long;
			public static toShortOrNull(thistoShortOrNull: string): java.lang.Short;
			public static numberFormatError(input: string): java.lang.Void;
		}
	}
}

declare module kotlin {
	export module text {
		export class StringsKt__StringsJVMKt extends kotlin.text.StringsKt__StringNumberConversionsKt {
			public static class: java.lang.Class<kotlin.text.StringsKt__StringsJVMKt>;
			public static split(thissplit: string, regex: java.util.regex.Pattern, limit: number): java.util.List<string>;
			public static capitalize(thiscapitalize: string): string;
			public static decapitalize(thisdecapitalize: string): string;
			public static replaceFirst(thisreplaceFirst: string, oldValue: string, newValue: string, ignoreCase: boolean): string;
			public static encodeToByteArray(thisencodeToByteArray: string): native.Array<number>;
			public static regionMatches(thisregionMatches: string, thisOffset: number, other: string, otherOffset: number, length: number, ignoreCase: boolean): boolean;
			public static decapitalize(thisdecapitalize: string, locale: java.util.Locale): string;
			public static repeat(thisrepeat: string, n: number): string;
			public static getCASE_INSENSITIVE_ORDER(thisCASE_INSENSITIVE_ORDER: kotlin.jvm.internal.StringCompanionObject): java.util.Comparator<string>;
			public static compareTo(thiscompareTo: string, other: string, ignoreCase: boolean): number;
			public static isBlank(thisisBlank: string): boolean;
			public static concatToString(thisconcatToString: native.Array<string>): string;
			public static concatToString(thisconcatToString: native.Array<string>, startIndex: number, endIndex: number): string;
			public static decodeToString(thisdecodeToString: native.Array<number>, startIndex: number, endIndex: number, throwOnInvalidSequence: boolean): string;
			public static startsWith(thisstartsWith: string, prefix: string, ignoreCase: boolean): boolean;
			public static replace(thisreplace: string, oldValue: string, newValue: string, ignoreCase: boolean): string;
			public static replaceFirst(thisreplaceFirst: string, oldChar: string, newChar: string, ignoreCase: boolean): string;
			public static startsWith(thisstartsWith: string, prefix: string, startIndex: number, ignoreCase: boolean): boolean;
			public static encodeToByteArray(thisencodeToByteArray: string, startIndex: number, endIndex: number, throwOnInvalidSequence: boolean): native.Array<number>;
			public static toCharArray(thistoCharArray: string, startIndex: number, endIndex: number): native.Array<string>;
			public static decodeToString(thisdecodeToString: native.Array<number>): string;
			public constructor();
			public static equals(thisequals: string, other: string, ignoreCase: boolean): boolean;
			public static replace(thisreplace: string, oldChar: string, newChar: string, ignoreCase: boolean): string;
			public static endsWith(thisendsWith: string, suffix: string, ignoreCase: boolean): boolean;
			public static capitalize(thiscapitalize: string, locale: java.util.Locale): string;
			public equals(obj: any): boolean;
		}
	}
}

declare module kotlin {
	export module text {
		export class StringsKt__StringsKt extends kotlin.text.StringsKt__StringsJVMKt {
			public static class: java.lang.Class<kotlin.text.StringsKt__StringsKt>;
			public static indexOf(thisindexOf: string, char: string, startIndex: number, ignoreCase: boolean): number;
			public static indexOf(thisindexOf: string, string: string, startIndex: number, ignoreCase: boolean): number;
			public static replaceAfterLast(thisreplaceAfterLast: string, delimiter: string, replacement: string, missingDelimiterValue: string): string;
			public static lineSequence(thislineSequence: string): kotlin.sequences.Sequence<string>;
			public static commonSuffixWith(thiscommonSuffixWith: string, other: string, ignoreCase: boolean): string;
			public static lastIndexOf(thislastIndexOf: string, string: string, startIndex: number, ignoreCase: boolean): number;
			public static split(thissplit: string, delimiters: native.Array<string>, ignoreCase: boolean, limit: number): java.util.List<string>;
			public static substringBeforeLast(thissubstringBeforeLast: string, delimiter: string, missingDelimiterValue: string): string;
			public static trimStart(thistrimStart: string): string;
			public static commonPrefixWith(thiscommonPrefixWith: string, other: string, ignoreCase: boolean): string;
			public static substringAfter(thissubstringAfter: string, delimiter: string, missingDelimiterValue: string): string;
			public static removeRange(thisremoveRange: string, range: kotlin.ranges.IntRange): string;
			public static findLastAnyOf(thisfindLastAnyOf: string, strings: java.util.Collection<string>, startIndex: number, ignoreCase: boolean): kotlin.Pair<java.lang.Integer,string>;
			public static contains(thiscontains: string, other: string, ignoreCase: boolean): boolean;
			public static replaceRange(thisreplaceRange: string, range: kotlin.ranges.IntRange, replacement: string): string;
			public static replaceAfter(thisreplaceAfter: string, delimiter: string, replacement: string, missingDelimiterValue: string): string;
			public static lastIndexOfAny(thislastIndexOfAny: string, strings: java.util.Collection<string>, startIndex: number, ignoreCase: boolean): number;
			public constructor();
			public static iterator(thisiterator: string): kotlin.collections.CharIterator;
			public static removePrefix(thisremovePrefix: string, prefix: string): string;
			public static removeSuffix(thisremoveSuffix: string, suffix: string): string;
			public static lastIndexOfAny(thislastIndexOfAny: string, chars: native.Array<string>, startIndex: number, ignoreCase: boolean): number;
			public static regionMatchesImpl(thisregionMatchesImpl: string, thisOffset: number, other: string, otherOffset: number, length: number, ignoreCase: boolean): boolean;
			public static endsWith(thisendsWith: string, suffix: string, ignoreCase: boolean): boolean;
			public static trim(thistrim: string): string;
			public static trim(thistrim: string, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): string;
			public static padStart(thispadStart: string, length: number, padChar: string): string;
			public static subSequence(thissubSequence: string, range: kotlin.ranges.IntRange): string;
			public static trimStart(thistrimStart: string, chars: native.Array<string>): string;
			public static indexOfAny(thisindexOfAny: string, strings: java.util.Collection<string>, startIndex: number, ignoreCase: boolean): number;
			public static lines(thislines: string): java.util.List<string>;
			public static split(thissplit: string, regex: java.util.regex.Pattern, limit: number): java.util.List<string>;
			public static getLastIndex(thislastIndex: string): number;
			public static trimEnd(thistrimEnd: string): string;
			public static removeSurrounding(thisremoveSurrounding: string, delimiter: string): string;
			public static splitToSequence(thissplitToSequence: string, delimiters: native.Array<string>, ignoreCase: boolean, limit: number): kotlin.sequences.Sequence<string>;
			public static hasSurrogatePairAt(thishasSurrogatePairAt: string, index: number): boolean;
			public static indexOfAny(thisindexOfAny: string, chars: native.Array<string>, startIndex: number, ignoreCase: boolean): number;
			public static removeRange(thisremoveRange: string, startIndex: number, endIndex: number): string;
			public static findAnyOf(thisfindAnyOf: string, strings: java.util.Collection<string>, startIndex: number, ignoreCase: boolean): kotlin.Pair<java.lang.Integer,string>;
			public static padEnd(thispadEnd: string, length: number, padChar: string): string;
			public static removeSurrounding(thisremoveSurrounding: string, prefix: string, suffix: string): string;
			public static startsWith(thisstartsWith: string, prefix: string, ignoreCase: boolean): boolean;
			public static startsWith(thisstartsWith: string, prefix: string, startIndex: number, ignoreCase: boolean): boolean;
			public static replaceBeforeLast(thisreplaceBeforeLast: string, delimiter: string, replacement: string, missingDelimiterValue: string): string;
			public static trimEnd(thistrimEnd: string, chars: native.Array<string>): string;
			public static substringAfterLast(thissubstringAfterLast: string, delimiter: string, missingDelimiterValue: string): string;
			public static getIndices(thisindices: string): kotlin.ranges.IntRange;
			public static replaceRange(thisreplaceRange: string, startIndex: number, endIndex: number, replacement: string): string;
			public static endsWith(thisendsWith: string, char: string, ignoreCase: boolean): boolean;
			public static replaceBefore(thisreplaceBefore: string, delimiter: string, replacement: string, missingDelimiterValue: string): string;
			public static trimStart(thistrimStart: string, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): string;
			public static substring(thissubstring: string, range: kotlin.ranges.IntRange): string;
			public static contains(thiscontains: string, char: string, ignoreCase: boolean): boolean;
			public static startsWith(thisstartsWith: string, char: string, ignoreCase: boolean): boolean;
			public static lastIndexOf(thislastIndexOf: string, char: string, startIndex: number, ignoreCase: boolean): number;
			public static trim(thistrim: string, chars: native.Array<string>): string;
			public static substringBefore(thissubstringBefore: string, delimiter: string, missingDelimiterValue: string): string;
			public static trimEnd(thistrimEnd: string, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): string;
		}
	}
}

declare module kotlin {
	export module text {
		export class StringsKt___StringsJvmKt extends kotlin.text.StringsKt__StringsKt {
			public static class: java.lang.Class<kotlin.text.StringsKt___StringsJvmKt>;
			public static toSortedSet(thistoSortedSet: string): java.util.SortedSet<java.lang.Character>;
			public constructor();
		}
	}
}

declare module kotlin {
	export module text {
		export class StringsKt___StringsKt extends kotlin.text.StringsKt___StringsJvmKt {
			public static class: java.lang.Class<kotlin.text.StringsKt___StringsKt>;
			public static asIterable(thisasIterable: string): java.lang.Iterable<java.lang.Character>;
			public static last(thislast: string, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): string;
			public static reduceRightIndexedOrNull(thisreduceRightIndexedOrNull: string, operation: kotlin.jvm.functions.Function3<any,any,any,java.lang.Character>): java.lang.Character;
			public static sumBy(thissumBy: string, selector: kotlin.jvm.functions.Function1<any,java.lang.Integer>): number;
			public static reduceRight(thisreduceRight: string, operation: kotlin.jvm.functions.Function2<any,any,java.lang.Character>): string;
			/** @deprecated */
			public static scanReduce(thisscanReduce: string, operation: kotlin.jvm.functions.Function2<any,any,java.lang.Character>): java.util.List<java.lang.Character>;
			public static associateByTo(thisassociateByTo: string, destination: java.util.Map<any,any>, keySelector: kotlin.jvm.functions.Function1<any,any>, valueTransform: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			public static runningFold(thisrunningFold: string, initial: any, operation: kotlin.jvm.functions.Function2<any,any,any>): java.util.List<any>;
			public static groupByTo(thisgroupByTo: string, destination: java.util.Map<any,any>, keySelector: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			public static foldRightIndexed(thisfoldRightIndexed: string, initial: any, operation: kotlin.jvm.functions.Function3<any,any,any,any>): any;
			public static groupingBy(thisgroupingBy: string, keySelector: kotlin.jvm.functions.Function1<any,any>): kotlin.collections.Grouping<any,any>;
			public static zipWithNext(thiszipWithNext: string, transform: kotlin.jvm.functions.Function2<any,any,any>): java.util.List<any>;
			public static maxByOrNull(thismaxByOrNull: string, selector: kotlin.jvm.functions.Function1<any,any>): java.lang.Character;
			public static reduceOrNull(thisreduceOrNull: string, operation: kotlin.jvm.functions.Function2<any,any,java.lang.Character>): java.lang.Character;
			public static runningReduceIndexed(thisrunningReduceIndexed: string, operation: kotlin.jvm.functions.Function3<any,any,any,java.lang.Character>): java.util.List<java.lang.Character>;
			public static zip(thiszip: string, other: string): java.util.List<kotlin.Pair<java.lang.Character,java.lang.Character>>;
			/** @deprecated */
			public static maxBy(thismaxBy: string, selector: kotlin.jvm.functions.Function1<any,any>): java.lang.Character;
			public static indexOfFirst(thisindexOfFirst: string, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): number;
			public static indexOfLast(thisindexOfLast: string, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): number;
			public constructor();
			public static withIndex(thiswithIndex: string): java.lang.Iterable<kotlin.collections.IndexedValue<java.lang.Character>>;
			public static single(thissingle: string, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): string;
			public static associateBy(thisassociateBy: string, keySelector: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			public static map(thismap: string, transform: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static runningReduce(thisrunningReduce: string, operation: kotlin.jvm.functions.Function2<any,any,java.lang.Character>): java.util.List<java.lang.Character>;
			public static getOrNull(thisgetOrNull: string, index: number): java.lang.Character;
			public static maxWithOrNull(thismaxWithOrNull: string, comparator: java.util.Comparator<any>): java.lang.Character;
			public static slice(thisslice: string, indices: kotlin.ranges.IntRange): string;
			/** @deprecated */
			public static minWith(thisminWith: string, comparator: java.util.Comparator<any>): java.lang.Character;
			public static drop(thisdrop: string, n: number): string;
			public static reduceRightOrNull(thisreduceRightOrNull: string, operation: kotlin.jvm.functions.Function2<any,any,java.lang.Character>): java.lang.Character;
			public static windowed(thiswindowed: string, size: number, step: number, partialWindows: boolean, transform: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static mapNotNullTo(thismapNotNullTo: string, destination: java.util.Collection<any>, transform: kotlin.jvm.functions.Function1<any,any>): java.util.Collection<any>;
			public static takeLast(thistakeLast: string, n: number): string;
			public static onEachIndexed(thisonEachIndexed: string, action: kotlin.jvm.functions.Function2<any,any,any>): string;
			public static minOrNull(thisminOrNull: string): java.lang.Character;
			public static minByOrNull(thisminByOrNull: string, selector: kotlin.jvm.functions.Function1<any,any>): java.lang.Character;
			public static mapIndexed(thismapIndexed: string, transform: kotlin.jvm.functions.Function2<any,any,any>): java.util.List<any>;
			public static filterIndexed(thisfilterIndexed: string, predicate: kotlin.jvm.functions.Function2<any,any,java.lang.Boolean>): string;
			public static associateBy(thisassociateBy: string, keySelector: kotlin.jvm.functions.Function1<any,any>, valueTransform: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			public static fold(thisfold: string, initial: any, operation: kotlin.jvm.functions.Function2<any,any,any>): any;
			public static first(thisfirst: string): string;
			public static maxOrNull(thismaxOrNull: string): java.lang.Character;
			public static singleOrNull(thissingleOrNull: string): java.lang.Character;
			public static chunked(thischunked: string, size: number, transform: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static flatMapTo(thisflatMapTo: string, destination: java.util.Collection<any>, transform: kotlin.jvm.functions.Function1<any,any>): java.util.Collection<any>;
			public static none(thisnone: string, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): boolean;
			public static singleOrNull(thissingleOrNull: string, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.lang.Character;
			public static mapIndexedTo(thismapIndexedTo: string, destination: java.util.Collection<any>, transform: kotlin.jvm.functions.Function2<any,any,any>): java.util.Collection<any>;
			public static windowedSequence(thiswindowedSequence: string, size: number, step: number, partialWindows: boolean, transform: kotlin.jvm.functions.Function1<any,any>): kotlin.sequences.Sequence<any>;
			public static groupBy(thisgroupBy: string, keySelector: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			public static takeLastWhile(thistakeLastWhile: string, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): string;
			public static toMutableList(thistoMutableList: string): java.util.List<java.lang.Character>;
			public static forEach(thisforEach: string, action: kotlin.jvm.functions.Function1<any,kotlin.Unit>): void;
			public static none(thisnone: string): boolean;
			public static firstOrNull(thisfirstOrNull: string): java.lang.Character;
			public static first(thisfirst: string, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): string;
			public static filterNot(thisfilterNot: string, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): string;
			public static groupBy(thisgroupBy: string, keySelector: kotlin.jvm.functions.Function1<any,any>, valueTransform: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			public static reduceRightIndexed(thisreduceRightIndexed: string, operation: kotlin.jvm.functions.Function3<any,any,any,java.lang.Character>): string;
			public static foldRight(thisfoldRight: string, initial: any, operation: kotlin.jvm.functions.Function2<any,any,any>): any;
			public static toHashSet(thistoHashSet: string): java.util.HashSet<java.lang.Character>;
			public static mapIndexedNotNull(thismapIndexedNotNull: string, transform: kotlin.jvm.functions.Function2<any,any,any>): java.util.List<any>;
			public static onEach(thisonEach: string, action: kotlin.jvm.functions.Function1<any,any>): string;
			public static single(thissingle: string): string;
			public static groupByTo(thisgroupByTo: string, destination: java.util.Map<any,any>, keySelector: kotlin.jvm.functions.Function1<any,any>, valueTransform: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			public static filterIndexedTo(thisfilterIndexedTo: string, destination: java.lang.Appendable, predicate: kotlin.jvm.functions.Function2<any,any,any>): java.lang.Appendable;
			/** @deprecated */
			public static min(thismin: string): java.lang.Character;
			public static last(thislast: string): string;
			public static slice(thisslice: string, indices: java.lang.Iterable<java.lang.Integer>): string;
			public static scan(thisscan: string, initial: any, operation: kotlin.jvm.functions.Function2<any,any,any>): java.util.List<any>;
			public static chunkedSequence(thischunkedSequence: string, size: number, transform: kotlin.jvm.functions.Function1<any,any>): kotlin.sequences.Sequence<any>;
			public static mapIndexedNotNullTo(thismapIndexedNotNullTo: string, destination: java.util.Collection<any>, transform: kotlin.jvm.functions.Function2<any,any,any>): java.util.Collection<any>;
			public static runningFoldIndexed(thisrunningFoldIndexed: string, initial: any, operation: kotlin.jvm.functions.Function3<any,any,any,any>): java.util.List<any>;
			/** @deprecated */
			public static scanReduceIndexed(thisscanReduceIndexed: string, operation: kotlin.jvm.functions.Function3<any,any,any,java.lang.Character>): java.util.List<java.lang.Character>;
			public static reduceIndexed(thisreduceIndexed: string, operation: kotlin.jvm.functions.Function3<any,any,any,java.lang.Character>): string;
			public static all(thisall: string, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): boolean;
			public static toCollection(thistoCollection: string, destination: java.util.Collection<any>): java.util.Collection<any>;
			public static any(thisany: string): boolean;
			public static reduceIndexedOrNull(thisreduceIndexedOrNull: string, operation: kotlin.jvm.functions.Function3<any,any,any,java.lang.Character>): java.lang.Character;
			public static lastOrNull(thislastOrNull: string): java.lang.Character;
			public static associateByTo(thisassociateByTo: string, destination: java.util.Map<any,any>, keySelector: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			public static randomOrNull(thisrandomOrNull: string, random: kotlin.random.Random): java.lang.Character;
			public static filter(thisfilter: string, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): string;
			public static flatMap(thisflatMap: string, transform: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static zipWithNext(thiszipWithNext: string): java.util.List<kotlin.Pair<java.lang.Character,java.lang.Character>>;
			public static associateTo(thisassociateTo: string, destination: java.util.Map<any,any>, transform: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			public static scanIndexed(thisscanIndexed: string, initial: any, operation: kotlin.jvm.functions.Function3<any,any,any,any>): java.util.List<any>;
			public static sumByDouble(thissumByDouble: string, selector: kotlin.jvm.functions.Function1<any,java.lang.Double>): number;
			public static takeWhile(thistakeWhile: string, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): string;
			public static reversed(thisreversed: string): string;
			public static filterTo(thisfilterTo: string, destination: java.lang.Appendable, predicate: kotlin.jvm.functions.Function1<any,any>): java.lang.Appendable;
			public static zip(thiszip: string, other: string, transform: kotlin.jvm.functions.Function2<any,any,any>): java.util.List<any>;
			public static chunkedSequence(thischunkedSequence: string, size: number): kotlin.sequences.Sequence<string>;
			/** @deprecated */
			public static max(thismax: string): java.lang.Character;
			public static count(thiscount: string, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): number;
			public static forEachIndexed(thisforEachIndexed: string, action: kotlin.jvm.functions.Function2<any,any,kotlin.Unit>): void;
			public static partition(thispartition: string, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): kotlin.Pair<string,string>;
			public static mapTo(thismapTo: string, destination: java.util.Collection<any>, transform: kotlin.jvm.functions.Function1<any,any>): java.util.Collection<any>;
			public static chunked(thischunked: string, size: number): java.util.List<string>;
			public static dropWhile(thisdropWhile: string, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): string;
			public static associate(thisassociate: string, transform: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			public static windowedSequence(thiswindowedSequence: string, size: number, step: number, partialWindows: boolean): kotlin.sequences.Sequence<string>;
			public static firstOrNull(thisfirstOrNull: string, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.lang.Character;
			public static asSequence(thisasSequence: string): kotlin.sequences.Sequence<java.lang.Character>;
			public static toList(thistoList: string): java.util.List<java.lang.Character>;
			/** @deprecated */
			public static maxWith(thismaxWith: string, comparator: java.util.Comparator<any>): java.lang.Character;
			public static dropLast(thisdropLast: string, n: number): string;
			public static dropLastWhile(thisdropLastWhile: string, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): string;
			public static reduce(thisreduce: string, operation: kotlin.jvm.functions.Function2<any,any,java.lang.Character>): string;
			public static random(thisrandom: string, random: kotlin.random.Random): string;
			public static filterNotTo(thisfilterNotTo: string, destination: java.lang.Appendable, predicate: kotlin.jvm.functions.Function1<any,any>): java.lang.Appendable;
			public static associateWithTo(thisassociateWithTo: string, destination: java.util.Map<any,any>, valueSelector: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			public static toSet(thistoSet: string): java.util.Set<java.lang.Character>;
			public static any(thisany: string, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): boolean;
			public static associateWith(thisassociateWith: string, valueSelector: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any,any>;
			public static mapNotNull(thismapNotNull: string, transform: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static foldIndexed(thisfoldIndexed: string, initial: any, operation: kotlin.jvm.functions.Function3<any,any,any,any>): any;
			public static windowed(thiswindowed: string, size: number, step: number, partialWindows: boolean): java.util.List<string>;
			/** @deprecated */
			public static minBy(thisminBy: string, selector: kotlin.jvm.functions.Function1<any,any>): java.lang.Character;
			public static lastOrNull(thislastOrNull: string, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.lang.Character;
			public static take(thistake: string, n: number): string;
			public static minWithOrNull(thisminWithOrNull: string, comparator: java.util.Comparator<any>): java.lang.Character;
		}
	}
}

declare module kotlin {
	export module text {
		export class SystemProperties extends java.lang.Object {
			public static class: java.lang.Class<kotlin.text.SystemProperties>;
			public static LINE_SEPARATOR: string;
			public static INSTANCE: kotlin.text.SystemProperties;
		}
	}
}

declare module kotlin {
	export module text {
		export class TypeAliasesKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.text.TypeAliasesKt>;
		}
	}
}

declare module kotlin {
	export module text {
		export class Typography extends java.lang.Object {
			public static class: java.lang.Class<kotlin.text.Typography>;
			public static quote: string;
			public static dollar: string;
			public static amp: string;
			public static less: string;
			public static greater: string;
			public static nbsp: string;
			public static times: string;
			public static cent: string;
			public static pound: string;
			public static section: string;
			public static copyright: string;
			public static leftGuillemete: string;
			public static rightGuillemete: string;
			public static registered: string;
			public static degree: string;
			public static plusMinus: string;
			public static paragraph: string;
			public static middleDot: string;
			public static half: string;
			public static ndash: string;
			public static mdash: string;
			public static leftSingleQuote: string;
			public static rightSingleQuote: string;
			public static lowSingleQuote: string;
			public static leftDoubleQuote: string;
			public static rightDoubleQuote: string;
			public static lowDoubleQuote: string;
			public static dagger: string;
			public static doubleDagger: string;
			public static bullet: string;
			public static ellipsis: string;
			public static prime: string;
			public static doublePrime: string;
			public static euro: string;
			public static tm: string;
			public static almostEqual: string;
			public static notEqual: string;
			public static lessOrEqual: string;
			public static greaterOrEqual: string;
			public static INSTANCE: kotlin.text.Typography;
		}
	}
}

declare module kotlin {
	export module text {
		export class UStringsKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.text.UStringsKt>;
			public static toULongOrNull(thistoULongOrNull: string, radix: number): kotlin.ULong;
			public static toUInt(thistoUInt: string): number;
			public static toUByteOrNull(thistoUByteOrNull: string, radix: number): kotlin.UByte;
			public static toUShort(thistoUShort: string, radix: number): number;
			public static toUInt(thistoUInt: string, radix: number): number;
			public static toUIntOrNull(thistoUIntOrNull: string): kotlin.UInt;
			public static toULong(thistoULong: string, radix: number): number;
			public static toUIntOrNull(thistoUIntOrNull: string, radix: number): kotlin.UInt;
			public static toUByte(thistoUByte: string, radix: number): number;
			public static toUShortOrNull(thistoUShortOrNull: string, radix: number): kotlin.UShort;
			public static toULongOrNull(thistoULongOrNull: string): kotlin.ULong;
			public static toUByte(thistoUByte: string): number;
			public static toUByteOrNull(thistoUByteOrNull: string): kotlin.UByte;
			public static toULong(thistoULong: string): number;
			public static toUShort(thistoUShort: string): number;
			public static toUShortOrNull(thistoUShortOrNull: string): kotlin.UShort;
			public static toString(thistoString: number, radix: number): string;
		}
	}
}

declare module kotlin {
	export module time {
		export abstract class AbstractDoubleTimeSource extends java.lang.Object implements kotlin.time.TimeSource {
			public static class: java.lang.Class<kotlin.time.AbstractDoubleTimeSource>;
			public markNow(): kotlin.time.TimeMark;
			public getUnit(): java.util.concurrent.TimeUnit;
			public constructor(unit: java.util.concurrent.TimeUnit);
			public read(): number;
		}
		export module AbstractDoubleTimeSource {
			export class DoubleTimeMark extends kotlin.time.TimeMark {
				public static class: java.lang.Class<kotlin.time.AbstractDoubleTimeSource.DoubleTimeMark>;
				public plus(duration: number): kotlin.time.TimeMark;
				public elapsedNow(): number;
			}
		}
	}
}

declare module kotlin {
	export module time {
		export abstract class AbstractLongTimeSource extends java.lang.Object implements kotlin.time.TimeSource {
			public static class: java.lang.Class<kotlin.time.AbstractLongTimeSource>;
			public markNow(): kotlin.time.TimeMark;
			public getUnit(): java.util.concurrent.TimeUnit;
			public constructor(unit: java.util.concurrent.TimeUnit);
			public read(): number;
		}
		export module AbstractLongTimeSource {
			export class LongTimeMark extends kotlin.time.TimeMark {
				public static class: java.lang.Class<kotlin.time.AbstractLongTimeSource.LongTimeMark>;
				public plus(duration: number): kotlin.time.TimeMark;
				public elapsedNow(): number;
			}
		}
	}
}

declare module kotlin {
	export module time {
		export class AdjustedTimeMark extends kotlin.time.TimeMark {
			public static class: java.lang.Class<kotlin.time.AdjustedTimeMark>;
			public plus(duration: number): kotlin.time.TimeMark;
			public getAdjustment(): number;
			public elapsedNow(): number;
			public getMark(): kotlin.time.TimeMark;
		}
	}
}

declare module kotlin {
	export module time {
		export class Duration extends java.lang.Comparable<kotlin.time.Duration> {
			public static class: java.lang.Class<kotlin.time.Duration>;
			public static Companion: kotlin.time.Duration.Companion;
			public static unaryMinus(this0: number): number;
			public static minus(this0: number, other: number): number;
			public static getInNanoseconds(this0: number): number;
			public static isInfinite(this0: number): boolean;
			public static equals(p1: number, p2: number): boolean;
			public static equals(double0: number, object1: any): boolean;
			public static isNegative(this0: number): boolean;
			public compareTo(double0: number): number;
			public static compareTo(this0: number, other: number): number;
			public static getInDays(this0: number): number;
			public static getMinutesComponent(this0: number): number;
			public static getSecondsComponent(this0: number): number;
			public static toLong(this0: number, unit: java.util.concurrent.TimeUnit): number;
			public static getAbsoluteValue(this0: number): number;
			public static toString(this0: number, unit: java.util.concurrent.TimeUnit, decimals: number): string;
			public static isFinite(this0: number): boolean;
			public static getInMinutes(this0: number): number;
			public static getNanosecondsComponent(this0: number): number;
			public static toIsoString(this0: number): string;
			public static toDouble(this0: number, unit: java.util.concurrent.TimeUnit): number;
			public static getInSeconds(this0: number): number;
			public static getInHours(this0: number): number;
			public static isPositive(this0: number): boolean;
			public static getInMilliseconds(this0: number): number;
			public static toString(this0: number): string;
			public static constructor(value: number): number;
			public static toLongMilliseconds(this0: number): number;
			public static getInMicroseconds(this0: number): number;
			public static div(this0: number, scale: number): number;
			public static toLongNanoseconds(this0: number): number;
			public static hashCode(double0: number): number;
			public toString(): string;
			public static getHoursComponent(this0: number): number;
			public equals(obj: any): boolean;
			public static times(this0: number, scale: number): number;
			public static toInt(this0: number, unit: java.util.concurrent.TimeUnit): number;
			public static plus(this0: number, other: number): number;
			public static div(this0: number, other: number): number;
			public static toComponents(this0: number, action: kotlin.jvm.functions.Function5<any,any,any,any,any,any>): any;
			public static toComponents(this0: number, action: kotlin.jvm.functions.Function4<any,any,any,any,any>): any;
			public static toComponents(this0: number, action: kotlin.jvm.functions.Function3<any,any,any,any>): any;
			public static toComponents(this0: number, action: kotlin.jvm.functions.Function2<any,any,any>): any;
			public hashCode(): number;
		}
		export module Duration {
			export class Companion extends java.lang.Object {
				public static class: java.lang.Class<kotlin.time.Duration.Companion>;
				public getINFINITE(): number;
				public getZERO(): number;
				public convert(value: number, sourceUnit: java.util.concurrent.TimeUnit, targetUnit: java.util.concurrent.TimeUnit): number;
			}
		}
	}
}

declare module kotlin {
	export module time {
		export class DurationKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.time.DurationKt>;
			public static toDuration(thistoDuration: number, unit: java.util.concurrent.TimeUnit): number;
			public static getSeconds(thisseconds: number): number;
			public static getDays(thisdays: number): number;
			public static getMilliseconds(thismilliseconds: number): number;
			public static getMicroseconds(thismicroseconds: number): number;
			public static getHours(thishours: number): number;
			public static getNanoseconds(thisnanoseconds: number): number;
			public static getMinutes(thisminutes: number): number;
		}
	}
}

declare module kotlin {
	export module time {
		export class DurationUnitKt extends kotlin.time.DurationUnitKt__DurationUnitKt {
			public static class: java.lang.Class<kotlin.time.DurationUnitKt>;
		}
		export module DurationUnitKt {
			export class WhenMappings extends java.lang.Object {
				public static class: java.lang.Class<kotlin.time.DurationUnitKt.WhenMappings>;
			}
		}
	}
}

declare module kotlin {
	export module time {
		export class DurationUnitKt__DurationUnitJvmKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.time.DurationUnitKt__DurationUnitJvmKt>;
			public static convertDurationUnit(value: number, sourceUnit: java.util.concurrent.TimeUnit, targetUnit: java.util.concurrent.TimeUnit): number;
			public constructor();
		}
	}
}

declare module kotlin {
	export module time {
		export class DurationUnitKt__DurationUnitKt extends kotlin.time.DurationUnitKt__DurationUnitJvmKt {
			public static class: java.lang.Class<kotlin.time.DurationUnitKt__DurationUnitKt>;
			public static shortName(thisshortName: java.util.concurrent.TimeUnit): string;
			public constructor();
		}
	}
}

declare module kotlin {
	export module time {
		export class ExperimentalTime extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kotlin.time.ExperimentalTime>;
			/**
			 * Constructs a new instance of the kotlin.time.ExperimentalTime interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				equals(object0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public toString(): string;
			public equals(obj: any): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module time {
		export class FormatToDecimalsKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.time.FormatToDecimalsKt>;
			public static formatUpToDecimals(value: number, decimals: number): string;
			public static formatToExactDecimals(value: number, decimals: number): string;
			public static formatScientific(value: number): string;
		}
	}
}

declare module kotlin {
	export module time {
		export class MeasureTimeKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.time.MeasureTimeKt>;
			public static measureTimedValue(thismeasureTimedValue: kotlin.time.TimeSource, block: kotlin.jvm.functions.Function0<any>): kotlin.time.TimedValue<any>;
			public static measureTime(thismeasureTime: kotlin.time.TimeSource, block: kotlin.jvm.functions.Function0<kotlin.Unit>): number;
			public static measureTime(block: kotlin.jvm.functions.Function0<kotlin.Unit>): number;
			public static measureTimedValue(block: kotlin.jvm.functions.Function0<any>): kotlin.time.TimedValue<any>;
		}
	}
}

declare module kotlin {
	export module time {
		export class MonotonicTimeSource extends kotlin.time.AbstractLongTimeSource implements kotlin.time.TimeSource {
			public static class: java.lang.Class<kotlin.time.MonotonicTimeSource>;
			public static INSTANCE: kotlin.time.MonotonicTimeSource;
			public markNow(): kotlin.time.TimeMark;
			public toString(): string;
			public read(): number;
		}
	}
}

declare module kotlin {
	export module time {
		export class TestTimeSource extends kotlin.time.AbstractLongTimeSource {
			public static class: java.lang.Class<kotlin.time.TestTimeSource>;
			public markNow(): kotlin.time.TimeMark;
			public plusAssign(duration: number): void;
			public constructor();
			public constructor(unit: java.util.concurrent.TimeUnit);
			public read(): number;
		}
	}
}

declare module kotlin {
	export module time {
		export abstract class TimeMark extends java.lang.Object {
			public static class: java.lang.Class<kotlin.time.TimeMark>;
			public hasPassedNow(): boolean;
			public minus(duration: number): kotlin.time.TimeMark;
			public plus(duration: number): kotlin.time.TimeMark;
			public hasNotPassedNow(): boolean;
			public constructor();
			public elapsedNow(): number;
		}
	}
}

declare module kotlin {
	export module time {
		export class TimeSource extends java.lang.Object {
			public static class: java.lang.Class<kotlin.time.TimeSource>;
			/**
			 * Constructs a new instance of the kotlin.time.TimeSource interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				markNow(): kotlin.time.TimeMark;
			});
			public constructor();
			public static Companion: kotlin.time.TimeSource.Companion;
			public markNow(): kotlin.time.TimeMark;
		}
		export module TimeSource {
			export class Companion extends java.lang.Object {
				public static class: java.lang.Class<kotlin.time.TimeSource.Companion>;
			}
			export class Monotonic extends java.lang.Object implements kotlin.time.TimeSource {
				public static class: java.lang.Class<kotlin.time.TimeSource.Monotonic>;
				public static INSTANCE: kotlin.time.TimeSource.Monotonic;
				public markNow(): kotlin.time.TimeMark;
				public toString(): string;
			}
		}
	}
}

declare module kotlin {
	export module time {
		export class TimeSourceKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.time.TimeSourceKt>;
		}
	}
}

declare module kotlin {
	export module time {
		export class TimeSourcesKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.time.TimeSourcesKt>;
		}
	}
}

declare module kotlin {
	export module time {
		export class TimedValue<T>  extends java.lang.Object {
			public static class: java.lang.Class<kotlin.time.TimedValue<any>>;
			public component2(): number;
			public copy(value: T, duration: number): kotlin.time.TimedValue<T>;
			public toString(): string;
			public equals(obj: any): boolean;
			public component1(): T;
			public getDuration(): number;
			public getValue(): T;
			public hashCode(): number;
		}
	}
}

//Generics information:
//kotlin.DeepRecursiveFunction:2
//kotlin.DeepRecursiveScope:2
//kotlin.DeepRecursiveScopeImpl:2
//kotlin.Function:1
//kotlin.InitializedLazyImpl:1
//kotlin.Lazy:1
//kotlin.Pair:2
//kotlin.Result:1
//kotlin.SafePublicationLazyImpl:1
//kotlin.SynchronizedLazyImpl:1
//kotlin.Triple:3
//kotlin.UnsafeLazyImpl:1
//kotlin.collections.AbstractCollection:1
//kotlin.collections.AbstractIterator:1
//kotlin.collections.AbstractList:1
//kotlin.collections.AbstractList.SubList:1
//kotlin.collections.AbstractMap:2
//kotlin.collections.AbstractMutableCollection:1
//kotlin.collections.AbstractMutableList:1
//kotlin.collections.AbstractMutableMap:2
//kotlin.collections.AbstractMutableSet:1
//kotlin.collections.AbstractSet:1
//kotlin.collections.ArrayAsCollection:1
//kotlin.collections.ArrayDeque:1
//kotlin.collections.Grouping:2
//kotlin.collections.IndexedValue:1
//kotlin.collections.IndexingIterable:1
//kotlin.collections.IndexingIterator:1
//kotlin.collections.MapWithDefault:2
//kotlin.collections.MapWithDefaultImpl:2
//kotlin.collections.MovingSubList:1
//kotlin.collections.MutableMapWithDefault:2
//kotlin.collections.MutableMapWithDefaultImpl:2
//kotlin.collections.ReversedList:1
//kotlin.collections.ReversedListReadOnly:1
//kotlin.collections.RingBuffer:1
//kotlin.collections.builders.ListBuilder:1
//kotlin.collections.builders.ListBuilder.Itr:1
//kotlin.collections.builders.MapBuilder:2
//kotlin.collections.builders.MapBuilder.EntriesItr:2
//kotlin.collections.builders.MapBuilder.EntryRef:2
//kotlin.collections.builders.MapBuilder.Itr:2
//kotlin.collections.builders.MapBuilder.KeysItr:2
//kotlin.collections.builders.MapBuilder.ValuesItr:2
//kotlin.collections.builders.MapBuilderEntries:2
//kotlin.collections.builders.MapBuilderKeys:1
//kotlin.collections.builders.MapBuilderValues:1
//kotlin.collections.builders.SetBuilder:1
//kotlin.comparisons.ReversedComparator:1
//kotlin.coroutines.AbstractCoroutineContextKey:1
//kotlin.coroutines.Continuation:1
//kotlin.coroutines.CoroutineContext.Key:1
//kotlin.coroutines.SafeContinuation:1
//kotlin.jvm.functions.Function0:1
//kotlin.jvm.functions.Function1:2
//kotlin.jvm.functions.Function10:11
//kotlin.jvm.functions.Function11:12
//kotlin.jvm.functions.Function12:13
//kotlin.jvm.functions.Function13:14
//kotlin.jvm.functions.Function14:15
//kotlin.jvm.functions.Function15:16
//kotlin.jvm.functions.Function16:17
//kotlin.jvm.functions.Function17:18
//kotlin.jvm.functions.Function18:19
//kotlin.jvm.functions.Function19:20
//kotlin.jvm.functions.Function2:3
//kotlin.jvm.functions.Function20:21
//kotlin.jvm.functions.Function21:22
//kotlin.jvm.functions.Function22:23
//kotlin.jvm.functions.Function3:4
//kotlin.jvm.functions.Function4:5
//kotlin.jvm.functions.Function5:6
//kotlin.jvm.functions.Function6:7
//kotlin.jvm.functions.Function7:8
//kotlin.jvm.functions.Function8:9
//kotlin.jvm.functions.Function9:10
//kotlin.jvm.functions.FunctionN:1
//kotlin.jvm.internal.ArrayIterator:1
//kotlin.jvm.internal.FunctionBase:1
//kotlin.jvm.internal.Lambda:1
//kotlin.jvm.internal.PrimitiveSpreadBuilder:1
//kotlin.jvm.internal.Ref.ObjectRef:1
//kotlin.properties.NotNullVar:1
//kotlin.properties.ObservableProperty:1
//kotlin.properties.PropertyDelegateProvider:2
//kotlin.properties.ReadOnlyProperty:2
//kotlin.properties.ReadWriteProperty:2
//kotlin.ranges.ClosedFloatingPointRange:1
//kotlin.ranges.ClosedRange:1
//kotlin.ranges.ComparableRange:1
//kotlin.reflect.KCallable:1
//kotlin.reflect.KClass:1
//kotlin.reflect.KFunction:1
//kotlin.reflect.KMutableProperty:1
//kotlin.reflect.KMutableProperty.Setter:1
//kotlin.reflect.KMutableProperty0:1
//kotlin.reflect.KMutableProperty0.Setter:1
//kotlin.reflect.KMutableProperty1:2
//kotlin.reflect.KMutableProperty1.Setter:2
//kotlin.reflect.KMutableProperty2:3
//kotlin.reflect.KMutableProperty2.Setter:3
//kotlin.reflect.KProperty:1
//kotlin.reflect.KProperty.Accessor:1
//kotlin.reflect.KProperty.Getter:1
//kotlin.reflect.KProperty0:1
//kotlin.reflect.KProperty0.Getter:1
//kotlin.reflect.KProperty1:2
//kotlin.reflect.KProperty1.Getter:2
//kotlin.reflect.KProperty2:3
//kotlin.reflect.KProperty2.Getter:3
//kotlin.sequences.ConstrainedOnceSequence:1
//kotlin.sequences.DistinctIterator:2
//kotlin.sequences.DistinctSequence:2
//kotlin.sequences.DropSequence:1
//kotlin.sequences.DropTakeSequence:1
//kotlin.sequences.DropWhileSequence:1
//kotlin.sequences.FilteringSequence:1
//kotlin.sequences.FlatteningSequence:3
//kotlin.sequences.GeneratorSequence:1
//kotlin.sequences.IndexingSequence:1
//kotlin.sequences.MergingSequence:3
//kotlin.sequences.Sequence:1
//kotlin.sequences.SequenceBuilderIterator:1
//kotlin.sequences.SequenceScope:1
//kotlin.sequences.SubSequence:1
//kotlin.sequences.TakeSequence:1
//kotlin.sequences.TakeWhileSequence:1
//kotlin.sequences.TransformingIndexedSequence:2
//kotlin.sequences.TransformingSequence:2
//kotlin.time.TimedValue:1

