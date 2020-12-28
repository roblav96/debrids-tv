declare module androidx {
	export module lifecycle {
		export class DefaultLifecycleObserver extends java.lang.Object implements androidx.lifecycle.FullLifecycleObserver {
			public static class: java.lang.Class<androidx.lifecycle.DefaultLifecycleObserver>;
			/**
			 * Constructs a new instance of the androidx.lifecycle.DefaultLifecycleObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				onCreate(owner: androidx.lifecycle.LifecycleOwner): void;
				onStart(owner: androidx.lifecycle.LifecycleOwner): void;
				onResume(owner: androidx.lifecycle.LifecycleOwner): void;
				onPause(owner: androidx.lifecycle.LifecycleOwner): void;
				onStop(owner: androidx.lifecycle.LifecycleOwner): void;
				onDestroy(owner: androidx.lifecycle.LifecycleOwner): void;
				onCreate(owner: androidx.lifecycle.LifecycleOwner): void;
				onStart(owner: androidx.lifecycle.LifecycleOwner): void;
				onResume(owner: androidx.lifecycle.LifecycleOwner): void;
				onPause(owner: androidx.lifecycle.LifecycleOwner): void;
				onStop(owner: androidx.lifecycle.LifecycleOwner): void;
				onDestroy(owner: androidx.lifecycle.LifecycleOwner): void;
			});
			public constructor();
			public onCreate(owner: androidx.lifecycle.LifecycleOwner): void;
			public onPause(owner: androidx.lifecycle.LifecycleOwner): void;
			public onStop(owner: androidx.lifecycle.LifecycleOwner): void;
			public onDestroy(owner: androidx.lifecycle.LifecycleOwner): void;
			public onStart(owner: androidx.lifecycle.LifecycleOwner): void;
			public onResume(owner: androidx.lifecycle.LifecycleOwner): void;
		}
	}
}

//Generics information:

