declare module com {
	export module google {
		export module common {
			export module util {
				export module concurrent {
					export module internal {
						export abstract class InternalFutureFailureAccess extends java.lang.Object {
							public static class: java.lang.Class<com.google.common.util.concurrent.internal.InternalFutureFailureAccess>;
							public constructor();
							public tryInternalFastPathGetFailure(): java.lang.Throwable;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module common {
			export module util {
				export module concurrent {
					export module internal {
						export class InternalFutures extends java.lang.Object {
							public static class: java.lang.Class<com.google.common.util.concurrent.internal.InternalFutures>;
							public static tryInternalFastPathGetFailure(future: com.google.common.util.concurrent.internal.InternalFutureFailureAccess): java.lang.Throwable;
						}
					}
				}
			}
		}
	}
}

//Generics information:

