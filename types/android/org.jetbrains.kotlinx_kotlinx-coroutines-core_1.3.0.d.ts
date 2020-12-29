declare module kotlinx {
	export module coroutines {
		export abstract class AbstractCoroutine<T>  extends kotlinx.coroutines.JobSupport {
			public static class: java.lang.Class<kotlinx.coroutines.AbstractCoroutine>;
			public parentContext: kotlin.coroutines.CoroutineContext;
			public getContext(): kotlin.coroutines.CoroutineContext;
			public minusKey(key: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext;
			public getCancellationException(): java.util.concurrent.CancellationException;
			public get(key: kotlin.coroutines.CoroutineContext.Key): kotlin.coroutines.CoroutineContext.Element;
			public registerSelectClause0(select: kotlinx.coroutines.selects.SelectInstance, block: kotlin.jvm.functions.Function1): void;
			public onStart(): void;
			public constructor(parentContext: kotlin.coroutines.CoroutineContext, active: boolean);
			public invokeOnCompletion(onCancelling: boolean, invokeImmediately: boolean, handler: kotlin.jvm.functions.Function1<any,kotlin.Unit>): kotlinx.coroutines.DisposableHandle;
			/** @deprecated */
			public plus(other: kotlinx.coroutines.Job): kotlinx.coroutines.Job;
			public nameString(): string;
			public onCompletionInternal(state: any): void;
			public plus(context: kotlin.coroutines.CoroutineContext): kotlin.coroutines.CoroutineContext;
			public resumeWith(result: any): void;
			public join(completion: kotlin.coroutines.Continuation<any>): any;
			public fold(initial: any, operation: kotlin.jvm.functions.Function2): any;
			public onCancelled(cause: java.lang.Throwable, handled: boolean): void;
			public start(start: kotlinx.coroutines.CoroutineStart, block: kotlin.jvm.functions.Function1<any,any>): void;
			public parentCancelled(parentJob: kotlinx.coroutines.ParentJob): void;
			public start(): boolean;
			public isCompleted(): boolean;
			public handleOnCompletionException(exception: java.lang.Throwable): void;
			public getDefaultResumeMode(): number;
			public getChildren(): kotlin.sequences.Sequence<kotlinx.coroutines.Job>;
			public start(start: kotlinx.coroutines.CoroutineStart, receiver: any, block: kotlin.jvm.functions.Function2): void;
			public getKey(): kotlin.coroutines.CoroutineContext.Key<any>;
			public getOnJoin(): kotlinx.coroutines.selects.SelectClause0;
			public isCancelled(): boolean;
			public invokeOnCompletion(handler: kotlin.jvm.functions.Function1<any,kotlin.Unit>): kotlinx.coroutines.DisposableHandle;
			public onStartInternal(): void;
			public attachChild(child: kotlinx.coroutines.ChildJob): kotlinx.coroutines.ChildHandle;
			public initParentJob(): void;
			public getChildJobCancellationCause(): java.util.concurrent.CancellationException;
			public getCoroutineContext(): kotlin.coroutines.CoroutineContext;
			public onCompleted(value: any): void;
			public constructor(active: boolean);
			public cancel(cause: java.util.concurrent.CancellationException): void;
			public isActive(): boolean;
		}
	}
}

declare module kotlinx {
	export module coroutines {
		export class Active extends java.lang.Object implements kotlinx.coroutines.NotCompleted {
			public static class: java.lang.Class<kotlinx.coroutines.Active>;
			public static INSTANCE: kotlinx.coroutines.Active;
			public toString(): string;
		}
	}
}

declare module kotlinx {
	export module coroutines {
		export class AwaitAll<T>  extends java.lang.Object {
			public static class: java.lang.Class<kotlinx.coroutines.AwaitAll>;
			public constructor(deferreds: native.Array<kotlinx.coroutines.Deferred<any>>);
			public await(completion: kotlin.coroutines.Continuation<any>): any;
		}
		export module AwaitAll {
			export class AwaitAllNode extends kotlinx.coroutines.JobNode<kotlinx.coroutines.Job> {
				public static class: java.lang.Class<kotlinx.coroutines.AwaitAll.AwaitAllNode>;
				public handle: kotlinx.coroutines.DisposableHandle;
				public invoke(object0: any): any;
				public getHandle(): kotlinx.coroutines.DisposableHandle;
				public invoke(throwable0: java.lang.Throwable): void;
				public setHandle(param0: kotlinx.coroutines.DisposableHandle): void;
				public getList(): kotlinx.coroutines.NodeList;
				public constructor();
				public constructor(outer: kotlinx.coroutines.CancellableContinuation<any>, continuation: kotlinx.coroutines.Job);
				public setDisposer(param0: kotlinx.coroutines.AwaitAll.DisposeHandlersOnCancel): void;
				public getDisposer(): kotlinx.coroutines.AwaitAll.DisposeHandlersOnCancel;
				public dispose(): void;
				public isActive(): boolean;
				public constructor(job: any);
				public invoke(cause: java.lang.Throwable): void;
			}
			export class DisposeHandlersOnCancel extends kotlinx.coroutines.CancelHandler {
				public static class: java.lang.Class<kotlinx.coroutines.AwaitAll.DisposeHandlersOnCancel>;
				public invoke(object0: any): any;
				public invoke(throwable0: java.lang.Throwable): void;
				public disposeAll(): void;
				public constructor(outer: native.Array<kotlinx.coroutines.AwaitAll.AwaitAllNode>);
				public invoke(cause: java.lang.Throwable): void;
				public toString(): string;
				public constructor();
			}
		}
	}
}

declare module kotlinx {
	export module coroutines {
		export class AwaitKt extends java.lang.Object {
			public static class: java.lang.Class<kotlinx.coroutines.AwaitKt>;
			public static joinAll(jobs: native.Array<kotlinx.coroutines.Job>, completion: kotlin.coroutines.Continuation<any>): any;
			public static joinAll(thisjoinAll: java.util.Collection<any>, completion: kotlin.coroutines.Continuation<any>): any;
			public static awaitAll(deferreds: native.Array<kotlinx.coroutines.Deferred>, completion: kotlin.coroutines.Continuation): any;
			public static awaitAll(thisawaitAll: java.util.Collection, completion: kotlin.coroutines.Continuation): any;
		}
	}
}

declare module kotlinx {
	export module coroutines {
		export class BlockingCoroutine<T>  extends kotlinx.coroutines.AbstractCoroutine<any> {
			public static class: java.lang.Class<kotlinx.coroutines.BlockingCoroutine>;
			public getContext(): kotlin.coroutines.CoroutineContext;
			public getCancellationException(): java.util.concurrent.CancellationException;
			public registerSelectClause0(select: kotlinx.coroutines.selects.SelectInstance, block: kotlin.jvm.functions.Function1): void;
			public constructor(parentContext: kotlin.coroutines.CoroutineContext, active: boolean);
			public invokeOnCompletion(onCancelling: boolean, invokeImmediately: boolean, handler: kotlin.jvm.functions.Function1<any,kotlin.Unit>): kotlinx.coroutines.DisposableHandle;
			/** @deprecated */
			public plus(other: kotlinx.coroutines.Job): kotlinx.coroutines.Job;
			public plus(context: kotlin.coroutines.CoroutineContext): kotlin.coroutines.CoroutineContext;
			public afterCompletionInternal(state: any, mode: number): void;
			public resumeWith(result: any): void;
			public join(completion: kotlin.coroutines.Continuation<any>): any;
			public start(start: kotlinx.coroutines.CoroutineStart, block: kotlin.jvm.functions.Function1<any,any>): void;
			public parentCancelled(parentJob: kotlinx.coroutines.ParentJob): void;
			public isCompleted(): boolean;
			public start(): boolean;
			public constructor(parentContext: kotlin.coroutines.CoroutineContext, blockedThread: java.lang.Thread, eventLoop: kotlinx.coroutines.EventLoop);
			public getChildren(): kotlin.sequences.Sequence<kotlinx.coroutines.Job>;
			public start(start: kotlinx.coroutines.CoroutineStart, receiver: any, block: kotlin.jvm.functions.Function2): void;
			public getOnJoin(): kotlinx.coroutines.selects.SelectClause0;
			public isCancelled(): boolean;
			public invokeOnCompletion(handler: kotlin.jvm.functions.Function1<any,kotlin.Unit>): kotlinx.coroutines.DisposableHandle;
			public joinBlocking(): any;
			public attachChild(child: kotlinx.coroutines.ChildJob): kotlinx.coroutines.ChildHandle;
			public isScopedCoroutine(): boolean;
			public getChildJobCancellationCause(): java.util.concurrent.CancellationException;
			public getCoroutineContext(): kotlin.coroutines.CoroutineContext;
			public constructor(active: boolean);
			public cancel(cause: java.util.concurrent.CancellationException): void;
			public isActive(): boolean;
		}
	}
}

declare module kotlinx {
	export module coroutines {
		export class BlockingEventLoop extends kotlinx.coroutines.EventLoopImplBase {
			public static class: java.lang.Class<kotlinx.coroutines.BlockingEventLoop>;
			public minusKey(key: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext;
			public get(key: kotlin.coroutines.CoroutineContext.Key): kotlin.coroutines.CoroutineContext.Element;
			public interceptContinuation(continuation: kotlin.coroutines.Continuation): kotlin.coroutines.Continuation;
			public getKey(): kotlin.coroutines.CoroutineContext.Key<any>;
			public constructor();
			public releaseInterceptedContinuation(continuation: kotlin.coroutines.Continuation<any>): void;
			public getThread(): java.lang.Thread;
			public fold(initial: any, operation: kotlin.jvm.functions.Function2): any;
			public invokeOnTimeout(timeMillis: number, block: java.lang.Runnable): kotlinx.coroutines.DisposableHandle;
			public constructor(thread: java.lang.Thread);
			public scheduleResumeAfterDelay(timeMillis: number, continuation: kotlinx.coroutines.CancellableContinuation<any>): void;
			public constructor(key: kotlin.coroutines.CoroutineContext.Key<any>);
			public delay(time: number, param1: kotlin.coroutines.Continuation<any>): any;
		}
	}
}

declare module kotlinx {
	export module coroutines {
		export class BuildersKt extends java.lang.Object {
			public static class: java.lang.Class<kotlinx.coroutines.BuildersKt>;
			public static runBlocking(context: kotlin.coroutines.CoroutineContext, block: kotlin.jvm.functions.Function2): any;
			public static async(thisasync: kotlinx.coroutines.CoroutineScope, context: kotlin.coroutines.CoroutineContext, start: kotlinx.coroutines.CoroutineStart, block: kotlin.jvm.functions.Function2): kotlinx.coroutines.Deferred;
			public static invoke(thisinvoke: kotlinx.coroutines.CoroutineDispatcher, block: kotlin.jvm.functions.Function2, completion: kotlin.coroutines.Continuation): any;
			public static withContext(context: kotlin.coroutines.CoroutineContext, block: kotlin.jvm.functions.Function2, completion: kotlin.coroutines.Continuation): any;
			public static launch(thislaunch: kotlinx.coroutines.CoroutineScope, context: kotlin.coroutines.CoroutineContext, start: kotlinx.coroutines.CoroutineStart, block: kotlin.jvm.functions.Function2<any,any,any>): kotlinx.coroutines.Job;
		}
	}
}

declare module kotlinx {
	export module coroutines {
		export class BuildersKt__BuildersKt extends java.lang.Object {
			public static class: java.lang.Class<kotlinx.coroutines.BuildersKt__BuildersKt>;
			public static runBlocking(context: kotlin.coroutines.CoroutineContext, block: kotlin.jvm.functions.Function2): any;
		}
	}
}

declare module kotlinx {
	export module coroutines {
		export class BuildersKt__Builders_commonKt extends java.lang.Object {
			public static class: java.lang.Class<kotlinx.coroutines.BuildersKt__Builders_commonKt>;
			public static async(thisasync: kotlinx.coroutines.CoroutineScope, context: kotlin.coroutines.CoroutineContext, start: kotlinx.coroutines.CoroutineStart, block: kotlin.jvm.functions.Function2): kotlinx.coroutines.Deferred;
			public static invoke(thisinvoke: kotlinx.coroutines.CoroutineDispatcher, block: kotlin.jvm.functions.Function2, completion: kotlin.coroutines.Continuation): any;
			public static launch(thislaunch: kotlinx.coroutines.CoroutineScope, context: kotlin.coroutines.CoroutineContext, start: kotlinx.coroutines.CoroutineStart, block: kotlin.jvm.functions.Function2<any,any,any>): kotlinx.coroutines.Job;
			public static withContext(context: kotlin.coroutines.CoroutineContext, block: kotlin.jvm.functions.Function2, completion: kotlin.coroutines.Continuation): any;
		}
	}
}

declare module kotlinx {
	export module coroutines {
		export class CancelFutureOnCancel extends kotlinx.coroutines.CancelHandler {
			public static class: java.lang.Class<kotlinx.coroutines.CancelFutureOnCancel>;
			public invoke(throwable0: java.lang.Throwable): void;
			public invoke(cause: java.lang.Throwable): void;
			public toString(): string;
			public constructor(future: java.util.concurrent.Future<any>);
			public constructor();
			public invoke(object0: any): any;
		}
	}
}

declare module kotlinx {
	export module coroutines {
		export class CancelFutureOnCompletion extends kotlinx.coroutines.JobNode<kotlinx.coroutines.Job> {
			public static class: java.lang.Class<kotlinx.coroutines.CancelFutureOnCompletion>;
			public invoke(throwable0: java.lang.Throwable): void;
			public invoke(cause: java.lang.Throwable): void;
			public toString(): string;
			public constructor(job: kotlinx.coroutines.Job, future: java.util.concurrent.Future<any>);
			public constructor(job: any);
			public dispose(): void;
			public constructor();
			public invoke(object0: any): any;
			public getList(): kotlinx.coroutines.NodeList;
			public isActive(): boolean;
		}
	}
}

declare module kotlinx {
	export module coroutines {
		export abstract class CancelHandler extends kotlinx.coroutines.CancelHandlerBase implements kotlinx.coroutines.NotCompleted {
			public static class: java.lang.Class<kotlinx.coroutines.CancelHandler>;
			public invoke(throwable0: java.lang.Throwable): void;
			public constructor();
			public invoke(object0: any): any;
		}
	}
}

declare module kotlinx {
	export module coroutines {
		export abstract class CancelHandlerBase extends kotlin.jvm.functions.Function1<java.lang.Throwable,kotlin.Unit> {
			public static class: java.lang.Class<kotlinx.coroutines.CancelHandlerBase>;
			public invoke(throwable0: java.lang.Throwable): void;
			public constructor();
			public invoke(object0: any): any;
		}
	}
}

declare module kotlinx {
	export module coroutines {
		export class CancellableContinuation<T>  extends kotlin.coroutines.Continuation<any> {
			public static class: java.lang.Class<kotlinx.coroutines.CancellableContinuation>;
			/**
			 * Constructs a new instance of the kotlinx.coroutines.CancellableContinuation interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				isActive(): boolean;
				isCompleted(): boolean;
				isCancelled(): boolean;
				tryResume(object0: any, object1: any): any;
				tryResumeWithException(throwable0: java.lang.Throwable): any;
				completeResume(object0: any): void;
				initCancellability(): void;
				cancel(throwable0: java.lang.Throwable): boolean;
				invokeOnCancellation(function10: kotlin.jvm.functions.Function1<any,kotlin.Unit>): void;
				resumeUndispatched(coroutineDispatcher0: kotlinx.coroutines.CoroutineDispatcher, object1: any): void;
				resumeUndispatchedWithException(coroutineDispatcher0: kotlinx.coroutines.CoroutineDispatcher, throwable1: java.lang.Throwable): void;
				resume(object0: any, function11: kotlin.jvm.functions.Function1<any,kotlin.Unit>): void;
				getContext(): kotlin.coroutines.CoroutineContext;
				resumeWith(object0: any): void;
			});
			public constructor();
			public getContext(): kotlin.coroutines.CoroutineContext;
			public tryResume(object0: any, object1: any): any;
			public cancel(throwable0: java.lang.Throwable): boolean;
			public resume(object0: any, function11: kotlin.jvm.functions.Function1<any,kotlin.Unit>): void;
			public invokeOnCancellation(function10: kotlin.jvm.functions.Function1<any,kotlin.Unit>): void;
			public isCancelled(): boolean;
			public tryResumeWithException(throwable0: java.lang.Throwable): any;
			public resumeUndispatched(coroutineDispatcher0: kotlinx.coroutines.CoroutineDispatcher, object1: any): void;
			public resumeWith(object0: any): void;
			public completeResume(object0: any): void;
			public resumeUndispatchedWithException(coroutineDispatcher0: kotlinx.coroutines.CoroutineDispatcher, throwable1: java.lang.Throwable): void;
			public isCompleted(): boolean;
			public isActive(): boolean;
		}
		export module CancellableContinuation {
			export class DefaultImpls extends java.lang.Object {
				public static class: java.lang.Class<kotlinx.coroutines.CancellableContinuation.DefaultImpls>;
			}
		}
	}
}

declare module kotlinx {
	export module coroutines {
		export class CancellableContinuationImpl<T>  extends kotlinx.coroutines.DispatchedTask<any> {
			public static class: java.lang.Class<kotlinx.coroutines.CancellableContinuationImpl>;
			public getContext(): kotlin.coroutines.CoroutineContext;
			public completeResume(token: any): void;
			public resumeWith(result: any): void;
			public getStackTraceElement(): java.lang.StackTraceElement;
			public nameString(): string;
			public isCompleted(): boolean;
			public run(): void;
			public constructor(submissionTime: number, taskContext: kotlinx.coroutines.scheduling.TaskContext);
			public cancel(cause: java.lang.Throwable): boolean;
			public getResult(): any;
			public constructor(resumeMode: number);
			public resumeWithExceptionMode(exception: java.lang.Throwable, mode: number): kotlinx.coroutines.CancelledContinuation;
			public resume(value: any, onCancellation: kotlin.jvm.functions.Function1<any,kotlin.Unit>): void;
			public getDelegate(): kotlin.coroutines.Continuation<any>;
			public getSuccessfulResult(state: any): any;
			public resumeUndispatchedWithException(thisresumeUndispatchedWithException: kotlinx.coroutines.CoroutineDispatcher, exception: java.lang.Throwable): void;
			public isCancelled(): boolean;
			public constructor();
			public tryResume(value: any, idempotent: any): any;
			public cancelResult(state: any, cause: java.lang.Throwable): void;
			public getState(): any;
			public getCallerFrame(): kotlin.coroutines.jvm.internal.CoroutineStackFrame;
			public takeState(): any;
			public toString(): string;
			public tryResumeWithException(exception: java.lang.Throwable): any;
			public resumeUndispatched(thisresumeUndispatched: kotlinx.coroutines.CoroutineDispatcher, value: any): void;
			public getContinuationCancellationCause(parent: kotlinx.coroutines.Job): java.lang.Throwable;
			public constructor(delegate: kotlin.coroutines.Continuation<any>, resumeMode: number);
			public invokeOnCancellation(handler: kotlin.jvm.functions.Function1<any,kotlin.Unit>): void;
			public isActive(): boolean;
		}
	}
}

declare module kotlinx {
	export module coroutines {
		export class CancellableContinuationImplKt extends java.lang.Object {
			public static class: java.lang.Class<kotlinx.coroutines.CancellableContinuationImplKt>;
		}
	}
}

declare module kotlinx {
	export module coroutines {
		export class CancellableContinuationKt extends java.lang.Object {
			public static class: java.lang.Class<kotlinx.coroutines.CancellableContinuationKt>;
			public static suspendCancellableCoroutine(block: kotlin.jvm.functions.Function1, completion: kotlin.coroutines.Continuation): any;
			/** @deprecated */
			public static suspendAtomicCancellableCoroutine(holdCancellability: boolean, block: kotlin.jvm.functions.Function1, completion: kotlin.coroutines.Continuation): any;
			public static suspendAtomicCancellableCoroutine(block: kotlin.jvm.functions.Function1, completion: kotlin.coroutines.Continuation): any;
			public static removeOnCancellation(thisremoveOnCancellation: kotlinx.coroutines.CancellableContinuation<any>, node: kotlinx.coroutines.internal.LockFreeLinkedListNode): void;
			public static disposeOnCancellation(thisdisposeOnCancellation: kotlinx.coroutines.CancellableContinuation<any>, handle: kotlinx.coroutines.DisposableHandle): void;
		}
	}
}

declare module kotlinx {
	export module coroutines {
		export class CancelledContinuation extends kotlinx.coroutines.CompletedExceptionally {
			public static class: java.lang.Class<kotlinx.coroutines.CancelledContinuation>;
			public constructor(cause: java.lang.Throwable, handled: boolean);
			public constructor(continuation: kotlin.coroutines.Continuation<any>, cause: java.lang.Throwable, handled: boolean);
			public makeResumed(): boolean;
		}
	}
}

declare module kotlinx {
	export module coroutines {
		export class ChildContinuation extends kotlinx.coroutines.JobCancellingNode<kotlinx.coroutines.Job> {
			public static class: java.lang.Class<kotlinx.coroutines.ChildContinuation>;
			public child: kotlinx.coroutines.CancellableContinuationImpl<any>;
			public invoke(throwable0: java.lang.Throwable): void;
			public invoke(cause: java.lang.Throwable): void;
			public toString(): string;
			public constructor(job: any);
			public constructor(parent: kotlinx.coroutines.Job, child: kotlinx.coroutines.CancellableContinuationImpl<any>);
			public dispose(): void;
			public constructor();
			public invoke(object0: any): any;
			public getList(): kotlinx.coroutines.NodeList;
			public isActive(): boolean;
		}
	}
}

declare module kotlinx {
	export module coroutines {
		export class ChildHandle extends java.lang.Object implements kotlinx.coroutines.DisposableHandle {
			public static class: java.lang.Class<kotlinx.coroutines.ChildHandle>;
			/**
			 * Constructs a new instance of the kotlinx.coroutines.ChildHandle interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				childCancelled(throwable0: java.lang.Throwable): boolean;
				dispose(): void;
			});
			public constructor();
			public dispose(): void;
			public childCancelled(throwable0: java.lang.Throwable): boolean;
		}
	}
}

declare module kotlinx {
	export module coroutines {
		export class ChildHandleNode extends kotlinx.coroutines.JobCancellingNode<kotlinx.coroutines.JobSupport> implements kotlinx.coroutines.ChildHandle  {
			public static class: java.lang.Class<kotlinx.coroutines.ChildHandleNode>;
			public childJob: kotlinx.coroutines.ChildJob;
			public invoke(throwable0: java.lang.Throwable): void;
			public invoke(cause: java.lang.Throwable): void;
			public toString(): string;
			public constructor(job: any);
			public constructor(parent: kotlinx.coroutines.JobSupport, childJob: kotlinx.coroutines.ChildJob);
			public childCancelled(cause: java.lang.Throwable): boolean;
			public dispose(): void;
			public constructor();
			public invoke(object0: any): any;
			public getList(): kotlinx.coroutines.NodeList;
			public isActive(): boolean;
		}
	}
}

declare module kotlinx {
	export module coroutines {
		export class ChildJob extends java.lang.Object implements kotlinx.coroutines.Job {
			public static class: java.lang.Class<kotlinx.coroutines.ChildJob>;
			/**
			 * Constructs a new instance of the kotlinx.coroutines.ChildJob interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				parentCancelled(parentJob0: kotlinx.coroutines.ParentJob): void;
				isActive(): boolean;
				isCompleted(): boolean;
				isCancelled(): boolean;
				getCancellationException(): java.util.concurrent.CancellationException;
				start(): boolean;
				cancel(cancellationException0: java.util.concurrent.CancellationException): void;
				cancel(): void;
				cancel(throwable0: java.lang.Throwable): boolean;
				getChildren(): kotlin.sequences.Sequence<kotlinx.coroutines.Job>;
				attachChild(childJob0: kotlinx.coroutines.ChildJob): kotlinx.coroutines.ChildHandle;
				join(continuation0: kotlin.coroutines.Continuation<any>): any;
				getOnJoin(): kotlinx.coroutines.selects.SelectClause0;
				invokeOnCompletion(function10: kotlin.jvm.functions.Function1<any,kotlin.Unit>): kotlinx.coroutines.DisposableHandle;
				invokeOnCompletion(boolean0: boolean, boolean1: boolean, function12: kotlin.jvm.functions.Function1<any,kotlin.Unit>): kotlinx.coroutines.DisposableHandle;
				plus(job0: kotlinx.coroutines.Job): kotlinx.coroutines.Job;
				getKey(): kotlin.coroutines.CoroutineContext.Key<any>;
				get(key0: kotlin.coroutines.CoroutineContext.Key): kotlin.coroutines.CoroutineContext.Element;
				fold(object0: any, function21: kotlin.jvm.functions.Function2): any;
				minusKey(key0: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext;
				get(key0: kotlin.coroutines.CoroutineContext.Key): kotlin.coroutines.CoroutineContext.Element;
				fold(object0: any, function21: kotlin.jvm.functions.Function2): any;
				plus(coroutineContext0: kotlin.coroutines.CoroutineContext): kotlin.coroutines.CoroutineContext;
				minusKey(key0: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext;
			});
			public constructor();
			public static Key: kotlinx.coroutines.Job.Key;
			public get(key0: kotlin.coroutines.CoroutineContext.Key): kotlin.coroutines.CoroutineContext.Element;
			public getCancellationException(): java.util.concurrent.CancellationException;
			public plus(coroutineContext0: kotlin.coroutines.CoroutineContext): kotlin.coroutines.CoroutineContext;
			public getKey(): kotlin.coroutines.CoroutineContext.Key<any>;
			public parentCancelled(parentJob0: kotlinx.coroutines.ParentJob): void;
			public getOnJoin(): kotlinx.coroutines.selects.SelectClause0;
			public isCancelled(): boolean;
			public invokeOnCompletion(function10: kotlin.jvm.functions.Function1<any,kotlin.Unit>): kotlinx.coroutines.DisposableHandle;
			public minusKey(key0: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext;
			public invokeOnCompletion(boolean0: boolean, boolean1: boolean, function12: kotlin.jvm.functions.Function1<any,kotlin.Unit>): kotlinx.coroutines.DisposableHandle;
			/** @deprecated */
			public plus(job0: kotlinx.coroutines.Job): kotlinx.coroutines.Job;
			public cancel(cancellationException0: java.util.concurrent.CancellationException): void;
			public join(continuation0: kotlin.coroutines.Continuation<any>): any;
			public fold(object0: any, function21: kotlin.jvm.functions.Function2): any;
			public isCompleted(): boolean;
			public start(): boolean;
			public attachChild(childJob0: kotlinx.coroutines.ChildJob): kotlinx.coroutines.ChildHandle;
			public isActive(): boolean;
			public getChildren(): kotlin.sequences.Sequence<kotlinx.coroutines.Job>;
		}
		export module ChildJob {
			export class DefaultImpls extends java.lang.Object {
				public static class: java.lang.Class<kotlinx.coroutines.ChildJob.DefaultImpls>;
				public static plus(this0: kotlinx.coroutines.ChildJob, context: kotlin.coroutines.CoroutineContext): kotlin.coroutines.CoroutineContext;
				public static fold(this0: kotlinx.coroutines.ChildJob, initial: any, operation: kotlin.jvm.functions.Function2): any;
				/** @deprecated */
				public static plus(this0: kotlinx.coroutines.ChildJob, other: kotlinx.coroutines.Job): kotlinx.coroutines.Job;
				public static minusKey(this0: kotlinx.coroutines.ChildJob, key: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext;
				public static get(this0: kotlinx.coroutines.ChildJob, key: kotlin.coroutines.CoroutineContext.Key): kotlin.coroutines.CoroutineContext.Element;
			}
		}
	}
}

declare module kotlinx {
	export module coroutines {
		export class CommonPool extends kotlinx.coroutines.ExecutorCoroutineDispatcher {
			public static class: java.lang.Class<kotlinx.coroutines.CommonPool>;
			public static DEFAULT_PARALLELISM_PROPERTY_NAME: string;
			public static INSTANCE: kotlinx.coroutines.CommonPool;
			public dispatch(coroutineContext0: kotlin.coroutines.CoroutineContext, runnable1: java.lang.Runnable): void;
			public minusKey(key: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext;
			public get(key: kotlin.coroutines.CoroutineContext.Key): kotlin.coroutines.CoroutineContext.Element;
			public isGoodCommonPool(fjpClass: java.lang.Class<any>, executor: java.util.concurrent.ExecutorService): boolean;
			public interceptContinuation(continuation: kotlin.coroutines.Continuation): kotlin.coroutines.Continuation;
			public getKey(): kotlin.coroutines.CoroutineContext.Key<any>;
			public getExecutor(): java.util.concurrent.Executor;
			public releaseInterceptedContinuation(continuation: kotlin.coroutines.Continuation<any>): void;
			public fold(initial: any, operation: kotlin.jvm.functions.Function2): any;
			public toString(): string;
			public usePrivatePool(): void;
			public restore(): void;
			public dispatch(context: kotlin.coroutines.CoroutineContext, block: java.lang.Runnable): void;
			public close(): void;
			public shutdown(timeout: number): void;
		}
	}
}

declare module kotlinx {
	export module coroutines {
		export class CompletableDeferred<T>  extends kotlinx.coroutines.Deferred<any> {
			public static class: java.lang.Class<kotlinx.coroutines.CompletableDeferred>;
			/**
			 * Constructs a new instance of the kotlinx.coroutines.CompletableDeferred interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				complete(object0: any): boolean;
				completeExceptionally(throwable0: java.lang.Throwable): boolean;
				await(continuation0: kotlin.coroutines.Continuation<any>): any;
				getOnAwait(): kotlinx.coroutines.selects.SelectClause1<any>;
				getCompleted(): any;
				getCompletionExceptionOrNull(): java.lang.Throwable;
				isActive(): boolean;
				isCompleted(): boolean;
				isCancelled(): boolean;
				getCancellationException(): java.util.concurrent.CancellationException;
				start(): boolean;
				cancel(cancellationException0: java.util.concurrent.CancellationException): void;
				cancel(): void;
				cancel(throwable0: java.lang.Throwable): boolean;
				getChildren(): kotlin.sequences.Sequence<kotlinx.coroutines.Job>;
				attachChild(childJob0: kotlinx.coroutines.ChildJob): kotlinx.coroutines.ChildHandle;
				join(continuation0: kotlin.coroutines.Continuation<any>): any;
				getOnJoin(): kotlinx.coroutines.selects.SelectClause0;
				invokeOnCompletion(function10: kotlin.jvm.functions.Function1<any,kotlin.Unit>): kotlinx.coroutines.DisposableHandle;
				invokeOnCompletion(boolean0: boolean, boolean1: boolean, function12: kotlin.jvm.functions.Function1<any,kotlin.Unit>): kotlinx.coroutines.DisposableHandle;
				plus(job0: kotlinx.coroutines.Job): kotlinx.coroutines.Job;
				getKey(): kotlin.coroutines.CoroutineContext.Key<any>;
				get(key0: kotlin.coroutines.CoroutineContext.Key): kotlin.coroutines.CoroutineContext.Element;
				fold(object0: any, function21: kotlin.jvm.functions.Function2): any;
				minusKey(key0: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext;
				get(key0: kotlin.coroutines.CoroutineContext.Key): kotlin.coroutines.CoroutineContext.Element;
				fold(object0: any, function21: kotlin.jvm.functions.Function2): any;
				plus(coroutineContext0: kotlin.coroutines.CoroutineContext): kotlin.coroutines.CoroutineContext;
				minusKey(key0: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext;
			});
			public constructor();
			public static Key: kotlinx.coroutines.Job.Key;
			public get(key0: kotlin.coroutines.CoroutineContext.Key): kotlin.coroutines.CoroutineContext.Element;
			public completeExceptionally(throwable0: java.lang.Throwable): boolean;
			public getCancellationException(): java.util.concurrent.CancellationException;
			public plus(coroutineContext0: kotlin.coroutines.CoroutineContext): kotlin.coroutines.CoroutineContext;
			public getCompleted(): any;
			public getKey(): kotlin.coroutines.CoroutineContext.Key<any>;
			public complete(object0: any): boolean;
			public getOnJoin(): kotlinx.coroutines.selects.SelectClause0;
			public getOnAwait(): kotlinx.coroutines.selects.SelectClause1<any>;
			public isCancelled(): boolean;
			public invokeOnCompletion(function10: kotlin.jvm.functions.Function1<any,kotlin.Unit>): kotlinx.coroutines.DisposableHandle;
			public minusKey(key0: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext;
			public invokeOnCompletion(boolean0: boolean, boolean1: boolean, function12: kotlin.jvm.functions.Function1<any,kotlin.Unit>): kotlinx.coroutines.DisposableHandle;
			public getCompletionExceptionOrNull(): java.lang.Throwable;
			/** @deprecated */
			public plus(job0: kotlinx.coroutines.Job): kotlinx.coroutines.Job;
			public cancel(cancellationException0: java.util.concurrent.CancellationException): void;
			public await(continuation0: kotlin.coroutines.Continuation<any>): any;
			public join(continuation0: kotlin.coroutines.Continuation<any>): any;
			public fold(object0: any, function21: kotlin.jvm.functions.Function2): any;
			public isCompleted(): boolean;
			public start(): boolean;
			public attachChild(childJob0: kotlinx.coroutines.ChildJob): kotlinx.coroutines.ChildHandle;
			public isActive(): boolean;
			public getChildren(): kotlin.sequences.Sequence<kotlinx.coroutines.Job>;
		}
		export module CompletableDeferred {
			export class DefaultImpls extends java.lang.Object {
				public static class: java.lang.Class<kotlinx.coroutines.CompletableDeferred.DefaultImpls>;
				/** @deprecated */
				public static plus(this0: kotlinx.coroutines.CompletableDeferred, other: kotlinx.coroutines.Job): kotlinx.coroutines.Job;
				public static plus(this0: kotlinx.coroutines.CompletableDeferred, context: kotlin.coroutines.CoroutineContext): kotlin.coroutines.CoroutineContext;
				public static fold(this0: kotlinx.coroutines.CompletableDeferred, initial: any, operation: kotlin.jvm.functions.Function2): any;
				public static get(this0: kotlinx.coroutines.CompletableDeferred, key: kotlin.coroutines.CoroutineContext.Key): kotlin.coroutines.CoroutineContext.Element;
				public static minusKey(this0: kotlinx.coroutines.CompletableDeferred, key: kotlin.coroutines.CoroutineContext.Key): kotlin.coroutines.CoroutineContext;
			}
		}
	}
}

declare module kotlinx {
	export module coroutines {
		export class CompletableDeferredImpl<T>  extends kotlinx.coroutines.JobSupport {
			public static class: java.lang.Class<kotlinx.coroutines.CompletableDeferredImpl>;
			public minusKey(key: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext;
			public getCancellationException(): java.util.concurrent.CancellationException;
			public get(key: kotlin.coroutines.CoroutineContext.Key): kotlin.coroutines.CoroutineContext.Element;
			public registerSelectClause0(select: kotlinx.coroutines.selects.SelectInstance, block: kotlin.jvm.functions.Function1): void;
			public invokeOnCompletion(onCancelling: boolean, invokeImmediately: boolean, handler: kotlin.jvm.functions.Function1<any,kotlin.Unit>): kotlinx.coroutines.DisposableHandle;
			public completeExceptionally(exception: java.lang.Throwable): boolean;
			public getCompleted(): any;
			/** @deprecated */
			public plus(other: kotlinx.coroutines.Job): kotlinx.coroutines.Job;
			public plus(context: kotlin.coroutines.CoroutineContext): kotlin.coroutines.CoroutineContext;
			public getOnAwait(): kotlinx.coroutines.selects.SelectClause1<any>;
			public getOnCancelComplete(): boolean;
			public join(completion: kotlin.coroutines.Continuation<any>): any;
			public fold(initial: any, operation: kotlin.jvm.functions.Function2): any;
			public getCompletionExceptionOrNull(): java.lang.Throwable;
			public parentCancelled(parentJob: kotlinx.coroutines.ParentJob): void;
			public isCompleted(): boolean;
			public start(): boolean;
			public getChildren(): kotlin.sequences.Sequence<kotlinx.coroutines.Job>;
			public complete(value: any): boolean;
			public getKey(): kotlin.coroutines.CoroutineContext.Key<any>;
			public getOnJoin(): kotlinx.coroutines.selects.SelectClause0;
			public constructor(parent: kotlinx.coroutines.Job);
			public isCancelled(): boolean;
			public invokeOnCompletion(handler: kotlin.jvm.functions.Function1<any,kotlin.Unit>): kotlinx.coroutines.DisposableHandle;
			public await(completion: kotlin.coroutines.Continuation<any>): any;
			public attachChild(child: kotlinx.coroutines.ChildJob): kotlinx.coroutines.ChildHandle;
			public getChildJobCancellationCause(): java.util.concurrent.CancellationException;
			public constructor(active: boolean);
			public cancel(cause: java.util.concurrent.CancellationException): void;
			public registerSelectClause1(select: kotlinx.coroutines.selects.SelectInstance, block: kotlin.jvm.functions.Function2): void;
			public isActive(): boolean;
		}
	}
}

declare module kotlinx {
	export module coroutines {
		export class CompletableDeferredKt extends java.lang.Object {
			public static class: java.lang.Class<kotlinx.coroutines.CompletableDeferredKt>;
			public static CompletableDeferred(value: any): kotlinx.coroutines.CompletableDeferred;
			public static CompletableDeferred(parent: kotlinx.coroutines.Job): kotlinx.coroutines.CompletableDeferred;
		}
	}
}

declare module kotlinx {
	export module coroutines {
		export class CompletableJob extends java.lang.Object implements kotlinx.coroutines.Job {
			public static class: java.lang.Class<kotlinx.coroutines.CompletableJob>;
			/**
			 * Constructs a new instance of the kotlinx.coroutines.CompletableJob interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				complete(): boolean;
				completeExceptionally(throwable0: java.lang.Throwable): boolean;
				isActive(): boolean;
				isCompleted(): boolean;
				isCancelled(): boolean;
				getCancellationException(): java.util.concurrent.CancellationException;
				start(): boolean;
				cancel(cancellationException0: java.util.concurrent.CancellationException): void;
				cancel(): void;
				cancel(throwable0: java.lang.Throwable): boolean;
				getChildren(): kotlin.sequences.Sequence<kotlinx.coroutines.Job>;
				attachChild(childJob0: kotlinx.coroutines.ChildJob): kotlinx.coroutines.ChildHandle;
				join(continuation0: kotlin.coroutines.Continuation<any>): any;
				getOnJoin(): kotlinx.coroutines.selects.SelectClause0;
				invokeOnCompletion(function10: kotlin.jvm.functions.Function1<any,kotlin.Unit>): kotlinx.coroutines.DisposableHandle;
				invokeOnCompletion(boolean0: boolean, boolean1: boolean, function12: kotlin.jvm.functions.Function1<any,kotlin.Unit>): kotlinx.coroutines.DisposableHandle;
				plus(job0: kotlinx.coroutines.Job): kotlinx.coroutines.Job;
				getKey(): kotlin.coroutines.CoroutineContext.Key<any>;
				get(key0: kotlin.coroutines.CoroutineContext.Key): kotlin.coroutines.CoroutineContext.Element;
				fold(object0: any, function21: kotlin.jvm.functions.Function2): any;
				minusKey(key0: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext;
				get(key0: kotlin.coroutines.CoroutineContext.Key): kotlin.coroutines.CoroutineContext.Element;
				fold(object0: any, function21: kotlin.jvm.functions.Function2): any;
				plus(coroutineContext0: kotlin.coroutines.CoroutineContext): kotlin.coroutines.CoroutineContext;
				minusKey(key0: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext;
			});
			public constructor();
			public static Key: kotlinx.coroutines.Job.Key;
			public get(key0: kotlin.coroutines.CoroutineContext.Key): kotlin.coroutines.CoroutineContext.Element;
			public completeExceptionally(throwable0: java.lang.Throwable): boolean;
			public getCancellationException(): java.util.concurrent.CancellationException;
			public plus(coroutineContext0: kotlin.coroutines.CoroutineContext): kotlin.coroutines.CoroutineContext;
			public getKey(): kotlin.coroutines.CoroutineContext.Key<any>;
			public getOnJoin(): kotlinx.coroutines.selects.SelectClause0;
			public isCancelled(): boolean;
			public invokeOnCompletion(function10: kotlin.jvm.functions.Function1<any,kotlin.Unit>): kotlinx.coroutines.DisposableHandle;
			public minusKey(key0: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext;
			public complete(): boolean;
			public invokeOnCompletion(boolean0: boolean, boolean1: boolean, function12: kotlin.jvm.functions.Function1<any,kotlin.Unit>): kotlinx.coroutines.DisposableHandle;
			/** @deprecated */
			public plus(job0: kotlinx.coroutines.Job): kotlinx.coroutines.Job;
			public cancel(cancellationException0: java.util.concurrent.CancellationException): void;
			public join(continuation0: kotlin.coroutines.Continuation<any>): any;
			public fold(object0: any, function21: kotlin.jvm.functions.Function2): any;
			public isCompleted(): boolean;
			public start(): boolean;
			public attachChild(childJob0: kotlinx.coroutines.ChildJob): kotlinx.coroutines.ChildHandle;
			public isActive(): boolean;
			public getChildren(): kotlin.sequences.Sequence<kotlinx.coroutines.Job>;
		}
		export module CompletableJob {
			export class DefaultImpls extends java.lang.Object {
				public static class: java.lang.Class<kotlinx.coroutines.CompletableJob.DefaultImpls>;
				public static plus(this0: kotlinx.coroutines.CompletableJob, context: kotlin.coroutines.CoroutineContext): kotlin.coroutines.CoroutineContext;
				/** @deprecated */
				public static plus(this0: kotlinx.coroutines.CompletableJob, other: kotlinx.coroutines.Job): kotlinx.coroutines.Job;
				public static minusKey(this0: kotlinx.coroutines.CompletableJob, key: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext;
				public static fold(this0: kotlinx.coroutines.CompletableJob, initial: any, operation: kotlin.jvm.functions.Function2): any;
				public static get(this0: kotlinx.coroutines.CompletableJob, key: kotlin.coroutines.CoroutineContext.Key): kotlin.coroutines.CoroutineContext.Element;
			}
		}
	}
}

declare module kotlinx {
	export module coroutines {
		export class CompletedExceptionally extends java.lang.Object {
			public static class: java.lang.Class<kotlinx.coroutines.CompletedExceptionally>;
			public cause: java.lang.Throwable;
			public toString(): string;
			public makeHandled(): boolean;
			public constructor(cause: java.lang.Throwable, handled: boolean);
			public getHandled(): boolean;
		}
	}
}

declare module kotlinx {
	export module coroutines {
		export class CompletedExceptionallyKt extends java.lang.Object {
			public static class: java.lang.Class<kotlinx.coroutines.CompletedExceptionallyKt>;
			public static toState(thistoState: any): any;
		}
	}
}

declare module kotlinx {
	export module coroutines {
		export class CompletedIdempotentResult extends java.lang.Object {
			public static class: java.lang.Class<kotlinx.coroutines.CompletedIdempotentResult>;
			public idempotentResume: any;
			public result: any;
			public token: kotlinx.coroutines.NotCompleted;
			public toString(): string;
			public constructor(idempotentResume: any, result: any, token: kotlinx.coroutines.NotCompleted);
		}
	}
}

declare module kotlinx {
	export module coroutines {
		export class CompletedWithCancellation extends java.lang.Object {
			public static class: java.lang.Class<kotlinx.coroutines.CompletedWithCancellation>;
			public result: any;
			public onCancellation: kotlin.jvm.functions.Function1<java.lang.Throwable,kotlin.Unit>;
			public toString(): string;
			public constructor(result: any, onCancellation: kotlin.jvm.functions.Function1<any,kotlin.Unit>);
		}
	}
}

declare module kotlinx {
	export module coroutines {
		export abstract class CompletionHandlerBase extends kotlinx.coroutines.internal.LockFreeLinkedListNode implements kotlin.jvm.functions.Function1<java.lang.Throwable,kotlin.Unit>  {
			public static class: java.lang.Class<kotlinx.coroutines.CompletionHandlerBase>;
			public invoke(throwable0: java.lang.Throwable): void;
			public constructor();
			public invoke(object0: any): any;
		}
	}
}

declare module kotlinx {
	export module coroutines {
		export class CompletionHandlerException extends java.lang.RuntimeException {
			public static class: java.lang.Class<kotlinx.coroutines.CompletionHandlerException>;
			public constructor(message: string);
			public constructor(message: string, cause: java.lang.Throwable);
			public constructor(cause: java.lang.Throwable);
			public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
			public constructor();
		}
	}
}

declare module kotlinx {
	export module coroutines {
		export class CompletionHandlerKt extends java.lang.Object {
			public static class: java.lang.Class<kotlinx.coroutines.CompletionHandlerKt>;
			public static getAsHandler(thisasHandler: kotlinx.coroutines.CompletionHandlerBase): kotlin.jvm.functions.Function1<java.lang.Throwable,kotlin.Unit>;
			public static getAsHandler(thisasHandler: kotlinx.coroutines.CancelHandlerBase): kotlin.jvm.functions.Function1<java.lang.Throwable,kotlin.Unit>;
			public static invokeIt(thisinvokeIt: kotlin.jvm.functions.Function1<any,kotlin.Unit>, cause: java.lang.Throwable): void;
		}
	}
}

declare module kotlinx {
	export module coroutines {
		export class CompletionHandler_commonKt extends java.lang.Object {
			public static class: java.lang.Class<kotlinx.coroutines.CompletionHandler_commonKt>;
		}
	}
}

