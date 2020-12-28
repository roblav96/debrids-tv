declare module androidx {
	export module fragment {
		export module app {
			export class FragmentManagerKt extends java.lang.Object {
				public static class: java.lang.Class<androidx.fragment.app.FragmentManagerKt>;
				/** @deprecated */
				public static transaction(thistransaction: androidx.fragment.app.FragmentManager, now: boolean, allowStateLoss: boolean, body: kotlin.jvm.functions.Function1<any,kotlin.Unit>): void;
				public static commit(thiscommit: androidx.fragment.app.FragmentManager, allowStateLoss: boolean, body: kotlin.jvm.functions.Function1<any,kotlin.Unit>): void;
				public static commitNow(thiscommitNow: androidx.fragment.app.FragmentManager, allowStateLoss: boolean, body: kotlin.jvm.functions.Function1<any,kotlin.Unit>): void;
			}
		}
	}
}

declare module androidx {
	export module fragment {
		export module app {
			export class FragmentTransactionKt extends java.lang.Object {
				public static class: java.lang.Class<androidx.fragment.app.FragmentTransactionKt>;
			}
		}
	}
}

declare module androidx {
	export module fragment {
		export module app {
			export class FragmentViewModelLazyKt extends java.lang.Object {
				public static class: java.lang.Class<androidx.fragment.app.FragmentViewModelLazyKt>;
				public static createViewModelLazy(thiscreateViewModelLazy: androidx.fragment.app.Fragment, viewModelClass: kotlin.reflect.KClass<any>, storeProducer: kotlin.jvm.functions.Function0<any>, factoryProducer: kotlin.jvm.functions.Function0<any>): kotlin.Lazy<any>;
			}
		}
	}
}

declare module androidx {
	export module fragment {
		export module app {
			export class ViewKt extends java.lang.Object {
				public static class: java.lang.Class<androidx.fragment.app.ViewKt>;
				public static findFragment(thisfindFragment: globalAndroid.view.View): androidx.fragment.app.Fragment;
			}
		}
	}
}

//Generics information:

