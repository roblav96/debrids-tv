declare module androidx {
	export module leanback {
		export module animation {
			export class LogAccelerateInterpolator extends java.lang.Object implements globalAndroid.animation.TimeInterpolator {
				public static class: java.lang.Class<androidx.leanback.animation.LogAccelerateInterpolator>;
				public getInterpolation(t: number): number;
				public constructor(base: number, drift: number);
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module animation {
			export class LogDecelerateInterpolator extends java.lang.Object implements globalAndroid.animation.TimeInterpolator {
				public static class: java.lang.Class<androidx.leanback.animation.LogDecelerateInterpolator>;
				public getInterpolation(t: number): number;
				public constructor(base: number, drift: number);
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module app {
			export class BackgroundFragment extends globalAndroid.app.Fragment {
				public static class: java.lang.Class<androidx.leanback.app.BackgroundFragment>;
				/** @deprecated */
				public onStart(): void;
				public onResume(): void;
				/** @deprecated */
				public onResume(): void;
				/** @deprecated */
				public onTrimMemory(level: number): void;
				public constructor();
				public onTrimMemory(level: number): void;
				public onCreateContextMenu(menu: globalAndroid.view.ContextMenu, v: globalAndroid.view.View, menuInfo: globalAndroid.view.ContextMenu.ContextMenuInfo): void;
				/** @deprecated */
				public constructor();
				public onStart(): void;
				/** @deprecated */
				public onDestroy(): void;
				/** @deprecated */
				public onStop(): void;
				public onStop(): void;
				public onDestroy(): void;
				/** @deprecated */
				public onCreateContextMenu(menu: globalAndroid.view.ContextMenu, v: globalAndroid.view.View, menuInfo: globalAndroid.view.ContextMenu.ContextMenuInfo): void;
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module app {
			export class BackgroundManager extends java.lang.Object {
				public static class: java.lang.Class<androidx.leanback.app.BackgroundManager>;
				public attachToView(sceneRoot: globalAndroid.view.View): void;
				public setAutoReleaseOnStop(autoReleaseOnStop: boolean): void;
				public getColor(): number;
				public release(): void;
				public isAutoReleaseOnStop(): boolean;
				public attach(window: globalAndroid.view.Window): void;
				/** @deprecated */
				public getDefaultDimLayer(): globalAndroid.graphics.drawable.Drawable;
				public setThemeDrawableResourceId(resourceId: number): void;
				public setDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public setBitmap(bitmap: globalAndroid.graphics.Bitmap): void;
				public static getInstance(activity: globalAndroid.app.Activity): androidx.leanback.app.BackgroundManager;
				public clearDrawable(): void;
				public isAttached(): boolean;
				/** @deprecated */
				public getDimLayer(): globalAndroid.graphics.drawable.Drawable;
				/** @deprecated */
				public setDimLayer(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public setColor(color: number): void;
				public getDrawable(): globalAndroid.graphics.drawable.Drawable;
			}
			export module BackgroundManager {
				export class BackgroundContinuityService extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.app.BackgroundManager.BackgroundContinuityService>;
					public setColor(color: number): void;
					public getColor(): number;
					public unref(): void;
					public setDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
					public static getInstance(): androidx.leanback.app.BackgroundManager.BackgroundContinuityService;
					public getThemeDrawable(context: globalAndroid.content.Context, themeDrawableId: number): globalAndroid.graphics.drawable.Drawable;
					public getDrawable(): globalAndroid.graphics.drawable.Drawable;
				}
				export class BitmapDrawable extends globalAndroid.graphics.drawable.Drawable {
					public static class: java.lang.Class<androidx.leanback.app.BackgroundManager.BitmapDrawable>;
					public setColorFilter(colorFilter0: globalAndroid.graphics.ColorFilter): void;
					public draw(canvas: globalAndroid.graphics.Canvas): void;
					public getConstantState(): globalAndroid.graphics.drawable.Drawable.ConstantState;
					public getConstantState(): androidx.leanback.app.BackgroundManager.BitmapDrawable.ConstantState;
					/** @deprecated */
					public setColorFilter(color: number, mode: globalAndroid.graphics.PorterDuff.Mode): void;
					public mutate(): globalAndroid.graphics.drawable.Drawable;
					/** @deprecated */
					public getOpacity(): number;
					public getColorFilter(): globalAndroid.graphics.ColorFilter;
					public setAlpha(alpha: number): void;
					public setColorFilter(cf: globalAndroid.graphics.ColorFilter): void;
					public draw(canvas0: globalAndroid.graphics.Canvas): void;
					public getOpacity(): number;
					public setAlpha(int0: number): void;
				}
				export module BitmapDrawable {
					export class ConstantState extends globalAndroid.graphics.drawable.Drawable.ConstantState {
						public static class: java.lang.Class<androidx.leanback.app.BackgroundManager.BitmapDrawable.ConstantState>;
						public newDrawable(res: globalAndroid.content.res.Resources, theme: globalAndroid.content.res.Resources.Theme): globalAndroid.graphics.drawable.Drawable;
						public getChangingConfigurations(): number;
						public newDrawable(): globalAndroid.graphics.drawable.Drawable;
						public newDrawable(res: globalAndroid.content.res.Resources): globalAndroid.graphics.drawable.Drawable;
					}
				}
				export class ChangeBackgroundRunnable extends java.lang.Object implements java.lang.Runnable {
					public static class: java.lang.Class<androidx.leanback.app.BackgroundManager.ChangeBackgroundRunnable>;
					public run(): void;
				}
				export class DrawableWrapper extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.app.BackgroundManager.DrawableWrapper>;
					public constructor(drawable: globalAndroid.graphics.drawable.Drawable);
					public setColor(color: number): void;
					public constructor(wrapper: androidx.leanback.app.BackgroundManager.DrawableWrapper, drawable: globalAndroid.graphics.drawable.Drawable);
					public getDrawable(): globalAndroid.graphics.drawable.Drawable;
				}
				export class EmptyDrawable extends androidx.leanback.app.BackgroundManager.BitmapDrawable {
					public static class: java.lang.Class<androidx.leanback.app.BackgroundManager.EmptyDrawable>;
				}
				export class TranslucentLayerDrawable extends globalAndroid.graphics.drawable.LayerDrawable {
					public static class: java.lang.Class<androidx.leanback.app.BackgroundManager.TranslucentLayerDrawable>;
					public getAlpha(): number;
					public setDrawableByLayerId(id: number, drawable: globalAndroid.graphics.drawable.Drawable): boolean;
					public findWrapperIndexById(id: number): number;
					public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
					public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
					public updateDrawable(id: number, drawable: globalAndroid.graphics.drawable.Drawable): androidx.leanback.app.BackgroundManager.DrawableWrapper;
					public clearDrawable(id: number, context: globalAndroid.content.Context): void;
					public draw(canvas: globalAndroid.graphics.Canvas): void;
					public invalidateDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
					public setAlpha(alpha: number): void;
					public mutate(): globalAndroid.graphics.drawable.Drawable;
					public getOpacity(): number;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module app {
			export class BaseFragment extends androidx.leanback.app.BrandedFragment {
				public static class: java.lang.Class<androidx.leanback.app.BaseFragment>;
				public onEntranceTransitionPrepare(): void;
				/** @deprecated */
				public onTrimMemory(level: number): void;
				public prepareEntranceTransition(): void;
				public onCreate(savedInstanceState: globalAndroid.os.Bundle): void;
				public createEntranceTransition(): any;
				public onEntranceTransitionStart(): void;
				public onEntranceTransitionEnd(): void;
				public onTrimMemory(level: number): void;
				public onCreateContextMenu(menu: globalAndroid.view.ContextMenu, v: globalAndroid.view.View, menuInfo: globalAndroid.view.ContextMenu.ContextMenuInfo): void;
				public onViewCreated(view: globalAndroid.view.View, savedInstanceState: globalAndroid.os.Bundle): void;
				public startEntranceTransition(): void;
				public getProgressBarManager(): androidx.leanback.app.ProgressBarManager;
				/** @deprecated */
				public onCreate(savedInstanceState: globalAndroid.os.Bundle): void;
				/** @deprecated */
				public onCreateContextMenu(menu: globalAndroid.view.ContextMenu, v: globalAndroid.view.View, menuInfo: globalAndroid.view.ContextMenu.ContextMenuInfo): void;
				public runEntranceTransition(entranceTransition: any): void;
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module app {
			export abstract class BaseRowFragment extends globalAndroid.app.Fragment {
				public static class: java.lang.Class<androidx.leanback.app.BaseRowFragment>;
				/** @deprecated */
				public onViewCreated(view: globalAndroid.view.View, savedInstanceState: globalAndroid.os.Bundle): void;
				public onTransitionStart(): void;
				public getVerticalGridView(): androidx.leanback.widget.VerticalGridView;
				public setSelectedPosition(position: number, smooth: boolean): void;
				public onTransitionPrepare(): boolean;
				public setAdapter(rowsAdapter: androidx.leanback.widget.ObjectAdapter): void;
				public onTransitionEnd(): void;
				public getPresenterSelector(): androidx.leanback.widget.PresenterSelector;
				public onTrimMemory(level: number): void;
				public onViewCreated(view: globalAndroid.view.View, savedInstanceState: globalAndroid.os.Bundle): void;
				/** @deprecated */
				public onSaveInstanceState(outState: globalAndroid.os.Bundle): void;
				public setSelectedPosition(position: number): void;
				/** @deprecated */
				public onCreateContextMenu(menu: globalAndroid.view.ContextMenu, v: globalAndroid.view.View, menuInfo: globalAndroid.view.ContextMenu.ContextMenuInfo): void;
				/** @deprecated */
				public onCreateView(inflater: globalAndroid.view.LayoutInflater, container: globalAndroid.view.ViewGroup, savedInstanceState: globalAndroid.os.Bundle): globalAndroid.view.View;
				/** @deprecated */
				public onDestroyView(): void;
				/** @deprecated */
				public onTrimMemory(level: number): void;
				public onSaveInstanceState(outState: globalAndroid.os.Bundle): void;
				public onCreateView(inflater: globalAndroid.view.LayoutInflater, container: globalAndroid.view.ViewGroup, savedInstanceState: globalAndroid.os.Bundle): globalAndroid.view.View;
				public setPresenterSelector(presenterSelector: androidx.leanback.widget.PresenterSelector): void;
				public onCreateContextMenu(menu: globalAndroid.view.ContextMenu, v: globalAndroid.view.View, menuInfo: globalAndroid.view.ContextMenu.ContextMenuInfo): void;
				public getAdapter(): androidx.leanback.widget.ObjectAdapter;
				public getBridgeAdapter(): androidx.leanback.widget.ItemBridgeAdapter;
				public getSelectedPosition(): number;
				public onDestroyView(): void;
				public setAlignment(windowAlignOffsetTop: number): void;
			}
			export module BaseRowFragment {
				export class LateSelectionObserver extends androidx.recyclerview.widget.RecyclerView.AdapterDataObserver {
					public static class: java.lang.Class<androidx.leanback.app.BaseRowFragment.LateSelectionObserver>;
					public onChanged(): void;
					public onItemRangeInserted(positionStart: number, itemCount: number): void;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module app {
			export abstract class BaseRowSupportFragment extends androidx.fragment.app.Fragment {
				public static class: java.lang.Class<androidx.leanback.app.BaseRowSupportFragment>;
				public onTransitionStart(): void;
				public getVerticalGridView(): androidx.leanback.widget.VerticalGridView;
				public getViewModelStore(): androidx.lifecycle.ViewModelStore;
				public setSelectedPosition(position: number, smooth: boolean): void;
				public onTransitionPrepare(): boolean;
				public onConfigurationChanged(newConfig: globalAndroid.content.res.Configuration): void;
				public setAdapter(rowsAdapter: androidx.leanback.widget.ObjectAdapter): void;
				public onTransitionEnd(): void;
				public onLowMemory(): void;
				public onSaveInstanceState(outState: globalAndroid.os.Bundle): void;
				public getPresenterSelector(): androidx.leanback.widget.PresenterSelector;
				public getLifecycle(): androidx.lifecycle.Lifecycle;
				public onCreateView(inflater: globalAndroid.view.LayoutInflater, container: globalAndroid.view.ViewGroup, savedInstanceState: globalAndroid.os.Bundle): globalAndroid.view.View;
				public setPresenterSelector(presenterSelector: androidx.leanback.widget.PresenterSelector): void;
				public getSavedStateRegistry(): androidx.savedstate.SavedStateRegistry;
				public onCreateContextMenu(menu: globalAndroid.view.ContextMenu, v: globalAndroid.view.View, menuInfo: globalAndroid.view.ContextMenu.ContextMenuInfo): void;
				public onViewCreated(view: globalAndroid.view.View, savedInstanceState: globalAndroid.os.Bundle): void;
				public getAdapter(): androidx.leanback.widget.ObjectAdapter;
				public getBridgeAdapter(): androidx.leanback.widget.ItemBridgeAdapter;
				public getSelectedPosition(): number;
				public setSelectedPosition(position: number): void;
				public onDestroyView(): void;
				public setAlignment(windowAlignOffsetTop: number): void;
			}
			export module BaseRowSupportFragment {
				export class LateSelectionObserver extends androidx.recyclerview.widget.RecyclerView.AdapterDataObserver {
					public static class: java.lang.Class<androidx.leanback.app.BaseRowSupportFragment.LateSelectionObserver>;
					public onChanged(): void;
					public onItemRangeInserted(positionStart: number, itemCount: number): void;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module app {
			export class BaseSupportFragment extends androidx.leanback.app.BrandedSupportFragment {
				public static class: java.lang.Class<androidx.leanback.app.BaseSupportFragment>;
				public onEntranceTransitionPrepare(): void;
				public getViewModelStore(): androidx.lifecycle.ViewModelStore;
				public onConfigurationChanged(newConfig: globalAndroid.content.res.Configuration): void;
				public onLowMemory(): void;
				public prepareEntranceTransition(): void;
				public onCreate(savedInstanceState: globalAndroid.os.Bundle): void;
				public createEntranceTransition(): any;
				public onEntranceTransitionStart(): void;
				public getLifecycle(): androidx.lifecycle.Lifecycle;
				public onEntranceTransitionEnd(): void;
				public getSavedStateRegistry(): androidx.savedstate.SavedStateRegistry;
				public onCreateContextMenu(menu: globalAndroid.view.ContextMenu, v: globalAndroid.view.View, menuInfo: globalAndroid.view.ContextMenu.ContextMenuInfo): void;
				public onViewCreated(view: globalAndroid.view.View, savedInstanceState: globalAndroid.os.Bundle): void;
				public startEntranceTransition(): void;
				public getProgressBarManager(): androidx.leanback.app.ProgressBarManager;
				public runEntranceTransition(entranceTransition: any): void;
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module app {
			export class BrandedFragment extends globalAndroid.app.Fragment {
				public static class: java.lang.Class<androidx.leanback.app.BrandedFragment>;
				/** @deprecated */
				public onViewCreated(view: globalAndroid.view.View, savedInstanceState: globalAndroid.os.Bundle): void;
				public installTitleView(inflater: globalAndroid.view.LayoutInflater, parent: globalAndroid.view.ViewGroup, savedInstanceState: globalAndroid.os.Bundle): void;
				/** @deprecated */
				public onStart(): void;
				public setOnSearchClickedListener(listener: globalAndroid.view.View.OnClickListener): void;
				/** @deprecated */
				public onResume(): void;
				public onPause(): void;
				/** @deprecated */
				public onPause(): void;
				public constructor();
				public onTrimMemory(level: number): void;
				public isShowingTitle(): boolean;
				public onViewCreated(view: globalAndroid.view.View, savedInstanceState: globalAndroid.os.Bundle): void;
				public showTitle(show: boolean): void;
				public getTitleViewAdapter(): androidx.leanback.widget.TitleViewAdapter;
				public getSearchAffordanceColor(): number;
				/** @deprecated */
				public onSaveInstanceState(outState: globalAndroid.os.Bundle): void;
				public getBadgeDrawable(): globalAndroid.graphics.drawable.Drawable;
				public setTitle(title: string): void;
				/** @deprecated */
				public onCreateContextMenu(menu: globalAndroid.view.ContextMenu, v: globalAndroid.view.View, menuInfo: globalAndroid.view.ContextMenu.ContextMenuInfo): void;
				public setSearchAffordanceColor(color: number): void;
				public onResume(): void;
				public setTitleView(titleView: globalAndroid.view.View): void;
				/** @deprecated */
				public onDestroyView(): void;
				/** @deprecated */
				public onTrimMemory(level: number): void;
				public onSaveInstanceState(outState: globalAndroid.os.Bundle): void;
				public getTitle(): string;
				public getTitleView(): globalAndroid.view.View;
				public onCreateContextMenu(menu: globalAndroid.view.ContextMenu, v: globalAndroid.view.View, menuInfo: globalAndroid.view.ContextMenu.ContextMenuInfo): void;
				/** @deprecated */
				public constructor();
				public getSearchAffordanceColors(): androidx.leanback.widget.SearchOrbView.Colors;
				public showTitle(flags: number): void;
				public onStart(): void;
				public setBadgeDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public setSearchAffordanceColors(colors: androidx.leanback.widget.SearchOrbView.Colors): void;
				public onInflateTitleView(inflater: globalAndroid.view.LayoutInflater, parent: globalAndroid.view.ViewGroup, savedInstanceState: globalAndroid.os.Bundle): globalAndroid.view.View;
				public onDestroyView(): void;
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module app {
			export class BrandedSupportFragment extends androidx.fragment.app.Fragment {
				public static class: java.lang.Class<androidx.leanback.app.BrandedSupportFragment>;
				public installTitleView(inflater: globalAndroid.view.LayoutInflater, parent: globalAndroid.view.ViewGroup, savedInstanceState: globalAndroid.os.Bundle): void;
				public getViewModelStore(): androidx.lifecycle.ViewModelStore;
				public setOnSearchClickedListener(listener: globalAndroid.view.View.OnClickListener): void;
				public onPause(): void;
				public getLifecycle(): androidx.lifecycle.Lifecycle;
				public constructor();
				public getSavedStateRegistry(): androidx.savedstate.SavedStateRegistry;
				public isShowingTitle(): boolean;
				public onViewCreated(view: globalAndroid.view.View, savedInstanceState: globalAndroid.os.Bundle): void;
				public showTitle(show: boolean): void;
				public getTitleViewAdapter(): androidx.leanback.widget.TitleViewAdapter;
				public getSearchAffordanceColor(): number;
				public getBadgeDrawable(): globalAndroid.graphics.drawable.Drawable;
				public setTitle(title: string): void;
				public setSearchAffordanceColor(color: number): void;
				public onResume(): void;
				public onConfigurationChanged(newConfig: globalAndroid.content.res.Configuration): void;
				public onLowMemory(): void;
				public setTitleView(titleView: globalAndroid.view.View): void;
				public onSaveInstanceState(outState: globalAndroid.os.Bundle): void;
				public getTitle(): string;
				public getTitleView(): globalAndroid.view.View;
				public onCreateContextMenu(menu: globalAndroid.view.ContextMenu, v: globalAndroid.view.View, menuInfo: globalAndroid.view.ContextMenu.ContextMenuInfo): void;
				public getSearchAffordanceColors(): androidx.leanback.widget.SearchOrbView.Colors;
				public showTitle(flags: number): void;
				public onStart(): void;
				public setBadgeDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public setSearchAffordanceColors(colors: androidx.leanback.widget.SearchOrbView.Colors): void;
				public constructor(contentLayoutId: number);
				public onInflateTitleView(inflater: globalAndroid.view.LayoutInflater, parent: globalAndroid.view.ViewGroup, savedInstanceState: globalAndroid.os.Bundle): globalAndroid.view.View;
				public onDestroyView(): void;
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module app {
			export class BrowseFragment extends androidx.leanback.app.BaseFragment {
				public static class: java.lang.Class<androidx.leanback.app.BrowseFragment>;
				public static HEADERS_ENABLED: number;
				public static HEADERS_HIDDEN: number;
				public static HEADERS_DISABLED: number;
				/** @deprecated */
				public enableRowScaling(enable: boolean): void;
				public constructor();
				public setSelectedPosition(rowPosition: number, smooth: boolean, rowHolderTask: androidx.leanback.widget.Presenter.ViewHolderTask): void;
				public startHeadersTransition(withHeaders: boolean): void;
				public setSelectedPosition(position: number): void;
				/** @deprecated */
				public onCreateView(inflater: globalAndroid.view.LayoutInflater, container: globalAndroid.view.ViewGroup, savedInstanceState: globalAndroid.os.Bundle): globalAndroid.view.View;
				public setAdapter(adapter: androidx.leanback.widget.ObjectAdapter): void;
				public setHeaderPresenterSelector(headerPresenterSelector: androidx.leanback.widget.PresenterSelector): void;
				public setOnItemViewSelectedListener(listener: androidx.leanback.widget.OnItemViewSelectedListener): void;
				public isHeadersTransitionOnBackEnabled(): boolean;
				public onSaveInstanceState(outState: globalAndroid.os.Bundle): void;
				public onEntranceTransitionStart(): void;
				public setOnItemViewClickedListener(listener: androidx.leanback.widget.OnItemViewClickedListener): void;
				public onCreateHeadersFragment(): androidx.leanback.app.HeadersFragment;
				public onCreateView(inflater: globalAndroid.view.LayoutInflater, container: globalAndroid.view.ViewGroup, savedInstanceState: globalAndroid.os.Bundle): globalAndroid.view.View;
				public isInHeadersTransition(): boolean;
				public onStart(): void;
				public setHeadersState(headersState: number): void;
				public isShowingHeaders(): boolean;
				public getSelectedPosition(): number;
				public onDestroyView(): void;
				public enableMainFragmentScaling(enable: boolean): void;
				public setSelectedPosition(position: number, smooth: boolean): void;
				public getMainFragmentRegistry(): androidx.leanback.app.BrowseFragment.MainFragmentAdapterRegistry;
				public onCreate(savedInstanceState: globalAndroid.os.Bundle): void;
				public getHeadersState(): number;
				public onEntranceTransitionEnd(): void;
				public onTrimMemory(level: number): void;
				public setBrowseTransitionListener(listener: androidx.leanback.app.BrowseFragment.BrowseTransitionListener): void;
				public onStop(): void;
				public setBrandColor(color: number): void;
				/** @deprecated */
				public onCreateContextMenu(menu: globalAndroid.view.ContextMenu, v: globalAndroid.view.View, menuInfo: globalAndroid.view.ContextMenu.ContextMenuInfo): void;
				public getOnItemViewClickedListener(): androidx.leanback.widget.OnItemViewClickedListener;
				public onEntranceTransitionPrepare(): void;
				public getOnItemViewSelectedListener(): androidx.leanback.widget.OnItemViewSelectedListener;
				public getBrandColor(): number;
				public getRowsFragment(): androidx.leanback.app.RowsFragment;
				/** @deprecated */
				public onTrimMemory(level: number): void;
				public createEntranceTransition(): any;
				public onCreateContextMenu(menu: globalAndroid.view.ContextMenu, v: globalAndroid.view.View, menuInfo: globalAndroid.view.ContextMenu.ContextMenuInfo): void;
				public getSelectedRowViewHolder(): androidx.leanback.widget.RowPresenter.ViewHolder;
				public getMainFragment(): globalAndroid.app.Fragment;
				public getAdapter(): androidx.leanback.widget.ObjectAdapter;
				/** @deprecated */
				public onDestroy(): void;
				/** @deprecated */
				public onStop(): void;
				public setHeadersTransitionOnBackEnabled(headersBackStackEnabled: boolean): void;
				public onDestroy(): void;
				public getHeadersFragment(): androidx.leanback.app.HeadersFragment;
				public static createArgs(bundle0: globalAndroid.os.Bundle, title: string, headersState: number): globalAndroid.os.Bundle;
				public runEntranceTransition(entranceTransition: any): void;
			}
			export module BrowseFragment {
				export class BackStackListener extends java.lang.Object implements globalAndroid.app.FragmentManager.OnBackStackChangedListener {
					public static class: java.lang.Class<androidx.leanback.app.BrowseFragment.BackStackListener>;
					public onBackStackChanged(): void;
					/** @deprecated */
					public onBackStackChanged(): void;
				}
				export class BrowseTransitionListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.app.BrowseFragment.BrowseTransitionListener>;
					public constructor();
					public onHeadersTransitionStop(withHeaders: boolean): void;
					public onHeadersTransitionStart(withHeaders: boolean): void;
				}
				export class ExpandPreLayout extends java.lang.Object implements globalAndroid.view.ViewTreeObserver.OnPreDrawListener {
					public static class: java.lang.Class<androidx.leanback.app.BrowseFragment.ExpandPreLayout>;
					public onPreDraw(): boolean;
				}
				export abstract class FragmentFactory<T>  extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.app.BrowseFragment.FragmentFactory<any>>;
					public constructor();
					public createFragment(object0: any): T;
				}
				export class FragmentHost extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.app.BrowseFragment.FragmentHost>;
					/**
					 * Constructs a new instance of the androidx.leanback.app.BrowseFragment$FragmentHost interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						notifyViewCreated(mainFragmentAdapter0: androidx.leanback.app.BrowseFragment.MainFragmentAdapter<any>): void;
						notifyDataReady(mainFragmentAdapter0: androidx.leanback.app.BrowseFragment.MainFragmentAdapter<any>): void;
						showTitleView(boolean0: boolean): void;
					});
					public constructor();
					public notifyViewCreated(mainFragmentAdapter0: androidx.leanback.app.BrowseFragment.MainFragmentAdapter<any>): void;
					public notifyDataReady(mainFragmentAdapter0: androidx.leanback.app.BrowseFragment.MainFragmentAdapter<any>): void;
					public showTitleView(boolean0: boolean): void;
				}
				export class FragmentHostImpl extends java.lang.Object implements androidx.leanback.app.BrowseFragment.FragmentHost {
					public static class: java.lang.Class<androidx.leanback.app.BrowseFragment.FragmentHostImpl>;
					public notifyViewCreated(fragmentAdapter: androidx.leanback.app.BrowseFragment.MainFragmentAdapter<any>): void;
					public showTitleView(show: boolean): void;
					public notifyDataReady(fragmentAdapter: androidx.leanback.app.BrowseFragment.MainFragmentAdapter<any>): void;
				}
				export class ListRowFragmentFactory extends androidx.leanback.app.BrowseFragment.FragmentFactory<androidx.leanback.app.RowsFragment> {
					public static class: java.lang.Class<androidx.leanback.app.BrowseFragment.ListRowFragmentFactory>;
					public constructor();
					public createFragment(object0: any): any;
					public createFragment(row: any): androidx.leanback.app.RowsFragment;
				}
				export class MainFragmentAdapter<T>  extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.app.BrowseFragment.MainFragmentAdapter<any>>;
					public getFragment(): T;
					public onTransitionStart(): void;
					public setEntranceTransitionState(state: boolean): void;
					public isScrolling(): boolean;
					public setScalingEnabled(scalingEnabled: boolean): void;
					public setAlignment(windowAlignOffsetFromTop: number): void;
					public onTransitionEnd(): void;
					public isScalingEnabled(): boolean;
					public getFragmentHost(): androidx.leanback.app.BrowseFragment.FragmentHost;
					public onTransitionPrepare(): boolean;
					public constructor(fragment: T);
					public setExpand(expand: boolean): void;
				}
				export class MainFragmentAdapterProvider extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.app.BrowseFragment.MainFragmentAdapterProvider>;
					/**
					 * Constructs a new instance of the androidx.leanback.app.BrowseFragment$MainFragmentAdapterProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getMainFragmentAdapter(): androidx.leanback.app.BrowseFragment.MainFragmentAdapter<any>;
					});
					public constructor();
					public getMainFragmentAdapter(): androidx.leanback.app.BrowseFragment.MainFragmentAdapter<any>;
				}
				export class MainFragmentAdapterRegistry extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.app.BrowseFragment.MainFragmentAdapterRegistry>;
					public constructor();
					public registerFragment(rowClass: java.lang.Class<any>, factory: androidx.leanback.app.BrowseFragment.FragmentFactory<any>): void;
					public createFragment(item: any): globalAndroid.app.Fragment;
				}
				export class MainFragmentItemViewSelectedListener extends java.lang.Object implements androidx.leanback.widget.OnItemViewSelectedListener {
					public static class: java.lang.Class<androidx.leanback.app.BrowseFragment.MainFragmentItemViewSelectedListener>;
					public constructor(this0: androidx.leanback.app.BrowseFragment, fragmentRowsAdapter: androidx.leanback.app.BrowseFragment.MainFragmentRowsAdapter<any>);
					public onItemSelected(itemViewHolder: androidx.leanback.widget.Presenter.ViewHolder, item: any, rowViewHolder: androidx.leanback.widget.RowPresenter.ViewHolder, row: androidx.leanback.widget.Row): void;
					public onItemSelected(viewHolder0: androidx.leanback.widget.Presenter.ViewHolder, object1: any, viewHolder2: androidx.leanback.widget.RowPresenter.ViewHolder, object3: any): void;
				}
				export class MainFragmentRowsAdapter<T>  extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.app.BrowseFragment.MainFragmentRowsAdapter<any>>;
					public getFragment(): T;
					public setSelectedPosition(rowPosition: number, smooth: boolean): void;
					public setOnItemViewClickedListener(listener: androidx.leanback.widget.OnItemViewClickedListener): void;
					public setAdapter(adapter: androidx.leanback.widget.ObjectAdapter): void;
					public findRowViewHolderByPosition(position: number): androidx.leanback.widget.RowPresenter.ViewHolder;
					public setSelectedPosition(rowPosition: number, smooth: boolean, rowHolderTask: androidx.leanback.widget.Presenter.ViewHolderTask): void;
					public setOnItemViewSelectedListener(listener: androidx.leanback.widget.OnItemViewSelectedListener): void;
					public constructor(fragment: T);
					public getSelectedPosition(): number;
				}
				export class MainFragmentRowsAdapterProvider extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.app.BrowseFragment.MainFragmentRowsAdapterProvider>;
					/**
					 * Constructs a new instance of the androidx.leanback.app.BrowseFragment$MainFragmentRowsAdapterProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getMainFragmentRowsAdapter(): androidx.leanback.app.BrowseFragment.MainFragmentRowsAdapter<any>;
					});
					public constructor();
					public getMainFragmentRowsAdapter(): androidx.leanback.app.BrowseFragment.MainFragmentRowsAdapter<any>;
				}
				export class SetSelectionRunnable extends java.lang.Object implements java.lang.Runnable {
					public static class: java.lang.Class<androidx.leanback.app.BrowseFragment.SetSelectionRunnable>;
					public run(): void;
					public stop(): void;
					public start(): void;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module app {
			export class BrowseSupportFragment extends androidx.leanback.app.BaseSupportFragment {
				public static class: java.lang.Class<androidx.leanback.app.BrowseSupportFragment>;
				public static HEADERS_ENABLED: number;
				public static HEADERS_HIDDEN: number;
				public static HEADERS_DISABLED: number;
				/** @deprecated */
				public enableRowScaling(enable: boolean): void;
				public getLifecycle(): androidx.lifecycle.Lifecycle;
				public constructor();
				public setSelectedPosition(rowPosition: number, smooth: boolean, rowHolderTask: androidx.leanback.widget.Presenter.ViewHolderTask): void;
				public startHeadersTransition(withHeaders: boolean): void;
				public setSelectedPosition(position: number): void;
				public getRowsSupportFragment(): androidx.leanback.app.RowsSupportFragment;
				public setAdapter(adapter: androidx.leanback.widget.ObjectAdapter): void;
				public setHeaderPresenterSelector(headerPresenterSelector: androidx.leanback.widget.PresenterSelector): void;
				public onConfigurationChanged(newConfig: globalAndroid.content.res.Configuration): void;
				public setOnItemViewSelectedListener(listener: androidx.leanback.widget.OnItemViewSelectedListener): void;
				public isHeadersTransitionOnBackEnabled(): boolean;
				public onSaveInstanceState(outState: globalAndroid.os.Bundle): void;
				public onEntranceTransitionStart(): void;
				public setOnItemViewClickedListener(listener: androidx.leanback.widget.OnItemViewClickedListener): void;
				public onCreateView(inflater: globalAndroid.view.LayoutInflater, container: globalAndroid.view.ViewGroup, savedInstanceState: globalAndroid.os.Bundle): globalAndroid.view.View;
				public isInHeadersTransition(): boolean;
				public onStart(): void;
				public setHeadersState(headersState: number): void;
				public getHeadersSupportFragment(): androidx.leanback.app.HeadersSupportFragment;
				public isShowingHeaders(): boolean;
				public getSelectedPosition(): number;
				public onDestroyView(): void;
				public enableMainFragmentScaling(enable: boolean): void;
				public getViewModelStore(): androidx.lifecycle.ViewModelStore;
				public setSelectedPosition(position: number, smooth: boolean): void;
				public getMainFragment(): androidx.fragment.app.Fragment;
				public onCreateHeadersSupportFragment(): androidx.leanback.app.HeadersSupportFragment;
				public onCreate(savedInstanceState: globalAndroid.os.Bundle): void;
				public getHeadersState(): number;
				public onEntranceTransitionEnd(): void;
				public getSavedStateRegistry(): androidx.savedstate.SavedStateRegistry;
				public onStop(): void;
				public setBrandColor(color: number): void;
				public getOnItemViewClickedListener(): androidx.leanback.widget.OnItemViewClickedListener;
				public onEntranceTransitionPrepare(): void;
				public getOnItemViewSelectedListener(): androidx.leanback.widget.OnItemViewSelectedListener;
				public onLowMemory(): void;
				public setBrowseTransitionListener(listener: androidx.leanback.app.BrowseSupportFragment.BrowseTransitionListener): void;
				public getBrandColor(): number;
				public getMainFragmentRegistry(): androidx.leanback.app.BrowseSupportFragment.MainFragmentAdapterRegistry;
				public createEntranceTransition(): any;
				public onCreateContextMenu(menu: globalAndroid.view.ContextMenu, v: globalAndroid.view.View, menuInfo: globalAndroid.view.ContextMenu.ContextMenuInfo): void;
				public getSelectedRowViewHolder(): androidx.leanback.widget.RowPresenter.ViewHolder;
				public getAdapter(): androidx.leanback.widget.ObjectAdapter;
				public setHeadersTransitionOnBackEnabled(headersBackStackEnabled: boolean): void;
				public constructor(contentLayoutId: number);
				public onDestroy(): void;
				public static createArgs(bundle0: globalAndroid.os.Bundle, title: string, headersState: number): globalAndroid.os.Bundle;
				public runEntranceTransition(entranceTransition: any): void;
			}
			export module BrowseSupportFragment {
				export class BackStackListener extends java.lang.Object implements androidx.fragment.app.FragmentManager.OnBackStackChangedListener {
					public static class: java.lang.Class<androidx.leanback.app.BrowseSupportFragment.BackStackListener>;
					public onBackStackChanged(): void;
				}
				export class BrowseTransitionListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.app.BrowseSupportFragment.BrowseTransitionListener>;
					public constructor();
					public onHeadersTransitionStop(withHeaders: boolean): void;
					public onHeadersTransitionStart(withHeaders: boolean): void;
				}
				export class ExpandPreLayout extends java.lang.Object implements globalAndroid.view.ViewTreeObserver.OnPreDrawListener {
					public static class: java.lang.Class<androidx.leanback.app.BrowseSupportFragment.ExpandPreLayout>;
					public onPreDraw(): boolean;
				}
				export abstract class FragmentFactory<T>  extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.app.BrowseSupportFragment.FragmentFactory<any>>;
					public constructor();
					public createFragment(object0: any): T;
				}
				export class FragmentHost extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.app.BrowseSupportFragment.FragmentHost>;
					/**
					 * Constructs a new instance of the androidx.leanback.app.BrowseSupportFragment$FragmentHost interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						notifyViewCreated(mainFragmentAdapter0: androidx.leanback.app.BrowseSupportFragment.MainFragmentAdapter<any>): void;
						notifyDataReady(mainFragmentAdapter0: androidx.leanback.app.BrowseSupportFragment.MainFragmentAdapter<any>): void;
						showTitleView(boolean0: boolean): void;
					});
					public constructor();
					public notifyViewCreated(mainFragmentAdapter0: androidx.leanback.app.BrowseSupportFragment.MainFragmentAdapter<any>): void;
					public showTitleView(boolean0: boolean): void;
					public notifyDataReady(mainFragmentAdapter0: androidx.leanback.app.BrowseSupportFragment.MainFragmentAdapter<any>): void;
				}
				export class FragmentHostImpl extends java.lang.Object implements androidx.leanback.app.BrowseSupportFragment.FragmentHost {
					public static class: java.lang.Class<androidx.leanback.app.BrowseSupportFragment.FragmentHostImpl>;
					public showTitleView(show: boolean): void;
					public notifyDataReady(fragmentAdapter: androidx.leanback.app.BrowseSupportFragment.MainFragmentAdapter<any>): void;
					public notifyViewCreated(fragmentAdapter: androidx.leanback.app.BrowseSupportFragment.MainFragmentAdapter<any>): void;
				}
				export class ListRowFragmentFactory extends androidx.leanback.app.BrowseSupportFragment.FragmentFactory<androidx.leanback.app.RowsSupportFragment> {
					public static class: java.lang.Class<androidx.leanback.app.BrowseSupportFragment.ListRowFragmentFactory>;
					public createFragment(row: any): androidx.leanback.app.RowsSupportFragment;
					public constructor();
					public createFragment(object0: any): any;
				}
				export class MainFragmentAdapter<T>  extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.app.BrowseSupportFragment.MainFragmentAdapter<any>>;
					public getFragment(): T;
					public onTransitionStart(): void;
					public setEntranceTransitionState(state: boolean): void;
					public isScrolling(): boolean;
					public setScalingEnabled(scalingEnabled: boolean): void;
					public setAlignment(windowAlignOffsetFromTop: number): void;
					public onTransitionEnd(): void;
					public isScalingEnabled(): boolean;
					public onTransitionPrepare(): boolean;
					public constructor(fragment: T);
					public setExpand(expand: boolean): void;
					public getFragmentHost(): androidx.leanback.app.BrowseSupportFragment.FragmentHost;
				}
				export class MainFragmentAdapterProvider extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.app.BrowseSupportFragment.MainFragmentAdapterProvider>;
					/**
					 * Constructs a new instance of the androidx.leanback.app.BrowseSupportFragment$MainFragmentAdapterProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getMainFragmentAdapter(): androidx.leanback.app.BrowseSupportFragment.MainFragmentAdapter<any>;
					});
					public constructor();
					public getMainFragmentAdapter(): androidx.leanback.app.BrowseSupportFragment.MainFragmentAdapter<any>;
				}
				export class MainFragmentAdapterRegistry extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.app.BrowseSupportFragment.MainFragmentAdapterRegistry>;
					public registerFragment(rowClass: java.lang.Class<any>, factory: androidx.leanback.app.BrowseSupportFragment.FragmentFactory<any>): void;
					public constructor();
					public createFragment(item: any): androidx.fragment.app.Fragment;
				}
				export class MainFragmentItemViewSelectedListener extends java.lang.Object implements androidx.leanback.widget.OnItemViewSelectedListener {
					public static class: java.lang.Class<androidx.leanback.app.BrowseSupportFragment.MainFragmentItemViewSelectedListener>;
					public onItemSelected(itemViewHolder: androidx.leanback.widget.Presenter.ViewHolder, item: any, rowViewHolder: androidx.leanback.widget.RowPresenter.ViewHolder, row: androidx.leanback.widget.Row): void;
					public onItemSelected(viewHolder0: androidx.leanback.widget.Presenter.ViewHolder, object1: any, viewHolder2: androidx.leanback.widget.RowPresenter.ViewHolder, object3: any): void;
					public constructor(this0: androidx.leanback.app.BrowseSupportFragment, fragmentRowsAdapter: androidx.leanback.app.BrowseSupportFragment.MainFragmentRowsAdapter<any>);
				}
				export class MainFragmentRowsAdapter<T>  extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.app.BrowseSupportFragment.MainFragmentRowsAdapter<any>>;
					public getFragment(): T;
					public setSelectedPosition(rowPosition: number, smooth: boolean): void;
					public setOnItemViewClickedListener(listener: androidx.leanback.widget.OnItemViewClickedListener): void;
					public setAdapter(adapter: androidx.leanback.widget.ObjectAdapter): void;
					public findRowViewHolderByPosition(position: number): androidx.leanback.widget.RowPresenter.ViewHolder;
					public setSelectedPosition(rowPosition: number, smooth: boolean, rowHolderTask: androidx.leanback.widget.Presenter.ViewHolderTask): void;
					public setOnItemViewSelectedListener(listener: androidx.leanback.widget.OnItemViewSelectedListener): void;
					public constructor(fragment: T);
					public getSelectedPosition(): number;
				}
				export class MainFragmentRowsAdapterProvider extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.app.BrowseSupportFragment.MainFragmentRowsAdapterProvider>;
					/**
					 * Constructs a new instance of the androidx.leanback.app.BrowseSupportFragment$MainFragmentRowsAdapterProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getMainFragmentRowsAdapter(): androidx.leanback.app.BrowseSupportFragment.MainFragmentRowsAdapter<any>;
					});
					public constructor();
					public getMainFragmentRowsAdapter(): androidx.leanback.app.BrowseSupportFragment.MainFragmentRowsAdapter<any>;
				}
				export class SetSelectionRunnable extends java.lang.Object implements java.lang.Runnable {
					public static class: java.lang.Class<androidx.leanback.app.BrowseSupportFragment.SetSelectionRunnable>;
					public run(): void;
					public stop(): void;
					public start(): void;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module app {
			export class DetailsBackgroundVideoHelper extends java.lang.Object {
				public static class: java.lang.Class<androidx.leanback.app.DetailsBackgroundVideoHelper>;
			}
			export module DetailsBackgroundVideoHelper {
				export class PlaybackControlStateCallback extends androidx.leanback.media.PlaybackGlue.PlayerCallback {
					public static class: java.lang.Class<androidx.leanback.app.DetailsBackgroundVideoHelper.PlaybackControlStateCallback>;
					public onPreparedStateChanged(glue: androidx.leanback.media.PlaybackGlue): void;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module app {
			export class DetailsFragment extends androidx.leanback.app.BaseFragment {
				public static class: java.lang.Class<androidx.leanback.app.DetailsFragment>;
				public setSelectedPosition(position: number, smooth: boolean): void;
				public getOnItemViewClickedListener(): androidx.leanback.widget.BaseOnItemViewClickedListener<any>;
				public onSetRowStatus(presenter: androidx.leanback.widget.RowPresenter, viewHolder: androidx.leanback.widget.RowPresenter.ViewHolder, adapterPosition: number, selectedPosition: number, selectedSubPosition: number): void;
				public setOnItemViewSelectedListener(listener: androidx.leanback.widget.BaseOnItemViewSelectedListener<any>): void;
				public onCreate(savedInstanceState: globalAndroid.os.Bundle): void;
				public getParallax(): androidx.leanback.widget.DetailsParallax;
				/** @deprecated */
				public inflateTitle(inflater: globalAndroid.view.LayoutInflater, parent: globalAndroid.view.ViewGroup, savedInstanceState: globalAndroid.os.Bundle): globalAndroid.view.View;
				public constructor();
				public onEntranceTransitionEnd(): void;
				public onTrimMemory(level: number): void;
				public onSetDetailsOverviewRowStatus(presenter: androidx.leanback.widget.FullWidthDetailsOverviewRowPresenter, viewHolder: androidx.leanback.widget.FullWidthDetailsOverviewRowPresenter.ViewHolder, adapterPosition: number, selectedPosition: number, selectedSubPosition: number): void;
				public onStop(): void;
				public setSelectedPosition(position: number): void;
				public setOnItemViewClickedListener(listener: androidx.leanback.widget.BaseOnItemViewClickedListener<any>): void;
				/** @deprecated */
				public onCreateContextMenu(menu: globalAndroid.view.ContextMenu, v: globalAndroid.view.View, menuInfo: globalAndroid.view.ContextMenu.ContextMenuInfo): void;
				public setupDetailsOverviewRowPresenter(presenter: androidx.leanback.widget.FullWidthDetailsOverviewRowPresenter): void;
				/** @deprecated */
				public onCreateView(inflater: globalAndroid.view.LayoutInflater, container: globalAndroid.view.ViewGroup, savedInstanceState: globalAndroid.os.Bundle): globalAndroid.view.View;
				public onEntranceTransitionPrepare(): void;
				public setAdapter(adapter: androidx.leanback.widget.ObjectAdapter): void;
				public getRowsFragment(): androidx.leanback.app.RowsFragment;
				/** @deprecated */
				public onTrimMemory(level: number): void;
				public createEntranceTransition(): any;
				public onEntranceTransitionStart(): void;
				public onCreateView(inflater: globalAndroid.view.LayoutInflater, container: globalAndroid.view.ViewGroup, savedInstanceState: globalAndroid.os.Bundle): globalAndroid.view.View;
				public onCreateContextMenu(menu: globalAndroid.view.ContextMenu, v: globalAndroid.view.View, menuInfo: globalAndroid.view.ContextMenu.ContextMenuInfo): void;
				public onStart(): void;
				public getAdapter(): androidx.leanback.widget.ObjectAdapter;
				/** @deprecated */
				public onStop(): void;
				public setupPresenter(rowPresenter: androidx.leanback.widget.Presenter): void;
				public onInflateTitleView(inflater: globalAndroid.view.LayoutInflater, parent: globalAndroid.view.ViewGroup, savedInstanceState: globalAndroid.os.Bundle): globalAndroid.view.View;
				public runEntranceTransition(entranceTransition: any): void;
			}
			export module DetailsFragment {
				export class SetSelectionRunnable extends java.lang.Object implements java.lang.Runnable {
					public static class: java.lang.Class<androidx.leanback.app.DetailsFragment.SetSelectionRunnable>;
					public run(): void;
				}
				export class WaitEnterTransitionTimeout extends java.lang.Object implements java.lang.Runnable {
					public static class: java.lang.Class<androidx.leanback.app.DetailsFragment.WaitEnterTransitionTimeout>;
					public run(): void;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module app {
			export class DetailsFragmentBackgroundController extends java.lang.Object {
				public static class: java.lang.Class<androidx.leanback.app.DetailsFragmentBackgroundController>;
				public getSolidColor(): number;
				public canNavigateToVideoFragment(): boolean;
				public setupVideoPlayback(playbackGlue: androidx.leanback.media.PlaybackGlue): void;
				public setParallaxDrawableMaxOffset(offset: number): void;
				public constructor(fragment: androidx.leanback.app.DetailsFragment);
				public getCoverBitmap(): globalAndroid.graphics.Bitmap;
				public enableParallax(coverDrawable: globalAndroid.graphics.drawable.Drawable, bottomDrawable: globalAndroid.graphics.drawable.Drawable, coverDrawableParallaxTarget: androidx.leanback.widget.ParallaxTarget.PropertyValuesHolderTarget): void;
				public onCreateVideoFragment(): globalAndroid.app.Fragment;
				public switchToRows(): void;
				public setSolidColor(color: number): void;
				public getPlaybackGlue(): androidx.leanback.media.PlaybackGlue;
				public getBottomDrawable(): globalAndroid.graphics.drawable.Drawable;
				public setCoverBitmap(bitmap: globalAndroid.graphics.Bitmap): void;
				public enableParallax(): void;
				public getParallaxDrawableMaxOffset(): number;
				public findOrCreateVideoFragment(): globalAndroid.app.Fragment;
				public switchToVideo(): void;
				public getCoverDrawable(): globalAndroid.graphics.drawable.Drawable;
				public onCreateGlueHost(): androidx.leanback.media.PlaybackGlueHost;
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module app {
			export class DetailsSupportFragment extends androidx.leanback.app.BaseSupportFragment {
				public static class: java.lang.Class<androidx.leanback.app.DetailsSupportFragment>;
				public getViewModelStore(): androidx.lifecycle.ViewModelStore;
				public setSelectedPosition(position: number, smooth: boolean): void;
				public getOnItemViewClickedListener(): androidx.leanback.widget.BaseOnItemViewClickedListener<any>;
				public onSetRowStatus(presenter: androidx.leanback.widget.RowPresenter, viewHolder: androidx.leanback.widget.RowPresenter.ViewHolder, adapterPosition: number, selectedPosition: number, selectedSubPosition: number): void;
				public setOnItemViewSelectedListener(listener: androidx.leanback.widget.BaseOnItemViewSelectedListener<any>): void;
				public onCreate(savedInstanceState: globalAndroid.os.Bundle): void;
				public getParallax(): androidx.leanback.widget.DetailsParallax;
				/** @deprecated */
				public inflateTitle(inflater: globalAndroid.view.LayoutInflater, parent: globalAndroid.view.ViewGroup, savedInstanceState: globalAndroid.os.Bundle): globalAndroid.view.View;
				public getLifecycle(): androidx.lifecycle.Lifecycle;
				public constructor();
				public onEntranceTransitionEnd(): void;
				public getSavedStateRegistry(): androidx.savedstate.SavedStateRegistry;
				public onSetDetailsOverviewRowStatus(presenter: androidx.leanback.widget.FullWidthDetailsOverviewRowPresenter, viewHolder: androidx.leanback.widget.FullWidthDetailsOverviewRowPresenter.ViewHolder, adapterPosition: number, selectedPosition: number, selectedSubPosition: number): void;
				public onStop(): void;
				public setSelectedPosition(position: number): void;
				public setOnItemViewClickedListener(listener: androidx.leanback.widget.BaseOnItemViewClickedListener<any>): void;
				public setupDetailsOverviewRowPresenter(presenter: androidx.leanback.widget.FullWidthDetailsOverviewRowPresenter): void;
				public getRowsSupportFragment(): androidx.leanback.app.RowsSupportFragment;
				public onEntranceTransitionPrepare(): void;
				public setAdapter(adapter: androidx.leanback.widget.ObjectAdapter): void;
				public onConfigurationChanged(newConfig: globalAndroid.content.res.Configuration): void;
				public onLowMemory(): void;
				public createEntranceTransition(): any;
				public onEntranceTransitionStart(): void;
				public onCreateView(inflater: globalAndroid.view.LayoutInflater, container: globalAndroid.view.ViewGroup, savedInstanceState: globalAndroid.os.Bundle): globalAndroid.view.View;
				public onCreateContextMenu(menu: globalAndroid.view.ContextMenu, v: globalAndroid.view.View, menuInfo: globalAndroid.view.ContextMenu.ContextMenuInfo): void;
				public onStart(): void;
				public getAdapter(): androidx.leanback.widget.ObjectAdapter;
				public constructor(contentLayoutId: number);
				public setupPresenter(rowPresenter: androidx.leanback.widget.Presenter): void;
				public onInflateTitleView(inflater: globalAndroid.view.LayoutInflater, parent: globalAndroid.view.ViewGroup, savedInstanceState: globalAndroid.os.Bundle): globalAndroid.view.View;
				public runEntranceTransition(entranceTransition: any): void;
			}
			export module DetailsSupportFragment {
				export class SetSelectionRunnable extends java.lang.Object implements java.lang.Runnable {
					public static class: java.lang.Class<androidx.leanback.app.DetailsSupportFragment.SetSelectionRunnable>;
					public run(): void;
				}
				export class WaitEnterTransitionTimeout extends java.lang.Object implements java.lang.Runnable {
					public static class: java.lang.Class<androidx.leanback.app.DetailsSupportFragment.WaitEnterTransitionTimeout>;
					public run(): void;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module app {
			export class DetailsSupportFragmentBackgroundController extends java.lang.Object {
				public static class: java.lang.Class<androidx.leanback.app.DetailsSupportFragmentBackgroundController>;
				public canNavigateToVideoSupportFragment(): boolean;
				public getSolidColor(): number;
				public onCreateVideoSupportFragment(): androidx.fragment.app.Fragment;
				public setupVideoPlayback(playbackGlue: androidx.leanback.media.PlaybackGlue): void;
				public setParallaxDrawableMaxOffset(offset: number): void;
				public constructor(fragment: androidx.leanback.app.DetailsSupportFragment);
				public getCoverBitmap(): globalAndroid.graphics.Bitmap;
				public enableParallax(coverDrawable: globalAndroid.graphics.drawable.Drawable, bottomDrawable: globalAndroid.graphics.drawable.Drawable, coverDrawableParallaxTarget: androidx.leanback.widget.ParallaxTarget.PropertyValuesHolderTarget): void;
				public switchToRows(): void;
				public findOrCreateVideoSupportFragment(): androidx.fragment.app.Fragment;
				public setSolidColor(color: number): void;
				public getPlaybackGlue(): androidx.leanback.media.PlaybackGlue;
				public getBottomDrawable(): globalAndroid.graphics.drawable.Drawable;
				public setCoverBitmap(bitmap: globalAndroid.graphics.Bitmap): void;
				public enableParallax(): void;
				public getParallaxDrawableMaxOffset(): number;
				public switchToVideo(): void;
				public getCoverDrawable(): globalAndroid.graphics.drawable.Drawable;
				public onCreateGlueHost(): androidx.leanback.media.PlaybackGlueHost;
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module app {
			export class ErrorFragment extends androidx.leanback.app.BrandedFragment {
				public static class: java.lang.Class<androidx.leanback.app.ErrorFragment>;
				public getButtonClickListener(): globalAndroid.view.View.OnClickListener;
				/** @deprecated */
				public onCreateView(inflater: globalAndroid.view.LayoutInflater, container: globalAndroid.view.ViewGroup, savedInstanceState: globalAndroid.os.Bundle): globalAndroid.view.View;
				public setMessage(message: string): void;
				/** @deprecated */
				public onTrimMemory(level: number): void;
				public setDefaultBackground(translucent: boolean): void;
				public isBackgroundTranslucent(): boolean;
				public constructor();
				public getImageDrawable(): globalAndroid.graphics.drawable.Drawable;
				public onCreateView(inflater: globalAndroid.view.LayoutInflater, container: globalAndroid.view.ViewGroup, savedInstanceState: globalAndroid.os.Bundle): globalAndroid.view.View;
				public onTrimMemory(level: number): void;
				public getBackgroundDrawable(): globalAndroid.graphics.drawable.Drawable;
				public onCreateContextMenu(menu: globalAndroid.view.ContextMenu, v: globalAndroid.view.View, menuInfo: globalAndroid.view.ContextMenu.ContextMenuInfo): void;
				public onStart(): void;
				public setBackgroundDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public setButtonText(text: string): void;
				public setButtonClickListener(clickListener: globalAndroid.view.View.OnClickListener): void;
				public setImageDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public getMessage(): string;
				public getButtonText(): string;
				/** @deprecated */
				public onCreateContextMenu(menu: globalAndroid.view.ContextMenu, v: globalAndroid.view.View, menuInfo: globalAndroid.view.ContextMenu.ContextMenuInfo): void;
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module app {
			export class ErrorSupportFragment extends androidx.leanback.app.BrandedSupportFragment {
				public static class: java.lang.Class<androidx.leanback.app.ErrorSupportFragment>;
				public getButtonClickListener(): globalAndroid.view.View.OnClickListener;
				public getViewModelStore(): androidx.lifecycle.ViewModelStore;
				public onConfigurationChanged(newConfig: globalAndroid.content.res.Configuration): void;
				public onLowMemory(): void;
				public setMessage(message: string): void;
				public setDefaultBackground(translucent: boolean): void;
				public isBackgroundTranslucent(): boolean;
				public getLifecycle(): androidx.lifecycle.Lifecycle;
				public constructor();
				public getImageDrawable(): globalAndroid.graphics.drawable.Drawable;
				public onCreateView(inflater: globalAndroid.view.LayoutInflater, container: globalAndroid.view.ViewGroup, savedInstanceState: globalAndroid.os.Bundle): globalAndroid.view.View;
				public getSavedStateRegistry(): androidx.savedstate.SavedStateRegistry;
				public getBackgroundDrawable(): globalAndroid.graphics.drawable.Drawable;
				public onCreateContextMenu(menu: globalAndroid.view.ContextMenu, v: globalAndroid.view.View, menuInfo: globalAndroid.view.ContextMenu.ContextMenuInfo): void;
				public onStart(): void;
				public setBackgroundDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public setButtonText(text: string): void;
				public setButtonClickListener(clickListener: globalAndroid.view.View.OnClickListener): void;
				public constructor(contentLayoutId: number);
				public setImageDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public getMessage(): string;
				public getButtonText(): string;
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module app {
			export class FragmentUtil extends java.lang.Object {
				public static class: java.lang.Class<androidx.leanback.app.FragmentUtil>;
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module app {
			export class GuidedStepFragment extends globalAndroid.app.Fragment implements androidx.leanback.widget.GuidedActionAdapter.FocusListener {
				public static class: java.lang.Class<androidx.leanback.app.GuidedStepFragment>;
				public static EXTRA_UI_STYLE: string;
				public static UI_STYLE_REPLACE: number;
				public static UI_STYLE_DEFAULT: number;
				public static UI_STYLE_ENTRANCE: number;
				public static UI_STYLE_ACTIVITY_ROOT: number;
				public static SLIDE_FROM_SIDE: number;
				public static SLIDE_FROM_BOTTOM: number;
				public expandAction(action: androidx.leanback.widget.GuidedAction, withTransition: boolean): void;
				public static add(fragmentManager: globalAndroid.app.FragmentManager, fragment: androidx.leanback.app.GuidedStepFragment): number;
				public getSelectedButtonActionPosition(): number;
				public collapseSubActions(): void;
				public onCreateActionsStylist(): androidx.leanback.widget.GuidedActionsStylist;
				public findButtonActionById(id: number): androidx.leanback.widget.GuidedAction;
				public onCreateGuidance(savedInstanceState: globalAndroid.os.Bundle): androidx.leanback.widget.GuidanceStylist.Guidance;
				public onGuidedActionClicked(action: androidx.leanback.widget.GuidedAction): void;
				public onGuidedActionEditedAndProceed(action: androidx.leanback.widget.GuidedAction): number;
				public getUiStyle(): number;
				public constructor();
				public findActionById(id: number): androidx.leanback.widget.GuidedAction;
				public setActionsDiffCallback(diffCallback: androidx.leanback.widget.DiffCallback<androidx.leanback.widget.GuidedAction>): void;
				public getSelectedActionPosition(): number;
				public getGuidanceStylist(): androidx.leanback.widget.GuidanceStylist;
				public isExpanded(): boolean;
				/** @deprecated */
				public onSaveInstanceState(outState: globalAndroid.os.Bundle): void;
				public expandSubActions(action: androidx.leanback.widget.GuidedAction): void;
				public onAddSharedElementTransition(ft: globalAndroid.app.FragmentTransaction, disappearing: androidx.leanback.app.GuidedStepFragment): void;
				public setSelectedButtonActionPosition(position: number): void;
				/** @deprecated */
				public onCreateView(inflater: globalAndroid.view.LayoutInflater, container: globalAndroid.view.ViewGroup, savedInstanceState: globalAndroid.os.Bundle): globalAndroid.view.View;
				public onResume(): void;
				public onSaveInstanceState(outState: globalAndroid.os.Bundle): void;
				public static add(fragmentManager: globalAndroid.app.FragmentManager, fragment: androidx.leanback.app.GuidedStepFragment, id: number): number;
				public setActions(actions: java.util.List<androidx.leanback.widget.GuidedAction>): void;
				public onCreateGuidanceStylist(): androidx.leanback.widget.GuidanceStylist;
				public onCreateView(inflater: globalAndroid.view.LayoutInflater, container: globalAndroid.view.ViewGroup, savedInstanceState: globalAndroid.os.Bundle): globalAndroid.view.View;
				/** @deprecated */
				public constructor();
				public isSubActionsExpanded(): boolean;
				public onGuidedActionFocused(action: androidx.leanback.widget.GuidedAction): void;
				public onCreateButtonActions(actions: java.util.List<androidx.leanback.widget.GuidedAction>, savedInstanceState: globalAndroid.os.Bundle): void;
				public isFocusOutStartAllowed(): boolean;
				public isFocusOutEndAllowed(): boolean;
				public onDestroyView(): void;
				public notifyActionChanged(position: number): void;
				public onGuidedActionEditCanceled(action: androidx.leanback.widget.GuidedAction): void;
				public openInEditMode(action: androidx.leanback.widget.GuidedAction): void;
				public onProvideFragmentTransitions(): void;
				public static addAsRoot(activity: globalAndroid.app.Activity, fragment: androidx.leanback.app.GuidedStepFragment, id: number): number;
				public getGuidedButtonActionsStylist(): androidx.leanback.widget.GuidedActionsStylist;
				public collapseAction(withTransition: boolean): void;
				public findButtonActionPositionById(id: number): number;
				/** @deprecated */
				public onResume(): void;
				public static getCurrentGuidedStepFragment(fm: globalAndroid.app.FragmentManager): androidx.leanback.app.GuidedStepFragment;
				public getButtonActions(): java.util.List<androidx.leanback.widget.GuidedAction>;
				public onCreate(savedInstanceState: globalAndroid.os.Bundle): void;
				public notifyButtonActionChanged(position: number): void;
				public onTrimMemory(level: number): void;
				public setSelectedActionPosition(position: number): void;
				public onProvideTheme(): number;
				public getButtonActionItemView(position: number): globalAndroid.view.View;
				public setButtonActions(actions: java.util.List<androidx.leanback.widget.GuidedAction>): void;
				public finishGuidedStepFragments(): void;
				public onCreateButtonActionsStylist(): androidx.leanback.widget.GuidedActionsStylist;
				public onCreateBackgroundView(inflater: globalAndroid.view.LayoutInflater, container: globalAndroid.view.ViewGroup, savedInstanceState: globalAndroid.os.Bundle): globalAndroid.view.View;
				public getGuidedActionsStylist(): androidx.leanback.widget.GuidedActionsStylist;
				/** @deprecated */
				public onCreate(savedInstanceState: globalAndroid.os.Bundle): void;
				public onSubGuidedActionClicked(action: androidx.leanback.widget.GuidedAction): boolean;
				public popBackStackToGuidedStepFragment(guidedStepFragmentClass: java.lang.Class<any>, flags: number): void;
				/** @deprecated */
				public onCreateContextMenu(menu: globalAndroid.view.ContextMenu, v: globalAndroid.view.View, menuInfo: globalAndroid.view.ContextMenu.ContextMenuInfo): void;
				/** @deprecated */
				public onGuidedActionEdited(action: androidx.leanback.widget.GuidedAction): void;
				public findActionPositionById(id: number): number;
				/** @deprecated */
				public onDestroyView(): void;
				/** @deprecated */
				public onTrimMemory(level: number): void;
				public onCreateContextMenu(menu: globalAndroid.view.ContextMenu, v: globalAndroid.view.View, menuInfo: globalAndroid.view.ContextMenu.ContextMenuInfo): void;
				public setEntranceTransitionType(transitionType: number): void;
				public onCreateActions(actions: java.util.List<androidx.leanback.widget.GuidedAction>, savedInstanceState: globalAndroid.os.Bundle): void;
				public getActionItemView(position: number): globalAndroid.view.View;
				public setUiStyle(style: number): void;
				public getActions(): java.util.List<androidx.leanback.widget.GuidedAction>;
			}
			export module GuidedStepFragment {
				export class DummyFragment extends globalAndroid.app.Fragment {
					public static class: java.lang.Class<androidx.leanback.app.GuidedStepFragment.DummyFragment>;
					public onCreateContextMenu(menu: globalAndroid.view.ContextMenu, v: globalAndroid.view.View, menuInfo: globalAndroid.view.ContextMenu.ContextMenuInfo): void;
					public onTrimMemory(level: number): void;
					/** @deprecated */
					public constructor();
					public constructor();
					/** @deprecated */
					public onTrimMemory(level: number): void;
					public onCreateView(inflater: globalAndroid.view.LayoutInflater, container: globalAndroid.view.ViewGroup, savedInstanceState: globalAndroid.os.Bundle): globalAndroid.view.View;
					/** @deprecated */
					public onCreateView(inflater: globalAndroid.view.LayoutInflater, container: globalAndroid.view.ViewGroup, savedInstanceState: globalAndroid.os.Bundle): globalAndroid.view.View;
					/** @deprecated */
					public onCreateContextMenu(menu: globalAndroid.view.ContextMenu, v: globalAndroid.view.View, menuInfo: globalAndroid.view.ContextMenu.ContextMenuInfo): void;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module app {
			export class GuidedStepRootLayout extends globalAndroid.widget.LinearLayout {
				public static class: java.lang.Class<androidx.leanback.app.GuidedStepRootLayout>;
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
				public setFocusOutStart(focusOutStart: boolean): void;
				public requestChildFocus(child: globalAndroid.view.View, focused: globalAndroid.view.View): void;
				public createContextMenu(menu: globalAndroid.view.ContextMenu): void;
				public canResolveLayoutDirection(): boolean;
				public addView(child: globalAndroid.view.View, index: number, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public setFocusOutEnd(focusOutEnd: boolean): void;
				public onNestedPreFling(target: globalAndroid.view.View, velocityX: number, velocityY: number): boolean;
				public getParent(): globalAndroid.view.ViewParent;
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module app {
			export class GuidedStepSupportFragment extends androidx.fragment.app.Fragment implements androidx.leanback.widget.GuidedActionAdapter.FocusListener {
				public static class: java.lang.Class<androidx.leanback.app.GuidedStepSupportFragment>;
				public static EXTRA_UI_STYLE: string;
				public static UI_STYLE_REPLACE: number;
				public static UI_STYLE_DEFAULT: number;
				public static UI_STYLE_ENTRANCE: number;
				public static UI_STYLE_ACTIVITY_ROOT: number;
				public static SLIDE_FROM_SIDE: number;
				public static SLIDE_FROM_BOTTOM: number;
				public expandAction(action: androidx.leanback.widget.GuidedAction, withTransition: boolean): void;
				public getSelectedButtonActionPosition(): number;
				public collapseSubActions(): void;
				public onCreateActionsStylist(): androidx.leanback.widget.GuidedActionsStylist;
				public findButtonActionById(id: number): androidx.leanback.widget.GuidedAction;
				public onCreateGuidance(savedInstanceState: globalAndroid.os.Bundle): androidx.leanback.widget.GuidanceStylist.Guidance;
				public onGuidedActionClicked(action: androidx.leanback.widget.GuidedAction): void;
				public onGuidedActionEditedAndProceed(action: androidx.leanback.widget.GuidedAction): number;
				public getUiStyle(): number;
				public popBackStackToGuidedStepSupportFragment(guidedStepFragmentClass: java.lang.Class<any>, flags: number): void;
				public getLifecycle(): androidx.lifecycle.Lifecycle;
				public constructor();
				public findActionById(id: number): androidx.leanback.widget.GuidedAction;
				public setActionsDiffCallback(diffCallback: androidx.leanback.widget.DiffCallback<androidx.leanback.widget.GuidedAction>): void;
				public finishGuidedStepSupportFragments(): void;
				public getSelectedActionPosition(): number;
				public getGuidanceStylist(): androidx.leanback.widget.GuidanceStylist;
				public isExpanded(): boolean;
				public expandSubActions(action: androidx.leanback.widget.GuidedAction): void;
				public setSelectedButtonActionPosition(position: number): void;
				public onResume(): void;
				public onConfigurationChanged(newConfig: globalAndroid.content.res.Configuration): void;
				public onSaveInstanceState(outState: globalAndroid.os.Bundle): void;
				public setActions(actions: java.util.List<androidx.leanback.widget.GuidedAction>): void;
				public onCreateGuidanceStylist(): androidx.leanback.widget.GuidanceStylist;
				public onCreateView(inflater: globalAndroid.view.LayoutInflater, container: globalAndroid.view.ViewGroup, savedInstanceState: globalAndroid.os.Bundle): globalAndroid.view.View;
				public isSubActionsExpanded(): boolean;
				public onGuidedActionFocused(action: androidx.leanback.widget.GuidedAction): void;
				public static addAsRoot(activity: androidx.fragment.app.FragmentActivity, fragment: androidx.leanback.app.GuidedStepSupportFragment, id: number): number;
				public onCreateButtonActions(actions: java.util.List<androidx.leanback.widget.GuidedAction>, savedInstanceState: globalAndroid.os.Bundle): void;
				public isFocusOutStartAllowed(): boolean;
				public isFocusOutEndAllowed(): boolean;
				public onDestroyView(): void;
				public notifyActionChanged(position: number): void;
				public onGuidedActionEditCanceled(action: androidx.leanback.widget.GuidedAction): void;
				public static add(fragmentManager: androidx.fragment.app.FragmentManager, fragment: androidx.leanback.app.GuidedStepSupportFragment, id: number): number;
				public openInEditMode(action: androidx.leanback.widget.GuidedAction): void;
				public onProvideFragmentTransitions(): void;
				public getViewModelStore(): androidx.lifecycle.ViewModelStore;
				public getGuidedButtonActionsStylist(): androidx.leanback.widget.GuidedActionsStylist;
				public collapseAction(withTransition: boolean): void;
				public findButtonActionPositionById(id: number): number;
				public getButtonActions(): java.util.List<androidx.leanback.widget.GuidedAction>;
				public onCreate(savedInstanceState: globalAndroid.os.Bundle): void;
				public notifyButtonActionChanged(position: number): void;
				public getSavedStateRegistry(): androidx.savedstate.SavedStateRegistry;
				public setSelectedActionPosition(position: number): void;
				public onProvideTheme(): number;
				public getButtonActionItemView(position: number): globalAndroid.view.View;
				public setButtonActions(actions: java.util.List<androidx.leanback.widget.GuidedAction>): void;
				public onCreateButtonActionsStylist(): androidx.leanback.widget.GuidedActionsStylist;
				public onCreateBackgroundView(inflater: globalAndroid.view.LayoutInflater, container: globalAndroid.view.ViewGroup, savedInstanceState: globalAndroid.os.Bundle): globalAndroid.view.View;
				public getGuidedActionsStylist(): androidx.leanback.widget.GuidedActionsStylist;
				public onSubGuidedActionClicked(action: androidx.leanback.widget.GuidedAction): boolean;
				/** @deprecated */
				public onGuidedActionEdited(action: androidx.leanback.widget.GuidedAction): void;
				public static getCurrentGuidedStepSupportFragment(fm: androidx.fragment.app.FragmentManager): androidx.leanback.app.GuidedStepSupportFragment;
				public onAddSharedElementTransition(ft: androidx.fragment.app.FragmentTransaction, disappearing: androidx.leanback.app.GuidedStepSupportFragment): void;
				public findActionPositionById(id: number): number;
				public onLowMemory(): void;
				public onCreateContextMenu(menu: globalAndroid.view.ContextMenu, v: globalAndroid.view.View, menuInfo: globalAndroid.view.ContextMenu.ContextMenuInfo): void;
				public setEntranceTransitionType(transitionType: number): void;
				public onCreateActions(actions: java.util.List<androidx.leanback.widget.GuidedAction>, savedInstanceState: globalAndroid.os.Bundle): void;
				public getActionItemView(position: number): globalAndroid.view.View;
				public setUiStyle(style: number): void;
				public getActions(): java.util.List<androidx.leanback.widget.GuidedAction>;
				public constructor(contentLayoutId: number);
				public static add(fragmentManager: androidx.fragment.app.FragmentManager, fragment: androidx.leanback.app.GuidedStepSupportFragment): number;
			}
			export module GuidedStepSupportFragment {
				export class DummyFragment extends androidx.fragment.app.Fragment {
					public static class: java.lang.Class<androidx.leanback.app.GuidedStepSupportFragment.DummyFragment>;
					public onCreateContextMenu(menu: globalAndroid.view.ContextMenu, v: globalAndroid.view.View, menuInfo: globalAndroid.view.ContextMenu.ContextMenuInfo): void;
					public constructor(contentLayoutId: number);
					public constructor();
					public onCreateView(inflater: globalAndroid.view.LayoutInflater, container: globalAndroid.view.ViewGroup, savedInstanceState: globalAndroid.os.Bundle): globalAndroid.view.View;
					public getSavedStateRegistry(): androidx.savedstate.SavedStateRegistry;
					public onConfigurationChanged(newConfig: globalAndroid.content.res.Configuration): void;
					public getViewModelStore(): androidx.lifecycle.ViewModelStore;
					public getLifecycle(): androidx.lifecycle.Lifecycle;
					public onLowMemory(): void;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module app {
			export class HeadersFragment extends androidx.leanback.app.BaseRowFragment {
				public static class: java.lang.Class<androidx.leanback.app.HeadersFragment>;
				public onTransitionStart(): void;
				public onTrimMemory(level: number): void;
				public onCreateContextMenu(menu: globalAndroid.view.ContextMenu, v: globalAndroid.view.View, menuInfo: globalAndroid.view.ContextMenu.ContextMenuInfo): void;
				/** @deprecated */
				public constructor();
				public onViewCreated(view: globalAndroid.view.View, savedInstanceState: globalAndroid.os.Bundle): void;
				public onTransitionEnd(): void;
				public setOnHeaderViewSelectedListener(listener: androidx.leanback.app.HeadersFragment.OnHeaderViewSelectedListener): void;
				/** @deprecated */
				public onTrimMemory(level: number): void;
				public setOnHeaderClickedListener(listener: androidx.leanback.app.HeadersFragment.OnHeaderClickedListener): void;
				public isScrolling(): boolean;
				/** @deprecated */
				public onCreateContextMenu(menu: globalAndroid.view.ContextMenu, v: globalAndroid.view.View, menuInfo: globalAndroid.view.ContextMenu.ContextMenuInfo): void;
				public constructor();
			}
			export module HeadersFragment {
				export class NoOverlappingFrameLayout extends globalAndroid.widget.FrameLayout {
					public static class: java.lang.Class<androidx.leanback.app.HeadersFragment.NoOverlappingFrameLayout>;
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
					public hasOverlappingRendering(): boolean;
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
				export class OnHeaderClickedListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.app.HeadersFragment.OnHeaderClickedListener>;
					/**
					 * Constructs a new instance of the androidx.leanback.app.HeadersFragment$OnHeaderClickedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onHeaderClicked(viewHolder0: androidx.leanback.widget.RowHeaderPresenter.ViewHolder, row1: androidx.leanback.widget.Row): void;
					});
					public constructor();
					public onHeaderClicked(viewHolder0: androidx.leanback.widget.RowHeaderPresenter.ViewHolder, row1: androidx.leanback.widget.Row): void;
				}
				export class OnHeaderViewSelectedListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.app.HeadersFragment.OnHeaderViewSelectedListener>;
					/**
					 * Constructs a new instance of the androidx.leanback.app.HeadersFragment$OnHeaderViewSelectedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onHeaderSelected(viewHolder0: androidx.leanback.widget.RowHeaderPresenter.ViewHolder, row1: androidx.leanback.widget.Row): void;
					});
					public constructor();
					public onHeaderSelected(viewHolder0: androidx.leanback.widget.RowHeaderPresenter.ViewHolder, row1: androidx.leanback.widget.Row): void;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module app {
			export class HeadersSupportFragment extends androidx.leanback.app.BaseRowSupportFragment {
				public static class: java.lang.Class<androidx.leanback.app.HeadersSupportFragment>;
				public onTransitionStart(): void;
				public getViewModelStore(): androidx.lifecycle.ViewModelStore;
				public setOnHeaderClickedListener(listener: androidx.leanback.app.HeadersSupportFragment.OnHeaderClickedListener): void;
				public onConfigurationChanged(newConfig: globalAndroid.content.res.Configuration): void;
				public onTransitionEnd(): void;
				public onLowMemory(): void;
				public getLifecycle(): androidx.lifecycle.Lifecycle;
				public constructor();
				public getSavedStateRegistry(): androidx.savedstate.SavedStateRegistry;
				public onCreateContextMenu(menu: globalAndroid.view.ContextMenu, v: globalAndroid.view.View, menuInfo: globalAndroid.view.ContextMenu.ContextMenuInfo): void;
				public setOnHeaderViewSelectedListener(listener: androidx.leanback.app.HeadersSupportFragment.OnHeaderViewSelectedListener): void;
				public onViewCreated(view: globalAndroid.view.View, savedInstanceState: globalAndroid.os.Bundle): void;
				public constructor(contentLayoutId: number);
				public isScrolling(): boolean;
			}
			export module HeadersSupportFragment {
				export class NoOverlappingFrameLayout extends globalAndroid.widget.FrameLayout {
					public static class: java.lang.Class<androidx.leanback.app.HeadersSupportFragment.NoOverlappingFrameLayout>;
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
					public hasOverlappingRendering(): boolean;
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
				export class OnHeaderClickedListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.app.HeadersSupportFragment.OnHeaderClickedListener>;
					/**
					 * Constructs a new instance of the androidx.leanback.app.HeadersSupportFragment$OnHeaderClickedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onHeaderClicked(viewHolder0: androidx.leanback.widget.RowHeaderPresenter.ViewHolder, row1: androidx.leanback.widget.Row): void;
					});
					public constructor();
					public onHeaderClicked(viewHolder0: androidx.leanback.widget.RowHeaderPresenter.ViewHolder, row1: androidx.leanback.widget.Row): void;
				}
				export class OnHeaderViewSelectedListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.app.HeadersSupportFragment.OnHeaderViewSelectedListener>;
					/**
					 * Constructs a new instance of the androidx.leanback.app.HeadersSupportFragment$OnHeaderViewSelectedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onHeaderSelected(viewHolder0: androidx.leanback.widget.RowHeaderPresenter.ViewHolder, row1: androidx.leanback.widget.Row): void;
					});
					public constructor();
					public onHeaderSelected(viewHolder0: androidx.leanback.widget.RowHeaderPresenter.ViewHolder, row1: androidx.leanback.widget.Row): void;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module app {
			export class ListRowDataAdapter extends androidx.leanback.widget.ObjectAdapter {
				public static class: java.lang.Class<androidx.leanback.app.ListRowDataAdapter>;
				public static ON_ITEM_RANGE_CHANGED: number;
				public static ON_ITEM_RANGE_INSERTED: number;
				public static ON_ITEM_RANGE_REMOVED: number;
				public static ON_CHANGED: number;
				public constructor(adapter: androidx.leanback.widget.ObjectAdapter);
				public get(index: number): any;
				public constructor(presenter: androidx.leanback.widget.Presenter);
				public constructor(presenterSelector: androidx.leanback.widget.PresenterSelector);
				public constructor();
				public size(): number;
				public get(int0: number): any;
			}
			export module ListRowDataAdapter {
				export class QueueBasedDataObserver extends androidx.leanback.widget.ObjectAdapter.DataObserver {
					public static class: java.lang.Class<androidx.leanback.app.ListRowDataAdapter.QueueBasedDataObserver>;
					public onChanged(): void;
				}
				export class SimpleDataObserver extends androidx.leanback.widget.ObjectAdapter.DataObserver {
					public static class: java.lang.Class<androidx.leanback.app.ListRowDataAdapter.SimpleDataObserver>;
					public onChanged(): void;
					public onItemRangeChanged(positionStart: number, itemCount: number, payload: any): void;
					public onItemRangeRemoved(positionStart: number, itemCount: number): void;
					public onItemRangeInserted(positionStart: number, itemCount: number): void;
					public onItemRangeChanged(positionStart: number, itemCount: number): void;
					public onEventFired(eventType: number, positionStart: number, itemCount: number): void;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module app {
			export abstract class OnboardingFragment extends globalAndroid.app.Fragment {
				public static class: java.lang.Class<androidx.leanback.app.OnboardingFragment>;
				/** @deprecated */
				public onViewCreated(view: globalAndroid.view.View, savedInstanceState: globalAndroid.os.Bundle): void;
				public getLogoResourceId(): number;
				public setIconResouceId(resourceId: number): void;
				public setDescriptionViewTextColor(color: number): void;
				public onCreateContentView(layoutInflater0: globalAndroid.view.LayoutInflater, viewGroup1: globalAndroid.view.ViewGroup): globalAndroid.view.View;
				public setTitleViewTextColor(color: number): void;
				public getPageDescription(int0: number): string;
				public setArrowBackgroundColor(color: number): void;
				public constructor();
				public getArrowColor(): number;
				public onTrimMemory(level: number): void;
				public onViewCreated(view: globalAndroid.view.View, savedInstanceState: globalAndroid.os.Bundle): void;
				public getArrowBackgroundColor(): number;
				public onProvideTheme(): number;
				public getPageCount(): number;
				public onFinishFragment(): void;
				public getDescriptionViewTextColor(): number;
				public onCreateEnterAnimation(): globalAndroid.animation.Animator;
				public getPageTitle(int0: number): string;
				public moveToPreviousPage(): void;
				/** @deprecated */
				public onSaveInstanceState(outState: globalAndroid.os.Bundle): void;
				public onLogoAnimationFinished(): void;
				public getDotBackgroundColor(): number;
				/** @deprecated */
				public onCreateContextMenu(menu: globalAndroid.view.ContextMenu, v: globalAndroid.view.View, menuInfo: globalAndroid.view.ContextMenu.ContextMenuInfo): void;
				public moveToNextPage(): void;
				public setLogoResourceId(id: number): void;
				/** @deprecated */
				public onCreateView(inflater: globalAndroid.view.LayoutInflater, container: globalAndroid.view.ViewGroup, savedInstanceState: globalAndroid.os.Bundle): globalAndroid.view.View;
				public getTitleViewTextColor(): number;
				public setStartButtonText(text: string): void;
				/** @deprecated */
				public onTrimMemory(level: number): void;
				public onSaveInstanceState(outState: globalAndroid.os.Bundle): void;
				public setArrowColor(color: number): void;
				public onCreateView(inflater: globalAndroid.view.LayoutInflater, container: globalAndroid.view.ViewGroup, savedInstanceState: globalAndroid.os.Bundle): globalAndroid.view.View;
				public getCurrentPageIndex(): number;
				public onCreateContextMenu(menu: globalAndroid.view.ContextMenu, v: globalAndroid.view.View, menuInfo: globalAndroid.view.ContextMenu.ContextMenuInfo): void;
				/** @deprecated */
				public constructor();
				public onCreateDescriptionAnimator(): globalAndroid.animation.Animator;
				public setDotBackgroundColor(color: number): void;
				public getStartButtonText(): string;
				public onPageChanged(newPage: number, previousPage: number): void;
				public startEnterAnimation(force: boolean): void;
				public onCreateBackgroundView(layoutInflater0: globalAndroid.view.LayoutInflater, viewGroup1: globalAndroid.view.ViewGroup): globalAndroid.view.View;
				public getIconResourceId(): number;
				public onCreateForegroundView(layoutInflater0: globalAndroid.view.LayoutInflater, viewGroup1: globalAndroid.view.ViewGroup): globalAndroid.view.View;
				public onCreateTitleAnimator(): globalAndroid.animation.Animator;
				public isLogoAnimationFinished(): boolean;
				public onCreateLogoAnimation(): globalAndroid.animation.Animator;
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module app {
			export abstract class OnboardingSupportFragment extends androidx.fragment.app.Fragment {
				public static class: java.lang.Class<androidx.leanback.app.OnboardingSupportFragment>;
				public getLogoResourceId(): number;
				public setIconResouceId(resourceId: number): void;
				public setDescriptionViewTextColor(color: number): void;
				public getViewModelStore(): androidx.lifecycle.ViewModelStore;
				public onCreateContentView(layoutInflater0: globalAndroid.view.LayoutInflater, viewGroup1: globalAndroid.view.ViewGroup): globalAndroid.view.View;
				public setTitleViewTextColor(color: number): void;
				public getPageDescription(int0: number): string;
				public setArrowBackgroundColor(color: number): void;
				public getLifecycle(): androidx.lifecycle.Lifecycle;
				public constructor();
				public getArrowColor(): number;
				public getSavedStateRegistry(): androidx.savedstate.SavedStateRegistry;
				public onViewCreated(view: globalAndroid.view.View, savedInstanceState: globalAndroid.os.Bundle): void;
				public getArrowBackgroundColor(): number;
				public onProvideTheme(): number;
				public getPageCount(): number;
				public onFinishFragment(): void;
				public getDescriptionViewTextColor(): number;
				public onCreateEnterAnimation(): globalAndroid.animation.Animator;
				public getPageTitle(int0: number): string;
				public moveToPreviousPage(): void;
				public onLogoAnimationFinished(): void;
				public getDotBackgroundColor(): number;
				public moveToNextPage(): void;
				public setLogoResourceId(id: number): void;
				public getTitleViewTextColor(): number;
				public setStartButtonText(text: string): void;
				public onConfigurationChanged(newConfig: globalAndroid.content.res.Configuration): void;
				public onLowMemory(): void;
				public onSaveInstanceState(outState: globalAndroid.os.Bundle): void;
				public setArrowColor(color: number): void;
				public onCreateView(inflater: globalAndroid.view.LayoutInflater, container: globalAndroid.view.ViewGroup, savedInstanceState: globalAndroid.os.Bundle): globalAndroid.view.View;
				public getCurrentPageIndex(): number;
				public onCreateContextMenu(menu: globalAndroid.view.ContextMenu, v: globalAndroid.view.View, menuInfo: globalAndroid.view.ContextMenu.ContextMenuInfo): void;
				public onCreateDescriptionAnimator(): globalAndroid.animation.Animator;
				public setDotBackgroundColor(color: number): void;
				public getStartButtonText(): string;
				public onPageChanged(newPage: number, previousPage: number): void;
				public startEnterAnimation(force: boolean): void;
				public onCreateBackgroundView(layoutInflater0: globalAndroid.view.LayoutInflater, viewGroup1: globalAndroid.view.ViewGroup): globalAndroid.view.View;
				public getIconResourceId(): number;
				public constructor(contentLayoutId: number);
				public onCreateForegroundView(layoutInflater0: globalAndroid.view.LayoutInflater, viewGroup1: globalAndroid.view.ViewGroup): globalAndroid.view.View;
				public onCreateTitleAnimator(): globalAndroid.animation.Animator;
				public isLogoAnimationFinished(): boolean;
				public onCreateLogoAnimation(): globalAndroid.animation.Animator;
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module app {
			export class PermissionHelper extends java.lang.Object {
				public static class: java.lang.Class<androidx.leanback.app.PermissionHelper>;
				public static requestPermissions(fragment: globalAndroid.app.Fragment, permissions: native.Array<string>, requestCode: number): void;
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module app {
			export class PlaybackFragment extends globalAndroid.app.Fragment {
				public static class: java.lang.Class<androidx.leanback.app.PlaybackFragment>;
				public static BG_NONE: number;
				public static BG_DARK: number;
				public static BG_LIGHT: number;
				/** @deprecated */
				public onViewCreated(view: globalAndroid.view.View, savedInstanceState: globalAndroid.os.Bundle): void;
				public hideControlsOverlay(runAnimation: boolean): void;
				public onVideoSizeChanged(videoWidth: number, videoHeight: number): void;
				public isControlsOverlayAutoHideEnabled(): boolean;
				/** @deprecated */
				public onPause(): void;
				public setHostCallback(hostCallback: androidx.leanback.media.PlaybackGlueHost.HostCallback): void;
				public setOnPlaybackItemViewClickedListener(listener: androidx.leanback.widget.BaseOnItemViewClickedListener<any>): void;
				public constructor();
				public notifyPlaybackRowChanged(): void;
				public resetFocus(): void;
				public getProgressBarManager(): androidx.leanback.app.ProgressBarManager;
				public setSelectedPosition(position: number): void;
				public setPlaybackRowPresenter(presenter: androidx.leanback.widget.PlaybackRowPresenter): void;
				/** @deprecated */
				public setFadingEnabled(enabled: boolean): void;
				/** @deprecated */
				public onCreateView(inflater: globalAndroid.view.LayoutInflater, container: globalAndroid.view.ViewGroup, savedInstanceState: globalAndroid.os.Bundle): globalAndroid.view.View;
				public setAdapter(adapter: androidx.leanback.widget.ObjectAdapter): void;
				public onResume(): void;
				public isControlsOverlayVisible(): boolean;
				public getBackgroundType(): number;
				public onCreateView(inflater: globalAndroid.view.LayoutInflater, container: globalAndroid.view.ViewGroup, savedInstanceState: globalAndroid.os.Bundle): globalAndroid.view.View;
				/** @deprecated */
				public constructor();
				public tickle(): void;
				public onError(errorCode: number, errorMessage: string): void;
				public setBackgroundType(type: number): void;
				public onStart(): void;
				public setFadeCompleteListener(listener: androidx.leanback.app.PlaybackFragment.OnFadeCompleteListener): void;
				public onDestroyView(): void;
				public setPlaybackRow(row: androidx.leanback.widget.Row): void;
				/** @deprecated */
				public onStart(): void;
				public setSelectedPosition(position: number, smooth: boolean): void;
				public setControlsOverlayAutoHideEnabled(enabled: boolean): void;
				/** @deprecated */
				public onResume(): void;
				public onPause(): void;
				/** @deprecated */
				public isFadingEnabled(): boolean;
				public setOnItemViewSelectedListener(listener: androidx.leanback.widget.BaseOnItemViewSelectedListener<any>): void;
				public onCreate(savedInstanceState: globalAndroid.os.Bundle): void;
				public setPlaybackSeekUiClient(client: androidx.leanback.widget.PlaybackSeekUi.Client): void;
				public onTrimMemory(level: number): void;
				public onViewCreated(view: globalAndroid.view.View, savedInstanceState: globalAndroid.os.Bundle): void;
				public setOnKeyInterceptListener(handler: globalAndroid.view.View.OnKeyListener): void;
				public onStop(): void;
				/** @deprecated */
				public onCreate(savedInstanceState: globalAndroid.os.Bundle): void;
				public setOnItemViewClickedListener(listener: androidx.leanback.widget.BaseOnItemViewClickedListener<any>): void;
				/** @deprecated */
				public onCreateContextMenu(menu: globalAndroid.view.ContextMenu, v: globalAndroid.view.View, menuInfo: globalAndroid.view.ContextMenu.ContextMenuInfo): void;
				public showControlsOverlay(runAnimation: boolean): void;
				/** @deprecated */
				public onDestroyView(): void;
				/** @deprecated */
				public onTrimMemory(level: number): void;
				public onCreateContextMenu(menu: globalAndroid.view.ContextMenu, v: globalAndroid.view.View, menuInfo: globalAndroid.view.ContextMenu.ContextMenuInfo): void;
				public getAdapter(): androidx.leanback.widget.ObjectAdapter;
				/** @deprecated */
				public onDestroy(): void;
				/** @deprecated */
				public onStop(): void;
				/** @deprecated */
				public fadeOut(): void;
				public onBufferingStateChanged(start: boolean): void;
				public onDestroy(): void;
				public getFadeCompleteListener(): androidx.leanback.app.PlaybackFragment.OnFadeCompleteListener;
			}
			export module PlaybackFragment {
				export class OnFadeCompleteListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.app.PlaybackFragment.OnFadeCompleteListener>;
					public onFadeOutComplete(): void;
					public constructor();
					public onFadeInComplete(): void;
				}
				export class SetSelectionRunnable extends java.lang.Object implements java.lang.Runnable {
					public static class: java.lang.Class<androidx.leanback.app.PlaybackFragment.SetSelectionRunnable>;
					public run(): void;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module app {
			export class PlaybackFragmentGlueHost extends androidx.leanback.media.PlaybackGlueHost implements androidx.leanback.widget.PlaybackSeekUi {
				public static class: java.lang.Class<androidx.leanback.app.PlaybackFragmentGlueHost>;
				public hideControlsOverlay(runAnimation: boolean): void;
				public setControlsOverlayAutoHideEnabled(enabled: boolean): void;
				public setOnKeyInterceptListener(onKeyListener: globalAndroid.view.View.OnKeyListener): void;
				public isControlsOverlayAutoHideEnabled(): boolean;
				public isControlsOverlayVisible(): boolean;
				public setHostCallback(callback: androidx.leanback.media.PlaybackGlueHost.HostCallback): void;
				public setPlaybackSeekUiClient(client: androidx.leanback.widget.PlaybackSeekUi.Client): void;
				public constructor();
				public notifyPlaybackRowChanged(): void;
				public getPlayerCallback(): androidx.leanback.media.PlaybackGlueHost.PlayerCallback;
				public constructor(fragment: androidx.leanback.app.PlaybackFragment);
				public setOnActionClickedListener(listener: androidx.leanback.widget.OnActionClickedListener): void;
				/** @deprecated */
				public fadeOut(): void;
				public setPlaybackRowPresenter(presenter: androidx.leanback.widget.PlaybackRowPresenter): void;
				public setPlaybackRow(row: androidx.leanback.widget.Row): void;
				public fadeOut(): void;
				public showControlsOverlay(runAnimation: boolean): void;
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module app {
			export class PlaybackSupportFragment extends androidx.fragment.app.Fragment {
				public static class: java.lang.Class<androidx.leanback.app.PlaybackSupportFragment>;
				public static BG_NONE: number;
				public static BG_DARK: number;
				public static BG_LIGHT: number;
				public hideControlsOverlay(runAnimation: boolean): void;
				public onVideoSizeChanged(videoWidth: number, videoHeight: number): void;
				public getViewModelStore(): androidx.lifecycle.ViewModelStore;
				public setSelectedPosition(position: number, smooth: boolean): void;
				public setControlsOverlayAutoHideEnabled(enabled: boolean): void;
				public onPause(): void;
				public isControlsOverlayAutoHideEnabled(): boolean;
				/** @deprecated */
				public isFadingEnabled(): boolean;
				public setOnItemViewSelectedListener(listener: androidx.leanback.widget.BaseOnItemViewSelectedListener<any>): void;
				public getFadeCompleteListener(): androidx.leanback.app.PlaybackSupportFragment.OnFadeCompleteListener;
				public onCreate(savedInstanceState: globalAndroid.os.Bundle): void;
				public setHostCallback(hostCallback: androidx.leanback.media.PlaybackGlueHost.HostCallback): void;
				public setOnPlaybackItemViewClickedListener(listener: androidx.leanback.widget.BaseOnItemViewClickedListener<any>): void;
				public setPlaybackSeekUiClient(client: androidx.leanback.widget.PlaybackSeekUi.Client): void;
				public getLifecycle(): androidx.lifecycle.Lifecycle;
				public constructor();
				public getSavedStateRegistry(): androidx.savedstate.SavedStateRegistry;
				public notifyPlaybackRowChanged(): void;
				public onViewCreated(view: globalAndroid.view.View, savedInstanceState: globalAndroid.os.Bundle): void;
				public setOnKeyInterceptListener(handler: globalAndroid.view.View.OnKeyListener): void;
				public resetFocus(): void;
				public onStop(): void;
				public getProgressBarManager(): androidx.leanback.app.ProgressBarManager;
				public setSelectedPosition(position: number): void;
				public setPlaybackRowPresenter(presenter: androidx.leanback.widget.PlaybackRowPresenter): void;
				public setOnItemViewClickedListener(listener: androidx.leanback.widget.BaseOnItemViewClickedListener<any>): void;
				/** @deprecated */
				public setFadingEnabled(enabled: boolean): void;
				public showControlsOverlay(runAnimation: boolean): void;
				public setAdapter(adapter: androidx.leanback.widget.ObjectAdapter): void;
				public onResume(): void;
				public onConfigurationChanged(newConfig: globalAndroid.content.res.Configuration): void;
				public onLowMemory(): void;
				public isControlsOverlayVisible(): boolean;
				public getBackgroundType(): number;
				public setFadeCompleteListener(listener: androidx.leanback.app.PlaybackSupportFragment.OnFadeCompleteListener): void;
				public onCreateView(inflater: globalAndroid.view.LayoutInflater, container: globalAndroid.view.ViewGroup, savedInstanceState: globalAndroid.os.Bundle): globalAndroid.view.View;
				public onCreateContextMenu(menu: globalAndroid.view.ContextMenu, v: globalAndroid.view.View, menuInfo: globalAndroid.view.ContextMenu.ContextMenuInfo): void;
				public tickle(): void;
				public onError(errorCode: number, errorMessage: string): void;
				public setBackgroundType(type: number): void;
				public onStart(): void;
				public getAdapter(): androidx.leanback.widget.ObjectAdapter;
				/** @deprecated */
				public fadeOut(): void;
				public onBufferingStateChanged(start: boolean): void;
				public constructor(contentLayoutId: number);
				public onDestroy(): void;
				public onDestroyView(): void;
				public setPlaybackRow(row: androidx.leanback.widget.Row): void;
			}
			export module PlaybackSupportFragment {
				export class OnFadeCompleteListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.app.PlaybackSupportFragment.OnFadeCompleteListener>;
					public onFadeOutComplete(): void;
					public constructor();
					public onFadeInComplete(): void;
				}
				export class SetSelectionRunnable extends java.lang.Object implements java.lang.Runnable {
					public static class: java.lang.Class<androidx.leanback.app.PlaybackSupportFragment.SetSelectionRunnable>;
					public run(): void;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module app {
			export class PlaybackSupportFragmentGlueHost extends androidx.leanback.media.PlaybackGlueHost implements androidx.leanback.widget.PlaybackSeekUi {
				public static class: java.lang.Class<androidx.leanback.app.PlaybackSupportFragmentGlueHost>;
				public hideControlsOverlay(runAnimation: boolean): void;
				public setControlsOverlayAutoHideEnabled(enabled: boolean): void;
				public setOnKeyInterceptListener(onKeyListener: globalAndroid.view.View.OnKeyListener): void;
				public isControlsOverlayAutoHideEnabled(): boolean;
				public isControlsOverlayVisible(): boolean;
				public setHostCallback(callback: androidx.leanback.media.PlaybackGlueHost.HostCallback): void;
				public setPlaybackSeekUiClient(client: androidx.leanback.widget.PlaybackSeekUi.Client): void;
				public constructor();
				public notifyPlaybackRowChanged(): void;
				public getPlayerCallback(): androidx.leanback.media.PlaybackGlueHost.PlayerCallback;
				public setOnActionClickedListener(listener: androidx.leanback.widget.OnActionClickedListener): void;
				public constructor(fragment: androidx.leanback.app.PlaybackSupportFragment);
				/** @deprecated */
				public fadeOut(): void;
				public setPlaybackRowPresenter(presenter: androidx.leanback.widget.PlaybackRowPresenter): void;
				public setPlaybackRow(row: androidx.leanback.widget.Row): void;
				public fadeOut(): void;
				public showControlsOverlay(runAnimation: boolean): void;
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module app {
			export class ProgressBarManager extends java.lang.Object {
				public static class: java.lang.Class<androidx.leanback.app.ProgressBarManager>;
				public enableProgressBar(): void;
				public hide(): void;
				public setProgressBarView(progressBarView: globalAndroid.view.View): void;
				public setInitialDelay(initialDelay: number): void;
				public getInitialDelay(): number;
				public disableProgressBar(): void;
				public setRootView(rootView: globalAndroid.view.ViewGroup): void;
				public constructor();
				public show(): void;
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module app {
			export class RowsFragment extends androidx.leanback.app.BaseRowFragment implements androidx.leanback.app.BrowseFragment.MainFragmentRowsAdapterProvider, androidx.leanback.app.BrowseFragment.MainFragmentAdapterProvider {
				public static class: java.lang.Class<androidx.leanback.app.RowsFragment>;
				public onTransitionPrepare(): boolean;
				public setSelectedPosition(position: number, smooth: boolean): void;
				/** @deprecated */
				public enableRowScaling(enable: boolean): void;
				public getRowViewHolder(position: number): androidx.leanback.widget.RowPresenter.ViewHolder;
				public onTransitionEnd(): void;
				public getOnItemViewClickedListener(): androidx.leanback.widget.BaseOnItemViewClickedListener<any>;
				public setOnItemViewSelectedListener(listener: androidx.leanback.widget.BaseOnItemViewSelectedListener<any>): void;
				public getMainFragmentAdapter(): androidx.leanback.app.BrowseFragment.MainFragmentAdapter<any>;
				public onCreate(savedInstanceState: globalAndroid.os.Bundle): void;
				public constructor();
				public onTrimMemory(level: number): void;
				public setSelectedPosition(rowPosition: number, smooth: boolean, rowHolderTask: androidx.leanback.widget.Presenter.ViewHolderTask): void;
				public onViewCreated(view: globalAndroid.view.View, savedInstanceState: globalAndroid.os.Bundle): void;
				/** @deprecated */
				public onCreate(savedInstanceState: globalAndroid.os.Bundle): void;
				public setSelectedPosition(position: number): void;
				public isScrolling(): boolean;
				public getMainFragmentRowsAdapter(): androidx.leanback.app.BrowseFragment.MainFragmentRowsAdapter<any>;
				public setOnItemViewClickedListener(listener: androidx.leanback.widget.BaseOnItemViewClickedListener<any>): void;
				/** @deprecated */
				public onCreateContextMenu(menu: globalAndroid.view.ContextMenu, v: globalAndroid.view.View, menuInfo: globalAndroid.view.ContextMenu.ContextMenuInfo): void;
				public getOnItemViewSelectedListener(): androidx.leanback.widget.BaseOnItemViewSelectedListener<any>;
				public setEntranceTransitionState(afterTransition: boolean): void;
				public findGridViewFromRoot(view: globalAndroid.view.View): androidx.leanback.widget.VerticalGridView;
				public setAlignment(windowAlignOffsetFromTop: number): void;
				/** @deprecated */
				public onTrimMemory(level: number): void;
				public onCreateContextMenu(menu: globalAndroid.view.ContextMenu, v: globalAndroid.view.View, menuInfo: globalAndroid.view.ContextMenu.ContextMenuInfo): void;
				/** @deprecated */
				public constructor();
				public onDestroyView(): void;
				public findRowViewHolderByPosition(position: number): androidx.leanback.widget.RowPresenter.ViewHolder;
				public setExpand(expand: boolean): void;
				public setAlignment(windowAlignOffsetTop: number): void;
			}
			export module RowsFragment {
				export class MainFragmentAdapter extends androidx.leanback.app.BrowseFragment.MainFragmentAdapter<androidx.leanback.app.RowsFragment> {
					public static class: java.lang.Class<androidx.leanback.app.RowsFragment.MainFragmentAdapter>;
					public onTransitionStart(): void;
					public constructor(fragment: any);
					public setEntranceTransitionState(state: boolean): void;
					public isScrolling(): boolean;
					public setAlignment(windowAlignOffsetFromTop: number): void;
					public onTransitionEnd(): void;
					public onTransitionPrepare(): boolean;
					public setExpand(expand: boolean): void;
					public constructor(fragment: androidx.leanback.app.RowsFragment);
				}
				export class MainFragmentRowsAdapter extends androidx.leanback.app.BrowseFragment.MainFragmentRowsAdapter<androidx.leanback.app.RowsFragment> {
					public static class: java.lang.Class<androidx.leanback.app.RowsFragment.MainFragmentRowsAdapter>;
					public constructor(fragment: any);
					public setSelectedPosition(rowPosition: number, smooth: boolean): void;
					public setOnItemViewClickedListener(listener: androidx.leanback.widget.OnItemViewClickedListener): void;
					public setAdapter(adapter: androidx.leanback.widget.ObjectAdapter): void;
					public findRowViewHolderByPosition(position: number): androidx.leanback.widget.RowPresenter.ViewHolder;
					public setSelectedPosition(rowPosition: number, smooth: boolean, rowHolderTask: androidx.leanback.widget.Presenter.ViewHolderTask): void;
					public setOnItemViewSelectedListener(listener: androidx.leanback.widget.OnItemViewSelectedListener): void;
					public getSelectedPosition(): number;
					public constructor(fragment: androidx.leanback.app.RowsFragment);
				}
				export class RowViewHolderExtra extends java.lang.Object implements globalAndroid.animation.TimeAnimator.TimeListener {
					public static class: java.lang.Class<androidx.leanback.app.RowsFragment.RowViewHolderExtra>;
					public onTimeUpdate(animation: globalAndroid.animation.TimeAnimator, totalTime: number, deltaTime: number): void;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module app {
			export class RowsSupportFragment extends androidx.leanback.app.BaseRowSupportFragment implements androidx.leanback.app.BrowseSupportFragment.MainFragmentRowsAdapterProvider, androidx.leanback.app.BrowseSupportFragment.MainFragmentAdapterProvider {
				public static class: java.lang.Class<androidx.leanback.app.RowsSupportFragment>;
				public getMainFragmentAdapter(): androidx.leanback.app.BrowseSupportFragment.MainFragmentAdapter<any>;
				public getViewModelStore(): androidx.lifecycle.ViewModelStore;
				public onTransitionPrepare(): boolean;
				public setSelectedPosition(position: number, smooth: boolean): void;
				/** @deprecated */
				public enableRowScaling(enable: boolean): void;
				public getRowViewHolder(position: number): androidx.leanback.widget.RowPresenter.ViewHolder;
				public onTransitionEnd(): void;
				public getOnItemViewClickedListener(): androidx.leanback.widget.BaseOnItemViewClickedListener<any>;
				public setOnItemViewSelectedListener(listener: androidx.leanback.widget.BaseOnItemViewSelectedListener<any>): void;
				public onCreate(savedInstanceState: globalAndroid.os.Bundle): void;
				public getLifecycle(): androidx.lifecycle.Lifecycle;
				public constructor();
				public getSavedStateRegistry(): androidx.savedstate.SavedStateRegistry;
				public setSelectedPosition(rowPosition: number, smooth: boolean, rowHolderTask: androidx.leanback.widget.Presenter.ViewHolderTask): void;
				public onViewCreated(view: globalAndroid.view.View, savedInstanceState: globalAndroid.os.Bundle): void;
				public getMainFragmentRowsAdapter(): androidx.leanback.app.BrowseSupportFragment.MainFragmentRowsAdapter<any>;
				public setSelectedPosition(position: number): void;
				public isScrolling(): boolean;
				public setOnItemViewClickedListener(listener: androidx.leanback.widget.BaseOnItemViewClickedListener<any>): void;
				public getOnItemViewSelectedListener(): androidx.leanback.widget.BaseOnItemViewSelectedListener<any>;
				public setEntranceTransitionState(afterTransition: boolean): void;
				public onConfigurationChanged(newConfig: globalAndroid.content.res.Configuration): void;
				public onLowMemory(): void;
				public findGridViewFromRoot(view: globalAndroid.view.View): androidx.leanback.widget.VerticalGridView;
				public setAlignment(windowAlignOffsetFromTop: number): void;
				public onCreateContextMenu(menu: globalAndroid.view.ContextMenu, v: globalAndroid.view.View, menuInfo: globalAndroid.view.ContextMenu.ContextMenuInfo): void;
				public constructor(contentLayoutId: number);
				public onDestroyView(): void;
				public findRowViewHolderByPosition(position: number): androidx.leanback.widget.RowPresenter.ViewHolder;
				public setExpand(expand: boolean): void;
				public setAlignment(windowAlignOffsetTop: number): void;
			}
			export module RowsSupportFragment {
				export class MainFragmentAdapter extends androidx.leanback.app.BrowseSupportFragment.MainFragmentAdapter<androidx.leanback.app.RowsSupportFragment> {
					public static class: java.lang.Class<androidx.leanback.app.RowsSupportFragment.MainFragmentAdapter>;
					public onTransitionStart(): void;
					public constructor(fragment: any);
					public setEntranceTransitionState(state: boolean): void;
					public isScrolling(): boolean;
					public setAlignment(windowAlignOffsetFromTop: number): void;
					public onTransitionEnd(): void;
					public constructor(fragment: androidx.leanback.app.RowsSupportFragment);
					public onTransitionPrepare(): boolean;
					public setExpand(expand: boolean): void;
				}
				export class MainFragmentRowsAdapter extends androidx.leanback.app.BrowseSupportFragment.MainFragmentRowsAdapter<androidx.leanback.app.RowsSupportFragment> {
					public static class: java.lang.Class<androidx.leanback.app.RowsSupportFragment.MainFragmentRowsAdapter>;
					public constructor(fragment: any);
					public setSelectedPosition(rowPosition: number, smooth: boolean): void;
					public setOnItemViewClickedListener(listener: androidx.leanback.widget.OnItemViewClickedListener): void;
					public setAdapter(adapter: androidx.leanback.widget.ObjectAdapter): void;
					public findRowViewHolderByPosition(position: number): androidx.leanback.widget.RowPresenter.ViewHolder;
					public setSelectedPosition(rowPosition: number, smooth: boolean, rowHolderTask: androidx.leanback.widget.Presenter.ViewHolderTask): void;
					public setOnItemViewSelectedListener(listener: androidx.leanback.widget.OnItemViewSelectedListener): void;
					public constructor(fragment: androidx.leanback.app.RowsSupportFragment);
					public getSelectedPosition(): number;
				}
				export class RowViewHolderExtra extends java.lang.Object implements globalAndroid.animation.TimeAnimator.TimeListener {
					public static class: java.lang.Class<androidx.leanback.app.RowsSupportFragment.RowViewHolderExtra>;
					public onTimeUpdate(animation: globalAndroid.animation.TimeAnimator, totalTime: number, deltaTime: number): void;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module app {
			export class SearchFragment extends globalAndroid.app.Fragment {
				public static class: java.lang.Class<androidx.leanback.app.SearchFragment>;
				/** @deprecated */
				public onStart(): void;
				public static createArgs(bundle0: globalAndroid.os.Bundle, query: string): globalAndroid.os.Bundle;
				/** @deprecated */
				public onResume(): void;
				public onPause(): void;
				public onCreate(savedInstanceState: globalAndroid.os.Bundle): void;
				/** @deprecated */
				public onPause(): void;
				public displayCompletions(completions: java.util.List<string>): void;
				public constructor();
				public onTrimMemory(level: number): void;
				public onRequestPermissionsResult(requestCode: number, permissions: native.Array<string>, grantResults: native.Array<number>): void;
				/** @deprecated */
				public onCreate(savedInstanceState: globalAndroid.os.Bundle): void;
				public setSearchAffordanceColorsInListening(colors: androidx.leanback.widget.SearchOrbView.Colors): void;
				public setSearchQuery(intent: globalAndroid.content.Intent, submit: boolean): void;
				public setTitle(title: string): void;
				public getBadgeDrawable(): globalAndroid.graphics.drawable.Drawable;
				/** @deprecated */
				public setSpeechRecognitionCallback(callback: androidx.leanback.widget.SpeechRecognitionCallback): void;
				/** @deprecated */
				public onCreateContextMenu(menu: globalAndroid.view.ContextMenu, v: globalAndroid.view.View, menuInfo: globalAndroid.view.ContextMenu.ContextMenuInfo): void;
				public static newInstance(query: string): androidx.leanback.app.SearchFragment;
				public getRecognizerIntent(): globalAndroid.content.Intent;
				/** @deprecated */
				public onCreateView(inflater: globalAndroid.view.LayoutInflater, container: globalAndroid.view.ViewGroup, savedInstanceState: globalAndroid.os.Bundle): globalAndroid.view.View;
				public setSearchQuery(query: string, submit: boolean): void;
				public onResume(): void;
				public setOnItemViewSelectedListener(listener: androidx.leanback.widget.OnItemViewSelectedListener): void;
				public getRowsFragment(): androidx.leanback.app.RowsFragment;
				/** @deprecated */
				public onTrimMemory(level: number): void;
				/** @deprecated */
				public onRequestPermissionsResult(requestCode: number, permissions: native.Array<string>, grantResults: native.Array<number>): void;
				public static createArgs(bundle0: globalAndroid.os.Bundle, query: string, title: string): globalAndroid.os.Bundle;
				public getTitle(): string;
				public onCreateView(inflater: globalAndroid.view.LayoutInflater, container: globalAndroid.view.ViewGroup, savedInstanceState: globalAndroid.os.Bundle): globalAndroid.view.View;
				public startRecognition(): void;
				public setSearchResultProvider(searchResultProvider: androidx.leanback.app.SearchFragment.SearchResultProvider): void;
				public setOnItemViewClickedListener(listener: androidx.leanback.widget.OnItemViewClickedListener): void;
				public onCreateContextMenu(menu: globalAndroid.view.ContextMenu, v: globalAndroid.view.View, menuInfo: globalAndroid.view.ContextMenu.ContextMenuInfo): void;
				/** @deprecated */
				public constructor();
				public displayCompletions(completions: native.Array<globalAndroid.view.inputmethod.CompletionInfo>): void;
				public onStart(): void;
				/** @deprecated */
				public onDestroy(): void;
				public setBadgeDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public setSearchAffordanceColors(colors: androidx.leanback.widget.SearchOrbView.Colors): void;
				public onDestroy(): void;
			}
			export module SearchFragment {
				export class ExternalQuery extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.app.SearchFragment.ExternalQuery>;
				}
				export class SearchResultProvider extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.app.SearchFragment.SearchResultProvider>;
					/**
					 * Constructs a new instance of the androidx.leanback.app.SearchFragment$SearchResultProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getResultsAdapter(): androidx.leanback.widget.ObjectAdapter;
						onQueryTextChange(string0: string): boolean;
						onQueryTextSubmit(string0: string): boolean;
					});
					public constructor();
					public onQueryTextChange(string0: string): boolean;
					public onQueryTextSubmit(string0: string): boolean;
					public getResultsAdapter(): androidx.leanback.widget.ObjectAdapter;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module app {
			export class SearchSupportFragment extends androidx.fragment.app.Fragment {
				public static class: java.lang.Class<androidx.leanback.app.SearchSupportFragment>;
				public getViewModelStore(): androidx.lifecycle.ViewModelStore;
				public static createArgs(bundle0: globalAndroid.os.Bundle, query: string): globalAndroid.os.Bundle;
				public onPause(): void;
				public onCreate(savedInstanceState: globalAndroid.os.Bundle): void;
				public setSearchResultProvider(searchResultProvider: androidx.leanback.app.SearchSupportFragment.SearchResultProvider): void;
				public displayCompletions(completions: java.util.List<string>): void;
				public getLifecycle(): androidx.lifecycle.Lifecycle;
				public constructor();
				public getSavedStateRegistry(): androidx.savedstate.SavedStateRegistry;
				public onRequestPermissionsResult(requestCode: number, permissions: native.Array<string>, grantResults: native.Array<number>): void;
				public setSearchAffordanceColorsInListening(colors: androidx.leanback.widget.SearchOrbView.Colors): void;
				public setSearchQuery(intent: globalAndroid.content.Intent, submit: boolean): void;
				public setTitle(title: string): void;
				public getBadgeDrawable(): globalAndroid.graphics.drawable.Drawable;
				/** @deprecated */
				public setSpeechRecognitionCallback(callback: androidx.leanback.widget.SpeechRecognitionCallback): void;
				public getRowsSupportFragment(): androidx.leanback.app.RowsSupportFragment;
				public getRecognizerIntent(): globalAndroid.content.Intent;
				public setSearchQuery(query: string, submit: boolean): void;
				public onResume(): void;
				public onConfigurationChanged(newConfig: globalAndroid.content.res.Configuration): void;
				public onLowMemory(): void;
				public static newInstance(query: string): androidx.leanback.app.SearchSupportFragment;
				public setOnItemViewSelectedListener(listener: androidx.leanback.widget.OnItemViewSelectedListener): void;
				public static createArgs(bundle0: globalAndroid.os.Bundle, query: string, title: string): globalAndroid.os.Bundle;
				public getTitle(): string;
				public onCreateView(inflater: globalAndroid.view.LayoutInflater, container: globalAndroid.view.ViewGroup, savedInstanceState: globalAndroid.os.Bundle): globalAndroid.view.View;
				public startRecognition(): void;
				public setOnItemViewClickedListener(listener: androidx.leanback.widget.OnItemViewClickedListener): void;
				public onCreateContextMenu(menu: globalAndroid.view.ContextMenu, v: globalAndroid.view.View, menuInfo: globalAndroid.view.ContextMenu.ContextMenuInfo): void;
				public displayCompletions(completions: native.Array<globalAndroid.view.inputmethod.CompletionInfo>): void;
				public onStart(): void;
				public setBadgeDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public setSearchAffordanceColors(colors: androidx.leanback.widget.SearchOrbView.Colors): void;
				public constructor(contentLayoutId: number);
				public onDestroy(): void;
			}
			export module SearchSupportFragment {
				export class ExternalQuery extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.app.SearchSupportFragment.ExternalQuery>;
				}
				export class SearchResultProvider extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.app.SearchSupportFragment.SearchResultProvider>;
					/**
					 * Constructs a new instance of the androidx.leanback.app.SearchSupportFragment$SearchResultProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getResultsAdapter(): androidx.leanback.widget.ObjectAdapter;
						onQueryTextChange(string0: string): boolean;
						onQueryTextSubmit(string0: string): boolean;
					});
					public constructor();
					public onQueryTextChange(string0: string): boolean;
					public onQueryTextSubmit(string0: string): boolean;
					public getResultsAdapter(): androidx.leanback.widget.ObjectAdapter;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module app {
			export class VerticalGridFragment extends androidx.leanback.app.BaseFragment {
				public static class: java.lang.Class<androidx.leanback.app.VerticalGridFragment>;
				/** @deprecated */
				public onCreateView(inflater: globalAndroid.view.LayoutInflater, container: globalAndroid.view.ViewGroup, savedInstanceState: globalAndroid.os.Bundle): globalAndroid.view.View;
				public setAdapter(adapter: androidx.leanback.widget.ObjectAdapter): void;
				public setOnItemViewSelectedListener(listener: androidx.leanback.widget.OnItemViewSelectedListener): void;
				/** @deprecated */
				public onTrimMemory(level: number): void;
				public getGridPresenter(): androidx.leanback.widget.VerticalGridPresenter;
				public setGridPresenter(gridPresenter: androidx.leanback.widget.VerticalGridPresenter): void;
				public createEntranceTransition(): any;
				public constructor();
				public setOnItemViewClickedListener(listener: androidx.leanback.widget.OnItemViewClickedListener): void;
				public onCreateView(inflater: globalAndroid.view.LayoutInflater, container: globalAndroid.view.ViewGroup, savedInstanceState: globalAndroid.os.Bundle): globalAndroid.view.View;
				public onTrimMemory(level: number): void;
				public onCreateContextMenu(menu: globalAndroid.view.ContextMenu, v: globalAndroid.view.View, menuInfo: globalAndroid.view.ContextMenu.ContextMenuInfo): void;
				public onStart(): void;
				public getAdapter(): androidx.leanback.widget.ObjectAdapter;
				public setSelectedPosition(position: number): void;
				public onDestroyView(): void;
				/** @deprecated */
				public onCreateContextMenu(menu: globalAndroid.view.ContextMenu, v: globalAndroid.view.View, menuInfo: globalAndroid.view.ContextMenu.ContextMenuInfo): void;
				public getOnItemViewClickedListener(): androidx.leanback.widget.OnItemViewClickedListener;
				public runEntranceTransition(entranceTransition: any): void;
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module app {
			export class VerticalGridSupportFragment extends androidx.leanback.app.BaseSupportFragment {
				public static class: java.lang.Class<androidx.leanback.app.VerticalGridSupportFragment>;
				public getViewModelStore(): androidx.lifecycle.ViewModelStore;
				public setAdapter(adapter: androidx.leanback.widget.ObjectAdapter): void;
				public onConfigurationChanged(newConfig: globalAndroid.content.res.Configuration): void;
				public onLowMemory(): void;
				public setOnItemViewSelectedListener(listener: androidx.leanback.widget.OnItemViewSelectedListener): void;
				public getGridPresenter(): androidx.leanback.widget.VerticalGridPresenter;
				public setGridPresenter(gridPresenter: androidx.leanback.widget.VerticalGridPresenter): void;
				public createEntranceTransition(): any;
				public getLifecycle(): androidx.lifecycle.Lifecycle;
				public constructor();
				public setOnItemViewClickedListener(listener: androidx.leanback.widget.OnItemViewClickedListener): void;
				public onCreateView(inflater: globalAndroid.view.LayoutInflater, container: globalAndroid.view.ViewGroup, savedInstanceState: globalAndroid.os.Bundle): globalAndroid.view.View;
				public getSavedStateRegistry(): androidx.savedstate.SavedStateRegistry;
				public onCreateContextMenu(menu: globalAndroid.view.ContextMenu, v: globalAndroid.view.View, menuInfo: globalAndroid.view.ContextMenu.ContextMenuInfo): void;
				public onStart(): void;
				public getAdapter(): androidx.leanback.widget.ObjectAdapter;
				public constructor(contentLayoutId: number);
				public setSelectedPosition(position: number): void;
				public onDestroyView(): void;
				public getOnItemViewClickedListener(): androidx.leanback.widget.OnItemViewClickedListener;
				public runEntranceTransition(entranceTransition: any): void;
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module app {
			export class VideoFragment extends androidx.leanback.app.PlaybackFragment {
				public static class: java.lang.Class<androidx.leanback.app.VideoFragment>;
				public onCreateView(inflater: globalAndroid.view.LayoutInflater, container: globalAndroid.view.ViewGroup, savedInstanceState: globalAndroid.os.Bundle): globalAndroid.view.View;
				public getSurfaceView(): globalAndroid.view.SurfaceView;
				public onTrimMemory(level: number): void;
				public onCreateContextMenu(menu: globalAndroid.view.ContextMenu, v: globalAndroid.view.View, menuInfo: globalAndroid.view.ContextMenu.ContextMenuInfo): void;
				public onVideoSizeChanged(videoWidth: number, videoHeight: number): void;
				public setSurfaceHolderCallback(callback: globalAndroid.view.SurfaceHolder.Callback): void;
				/** @deprecated */
				public onTrimMemory(level: number): void;
				public onDestroyView(): void;
				/** @deprecated */
				public onCreateContextMenu(menu: globalAndroid.view.ContextMenu, v: globalAndroid.view.View, menuInfo: globalAndroid.view.ContextMenu.ContextMenuInfo): void;
				public constructor();
				public onVideoSizeChanged(width: number, height: number): void;
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module app {
			export class VideoFragmentGlueHost extends androidx.leanback.app.PlaybackFragmentGlueHost implements androidx.leanback.media.SurfaceHolderGlueHost {
				public static class: java.lang.Class<androidx.leanback.app.VideoFragmentGlueHost>;
				public setSurfaceHolderCallback(callback: globalAndroid.view.SurfaceHolder.Callback): void;
				public constructor(fragment: androidx.leanback.app.PlaybackFragment);
				public constructor(fragment: androidx.leanback.app.VideoFragment);
				public setPlaybackSeekUiClient(client: androidx.leanback.widget.PlaybackSeekUi.Client): void;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module app {
			export class VideoSupportFragment extends androidx.leanback.app.PlaybackSupportFragment {
				public static class: java.lang.Class<androidx.leanback.app.VideoSupportFragment>;
				public getSurfaceView(): globalAndroid.view.SurfaceView;
				public onVideoSizeChanged(videoWidth: number, videoHeight: number): void;
				public getViewModelStore(): androidx.lifecycle.ViewModelStore;
				public setSurfaceHolderCallback(callback: globalAndroid.view.SurfaceHolder.Callback): void;
				public onConfigurationChanged(newConfig: globalAndroid.content.res.Configuration): void;
				public onLowMemory(): void;
				public getLifecycle(): androidx.lifecycle.Lifecycle;
				public constructor();
				public onVideoSizeChanged(width: number, height: number): void;
				public onCreateView(inflater: globalAndroid.view.LayoutInflater, container: globalAndroid.view.ViewGroup, savedInstanceState: globalAndroid.os.Bundle): globalAndroid.view.View;
				public getSavedStateRegistry(): androidx.savedstate.SavedStateRegistry;
				public onCreateContextMenu(menu: globalAndroid.view.ContextMenu, v: globalAndroid.view.View, menuInfo: globalAndroid.view.ContextMenu.ContextMenuInfo): void;
				public constructor(contentLayoutId: number);
				public onDestroyView(): void;
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module app {
			export class VideoSupportFragmentGlueHost extends androidx.leanback.app.PlaybackSupportFragmentGlueHost implements androidx.leanback.media.SurfaceHolderGlueHost {
				public static class: java.lang.Class<androidx.leanback.app.VideoSupportFragmentGlueHost>;
				public setSurfaceHolderCallback(callback: globalAndroid.view.SurfaceHolder.Callback): void;
				public constructor(fragment: androidx.leanback.app.PlaybackSupportFragment);
				public constructor(fragment: androidx.leanback.app.VideoSupportFragment);
				public setPlaybackSeekUiClient(client: androidx.leanback.widget.PlaybackSeekUi.Client): void;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module database {
			export abstract class CursorMapper extends java.lang.Object {
				public static class: java.lang.Class<androidx.leanback.database.CursorMapper>;
				public convert(cursor: globalAndroid.database.Cursor): any;
				public bind(cursor0: globalAndroid.database.Cursor): any;
				public bindColumns(cursor0: globalAndroid.database.Cursor): void;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module graphics {
			export class BoundsRule extends java.lang.Object {
				public static class: java.lang.Class<androidx.leanback.graphics.BoundsRule>;
				public left: androidx.leanback.graphics.BoundsRule.ValueRule;
				public top: androidx.leanback.graphics.BoundsRule.ValueRule;
				public right: androidx.leanback.graphics.BoundsRule.ValueRule;
				public bottom: androidx.leanback.graphics.BoundsRule.ValueRule;
				public calculateBounds(rect: globalAndroid.graphics.Rect, result: globalAndroid.graphics.Rect): void;
				public constructor(boundsRule: androidx.leanback.graphics.BoundsRule);
				public constructor();
			}
			export module BoundsRule {
				export class ValueRule extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.graphics.BoundsRule.ValueRule>;
					public static inheritFromParentWithOffset(fraction: number, value: number): androidx.leanback.graphics.BoundsRule.ValueRule;
					public setAbsoluteValue(absoluteValue: number): void;
					public static inheritFromParent(fraction: number): androidx.leanback.graphics.BoundsRule.ValueRule;
					public static absoluteValue(absoluteValue: number): androidx.leanback.graphics.BoundsRule.ValueRule;
					public getAbsoluteValue(): number;
					public setFraction(fraction: number): void;
					public getFraction(): number;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module graphics {
			export class ColorFilterCache extends java.lang.Object {
				public static class: java.lang.Class<androidx.leanback.graphics.ColorFilterCache>;
				public getFilterForLevel(level: number): globalAndroid.graphics.ColorFilter;
				public static getColorFilterCache(color: number): androidx.leanback.graphics.ColorFilterCache;
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module graphics {
			export class ColorFilterDimmer extends java.lang.Object {
				public static class: java.lang.Class<androidx.leanback.graphics.ColorFilterDimmer>;
				public applyFilterToView(view: globalAndroid.view.View): void;
				public static createDefault(context: globalAndroid.content.Context): androidx.leanback.graphics.ColorFilterDimmer;
				public getPaint(): globalAndroid.graphics.Paint;
				public static create(dimmer: androidx.leanback.graphics.ColorFilterCache, activeLevel: number, dimmedLevel: number): androidx.leanback.graphics.ColorFilterDimmer;
				public getColorFilter(): globalAndroid.graphics.ColorFilter;
				public setActiveLevel(level: number): void;
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module graphics {
			export class ColorOverlayDimmer extends java.lang.Object {
				public static class: java.lang.Class<androidx.leanback.graphics.ColorOverlayDimmer>;
				public getAlphaFloat(): number;
				public needsDraw(): boolean;
				public static createColorOverlayDimmer(dimColor: number, activeLevel: number, dimmedLevel: number): androidx.leanback.graphics.ColorOverlayDimmer;
				public getPaint(): globalAndroid.graphics.Paint;
				public getAlpha(): number;
				public applyToColor(color: number): number;
				public drawColorOverlay(c: globalAndroid.graphics.Canvas, v: globalAndroid.view.View, includePadding: boolean): void;
				public static createDefault(context: globalAndroid.content.Context): androidx.leanback.graphics.ColorOverlayDimmer;
				public setActiveLevel(level: number): void;
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module graphics {
			export class CompositeDrawable extends globalAndroid.graphics.drawable.Drawable implements globalAndroid.graphics.drawable.Drawable.Callback {
				public static class: java.lang.Class<androidx.leanback.graphics.CompositeDrawable>;
				/** @deprecated */
				public getOpacity(): number;
				public removeChild(index: number): void;
				public getChildCount(): number;
				public draw(canvas: globalAndroid.graphics.Canvas): void;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public setAlpha(int0: number): void;
				public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public setColorFilter(colorFilter: globalAndroid.graphics.ColorFilter): void;
				public invalidateDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
				public draw(canvas0: globalAndroid.graphics.Canvas): void;
				public setChildDrawableAt(index: number, drawable: globalAndroid.graphics.drawable.Drawable): void;
				public getAlpha(): number;
				public onBoundsChange(bounds: globalAndroid.graphics.Rect): void;
				public constructor();
				public getDrawable(index: number): globalAndroid.graphics.drawable.Drawable;
				public getConstantState(): globalAndroid.graphics.drawable.Drawable.ConstantState;
				public setColorFilter(colorFilter0: globalAndroid.graphics.ColorFilter): void;
				public removeDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public mutate(): globalAndroid.graphics.drawable.Drawable;
				/** @deprecated */
				public setColorFilter(color: number, mode: globalAndroid.graphics.PorterDuff.Mode): void;
				public getChildAt(index: number): androidx.leanback.graphics.CompositeDrawable.ChildDrawable;
				public addChildDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public getOpacity(): number;
				public setAlpha(alpha: number): void;
			}
			export module CompositeDrawable {
				export class ChildDrawable extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.graphics.CompositeDrawable.ChildDrawable>;
					public static TOP_ABSOLUTE: globalAndroid.util.Property<androidx.leanback.graphics.CompositeDrawable.ChildDrawable,java.lang.Integer>;
					public static BOTTOM_ABSOLUTE: globalAndroid.util.Property<androidx.leanback.graphics.CompositeDrawable.ChildDrawable,java.lang.Integer>;
					public static LEFT_ABSOLUTE: globalAndroid.util.Property<androidx.leanback.graphics.CompositeDrawable.ChildDrawable,java.lang.Integer>;
					public static RIGHT_ABSOLUTE: globalAndroid.util.Property<androidx.leanback.graphics.CompositeDrawable.ChildDrawable,java.lang.Integer>;
					public static TOP_FRACTION: globalAndroid.util.Property<androidx.leanback.graphics.CompositeDrawable.ChildDrawable,java.lang.Float>;
					public static BOTTOM_FRACTION: globalAndroid.util.Property<androidx.leanback.graphics.CompositeDrawable.ChildDrawable,java.lang.Float>;
					public static LEFT_FRACTION: globalAndroid.util.Property<androidx.leanback.graphics.CompositeDrawable.ChildDrawable,java.lang.Float>;
					public static RIGHT_FRACTION: globalAndroid.util.Property<androidx.leanback.graphics.CompositeDrawable.ChildDrawable,java.lang.Float>;
					public recomputeBounds(): void;
					public constructor(drawable: globalAndroid.graphics.drawable.Drawable, parent: androidx.leanback.graphics.CompositeDrawable);
					public getBoundsRule(): androidx.leanback.graphics.BoundsRule;
					public getDrawable(): globalAndroid.graphics.drawable.Drawable;
				}
				export class CompositeState extends globalAndroid.graphics.drawable.Drawable.ConstantState {
					public static class: java.lang.Class<androidx.leanback.graphics.CompositeDrawable.CompositeState>;
					public getChangingConfigurations(): number;
					public newDrawable(res: globalAndroid.content.res.Resources): globalAndroid.graphics.drawable.Drawable;
					public newDrawable(): globalAndroid.graphics.drawable.Drawable;
					public newDrawable(res: globalAndroid.content.res.Resources, theme: globalAndroid.content.res.Resources.Theme): globalAndroid.graphics.drawable.Drawable;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module graphics {
			export class FitWidthBitmapDrawable extends globalAndroid.graphics.drawable.Drawable {
				public static class: java.lang.Class<androidx.leanback.graphics.FitWidthBitmapDrawable>;
				public static PROPERTY_VERTICAL_OFFSET: globalAndroid.util.Property<androidx.leanback.graphics.FitWidthBitmapDrawable,java.lang.Integer>;
				/** @deprecated */
				public getOpacity(): number;
				public draw(canvas: globalAndroid.graphics.Canvas): void;
				public setVerticalOffset(offset: number): void;
				public setAlpha(int0: number): void;
				public setColorFilter(colorFilter: globalAndroid.graphics.ColorFilter): void;
				public draw(canvas0: globalAndroid.graphics.Canvas): void;
				public getAlpha(): number;
				public getVerticalOffset(): number;
				public setBitmap(bitmap: globalAndroid.graphics.Bitmap): void;
				public getBitmap(): globalAndroid.graphics.Bitmap;
				public constructor();
				public getSource(): globalAndroid.graphics.Rect;
				public getConstantState(): globalAndroid.graphics.drawable.Drawable.ConstantState;
				public setColorFilter(colorFilter0: globalAndroid.graphics.ColorFilter): void;
				public setSource(source: globalAndroid.graphics.Rect): void;
				public mutate(): globalAndroid.graphics.drawable.Drawable;
				/** @deprecated */
				public setColorFilter(color: number, mode: globalAndroid.graphics.PorterDuff.Mode): void;
				public setAlpha(alpha: number): void;
				public getOpacity(): number;
			}
			export module FitWidthBitmapDrawable {
				export class BitmapState extends globalAndroid.graphics.drawable.Drawable.ConstantState {
					public static class: java.lang.Class<androidx.leanback.graphics.FitWidthBitmapDrawable.BitmapState>;
					public getChangingConfigurations(): number;
					public newDrawable(res: globalAndroid.content.res.Resources): globalAndroid.graphics.drawable.Drawable;
					public newDrawable(): globalAndroid.graphics.drawable.Drawable;
					public newDrawable(res: globalAndroid.content.res.Resources, theme: globalAndroid.content.res.Resources.Theme): globalAndroid.graphics.drawable.Drawable;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module media {
			export class MediaControllerAdapter extends androidx.leanback.media.PlayerAdapter {
				public static class: java.lang.Class<androidx.leanback.media.MediaControllerAdapter>;
				public setProgressUpdatingEnabled(enable: boolean): void;
				public rewind(): void;
				public play(): void;
				public getDuration(): number;
				public pause(): void;
				public isPlaying(): boolean;
				public onAttachedToHost(host: androidx.leanback.media.PlaybackGlueHost): void;
				public getSupportedActions(): number;
				public getMediaTitle(): string;
				public getMediaArt(context: globalAndroid.content.Context): globalAndroid.graphics.drawable.Drawable;
				public seekTo(positionInMs: number): void;
				public getCurrentPosition(): number;
				public constructor();
				public constructor(controller: globalAndroid.support.v4.media.session.MediaControllerCompat);
				public getMediaController(): globalAndroid.support.v4.media.session.MediaControllerCompat;
				public setProgressUpdatingEnabled(enabled: boolean): void;
				public getMediaSubtitle(): string;
				public getBufferedPosition(): number;
				public fastForward(): void;
				public setRepeatAction(repeatActionIndex: number): void;
				public next(): void;
				public onDetachedFromHost(): void;
				public previous(): void;
				public setShuffleAction(shuffleActionIndex: number): void;
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module media {
			export abstract class MediaControllerGlue extends androidx.leanback.media.PlaybackControlGlue {
				public static class: java.lang.Class<androidx.leanback.media.MediaControllerGlue>;
				public attachToMediaController(mediaController: globalAndroid.support.v4.media.session.MediaControllerCompat): void;
				public getCurrentSpeedId(): number;
				public constructor(context: globalAndroid.content.Context, fastForwardSpeeds: native.Array<number>, rewindSpeeds: native.Array<number>);
				public constructor(context: globalAndroid.content.Context);
				public play(): void;
				public constructor(context: globalAndroid.content.Context, seekSpeeds: native.Array<number>);
				public pause(): void;
				public getSupportedActions(): number;
				public play(speed: number): void;
				public getMediaTitle(): string;
				public isMediaPlaying(): boolean;
				public getCurrentPosition(): number;
				public getMediaController(): globalAndroid.support.v4.media.session.MediaControllerCompat;
				public getMediaArt(): globalAndroid.graphics.drawable.Drawable;
				public getMediaDuration(): number;
				public getMediaSubtitle(): string;
				public onActionClicked(action: androidx.leanback.widget.Action): void;
				public next(): void;
				public previous(): void;
				public onKey(v: globalAndroid.view.View, keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public detach(): void;
				public hasValidMedia(): boolean;
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module media {
			export class MediaPlayerAdapter extends androidx.leanback.media.PlayerAdapter {
				public static class: java.lang.Class<androidx.leanback.media.MediaPlayerAdapter>;
				public setProgressUpdatingEnabled(enable: boolean): void;
				public onInfo(what: number, extra: number): boolean;
				public release(): void;
				public onError(what: number, extra: number): boolean;
				public seekTo(newPosition: number): void;
				public constructor(context: globalAndroid.content.Context);
				public getProgressUpdatingInterval(): number;
				public getDuration(): number;
				public play(): void;
				public setDataSource(uri: globalAndroid.net.Uri): boolean;
				public onAttachedToHost(host: androidx.leanback.media.PlaybackGlueHost): void;
				public isPlaying(): boolean;
				public pause(): void;
				public onSeekComplete(): void;
				public seekTo(positionInMs: number): void;
				public getCurrentPosition(): number;
				public constructor();
				public setProgressUpdatingEnabled(enabled: boolean): void;
				public reset(): void;
				public getMediaPlayer(): globalAndroid.media.MediaPlayer;
				public isPrepared(): boolean;
				public getBufferedPosition(): number;
				public onDetachedFromHost(): void;
			}
			export module MediaPlayerAdapter {
				export class VideoPlayerSurfaceHolderCallback extends java.lang.Object implements globalAndroid.view.SurfaceHolder.Callback {
					public static class: java.lang.Class<androidx.leanback.media.MediaPlayerAdapter.VideoPlayerSurfaceHolderCallback>;
					public surfaceCreated(surfaceHolder: globalAndroid.view.SurfaceHolder): void;
					public surfaceChanged(surfaceHolder: globalAndroid.view.SurfaceHolder, i: number, i1: number, i2: number): void;
					public surfaceDestroyed(surfaceHolder: globalAndroid.view.SurfaceHolder): void;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module media {
			export class MediaPlayerGlue extends androidx.leanback.media.PlaybackControlGlue implements androidx.leanback.widget.OnItemViewSelectedListener {
				public static class: java.lang.Class<androidx.leanback.media.MediaPlayerGlue>;
				public static NO_REPEAT: number;
				public static REPEAT_ONE: number;
				public static REPEAT_ALL: number;
				public static FAST_FORWARD_REWIND_STEP: number;
				public static FAST_FORWARD_REWIND_REPEAT_DELAY: number;
				public mThumbsDownAction: androidx.leanback.widget.PlaybackControlsRow.ThumbsDownAction;
				public mThumbsUpAction: androidx.leanback.widget.PlaybackControlsRow.ThumbsUpAction;
				public getCurrentSpeedId(): number;
				public constructor(context: globalAndroid.content.Context);
				public onAttachedToHost(host: androidx.leanback.media.PlaybackGlueHost): void;
				public enableProgressUpdating(enable: boolean): void;
				public play(speed: number): void;
				public setVideoUrl(videoUrl: string): void;
				public setMode(mode: number): void;
				public reset(): void;
				public isPrepared(): boolean;
				public getMediaArt(): globalAndroid.graphics.drawable.Drawable;
				public setCover(cover: globalAndroid.graphics.drawable.Drawable): void;
				public onItemSelected(viewHolder0: androidx.leanback.widget.Presenter.ViewHolder, object1: any, viewHolder2: androidx.leanback.widget.RowPresenter.ViewHolder, object3: any): void;
				public onCreateSecondaryActions(secondaryActionsAdapter: androidx.leanback.widget.ArrayObjectAdapter): void;
				public setMediaSource(path: string): boolean;
				public setMediaSource(uri: globalAndroid.net.Uri): boolean;
				public setTitle(title: string): void;
				public onKey(v: globalAndroid.view.View, keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public release(): void;
				public constructor(context: globalAndroid.content.Context, fastForwardSpeeds: native.Array<number>, rewindSpeeds: native.Array<number>);
				public seekTo(newPosition: number): void;
				public play(): void;
				public constructor(context: globalAndroid.content.Context, seekSpeeds: native.Array<number>);
				public isPlaying(): boolean;
				public pause(): void;
				public getSupportedActions(): number;
				public getMediaTitle(): string;
				public isMediaPlaying(): boolean;
				public enableProgressUpdating(enabled: boolean): void;
				public getCurrentPosition(): number;
				public getMediaDuration(): number;
				public getMediaSubtitle(): string;
				public onActionClicked(action: androidx.leanback.widget.Action): void;
				public setDisplay(surfaceHolder: globalAndroid.view.SurfaceHolder): void;
				public onDetachedFromHost(): void;
				public setArtist(artist: string): void;
				public hasValidMedia(): boolean;
				public onItemSelected(itemViewHolder: androidx.leanback.widget.Presenter.ViewHolder, item: any, rowViewHolder: androidx.leanback.widget.RowPresenter.ViewHolder, row: androidx.leanback.widget.Row): void;
			}
			export module MediaPlayerGlue {
				export class VideoPlayerSurfaceHolderCallback extends java.lang.Object implements globalAndroid.view.SurfaceHolder.Callback {
					public static class: java.lang.Class<androidx.leanback.media.MediaPlayerGlue.VideoPlayerSurfaceHolderCallback>;
					public surfaceCreated(surfaceHolder: globalAndroid.view.SurfaceHolder): void;
					public surfaceChanged(surfaceHolder: globalAndroid.view.SurfaceHolder, i: number, i1: number, i2: number): void;
					public surfaceDestroyed(surfaceHolder: globalAndroid.view.SurfaceHolder): void;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module media {
			export class PlaybackBannerControlGlue<T>  extends androidx.leanback.media.PlaybackBaseControlGlue<any> {
				public static class: java.lang.Class<androidx.leanback.media.PlaybackBannerControlGlue<any>>;
				public static ACTION_CUSTOM_LEFT_FIRST: number;
				public static ACTION_SKIP_TO_PREVIOUS: number;
				public static ACTION_REWIND: number;
				public static ACTION_PLAY_PAUSE: number;
				public static ACTION_FAST_FORWARD: number;
				public static ACTION_SKIP_TO_NEXT: number;
				public static ACTION_CUSTOM_RIGHT_FIRST: number;
				public static PLAYBACK_SPEED_INVALID: number;
				public static PLAYBACK_SPEED_PAUSED: number;
				public static PLAYBACK_SPEED_NORMAL: number;
				public static PLAYBACK_SPEED_FAST_L0: number;
				public static PLAYBACK_SPEED_FAST_L1: number;
				public static PLAYBACK_SPEED_FAST_L2: number;
				public static PLAYBACK_SPEED_FAST_L3: number;
				public static PLAYBACK_SPEED_FAST_L4: number;
				public getRewindSpeeds(): native.Array<number>;
				public onPlayStateChanged(): void;
				public onPlayCompleted(): void;
				public constructor(context: globalAndroid.content.Context, fastForwardSpeeds: native.Array<number>, rewindSpeeds: native.Array<number>, impl: any);
				public constructor(context: globalAndroid.content.Context);
				public play(): void;
				public pause(): void;
				public setControlsRow(controlsRow: androidx.leanback.widget.PlaybackControlsRow): void;
				public onCreateRowPresenter(): androidx.leanback.widget.PlaybackRowPresenter;
				public getCurrentPosition(): number;
				public constructor(context: globalAndroid.content.Context, seekSpeeds: native.Array<number>, impl: any);
				public onActionClicked(action0: androidx.leanback.widget.Action): void;
				public onKey(view0: globalAndroid.view.View, int1: number, keyEvent2: globalAndroid.view.KeyEvent): boolean;
				public constructor(context: globalAndroid.content.Context, impl: any);
				public onActionClicked(action: androidx.leanback.widget.Action): void;
				public onCreatePrimaryActions(primaryActionsAdapter: androidx.leanback.widget.ArrayObjectAdapter): void;
				public onKey(v: globalAndroid.view.View, keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public getFastForwardSpeeds(): native.Array<number>;
			}
			export module PlaybackBannerControlGlue {
				export class ACTION_ extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.leanback.media.PlaybackBannerControlGlue.ACTION_>;
					/**
					 * Constructs a new instance of the androidx.leanback.media.PlaybackBannerControlGlue$ACTION_ interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
	export module leanback {
		export module media {
			export abstract class PlaybackBaseControlGlue<T>  extends androidx.leanback.media.PlaybackGlue {
				public static class: java.lang.Class<androidx.leanback.media.PlaybackBaseControlGlue<any>>;
				public static ACTION_CUSTOM_LEFT_FIRST: number;
				public static ACTION_SKIP_TO_PREVIOUS: number;
				public static ACTION_REWIND: number;
				public static ACTION_PLAY_PAUSE: number;
				public static ACTION_FAST_FORWARD: number;
				public static ACTION_SKIP_TO_NEXT: number;
				public static ACTION_REPEAT: number;
				public static ACTION_SHUFFLE: number;
				public static ACTION_CUSTOM_RIGHT_FIRST: number;
				public onPlayCompleted(): void;
				public setControlsOverlayAutoHideEnabled(enable: boolean): void;
				public getControlsRow(): androidx.leanback.widget.PlaybackControlsRow;
				public onMetadataChanged(): void;
				public constructor(context: globalAndroid.content.Context);
				public getDuration(): number;
				public onAttachedToHost(host: androidx.leanback.media.PlaybackGlueHost): void;
				public isControlsOverlayAutoHideEnabled(): boolean;
				public getArt(): globalAndroid.graphics.drawable.Drawable;
				public onUpdateBufferedProgress(): void;
				public onActionClicked(action0: androidx.leanback.widget.Action): void;
				public isPrepared(): boolean;
				public onKey(view0: globalAndroid.view.View, int1: number, keyEvent2: globalAndroid.view.KeyEvent): boolean;
				public onUpdateDuration(): void;
				public constructor(context: globalAndroid.content.Context, impl: any);
				public onCreateSecondaryActions(secondaryActionsAdapter: androidx.leanback.widget.ArrayObjectAdapter): void;
				public getBufferedPosition(): number;
				public next(): void;
				public setPlaybackRowPresenter(presenter: androidx.leanback.widget.PlaybackRowPresenter): void;
				public setTitle(title: string): void;
				public onHostStop(): void;
				public onPlayStateChanged(): void;
				public onPreparedStateChanged(): void;
				public onHostStart(): void;
				public play(): void;
				public isPlaying(): boolean;
				public pause(): void;
				public getSupportedActions(): number;
				public setControlsRow(controlsRow: androidx.leanback.widget.PlaybackControlsRow): void;
				public static notifyItemChanged(adapter: androidx.leanback.widget.ArrayObjectAdapter, object: any): void;
				public getPlaybackRowPresenter(): androidx.leanback.widget.PlaybackRowPresenter;
				public onCreateRowPresenter(): androidx.leanback.widget.PlaybackRowPresenter;
				public getCurrentPosition(): number;
				public getTitle(): string;
				public setSubtitle(subtitle: string): void;
				public seekTo(position: number): void;
				public getPlayerAdapter(): any;
				public getSubtitle(): string;
				public onUpdateProgress(): void;
				public onDetachedFromHost(): void;
				public onCreatePrimaryActions(primaryActionsAdapter: androidx.leanback.widget.ArrayObjectAdapter): void;
				public previous(): void;
				public setArt(cover: globalAndroid.graphics.drawable.Drawable): void;
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module media {
			export abstract class PlaybackControlGlue extends androidx.leanback.media.PlaybackGlue implements androidx.leanback.widget.OnActionClickedListener, globalAndroid.view.View.OnKeyListener {
				public static class: java.lang.Class<androidx.leanback.media.PlaybackControlGlue>;
				public static ACTION_CUSTOM_LEFT_FIRST: number;
				public static ACTION_SKIP_TO_PREVIOUS: number;
				public static ACTION_REWIND: number;
				public static ACTION_PLAY_PAUSE: number;
				public static ACTION_FAST_FORWARD: number;
				public static ACTION_SKIP_TO_NEXT: number;
				public static ACTION_CUSTOM_RIGHT_FIRST: number;
				public static PLAYBACK_SPEED_INVALID: number;
				public static PLAYBACK_SPEED_PAUSED: number;
				public static PLAYBACK_SPEED_NORMAL: number;
				public static PLAYBACK_SPEED_FAST_L0: number;
				public static PLAYBACK_SPEED_FAST_L1: number;
				public static PLAYBACK_SPEED_FAST_L2: number;
				public static PLAYBACK_SPEED_FAST_L3: number;
				public static PLAYBACK_SPEED_FAST_L4: number;
				public getRewindSpeeds(): native.Array<number>;
				/** @deprecated */
				public setControlsRowPresenter(presenter: androidx.leanback.widget.PlaybackControlsRowPresenter): void;
				public getCurrentSpeedId(): number;
				public getControlsRow(): androidx.leanback.widget.PlaybackControlsRow;
				public onMetadataChanged(): void;
				public onCreateControlsRowAndPresenter(): void;
				public constructor(context: globalAndroid.content.Context);
				public onAttachedToHost(host: androidx.leanback.media.PlaybackGlueHost): void;
				public enableProgressUpdating(enable: boolean): void;
				public play(speed: number): void;
				public onCreatePrimaryActions(primaryActionsAdapter: androidx.leanback.widget.SparseArrayObjectAdapter): void;
				public setFadingEnabled(enable: boolean): void;
				public getMediaArt(): globalAndroid.graphics.drawable.Drawable;
				public onCreateSecondaryActions(secondaryActionsAdapter: androidx.leanback.widget.ArrayObjectAdapter): void;
				public setPlaybackRowPresenter(presenter: androidx.leanback.widget.PlaybackRowPresenter): void;
				public isFadingEnabled(): boolean;
				public onKey(v: globalAndroid.view.View, keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public onHostStop(): void;
				public constructor(context: globalAndroid.content.Context, fastForwardSpeeds: native.Array<number>, rewindSpeeds: native.Array<number>);
				public onHostStart(): void;
				public play(): void;
				public constructor(context: globalAndroid.content.Context, seekSpeeds: native.Array<number>);
				public getUpdatePeriod(): number;
				public isPlaying(): boolean;
				public getSupportedActions(): number;
				public getMediaTitle(): string;
				public setControlsRow(controlsRow: androidx.leanback.widget.PlaybackControlsRow): void;
				public isMediaPlaying(): boolean;
				public getPlaybackRowPresenter(): androidx.leanback.widget.PlaybackRowPresenter;
				public getCurrentPosition(): number;
				/** @deprecated */
				public getControlsRowPresenter(): androidx.leanback.widget.PlaybackControlsRowPresenter;
				public onStateChanged(): void;
				public getMediaDuration(): number;
				public getMediaSubtitle(): string;
				public updateProgress(): void;
				public createPrimaryActionsAdapter(presenterSelector: androidx.leanback.widget.PresenterSelector): androidx.leanback.widget.SparseArrayObjectAdapter;
				public onActionClicked(action: androidx.leanback.widget.Action): void;
				public onDetachedFromHost(): void;
				public getFastForwardSpeeds(): native.Array<number>;
				public hasValidMedia(): boolean;
			}
			export module PlaybackControlGlue {
				export class UpdatePlaybackStateHandler extends globalAndroid.os.Handler {
					public static class: java.lang.Class<androidx.leanback.media.PlaybackControlGlue.UpdatePlaybackStateHandler>;
					public handleMessage(msg: globalAndroid.os.Message): void;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module media {
			export abstract class PlaybackGlue extends java.lang.Object {
				public static class: java.lang.Class<androidx.leanback.media.PlaybackGlue>;
				public onHostResume(): void;
				public setHost(host: androidx.leanback.media.PlaybackGlueHost): void;
				public constructor(context: globalAndroid.content.Context);
				public getContext(): globalAndroid.content.Context;
				public onHostStart(): void;
				public play(): void;
				public removePlayerCallback(callback: androidx.leanback.media.PlaybackGlue.PlayerCallback): void;
				public isPlaying(): boolean;
				public pause(): void;
				public onAttachedToHost(host: androidx.leanback.media.PlaybackGlueHost): void;
				public getHost(): androidx.leanback.media.PlaybackGlueHost;
				public addPlayerCallback(playerCallback: androidx.leanback.media.PlaybackGlue.PlayerCallback): void;
				public getPlayerCallbacks(): java.util.List<androidx.leanback.media.PlaybackGlue.PlayerCallback>;
				public isPrepared(): boolean;
				public playWhenPrepared(): void;
				public onHostPause(): void;
				public next(): void;
				public onDetachedFromHost(): void;
				public previous(): void;
				public onHostStop(): void;
			}
			export module PlaybackGlue {
				export abstract class PlayerCallback extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.media.PlaybackGlue.PlayerCallback>;
					public constructor();
					public onPlayStateChanged(glue: androidx.leanback.media.PlaybackGlue): void;
					public onPreparedStateChanged(glue: androidx.leanback.media.PlaybackGlue): void;
					public onPlayCompleted(glue: androidx.leanback.media.PlaybackGlue): void;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module media {
			export abstract class PlaybackGlueHost extends java.lang.Object {
				public static class: java.lang.Class<androidx.leanback.media.PlaybackGlueHost>;
				public hideControlsOverlay(runAnimation: boolean): void;
				public setControlsOverlayAutoHideEnabled(enabled: boolean): void;
				/** @deprecated */
				public setFadingEnabled(enable: boolean): void;
				public setOnKeyInterceptListener(onKeyListener: globalAndroid.view.View.OnKeyListener): void;
				public isControlsOverlayAutoHideEnabled(): boolean;
				public isControlsOverlayVisible(): boolean;
				public setHostCallback(callback: androidx.leanback.media.PlaybackGlueHost.HostCallback): void;
				public constructor();
				public notifyPlaybackRowChanged(): void;
				public getPlayerCallback(): androidx.leanback.media.PlaybackGlueHost.PlayerCallback;
				public setOnActionClickedListener(listener: androidx.leanback.widget.OnActionClickedListener): void;
				/** @deprecated */
				public fadeOut(): void;
				public setPlaybackRowPresenter(presenter: androidx.leanback.widget.PlaybackRowPresenter): void;
				public setPlaybackRow(row: androidx.leanback.widget.Row): void;
				public showControlsOverlay(runAnimation: boolean): void;
			}
			export module PlaybackGlueHost {
				export abstract class HostCallback extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.media.PlaybackGlueHost.HostCallback>;
					public constructor();
					public onHostResume(): void;
					public onHostStop(): void;
					public onHostStart(): void;
					public onHostDestroy(): void;
					public onHostPause(): void;
				}
				export class PlayerCallback extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.media.PlaybackGlueHost.PlayerCallback>;
					public constructor();
					public onBufferingStateChanged(start: boolean): void;
					public onVideoSizeChanged(videoWidth: number, videoHeight: number): void;
					public onError(errorCode: number, errorMessage: string): void;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module media {
			export class PlaybackTransportControlGlue<T>  extends androidx.leanback.media.PlaybackBaseControlGlue<any> {
				public static class: java.lang.Class<androidx.leanback.media.PlaybackTransportControlGlue<any>>;
				public onPlayStateChanged(): void;
				public getSeekProvider(): androidx.leanback.widget.PlaybackSeekDataProvider;
				public constructor(context: globalAndroid.content.Context);
				public isSeekEnabled(): boolean;
				public onAttachedToHost(host: androidx.leanback.media.PlaybackGlueHost): void;
				public setSeekProvider(seekProvider: androidx.leanback.widget.PlaybackSeekDataProvider): void;
				public setControlsRow(controlsRow: androidx.leanback.widget.PlaybackControlsRow): void;
				public onCreateRowPresenter(): androidx.leanback.widget.PlaybackRowPresenter;
				public onActionClicked(action0: androidx.leanback.widget.Action): void;
				public onKey(view0: globalAndroid.view.View, int1: number, keyEvent2: globalAndroid.view.KeyEvent): boolean;
				public setSeekEnabled(seekEnabled: boolean): void;
				public constructor(context: globalAndroid.content.Context, impl: any);
				public onActionClicked(action: androidx.leanback.widget.Action): void;
				public onUpdateProgress(): void;
				public onCreatePrimaryActions(primaryActionsAdapter: androidx.leanback.widget.ArrayObjectAdapter): void;
				public onDetachedFromHost(): void;
				public onKey(v: globalAndroid.view.View, keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
			}
			export module PlaybackTransportControlGlue {
				export class SeekUiClient extends androidx.leanback.widget.PlaybackSeekUi.Client {
					public static class: java.lang.Class<androidx.leanback.media.PlaybackTransportControlGlue.SeekUiClient>;
					public getPlaybackSeekDataProvider(): androidx.leanback.widget.PlaybackSeekDataProvider;
					public isSeekEnabled(): boolean;
					public onSeekStarted(): void;
					public onSeekPositionChanged(pos: number): void;
					public onSeekFinished(cancelled: boolean): void;
				}
				export class UpdatePlaybackStateHandler extends globalAndroid.os.Handler {
					public static class: java.lang.Class<androidx.leanback.media.PlaybackTransportControlGlue.UpdatePlaybackStateHandler>;
					public handleMessage(msg: globalAndroid.os.Message): void;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module media {
			export abstract class PlayerAdapter extends java.lang.Object {
				public static class: java.lang.Class<androidx.leanback.media.PlayerAdapter>;
				public setProgressUpdatingEnabled(enable: boolean): void;
				public rewind(): void;
				public getCallback(): androidx.leanback.media.PlayerAdapter.Callback;
				public play(): void;
				public getDuration(): number;
				public pause(): void;
				public isPlaying(): boolean;
				public onAttachedToHost(host: androidx.leanback.media.PlaybackGlueHost): void;
				public getSupportedActions(): number;
				public seekTo(positionInMs: number): void;
				public getCurrentPosition(): number;
				public constructor();
				public isPrepared(): boolean;
				public setCallback(callback: androidx.leanback.media.PlayerAdapter.Callback): void;
				public getBufferedPosition(): number;
				public fastForward(): void;
				public setRepeatAction(repeatActionIndex: number): void;
				public next(): void;
				public onDetachedFromHost(): void;
				public previous(): void;
				public setShuffleAction(shuffleActionIndex: number): void;
			}
			export module PlayerAdapter {
				export class Callback extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.media.PlayerAdapter.Callback>;
					public onBufferingStateChanged(adapter: androidx.leanback.media.PlayerAdapter, start: boolean): void;
					public onPlayCompleted(adapter: androidx.leanback.media.PlayerAdapter): void;
					public constructor();
					public onPlayStateChanged(adapter: androidx.leanback.media.PlayerAdapter): void;
					public onPreparedStateChanged(adapter: androidx.leanback.media.PlayerAdapter): void;
					public onBufferedPositionChanged(adapter: androidx.leanback.media.PlayerAdapter): void;
					public onDurationChanged(adapter: androidx.leanback.media.PlayerAdapter): void;
					public onVideoSizeChanged(adapter: androidx.leanback.media.PlayerAdapter, width: number, height: number): void;
					public onCurrentPositionChanged(adapter: androidx.leanback.media.PlayerAdapter): void;
					public onError(adapter: androidx.leanback.media.PlayerAdapter, errorCode: number, errorMessage: string): void;
					public onMetadataChanged(adapter: androidx.leanback.media.PlayerAdapter): void;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module media {
			export class SurfaceHolderGlueHost extends java.lang.Object {
				public static class: java.lang.Class<androidx.leanback.media.SurfaceHolderGlueHost>;
				/**
				 * Constructs a new instance of the androidx.leanback.media.SurfaceHolderGlueHost interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					setSurfaceHolderCallback(callback0: globalAndroid.view.SurfaceHolder.Callback): void;
				});
				public constructor();
				public setSurfaceHolderCallback(callback0: globalAndroid.view.SurfaceHolder.Callback): void;
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module system {
			export class Settings extends java.lang.Object {
				public static class: java.lang.Class<androidx.leanback.system.Settings>;
				public static PREFER_STATIC_SHADOWS: string;
				public static OUTLINE_CLIPPING_DISABLED: string;
				public static getInstance(context: globalAndroid.content.Context): androidx.leanback.system.Settings;
				public preferStaticShadows(): boolean;
				public isOutlineClippingDisabled(): boolean;
				public setBoolean(key: string, value: boolean): void;
				public getBoolean(key: string): boolean;
			}
			export module Settings {
				export class Customizations extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.system.Settings.Customizations>;
					public constructor(resources: globalAndroid.content.res.Resources, packageName: string);
					public getBoolean(resourceName: string, defaultValue: boolean): boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module transition {
			export class CustomChangeBounds extends globalAndroid.transition.ChangeBounds {
				public static class: java.lang.Class<androidx.leanback.transition.CustomChangeBounds>;
				public setStartDelay(startDelay: number): globalAndroid.transition.Transition;
				public setStartDelay(view: globalAndroid.view.View, startDelay: number): void;
				public createAnimator(sceneRoot: globalAndroid.view.ViewGroup, startValues: globalAndroid.transition.TransitionValues, endValues: globalAndroid.transition.TransitionValues): globalAndroid.animation.Animator;
				public setStartDelay(className: string, startDelay: number): void;
				public setDefaultStartDelay(startDelay: number): void;
				public setStartDelay(viewId: number, startDelay: number): void;
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module transition {
			export class FadeAndShortSlide extends globalAndroid.transition.Visibility {
				public static class: java.lang.Class<androidx.leanback.transition.FadeAndShortSlide>;
				public setSlideEdge(slideEdge: number): void;
				public addListener(listener: globalAndroid.transition.Transition.TransitionListener): globalAndroid.transition.Transition;
				public removeListener(listener: globalAndroid.transition.Transition.TransitionListener): globalAndroid.transition.Transition;
				public constructor(slideEdge: number);
				public setDistance(distance: number): void;
				public captureStartValues(transitionValues: globalAndroid.transition.TransitionValues): void;
				public onDisappear(sceneRoot: globalAndroid.view.ViewGroup, view: globalAndroid.view.View, startValues: globalAndroid.transition.TransitionValues, endValues: globalAndroid.transition.TransitionValues): globalAndroid.animation.Animator;
				public constructor();
				public captureEndValues(transitionValues: globalAndroid.transition.TransitionValues): void;
				public onAppear(sceneRoot: globalAndroid.view.ViewGroup, view: globalAndroid.view.View, startValues: globalAndroid.transition.TransitionValues, endValues: globalAndroid.transition.TransitionValues): globalAndroid.animation.Animator;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
				public onAppear(sceneRoot: globalAndroid.view.ViewGroup, startValues: globalAndroid.transition.TransitionValues, startVisibility: number, endValues: globalAndroid.transition.TransitionValues, endVisibility: number): globalAndroid.animation.Animator;
				public clone(): any;
				public getDistance(): number;
				public setEpicenterCallback(epicenterCallback: globalAndroid.transition.Transition.EpicenterCallback): void;
				public onDisappear(sceneRoot: globalAndroid.view.ViewGroup, startValues: globalAndroid.transition.TransitionValues, startVisibility: number, endValues: globalAndroid.transition.TransitionValues, endVisibility: number): globalAndroid.animation.Animator;
				public clone(): globalAndroid.transition.Transition;
			}
			export module FadeAndShortSlide {
				export abstract class CalculateSlide extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.transition.FadeAndShortSlide.CalculateSlide>;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module transition {
			export class LeanbackTransitionHelper extends java.lang.Object {
				public static class: java.lang.Class<androidx.leanback.transition.LeanbackTransitionHelper>;
				public static loadTitleInTransition(context: globalAndroid.content.Context): any;
				public static loadTitleOutTransition(context: globalAndroid.content.Context): any;
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module transition {
			export class ParallaxTransition extends globalAndroid.transition.Visibility {
				public static class: java.lang.Class<androidx.leanback.transition.ParallaxTransition>;
				public onAppear(sceneRoot: globalAndroid.view.ViewGroup, view: globalAndroid.view.View, startValues: globalAndroid.transition.TransitionValues, endValues: globalAndroid.transition.TransitionValues): globalAndroid.animation.Animator;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
				public onAppear(sceneRoot: globalAndroid.view.ViewGroup, startValues: globalAndroid.transition.TransitionValues, startVisibility: number, endValues: globalAndroid.transition.TransitionValues, endVisibility: number): globalAndroid.animation.Animator;
				public onDisappear(sceneRoot: globalAndroid.view.ViewGroup, view: globalAndroid.view.View, startValues: globalAndroid.transition.TransitionValues, endValues: globalAndroid.transition.TransitionValues): globalAndroid.animation.Animator;
				public onDisappear(sceneRoot: globalAndroid.view.ViewGroup, startValues: globalAndroid.transition.TransitionValues, startVisibility: number, endValues: globalAndroid.transition.TransitionValues, endVisibility: number): globalAndroid.animation.Animator;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module transition {
			export class Scale extends globalAndroid.transition.Transition {
				public static class: java.lang.Class<androidx.leanback.transition.Scale>;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
				public captureEndValues(transitionValues0: globalAndroid.transition.TransitionValues): void;
				public createAnimator(sceneRoot: globalAndroid.view.ViewGroup, startValues: globalAndroid.transition.TransitionValues, endValues: globalAndroid.transition.TransitionValues): globalAndroid.animation.Animator;
				public captureStartValues(transitionValues0: globalAndroid.transition.TransitionValues): void;
				public captureStartValues(transitionValues: globalAndroid.transition.TransitionValues): void;
				public constructor();
				public captureEndValues(transitionValues: globalAndroid.transition.TransitionValues): void;
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module transition {
			export class SlideKitkat extends globalAndroid.transition.Visibility {
				public static class: java.lang.Class<androidx.leanback.transition.SlideKitkat>;
				public onAppear(sceneRoot: globalAndroid.view.ViewGroup, view: globalAndroid.view.View, startValues: globalAndroid.transition.TransitionValues, endValues: globalAndroid.transition.TransitionValues): globalAndroid.animation.Animator;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
				public setSlideEdge(slideEdge: number): void;
				public onAppear(sceneRoot: globalAndroid.view.ViewGroup, startValues: globalAndroid.transition.TransitionValues, startVisibility: number, endValues: globalAndroid.transition.TransitionValues, endVisibility: number): globalAndroid.animation.Animator;
				public getSlideEdge(): number;
				public onDisappear(sceneRoot: globalAndroid.view.ViewGroup, view: globalAndroid.view.View, startValues: globalAndroid.transition.TransitionValues, endValues: globalAndroid.transition.TransitionValues): globalAndroid.animation.Animator;
				public onDisappear(sceneRoot: globalAndroid.view.ViewGroup, startValues: globalAndroid.transition.TransitionValues, startVisibility: number, endValues: globalAndroid.transition.TransitionValues, endVisibility: number): globalAndroid.animation.Animator;
				public constructor();
			}
			export module SlideKitkat {
				export class CalculateSlide extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.transition.SlideKitkat.CalculateSlide>;
					/**
					 * Constructs a new instance of the androidx.leanback.transition.SlideKitkat$CalculateSlide interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getGone(view0: globalAndroid.view.View): number;
						getHere(view0: globalAndroid.view.View): number;
						getProperty(): globalAndroid.util.Property<globalAndroid.view.View,java.lang.Float>;
					});
					public constructor();
					public getGone(view0: globalAndroid.view.View): number;
					public getProperty(): globalAndroid.util.Property<globalAndroid.view.View,java.lang.Float>;
					public getHere(view0: globalAndroid.view.View): number;
				}
				export abstract class CalculateSlideHorizontal extends java.lang.Object implements androidx.leanback.transition.SlideKitkat.CalculateSlide {
					public static class: java.lang.Class<androidx.leanback.transition.SlideKitkat.CalculateSlideHorizontal>;
					public getHere(view: globalAndroid.view.View): number;
					public getProperty(): globalAndroid.util.Property<globalAndroid.view.View,java.lang.Float>;
					public getGone(view0: globalAndroid.view.View): number;
				}
				export abstract class CalculateSlideVertical extends java.lang.Object implements androidx.leanback.transition.SlideKitkat.CalculateSlide {
					public static class: java.lang.Class<androidx.leanback.transition.SlideKitkat.CalculateSlideVertical>;
					public getHere(view: globalAndroid.view.View): number;
					public getProperty(): globalAndroid.util.Property<globalAndroid.view.View,java.lang.Float>;
					public getGone(view0: globalAndroid.view.View): number;
				}
				export class SlideAnimatorListener extends globalAndroid.animation.AnimatorListenerAdapter {
					public static class: java.lang.Class<androidx.leanback.transition.SlideKitkat.SlideAnimatorListener>;
					public onAnimationPause(animator: globalAndroid.animation.Animator): void;
					public constructor(view: globalAndroid.view.View, prop: globalAndroid.util.Property<globalAndroid.view.View,java.lang.Float>, terminalValue: number, endValue: number, finalVisibility: number);
					public onAnimationPause(animation: globalAndroid.animation.Animator): void;
					public onAnimationRepeat(animation: globalAndroid.animation.Animator): void;
					public onAnimationResume(animation: globalAndroid.animation.Animator): void;
					public onAnimationCancel(animator: globalAndroid.animation.Animator): void;
					public onAnimationEnd(animation: globalAndroid.animation.Animator): void;
					public constructor();
					public onAnimationStart(animation: globalAndroid.animation.Animator): void;
					public onAnimationResume(animator: globalAndroid.animation.Animator): void;
					public onAnimationCancel(animation: globalAndroid.animation.Animator): void;
					public onAnimationEnd(animator: globalAndroid.animation.Animator): void;
					public onAnimationEnd(animation: globalAndroid.animation.Animator, isReverse: boolean): void;
					public onAnimationStart(animation: globalAndroid.animation.Animator, isReverse: boolean): void;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module transition {
			export class SlideNoPropagation extends globalAndroid.transition.Slide {
				public static class: java.lang.Class<androidx.leanback.transition.SlideNoPropagation>;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
				public setSlideEdge(slideEdge: number): void;
				public constructor(slideEdge: number);
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module transition {
			export abstract class TransitionEpicenterCallback extends java.lang.Object {
				public static class: java.lang.Class<androidx.leanback.transition.TransitionEpicenterCallback>;
				public onGetEpicenter(object0: any): globalAndroid.graphics.Rect;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module transition {
			export class TransitionHelper extends java.lang.Object {
				public static class: java.lang.Class<androidx.leanback.transition.TransitionHelper>;
				public static FADE_IN: number;
				public static FADE_OUT: number;
				public static setReturnTransition(window: globalAndroid.view.Window, transition: any): void;
				public static setChangeBoundsStartDelay(changeBounds: any, viewId: number, startDelay: number): void;
				public static getSharedElementExitTransition(window: globalAndroid.view.Window): any;
				public static beginDelayedTransition(sceneRoot: globalAndroid.view.ViewGroup, transitionObject: any): void;
				public static exclude(transition: any, targetId: number, exclude: boolean): void;
				public static systemSupportsEntranceTransitions(): boolean;
				public static setSharedElementEnterTransition(fragment: globalAndroid.app.Fragment, transition: any): void;
				public static createScene(sceneRoot: globalAndroid.view.ViewGroup, r: java.lang.Runnable): any;
				public static addSharedElement(ft: globalAndroid.app.FragmentTransaction, view: globalAndroid.view.View, transitionName: string): void;
				public static setEnterTransition(fragment: globalAndroid.app.Fragment, transition: any): void;
				public static setChangeBoundsStartDelay(changeBounds: any, view: globalAndroid.view.View, startDelay: number): void;
				public static createFadeAndShortSlide(edge: number): any;
				public static getExitTransition(window: globalAndroid.view.Window): any;
				public static removeTransitionListener(transition: any, listener: androidx.leanback.transition.TransitionListener): void;
				public static addTransitionListener(transition: any, listener: androidx.leanback.transition.TransitionListener): void;
				public static getSharedElementReturnTransition(window: globalAndroid.view.Window): any;
				public static include(transition: any, targetView: globalAndroid.view.View): void;
				public static setDuration(transition: any, duration: number): void;
				public static setEpicenterCallback(transition: any, callback: androidx.leanback.transition.TransitionEpicenterCallback): void;
				public static setSharedElementReturnTransition(window: globalAndroid.view.Window, transition: any): void;
				public static setSharedElementEnterTransition(window: globalAndroid.view.Window, transition: any): void;
				public static createScale(): any;
				public static createDefaultInterpolator(context: globalAndroid.content.Context): any;
				public static getEnterTransition(window: globalAndroid.view.Window): any;
				public static setEnterTransition(window: globalAndroid.view.Window, transition: any): void;
				public static setStartDelay(transition: any, startDelay: number): void;
				public static createTransitionSet(sequential: boolean): any;
				public static excludeChildren(transition: any, targetId: number, exclude: boolean): void;
				public static excludeChildren(transition: any, targetView: globalAndroid.view.View, exclude: boolean): void;
				public static include(transition: any, targetId: number): void;
				public static addTarget(transition: any, view: globalAndroid.view.View): void;
				public static setChangeBoundsStartDelay(changeBounds: any, className: string, startDelay: number): void;
				public static createAutoTransition(): any;
				public static addTransition(transitionSet: any, transition: any): void;
				public static setChangeBoundsDefaultStartDelay(changeBounds: any, startDelay: number): void;
				public static exclude(transition: any, targetView: globalAndroid.view.View, exclude: boolean): void;
				public static getSharedElementReenterTransition(window: globalAndroid.view.Window): any;
				public static setExitTransition(fragment: globalAndroid.app.Fragment, transition: any): void;
				public static getSharedElementEnterTransition(window: globalAndroid.view.Window): any;
				public static getReturnTransition(window: globalAndroid.view.Window): any;
				public static setInterpolator(transition: any, timeInterpolator: any): void;
				public static createSlide(slideEdge: number): any;
				public static createChangeBounds(reparent: boolean): any;
				public static createFadeAndShortSlide(edge: number, distance: number): any;
				public static runTransition(scene: any, transition: any): void;
				public static loadTransition(context: globalAndroid.content.Context, resId: number): any;
				public static createChangeTransform(): any;
				public static createFadeTransition(fadeMode: number): any;
				public static setTransitionGroup(viewGroup: globalAndroid.view.ViewGroup, transitionGroup: boolean): void;
				public static getReenterTransition(window: globalAndroid.view.Window): any;
			}
			export module TransitionHelper {
				export class TransitionStub extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.transition.TransitionHelper.TransitionStub>;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module transition {
			export class TransitionListener extends java.lang.Object {
				public static class: java.lang.Class<androidx.leanback.transition.TransitionListener>;
				public mImpl: any;
				public onTransitionPause(transition: any): void;
				public onTransitionResume(transition: any): void;
				public onTransitionCancel(transition: any): void;
				public onTransitionStart(transition: any): void;
				public onTransitionEnd(transition: any): void;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module transition {
			export class TranslationAnimationCreator extends java.lang.Object {
				public static class: java.lang.Class<androidx.leanback.transition.TranslationAnimationCreator>;
			}
			export module TranslationAnimationCreator {
				export class TransitionPositionListener extends globalAndroid.animation.AnimatorListenerAdapter implements globalAndroid.transition.Transition.TransitionListener {
					public static class: java.lang.Class<androidx.leanback.transition.TranslationAnimationCreator.TransitionPositionListener>;
					public onAnimationPause(animator: globalAndroid.animation.Animator): void;
					public onAnimationPause(animation: globalAndroid.animation.Animator): void;
					public onAnimationRepeat(animation: globalAndroid.animation.Animator): void;
					public onAnimationResume(animation: globalAndroid.animation.Animator): void;
					public onTransitionCancel(transition: globalAndroid.transition.Transition): void;
					public onTransitionPause(transition: globalAndroid.transition.Transition): void;
					public onTransitionEnd(transition: globalAndroid.transition.Transition): void;
					public onTransitionStart(transition: globalAndroid.transition.Transition): void;
					public onAnimationEnd(animation: globalAndroid.animation.Animator): void;
					public onAnimationStart(animation: globalAndroid.animation.Animator): void;
					public onAnimationResume(animator: globalAndroid.animation.Animator): void;
					public onAnimationCancel(animation: globalAndroid.animation.Animator): void;
					public onAnimationEnd(animator: globalAndroid.animation.Animator): void;
					public onTransitionResume(transition: globalAndroid.transition.Transition): void;
					public onAnimationEnd(animation: globalAndroid.animation.Animator, isReverse: boolean): void;
					public onAnimationStart(animation: globalAndroid.animation.Animator, isReverse: boolean): void;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module util {
			export class MathUtil extends java.lang.Object {
				public static class: java.lang.Class<androidx.leanback.util.MathUtil>;
				public static safeLongToInt(numLong: number): number;
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module util {
			export class StateMachine extends java.lang.Object {
				public static class: java.lang.Class<androidx.leanback.util.StateMachine>;
				public static STATUS_ZERO: number;
				public static STATUS_INVOKED: number;
				public reset(): void;
				public start(): void;
				public addState(state: androidx.leanback.util.StateMachine.State): void;
				public fireEvent(event: androidx.leanback.util.StateMachine.Event): void;
				public addTransition(fromState: androidx.leanback.util.StateMachine.State, toState: androidx.leanback.util.StateMachine.State): void;
				public addTransition(fromState: androidx.leanback.util.StateMachine.State, toState: androidx.leanback.util.StateMachine.State, event: androidx.leanback.util.StateMachine.Event): void;
				public addTransition(fromState: androidx.leanback.util.StateMachine.State, toState: androidx.leanback.util.StateMachine.State, condition: androidx.leanback.util.StateMachine.Condition): void;
				public constructor();
			}
			export module StateMachine {
				export class Condition extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.util.StateMachine.Condition>;
					public constructor(name: string);
					public canProceed(): boolean;
				}
				export class Event extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.util.StateMachine.Event>;
					public constructor(name: string);
				}
				export class State extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.util.StateMachine.State>;
					public toString(): string;
					public constructor(name: string);
					public run(): void;
					public getStatus(): number;
					public constructor(name: string, branchStart: boolean, branchEnd: boolean);
				}
				export class Transition extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.util.StateMachine.Transition>;
					public toString(): string;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export abstract class AbstractDetailsDescriptionPresenter extends androidx.leanback.widget.Presenter {
				public static class: java.lang.Class<androidx.leanback.widget.AbstractDetailsDescriptionPresenter>;
				public onBindDescription(viewHolder0: androidx.leanback.widget.AbstractDetailsDescriptionPresenter.ViewHolder, object1: any): void;
				public onUnbindViewHolder(viewHolder: androidx.leanback.widget.Presenter.ViewHolder): void;
				public onViewAttachedToWindow(holder: androidx.leanback.widget.Presenter.ViewHolder): void;
				public onBindViewHolder(viewHolder: androidx.leanback.widget.Presenter.ViewHolder, item: any): void;
				public onViewDetachedFromWindow(holder: androidx.leanback.widget.Presenter.ViewHolder): void;
				public getFacet(facetClass: java.lang.Class<any>): any;
				public onBindViewHolder(viewHolder0: androidx.leanback.widget.Presenter.ViewHolder, object1: any): void;
				public onCreateViewHolder(viewGroup0: globalAndroid.view.ViewGroup): androidx.leanback.widget.Presenter.ViewHolder;
				public onCreateViewHolder(parent: globalAndroid.view.ViewGroup): androidx.leanback.widget.AbstractDetailsDescriptionPresenter.ViewHolder;
				public onUnbindViewHolder(viewHolder0: androidx.leanback.widget.Presenter.ViewHolder): void;
				public onBindViewHolder(viewHolder: androidx.leanback.widget.Presenter.ViewHolder, item: any, payloads: java.util.List<any>): void;
				public constructor();
			}
			export module AbstractDetailsDescriptionPresenter {
				export class ViewHolder extends androidx.leanback.widget.Presenter.ViewHolder {
					public static class: java.lang.Class<androidx.leanback.widget.AbstractDetailsDescriptionPresenter.ViewHolder>;
					public getTitle(): globalAndroid.widget.TextView;
					public constructor(view: globalAndroid.view.View);
					public getFacet(facetClass: java.lang.Class<any>): any;
					public getBody(): globalAndroid.widget.TextView;
					public getSubtitle(): globalAndroid.widget.TextView;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export abstract class AbstractMediaItemPresenter extends androidx.leanback.widget.RowPresenter {
				public static class: java.lang.Class<androidx.leanback.widget.AbstractMediaItemPresenter>;
				public static PLAY_STATE_INITIAL: number;
				public static PLAY_STATE_PAUSED: number;
				public static PLAY_STATE_PLAYING: number;
				public createRowViewHolder(parent: globalAndroid.view.ViewGroup): androidx.leanback.widget.RowPresenter.ViewHolder;
				public onBindRowActions(vh: androidx.leanback.widget.AbstractMediaItemPresenter.ViewHolder): void;
				public onBindMediaDetails(viewHolder0: androidx.leanback.widget.AbstractMediaItemPresenter.ViewHolder, object1: any): void;
				public createRowViewHolder(viewGroup0: globalAndroid.view.ViewGroup): androidx.leanback.widget.RowPresenter.ViewHolder;
				public getMediaPlayState(item: any): number;
				public getActionPresenter(): androidx.leanback.widget.Presenter;
				public setBackgroundColor(color: number): void;
				public setThemeId(themeId: number): void;
				public setActionPresenter(actionPresenter: androidx.leanback.widget.Presenter): void;
				public onBindRowViewHolder(vh: androidx.leanback.widget.RowPresenter.ViewHolder, item: any): void;
				public onUnbindMediaDetails(vh: androidx.leanback.widget.AbstractMediaItemPresenter.ViewHolder): void;
				public constructor();
				public onUnbindMediaPlayState(vh: androidx.leanback.widget.AbstractMediaItemPresenter.ViewHolder): void;
				public constructor(themeId: number);
				public isClippingChildren(): boolean;
				public isUsingDefaultSelectEffect(): boolean;
				public hasMediaRowSeparator(): boolean;
				public onBindMediaPlayState(vh: androidx.leanback.widget.AbstractMediaItemPresenter.ViewHolder): void;
				public getFacet(facetClass: java.lang.Class<any>): any;
				public getThemeId(): number;
				public setHasMediaRowSeparator(hasSeparator: boolean): void;
			}
			export module AbstractMediaItemPresenter {
				export class ViewHolder extends androidx.leanback.widget.RowPresenter.ViewHolder {
					public static class: java.lang.Class<androidx.leanback.widget.AbstractMediaItemPresenter.ViewHolder>;
					public getMediaItemRowActions(): native.Array<androidx.leanback.widget.MultiActionsProvider.MultiAction>;
					public getMediaItemPlayingView(): globalAndroid.view.View;
					public notifyDetailsChanged(): void;
					public getMediaItemActionsContainer(): globalAndroid.view.ViewGroup;
					public notifyActionChanged(action: androidx.leanback.widget.MultiActionsProvider.MultiAction): void;
					public getMediaItemPausedView(): globalAndroid.view.View;
					public getSelectorView(): globalAndroid.view.View;
					public getMediaItemRowSeparator(): globalAndroid.view.View;
					public onBindRowActions(): void;
					public getMediaItemDurationView(): globalAndroid.widget.TextView;
					public getMediaItemNumberView(): globalAndroid.widget.TextView;
					public constructor(view: globalAndroid.view.View);
					public getFacet(facetClass: java.lang.Class<any>): any;
					public notifyPlayStateChanged(): void;
					public getMediaItemNameView(): globalAndroid.widget.TextView;
					public setSelectedMediaItemNumberView(position: number): void;
					public getMediaItemNumberViewFlipper(): globalAndroid.widget.ViewFlipper;
					public getMediaItemDetailsView(): globalAndroid.view.View;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export abstract class AbstractMediaListHeaderPresenter extends androidx.leanback.widget.RowPresenter {
				public static class: java.lang.Class<androidx.leanback.widget.AbstractMediaListHeaderPresenter>;
				public createRowViewHolder(parent: globalAndroid.view.ViewGroup): androidx.leanback.widget.RowPresenter.ViewHolder;
				public isUsingDefaultSelectEffect(): boolean;
				public createRowViewHolder(viewGroup0: globalAndroid.view.ViewGroup): androidx.leanback.widget.RowPresenter.ViewHolder;
				public getFacet(facetClass: java.lang.Class<any>): any;
				public setBackgroundColor(color: number): void;
				public onBindRowViewHolder(vh: androidx.leanback.widget.RowPresenter.ViewHolder, item: any): void;
				public onBindMediaListHeaderViewHolder(viewHolder0: androidx.leanback.widget.AbstractMediaListHeaderPresenter.ViewHolder, object1: any): void;
				public constructor();
				public constructor(context: globalAndroid.content.Context, mThemeResId: number);
			}
			export module AbstractMediaListHeaderPresenter {
				export class ViewHolder extends androidx.leanback.widget.RowPresenter.ViewHolder {
					public static class: java.lang.Class<androidx.leanback.widget.AbstractMediaListHeaderPresenter.ViewHolder>;
					public constructor(view: globalAndroid.view.View);
					public getFacet(facetClass: java.lang.Class<any>): any;
					public getHeaderView(): globalAndroid.widget.TextView;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class Action extends java.lang.Object {
				public static class: java.lang.Class<androidx.leanback.widget.Action>;
				public static NO_ID: number;
				public setLabel1(label: string): void;
				public respondsToKeyCode(keyCode: number): boolean;
				public addKeyCode(keyCode: number): void;
				public constructor(id: number);
				public removeKeyCode(keyCode: number): void;
				public constructor(id: number, label: string);
				public getId(): number;
				public getLabel1(): string;
				public constructor(id: number, label1: string, label2: string);
				public getIcon(): globalAndroid.graphics.drawable.Drawable;
				public toString(): string;
				public setIcon(icon: globalAndroid.graphics.drawable.Drawable): void;
				public setId(id: number): void;
				public setLabel2(label: string): void;
				public constructor(id: number, label1: string, label2: string, icon: globalAndroid.graphics.drawable.Drawable);
				public getLabel2(): string;
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class ActionPresenterSelector extends androidx.leanback.widget.PresenterSelector {
				public static class: java.lang.Class<androidx.leanback.widget.ActionPresenterSelector>;
				public getPresenter(object0: any): androidx.leanback.widget.Presenter;
				public getPresenters(): native.Array<androidx.leanback.widget.Presenter>;
				public getPresenter(item: any): androidx.leanback.widget.Presenter;
			}
			export module ActionPresenterSelector {
				export abstract class ActionPresenter extends androidx.leanback.widget.Presenter {
					public static class: java.lang.Class<androidx.leanback.widget.ActionPresenterSelector.ActionPresenter>;
					public getFacet(facetClass: java.lang.Class<any>): any;
					public onBindViewHolder(viewHolder0: androidx.leanback.widget.Presenter.ViewHolder, object1: any): void;
					public onBindViewHolder(viewHolder: androidx.leanback.widget.Presenter.ViewHolder, item: any): void;
					public onUnbindViewHolder(viewHolder0: androidx.leanback.widget.Presenter.ViewHolder): void;
					public onBindViewHolder(viewHolder: androidx.leanback.widget.Presenter.ViewHolder, item: any, payloads: java.util.List<any>): void;
					public onUnbindViewHolder(viewHolder: androidx.leanback.widget.Presenter.ViewHolder): void;
				}
				export class ActionViewHolder extends androidx.leanback.widget.Presenter.ViewHolder {
					public static class: java.lang.Class<androidx.leanback.widget.ActionPresenterSelector.ActionViewHolder>;
					public constructor(view: globalAndroid.view.View);
					public getFacet(facetClass: java.lang.Class<any>): any;
					public constructor(view: globalAndroid.view.View, layoutDirection: number);
				}
				export class OneLineActionPresenter extends androidx.leanback.widget.ActionPresenterSelector.ActionPresenter {
					public static class: java.lang.Class<androidx.leanback.widget.ActionPresenterSelector.OneLineActionPresenter>;
					public onCreateViewHolder(viewGroup0: globalAndroid.view.ViewGroup): androidx.leanback.widget.Presenter.ViewHolder;
					public getFacet(facetClass: java.lang.Class<any>): any;
					public onBindViewHolder(viewHolder: androidx.leanback.widget.Presenter.ViewHolder, item: any): void;
					public onCreateViewHolder(parent: globalAndroid.view.ViewGroup): androidx.leanback.widget.Presenter.ViewHolder;
					public onBindViewHolder(viewHolder: androidx.leanback.widget.Presenter.ViewHolder, item: any, payloads: java.util.List<any>): void;
				}
				export class TwoLineActionPresenter extends androidx.leanback.widget.ActionPresenterSelector.ActionPresenter {
					public static class: java.lang.Class<androidx.leanback.widget.ActionPresenterSelector.TwoLineActionPresenter>;
					public onCreateViewHolder(viewGroup0: globalAndroid.view.ViewGroup): androidx.leanback.widget.Presenter.ViewHolder;
					public getFacet(facetClass: java.lang.Class<any>): any;
					public onBindViewHolder(viewHolder: androidx.leanback.widget.Presenter.ViewHolder, item: any): void;
					public onCreateViewHolder(parent: globalAndroid.view.ViewGroup): androidx.leanback.widget.Presenter.ViewHolder;
					public onBindViewHolder(viewHolder: androidx.leanback.widget.Presenter.ViewHolder, item: any, payloads: java.util.List<any>): void;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class ArrayObjectAdapter extends androidx.leanback.widget.ObjectAdapter {
				public static class: java.lang.Class<androidx.leanback.widget.ArrayObjectAdapter>;
				public addAll(index: number, items: java.util.Collection<any>): void;
				public setItems(itemList: java.util.List<any>, callback: androidx.leanback.widget.DiffCallback<any>): void;
				public get(index: number): any;
				public constructor(presenterSelector: androidx.leanback.widget.PresenterSelector);
				public notifyArrayItemRangeChanged(positionStart: number, itemCount: number): void;
				public unmodifiableList(): java.util.List<any>;
				public add(index: number, item: any): void;
				public constructor();
				public size(): number;
				public get(int0: number): any;
				public add(item: any): void;
				public replace(position: number, item: any): void;
				public indexOf(item: any): number;
				public removeItems(position: number, count: number): number;
				public move(fromPosition: number, toPosition: number): void;
				public clear(): void;
				public isImmediateNotifySupported(): boolean;
				public remove(item: any): boolean;
				public constructor(presenter: androidx.leanback.widget.Presenter);
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class BackgroundHelper extends java.lang.Object {
				public static class: java.lang.Class<androidx.leanback.widget.BackgroundHelper>;
				public static setBackgroundPreservingAlpha(view: globalAndroid.view.View, drawable: globalAndroid.graphics.drawable.Drawable): void;
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class BaseCardView extends globalAndroid.widget.FrameLayout {
				public static class: java.lang.Class<androidx.leanback.widget.BaseCardView>;
				public static CARD_TYPE_MAIN_ONLY: number;
				public static CARD_TYPE_INFO_OVER: number;
				public static CARD_TYPE_INFO_UNDER: number;
				public static CARD_TYPE_INFO_UNDER_WITH_EXTRA: number;
				public static CARD_REGION_VISIBLE_ALWAYS: number;
				public static CARD_REGION_VISIBLE_ACTIVATED: number;
				public static CARD_REGION_VISIBLE_SELECTED: number;
				/** @deprecated */
				public invalidateChild(child: globalAndroid.view.View, dirty: globalAndroid.graphics.Rect): void;
				public generateLayoutParams(attrs: globalAndroid.util.AttributeSet): globalAndroid.widget.FrameLayout.LayoutParams;
				public focusSearch(direction: number): globalAndroid.view.View;
				public constructor(context: globalAndroid.content.Context);
				public checkLayoutParams(p: globalAndroid.view.ViewGroup.LayoutParams): boolean;
				public onNestedScrollAccepted(child: globalAndroid.view.View, target: globalAndroid.view.View, axes: number): void;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
				public childDrawableStateChanged(child: globalAndroid.view.View): void;
				public onStopNestedScroll(child: globalAndroid.view.View): void;
				public setSelected(selected: boolean): void;
				public isLayoutRequested(): boolean;
				public sendAccessibilityEvent(eventType: number): void;
				public onNestedPrePerformAccessibilityAction(target: globalAndroid.view.View, action: number, bundle2: globalAndroid.os.Bundle): boolean;
				public addView(child: globalAndroid.view.View, index: number): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
				public generateDefaultLayoutParams(): globalAndroid.widget.FrameLayout.LayoutParams;
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
				public generateLayoutParams(attrs: globalAndroid.util.AttributeSet): globalAndroid.view.ViewGroup.LayoutParams;
				public toString(): string;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
				public keyboardNavigationClusterSearch(currentCluster: globalAndroid.view.View, direction: number): globalAndroid.view.View;
				public onLayout(changed: boolean, left: number, top: number, right: number, bottom: number): void;
				public setActivated(activated: boolean): void;
				public addView(child: globalAndroid.view.View, width: number, height: number): void;
				public isTextDirectionResolved(): boolean;
				public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
				public childHasTransientStateChanged(child: globalAndroid.view.View, childHasTransientState: boolean): void;
				public onDetachedFromWindow(): void;
				public focusableViewAvailable(v: globalAndroid.view.View): void;
				public getCardType(): number;
				public showContextMenuForChild(originalView: globalAndroid.view.View): boolean;
				public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public generateDefaultLayoutParams(): globalAndroid.view.ViewGroup.LayoutParams;
				public recomputeViewAttributes(child: globalAndroid.view.View): void;
				public generateLayoutParams(lp: globalAndroid.view.ViewGroup.LayoutParams): globalAndroid.view.ViewGroup.LayoutParams;
				public addView(child: globalAndroid.view.View): void;
				public requestSendAccessibilityEvent(child: globalAndroid.view.View, event: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
				public isLayoutDirectionResolved(): boolean;
				public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
				public isTextAlignmentResolved(): boolean;
				public getLayoutDirection(): number;
				public addView(child: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public setInfoVisibility(visibility: number): void;
				public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public canResolveTextDirection(): boolean;
				public canResolveTextAlignment(): boolean;
				public notifySubtreeAccessibilityStateChanged(child: globalAndroid.view.View, source: globalAndroid.view.View, changeType: number): void;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
				public onCreateDrawableState(extraSpace: number): native.Array<number>;
				public generateLayoutParams(lp: globalAndroid.view.ViewGroup.LayoutParams): androidx.leanback.widget.BaseCardView.LayoutParams;
				public generateLayoutParams(attrs: globalAndroid.util.AttributeSet): androidx.leanback.widget.BaseCardView.LayoutParams;
				public updateViewLayout(view: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public onNestedScroll(target: globalAndroid.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
				public requestLayout(): void;
				public getInfoVisibility(): number;
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
				/** @deprecated */
				public setExtraVisibility(visibility: number): void;
				public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public setCardType(type: number): void;
				/** @deprecated */
				public getExtraVisibility(): number;
				public getChildVisibleRect(child: globalAndroid.view.View, r: globalAndroid.graphics.Rect, offset: globalAndroid.graphics.Point): boolean;
				public requestChildFocus(child: globalAndroid.view.View, focused: globalAndroid.view.View): void;
				public createContextMenu(menu: globalAndroid.view.ContextMenu): void;
				public canResolveLayoutDirection(): boolean;
				public generateDefaultLayoutParams(): androidx.leanback.widget.BaseCardView.LayoutParams;
				public setSelectedAnimationDelayed(delay: boolean): void;
				public addView(child: globalAndroid.view.View, index: number, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public onNestedPreFling(target: globalAndroid.view.View, velocityX: number, velocityY: number): boolean;
				public getParent(): globalAndroid.view.ViewParent;
				public isSelectedAnimationDelayed(): boolean;
				public shouldDelayChildPressedState(): boolean;
			}
			export module BaseCardView {
				export class AnimationBase extends globalAndroid.view.animation.Animation {
					public static class: java.lang.Class<androidx.leanback.widget.BaseCardView.AnimationBase>;
				}
				export class InfoAlphaAnimation extends androidx.leanback.widget.BaseCardView.AnimationBase {
					public static class: java.lang.Class<androidx.leanback.widget.BaseCardView.InfoAlphaAnimation>;
					public applyTransformation(interpolatedTime: number, t: globalAndroid.view.animation.Transformation): void;
					public constructor();
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
					public constructor(this0: androidx.leanback.widget.BaseCardView, start: number, end: number);
				}
				export class InfoHeightAnimation extends androidx.leanback.widget.BaseCardView.AnimationBase {
					public static class: java.lang.Class<androidx.leanback.widget.BaseCardView.InfoHeightAnimation>;
					public applyTransformation(interpolatedTime: number, t: globalAndroid.view.animation.Transformation): void;
					public constructor();
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
					public constructor(this0: androidx.leanback.widget.BaseCardView, start: number, end: number);
				}
				export class InfoOffsetAnimation extends androidx.leanback.widget.BaseCardView.AnimationBase {
					public static class: java.lang.Class<androidx.leanback.widget.BaseCardView.InfoOffsetAnimation>;
					public applyTransformation(interpolatedTime: number, t: globalAndroid.view.animation.Transformation): void;
					public constructor();
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
					public constructor(this0: androidx.leanback.widget.BaseCardView, start: number, end: number);
				}
				export class LayoutParams extends globalAndroid.widget.FrameLayout.LayoutParams {
					public static class: java.lang.Class<androidx.leanback.widget.BaseCardView.LayoutParams>;
					public static VIEW_TYPE_MAIN: number;
					public static VIEW_TYPE_INFO: number;
					public static VIEW_TYPE_EXTRA: number;
					public viewType: number;
					public constructor(source: globalAndroid.view.ViewGroup.LayoutParams);
					public constructor(c: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
					public constructor(source: androidx.leanback.widget.BaseCardView.LayoutParams);
					public constructor(width: number, height: number, gravity: number);
					public constructor(source: globalAndroid.widget.FrameLayout.LayoutParams);
					public constructor(width: number, height: number);
					public constructor(p: globalAndroid.view.ViewGroup.LayoutParams);
					public constructor(source: globalAndroid.view.ViewGroup.MarginLayoutParams);
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export abstract class BaseGridView extends androidx.recyclerview.widget.RecyclerView {
				public static class: java.lang.Class<androidx.leanback.widget.BaseGridView>;
				public static FOCUS_SCROLL_ALIGNED: number;
				public static FOCUS_SCROLL_ITEM: number;
				public static FOCUS_SCROLL_PAGE: number;
				public static WINDOW_ALIGN_LOW_EDGE: number;
				public static WINDOW_ALIGN_HIGH_EDGE: number;
				public static WINDOW_ALIGN_BOTH_EDGE: number;
				public static WINDOW_ALIGN_NO_EDGE: number;
				public static WINDOW_ALIGN_OFFSET_PERCENT_DISABLED: number;
				public static ITEM_ALIGN_OFFSET_PERCENT_DISABLED: number;
				public static SAVE_NO_CHILD: number;
				public static SAVE_ON_SCREEN_CHILD: number;
				public static SAVE_LIMITED_CHILD: number;
				public static SAVE_ALL_CHILD: number;
				/** @deprecated */
				public invalidateChild(child: globalAndroid.view.View, dirty: globalAndroid.graphics.Rect): void;
				/** @deprecated */
				public setItemMargin(margin: number): void;
				public focusSearch(direction: number): globalAndroid.view.View;
				public smoothScrollToPosition(position: number): void;
				public getSaveChildrenLimitNumber(): number;
				public setRecyclerListener(listener: androidx.recyclerview.widget.RecyclerView.RecyclerListener): void;
				public setFocusScrollStrategy(scrollStrategy: number): void;
				public dispatchTouchEvent(event: globalAndroid.view.MotionEvent): boolean;
				public childDrawableStateChanged(child: globalAndroid.view.View): void;
				public onStopNestedScroll(child: globalAndroid.view.View): void;
				public isLayoutRequested(): boolean;
				public startNestedScroll(axes: number, type: number): boolean;
				public onNestedPrePerformAccessibilityAction(target: globalAndroid.view.View, action: number, bundle2: globalAndroid.os.Bundle): boolean;
				public setChildrenVisibility(visibility: number): void;
				public getTextDirection(): number;
				public setHasOverlappingRendering(hasOverlapping: boolean): void;
				public setAnimateChildLayout(animateChildLayout: boolean): void;
				public isWindowAlignmentPreferKeyLineOverHighEdge(): boolean;
				public setWindowAlignmentPreferKeyLineOverHighEdge(preferKeyLineOverHighEdge: boolean): void;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
				public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public setOnKeyInterceptListener(listener: androidx.leanback.widget.BaseGridView.OnKeyInterceptListener): void;
				public getExtraLayoutSpace(): number;
				public getFocusScrollStrategy(): number;
				/** @deprecated */
				public invalidateChildInParent(location: native.Array<number>, dirty: globalAndroid.graphics.Rect): globalAndroid.view.ViewParent;
				public getParentForAccessibility(): globalAndroid.view.ViewParent;
				public onNestedFling(target: globalAndroid.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
				public keyboardNavigationClusterSearch(currentCluster: globalAndroid.view.View, direction: number): globalAndroid.view.View;
				public computeHorizontalScrollExtent(): number;
				/** @deprecated */
				public setHorizontalMargin(margin: number): void;
				public isTextDirectionResolved(): boolean;
				public getItemAlignmentOffset(): number;
				public getHorizontalSpacing(): number;
				public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
				public setOnChildSelectedListener(listener: androidx.leanback.widget.OnChildSelectedListener): void;
				public computeVerticalScrollRange(): number;
				public dispatchNestedScroll(dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number, offsetInWindow: native.Array<number>, type: number, consumed: native.Array<number>): void;
				public showContextMenuForChild(originalView: globalAndroid.view.View): boolean;
				public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public setOnMotionInterceptListener(listener: androidx.leanback.widget.BaseGridView.OnMotionInterceptListener): void;
				public setItemAlignmentOffsetPercent(offsetPercent: number): void;
				public recomputeViewAttributes(child: globalAndroid.view.View): void;
				public isItemAlignmentOffsetWithPadding(): boolean;
				public isLayoutDirectionResolved(): boolean;
				public removeOnChildViewHolderSelectedListener(listener: androidx.leanback.widget.OnChildViewHolderSelectedListener): void;
				public onRtlPropertiesChanged(layoutDirection: number): void;
				public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onRequestFocusInDescendants(direction: number, previouslyFocusedRect: globalAndroid.graphics.Rect): boolean;
				public hasNestedScrollingParent(type: number): boolean;
				public isScrollEnabled(): boolean;
				public computeHorizontalScrollOffset(): number;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
				public updateViewLayout(view: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public onNestedScroll(target: globalAndroid.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
				public stopNestedScroll(type: number): void;
				public isWindowAlignmentPreferKeyLineOverLowEdge(): boolean;
				public focusSearch(focused: globalAndroid.view.View, direction: number): globalAndroid.view.View;
				/** @deprecated */
				public requestFitSystemWindows(): void;
				public setSelectedPositionSmooth(position: number): void;
				public showContextMenuForChild(originalView: globalAndroid.view.View, x: number, y: number): boolean;
				public requestChildRectangleOnScreen(child: globalAndroid.view.View, rect: globalAndroid.graphics.Rect, immediate: boolean): boolean;
				public bringChildToFront(child: globalAndroid.view.View): void;
				public getInitialPrefetchItemCount(): number;
				public clearChildFocus(child: globalAndroid.view.View): void;
				public setWindowAlignmentOffsetPercent(offsetPercent: number): void;
				public setSelectedPosition(position: number, scrollExtra: number): void;
				public setOnChildViewHolderSelectedListener(listener: androidx.leanback.widget.OnChildViewHolderSelectedListener): void;
				public setSaveChildrenPolicy(savePolicy: number): void;
				public setOnTouchInterceptListener(listener: androidx.leanback.widget.BaseGridView.OnTouchInterceptListener): void;
				public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public getChildDrawingOrder(drawingPosition: number): number;
				public startNestedScroll(axes: number): boolean;
				public setItemAlignmentOffset(offset: number): void;
				public stopNestedScroll(): void;
				public setItemAlignmentOffsetWithPadding(withPadding: boolean): void;
				public setPruneChild(pruneChild: boolean): void;
				public addView(child: globalAndroid.view.View, index: number, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public getSelectedSubPosition(): number;
				public dispatchNestedScroll(dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number, offsetInWindow: native.Array<number>, type: number): boolean;
				public getViewSelectedOffsets(view: globalAndroid.view.View, offsets: native.Array<number>): void;
				public getParent(): globalAndroid.view.ViewParent;
				public setWindowAlignmentPreferKeyLineOverLowEdge(preferKeyLineOverLowEdge: boolean): void;
				public addOnChildViewHolderSelectedListener(listener: androidx.leanback.widget.OnChildViewHolderSelectedListener): void;
				public setSelectedPositionWithSub(position: number, subposition: number): void;
				public setHorizontalSpacing(spacing: number): void;
				public setGravity(gravity: number): void;
				public onNestedScrollAccepted(child: globalAndroid.view.View, target: globalAndroid.view.View, axes: number): void;
				public computeVerticalScrollOffset(): number;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
				public setItemSpacing(spacing: number): void;
				public getWindowAlignmentOffsetPercent(): number;
				public setSelectedPositionSmoothWithSub(position: number, subposition: number): void;
				public hasPreviousViewInSameRow(position: number): boolean;
				public getWindowAlignment(): number;
				public sendAccessibilityEvent(eventType: number): void;
				public setWindowAlignment(windowAlignment: number): void;
				public dispatchNestedPreScroll(dx: number, dy: number, consumed: native.Array<number>, offsetInWindow: native.Array<number>, type: number): boolean;
				public addView(child: globalAndroid.view.View, index: number): void;
				public computeHorizontalScrollRange(): number;
				public requestFitSystemWindows(): void;
				public dispatchKeyEvent(event: globalAndroid.view.KeyEvent): boolean;
				public setSelectedPosition(position: number): void;
				public setOnChildLaidOutListener(listener: androidx.leanback.widget.OnChildLaidOutListener): void;
				public setSelectedPositionWithSub(position: number, subposition: number, scrollExtra: number): void;
				public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback, type: number): globalAndroid.view.ActionMode;
				public getTextAlignment(): number;
				public getVerticalSpacing(): number;
				public setFocusDrawingOrderEnabled(enabled: boolean): void;
				public dispatchNestedScroll(dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number, offsetInWindow: native.Array<number>): boolean;
				public animateOut(): void;
				public addView(child: globalAndroid.view.View, width: number, height: number): void;
				public isChildLayoutAnimated(): boolean;
				public setSelectedPosition(position: number, task: androidx.leanback.widget.ViewHolderTask): void;
				public childHasTransientStateChanged(child: globalAndroid.view.View, childHasTransientState: boolean): void;
				public computeVerticalScrollExtent(): number;
				public focusableViewAvailable(v: globalAndroid.view.View): void;
				public setOnUnhandledKeyListener(listener: androidx.leanback.widget.BaseGridView.OnUnhandledKeyListener): void;
				public getSelectedPosition(): number;
				public addView(child: globalAndroid.view.View): void;
				public setExtraLayoutSpace(extraLayoutSpace: number): void;
				public requestSendAccessibilityEvent(child: globalAndroid.view.View, event: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
				public isTextAlignmentResolved(): boolean;
				public getLayoutDirection(): number;
				public addView(child: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public setScrollEnabled(scrollEnabled: boolean): void;
				public scrollToPosition(position: number): void;
				public canResolveTextDirection(): boolean;
				public setSaveChildrenLimitNumber(limitNumber: number): void;
				public canResolveTextAlignment(): boolean;
				public getItemAlignmentOffsetPercent(): number;
				public notifySubtreeAccessibilityStateChanged(child: globalAndroid.view.View, source: globalAndroid.view.View, changeType: number): void;
				public dispatchNestedPreScroll(dx: number, dy: number, consumed: native.Array<number>, offsetInWindow: native.Array<number>): boolean;
				public getOnUnhandledKeyListener(): androidx.leanback.widget.BaseGridView.OnUnhandledKeyListener;
				public isFocusDrawingOrderEnabled(): boolean;
				public setItemAlignmentViewId(viewId: number): void;
				public animateIn(): void;
				public setWindowAlignmentOffset(offset: number): void;
				public onFocusChanged(gainFocus: boolean, direction: number, previouslyFocusedRect: globalAndroid.graphics.Rect): void;
				public requestLayout(): void;
				public getSaveChildrenPolicy(): number;
				public requestTransparentRegion(child: globalAndroid.view.View): void;
				public onStartNestedScroll(child: globalAndroid.view.View, target: globalAndroid.view.View, nestedScrollAxes: number): boolean;
				public setLayoutEnabled(layoutEnabled: boolean): void;
				public dispatchGenericFocusedEvent(event: globalAndroid.view.MotionEvent): boolean;
				public onNestedPreScroll(target: globalAndroid.view.View, dx: number, dy: number, consumed: native.Array<number>): void;
				public getItemAlignmentViewId(): number;
				public onDescendantInvalidated(child: globalAndroid.view.View, target: globalAndroid.view.View): void;
				public removeView(view: globalAndroid.view.View): void;
				public isFocusSearchDisabled(): boolean;
				public setVerticalSpacing(spacing: number): void;
				public getChildDrawingOrder(childCount: number, i: number): number;
				/** @deprecated */
				public getVerticalMargin(): number;
				public getWindowAlignmentOffset(): number;
				public getChildVisibleRect(child: globalAndroid.view.View, r: globalAndroid.graphics.Rect, offset: globalAndroid.graphics.Point): boolean;
				public requestChildFocus(child: globalAndroid.view.View, focused: globalAndroid.view.View): void;
				public createContextMenu(menu: globalAndroid.view.ContextMenu): void;
				public canResolveLayoutDirection(): boolean;
				/** @deprecated */
				public setVerticalMargin(margin: number): void;
				public setFocusSearchDisabled(disabled: boolean): void;
				public hasNestedScrollingParent(): boolean;
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				/** @deprecated */
				public getHorizontalMargin(): number;
				public setInitialPrefetchItemCount(itemCount: number): void;
				public onNestedPreFling(target: globalAndroid.view.View, velocityX: number, velocityY: number): boolean;
				public dispatchTouchEvent(ev: globalAndroid.view.MotionEvent): boolean;
				public setSelectedPositionSmooth(position: number, task: androidx.leanback.widget.ViewHolderTask): void;
				public hasOverlappingRendering(): boolean;
			}
			export module BaseGridView {
				export class OnKeyInterceptListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.widget.BaseGridView.OnKeyInterceptListener>;
					/**
					 * Constructs a new instance of the androidx.leanback.widget.BaseGridView$OnKeyInterceptListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onInterceptKeyEvent(keyEvent0: globalAndroid.view.KeyEvent): boolean;
					});
					public constructor();
					public onInterceptKeyEvent(keyEvent0: globalAndroid.view.KeyEvent): boolean;
				}
				export class OnMotionInterceptListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.widget.BaseGridView.OnMotionInterceptListener>;
					/**
					 * Constructs a new instance of the androidx.leanback.widget.BaseGridView$OnMotionInterceptListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onInterceptMotionEvent(motionEvent0: globalAndroid.view.MotionEvent): boolean;
					});
					public constructor();
					public onInterceptMotionEvent(motionEvent0: globalAndroid.view.MotionEvent): boolean;
				}
				export class OnTouchInterceptListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.widget.BaseGridView.OnTouchInterceptListener>;
					/**
					 * Constructs a new instance of the androidx.leanback.widget.BaseGridView$OnTouchInterceptListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onInterceptTouchEvent(motionEvent0: globalAndroid.view.MotionEvent): boolean;
					});
					public constructor();
					public onInterceptTouchEvent(motionEvent0: globalAndroid.view.MotionEvent): boolean;
				}
				export class OnUnhandledKeyListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.widget.BaseGridView.OnUnhandledKeyListener>;
					/**
					 * Constructs a new instance of the androidx.leanback.widget.BaseGridView$OnUnhandledKeyListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onUnhandledKey(keyEvent0: globalAndroid.view.KeyEvent): boolean;
					});
					public constructor();
					public onUnhandledKey(keyEvent0: globalAndroid.view.KeyEvent): boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class BaseOnItemViewClickedListener<T>  extends java.lang.Object {
				public static class: java.lang.Class<androidx.leanback.widget.BaseOnItemViewClickedListener<any>>;
				/**
				 * Constructs a new instance of the androidx.leanback.widget.BaseOnItemViewClickedListener<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onItemClicked(viewHolder0: androidx.leanback.widget.Presenter.ViewHolder, object1: any, viewHolder2: androidx.leanback.widget.RowPresenter.ViewHolder, object3: T): void;
				});
				public constructor();
				public onItemClicked(viewHolder0: androidx.leanback.widget.Presenter.ViewHolder, object1: any, viewHolder2: androidx.leanback.widget.RowPresenter.ViewHolder, object3: T): void;
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class BaseOnItemViewSelectedListener<T>  extends java.lang.Object {
				public static class: java.lang.Class<androidx.leanback.widget.BaseOnItemViewSelectedListener<any>>;
				/**
				 * Constructs a new instance of the androidx.leanback.widget.BaseOnItemViewSelectedListener<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onItemSelected(viewHolder0: androidx.leanback.widget.Presenter.ViewHolder, object1: any, viewHolder2: androidx.leanback.widget.RowPresenter.ViewHolder, object3: T): void;
				});
				public constructor();
				public onItemSelected(viewHolder0: androidx.leanback.widget.Presenter.ViewHolder, object1: any, viewHolder2: androidx.leanback.widget.RowPresenter.ViewHolder, object3: T): void;
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class BrowseFrameLayout extends globalAndroid.widget.FrameLayout {
				public static class: java.lang.Class<androidx.leanback.widget.BrowseFrameLayout>;
				/** @deprecated */
				public invalidateChild(child: globalAndroid.view.View, dirty: globalAndroid.graphics.Rect): void;
				public setOnFocusSearchListener(listener: androidx.leanback.widget.BrowseFrameLayout.OnFocusSearchListener): void;
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
				public dispatchKeyEvent(event: globalAndroid.view.KeyEvent): boolean;
				public getOnFocusSearchListener(): androidx.leanback.widget.BrowseFrameLayout.OnFocusSearchListener;
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
				public onRequestFocusInDescendants(direction: number, previouslyFocusedRect: globalAndroid.graphics.Rect): boolean;
				public notifySubtreeAccessibilityStateChanged(child: globalAndroid.view.View, source: globalAndroid.view.View, changeType: number): void;
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
				public showContextMenuForChild(originalView: globalAndroid.view.View, x: number, y: number): boolean;
				public bringChildToFront(child: globalAndroid.view.View): void;
				public onNestedPreScroll(target: globalAndroid.view.View, dx: number, dy: number, consumed: native.Array<number>): void;
				public clearChildFocus(child: globalAndroid.view.View): void;
				public setOnDispatchKeyListener(listener: globalAndroid.view.View.OnKeyListener): void;
				public setOnChildFocusListener(listener: androidx.leanback.widget.BrowseFrameLayout.OnChildFocusListener): void;
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
				public getOnChildFocusListener(): androidx.leanback.widget.BrowseFrameLayout.OnChildFocusListener;
				public addView(child: globalAndroid.view.View, index: number, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public onNestedPreFling(target: globalAndroid.view.View, velocityX: number, velocityY: number): boolean;
				public getParent(): globalAndroid.view.ViewParent;
			}
			export module BrowseFrameLayout {
				export class OnChildFocusListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.widget.BrowseFrameLayout.OnChildFocusListener>;
					/**
					 * Constructs a new instance of the androidx.leanback.widget.BrowseFrameLayout$OnChildFocusListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onRequestFocusInDescendants(int0: number, rect1: globalAndroid.graphics.Rect): boolean;
						onRequestChildFocus(view0: globalAndroid.view.View, view1: globalAndroid.view.View): void;
					});
					public constructor();
					public onRequestFocusInDescendants(int0: number, rect1: globalAndroid.graphics.Rect): boolean;
					public onRequestChildFocus(view0: globalAndroid.view.View, view1: globalAndroid.view.View): void;
				}
				export class OnFocusSearchListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.widget.BrowseFrameLayout.OnFocusSearchListener>;
					/**
					 * Constructs a new instance of the androidx.leanback.widget.BrowseFrameLayout$OnFocusSearchListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onFocusSearch(view0: globalAndroid.view.View, int1: number): globalAndroid.view.View;
					});
					public constructor();
					public onFocusSearch(view0: globalAndroid.view.View, int1: number): globalAndroid.view.View;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class BrowseRowsFrameLayout extends globalAndroid.widget.FrameLayout {
				public static class: java.lang.Class<androidx.leanback.widget.BrowseRowsFrameLayout>;
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
				public measureChildWithMargins(child: globalAndroid.view.View, parentWidthMeasureSpec: number, widthUsed: number, parentHeightMeasureSpec: number, heightUsed: number): void;
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
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyle: number);
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
	export module leanback {
		export module widget {
			export class CheckableImageView extends globalAndroid.widget.ImageView implements globalAndroid.widget.Checkable {
				public static class: java.lang.Class<androidx.leanback.widget.CheckableImageView>;
				public isChecked(): boolean;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public constructor(context: globalAndroid.content.Context);
				public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
				public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
				public toggle(): void;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
				public onCreateDrawableState(extraSpace: number): native.Array<number>;
				public sendAccessibilityEvent(eventType: number): void;
				public setChecked(checked: boolean): void;
				public invalidateDrawable(dr: globalAndroid.graphics.drawable.Drawable): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class ClassPresenterSelector extends androidx.leanback.widget.PresenterSelector {
				public static class: java.lang.Class<androidx.leanback.widget.ClassPresenterSelector>;
				public addClassPresenterSelector(cls: java.lang.Class<any>, presenterSelector: androidx.leanback.widget.PresenterSelector): androidx.leanback.widget.ClassPresenterSelector;
				public getPresenter(object0: any): androidx.leanback.widget.Presenter;
				public addClassPresenter(cls: java.lang.Class<any>, presenter: androidx.leanback.widget.Presenter): androidx.leanback.widget.ClassPresenterSelector;
				public getPresenters(): native.Array<androidx.leanback.widget.Presenter>;
				public getPresenter(item: any): androidx.leanback.widget.Presenter;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class ControlBar extends globalAndroid.widget.LinearLayout {
				public static class: java.lang.Class<androidx.leanback.widget.ControlBar>;
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
				public addFocusables(views: java.util.ArrayList<globalAndroid.view.View>, direction: number): void;
				public setChildMarginFromCenter(marginFromCenter: number): void;
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
				public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
				public isTextAlignmentResolved(): boolean;
				public getLayoutDirection(): number;
				public addView(child: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public canResolveTextDirection(): boolean;
				public canResolveTextAlignment(): boolean;
				public onRequestFocusInDescendants(direction: number, previouslyFocusedRect: globalAndroid.graphics.Rect): boolean;
				public notifySubtreeAccessibilityStateChanged(child: globalAndroid.view.View, source: globalAndroid.view.View, changeType: number): void;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyle: number);
				public updateViewLayout(view: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public setOnChildFocusedListener(listener: androidx.leanback.widget.ControlBar.OnChildFocusedListener): void;
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
				public addFocusables(views: java.util.ArrayList<globalAndroid.view.View>, direction: number, focusableMode: number): void;
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
			export module ControlBar {
				export class OnChildFocusedListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.widget.ControlBar.OnChildFocusedListener>;
					/**
					 * Constructs a new instance of the androidx.leanback.widget.ControlBar$OnChildFocusedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onChildFocusedListener(view0: globalAndroid.view.View, view1: globalAndroid.view.View): void;
					});
					public constructor();
					public onChildFocusedListener(view0: globalAndroid.view.View, view1: globalAndroid.view.View): void;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class ControlBarPresenter extends androidx.leanback.widget.Presenter {
				public static class: java.lang.Class<androidx.leanback.widget.ControlBarPresenter>;
				public getLayoutResourceId(): number;
				public setBackgroundColor(vh: androidx.leanback.widget.ControlBarPresenter.ViewHolder, color: number): void;
				public onUnbindViewHolder(viewHolder0: androidx.leanback.widget.Presenter.ViewHolder): void;
				public setOnControlSelectedListener(listener: androidx.leanback.widget.ControlBarPresenter.OnControlSelectedListener): void;
				public setOnControlClickedListener(listener: androidx.leanback.widget.ControlBarPresenter.OnControlClickedListener): void;
				public getOnItemViewClickedListener(): androidx.leanback.widget.ControlBarPresenter.OnControlClickedListener;
				public onBindViewHolder(holder: androidx.leanback.widget.Presenter.ViewHolder, item: any): void;
				public getOnItemControlListener(): androidx.leanback.widget.ControlBarPresenter.OnControlSelectedListener;
				public constructor();
				public onCreateViewHolder(parent: globalAndroid.view.ViewGroup): androidx.leanback.widget.Presenter.ViewHolder;
				public getFacet(facetClass: java.lang.Class<any>): any;
				public constructor(layoutResourceId: number);
				public onBindViewHolder(viewHolder0: androidx.leanback.widget.Presenter.ViewHolder, object1: any): void;
				public onCreateViewHolder(viewGroup0: globalAndroid.view.ViewGroup): androidx.leanback.widget.Presenter.ViewHolder;
				public onBindViewHolder(viewHolder: androidx.leanback.widget.Presenter.ViewHolder, item: any, payloads: java.util.List<any>): void;
				public onUnbindViewHolder(holder: androidx.leanback.widget.Presenter.ViewHolder): void;
			}
			export module ControlBarPresenter {
				export class BoundData extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.widget.ControlBarPresenter.BoundData>;
				}
				export class OnControlClickedListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.widget.ControlBarPresenter.OnControlClickedListener>;
					/**
					 * Constructs a new instance of the androidx.leanback.widget.ControlBarPresenter$OnControlClickedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onControlClicked(viewHolder0: androidx.leanback.widget.Presenter.ViewHolder, object1: any, boundData2: androidx.leanback.widget.ControlBarPresenter.BoundData): void;
					});
					public constructor();
					public onControlClicked(viewHolder0: androidx.leanback.widget.Presenter.ViewHolder, object1: any, boundData2: androidx.leanback.widget.ControlBarPresenter.BoundData): void;
				}
				export class OnControlSelectedListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.widget.ControlBarPresenter.OnControlSelectedListener>;
					/**
					 * Constructs a new instance of the androidx.leanback.widget.ControlBarPresenter$OnControlSelectedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onControlSelected(viewHolder0: androidx.leanback.widget.Presenter.ViewHolder, object1: any, boundData2: androidx.leanback.widget.ControlBarPresenter.BoundData): void;
					});
					public constructor();
					public onControlSelected(viewHolder0: androidx.leanback.widget.Presenter.ViewHolder, object1: any, boundData2: androidx.leanback.widget.ControlBarPresenter.BoundData): void;
				}
				export class ViewHolder extends androidx.leanback.widget.Presenter.ViewHolder {
					public static class: java.lang.Class<androidx.leanback.widget.ControlBarPresenter.ViewHolder>;
					public getFacet(facetClass: java.lang.Class<any>): any;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class ControlButtonPresenterSelector extends androidx.leanback.widget.PresenterSelector {
				public static class: java.lang.Class<androidx.leanback.widget.ControlButtonPresenterSelector>;
				public getPresenter(object0: any): androidx.leanback.widget.Presenter;
				public getPrimaryPresenter(): androidx.leanback.widget.Presenter;
				public getPresenters(): native.Array<androidx.leanback.widget.Presenter>;
				public getPresenter(item: any): androidx.leanback.widget.Presenter;
				public constructor();
				public getSecondaryPresenter(): androidx.leanback.widget.Presenter;
			}
			export module ControlButtonPresenterSelector {
				export class ActionViewHolder extends androidx.leanback.widget.Presenter.ViewHolder {
					public static class: java.lang.Class<androidx.leanback.widget.ControlButtonPresenterSelector.ActionViewHolder>;
					public constructor(view: globalAndroid.view.View);
					public getFacet(facetClass: java.lang.Class<any>): any;
				}
				export class ControlButtonPresenter extends androidx.leanback.widget.Presenter {
					public static class: java.lang.Class<androidx.leanback.widget.ControlButtonPresenterSelector.ControlButtonPresenter>;
					public onCreateViewHolder(viewGroup0: globalAndroid.view.ViewGroup): androidx.leanback.widget.Presenter.ViewHolder;
					public getFacet(facetClass: java.lang.Class<any>): any;
					public onBindViewHolder(viewHolder0: androidx.leanback.widget.Presenter.ViewHolder, object1: any): void;
					public onBindViewHolder(viewHolder: androidx.leanback.widget.Presenter.ViewHolder, item: any): void;
					public onUnbindViewHolder(viewHolder0: androidx.leanback.widget.Presenter.ViewHolder): void;
					public onCreateViewHolder(parent: globalAndroid.view.ViewGroup): androidx.leanback.widget.Presenter.ViewHolder;
					public setOnClickListener(holder: androidx.leanback.widget.Presenter.ViewHolder, listener: globalAndroid.view.View.OnClickListener): void;
					public onBindViewHolder(viewHolder: androidx.leanback.widget.Presenter.ViewHolder, item: any, payloads: java.util.List<any>): void;
					public onUnbindViewHolder(viewHolder: androidx.leanback.widget.Presenter.ViewHolder): void;
					public setOnClickListener(viewHolder: androidx.leanback.widget.Presenter.ViewHolder, listener: globalAndroid.view.View.OnClickListener): void;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class CursorObjectAdapter extends androidx.leanback.widget.ObjectAdapter {
				public static class: java.lang.Class<androidx.leanback.widget.CursorObjectAdapter>;
				public setMapper(mapper: androidx.leanback.database.CursorMapper): void;
				public close(): void;
				public get(index: number): any;
				public invalidateCache(index: number, count: number): void;
				public getCursor(): globalAndroid.database.Cursor;
				public isClosed(): boolean;
				public constructor(presenterSelector: androidx.leanback.widget.PresenterSelector);
				public swapCursor(cursor: globalAndroid.database.Cursor): globalAndroid.database.Cursor;
				public constructor();
				public size(): number;
				public get(int0: number): any;
				public onCursorChanged(): void;
				public invalidateCache(index: number): void;
				public isImmediateNotifySupported(): boolean;
				public onMapperChanged(): void;
				public constructor(presenter: androidx.leanback.widget.Presenter);
				public changeCursor(cursor: globalAndroid.database.Cursor): void;
				public getMapper(): androidx.leanback.database.CursorMapper;
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class DetailsOverviewLogoPresenter extends androidx.leanback.widget.Presenter {
				public static class: java.lang.Class<androidx.leanback.widget.DetailsOverviewLogoPresenter>;
				public onCreateViewHolder(parent: globalAndroid.view.ViewGroup): androidx.leanback.widget.Presenter.ViewHolder;
				public onUnbindViewHolder(viewHolder: androidx.leanback.widget.Presenter.ViewHolder): void;
				public onBindViewHolder(viewHolder: androidx.leanback.widget.Presenter.ViewHolder, item: any): void;
				public onCreateView(parent: globalAndroid.view.ViewGroup): globalAndroid.view.View;
				public getFacet(facetClass: java.lang.Class<any>): any;
				public onBindViewHolder(viewHolder0: androidx.leanback.widget.Presenter.ViewHolder, object1: any): void;
				public onCreateViewHolder(viewGroup0: globalAndroid.view.ViewGroup): androidx.leanback.widget.Presenter.ViewHolder;
				public onUnbindViewHolder(viewHolder0: androidx.leanback.widget.Presenter.ViewHolder): void;
				public setContext(viewHolder: androidx.leanback.widget.DetailsOverviewLogoPresenter.ViewHolder, parentViewHolder: androidx.leanback.widget.FullWidthDetailsOverviewRowPresenter.ViewHolder, parentPresenter: androidx.leanback.widget.FullWidthDetailsOverviewRowPresenter): void;
				public isBoundToImage(viewHolder: androidx.leanback.widget.DetailsOverviewLogoPresenter.ViewHolder, row: androidx.leanback.widget.DetailsOverviewRow): boolean;
				public onBindViewHolder(viewHolder: androidx.leanback.widget.Presenter.ViewHolder, item: any, payloads: java.util.List<any>): void;
				public constructor();
			}
			export module DetailsOverviewLogoPresenter {
				export class ViewHolder extends androidx.leanback.widget.Presenter.ViewHolder {
					public static class: java.lang.Class<androidx.leanback.widget.DetailsOverviewLogoPresenter.ViewHolder>;
					public mParentPresenter: androidx.leanback.widget.FullWidthDetailsOverviewRowPresenter;
					public mParentViewHolder: androidx.leanback.widget.FullWidthDetailsOverviewRowPresenter.ViewHolder;
					public constructor(view: globalAndroid.view.View);
					public getFacet(facetClass: java.lang.Class<any>): any;
					public getParentViewHolder(): androidx.leanback.widget.FullWidthDetailsOverviewRowPresenter.ViewHolder;
					public setSizeFromDrawableIntrinsic(sizeFromDrawableIntrinsic: boolean): void;
					public getParentPresenter(): androidx.leanback.widget.FullWidthDetailsOverviewRowPresenter;
					public isSizeFromDrawableIntrinsic(): boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class DetailsOverviewRow extends androidx.leanback.widget.Row {
				public static class: java.lang.Class<androidx.leanback.widget.DetailsOverviewRow>;
				public constructor(item: any);
				public getItem(): any;
				public setItem(item: any): void;
				public isImageScaleUpAllowed(): boolean;
				public setActionsAdapter(adapter: androidx.leanback.widget.ObjectAdapter): void;
				public constructor(headerItem: androidx.leanback.widget.HeaderItem);
				/** @deprecated */
				public removeAction(action: androidx.leanback.widget.Action): boolean;
				public getActionsAdapter(): androidx.leanback.widget.ObjectAdapter;
				public getActionForKeyCode(keyCode: number): androidx.leanback.widget.Action;
				public constructor();
				public getImageDrawable(): globalAndroid.graphics.drawable.Drawable;
				/** @deprecated */
				public addAction(pos: number, action: androidx.leanback.widget.Action): void;
				public setImageScaleUpAllowed(allowed: boolean): void;
				public setImageDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public constructor(id: number, headerItem: androidx.leanback.widget.HeaderItem);
				/** @deprecated */
				public addAction(action: androidx.leanback.widget.Action): void;
				public setImageBitmap(context: globalAndroid.content.Context, bm: globalAndroid.graphics.Bitmap): void;
				/** @deprecated */
				public getActions(): java.util.List<androidx.leanback.widget.Action>;
			}
			export module DetailsOverviewRow {
				export class Listener extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.widget.DetailsOverviewRow.Listener>;
					public constructor();
					public onActionsAdapterChanged(row: androidx.leanback.widget.DetailsOverviewRow): void;
					public onImageDrawableChanged(row: androidx.leanback.widget.DetailsOverviewRow): void;
					public onItemChanged(row: androidx.leanback.widget.DetailsOverviewRow): void;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class DetailsOverviewRowPresenter extends androidx.leanback.widget.RowPresenter {
				public static class: java.lang.Class<androidx.leanback.widget.DetailsOverviewRowPresenter>;
				public getOnActionClickedListener(): androidx.leanback.widget.OnActionClickedListener;
				public createRowViewHolder(parent: globalAndroid.view.ViewGroup): androidx.leanback.widget.RowPresenter.ViewHolder;
				public createRowViewHolder(viewGroup0: globalAndroid.view.ViewGroup): androidx.leanback.widget.RowPresenter.ViewHolder;
				public onBindRowViewHolder(holder: androidx.leanback.widget.RowPresenter.ViewHolder, item: any): void;
				public constructor(detailsPresenter: androidx.leanback.widget.Presenter);
				public onRowViewDetachedFromWindow(vh: androidx.leanback.widget.RowPresenter.ViewHolder): void;
				public onUnbindRowViewHolder(holder: androidx.leanback.widget.RowPresenter.ViewHolder): void;
				public onSelectLevelChanged(vh: androidx.leanback.widget.RowPresenter.ViewHolder): void;
				public setBackgroundColor(color: number): void;
				public setSharedElementEnterTransition(activity: globalAndroid.app.Activity, sharedElementName: string): void;
				public onBindRowViewHolder(vh: androidx.leanback.widget.RowPresenter.ViewHolder, item: any): void;
				public constructor();
				public onUnbindRowViewHolder(vh: androidx.leanback.widget.RowPresenter.ViewHolder): void;
				public getBackgroundColor(): number;
				public onRowViewSelected(vh: androidx.leanback.widget.RowPresenter.ViewHolder, selected: boolean): void;
				public isUsingDefaultSelectEffect(): boolean;
				public setStyleLarge(large: boolean): void;
				public setOnActionClickedListener(listener: androidx.leanback.widget.OnActionClickedListener): void;
				public getFacet(facetClass: java.lang.Class<any>): any;
				public onRowViewAttachedToWindow(vh: androidx.leanback.widget.RowPresenter.ViewHolder): void;
				public isStyleLarge(): boolean;
				public setSharedElementEnterTransition(activity: globalAndroid.app.Activity, sharedElementName: string, timeoutMs: number): void;
				public onSelectLevelChanged(holder: androidx.leanback.widget.RowPresenter.ViewHolder): void;
			}
			export module DetailsOverviewRowPresenter {
				export class ActionsItemBridgeAdapter extends androidx.leanback.widget.ItemBridgeAdapter {
					public static class: java.lang.Class<androidx.leanback.widget.DetailsOverviewRowPresenter.ActionsItemBridgeAdapter>;
					public onBind(viewHolder: androidx.leanback.widget.ItemBridgeAdapter.ViewHolder): void;
					public onUnbind(ibvh: androidx.leanback.widget.ItemBridgeAdapter.ViewHolder): void;
					public onAttachedToWindow(viewHolder: androidx.leanback.widget.ItemBridgeAdapter.ViewHolder): void;
					public onBind(ibvh: androidx.leanback.widget.ItemBridgeAdapter.ViewHolder): void;
					public getFacetProvider(type: number): androidx.leanback.widget.FacetProvider;
					public onDetachedFromWindow(viewHolder: androidx.leanback.widget.ItemBridgeAdapter.ViewHolder): void;
					public onUnbind(viewHolder: androidx.leanback.widget.ItemBridgeAdapter.ViewHolder): void;
				}
				export class ViewHolder extends androidx.leanback.widget.RowPresenter.ViewHolder {
					public static class: java.lang.Class<androidx.leanback.widget.DetailsOverviewRowPresenter.ViewHolder>;
					public mDetailsDescriptionViewHolder: androidx.leanback.widget.Presenter.ViewHolder;
					public constructor(view: globalAndroid.view.View);
					public getFacet(facetClass: java.lang.Class<any>): any;
					public constructor(this0: androidx.leanback.widget.DetailsOverviewRowPresenter, rootView: globalAndroid.view.View, detailsPresenter: androidx.leanback.widget.Presenter);
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class DetailsOverviewSharedElementHelper extends androidx.core.app.SharedElementCallback {
				public static class: java.lang.Class<androidx.leanback.widget.DetailsOverviewSharedElementHelper>;
				public onSharedElementEnd(sharedElementNames: java.util.List<string>, sharedElements: java.util.List<globalAndroid.view.View>, sharedElementSnapshots: java.util.List<globalAndroid.view.View>): void;
				public onSharedElementStart(sharedElementNames: java.util.List<string>, sharedElements: java.util.List<globalAndroid.view.View>, sharedElementSnapshots: java.util.List<globalAndroid.view.View>): void;
			}
			export module DetailsOverviewSharedElementHelper {
				export class TransitionTimeOutRunnable extends java.lang.Object implements java.lang.Runnable {
					public static class: java.lang.Class<androidx.leanback.widget.DetailsOverviewSharedElementHelper.TransitionTimeOutRunnable>;
					public run(): void;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class DetailsParallax extends androidx.leanback.widget.RecyclerViewParallax {
				public static class: java.lang.Class<androidx.leanback.widget.DetailsParallax>;
				public getOverviewRowTop(): androidx.leanback.widget.Parallax.IntProperty;
				public getOverviewRowBottom(): androidx.leanback.widget.Parallax.IntProperty;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class DetailsParallaxDrawable extends androidx.leanback.graphics.CompositeDrawable {
				public static class: java.lang.Class<androidx.leanback.widget.DetailsParallaxDrawable>;
				public getSolidColor(): number;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public constructor(context: globalAndroid.content.Context, parallax: androidx.leanback.widget.DetailsParallax, coverDrawable: globalAndroid.graphics.drawable.Drawable, bottomDrawable: globalAndroid.graphics.drawable.Drawable, coverDrawableParallaxTarget: androidx.leanback.widget.ParallaxTarget);
				public invalidateDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
				public constructor(context: globalAndroid.content.Context, parallax: androidx.leanback.widget.DetailsParallax, coverDrawable: globalAndroid.graphics.drawable.Drawable, coverDrawableParallaxTarget: androidx.leanback.widget.ParallaxTarget);
				public getCoverDrawable(): globalAndroid.graphics.drawable.Drawable;
				public constructor(context: globalAndroid.content.Context, parallax: androidx.leanback.widget.DetailsParallax);
				public setSolidColor(color: number): void;
				public constructor();
				public getBottomDrawable(): globalAndroid.graphics.drawable.Drawable;
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export abstract class DiffCallback<Value>  extends java.lang.Object {
				public static class: java.lang.Class<androidx.leanback.widget.DiffCallback<any>>;
				public areItemsTheSame(object0: Value, object1: Value): boolean;
				public areContentsTheSame(object0: Value, object1: Value): boolean;
				public getChangePayload(oldItem: Value, newItem: Value): any;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class DividerPresenter extends androidx.leanback.widget.Presenter {
				public static class: java.lang.Class<androidx.leanback.widget.DividerPresenter>;
				public onCreateViewHolder(parent: globalAndroid.view.ViewGroup): androidx.leanback.widget.Presenter.ViewHolder;
				public onUnbindViewHolder(viewHolder: androidx.leanback.widget.Presenter.ViewHolder): void;
				public onBindViewHolder(viewHolder: androidx.leanback.widget.Presenter.ViewHolder, item: any): void;
				public getFacet(facetClass: java.lang.Class<any>): any;
				public constructor(layoutResourceId: number);
				public onBindViewHolder(viewHolder0: androidx.leanback.widget.Presenter.ViewHolder, object1: any): void;
				public onCreateViewHolder(viewGroup0: globalAndroid.view.ViewGroup): androidx.leanback.widget.Presenter.ViewHolder;
				public onUnbindViewHolder(viewHolder0: androidx.leanback.widget.Presenter.ViewHolder): void;
				public onBindViewHolder(viewHolder: androidx.leanback.widget.Presenter.ViewHolder, item: any, payloads: java.util.List<any>): void;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class DividerRow extends androidx.leanback.widget.Row {
				public static class: java.lang.Class<androidx.leanback.widget.DividerRow>;
				public constructor(headerItem: androidx.leanback.widget.HeaderItem);
				public isRenderedAsRowView(): boolean;
				public constructor(id: number, headerItem: androidx.leanback.widget.HeaderItem);
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class FacetProvider extends java.lang.Object {
				public static class: java.lang.Class<androidx.leanback.widget.FacetProvider>;
				/**
				 * Constructs a new instance of the androidx.leanback.widget.FacetProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getFacet(class0: java.lang.Class<any>): any;
				});
				public constructor();
				public getFacet(class0: java.lang.Class<any>): any;
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class FacetProviderAdapter extends java.lang.Object {
				public static class: java.lang.Class<androidx.leanback.widget.FacetProviderAdapter>;
				/**
				 * Constructs a new instance of the androidx.leanback.widget.FacetProviderAdapter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getFacetProvider(int0: number): androidx.leanback.widget.FacetProvider;
				});
				public constructor();
				public getFacetProvider(int0: number): androidx.leanback.widget.FacetProvider;
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class FocusHighlight extends java.lang.Object {
				public static class: java.lang.Class<androidx.leanback.widget.FocusHighlight>;
				/**
				 * Constructs a new instance of the androidx.leanback.widget.FocusHighlight interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
				});
				public constructor();
				public static ZOOM_FACTOR_NONE: number;
				public static ZOOM_FACTOR_LARGE: number;
				public static ZOOM_FACTOR_MEDIUM: number;
				public static ZOOM_FACTOR_XSMALL: number;
				public static ZOOM_FACTOR_SMALL: number;
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class FocusHighlightHandler extends java.lang.Object {
				public static class: java.lang.Class<androidx.leanback.widget.FocusHighlightHandler>;
				/**
				 * Constructs a new instance of the androidx.leanback.widget.FocusHighlightHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onItemFocused(view0: globalAndroid.view.View, boolean1: boolean): void;
					onInitializeView(view0: globalAndroid.view.View): void;
				});
				public constructor();
				public onInitializeView(view0: globalAndroid.view.View): void;
				public onItemFocused(view0: globalAndroid.view.View, boolean1: boolean): void;
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class FocusHighlightHelper extends java.lang.Object {
				public static class: java.lang.Class<androidx.leanback.widget.FocusHighlightHelper>;
				/** @deprecated */
				public constructor();
				/** @deprecated */
				public static setupHeaderItemFocusHighlight(gridView: androidx.leanback.widget.VerticalGridView): void;
				/** @deprecated */
				public static setupHeaderItemFocusHighlight(gridView: androidx.leanback.widget.VerticalGridView, scaleEnabled: boolean): void;
				public static setupHeaderItemFocusHighlight(adapter: androidx.leanback.widget.ItemBridgeAdapter, scaleEnabled: boolean): void;
				public static setupHeaderItemFocusHighlight(adapter: androidx.leanback.widget.ItemBridgeAdapter): void;
				public static setupBrowseItemFocusHighlight(adapter: androidx.leanback.widget.ItemBridgeAdapter, zoomIndex: number, useDimmer: boolean): void;
			}
			export module FocusHighlightHelper {
				export class BrowseItemFocusHighlight extends java.lang.Object implements androidx.leanback.widget.FocusHighlightHandler {
					public static class: java.lang.Class<androidx.leanback.widget.FocusHighlightHelper.BrowseItemFocusHighlight>;
					public onItemFocused(view: globalAndroid.view.View, hasFocus: boolean): void;
					public onInitializeView(view: globalAndroid.view.View): void;
				}
				export class FocusAnimator extends java.lang.Object implements globalAndroid.animation.TimeAnimator.TimeListener {
					public static class: java.lang.Class<androidx.leanback.widget.FocusHighlightHelper.FocusAnimator>;
					public onTimeUpdate(animation: globalAndroid.animation.TimeAnimator, totalTime: number, deltaTime: number): void;
				}
				export class HeaderItemFocusHighlight extends java.lang.Object implements androidx.leanback.widget.FocusHighlightHandler {
					public static class: java.lang.Class<androidx.leanback.widget.FocusHighlightHelper.HeaderItemFocusHighlight>;
					public onItemFocused(view: globalAndroid.view.View, hasFocus: boolean): void;
					public onInitializeView(view: globalAndroid.view.View): void;
				}
				export module HeaderItemFocusHighlight {
					export class HeaderFocusAnimator extends androidx.leanback.widget.FocusHighlightHelper.FocusAnimator {
						public static class: java.lang.Class<androidx.leanback.widget.FocusHighlightHelper.HeaderItemFocusHighlight.HeaderFocusAnimator>;
						public onTimeUpdate(animation: globalAndroid.animation.TimeAnimator, totalTime: number, deltaTime: number): void;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class ForegroundHelper extends java.lang.Object {
				public static class: java.lang.Class<androidx.leanback.widget.ForegroundHelper>;
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class FragmentAnimationProvider extends java.lang.Object {
				public static class: java.lang.Class<androidx.leanback.widget.FragmentAnimationProvider>;
				/**
				 * Constructs a new instance of the androidx.leanback.widget.FragmentAnimationProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onImeAppearing(list0: java.util.List<globalAndroid.animation.Animator>): void;
					onImeDisappearing(list0: java.util.List<globalAndroid.animation.Animator>): void;
				});
				public constructor();
				public onImeDisappearing(list0: java.util.List<globalAndroid.animation.Animator>): void;
				public onImeAppearing(list0: java.util.List<globalAndroid.animation.Animator>): void;
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class FullWidthDetailsOverviewRowPresenter extends androidx.leanback.widget.RowPresenter {
				public static class: java.lang.Class<androidx.leanback.widget.FullWidthDetailsOverviewRowPresenter>;
				public static STATE_HALF: number;
				public static STATE_FULL: number;
				public static STATE_SMALL: number;
				public static ALIGN_MODE_START: number;
				public static ALIGN_MODE_MIDDLE: number;
				public mInitialState: number;
				public getOnActionClickedListener(): androidx.leanback.widget.OnActionClickedListener;
				public setParticipatingEntranceTransition(participating: boolean): void;
				public setState(viewHolder: androidx.leanback.widget.FullWidthDetailsOverviewRowPresenter.ViewHolder, state: number): void;
				public setAlignmentMode(alignmentMode: number): void;
				public constructor(detailsPresenter: androidx.leanback.widget.Presenter);
				public onRowViewDetachedFromWindow(vh: androidx.leanback.widget.RowPresenter.ViewHolder): void;
				public getLayoutResourceId(): number;
				public setBackgroundColor(color: number): void;
				public getAlignmentMode(): number;
				public onBindRowViewHolder(vh: androidx.leanback.widget.RowPresenter.ViewHolder, item: any): void;
				public notifyOnBindLogo(viewHolder: androidx.leanback.widget.FullWidthDetailsOverviewRowPresenter.ViewHolder): void;
				public constructor();
				public setInitialState(state: number): void;
				public onUnbindRowViewHolder(vh: androidx.leanback.widget.RowPresenter.ViewHolder): void;
				public getInitialState(): number;
				public isClippingChildren(): boolean;
				public onLayoutOverviewFrame(viewHolder: androidx.leanback.widget.FullWidthDetailsOverviewRowPresenter.ViewHolder, oldState: number, logoChanged: boolean): void;
				public onLayoutLogo(viewHolder: androidx.leanback.widget.FullWidthDetailsOverviewRowPresenter.ViewHolder, oldState: number, logoChanged: boolean): void;
				public setOnActionClickedListener(listener: androidx.leanback.widget.OnActionClickedListener): void;
				public setActionsBackgroundColor(color: number): void;
				public setListener(listener: androidx.leanback.widget.FullWidthDetailsOverviewRowPresenter.Listener): void;
				public onStateChanged(viewHolder: androidx.leanback.widget.FullWidthDetailsOverviewRowPresenter.ViewHolder, oldState: number): void;
				public createRowViewHolder(parent: globalAndroid.view.ViewGroup): androidx.leanback.widget.RowPresenter.ViewHolder;
				public isParticipatingEntranceTransition(): boolean;
				public createRowViewHolder(viewGroup0: globalAndroid.view.ViewGroup): androidx.leanback.widget.RowPresenter.ViewHolder;
				public onBindRowViewHolder(holder: androidx.leanback.widget.RowPresenter.ViewHolder, item: any): void;
				public constructor(detailsPresenter: androidx.leanback.widget.Presenter, logoPresenter: androidx.leanback.widget.DetailsOverviewLogoPresenter);
				public onUnbindRowViewHolder(holder: androidx.leanback.widget.RowPresenter.ViewHolder): void;
				public onSelectLevelChanged(vh: androidx.leanback.widget.RowPresenter.ViewHolder): void;
				public setEntranceTransitionState(holder: androidx.leanback.widget.RowPresenter.ViewHolder, afterEntrance: boolean): void;
				public getBackgroundColor(): number;
				public isUsingDefaultSelectEffect(): boolean;
				public getFacet(facetClass: java.lang.Class<any>): any;
				public onRowViewAttachedToWindow(vh: androidx.leanback.widget.RowPresenter.ViewHolder): void;
				public getActionsBackgroundColor(): number;
				public onSelectLevelChanged(holder: androidx.leanback.widget.RowPresenter.ViewHolder): void;
			}
			export module FullWidthDetailsOverviewRowPresenter {
				export class ActionsItemBridgeAdapter extends androidx.leanback.widget.ItemBridgeAdapter {
					public static class: java.lang.Class<androidx.leanback.widget.FullWidthDetailsOverviewRowPresenter.ActionsItemBridgeAdapter>;
					public onBind(viewHolder: androidx.leanback.widget.ItemBridgeAdapter.ViewHolder): void;
					public onUnbind(ibvh: androidx.leanback.widget.ItemBridgeAdapter.ViewHolder): void;
					public onAttachedToWindow(viewHolder: androidx.leanback.widget.ItemBridgeAdapter.ViewHolder): void;
					public onBind(ibvh: androidx.leanback.widget.ItemBridgeAdapter.ViewHolder): void;
					public getFacetProvider(type: number): androidx.leanback.widget.FacetProvider;
					public onDetachedFromWindow(viewHolder: androidx.leanback.widget.ItemBridgeAdapter.ViewHolder): void;
					public onUnbind(viewHolder: androidx.leanback.widget.ItemBridgeAdapter.ViewHolder): void;
				}
				export abstract class Listener extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.widget.FullWidthDetailsOverviewRowPresenter.Listener>;
					public constructor();
					public onBindLogo(vh: androidx.leanback.widget.FullWidthDetailsOverviewRowPresenter.ViewHolder): void;
				}
				export class ViewHolder extends androidx.leanback.widget.RowPresenter.ViewHolder {
					public static class: java.lang.Class<androidx.leanback.widget.FullWidthDetailsOverviewRowPresenter.ViewHolder>;
					public mRowListener: androidx.leanback.widget.DetailsOverviewRow.Listener;
					public createRowListener(): androidx.leanback.widget.DetailsOverviewRow.Listener;
					public getOverviewView(): globalAndroid.view.ViewGroup;
					public constructor(view: globalAndroid.view.View);
					public getFacet(facetClass: java.lang.Class<any>): any;
					public constructor(this0: androidx.leanback.widget.FullWidthDetailsOverviewRowPresenter, rootView: globalAndroid.view.View, detailsPresenter: androidx.leanback.widget.Presenter, logoPresenter: androidx.leanback.widget.DetailsOverviewLogoPresenter);
					public getDetailsDescriptionFrame(): globalAndroid.view.ViewGroup;
					public getLogoViewHolder(): androidx.leanback.widget.DetailsOverviewLogoPresenter.ViewHolder;
					public getDetailsDescriptionViewHolder(): androidx.leanback.widget.Presenter.ViewHolder;
					public getActionsRow(): globalAndroid.view.ViewGroup;
					public getState(): number;
				}
				export module ViewHolder {
					export class DetailsOverviewRowListener extends androidx.leanback.widget.DetailsOverviewRow.Listener {
						public static class: java.lang.Class<androidx.leanback.widget.FullWidthDetailsOverviewRowPresenter.ViewHolder.DetailsOverviewRowListener>;
						public constructor();
						public constructor(this1: androidx.leanback.widget.FullWidthDetailsOverviewRowPresenter.ViewHolder);
						public onImageDrawableChanged(row: androidx.leanback.widget.DetailsOverviewRow): void;
						public onActionsAdapterChanged(row: androidx.leanback.widget.DetailsOverviewRow): void;
						public onItemChanged(row: androidx.leanback.widget.DetailsOverviewRow): void;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class FullWidthDetailsOverviewSharedElementHelper extends androidx.leanback.widget.FullWidthDetailsOverviewRowPresenter.Listener {
				public static class: java.lang.Class<androidx.leanback.widget.FullWidthDetailsOverviewSharedElementHelper>;
				public setAutoStartSharedElementTransition(enabled: boolean): void;
				public getAutoStartSharedElementTransition(): boolean;
				public setSharedElementEnterTransition(activity: globalAndroid.app.Activity, sharedElementName: string, timeoutMs: number): void;
				public onBindLogo(vh: androidx.leanback.widget.FullWidthDetailsOverviewRowPresenter.ViewHolder): void;
				public setSharedElementEnterTransition(activity: globalAndroid.app.Activity, sharedElementName: string): void;
				public startPostponedEnterTransition(): void;
				public constructor();
			}
			export module FullWidthDetailsOverviewSharedElementHelper {
				export class TransitionTimeOutRunnable extends java.lang.Object implements java.lang.Runnable {
					public static class: java.lang.Class<androidx.leanback.widget.FullWidthDetailsOverviewSharedElementHelper.TransitionTimeOutRunnable>;
					public run(): void;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export abstract class Grid extends java.lang.Object {
				public static class: java.lang.Class<androidx.leanback.widget.Grid>;
				public static START_DEFAULT: number;
				public mProvider: androidx.leanback.widget.Grid.Provider;
				public mReversedFlow: boolean;
				public mSpacing: number;
				public mNumRows: number;
				public mFirstVisibleIndex: number;
				public mLastVisibleIndex: number;
				public mTmpItemPositionsInRows: native.Array<androidx.collection.CircularIntArray>;
				public mStartIndex: number;
				public fillDisappearingItems(positions: native.Array<number>, positionsLength: number, positionToRow: globalAndroid.util.SparseIntArray): void;
				public prependOneColumnVisibleItems(): boolean;
				public collectAdjacentPrefetchPositions(fromLimit: number, da: number, layoutPrefetchRegistry: androidx.recyclerview.widget.RecyclerView.LayoutManager.LayoutPrefetchRegistry): void;
				public findRowMin(boolean0: boolean, int1: number, ints2: native.Array<number>): number;
				public checkPrependOverLimit(toLimit: number): boolean;
				public findRowMax(boolean0: boolean, int1: number, ints2: native.Array<number>): number;
				public prependVisibleItems(int0: number, boolean1: boolean): boolean;
				public debugPrint(printWriter0: java.io.PrintWriter): void;
				public findRowMin(findLarge: boolean, indices: native.Array<number>): number;
				public prependVisibleItems(toLimit: number): void;
				public findRowMax(findLarge: boolean, indices: native.Array<number>): number;
				public getNumRows(): number;
				public getItemPositionsInRows(): native.Array<androidx.collection.CircularIntArray>;
				public getItemPositionsInRows(int0: number, int1: number): native.Array<androidx.collection.CircularIntArray>;
				public invalidateItemsAfter(index: number): void;
				public getFirstVisibleIndex(): number;
				public appendOneColumnVisibleItems(): boolean;
				public setStart(startIndex: number): void;
				public appendVisibleItems(toLimit: number): void;
				public appendVisibleItems(int0: number, boolean1: boolean): boolean;
				public getLocation(int0: number): androidx.leanback.widget.Grid.Location;
				public getLastVisibleIndex(): number;
				public resetVisibleIndex(): void;
				public getRowIndex(index: number): number;
				public removeInvisibleItemsAtEnd(aboveIndex: number, toLimit: number): void;
				public setSpacing(spacing: number): void;
				public setProvider(provider: androidx.leanback.widget.Grid.Provider): void;
				public checkAppendOverLimit(toLimit: number): boolean;
				public removeInvisibleItemsAtFront(belowIndex: number, toLimit: number): void;
				public setReversedFlow(reversedFlow: boolean): void;
				public isReversedFlow(): boolean;
				public static createGrid(rows: number): androidx.leanback.widget.Grid;
			}
			export module Grid {
				export class Location extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.widget.Grid.Location>;
					public row: number;
					public constructor(row: number);
				}
				export class Provider extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.widget.Grid.Provider>;
					/**
					 * Constructs a new instance of the androidx.leanback.widget.Grid$Provider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getCount(): number;
						getMinIndex(): number;
						createItem(int0: number, boolean1: boolean, objects2: native.Array<any>, boolean3: boolean): number;
						addItem(object0: any, int1: number, int2: number, int3: number, int4: number): void;
						removeItem(int0: number): void;
						getEdge(int0: number): number;
						getSize(int0: number): number;
					});
					public constructor();
					public getEdge(int0: number): number;
					public removeItem(int0: number): void;
					public getCount(): number;
					public createItem(int0: number, boolean1: boolean, objects2: native.Array<any>, boolean3: boolean): number;
					public getSize(int0: number): number;
					public getMinIndex(): number;
					public addItem(object0: any, int1: number, int2: number, int3: number, int4: number): void;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class GridLayoutManager extends androidx.recyclerview.widget.RecyclerView.LayoutManager {
				public static class: java.lang.Class<androidx.leanback.widget.GridLayoutManager>;
				public generateLayoutParams(lp: globalAndroid.view.ViewGroup.LayoutParams): androidx.recyclerview.widget.RecyclerView.LayoutParams;
				public setGravity(gravity: number): void;
				public setSelectionSmoothWithSub(position: number, subposition: number): void;
				public getRowCountForAccessibility(recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State): number;
				public getDecoratedLeft(child: globalAndroid.view.View): number;
				public startSmoothScroll(smoothScroller: androidx.recyclerview.widget.RecyclerView.SmoothScroller): void;
				public requestChildRectangleOnScreen(parent: androidx.recyclerview.widget.RecyclerView, child: globalAndroid.view.View, rect: globalAndroid.graphics.Rect, immediate: boolean): boolean;
				public getWindowAlignmentOffsetPercent(): number;
				public setSelectionSmooth(position: number): void;
				public onItemsMoved(recyclerView: androidx.recyclerview.widget.RecyclerView, from: number, to: number, itemCount: number): void;
				public setFocusOutAllowed(throughFront: boolean, throughEnd: boolean): void;
				public constructor();
				public setFocusScrollStrategy(focusScrollStrategy: number): void;
				public getWindowAlignment(): number;
				public scrollVerticallyBy(dy: number, recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State): number;
				public onRequestChildFocus(parent: androidx.recyclerview.widget.RecyclerView, state: androidx.recyclerview.widget.RecyclerView.State, child: globalAndroid.view.View, focused: globalAndroid.view.View): boolean;
				public setWindowAlignment(windowAlignment: number): void;
				public canScrollHorizontally(): boolean;
				public onRequestChildFocus(parent: androidx.recyclerview.widget.RecyclerView, child: globalAndroid.view.View, focused: globalAndroid.view.View): boolean;
				public getPruneChild(): boolean;
				public getColumnCountForAccessibility(recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State): number;
				public generateDefaultLayoutParams(): androidx.recyclerview.widget.RecyclerView.LayoutParams;
				public onRestoreInstanceState(state: globalAndroid.os.Parcelable): void;
				public setHorizontalSpacing(space: number): void;
				public setWindowAlignmentOffset(alignmentOffset: number): void;
				public onInitializeAccessibilityNodeInfo(recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State, info: androidx.core.view.accessibility.AccessibilityNodeInfoCompat): void;
				public onInitializeAccessibilityNodeInfoForItem(recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State, host: globalAndroid.view.View, info: androidx.core.view.accessibility.AccessibilityNodeInfoCompat): void;
				public requestChildRectangleOnScreen(parent: androidx.recyclerview.widget.RecyclerView, child: globalAndroid.view.View, rect: globalAndroid.graphics.Rect, immediate: boolean, focusedChildVisible: boolean): boolean;
				public canScrollVertically(): boolean;
				public requestChildRectangleOnScreen(parent: androidx.recyclerview.widget.RecyclerView, view: globalAndroid.view.View, rect: globalAndroid.graphics.Rect, immediate: boolean): boolean;
				public setItemSpacing(space: number): void;
				public getVerticalSpacing(): number;
				public onLayoutChildren(recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State): void;
				public getFocusScrollStrategy(): number;
				public collectInitialPrefetchPositions(adapterItemCount: number, layoutPrefetchRegistry: androidx.recyclerview.widget.RecyclerView.LayoutManager.LayoutPrefetchRegistry): void;
				public setRowHeight(height: number): void;
				public generateLayoutParams(c: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet): androidx.recyclerview.widget.RecyclerView.LayoutParams;
				public onItemsMoved(recyclerView: androidx.recyclerview.widget.RecyclerView, fromPosition: number, toPosition: number, itemCount: number): void;
				public onAddFocusables(recyclerView: androidx.recyclerview.widget.RecyclerView, views: java.util.ArrayList<globalAndroid.view.View>, direction: number, focusableMode: number): boolean;
				public performAccessibilityAction(recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State, action: number, bundle3: globalAndroid.os.Bundle): boolean;
				public setSelectionWithSub(position: number, subposition: number, primaryScrollExtra: number): void;
				public getItemAlignmentOffset(): number;
				public getHorizontalSpacing(): number;
				public collectAdjacentPrefetchPositions(dx: number, dy: number, state: androidx.recyclerview.widget.RecyclerView.State, layoutPrefetchRegistry: androidx.recyclerview.widget.RecyclerView.LayoutManager.LayoutPrefetchRegistry): void;
				public generateLayoutParams(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet): androidx.recyclerview.widget.RecyclerView.LayoutParams;
				public onItemsUpdated(recyclerView: androidx.recyclerview.widget.RecyclerView, positionStart: number, itemCount: number, payload: any): void;
				/** @deprecated */
				public onRequestChildFocus(parent: androidx.recyclerview.widget.RecyclerView, child: globalAndroid.view.View, focused: globalAndroid.view.View): boolean;
				public setOnChildSelectedListener(listener: androidx.leanback.widget.OnChildSelectedListener): void;
				public onInterceptFocusSearch(focused: globalAndroid.view.View, direction: number): globalAndroid.view.View;
				public setItemAlignmentOffsetPercent(offsetPercent: number): void;
				public isItemAlignmentOffsetWithPadding(): boolean;
				public onLayoutCompleted(state: androidx.recyclerview.widget.RecyclerView.State): void;
				public getViewForPosition(position: number): globalAndroid.view.View;
				public getSelection(): number;
				public setNumRows(numRows: number): void;
				public removeOnChildViewHolderSelectedListener(listener: androidx.leanback.widget.OnChildViewHolderSelectedListener): void;
				public onRtlPropertiesChanged(layoutDirection: number): void;
				public setScrollEnabled(scrollEnabled: boolean): void;
				public scrollToPosition(position: number): void;
				public onItemsAdded(recyclerView: androidx.recyclerview.widget.RecyclerView, positionStart: number, itemCount: number): void;
				public getItemAlignmentOffsetPercent(): number;
				public getSubSelection(): number;
				public isScrollEnabled(): boolean;
				public setItemAlignmentViewId(viewId: number): void;
				public setItemAlignmentOffset(alignmentOffset: number): void;
				public setOrientation(orientation: number): void;
				public getDecoratedBoundsWithMargins(view: globalAndroid.view.View, outBounds: globalAndroid.graphics.Rect): void;
				public getDecoratedBottom(child: globalAndroid.view.View): number;
				public setSelection(position: number, primaryScrollExtra: number): void;
				public setLayoutEnabled(layoutEnabled: boolean): void;
				public getItemAlignmentViewId(): number;
				public setWindowAlignmentOffsetPercent(offsetPercent: number): void;
				public setVerticalSpacing(space: number): void;
				public setOnChildViewHolderSelectedListener(listener: androidx.leanback.widget.OnChildViewHolderSelectedListener): void;
				public onSaveInstanceState(): globalAndroid.os.Parcelable;
				public scrollHorizontallyBy(dx: number, recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State): number;
				public smoothScrollToPosition(recyclerView: androidx.recyclerview.widget.RecyclerView, state: androidx.recyclerview.widget.RecyclerView.State, position: number): void;
				public getDecoratedRight(child: globalAndroid.view.View): number;
				public setFocusOutSideAllowed(throughStart: boolean, throughEnd: boolean): void;
				public onAdapterChanged(oldAdapter: androidx.recyclerview.widget.RecyclerView.Adapter<any>, newAdapter: androidx.recyclerview.widget.RecyclerView.Adapter<any>): void;
				public getWindowAlignmentOffset(): number;
				public onMeasure(recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State, widthSpec: number, heightSpec: number): void;
				public supportsPredictiveItemAnimations(): boolean;
				public onItemsRemoved(recyclerView: androidx.recyclerview.widget.RecyclerView, positionStart: number, itemCount: number): void;
				public setSelection(position: number, subposition: number, smooth: boolean, primaryScrollExtra: number): void;
				public setItemAlignmentOffsetWithPadding(withPadding: boolean): void;
				public onItemsChanged(recyclerView: androidx.recyclerview.widget.RecyclerView): void;
				public setPruneChild(pruneChild: boolean): void;
				public constructor(baseGridView: androidx.leanback.widget.BaseGridView);
				public hasDoneFirstLayout(): boolean;
				public getViewSelectedOffsets(view: globalAndroid.view.View, offsets: native.Array<number>): void;
				public onItemsUpdated(recyclerView: androidx.recyclerview.widget.RecyclerView, positionStart: number, itemCount: number): void;
				public addOnChildViewHolderSelectedListener(listener: androidx.leanback.widget.OnChildViewHolderSelectedListener): void;
				public getDecoratedTop(child: globalAndroid.view.View): number;
				public removeAndRecycleAllViews(recycler: androidx.recyclerview.widget.RecyclerView.Recycler): void;
			}
			export module GridLayoutManager {
				export abstract class GridLinearSmoothScroller extends androidx.recyclerview.widget.LinearSmoothScroller {
					public static class: java.lang.Class<androidx.leanback.widget.GridLayoutManager.GridLinearSmoothScroller>;
					public onTargetFound(targetView: globalAndroid.view.View, state: androidx.recyclerview.widget.RecyclerView.State, action: androidx.recyclerview.widget.RecyclerView.SmoothScroller.Action): void;
					public onStop(): void;
					public onStopInternal(): void;
					public calculateTimeForScrolling(dx: number): number;
				}
				export class LayoutParams extends androidx.recyclerview.widget.RecyclerView.LayoutParams {
					public static class: java.lang.Class<androidx.leanback.widget.GridLayoutManager.LayoutParams>;
					public constructor(source: globalAndroid.view.ViewGroup.LayoutParams);
					public constructor(c: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
					public constructor(source: androidx.recyclerview.widget.RecyclerView.LayoutParams);
					public constructor(width: number, height: number);
					public constructor(source: androidx.leanback.widget.GridLayoutManager.LayoutParams);
					public constructor(source: globalAndroid.view.ViewGroup.MarginLayoutParams);
				}
				export class OnLayoutCompleteListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.widget.GridLayoutManager.OnLayoutCompleteListener>;
					public onLayoutCompleted(state: androidx.recyclerview.widget.RecyclerView.State): void;
					public constructor();
				}
				export class PendingMoveSmoothScroller extends androidx.leanback.widget.GridLayoutManager.GridLinearSmoothScroller {
					public static class: java.lang.Class<androidx.leanback.widget.GridLayoutManager.PendingMoveSmoothScroller>;
					public computeScrollVectorForPosition(targetPosition: number): globalAndroid.graphics.PointF;
					public updateActionForInterimTarget(action: androidx.recyclerview.widget.RecyclerView.SmoothScroller.Action): void;
					public onStopInternal(): void;
				}
				export class SavedState extends java.lang.Object implements globalAndroid.os.Parcelable {
					public static class: java.lang.Class<androidx.leanback.widget.GridLayoutManager.SavedState>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<androidx.leanback.widget.GridLayoutManager.SavedState>;
					public describeContents(): number;
					public writeToParcel(out: globalAndroid.os.Parcel, flags: number): void;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class GuidanceStylingRelativeLayout extends globalAndroid.widget.RelativeLayout {
				public static class: java.lang.Class<androidx.leanback.widget.GuidanceStylingRelativeLayout>;
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
				public addView(child: globalAndroid.view.View, width: number, height: number): void;
				public isTextDirectionResolved(): boolean;
				public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
				public childHasTransientStateChanged(child: globalAndroid.view.View, childHasTransientState: boolean): void;
				public focusableViewAvailable(v: globalAndroid.view.View): void;
				public showContextMenuForChild(originalView: globalAndroid.view.View): boolean;
				public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public static getKeyLinePercent(context: globalAndroid.content.Context): number;
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
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyle: number);
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
	export module leanback {
		export module widget {
			export class GuidanceStylist extends java.lang.Object implements androidx.leanback.widget.FragmentAnimationProvider {
				public static class: java.lang.Class<androidx.leanback.widget.GuidanceStylist>;
				public onProvideLayoutId(): number;
				public onImeAppearing(animators: java.util.List<globalAndroid.animation.Animator>): void;
				public getTitleView(): globalAndroid.widget.TextView;
				public getDescriptionView(): globalAndroid.widget.TextView;
				public getBreadcrumbView(): globalAndroid.widget.TextView;
				public onCreateView(inflater: globalAndroid.view.LayoutInflater, container: globalAndroid.view.ViewGroup, guidance: androidx.leanback.widget.GuidanceStylist.Guidance): globalAndroid.view.View;
				public getIconView(): globalAndroid.widget.ImageView;
				public onImeDisappearing(animators: java.util.List<globalAndroid.animation.Animator>): void;
				public onDestroyView(): void;
				public constructor();
			}
			export module GuidanceStylist {
				export class Guidance extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.widget.GuidanceStylist.Guidance>;
					public getTitle(): string;
					public getBreadcrumb(): string;
					public getDescription(): string;
					public constructor(title: string, description: string, breadcrumb: string, icon: globalAndroid.graphics.drawable.Drawable);
					public getIconDrawable(): globalAndroid.graphics.drawable.Drawable;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class GuidedAction extends androidx.leanback.widget.Action {
				public static class: java.lang.Class<androidx.leanback.widget.GuidedAction>;
				public static NO_CHECK_SET: number;
				public static DEFAULT_CHECK_SET_ID: number;
				public static CHECKBOX_CHECK_SET_ID: number;
				public static ACTION_ID_NEXT: number;
				public static ACTION_ID_CURRENT: number;
				public static ACTION_ID_OK: number;
				public static ACTION_ID_CANCEL: number;
				public static ACTION_ID_FINISH: number;
				public static ACTION_ID_CONTINUE: number;
				public static ACTION_ID_YES: number;
				public static ACTION_ID_NO: number;
				public setEditDescription(editDescription: string): void;
				public isEditTitleUsed(): boolean;
				public setIntent(intent: globalAndroid.content.Intent): void;
				public isChecked(): boolean;
				public getIntent(): globalAndroid.content.Intent;
				public getEditTitle(): string;
				public getDescription(): string;
				public getCheckSetId(): number;
				public constructor();
				public setChecked(checked: boolean): void;
				public getSubActions(): java.util.List<androidx.leanback.widget.GuidedAction>;
				public getInputType(): number;
				public hasMultilineDescription(): boolean;
				public setTitle(title: string): void;
				public infoOnly(): boolean;
				public getAutofillHints(): native.Array<string>;
				public hasSubActions(): boolean;
				public setEditTitle(editTitle: string): void;
				public onRestoreInstanceState(bundle: globalAndroid.os.Bundle, key: string): void;
				public hasEditableActivatorView(): boolean;
				public setSubActions(actions: java.util.List<androidx.leanback.widget.GuidedAction>): void;
				public constructor(id: number);
				public constructor(id: number, label: string);
				public isDescriptionEditable(): boolean;
				public setFocusable(focusable: boolean): void;
				public getDescriptionEditInputType(): number;
				public getDescriptionInputType(): number;
				public constructor(id: number, label1: string, label2: string);
				public getTitle(): string;
				public isEditable(): boolean;
				public isAutoSaveRestoreEnabled(): boolean;
				public hasTextEditable(): boolean;
				public constructor(id: number, label1: string, label2: string, icon: globalAndroid.graphics.drawable.Drawable);
				public getEditDescription(): string;
				public setDescription(description: string): void;
				public onSaveInstanceState(bundle: globalAndroid.os.Bundle, key: string): void;
				public hasNext(): boolean;
				public isFocusable(): boolean;
				public isEnabled(): boolean;
				public getEditInputType(): number;
				public setEnabled(enabled: boolean): void;
			}
			export module GuidedAction {
				export class Builder extends androidx.leanback.widget.GuidedAction.BuilderBase<androidx.leanback.widget.GuidedAction.Builder> {
					public static class: java.lang.Class<androidx.leanback.widget.GuidedAction.Builder>;
					public build(): androidx.leanback.widget.GuidedAction;
					/** @deprecated */
					public constructor();
					public constructor(context: globalAndroid.content.Context);
				}
				export abstract class BuilderBase<B>  extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.widget.GuidedAction.BuilderBase<any>>;
					public editTitle(editTitleResourceId: number): B;
					public descriptionEditInputType(inputType: number): B;
					public infoOnly(infoOnly: boolean): B;
					public autofillHints(hints: native.Array<string>): B;
					public icon(iconResourceId: number): B;
					public editTitle(editTitle: string): B;
					public description(description: string): B;
					public icon(icon: globalAndroid.graphics.drawable.Drawable): B;
					public focusable(focusable: boolean): B;
					public inputType(inputType: number): B;
					public checked(checked: boolean): B;
					public checkSetId(checkSetId: number): B;
					public getContext(): globalAndroid.content.Context;
					public editDescription(description: string): B;
					public enabled(enabled: boolean): B;
					public descriptionEditable(editable: boolean): B;
					public editInputType(inputType: number): B;
					public clickAction(id: number): B;
					public title(titleResourceId: number): B;
					public editable(editable: boolean): B;
					public id(id: number): B;
					public editDescription(descriptionResourceId: number): B;
					public multilineDescription(multilineDescription: boolean): B;
					public hasNext(hasNext: boolean): B;
					public descriptionInputType(inputType: number): B;
					public hasEditableActivatorView(editable: boolean): B;
					public autoSaveRestoreEnabled(autoSaveRestoreEnabled: boolean): B;
					public title(title: string): B;
					public subActions(subActions: java.util.List<androidx.leanback.widget.GuidedAction>): B;
					public description(descriptionResourceId: number): B;
					public constructor(context: globalAndroid.content.Context);
					/** @deprecated */
					public iconResourceId(iconResourceId: number, context: globalAndroid.content.Context): B;
					public applyValues(action: androidx.leanback.widget.GuidedAction): void;
					public intent(intent: globalAndroid.content.Intent): B;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class GuidedActionAdapter extends androidx.recyclerview.widget.RecyclerView.Adapter<any> {
				public static class: java.lang.Class<androidx.leanback.widget.GuidedActionAdapter>;
				public setClickListener(clickListener: androidx.leanback.widget.GuidedActionAdapter.ClickListener): void;
				public getItemViewType(position: number): number;
				public getItem(position: number): androidx.leanback.widget.GuidedAction;
				public setFocusListener(focusListener: androidx.leanback.widget.GuidedActionAdapter.FocusListener): void;
				public getCount(): number;
				public onBindViewHolder(holder: any, position: number, payloads: java.util.List<any>): void;
				public setActions(actions: java.util.List<androidx.leanback.widget.GuidedAction>): void;
				public constructor();
				public onCreateViewHolder(viewGroup0: globalAndroid.view.ViewGroup, int1: number): any;
				public onCreateViewHolder(parent: globalAndroid.view.ViewGroup, viewType: number): androidx.recyclerview.widget.RecyclerView.ViewHolder;
				public getItemCount(): number;
				public setDiffCallback(diffCallback: androidx.leanback.widget.DiffCallback<androidx.leanback.widget.GuidedAction>): void;
				public onBindViewHolder(holder: androidx.recyclerview.widget.RecyclerView.ViewHolder, position: number): void;
				public handleCheckedActions(avh: androidx.leanback.widget.GuidedActionsStylist.ViewHolder): void;
				public onBindViewHolder(viewHolder0: any, int1: number): void;
				public getActions(): java.util.List<androidx.leanback.widget.GuidedAction>;
				public findSubChildViewHolder(v: globalAndroid.view.View): androidx.leanback.widget.GuidedActionsStylist.ViewHolder;
				public constructor(actions: java.util.List<androidx.leanback.widget.GuidedAction>, clickListener: androidx.leanback.widget.GuidedActionAdapter.ClickListener, focusListener: androidx.leanback.widget.GuidedActionAdapter.FocusListener, presenter: androidx.leanback.widget.GuidedActionsStylist, isSubAdapter: boolean);
				public getGuidedActionsStylist(): androidx.leanback.widget.GuidedActionsStylist;
				public performOnActionClick(avh: androidx.leanback.widget.GuidedActionsStylist.ViewHolder): void;
				public indexOf(action: androidx.leanback.widget.GuidedAction): number;
			}
			export module GuidedActionAdapter {
				export class ActionAutofillListener extends java.lang.Object implements androidx.leanback.widget.GuidedActionAutofillSupport.OnAutofillListener {
					public static class: java.lang.Class<androidx.leanback.widget.GuidedActionAdapter.ActionAutofillListener>;
					public onAutofill(view: globalAndroid.view.View): void;
				}
				export class ActionEditListener extends java.lang.Object implements globalAndroid.widget.TextView.OnEditorActionListener, androidx.leanback.widget.ImeKeyMonitor.ImeKeyListener {
					public static class: java.lang.Class<androidx.leanback.widget.GuidedActionAdapter.ActionEditListener>;
					public onKeyPreIme(editText: globalAndroid.widget.EditText, keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public onEditorAction(v: globalAndroid.widget.TextView, actionId: number, event: globalAndroid.view.KeyEvent): boolean;
				}
				export class ActionOnFocusListener extends java.lang.Object implements globalAndroid.view.View.OnFocusChangeListener {
					public static class: java.lang.Class<androidx.leanback.widget.GuidedActionAdapter.ActionOnFocusListener>;
					public setFocusListener(focusListener: androidx.leanback.widget.GuidedActionAdapter.FocusListener): void;
					public unFocus(): void;
					public onFocusChange(v: globalAndroid.view.View, hasFocus: boolean): void;
				}
				export class ActionOnKeyListener extends java.lang.Object implements globalAndroid.view.View.OnKeyListener {
					public static class: java.lang.Class<androidx.leanback.widget.GuidedActionAdapter.ActionOnKeyListener>;
					public onKey(v: globalAndroid.view.View, keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				}
				export class ClickListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.widget.GuidedActionAdapter.ClickListener>;
					/**
					 * Constructs a new instance of the androidx.leanback.widget.GuidedActionAdapter$ClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onGuidedActionClicked(guidedAction0: androidx.leanback.widget.GuidedAction): void;
					});
					public constructor();
					public onGuidedActionClicked(guidedAction0: androidx.leanback.widget.GuidedAction): void;
				}
				export class EditListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.widget.GuidedActionAdapter.EditListener>;
					/**
					 * Constructs a new instance of the androidx.leanback.widget.GuidedActionAdapter$EditListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onGuidedActionEditCanceled(guidedAction0: androidx.leanback.widget.GuidedAction): void;
						onGuidedActionEditedAndProceed(guidedAction0: androidx.leanback.widget.GuidedAction): number;
						onImeOpen(): void;
						onImeClose(): void;
					});
					public constructor();
					public onImeOpen(): void;
					public onGuidedActionEditCanceled(guidedAction0: androidx.leanback.widget.GuidedAction): void;
					public onImeClose(): void;
					public onGuidedActionEditedAndProceed(guidedAction0: androidx.leanback.widget.GuidedAction): number;
				}
				export class FocusListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.widget.GuidedActionAdapter.FocusListener>;
					/**
					 * Constructs a new instance of the androidx.leanback.widget.GuidedActionAdapter$FocusListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onGuidedActionFocused(guidedAction0: androidx.leanback.widget.GuidedAction): void;
					});
					public constructor();
					public onGuidedActionFocused(guidedAction0: androidx.leanback.widget.GuidedAction): void;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class GuidedActionAdapterGroup extends java.lang.Object {
				public static class: java.lang.Class<androidx.leanback.widget.GuidedActionAdapterGroup>;
				public getNextAdapter(adapter: androidx.leanback.widget.GuidedActionAdapter): androidx.leanback.widget.GuidedActionAdapter;
				public openIme(adapter: androidx.leanback.widget.GuidedActionAdapter, avh: androidx.leanback.widget.GuidedActionsStylist.ViewHolder): void;
				public setEditListener(listener: androidx.leanback.widget.GuidedActionAdapter.EditListener): void;
				public fillAndGoNext(adapter: androidx.leanback.widget.GuidedActionAdapter, v: globalAndroid.widget.TextView): void;
				public fillAndStay(adapter: androidx.leanback.widget.GuidedActionAdapter, v: globalAndroid.widget.TextView): void;
				public addAdpter(adapter1: androidx.leanback.widget.GuidedActionAdapter, adapter2: androidx.leanback.widget.GuidedActionAdapter): void;
				public closeIme(v: globalAndroid.view.View): void;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class GuidedActionAutofillSupport extends java.lang.Object {
				public static class: java.lang.Class<androidx.leanback.widget.GuidedActionAutofillSupport>;
				/**
				 * Constructs a new instance of the androidx.leanback.widget.GuidedActionAutofillSupport interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					setOnAutofillListener(onAutofillListener0: androidx.leanback.widget.GuidedActionAutofillSupport.OnAutofillListener): void;
				});
				public constructor();
				public setOnAutofillListener(onAutofillListener0: androidx.leanback.widget.GuidedActionAutofillSupport.OnAutofillListener): void;
			}
			export module GuidedActionAutofillSupport {
				export class OnAutofillListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.widget.GuidedActionAutofillSupport.OnAutofillListener>;
					/**
					 * Constructs a new instance of the androidx.leanback.widget.GuidedActionAutofillSupport$OnAutofillListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onAutofill(view0: globalAndroid.view.View): void;
					});
					public constructor();
					public onAutofill(view0: globalAndroid.view.View): void;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class GuidedActionDiffCallback extends androidx.leanback.widget.DiffCallback<androidx.leanback.widget.GuidedAction> {
				public static class: java.lang.Class<androidx.leanback.widget.GuidedActionDiffCallback>;
				public areItemsTheSame(oldItem: androidx.leanback.widget.GuidedAction, newItem: androidx.leanback.widget.GuidedAction): boolean;
				public areContentsTheSame(oldItem: androidx.leanback.widget.GuidedAction, newItem: androidx.leanback.widget.GuidedAction): boolean;
				public static getInstance(): androidx.leanback.widget.GuidedActionDiffCallback;
				public areContentsTheSame(object0: any, object1: any): boolean;
				public areItemsTheSame(object0: any, object1: any): boolean;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class GuidedActionEditText extends globalAndroid.widget.EditText implements androidx.leanback.widget.ImeKeyMonitor, androidx.leanback.widget.GuidedActionAutofillSupport {
				public static class: java.lang.Class<androidx.leanback.widget.GuidedActionEditText>;
				public setOnAutofillListener(autofillListener: androidx.leanback.widget.GuidedActionAutofillSupport.OnAutofillListener): void;
				public constructor(context: globalAndroid.content.Context);
				public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
				public onFocusChanged(focused: boolean, direction: number, previouslyFocusedRect: globalAndroid.graphics.Rect): void;
				public onKeyPreIme(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public constructor(ctx: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
				public sendAccessibilityEvent(eventType: number): void;
				public getAutofillType(): number;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
				public onPreDraw(): boolean;
				public setImeKeyListener(listener: androidx.leanback.widget.ImeKeyMonitor.ImeKeyListener): void;
				public autofill(values: globalAndroid.view.autofill.AutofillValue): void;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public onInitializeAccessibilityNodeInfo(info: globalAndroid.view.accessibility.AccessibilityNodeInfo): void;
				public constructor(ctx: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
				public autofill(value: globalAndroid.view.autofill.AutofillValue): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
				public autofill(values: globalAndroid.util.SparseArray<globalAndroid.view.autofill.AutofillValue>): void;
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public setCustomSelectionActionModeCallback(actionModeCallback: globalAndroid.view.ActionMode.Callback): void;
				public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public constructor(ctx: globalAndroid.content.Context);
			}
			export module GuidedActionEditText {
				export class NoPaddingDrawable extends globalAndroid.graphics.drawable.Drawable {
					public static class: java.lang.Class<androidx.leanback.widget.GuidedActionEditText.NoPaddingDrawable>;
					public setColorFilter(colorFilter0: globalAndroid.graphics.ColorFilter): void;
					/** @deprecated */
					public getOpacity(): number;
					public draw(canvas: globalAndroid.graphics.Canvas): void;
					public setAlpha(alpha: number): void;
					public getPadding(padding: globalAndroid.graphics.Rect): boolean;
					public draw(canvas0: globalAndroid.graphics.Canvas): void;
					/** @deprecated */
					public setColorFilter(color: number, mode: globalAndroid.graphics.PorterDuff.Mode): void;
					public setColorFilter(colorFilter: globalAndroid.graphics.ColorFilter): void;
					public setAlpha(int0: number): void;
					public getOpacity(): number;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class GuidedActionItemContainer extends androidx.leanback.widget.NonOverlappingLinearLayoutWithForeground {
				public static class: java.lang.Class<androidx.leanback.widget.GuidedActionItemContainer>;
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
				public setFocusOutAllowed(focusOutAllowed: boolean): void;
				public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback, type: number): globalAndroid.view.ActionMode;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
				public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public getTextAlignment(): number;
				/** @deprecated */
				public invalidateChildInParent(location: native.Array<number>, dirty: globalAndroid.graphics.Rect): globalAndroid.view.ViewParent;
				public getParentForAccessibility(): globalAndroid.view.ViewParent;
				public onNestedFling(target: globalAndroid.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
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
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyle: number);
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
	export module leanback {
		export module widget {
			export class GuidedActionsRelativeLayout extends globalAndroid.widget.RelativeLayout {
				public static class: java.lang.Class<androidx.leanback.widget.GuidedActionsRelativeLayout>;
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
				public dispatchKeyEvent(event: globalAndroid.view.KeyEvent): boolean;
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
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyle: number);
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
				public setInterceptKeyEventListener(l: androidx.leanback.widget.GuidedActionsRelativeLayout.InterceptKeyEventListener): void;
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
			export module GuidedActionsRelativeLayout {
				export class InterceptKeyEventListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.widget.GuidedActionsRelativeLayout.InterceptKeyEventListener>;
					/**
					 * Constructs a new instance of the androidx.leanback.widget.GuidedActionsRelativeLayout$InterceptKeyEventListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onInterceptKeyEvent(keyEvent0: globalAndroid.view.KeyEvent): boolean;
					});
					public constructor();
					public onInterceptKeyEvent(keyEvent0: globalAndroid.view.KeyEvent): boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class GuidedActionsStylist extends java.lang.Object implements androidx.leanback.widget.FragmentAnimationProvider {
				public static class: java.lang.Class<androidx.leanback.widget.GuidedActionsStylist>;
				public static VIEW_TYPE_DEFAULT: number;
				public static VIEW_TYPE_DATE_PICKER: number;
				/** @deprecated */
				public setEditingMode(vh: androidx.leanback.widget.GuidedActionsStylist.ViewHolder, action: androidx.leanback.widget.GuidedAction, editing: boolean): void;
				public expandAction(action: androidx.leanback.widget.GuidedAction, withTransition: boolean): void;
				public onEditingModeChange(vh: androidx.leanback.widget.GuidedActionsStylist.ViewHolder, editing: boolean, withTransition: boolean): void;
				public onAnimateItemFocused(vh: androidx.leanback.widget.GuidedActionsStylist.ViewHolder, focused: boolean): void;
				public onImeAppearing(animators: java.util.List<globalAndroid.animation.Animator>): void;
				public isInExpandTransition(): boolean;
				public collapseAction(withTransition: boolean): void;
				public onBindActivatorView(vh: androidx.leanback.widget.GuidedActionsStylist.ViewHolder, action: androidx.leanback.widget.GuidedAction): void;
				public onBindChevronView(vh: androidx.leanback.widget.GuidedActionsStylist.ViewHolder, action: androidx.leanback.widget.GuidedAction): void;
				public constructor();
				public onCreateViewHolder(parent: globalAndroid.view.ViewGroup, viewType: number): androidx.leanback.widget.GuidedActionsStylist.ViewHolder;
				public isBackKeyToCollapseActivatorView(): boolean;
				public setBackKeyToCollapseSubActions(backToCollapse: boolean): void;
				public onProvideItemLayoutId(viewType: number): number;
				public setupImeOptions(vh: androidx.leanback.widget.GuidedActionsStylist.ViewHolder, action: androidx.leanback.widget.GuidedAction): void;
				public isExpanded(): boolean;
				public onBindCheckMarkView(vh: androidx.leanback.widget.GuidedActionsStylist.ViewHolder, action: androidx.leanback.widget.GuidedAction): void;
				/** @deprecated */
				public startExpandedTransition(avh: androidx.leanback.widget.GuidedActionsStylist.ViewHolder): void;
				public getActionsGridView(): androidx.leanback.widget.VerticalGridView;
				public setAsButtonActions(): void;
				public getItemViewType(action: androidx.leanback.widget.GuidedAction): number;
				public onProvideItemLayoutId(): number;
				public isExpandTransitionSupported(): boolean;
				public getSubActionsGridView(): androidx.leanback.widget.VerticalGridView;
				public setBackKeyToCollapseActivatorView(backToCollapse: boolean): void;
				public onUpdateExpandedViewHolder(avh: androidx.leanback.widget.GuidedActionsStylist.ViewHolder): void;
				public onCreateView(inflater: globalAndroid.view.LayoutInflater, container: globalAndroid.view.ViewGroup): globalAndroid.view.View;
				/** @deprecated */
				public onEditingModeChange(vh: androidx.leanback.widget.GuidedActionsStylist.ViewHolder, action: androidx.leanback.widget.GuidedAction, editing: boolean): void;
				public isButtonActions(): boolean;
				/** @deprecated */
				public setExpandedViewHolder(avh: androidx.leanback.widget.GuidedActionsStylist.ViewHolder): void;
				public onAnimateItemChecked(vh: androidx.leanback.widget.GuidedActionsStylist.ViewHolder, checked: boolean): void;
				public onProvideLayoutId(): number;
				public getExpandedAction(): androidx.leanback.widget.GuidedAction;
				public isSubActionsExpanded(): boolean;
				public onBindViewHolder(vh: androidx.leanback.widget.GuidedActionsStylist.ViewHolder, action: androidx.leanback.widget.GuidedAction): void;
				public onUpdateActivatorView(vh: androidx.leanback.widget.GuidedActionsStylist.ViewHolder, action: androidx.leanback.widget.GuidedAction): boolean;
				public setEditListener(listener: androidx.leanback.widget.GuidedActionAdapter.EditListener): void;
				public isBackKeyToCollapseSubActions(): boolean;
				public onImeDisappearing(animators: java.util.List<globalAndroid.animation.Animator>): void;
				public onDestroyView(): void;
				public onCreateViewHolder(parent: globalAndroid.view.ViewGroup): androidx.leanback.widget.GuidedActionsStylist.ViewHolder;
				public openInEditMode(action: androidx.leanback.widget.GuidedAction): void;
				public onAnimateItemPressed(vh: androidx.leanback.widget.GuidedActionsStylist.ViewHolder, pressed: boolean): void;
				public onAnimateItemPressedCancelled(vh: androidx.leanback.widget.GuidedActionsStylist.ViewHolder): void;
			}
			export module GuidedActionsStylist {
				export class ViewHolder extends androidx.recyclerview.widget.RecyclerView.ViewHolder implements androidx.leanback.widget.FacetProvider {
					public static class: java.lang.Class<androidx.leanback.widget.GuidedActionsStylist.ViewHolder>;
					public constructor(v: globalAndroid.view.View);
					public constructor(v: globalAndroid.view.View, isSubAction: boolean);
					public getDescriptionView(): globalAndroid.widget.TextView;
					public isInEditingText(): boolean;
					public isSubAction(): boolean;
					public getTitleView(): globalAndroid.widget.TextView;
					public getIconView(): globalAndroid.widget.ImageView;
					public isInEditing(): boolean;
					public isInEditingTitle(): boolean;
					public constructor(itemView: globalAndroid.view.View);
					public getContentView(): globalAndroid.view.View;
					public getFacet(facetClass: java.lang.Class<any>): any;
					public isInEditingActivatorView(): boolean;
					public getAction(): androidx.leanback.widget.GuidedAction;
					public isInEditingDescription(): boolean;
					public getEditingView(): globalAndroid.view.View;
					public getEditableDescriptionView(): globalAndroid.widget.EditText;
					public getEditableTitleView(): globalAndroid.widget.EditText;
					public getChevronView(): globalAndroid.widget.ImageView;
					public getCheckmarkView(): globalAndroid.widget.ImageView;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class GuidedDatePickerAction extends androidx.leanback.widget.GuidedAction {
				public static class: java.lang.Class<androidx.leanback.widget.GuidedDatePickerAction>;
				public getDatePickerFormat(): string;
				public onRestoreInstanceState(bundle: globalAndroid.os.Bundle, key: string): void;
				public constructor(id: number, label1: string, label2: string, icon: globalAndroid.graphics.drawable.Drawable);
				public constructor(id: number);
				public constructor(id: number, label: string);
				public getMinDate(): number;
				public onSaveInstanceState(bundle: globalAndroid.os.Bundle, key: string): void;
				public getMaxDate(): number;
				public constructor(id: number, label1: string, label2: string);
				public getDate(): number;
				public setDate(date: number): void;
				public constructor();
			}
			export module GuidedDatePickerAction {
				export class Builder extends androidx.leanback.widget.GuidedDatePickerAction.BuilderBase<androidx.leanback.widget.GuidedDatePickerAction.Builder> {
					public static class: java.lang.Class<androidx.leanback.widget.GuidedDatePickerAction.Builder>;
					public constructor(context: globalAndroid.content.Context);
					public build(): androidx.leanback.widget.GuidedDatePickerAction;
				}
				export abstract class BuilderBase<B>  extends androidx.leanback.widget.GuidedAction.BuilderBase<any> {
					public static class: java.lang.Class<androidx.leanback.widget.GuidedDatePickerAction.BuilderBase<any>>;
					public applyDatePickerValues(action: androidx.leanback.widget.GuidedDatePickerAction): void;
					public minDate(minDate: number): any;
					public datePickerFormat(format: string): any;
					public date(date: number): any;
					public constructor(context: globalAndroid.content.Context);
					public maxDate(maxDate: number): any;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class HeaderItem extends java.lang.Object {
				public static class: java.lang.Class<androidx.leanback.widget.HeaderItem>;
				public setContentDescription(contentDescription: string): void;
				public constructor(id: number, name: string);
				public constructor(name: string);
				public setDescription(description: string): void;
				public getContentDescription(): string;
				public getId(): number;
				public getName(): string;
				public getDescription(): string;
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class HorizontalGridView extends androidx.leanback.widget.BaseGridView {
				public static class: java.lang.Class<androidx.leanback.widget.HorizontalGridView>;
				/** @deprecated */
				public invalidateChild(child: globalAndroid.view.View, dirty: globalAndroid.graphics.Rect): void;
				public getFadingLeftEdgeLength(): number;
				public focusSearch(direction: number): globalAndroid.view.View;
				public setFadingRightEdgeOffset(fadeOffset: number): void;
				public childDrawableStateChanged(child: globalAndroid.view.View): void;
				public onStopNestedScroll(child: globalAndroid.view.View): void;
				public isLayoutRequested(): boolean;
				public getFadingRightEdgeLength(): number;
				public startNestedScroll(axes: number, type: number): boolean;
				public onNestedPrePerformAccessibilityAction(target: globalAndroid.view.View, action: number, bundle2: globalAndroid.os.Bundle): boolean;
				public getTextDirection(): number;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
				public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				/** @deprecated */
				public invalidateChildInParent(location: native.Array<number>, dirty: globalAndroid.graphics.Rect): globalAndroid.view.ViewParent;
				public getParentForAccessibility(): globalAndroid.view.ViewParent;
				public onNestedFling(target: globalAndroid.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
				public keyboardNavigationClusterSearch(currentCluster: globalAndroid.view.View, direction: number): globalAndroid.view.View;
				public computeHorizontalScrollExtent(): number;
				public isTextDirectionResolved(): boolean;
				public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
				public setFadingLeftEdge(fading: boolean): void;
				public computeVerticalScrollRange(): number;
				public dispatchNestedScroll(dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number, offsetInWindow: native.Array<number>, type: number, consumed: native.Array<number>): void;
				public showContextMenuForChild(originalView: globalAndroid.view.View): boolean;
				public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public recomputeViewAttributes(child: globalAndroid.view.View): void;
				public isLayoutDirectionResolved(): boolean;
				public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public hasNestedScrollingParent(type: number): boolean;
				public setFadingRightEdge(fading: boolean): void;
				public computeHorizontalScrollOffset(): number;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyle: number);
				public updateViewLayout(view: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public onNestedScroll(target: globalAndroid.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
				public stopNestedScroll(type: number): void;
				public focusSearch(focused: globalAndroid.view.View, direction: number): globalAndroid.view.View;
				/** @deprecated */
				public requestFitSystemWindows(): void;
				public showContextMenuForChild(originalView: globalAndroid.view.View, x: number, y: number): boolean;
				public requestChildRectangleOnScreen(child: globalAndroid.view.View, rect: globalAndroid.graphics.Rect, immediate: boolean): boolean;
				public getFadingLeftEdge(): boolean;
				public bringChildToFront(child: globalAndroid.view.View): void;
				public clearChildFocus(child: globalAndroid.view.View): void;
				public getFadingRightEdgeOffset(): number;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public startNestedScroll(axes: number): boolean;
				public stopNestedScroll(): void;
				public getFadingRightEdge(): boolean;
				public addView(child: globalAndroid.view.View, index: number, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public dispatchNestedScroll(dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number, offsetInWindow: native.Array<number>, type: number): boolean;
				public getParent(): globalAndroid.view.ViewParent;
				public constructor(context: globalAndroid.content.Context);
				public onNestedScrollAccepted(child: globalAndroid.view.View, target: globalAndroid.view.View, axes: number): void;
				public computeVerticalScrollOffset(): number;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
				public sendAccessibilityEvent(eventType: number): void;
				public dispatchNestedPreScroll(dx: number, dy: number, consumed: native.Array<number>, offsetInWindow: native.Array<number>, type: number): boolean;
				public addView(child: globalAndroid.view.View, index: number): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
				public computeHorizontalScrollRange(): number;
				public requestFitSystemWindows(): void;
				public draw(c: globalAndroid.graphics.Canvas): void;
				public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback, type: number): globalAndroid.view.ActionMode;
				public getTextAlignment(): number;
				public dispatchNestedScroll(dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number, offsetInWindow: native.Array<number>): boolean;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
				public setRowHeight(height: number): void;
				public addView(child: globalAndroid.view.View, width: number, height: number): void;
				public childHasTransientStateChanged(child: globalAndroid.view.View, childHasTransientState: boolean): void;
				public computeVerticalScrollExtent(): number;
				public focusableViewAvailable(v: globalAndroid.view.View): void;
				public addView(child: globalAndroid.view.View): void;
				public setFadingRightEdgeLength(fadeLength: number): void;
				public requestSendAccessibilityEvent(child: globalAndroid.view.View, event: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
				public isTextAlignmentResolved(): boolean;
				public setNumRows(numRows: number): void;
				public getLayoutDirection(): number;
				public addView(child: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public canResolveTextDirection(): boolean;
				public canResolveTextAlignment(): boolean;
				public notifySubtreeAccessibilityStateChanged(child: globalAndroid.view.View, source: globalAndroid.view.View, changeType: number): void;
				public dispatchNestedPreScroll(dx: number, dy: number, consumed: native.Array<number>, offsetInWindow: native.Array<number>): boolean;
				public requestLayout(): void;
				public requestTransparentRegion(child: globalAndroid.view.View): void;
				public onStartNestedScroll(child: globalAndroid.view.View, target: globalAndroid.view.View, nestedScrollAxes: number): boolean;
				public onNestedPreScroll(target: globalAndroid.view.View, dx: number, dy: number, consumed: native.Array<number>): void;
				public draw(canvas: globalAndroid.graphics.Canvas): void;
				public onDescendantInvalidated(child: globalAndroid.view.View, target: globalAndroid.view.View): void;
				public removeView(view: globalAndroid.view.View): void;
				public setFadingLeftEdgeLength(fadeLength: number): void;
				public getChildVisibleRect(child: globalAndroid.view.View, r: globalAndroid.graphics.Rect, offset: globalAndroid.graphics.Point): boolean;
				public requestChildFocus(child: globalAndroid.view.View, focused: globalAndroid.view.View): void;
				public createContextMenu(menu: globalAndroid.view.ContextMenu): void;
				public canResolveLayoutDirection(): boolean;
				public initAttributes(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet): void;
				public getFadingLeftEdgeOffset(): number;
				public hasNestedScrollingParent(): boolean;
				public setFadingLeftEdgeOffset(fadeOffset: number): void;
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public onNestedPreFling(target: globalAndroid.view.View, velocityX: number, velocityY: number): boolean;
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class HorizontalHoverCardSwitcher extends androidx.leanback.widget.PresenterSwitcher {
				public static class: java.lang.Class<androidx.leanback.widget.HorizontalHoverCardSwitcher>;
				public insertView(view: globalAndroid.view.View): void;
				public insertView(view0: globalAndroid.view.View): void;
				public onViewSelected(view: globalAndroid.view.View): void;
				public select(gridView: androidx.leanback.widget.HorizontalGridView, childView: globalAndroid.view.View, object: any): void;
				public select(object: any): void;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class ImageCardView extends androidx.leanback.widget.BaseCardView {
				public static class: java.lang.Class<androidx.leanback.widget.ImageCardView>;
				public static CARD_TYPE_FLAG_IMAGE_ONLY: number;
				public static CARD_TYPE_FLAG_TITLE: number;
				public static CARD_TYPE_FLAG_CONTENT: number;
				public static CARD_TYPE_FLAG_ICON_RIGHT: number;
				public static CARD_TYPE_FLAG_ICON_LEFT: number;
				public getMainImage(): globalAndroid.graphics.drawable.Drawable;
				/** @deprecated */
				public invalidateChild(child: globalAndroid.view.View, dirty: globalAndroid.graphics.Rect): void;
				public focusSearch(direction: number): globalAndroid.view.View;
				public constructor(context: globalAndroid.content.Context);
				public getContentText(): string;
				public onNestedScrollAccepted(child: globalAndroid.view.View, target: globalAndroid.view.View, axes: number): void;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
				public setContentText(text: string): void;
				public childDrawableStateChanged(child: globalAndroid.view.View): void;
				public onStopNestedScroll(child: globalAndroid.view.View): void;
				public setMainImage(drawable: globalAndroid.graphics.drawable.Drawable, fade: boolean): void;
				public isLayoutRequested(): boolean;
				public sendAccessibilityEvent(eventType: number): void;
				public onNestedPrePerformAccessibilityAction(target: globalAndroid.view.View, action: number, bundle2: globalAndroid.os.Bundle): boolean;
				public addView(child: globalAndroid.view.View, index: number): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
				public requestFitSystemWindows(): void;
				public getTextDirection(): number;
				public setMainImageScaleType(scaleType: globalAndroid.widget.ImageView.ScaleType): void;
				public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback, type: number): globalAndroid.view.ActionMode;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
				public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public getTextAlignment(): number;
				/** @deprecated */
				public invalidateChildInParent(location: native.Array<number>, dirty: globalAndroid.graphics.Rect): globalAndroid.view.ViewParent;
				public getParentForAccessibility(): globalAndroid.view.ViewParent;
				public onNestedFling(target: globalAndroid.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
				public getTitleText(): string;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
				public getInfoAreaBackground(): globalAndroid.graphics.drawable.Drawable;
				public keyboardNavigationClusterSearch(currentCluster: globalAndroid.view.View, direction: number): globalAndroid.view.View;
				public addView(child: globalAndroid.view.View, width: number, height: number): void;
				public isTextDirectionResolved(): boolean;
				public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
				public childHasTransientStateChanged(child: globalAndroid.view.View, childHasTransientState: boolean): void;
				public onDetachedFromWindow(): void;
				public focusableViewAvailable(v: globalAndroid.view.View): void;
				public showContextMenuForChild(originalView: globalAndroid.view.View): boolean;
				public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public recomputeViewAttributes(child: globalAndroid.view.View): void;
				public setInfoAreaBackgroundColor(color: number): void;
				public addView(child: globalAndroid.view.View): void;
				public requestSendAccessibilityEvent(child: globalAndroid.view.View, event: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
				public isLayoutDirectionResolved(): boolean;
				public isTextAlignmentResolved(): boolean;
				public getLayoutDirection(): number;
				public addView(child: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				/** @deprecated */
				public constructor(context: globalAndroid.content.Context, themeResId: number);
				public setInfoAreaBackground(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public canResolveTextDirection(): boolean;
				public canResolveTextAlignment(): boolean;
				public notifySubtreeAccessibilityStateChanged(child: globalAndroid.view.View, source: globalAndroid.view.View, changeType: number): void;
				public getBadgeImage(): globalAndroid.graphics.drawable.Drawable;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
				public updateViewLayout(view: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public onNestedScroll(target: globalAndroid.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
				public setTitleText(text: string): void;
				public requestLayout(): void;
				public focusSearch(focused: globalAndroid.view.View, direction: number): globalAndroid.view.View;
				public requestTransparentRegion(child: globalAndroid.view.View): void;
				public onStartNestedScroll(child: globalAndroid.view.View, target: globalAndroid.view.View, nestedScrollAxes: number): boolean;
				/** @deprecated */
				public requestFitSystemWindows(): void;
				public setMainImage(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public showContextMenuForChild(originalView: globalAndroid.view.View, x: number, y: number): boolean;
				public bringChildToFront(child: globalAndroid.view.View): void;
				public onNestedPreScroll(target: globalAndroid.view.View, dx: number, dy: number, consumed: native.Array<number>): void;
				public clearChildFocus(child: globalAndroid.view.View): void;
				public setBadgeImage(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public onDescendantInvalidated(child: globalAndroid.view.View, target: globalAndroid.view.View): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public setMainImageAdjustViewBounds(adjustViewBounds: boolean): void;
				public removeView(view: globalAndroid.view.View): void;
				public requestChildRectangleOnScreen(child: globalAndroid.view.View, rectangle: globalAndroid.graphics.Rect, immediate: boolean): boolean;
				public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public getChildVisibleRect(child: globalAndroid.view.View, r: globalAndroid.graphics.Rect, offset: globalAndroid.graphics.Point): boolean;
				public requestChildFocus(child: globalAndroid.view.View, focused: globalAndroid.view.View): void;
				public createContextMenu(menu: globalAndroid.view.ContextMenu): void;
				public canResolveLayoutDirection(): boolean;
				public setMainImageDimensions(width: number, height: number): void;
				public addView(child: globalAndroid.view.View, index: number, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public getMainImageView(): globalAndroid.widget.ImageView;
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public onNestedPreFling(target: globalAndroid.view.View, velocityX: number, velocityY: number): boolean;
				public onAttachedToWindow(): void;
				public getParent(): globalAndroid.view.ViewParent;
				public hasOverlappingRendering(): boolean;
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class ImeKeyMonitor extends java.lang.Object {
				public static class: java.lang.Class<androidx.leanback.widget.ImeKeyMonitor>;
				/**
				 * Constructs a new instance of the androidx.leanback.widget.ImeKeyMonitor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					setImeKeyListener(imeKeyListener0: androidx.leanback.widget.ImeKeyMonitor.ImeKeyListener): void;
				});
				public constructor();
				public setImeKeyListener(imeKeyListener0: androidx.leanback.widget.ImeKeyMonitor.ImeKeyListener): void;
			}
			export module ImeKeyMonitor {
				export class ImeKeyListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.widget.ImeKeyMonitor.ImeKeyListener>;
					/**
					 * Constructs a new instance of the androidx.leanback.widget.ImeKeyMonitor$ImeKeyListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onKeyPreIme(editText0: globalAndroid.widget.EditText, int1: number, keyEvent2: globalAndroid.view.KeyEvent): boolean;
					});
					public constructor();
					public onKeyPreIme(editText0: globalAndroid.widget.EditText, int1: number, keyEvent2: globalAndroid.view.KeyEvent): boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class InvisibleRowPresenter extends androidx.leanback.widget.RowPresenter {
				public static class: java.lang.Class<androidx.leanback.widget.InvisibleRowPresenter>;
				public createRowViewHolder(parent: globalAndroid.view.ViewGroup): androidx.leanback.widget.RowPresenter.ViewHolder;
				public createRowViewHolder(viewGroup0: globalAndroid.view.ViewGroup): androidx.leanback.widget.RowPresenter.ViewHolder;
				public getFacet(facetClass: java.lang.Class<any>): any;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class ItemAlignment extends java.lang.Object {
				public static class: java.lang.Class<androidx.leanback.widget.ItemAlignment>;
				public vertical: androidx.leanback.widget.ItemAlignment.Axis;
				public horizontal: androidx.leanback.widget.ItemAlignment.Axis;
				public secondAxis(): androidx.leanback.widget.ItemAlignment.Axis;
				public setOrientation(orientation: number): void;
				public mainAxis(): androidx.leanback.widget.ItemAlignment.Axis;
				public getOrientation(): number;
			}
			export module ItemAlignment {
				export class Axis extends androidx.leanback.widget.ItemAlignmentFacet.ItemAlignmentDef {
					public static class: java.lang.Class<androidx.leanback.widget.ItemAlignment.Axis>;
					public getAlignmentPosition(itemView: globalAndroid.view.View): number;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class ItemAlignmentFacet extends java.lang.Object {
				public static class: java.lang.Class<androidx.leanback.widget.ItemAlignmentFacet>;
				public static ITEM_ALIGN_OFFSET_PERCENT_DISABLED: number;
				public isMultiAlignment(): boolean;
				public getAlignmentDefs(): native.Array<androidx.leanback.widget.ItemAlignmentFacet.ItemAlignmentDef>;
				public constructor();
				public setAlignmentDefs(defs: native.Array<androidx.leanback.widget.ItemAlignmentFacet.ItemAlignmentDef>): void;
			}
			export module ItemAlignmentFacet {
				export class ItemAlignmentDef extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.widget.ItemAlignmentFacet.ItemAlignmentDef>;
					public getItemAlignmentOffsetPercent(): number;
					public getItemAlignmentViewId(): number;
					public getItemAlignmentOffset(): number;
					public isAlignedToTextViewBaseLine(): boolean;
					public constructor();
					public setItemAlignmentOffsetWithPadding(withPadding: boolean): void;
					public setAlignedToTextViewBaseline(alignToBaseline: boolean): void;
					public setItemAlignmentOffsetPercent(percent: number): void;
					public setItemAlignmentFocusViewId(viewId: number): void;
					public getItemAlignmentFocusViewId(): number;
					public setItemAlignmentOffset(offset: number): void;
					public isItemAlignmentOffsetWithPadding(): boolean;
					public setItemAlignmentViewId(viewId: number): void;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class ItemAlignmentFacetHelper extends java.lang.Object {
				public static class: java.lang.Class<androidx.leanback.widget.ItemAlignmentFacetHelper>;
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class ItemBridgeAdapter extends androidx.recyclerview.widget.RecyclerView.Adapter<any> implements androidx.leanback.widget.FacetProviderAdapter {
				public static class: java.lang.Class<androidx.leanback.widget.ItemBridgeAdapter>;
				public getFacetProvider(type: number): androidx.leanback.widget.FacetProvider;
				public onUnbind(viewHolder: androidx.leanback.widget.ItemBridgeAdapter.ViewHolder): void;
				public getWrapper(): androidx.leanback.widget.ItemBridgeAdapter.Wrapper;
				public getItemViewType(position: number): number;
				public constructor(adapter: androidx.leanback.widget.ObjectAdapter, presenterSelector: androidx.leanback.widget.PresenterSelector);
				public onBindViewHolder(holder: any, position: number, payloads: java.util.List<any>): void;
				public constructor();
				public getItemCount(): number;
				public onDetachedFromWindow(viewHolder: androidx.leanback.widget.ItemBridgeAdapter.ViewHolder): void;
				public onBindViewHolder(holder: androidx.recyclerview.widget.RecyclerView.ViewHolder, position: number): void;
				public onViewRecycled(holder: any): void;
				public setAdapterListener(listener: androidx.leanback.widget.ItemBridgeAdapter.AdapterListener): void;
				public onBind(viewHolder: androidx.leanback.widget.ItemBridgeAdapter.ViewHolder): void;
				public clear(): void;
				public onViewAttachedToWindow(holder: any): void;
				public onFailedToRecycleView(holder: androidx.recyclerview.widget.RecyclerView.ViewHolder): boolean;
				public setPresenter(presenterSelector: androidx.leanback.widget.PresenterSelector): void;
				public onViewAttachedToWindow(holder: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
				public setAdapter(adapter: androidx.leanback.widget.ObjectAdapter): void;
				public onViewDetachedFromWindow(holder: any): void;
				public onBindViewHolder(holder: androidx.recyclerview.widget.RecyclerView.ViewHolder, position: number, payloads: java.util.List<any>): void;
				public onCreate(viewHolder: androidx.leanback.widget.ItemBridgeAdapter.ViewHolder): void;
				public onViewDetachedFromWindow(holder: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
				public onCreateViewHolder(viewGroup0: globalAndroid.view.ViewGroup, int1: number): any;
				public onCreateViewHolder(parent: globalAndroid.view.ViewGroup, viewType: number): androidx.recyclerview.widget.RecyclerView.ViewHolder;
				public getPresenterMapper(): java.util.ArrayList<androidx.leanback.widget.Presenter>;
				public setPresenterMapper(presenters: java.util.ArrayList<androidx.leanback.widget.Presenter>): void;
				public onViewRecycled(holder: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
				public getItemId(position: number): number;
				public onBindViewHolder(viewHolder0: any, int1: number): void;
				public onFailedToRecycleView(holder: any): boolean;
				public constructor(adapter: androidx.leanback.widget.ObjectAdapter);
				public setWrapper(wrapper: androidx.leanback.widget.ItemBridgeAdapter.Wrapper): void;
				public onAddPresenter(presenter: androidx.leanback.widget.Presenter, type: number): void;
				public onAttachedToWindow(viewHolder: androidx.leanback.widget.ItemBridgeAdapter.ViewHolder): void;
			}
			export module ItemBridgeAdapter {
				export class AdapterListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.widget.ItemBridgeAdapter.AdapterListener>;
					public onBind(viewHolder: androidx.leanback.widget.ItemBridgeAdapter.ViewHolder): void;
					public onAddPresenter(presenter: androidx.leanback.widget.Presenter, type: number): void;
					public constructor();
					public onCreate(viewHolder: androidx.leanback.widget.ItemBridgeAdapter.ViewHolder): void;
					public onAttachedToWindow(viewHolder: androidx.leanback.widget.ItemBridgeAdapter.ViewHolder): void;
					public onBind(viewHolder: androidx.leanback.widget.ItemBridgeAdapter.ViewHolder, payloads: java.util.List<any>): void;
					public onDetachedFromWindow(viewHolder: androidx.leanback.widget.ItemBridgeAdapter.ViewHolder): void;
					public onUnbind(viewHolder: androidx.leanback.widget.ItemBridgeAdapter.ViewHolder): void;
				}
				export class OnFocusChangeListener extends java.lang.Object implements globalAndroid.view.View.OnFocusChangeListener {
					public static class: java.lang.Class<androidx.leanback.widget.ItemBridgeAdapter.OnFocusChangeListener>;
					public onFocusChange(view: globalAndroid.view.View, hasFocus: boolean): void;
				}
				export class ViewHolder extends androidx.recyclerview.widget.RecyclerView.ViewHolder implements androidx.leanback.widget.FacetProvider {
					public static class: java.lang.Class<androidx.leanback.widget.ItemBridgeAdapter.ViewHolder>;
					public setExtraObject(object: any): void;
					public getItem(): any;
					public getFacet(facetClass: java.lang.Class<any>): any;
					public getPresenter(): androidx.leanback.widget.Presenter;
					public getExtraObject(): any;
					public getViewHolder(): androidx.leanback.widget.Presenter.ViewHolder;
				}
				export abstract class Wrapper extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.widget.ItemBridgeAdapter.Wrapper>;
					public constructor();
					public createWrapper(view0: globalAndroid.view.View): globalAndroid.view.View;
					public wrap(view0: globalAndroid.view.View, view1: globalAndroid.view.View): void;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class ItemBridgeAdapterShadowOverlayWrapper extends androidx.leanback.widget.ItemBridgeAdapter.Wrapper {
				public static class: java.lang.Class<androidx.leanback.widget.ItemBridgeAdapterShadowOverlayWrapper>;
				public wrap(view0: globalAndroid.view.View, view1: globalAndroid.view.View): void;
				public createWrapper(root: globalAndroid.view.View): globalAndroid.view.View;
				public wrap(wrapper: globalAndroid.view.View, wrapped: globalAndroid.view.View): void;
				public constructor(helper: androidx.leanback.widget.ShadowOverlayHelper);
				public createWrapper(view0: globalAndroid.view.View): globalAndroid.view.View;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class ListRow extends androidx.leanback.widget.Row {
				public static class: java.lang.Class<androidx.leanback.widget.ListRow>;
				public setContentDescription(contentDescription: string): void;
				public constructor(headerItem: androidx.leanback.widget.HeaderItem);
				public getContentDescription(): string;
				public getAdapter(): androidx.leanback.widget.ObjectAdapter;
				public constructor(adapter: androidx.leanback.widget.ObjectAdapter);
				public constructor(header: androidx.leanback.widget.HeaderItem, adapter: androidx.leanback.widget.ObjectAdapter);
				public constructor(id: number, header: androidx.leanback.widget.HeaderItem, adapter: androidx.leanback.widget.ObjectAdapter);
				public constructor(id: number, headerItem: androidx.leanback.widget.HeaderItem);
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class ListRowHoverCardView extends globalAndroid.widget.LinearLayout {
				public static class: java.lang.Class<androidx.leanback.widget.ListRowHoverCardView>;
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
				public getDescription(): string;
				public notifySubtreeAccessibilityStateChanged(child: globalAndroid.view.View, source: globalAndroid.view.View, changeType: number): void;
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
				public setDescription(text: string): void;
				public requestChildFocus(child: globalAndroid.view.View, focused: globalAndroid.view.View): void;
				public createContextMenu(menu: globalAndroid.view.ContextMenu): void;
				public canResolveLayoutDirection(): boolean;
				public getTitle(): string;
				public setTitle(text: string): void;
				public addView(child: globalAndroid.view.View, index: number, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public onNestedPreFling(target: globalAndroid.view.View, velocityX: number, velocityY: number): boolean;
				public getParent(): globalAndroid.view.ViewParent;
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class ListRowPresenter extends androidx.leanback.widget.RowPresenter {
				public static class: java.lang.Class<androidx.leanback.widget.ListRowPresenter>;
				public getHoverCardPresenterSelector(): androidx.leanback.widget.PresenterSelector;
				public setExpandedRowHeight(rowHeight: number): void;
				public getFocusZoomFactor(): number;
				public getRecycledPoolSize(presenter: androidx.leanback.widget.Presenter): number;
				public setNumRows(numRows: number): void;
				public isKeepChildForeground(): boolean;
				public isFocusDimmerUsed(): boolean;
				public constructor(focusZoomFactor: number);
				public onBindRowViewHolder(vh: androidx.leanback.widget.RowPresenter.ViewHolder, item: any): void;
				public setRowHeight(rowHeight: number): void;
				public isUsingDefaultListSelectEffect(): boolean;
				public constructor();
				public onUnbindRowViewHolder(vh: androidx.leanback.widget.RowPresenter.ViewHolder): void;
				public onRowViewSelected(vh: androidx.leanback.widget.RowPresenter.ViewHolder, selected: boolean): void;
				public getRowHeight(): number;
				public setHoverCardPresenterSelector(selector: androidx.leanback.widget.PresenterSelector): void;
				public createShadowOverlayOptions(): androidx.leanback.widget.ShadowOverlayHelper.Options;
				public dispatchItemSelectedListener(holder: androidx.leanback.widget.RowPresenter.ViewHolder, selected: boolean): void;
				public onRowViewExpanded(vh: androidx.leanback.widget.RowPresenter.ViewHolder, expanded: boolean): void;
				public getExpandedRowHeight(): number;
				public applySelectLevelToChild(rowViewHolder: androidx.leanback.widget.ListRowPresenter.ViewHolder, childView: globalAndroid.view.View): void;
				public freeze(holder: androidx.leanback.widget.RowPresenter.ViewHolder, freeze: boolean): void;
				public isUsingDefaultShadow(): boolean;
				public isUsingZOrder(context: globalAndroid.content.Context): boolean;
				public createRowViewHolder(parent: globalAndroid.view.ViewGroup): androidx.leanback.widget.RowPresenter.ViewHolder;
				public setRecycledPoolSize(presenter: androidx.leanback.widget.Presenter, size: number): void;
				public setShadowEnabled(enabled: boolean): void;
				public createRowViewHolder(viewGroup0: globalAndroid.view.ViewGroup): androidx.leanback.widget.RowPresenter.ViewHolder;
				public onBindRowViewHolder(holder: androidx.leanback.widget.RowPresenter.ViewHolder, item: any): void;
				public setKeepChildForeground(keep: boolean): void;
				/** @deprecated */
				public getZoomFactor(): number;
				public initializeRowViewHolder(holder: androidx.leanback.widget.RowPresenter.ViewHolder): void;
				public onRowViewSelected(holder: androidx.leanback.widget.RowPresenter.ViewHolder, selected: boolean): void;
				public getShadowEnabled(): boolean;
				public onUnbindRowViewHolder(holder: androidx.leanback.widget.RowPresenter.ViewHolder): void;
				public onSelectLevelChanged(vh: androidx.leanback.widget.RowPresenter.ViewHolder): void;
				public setEntranceTransitionState(holder: androidx.leanback.widget.RowPresenter.ViewHolder, afterEntrance: boolean): void;
				public onRowViewExpanded(holder: androidx.leanback.widget.RowPresenter.ViewHolder, expanded: boolean): void;
				public isUsingDefaultSelectEffect(): boolean;
				public enableChildRoundedCorners(enable: boolean): void;
				public getFacet(facetClass: java.lang.Class<any>): any;
				public constructor(focusZoomFactor: number, useFocusDimmer: boolean);
				public initializeRowViewHolder(vh: androidx.leanback.widget.RowPresenter.ViewHolder): void;
				public dispatchItemSelectedListener(vh: androidx.leanback.widget.RowPresenter.ViewHolder, selected: boolean): void;
				public onSelectLevelChanged(holder: androidx.leanback.widget.RowPresenter.ViewHolder): void;
				public areChildRoundedCornersEnabled(): boolean;
				public isUsingOutlineClipping(context: globalAndroid.content.Context): boolean;
			}
			export module ListRowPresenter {
				export class ListRowPresenterItemBridgeAdapter extends androidx.leanback.widget.ItemBridgeAdapter {
					public static class: java.lang.Class<androidx.leanback.widget.ListRowPresenter.ListRowPresenterItemBridgeAdapter>;
					public onBind(viewHolder: androidx.leanback.widget.ItemBridgeAdapter.ViewHolder): void;
					public onAddPresenter(presenter: androidx.leanback.widget.Presenter, type: number): void;
					public onCreate(viewHolder: androidx.leanback.widget.ItemBridgeAdapter.ViewHolder): void;
					public onAttachedToWindow(viewHolder: androidx.leanback.widget.ItemBridgeAdapter.ViewHolder): void;
					public getFacetProvider(type: number): androidx.leanback.widget.FacetProvider;
					public onUnbind(viewHolder: androidx.leanback.widget.ItemBridgeAdapter.ViewHolder): void;
				}
				export class SelectItemViewHolderTask extends androidx.leanback.widget.Presenter.ViewHolderTask {
					public static class: java.lang.Class<androidx.leanback.widget.ListRowPresenter.SelectItemViewHolderTask>;
					public setItemTask(itemTask: androidx.leanback.widget.Presenter.ViewHolderTask): void;
					public constructor();
					public constructor(itemPosition: number);
					public isSmoothScroll(): boolean;
					public setSmoothScroll(smoothScroll: boolean): void;
					public setItemPosition(itemPosition: number): void;
					public getItemTask(): androidx.leanback.widget.Presenter.ViewHolderTask;
					public getItemPosition(): number;
					public run(holder: androidx.leanback.widget.Presenter.ViewHolder): void;
				}
				export class ViewHolder extends androidx.leanback.widget.RowPresenter.ViewHolder {
					public static class: java.lang.Class<androidx.leanback.widget.ListRowPresenter.ViewHolder>;
					public getSelectedItemViewHolder(): androidx.leanback.widget.Presenter.ViewHolder;
					public getListRowPresenter(): androidx.leanback.widget.ListRowPresenter;
					public constructor(view: globalAndroid.view.View);
					public constructor(rootView: globalAndroid.view.View, gridView: androidx.leanback.widget.HorizontalGridView, p: androidx.leanback.widget.ListRowPresenter);
					public getFacet(facetClass: java.lang.Class<any>): any;
					public getItemViewHolder(position: number): androidx.leanback.widget.Presenter.ViewHolder;
					public getSelectedItem(): any;
					public getGridView(): androidx.leanback.widget.HorizontalGridView;
					public getBridgeAdapter(): androidx.leanback.widget.ItemBridgeAdapter;
					public getSelectedPosition(): number;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class ListRowView extends globalAndroid.widget.LinearLayout {
				public static class: java.lang.Class<androidx.leanback.widget.ListRowView>;
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
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyle: number);
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
				public getGridView(): androidx.leanback.widget.HorizontalGridView;
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public onNestedPreFling(target: globalAndroid.view.View, velocityX: number, velocityY: number): boolean;
				public getParent(): globalAndroid.view.ViewParent;
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class MediaItemActionPresenter extends androidx.leanback.widget.Presenter {
				public static class: java.lang.Class<androidx.leanback.widget.MediaItemActionPresenter>;
				public onCreateViewHolder(parent: globalAndroid.view.ViewGroup): androidx.leanback.widget.Presenter.ViewHolder;
				public onUnbindViewHolder(viewHolder: androidx.leanback.widget.Presenter.ViewHolder): void;
				public onBindViewHolder(viewHolder: androidx.leanback.widget.Presenter.ViewHolder, item: any): void;
				public getFacet(facetClass: java.lang.Class<any>): any;
				public onBindViewHolder(viewHolder0: androidx.leanback.widget.Presenter.ViewHolder, object1: any): void;
				public onCreateViewHolder(viewGroup0: globalAndroid.view.ViewGroup): androidx.leanback.widget.Presenter.ViewHolder;
				public onUnbindViewHolder(viewHolder0: androidx.leanback.widget.Presenter.ViewHolder): void;
				public onBindViewHolder(viewHolder: androidx.leanback.widget.Presenter.ViewHolder, item: any, payloads: java.util.List<any>): void;
			}
			export module MediaItemActionPresenter {
				export class ViewHolder extends androidx.leanback.widget.Presenter.ViewHolder {
					public static class: java.lang.Class<androidx.leanback.widget.MediaItemActionPresenter.ViewHolder>;
					public constructor(view: globalAndroid.view.View);
					public getFacet(facetClass: java.lang.Class<any>): any;
					public getIcon(): globalAndroid.widget.ImageView;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class MediaNowPlayingView extends globalAndroid.widget.LinearLayout {
				public static class: java.lang.Class<androidx.leanback.widget.MediaNowPlayingView>;
				public mLinearInterpolator: globalAndroid.view.animation.LinearInterpolator;
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
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
				public setVisibility(visibility: number): void;
				public keyboardNavigationClusterSearch(currentCluster: globalAndroid.view.View, direction: number): globalAndroid.view.View;
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
				public onAttachedToWindow(): void;
				public getParent(): globalAndroid.view.ViewParent;
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class MediaRowFocusView extends globalAndroid.view.View {
				public static class: java.lang.Class<androidx.leanback.widget.MediaRowFocusView>;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public constructor(context: globalAndroid.content.Context);
				public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public getRoundRectRadius(): number;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
				public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
				public sendAccessibilityEvent(eventType: number): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public onDraw(canvas: globalAndroid.graphics.Canvas): void;
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class MultiActionsProvider extends java.lang.Object {
				public static class: java.lang.Class<androidx.leanback.widget.MultiActionsProvider>;
				/**
				 * Constructs a new instance of the androidx.leanback.widget.MultiActionsProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getActions(): native.Array<androidx.leanback.widget.MultiActionsProvider.MultiAction>;
				});
				public constructor();
				public getActions(): native.Array<androidx.leanback.widget.MultiActionsProvider.MultiAction>;
			}
			export module MultiActionsProvider {
				export class MultiAction extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.widget.MultiActionsProvider.MultiAction>;
					public getIndex(): number;
					public getCurrentDrawable(): globalAndroid.graphics.drawable.Drawable;
					public constructor(id: number);
					public getDrawables(): native.Array<globalAndroid.graphics.drawable.Drawable>;
					public getId(): number;
					public incrementIndex(): void;
					public setDrawables(drawables: native.Array<globalAndroid.graphics.drawable.Drawable>): void;
					public setIndex(index: number): void;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class NonOverlappingFrameLayout extends globalAndroid.widget.FrameLayout {
				public static class: java.lang.Class<androidx.leanback.widget.NonOverlappingFrameLayout>;
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
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyle: number);
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
				public hasOverlappingRendering(): boolean;
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class NonOverlappingLinearLayout extends globalAndroid.widget.LinearLayout {
				public static class: java.lang.Class<androidx.leanback.widget.NonOverlappingLinearLayout>;
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
				public setFocusableViewAvailableFixEnabled(enabled: boolean): void;
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
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyle: number);
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
				public hasOverlappingRendering(): boolean;
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class NonOverlappingLinearLayoutWithForeground extends globalAndroid.widget.LinearLayout {
				public static class: java.lang.Class<androidx.leanback.widget.NonOverlappingLinearLayoutWithForeground>;
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
				public setForegroundCompat(d: globalAndroid.graphics.drawable.Drawable): void;
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
				public isTextAlignmentResolved(): boolean;
				public getLayoutDirection(): number;
				public addView(child: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public jumpDrawablesToCurrentState(): void;
				public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public canResolveTextDirection(): boolean;
				public canResolveTextAlignment(): boolean;
				public notifySubtreeAccessibilityStateChanged(child: globalAndroid.view.View, source: globalAndroid.view.View, changeType: number): void;
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
				public showContextMenuForChild(originalView: globalAndroid.view.View, x: number, y: number): boolean;
				public bringChildToFront(child: globalAndroid.view.View): void;
				public onNestedPreScroll(target: globalAndroid.view.View, dx: number, dy: number, consumed: native.Array<number>): void;
				public clearChildFocus(child: globalAndroid.view.View): void;
				public draw(canvas: globalAndroid.graphics.Canvas): void;
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
				public getForegroundCompat(): globalAndroid.graphics.drawable.Drawable;
				public onNestedPreFling(target: globalAndroid.view.View, velocityX: number, velocityY: number): boolean;
				public getParent(): globalAndroid.view.ViewParent;
				public hasOverlappingRendering(): boolean;
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class NonOverlappingRelativeLayout extends globalAndroid.widget.RelativeLayout {
				public static class: java.lang.Class<androidx.leanback.widget.NonOverlappingRelativeLayout>;
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
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyle: number);
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
				public hasOverlappingRendering(): boolean;
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class NonOverlappingView extends globalAndroid.view.View {
				public static class: java.lang.Class<androidx.leanback.widget.NonOverlappingView>;
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
				public sendAccessibilityEvent(eventType: number): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyle: number);
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public hasOverlappingRendering(): boolean;
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export abstract class ObjectAdapter extends java.lang.Object {
				public static class: java.lang.Class<androidx.leanback.widget.ObjectAdapter>;
				public static NO_ID: number;
				public notifyItemMoved(fromPosition: number, toPosition: number): void;
				public hasObserver(): boolean;
				public notifyItemRangeInserted(positionStart: number, itemCount: number): void;
				public unregisterAllObservers(): void;
				public onHasStableIdsChanged(): void;
				public notifyItemRangeChanged(positionStart: number, itemCount: number): void;
				public setHasStableIds(hasStableIds: boolean): void;
				public notifyChanged(): void;
				public constructor(presenterSelector: androidx.leanback.widget.PresenterSelector);
				public unregisterObserver(observer: androidx.leanback.widget.ObjectAdapter.DataObserver): void;
				public notifyItemRangeRemoved(positionStart: number, itemCount: number): void;
				public getPresenterSelector(): androidx.leanback.widget.PresenterSelector;
				public getPresenter(item: any): androidx.leanback.widget.Presenter;
				public constructor();
				public size(): number;
				public get(int0: number): any;
				public setPresenterSelector(presenterSelector: androidx.leanback.widget.PresenterSelector): void;
				public onPresenterSelectorChanged(): void;
				public getId(position: number): number;
				public hasStableIds(): boolean;
				public registerObserver(observer: androidx.leanback.widget.ObjectAdapter.DataObserver): void;
				public isImmediateNotifySupported(): boolean;
				public notifyItemRangeChanged(positionStart: number, itemCount: number, payload: any): void;
				public constructor(presenter: androidx.leanback.widget.Presenter);
			}
			export module ObjectAdapter {
				export class DataObservable extends globalAndroid.database.Observable<androidx.leanback.widget.ObjectAdapter.DataObserver> {
					public static class: java.lang.Class<androidx.leanback.widget.ObjectAdapter.DataObservable>;
					public notifyItemRangeInserted(positionStart: number, itemCount: number): void;
					public notifyChanged(): void;
					public notifyItemRangeChanged(positionStart: number, itemCount: number): void;
					public notifyItemRangeChanged(positionStart: number, itemCount: number, payload: any): void;
					public notifyItemMoved(positionStart: number, toPosition: number): void;
					public notifyItemRangeRemoved(positionStart: number, itemCount: number): void;
				}
				export abstract class DataObserver extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.widget.ObjectAdapter.DataObserver>;
					public onChanged(): void;
					public onItemMoved(fromPosition: number, toPosition: number): void;
					public onItemRangeChanged(positionStart: number, itemCount: number, payload: any): void;
					public onItemRangeRemoved(positionStart: number, itemCount: number): void;
					public constructor();
					public onItemRangeInserted(positionStart: number, itemCount: number): void;
					public onItemRangeChanged(positionStart: number, itemCount: number): void;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class OnActionClickedListener extends java.lang.Object {
				public static class: java.lang.Class<androidx.leanback.widget.OnActionClickedListener>;
				/**
				 * Constructs a new instance of the androidx.leanback.widget.OnActionClickedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onActionClicked(action0: androidx.leanback.widget.Action): void;
				});
				public constructor();
				public onActionClicked(action0: androidx.leanback.widget.Action): void;
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class OnChildLaidOutListener extends java.lang.Object {
				public static class: java.lang.Class<androidx.leanback.widget.OnChildLaidOutListener>;
				/**
				 * Constructs a new instance of the androidx.leanback.widget.OnChildLaidOutListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onChildLaidOut(viewGroup0: globalAndroid.view.ViewGroup, view1: globalAndroid.view.View, int2: number, long3: number): void;
				});
				public constructor();
				public onChildLaidOut(viewGroup0: globalAndroid.view.ViewGroup, view1: globalAndroid.view.View, int2: number, long3: number): void;
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class OnChildSelectedListener extends java.lang.Object {
				public static class: java.lang.Class<androidx.leanback.widget.OnChildSelectedListener>;
				/**
				 * Constructs a new instance of the androidx.leanback.widget.OnChildSelectedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onChildSelected(viewGroup0: globalAndroid.view.ViewGroup, view1: globalAndroid.view.View, int2: number, long3: number): void;
				});
				public constructor();
				public onChildSelected(viewGroup0: globalAndroid.view.ViewGroup, view1: globalAndroid.view.View, int2: number, long3: number): void;
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export abstract class OnChildViewHolderSelectedListener extends java.lang.Object {
				public static class: java.lang.Class<androidx.leanback.widget.OnChildViewHolderSelectedListener>;
				public onChildViewHolderSelected(parent: androidx.recyclerview.widget.RecyclerView, child: androidx.recyclerview.widget.RecyclerView.ViewHolder, position: number, subposition: number): void;
				public onChildViewHolderSelectedAndPositioned(parent: androidx.recyclerview.widget.RecyclerView, child: androidx.recyclerview.widget.RecyclerView.ViewHolder, position: number, subposition: number): void;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class OnItemViewClickedListener extends androidx.leanback.widget.BaseOnItemViewClickedListener<androidx.leanback.widget.Row> {
				public static class: java.lang.Class<androidx.leanback.widget.OnItemViewClickedListener>;
				/**
				 * Constructs a new instance of the androidx.leanback.widget.OnItemViewClickedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onItemClicked(viewHolder0: androidx.leanback.widget.Presenter.ViewHolder, object1: any, viewHolder2: androidx.leanback.widget.RowPresenter.ViewHolder, object3: any): void;
				});
				public constructor();
				public onItemClicked(viewHolder0: androidx.leanback.widget.Presenter.ViewHolder, object1: any, viewHolder2: androidx.leanback.widget.RowPresenter.ViewHolder, object3: any): void;
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class OnItemViewSelectedListener extends androidx.leanback.widget.BaseOnItemViewSelectedListener<androidx.leanback.widget.Row> {
				public static class: java.lang.Class<androidx.leanback.widget.OnItemViewSelectedListener>;
				/**
				 * Constructs a new instance of the androidx.leanback.widget.OnItemViewSelectedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onItemSelected(viewHolder0: androidx.leanback.widget.Presenter.ViewHolder, object1: any, viewHolder2: androidx.leanback.widget.RowPresenter.ViewHolder, object3: any): void;
				});
				public constructor();
				public onItemSelected(viewHolder0: androidx.leanback.widget.Presenter.ViewHolder, object1: any, viewHolder2: androidx.leanback.widget.RowPresenter.ViewHolder, object3: any): void;
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class PageRow extends androidx.leanback.widget.Row {
				public static class: java.lang.Class<androidx.leanback.widget.PageRow>;
				public constructor(headerItem: androidx.leanback.widget.HeaderItem);
				public isRenderedAsRowView(): boolean;
				public constructor(id: number, headerItem: androidx.leanback.widget.HeaderItem);
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class PagingIndicator extends globalAndroid.view.View {
				public static class: java.lang.Class<androidx.leanback.widget.PagingIndicator>;
				public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
				public onRtlPropertiesChanged(layoutDirection: number): void;
				public constructor(context: globalAndroid.content.Context);
				public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
				public setArrowBackgroundColor(color: number): void;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
				public sendAccessibilityEvent(eventType: number): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyle: number);
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
				public onPageSelected(pageIndex: number, withAnimation: boolean): void;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public setPageCount(pages: number): void;
				public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public setArrowColor(color: number): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
				public onSizeChanged(width: number, height: number, oldWidth: number, oldHeight: number): void;
				public setDotBackgroundColor(color: number): void;
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public onSizeChanged(w: number, h: number, oldw: number, oldh: number): void;
				public onDraw(canvas: globalAndroid.graphics.Canvas): void;
			}
			export module PagingIndicator {
				export class Dot extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.widget.PagingIndicator.Dot>;
					public getAlpha(): number;
					public setDiameter(diameter: number): void;
					public setTranslationX(translationX: number): void;
					public adjustAlpha(): void;
					public getTranslationX(): number;
					public setAlpha(alpha: number): void;
					public constructor(this0: androidx.leanback.widget.PagingIndicator);
					public getDiameter(): number;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export abstract class Parallax<PropertyT>  extends java.lang.Object {
				public static class: java.lang.Class<androidx.leanback.widget.Parallax<any>>;
				public getEffects(): java.util.List<androidx.leanback.widget.ParallaxEffect>;
				public createProperty(string0: string, int1: number): PropertyT;
				public removeAllEffects(): void;
				public getProperties(): java.util.List<PropertyT>;
				public updateValues(): void;
				public addEffect(ranges: native.Array<androidx.leanback.widget.Parallax.PropertyMarkerValue<any>>): androidx.leanback.widget.ParallaxEffect;
				public addProperty(name: string): PropertyT;
				public removeEffect(effect: androidx.leanback.widget.ParallaxEffect): void;
				public getMaxValue(): number;
				public constructor();
			}
			export module Parallax {
				export class FloatProperty extends globalAndroid.util.Property<androidx.leanback.widget.Parallax<any>,java.lang.Float> {
					public static class: java.lang.Class<androidx.leanback.widget.Parallax.FloatProperty>;
					public static UNKNOWN_BEFORE: number;
					public static UNKNOWN_AFTER: number;
					public getIndex(): number;
					public constructor(type: java.lang.Class<any>, name: string);
					public at(offsetValue: number, fractionOfMaxParentVisibleSize: number): androidx.leanback.widget.Parallax.PropertyMarkerValue<any>;
					public getValue(object: androidx.leanback.widget.Parallax<any>): number;
					public atMax(): androidx.leanback.widget.Parallax.PropertyMarkerValue<any>;
					public get(object: androidx.leanback.widget.Parallax<any>): java.lang.Float;
					public setValue(object: androidx.leanback.widget.Parallax<any>, value: number): void;
					public atAbsolute(markerValue: number): androidx.leanback.widget.Parallax.PropertyMarkerValue<any>;
					public set(object: any, value: any): void;
					public constructor(name: string, index: number);
					public get(object0: any): any;
					public atFraction(fractionOfMaxParentVisibleSize: number): androidx.leanback.widget.Parallax.PropertyMarkerValue<any>;
					public atMin(): androidx.leanback.widget.Parallax.PropertyMarkerValue<any>;
					public set(object: androidx.leanback.widget.Parallax<any>, value: java.lang.Float): void;
				}
				export class FloatPropertyMarkerValue extends androidx.leanback.widget.Parallax.PropertyMarkerValue<androidx.leanback.widget.Parallax.FloatProperty> {
					public static class: java.lang.Class<androidx.leanback.widget.Parallax.FloatPropertyMarkerValue>;
				}
				export class IntProperty extends globalAndroid.util.Property<androidx.leanback.widget.Parallax<any>,java.lang.Integer> {
					public static class: java.lang.Class<androidx.leanback.widget.Parallax.IntProperty>;
					public static UNKNOWN_BEFORE: number;
					public static UNKNOWN_AFTER: number;
					public getIndex(): number;
					public constructor(type: java.lang.Class<any>, name: string);
					public at(offsetValue: number, fractionOfMaxParentVisibleSize: number): androidx.leanback.widget.Parallax.PropertyMarkerValue<any>;
					public getValue(object: androidx.leanback.widget.Parallax<any>): number;
					public atMax(): androidx.leanback.widget.Parallax.PropertyMarkerValue<any>;
					public get(object: androidx.leanback.widget.Parallax<any>): java.lang.Integer;
					public setValue(object: androidx.leanback.widget.Parallax<any>, value: number): void;
					public set(object: any, value: any): void;
					public constructor(name: string, index: number);
					public get(object0: any): any;
					public atFraction(fractionOfMaxValue: number): androidx.leanback.widget.Parallax.PropertyMarkerValue<any>;
					public set(object: androidx.leanback.widget.Parallax<any>, value: java.lang.Integer): void;
					public atMin(): androidx.leanback.widget.Parallax.PropertyMarkerValue<any>;
					public atAbsolute(absoluteValue: number): androidx.leanback.widget.Parallax.PropertyMarkerValue<any>;
				}
				export class IntPropertyMarkerValue extends androidx.leanback.widget.Parallax.PropertyMarkerValue<androidx.leanback.widget.Parallax.IntProperty> {
					public static class: java.lang.Class<androidx.leanback.widget.Parallax.IntPropertyMarkerValue>;
				}
				export class PropertyMarkerValue<PropertyT>  extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.widget.Parallax.PropertyMarkerValue<any>>;
					public constructor(property: PropertyT);
					public getProperty(): PropertyT;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export abstract class ParallaxEffect extends java.lang.Object {
				public static class: java.lang.Class<androidx.leanback.widget.ParallaxEffect>;
				public setWeights(weights: native.Array<number>): void;
				public addTarget(target: androidx.leanback.widget.ParallaxTarget): void;
				public getPropertyRanges(): java.util.List<androidx.leanback.widget.Parallax.PropertyMarkerValue<any>>;
				public getWeights(): java.util.List<java.lang.Float>;
				public weights(weights: native.Array<number>): androidx.leanback.widget.ParallaxEffect;
				public performMapping(source: androidx.leanback.widget.Parallax<any>): void;
				public getTargets(): java.util.List<androidx.leanback.widget.ParallaxTarget>;
				public setPropertyRanges(markerValues: native.Array<androidx.leanback.widget.Parallax.PropertyMarkerValue<any>>): void;
				public target(target: androidx.leanback.widget.ParallaxTarget): androidx.leanback.widget.ParallaxEffect;
				public target(targetObject: any, targetProperty: globalAndroid.util.Property<any,any>): androidx.leanback.widget.ParallaxEffect;
				public target(targetObject: any, values: globalAndroid.animation.PropertyValuesHolder): androidx.leanback.widget.ParallaxEffect;
				public removeTarget(target: androidx.leanback.widget.ParallaxTarget): void;
			}
			export module ParallaxEffect {
				export class FloatEffect extends androidx.leanback.widget.ParallaxEffect {
					public static class: java.lang.Class<androidx.leanback.widget.ParallaxEffect.FloatEffect>;
				}
				export class IntEffect extends androidx.leanback.widget.ParallaxEffect {
					public static class: java.lang.Class<androidx.leanback.widget.ParallaxEffect.IntEffect>;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export abstract class ParallaxTarget extends java.lang.Object {
				public static class: java.lang.Class<androidx.leanback.widget.ParallaxTarget>;
				public isDirectMapping(): boolean;
				public update(fraction: number): void;
				public directUpdate(value: java.lang.Number): void;
				public constructor();
			}
			export module ParallaxTarget {
				export class DirectPropertyTarget<T, V>  extends androidx.leanback.widget.ParallaxTarget {
					public static class: java.lang.Class<androidx.leanback.widget.ParallaxTarget.DirectPropertyTarget<any,any>>;
					public constructor();
					public isDirectMapping(): boolean;
					public constructor(targetObject: any, property: globalAndroid.util.Property<any,any>);
					public directUpdate(value: java.lang.Number): void;
				}
				export class PropertyValuesHolderTarget extends androidx.leanback.widget.ParallaxTarget {
					public static class: java.lang.Class<androidx.leanback.widget.ParallaxTarget.PropertyValuesHolderTarget>;
					public update(fraction: number): void;
					public constructor();
					public constructor(targetObject: any, values: globalAndroid.animation.PropertyValuesHolder);
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class PersistentFocusWrapper extends globalAndroid.widget.FrameLayout {
				public static class: java.lang.Class<androidx.leanback.widget.PersistentFocusWrapper>;
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
				public clearSelection(): void;
				public requestFitSystemWindows(): void;
				public getTextDirection(): number;
				public onRestoreInstanceState(state: globalAndroid.os.Parcelable): void;
				public addFocusables(views: java.util.ArrayList<globalAndroid.view.View>, direction: number): void;
				public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback, type: number): globalAndroid.view.ActionMode;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
				public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public requestFocus(direction: number, previouslyFocusedRect: globalAndroid.graphics.Rect): boolean;
				public getTextAlignment(): number;
				/** @deprecated */
				public invalidateChildInParent(location: native.Array<number>, dirty: globalAndroid.graphics.Rect): globalAndroid.view.ViewParent;
				public getParentForAccessibility(): globalAndroid.view.ViewParent;
				public onNestedFling(target: globalAndroid.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
				public keyboardNavigationClusterSearch(currentCluster: globalAndroid.view.View, direction: number): globalAndroid.view.View;
				public requestFocus(direction: number): boolean;
				public addView(child: globalAndroid.view.View, width: number, height: number): void;
				public isTextDirectionResolved(): boolean;
				public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
				public childHasTransientStateChanged(child: globalAndroid.view.View, childHasTransientState: boolean): void;
				public focusableViewAvailable(v: globalAndroid.view.View): void;
				public showContextMenuForChild(originalView: globalAndroid.view.View): boolean;
				public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public recomputeViewAttributes(child: globalAndroid.view.View): void;
				public addView(child: globalAndroid.view.View): void;
				public persistFocusHorizontal(): void;
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
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyle: number);
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
				public addFocusables(views: java.util.ArrayList<globalAndroid.view.View>, direction: number, focusableMode: number): void;
				public clearChildFocus(child: globalAndroid.view.View): void;
				public persistFocusVertical(): void;
				public requestFocus(): boolean;
				public onDescendantInvalidated(child: globalAndroid.view.View, target: globalAndroid.view.View): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public removeView(view: globalAndroid.view.View): void;
				public onSaveInstanceState(): globalAndroid.os.Parcelable;
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
			export module PersistentFocusWrapper {
				export class SavedState extends globalAndroid.view.View.BaseSavedState {
					public static class: java.lang.Class<androidx.leanback.widget.PersistentFocusWrapper.SavedState>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<androidx.leanback.widget.PersistentFocusWrapper.SavedState>;
					public writeToParcel(dest: globalAndroid.os.Parcel, flags: number): void;
					public describeContents(): number;
					public writeToParcel(out: globalAndroid.os.Parcel, flags: number): void;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class PlaybackControlsPresenter extends androidx.leanback.widget.ControlBarPresenter {
				public static class: java.lang.Class<androidx.leanback.widget.PlaybackControlsPresenter>;
				public showPrimaryActions(vh: androidx.leanback.widget.PlaybackControlsPresenter.ViewHolder): void;
				public getTotalTime(vh: androidx.leanback.widget.PlaybackControlsPresenter.ViewHolder): number;
				public setCurrentTimeLong(vh: androidx.leanback.widget.PlaybackControlsPresenter.ViewHolder, ms: number): void;
				public areMoreActionsEnabled(): boolean;
				public resetFocus(vh: androidx.leanback.widget.PlaybackControlsPresenter.ViewHolder): void;
				public setSecondaryProgress(vh: androidx.leanback.widget.PlaybackControlsPresenter.ViewHolder, progressMs: number): void;
				public getSecondaryProgress(vh: androidx.leanback.widget.PlaybackControlsPresenter.ViewHolder): number;
				public constructor();
				public onCreateViewHolder(parent: globalAndroid.view.ViewGroup): androidx.leanback.widget.Presenter.ViewHolder;
				public enableTimeMargins(vh: androidx.leanback.widget.PlaybackControlsPresenter.ViewHolder, enable: boolean): void;
				public constructor(layoutResourceId: number);
				public getCurrentTimeLong(vh: androidx.leanback.widget.PlaybackControlsPresenter.ViewHolder): number;
				public getTotalTimeLong(vh: androidx.leanback.widget.PlaybackControlsPresenter.ViewHolder): number;
				public getCurrentTime(vh: androidx.leanback.widget.PlaybackControlsPresenter.ViewHolder): number;
				public setProgressColor(vh: androidx.leanback.widget.PlaybackControlsPresenter.ViewHolder, color: number): void;
				public enableSecondaryActions(enable: boolean): void;
				public setTotalTime(vh: androidx.leanback.widget.PlaybackControlsPresenter.ViewHolder, ms: number): void;
				public getSecondaryProgressLong(vh: androidx.leanback.widget.PlaybackControlsPresenter.ViewHolder): number;
				public onBindViewHolder(holder: androidx.leanback.widget.Presenter.ViewHolder, item: any): void;
				public setTotalTimeLong(vh: androidx.leanback.widget.PlaybackControlsPresenter.ViewHolder, ms: number): void;
				public setCurrentTime(vh: androidx.leanback.widget.PlaybackControlsPresenter.ViewHolder, ms: number): void;
				public getFacet(facetClass: java.lang.Class<any>): any;
				public setSecondaryProgressLong(vh: androidx.leanback.widget.PlaybackControlsPresenter.ViewHolder, progressMs: number): void;
				public onBindViewHolder(viewHolder: androidx.leanback.widget.Presenter.ViewHolder, item: any, payloads: java.util.List<any>): void;
				public onUnbindViewHolder(holder: androidx.leanback.widget.Presenter.ViewHolder): void;
			}
			export module PlaybackControlsPresenter {
				export class BoundData extends androidx.leanback.widget.ControlBarPresenter.BoundData {
					public static class: java.lang.Class<androidx.leanback.widget.PlaybackControlsPresenter.BoundData>;
				}
				export class ViewHolder extends androidx.leanback.widget.ControlBarPresenter.ViewHolder {
					public static class: java.lang.Class<androidx.leanback.widget.PlaybackControlsPresenter.ViewHolder>;
					public getFacet(facetClass: java.lang.Class<any>): any;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class PlaybackControlsRow extends androidx.leanback.widget.Row {
				public static class: java.lang.Class<androidx.leanback.widget.PlaybackControlsRow>;
				public constructor(item: any);
				public setBufferedPosition(ms: number): void;
				public constructor(headerItem: androidx.leanback.widget.HeaderItem);
				public setSecondaryActionsAdapter(adapter: androidx.leanback.widget.ObjectAdapter): void;
				/** @deprecated */
				public getTotalTime(): number;
				public getDuration(): number;
				public getActionForKeyCode(keyCode: number): androidx.leanback.widget.Action;
				/** @deprecated */
				public getBufferedProgressLong(): number;
				/** @deprecated */
				public setCurrentTime(ms: number): void;
				public constructor();
				/** @deprecated */
				public getCurrentTimeLong(): number;
				public getSecondaryActionsAdapter(): androidx.leanback.widget.ObjectAdapter;
				public getBufferedPosition(): number;
				public getActionForKeyCode(adapter: androidx.leanback.widget.ObjectAdapter, keyCode: number): androidx.leanback.widget.Action;
				/** @deprecated */
				public setCurrentTimeLong(ms: number): void;
				/** @deprecated */
				public getBufferedProgress(): number;
				/** @deprecated */
				public getCurrentTime(): number;
				public setImageBitmap(context: globalAndroid.content.Context, bm: globalAndroid.graphics.Bitmap): void;
				public setCurrentPosition(ms: number): void;
				/** @deprecated */
				public setTotalTime(ms: number): void;
				public getItem(): any;
				public setPrimaryActionsAdapter(adapter: androidx.leanback.widget.ObjectAdapter): void;
				/** @deprecated */
				public getTotalTimeLong(): number;
				public setDuration(ms: number): void;
				public getPrimaryActionsAdapter(): androidx.leanback.widget.ObjectAdapter;
				/** @deprecated */
				public setTotalTimeLong(ms: number): void;
				public getCurrentPosition(): number;
				public getImageDrawable(): globalAndroid.graphics.drawable.Drawable;
				/** @deprecated */
				public setBufferedProgress(ms: number): void;
				public setOnPlaybackProgressChangedListener(listener: androidx.leanback.widget.PlaybackControlsRow.OnPlaybackProgressCallback): void;
				/** @deprecated */
				public setBufferedProgressLong(ms: number): void;
				public setImageDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public constructor(id: number, headerItem: androidx.leanback.widget.HeaderItem);
			}
			export module PlaybackControlsRow {
				export class ClosedCaptioningAction extends androidx.leanback.widget.PlaybackControlsRow.MultiAction {
					public static class: java.lang.Class<androidx.leanback.widget.PlaybackControlsRow.ClosedCaptioningAction>;
					public static OFF: number;
					public static ON: number;
					public static INDEX_OFF: number;
					public static INDEX_ON: number;
					public constructor(id: number, label: string);
					public constructor(id: number, label1: string, label2: string, icon: globalAndroid.graphics.drawable.Drawable);
					public constructor(id: number, label1: string, label2: string);
					public constructor(id: number);
					public constructor(context: globalAndroid.content.Context);
					public constructor(context: globalAndroid.content.Context, highlightColor: number);
				}
				export class FastForwardAction extends androidx.leanback.widget.PlaybackControlsRow.MultiAction {
					public static class: java.lang.Class<androidx.leanback.widget.PlaybackControlsRow.FastForwardAction>;
					public constructor(id: number, label: string);
					public constructor(id: number, label1: string, label2: string, icon: globalAndroid.graphics.drawable.Drawable);
					public constructor(id: number, label1: string, label2: string);
					public constructor(context: globalAndroid.content.Context, numSpeeds: number);
					public constructor(id: number);
					public constructor(context: globalAndroid.content.Context);
				}
				export class HighQualityAction extends androidx.leanback.widget.PlaybackControlsRow.MultiAction {
					public static class: java.lang.Class<androidx.leanback.widget.PlaybackControlsRow.HighQualityAction>;
					public static OFF: number;
					public static ON: number;
					public static INDEX_OFF: number;
					public static INDEX_ON: number;
					public constructor(id: number, label: string);
					public constructor(id: number, label1: string, label2: string, icon: globalAndroid.graphics.drawable.Drawable);
					public constructor(id: number, label1: string, label2: string);
					public constructor(id: number);
					public constructor(context: globalAndroid.content.Context);
					public constructor(context: globalAndroid.content.Context, highlightColor: number);
				}
				export class MoreActions extends androidx.leanback.widget.Action {
					public static class: java.lang.Class<androidx.leanback.widget.PlaybackControlsRow.MoreActions>;
					public constructor(id: number, label: string);
					public constructor(id: number, label1: string, label2: string, icon: globalAndroid.graphics.drawable.Drawable);
					public constructor(id: number, label1: string, label2: string);
					public constructor(id: number);
					public constructor(context: globalAndroid.content.Context);
				}
				export abstract class MultiAction extends androidx.leanback.widget.Action {
					public static class: java.lang.Class<androidx.leanback.widget.PlaybackControlsRow.MultiAction>;
					public constructor(id: number, label: string);
					public getDrawable(index: number): globalAndroid.graphics.drawable.Drawable;
					public getIndex(): number;
					public constructor(id: number, label1: string, label2: string, icon: globalAndroid.graphics.drawable.Drawable);
					public constructor(id: number);
					public setDrawables(drawables: native.Array<globalAndroid.graphics.drawable.Drawable>): void;
					public nextIndex(): void;
					public setLabels(labels: native.Array<string>): void;
					public getActionCount(): number;
					public setIndex(index: number): void;
					public getLabel(index: number): string;
					public getSecondaryLabel(index: number): string;
					public constructor(id: number, label1: string, label2: string);
					public setSecondaryLabels(labels: native.Array<string>): void;
				}
				export class OnPlaybackProgressCallback extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.widget.PlaybackControlsRow.OnPlaybackProgressCallback>;
					public onDurationChanged(row: androidx.leanback.widget.PlaybackControlsRow, totalTime: number): void;
					public constructor();
					public onCurrentPositionChanged(row: androidx.leanback.widget.PlaybackControlsRow, currentTimeMs: number): void;
					public onBufferedPositionChanged(row: androidx.leanback.widget.PlaybackControlsRow, bufferedProgressMs: number): void;
				}
				export class PictureInPictureAction extends androidx.leanback.widget.Action {
					public static class: java.lang.Class<androidx.leanback.widget.PlaybackControlsRow.PictureInPictureAction>;
					public constructor(id: number, label: string);
					public constructor(id: number, label1: string, label2: string, icon: globalAndroid.graphics.drawable.Drawable);
					public constructor(id: number, label1: string, label2: string);
					public constructor(id: number);
					public constructor(context: globalAndroid.content.Context);
				}
				export class PlayPauseAction extends androidx.leanback.widget.PlaybackControlsRow.MultiAction {
					public static class: java.lang.Class<androidx.leanback.widget.PlaybackControlsRow.PlayPauseAction>;
					public static PLAY: number;
					public static PAUSE: number;
					public static INDEX_PLAY: number;
					public static INDEX_PAUSE: number;
					public constructor(id: number, label: string);
					public constructor(id: number, label1: string, label2: string, icon: globalAndroid.graphics.drawable.Drawable);
					public constructor(id: number, label1: string, label2: string);
					public constructor(id: number);
					public constructor(context: globalAndroid.content.Context);
				}
				export class RepeatAction extends androidx.leanback.widget.PlaybackControlsRow.MultiAction {
					public static class: java.lang.Class<androidx.leanback.widget.PlaybackControlsRow.RepeatAction>;
					public static NONE: number;
					public static ALL: number;
					public static ONE: number;
					public static INDEX_NONE: number;
					public static INDEX_ALL: number;
					public static INDEX_ONE: number;
					public constructor(id: number, label: string);
					public constructor(id: number, label1: string, label2: string, icon: globalAndroid.graphics.drawable.Drawable);
					public constructor(id: number, label1: string, label2: string);
					public constructor(context: globalAndroid.content.Context, repeatAllColor: number, repeatOneColor: number);
					public constructor(id: number);
					public constructor(context: globalAndroid.content.Context);
					public constructor(context: globalAndroid.content.Context, highlightColor: number);
				}
				export class RewindAction extends androidx.leanback.widget.PlaybackControlsRow.MultiAction {
					public static class: java.lang.Class<androidx.leanback.widget.PlaybackControlsRow.RewindAction>;
					public constructor(id: number, label: string);
					public constructor(id: number, label1: string, label2: string, icon: globalAndroid.graphics.drawable.Drawable);
					public constructor(id: number, label1: string, label2: string);
					public constructor(context: globalAndroid.content.Context, numSpeeds: number);
					public constructor(id: number);
					public constructor(context: globalAndroid.content.Context);
				}
				export class ShuffleAction extends androidx.leanback.widget.PlaybackControlsRow.MultiAction {
					public static class: java.lang.Class<androidx.leanback.widget.PlaybackControlsRow.ShuffleAction>;
					public static OFF: number;
					public static ON: number;
					public static INDEX_OFF: number;
					public static INDEX_ON: number;
					public constructor(id: number, label: string);
					public constructor(id: number, label1: string, label2: string, icon: globalAndroid.graphics.drawable.Drawable);
					public constructor(id: number, label1: string, label2: string);
					public constructor(id: number);
					public constructor(context: globalAndroid.content.Context);
					public constructor(context: globalAndroid.content.Context, highlightColor: number);
				}
				export class SkipNextAction extends androidx.leanback.widget.Action {
					public static class: java.lang.Class<androidx.leanback.widget.PlaybackControlsRow.SkipNextAction>;
					public constructor(id: number, label: string);
					public constructor(id: number, label1: string, label2: string, icon: globalAndroid.graphics.drawable.Drawable);
					public constructor(id: number, label1: string, label2: string);
					public constructor(id: number);
					public constructor(context: globalAndroid.content.Context);
				}
				export class SkipPreviousAction extends androidx.leanback.widget.Action {
					public static class: java.lang.Class<androidx.leanback.widget.PlaybackControlsRow.SkipPreviousAction>;
					public constructor(id: number, label: string);
					public constructor(id: number, label1: string, label2: string, icon: globalAndroid.graphics.drawable.Drawable);
					public constructor(id: number, label1: string, label2: string);
					public constructor(id: number);
					public constructor(context: globalAndroid.content.Context);
				}
				export abstract class ThumbsAction extends androidx.leanback.widget.PlaybackControlsRow.MultiAction {
					public static class: java.lang.Class<androidx.leanback.widget.PlaybackControlsRow.ThumbsAction>;
					public static SOLID: number;
					public static OUTLINE: number;
					public static INDEX_SOLID: number;
					public static INDEX_OUTLINE: number;
					public constructor(id: number, label: string);
					public constructor(id: number, label1: string, label2: string, icon: globalAndroid.graphics.drawable.Drawable);
					public constructor(id: number, label1: string, label2: string);
					public constructor(id: number);
					public constructor(id: number, context: globalAndroid.content.Context, solidIconIndex: number, outlineIconIndex: number);
				}
				export class ThumbsDownAction extends androidx.leanback.widget.PlaybackControlsRow.ThumbsAction {
					public static class: java.lang.Class<androidx.leanback.widget.PlaybackControlsRow.ThumbsDownAction>;
					public constructor(id: number, label: string);
					public constructor(id: number, label1: string, label2: string, icon: globalAndroid.graphics.drawable.Drawable);
					public constructor(id: number, label1: string, label2: string);
					public constructor(id: number, context: globalAndroid.content.Context, solidIconIndex: number, outlineIconIndex: number);
					public constructor(id: number);
					public constructor(context: globalAndroid.content.Context);
				}
				export class ThumbsUpAction extends androidx.leanback.widget.PlaybackControlsRow.ThumbsAction {
					public static class: java.lang.Class<androidx.leanback.widget.PlaybackControlsRow.ThumbsUpAction>;
					public constructor(id: number, label: string);
					public constructor(id: number, label1: string, label2: string, icon: globalAndroid.graphics.drawable.Drawable);
					public constructor(id: number, label1: string, label2: string);
					public constructor(id: number, context: globalAndroid.content.Context, solidIconIndex: number, outlineIconIndex: number);
					public constructor(id: number);
					public constructor(context: globalAndroid.content.Context);
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class PlaybackControlsRowPresenter extends androidx.leanback.widget.PlaybackRowPresenter {
				public static class: java.lang.Class<androidx.leanback.widget.PlaybackControlsRowPresenter>;
				public getOnActionClickedListener(): androidx.leanback.widget.OnActionClickedListener;
				public createRowViewHolder(parent: globalAndroid.view.ViewGroup): androidx.leanback.widget.RowPresenter.ViewHolder;
				public createRowViewHolder(viewGroup0: globalAndroid.view.ViewGroup): androidx.leanback.widget.RowPresenter.ViewHolder;
				public onBindRowViewHolder(holder: androidx.leanback.widget.RowPresenter.ViewHolder, item: any): void;
				public onRowViewDetachedFromWindow(vh: androidx.leanback.widget.RowPresenter.ViewHolder): void;
				public setSecondaryActionsHidden(hidden: boolean): void;
				public onUnbindRowViewHolder(holder: androidx.leanback.widget.RowPresenter.ViewHolder): void;
				public setBackgroundColor(color: number): void;
				public showPrimaryActions(vh: androidx.leanback.widget.PlaybackControlsRowPresenter.ViewHolder): void;
				public onBindRowViewHolder(vh: androidx.leanback.widget.RowPresenter.ViewHolder, item: any): void;
				public getProgressColor(): number;
				public constructor();
				public setProgressColor(color: number): void;
				public areSecondaryActionsHidden(): boolean;
				public onUnbindRowViewHolder(vh: androidx.leanback.widget.RowPresenter.ViewHolder): void;
				public getBackgroundColor(): number;
				public onRowViewSelected(vh: androidx.leanback.widget.RowPresenter.ViewHolder, selected: boolean): void;
				public setOnActionClickedListener(listener: androidx.leanback.widget.OnActionClickedListener): void;
				public getFacet(facetClass: java.lang.Class<any>): any;
				public onRowViewAttachedToWindow(vh: androidx.leanback.widget.RowPresenter.ViewHolder): void;
				public constructor(descriptionPresenter: androidx.leanback.widget.Presenter);
				public onReappear(rowViewHolder: androidx.leanback.widget.RowPresenter.ViewHolder): void;
				public showBottomSpace(vh: androidx.leanback.widget.PlaybackControlsRowPresenter.ViewHolder, show: boolean): void;
			}
			export module PlaybackControlsRowPresenter {
				export class BoundData extends androidx.leanback.widget.PlaybackControlsPresenter.BoundData {
					public static class: java.lang.Class<androidx.leanback.widget.PlaybackControlsRowPresenter.BoundData>;
				}
				export class ViewHolder extends androidx.leanback.widget.PlaybackRowPresenter.ViewHolder {
					public static class: java.lang.Class<androidx.leanback.widget.PlaybackControlsRowPresenter.ViewHolder>;
					public mDescriptionViewHolder: androidx.leanback.widget.Presenter.ViewHolder;
					public getFacet(facetClass: java.lang.Class<any>): any;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class PlaybackControlsRowView extends globalAndroid.widget.LinearLayout {
				public static class: java.lang.Class<androidx.leanback.widget.PlaybackControlsRowView>;
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
				public dispatchKeyEvent(event: globalAndroid.view.KeyEvent): boolean;
				public getTextDirection(): number;
				public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback, type: number): globalAndroid.view.ActionMode;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
				public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public getTextAlignment(): number;
				/** @deprecated */
				public invalidateChildInParent(location: native.Array<number>, dirty: globalAndroid.graphics.Rect): globalAndroid.view.ViewParent;
				public getParentForAccessibility(): globalAndroid.view.ViewParent;
				public setOnUnhandledKeyListener(listener: androidx.leanback.widget.PlaybackControlsRowView.OnUnhandledKeyListener): void;
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
				public onRequestFocusInDescendants(direction: number, previouslyFocusedRect: globalAndroid.graphics.Rect): boolean;
				public notifySubtreeAccessibilityStateChanged(child: globalAndroid.view.View, source: globalAndroid.view.View, changeType: number): void;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyle: number);
				public updateViewLayout(view: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public onNestedScroll(target: globalAndroid.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
				public requestLayout(): void;
				public focusSearch(focused: globalAndroid.view.View, direction: number): globalAndroid.view.View;
				public requestTransparentRegion(child: globalAndroid.view.View): void;
				public onStartNestedScroll(child: globalAndroid.view.View, target: globalAndroid.view.View, nestedScrollAxes: number): boolean;
				public getOnUnhandledKeyListener(): androidx.leanback.widget.PlaybackControlsRowView.OnUnhandledKeyListener;
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
				public hasOverlappingRendering(): boolean;
			}
			export module PlaybackControlsRowView {
				export class OnUnhandledKeyListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.widget.PlaybackControlsRowView.OnUnhandledKeyListener>;
					/**
					 * Constructs a new instance of the androidx.leanback.widget.PlaybackControlsRowView$OnUnhandledKeyListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onUnhandledKey(keyEvent0: globalAndroid.view.KeyEvent): boolean;
					});
					public constructor();
					public onUnhandledKey(keyEvent0: globalAndroid.view.KeyEvent): boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export abstract class PlaybackRowPresenter extends androidx.leanback.widget.RowPresenter {
				public static class: java.lang.Class<androidx.leanback.widget.PlaybackRowPresenter>;
				public getFacet(facetClass: java.lang.Class<any>): any;
				public onReappear(rowViewHolder: androidx.leanback.widget.RowPresenter.ViewHolder): void;
				public constructor();
			}
			export module PlaybackRowPresenter {
				export class ViewHolder extends androidx.leanback.widget.RowPresenter.ViewHolder {
					public static class: java.lang.Class<androidx.leanback.widget.PlaybackRowPresenter.ViewHolder>;
					public constructor(view: globalAndroid.view.View);
					public getFacet(facetClass: java.lang.Class<any>): any;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class PlaybackSeekDataProvider extends java.lang.Object {
				public static class: java.lang.Class<androidx.leanback.widget.PlaybackSeekDataProvider>;
				public reset(): void;
				public getSeekPositions(): native.Array<number>;
				public getThumbnail(index: number, callback: androidx.leanback.widget.PlaybackSeekDataProvider.ResultCallback): void;
				public constructor();
			}
			export module PlaybackSeekDataProvider {
				export class ResultCallback extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.widget.PlaybackSeekDataProvider.ResultCallback>;
					public constructor();
					public onThumbnailLoaded(bitmap: globalAndroid.graphics.Bitmap, index: number): void;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class PlaybackSeekUi extends java.lang.Object {
				public static class: java.lang.Class<androidx.leanback.widget.PlaybackSeekUi>;
				/**
				 * Constructs a new instance of the androidx.leanback.widget.PlaybackSeekUi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					setPlaybackSeekUiClient(client0: androidx.leanback.widget.PlaybackSeekUi.Client): void;
				});
				public constructor();
				public setPlaybackSeekUiClient(client0: androidx.leanback.widget.PlaybackSeekUi.Client): void;
			}
			export module PlaybackSeekUi {
				export class Client extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.widget.PlaybackSeekUi.Client>;
					public constructor();
					public getPlaybackSeekDataProvider(): androidx.leanback.widget.PlaybackSeekDataProvider;
					public isSeekEnabled(): boolean;
					public onSeekStarted(): void;
					public onSeekPositionChanged(pos: number): void;
					public onSeekFinished(cancelled: boolean): void;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class PlaybackTransportRowPresenter extends androidx.leanback.widget.PlaybackRowPresenter {
				public static class: java.lang.Class<androidx.leanback.widget.PlaybackTransportRowPresenter>;
				public getOnActionClickedListener(): androidx.leanback.widget.OnActionClickedListener;
				public createRowViewHolder(parent: globalAndroid.view.ViewGroup): androidx.leanback.widget.RowPresenter.ViewHolder;
				public createRowViewHolder(viewGroup0: globalAndroid.view.ViewGroup): androidx.leanback.widget.RowPresenter.ViewHolder;
				public onBindRowViewHolder(holder: androidx.leanback.widget.RowPresenter.ViewHolder, item: any): void;
				public onRowViewDetachedFromWindow(vh: androidx.leanback.widget.RowPresenter.ViewHolder): void;
				public setSecondaryProgressColor(color: number): void;
				public onUnbindRowViewHolder(holder: androidx.leanback.widget.RowPresenter.ViewHolder): void;
				public onBindRowViewHolder(vh: androidx.leanback.widget.RowPresenter.ViewHolder, item: any): void;
				public getProgressColor(): number;
				public onProgressBarClicked(vh: androidx.leanback.widget.PlaybackTransportRowPresenter.ViewHolder): void;
				public constructor();
				public setProgressColor(color: number): void;
				public onUnbindRowViewHolder(vh: androidx.leanback.widget.RowPresenter.ViewHolder): void;
				public onRowViewSelected(vh: androidx.leanback.widget.RowPresenter.ViewHolder, selected: boolean): void;
				public setOnActionClickedListener(listener: androidx.leanback.widget.OnActionClickedListener): void;
				public setDefaultSeekIncrement(ratio: number): void;
				public getFacet(facetClass: java.lang.Class<any>): any;
				public onRowViewAttachedToWindow(vh: androidx.leanback.widget.RowPresenter.ViewHolder): void;
				public getSecondaryProgressColor(): number;
				public onReappear(rowViewHolder: androidx.leanback.widget.RowPresenter.ViewHolder): void;
				public getDefaultSeekIncrement(): number;
				public setDescriptionPresenter(descriptionPresenter: androidx.leanback.widget.Presenter): void;
			}
			export module PlaybackTransportRowPresenter {
				export class BoundData extends androidx.leanback.widget.PlaybackControlsPresenter.BoundData {
					public static class: java.lang.Class<androidx.leanback.widget.PlaybackTransportRowPresenter.BoundData>;
				}
				export class ViewHolder extends androidx.leanback.widget.PlaybackRowPresenter.ViewHolder implements androidx.leanback.widget.PlaybackSeekUi {
					public static class: java.lang.Class<androidx.leanback.widget.PlaybackTransportRowPresenter.ViewHolder>;
					public constructor(view: globalAndroid.view.View);
					public constructor(this0: androidx.leanback.widget.PlaybackTransportRowPresenter, rootView: globalAndroid.view.View, descriptionPresenter: androidx.leanback.widget.Presenter);
					public getFacet(facetClass: java.lang.Class<any>): any;
					public getDescriptionViewHolder(): androidx.leanback.widget.Presenter.ViewHolder;
					public getCurrentPositionView(): globalAndroid.widget.TextView;
					public onSetDurationLabel(totalTimeMs: number): void;
					public onSetCurrentPositionLabel(currentTimeMs: number): void;
					public getDurationView(): globalAndroid.widget.TextView;
					public setPlaybackSeekUiClient(client: androidx.leanback.widget.PlaybackSeekUi.Client): void;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class PlaybackTransportRowView extends globalAndroid.widget.LinearLayout {
				public static class: java.lang.Class<androidx.leanback.widget.PlaybackTransportRowView>;
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
				public dispatchKeyEvent(event: globalAndroid.view.KeyEvent): boolean;
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
				public onRequestFocusInDescendants(direction: number, previouslyFocusedRect: globalAndroid.graphics.Rect): boolean;
				public notifySubtreeAccessibilityStateChanged(child: globalAndroid.view.View, source: globalAndroid.view.View, changeType: number): void;
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
				public hasOverlappingRendering(): boolean;
			}
			export module PlaybackTransportRowView {
				export class OnUnhandledKeyListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.widget.PlaybackTransportRowView.OnUnhandledKeyListener>;
					/**
					 * Constructs a new instance of the androidx.leanback.widget.PlaybackTransportRowView$OnUnhandledKeyListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onUnhandledKey(keyEvent0: globalAndroid.view.KeyEvent): boolean;
					});
					public constructor();
					public onUnhandledKey(keyEvent0: globalAndroid.view.KeyEvent): boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export abstract class Presenter extends java.lang.Object implements androidx.leanback.widget.FacetProvider {
				public static class: java.lang.Class<androidx.leanback.widget.Presenter>;
				public setFacet(facetClass: java.lang.Class<any>, facetImpl: any): void;
				public onViewAttachedToWindow(holder: androidx.leanback.widget.Presenter.ViewHolder): void;
				public onViewDetachedFromWindow(holder: androidx.leanback.widget.Presenter.ViewHolder): void;
				public getFacet(facetClass: java.lang.Class<any>): any;
				public onBindViewHolder(viewHolder0: androidx.leanback.widget.Presenter.ViewHolder, object1: any): void;
				public onCreateViewHolder(viewGroup0: globalAndroid.view.ViewGroup): androidx.leanback.widget.Presenter.ViewHolder;
				public onUnbindViewHolder(viewHolder0: androidx.leanback.widget.Presenter.ViewHolder): void;
				public setOnClickListener(holder: androidx.leanback.widget.Presenter.ViewHolder, listener: globalAndroid.view.View.OnClickListener): void;
				public static cancelAnimationsRecursive(view: globalAndroid.view.View): void;
				public onBindViewHolder(viewHolder: androidx.leanback.widget.Presenter.ViewHolder, item: any, payloads: java.util.List<any>): void;
				public constructor();
			}
			export module Presenter {
				export class ViewHolder extends java.lang.Object implements androidx.leanback.widget.FacetProvider {
					public static class: java.lang.Class<androidx.leanback.widget.Presenter.ViewHolder>;
					public view: globalAndroid.view.View;
					public constructor(view: globalAndroid.view.View);
					public getFacet(facetClass: java.lang.Class<any>): any;
					public setFacet(facetClass: java.lang.Class<any>, facetImpl: any): void;
				}
				export abstract class ViewHolderTask extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.widget.Presenter.ViewHolderTask>;
					public constructor();
					public run(holder: androidx.leanback.widget.Presenter.ViewHolder): void;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export abstract class PresenterSelector extends java.lang.Object {
				public static class: java.lang.Class<androidx.leanback.widget.PresenterSelector>;
				public getPresenter(object0: any): androidx.leanback.widget.Presenter;
				public getPresenters(): native.Array<androidx.leanback.widget.Presenter>;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export abstract class PresenterSwitcher extends java.lang.Object {
				public static class: java.lang.Class<androidx.leanback.widget.PresenterSwitcher>;
				public getParentViewGroup(): globalAndroid.view.ViewGroup;
				public insertView(view0: globalAndroid.view.View): void;
				public onViewSelected(view: globalAndroid.view.View): void;
				public unselect(): void;
				public clear(): void;
				public showView(view: globalAndroid.view.View, visible: boolean): void;
				public init(parent: globalAndroid.view.ViewGroup, presenterSelector: androidx.leanback.widget.PresenterSelector): void;
				public select(object: any): void;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class RecyclerViewParallax extends androidx.leanback.widget.Parallax<androidx.leanback.widget.RecyclerViewParallax.ChildPositionProperty> {
				public static class: java.lang.Class<androidx.leanback.widget.RecyclerViewParallax>;
				public setRecyclerView(recyclerView: androidx.recyclerview.widget.RecyclerView): void;
				public createProperty(string0: string, int1: number): any;
				public getRecyclerView(): androidx.recyclerview.widget.RecyclerView;
				public updateValues(): void;
				public createProperty(name: string, index: number): androidx.leanback.widget.RecyclerViewParallax.ChildPositionProperty;
				public getMaxValue(): number;
				public constructor();
			}
			export module RecyclerViewParallax {
				export class ChildPositionProperty extends androidx.leanback.widget.Parallax.IntProperty {
					public static class: java.lang.Class<androidx.leanback.widget.RecyclerViewParallax.ChildPositionProperty>;
					public adapterPosition(adapterPosition: number): androidx.leanback.widget.RecyclerViewParallax.ChildPositionProperty;
					public viewId(viewId: number): androidx.leanback.widget.RecyclerViewParallax.ChildPositionProperty;
					public getViewId(): number;
					public getFraction(): number;
					public offset(offset: number): androidx.leanback.widget.RecyclerViewParallax.ChildPositionProperty;
					public getOffset(): number;
					public fraction(fraction: number): androidx.leanback.widget.RecyclerViewParallax.ChildPositionProperty;
					public getAdapterPosition(): number;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class ResizingTextView extends globalAndroid.widget.TextView {
				public static class: java.lang.Class<androidx.leanback.widget.ResizingTextView>;
				public static TRIGGER_MAX_LINES: number;
				public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
				public constructor(context: globalAndroid.content.Context);
				public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
				public constructor(ctx: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
				public getResizedPaddingAdjustmentTop(): number;
				public setResizedPaddingAdjustmentTop(adjustment: number): void;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
				public sendAccessibilityEvent(eventType: number): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
				public getMaintainLineSpacing(): boolean;
				public onPreDraw(): boolean;
				public constructor(ctx: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public setResizedTextSize(size: number): void;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public getTriggerConditions(): number;
				public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public constructor(ctx: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
				public getResizedTextSize(): number;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public setCustomSelectionActionModeCallback(actionModeCallback: globalAndroid.view.ActionMode.Callback): void;
				public getResizedPaddingAdjustmentBottom(): number;
				public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public constructor(ctx: globalAndroid.content.Context);
				public setResizedPaddingAdjustmentBottom(adjustment: number): void;
				public setTriggerConditions(conditions: number): void;
				public setMaintainLineSpacing(maintain: boolean): void;
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class RoundedRectHelper extends java.lang.Object {
				public static class: java.lang.Class<androidx.leanback.widget.RoundedRectHelper>;
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class RoundedRectHelperApi21 extends java.lang.Object {
				public static class: java.lang.Class<androidx.leanback.widget.RoundedRectHelperApi21>;
				public static setClipToRoundedOutline(view: globalAndroid.view.View, clip: boolean, roundedCornerRadius: number): void;
			}
			export module RoundedRectHelperApi21 {
				export class RoundedRectOutlineProvider extends globalAndroid.view.ViewOutlineProvider {
					public static class: java.lang.Class<androidx.leanback.widget.RoundedRectHelperApi21.RoundedRectOutlineProvider>;
					public getOutline(view: globalAndroid.view.View, outline: any): void;
					public getOutline(view0: globalAndroid.view.View, outline1: any): void;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class Row extends java.lang.Object {
				public static class: java.lang.Class<androidx.leanback.widget.Row>;
				public setId(id: number): void;
				public getHeaderItem(): androidx.leanback.widget.HeaderItem;
				public constructor(headerItem: androidx.leanback.widget.HeaderItem);
				public isRenderedAsRowView(): boolean;
				public setHeaderItem(headerItem: androidx.leanback.widget.HeaderItem): void;
				public getId(): number;
				public constructor(id: number, headerItem: androidx.leanback.widget.HeaderItem);
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class RowContainerView extends globalAndroid.widget.LinearLayout {
				public static class: java.lang.Class<androidx.leanback.widget.RowContainerView>;
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
				public setForegroundColor(color: number): void;
				public getForeground(): globalAndroid.graphics.drawable.Drawable;
				public setForeground(foreground: globalAndroid.graphics.drawable.Drawable): void;
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
				public addHeaderView(headerView: globalAndroid.view.View): void;
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
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyle: number);
				public showHeader(show: boolean): void;
				public updateViewLayout(view: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public onNestedScroll(target: globalAndroid.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
				public requestLayout(): void;
				public focusSearch(focused: globalAndroid.view.View, direction: number): globalAndroid.view.View;
				public requestTransparentRegion(child: globalAndroid.view.View): void;
				public onStartNestedScroll(child: globalAndroid.view.View, target: globalAndroid.view.View, nestedScrollAxes: number): boolean;
				/** @deprecated */
				public requestFitSystemWindows(): void;
				public showContextMenuForChild(originalView: globalAndroid.view.View, x: number, y: number): boolean;
				public removeHeaderView(headerView: globalAndroid.view.View): void;
				public bringChildToFront(child: globalAndroid.view.View): void;
				public onNestedPreScroll(target: globalAndroid.view.View, dx: number, dy: number, consumed: native.Array<number>): void;
				public clearChildFocus(child: globalAndroid.view.View): void;
				public draw(canvas: globalAndroid.graphics.Canvas): void;
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
				public setForeground(d: globalAndroid.graphics.drawable.Drawable): void;
				public addView(child: globalAndroid.view.View, index: number, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public addRowView(view: globalAndroid.view.View): void;
				public onNestedPreFling(target: globalAndroid.view.View, velocityX: number, velocityY: number): boolean;
				public onSizeChanged(w: number, h: number, oldw: number, oldh: number): void;
				public getParent(): globalAndroid.view.ViewParent;
				public hasOverlappingRendering(): boolean;
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class RowHeaderPresenter extends androidx.leanback.widget.Presenter {
				public static class: java.lang.Class<androidx.leanback.widget.RowHeaderPresenter>;
				public constructor(layoutResourceId: number, animateSelect: boolean);
				public setSelectLevel(holder: androidx.leanback.widget.RowHeaderPresenter.ViewHolder, selectLevel: number): void;
				public onUnbindViewHolder(viewHolder0: androidx.leanback.widget.Presenter.ViewHolder): void;
				public onSelectLevelChanged(holder: androidx.leanback.widget.RowHeaderPresenter.ViewHolder): void;
				public static getFontDescent(textView: globalAndroid.widget.TextView, fontMeasurePaint: globalAndroid.graphics.Paint): number;
				public constructor();
				public getSpaceUnderBaseline(holder: androidx.leanback.widget.RowHeaderPresenter.ViewHolder): number;
				public onCreateViewHolder(parent: globalAndroid.view.ViewGroup): androidx.leanback.widget.Presenter.ViewHolder;
				public setNullItemVisibilityGone(nullItemVisibilityGone: boolean): void;
				public onUnbindViewHolder(viewHolder: androidx.leanback.widget.Presenter.ViewHolder): void;
				public onBindViewHolder(viewHolder: androidx.leanback.widget.Presenter.ViewHolder, item: any): void;
				public isNullItemVisibilityGone(): boolean;
				public getFacet(facetClass: java.lang.Class<any>): any;
				public constructor(layoutResourceId: number);
				public onBindViewHolder(viewHolder0: androidx.leanback.widget.Presenter.ViewHolder, object1: any): void;
				public onCreateViewHolder(viewGroup0: globalAndroid.view.ViewGroup): androidx.leanback.widget.Presenter.ViewHolder;
				public onBindViewHolder(viewHolder: androidx.leanback.widget.Presenter.ViewHolder, item: any, payloads: java.util.List<any>): void;
			}
			export module RowHeaderPresenter {
				export class ViewHolder extends androidx.leanback.widget.Presenter.ViewHolder {
					public static class: java.lang.Class<androidx.leanback.widget.RowHeaderPresenter.ViewHolder>;
					public constructor(view: globalAndroid.view.View);
					public getFacet(facetClass: java.lang.Class<any>): any;
					public constructor(view: androidx.leanback.widget.RowHeaderView);
					public getSelectLevel(): number;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class RowHeaderView extends globalAndroid.widget.TextView {
				public static class: java.lang.Class<androidx.leanback.widget.RowHeaderView>;
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
				public sendAccessibilityEvent(eventType: number): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyle: number);
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
				public onPreDraw(): boolean;
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public setCustomSelectionActionModeCallback(actionModeCallback: globalAndroid.view.ActionMode.Callback): void;
				public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export abstract class RowPresenter extends androidx.leanback.widget.Presenter {
				public static class: java.lang.Class<androidx.leanback.widget.RowPresenter>;
				public static SYNC_ACTIVATED_CUSTOM: number;
				public static SYNC_ACTIVATED_TO_EXPANDED: number;
				public static SYNC_ACTIVATED_TO_SELECTED: number;
				public static SYNC_ACTIVATED_TO_EXPANDED_AND_SELECTED: number;
				public onViewAttachedToWindow(holder: androidx.leanback.widget.Presenter.ViewHolder): void;
				public onRowViewDetachedFromWindow(vh: androidx.leanback.widget.RowPresenter.ViewHolder): void;
				public setSelectLevel(vh: androidx.leanback.widget.Presenter.ViewHolder, level: number): void;
				public setRowViewExpanded(holder: androidx.leanback.widget.Presenter.ViewHolder, expanded: boolean): void;
				public onUnbindViewHolder(viewHolder0: androidx.leanback.widget.Presenter.ViewHolder): void;
				public onBindRowViewHolder(vh: androidx.leanback.widget.RowPresenter.ViewHolder, item: any): void;
				public setSyncActivatePolicy(syncActivatePolicy: number): void;
				public getSelectEffectEnabled(): boolean;
				public constructor();
				public onUnbindRowViewHolder(vh: androidx.leanback.widget.RowPresenter.ViewHolder): void;
				public onCreateViewHolder(parent: globalAndroid.view.ViewGroup): androidx.leanback.widget.Presenter.ViewHolder;
				public onRowViewSelected(vh: androidx.leanback.widget.RowPresenter.ViewHolder, selected: boolean): void;
				public isClippingChildren(): boolean;
				public getSelectLevel(vh: androidx.leanback.widget.Presenter.ViewHolder): number;
				public onUnbindViewHolder(viewHolder: androidx.leanback.widget.Presenter.ViewHolder): void;
				public setSelectEffectEnabled(applyDimOnSelect: boolean): void;
				public onRowViewExpanded(vh: androidx.leanback.widget.RowPresenter.ViewHolder, expanded: boolean): void;
				public freeze(holder: androidx.leanback.widget.RowPresenter.ViewHolder, freeze: boolean): void;
				public setHeaderPresenter(headerPresenter: androidx.leanback.widget.RowHeaderPresenter): void;
				public createRowViewHolder(viewGroup0: globalAndroid.view.ViewGroup): androidx.leanback.widget.RowPresenter.ViewHolder;
				public getRowViewHolder(holder: androidx.leanback.widget.Presenter.ViewHolder): androidx.leanback.widget.RowPresenter.ViewHolder;
				public getSyncActivatePolicy(): number;
				public onSelectLevelChanged(vh: androidx.leanback.widget.RowPresenter.ViewHolder): void;
				public setEntranceTransitionState(holder: androidx.leanback.widget.RowPresenter.ViewHolder, afterEntrance: boolean): void;
				public setRowViewSelected(holder: androidx.leanback.widget.Presenter.ViewHolder, selected: boolean): void;
				public isUsingDefaultSelectEffect(): boolean;
				public onBindViewHolder(viewHolder: androidx.leanback.widget.Presenter.ViewHolder, item: any): void;
				public onViewDetachedFromWindow(holder: androidx.leanback.widget.Presenter.ViewHolder): void;
				public getFacet(facetClass: java.lang.Class<any>): any;
				public onBindViewHolder(viewHolder0: androidx.leanback.widget.Presenter.ViewHolder, object1: any): void;
				public onRowViewAttachedToWindow(vh: androidx.leanback.widget.RowPresenter.ViewHolder): void;
				public onCreateViewHolder(viewGroup0: globalAndroid.view.ViewGroup): androidx.leanback.widget.Presenter.ViewHolder;
				public initializeRowViewHolder(vh: androidx.leanback.widget.RowPresenter.ViewHolder): void;
				public dispatchItemSelectedListener(vh: androidx.leanback.widget.RowPresenter.ViewHolder, selected: boolean): void;
				public onBindViewHolder(viewHolder: androidx.leanback.widget.Presenter.ViewHolder, item: any, payloads: java.util.List<any>): void;
				public getHeaderPresenter(): androidx.leanback.widget.RowHeaderPresenter;
			}
			export module RowPresenter {
				export class ContainerViewHolder extends androidx.leanback.widget.Presenter.ViewHolder {
					public static class: java.lang.Class<androidx.leanback.widget.RowPresenter.ContainerViewHolder>;
					public constructor(view: globalAndroid.view.View);
					public getFacet(facetClass: java.lang.Class<any>): any;
					public constructor(containerView: androidx.leanback.widget.RowContainerView, rowViewHolder: androidx.leanback.widget.RowPresenter.ViewHolder);
				}
				export class ViewHolder extends androidx.leanback.widget.Presenter.ViewHolder {
					public static class: java.lang.Class<androidx.leanback.widget.RowPresenter.ViewHolder>;
					public mColorDimmer: androidx.leanback.graphics.ColorOverlayDimmer;
					public setOnKeyListener(keyListener: globalAndroid.view.View.OnKeyListener): void;
					public getOnKeyListener(): globalAndroid.view.View.OnKeyListener;
					public getOnItemViewSelectedListener(): androidx.leanback.widget.BaseOnItemViewSelectedListener<any>;
					public isExpanded(): boolean;
					public setActivated(activated: boolean): void;
					public getSelectedItem(): any;
					public getSelectLevel(): number;
					public getOnItemViewClickedListener(): androidx.leanback.widget.BaseOnItemViewClickedListener<any>;
					public getSelectedItemViewHolder(): androidx.leanback.widget.Presenter.ViewHolder;
					public constructor(view: globalAndroid.view.View);
					public getRowObject(): any;
					public setOnItemViewClickedListener(listener: androidx.leanback.widget.BaseOnItemViewClickedListener<any>): void;
					public getFacet(facetClass: java.lang.Class<any>): any;
					public getRow(): androidx.leanback.widget.Row;
					public getHeaderViewHolder(): androidx.leanback.widget.RowHeaderPresenter.ViewHolder;
					public syncActivatedStatus(view: globalAndroid.view.View): void;
					public setOnItemViewSelectedListener(listener: androidx.leanback.widget.BaseOnItemViewSelectedListener<any>): void;
					public isSelected(): boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class ScaleFrameLayout extends globalAndroid.widget.FrameLayout {
				public static class: java.lang.Class<androidx.leanback.widget.ScaleFrameLayout>;
				/** @deprecated */
				public invalidateChild(child: globalAndroid.view.View, dirty: globalAndroid.graphics.Rect): void;
				public focusSearch(direction: number): globalAndroid.view.View;
				public constructor(context: globalAndroid.content.Context);
				public onNestedScrollAccepted(child: globalAndroid.view.View, target: globalAndroid.view.View, axes: number): void;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
				public setLayoutScaleY(scaleY: number): void;
				public childDrawableStateChanged(child: globalAndroid.view.View): void;
				public onStopNestedScroll(child: globalAndroid.view.View): void;
				public isLayoutRequested(): boolean;
				public sendAccessibilityEvent(eventType: number): void;
				public onNestedPrePerformAccessibilityAction(target: globalAndroid.view.View, action: number, bundle2: globalAndroid.os.Bundle): boolean;
				public addView(child: globalAndroid.view.View, index: number): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
				public requestFitSystemWindows(): void;
				public getTextDirection(): number;
				public setForeground(foreground: globalAndroid.graphics.drawable.Drawable): void;
				public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback, type: number): globalAndroid.view.ActionMode;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
				public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public getTextAlignment(): number;
				public setChildScale(scale: number): void;
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
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyle: number);
				public updateViewLayout(view: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public onNestedScroll(target: globalAndroid.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
				public requestLayout(): void;
				public focusSearch(focused: globalAndroid.view.View, direction: number): globalAndroid.view.View;
				public requestTransparentRegion(child: globalAndroid.view.View): void;
				public onStartNestedScroll(child: globalAndroid.view.View, target: globalAndroid.view.View, nestedScrollAxes: number): boolean;
				/** @deprecated */
				public requestFitSystemWindows(): void;
				public setLayoutScaleX(scaleX: number): void;
				public showContextMenuForChild(originalView: globalAndroid.view.View, x: number, y: number): boolean;
				public bringChildToFront(child: globalAndroid.view.View): void;
				public onNestedPreScroll(target: globalAndroid.view.View, dx: number, dy: number, consumed: native.Array<number>): void;
				public clearChildFocus(child: globalAndroid.view.View): void;
				public addViewInLayout(child: globalAndroid.view.View, index: number, params: globalAndroid.view.ViewGroup.LayoutParams): boolean;
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
				public setForeground(d: globalAndroid.graphics.drawable.Drawable): void;
				public addView(child: globalAndroid.view.View, index: number, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public addViewInLayout(child: globalAndroid.view.View, index: number, params: globalAndroid.view.ViewGroup.LayoutParams, preventRequestLayout: boolean): boolean;
				public onNestedPreFling(target: globalAndroid.view.View, velocityX: number, velocityY: number): boolean;
				public getParent(): globalAndroid.view.ViewParent;
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class SearchBar extends globalAndroid.widget.RelativeLayout {
				public static class: java.lang.Class<androidx.leanback.widget.SearchBar>;
				/** @deprecated */
				public invalidateChild(child: globalAndroid.view.View, dirty: globalAndroid.graphics.Rect): void;
				public focusSearch(direction: number): globalAndroid.view.View;
				public constructor(context: globalAndroid.content.Context);
				public onNestedScrollAccepted(child: globalAndroid.view.View, target: globalAndroid.view.View, axes: number): void;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
				public setNextFocusDownId(viewId: number): void;
				public childDrawableStateChanged(child: globalAndroid.view.View): void;
				public onStopNestedScroll(child: globalAndroid.view.View): void;
				public displayCompletions(completions: java.util.List<string>): void;
				public isLayoutRequested(): boolean;
				public sendAccessibilityEvent(eventType: number): void;
				public onNestedPrePerformAccessibilityAction(target: globalAndroid.view.View, action: number, bundle2: globalAndroid.os.Bundle): boolean;
				public setPermissionListener(listener: androidx.leanback.widget.SearchBar.SearchBarPermissionListener): void;
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
				public isRecognizing(): boolean;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
				public keyboardNavigationClusterSearch(currentCluster: globalAndroid.view.View, direction: number): globalAndroid.view.View;
				public setSearchBarListener(listener: androidx.leanback.widget.SearchBar.SearchBarListener): void;
				public addView(child: globalAndroid.view.View, width: number, height: number): void;
				public stopRecognition(): void;
				public isTextDirectionResolved(): boolean;
				public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
				public childHasTransientStateChanged(child: globalAndroid.view.View, childHasTransientState: boolean): void;
				public onDetachedFromWindow(): void;
				public setSearchAffordanceColors(colors: androidx.leanback.widget.SearchOrbView.Colors): void;
				public setBadgeDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public focusableViewAvailable(v: globalAndroid.view.View): void;
				public showContextMenuForChild(originalView: globalAndroid.view.View): boolean;
				public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public recomputeViewAttributes(child: globalAndroid.view.View): void;
				public setSpeechRecognizer(recognizer: globalAndroid.speech.SpeechRecognizer): void;
				public addView(child: globalAndroid.view.View): void;
				public requestSendAccessibilityEvent(child: globalAndroid.view.View, event: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
				public isLayoutDirectionResolved(): boolean;
				public isTextAlignmentResolved(): boolean;
				public getLayoutDirection(): number;
				public addView(child: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public canResolveTextDirection(): boolean;
				public canResolveTextAlignment(): boolean;
				public onFinishInflate(): void;
				public notifySubtreeAccessibilityStateChanged(child: globalAndroid.view.View, source: globalAndroid.view.View, changeType: number): void;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyle: number);
				public updateViewLayout(view: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public onNestedScroll(target: globalAndroid.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
				public requestLayout(): void;
				public focusSearch(focused: globalAndroid.view.View, direction: number): globalAndroid.view.View;
				public requestTransparentRegion(child: globalAndroid.view.View): void;
				public onStartNestedScroll(child: globalAndroid.view.View, target: globalAndroid.view.View, nestedScrollAxes: number): boolean;
				public setNextFocusDownId(nextFocusDownId: number): void;
				/** @deprecated */
				public requestFitSystemWindows(): void;
				public setSearchAffordanceColorsInListening(colors: androidx.leanback.widget.SearchOrbView.Colors): void;
				public setTitle(title: string): void;
				public getBadgeDrawable(): globalAndroid.graphics.drawable.Drawable;
				public showContextMenuForChild(originalView: globalAndroid.view.View, x: number, y: number): boolean;
				public bringChildToFront(child: globalAndroid.view.View): void;
				public onNestedPreScroll(target: globalAndroid.view.View, dx: number, dy: number, consumed: native.Array<number>): void;
				public clearChildFocus(child: globalAndroid.view.View): void;
				public onDescendantInvalidated(child: globalAndroid.view.View, target: globalAndroid.view.View): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				/** @deprecated */
				public setSpeechRecognitionCallback(request: androidx.leanback.widget.SpeechRecognitionCallback): void;
				public removeView(view: globalAndroid.view.View): void;
				public requestChildRectangleOnScreen(child: globalAndroid.view.View, rectangle: globalAndroid.graphics.Rect, immediate: boolean): boolean;
				public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public getChildVisibleRect(child: globalAndroid.view.View, r: globalAndroid.graphics.Rect, offset: globalAndroid.graphics.Point): boolean;
				public requestChildFocus(child: globalAndroid.view.View, focused: globalAndroid.view.View): void;
				public createContextMenu(menu: globalAndroid.view.ContextMenu): void;
				public canResolveLayoutDirection(): boolean;
				public getTitle(): string;
				public startRecognition(): void;
				public setSearchQuery(query: string): void;
				public addView(child: globalAndroid.view.View, index: number, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public displayCompletions(completions: native.Array<globalAndroid.view.inputmethod.CompletionInfo>): void;
				public getHint(): string;
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public onNestedPreFling(target: globalAndroid.view.View, velocityX: number, velocityY: number): boolean;
				public onAttachedToWindow(): void;
				public getParent(): globalAndroid.view.ViewParent;
			}
			export module SearchBar {
				export class SearchBarListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.widget.SearchBar.SearchBarListener>;
					/**
					 * Constructs a new instance of the androidx.leanback.widget.SearchBar$SearchBarListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onSearchQueryChange(string0: string): void;
						onSearchQuerySubmit(string0: string): void;
						onKeyboardDismiss(string0: string): void;
					});
					public constructor();
					public onKeyboardDismiss(string0: string): void;
					public onSearchQuerySubmit(string0: string): void;
					public onSearchQueryChange(string0: string): void;
				}
				export class SearchBarPermissionListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.widget.SearchBar.SearchBarPermissionListener>;
					/**
					 * Constructs a new instance of the androidx.leanback.widget.SearchBar$SearchBarPermissionListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						requestAudioPermission(): void;
					});
					public constructor();
					public requestAudioPermission(): void;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class SearchEditText extends androidx.leanback.widget.StreamingTextView {
				public static class: java.lang.Class<androidx.leanback.widget.SearchEditText>;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public constructor(context: globalAndroid.content.Context);
				public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
				public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public onKeyPreIme(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
				public sendAccessibilityEvent(eventType: number): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyle: number);
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
				public onPreDraw(): boolean;
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public setOnKeyboardDismissListener(listener: androidx.leanback.widget.SearchEditText.OnKeyboardDismissListener): void;
				public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
			}
			export module SearchEditText {
				export class OnKeyboardDismissListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.widget.SearchEditText.OnKeyboardDismissListener>;
					/**
					 * Constructs a new instance of the androidx.leanback.widget.SearchEditText$OnKeyboardDismissListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onKeyboardDismiss(): void;
					});
					public constructor();
					public onKeyboardDismiss(): void;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class SearchOrbView extends globalAndroid.widget.FrameLayout implements globalAndroid.view.View.OnClickListener {
				public static class: java.lang.Class<androidx.leanback.widget.SearchOrbView>;
				/** @deprecated */
				public invalidateChild(child: globalAndroid.view.View, dirty: globalAndroid.graphics.Rect): void;
				public focusSearch(direction: number): globalAndroid.view.View;
				public constructor(context: globalAndroid.content.Context);
				public setOrbColor(color: number): void;
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
				public setOrbIcon(icon: globalAndroid.graphics.drawable.Drawable): void;
				public getTextDirection(): number;
				public enableOrbColorAnimation(enable: boolean): void;
				public onClick(view: globalAndroid.view.View): void;
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
				public getOrbColors(): androidx.leanback.widget.SearchOrbView.Colors;
				public addView(child: globalAndroid.view.View, width: number, height: number): void;
				public getOrbColor(): number;
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
				public isTextAlignmentResolved(): boolean;
				public setOrbColors(colors: androidx.leanback.widget.SearchOrbView.Colors): void;
				public getLayoutDirection(): number;
				public addView(child: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public getOrbIcon(): globalAndroid.graphics.drawable.Drawable;
				public canResolveTextDirection(): boolean;
				public canResolveTextAlignment(): boolean;
				public setOnOrbClickedListener(listener: globalAndroid.view.View.OnClickListener): void;
				public notifySubtreeAccessibilityStateChanged(child: globalAndroid.view.View, source: globalAndroid.view.View, changeType: number): void;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
				public updateViewLayout(view: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public onNestedScroll(target: globalAndroid.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
				public onFocusChanged(gainFocus: boolean, direction: number, previouslyFocusedRect: globalAndroid.graphics.Rect): void;
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
				/** @deprecated */
				public setOrbColor(color: number, brightColor: number): void;
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public onNestedPreFling(target: globalAndroid.view.View, velocityX: number, velocityY: number): boolean;
				public onAttachedToWindow(): void;
				public getParent(): globalAndroid.view.ViewParent;
			}
			export module SearchOrbView {
				export class Colors extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.widget.SearchOrbView.Colors>;
					public color: number;
					public brightColor: number;
					public iconColor: number;
					public constructor(color: number);
					public constructor(color: number, brightColor: number);
					public constructor(color: number, brightColor: number, iconColor: number);
					public static getBrightColor(color: number): number;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class SectionRow extends androidx.leanback.widget.Row {
				public static class: java.lang.Class<androidx.leanback.widget.SectionRow>;
				public constructor(id: number, name: string);
				public constructor(name: string);
				public constructor(headerItem: androidx.leanback.widget.HeaderItem);
				public isRenderedAsRowView(): boolean;
				public constructor(id: number, headerItem: androidx.leanback.widget.HeaderItem);
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class SeekBar extends globalAndroid.view.View {
				public static class: java.lang.Class<androidx.leanback.widget.SeekBar>;
				public setBarHeight(barHeight: number): void;
				public constructor(context: globalAndroid.content.Context);
				public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
				public setSecondaryProgress(progress: number): void;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
				public getSecondProgress(): number;
				public getMax(): number;
				public sendAccessibilityEvent(eventType: number): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
				public onFocusChanged(gainFocus: boolean, direction: number, previouslyFocusedRect: globalAndroid.graphics.Rect): void;
				public getSecondaryProgressColor(): number;
				public getAccessibilityClassName(): string;
				public setProgress(progress: number): void;
				public setActiveBarHeight(activeBarHeight: number): void;
				public setAccessibilitySeekListener(listener: androidx.leanback.widget.SeekBar.AccessibilitySeekListener): void;
				public performAccessibilityAction(action: number, bundle1: globalAndroid.os.Bundle): boolean;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public setMax(max: number): void;
				public setSecondaryProgressColor(color: number): void;
				public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
				public setProgressColor(color: number): void;
				public getProgress(): number;
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public setActiveRadius(radius: number): void;
				public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public onSizeChanged(w: number, h: number, oldw: number, oldh: number): void;
				public onDraw(canvas: globalAndroid.graphics.Canvas): void;
			}
			export module SeekBar {
				export abstract class AccessibilitySeekListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.widget.SeekBar.AccessibilitySeekListener>;
					public constructor();
					public onAccessibilitySeekBackward(): boolean;
					public onAccessibilitySeekForward(): boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class ShadowHelper extends java.lang.Object {
				public static class: java.lang.Class<androidx.leanback.widget.ShadowHelper>;
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class ShadowHelperApi21 extends java.lang.Object {
				public static class: java.lang.Class<androidx.leanback.widget.ShadowHelperApi21>;
				public static addDynamicShadow(shadowContainer: globalAndroid.view.View, unfocusedZ: number, focusedZ: number, roundedCornerRadius: number): any;
				public static setShadowFocusLevel(object: any, level: number): void;
			}
			export module ShadowHelperApi21 {
				export class ShadowImpl extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.widget.ShadowHelperApi21.ShadowImpl>;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class ShadowOverlayContainer extends globalAndroid.widget.FrameLayout {
				public static class: java.lang.Class<androidx.leanback.widget.ShadowOverlayContainer>;
				public static SHADOW_NONE: number;
				public static SHADOW_STATIC: number;
				public static SHADOW_DYNAMIC: number;
				/** @deprecated */
				public invalidateChild(child: globalAndroid.view.View, dirty: globalAndroid.graphics.Rect): void;
				public focusSearch(direction: number): globalAndroid.view.View;
				public constructor(context: globalAndroid.content.Context);
				public onNestedScrollAccepted(child: globalAndroid.view.View, target: globalAndroid.view.View, axes: number): void;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
				public setOverlayColor(overlayColor: number): void;
				public childDrawableStateChanged(child: globalAndroid.view.View): void;
				public onStopNestedScroll(child: globalAndroid.view.View): void;
				public isLayoutRequested(): boolean;
				public useDynamicShadow(unfocusedZ: number, focusedZ: number): void;
				public sendAccessibilityEvent(eventType: number): void;
				public onNestedPrePerformAccessibilityAction(target: globalAndroid.view.View, action: number, bundle2: globalAndroid.os.Bundle): boolean;
				public addView(child: globalAndroid.view.View, index: number): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
				public requestFitSystemWindows(): void;
				public getTextDirection(): number;
				public useStaticShadow(): void;
				/** @deprecated */
				public initialize(hasShadow: boolean, hasColorDimOverlay: boolean, roundedCorners: boolean): void;
				public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback, type: number): globalAndroid.view.ActionMode;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
				public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public getTextAlignment(): number;
				public onLayout(changed: boolean, l: number, t: number, r: number, b: number): void;
				public static prepareParentForShadow(parent: globalAndroid.view.ViewGroup): void;
				/** @deprecated */
				public invalidateChildInParent(location: native.Array<number>, dirty: globalAndroid.graphics.Rect): globalAndroid.view.ViewParent;
				public getParentForAccessibility(): globalAndroid.view.ViewParent;
				public onNestedFling(target: globalAndroid.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
				public useDynamicShadow(): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
				public keyboardNavigationClusterSearch(currentCluster: globalAndroid.view.View, direction: number): globalAndroid.view.View;
				public onLayout(changed: boolean, left: number, top: number, right: number, bottom: number): void;
				public addView(child: globalAndroid.view.View, width: number, height: number): void;
				public setShadowFocusLevel(level: number): void;
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
				public getWrappedView(): globalAndroid.view.View;
				public canResolveTextDirection(): boolean;
				public canResolveTextAlignment(): boolean;
				public wrap(view: globalAndroid.view.View): void;
				public notifySubtreeAccessibilityStateChanged(child: globalAndroid.view.View, source: globalAndroid.view.View, changeType: number): void;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyle: number);
				public updateViewLayout(view: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public getShadowType(): number;
				public onNestedScroll(target: globalAndroid.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
				public requestLayout(): void;
				/** @deprecated */
				public initialize(hasShadow: boolean, hasColorDimOverlay: boolean): void;
				public focusSearch(focused: globalAndroid.view.View, direction: number): globalAndroid.view.View;
				public requestTransparentRegion(child: globalAndroid.view.View): void;
				public onStartNestedScroll(child: globalAndroid.view.View, target: globalAndroid.view.View, nestedScrollAxes: number): boolean;
				/** @deprecated */
				public requestFitSystemWindows(): void;
				public showContextMenuForChild(originalView: globalAndroid.view.View, x: number, y: number): boolean;
				public bringChildToFront(child: globalAndroid.view.View): void;
				public onNestedPreScroll(target: globalAndroid.view.View, dx: number, dy: number, consumed: native.Array<number>): void;
				public clearChildFocus(child: globalAndroid.view.View): void;
				public draw(canvas: globalAndroid.graphics.Canvas): void;
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
				public static supportsShadow(): boolean;
				public static supportsDynamicShadow(): boolean;
				public onNestedPreFling(target: globalAndroid.view.View, velocityX: number, velocityY: number): boolean;
				public getParent(): globalAndroid.view.ViewParent;
				public hasOverlappingRendering(): boolean;
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class ShadowOverlayHelper extends java.lang.Object {
				public static class: java.lang.Class<androidx.leanback.widget.ShadowOverlayHelper>;
				public static SHADOW_NONE: number;
				public static SHADOW_STATIC: number;
				public static SHADOW_DYNAMIC: number;
				public setShadowFocusLevel(view: globalAndroid.view.View, level: number): void;
				public static setNoneWrapperShadowFocusLevel(view: globalAndroid.view.View, level: number): void;
				public static supportsForeground(): boolean;
				public setOverlayColor(view: globalAndroid.view.View, color: number): void;
				public needsOverlay(): boolean;
				public static setNoneWrapperOverlayColor(view: globalAndroid.view.View, color: number): void;
				public createShadowOverlayContainer(context: globalAndroid.content.Context): androidx.leanback.widget.ShadowOverlayContainer;
				public static supportsRoundedCorner(): boolean;
				public getShadowType(): number;
				public onViewCreated(view: globalAndroid.view.View): void;
				public prepareParentForShadow(parent: globalAndroid.view.ViewGroup): void;
				public static supportsShadow(): boolean;
				public static supportsDynamicShadow(): boolean;
				public needsWrapper(): boolean;
				public needsRoundedCorner(): boolean;
			}
			export module ShadowOverlayHelper {
				export class Builder extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.widget.ShadowOverlayHelper.Builder>;
					public keepForegroundDrawable(keepForegroundDrawable: boolean): androidx.leanback.widget.ShadowOverlayHelper.Builder;
					public options(options: androidx.leanback.widget.ShadowOverlayHelper.Options): androidx.leanback.widget.ShadowOverlayHelper.Builder;
					public build(context: globalAndroid.content.Context): androidx.leanback.widget.ShadowOverlayHelper;
					public constructor();
					public needsOverlay(needsOverlay: boolean): androidx.leanback.widget.ShadowOverlayHelper.Builder;
					public needsRoundedCorner(needsRoundedCorner: boolean): androidx.leanback.widget.ShadowOverlayHelper.Builder;
					public needsShadow(needsShadow: boolean): androidx.leanback.widget.ShadowOverlayHelper.Builder;
					public preferZOrder(preferZOrder: boolean): androidx.leanback.widget.ShadowOverlayHelper.Builder;
				}
				export class Options extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.widget.ShadowOverlayHelper.Options>;
					public static DEFAULT: androidx.leanback.widget.ShadowOverlayHelper.Options;
					public getDynamicShadowUnfocusedZ(): number;
					public constructor();
					public getDynamicShadowFocusedZ(): number;
					public dynamicShadowZ(unfocusedZ: number, focusedZ: number): androidx.leanback.widget.ShadowOverlayHelper.Options;
					public roundedCornerRadius(roundedCornerRadius: number): androidx.leanback.widget.ShadowOverlayHelper.Options;
					public getRoundedCornerRadius(): number;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class SinglePresenterSelector extends androidx.leanback.widget.PresenterSelector {
				public static class: java.lang.Class<androidx.leanback.widget.SinglePresenterSelector>;
				public getPresenter(object0: any): androidx.leanback.widget.Presenter;
				public getPresenters(): native.Array<androidx.leanback.widget.Presenter>;
				public constructor(presenter: androidx.leanback.widget.Presenter);
				public getPresenter(item: any): androidx.leanback.widget.Presenter;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class SingleRow extends androidx.leanback.widget.Grid {
				public static class: java.lang.Class<androidx.leanback.widget.SingleRow>;
				public getLocation(index: number): androidx.leanback.widget.Grid.Location;
				public prependVisibleItems(toLimit: number, oneColumnMode: boolean): boolean;
				public findRowMin(findLarge: boolean, indexLimit: number, indices: native.Array<number>): number;
				public appendVisibleItems(toLimit: number): void;
				public appendVisibleItems(int0: number, boolean1: boolean): boolean;
				public getLocation(int0: number): androidx.leanback.widget.Grid.Location;
				public collectAdjacentPrefetchPositions(fromLimit: number, da: number, layoutPrefetchRegistry: androidx.recyclerview.widget.RecyclerView.LayoutManager.LayoutPrefetchRegistry): void;
				public debugPrint(pw: java.io.PrintWriter): void;
				public findRowMin(boolean0: boolean, int1: number, ints2: native.Array<number>): number;
				public getItemPositionsInRows(startPos: number, endPos: number): native.Array<androidx.collection.CircularIntArray>;
				public findRowMax(boolean0: boolean, int1: number, ints2: native.Array<number>): number;
				public prependVisibleItems(int0: number, boolean1: boolean): boolean;
				public debugPrint(printWriter0: java.io.PrintWriter): void;
				public prependVisibleItems(toLimit: number): void;
				public findRowMin(findLarge: boolean, indices: native.Array<number>): number;
				public findRowMax(findLarge: boolean, indices: native.Array<number>): number;
				public appendVisibleItems(toLimit: number, oneColumnMode: boolean): boolean;
				public findRowMax(findLarge: boolean, indexLimit: number, indices: native.Array<number>): number;
				public getItemPositionsInRows(): native.Array<androidx.collection.CircularIntArray>;
				public getItemPositionsInRows(int0: number, int1: number): native.Array<androidx.collection.CircularIntArray>;
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class SparseArrayObjectAdapter extends androidx.leanback.widget.ObjectAdapter {
				public static class: java.lang.Class<androidx.leanback.widget.SparseArrayObjectAdapter>;
				public set(key: number, item: any): void;
				public clear(key: number): void;
				public indexOf(key: number): number;
				public constructor(presenterSelector: androidx.leanback.widget.PresenterSelector);
				public notifyArrayItemRangeChanged(positionStart: number, itemCount: number): void;
				public lookup(key: number): any;
				public constructor();
				public size(): number;
				public get(int0: number): any;
				public indexOf(item: any): number;
				public clear(): void;
				public get(position: number): any;
				public isImmediateNotifySupported(): boolean;
				public constructor(presenter: androidx.leanback.widget.Presenter);
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class SpeechOrbView extends androidx.leanback.widget.SearchOrbView {
				public static class: java.lang.Class<androidx.leanback.widget.SpeechOrbView>;
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
				public setListeningOrbColors(colors: androidx.leanback.widget.SearchOrbView.Colors): void;
				public addView(child: globalAndroid.view.View, index: number): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
				public requestFitSystemWindows(): void;
				public getTextDirection(): number;
				public onClick(view: globalAndroid.view.View): void;
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
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyle: number);
				public updateViewLayout(view: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public setSoundLevel(level: number): void;
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
				public setNotListeningOrbColors(colors: androidx.leanback.widget.SearchOrbView.Colors): void;
				public showListening(): void;
				public getChildVisibleRect(child: globalAndroid.view.View, r: globalAndroid.graphics.Rect, offset: globalAndroid.graphics.Point): boolean;
				public requestChildFocus(child: globalAndroid.view.View, focused: globalAndroid.view.View): void;
				public createContextMenu(menu: globalAndroid.view.ContextMenu): void;
				public canResolveLayoutDirection(): boolean;
				public showNotListening(): void;
				public addView(child: globalAndroid.view.View, index: number, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public onNestedPreFling(target: globalAndroid.view.View, velocityX: number, velocityY: number): boolean;
				public getParent(): globalAndroid.view.ViewParent;
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class SpeechRecognitionCallback extends java.lang.Object {
				public static class: java.lang.Class<androidx.leanback.widget.SpeechRecognitionCallback>;
				/**
				 * Constructs a new instance of the androidx.leanback.widget.SpeechRecognitionCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					recognizeSpeech(): void;
				});
				public constructor();
				public recognizeSpeech(): void;
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export abstract class StaggeredGrid extends androidx.leanback.widget.Grid {
				public static class: java.lang.Class<androidx.leanback.widget.StaggeredGrid>;
				public mLocations: androidx.collection.CircularArray<androidx.leanback.widget.StaggeredGrid.Location>;
				public mFirstIndex: number;
				public mPendingItem: any;
				public mPendingItemSize: number;
				public appendVisbleItemsWithCache(toLimit: number, oneColumnMode: boolean): boolean;
				public appendVisibleItemToRow(itemIndex: number, rowIndex: number, location: number): number;
				public invalidateItemsAfter(index: number): void;
				public prependVisibleItems(toLimit: number, oneColumnMode: boolean): boolean;
				public appendVisibleItems(toLimit: number): void;
				public getLocation(index: number): androidx.leanback.widget.StaggeredGrid.Location;
				public appendVisibleItems(int0: number, boolean1: boolean): boolean;
				public getLocation(int0: number): androidx.leanback.widget.Grid.Location;
				public prependVisibleItemsWithoutCache(int0: number, boolean1: boolean): boolean;
				public getFirstIndex(): number;
				public debugPrint(pw: java.io.PrintWriter): void;
				public getLastIndex(): number;
				public getItemPositionsInRows(startPos: number, endPos: number): native.Array<androidx.collection.CircularIntArray>;
				public prependVisibleItemToRow(itemIndex: number, rowIndex: number, edge: number): number;
				public getSize(): number;
				public prependVisibleItems(int0: number, boolean1: boolean): boolean;
				public debugPrint(printWriter0: java.io.PrintWriter): void;
				public prependVisibleItems(toLimit: number): void;
				public appendVisibleItems(toLimit: number, oneColumnMode: boolean): boolean;
				public appendVisibleItemsWithoutCache(int0: number, boolean1: boolean): boolean;
				public getItemPositionsInRows(): native.Array<androidx.collection.CircularIntArray>;
				public prependVisbleItemsWithCache(toLimit: number, oneColumnMode: boolean): boolean;
				public getItemPositionsInRows(int0: number, int1: number): native.Array<androidx.collection.CircularIntArray>;
			}
			export module StaggeredGrid {
				export class Location extends androidx.leanback.widget.Grid.Location {
					public static class: java.lang.Class<androidx.leanback.widget.StaggeredGrid.Location>;
					public offset: number;
					public size: number;
					public constructor(row: number);
					public constructor(row: number, offset: number, size: number);
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class StaggeredGridDefault extends androidx.leanback.widget.StaggeredGrid {
				public static class: java.lang.Class<androidx.leanback.widget.StaggeredGridDefault>;
				public findRowMax(boolean0: boolean, int1: number, ints2: native.Array<number>): number;
				public findRowMin(findLarge: boolean, indexLimit: number, indices: native.Array<number>): number;
				public prependVisibleItemsWithoutCache(int0: number, boolean1: boolean): boolean;
				public findRowMin(findLarge: boolean, indices: native.Array<number>): number;
				public findRowMax(findLarge: boolean, indices: native.Array<number>): number;
				public findRowMax(findLarge: boolean, indexLimit: number, indices: native.Array<number>): number;
				public appendVisibleItemsWithoutCache(int0: number, boolean1: boolean): boolean;
				public findRowMin(boolean0: boolean, int1: number, ints2: native.Array<number>): number;
				public prependVisibleItemsWithoutCache(toLimit: number, oneColumnMode: boolean): boolean;
				public appendVisibleItemsWithoutCache(toLimit: number, oneColumnMode: boolean): boolean;
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class StaticShadowHelper extends java.lang.Object {
				public static class: java.lang.Class<androidx.leanback.widget.StaticShadowHelper>;
			}
			export module StaticShadowHelper {
				export class ShadowImpl extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.widget.StaticShadowHelper.ShadowImpl>;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class StreamingTextView extends globalAndroid.widget.EditText {
				public static class: java.lang.Class<androidx.leanback.widget.StreamingTextView>;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public setFinalRecognizedText(finalText: string): void;
				public constructor(context: globalAndroid.content.Context);
				public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
				public static isLayoutRtl(view: globalAndroid.view.View): boolean;
				public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public onFinishInflate(): void;
				public onInitializeAccessibilityNodeInfo(info: globalAndroid.view.accessibility.AccessibilityNodeInfo): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
				public reset(): void;
				public sendAccessibilityEvent(eventType: number): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyle: number);
				public updateRecognizedText(stableText: string, pendingText: string): void;
				public updateRecognizedText(stableText: string, rmsValues: java.util.List<java.lang.Float>): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
				public onPreDraw(): boolean;
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public setCustomSelectionActionModeCallback(actionModeCallback: globalAndroid.view.ActionMode.Callback): void;
				public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
			}
			export module StreamingTextView {
				export class DottySpan extends globalAndroid.text.style.ReplacementSpan {
					public static class: java.lang.Class<androidx.leanback.widget.StreamingTextView.DottySpan>;
					public getSize(paint0: globalAndroid.graphics.Paint, charSequence1: string, int2: number, int3: number, fontMetricsInt4: globalAndroid.graphics.Paint.FontMetricsInt): number;
					public draw(canvas0: globalAndroid.graphics.Canvas, charSequence1: string, int2: number, int3: number, float4: number, int5: number, int6: number, int7: number, paint8: globalAndroid.graphics.Paint): void;
					public draw(canvas: globalAndroid.graphics.Canvas, text: string, start: number, end: number, x: number, top: number, y: number, bottom: number, paint: globalAndroid.graphics.Paint): void;
					public getSize(paint: globalAndroid.graphics.Paint, text: string, start: number, end: number, fontMetricsInt: globalAndroid.graphics.Paint.FontMetricsInt): number;
					public constructor();
					public constructor(param0: androidx.leanback.widget.StreamingTextView, seed: number, pos: number);
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class ThumbsBar extends globalAndroid.widget.LinearLayout {
				public static class: java.lang.Class<androidx.leanback.widget.ThumbsBar>;
				public setHeroThumbSize(width: number, height: number): void;
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
				public getThumbBitmap(index: number): globalAndroid.graphics.Bitmap;
				public setNumberOfThumbs(numOfThumbs: number): void;
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
				public addView(child: globalAndroid.view.View, width: number, height: number): void;
				public clearThumbBitmaps(): void;
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
				public setThumbBitmap(index: number, bitmap: globalAndroid.graphics.Bitmap): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyle: number);
				public updateViewLayout(view: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public onNestedScroll(target: globalAndroid.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
				public requestLayout(): void;
				public focusSearch(focused: globalAndroid.view.View, direction: number): globalAndroid.view.View;
				public createThumbView(parent: globalAndroid.view.ViewGroup): globalAndroid.view.View;
				public requestTransparentRegion(child: globalAndroid.view.View): void;
				public onStartNestedScroll(child: globalAndroid.view.View, target: globalAndroid.view.View, nestedScrollAxes: number): boolean;
				/** @deprecated */
				public requestFitSystemWindows(): void;
				public showContextMenuForChild(originalView: globalAndroid.view.View, x: number, y: number): boolean;
				public bringChildToFront(child: globalAndroid.view.View): void;
				public onNestedPreScroll(target: globalAndroid.view.View, dx: number, dy: number, consumed: native.Array<number>): void;
				public setThumbSpace(spaceInPixel: number): void;
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
				public setThumbSize(width: number, height: number): void;
				public addView(child: globalAndroid.view.View, index: number, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public getHeroIndex(): number;
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public onNestedPreFling(target: globalAndroid.view.View, velocityX: number, velocityY: number): boolean;
				public getParent(): globalAndroid.view.ViewParent;
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class TitleHelper extends java.lang.Object {
				public static class: java.lang.Class<androidx.leanback.widget.TitleHelper>;
				public constructor(sceneRoot: globalAndroid.view.ViewGroup, titleView: globalAndroid.view.View);
				public showTitle(show: boolean): void;
				public getSceneRoot(): globalAndroid.view.ViewGroup;
				public getOnFocusSearchListener(): androidx.leanback.widget.BrowseFrameLayout.OnFocusSearchListener;
				public getTitleView(): globalAndroid.view.View;
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class TitleView extends globalAndroid.widget.FrameLayout implements androidx.leanback.widget.TitleViewAdapter.Provider {
				public static class: java.lang.Class<androidx.leanback.widget.TitleView>;
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
				public getTitleViewAdapter(): androidx.leanback.widget.TitleViewAdapter;
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
				public getSearchAffordanceColors(): androidx.leanback.widget.SearchOrbView.Colors;
				public addView(child: globalAndroid.view.View, width: number, height: number): void;
				public isTextDirectionResolved(): boolean;
				public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
				public updateComponentsVisibility(flags: number): void;
				public childHasTransientStateChanged(child: globalAndroid.view.View, childHasTransientState: boolean): void;
				public setBadgeDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public setSearchAffordanceColors(colors: androidx.leanback.widget.SearchOrbView.Colors): void;
				public focusableViewAvailable(v: globalAndroid.view.View): void;
				public showContextMenuForChild(originalView: globalAndroid.view.View): boolean;
				public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public recomputeViewAttributes(child: globalAndroid.view.View): void;
				public addView(child: globalAndroid.view.View): void;
				public requestSendAccessibilityEvent(child: globalAndroid.view.View, event: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
				public isLayoutDirectionResolved(): boolean;
				public isTextAlignmentResolved(): boolean;
				public getLayoutDirection(): number;
				public setOnSearchClickedListener(listener: globalAndroid.view.View.OnClickListener): void;
				public addView(child: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public canResolveTextDirection(): boolean;
				public canResolveTextAlignment(): boolean;
				public notifySubtreeAccessibilityStateChanged(child: globalAndroid.view.View, source: globalAndroid.view.View, changeType: number): void;
				public getSearchAffordanceView(): globalAndroid.view.View;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
				public enableAnimation(enable: boolean): void;
				public updateViewLayout(view: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public onNestedScroll(target: globalAndroid.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
				public requestLayout(): void;
				public focusSearch(focused: globalAndroid.view.View, direction: number): globalAndroid.view.View;
				public requestTransparentRegion(child: globalAndroid.view.View): void;
				public onStartNestedScroll(child: globalAndroid.view.View, target: globalAndroid.view.View, nestedScrollAxes: number): boolean;
				/** @deprecated */
				public requestFitSystemWindows(): void;
				public getBadgeDrawable(): globalAndroid.graphics.drawable.Drawable;
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
				public getTitle(): string;
				public addView(child: globalAndroid.view.View, index: number, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public onNestedPreFling(target: globalAndroid.view.View, velocityX: number, velocityY: number): boolean;
				public getParent(): globalAndroid.view.ViewParent;
				public setTitle(titleText: string): void;
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export abstract class TitleViewAdapter extends java.lang.Object {
				public static class: java.lang.Class<androidx.leanback.widget.TitleViewAdapter>;
				public static BRANDING_VIEW_VISIBLE: number;
				public static SEARCH_VIEW_VISIBLE: number;
				public static FULL_VIEW_VISIBLE: number;
				public getSearchAffordanceColors(): androidx.leanback.widget.SearchOrbView.Colors;
				public setOnSearchClickedListener(listener: globalAndroid.view.View.OnClickListener): void;
				public setAnimationEnabled(enable: boolean): void;
				public updateComponentsVisibility(flags: number): void;
				public setBadgeDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public setSearchAffordanceColors(colors: androidx.leanback.widget.SearchOrbView.Colors): void;
				public getBadgeDrawable(): globalAndroid.graphics.drawable.Drawable;
				public getTitle(): string;
				public constructor();
				public setTitle(titleText: string): void;
				public getSearchAffordanceView(): globalAndroid.view.View;
			}
			export module TitleViewAdapter {
				export class Provider extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.widget.TitleViewAdapter.Provider>;
					/**
					 * Constructs a new instance of the androidx.leanback.widget.TitleViewAdapter$Provider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getTitleViewAdapter(): androidx.leanback.widget.TitleViewAdapter;
					});
					public constructor();
					public getTitleViewAdapter(): androidx.leanback.widget.TitleViewAdapter;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class Util extends java.lang.Object {
				public static class: java.lang.Class<androidx.leanback.widget.Util>;
				public static isDescendant(parent: globalAndroid.view.ViewGroup, child: globalAndroid.view.View): boolean;
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class VerticalGridPresenter extends androidx.leanback.widget.Presenter {
				public static class: java.lang.Class<androidx.leanback.widget.VerticalGridPresenter>;
				public getFocusZoomFactor(): number;
				public onCreateViewHolder(parent: globalAndroid.view.ViewGroup): androidx.leanback.widget.VerticalGridPresenter.ViewHolder;
				public isFocusDimmerUsed(): boolean;
				public constructor(focusZoomFactor: number);
				public onUnbindViewHolder(viewHolder0: androidx.leanback.widget.Presenter.ViewHolder): void;
				public constructor();
				public setNumberOfColumns(numColumns: number): void;
				public createGridViewHolder(parent: globalAndroid.view.ViewGroup): androidx.leanback.widget.VerticalGridPresenter.ViewHolder;
				public createShadowOverlayOptions(): androidx.leanback.widget.ShadowOverlayHelper.Options;
				public onUnbindViewHolder(viewHolder: androidx.leanback.widget.Presenter.ViewHolder): void;
				public isUsingDefaultShadow(): boolean;
				public isUsingZOrder(context: globalAndroid.content.Context): boolean;
				public getOnItemViewClickedListener(): androidx.leanback.widget.OnItemViewClickedListener;
				public setShadowEnabled(enabled: boolean): void;
				public initializeGridViewHolder(vh: androidx.leanback.widget.VerticalGridPresenter.ViewHolder): void;
				public setKeepChildForeground(keep: boolean): void;
				public getOnItemViewSelectedListener(): androidx.leanback.widget.OnItemViewSelectedListener;
				public getShadowEnabled(): boolean;
				public setOnItemViewSelectedListener(listener: androidx.leanback.widget.OnItemViewSelectedListener): void;
				public getKeepChildForeground(): boolean;
				public getNumberOfColumns(): number;
				public setOnItemViewClickedListener(listener: androidx.leanback.widget.OnItemViewClickedListener): void;
				public enableChildRoundedCorners(enable: boolean): void;
				public onBindViewHolder(viewHolder: androidx.leanback.widget.Presenter.ViewHolder, item: any): void;
				public setEntranceTransitionState(holder: androidx.leanback.widget.VerticalGridPresenter.ViewHolder, afterEntrance: boolean): void;
				public getFacet(facetClass: java.lang.Class<any>): any;
				public onBindViewHolder(viewHolder0: androidx.leanback.widget.Presenter.ViewHolder, object1: any): void;
				public onCreateViewHolder(viewGroup0: globalAndroid.view.ViewGroup): androidx.leanback.widget.Presenter.ViewHolder;
				public constructor(focusZoomFactor: number, useFocusDimmer: boolean);
				public areChildRoundedCornersEnabled(): boolean;
				public onBindViewHolder(viewHolder: androidx.leanback.widget.Presenter.ViewHolder, item: any, payloads: java.util.List<any>): void;
			}
			export module VerticalGridPresenter {
				export class VerticalGridItemBridgeAdapter extends androidx.leanback.widget.ItemBridgeAdapter {
					public static class: java.lang.Class<androidx.leanback.widget.VerticalGridPresenter.VerticalGridItemBridgeAdapter>;
					public onBind(viewHolder: androidx.leanback.widget.ItemBridgeAdapter.ViewHolder): void;
					public onCreate(viewHolder: androidx.leanback.widget.ItemBridgeAdapter.ViewHolder): void;
					public onBind(itemViewHolder: androidx.leanback.widget.ItemBridgeAdapter.ViewHolder): void;
					public onAttachedToWindow(viewHolder: androidx.leanback.widget.ItemBridgeAdapter.ViewHolder): void;
					public getFacetProvider(type: number): androidx.leanback.widget.FacetProvider;
					public onUnbind(viewHolder: androidx.leanback.widget.ItemBridgeAdapter.ViewHolder): void;
				}
				export class ViewHolder extends androidx.leanback.widget.Presenter.ViewHolder {
					public static class: java.lang.Class<androidx.leanback.widget.VerticalGridPresenter.ViewHolder>;
					public constructor(view: globalAndroid.view.View);
					public getFacet(facetClass: java.lang.Class<any>): any;
					public constructor(view: androidx.leanback.widget.VerticalGridView);
					public getGridView(): androidx.leanback.widget.VerticalGridView;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class VerticalGridView extends androidx.leanback.widget.BaseGridView {
				public static class: java.lang.Class<androidx.leanback.widget.VerticalGridView>;
				/** @deprecated */
				public invalidateChild(child: globalAndroid.view.View, dirty: globalAndroid.graphics.Rect): void;
				public focusSearch(direction: number): globalAndroid.view.View;
				public constructor(context: globalAndroid.content.Context);
				public onNestedScrollAccepted(child: globalAndroid.view.View, target: globalAndroid.view.View, axes: number): void;
				public computeVerticalScrollOffset(): number;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
				public childDrawableStateChanged(child: globalAndroid.view.View): void;
				public onStopNestedScroll(child: globalAndroid.view.View): void;
				public isLayoutRequested(): boolean;
				public startNestedScroll(axes: number, type: number): boolean;
				public sendAccessibilityEvent(eventType: number): void;
				public onNestedPrePerformAccessibilityAction(target: globalAndroid.view.View, action: number, bundle2: globalAndroid.os.Bundle): boolean;
				public dispatchNestedPreScroll(dx: number, dy: number, consumed: native.Array<number>, offsetInWindow: native.Array<number>, type: number): boolean;
				public addView(child: globalAndroid.view.View, index: number): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
				public computeHorizontalScrollRange(): number;
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
				public dispatchNestedScroll(dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number, offsetInWindow: native.Array<number>): boolean;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
				public keyboardNavigationClusterSearch(currentCluster: globalAndroid.view.View, direction: number): globalAndroid.view.View;
				public setNumColumns(numColumns: number): void;
				public computeHorizontalScrollExtent(): number;
				public addView(child: globalAndroid.view.View, width: number, height: number): void;
				public isTextDirectionResolved(): boolean;
				public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
				public childHasTransientStateChanged(child: globalAndroid.view.View, childHasTransientState: boolean): void;
				public computeVerticalScrollExtent(): number;
				public focusableViewAvailable(v: globalAndroid.view.View): void;
				public computeVerticalScrollRange(): number;
				public dispatchNestedScroll(dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number, offsetInWindow: native.Array<number>, type: number, consumed: native.Array<number>): void;
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
				public hasNestedScrollingParent(type: number): boolean;
				public notifySubtreeAccessibilityStateChanged(child: globalAndroid.view.View, source: globalAndroid.view.View, changeType: number): void;
				public dispatchNestedPreScroll(dx: number, dy: number, consumed: native.Array<number>, offsetInWindow: native.Array<number>): boolean;
				public computeHorizontalScrollOffset(): number;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyle: number);
				public updateViewLayout(view: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public onNestedScroll(target: globalAndroid.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
				public requestLayout(): void;
				public stopNestedScroll(type: number): void;
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
				public onDescendantInvalidated(child: globalAndroid.view.View, target: globalAndroid.view.View): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public removeView(view: globalAndroid.view.View): void;
				public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public getChildVisibleRect(child: globalAndroid.view.View, r: globalAndroid.graphics.Rect, offset: globalAndroid.graphics.Point): boolean;
				public requestChildFocus(child: globalAndroid.view.View, focused: globalAndroid.view.View): void;
				public createContextMenu(menu: globalAndroid.view.ContextMenu): void;
				public setColumnWidth(width: number): void;
				public canResolveLayoutDirection(): boolean;
				public startNestedScroll(axes: number): boolean;
				public stopNestedScroll(): void;
				public initAttributes(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet): void;
				public addView(child: globalAndroid.view.View, index: number, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public hasNestedScrollingParent(): boolean;
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public onNestedPreFling(target: globalAndroid.view.View, velocityX: number, velocityY: number): boolean;
				public dispatchNestedScroll(dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number, offsetInWindow: native.Array<number>, type: number): boolean;
				public getParent(): globalAndroid.view.ViewParent;
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class VideoSurfaceView extends globalAndroid.view.SurfaceView {
				public static class: java.lang.Class<androidx.leanback.widget.VideoSurfaceView>;
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
				public sendAccessibilityEvent(eventType: number): void;
				public setTransitionVisibility(visibility: number): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class ViewHolderTask extends java.lang.Object {
				public static class: java.lang.Class<androidx.leanback.widget.ViewHolderTask>;
				/**
				 * Constructs a new instance of the androidx.leanback.widget.ViewHolderTask interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					run(viewHolder0: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
				});
				public constructor();
				public run(viewHolder0: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class ViewsStateBundle extends java.lang.Object {
				public static class: java.lang.Class<androidx.leanback.widget.ViewsStateBundle>;
				public static LIMIT_DEFAULT: number;
				public static UNLIMITED: number;
				public remove(id: number): void;
				public saveAsBundle(): globalAndroid.os.Bundle;
				public loadFromBundle(savedBundle: globalAndroid.os.Bundle): void;
				public setLimitNumber(limitNumber: number): void;
				public loadView(view: globalAndroid.view.View, id: number): void;
				public getSavePolicy(): number;
				public getLimitNumber(): number;
				public saveOffscreenView(view: globalAndroid.view.View, id: number): void;
				public constructor();
				public clear(): void;
				public saveViewUnchecked(view: globalAndroid.view.View, id: number): void;
				public applyPolicyChanges(): void;
				public saveOnScreenView(bundle: globalAndroid.os.Bundle, view: globalAndroid.view.View, id: number): globalAndroid.os.Bundle;
				public setSavePolicy(savePolicy: number): void;
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class Visibility extends java.lang.Object implements java.lang.annotation.Annotation {
				public static class: java.lang.Class<androidx.leanback.widget.Visibility>;
				/**
				 * Constructs a new instance of the androidx.leanback.widget.Visibility interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
				public annotationType(): java.lang.Class<any>;
				public toString(): string;
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export class WindowAlignment extends java.lang.Object {
				public static class: java.lang.Class<androidx.leanback.widget.WindowAlignment>;
				public vertical: androidx.leanback.widget.WindowAlignment.Axis;
				public horizontal: androidx.leanback.widget.WindowAlignment.Axis;
				public mainAxis(): androidx.leanback.widget.WindowAlignment.Axis;
				public reset(): void;
				public secondAxis(): androidx.leanback.widget.WindowAlignment.Axis;
				public setOrientation(orientation: number): void;
				public toString(): string;
				public getOrientation(): number;
			}
			export module WindowAlignment {
				export class Axis extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.widget.WindowAlignment.Axis>;
					public invalidateScrollMax(): void;
					public setWindowAlignmentOffset(offset: number): void;
					public getPaddingMax(): number;
					public getWindowAlignment(): number;
					public setWindowAlignment(windowAlignment: number): void;
					public getMinScroll(): number;
					public setWindowAlignmentOffsetPercent(percent: number): void;
					public isMinUnknown(): boolean;
					public setPadding(paddingMin: number, paddingMax: number): void;
					public getSize(): number;
					public getScroll(viewCenter: number): number;
					public setSize(size: number): void;
					public toString(): string;
					public constructor(name: string);
					public isMaxUnknown(): boolean;
					public getClientSize(): number;
					public getWindowAlignmentOffset(): number;
					public getWindowAlignmentOffsetPercent(): number;
					public updateMinMax(minEdge: number, maxEdge: number, minChildViewCenter: number, maxChildViewCenter: number): void;
					public invalidateScrollMin(): void;
					public getMaxScroll(): number;
					public getPaddingMin(): number;
					public setReversedFlow(reversedFlow: boolean): void;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export module picker {
				export class DatePicker extends androidx.leanback.widget.picker.Picker {
					public static class: java.lang.Class<androidx.leanback.widget.picker.DatePicker>;
					public showContextMenuForChild(originalView: globalAndroid.view.View, x: number, y: number): boolean;
					public getDate(): number;
					public requestTransparentRegion(child: globalAndroid.view.View): void;
					public childDrawableStateChanged(child: globalAndroid.view.View): void;
					public getMinDate(): number;
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
					public onColumnValueChanged(column: number, newVal: number): void;
					public showContextMenuForChild(originalView: globalAndroid.view.View): boolean;
					public getDatePickerFormat(): string;
					public onNestedScroll(target: globalAndroid.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
					public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
					public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
					public requestSendAccessibilityEvent(child: globalAndroid.view.View, event: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
					public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
					public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback, type: number): globalAndroid.view.ActionMode;
					public getLayoutDirection(): number;
					public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
					public onColumnValueChanged(columnIndex: number, newValue: number): void;
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
					public setMaxDate(maxDate: number): void;
					public updateViewLayout(view: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
					public setMinDate(minDate: number): void;
					public bringChildToFront(child: globalAndroid.view.View): void;
					public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
					public onNestedPreScroll(target: globalAndroid.view.View, dx: number, dy: number, consumed: native.Array<number>): void;
					public clearChildFocus(child: globalAndroid.view.View): void;
					public requestLayout(): void;
					public setDatePickerFormat(datePickerFormat: string): void;
					public createContextMenu(menu: globalAndroid.view.ContextMenu): void;
					public getParentForAccessibility(): globalAndroid.view.ViewParent;
					public addView(child: globalAndroid.view.View, index: number, params: globalAndroid.view.ViewGroup.LayoutParams): void;
					public childHasTransientStateChanged(child: globalAndroid.view.View, childHasTransientState: boolean): void;
					public canResolveLayoutDirection(): boolean;
					public onNestedScrollAccepted(child: globalAndroid.view.View, target: globalAndroid.view.View, axes: number): void;
					public getTextAlignment(): number;
					public onDescendantInvalidated(child: globalAndroid.view.View, target: globalAndroid.view.View): void;
					public onNestedPrePerformAccessibilityAction(target: globalAndroid.view.View, action: number, bundle2: globalAndroid.os.Bundle): boolean;
					public updateDate(year: number, month: number, dayOfMonth: number, animation: boolean): void;
					public keyboardNavigationClusterSearch(currentCluster: globalAndroid.view.View, direction: number): globalAndroid.view.View;
					public addView(child: globalAndroid.view.View, width: number, height: number): void;
					public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
					public requestChildFocus(child: globalAndroid.view.View, focused: globalAndroid.view.View): void;
					public onStopNestedScroll(child: globalAndroid.view.View): void;
					public onNestedPreFling(target: globalAndroid.view.View, velocityX: number, velocityY: number): boolean;
					public addView(child: globalAndroid.view.View, index: number): void;
					public getMaxDate(): number;
					public removeView(view: globalAndroid.view.View): void;
					public focusSearch(focused: globalAndroid.view.View, direction: number): globalAndroid.view.View;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export module picker {
				export class Picker extends globalAndroid.widget.FrameLayout {
					public static class: java.lang.Class<androidx.leanback.widget.picker.Picker>;
					public showContextMenuForChild(originalView: globalAndroid.view.View, x: number, y: number): boolean;
					public requestTransparentRegion(child: globalAndroid.view.View): void;
					public getPickerItemTextViewId(): number;
					public childDrawableStateChanged(child: globalAndroid.view.View): void;
					public setSeparators(separators: java.util.List<string>): void;
					public onNestedFling(target: globalAndroid.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
					public setActivatedVisibleItemCount(visiblePickerItems: number): void;
					public isLayoutRequested(): boolean;
					/** @deprecated */
					public invalidateChild(child: globalAndroid.view.View, dirty: globalAndroid.graphics.Rect): void;
					public focusableViewAvailable(v: globalAndroid.view.View): void;
					public focusSearch(direction: number): globalAndroid.view.View;
					public isTextDirectionResolved(): boolean;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
					public dispatchKeyEvent(event: globalAndroid.view.KeyEvent): boolean;
					public getSelectedColumn(): number;
					public setSelectedColumn(columnIndex: number): void;
					public isLayoutDirectionResolved(): boolean;
					public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public showContextMenuForChild(originalView: globalAndroid.view.View): boolean;
					public onNestedScroll(target: globalAndroid.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
					public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
					public setPickerItemTextViewId(textViewId: number): void;
					public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
					public requestSendAccessibilityEvent(child: globalAndroid.view.View, event: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
					public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
					public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback, type: number): globalAndroid.view.ActionMode;
					public getLayoutDirection(): number;
					public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
					public onColumnValueChanged(columnIndex: number, newValue: number): void;
					public onStartNestedScroll(child: globalAndroid.view.View, target: globalAndroid.view.View, nestedScrollAxes: number): boolean;
					public setSeparator(separator: string): void;
					/** @deprecated */
					public invalidateChildInParent(location: native.Array<number>, dirty: globalAndroid.graphics.Rect): globalAndroid.view.ViewParent;
					public recomputeViewAttributes(child: globalAndroid.view.View): void;
					public notifySubtreeAccessibilityStateChanged(child: globalAndroid.view.View, source: globalAndroid.view.View, changeType: number): void;
					public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
					public setVisibleItemCount(pickerItems: number): void;
					public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public addView(child: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
					public constructor(context: globalAndroid.content.Context);
					public getTextDirection(): number;
					public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
					public getVisibleItemCount(): number;
					public requestFitSystemWindows(): void;
					public getActivatedVisibleItemCount(): number;
					public getParent(): globalAndroid.view.ViewParent;
					public isTextAlignmentResolved(): boolean;
					public setColumns(columns: java.util.List<androidx.leanback.widget.picker.PickerColumn>): void;
					public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public sendAccessibilityEvent(eventType: number): void;
					/** @deprecated */
					public getSeparator(): string;
					public getChildVisibleRect(child: globalAndroid.view.View, r: globalAndroid.graphics.Rect, offset: globalAndroid.graphics.Point): boolean;
					public requestChildRectangleOnScreen(child: globalAndroid.view.View, rectangle: globalAndroid.graphics.Rect, immediate: boolean): boolean;
					public canResolveTextAlignment(): boolean;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
					public getPickerItemHeightPixels(): number;
					/** @deprecated */
					public requestFitSystemWindows(): void;
					public addView(child: globalAndroid.view.View): void;
					public setActivated(activated: boolean): void;
					public canResolveTextDirection(): boolean;
					public updateViewLayout(view: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
					public getSeparators(): java.util.List<string>;
					public onRequestFocusInDescendants(direction: number, previouslyFocusedRect: globalAndroid.graphics.Rect): boolean;
					public setColumnValue(columnIndex: number, value: number, runAnimation: boolean): void;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
					public bringChildToFront(child: globalAndroid.view.View): void;
					public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
					public onNestedPreScroll(target: globalAndroid.view.View, dx: number, dy: number, consumed: native.Array<number>): void;
					public clearChildFocus(child: globalAndroid.view.View): void;
					public requestLayout(): void;
					public createContextMenu(menu: globalAndroid.view.ContextMenu): void;
					public getParentForAccessibility(): globalAndroid.view.ViewParent;
					public addView(child: globalAndroid.view.View, index: number, params: globalAndroid.view.ViewGroup.LayoutParams): void;
					public getColumnAt(colIndex: number): androidx.leanback.widget.picker.PickerColumn;
					public childHasTransientStateChanged(child: globalAndroid.view.View, childHasTransientState: boolean): void;
					public canResolveLayoutDirection(): boolean;
					public removeOnValueChangedListener(listener: androidx.leanback.widget.picker.Picker.PickerValueListener): void;
					public onNestedScrollAccepted(child: globalAndroid.view.View, target: globalAndroid.view.View, axes: number): void;
					public getTextAlignment(): number;
					public setColumnAt(columnIndex: number, column: androidx.leanback.widget.picker.PickerColumn): void;
					public onDescendantInvalidated(child: globalAndroid.view.View, target: globalAndroid.view.View): void;
					public onNestedPrePerformAccessibilityAction(target: globalAndroid.view.View, action: number, bundle2: globalAndroid.os.Bundle): boolean;
					public getColumnsCount(): number;
					public keyboardNavigationClusterSearch(currentCluster: globalAndroid.view.View, direction: number): globalAndroid.view.View;
					public addView(child: globalAndroid.view.View, width: number, height: number): void;
					public getPickerItemLayoutId(): number;
					public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
					public addOnValueChangedListener(listener: androidx.leanback.widget.picker.Picker.PickerValueListener): void;
					public requestChildFocus(child: globalAndroid.view.View, focused: globalAndroid.view.View): void;
					public onStopNestedScroll(child: globalAndroid.view.View): void;
					public onNestedPreFling(target: globalAndroid.view.View, velocityX: number, velocityY: number): boolean;
					public addView(child: globalAndroid.view.View, index: number): void;
					public removeView(view: globalAndroid.view.View): void;
					public focusSearch(focused: globalAndroid.view.View, direction: number): globalAndroid.view.View;
				}
				export module Picker {
					export class PickerScrollArrayAdapter extends androidx.recyclerview.widget.RecyclerView.Adapter<androidx.leanback.widget.picker.Picker.ViewHolder> {
						public static class: java.lang.Class<androidx.leanback.widget.picker.Picker.PickerScrollArrayAdapter>;
						public onBindViewHolder(holder: any, position: number, payloads: java.util.List<any>): void;
						public onViewAttachedToWindow(holder: androidx.leanback.widget.picker.Picker.ViewHolder): void;
						public onCreateViewHolder(parent: globalAndroid.view.ViewGroup, viewType: number): androidx.leanback.widget.picker.Picker.ViewHolder;
						public onBindViewHolder(viewHolder0: any, int1: number): void;
						public getItemCount(): number;
						public onViewAttachedToWindow(holder: any): void;
						public onCreateViewHolder(viewGroup0: globalAndroid.view.ViewGroup, int1: number): any;
						public onBindViewHolder(holder: androidx.leanback.widget.picker.Picker.ViewHolder, position: number): void;
					}
					export class PickerValueListener extends java.lang.Object {
						public static class: java.lang.Class<androidx.leanback.widget.picker.Picker.PickerValueListener>;
						/**
						 * Constructs a new instance of the androidx.leanback.widget.picker.Picker$PickerValueListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onValueChanged(picker0: androidx.leanback.widget.picker.Picker, int1: number): void;
						});
						public constructor();
						public onValueChanged(picker0: androidx.leanback.widget.picker.Picker, int1: number): void;
					}
					export class ViewHolder extends androidx.recyclerview.widget.RecyclerView.ViewHolder {
						public static class: java.lang.Class<androidx.leanback.widget.picker.Picker.ViewHolder>;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export module picker {
				export class PickerColumn extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.widget.picker.PickerColumn>;
					public setCurrentValue(value: number): void;
					public getStaticLabels(): native.Array<string>;
					public getCount(): number;
					public setMaxValue(maxValue: number): void;
					public setLabelFormat(labelFormat: string): void;
					public setMinValue(minValue: number): void;
					public constructor();
					public setStaticLabels(labels: native.Array<string>): void;
					public getLabelFor(value: number): string;
					public getMaxValue(): number;
					public getLabelFormat(): string;
					public getCurrentValue(): number;
					public getMinValue(): number;
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export module picker {
				export class PickerUtility extends java.lang.Object {
					public static class: java.lang.Class<androidx.leanback.widget.picker.PickerUtility>;
					public static getTimeConstantInstance(locale: java.util.Locale, resources: globalAndroid.content.res.Resources): androidx.leanback.widget.picker.PickerUtility.TimeConstant;
					public static getCalendarForLocale(oldCalendar: java.util.Calendar, locale: java.util.Locale): java.util.Calendar;
					public static createStringIntArrays(firstNumber: number, lastNumber: number, format: string): native.Array<string>;
					public static getDateConstantInstance(locale: java.util.Locale, resources: globalAndroid.content.res.Resources): androidx.leanback.widget.picker.PickerUtility.DateConstant;
				}
				export module PickerUtility {
					export class DateConstant extends java.lang.Object {
						public static class: java.lang.Class<androidx.leanback.widget.picker.PickerUtility.DateConstant>;
						public locale: java.util.Locale;
						public months: native.Array<string>;
						public days: native.Array<string>;
					}
					export class TimeConstant extends java.lang.Object {
						public static class: java.lang.Class<androidx.leanback.widget.picker.PickerUtility.TimeConstant>;
						public locale: java.util.Locale;
						public hours12: native.Array<string>;
						public hours24: native.Array<string>;
						public minutes: native.Array<string>;
						public ampm: native.Array<string>;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module leanback {
		export module widget {
			export module picker {
				export class TimePicker extends androidx.leanback.widget.picker.Picker {
					public static class: java.lang.Class<androidx.leanback.widget.picker.TimePicker>;
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
					public setHour(hour: number): void;
					public onNestedScroll(target: globalAndroid.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
					public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
					public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
					public requestSendAccessibilityEvent(child: globalAndroid.view.View, event: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
					public setIs24Hour(is24Hour: boolean): void;
					public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
					public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback, type: number): globalAndroid.view.ActionMode;
					public getLayoutDirection(): number;
					public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
					public onColumnValueChanged(columnIndex: number, newValue: number): void;
					public onStartNestedScroll(child: globalAndroid.view.View, target: globalAndroid.view.View, nestedScrollAxes: number): boolean;
					/** @deprecated */
					public invalidateChildInParent(location: native.Array<number>, dirty: globalAndroid.graphics.Rect): globalAndroid.view.ViewParent;
					public recomputeViewAttributes(child: globalAndroid.view.View): void;
					public notifySubtreeAccessibilityStateChanged(child: globalAndroid.view.View, source: globalAndroid.view.View, changeType: number): void;
					public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
					public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public getHour(): number;
					public setMinute(minute: number): void;
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
					public isPm(): boolean;
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
					public is24Hour(): boolean;
					public addView(child: globalAndroid.view.View, width: number, height: number): void;
					public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
					public requestChildFocus(child: globalAndroid.view.View, focused: globalAndroid.view.View): void;
					public onStopNestedScroll(child: globalAndroid.view.View): void;
					public onNestedPreFling(target: globalAndroid.view.View, velocityX: number, velocityY: number): boolean;
					public addView(child: globalAndroid.view.View, index: number): void;
					public getMinute(): number;
					public removeView(view: globalAndroid.view.View): void;
					public focusSearch(focused: globalAndroid.view.View, direction: number): globalAndroid.view.View;
				}
			}
		}
	}
}

//Generics information:
//androidx.leanback.app.BrowseFragment.FragmentFactory:1
//androidx.leanback.app.BrowseFragment.MainFragmentAdapter:1
//androidx.leanback.app.BrowseFragment.MainFragmentRowsAdapter:1
//androidx.leanback.app.BrowseSupportFragment.FragmentFactory:1
//androidx.leanback.app.BrowseSupportFragment.MainFragmentAdapter:1
//androidx.leanback.app.BrowseSupportFragment.MainFragmentRowsAdapter:1
//androidx.leanback.media.PlaybackBannerControlGlue:1
//androidx.leanback.media.PlaybackBaseControlGlue:1
//androidx.leanback.media.PlaybackTransportControlGlue:1
//androidx.leanback.widget.BaseOnItemViewClickedListener:1
//androidx.leanback.widget.BaseOnItemViewSelectedListener:1
//androidx.leanback.widget.DiffCallback:1
//androidx.leanback.widget.GuidedAction.BuilderBase:1
//androidx.leanback.widget.GuidedDatePickerAction.BuilderBase:1
//androidx.leanback.widget.Parallax:1
//androidx.leanback.widget.Parallax.PropertyMarkerValue:1
//androidx.leanback.widget.ParallaxTarget.DirectPropertyTarget:2

