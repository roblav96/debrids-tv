declare module androidx {
	export module coordinatorlayout {
		export module widget {
			export class CoordinatorLayout extends globalAndroid.view.ViewGroup implements androidx.core.view.NestedScrollingParent2 {
				public static class: java.lang.Class<androidx.coordinatorlayout.widget.CoordinatorLayout>;
				/** @deprecated */
				public invalidateChild(child: globalAndroid.view.View, dirty: globalAndroid.graphics.Rect): void;
				public focusSearch(direction: number): globalAndroid.view.View;
				public getDependencies(child: globalAndroid.view.View): java.util.List<globalAndroid.view.View>;
				public setOnHierarchyChangeListener(listener: globalAndroid.view.ViewGroup.OnHierarchyChangeListener): void;
				public childDrawableStateChanged(child: globalAndroid.view.View): void;
				public onStopNestedScroll(child: globalAndroid.view.View): void;
				public isLayoutRequested(): boolean;
				public onNestedPrePerformAccessibilityAction(target: globalAndroid.view.View, action: number, bundle2: globalAndroid.os.Bundle): boolean;
				public getSuggestedMinimumHeight(): number;
				public getTextDirection(): number;
				public onNestedScrollAccepted(child: globalAndroid.view.View, target: globalAndroid.view.View, nestedScrollAxes: number): void;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
				public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public onLayout(changed: boolean, l: number, t: number, r: number, b: number): void;
				/** @deprecated */
				public invalidateChildInParent(location: native.Array<number>, dirty: globalAndroid.graphics.Rect): globalAndroid.view.ViewParent;
				public getParentForAccessibility(): globalAndroid.view.ViewParent;
				public onInterceptTouchEvent(ev: globalAndroid.view.MotionEvent): boolean;
				public onNestedFling(target: globalAndroid.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
				public doViewsOverlap(first: globalAndroid.view.View, second: globalAndroid.view.View): boolean;
				public generateLayoutParams(attrs: globalAndroid.util.AttributeSet): globalAndroid.view.ViewGroup.LayoutParams;
				public setVisibility(visibility: number): void;
				public keyboardNavigationClusterSearch(currentCluster: globalAndroid.view.View, direction: number): globalAndroid.view.View;
				public verifyDrawable(who: globalAndroid.graphics.drawable.Drawable): boolean;
				public isTextDirectionResolved(): boolean;
				public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
				public onMeasureChild(child: globalAndroid.view.View, parentWidthMeasureSpec: number, widthUsed: number, parentHeightMeasureSpec: number, heightUsed: number): void;
				public generateLayoutParams(p: globalAndroid.view.ViewGroup.LayoutParams): androidx.coordinatorlayout.widget.CoordinatorLayout.LayoutParams;
				public showContextMenuForChild(originalView: globalAndroid.view.View): boolean;
				public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public recomputeViewAttributes(child: globalAndroid.view.View): void;
				public isPointInChildBounds(child: globalAndroid.view.View, x: number, y: number): boolean;
				public onDraw(canvas: globalAndroid.graphics.Canvas): void;
				public onStartNestedScroll(child: globalAndroid.view.View, target: globalAndroid.view.View, axes: number, type: number): boolean;
				public drawableStateChanged(): void;
				public isLayoutDirectionResolved(): boolean;
				public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onLayout(boolean0: boolean, int1: number, int2: number, int3: number, int4: number): void;
				public getStatusBarBackground(): globalAndroid.graphics.drawable.Drawable;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
				public updateViewLayout(view: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public onNestedScroll(target: globalAndroid.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
				public focusSearch(focused: globalAndroid.view.View, direction: number): globalAndroid.view.View;
				/** @deprecated */
				public requestFitSystemWindows(): void;
				public showContextMenuForChild(originalView: globalAndroid.view.View, x: number, y: number): boolean;
				public bringChildToFront(child: globalAndroid.view.View): void;
				public clearChildFocus(child: globalAndroid.view.View): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public onLayoutChild(child: globalAndroid.view.View, layoutDirection: number): void;
				public dispatchDependentViewsChanged(view: globalAndroid.view.View): void;
				public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public addView(child: globalAndroid.view.View, index: number, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public getSuggestedMinimumWidth(): number;
				public onDraw(c: globalAndroid.graphics.Canvas): void;
				public onTouchEvent(event: globalAndroid.view.MotionEvent): boolean;
				public drawChild(canvas: globalAndroid.graphics.Canvas, child: globalAndroid.view.View, drawingTime: number): boolean;
				public onAttachedToWindow(): void;
				public onNestedScroll(target: globalAndroid.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number, type: number): void;
				public getParent(): globalAndroid.view.ViewParent;
				public constructor(context: globalAndroid.content.Context);
				public checkLayoutParams(p: globalAndroid.view.ViewGroup.LayoutParams): boolean;
				public onNestedScrollAccepted(child: globalAndroid.view.View, target: globalAndroid.view.View, axes: number): void;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
				public setOnHierarchyChangeListener(onHierarchyChangeListener: globalAndroid.view.ViewGroup.OnHierarchyChangeListener): void;
				public onStopNestedScroll(target: globalAndroid.view.View, type: number): void;
				public sendAccessibilityEvent(eventType: number): void;
				public addView(child: globalAndroid.view.View, index: number): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
				public requestFitSystemWindows(): void;
				public onRestoreInstanceState(state: globalAndroid.os.Parcelable): void;
				public setStatusBarBackgroundColor(color: number): void;
				public getNestedScrollAxes(): number;
				public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback, type: number): globalAndroid.view.ActionMode;
				public getTextAlignment(): number;
				public generateLayoutParams(p: globalAndroid.view.ViewGroup.LayoutParams): globalAndroid.view.ViewGroup.LayoutParams;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
				public getDependents(child: globalAndroid.view.View): java.util.List<globalAndroid.view.View>;
				public addView(child: globalAndroid.view.View, width: number, height: number): void;
				public onNestedPreScroll(target: globalAndroid.view.View, dx: number, dy: number, consumed: native.Array<number>, type: number): void;
				public childHasTransientStateChanged(child: globalAndroid.view.View, childHasTransientState: boolean): void;
				public onDetachedFromWindow(): void;
				public focusableViewAvailable(v: globalAndroid.view.View): void;
				public setStatusBarBackground(bg: globalAndroid.graphics.drawable.Drawable): void;
				public generateDefaultLayoutParams(): globalAndroid.view.ViewGroup.LayoutParams;
				public getLastWindowInsets(): androidx.core.view.WindowInsetsCompat;
				public addView(child: globalAndroid.view.View): void;
				public requestSendAccessibilityEvent(child: globalAndroid.view.View, event: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
				public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
				public isTextAlignmentResolved(): boolean;
				public getLayoutDirection(): number;
				public addView(child: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public canResolveTextDirection(): boolean;
				public generateDefaultLayoutParams(): androidx.coordinatorlayout.widget.CoordinatorLayout.LayoutParams;
				public canResolveTextAlignment(): boolean;
				public notifySubtreeAccessibilityStateChanged(child: globalAndroid.view.View, source: globalAndroid.view.View, changeType: number): void;
				public setFitsSystemWindows(fitSystemWindows: boolean): void;
				public requestLayout(): void;
				public onStartNestedScroll(child: globalAndroid.view.View, target: globalAndroid.view.View, nestedScrollAxes: number): boolean;
				public requestTransparentRegion(child: globalAndroid.view.View): void;
				public generateLayoutParams(attrs: globalAndroid.util.AttributeSet): androidx.coordinatorlayout.widget.CoordinatorLayout.LayoutParams;
				public setStatusBarBackgroundResource(resId: number): void;
				public onStopNestedScroll(target: globalAndroid.view.View): void;
				public onNestedPreScroll(target: globalAndroid.view.View, dx: number, dy: number, consumed: native.Array<number>): void;
				public onDescendantInvalidated(child: globalAndroid.view.View, target: globalAndroid.view.View): void;
				public removeView(view: globalAndroid.view.View): void;
				public onSaveInstanceState(): globalAndroid.os.Parcelable;
				public requestChildRectangleOnScreen(child: globalAndroid.view.View, rectangle: globalAndroid.graphics.Rect, immediate: boolean): boolean;
				public getChildVisibleRect(child: globalAndroid.view.View, r: globalAndroid.graphics.Rect, offset: globalAndroid.graphics.Point): boolean;
				public requestChildFocus(child: globalAndroid.view.View, focused: globalAndroid.view.View): void;
				public createContextMenu(menu: globalAndroid.view.ContextMenu): void;
				public onTouchEvent(ev: globalAndroid.view.MotionEvent): boolean;
				public canResolveLayoutDirection(): boolean;
				public onNestedScrollAccepted(child: globalAndroid.view.View, target: globalAndroid.view.View, nestedScrollAxes: number, type: number): void;
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public onNestedPreFling(target: globalAndroid.view.View, velocityX: number, velocityY: number): boolean;
			}
			export module CoordinatorLayout {
				export class AttachedBehavior extends java.lang.Object {
					public static class: java.lang.Class<androidx.coordinatorlayout.widget.CoordinatorLayout.AttachedBehavior>;
					/**
					 * Constructs a new instance of the androidx.coordinatorlayout.widget.CoordinatorLayout() when extending the interface class.
					 */
					public constructor(implementation: {
						getBehavior(): androidx.coordinatorlayout.widget.CoordinatorLayout.Behavior<any>;
					});
					public constructor();
					public getBehavior(): androidx.coordinatorlayout.widget.CoordinatorLayout.Behavior<any>;
				}
				export abstract class Behavior<V>  extends java.lang.Object {
					public static class: java.lang.Class<androidx.coordinatorlayout.widget.CoordinatorLayout.Behavior<any>>;
					public onInterceptTouchEvent(parent: androidx.coordinatorlayout.widget.CoordinatorLayout, child: V, ev: globalAndroid.view.MotionEvent): boolean;
					public onSaveInstanceState(parent: androidx.coordinatorlayout.widget.CoordinatorLayout, child: V): globalAndroid.os.Parcelable;
					public onNestedFling(coordinatorLayout: androidx.coordinatorlayout.widget.CoordinatorLayout, child: V, target: globalAndroid.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
					public onRequestChildRectangleOnScreen(coordinatorLayout: androidx.coordinatorlayout.widget.CoordinatorLayout, child: V, rectangle: globalAndroid.graphics.Rect, immediate: boolean): boolean;
					public getScrimColor(parent: androidx.coordinatorlayout.widget.CoordinatorLayout, child: V): number;
					public onNestedScrollAccepted(coordinatorLayout: androidx.coordinatorlayout.widget.CoordinatorLayout, child: V, directTargetChild: globalAndroid.view.View, target: globalAndroid.view.View, axes: number, type: number): void;
					/** @deprecated */
					public onNestedPreScroll(coordinatorLayout: androidx.coordinatorlayout.widget.CoordinatorLayout, child: V, target: globalAndroid.view.View, dx: number, dy: number, consumed: native.Array<number>): void;
					public onDependentViewRemoved(parent: androidx.coordinatorlayout.widget.CoordinatorLayout, child: V, dependency: globalAndroid.view.View): void;
					public static setTag(child: globalAndroid.view.View, tag: any): void;
					public layoutDependsOn(parent: androidx.coordinatorlayout.widget.CoordinatorLayout, child: V, dependency: globalAndroid.view.View): boolean;
					/** @deprecated */
					public onStopNestedScroll(coordinatorLayout: androidx.coordinatorlayout.widget.CoordinatorLayout, child: V, target: globalAndroid.view.View): void;
					public constructor();
					public getScrimOpacity(parent: androidx.coordinatorlayout.widget.CoordinatorLayout, child: V): number;
					public onRestoreInstanceState(parent: androidx.coordinatorlayout.widget.CoordinatorLayout, child: V, state: globalAndroid.os.Parcelable): void;
					public onStartNestedScroll(coordinatorLayout: androidx.coordinatorlayout.widget.CoordinatorLayout, child: V, directTargetChild: globalAndroid.view.View, target: globalAndroid.view.View, axes: number, type: number): boolean;
					/** @deprecated */
					public onNestedScroll(coordinatorLayout: androidx.coordinatorlayout.widget.CoordinatorLayout, child: V, target: globalAndroid.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
					public onNestedPreScroll(coordinatorLayout: androidx.coordinatorlayout.widget.CoordinatorLayout, child: V, target: globalAndroid.view.View, dx: number, dy: number, consumed: native.Array<number>, type: number): void;
					public onApplyWindowInsets(coordinatorLayout: androidx.coordinatorlayout.widget.CoordinatorLayout, child: V, insets: androidx.core.view.WindowInsetsCompat): androidx.core.view.WindowInsetsCompat;
					public static getTag(child: globalAndroid.view.View): any;
					public onAttachedToLayoutParams(params: androidx.coordinatorlayout.widget.CoordinatorLayout.LayoutParams): void;
					public blocksInteractionBelow(parent: androidx.coordinatorlayout.widget.CoordinatorLayout, child: V): boolean;
					public onTouchEvent(parent: androidx.coordinatorlayout.widget.CoordinatorLayout, child: V, ev: globalAndroid.view.MotionEvent): boolean;
					public onDetachedFromLayoutParams(): void;
					public getInsetDodgeRect(parent: androidx.coordinatorlayout.widget.CoordinatorLayout, child: V, rect: globalAndroid.graphics.Rect): boolean;
					/** @deprecated */
					public onStartNestedScroll(coordinatorLayout: androidx.coordinatorlayout.widget.CoordinatorLayout, child: V, directTargetChild: globalAndroid.view.View, target: globalAndroid.view.View, axes: number): boolean;
					public onNestedScroll(coordinatorLayout: androidx.coordinatorlayout.widget.CoordinatorLayout, child: V, target: globalAndroid.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number, type: number): void;
					public onMeasureChild(parent: androidx.coordinatorlayout.widget.CoordinatorLayout, child: V, parentWidthMeasureSpec: number, widthUsed: number, parentHeightMeasureSpec: number, heightUsed: number): boolean;
					/** @deprecated */
					public onNestedScrollAccepted(coordinatorLayout: androidx.coordinatorlayout.widget.CoordinatorLayout, child: V, directTargetChild: globalAndroid.view.View, target: globalAndroid.view.View, axes: number): void;
					public onStopNestedScroll(coordinatorLayout: androidx.coordinatorlayout.widget.CoordinatorLayout, child: V, target: globalAndroid.view.View, type: number): void;
					public onLayoutChild(parent: androidx.coordinatorlayout.widget.CoordinatorLayout, child: V, layoutDirection: number): boolean;
					public onNestedPreFling(coordinatorLayout: androidx.coordinatorlayout.widget.CoordinatorLayout, child: V, target: globalAndroid.view.View, velocityX: number, velocityY: number): boolean;
					public onDependentViewChanged(parent: androidx.coordinatorlayout.widget.CoordinatorLayout, child: V, dependency: globalAndroid.view.View): boolean;
				}
				export class DefaultBehavior extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.coordinatorlayout.widget.CoordinatorLayout.DefaultBehavior>;
					/**
					 * Constructs a new instance of the androidx.coordinatorlayout.widget.CoordinatorLayout() when extending the interface class.
					 */
					public constructor(implementation: {
						value(): java.lang.Class<any>;
						equals(object0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(obj: any): boolean;
					public toString(): string;
					public value(): java.lang.Class<any>;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
				export class DispatchChangeEvent extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.coordinatorlayout.widget.CoordinatorLayout.DispatchChangeEvent>;
					/**
					 * Constructs a new instance of the androidx.coordinatorlayout.widget.CoordinatorLayout() when extending the interface class.
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
				export class HierarchyChangeListener extends java.lang.Object implements globalAndroid.view.ViewGroup.OnHierarchyChangeListener {
					public static class: java.lang.Class<androidx.coordinatorlayout.widget.CoordinatorLayout.HierarchyChangeListener>;
					public onChildViewAdded(parent: globalAndroid.view.View, child: globalAndroid.view.View): void;
					public onChildViewRemoved(parent: globalAndroid.view.View, child: globalAndroid.view.View): void;
				}
				export class LayoutParams extends globalAndroid.view.ViewGroup.MarginLayoutParams {
					public static class: java.lang.Class<androidx.coordinatorlayout.widget.CoordinatorLayout.LayoutParams>;
					public gravity: number;
					public anchorGravity: number;
					public keyline: number;
					public insetEdge: number;
					public dodgeInsetEdges: number;
					public constructor(p: androidx.coordinatorlayout.widget.CoordinatorLayout.LayoutParams);
					public constructor(source: globalAndroid.view.ViewGroup.LayoutParams);
					public setBehavior(behavior: androidx.coordinatorlayout.widget.CoordinatorLayout.Behavior<any>): void;
					public constructor(c: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
					public constructor(p: globalAndroid.view.ViewGroup.MarginLayoutParams);
					public getAnchorId(): number;
					public getBehavior(): androidx.coordinatorlayout.widget.CoordinatorLayout.Behavior<any>;
					public constructor(width: number, height: number);
					public constructor(p: globalAndroid.view.ViewGroup.LayoutParams);
					public setAnchorId(id: number): void;
					public constructor(source: globalAndroid.view.ViewGroup.MarginLayoutParams);
				}
				export class OnPreDrawListener extends java.lang.Object implements globalAndroid.view.ViewTreeObserver.OnPreDrawListener {
					public static class: java.lang.Class<androidx.coordinatorlayout.widget.CoordinatorLayout.OnPreDrawListener>;
					public onPreDraw(): boolean;
				}
				export class SavedState extends androidx.customview.view.AbsSavedState {
					public static class: java.lang.Class<androidx.coordinatorlayout.widget.CoordinatorLayout.SavedState>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<androidx.coordinatorlayout.widget.CoordinatorLayout.SavedState>;
					public constructor(source: globalAndroid.os.Parcel);
					public writeToParcel(dest: globalAndroid.os.Parcel, flags: number): void;
					public describeContents(): number;
					public constructor(superState: globalAndroid.os.Parcelable);
					public constructor(source: globalAndroid.os.Parcel, loader: java.lang.ClassLoader);
				}
				export class ViewElevationComparator extends java.util.Comparator<globalAndroid.view.View> {
					public static class: java.lang.Class<androidx.coordinatorlayout.widget.CoordinatorLayout.ViewElevationComparator>;
					public equals(obj: any): boolean;
					public static nullsFirst(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
					public thenComparing(keyExtractor: any /* any*/): java.util.Comparator<any>;
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
					public compare(lhs: globalAndroid.view.View, rhs: globalAndroid.view.View): number;
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
	export module coordinatorlayout {
		export module widget {
			export class DirectedAcyclicGraph<T>  extends java.lang.Object {
				public static class: java.lang.Class<androidx.coordinatorlayout.widget.DirectedAcyclicGraph<any>>;
				public hasOutgoingEdges(node: T): boolean;
				public clear(): void;
				public getSortedList(): java.util.ArrayList<T>;
				public addNode(node: T): void;
				public getOutgoingEdges(node: T): java.util.List<T>;
				public addEdge(node: T, incomingEdge: T): void;
				public getIncomingEdges(node: T): java.util.List<any>;
				public contains(node: T): boolean;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module coordinatorlayout {
		export module widget {
			export class ViewGroupUtils extends java.lang.Object {
				public static class: java.lang.Class<androidx.coordinatorlayout.widget.ViewGroupUtils>;
				public static getDescendantRect(parent: globalAndroid.view.ViewGroup, descendant: globalAndroid.view.View, out: globalAndroid.graphics.Rect): void;
			}
		}
	}
}

//Generics information:
//androidx.coordinatorlayout.widget.CoordinatorLayout.Behavior:1
//androidx.coordinatorlayout.widget.DirectedAcyclicGraph:1

