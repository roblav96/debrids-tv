declare module androidx {
	export module lifecycle {
		export class ViewModelProviders extends java.lang.Object {
			public static class: java.lang.Class<androidx.lifecycle.ViewModelProviders>;
			/** @deprecated */
			public static of(fragment: androidx.fragment.app.Fragment, factory: androidx.lifecycle.ViewModelProvider.Factory): androidx.lifecycle.ViewModelProvider;
			/** @deprecated */
			public constructor();
			/** @deprecated */
			public static of(activity: androidx.fragment.app.FragmentActivity, factory: androidx.lifecycle.ViewModelProvider.Factory): androidx.lifecycle.ViewModelProvider;
			/** @deprecated */
			public static of(activity: androidx.fragment.app.FragmentActivity): androidx.lifecycle.ViewModelProvider;
			/** @deprecated */
			public static of(fragment: androidx.fragment.app.Fragment): androidx.lifecycle.ViewModelProvider;
		}
		export module ViewModelProviders {
			export class DefaultFactory extends androidx.lifecycle.ViewModelProvider.AndroidViewModelFactory {
				public static class: java.lang.Class<androidx.lifecycle.ViewModelProviders.DefaultFactory>;
				/** @deprecated */
				public constructor(application: globalAndroid.app.Application);
				public create(modelClass: java.lang.Class<any>): androidx.lifecycle.ViewModel;
				public constructor(application: globalAndroid.app.Application);
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module lifecycle {
		export class ViewModelStores extends java.lang.Object {
			public static class: java.lang.Class<androidx.lifecycle.ViewModelStores>;
			/** @deprecated */
			public static of(fragment: androidx.fragment.app.Fragment): androidx.lifecycle.ViewModelStore;
			/** @deprecated */
			public static of(activity: androidx.fragment.app.FragmentActivity): androidx.lifecycle.ViewModelStore;
		}
	}
}

//Generics information:

