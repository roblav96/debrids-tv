declare module kotlinx {
	export module coroutines {
		export module android {
			export class AndroidDispatcherFactory extends java.lang.Object implements kotlinx.coroutines.internal.MainDispatcherFactory {
				public static class: java.lang.Class<kotlinx.coroutines.android.AndroidDispatcherFactory>;
				public hintOnError(): string;
				public getLoadPriority(): number;
				public createDispatcher(list0: java.util.List<any>): kotlinx.coroutines.MainCoroutineDispatcher;
				public createDispatcher(allFactories: java.util.List<any>): kotlinx.coroutines.android.HandlerContext;
				public constructor();
			}
		}
	}
}

declare module kotlinx {
	export module coroutines {
		export module android {
			export class AndroidExceptionPreHandler extends kotlin.coroutines.AbstractCoroutineContextElement {
				public static class: java.lang.Class<kotlinx.coroutines.android.AndroidExceptionPreHandler>;
				public get(key: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext.Element;
				public invoke(): any;
				public plus(context: kotlin.coroutines.CoroutineContext): kotlin.coroutines.CoroutineContext;
				public fold(initial: any, operation: kotlin.jvm.functions.Function2<any,any,any>): any;
				public getKey(): kotlin.coroutines.CoroutineContext.Key<any>;
				public invoke(): java.lang.reflect.Method;
				public handleException(context: kotlin.coroutines.CoroutineContext, exception: java.lang.Throwable): void;
				public constructor(key: kotlin.coroutines.CoroutineContext.Key<any>);
				public minusKey(key: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext;
				public constructor();
			}
		}
	}
}

declare module kotlinx {
	export module coroutines {
		export module android {
			export class HandlerContext extends kotlinx.coroutines.android.HandlerDispatcher implements kotlinx.coroutines.Delay {
				public static class: java.lang.Class<kotlinx.coroutines.android.HandlerContext>;
				public scheduleResumeAfterDelay(timeMillis: number, continuation: kotlinx.coroutines.CancellableContinuation<any>): void;
				public getImmediate(): kotlinx.coroutines.MainCoroutineDispatcher;
				public fold(initial: any, operation: kotlin.jvm.functions.Function2<any,any,any>): any;
				public delay(time: number, param1: kotlin.coroutines.Continuation<any>): any;
				public interceptContinuation(continuation: kotlin.coroutines.Continuation<any>): kotlin.coroutines.Continuation<any>;
				public getImmediate(): kotlinx.coroutines.android.HandlerDispatcher;
				public dispatch(coroutineContext0: kotlin.coroutines.CoroutineContext, runnable1: java.lang.Runnable): void;
				public minusKey(key: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext;
				public getImmediate(): kotlinx.coroutines.android.HandlerContext;
				public toString(): string;
				public constructor();
				public get(key: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext.Element;
				public equals(obj: any): boolean;
				public equals(other: any): boolean;
				public isDispatchNeeded(context: kotlin.coroutines.CoroutineContext): boolean;
				public invokeOnTimeout(timeMillis: number, block: java.lang.Runnable): kotlinx.coroutines.DisposableHandle;
				public hashCode(): number;
				public constructor(handler: globalAndroid.os.Handler, name: string);
				public releaseInterceptedContinuation(continuation: kotlin.coroutines.Continuation<any>): void;
				public dispatch(context: kotlin.coroutines.CoroutineContext, block: java.lang.Runnable): void;
				public getKey(): kotlin.coroutines.CoroutineContext.Key<any>;
				public constructor(key: kotlin.coroutines.CoroutineContext.Key<any>);
			}
		}
	}
}

declare module kotlinx {
	export module coroutines {
		export module android {
			export abstract class HandlerDispatcher extends kotlinx.coroutines.MainCoroutineDispatcher implements kotlinx.coroutines.Delay {
				public static class: java.lang.Class<kotlinx.coroutines.android.HandlerDispatcher>;
				public get(key: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext.Element;
				public getImmediate(): kotlinx.coroutines.MainCoroutineDispatcher;
				public fold(initial: any, operation: kotlin.jvm.functions.Function2<any,any,any>): any;
				public delay(time: number, param1: kotlin.coroutines.Continuation<any>): any;
				public invokeOnTimeout(timeMillis: number, block: java.lang.Runnable): kotlinx.coroutines.DisposableHandle;
				public scheduleResumeAfterDelay(long0: number, cancellableContinuation1: kotlinx.coroutines.CancellableContinuation<any>): void;
				public interceptContinuation(continuation: kotlin.coroutines.Continuation<any>): kotlin.coroutines.Continuation<any>;
				public releaseInterceptedContinuation(continuation: kotlin.coroutines.Continuation<any>): void;
				public getImmediate(): kotlinx.coroutines.android.HandlerDispatcher;
				public getKey(): kotlin.coroutines.CoroutineContext.Key<any>;
				public minusKey(key: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext;
			}
		}
	}
}

declare module kotlinx {
	export module coroutines {
		export module android {
			export class HandlerDispatcherKt extends java.lang.Object {
				public static class: java.lang.Class<kotlinx.coroutines.android.HandlerDispatcherKt>;
				public static Main: kotlinx.coroutines.android.HandlerDispatcher;
				public static asHandler(thisasHandler: globalAndroid.os.Looper, async: boolean): globalAndroid.os.Handler;
				public static from(thisasCoroutineDispatcher: globalAndroid.os.Handler, name: string): kotlinx.coroutines.android.HandlerDispatcher;
				public static from(thisasCoroutineDispatcher: globalAndroid.os.Handler): kotlinx.coroutines.android.HandlerDispatcher;
				public static awaitFrame(completion: kotlin.coroutines.Continuation<any>): any;
			}
		}
	}
}

//Generics information:

