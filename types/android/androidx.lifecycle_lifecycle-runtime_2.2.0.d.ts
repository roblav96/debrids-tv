declare module androidx {
	export module lifecycle {
		export class LifecycleRegistry extends androidx.lifecycle.Lifecycle {
			public static class: java.lang.Class<androidx.lifecycle.LifecycleRegistry>;
			public constructor(provider: androidx.lifecycle.LifecycleOwner);
			public removeObserver(observer: androidx.lifecycle.LifecycleObserver): void;
			public setCurrentState(state: androidx.lifecycle.Lifecycle.State): void;
			public handleLifecycleEvent(event: androidx.lifecycle.Lifecycle.Event): void;
			public getObserverCount(): number;
			public addObserver(lifecycleObserver0: androidx.lifecycle.LifecycleObserver): void;
			public constructor();
			public addObserver(observer: androidx.lifecycle.LifecycleObserver): void;
			public removeObserver(lifecycleObserver0: androidx.lifecycle.LifecycleObserver): void;
			public getCurrentState(): androidx.lifecycle.Lifecycle.State;
			/** @deprecated */
			public markState(state: androidx.lifecycle.Lifecycle.State): void;
		}
		export module LifecycleRegistry {
			export class ObserverWithState extends java.lang.Object {
				public static class: java.lang.Class<androidx.lifecycle.LifecycleRegistry.ObserverWithState>;
			}
		}
	}
}

declare module androidx {
	export module lifecycle {
		export class LifecycleRegistryOwner extends java.lang.Object implements androidx.lifecycle.LifecycleOwner {
			public static class: java.lang.Class<androidx.lifecycle.LifecycleRegistryOwner>;
			/**
			 * Constructs a new instance of the androidx.lifecycle.LifecycleRegistryOwner interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getLifecycle(): androidx.lifecycle.LifecycleRegistry;
				getLifecycle(): androidx.lifecycle.Lifecycle;
			});
			public constructor();
			public getLifecycle(): androidx.lifecycle.LifecycleRegistry;
			public getLifecycle(): androidx.lifecycle.Lifecycle;
		}
	}
}

declare module androidx {
	export module lifecycle {
		export class ReportFragment extends globalAndroid.app.Fragment {
			public static class: java.lang.Class<androidx.lifecycle.ReportFragment>;
			public onActivityCreated(savedInstanceState: globalAndroid.os.Bundle): void;
			public onStart(): void;
			public onResume(): void;
			/** @deprecated */
			public onPause(): void;
			/** @deprecated */
			public onStop(): void;
			public constructor();
			public onDestroy(): void;
			/** @deprecated */
			public onCreateContextMenu(menu: globalAndroid.view.ContextMenu, v: globalAndroid.view.View, menuInfo: globalAndroid.view.ContextMenu.ContextMenuInfo): void;
			public static injectIfNeededIn(activity: globalAndroid.app.Activity): void;
			/** @deprecated */
			public onDestroy(): void;
			/** @deprecated */
			public onActivityCreated(savedInstanceState: globalAndroid.os.Bundle): void;
			public onCreateContextMenu(menu: globalAndroid.view.ContextMenu, v: globalAndroid.view.View, menuInfo: globalAndroid.view.ContextMenu.ContextMenuInfo): void;
			/** @deprecated */
			public constructor();
			public onTrimMemory(level: number): void;
			public onPause(): void;
			/** @deprecated */
			public onTrimMemory(level: number): void;
			/** @deprecated */
			public onStart(): void;
			/** @deprecated */
			public onResume(): void;
			public onStop(): void;
		}
		export module ReportFragment {
			export class ActivityInitializationListener extends java.lang.Object {
				public static class: java.lang.Class<androidx.lifecycle.ReportFragment.ActivityInitializationListener>;
				/**
				 * Constructs a new instance of the androidx.lifecycle.ReportFragment() when extending the interface class.
				 */
				public constructor(implementation: {
					onCreate(): void;
					onStart(): void;
					onResume(): void;
				});
				public constructor();
				public onResume(): void;
				public onStart(): void;
				public onCreate(): void;
			}
			export class LifecycleCallbacks extends java.lang.Object implements globalAndroid.app.Application.ActivityLifecycleCallbacks {
				public static class: java.lang.Class<androidx.lifecycle.ReportFragment.LifecycleCallbacks>;
				public onActivitySaveInstanceState(activity: globalAndroid.app.Activity, bundle: globalAndroid.os.Bundle): void;
				public onActivityCreated(activity: globalAndroid.app.Activity, bundle: globalAndroid.os.Bundle): void;
				public onActivityDestroyed(activity: globalAndroid.app.Activity): void;
				public onActivityPostDestroyed(activity: globalAndroid.app.Activity): void;
				public onActivityResumed(activity: globalAndroid.app.Activity): void;
				public onActivityPostStopped(activity: globalAndroid.app.Activity): void;
				public onActivityPaused(activity: globalAndroid.app.Activity): void;
				public onActivityPrePaused(activity: globalAndroid.app.Activity): void;
				public onActivityPreStopped(activity: globalAndroid.app.Activity): void;
				public onActivityPostStarted(activity: globalAndroid.app.Activity): void;
				public onActivityPostSaveInstanceState(activity: globalAndroid.app.Activity, outState: globalAndroid.os.Bundle): void;
				public onActivityStarted(activity: globalAndroid.app.Activity): void;
				public onActivityPreStarted(activity: globalAndroid.app.Activity): void;
				public onActivityPreSaveInstanceState(activity: globalAndroid.app.Activity, outState: globalAndroid.os.Bundle): void;
				public onActivityPostPaused(activity: globalAndroid.app.Activity): void;
				public onActivityPreCreated(activity: globalAndroid.app.Activity, savedInstanceState: globalAndroid.os.Bundle): void;
				public onActivityStopped(activity: globalAndroid.app.Activity): void;
				public onActivityPreResumed(activity: globalAndroid.app.Activity): void;
				public onActivityPostResumed(activity: globalAndroid.app.Activity): void;
				public onActivityPreDestroyed(activity: globalAndroid.app.Activity): void;
				public onActivityPostCreated(activity: globalAndroid.app.Activity, savedInstanceState: globalAndroid.os.Bundle): void;
			}
		}
	}
}

//Generics information:

