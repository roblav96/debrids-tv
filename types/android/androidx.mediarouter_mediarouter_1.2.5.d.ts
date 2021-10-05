declare module androidx {
	export module mediarouter {
		export module app {
			export class MediaRouteActionProvider extends androidx.core.view.ActionProvider {
				public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteActionProvider>;
				public isVisible(): boolean;
				public constructor(context: globalAndroid.content.Context);
				public onPerformDefaultAction(): boolean;
				public setAlwaysVisible(alwaysVisible: boolean): void;
				public setDialogFactory(factory: androidx.mediarouter.app.MediaRouteDialogFactory): void;
				public overridesItemVisibility(): boolean;
				public onCreateActionView(forItem: globalAndroid.view.MenuItem): globalAndroid.view.View;
				/** @deprecated */
				public enableDynamicGroup(): void;
				public onCreateMediaRouteButton(): androidx.mediarouter.app.MediaRouteButton;
				public getDialogFactory(): androidx.mediarouter.app.MediaRouteDialogFactory;
				public getMediaRouteButton(): androidx.mediarouter.app.MediaRouteButton;
				public setRouteSelector(selector: androidx.mediarouter.media.MediaRouteSelector): void;
				public onCreateActionView(): globalAndroid.view.View;
				public getRouteSelector(): androidx.mediarouter.media.MediaRouteSelector;
			}
			export module MediaRouteActionProvider {
				export class MediaRouterCallback extends androidx.mediarouter.media.MediaRouter.Callback {
					public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteActionProvider.MediaRouterCallback>;
					public onRouteAdded(router: androidx.mediarouter.media.MediaRouter, route: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
					public constructor(provider: androidx.mediarouter.app.MediaRouteActionProvider);
					public onRouteRemoved(router: androidx.mediarouter.media.MediaRouter, info: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
					public onRouteChanged(router: androidx.mediarouter.media.MediaRouter, info: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
					public constructor();
					public onRouteChanged(router: androidx.mediarouter.media.MediaRouter, route: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
					public onProviderChanged(router: androidx.mediarouter.media.MediaRouter, provider: androidx.mediarouter.media.MediaRouter.ProviderInfo): void;
					public onProviderAdded(router: androidx.mediarouter.media.MediaRouter, provider: androidx.mediarouter.media.MediaRouter.ProviderInfo): void;
					public onRouteRemoved(router: androidx.mediarouter.media.MediaRouter, route: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
					public onProviderRemoved(router: androidx.mediarouter.media.MediaRouter, provider: androidx.mediarouter.media.MediaRouter.ProviderInfo): void;
					public onRouteAdded(router: androidx.mediarouter.media.MediaRouter, info: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
				}
			}
		}
	}
}

declare module androidx {
	export module mediarouter {
		export module app {
			export class MediaRouteButton extends globalAndroid.view.View {
				public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteButton>;
				public drawableStateChanged(): void;
				public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
				public jumpDrawablesToCurrentState(): void;
				public constructor(context: globalAndroid.content.Context);
				public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
				public setAlwaysVisible(alwaysVisible: boolean): void;
				public performClick(): boolean;
				/** @deprecated */
				public enableDynamicGroup(): void;
				public showDialog(): boolean;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
				public onCreateDrawableState(extraSpace: number): native.Array<number>;
				public sendAccessibilityEvent(eventType: number): void;
				public getDialogFactory(): androidx.mediarouter.app.MediaRouteDialogFactory;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
				public getRouteSelector(): androidx.mediarouter.media.MediaRouteSelector;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public setDialogFactory(factory: androidx.mediarouter.app.MediaRouteDialogFactory): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
				public setVisibility(visibility: number): void;
				public verifyDrawable(who: globalAndroid.graphics.drawable.Drawable): boolean;
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public setRouteSelector(selector: androidx.mediarouter.media.MediaRouteSelector): void;
				public onDetachedFromWindow(): void;
				public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public onAttachedToWindow(): void;
				public onDraw(canvas: globalAndroid.graphics.Canvas): void;
				public setRemoteIndicatorDrawable(d: globalAndroid.graphics.drawable.Drawable): void;
			}
			export module MediaRouteButton {
				export class ConnectivityReceiver extends globalAndroid.content.BroadcastReceiver {
					public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteButton.ConnectivityReceiver>;
					public registerReceiver(button: androidx.mediarouter.app.MediaRouteButton): void;
					public isConnected(): boolean;
					public unregisterReceiver(button: androidx.mediarouter.app.MediaRouteButton): void;
					public onReceive(context: globalAndroid.content.Context, intent: globalAndroid.content.Intent): void;
					public onReceive(context0: globalAndroid.content.Context, intent1: globalAndroid.content.Intent): void;
				}
				export class MediaRouterCallback extends androidx.mediarouter.media.MediaRouter.Callback {
					public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteButton.MediaRouterCallback>;
					public onRouteUnselected(router: androidx.mediarouter.media.MediaRouter, info: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
					public onRouteRemoved(router: androidx.mediarouter.media.MediaRouter, info: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
					public onRouteSelected(router: androidx.mediarouter.media.MediaRouter, route: androidx.mediarouter.media.MediaRouter.RouteInfo, reason: number): void;
					public onProviderAdded(router: androidx.mediarouter.media.MediaRouter, provider: androidx.mediarouter.media.MediaRouter.ProviderInfo): void;
					public onRouteRemoved(router: androidx.mediarouter.media.MediaRouter, route: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
					public onProviderRemoved(router: androidx.mediarouter.media.MediaRouter, provider: androidx.mediarouter.media.MediaRouter.ProviderInfo): void;
					/** @deprecated */
					public onRouteSelected(router: androidx.mediarouter.media.MediaRouter, route: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
					public onRouteAdded(router: androidx.mediarouter.media.MediaRouter, route: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
					public onRouteChanged(router: androidx.mediarouter.media.MediaRouter, info: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
					public onRouteUnselected(router: androidx.mediarouter.media.MediaRouter, route: androidx.mediarouter.media.MediaRouter.RouteInfo, reason: number): void;
					public onRouteChanged(router: androidx.mediarouter.media.MediaRouter, route: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
					public onRouteSelected(router: androidx.mediarouter.media.MediaRouter, selectedRoute: androidx.mediarouter.media.MediaRouter.RouteInfo, reason: number, requestedRoute: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
					/** @deprecated */
					public onRouteUnselected(router: androidx.mediarouter.media.MediaRouter, route: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
					public onProviderChanged(router: androidx.mediarouter.media.MediaRouter, provider: androidx.mediarouter.media.MediaRouter.ProviderInfo): void;
					public onRouteSelected(router: androidx.mediarouter.media.MediaRouter, info: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
					public onRouteAdded(router: androidx.mediarouter.media.MediaRouter, info: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
				}
				export class RemoteIndicatorLoader extends globalAndroid.os.AsyncTask<java.lang.Void,java.lang.Void,globalAndroid.graphics.drawable.Drawable> {
					public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteButton.RemoteIndicatorLoader>;
					public onPostExecute(remoteIndicator: globalAndroid.graphics.drawable.Drawable): void;
					public onCancelled(result: any): void;
					public onCancelled(): void;
					public doInBackground(objects0: native.Array<any>): any;
					public doInBackground(params: native.Array<java.lang.Void>): globalAndroid.graphics.drawable.Drawable;
					public onPostExecute(result: any): void;
					public onCancelled(remoteIndicator: globalAndroid.graphics.drawable.Drawable): void;
				}
			}
		}
	}
}

declare module androidx {
	export module mediarouter {
		export module app {
			export class MediaRouteChooserDialog extends androidx.appcompat.app.AppCompatDialog {
				public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteChooserDialog>;
				public onWindowAttributesChanged(params: globalAndroid.view.WindowManager.LayoutParams): void;
				public onMenuOpened(featureId: number, menu: globalAndroid.view.Menu): boolean;
				public constructor(context: globalAndroid.content.Context);
				public onFilterRoutes(routes: java.util.List<androidx.mediarouter.media.MediaRouter.RouteInfo>): void;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
				public constructor(context: globalAndroid.content.Context, cancelable: boolean, cancelListener: globalAndroid.content.DialogInterface.OnCancelListener);
				public onFilterRoute(route: androidx.mediarouter.media.MediaRouter.RouteInfo): boolean;
				public onCreate(savedInstanceState: globalAndroid.os.Bundle): void;
				public dismiss(): void;
				public onWindowStartingActionMode(callback: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
				public onCreatePanelMenu(featureId: number, menu: globalAndroid.view.Menu): boolean;
				public onActionModeFinished(mode: globalAndroid.view.ActionMode): void;
				public onWindowStartingSupportActionMode(callback: androidx.appcompat.view.ActionMode.Callback): androidx.appcompat.view.ActionMode;
				public onWindowFocusChanged(hasFocus: boolean): void;
				public dispatchKeyEvent(event: globalAndroid.view.KeyEvent): boolean;
				public onProvideKeyboardShortcuts(data: java.util.List<any>, menu: globalAndroid.view.Menu, deviceId: number): void;
				public cancel(): void;
				public dispatchGenericMotionEvent(ev: globalAndroid.view.MotionEvent): boolean;
				public setTitle(title: string): void;
				public dispatchPopulateAccessibilityEvent(event: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
				public getRouteSelector(): androidx.mediarouter.media.MediaRouteSelector;
				public onWindowStartingActionMode(callback: globalAndroid.view.ActionMode.Callback, type: number): globalAndroid.view.ActionMode;
				public setTitle(titleId: number): void;
				public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public onPanelClosed(featureId: number, menu: globalAndroid.view.Menu): void;
				public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public onCreatePanelView(featureId: number): globalAndroid.view.View;
				public onPreparePanel(featureId: number, view: globalAndroid.view.View, menu: globalAndroid.view.Menu): boolean;
				public refreshRoutes(): void;
				public onActionModeStarted(mode: globalAndroid.view.ActionMode): void;
				public onContentChanged(): void;
				public onSearchRequested(searchEvent: any): boolean;
				public onCreateContextMenu(menu: globalAndroid.view.ContextMenu, v: globalAndroid.view.View, menuInfo: globalAndroid.view.ContextMenu.ContextMenuInfo): void;
				public onMenuItemSelected(featureId: number, item: globalAndroid.view.MenuItem): boolean;
				public constructor(context: globalAndroid.content.Context, theme: number);
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public setRouteSelector(selector: androidx.mediarouter.media.MediaRouteSelector): void;
				public onDetachedFromWindow(): void;
				public dispatchKeyShortcutEvent(event: globalAndroid.view.KeyEvent): boolean;
				public onPointerCaptureChanged(hasCapture: boolean): void;
				public onSearchRequested(): boolean;
				public onSupportActionModeStarted(mode: androidx.appcompat.view.ActionMode): void;
				public dispatchTrackballEvent(ev: globalAndroid.view.MotionEvent): boolean;
				public onAttachedToWindow(): void;
				public onSupportActionModeFinished(mode: androidx.appcompat.view.ActionMode): void;
				public dispatchTouchEvent(ev: globalAndroid.view.MotionEvent): boolean;
			}
			export module MediaRouteChooserDialog {
				export class MediaRouterCallback extends androidx.mediarouter.media.MediaRouter.Callback {
					public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteChooserDialog.MediaRouterCallback>;
					public onRouteAdded(router: androidx.mediarouter.media.MediaRouter, route: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
					public onRouteRemoved(router: androidx.mediarouter.media.MediaRouter, info: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
					public onRouteChanged(router: androidx.mediarouter.media.MediaRouter, info: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
					public onRouteSelected(router: androidx.mediarouter.media.MediaRouter, route: androidx.mediarouter.media.MediaRouter.RouteInfo, reason: number): void;
					public onRouteChanged(router: androidx.mediarouter.media.MediaRouter, route: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
					public onRouteSelected(router: androidx.mediarouter.media.MediaRouter, selectedRoute: androidx.mediarouter.media.MediaRouter.RouteInfo, reason: number, requestedRoute: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
					public onRouteRemoved(router: androidx.mediarouter.media.MediaRouter, route: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
					public onRouteSelected(router: androidx.mediarouter.media.MediaRouter, route: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
					public onRouteAdded(router: androidx.mediarouter.media.MediaRouter, info: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
					/** @deprecated */
					public onRouteSelected(router: androidx.mediarouter.media.MediaRouter, route: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
				}
				export class RouteAdapter extends globalAndroid.widget.ArrayAdapter<androidx.mediarouter.media.MediaRouter.RouteInfo> implements globalAndroid.widget.AdapterView.OnItemClickListener  {
					public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteChooserDialog.RouteAdapter>;
					public constructor(context: globalAndroid.content.Context, resource: number, textViewResourceId: number, objects: java.util.List<any>);
					public onItemClick(parent: globalAndroid.widget.AdapterView<any>, view: globalAndroid.view.View, position: number, id: number): void;
					public constructor(context: globalAndroid.content.Context, resource: number, objects: java.util.List<any>);
					public getFilter(): globalAndroid.widget.Filter;
					public areAllItemsEnabled(): boolean;
					public isEnabled(position: number): boolean;
					public constructor(context: globalAndroid.content.Context, resource: number, textViewResourceId: number);
					public constructor(context: globalAndroid.content.Context, resource: number, objects: native.Array<any>);
					public constructor(context: globalAndroid.content.Context, routes: java.util.List<androidx.mediarouter.media.MediaRouter.RouteInfo>);
					public constructor(context: globalAndroid.content.Context, resource: number, textViewResourceId: number, objects: native.Array<any>);
					public constructor(context: globalAndroid.content.Context, resource: number);
					public setDropDownViewTheme(theme: globalAndroid.content.res.Resources.Theme): void;
					public constructor();
					public getDropDownViewTheme(): globalAndroid.content.res.Resources.Theme;
					public getView(position: number, convertView: globalAndroid.view.View, parent: globalAndroid.view.ViewGroup): globalAndroid.view.View;
					public getDropDownView(position: number, convertView: globalAndroid.view.View, parent: globalAndroid.view.ViewGroup): globalAndroid.view.View;
				}
				export class RouteComparator extends java.util.Comparator<androidx.mediarouter.media.MediaRouter.RouteInfo> {
					public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteChooserDialog.RouteComparator>;
					public static sInstance: androidx.mediarouter.app.MediaRouteChooserDialog.RouteComparator;
					public equals(obj: any): boolean;
					public static nullsFirst(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
					public thenComparing(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public compare(lhs: androidx.mediarouter.media.MediaRouter.RouteInfo, rhs: androidx.mediarouter.media.MediaRouter.RouteInfo): number;
					public thenComparingInt(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public static comparingLong(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public thenComparingDouble(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public thenComparing(other: java.util.Comparator<any>): java.util.Comparator<any>;
					public static reverseOrder(): java.util.Comparator<any>;
					public static comparingDouble(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public compare(object0: any, object1: any): number;
					public static nullsLast(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
					public static comparing(keyExtractor: any /* any*/, keyComparator: java.util.Comparator<any>): java.util.Comparator<any>;
					public thenComparing(keyExtractor: any /* any*/, keyComparator: java.util.Comparator<any>): java.util.Comparator<any>;
					public reversed(): java.util.Comparator<any>;
					public thenComparingLong(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public static comparing(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public static comparingInt(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public static naturalOrder(): java.util.Comparator<any>;
				}
			}
		}
	}
}

declare module androidx {
	export module mediarouter {
		export module app {
			export class MediaRouteChooserDialogFragment extends androidx.fragment.app.DialogFragment {
				public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteChooserDialogFragment>;
				public onCreateChooserDialog(context: globalAndroid.content.Context, savedInstanceState: globalAndroid.os.Bundle): androidx.mediarouter.app.MediaRouteChooserDialog;
				public getViewModelStore(): androidx.lifecycle.ViewModelStore;
				public onDismiss(dialog: globalAndroid.content.DialogInterface): void;
				public onConfigurationChanged(newConfig: globalAndroid.content.res.Configuration): void;
				public onLowMemory(): void;
				public onCreateDialog(savedInstanceState: globalAndroid.os.Bundle): globalAndroid.app.Dialog;
				public registerForActivityResult(contract: androidx.activity.result.contract.ActivityResultContract, callback: androidx.activity.result.ActivityResultCallback): androidx.activity.result.ActivityResultLauncher;
				public getLifecycle(): androidx.lifecycle.Lifecycle;
				public constructor();
				public getSavedStateRegistry(): androidx.savedstate.SavedStateRegistry;
				public onCancel(dialog: globalAndroid.content.DialogInterface): void;
				public getDefaultViewModelProviderFactory(): androidx.lifecycle.ViewModelProvider.Factory;
				public onCreateContextMenu(menu: globalAndroid.view.ContextMenu, v: globalAndroid.view.View, menuInfo: globalAndroid.view.ContextMenu.ContextMenuInfo): void;
				public onCreateDynamicChooserDialog(context: globalAndroid.content.Context): androidx.mediarouter.app.MediaRouteDynamicChooserDialog;
				public setRouteSelector(selector: androidx.mediarouter.media.MediaRouteSelector): void;
				public registerForActivityResult(contract: androidx.activity.result.contract.ActivityResultContract, registry: androidx.activity.result.ActivityResultRegistry, callback: androidx.activity.result.ActivityResultCallback): androidx.activity.result.ActivityResultLauncher;
				public constructor(contentLayoutId: number);
				public getRouteSelector(): androidx.mediarouter.media.MediaRouteSelector;
			}
		}
	}
}

declare module androidx {
	export module mediarouter {
		export module app {
			export class MediaRouteControllerDialog extends androidx.appcompat.app.AlertDialog {
				public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteControllerDialog>;
				public onWindowAttributesChanged(params: globalAndroid.view.WindowManager.LayoutParams): void;
				public onMenuOpened(featureId: number, menu: globalAndroid.view.Menu): boolean;
				public constructor(context: globalAndroid.content.Context);
				public constructor(context: globalAndroid.content.Context, themeResId: number);
				public onCreateMediaControlView(savedInstanceState: globalAndroid.os.Bundle): globalAndroid.view.View;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
				public constructor(context: globalAndroid.content.Context, cancelable: boolean, cancelListener: globalAndroid.content.DialogInterface.OnCancelListener);
				public onCreate(savedInstanceState: globalAndroid.os.Bundle): void;
				public dismiss(): void;
				public onWindowStartingActionMode(callback: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
				public onCreatePanelMenu(featureId: number, menu: globalAndroid.view.Menu): boolean;
				public onActionModeFinished(mode: globalAndroid.view.ActionMode): void;
				public onWindowStartingSupportActionMode(callback: androidx.appcompat.view.ActionMode.Callback): androidx.appcompat.view.ActionMode;
				public setVolumeControlEnabled(enable: boolean): void;
				public onWindowFocusChanged(hasFocus: boolean): void;
				public isVolumeControlEnabled(): boolean;
				public dispatchKeyEvent(event: globalAndroid.view.KeyEvent): boolean;
				public getRoute(): androidx.mediarouter.media.MediaRouter.RouteInfo;
				public onProvideKeyboardShortcuts(data: java.util.List<any>, menu: globalAndroid.view.Menu, deviceId: number): void;
				public cancel(): void;
				public dispatchGenericMotionEvent(ev: globalAndroid.view.MotionEvent): boolean;
				public dispatchPopulateAccessibilityEvent(event: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
				public onWindowStartingActionMode(callback: globalAndroid.view.ActionMode.Callback, type: number): globalAndroid.view.ActionMode;
				public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public onPanelClosed(featureId: number, menu: globalAndroid.view.Menu): void;
				public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public onCreatePanelView(featureId: number): globalAndroid.view.View;
				public onPreparePanel(featureId: number, view: globalAndroid.view.View, menu: globalAndroid.view.Menu): boolean;
				public onActionModeStarted(mode: globalAndroid.view.ActionMode): void;
				public getMediaSession(): globalAndroid.support.v4.media.session.MediaSessionCompat.Token;
				public onContentChanged(): void;
				public onSearchRequested(searchEvent: any): boolean;
				public onCreateContextMenu(menu: globalAndroid.view.ContextMenu, v: globalAndroid.view.View, menuInfo: globalAndroid.view.ContextMenu.ContextMenuInfo): void;
				public onMenuItemSelected(featureId: number, item: globalAndroid.view.MenuItem): boolean;
				public constructor(context: globalAndroid.content.Context, theme: number);
				public getMediaControlView(): globalAndroid.view.View;
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public onDetachedFromWindow(): void;
				public dispatchKeyShortcutEvent(event: globalAndroid.view.KeyEvent): boolean;
				public onPointerCaptureChanged(hasCapture: boolean): void;
				public onSearchRequested(): boolean;
				public onSupportActionModeStarted(mode: androidx.appcompat.view.ActionMode): void;
				public dispatchTrackballEvent(ev: globalAndroid.view.MotionEvent): boolean;
				public onAttachedToWindow(): void;
				public onSupportActionModeFinished(mode: androidx.appcompat.view.ActionMode): void;
				public dispatchTouchEvent(ev: globalAndroid.view.MotionEvent): boolean;
			}
			export module MediaRouteControllerDialog {
				export class ClickListener extends java.lang.Object implements globalAndroid.view.View.OnClickListener {
					public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteControllerDialog.ClickListener>;
					public onClick(v: globalAndroid.view.View): void;
				}
				export class FetchArtTask extends globalAndroid.os.AsyncTask<java.lang.Void,java.lang.Void,globalAndroid.graphics.Bitmap> {
					public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteControllerDialog.FetchArtTask>;
					public getIconBitmap(): globalAndroid.graphics.Bitmap;
					public onPostExecute(art: globalAndroid.graphics.Bitmap): void;
					public onPreExecute(): void;
					public doInBackground(objects0: native.Array<any>): any;
					public getIconUri(): globalAndroid.net.Uri;
					public doInBackground(voids0: native.Array<java.lang.Void>): globalAndroid.graphics.Bitmap;
					public onPostExecute(result: any): void;
				}
				export class MediaControllerCallback extends globalAndroid.support.v4.media.session.MediaControllerCompat.Callback {
					public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteControllerDialog.MediaControllerCallback>;
					public onSessionDestroyed(): void;
					public binderDied(): void;
					public onPlaybackStateChanged(state: globalAndroid.support.v4.media.session.PlaybackStateCompat): void;
					public onMetadataChanged(metadata: globalAndroid.support.v4.media.MediaMetadataCompat): void;
				}
				export class MediaRouterCallback extends androidx.mediarouter.media.MediaRouter.Callback {
					public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteControllerDialog.MediaRouterCallback>;
					public onRouteUnselected(router: androidx.mediarouter.media.MediaRouter, route: androidx.mediarouter.media.MediaRouter.RouteInfo, reason: number): void;
					public onRouteVolumeChanged(router: androidx.mediarouter.media.MediaRouter, route: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
					/** @deprecated */
					public onRouteUnselected(router: androidx.mediarouter.media.MediaRouter, route: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
					public onRouteChanged(router: androidx.mediarouter.media.MediaRouter, route: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
					public onRouteUnselected(router: androidx.mediarouter.media.MediaRouter, route: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
				}
				export class VolumeChangeListener extends java.lang.Object implements globalAndroid.widget.SeekBar.OnSeekBarChangeListener {
					public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteControllerDialog.VolumeChangeListener>;
					public onStopTrackingTouch(seekBar: globalAndroid.widget.SeekBar): void;
					public onProgressChanged(seekBar: globalAndroid.widget.SeekBar, progress: number, fromUser: boolean): void;
					public onStartTrackingTouch(seekBar: globalAndroid.widget.SeekBar): void;
				}
				export class VolumeGroupAdapter extends globalAndroid.widget.ArrayAdapter<androidx.mediarouter.media.MediaRouter.RouteInfo> {
					public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteControllerDialog.VolumeGroupAdapter>;
					public constructor(context: globalAndroid.content.Context, resource: number, textViewResourceId: number, objects: java.util.List<any>);
					public constructor(context: globalAndroid.content.Context, resource: number, objects: java.util.List<any>);
					public getFilter(): globalAndroid.widget.Filter;
					public isEnabled(position: number): boolean;
					public areAllItemsEnabled(): boolean;
					public constructor(context: globalAndroid.content.Context, resource: number, textViewResourceId: number);
					public constructor(context: globalAndroid.content.Context, resource: number, objects: native.Array<any>);
					public constructor(context: globalAndroid.content.Context, resource: number, textViewResourceId: number, objects: native.Array<any>);
					public constructor(param0: globalAndroid.content.Context, context: java.util.List<androidx.mediarouter.media.MediaRouter.RouteInfo>);
					public constructor(context: globalAndroid.content.Context, resource: number);
					public setDropDownViewTheme(theme: globalAndroid.content.res.Resources.Theme): void;
					public constructor();
					public getDropDownViewTheme(): globalAndroid.content.res.Resources.Theme;
					public getView(position: number, convertView: globalAndroid.view.View, parent: globalAndroid.view.ViewGroup): globalAndroid.view.View;
					public getDropDownView(position: number, convertView: globalAndroid.view.View, parent: globalAndroid.view.ViewGroup): globalAndroid.view.View;
				}
			}
		}
	}
}

declare module androidx {
	export module mediarouter {
		export module app {
			export class MediaRouteControllerDialogFragment extends androidx.fragment.app.DialogFragment {
				public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteControllerDialogFragment>;
				public onCreateControllerDialog(context: globalAndroid.content.Context, savedInstanceState: globalAndroid.os.Bundle): androidx.mediarouter.app.MediaRouteControllerDialog;
				public getViewModelStore(): androidx.lifecycle.ViewModelStore;
				public onDismiss(dialog: globalAndroid.content.DialogInterface): void;
				public onConfigurationChanged(newConfig: globalAndroid.content.res.Configuration): void;
				public onLowMemory(): void;
				public onCreateDynamicControllerDialog(context: globalAndroid.content.Context): androidx.mediarouter.app.MediaRouteDynamicControllerDialog;
				public onCreateDialog(savedInstanceState: globalAndroid.os.Bundle): globalAndroid.app.Dialog;
				public registerForActivityResult(contract: androidx.activity.result.contract.ActivityResultContract, callback: androidx.activity.result.ActivityResultCallback): androidx.activity.result.ActivityResultLauncher;
				public getLifecycle(): androidx.lifecycle.Lifecycle;
				public constructor();
				public getSavedStateRegistry(): androidx.savedstate.SavedStateRegistry;
				public onCancel(dialog: globalAndroid.content.DialogInterface): void;
				public getDefaultViewModelProviderFactory(): androidx.lifecycle.ViewModelProvider.Factory;
				public onCreateContextMenu(menu: globalAndroid.view.ContextMenu, v: globalAndroid.view.View, menuInfo: globalAndroid.view.ContextMenu.ContextMenuInfo): void;
				public setRouteSelector(selector: androidx.mediarouter.media.MediaRouteSelector): void;
				public registerForActivityResult(contract: androidx.activity.result.contract.ActivityResultContract, registry: androidx.activity.result.ActivityResultRegistry, callback: androidx.activity.result.ActivityResultCallback): androidx.activity.result.ActivityResultLauncher;
				public constructor(contentLayoutId: number);
				public onStop(): void;
				public getRouteSelector(): androidx.mediarouter.media.MediaRouteSelector;
			}
		}
	}
}

declare module androidx {
	export module mediarouter {
		export module app {
			export class MediaRouteDialogFactory extends java.lang.Object {
				public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteDialogFactory>;
				public onCreateChooserDialogFragment(): androidx.mediarouter.app.MediaRouteChooserDialogFragment;
				public onCreateControllerDialogFragment(): androidx.mediarouter.app.MediaRouteControllerDialogFragment;
				public static getDefault(): androidx.mediarouter.app.MediaRouteDialogFactory;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module mediarouter {
		export module app {
			export class MediaRouteDialogHelper extends java.lang.Object {
				public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteDialogHelper>;
				public static getDialogHeight(context: globalAndroid.content.Context): number;
				public static getItemBoundMap(listView: globalAndroid.widget.ListView, adapter: globalAndroid.widget.ArrayAdapter<any>): java.util.HashMap<any,any>;
				public static getDialogWidth(context: globalAndroid.content.Context): number;
				public static getDialogWidthForDynamicGroup(context: globalAndroid.content.Context): number;
				public static getItemsAdded(before: java.util.List<any>, after: java.util.List<any>): java.util.Set<any>;
				public static getItemBitmapMap(context: globalAndroid.content.Context, listView: globalAndroid.widget.ListView, adapter: globalAndroid.widget.ArrayAdapter<any>): java.util.HashMap<any,any>;
				public static getItemsRemoved(before: java.util.List<any>, after: java.util.List<any>): java.util.Set<any>;
				public static listUnorderedEquals(list1: java.util.List<any>, list2: java.util.List<any>): boolean;
			}
		}
	}
}

declare module androidx {
	export module mediarouter {
		export module app {
			export class MediaRouteDiscoveryFragment extends androidx.fragment.app.Fragment {
				public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteDiscoveryFragment>;
				public getViewModelStore(): androidx.lifecycle.ViewModelStore;
				public onConfigurationChanged(newConfig: globalAndroid.content.res.Configuration): void;
				public onLowMemory(): void;
				public onCreateCallback(): androidx.mediarouter.media.MediaRouter.Callback;
				public registerForActivityResult(contract: androidx.activity.result.contract.ActivityResultContract, callback: androidx.activity.result.ActivityResultCallback): androidx.activity.result.ActivityResultLauncher;
				public onCreate(savedInstanceState: globalAndroid.os.Bundle): void;
				public getLifecycle(): androidx.lifecycle.Lifecycle;
				public constructor();
				public getSavedStateRegistry(): androidx.savedstate.SavedStateRegistry;
				public getDefaultViewModelProviderFactory(): androidx.lifecycle.ViewModelProvider.Factory;
				public onCreateContextMenu(menu: globalAndroid.view.ContextMenu, v: globalAndroid.view.View, menuInfo: globalAndroid.view.ContextMenu.ContextMenuInfo): void;
				public onPrepareCallbackFlags(): number;
				public getMediaRouter(): androidx.mediarouter.media.MediaRouter;
				public onStart(): void;
				public setRouteSelector(selector: androidx.mediarouter.media.MediaRouteSelector): void;
				public registerForActivityResult(contract: androidx.activity.result.contract.ActivityResultContract, registry: androidx.activity.result.ActivityResultRegistry, callback: androidx.activity.result.ActivityResultCallback): androidx.activity.result.ActivityResultLauncher;
				public constructor(contentLayoutId: number);
				public onStop(): void;
				public onDestroy(): void;
				public getRouteSelector(): androidx.mediarouter.media.MediaRouteSelector;
			}
		}
	}
}

declare module androidx {
	export module mediarouter {
		export module app {
			export class MediaRouteDynamicChooserDialog extends androidx.appcompat.app.AppCompatDialog {
				public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteDynamicChooserDialog>;
				public onWindowAttributesChanged(params: globalAndroid.view.WindowManager.LayoutParams): void;
				public onMenuOpened(featureId: number, menu: globalAndroid.view.Menu): boolean;
				public constructor(context: globalAndroid.content.Context);
				public onFilterRoutes(routes: java.util.List<androidx.mediarouter.media.MediaRouter.RouteInfo>): void;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
				public constructor(context: globalAndroid.content.Context, cancelable: boolean, cancelListener: globalAndroid.content.DialogInterface.OnCancelListener);
				public onFilterRoute(route: androidx.mediarouter.media.MediaRouter.RouteInfo): boolean;
				public onCreate(savedInstanceState: globalAndroid.os.Bundle): void;
				public dismiss(): void;
				public onWindowStartingActionMode(callback: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
				public onCreatePanelMenu(featureId: number, menu: globalAndroid.view.Menu): boolean;
				public onActionModeFinished(mode: globalAndroid.view.ActionMode): void;
				public onWindowStartingSupportActionMode(callback: androidx.appcompat.view.ActionMode.Callback): androidx.appcompat.view.ActionMode;
				public onWindowFocusChanged(hasFocus: boolean): void;
				public dispatchKeyEvent(event: globalAndroid.view.KeyEvent): boolean;
				public onProvideKeyboardShortcuts(data: java.util.List<any>, menu: globalAndroid.view.Menu, deviceId: number): void;
				public cancel(): void;
				public dispatchGenericMotionEvent(ev: globalAndroid.view.MotionEvent): boolean;
				public dispatchPopulateAccessibilityEvent(event: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
				public getRouteSelector(): androidx.mediarouter.media.MediaRouteSelector;
				public onWindowStartingActionMode(callback: globalAndroid.view.ActionMode.Callback, type: number): globalAndroid.view.ActionMode;
				public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public onPanelClosed(featureId: number, menu: globalAndroid.view.Menu): void;
				public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public onCreatePanelView(featureId: number): globalAndroid.view.View;
				public onPreparePanel(featureId: number, view: globalAndroid.view.View, menu: globalAndroid.view.Menu): boolean;
				public refreshRoutes(): void;
				public onActionModeStarted(mode: globalAndroid.view.ActionMode): void;
				public onContentChanged(): void;
				public onSearchRequested(searchEvent: any): boolean;
				public onCreateContextMenu(menu: globalAndroid.view.ContextMenu, v: globalAndroid.view.View, menuInfo: globalAndroid.view.ContextMenu.ContextMenuInfo): void;
				public onMenuItemSelected(featureId: number, item: globalAndroid.view.MenuItem): boolean;
				public constructor(context: globalAndroid.content.Context, theme: number);
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public setRouteSelector(selector: androidx.mediarouter.media.MediaRouteSelector): void;
				public onDetachedFromWindow(): void;
				public dispatchKeyShortcutEvent(event: globalAndroid.view.KeyEvent): boolean;
				public onPointerCaptureChanged(hasCapture: boolean): void;
				public onSearchRequested(): boolean;
				public onSupportActionModeStarted(mode: androidx.appcompat.view.ActionMode): void;
				public dispatchTrackballEvent(ev: globalAndroid.view.MotionEvent): boolean;
				public onAttachedToWindow(): void;
				public onSupportActionModeFinished(mode: androidx.appcompat.view.ActionMode): void;
				public dispatchTouchEvent(ev: globalAndroid.view.MotionEvent): boolean;
			}
			export module MediaRouteDynamicChooserDialog {
				export class MediaRouterCallback extends androidx.mediarouter.media.MediaRouter.Callback {
					public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteDynamicChooserDialog.MediaRouterCallback>;
					public onRouteAdded(router: androidx.mediarouter.media.MediaRouter, route: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
					public onRouteRemoved(router: androidx.mediarouter.media.MediaRouter, info: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
					public onRouteChanged(router: androidx.mediarouter.media.MediaRouter, info: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
					public onRouteSelected(router: androidx.mediarouter.media.MediaRouter, route: androidx.mediarouter.media.MediaRouter.RouteInfo, reason: number): void;
					public onRouteChanged(router: androidx.mediarouter.media.MediaRouter, route: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
					public onRouteSelected(router: androidx.mediarouter.media.MediaRouter, selectedRoute: androidx.mediarouter.media.MediaRouter.RouteInfo, reason: number, requestedRoute: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
					public onRouteRemoved(router: androidx.mediarouter.media.MediaRouter, route: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
					public onRouteSelected(router: androidx.mediarouter.media.MediaRouter, route: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
					public onRouteAdded(router: androidx.mediarouter.media.MediaRouter, info: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
					/** @deprecated */
					public onRouteSelected(router: androidx.mediarouter.media.MediaRouter, route: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
				}
				export class RecyclerAdapter extends androidx.recyclerview.widget.RecyclerView.Adapter<androidx.recyclerview.widget.RecyclerView.ViewHolder> {
					public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteDynamicChooserDialog.RecyclerAdapter>;
					public onCreateViewHolder(parent: globalAndroid.view.ViewGroup, viewType: number): androidx.recyclerview.widget.RecyclerView.ViewHolder;
					public getItemViewType(position: number): number;
					public getItem(position: number): androidx.mediarouter.app.MediaRouteDynamicChooserDialog.RecyclerAdapter.Item;
					public getItemCount(): number;
					public onCreateViewHolder(viewGroup0: globalAndroid.view.ViewGroup, int1: number): any;
					public onBindViewHolder(holder: androidx.recyclerview.widget.RecyclerView.ViewHolder, position: number): void;
					public onBindViewHolder(viewHolder0: any, int1: number): void;
					public onBindViewHolder(holder: any, position: number, payloads: java.util.List<any>): void;
				}
				export module RecyclerAdapter {
					export class HeaderViewHolder extends androidx.recyclerview.widget.RecyclerView.ViewHolder {
						public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteDynamicChooserDialog.RecyclerAdapter.HeaderViewHolder>;
						public bindHeaderView(item: androidx.mediarouter.app.MediaRouteDynamicChooserDialog.RecyclerAdapter.Item): void;
					}
					export class Item extends java.lang.Object {
						public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteDynamicChooserDialog.RecyclerAdapter.Item>;
						public getType(): number;
						public getData(): any;
					}
					export class RouteViewHolder extends androidx.recyclerview.widget.RecyclerView.ViewHolder {
						public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteDynamicChooserDialog.RecyclerAdapter.RouteViewHolder>;
						public bindRouteView(item: androidx.mediarouter.app.MediaRouteDynamicChooserDialog.RecyclerAdapter.Item): void;
					}
				}
				export class RouteComparator extends java.util.Comparator<androidx.mediarouter.media.MediaRouter.RouteInfo> {
					public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteDynamicChooserDialog.RouteComparator>;
					public static sInstance: androidx.mediarouter.app.MediaRouteDynamicChooserDialog.RouteComparator;
					public equals(obj: any): boolean;
					public static nullsFirst(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
					public thenComparing(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public compare(lhs: androidx.mediarouter.media.MediaRouter.RouteInfo, rhs: androidx.mediarouter.media.MediaRouter.RouteInfo): number;
					public thenComparingInt(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public static comparingLong(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public thenComparingDouble(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public thenComparing(other: java.util.Comparator<any>): java.util.Comparator<any>;
					public static reverseOrder(): java.util.Comparator<any>;
					public static comparingDouble(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public compare(object0: any, object1: any): number;
					public static nullsLast(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
					public static comparing(keyExtractor: any /* any*/, keyComparator: java.util.Comparator<any>): java.util.Comparator<any>;
					public thenComparing(keyExtractor: any /* any*/, keyComparator: java.util.Comparator<any>): java.util.Comparator<any>;
					public reversed(): java.util.Comparator<any>;
					public thenComparingLong(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public static comparing(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public static comparingInt(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public static naturalOrder(): java.util.Comparator<any>;
				}
			}
		}
	}
}

declare module androidx {
	export module mediarouter {
		export module app {
			export class MediaRouteDynamicControllerDialog extends androidx.appcompat.app.AppCompatDialog {
				public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteDynamicControllerDialog>;
				public onWindowAttributesChanged(params: globalAndroid.view.WindowManager.LayoutParams): void;
				public onMenuOpened(featureId: number, menu: globalAndroid.view.Menu): boolean;
				public constructor(context: globalAndroid.content.Context);
				public onFilterRoutes(routes: java.util.List<androidx.mediarouter.media.MediaRouter.RouteInfo>): void;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
				public constructor(context: globalAndroid.content.Context, cancelable: boolean, cancelListener: globalAndroid.content.DialogInterface.OnCancelListener);
				public onFilterRoute(route: androidx.mediarouter.media.MediaRouter.RouteInfo): boolean;
				public onCreate(savedInstanceState: globalAndroid.os.Bundle): void;
				public dismiss(): void;
				public onWindowStartingActionMode(callback: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
				public onCreatePanelMenu(featureId: number, menu: globalAndroid.view.Menu): boolean;
				public onActionModeFinished(mode: globalAndroid.view.ActionMode): void;
				public onWindowStartingSupportActionMode(callback: androidx.appcompat.view.ActionMode.Callback): androidx.appcompat.view.ActionMode;
				public onWindowFocusChanged(hasFocus: boolean): void;
				public dispatchKeyEvent(event: globalAndroid.view.KeyEvent): boolean;
				public onProvideKeyboardShortcuts(data: java.util.List<any>, menu: globalAndroid.view.Menu, deviceId: number): void;
				public cancel(): void;
				public dispatchGenericMotionEvent(ev: globalAndroid.view.MotionEvent): boolean;
				public dispatchPopulateAccessibilityEvent(event: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
				public getRouteSelector(): androidx.mediarouter.media.MediaRouteSelector;
				public onWindowStartingActionMode(callback: globalAndroid.view.ActionMode.Callback, type: number): globalAndroid.view.ActionMode;
				public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public onPanelClosed(featureId: number, menu: globalAndroid.view.Menu): void;
				public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public onCreatePanelView(featureId: number): globalAndroid.view.View;
				public onPreparePanel(featureId: number, view: globalAndroid.view.View, menu: globalAndroid.view.Menu): boolean;
				public onActionModeStarted(mode: globalAndroid.view.ActionMode): void;
				public getMediaSession(): globalAndroid.support.v4.media.session.MediaSessionCompat.Token;
				public onContentChanged(): void;
				public onSearchRequested(searchEvent: any): boolean;
				public onCreateContextMenu(menu: globalAndroid.view.ContextMenu, v: globalAndroid.view.View, menuInfo: globalAndroid.view.ContextMenu.ContextMenuInfo): void;
				public onMenuItemSelected(featureId: number, item: globalAndroid.view.MenuItem): boolean;
				public constructor(context: globalAndroid.content.Context, theme: number);
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public setRouteSelector(selector: androidx.mediarouter.media.MediaRouteSelector): void;
				public onDetachedFromWindow(): void;
				public dispatchKeyShortcutEvent(event: globalAndroid.view.KeyEvent): boolean;
				public onPointerCaptureChanged(hasCapture: boolean): void;
				public onSearchRequested(): boolean;
				public onSupportActionModeStarted(mode: androidx.appcompat.view.ActionMode): void;
				public dispatchTrackballEvent(ev: globalAndroid.view.MotionEvent): boolean;
				public onAttachedToWindow(): void;
				public onSupportActionModeFinished(mode: androidx.appcompat.view.ActionMode): void;
				public dispatchTouchEvent(ev: globalAndroid.view.MotionEvent): boolean;
			}
			export module MediaRouteDynamicControllerDialog {
				export class FetchArtTask extends globalAndroid.os.AsyncTask<java.lang.Void,java.lang.Void,globalAndroid.graphics.Bitmap> {
					public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteDynamicControllerDialog.FetchArtTask>;
					public onPostExecute(art: globalAndroid.graphics.Bitmap): void;
					public onPreExecute(): void;
					public doInBackground(objects0: native.Array<any>): any;
					public doInBackground(voids0: native.Array<java.lang.Void>): globalAndroid.graphics.Bitmap;
					public onPostExecute(result: any): void;
				}
				export class MediaControllerCallback extends globalAndroid.support.v4.media.session.MediaControllerCompat.Callback {
					public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteDynamicControllerDialog.MediaControllerCallback>;
					public onSessionDestroyed(): void;
					public binderDied(): void;
					public onMetadataChanged(metadata: globalAndroid.support.v4.media.MediaMetadataCompat): void;
				}
				export abstract class MediaRouteVolumeSliderHolder extends androidx.recyclerview.widget.RecyclerView.ViewHolder {
					public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteDynamicControllerDialog.MediaRouteVolumeSliderHolder>;
				}
				export class MediaRouterCallback extends androidx.mediarouter.media.MediaRouter.Callback {
					public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteDynamicControllerDialog.MediaRouterCallback>;
					public onRouteRemoved(router: androidx.mediarouter.media.MediaRouter, info: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
					public onRouteSelected(router: androidx.mediarouter.media.MediaRouter, route: androidx.mediarouter.media.MediaRouter.RouteInfo, reason: number): void;
					public onRouteVolumeChanged(router: androidx.mediarouter.media.MediaRouter, route: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
					public onRouteRemoved(router: androidx.mediarouter.media.MediaRouter, route: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
					public onRouteSelected(router: androidx.mediarouter.media.MediaRouter, route: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
					/** @deprecated */
					public onRouteSelected(router: androidx.mediarouter.media.MediaRouter, route: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
					public onRouteAdded(router: androidx.mediarouter.media.MediaRouter, route: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
					public onRouteUnselected(router: androidx.mediarouter.media.MediaRouter, route: androidx.mediarouter.media.MediaRouter.RouteInfo, reason: number): void;
					public onRouteSelected(router: androidx.mediarouter.media.MediaRouter, selectedRoute: androidx.mediarouter.media.MediaRouter.RouteInfo, reason: number, requestedRoute: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
					/** @deprecated */
					public onRouteUnselected(router: androidx.mediarouter.media.MediaRouter, route: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
					public onRouteChanged(router: androidx.mediarouter.media.MediaRouter, route: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
					public onRouteUnselected(router: androidx.mediarouter.media.MediaRouter, route: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
					public onRouteAdded(router: androidx.mediarouter.media.MediaRouter, info: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
				}
				export class RecyclerAdapter extends androidx.recyclerview.widget.RecyclerView.Adapter<androidx.recyclerview.widget.RecyclerView.ViewHolder> {
					public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteDynamicControllerDialog.RecyclerAdapter>;
					public onCreateViewHolder(parent: globalAndroid.view.ViewGroup, viewType: number): androidx.recyclerview.widget.RecyclerView.ViewHolder;
					public onViewRecycled(holder: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
					public getItemViewType(position: number): number;
					public onViewRecycled(holder: any): void;
					public getItemCount(): number;
					public onCreateViewHolder(viewGroup0: globalAndroid.view.ViewGroup, int1: number): any;
					public getItem(position: number): androidx.mediarouter.app.MediaRouteDynamicControllerDialog.RecyclerAdapter.Item;
					public onBindViewHolder(holder: androidx.recyclerview.widget.RecyclerView.ViewHolder, position: number): void;
					public onBindViewHolder(viewHolder0: any, int1: number): void;
					public onBindViewHolder(holder: any, position: number, payloads: java.util.List<any>): void;
				}
				export module RecyclerAdapter {
					export class GroupViewHolder extends androidx.recyclerview.widget.RecyclerView.ViewHolder {
						public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteDynamicControllerDialog.RecyclerAdapter.GroupViewHolder>;
					}
					export class GroupVolumeViewHolder extends androidx.mediarouter.app.MediaRouteDynamicControllerDialog.MediaRouteVolumeSliderHolder {
						public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteDynamicControllerDialog.RecyclerAdapter.GroupVolumeViewHolder>;
					}
					export class HeaderViewHolder extends androidx.recyclerview.widget.RecyclerView.ViewHolder {
						public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteDynamicControllerDialog.RecyclerAdapter.HeaderViewHolder>;
					}
					export class Item extends java.lang.Object {
						public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteDynamicControllerDialog.RecyclerAdapter.Item>;
						public getType(): number;
						public getData(): any;
					}
					export class RouteViewHolder extends androidx.mediarouter.app.MediaRouteDynamicControllerDialog.MediaRouteVolumeSliderHolder {
						public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteDynamicControllerDialog.RecyclerAdapter.RouteViewHolder>;
					}
				}
				export class RouteComparator extends java.util.Comparator<androidx.mediarouter.media.MediaRouter.RouteInfo> {
					public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteDynamicControllerDialog.RouteComparator>;
					public equals(obj: any): boolean;
					public static nullsFirst(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
					public thenComparing(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public compare(lhs: androidx.mediarouter.media.MediaRouter.RouteInfo, rhs: androidx.mediarouter.media.MediaRouter.RouteInfo): number;
					public thenComparingInt(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public static comparingLong(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public thenComparingDouble(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public thenComparing(other: java.util.Comparator<any>): java.util.Comparator<any>;
					public static reverseOrder(): java.util.Comparator<any>;
					public static comparingDouble(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public compare(object0: any, object1: any): number;
					public static nullsLast(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
					public static comparing(keyExtractor: any /* any*/, keyComparator: java.util.Comparator<any>): java.util.Comparator<any>;
					public thenComparing(keyExtractor: any /* any*/, keyComparator: java.util.Comparator<any>): java.util.Comparator<any>;
					public reversed(): java.util.Comparator<any>;
					public thenComparingLong(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public static comparing(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public static comparingInt(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public static naturalOrder(): java.util.Comparator<any>;
				}
				export class VolumeChangeListener extends java.lang.Object implements globalAndroid.widget.SeekBar.OnSeekBarChangeListener {
					public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteDynamicControllerDialog.VolumeChangeListener>;
					public onStopTrackingTouch(seekBar: globalAndroid.widget.SeekBar): void;
					public onProgressChanged(seekBar: globalAndroid.widget.SeekBar, progress: number, fromUser: boolean): void;
					public onStartTrackingTouch(seekBar: globalAndroid.widget.SeekBar): void;
				}
			}
		}
	}
}

declare module androidx {
	export module mediarouter {
		export module app {
			export class MediaRouteExpandCollapseButton extends androidx.appcompat.widget.AppCompatImageButton {
				public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteExpandCollapseButton>;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public constructor(context: globalAndroid.content.Context);
				public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public setOnClickListener(l: globalAndroid.view.View.OnClickListener): void;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
				public setSupportBackgroundTintList(tint: globalAndroid.content.res.ColorStateList): void;
				public setSupportBackgroundTintMode(tintMode: globalAndroid.graphics.PorterDuff.Mode): void;
				public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public setSupportImageTintList(tint: globalAndroid.content.res.ColorStateList): void;
				public getSupportImageTintList(): globalAndroid.content.res.ColorStateList;
				public getSupportBackgroundTintList(): globalAndroid.content.res.ColorStateList;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
				public setSupportImageTintMode(tintMode: globalAndroid.graphics.PorterDuff.Mode): void;
				public sendAccessibilityEvent(eventType: number): void;
				public invalidateDrawable(dr: globalAndroid.graphics.drawable.Drawable): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
				public getSupportImageTintMode(): globalAndroid.graphics.PorterDuff.Mode;
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public setOnClickListener(listener: globalAndroid.view.View.OnClickListener): void;
				public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public getSupportBackgroundTintMode(): globalAndroid.graphics.PorterDuff.Mode;
			}
		}
	}
}

declare module androidx {
	export module mediarouter {
		export module app {
			export class MediaRouteVolumeSlider extends androidx.appcompat.widget.AppCompatSeekBar {
				public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteVolumeSlider>;
				public drawableStateChanged(): void;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public constructor(context: globalAndroid.content.Context);
				public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
				public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public setThumb(thumb: globalAndroid.graphics.drawable.Drawable): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
				public setColor(progressAndThumbColor: number, backgroundColor: number): void;
				public sendAccessibilityEvent(eventType: number): void;
				public invalidateDrawable(dr: globalAndroid.graphics.drawable.Drawable): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public setColor(color: number): void;
				public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public setHideThumb(hideThumb: boolean): void;
			}
		}
	}
}

declare module androidx {
	export module mediarouter {
		export module app {
			export class MediaRouterThemeHelper extends java.lang.Object {
				public static class: java.lang.Class<androidx.mediarouter.app.MediaRouterThemeHelper>;
			}
		}
	}
}

declare module androidx {
	export module mediarouter {
		export module app {
			export class OutputSwitcherConstants extends java.lang.Object {
				public static class: java.lang.Class<androidx.mediarouter.app.OutputSwitcherConstants>;
			}
		}
	}
}

declare module androidx {
	export module mediarouter {
		export module app {
			export class OverlayListView extends globalAndroid.widget.ListView {
				public static class: java.lang.Class<androidx.mediarouter.app.OverlayListView>;
				/** @deprecated */
				public invalidateChild(child: globalAndroid.view.View, dirty: globalAndroid.graphics.Rect): void;
				public startAnimationAll(): void;
				public focusSearch(direction: number): globalAndroid.view.View;
				public constructor(context: globalAndroid.content.Context);
				public onNestedScrollAccepted(child: globalAndroid.view.View, target: globalAndroid.view.View, axes: number): void;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
				public childDrawableStateChanged(child: globalAndroid.view.View): void;
				public onStopNestedScroll(child: globalAndroid.view.View): void;
				public isLayoutRequested(): boolean;
				public sendAccessibilityEvent(eventType: number): void;
				public onNestedPrePerformAccessibilityAction(target: globalAndroid.view.View, action: number, bundle2: globalAndroid.os.Bundle): boolean;
				public addView(child: globalAndroid.view.View, index: number): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
				public requestFitSystemWindows(): void;
				public getTextDirection(): number;
				public onTextChanged(s: string, start: number, before: number, count: number): void;
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
				public keyboardNavigationClusterSearch(currentCluster: globalAndroid.view.View, direction: number): globalAndroid.view.View;
				public onGlobalLayout(): void;
				public addView(child: globalAndroid.view.View, width: number, height: number): void;
				public stopAnimationAll(): void;
				public isTextDirectionResolved(): boolean;
				public afterTextChanged(s: globalAndroid.text.Editable): void;
				public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
				public childHasTransientStateChanged(child: globalAndroid.view.View, childHasTransientState: boolean): void;
				public focusableViewAvailable(v: globalAndroid.view.View): void;
				public showContextMenuForChild(originalView: globalAndroid.view.View): boolean;
				public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public recomputeViewAttributes(child: globalAndroid.view.View): void;
				public onDraw(canvas: globalAndroid.graphics.Canvas): void;
				public addView(child: globalAndroid.view.View): void;
				public requestSendAccessibilityEvent(child: globalAndroid.view.View, event: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
				public isLayoutDirectionResolved(): boolean;
				public isTextAlignmentResolved(): boolean;
				public getLayoutDirection(): number;
				public removeView(child: globalAndroid.view.View): void;
				public addView(child: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public canResolveTextDirection(): boolean;
				public canResolveTextAlignment(): boolean;
				public notifySubtreeAccessibilityStateChanged(child: globalAndroid.view.View, source: globalAndroid.view.View, changeType: number): void;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
				public updateViewLayout(view: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public onNestedScroll(target: globalAndroid.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
				public requestLayout(): void;
				public focusSearch(focused: globalAndroid.view.View, direction: number): globalAndroid.view.View;
				public requestTransparentRegion(child: globalAndroid.view.View): void;
				public onStartNestedScroll(child: globalAndroid.view.View, target: globalAndroid.view.View, nestedScrollAxes: number): boolean;
				/** @deprecated */
				public requestFitSystemWindows(): void;
				public showContextMenuForChild(originalView: globalAndroid.view.View, x: number, y: number): boolean;
				public requestChildRectangleOnScreen(child: globalAndroid.view.View, rect: globalAndroid.graphics.Rect, immediate: boolean): boolean;
				public bringChildToFront(child: globalAndroid.view.View): void;
				public onNestedPreScroll(target: globalAndroid.view.View, dx: number, dy: number, consumed: native.Array<number>): void;
				public clearChildFocus(child: globalAndroid.view.View): void;
				public onFilterComplete(count: number): void;
				public onDescendantInvalidated(child: globalAndroid.view.View, target: globalAndroid.view.View): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public onTouchModeChanged(isInTouchMode: boolean): void;
				public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public beforeTextChanged(s: string, start: number, count: number, after: number): void;
				public addOverlayObject(object: androidx.mediarouter.app.OverlayListView.OverlayObject): void;
				public getChildVisibleRect(child: globalAndroid.view.View, r: globalAndroid.graphics.Rect, offset: globalAndroid.graphics.Point): boolean;
				public requestChildFocus(child: globalAndroid.view.View, focused: globalAndroid.view.View): void;
				public createContextMenu(menu: globalAndroid.view.ContextMenu): void;
				public canResolveLayoutDirection(): boolean;
				public addView(child: globalAndroid.view.View, index: number, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public onNestedPreFling(target: globalAndroid.view.View, velocityX: number, velocityY: number): boolean;
				public getParent(): globalAndroid.view.ViewParent;
			}
			export module OverlayListView {
				export class OverlayObject extends java.lang.Object {
					public static class: java.lang.Class<androidx.mediarouter.app.OverlayListView.OverlayObject>;
					public constructor(bitmap: globalAndroid.graphics.drawable.BitmapDrawable, startRect: globalAndroid.graphics.Rect);
					public stopAnimation(): void;
					public setInterpolator(interpolator: globalAndroid.view.animation.Interpolator): androidx.mediarouter.app.OverlayListView.OverlayObject;
					public setAnimationEndListener(listener: androidx.mediarouter.app.OverlayListView.OverlayObject.OnAnimationEndListener): androidx.mediarouter.app.OverlayListView.OverlayObject;
					public setTranslateYAnimation(deltaY: number): androidx.mediarouter.app.OverlayListView.OverlayObject;
					public setAlphaAnimation(startAlpha: number, endAlpha: number): androidx.mediarouter.app.OverlayListView.OverlayObject;
					public setDuration(duration: number): androidx.mediarouter.app.OverlayListView.OverlayObject;
					public startAnimation(startTime: number): void;
					public isAnimationStarted(): boolean;
					public update(currentTime: number): boolean;
					public getBitmapDrawable(): globalAndroid.graphics.drawable.BitmapDrawable;
				}
				export module OverlayObject {
					export class OnAnimationEndListener extends java.lang.Object {
						public static class: java.lang.Class<androidx.mediarouter.app.OverlayListView.OverlayObject.OnAnimationEndListener>;
						/**
						 * Constructs a new instance of the androidx.mediarouter.app.OverlayListView() when extending the interface class.
						 */
						public constructor(implementation: {
							onAnimationEnd(): void;
						});
						public constructor();
						public onAnimationEnd(): void;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module mediarouter {
		export module media {
			export class MediaControlIntent extends java.lang.Object {
				public static class: java.lang.Class<androidx.mediarouter.media.MediaControlIntent>;
				public static CATEGORY_LIVE_AUDIO: string;
				public static CATEGORY_LIVE_VIDEO: string;
				public static CATEGORY_REMOTE_PLAYBACK: string;
				public static ACTION_PLAY: string;
				public static ACTION_ENQUEUE: string;
				public static ACTION_SEEK: string;
				public static ACTION_GET_STATUS: string;
				public static ACTION_REMOVE: string;
				public static ACTION_PAUSE: string;
				public static ACTION_RESUME: string;
				public static ACTION_STOP: string;
				public static ACTION_START_SESSION: string;
				public static ACTION_GET_SESSION_STATUS: string;
				public static ACTION_END_SESSION: string;
				public static ACTION_SEND_MESSAGE: string;
				public static EXTRA_SESSION_ID: string;
				public static EXTRA_SESSION_STATUS: string;
				public static EXTRA_SESSION_STATUS_UPDATE_RECEIVER: string;
				public static EXTRA_MESSAGE_RECEIVER: string;
				public static EXTRA_ITEM_ID: string;
				public static EXTRA_ITEM_STATUS: string;
				public static EXTRA_ITEM_CONTENT_POSITION: string;
				public static EXTRA_ITEM_METADATA: string;
				public static EXTRA_ITEM_HTTP_HEADERS: string;
				public static EXTRA_ITEM_STATUS_UPDATE_RECEIVER: string;
				public static EXTRA_MESSAGE: string;
				public static EXTRA_ERROR_CODE: string;
				public static ERROR_UNKNOWN: number;
				public static ERROR_UNSUPPORTED_OPERATION: number;
				public static ERROR_INVALID_SESSION_ID: number;
				public static ERROR_INVALID_ITEM_ID: number;
			}
		}
	}
}

declare module androidx {
	export module mediarouter {
		export module media {
			export class MediaItemMetadata extends java.lang.Object {
				public static class: java.lang.Class<androidx.mediarouter.media.MediaItemMetadata>;
				public static KEY_ALBUM_ARTIST: string;
				public static KEY_ALBUM_TITLE: string;
				public static KEY_ARTWORK_URI: string;
				public static KEY_ARTIST: string;
				public static KEY_AUTHOR: string;
				public static KEY_COMPOSER: string;
				public static KEY_TITLE: string;
				public static KEY_YEAR: string;
				public static KEY_TRACK_NUMBER: string;
				public static KEY_DISC_NUMBER: string;
				public static KEY_DURATION: string;
			}
		}
	}
}

declare module androidx {
	export module mediarouter {
		export module media {
			export class MediaItemStatus extends java.lang.Object {
				public static class: java.lang.Class<androidx.mediarouter.media.MediaItemStatus>;
				public static PLAYBACK_STATE_PENDING: number;
				public static PLAYBACK_STATE_PLAYING: number;
				public static PLAYBACK_STATE_PAUSED: number;
				public static PLAYBACK_STATE_BUFFERING: number;
				public static PLAYBACK_STATE_FINISHED: number;
				public static PLAYBACK_STATE_CANCELED: number;
				public static PLAYBACK_STATE_INVALIDATED: number;
				public static PLAYBACK_STATE_ERROR: number;
				public static EXTRA_HTTP_STATUS_CODE: string;
				public static EXTRA_HTTP_RESPONSE_HEADERS: string;
				public getPlaybackState(): number;
				public getExtras(): globalAndroid.os.Bundle;
				public getContentPosition(): number;
				public getContentDuration(): number;
				public toString(): string;
				public getTimestamp(): number;
				public static fromBundle(bundle: globalAndroid.os.Bundle): androidx.mediarouter.media.MediaItemStatus;
				public asBundle(): globalAndroid.os.Bundle;
			}
			export module MediaItemStatus {
				export class Builder extends java.lang.Object {
					public static class: java.lang.Class<androidx.mediarouter.media.MediaItemStatus.Builder>;
					public constructor(playbackState: number);
					public setExtras(extras: globalAndroid.os.Bundle): androidx.mediarouter.media.MediaItemStatus.Builder;
					public build(): androidx.mediarouter.media.MediaItemStatus;
					public setContentDuration(durationMilliseconds: number): androidx.mediarouter.media.MediaItemStatus.Builder;
					public setTimestamp(elapsedRealtimeTimestamp: number): androidx.mediarouter.media.MediaItemStatus.Builder;
					public setContentPosition(positionMilliseconds: number): androidx.mediarouter.media.MediaItemStatus.Builder;
					public constructor(status: androidx.mediarouter.media.MediaItemStatus);
					public setPlaybackState(playbackState: number): androidx.mediarouter.media.MediaItemStatus.Builder;
				}
			}
		}
	}
}

declare module androidx {
	export module mediarouter {
		export module media {
			export class MediaRoute2Provider extends androidx.mediarouter.media.MediaRouteProvider {
				public static class: java.lang.Class<androidx.mediarouter.media.MediaRoute2Provider>;
				public onCreateDynamicGroupRouteController(initialMemberRouteId: string): androidx.mediarouter.media.MediaRouteProvider.DynamicGroupRouteController;
				public onDiscoveryRequestChanged(request: androidx.mediarouter.media.MediaRouteDiscoveryRequest): void;
				public refreshRoutes(): void;
				public onCreateRouteController(routeId: string): androidx.mediarouter.media.MediaRouteProvider.RouteController;
				public transferTo(routeId: string): void;
				public onCreateRouteController(routeId: string, routeGroupId: string): androidx.mediarouter.media.MediaRouteProvider.RouteController;
			}
			export module MediaRoute2Provider {
				export abstract class Callback extends java.lang.Object {
					public static class: java.lang.Class<androidx.mediarouter.media.MediaRoute2Provider.Callback>;
					public onReleaseController(routeController0: androidx.mediarouter.media.MediaRouteProvider.RouteController): void;
					public onSelectRoute(string0: string, int1: number): void;
					public onSelectFallbackRoute(int0: number): void;
				}
				export class ControllerCallback {
					public static class: java.lang.Class<androidx.mediarouter.media.MediaRoute2Provider.ControllerCallback>;
					public onControllerUpdated(routingController: globalAndroid.media.MediaRouter2.RoutingController): void;
				}
				export class GroupRouteController extends androidx.mediarouter.media.MediaRouteProvider.DynamicGroupRouteController {
					public static class: java.lang.Class<androidx.mediarouter.media.MediaRoute2Provider.GroupRouteController>;
					public onAddMemberRoute(string0: string): void;
					public onRemoveMemberRoute(string0: string): void;
					public onControlRequest(intent: globalAndroid.content.Intent, callback: androidx.mediarouter.media.MediaRouter.ControlRequestCallback): boolean;
					public onRemoveMemberRoute(routeId: string): void;
					public getGroupRouteId(): string;
					public onRelease(): void;
					public onUpdateMemberRoutes(routeIds: java.util.List<string>): void;
					public onSetVolume(volume: number): void;
					public onAddMemberRoute(routeId: string): void;
					public onUpdateVolume(delta: number): void;
					public onUpdateMemberRoutes(list0: java.util.List<string>): void;
				}
				export module GroupRouteController {
					export class ReceiveHandler extends globalAndroid.os.Handler {
						public static class: java.lang.Class<androidx.mediarouter.media.MediaRoute2Provider.GroupRouteController.ReceiveHandler>;
						public handleMessage(msg: globalAndroid.os.Message): void;
					}
				}
				export class MemberRouteController extends androidx.mediarouter.media.MediaRouteProvider.RouteController {
					public static class: java.lang.Class<androidx.mediarouter.media.MediaRoute2Provider.MemberRouteController>;
					public onSetVolume(volume: number): void;
					public onUpdateVolume(delta: number): void;
				}
				export class RouteCallback {
					public static class: java.lang.Class<androidx.mediarouter.media.MediaRoute2Provider.RouteCallback>;
					public onRoutesChanged(routes: java.util.List<globalAndroid.media.MediaRoute2Info>): void;
					public onRoutesAdded(routes: java.util.List<globalAndroid.media.MediaRoute2Info>): void;
					public onRoutesRemoved(routes: java.util.List<globalAndroid.media.MediaRoute2Info>): void;
				}
				export class TransferCallback {
					public static class: java.lang.Class<androidx.mediarouter.media.MediaRoute2Provider.TransferCallback>;
					public onStop(routingController: globalAndroid.media.MediaRouter2.RoutingController): void;
					public onTransfer(oldController: globalAndroid.media.MediaRouter2.RoutingController, newController: globalAndroid.media.MediaRouter2.RoutingController): void;
					public onTransferFailure(requestedRoute: globalAndroid.media.MediaRoute2Info): void;
				}
			}
		}
	}
}

declare module androidx {
	export module mediarouter {
		export module media {
			export class MediaRoute2ProviderServiceAdapter {
				public static class: java.lang.Class<androidx.mediarouter.media.MediaRoute2ProviderServiceAdapter>;
				public static SERVICE_INTERFACE: string;
				public onDeselectRoute(requestId: number, sessionId: string, routeId: string): void;
				public onTransferToRoute(requestId: number, sessionId: string, routeId: string): void;
				public onSelectRoute(requestId: number, sessionId: string, routeId: string): void;
				public attachBaseContext(context: globalAndroid.content.Context): void;
				public setProviderDescriptor(descriptor: androidx.mediarouter.media.MediaRouteProviderDescriptor): void;
				public onDiscoveryPreferenceChanged(preference: globalAndroid.media.RouteDiscoveryPreference): void;
				public onSetRouteVolume(requestId: number, routeId: string, volume: number): void;
				public setDynamicRouteDescriptor(controller: androidx.mediarouter.media.MediaRouteProvider.DynamicGroupRouteController, groupRoute: androidx.mediarouter.media.MediaRouteDescriptor, descriptors: java.util.Collection<androidx.mediarouter.media.MediaRouteProvider.DynamicGroupRouteController.DynamicRouteDescriptor>): void;
				public onReleaseSession(requestId: number, sessionId: string): void;
				public onSetSessionVolume(requestId: number, sessionId: string, volume: number): void;
				public onCreateSession(requestId: number, packageName: string, routeId: string, sessionHints: globalAndroid.os.Bundle): void;
			}
			export module MediaRoute2ProviderServiceAdapter {
				export class DynamicGroupRouteControllerProxy extends androidx.mediarouter.media.MediaRouteProvider.DynamicGroupRouteController {
					public static class: java.lang.Class<androidx.mediarouter.media.MediaRoute2ProviderServiceAdapter.DynamicGroupRouteControllerProxy>;
					public onAddMemberRoute(string0: string): void;
					public getRouteId(): string;
					public onSelect(): void;
					public onRemoveMemberRoute(routeId: string): void;
					public onSetVolume(volume: number): void;
					public onUpdateVolume(delta: number): void;
					public onRemoveMemberRoute(string0: string): void;
					public onControlRequest(intent: globalAndroid.content.Intent, callback: androidx.mediarouter.media.MediaRouter.ControlRequestCallback): boolean;
					/** @deprecated */
					public onUnselect(): void;
					public onRelease(): void;
					public onUnselect(reason: number): void;
					public onUpdateMemberRoutes(routeIds: java.util.List<string>): void;
					public onAddMemberRoute(routeId: string): void;
					public onUpdateMemberRoutes(list0: java.util.List<string>): void;
				}
				export class IncomingHandler extends globalAndroid.os.Handler {
					public static class: java.lang.Class<androidx.mediarouter.media.MediaRoute2ProviderServiceAdapter.IncomingHandler>;
					public handleMessage(msg: globalAndroid.os.Message): void;
				}
				export class SessionRecord extends java.lang.Object {
					public static class: java.lang.Class<androidx.mediarouter.media.MediaRoute2ProviderServiceAdapter.SessionRecord>;
					public getFlags(): number;
					public release(shouldUnselect: boolean): void;
					public updateMemberRouteControllers(groupId: string, oldSession: globalAndroid.media.RoutingSessionInfo, newSession: globalAndroid.media.RoutingSessionInfo): void;
					public updateSessionInfo(groupRoute: androidx.mediarouter.media.MediaRouteDescriptor, dynamicRouteDescriptors: java.util.Collection<androidx.mediarouter.media.MediaRouteProvider.DynamicGroupRouteController.DynamicRouteDescriptor>): void;
				}
			}
		}
	}
}

declare module androidx {
	export module mediarouter {
		export module media {
			export class MediaRouteDescriptor extends java.lang.Object {
				public static class: java.lang.Class<androidx.mediarouter.media.MediaRouteDescriptor>;
				public getId(): string;
				public getExtras(): globalAndroid.os.Bundle;
				public getGroupMemberIds(): java.util.List<string>;
				public getConnectionState(): number;
				public getDescription(): string;
				public getPlaybackType(): number;
				public getMinClientVersion(): number;
				public getDeviceType(): number;
				public isDynamicGroupRoute(): boolean;
				public getPresentationDisplayId(): number;
				public asBundle(): globalAndroid.os.Bundle;
				public getVolumeHandling(): number;
				public getIconUri(): globalAndroid.net.Uri;
				public getVolumeMax(): number;
				public getPlaybackStream(): number;
				/** @deprecated */
				public isConnecting(): boolean;
				public static fromBundle(bundle: globalAndroid.os.Bundle): androidx.mediarouter.media.MediaRouteDescriptor;
				public getName(): string;
				public isValid(): boolean;
				public toString(): string;
				public getVolume(): number;
				public canDisconnectAndKeepPlaying(): boolean;
				public getControlFilters(): java.util.List<globalAndroid.content.IntentFilter>;
				public getSettingsActivity(): globalAndroid.content.IntentSender;
				public isEnabled(): boolean;
				public getMaxClientVersion(): number;
			}
			export module MediaRouteDescriptor {
				export class Builder extends java.lang.Object {
					public static class: java.lang.Class<androidx.mediarouter.media.MediaRouteDescriptor.Builder>;
					public addControlFilters(filters: java.util.Collection<globalAndroid.content.IntentFilter>): androidx.mediarouter.media.MediaRouteDescriptor.Builder;
					public build(): androidx.mediarouter.media.MediaRouteDescriptor;
					public constructor(descriptor: androidx.mediarouter.media.MediaRouteDescriptor);
					public setPlaybackType(playbackType: number): androidx.mediarouter.media.MediaRouteDescriptor.Builder;
					public setCanDisconnect(canDisconnect: boolean): androidx.mediarouter.media.MediaRouteDescriptor.Builder;
					public setPresentationDisplayId(presentationDisplayId: number): androidx.mediarouter.media.MediaRouteDescriptor.Builder;
					public setIconUri(iconUri: globalAndroid.net.Uri): androidx.mediarouter.media.MediaRouteDescriptor.Builder;
					public setMinClientVersion(minVersion: number): androidx.mediarouter.media.MediaRouteDescriptor.Builder;
					public setId(id: string): androidx.mediarouter.media.MediaRouteDescriptor.Builder;
					public setDescription(description: string): androidx.mediarouter.media.MediaRouteDescriptor.Builder;
					public constructor(id: string, name: string);
					public setSettingsActivity(is: globalAndroid.content.IntentSender): androidx.mediarouter.media.MediaRouteDescriptor.Builder;
					public setVolume(volume: number): androidx.mediarouter.media.MediaRouteDescriptor.Builder;
					public removeGroupMemberId(memberRouteId: string): androidx.mediarouter.media.MediaRouteDescriptor.Builder;
					public setDeviceType(deviceType: number): androidx.mediarouter.media.MediaRouteDescriptor.Builder;
					public addGroupMemberIds(groupMemberIds: java.util.Collection<string>): androidx.mediarouter.media.MediaRouteDescriptor.Builder;
					public setConnectionState(connectionState: number): androidx.mediarouter.media.MediaRouteDescriptor.Builder;
					public setExtras(extras: globalAndroid.os.Bundle): androidx.mediarouter.media.MediaRouteDescriptor.Builder;
					public addControlFilter(filter: globalAndroid.content.IntentFilter): androidx.mediarouter.media.MediaRouteDescriptor.Builder;
					public addGroupMemberId(groupMemberId: string): androidx.mediarouter.media.MediaRouteDescriptor.Builder;
					public setVolumeMax(volumeMax: number): androidx.mediarouter.media.MediaRouteDescriptor.Builder;
					public setName(name: string): androidx.mediarouter.media.MediaRouteDescriptor.Builder;
					public setPlaybackStream(playbackStream: number): androidx.mediarouter.media.MediaRouteDescriptor.Builder;
					public clearGroupMemberIds(): androidx.mediarouter.media.MediaRouteDescriptor.Builder;
					public setVolumeHandling(volumeHandling: number): androidx.mediarouter.media.MediaRouteDescriptor.Builder;
					public setIsDynamicGroupRoute(isDynamicGroupRoute: boolean): androidx.mediarouter.media.MediaRouteDescriptor.Builder;
					public setMaxClientVersion(maxVersion: number): androidx.mediarouter.media.MediaRouteDescriptor.Builder;
					/** @deprecated */
					public setConnecting(connecting: boolean): androidx.mediarouter.media.MediaRouteDescriptor.Builder;
					public setEnabled(enabled: boolean): androidx.mediarouter.media.MediaRouteDescriptor.Builder;
				}
			}
		}
	}
}

declare module androidx {
	export module mediarouter {
		export module media {
			export class MediaRouteDiscoveryRequest extends java.lang.Object {
				public static class: java.lang.Class<androidx.mediarouter.media.MediaRouteDiscoveryRequest>;
				public equals(obj: any): boolean;
				public hashCode(): number;
				public equals(o: any): boolean;
				public constructor(selector: androidx.mediarouter.media.MediaRouteSelector, activeScan: boolean);
				public isValid(): boolean;
				public toString(): string;
				public static fromBundle(bundle: globalAndroid.os.Bundle): androidx.mediarouter.media.MediaRouteDiscoveryRequest;
				public getSelector(): androidx.mediarouter.media.MediaRouteSelector;
				public asBundle(): globalAndroid.os.Bundle;
				public isActiveScan(): boolean;
			}
		}
	}
}

declare module androidx {
	export module mediarouter {
		export module media {
			export abstract class MediaRouteProvider extends java.lang.Object {
				public static class: java.lang.Class<androidx.mediarouter.media.MediaRouteProvider>;
				public getHandler(): globalAndroid.os.Handler;
				public setCallback(callback: androidx.mediarouter.media.MediaRouteProvider.Callback): void;
				public constructor(context: globalAndroid.content.Context);
				public getContext(): globalAndroid.content.Context;
				public getDiscoveryRequest(): androidx.mediarouter.media.MediaRouteDiscoveryRequest;
				public setDescriptor(descriptor: androidx.mediarouter.media.MediaRouteProviderDescriptor): void;
				public setDiscoveryRequest(request: androidx.mediarouter.media.MediaRouteDiscoveryRequest): void;
				public onCreateDynamicGroupRouteController(initialMemberRouteId: string): androidx.mediarouter.media.MediaRouteProvider.DynamicGroupRouteController;
				public onDiscoveryRequestChanged(request: androidx.mediarouter.media.MediaRouteDiscoveryRequest): void;
				public getMetadata(): androidx.mediarouter.media.MediaRouteProvider.ProviderMetadata;
				public getDescriptor(): androidx.mediarouter.media.MediaRouteProviderDescriptor;
				public onCreateRouteController(routeId: string): androidx.mediarouter.media.MediaRouteProvider.RouteController;
				public onCreateRouteController(routeId: string, routeGroupId: string): androidx.mediarouter.media.MediaRouteProvider.RouteController;
			}
			export module MediaRouteProvider {
				export abstract class Callback extends java.lang.Object {
					public static class: java.lang.Class<androidx.mediarouter.media.MediaRouteProvider.Callback>;
					public constructor();
					public onDescriptorChanged(provider: androidx.mediarouter.media.MediaRouteProvider, descriptor: androidx.mediarouter.media.MediaRouteProviderDescriptor): void;
				}
				export abstract class DynamicGroupRouteController extends androidx.mediarouter.media.MediaRouteProvider.RouteController {
					public static class: java.lang.Class<androidx.mediarouter.media.MediaRouteProvider.DynamicGroupRouteController>;
					public onAddMemberRoute(string0: string): void;
					public onRemoveMemberRoute(string0: string): void;
					public constructor();
					/** @deprecated */
					public notifyDynamicRoutesChanged(routes: java.util.Collection<androidx.mediarouter.media.MediaRouteProvider.DynamicGroupRouteController.DynamicRouteDescriptor>): void;
					public onUpdateMemberRoutes(list0: java.util.List<string>): void;
					public getTransferableSectionTitle(): string;
					public getGroupableSelectionTitle(): string;
					public notifyDynamicRoutesChanged(groupRoute: androidx.mediarouter.media.MediaRouteDescriptor, dynamicRoutes: java.util.Collection<androidx.mediarouter.media.MediaRouteProvider.DynamicGroupRouteController.DynamicRouteDescriptor>): void;
				}
				export module DynamicGroupRouteController {
					export class DynamicRouteDescriptor extends java.lang.Object {
						public static class: java.lang.Class<androidx.mediarouter.media.MediaRouteProvider.DynamicGroupRouteController.DynamicRouteDescriptor>;
						public static UNSELECTING: number;
						public static UNSELECTED: number;
						public static SELECTING: number;
						public static SELECTED: number;
						public getRouteDescriptor(): androidx.mediarouter.media.MediaRouteDescriptor;
						public getSelectionState(): number;
						public isTransferable(): boolean;
						public isGroupable(): boolean;
						public isUnselectable(): boolean;
					}
					export module DynamicRouteDescriptor {
						export class Builder extends java.lang.Object {
							public static class: java.lang.Class<androidx.mediarouter.media.MediaRouteProvider.DynamicGroupRouteController.DynamicRouteDescriptor.Builder>;
							public constructor(descriptor: androidx.mediarouter.media.MediaRouteDescriptor);
							public setIsGroupable(value: boolean): androidx.mediarouter.media.MediaRouteProvider.DynamicGroupRouteController.DynamicRouteDescriptor.Builder;
							public constructor(dynamicRouteDescriptor: androidx.mediarouter.media.MediaRouteProvider.DynamicGroupRouteController.DynamicRouteDescriptor);
							public setSelectionState(state: number): androidx.mediarouter.media.MediaRouteProvider.DynamicGroupRouteController.DynamicRouteDescriptor.Builder;
							public setIsTransferable(value: boolean): androidx.mediarouter.media.MediaRouteProvider.DynamicGroupRouteController.DynamicRouteDescriptor.Builder;
							public build(): androidx.mediarouter.media.MediaRouteProvider.DynamicGroupRouteController.DynamicRouteDescriptor;
							public setIsUnselectable(value: boolean): androidx.mediarouter.media.MediaRouteProvider.DynamicGroupRouteController.DynamicRouteDescriptor.Builder;
						}
						export class SelectionState extends java.lang.Object implements java.lang.annotation.Annotation {
							public static class: java.lang.Class<androidx.mediarouter.media.MediaRouteProvider.DynamicGroupRouteController.DynamicRouteDescriptor.SelectionState>;
							/**
							 * Constructs a new instance of the androidx.mediarouter.media.MediaRouteProvider() when extending the interface class.
							 */
							public constructor(implementation: {
								equals(object0: any): boolean;
								hashCode(): number;
								toString(): string;
								annotationType(): java.lang.Class<any>;
							});
							public constructor();
							public hashCode(): number;
							public annotationType(): java.lang.Class<any>;
							public equals(obj: any): boolean;
							public toString(): string;
						}
					}
					export class OnDynamicRoutesChangedListener extends java.lang.Object {
						public static class: java.lang.Class<androidx.mediarouter.media.MediaRouteProvider.DynamicGroupRouteController.OnDynamicRoutesChangedListener>;
						/**
						 * Constructs a new instance of the androidx.mediarouter.media.MediaRouteProvider() when extending the interface class.
						 */
						public constructor(implementation: {
							onRoutesChanged(dynamicGroupRouteController0: androidx.mediarouter.media.MediaRouteProvider.DynamicGroupRouteController, mediaRouteDescriptor1: androidx.mediarouter.media.MediaRouteDescriptor, collection2: java.util.Collection<androidx.mediarouter.media.MediaRouteProvider.DynamicGroupRouteController.DynamicRouteDescriptor>): void;
						});
						public constructor();
						public onRoutesChanged(dynamicGroupRouteController0: androidx.mediarouter.media.MediaRouteProvider.DynamicGroupRouteController, mediaRouteDescriptor1: androidx.mediarouter.media.MediaRouteDescriptor, collection2: java.util.Collection<androidx.mediarouter.media.MediaRouteProvider.DynamicGroupRouteController.DynamicRouteDescriptor>): void;
					}
				}
				export class ProviderHandler extends globalAndroid.os.Handler {
					public static class: java.lang.Class<androidx.mediarouter.media.MediaRouteProvider.ProviderHandler>;
					public handleMessage(msg: globalAndroid.os.Message): void;
				}
				export class ProviderMetadata extends java.lang.Object {
					public static class: java.lang.Class<androidx.mediarouter.media.MediaRouteProvider.ProviderMetadata>;
					public toString(): string;
					public getComponentName(): globalAndroid.content.ComponentName;
					public getPackageName(): string;
				}
				export abstract class RouteController extends java.lang.Object {
					public static class: java.lang.Class<androidx.mediarouter.media.MediaRouteProvider.RouteController>;
					public constructor();
					public onSelect(): void;
					public onControlRequest(intent: globalAndroid.content.Intent, callback: androidx.mediarouter.media.MediaRouter.ControlRequestCallback): boolean;
					/** @deprecated */
					public onUnselect(): void;
					public onRelease(): void;
					public onUnselect(reason: number): void;
					public onSetVolume(volume: number): void;
					public onUpdateVolume(delta: number): void;
				}
			}
		}
	}
}

declare module androidx {
	export module mediarouter {
		export module media {
			export class MediaRouteProviderDescriptor extends java.lang.Object {
				public static class: java.lang.Class<androidx.mediarouter.media.MediaRouteProviderDescriptor>;
				public supportsDynamicGroupRoute(): boolean;
				public getRoutes(): java.util.List<androidx.mediarouter.media.MediaRouteDescriptor>;
				public static fromBundle(bundle: globalAndroid.os.Bundle): androidx.mediarouter.media.MediaRouteProviderDescriptor;
				public isValid(): boolean;
				public toString(): string;
				public asBundle(): globalAndroid.os.Bundle;
			}
			export module MediaRouteProviderDescriptor {
				export class Builder extends java.lang.Object {
					public static class: java.lang.Class<androidx.mediarouter.media.MediaRouteProviderDescriptor.Builder>;
					public addRoute(route: androidx.mediarouter.media.MediaRouteDescriptor): androidx.mediarouter.media.MediaRouteProviderDescriptor.Builder;
					public constructor();
					public addRoutes(routes: java.util.Collection<androidx.mediarouter.media.MediaRouteDescriptor>): androidx.mediarouter.media.MediaRouteProviderDescriptor.Builder;
					public constructor(descriptor: androidx.mediarouter.media.MediaRouteProviderDescriptor);
					public setSupportsDynamicGroupRoute(value: boolean): androidx.mediarouter.media.MediaRouteProviderDescriptor.Builder;
					public build(): androidx.mediarouter.media.MediaRouteProviderDescriptor;
				}
			}
		}
	}
}

declare module androidx {
	export module mediarouter {
		export module media {
			export abstract class MediaRouteProviderProtocol extends java.lang.Object {
				public static class: java.lang.Class<androidx.mediarouter.media.MediaRouteProviderProtocol>;
				public static SERVICE_INTERFACE: string;
				public static CLIENT_MSG_REGISTER: number;
				public static CLIENT_MSG_UNREGISTER: number;
				public static CLIENT_MSG_CREATE_ROUTE_CONTROLLER: number;
				public static CLIENT_MSG_RELEASE_ROUTE_CONTROLLER: number;
				public static CLIENT_MSG_SELECT_ROUTE: number;
				public static CLIENT_MSG_UNSELECT_ROUTE: number;
				public static CLIENT_MSG_SET_ROUTE_VOLUME: number;
				public static CLIENT_MSG_UPDATE_ROUTE_VOLUME: number;
				public static CLIENT_MSG_ROUTE_CONTROL_REQUEST: number;
				public static CLIENT_MSG_SET_DISCOVERY_REQUEST: number;
				public static CLIENT_MSG_CREATE_DYNAMIC_GROUP_ROUTE_CONTROLLER: number;
				public static CLIENT_MSG_ADD_MEMBER_ROUTE: number;
				public static CLIENT_MSG_REMOVE_MEMBER_ROUTE: number;
				public static CLIENT_MSG_UPDATE_MEMBER_ROUTES: number;
				public static CLIENT_DATA_ROUTE_ID: string;
				public static CLIENT_DATA_ROUTE_LIBRARY_GROUP: string;
				public static CLIENT_DATA_VOLUME: string;
				public static CLIENT_DATA_UNSELECT_REASON: string;
				public static CLIENT_DATA_MEMBER_ROUTE_IDS: string;
				public static CLIENT_DATA_MEMBER_ROUTE_ID: string;
				public static DATA_KEY_GROUPABLE_SECION_TITLE: string;
				public static DATA_KEY_TRANSFERABLE_SECTION_TITLE: string;
				public static DATA_KEY_GROUP_ROUTE_DESCRIPTOR: string;
				public static DATA_KEY_DYNAMIC_ROUTE_DESCRIPTORS: string;
				public static SERVICE_MSG_GENERIC_FAILURE: number;
				public static SERVICE_MSG_GENERIC_SUCCESS: number;
				public static SERVICE_MSG_REGISTERED: number;
				public static SERVICE_MSG_CONTROL_REQUEST_SUCCEEDED: number;
				public static SERVICE_MSG_CONTROL_REQUEST_FAILED: number;
				public static SERVICE_MSG_DESCRIPTOR_CHANGED: number;
				public static SERVICE_MSG_DYNAMIC_ROUTE_CREATED: number;
				public static SERVICE_MSG_DYNAMIC_ROUTE_DESCRIPTORS_CHANGED: number;
				public static SERVICE_MSG_CONTROLLER_RELEASED: number;
				public static SERVICE_DATA_ERROR: string;
				public static CLIENT_VERSION_1: number;
				public static CLIENT_VERSION_2: number;
				public static CLIENT_VERSION_3: number;
				public static CLIENT_VERSION_4: number;
				public static CLIENT_VERSION_CURRENT: number;
				public static SERVICE_VERSION_1: number;
				public static SERVICE_VERSION_2: number;
				public static SERVICE_VERSION_3: number;
				public static SERVICE_VERSION_CURRENT: number;
				public static isValidRemoteMessenger(messenger: globalAndroid.os.Messenger): boolean;
			}
		}
	}
}

declare module androidx {
	export module mediarouter {
		export module media {
			export abstract class MediaRouteProviderService extends globalAndroid.app.Service {
				public static class: java.lang.Class<androidx.mediarouter.media.MediaRouteProviderService>;
				public static SERVICE_INTERFACE: string;
				public getMediaRouteProvider(): androidx.mediarouter.media.MediaRouteProvider;
				public onTrimMemory(level: number): void;
				public constructor(base: globalAndroid.content.Context);
				public attachBaseContext(base: globalAndroid.content.Context): void;
				public attachBaseContext(context: globalAndroid.content.Context): void;
				public onCreateMediaRouteProvider(): androidx.mediarouter.media.MediaRouteProvider;
				public onDestroy(): void;
				public constructor();
				public onBind(intent0: globalAndroid.content.Intent): globalAndroid.os.IBinder;
				public onBind(intent: globalAndroid.content.Intent): globalAndroid.os.IBinder;
			}
			export module MediaRouteProviderService {
				export class MediaRouteProviderServiceImpl extends java.lang.Object {
					public static class: java.lang.Class<androidx.mediarouter.media.MediaRouteProviderService.MediaRouteProviderServiceImpl>;
					/**
					 * Constructs a new instance of the androidx.mediarouter.media.MediaRouteProviderService() when extending the interface class.
					 */
					public constructor(implementation: {
						onBind(intent0: globalAndroid.content.Intent): globalAndroid.os.IBinder;
						attachBaseContext(context0: globalAndroid.content.Context): void;
						onBinderDied(messenger0: globalAndroid.os.Messenger): void;
						onRegisterClient(messenger0: globalAndroid.os.Messenger, int1: number, int2: number, string3: string): boolean;
						onUnregisterClient(messenger0: globalAndroid.os.Messenger, int1: number): boolean;
						onCreateRouteController(messenger0: globalAndroid.os.Messenger, int1: number, int2: number, string3: string, string4: string): boolean;
						onCreateDynamicGroupRouteController(messenger0: globalAndroid.os.Messenger, int1: number, int2: number, string3: string): boolean;
						onAddMemberRoute(messenger0: globalAndroid.os.Messenger, int1: number, int2: number, string3: string): boolean;
						onRemoveMemberRoute(messenger0: globalAndroid.os.Messenger, int1: number, int2: number, string3: string): boolean;
						onUpdateMemberRoutes(messenger0: globalAndroid.os.Messenger, int1: number, int2: number, list3: java.util.List<string>): boolean;
						onReleaseRouteController(messenger0: globalAndroid.os.Messenger, int1: number, int2: number): boolean;
						onSelectRoute(messenger0: globalAndroid.os.Messenger, int1: number, int2: number): boolean;
						onUnselectRoute(messenger0: globalAndroid.os.Messenger, int1: number, int2: number, int3: number): boolean;
						onSetRouteVolume(messenger0: globalAndroid.os.Messenger, int1: number, int2: number, int3: number): boolean;
						onUpdateRouteVolume(messenger0: globalAndroid.os.Messenger, int1: number, int2: number, int3: number): boolean;
						onRouteControlRequest(messenger0: globalAndroid.os.Messenger, int1: number, int2: number, intent3: globalAndroid.content.Intent): boolean;
						onSetDiscoveryRequest(messenger0: globalAndroid.os.Messenger, int1: number, mediaRouteDiscoveryRequest2: androidx.mediarouter.media.MediaRouteDiscoveryRequest): boolean;
						getProviderCallback(): androidx.mediarouter.media.MediaRouteProvider.Callback;
					});
					public constructor();
					public onRouteControlRequest(messenger0: globalAndroid.os.Messenger, int1: number, int2: number, intent3: globalAndroid.content.Intent): boolean;
					public onBind(intent0: globalAndroid.content.Intent): globalAndroid.os.IBinder;
					public onCreateRouteController(messenger0: globalAndroid.os.Messenger, int1: number, int2: number, string3: string, string4: string): boolean;
					public attachBaseContext(context0: globalAndroid.content.Context): void;
					public onRemoveMemberRoute(messenger0: globalAndroid.os.Messenger, int1: number, int2: number, string3: string): boolean;
					public getProviderCallback(): androidx.mediarouter.media.MediaRouteProvider.Callback;
					public onRegisterClient(messenger0: globalAndroid.os.Messenger, int1: number, int2: number, string3: string): boolean;
					public onUnregisterClient(messenger0: globalAndroid.os.Messenger, int1: number): boolean;
					public onSetRouteVolume(messenger0: globalAndroid.os.Messenger, int1: number, int2: number, int3: number): boolean;
					public onBinderDied(messenger0: globalAndroid.os.Messenger): void;
					public onCreateDynamicGroupRouteController(messenger0: globalAndroid.os.Messenger, int1: number, int2: number, string3: string): boolean;
					public onSelectRoute(messenger0: globalAndroid.os.Messenger, int1: number, int2: number): boolean;
					public onAddMemberRoute(messenger0: globalAndroid.os.Messenger, int1: number, int2: number, string3: string): boolean;
					public onUpdateMemberRoutes(messenger0: globalAndroid.os.Messenger, int1: number, int2: number, list3: java.util.List<string>): boolean;
					public onReleaseRouteController(messenger0: globalAndroid.os.Messenger, int1: number, int2: number): boolean;
					public onUnselectRoute(messenger0: globalAndroid.os.Messenger, int1: number, int2: number, int3: number): boolean;
					public onSetDiscoveryRequest(messenger0: globalAndroid.os.Messenger, int1: number, mediaRouteDiscoveryRequest2: androidx.mediarouter.media.MediaRouteDiscoveryRequest): boolean;
					public onUpdateRouteVolume(messenger0: globalAndroid.os.Messenger, int1: number, int2: number, int3: number): boolean;
				}
				export class MediaRouteProviderServiceImplApi30 extends androidx.mediarouter.media.MediaRouteProviderService.MediaRouteProviderServiceImplBase {
					public static class: java.lang.Class<androidx.mediarouter.media.MediaRouteProviderService.MediaRouteProviderServiceImplApi30>;
					public onReleaseRouteController(messenger: globalAndroid.os.Messenger, requestId: number, controllerId: number): boolean;
					public onSetRouteVolume(messenger: globalAndroid.os.Messenger, requestId: number, controllerId: number, volume: number): boolean;
					public onUnregisterClient(messenger: globalAndroid.os.Messenger, requestId: number): boolean;
					public onSelectRoute(messenger: globalAndroid.os.Messenger, requestId: number, controllerId: number): boolean;
					public onAddMemberRoute(messenger: globalAndroid.os.Messenger, requestId: number, controllerId: number, memberId: string): boolean;
					public onSetDiscoveryRequest(messenger: globalAndroid.os.Messenger, requestId: number, request: androidx.mediarouter.media.MediaRouteDiscoveryRequest): boolean;
					public getProviderCallback(): androidx.mediarouter.media.MediaRouteProvider.Callback;
					public onBind(intent: globalAndroid.content.Intent): globalAndroid.os.IBinder;
					public onRegisterClient(messenger: globalAndroid.os.Messenger, requestId: number, version: number, packageName: string): boolean;
					public onUpdateMemberRoutes(messenger: globalAndroid.os.Messenger, requestId: number, controllerId: number, memberIds: java.util.List<string>): boolean;
					public onBinderDied(messenger: globalAndroid.os.Messenger): void;
					public onCreateRouteController(messenger: globalAndroid.os.Messenger, requestId: number, controllerId: number, routeId: string, routeGroupId: string): boolean;
					public onUpdateRouteVolume(messenger: globalAndroid.os.Messenger, requestId: number, controllerId: number, delta: number): boolean;
					public attachBaseContext(context: globalAndroid.content.Context): void;
					public onUnselectRoute(messenger: globalAndroid.os.Messenger, requestId: number, controllerId: number, reason: number): boolean;
					public onRemoveMemberRoute(messenger: globalAndroid.os.Messenger, requestId: number, controllerId: number, memberId: string): boolean;
					public onRouteControlRequest(messenger: globalAndroid.os.Messenger, requestId: number, controllerId: number, intent: globalAndroid.content.Intent): boolean;
					public onCreateDynamicGroupRouteController(messenger: globalAndroid.os.Messenger, requestId: number, controllerId: number, initialMemberRouteId: string): boolean;
				}
				export module MediaRouteProviderServiceImplApi30 {
					export class ClientRecord extends androidx.mediarouter.media.MediaRouteProviderService.MediaRouteProviderServiceImplBase.ClientRecord {
						public static class: java.lang.Class<androidx.mediarouter.media.MediaRouteProviderService.MediaRouteProviderServiceImplApi30.ClientRecord>;
						public createRouteController(routeId: string, routeGroupId: string, controllerId: number): boolean;
						public findControllerByRouteId(routeId: string): androidx.mediarouter.media.MediaRouteProvider.RouteController;
						public createDescriptorBundle(descriptor: androidx.mediarouter.media.MediaRouteProviderDescriptor): globalAndroid.os.Bundle;
						public binderDied(): void;
						public releaseRouteController(controllerId: number): boolean;
						public createDynamicGroupRouteController(initialMemberRouteId: string, controllerId: number): globalAndroid.os.Bundle;
						public findControllerIdByController(controller: androidx.mediarouter.media.MediaRouteProvider.RouteController): number;
					}
				}
				export class MediaRouteProviderServiceImplBase extends java.lang.Object implements androidx.mediarouter.media.MediaRouteProviderService.MediaRouteProviderServiceImpl {
					public static class: java.lang.Class<androidx.mediarouter.media.MediaRouteProviderService.MediaRouteProviderServiceImplBase>;
					public onReleaseRouteController(messenger: globalAndroid.os.Messenger, requestId: number, controllerId: number): boolean;
					public onSetRouteVolume(messenger: globalAndroid.os.Messenger, requestId: number, controllerId: number, volume: number): boolean;
					public onUnregisterClient(messenger: globalAndroid.os.Messenger, requestId: number): boolean;
					public onSelectRoute(messenger: globalAndroid.os.Messenger, requestId: number, controllerId: number): boolean;
					public onAddMemberRoute(messenger: globalAndroid.os.Messenger, requestId: number, controllerId: number, memberId: string): boolean;
					public getProviderCallback(): androidx.mediarouter.media.MediaRouteProvider.Callback;
					public onSetDiscoveryRequest(messenger: globalAndroid.os.Messenger, requestId: number, request: androidx.mediarouter.media.MediaRouteDiscoveryRequest): boolean;
					public onBind(intent: globalAndroid.content.Intent): globalAndroid.os.IBinder;
					public getService(): androidx.mediarouter.media.MediaRouteProviderService;
					public onRegisterClient(messenger: globalAndroid.os.Messenger, requestId: number, version: number, packageName: string): boolean;
					public onUpdateMemberRoutes(messenger: globalAndroid.os.Messenger, requestId: number, controllerId: number, memberIds: java.util.List<string>): boolean;
					public onBinderDied(messenger: globalAndroid.os.Messenger): void;
					public onCreateRouteController(messenger: globalAndroid.os.Messenger, requestId: number, controllerId: number, routeId: string, routeGroupId: string): boolean;
					public onUpdateRouteVolume(messenger: globalAndroid.os.Messenger, requestId: number, controllerId: number, delta: number): boolean;
					public attachBaseContext(context: globalAndroid.content.Context): void;
					public onUnselectRoute(messenger: globalAndroid.os.Messenger, requestId: number, controllerId: number, reason: number): boolean;
					public onRemoveMemberRoute(messenger: globalAndroid.os.Messenger, requestId: number, controllerId: number, memberId: string): boolean;
					public onRouteControlRequest(messenger: globalAndroid.os.Messenger, requestId: number, controllerId: number, intent: globalAndroid.content.Intent): boolean;
					public onCreateDynamicGroupRouteController(messenger: globalAndroid.os.Messenger, requestId: number, controllerId: number, initialMemberRouteId: string): boolean;
				}
				export module MediaRouteProviderServiceImplBase {
					export class ClientRecord extends java.lang.Object implements globalAndroid.os.IBinder.DeathRecipient {
						public static class: java.lang.Class<androidx.mediarouter.media.MediaRouteProviderService.MediaRouteProviderServiceImplBase.ClientRecord>;
						public mMessenger: globalAndroid.os.Messenger;
						public mVersion: number;
						public mPackageName: string;
						public mDiscoveryRequest: androidx.mediarouter.media.MediaRouteDiscoveryRequest;
						public createRouteController(routeId: string, routeGroupId: string, controllerId: number): boolean;
						public getRouteController(controllerId: number): androidx.mediarouter.media.MediaRouteProvider.RouteController;
						public setDiscoveryRequest(request: androidx.mediarouter.media.MediaRouteDiscoveryRequest): boolean;
						public hasMessenger(other: globalAndroid.os.Messenger): boolean;
						public createDescriptorBundle(descriptor: androidx.mediarouter.media.MediaRouteProviderDescriptor): globalAndroid.os.Bundle;
						public binderDied(): void;
						public register(): boolean;
						public releaseRouteController(controllerId: number): boolean;
						public createDynamicGroupRouteController(initialMemberRouteId: string, controllerId: number): globalAndroid.os.Bundle;
						public toString(): string;
						public dispose(): void;
					}
					export class ProviderCallbackBase extends androidx.mediarouter.media.MediaRouteProvider.Callback {
						public static class: java.lang.Class<androidx.mediarouter.media.MediaRouteProviderService.MediaRouteProviderServiceImplBase.ProviderCallbackBase>;
						public onDescriptorChanged(provider: androidx.mediarouter.media.MediaRouteProvider, descriptor: androidx.mediarouter.media.MediaRouteProviderDescriptor): void;
					}
				}
				export class PrivateHandler extends globalAndroid.os.Handler {
					public static class: java.lang.Class<androidx.mediarouter.media.MediaRouteProviderService.PrivateHandler>;
					public handleMessage(msg: globalAndroid.os.Message): void;
				}
				export class ReceiveHandler extends globalAndroid.os.Handler {
					public static class: java.lang.Class<androidx.mediarouter.media.MediaRouteProviderService.ReceiveHandler>;
					public constructor(looper: globalAndroid.os.Looper);
					public constructor(service: androidx.mediarouter.media.MediaRouteProviderService);
					public constructor(callback: globalAndroid.os.Handler.Callback);
					public constructor();
					public constructor(looper: globalAndroid.os.Looper, callback: globalAndroid.os.Handler.Callback);
					public handleMessage(msg: globalAndroid.os.Message): void;
				}
			}
		}
	}
}

declare module androidx {
	export module mediarouter {
		export module media {
			export class MediaRouteSelector extends java.lang.Object {
				public static class: java.lang.Class<androidx.mediarouter.media.MediaRouteSelector>;
				public static EMPTY: androidx.mediarouter.media.MediaRouteSelector;
				public static fromBundle(bundle: globalAndroid.os.Bundle): androidx.mediarouter.media.MediaRouteSelector;
				public equals(obj: any): boolean;
				public hasControlCategory(category: string): boolean;
				public hashCode(): number;
				public matchesControlFilters(filters: java.util.List<globalAndroid.content.IntentFilter>): boolean;
				public equals(o: any): boolean;
				public isEmpty(): boolean;
				public isValid(): boolean;
				public toString(): string;
				public contains(selector: androidx.mediarouter.media.MediaRouteSelector): boolean;
				public getControlCategories(): java.util.List<string>;
				public asBundle(): globalAndroid.os.Bundle;
			}
			export module MediaRouteSelector {
				export class Builder extends java.lang.Object {
					public static class: java.lang.Class<androidx.mediarouter.media.MediaRouteSelector.Builder>;
					public constructor();
					public addControlCategory(category: string): androidx.mediarouter.media.MediaRouteSelector.Builder;
					public build(): androidx.mediarouter.media.MediaRouteSelector;
					public addSelector(selector: androidx.mediarouter.media.MediaRouteSelector): androidx.mediarouter.media.MediaRouteSelector.Builder;
					public constructor(selector: androidx.mediarouter.media.MediaRouteSelector);
					public addControlCategories(categories: java.util.Collection<string>): androidx.mediarouter.media.MediaRouteSelector.Builder;
				}
			}
		}
	}
}

declare module androidx {
	export module mediarouter {
		export module media {
			export class MediaRouter extends java.lang.Object {
				public static class: java.lang.Class<androidx.mediarouter.media.MediaRouter>;
				public static UNSELECT_REASON_UNKNOWN: number;
				public static UNSELECT_REASON_DISCONNECTED: number;
				public static UNSELECT_REASON_STOPPED: number;
				public static UNSELECT_REASON_ROUTE_CHANGED: number;
				public static CALLBACK_FLAG_PERFORM_ACTIVE_SCAN: number;
				public static CALLBACK_FLAG_UNFILTERED_EVENTS: number;
				public static CALLBACK_FLAG_REQUEST_DISCOVERY: number;
				public static CALLBACK_FLAG_FORCE_DISCOVERY: number;
				public static AVAILABILITY_FLAG_IGNORE_DEFAULT_ROUTE: number;
				public static AVAILABILITY_FLAG_REQUIRE_MATCH: number;
				public getDefaultRoute(): androidx.mediarouter.media.MediaRouter.RouteInfo;
				public removeRemoteControlClient(remoteControlClient: any): void;
				public setMediaSession(mediaSession: any): void;
				public setRouterParams(params: androidx.mediarouter.media.MediaRouterParams): void;
				public setMediaSessionCompat(mediaSession: globalAndroid.support.v4.media.session.MediaSessionCompat): void;
				public getRouterParams(): androidx.mediarouter.media.MediaRouterParams;
				public updateSelectedRoute(selector: androidx.mediarouter.media.MediaRouteSelector): androidx.mediarouter.media.MediaRouter.RouteInfo;
				public getProviders(): java.util.List<androidx.mediarouter.media.MediaRouter.ProviderInfo>;
				public removeProvider(providerInstance: androidx.mediarouter.media.MediaRouteProvider): void;
				public isRouteAvailable(selector: androidx.mediarouter.media.MediaRouteSelector, flags: number): boolean;
				public removeMemberFromDynamicGroup(route: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
				public removeCallback(callback: androidx.mediarouter.media.MediaRouter.Callback): void;
				public getBluetoothRoute(): androidx.mediarouter.media.MediaRouter.RouteInfo;
				public static getInstance(context: globalAndroid.content.Context): androidx.mediarouter.media.MediaRouter;
				public getMediaSessionToken(): globalAndroid.support.v4.media.session.MediaSessionCompat.Token;
				public transferToRoute(route: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
				public getRoutes(): java.util.List<androidx.mediarouter.media.MediaRouter.RouteInfo>;
				public getSelectedRoute(): androidx.mediarouter.media.MediaRouter.RouteInfo;
				public addMemberToDynamicGroup(route: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
				public static isMediaTransferEnabled(): boolean;
				public unselect(reason: number): void;
				public addCallback(selector: androidx.mediarouter.media.MediaRouteSelector, callback: androidx.mediarouter.media.MediaRouter.Callback): void;
				public addCallback(selector: androidx.mediarouter.media.MediaRouteSelector, callback: androidx.mediarouter.media.MediaRouter.Callback, flags: number): void;
				public setOnPrepareTransferListener(listener: androidx.mediarouter.media.MediaRouter.OnPrepareTransferListener): void;
				public addProvider(providerInstance: androidx.mediarouter.media.MediaRouteProvider): void;
				public selectRoute(route: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
				public addRemoteControlClient(remoteControlClient: any): void;
			}
			export module MediaRouter {
				export abstract class Callback extends java.lang.Object {
					public static class: java.lang.Class<androidx.mediarouter.media.MediaRouter.Callback>;
					public onRouteSelected(router: androidx.mediarouter.media.MediaRouter, route: androidx.mediarouter.media.MediaRouter.RouteInfo, reason: number): void;
					public onRouteVolumeChanged(router: androidx.mediarouter.media.MediaRouter, route: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
					public onProviderAdded(router: androidx.mediarouter.media.MediaRouter, provider: androidx.mediarouter.media.MediaRouter.ProviderInfo): void;
					public onRouteRemoved(router: androidx.mediarouter.media.MediaRouter, route: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
					public onProviderRemoved(router: androidx.mediarouter.media.MediaRouter, provider: androidx.mediarouter.media.MediaRouter.ProviderInfo): void;
					/** @deprecated */
					public onRouteSelected(router: androidx.mediarouter.media.MediaRouter, route: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
					public onRouteAdded(router: androidx.mediarouter.media.MediaRouter, route: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
					public onRoutePresentationDisplayChanged(router: androidx.mediarouter.media.MediaRouter, route: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
					public constructor();
					public onRouteUnselected(router: androidx.mediarouter.media.MediaRouter, route: androidx.mediarouter.media.MediaRouter.RouteInfo, reason: number): void;
					public onRouteSelected(router: androidx.mediarouter.media.MediaRouter, selectedRoute: androidx.mediarouter.media.MediaRouter.RouteInfo, reason: number, requestedRoute: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
					/** @deprecated */
					public onRouteUnselected(router: androidx.mediarouter.media.MediaRouter, route: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
					public onRouteChanged(router: androidx.mediarouter.media.MediaRouter, route: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
					public onProviderChanged(router: androidx.mediarouter.media.MediaRouter, provider: androidx.mediarouter.media.MediaRouter.ProviderInfo): void;
				}
				export class CallbackRecord extends java.lang.Object {
					public static class: java.lang.Class<androidx.mediarouter.media.MediaRouter.CallbackRecord>;
					public mRouter: androidx.mediarouter.media.MediaRouter;
					public mCallback: androidx.mediarouter.media.MediaRouter.Callback;
					public mSelector: androidx.mediarouter.media.MediaRouteSelector;
					public mFlags: number;
					public constructor(router: androidx.mediarouter.media.MediaRouter, callback: androidx.mediarouter.media.MediaRouter.Callback);
					public filterRouteEvent(route: androidx.mediarouter.media.MediaRouter.RouteInfo, what: number, optionalRoute: androidx.mediarouter.media.MediaRouter.RouteInfo, reason: number): boolean;
				}
				export abstract class ControlRequestCallback extends java.lang.Object {
					public static class: java.lang.Class<androidx.mediarouter.media.MediaRouter.ControlRequestCallback>;
					public onResult(data: globalAndroid.os.Bundle): void;
					public constructor();
					public onError(error: string, data: globalAndroid.os.Bundle): void;
				}
				export class GlobalMediaRouter extends java.lang.Object implements androidx.mediarouter.media.SystemMediaRouteProvider.SyncCallback, androidx.mediarouter.media.RegisteredMediaRouteProviderWatcher.Callback {
					public static class: java.lang.Class<androidx.mediarouter.media.MediaRouter.GlobalMediaRouter>;
					public removeProvider(providerInstance: androidx.mediarouter.media.MediaRouteProvider): void;
					public getMediaSessionToken(): globalAndroid.support.v4.media.session.MediaSessionCompat.Token;
					public requestSetVolume(route: androidx.mediarouter.media.MediaRouter.RouteInfo, volume: number): void;
					public getDisplay(displayId: number): globalAndroid.view.Display;
					public start(): void;
					public getProviderContext(packageName: string): globalAndroid.content.Context;
					public sendControlRequest(route: androidx.mediarouter.media.MediaRouter.RouteInfo, intent: globalAndroid.content.Intent, callback: androidx.mediarouter.media.MediaRouter.ControlRequestCallback): void;
					public isRouteAvailable(selector: androidx.mediarouter.media.MediaRouteSelector, flags: number): boolean;
					public removeRemoteControlClient(rcc: any): void;
					public getRouter(context: globalAndroid.content.Context): androidx.mediarouter.media.MediaRouter;
					public requestUpdateVolume(route: androidx.mediarouter.media.MediaRouter.RouteInfo, delta: number): void;
					public updateDiscoveryRequest(): void;
					public getContentResolver(): globalAndroid.content.ContentResolver;
					public onSystemRouteSelectedByDescriptorId(id: string): void;
					public addRemoteControlClient(rcc: any): void;
					public setMediaSessionCompat(session: globalAndroid.support.v4.media.session.MediaSessionCompat): void;
					public releaseProviderController(provider: androidx.mediarouter.media.RegisteredMediaRouteProvider, controller: androidx.mediarouter.media.MediaRouteProvider.RouteController): void;
					public addProvider(providerInstance: androidx.mediarouter.media.MediaRouteProvider): void;
					public getRoutes(): java.util.List<androidx.mediarouter.media.MediaRouter.RouteInfo>;
					public getRoute(uniqueId: string): androidx.mediarouter.media.MediaRouter.RouteInfo;
					public setMediaSession(session: any): void;
				}
				export module GlobalMediaRouter {
					export class CallbackHandler extends globalAndroid.os.Handler {
						public static class: java.lang.Class<androidx.mediarouter.media.MediaRouter.GlobalMediaRouter.CallbackHandler>;
						public static MSG_ROUTE_ADDED: number;
						public static MSG_ROUTE_REMOVED: number;
						public static MSG_ROUTE_CHANGED: number;
						public static MSG_ROUTE_VOLUME_CHANGED: number;
						public static MSG_ROUTE_PRESENTATION_DISPLAY_CHANGED: number;
						public static MSG_ROUTE_SELECTED: number;
						public static MSG_ROUTE_UNSELECTED: number;
						public static MSG_ROUTE_ANOTHER_SELECTED: number;
						public static MSG_PROVIDER_ADDED: number;
						public static MSG_PROVIDER_REMOVED: number;
						public static MSG_PROVIDER_CHANGED: number;
						public post(msg: number, obj: any): void;
						public post(msg: number, obj: any, int2: number): void;
						public post(r: java.lang.Runnable): boolean;
						public handleMessage(msg: globalAndroid.os.Message): void;
					}
					export class MediaSessionRecord extends java.lang.Object {
						public static class: java.lang.Class<androidx.mediarouter.media.MediaRouter.GlobalMediaRouter.MediaSessionRecord>;
						public configureVolume(controlType: number, max: number, current: number, volumeControlId: string): void;
						public getToken(): globalAndroid.support.v4.media.session.MediaSessionCompat.Token;
						public clearVolumeHandling(): void;
					}
					export class Mr2ProviderCallback extends androidx.mediarouter.media.MediaRoute2Provider.Callback {
						public static class: java.lang.Class<androidx.mediarouter.media.MediaRouter.GlobalMediaRouter.Mr2ProviderCallback>;
						public onSelectRoute(routeDescriptorId: string, reason: number): void;
						public onSelectRoute(string0: string, int1: number): void;
						public onReleaseController(routeController0: androidx.mediarouter.media.MediaRouteProvider.RouteController): void;
						public onSelectFallbackRoute(int0: number): void;
						public onSelectFallbackRoute(reason: number): void;
						public onReleaseController(controller: androidx.mediarouter.media.MediaRouteProvider.RouteController): void;
					}
					export class ProviderCallback extends androidx.mediarouter.media.MediaRouteProvider.Callback {
						public static class: java.lang.Class<androidx.mediarouter.media.MediaRouter.GlobalMediaRouter.ProviderCallback>;
						public onDescriptorChanged(provider: androidx.mediarouter.media.MediaRouteProvider, descriptor: androidx.mediarouter.media.MediaRouteProviderDescriptor): void;
					}
					export class RemoteControlClientRecord extends java.lang.Object implements androidx.mediarouter.media.RemoteControlClientCompat.VolumeCallback {
						public static class: java.lang.Class<androidx.mediarouter.media.MediaRouter.GlobalMediaRouter.RemoteControlClientRecord>;
						public disconnect(): void;
						public constructor(param0: androidx.mediarouter.media.MediaRouter.GlobalMediaRouter, rcc: any);
						public getRemoteControlClient(): any;
						public updatePlaybackInfo(): void;
						public onVolumeSetRequest(volume: number): void;
						public onVolumeUpdateRequest(direction: number): void;
					}
				}
				export class OnPrepareTransferListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.mediarouter.media.MediaRouter.OnPrepareTransferListener>;
					/**
					 * Constructs a new instance of the androidx.mediarouter.media.MediaRouter() when extending the interface class.
					 */
					public constructor(implementation: {
						onPrepareTransfer(routeInfo0: androidx.mediarouter.media.MediaRouter.RouteInfo, routeInfo1: androidx.mediarouter.media.MediaRouter.RouteInfo): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
					});
					public constructor();
					public onPrepareTransfer(routeInfo0: androidx.mediarouter.media.MediaRouter.RouteInfo, routeInfo1: androidx.mediarouter.media.MediaRouter.RouteInfo): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
				}
				export class PrepareTransferNotifier extends java.lang.Object {
					public static class: java.lang.Class<androidx.mediarouter.media.MediaRouter.PrepareTransferNotifier>;
				}
				export class ProviderInfo extends java.lang.Object {
					public static class: java.lang.Class<androidx.mediarouter.media.MediaRouter.ProviderInfo>;
					public toString(): string;
					public getComponentName(): globalAndroid.content.ComponentName;
					public getPackageName(): string;
					public getProviderInstance(): androidx.mediarouter.media.MediaRouteProvider;
					public getRoutes(): java.util.List<androidx.mediarouter.media.MediaRouter.RouteInfo>;
				}
				export class RouteInfo extends java.lang.Object {
					public static class: java.lang.Class<androidx.mediarouter.media.MediaRouter.RouteInfo>;
					public static CONNECTION_STATE_DISCONNECTED: number;
					public static CONNECTION_STATE_CONNECTING: number;
					public static CONNECTION_STATE_CONNECTED: number;
					public static PLAYBACK_TYPE_LOCAL: number;
					public static PLAYBACK_TYPE_REMOTE: number;
					public static DEVICE_TYPE_UNKNOWN: number;
					public static DEVICE_TYPE_TV: number;
					public static DEVICE_TYPE_SPEAKER: number;
					public static DEVICE_TYPE_BLUETOOTH: number;
					public static PLAYBACK_VOLUME_FIXED: number;
					public static PLAYBACK_VOLUME_VARIABLE: number;
					public static PRESENTATION_DISPLAY_ID_NONE: number;
					public isDeviceSpeaker(): boolean;
					public getId(): string;
					public getPresentationDisplay(): globalAndroid.view.Display;
					public matchesSelector(selector: androidx.mediarouter.media.MediaRouteSelector): boolean;
					public getVolumeHandling(): number;
					public isDefaultOrBluetooth(): boolean;
					public getVolume(): number;
					public isDefault(): boolean;
					public supportsControlRequest(intent: globalAndroid.content.Intent): boolean;
					public getDeviceType(): number;
					public getVolumeMax(): number;
					public getConnectionState(): number;
					public toString(): string;
					public getExtras(): globalAndroid.os.Bundle;
					public getProvider(): androidx.mediarouter.media.MediaRouter.ProviderInfo;
					public getMemberRoutes(): java.util.List<androidx.mediarouter.media.MediaRouter.RouteInfo>;
					public isEnabled(): boolean;
					/** @deprecated */
					public isConnecting(): boolean;
					public requestSetVolume(volume: number): void;
					public isGroup(): boolean;
					public supportsControlAction(category: string, action: string): boolean;
					public getDynamicGroupState(route: androidx.mediarouter.media.MediaRouter.RouteInfo): androidx.mediarouter.media.MediaRouter.RouteInfo.DynamicGroupState;
					public getSettingsIntent(): globalAndroid.content.IntentSender;
					public getProviderInstance(): androidx.mediarouter.media.MediaRouteProvider;
					public getIconUri(): globalAndroid.net.Uri;
					public getPlaybackStream(): number;
					public canDisconnect(): boolean;
					public select(): void;
					public getPlaybackType(): number;
					public getDynamicGroupController(): androidx.mediarouter.media.MediaRouteProvider.DynamicGroupRouteController;
					public sendControlRequest(intent: globalAndroid.content.Intent, callback: androidx.mediarouter.media.MediaRouter.ControlRequestCallback): void;
					public isBluetooth(): boolean;
					public getName(): string;
					public getPresentationDisplayId(): number;
					public getControlFilters(): java.util.List<globalAndroid.content.IntentFilter>;
					public supportsControlCategory(category: string): boolean;
					public getDescription(): string;
					public requestUpdateVolume(delta: number): void;
					public isSelected(): boolean;
				}
				export module RouteInfo {
					export class DynamicGroupState extends java.lang.Object {
						public static class: java.lang.Class<androidx.mediarouter.media.MediaRouter.RouteInfo.DynamicGroupState>;
						public getSelectionState(): number;
						public isTransferable(): boolean;
						public isGroupable(): boolean;
						public isUnselectable(): boolean;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module mediarouter {
		export module media {
			export class MediaRouter2Utils extends java.lang.Object {
				public static class: java.lang.Class<androidx.mediarouter.media.MediaRouter2Utils>;
				public static toMediaRouteDescriptor(fwkMediaRoute2Info: globalAndroid.media.MediaRoute2Info): androidx.mediarouter.media.MediaRouteDescriptor;
				public static toFwkMediaRoute2Info(descriptor: androidx.mediarouter.media.MediaRouteDescriptor): globalAndroid.media.MediaRoute2Info;
			}
		}
	}
}

declare module androidx {
	export module mediarouter {
		export module media {
			export class MediaRouterApi24 extends java.lang.Object {
				public static class: java.lang.Class<androidx.mediarouter.media.MediaRouterApi24>;
			}
			export module MediaRouterApi24 {
				export class RouteInfo extends java.lang.Object {
					public static class: java.lang.Class<androidx.mediarouter.media.MediaRouterApi24.RouteInfo>;
					public static getDeviceType(routeObj: any): number;
				}
			}
		}
	}
}

declare module androidx {
	export module mediarouter {
		export module media {
			export class MediaRouterJellybean extends java.lang.Object {
				public static class: java.lang.Class<androidx.mediarouter.media.MediaRouterJellybean>;
				public static DEVICE_OUT_BLUETOOTH: number;
				public static ROUTE_TYPE_LIVE_AUDIO: number;
				public static ROUTE_TYPE_LIVE_VIDEO: number;
				public static ROUTE_TYPE_USER: number;
				public static ALL_ROUTE_TYPES: number;
				public static addUserRoute(routerObj: any, routeObj: any): void;
				public static getCategories(routerObj: any): java.util.List<any>;
				public static addCallback(routerObj: any, types: number, callbackObj: any): void;
				public static createRouteCategory(routerObj: any, name: string, isGroupable: boolean): any;
				public static removeCallback(routerObj: any, callbackObj: any): void;
				public static createUserRoute(routerObj: any, categoryObj: any): any;
				public static selectRoute(routerObj: any, types: number, routeObj: any): void;
				public static createVolumeCallback(callback: androidx.mediarouter.media.MediaRouterJellybean.VolumeCallback): any;
				public static removeUserRoute(routerObj: any, routeObj: any): void;
				public static getRoutes(routerObj: any): java.util.List<any>;
				public static getSelectedRoute(routerObj: any, type: number): any;
				public static createCallback(callback: androidx.mediarouter.media.MediaRouterJellybean.Callback): any;
				public static getMediaRouter(context: globalAndroid.content.Context): any;
			}
			export module MediaRouterJellybean {
				export class Callback extends java.lang.Object {
					public static class: java.lang.Class<androidx.mediarouter.media.MediaRouterJellybean.Callback>;
					/**
					 * Constructs a new instance of the androidx.mediarouter.media.MediaRouterJellybean() when extending the interface class.
					 */
					public constructor(implementation: {
						onRouteSelected(int0: number, object1: any): void;
						onRouteUnselected(int0: number, object1: any): void;
						onRouteAdded(object0: any): void;
						onRouteRemoved(object0: any): void;
						onRouteChanged(object0: any): void;
						onRouteGrouped(object0: any, object1: any, int2: number): void;
						onRouteUngrouped(object0: any, object1: any): void;
						onRouteVolumeChanged(object0: any): void;
					});
					public constructor();
					public onRouteAdded(object0: any): void;
					public onRouteRemoved(object0: any): void;
					public onRouteUngrouped(object0: any, object1: any): void;
					public onRouteVolumeChanged(object0: any): void;
					public onRouteGrouped(object0: any, object1: any, int2: number): void;
					public onRouteChanged(object0: any): void;
					public onRouteSelected(int0: number, object1: any): void;
					public onRouteUnselected(int0: number, object1: any): void;
				}
				export class CallbackProxy<T>  extends globalAndroid.media.MediaRouter.Callback {
					public static class: java.lang.Class<androidx.mediarouter.media.MediaRouterJellybean.CallbackProxy<any>>;
					public mCallback: any;
					public onRouteGrouped(router: globalAndroid.media.MediaRouter, route: globalAndroid.media.MediaRouter.RouteInfo, group: globalAndroid.media.MediaRouter.RouteGroup, index: number): void;
					public onRouteUnselected(router: globalAndroid.media.MediaRouter, type: number, route: globalAndroid.media.MediaRouter.RouteInfo): void;
					public onRouteUngrouped(mediaRouter0: globalAndroid.media.MediaRouter, routeInfo1: globalAndroid.media.MediaRouter.RouteInfo, routeGroup2: globalAndroid.media.MediaRouter.RouteGroup): void;
					public onRouteSelected(mediaRouter0: globalAndroid.media.MediaRouter, int1: number, routeInfo2: globalAndroid.media.MediaRouter.RouteInfo): void;
					public onRouteAdded(mediaRouter0: globalAndroid.media.MediaRouter, routeInfo1: globalAndroid.media.MediaRouter.RouteInfo): void;
					public onRouteSelected(router: globalAndroid.media.MediaRouter, type: number, route: globalAndroid.media.MediaRouter.RouteInfo): void;
					public onRouteRemoved(mediaRouter0: globalAndroid.media.MediaRouter, routeInfo1: globalAndroid.media.MediaRouter.RouteInfo): void;
					public onRouteChanged(mediaRouter0: globalAndroid.media.MediaRouter, routeInfo1: globalAndroid.media.MediaRouter.RouteInfo): void;
					public onRouteAdded(router: globalAndroid.media.MediaRouter, route: globalAndroid.media.MediaRouter.RouteInfo): void;
					public onRouteChanged(router: globalAndroid.media.MediaRouter, route: globalAndroid.media.MediaRouter.RouteInfo): void;
					public onRouteVolumeChanged(mediaRouter0: globalAndroid.media.MediaRouter, routeInfo1: globalAndroid.media.MediaRouter.RouteInfo): void;
					public constructor(callback: any);
					public constructor();
					public onRouteVolumeChanged(router: globalAndroid.media.MediaRouter, route: globalAndroid.media.MediaRouter.RouteInfo): void;
					public onRouteUnselected(mediaRouter0: globalAndroid.media.MediaRouter, int1: number, routeInfo2: globalAndroid.media.MediaRouter.RouteInfo): void;
					public onRouteRemoved(router: globalAndroid.media.MediaRouter, route: globalAndroid.media.MediaRouter.RouteInfo): void;
					public onRouteGrouped(mediaRouter0: globalAndroid.media.MediaRouter, routeInfo1: globalAndroid.media.MediaRouter.RouteInfo, routeGroup2: globalAndroid.media.MediaRouter.RouteGroup, int3: number): void;
					public onRouteUngrouped(router: globalAndroid.media.MediaRouter, route: globalAndroid.media.MediaRouter.RouteInfo, group: globalAndroid.media.MediaRouter.RouteGroup): void;
				}
				export class GetDefaultRouteWorkaround extends java.lang.Object {
					public static class: java.lang.Class<androidx.mediarouter.media.MediaRouterJellybean.GetDefaultRouteWorkaround>;
					public getDefaultRoute(routerObj: any): any;
					public constructor();
				}
				export class RouteCategory extends java.lang.Object {
					public static class: java.lang.Class<androidx.mediarouter.media.MediaRouterJellybean.RouteCategory>;
					public static isGroupable(categoryObj: any): boolean;
					public static getRoutes(categoryObj: any): java.util.List<any>;
					public static getName(categoryObj: any, context: globalAndroid.content.Context): string;
					public static getSupportedTypes(categoryObj: any): number;
				}
				export class RouteGroup extends java.lang.Object {
					public static class: java.lang.Class<androidx.mediarouter.media.MediaRouterJellybean.RouteGroup>;
					public static getGroupedRoutes(groupObj: any): java.util.List<any>;
				}
				export class RouteInfo extends java.lang.Object {
					public static class: java.lang.Class<androidx.mediarouter.media.MediaRouterJellybean.RouteInfo>;
					public static getSupportedTypes(routeObj: any): number;
					public static getVolumeMax(routeObj: any): number;
					public static setTag(routeObj: any, tag: any): void;
					public static getStatus(routeObj: any): string;
					public static getCategory(routeObj: any): any;
					public static getTag(routeObj: any): any;
					public static requestSetVolume(routeObj: any, volume: number): void;
					public static requestUpdateVolume(routeObj: any, direction: number): void;
					public static getVolume(routeObj: any): number;
					public static getGroup(routeObj: any): any;
					public static getPlaybackType(routeObj: any): number;
					public static getPlaybackStream(routeObj: any): number;
					public static getName(routeObj: any, context: globalAndroid.content.Context): string;
					public static getVolumeHandling(routeObj: any): number;
					public static isGroup(routeObj: any): boolean;
					public static getIconDrawable(routeObj: any): globalAndroid.graphics.drawable.Drawable;
				}
				export class SelectRouteWorkaround extends java.lang.Object {
					public static class: java.lang.Class<androidx.mediarouter.media.MediaRouterJellybean.SelectRouteWorkaround>;
					public constructor();
					public selectRoute(routerObj: any, types: number, routeObj: any): void;
				}
				export class UserRouteInfo extends java.lang.Object {
					public static class: java.lang.Class<androidx.mediarouter.media.MediaRouterJellybean.UserRouteInfo>;
					public static setVolumeCallback(routeObj: any, volumeCallbackObj: any): void;
					public static setIconDrawable(routeObj: any, icon: globalAndroid.graphics.drawable.Drawable): void;
					public static setPlaybackType(routeObj: any, type: number): void;
					public static setVolumeHandling(routeObj: any, volumeHandling: number): void;
					public static setStatus(routeObj: any, status: string): void;
					public static setName(routeObj: any, name: string): void;
					public static setPlaybackStream(routeObj: any, stream: number): void;
					public static setVolumeMax(routeObj: any, volumeMax: number): void;
					public static setVolume(routeObj: any, volume: number): void;
					public static setRemoteControlClient(routeObj: any, rccObj: any): void;
				}
				export class VolumeCallback extends java.lang.Object {
					public static class: java.lang.Class<androidx.mediarouter.media.MediaRouterJellybean.VolumeCallback>;
					/**
					 * Constructs a new instance of the androidx.mediarouter.media.MediaRouterJellybean() when extending the interface class.
					 */
					public constructor(implementation: {
						onVolumeSetRequest(object0: any, int1: number): void;
						onVolumeUpdateRequest(object0: any, int1: number): void;
					});
					public constructor();
					public onVolumeUpdateRequest(object0: any, int1: number): void;
					public onVolumeSetRequest(object0: any, int1: number): void;
				}
				export class VolumeCallbackProxy<T>  extends globalAndroid.media.MediaRouter.VolumeCallback {
					public static class: java.lang.Class<androidx.mediarouter.media.MediaRouterJellybean.VolumeCallbackProxy<any>>;
					public mCallback: any;
					public onVolumeSetRequest(route: globalAndroid.media.MediaRouter.RouteInfo, volume: number): void;
					public constructor(callback: any);
					public constructor();
					public onVolumeUpdateRequest(routeInfo0: globalAndroid.media.MediaRouter.RouteInfo, int1: number): void;
					public onVolumeUpdateRequest(route: globalAndroid.media.MediaRouter.RouteInfo, direction: number): void;
					public onVolumeSetRequest(routeInfo0: globalAndroid.media.MediaRouter.RouteInfo, int1: number): void;
				}
			}
		}
	}
}

declare module androidx {
	export module mediarouter {
		export module media {
			export class MediaRouterJellybeanMr1 extends java.lang.Object {
				public static class: java.lang.Class<androidx.mediarouter.media.MediaRouterJellybeanMr1>;
				public static createCallback(callback: androidx.mediarouter.media.MediaRouterJellybeanMr1.Callback): any;
			}
			export module MediaRouterJellybeanMr1 {
				export class ActiveScanWorkaround extends java.lang.Object implements java.lang.Runnable {
					public static class: java.lang.Class<androidx.mediarouter.media.MediaRouterJellybeanMr1.ActiveScanWorkaround>;
					public setActiveScanRouteTypes(routeTypes: number): void;
					public constructor(context: globalAndroid.content.Context, handler: globalAndroid.os.Handler);
					public run(): void;
				}
				export class Callback extends java.lang.Object implements androidx.mediarouter.media.MediaRouterJellybean.Callback {
					public static class: java.lang.Class<androidx.mediarouter.media.MediaRouterJellybeanMr1.Callback>;
					/**
					 * Constructs a new instance of the androidx.mediarouter.media.MediaRouterJellybeanMr1() when extending the interface class.
					 */
					public constructor(implementation: {
						onRoutePresentationDisplayChanged(object0: any): void;
						onRouteSelected(int0: number, object1: any): void;
						onRouteUnselected(int0: number, object1: any): void;
						onRouteAdded(object0: any): void;
						onRouteRemoved(object0: any): void;
						onRouteChanged(object0: any): void;
						onRouteGrouped(object0: any, object1: any, int2: number): void;
						onRouteUngrouped(object0: any, object1: any): void;
						onRouteVolumeChanged(object0: any): void;
					});
					public constructor();
					public onRoutePresentationDisplayChanged(object0: any): void;
					public onRouteAdded(object0: any): void;
					public onRouteRemoved(object0: any): void;
					public onRouteUngrouped(object0: any, object1: any): void;
					public onRouteVolumeChanged(object0: any): void;
					public onRouteGrouped(object0: any, object1: any, int2: number): void;
					public onRouteChanged(object0: any): void;
					public onRouteSelected(int0: number, object1: any): void;
					public onRouteUnselected(int0: number, object1: any): void;
				}
				export class CallbackProxy<T>  extends androidx.mediarouter.media.MediaRouterJellybean.CallbackProxy<any> {
					public static class: java.lang.Class<androidx.mediarouter.media.MediaRouterJellybeanMr1.CallbackProxy<any>>;
					public constructor(callback: any);
					public constructor();
					public onRoutePresentationDisplayChanged(router: globalAndroid.media.MediaRouter, info: globalAndroid.media.MediaRouter.RouteInfo): void;
					public onRoutePresentationDisplayChanged(router: globalAndroid.media.MediaRouter, route: globalAndroid.media.MediaRouter.RouteInfo): void;
				}
				export class IsConnectingWorkaround extends java.lang.Object {
					public static class: java.lang.Class<androidx.mediarouter.media.MediaRouterJellybeanMr1.IsConnectingWorkaround>;
					public constructor();
					public isConnecting(routeObj: any): boolean;
				}
				export class RouteInfo extends java.lang.Object {
					public static class: java.lang.Class<androidx.mediarouter.media.MediaRouterJellybeanMr1.RouteInfo>;
					public static isEnabled(routeObj: any): boolean;
					public static getPresentationDisplay(routeObj: any): globalAndroid.view.Display;
				}
			}
		}
	}
}

declare module androidx {
	export module mediarouter {
		export module media {
			export class MediaRouterJellybeanMr2 extends java.lang.Object {
				public static class: java.lang.Class<androidx.mediarouter.media.MediaRouterJellybeanMr2>;
				public static addCallback(routerObj: any, types: number, callbackObj: any, flags: number): void;
				public static getDefaultRoute(routerObj: any): any;
			}
			export module MediaRouterJellybeanMr2 {
				export class RouteInfo extends java.lang.Object {
					public static class: java.lang.Class<androidx.mediarouter.media.MediaRouterJellybeanMr2.RouteInfo>;
					public static getDescription(routeObj: any): string;
					public static isConnecting(routeObj: any): boolean;
				}
				export class UserRouteInfo extends java.lang.Object {
					public static class: java.lang.Class<androidx.mediarouter.media.MediaRouterJellybeanMr2.UserRouteInfo>;
					public static setDescription(routeObj: any, description: string): void;
				}
			}
		}
	}
}

declare module androidx {
	export module mediarouter {
		export module media {
			export class MediaRouterParams extends java.lang.Object {
				public static class: java.lang.Class<androidx.mediarouter.media.MediaRouterParams>;
				public static DIALOG_TYPE_DEFAULT: number;
				public static DIALOG_TYPE_DYNAMIC_GROUP: number;
				public static EXTRAS_KEY_FIXED_CAST_ICON: string;
				public static EXTRAS_KEY_TEST_PRIVATE_UI: string;
				public getExtras(): globalAndroid.os.Bundle;
				public getDialogType(): number;
				public isOutputSwitcherEnabled(): boolean;
				public isTransferToLocalEnabled(): boolean;
			}
			export module MediaRouterParams {
				export class Builder extends java.lang.Object {
					public static class: java.lang.Class<androidx.mediarouter.media.MediaRouterParams.Builder>;
					public setOutputSwitcherEnabled(enabled: boolean): androidx.mediarouter.media.MediaRouterParams.Builder;
					public build(): androidx.mediarouter.media.MediaRouterParams;
					public constructor();
					public setDialogType(dialogType: number): androidx.mediarouter.media.MediaRouterParams.Builder;
					public setTransferToLocalEnabled(enabled: boolean): androidx.mediarouter.media.MediaRouterParams.Builder;
					public setExtras(extras: globalAndroid.os.Bundle): androidx.mediarouter.media.MediaRouterParams.Builder;
					public constructor(params: androidx.mediarouter.media.MediaRouterParams);
				}
				export class DialogType extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.mediarouter.media.MediaRouterParams.DialogType>;
					/**
					 * Constructs a new instance of the androidx.mediarouter.media.MediaRouterParams() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(object0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(obj: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module androidx {
	export module mediarouter {
		export module media {
			export class MediaSessionStatus extends java.lang.Object {
				public static class: java.lang.Class<androidx.mediarouter.media.MediaSessionStatus>;
				public static SESSION_STATE_ACTIVE: number;
				public static SESSION_STATE_ENDED: number;
				public static SESSION_STATE_INVALIDATED: number;
				public getSessionState(): number;
				public getExtras(): globalAndroid.os.Bundle;
				public toString(): string;
				public getTimestamp(): number;
				public asBundle(): globalAndroid.os.Bundle;
				public isQueuePaused(): boolean;
				public static fromBundle(bundle: globalAndroid.os.Bundle): androidx.mediarouter.media.MediaSessionStatus;
			}
			export module MediaSessionStatus {
				export class Builder extends java.lang.Object {
					public static class: java.lang.Class<androidx.mediarouter.media.MediaSessionStatus.Builder>;
					public setExtras(extras: globalAndroid.os.Bundle): androidx.mediarouter.media.MediaSessionStatus.Builder;
					public constructor(status: androidx.mediarouter.media.MediaSessionStatus);
					public build(): androidx.mediarouter.media.MediaSessionStatus;
					public setQueuePaused(queuePaused: boolean): androidx.mediarouter.media.MediaSessionStatus.Builder;
					public setSessionState(sessionState: number): androidx.mediarouter.media.MediaSessionStatus.Builder;
					public constructor(sessionState: number);
					public setTimestamp(elapsedRealtimeTimestamp: number): androidx.mediarouter.media.MediaSessionStatus.Builder;
				}
			}
		}
	}
}

declare module androidx {
	export module mediarouter {
		export module media {
			export class MediaTransferReceiver extends globalAndroid.content.BroadcastReceiver {
				public static class: java.lang.Class<androidx.mediarouter.media.MediaTransferReceiver>;
				public onReceive(context: globalAndroid.content.Context, intent: globalAndroid.content.Intent): void;
				public onReceive(context0: globalAndroid.content.Context, intent1: globalAndroid.content.Intent): void;
				public static isDeclared(applicationContext: globalAndroid.content.Context): boolean;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module mediarouter {
		export module media {
			export class RegisteredMediaRouteProvider extends androidx.mediarouter.media.MediaRouteProvider implements globalAndroid.content.ServiceConnection {
				public static class: java.lang.Class<androidx.mediarouter.media.RegisteredMediaRouteProvider>;
				public onServiceConnected(name: globalAndroid.content.ComponentName, service: globalAndroid.os.IBinder): void;
				public onServiceDisconnected(name: globalAndroid.content.ComponentName): void;
				public constructor(context: globalAndroid.content.Context, componentName: globalAndroid.content.ComponentName);
				public constructor(context: globalAndroid.content.Context);
				public toString(): string;
				public onCreateDynamicGroupRouteController(initialMemberRouteId: string): androidx.mediarouter.media.MediaRouteProvider.DynamicGroupRouteController;
				public setControllerCallback(controllerCallback: androidx.mediarouter.media.RegisteredMediaRouteProvider.ControllerCallback): void;
				public onNullBinding(name: globalAndroid.content.ComponentName): void;
				public rebindIfDisconnected(): void;
				public stop(): void;
				public onDiscoveryRequestChanged(request: androidx.mediarouter.media.MediaRouteDiscoveryRequest): void;
				public start(): void;
				public hasComponentName(packageName: string, className: string): boolean;
				public onBindingDied(name: globalAndroid.content.ComponentName): void;
				public onCreateRouteController(routeId: string): androidx.mediarouter.media.MediaRouteProvider.RouteController;
				public onCreateRouteController(routeId: string, routeGroupId: string): androidx.mediarouter.media.MediaRouteProvider.RouteController;
			}
			export module RegisteredMediaRouteProvider {
				export class Connection extends java.lang.Object implements globalAndroid.os.IBinder.DeathRecipient {
					public static class: java.lang.Class<androidx.mediarouter.media.RegisteredMediaRouteProvider.Connection>;
					public addMemberRoute(controllerId: number, memberRouteId: string): void;
					public updateVolume(controllerId: number, delta: number): void;
					public onDynamicGroupRouteControllerCreated(requestId: number, data: globalAndroid.os.Bundle): void;
					public setVolume(controllerId: number, volume: number): void;
					public onControlRequestSucceeded(requestId: number, data: globalAndroid.os.Bundle): boolean;
					public binderDied(): void;
					public constructor(param0: androidx.mediarouter.media.RegisteredMediaRouteProvider, serviceMessenger: globalAndroid.os.Messenger);
					public register(): boolean;
					public onRegistered(requestId: number, serviceVersion: number, descriptorBundle: globalAndroid.os.Bundle): boolean;
					public removeMemberRoute(controllerId: number, memberRouteId: string): void;
					public selectRoute(controllerId: number): void;
					public releaseRouteController(controllerId: number): void;
					public dispose(): void;
					public createRouteController(routeId: string, routeGroupId: string): number;
					public onDescriptorChanged(descriptorBundle: globalAndroid.os.Bundle): boolean;
					public createDynamicGroupRouteController(initialMemberRouteId: string, callback: androidx.mediarouter.media.MediaRouter.ControlRequestCallback): number;
					public onGenericFailure(requestId: number): boolean;
					public onGenericSuccess(requestId: number): boolean;
					public onControllerReleasedByProvider(controllerId: number): void;
					public updateMemberRoutes(controllerId: number, memberRouteIds: java.util.List<string>): void;
					public setDiscoveryRequest(request: androidx.mediarouter.media.MediaRouteDiscoveryRequest): void;
					public unselectRoute(controllerId: number, reason: number): void;
					public onDynamicRouteDescriptorsChanged(controllerId: number, descriptorsBundle: globalAndroid.os.Bundle): boolean;
					public onControlRequestFailed(requestId: number, error: string, data: globalAndroid.os.Bundle): boolean;
					public sendControlRequest(controllerId: number, intent: globalAndroid.content.Intent, callback: androidx.mediarouter.media.MediaRouter.ControlRequestCallback): boolean;
				}
				export class ControllerCallback extends java.lang.Object {
					public static class: java.lang.Class<androidx.mediarouter.media.RegisteredMediaRouteProvider.ControllerCallback>;
					/**
					 * Constructs a new instance of the androidx.mediarouter.media.RegisteredMediaRouteProvider() when extending the interface class.
					 */
					public constructor(implementation: {
						onControllerReleasedByProvider(routeController0: androidx.mediarouter.media.MediaRouteProvider.RouteController): void;
					});
					public constructor();
					public onControllerReleasedByProvider(routeController0: androidx.mediarouter.media.MediaRouteProvider.RouteController): void;
				}
				export class ControllerConnection extends java.lang.Object {
					public static class: java.lang.Class<androidx.mediarouter.media.RegisteredMediaRouteProvider.ControllerConnection>;
					/**
					 * Constructs a new instance of the androidx.mediarouter.media.RegisteredMediaRouteProvider() when extending the interface class.
					 */
					public constructor(implementation: {
						getControllerId(): number;
						attachConnection(connection0: androidx.mediarouter.media.RegisteredMediaRouteProvider.Connection): void;
						detachConnection(): void;
					});
					public constructor();
					public attachConnection(connection0: androidx.mediarouter.media.RegisteredMediaRouteProvider.Connection): void;
					public detachConnection(): void;
					public getControllerId(): number;
				}
				export class PrivateHandler extends globalAndroid.os.Handler {
					public static class: java.lang.Class<androidx.mediarouter.media.RegisteredMediaRouteProvider.PrivateHandler>;
				}
				export class ReceiveHandler extends globalAndroid.os.Handler {
					public static class: java.lang.Class<androidx.mediarouter.media.RegisteredMediaRouteProvider.ReceiveHandler>;
					public constructor(looper: globalAndroid.os.Looper);
					public constructor(callback: globalAndroid.os.Handler.Callback);
					public constructor();
					public constructor(connection: androidx.mediarouter.media.RegisteredMediaRouteProvider.Connection);
					public dispose(): void;
					public constructor(looper: globalAndroid.os.Looper, callback: globalAndroid.os.Handler.Callback);
					public handleMessage(msg: globalAndroid.os.Message): void;
				}
				export class RegisteredDynamicController extends androidx.mediarouter.media.MediaRouteProvider.DynamicGroupRouteController implements androidx.mediarouter.media.RegisteredMediaRouteProvider.ControllerConnection {
					public static class: java.lang.Class<androidx.mediarouter.media.RegisteredMediaRouteProvider.RegisteredDynamicController>;
					public onAddMemberRoute(string0: string): void;
					public onSelect(): void;
					public onRemoveMemberRoute(routeId: string): void;
					public detachConnection(): void;
					public onSetVolume(volume: number): void;
					public onUpdateVolume(delta: number): void;
					public getTransferableSectionTitle(): string;
					public attachConnection(connection: androidx.mediarouter.media.RegisteredMediaRouteProvider.Connection): void;
					public getGroupableSelectionTitle(): string;
					public onUnselect(): void;
					public onRemoveMemberRoute(string0: string): void;
					public onControlRequest(intent: globalAndroid.content.Intent, callback: androidx.mediarouter.media.MediaRouter.ControlRequestCallback): boolean;
					/** @deprecated */
					public onUnselect(): void;
					public onRelease(): void;
					public onUnselect(reason: number): void;
					public onUpdateMemberRoutes(routeIds: java.util.List<string>): void;
					public onAddMemberRoute(routeId: string): void;
					public onUpdateMemberRoutes(list0: java.util.List<string>): void;
					public getControllerId(): number;
				}
				export class RegisteredRouteController extends androidx.mediarouter.media.MediaRouteProvider.RouteController implements androidx.mediarouter.media.RegisteredMediaRouteProvider.ControllerConnection {
					public static class: java.lang.Class<androidx.mediarouter.media.RegisteredMediaRouteProvider.RegisteredRouteController>;
					public onUnselect(): void;
					public onSelect(): void;
					public onControlRequest(intent: globalAndroid.content.Intent, callback: androidx.mediarouter.media.MediaRouter.ControlRequestCallback): boolean;
					/** @deprecated */
					public onUnselect(): void;
					public onRelease(): void;
					public onUnselect(reason: number): void;
					public detachConnection(): void;
					public onSetVolume(volume: number): void;
					public onUpdateVolume(delta: number): void;
					public getControllerId(): number;
					public attachConnection(connection: androidx.mediarouter.media.RegisteredMediaRouteProvider.Connection): void;
				}
			}
		}
	}
}

declare module androidx {
	export module mediarouter {
		export module media {
			export class RegisteredMediaRouteProviderWatcher extends java.lang.Object {
				public static class: java.lang.Class<androidx.mediarouter.media.RegisteredMediaRouteProviderWatcher>;
				public stop(): void;
				public start(): void;
			}
			export module RegisteredMediaRouteProviderWatcher {
				export class Callback extends java.lang.Object {
					public static class: java.lang.Class<androidx.mediarouter.media.RegisteredMediaRouteProviderWatcher.Callback>;
					/**
					 * Constructs a new instance of the androidx.mediarouter.media.RegisteredMediaRouteProviderWatcher() when extending the interface class.
					 */
					public constructor(implementation: {
						addProvider(mediaRouteProvider0: androidx.mediarouter.media.MediaRouteProvider): void;
						removeProvider(mediaRouteProvider0: androidx.mediarouter.media.MediaRouteProvider): void;
						releaseProviderController(registeredMediaRouteProvider0: androidx.mediarouter.media.RegisteredMediaRouteProvider, routeController1: androidx.mediarouter.media.MediaRouteProvider.RouteController): void;
					});
					public constructor();
					public removeProvider(mediaRouteProvider0: androidx.mediarouter.media.MediaRouteProvider): void;
					public addProvider(mediaRouteProvider0: androidx.mediarouter.media.MediaRouteProvider): void;
					public releaseProviderController(registeredMediaRouteProvider0: androidx.mediarouter.media.RegisteredMediaRouteProvider, routeController1: androidx.mediarouter.media.MediaRouteProvider.RouteController): void;
				}
			}
		}
	}
}

declare module androidx {
	export module mediarouter {
		export module media {
			export abstract class RemoteControlClientCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.mediarouter.media.RemoteControlClientCompat>;
				public mContext: globalAndroid.content.Context;
				public mRcc: any;
				public mVolumeCallback: androidx.mediarouter.media.RemoteControlClientCompat.VolumeCallback;
				public getRemoteControlClient(): any;
				public setPlaybackInfo(info: androidx.mediarouter.media.RemoteControlClientCompat.PlaybackInfo): void;
				public static obtain(context: globalAndroid.content.Context, rcc: any): androidx.mediarouter.media.RemoteControlClientCompat;
				public setVolumeCallback(callback: androidx.mediarouter.media.RemoteControlClientCompat.VolumeCallback): void;
				public constructor(context: globalAndroid.content.Context, rcc: any);
			}
			export module RemoteControlClientCompat {
				export class JellybeanImpl extends androidx.mediarouter.media.RemoteControlClientCompat {
					public static class: java.lang.Class<androidx.mediarouter.media.RemoteControlClientCompat.JellybeanImpl>;
					public setPlaybackInfo(info: androidx.mediarouter.media.RemoteControlClientCompat.PlaybackInfo): void;
					public constructor(context: globalAndroid.content.Context, rcc: any);
				}
				export module JellybeanImpl {
					export class VolumeCallbackWrapper extends java.lang.Object implements androidx.mediarouter.media.MediaRouterJellybean.VolumeCallback {
						public static class: java.lang.Class<androidx.mediarouter.media.RemoteControlClientCompat.JellybeanImpl.VolumeCallbackWrapper>;
						public constructor(impl: androidx.mediarouter.media.RemoteControlClientCompat.JellybeanImpl);
						public onVolumeSetRequest(routeObj: any, volume: number): void;
						public onVolumeUpdateRequest(routeObj: any, direction: number): void;
					}
				}
				export class LegacyImpl extends androidx.mediarouter.media.RemoteControlClientCompat {
					public static class: java.lang.Class<androidx.mediarouter.media.RemoteControlClientCompat.LegacyImpl>;
					public constructor(context: globalAndroid.content.Context, rcc: any);
				}
				export class PlaybackInfo extends java.lang.Object {
					public static class: java.lang.Class<androidx.mediarouter.media.RemoteControlClientCompat.PlaybackInfo>;
					public volume: number;
					public volumeMax: number;
					public volumeHandling: number;
					public playbackStream: number;
					public playbackType: number;
					public volumeControlId: string;
					public constructor();
				}
				export class VolumeCallback extends java.lang.Object {
					public static class: java.lang.Class<androidx.mediarouter.media.RemoteControlClientCompat.VolumeCallback>;
					/**
					 * Constructs a new instance of the androidx.mediarouter.media.RemoteControlClientCompat() when extending the interface class.
					 */
					public constructor(implementation: {
						onVolumeUpdateRequest(int0: number): void;
						onVolumeSetRequest(int0: number): void;
					});
					public constructor();
					public onVolumeSetRequest(int0: number): void;
					public onVolumeUpdateRequest(int0: number): void;
				}
			}
		}
	}
}

declare module androidx {
	export module mediarouter {
		export module media {
			export class RemotePlaybackClient extends java.lang.Object {
				public static class: java.lang.Class<androidx.mediarouter.media.RemotePlaybackClient>;
				public resume(extras: globalAndroid.os.Bundle, callback: androidx.mediarouter.media.RemotePlaybackClient.SessionActionCallback): void;
				public stop(extras: globalAndroid.os.Bundle, callback: androidx.mediarouter.media.RemotePlaybackClient.SessionActionCallback): void;
				public release(): void;
				public setSessionId(sessionId: string): void;
				public sendMessage(message: globalAndroid.os.Bundle, callback: androidx.mediarouter.media.RemotePlaybackClient.SessionActionCallback): void;
				public remove(itemId: string, extras: globalAndroid.os.Bundle, callback: androidx.mediarouter.media.RemotePlaybackClient.ItemActionCallback): void;
				public isRemotePlaybackSupported(): boolean;
				public setOnMessageReceivedListener(listener: androidx.mediarouter.media.RemotePlaybackClient.OnMessageReceivedListener): void;
				public play(contentUri: globalAndroid.net.Uri, mimeType: string, metadata: globalAndroid.os.Bundle, positionMillis: number, extras: globalAndroid.os.Bundle, callback: androidx.mediarouter.media.RemotePlaybackClient.ItemActionCallback): void;
				public setStatusCallback(callback: androidx.mediarouter.media.RemotePlaybackClient.StatusCallback): void;
				public isQueuingSupported(): boolean;
				public pause(extras: globalAndroid.os.Bundle, callback: androidx.mediarouter.media.RemotePlaybackClient.SessionActionCallback): void;
				public getSessionStatus(extras: globalAndroid.os.Bundle, callback: androidx.mediarouter.media.RemotePlaybackClient.SessionActionCallback): void;
				public enqueue(contentUri: globalAndroid.net.Uri, mimeType: string, metadata: globalAndroid.os.Bundle, positionMillis: number, extras: globalAndroid.os.Bundle, callback: androidx.mediarouter.media.RemotePlaybackClient.ItemActionCallback): void;
				public seek(itemId: string, positionMillis: number, extras: globalAndroid.os.Bundle, callback: androidx.mediarouter.media.RemotePlaybackClient.ItemActionCallback): void;
				public getStatus(itemId: string, extras: globalAndroid.os.Bundle, callback: androidx.mediarouter.media.RemotePlaybackClient.ItemActionCallback): void;
				public startSession(extras: globalAndroid.os.Bundle, callback: androidx.mediarouter.media.RemotePlaybackClient.SessionActionCallback): void;
				public isSessionManagementSupported(): boolean;
				public endSession(extras: globalAndroid.os.Bundle, callback: androidx.mediarouter.media.RemotePlaybackClient.SessionActionCallback): void;
				public isMessagingSupported(): boolean;
				public hasSession(): boolean;
				public constructor(context: globalAndroid.content.Context, route: androidx.mediarouter.media.MediaRouter.RouteInfo);
				public getSessionId(): string;
			}
			export module RemotePlaybackClient {
				export abstract class ActionCallback extends java.lang.Object {
					public static class: java.lang.Class<androidx.mediarouter.media.RemotePlaybackClient.ActionCallback>;
					public constructor();
					public onError(error: string, code: number, data: globalAndroid.os.Bundle): void;
				}
				export class ActionReceiver extends globalAndroid.content.BroadcastReceiver {
					public static class: java.lang.Class<androidx.mediarouter.media.RemotePlaybackClient.ActionReceiver>;
					public static ACTION_ITEM_STATUS_CHANGED: string;
					public static ACTION_SESSION_STATUS_CHANGED: string;
					public static ACTION_MESSAGE_RECEIVED: string;
					public onReceive(context: globalAndroid.content.Context, intent: globalAndroid.content.Intent): void;
					public onReceive(context0: globalAndroid.content.Context, intent1: globalAndroid.content.Intent): void;
				}
				export abstract class ItemActionCallback extends androidx.mediarouter.media.RemotePlaybackClient.ActionCallback {
					public static class: java.lang.Class<androidx.mediarouter.media.RemotePlaybackClient.ItemActionCallback>;
					public constructor();
					public onResult(data: globalAndroid.os.Bundle, sessionId: string, sessionStatus: androidx.mediarouter.media.MediaSessionStatus, itemId: string, itemStatus: androidx.mediarouter.media.MediaItemStatus): void;
				}
				export class OnMessageReceivedListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.mediarouter.media.RemotePlaybackClient.OnMessageReceivedListener>;
					/**
					 * Constructs a new instance of the androidx.mediarouter.media.RemotePlaybackClient() when extending the interface class.
					 */
					public constructor(implementation: {
						onMessageReceived(string0: string, bundle1: globalAndroid.os.Bundle): void;
					});
					public constructor();
					public onMessageReceived(string0: string, bundle1: globalAndroid.os.Bundle): void;
				}
				export abstract class SessionActionCallback extends androidx.mediarouter.media.RemotePlaybackClient.ActionCallback {
					public static class: java.lang.Class<androidx.mediarouter.media.RemotePlaybackClient.SessionActionCallback>;
					public constructor();
					public onResult(data: globalAndroid.os.Bundle, sessionId: string, sessionStatus: androidx.mediarouter.media.MediaSessionStatus): void;
				}
				export abstract class StatusCallback extends java.lang.Object {
					public static class: java.lang.Class<androidx.mediarouter.media.RemotePlaybackClient.StatusCallback>;
					public constructor();
					public onItemStatusChanged(data: globalAndroid.os.Bundle, sessionId: string, sessionStatus: androidx.mediarouter.media.MediaSessionStatus, itemId: string, itemStatus: androidx.mediarouter.media.MediaItemStatus): void;
					public onSessionStatusChanged(data: globalAndroid.os.Bundle, sessionId: string, sessionStatus: androidx.mediarouter.media.MediaSessionStatus): void;
					public onSessionChanged(sessionId: string): void;
				}
			}
		}
	}
}

declare module androidx {
	export module mediarouter {
		export module media {
			export abstract class SystemMediaRouteProvider extends androidx.mediarouter.media.MediaRouteProvider {
				public static class: java.lang.Class<androidx.mediarouter.media.SystemMediaRouteProvider>;
				public static PACKAGE_NAME: string;
				public static DEFAULT_ROUTE_ID: string;
				public onSyncRouteSelected(route: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
				public onSyncRouteAdded(route: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
				public onSyncRouteChanged(route: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
				public constructor(context: globalAndroid.content.Context);
				public static obtain(context: globalAndroid.content.Context, syncCallback: androidx.mediarouter.media.SystemMediaRouteProvider.SyncCallback): androidx.mediarouter.media.SystemMediaRouteProvider;
				public onSyncRouteRemoved(route: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
				public getDefaultRoute(): any;
				public getSystemRoute(route: androidx.mediarouter.media.MediaRouter.RouteInfo): any;
			}
			export module SystemMediaRouteProvider {
				export class Api24Impl extends androidx.mediarouter.media.SystemMediaRouteProvider.JellybeanMr2Impl {
					public static class: java.lang.Class<androidx.mediarouter.media.SystemMediaRouteProvider.Api24Impl>;
					public onRouteUnselected(type: number, routeObj: any): void;
					public onBuildSystemRouteDescriptor(record: androidx.mediarouter.media.SystemMediaRouteProvider.JellybeanImpl.SystemRouteRecord, builder: androidx.mediarouter.media.MediaRouteDescriptor.Builder): void;
					public onRouteAdded(routeObj: any): void;
					public constructor(context: globalAndroid.content.Context, syncCallback: androidx.mediarouter.media.SystemMediaRouteProvider.SyncCallback);
					public onVolumeUpdateRequest(routeObj: any, direction: number): void;
					public onRouteGrouped(routeObj: any, groupObj: any, index: number): void;
					public onRouteSelected(type: number, routeObj: any): void;
					public constructor(context: globalAndroid.content.Context);
					public onVolumeSetRequest(routeObj: any, volume: number): void;
					public onRouteVolumeChanged(routeObj: any): void;
					public onRouteUngrouped(routeObj: any, groupObj: any): void;
					public onRoutePresentationDisplayChanged(routeObj: any): void;
					public onRouteChanged(routeObj: any): void;
					public onRouteRemoved(routeObj: any): void;
				}
				export class JellybeanImpl extends androidx.mediarouter.media.SystemMediaRouteProvider implements androidx.mediarouter.media.MediaRouterJellybean.Callback, androidx.mediarouter.media.MediaRouterJellybean.VolumeCallback {
					public static class: java.lang.Class<androidx.mediarouter.media.SystemMediaRouteProvider.JellybeanImpl>;
					public mRouterObj: any;
					public mCallbackObj: any;
					public mVolumeCallbackObj: any;
					public mUserRouteCategoryObj: any;
					public mRouteTypes: number;
					public mActiveScan: boolean;
					public mCallbackRegistered: boolean;
					public mSystemRouteRecords: java.util.ArrayList<androidx.mediarouter.media.SystemMediaRouteProvider.JellybeanImpl.SystemRouteRecord>;
					public mUserRouteRecords: java.util.ArrayList<androidx.mediarouter.media.SystemMediaRouteProvider.JellybeanImpl.UserRouteRecord>;
					public findUserRouteRecord(route: androidx.mediarouter.media.MediaRouter.RouteInfo): number;
					public getSystemRoute(route: androidx.mediarouter.media.MediaRouter.RouteInfo): any;
					public onRouteUnselected(type: number, routeObj: any): void;
					public onSyncRouteAdded(route: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
					public onSyncRouteChanged(route: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
					public getRouteName(routeObj: any): string;
					public constructor(context: globalAndroid.content.Context, syncCallback: androidx.mediarouter.media.SystemMediaRouteProvider.SyncCallback);
					public onSyncRouteSelected(route: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
					public getUserRouteRecord(routeObj: any): androidx.mediarouter.media.SystemMediaRouteProvider.JellybeanImpl.UserRouteRecord;
					public createCallbackObj(): any;
					public publishRoutes(): void;
					public onSyncRouteRemoved(route: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
					public onVolumeSetRequest(routeObj: any, volume: number): void;
					public onCreateRouteController(routeId: string): androidx.mediarouter.media.MediaRouteProvider.RouteController;
					public onRouteRemoved(routeObj: any): void;
					public updateUserRouteProperties(record: androidx.mediarouter.media.SystemMediaRouteProvider.JellybeanImpl.UserRouteRecord): void;
					public updateSystemRouteDescriptor(record: androidx.mediarouter.media.SystemMediaRouteProvider.JellybeanImpl.SystemRouteRecord): void;
					public onDiscoveryRequestChanged(request: androidx.mediarouter.media.MediaRouteDiscoveryRequest): void;
					public findSystemRouteRecordByDescriptorId(id: string): number;
					public onBuildSystemRouteDescriptor(record: androidx.mediarouter.media.SystemMediaRouteProvider.JellybeanImpl.SystemRouteRecord, builder: androidx.mediarouter.media.MediaRouteDescriptor.Builder): void;
					public onRouteAdded(routeObj: any): void;
					public updateCallback(): void;
					public findSystemRouteRecord(routeObj: any): number;
					public onRouteGrouped(routeObj: any, groupObj: any, index: number): void;
					public onVolumeUpdateRequest(routeObj: any, direction: number): void;
					public onRouteSelected(type: number, routeObj: any): void;
					public getDefaultRoute(): any;
					public onCreateRouteController(routeId: string, routeGroupId: string): androidx.mediarouter.media.MediaRouteProvider.RouteController;
					public selectRoute(routeObj: any): void;
					public constructor(context: globalAndroid.content.Context);
					public onRouteVolumeChanged(routeObj: any): void;
					public onRouteUngrouped(routeObj: any, groupObj: any): void;
					public onRouteChanged(routeObj: any): void;
					public createVolumeCallbackObj(): any;
				}
				export module JellybeanImpl {
					export class SystemRouteController extends androidx.mediarouter.media.MediaRouteProvider.RouteController {
						public static class: java.lang.Class<androidx.mediarouter.media.SystemMediaRouteProvider.JellybeanImpl.SystemRouteController>;
						public constructor(routeObj: any);
						public constructor();
						public onUpdateVolume(delta: number): void;
						public onSetVolume(volume: number): void;
					}
					export class SystemRouteRecord extends java.lang.Object {
						public static class: java.lang.Class<androidx.mediarouter.media.SystemMediaRouteProvider.JellybeanImpl.SystemRouteRecord>;
						public mRouteObj: any;
						public mRouteDescriptorId: string;
						public mRouteDescriptor: androidx.mediarouter.media.MediaRouteDescriptor;
						public constructor(routeObj: any, id: string);
					}
					export class UserRouteRecord extends java.lang.Object {
						public static class: java.lang.Class<androidx.mediarouter.media.SystemMediaRouteProvider.JellybeanImpl.UserRouteRecord>;
						public mRoute: androidx.mediarouter.media.MediaRouter.RouteInfo;
						public mRouteObj: any;
						public constructor(route: androidx.mediarouter.media.MediaRouter.RouteInfo, routeObj: any);
					}
				}
				export class JellybeanMr1Impl extends androidx.mediarouter.media.SystemMediaRouteProvider.JellybeanImpl implements androidx.mediarouter.media.MediaRouterJellybeanMr1.Callback {
					public static class: java.lang.Class<androidx.mediarouter.media.SystemMediaRouteProvider.JellybeanMr1Impl>;
					public onRouteUnselected(type: number, routeObj: any): void;
					public onBuildSystemRouteDescriptor(record: androidx.mediarouter.media.SystemMediaRouteProvider.JellybeanImpl.SystemRouteRecord, builder: androidx.mediarouter.media.MediaRouteDescriptor.Builder): void;
					public updateCallback(): void;
					public onRouteAdded(routeObj: any): void;
					public constructor(context: globalAndroid.content.Context, syncCallback: androidx.mediarouter.media.SystemMediaRouteProvider.SyncCallback);
					public onRouteGrouped(routeObj: any, groupObj: any, index: number): void;
					public onVolumeUpdateRequest(routeObj: any, direction: number): void;
					public onRouteSelected(type: number, routeObj: any): void;
					public createCallbackObj(): any;
					public constructor(context: globalAndroid.content.Context);
					public onVolumeSetRequest(routeObj: any, volume: number): void;
					public onRouteVolumeChanged(routeObj: any): void;
					public isConnecting(record: androidx.mediarouter.media.SystemMediaRouteProvider.JellybeanImpl.SystemRouteRecord): boolean;
					public onRouteUngrouped(routeObj: any, groupObj: any): void;
					public onRoutePresentationDisplayChanged(routeObj: any): void;
					public onRouteChanged(routeObj: any): void;
					public onRouteRemoved(routeObj: any): void;
				}
				export class JellybeanMr2Impl extends androidx.mediarouter.media.SystemMediaRouteProvider.JellybeanMr1Impl {
					public static class: java.lang.Class<androidx.mediarouter.media.SystemMediaRouteProvider.JellybeanMr2Impl>;
					public onRouteUnselected(type: number, routeObj: any): void;
					public onBuildSystemRouteDescriptor(record: androidx.mediarouter.media.SystemMediaRouteProvider.JellybeanImpl.SystemRouteRecord, builder: androidx.mediarouter.media.MediaRouteDescriptor.Builder): void;
					public updateCallback(): void;
					public onRouteAdded(routeObj: any): void;
					public constructor(context: globalAndroid.content.Context, syncCallback: androidx.mediarouter.media.SystemMediaRouteProvider.SyncCallback);
					public onVolumeUpdateRequest(routeObj: any, direction: number): void;
					public onRouteGrouped(routeObj: any, groupObj: any, index: number): void;
					public getDefaultRoute(): any;
					public onRouteSelected(type: number, routeObj: any): void;
					public selectRoute(routeObj: any): void;
					public constructor(context: globalAndroid.content.Context);
					public onVolumeSetRequest(routeObj: any, volume: number): void;
					public onRouteVolumeChanged(routeObj: any): void;
					public isConnecting(record: androidx.mediarouter.media.SystemMediaRouteProvider.JellybeanImpl.SystemRouteRecord): boolean;
					public onRouteUngrouped(routeObj: any, groupObj: any): void;
					public onRoutePresentationDisplayChanged(routeObj: any): void;
					public onRouteChanged(routeObj: any): void;
					public updateUserRouteProperties(record: androidx.mediarouter.media.SystemMediaRouteProvider.JellybeanImpl.UserRouteRecord): void;
					public onRouteRemoved(routeObj: any): void;
				}
				export class LegacyImpl extends androidx.mediarouter.media.SystemMediaRouteProvider {
					public static class: java.lang.Class<androidx.mediarouter.media.SystemMediaRouteProvider.LegacyImpl>;
					public onCreateRouteController(routeId: string, routeGroupId: string): androidx.mediarouter.media.MediaRouteProvider.RouteController;
					public constructor(context: globalAndroid.content.Context);
					public onCreateRouteController(routeId: string): androidx.mediarouter.media.MediaRouteProvider.RouteController;
				}
				export module LegacyImpl {
					export class DefaultRouteController extends androidx.mediarouter.media.MediaRouteProvider.RouteController {
						public static class: java.lang.Class<androidx.mediarouter.media.SystemMediaRouteProvider.LegacyImpl.DefaultRouteController>;
						public onUpdateVolume(delta: number): void;
						public onSetVolume(volume: number): void;
					}
					export class VolumeChangeReceiver extends globalAndroid.content.BroadcastReceiver {
						public static class: java.lang.Class<androidx.mediarouter.media.SystemMediaRouteProvider.LegacyImpl.VolumeChangeReceiver>;
						public static VOLUME_CHANGED_ACTION: string;
						public static EXTRA_VOLUME_STREAM_TYPE: string;
						public static EXTRA_VOLUME_STREAM_VALUE: string;
						public onReceive(context: globalAndroid.content.Context, intent: globalAndroid.content.Intent): void;
						public onReceive(context0: globalAndroid.content.Context, intent1: globalAndroid.content.Intent): void;
					}
				}
				export class SyncCallback extends java.lang.Object {
					public static class: java.lang.Class<androidx.mediarouter.media.SystemMediaRouteProvider.SyncCallback>;
					/**
					 * Constructs a new instance of the androidx.mediarouter.media.SystemMediaRouteProvider() when extending the interface class.
					 */
					public constructor(implementation: {
						onSystemRouteSelectedByDescriptorId(string0: string): void;
					});
					public constructor();
					public onSystemRouteSelectedByDescriptorId(string0: string): void;
				}
			}
		}
	}
}

//Generics information:
//androidx.mediarouter.media.MediaRouterJellybean.CallbackProxy:1
//androidx.mediarouter.media.MediaRouterJellybean.VolumeCallbackProxy:1
//androidx.mediarouter.media.MediaRouterJellybeanMr1.CallbackProxy:1

