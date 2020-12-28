declare module androidx {
	export module lifecycle {
		export class DispatchQueue extends java.lang.Object {
			public static class: java.lang.Class<androidx.lifecycle.DispatchQueue>;
			public resume(): void;
			public finish(): void;
			public runOrEnqueue(runnable: java.lang.Runnable): void;
			public constructor();
			public drainQueue(): void;
			public pause(): void;
		}
	}
}

declare module androidx {
	export module lifecycle {
		export class LifecycleController extends java.lang.Object {
			public static class: java.lang.Class<androidx.lifecycle.LifecycleController>;
			public finish(): void;
			public constructor(lifecycle: androidx.lifecycle.Lifecycle, minState: androidx.lifecycle.Lifecycle.State, dispatchQueue: androidx.lifecycle.DispatchQueue, parentJob: kotlinx.coroutines.Job);
		}
	}
}

declare module androidx {
	export module lifecycle {
		export abstract class LifecycleCoroutineScope extends java.lang.Object implements kotlinx.coroutines.CoroutineScope {
			public static class: java.lang.Class<androidx.lifecycle.LifecycleCoroutineScope>;
			public getLifecycle$lifecycle_runtime_ktx_release(): androidx.lifecycle.Lifecycle;
			public getCoroutineContext(): kotlin.coroutines.CoroutineContext;
			public launchWhenResumed(block: kotlin.jvm.functions.Function2<any,any,any>): kotlinx.coroutines.Job;
			public constructor();
			public launchWhenCreated(block: kotlin.jvm.functions.Function2<any,any,any>): kotlinx.coroutines.Job;
			public launchWhenStarted(block: kotlin.jvm.functions.Function2<any,any,any>): kotlinx.coroutines.Job;
		}
	}
}

declare module androidx {
	export module lifecycle {
		export class LifecycleCoroutineScopeImpl extends androidx.lifecycle.LifecycleCoroutineScope implements androidx.lifecycle.LifecycleEventObserver {
			public static class: java.lang.Class<androidx.lifecycle.LifecycleCoroutineScopeImpl>;
			public constructor(lifecycle: androidx.lifecycle.Lifecycle, coroutineContext: kotlin.coroutines.CoroutineContext);
			public getLifecycle$lifecycle_runtime_ktx_release(): androidx.lifecycle.Lifecycle;
			public onStateChanged(source: androidx.lifecycle.LifecycleOwner, event: androidx.lifecycle.Lifecycle.Event): void;
			public getCoroutineContext(): kotlin.coroutines.CoroutineContext;
			public register(): void;
			public constructor();
		}
	}
}

declare module androidx {
	export module lifecycle {
		export class LifecycleKt extends java.lang.Object {
			public static class: java.lang.Class<androidx.lifecycle.LifecycleKt>;
			public static getCoroutineScope(thiscoroutineScope: androidx.lifecycle.Lifecycle): androidx.lifecycle.LifecycleCoroutineScope;
		}
	}
}

declare module androidx {
	export module lifecycle {
		export class LifecycleOwnerKt extends java.lang.Object {
			public static class: java.lang.Class<androidx.lifecycle.LifecycleOwnerKt>;
			public static getLifecycleScope(thislifecycleScope: androidx.lifecycle.LifecycleOwner): androidx.lifecycle.LifecycleCoroutineScope;
		}
	}
}

declare module androidx {
	export module lifecycle {
		export class PausingDispatcher extends kotlinx.coroutines.CoroutineDispatcher {
			public static class: java.lang.Class<androidx.lifecycle.PausingDispatcher>;
			public dispatchQueue: androidx.lifecycle.DispatchQueue;
			public dispatch(coroutineContext0: kotlin.coroutines.CoroutineContext, runnable1: java.lang.Runnable): void;
			public minusKey(key: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext;
			public fold(initial: any, operation: kotlin.jvm.functions.Function2<any,any,any>): any;
			public get(key: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext.Element;
			public interceptContinuation(continuation: kotlin.coroutines.Continuation<any>): kotlin.coroutines.Continuation<any>;
			public getKey(): kotlin.coroutines.CoroutineContext.Key<any>;
			public constructor(key: kotlin.coroutines.CoroutineContext.Key<any>);
			public constructor();
			public releaseInterceptedContinuation(continuation: kotlin.coroutines.Continuation<any>): void;
			public dispatch(context: kotlin.coroutines.CoroutineContext, block: java.lang.Runnable): void;
		}
	}
}

declare module androidx {
	export module lifecycle {
		export class PausingDispatcherKt extends java.lang.Object {
			public static class: java.lang.Class<androidx.lifecycle.PausingDispatcherKt>;
			public static whenStarted(thiswhenStarted: androidx.lifecycle.LifecycleOwner, block: kotlin.jvm.functions.Function2<any,any,any>, completion: kotlin.coroutines.Continuation<any>): any;
			public static whenCreated(thiswhenCreated: androidx.lifecycle.LifecycleOwner, block: kotlin.jvm.functions.Function2<any,any,any>, completion: kotlin.coroutines.Continuation<any>): any;
			public static whenResumed(thiswhenResumed: androidx.lifecycle.LifecycleOwner, block: kotlin.jvm.functions.Function2<any,any,any>, completion: kotlin.coroutines.Continuation<any>): any;
			public static whenCreated(thiswhenCreated: androidx.lifecycle.Lifecycle, block: kotlin.jvm.functions.Function2<any,any,any>, completion: kotlin.coroutines.Continuation<any>): any;
			public static whenStarted(thiswhenStarted: androidx.lifecycle.Lifecycle, block: kotlin.jvm.functions.Function2<any,any,any>, completion: kotlin.coroutines.Continuation<any>): any;
			public static whenStateAtLeast(thiswhenStateAtLeast: androidx.lifecycle.Lifecycle, minState: androidx.lifecycle.Lifecycle.State, block: kotlin.jvm.functions.Function2<any,any,any>, completion: kotlin.coroutines.Continuation<any>): any;
			public static whenResumed(thiswhenResumed: androidx.lifecycle.Lifecycle, block: kotlin.jvm.functions.Function2<any,any,any>, completion: kotlin.coroutines.Continuation<any>): any;
		}
	}
}

//Generics information:

