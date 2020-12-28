export class ModuleInfo extends java.lang.Object {
	public static class: java.lang.Class<ModuleInfo>;
}

declare module kotlin {
	export module internal {
		export module jdk7 {
			export class JDK7PlatformImplementations extends kotlin.internal.PlatformImplementations {
				public static class: java.lang.Class<kotlin.internal.jdk7.JDK7PlatformImplementations>;
				public addSuppressed(cause: java.lang.Throwable, exception: java.lang.Throwable): void;
				public getSuppressed(exception: java.lang.Throwable): java.util.List<java.lang.Throwable>;
				public constructor();
			}
		}
	}
}

declare module kotlin {
	export module jdk7 {
		export class AutoCloseableKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.jdk7.AutoCloseableKt>;
			public static closeFinally(thiscloseFinally: java.lang.AutoCloseable, cause: java.lang.Throwable): void;
		}
	}
}

//Generics information:

