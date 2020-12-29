declare module androidx {
	export module lifecycle {
		export class ClassesInfoCache extends java.lang.Object {
			public static class: java.lang.Class<androidx.lifecycle.ClassesInfoCache>;
		}
		export module ClassesInfoCache {
			export class CallbackInfo extends java.lang.Object {
				public static class: java.lang.Class<androidx.lifecycle.ClassesInfoCache.CallbackInfo>;
			}
			export class MethodReference extends java.lang.Object {
				public static class: java.lang.Class<androidx.lifecycle.ClassesInfoCache.MethodReference>;
				public equals(obj: any): boolean;
				public hashCode(): number;
				public equals(o: any): boolean;
			}
		}
	}
}

declare module androidx {
	export module lifecycle {
		export class CompositeGeneratedAdaptersObserver extends java.lang.Object implements androidx.lifecycle.LifecycleEventObserver {
			public static class: java.lang.Class<androidx.lifecycle.CompositeGeneratedAdaptersObserver>;
			public onStateChanged(source: androidx.lifecycle.LifecycleOwner, event: androidx.lifecycle.Lifecycle.Event): void;
		}
	}
}

declare module androidx {
	export module lifecycle {
		export class FullLifecycleObserver extends java.lang.Object implements androidx.lifecycle.LifecycleObserver {
			public static class: java.lang.Class<androidx.lifecycle.FullLifecycleObserver>;
			/**
			 * Constructs a new instance of the androidx.lifecycle.FullLifecycleObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				onCreate(lifecycleOwner0: androidx.lifecycle.LifecycleOwner): void;
				onStart(lifecycleOwner0: androidx.lifecycle.LifecycleOwner): void;
				onResume(lifecycleOwner0: androidx.lifecycle.LifecycleOwner): void;
				onPause(lifecycleOwner0: androidx.lifecycle.LifecycleOwner): void;
				onStop(lifecycleOwner0: androidx.lifecycle.LifecycleOwner): void;
				onDestroy(lifecycleOwner0: androidx.lifecycle.LifecycleOwner): void;
			});
			public constructor();
			public onPause(lifecycleOwner0: androidx.lifecycle.LifecycleOwner): void;
			public onStop(lifecycleOwner0: androidx.lifecycle.LifecycleOwner): void;
			public onStart(lifecycleOwner0: androidx.lifecycle.LifecycleOwner): void;
			public onCreate(lifecycleOwner0: androidx.lifecycle.LifecycleOwner): void;
			public onResume(lifecycleOwner0: androidx.lifecycle.LifecycleOwner): void;
			public onDestroy(lifecycleOwner0: androidx.lifecycle.LifecycleOwner): void;
		}
	}
}

declare module androidx {
	export module lifecycle {
		export class FullLifecycleObserverAdapter extends java.lang.Object implements androidx.lifecycle.LifecycleEventObserver {
			public static class: java.lang.Class<androidx.lifecycle.FullLifecycleObserverAdapter>;
			public onStateChanged(source: androidx.lifecycle.LifecycleOwner, event: androidx.lifecycle.Lifecycle.Event): void;
		}
	}
}

declare module androidx {
	export module lifecycle {
		export class GeneratedAdapter extends java.lang.Object {
			public static class: java.lang.Class<androidx.lifecycle.GeneratedAdapter>;
			/**
			 * Constructs a new instance of the androidx.lifecycle.GeneratedAdapter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				callMethods(lifecycleOwner0: androidx.lifecycle.LifecycleOwner, event1: androidx.lifecycle.Lifecycle.Event, boolean2: boolean, methodCallsLogger3: androidx.lifecycle.MethodCallsLogger): void;
			});
			public constructor();
			public callMethods(lifecycleOwner0: androidx.lifecycle.LifecycleOwner, event1: androidx.lifecycle.Lifecycle.Event, boolean2: boolean, methodCallsLogger3: androidx.lifecycle.MethodCallsLogger): void;
		}
	}
}

declare module androidx {
	export module lifecycle {
		export class GenericLifecycleObserver extends java.lang.Object implements androidx.lifecycle.LifecycleEventObserver {
			public static class: java.lang.Class<androidx.lifecycle.GenericLifecycleObserver>;
			/**
			 * Constructs a new instance of the androidx.lifecycle.GenericLifecycleObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				onStateChanged(lifecycleOwner0: androidx.lifecycle.LifecycleOwner, event1: androidx.lifecycle.Lifecycle.Event): void;
			});
			public constructor();
			public onStateChanged(lifecycleOwner0: androidx.lifecycle.LifecycleOwner, event1: androidx.lifecycle.Lifecycle.Event): void;
		}
	}
}

declare module androidx {
	export module lifecycle {
		export abstract class Lifecycle extends java.lang.Object {
			public static class: java.lang.Class<androidx.lifecycle.Lifecycle>;
			public addObserver(lifecycleObserver0: androidx.lifecycle.LifecycleObserver): void;
			public constructor();
			public removeObserver(lifecycleObserver0: androidx.lifecycle.LifecycleObserver): void;
			public getCurrentState(): androidx.lifecycle.Lifecycle.State;
		}
		export module Lifecycle {
			export class Event {
				public static class: java.lang.Class<androidx.lifecycle.Lifecycle.Event>;
				public static ON_CREATE: androidx.lifecycle.Lifecycle.Event;
				public static ON_START: androidx.lifecycle.Lifecycle.Event;
				public static ON_RESUME: androidx.lifecycle.Lifecycle.Event;
				public static ON_PAUSE: androidx.lifecycle.Lifecycle.Event;
				public static ON_STOP: androidx.lifecycle.Lifecycle.Event;
				public static ON_DESTROY: androidx.lifecycle.Lifecycle.Event;
				public static ON_ANY: androidx.lifecycle.Lifecycle.Event;
				public static values(): native.Array<androidx.lifecycle.Lifecycle.Event>;
				public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static valueOf(name: string): androidx.lifecycle.Lifecycle.Event;
			}
			export class State {
				public static class: java.lang.Class<androidx.lifecycle.Lifecycle.State>;
				public static DESTROYED: androidx.lifecycle.Lifecycle.State;
				public static INITIALIZED: androidx.lifecycle.Lifecycle.State;
				public static CREATED: androidx.lifecycle.Lifecycle.State;
				public static STARTED: androidx.lifecycle.Lifecycle.State;
				public static RESUMED: androidx.lifecycle.Lifecycle.State;
				public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static valueOf(name: string): androidx.lifecycle.Lifecycle.State;
				public isAtLeast(state: androidx.lifecycle.Lifecycle.State): boolean;
				public static values(): native.Array<androidx.lifecycle.Lifecycle.State>;
			}
		}
	}
}

declare module androidx {
	export module lifecycle {
		export class LifecycleEventObserver extends java.lang.Object implements androidx.lifecycle.LifecycleObserver {
			public static class: java.lang.Class<androidx.lifecycle.LifecycleEventObserver>;
			/**
			 * Constructs a new instance of the androidx.lifecycle.LifecycleEventObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				onStateChanged(lifecycleOwner0: androidx.lifecycle.LifecycleOwner, event1: androidx.lifecycle.Lifecycle.Event): void;
			});
			public constructor();
			public onStateChanged(lifecycleOwner0: androidx.lifecycle.LifecycleOwner, event1: androidx.lifecycle.Lifecycle.Event): void;
		}
	}
}

declare module androidx {
	export module lifecycle {
		export class LifecycleObserver extends java.lang.Object {
			public static class: java.lang.Class<androidx.lifecycle.LifecycleObserver>;
			/**
			 * Constructs a new instance of the androidx.lifecycle.LifecycleObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
			});
			public constructor();
		}
	}
}

declare module androidx {
	export module lifecycle {
		export class LifecycleOwner extends java.lang.Object {
			public static class: java.lang.Class<androidx.lifecycle.LifecycleOwner>;
			/**
			 * Constructs a new instance of the androidx.lifecycle.LifecycleOwner interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getLifecycle(): androidx.lifecycle.Lifecycle;
			});
			public constructor();
			public getLifecycle(): androidx.lifecycle.Lifecycle;
		}
	}
}

declare module androidx {
	export module lifecycle {
		export class Lifecycling extends java.lang.Object {
			public static class: java.lang.Class<androidx.lifecycle.Lifecycling>;
			public static getAdapterName(className: string): string;
		}
	}
}

declare module androidx {
	export module lifecycle {
		export class MethodCallsLogger extends java.lang.Object {
			public static class: java.lang.Class<androidx.lifecycle.MethodCallsLogger>;
			public approveCall(name: string, type: number): boolean;
			public constructor();
		}
	}
}

declare module androidx {
	export module lifecycle {
		export class OnLifecycleEvent extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<androidx.lifecycle.OnLifecycleEvent>;
			/**
			 * Constructs a new instance of the androidx.lifecycle.OnLifecycleEvent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				value(): androidx.lifecycle.Lifecycle.Event;
				equals(object0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public toString(): string;
			public equals(obj: any): boolean;
			public value(): androidx.lifecycle.Lifecycle.Event;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module androidx {
	export module lifecycle {
		export class ReflectiveGenericLifecycleObserver extends java.lang.Object implements androidx.lifecycle.LifecycleEventObserver {
			public static class: java.lang.Class<androidx.lifecycle.ReflectiveGenericLifecycleObserver>;
			public onStateChanged(source: androidx.lifecycle.LifecycleOwner, event: androidx.lifecycle.Lifecycle.Event): void;
		}
	}
}

declare module androidx {
	export module lifecycle {
		export class SingleGeneratedAdapterObserver extends java.lang.Object implements androidx.lifecycle.LifecycleEventObserver {
			public static class: java.lang.Class<androidx.lifecycle.SingleGeneratedAdapterObserver>;
			public onStateChanged(source: androidx.lifecycle.LifecycleOwner, event: androidx.lifecycle.Lifecycle.Event): void;
		}
	}
}

//Generics information:

