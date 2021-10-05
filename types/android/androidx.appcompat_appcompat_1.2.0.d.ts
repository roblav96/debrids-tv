declare module androidx {
	export module appcompat {
		export module app {
			export abstract class ActionBar extends java.lang.Object {
				public static class: java.lang.Class<androidx.appcompat.app.ActionBar>;
				public static NAVIGATION_MODE_STANDARD: number;
				public static NAVIGATION_MODE_LIST: number;
				public static NAVIGATION_MODE_TABS: number;
				public static DISPLAY_USE_LOGO: number;
				public static DISPLAY_SHOW_HOME: number;
				public static DISPLAY_HOME_AS_UP: number;
				public static DISPLAY_SHOW_TITLE: number;
				public static DISPLAY_SHOW_CUSTOM: number;
				/** @deprecated */
				public selectTab(tab0: androidx.appcompat.app.ActionBar.Tab): void;
				public setTitle(charSequence0: string): void;
				public getHeight(): number;
				/** @deprecated */
				public getTabAt(int0: number): androidx.appcompat.app.ActionBar.Tab;
				/** @deprecated */
				public addTab(tab0: androidx.appcompat.app.ActionBar.Tab, boolean1: boolean): void;
				public constructor();
				public show(): void;
				public setHomeButtonEnabled(enabled: boolean): void;
				public setLogo(int0: number): void;
				/** @deprecated */
				public setListNavigationCallbacks(spinnerAdapter0: globalAndroid.widget.SpinnerAdapter, onNavigationListener1: androidx.appcompat.app.ActionBar.OnNavigationListener): void;
				/** @deprecated */
				public addTab(tab0: androidx.appcompat.app.ActionBar.Tab, int1: number): void;
				/** @deprecated */
				public getNavigationItemCount(): number;
				public isShowing(): boolean;
				public setSubtitle(int0: number): void;
				/** @deprecated */
				public setSelectedNavigationItem(int0: number): void;
				public setIcon(drawable0: globalAndroid.graphics.drawable.Drawable): void;
				public setCustomView(view0: globalAndroid.view.View, layoutParams1: androidx.appcompat.app.ActionBar.LayoutParams): void;
				public getThemedContext(): globalAndroid.content.Context;
				/** @deprecated */
				public removeTabAt(int0: number): void;
				public invalidateOptionsMenu(): boolean;
				public setIcon(int0: number): void;
				public setHomeAsUpIndicator(indicator: globalAndroid.graphics.drawable.Drawable): void;
				public addOnMenuVisibilityListener(onMenuVisibilityListener0: androidx.appcompat.app.ActionBar.OnMenuVisibilityListener): void;
				public setElevation(elevation: number): void;
				public setCustomView(int0: number): void;
				public setShowHideAnimationEnabled(enabled: boolean): void;
				public setTitle(int0: number): void;
				public setDisplayShowCustomEnabled(boolean0: boolean): void;
				public setLogo(drawable0: globalAndroid.graphics.drawable.Drawable): void;
				public setHomeAsUpIndicator(resId: number): void;
				public setDefaultDisplayHomeAsUpEnabled(enabled: boolean): void;
				public setDisplayShowTitleEnabled(boolean0: boolean): void;
				/** @deprecated */
				public getSelectedTab(): androidx.appcompat.app.ActionBar.Tab;
				public openOptionsMenu(): boolean;
				public setDisplayUseLogoEnabled(boolean0: boolean): void;
				public getElevation(): number;
				/** @deprecated */
				public getSelectedNavigationIndex(): number;
				public getSubtitle(): string;
				public setBackgroundDrawable(drawable0: globalAndroid.graphics.drawable.Drawable): void;
				public setDisplayOptions(int0: number, int1: number): void;
				public removeOnMenuVisibilityListener(onMenuVisibilityListener0: androidx.appcompat.app.ActionBar.OnMenuVisibilityListener): void;
				public setDisplayOptions(int0: number): void;
				public setSplitBackgroundDrawable(d: globalAndroid.graphics.drawable.Drawable): void;
				public isHideOnContentScrollEnabled(): boolean;
				public getHideOffset(): number;
				public startActionMode(callback: androidx.appcompat.view.ActionMode.Callback): androidx.appcompat.view.ActionMode;
				/** @deprecated */
				public addTab(tab0: androidx.appcompat.app.ActionBar.Tab, int1: number, boolean2: boolean): void;
				public getCustomView(): globalAndroid.view.View;
				/** @deprecated */
				public getNavigationMode(): number;
				public onConfigurationChanged(config: globalAndroid.content.res.Configuration): void;
				/** @deprecated */
				public removeTab(tab0: androidx.appcompat.app.ActionBar.Tab): void;
				public setDisplayShowHomeEnabled(boolean0: boolean): void;
				public getDisplayOptions(): number;
				/** @deprecated */
				public getTabCount(): number;
				public setHomeActionContentDescription(resId: number): void;
				public setStackedBackgroundDrawable(d: globalAndroid.graphics.drawable.Drawable): void;
				public closeOptionsMenu(): boolean;
				public setSubtitle(charSequence0: string): void;
				public collapseActionView(): boolean;
				/** @deprecated */
				public setNavigationMode(int0: number): void;
				/** @deprecated */
				public removeAllTabs(): void;
				public isTitleTruncated(): boolean;
				public dispatchMenuVisibilityChanged(visible: boolean): void;
				public setHideOnContentScrollEnabled(hideOnContentScroll: boolean): void;
				public getTitle(): string;
				/** @deprecated */
				public addTab(tab0: androidx.appcompat.app.ActionBar.Tab): void;
				public hide(): void;
				public setDisplayHomeAsUpEnabled(boolean0: boolean): void;
				public setHomeActionContentDescription(description: string): void;
				public onKeyShortcut(keyCode: number, ev: globalAndroid.view.KeyEvent): boolean;
				/** @deprecated */
				public newTab(): androidx.appcompat.app.ActionBar.Tab;
				public setCustomView(view0: globalAndroid.view.View): void;
				public onMenuKeyEvent(event: globalAndroid.view.KeyEvent): boolean;
				public setHideOffset(offset: number): void;
				public setWindowTitle(title: string): void;
			}
			export module ActionBar {
				export class DisplayOptions extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.appcompat.app.ActionBar.DisplayOptions>;
					/**
					 * Constructs a new instance of the androidx.appcompat.app.ActionBar() when extending the interface class.
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
				export class LayoutParams extends globalAndroid.view.ViewGroup.MarginLayoutParams {
					public static class: java.lang.Class<androidx.appcompat.app.ActionBar.LayoutParams>;
					public gravity: number;
					public constructor(source: globalAndroid.view.ViewGroup.LayoutParams);
					public constructor(c: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
					public constructor(width: number, height: number, gravity: number);
					public constructor(gravity: number);
					public constructor(source: androidx.appcompat.app.ActionBar.LayoutParams);
					public constructor(width: number, height: number);
					public constructor(source: globalAndroid.view.ViewGroup.MarginLayoutParams);
				}
				export class NavigationMode extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.appcompat.app.ActionBar.NavigationMode>;
					/**
					 * Constructs a new instance of the androidx.appcompat.app.ActionBar() when extending the interface class.
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
				export class OnMenuVisibilityListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.app.ActionBar.OnMenuVisibilityListener>;
					/**
					 * Constructs a new instance of the androidx.appcompat.app.ActionBar() when extending the interface class.
					 */
					public constructor(implementation: {
						onMenuVisibilityChanged(boolean0: boolean): void;
					});
					public constructor();
					public onMenuVisibilityChanged(boolean0: boolean): void;
				}
				export class OnNavigationListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.app.ActionBar.OnNavigationListener>;
					/**
					 * Constructs a new instance of the androidx.appcompat.app.ActionBar() when extending the interface class.
					 */
					public constructor(implementation: {
						onNavigationItemSelected(int0: number, long1: number): boolean;
					});
					public constructor();
					public onNavigationItemSelected(int0: number, long1: number): boolean;
				}
				export abstract class Tab extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.app.ActionBar.Tab>;
					public static INVALID_POSITION: number;
					public setText(int0: number): androidx.appcompat.app.ActionBar.Tab;
					public setCustomView(view0: globalAndroid.view.View): androidx.appcompat.app.ActionBar.Tab;
					public getCustomView(): globalAndroid.view.View;
					public getText(): string;
					public getTag(): any;
					public setContentDescription(int0: number): androidx.appcompat.app.ActionBar.Tab;
					public setIcon(int0: number): androidx.appcompat.app.ActionBar.Tab;
					public setTag(object0: any): androidx.appcompat.app.ActionBar.Tab;
					public getIcon(): globalAndroid.graphics.drawable.Drawable;
					public select(): void;
					public setIcon(drawable0: globalAndroid.graphics.drawable.Drawable): androidx.appcompat.app.ActionBar.Tab;
					public getContentDescription(): string;
					public constructor();
					public setText(charSequence0: string): androidx.appcompat.app.ActionBar.Tab;
					public setCustomView(int0: number): androidx.appcompat.app.ActionBar.Tab;
					public setContentDescription(charSequence0: string): androidx.appcompat.app.ActionBar.Tab;
					public setTabListener(tabListener0: androidx.appcompat.app.ActionBar.TabListener): androidx.appcompat.app.ActionBar.Tab;
					public getPosition(): number;
				}
				export class TabListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.app.ActionBar.TabListener>;
					/**
					 * Constructs a new instance of the androidx.appcompat.app.ActionBar() when extending the interface class.
					 */
					public constructor(implementation: {
						onTabSelected(tab0: androidx.appcompat.app.ActionBar.Tab, fragmentTransaction1: androidx.fragment.app.FragmentTransaction): void;
						onTabUnselected(tab0: androidx.appcompat.app.ActionBar.Tab, fragmentTransaction1: androidx.fragment.app.FragmentTransaction): void;
						onTabReselected(tab0: androidx.appcompat.app.ActionBar.Tab, fragmentTransaction1: androidx.fragment.app.FragmentTransaction): void;
					});
					public constructor();
					public onTabSelected(tab0: androidx.appcompat.app.ActionBar.Tab, fragmentTransaction1: androidx.fragment.app.FragmentTransaction): void;
					public onTabReselected(tab0: androidx.appcompat.app.ActionBar.Tab, fragmentTransaction1: androidx.fragment.app.FragmentTransaction): void;
					public onTabUnselected(tab0: androidx.appcompat.app.ActionBar.Tab, fragmentTransaction1: androidx.fragment.app.FragmentTransaction): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module app {
			export class ActionBarDrawerToggle extends java.lang.Object implements androidx.drawerlayout.widget.DrawerLayout.DrawerListener {
				public static class: java.lang.Class<androidx.appcompat.app.ActionBarDrawerToggle>;
				public setHomeAsUpIndicator(indicator: globalAndroid.graphics.drawable.Drawable): void;
				public isDrawerSlideAnimationEnabled(): boolean;
				public onConfigurationChanged(newConfig: globalAndroid.content.res.Configuration): void;
				public setDrawerSlideAnimationEnabled(enabled: boolean): void;
				public onOptionsItemSelected(item: globalAndroid.view.MenuItem): boolean;
				public isDrawerIndicatorEnabled(): boolean;
				public onDrawerOpened(drawerView: globalAndroid.view.View): void;
				public getToolbarNavigationClickListener(): globalAndroid.view.View.OnClickListener;
				public syncState(): void;
				public constructor(activity: globalAndroid.app.Activity, drawerLayout: androidx.drawerlayout.widget.DrawerLayout, openDrawerContentDescRes: number, closeDrawerContentDescRes: number);
				public setHomeAsUpIndicator(resId: number): void;
				public setDrawerIndicatorEnabled(enable: boolean): void;
				public getDrawerArrowDrawable(): androidx.appcompat.graphics.drawable.DrawerArrowDrawable;
				public setToolbarNavigationClickListener(onToolbarNavigationClickListener: globalAndroid.view.View.OnClickListener): void;
				public onDrawerClosed(drawerView: globalAndroid.view.View): void;
				public setDrawerArrowDrawable(drawable: androidx.appcompat.graphics.drawable.DrawerArrowDrawable): void;
				public onDrawerStateChanged(newState: number): void;
				public constructor(activity: globalAndroid.app.Activity, drawerLayout: androidx.drawerlayout.widget.DrawerLayout, toolbar: androidx.appcompat.widget.Toolbar, openDrawerContentDescRes: number, closeDrawerContentDescRes: number);
				public onDrawerSlide(drawerView: globalAndroid.view.View, slideOffset: number): void;
			}
			export module ActionBarDrawerToggle {
				export class Delegate extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.app.ActionBarDrawerToggle.Delegate>;
					/**
					 * Constructs a new instance of the androidx.appcompat.app.ActionBarDrawerToggle() when extending the interface class.
					 */
					public constructor(implementation: {
						setActionBarUpIndicator(drawable0: globalAndroid.graphics.drawable.Drawable, int1: number): void;
						setActionBarDescription(int0: number): void;
						getThemeUpIndicator(): globalAndroid.graphics.drawable.Drawable;
						getActionBarThemedContext(): globalAndroid.content.Context;
						isNavigationVisible(): boolean;
					});
					public constructor();
					public setActionBarUpIndicator(drawable0: globalAndroid.graphics.drawable.Drawable, int1: number): void;
					public setActionBarDescription(int0: number): void;
					public getThemeUpIndicator(): globalAndroid.graphics.drawable.Drawable;
					public isNavigationVisible(): boolean;
					public getActionBarThemedContext(): globalAndroid.content.Context;
				}
				export class DelegateProvider extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.app.ActionBarDrawerToggle.DelegateProvider>;
					/**
					 * Constructs a new instance of the androidx.appcompat.app.ActionBarDrawerToggle() when extending the interface class.
					 */
					public constructor(implementation: {
						getDrawerToggleDelegate(): androidx.appcompat.app.ActionBarDrawerToggle.Delegate;
					});
					public constructor();
					public getDrawerToggleDelegate(): androidx.appcompat.app.ActionBarDrawerToggle.Delegate;
				}
				export class FrameworkActionBarDelegate extends java.lang.Object implements androidx.appcompat.app.ActionBarDrawerToggle.Delegate {
					public static class: java.lang.Class<androidx.appcompat.app.ActionBarDrawerToggle.FrameworkActionBarDelegate>;
					public setActionBarUpIndicator(themeImage: globalAndroid.graphics.drawable.Drawable, contentDescRes: number): void;
					public getThemeUpIndicator(): globalAndroid.graphics.drawable.Drawable;
					public setActionBarDescription(contentDescRes: number): void;
					public isNavigationVisible(): boolean;
					public getActionBarThemedContext(): globalAndroid.content.Context;
				}
				export class ToolbarCompatDelegate extends java.lang.Object implements androidx.appcompat.app.ActionBarDrawerToggle.Delegate {
					public static class: java.lang.Class<androidx.appcompat.app.ActionBarDrawerToggle.ToolbarCompatDelegate>;
					public setActionBarUpIndicator(upDrawable: globalAndroid.graphics.drawable.Drawable, contentDescRes: number): void;
					public setActionBarDescription(contentDescRes: number): void;
					public getThemeUpIndicator(): globalAndroid.graphics.drawable.Drawable;
					public isNavigationVisible(): boolean;
					public getActionBarThemedContext(): globalAndroid.content.Context;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module app {
			export class ActionBarDrawerToggleHoneycomb extends java.lang.Object {
				public static class: java.lang.Class<androidx.appcompat.app.ActionBarDrawerToggleHoneycomb>;
				public static setActionBarDescription(info: androidx.appcompat.app.ActionBarDrawerToggleHoneycomb.SetIndicatorInfo, activity: globalAndroid.app.Activity, contentDescRes: number): androidx.appcompat.app.ActionBarDrawerToggleHoneycomb.SetIndicatorInfo;
				public static getThemeUpIndicator(activity: globalAndroid.app.Activity): globalAndroid.graphics.drawable.Drawable;
				public static setActionBarUpIndicator(activity: globalAndroid.app.Activity, drawable: globalAndroid.graphics.drawable.Drawable, contentDescRes: number): androidx.appcompat.app.ActionBarDrawerToggleHoneycomb.SetIndicatorInfo;
			}
			export module ActionBarDrawerToggleHoneycomb {
				export class SetIndicatorInfo extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.app.ActionBarDrawerToggleHoneycomb.SetIndicatorInfo>;
					public setHomeAsUpIndicator: java.lang.reflect.Method;
					public setHomeActionContentDescription: java.lang.reflect.Method;
					public upIndicatorView: globalAndroid.widget.ImageView;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module app {
			export class AlertController extends java.lang.Object {
				public static class: java.lang.Class<androidx.appcompat.app.AlertController>;
				public constructor(context: globalAndroid.content.Context, di: androidx.appcompat.app.AppCompatDialog, window: globalAndroid.view.Window);
				public getIconAttributeResId(attrId: number): number;
				public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public setButtonPanelLayoutHint(layoutHint: number): void;
				public getListView(): globalAndroid.widget.ListView;
				public setView(view: globalAndroid.view.View): void;
				public setMessage(message: string): void;
				public setIcon(resId: number): void;
				public setIcon(icon: globalAndroid.graphics.drawable.Drawable): void;
				public getButton(whichButton: number): globalAndroid.widget.Button;
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public installContent(): void;
				public setTitle(title: string): void;
				public setView(view: globalAndroid.view.View, viewSpacingLeft: number, viewSpacingTop: number, viewSpacingRight: number, viewSpacingBottom: number): void;
				public setView(layoutResId: number): void;
				public setCustomTitle(customTitleView: globalAndroid.view.View): void;
				public setButton(whichButton: number, text: string, listener: globalAndroid.content.DialogInterface.OnClickListener, msg: globalAndroid.os.Message, icon: globalAndroid.graphics.drawable.Drawable): void;
			}
			export module AlertController {
				export class AlertParams extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.app.AlertController.AlertParams>;
					public mContext: globalAndroid.content.Context;
					public mInflater: globalAndroid.view.LayoutInflater;
					public mIconId: number;
					public mIcon: globalAndroid.graphics.drawable.Drawable;
					public mIconAttrId: number;
					public mTitle: string;
					public mCustomTitleView: globalAndroid.view.View;
					public mMessage: string;
					public mPositiveButtonText: string;
					public mPositiveButtonIcon: globalAndroid.graphics.drawable.Drawable;
					public mPositiveButtonListener: globalAndroid.content.DialogInterface.OnClickListener;
					public mNegativeButtonText: string;
					public mNegativeButtonIcon: globalAndroid.graphics.drawable.Drawable;
					public mNegativeButtonListener: globalAndroid.content.DialogInterface.OnClickListener;
					public mNeutralButtonText: string;
					public mNeutralButtonIcon: globalAndroid.graphics.drawable.Drawable;
					public mNeutralButtonListener: globalAndroid.content.DialogInterface.OnClickListener;
					public mCancelable: boolean;
					public mOnCancelListener: globalAndroid.content.DialogInterface.OnCancelListener;
					public mOnDismissListener: globalAndroid.content.DialogInterface.OnDismissListener;
					public mOnKeyListener: globalAndroid.content.DialogInterface.OnKeyListener;
					public mItems: native.Array<string>;
					public mAdapter: globalAndroid.widget.ListAdapter;
					public mOnClickListener: globalAndroid.content.DialogInterface.OnClickListener;
					public mViewLayoutResId: number;
					public mView: globalAndroid.view.View;
					public mViewSpacingLeft: number;
					public mViewSpacingTop: number;
					public mViewSpacingRight: number;
					public mViewSpacingBottom: number;
					public mViewSpacingSpecified: boolean;
					public mCheckedItems: native.Array<boolean>;
					public mIsMultiChoice: boolean;
					public mIsSingleChoice: boolean;
					public mCheckedItem: number;
					public mOnCheckboxClickListener: globalAndroid.content.DialogInterface.OnMultiChoiceClickListener;
					public mCursor: globalAndroid.database.Cursor;
					public mLabelColumn: string;
					public mIsCheckedColumn: string;
					public mForceInverseBackground: boolean;
					public mOnItemSelectedListener: globalAndroid.widget.AdapterView.OnItemSelectedListener;
					public mOnPrepareListViewListener: androidx.appcompat.app.AlertController.AlertParams.OnPrepareListViewListener;
					public mRecycleOnMeasure: boolean;
					public constructor(context: globalAndroid.content.Context);
					public apply(dialog: androidx.appcompat.app.AlertController): void;
				}
				export module AlertParams {
					export class OnPrepareListViewListener extends java.lang.Object {
						public static class: java.lang.Class<androidx.appcompat.app.AlertController.AlertParams.OnPrepareListViewListener>;
						/**
						 * Constructs a new instance of the androidx.appcompat.app.AlertController() when extending the interface class.
						 */
						public constructor(implementation: {
							onPrepareListView(listView0: globalAndroid.widget.ListView): void;
						});
						public constructor();
						public onPrepareListView(listView0: globalAndroid.widget.ListView): void;
					}
				}
				export class ButtonHandler extends globalAndroid.os.Handler {
					public static class: java.lang.Class<androidx.appcompat.app.AlertController.ButtonHandler>;
					public constructor(looper: globalAndroid.os.Looper);
					public constructor(callback: globalAndroid.os.Handler.Callback);
					public constructor(dialog: globalAndroid.content.DialogInterface);
					public constructor();
					public constructor(looper: globalAndroid.os.Looper, callback: globalAndroid.os.Handler.Callback);
					public handleMessage(msg: globalAndroid.os.Message): void;
				}
				export class CheckedItemAdapter extends globalAndroid.widget.ArrayAdapter<string> {
					public static class: java.lang.Class<androidx.appcompat.app.AlertController.CheckedItemAdapter>;
					public constructor(context: globalAndroid.content.Context, resource: number, textViewResourceId: number, objects: java.util.List<any>);
					public constructor(context: globalAndroid.content.Context, resource: number, objects: java.util.List<any>);
					public getFilter(): globalAndroid.widget.Filter;
					public areAllItemsEnabled(): boolean;
					public isEnabled(position: number): boolean;
					public constructor(context: globalAndroid.content.Context, resource: number, textViewResourceId: number);
					public constructor(context: globalAndroid.content.Context, resource: number, objects: native.Array<any>);
					public constructor(context: globalAndroid.content.Context, resource: number, textViewResourceId: number, objects: native.Array<string>);
					public getItemId(position: number): number;
					public constructor(context: globalAndroid.content.Context, resource: number, textViewResourceId: number, objects: native.Array<any>);
					public hasStableIds(): boolean;
					public constructor(context: globalAndroid.content.Context, resource: number);
					public setDropDownViewTheme(theme: globalAndroid.content.res.Resources.Theme): void;
					public constructor();
					public getDropDownViewTheme(): globalAndroid.content.res.Resources.Theme;
					public getDropDownView(position: number, convertView: globalAndroid.view.View, parent: globalAndroid.view.ViewGroup): globalAndroid.view.View;
				}
				export class RecycleListView extends globalAndroid.widget.ListView {
					public static class: java.lang.Class<androidx.appcompat.app.AlertController.RecycleListView>;
					public showContextMenuForChild(originalView: globalAndroid.view.View, x: number, y: number): boolean;
					public requestTransparentRegion(child: globalAndroid.view.View): void;
					public childDrawableStateChanged(child: globalAndroid.view.View): void;
					public onFilterComplete(count: number): void;
					public onNestedFling(target: globalAndroid.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
					public isLayoutRequested(): boolean;
					/** @deprecated */
					public invalidateChild(child: globalAndroid.view.View, dirty: globalAndroid.graphics.Rect): void;
					public focusableViewAvailable(v: globalAndroid.view.View): void;
					public focusSearch(direction: number): globalAndroid.view.View;
					public isTextDirectionResolved(): boolean;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
					public isLayoutDirectionResolved(): boolean;
					public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public showContextMenuForChild(originalView: globalAndroid.view.View): boolean;
					public onTouchModeChanged(isInTouchMode: boolean): void;
					public onNestedScroll(target: globalAndroid.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
					public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
					public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
					public requestSendAccessibilityEvent(child: globalAndroid.view.View, event: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
					public beforeTextChanged(s: string, start: number, count: number, after: number): void;
					public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
					public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback, type: number): globalAndroid.view.ActionMode;
					public getLayoutDirection(): number;
					public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
					public onGlobalLayout(): void;
					public onStartNestedScroll(child: globalAndroid.view.View, target: globalAndroid.view.View, nestedScrollAxes: number): boolean;
					/** @deprecated */
					public invalidateChildInParent(location: native.Array<number>, dirty: globalAndroid.graphics.Rect): globalAndroid.view.ViewParent;
					public setHasDecor(hasTitle: boolean, hasButtons: boolean): void;
					public recomputeViewAttributes(child: globalAndroid.view.View): void;
					public notifySubtreeAccessibilityStateChanged(child: globalAndroid.view.View, source: globalAndroid.view.View, changeType: number): void;
					public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
					public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public addView(child: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
					public constructor(context: globalAndroid.content.Context);
					public getTextDirection(): number;
					public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
					public requestFitSystemWindows(): void;
					public getParent(): globalAndroid.view.ViewParent;
					public isTextAlignmentResolved(): boolean;
					public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public requestChildRectangleOnScreen(child: globalAndroid.view.View, rect: globalAndroid.graphics.Rect, immediate: boolean): boolean;
					public sendAccessibilityEvent(eventType: number): void;
					public getChildVisibleRect(child: globalAndroid.view.View, r: globalAndroid.graphics.Rect, offset: globalAndroid.graphics.Point): boolean;
					public canResolveTextAlignment(): boolean;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
					/** @deprecated */
					public requestFitSystemWindows(): void;
					public addView(child: globalAndroid.view.View): void;
					public canResolveTextDirection(): boolean;
					public updateViewLayout(view: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
					public bringChildToFront(child: globalAndroid.view.View): void;
					public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
					public onNestedPreScroll(target: globalAndroid.view.View, dx: number, dy: number, consumed: native.Array<number>): void;
					public afterTextChanged(s: globalAndroid.text.Editable): void;
					public clearChildFocus(child: globalAndroid.view.View): void;
					public requestLayout(): void;
					public createContextMenu(menu: globalAndroid.view.ContextMenu): void;
					public getParentForAccessibility(): globalAndroid.view.ViewParent;
					public addView(child: globalAndroid.view.View, index: number, params: globalAndroid.view.ViewGroup.LayoutParams): void;
					public childHasTransientStateChanged(child: globalAndroid.view.View, childHasTransientState: boolean): void;
					public canResolveLayoutDirection(): boolean;
					public onTextChanged(s: string, start: number, before: number, count: number): void;
					public onNestedScrollAccepted(child: globalAndroid.view.View, target: globalAndroid.view.View, axes: number): void;
					public getTextAlignment(): number;
					public onDescendantInvalidated(child: globalAndroid.view.View, target: globalAndroid.view.View): void;
					public onNestedPrePerformAccessibilityAction(target: globalAndroid.view.View, action: number, bundle2: globalAndroid.os.Bundle): boolean;
					public keyboardNavigationClusterSearch(currentCluster: globalAndroid.view.View, direction: number): globalAndroid.view.View;
					public addView(child: globalAndroid.view.View, width: number, height: number): void;
					public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
					public requestChildFocus(child: globalAndroid.view.View, focused: globalAndroid.view.View): void;
					public onStopNestedScroll(child: globalAndroid.view.View): void;
					public onNestedPreFling(target: globalAndroid.view.View, velocityX: number, velocityY: number): boolean;
					public addView(child: globalAndroid.view.View, index: number): void;
					public removeView(child: globalAndroid.view.View): void;
					public focusSearch(focused: globalAndroid.view.View, direction: number): globalAndroid.view.View;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module app {
			export class AlertDialog extends androidx.appcompat.app.AppCompatDialog implements globalAndroid.content.DialogInterface {
				public static class: java.lang.Class<androidx.appcompat.app.AlertDialog>;
				public onWindowAttributesChanged(params: globalAndroid.view.WindowManager.LayoutParams): void;
				public onMenuOpened(featureId: number, menu: globalAndroid.view.Menu): boolean;
				public constructor(context: globalAndroid.content.Context);
				public constructor(context: globalAndroid.content.Context, themeResId: number);
				public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
				public getListView(): globalAndroid.widget.ListView;
				public setIconAttribute(attrId: number): void;
				public constructor(context: globalAndroid.content.Context, cancelable: boolean, cancelListener: globalAndroid.content.DialogInterface.OnCancelListener);
				public setIcon(resId: number): void;
				public onCreatePanelMenu(featureId: number, menu: globalAndroid.view.Menu): boolean;
				public onWindowStartingSupportActionMode(callback: androidx.appcompat.view.ActionMode.Callback): androidx.appcompat.view.ActionMode;
				public onWindowFocusChanged(hasFocus: boolean): void;
				public dispatchKeyEvent(event: globalAndroid.view.KeyEvent): boolean;
				public cancel(): void;
				public dispatchGenericMotionEvent(ev: globalAndroid.view.MotionEvent): boolean;
				public setView(view: globalAndroid.view.View, viewSpacingLeft: number, viewSpacingTop: number, viewSpacingRight: number, viewSpacingBottom: number): void;
				public dispatchPopulateAccessibilityEvent(event: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
				public setButton(whichButton: number, text: string, listener: globalAndroid.content.DialogInterface.OnClickListener): void;
				public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public onCreatePanelView(featureId: number): globalAndroid.view.View;
				public onPreparePanel(featureId: number, view: globalAndroid.view.View, menu: globalAndroid.view.Menu): boolean;
				public onActionModeStarted(mode: globalAndroid.view.ActionMode): void;
				public onContentChanged(): void;
				public onSearchRequested(searchEvent: any): boolean;
				public onDetachedFromWindow(): void;
				public dispatchKeyShortcutEvent(event: globalAndroid.view.KeyEvent): boolean;
				public onPointerCaptureChanged(hasCapture: boolean): void;
				public onSearchRequested(): boolean;
				public onSupportActionModeStarted(mode: androidx.appcompat.view.ActionMode): void;
				public dispatchTrackballEvent(ev: globalAndroid.view.MotionEvent): boolean;
				public setCustomTitle(customTitleView: globalAndroid.view.View): void;
				public setMessage(message: string): void;
				public onCreate(savedInstanceState: globalAndroid.os.Bundle): void;
				public dismiss(): void;
				public onWindowStartingActionMode(callback: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
				public onActionModeFinished(mode: globalAndroid.view.ActionMode): void;
				public getButton(whichButton: number): globalAndroid.widget.Button;
				public onProvideKeyboardShortcuts(data: java.util.List<any>, menu: globalAndroid.view.Menu, deviceId: number): void;
				public setTitle(title: string): void;
				public onWindowStartingActionMode(callback: globalAndroid.view.ActionMode.Callback, type: number): globalAndroid.view.ActionMode;
				public setTitle(titleId: number): void;
				public onPanelClosed(featureId: number, menu: globalAndroid.view.Menu): void;
				public setView(view: globalAndroid.view.View): void;
				public setButton(whichButton: number, text: string, msg: globalAndroid.os.Message): void;
				public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public setButton(whichButton: number, text: string, icon: globalAndroid.graphics.drawable.Drawable, listener: globalAndroid.content.DialogInterface.OnClickListener): void;
				public setIcon(icon: globalAndroid.graphics.drawable.Drawable): void;
				public onCreateContextMenu(menu: globalAndroid.view.ContextMenu, v: globalAndroid.view.View, menuInfo: globalAndroid.view.ContextMenu.ContextMenuInfo): void;
				public onMenuItemSelected(featureId: number, item: globalAndroid.view.MenuItem): boolean;
				public constructor(context: globalAndroid.content.Context, theme: number);
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public onSupportActionModeFinished(mode: androidx.appcompat.view.ActionMode): void;
				public onAttachedToWindow(): void;
				public dispatchTouchEvent(ev: globalAndroid.view.MotionEvent): boolean;
			}
			export module AlertDialog {
				export class Builder extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.app.AlertDialog.Builder>;
					public setOnItemSelectedListener(listener: globalAndroid.widget.AdapterView.OnItemSelectedListener): androidx.appcompat.app.AlertDialog.Builder;
					public setOnKeyListener(onKeyListener: globalAndroid.content.DialogInterface.OnKeyListener): androidx.appcompat.app.AlertDialog.Builder;
					public setCancelable(cancelable: boolean): androidx.appcompat.app.AlertDialog.Builder;
					public setMultiChoiceItems(cursor: globalAndroid.database.Cursor, isCheckedColumn: string, labelColumn: string, listener: globalAndroid.content.DialogInterface.OnMultiChoiceClickListener): androidx.appcompat.app.AlertDialog.Builder;
					public setTitle(title: string): androidx.appcompat.app.AlertDialog.Builder;
					public setOnCancelListener(onCancelListener: globalAndroid.content.DialogInterface.OnCancelListener): androidx.appcompat.app.AlertDialog.Builder;
					public setItems(itemsId: number, listener: globalAndroid.content.DialogInterface.OnClickListener): androidx.appcompat.app.AlertDialog.Builder;
					public setMessage(messageId: number): androidx.appcompat.app.AlertDialog.Builder;
					public setNeutralButtonIcon(icon: globalAndroid.graphics.drawable.Drawable): androidx.appcompat.app.AlertDialog.Builder;
					public setOnDismissListener(onDismissListener: globalAndroid.content.DialogInterface.OnDismissListener): androidx.appcompat.app.AlertDialog.Builder;
					/** @deprecated */
					public setInverseBackgroundForced(useInverseBackground: boolean): androidx.appcompat.app.AlertDialog.Builder;
					public setPositiveButton(text: string, listener: globalAndroid.content.DialogInterface.OnClickListener): androidx.appcompat.app.AlertDialog.Builder;
					public setRecycleOnMeasureEnabled(enabled: boolean): androidx.appcompat.app.AlertDialog.Builder;
					public getContext(): globalAndroid.content.Context;
					public setPositiveButton(textId: number, listener: globalAndroid.content.DialogInterface.OnClickListener): androidx.appcompat.app.AlertDialog.Builder;
					public setSingleChoiceItems(adapter: globalAndroid.widget.ListAdapter, checkedItem: number, listener: globalAndroid.content.DialogInterface.OnClickListener): androidx.appcompat.app.AlertDialog.Builder;
					public setNeutralButton(textId: number, listener: globalAndroid.content.DialogInterface.OnClickListener): androidx.appcompat.app.AlertDialog.Builder;
					/** @deprecated */
					public setView(view: globalAndroid.view.View, viewSpacingLeft: number, viewSpacingTop: number, viewSpacingRight: number, viewSpacingBottom: number): androidx.appcompat.app.AlertDialog.Builder;
					public constructor(context: globalAndroid.content.Context, themeResId: number);
					public setAdapter(adapter: globalAndroid.widget.ListAdapter, listener: globalAndroid.content.DialogInterface.OnClickListener): androidx.appcompat.app.AlertDialog.Builder;
					public setNeutralButton(text: string, listener: globalAndroid.content.DialogInterface.OnClickListener): androidx.appcompat.app.AlertDialog.Builder;
					public setNegativeButton(text: string, listener: globalAndroid.content.DialogInterface.OnClickListener): androidx.appcompat.app.AlertDialog.Builder;
					public setNegativeButtonIcon(icon: globalAndroid.graphics.drawable.Drawable): androidx.appcompat.app.AlertDialog.Builder;
					public setMultiChoiceItems(items: native.Array<string>, checkedItems: native.Array<boolean>, listener: globalAndroid.content.DialogInterface.OnMultiChoiceClickListener): androidx.appcompat.app.AlertDialog.Builder;
					public setMultiChoiceItems(itemsId: number, checkedItems: native.Array<boolean>, listener: globalAndroid.content.DialogInterface.OnMultiChoiceClickListener): androidx.appcompat.app.AlertDialog.Builder;
					public setNegativeButton(textId: number, listener: globalAndroid.content.DialogInterface.OnClickListener): androidx.appcompat.app.AlertDialog.Builder;
					public setCustomTitle(customTitleView: globalAndroid.view.View): androidx.appcompat.app.AlertDialog.Builder;
					public setIconAttribute(attrId: number): androidx.appcompat.app.AlertDialog.Builder;
					public setItems(items: native.Array<string>, listener: globalAndroid.content.DialogInterface.OnClickListener): androidx.appcompat.app.AlertDialog.Builder;
					public setSingleChoiceItems(items: native.Array<string>, checkedItem: number, listener: globalAndroid.content.DialogInterface.OnClickListener): androidx.appcompat.app.AlertDialog.Builder;
					public setPositiveButtonIcon(icon: globalAndroid.graphics.drawable.Drawable): androidx.appcompat.app.AlertDialog.Builder;
					public show(): androidx.appcompat.app.AlertDialog;
					public create(): androidx.appcompat.app.AlertDialog;
					public setCursor(cursor: globalAndroid.database.Cursor, listener: globalAndroid.content.DialogInterface.OnClickListener, labelColumn: string): androidx.appcompat.app.AlertDialog.Builder;
					public setView(view: globalAndroid.view.View): androidx.appcompat.app.AlertDialog.Builder;
					public setIcon(iconId: number): androidx.appcompat.app.AlertDialog.Builder;
					public setIcon(icon: globalAndroid.graphics.drawable.Drawable): androidx.appcompat.app.AlertDialog.Builder;
					public constructor(context: globalAndroid.content.Context);
					public setTitle(titleId: number): androidx.appcompat.app.AlertDialog.Builder;
					public setSingleChoiceItems(cursor: globalAndroid.database.Cursor, checkedItem: number, labelColumn: string, listener: globalAndroid.content.DialogInterface.OnClickListener): androidx.appcompat.app.AlertDialog.Builder;
					public setView(layoutResId: number): androidx.appcompat.app.AlertDialog.Builder;
					public setSingleChoiceItems(itemsId: number, checkedItem: number, listener: globalAndroid.content.DialogInterface.OnClickListener): androidx.appcompat.app.AlertDialog.Builder;
					public setMessage(message: string): androidx.appcompat.app.AlertDialog.Builder;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module app {
			export class AppCompatActivity extends androidx.fragment.app.FragmentActivity implements androidx.appcompat.app.AppCompatCallback, androidx.core.app.TaskStackBuilder.SupportParentable, androidx.appcompat.app.ActionBarDrawerToggle.DelegateProvider {
				public static class: java.lang.Class<androidx.appcompat.app.AppCompatActivity>;
				public onWindowAttributesChanged(params: globalAndroid.view.WindowManager.LayoutParams): void;
				public onMenuOpened(featureId: number, menu: globalAndroid.view.Menu): boolean;
				public constructor(base: globalAndroid.content.Context, themeResId: number);
				public startSupportActionMode(callback: androidx.appcompat.view.ActionMode.Callback): androidx.appcompat.view.ActionMode;
				public onSupportNavigateUp(): boolean;
				public onPostCreate(savedInstanceState: globalAndroid.os.Bundle, persistentState: any): void;
				public supportNavigateUpTo(upIntent: globalAndroid.content.Intent): void;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
				public onCreateView(name: string, context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet): globalAndroid.view.View;
				public supportShouldUpRecreateTask(targetIntent: globalAndroid.content.Intent): boolean;
				/** @deprecated */
				public supportInvalidateOptionsMenu(): void;
				public setTheme(resId: number): void;
				public getLifecycle(): androidx.lifecycle.Lifecycle;
				public constructor();
				public onCreatePanelMenu(featureId: number, menu: globalAndroid.view.Menu): boolean;
				public openOptionsMenu(): void;
				public onWindowStartingSupportActionMode(callback: androidx.appcompat.view.ActionMode.Callback): androidx.appcompat.view.ActionMode;
				public onWindowFocusChanged(hasFocus: boolean): void;
				public onCreate(savedInstanceState: globalAndroid.os.Bundle, persistentState: any): void;
				public dispatchKeyEvent(event: globalAndroid.view.KeyEvent): boolean;
				public onPrepareSupportNavigateUpTaskStack(builder: androidx.core.app.TaskStackBuilder): void;
				public setSupportActionBar(toolbar: androidx.appcompat.widget.Toolbar): void;
				public dispatchGenericMotionEvent(ev: globalAndroid.view.MotionEvent): boolean;
				public constructor(base: globalAndroid.content.Context, theme: globalAndroid.content.res.Resources.Theme);
				public dispatchPopulateAccessibilityEvent(event: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
				/** @deprecated */
				public setSupportProgressBarVisibility(visible: boolean): void;
				public onSaveInstanceState(outState: globalAndroid.os.Bundle, outPersistentState: any): void;
				public onCreateSupportNavigateUpTaskStack(builder: androidx.core.app.TaskStackBuilder): void;
				public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public setContentView(layoutResID: number): void;
				public onConfigurationChanged(newConfig: globalAndroid.content.res.Configuration): void;
				public onTitleChanged(title: string, color: number): void;
				public findViewById(id: number): globalAndroid.view.View;
				/** @deprecated */
				public setSupportProgressBarIndeterminate(indeterminate: boolean): void;
				public setTheme(theme: globalAndroid.content.res.Resources.Theme): void;
				public supportInvalidateOptionsMenu(): void;
				public onCreatePanelView(featureId: number): globalAndroid.view.View;
				public onSaveInstanceState(outState: globalAndroid.os.Bundle): void;
				public onPreparePanel(featureId: number, view: globalAndroid.view.View, menu: globalAndroid.view.Menu): boolean;
				public getOnBackPressedDispatcher(): androidx.activity.OnBackPressedDispatcher;
				public onActionModeStarted(mode: globalAndroid.view.ActionMode): void;
				public onContentChanged(): void;
				public onSearchRequested(searchEvent: any): boolean;
				public onPostResume(): void;
				public onStart(): void;
				public onDetachedFromWindow(): void;
				public dispatchKeyShortcutEvent(event: globalAndroid.view.KeyEvent): boolean;
				public onPointerCaptureChanged(hasCapture: boolean): void;
				public getSupportActionBar(): androidx.appcompat.app.ActionBar;
				public onSearchRequested(): boolean;
				public onSupportActionModeStarted(mode: androidx.appcompat.view.ActionMode): void;
				public dispatchTrackballEvent(ev: globalAndroid.view.MotionEvent): boolean;
				public attachBaseContext(newBase: globalAndroid.content.Context): void;
				public invalidateOptionsMenu(): void;
				public getViewModelStore(): androidx.lifecycle.ViewModelStore;
				public getMenuInflater(): globalAndroid.view.MenuInflater;
				public onCreate(savedInstanceState: globalAndroid.os.Bundle): void;
				public onWindowStartingActionMode(callback: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
				public closeOptionsMenu(): void;
				public onTrimMemory(level: number): void;
				public getSavedStateRegistry(): androidx.savedstate.SavedStateRegistry;
				public constructor(base: globalAndroid.content.Context);
				public onActionModeFinished(mode: globalAndroid.view.ActionMode): void;
				public getDelegate(): androidx.appcompat.app.AppCompatDelegate;
				public validateRequestPermissionsRequestCode(requestCode: number): void;
				public setContentView(view: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				/** @deprecated */
				public setSupportProgress(progress: number): void;
				public onRequestPermissionsResult(requestCode: number, permissions: native.Array<string>, grantResults: native.Array<number>): void;
				public onProvideKeyboardShortcuts(data: java.util.List<any>, menu: globalAndroid.view.Menu, deviceId: number): void;
				public onStop(): void;
				public superDispatchKeyEvent(event: globalAndroid.view.KeyEvent): boolean;
				/** @deprecated */
				public onSupportContentChanged(): void;
				public onPostCreate(savedInstanceState: globalAndroid.os.Bundle): void;
				public onNightModeChanged(mode: number): void;
				public onWindowStartingActionMode(callback: globalAndroid.view.ActionMode.Callback, type: number): globalAndroid.view.ActionMode;
				/** @deprecated */
				public setSupportProgressBarIndeterminateVisibility(visible: boolean): void;
				public onPanelClosed(featureId: number, menu: globalAndroid.view.Menu): void;
				public getSupportParentActivityIntent(): globalAndroid.content.Intent;
				public getDrawerToggleDelegate(): androidx.appcompat.app.ActionBarDrawerToggle.Delegate;
				public getResources(): globalAndroid.content.res.Resources;
				public onCreateView(parent: globalAndroid.view.View, name: string, context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet): globalAndroid.view.View;
				public setTheme(resid: number): void;
				public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public setContentView(view: globalAndroid.view.View): void;
				public addContentView(view: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public onCreateContextMenu(menu: globalAndroid.view.ContextMenu, v: globalAndroid.view.View, menuInfo: globalAndroid.view.ContextMenu.ContextMenuInfo): void;
				public onMenuItemSelected(featureId: number, item: globalAndroid.view.MenuItem): boolean;
				public supportRequestWindowFeature(featureId: number): boolean;
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public constructor(contentLayoutId: number);
				public onDestroy(): void;
				public onSupportActionModeFinished(mode: androidx.appcompat.view.ActionMode): void;
				public onAttachedToWindow(): void;
				public dispatchTouchEvent(ev: globalAndroid.view.MotionEvent): boolean;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module app {
			export class AppCompatCallback extends java.lang.Object {
				public static class: java.lang.Class<androidx.appcompat.app.AppCompatCallback>;
				/**
				 * Constructs a new instance of the androidx.appcompat.app.AppCompatCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onSupportActionModeStarted(actionMode0: androidx.appcompat.view.ActionMode): void;
					onSupportActionModeFinished(actionMode0: androidx.appcompat.view.ActionMode): void;
					onWindowStartingSupportActionMode(callback0: androidx.appcompat.view.ActionMode.Callback): androidx.appcompat.view.ActionMode;
				});
				public constructor();
				public onSupportActionModeStarted(actionMode0: androidx.appcompat.view.ActionMode): void;
				public onSupportActionModeFinished(actionMode0: androidx.appcompat.view.ActionMode): void;
				public onWindowStartingSupportActionMode(callback0: androidx.appcompat.view.ActionMode.Callback): androidx.appcompat.view.ActionMode;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module app {
			export abstract class AppCompatDelegate extends java.lang.Object {
				public static class: java.lang.Class<androidx.appcompat.app.AppCompatDelegate>;
				public static MODE_NIGHT_FOLLOW_SYSTEM: number;
				public static MODE_NIGHT_AUTO_TIME: number;
				public static MODE_NIGHT_AUTO: number;
				public static MODE_NIGHT_NO: number;
				public static MODE_NIGHT_YES: number;
				public static MODE_NIGHT_AUTO_BATTERY: number;
				public static MODE_NIGHT_UNSPECIFIED: number;
				public static FEATURE_SUPPORT_ACTION_BAR: number;
				public static FEATURE_SUPPORT_ACTION_BAR_OVERLAY: number;
				public static FEATURE_ACTION_MODE_OVERLAY: number;
				public invalidateOptionsMenu(): void;
				public setContentView(view0: globalAndroid.view.View): void;
				public setTitle(charSequence0: string): void;
				public static isCompatVectorFromResourcesEnabled(): boolean;
				public onCreate(bundle0: globalAndroid.os.Bundle): void;
				public static getDefaultNightMode(): number;
				public hasWindowFeature(int0: number): boolean;
				public getMenuInflater(): globalAndroid.view.MenuInflater;
				public requestWindowFeature(int0: number): boolean;
				public setHandleNativeActionModesEnabled(boolean0: boolean): void;
				public isHandleNativeActionModesEnabled(): boolean;
				public startSupportActionMode(callback0: androidx.appcompat.view.ActionMode.Callback): androidx.appcompat.view.ActionMode;
				public setTheme(themeResId: number): void;
				public onPostCreate(bundle0: globalAndroid.os.Bundle): void;
				public applyDayNight(): boolean;
				public onStop(): void;
				public attachBaseContext2(context: globalAndroid.content.Context): globalAndroid.content.Context;
				public setContentView(view0: globalAndroid.view.View, layoutParams1: globalAndroid.view.ViewGroup.LayoutParams): void;
				public createView(view0: globalAndroid.view.View, string1: string, context2: globalAndroid.content.Context, attributeSet3: globalAndroid.util.AttributeSet): globalAndroid.view.View;
				public getLocalNightMode(): number;
				public findViewById(int0: number): globalAndroid.view.View;
				public getDrawerToggleDelegate(): androidx.appcompat.app.ActionBarDrawerToggle.Delegate;
				public addContentView(view0: globalAndroid.view.View, layoutParams1: globalAndroid.view.ViewGroup.LayoutParams): void;
				public onSaveInstanceState(bundle0: globalAndroid.os.Bundle): void;
				public static create(context: globalAndroid.content.Context, window: globalAndroid.view.Window, callback: androidx.appcompat.app.AppCompatCallback): androidx.appcompat.app.AppCompatDelegate;
				public setLocalNightMode(int0: number): void;
				public onConfigurationChanged(configuration0: globalAndroid.content.res.Configuration): void;
				/** @deprecated */
				public attachBaseContext(context: globalAndroid.content.Context): void;
				public static setCompatVectorFromResourcesEnabled(enabled: boolean): void;
				public installViewFactory(): void;
				public static create(dialog: globalAndroid.app.Dialog, callback: androidx.appcompat.app.AppCompatCallback): androidx.appcompat.app.AppCompatDelegate;
				public onStart(): void;
				public onPostResume(): void;
				public static create(context: globalAndroid.content.Context, activity: globalAndroid.app.Activity, callback: androidx.appcompat.app.AppCompatCallback): androidx.appcompat.app.AppCompatDelegate;
				public getSupportActionBar(): androidx.appcompat.app.ActionBar;
				public setSupportActionBar(toolbar0: androidx.appcompat.widget.Toolbar): void;
				public onDestroy(): void;
				public static create(activity: globalAndroid.app.Activity, callback: androidx.appcompat.app.AppCompatCallback): androidx.appcompat.app.AppCompatDelegate;
				public setContentView(int0: number): void;
				public static setDefaultNightMode(mode: number): void;
			}
			export module AppCompatDelegate {
				export class NightMode extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.appcompat.app.AppCompatDelegate.NightMode>;
					/**
					 * Constructs a new instance of the androidx.appcompat.app.AppCompatDelegate() when extending the interface class.
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
	export module appcompat {
		export module app {
			export class AppCompatDelegateImpl extends androidx.appcompat.app.AppCompatDelegate implements androidx.appcompat.view.menu.MenuBuilder.Callback, globalAndroid.view.LayoutInflater.Factory2 {
				public static class: java.lang.Class<androidx.appcompat.app.AppCompatDelegateImpl>;
				public setContentView(view0: globalAndroid.view.View): void;
				public setTitle(charSequence0: string): void;
				public startSupportActionMode(callback: androidx.appcompat.view.ActionMode.Callback): androidx.appcompat.view.ActionMode;
				public onCreateView(name: string, context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet): globalAndroid.view.View;
				public onCreate(bundle0: globalAndroid.os.Bundle): void;
				public requestWindowFeature(int0: number): boolean;
				public setHandleNativeActionModesEnabled(boolean0: boolean): void;
				public isHandleNativeActionModesEnabled(): boolean;
				public attachBaseContext2(baseContext: globalAndroid.content.Context): globalAndroid.content.Context;
				public startSupportActionMode(callback0: androidx.appcompat.view.ActionMode.Callback): androidx.appcompat.view.ActionMode;
				public getPanelState(featureId: number, required: boolean): androidx.appcompat.app.AppCompatDelegateImpl.PanelFeatureState;
				public setHandleNativeActionModesEnabled(enabled: boolean): void;
				public attachBaseContext2(context: globalAndroid.content.Context): globalAndroid.content.Context;
				public setSupportActionBar(toolbar: androidx.appcompat.widget.Toolbar): void;
				public onMenuItemSelected(menu: androidx.appcompat.view.menu.MenuBuilder, item: globalAndroid.view.MenuItem): boolean;
				public getLocalNightMode(): number;
				public findViewById(int0: number): globalAndroid.view.View;
				public onConfigurationChanged(newConfig: globalAndroid.content.res.Configuration): void;
				public findViewById(id: number): globalAndroid.view.View;
				public onSaveInstanceState(outState: globalAndroid.os.Bundle): void;
				public setLocalNightMode(mode: number): void;
				public addContentView(v: globalAndroid.view.View, lp: globalAndroid.view.ViewGroup.LayoutParams): void;
				public onStart(): void;
				public onPostResume(): void;
				public requestWindowFeature(featureId: number): boolean;
				public getSupportActionBar(): androidx.appcompat.app.ActionBar;
				public setSupportActionBar(toolbar0: androidx.appcompat.widget.Toolbar): void;
				public onMenuModeChange(menu: androidx.appcompat.view.menu.MenuBuilder): void;
				public invalidateOptionsMenu(): void;
				public hasWindowFeature(int0: number): boolean;
				public hasWindowFeature(featureId: number): boolean;
				public getMenuInflater(): globalAndroid.view.MenuInflater;
				public onCreate(savedInstanceState: globalAndroid.os.Bundle): void;
				public setTheme(themeResId: number): void;
				public onPostCreate(bundle0: globalAndroid.os.Bundle): void;
				public applyDayNight(): boolean;
				public onStop(): void;
				public setContentView(view0: globalAndroid.view.View, layoutParams1: globalAndroid.view.ViewGroup.LayoutParams): void;
				public setTitle(title: string): void;
				public onPostCreate(savedInstanceState: globalAndroid.os.Bundle): void;
				public setContentView(resId: number): void;
				public createView(view0: globalAndroid.view.View, string1: string, context2: globalAndroid.content.Context, attributeSet3: globalAndroid.util.AttributeSet): globalAndroid.view.View;
				public getDrawerToggleDelegate(): androidx.appcompat.app.ActionBarDrawerToggle.Delegate;
				public onCreateView(parent: globalAndroid.view.View, name: string, context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet): globalAndroid.view.View;
				public addContentView(view0: globalAndroid.view.View, layoutParams1: globalAndroid.view.ViewGroup.LayoutParams): void;
				public onSaveInstanceState(bundle0: globalAndroid.os.Bundle): void;
				public setLocalNightMode(int0: number): void;
				public createView(parent: globalAndroid.view.View, name: string, context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet): globalAndroid.view.View;
				public onConfigurationChanged(configuration0: globalAndroid.content.res.Configuration): void;
				public installViewFactory(): void;
				public setContentView(v: globalAndroid.view.View): void;
				public onDestroy(): void;
				public setContentView(v: globalAndroid.view.View, lp: globalAndroid.view.ViewGroup.LayoutParams): void;
				public setContentView(int0: number): void;
			}
			export module AppCompatDelegateImpl {
				export class ActionBarDrawableToggleImpl extends java.lang.Object implements androidx.appcompat.app.ActionBarDrawerToggle.Delegate {
					public static class: java.lang.Class<androidx.appcompat.app.AppCompatDelegateImpl.ActionBarDrawableToggleImpl>;
					public getThemeUpIndicator(): globalAndroid.graphics.drawable.Drawable;
					public setActionBarUpIndicator(upDrawable: globalAndroid.graphics.drawable.Drawable, contentDescRes: number): void;
					public setActionBarDescription(contentDescRes: number): void;
					public isNavigationVisible(): boolean;
					public getActionBarThemedContext(): globalAndroid.content.Context;
				}
				export class ActionMenuPresenterCallback extends java.lang.Object implements androidx.appcompat.view.menu.MenuPresenter.Callback {
					public static class: java.lang.Class<androidx.appcompat.app.AppCompatDelegateImpl.ActionMenuPresenterCallback>;
					public onCloseMenu(menu: androidx.appcompat.view.menu.MenuBuilder, allMenusAreClosing: boolean): void;
					public onOpenSubMenu(subMenu: androidx.appcompat.view.menu.MenuBuilder): boolean;
				}
				export class ActionModeCallbackWrapperV9 extends java.lang.Object implements androidx.appcompat.view.ActionMode.Callback {
					public static class: java.lang.Class<androidx.appcompat.app.AppCompatDelegateImpl.ActionModeCallbackWrapperV9>;
					public constructor(this0: androidx.appcompat.app.AppCompatDelegateImpl, wrapped: androidx.appcompat.view.ActionMode.Callback);
					public onCreateActionMode(mode: androidx.appcompat.view.ActionMode, menu: globalAndroid.view.Menu): boolean;
					public onDestroyActionMode(mode: androidx.appcompat.view.ActionMode): void;
					public onPrepareActionMode(mode: androidx.appcompat.view.ActionMode, menu: globalAndroid.view.Menu): boolean;
					public onActionItemClicked(mode: androidx.appcompat.view.ActionMode, item: globalAndroid.view.MenuItem): boolean;
				}
				export class AppCompatWindowCallback extends androidx.appcompat.view.WindowCallbackWrapper {
					public static class: java.lang.Class<androidx.appcompat.app.AppCompatDelegateImpl.AppCompatWindowCallback>;
					public dispatchTrackballEvent(event: globalAndroid.view.MotionEvent): boolean;
					public onSearchRequested(): boolean;
					public onPanelClosed(featureId: number, menu: globalAndroid.view.Menu): void;
					public onPointerCaptureChanged(hasCapture: boolean): void;
					public onWindowAttributesChanged(attrs: globalAndroid.view.WindowManager.LayoutParams): void;
					public onAttachedToWindow(): void;
					public onMenuItemSelected(featureId: number, item: globalAndroid.view.MenuItem): boolean;
					public onSearchRequested(searchEvent: any): boolean;
					public dispatchKeyEvent(event: globalAndroid.view.KeyEvent): boolean;
					public dispatchKeyShortcutEvent(event: globalAndroid.view.KeyEvent): boolean;
					public onWindowStartingActionMode(callback: globalAndroid.view.ActionMode.Callback, type: number): globalAndroid.view.ActionMode;
					public onProvideKeyboardShortcuts(data: java.util.List<any>, menu: globalAndroid.view.Menu, deviceId: number): void;
					public onDetachedFromWindow(): void;
					public onMenuOpened(featureId: number, menu: globalAndroid.view.Menu): boolean;
					public onWindowStartingActionMode(callback: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
					public onCreatePanelMenu(featureId: number, menu: globalAndroid.view.Menu): boolean;
					public dispatchTouchEvent(event: globalAndroid.view.MotionEvent): boolean;
					public dispatchGenericMotionEvent(event: globalAndroid.view.MotionEvent): boolean;
					public onActionModeFinished(mode: globalAndroid.view.ActionMode): void;
					public onWindowFocusChanged(hasFocus: boolean): void;
					public onActionModeStarted(mode: globalAndroid.view.ActionMode): void;
					public onCreatePanelView(featureId: number): globalAndroid.view.View;
					public onPreparePanel(featureId: number, view: globalAndroid.view.View, menu: globalAndroid.view.Menu): boolean;
					public onContentChanged(): void;
					public dispatchPopulateAccessibilityEvent(event: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
				}
				export class AutoBatteryNightModeManager extends androidx.appcompat.app.AppCompatDelegateImpl.AutoNightModeManager {
					public static class: java.lang.Class<androidx.appcompat.app.AppCompatDelegateImpl.AutoBatteryNightModeManager>;
					public getApplyableNightMode(): number;
					public onChange(): void;
				}
				export abstract class AutoNightModeManager extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.app.AppCompatDelegateImpl.AutoNightModeManager>;
				}
				export class AutoTimeNightModeManager extends androidx.appcompat.app.AppCompatDelegateImpl.AutoNightModeManager {
					public static class: java.lang.Class<androidx.appcompat.app.AppCompatDelegateImpl.AutoTimeNightModeManager>;
					public getApplyableNightMode(): number;
					public onChange(): void;
				}
				export class ConfigurationImplApi17 extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.app.AppCompatDelegateImpl.ConfigurationImplApi17>;
				}
				export class ConfigurationImplApi24 extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.app.AppCompatDelegateImpl.ConfigurationImplApi24>;
				}
				export class ConfigurationImplApi26 extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.app.AppCompatDelegateImpl.ConfigurationImplApi26>;
				}
				export class ContextThemeWrapperCompatApi17Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.app.AppCompatDelegateImpl.ContextThemeWrapperCompatApi17Impl>;
				}
				export class ListMenuDecorView extends androidx.appcompat.widget.ContentFrameLayout {
					public static class: java.lang.Class<androidx.appcompat.app.AppCompatDelegateImpl.ListMenuDecorView>;
					public showContextMenuForChild(originalView: globalAndroid.view.View, x: number, y: number): boolean;
					public requestTransparentRegion(child: globalAndroid.view.View): void;
					public childDrawableStateChanged(child: globalAndroid.view.View): void;
					public onNestedFling(target: globalAndroid.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
					public isLayoutRequested(): boolean;
					/** @deprecated */
					public invalidateChild(child: globalAndroid.view.View, dirty: globalAndroid.graphics.Rect): void;
					public focusableViewAvailable(v: globalAndroid.view.View): void;
					public focusSearch(direction: number): globalAndroid.view.View;
					public isTextDirectionResolved(): boolean;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
					public dispatchKeyEvent(event: globalAndroid.view.KeyEvent): boolean;
					public isLayoutDirectionResolved(): boolean;
					public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public showContextMenuForChild(originalView: globalAndroid.view.View): boolean;
					public onNestedScroll(target: globalAndroid.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
					public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
					public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
					public requestSendAccessibilityEvent(child: globalAndroid.view.View, event: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
					public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
					public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback, type: number): globalAndroid.view.ActionMode;
					public getLayoutDirection(): number;
					public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
					public onStartNestedScroll(child: globalAndroid.view.View, target: globalAndroid.view.View, nestedScrollAxes: number): boolean;
					/** @deprecated */
					public invalidateChildInParent(location: native.Array<number>, dirty: globalAndroid.graphics.Rect): globalAndroid.view.ViewParent;
					public recomputeViewAttributes(child: globalAndroid.view.View): void;
					public notifySubtreeAccessibilityStateChanged(child: globalAndroid.view.View, source: globalAndroid.view.View, changeType: number): void;
					public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
					public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public addView(child: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
					public constructor(context: globalAndroid.content.Context);
					public getTextDirection(): number;
					public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
					public requestFitSystemWindows(): void;
					public getParent(): globalAndroid.view.ViewParent;
					public isTextAlignmentResolved(): boolean;
					public onInterceptTouchEvent(ev: globalAndroid.view.MotionEvent): boolean;
					public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public sendAccessibilityEvent(eventType: number): void;
					public getChildVisibleRect(child: globalAndroid.view.View, r: globalAndroid.graphics.Rect, offset: globalAndroid.graphics.Point): boolean;
					public requestChildRectangleOnScreen(child: globalAndroid.view.View, rectangle: globalAndroid.graphics.Rect, immediate: boolean): boolean;
					public canResolveTextAlignment(): boolean;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
					/** @deprecated */
					public requestFitSystemWindows(): void;
					public addView(child: globalAndroid.view.View): void;
					public constructor(param0: androidx.appcompat.app.AppCompatDelegateImpl, context: globalAndroid.content.Context);
					public canResolveTextDirection(): boolean;
					public updateViewLayout(view: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
					public onInterceptTouchEvent(event: globalAndroid.view.MotionEvent): boolean;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
					public bringChildToFront(child: globalAndroid.view.View): void;
					public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
					public onNestedPreScroll(target: globalAndroid.view.View, dx: number, dy: number, consumed: native.Array<number>): void;
					public clearChildFocus(child: globalAndroid.view.View): void;
					public requestLayout(): void;
					public createContextMenu(menu: globalAndroid.view.ContextMenu): void;
					public getParentForAccessibility(): globalAndroid.view.ViewParent;
					public addView(child: globalAndroid.view.View, index: number, params: globalAndroid.view.ViewGroup.LayoutParams): void;
					public childHasTransientStateChanged(child: globalAndroid.view.View, childHasTransientState: boolean): void;
					public canResolveLayoutDirection(): boolean;
					public onNestedScrollAccepted(child: globalAndroid.view.View, target: globalAndroid.view.View, axes: number): void;
					public getTextAlignment(): number;
					public onDescendantInvalidated(child: globalAndroid.view.View, target: globalAndroid.view.View): void;
					public onNestedPrePerformAccessibilityAction(target: globalAndroid.view.View, action: number, bundle2: globalAndroid.os.Bundle): boolean;
					public keyboardNavigationClusterSearch(currentCluster: globalAndroid.view.View, direction: number): globalAndroid.view.View;
					public addView(child: globalAndroid.view.View, width: number, height: number): void;
					public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
					public requestChildFocus(child: globalAndroid.view.View, focused: globalAndroid.view.View): void;
					public onStopNestedScroll(child: globalAndroid.view.View): void;
					public onNestedPreFling(target: globalAndroid.view.View, velocityX: number, velocityY: number): boolean;
					public addView(child: globalAndroid.view.View, index: number): void;
					public removeView(view: globalAndroid.view.View): void;
					public focusSearch(focused: globalAndroid.view.View, direction: number): globalAndroid.view.View;
					public setBackgroundResource(resid: number): void;
				}
				export class PanelFeatureState extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.app.AppCompatDelegateImpl.PanelFeatureState>;
					public qwertyMode: boolean;
					public hasPanelItems(): boolean;
					public clearMenuPresenters(): void;
				}
				export module PanelFeatureState {
					export class SavedState extends java.lang.Object implements globalAndroid.os.Parcelable {
						public static class: java.lang.Class<androidx.appcompat.app.AppCompatDelegateImpl.PanelFeatureState.SavedState>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<androidx.appcompat.app.AppCompatDelegateImpl.PanelFeatureState.SavedState>;
						public describeContents(): number;
						public writeToParcel(dest: globalAndroid.os.Parcel, flags: number): void;
					}
				}
				export class PanelMenuPresenterCallback extends java.lang.Object implements androidx.appcompat.view.menu.MenuPresenter.Callback {
					public static class: java.lang.Class<androidx.appcompat.app.AppCompatDelegateImpl.PanelMenuPresenterCallback>;
					public onCloseMenu(menu: androidx.appcompat.view.menu.MenuBuilder, allMenusAreClosing: boolean): void;
					public onOpenSubMenu(subMenu: androidx.appcompat.view.menu.MenuBuilder): boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module app {
			export class AppCompatDialog extends globalAndroid.app.Dialog implements androidx.appcompat.app.AppCompatCallback {
				public static class: java.lang.Class<androidx.appcompat.app.AppCompatDialog>;
				public onWindowAttributesChanged(params: globalAndroid.view.WindowManager.LayoutParams): void;
				public onMenuOpened(featureId: number, menu: globalAndroid.view.Menu): boolean;
				public constructor(context: globalAndroid.content.Context);
				public constructor(context: globalAndroid.content.Context, themeResId: number);
				public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
				public constructor(context: globalAndroid.content.Context, cancelable: boolean, cancelListener: globalAndroid.content.DialogInterface.OnCancelListener);
				public onCreatePanelMenu(featureId: number, menu: globalAndroid.view.Menu): boolean;
				public onWindowStartingSupportActionMode(callback: androidx.appcompat.view.ActionMode.Callback): androidx.appcompat.view.ActionMode;
				public onWindowFocusChanged(hasFocus: boolean): void;
				public dispatchKeyEvent(event: globalAndroid.view.KeyEvent): boolean;
				public cancel(): void;
				public dispatchGenericMotionEvent(ev: globalAndroid.view.MotionEvent): boolean;
				public dispatchPopulateAccessibilityEvent(event: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
				public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public setContentView(layoutResID: number): void;
				public findViewById(id: number): globalAndroid.view.View;
				public onCreatePanelView(featureId: number): globalAndroid.view.View;
				public onPreparePanel(featureId: number, view: globalAndroid.view.View, menu: globalAndroid.view.Menu): boolean;
				public onActionModeStarted(mode: globalAndroid.view.ActionMode): void;
				public onContentChanged(): void;
				public onSearchRequested(searchEvent: any): boolean;
				public onDetachedFromWindow(): void;
				public dispatchKeyShortcutEvent(event: globalAndroid.view.KeyEvent): boolean;
				public onPointerCaptureChanged(hasCapture: boolean): void;
				public getSupportActionBar(): androidx.appcompat.app.ActionBar;
				public onSearchRequested(): boolean;
				public onSupportActionModeStarted(mode: androidx.appcompat.view.ActionMode): void;
				public dispatchTrackballEvent(ev: globalAndroid.view.MotionEvent): boolean;
				public invalidateOptionsMenu(): void;
				public onCreate(savedInstanceState: globalAndroid.os.Bundle): void;
				public dismiss(): void;
				public onWindowStartingActionMode(callback: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
				public onActionModeFinished(mode: globalAndroid.view.ActionMode): void;
				public getDelegate(): androidx.appcompat.app.AppCompatDelegate;
				public setContentView(view: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public onProvideKeyboardShortcuts(data: java.util.List<any>, menu: globalAndroid.view.Menu, deviceId: number): void;
				public onStop(): void;
				public setTitle(title: string): void;
				public onWindowStartingActionMode(callback: globalAndroid.view.ActionMode.Callback, type: number): globalAndroid.view.ActionMode;
				public setTitle(titleId: number): void;
				public onPanelClosed(featureId: number, menu: globalAndroid.view.Menu): void;
				public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public setContentView(view: globalAndroid.view.View): void;
				public addContentView(view: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public onCreateContextMenu(menu: globalAndroid.view.ContextMenu, v: globalAndroid.view.View, menuInfo: globalAndroid.view.ContextMenu.ContextMenuInfo): void;
				public onMenuItemSelected(featureId: number, item: globalAndroid.view.MenuItem): boolean;
				public constructor(context: globalAndroid.content.Context, theme: number);
				public supportRequestWindowFeature(featureId: number): boolean;
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public onSupportActionModeFinished(mode: androidx.appcompat.view.ActionMode): void;
				public onAttachedToWindow(): void;
				public dispatchTouchEvent(ev: globalAndroid.view.MotionEvent): boolean;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module app {
			export class AppCompatDialogFragment extends androidx.fragment.app.DialogFragment {
				public static class: java.lang.Class<androidx.appcompat.app.AppCompatDialogFragment>;
				public getSavedStateRegistry(): androidx.savedstate.SavedStateRegistry;
				public onCancel(dialog: globalAndroid.content.DialogInterface): void;
				public onCreateContextMenu(menu: globalAndroid.view.ContextMenu, v: globalAndroid.view.View, menuInfo: globalAndroid.view.ContextMenu.ContextMenuInfo): void;
				public setupDialog(dialog: globalAndroid.app.Dialog, style: number): void;
				public getViewModelStore(): androidx.lifecycle.ViewModelStore;
				public onDismiss(dialog: globalAndroid.content.DialogInterface): void;
				public onConfigurationChanged(newConfig: globalAndroid.content.res.Configuration): void;
				public onLowMemory(): void;
				public onCreateDialog(savedInstanceState: globalAndroid.os.Bundle): globalAndroid.app.Dialog;
				public constructor(contentLayoutId: number);
				public getLifecycle(): androidx.lifecycle.Lifecycle;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module app {
			export class AppCompatViewInflater extends java.lang.Object {
				public static class: java.lang.Class<androidx.appcompat.app.AppCompatViewInflater>;
				public createView(context: globalAndroid.content.Context, name: string, attrs: globalAndroid.util.AttributeSet): globalAndroid.view.View;
				public createCheckBox(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet): androidx.appcompat.widget.AppCompatCheckBox;
				public createSpinner(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet): androidx.appcompat.widget.AppCompatSpinner;
				public constructor();
				public createTextView(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet): androidx.appcompat.widget.AppCompatTextView;
				public createImageButton(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet): androidx.appcompat.widget.AppCompatImageButton;
				public createAutoCompleteTextView(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet): androidx.appcompat.widget.AppCompatAutoCompleteTextView;
				public createMultiAutoCompleteTextView(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet): androidx.appcompat.widget.AppCompatMultiAutoCompleteTextView;
				public createRadioButton(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet): androidx.appcompat.widget.AppCompatRadioButton;
				public createToggleButton(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet): androidx.appcompat.widget.AppCompatToggleButton;
				public createEditText(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet): androidx.appcompat.widget.AppCompatEditText;
				public createButton(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet): androidx.appcompat.widget.AppCompatButton;
				public createCheckedTextView(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet): androidx.appcompat.widget.AppCompatCheckedTextView;
				public createSeekBar(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet): androidx.appcompat.widget.AppCompatSeekBar;
				public createRatingBar(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet): androidx.appcompat.widget.AppCompatRatingBar;
				public createImageView(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet): androidx.appcompat.widget.AppCompatImageView;
			}
			export module AppCompatViewInflater {
				export class DeclaredOnClickListener extends java.lang.Object implements globalAndroid.view.View.OnClickListener {
					public static class: java.lang.Class<androidx.appcompat.app.AppCompatViewInflater.DeclaredOnClickListener>;
					public onClick(v: globalAndroid.view.View): void;
					public constructor(hostView: globalAndroid.view.View, methodName: string);
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module app {
			export class NavItemSelectedListener extends java.lang.Object implements globalAndroid.widget.AdapterView.OnItemSelectedListener {
				public static class: java.lang.Class<androidx.appcompat.app.NavItemSelectedListener>;
				public constructor(listener: androidx.appcompat.app.ActionBar.OnNavigationListener);
				public onItemSelected(parent: globalAndroid.widget.AdapterView<any>, view: globalAndroid.view.View, position: number, id: number): void;
				public onNothingSelected(parent: globalAndroid.widget.AdapterView<any>): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module app {
			export class ResourcesFlusher extends java.lang.Object {
				public static class: java.lang.Class<androidx.appcompat.app.ResourcesFlusher>;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module app {
			export class ToolbarActionBar extends androidx.appcompat.app.ActionBar {
				public static class: java.lang.Class<androidx.appcompat.app.ToolbarActionBar>;
				/** @deprecated */
				public selectTab(tab0: androidx.appcompat.app.ActionBar.Tab): void;
				public setTitle(charSequence0: string): void;
				public getHeight(): number;
				public setDisplayOptions(options: number): void;
				public setDisplayOptions(options: number, mask: number): void;
				/** @deprecated */
				public getTabAt(int0: number): androidx.appcompat.app.ActionBar.Tab;
				/** @deprecated */
				public addTab(tab0: androidx.appcompat.app.ActionBar.Tab, boolean1: boolean): void;
				public show(): void;
				/** @deprecated */
				public setListNavigationCallbacks(spinnerAdapter0: globalAndroid.widget.SpinnerAdapter, onNavigationListener1: androidx.appcompat.app.ActionBar.OnNavigationListener): void;
				public removeTab(tab: androidx.appcompat.app.ActionBar.Tab): void;
				/** @deprecated */
				public getNavigationItemCount(): number;
				public setSubtitle(int0: number): void;
				public setCustomView(resId: number): void;
				/** @deprecated */
				public setSelectedNavigationItem(int0: number): void;
				public setDisplayShowTitleEnabled(showTitle: boolean): void;
				public setIcon(int0: number): void;
				public setHomeAsUpIndicator(indicator: globalAndroid.graphics.drawable.Drawable): void;
				public addOnMenuVisibilityListener(onMenuVisibilityListener0: androidx.appcompat.app.ActionBar.OnMenuVisibilityListener): void;
				public setListNavigationCallbacks(adapter: globalAndroid.widget.SpinnerAdapter, callback: androidx.appcompat.app.ActionBar.OnNavigationListener): void;
				public setTitle(int0: number): void;
				public setDisplayShowCustomEnabled(boolean0: boolean): void;
				public setDefaultDisplayHomeAsUpEnabled(enabled: boolean): void;
				public setDisplayShowTitleEnabled(boolean0: boolean): void;
				public openOptionsMenu(): boolean;
				public getElevation(): number;
				public setDisplayUseLogoEnabled(boolean0: boolean): void;
				public getSubtitle(): string;
				public removeAllTabs(): void;
				public setBackgroundDrawable(drawable0: globalAndroid.graphics.drawable.Drawable): void;
				public setDisplayOptions(int0: number, int1: number): void;
				public dispatchMenuVisibilityChanged(isVisible: boolean): void;
				public removeOnMenuVisibilityListener(onMenuVisibilityListener0: androidx.appcompat.app.ActionBar.OnMenuVisibilityListener): void;
				public setSplitBackgroundDrawable(d: globalAndroid.graphics.drawable.Drawable): void;
				public getCustomView(): globalAndroid.view.View;
				/** @deprecated */
				public getNavigationMode(): number;
				public addOnMenuVisibilityListener(listener: androidx.appcompat.app.ActionBar.OnMenuVisibilityListener): void;
				public setDisplayShowHomeEnabled(boolean0: boolean): void;
				public setDisplayShowCustomEnabled(showCustom: boolean): void;
				public setHomeActionContentDescription(resId: number): void;
				public setLogo(resId: number): void;
				public getSelectedNavigationIndex(): number;
				public setLogo(logo: globalAndroid.graphics.drawable.Drawable): void;
				public setSubtitle(charSequence0: string): void;
				public setDisplayHomeAsUpEnabled(showHomeAsUp: boolean): void;
				public setTitle(resId: number): void;
				public setDisplayShowHomeEnabled(showHome: boolean): void;
				public isTitleTruncated(): boolean;
				public getTitle(): string;
				public setIcon(icon: globalAndroid.graphics.drawable.Drawable): void;
				public setSubtitle(subtitle: string): void;
				public hide(): void;
				public setDisplayHomeAsUpEnabled(boolean0: boolean): void;
				public setBackgroundDrawable(d: globalAndroid.graphics.drawable.Drawable): void;
				public onKeyShortcut(keyCode: number, ev: globalAndroid.view.KeyEvent): boolean;
				public addTab(tab: androidx.appcompat.app.ActionBar.Tab): void;
				/** @deprecated */
				public newTab(): androidx.appcompat.app.ActionBar.Tab;
				public setCustomView(view0: globalAndroid.view.View): void;
				public setDisplayUseLogoEnabled(useLogo: boolean): void;
				public removeTabAt(position: number): void;
				public setIcon(resId: number): void;
				public setHomeButtonEnabled(enabled: boolean): void;
				public setLogo(int0: number): void;
				/** @deprecated */
				public addTab(tab0: androidx.appcompat.app.ActionBar.Tab, int1: number): void;
				public getWrappedWindowCallback(): globalAndroid.view.Window.Callback;
				public isShowing(): boolean;
				public newTab(): androidx.appcompat.app.ActionBar.Tab;
				public setIcon(drawable0: globalAndroid.graphics.drawable.Drawable): void;
				public setCustomView(view0: globalAndroid.view.View, layoutParams1: androidx.appcompat.app.ActionBar.LayoutParams): void;
				public getThemedContext(): globalAndroid.content.Context;
				/** @deprecated */
				public removeTabAt(int0: number): void;
				public invalidateOptionsMenu(): boolean;
				public setElevation(elevation: number): void;
				public setCustomView(int0: number): void;
				public setShowHideAnimationEnabled(enabled: boolean): void;
				public setLogo(drawable0: globalAndroid.graphics.drawable.Drawable): void;
				public getSelectedTab(): androidx.appcompat.app.ActionBar.Tab;
				public setHomeAsUpIndicator(resId: number): void;
				/** @deprecated */
				public getSelectedTab(): androidx.appcompat.app.ActionBar.Tab;
				/** @deprecated */
				public getSelectedNavigationIndex(): number;
				public setCustomView(view: globalAndroid.view.View, layoutParams: androidx.appcompat.app.ActionBar.LayoutParams): void;
				public setDisplayOptions(int0: number): void;
				public getNavigationMode(): number;
				/** @deprecated */
				public addTab(tab0: androidx.appcompat.app.ActionBar.Tab, int1: number, boolean2: boolean): void;
				public onConfigurationChanged(config: globalAndroid.content.res.Configuration): void;
				/** @deprecated */
				public removeTab(tab0: androidx.appcompat.app.ActionBar.Tab): void;
				public getDisplayOptions(): number;
				/** @deprecated */
				public getTabCount(): number;
				public setStackedBackgroundDrawable(d: globalAndroid.graphics.drawable.Drawable): void;
				public setSelectedNavigationItem(position: number): void;
				public addTab(tab: androidx.appcompat.app.ActionBar.Tab, position: number, setSelected: boolean): void;
				public getTabAt(index: number): androidx.appcompat.app.ActionBar.Tab;
				public closeOptionsMenu(): boolean;
				public setTitle(title: string): void;
				public getTabCount(): number;
				public setCustomView(view: globalAndroid.view.View): void;
				public requestFocus(): boolean;
				public collapseActionView(): boolean;
				/** @deprecated */
				public setNavigationMode(int0: number): void;
				public getNavigationItemCount(): number;
				/** @deprecated */
				public removeAllTabs(): void;
				public dispatchMenuVisibilityChanged(visible: boolean): void;
				public addTab(tab: androidx.appcompat.app.ActionBar.Tab, position: number): void;
				public setSubtitle(resId: number): void;
				public selectTab(tab: androidx.appcompat.app.ActionBar.Tab): void;
				/** @deprecated */
				public addTab(tab0: androidx.appcompat.app.ActionBar.Tab): void;
				public removeOnMenuVisibilityListener(listener: androidx.appcompat.app.ActionBar.OnMenuVisibilityListener): void;
				public setHomeActionContentDescription(description: string): void;
				public setNavigationMode(mode: number): void;
				public addTab(tab: androidx.appcompat.app.ActionBar.Tab, setSelected: boolean): void;
				public onMenuKeyEvent(event: globalAndroid.view.KeyEvent): boolean;
				public setWindowTitle(title: string): void;
			}
			export module ToolbarActionBar {
				export class ActionMenuPresenterCallback extends java.lang.Object implements androidx.appcompat.view.menu.MenuPresenter.Callback {
					public static class: java.lang.Class<androidx.appcompat.app.ToolbarActionBar.ActionMenuPresenterCallback>;
					public onCloseMenu(menu: androidx.appcompat.view.menu.MenuBuilder, allMenusAreClosing: boolean): void;
					public onOpenSubMenu(subMenu: androidx.appcompat.view.menu.MenuBuilder): boolean;
				}
				export class MenuBuilderCallback extends java.lang.Object implements androidx.appcompat.view.menu.MenuBuilder.Callback {
					public static class: java.lang.Class<androidx.appcompat.app.ToolbarActionBar.MenuBuilderCallback>;
					public onMenuModeChange(menu: androidx.appcompat.view.menu.MenuBuilder): void;
					public onMenuItemSelected(menu: androidx.appcompat.view.menu.MenuBuilder, item: globalAndroid.view.MenuItem): boolean;
				}
				export class ToolbarCallbackWrapper extends androidx.appcompat.view.WindowCallbackWrapper {
					public static class: java.lang.Class<androidx.appcompat.app.ToolbarActionBar.ToolbarCallbackWrapper>;
					public dispatchTrackballEvent(event: globalAndroid.view.MotionEvent): boolean;
					public onSearchRequested(): boolean;
					public constructor(param0: androidx.appcompat.app.ToolbarActionBar, wrapped: globalAndroid.view.Window.Callback);
					public onPanelClosed(featureId: number, menu: globalAndroid.view.Menu): void;
					public onPointerCaptureChanged(hasCapture: boolean): void;
					public onWindowAttributesChanged(attrs: globalAndroid.view.WindowManager.LayoutParams): void;
					public onAttachedToWindow(): void;
					public onMenuItemSelected(featureId: number, item: globalAndroid.view.MenuItem): boolean;
					public onSearchRequested(searchEvent: any): boolean;
					public dispatchKeyEvent(event: globalAndroid.view.KeyEvent): boolean;
					public dispatchKeyShortcutEvent(event: globalAndroid.view.KeyEvent): boolean;
					public onWindowStartingActionMode(callback: globalAndroid.view.ActionMode.Callback, type: number): globalAndroid.view.ActionMode;
					public constructor(wrapped: globalAndroid.view.Window.Callback);
					public onProvideKeyboardShortcuts(data: java.util.List<any>, menu: globalAndroid.view.Menu, deviceId: number): void;
					public onDetachedFromWindow(): void;
					public onMenuOpened(featureId: number, menu: globalAndroid.view.Menu): boolean;
					public onWindowStartingActionMode(callback: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
					public onCreatePanelMenu(featureId: number, menu: globalAndroid.view.Menu): boolean;
					public dispatchTouchEvent(event: globalAndroid.view.MotionEvent): boolean;
					public dispatchGenericMotionEvent(event: globalAndroid.view.MotionEvent): boolean;
					public onActionModeFinished(mode: globalAndroid.view.ActionMode): void;
					public onWindowFocusChanged(hasFocus: boolean): void;
					public onActionModeStarted(mode: globalAndroid.view.ActionMode): void;
					public onCreatePanelView(featureId: number): globalAndroid.view.View;
					public onPreparePanel(featureId: number, view: globalAndroid.view.View, menu: globalAndroid.view.Menu): boolean;
					public onContentChanged(): void;
					public dispatchPopulateAccessibilityEvent(event: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module app {
			export class TwilightCalculator extends java.lang.Object {
				public static class: java.lang.Class<androidx.appcompat.app.TwilightCalculator>;
				public static DAY: number;
				public static NIGHT: number;
				public sunset: number;
				public sunrise: number;
				public state: number;
				public calculateTwilight(time: number, latitude: number, longitude: number): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module app {
			export class TwilightManager extends java.lang.Object {
				public static class: java.lang.Class<androidx.appcompat.app.TwilightManager>;
			}
			export module TwilightManager {
				export class TwilightState extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.app.TwilightManager.TwilightState>;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module app {
			export class WindowDecorActionBar extends androidx.appcompat.app.ActionBar implements androidx.appcompat.widget.ActionBarOverlayLayout.ActionBarVisibilityCallback {
				public static class: java.lang.Class<androidx.appcompat.app.WindowDecorActionBar>;
				/** @deprecated */
				public selectTab(tab0: androidx.appcompat.app.ActionBar.Tab): void;
				public setTitle(charSequence0: string): void;
				public getHeight(): number;
				public setDisplayOptions(options: number): void;
				public setDisplayOptions(options: number, mask: number): void;
				public onContentScrollStopped(): void;
				public showForSystem(): void;
				/** @deprecated */
				public getTabAt(int0: number): androidx.appcompat.app.ActionBar.Tab;
				/** @deprecated */
				public addTab(tab0: androidx.appcompat.app.ActionBar.Tab, boolean1: boolean): void;
				public constructor(layout: globalAndroid.view.View);
				public show(): void;
				public removeTab(tab: androidx.appcompat.app.ActionBar.Tab): void;
				/** @deprecated */
				public setListNavigationCallbacks(spinnerAdapter0: globalAndroid.widget.SpinnerAdapter, onNavigationListener1: androidx.appcompat.app.ActionBar.OnNavigationListener): void;
				/** @deprecated */
				public getNavigationItemCount(): number;
				public onKeyShortcut(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public setSubtitle(int0: number): void;
				public setCustomView(resId: number): void;
				/** @deprecated */
				public setSelectedNavigationItem(int0: number): void;
				public setDisplayShowTitleEnabled(showTitle: boolean): void;
				public onWindowVisibilityChanged(visibility: number): void;
				public setIcon(int0: number): void;
				public setHomeAsUpIndicator(indicator: globalAndroid.graphics.drawable.Drawable): void;
				public addOnMenuVisibilityListener(onMenuVisibilityListener0: androidx.appcompat.app.ActionBar.OnMenuVisibilityListener): void;
				public setListNavigationCallbacks(adapter: globalAndroid.widget.SpinnerAdapter, callback: androidx.appcompat.app.ActionBar.OnNavigationListener): void;
				public setTitle(int0: number): void;
				public setDefaultDisplayHomeAsUpEnabled(enable: boolean): void;
				public setDisplayShowCustomEnabled(boolean0: boolean): void;
				public enableContentAnimations(enabled: boolean): void;
				public setDefaultDisplayHomeAsUpEnabled(enabled: boolean): void;
				public setDisplayShowTitleEnabled(boolean0: boolean): void;
				public doHide(fromSystem: boolean): void;
				public getElevation(): number;
				public setDisplayUseLogoEnabled(boolean0: boolean): void;
				public getSubtitle(): string;
				public removeAllTabs(): void;
				public onContentScrollStarted(): void;
				public setBackgroundDrawable(drawable0: globalAndroid.graphics.drawable.Drawable): void;
				public setDisplayOptions(int0: number, int1: number): void;
				public dispatchMenuVisibilityChanged(isVisible: boolean): void;
				public removeOnMenuVisibilityListener(onMenuVisibilityListener0: androidx.appcompat.app.ActionBar.OnMenuVisibilityListener): void;
				public setSplitBackgroundDrawable(d: globalAndroid.graphics.drawable.Drawable): void;
				public startActionMode(callback: androidx.appcompat.view.ActionMode.Callback): androidx.appcompat.view.ActionMode;
				public getHideOffset(): number;
				public getCustomView(): globalAndroid.view.View;
				/** @deprecated */
				public getNavigationMode(): number;
				public addOnMenuVisibilityListener(listener: androidx.appcompat.app.ActionBar.OnMenuVisibilityListener): void;
				public setDisplayShowHomeEnabled(boolean0: boolean): void;
				public setDisplayShowCustomEnabled(showCustom: boolean): void;
				public setHomeActionContentDescription(resId: number): void;
				public setLogo(resId: number): void;
				public getSelectedNavigationIndex(): number;
				public setLogo(logo: globalAndroid.graphics.drawable.Drawable): void;
				public setSubtitle(charSequence0: string): void;
				public setDisplayHomeAsUpEnabled(showHomeAsUp: boolean): void;
				public setTitle(resId: number): void;
				public setDisplayShowHomeEnabled(showHome: boolean): void;
				public isTitleTruncated(): boolean;
				public setHideOnContentScrollEnabled(hideOnContentScroll: boolean): void;
				public getTitle(): string;
				public hasIcon(): boolean;
				public setSubtitle(subtitle: string): void;
				public setIcon(icon: globalAndroid.graphics.drawable.Drawable): void;
				public hide(): void;
				public setDisplayHomeAsUpEnabled(boolean0: boolean): void;
				public setBackgroundDrawable(d: globalAndroid.graphics.drawable.Drawable): void;
				public onKeyShortcut(keyCode: number, ev: globalAndroid.view.KeyEvent): boolean;
				public addTab(tab: androidx.appcompat.app.ActionBar.Tab): void;
				/** @deprecated */
				public newTab(): androidx.appcompat.app.ActionBar.Tab;
				public setCustomView(view0: globalAndroid.view.View): void;
				public setHomeButtonEnabled(enable: boolean): void;
				public hasLogo(): boolean;
				public setDisplayUseLogoEnabled(useLogo: boolean): void;
				public removeTabAt(position: number): void;
				public setIcon(resId: number): void;
				public constructor();
				public setHomeButtonEnabled(enabled: boolean): void;
				public setLogo(int0: number): void;
				/** @deprecated */
				public addTab(tab0: androidx.appcompat.app.ActionBar.Tab, int1: number): void;
				public isShowing(): boolean;
				public newTab(): androidx.appcompat.app.ActionBar.Tab;
				public animateToMode(toActionMode: boolean): void;
				public setIcon(drawable0: globalAndroid.graphics.drawable.Drawable): void;
				public setCustomView(view0: globalAndroid.view.View, layoutParams1: androidx.appcompat.app.ActionBar.LayoutParams): void;
				public getThemedContext(): globalAndroid.content.Context;
				/** @deprecated */
				public removeTabAt(int0: number): void;
				public onConfigurationChanged(newConfig: globalAndroid.content.res.Configuration): void;
				public setElevation(elevation: number): void;
				public setCustomView(int0: number): void;
				public setShowHideAnimationEnabled(enabled: boolean): void;
				public getSelectedTab(): androidx.appcompat.app.ActionBar.Tab;
				public setLogo(drawable0: globalAndroid.graphics.drawable.Drawable): void;
				public setHomeAsUpIndicator(resId: number): void;
				/** @deprecated */
				public getSelectedTab(): androidx.appcompat.app.ActionBar.Tab;
				/** @deprecated */
				public getSelectedNavigationIndex(): number;
				public setCustomView(view: globalAndroid.view.View, layoutParams: androidx.appcompat.app.ActionBar.LayoutParams): void;
				public constructor(dialog: globalAndroid.app.Dialog);
				public constructor(activity: globalAndroid.app.Activity, overlayMode: boolean);
				public doShow(fromSystem: boolean): void;
				public setDisplayOptions(int0: number): void;
				public getNavigationMode(): number;
				public isHideOnContentScrollEnabled(): boolean;
				/** @deprecated */
				public addTab(tab0: androidx.appcompat.app.ActionBar.Tab, int1: number, boolean2: boolean): void;
				public onConfigurationChanged(config: globalAndroid.content.res.Configuration): void;
				/** @deprecated */
				public removeTab(tab0: androidx.appcompat.app.ActionBar.Tab): void;
				public getDisplayOptions(): number;
				/** @deprecated */
				public getTabCount(): number;
				public setStackedBackgroundDrawable(d: globalAndroid.graphics.drawable.Drawable): void;
				public setSelectedNavigationItem(position: number): void;
				public addTab(tab: androidx.appcompat.app.ActionBar.Tab, position: number, setSelected: boolean): void;
				public getTabAt(index: number): androidx.appcompat.app.ActionBar.Tab;
				public setTitle(title: string): void;
				public getTabCount(): number;
				public setCustomView(view: globalAndroid.view.View): void;
				public requestFocus(): boolean;
				public collapseActionView(): boolean;
				/** @deprecated */
				public setNavigationMode(int0: number): void;
				public hideForSystem(): void;
				public getNavigationItemCount(): number;
				/** @deprecated */
				public removeAllTabs(): void;
				public dispatchMenuVisibilityChanged(visible: boolean): void;
				public addTab(tab: androidx.appcompat.app.ActionBar.Tab, position: number): void;
				public setSubtitle(resId: number): void;
				public selectTab(tab: androidx.appcompat.app.ActionBar.Tab): void;
				public removeOnMenuVisibilityListener(listener: androidx.appcompat.app.ActionBar.OnMenuVisibilityListener): void;
				/** @deprecated */
				public addTab(tab0: androidx.appcompat.app.ActionBar.Tab): void;
				public setHomeActionContentDescription(description: string): void;
				public addTab(tab: androidx.appcompat.app.ActionBar.Tab, setSelected: boolean): void;
				public setNavigationMode(mode: number): void;
				public setWindowTitle(title: string): void;
				public setHideOffset(offset: number): void;
			}
			export module WindowDecorActionBar {
				export class ActionModeImpl extends androidx.appcompat.view.ActionMode implements androidx.appcompat.view.menu.MenuBuilder.Callback {
					public static class: java.lang.Class<androidx.appcompat.app.WindowDecorActionBar.ActionModeImpl>;
					public setSubtitle(int0: number): void;
					public getTitle(): string;
					public getMenuInflater(): globalAndroid.view.MenuInflater;
					public setTitle(int0: number): void;
					public getCustomView(): globalAndroid.view.View;
					public dispatchOnCreate(): boolean;
					public onMenuItemSelected(menu: androidx.appcompat.view.menu.MenuBuilder, item: globalAndroid.view.MenuItem): boolean;
					public onSubMenuSelected(subMenu: androidx.appcompat.view.menu.SubMenuBuilder): boolean;
					public setTitleOptionalHint(titleOptional: boolean): void;
					public constructor();
					public onMenuModeChange(menu: androidx.appcompat.view.menu.MenuBuilder): void;
					public isTitleOptional(): boolean;
					public setSubtitle(subtitle: string): void;
					public setTitle(charSequence0: string): void;
					public getMenu(): globalAndroid.view.Menu;
					public setCustomView(view: globalAndroid.view.View): void;
					public finish(): void;
					public constructor(this0: androidx.appcompat.app.WindowDecorActionBar, context: globalAndroid.content.Context, callback: androidx.appcompat.view.ActionMode.Callback);
					public setTitle(resId: number): void;
					public onCloseMenu(menu: androidx.appcompat.view.menu.MenuBuilder, allMenusAreClosing: boolean): void;
					public getSubtitle(): string;
					public setSubtitle(resId: number): void;
					public onCloseSubMenu(menu: androidx.appcompat.view.menu.SubMenuBuilder): void;
					public setTitle(title: string): void;
					public setCustomView(view0: globalAndroid.view.View): void;
					public invalidate(): void;
					public setSubtitle(charSequence0: string): void;
				}
				export class TabImpl extends androidx.appcompat.app.ActionBar.Tab {
					public static class: java.lang.Class<androidx.appcompat.app.WindowDecorActionBar.TabImpl>;
					public setContentDescription(resId: number): androidx.appcompat.app.ActionBar.Tab;
					public getCustomView(): globalAndroid.view.View;
					public setCustomView(view0: globalAndroid.view.View): androidx.appcompat.app.ActionBar.Tab;
					public getTag(): any;
					public setCustomView(layoutResId: number): androidx.appcompat.app.ActionBar.Tab;
					public setContentDescription(contentDesc: string): androidx.appcompat.app.ActionBar.Tab;
					public setTag(object0: any): androidx.appcompat.app.ActionBar.Tab;
					public setIcon(int0: number): androidx.appcompat.app.ActionBar.Tab;
					public getIcon(): globalAndroid.graphics.drawable.Drawable;
					public setText(resId: number): androidx.appcompat.app.ActionBar.Tab;
					public setTabListener(callback: androidx.appcompat.app.ActionBar.TabListener): androidx.appcompat.app.ActionBar.Tab;
					public setPosition(position: number): void;
					public setIcon(drawable0: globalAndroid.graphics.drawable.Drawable): androidx.appcompat.app.ActionBar.Tab;
					public getContentDescription(): string;
					public getCallback(): androidx.appcompat.app.ActionBar.TabListener;
					public setIcon(resId: number): androidx.appcompat.app.ActionBar.Tab;
					public constructor();
					public setText(text: string): androidx.appcompat.app.ActionBar.Tab;
					public setTag(tag: any): androidx.appcompat.app.ActionBar.Tab;
					public setTabListener(tabListener0: androidx.appcompat.app.ActionBar.TabListener): androidx.appcompat.app.ActionBar.Tab;
					public constructor(this0: androidx.appcompat.app.WindowDecorActionBar);
					public setCustomView(view: globalAndroid.view.View): androidx.appcompat.app.ActionBar.Tab;
					public setText(int0: number): androidx.appcompat.app.ActionBar.Tab;
					public getText(): string;
					public setContentDescription(int0: number): androidx.appcompat.app.ActionBar.Tab;
					public select(): void;
					public setText(charSequence0: string): androidx.appcompat.app.ActionBar.Tab;
					public setCustomView(int0: number): androidx.appcompat.app.ActionBar.Tab;
					public setContentDescription(charSequence0: string): androidx.appcompat.app.ActionBar.Tab;
					public setIcon(icon: globalAndroid.graphics.drawable.Drawable): androidx.appcompat.app.ActionBar.Tab;
					public getPosition(): number;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module graphics {
			export module drawable {
				export class DrawerArrowDrawable extends globalAndroid.graphics.drawable.Drawable {
					public static class: java.lang.Class<androidx.appcompat.graphics.drawable.DrawerArrowDrawable>;
					public static ARROW_DIRECTION_LEFT: number;
					public static ARROW_DIRECTION_RIGHT: number;
					public static ARROW_DIRECTION_START: number;
					public static ARROW_DIRECTION_END: number;
					public getArrowShaftLength(): number;
					public setColorFilter(colorFilter0: globalAndroid.graphics.ColorFilter): void;
					public getDirection(): number;
					public getGapSize(): number;
					public draw(canvas: globalAndroid.graphics.Canvas): void;
					public getIntrinsicWidth(): number;
					/** @deprecated */
					public setColorFilter(color: number, mode: globalAndroid.graphics.PorterDuff.Mode): void;
					public setVerticalMirror(verticalMirror: boolean): void;
					public setBarLength(length: number): void;
					/** @deprecated */
					public getOpacity(): number;
					public constructor();
					public setArrowHeadLength(length: number): void;
					public getBarThickness(): number;
					public draw(canvas0: globalAndroid.graphics.Canvas): void;
					public setAlpha(int0: number): void;
					public getOpacity(): number;
					public setProgress(progress: number): void;
					public setSpinEnabled(enabled: boolean): void;
					public setColor(color: number): void;
					public getColor(): number;
					public setArrowShaftLength(length: number): void;
					public getBarLength(): number;
					public getIntrinsicHeight(): number;
					public getArrowHeadLength(): number;
					public setColorFilter(colorFilter: globalAndroid.graphics.ColorFilter): void;
					public getPaint(): globalAndroid.graphics.Paint;
					public getProgress(): number;
					public setDirection(direction: number): void;
					public isSpinEnabled(): boolean;
					public setGapSize(gap: number): void;
					public constructor(context: globalAndroid.content.Context);
					public setAlpha(alpha: number): void;
					public setBarThickness(width: number): void;
				}
				export module DrawerArrowDrawable {
					export class ArrowDirection extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<androidx.appcompat.graphics.drawable.DrawerArrowDrawable.ArrowDirection>;
						/**
						 * Constructs a new instance of the androidx.appcompat.graphics.drawable.DrawerArrowDrawable() when extending the interface class.
						 */
						public constructor(implementation: {
							equals(object0: any): boolean;
							hashCode(): number;
							toString(): string;
							annotationType(): java.lang.Class<any>;
						});
						public constructor();
						public equals(obj: any): boolean;
						public hashCode(): number;
						public toString(): string;
						public annotationType(): java.lang.Class<any>;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module text {
			export class AllCapsTransformationMethod extends java.lang.Object implements globalAndroid.text.method.TransformationMethod {
				public static class: java.lang.Class<androidx.appcompat.text.AllCapsTransformationMethod>;
				public constructor(context: globalAndroid.content.Context);
				public onFocusChanged(view: globalAndroid.view.View, sourceText: string, focused: boolean, direction: number, previouslyFocusedRect: globalAndroid.graphics.Rect): void;
				public getTransformation(source: string, view: globalAndroid.view.View): string;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export class ActionBarPolicy extends java.lang.Object {
				public static class: java.lang.Class<androidx.appcompat.view.ActionBarPolicy>;
				public showsOverflowMenuButton(): boolean;
				public enableHomeButtonByDefault(): boolean;
				public getStackedTabMaxWidth(): number;
				public hasEmbeddedTabs(): boolean;
				public getMaxActionButtons(): number;
				public getEmbeddedMenuWidthLimit(): number;
				public static get(context: globalAndroid.content.Context): androidx.appcompat.view.ActionBarPolicy;
				public getTabContainerHeight(): number;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export abstract class ActionMode extends java.lang.Object {
				public static class: java.lang.Class<androidx.appcompat.view.ActionMode>;
				public setSubtitle(charSequence0: string): void;
				public isUiFocusable(): boolean;
				public setTitle(charSequence0: string): void;
				public setTitle(int0: number): void;
				public finish(): void;
				public getMenuInflater(): globalAndroid.view.MenuInflater;
				public setTag(tag: any): void;
				public getCustomView(): globalAndroid.view.View;
				public getMenu(): globalAndroid.view.Menu;
				public getTitle(): string;
				public constructor();
				public isTitleOptional(): boolean;
				public setTitleOptionalHint(titleOptional: boolean): void;
				public invalidate(): void;
				public getTag(): any;
				public setSubtitle(int0: number): void;
				public setCustomView(view0: globalAndroid.view.View): void;
				public getSubtitle(): string;
				public getTitleOptionalHint(): boolean;
			}
			export module ActionMode {
				export class Callback extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.view.ActionMode.Callback>;
					/**
					 * Constructs a new instance of the androidx.appcompat.view.ActionMode() when extending the interface class.
					 */
					public constructor(implementation: {
						onCreateActionMode(actionMode0: androidx.appcompat.view.ActionMode, menu1: globalAndroid.view.Menu): boolean;
						onPrepareActionMode(actionMode0: androidx.appcompat.view.ActionMode, menu1: globalAndroid.view.Menu): boolean;
						onActionItemClicked(actionMode0: androidx.appcompat.view.ActionMode, menuItem1: globalAndroid.view.MenuItem): boolean;
						onDestroyActionMode(actionMode0: androidx.appcompat.view.ActionMode): void;
					});
					public constructor();
					public onActionItemClicked(actionMode0: androidx.appcompat.view.ActionMode, menuItem1: globalAndroid.view.MenuItem): boolean;
					public onCreateActionMode(actionMode0: androidx.appcompat.view.ActionMode, menu1: globalAndroid.view.Menu): boolean;
					public onDestroyActionMode(actionMode0: androidx.appcompat.view.ActionMode): void;
					public onPrepareActionMode(actionMode0: androidx.appcompat.view.ActionMode, menu1: globalAndroid.view.Menu): boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export class CollapsibleActionView extends java.lang.Object {
				public static class: java.lang.Class<androidx.appcompat.view.CollapsibleActionView>;
				/**
				 * Constructs a new instance of the androidx.appcompat.view.CollapsibleActionView interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onActionViewExpanded(): void;
					onActionViewCollapsed(): void;
				});
				public constructor();
				public onActionViewExpanded(): void;
				public onActionViewCollapsed(): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export class ContextThemeWrapper extends globalAndroid.content.ContextWrapper {
				public static class: java.lang.Class<androidx.appcompat.view.ContextThemeWrapper>;
				public attachBaseContext(newBase: globalAndroid.content.Context): void;
				public applyOverrideConfiguration(overrideConfiguration: globalAndroid.content.res.Configuration): void;
				public constructor(base: globalAndroid.content.Context, themeResId: number);
				public attachBaseContext(base: globalAndroid.content.Context): void;
				public getResources(): globalAndroid.content.res.Resources;
				public setTheme(resid: number): void;
				public getTheme(): globalAndroid.content.res.Resources.Theme;
				public constructor();
				public constructor(base: globalAndroid.content.Context);
				public getThemeResId(): number;
				public onApplyThemeResource(theme: globalAndroid.content.res.Resources.Theme, resid: number, first: boolean): void;
				public getSystemService(name: string): any;
				public constructor(base: globalAndroid.content.Context, theme: globalAndroid.content.res.Resources.Theme);
				public getSystemService(serviceClass: java.lang.Class<any>): any;
				public getAssets(): globalAndroid.content.res.AssetManager;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export class StandaloneActionMode extends androidx.appcompat.view.ActionMode implements androidx.appcompat.view.menu.MenuBuilder.Callback {
				public static class: java.lang.Class<androidx.appcompat.view.StandaloneActionMode>;
				public onSubMenuSelected(subMenu: androidx.appcompat.view.menu.SubMenuBuilder): boolean;
				public isUiFocusable(): boolean;
				public setTitle(charSequence0: string): void;
				public finish(): void;
				public getMenuInflater(): globalAndroid.view.MenuInflater;
				public getCustomView(): globalAndroid.view.View;
				public constructor();
				public isTitleOptional(): boolean;
				public setTitleOptionalHint(titleOptional: boolean): void;
				public onCloseSubMenu(menu: androidx.appcompat.view.menu.SubMenuBuilder): void;
				public setSubtitle(int0: number): void;
				public constructor(context: globalAndroid.content.Context, view: androidx.appcompat.widget.ActionBarContextView, callback: androidx.appcompat.view.ActionMode.Callback, isFocusable: boolean);
				public setTitle(title: string): void;
				public onMenuItemSelected(menu: androidx.appcompat.view.menu.MenuBuilder, item: globalAndroid.view.MenuItem): boolean;
				public setSubtitle(charSequence0: string): void;
				public setCustomView(view: globalAndroid.view.View): void;
				public setTitle(resId: number): void;
				public setTitle(int0: number): void;
				public setSubtitle(resId: number): void;
				public getMenu(): globalAndroid.view.Menu;
				public getTitle(): string;
				public setSubtitle(subtitle: string): void;
				public invalidate(): void;
				public setCustomView(view0: globalAndroid.view.View): void;
				public getSubtitle(): string;
				public onCloseMenu(menu: androidx.appcompat.view.menu.MenuBuilder, allMenusAreClosing: boolean): void;
				public onMenuModeChange(menu: androidx.appcompat.view.menu.MenuBuilder): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export class SupportActionModeWrapper extends globalAndroid.view.ActionMode {
				public static class: java.lang.Class<androidx.appcompat.view.SupportActionModeWrapper>;
				public setSubtitle(charSequence0: string): void;
				public setCustomView(view: globalAndroid.view.View): void;
				public constructor(context: globalAndroid.content.Context, supportActionMode: androidx.appcompat.view.ActionMode);
				public setTitle(charSequence0: string): void;
				public setTitle(resId: number): void;
				public setTitle(int0: number): void;
				public finish(): void;
				public setSubtitle(resId: number): void;
				public getMenuInflater(): globalAndroid.view.MenuInflater;
				public setTag(tag: any): void;
				public getCustomView(): globalAndroid.view.View;
				public getMenu(): globalAndroid.view.Menu;
				public getTitle(): string;
				public constructor();
				public setSubtitle(subtitle: string): void;
				public isTitleOptional(): boolean;
				public setTitleOptionalHint(titleOptional: boolean): void;
				public invalidate(): void;
				public getTag(): any;
				public setSubtitle(int0: number): void;
				public setCustomView(view0: globalAndroid.view.View): void;
				public getSubtitle(): string;
				public getTitleOptionalHint(): boolean;
				public setTitle(title: string): void;
			}
			export module SupportActionModeWrapper {
				export class CallbackWrapper extends java.lang.Object implements androidx.appcompat.view.ActionMode.Callback {
					public static class: java.lang.Class<androidx.appcompat.view.SupportActionModeWrapper.CallbackWrapper>;
					public getActionModeWrapper(mode: androidx.appcompat.view.ActionMode): globalAndroid.view.ActionMode;
					public onCreateActionMode(mode: androidx.appcompat.view.ActionMode, menu: globalAndroid.view.Menu): boolean;
					public constructor(context: globalAndroid.content.Context, supportCallback: globalAndroid.view.ActionMode.Callback);
					public onDestroyActionMode(mode: androidx.appcompat.view.ActionMode): void;
					public onPrepareActionMode(mode: androidx.appcompat.view.ActionMode, menu: globalAndroid.view.Menu): boolean;
					public onActionItemClicked(mode: androidx.appcompat.view.ActionMode, item: globalAndroid.view.MenuItem): boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export class SupportMenuInflater extends globalAndroid.view.MenuInflater {
				public static class: java.lang.Class<androidx.appcompat.view.SupportMenuInflater>;
				public constructor(context: globalAndroid.content.Context);
				public inflate(menuRes: number, menu: globalAndroid.view.Menu): void;
			}
			export module SupportMenuInflater {
				export class InflatedOnMenuItemClickListener extends java.lang.Object implements globalAndroid.view.MenuItem.OnMenuItemClickListener {
					public static class: java.lang.Class<androidx.appcompat.view.SupportMenuInflater.InflatedOnMenuItemClickListener>;
					public constructor(realOwner: any, methodName: string);
					public onMenuItemClick(item: globalAndroid.view.MenuItem): boolean;
				}
				export class MenuState extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.view.SupportMenuInflater.MenuState>;
					public resetGroup(): void;
					public hasAddedItem(): boolean;
					public constructor(param0: androidx.appcompat.view.SupportMenuInflater, menu: globalAndroid.view.Menu);
					public addSubMenuItem(): globalAndroid.view.SubMenu;
					public readGroup(attrs: globalAndroid.util.AttributeSet): void;
					public readItem(attrs: globalAndroid.util.AttributeSet): void;
					public addItem(): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export class ViewPropertyAnimatorCompatSet extends java.lang.Object {
				public static class: java.lang.Class<androidx.appcompat.view.ViewPropertyAnimatorCompatSet>;
				public play(animator: androidx.core.view.ViewPropertyAnimatorCompat): androidx.appcompat.view.ViewPropertyAnimatorCompatSet;
				public setInterpolator(interpolator: globalAndroid.view.animation.Interpolator): androidx.appcompat.view.ViewPropertyAnimatorCompatSet;
				public start(): void;
				public cancel(): void;
				public playSequentially(anim1: androidx.core.view.ViewPropertyAnimatorCompat, anim2: androidx.core.view.ViewPropertyAnimatorCompat): androidx.appcompat.view.ViewPropertyAnimatorCompatSet;
				public setDuration(duration: number): androidx.appcompat.view.ViewPropertyAnimatorCompatSet;
				public constructor();
				public setListener(listener: androidx.core.view.ViewPropertyAnimatorListener): androidx.appcompat.view.ViewPropertyAnimatorCompatSet;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export class WindowCallbackWrapper extends java.lang.Object implements globalAndroid.view.Window.Callback {
				public static class: java.lang.Class<androidx.appcompat.view.WindowCallbackWrapper>;
				public onMenuOpened(featureId: number, menu: globalAndroid.view.Menu): boolean;
				public onWindowAttributesChanged(attrs: globalAndroid.view.WindowManager.LayoutParams): void;
				public dispatchTouchEvent(event: globalAndroid.view.MotionEvent): boolean;
				public onWindowStartingActionMode(callback: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
				public onCreatePanelMenu(featureId: number, menu: globalAndroid.view.Menu): boolean;
				public onActionModeFinished(mode: globalAndroid.view.ActionMode): void;
				public onWindowFocusChanged(hasFocus: boolean): void;
				public dispatchKeyEvent(event: globalAndroid.view.KeyEvent): boolean;
				public onProvideKeyboardShortcuts(data: java.util.List<any>, menu: globalAndroid.view.Menu, deviceId: number): void;
				public dispatchPopulateAccessibilityEvent(event: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
				public onWindowStartingActionMode(callback: globalAndroid.view.ActionMode.Callback, type: number): globalAndroid.view.ActionMode;
				public dispatchGenericMotionEvent(event: globalAndroid.view.MotionEvent): boolean;
				public onPanelClosed(featureId: number, menu: globalAndroid.view.Menu): void;
				public onCreatePanelView(featureId: number): globalAndroid.view.View;
				public onPreparePanel(featureId: number, view: globalAndroid.view.View, menu: globalAndroid.view.Menu): boolean;
				public onActionModeStarted(mode: globalAndroid.view.ActionMode): void;
				public onContentChanged(): void;
				public onSearchRequested(searchEvent: any): boolean;
				public onMenuItemSelected(featureId: number, item: globalAndroid.view.MenuItem): boolean;
				public getWrapped(): globalAndroid.view.Window.Callback;
				public dispatchTrackballEvent(event: globalAndroid.view.MotionEvent): boolean;
				public onDetachedFromWindow(): void;
				public dispatchKeyShortcutEvent(event: globalAndroid.view.KeyEvent): boolean;
				public onPointerCaptureChanged(hasCapture: boolean): void;
				public onSearchRequested(): boolean;
				public constructor(wrapped: globalAndroid.view.Window.Callback);
				public onAttachedToWindow(): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export class ActionMenuItem extends java.lang.Object implements androidx.core.internal.view.SupportMenuItem {
					public static class: java.lang.Class<androidx.appcompat.view.menu.ActionMenuItem>;
					public getTitle(): string;
					public setActionProvider(actionProvider: globalAndroid.view.ActionProvider): globalAndroid.view.MenuItem;
					public setTitleCondensed(title: string): globalAndroid.view.MenuItem;
					public getGroupId(): number;
					public hasSubMenu(): boolean;
					public setEnabled(enabled: boolean): globalAndroid.view.MenuItem;
					public setIconTintBlendMode(blendMode: globalAndroid.graphics.BlendMode): globalAndroid.view.MenuItem;
					public getContentDescription(): string;
					public setTooltipText(tooltipText: string): globalAndroid.view.MenuItem;
					public setNumericShortcut(numericChar: string, numericModifiers: number): globalAndroid.view.MenuItem;
					public setChecked(checked: boolean): globalAndroid.view.MenuItem;
					public getTitleCondensed(): string;
					public setActionView(view0: globalAndroid.view.View): globalAndroid.view.MenuItem;
					public isEnabled(): boolean;
					public setActionView(actionView: globalAndroid.view.View): androidx.core.internal.view.SupportMenuItem;
					public getSupportActionProvider(): androidx.core.view.ActionProvider;
					public setIconTintMode(iconTintMode: globalAndroid.graphics.PorterDuff.Mode): globalAndroid.view.MenuItem;
					public setAlphabeticShortcut(alphaChar: string): globalAndroid.view.MenuItem;
					public getSubMenu(): globalAndroid.view.SubMenu;
					public setOnMenuItemClickListener(menuItemClickListener: globalAndroid.view.MenuItem.OnMenuItemClickListener): globalAndroid.view.MenuItem;
					public getIntent(): globalAndroid.content.Intent;
					public setTitle(title: number): globalAndroid.view.MenuItem;
					public requiresActionButton(): boolean;
					public setIconTintMode(tintMode: globalAndroid.graphics.PorterDuff.Mode): globalAndroid.view.MenuItem;
					public setAlphabeticShortcut(alphaChar: string, alphaModifiers: number): globalAndroid.view.MenuItem;
					public getMenuInfo(): globalAndroid.view.ContextMenu.ContextMenuInfo;
					public invoke(): boolean;
					public getNumericModifiers(): number;
					public isVisible(): boolean;
					public setShortcut(numericChar: string, alphaChar: string, numericModifiers: number, alphaModifiers: number): globalAndroid.view.MenuItem;
					public setActionView(resId: number): androidx.core.internal.view.SupportMenuItem;
					public getAlphabeticModifiers(): number;
					public setIntent(intent: globalAndroid.content.Intent): globalAndroid.view.MenuItem;
					public collapseActionView(): boolean;
					public setSupportActionProvider(actionProvider: androidx.core.view.ActionProvider): androidx.core.internal.view.SupportMenuItem;
					public getTooltipText(): string;
					public expandActionView(): boolean;
					public setIconTintList(iconTintList: globalAndroid.content.res.ColorStateList): globalAndroid.view.MenuItem;
					public getIconTintBlendMode(): globalAndroid.graphics.BlendMode;
					public getNumericShortcut(): string;
					public setShowAsAction(show: number): void;
					public setTooltipText(tooltipText: string): androidx.core.internal.view.SupportMenuItem;
					public isActionViewExpanded(): boolean;
					public requiresOverflow(): boolean;
					public setIcon(icon: globalAndroid.graphics.drawable.Drawable): globalAndroid.view.MenuItem;
					public setContentDescription(contentDescription: string): globalAndroid.view.MenuItem;
					public getAlphabeticShortcut(): string;
					public setTitle(title: string): globalAndroid.view.MenuItem;
					public getIcon(): globalAndroid.graphics.drawable.Drawable;
					public setShortcut(numericChar: string, alphaChar: string): globalAndroid.view.MenuItem;
					public setNumericShortcut(numericChar: string): globalAndroid.view.MenuItem;
					public setContentDescription(contentDescription: string): androidx.core.internal.view.SupportMenuItem;
					public getIconTintMode(): globalAndroid.graphics.PorterDuff.Mode;
					public getOrder(): number;
					public getActionProvider(): globalAndroid.view.ActionProvider;
					public isCheckable(): boolean;
					public setOnActionExpandListener(listener: globalAndroid.view.MenuItem.OnActionExpandListener): globalAndroid.view.MenuItem;
					public isChecked(): boolean;
					public setShowAsActionFlags(int0: number): globalAndroid.view.MenuItem;
					public setActionView(int0: number): globalAndroid.view.MenuItem;
					public constructor(context: globalAndroid.content.Context, group: number, id: number, categoryOrder: number, ordering: number, title: string);
					public setIcon(iconRes: number): globalAndroid.view.MenuItem;
					public getItemId(): number;
					public getIconTintList(): globalAndroid.content.res.ColorStateList;
					public setVisible(visible: boolean): globalAndroid.view.MenuItem;
					public setIconTintList(tint: globalAndroid.content.res.ColorStateList): globalAndroid.view.MenuItem;
					public getActionView(): globalAndroid.view.View;
					public setExclusiveCheckable(exclusive: boolean): androidx.appcompat.view.menu.ActionMenuItem;
					public setShowAsActionFlags(actionEnum: number): androidx.core.internal.view.SupportMenuItem;
					public setCheckable(checkable: boolean): globalAndroid.view.MenuItem;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export class ActionMenuItemView extends androidx.appcompat.widget.AppCompatTextView implements androidx.appcompat.view.menu.MenuView.ItemView, globalAndroid.view.View.OnClickListener, androidx.appcompat.widget.ActionMenuView.ActionMenuChildView {
					public static class: java.lang.Class<androidx.appcompat.view.menu.ActionMenuItemView>;
					public setCheckable(checkable: boolean): void;
					public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
					public showsIcon(): boolean;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
					public onClick(v: globalAndroid.view.View): void;
					public setSupportCompoundDrawablesTintList(tintList: globalAndroid.content.res.ColorStateList): void;
					public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public setPopupCallback(popupCallback: androidx.appcompat.view.menu.ActionMenuItemView.PopupCallback): void;
					public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
					public initialize(itemData: androidx.appcompat.view.menu.MenuItemImpl, menuType: number): void;
					public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
					public setAutoSizeTextTypeWithDefaults(autoSizeTextType: number): void;
					public setShortcut(showShortcut: boolean, shortcutKey: string): void;
					public setAutoSizeTextTypeUniformWithPresetSizes(presetSizes: native.Array<number>, unit: number): void;
					public getSupportBackgroundTintList(): globalAndroid.content.res.ColorStateList;
					public getSupportBackgroundTintMode(): globalAndroid.graphics.PorterDuff.Mode;
					public onConfigurationChanged(newConfig: globalAndroid.content.res.Configuration): void;
					public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
					public getSupportCompoundDrawablesTintMode(): globalAndroid.graphics.PorterDuff.Mode;
					public setAutoSizeTextTypeUniformWithConfiguration(autoSizeMinTextSize: number, autoSizeMaxTextSize: number, autoSizeStepGranularity: number, unit: number): void;
					public setSupportCompoundDrawablesTintMode(tintMode: globalAndroid.graphics.PorterDuff.Mode): void;
					public needsDividerAfter(): boolean;
					public setEnabled(enabled: boolean): void;
					public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
					public setChecked(checked: boolean): void;
					public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public constructor(context: globalAndroid.content.Context);
					public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
					public getAutoSizeMinTextSize(): number;
					public getItemData(): androidx.appcompat.view.menu.MenuItemImpl;
					public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyle: number);
					public getAutoSizeTextAvailableSizes(): native.Array<number>;
					public sendAccessibilityEvent(eventType: number): void;
					public getAutoSizeStepGranularity(): number;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
					public setSupportBackgroundTintList(tint: globalAndroid.content.res.ColorStateList): void;
					public prefersCondensedTitle(): boolean;
					public hasText(): boolean;
					public onRestoreInstanceState(state: globalAndroid.os.Parcelable): void;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
					public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
					public setItemInvoker(invoker: androidx.appcompat.view.menu.MenuBuilder.ItemInvoker): void;
					public setSupportBackgroundTintMode(tintMode: globalAndroid.graphics.PorterDuff.Mode): void;
					public onPreDraw(): boolean;
					public getAutoSizeTextType(): number;
					public setPadding(left: number, top: number, right: number, bottom: number): void;
					public onTouchEvent(event: globalAndroid.view.MotionEvent): boolean;
					public setPadding(l: number, t: number, r: number, b: number): void;
					public getAutoSizeMaxTextSize(): number;
					public setExpandedFormat(expandedFormat: boolean): void;
					public setTitle(title: string): void;
					public onTouchEvent(e: globalAndroid.view.MotionEvent): boolean;
					public getSupportCompoundDrawablesTintList(): globalAndroid.content.res.ColorStateList;
					public setIcon(icon: globalAndroid.graphics.drawable.Drawable): void;
					public needsDividerBefore(): boolean;
				}
				export module ActionMenuItemView {
					export class ActionMenuItemForwardingListener extends androidx.appcompat.widget.ForwardingListener {
						public static class: java.lang.Class<androidx.appcompat.view.menu.ActionMenuItemView.ActionMenuItemForwardingListener>;
						public onTouch(v: globalAndroid.view.View, event: globalAndroid.view.MotionEvent): boolean;
						public constructor(src: globalAndroid.view.View);
						public onForwardingStarted(): boolean;
						public getPopup(): androidx.appcompat.view.menu.ShowableListMenu;
						public onViewAttachedToWindow(v: globalAndroid.view.View): void;
						public constructor(param0: androidx.appcompat.view.menu.ActionMenuItemView);
						public onViewDetachedFromWindow(v: globalAndroid.view.View): void;
					}
					export abstract class PopupCallback extends java.lang.Object {
						public static class: java.lang.Class<androidx.appcompat.view.menu.ActionMenuItemView.PopupCallback>;
						public constructor();
						public getPopup(): androidx.appcompat.view.menu.ShowableListMenu;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export abstract class BaseMenuPresenter extends java.lang.Object implements androidx.appcompat.view.menu.MenuPresenter {
					public static class: java.lang.Class<androidx.appcompat.view.menu.BaseMenuPresenter>;
					public mSystemContext: globalAndroid.content.Context;
					public mContext: globalAndroid.content.Context;
					public mMenu: androidx.appcompat.view.menu.MenuBuilder;
					public mSystemInflater: globalAndroid.view.LayoutInflater;
					public mInflater: globalAndroid.view.LayoutInflater;
					public mMenuView: androidx.appcompat.view.menu.MenuView;
					public constructor(context: globalAndroid.content.Context, menuLayoutRes: number, itemLayoutRes: number);
					public onRestoreInstanceState(parcelable0: globalAndroid.os.Parcelable): void;
					public filterLeftoverView(parent: globalAndroid.view.ViewGroup, childIndex: number): boolean;
					public getItemView(item: androidx.appcompat.view.menu.MenuItemImpl, convertView: globalAndroid.view.View, parent: globalAndroid.view.ViewGroup): globalAndroid.view.View;
					public shouldIncludeItem(childIndex: number, item: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public collapseItemActionView(menu: androidx.appcompat.view.menu.MenuBuilder, item: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public getId(): number;
					public createItemView(parent: globalAndroid.view.ViewGroup): androidx.appcompat.view.menu.MenuView.ItemView;
					public onSubMenuSelected(menu: androidx.appcompat.view.menu.SubMenuBuilder): boolean;
					public setCallback(cb: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
					public getMenuView(root: globalAndroid.view.ViewGroup): androidx.appcompat.view.menu.MenuView;
					public updateMenuView(cleared: boolean): void;
					public expandItemActionView(menu: androidx.appcompat.view.menu.MenuBuilder, item: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public onCloseMenu(menu: androidx.appcompat.view.menu.MenuBuilder, allMenusAreClosing: boolean): void;
					public addItemView(itemView: globalAndroid.view.View, childIndex: number): void;
					public setId(id: number): void;
					public bindItemView(menuItemImpl0: androidx.appcompat.view.menu.MenuItemImpl, itemView1: androidx.appcompat.view.menu.MenuView.ItemView): void;
					public onSaveInstanceState(): globalAndroid.os.Parcelable;
					public getCallback(): androidx.appcompat.view.menu.MenuPresenter.Callback;
					public initForMenu(context: globalAndroid.content.Context, menu: androidx.appcompat.view.menu.MenuBuilder): void;
					public flagActionItems(): boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export abstract class BaseMenuWrapper extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.view.menu.BaseMenuWrapper<any>>;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export class CascadingMenuPopup extends androidx.appcompat.view.menu.MenuPopup implements androidx.appcompat.view.menu.MenuPresenter, globalAndroid.view.View.OnKeyListener, globalAndroid.widget.PopupWindow.OnDismissListener {
					public static class: java.lang.Class<androidx.appcompat.view.menu.CascadingMenuPopup>;
					public setHorizontalOffset(int0: number): void;
					public setGravity(int0: number): void;
					public isShowing(): boolean;
					public collapseItemActionView(menu: androidx.appcompat.view.menu.MenuBuilder, item: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public setGravity(dropDownGravity: number): void;
					public onSubMenuSelected(subMenu: androidx.appcompat.view.menu.SubMenuBuilder): boolean;
					public onDismiss(): void;
					public closeMenuOnSubMenuOpened(): boolean;
					public addMenu(menu: androidx.appcompat.view.menu.MenuBuilder): void;
					public getMenuView(root: globalAndroid.view.ViewGroup): androidx.appcompat.view.menu.MenuView;
					public onRestoreInstanceState(state: globalAndroid.os.Parcelable): void;
					public expandItemActionView(menu: androidx.appcompat.view.menu.MenuBuilder, item: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public setHorizontalOffset(x: number): void;
					public setShowTitle(boolean0: boolean): void;
					public flagActionItems(): boolean;
					public constructor(context: globalAndroid.content.Context, anchor: globalAndroid.view.View, popupStyleAttr: number, popupStyleRes: number, overflowOnly: boolean);
					public onItemClick(parent: globalAndroid.widget.AdapterView<any>, view: globalAndroid.view.View, position: number, id: number): void;
					public onKey(v: globalAndroid.view.View, keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public addMenu(menuBuilder0: androidx.appcompat.view.menu.MenuBuilder): void;
					public show(): void;
					public setOnDismissListener(listener: globalAndroid.widget.PopupWindow.OnDismissListener): void;
					public getListView(): globalAndroid.widget.ListView;
					public getId(): number;
					public setVerticalOffset(y: number): void;
					public setOnDismissListener(onDismissListener0: globalAndroid.widget.PopupWindow.OnDismissListener): void;
					public setCallback(cb: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
					public updateMenuView(cleared: boolean): void;
					public setVerticalOffset(int0: number): void;
					public onCloseMenu(menu: androidx.appcompat.view.menu.MenuBuilder, allMenusAreClosing: boolean): void;
					public setAnchorView(anchor: globalAndroid.view.View): void;
					public setForceShowIcon(boolean0: boolean): void;
					public setForceShowIcon(forceShow: boolean): void;
					public onSaveInstanceState(): globalAndroid.os.Parcelable;
					public dismiss(): void;
					public setAnchorView(view0: globalAndroid.view.View): void;
					public setShowTitle(showTitle: boolean): void;
					public initForMenu(context: globalAndroid.content.Context, menu: androidx.appcompat.view.menu.MenuBuilder): void;
				}
				export module CascadingMenuPopup {
					export class CascadingMenuInfo extends java.lang.Object {
						public static class: java.lang.Class<androidx.appcompat.view.menu.CascadingMenuPopup.CascadingMenuInfo>;
						public window: androidx.appcompat.widget.MenuPopupWindow;
						public menu: androidx.appcompat.view.menu.MenuBuilder;
						public position: number;
						public getListView(): globalAndroid.widget.ListView;
						public constructor(window: androidx.appcompat.widget.MenuPopupWindow, menu: androidx.appcompat.view.menu.MenuBuilder, position: number);
					}
					export class HorizPosition extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<androidx.appcompat.view.menu.CascadingMenuPopup.HorizPosition>;
						/**
						 * Constructs a new instance of the androidx.appcompat.view.menu.CascadingMenuPopup() when extending the interface class.
						 */
						public constructor(implementation: {
							equals(object0: any): boolean;
							hashCode(): number;
							toString(): string;
							annotationType(): java.lang.Class<any>;
						});
						public constructor();
						public equals(obj: any): boolean;
						public hashCode(): number;
						public toString(): string;
						public annotationType(): java.lang.Class<any>;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export class ExpandedMenuView extends globalAndroid.widget.ListView implements androidx.appcompat.view.menu.MenuBuilder.ItemInvoker, androidx.appcompat.view.menu.MenuView, globalAndroid.widget.AdapterView.OnItemClickListener {
					public static class: java.lang.Class<androidx.appcompat.view.menu.ExpandedMenuView>;
					public showContextMenuForChild(originalView: globalAndroid.view.View, x: number, y: number): boolean;
					public requestTransparentRegion(child: globalAndroid.view.View): void;
					public childDrawableStateChanged(child: globalAndroid.view.View): void;
					public onFilterComplete(count: number): void;
					public onNestedFling(target: globalAndroid.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
					public isLayoutRequested(): boolean;
					/** @deprecated */
					public invalidateChild(child: globalAndroid.view.View, dirty: globalAndroid.graphics.Rect): void;
					public focusableViewAvailable(v: globalAndroid.view.View): void;
					public focusSearch(direction: number): globalAndroid.view.View;
					public isTextDirectionResolved(): boolean;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
					public isLayoutDirectionResolved(): boolean;
					public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public showContextMenuForChild(originalView: globalAndroid.view.View): boolean;
					public onTouchModeChanged(isInTouchMode: boolean): void;
					public onNestedScroll(target: globalAndroid.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
					public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
					public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
					public requestSendAccessibilityEvent(child: globalAndroid.view.View, event: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
					public beforeTextChanged(s: string, start: number, count: number, after: number): void;
					public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
					public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback, type: number): globalAndroid.view.ActionMode;
					public getLayoutDirection(): number;
					public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
					public onGlobalLayout(): void;
					public onStartNestedScroll(child: globalAndroid.view.View, target: globalAndroid.view.View, nestedScrollAxes: number): boolean;
					/** @deprecated */
					public invalidateChildInParent(location: native.Array<number>, dirty: globalAndroid.graphics.Rect): globalAndroid.view.ViewParent;
					public recomputeViewAttributes(child: globalAndroid.view.View): void;
					public getWindowAnimations(): number;
					public notifySubtreeAccessibilityStateChanged(child: globalAndroid.view.View, source: globalAndroid.view.View, changeType: number): void;
					public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
					public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public addView(child: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
					public constructor(context: globalAndroid.content.Context);
					public invokeItem(item: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public getTextDirection(): number;
					public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
					public requestFitSystemWindows(): void;
					public onItemClick(parent: globalAndroid.widget.AdapterView<any>, v: globalAndroid.view.View, position: number, id: number): void;
					public getParent(): globalAndroid.view.ViewParent;
					public isTextAlignmentResolved(): boolean;
					public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public requestChildRectangleOnScreen(child: globalAndroid.view.View, rect: globalAndroid.graphics.Rect, immediate: boolean): boolean;
					public sendAccessibilityEvent(eventType: number): void;
					public getChildVisibleRect(child: globalAndroid.view.View, r: globalAndroid.graphics.Rect, offset: globalAndroid.graphics.Point): boolean;
					public canResolveTextAlignment(): boolean;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
					public onItemClick(parent: globalAndroid.widget.AdapterView<any>, v: globalAndroid.view.View, position: number, id: number): void;
					/** @deprecated */
					public requestFitSystemWindows(): void;
					public addView(child: globalAndroid.view.View): void;
					public canResolveTextDirection(): boolean;
					public updateViewLayout(view: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
					public bringChildToFront(child: globalAndroid.view.View): void;
					public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
					public onNestedPreScroll(target: globalAndroid.view.View, dx: number, dy: number, consumed: native.Array<number>): void;
					public afterTextChanged(s: globalAndroid.text.Editable): void;
					public clearChildFocus(child: globalAndroid.view.View): void;
					public requestLayout(): void;
					public createContextMenu(menu: globalAndroid.view.ContextMenu): void;
					public getParentForAccessibility(): globalAndroid.view.ViewParent;
					public addView(child: globalAndroid.view.View, index: number, params: globalAndroid.view.ViewGroup.LayoutParams): void;
					public onDetachedFromWindow(): void;
					public childHasTransientStateChanged(child: globalAndroid.view.View, childHasTransientState: boolean): void;
					public canResolveLayoutDirection(): boolean;
					public onTextChanged(s: string, start: number, before: number, count: number): void;
					public onNestedScrollAccepted(child: globalAndroid.view.View, target: globalAndroid.view.View, axes: number): void;
					public getTextAlignment(): number;
					public onDescendantInvalidated(child: globalAndroid.view.View, target: globalAndroid.view.View): void;
					public onNestedPrePerformAccessibilityAction(target: globalAndroid.view.View, action: number, bundle2: globalAndroid.os.Bundle): boolean;
					public keyboardNavigationClusterSearch(currentCluster: globalAndroid.view.View, direction: number): globalAndroid.view.View;
					public addView(child: globalAndroid.view.View, width: number, height: number): void;
					public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
					public initialize(menu: androidx.appcompat.view.menu.MenuBuilder): void;
					public requestChildFocus(child: globalAndroid.view.View, focused: globalAndroid.view.View): void;
					public onStopNestedScroll(child: globalAndroid.view.View): void;
					public onNestedPreFling(target: globalAndroid.view.View, velocityX: number, velocityY: number): boolean;
					public addView(child: globalAndroid.view.View, index: number): void;
					public removeView(child: globalAndroid.view.View): void;
					public focusSearch(focused: globalAndroid.view.View, direction: number): globalAndroid.view.View;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export class ListMenuItemView extends globalAndroid.widget.LinearLayout implements androidx.appcompat.view.menu.MenuView.ItemView, globalAndroid.widget.AbsListView.SelectionBoundsAdjuster {
					public static class: java.lang.Class<androidx.appcompat.view.menu.ListMenuItemView>;
					public showContextMenuForChild(originalView: globalAndroid.view.View, x: number, y: number): boolean;
					public requestTransparentRegion(child: globalAndroid.view.View): void;
					public childDrawableStateChanged(child: globalAndroid.view.View): void;
					public setCheckable(checkable: boolean): void;
					public onNestedFling(target: globalAndroid.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
					public isLayoutRequested(): boolean;
					public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
					public showsIcon(): boolean;
					/** @deprecated */
					public invalidateChild(child: globalAndroid.view.View, dirty: globalAndroid.graphics.Rect): void;
					public focusableViewAvailable(v: globalAndroid.view.View): void;
					public focusSearch(direction: number): globalAndroid.view.View;
					public isTextDirectionResolved(): boolean;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
					public isLayoutDirectionResolved(): boolean;
					public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public showContextMenuForChild(originalView: globalAndroid.view.View): boolean;
					public onNestedScroll(target: globalAndroid.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
					public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
					public initialize(itemData: androidx.appcompat.view.menu.MenuItemImpl, menuType: number): void;
					public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
					public requestSendAccessibilityEvent(child: globalAndroid.view.View, event: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
					public setShortcut(showShortcut: boolean, shortcutKey: string): void;
					public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
					public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback, type: number): globalAndroid.view.ActionMode;
					public getLayoutDirection(): number;
					public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
					public onStartNestedScroll(child: globalAndroid.view.View, target: globalAndroid.view.View, nestedScrollAxes: number): boolean;
					/** @deprecated */
					public invalidateChildInParent(location: native.Array<number>, dirty: globalAndroid.graphics.Rect): globalAndroid.view.ViewParent;
					public recomputeViewAttributes(child: globalAndroid.view.View): void;
					public setEnabled(enabled: boolean): void;
					public notifySubtreeAccessibilityStateChanged(child: globalAndroid.view.View, source: globalAndroid.view.View, changeType: number): void;
					public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
					public setChecked(checked: boolean): void;
					public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public setForceShowIcon(forceShow: boolean): void;
					public addView(child: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
					public constructor(context: globalAndroid.content.Context);
					public getTextDirection(): number;
					public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
					public requestFitSystemWindows(): void;
					public getItemData(): androidx.appcompat.view.menu.MenuItemImpl;
					public getParent(): globalAndroid.view.ViewParent;
					public isTextAlignmentResolved(): boolean;
					public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public sendAccessibilityEvent(eventType: number): void;
					public getChildVisibleRect(child: globalAndroid.view.View, r: globalAndroid.graphics.Rect, offset: globalAndroid.graphics.Point): boolean;
					public requestChildRectangleOnScreen(child: globalAndroid.view.View, rectangle: globalAndroid.graphics.Rect, immediate: boolean): boolean;
					public canResolveTextAlignment(): boolean;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
					/** @deprecated */
					public requestFitSystemWindows(): void;
					public addView(child: globalAndroid.view.View): void;
					public canResolveTextDirection(): boolean;
					public updateViewLayout(view: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
					public prefersCondensedTitle(): boolean;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
					public bringChildToFront(child: globalAndroid.view.View): void;
					public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
					public onNestedPreScroll(target: globalAndroid.view.View, dx: number, dy: number, consumed: native.Array<number>): void;
					public onFinishInflate(): void;
					public clearChildFocus(child: globalAndroid.view.View): void;
					public requestLayout(): void;
					public adjustListItemSelectionBounds(rect: globalAndroid.graphics.Rect): void;
					public createContextMenu(menu: globalAndroid.view.ContextMenu): void;
					public getParentForAccessibility(): globalAndroid.view.ViewParent;
					public addView(child: globalAndroid.view.View, index: number, params: globalAndroid.view.ViewGroup.LayoutParams): void;
					public childHasTransientStateChanged(child: globalAndroid.view.View, childHasTransientState: boolean): void;
					public canResolveLayoutDirection(): boolean;
					public onNestedScrollAccepted(child: globalAndroid.view.View, target: globalAndroid.view.View, axes: number): void;
					public getTextAlignment(): number;
					public onDescendantInvalidated(child: globalAndroid.view.View, target: globalAndroid.view.View): void;
					public onNestedPrePerformAccessibilityAction(target: globalAndroid.view.View, action: number, bundle2: globalAndroid.os.Bundle): boolean;
					public keyboardNavigationClusterSearch(currentCluster: globalAndroid.view.View, direction: number): globalAndroid.view.View;
					public addView(child: globalAndroid.view.View, width: number, height: number): void;
					public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
					public requestChildFocus(child: globalAndroid.view.View, focused: globalAndroid.view.View): void;
					public onStopNestedScroll(child: globalAndroid.view.View): void;
					public setGroupDividerEnabled(groupDividerEnabled: boolean): void;
					public onNestedPreFling(target: globalAndroid.view.View, velocityX: number, velocityY: number): boolean;
					public addView(child: globalAndroid.view.View, index: number): void;
					public setTitle(title: string): void;
					public removeView(view: globalAndroid.view.View): void;
					public focusSearch(focused: globalAndroid.view.View, direction: number): globalAndroid.view.View;
					public setIcon(icon: globalAndroid.graphics.drawable.Drawable): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export class ListMenuPresenter extends java.lang.Object implements androidx.appcompat.view.menu.MenuPresenter, globalAndroid.widget.AdapterView.OnItemClickListener {
					public static class: java.lang.Class<androidx.appcompat.view.menu.ListMenuPresenter>;
					public static VIEWS_TAG: string;
					public onItemClick(parent: globalAndroid.widget.AdapterView<any>, view: globalAndroid.view.View, position: number, id: number): void;
					public saveHierarchyState(outState: globalAndroid.os.Bundle): void;
					public restoreHierarchyState(inState: globalAndroid.os.Bundle): void;
					public collapseItemActionView(menu: androidx.appcompat.view.menu.MenuBuilder, item: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public getId(): number;
					public getAdapter(): globalAndroid.widget.ListAdapter;
					public onSubMenuSelected(subMenu: androidx.appcompat.view.menu.SubMenuBuilder): boolean;
					public constructor(itemLayoutRes: number, themeRes: number);
					public setCallback(cb: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
					public getMenuView(root: globalAndroid.view.ViewGroup): androidx.appcompat.view.menu.MenuView;
					public updateMenuView(cleared: boolean): void;
					public constructor(context: globalAndroid.content.Context, itemLayoutRes: number);
					public onRestoreInstanceState(state: globalAndroid.os.Parcelable): void;
					public expandItemActionView(menu: androidx.appcompat.view.menu.MenuBuilder, item: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public onCloseMenu(menu: androidx.appcompat.view.menu.MenuBuilder, allMenusAreClosing: boolean): void;
					public setId(id: number): void;
					public setItemIndexOffset(offset: number): void;
					public onSaveInstanceState(): globalAndroid.os.Parcelable;
					public initForMenu(context: globalAndroid.content.Context, menu: androidx.appcompat.view.menu.MenuBuilder): void;
					public flagActionItems(): boolean;
				}
				export module ListMenuPresenter {
					export class MenuAdapter extends globalAndroid.widget.BaseAdapter {
						public static class: java.lang.Class<androidx.appcompat.view.menu.ListMenuPresenter.MenuAdapter>;
						public constructor(param0: androidx.appcompat.view.menu.ListMenuPresenter);
						public areAllItemsEnabled(): boolean;
						public constructor();
						public notifyDataSetChanged(): void;
						public isEnabled(position: number): boolean;
						public getItem(position: number): androidx.appcompat.view.menu.MenuItemImpl;
						public getView(position: number, convertView: globalAndroid.view.View, parent: globalAndroid.view.ViewGroup): globalAndroid.view.View;
						public getCount(): number;
						public getDropDownView(position: number, convertView: globalAndroid.view.View, parent: globalAndroid.view.ViewGroup): globalAndroid.view.View;
						public getItemId(position: number): number;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export class MenuAdapter extends globalAndroid.widget.BaseAdapter {
					public static class: java.lang.Class<androidx.appcompat.view.menu.MenuAdapter>;
					public getForceShowIcon(): boolean;
					public getCount(): number;
					public areAllItemsEnabled(): boolean;
					public isEnabled(position: number): boolean;
					public getItem(position: number): androidx.appcompat.view.menu.MenuItemImpl;
					public notifyDataSetChanged(): void;
					public getItemId(position: number): number;
					public constructor();
					public setForceShowIcon(forceShow: boolean): void;
					public constructor(menu: androidx.appcompat.view.menu.MenuBuilder, inflater: globalAndroid.view.LayoutInflater, overflowOnly: boolean, itemLayoutRes: number);
					public getView(position: number, convertView: globalAndroid.view.View, parent: globalAndroid.view.ViewGroup): globalAndroid.view.View;
					public getAdapterMenu(): androidx.appcompat.view.menu.MenuBuilder;
					public getDropDownView(position: number, convertView: globalAndroid.view.View, parent: globalAndroid.view.ViewGroup): globalAndroid.view.View;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export class MenuBuilder extends java.lang.Object implements androidx.core.internal.view.SupportMenu {
					public static class: java.lang.Class<androidx.appcompat.view.menu.MenuBuilder>;
					public add(group: number, id: number, categoryOrder: number, title: string): globalAndroid.view.MenuItem;
					public findGroupIndex(group: number, start: number): number;
					public performItemAction(item: globalAndroid.view.MenuItem, flags: number): boolean;
					public setGroupEnabled(group: number, enabled: boolean): void;
					public size(): number;
					public startDispatchingItemsChanged(): void;
					public addSubMenu(group: number, id: number, categoryOrder: number, title: string): globalAndroid.view.SubMenu;
					public addSubMenu(title: string): globalAndroid.view.SubMenu;
					public isShortcutsVisible(): boolean;
					public addMenuPresenter(presenter: androidx.appcompat.view.menu.MenuPresenter, menuContext: globalAndroid.content.Context): void;
					public getNonActionItems(): java.util.ArrayList<androidx.appcompat.view.menu.MenuItemImpl>;
					public close(): void;
					public getContext(): globalAndroid.content.Context;
					public getItem(index: number): globalAndroid.view.MenuItem;
					public changeMenuMode(): void;
					public stopDispatchingItemsChanged(): void;
					public saveActionViewStates(outStates: globalAndroid.os.Bundle): void;
					public onItemsChanged(structureChanged: boolean): void;
					public getHeaderIcon(): globalAndroid.graphics.drawable.Drawable;
					public collapseItemActionView(item: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public performShortcut(keyCode: number, event: globalAndroid.view.KeyEvent, flags: number): boolean;
					public setHeaderTitleInt(title: string): androidx.appcompat.view.menu.MenuBuilder;
					public setShortcutsVisible(shortcutsVisible: boolean): void;
					public removeItemAt(index: number): void;
					public performItemAction(item: globalAndroid.view.MenuItem, preferredPresenter: androidx.appcompat.view.menu.MenuPresenter, flags: number): boolean;
					public removeMenuPresenter(presenter: androidx.appcompat.view.menu.MenuPresenter): void;
					public add(group: number, id: number, categoryOrder: number, title: number): globalAndroid.view.MenuItem;
					public close(closeAllMenus: boolean): void;
					public setCallback(cb: androidx.appcompat.view.menu.MenuBuilder.Callback): void;
					public getVisibleItems(): java.util.ArrayList<androidx.appcompat.view.menu.MenuItemImpl>;
					public constructor(context: globalAndroid.content.Context);
					public addMenuPresenter(presenter: androidx.appcompat.view.menu.MenuPresenter): void;
					public setCurrentMenuInfo(menuInfo: globalAndroid.view.ContextMenu.ContextMenuInfo): void;
					public clearAll(): void;
					public hasVisibleItems(): boolean;
					public getActionViewStatesKey(): string;
					public addInternal(group: number, id: number, categoryOrder: number, title: string): globalAndroid.view.MenuItem;
					public getHeaderView(): globalAndroid.view.View;
					public setHeaderViewInt(view: globalAndroid.view.View): androidx.appcompat.view.menu.MenuBuilder;
					public expandItemActionView(item: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public performIdentifierAction(id: number, flags: number): boolean;
					public setHeaderIconInt(iconRes: number): androidx.appcompat.view.menu.MenuBuilder;
					public findItemIndex(id: number): number;
					public restorePresenterStates(state: globalAndroid.os.Bundle): void;
					public getActionItems(): java.util.ArrayList<androidx.appcompat.view.menu.MenuItemImpl>;
					public getExpandedItem(): androidx.appcompat.view.menu.MenuItemImpl;
					public isGroupDividerEnabled(): boolean;
					public getRootMenu(): androidx.appcompat.view.menu.MenuBuilder;
					public clear(): void;
					public savePresenterStates(outState: globalAndroid.os.Bundle): void;
					public add(titleRes: number): globalAndroid.view.MenuItem;
					public isShortcutKey(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public flagActionItems(): void;
					public setQwertyMode(isQwerty: boolean): void;
					public getHeaderTitle(): string;
					public addSubMenu(group: number, id: number, categoryOrder: number, title: number): globalAndroid.view.SubMenu;
					public findGroupIndex(group: number): number;
					public setOverrideVisibleItems(override: boolean): void;
					public setDefaultShowAsAction(defaultShowAsAction: number): androidx.appcompat.view.menu.MenuBuilder;
					public setGroupDividerEnabled(enabled: boolean): void;
					public restoreActionViewStates(states: globalAndroid.os.Bundle): void;
					public addIntentOptions(group: number, id: number, categoryOrder: number, caller: globalAndroid.content.ComponentName, specifics: native.Array<globalAndroid.content.Intent>, intent: globalAndroid.content.Intent, flags: number, outSpecificItems: native.Array<globalAndroid.view.MenuItem>): number;
					public setGroupVisible(group: number, visible: boolean): void;
					public add(title: string): globalAndroid.view.MenuItem;
					public clearHeader(): void;
					public setOptionalIconsVisible(visible: boolean): void;
					public setGroupDividerEnabled(groupDividerEnabled: boolean): void;
					public setHeaderIconInt(icon: globalAndroid.graphics.drawable.Drawable): androidx.appcompat.view.menu.MenuBuilder;
					public addSubMenu(titleRes: number): globalAndroid.view.SubMenu;
					public removeItem(id: number): void;
					public removeGroup(group: number): void;
					public findItem(id: number): globalAndroid.view.MenuItem;
					public setGroupCheckable(group: number, checkable: boolean, exclusive: boolean): void;
					public setHeaderTitleInt(titleRes: number): androidx.appcompat.view.menu.MenuBuilder;
				}
				export module MenuBuilder {
					export class Callback extends java.lang.Object {
						public static class: java.lang.Class<androidx.appcompat.view.menu.MenuBuilder.Callback>;
						/**
						 * Constructs a new instance of the androidx.appcompat.view.menu.MenuBuilder() when extending the interface class.
						 */
						public constructor(implementation: {
							onMenuItemSelected(menuBuilder0: androidx.appcompat.view.menu.MenuBuilder, menuItem1: globalAndroid.view.MenuItem): boolean;
							onMenuModeChange(menuBuilder0: androidx.appcompat.view.menu.MenuBuilder): void;
						});
						public constructor();
						public onMenuModeChange(menuBuilder0: androidx.appcompat.view.menu.MenuBuilder): void;
						public onMenuItemSelected(menuBuilder0: androidx.appcompat.view.menu.MenuBuilder, menuItem1: globalAndroid.view.MenuItem): boolean;
					}
					export class ItemInvoker extends java.lang.Object {
						public static class: java.lang.Class<androidx.appcompat.view.menu.MenuBuilder.ItemInvoker>;
						/**
						 * Constructs a new instance of the androidx.appcompat.view.menu.MenuBuilder() when extending the interface class.
						 */
						public constructor(implementation: {
							invokeItem(menuItemImpl0: androidx.appcompat.view.menu.MenuItemImpl): boolean;
						});
						public constructor();
						public invokeItem(menuItemImpl0: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export class MenuDialogHelper extends java.lang.Object implements globalAndroid.content.DialogInterface.OnKeyListener, globalAndroid.content.DialogInterface.OnClickListener, globalAndroid.content.DialogInterface.OnDismissListener, androidx.appcompat.view.menu.MenuPresenter.Callback {
					public static class: java.lang.Class<androidx.appcompat.view.menu.MenuDialogHelper>;
					public setPresenterCallback(cb: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
					public onCloseMenu(menu: androidx.appcompat.view.menu.MenuBuilder, allMenusAreClosing: boolean): void;
					public onDismiss(dialog: globalAndroid.content.DialogInterface): void;
					public show(windowToken: globalAndroid.os.IBinder): void;
					public constructor(menu: androidx.appcompat.view.menu.MenuBuilder);
					public dismiss(): void;
					public onOpenSubMenu(subMenu: androidx.appcompat.view.menu.MenuBuilder): boolean;
					public onKey(dialog: globalAndroid.content.DialogInterface, keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public onClick(dialog: globalAndroid.content.DialogInterface, which: number): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export class MenuHelper extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.view.menu.MenuHelper>;
					/**
					 * Constructs a new instance of the androidx.appcompat.view.menu.MenuHelper interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						setPresenterCallback(callback0: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
						dismiss(): void;
					});
					public constructor();
					public setPresenterCallback(callback0: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
					public dismiss(): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export class MenuItemImpl extends java.lang.Object implements androidx.core.internal.view.SupportMenuItem {
					public static class: java.lang.Class<androidx.appcompat.view.menu.MenuItemImpl>;
					public getTitle(): string;
					public setActionProvider(actionProvider: globalAndroid.view.ActionProvider): globalAndroid.view.MenuItem;
					public setTitleCondensed(title: string): globalAndroid.view.MenuItem;
					public getGroupId(): number;
					public hasSubMenu(): boolean;
					public setEnabled(enabled: boolean): globalAndroid.view.MenuItem;
					public setIconTintBlendMode(blendMode: globalAndroid.graphics.BlendMode): globalAndroid.view.MenuItem;
					public getContentDescription(): string;
					public setTooltipText(tooltipText: string): globalAndroid.view.MenuItem;
					public setNumericShortcut(numericChar: string, numericModifiers: number): globalAndroid.view.MenuItem;
					public setSubMenu(subMenu: androidx.appcompat.view.menu.SubMenuBuilder): void;
					public setChecked(checked: boolean): globalAndroid.view.MenuItem;
					public getTitleCondensed(): string;
					public setActionView(view0: globalAndroid.view.View): globalAndroid.view.MenuItem;
					public isEnabled(): boolean;
					public setIcon(iconResId: number): globalAndroid.view.MenuItem;
					public getSupportActionProvider(): androidx.core.view.ActionProvider;
					public setIconTintMode(iconTintMode: globalAndroid.graphics.PorterDuff.Mode): globalAndroid.view.MenuItem;
					public setActionViewExpanded(isExpanded: boolean): void;
					public setAlphabeticShortcut(alphaChar: string): globalAndroid.view.MenuItem;
					public getSubMenu(): globalAndroid.view.SubMenu;
					public getIntent(): globalAndroid.content.Intent;
					public setTitle(title: number): globalAndroid.view.MenuItem;
					public requiresActionButton(): boolean;
					public setIconTintMode(tintMode: globalAndroid.graphics.PorterDuff.Mode): globalAndroid.view.MenuItem;
					public setShowAsAction(actionEnum: number): void;
					public setAlphabeticShortcut(alphaChar: string, alphaModifiers: number): globalAndroid.view.MenuItem;
					public setIsActionButton(isActionButton: boolean): void;
					public getMenuInfo(): globalAndroid.view.ContextMenu.ContextMenuInfo;
					public invoke(): boolean;
					public getNumericModifiers(): number;
					public setShortcut(numericChar: string, alphaChar: string, numericModifiers: number, alphaModifiers: number): globalAndroid.view.MenuItem;
					public isVisible(): boolean;
					public setActionView(resId: number): androidx.core.internal.view.SupportMenuItem;
					public getAlphabeticModifiers(): number;
					public requestsActionButton(): boolean;
					public setIntent(intent: globalAndroid.content.Intent): globalAndroid.view.MenuItem;
					public collapseActionView(): boolean;
					public setSupportActionProvider(actionProvider: androidx.core.view.ActionProvider): androidx.core.internal.view.SupportMenuItem;
					public getTooltipText(): string;
					public expandActionView(): boolean;
					public setIconTintList(iconTintList: globalAndroid.content.res.ColorStateList): globalAndroid.view.MenuItem;
					public setOnMenuItemClickListener(clickListener: globalAndroid.view.MenuItem.OnMenuItemClickListener): globalAndroid.view.MenuItem;
					public actionFormatChanged(): void;
					public getIconTintBlendMode(): globalAndroid.graphics.BlendMode;
					public getNumericShortcut(): string;
					public setTooltipText(tooltipText: string): androidx.core.internal.view.SupportMenuItem;
					public isActionViewExpanded(): boolean;
					public requiresOverflow(): boolean;
					public setIcon(icon: globalAndroid.graphics.drawable.Drawable): globalAndroid.view.MenuItem;
					public setContentDescription(contentDescription: string): globalAndroid.view.MenuItem;
					public getAlphabeticShortcut(): string;
					public setTitle(title: string): globalAndroid.view.MenuItem;
					public hasCollapsibleActionView(): boolean;
					public getIcon(): globalAndroid.graphics.drawable.Drawable;
					public setShortcut(numericChar: string, alphaChar: string): globalAndroid.view.MenuItem;
					public setActionView(view: globalAndroid.view.View): androidx.core.internal.view.SupportMenuItem;
					public setNumericShortcut(numericChar: string): globalAndroid.view.MenuItem;
					public isExclusiveCheckable(): boolean;
					public setVisible(shown: boolean): globalAndroid.view.MenuItem;
					public shouldShowIcon(): boolean;
					public getIconTintMode(): globalAndroid.graphics.PorterDuff.Mode;
					public setContentDescription(contentDescription: string): androidx.core.internal.view.SupportMenuItem;
					public toString(): string;
					public getOrder(): number;
					public getActionProvider(): globalAndroid.view.ActionProvider;
					public isCheckable(): boolean;
					public setOnActionExpandListener(listener: globalAndroid.view.MenuItem.OnActionExpandListener): globalAndroid.view.MenuItem;
					public isChecked(): boolean;
					public isActionButton(): boolean;
					public setShowAsActionFlags(int0: number): globalAndroid.view.MenuItem;
					public setActionView(int0: number): globalAndroid.view.MenuItem;
					public setCallback(callback: java.lang.Runnable): globalAndroid.view.MenuItem;
					public getItemId(): number;
					public getIconTintList(): globalAndroid.content.res.ColorStateList;
					public getOrdering(): number;
					public setIconTintList(tint: globalAndroid.content.res.ColorStateList): globalAndroid.view.MenuItem;
					public setExclusiveCheckable(exclusive: boolean): void;
					public getActionView(): globalAndroid.view.View;
					public showsTextAsAction(): boolean;
					public setShowAsActionFlags(actionEnum: number): androidx.core.internal.view.SupportMenuItem;
					public setCheckable(checkable: boolean): globalAndroid.view.MenuItem;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export class MenuItemWrapperICS extends androidx.appcompat.view.menu.BaseMenuWrapper<any> implements globalAndroid.view.MenuItem {
					public static class: java.lang.Class<androidx.appcompat.view.menu.MenuItemWrapperICS>;
					public getTitle(): string;
					public setTitleCondensed(title: string): globalAndroid.view.MenuItem;
					public getGroupId(): number;
					public hasSubMenu(): boolean;
					public setEnabled(enabled: boolean): globalAndroid.view.MenuItem;
					public setIconTintBlendMode(blendMode: globalAndroid.graphics.BlendMode): globalAndroid.view.MenuItem;
					public constructor(context: globalAndroid.content.Context, object: androidx.core.internal.view.SupportMenuItem);
					public getContentDescription(): string;
					public setTooltipText(tooltipText: string): globalAndroid.view.MenuItem;
					public setNumericShortcut(numericChar: string, numericModifiers: number): globalAndroid.view.MenuItem;
					public setChecked(checked: boolean): globalAndroid.view.MenuItem;
					public getTitleCondensed(): string;
					public isEnabled(): boolean;
					public setShowAsActionFlags(actionEnum: number): globalAndroid.view.MenuItem;
					public setAlphabeticShortcut(alphaChar: string): globalAndroid.view.MenuItem;
					public setActionView(view: globalAndroid.view.View): globalAndroid.view.MenuItem;
					public getSubMenu(): globalAndroid.view.SubMenu;
					public setOnMenuItemClickListener(menuItemClickListener: globalAndroid.view.MenuItem.OnMenuItemClickListener): globalAndroid.view.MenuItem;
					public setTitle(title: number): globalAndroid.view.MenuItem;
					public getIntent(): globalAndroid.content.Intent;
					public setIconTintMode(tintMode: globalAndroid.graphics.PorterDuff.Mode): globalAndroid.view.MenuItem;
					public setShowAsAction(actionEnum: number): void;
					public setAlphabeticShortcut(alphaChar: string, alphaModifiers: number): globalAndroid.view.MenuItem;
					public getMenuInfo(): globalAndroid.view.ContextMenu.ContextMenuInfo;
					public setExclusiveCheckable(checkable: boolean): void;
					public setShortcut(numericChar: string, alphaChar: string, numericModifiers: number, alphaModifiers: number): globalAndroid.view.MenuItem;
					public getNumericModifiers(): number;
					public isVisible(): boolean;
					public setActionProvider(provider: globalAndroid.view.ActionProvider): globalAndroid.view.MenuItem;
					public getAlphabeticModifiers(): number;
					public setIntent(intent: globalAndroid.content.Intent): globalAndroid.view.MenuItem;
					public collapseActionView(): boolean;
					public getTooltipText(): string;
					public expandActionView(): boolean;
					public getIconTintBlendMode(): globalAndroid.graphics.BlendMode;
					public getNumericShortcut(): string;
					public isActionViewExpanded(): boolean;
					public setIcon(icon: globalAndroid.graphics.drawable.Drawable): globalAndroid.view.MenuItem;
					public setContentDescription(contentDescription: string): globalAndroid.view.MenuItem;
					public setTitle(title: string): globalAndroid.view.MenuItem;
					public getAlphabeticShortcut(): string;
					public getIcon(): globalAndroid.graphics.drawable.Drawable;
					public setShortcut(numericChar: string, alphaChar: string): globalAndroid.view.MenuItem;
					public setNumericShortcut(numericChar: string): globalAndroid.view.MenuItem;
					public getIconTintMode(): globalAndroid.graphics.PorterDuff.Mode;
					public getOrder(): number;
					public getActionProvider(): globalAndroid.view.ActionProvider;
					public setActionView(resId: number): globalAndroid.view.MenuItem;
					public isCheckable(): boolean;
					public setOnActionExpandListener(listener: globalAndroid.view.MenuItem.OnActionExpandListener): globalAndroid.view.MenuItem;
					public isChecked(): boolean;
					public setIcon(iconRes: number): globalAndroid.view.MenuItem;
					public getItemId(): number;
					public getIconTintList(): globalAndroid.content.res.ColorStateList;
					public setVisible(visible: boolean): globalAndroid.view.MenuItem;
					public setIconTintList(tint: globalAndroid.content.res.ColorStateList): globalAndroid.view.MenuItem;
					public getActionView(): globalAndroid.view.View;
					public setCheckable(checkable: boolean): globalAndroid.view.MenuItem;
				}
				export module MenuItemWrapperICS {
					export class ActionProviderWrapper extends androidx.core.view.ActionProvider {
						public static class: java.lang.Class<androidx.appcompat.view.menu.MenuItemWrapperICS.ActionProviderWrapper>;
						public onCreateActionView(): globalAndroid.view.View;
						public onCreateActionView(forItem: globalAndroid.view.MenuItem): globalAndroid.view.View;
						public onPrepareSubMenu(subMenu: globalAndroid.view.SubMenu): void;
						public onPerformDefaultAction(): boolean;
						public hasSubMenu(): boolean;
					}
					export class ActionProviderWrapperJB extends androidx.appcompat.view.menu.MenuItemWrapperICS.ActionProviderWrapper implements globalAndroid.view.ActionProvider.VisibilityListener {
						public static class: java.lang.Class<androidx.appcompat.view.menu.MenuItemWrapperICS.ActionProviderWrapperJB>;
						public onCreateActionView(): globalAndroid.view.View;
						public onCreateActionView(forItem: globalAndroid.view.MenuItem): globalAndroid.view.View;
						public setVisibilityListener(listener: androidx.core.view.ActionProvider.VisibilityListener): void;
						public overridesItemVisibility(): boolean;
						public refreshVisibility(): void;
						public isVisible(): boolean;
						public onActionProviderVisibilityChanged(isVisible: boolean): void;
					}
					export class CollapsibleActionViewWrapper extends globalAndroid.widget.FrameLayout implements androidx.appcompat.view.CollapsibleActionView {
						public static class: java.lang.Class<androidx.appcompat.view.menu.MenuItemWrapperICS.CollapsibleActionViewWrapper>;
						public isLayoutRequested(): boolean;
						public bringChildToFront(child: globalAndroid.view.View): void;
						public childHasTransientStateChanged(child: globalAndroid.view.View, childHasTransientState: boolean): void;
						public canResolveLayoutDirection(): boolean;
						public onNestedPrePerformAccessibilityAction(target: globalAndroid.view.View, action: number, bundle2: globalAndroid.os.Bundle): boolean;
						public requestTransparentRegion(child: globalAndroid.view.View): void;
						public updateViewLayout(view: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
						public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
						public onActionViewExpanded(): void;
						public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
						public isTextAlignmentResolved(): boolean;
						public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
						public onNestedScrollAccepted(child: globalAndroid.view.View, target: globalAndroid.view.View, axes: number): void;
						public getTextDirection(): number;
						public getChildVisibleRect(child: globalAndroid.view.View, r: globalAndroid.graphics.Rect, offset: globalAndroid.graphics.Point): boolean;
						public addView(child: globalAndroid.view.View): void;
						public addView(child: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
						public focusableViewAvailable(v: globalAndroid.view.View): void;
						public requestChildFocus(child: globalAndroid.view.View, focused: globalAndroid.view.View): void;
						public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
						public sendAccessibilityEvent(eventType: number): void;
						public canResolveTextDirection(): boolean;
						public isLayoutDirectionResolved(): boolean;
						public onStartNestedScroll(child: globalAndroid.view.View, target: globalAndroid.view.View, nestedScrollAxes: number): boolean;
						public recomputeViewAttributes(child: globalAndroid.view.View): void;
						public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
						public requestLayout(): void;
						public clearChildFocus(child: globalAndroid.view.View): void;
						public keyboardNavigationClusterSearch(currentCluster: globalAndroid.view.View, direction: number): globalAndroid.view.View;
						public isTextDirectionResolved(): boolean;
						/** @deprecated */
						public invalidateChildInParent(location: native.Array<number>, dirty: globalAndroid.graphics.Rect): globalAndroid.view.ViewParent;
						public childDrawableStateChanged(child: globalAndroid.view.View): void;
						/** @deprecated */
						public requestFitSystemWindows(): void;
						public removeView(view: globalAndroid.view.View): void;
						/** @deprecated */
						public invalidateChild(child: globalAndroid.view.View, dirty: globalAndroid.graphics.Rect): void;
						public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
						public showContextMenuForChild(originalView: globalAndroid.view.View, x: number, y: number): boolean;
						public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
						public requestSendAccessibilityEvent(child: globalAndroid.view.View, event: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
						public onNestedScroll(target: globalAndroid.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
						public addView(child: globalAndroid.view.View, width: number, height: number): void;
						public addView(child: globalAndroid.view.View, index: number, params: globalAndroid.view.ViewGroup.LayoutParams): void;
						public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
						public onNestedFling(target: globalAndroid.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
						public addView(child: globalAndroid.view.View, index: number): void;
						public onNestedPreFling(target: globalAndroid.view.View, velocityX: number, velocityY: number): boolean;
						public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
						public focusSearch(focused: globalAndroid.view.View, direction: number): globalAndroid.view.View;
						public requestChildRectangleOnScreen(child: globalAndroid.view.View, rectangle: globalAndroid.graphics.Rect, immediate: boolean): boolean;
						public requestFitSystemWindows(): void;
						public getParentForAccessibility(): globalAndroid.view.ViewParent;
						public createContextMenu(menu: globalAndroid.view.ContextMenu): void;
						public focusSearch(direction: number): globalAndroid.view.View;
						public onStopNestedScroll(child: globalAndroid.view.View): void;
						public showContextMenuForChild(originalView: globalAndroid.view.View): boolean;
						public getTextAlignment(): number;
						public onNestedPreScroll(target: globalAndroid.view.View, dx: number, dy: number, consumed: native.Array<number>): void;
						public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
						public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
						public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback, type: number): globalAndroid.view.ActionMode;
						public onActionViewCollapsed(): void;
						public notifySubtreeAccessibilityStateChanged(child: globalAndroid.view.View, source: globalAndroid.view.View, changeType: number): void;
						public getParent(): globalAndroid.view.ViewParent;
						public getLayoutDirection(): number;
						public canResolveTextAlignment(): boolean;
						public onDescendantInvalidated(child: globalAndroid.view.View, target: globalAndroid.view.View): void;
					}
					export class OnActionExpandListenerWrapper extends java.lang.Object implements globalAndroid.view.MenuItem.OnActionExpandListener {
						public static class: java.lang.Class<androidx.appcompat.view.menu.MenuItemWrapperICS.OnActionExpandListenerWrapper>;
						public onMenuItemActionExpand(item: globalAndroid.view.MenuItem): boolean;
						public onMenuItemActionCollapse(item: globalAndroid.view.MenuItem): boolean;
					}
					export class OnMenuItemClickListenerWrapper extends java.lang.Object implements globalAndroid.view.MenuItem.OnMenuItemClickListener {
						public static class: java.lang.Class<androidx.appcompat.view.menu.MenuItemWrapperICS.OnMenuItemClickListenerWrapper>;
						public onMenuItemClick(item: globalAndroid.view.MenuItem): boolean;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export abstract class MenuPopup extends java.lang.Object implements androidx.appcompat.view.menu.ShowableListMenu, androidx.appcompat.view.menu.MenuPresenter, globalAndroid.widget.AdapterView.OnItemClickListener {
					public static class: java.lang.Class<androidx.appcompat.view.menu.MenuPopup>;
					public setHorizontalOffset(int0: number): void;
					public setGravity(int0: number): void;
					public static shouldPreserveIconSpacing(menu: androidx.appcompat.view.menu.MenuBuilder): boolean;
					public isShowing(): boolean;
					public static measureIndividualMenuWidth(adapter: globalAndroid.widget.ListAdapter, parent: globalAndroid.view.ViewGroup, context: globalAndroid.content.Context, maxAllowedWidth: number): number;
					public collapseItemActionView(menu: androidx.appcompat.view.menu.MenuBuilder, item: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public onSubMenuSelected(subMenuBuilder0: androidx.appcompat.view.menu.SubMenuBuilder): boolean;
					public setCallback(callback0: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
					public updateMenuView(boolean0: boolean): void;
					public closeMenuOnSubMenuOpened(): boolean;
					public getMenuView(root: globalAndroid.view.ViewGroup): androidx.appcompat.view.menu.MenuView;
					public static toMenuAdapter(adapter: globalAndroid.widget.ListAdapter): androidx.appcompat.view.menu.MenuAdapter;
					public expandItemActionView(menu: androidx.appcompat.view.menu.MenuBuilder, item: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public setShowTitle(boolean0: boolean): void;
					public getEpicenterBounds(): globalAndroid.graphics.Rect;
					public flagActionItems(): boolean;
					public onItemClick(parent: globalAndroid.widget.AdapterView<any>, view: globalAndroid.view.View, position: number, id: number): void;
					public onRestoreInstanceState(parcelable0: globalAndroid.os.Parcelable): void;
					public addMenu(menuBuilder0: androidx.appcompat.view.menu.MenuBuilder): void;
					public show(): void;
					public getId(): number;
					public getListView(): globalAndroid.widget.ListView;
					public setOnDismissListener(onDismissListener0: globalAndroid.widget.PopupWindow.OnDismissListener): void;
					public setVerticalOffset(int0: number): void;
					public onCloseMenu(menuBuilder0: androidx.appcompat.view.menu.MenuBuilder, boolean1: boolean): void;
					public setEpicenterBounds(bounds: globalAndroid.graphics.Rect): void;
					public setForceShowIcon(boolean0: boolean): void;
					public onSaveInstanceState(): globalAndroid.os.Parcelable;
					public setAnchorView(view0: globalAndroid.view.View): void;
					public dismiss(): void;
					public initForMenu(context: globalAndroid.content.Context, menu: androidx.appcompat.view.menu.MenuBuilder): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export class MenuPopupHelper extends java.lang.Object implements androidx.appcompat.view.menu.MenuHelper {
					public static class: java.lang.Class<androidx.appcompat.view.menu.MenuPopupHelper>;
					public getGravity(): number;
					public tryShow(): boolean;
					public constructor(context: globalAndroid.content.Context, menu: androidx.appcompat.view.menu.MenuBuilder, anchorView: globalAndroid.view.View);
					public constructor(context: globalAndroid.content.Context, menu: androidx.appcompat.view.menu.MenuBuilder, anchorView: globalAndroid.view.View, overflowOnly: boolean, popupStyleAttr: number, popupStyleRes: number);
					public show(): void;
					public setPresenterCallback(cb: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
					public getPopup(): androidx.appcompat.view.menu.MenuPopup;
					public isShowing(): boolean;
					public setOnDismissListener(listener: globalAndroid.widget.PopupWindow.OnDismissListener): void;
					public getListView(): globalAndroid.widget.ListView;
					public constructor(context: globalAndroid.content.Context, menu: androidx.appcompat.view.menu.MenuBuilder);
					public constructor(context: globalAndroid.content.Context, menu: androidx.appcompat.view.menu.MenuBuilder, anchorView: globalAndroid.view.View, overflowOnly: boolean, popupStyleAttr: number);
					public setForceShowIcon(forceShowIcon: boolean): void;
					public show(x: number, y: number): void;
					public onDismiss(): void;
					public setGravity(gravity: number): void;
					public setAnchorView(anchor: globalAndroid.view.View): void;
					public tryShow(x: number, y: number): boolean;
					public dismiss(): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export class MenuPresenter extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.view.menu.MenuPresenter>;
					/**
					 * Constructs a new instance of the androidx.appcompat.view.menu.MenuPresenter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						initForMenu(context0: globalAndroid.content.Context, menuBuilder1: androidx.appcompat.view.menu.MenuBuilder): void;
						getMenuView(viewGroup0: globalAndroid.view.ViewGroup): androidx.appcompat.view.menu.MenuView;
						updateMenuView(boolean0: boolean): void;
						setCallback(callback0: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
						onSubMenuSelected(subMenuBuilder0: androidx.appcompat.view.menu.SubMenuBuilder): boolean;
						onCloseMenu(menuBuilder0: androidx.appcompat.view.menu.MenuBuilder, boolean1: boolean): void;
						flagActionItems(): boolean;
						expandItemActionView(menuBuilder0: androidx.appcompat.view.menu.MenuBuilder, menuItemImpl1: androidx.appcompat.view.menu.MenuItemImpl): boolean;
						collapseItemActionView(menuBuilder0: androidx.appcompat.view.menu.MenuBuilder, menuItemImpl1: androidx.appcompat.view.menu.MenuItemImpl): boolean;
						getId(): number;
						onSaveInstanceState(): globalAndroid.os.Parcelable;
						onRestoreInstanceState(parcelable0: globalAndroid.os.Parcelable): void;
					});
					public constructor();
					public onRestoreInstanceState(parcelable0: globalAndroid.os.Parcelable): void;
					public onCloseMenu(menuBuilder0: androidx.appcompat.view.menu.MenuBuilder, boolean1: boolean): void;
					public collapseItemActionView(menuBuilder0: androidx.appcompat.view.menu.MenuBuilder, menuItemImpl1: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public onSubMenuSelected(subMenuBuilder0: androidx.appcompat.view.menu.SubMenuBuilder): boolean;
					public getId(): number;
					public setCallback(callback0: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
					public onSaveInstanceState(): globalAndroid.os.Parcelable;
					public initForMenu(context0: globalAndroid.content.Context, menuBuilder1: androidx.appcompat.view.menu.MenuBuilder): void;
					public getMenuView(viewGroup0: globalAndroid.view.ViewGroup): androidx.appcompat.view.menu.MenuView;
					public updateMenuView(boolean0: boolean): void;
					public flagActionItems(): boolean;
					public expandItemActionView(menuBuilder0: androidx.appcompat.view.menu.MenuBuilder, menuItemImpl1: androidx.appcompat.view.menu.MenuItemImpl): boolean;
				}
				export module MenuPresenter {
					export class Callback extends java.lang.Object {
						public static class: java.lang.Class<androidx.appcompat.view.menu.MenuPresenter.Callback>;
						/**
						 * Constructs a new instance of the androidx.appcompat.view.menu.MenuPresenter() when extending the interface class.
						 */
						public constructor(implementation: {
							onCloseMenu(menuBuilder0: androidx.appcompat.view.menu.MenuBuilder, boolean1: boolean): void;
							onOpenSubMenu(menuBuilder0: androidx.appcompat.view.menu.MenuBuilder): boolean;
						});
						public constructor();
						public onCloseMenu(menuBuilder0: androidx.appcompat.view.menu.MenuBuilder, boolean1: boolean): void;
						public onOpenSubMenu(menuBuilder0: androidx.appcompat.view.menu.MenuBuilder): boolean;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export class MenuView extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.view.menu.MenuView>;
					/**
					 * Constructs a new instance of the androidx.appcompat.view.menu.MenuView interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						initialize(menuBuilder0: androidx.appcompat.view.menu.MenuBuilder): void;
						getWindowAnimations(): number;
					});
					public constructor();
					public initialize(menuBuilder0: androidx.appcompat.view.menu.MenuBuilder): void;
					public getWindowAnimations(): number;
				}
				export module MenuView {
					export class ItemView extends java.lang.Object {
						public static class: java.lang.Class<androidx.appcompat.view.menu.MenuView.ItemView>;
						/**
						 * Constructs a new instance of the androidx.appcompat.view.menu.MenuView() when extending the interface class.
						 */
						public constructor(implementation: {
							initialize(menuItemImpl0: androidx.appcompat.view.menu.MenuItemImpl, int1: number): void;
							getItemData(): androidx.appcompat.view.menu.MenuItemImpl;
							setTitle(charSequence0: string): void;
							setEnabled(boolean0: boolean): void;
							setCheckable(boolean0: boolean): void;
							setChecked(boolean0: boolean): void;
							setShortcut(boolean0: boolean, char1: string): void;
							setIcon(drawable0: globalAndroid.graphics.drawable.Drawable): void;
							prefersCondensedTitle(): boolean;
							showsIcon(): boolean;
						});
						public constructor();
						public prefersCondensedTitle(): boolean;
						public setCheckable(boolean0: boolean): void;
						public getItemData(): androidx.appcompat.view.menu.MenuItemImpl;
						public setTitle(charSequence0: string): void;
						public showsIcon(): boolean;
						public setChecked(boolean0: boolean): void;
						public setShortcut(boolean0: boolean, char1: string): void;
						public initialize(menuItemImpl0: androidx.appcompat.view.menu.MenuItemImpl, int1: number): void;
						public setEnabled(boolean0: boolean): void;
						public setIcon(drawable0: globalAndroid.graphics.drawable.Drawable): void;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export class MenuWrapperICS extends androidx.appcompat.view.menu.BaseMenuWrapper<any> implements globalAndroid.view.Menu {
					public static class: java.lang.Class<androidx.appcompat.view.menu.MenuWrapperICS>;
					public performIdentifierAction(id: number, flags: number): boolean;
					public setGroupEnabled(group: number, enabled: boolean): void;
					public size(): number;
					public addSubMenu(title: string): globalAndroid.view.SubMenu;
					public clear(): void;
					public close(): void;
					public constructor(context: globalAndroid.content.Context, object: androidx.core.internal.view.SupportMenu);
					public add(titleRes: number): globalAndroid.view.MenuItem;
					public getItem(index: number): globalAndroid.view.MenuItem;
					public isShortcutKey(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public setQwertyMode(isQwerty: boolean): void;
					public removeGroup(groupId: number): void;
					public add(groupId: number, itemId: number, order: number, title: string): globalAndroid.view.MenuItem;
					public setGroupVisible(group: number, visible: boolean): void;
					public add(title: string): globalAndroid.view.MenuItem;
					public performShortcut(keyCode: number, event: globalAndroid.view.KeyEvent, flags: number): boolean;
					public add(groupId: number, itemId: number, order: number, titleRes: number): globalAndroid.view.MenuItem;
					public addIntentOptions(groupId: number, itemId: number, order: number, caller: globalAndroid.content.ComponentName, specifics: native.Array<globalAndroid.content.Intent>, intent: globalAndroid.content.Intent, flags: number, outSpecificItems: native.Array<globalAndroid.view.MenuItem>): number;
					public addSubMenu(groupId: number, itemId: number, order: number, titleRes: number): globalAndroid.view.SubMenu;
					public setGroupDividerEnabled(groupDividerEnabled: boolean): void;
					public hasVisibleItems(): boolean;
					public addSubMenu(titleRes: number): globalAndroid.view.SubMenu;
					public removeItem(id: number): void;
					public findItem(id: number): globalAndroid.view.MenuItem;
					public addSubMenu(groupId: number, itemId: number, order: number, title: string): globalAndroid.view.SubMenu;
					public setGroupCheckable(group: number, checkable: boolean, exclusive: boolean): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export class ShowableListMenu extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.view.menu.ShowableListMenu>;
					/**
					 * Constructs a new instance of the androidx.appcompat.view.menu.ShowableListMenu interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						show(): void;
						dismiss(): void;
						isShowing(): boolean;
						getListView(): globalAndroid.widget.ListView;
					});
					public constructor();
					public show(): void;
					public isShowing(): boolean;
					public getListView(): globalAndroid.widget.ListView;
					public dismiss(): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export class StandardMenuPopup extends androidx.appcompat.view.menu.MenuPopup implements globalAndroid.widget.PopupWindow.OnDismissListener, globalAndroid.widget.AdapterView.OnItemClickListener, androidx.appcompat.view.menu.MenuPresenter, globalAndroid.view.View.OnKeyListener {
					public static class: java.lang.Class<androidx.appcompat.view.menu.StandardMenuPopup>;
					public setHorizontalOffset(int0: number): void;
					public setGravity(int0: number): void;
					public isShowing(): boolean;
					public collapseItemActionView(menu: androidx.appcompat.view.menu.MenuBuilder, item: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public onSubMenuSelected(subMenu: androidx.appcompat.view.menu.SubMenuBuilder): boolean;
					public onDismiss(): void;
					public addMenu(menu: androidx.appcompat.view.menu.MenuBuilder): void;
					public getMenuView(root: globalAndroid.view.ViewGroup): androidx.appcompat.view.menu.MenuView;
					public onRestoreInstanceState(state: globalAndroid.os.Parcelable): void;
					public expandItemActionView(menu: androidx.appcompat.view.menu.MenuBuilder, item: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public setHorizontalOffset(x: number): void;
					public constructor(context: globalAndroid.content.Context, menu: androidx.appcompat.view.menu.MenuBuilder, anchorView: globalAndroid.view.View, popupStyleAttr: number, popupStyleRes: number, overflowOnly: boolean);
					public setShowTitle(boolean0: boolean): void;
					public flagActionItems(): boolean;
					public onItemClick(parent: globalAndroid.widget.AdapterView<any>, view: globalAndroid.view.View, position: number, id: number): void;
					public addMenu(menuBuilder0: androidx.appcompat.view.menu.MenuBuilder): void;
					public onKey(v: globalAndroid.view.View, keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public show(): void;
					public setOnDismissListener(listener: globalAndroid.widget.PopupWindow.OnDismissListener): void;
					public getListView(): globalAndroid.widget.ListView;
					public getId(): number;
					public setVerticalOffset(y: number): void;
					public setOnDismissListener(onDismissListener0: globalAndroid.widget.PopupWindow.OnDismissListener): void;
					public setGravity(gravity: number): void;
					public setCallback(cb: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
					public updateMenuView(cleared: boolean): void;
					public setVerticalOffset(int0: number): void;
					public onCloseMenu(menu: androidx.appcompat.view.menu.MenuBuilder, allMenusAreClosing: boolean): void;
					public setAnchorView(anchor: globalAndroid.view.View): void;
					public setForceShowIcon(boolean0: boolean): void;
					public setForceShowIcon(forceShow: boolean): void;
					public onSaveInstanceState(): globalAndroid.os.Parcelable;
					public dismiss(): void;
					public setAnchorView(view0: globalAndroid.view.View): void;
					public setShowTitle(showTitle: boolean): void;
					public initForMenu(context: globalAndroid.content.Context, menu: androidx.appcompat.view.menu.MenuBuilder): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export class SubMenuBuilder extends androidx.appcompat.view.menu.MenuBuilder implements globalAndroid.view.SubMenu {
					public static class: java.lang.Class<androidx.appcompat.view.menu.SubMenuBuilder>;
					public add(group: number, id: number, categoryOrder: number, title: string): globalAndroid.view.MenuItem;
					public isQwertyMode(): boolean;
					public setHeaderIcon(icon: globalAndroid.graphics.drawable.Drawable): globalAndroid.view.SubMenu;
					public setGroupEnabled(group: number, enabled: boolean): void;
					public size(): number;
					public addSubMenu(group: number, id: number, categoryOrder: number, title: string): globalAndroid.view.SubMenu;
					public isShortcutsVisible(): boolean;
					public addSubMenu(title: string): globalAndroid.view.SubMenu;
					public close(): void;
					public getItem(index: number): globalAndroid.view.MenuItem;
					public setCallback(callback: androidx.appcompat.view.menu.MenuBuilder.Callback): void;
					public collapseItemActionView(item: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public performShortcut(keyCode: number, event: globalAndroid.view.KeyEvent, flags: number): boolean;
					public setShortcutsVisible(shortcutsVisible: boolean): void;
					public setHeaderTitle(titleRes: number): globalAndroid.view.SubMenu;
					public add(group: number, id: number, categoryOrder: number, title: number): globalAndroid.view.MenuItem;
					public close(closeAllMenus: boolean): void;
					public setCallback(cb: androidx.appcompat.view.menu.MenuBuilder.Callback): void;
					public constructor(context: globalAndroid.content.Context);
					public setIcon(iconRes: number): globalAndroid.view.SubMenu;
					public hasVisibleItems(): boolean;
					public setIcon(icon: globalAndroid.graphics.drawable.Drawable): globalAndroid.view.SubMenu;
					public getActionViewStatesKey(): string;
					public expandItemActionView(item: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public performIdentifierAction(id: number, flags: number): boolean;
					public setHeaderTitle(title: string): globalAndroid.view.SubMenu;
					public getItem(): globalAndroid.view.MenuItem;
					public getParentMenu(): globalAndroid.view.Menu;
					public getRootMenu(): androidx.appcompat.view.menu.MenuBuilder;
					public isGroupDividerEnabled(): boolean;
					public clear(): void;
					public add(titleRes: number): globalAndroid.view.MenuItem;
					public setHeaderIcon(iconRes: number): globalAndroid.view.SubMenu;
					public isShortcutKey(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public constructor(context: globalAndroid.content.Context, parentMenu: androidx.appcompat.view.menu.MenuBuilder, item: androidx.appcompat.view.menu.MenuItemImpl);
					public setQwertyMode(isQwerty: boolean): void;
					public setHeaderView(view: globalAndroid.view.View): globalAndroid.view.SubMenu;
					public addSubMenu(group: number, id: number, categoryOrder: number, title: number): globalAndroid.view.SubMenu;
					public setGroupDividerEnabled(enabled: boolean): void;
					public addIntentOptions(group: number, id: number, categoryOrder: number, caller: globalAndroid.content.ComponentName, specifics: native.Array<globalAndroid.content.Intent>, intent: globalAndroid.content.Intent, flags: number, outSpecificItems: native.Array<globalAndroid.view.MenuItem>): number;
					public setGroupVisible(group: number, visible: boolean): void;
					public clearHeader(): void;
					public add(title: string): globalAndroid.view.MenuItem;
					public setGroupDividerEnabled(groupDividerEnabled: boolean): void;
					public addSubMenu(titleRes: number): globalAndroid.view.SubMenu;
					public removeItem(id: number): void;
					public removeGroup(group: number): void;
					public findItem(id: number): globalAndroid.view.MenuItem;
					public setGroupCheckable(group: number, checkable: boolean, exclusive: boolean): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export class SubMenuWrapperICS extends androidx.appcompat.view.menu.MenuWrapperICS implements globalAndroid.view.SubMenu {
					public static class: java.lang.Class<androidx.appcompat.view.menu.SubMenuWrapperICS>;
					public performIdentifierAction(id: number, flags: number): boolean;
					public setHeaderIcon(icon: globalAndroid.graphics.drawable.Drawable): globalAndroid.view.SubMenu;
					public setHeaderTitle(title: string): globalAndroid.view.SubMenu;
					public setGroupEnabled(group: number, enabled: boolean): void;
					public size(): number;
					public getItem(): globalAndroid.view.MenuItem;
					public addSubMenu(title: string): globalAndroid.view.SubMenu;
					public clear(): void;
					public close(): void;
					public add(titleRes: number): globalAndroid.view.MenuItem;
					public setHeaderIcon(iconRes: number): globalAndroid.view.SubMenu;
					public getItem(index: number): globalAndroid.view.MenuItem;
					public isShortcutKey(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public setQwertyMode(isQwerty: boolean): void;
					public setHeaderView(view: globalAndroid.view.View): globalAndroid.view.SubMenu;
					public removeGroup(groupId: number): void;
					public add(groupId: number, itemId: number, order: number, title: string): globalAndroid.view.MenuItem;
					public setGroupVisible(group: number, visible: boolean): void;
					public clearHeader(): void;
					public add(title: string): globalAndroid.view.MenuItem;
					public performShortcut(keyCode: number, event: globalAndroid.view.KeyEvent, flags: number): boolean;
					public setHeaderTitle(titleRes: number): globalAndroid.view.SubMenu;
					public add(groupId: number, itemId: number, order: number, titleRes: number): globalAndroid.view.MenuItem;
					public addIntentOptions(groupId: number, itemId: number, order: number, caller: globalAndroid.content.ComponentName, specifics: native.Array<globalAndroid.content.Intent>, intent: globalAndroid.content.Intent, flags: number, outSpecificItems: native.Array<globalAndroid.view.MenuItem>): number;
					public addSubMenu(groupId: number, itemId: number, order: number, titleRes: number): globalAndroid.view.SubMenu;
					public setGroupDividerEnabled(groupDividerEnabled: boolean): void;
					public setIcon(iconRes: number): globalAndroid.view.SubMenu;
					public hasVisibleItems(): boolean;
					public setIcon(icon: globalAndroid.graphics.drawable.Drawable): globalAndroid.view.SubMenu;
					public addSubMenu(titleRes: number): globalAndroid.view.SubMenu;
					public removeItem(id: number): void;
					public findItem(id: number): globalAndroid.view.MenuItem;
					public addSubMenu(groupId: number, itemId: number, order: number, title: string): globalAndroid.view.SubMenu;
					public setGroupCheckable(group: number, checkable: boolean, exclusive: boolean): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export abstract class AbsActionBarView extends globalAndroid.view.ViewGroup {
				public static class: java.lang.Class<androidx.appcompat.widget.AbsActionBarView>;
				public mVisAnimListener: androidx.appcompat.widget.AbsActionBarView.VisibilityAnimListener;
				public mPopupContext: globalAndroid.content.Context;
				public mMenuView: androidx.appcompat.widget.ActionMenuView;
				public mActionMenuPresenter: androidx.appcompat.widget.ActionMenuPresenter;
				public mContentHeight: number;
				public mVisibilityAnim: androidx.core.view.ViewPropertyAnimatorCompat;
				/** @deprecated */
				public invalidateChild(child: globalAndroid.view.View, dirty: globalAndroid.graphics.Rect): void;
				public animateToVisibility(visibility: number): void;
				public focusSearch(direction: number): globalAndroid.view.View;
				public showOverflowMenu(): boolean;
				public onNestedScrollAccepted(child: globalAndroid.view.View, target: globalAndroid.view.View, axes: number): void;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
				public setupAnimatorToVisibility(visibility: number, duration: number): androidx.core.view.ViewPropertyAnimatorCompat;
				public childDrawableStateChanged(child: globalAndroid.view.View): void;
				public onStopNestedScroll(child: globalAndroid.view.View): void;
				public onHoverEvent(ev: globalAndroid.view.MotionEvent): boolean;
				public isLayoutRequested(): boolean;
				public sendAccessibilityEvent(eventType: number): void;
				public onNestedPrePerformAccessibilityAction(target: globalAndroid.view.View, action: number, bundle2: globalAndroid.os.Bundle): boolean;
				public addView(child: globalAndroid.view.View, index: number): void;
				public requestFitSystemWindows(): void;
				public getTextDirection(): number;
				public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback, type: number): globalAndroid.view.ActionMode;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
				public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public onConfigurationChanged(newConfig: globalAndroid.content.res.Configuration): void;
				public getTextAlignment(): number;
				/** @deprecated */
				public invalidateChildInParent(location: native.Array<number>, dirty: globalAndroid.graphics.Rect): globalAndroid.view.ViewParent;
				public getParentForAccessibility(): globalAndroid.view.ViewParent;
				public onNestedFling(target: globalAndroid.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
				public setVisibility(visibility: number): void;
				public keyboardNavigationClusterSearch(currentCluster: globalAndroid.view.View, direction: number): globalAndroid.view.View;
				public hideOverflowMenu(): boolean;
				public addView(child: globalAndroid.view.View, width: number, height: number): void;
				public isTextDirectionResolved(): boolean;
				public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
				public getAnimatedVisibility(): number;
				public childHasTransientStateChanged(child: globalAndroid.view.View, childHasTransientState: boolean): void;
				public focusableViewAvailable(v: globalAndroid.view.View): void;
				public setContentHeight(height: number): void;
				public showContextMenuForChild(originalView: globalAndroid.view.View): boolean;
				public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public getContentHeight(): number;
				public recomputeViewAttributes(child: globalAndroid.view.View): void;
				public addView(child: globalAndroid.view.View): void;
				public requestSendAccessibilityEvent(child: globalAndroid.view.View, event: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
				public isLayoutDirectionResolved(): boolean;
				public isTextAlignmentResolved(): boolean;
				public getLayoutDirection(): number;
				public addView(child: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public canResolveTextDirection(): boolean;
				public canResolveTextAlignment(): boolean;
				public notifySubtreeAccessibilityStateChanged(child: globalAndroid.view.View, source: globalAndroid.view.View, changeType: number): void;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
				public postShowOverflowMenu(): void;
				public static next(x: number, val: number, isRtl: boolean): number;
				public updateViewLayout(view: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public onNestedScroll(target: globalAndroid.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
				public requestLayout(): void;
				public focusSearch(focused: globalAndroid.view.View, direction: number): globalAndroid.view.View;
				public requestTransparentRegion(child: globalAndroid.view.View): void;
				public onStartNestedScroll(child: globalAndroid.view.View, target: globalAndroid.view.View, nestedScrollAxes: number): boolean;
				/** @deprecated */
				public requestFitSystemWindows(): void;
				public showContextMenuForChild(originalView: globalAndroid.view.View, x: number, y: number): boolean;
				public dismissPopupMenus(): void;
				public bringChildToFront(child: globalAndroid.view.View): void;
				public onNestedPreScroll(target: globalAndroid.view.View, dx: number, dy: number, consumed: native.Array<number>): void;
				public clearChildFocus(child: globalAndroid.view.View): void;
				public onDescendantInvalidated(child: globalAndroid.view.View, target: globalAndroid.view.View): void;
				public removeView(view: globalAndroid.view.View): void;
				public requestChildRectangleOnScreen(child: globalAndroid.view.View, rectangle: globalAndroid.graphics.Rect, immediate: boolean): boolean;
				public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public isOverflowReserved(): boolean;
				public canShowOverflowMenu(): boolean;
				public getChildVisibleRect(child: globalAndroid.view.View, r: globalAndroid.graphics.Rect, offset: globalAndroid.graphics.Point): boolean;
				public requestChildFocus(child: globalAndroid.view.View, focused: globalAndroid.view.View): void;
				public createContextMenu(menu: globalAndroid.view.ContextMenu): void;
				public onTouchEvent(ev: globalAndroid.view.MotionEvent): boolean;
				public positionChild(child: globalAndroid.view.View, x: number, y: number, contentHeight: number, reverse: boolean): number;
				public canResolveLayoutDirection(): boolean;
				public isOverflowMenuShowing(): boolean;
				public addView(child: globalAndroid.view.View, index: number, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public onHoverEvent(event: globalAndroid.view.MotionEvent): boolean;
				public isOverflowMenuShowPending(): boolean;
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public onTouchEvent(event: globalAndroid.view.MotionEvent): boolean;
				public onNestedPreFling(target: globalAndroid.view.View, velocityX: number, velocityY: number): boolean;
				public getParent(): globalAndroid.view.ViewParent;
				public measureChildView(child: globalAndroid.view.View, availableWidth: number, childSpecHeight: number, spacing: number): number;
			}
			export module AbsActionBarView {
				export class VisibilityAnimListener extends java.lang.Object implements androidx.core.view.ViewPropertyAnimatorListener {
					public static class: java.lang.Class<androidx.appcompat.widget.AbsActionBarView.VisibilityAnimListener>;
					public withFinalVisibility(animation: androidx.core.view.ViewPropertyAnimatorCompat, visibility: number): androidx.appcompat.widget.AbsActionBarView.VisibilityAnimListener;
					public onAnimationCancel(view: globalAndroid.view.View): void;
					public onAnimationEnd(view: globalAndroid.view.View): void;
					public onAnimationStart(view: globalAndroid.view.View): void;
					public constructor(this0: androidx.appcompat.widget.AbsActionBarView);
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class ActionBarBackgroundDrawable extends globalAndroid.graphics.drawable.Drawable {
				public static class: java.lang.Class<androidx.appcompat.widget.ActionBarBackgroundDrawable>;
				/** @deprecated */
				public getOpacity(): number;
				public setColorFilter(colorFilter0: globalAndroid.graphics.ColorFilter): void;
				public draw(canvas: globalAndroid.graphics.Canvas): void;
				public constructor(container: androidx.appcompat.widget.ActionBarContainer);
				public setAlpha(int0: number): void;
				public draw(canvas0: globalAndroid.graphics.Canvas): void;
				public getOutline(outline: any): void;
				public setColorFilter(cf: globalAndroid.graphics.ColorFilter): void;
				/** @deprecated */
				public setColorFilter(color: number, mode: globalAndroid.graphics.PorterDuff.Mode): void;
				public setAlpha(alpha: number): void;
				public getOpacity(): number;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class ActionBarContainer extends globalAndroid.widget.FrameLayout {
				public static class: java.lang.Class<androidx.appcompat.widget.ActionBarContainer>;
				/** @deprecated */
				public invalidateChild(child: globalAndroid.view.View, dirty: globalAndroid.graphics.Rect): void;
				public focusSearch(direction: number): globalAndroid.view.View;
				public constructor(context: globalAndroid.content.Context);
				public setStackedBackground(bg: globalAndroid.graphics.drawable.Drawable): void;
				public onNestedScrollAccepted(child: globalAndroid.view.View, target: globalAndroid.view.View, axes: number): void;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
				public getTabContainer(): globalAndroid.view.View;
				public childDrawableStateChanged(child: globalAndroid.view.View): void;
				public onStopNestedScroll(child: globalAndroid.view.View): void;
				public onHoverEvent(ev: globalAndroid.view.MotionEvent): boolean;
				public isLayoutRequested(): boolean;
				public sendAccessibilityEvent(eventType: number): void;
				public onNestedPrePerformAccessibilityAction(target: globalAndroid.view.View, action: number, bundle2: globalAndroid.os.Bundle): boolean;
				public addView(child: globalAndroid.view.View, index: number): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
				public requestFitSystemWindows(): void;
				public startActionModeForChild(child: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback, type: number): globalAndroid.view.ActionMode;
				public getTextDirection(): number;
				public setSplitBackground(bg: globalAndroid.graphics.drawable.Drawable): void;
				public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback, type: number): globalAndroid.view.ActionMode;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
				public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public getTextAlignment(): number;
				public onLayout(changed: boolean, l: number, t: number, r: number, b: number): void;
				/** @deprecated */
				public invalidateChildInParent(location: native.Array<number>, dirty: globalAndroid.graphics.Rect): globalAndroid.view.ViewParent;
				public getParentForAccessibility(): globalAndroid.view.ViewParent;
				public onInterceptTouchEvent(ev: globalAndroid.view.MotionEvent): boolean;
				public onNestedFling(target: globalAndroid.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
				public setTransitioning(isTransitioning: boolean): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
				public setVisibility(visibility: number): void;
				public keyboardNavigationClusterSearch(currentCluster: globalAndroid.view.View, direction: number): globalAndroid.view.View;
				public onLayout(changed: boolean, left: number, top: number, right: number, bottom: number): void;
				public verifyDrawable(who: globalAndroid.graphics.drawable.Drawable): boolean;
				public addView(child: globalAndroid.view.View, width: number, height: number): void;
				public isTextDirectionResolved(): boolean;
				public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
				public childHasTransientStateChanged(child: globalAndroid.view.View, childHasTransientState: boolean): void;
				public focusableViewAvailable(v: globalAndroid.view.View): void;
				public showContextMenuForChild(originalView: globalAndroid.view.View): boolean;
				public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public recomputeViewAttributes(child: globalAndroid.view.View): void;
				public addView(child: globalAndroid.view.View): void;
				public drawableStateChanged(): void;
				public requestSendAccessibilityEvent(child: globalAndroid.view.View, event: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
				public isLayoutDirectionResolved(): boolean;
				public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
				public isTextAlignmentResolved(): boolean;
				public getLayoutDirection(): number;
				public addView(child: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public jumpDrawablesToCurrentState(): void;
				public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public canResolveTextDirection(): boolean;
				public canResolveTextAlignment(): boolean;
				public onFinishInflate(): void;
				public setPrimaryBackground(bg: globalAndroid.graphics.drawable.Drawable): void;
				public notifySubtreeAccessibilityStateChanged(child: globalAndroid.view.View, source: globalAndroid.view.View, changeType: number): void;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
				public updateViewLayout(view: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public onNestedScroll(target: globalAndroid.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
				public requestLayout(): void;
				public startActionModeForChild(child: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
				public focusSearch(focused: globalAndroid.view.View, direction: number): globalAndroid.view.View;
				public requestTransparentRegion(child: globalAndroid.view.View): void;
				public onStartNestedScroll(child: globalAndroid.view.View, target: globalAndroid.view.View, nestedScrollAxes: number): boolean;
				/** @deprecated */
				public requestFitSystemWindows(): void;
				public showContextMenuForChild(originalView: globalAndroid.view.View, x: number, y: number): boolean;
				public bringChildToFront(child: globalAndroid.view.View): void;
				public onNestedPreScroll(target: globalAndroid.view.View, dx: number, dy: number, consumed: native.Array<number>): void;
				public clearChildFocus(child: globalAndroid.view.View): void;
				public onDescendantInvalidated(child: globalAndroid.view.View, target: globalAndroid.view.View): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public removeView(view: globalAndroid.view.View): void;
				public requestChildRectangleOnScreen(child: globalAndroid.view.View, rectangle: globalAndroid.graphics.Rect, immediate: boolean): boolean;
				public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public getChildVisibleRect(child: globalAndroid.view.View, r: globalAndroid.graphics.Rect, offset: globalAndroid.graphics.Point): boolean;
				public requestChildFocus(child: globalAndroid.view.View, focused: globalAndroid.view.View): void;
				public createContextMenu(menu: globalAndroid.view.ContextMenu): void;
				public onTouchEvent(ev: globalAndroid.view.MotionEvent): boolean;
				public canResolveLayoutDirection(): boolean;
				public addView(child: globalAndroid.view.View, index: number, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public onHoverEvent(event: globalAndroid.view.MotionEvent): boolean;
				public setTabContainer(tabView: androidx.appcompat.widget.ScrollingTabContainerView): void;
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public onTouchEvent(event: globalAndroid.view.MotionEvent): boolean;
				public onNestedPreFling(target: globalAndroid.view.View, velocityX: number, velocityY: number): boolean;
				public getParent(): globalAndroid.view.ViewParent;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class ActionBarContextView extends androidx.appcompat.widget.AbsActionBarView {
				public static class: java.lang.Class<androidx.appcompat.widget.ActionBarContextView>;
				/** @deprecated */
				public invalidateChild(child: globalAndroid.view.View, dirty: globalAndroid.graphics.Rect): void;
				public setTitleOptional(titleOptional: boolean): void;
				public focusSearch(direction: number): globalAndroid.view.View;
				public constructor(context: globalAndroid.content.Context);
				public showOverflowMenu(): boolean;
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
				public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback, type: number): globalAndroid.view.ActionMode;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
				public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public getTextAlignment(): number;
				public onLayout(changed: boolean, l: number, t: number, r: number, b: number): void;
				/** @deprecated */
				public invalidateChildInParent(location: native.Array<number>, dirty: globalAndroid.graphics.Rect): globalAndroid.view.ViewParent;
				public getParentForAccessibility(): globalAndroid.view.ViewParent;
				public onNestedFling(target: globalAndroid.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
				public generateLayoutParams(p: globalAndroid.view.ViewGroup.LayoutParams): globalAndroid.view.ViewGroup.LayoutParams;
				public generateLayoutParams(attrs: globalAndroid.util.AttributeSet): globalAndroid.view.ViewGroup.LayoutParams;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
				public keyboardNavigationClusterSearch(currentCluster: globalAndroid.view.View, direction: number): globalAndroid.view.View;
				public hideOverflowMenu(): boolean;
				public addView(child: globalAndroid.view.View, width: number, height: number): void;
				public isTextDirectionResolved(): boolean;
				public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
				public childHasTransientStateChanged(child: globalAndroid.view.View, childHasTransientState: boolean): void;
				public onDetachedFromWindow(): void;
				public focusableViewAvailable(v: globalAndroid.view.View): void;
				public setContentHeight(height: number): void;
				public getSubtitle(): string;
				public showContextMenuForChild(originalView: globalAndroid.view.View): boolean;
				public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public generateDefaultLayoutParams(): globalAndroid.view.ViewGroup.LayoutParams;
				public recomputeViewAttributes(child: globalAndroid.view.View): void;
				public addView(child: globalAndroid.view.View): void;
				public requestSendAccessibilityEvent(child: globalAndroid.view.View, event: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
				public isLayoutDirectionResolved(): boolean;
				public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
				public isTextAlignmentResolved(): boolean;
				public getLayoutDirection(): number;
				public addView(child: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onLayout(boolean0: boolean, int1: number, int2: number, int3: number, int4: number): void;
				public canResolveTextDirection(): boolean;
				public canResolveTextAlignment(): boolean;
				public notifySubtreeAccessibilityStateChanged(child: globalAndroid.view.View, source: globalAndroid.view.View, changeType: number): void;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
				public isTitleOptional(): boolean;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyle: number);
				public updateViewLayout(view: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public onNestedScroll(target: globalAndroid.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
				public requestLayout(): void;
				public focusSearch(focused: globalAndroid.view.View, direction: number): globalAndroid.view.View;
				public requestTransparentRegion(child: globalAndroid.view.View): void;
				public onStartNestedScroll(child: globalAndroid.view.View, target: globalAndroid.view.View, nestedScrollAxes: number): boolean;
				/** @deprecated */
				public requestFitSystemWindows(): void;
				public setTitle(title: string): void;
				public showContextMenuForChild(originalView: globalAndroid.view.View, x: number, y: number): boolean;
				public bringChildToFront(child: globalAndroid.view.View): void;
				public onNestedPreScroll(target: globalAndroid.view.View, dx: number, dy: number, consumed: native.Array<number>): void;
				public clearChildFocus(child: globalAndroid.view.View): void;
				public setCustomView(view: globalAndroid.view.View): void;
				public killMode(): void;
				public onDescendantInvalidated(child: globalAndroid.view.View, target: globalAndroid.view.View): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public removeView(view: globalAndroid.view.View): void;
				public onInitializeAccessibilityEvent(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public requestChildRectangleOnScreen(child: globalAndroid.view.View, rectangle: globalAndroid.graphics.Rect, immediate: boolean): boolean;
				public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public getChildVisibleRect(child: globalAndroid.view.View, r: globalAndroid.graphics.Rect, offset: globalAndroid.graphics.Point): boolean;
				public requestChildFocus(child: globalAndroid.view.View, focused: globalAndroid.view.View): void;
				public createContextMenu(menu: globalAndroid.view.ContextMenu): void;
				public canResolveLayoutDirection(): boolean;
				public getTitle(): string;
				public setSubtitle(subtitle: string): void;
				public isOverflowMenuShowing(): boolean;
				public addView(child: globalAndroid.view.View, index: number, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public initForMode(mode: androidx.appcompat.view.ActionMode): void;
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public onNestedPreFling(target: globalAndroid.view.View, velocityX: number, velocityY: number): boolean;
				public closeMode(): void;
				public getParent(): globalAndroid.view.ViewParent;
				public shouldDelayChildPressedState(): boolean;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class ActionBarOverlayLayout extends globalAndroid.view.ViewGroup implements androidx.appcompat.widget.DecorContentParent, androidx.core.view.NestedScrollingParent, androidx.core.view.NestedScrollingParent2, androidx.core.view.NestedScrollingParent3 {
				public static class: java.lang.Class<androidx.appcompat.widget.ActionBarOverlayLayout>;
				/** @deprecated */
				public invalidateChild(child: globalAndroid.view.View, dirty: globalAndroid.graphics.Rect): void;
				public generateDefaultLayoutParams(): androidx.appcompat.widget.ActionBarOverlayLayout.LayoutParams;
				public focusSearch(direction: number): globalAndroid.view.View;
				public childDrawableStateChanged(child: globalAndroid.view.View): void;
				public onStopNestedScroll(child: globalAndroid.view.View): void;
				/** @deprecated */
				public fitSystemWindows(insets: globalAndroid.graphics.Rect): boolean;
				public isLayoutRequested(): boolean;
				public onNestedPrePerformAccessibilityAction(target: globalAndroid.view.View, action: number, bundle2: globalAndroid.os.Bundle): boolean;
				public restoreToolbarHierarchyState(toolbarStates: globalAndroid.util.SparseArray<globalAndroid.os.Parcelable>): void;
				public getTextDirection(): number;
				public onWindowVisibilityChanged(visibility: number): void;
				public generateLayoutParams(attrs: globalAndroid.util.AttributeSet): androidx.appcompat.widget.ActionBarOverlayLayout.LayoutParams;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
				public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				/** @deprecated */
				public invalidateChildInParent(location: native.Array<number>, dirty: globalAndroid.graphics.Rect): globalAndroid.view.ViewParent;
				public getParentForAccessibility(): globalAndroid.view.ViewParent;
				public onNestedFling(target: globalAndroid.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
				public generateLayoutParams(attrs: globalAndroid.util.AttributeSet): globalAndroid.view.ViewGroup.LayoutParams;
				public onNestedScrollAccepted(child: globalAndroid.view.View, target: globalAndroid.view.View, axes: number, type: number): void;
				public keyboardNavigationClusterSearch(currentCluster: globalAndroid.view.View, direction: number): globalAndroid.view.View;
				public onLayout(changed: boolean, left: number, top: number, right: number, bottom: number): void;
				public hideOverflowMenu(): boolean;
				public setShowingForActionMode(showing: boolean): void;
				public isTextDirectionResolved(): boolean;
				public onStartNestedScroll(child: globalAndroid.view.View, target: globalAndroid.view.View, axes: number): boolean;
				public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
				public showContextMenuForChild(originalView: globalAndroid.view.View): boolean;
				public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public onApplyWindowInsets(in0: globalAndroid.view.WindowInsets): globalAndroid.view.WindowInsets;
				public recomputeViewAttributes(child: globalAndroid.view.View): void;
				public onStartNestedScroll(child: globalAndroid.view.View, target: globalAndroid.view.View, axes: number, type: number): boolean;
				public isLayoutDirectionResolved(): boolean;
				public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onLayout(boolean0: boolean, int1: number, int2: number, int3: number, int4: number): void;
				public onApplyWindowInsets(insets: globalAndroid.view.WindowInsets): globalAndroid.view.WindowInsets;
				public saveToolbarHierarchyState(toolbarStates: globalAndroid.util.SparseArray<globalAndroid.os.Parcelable>): void;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
				public updateViewLayout(view: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public onNestedScroll(target: globalAndroid.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
				public focusSearch(focused: globalAndroid.view.View, direction: number): globalAndroid.view.View;
				public setLogo(resId: number): void;
				/** @deprecated */
				public requestFitSystemWindows(): void;
				public showContextMenuForChild(originalView: globalAndroid.view.View, x: number, y: number): boolean;
				public bringChildToFront(child: globalAndroid.view.View): void;
				public setMenu(menu: globalAndroid.view.Menu, cb: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
				public clearChildFocus(child: globalAndroid.view.View): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public dismissPopups(): void;
				public onWindowSystemUiVisibilityChanged(visible: number): void;
				public setHideOnContentScrollEnabled(hideOnContentScroll: boolean): void;
				public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public canShowOverflowMenu(): boolean;
				public getTitle(): string;
				public hasIcon(): boolean;
				public isOverflowMenuShowing(): boolean;
				public addView(child: globalAndroid.view.View, index: number, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public isOverflowMenuShowPending(): boolean;
				public onNestedScroll(target: globalAndroid.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number, type: number): void;
				public getParent(): globalAndroid.view.ViewParent;
				public setHasNonEmbeddedTabs(hasNonEmbeddedTabs: boolean): void;
				public setUiOptions(uiOptions: number): void;
				public hasLogo(): boolean;
				public constructor(context: globalAndroid.content.Context);
				public checkLayoutParams(p: globalAndroid.view.ViewGroup.LayoutParams): boolean;
				public onNestedScrollAccepted(child: globalAndroid.view.View, target: globalAndroid.view.View, axes: number): void;
				public showOverflowMenu(): boolean;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
				public fitSystemWindows(insets: globalAndroid.graphics.Rect): boolean;
				public onStopNestedScroll(target: globalAndroid.view.View, type: number): void;
				public getActionBarHideOffset(): number;
				public setIcon(resId: number): void;
				public sendAccessibilityEvent(eventType: number): void;
				public addView(child: globalAndroid.view.View, index: number): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
				public setIcon(d: globalAndroid.graphics.drawable.Drawable): void;
				public requestFitSystemWindows(): void;
				public draw(c: globalAndroid.graphics.Canvas): void;
				public getNestedScrollAxes(): number;
				public setActionBarHideOffset(offset: number): void;
				public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback, type: number): globalAndroid.view.ActionMode;
				public onConfigurationChanged(newConfig: globalAndroid.content.res.Configuration): void;
				public getTextAlignment(): number;
				public setActionBarVisibilityCallback(cb: androidx.appcompat.widget.ActionBarOverlayLayout.ActionBarVisibilityCallback): void;
				public generateLayoutParams(p: globalAndroid.view.ViewGroup.LayoutParams): globalAndroid.view.ViewGroup.LayoutParams;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
				public addView(child: globalAndroid.view.View, width: number, height: number): void;
				public onNestedPreScroll(target: globalAndroid.view.View, dx: number, dy: number, consumed: native.Array<number>, type: number): void;
				public childHasTransientStateChanged(child: globalAndroid.view.View, childHasTransientState: boolean): void;
				public onDetachedFromWindow(): void;
				public focusableViewAvailable(v: globalAndroid.view.View): void;
				public setMenuPrepared(): void;
				public generateDefaultLayoutParams(): globalAndroid.view.ViewGroup.LayoutParams;
				public addView(child: globalAndroid.view.View): void;
				public requestSendAccessibilityEvent(child: globalAndroid.view.View, event: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
				public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
				public isTextAlignmentResolved(): boolean;
				public getLayoutDirection(): number;
				public addView(child: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public canResolveTextDirection(): boolean;
				public canResolveTextAlignment(): boolean;
				public isHideOnContentScrollEnabled(): boolean;
				public initFeature(windowFeature: number): void;
				public notifySubtreeAccessibilityStateChanged(child: globalAndroid.view.View, source: globalAndroid.view.View, changeType: number): void;
				public onNestedScroll(target: globalAndroid.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number, type: number, consumed: native.Array<number>): void;
				public requestLayout(): void;
				public onStartNestedScroll(child: globalAndroid.view.View, target: globalAndroid.view.View, nestedScrollAxes: number): boolean;
				public requestTransparentRegion(child: globalAndroid.view.View): void;
				public onStopNestedScroll(target: globalAndroid.view.View): void;
				public onNestedPreScroll(target: globalAndroid.view.View, dx: number, dy: number, consumed: native.Array<number>): void;
				public isInOverlayMode(): boolean;
				public setOverlayMode(overlayMode: boolean): void;
				public draw(canvas: globalAndroid.graphics.Canvas): void;
				public onDescendantInvalidated(child: globalAndroid.view.View, target: globalAndroid.view.View): void;
				public removeView(view: globalAndroid.view.View): void;
				public requestChildRectangleOnScreen(child: globalAndroid.view.View, rectangle: globalAndroid.graphics.Rect, immediate: boolean): boolean;
				public getChildVisibleRect(child: globalAndroid.view.View, r: globalAndroid.graphics.Rect, offset: globalAndroid.graphics.Point): boolean;
				public requestChildFocus(child: globalAndroid.view.View, focused: globalAndroid.view.View): void;
				public createContextMenu(menu: globalAndroid.view.ContextMenu): void;
				public canResolveLayoutDirection(): boolean;
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public onNestedPreFling(target: globalAndroid.view.View, velocityX: number, velocityY: number): boolean;
				public setWindowTitle(title: string): void;
				public shouldDelayChildPressedState(): boolean;
				public setWindowCallback(cb: globalAndroid.view.Window.Callback): void;
			}
			export module ActionBarOverlayLayout {
				export class ActionBarVisibilityCallback extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.widget.ActionBarOverlayLayout.ActionBarVisibilityCallback>;
					/**
					 * Constructs a new instance of the androidx.appcompat.widget.ActionBarOverlayLayout() when extending the interface class.
					 */
					public constructor(implementation: {
						onWindowVisibilityChanged(int0: number): void;
						showForSystem(): void;
						hideForSystem(): void;
						enableContentAnimations(boolean0: boolean): void;
						onContentScrollStarted(): void;
						onContentScrollStopped(): void;
					});
					public constructor();
					public enableContentAnimations(boolean0: boolean): void;
					public onContentScrollStarted(): void;
					public onContentScrollStopped(): void;
					public showForSystem(): void;
					public hideForSystem(): void;
					public onWindowVisibilityChanged(int0: number): void;
				}
				export class LayoutParams extends globalAndroid.view.ViewGroup.MarginLayoutParams {
					public static class: java.lang.Class<androidx.appcompat.widget.ActionBarOverlayLayout.LayoutParams>;
					public constructor(source: globalAndroid.view.ViewGroup.LayoutParams);
					public constructor(c: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
					public constructor(width: number, height: number);
					public constructor(source: globalAndroid.view.ViewGroup.MarginLayoutParams);
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class ActionMenuPresenter extends androidx.appcompat.view.menu.BaseMenuPresenter implements androidx.core.view.ActionProvider.SubUiVisibilityListener {
				public static class: java.lang.Class<androidx.appcompat.widget.ActionMenuPresenter>;
				public onSubMenuSelected(subMenu: androidx.appcompat.view.menu.SubMenuBuilder): boolean;
				public setExpandedActionViewsExclusive(isExclusive: boolean): void;
				public getItemView(item: androidx.appcompat.view.menu.MenuItemImpl, convertView: globalAndroid.view.View, parent: globalAndroid.view.ViewGroup): globalAndroid.view.View;
				public bindItemView(menuItemImpl0: androidx.appcompat.view.menu.MenuItemImpl, itemView1: androidx.appcompat.view.menu.MenuView.ItemView): void;
				public constructor(context: globalAndroid.content.Context);
				public showOverflowMenu(): boolean;
				public getOverflowIcon(): globalAndroid.graphics.drawable.Drawable;
				public flagActionItems(): boolean;
				public constructor(context: globalAndroid.content.Context, menuLayoutRes: number, itemLayoutRes: number);
				public filterLeftoverView(parent: globalAndroid.view.ViewGroup, childIndex: number): boolean;
				public setCallback(cb: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
				public setOverflowIcon(icon: globalAndroid.graphics.drawable.Drawable): void;
				public onSubUiVisibilityChanged(isVisible: boolean): void;
				public updateMenuView(cleared: boolean): void;
				public initForMenu(context: globalAndroid.content.Context, menu: androidx.appcompat.view.menu.MenuBuilder): void;
				public dismissPopupMenus(): boolean;
				public bindItemView(item: androidx.appcompat.view.menu.MenuItemImpl, itemView: androidx.appcompat.view.menu.MenuView.ItemView): void;
				public shouldIncludeItem(childIndex: number, item: androidx.appcompat.view.menu.MenuItemImpl): boolean;
				public expandItemActionView(menu: androidx.appcompat.view.menu.MenuBuilder, item: androidx.appcompat.view.menu.MenuItemImpl): boolean;
				public onRestoreInstanceState(state: globalAndroid.os.Parcelable): void;
				public onConfigurationChanged(newConfig: globalAndroid.content.res.Configuration): void;
				public onSaveInstanceState(): globalAndroid.os.Parcelable;
				public collapseItemActionView(menu: androidx.appcompat.view.menu.MenuBuilder, item: androidx.appcompat.view.menu.MenuItemImpl): boolean;
				public getId(): number;
				public isOverflowReserved(): boolean;
				public getMenuView(root: globalAndroid.view.ViewGroup): androidx.appcompat.view.menu.MenuView;
				public hideSubMenus(): boolean;
				public isOverflowMenuShowing(): boolean;
				public hideOverflowMenu(): boolean;
				public setWidthLimit(width: number, strict: boolean): void;
				public isOverflowMenuShowPending(): boolean;
				public setMenuView(menuView: androidx.appcompat.widget.ActionMenuView): void;
				public setItemLimit(itemCount: number): void;
				public onCloseMenu(menu: androidx.appcompat.view.menu.MenuBuilder, allMenusAreClosing: boolean): void;
				public onSubMenuSelected(menu: androidx.appcompat.view.menu.SubMenuBuilder): boolean;
				public setReserveOverflow(reserveOverflow: boolean): void;
			}
			export module ActionMenuPresenter {
				export class ActionButtonSubmenu extends androidx.appcompat.view.menu.MenuPopupHelper {
					public static class: java.lang.Class<androidx.appcompat.widget.ActionMenuPresenter.ActionButtonSubmenu>;
					public constructor(context: globalAndroid.content.Context, menu: androidx.appcompat.view.menu.MenuBuilder, anchorView: globalAndroid.view.View);
					public constructor(context: globalAndroid.content.Context, menu: androidx.appcompat.view.menu.MenuBuilder, anchorView: globalAndroid.view.View, overflowOnly: boolean, popupStyleAttr: number, popupStyleRes: number);
					public setPresenterCallback(cb: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
					public constructor(param0: androidx.appcompat.widget.ActionMenuPresenter, context: globalAndroid.content.Context, subMenu: androidx.appcompat.view.menu.SubMenuBuilder, anchorView: globalAndroid.view.View);
					public constructor(context: globalAndroid.content.Context, menu: androidx.appcompat.view.menu.MenuBuilder);
					public constructor(context: globalAndroid.content.Context, menu: androidx.appcompat.view.menu.MenuBuilder, anchorView: globalAndroid.view.View, overflowOnly: boolean, popupStyleAttr: number);
					public dismiss(): void;
					public onDismiss(): void;
				}
				export class ActionMenuPopupCallback extends androidx.appcompat.view.menu.ActionMenuItemView.PopupCallback {
					public static class: java.lang.Class<androidx.appcompat.widget.ActionMenuPresenter.ActionMenuPopupCallback>;
					public getPopup(): androidx.appcompat.view.menu.ShowableListMenu;
				}
				export class OpenOverflowRunnable extends java.lang.Object implements java.lang.Runnable {
					public static class: java.lang.Class<androidx.appcompat.widget.ActionMenuPresenter.OpenOverflowRunnable>;
					public run(): void;
					public constructor(param0: androidx.appcompat.widget.ActionMenuPresenter, popup: androidx.appcompat.widget.ActionMenuPresenter.OverflowPopup);
				}
				export class OverflowMenuButton extends androidx.appcompat.widget.AppCompatImageView implements androidx.appcompat.widget.ActionMenuView.ActionMenuChildView {
					public static class: java.lang.Class<androidx.appcompat.widget.ActionMenuPresenter.OverflowMenuButton>;
					public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public sendAccessibilityEvent(eventType: number): void;
					public setFrame(l: number, t: number, r: number, b: number): boolean;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
					public setSupportBackgroundTintList(tint: globalAndroid.content.res.ColorStateList): void;
					public getSupportImageTintMode(): globalAndroid.graphics.PorterDuff.Mode;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
					public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
					public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
					public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
					public setSupportImageTintMode(tintMode: globalAndroid.graphics.PorterDuff.Mode): void;
					public constructor(param0: androidx.appcompat.widget.ActionMenuPresenter, context: globalAndroid.content.Context);
					public setSupportBackgroundTintMode(tintMode: globalAndroid.graphics.PorterDuff.Mode): void;
					public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
					public performClick(): boolean;
					public getSupportBackgroundTintList(): globalAndroid.content.res.ColorStateList;
					public getSupportBackgroundTintMode(): globalAndroid.graphics.PorterDuff.Mode;
					public invalidateDrawable(dr: globalAndroid.graphics.drawable.Drawable): void;
					public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
					public needsDividerAfter(): boolean;
					public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
					public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public getSupportImageTintList(): globalAndroid.content.res.ColorStateList;
					public constructor(context: globalAndroid.content.Context);
					public setSupportImageTintList(tint: globalAndroid.content.res.ColorStateList): void;
					public needsDividerBefore(): boolean;
				}
				export class OverflowPopup extends androidx.appcompat.view.menu.MenuPopupHelper {
					public static class: java.lang.Class<androidx.appcompat.widget.ActionMenuPresenter.OverflowPopup>;
					public constructor(context: globalAndroid.content.Context, menu: androidx.appcompat.view.menu.MenuBuilder, anchorView: globalAndroid.view.View);
					public constructor(context: globalAndroid.content.Context, menu: androidx.appcompat.view.menu.MenuBuilder, anchorView: globalAndroid.view.View, overflowOnly: boolean, popupStyleAttr: number, popupStyleRes: number);
					public setPresenterCallback(cb: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
					public constructor(param0: androidx.appcompat.widget.ActionMenuPresenter, context: globalAndroid.content.Context, menu: androidx.appcompat.view.menu.MenuBuilder, anchorView: globalAndroid.view.View, overflowOnly: boolean);
					public constructor(context: globalAndroid.content.Context, menu: androidx.appcompat.view.menu.MenuBuilder);
					public constructor(context: globalAndroid.content.Context, menu: androidx.appcompat.view.menu.MenuBuilder, anchorView: globalAndroid.view.View, overflowOnly: boolean, popupStyleAttr: number);
					public dismiss(): void;
					public onDismiss(): void;
				}
				export class PopupPresenterCallback extends java.lang.Object implements androidx.appcompat.view.menu.MenuPresenter.Callback {
					public static class: java.lang.Class<androidx.appcompat.widget.ActionMenuPresenter.PopupPresenterCallback>;
					public onCloseMenu(menu: androidx.appcompat.view.menu.MenuBuilder, allMenusAreClosing: boolean): void;
					public onOpenSubMenu(subMenu: androidx.appcompat.view.menu.MenuBuilder): boolean;
				}
				export class SavedState extends java.lang.Object implements globalAndroid.os.Parcelable {
					public static class: java.lang.Class<androidx.appcompat.widget.ActionMenuPresenter.SavedState>;
					public openSubMenuId: number;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<androidx.appcompat.widget.ActionMenuPresenter.SavedState>;
					public describeContents(): number;
					public writeToParcel(dest: globalAndroid.os.Parcel, flags: number): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class ActionMenuView extends androidx.appcompat.widget.LinearLayoutCompat implements androidx.appcompat.view.menu.MenuBuilder.ItemInvoker, androidx.appcompat.view.menu.MenuView {
				public static class: java.lang.Class<androidx.appcompat.widget.ActionMenuView>;
				/** @deprecated */
				public invalidateChild(child: globalAndroid.view.View, dirty: globalAndroid.graphics.Rect): void;
				public focusSearch(direction: number): globalAndroid.view.View;
				public childDrawableStateChanged(child: globalAndroid.view.View): void;
				public onStopNestedScroll(child: globalAndroid.view.View): void;
				public isLayoutRequested(): boolean;
				public onNestedPrePerformAccessibilityAction(target: globalAndroid.view.View, action: number, bundle2: globalAndroid.os.Bundle): boolean;
				public getTextDirection(): number;
				public generateLayoutParams(attrs: globalAndroid.util.AttributeSet): androidx.appcompat.widget.ActionMenuView.LayoutParams;
				public peekMenu(): androidx.appcompat.view.menu.MenuBuilder;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
				public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public onLayout(changed: boolean, l: number, t: number, r: number, b: number): void;
				public setMenuCallbacks(pcb: androidx.appcompat.view.menu.MenuPresenter.Callback, mcb: androidx.appcompat.view.menu.MenuBuilder.Callback): void;
				/** @deprecated */
				public invalidateChildInParent(location: native.Array<number>, dirty: globalAndroid.graphics.Rect): globalAndroid.view.ViewParent;
				public getParentForAccessibility(): globalAndroid.view.ViewParent;
				public onNestedFling(target: globalAndroid.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
				public setOverflowReserved(reserveOverflow: boolean): void;
				public generateLayoutParams(attrs: globalAndroid.util.AttributeSet): globalAndroid.view.ViewGroup.LayoutParams;
				public generateLayoutParams(p: globalAndroid.view.ViewGroup.LayoutParams): androidx.appcompat.widget.ActionMenuView.LayoutParams;
				public getMenu(): globalAndroid.view.Menu;
				public keyboardNavigationClusterSearch(currentCluster: globalAndroid.view.View, direction: number): globalAndroid.view.View;
				public onLayout(changed: boolean, left: number, top: number, right: number, bottom: number): void;
				public hideOverflowMenu(): boolean;
				public isTextDirectionResolved(): boolean;
				public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
				public initialize(menu: androidx.appcompat.view.menu.MenuBuilder): void;
				public showContextMenuForChild(originalView: globalAndroid.view.View): boolean;
				public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public recomputeViewAttributes(child: globalAndroid.view.View): void;
				public isLayoutDirectionResolved(): boolean;
				public generateDefaultLayoutParams(): androidx.appcompat.widget.LinearLayoutCompat.LayoutParams;
				public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public invokeItem(item: androidx.appcompat.view.menu.MenuItemImpl): boolean;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
				public setOverflowIcon(icon: globalAndroid.graphics.drawable.Drawable): void;
				public updateViewLayout(view: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public onNestedScroll(target: globalAndroid.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
				public focusSearch(focused: globalAndroid.view.View, direction: number): globalAndroid.view.View;
				/** @deprecated */
				public requestFitSystemWindows(): void;
				public showContextMenuForChild(originalView: globalAndroid.view.View, x: number, y: number): boolean;
				public dismissPopupMenus(): void;
				public bringChildToFront(child: globalAndroid.view.View): void;
				public clearChildFocus(child: globalAndroid.view.View): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public setPopupTheme(resId: number): void;
				public generateDefaultLayoutParams(): androidx.appcompat.widget.ActionMenuView.LayoutParams;
				public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public isOverflowReserved(): boolean;
				public hasSupportDividerBeforeChildAt(childIndex: number): boolean;
				public isOverflowMenuShowing(): boolean;
				public getWindowAnimations(): number;
				public addView(child: globalAndroid.view.View, index: number, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public isOverflowMenuShowPending(): boolean;
				public getParent(): globalAndroid.view.ViewParent;
				public setExpandedActionViewsExclusive(exclusive: boolean): void;
				public generateLayoutParams(p: globalAndroid.view.ViewGroup.LayoutParams): androidx.appcompat.widget.LinearLayoutCompat.LayoutParams;
				public setPresenter(presenter: androidx.appcompat.widget.ActionMenuPresenter): void;
				public generateOverflowButtonLayoutParams(): androidx.appcompat.widget.ActionMenuView.LayoutParams;
				public constructor(context: globalAndroid.content.Context);
				public checkLayoutParams(p: globalAndroid.view.ViewGroup.LayoutParams): boolean;
				public showOverflowMenu(): boolean;
				public onNestedScrollAccepted(child: globalAndroid.view.View, target: globalAndroid.view.View, axes: number): void;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
				public getOverflowIcon(): globalAndroid.graphics.drawable.Drawable;
				public sendAccessibilityEvent(eventType: number): void;
				public addView(child: globalAndroid.view.View, index: number): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
				public requestFitSystemWindows(): void;
				public dispatchPopulateAccessibilityEvent(event: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
				public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback, type: number): globalAndroid.view.ActionMode;
				public onConfigurationChanged(newConfig: globalAndroid.content.res.Configuration): void;
				public getTextAlignment(): number;
				public generateLayoutParams(p: globalAndroid.view.ViewGroup.LayoutParams): globalAndroid.view.ViewGroup.LayoutParams;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
				public addView(child: globalAndroid.view.View, width: number, height: number): void;
				public childHasTransientStateChanged(child: globalAndroid.view.View, childHasTransientState: boolean): void;
				public onDetachedFromWindow(): void;
				public focusableViewAvailable(v: globalAndroid.view.View): void;
				public generateDefaultLayoutParams(): globalAndroid.view.ViewGroup.LayoutParams;
				public addView(child: globalAndroid.view.View): void;
				public requestSendAccessibilityEvent(child: globalAndroid.view.View, event: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
				public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
				public isTextAlignmentResolved(): boolean;
				public getLayoutDirection(): number;
				public addView(child: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public canResolveTextDirection(): boolean;
				public canResolveTextAlignment(): boolean;
				public notifySubtreeAccessibilityStateChanged(child: globalAndroid.view.View, source: globalAndroid.view.View, changeType: number): void;
				public requestLayout(): void;
				public generateLayoutParams(attrs: globalAndroid.util.AttributeSet): androidx.appcompat.widget.LinearLayoutCompat.LayoutParams;
				public requestTransparentRegion(child: globalAndroid.view.View): void;
				public onStartNestedScroll(child: globalAndroid.view.View, target: globalAndroid.view.View, nestedScrollAxes: number): boolean;
				public onNestedPreScroll(target: globalAndroid.view.View, dx: number, dy: number, consumed: native.Array<number>): void;
				public onDescendantInvalidated(child: globalAndroid.view.View, target: globalAndroid.view.View): void;
				public removeView(view: globalAndroid.view.View): void;
				public requestChildRectangleOnScreen(child: globalAndroid.view.View, rectangle: globalAndroid.graphics.Rect, immediate: boolean): boolean;
				public getChildVisibleRect(child: globalAndroid.view.View, r: globalAndroid.graphics.Rect, offset: globalAndroid.graphics.Point): boolean;
				public requestChildFocus(child: globalAndroid.view.View, focused: globalAndroid.view.View): void;
				public createContextMenu(menu: globalAndroid.view.ContextMenu): void;
				public canResolveLayoutDirection(): boolean;
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public onNestedPreFling(target: globalAndroid.view.View, velocityX: number, velocityY: number): boolean;
				public getPopupTheme(): number;
				public setOnMenuItemClickListener(listener: androidx.appcompat.widget.ActionMenuView.OnMenuItemClickListener): void;
			}
			export module ActionMenuView {
				export class ActionMenuChildView extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.widget.ActionMenuView.ActionMenuChildView>;
					/**
					 * Constructs a new instance of the androidx.appcompat.widget.ActionMenuView() when extending the interface class.
					 */
					public constructor(implementation: {
						needsDividerBefore(): boolean;
						needsDividerAfter(): boolean;
					});
					public constructor();
					public needsDividerBefore(): boolean;
					public needsDividerAfter(): boolean;
				}
				export class ActionMenuPresenterCallback extends java.lang.Object implements androidx.appcompat.view.menu.MenuPresenter.Callback {
					public static class: java.lang.Class<androidx.appcompat.widget.ActionMenuView.ActionMenuPresenterCallback>;
					public onCloseMenu(menu: androidx.appcompat.view.menu.MenuBuilder, allMenusAreClosing: boolean): void;
					public onOpenSubMenu(subMenu: androidx.appcompat.view.menu.MenuBuilder): boolean;
				}
				export class LayoutParams extends androidx.appcompat.widget.LinearLayoutCompat.LayoutParams {
					public static class: java.lang.Class<androidx.appcompat.widget.ActionMenuView.LayoutParams>;
					public isOverflowButton: boolean;
					public cellsUsed: number;
					public extraPixels: number;
					public expandable: boolean;
					public preventEdgeOffset: boolean;
					public constructor(c: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
					public constructor(other: androidx.appcompat.widget.ActionMenuView.LayoutParams);
					public constructor(width: number, height: number, weight: number);
					public constructor(source: androidx.appcompat.widget.LinearLayoutCompat.LayoutParams);
					public constructor(other: globalAndroid.view.ViewGroup.LayoutParams);
					public constructor(width: number, height: number);
					public constructor(p: globalAndroid.view.ViewGroup.LayoutParams);
					public constructor(source: globalAndroid.view.ViewGroup.MarginLayoutParams);
				}
				export class MenuBuilderCallback extends java.lang.Object implements androidx.appcompat.view.menu.MenuBuilder.Callback {
					public static class: java.lang.Class<androidx.appcompat.widget.ActionMenuView.MenuBuilderCallback>;
					public onMenuModeChange(menu: androidx.appcompat.view.menu.MenuBuilder): void;
					public onMenuItemSelected(menu: androidx.appcompat.view.menu.MenuBuilder, item: globalAndroid.view.MenuItem): boolean;
				}
				export class OnMenuItemClickListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.widget.ActionMenuView.OnMenuItemClickListener>;
					/**
					 * Constructs a new instance of the androidx.appcompat.widget.ActionMenuView() when extending the interface class.
					 */
					public constructor(implementation: {
						onMenuItemClick(menuItem0: globalAndroid.view.MenuItem): boolean;
					});
					public constructor();
					public onMenuItemClick(menuItem0: globalAndroid.view.MenuItem): boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class ActivityChooserModel extends globalAndroid.database.DataSetObservable {
				public static class: java.lang.Class<androidx.appcompat.widget.ActivityChooserModel>;
				public static DEFAULT_HISTORY_FILE_NAME: string;
				public static DEFAULT_HISTORY_MAX_LENGTH: number;
				public setIntent(intent: globalAndroid.content.Intent): void;
				public setActivitySorter(activitySorter: androidx.appcompat.widget.ActivityChooserModel.ActivitySorter): void;
				public getIntent(): globalAndroid.content.Intent;
				public getDefaultActivity(): globalAndroid.content.pm.ResolveInfo;
				public getActivityIndex(activity: globalAndroid.content.pm.ResolveInfo): number;
				public setDefaultActivity(index: number): void;
				public getActivity(index: number): globalAndroid.content.pm.ResolveInfo;
				public setOnChooseActivityListener(listener: androidx.appcompat.widget.ActivityChooserModel.OnChooseActivityListener): void;
				public getHistoryMaxSize(): number;
				public getHistorySize(): number;
				public chooseActivity(index: number): globalAndroid.content.Intent;
				public setHistoryMaxSize(historyMaxSize: number): void;
				public static get(context: globalAndroid.content.Context, historyFileName: string): androidx.appcompat.widget.ActivityChooserModel;
				public getActivityCount(): number;
			}
			export module ActivityChooserModel {
				export class ActivityChooserModelClient extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.widget.ActivityChooserModel.ActivityChooserModelClient>;
					/**
					 * Constructs a new instance of the androidx.appcompat.widget.ActivityChooserModel() when extending the interface class.
					 */
					public constructor(implementation: {
						setActivityChooserModel(activityChooserModel0: androidx.appcompat.widget.ActivityChooserModel): void;
					});
					public constructor();
					public setActivityChooserModel(activityChooserModel0: androidx.appcompat.widget.ActivityChooserModel): void;
				}
				export class ActivityResolveInfo extends java.lang.Comparable<androidx.appcompat.widget.ActivityChooserModel.ActivityResolveInfo> {
					public static class: java.lang.Class<androidx.appcompat.widget.ActivityChooserModel.ActivityResolveInfo>;
					public resolveInfo: globalAndroid.content.pm.ResolveInfo;
					public weight: number;
					public equals(obj: any): boolean;
					public toString(): string;
					public compareTo(another: androidx.appcompat.widget.ActivityChooserModel.ActivityResolveInfo): number;
					public constructor(resolveInfo: globalAndroid.content.pm.ResolveInfo);
					public hashCode(): number;
				}
				export class ActivitySorter extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.widget.ActivityChooserModel.ActivitySorter>;
					/**
					 * Constructs a new instance of the androidx.appcompat.widget.ActivityChooserModel() when extending the interface class.
					 */
					public constructor(implementation: {
						sort(intent0: globalAndroid.content.Intent, list1: java.util.List<androidx.appcompat.widget.ActivityChooserModel.ActivityResolveInfo>, list2: java.util.List<androidx.appcompat.widget.ActivityChooserModel.HistoricalRecord>): void;
					});
					public constructor();
					public sort(intent0: globalAndroid.content.Intent, list1: java.util.List<androidx.appcompat.widget.ActivityChooserModel.ActivityResolveInfo>, list2: java.util.List<androidx.appcompat.widget.ActivityChooserModel.HistoricalRecord>): void;
				}
				export class DefaultSorter extends java.lang.Object implements androidx.appcompat.widget.ActivityChooserModel.ActivitySorter {
					public static class: java.lang.Class<androidx.appcompat.widget.ActivityChooserModel.DefaultSorter>;
					public sort(intent: globalAndroid.content.Intent, activities: java.util.List<androidx.appcompat.widget.ActivityChooserModel.ActivityResolveInfo>, historicalRecords: java.util.List<androidx.appcompat.widget.ActivityChooserModel.HistoricalRecord>): void;
				}
				export class HistoricalRecord extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.widget.ActivityChooserModel.HistoricalRecord>;
					public activity: globalAndroid.content.ComponentName;
					public time: number;
					public weight: number;
					public equals(obj: any): boolean;
					public toString(): string;
					public constructor(activityName: string, time: number, weight: number);
					public constructor(activityName: globalAndroid.content.ComponentName, time: number, weight: number);
					public hashCode(): number;
				}
				export class OnChooseActivityListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.widget.ActivityChooserModel.OnChooseActivityListener>;
					/**
					 * Constructs a new instance of the androidx.appcompat.widget.ActivityChooserModel() when extending the interface class.
					 */
					public constructor(implementation: {
						onChooseActivity(activityChooserModel0: androidx.appcompat.widget.ActivityChooserModel, intent1: globalAndroid.content.Intent): boolean;
					});
					public constructor();
					public onChooseActivity(activityChooserModel0: androidx.appcompat.widget.ActivityChooserModel, intent1: globalAndroid.content.Intent): boolean;
				}
				export class PersistHistoryAsyncTask extends globalAndroid.os.AsyncTask<any,java.lang.Void,java.lang.Void> {
					public static class: java.lang.Class<androidx.appcompat.widget.ActivityChooserModel.PersistHistoryAsyncTask>;
					public doInBackground(objects0: native.Array<any>): any;
					public doInBackground(objects0: native.Array<any>): java.lang.Void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class ActivityChooserView extends globalAndroid.view.ViewGroup implements androidx.appcompat.widget.ActivityChooserModel.ActivityChooserModelClient {
				public static class: java.lang.Class<androidx.appcompat.widget.ActivityChooserView>;
				public isShowingPopup(): boolean;
				/** @deprecated */
				public invalidateChild(child: globalAndroid.view.View, dirty: globalAndroid.graphics.Rect): void;
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
				public getDataModel(): androidx.appcompat.widget.ActivityChooserModel;
				public requestFitSystemWindows(): void;
				public setExpandActivityOverflowButtonDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public getTextDirection(): number;
				public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback, type: number): globalAndroid.view.ActionMode;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
				public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public getTextAlignment(): number;
				/** @deprecated */
				public invalidateChildInParent(location: native.Array<number>, dirty: globalAndroid.graphics.Rect): globalAndroid.view.ViewParent;
				public getParentForAccessibility(): globalAndroid.view.ViewParent;
				public setProvider(provider: androidx.core.view.ActionProvider): void;
				public onNestedFling(target: globalAndroid.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
				public keyboardNavigationClusterSearch(currentCluster: globalAndroid.view.View, direction: number): globalAndroid.view.View;
				public onLayout(changed: boolean, left: number, top: number, right: number, bottom: number): void;
				public addView(child: globalAndroid.view.View, width: number, height: number): void;
				public isTextDirectionResolved(): boolean;
				public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
				public childHasTransientStateChanged(child: globalAndroid.view.View, childHasTransientState: boolean): void;
				public onDetachedFromWindow(): void;
				public focusableViewAvailable(v: globalAndroid.view.View): void;
				public showContextMenuForChild(originalView: globalAndroid.view.View): boolean;
				public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public recomputeViewAttributes(child: globalAndroid.view.View): void;
				public addView(child: globalAndroid.view.View): void;
				public requestSendAccessibilityEvent(child: globalAndroid.view.View, event: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
				public isLayoutDirectionResolved(): boolean;
				public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
				public isTextAlignmentResolved(): boolean;
				public getLayoutDirection(): number;
				public addView(child: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public setOnDismissListener(listener: globalAndroid.widget.PopupWindow.OnDismissListener): void;
				public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onLayout(boolean0: boolean, int1: number, int2: number, int3: number, int4: number): void;
				public canResolveTextDirection(): boolean;
				public canResolveTextAlignment(): boolean;
				public notifySubtreeAccessibilityStateChanged(child: globalAndroid.view.View, source: globalAndroid.view.View, changeType: number): void;
				public setActivityChooserModel(dataModel: androidx.appcompat.widget.ActivityChooserModel): void;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyle: number);
				public updateViewLayout(view: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public onNestedScroll(target: globalAndroid.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
				public requestLayout(): void;
				public focusSearch(focused: globalAndroid.view.View, direction: number): globalAndroid.view.View;
				public requestTransparentRegion(child: globalAndroid.view.View): void;
				public onStartNestedScroll(child: globalAndroid.view.View, target: globalAndroid.view.View, nestedScrollAxes: number): boolean;
				/** @deprecated */
				public requestFitSystemWindows(): void;
				public setDefaultActionButtonContentDescription(resourceId: number): void;
				public showContextMenuForChild(originalView: globalAndroid.view.View, x: number, y: number): boolean;
				public showPopup(): boolean;
				public bringChildToFront(child: globalAndroid.view.View): void;
				public onNestedPreScroll(target: globalAndroid.view.View, dx: number, dy: number, consumed: native.Array<number>): void;
				public clearChildFocus(child: globalAndroid.view.View): void;
				public onDescendantInvalidated(child: globalAndroid.view.View, target: globalAndroid.view.View): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public removeView(view: globalAndroid.view.View): void;
				public requestChildRectangleOnScreen(child: globalAndroid.view.View, rectangle: globalAndroid.graphics.Rect, immediate: boolean): boolean;
				public setInitialActivityCount(itemCount: number): void;
				public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public getChildVisibleRect(child: globalAndroid.view.View, r: globalAndroid.graphics.Rect, offset: globalAndroid.graphics.Point): boolean;
				public requestChildFocus(child: globalAndroid.view.View, focused: globalAndroid.view.View): void;
				public createContextMenu(menu: globalAndroid.view.ContextMenu): void;
				public canResolveLayoutDirection(): boolean;
				public dismissPopup(): boolean;
				public addView(child: globalAndroid.view.View, index: number, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public setExpandActivityOverflowButtonContentDescription(resourceId: number): void;
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public onNestedPreFling(target: globalAndroid.view.View, velocityX: number, velocityY: number): boolean;
				public onAttachedToWindow(): void;
				public getParent(): globalAndroid.view.ViewParent;
			}
			export module ActivityChooserView {
				export class ActivityChooserViewAdapter extends globalAndroid.widget.BaseAdapter {
					public static class: java.lang.Class<androidx.appcompat.widget.ActivityChooserView.ActivityChooserViewAdapter>;
					public static MAX_ACTIVITY_COUNT_UNLIMITED: number;
					public static MAX_ACTIVITY_COUNT_DEFAULT: number;
					public getDefaultActivity(): globalAndroid.content.pm.ResolveInfo;
					public getItemViewType(position: number): number;
					public getViewTypeCount(): number;
					public getCount(): number;
					public getShowDefaultActivity(): boolean;
					public areAllItemsEnabled(): boolean;
					public isEnabled(position: number): boolean;
					public getActivityCount(): number;
					public measureContentWidth(): number;
					public setShowDefaultActivity(showDefaultActivity: boolean, highlightDefaultActivity: boolean): void;
					public getItemId(position: number): number;
					public getDataModel(): androidx.appcompat.widget.ActivityChooserModel;
					public setShowFooterView(showFooterView: boolean): void;
					public getItem(position: number): any;
					public getHistorySize(): number;
					public setMaxActivityCount(maxActivityCount: number): void;
					public setDataModel(dataModel: androidx.appcompat.widget.ActivityChooserModel): void;
					public getView(position: number, convertView: globalAndroid.view.View, parent: globalAndroid.view.ViewGroup): globalAndroid.view.View;
					public getDropDownView(position: number, convertView: globalAndroid.view.View, parent: globalAndroid.view.ViewGroup): globalAndroid.view.View;
				}
				export class Callbacks extends java.lang.Object implements globalAndroid.widget.AdapterView.OnItemClickListener, globalAndroid.view.View.OnClickListener, globalAndroid.view.View.OnLongClickListener, globalAndroid.widget.PopupWindow.OnDismissListener {
					public static class: java.lang.Class<androidx.appcompat.widget.ActivityChooserView.Callbacks>;
					public onItemClick(parent: globalAndroid.widget.AdapterView<any>, view: globalAndroid.view.View, position: number, id: number): void;
					public onClick(view: globalAndroid.view.View): void;
					public onLongClick(view: globalAndroid.view.View): boolean;
					public onDismiss(): void;
				}
				export class InnerLayout extends globalAndroid.widget.LinearLayout {
					public static class: java.lang.Class<androidx.appcompat.widget.ActivityChooserView.InnerLayout>;
					public showContextMenuForChild(originalView: globalAndroid.view.View, x: number, y: number): boolean;
					public requestTransparentRegion(child: globalAndroid.view.View): void;
					public childDrawableStateChanged(child: globalAndroid.view.View): void;
					public onNestedFling(target: globalAndroid.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
					public isLayoutRequested(): boolean;
					/** @deprecated */
					public invalidateChild(child: globalAndroid.view.View, dirty: globalAndroid.graphics.Rect): void;
					public focusableViewAvailable(v: globalAndroid.view.View): void;
					public focusSearch(direction: number): globalAndroid.view.View;
					public isTextDirectionResolved(): boolean;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
					public isLayoutDirectionResolved(): boolean;
					public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public showContextMenuForChild(originalView: globalAndroid.view.View): boolean;
					public onNestedScroll(target: globalAndroid.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
					public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
					public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
					public requestSendAccessibilityEvent(child: globalAndroid.view.View, event: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
					public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
					public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback, type: number): globalAndroid.view.ActionMode;
					public getLayoutDirection(): number;
					public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
					public onStartNestedScroll(child: globalAndroid.view.View, target: globalAndroid.view.View, nestedScrollAxes: number): boolean;
					/** @deprecated */
					public invalidateChildInParent(location: native.Array<number>, dirty: globalAndroid.graphics.Rect): globalAndroid.view.ViewParent;
					public recomputeViewAttributes(child: globalAndroid.view.View): void;
					public notifySubtreeAccessibilityStateChanged(child: globalAndroid.view.View, source: globalAndroid.view.View, changeType: number): void;
					public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
					public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public addView(child: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
					public constructor(context: globalAndroid.content.Context);
					public getTextDirection(): number;
					public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
					public requestFitSystemWindows(): void;
					public getParent(): globalAndroid.view.ViewParent;
					public isTextAlignmentResolved(): boolean;
					public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public sendAccessibilityEvent(eventType: number): void;
					public getChildVisibleRect(child: globalAndroid.view.View, r: globalAndroid.graphics.Rect, offset: globalAndroid.graphics.Point): boolean;
					public requestChildRectangleOnScreen(child: globalAndroid.view.View, rectangle: globalAndroid.graphics.Rect, immediate: boolean): boolean;
					public canResolveTextAlignment(): boolean;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
					/** @deprecated */
					public requestFitSystemWindows(): void;
					public addView(child: globalAndroid.view.View): void;
					public canResolveTextDirection(): boolean;
					public updateViewLayout(view: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
					public bringChildToFront(child: globalAndroid.view.View): void;
					public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
					public onNestedPreScroll(target: globalAndroid.view.View, dx: number, dy: number, consumed: native.Array<number>): void;
					public clearChildFocus(child: globalAndroid.view.View): void;
					public requestLayout(): void;
					public createContextMenu(menu: globalAndroid.view.ContextMenu): void;
					public getParentForAccessibility(): globalAndroid.view.ViewParent;
					public addView(child: globalAndroid.view.View, index: number, params: globalAndroid.view.ViewGroup.LayoutParams): void;
					public childHasTransientStateChanged(child: globalAndroid.view.View, childHasTransientState: boolean): void;
					public canResolveLayoutDirection(): boolean;
					public onNestedScrollAccepted(child: globalAndroid.view.View, target: globalAndroid.view.View, axes: number): void;
					public getTextAlignment(): number;
					public onDescendantInvalidated(child: globalAndroid.view.View, target: globalAndroid.view.View): void;
					public onNestedPrePerformAccessibilityAction(target: globalAndroid.view.View, action: number, bundle2: globalAndroid.os.Bundle): boolean;
					public keyboardNavigationClusterSearch(currentCluster: globalAndroid.view.View, direction: number): globalAndroid.view.View;
					public addView(child: globalAndroid.view.View, width: number, height: number): void;
					public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
					public requestChildFocus(child: globalAndroid.view.View, focused: globalAndroid.view.View): void;
					public onStopNestedScroll(child: globalAndroid.view.View): void;
					public onNestedPreFling(target: globalAndroid.view.View, velocityX: number, velocityY: number): boolean;
					public addView(child: globalAndroid.view.View, index: number): void;
					public removeView(view: globalAndroid.view.View): void;
					public focusSearch(focused: globalAndroid.view.View, direction: number): globalAndroid.view.View;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AlertDialogLayout extends androidx.appcompat.widget.LinearLayoutCompat {
				public static class: java.lang.Class<androidx.appcompat.widget.AlertDialogLayout>;
				/** @deprecated */
				public invalidateChild(child: globalAndroid.view.View, dirty: globalAndroid.graphics.Rect): void;
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
				public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback, type: number): globalAndroid.view.ActionMode;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
				public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public getTextAlignment(): number;
				public onLayout(changed: boolean, l: number, t: number, r: number, b: number): void;
				/** @deprecated */
				public invalidateChildInParent(location: native.Array<number>, dirty: globalAndroid.graphics.Rect): globalAndroid.view.ViewParent;
				public getParentForAccessibility(): globalAndroid.view.ViewParent;
				public onNestedFling(target: globalAndroid.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
				public keyboardNavigationClusterSearch(currentCluster: globalAndroid.view.View, direction: number): globalAndroid.view.View;
				public onLayout(changed: boolean, left: number, top: number, right: number, bottom: number): void;
				public addView(child: globalAndroid.view.View, width: number, height: number): void;
				public isTextDirectionResolved(): boolean;
				public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
				public childHasTransientStateChanged(child: globalAndroid.view.View, childHasTransientState: boolean): void;
				public focusableViewAvailable(v: globalAndroid.view.View): void;
				public showContextMenuForChild(originalView: globalAndroid.view.View): boolean;
				public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public recomputeViewAttributes(child: globalAndroid.view.View): void;
				public addView(child: globalAndroid.view.View): void;
				public requestSendAccessibilityEvent(child: globalAndroid.view.View, event: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
				public isLayoutDirectionResolved(): boolean;
				public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
				public isTextAlignmentResolved(): boolean;
				public getLayoutDirection(): number;
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
				public bringChildToFront(child: globalAndroid.view.View): void;
				public onNestedPreScroll(target: globalAndroid.view.View, dx: number, dy: number, consumed: native.Array<number>): void;
				public clearChildFocus(child: globalAndroid.view.View): void;
				public onDescendantInvalidated(child: globalAndroid.view.View, target: globalAndroid.view.View): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public removeView(view: globalAndroid.view.View): void;
				public requestChildRectangleOnScreen(child: globalAndroid.view.View, rectangle: globalAndroid.graphics.Rect, immediate: boolean): boolean;
				public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public getChildVisibleRect(child: globalAndroid.view.View, r: globalAndroid.graphics.Rect, offset: globalAndroid.graphics.Point): boolean;
				public requestChildFocus(child: globalAndroid.view.View, focused: globalAndroid.view.View): void;
				public createContextMenu(menu: globalAndroid.view.ContextMenu): void;
				public canResolveLayoutDirection(): boolean;
				public addView(child: globalAndroid.view.View, index: number, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public onNestedPreFling(target: globalAndroid.view.View, velocityX: number, velocityY: number): boolean;
				public getParent(): globalAndroid.view.ViewParent;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatAutoCompleteTextView extends globalAndroid.widget.AutoCompleteTextView implements androidx.core.view.TintableBackgroundView {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatAutoCompleteTextView>;
				public drawableStateChanged(): void;
				/** @deprecated */
				public setTextAppearance(context: globalAndroid.content.Context, resId: number): void;
				public constructor(context: globalAndroid.content.Context);
				public setDropDownBackgroundResource(resId: number): void;
				public setBackgroundDrawable(background: globalAndroid.graphics.drawable.Drawable): void;
				public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
				public onCreateInputConnection(outAttrs: globalAndroid.view.inputmethod.EditorInfo): globalAndroid.view.inputmethod.InputConnection;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
				public sendAccessibilityEvent(eventType: number): void;
				public setDropDownBackgroundResource(id: number): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
				public onPreDraw(): boolean;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number, popupTheme: globalAndroid.content.res.Resources.Theme);
				public getSupportBackgroundTintMode(): globalAndroid.graphics.PorterDuff.Mode;
				public setBackgroundResource(resId: number): void;
				public onFilterComplete(count: number): void;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public setSupportBackgroundTintList(tint: globalAndroid.content.res.ColorStateList): void;
				public setSupportBackgroundTintMode(tintMode: globalAndroid.graphics.PorterDuff.Mode): void;
				public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public getSupportBackgroundTintList(): globalAndroid.content.res.ColorStateList;
				public setTextAppearance(context: globalAndroid.content.Context, resId: number): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public setCustomSelectionActionModeCallback(actionModeCallback: globalAndroid.view.ActionMode.Callback): void;
				public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public setTextAppearance(resId: number): void;
				public setBackgroundResource(resid: number): void;
				/** @deprecated */
				public setBackgroundDrawable(background: globalAndroid.graphics.drawable.Drawable): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatBackgroundHelper extends java.lang.Object {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatBackgroundHelper>;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatButton extends globalAndroid.widget.Button implements androidx.core.view.TintableBackgroundView, androidx.core.widget.AutoSizeableTextView, androidx.core.widget.TintableCompoundDrawablesView {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatButton>;
				public drawableStateChanged(): void;
				public setSupportAllCaps(allCaps: boolean): void;
				/** @deprecated */
				public setTextAppearance(context: globalAndroid.content.Context, resId: number): void;
				public constructor(context: globalAndroid.content.Context);
				public setBackgroundDrawable(background: globalAndroid.graphics.drawable.Drawable): void;
				public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
				public getAutoSizeStepGranularity(): number;
				public setSupportCompoundDrawablesTintList(tint: globalAndroid.content.res.ColorStateList): void;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
				public sendAccessibilityEvent(eventType: number): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
				public onPreDraw(): boolean;
				public getAutoSizeTextAvailableSizes(): native.Array<number>;
				public getSupportCompoundDrawablesTintMode(): globalAndroid.graphics.PorterDuff.Mode;
				public getSupportBackgroundTintMode(): globalAndroid.graphics.PorterDuff.Mode;
				public setTextSize(unit: number, size: number): void;
				public setBackgroundResource(resId: number): void;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public onInitializeAccessibilityEvent(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public setSupportBackgroundTintList(tint: globalAndroid.content.res.ColorStateList): void;
				public setSupportBackgroundTintMode(tintMode: globalAndroid.graphics.PorterDuff.Mode): void;
				public setTextSize(size: number): void;
				public getAutoSizeTextType(): number;
				public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public onInitializeAccessibilityNodeInfo(info: globalAndroid.view.accessibility.AccessibilityNodeInfo): void;
				public getSupportBackgroundTintList(): globalAndroid.content.res.ColorStateList;
				public setTextAppearance(context: globalAndroid.content.Context, resId: number): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
				public getAutoSizeMinTextSize(): number;
				public getSupportCompoundDrawablesTintList(): globalAndroid.content.res.ColorStateList;
				public onLayout(changed: boolean, left: number, top: number, right: number, bottom: number): void;
				public setSupportCompoundDrawablesTintMode(tintMode: globalAndroid.graphics.PorterDuff.Mode): void;
				public getAutoSizeMaxTextSize(): number;
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public onTextChanged(text: string, start: number, lengthBefore: number, lengthAfter: number): void;
				public setAutoSizeTextTypeUniformWithPresetSizes(presetSizes: native.Array<number>, unit: number): void;
				public setCustomSelectionActionModeCallback(actionModeCallback: globalAndroid.view.ActionMode.Callback): void;
				public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public setTextAppearance(resId: number): void;
				public setBackgroundResource(resid: number): void;
				public setAutoSizeTextTypeUniformWithConfiguration(autoSizeMinTextSize: number, autoSizeMaxTextSize: number, autoSizeStepGranularity: number, unit: number): void;
				public setAutoSizeTextTypeWithDefaults(autoSizeTextType: number): void;
				/** @deprecated */
				public setBackgroundDrawable(background: globalAndroid.graphics.drawable.Drawable): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatCheckBox extends globalAndroid.widget.CheckBox implements androidx.core.widget.TintableCompoundButton, androidx.core.view.TintableBackgroundView {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatCheckBox>;
				public setSupportButtonTintList(tint: globalAndroid.content.res.ColorStateList): void;
				public drawableStateChanged(): void;
				public getSupportButtonTintList(): globalAndroid.content.res.ColorStateList;
				public isChecked(): boolean;
				public constructor(context: globalAndroid.content.Context);
				public setBackgroundDrawable(background: globalAndroid.graphics.drawable.Drawable): void;
				public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
				public getSupportButtonTintMode(): globalAndroid.graphics.PorterDuff.Mode;
				public setButtonDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
				public toggle(): void;
				public sendAccessibilityEvent(eventType: number): void;
				public setChecked(checked: boolean): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
				public onPreDraw(): boolean;
				public getSupportBackgroundTintMode(): globalAndroid.graphics.PorterDuff.Mode;
				public getCompoundPaddingLeft(): number;
				public setBackgroundResource(resId: number): void;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public setSupportBackgroundTintList(tint: globalAndroid.content.res.ColorStateList): void;
				public setSupportBackgroundTintMode(tintMode: globalAndroid.graphics.PorterDuff.Mode): void;
				public setButtonDrawable(buttonDrawable: globalAndroid.graphics.drawable.Drawable): void;
				public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public setSupportButtonTintMode(tintMode: globalAndroid.graphics.PorterDuff.Mode): void;
				public getSupportBackgroundTintList(): globalAndroid.content.res.ColorStateList;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
				public setButtonDrawable(resId: number): void;
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public setBackgroundResource(resid: number): void;
				/** @deprecated */
				public setBackgroundDrawable(background: globalAndroid.graphics.drawable.Drawable): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatCheckedTextView extends globalAndroid.widget.CheckedTextView {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatCheckedTextView>;
				public drawableStateChanged(): void;
				public isChecked(): boolean;
				/** @deprecated */
				public setTextAppearance(context: globalAndroid.content.Context, resId: number): void;
				public constructor(context: globalAndroid.content.Context);
				public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
				public onCreateInputConnection(outAttrs: globalAndroid.view.inputmethod.EditorInfo): globalAndroid.view.inputmethod.InputConnection;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
				public toggle(): void;
				public sendAccessibilityEvent(eventType: number): void;
				public setChecked(checked: boolean): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
				public onPreDraw(): boolean;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public setCheckMarkDrawable(resId: number): void;
				public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public setTextAppearance(context: globalAndroid.content.Context, resId: number): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public setCustomSelectionActionModeCallback(actionModeCallback: globalAndroid.view.ActionMode.Callback): void;
				public setCheckMarkDrawable(d: globalAndroid.graphics.drawable.Drawable): void;
				public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public setTextAppearance(resId: number): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatCompoundButtonHelper extends java.lang.Object {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatCompoundButtonHelper>;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatDrawableManager extends java.lang.Object {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatDrawableManager>;
				public static preload(): void;
				public static getPorterDuffColorFilter(color: number, mode: globalAndroid.graphics.PorterDuff.Mode): globalAndroid.graphics.PorterDuffColorFilter;
				public static get(): androidx.appcompat.widget.AppCompatDrawableManager;
				public onConfigurationChanged(context: globalAndroid.content.Context): void;
				public constructor();
				public getDrawable(context: globalAndroid.content.Context, resId: number): globalAndroid.graphics.drawable.Drawable;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatEditText extends globalAndroid.widget.EditText implements androidx.core.view.TintableBackgroundView {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatEditText>;
				public drawableStateChanged(): void;
				/** @deprecated */
				public setTextAppearance(context: globalAndroid.content.Context, resId: number): void;
				public constructor(context: globalAndroid.content.Context);
				public setBackgroundDrawable(background: globalAndroid.graphics.drawable.Drawable): void;
				public setTextClassifier(textClassifier: any): void;
				public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
				public getText(): globalAndroid.text.Editable;
				public onCreateInputConnection(outAttrs: globalAndroid.view.inputmethod.EditorInfo): globalAndroid.view.inputmethod.InputConnection;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
				public sendAccessibilityEvent(eventType: number): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
				public onPreDraw(): boolean;
				public getTextClassifier(): any;
				public getSupportBackgroundTintMode(): globalAndroid.graphics.PorterDuff.Mode;
				public setBackgroundResource(resId: number): void;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public setSupportBackgroundTintList(tint: globalAndroid.content.res.ColorStateList): void;
				public setSupportBackgroundTintMode(tintMode: globalAndroid.graphics.PorterDuff.Mode): void;
				public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public getSupportBackgroundTintList(): globalAndroid.content.res.ColorStateList;
				public setTextAppearance(context: globalAndroid.content.Context, resId: number): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
				public getText(): string;
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public setCustomSelectionActionModeCallback(actionModeCallback: globalAndroid.view.ActionMode.Callback): void;
				public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public setTextAppearance(resId: number): void;
				public setBackgroundResource(resid: number): void;
				/** @deprecated */
				public setBackgroundDrawable(background: globalAndroid.graphics.drawable.Drawable): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatHintHelper extends java.lang.Object {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatHintHelper>;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatImageButton extends globalAndroid.widget.ImageButton implements androidx.core.view.TintableBackgroundView, androidx.core.widget.TintableImageSourceView {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatImageButton>;
				public drawableStateChanged(): void;
				public constructor(context: globalAndroid.content.Context);
				public setBackgroundDrawable(background: globalAndroid.graphics.drawable.Drawable): void;
				public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
				public setImageURI(uri: globalAndroid.net.Uri): void;
				public sendAccessibilityEvent(eventType: number): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
				public getSupportBackgroundTintMode(): globalAndroid.graphics.PorterDuff.Mode;
				public setBackgroundResource(resId: number): void;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public setSupportBackgroundTintList(tint: globalAndroid.content.res.ColorStateList): void;
				public setSupportBackgroundTintMode(tintMode: globalAndroid.graphics.PorterDuff.Mode): void;
				public setImageBitmap(bm: globalAndroid.graphics.Bitmap): void;
				public setSupportImageTintList(tint: globalAndroid.content.res.ColorStateList): void;
				public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public getSupportImageTintList(): globalAndroid.content.res.ColorStateList;
				public setImageResource(resId: number): void;
				public getSupportBackgroundTintList(): globalAndroid.content.res.ColorStateList;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
				public setSupportImageTintMode(tintMode: globalAndroid.graphics.PorterDuff.Mode): void;
				public invalidateDrawable(dr: globalAndroid.graphics.drawable.Drawable): void;
				public getSupportImageTintMode(): globalAndroid.graphics.PorterDuff.Mode;
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public setImageDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public setBackgroundResource(resid: number): void;
				/** @deprecated */
				public setBackgroundDrawable(background: globalAndroid.graphics.drawable.Drawable): void;
				public hasOverlappingRendering(): boolean;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatImageHelper extends java.lang.Object {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatImageHelper>;
				public constructor(view: globalAndroid.widget.ImageView);
				public loadFromAttributes(attrs: globalAndroid.util.AttributeSet, defStyleAttr: number): void;
				public setImageResource(resId: number): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatImageView extends globalAndroid.widget.ImageView implements androidx.core.view.TintableBackgroundView, androidx.core.widget.TintableImageSourceView {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatImageView>;
				public drawableStateChanged(): void;
				public constructor(context: globalAndroid.content.Context);
				public setBackgroundDrawable(background: globalAndroid.graphics.drawable.Drawable): void;
				public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
				public setImageURI(uri: globalAndroid.net.Uri): void;
				public sendAccessibilityEvent(eventType: number): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
				public getSupportBackgroundTintMode(): globalAndroid.graphics.PorterDuff.Mode;
				public setBackgroundResource(resId: number): void;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public setSupportBackgroundTintList(tint: globalAndroid.content.res.ColorStateList): void;
				public setSupportBackgroundTintMode(tintMode: globalAndroid.graphics.PorterDuff.Mode): void;
				public setImageBitmap(bm: globalAndroid.graphics.Bitmap): void;
				public setSupportImageTintList(tint: globalAndroid.content.res.ColorStateList): void;
				public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public getSupportImageTintList(): globalAndroid.content.res.ColorStateList;
				public setImageResource(resId: number): void;
				public getSupportBackgroundTintList(): globalAndroid.content.res.ColorStateList;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
				public setSupportImageTintMode(tintMode: globalAndroid.graphics.PorterDuff.Mode): void;
				public invalidateDrawable(dr: globalAndroid.graphics.drawable.Drawable): void;
				public getSupportImageTintMode(): globalAndroid.graphics.PorterDuff.Mode;
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public setImageDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public setBackgroundResource(resid: number): void;
				/** @deprecated */
				public setBackgroundDrawable(background: globalAndroid.graphics.drawable.Drawable): void;
				public hasOverlappingRendering(): boolean;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatMultiAutoCompleteTextView extends globalAndroid.widget.MultiAutoCompleteTextView implements androidx.core.view.TintableBackgroundView {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatMultiAutoCompleteTextView>;
				public drawableStateChanged(): void;
				/** @deprecated */
				public setTextAppearance(context: globalAndroid.content.Context, resId: number): void;
				public constructor(context: globalAndroid.content.Context);
				public setDropDownBackgroundResource(resId: number): void;
				public setBackgroundDrawable(background: globalAndroid.graphics.drawable.Drawable): void;
				public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
				public onCreateInputConnection(outAttrs: globalAndroid.view.inputmethod.EditorInfo): globalAndroid.view.inputmethod.InputConnection;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
				public sendAccessibilityEvent(eventType: number): void;
				public setDropDownBackgroundResource(id: number): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
				public onPreDraw(): boolean;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number, popupTheme: globalAndroid.content.res.Resources.Theme);
				public getSupportBackgroundTintMode(): globalAndroid.graphics.PorterDuff.Mode;
				public setBackgroundResource(resId: number): void;
				public onFilterComplete(count: number): void;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public setSupportBackgroundTintList(tint: globalAndroid.content.res.ColorStateList): void;
				public setSupportBackgroundTintMode(tintMode: globalAndroid.graphics.PorterDuff.Mode): void;
				public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public getSupportBackgroundTintList(): globalAndroid.content.res.ColorStateList;
				public setTextAppearance(context: globalAndroid.content.Context, resId: number): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public setTextAppearance(resId: number): void;
				public setBackgroundResource(resid: number): void;
				/** @deprecated */
				public setBackgroundDrawable(background: globalAndroid.graphics.drawable.Drawable): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatPopupWindow extends globalAndroid.widget.PopupWindow {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatPopupWindow>;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public constructor(context: globalAndroid.content.Context);
				public showAsDropDown(anchor: globalAndroid.view.View): void;
				public update(): void;
				public constructor(contentView: globalAndroid.view.View, width: number, height: number, focusable: boolean);
				public constructor(width: number, height: number);
				public update(width: number, height: number): void;
				public showAsDropDown(anchor: globalAndroid.view.View, xoff: number, yoff: number, gravity: number): void;
				public update(anchor: globalAndroid.view.View, xoff: number, yoff: number, width: number, height: number): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
				public constructor(contentView: globalAndroid.view.View, width: number, height: number);
				public constructor();
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
				public showAsDropDown(anchor: globalAndroid.view.View, xoff: number, yoff: number): void;
				public update(anchor: globalAndroid.view.View, width: number, height: number): void;
				public constructor(contentView: globalAndroid.view.View);
				public update(x: number, y: number, width: number, height: number): void;
				public update(x: number, y: number, width: number, height: number, force: boolean): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatProgressBarHelper extends java.lang.Object {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatProgressBarHelper>;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatRadioButton extends globalAndroid.widget.RadioButton implements androidx.core.widget.TintableCompoundButton, androidx.core.view.TintableBackgroundView {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatRadioButton>;
				public setSupportButtonTintList(tint: globalAndroid.content.res.ColorStateList): void;
				public drawableStateChanged(): void;
				public getSupportButtonTintList(): globalAndroid.content.res.ColorStateList;
				public isChecked(): boolean;
				public constructor(context: globalAndroid.content.Context);
				public setBackgroundDrawable(background: globalAndroid.graphics.drawable.Drawable): void;
				public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
				public getSupportButtonTintMode(): globalAndroid.graphics.PorterDuff.Mode;
				public setButtonDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
				public toggle(): void;
				public sendAccessibilityEvent(eventType: number): void;
				public setChecked(checked: boolean): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
				public onPreDraw(): boolean;
				public getSupportBackgroundTintMode(): globalAndroid.graphics.PorterDuff.Mode;
				public getCompoundPaddingLeft(): number;
				public setBackgroundResource(resId: number): void;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public setSupportBackgroundTintList(tint: globalAndroid.content.res.ColorStateList): void;
				public setSupportBackgroundTintMode(tintMode: globalAndroid.graphics.PorterDuff.Mode): void;
				public setButtonDrawable(buttonDrawable: globalAndroid.graphics.drawable.Drawable): void;
				public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public setSupportButtonTintMode(tintMode: globalAndroid.graphics.PorterDuff.Mode): void;
				public getSupportBackgroundTintList(): globalAndroid.content.res.ColorStateList;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
				public setButtonDrawable(resId: number): void;
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public setBackgroundResource(resid: number): void;
				/** @deprecated */
				public setBackgroundDrawable(background: globalAndroid.graphics.drawable.Drawable): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatRatingBar extends globalAndroid.widget.RatingBar {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatRatingBar>;
				public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public constructor(context: globalAndroid.content.Context);
				public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
				public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
				public sendAccessibilityEvent(eventType: number): void;
				public invalidateDrawable(dr: globalAndroid.graphics.drawable.Drawable): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatSeekBar extends globalAndroid.widget.SeekBar {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatSeekBar>;
				public drawableStateChanged(): void;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public jumpDrawablesToCurrentState(): void;
				public constructor(context: globalAndroid.content.Context);
				public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
				public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
				public sendAccessibilityEvent(eventType: number): void;
				public invalidateDrawable(dr: globalAndroid.graphics.drawable.Drawable): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public onDraw(canvas: globalAndroid.graphics.Canvas): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatSeekBarHelper extends androidx.appcompat.widget.AppCompatProgressBarHelper {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatSeekBarHelper>;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatSpinner extends globalAndroid.widget.Spinner implements androidx.core.view.TintableBackgroundView {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatSpinner>;
				/** @deprecated */
				public invalidateChild(child: globalAndroid.view.View, dirty: globalAndroid.graphics.Rect): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, mode: number);
				public focusSearch(direction: number): globalAndroid.view.View;
				public childDrawableStateChanged(child: globalAndroid.view.View): void;
				public onStopNestedScroll(child: globalAndroid.view.View): void;
				public isLayoutRequested(): boolean;
				public onNestedPrePerformAccessibilityAction(target: globalAndroid.view.View, action: number, bundle2: globalAndroid.os.Bundle): boolean;
				public setDropDownHorizontalOffset(pixels: number): void;
				public getTextDirection(): number;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
				public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				/** @deprecated */
				public invalidateChildInParent(location: native.Array<number>, dirty: globalAndroid.graphics.Rect): globalAndroid.view.ViewParent;
				public getParentForAccessibility(): globalAndroid.view.ViewParent;
				public onNestedFling(target: globalAndroid.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
				public setPrompt(prompt: string): void;
				public keyboardNavigationClusterSearch(currentCluster: globalAndroid.view.View, direction: number): globalAndroid.view.View;
				public setDropDownWidth(pixels: number): void;
				public getPopupBackground(): globalAndroid.graphics.drawable.Drawable;
				public getDropDownWidth(): number;
				public isTextDirectionResolved(): boolean;
				public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
				public showContextMenuForChild(originalView: globalAndroid.view.View): boolean;
				public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public setBackgroundResource(resid: number): void;
				public recomputeViewAttributes(child: globalAndroid.view.View): void;
				public drawableStateChanged(): void;
				public isLayoutDirectionResolved(): boolean;
				public setBackgroundDrawable(background: globalAndroid.graphics.drawable.Drawable): void;
				public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public setDropDownVerticalOffset(pixels: number): void;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
				public updateViewLayout(view: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public onNestedScroll(target: globalAndroid.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
				public focusSearch(focused: globalAndroid.view.View, direction: number): globalAndroid.view.View;
				/** @deprecated */
				public requestFitSystemWindows(): void;
				public showContextMenuForChild(originalView: globalAndroid.view.View, x: number, y: number): boolean;
				public bringChildToFront(child: globalAndroid.view.View): void;
				public clearChildFocus(child: globalAndroid.view.View): void;
				public getPrompt(): string;
				public setSupportBackgroundTintList(tint: globalAndroid.content.res.ColorStateList): void;
				public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number, mode: number);
				public onClick(dialog: globalAndroid.content.DialogInterface, which: number): void;
				public addView(child: globalAndroid.view.View, index: number, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public onTouchEvent(event: globalAndroid.view.MotionEvent): boolean;
				public getParent(): globalAndroid.view.ViewParent;
				public getDropDownHorizontalOffset(): number;
				public constructor(context: globalAndroid.content.Context);
				public setAdapter(adapter0: any): void;
				public onNestedScrollAccepted(child: globalAndroid.view.View, target: globalAndroid.view.View, axes: number): void;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
				public sendAccessibilityEvent(eventType: number): void;
				public addView(child: globalAndroid.view.View, index: number): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
				public setAdapter(adapter: globalAndroid.widget.SpinnerAdapter): void;
				public requestFitSystemWindows(): void;
				public onRestoreInstanceState(state: globalAndroid.os.Parcelable): void;
				public setBackgroundResource(resId: number): void;
				public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback, type: number): globalAndroid.view.ActionMode;
				public getTextAlignment(): number;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
				public addView(child: globalAndroid.view.View, width: number, height: number): void;
				public childHasTransientStateChanged(child: globalAndroid.view.View, childHasTransientState: boolean): void;
				public onDetachedFromWindow(): void;
				public focusableViewAvailable(v: globalAndroid.view.View): void;
				public addView(child: globalAndroid.view.View): void;
				/** @deprecated */
				public setBackgroundDrawable(background: globalAndroid.graphics.drawable.Drawable): void;
				public requestSendAccessibilityEvent(child: globalAndroid.view.View, event: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
				public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
				public isTextAlignmentResolved(): boolean;
				public setPopupBackgroundResource(resId: number): void;
				public getLayoutDirection(): number;
				public removeView(child: globalAndroid.view.View): void;
				public addView(child: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public canResolveTextDirection(): boolean;
				public canResolveTextAlignment(): boolean;
				public performClick(): boolean;
				public notifySubtreeAccessibilityStateChanged(child: globalAndroid.view.View, source: globalAndroid.view.View, changeType: number): void;
				public constructor(context: globalAndroid.content.Context, mode: number);
				public requestLayout(): void;
				public requestTransparentRegion(child: globalAndroid.view.View): void;
				public onStartNestedScroll(child: globalAndroid.view.View, target: globalAndroid.view.View, nestedScrollAxes: number): boolean;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, mode: number, popupTheme: globalAndroid.content.res.Resources.Theme);
				public getSupportBackgroundTintMode(): globalAndroid.graphics.PorterDuff.Mode;
				public getPopupContext(): globalAndroid.content.Context;
				public onNestedPreScroll(target: globalAndroid.view.View, dx: number, dy: number, consumed: native.Array<number>): void;
				public onDescendantInvalidated(child: globalAndroid.view.View, target: globalAndroid.view.View): void;
				public onSaveInstanceState(): globalAndroid.os.Parcelable;
				public setSupportBackgroundTintMode(tintMode: globalAndroid.graphics.PorterDuff.Mode): void;
				public requestChildRectangleOnScreen(child: globalAndroid.view.View, rectangle: globalAndroid.graphics.Rect, immediate: boolean): boolean;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number, mode: number, popupTheme: globalAndroid.content.res.Resources.Theme);
				public getChildVisibleRect(child: globalAndroid.view.View, r: globalAndroid.graphics.Rect, offset: globalAndroid.graphics.Point): boolean;
				public requestChildFocus(child: globalAndroid.view.View, focused: globalAndroid.view.View): void;
				public createContextMenu(menu: globalAndroid.view.ContextMenu): void;
				public getSupportBackgroundTintList(): globalAndroid.content.res.ColorStateList;
				public canResolveLayoutDirection(): boolean;
				public getDropDownVerticalOffset(): number;
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public setPopupBackgroundDrawable(background: globalAndroid.graphics.drawable.Drawable): void;
				public onNestedPreFling(target: globalAndroid.view.View, velocityX: number, velocityY: number): boolean;
			}
			export module AppCompatSpinner {
				export class DialogPopup extends java.lang.Object implements androidx.appcompat.widget.AppCompatSpinner.SpinnerPopup, globalAndroid.content.DialogInterface.OnClickListener {
					public static class: java.lang.Class<androidx.appcompat.widget.AppCompatSpinner.DialogPopup>;
					public getBackground(): globalAndroid.graphics.drawable.Drawable;
					public setBackgroundDrawable(bg: globalAndroid.graphics.drawable.Drawable): void;
					public isShowing(): boolean;
					public getHorizontalOriginalOffset(): number;
					public getVerticalOffset(): number;
					public setHorizontalOriginalOffset(px: number): void;
					public onClick(dialog: globalAndroid.content.DialogInterface, which: number): void;
					public show(textDirection: number, textAlignment: number): void;
					public getHorizontalOffset(): number;
					public getHintText(): string;
					public setAdapter(adapter: globalAndroid.widget.ListAdapter): void;
					public setHorizontalOffset(px: number): void;
					public dismiss(): void;
					public setPromptText(hintText: string): void;
					public setVerticalOffset(px: number): void;
				}
				export class DropDownAdapter extends java.lang.Object implements globalAndroid.widget.ListAdapter, globalAndroid.widget.SpinnerAdapter {
					public static class: java.lang.Class<androidx.appcompat.widget.AppCompatSpinner.DropDownAdapter>;
					public isEmpty(): boolean;
					public getCount(): number;
					public areAllItemsEnabled(): boolean;
					public isEnabled(position: number): boolean;
					public getItemViewType(position: number): number;
					public getViewTypeCount(): number;
					public unregisterDataSetObserver(observer: globalAndroid.database.DataSetObserver): void;
					public getItemId(position: number): number;
					public constructor(adapter: globalAndroid.widget.SpinnerAdapter, dropDownTheme: globalAndroid.content.res.Resources.Theme);
					public hasStableIds(): boolean;
					public registerDataSetObserver(observer: globalAndroid.database.DataSetObserver): void;
					public getItem(position: number): any;
					public getAutofillOptions(): native.Array<string>;
					public getView(position: number, convertView: globalAndroid.view.View, parent: globalAndroid.view.ViewGroup): globalAndroid.view.View;
					public getDropDownView(position: number, convertView: globalAndroid.view.View, parent: globalAndroid.view.ViewGroup): globalAndroid.view.View;
				}
				export class DropdownPopup extends androidx.appcompat.widget.ListPopupWindow implements androidx.appcompat.widget.AppCompatSpinner.SpinnerPopup {
					public static class: java.lang.Class<androidx.appcompat.widget.AppCompatSpinner.DropdownPopup>;
					public setVerticalOffset(offset: number): void;
					public getBackground(): globalAndroid.graphics.drawable.Drawable;
					public show(): void;
					public isShowing(): boolean;
					public getListView(): globalAndroid.widget.ListView;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
					public getHorizontalOriginalOffset(): number;
					public setHorizontalOriginalOffset(px: number): void;
					public getVerticalOffset(): number;
					public constructor(this0: androidx.appcompat.widget.AppCompatSpinner, context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
					public show(textDirection: number, textAlignment: number): void;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
					public getHorizontalOffset(): number;
					public setHorizontalOffset(offset: number): void;
					public getHintText(): string;
					public constructor(context: globalAndroid.content.Context);
					public setAdapter(adapter: globalAndroid.widget.ListAdapter): void;
					public setBackgroundDrawable(d: globalAndroid.graphics.drawable.Drawable): void;
					public dismiss(): void;
					public setPromptText(hintText: string): void;
				}
				export class SavedState extends globalAndroid.view.View.BaseSavedState {
					public static class: java.lang.Class<androidx.appcompat.widget.AppCompatSpinner.SavedState>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<androidx.appcompat.widget.AppCompatSpinner.SavedState>;
					public describeContents(): number;
					public writeToParcel(out: globalAndroid.os.Parcel, flags: number): void;
				}
				export class SpinnerPopup extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.widget.AppCompatSpinner.SpinnerPopup>;
					/**
					 * Constructs a new instance of the androidx.appcompat.widget.AppCompatSpinner() when extending the interface class.
					 */
					public constructor(implementation: {
						setAdapter(listAdapter0: globalAndroid.widget.ListAdapter): void;
						show(int0: number, int1: number): void;
						dismiss(): void;
						isShowing(): boolean;
						setPromptText(charSequence0: string): void;
						getHintText(): string;
						setBackgroundDrawable(drawable0: globalAndroid.graphics.drawable.Drawable): void;
						setVerticalOffset(int0: number): void;
						setHorizontalOffset(int0: number): void;
						setHorizontalOriginalOffset(int0: number): void;
						getHorizontalOriginalOffset(): number;
						getBackground(): globalAndroid.graphics.drawable.Drawable;
						getVerticalOffset(): number;
						getHorizontalOffset(): number;
					});
					public constructor();
					public setHorizontalOffset(int0: number): void;
					public getBackground(): globalAndroid.graphics.drawable.Drawable;
					public isShowing(): boolean;
					public setAdapter(listAdapter0: globalAndroid.widget.ListAdapter): void;
					public getHorizontalOriginalOffset(): number;
					public setHorizontalOriginalOffset(int0: number): void;
					public show(int0: number, int1: number): void;
					public setBackgroundDrawable(drawable0: globalAndroid.graphics.drawable.Drawable): void;
					public getVerticalOffset(): number;
					public setVerticalOffset(int0: number): void;
					public getHorizontalOffset(): number;
					public setPromptText(charSequence0: string): void;
					public getHintText(): string;
					public dismiss(): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatTextClassifierHelper extends java.lang.Object {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatTextClassifierHelper>;
				public setTextClassifier(textClassifier: any): void;
				public getTextClassifier(): any;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatTextHelper extends java.lang.Object {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatTextHelper>;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatTextView extends globalAndroid.widget.TextView implements androidx.core.view.TintableBackgroundView, androidx.core.widget.TintableCompoundDrawablesView, androidx.core.widget.AutoSizeableTextView {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatTextView>;
				/** @deprecated */
				public setTextAppearance(context: globalAndroid.content.Context, resId: number): void;
				public constructor(context: globalAndroid.content.Context);
				public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
				public getAutoSizeStepGranularity(): number;
				public setLineHeight(lineHeight: number): void;
				public getFirstBaselineToTopHeight(): number;
				public sendAccessibilityEvent(eventType: number): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
				public onPreDraw(): boolean;
				public getTextClassifier(): any;
				public getSupportCompoundDrawablesTintMode(): globalAndroid.graphics.PorterDuff.Mode;
				public setTextSize(unit: number, size: number): void;
				public setBackgroundResource(resId: number): void;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public getAutoSizeTextType(): number;
				public setLastBaselineToBottomHeight(lastBaselineToBottomHeight: number): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
				public getSupportCompoundDrawablesTintList(): globalAndroid.content.res.ColorStateList;
				public setTypeface(tf: globalAndroid.graphics.Typeface): void;
				public onLayout(changed: boolean, left: number, top: number, right: number, bottom: number): void;
				public setSupportCompoundDrawablesTintMode(tintMode: globalAndroid.graphics.PorterDuff.Mode): void;
				public setCompoundDrawablesRelativeWithIntrinsicBounds(start: number, top: number, end: number, bottom: number): void;
				public setCompoundDrawablesRelativeWithIntrinsicBounds(start: globalAndroid.graphics.drawable.Drawable, top: globalAndroid.graphics.drawable.Drawable, end: globalAndroid.graphics.drawable.Drawable, bottom: globalAndroid.graphics.drawable.Drawable): void;
				public setSupportCompoundDrawablesTintList(tintList: globalAndroid.content.res.ColorStateList): void;
				public getAutoSizeMaxTextSize(): number;
				public setAutoSizeTextTypeUniformWithPresetSizes(presetSizes: native.Array<number>, unit: number): void;
				public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public setBackgroundResource(resid: number): void;
				/** @deprecated */
				public setBackgroundDrawable(background: globalAndroid.graphics.drawable.Drawable): void;
				public drawableStateChanged(): void;
				public setTextMetricsParamsCompat(params: androidx.core.text.PrecomputedTextCompat.Params): void;
				public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
				public getTextMetricsParamsCompat(): androidx.core.text.PrecomputedTextCompat.Params;
				public setBackgroundDrawable(background: globalAndroid.graphics.drawable.Drawable): void;
				public setTextClassifier(textClassifier: any): void;
				public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public setCompoundDrawablesRelative(start: globalAndroid.graphics.drawable.Drawable, top: globalAndroid.graphics.drawable.Drawable, end: globalAndroid.graphics.drawable.Drawable, bottom: globalAndroid.graphics.drawable.Drawable): void;
				public onCreateInputConnection(outAttrs: globalAndroid.view.inputmethod.EditorInfo): globalAndroid.view.inputmethod.InputConnection;
				public setCompoundDrawablesWithIntrinsicBounds(left: number, top: number, right: number, bottom: number): void;
				public getLastBaselineToBottomHeight(): number;
				public setCompoundDrawables(left: globalAndroid.graphics.drawable.Drawable, top: globalAndroid.graphics.drawable.Drawable, right: globalAndroid.graphics.drawable.Drawable, bottom: globalAndroid.graphics.drawable.Drawable): void;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
				public setTextFuture(future: java.util.concurrent.Future<androidx.core.text.PrecomputedTextCompat>): void;
				public getAutoSizeTextAvailableSizes(): native.Array<number>;
				public getSupportBackgroundTintMode(): globalAndroid.graphics.PorterDuff.Mode;
				public setTypeface(tf: globalAndroid.graphics.Typeface, style: number): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public setSupportBackgroundTintList(tint: globalAndroid.content.res.ColorStateList): void;
				public setSupportBackgroundTintMode(tintMode: globalAndroid.graphics.PorterDuff.Mode): void;
				public setTextSize(size: number): void;
				public setFirstBaselineToTopHeight(firstBaselineToTopHeight: number): void;
				public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public getSupportBackgroundTintList(): globalAndroid.content.res.ColorStateList;
				public setTextAppearance(context: globalAndroid.content.Context, resId: number): void;
				public getAutoSizeMinTextSize(): number;
				public getText(): string;
				public setCompoundDrawablesWithIntrinsicBounds(left: globalAndroid.graphics.drawable.Drawable, top: globalAndroid.graphics.drawable.Drawable, right: globalAndroid.graphics.drawable.Drawable, bottom: globalAndroid.graphics.drawable.Drawable): void;
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public onTextChanged(text: string, start: number, lengthBefore: number, lengthAfter: number): void;
				public setCustomSelectionActionModeCallback(actionModeCallback: globalAndroid.view.ActionMode.Callback): void;
				public setTextAppearance(resId: number): void;
				public setAutoSizeTextTypeUniformWithConfiguration(autoSizeMinTextSize: number, autoSizeMaxTextSize: number, autoSizeStepGranularity: number, unit: number): void;
				public setPrecomputedText(precomputed: androidx.core.text.PrecomputedTextCompat): void;
				public setAutoSizeTextTypeWithDefaults(autoSizeTextType: number): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatTextViewAutoSizeHelper extends java.lang.Object {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatTextViewAutoSizeHelper>;
			}
			export module AppCompatTextViewAutoSizeHelper {
				export class Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.widget.AppCompatTextViewAutoSizeHelper.Impl>;
				}
				export class Impl23 extends androidx.appcompat.widget.AppCompatTextViewAutoSizeHelper.Impl {
					public static class: java.lang.Class<androidx.appcompat.widget.AppCompatTextViewAutoSizeHelper.Impl23>;
				}
				export class Impl29 extends androidx.appcompat.widget.AppCompatTextViewAutoSizeHelper.Impl23 {
					public static class: java.lang.Class<androidx.appcompat.widget.AppCompatTextViewAutoSizeHelper.Impl29>;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatToggleButton extends globalAndroid.widget.ToggleButton {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatToggleButton>;
				public isChecked(): boolean;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public constructor(context: globalAndroid.content.Context);
				public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
				public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
				public toggle(): void;
				public sendAccessibilityEvent(eventType: number): void;
				public setChecked(checked: boolean): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
				public onPreDraw(): boolean;
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class ButtonBarLayout extends globalAndroid.widget.LinearLayout {
				public static class: java.lang.Class<androidx.appcompat.widget.ButtonBarLayout>;
				/** @deprecated */
				public invalidateChild(child: globalAndroid.view.View, dirty: globalAndroid.graphics.Rect): void;
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
				public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback, type: number): globalAndroid.view.ActionMode;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
				public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public getTextAlignment(): number;
				/** @deprecated */
				public invalidateChildInParent(location: native.Array<number>, dirty: globalAndroid.graphics.Rect): globalAndroid.view.ViewParent;
				public getParentForAccessibility(): globalAndroid.view.ViewParent;
				public onNestedFling(target: globalAndroid.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
				public getMinimumHeight(): number;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
				public keyboardNavigationClusterSearch(currentCluster: globalAndroid.view.View, direction: number): globalAndroid.view.View;
				public addView(child: globalAndroid.view.View, width: number, height: number): void;
				public isTextDirectionResolved(): boolean;
				public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
				public childHasTransientStateChanged(child: globalAndroid.view.View, childHasTransientState: boolean): void;
				public focusableViewAvailable(v: globalAndroid.view.View): void;
				public showContextMenuForChild(originalView: globalAndroid.view.View): boolean;
				public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public recomputeViewAttributes(child: globalAndroid.view.View): void;
				public addView(child: globalAndroid.view.View): void;
				public requestSendAccessibilityEvent(child: globalAndroid.view.View, event: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
				public isLayoutDirectionResolved(): boolean;
				public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
				public isTextAlignmentResolved(): boolean;
				public getLayoutDirection(): number;
				public addView(child: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public canResolveTextDirection(): boolean;
				public canResolveTextAlignment(): boolean;
				public setAllowStacking(allowStacking: boolean): void;
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
				public bringChildToFront(child: globalAndroid.view.View): void;
				public onNestedPreScroll(target: globalAndroid.view.View, dx: number, dy: number, consumed: native.Array<number>): void;
				public clearChildFocus(child: globalAndroid.view.View): void;
				public onDescendantInvalidated(child: globalAndroid.view.View, target: globalAndroid.view.View): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public removeView(view: globalAndroid.view.View): void;
				public requestChildRectangleOnScreen(child: globalAndroid.view.View, rectangle: globalAndroid.graphics.Rect, immediate: boolean): boolean;
				public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public getChildVisibleRect(child: globalAndroid.view.View, r: globalAndroid.graphics.Rect, offset: globalAndroid.graphics.Point): boolean;
				public requestChildFocus(child: globalAndroid.view.View, focused: globalAndroid.view.View): void;
				public createContextMenu(menu: globalAndroid.view.ContextMenu): void;
				public canResolveLayoutDirection(): boolean;
				public addView(child: globalAndroid.view.View, index: number, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public onNestedPreFling(target: globalAndroid.view.View, velocityX: number, velocityY: number): boolean;
				public getParent(): globalAndroid.view.ViewParent;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class ContentFrameLayout extends globalAndroid.widget.FrameLayout {
				public static class: java.lang.Class<androidx.appcompat.widget.ContentFrameLayout>;
				public setDecorPadding(left: number, top: number, right: number, bottom: number): void;
				/** @deprecated */
				public invalidateChild(child: globalAndroid.view.View, dirty: globalAndroid.graphics.Rect): void;
				public focusSearch(direction: number): globalAndroid.view.View;
				public constructor(context: globalAndroid.content.Context);
				public onNestedScrollAccepted(child: globalAndroid.view.View, target: globalAndroid.view.View, axes: number): void;
				public getMinWidthMinor(): globalAndroid.util.TypedValue;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
				public childDrawableStateChanged(child: globalAndroid.view.View): void;
				public onStopNestedScroll(child: globalAndroid.view.View): void;
				public setAttachListener(attachListener: androidx.appcompat.widget.ContentFrameLayout.OnAttachListener): void;
				public isLayoutRequested(): boolean;
				public sendAccessibilityEvent(eventType: number): void;
				public onNestedPrePerformAccessibilityAction(target: globalAndroid.view.View, action: number, bundle2: globalAndroid.os.Bundle): boolean;
				public addView(child: globalAndroid.view.View, index: number): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
				public requestFitSystemWindows(): void;
				public getTextDirection(): number;
				public getFixedWidthMajor(): globalAndroid.util.TypedValue;
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
				public addView(child: globalAndroid.view.View, width: number, height: number): void;
				public isTextDirectionResolved(): boolean;
				public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
				public childHasTransientStateChanged(child: globalAndroid.view.View, childHasTransientState: boolean): void;
				public onDetachedFromWindow(): void;
				public focusableViewAvailable(v: globalAndroid.view.View): void;
				public getFixedHeightMajor(): globalAndroid.util.TypedValue;
				public showContextMenuForChild(originalView: globalAndroid.view.View): boolean;
				public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public recomputeViewAttributes(child: globalAndroid.view.View): void;
				public addView(child: globalAndroid.view.View): void;
				public requestSendAccessibilityEvent(child: globalAndroid.view.View, event: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
				public isLayoutDirectionResolved(): boolean;
				public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
				public isTextAlignmentResolved(): boolean;
				public getLayoutDirection(): number;
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
				public bringChildToFront(child: globalAndroid.view.View): void;
				public onNestedPreScroll(target: globalAndroid.view.View, dx: number, dy: number, consumed: native.Array<number>): void;
				public clearChildFocus(child: globalAndroid.view.View): void;
				public getFixedWidthMinor(): globalAndroid.util.TypedValue;
				public getFixedHeightMinor(): globalAndroid.util.TypedValue;
				public onDescendantInvalidated(child: globalAndroid.view.View, target: globalAndroid.view.View): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public removeView(view: globalAndroid.view.View): void;
				public requestChildRectangleOnScreen(child: globalAndroid.view.View, rectangle: globalAndroid.graphics.Rect, immediate: boolean): boolean;
				public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public getChildVisibleRect(child: globalAndroid.view.View, r: globalAndroid.graphics.Rect, offset: globalAndroid.graphics.Point): boolean;
				public requestChildFocus(child: globalAndroid.view.View, focused: globalAndroid.view.View): void;
				public createContextMenu(menu: globalAndroid.view.ContextMenu): void;
				public canResolveLayoutDirection(): boolean;
				public addView(child: globalAndroid.view.View, index: number, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public getMinWidthMajor(): globalAndroid.util.TypedValue;
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public dispatchFitSystemWindows(insets: globalAndroid.graphics.Rect): void;
				public onNestedPreFling(target: globalAndroid.view.View, velocityX: number, velocityY: number): boolean;
				public onAttachedToWindow(): void;
				public getParent(): globalAndroid.view.ViewParent;
			}
			export module ContentFrameLayout {
				export class OnAttachListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.widget.ContentFrameLayout.OnAttachListener>;
					/**
					 * Constructs a new instance of the androidx.appcompat.widget.ContentFrameLayout() when extending the interface class.
					 */
					public constructor(implementation: {
						onDetachedFromWindow(): void;
						onAttachedFromWindow(): void;
					});
					public constructor();
					public onDetachedFromWindow(): void;
					public onAttachedFromWindow(): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class DecorContentParent extends java.lang.Object {
				public static class: java.lang.Class<androidx.appcompat.widget.DecorContentParent>;
				/**
				 * Constructs a new instance of the androidx.appcompat.widget.DecorContentParent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					setWindowCallback(callback0: globalAndroid.view.Window.Callback): void;
					setWindowTitle(charSequence0: string): void;
					getTitle(): string;
					initFeature(int0: number): void;
					setUiOptions(int0: number): void;
					hasIcon(): boolean;
					hasLogo(): boolean;
					setIcon(int0: number): void;
					setIcon(drawable0: globalAndroid.graphics.drawable.Drawable): void;
					setLogo(int0: number): void;
					canShowOverflowMenu(): boolean;
					isOverflowMenuShowing(): boolean;
					isOverflowMenuShowPending(): boolean;
					showOverflowMenu(): boolean;
					hideOverflowMenu(): boolean;
					setMenuPrepared(): void;
					setMenu(menu0: globalAndroid.view.Menu, callback1: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
					saveToolbarHierarchyState(sparseArray0: globalAndroid.util.SparseArray<globalAndroid.os.Parcelable>): void;
					restoreToolbarHierarchyState(sparseArray0: globalAndroid.util.SparseArray<globalAndroid.os.Parcelable>): void;
					dismissPopups(): void;
				});
				public constructor();
				public setIcon(int0: number): void;
				public setMenu(menu0: globalAndroid.view.Menu, callback1: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
				public hasLogo(): boolean;
				public showOverflowMenu(): boolean;
				public restoreToolbarHierarchyState(sparseArray0: globalAndroid.util.SparseArray<globalAndroid.os.Parcelable>): void;
				public dismissPopups(): void;
				public setUiOptions(int0: number): void;
				public canShowOverflowMenu(): boolean;
				public getTitle(): string;
				public hasIcon(): boolean;
				public saveToolbarHierarchyState(sparseArray0: globalAndroid.util.SparseArray<globalAndroid.os.Parcelable>): void;
				public isOverflowMenuShowing(): boolean;
				public setLogo(int0: number): void;
				public hideOverflowMenu(): boolean;
				public initFeature(int0: number): void;
				public isOverflowMenuShowPending(): boolean;
				public setMenuPrepared(): void;
				public setWindowCallback(callback0: globalAndroid.view.Window.Callback): void;
				public setWindowTitle(charSequence0: string): void;
				public setIcon(drawable0: globalAndroid.graphics.drawable.Drawable): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class DecorToolbar extends java.lang.Object {
				public static class: java.lang.Class<androidx.appcompat.widget.DecorToolbar>;
				/**
				 * Constructs a new instance of the androidx.appcompat.widget.DecorToolbar interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getViewGroup(): globalAndroid.view.ViewGroup;
					getContext(): globalAndroid.content.Context;
					hasExpandedActionView(): boolean;
					collapseActionView(): void;
					setWindowCallback(callback0: globalAndroid.view.Window.Callback): void;
					setWindowTitle(charSequence0: string): void;
					getTitle(): string;
					setTitle(charSequence0: string): void;
					getSubtitle(): string;
					setSubtitle(charSequence0: string): void;
					initProgress(): void;
					initIndeterminateProgress(): void;
					hasIcon(): boolean;
					hasLogo(): boolean;
					setIcon(int0: number): void;
					setIcon(drawable0: globalAndroid.graphics.drawable.Drawable): void;
					setLogo(int0: number): void;
					setLogo(drawable0: globalAndroid.graphics.drawable.Drawable): void;
					canShowOverflowMenu(): boolean;
					isOverflowMenuShowing(): boolean;
					isOverflowMenuShowPending(): boolean;
					showOverflowMenu(): boolean;
					hideOverflowMenu(): boolean;
					setMenuPrepared(): void;
					setMenu(menu0: globalAndroid.view.Menu, callback1: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
					dismissPopupMenus(): void;
					getDisplayOptions(): number;
					setDisplayOptions(int0: number): void;
					setEmbeddedTabView(scrollingTabContainerView0: androidx.appcompat.widget.ScrollingTabContainerView): void;
					hasEmbeddedTabs(): boolean;
					isTitleTruncated(): boolean;
					setCollapsible(boolean0: boolean): void;
					setHomeButtonEnabled(boolean0: boolean): void;
					getNavigationMode(): number;
					setNavigationMode(int0: number): void;
					setDropdownParams(spinnerAdapter0: globalAndroid.widget.SpinnerAdapter, onItemSelectedListener1: globalAndroid.widget.AdapterView.OnItemSelectedListener): void;
					setDropdownSelectedPosition(int0: number): void;
					getDropdownSelectedPosition(): number;
					getDropdownItemCount(): number;
					setCustomView(view0: globalAndroid.view.View): void;
					getCustomView(): globalAndroid.view.View;
					animateToVisibility(int0: number): void;
					setupAnimatorToVisibility(int0: number, long1: number): androidx.core.view.ViewPropertyAnimatorCompat;
					setNavigationIcon(drawable0: globalAndroid.graphics.drawable.Drawable): void;
					setNavigationIcon(int0: number): void;
					setNavigationContentDescription(charSequence0: string): void;
					setNavigationContentDescription(int0: number): void;
					setDefaultNavigationContentDescription(int0: number): void;
					setDefaultNavigationIcon(drawable0: globalAndroid.graphics.drawable.Drawable): void;
					saveHierarchyState(sparseArray0: globalAndroid.util.SparseArray<globalAndroid.os.Parcelable>): void;
					restoreHierarchyState(sparseArray0: globalAndroid.util.SparseArray<globalAndroid.os.Parcelable>): void;
					setBackgroundDrawable(drawable0: globalAndroid.graphics.drawable.Drawable): void;
					getHeight(): number;
					setVisibility(int0: number): void;
					getVisibility(): number;
					setMenuCallbacks(callback0: androidx.appcompat.view.menu.MenuPresenter.Callback, callback1: androidx.appcompat.view.menu.MenuBuilder.Callback): void;
					getMenu(): globalAndroid.view.Menu;
				});
				public constructor();
				public setTitle(charSequence0: string): void;
				public setNavigationContentDescription(int0: number): void;
				public getHeight(): number;
				public hasLogo(): boolean;
				public showOverflowMenu(): boolean;
				public setLogo(int0: number): void;
				public getDropdownSelectedPosition(): number;
				public setWindowTitle(charSequence0: string): void;
				public setIcon(drawable0: globalAndroid.graphics.drawable.Drawable): void;
				public setIcon(int0: number): void;
				public setMenu(menu0: globalAndroid.view.Menu, callback1: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
				public setNavigationIcon(drawable0: globalAndroid.graphics.drawable.Drawable): void;
				public collapseActionView(): void;
				public getContext(): globalAndroid.content.Context;
				public setNavigationMode(int0: number): void;
				public restoreHierarchyState(sparseArray0: globalAndroid.util.SparseArray<globalAndroid.os.Parcelable>): void;
				public setLogo(drawable0: globalAndroid.graphics.drawable.Drawable): void;
				public getMenu(): globalAndroid.view.Menu;
				public hideOverflowMenu(): boolean;
				public initIndeterminateProgress(): void;
				public hasEmbeddedTabs(): boolean;
				public getVisibility(): number;
				public getSubtitle(): string;
				public setMenuCallbacks(callback0: androidx.appcompat.view.menu.MenuPresenter.Callback, callback1: androidx.appcompat.view.menu.MenuBuilder.Callback): void;
				public setMenuPrepared(): void;
				public setWindowCallback(callback0: globalAndroid.view.Window.Callback): void;
				public setBackgroundDrawable(drawable0: globalAndroid.graphics.drawable.Drawable): void;
				public initProgress(): void;
				public setDisplayOptions(int0: number): void;
				public setHomeButtonEnabled(boolean0: boolean): void;
				public setVisibility(int0: number): void;
				public setEmbeddedTabView(scrollingTabContainerView0: androidx.appcompat.widget.ScrollingTabContainerView): void;
				public getNavigationMode(): number;
				public setDropdownSelectedPosition(int0: number): void;
				public getCustomView(): globalAndroid.view.View;
				public setNavigationContentDescription(charSequence0: string): void;
				public getDisplayOptions(): number;
				public setNavigationIcon(int0: number): void;
				public setDropdownParams(spinnerAdapter0: globalAndroid.widget.SpinnerAdapter, onItemSelectedListener1: globalAndroid.widget.AdapterView.OnItemSelectedListener): void;
				public setupAnimatorToVisibility(int0: number, long1: number): androidx.core.view.ViewPropertyAnimatorCompat;
				public dismissPopupMenus(): void;
				public setSubtitle(charSequence0: string): void;
				public isTitleTruncated(): boolean;
				public getDropdownItemCount(): number;
				public setCollapsible(boolean0: boolean): void;
				public setDefaultNavigationContentDescription(int0: number): void;
				public saveHierarchyState(sparseArray0: globalAndroid.util.SparseArray<globalAndroid.os.Parcelable>): void;
				public canShowOverflowMenu(): boolean;
				public hasExpandedActionView(): boolean;
				public getTitle(): string;
				public hasIcon(): boolean;
				public isOverflowMenuShowing(): boolean;
				public animateToVisibility(int0: number): void;
				public setDefaultNavigationIcon(drawable0: globalAndroid.graphics.drawable.Drawable): void;
				public isOverflowMenuShowPending(): boolean;
				public setCustomView(view0: globalAndroid.view.View): void;
				public getViewGroup(): globalAndroid.view.ViewGroup;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class DialogTitle extends androidx.appcompat.widget.AppCompatTextView {
				public static class: java.lang.Class<androidx.appcompat.widget.DialogTitle>;
				public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
				public constructor(context: globalAndroid.content.Context);
				public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
				public getAutoSizeStepGranularity(): number;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
				public sendAccessibilityEvent(eventType: number): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
				public onPreDraw(): boolean;
				public getAutoSizeTextAvailableSizes(): native.Array<number>;
				public getSupportCompoundDrawablesTintMode(): globalAndroid.graphics.PorterDuff.Mode;
				public getSupportBackgroundTintMode(): globalAndroid.graphics.PorterDuff.Mode;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public setSupportBackgroundTintList(tint: globalAndroid.content.res.ColorStateList): void;
				public setSupportBackgroundTintMode(tintMode: globalAndroid.graphics.PorterDuff.Mode): void;
				public getAutoSizeTextType(): number;
				public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public getSupportBackgroundTintList(): globalAndroid.content.res.ColorStateList;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
				public getAutoSizeMinTextSize(): number;
				public getSupportCompoundDrawablesTintList(): globalAndroid.content.res.ColorStateList;
				public setSupportCompoundDrawablesTintMode(tintMode: globalAndroid.graphics.PorterDuff.Mode): void;
				public setSupportCompoundDrawablesTintList(tintList: globalAndroid.content.res.ColorStateList): void;
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public getAutoSizeMaxTextSize(): number;
				public setAutoSizeTextTypeUniformWithPresetSizes(presetSizes: native.Array<number>, unit: number): void;
				public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public setAutoSizeTextTypeUniformWithConfiguration(autoSizeMinTextSize: number, autoSizeMaxTextSize: number, autoSizeStepGranularity: number, unit: number): void;
				public setAutoSizeTextTypeWithDefaults(autoSizeTextType: number): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class DropDownListView extends globalAndroid.widget.ListView {
				public static class: java.lang.Class<androidx.appcompat.widget.DropDownListView>;
				public static INVALID_POSITION: number;
				public static NO_POSITION: number;
				/** @deprecated */
				public invalidateChild(child: globalAndroid.view.View, dirty: globalAndroid.graphics.Rect): void;
				public focusSearch(direction: number): globalAndroid.view.View;
				public onNestedScrollAccepted(child: globalAndroid.view.View, target: globalAndroid.view.View, axes: number): void;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
				public childDrawableStateChanged(child: globalAndroid.view.View): void;
				public onStopNestedScroll(child: globalAndroid.view.View): void;
				public onHoverEvent(ev: globalAndroid.view.MotionEvent): boolean;
				public isLayoutRequested(): boolean;
				public sendAccessibilityEvent(eventType: number): void;
				public onNestedPrePerformAccessibilityAction(target: globalAndroid.view.View, action: number, bundle2: globalAndroid.os.Bundle): boolean;
				public addView(child: globalAndroid.view.View, index: number): void;
				public requestFitSystemWindows(): void;
				public hasWindowFocus(): boolean;
				public getTextDirection(): number;
				public onTextChanged(s: string, start: number, before: number, count: number): void;
				public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback, type: number): globalAndroid.view.ActionMode;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
				public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public getTextAlignment(): number;
				public hasFocus(): boolean;
				/** @deprecated */
				public invalidateChildInParent(location: native.Array<number>, dirty: globalAndroid.graphics.Rect): globalAndroid.view.ViewParent;
				public getParentForAccessibility(): globalAndroid.view.ViewParent;
				public onNestedFling(target: globalAndroid.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
				public keyboardNavigationClusterSearch(currentCluster: globalAndroid.view.View, direction: number): globalAndroid.view.View;
				public onGlobalLayout(): void;
				public addView(child: globalAndroid.view.View, width: number, height: number): void;
				public isTextDirectionResolved(): boolean;
				public afterTextChanged(s: globalAndroid.text.Editable): void;
				public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
				public setSelector(sel: globalAndroid.graphics.drawable.Drawable): void;
				public childHasTransientStateChanged(child: globalAndroid.view.View, childHasTransientState: boolean): void;
				public onDetachedFromWindow(): void;
				public focusableViewAvailable(v: globalAndroid.view.View): void;
				public showContextMenuForChild(originalView: globalAndroid.view.View): boolean;
				public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public recomputeViewAttributes(child: globalAndroid.view.View): void;
				public addView(child: globalAndroid.view.View): void;
				public drawableStateChanged(): void;
				public requestSendAccessibilityEvent(child: globalAndroid.view.View, event: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
				public isLayoutDirectionResolved(): boolean;
				public isTextAlignmentResolved(): boolean;
				public getLayoutDirection(): number;
				public removeView(child: globalAndroid.view.View): void;
				public addView(child: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public canResolveTextDirection(): boolean;
				public canResolveTextAlignment(): boolean;
				public isInTouchMode(): boolean;
				public notifySubtreeAccessibilityStateChanged(child: globalAndroid.view.View, source: globalAndroid.view.View, changeType: number): void;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
				public dispatchDraw(canvas: globalAndroid.graphics.Canvas): void;
				public updateViewLayout(view: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public onNestedScroll(target: globalAndroid.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
				public requestLayout(): void;
				public isFocused(): boolean;
				public focusSearch(focused: globalAndroid.view.View, direction: number): globalAndroid.view.View;
				public requestTransparentRegion(child: globalAndroid.view.View): void;
				public onStartNestedScroll(child: globalAndroid.view.View, target: globalAndroid.view.View, nestedScrollAxes: number): boolean;
				/** @deprecated */
				public requestFitSystemWindows(): void;
				public setSelector(resID: number): void;
				public showContextMenuForChild(originalView: globalAndroid.view.View, x: number, y: number): boolean;
				public requestChildRectangleOnScreen(child: globalAndroid.view.View, rect: globalAndroid.graphics.Rect, immediate: boolean): boolean;
				public measureHeightOfChildrenCompat(widthMeasureSpec: number, startPosition: number, endPosition: number, maxHeight: number, disallowPartialChildPosition: number): number;
				public bringChildToFront(child: globalAndroid.view.View): void;
				public onNestedPreScroll(target: globalAndroid.view.View, dx: number, dy: number, consumed: native.Array<number>): void;
				public clearChildFocus(child: globalAndroid.view.View): void;
				public onFilterComplete(count: number): void;
				public onDescendantInvalidated(child: globalAndroid.view.View, target: globalAndroid.view.View): void;
				public onTouchModeChanged(isInTouchMode: boolean): void;
				public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public beforeTextChanged(s: string, start: number, count: number, after: number): void;
				public getChildVisibleRect(child: globalAndroid.view.View, r: globalAndroid.graphics.Rect, offset: globalAndroid.graphics.Point): boolean;
				public requestChildFocus(child: globalAndroid.view.View, focused: globalAndroid.view.View): void;
				public createContextMenu(menu: globalAndroid.view.ContextMenu): void;
				public onTouchEvent(ev: globalAndroid.view.MotionEvent): boolean;
				public canResolveLayoutDirection(): boolean;
				public onForwardedEvent(event: globalAndroid.view.MotionEvent, activePointerId: number): boolean;
				public addView(child: globalAndroid.view.View, index: number, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public onHoverEvent(event: globalAndroid.view.MotionEvent): boolean;
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public onNestedPreFling(target: globalAndroid.view.View, velocityX: number, velocityY: number): boolean;
				public getParent(): globalAndroid.view.ViewParent;
				public lookForSelectablePosition(position: number, lookDown: boolean): number;
			}
			export module DropDownListView {
				export class GateKeeperDrawable extends androidx.appcompat.graphics.drawable.DrawableWrapper {
					public static class: java.lang.Class<androidx.appcompat.widget.DropDownListView.GateKeeperDrawable>;
					public setState(stateSet: native.Array<number>): boolean;
					public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
					public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
					public draw(canvas: globalAndroid.graphics.Canvas): void;
					public invalidateDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
					public setVisible(visible: boolean, restart: boolean): boolean;
					public setHotspot(x: number, y: number): void;
					public setHotspotBounds(left: number, top: number, right: number, bottom: number): void;
				}
				export class ResolveHoverRunnable extends java.lang.Object implements java.lang.Runnable {
					public static class: java.lang.Class<androidx.appcompat.widget.DropDownListView.ResolveHoverRunnable>;
					public run(): void;
					public cancel(): void;
					public post(): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class FitWindowsFrameLayout extends globalAndroid.widget.FrameLayout implements androidx.appcompat.widget.FitWindowsViewGroup {
				public static class: java.lang.Class<androidx.appcompat.widget.FitWindowsFrameLayout>;
				/** @deprecated */
				public invalidateChild(child: globalAndroid.view.View, dirty: globalAndroid.graphics.Rect): void;
				public focusSearch(direction: number): globalAndroid.view.View;
				public constructor(context: globalAndroid.content.Context);
				public onNestedScrollAccepted(child: globalAndroid.view.View, target: globalAndroid.view.View, axes: number): void;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
				public fitSystemWindows(insets: globalAndroid.graphics.Rect): boolean;
				public childDrawableStateChanged(child: globalAndroid.view.View): void;
				public onStopNestedScroll(child: globalAndroid.view.View): void;
				/** @deprecated */
				public fitSystemWindows(insets: globalAndroid.graphics.Rect): boolean;
				public isLayoutRequested(): boolean;
				public sendAccessibilityEvent(eventType: number): void;
				public onNestedPrePerformAccessibilityAction(target: globalAndroid.view.View, action: number, bundle2: globalAndroid.os.Bundle): boolean;
				public addView(child: globalAndroid.view.View, index: number): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
				public requestFitSystemWindows(): void;
				public getTextDirection(): number;
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
				public addView(child: globalAndroid.view.View, width: number, height: number): void;
				public isTextDirectionResolved(): boolean;
				public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
				public childHasTransientStateChanged(child: globalAndroid.view.View, childHasTransientState: boolean): void;
				public focusableViewAvailable(v: globalAndroid.view.View): void;
				public showContextMenuForChild(originalView: globalAndroid.view.View): boolean;
				public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public recomputeViewAttributes(child: globalAndroid.view.View): void;
				public addView(child: globalAndroid.view.View): void;
				public requestSendAccessibilityEvent(child: globalAndroid.view.View, event: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
				public isLayoutDirectionResolved(): boolean;
				public isTextAlignmentResolved(): boolean;
				public getLayoutDirection(): number;
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
				public setOnFitSystemWindowsListener(listener: androidx.appcompat.widget.FitWindowsViewGroup.OnFitSystemWindowsListener): void;
				public requestTransparentRegion(child: globalAndroid.view.View): void;
				public onStartNestedScroll(child: globalAndroid.view.View, target: globalAndroid.view.View, nestedScrollAxes: number): boolean;
				/** @deprecated */
				public requestFitSystemWindows(): void;
				public showContextMenuForChild(originalView: globalAndroid.view.View, x: number, y: number): boolean;
				public bringChildToFront(child: globalAndroid.view.View): void;
				public onNestedPreScroll(target: globalAndroid.view.View, dx: number, dy: number, consumed: native.Array<number>): void;
				public clearChildFocus(child: globalAndroid.view.View): void;
				public onDescendantInvalidated(child: globalAndroid.view.View, target: globalAndroid.view.View): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public removeView(view: globalAndroid.view.View): void;
				public requestChildRectangleOnScreen(child: globalAndroid.view.View, rectangle: globalAndroid.graphics.Rect, immediate: boolean): boolean;
				public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public getChildVisibleRect(child: globalAndroid.view.View, r: globalAndroid.graphics.Rect, offset: globalAndroid.graphics.Point): boolean;
				public requestChildFocus(child: globalAndroid.view.View, focused: globalAndroid.view.View): void;
				public createContextMenu(menu: globalAndroid.view.ContextMenu): void;
				public canResolveLayoutDirection(): boolean;
				public addView(child: globalAndroid.view.View, index: number, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public onNestedPreFling(target: globalAndroid.view.View, velocityX: number, velocityY: number): boolean;
				public getParent(): globalAndroid.view.ViewParent;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class FitWindowsLinearLayout extends globalAndroid.widget.LinearLayout implements androidx.appcompat.widget.FitWindowsViewGroup {
				public static class: java.lang.Class<androidx.appcompat.widget.FitWindowsLinearLayout>;
				/** @deprecated */
				public invalidateChild(child: globalAndroid.view.View, dirty: globalAndroid.graphics.Rect): void;
				public focusSearch(direction: number): globalAndroid.view.View;
				public constructor(context: globalAndroid.content.Context);
				public onNestedScrollAccepted(child: globalAndroid.view.View, target: globalAndroid.view.View, axes: number): void;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
				public fitSystemWindows(insets: globalAndroid.graphics.Rect): boolean;
				public childDrawableStateChanged(child: globalAndroid.view.View): void;
				public onStopNestedScroll(child: globalAndroid.view.View): void;
				/** @deprecated */
				public fitSystemWindows(insets: globalAndroid.graphics.Rect): boolean;
				public isLayoutRequested(): boolean;
				public sendAccessibilityEvent(eventType: number): void;
				public onNestedPrePerformAccessibilityAction(target: globalAndroid.view.View, action: number, bundle2: globalAndroid.os.Bundle): boolean;
				public addView(child: globalAndroid.view.View, index: number): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
				public requestFitSystemWindows(): void;
				public getTextDirection(): number;
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
				public addView(child: globalAndroid.view.View, width: number, height: number): void;
				public isTextDirectionResolved(): boolean;
				public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
				public childHasTransientStateChanged(child: globalAndroid.view.View, childHasTransientState: boolean): void;
				public focusableViewAvailable(v: globalAndroid.view.View): void;
				public showContextMenuForChild(originalView: globalAndroid.view.View): boolean;
				public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public recomputeViewAttributes(child: globalAndroid.view.View): void;
				public addView(child: globalAndroid.view.View): void;
				public requestSendAccessibilityEvent(child: globalAndroid.view.View, event: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
				public isLayoutDirectionResolved(): boolean;
				public isTextAlignmentResolved(): boolean;
				public getLayoutDirection(): number;
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
				public setOnFitSystemWindowsListener(listener: androidx.appcompat.widget.FitWindowsViewGroup.OnFitSystemWindowsListener): void;
				public requestTransparentRegion(child: globalAndroid.view.View): void;
				public onStartNestedScroll(child: globalAndroid.view.View, target: globalAndroid.view.View, nestedScrollAxes: number): boolean;
				/** @deprecated */
				public requestFitSystemWindows(): void;
				public showContextMenuForChild(originalView: globalAndroid.view.View, x: number, y: number): boolean;
				public bringChildToFront(child: globalAndroid.view.View): void;
				public onNestedPreScroll(target: globalAndroid.view.View, dx: number, dy: number, consumed: native.Array<number>): void;
				public clearChildFocus(child: globalAndroid.view.View): void;
				public onDescendantInvalidated(child: globalAndroid.view.View, target: globalAndroid.view.View): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public removeView(view: globalAndroid.view.View): void;
				public requestChildRectangleOnScreen(child: globalAndroid.view.View, rectangle: globalAndroid.graphics.Rect, immediate: boolean): boolean;
				public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public getChildVisibleRect(child: globalAndroid.view.View, r: globalAndroid.graphics.Rect, offset: globalAndroid.graphics.Point): boolean;
				public requestChildFocus(child: globalAndroid.view.View, focused: globalAndroid.view.View): void;
				public createContextMenu(menu: globalAndroid.view.ContextMenu): void;
				public canResolveLayoutDirection(): boolean;
				public addView(child: globalAndroid.view.View, index: number, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public onNestedPreFling(target: globalAndroid.view.View, velocityX: number, velocityY: number): boolean;
				public getParent(): globalAndroid.view.ViewParent;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class FitWindowsViewGroup extends java.lang.Object {
				public static class: java.lang.Class<androidx.appcompat.widget.FitWindowsViewGroup>;
				/**
				 * Constructs a new instance of the androidx.appcompat.widget.FitWindowsViewGroup interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					setOnFitSystemWindowsListener(onFitSystemWindowsListener0: androidx.appcompat.widget.FitWindowsViewGroup.OnFitSystemWindowsListener): void;
				});
				public constructor();
				public setOnFitSystemWindowsListener(onFitSystemWindowsListener0: androidx.appcompat.widget.FitWindowsViewGroup.OnFitSystemWindowsListener): void;
			}
			export module FitWindowsViewGroup {
				export class OnFitSystemWindowsListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.widget.FitWindowsViewGroup.OnFitSystemWindowsListener>;
					/**
					 * Constructs a new instance of the androidx.appcompat.widget.FitWindowsViewGroup() when extending the interface class.
					 */
					public constructor(implementation: {
						onFitSystemWindows(rect0: globalAndroid.graphics.Rect): void;
					});
					public constructor();
					public onFitSystemWindows(rect0: globalAndroid.graphics.Rect): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export abstract class ForwardingListener extends java.lang.Object implements globalAndroid.view.View.OnTouchListener, globalAndroid.view.View.OnAttachStateChangeListener {
				public static class: java.lang.Class<androidx.appcompat.widget.ForwardingListener>;
				public onViewDetachedFromWindow(v: globalAndroid.view.View): void;
				public constructor(src: globalAndroid.view.View);
				public getPopup(): androidx.appcompat.view.menu.ShowableListMenu;
				public onForwardingStopped(): boolean;
				public onViewAttachedToWindow(v: globalAndroid.view.View): void;
				public onForwardingStarted(): boolean;
				public onTouch(v: globalAndroid.view.View, event: globalAndroid.view.MotionEvent): boolean;
			}
			export module ForwardingListener {
				export class DisallowIntercept extends java.lang.Object implements java.lang.Runnable {
					public static class: java.lang.Class<androidx.appcompat.widget.ForwardingListener.DisallowIntercept>;
					public run(): void;
				}
				export class TriggerLongPress extends java.lang.Object implements java.lang.Runnable {
					public static class: java.lang.Class<androidx.appcompat.widget.ForwardingListener.TriggerLongPress>;
					public run(): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class LinearLayoutCompat extends globalAndroid.view.ViewGroup {
				public static class: java.lang.Class<androidx.appcompat.widget.LinearLayoutCompat>;
				public static HORIZONTAL: number;
				public static VERTICAL: number;
				public static SHOW_DIVIDER_NONE: number;
				public static SHOW_DIVIDER_BEGINNING: number;
				public static SHOW_DIVIDER_MIDDLE: number;
				public static SHOW_DIVIDER_END: number;
				/** @deprecated */
				public invalidateChild(child: globalAndroid.view.View, dirty: globalAndroid.graphics.Rect): void;
				public focusSearch(direction: number): globalAndroid.view.View;
				public childDrawableStateChanged(child: globalAndroid.view.View): void;
				public onStopNestedScroll(child: globalAndroid.view.View): void;
				public isBaselineAligned(): boolean;
				public isLayoutRequested(): boolean;
				public onNestedPrePerformAccessibilityAction(target: globalAndroid.view.View, action: number, bundle2: globalAndroid.os.Bundle): boolean;
				public isMeasureWithLargestChildEnabled(): boolean;
				public getTextDirection(): number;
				public getDividerWidth(): number;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
				public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public onLayout(changed: boolean, l: number, t: number, r: number, b: number): void;
				/** @deprecated */
				public invalidateChildInParent(location: native.Array<number>, dirty: globalAndroid.graphics.Rect): globalAndroid.view.ViewParent;
				public getParentForAccessibility(): globalAndroid.view.ViewParent;
				public setBaselineAligned(baselineAligned: boolean): void;
				public onNestedFling(target: globalAndroid.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
				public generateLayoutParams(attrs: globalAndroid.util.AttributeSet): globalAndroid.view.ViewGroup.LayoutParams;
				public keyboardNavigationClusterSearch(currentCluster: globalAndroid.view.View, direction: number): globalAndroid.view.View;
				public isTextDirectionResolved(): boolean;
				public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
				public showContextMenuForChild(originalView: globalAndroid.view.View): boolean;
				public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public recomputeViewAttributes(child: globalAndroid.view.View): void;
				public onDraw(canvas: globalAndroid.graphics.Canvas): void;
				public isLayoutDirectionResolved(): boolean;
				public generateDefaultLayoutParams(): androidx.appcompat.widget.LinearLayoutCompat.LayoutParams;
				public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onLayout(boolean0: boolean, int1: number, int2: number, int3: number, int4: number): void;
				public getOrientation(): number;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
				public getGravity(): number;
				public updateViewLayout(view: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public onNestedScroll(target: globalAndroid.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
				public getShowDividers(): number;
				public focusSearch(focused: globalAndroid.view.View, direction: number): globalAndroid.view.View;
				/** @deprecated */
				public requestFitSystemWindows(): void;
				public showContextMenuForChild(originalView: globalAndroid.view.View, x: number, y: number): boolean;
				public bringChildToFront(child: globalAndroid.view.View): void;
				public clearChildFocus(child: globalAndroid.view.View): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public setHorizontalGravity(horizontalGravity: number): void;
				public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public onInitializeAccessibilityNodeInfo(info: globalAndroid.view.accessibility.AccessibilityNodeInfo): void;
				public addView(child: globalAndroid.view.View, index: number, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public getParent(): globalAndroid.view.ViewParent;
				public generateLayoutParams(p: globalAndroid.view.ViewGroup.LayoutParams): androidx.appcompat.widget.LinearLayoutCompat.LayoutParams;
				public setGravity(gravity: number): void;
				public constructor(context: globalAndroid.content.Context);
				public checkLayoutParams(p: globalAndroid.view.ViewGroup.LayoutParams): boolean;
				public onNestedScrollAccepted(child: globalAndroid.view.View, target: globalAndroid.view.View, axes: number): void;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
				public sendAccessibilityEvent(eventType: number): void;
				public addView(child: globalAndroid.view.View, index: number): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
				public requestFitSystemWindows(): void;
				public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback, type: number): globalAndroid.view.ActionMode;
				public getBaselineAlignedChildIndex(): number;
				public getTextAlignment(): number;
				public generateLayoutParams(p: globalAndroid.view.ViewGroup.LayoutParams): globalAndroid.view.ViewGroup.LayoutParams;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
				public addView(child: globalAndroid.view.View, width: number, height: number): void;
				public setMeasureWithLargestChildEnabled(enabled: boolean): void;
				public childHasTransientStateChanged(child: globalAndroid.view.View, childHasTransientState: boolean): void;
				public focusableViewAvailable(v: globalAndroid.view.View): void;
				public generateDefaultLayoutParams(): globalAndroid.view.ViewGroup.LayoutParams;
				public addView(child: globalAndroid.view.View): void;
				public getBaseline(): number;
				public requestSendAccessibilityEvent(child: globalAndroid.view.View, event: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
				public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
				public isTextAlignmentResolved(): boolean;
				public getLayoutDirection(): number;
				public addView(child: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public canResolveTextDirection(): boolean;
				public canResolveTextAlignment(): boolean;
				public getDividerDrawable(): globalAndroid.graphics.drawable.Drawable;
				public setShowDividers(showDividers: number): void;
				public notifySubtreeAccessibilityStateChanged(child: globalAndroid.view.View, source: globalAndroid.view.View, changeType: number): void;
				public setBaselineAlignedChildIndex(i: number): void;
				public hasDividerBeforeChildAt(childIndex: number): boolean;
				public requestLayout(): void;
				public setOrientation(orientation: number): void;
				public generateLayoutParams(attrs: globalAndroid.util.AttributeSet): androidx.appcompat.widget.LinearLayoutCompat.LayoutParams;
				public requestTransparentRegion(child: globalAndroid.view.View): void;
				public onStartNestedScroll(child: globalAndroid.view.View, target: globalAndroid.view.View, nestedScrollAxes: number): boolean;
				public onNestedPreScroll(target: globalAndroid.view.View, dx: number, dy: number, consumed: native.Array<number>): void;
				public getDividerPadding(): number;
				public onDescendantInvalidated(child: globalAndroid.view.View, target: globalAndroid.view.View): void;
				public removeView(view: globalAndroid.view.View): void;
				public onInitializeAccessibilityEvent(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public requestChildRectangleOnScreen(child: globalAndroid.view.View, rectangle: globalAndroid.graphics.Rect, immediate: boolean): boolean;
				public setDividerPadding(padding: number): void;
				public getChildVisibleRect(child: globalAndroid.view.View, r: globalAndroid.graphics.Rect, offset: globalAndroid.graphics.Point): boolean;
				public requestChildFocus(child: globalAndroid.view.View, focused: globalAndroid.view.View): void;
				public createContextMenu(menu: globalAndroid.view.ContextMenu): void;
				public canResolveLayoutDirection(): boolean;
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public getWeightSum(): number;
				public setVerticalGravity(verticalGravity: number): void;
				public onNestedPreFling(target: globalAndroid.view.View, velocityX: number, velocityY: number): boolean;
				public setWeightSum(weightSum: number): void;
				public setDividerDrawable(divider: globalAndroid.graphics.drawable.Drawable): void;
				public shouldDelayChildPressedState(): boolean;
			}
			export module LinearLayoutCompat {
				export class DividerMode extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.appcompat.widget.LinearLayoutCompat.DividerMode>;
					/**
					 * Constructs a new instance of the androidx.appcompat.widget.LinearLayoutCompat() when extending the interface class.
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
				export class LayoutParams extends globalAndroid.view.ViewGroup.MarginLayoutParams {
					public static class: java.lang.Class<androidx.appcompat.widget.LinearLayoutCompat.LayoutParams>;
					public weight: number;
					public gravity: number;
					public constructor(source: globalAndroid.view.ViewGroup.LayoutParams);
					public constructor(c: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
					public constructor(width: number, height: number, weight: number);
					public constructor(source: androidx.appcompat.widget.LinearLayoutCompat.LayoutParams);
					public constructor(width: number, height: number);
					public constructor(p: globalAndroid.view.ViewGroup.LayoutParams);
					public constructor(source: globalAndroid.view.ViewGroup.MarginLayoutParams);
				}
				export class OrientationMode extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.appcompat.widget.LinearLayoutCompat.OrientationMode>;
					/**
					 * Constructs a new instance of the androidx.appcompat.widget.LinearLayoutCompat() when extending the interface class.
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
	export module appcompat {
		export module widget {
			export class ListPopupWindow extends java.lang.Object implements androidx.appcompat.view.menu.ShowableListMenu {
				public static class: java.lang.Class<androidx.appcompat.widget.ListPopupWindow>;
				public static POSITION_PROMPT_ABOVE: number;
				public static POSITION_PROMPT_BELOW: number;
				public static MATCH_PARENT: number;
				public static WRAP_CONTENT: number;
				public static INPUT_METHOD_FROM_FOCUSABLE: number;
				public static INPUT_METHOD_NEEDED: number;
				public static INPUT_METHOD_NOT_NEEDED: number;
				public getHeight(): number;
				public getSelectedItem(): any;
				public constructor(context: globalAndroid.content.Context);
				public getListView(): globalAndroid.widget.ListView;
				public onKeyPreIme(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public show(): void;
				public setOverlapAnchor(overlapAnchor: boolean): void;
				public setPromptPosition(position: number): void;
				public isShowing(): boolean;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
				public getBackground(): globalAndroid.graphics.drawable.Drawable;
				public setAdapter(adapter: globalAndroid.widget.ListAdapter): void;
				public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public getSoftInputMode(): number;
				public setVerticalOffset(offset: number): void;
				public postShow(): void;
				public createDragToOpenListener(src: globalAndroid.view.View): globalAndroid.view.View.OnTouchListener;
				public setContentWidth(width: number): void;
				public getVerticalOffset(): number;
				public clearListSelection(): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
				public setOnItemClickListener(clickListener: globalAndroid.widget.AdapterView.OnItemClickListener): void;
				public isDropDownAlwaysVisible(): boolean;
				public getSelectedItemPosition(): number;
				public setSoftInputMode(mode: number): void;
				public setAnchorView(anchor: globalAndroid.view.View): void;
				public setForceIgnoreOutsideTouch(forceIgnoreOutsideTouch: boolean): void;
				public setDropDownAlwaysVisible(dropDownAlwaysVisible: boolean): void;
				public setWidth(width: number): void;
				public getInputMethodMode(): number;
				public setListSelector(selector: globalAndroid.graphics.drawable.Drawable): void;
				public setOnDismissListener(listener: globalAndroid.widget.PopupWindow.OnDismissListener): void;
				public getEpicenterBounds(): globalAndroid.graphics.Rect;
				public dismiss(): void;
				public isModal(): boolean;
				public setDropDownGravity(gravity: number): void;
				public setSelection(position: number): void;
				public getSelectedView(): globalAndroid.view.View;
				public setPromptView(prompt: globalAndroid.view.View): void;
				public getHorizontalOffset(): number;
				public isInputMethodNotNeeded(): boolean;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public setAnimationStyle(animationStyle: number): void;
				public setOnItemSelectedListener(selectedListener: globalAndroid.widget.AdapterView.OnItemSelectedListener): void;
				public setInputMethodMode(mode: number): void;
				public getAnimationStyle(): number;
				public setWindowLayoutType(layoutType: number): void;
				public setModal(modal: boolean): void;
				public setHorizontalOffset(offset: number): void;
				public getPromptPosition(): number;
				public getAnchorView(): globalAndroid.view.View;
				public setHeight(height: number): void;
				public setBackgroundDrawable(d: globalAndroid.graphics.drawable.Drawable): void;
				public getWidth(): number;
				public setEpicenterBounds(bounds: globalAndroid.graphics.Rect): void;
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public performItemClick(position: number): boolean;
				public getSelectedItemId(): number;
			}
			export module ListPopupWindow {
				export class ListSelectorHider extends java.lang.Object implements java.lang.Runnable {
					public static class: java.lang.Class<androidx.appcompat.widget.ListPopupWindow.ListSelectorHider>;
					public run(): void;
				}
				export class PopupDataSetObserver extends globalAndroid.database.DataSetObserver {
					public static class: java.lang.Class<androidx.appcompat.widget.ListPopupWindow.PopupDataSetObserver>;
					public onChanged(): void;
					public onInvalidated(): void;
				}
				export class PopupScrollListener extends java.lang.Object implements globalAndroid.widget.AbsListView.OnScrollListener {
					public static class: java.lang.Class<androidx.appcompat.widget.ListPopupWindow.PopupScrollListener>;
					public onScrollStateChanged(view: globalAndroid.widget.AbsListView, scrollState: number): void;
					public onScroll(view: globalAndroid.widget.AbsListView, firstVisibleItem: number, visibleItemCount: number, totalItemCount: number): void;
				}
				export class PopupTouchInterceptor extends java.lang.Object implements globalAndroid.view.View.OnTouchListener {
					public static class: java.lang.Class<androidx.appcompat.widget.ListPopupWindow.PopupTouchInterceptor>;
					public onTouch(v: globalAndroid.view.View, event: globalAndroid.view.MotionEvent): boolean;
				}
				export class ResizePopupRunnable extends java.lang.Object implements java.lang.Runnable {
					public static class: java.lang.Class<androidx.appcompat.widget.ListPopupWindow.ResizePopupRunnable>;
					public run(): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class MenuItemHoverListener extends java.lang.Object {
				public static class: java.lang.Class<androidx.appcompat.widget.MenuItemHoverListener>;
				/**
				 * Constructs a new instance of the androidx.appcompat.widget.MenuItemHoverListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onItemHoverExit(menuBuilder0: androidx.appcompat.view.menu.MenuBuilder, menuItem1: globalAndroid.view.MenuItem): void;
					onItemHoverEnter(menuBuilder0: androidx.appcompat.view.menu.MenuBuilder, menuItem1: globalAndroid.view.MenuItem): void;
				});
				public constructor();
				public onItemHoverEnter(menuBuilder0: androidx.appcompat.view.menu.MenuBuilder, menuItem1: globalAndroid.view.MenuItem): void;
				public onItemHoverExit(menuBuilder0: androidx.appcompat.view.menu.MenuBuilder, menuItem1: globalAndroid.view.MenuItem): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class MenuPopupWindow extends androidx.appcompat.widget.ListPopupWindow implements androidx.appcompat.widget.MenuItemHoverListener {
				public static class: java.lang.Class<androidx.appcompat.widget.MenuPopupWindow>;
				public setHoverListener(hoverListener: androidx.appcompat.widget.MenuItemHoverListener): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public setEnterTransition(enterTransition: any): void;
				public constructor(context: globalAndroid.content.Context);
				public setExitTransition(exitTransition: any): void;
				public getListView(): globalAndroid.widget.ListView;
				public dismiss(): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
				public show(): void;
				public setTouchModal(touchModal: boolean): void;
				public isShowing(): boolean;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
				public onItemHoverEnter(menu: androidx.appcompat.view.menu.MenuBuilder, item: globalAndroid.view.MenuItem): void;
				public onItemHoverExit(menu: androidx.appcompat.view.menu.MenuBuilder, item: globalAndroid.view.MenuItem): void;
			}
			export module MenuPopupWindow {
				export class MenuDropDownListView extends androidx.appcompat.widget.DropDownListView {
					public static class: java.lang.Class<androidx.appcompat.widget.MenuPopupWindow.MenuDropDownListView>;
					public showContextMenuForChild(originalView: globalAndroid.view.View, x: number, y: number): boolean;
					public requestTransparentRegion(child: globalAndroid.view.View): void;
					public childDrawableStateChanged(child: globalAndroid.view.View): void;
					public onFilterComplete(count: number): void;
					public onNestedFling(target: globalAndroid.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
					public isLayoutRequested(): boolean;
					/** @deprecated */
					public invalidateChild(child: globalAndroid.view.View, dirty: globalAndroid.graphics.Rect): void;
					public focusableViewAvailable(v: globalAndroid.view.View): void;
					public focusSearch(direction: number): globalAndroid.view.View;
					public isTextDirectionResolved(): boolean;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
					public isLayoutDirectionResolved(): boolean;
					public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public showContextMenuForChild(originalView: globalAndroid.view.View): boolean;
					public onTouchModeChanged(isInTouchMode: boolean): void;
					public onNestedScroll(target: globalAndroid.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
					public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
					public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
					public requestSendAccessibilityEvent(child: globalAndroid.view.View, event: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
					public setHoverListener(hoverListener: androidx.appcompat.widget.MenuItemHoverListener): void;
					public beforeTextChanged(s: string, start: number, count: number, after: number): void;
					public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
					public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback, type: number): globalAndroid.view.ActionMode;
					public getLayoutDirection(): number;
					public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
					public onGlobalLayout(): void;
					public onStartNestedScroll(child: globalAndroid.view.View, target: globalAndroid.view.View, nestedScrollAxes: number): boolean;
					/** @deprecated */
					public invalidateChildInParent(location: native.Array<number>, dirty: globalAndroid.graphics.Rect): globalAndroid.view.ViewParent;
					public recomputeViewAttributes(child: globalAndroid.view.View): void;
					public notifySubtreeAccessibilityStateChanged(child: globalAndroid.view.View, source: globalAndroid.view.View, changeType: number): void;
					public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
					public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public addView(child: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
					public constructor(context: globalAndroid.content.Context);
					public getTextDirection(): number;
					public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
					public requestFitSystemWindows(): void;
					public getParent(): globalAndroid.view.ViewParent;
					public isTextAlignmentResolved(): boolean;
					public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public requestChildRectangleOnScreen(child: globalAndroid.view.View, rect: globalAndroid.graphics.Rect, immediate: boolean): boolean;
					public sendAccessibilityEvent(eventType: number): void;
					public getChildVisibleRect(child: globalAndroid.view.View, r: globalAndroid.graphics.Rect, offset: globalAndroid.graphics.Point): boolean;
					public canResolveTextAlignment(): boolean;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
					/** @deprecated */
					public requestFitSystemWindows(): void;
					public addView(child: globalAndroid.view.View): void;
					public onHoverEvent(ev: globalAndroid.view.MotionEvent): boolean;
					public canResolveTextDirection(): boolean;
					public updateViewLayout(view: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
					public bringChildToFront(child: globalAndroid.view.View): void;
					public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
					public onNestedPreScroll(target: globalAndroid.view.View, dx: number, dy: number, consumed: native.Array<number>): void;
					public afterTextChanged(s: globalAndroid.text.Editable): void;
					public clearChildFocus(child: globalAndroid.view.View): void;
					public requestLayout(): void;
					public createContextMenu(menu: globalAndroid.view.ContextMenu): void;
					public getParentForAccessibility(): globalAndroid.view.ViewParent;
					public addView(child: globalAndroid.view.View, index: number, params: globalAndroid.view.ViewGroup.LayoutParams): void;
					public childHasTransientStateChanged(child: globalAndroid.view.View, childHasTransientState: boolean): void;
					public canResolveLayoutDirection(): boolean;
					public onTextChanged(s: string, start: number, before: number, count: number): void;
					public onNestedScrollAccepted(child: globalAndroid.view.View, target: globalAndroid.view.View, axes: number): void;
					public getTextAlignment(): number;
					public onDescendantInvalidated(child: globalAndroid.view.View, target: globalAndroid.view.View): void;
					public onNestedPrePerformAccessibilityAction(target: globalAndroid.view.View, action: number, bundle2: globalAndroid.os.Bundle): boolean;
					public clearSelection(): void;
					public keyboardNavigationClusterSearch(currentCluster: globalAndroid.view.View, direction: number): globalAndroid.view.View;
					public addView(child: globalAndroid.view.View, width: number, height: number): void;
					public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
					public requestChildFocus(child: globalAndroid.view.View, focused: globalAndroid.view.View): void;
					public onStopNestedScroll(child: globalAndroid.view.View): void;
					public onNestedPreFling(target: globalAndroid.view.View, velocityX: number, velocityY: number): boolean;
					public addView(child: globalAndroid.view.View, index: number): void;
					public removeView(child: globalAndroid.view.View): void;
					public focusSearch(focused: globalAndroid.view.View, direction: number): globalAndroid.view.View;
					public constructor(context: globalAndroid.content.Context, hijackFocus: boolean);
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class PopupMenu extends java.lang.Object {
				public static class: java.lang.Class<androidx.appcompat.widget.PopupMenu>;
				public setGravity(gravity: number): void;
				public setOnMenuItemClickListener(listener: androidx.appcompat.widget.PopupMenu.OnMenuItemClickListener): void;
				public setOnDismissListener(listener: androidx.appcompat.widget.PopupMenu.OnDismissListener): void;
				public getMenuInflater(): globalAndroid.view.MenuInflater;
				public getDragToOpenListener(): globalAndroid.view.View.OnTouchListener;
				public dismiss(): void;
				public getMenu(): globalAndroid.view.Menu;
				public show(): void;
				public inflate(menuRes: number): void;
				public constructor(context: globalAndroid.content.Context, anchor: globalAndroid.view.View, gravity: number, popupStyleAttr: number, popupStyleRes: number);
				public getGravity(): number;
				public constructor(context: globalAndroid.content.Context, anchor: globalAndroid.view.View, gravity: number);
				public constructor(context: globalAndroid.content.Context, anchor: globalAndroid.view.View);
			}
			export module PopupMenu {
				export class OnDismissListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.widget.PopupMenu.OnDismissListener>;
					/**
					 * Constructs a new instance of the androidx.appcompat.widget.PopupMenu() when extending the interface class.
					 */
					public constructor(implementation: {
						onDismiss(popupMenu0: androidx.appcompat.widget.PopupMenu): void;
					});
					public constructor();
					public onDismiss(popupMenu0: androidx.appcompat.widget.PopupMenu): void;
				}
				export class OnMenuItemClickListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.widget.PopupMenu.OnMenuItemClickListener>;
					/**
					 * Constructs a new instance of the androidx.appcompat.widget.PopupMenu() when extending the interface class.
					 */
					public constructor(implementation: {
						onMenuItemClick(menuItem0: globalAndroid.view.MenuItem): boolean;
					});
					public constructor();
					public onMenuItemClick(menuItem0: globalAndroid.view.MenuItem): boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class RtlSpacingHelper extends java.lang.Object {
				public static class: java.lang.Class<androidx.appcompat.widget.RtlSpacingHelper>;
				public static UNDEFINED: number;
				public getEnd(): number;
				public setAbsolute(left: number, right: number): void;
				public getLeft(): number;
				public getStart(): number;
				public getRight(): number;
				public setDirection(isRtl: boolean): void;
				public setRelative(start: number, end: number): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class ScrollingTabContainerView extends globalAndroid.widget.HorizontalScrollView implements globalAndroid.widget.AdapterView.OnItemSelectedListener {
				public static class: java.lang.Class<androidx.appcompat.widget.ScrollingTabContainerView>;
				public mVisibilityAnim: globalAndroid.view.ViewPropertyAnimator;
				public mVisAnimListener: androidx.appcompat.widget.ScrollingTabContainerView.VisibilityAnimListener;
				/** @deprecated */
				public invalidateChild(child: globalAndroid.view.View, dirty: globalAndroid.graphics.Rect): void;
				public animateToVisibility(visibility: number): void;
				public focusSearch(direction: number): globalAndroid.view.View;
				public constructor(context: globalAndroid.content.Context);
				public onNestedScrollAccepted(child: globalAndroid.view.View, target: globalAndroid.view.View, axes: number): void;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
				public removeTabAt(position: number): void;
				public childDrawableStateChanged(child: globalAndroid.view.View): void;
				public onStopNestedScroll(child: globalAndroid.view.View): void;
				public setContentHeight(contentHeight: number): void;
				public isLayoutRequested(): boolean;
				public onItemSelected(adapterView: globalAndroid.widget.AdapterView<any>, view: globalAndroid.view.View, position: number, id: number): void;
				public sendAccessibilityEvent(eventType: number): void;
				public onNestedPrePerformAccessibilityAction(target: globalAndroid.view.View, action: number, bundle2: globalAndroid.os.Bundle): boolean;
				public addView(child: globalAndroid.view.View, index: number): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
				public requestFitSystemWindows(): void;
				public getTextDirection(): number;
				public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback, type: number): globalAndroid.view.ActionMode;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
				public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public onConfigurationChanged(newConfig: globalAndroid.content.res.Configuration): void;
				public getTextAlignment(): number;
				/** @deprecated */
				public invalidateChildInParent(location: native.Array<number>, dirty: globalAndroid.graphics.Rect): globalAndroid.view.ViewParent;
				public getParentForAccessibility(): globalAndroid.view.ViewParent;
				public onNestedFling(target: globalAndroid.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
				public keyboardNavigationClusterSearch(currentCluster: globalAndroid.view.View, direction: number): globalAndroid.view.View;
				public addView(child: globalAndroid.view.View, width: number, height: number): void;
				public updateTab(position: number): void;
				public isTextDirectionResolved(): boolean;
				public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
				public childHasTransientStateChanged(child: globalAndroid.view.View, childHasTransientState: boolean): void;
				public onDetachedFromWindow(): void;
				public focusableViewAvailable(v: globalAndroid.view.View): void;
				public showContextMenuForChild(originalView: globalAndroid.view.View): boolean;
				public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public removeAllTabs(): void;
				public recomputeViewAttributes(child: globalAndroid.view.View): void;
				public addView(child: globalAndroid.view.View): void;
				public requestSendAccessibilityEvent(child: globalAndroid.view.View, event: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
				public isLayoutDirectionResolved(): boolean;
				public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
				public isTextAlignmentResolved(): boolean;
				public getLayoutDirection(): number;
				public addView(child: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public canResolveTextDirection(): boolean;
				public onNothingSelected(adapterView: globalAndroid.widget.AdapterView<any>): void;
				public canResolveTextAlignment(): boolean;
				public notifySubtreeAccessibilityStateChanged(child: globalAndroid.view.View, source: globalAndroid.view.View, changeType: number): void;
				public animateToTab(position: number): void;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
				public updateViewLayout(view: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public onNestedScroll(target: globalAndroid.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
				public requestLayout(): void;
				public focusSearch(focused: globalAndroid.view.View, direction: number): globalAndroid.view.View;
				public requestTransparentRegion(child: globalAndroid.view.View): void;
				public onStartNestedScroll(child: globalAndroid.view.View, target: globalAndroid.view.View, nestedScrollAxes: number): boolean;
				public setAllowCollapse(allowCollapse: boolean): void;
				/** @deprecated */
				public requestFitSystemWindows(): void;
				public addTab(tab: androidx.appcompat.app.ActionBar.Tab, position: number, setSelected: boolean): void;
				public showContextMenuForChild(originalView: globalAndroid.view.View, x: number, y: number): boolean;
				public bringChildToFront(child: globalAndroid.view.View): void;
				public onNestedPreScroll(target: globalAndroid.view.View, dx: number, dy: number, consumed: native.Array<number>): void;
				public clearChildFocus(child: globalAndroid.view.View): void;
				public onDescendantInvalidated(child: globalAndroid.view.View, target: globalAndroid.view.View): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public removeView(view: globalAndroid.view.View): void;
				public requestChildRectangleOnScreen(child: globalAndroid.view.View, rectangle: globalAndroid.graphics.Rect, immediate: boolean): boolean;
				public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public getChildVisibleRect(child: globalAndroid.view.View, r: globalAndroid.graphics.Rect, offset: globalAndroid.graphics.Point): boolean;
				public requestChildFocus(child: globalAndroid.view.View, focused: globalAndroid.view.View): void;
				public createContextMenu(menu: globalAndroid.view.ContextMenu): void;
				public canResolveLayoutDirection(): boolean;
				public addView(child: globalAndroid.view.View, index: number, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public setTabSelected(position: number): void;
				public addTab(tab: androidx.appcompat.app.ActionBar.Tab, setSelected: boolean): void;
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public onNestedPreFling(target: globalAndroid.view.View, velocityX: number, velocityY: number): boolean;
				public onAttachedToWindow(): void;
				public getParent(): globalAndroid.view.ViewParent;
			}
			export module ScrollingTabContainerView {
				export class TabAdapter extends globalAndroid.widget.BaseAdapter {
					public static class: java.lang.Class<androidx.appcompat.widget.ScrollingTabContainerView.TabAdapter>;
					public getItem(position: number): any;
					public getCount(): number;
					public areAllItemsEnabled(): boolean;
					public isEnabled(position: number): boolean;
					public getView(position: number, convertView: globalAndroid.view.View, parent: globalAndroid.view.ViewGroup): globalAndroid.view.View;
					public getItemId(position: number): number;
					public getDropDownView(position: number, convertView: globalAndroid.view.View, parent: globalAndroid.view.ViewGroup): globalAndroid.view.View;
				}
				export class TabClickListener extends java.lang.Object implements globalAndroid.view.View.OnClickListener {
					public static class: java.lang.Class<androidx.appcompat.widget.ScrollingTabContainerView.TabClickListener>;
					public onClick(view: globalAndroid.view.View): void;
				}
				export class TabView extends globalAndroid.widget.LinearLayout {
					public static class: java.lang.Class<androidx.appcompat.widget.ScrollingTabContainerView.TabView>;
					public showContextMenuForChild(originalView: globalAndroid.view.View, x: number, y: number): boolean;
					public requestTransparentRegion(child: globalAndroid.view.View): void;
					public childDrawableStateChanged(child: globalAndroid.view.View): void;
					public onNestedFling(target: globalAndroid.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
					public isLayoutRequested(): boolean;
					public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
					/** @deprecated */
					public invalidateChild(child: globalAndroid.view.View, dirty: globalAndroid.graphics.Rect): void;
					public focusableViewAvailable(v: globalAndroid.view.View): void;
					public focusSearch(direction: number): globalAndroid.view.View;
					public isTextDirectionResolved(): boolean;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
					public isLayoutDirectionResolved(): boolean;
					public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public showContextMenuForChild(originalView: globalAndroid.view.View): boolean;
					public onNestedScroll(target: globalAndroid.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
					public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
					public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
					public onInitializeAccessibilityEvent(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
					public requestSendAccessibilityEvent(child: globalAndroid.view.View, event: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
					public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
					public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback, type: number): globalAndroid.view.ActionMode;
					public getLayoutDirection(): number;
					public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
					public onStartNestedScroll(child: globalAndroid.view.View, target: globalAndroid.view.View, nestedScrollAxes: number): boolean;
					/** @deprecated */
					public invalidateChildInParent(location: native.Array<number>, dirty: globalAndroid.graphics.Rect): globalAndroid.view.ViewParent;
					public recomputeViewAttributes(child: globalAndroid.view.View): void;
					public notifySubtreeAccessibilityStateChanged(child: globalAndroid.view.View, source: globalAndroid.view.View, changeType: number): void;
					public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
					public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public addView(child: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
					public constructor(context: globalAndroid.content.Context);
					public getTextDirection(): number;
					public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
					public requestFitSystemWindows(): void;
					public onInitializeAccessibilityNodeInfo(info: globalAndroid.view.accessibility.AccessibilityNodeInfo): void;
					public setSelected(selected: boolean): void;
					public getParent(): globalAndroid.view.ViewParent;
					public isTextAlignmentResolved(): boolean;
					public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public sendAccessibilityEvent(eventType: number): void;
					public getChildVisibleRect(child: globalAndroid.view.View, r: globalAndroid.graphics.Rect, offset: globalAndroid.graphics.Point): boolean;
					public requestChildRectangleOnScreen(child: globalAndroid.view.View, rectangle: globalAndroid.graphics.Rect, immediate: boolean): boolean;
					public canResolveTextAlignment(): boolean;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
					public getTab(): androidx.appcompat.app.ActionBar.Tab;
					/** @deprecated */
					public requestFitSystemWindows(): void;
					public addView(child: globalAndroid.view.View): void;
					public canResolveTextDirection(): boolean;
					public updateViewLayout(view: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
					public bringChildToFront(child: globalAndroid.view.View): void;
					public update(): void;
					public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
					public onNestedPreScroll(target: globalAndroid.view.View, dx: number, dy: number, consumed: native.Array<number>): void;
					public clearChildFocus(child: globalAndroid.view.View): void;
					public requestLayout(): void;
					public createContextMenu(menu: globalAndroid.view.ContextMenu): void;
					public getParentForAccessibility(): globalAndroid.view.ViewParent;
					public addView(child: globalAndroid.view.View, index: number, params: globalAndroid.view.ViewGroup.LayoutParams): void;
					public childHasTransientStateChanged(child: globalAndroid.view.View, childHasTransientState: boolean): void;
					public canResolveLayoutDirection(): boolean;
					public onNestedScrollAccepted(child: globalAndroid.view.View, target: globalAndroid.view.View, axes: number): void;
					public getTextAlignment(): number;
					public onDescendantInvalidated(child: globalAndroid.view.View, target: globalAndroid.view.View): void;
					public onNestedPrePerformAccessibilityAction(target: globalAndroid.view.View, action: number, bundle2: globalAndroid.os.Bundle): boolean;
					public keyboardNavigationClusterSearch(currentCluster: globalAndroid.view.View, direction: number): globalAndroid.view.View;
					public addView(child: globalAndroid.view.View, width: number, height: number): void;
					public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
					public requestChildFocus(child: globalAndroid.view.View, focused: globalAndroid.view.View): void;
					public onStopNestedScroll(child: globalAndroid.view.View): void;
					public onNestedPreFling(target: globalAndroid.view.View, velocityX: number, velocityY: number): boolean;
					public constructor(param0: androidx.appcompat.widget.ScrollingTabContainerView, context: globalAndroid.content.Context, tab: androidx.appcompat.app.ActionBar.Tab, forList: boolean);
					public addView(child: globalAndroid.view.View, index: number): void;
					public bindTab(tab: androidx.appcompat.app.ActionBar.Tab): void;
					public removeView(view: globalAndroid.view.View): void;
					public focusSearch(focused: globalAndroid.view.View, direction: number): globalAndroid.view.View;
				}
				export class VisibilityAnimListener extends globalAndroid.animation.AnimatorListenerAdapter {
					public static class: java.lang.Class<androidx.appcompat.widget.ScrollingTabContainerView.VisibilityAnimListener>;
					public onAnimationStart(animator: globalAndroid.animation.Animator): void;
					public onAnimationPause(animation: globalAndroid.animation.Animator): void;
					public onAnimationRepeat(animation: globalAndroid.animation.Animator): void;
					public onAnimationResume(animation: globalAndroid.animation.Animator): void;
					public withFinalVisibility(animation: globalAndroid.view.ViewPropertyAnimator, visibility: number): androidx.appcompat.widget.ScrollingTabContainerView.VisibilityAnimListener;
					public onAnimationCancel(animator: globalAndroid.animation.Animator): void;
					public constructor(this0: androidx.appcompat.widget.ScrollingTabContainerView);
					public onAnimationEnd(animation: globalAndroid.animation.Animator): void;
					public constructor();
					public onAnimationStart(animation: globalAndroid.animation.Animator): void;
					public onAnimationEnd(animator: globalAndroid.animation.Animator): void;
					public onAnimationCancel(animation: globalAndroid.animation.Animator): void;
					public onAnimationEnd(animation: globalAndroid.animation.Animator, isReverse: boolean): void;
					public onAnimationStart(animation: globalAndroid.animation.Animator, isReverse: boolean): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class SearchView extends androidx.appcompat.widget.LinearLayoutCompat implements androidx.appcompat.view.CollapsibleActionView {
				public static class: java.lang.Class<androidx.appcompat.widget.SearchView>;
				/** @deprecated */
				public invalidateChild(child: globalAndroid.view.View, dirty: globalAndroid.graphics.Rect): void;
				public focusSearch(direction: number): globalAndroid.view.View;
				public childDrawableStateChanged(child: globalAndroid.view.View): void;
				public setQueryRefinementEnabled(enable: boolean): void;
				public onStopNestedScroll(child: globalAndroid.view.View): void;
				public isLayoutRequested(): boolean;
				public onNestedPrePerformAccessibilityAction(target: globalAndroid.view.View, action: number, bundle2: globalAndroid.os.Bundle): boolean;
				public setInputType(inputType: number): void;
				public isSubmitButtonEnabled(): boolean;
				public getTextDirection(): number;
				public getQueryHint(): string;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
				public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public requestFocus(direction: number, previouslyFocusedRect: globalAndroid.graphics.Rect): boolean;
				public onLayout(changed: boolean, l: number, t: number, r: number, b: number): void;
				public onActionViewExpanded(): void;
				/** @deprecated */
				public invalidateChildInParent(location: native.Array<number>, dirty: globalAndroid.graphics.Rect): globalAndroid.view.ViewParent;
				public getParentForAccessibility(): globalAndroid.view.ViewParent;
				public onNestedFling(target: globalAndroid.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
				public keyboardNavigationClusterSearch(currentCluster: globalAndroid.view.View, direction: number): globalAndroid.view.View;
				public requestFocus(direction: number): boolean;
				public clearFocus(): void;
				public onLayout(changed: boolean, left: number, top: number, right: number, bottom: number): void;
				public isTextDirectionResolved(): boolean;
				public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
				public setOnQueryTextFocusChangeListener(listener: globalAndroid.view.View.OnFocusChangeListener): void;
				public showContextMenuForChild(originalView: globalAndroid.view.View): boolean;
				public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public onActionViewCollapsed(): void;
				public recomputeViewAttributes(child: globalAndroid.view.View): void;
				public isLayoutDirectionResolved(): boolean;
				public setImeOptions(imeOptions: number): void;
				public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
				public setIconifiedByDefault(iconified: boolean): void;
				public updateViewLayout(view: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public onNestedScroll(target: globalAndroid.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
				public getInputType(): number;
				public setSuggestionsAdapter(adapter: androidx.cursoradapter.widget.CursorAdapter): void;
				public focusSearch(focused: globalAndroid.view.View, direction: number): globalAndroid.view.View;
				/** @deprecated */
				public requestFitSystemWindows(): void;
				public showContextMenuForChild(originalView: globalAndroid.view.View, x: number, y: number): boolean;
				public bringChildToFront(child: globalAndroid.view.View): void;
				public clearChildFocus(child: globalAndroid.view.View): void;
				public setSubmitButtonEnabled(enabled: boolean): void;
				public setOnQueryTextListener(listener: androidx.appcompat.widget.SearchView.OnQueryTextListener): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public setOnCloseListener(listener: androidx.appcompat.widget.SearchView.OnCloseListener): void;
				public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public setQuery(query: string, submit: boolean): void;
				public getImeOptions(): number;
				public addView(child: globalAndroid.view.View, index: number, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public getQuery(): string;
				public getParent(): globalAndroid.view.ViewParent;
				public isIconified(): boolean;
				public constructor(context: globalAndroid.content.Context);
				public onNestedScrollAccepted(child: globalAndroid.view.View, target: globalAndroid.view.View, axes: number): void;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
				public isQueryRefinementEnabled(): boolean;
				public sendAccessibilityEvent(eventType: number): void;
				public addView(child: globalAndroid.view.View, index: number): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
				public requestFitSystemWindows(): void;
				public onRestoreInstanceState(state: globalAndroid.os.Parcelable): void;
				public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback, type: number): globalAndroid.view.ActionMode;
				public getTextAlignment(): number;
				public setIconified(iconify: boolean): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
				public addView(child: globalAndroid.view.View, width: number, height: number): void;
				public setQueryHint(hint: string): void;
				public childHasTransientStateChanged(child: globalAndroid.view.View, childHasTransientState: boolean): void;
				public onDetachedFromWindow(): void;
				public focusableViewAvailable(v: globalAndroid.view.View): void;
				public isIconfiedByDefault(): boolean;
				public setOnSearchClickListener(listener: globalAndroid.view.View.OnClickListener): void;
				public addView(child: globalAndroid.view.View): void;
				public requestSendAccessibilityEvent(child: globalAndroid.view.View, event: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
				public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
				public isTextAlignmentResolved(): boolean;
				public getLayoutDirection(): number;
				public addView(child: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public canResolveTextDirection(): boolean;
				public getMaxWidth(): number;
				public canResolveTextAlignment(): boolean;
				public setAppSearchData(appSearchData: globalAndroid.os.Bundle): void;
				public notifySubtreeAccessibilityStateChanged(child: globalAndroid.view.View, source: globalAndroid.view.View, changeType: number): void;
				public requestLayout(): void;
				public requestTransparentRegion(child: globalAndroid.view.View): void;
				public onStartNestedScroll(child: globalAndroid.view.View, target: globalAndroid.view.View, nestedScrollAxes: number): boolean;
				public setMaxWidth(maxpixels: number): void;
				public setOnSuggestionListener(listener: androidx.appcompat.widget.SearchView.OnSuggestionListener): void;
				public onNestedPreScroll(target: globalAndroid.view.View, dx: number, dy: number, consumed: native.Array<number>): void;
				public requestFocus(): boolean;
				public onDescendantInvalidated(child: globalAndroid.view.View, target: globalAndroid.view.View): void;
				public removeView(view: globalAndroid.view.View): void;
				public onSaveInstanceState(): globalAndroid.os.Parcelable;
				public onWindowFocusChanged(hasWindowFocus: boolean): void;
				public requestChildRectangleOnScreen(child: globalAndroid.view.View, rectangle: globalAndroid.graphics.Rect, immediate: boolean): boolean;
				public getSuggestionsAdapter(): androidx.cursoradapter.widget.CursorAdapter;
				public setSearchableInfo(searchable: globalAndroid.app.SearchableInfo): void;
				public getChildVisibleRect(child: globalAndroid.view.View, r: globalAndroid.graphics.Rect, offset: globalAndroid.graphics.Point): boolean;
				public requestChildFocus(child: globalAndroid.view.View, focused: globalAndroid.view.View): void;
				public createContextMenu(menu: globalAndroid.view.ContextMenu): void;
				public canResolveLayoutDirection(): boolean;
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public onNestedPreFling(target: globalAndroid.view.View, velocityX: number, velocityY: number): boolean;
			}
			export module SearchView {
				export class OnCloseListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.widget.SearchView.OnCloseListener>;
					/**
					 * Constructs a new instance of the androidx.appcompat.widget.SearchView() when extending the interface class.
					 */
					public constructor(implementation: {
						onClose(): boolean;
					});
					public constructor();
					public onClose(): boolean;
				}
				export class OnQueryTextListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.widget.SearchView.OnQueryTextListener>;
					/**
					 * Constructs a new instance of the androidx.appcompat.widget.SearchView() when extending the interface class.
					 */
					public constructor(implementation: {
						onQueryTextSubmit(string0: string): boolean;
						onQueryTextChange(string0: string): boolean;
					});
					public constructor();
					public onQueryTextChange(string0: string): boolean;
					public onQueryTextSubmit(string0: string): boolean;
				}
				export class OnSuggestionListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.widget.SearchView.OnSuggestionListener>;
					/**
					 * Constructs a new instance of the androidx.appcompat.widget.SearchView() when extending the interface class.
					 */
					public constructor(implementation: {
						onSuggestionSelect(int0: number): boolean;
						onSuggestionClick(int0: number): boolean;
					});
					public constructor();
					public onSuggestionClick(int0: number): boolean;
					public onSuggestionSelect(int0: number): boolean;
				}
				export class PreQAutoCompleteTextViewReflector extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.widget.SearchView.PreQAutoCompleteTextViewReflector>;
				}
				export class SavedState extends androidx.customview.view.AbsSavedState {
					public static class: java.lang.Class<androidx.appcompat.widget.SearchView.SavedState>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<androidx.appcompat.widget.SearchView.SavedState>;
					public constructor(source: globalAndroid.os.Parcel);
					public toString(): string;
					public writeToParcel(dest: globalAndroid.os.Parcel, flags: number): void;
					public describeContents(): number;
					public constructor(superState: globalAndroid.os.Parcelable);
					public constructor(source: globalAndroid.os.Parcel, loader: java.lang.ClassLoader);
				}
				export class SearchAutoComplete extends androidx.appcompat.widget.AppCompatAutoCompleteTextView {
					public static class: java.lang.Class<androidx.appcompat.widget.SearchView.SearchAutoComplete>;
					public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyle: number);
					public sendAccessibilityEvent(eventType: number): void;
					public replaceText(text: string): void;
					public onFilterComplete(count: number): void;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
					public setSupportBackgroundTintList(tint: globalAndroid.content.res.ColorStateList): void;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
					public onWindowFocusChanged(hasWindowFocus: boolean): void;
					public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
					public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
					public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
					public onFinishInflate(): void;
					public setSupportBackgroundTintMode(tintMode: globalAndroid.graphics.PorterDuff.Mode): void;
					public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
					public setThreshold(threshold: number): void;
					public onPreDraw(): boolean;
					public getSupportBackgroundTintList(): globalAndroid.content.res.ColorStateList;
					public getSupportBackgroundTintMode(): globalAndroid.graphics.PorterDuff.Mode;
					public enoughToFilter(): boolean;
					public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
					public performCompletion(): void;
					public onCreateInputConnection(outAttrs: globalAndroid.view.inputmethod.EditorInfo): globalAndroid.view.inputmethod.InputConnection;
					public onFocusChanged(focused: boolean, direction: number, previouslyFocusedRect: globalAndroid.graphics.Rect): void;
					public onKeyPreIme(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
					public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number, popupTheme: globalAndroid.content.res.Resources.Theme);
					public constructor(context: globalAndroid.content.Context);
					public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
					public onCreateInputConnection(editorInfo: globalAndroid.view.inputmethod.EditorInfo): globalAndroid.view.inputmethod.InputConnection;
				}
				export class UpdatableTouchDelegate extends globalAndroid.view.TouchDelegate {
					public static class: java.lang.Class<androidx.appcompat.widget.SearchView.UpdatableTouchDelegate>;
					public constructor(bounds: globalAndroid.graphics.Rect, delegateView: globalAndroid.view.View);
					public setBounds(desiredBounds: globalAndroid.graphics.Rect, actualBounds: globalAndroid.graphics.Rect): void;
					public constructor(targetBounds: globalAndroid.graphics.Rect, actualBounds: globalAndroid.graphics.Rect, delegateView: globalAndroid.view.View);
					public onTouchEvent(event: globalAndroid.view.MotionEvent): boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class ShareActionProvider extends androidx.core.view.ActionProvider {
				public static class: java.lang.Class<androidx.appcompat.widget.ShareActionProvider>;
				public static DEFAULT_SHARE_HISTORY_FILE_NAME: string;
				public setOnShareTargetSelectedListener(listener: androidx.appcompat.widget.ShareActionProvider.OnShareTargetSelectedListener): void;
				public onPrepareSubMenu(subMenu: globalAndroid.view.SubMenu): void;
				public constructor(context: globalAndroid.content.Context);
				public setShareHistoryFileName(shareHistoryFile: string): void;
				public onCreateActionView(): globalAndroid.view.View;
				public hasSubMenu(): boolean;
				public setShareIntent(shareIntent: globalAndroid.content.Intent): void;
				public onCreateActionView(forItem: globalAndroid.view.MenuItem): globalAndroid.view.View;
			}
			export module ShareActionProvider {
				export class OnShareTargetSelectedListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.widget.ShareActionProvider.OnShareTargetSelectedListener>;
					/**
					 * Constructs a new instance of the androidx.appcompat.widget.ShareActionProvider() when extending the interface class.
					 */
					public constructor(implementation: {
						onShareTargetSelected(shareActionProvider0: androidx.appcompat.widget.ShareActionProvider, intent1: globalAndroid.content.Intent): boolean;
					});
					public constructor();
					public onShareTargetSelected(shareActionProvider0: androidx.appcompat.widget.ShareActionProvider, intent1: globalAndroid.content.Intent): boolean;
				}
				export class ShareActivityChooserModelPolicy extends java.lang.Object implements androidx.appcompat.widget.ActivityChooserModel.OnChooseActivityListener {
					public static class: java.lang.Class<androidx.appcompat.widget.ShareActionProvider.ShareActivityChooserModelPolicy>;
					public onChooseActivity(host: androidx.appcompat.widget.ActivityChooserModel, intent: globalAndroid.content.Intent): boolean;
				}
				export class ShareMenuItemOnMenuItemClickListener extends java.lang.Object implements globalAndroid.view.MenuItem.OnMenuItemClickListener {
					public static class: java.lang.Class<androidx.appcompat.widget.ShareActionProvider.ShareMenuItemOnMenuItemClickListener>;
					public onMenuItemClick(item: globalAndroid.view.MenuItem): boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class SuggestionsAdapter extends androidx.cursoradapter.widget.ResourceCursorAdapter implements globalAndroid.view.View.OnClickListener {
				public static class: java.lang.Class<androidx.appcompat.widget.SuggestionsAdapter>;
				public setQueryRefinement(refineWhat: number): void;
				public bindView(view: globalAndroid.view.View, context: globalAndroid.content.Context, cursor: globalAndroid.database.Cursor): void;
				public getCursor(): globalAndroid.database.Cursor;
				public getFilter(): globalAndroid.widget.Filter;
				public constructor(context: globalAndroid.content.Context, c: globalAndroid.database.Cursor, autoRequery: boolean);
				public constructor();
				public getView(position: number, convertView: globalAndroid.view.View, parent: globalAndroid.view.ViewGroup): globalAndroid.view.View;
				/** @deprecated */
				public constructor(context: globalAndroid.content.Context, layout: number, c: globalAndroid.database.Cursor, autoRequery: boolean);
				public notifyDataSetInvalidated(): void;
				public bindView(view0: globalAndroid.view.View, context1: globalAndroid.content.Context, cursor2: globalAndroid.database.Cursor): void;
				public areAllItemsEnabled(): boolean;
				public constructor(context: globalAndroid.content.Context, layout: number, c: globalAndroid.database.Cursor, flags: number);
				/** @deprecated */
				public constructor(context: globalAndroid.content.Context, c: globalAndroid.database.Cursor);
				public changeCursor(cursor: globalAndroid.database.Cursor): void;
				public close(): void;
				public notifyDataSetChanged(): void;
				public static getColumnString(cursor: globalAndroid.database.Cursor, columnName: string): string;
				/** @deprecated */
				public constructor(context: globalAndroid.content.Context, layout: number, c: globalAndroid.database.Cursor);
				public newView(context: globalAndroid.content.Context, cursor: globalAndroid.database.Cursor, parent: globalAndroid.view.ViewGroup): globalAndroid.view.View;
				public onClick(v: globalAndroid.view.View): void;
				public constructor(context: globalAndroid.content.Context, searchView: androidx.appcompat.widget.SearchView, searchable: globalAndroid.app.SearchableInfo, outsideDrawablesCache: java.util.WeakHashMap<string,globalAndroid.graphics.drawable.Drawable.ConstantState>);
				public hasStableIds(): boolean;
				public getQueryRefinement(): number;
				public changeCursor(c: globalAndroid.database.Cursor): void;
				public convertToString(cursor: globalAndroid.database.Cursor): string;
				public runQueryOnBackgroundThread(constraint: string): globalAndroid.database.Cursor;
				public isEnabled(position: number): boolean;
				public constructor(context: globalAndroid.content.Context, c: globalAndroid.database.Cursor, flags: number);
				public getDropDownView(position: number, convertView: globalAndroid.view.View, parent: globalAndroid.view.ViewGroup): globalAndroid.view.View;
			}
			export module SuggestionsAdapter {
				export class ChildViewCache extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.widget.SuggestionsAdapter.ChildViewCache>;
					public mText1: globalAndroid.widget.TextView;
					public mText2: globalAndroid.widget.TextView;
					public mIcon1: globalAndroid.widget.ImageView;
					public mIcon2: globalAndroid.widget.ImageView;
					public mIconRefine: globalAndroid.widget.ImageView;
					public constructor(v: globalAndroid.view.View);
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class SwitchCompat extends globalAndroid.widget.CompoundButton {
				public static class: java.lang.Class<androidx.appcompat.widget.SwitchCompat>;
				public setThumbTintList(tint: globalAndroid.content.res.ColorStateList): void;
				public setSwitchTypeface(tf: globalAndroid.graphics.Typeface, style: number): void;
				public setSwitchMinWidth(pixels: number): void;
				public constructor(context: globalAndroid.content.Context);
				public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
				public getTextOff(): string;
				public sendAccessibilityEvent(eventType: number): void;
				public setChecked(checked: boolean): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
				public onPreDraw(): boolean;
				public setSwitchPadding(pixels: number): void;
				public getTrackTintList(): globalAndroid.content.res.ColorStateList;
				public setThumbTextPadding(pixels: number): void;
				public draw(c: globalAndroid.graphics.Canvas): void;
				public setShowText(showText: boolean): void;
				public setTrackResource(resId: number): void;
				public setTextOn(textOn: string): void;
				public getTextOn(): string;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public getThumbTintList(): globalAndroid.content.res.ColorStateList;
				public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public setThumbTintMode(tintMode: globalAndroid.graphics.PorterDuff.Mode): void;
				public getSplitTrack(): boolean;
				public setTrackTintList(tint: globalAndroid.content.res.ColorStateList): void;
				public onPopulateAccessibilityEvent(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public getTrackTintMode(): globalAndroid.graphics.PorterDuff.Mode;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
				public onLayout(changed: boolean, left: number, top: number, right: number, bottom: number): void;
				public verifyDrawable(who: globalAndroid.graphics.drawable.Drawable): boolean;
				public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public setSplitTrack(splitTrack: boolean): void;
				public onDraw(canvas: globalAndroid.graphics.Canvas): void;
				public drawableStateChanged(): void;
				public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
				public isChecked(): boolean;
				public jumpDrawablesToCurrentState(): void;
				public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public getThumbTextPadding(): number;
				public setTrackDrawable(track: globalAndroid.graphics.drawable.Drawable): void;
				public setSwitchTypeface(typeface: globalAndroid.graphics.Typeface): void;
				public toggle(): void;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
				public onCreateDrawableState(extraSpace: number): native.Array<number>;
				public getSwitchMinWidth(): number;
				public getThumbTintMode(): globalAndroid.graphics.PorterDuff.Mode;
				public getSwitchPadding(): number;
				public getTrackDrawable(): globalAndroid.graphics.drawable.Drawable;
				public getCompoundPaddingLeft(): number;
				public draw(canvas: globalAndroid.graphics.Canvas): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public getThumbDrawable(): globalAndroid.graphics.drawable.Drawable;
				public onInitializeAccessibilityEvent(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public drawableHotspotChanged(x: number, y: number): void;
				public setThumbDrawable(thumb: globalAndroid.graphics.drawable.Drawable): void;
				public setTrackTintMode(tintMode: globalAndroid.graphics.PorterDuff.Mode): void;
				public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public onInitializeAccessibilityNodeInfo(info: globalAndroid.view.accessibility.AccessibilityNodeInfo): void;
				public onTouchEvent(ev: globalAndroid.view.MotionEvent): boolean;
				public getShowText(): boolean;
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public setSwitchTextAppearance(context: globalAndroid.content.Context, resid: number): void;
				public onTouchEvent(event: globalAndroid.view.MotionEvent): boolean;
				public setTextOff(textOff: string): void;
				public setCustomSelectionActionModeCallback(actionModeCallback: globalAndroid.view.ActionMode.Callback): void;
				public setThumbResource(resId: number): void;
				public getCompoundPaddingRight(): number;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class ThemeUtils extends java.lang.Object {
				public static class: java.lang.Class<androidx.appcompat.widget.ThemeUtils>;
				public static createDisabledStateList(textColor: number, disabledTextColor: number): globalAndroid.content.res.ColorStateList;
				public static getThemeAttrColorStateList(context: globalAndroid.content.Context, attr: number): globalAndroid.content.res.ColorStateList;
				public static checkAppCompatTheme(view: globalAndroid.view.View, context: globalAndroid.content.Context): void;
				public static getDisabledThemeAttrColor(context: globalAndroid.content.Context, attr: number): number;
				public static getThemeAttrColor(context: globalAndroid.content.Context, attr: number): number;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class ThemedSpinnerAdapter extends java.lang.Object implements globalAndroid.widget.SpinnerAdapter {
				public static class: java.lang.Class<androidx.appcompat.widget.ThemedSpinnerAdapter>;
				/**
				 * Constructs a new instance of the androidx.appcompat.widget.ThemedSpinnerAdapter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					setDropDownViewTheme(theme0: globalAndroid.content.res.Resources.Theme): void;
					getDropDownViewTheme(): globalAndroid.content.res.Resources.Theme;
					getDropDownView(int0: number, view1: globalAndroid.view.View, viewGroup2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
					registerDataSetObserver(dataSetObserver0: globalAndroid.database.DataSetObserver): void;
					unregisterDataSetObserver(dataSetObserver0: globalAndroid.database.DataSetObserver): void;
					getCount(): number;
					getItem(int0: number): any;
					getItemId(int0: number): number;
					hasStableIds(): boolean;
					getView(int0: number, view1: globalAndroid.view.View, viewGroup2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
					getItemViewType(int0: number): number;
					getViewTypeCount(): number;
					isEmpty(): boolean;
					getAutofillOptions(): native.Array<string>;
				});
				public constructor();
				public static NO_SELECTION: number;
				public static IGNORE_ITEM_VIEW_TYPE: number;
				public getView(int0: number, view1: globalAndroid.view.View, viewGroup2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
				public getItem(int0: number): any;
				public getViewTypeCount(): number;
				public getAutofillOptions(): native.Array<string>;
				public getCount(): number;
				public unregisterDataSetObserver(dataSetObserver0: globalAndroid.database.DataSetObserver): void;
				public setDropDownViewTheme(theme0: globalAndroid.content.res.Resources.Theme): void;
				public hasStableIds(): boolean;
				public getItemViewType(int0: number): number;
				public getDropDownViewTheme(): globalAndroid.content.res.Resources.Theme;
				public getDropDownView(int0: number, view1: globalAndroid.view.View, viewGroup2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
				public getItemId(int0: number): number;
				public registerDataSetObserver(dataSetObserver0: globalAndroid.database.DataSetObserver): void;
				public isEmpty(): boolean;
			}
			export module ThemedSpinnerAdapter {
				export class Helper extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.widget.ThemedSpinnerAdapter.Helper>;
					public setDropDownViewTheme(theme: globalAndroid.content.res.Resources.Theme): void;
					public constructor(context: globalAndroid.content.Context);
					public getDropDownViewInflater(): globalAndroid.view.LayoutInflater;
					public getDropDownViewTheme(): globalAndroid.content.res.Resources.Theme;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class TintTypedArray extends java.lang.Object {
				public static class: java.lang.Class<androidx.appcompat.widget.TintTypedArray>;
				public getColorStateList(index: number): globalAndroid.content.res.ColorStateList;
				public recycle(): void;
				public getDimensionPixelOffset(index: number, defValue: number): number;
				public getValue(index: number, outValue: globalAndroid.util.TypedValue): boolean;
				public static obtainStyledAttributes(context: globalAndroid.content.Context, resid: number, attrs: native.Array<number>): androidx.appcompat.widget.TintTypedArray;
				public getTextArray(index: number): native.Array<string>;
				public getType(index: number): number;
				public getPositionDescription(): string;
				public getDrawable(index: number): globalAndroid.graphics.drawable.Drawable;
				public getDrawableIfKnown(index: number): globalAndroid.graphics.drawable.Drawable;
				public static obtainStyledAttributes(context: globalAndroid.content.Context, set: globalAndroid.util.AttributeSet, attrs: native.Array<number>, defStyleAttr: number, defStyleRes: number): androidx.appcompat.widget.TintTypedArray;
				public getNonResourceString(index: number): string;
				public getDimension(index: number, defValue: number): number;
				public peekValue(index: number): globalAndroid.util.TypedValue;
				public getIndexCount(): number;
				public getFont(index: number, style: number, fontCallback: androidx.core.content.res.ResourcesCompat.FontCallback): globalAndroid.graphics.Typeface;
				public getIndex(at: number): number;
				public getResources(): globalAndroid.content.res.Resources;
				public getWrappedTypeArray(): globalAndroid.content.res.TypedArray;
				public length(): number;
				public getBoolean(index: number, defValue: boolean): boolean;
				public getChangingConfigurations(): number;
				public hasValue(index: number): boolean;
				public getString(index: number): string;
				public getInteger(index: number, defValue: number): number;
				public getLayoutDimension(index: number, defValue: number): number;
				public getFloat(index: number, defValue: number): number;
				public getDimensionPixelSize(index: number, defValue: number): number;
				public getColor(index: number, defValue: number): number;
				public getFraction(index: number, base: number, pbase: number, defValue: number): number;
				public getText(index: number): string;
				public getLayoutDimension(index: number, name: string): number;
				public getInt(index: number, defValue: number): number;
				public getResourceId(index: number, defValue: number): number;
				public static obtainStyledAttributes(context: globalAndroid.content.Context, set: globalAndroid.util.AttributeSet, attrs: native.Array<number>): androidx.appcompat.widget.TintTypedArray;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class Toolbar extends globalAndroid.view.ViewGroup {
				public static class: java.lang.Class<androidx.appcompat.widget.Toolbar>;
				/** @deprecated */
				public invalidateChild(child: globalAndroid.view.View, dirty: globalAndroid.graphics.Rect): void;
				public focusSearch(direction: number): globalAndroid.view.View;
				public childDrawableStateChanged(child: globalAndroid.view.View): void;
				public onStopNestedScroll(child: globalAndroid.view.View): void;
				public setContentInsetStartWithNavigation(insetStartWithNavigation: number): void;
				public onHoverEvent(ev: globalAndroid.view.MotionEvent): boolean;
				public setSubtitleTextColor(color: globalAndroid.content.res.ColorStateList): void;
				public isLayoutRequested(): boolean;
				public onNestedPrePerformAccessibilityAction(target: globalAndroid.view.View, action: number, bundle2: globalAndroid.os.Bundle): boolean;
				public getTextDirection(): number;
				public setLogoDescription(description: string): void;
				public getNavigationContentDescription(): string;
				public setTitleTextAppearance(context: globalAndroid.content.Context, resId: number): void;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
				public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public onLayout(changed: boolean, l: number, t: number, r: number, b: number): void;
				public setMenuCallbacks(pcb: androidx.appcompat.view.menu.MenuPresenter.Callback, mcb: androidx.appcompat.view.menu.MenuBuilder.Callback): void;
				/** @deprecated */
				public invalidateChildInParent(location: native.Array<number>, dirty: globalAndroid.graphics.Rect): globalAndroid.view.ViewParent;
				public getParentForAccessibility(): globalAndroid.view.ViewParent;
				public getCollapseContentDescription(): string;
				public onNestedFling(target: globalAndroid.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
				public generateLayoutParams(attrs: globalAndroid.util.AttributeSet): globalAndroid.view.ViewGroup.LayoutParams;
				public getTitleMarginStart(): number;
				public getMenu(): globalAndroid.view.Menu;
				public keyboardNavigationClusterSearch(currentCluster: globalAndroid.view.View, direction: number): globalAndroid.view.View;
				public hideOverflowMenu(): boolean;
				public generateLayoutParams(attrs: globalAndroid.util.AttributeSet): androidx.appcompat.widget.Toolbar.LayoutParams;
				public generateLayoutParams(p: globalAndroid.view.ViewGroup.LayoutParams): androidx.appcompat.widget.Toolbar.LayoutParams;
				public isTextDirectionResolved(): boolean;
				public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
				public setTitleMarginTop(margin: number): void;
				public getSubtitle(): string;
				public showContextMenuForChild(originalView: globalAndroid.view.View): boolean;
				public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public recomputeViewAttributes(child: globalAndroid.view.View): void;
				public getTitleMarginTop(): number;
				public isLayoutDirectionResolved(): boolean;
				public setMenu(menu: androidx.appcompat.view.menu.MenuBuilder, outerPresenter: androidx.appcompat.widget.ActionMenuPresenter): void;
				public getContentInsetRight(): number;
				public getCurrentContentInsetEnd(): number;
				public onRtlPropertiesChanged(layoutDirection: number): void;
				public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onLayout(boolean0: boolean, int1: number, int2: number, int3: number, int4: number): void;
				public setTitleMarginEnd(margin: number): void;
				public setTitleMargin(start: number, top: number, end: number, bottom: number): void;
				public setCollapseContentDescription(resId: number): void;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
				public getTitleMarginEnd(): number;
				public setOverflowIcon(icon: globalAndroid.graphics.drawable.Drawable): void;
				public setContentInsetsRelative(contentInsetStart: number, contentInsetEnd: number): void;
				public updateViewLayout(view: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public onNestedScroll(target: globalAndroid.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
				public setCollapseIcon(icon: globalAndroid.graphics.drawable.Drawable): void;
				public focusSearch(focused: globalAndroid.view.View, direction: number): globalAndroid.view.View;
				public setNavigationOnClickListener(listener: globalAndroid.view.View.OnClickListener): void;
				public setLogo(resId: number): void;
				/** @deprecated */
				public requestFitSystemWindows(): void;
				public getCurrentContentInsetStart(): number;
				public showContextMenuForChild(originalView: globalAndroid.view.View, x: number, y: number): boolean;
				public dismissPopupMenus(): void;
				public bringChildToFront(child: globalAndroid.view.View): void;
				public clearChildFocus(child: globalAndroid.view.View): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public setTitleTextColor(color: number): void;
				public generateDefaultLayoutParams(): androidx.appcompat.widget.Toolbar.LayoutParams;
				public setPopupTheme(resId: number): void;
				public setTitle(resId: number): void;
				public isTitleTruncated(): boolean;
				public setNavigationContentDescription(description: string): void;
				public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public canShowOverflowMenu(): boolean;
				public hasExpandedActionView(): boolean;
				public getTitle(): string;
				public setTitleTextColor(color: globalAndroid.content.res.ColorStateList): void;
				public isOverflowMenuShowing(): boolean;
				public setSubtitle(subtitle: string): void;
				public addView(child: globalAndroid.view.View, index: number, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public onHoverEvent(event: globalAndroid.view.MotionEvent): boolean;
				public isOverflowMenuShowPending(): boolean;
				public getContentInsetStart(): number;
				public onTouchEvent(event: globalAndroid.view.MotionEvent): boolean;
				public getParent(): globalAndroid.view.ViewParent;
				public getWrapper(): androidx.appcompat.widget.DecorToolbar;
				public constructor(context: globalAndroid.content.Context);
				public showOverflowMenu(): boolean;
				public getContentInsetLeft(): number;
				public checkLayoutParams(p: globalAndroid.view.ViewGroup.LayoutParams): boolean;
				public onNestedScrollAccepted(child: globalAndroid.view.View, target: globalAndroid.view.View, axes: number): void;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
				public getTitleMarginBottom(): number;
				public setCollapseContentDescription(description: string): void;
				public getOverflowIcon(): globalAndroid.graphics.drawable.Drawable;
				public setSubtitleTextAppearance(context: globalAndroid.content.Context, resId: number): void;
				public setLogoDescription(resId: number): void;
				public sendAccessibilityEvent(eventType: number): void;
				public setTitleMarginBottom(margin: number): void;
				public setCollapsible(collapsible: boolean): void;
				public addView(child: globalAndroid.view.View, index: number): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
				public requestFitSystemWindows(): void;
				public onRestoreInstanceState(state: globalAndroid.os.Parcelable): void;
				public setSubtitleTextColor(color: number): void;
				public getContentInsetStartWithNavigation(): number;
				public getLogo(): globalAndroid.graphics.drawable.Drawable;
				public getContentInsetEndWithActions(): number;
				public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback, type: number): globalAndroid.view.ActionMode;
				public collapseActionView(): void;
				public getTextAlignment(): number;
				public generateLayoutParams(p: globalAndroid.view.ViewGroup.LayoutParams): globalAndroid.view.ViewGroup.LayoutParams;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
				public getContentInsetEnd(): number;
				public setContentInsetEndWithActions(insetEndWithActions: number): void;
				public addView(child: globalAndroid.view.View, width: number, height: number): void;
				public childHasTransientStateChanged(child: globalAndroid.view.View, childHasTransientState: boolean): void;
				public setTitleMarginStart(margin: number): void;
				public onDetachedFromWindow(): void;
				public focusableViewAvailable(v: globalAndroid.view.View): void;
				public setLogo(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public generateDefaultLayoutParams(): globalAndroid.view.ViewGroup.LayoutParams;
				public setNavigationContentDescription(resId: number): void;
				public getCurrentContentInsetRight(): number;
				public getCollapseIcon(): globalAndroid.graphics.drawable.Drawable;
				public addView(child: globalAndroid.view.View): void;
				public requestSendAccessibilityEvent(child: globalAndroid.view.View, event: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
				public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
				public isTextAlignmentResolved(): boolean;
				public getLayoutDirection(): number;
				public addView(child: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public canResolveTextDirection(): boolean;
				public getNavigationIcon(): globalAndroid.graphics.drawable.Drawable;
				public canResolveTextAlignment(): boolean;
				public notifySubtreeAccessibilityStateChanged(child: globalAndroid.view.View, source: globalAndroid.view.View, changeType: number): void;
				public requestLayout(): void;
				public setNavigationIcon(resId: number): void;
				public requestTransparentRegion(child: globalAndroid.view.View): void;
				public onStartNestedScroll(child: globalAndroid.view.View, target: globalAndroid.view.View, nestedScrollAxes: number): boolean;
				public setContentInsetsAbsolute(contentInsetLeft: number, contentInsetRight: number): void;
				public setCollapseIcon(resId: number): void;
				public setTitle(title: string): void;
				public inflateMenu(resId: number): void;
				public getLogoDescription(): string;
				public setNavigationIcon(icon: globalAndroid.graphics.drawable.Drawable): void;
				public onNestedPreScroll(target: globalAndroid.view.View, dx: number, dy: number, consumed: native.Array<number>): void;
				public onDescendantInvalidated(child: globalAndroid.view.View, target: globalAndroid.view.View): void;
				public removeView(view: globalAndroid.view.View): void;
				public onSaveInstanceState(): globalAndroid.os.Parcelable;
				public requestChildRectangleOnScreen(child: globalAndroid.view.View, rectangle: globalAndroid.graphics.Rect, immediate: boolean): boolean;
				public setSubtitle(resId: number): void;
				public getChildVisibleRect(child: globalAndroid.view.View, r: globalAndroid.graphics.Rect, offset: globalAndroid.graphics.Point): boolean;
				public setOnMenuItemClickListener(listener: androidx.appcompat.widget.Toolbar.OnMenuItemClickListener): void;
				public requestChildFocus(child: globalAndroid.view.View, focused: globalAndroid.view.View): void;
				public createContextMenu(menu: globalAndroid.view.ContextMenu): void;
				public onTouchEvent(ev: globalAndroid.view.MotionEvent): boolean;
				public canResolveLayoutDirection(): boolean;
				public getCurrentContentInsetLeft(): number;
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public onNestedPreFling(target: globalAndroid.view.View, velocityX: number, velocityY: number): boolean;
				public getPopupTheme(): number;
			}
			export module Toolbar {
				export class ExpandedActionViewMenuPresenter extends java.lang.Object implements androidx.appcompat.view.menu.MenuPresenter {
					public static class: java.lang.Class<androidx.appcompat.widget.Toolbar.ExpandedActionViewMenuPresenter>;
					public getMenuView(root: globalAndroid.view.ViewGroup): androidx.appcompat.view.menu.MenuView;
					public updateMenuView(cleared: boolean): void;
					public onRestoreInstanceState(state: globalAndroid.os.Parcelable): void;
					public expandItemActionView(menu: androidx.appcompat.view.menu.MenuBuilder, item: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public onCloseMenu(menu: androidx.appcompat.view.menu.MenuBuilder, allMenusAreClosing: boolean): void;
					public collapseItemActionView(menu: androidx.appcompat.view.menu.MenuBuilder, item: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public getId(): number;
					public onSaveInstanceState(): globalAndroid.os.Parcelable;
					public onSubMenuSelected(subMenu: androidx.appcompat.view.menu.SubMenuBuilder): boolean;
					public initForMenu(context: globalAndroid.content.Context, menu: androidx.appcompat.view.menu.MenuBuilder): void;
					public setCallback(cb: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
					public flagActionItems(): boolean;
				}
				export class LayoutParams extends androidx.appcompat.app.ActionBar.LayoutParams {
					public static class: java.lang.Class<androidx.appcompat.widget.Toolbar.LayoutParams>;
					public constructor(source: globalAndroid.view.ViewGroup.LayoutParams);
					public constructor(c: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
					public constructor(width: number, height: number, gravity: number);
					public constructor(gravity: number);
					public constructor(source: androidx.appcompat.app.ActionBar.LayoutParams);
					public constructor(source: androidx.appcompat.widget.Toolbar.LayoutParams);
					public constructor(width: number, height: number);
					public constructor(source: globalAndroid.view.ViewGroup.MarginLayoutParams);
				}
				export class OnMenuItemClickListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.widget.Toolbar.OnMenuItemClickListener>;
					/**
					 * Constructs a new instance of the androidx.appcompat.widget.Toolbar() when extending the interface class.
					 */
					public constructor(implementation: {
						onMenuItemClick(menuItem0: globalAndroid.view.MenuItem): boolean;
					});
					public constructor();
					public onMenuItemClick(menuItem0: globalAndroid.view.MenuItem): boolean;
				}
				export class SavedState extends androidx.customview.view.AbsSavedState {
					public static class: java.lang.Class<androidx.appcompat.widget.Toolbar.SavedState>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<androidx.appcompat.widget.Toolbar.SavedState>;
					public constructor(source: globalAndroid.os.Parcel);
					public writeToParcel(dest: globalAndroid.os.Parcel, flags: number): void;
					public describeContents(): number;
					public constructor(superState: globalAndroid.os.Parcelable);
					public writeToParcel(out: globalAndroid.os.Parcel, flags: number): void;
					public constructor(source: globalAndroid.os.Parcel, loader: java.lang.ClassLoader);
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class ToolbarWidgetWrapper extends java.lang.Object implements androidx.appcompat.widget.DecorToolbar {
				public static class: java.lang.Class<androidx.appcompat.widget.ToolbarWidgetWrapper>;
				public setHomeButtonEnabled(enable: boolean): void;
				public setMenuCallbacks(actionMenuPresenterCallback: androidx.appcompat.view.menu.MenuPresenter.Callback, menuBuilderCallback: androidx.appcompat.view.menu.MenuBuilder.Callback): void;
				public animateToVisibility(visibility: number): void;
				public getHeight(): number;
				public setDropdownSelectedPosition(position: number): void;
				public hasLogo(): boolean;
				public showOverflowMenu(): boolean;
				public setDefaultNavigationContentDescription(defaultNavigationContentDescription: number): void;
				public setupAnimatorToVisibility(visibility: number, duration: number): androidx.core.view.ViewPropertyAnimatorCompat;
				public setIcon(resId: number): void;
				public setVisibility(visible: number): void;
				public restoreHierarchyState(toolbarStates: globalAndroid.util.SparseArray<globalAndroid.os.Parcelable>): void;
				public setCollapsible(collapsible: boolean): void;
				public setIcon(d: globalAndroid.graphics.drawable.Drawable): void;
				public getDropdownSelectedPosition(): number;
				public collapseActionView(): void;
				public getContext(): globalAndroid.content.Context;
				public getMenu(): globalAndroid.view.Menu;
				public hideOverflowMenu(): boolean;
				public initIndeterminateProgress(): void;
				public hasEmbeddedTabs(): boolean;
				public getVisibility(): number;
				public getSubtitle(): string;
				public setMenuPrepared(): void;
				public setNavigationContentDescription(resId: number): void;
				public setEmbeddedTabView(tabView: androidx.appcompat.widget.ScrollingTabContainerView): void;
				public initProgress(): void;
				public setDisplayOptions(newOpts: number): void;
				public saveHierarchyState(toolbarStates: globalAndroid.util.SparseArray<globalAndroid.os.Parcelable>): void;
				public getNavigationMode(): number;
				public getCustomView(): globalAndroid.view.View;
				public setDropdownParams(adapter: globalAndroid.widget.SpinnerAdapter, listener: globalAndroid.widget.AdapterView.OnItemSelectedListener): void;
				public getDisplayOptions(): number;
				public setNavigationIcon(resId: number): void;
				public setLogo(resId: number): void;
				public setTitle(title: string): void;
				public dismissPopupMenus(): void;
				public setNavigationIcon(icon: globalAndroid.graphics.drawable.Drawable): void;
				public setMenu(menu: globalAndroid.view.Menu, cb: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
				public setCustomView(view: globalAndroid.view.View): void;
				public isTitleTruncated(): boolean;
				public setLogo(d: globalAndroid.graphics.drawable.Drawable): void;
				public getDropdownItemCount(): number;
				public setNavigationContentDescription(description: string): void;
				public canShowOverflowMenu(): boolean;
				public constructor(toolbar: androidx.appcompat.widget.Toolbar, style: boolean);
				public hasExpandedActionView(): boolean;
				public getTitle(): string;
				public hasIcon(): boolean;
				public setDefaultNavigationIcon(defaultNavigationIcon: globalAndroid.graphics.drawable.Drawable): void;
				public setSubtitle(subtitle: string): void;
				public isOverflowMenuShowing(): boolean;
				public constructor(toolbar: androidx.appcompat.widget.Toolbar, style: boolean, defaultNavigationContentDescription: number, defaultNavigationIcon: number);
				public setBackgroundDrawable(d: globalAndroid.graphics.drawable.Drawable): void;
				public isOverflowMenuShowPending(): boolean;
				public setNavigationMode(mode: number): void;
				public getViewGroup(): globalAndroid.view.ViewGroup;
				public setWindowTitle(title: string): void;
				public setWindowCallback(cb: globalAndroid.view.Window.Callback): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class TooltipCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.appcompat.widget.TooltipCompat>;
				public static setTooltipText(view: globalAndroid.view.View, tooltipText: string): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class TooltipCompatHandler extends java.lang.Object implements globalAndroid.view.View.OnLongClickListener, globalAndroid.view.View.OnHoverListener, globalAndroid.view.View.OnAttachStateChangeListener {
				public static class: java.lang.Class<androidx.appcompat.widget.TooltipCompatHandler>;
				public onHover(v: globalAndroid.view.View, event: globalAndroid.view.MotionEvent): boolean;
				public onViewDetachedFromWindow(v: globalAndroid.view.View): void;
				public onLongClick(v: globalAndroid.view.View): boolean;
				public static setTooltipText(view: globalAndroid.view.View, tooltipText: string): void;
				public onViewAttachedToWindow(v: globalAndroid.view.View): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class TooltipPopup extends java.lang.Object {
				public static class: java.lang.Class<androidx.appcompat.widget.TooltipPopup>;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class ViewStubCompat extends globalAndroid.view.View {
				public static class: java.lang.Class<androidx.appcompat.widget.ViewStubCompat>;
				public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
				public constructor(context: globalAndroid.content.Context);
				public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
				public setOnInflateListener(inflateListener: androidx.appcompat.widget.ViewStubCompat.OnInflateListener): void;
				public static inflate(context: globalAndroid.content.Context, resource: number, root: globalAndroid.view.ViewGroup): globalAndroid.view.View;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
				public dispatchDraw(canvas: globalAndroid.graphics.Canvas): void;
				public sendAccessibilityEvent(eventType: number): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyle: number);
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
				public getLayoutInflater(): globalAndroid.view.LayoutInflater;
				public draw(canvas: globalAndroid.graphics.Canvas): void;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public setLayoutInflater(inflater: globalAndroid.view.LayoutInflater): void;
				public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public getInflatedId(): number;
				public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
				public setVisibility(visibility: number): void;
				public setInflatedId(inflatedId: number): void;
				public getLayoutResource(): number;
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public setLayoutResource(layoutResource: number): void;
				public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public inflate(): globalAndroid.view.View;
			}
			export module ViewStubCompat {
				export class OnInflateListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.widget.ViewStubCompat.OnInflateListener>;
					/**
					 * Constructs a new instance of the androidx.appcompat.widget.ViewStubCompat() when extending the interface class.
					 */
					public constructor(implementation: {
						onInflate(viewStubCompat0: androidx.appcompat.widget.ViewStubCompat, view1: globalAndroid.view.View): void;
					});
					public constructor();
					public onInflate(viewStubCompat0: androidx.appcompat.widget.ViewStubCompat, view1: globalAndroid.view.View): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class ViewUtils extends java.lang.Object {
				public static class: java.lang.Class<androidx.appcompat.widget.ViewUtils>;
				public static makeOptionalFitsSystemWindows(view: globalAndroid.view.View): void;
				public static computeFitSystemWindows(view: globalAndroid.view.View, inoutInsets: globalAndroid.graphics.Rect, outLocalInsets: globalAndroid.graphics.Rect): void;
				public static isLayoutRtl(view: globalAndroid.view.View): boolean;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class WithHint extends java.lang.Object {
				public static class: java.lang.Class<androidx.appcompat.widget.WithHint>;
				/**
				 * Constructs a new instance of the androidx.appcompat.widget.WithHint interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getHint(): string;
				});
				public constructor();
				public getHint(): string;
			}
		}
	}
}

//Generics information:

