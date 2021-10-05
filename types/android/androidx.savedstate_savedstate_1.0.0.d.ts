declare module androidx {
	export module savedstate {
		export class Recreator extends java.lang.Object implements androidx.lifecycle.GenericLifecycleObserver {
			public static class: java.lang.Class<androidx.savedstate.Recreator>;
			public onStateChanged(source: androidx.lifecycle.LifecycleOwner, event: androidx.lifecycle.Lifecycle.Event): void;
		}
		export module Recreator {
			export class SavedStateProvider extends java.lang.Object implements androidx.savedstate.SavedStateRegistry.SavedStateProvider {
				public static class: java.lang.Class<androidx.savedstate.Recreator.SavedStateProvider>;
				public saveState(): globalAndroid.os.Bundle;
			}
		}
	}
}

declare module androidx {
	export module savedstate {
		export class SavedStateRegistry extends java.lang.Object {
			public static class: java.lang.Class<androidx.savedstate.SavedStateRegistry>;
			public registerSavedStateProvider(key: string, provider: androidx.savedstate.SavedStateRegistry.SavedStateProvider): void;
			public unregisterSavedStateProvider(key: string): void;
			public isRestored(): boolean;
			public consumeRestoredStateForKey(key: string): globalAndroid.os.Bundle;
			public runOnNextRecreation(clazz: java.lang.Class<any>): void;
		}
		export module SavedStateRegistry {
			export class AutoRecreated extends java.lang.Object {
				public static class: java.lang.Class<androidx.savedstate.SavedStateRegistry.AutoRecreated>;
				/**
				 * Constructs a new instance of the androidx.savedstate.SavedStateRegistry() when extending the interface class.
				 */
				public constructor(implementation: {
					onRecreated(savedStateRegistryOwner0: androidx.savedstate.SavedStateRegistryOwner): void;
				});
				public constructor();
				public onRecreated(savedStateRegistryOwner0: androidx.savedstate.SavedStateRegistryOwner): void;
			}
			export class SavedStateProvider extends java.lang.Object {
				public static class: java.lang.Class<androidx.savedstate.SavedStateRegistry.SavedStateProvider>;
				/**
				 * Constructs a new instance of the androidx.savedstate.SavedStateRegistry() when extending the interface class.
				 */
				public constructor(implementation: {
					saveState(): globalAndroid.os.Bundle;
				});
				public constructor();
				public saveState(): globalAndroid.os.Bundle;
			}
		}
	}
}

declare module androidx {
	export module savedstate {
		export class SavedStateRegistryController extends java.lang.Object {
			public static class: java.lang.Class<androidx.savedstate.SavedStateRegistryController>;
			public static create(owner: androidx.savedstate.SavedStateRegistryOwner): androidx.savedstate.SavedStateRegistryController;
			public performRestore(savedState: globalAndroid.os.Bundle): void;
			public getSavedStateRegistry(): androidx.savedstate.SavedStateRegistry;
			public performSave(outBundle: globalAndroid.os.Bundle): void;
		}
	}
}

declare module androidx {
	export module savedstate {
		export class SavedStateRegistryOwner extends java.lang.Object implements androidx.lifecycle.LifecycleOwner {
			public static class: java.lang.Class<androidx.savedstate.SavedStateRegistryOwner>;
			/**
			 * Constructs a new instance of the androidx.savedstate.SavedStateRegistryOwner interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getSavedStateRegistry(): androidx.savedstate.SavedStateRegistry;
				getLifecycle(): androidx.lifecycle.Lifecycle;
			});
			public constructor();
			public getSavedStateRegistry(): androidx.savedstate.SavedStateRegistry;
			public getLifecycle(): androidx.lifecycle.Lifecycle;
		}
	}
}

//Generics information:

