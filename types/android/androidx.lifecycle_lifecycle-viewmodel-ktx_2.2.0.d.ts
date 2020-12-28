declare module androidx {
	export module lifecycle {
		export class CloseableCoroutineScope extends java.lang.Object implements java.io.Closeable, kotlinx.coroutines.CoroutineScope {
			public static class: java.lang.Class<androidx.lifecycle.CloseableCoroutineScope>;
			public constructor(context: kotlin.coroutines.CoroutineContext);
			public getCoroutineContext(): kotlin.coroutines.CoroutineContext;
			public close(): void;
		}
	}
}

declare module androidx {
	export module lifecycle {
		export class ViewModelKt extends java.lang.Object {
			public static class: java.lang.Class<androidx.lifecycle.ViewModelKt>;
			public static getViewModelScope(thisviewModelScope: androidx.lifecycle.ViewModel): kotlinx.coroutines.CoroutineScope;
		}
	}
}

declare module androidx {
	export module lifecycle {
		export class ViewModelLazy<VM>  extends kotlin.Lazy<any> {
			public static class: java.lang.Class<androidx.lifecycle.ViewModelLazy<any>>;
			public constructor(viewModelClass: kotlin.reflect.KClass<any>, storeProducer: kotlin.jvm.functions.Function0<any>, factoryProducer: kotlin.jvm.functions.Function0<any>);
			public getValue(): any;
			public isInitialized(): boolean;
		}
	}
}

declare module androidx {
	export module lifecycle {
		export class ViewModelProviderKt extends java.lang.Object {
			public static class: java.lang.Class<androidx.lifecycle.ViewModelProviderKt>;
		}
	}
}

//Generics information:
//androidx.lifecycle.ViewModelLazy:1

