declare module androidx {
	export module lifecycle {
		export abstract class LiveData<T>  extends java.lang.Object {
			public static class: java.lang.Class<androidx.lifecycle.LiveData<any>>;
			public onInactive(): void;
			public onActive(): void;
			public removeObservers(owner: androidx.lifecycle.LifecycleOwner): void;
			public hasObservers(): boolean;
			public observe(owner: androidx.lifecycle.LifecycleOwner, observer: androidx.lifecycle.Observer<any>): void;
			public postValue(value: T): void;
			public hasActiveObservers(): boolean;
			public constructor();
			public setValue(value: T): void;
			public getValue(): T;
			public observeForever(observer: androidx.lifecycle.Observer<any>): void;
			public removeObserver(observer: androidx.lifecycle.Observer<any>): void;
		}
		export module LiveData {
			export class AlwaysActiveObserver extends androidx.lifecycle.LiveData.ObserverWrapper {
				public static class: java.lang.Class<androidx.lifecycle.LiveData.AlwaysActiveObserver>;
			}
			export class LifecycleBoundObserver extends androidx.lifecycle.LiveData.ObserverWrapper implements androidx.lifecycle.GenericLifecycleObserver  {
				public static class: java.lang.Class<androidx.lifecycle.LiveData.LifecycleBoundObserver>;
				public onStateChanged(source: androidx.lifecycle.LifecycleOwner, event: androidx.lifecycle.Lifecycle.Event): void;
			}
			export abstract class ObserverWrapper extends java.lang.Object {
				public static class: java.lang.Class<androidx.lifecycle.LiveData.ObserverWrapper>;
			}
		}
	}
}

declare module androidx {
	export module lifecycle {
		export class MutableLiveData<T>  extends androidx.lifecycle.LiveData<any> {
			public static class: java.lang.Class<androidx.lifecycle.MutableLiveData<any>>;
			public setValue(value: any): void;
			public constructor();
			public postValue(value: any): void;
		}
	}
}

declare module androidx {
	export module lifecycle {
		export class Observer<T>  extends java.lang.Object {
			public static class: java.lang.Class<androidx.lifecycle.Observer<any>>;
			/**
			 * Constructs a new instance of the androidx.lifecycle.Observer<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				onChanged(object0: T): void;
			});
			public constructor();
			public onChanged(object0: T): void;
		}
	}
}

//Generics information:
//androidx.lifecycle.LiveData:1
//androidx.lifecycle.MutableLiveData:1
//androidx.lifecycle.Observer:1

