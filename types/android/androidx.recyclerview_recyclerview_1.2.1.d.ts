declare module androidx {
	export module recyclerview {
		export module widget {
			export class AdapterHelper extends java.lang.Object implements androidx.recyclerview.widget.OpReorderer.Callback {
				public static class: java.lang.Class<androidx.recyclerview.widget.AdapterHelper>;
				public obtainUpdateOp(cmd: number, positionStart: number, itemCount: number, payload: any): androidx.recyclerview.widget.AdapterHelper.UpdateOp;
				public applyPendingUpdatesToPosition(position: number): number;
				public recycleUpdateOp(op: androidx.recyclerview.widget.AdapterHelper.UpdateOp): void;
			}
			export module AdapterHelper {
				export class Callback extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.AdapterHelper.Callback>;
					/**
					 * Constructs a new instance of the androidx.recyclerview.widget.AdapterHelper() when extending the interface class.
					 */
					public constructor(implementation: {
						findViewHolder(int0: number): androidx.recyclerview.widget.RecyclerView.ViewHolder;
						offsetPositionsForRemovingInvisible(int0: number, int1: number): void;
						offsetPositionsForRemovingLaidOutOrNewView(int0: number, int1: number): void;
						markViewHoldersUpdated(int0: number, int1: number, object2: any): void;
						onDispatchFirstPass(updateOp0: androidx.recyclerview.widget.AdapterHelper.UpdateOp): void;
						onDispatchSecondPass(updateOp0: androidx.recyclerview.widget.AdapterHelper.UpdateOp): void;
						offsetPositionsForAdd(int0: number, int1: number): void;
						offsetPositionsForMove(int0: number, int1: number): void;
					});
					public constructor();
					public findViewHolder(int0: number): androidx.recyclerview.widget.RecyclerView.ViewHolder;
					public markViewHoldersUpdated(int0: number, int1: number, object2: any): void;
					public offsetPositionsForRemovingLaidOutOrNewView(int0: number, int1: number): void;
					public offsetPositionsForRemovingInvisible(int0: number, int1: number): void;
					public onDispatchFirstPass(updateOp0: androidx.recyclerview.widget.AdapterHelper.UpdateOp): void;
					public offsetPositionsForMove(int0: number, int1: number): void;
					public offsetPositionsForAdd(int0: number, int1: number): void;
					public onDispatchSecondPass(updateOp0: androidx.recyclerview.widget.AdapterHelper.UpdateOp): void;
				}
				export class UpdateOp extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.AdapterHelper.UpdateOp>;
					public toString(): string;
					public equals(obj: any): boolean;
					public equals(o: any): boolean;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module androidx {
	export module recyclerview {
		export module widget {
			export class AdapterListUpdateCallback extends java.lang.Object implements androidx.recyclerview.widget.ListUpdateCallback {
				public static class: java.lang.Class<androidx.recyclerview.widget.AdapterListUpdateCallback>;
				public constructor(adapter: androidx.recyclerview.widget.RecyclerView.Adapter<any>);
				public onInserted(position: number, count: number): void;
				public onRemoved(position: number, count: number): void;
				public onChanged(position: number, count: number, payload: any): void;
				public onMoved(fromPosition: number, toPosition: number): void;
			}
		}
	}
}

declare module androidx {
	export module recyclerview {
		export module widget {
			export class AsyncDifferConfig<T>  extends java.lang.Object {
				public static class: java.lang.Class<androidx.recyclerview.widget.AsyncDifferConfig<any>>;
				public getDiffCallback(): androidx.recyclerview.widget.DiffUtil.ItemCallback<T>;
				public getBackgroundThreadExecutor(): java.util.concurrent.Executor;
				public getMainThreadExecutor(): java.util.concurrent.Executor;
			}
			export module AsyncDifferConfig {
				export class Builder<T>  extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.AsyncDifferConfig.Builder<any>>;
					public setBackgroundThreadExecutor(executor: java.util.concurrent.Executor): androidx.recyclerview.widget.AsyncDifferConfig.Builder<T>;
					public setMainThreadExecutor(executor: java.util.concurrent.Executor): androidx.recyclerview.widget.AsyncDifferConfig.Builder<T>;
					public build(): androidx.recyclerview.widget.AsyncDifferConfig<T>;
					public constructor(diffCallback: androidx.recyclerview.widget.DiffUtil.ItemCallback<T>);
				}
			}
		}
	}
}

declare module androidx {
	export module recyclerview {
		export module widget {
			export class AsyncListDiffer<T>  extends java.lang.Object {
				public static class: java.lang.Class<androidx.recyclerview.widget.AsyncListDiffer<any>>;
				public constructor(adapter: androidx.recyclerview.widget.RecyclerView.Adapter<any>, diffCallback: androidx.recyclerview.widget.DiffUtil.ItemCallback<T>);
				public submitList(newList: java.util.List<T>, commitCallback: java.lang.Runnable): void;
				public getCurrentList(): java.util.List<T>;
				public constructor(listUpdateCallback: androidx.recyclerview.widget.ListUpdateCallback, config: androidx.recyclerview.widget.AsyncDifferConfig<T>);
				public addListListener(listener: androidx.recyclerview.widget.AsyncListDiffer.ListListener<T>): void;
				public removeListListener(listener: androidx.recyclerview.widget.AsyncListDiffer.ListListener<T>): void;
				public submitList(newList: java.util.List<T>): void;
			}
			export module AsyncListDiffer {
				export class ListListener<T>  extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.AsyncListDiffer.ListListener<any>>;
					/**
					 * Constructs a new instance of the androidx.recyclerview.widget.AsyncListDiffer() when extending the interface class.
					 */
					public constructor(implementation: {
						onCurrentListChanged(list0: java.util.List<T>, list1: java.util.List<T>): void;
					});
					public constructor();
					public onCurrentListChanged(list0: java.util.List<T>, list1: java.util.List<T>): void;
				}
				export class MainThreadExecutor extends java.lang.Object implements java.util.concurrent.Executor {
					public static class: java.lang.Class<androidx.recyclerview.widget.AsyncListDiffer.MainThreadExecutor>;
					public execute(command: java.lang.Runnable): void;
				}
			}
		}
	}
}

declare module androidx {
	export module recyclerview {
		export module widget {
			export class AsyncListUtil<T>  extends java.lang.Object {
				public static class: java.lang.Class<androidx.recyclerview.widget.AsyncListUtil<any>>;
				public constructor(klass: java.lang.Class<T>, tileSize: number, dataCallback: androidx.recyclerview.widget.AsyncListUtil.DataCallback<T>, viewCallback: androidx.recyclerview.widget.AsyncListUtil.ViewCallback);
				public onRangeChanged(): void;
				public refresh(): void;
				public getItem(position: number): T;
				public getItemCount(): number;
			}
			export module AsyncListUtil {
				export abstract class DataCallback<T>  extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.AsyncListUtil.DataCallback<any>>;
					public refreshData(): number;
					public getMaxCachedTiles(): number;
					public constructor();
					public recycleData(data: native.Array<T>, itemCount: number): void;
					public fillData(objects0: native.Array<T>, int1: number, int2: number): void;
				}
				export abstract class ViewCallback extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.AsyncListUtil.ViewCallback>;
					public static HINT_SCROLL_NONE: number;
					public static HINT_SCROLL_DESC: number;
					public static HINT_SCROLL_ASC: number;
					public constructor();
					public extendRangeInto(range: native.Array<number>, outRange: native.Array<number>, scrollHint: number): void;
					public getItemRangeInto(ints0: native.Array<number>): void;
					public onItemLoaded(int0: number): void;
					public onDataRefresh(): void;
				}
			}
		}
	}
}

declare module androidx {
	export module recyclerview {
		export module widget {
			export class BatchingListUpdateCallback extends java.lang.Object implements androidx.recyclerview.widget.ListUpdateCallback {
				public static class: java.lang.Class<androidx.recyclerview.widget.BatchingListUpdateCallback>;
				public onInserted(position: number, count: number): void;
				public onRemoved(position: number, count: number): void;
				public onChanged(position: number, count: number, payload: any): void;
				public dispatchLastEvent(): void;
				public constructor(callback: androidx.recyclerview.widget.ListUpdateCallback);
				public onMoved(fromPosition: number, toPosition: number): void;
			}
		}
	}
}

declare module androidx {
	export module recyclerview {
		export module widget {
			export class ChildHelper extends java.lang.Object {
				public static class: java.lang.Class<androidx.recyclerview.widget.ChildHelper>;
				public toString(): string;
			}
			export module ChildHelper {
				export class Bucket extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.ChildHelper.Bucket>;
					public toString(): string;
				}
				export class Callback extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.ChildHelper.Callback>;
					/**
					 * Constructs a new instance of the androidx.recyclerview.widget.ChildHelper() when extending the interface class.
					 */
					public constructor(implementation: {
						getChildCount(): number;
						addView(view0: globalAndroid.view.View, int1: number): void;
						indexOfChild(view0: globalAndroid.view.View): number;
						removeViewAt(int0: number): void;
						getChildAt(int0: number): globalAndroid.view.View;
						removeAllViews(): void;
						getChildViewHolder(view0: globalAndroid.view.View): androidx.recyclerview.widget.RecyclerView.ViewHolder;
						attachViewToParent(view0: globalAndroid.view.View, int1: number, layoutParams2: globalAndroid.view.ViewGroup.LayoutParams): void;
						detachViewFromParent(int0: number): void;
						onEnteredHiddenState(view0: globalAndroid.view.View): void;
						onLeftHiddenState(view0: globalAndroid.view.View): void;
					});
					public constructor();
					public removeAllViews(): void;
					public attachViewToParent(view0: globalAndroid.view.View, int1: number, layoutParams2: globalAndroid.view.ViewGroup.LayoutParams): void;
					public getChildCount(): number;
					public addView(view0: globalAndroid.view.View, int1: number): void;
					public getChildAt(int0: number): globalAndroid.view.View;
					public removeViewAt(int0: number): void;
					public onEnteredHiddenState(view0: globalAndroid.view.View): void;
					public indexOfChild(view0: globalAndroid.view.View): number;
					public getChildViewHolder(view0: globalAndroid.view.View): androidx.recyclerview.widget.RecyclerView.ViewHolder;
					public detachViewFromParent(int0: number): void;
					public onLeftHiddenState(view0: globalAndroid.view.View): void;
				}
			}
		}
	}
}

declare module androidx {
	export module recyclerview {
		export module widget {
			export class ConcatAdapter extends androidx.recyclerview.widget.RecyclerView.Adapter<androidx.recyclerview.widget.RecyclerView.ViewHolder> {
				public static class: java.lang.Class<androidx.recyclerview.widget.ConcatAdapter>;
				public constructor(config: androidx.recyclerview.widget.ConcatAdapter.Config, adapters: java.util.List<any>);
				public getItemViewType(position: number): number;
				public onBindViewHolder(holder: any, position: number, payloads: java.util.List<any>): void;
				public constructor();
				public getItemCount(): number;
				public onBindViewHolder(holder: androidx.recyclerview.widget.RecyclerView.ViewHolder, position: number): void;
				public onViewRecycled(holder: any): void;
				public findRelativeAdapterPositionIn(adapter: androidx.recyclerview.widget.RecyclerView.Adapter<any>, viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder, localPosition: number): number;
				public onViewAttachedToWindow(holder: any): void;
				public onFailedToRecycleView(holder: androidx.recyclerview.widget.RecyclerView.ViewHolder): boolean;
				public onAttachedToRecyclerView(recyclerView: androidx.recyclerview.widget.RecyclerView): void;
				public onViewAttachedToWindow(holder: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
				public removeAdapter(adapter: androidx.recyclerview.widget.RecyclerView.Adapter<any>): boolean;
				public onViewDetachedFromWindow(holder: any): void;
				public setStateRestorationPolicy(strategy: androidx.recyclerview.widget.RecyclerView.Adapter.StateRestorationPolicy): void;
				public onDetachedFromRecyclerView(recyclerView: androidx.recyclerview.widget.RecyclerView): void;
				public constructor(adapters: native.Array<androidx.recyclerview.widget.RecyclerView.Adapter<any>>);
				public setHasStableIds(hasStableIds: boolean): void;
				public addAdapter(adapter: androidx.recyclerview.widget.RecyclerView.Adapter<any>): boolean;
				public onViewDetachedFromWindow(holder: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
				public constructor(adapters: java.util.List<any>);
				public onCreateViewHolder(viewGroup0: globalAndroid.view.ViewGroup, int1: number): any;
				public onCreateViewHolder(parent: globalAndroid.view.ViewGroup, viewType: number): androidx.recyclerview.widget.RecyclerView.ViewHolder;
				public addAdapter(index: number, adapter: androidx.recyclerview.widget.RecyclerView.Adapter<any>): boolean;
				public getItemId(position: number): number;
				public onViewRecycled(holder: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
				public onBindViewHolder(viewHolder0: any, int1: number): void;
				public onFailedToRecycleView(holder: any): boolean;
				public constructor(config: androidx.recyclerview.widget.ConcatAdapter.Config, adapters: native.Array<androidx.recyclerview.widget.RecyclerView.Adapter<any>>);
				public getAdapters(): java.util.List<any>;
			}
			export module ConcatAdapter {
				export class Config extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.ConcatAdapter.Config>;
					public isolateViewTypes: boolean;
					public stableIdMode: androidx.recyclerview.widget.ConcatAdapter.Config.StableIdMode;
					public static DEFAULT: androidx.recyclerview.widget.ConcatAdapter.Config;
				}
				export module Config {
					export class Builder extends java.lang.Object {
						public static class: java.lang.Class<androidx.recyclerview.widget.ConcatAdapter.Config.Builder>;
						public setIsolateViewTypes(isolateViewTypes: boolean): androidx.recyclerview.widget.ConcatAdapter.Config.Builder;
						public constructor();
						public setStableIdMode(stableIdMode: androidx.recyclerview.widget.ConcatAdapter.Config.StableIdMode): androidx.recyclerview.widget.ConcatAdapter.Config.Builder;
						public build(): androidx.recyclerview.widget.ConcatAdapter.Config;
					}
					export class StableIdMode {
						public static class: java.lang.Class<androidx.recyclerview.widget.ConcatAdapter.Config.StableIdMode>;
						public static NO_STABLE_IDS: androidx.recyclerview.widget.ConcatAdapter.Config.StableIdMode;
						public static ISOLATED_STABLE_IDS: androidx.recyclerview.widget.ConcatAdapter.Config.StableIdMode;
						public static SHARED_STABLE_IDS: androidx.recyclerview.widget.ConcatAdapter.Config.StableIdMode;
						public static values(): native.Array<androidx.recyclerview.widget.ConcatAdapter.Config.StableIdMode>;
						public static valueOf(name: string): androidx.recyclerview.widget.ConcatAdapter.Config.StableIdMode;
						public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module recyclerview {
		export module widget {
			export class ConcatAdapterController extends java.lang.Object implements androidx.recyclerview.widget.NestedAdapterWrapper.Callback {
				public static class: java.lang.Class<androidx.recyclerview.widget.ConcatAdapterController>;
				public onChanged(wrapper: androidx.recyclerview.widget.NestedAdapterWrapper): void;
				public onItemRangeChanged(nestedAdapterWrapper: androidx.recyclerview.widget.NestedAdapterWrapper, positionStart: number, itemCount: number, payload: any): void;
				public getItemId(globalPosition: number): number;
				public onItemRangeMoved(nestedAdapterWrapper: androidx.recyclerview.widget.NestedAdapterWrapper, fromPosition: number, toPosition: number): void;
				public onViewAttachedToWindow(holder: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
				public getBoundAdapter(viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder): androidx.recyclerview.widget.RecyclerView.Adapter<any>;
				public getItemViewType(globalPosition: number): number;
				public onDetachedFromRecyclerView(recyclerView: androidx.recyclerview.widget.RecyclerView): void;
				public onCreateViewHolder(parent: globalAndroid.view.ViewGroup, globalViewType: number): androidx.recyclerview.widget.RecyclerView.ViewHolder;
				public onItemRangeRemoved(nestedAdapterWrapper: androidx.recyclerview.widget.NestedAdapterWrapper, positionStart: number, itemCount: number): void;
				public onItemRangeInserted(nestedAdapterWrapper: androidx.recyclerview.widget.NestedAdapterWrapper, positionStart: number, itemCount: number): void;
				public getTotalCount(): number;
				public onViewDetachedFromWindow(holder: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
				public onStateRestorationPolicyChanged(nestedAdapterWrapper: androidx.recyclerview.widget.NestedAdapterWrapper): void;
				public getLocalAdapterPosition(adapter: androidx.recyclerview.widget.RecyclerView.Adapter<any>, viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder, globalPosition: number): number;
				public hasStableIds(): boolean;
				public onViewRecycled(holder: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
				public getCopyOfAdapters(): java.util.List<androidx.recyclerview.widget.RecyclerView.Adapter<any>>;
				public canRestoreState(): boolean;
				public onFailedToRecycleView(holder: androidx.recyclerview.widget.RecyclerView.ViewHolder): boolean;
				public onAttachedToRecyclerView(recyclerView: androidx.recyclerview.widget.RecyclerView): void;
				public onItemRangeChanged(nestedAdapterWrapper: androidx.recyclerview.widget.NestedAdapterWrapper, positionStart: number, itemCount: number): void;
				public onBindViewHolder(holder: androidx.recyclerview.widget.RecyclerView.ViewHolder, globalPosition: number): void;
			}
			export module ConcatAdapterController {
				export class WrapperAndLocalPosition extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.ConcatAdapterController.WrapperAndLocalPosition>;
				}
			}
		}
	}
}

declare module androidx {
	export module recyclerview {
		export module widget {
			export class DefaultItemAnimator extends androidx.recyclerview.widget.SimpleItemAnimator {
				public static class: java.lang.Class<androidx.recyclerview.widget.DefaultItemAnimator>;
				public runPendingAnimations(): void;
				public canReuseUpdatedViewHolder(viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder): boolean;
				public animateRemove(holder: androidx.recyclerview.widget.RecyclerView.ViewHolder): boolean;
				public endAnimations(): void;
				public animateAdd(viewHolder0: androidx.recyclerview.widget.RecyclerView.ViewHolder): boolean;
				public isRunning(listener: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemAnimatorFinishedListener): boolean;
				public animateChange(oldHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder, newHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder, fromX: number, fromY: number, toX: number, toY: number): boolean;
				public canReuseUpdatedViewHolder(viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder, payloads: java.util.List<any>): boolean;
				public animateChange(oldHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder, newHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder, preInfo: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo, postInfo: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo): boolean;
				public animateMove(holder: androidx.recyclerview.widget.RecyclerView.ViewHolder, fromX: number, fromY: number, toX: number, toY: number): boolean;
				public endAnimation(item: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
				public constructor();
				public animateChange(viewHolder0: androidx.recyclerview.widget.RecyclerView.ViewHolder, viewHolder1: androidx.recyclerview.widget.RecyclerView.ViewHolder, int2: number, int3: number, int4: number, int5: number): boolean;
				public animateMove(viewHolder0: androidx.recyclerview.widget.RecyclerView.ViewHolder, int1: number, int2: number, int3: number, int4: number): boolean;
				public endAnimation(viewHolder0: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
				public isRunning(): boolean;
				public animateAdd(holder: androidx.recyclerview.widget.RecyclerView.ViewHolder): boolean;
				public animateRemove(viewHolder0: androidx.recyclerview.widget.RecyclerView.ViewHolder): boolean;
			}
			export module DefaultItemAnimator {
				export class ChangeInfo extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.DefaultItemAnimator.ChangeInfo>;
					public oldHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder;
					public newHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder;
					public fromX: number;
					public fromY: number;
					public toX: number;
					public toY: number;
					public toString(): string;
				}
				export class MoveInfo extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.DefaultItemAnimator.MoveInfo>;
					public holder: androidx.recyclerview.widget.RecyclerView.ViewHolder;
					public fromX: number;
					public fromY: number;
					public toX: number;
					public toY: number;
				}
			}
		}
	}
}

declare module androidx {
	export module recyclerview {
		export module widget {
			export class DiffUtil extends java.lang.Object {
				public static class: java.lang.Class<androidx.recyclerview.widget.DiffUtil>;
				public static calculateDiff(cb: androidx.recyclerview.widget.DiffUtil.Callback): androidx.recyclerview.widget.DiffUtil.DiffResult;
				public static calculateDiff(cb: androidx.recyclerview.widget.DiffUtil.Callback, detectMoves: boolean): androidx.recyclerview.widget.DiffUtil.DiffResult;
			}
			export module DiffUtil {
				export abstract class Callback extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.DiffUtil.Callback>;
					public getNewListSize(): number;
					public getChangePayload(oldItemPosition: number, newItemPosition: number): any;
					public areItemsTheSame(int0: number, int1: number): boolean;
					public constructor();
					public getOldListSize(): number;
					public areContentsTheSame(int0: number, int1: number): boolean;
				}
				export class CenteredArray extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.DiffUtil.CenteredArray>;
					public fill(value: number): void;
				}
				export class Diagonal extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.DiffUtil.Diagonal>;
					public x: number;
					public y: number;
					public size: number;
				}
				export class DiffResult extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.DiffUtil.DiffResult>;
					public static NO_POSITION: number;
					public dispatchUpdatesTo(adapter: androidx.recyclerview.widget.RecyclerView.Adapter<any>): void;
					public dispatchUpdatesTo(updateCallback: androidx.recyclerview.widget.ListUpdateCallback): void;
					public convertNewPositionToOld(newListPosition: number): number;
					public convertOldPositionToNew(oldListPosition: number): number;
				}
				export abstract class ItemCallback<T>  extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.DiffUtil.ItemCallback<any>>;
					public areContentsTheSame(object0: T, object1: T): boolean;
					public constructor();
					public areItemsTheSame(object0: T, object1: T): boolean;
					public getChangePayload(oldItem: T, newItem: T): any;
				}
				export class PostponedUpdate extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.DiffUtil.PostponedUpdate>;
				}
				export class Range extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.DiffUtil.Range>;
					public constructor();
					public constructor(oldListStart: number, oldListEnd: number, newListStart: number, newListEnd: number);
				}
				export class Snake extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.DiffUtil.Snake>;
					public startX: number;
					public startY: number;
					public endX: number;
					public endY: number;
					public reverse: boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module recyclerview {
		export module widget {
			export class DividerItemDecoration extends androidx.recyclerview.widget.RecyclerView.ItemDecoration {
				public static class: java.lang.Class<androidx.recyclerview.widget.DividerItemDecoration>;
				public static HORIZONTAL: number;
				public static VERTICAL: number;
				public onDraw(c: globalAndroid.graphics.Canvas, parent: androidx.recyclerview.widget.RecyclerView, state: androidx.recyclerview.widget.RecyclerView.State): void;
				public setOrientation(orientation: number): void;
				public constructor(context: globalAndroid.content.Context, orientation: number);
				public getDrawable(): globalAndroid.graphics.drawable.Drawable;
				/** @deprecated */
				public onDraw(c: globalAndroid.graphics.Canvas, parent: androidx.recyclerview.widget.RecyclerView): void;
				public getItemOffsets(outRect: globalAndroid.graphics.Rect, view: globalAndroid.view.View, parent: androidx.recyclerview.widget.RecyclerView, state: androidx.recyclerview.widget.RecyclerView.State): void;
				public setDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				/** @deprecated */
				public getItemOffsets(outRect: globalAndroid.graphics.Rect, itemPosition: number, parent: androidx.recyclerview.widget.RecyclerView): void;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module recyclerview {
		export module widget {
			export class FastScroller extends androidx.recyclerview.widget.RecyclerView.ItemDecoration implements androidx.recyclerview.widget.RecyclerView.OnItemTouchListener {
				public static class: java.lang.Class<androidx.recyclerview.widget.FastScroller>;
				public onDrawOver(c: globalAndroid.graphics.Canvas, parent: androidx.recyclerview.widget.RecyclerView, state: androidx.recyclerview.widget.RecyclerView.State): void;
				public isDragging(): boolean;
				public onTouchEvent(recyclerView: androidx.recyclerview.widget.RecyclerView, me: globalAndroid.view.MotionEvent): void;
				public onDrawOver(canvas: globalAndroid.graphics.Canvas, parent: androidx.recyclerview.widget.RecyclerView, state: androidx.recyclerview.widget.RecyclerView.State): void;
				public attachToRecyclerView(recyclerView: androidx.recyclerview.widget.RecyclerView): void;
				public onInterceptTouchEvent(recyclerView: androidx.recyclerview.widget.RecyclerView, ev: globalAndroid.view.MotionEvent): boolean;
				public onRequestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
				public show(): void;
				/** @deprecated */
				public onDrawOver(c: globalAndroid.graphics.Canvas, parent: androidx.recyclerview.widget.RecyclerView): void;
			}
			export module FastScroller {
				export class AnimatorListener extends globalAndroid.animation.AnimatorListenerAdapter {
					public static class: java.lang.Class<androidx.recyclerview.widget.FastScroller.AnimatorListener>;
					public onAnimationEnd(animation: globalAndroid.animation.Animator): void;
					public onAnimationStart(animation: globalAndroid.animation.Animator): void;
					public onAnimationPause(animation: globalAndroid.animation.Animator): void;
					public onAnimationRepeat(animation: globalAndroid.animation.Animator): void;
					public onAnimationResume(animation: globalAndroid.animation.Animator): void;
					public onAnimationCancel(animation: globalAndroid.animation.Animator): void;
					public onAnimationEnd(animation: globalAndroid.animation.Animator, isReverse: boolean): void;
					public onAnimationStart(animation: globalAndroid.animation.Animator, isReverse: boolean): void;
				}
				export class AnimatorUpdater extends java.lang.Object implements globalAndroid.animation.ValueAnimator.AnimatorUpdateListener {
					public static class: java.lang.Class<androidx.recyclerview.widget.FastScroller.AnimatorUpdater>;
					public onAnimationUpdate(valueAnimator: globalAndroid.animation.ValueAnimator): void;
				}
			}
		}
	}
}

declare module androidx {
	export module recyclerview {
		export module widget {
			export class GapWorker extends java.lang.Object implements java.lang.Runnable {
				public static class: java.lang.Class<androidx.recyclerview.widget.GapWorker>;
				public run(): void;
				public remove(recyclerView: androidx.recyclerview.widget.RecyclerView): void;
				public add(recyclerView: androidx.recyclerview.widget.RecyclerView): void;
			}
			export module GapWorker {
				export class LayoutPrefetchRegistryImpl extends java.lang.Object implements androidx.recyclerview.widget.RecyclerView.LayoutManager.LayoutPrefetchRegistry {
					public static class: java.lang.Class<androidx.recyclerview.widget.GapWorker.LayoutPrefetchRegistryImpl>;
					public addPosition(layoutPosition: number, pixelDistance: number): void;
				}
				export class Task extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.GapWorker.Task>;
					public immediate: boolean;
					public viewVelocity: number;
					public distanceToItem: number;
					public view: androidx.recyclerview.widget.RecyclerView;
					public position: number;
					public clear(): void;
				}
			}
		}
	}
}

declare module androidx {
	export module recyclerview {
		export module widget {
			export class GridLayoutManager extends androidx.recyclerview.widget.LinearLayoutManager {
				public static class: java.lang.Class<androidx.recyclerview.widget.GridLayoutManager>;
				public static DEFAULT_SPAN_COUNT: number;
				public onLayoutCompleted(state: androidx.recyclerview.widget.RecyclerView.State): void;
				public generateLayoutParams(lp: globalAndroid.view.ViewGroup.LayoutParams): androidx.recyclerview.widget.RecyclerView.LayoutParams;
				public getRowCountForAccessibility(recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State): number;
				public constructor(context: globalAndroid.content.Context);
				public onItemsAdded(recyclerView: androidx.recyclerview.widget.RecyclerView, positionStart: number, itemCount: number): void;
				public getSpanSizeLookup(): androidx.recyclerview.widget.GridLayoutManager.SpanSizeLookup;
				public getSpanCount(): number;
				public setMeasuredDimension(childrenBounds: globalAndroid.graphics.Rect, wSpec: number, hSpec: number): void;
				public setSpanCount(spanCount: number): void;
				public constructor(context: globalAndroid.content.Context, orientation: number, reverseLayout: boolean);
				public setUsingSpansToEstimateScrollbarDimensions(useSpansToEstimateScrollBarDimensions: boolean): void;
				public onItemsMoved(recyclerView: androidx.recyclerview.widget.RecyclerView, from: number, to: number, itemCount: number): void;
				public constructor();
				public scrollVerticallyBy(dy: number, recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State): number;
				public computeScrollVectorForPosition(targetPosition: number): globalAndroid.graphics.PointF;
				public getColumnCountForAccessibility(recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State): number;
				public generateDefaultLayoutParams(): androidx.recyclerview.widget.RecyclerView.LayoutParams;
				public constructor(context: globalAndroid.content.Context, spanCount: number, orientation: number, reverseLayout: boolean);
				public computeVerticalScrollRange(state: androidx.recyclerview.widget.RecyclerView.State): number;
				public onInitializeAccessibilityNodeInfoForItem(recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State, host: globalAndroid.view.View, info: androidx.core.view.accessibility.AccessibilityNodeInfoCompat): void;
				public computeVerticalScrollOffset(state: androidx.recyclerview.widget.RecyclerView.State): number;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public onLayoutChildren(recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State): void;
				public setSpanSizeLookup(spanSizeLookup: androidx.recyclerview.widget.GridLayoutManager.SpanSizeLookup): void;
				public scrollHorizontallyBy(dx: number, recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State): number;
				public supportsPredictiveItemAnimations(): boolean;
				public onItemsRemoved(recyclerView: androidx.recyclerview.widget.RecyclerView, positionStart: number, itemCount: number): void;
				public computeHorizontalScrollOffset(state: androidx.recyclerview.widget.RecyclerView.State): number;
				public generateLayoutParams(c: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet): androidx.recyclerview.widget.RecyclerView.LayoutParams;
				public isUsingSpansToEstimateScrollbarDimensions(): boolean;
				public onItemsChanged(recyclerView: androidx.recyclerview.widget.RecyclerView): void;
				public computeHorizontalScrollRange(state: androidx.recyclerview.widget.RecyclerView.State): number;
				public constructor(context: globalAndroid.content.Context, spanCount: number);
				public setStackFromEnd(stackFromEnd: boolean): void;
				public onItemsUpdated(recyclerView: androidx.recyclerview.widget.RecyclerView, positionStart: number, itemCount: number, payload: any): void;
				public onFocusSearchFailed(focused: globalAndroid.view.View, focusDirection: number, recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State): globalAndroid.view.View;
				public checkLayoutParams(lp: androidx.recyclerview.widget.RecyclerView.LayoutParams): boolean;
				public setMeasuredDimension(widthSize: number, heightSize: number): void;
				public onItemsUpdated(recyclerView: androidx.recyclerview.widget.RecyclerView, positionStart: number, itemCount: number): void;
				public prepareForDrop(view: globalAndroid.view.View, target: globalAndroid.view.View, x: number, y: number): void;
			}
			export module GridLayoutManager {
				export class DefaultSpanSizeLookup extends androidx.recyclerview.widget.GridLayoutManager.SpanSizeLookup {
					public static class: java.lang.Class<androidx.recyclerview.widget.GridLayoutManager.DefaultSpanSizeLookup>;
					public constructor();
					public getSpanSize(position: number): number;
					public getSpanSize(int0: number): number;
					public getSpanIndex(position: number, spanCount: number): number;
				}
				export class LayoutParams extends androidx.recyclerview.widget.RecyclerView.LayoutParams {
					public static class: java.lang.Class<androidx.recyclerview.widget.GridLayoutManager.LayoutParams>;
					public static INVALID_SPAN_ID: number;
					public getSpanSize(): number;
					public constructor(source: globalAndroid.view.ViewGroup.LayoutParams);
					public constructor(c: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
					public constructor(source: androidx.recyclerview.widget.RecyclerView.LayoutParams);
					public getSpanIndex(): number;
					public constructor(width: number, height: number);
					public constructor(source: globalAndroid.view.ViewGroup.MarginLayoutParams);
				}
				export abstract class SpanSizeLookup extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.GridLayoutManager.SpanSizeLookup>;
					public setSpanIndexCacheEnabled(cacheSpanIndices: boolean): void;
					public isSpanGroupIndexCacheEnabled(): boolean;
					public constructor();
					public setSpanGroupIndexCacheEnabled(cacheSpanGroupIndices: boolean): void;
					public isSpanIndexCacheEnabled(): boolean;
					public getSpanGroupIndex(adapterPosition: number, spanCount: number): number;
					public getSpanSize(int0: number): number;
					public invalidateSpanGroupIndexCache(): void;
					public getSpanIndex(position: number, spanCount: number): number;
					public invalidateSpanIndexCache(): void;
				}
			}
		}
	}
}

declare module androidx {
	export module recyclerview {
		export module widget {
			export class ItemTouchHelper extends androidx.recyclerview.widget.RecyclerView.ItemDecoration implements androidx.recyclerview.widget.RecyclerView.OnChildAttachStateChangeListener {
				public static class: java.lang.Class<androidx.recyclerview.widget.ItemTouchHelper>;
				public static UP: number;
				public static DOWN: number;
				public static LEFT: number;
				public static RIGHT: number;
				public static START: number;
				public static END: number;
				public static ACTION_STATE_IDLE: number;
				public static ACTION_STATE_SWIPE: number;
				public static ACTION_STATE_DRAG: number;
				public static ANIMATION_TYPE_SWIPE_SUCCESS: number;
				public static ANIMATION_TYPE_SWIPE_CANCEL: number;
				public static ANIMATION_TYPE_DRAG: number;
				public onDrawOver(c: globalAndroid.graphics.Canvas, parent: androidx.recyclerview.widget.RecyclerView, state: androidx.recyclerview.widget.RecyclerView.State): void;
				public onDraw(c: globalAndroid.graphics.Canvas, parent: androidx.recyclerview.widget.RecyclerView, state: androidx.recyclerview.widget.RecyclerView.State): void;
				public onChildViewDetachedFromWindow(view: globalAndroid.view.View): void;
				public startSwipe(viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
				public onChildViewAttachedToWindow(view: globalAndroid.view.View): void;
				/** @deprecated */
				public onDraw(c: globalAndroid.graphics.Canvas, parent: androidx.recyclerview.widget.RecyclerView): void;
				public constructor();
				public startDrag(viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
				public attachToRecyclerView(recyclerView: androidx.recyclerview.widget.RecyclerView): void;
				public getItemOffsets(outRect: globalAndroid.graphics.Rect, view: globalAndroid.view.View, parent: androidx.recyclerview.widget.RecyclerView, state: androidx.recyclerview.widget.RecyclerView.State): void;
				/** @deprecated */
				public getItemOffsets(outRect: globalAndroid.graphics.Rect, itemPosition: number, parent: androidx.recyclerview.widget.RecyclerView): void;
				public constructor(callback: androidx.recyclerview.widget.ItemTouchHelper.Callback);
				/** @deprecated */
				public onDrawOver(c: globalAndroid.graphics.Canvas, parent: androidx.recyclerview.widget.RecyclerView): void;
			}
			export module ItemTouchHelper {
				export abstract class Callback extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.ItemTouchHelper.Callback>;
					public static DEFAULT_DRAG_ANIMATION_DURATION: number;
					public static DEFAULT_SWIPE_ANIMATION_DURATION: number;
					public static getDefaultUIUtil(): androidx.recyclerview.widget.ItemTouchUIUtil;
					public getMovementFlags(recyclerView0: androidx.recyclerview.widget.RecyclerView, viewHolder1: androidx.recyclerview.widget.RecyclerView.ViewHolder): number;
					public isLongPressDragEnabled(): boolean;
					public static makeMovementFlags(dragFlags: number, swipeFlags: number): number;
					public canDropOver(recyclerView: androidx.recyclerview.widget.RecyclerView, current: androidx.recyclerview.widget.RecyclerView.ViewHolder, target: androidx.recyclerview.widget.RecyclerView.ViewHolder): boolean;
					public getAnimationDuration(recyclerView: androidx.recyclerview.widget.RecyclerView, animationType: number, animateDx: number, animateDy: number): number;
					public isItemViewSwipeEnabled(): boolean;
					public constructor();
					public static convertToRelativeDirection(flags: number, layoutDirection: number): number;
					public interpolateOutOfBoundsScroll(recyclerView: androidx.recyclerview.widget.RecyclerView, viewSize: number, viewSizeOutOfBounds: number, totalSize: number, msSinceStartScroll: number): number;
					public convertToAbsoluteDirection(flags: number, layoutDirection: number): number;
					public onSelectedChanged(viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder, actionState: number): void;
					public getSwipeEscapeVelocity(defaultValue: number): number;
					public onChildDrawOver(c: globalAndroid.graphics.Canvas, recyclerView: androidx.recyclerview.widget.RecyclerView, viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder, dX: number, dY: number, actionState: number, isCurrentlyActive: boolean): void;
					public getMoveThreshold(viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder): number;
					public chooseDropTarget(selected: androidx.recyclerview.widget.RecyclerView.ViewHolder, dropTargets: java.util.List<androidx.recyclerview.widget.RecyclerView.ViewHolder>, curX: number, curY: number): androidx.recyclerview.widget.RecyclerView.ViewHolder;
					public onMove(recyclerView0: androidx.recyclerview.widget.RecyclerView, viewHolder1: androidx.recyclerview.widget.RecyclerView.ViewHolder, viewHolder2: androidx.recyclerview.widget.RecyclerView.ViewHolder): boolean;
					public onChildDraw(c: globalAndroid.graphics.Canvas, recyclerView: androidx.recyclerview.widget.RecyclerView, viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder, dX: number, dY: number, actionState: number, isCurrentlyActive: boolean): void;
					public getSwipeThreshold(viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder): number;
					public onMoved(recyclerView: androidx.recyclerview.widget.RecyclerView, viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder, fromPos: number, target: androidx.recyclerview.widget.RecyclerView.ViewHolder, toPos: number, x: number, y: number): void;
					public static makeFlag(actionState: number, directions: number): number;
					public getSwipeVelocityThreshold(defaultValue: number): number;
					public onSwiped(viewHolder0: androidx.recyclerview.widget.RecyclerView.ViewHolder, int1: number): void;
					public getBoundingBoxMargin(): number;
					public clearView(recyclerView: androidx.recyclerview.widget.RecyclerView, viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
				}
				export class ItemTouchHelperGestureListener extends globalAndroid.view.GestureDetector.SimpleOnGestureListener {
					public static class: java.lang.Class<androidx.recyclerview.widget.ItemTouchHelper.ItemTouchHelperGestureListener>;
					public onDoubleTapEvent(e: globalAndroid.view.MotionEvent): boolean;
					public onSingleTapUp(e: globalAndroid.view.MotionEvent): boolean;
					public onScroll(e1: globalAndroid.view.MotionEvent, e2: globalAndroid.view.MotionEvent, distanceX: number, distanceY: number): boolean;
					public onDoubleTap(e: globalAndroid.view.MotionEvent): boolean;
					public onFling(e1: globalAndroid.view.MotionEvent, e2: globalAndroid.view.MotionEvent, velocityX: number, velocityY: number): boolean;
					public onDown(e: globalAndroid.view.MotionEvent): boolean;
					public onShowPress(e: globalAndroid.view.MotionEvent): void;
					public onSingleTapConfirmed(e: globalAndroid.view.MotionEvent): boolean;
					public onContextClick(e: globalAndroid.view.MotionEvent): boolean;
					public onLongPress(e: globalAndroid.view.MotionEvent): void;
				}
				export class RecoverAnimation extends java.lang.Object implements globalAndroid.animation.Animator.AnimatorListener {
					public static class: java.lang.Class<androidx.recyclerview.widget.ItemTouchHelper.RecoverAnimation>;
					public onAnimationEnd(animation: globalAndroid.animation.Animator): void;
					public onAnimationStart(animation: globalAndroid.animation.Animator): void;
					public update(): void;
					public cancel(): void;
					public onAnimationRepeat(animation: globalAndroid.animation.Animator): void;
					public setFraction(fraction: number): void;
					public setDuration(duration: number): void;
					public start(): void;
					public onAnimationCancel(animation: globalAndroid.animation.Animator): void;
					public onAnimationEnd(animation: globalAndroid.animation.Animator, isReverse: boolean): void;
					public onAnimationStart(animation: globalAndroid.animation.Animator, isReverse: boolean): void;
				}
				export abstract class SimpleCallback extends androidx.recyclerview.widget.ItemTouchHelper.Callback {
					public static class: java.lang.Class<androidx.recyclerview.widget.ItemTouchHelper.SimpleCallback>;
					public getMovementFlags(recyclerView0: androidx.recyclerview.widget.RecyclerView, viewHolder1: androidx.recyclerview.widget.RecyclerView.ViewHolder): number;
					public constructor();
					public setDefaultDragDirs(defaultDragDirs: number): void;
					public setDefaultSwipeDirs(defaultSwipeDirs: number): void;
					public getSwipeDirs(recyclerView: androidx.recyclerview.widget.RecyclerView, viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder): number;
					public constructor(dragDirs: number, swipeDirs: number);
					public getMovementFlags(recyclerView: androidx.recyclerview.widget.RecyclerView, viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder): number;
					public getDragDirs(recyclerView: androidx.recyclerview.widget.RecyclerView, viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder): number;
				}
				export class ViewDropHandler extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.ItemTouchHelper.ViewDropHandler>;
					/**
					 * Constructs a new instance of the androidx.recyclerview.widget.ItemTouchHelper() when extending the interface class.
					 */
					public constructor(implementation: {
						prepareForDrop(view0: globalAndroid.view.View, view1: globalAndroid.view.View, int2: number, int3: number): void;
					});
					public constructor();
					public prepareForDrop(view0: globalAndroid.view.View, view1: globalAndroid.view.View, int2: number, int3: number): void;
				}
			}
		}
	}
}

declare module androidx {
	export module recyclerview {
		export module widget {
			export class ItemTouchUIUtil extends java.lang.Object {
				public static class: java.lang.Class<androidx.recyclerview.widget.ItemTouchUIUtil>;
				/**
				 * Constructs a new instance of the androidx.recyclerview.widget.ItemTouchUIUtil interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onDraw(canvas0: globalAndroid.graphics.Canvas, recyclerView1: androidx.recyclerview.widget.RecyclerView, view2: globalAndroid.view.View, float3: number, float4: number, int5: number, boolean6: boolean): void;
					onDrawOver(canvas0: globalAndroid.graphics.Canvas, recyclerView1: androidx.recyclerview.widget.RecyclerView, view2: globalAndroid.view.View, float3: number, float4: number, int5: number, boolean6: boolean): void;
					clearView(view0: globalAndroid.view.View): void;
					onSelected(view0: globalAndroid.view.View): void;
				});
				public constructor();
				public clearView(view0: globalAndroid.view.View): void;
				public onSelected(view0: globalAndroid.view.View): void;
				public onDraw(canvas0: globalAndroid.graphics.Canvas, recyclerView1: androidx.recyclerview.widget.RecyclerView, view2: globalAndroid.view.View, float3: number, float4: number, int5: number, boolean6: boolean): void;
				public onDrawOver(canvas0: globalAndroid.graphics.Canvas, recyclerView1: androidx.recyclerview.widget.RecyclerView, view2: globalAndroid.view.View, float3: number, float4: number, int5: number, boolean6: boolean): void;
			}
		}
	}
}

declare module androidx {
	export module recyclerview {
		export module widget {
			export class ItemTouchUIUtilImpl extends java.lang.Object implements androidx.recyclerview.widget.ItemTouchUIUtil {
				public static class: java.lang.Class<androidx.recyclerview.widget.ItemTouchUIUtilImpl>;
				public clearView(view: globalAndroid.view.View): void;
				public onSelected(view: globalAndroid.view.View): void;
				public onDraw(c: globalAndroid.graphics.Canvas, recyclerView: androidx.recyclerview.widget.RecyclerView, view: globalAndroid.view.View, dX: number, dY: number, actionState: number, isCurrentlyActive: boolean): void;
				public onDrawOver(c: globalAndroid.graphics.Canvas, recyclerView: androidx.recyclerview.widget.RecyclerView, view: globalAndroid.view.View, dX: number, dY: number, actionState: number, isCurrentlyActive: boolean): void;
			}
		}
	}
}

declare module androidx {
	export module recyclerview {
		export module widget {
			export class LayoutState extends java.lang.Object {
				public static class: java.lang.Class<androidx.recyclerview.widget.LayoutState>;
				public toString(): string;
			}
		}
	}
}

declare module androidx {
	export module recyclerview {
		export module widget {
			export class LinearLayoutManager extends androidx.recyclerview.widget.RecyclerView.LayoutManager implements androidx.recyclerview.widget.ItemTouchHelper.ViewDropHandler, androidx.recyclerview.widget.RecyclerView.SmoothScroller.ScrollVectorProvider {
				public static class: java.lang.Class<androidx.recyclerview.widget.LinearLayoutManager>;
				public static HORIZONTAL: number;
				public static VERTICAL: number;
				public static INVALID_OFFSET: number;
				public getReverseLayout(): boolean;
				public constructor(context: globalAndroid.content.Context);
				public constructor(context: globalAndroid.content.Context, orientation: number, reverseLayout: boolean);
				public assertNotInLayoutOrScroll(message: string): void;
				public constructor();
				public scrollVerticallyBy(dy: number, recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State): number;
				public isSmoothScrollbarEnabled(): boolean;
				public canScrollHorizontally(): boolean;
				public isAutoMeasureEnabled(): boolean;
				public generateDefaultLayoutParams(): androidx.recyclerview.widget.RecyclerView.LayoutParams;
				public scrollToPositionWithOffset(position: number, offset: number): void;
				public onRestoreInstanceState(state: globalAndroid.os.Parcelable): void;
				public computeVerticalScrollRange(state: androidx.recyclerview.widget.RecyclerView.State): number;
				public onInitializeAccessibilityEvent(recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State, event: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public canScrollVertically(): boolean;
				public onLayoutChildren(recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State): void;
				public collectInitialPrefetchPositions(adapterItemCount: number, layoutPrefetchRegistry: androidx.recyclerview.widget.RecyclerView.LayoutManager.LayoutPrefetchRegistry): void;
				public calculateExtraLayoutSpace(state: androidx.recyclerview.widget.RecyclerView.State, extraLayoutSpace: native.Array<number>): void;
				public computeHorizontalScrollOffset(state: androidx.recyclerview.widget.RecyclerView.State): number;
				public setRecycleChildrenOnDetach(recycleChildrenOnDetach: boolean): void;
				public collectAdjacentPrefetchPositions(dx: number, dy: number, state: androidx.recyclerview.widget.RecyclerView.State, layoutPrefetchRegistry: androidx.recyclerview.widget.RecyclerView.LayoutManager.LayoutPrefetchRegistry): void;
				public onFocusSearchFailed(focused: globalAndroid.view.View, direction: number, recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State): globalAndroid.view.View;
				public onFocusSearchFailed(focused: globalAndroid.view.View, focusDirection: number, recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State): globalAndroid.view.View;
				public prepareForDrop(view: globalAndroid.view.View, target: globalAndroid.view.View, x: number, y: number): void;
				public onLayoutCompleted(state: androidx.recyclerview.widget.RecyclerView.State): void;
				public scrollToPosition(position: number): void;
				public onDetachedFromWindow(view: androidx.recyclerview.widget.RecyclerView, recycler: androidx.recyclerview.widget.RecyclerView.Recycler): void;
				public findLastCompletelyVisibleItemPosition(): number;
				public getStackFromEnd(): boolean;
				public getOrientation(): number;
				/** @deprecated */
				public onDetachedFromWindow(view: androidx.recyclerview.widget.RecyclerView): void;
				public findLastVisibleItemPosition(): number;
				public setReverseLayout(reverseLayout: boolean): void;
				public computeScrollVectorForPosition(targetPosition: number): globalAndroid.graphics.PointF;
				public setOrientation(orientation: number): void;
				public setSmoothScrollbarEnabled(enabled: boolean): void;
				public findViewByPosition(position: number): globalAndroid.view.View;
				public getInitialPrefetchItemCount(): number;
				public computeVerticalScrollOffset(state: androidx.recyclerview.widget.RecyclerView.State): number;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public onSaveInstanceState(): globalAndroid.os.Parcelable;
				public onInitializeAccessibilityEvent(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public smoothScrollToPosition(recyclerView: androidx.recyclerview.widget.RecyclerView, state: androidx.recyclerview.widget.RecyclerView.State, position: number): void;
				public scrollHorizontallyBy(dx: number, recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State): number;
				public computeHorizontalScrollExtent(state: androidx.recyclerview.widget.RecyclerView.State): number;
				public computeVerticalScrollExtent(state: androidx.recyclerview.widget.RecyclerView.State): number;
				public supportsPredictiveItemAnimations(): boolean;
				public findFirstVisibleItemPosition(): number;
				public computeHorizontalScrollRange(state: androidx.recyclerview.widget.RecyclerView.State): number;
				/** @deprecated */
				public getExtraLayoutSpace(state: androidx.recyclerview.widget.RecyclerView.State): number;
				public getRecycleChildrenOnDetach(): boolean;
				public findFirstCompletelyVisibleItemPosition(): number;
				public setStackFromEnd(stackFromEnd: boolean): void;
				public setInitialPrefetchItemCount(itemCount: number): void;
				public isLayoutRTL(): boolean;
			}
			export module LinearLayoutManager {
				export class AnchorInfo extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.LinearLayoutManager.AnchorInfo>;
					public toString(): string;
					public assignFromViewAndKeepVisibleRect(child: globalAndroid.view.View, position: number): void;
					public assignFromView(child: globalAndroid.view.View, position: number): void;
				}
				export class LayoutChunkResult extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.LinearLayoutManager.LayoutChunkResult>;
					public mConsumed: number;
					public mFinished: boolean;
					public mIgnoreConsumed: boolean;
					public mFocusable: boolean;
					public constructor();
				}
				export class LayoutState extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.LinearLayoutManager.LayoutState>;
					public nextViewInLimitedList(ignore: globalAndroid.view.View): globalAndroid.view.View;
					public assignPositionFromScrapList(): void;
					public assignPositionFromScrapList(ignore: globalAndroid.view.View): void;
				}
				export class SavedState extends java.lang.Object implements globalAndroid.os.Parcelable {
					public static class: java.lang.Class<androidx.recyclerview.widget.LinearLayoutManager.SavedState>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<androidx.recyclerview.widget.LinearLayoutManager.SavedState>;
					public constructor(other: androidx.recyclerview.widget.LinearLayoutManager.SavedState);
					public constructor();
					public describeContents(): number;
					public writeToParcel(dest: globalAndroid.os.Parcel, flags: number): void;
				}
			}
		}
	}
}

declare module androidx {
	export module recyclerview {
		export module widget {
			export class LinearSmoothScroller extends androidx.recyclerview.widget.RecyclerView.SmoothScroller {
				public static class: java.lang.Class<androidx.recyclerview.widget.LinearSmoothScroller>;
				public static SNAP_TO_START: number;
				public static SNAP_TO_END: number;
				public static SNAP_TO_ANY: number;
				public mLinearInterpolator: globalAndroid.view.animation.LinearInterpolator;
				public mDecelerateInterpolator: globalAndroid.view.animation.DecelerateInterpolator;
				public mTargetVector: globalAndroid.graphics.PointF;
				public mInterimTargetDx: number;
				public mInterimTargetDy: number;
				public getHorizontalSnapPreference(): number;
				public constructor(context: globalAndroid.content.Context);
				public getVerticalSnapPreference(): number;
				public constructor();
				public onSeekTargetStep(dx: number, dy: number, state: androidx.recyclerview.widget.RecyclerView.State, action: androidx.recyclerview.widget.RecyclerView.SmoothScroller.Action): void;
				public calculateDxToMakeVisible(view: globalAndroid.view.View, snapPreference: number): number;
				public calculateDyToMakeVisible(view: globalAndroid.view.View, snapPreference: number): number;
				public onStart(): void;
				public onTargetFound(view0: globalAndroid.view.View, state1: androidx.recyclerview.widget.RecyclerView.State, action2: androidx.recyclerview.widget.RecyclerView.SmoothScroller.Action): void;
				public calculateTimeForDeceleration(dx: number): number;
				public onSeekTargetStep(int0: number, int1: number, state2: androidx.recyclerview.widget.RecyclerView.State, action3: androidx.recyclerview.widget.RecyclerView.SmoothScroller.Action): void;
				public onStop(): void;
				public calculateTimeForScrolling(dx: number): number;
				public updateActionForInterimTarget(action: androidx.recyclerview.widget.RecyclerView.SmoothScroller.Action): void;
				public onTargetFound(targetView: globalAndroid.view.View, state: androidx.recyclerview.widget.RecyclerView.State, action: androidx.recyclerview.widget.RecyclerView.SmoothScroller.Action): void;
				public calculateSpeedPerPixel(displayMetrics: globalAndroid.util.DisplayMetrics): number;
				public calculateDtToFit(viewStart: number, viewEnd: number, boxStart: number, boxEnd: number, snapPreference: number): number;
			}
		}
	}
}

declare module androidx {
	export module recyclerview {
		export module widget {
			export class LinearSnapHelper extends androidx.recyclerview.widget.SnapHelper {
				public static class: java.lang.Class<androidx.recyclerview.widget.LinearSnapHelper>;
				public findSnapView(layoutManager: androidx.recyclerview.widget.RecyclerView.LayoutManager): globalAndroid.view.View;
				public findTargetSnapPosition(layoutManager0: androidx.recyclerview.widget.RecyclerView.LayoutManager, int1: number, int2: number): number;
				public findSnapView(layoutManager0: androidx.recyclerview.widget.RecyclerView.LayoutManager): globalAndroid.view.View;
				public calculateDistanceToFinalSnap(layoutManager: androidx.recyclerview.widget.RecyclerView.LayoutManager, targetView: globalAndroid.view.View): native.Array<number>;
				public calculateDistanceToFinalSnap(layoutManager0: androidx.recyclerview.widget.RecyclerView.LayoutManager, view1: globalAndroid.view.View): native.Array<number>;
				public constructor();
				public findTargetSnapPosition(layoutManager: androidx.recyclerview.widget.RecyclerView.LayoutManager, velocityX: number, velocityY: number): number;
			}
		}
	}
}

declare module androidx {
	export module recyclerview {
		export module widget {
			export abstract class ListAdapter<T, VH>  extends androidx.recyclerview.widget.RecyclerView.Adapter<any> {
				public static class: java.lang.Class<androidx.recyclerview.widget.ListAdapter<any,any>>;
				public constructor(config: androidx.recyclerview.widget.AsyncDifferConfig<any>);
				public submitList(list: java.util.List<any>, commitCallback: java.lang.Runnable): void;
				public getCurrentList(): java.util.List<any>;
				public submitList(list: java.util.List<any>): void;
				public getItem(position: number): any;
				public onCurrentListChanged(previousList: java.util.List<any>, currentList: java.util.List<any>): void;
				public constructor(diffCallback: androidx.recyclerview.widget.DiffUtil.ItemCallback<any>);
				public constructor();
				public getItemCount(): number;
			}
		}
	}
}

declare module androidx {
	export module recyclerview {
		export module widget {
			export class ListUpdateCallback extends java.lang.Object {
				public static class: java.lang.Class<androidx.recyclerview.widget.ListUpdateCallback>;
				/**
				 * Constructs a new instance of the androidx.recyclerview.widget.ListUpdateCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onInserted(int0: number, int1: number): void;
					onRemoved(int0: number, int1: number): void;
					onMoved(int0: number, int1: number): void;
					onChanged(int0: number, int1: number, object2: any): void;
				});
				public constructor();
				public onRemoved(int0: number, int1: number): void;
				public onInserted(int0: number, int1: number): void;
				public onMoved(int0: number, int1: number): void;
				public onChanged(int0: number, int1: number, object2: any): void;
			}
		}
	}
}

declare module androidx {
	export module recyclerview {
		export module widget {
			export class MessageThreadUtil<T>  extends androidx.recyclerview.widget.ThreadUtil<any> {
				public static class: java.lang.Class<androidx.recyclerview.widget.MessageThreadUtil<any>>;
				public getBackgroundProxy(callback: androidx.recyclerview.widget.ThreadUtil.BackgroundCallback<any>): androidx.recyclerview.widget.ThreadUtil.BackgroundCallback<any>;
				public getMainThreadProxy(callback: androidx.recyclerview.widget.ThreadUtil.MainThreadCallback<any>): androidx.recyclerview.widget.ThreadUtil.MainThreadCallback<any>;
			}
			export module MessageThreadUtil {
				export class MessageQueue extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.MessageThreadUtil.MessageQueue>;
				}
				export class SyncQueueItem extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.MessageThreadUtil.SyncQueueItem>;
					public what: number;
					public arg1: number;
					public arg2: number;
					public arg3: number;
					public arg4: number;
					public arg5: number;
					public data: any;
				}
			}
		}
	}
}

declare module androidx {
	export module recyclerview {
		export module widget {
			export class NestedAdapterWrapper extends java.lang.Object {
				public static class: java.lang.Class<androidx.recyclerview.widget.NestedAdapterWrapper>;
				public adapter: androidx.recyclerview.widget.RecyclerView.Adapter<androidx.recyclerview.widget.RecyclerView.ViewHolder>;
				public getItemId(localPosition: number): number;
			}
			export module NestedAdapterWrapper {
				export class Callback extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.NestedAdapterWrapper.Callback>;
					/**
					 * Constructs a new instance of the androidx.recyclerview.widget.NestedAdapterWrapper() when extending the interface class.
					 */
					public constructor(implementation: {
						onChanged(nestedAdapterWrapper0: androidx.recyclerview.widget.NestedAdapterWrapper): void;
						onItemRangeChanged(nestedAdapterWrapper0: androidx.recyclerview.widget.NestedAdapterWrapper, int1: number, int2: number): void;
						onItemRangeChanged(nestedAdapterWrapper0: androidx.recyclerview.widget.NestedAdapterWrapper, int1: number, int2: number, object3: any): void;
						onItemRangeInserted(nestedAdapterWrapper0: androidx.recyclerview.widget.NestedAdapterWrapper, int1: number, int2: number): void;
						onItemRangeRemoved(nestedAdapterWrapper0: androidx.recyclerview.widget.NestedAdapterWrapper, int1: number, int2: number): void;
						onItemRangeMoved(nestedAdapterWrapper0: androidx.recyclerview.widget.NestedAdapterWrapper, int1: number, int2: number): void;
						onStateRestorationPolicyChanged(nestedAdapterWrapper0: androidx.recyclerview.widget.NestedAdapterWrapper): void;
					});
					public constructor();
					public onChanged(nestedAdapterWrapper0: androidx.recyclerview.widget.NestedAdapterWrapper): void;
					public onItemRangeChanged(nestedAdapterWrapper0: androidx.recyclerview.widget.NestedAdapterWrapper, int1: number, int2: number): void;
					public onItemRangeChanged(nestedAdapterWrapper0: androidx.recyclerview.widget.NestedAdapterWrapper, int1: number, int2: number, object3: any): void;
					public onItemRangeInserted(nestedAdapterWrapper0: androidx.recyclerview.widget.NestedAdapterWrapper, int1: number, int2: number): void;
					public onItemRangeMoved(nestedAdapterWrapper0: androidx.recyclerview.widget.NestedAdapterWrapper, int1: number, int2: number): void;
					public onStateRestorationPolicyChanged(nestedAdapterWrapper0: androidx.recyclerview.widget.NestedAdapterWrapper): void;
					public onItemRangeRemoved(nestedAdapterWrapper0: androidx.recyclerview.widget.NestedAdapterWrapper, int1: number, int2: number): void;
				}
			}
		}
	}
}

declare module androidx {
	export module recyclerview {
		export module widget {
			export class OpReorderer extends java.lang.Object {
				public static class: java.lang.Class<androidx.recyclerview.widget.OpReorderer>;
			}
			export module OpReorderer {
				export class Callback extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.OpReorderer.Callback>;
					/**
					 * Constructs a new instance of the androidx.recyclerview.widget.OpReorderer() when extending the interface class.
					 */
					public constructor(implementation: {
						obtainUpdateOp(int0: number, int1: number, int2: number, object3: any): androidx.recyclerview.widget.AdapterHelper.UpdateOp;
						recycleUpdateOp(updateOp0: androidx.recyclerview.widget.AdapterHelper.UpdateOp): void;
					});
					public constructor();
					public obtainUpdateOp(int0: number, int1: number, int2: number, object3: any): androidx.recyclerview.widget.AdapterHelper.UpdateOp;
					public recycleUpdateOp(updateOp0: androidx.recyclerview.widget.AdapterHelper.UpdateOp): void;
				}
			}
		}
	}
}

declare module androidx {
	export module recyclerview {
		export module widget {
			export abstract class OrientationHelper extends java.lang.Object {
				public static class: java.lang.Class<androidx.recyclerview.widget.OrientationHelper>;
				public mLayoutManager: androidx.recyclerview.widget.RecyclerView.LayoutManager;
				public static HORIZONTAL: number;
				public static VERTICAL: number;
				public getEnd(): number;
				public getMode(): number;
				public offsetChild(view0: globalAndroid.view.View, int1: number): void;
				public static createOrientationHelper(layoutManager: androidx.recyclerview.widget.RecyclerView.LayoutManager, orientation: number): androidx.recyclerview.widget.OrientationHelper;
				public onLayoutComplete(): void;
				public getTotalSpace(): number;
				public getDecoratedMeasurementInOther(view0: globalAndroid.view.View): number;
				public getStartAfterPadding(): number;
				public static createHorizontalHelper(layoutManager: androidx.recyclerview.widget.RecyclerView.LayoutManager): androidx.recyclerview.widget.OrientationHelper;
				public getLayoutManager(): androidx.recyclerview.widget.RecyclerView.LayoutManager;
				public static createVerticalHelper(layoutManager: androidx.recyclerview.widget.RecyclerView.LayoutManager): androidx.recyclerview.widget.OrientationHelper;
				public getEndPadding(): number;
				public getTransformedStartWithDecoration(view0: globalAndroid.view.View): number;
				public getDecoratedMeasurement(view0: globalAndroid.view.View): number;
				public getModeInOther(): number;
				public getEndAfterPadding(): number;
				public getDecoratedStart(view0: globalAndroid.view.View): number;
				public getTransformedEndWithDecoration(view0: globalAndroid.view.View): number;
				public getDecoratedEnd(view0: globalAndroid.view.View): number;
				public getTotalSpaceChange(): number;
				public offsetChildren(int0: number): void;
			}
		}
	}
}

declare module androidx {
	export module recyclerview {
		export module widget {
			export class PagerSnapHelper extends androidx.recyclerview.widget.SnapHelper {
				public static class: java.lang.Class<androidx.recyclerview.widget.PagerSnapHelper>;
				public findSnapView(layoutManager: androidx.recyclerview.widget.RecyclerView.LayoutManager): globalAndroid.view.View;
				public findTargetSnapPosition(layoutManager0: androidx.recyclerview.widget.RecyclerView.LayoutManager, int1: number, int2: number): number;
				public findSnapView(layoutManager0: androidx.recyclerview.widget.RecyclerView.LayoutManager): globalAndroid.view.View;
				public calculateDistanceToFinalSnap(layoutManager: androidx.recyclerview.widget.RecyclerView.LayoutManager, targetView: globalAndroid.view.View): native.Array<number>;
				public createScroller(layoutManager: androidx.recyclerview.widget.RecyclerView.LayoutManager): androidx.recyclerview.widget.RecyclerView.SmoothScroller;
				public calculateDistanceToFinalSnap(layoutManager0: androidx.recyclerview.widget.RecyclerView.LayoutManager, view1: globalAndroid.view.View): native.Array<number>;
				public constructor();
				public findTargetSnapPosition(layoutManager: androidx.recyclerview.widget.RecyclerView.LayoutManager, velocityX: number, velocityY: number): number;
			}
		}
	}
}

declare module androidx {
	export module recyclerview {
		export module widget {
			export class RecyclerView extends globalAndroid.view.ViewGroup implements androidx.core.view.ScrollingView, androidx.core.view.NestedScrollingChild2, androidx.core.view.NestedScrollingChild3 {
				public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView>;
				public static HORIZONTAL: number;
				public static VERTICAL: number;
				public static NO_POSITION: number;
				public static NO_ID: number;
				public static INVALID_TYPE: number;
				public static TOUCH_SLOP_DEFAULT: number;
				public static TOUCH_SLOP_PAGING: number;
				public static UNDEFINED_DURATION: number;
				public static SCROLL_STATE_IDLE: number;
				public static SCROLL_STATE_DRAGGING: number;
				public static SCROLL_STATE_SETTLING: number;
				public hasFixedSize(): boolean;
				public setHasFixedSize(hasFixedSize: boolean): void;
				public setViewCacheExtension(extension: androidx.recyclerview.widget.RecyclerView.ViewCacheExtension): void;
				public stopScroll(): void;
				/** @deprecated */
				public isLayoutFrozen(): boolean;
				public dispatchSaveInstanceState(container: globalAndroid.util.SparseArray<globalAndroid.os.Parcelable>): void;
				public getPreserveFocusAfterLayout(): boolean;
				public getCompatAccessibilityDelegate(): androidx.recyclerview.widget.RecyclerViewAccessibilityDelegate;
				public removeOnItemTouchListener(listener: androidx.recyclerview.widget.RecyclerView.OnItemTouchListener): void;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public onLayout(changed: boolean, l: number, t: number, r: number, b: number): void;
				public getParentForAccessibility(): globalAndroid.view.ViewParent;
				public getItemDecorationCount(): number;
				public onNestedFling(target: globalAndroid.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
				public generateLayoutParams(attrs: globalAndroid.util.AttributeSet): globalAndroid.view.ViewGroup.LayoutParams;
				public keyboardNavigationClusterSearch(currentCluster: globalAndroid.view.View, direction: number): globalAndroid.view.View;
				public setLayoutManager(layout: androidx.recyclerview.widget.RecyclerView.LayoutManager): void;
				public isTextDirectionResolved(): boolean;
				public sendAccessibilityEventUnchecked(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public onDraw(canvas: globalAndroid.graphics.Canvas): void;
				public smoothScrollBy(dx: number, dy: number, interpolator: globalAndroid.view.animation.Interpolator): void;
				public scheduleDrawable(who: globalAndroid.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public scrollBy(x: number, y: number): void;
				public computeHorizontalScrollOffset(): number;
				public getLayoutManager(): androidx.recyclerview.widget.RecyclerView.LayoutManager;
				public suppressLayout(suppress: boolean): void;
				public dispatchNestedPreFling(velocityX: number, velocityY: number): boolean;
				public updateViewLayout(view: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public onNestedScroll(target: globalAndroid.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
				public stopNestedScroll(type: number): void;
				public focusSearch(focused: globalAndroid.view.View, direction: number): globalAndroid.view.View;
				public onTouchEvent(e: globalAndroid.view.MotionEvent): boolean;
				public smoothScrollBy(dx: number, dy: number): void;
				public onChildDetachedFromWindow(child: globalAndroid.view.View): void;
				public addFocusables(views: java.util.ArrayList<globalAndroid.view.View>, direction: number, focusableMode: number): void;
				public clearChildFocus(child: globalAndroid.view.View): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public onKeyLongPress(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public invalidateDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public findViewHolderForItemId(id: number): androidx.recyclerview.widget.RecyclerView.ViewHolder;
				public getChildDrawingOrder(drawingPosition: number): number;
				public addView(child: globalAndroid.view.View, index: number, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public setAccessibilityDelegateCompat(accessibilityDelegate: androidx.recyclerview.widget.RecyclerViewAccessibilityDelegate): void;
				public onTouchEvent(event: globalAndroid.view.MotionEvent): boolean;
				public drawChild(canvas: globalAndroid.graphics.Canvas, child: globalAndroid.view.View, drawingTime: number): boolean;
				public dispatchNestedScroll(dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number, offsetInWindow: native.Array<number>, type: number): boolean;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: globalAndroid.view.KeyEvent): boolean;
				public dispatchRestoreInstanceState(container: globalAndroid.util.SparseArray<globalAndroid.os.Parcelable>): void;
				public sendAccessibilityEvent(eventType: number): void;
				public dispatchNestedPreScroll(dx: number, dy: number, consumed: native.Array<number>, offsetInWindow: native.Array<number>, type: number): boolean;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
				public scrollTo(x: number, y: number): void;
				public computeHorizontalScrollRange(): number;
				public requestFitSystemWindows(): void;
				public hasPendingAdapterUpdates(): boolean;
				public onRestoreInstanceState(state: globalAndroid.os.Parcelable): void;
				public onScrolled(dx: number, dy: number): void;
				public dispatchPopulateAccessibilityEvent(event: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
				public findViewHolderForAdapterPosition(position: number): androidx.recyclerview.widget.RecyclerView.ViewHolder;
				public removeItemDecoration(decor: androidx.recyclerview.widget.RecyclerView.ItemDecoration): void;
				public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback, type: number): globalAndroid.view.ActionMode;
				public getRecycledViewPool(): androidx.recyclerview.widget.RecyclerView.RecycledViewPool;
				/** @deprecated */
				public setLayoutFrozen(frozen: boolean): void;
				public getClipToPadding(): boolean;
				public nestedScrollBy(x: number, y: number): void;
				public generateLayoutParams(p: globalAndroid.view.ViewGroup.LayoutParams): globalAndroid.view.ViewGroup.LayoutParams;
				public dispatchNestedScroll(dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number, offsetInWindow: native.Array<number>): boolean;
				public setAdapter(adapter: androidx.recyclerview.widget.RecyclerView.Adapter<any>): void;
				public findChildViewUnder(x: number, y: number): globalAndroid.view.View;
				public computeVerticalScrollExtent(): number;
				public childHasTransientStateChanged(child: globalAndroid.view.View, childHasTransientState: boolean): void;
				public addView(child: globalAndroid.view.View): void;
				public getBaseline(): number;
				public isTextAlignmentResolved(): boolean;
				public getLayoutDirection(): number;
				public addView(child: globalAndroid.view.View, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public getItemDecorationAt(index: number): androidx.recyclerview.widget.RecyclerView.ItemDecoration;
				public canResolveTextDirection(): boolean;
				public canResolveTextAlignment(): boolean;
				public findContainingItemView(view: globalAndroid.view.View): globalAndroid.view.View;
				public dispatchNestedPreScroll(dx: number, dy: number, consumed: native.Array<number>, offsetInWindow: native.Array<number>): boolean;
				/** @deprecated */
				public getChildPosition(child: globalAndroid.view.View): number;
				public addOnItemTouchListener(listener: androidx.recyclerview.widget.RecyclerView.OnItemTouchListener): void;
				public requestLayout(): void;
				public getDecoratedBoundsWithMargins(view: globalAndroid.view.View, outBounds: globalAndroid.graphics.Rect): void;
				public isAttachedToWindow(): boolean;
				public onStartNestedScroll(child: globalAndroid.view.View, target: globalAndroid.view.View, nestedScrollAxes: number): boolean;
				public onNestedPreScroll(target: globalAndroid.view.View, dx: number, dy: number, consumed: native.Array<number>): void;
				public addOnChildAttachStateChangeListener(listener: androidx.recyclerview.widget.RecyclerView.OnChildAttachStateChangeListener): void;
				public setPreserveFocusAfterLayout(preserveFocusAfterLayout: boolean): void;
				public draw(canvas: globalAndroid.graphics.Canvas): void;
				public removeView(view: globalAndroid.view.View): void;
				public getChildDrawingOrder(childCount: number, i: number): number;
				public requestChildRectangleOnScreen(child: globalAndroid.view.View, rectangle: globalAndroid.graphics.Rect, immediate: boolean): boolean;
				public requestChildFocus(child: globalAndroid.view.View, focused: globalAndroid.view.View): void;
				public createContextMenu(menu: globalAndroid.view.ContextMenu): void;
				public canResolveLayoutDirection(): boolean;
				public isComputingLayout(): boolean;
				/** @deprecated */
				public setLayoutTransition(transition: globalAndroid.animation.LayoutTransition): void;
				public hasNestedScrollingParent(): boolean;
				public clearOnScrollListeners(): void;
				/** @deprecated */
				public invalidateChild(child: globalAndroid.view.View, dirty: globalAndroid.graphics.Rect): void;
				public setNestedScrollingEnabled(enabled: boolean): void;
				public smoothScrollToPosition(position: number): void;
				public focusSearch(direction: number): globalAndroid.view.View;
				/** @deprecated */
				public findViewHolderForPosition(position: number): androidx.recyclerview.widget.RecyclerView.ViewHolder;
				public childDrawableStateChanged(child: globalAndroid.view.View): void;
				public onStopNestedScroll(child: globalAndroid.view.View): void;
				public isLayoutRequested(): boolean;
				public startNestedScroll(axes: number, type: number): boolean;
				public onNestedPrePerformAccessibilityAction(target: globalAndroid.view.View, action: number, bundle2: globalAndroid.os.Bundle): boolean;
				public setChildDrawingOrderCallback(childDrawingOrderCallback: androidx.recyclerview.widget.RecyclerView.ChildDrawingOrderCallback): void;
				public getTextDirection(): number;
				public removeItemDecorationAt(index: number): void;
				public swapAdapter(adapter: androidx.recyclerview.widget.RecyclerView.Adapter<any>, removeAndRecycleExistingViews: boolean): void;
				public findContainingViewHolder(view: globalAndroid.view.View): androidx.recyclerview.widget.RecyclerView.ViewHolder;
				public isLayoutSuppressed(): boolean;
				public setRecycledViewPool(pool: androidx.recyclerview.widget.RecyclerView.RecycledViewPool): void;
				public getScrollState(): number;
				public startActionModeForChild(originalView: globalAndroid.view.View, callback: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
				public getAdapter(): androidx.recyclerview.widget.RecyclerView.Adapter<any>;
				public addItemDecoration(decor: androidx.recyclerview.widget.RecyclerView.ItemDecoration): void;
				/** @deprecated */
				public invalidateChildInParent(location: native.Array<number>, dirty: globalAndroid.graphics.Rect): globalAndroid.view.ViewParent;
				public onInterceptTouchEvent(ev: globalAndroid.view.MotionEvent): boolean;
				public computeHorizontalScrollExtent(): number;
				public setClipToPadding(clipToPadding: boolean): void;
				/** @deprecated */
				public setRecyclerListener(listener: androidx.recyclerview.widget.RecyclerView.RecyclerListener): void;
				public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
				public getChildDrawingOrder(childCount: number, drawingPosition: number): number;
				public computeVerticalScrollRange(): number;
				public dispatchNestedScroll(dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number, offsetInWindow: native.Array<number>, type: number, consumed: native.Array<number>): void;
				public showContextMenuForChild(originalView: globalAndroid.view.View): boolean;
				public recomputeViewAttributes(child: globalAndroid.view.View): void;
				public dispatchNestedFling(velocityX: number, velocityY: number, consumed: boolean): boolean;
				public isLayoutDirectionResolved(): boolean;
				public findViewHolderForLayoutPosition(position: number): androidx.recyclerview.widget.RecyclerView.ViewHolder;
				public onLayout(boolean0: boolean, int1: number, int2: number, int3: number, int4: number): void;
				public getChildItemId(child: globalAndroid.view.View): number;
				public onRequestFocusInDescendants(direction: number, previouslyFocusedRect: globalAndroid.graphics.Rect): boolean;
				public hasNestedScrollingParent(type: number): boolean;
				public unscheduleDrawable(who: globalAndroid.graphics.drawable.Drawable): void;
				public clearOnChildAttachStateChangeListeners(): void;
				/** @deprecated */
				public requestFitSystemWindows(): void;
				public setEdgeEffectFactory(edgeEffectFactory: androidx.recyclerview.widget.RecyclerView.EdgeEffectFactory): void;
				public requestChildRectangleOnScreen(child: globalAndroid.view.View, rect: globalAndroid.graphics.Rect, immediate: boolean): boolean;
				public showContextMenuForChild(originalView: globalAndroid.view.View, x: number, y: number): boolean;
				public bringChildToFront(child: globalAndroid.view.View): void;
				public setLayoutTransition(transition: globalAndroid.animation.LayoutTransition): void;
				public removeDetachedView(child: globalAndroid.view.View, animate: boolean): void;
				public startNestedScroll(axes: number): boolean;
				public stopNestedScroll(): void;
				public setOnFlingListener(onFlingListener: androidx.recyclerview.widget.RecyclerView.OnFlingListener): void;
				public onDraw(c: globalAndroid.graphics.Canvas): void;
				public onSizeChanged(w: number, h: number, oldw: number, oldh: number): void;
				public onAttachedToWindow(): void;
				public getParent(): globalAndroid.view.ViewParent;
				public isNestedScrollingEnabled(): boolean;
				public constructor(context: globalAndroid.content.Context);
				public computeVerticalScrollOffset(): number;
				public getItemAnimator(): androidx.recyclerview.widget.RecyclerView.ItemAnimator;
				public checkLayoutParams(p: globalAndroid.view.ViewGroup.LayoutParams): boolean;
				public onNestedScrollAccepted(child: globalAndroid.view.View, target: globalAndroid.view.View, axes: number): void;
				public getMaxFlingVelocity(): number;
				public removeOnScrollListener(listener: androidx.recyclerview.widget.RecyclerView.OnScrollListener): void;
				public smoothScrollBy(dx: number, dy: number, interpolator: globalAndroid.view.animation.Interpolator, duration: number): void;
				public removeRecyclerListener(listener: androidx.recyclerview.widget.RecyclerView.RecyclerListener): void;
				public isAnimating(): boolean;
				public getOnFlingListener(): androidx.recyclerview.widget.RecyclerView.OnFlingListener;
				public addView(child: globalAndroid.view.View, index: number): void;
				public draw(c: globalAndroid.graphics.Canvas): void;
				public addFocusables(views: java.util.ArrayList<globalAndroid.view.View>, direction: number): void;
				public addRecyclerListener(listener: androidx.recyclerview.widget.RecyclerView.RecyclerListener): void;
				public addOnScrollListener(listener: androidx.recyclerview.widget.RecyclerView.OnScrollListener): void;
				public setScrollingTouchSlop(slopConstant: number): void;
				public getTextAlignment(): number;
				public getChildViewHolder(child: globalAndroid.view.View): androidx.recyclerview.widget.RecyclerView.ViewHolder;
				public setItemViewCacheSize(size: number): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
				public addView(child: globalAndroid.view.View, width: number, height: number): void;
				public onChildAttachedToWindow(child: globalAndroid.view.View): void;
				public onScrollStateChanged(state: number): void;
				public onDetachedFromWindow(): void;
				public focusableViewAvailable(v: globalAndroid.view.View): void;
				public generateDefaultLayoutParams(): globalAndroid.view.ViewGroup.LayoutParams;
				public getMinFlingVelocity(): number;
				public requestSendAccessibilityEvent(child: globalAndroid.view.View, event: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
				public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
				public offsetChildrenHorizontal(dx: number): void;
				public fling(velocityX: number, velocityY: number): boolean;
				public scrollToPosition(position: number): void;
				public removeOnChildAttachStateChangeListener(listener: androidx.recyclerview.widget.RecyclerView.OnChildAttachStateChangeListener): void;
				public notifySubtreeAccessibilityStateChanged(child: globalAndroid.view.View, source: globalAndroid.view.View, changeType: number): void;
				public getChildLayoutPosition(child: globalAndroid.view.View): number;
				public onInterceptTouchEvent(e: globalAndroid.view.MotionEvent): boolean;
				public requestTransparentRegion(child: globalAndroid.view.View): void;
				public onMeasure(widthSpec: number, heightSpec: number): void;
				public getAccessibilityClassName(): string;
				public onDescendantInvalidated(child: globalAndroid.view.View, target: globalAndroid.view.View): void;
				public onSaveInstanceState(): globalAndroid.os.Parcelable;
				public invalidateItemDecorations(): void;
				public getChildVisibleRect(child: globalAndroid.view.View, r: globalAndroid.graphics.Rect, offset: globalAndroid.graphics.Point): boolean;
				public addItemDecoration(decor: androidx.recyclerview.widget.RecyclerView.ItemDecoration, index: number): void;
				public onGenericMotionEvent(event: globalAndroid.view.MotionEvent): boolean;
				/** @deprecated */
				public setOnScrollListener(listener: androidx.recyclerview.widget.RecyclerView.OnScrollListener): void;
				public setItemAnimator(animator: androidx.recyclerview.widget.RecyclerView.ItemAnimator): void;
				public onKeyUp(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
				public getChildAdapterPosition(child: globalAndroid.view.View): number;
				public onNestedPreFling(target: globalAndroid.view.View, velocityX: number, velocityY: number): boolean;
				public getEdgeEffectFactory(): androidx.recyclerview.widget.RecyclerView.EdgeEffectFactory;
				public offsetChildrenVertical(dy: number): void;
			}
			export module RecyclerView {
				export abstract class Adapter<VH>  extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.Adapter<any>>;
					public createViewHolder(parent: globalAndroid.view.ViewGroup, viewType: number): VH;
					public notifyItemRangeInserted(positionStart: number, itemCount: number): void;
					public notifyItemChanged(position: number, payload: any): void;
					public bindViewHolder(holder: VH, position: number): void;
					public notifyDataSetChanged(): void;
					public findRelativeAdapterPositionIn(adapter: androidx.recyclerview.widget.RecyclerView.Adapter<any>, viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder, localPosition: number): number;
					public setHasStableIds(hasStableIds: boolean): void;
					public getStateRestorationPolicy(): androidx.recyclerview.widget.RecyclerView.Adapter.StateRestorationPolicy;
					public constructor();
					public onAttachedToRecyclerView(recyclerView: androidx.recyclerview.widget.RecyclerView): void;
					public hasObservers(): boolean;
					public onBindViewHolder(holder: VH, position: number, payloads: java.util.List<any>): void;
					public notifyItemChanged(position: number): void;
					public onViewDetachedFromWindow(holder: VH): void;
					public getItemViewType(position: number): number;
					public notifyItemRangeChanged(positionStart: number, itemCount: number): void;
					public notifyItemRangeChanged(positionStart: number, itemCount: number, payload: any): void;
					public onCreateViewHolder(viewGroup0: globalAndroid.view.ViewGroup, int1: number): VH;
					public notifyItemInserted(position: number): void;
					public onBindViewHolder(viewHolder0: VH, int1: number): void;
					public onDetachedFromRecyclerView(recyclerView: androidx.recyclerview.widget.RecyclerView): void;
					public notifyItemRangeRemoved(positionStart: number, itemCount: number): void;
					public getItemId(position: number): number;
					public notifyItemRemoved(position: number): void;
					public hasStableIds(): boolean;
					public onViewRecycled(holder: VH): void;
					public onViewAttachedToWindow(holder: VH): void;
					public setStateRestorationPolicy(strategy: androidx.recyclerview.widget.RecyclerView.Adapter.StateRestorationPolicy): void;
					public unregisterAdapterDataObserver(observer: androidx.recyclerview.widget.RecyclerView.AdapterDataObserver): void;
					public getItemCount(): number;
					public onFailedToRecycleView(holder: VH): boolean;
					public notifyItemMoved(fromPosition: number, toPosition: number): void;
					public registerAdapterDataObserver(observer: androidx.recyclerview.widget.RecyclerView.AdapterDataObserver): void;
				}
				export module Adapter {
					export class StateRestorationPolicy {
						public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.Adapter.StateRestorationPolicy>;
						public static ALLOW: androidx.recyclerview.widget.RecyclerView.Adapter.StateRestorationPolicy;
						public static PREVENT_WHEN_EMPTY: androidx.recyclerview.widget.RecyclerView.Adapter.StateRestorationPolicy;
						public static PREVENT: androidx.recyclerview.widget.RecyclerView.Adapter.StateRestorationPolicy;
						public static values(): native.Array<androidx.recyclerview.widget.RecyclerView.Adapter.StateRestorationPolicy>;
						public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
						public static valueOf(name: string): androidx.recyclerview.widget.RecyclerView.Adapter.StateRestorationPolicy;
					}
				}
				export class AdapterDataObservable extends globalAndroid.database.Observable<androidx.recyclerview.widget.RecyclerView.AdapterDataObserver> {
					public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.AdapterDataObservable>;
					public notifyItemRangeInserted(positionStart: number, itemCount: number): void;
					public notifyStateRestorationPolicyChanged(): void;
					public notifyChanged(): void;
					public notifyItemRangeChanged(positionStart: number, itemCount: number): void;
					public notifyItemRangeChanged(positionStart: number, itemCount: number, payload: any): void;
					public notifyItemMoved(fromPosition: number, toPosition: number): void;
					public hasObservers(): boolean;
					public notifyItemRangeRemoved(positionStart: number, itemCount: number): void;
				}
				export abstract class AdapterDataObserver extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.AdapterDataObserver>;
					public onChanged(): void;
					public onItemRangeChanged(positionStart: number, itemCount: number, payload: any): void;
					public onItemRangeRemoved(positionStart: number, itemCount: number): void;
					public constructor();
					public onStateRestorationPolicyChanged(): void;
					public onItemRangeInserted(positionStart: number, itemCount: number): void;
					public onItemRangeChanged(positionStart: number, itemCount: number): void;
					public onItemRangeMoved(fromPosition: number, toPosition: number, itemCount: number): void;
				}
				export class ChildDrawingOrderCallback extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.ChildDrawingOrderCallback>;
					/**
					 * Constructs a new instance of the androidx.recyclerview.widget.RecyclerView() when extending the interface class.
					 */
					public constructor(implementation: {
						onGetChildDrawingOrder(int0: number, int1: number): number;
					});
					public constructor();
					public onGetChildDrawingOrder(int0: number, int1: number): number;
				}
				export class EdgeEffectFactory extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.EdgeEffectFactory>;
					public static DIRECTION_LEFT: number;
					public static DIRECTION_TOP: number;
					public static DIRECTION_RIGHT: number;
					public static DIRECTION_BOTTOM: number;
					public createEdgeEffect(view: androidx.recyclerview.widget.RecyclerView, direction: number): globalAndroid.widget.EdgeEffect;
					public constructor();
				}
				export module EdgeEffectFactory {
					export class EdgeDirection extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.EdgeEffectFactory.EdgeDirection>;
						/**
						 * Constructs a new instance of the androidx.recyclerview.widget.RecyclerView() when extending the interface class.
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
				export abstract class ItemAnimator extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.ItemAnimator>;
					public static FLAG_CHANGED: number;
					public static FLAG_REMOVED: number;
					public static FLAG_INVALIDATED: number;
					public static FLAG_MOVED: number;
					public static FLAG_APPEARED_IN_PRE_LAYOUT: number;
					public recordPostLayoutInformation(state: androidx.recyclerview.widget.RecyclerView.State, viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder): androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo;
					public animateDisappearance(viewHolder0: androidx.recyclerview.widget.RecyclerView.ViewHolder, itemHolderInfo1: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo, itemHolderInfo2: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo): boolean;
					public dispatchAnimationsFinished(): void;
					public setRemoveDuration(removeDuration: number): void;
					public dispatchAnimationFinished(viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
					public getRemoveDuration(): number;
					public animateChange(viewHolder0: androidx.recyclerview.widget.RecyclerView.ViewHolder, viewHolder1: androidx.recyclerview.widget.RecyclerView.ViewHolder, itemHolderInfo2: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo, itemHolderInfo3: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo): boolean;
					public dispatchAnimationStarted(viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
					public canReuseUpdatedViewHolder(viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder, payloads: java.util.List<any>): boolean;
					public setChangeDuration(changeDuration: number): void;
					public constructor();
					public recordPreLayoutInformation(state: androidx.recyclerview.widget.RecyclerView.State, viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder, changeFlags: number, payloads: java.util.List<any>): androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo;
					public setMoveDuration(moveDuration: number): void;
					public obtainHolderInfo(): androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo;
					public endAnimations(): void;
					public getAddDuration(): number;
					public endAnimation(viewHolder0: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
					public animateAppearance(viewHolder0: androidx.recyclerview.widget.RecyclerView.ViewHolder, itemHolderInfo1: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo, itemHolderInfo2: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo): boolean;
					public runPendingAnimations(): void;
					public animatePersistence(viewHolder0: androidx.recyclerview.widget.RecyclerView.ViewHolder, itemHolderInfo1: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo, itemHolderInfo2: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo): boolean;
					public onAnimationStarted(viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
					public setAddDuration(addDuration: number): void;
					public onAnimationFinished(viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
					public isRunning(): boolean;
					public getChangeDuration(): number;
					public canReuseUpdatedViewHolder(viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder): boolean;
					public isRunning(listener: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemAnimatorFinishedListener): boolean;
					public getMoveDuration(): number;
				}
				export module ItemAnimator {
					export class AdapterChanges extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.ItemAnimator.AdapterChanges>;
						/**
						 * Constructs a new instance of the androidx.recyclerview.widget.RecyclerView() when extending the interface class.
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
					export class ItemAnimatorFinishedListener extends java.lang.Object {
						public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemAnimatorFinishedListener>;
						/**
						 * Constructs a new instance of the androidx.recyclerview.widget.RecyclerView() when extending the interface class.
						 */
						public constructor(implementation: {
							onAnimationsFinished(): void;
						});
						public constructor();
						public onAnimationsFinished(): void;
					}
					export class ItemAnimatorListener extends java.lang.Object {
						public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemAnimatorListener>;
						/**
						 * Constructs a new instance of the androidx.recyclerview.widget.RecyclerView() when extending the interface class.
						 */
						public constructor(implementation: {
							onAnimationFinished(viewHolder0: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
						});
						public constructor();
						public onAnimationFinished(viewHolder0: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
					}
					export class ItemHolderInfo extends java.lang.Object {
						public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo>;
						public left: number;
						public top: number;
						public right: number;
						public bottom: number;
						public changeFlags: number;
						public constructor();
						public setFrom(holder: androidx.recyclerview.widget.RecyclerView.ViewHolder): androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo;
						public setFrom(holder: androidx.recyclerview.widget.RecyclerView.ViewHolder, flags: number): androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo;
					}
				}
				export class ItemAnimatorRestoreListener extends java.lang.Object implements androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemAnimatorListener {
					public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.ItemAnimatorRestoreListener>;
					public onAnimationFinished(item: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
				}
				export abstract class ItemDecoration extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.ItemDecoration>;
					/** @deprecated */
					public onDraw(c: globalAndroid.graphics.Canvas, parent: androidx.recyclerview.widget.RecyclerView): void;
					public onDrawOver(c: globalAndroid.graphics.Canvas, parent: androidx.recyclerview.widget.RecyclerView, state: androidx.recyclerview.widget.RecyclerView.State): void;
					public getItemOffsets(outRect: globalAndroid.graphics.Rect, view: globalAndroid.view.View, parent: androidx.recyclerview.widget.RecyclerView, state: androidx.recyclerview.widget.RecyclerView.State): void;
					public constructor();
					/** @deprecated */
					public onDrawOver(c: globalAndroid.graphics.Canvas, parent: androidx.recyclerview.widget.RecyclerView): void;
					/** @deprecated */
					public getItemOffsets(outRect: globalAndroid.graphics.Rect, itemPosition: number, parent: androidx.recyclerview.widget.RecyclerView): void;
					public onDraw(c: globalAndroid.graphics.Canvas, parent: androidx.recyclerview.widget.RecyclerView, state: androidx.recyclerview.widget.RecyclerView.State): void;
				}
				export abstract class LayoutManager extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.LayoutManager>;
					public isAutoMeasureEnabled(): boolean;
					public onDetachedFromWindow(view: androidx.recyclerview.widget.RecyclerView, recycler: androidx.recyclerview.widget.RecyclerView.Recycler): void;
					public getDecoratedBoundsWithMargins(view: globalAndroid.view.View, outBounds: globalAndroid.graphics.Rect): void;
					public getMinimumWidth(): number;
					public getPosition(view: globalAndroid.view.View): number;
					public stopIgnoringView(view: globalAndroid.view.View): void;
					public onItemsMoved(recyclerView: androidx.recyclerview.widget.RecyclerView, from: number, to: number, itemCount: number): void;
					public supportsPredictiveItemAnimations(): boolean;
					public setItemPrefetchEnabled(enabled: boolean): void;
					public generateLayoutParams(c: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet): androidx.recyclerview.widget.RecyclerView.LayoutParams;
					public attachView(child: globalAndroid.view.View, index: number): void;
					public onAttachedToWindow(view: androidx.recyclerview.widget.RecyclerView): void;
					public offsetChildrenHorizontal(dx: number): void;
					public setMeasuredDimension(widthSize: number, heightSize: number): void;
					public constructor();
					public getDecoratedBottom(child: globalAndroid.view.View): number;
					public onMeasure(recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State, widthSpec: number, heightSpec: number): void;
					public getWidthMode(): number;
					public ignoreView(view: globalAndroid.view.View): void;
					public getMinimumHeight(): number;
					public detachAndScrapAttachedViews(recycler: androidx.recyclerview.widget.RecyclerView.Recycler): void;
					public getPaddingTop(): number;
					public detachViewAt(index: number): void;
					public findContainingItemView(view: globalAndroid.view.View): globalAndroid.view.View;
					public getHeightMode(): number;
					public onInitializeAccessibilityEvent(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
					public canScrollVertically(): boolean;
					public getHeight(): number;
					public getLayoutDirection(): number;
					public getPaddingBottom(): number;
					public computeHorizontalScrollExtent(state: androidx.recyclerview.widget.RecyclerView.State): number;
					public getRowCountForAccessibility(recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State): number;
					public getDecoratedLeft(child: globalAndroid.view.View): number;
					public computeHorizontalScrollRange(state: androidx.recyclerview.widget.RecyclerView.State): number;
					public scrollHorizontallyBy(dx: number, recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State): number;
					public computeHorizontalScrollOffset(state: androidx.recyclerview.widget.RecyclerView.State): number;
					public detachAndScrapViewAt(index: number, recycler: androidx.recyclerview.widget.RecyclerView.Recycler): void;
					public onFocusSearchFailed(focused: globalAndroid.view.View, direction: number, recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State): globalAndroid.view.View;
					public onSaveInstanceState(): globalAndroid.os.Parcelable;
					public addDisappearingView(child: globalAndroid.view.View, index: number): void;
					public computeVerticalScrollRange(state: androidx.recyclerview.widget.RecyclerView.State): number;
					public getDecoratedMeasuredWidth(child: globalAndroid.view.View): number;
					public onItemsRemoved(recyclerView: androidx.recyclerview.widget.RecyclerView, positionStart: number, itemCount: number): void;
					public offsetChildrenVertical(dy: number): void;
					public moveView(fromIndex: number, toIndex: number): void;
					public setMeasurementCacheEnabled(measurementCacheEnabled: boolean): void;
					public getLeftDecorationWidth(child: globalAndroid.view.View): number;
					public onRestoreInstanceState(state: globalAndroid.os.Parcelable): void;
					public checkLayoutParams(lp: androidx.recyclerview.widget.RecyclerView.LayoutParams): boolean;
					public requestLayout(): void;
					public startSmoothScroll(smoothScroller: androidx.recyclerview.widget.RecyclerView.SmoothScroller): void;
					public smoothScrollToPosition(recyclerView: androidx.recyclerview.widget.RecyclerView, state: androidx.recyclerview.widget.RecyclerView.State, position: number): void;
					public getClipToPadding(): boolean;
					public requestSimpleAnimationsInNextLayout(): void;
					public requestChildRectangleOnScreen(parent: androidx.recyclerview.widget.RecyclerView, child: globalAndroid.view.View, rect: globalAndroid.graphics.Rect, immediate: boolean, focusedChildVisible: boolean): boolean;
					public setMeasuredDimension(childrenBounds: globalAndroid.graphics.Rect, wSpec: number, hSpec: number): void;
					public getWidth(): number;
					public static getChildMeasureSpec(parentSize: number, parentMode: number, padding: number, childDimension: number, canScroll: boolean): number;
					public getTopDecorationHeight(child: globalAndroid.view.View): number;
					public computeVerticalScrollOffset(state: androidx.recyclerview.widget.RecyclerView.State): number;
					public detachAndScrapView(child: globalAndroid.view.View, recycler: androidx.recyclerview.widget.RecyclerView.Recycler): void;
					public getBottomDecorationHeight(child: globalAndroid.view.View): number;
					public getDecoratedRight(child: globalAndroid.view.View): number;
					public measureChild(child: globalAndroid.view.View, widthUsed: number, heightUsed: number): void;
					public endAnimation(view: globalAndroid.view.View): void;
					public getTransformedBoundingBox(child: globalAndroid.view.View, includeDecorInsets: boolean, out: globalAndroid.graphics.Rect): void;
					public addView(child: globalAndroid.view.View, index: number): void;
					public removeView(child: globalAndroid.view.View): void;
					public attachView(child: globalAndroid.view.View): void;
					public layoutDecoratedWithMargins(child: globalAndroid.view.View, left: number, top: number, right: number, bottom: number): void;
					public getFocusedChild(): globalAndroid.view.View;
					public getDecoratedMeasuredHeight(child: globalAndroid.view.View): number;
					public getChildCount(): number;
					public requestChildRectangleOnScreen(parent: androidx.recyclerview.widget.RecyclerView, child: globalAndroid.view.View, rect: globalAndroid.graphics.Rect, immediate: boolean): boolean;
					public performAccessibilityActionForItem(recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State, view: globalAndroid.view.View, action: number, bundle4: globalAndroid.os.Bundle): boolean;
					public collectInitialPrefetchPositions(adapterItemCount: number, layoutPrefetchRegistry: androidx.recyclerview.widget.RecyclerView.LayoutManager.LayoutPrefetchRegistry): void;
					public calculateItemDecorationsForChild(child: globalAndroid.view.View, outRect: globalAndroid.graphics.Rect): void;
					public scrollVerticallyBy(dy: number, recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State): number;
					public isLayoutHierarchical(recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State): boolean;
					public onItemsChanged(recyclerView: androidx.recyclerview.widget.RecyclerView): void;
					public postOnAnimation(action: java.lang.Runnable): void;
					public getPaddingLeft(): number;
					public getColumnCountForAccessibility(recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State): number;
					public addDisappearingView(child: globalAndroid.view.View): void;
					public onInitializeAccessibilityEvent(recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State, event: globalAndroid.view.accessibility.AccessibilityEvent): void;
					public assertInLayoutOrScroll(message: string): void;
					public generateDefaultLayoutParams(): androidx.recyclerview.widget.RecyclerView.LayoutParams;
					public getPaddingRight(): number;
					public removeViewAt(index: number): void;
					public getDecoratedTop(child: globalAndroid.view.View): number;
					public onInitializeAccessibilityNodeInfo(recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State, info: androidx.core.view.accessibility.AccessibilityNodeInfoCompat): void;
					public detachView(child: globalAndroid.view.View): void;
					public isViewPartiallyVisible(child: globalAndroid.view.View, completelyVisible: boolean, acceptEndPointInclusion: boolean): boolean;
					public measureChildWithMargins(child: globalAndroid.view.View, widthUsed: number, heightUsed: number): void;
					public onItemsUpdated(recyclerView: androidx.recyclerview.widget.RecyclerView, positionStart: number, itemCount: number): void;
					/** @deprecated */
					public setAutoMeasureEnabled(enabled: boolean): void;
					public removeAndRecycleAllViews(recycler: androidx.recyclerview.widget.RecyclerView.Recycler): void;
					public canScrollHorizontally(): boolean;
					public collectAdjacentPrefetchPositions(dx: number, dy: number, state: androidx.recyclerview.widget.RecyclerView.State, layoutPrefetchRegistry: androidx.recyclerview.widget.RecyclerView.LayoutManager.LayoutPrefetchRegistry): void;
					public layoutDecorated(child: globalAndroid.view.View, left: number, top: number, right: number, bottom: number): void;
					public isMeasurementCacheEnabled(): boolean;
					public performAccessibilityAction(recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State, action: number, bundle3: globalAndroid.os.Bundle): boolean;
					/** @deprecated */
					public onRequestChildFocus(parent: androidx.recyclerview.widget.RecyclerView, child: globalAndroid.view.View, focused: globalAndroid.view.View): boolean;
					public onScrollStateChanged(state: number): void;
					public getPaddingStart(): number;
					public getPaddingEnd(): number;
					public onRequestChildFocus(parent: androidx.recyclerview.widget.RecyclerView, state: androidx.recyclerview.widget.RecyclerView.State, child: globalAndroid.view.View, focused: globalAndroid.view.View): boolean;
					public assertNotInLayoutOrScroll(message: string): void;
					public hasFocus(): boolean;
					public scrollToPosition(position: number): void;
					public isAttachedToWindow(): boolean;
					public onLayoutCompleted(state: androidx.recyclerview.widget.RecyclerView.State): void;
					public isFocused(): boolean;
					public generateLayoutParams(lp: globalAndroid.view.ViewGroup.LayoutParams): androidx.recyclerview.widget.RecyclerView.LayoutParams;
					public isSmoothScrolling(): boolean;
					public addView(child: globalAndroid.view.View): void;
					public getBaseline(): number;
					public static chooseSize(spec: number, desired: number, min: number): number;
					public onLayoutChildren(recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State): void;
					public removeAndRecycleViewAt(index: number, recycler: androidx.recyclerview.widget.RecyclerView.Recycler): void;
					public removeAndRecycleView(child: globalAndroid.view.View, recycler: androidx.recyclerview.widget.RecyclerView.Recycler): void;
					public getChildAt(index: number): globalAndroid.view.View;
					/** @deprecated */
					public static getChildMeasureSpec(parentSize: number, padding: number, childDimension: number, canScroll: boolean): number;
					public attachView(child: globalAndroid.view.View, index: number, lp: androidx.recyclerview.widget.RecyclerView.LayoutParams): void;
					public removeDetachedView(child: globalAndroid.view.View): void;
					public onInitializeAccessibilityNodeInfoForItem(recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State, host: globalAndroid.view.View, info: androidx.core.view.accessibility.AccessibilityNodeInfoCompat): void;
					public static getProperties(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number): androidx.recyclerview.widget.RecyclerView.LayoutManager.Properties;
					public getSelectionModeForAccessibility(recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State): number;
					/** @deprecated */
					public onDetachedFromWindow(view: androidx.recyclerview.widget.RecyclerView): void;
					public onAddFocusables(recyclerView: androidx.recyclerview.widget.RecyclerView, views: java.util.ArrayList<globalAndroid.view.View>, direction: number, focusableMode: number): boolean;
					public onItemsUpdated(recyclerView: androidx.recyclerview.widget.RecyclerView, positionStart: number, itemCount: number, payload: any): void;
					public removeCallbacks(action: java.lang.Runnable): boolean;
					public findViewByPosition(position: number): globalAndroid.view.View;
					public onInterceptFocusSearch(focused: globalAndroid.view.View, direction: number): globalAndroid.view.View;
					public removeAllViews(): void;
					public computeVerticalScrollExtent(state: androidx.recyclerview.widget.RecyclerView.State): number;
					public getItemViewType(view: globalAndroid.view.View): number;
					public getItemCount(): number;
					public isItemPrefetchEnabled(): boolean;
					public onItemsAdded(recyclerView: androidx.recyclerview.widget.RecyclerView, positionStart: number, itemCount: number): void;
					public onAdapterChanged(oldAdapter: androidx.recyclerview.widget.RecyclerView.Adapter<any>, newAdapter: androidx.recyclerview.widget.RecyclerView.Adapter<any>): void;
					public getRightDecorationWidth(child: globalAndroid.view.View): number;
				}
				export module LayoutManager {
					export class LayoutPrefetchRegistry extends java.lang.Object {
						public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.LayoutManager.LayoutPrefetchRegistry>;
						/**
						 * Constructs a new instance of the androidx.recyclerview.widget.RecyclerView() when extending the interface class.
						 */
						public constructor(implementation: {
							addPosition(int0: number, int1: number): void;
						});
						public constructor();
						public addPosition(int0: number, int1: number): void;
					}
					export class Properties extends java.lang.Object {
						public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.LayoutManager.Properties>;
						public orientation: number;
						public spanCount: number;
						public reverseLayout: boolean;
						public stackFromEnd: boolean;
						public constructor();
					}
				}
				export class LayoutParams extends globalAndroid.view.ViewGroup.MarginLayoutParams {
					public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.LayoutParams>;
					public isItemChanged(): boolean;
					public constructor(source: globalAndroid.view.ViewGroup.LayoutParams);
					public isItemRemoved(): boolean;
					public constructor(c: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
					public viewNeedsUpdate(): boolean;
					public getBindingAdapterPosition(): number;
					/** @deprecated */
					public getViewPosition(): number;
					public constructor(width: number, height: number);
					public getViewLayoutPosition(): number;
					public constructor(source: androidx.recyclerview.widget.RecyclerView.LayoutParams);
					public getAbsoluteAdapterPosition(): number;
					/** @deprecated */
					public getViewAdapterPosition(): number;
					public constructor(source: globalAndroid.view.ViewGroup.MarginLayoutParams);
					public isViewInvalid(): boolean;
				}
				export class OnChildAttachStateChangeListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.OnChildAttachStateChangeListener>;
					/**
					 * Constructs a new instance of the androidx.recyclerview.widget.RecyclerView() when extending the interface class.
					 */
					public constructor(implementation: {
						onChildViewAttachedToWindow(view0: globalAndroid.view.View): void;
						onChildViewDetachedFromWindow(view0: globalAndroid.view.View): void;
					});
					public constructor();
					public onChildViewDetachedFromWindow(view0: globalAndroid.view.View): void;
					public onChildViewAttachedToWindow(view0: globalAndroid.view.View): void;
				}
				export abstract class OnFlingListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.OnFlingListener>;
					public constructor();
					public onFling(int0: number, int1: number): boolean;
				}
				export class OnItemTouchListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.OnItemTouchListener>;
					/**
					 * Constructs a new instance of the androidx.recyclerview.widget.RecyclerView() when extending the interface class.
					 */
					public constructor(implementation: {
						onInterceptTouchEvent(recyclerView0: androidx.recyclerview.widget.RecyclerView, motionEvent1: globalAndroid.view.MotionEvent): boolean;
						onTouchEvent(recyclerView0: androidx.recyclerview.widget.RecyclerView, motionEvent1: globalAndroid.view.MotionEvent): void;
						onRequestDisallowInterceptTouchEvent(boolean0: boolean): void;
					});
					public constructor();
					public onTouchEvent(recyclerView0: androidx.recyclerview.widget.RecyclerView, motionEvent1: globalAndroid.view.MotionEvent): void;
					public onRequestDisallowInterceptTouchEvent(boolean0: boolean): void;
					public onInterceptTouchEvent(recyclerView0: androidx.recyclerview.widget.RecyclerView, motionEvent1: globalAndroid.view.MotionEvent): boolean;
				}
				export abstract class OnScrollListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.OnScrollListener>;
					public constructor();
					public onScrollStateChanged(recyclerView: androidx.recyclerview.widget.RecyclerView, newState: number): void;
					public onScrolled(recyclerView: androidx.recyclerview.widget.RecyclerView, dx: number, dy: number): void;
				}
				export class Orientation extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.Orientation>;
					/**
					 * Constructs a new instance of the androidx.recyclerview.widget.RecyclerView() when extending the interface class.
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
				export class RecycledViewPool extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.RecycledViewPool>;
					public putRecycledView(scrap: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
					public constructor();
					public clear(): void;
					public getRecycledViewCount(viewType: number): number;
					public getRecycledView(viewType: number): androidx.recyclerview.widget.RecyclerView.ViewHolder;
					public setMaxRecycledViews(viewType: number, max: number): void;
				}
				export module RecycledViewPool {
					export class ScrapData extends java.lang.Object {
						public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.RecycledViewPool.ScrapData>;
					}
				}
				export class Recycler extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.Recycler>;
					public getScrapList(): java.util.List<androidx.recyclerview.widget.RecyclerView.ViewHolder>;
					public convertPreLayoutPositionToPostLayout(position: number): number;
					public recycleView(view: globalAndroid.view.View): void;
					public getViewForPosition(position: number): globalAndroid.view.View;
					public clear(): void;
					public setViewCacheSize(viewCount: number): void;
					public bindViewToPosition(view: globalAndroid.view.View, position: number): void;
					public constructor(this0: androidx.recyclerview.widget.RecyclerView);
				}
				export class RecyclerListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.RecyclerListener>;
					/**
					 * Constructs a new instance of the androidx.recyclerview.widget.RecyclerView() when extending the interface class.
					 */
					public constructor(implementation: {
						onViewRecycled(viewHolder0: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
					});
					public constructor();
					public onViewRecycled(viewHolder0: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
				}
				export class RecyclerViewDataObserver extends androidx.recyclerview.widget.RecyclerView.AdapterDataObserver {
					public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.RecyclerViewDataObserver>;
					public onChanged(): void;
					public onItemRangeChanged(positionStart: number, itemCount: number, payload: any): void;
					public onItemRangeRemoved(positionStart: number, itemCount: number): void;
					public onStateRestorationPolicyChanged(): void;
					public onItemRangeInserted(positionStart: number, itemCount: number): void;
					public onItemRangeChanged(positionStart: number, itemCount: number): void;
					public onItemRangeMoved(fromPosition: number, toPosition: number, itemCount: number): void;
				}
				export class SavedState extends androidx.customview.view.AbsSavedState {
					public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.SavedState>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<androidx.recyclerview.widget.RecyclerView.SavedState>;
					public writeToParcel(dest: globalAndroid.os.Parcel, flags: number): void;
					public describeContents(): number;
				}
				export class SimpleOnItemTouchListener extends java.lang.Object implements androidx.recyclerview.widget.RecyclerView.OnItemTouchListener {
					public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.SimpleOnItemTouchListener>;
					public constructor();
					public onInterceptTouchEvent(rv: androidx.recyclerview.widget.RecyclerView, e: globalAndroid.view.MotionEvent): boolean;
					public onRequestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
					public onTouchEvent(rv: androidx.recyclerview.widget.RecyclerView, e: globalAndroid.view.MotionEvent): void;
				}
				export abstract class SmoothScroller extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.SmoothScroller>;
					public computeScrollVectorForPosition(targetPosition: number): globalAndroid.graphics.PointF;
					public getTargetPosition(): number;
					public getChildCount(): number;
					/** @deprecated */
					public instantScrollToPosition(position: number): void;
					public setTargetPosition(targetPosition: number): void;
					public findViewByPosition(position: number): globalAndroid.view.View;
					public getChildPosition(view: globalAndroid.view.View): number;
					public onStart(): void;
					public onTargetFound(view0: globalAndroid.view.View, state1: androidx.recyclerview.widget.RecyclerView.State, action2: androidx.recyclerview.widget.RecyclerView.SmoothScroller.Action): void;
					public getLayoutManager(): androidx.recyclerview.widget.RecyclerView.LayoutManager;
					public constructor();
					public onChildAttachedToWindow(child: globalAndroid.view.View): void;
					public isPendingInitialRun(): boolean;
					public isRunning(): boolean;
					public stop(): void;
					public normalize(scrollVector: globalAndroid.graphics.PointF): void;
					public onStop(): void;
					public onSeekTargetStep(int0: number, int1: number, state2: androidx.recyclerview.widget.RecyclerView.State, action3: androidx.recyclerview.widget.RecyclerView.SmoothScroller.Action): void;
				}
				export module SmoothScroller {
					export class Action extends java.lang.Object {
						public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.SmoothScroller.Action>;
						public static UNDEFINED_DURATION: number;
						public getInterpolator(): globalAndroid.view.animation.Interpolator;
						public update(dx: number, dy: number, duration: number, interpolator: globalAndroid.view.animation.Interpolator): void;
						public getDuration(): number;
						public setDuration(duration: number): void;
						public getDx(): number;
						public setDx(dx: number): void;
						public jumpTo(targetPosition: number): void;
						public setDy(dy: number): void;
						public constructor(dx: number, dy: number, duration: number);
						public getDy(): number;
						public constructor(dx: number, dy: number, duration: number, interpolator: globalAndroid.view.animation.Interpolator);
						public constructor(dx: number, dy: number);
						public setInterpolator(interpolator: globalAndroid.view.animation.Interpolator): void;
					}
					export class ScrollVectorProvider extends java.lang.Object {
						public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.SmoothScroller.ScrollVectorProvider>;
						/**
						 * Constructs a new instance of the androidx.recyclerview.widget.RecyclerView() when extending the interface class.
						 */
						public constructor(implementation: {
							computeScrollVectorForPosition(int0: number): globalAndroid.graphics.PointF;
						});
						public constructor();
						public computeScrollVectorForPosition(int0: number): globalAndroid.graphics.PointF;
					}
				}
				export class State extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.State>;
					public getRemainingScrollHorizontal(): number;
					public isMeasuring(): boolean;
					public willRunSimpleAnimations(): boolean;
					public didStructureChange(): boolean;
					public remove(resourceId: number): void;
					public isPreLayout(): boolean;
					public willRunPredictiveAnimations(): boolean;
					public getRemainingScrollVertical(): number;
					public toString(): string;
					public constructor();
					public hasTargetScrollPosition(): boolean;
					public get(resourceId: number): any;
					public getTargetScrollPosition(): number;
					public getItemCount(): number;
					public put(resourceId: number, data: any): void;
				}
				export abstract class ViewCacheExtension extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.ViewCacheExtension>;
					public constructor();
					public getViewForPositionAndType(recycler0: androidx.recyclerview.widget.RecyclerView.Recycler, int1: number, int2: number): globalAndroid.view.View;
				}
				export class ViewFlinger extends java.lang.Object implements java.lang.Runnable {
					public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.ViewFlinger>;
					public run(): void;
					public smoothScrollBy(dx: number, dy: number, duration: number, interpolator: globalAndroid.view.animation.Interpolator): void;
					public fling(velocityX: number, velocityY: number): void;
					public stop(): void;
				}
				export abstract class ViewHolder extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.ViewHolder>;
					public itemView: globalAndroid.view.View;
					public setIsRecyclable(recyclable: boolean): void;
					public getBindingAdapterPosition(): number;
					public getItemId(): number;
					/** @deprecated */
					public getAdapterPosition(): number;
					public getLayoutPosition(): number;
					public isRecyclable(): boolean;
					public getItemViewType(): number;
					public constructor(itemView: globalAndroid.view.View);
					public toString(): string;
					/** @deprecated */
					public getPosition(): number;
					public getAbsoluteAdapterPosition(): number;
					public getBindingAdapter(): androidx.recyclerview.widget.RecyclerView.Adapter<any>;
					public getOldPosition(): number;
				}
			}
		}
	}
}

declare module androidx {
	export module recyclerview {
		export module widget {
			export class RecyclerViewAccessibilityDelegate extends androidx.core.view.AccessibilityDelegateCompat {
				public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerViewAccessibilityDelegate>;
				public constructor(originalDelegate: any);
				public getItemDelegate(): androidx.core.view.AccessibilityDelegateCompat;
				public performAccessibilityAction(host: globalAndroid.view.View, action: number, bundle2: globalAndroid.os.Bundle): boolean;
				public constructor();
				public constructor(recyclerView: androidx.recyclerview.widget.RecyclerView);
				public onInitializeAccessibilityNodeInfo(host: globalAndroid.view.View, info: androidx.core.view.accessibility.AccessibilityNodeInfoCompat): void;
				public onInitializeAccessibilityEvent(host: globalAndroid.view.View, event: globalAndroid.view.accessibility.AccessibilityEvent): void;
			}
			export module RecyclerViewAccessibilityDelegate {
				export class ItemDelegate extends androidx.core.view.AccessibilityDelegateCompat {
					public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerViewAccessibilityDelegate.ItemDelegate>;
					public constructor(recyclerViewDelegate: androidx.recyclerview.widget.RecyclerViewAccessibilityDelegate);
					public onPopulateAccessibilityEvent(host: globalAndroid.view.View, event: globalAndroid.view.accessibility.AccessibilityEvent): void;
					public onRequestSendAccessibilityEvent(host: globalAndroid.view.ViewGroup, child: globalAndroid.view.View, event: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
					public dispatchPopulateAccessibilityEvent(host: globalAndroid.view.View, event: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
					public getAccessibilityNodeProvider(host: globalAndroid.view.View): androidx.core.view.accessibility.AccessibilityNodeProviderCompat;
					public onInitializeAccessibilityEvent(host: globalAndroid.view.View, event: globalAndroid.view.accessibility.AccessibilityEvent): void;
					public constructor();
					public sendAccessibilityEvent(host: globalAndroid.view.View, eventType: number): void;
					public sendAccessibilityEventUnchecked(host: globalAndroid.view.View, event: globalAndroid.view.accessibility.AccessibilityEvent): void;
					public onInitializeAccessibilityNodeInfo(host: globalAndroid.view.View, info: androidx.core.view.accessibility.AccessibilityNodeInfoCompat): void;
					public performAccessibilityAction(host: globalAndroid.view.View, action: number, bundle2: globalAndroid.os.Bundle): boolean;
					public constructor(originalDelegate: any);
				}
			}
		}
	}
}

declare module androidx {
	export module recyclerview {
		export module widget {
			export class ScrollbarHelper extends java.lang.Object {
				public static class: java.lang.Class<androidx.recyclerview.widget.ScrollbarHelper>;
			}
		}
	}
}

declare module androidx {
	export module recyclerview {
		export module widget {
			export abstract class SimpleItemAnimator extends androidx.recyclerview.widget.RecyclerView.ItemAnimator {
				public static class: java.lang.Class<androidx.recyclerview.widget.SimpleItemAnimator>;
				public onRemoveFinished(item: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
				public dispatchRemoveFinished(item: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
				public onMoveFinished(item: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
				public canReuseUpdatedViewHolder(viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder): boolean;
				public onRemoveStarting(item: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
				public animateChange(viewHolder0: androidx.recyclerview.widget.RecyclerView.ViewHolder, viewHolder1: androidx.recyclerview.widget.RecyclerView.ViewHolder, itemHolderInfo2: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo, itemHolderInfo3: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo): boolean;
				public setSupportsChangeAnimations(supportsChangeAnimations: boolean): void;
				public onMoveStarting(item: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
				public animatePersistence(viewHolder0: androidx.recyclerview.widget.RecyclerView.ViewHolder, itemHolderInfo1: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo, itemHolderInfo2: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo): boolean;
				public dispatchRemoveStarting(item: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
				public animateAppearance(viewHolder0: androidx.recyclerview.widget.RecyclerView.ViewHolder, itemHolderInfo1: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo, itemHolderInfo2: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo): boolean;
				public animateAppearance(viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder, preLayoutInfo: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo, postLayoutInfo: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo): boolean;
				public constructor();
				public dispatchMoveFinished(item: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
				public dispatchAddFinished(item: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
				public animateDisappearance(viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder, preLayoutInfo: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo, postLayoutInfo: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo): boolean;
				public dispatchChangeStarting(item: androidx.recyclerview.widget.RecyclerView.ViewHolder, oldItem: boolean): void;
				public animateRemove(viewHolder0: androidx.recyclerview.widget.RecyclerView.ViewHolder): boolean;
				public onAddFinished(item: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
				public onChangeStarting(item: androidx.recyclerview.widget.RecyclerView.ViewHolder, oldItem: boolean): void;
				public animateAdd(viewHolder0: androidx.recyclerview.widget.RecyclerView.ViewHolder): boolean;
				public animateDisappearance(viewHolder0: androidx.recyclerview.widget.RecyclerView.ViewHolder, itemHolderInfo1: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo, itemHolderInfo2: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo): boolean;
				public canReuseUpdatedViewHolder(viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder, payloads: java.util.List<any>): boolean;
				public animateChange(oldHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder, newHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder, preInfo: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo, postInfo: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo): boolean;
				public getSupportsChangeAnimations(): boolean;
				public animateChange(viewHolder0: androidx.recyclerview.widget.RecyclerView.ViewHolder, viewHolder1: androidx.recyclerview.widget.RecyclerView.ViewHolder, int2: number, int3: number, int4: number, int5: number): boolean;
				public animateMove(viewHolder0: androidx.recyclerview.widget.RecyclerView.ViewHolder, int1: number, int2: number, int3: number, int4: number): boolean;
				public dispatchChangeFinished(item: androidx.recyclerview.widget.RecyclerView.ViewHolder, oldItem: boolean): void;
				public dispatchMoveStarting(item: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
				public dispatchAddStarting(item: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
				public onChangeFinished(item: androidx.recyclerview.widget.RecyclerView.ViewHolder, oldItem: boolean): void;
				public animatePersistence(viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder, preInfo: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo, postInfo: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo): boolean;
				public onAddStarting(item: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
			}
		}
	}
}

declare module androidx {
	export module recyclerview {
		export module widget {
			export abstract class SnapHelper extends androidx.recyclerview.widget.RecyclerView.OnFlingListener {
				public static class: java.lang.Class<androidx.recyclerview.widget.SnapHelper>;
				public onFling(int0: number, int1: number): boolean;
				/** @deprecated */
				public createSnapScroller(layoutManager: androidx.recyclerview.widget.RecyclerView.LayoutManager): androidx.recyclerview.widget.LinearSmoothScroller;
				public findTargetSnapPosition(layoutManager0: androidx.recyclerview.widget.RecyclerView.LayoutManager, int1: number, int2: number): number;
				public findSnapView(layoutManager0: androidx.recyclerview.widget.RecyclerView.LayoutManager): globalAndroid.view.View;
				public onFling(velocityX: number, velocityY: number): boolean;
				public attachToRecyclerView(recyclerView: androidx.recyclerview.widget.RecyclerView): void;
				public createScroller(layoutManager: androidx.recyclerview.widget.RecyclerView.LayoutManager): androidx.recyclerview.widget.RecyclerView.SmoothScroller;
				public calculateScrollDistance(velocityX: number, velocityY: number): native.Array<number>;
				public calculateDistanceToFinalSnap(layoutManager0: androidx.recyclerview.widget.RecyclerView.LayoutManager, view1: globalAndroid.view.View): native.Array<number>;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module recyclerview {
		export module widget {
			export class SortedList<T>  extends java.lang.Object {
				public static class: java.lang.Class<androidx.recyclerview.widget.SortedList<any>>;
				public static INVALID_POSITION: number;
				public indexOf(item: T): number;
				public constructor(klass: java.lang.Class<T>, callback: androidx.recyclerview.widget.SortedList.Callback<T>);
				public replaceAll(items: java.util.Collection<T>): void;
				public recalculatePositionOfItemAt(index: number): void;
				public add(item: T): number;
				public addAll(items: native.Array<T>): void;
				public updateItemAt(index: number, item: T): void;
				public get(index: number): T;
				public addAll(items: native.Array<T>, mayModifyInput: boolean): void;
				public removeItemAt(index: number): T;
				public size(): number;
				public replaceAll(items: native.Array<T>): void;
				public addAll(items: java.util.Collection<T>): void;
				public endBatchedUpdates(): void;
				public replaceAll(items: native.Array<T>, mayModifyInput: boolean): void;
				public remove(item: T): boolean;
				public constructor(klass: java.lang.Class<T>, callback: androidx.recyclerview.widget.SortedList.Callback<T>, initialCapacity: number);
				public clear(): void;
				public beginBatchedUpdates(): void;
			}
			export module SortedList {
				export class BatchedCallback<T2>  extends androidx.recyclerview.widget.SortedList.Callback<any> {
					public static class: java.lang.Class<androidx.recyclerview.widget.SortedList.BatchedCallback<any>>;
					public onMoved(fromPosition: number, toPosition: number): void;
					public equals(obj: any): boolean;
					public static nullsFirst(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
					public static comparingLong(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public constructor(wrappedCallback: androidx.recyclerview.widget.SortedList.Callback<any>);
					public static comparingDouble(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public onRemoved(position: number, count: number): void;
					public thenComparing(keyExtractor: any /* any*/, keyComparator: java.util.Comparator<any>): java.util.Comparator<any>;
					public areContentsTheSame(object0: any, object1: any): boolean;
					public constructor();
					public reversed(): java.util.Comparator<any>;
					public thenComparingLong(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public static comparingInt(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public static naturalOrder(): java.util.Comparator<any>;
					public getChangePayload(item1: any, item2: any): any;
					public onChanged(position: number, count: number, payload: any): void;
					public compare(o1: any, o2: any): number;
					public onChanged(position: number, count: number): void;
					public thenComparing(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public thenComparingInt(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public thenComparingDouble(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public thenComparing(other: java.util.Comparator<any>): java.util.Comparator<any>;
					public onChanged(int0: number, int1: number): void;
					public static reverseOrder(): java.util.Comparator<any>;
					public dispatchLastEvent(): void;
					public compare(object0: any, object1: any): number;
					public static nullsLast(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
					public static comparing(keyExtractor: any /* any*/, keyComparator: java.util.Comparator<any>): java.util.Comparator<any>;
					public onInserted(position: number, count: number): void;
					public areContentsTheSame(oldItem: any, newItem: any): boolean;
					public areItemsTheSame(item1: any, item2: any): boolean;
					public static comparing(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public areItemsTheSame(object0: any, object1: any): boolean;
				}
				export abstract class Callback<T2>  extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.SortedList.Callback<any>>;
					public equals(obj: any): boolean;
					public static nullsFirst(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
					public static comparingLong(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public static comparingDouble(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public thenComparing(keyExtractor: any /* any*/, keyComparator: java.util.Comparator<any>): java.util.Comparator<any>;
					public constructor();
					public areItemsTheSame(object0: T2, object1: T2): boolean;
					public onRemoved(int0: number, int1: number): void;
					public onMoved(int0: number, int1: number): void;
					public reversed(): java.util.Comparator<any>;
					public thenComparingLong(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public static comparingInt(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public static naturalOrder(): java.util.Comparator<any>;
					public onChanged(position: number, count: number, payload: any): void;
					public thenComparing(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public thenComparingInt(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public thenComparingDouble(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public thenComparing(other: java.util.Comparator<any>): java.util.Comparator<any>;
					public onChanged(int0: number, int1: number): void;
					public static reverseOrder(): java.util.Comparator<any>;
					public compare(object0: any, object1: any): number;
					public static nullsLast(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
					public static comparing(keyExtractor: any /* any*/, keyComparator: java.util.Comparator<any>): java.util.Comparator<any>;
					public onInserted(int0: number, int1: number): void;
					public areContentsTheSame(object0: T2, object1: T2): boolean;
					public getChangePayload(item1: T2, item2: T2): any;
					public compare(object0: T2, object1: T2): number;
					public static comparing(keyExtractor: any /* any*/): java.util.Comparator<any>;
				}
			}
		}
	}
}

declare module androidx {
	export module recyclerview {
		export module widget {
			export abstract class SortedListAdapterCallback<T2>  extends androidx.recyclerview.widget.SortedList.Callback<any> {
				public static class: java.lang.Class<androidx.recyclerview.widget.SortedListAdapterCallback<any>>;
				public thenComparing(keyExtractor: any /* any*/): java.util.Comparator<any>;
				public static comparingInt(keyExtractor: any /* any*/): java.util.Comparator<any>;
				public onChanged(position: number, count: number): void;
				public onChanged(int0: number, int1: number): void;
				public static reverseOrder(): java.util.Comparator<any>;
				public thenComparingDouble(keyExtractor: any /* any*/): java.util.Comparator<any>;
				public constructor();
				public onMoved(fromPosition: number, toPosition: number): void;
				public reversed(): java.util.Comparator<any>;
				public static comparing(keyExtractor: any /* any*/, keyComparator: java.util.Comparator<any>): java.util.Comparator<any>;
				public onChanged(position: number, count: number, payload: any): void;
				public static naturalOrder(): java.util.Comparator<any>;
				public static comparingDouble(keyExtractor: any /* any*/): java.util.Comparator<any>;
				public static comparing(keyExtractor: any /* any*/): java.util.Comparator<any>;
				public thenComparing(keyExtractor: any /* any*/, keyComparator: java.util.Comparator<any>): java.util.Comparator<any>;
				public thenComparing(other: java.util.Comparator<any>): java.util.Comparator<any>;
				public constructor(adapter: androidx.recyclerview.widget.RecyclerView.Adapter<any>);
				public static nullsLast(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
				public thenComparingLong(keyExtractor: any /* any*/): java.util.Comparator<any>;
				public compare(object0: any, object1: any): number;
				public thenComparingInt(keyExtractor: any /* any*/): java.util.Comparator<any>;
				public static nullsFirst(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
				public equals(obj: any): boolean;
				public static comparingLong(keyExtractor: any /* any*/): java.util.Comparator<any>;
				public onInserted(position: number, count: number): void;
				public onRemoved(position: number, count: number): void;
			}
		}
	}
}

declare module androidx {
	export module recyclerview {
		export module widget {
			export class StableIdStorage extends java.lang.Object {
				public static class: java.lang.Class<androidx.recyclerview.widget.StableIdStorage>;
				/**
				 * Constructs a new instance of the androidx.recyclerview.widget.StableIdStorage interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					createStableIdLookup(): androidx.recyclerview.widget.StableIdStorage.StableIdLookup;
				});
				public constructor();
				public createStableIdLookup(): androidx.recyclerview.widget.StableIdStorage.StableIdLookup;
			}
			export module StableIdStorage {
				export class IsolatedStableIdStorage extends java.lang.Object implements androidx.recyclerview.widget.StableIdStorage {
					public static class: java.lang.Class<androidx.recyclerview.widget.StableIdStorage.IsolatedStableIdStorage>;
					public constructor();
					public createStableIdLookup(): androidx.recyclerview.widget.StableIdStorage.StableIdLookup;
				}
				export module IsolatedStableIdStorage {
					export class WrapperStableIdLookup extends java.lang.Object implements androidx.recyclerview.widget.StableIdStorage.StableIdLookup {
						public static class: java.lang.Class<androidx.recyclerview.widget.StableIdStorage.IsolatedStableIdStorage.WrapperStableIdLookup>;
						public localToGlobal(localId: number): number;
					}
				}
				export class NoStableIdStorage extends java.lang.Object implements androidx.recyclerview.widget.StableIdStorage {
					public static class: java.lang.Class<androidx.recyclerview.widget.StableIdStorage.NoStableIdStorage>;
					public constructor();
					public createStableIdLookup(): androidx.recyclerview.widget.StableIdStorage.StableIdLookup;
				}
				export class SharedPoolStableIdStorage extends java.lang.Object implements androidx.recyclerview.widget.StableIdStorage {
					public static class: java.lang.Class<androidx.recyclerview.widget.StableIdStorage.SharedPoolStableIdStorage>;
					public constructor();
					public createStableIdLookup(): androidx.recyclerview.widget.StableIdStorage.StableIdLookup;
				}
				export class StableIdLookup extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.StableIdStorage.StableIdLookup>;
					/**
					 * Constructs a new instance of the androidx.recyclerview.widget.StableIdStorage() when extending the interface class.
					 */
					public constructor(implementation: {
						localToGlobal(long0: number): number;
					});
					public constructor();
					public localToGlobal(long0: number): number;
				}
			}
		}
	}
}

declare module androidx {
	export module recyclerview {
		export module widget {
			export class StaggeredGridLayoutManager extends androidx.recyclerview.widget.RecyclerView.LayoutManager implements androidx.recyclerview.widget.RecyclerView.SmoothScroller.ScrollVectorProvider {
				public static class: java.lang.Class<androidx.recyclerview.widget.StaggeredGridLayoutManager>;
				public static HORIZONTAL: number;
				public static VERTICAL: number;
				public static GAP_HANDLING_NONE: number;
				public static GAP_HANDLING_LAZY: number;
				public static GAP_HANDLING_MOVE_ITEMS_BETWEEN_SPANS: number;
				public getReverseLayout(): boolean;
				public generateLayoutParams(lp: globalAndroid.view.ViewGroup.LayoutParams): androidx.recyclerview.widget.RecyclerView.LayoutParams;
				public onItemsMoved(recyclerView: androidx.recyclerview.widget.RecyclerView, from: number, to: number, itemCount: number): void;
				public assertNotInLayoutOrScroll(message: string): void;
				public constructor();
				public scrollVerticallyBy(dy: number, recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State): number;
				public findLastVisibleItemPositions(into: native.Array<number>): native.Array<number>;
				public canScrollHorizontally(): boolean;
				public isAutoMeasureEnabled(): boolean;
				public scrollToPositionWithOffset(position: number, offset: number): void;
				public generateDefaultLayoutParams(): androidx.recyclerview.widget.RecyclerView.LayoutParams;
				public onRestoreInstanceState(state: globalAndroid.os.Parcelable): void;
				public computeVerticalScrollRange(state: androidx.recyclerview.widget.RecyclerView.State): number;
				public onInitializeAccessibilityEvent(recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State, event: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public canScrollVertically(): boolean;
				public onLayoutChildren(recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State): void;
				public invalidateSpanAssignments(): void;
				public computeHorizontalScrollOffset(state: androidx.recyclerview.widget.RecyclerView.State): number;
				public generateLayoutParams(c: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet): androidx.recyclerview.widget.RecyclerView.LayoutParams;
				public onScrollStateChanged(state: number): void;
				public collectAdjacentPrefetchPositions(dx: number, dy: number, state: androidx.recyclerview.widget.RecyclerView.State, layoutPrefetchRegistry: androidx.recyclerview.widget.RecyclerView.LayoutManager.LayoutPrefetchRegistry): void;
				public findFirstCompletelyVisibleItemPositions(into: native.Array<number>): native.Array<number>;
				public onItemsUpdated(recyclerView: androidx.recyclerview.widget.RecyclerView, positionStart: number, itemCount: number, payload: any): void;
				public onFocusSearchFailed(focused: globalAndroid.view.View, direction: number, recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State): globalAndroid.view.View;
				public setMeasuredDimension(widthSize: number, heightSize: number): void;
				public checkLayoutParams(lp: androidx.recyclerview.widget.RecyclerView.LayoutParams): boolean;
				public getGapStrategy(): number;
				public findFirstVisibleItemPositions(into: native.Array<number>): native.Array<number>;
				public onLayoutCompleted(state: androidx.recyclerview.widget.RecyclerView.State): void;
				public offsetChildrenHorizontal(dx: number): void;
				public scrollToPosition(position: number): void;
				public onItemsAdded(recyclerView: androidx.recyclerview.widget.RecyclerView, positionStart: number, itemCount: number): void;
				public getSpanCount(): number;
				public setSpanCount(spanCount: number): void;
				public setMeasuredDimension(childrenBounds: globalAndroid.graphics.Rect, wSpec: number, hSpec: number): void;
				public onDetachedFromWindow(view: androidx.recyclerview.widget.RecyclerView, recycler: androidx.recyclerview.widget.RecyclerView.Recycler): void;
				public getOrientation(): number;
				public findLastCompletelyVisibleItemPositions(into: native.Array<number>): native.Array<number>;
				/** @deprecated */
				public onDetachedFromWindow(view: androidx.recyclerview.widget.RecyclerView): void;
				public setReverseLayout(reverseLayout: boolean): void;
				public computeScrollVectorForPosition(targetPosition: number): globalAndroid.graphics.PointF;
				public setOrientation(orientation: number): void;
				public setGapStrategy(gapStrategy: number): void;
				public computeVerticalScrollOffset(state: androidx.recyclerview.widget.RecyclerView.State): number;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public onSaveInstanceState(): globalAndroid.os.Parcelable;
				public computeHorizontalScrollExtent(state: androidx.recyclerview.widget.RecyclerView.State): number;
				public onInitializeAccessibilityEvent(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public scrollHorizontallyBy(dx: number, recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State): number;
				public smoothScrollToPosition(recyclerView: androidx.recyclerview.widget.RecyclerView, state: androidx.recyclerview.widget.RecyclerView.State, position: number): void;
				public onAdapterChanged(oldAdapter: androidx.recyclerview.widget.RecyclerView.Adapter<any>, newAdapter: androidx.recyclerview.widget.RecyclerView.Adapter<any>): void;
				public computeVerticalScrollExtent(state: androidx.recyclerview.widget.RecyclerView.State): number;
				public supportsPredictiveItemAnimations(): boolean;
				public onItemsRemoved(recyclerView: androidx.recyclerview.widget.RecyclerView, positionStart: number, itemCount: number): void;
				public onItemsChanged(recyclerView: androidx.recyclerview.widget.RecyclerView): void;
				public computeHorizontalScrollRange(state: androidx.recyclerview.widget.RecyclerView.State): number;
				public constructor(spanCount: number, orientation: number);
				public offsetChildrenVertical(dy: number): void;
				public onItemsUpdated(recyclerView: androidx.recyclerview.widget.RecyclerView, positionStart: number, itemCount: number): void;
			}
			export module StaggeredGridLayoutManager {
				export class AnchorInfo extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.StaggeredGridLayoutManager.AnchorInfo>;
				}
				export class LayoutParams extends androidx.recyclerview.widget.RecyclerView.LayoutParams {
					public static class: java.lang.Class<androidx.recyclerview.widget.StaggeredGridLayoutManager.LayoutParams>;
					public static INVALID_SPAN_ID: number;
					public constructor(source: globalAndroid.view.ViewGroup.LayoutParams);
					public constructor(c: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
					public constructor(source: androidx.recyclerview.widget.RecyclerView.LayoutParams);
					public getSpanIndex(): number;
					public setFullSpan(fullSpan: boolean): void;
					public isFullSpan(): boolean;
					public constructor(width: number, height: number);
					public constructor(source: globalAndroid.view.ViewGroup.MarginLayoutParams);
				}
				export class LazySpanLookup extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.StaggeredGridLayoutManager.LazySpanLookup>;
					public getFirstFullSpanItemInRange(minPos: number, maxPos: number, gapDir: number, hasUnwantedGapAfter: boolean): androidx.recyclerview.widget.StaggeredGridLayoutManager.LazySpanLookup.FullSpanItem;
					public addFullSpanItem(fullSpanItem: androidx.recyclerview.widget.StaggeredGridLayoutManager.LazySpanLookup.FullSpanItem): void;
					public getFullSpanItem(position: number): androidx.recyclerview.widget.StaggeredGridLayoutManager.LazySpanLookup.FullSpanItem;
				}
				export module LazySpanLookup {
					export class FullSpanItem extends java.lang.Object implements globalAndroid.os.Parcelable {
						public static class: java.lang.Class<androidx.recyclerview.widget.StaggeredGridLayoutManager.LazySpanLookup.FullSpanItem>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<androidx.recyclerview.widget.StaggeredGridLayoutManager.LazySpanLookup.FullSpanItem>;
						public describeContents(): number;
						public writeToParcel(dest: globalAndroid.os.Parcel, flags: number): void;
						public toString(): string;
					}
				}
				export class SavedState extends java.lang.Object implements globalAndroid.os.Parcelable {
					public static class: java.lang.Class<androidx.recyclerview.widget.StaggeredGridLayoutManager.SavedState>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<androidx.recyclerview.widget.StaggeredGridLayoutManager.SavedState>;
					public constructor();
					public describeContents(): number;
					public writeToParcel(dest: globalAndroid.os.Parcel, flags: number): void;
					public constructor(other: androidx.recyclerview.widget.StaggeredGridLayoutManager.SavedState);
				}
				export class Span extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.StaggeredGridLayoutManager.Span>;
					public findFirstVisibleItemPosition(): number;
					public findLastPartiallyVisibleItemPosition(): number;
					public getFocusableViewAfter(referenceChildPosition: number, layoutDir: number): globalAndroid.view.View;
					public findLastVisibleItemPosition(): number;
					public findFirstPartiallyVisibleItemPosition(): number;
					public findFirstCompletelyVisibleItemPosition(): number;
					public findLastCompletelyVisibleItemPosition(): number;
					public getDeletedSize(): number;
				}
			}
		}
	}
}

declare module androidx {
	export module recyclerview {
		export module widget {
			export class ThreadUtil<T>  extends java.lang.Object {
				public static class: java.lang.Class<androidx.recyclerview.widget.ThreadUtil<any>>;
				/**
				 * Constructs a new instance of the androidx.recyclerview.widget.ThreadUtil<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getMainThreadProxy(mainThreadCallback0: androidx.recyclerview.widget.ThreadUtil.MainThreadCallback<T>): androidx.recyclerview.widget.ThreadUtil.MainThreadCallback<T>;
					getBackgroundProxy(backgroundCallback0: androidx.recyclerview.widget.ThreadUtil.BackgroundCallback<T>): androidx.recyclerview.widget.ThreadUtil.BackgroundCallback<T>;
				});
				public constructor();
				public getMainThreadProxy(mainThreadCallback0: androidx.recyclerview.widget.ThreadUtil.MainThreadCallback<T>): androidx.recyclerview.widget.ThreadUtil.MainThreadCallback<T>;
				public getBackgroundProxy(backgroundCallback0: androidx.recyclerview.widget.ThreadUtil.BackgroundCallback<T>): androidx.recyclerview.widget.ThreadUtil.BackgroundCallback<T>;
			}
			export module ThreadUtil {
				export class BackgroundCallback<T>  extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.ThreadUtil.BackgroundCallback<any>>;
					/**
					 * Constructs a new instance of the androidx.recyclerview.widget.ThreadUtil() when extending the interface class.
					 */
					public constructor(implementation: {
						refresh(int0: number): void;
						updateRange(int0: number, int1: number, int2: number, int3: number, int4: number): void;
						loadTile(int0: number, int1: number): void;
						recycleTile(tile0: androidx.recyclerview.widget.TileList.Tile<T>): void;
					});
					public constructor();
					public recycleTile(tile0: androidx.recyclerview.widget.TileList.Tile<T>): void;
					public refresh(int0: number): void;
					public loadTile(int0: number, int1: number): void;
					public updateRange(int0: number, int1: number, int2: number, int3: number, int4: number): void;
				}
				export class MainThreadCallback<T>  extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.ThreadUtil.MainThreadCallback<any>>;
					/**
					 * Constructs a new instance of the androidx.recyclerview.widget.ThreadUtil() when extending the interface class.
					 */
					public constructor(implementation: {
						updateItemCount(int0: number, int1: number): void;
						addTile(int0: number, tile1: androidx.recyclerview.widget.TileList.Tile<T>): void;
						removeTile(int0: number, int1: number): void;
					});
					public constructor();
					public removeTile(int0: number, int1: number): void;
					public addTile(int0: number, tile1: androidx.recyclerview.widget.TileList.Tile<T>): void;
					public updateItemCount(int0: number, int1: number): void;
				}
			}
		}
	}
}

declare module androidx {
	export module recyclerview {
		export module widget {
			export class TileList<T>  extends java.lang.Object {
				public static class: java.lang.Class<androidx.recyclerview.widget.TileList<any>>;
				public getItemAt(pos: number): T;
				public removeAtPos(startPosition: number): androidx.recyclerview.widget.TileList.Tile<T>;
				public addOrReplace(newTile: androidx.recyclerview.widget.TileList.Tile<T>): androidx.recyclerview.widget.TileList.Tile<T>;
				public clear(): void;
				public constructor(tileSize: number);
				public size(): number;
				public getAtIndex(index: number): androidx.recyclerview.widget.TileList.Tile<T>;
			}
			export module TileList {
				export class Tile<T>  extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.TileList.Tile<any>>;
					public mItems: native.Array<T>;
					public mStartPosition: number;
					public mItemCount: number;
					public constructor(klass: java.lang.Class<T>, size: number);
				}
			}
		}
	}
}

declare module androidx {
	export module recyclerview {
		export module widget {
			export class ViewBoundsCheck extends java.lang.Object {
				public static class: java.lang.Class<androidx.recyclerview.widget.ViewBoundsCheck>;
			}
			export module ViewBoundsCheck {
				export class BoundFlags extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.ViewBoundsCheck.BoundFlags>;
				}
				export class Callback extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.ViewBoundsCheck.Callback>;
					/**
					 * Constructs a new instance of the androidx.recyclerview.widget.ViewBoundsCheck() when extending the interface class.
					 */
					public constructor(implementation: {
						getChildAt(int0: number): globalAndroid.view.View;
						getParentStart(): number;
						getParentEnd(): number;
						getChildStart(view0: globalAndroid.view.View): number;
						getChildEnd(view0: globalAndroid.view.View): number;
					});
					public constructor();
					public getChildAt(int0: number): globalAndroid.view.View;
					public getParentEnd(): number;
					public getChildStart(view0: globalAndroid.view.View): number;
					public getChildEnd(view0: globalAndroid.view.View): number;
					public getParentStart(): number;
				}
				export class ViewBounds extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.recyclerview.widget.ViewBoundsCheck.ViewBounds>;
					/**
					 * Constructs a new instance of the androidx.recyclerview.widget.ViewBoundsCheck() when extending the interface class.
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
	export module recyclerview {
		export module widget {
			export class ViewInfoStore extends java.lang.Object {
				public static class: java.lang.Class<androidx.recyclerview.widget.ViewInfoStore>;
				public onViewDetached(viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
			}
			export module ViewInfoStore {
				export class InfoRecord extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.ViewInfoStore.InfoRecord>;
				}
				export class ProcessCallback extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.ViewInfoStore.ProcessCallback>;
					/**
					 * Constructs a new instance of the androidx.recyclerview.widget.ViewInfoStore() when extending the interface class.
					 */
					public constructor(implementation: {
						processDisappeared(viewHolder0: androidx.recyclerview.widget.RecyclerView.ViewHolder, itemHolderInfo1: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo, itemHolderInfo2: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo): void;
						processAppeared(viewHolder0: androidx.recyclerview.widget.RecyclerView.ViewHolder, itemHolderInfo1: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo, itemHolderInfo2: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo): void;
						processPersistent(viewHolder0: androidx.recyclerview.widget.RecyclerView.ViewHolder, itemHolderInfo1: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo, itemHolderInfo2: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo): void;
						unused(viewHolder0: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
					});
					public constructor();
					public processPersistent(viewHolder0: androidx.recyclerview.widget.RecyclerView.ViewHolder, itemHolderInfo1: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo, itemHolderInfo2: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo): void;
					public unused(viewHolder0: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
					public processDisappeared(viewHolder0: androidx.recyclerview.widget.RecyclerView.ViewHolder, itemHolderInfo1: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo, itemHolderInfo2: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo): void;
					public processAppeared(viewHolder0: androidx.recyclerview.widget.RecyclerView.ViewHolder, itemHolderInfo1: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo, itemHolderInfo2: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo): void;
				}
			}
		}
	}
}

declare module androidx {
	export module recyclerview {
		export module widget {
			export class ViewTypeStorage extends java.lang.Object {
				public static class: java.lang.Class<androidx.recyclerview.widget.ViewTypeStorage>;
				/**
				 * Constructs a new instance of the androidx.recyclerview.widget.ViewTypeStorage interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getWrapperForGlobalType(int0: number): androidx.recyclerview.widget.NestedAdapterWrapper;
					createViewTypeWrapper(nestedAdapterWrapper0: androidx.recyclerview.widget.NestedAdapterWrapper): androidx.recyclerview.widget.ViewTypeStorage.ViewTypeLookup;
				});
				public constructor();
				public getWrapperForGlobalType(int0: number): androidx.recyclerview.widget.NestedAdapterWrapper;
				public createViewTypeWrapper(nestedAdapterWrapper0: androidx.recyclerview.widget.NestedAdapterWrapper): androidx.recyclerview.widget.ViewTypeStorage.ViewTypeLookup;
			}
			export module ViewTypeStorage {
				export class IsolatedViewTypeStorage extends java.lang.Object implements androidx.recyclerview.widget.ViewTypeStorage {
					public static class: java.lang.Class<androidx.recyclerview.widget.ViewTypeStorage.IsolatedViewTypeStorage>;
					public getWrapperForGlobalType(globalViewType: number): androidx.recyclerview.widget.NestedAdapterWrapper;
					public constructor();
					public createViewTypeWrapper(wrapper: androidx.recyclerview.widget.NestedAdapterWrapper): androidx.recyclerview.widget.ViewTypeStorage.ViewTypeLookup;
				}
				export module IsolatedViewTypeStorage {
					export class WrapperViewTypeLookup extends java.lang.Object implements androidx.recyclerview.widget.ViewTypeStorage.ViewTypeLookup {
						public static class: java.lang.Class<androidx.recyclerview.widget.ViewTypeStorage.IsolatedViewTypeStorage.WrapperViewTypeLookup>;
						public globalToLocal(globalType: number): number;
						public localToGlobal(localType: number): number;
						public dispose(): void;
					}
				}
				export class SharedIdRangeViewTypeStorage extends java.lang.Object implements androidx.recyclerview.widget.ViewTypeStorage {
					public static class: java.lang.Class<androidx.recyclerview.widget.ViewTypeStorage.SharedIdRangeViewTypeStorage>;
					public getWrapperForGlobalType(globalViewType: number): androidx.recyclerview.widget.NestedAdapterWrapper;
					public constructor();
					public createViewTypeWrapper(wrapper: androidx.recyclerview.widget.NestedAdapterWrapper): androidx.recyclerview.widget.ViewTypeStorage.ViewTypeLookup;
				}
				export module SharedIdRangeViewTypeStorage {
					export class WrapperViewTypeLookup extends java.lang.Object implements androidx.recyclerview.widget.ViewTypeStorage.ViewTypeLookup {
						public static class: java.lang.Class<androidx.recyclerview.widget.ViewTypeStorage.SharedIdRangeViewTypeStorage.WrapperViewTypeLookup>;
						public globalToLocal(globalType: number): number;
						public localToGlobal(localType: number): number;
						public dispose(): void;
					}
				}
				export class ViewTypeLookup extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.ViewTypeStorage.ViewTypeLookup>;
					/**
					 * Constructs a new instance of the androidx.recyclerview.widget.ViewTypeStorage() when extending the interface class.
					 */
					public constructor(implementation: {
						localToGlobal(int0: number): number;
						globalToLocal(int0: number): number;
						dispose(): void;
					});
					public constructor();
					public localToGlobal(int0: number): number;
					public dispose(): void;
					public globalToLocal(int0: number): number;
				}
			}
		}
	}
}

//Generics information:
//androidx.recyclerview.widget.AsyncDifferConfig:1
//androidx.recyclerview.widget.AsyncDifferConfig.Builder:1
//androidx.recyclerview.widget.AsyncListDiffer:1
//androidx.recyclerview.widget.AsyncListDiffer.ListListener:1
//androidx.recyclerview.widget.AsyncListUtil:1
//androidx.recyclerview.widget.AsyncListUtil.DataCallback:1
//androidx.recyclerview.widget.DiffUtil.ItemCallback:1
//androidx.recyclerview.widget.ListAdapter:2
//androidx.recyclerview.widget.MessageThreadUtil:1
//androidx.recyclerview.widget.RecyclerView.Adapter:1
//androidx.recyclerview.widget.SortedList:1
//androidx.recyclerview.widget.SortedList.BatchedCallback:1
//androidx.recyclerview.widget.SortedList.Callback:1
//androidx.recyclerview.widget.SortedListAdapterCallback:1
//androidx.recyclerview.widget.ThreadUtil:1
//androidx.recyclerview.widget.ThreadUtil.BackgroundCallback:1
//androidx.recyclerview.widget.ThreadUtil.MainThreadCallback:1
//androidx.recyclerview.widget.TileList:1
//androidx.recyclerview.widget.TileList.Tile:1

