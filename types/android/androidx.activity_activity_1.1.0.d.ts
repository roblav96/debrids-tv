declare module androidx {
	export module activity {
		export class Cancellable extends java.lang.Object {
			public static class: java.lang.Class<androidx.activity.Cancellable>;
			/**
			 * Constructs a new instance of the androidx.activity.Cancellable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				cancel(): void;
			});
			public constructor();
			public cancel(): void;
		}
	}
}

declare module androidx {
	export module activity {
		export class ComponentActivity extends androidx.core.app.ComponentActivity implements androidx.lifecycle.LifecycleOwner, androidx.lifecycle.ViewModelStoreOwner, androidx.lifecycle.HasDefaultViewModelProviderFactory, androidx.savedstate.SavedStateRegistryOwner, androidx.activity.OnBackPressedDispatcherOwner {
			public static class: java.lang.Class<androidx.activity.ComponentActivity>;
			public onCreateView(parent: globalAndroid.view.View, name: string, context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet): globalAndroid.view.View;
			public onSearchRequested(searchEvent: any): boolean;
			public onActionModeFinished(mode: globalAndroid.view.ActionMode): void;
			public getSavedStateRegistry(): androidx.savedstate.SavedStateRegistry;
			public constructor(base: globalAndroid.content.Context);
			public onWindowStartingActionMode(callback: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
			/** @deprecated */
			public onRetainCustomNonConfigurationInstance(): any;
			public onSearchRequested(): boolean;
			public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
			public onCreatePanelMenu(featureId: number, menu: globalAndroid.view.Menu): boolean;
			public onCreate(savedInstanceState: globalAndroid.os.Bundle): void;
			public getDefaultViewModelProviderFactory(): androidx.lifecycle.ViewModelProvider.Factory;
			public onDetachedFromWindow(): void;
			public onPanelClosed(featureId: number, menu: globalAndroid.view.Menu): void;
			/** @deprecated */
			public getLastCustomNonConfigurationInstance(): any;
			public constructor();
			public getViewModelStore(): androidx.lifecycle.ViewModelStore;
			public onCreate(savedInstanceState: globalAndroid.os.Bundle, persistentState: any): void;
			public onPreparePanel(featureId: number, view: globalAndroid.view.View, menu: globalAndroid.view.Menu): boolean;
			public onTrimMemory(level: number): void;
			public onCreatePanelView(featureId: number): globalAndroid.view.View;
			public onContentChanged(): void;
			public onActionModeStarted(mode: globalAndroid.view.ActionMode): void;
			public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
			public constructor(contentLayoutId: number);
			public dispatchTouchEvent(ev: globalAndroid.view.MotionEvent): boolean;
			public superDispatchKeyEvent(event: globalAndroid.view.KeyEvent): boolean;
			public constructor(base: globalAndroid.content.Context, theme: globalAndroid.content.res.Resources.Theme);
			public onRetainNonConfigurationInstance(): any;
			public getOnBackPressedDispatcher(): androidx.activity.OnBackPressedDispatcher;
			public onSaveInstanceState(outState: globalAndroid.os.Bundle): void;
			public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
			public onCreateContextMenu(menu: globalAndroid.view.ContextMenu, v: globalAndroid.view.View, menuInfo: globalAndroid.view.ContextMenu.ContextMenuInfo): void;
			public onMenuItemSelected(featureId: number, item: globalAndroid.view.MenuItem): boolean;
			public onBackPressed(): void;
			public dispatchKeyEvent(event: globalAndroid.view.KeyEvent): boolean;
			public onWindowFocusChanged(hasFocus: boolean): void;
			public constructor(base: globalAndroid.content.Context, themeResId: number);
			public onSaveInstanceState(outState: globalAndroid.os.Bundle, outPersistentState: any): void;
			public onWindowStartingActionMode(callback: globalAndroid.view.ActionMode.Callback, type: number): globalAndroid.view.ActionMode;
			public getLifecycle(): androidx.lifecycle.Lifecycle;
			public onProvideKeyboardShortcuts(data: java.util.List<any>, menu: globalAndroid.view.Menu, deviceId: number): void;
			public onMenuOpened(featureId: number, menu: globalAndroid.view.Menu): boolean;
			public onPointerCaptureChanged(hasCapture: boolean): void;
			public dispatchTrackballEvent(ev: globalAndroid.view.MotionEvent): boolean;
			public onWindowAttributesChanged(params: globalAndroid.view.WindowManager.LayoutParams): void;
			public dispatchKeyShortcutEvent(event: globalAndroid.view.KeyEvent): boolean;
			public dispatchPopulateAccessibilityEvent(event: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
			public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
			public onCreateView(name: string, context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet): globalAndroid.view.View;
			public onAttachedToWindow(): void;
			public dispatchGenericMotionEvent(ev: globalAndroid.view.MotionEvent): boolean;
		}
		export module ComponentActivity {
			export class NonConfigurationInstances extends java.lang.Object {
				public static class: java.lang.Class<androidx.activity.ComponentActivity.NonConfigurationInstances>;
			}
		}
	}
}

declare module androidx {
	export module activity {
		export class ImmLeaksCleaner extends java.lang.Object implements androidx.lifecycle.LifecycleEventObserver {
			public static class: java.lang.Class<androidx.activity.ImmLeaksCleaner>;
			public onStateChanged(source: androidx.lifecycle.LifecycleOwner, event: androidx.lifecycle.Lifecycle.Event): void;
		}
	}
}

declare module androidx {
	export module activity {
		export abstract class OnBackPressedCallback extends java.lang.Object {
			public static class: java.lang.Class<androidx.activity.OnBackPressedCallback>;
			public isEnabled(): boolean;
			public setEnabled(enabled: boolean): void;
			public constructor(enabled: boolean);
			public handleOnBackPressed(): void;
			public remove(): void;
		}
	}
}

declare module androidx {
	export module activity {
		export class OnBackPressedDispatcher extends java.lang.Object {
			public static class: java.lang.Class<androidx.activity.OnBackPressedDispatcher>;
			public constructor(fallbackOnBackPressed: java.lang.Runnable);
			public onBackPressed(): void;
			public addCallback(onBackPressedCallback: androidx.activity.OnBackPressedCallback): void;
			public addCallback(owner: androidx.lifecycle.LifecycleOwner, onBackPressedCallback: androidx.activity.OnBackPressedCallback): void;
			public constructor();
			public hasEnabledCallbacks(): boolean;
		}
		export module OnBackPressedDispatcher {
			export class LifecycleOnBackPressedCancellable extends java.lang.Object implements androidx.lifecycle.LifecycleEventObserver, androidx.activity.Cancellable {
				public static class: java.lang.Class<androidx.activity.OnBackPressedDispatcher.LifecycleOnBackPressedCancellable>;
				public onStateChanged(source: androidx.lifecycle.LifecycleOwner, event: androidx.lifecycle.Lifecycle.Event): void;
				public cancel(): void;
			}
			export class OnBackPressedCancellable extends java.lang.Object implements androidx.activity.Cancellable {
				public static class: java.lang.Class<androidx.activity.OnBackPressedDispatcher.OnBackPressedCancellable>;
				public cancel(): void;
			}
		}
	}
}

declare module androidx {
	export module activity {
		export class OnBackPressedDispatcherOwner extends java.lang.Object implements androidx.lifecycle.LifecycleOwner {
			public static class: java.lang.Class<androidx.activity.OnBackPressedDispatcherOwner>;
			/**
			 * Constructs a new instance of the androidx.activity.OnBackPressedDispatcherOwner interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getOnBackPressedDispatcher(): androidx.activity.OnBackPressedDispatcher;
				getLifecycle(): androidx.lifecycle.Lifecycle;
			});
			public constructor();
			public getLifecycle(): androidx.lifecycle.Lifecycle;
			public getOnBackPressedDispatcher(): androidx.activity.OnBackPressedDispatcher;
		}
	}
}

//Generics information:

