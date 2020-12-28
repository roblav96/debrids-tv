declare module androidx {
	export module lifecycle {
		export abstract class ComputableLiveData<T>  extends java.lang.Object {
			public static class: java.lang.Class<androidx.lifecycle.ComputableLiveData<any>>;
			public invalidate(): void;
			public constructor(executor: java.util.concurrent.Executor);
			public compute(): T;
			public getLiveData(): androidx.lifecycle.LiveData<T>;
			public constructor();
		}
	}
}

declare module androidx {
	export module lifecycle {
		export class MediatorLiveData<T>  extends androidx.lifecycle.MutableLiveData<any> {
			public static class: java.lang.Class<androidx.lifecycle.MediatorLiveData<any>>;
			public onInactive(): void;
			public onActive(): void;
			public addSource(source: androidx.lifecycle.LiveData<any>, onChanged: androidx.lifecycle.Observer<any>): void;
			public constructor();
			public removeSource(toRemote: androidx.lifecycle.LiveData<any>): void;
		}
		export module MediatorLiveData {
			export class Source<V>  extends androidx.lifecycle.Observer<any> {
				public static class: java.lang.Class<androidx.lifecycle.MediatorLiveData.Source<any>>;
				public onChanged(v: any): void;
			}
		}
	}
}

declare module androidx {
	export module lifecycle {
		export class Transformations extends java.lang.Object {
			public static class: java.lang.Class<androidx.lifecycle.Transformations>;
			public static distinctUntilChanged(source: androidx.lifecycle.LiveData<any>): androidx.lifecycle.LiveData<any>;
			public static map(source: androidx.lifecycle.LiveData<any>, mapFunction: androidx.arch.core.util.Function<any,any>): androidx.lifecycle.LiveData<any>;
			public static switchMap(source: androidx.lifecycle.LiveData<any>, switchMapFunction: androidx.arch.core.util.Function<any,any>): androidx.lifecycle.LiveData<any>;
		}
	}
}

//Generics information:
//androidx.lifecycle.ComputableLiveData:1
//androidx.lifecycle.MediatorLiveData:1
//androidx.lifecycle.MediatorLiveData.Source:1

