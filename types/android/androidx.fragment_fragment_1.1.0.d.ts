declare module androidx {
	export module fragment {
		export module app {
			export class BackStackRecord extends androidx.fragment.app.FragmentTransaction implements androidx.fragment.app.FragmentManager.BackStackEntry, androidx.fragment.app.FragmentManagerImpl.OpGenerator {
				public static class: java.lang.Class<androidx.fragment.app.BackStackRecord>;
				public commitAllowingStateLoss(): number;
				public commitNowAllowingStateLoss(): void;
				public constructor(manager: androidx.fragment.app.FragmentManagerImpl);
				public detach(fragment: androidx.fragment.app.Fragment): androidx.fragment.app.FragmentTransaction;
				public commitNow(): void;
				public generateOps(records: java.util.ArrayList<androidx.fragment.app.BackStackRecord>, isRecordPop: java.util.ArrayList<java.lang.Boolean>): boolean;
				public dump(prefix: string, writer: java.io.PrintWriter, full: boolean): void;
				public setMaxLifecycle(fragment: androidx.fragment.app.Fragment, state: androidx.lifecycle.Lifecycle.State): androidx.fragment.app.FragmentTransaction;
				public getId(): number;
				public getName(): string;
				public getBreadCrumbTitle(): string;
				public toString(): string;
				public constructor();
				public commit(): number;
				public hide(fragment: androidx.fragment.app.Fragment): androidx.fragment.app.FragmentTransaction;
				public show(fragment: androidx.fragment.app.Fragment): androidx.fragment.app.FragmentTransaction;
				public remove(fragment: androidx.fragment.app.Fragment): androidx.fragment.app.FragmentTransaction;
				public runOnCommitRunnables(): void;
				public dump(prefix: string, writer: java.io.PrintWriter): void;
				public getBreadCrumbShortTitleRes(): number;
				public getBreadCrumbShortTitle(): string;
				public isEmpty(): boolean;
				public getBreadCrumbTitleRes(): number;
				public setPrimaryNavigationFragment(fragment: androidx.fragment.app.Fragment): androidx.fragment.app.FragmentTransaction;
			}
		}
	}
}

declare module androidx {
	export module fragment {
		export module app {
			export class BackStackState extends java.lang.Object implements globalAndroid.os.Parcelable {
				public static class: java.lang.Class<androidx.fragment.app.BackStackState>;
				public static CREATOR: globalAndroid.os.Parcelable.Creator<androidx.fragment.app.BackStackState>;
				public constructor(bse: androidx.fragment.app.BackStackRecord);
				public instantiate(fm: androidx.fragment.app.FragmentManagerImpl): androidx.fragment.app.BackStackRecord;
				public describeContents(): number;
				public writeToParcel(dest: globalAndroid.os.Parcel, flags: number): void;
				public constructor(in0: globalAndroid.os.Parcel);
			}
		}
	}
}

declare module androidx {
	export module fragment {
		export module app {
			export class DialogFragment extends androidx.fragment.app.Fragment implements globalAndroid.content.DialogInterface.OnCancelListener, globalAndroid.content.DialogInterface.OnDismissListener {
				public static class: java.lang.Class<androidx.fragment.app.DialogFragment>;
				public static STYLE_NORMAL: number;
				public static STYLE_NO_TITLE: number;
				public static STYLE_NO_FRAME: number;
				public static STYLE_NO_INPUT: number;
				public getDialog(): globalAndroid.app.Dialog;
				public setupDialog(dialog: globalAndroid.app.Dialog, style: number): void;
				public getViewModelStore(): androidx.lifecycle.ViewModelStore;
				public setStyle(style: number, theme: number): void;
				public show(manager: androidx.fragment.app.FragmentManager, tag: string): void;
				public showNow(manager: androidx.fragment.app.FragmentManager, tag: string): void;
				public onCreateDialog(savedInstanceState: globalAndroid.os.Bundle): globalAndroid.app.Dialog;
				public dismiss(): void;
				public onCreate(savedInstanceState: globalAndroid.os.Bundle): void;
				public getLifecycle(): androidx.lifecycle.Lifecycle;
				public constructor();
				public setShowsDialog(showsDialog: boolean): void;
				public getSavedStateRegistry(): androidx.savedstate.SavedStateRegistry;
				public onCancel(dialog: globalAndroid.content.DialogInterface): void;
				public onStop(): void;
				public dismissAllowingStateLoss(): void;
				/** @deprecated */
				public onAttach(activity: globalAndroid.app.Activity): void;
				public getShowsDialog(): boolean;
				public onDismiss(dialog: globalAndroid.content.DialogInterface): void;
				public onConfigurationChanged(newConfig: globalAndroid.content.res.Configuration): void;
				public onLowMemory(): void;
				public onSaveInstanceState(outState: globalAndroid.os.Bundle): void;
				public onCreateContextMenu(menu: globalAndroid.view.ContextMenu, v: globalAndroid.view.View, menuInfo: globalAndroid.view.ContextMenu.ContextMenuInfo): void;
				public show(transaction: androidx.fragment.app.FragmentTransaction, tag: string): number;
				public requireDialog(): globalAndroid.app.Dialog;
				public onStart(): void;
				public onAttach(context: globalAndroid.content.Context): void;
				public setCancelable(cancelable: boolean): void;
				public getTheme(): number;
				public constructor(contentLayoutId: number);
				public onGetLayoutInflater(savedInstanceState: globalAndroid.os.Bundle): globalAndroid.view.LayoutInflater;
				public onActivityCreated(savedInstanceState: globalAndroid.os.Bundle): void;
				public isCancelable(): boolean;
				public onDestroyView(): void;
				public onDetach(): void;
			}
		}
	}
}

declare module androidx {
	export module fragment {
		export module app {
			export class Fragment extends java.lang.Object implements globalAndroid.content.ComponentCallbacks, globalAndroid.view.View.OnCreateContextMenuListener, androidx.lifecycle.LifecycleOwner, androidx.lifecycle.ViewModelStoreOwner, androidx.savedstate.SavedStateRegistryOwner {
				public static class: java.lang.Class<androidx.fragment.app.Fragment>;
				public onDestroyOptionsMenu(): void;
				public registerForContextMenu(view: globalAndroid.view.View): void;
				public isStateSaved(): boolean;
				public getLifecycle(): androidx.lifecycle.Lifecycle;
				public onPictureInPictureModeChanged(isInPictureInPictureMode: boolean): void;
				public startActivityForResult(intent: globalAndroid.content.Intent, requestCode: number, options: globalAndroid.os.Bundle): void;
				public hasOptionsMenu(): boolean;
				/** @deprecated */
				public onAttach(activity: globalAndroid.app.Activity): void;
				public isInLayout(): boolean;
				public getString(resId: number, formatArgs: native.Array<any>): string;
				public getEnterTransition(): any;
				public setHasOptionsMenu(hasMenu: boolean): void;
				public onSaveInstanceState(outState: globalAndroid.os.Bundle): void;
				public setTargetFragment(fragment: androidx.fragment.app.Fragment, requestCode: number): void;
				public onStart(): void;
				public getSharedElementReturnTransition(): any;
				public getRetainInstance(): boolean;
				public startPostponedEnterTransition(): void;
				public getViewModelStore(): androidx.lifecycle.ViewModelStore;
				/** @deprecated */
				public static instantiate(context: globalAndroid.content.Context, fname: string, bundle2: globalAndroid.os.Bundle): androidx.fragment.app.Fragment;
				/** @deprecated */
				public getLoaderManager(): androidx.loader.app.LoaderManager;
				public onOptionsMenuClosed(menu: globalAndroid.view.Menu): void;
				public setSharedElementReturnTransition(transition: any): void;
				public onViewStateRestored(savedInstanceState: globalAndroid.os.Bundle): void;
				public isHidden(): boolean;
				public onCreate(savedInstanceState: globalAndroid.os.Bundle): void;
				public getSavedStateRegistry(): androidx.savedstate.SavedStateRegistry;
				public unregisterForContextMenu(view: globalAndroid.view.View): void;
				public onViewCreated(view: globalAndroid.view.View, savedInstanceState: globalAndroid.os.Bundle): void;
				public getActivity(): androidx.fragment.app.FragmentActivity;
				public onActivityResult(requestCode: number, resultCode: number, data: globalAndroid.content.Intent): void;
				public getResources(): globalAndroid.content.res.Resources;
				public getString(resId: number): string;
				public requireView(): globalAndroid.view.View;
				public onOptionsItemSelected(item: globalAndroid.view.MenuItem): boolean;
				public startIntentSenderForResult(intent: globalAndroid.content.IntentSender, requestCode: number, fillInIntent: globalAndroid.content.Intent, flagsMask: number, flagsValues: number, extraFlags: number, options: globalAndroid.os.Bundle): void;
				public setReturnTransition(transition: any): void;
				public onPrepareOptionsMenu(menu: globalAndroid.view.Menu): void;
				public getExitTransition(): any;
				public onCreateAnimator(transit: number, enter: boolean, nextAnim: number): globalAndroid.animation.Animator;
				/** @deprecated */
				public onInflate(activity: globalAndroid.app.Activity, attrs: globalAndroid.util.AttributeSet, savedInstanceState: globalAndroid.os.Bundle): void;
				public getReenterTransition(): any;
				/** @deprecated */
				public getUserVisibleHint(): boolean;
				public equals(obj: any): boolean;
				public startActivity(intent: globalAndroid.content.Intent): void;
				public onAttach(context: globalAndroid.content.Context): void;
				public requireHost(): any;
				public setRetainInstance(retain: boolean): void;
				public requireContext(): globalAndroid.content.Context;
				public onActivityCreated(savedInstanceState: globalAndroid.os.Bundle): void;
				public setSharedElementEnterTransition(transition: any): void;
				public setExitTransition(transition: any): void;
				public isRemoving(): boolean;
				public startActivityForResult(intent: globalAndroid.content.Intent, requestCode: number): void;
				public setEnterTransition(transition: any): void;
				public getView(): globalAndroid.view.View;
				public dump(prefix: string, fd: java.io.FileDescriptor, writer: java.io.PrintWriter, strings3: native.Array<string>): void;
				public constructor();
				public onCreateOptionsMenu(menu: globalAndroid.view.Menu, inflater: globalAndroid.view.MenuInflater): void;
				public getAllowReturnTransitionOverlap(): boolean;
				public getTargetRequestCode(): number;
				public setMenuVisibility(menuVisible: boolean): void;
				public hashCode(): number;
				public getFragmentManager(): androidx.fragment.app.FragmentManager;
				public startActivity(intent: globalAndroid.content.Intent, options: globalAndroid.os.Bundle): void;
				public postponeEnterTransition(duration: number, timeUnit: java.util.concurrent.TimeUnit): void;
				public getSharedElementEnterTransition(): any;
				public requireParentFragment(): androidx.fragment.app.Fragment;
				public shouldShowRequestPermissionRationale(permission: string): boolean;
				public onResume(): void;
				public onConfigurationChanged(newConfig: globalAndroid.content.res.Configuration): void;
				public requireArguments(): globalAndroid.os.Bundle;
				public getContext(): globalAndroid.content.Context;
				public getViewLifecycleOwner(): androidx.lifecycle.LifecycleOwner;
				public getTag(): string;
				public toString(): string;
				public onCreateView(inflater: globalAndroid.view.LayoutInflater, container: globalAndroid.view.ViewGroup, savedInstanceState: globalAndroid.os.Bundle): globalAndroid.view.View;
				/** @deprecated */
				public setUserVisibleHint(isVisibleToUser: boolean): void;
				public requestPermissions(permissions: native.Array<string>, requestCode: number): void;
				public onAttachFragment(childFragment: androidx.fragment.app.Fragment): void;
				public onCreateAnimation(transit: number, enter: boolean, nextAnim: number): globalAndroid.view.animation.Animation;
				public getHost(): any;
				public isResumed(): boolean;
				public onGetLayoutInflater(savedInstanceState: globalAndroid.os.Bundle): globalAndroid.view.LayoutInflater;
				public getAllowEnterTransitionOverlap(): boolean;
				public getText(resId: number): string;
				public onDestroyView(): void;
				public requireActivity(): androidx.fragment.app.FragmentActivity;
				public onDetach(): void;
				public postponeEnterTransition(): void;
				public isVisible(): boolean;
				public getChildFragmentManager(): androidx.fragment.app.FragmentManager;
				public setExitSharedElementCallback(callback: androidx.core.app.SharedElementCallback): void;
				public setInitialSavedState(state: androidx.fragment.app.Fragment.SavedState): void;
				public setEnterSharedElementCallback(callback: androidx.core.app.SharedElementCallback): void;
				public onPrimaryNavigationFragmentChanged(isPrimaryNavigationFragment: boolean): void;
				public onPause(): void;
				public setAllowReturnTransitionOverlap(allow: boolean): void;
				public setAllowEnterTransitionOverlap(allow: boolean): void;
				public onRequestPermissionsResult(requestCode: number, permissions: native.Array<string>, grantResults: native.Array<number>): void;
				public onHiddenChanged(hidden: boolean): void;
				public equals(o: any): boolean;
				public isMenuVisible(): boolean;
				public onStop(): void;
				public setReenterTransition(transition: any): void;
				public getTargetFragment(): androidx.fragment.app.Fragment;
				public getLayoutInflater(): globalAndroid.view.LayoutInflater;
				public getArguments(): globalAndroid.os.Bundle;
				/** @deprecated */
				public getLayoutInflater(savedFragmentState: globalAndroid.os.Bundle): globalAndroid.view.LayoutInflater;
				public getViewLifecycleOwnerLiveData(): androidx.lifecycle.LiveData<androidx.lifecycle.LifecycleOwner>;
				/** @deprecated */
				public static instantiate(context: globalAndroid.content.Context, fname: string): androidx.fragment.app.Fragment;
				public onLowMemory(): void;
				public getId(): number;
				public onMultiWindowModeChanged(isInMultiWindowMode: boolean): void;
				public requireFragmentManager(): androidx.fragment.app.FragmentManager;
				public getReturnTransition(): any;
				public onInflate(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, savedInstanceState: globalAndroid.os.Bundle): void;
				public onCreateContextMenu(menu: globalAndroid.view.ContextMenu, v: globalAndroid.view.View, menuInfo: globalAndroid.view.ContextMenu.ContextMenuInfo): void;
				public onContextItemSelected(item: globalAndroid.view.MenuItem): boolean;
				public isAdded(): boolean;
				public getParentFragment(): androidx.fragment.app.Fragment;
				public constructor(contentLayoutId: number);
				public setArguments(bundle0: globalAndroid.os.Bundle): void;
				public isDetached(): boolean;
				public onDestroy(): void;
			}
			export module Fragment {
				export class AnimationInfo extends java.lang.Object {
					public static class: java.lang.Class<androidx.fragment.app.Fragment.AnimationInfo>;
				}
				export class InstantiationException extends java.lang.RuntimeException {
					public static class: java.lang.Class<androidx.fragment.app.Fragment.InstantiationException>;
					public constructor(message: string);
					public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
					public constructor();
					public constructor(msg: string, cause: java.lang.Exception);
					public constructor(cause: java.lang.Throwable);
					public constructor(message: string, cause: java.lang.Throwable);
				}
				export class OnStartEnterTransitionListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.fragment.app.Fragment.OnStartEnterTransitionListener>;
					/**
					 * Constructs a new instance of the androidx.fragment.app.Fragment() when extending the interface class.
					 */
					public constructor(implementation: {
						onStartEnterTransition(): void;
						startListening(): void;
					});
					public constructor();
					public onStartEnterTransition(): void;
					public startListening(): void;
				}
				export class SavedState extends java.lang.Object implements globalAndroid.os.Parcelable {
					public static class: java.lang.Class<androidx.fragment.app.Fragment.SavedState>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<androidx.fragment.app.Fragment.SavedState>;
					public describeContents(): number;
					public writeToParcel(dest: globalAndroid.os.Parcel, flags: number): void;
				}
			}
		}
	}
}

declare module androidx {
	export module fragment {
		export module app {
			export class FragmentActivity extends androidx.activity.ComponentActivity implements androidx.core.app.ActivityCompat.OnRequestPermissionsResultCallback, androidx.core.app.ActivityCompat.RequestPermissionsRequestCodeValidator {
				public static class: java.lang.Class<androidx.fragment.app.FragmentActivity>;
				public startActivityForResult(intent: globalAndroid.content.Intent, requestCode: number): void;
				public onWindowAttributesChanged(params: globalAndroid.view.WindowManager.LayoutParams): void;
				public supportPostponeEnterTransition(): void;
				public onMenuOpened(featureId: number, menu: globalAndroid.view.Menu): boolean;
				public constructor(base: globalAndroid.content.Context, themeResId: number);
				public onCreateView(name: string, context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet): globalAndroid.view.View;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
				public onNewIntent(intent: globalAndroid.content.Intent): void;
				/** @deprecated */
				public supportInvalidateOptionsMenu(): void;
				public dump(prefix: string, fd: java.io.FileDescriptor, writer: java.io.PrintWriter, strings3: native.Array<string>): void;
				public getSupportFragmentManager(): androidx.fragment.app.FragmentManager;
				public getLifecycle(): androidx.lifecycle.Lifecycle;
				public constructor();
				public onCreatePanelMenu(featureId: number, menu: globalAndroid.view.Menu): boolean;
				/** @deprecated */
				public startActivityFromFragment(fragment: globalAndroid.app.Fragment, intent: globalAndroid.content.Intent, requestCode: number, options: globalAndroid.os.Bundle): void;
				public onMultiWindowModeChanged(isInMultiWindowMode: boolean, newConfig: globalAndroid.content.res.Configuration): void;
				public setEnterSharedElementCallback(callback: any): void;
				public onWindowFocusChanged(hasFocus: boolean): void;
				public setExitSharedElementCallback(callback: any): void;
				public onCreate(savedInstanceState: globalAndroid.os.Bundle, persistentState: any): void;
				public onPictureInPictureModeChanged(isInPictureInPictureMode: boolean): void;
				public dispatchKeyEvent(event: globalAndroid.view.KeyEvent): boolean;
				public supportFinishAfterTransition(): void;
				public dispatchGenericMotionEvent(ev: globalAndroid.view.MotionEvent): boolean;
				public constructor(base: globalAndroid.content.Context, theme: globalAndroid.content.res.Resources.Theme);
				public dispatchPopulateAccessibilityEvent(event: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
				/** @deprecated */
				public getSupportLoaderManager(): androidx.loader.app.LoaderManager;
				public startActivityForResult(intent: globalAndroid.content.Intent, requestCode: number, options: globalAndroid.os.Bundle): void;
				public startIntentSenderForResult(intent: globalAndroid.content.IntentSender, requestCode: number, fillInIntent: globalAndroid.content.Intent, flagsMask: number, flagsValues: number, extraFlags: number): void;
				public onSaveInstanceState(outState: globalAndroid.os.Bundle, outPersistentState: any): void;
				public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public onConfigurationChanged(newConfig: globalAndroid.content.res.Configuration): void;
				public onResume(): void;
				public onCreatePanelView(featureId: number): globalAndroid.view.View;
				public onPreparePanel(featureId: number, view: globalAndroid.view.View, menu: globalAndroid.view.Menu): boolean;
				public onSaveInstanceState(outState: globalAndroid.os.Bundle): void;
				public getOnBackPressedDispatcher(): androidx.activity.OnBackPressedDispatcher;
				public onActionModeStarted(mode: globalAndroid.view.ActionMode): void;
				public onContentChanged(): void;
				public onSearchRequested(searchEvent: any): boolean;
				/** @deprecated */
				public onAttachFragment(fragment: globalAndroid.app.Fragment): void;
				public onPostResume(): void;
				public onStart(): void;
				public onDetachedFromWindow(): void;
				public dispatchKeyShortcutEvent(event: globalAndroid.view.KeyEvent): boolean;
				public onPointerCaptureChanged(hasCapture: boolean): void;
				/** @deprecated */
				public onPrepareOptionsPanel(view: globalAndroid.view.View, menu: globalAndroid.view.Menu): boolean;
				public onSearchRequested(): boolean;
				public dispatchTrackballEvent(ev: globalAndroid.view.MotionEvent): boolean;
				public getViewModelStore(): androidx.lifecycle.ViewModelStore;
				/** @deprecated */
				public startActivityFromFragment(fragment: globalAndroid.app.Fragment, intent: globalAndroid.content.Intent, requestCode: number): void;
				public setEnterSharedElementCallback(callback: androidx.core.app.SharedElementCallback): void;
				public onPause(): void;
				/** @deprecated */
				public onStateNotSaved(): void;
				public onResumeFragments(): void;
				public onCreate(savedInstanceState: globalAndroid.os.Bundle): void;
				public onWindowStartingActionMode(callback: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
				public onTrimMemory(level: number): void;
				public getSavedStateRegistry(): androidx.savedstate.SavedStateRegistry;
				public constructor(base: globalAndroid.content.Context);
				public onActionModeFinished(mode: globalAndroid.view.ActionMode): void;
				public validateRequestPermissionsRequestCode(requestCode: number): void;
				public startActivityFromFragment(fragment: androidx.fragment.app.Fragment, intent: globalAndroid.content.Intent, requestCode: number): void;
				public setExitSharedElementCallback(listener: androidx.core.app.SharedElementCallback): void;
				public onRequestPermissionsResult(requestCode: number, permissions: native.Array<string>, grantResults: native.Array<number>): void;
				public onProvideKeyboardShortcuts(data: java.util.List<any>, menu: globalAndroid.view.Menu, deviceId: number): void;
				public onActivityResult(requestCode: number, resultCode: number, data: globalAndroid.content.Intent): void;
				public onStop(): void;
				public superDispatchKeyEvent(event: globalAndroid.view.KeyEvent): boolean;
				public onWindowStartingActionMode(callback: globalAndroid.view.ActionMode.Callback, type: number): globalAndroid.view.ActionMode;
				public onPanelClosed(featureId: number, menu: globalAndroid.view.Menu): void;
				public onLowMemory(): void;
				public onCreateView(parent: globalAndroid.view.View, name: string, context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet): globalAndroid.view.View;
				public onPictureInPictureModeChanged(isInPictureInPictureMode: boolean, newConfig: globalAndroid.content.res.Configuration): void;
				public startIntentSenderForResult(intent: globalAndroid.content.IntentSender, requestCode: number, fillInIntent: globalAndroid.content.Intent, flagsMask: number, flagsValues: number, extraFlags: number, options: globalAndroid.os.Bundle): void;
				public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public onMultiWindowModeChanged(isInMultiWindowMode: boolean): void;
				public onStateNotSaved(): void;
				public onCreateContextMenu(menu: globalAndroid.view.ContextMenu, v: globalAndroid.view.View, menuInfo: globalAndroid.view.ContextMenu.ContextMenuInfo): void;
				public onMenuItemSelected(featureId: number, item: globalAndroid.view.MenuItem): boolean;
				public startActivityFromFragment(fragment: androidx.fragment.app.Fragment, intent: globalAndroid.content.Intent, requestCode: number, options: globalAndroid.os.Bundle): void;
				public onAttachFragment(fragment: androidx.fragment.app.Fragment): void;
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public startIntentSenderFromFragment(fragment: androidx.fragment.app.Fragment, intent: globalAndroid.content.IntentSender, requestCode: number, fillInIntent: globalAndroid.content.Intent, flagsMask: number, flagsValues: number, extraFlags: number, options: globalAndroid.os.Bundle): void;
				public constructor(contentLayoutId: number);
				/** @deprecated */
				public onMultiWindowModeChanged(isInMultiWindowMode: boolean): void;
				public onDestroy(): void;
				public onAttachedToWindow(): void;
				public supportStartPostponedEnterTransition(): void;
				/** @deprecated */
				public onPictureInPictureModeChanged(isInPictureInPictureMode: boolean): void;
				public dispatchTouchEvent(ev: globalAndroid.view.MotionEvent): boolean;
			}
			export module FragmentActivity {
				export class HostCallbacks extends androidx.fragment.app.FragmentHostCallback<androidx.fragment.app.FragmentActivity> {
					public static class: java.lang.Class<androidx.fragment.app.FragmentActivity.HostCallbacks>;
					public onDump(prefix: string, fd: java.io.FileDescriptor, writer: java.io.PrintWriter, strings3: native.Array<string>): void;
					public onShouldSaveFragmentState(fragment: androidx.fragment.app.Fragment): boolean;
					public getOnBackPressedDispatcher(): androidx.activity.OnBackPressedDispatcher;
					public getViewModelStore(): androidx.lifecycle.ViewModelStore;
					public onStartActivityFromFragment(fragment: androidx.fragment.app.Fragment, intent: globalAndroid.content.Intent, requestCode: number): void;
					public onGetLayoutInflater(): globalAndroid.view.LayoutInflater;
					public onStartIntentSenderFromFragment(fragment: androidx.fragment.app.Fragment, intent: globalAndroid.content.IntentSender, requestCode: number, fillInIntent: globalAndroid.content.Intent, flagsMask: number, flagsValues: number, extraFlags: number, options: globalAndroid.os.Bundle): void;
					public onGetWindowAnimations(): number;
					public getLifecycle(): androidx.lifecycle.Lifecycle;
					public onRequestPermissionsFromFragment(fragment: androidx.fragment.app.Fragment, permissions: native.Array<string>, requestCode: number): void;
					public onShouldShowRequestPermissionRationale(permission: string): boolean;
					public onStartActivityFromFragment(fragment: androidx.fragment.app.Fragment, intent: globalAndroid.content.Intent, requestCode: number, options: globalAndroid.os.Bundle): void;
					public onHasWindowAnimations(): boolean;
					public onAttachFragment(fragment: androidx.fragment.app.Fragment): void;
					public onGetHost(): androidx.fragment.app.FragmentActivity;
					public onHasView(): boolean;
					public constructor(context: globalAndroid.content.Context, handler: globalAndroid.os.Handler, windowAnimations: number);
					public onGetHost(): any;
					public constructor();
					public constructor(this0: androidx.fragment.app.FragmentActivity);
					public onSupportInvalidateOptionsMenu(): void;
					public onFindViewById(id: number): globalAndroid.view.View;
				}
			}
		}
	}
}

declare module androidx {
	export module fragment {
		export module app {
			export abstract class FragmentContainer extends java.lang.Object {
				public static class: java.lang.Class<androidx.fragment.app.FragmentContainer>;
				/** @deprecated */
				public instantiate(context: globalAndroid.content.Context, className: string, bundle2: globalAndroid.os.Bundle): androidx.fragment.app.Fragment;
				public onHasView(): boolean;
				public constructor();
				public onFindViewById(int0: number): globalAndroid.view.View;
			}
		}
	}
}

declare module androidx {
	export module fragment {
		export module app {
			export class FragmentController extends java.lang.Object {
				public static class: java.lang.Class<androidx.fragment.app.FragmentController>;
				public dispatchOptionsItemSelected(item: globalAndroid.view.MenuItem): boolean;
				public dispatchCreateOptionsMenu(menu: globalAndroid.view.Menu, inflater: globalAndroid.view.MenuInflater): boolean;
				public saveAllState(): globalAndroid.os.Parcelable;
				/** @deprecated */
				public dumpLoaders(prefix: string, fd: java.io.FileDescriptor, writer: java.io.PrintWriter, strings3: native.Array<string>): void;
				public dispatchPictureInPictureModeChanged(isInPictureInPictureMode: boolean): void;
				public getActiveFragments(actives: java.util.List<androidx.fragment.app.Fragment>): java.util.List<androidx.fragment.app.Fragment>;
				public dispatchLowMemory(): void;
				public getActiveFragmentsCount(): number;
				public getSupportFragmentManager(): androidx.fragment.app.FragmentManager;
				public dispatchStop(): void;
				/** @deprecated */
				public retainNestedNonConfig(): androidx.fragment.app.FragmentManagerNonConfig;
				public noteStateNotSaved(): void;
				public restoreSaveState(state: globalAndroid.os.Parcelable): void;
				public dispatchOptionsMenuClosed(menu: globalAndroid.view.Menu): void;
				/** @deprecated */
				public dispatchReallyStop(): void;
				public findFragmentByWho(who: string): androidx.fragment.app.Fragment;
				/** @deprecated */
				public restoreAllState(state: globalAndroid.os.Parcelable, nonConfigList: java.util.List<androidx.fragment.app.Fragment>): void;
				/** @deprecated */
				public restoreAllState(state: globalAndroid.os.Parcelable, nonConfig: androidx.fragment.app.FragmentManagerNonConfig): void;
				public dispatchResume(): void;
				/** @deprecated */
				public getSupportLoaderManager(): androidx.loader.app.LoaderManager;
				public dispatchDestroy(): void;
				/** @deprecated */
				public doLoaderStart(): void;
				public attachHost(parent: androidx.fragment.app.Fragment): void;
				public static createController(callbacks: androidx.fragment.app.FragmentHostCallback<any>): androidx.fragment.app.FragmentController;
				/** @deprecated */
				public reportLoaderStart(): void;
				public dispatchStart(): void;
				public onCreateView(parent: globalAndroid.view.View, name: string, context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet): globalAndroid.view.View;
				public dispatchPrepareOptionsMenu(menu: globalAndroid.view.Menu): boolean;
				/** @deprecated */
				public doLoaderRetain(): void;
				/** @deprecated */
				public retainLoaderNonConfig(): androidx.collection.SimpleArrayMap<string,androidx.loader.app.LoaderManager>;
				public dispatchPause(): void;
				public dispatchCreate(): void;
				public dispatchConfigurationChanged(newConfig: globalAndroid.content.res.Configuration): void;
				/** @deprecated */
				public restoreLoaderNonConfig(loaderManagers: androidx.collection.SimpleArrayMap<string,androidx.loader.app.LoaderManager>): void;
				public dispatchContextItemSelected(item: globalAndroid.view.MenuItem): boolean;
				/** @deprecated */
				public doLoaderStop(retain: boolean): void;
				/** @deprecated */
				public doLoaderDestroy(): void;
				/** @deprecated */
				public retainNonConfig(): java.util.List<androidx.fragment.app.Fragment>;
				public dispatchActivityCreated(): void;
				public dispatchDestroyView(): void;
				public execPendingActions(): boolean;
				public dispatchMultiWindowModeChanged(isInMultiWindowMode: boolean): void;
			}
		}
	}
}

declare module androidx {
	export module fragment {
		export module app {
			export class FragmentFactory extends java.lang.Object {
				public static class: java.lang.Class<androidx.fragment.app.FragmentFactory>;
				public static loadFragmentClass(classLoader: java.lang.ClassLoader, className: string): java.lang.Class<any>;
				public instantiate(classLoader: java.lang.ClassLoader, className: string): androidx.fragment.app.Fragment;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module fragment {
		export module app {
			export abstract class FragmentHostCallback<E>  extends androidx.fragment.app.FragmentContainer {
				public static class: java.lang.Class<androidx.fragment.app.FragmentHostCallback<any>>;
				public onDump(prefix: string, fd: java.io.FileDescriptor, writer: java.io.PrintWriter, strings3: native.Array<string>): void;
				public onShouldSaveFragmentState(fragment: androidx.fragment.app.Fragment): boolean;
				public onSupportInvalidateOptionsMenu(): void;
				public onRequestPermissionsFromFragment(fragment: androidx.fragment.app.Fragment, permissions: native.Array<string>, requestCode: number): void;
				public constructor(context: globalAndroid.content.Context, handler: globalAndroid.os.Handler, windowAnimations: number);
				public onShouldShowRequestPermissionRationale(permission: string): boolean;
				public onHasView(): boolean;
				public onHasWindowAnimations(): boolean;
				public constructor();
				public onFindViewById(int0: number): globalAndroid.view.View;
				public onStartActivityFromFragment(fragment: androidx.fragment.app.Fragment, intent: globalAndroid.content.Intent, requestCode: number, options: globalAndroid.os.Bundle): void;
				public onGetWindowAnimations(): number;
				public onStartActivityFromFragment(fragment: androidx.fragment.app.Fragment, intent: globalAndroid.content.Intent, requestCode: number): void;
				public onGetHost(): any;
				public onGetLayoutInflater(): globalAndroid.view.LayoutInflater;
				public onStartIntentSenderFromFragment(fragment: androidx.fragment.app.Fragment, intent: globalAndroid.content.IntentSender, requestCode: number, fillInIntent: globalAndroid.content.Intent, flagsMask: number, flagsValues: number, extraFlags: number, options: globalAndroid.os.Bundle): void;
				public onFindViewById(id: number): globalAndroid.view.View;
			}
		}
	}
}

declare module androidx {
	export module fragment {
		export module app {
			export abstract class FragmentManager extends java.lang.Object {
				public static class: java.lang.Class<androidx.fragment.app.FragmentManager>;
				public static POP_BACK_STACK_INCLUSIVE: number;
				public findFragmentById(int0: number): androidx.fragment.app.Fragment;
				/** @deprecated */
				public openTransaction(): androidx.fragment.app.FragmentTransaction;
				public unregisterFragmentLifecycleCallbacks(fragmentLifecycleCallbacks0: androidx.fragment.app.FragmentManager.FragmentLifecycleCallbacks): void;
				public isDestroyed(): boolean;
				public addOnBackStackChangedListener(onBackStackChangedListener0: androidx.fragment.app.FragmentManager.OnBackStackChangedListener): void;
				public registerFragmentLifecycleCallbacks(fragmentLifecycleCallbacks0: androidx.fragment.app.FragmentManager.FragmentLifecycleCallbacks, boolean1: boolean): void;
				public getFragmentFactory(): androidx.fragment.app.FragmentFactory;
				public executePendingTransactions(): boolean;
				public setFragmentFactory(fragmentFactory: androidx.fragment.app.FragmentFactory): void;
				public popBackStack(int0: number, int1: number): void;
				public isStateSaved(): boolean;
				public constructor();
				public static enableDebugLogging(enabled: boolean): void;
				public putFragment(bundle0: globalAndroid.os.Bundle, string1: string, fragment2: androidx.fragment.app.Fragment): void;
				public popBackStack(): void;
				public findFragmentByTag(string0: string): androidx.fragment.app.Fragment;
				public removeOnBackStackChangedListener(onBackStackChangedListener0: androidx.fragment.app.FragmentManager.OnBackStackChangedListener): void;
				public getPrimaryNavigationFragment(): androidx.fragment.app.Fragment;
				public getBackStackEntryCount(): number;
				public getBackStackEntryAt(int0: number): androidx.fragment.app.FragmentManager.BackStackEntry;
				public popBackStack(string0: string, int1: number): void;
				public saveFragmentInstanceState(fragment0: androidx.fragment.app.Fragment): androidx.fragment.app.Fragment.SavedState;
				public popBackStackImmediate(int0: number, int1: number): boolean;
				public getFragment(bundle0: globalAndroid.os.Bundle, string1: string): androidx.fragment.app.Fragment;
				public dump(string0: string, fileDescriptor1: java.io.FileDescriptor, printWriter2: java.io.PrintWriter, strings3: native.Array<string>): void;
				public beginTransaction(): androidx.fragment.app.FragmentTransaction;
				public getFragments(): java.util.List<androidx.fragment.app.Fragment>;
				public popBackStackImmediate(): boolean;
				public popBackStackImmediate(string0: string, int1: number): boolean;
			}
			export module FragmentManager {
				export class BackStackEntry extends java.lang.Object {
					public static class: java.lang.Class<androidx.fragment.app.FragmentManager.BackStackEntry>;
					/**
					 * Constructs a new instance of the androidx.fragment.app.FragmentManager() when extending the interface class.
					 */
					public constructor(implementation: {
						getId(): number;
						getName(): string;
						getBreadCrumbTitleRes(): number;
						getBreadCrumbShortTitleRes(): number;
						getBreadCrumbTitle(): string;
						getBreadCrumbShortTitle(): string;
					});
					public constructor();
					public getBreadCrumbTitle(): string;
					public getName(): string;
					public getBreadCrumbTitleRes(): number;
					public getBreadCrumbShortTitleRes(): number;
					public getId(): number;
					public getBreadCrumbShortTitle(): string;
				}
				export abstract class FragmentLifecycleCallbacks extends java.lang.Object {
					public static class: java.lang.Class<androidx.fragment.app.FragmentManager.FragmentLifecycleCallbacks>;
					public onFragmentViewDestroyed(fm: androidx.fragment.app.FragmentManager, f: androidx.fragment.app.Fragment): void;
					public onFragmentViewCreated(fm: androidx.fragment.app.FragmentManager, f: androidx.fragment.app.Fragment, v: globalAndroid.view.View, savedInstanceState: globalAndroid.os.Bundle): void;
					public onFragmentPaused(fm: androidx.fragment.app.FragmentManager, f: androidx.fragment.app.Fragment): void;
					public onFragmentSaveInstanceState(fm: androidx.fragment.app.FragmentManager, f: androidx.fragment.app.Fragment, outState: globalAndroid.os.Bundle): void;
					public onFragmentActivityCreated(fm: androidx.fragment.app.FragmentManager, f: androidx.fragment.app.Fragment, savedInstanceState: globalAndroid.os.Bundle): void;
					public onFragmentResumed(fm: androidx.fragment.app.FragmentManager, f: androidx.fragment.app.Fragment): void;
					public constructor();
					public onFragmentPreCreated(fm: androidx.fragment.app.FragmentManager, f: androidx.fragment.app.Fragment, savedInstanceState: globalAndroid.os.Bundle): void;
					public onFragmentAttached(fm: androidx.fragment.app.FragmentManager, f: androidx.fragment.app.Fragment, context: globalAndroid.content.Context): void;
					public onFragmentStarted(fm: androidx.fragment.app.FragmentManager, f: androidx.fragment.app.Fragment): void;
					public onFragmentPreAttached(fm: androidx.fragment.app.FragmentManager, f: androidx.fragment.app.Fragment, context: globalAndroid.content.Context): void;
					public onFragmentCreated(fm: androidx.fragment.app.FragmentManager, f: androidx.fragment.app.Fragment, savedInstanceState: globalAndroid.os.Bundle): void;
					public onFragmentDetached(fm: androidx.fragment.app.FragmentManager, f: androidx.fragment.app.Fragment): void;
					public onFragmentStopped(fm: androidx.fragment.app.FragmentManager, f: androidx.fragment.app.Fragment): void;
					public onFragmentDestroyed(fm: androidx.fragment.app.FragmentManager, f: androidx.fragment.app.Fragment): void;
				}
				export class OnBackStackChangedListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.fragment.app.FragmentManager.OnBackStackChangedListener>;
					/**
					 * Constructs a new instance of the androidx.fragment.app.FragmentManager() when extending the interface class.
					 */
					public constructor(implementation: {
						onBackStackChanged(): void;
					});
					public constructor();
					public onBackStackChanged(): void;
				}
			}
		}
	}
}

declare module androidx {
	export module fragment {
		export module app {
			export class FragmentManagerImpl extends androidx.fragment.app.FragmentManager implements globalAndroid.view.LayoutInflater.Factory2 {
				public static class: java.lang.Class<androidx.fragment.app.FragmentManagerImpl>;
				public static ANIM_STYLE_OPEN_ENTER: number;
				public static ANIM_STYLE_OPEN_EXIT: number;
				public static ANIM_STYLE_CLOSE_ENTER: number;
				public static ANIM_STYLE_CLOSE_EXIT: number;
				public static ANIM_STYLE_FADE_ENTER: number;
				public static ANIM_STYLE_FADE_EXIT: number;
				public removeFragment(fragment: androidx.fragment.app.Fragment): void;
				public unregisterFragmentLifecycleCallbacks(fragmentLifecycleCallbacks0: androidx.fragment.app.FragmentManager.FragmentLifecycleCallbacks): void;
				public getFragment(bundle: globalAndroid.os.Bundle, key: string): androidx.fragment.app.Fragment;
				public dispatchCreateOptionsMenu(menu: globalAndroid.view.Menu, inflater: globalAndroid.view.MenuInflater): boolean;
				public dispatchPictureInPictureModeChanged(isInPictureInPictureMode: boolean): void;
				public allocBackStackIndex(bse: androidx.fragment.app.BackStackRecord): number;
				public onCreateView(name: string, context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet): globalAndroid.view.View;
				public dispatchLowMemory(): void;
				public addOnBackStackChangedListener(onBackStackChangedListener0: androidx.fragment.app.FragmentManager.OnBackStackChangedListener): void;
				public dump(prefix: string, fd: java.io.FileDescriptor, writer: java.io.PrintWriter, strings3: native.Array<string>): void;
				public getFragmentFactory(): androidx.fragment.app.FragmentFactory;
				public executePendingTransactions(): boolean;
				public setMaxLifecycle(f: androidx.fragment.app.Fragment, state: androidx.lifecycle.Lifecycle.State): void;
				public popBackStack(int0: number, int1: number): void;
				public isStateSaved(): boolean;
				public popBackStack(id: number, flags: number): void;
				public attachFragment(fragment: androidx.fragment.app.Fragment): void;
				public dispatchStop(): void;
				public putFragment(bundle0: globalAndroid.os.Bundle, string1: string, fragment2: androidx.fragment.app.Fragment): void;
				public registerFragmentLifecycleCallbacks(cb: androidx.fragment.app.FragmentManager.FragmentLifecycleCallbacks, recursive: boolean): void;
				public putFragment(bundle: globalAndroid.os.Bundle, key: string, fragment: androidx.fragment.app.Fragment): void;
				public freeBackStackIndex(index: number): void;
				public saveFragmentInstanceState(fragment: androidx.fragment.app.Fragment): androidx.fragment.app.Fragment.SavedState;
				public dispatchOptionsMenuClosed(menu: globalAndroid.view.Menu): void;
				public getPrimaryNavigationFragment(): androidx.fragment.app.Fragment;
				public showFragment(fragment: androidx.fragment.app.Fragment): void;
				public getBackStackEntryCount(): number;
				public getBackStackEntryAt(int0: number): androidx.fragment.app.FragmentManager.BackStackEntry;
				public addOnBackStackChangedListener(listener: androidx.fragment.app.FragmentManager.OnBackStackChangedListener): void;
				public execSingleAction(action: androidx.fragment.app.FragmentManagerImpl.OpGenerator, allowStateLoss: boolean): void;
				public dispatchStart(): void;
				public popBackStack(string0: string, int1: number): void;
				public popBackStackImmediate(int0: number, int1: number): boolean;
				public dispatchPause(): void;
				public toString(): string;
				public popBackStack(name: string, flags: number): void;
				public setBackStackIndex(index: number, bse: androidx.fragment.app.BackStackRecord): void;
				public getBackStackEntryAt(index: number): androidx.fragment.app.FragmentManager.BackStackEntry;
				public beginTransaction(): androidx.fragment.app.FragmentTransaction;
				public dispatchConfigurationChanged(newConfig: globalAndroid.content.res.Configuration): void;
				public popBackStackImmediate(): boolean;
				public dispatchContextItemSelected(item: globalAndroid.view.MenuItem): boolean;
				public dispatchActivityCreated(): void;
				public dispatchDestroyView(): void;
				public static reverseTransit(transit: number): number;
				public execPendingActions(): boolean;
				public dispatchMultiWindowModeChanged(isInMultiWindowMode: boolean): void;
				public static transitToStyleIndex(transit: number, enter: boolean): number;
				public findFragmentById(id: number): androidx.fragment.app.Fragment;
				public findFragmentById(int0: number): androidx.fragment.app.Fragment;
				public dispatchOptionsItemSelected(item: globalAndroid.view.MenuItem): boolean;
				public isDestroyed(): boolean;
				public enqueueAction(action: androidx.fragment.app.FragmentManagerImpl.OpGenerator, allowStateLoss: boolean): void;
				public popBackStackImmediate(name: string, flags: number): boolean;
				public registerFragmentLifecycleCallbacks(fragmentLifecycleCallbacks0: androidx.fragment.app.FragmentManager.FragmentLifecycleCallbacks, boolean1: boolean): void;
				public noteStateNotSaved(): void;
				public popBackStack(): void;
				public attachController(host: androidx.fragment.app.FragmentHostCallback<any>, container: androidx.fragment.app.FragmentContainer, parent: androidx.fragment.app.Fragment): void;
				public findFragmentByTag(string0: string): androidx.fragment.app.Fragment;
				public unregisterFragmentLifecycleCallbacks(cb: androidx.fragment.app.FragmentManager.FragmentLifecycleCallbacks): void;
				public removeOnBackStackChangedListener(onBackStackChangedListener0: androidx.fragment.app.FragmentManager.OnBackStackChangedListener): void;
				public findFragmentByWho(who: string): androidx.fragment.app.Fragment;
				public dispatchResume(): void;
				public dispatchDestroy(): void;
				public setPrimaryNavigationFragment(f: androidx.fragment.app.Fragment): void;
				public detachFragment(fragment: androidx.fragment.app.Fragment): void;
				public onCreateView(parent: globalAndroid.view.View, name: string, context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet): globalAndroid.view.View;
				public saveFragmentInstanceState(fragment0: androidx.fragment.app.Fragment): androidx.fragment.app.Fragment.SavedState;
				public dispatchPrepareOptionsMenu(menu: globalAndroid.view.Menu): boolean;
				public popBackStackImmediate(id: number, flags: number): boolean;
				public getFragment(bundle0: globalAndroid.os.Bundle, string1: string): androidx.fragment.app.Fragment;
				public hideFragment(fragment: androidx.fragment.app.Fragment): void;
				public performPendingDeferredStart(f: androidx.fragment.app.Fragment): void;
				public dump(string0: string, fileDescriptor1: java.io.FileDescriptor, printWriter2: java.io.PrintWriter, strings3: native.Array<string>): void;
				public dispatchCreate(): void;
				public getFragments(): java.util.List<androidx.fragment.app.Fragment>;
				public addFragment(fragment: androidx.fragment.app.Fragment, moveToStateNow: boolean): void;
				public findFragmentByTag(tag: string): androidx.fragment.app.Fragment;
				public popBackStackImmediate(string0: string, int1: number): boolean;
				public removeOnBackStackChangedListener(listener: androidx.fragment.app.FragmentManager.OnBackStackChangedListener): void;
			}
			export module FragmentManagerImpl {
				export class AnimationOrAnimator extends java.lang.Object {
					public static class: java.lang.Class<androidx.fragment.app.FragmentManagerImpl.AnimationOrAnimator>;
					public animation: globalAndroid.view.animation.Animation;
					public animator: globalAndroid.animation.Animator;
				}
				export class EndViewTransitionAnimation extends globalAndroid.view.animation.AnimationSet implements java.lang.Runnable {
					public static class: java.lang.Class<androidx.fragment.app.FragmentManagerImpl.EndViewTransitionAnimation>;
					public getTransformation(currentTime: number, outTransformation: globalAndroid.view.animation.Transformation, scale: number): boolean;
					public run(): void;
					public getTransformation(currentTime: number, t: globalAndroid.view.animation.Transformation): boolean;
				}
				export class FragmentLifecycleCallbacksHolder extends java.lang.Object {
					public static class: java.lang.Class<androidx.fragment.app.FragmentManagerImpl.FragmentLifecycleCallbacksHolder>;
				}
				export class FragmentTag extends java.lang.Object {
					public static class: java.lang.Class<androidx.fragment.app.FragmentManagerImpl.FragmentTag>;
					public static Fragment: native.Array<number>;
					public static Fragment_id: number;
					public static Fragment_name: number;
					public static Fragment_tag: number;
				}
				export class OpGenerator extends java.lang.Object {
					public static class: java.lang.Class<androidx.fragment.app.FragmentManagerImpl.OpGenerator>;
					/**
					 * Constructs a new instance of the androidx.fragment.app.FragmentManagerImpl() when extending the interface class.
					 */
					public constructor(implementation: {
						generateOps(arrayList0: java.util.ArrayList<androidx.fragment.app.BackStackRecord>, arrayList1: java.util.ArrayList<java.lang.Boolean>): boolean;
					});
					public constructor();
					public generateOps(arrayList0: java.util.ArrayList<androidx.fragment.app.BackStackRecord>, arrayList1: java.util.ArrayList<java.lang.Boolean>): boolean;
				}
				export class PopBackStackState extends java.lang.Object implements androidx.fragment.app.FragmentManagerImpl.OpGenerator {
					public static class: java.lang.Class<androidx.fragment.app.FragmentManagerImpl.PopBackStackState>;
					public generateOps(records: java.util.ArrayList<androidx.fragment.app.BackStackRecord>, isRecordPop: java.util.ArrayList<java.lang.Boolean>): boolean;
				}
				export class StartEnterTransitionListener extends java.lang.Object implements androidx.fragment.app.Fragment.OnStartEnterTransitionListener {
					public static class: java.lang.Class<androidx.fragment.app.FragmentManagerImpl.StartEnterTransitionListener>;
					public isReady(): boolean;
					public cancelTransaction(): void;
					public onStartEnterTransition(): void;
					public startListening(): void;
					public completeTransaction(): void;
				}
			}
		}
	}
}

declare module androidx {
	export module fragment {
		export module app {
			export class FragmentManagerNonConfig extends java.lang.Object {
				public static class: java.lang.Class<androidx.fragment.app.FragmentManagerNonConfig>;
			}
		}
	}
}

declare module androidx {
	export module fragment {
		export module app {
			export class FragmentManagerState extends java.lang.Object implements globalAndroid.os.Parcelable {
				public static class: java.lang.Class<androidx.fragment.app.FragmentManagerState>;
				public static CREATOR: globalAndroid.os.Parcelable.Creator<androidx.fragment.app.FragmentManagerState>;
				public describeContents(): number;
				public writeToParcel(dest: globalAndroid.os.Parcel, flags: number): void;
				public constructor(in0: globalAndroid.os.Parcel);
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module fragment {
		export module app {
			export class FragmentManagerViewModel extends androidx.lifecycle.ViewModel {
				public static class: java.lang.Class<androidx.fragment.app.FragmentManagerViewModel>;
				public equals(obj: any): boolean;
				public hashCode(): number;
				public equals(o: any): boolean;
				public toString(): string;
				public onCleared(): void;
			}
		}
	}
}

declare module androidx {
	export module fragment {
		export module app {
			export abstract class FragmentPagerAdapter extends androidx.viewpager.widget.PagerAdapter {
				public static class: java.lang.Class<androidx.fragment.app.FragmentPagerAdapter>;
				public static BEHAVIOR_SET_USER_VISIBLE_HINT: number;
				public static BEHAVIOR_RESUME_ONLY_CURRENT_FRAGMENT: number;
				public saveState(): globalAndroid.os.Parcelable;
				/** @deprecated */
				public destroyItem(container: globalAndroid.view.View, position: number, object: any): void;
				public isViewFromObject(view: globalAndroid.view.View, object: any): boolean;
				public destroyItem(container: globalAndroid.view.ViewGroup, position: number, object: any): void;
				/** @deprecated */
				public setPrimaryItem(container: globalAndroid.view.View, position: number, object: any): void;
				public instantiateItem(container: globalAndroid.view.ViewGroup, position: number): any;
				public constructor();
				public constructor(fm: androidx.fragment.app.FragmentManager, behavior: number);
				/** @deprecated */
				public instantiateItem(container: globalAndroid.view.View, position: number): any;
				public startUpdate(container: globalAndroid.view.ViewGroup): void;
				public getItemId(position: number): number;
				/** @deprecated */
				public constructor(fm: androidx.fragment.app.FragmentManager);
				public restoreState(state: globalAndroid.os.Parcelable, loader: java.lang.ClassLoader): void;
				public getItem(int0: number): androidx.fragment.app.Fragment;
				public finishUpdate(container: globalAndroid.view.ViewGroup): void;
				/** @deprecated */
				public finishUpdate(container: globalAndroid.view.View): void;
				public isViewFromObject(view0: globalAndroid.view.View, object1: any): boolean;
				/** @deprecated */
				public startUpdate(container: globalAndroid.view.View): void;
				public setPrimaryItem(container: globalAndroid.view.ViewGroup, position: number, object: any): void;
			}
		}
	}
}

declare module androidx {
	export module fragment {
		export module app {
			export class FragmentState extends java.lang.Object implements globalAndroid.os.Parcelable {
				public static class: java.lang.Class<androidx.fragment.app.FragmentState>;
				public static CREATOR: globalAndroid.os.Parcelable.Creator<androidx.fragment.app.FragmentState>;
				public describeContents(): number;
				public writeToParcel(dest: globalAndroid.os.Parcel, flags: number): void;
				public instantiate(classLoader: java.lang.ClassLoader, factory: androidx.fragment.app.FragmentFactory): androidx.fragment.app.Fragment;
				public toString(): string;
			}
		}
	}
}

declare module androidx {
	export module fragment {
		export module app {
			export abstract class FragmentStatePagerAdapter extends androidx.viewpager.widget.PagerAdapter {
				public static class: java.lang.Class<androidx.fragment.app.FragmentStatePagerAdapter>;
				public static BEHAVIOR_SET_USER_VISIBLE_HINT: number;
				public static BEHAVIOR_RESUME_ONLY_CURRENT_FRAGMENT: number;
				public saveState(): globalAndroid.os.Parcelable;
				/** @deprecated */
				public destroyItem(container: globalAndroid.view.View, position: number, object: any): void;
				public isViewFromObject(view: globalAndroid.view.View, object: any): boolean;
				public destroyItem(container: globalAndroid.view.ViewGroup, position: number, object: any): void;
				/** @deprecated */
				public setPrimaryItem(container: globalAndroid.view.View, position: number, object: any): void;
				public instantiateItem(container: globalAndroid.view.ViewGroup, position: number): any;
				public constructor();
				public constructor(fm: androidx.fragment.app.FragmentManager, behavior: number);
				/** @deprecated */
				public instantiateItem(container: globalAndroid.view.View, position: number): any;
				public startUpdate(container: globalAndroid.view.ViewGroup): void;
				/** @deprecated */
				public constructor(fm: androidx.fragment.app.FragmentManager);
				public restoreState(state: globalAndroid.os.Parcelable, loader: java.lang.ClassLoader): void;
				public getItem(int0: number): androidx.fragment.app.Fragment;
				public finishUpdate(container: globalAndroid.view.ViewGroup): void;
				/** @deprecated */
				public finishUpdate(container: globalAndroid.view.View): void;
				public isViewFromObject(view0: globalAndroid.view.View, object1: any): boolean;
				/** @deprecated */
				public startUpdate(container: globalAndroid.view.View): void;
				public setPrimaryItem(container: globalAndroid.view.ViewGroup, position: number, object: any): void;
			}
		}
	}
}

declare module androidx {
	export module fragment {
		export module app {
			export class FragmentTabHost extends globalAndroid.widget.TabHost implements globalAndroid.widget.TabHost.OnTabChangeListener {
				public static class: java.lang.Class<androidx.fragment.app.FragmentTabHost>;
				/** @deprecated */
				public invalidateChild(child: globalAndroid.view.View, dirty: globalAndroid.graphics.Rect): void;
				public focusSearch(direction: number): globalAndroid.view.View;
				public constructor(context: globalAndroid.content.Context);
				public onNestedScrollAccepted(child: globalAndroid.view.View, target: globalAndroid.view.View, axes: number): void;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
				public childDrawableStateChanged(child: globalAndroid.view.View): void;
				/** @deprecated */
				public setup(): void;
				public onStopNestedScroll(child: globalAndroid.view.View): void;
				public isLayoutRequested(): boolean;
				public sendAccessibilityEvent(eventType: number): void;
				public onNestedPrePerformAccessibilityAction(target: globalAndroid.view.View, action: number, bundle2: globalAndroid.os.Bundle): boolean;
				public addView(child: globalAndroid.view.View, index: number): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
				public setup(): void;
				public requestFitSystemWindows(): void;
				public getTextDirection(): number;
				public onRestoreInstanceState(state: globalAndroid.os.Parcelable): void;
				/** @deprecated */
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
				public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback, type: number): globalAndroid.view.ActionMode;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
				public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public getTextAlignment(): number;
				/** @deprecated */
				public invalidateChildInParent(location: native.Array<number>, dirty: globalAndroid.graphics.Rect): globalAndroid.view.ViewParent;
				public getParentForAccessibility(): globalAndroid.view.ViewParent;
				public onNestedFling(target: globalAndroid.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
				/** @deprecated */
				public addTab(tabSpec: globalAndroid.widget.TabHost.TabSpec, clss: java.lang.Class<any>, bundle2: globalAndroid.os.Bundle): void;
				public keyboardNavigationClusterSearch(currentCluster: globalAndroid.view.View, direction: number): globalAndroid.view.View;
				public addView(child: globalAndroid.view.View, width: number, height: number): void;
				/** @deprecated */
				public onDetachedFromWindow(): void;
				public isTextDirectionResolved(): boolean;
				public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
				public childHasTransientStateChanged(child: globalAndroid.view.View, childHasTransientState: boolean): void;
				public onDetachedFromWindow(): void;
				public focusableViewAvailable(v: globalAndroid.view.View): void;
				public showContextMenuForChild(originalView: globalAndroid.view.View): boolean;
				public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public recomputeViewAttributes(child: globalAndroid.view.View): void;
				/** @deprecated */
				public onRestoreInstanceState(state: globalAndroid.os.Parcelable): void;
				public addView(child: globalAndroid.view.View): void;
				public requestSendAccessibilityEvent(child: globalAndroid.view.View, event: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
				public isLayoutDirectionResolved(): boolean;
				public isTextAlignmentResolved(): boolean;
				public getLayoutDirection(): number;
				public addView(child: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public addTab(tabSpec: globalAndroid.widget.TabHost.TabSpec): void;
				public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public canResolveTextDirection(): boolean;
				/** @deprecated */
				public constructor(context: globalAndroid.content.Context);
				public canResolveTextAlignment(): boolean;
				/** @deprecated */
				public setOnTabChangedListener(l: globalAndroid.widget.TabHost.OnTabChangeListener): void;
				public notifySubtreeAccessibilityStateChanged(child: globalAndroid.view.View, source: globalAndroid.view.View, changeType: number): void;
				/** @deprecated */
				public setup(context: globalAndroid.content.Context, manager: androidx.fragment.app.FragmentManager, containerId: number): void;
				/** @deprecated */
				public onTabChanged(tabId: string): void;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
				public updateViewLayout(view: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public onNestedScroll(target: globalAndroid.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
				public requestLayout(): void;
				/** @deprecated */
				public onSaveInstanceState(): globalAndroid.os.Parcelable;
				public focusSearch(focused: globalAndroid.view.View, direction: number): globalAndroid.view.View;
				public requestTransparentRegion(child: globalAndroid.view.View): void;
				public onStartNestedScroll(child: globalAndroid.view.View, target: globalAndroid.view.View, nestedScrollAxes: number): boolean;
				/** @deprecated */
				public requestFitSystemWindows(): void;
				public onTabChanged(tabId: string): void;
				public showContextMenuForChild(originalView: globalAndroid.view.View, x: number, y: number): boolean;
				public bringChildToFront(child: globalAndroid.view.View): void;
				public onNestedPreScroll(target: globalAndroid.view.View, dx: number, dy: number, consumed: native.Array<number>): void;
				public clearChildFocus(child: globalAndroid.view.View): void;
				public setup(activityGroup: globalAndroid.app.LocalActivityManager): void;
				public onDescendantInvalidated(child: globalAndroid.view.View, target: globalAndroid.view.View): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public onTouchModeChanged(isInTouchMode: boolean): void;
				public removeView(view: globalAndroid.view.View): void;
				/** @deprecated */
				public setup(context: globalAndroid.content.Context, manager: androidx.fragment.app.FragmentManager): void;
				public onSaveInstanceState(): globalAndroid.os.Parcelable;
				public requestChildRectangleOnScreen(child: globalAndroid.view.View, rectangle: globalAndroid.graphics.Rect, immediate: boolean): boolean;
				public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public getChildVisibleRect(child: globalAndroid.view.View, r: globalAndroid.graphics.Rect, offset: globalAndroid.graphics.Point): boolean;
				public requestChildFocus(child: globalAndroid.view.View, focused: globalAndroid.view.View): void;
				public createContextMenu(menu: globalAndroid.view.ContextMenu): void;
				public canResolveLayoutDirection(): boolean;
				/** @deprecated */
				public onAttachedToWindow(): void;
				public addView(child: globalAndroid.view.View, index: number, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public setOnTabChangedListener(l: globalAndroid.widget.TabHost.OnTabChangeListener): void;
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public onNestedPreFling(target: globalAndroid.view.View, velocityX: number, velocityY: number): boolean;
				public onAttachedToWindow(): void;
				public getParent(): globalAndroid.view.ViewParent;
			}
			export module FragmentTabHost {
				export class DummyTabFactory extends java.lang.Object implements globalAndroid.widget.TabHost.TabContentFactory {
					public static class: java.lang.Class<androidx.fragment.app.FragmentTabHost.DummyTabFactory>;
					public createTabContent(tag: string): globalAndroid.view.View;
					public constructor(context: globalAndroid.content.Context);
				}
				export class SavedState extends globalAndroid.view.View.BaseSavedState {
					public static class: java.lang.Class<androidx.fragment.app.FragmentTabHost.SavedState>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<androidx.fragment.app.FragmentTabHost.SavedState>;
					public toString(): string;
					public describeContents(): number;
					public writeToParcel(out: globalAndroid.os.Parcel, flags: number): void;
				}
				export class TabInfo extends java.lang.Object {
					public static class: java.lang.Class<androidx.fragment.app.FragmentTabHost.TabInfo>;
				}
			}
		}
	}
}

declare module androidx {
	export module fragment {
		export module app {
			export abstract class FragmentTransaction extends java.lang.Object {
				public static class: java.lang.Class<androidx.fragment.app.FragmentTransaction>;
				public static TRANSIT_ENTER_MASK: number;
				public static TRANSIT_EXIT_MASK: number;
				public static TRANSIT_UNSET: number;
				public static TRANSIT_NONE: number;
				public static TRANSIT_FRAGMENT_OPEN: number;
				public static TRANSIT_FRAGMENT_CLOSE: number;
				public static TRANSIT_FRAGMENT_FADE: number;
				public commitAllowingStateLoss(): number;
				public commitNowAllowingStateLoss(): void;
				public setMaxLifecycle(fragment: androidx.fragment.app.Fragment, state: androidx.lifecycle.Lifecycle.State): androidx.fragment.app.FragmentTransaction;
				public isAddToBackStackAllowed(): boolean;
				/** @deprecated */
				public setAllowOptimization(allowOptimization: boolean): androidx.fragment.app.FragmentTransaction;
				public setCustomAnimations(enter: number, exit: number, popEnter: number, popExit: number): androidx.fragment.app.FragmentTransaction;
				public setTransitionStyle(styleRes: number): androidx.fragment.app.FragmentTransaction;
				public setBreadCrumbShortTitle(text: string): androidx.fragment.app.FragmentTransaction;
				public replace(containerViewId: number, fragment: androidx.fragment.app.Fragment): androidx.fragment.app.FragmentTransaction;
				public attach(fragment: androidx.fragment.app.Fragment): androidx.fragment.app.FragmentTransaction;
				public constructor();
				public setBreadCrumbTitle(text: string): androidx.fragment.app.FragmentTransaction;
				public runOnCommit(runnable: java.lang.Runnable): androidx.fragment.app.FragmentTransaction;
				public hide(fragment: androidx.fragment.app.Fragment): androidx.fragment.app.FragmentTransaction;
				public show(fragment: androidx.fragment.app.Fragment): androidx.fragment.app.FragmentTransaction;
				public remove(fragment: androidx.fragment.app.Fragment): androidx.fragment.app.FragmentTransaction;
				public setReorderingAllowed(reorderingAllowed: boolean): androidx.fragment.app.FragmentTransaction;
				public disallowAddToBackStack(): androidx.fragment.app.FragmentTransaction;
				public isEmpty(): boolean;
				public setPrimaryNavigationFragment(fragment: androidx.fragment.app.Fragment): androidx.fragment.app.FragmentTransaction;
				public add(fragment: androidx.fragment.app.Fragment, tag: string): androidx.fragment.app.FragmentTransaction;
				public detach(fragment: androidx.fragment.app.Fragment): androidx.fragment.app.FragmentTransaction;
				public commitNow(): void;
				public setTransition(transition: number): androidx.fragment.app.FragmentTransaction;
				public setCustomAnimations(enter: number, exit: number): androidx.fragment.app.FragmentTransaction;
				public addSharedElement(sharedElement: globalAndroid.view.View, name: string): androidx.fragment.app.FragmentTransaction;
				public setBreadCrumbShortTitle(res: number): androidx.fragment.app.FragmentTransaction;
				public replace(containerViewId: number, fragment: androidx.fragment.app.Fragment, tag: string): androidx.fragment.app.FragmentTransaction;
				public commit(): number;
				public addToBackStack(name: string): androidx.fragment.app.FragmentTransaction;
				public add(containerViewId: number, fragment: androidx.fragment.app.Fragment, tag: string): androidx.fragment.app.FragmentTransaction;
				public add(containerViewId: number, fragment: androidx.fragment.app.Fragment): androidx.fragment.app.FragmentTransaction;
				public setBreadCrumbTitle(res: number): androidx.fragment.app.FragmentTransaction;
			}
			export module FragmentTransaction {
				export class Op extends java.lang.Object {
					public static class: java.lang.Class<androidx.fragment.app.FragmentTransaction.Op>;
				}
			}
		}
	}
}

declare module androidx {
	export module fragment {
		export module app {
			export class FragmentTransition extends java.lang.Object {
				public static class: java.lang.Class<androidx.fragment.app.FragmentTransition>;
				public static calculateFragments(transaction: androidx.fragment.app.BackStackRecord, transitioningFragments: globalAndroid.util.SparseArray<androidx.fragment.app.FragmentTransition.FragmentContainerTransition>, isReordered: boolean): void;
				public static calculatePopFragments(transaction: androidx.fragment.app.BackStackRecord, transitioningFragments: globalAndroid.util.SparseArray<androidx.fragment.app.FragmentTransition.FragmentContainerTransition>, isReordered: boolean): void;
			}
			export module FragmentTransition {
				export class FragmentContainerTransition extends java.lang.Object {
					public static class: java.lang.Class<androidx.fragment.app.FragmentTransition.FragmentContainerTransition>;
					public lastIn: androidx.fragment.app.Fragment;
					public lastInIsPop: boolean;
					public lastInTransaction: androidx.fragment.app.BackStackRecord;
					public firstOut: androidx.fragment.app.Fragment;
					public firstOutIsPop: boolean;
					public firstOutTransaction: androidx.fragment.app.BackStackRecord;
				}
			}
		}
	}
}

declare module androidx {
	export module fragment {
		export module app {
			export class FragmentTransitionCompat21 extends androidx.fragment.app.FragmentTransitionImpl {
				public static class: java.lang.Class<androidx.fragment.app.FragmentTransitionCompat21>;
				public cloneTransition(transition: any): any;
				public addTargets(object0: any, arrayList1: java.util.ArrayList<globalAndroid.view.View>): void;
				public wrapTransitionInSet(transition: any): any;
				public mergeTransitionsTogether(object0: any, object1: any, object2: any): any;
				public scheduleHideFragmentView(exitTransitionObj: any, fragmentView: globalAndroid.view.View, exitingViews: java.util.ArrayList<globalAndroid.view.View>): void;
				public canHandle(object0: any): boolean;
				public setEpicenter(object0: any, rect1: globalAndroid.graphics.Rect): void;
				public mergeTransitionsInSequence(exitTransitionObj: any, enterTransitionObj: any, sharedElementTransitionObj: any): any;
				public scheduleRemoveTargets(object0: any, object1: any, arrayList2: java.util.ArrayList<globalAndroid.view.View>, object3: any, arrayList4: java.util.ArrayList<globalAndroid.view.View>, object5: any, arrayList6: java.util.ArrayList<globalAndroid.view.View>): void;
				public setEpicenter(object0: any, view1: globalAndroid.view.View): void;
				public swapSharedElementTargets(object0: any, arrayList1: java.util.ArrayList<globalAndroid.view.View>, arrayList2: java.util.ArrayList<globalAndroid.view.View>): void;
				public swapSharedElementTargets(sharedElementTransitionObj: any, sharedElementsOut: java.util.ArrayList<globalAndroid.view.View>, sharedElementsIn: java.util.ArrayList<globalAndroid.view.View>): void;
				public wrapTransitionInSet(object0: any): any;
				public setSharedElementTargets(object0: any, view1: globalAndroid.view.View, arrayList2: java.util.ArrayList<globalAndroid.view.View>): void;
				public scheduleHideFragmentView(object0: any, view1: globalAndroid.view.View, arrayList2: java.util.ArrayList<globalAndroid.view.View>): void;
				public setSharedElementTargets(transitionObj: any, nonExistentView: globalAndroid.view.View, sharedViews: java.util.ArrayList<globalAndroid.view.View>): void;
				public addTarget(object0: any, view1: globalAndroid.view.View): void;
				public addTarget(transitionObj: any, view: globalAndroid.view.View): void;
				public removeTarget(object0: any, view1: globalAndroid.view.View): void;
				public removeTarget(transitionObj: any, view: globalAndroid.view.View): void;
				public setEpicenter(transitionObj: any, view: globalAndroid.view.View): void;
				public beginDelayedTransition(sceneRoot: globalAndroid.view.ViewGroup, transition: any): void;
				public scheduleRemoveTargets(overallTransitionObj: any, enterTransition: any, enteringViews: java.util.ArrayList<globalAndroid.view.View>, exitTransition: any, exitingViews: java.util.ArrayList<globalAndroid.view.View>, sharedElementTransition: any, sharedElementsIn: java.util.ArrayList<globalAndroid.view.View>): void;
				public replaceTargets(object0: any, arrayList1: java.util.ArrayList<globalAndroid.view.View>, arrayList2: java.util.ArrayList<globalAndroid.view.View>): void;
				public replaceTargets(transitionObj: any, oldTargets: java.util.ArrayList<globalAndroid.view.View>, newTargets: java.util.ArrayList<globalAndroid.view.View>): void;
				public beginDelayedTransition(viewGroup0: globalAndroid.view.ViewGroup, object1: any): void;
				public mergeTransitionsTogether(transition1: any, transition2: any, transition3: any): any;
				public canHandle(transition: any): boolean;
				public setEpicenter(transitionObj: any, epicenter: globalAndroid.graphics.Rect): void;
				public cloneTransition(object0: any): any;
				public mergeTransitionsInSequence(object0: any, object1: any, object2: any): any;
				public addTargets(transitionObj: any, views: java.util.ArrayList<globalAndroid.view.View>): void;
			}
		}
	}
}

declare module androidx {
	export module fragment {
		export module app {
			export abstract class FragmentTransitionImpl extends java.lang.Object {
				public static class: java.lang.Class<androidx.fragment.app.FragmentTransitionImpl>;
				public removeTarget(object0: any, view1: globalAndroid.view.View): void;
				public static isNullOrEmpty(list: java.util.List<any>): boolean;
				public addTargets(object0: any, arrayList1: java.util.ArrayList<globalAndroid.view.View>): void;
				public getBoundsOnScreen(view: globalAndroid.view.View, epicenter: globalAndroid.graphics.Rect): void;
				public replaceTargets(object0: any, arrayList1: java.util.ArrayList<globalAndroid.view.View>, arrayList2: java.util.ArrayList<globalAndroid.view.View>): void;
				public mergeTransitionsTogether(object0: any, object1: any, object2: any): any;
				public canHandle(object0: any): boolean;
				public beginDelayedTransition(viewGroup0: globalAndroid.view.ViewGroup, object1: any): void;
				public constructor();
				public setEpicenter(object0: any, rect1: globalAndroid.graphics.Rect): void;
				public scheduleRemoveTargets(object0: any, object1: any, arrayList2: java.util.ArrayList<globalAndroid.view.View>, object3: any, arrayList4: java.util.ArrayList<globalAndroid.view.View>, object5: any, arrayList6: java.util.ArrayList<globalAndroid.view.View>): void;
				public setEpicenter(object0: any, view1: globalAndroid.view.View): void;
				public swapSharedElementTargets(object0: any, arrayList1: java.util.ArrayList<globalAndroid.view.View>, arrayList2: java.util.ArrayList<globalAndroid.view.View>): void;
				public cloneTransition(object0: any): any;
				public wrapTransitionInSet(object0: any): any;
				public setSharedElementTargets(object0: any, view1: globalAndroid.view.View, arrayList2: java.util.ArrayList<globalAndroid.view.View>): void;
				public scheduleHideFragmentView(object0: any, view1: globalAndroid.view.View, arrayList2: java.util.ArrayList<globalAndroid.view.View>): void;
				public mergeTransitionsInSequence(object0: any, object1: any, object2: any): any;
				public addTarget(object0: any, view1: globalAndroid.view.View): void;
				public static bfsAddViewChildren(views: java.util.List<globalAndroid.view.View>, startView: globalAndroid.view.View): void;
			}
		}
	}
}

declare module androidx {
	export module fragment {
		export module app {
			export class FragmentViewLifecycleOwner extends java.lang.Object implements androidx.lifecycle.LifecycleOwner {
				public static class: java.lang.Class<androidx.fragment.app.FragmentViewLifecycleOwner>;
				public getLifecycle(): androidx.lifecycle.Lifecycle;
			}
		}
	}
}

declare module androidx {
	export module fragment {
		export module app {
			export class ListFragment extends androidx.fragment.app.Fragment {
				public static class: java.lang.Class<androidx.fragment.app.ListFragment>;
				public getViewModelStore(): androidx.lifecycle.ViewModelStore;
				public onConfigurationChanged(newConfig: globalAndroid.content.res.Configuration): void;
				public getListAdapter(): globalAndroid.widget.ListAdapter;
				public onLowMemory(): void;
				public setListShown(shown: boolean): void;
				public getListView(): globalAndroid.widget.ListView;
				public requireListAdapter(): globalAndroid.widget.ListAdapter;
				public setEmptyText(text: string): void;
				public getLifecycle(): androidx.lifecycle.Lifecycle;
				public constructor();
				public onCreateView(inflater: globalAndroid.view.LayoutInflater, container: globalAndroid.view.ViewGroup, savedInstanceState: globalAndroid.os.Bundle): globalAndroid.view.View;
				public setListShownNoAnimation(shown: boolean): void;
				public getSavedStateRegistry(): androidx.savedstate.SavedStateRegistry;
				public onCreateContextMenu(menu: globalAndroid.view.ContextMenu, v: globalAndroid.view.View, menuInfo: globalAndroid.view.ContextMenu.ContextMenuInfo): void;
				public onViewCreated(view: globalAndroid.view.View, savedInstanceState: globalAndroid.os.Bundle): void;
				public getSelectedItemPosition(): number;
				public setSelection(position: number): void;
				public onListItemClick(l: globalAndroid.widget.ListView, v: globalAndroid.view.View, position: number, id: number): void;
				public constructor(contentLayoutId: number);
				public onDestroyView(): void;
				public setListAdapter(adapter: globalAndroid.widget.ListAdapter): void;
				public getSelectedItemId(): number;
			}
		}
	}
}

declare module androidx {
	export module fragment {
		export module app {
			export class SuperNotCalledException extends globalAndroid.util.AndroidRuntimeException {
				public static class: java.lang.Class<androidx.fragment.app.SuperNotCalledException>;
				public constructor(cause: java.lang.Throwable);
				public constructor(name: string);
				public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
				public constructor(msg: string);
				public constructor(name: string, cause: java.lang.Throwable);
				public constructor();
				public constructor(cause: java.lang.Exception);
			}
		}
	}
}

//Generics information:
//androidx.fragment.app.FragmentHostCallback:1

