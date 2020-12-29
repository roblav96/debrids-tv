declare module androidx {
	export module lifecycle {
		export class LifecycleService extends globalAndroid.app.Service implements androidx.lifecycle.LifecycleOwner {
			public static class: java.lang.Class<androidx.lifecycle.LifecycleService>;
			public onStart(intent: globalAndroid.content.Intent, startId: number): void;
			public onStartCommand(intent: globalAndroid.content.Intent, flags: number, startId: number): number;
			public onBind(intent: globalAndroid.content.Intent): globalAndroid.os.IBinder;
			public onTrimMemory(level: number): void;
			public constructor(base: globalAndroid.content.Context);
			public onCreate(): void;
			/** @deprecated */
			public onStart(intent: globalAndroid.content.Intent, startId: number): void;
			public constructor();
			public onDestroy(): void;
			public onBind(intent0: globalAndroid.content.Intent): globalAndroid.os.IBinder;
			public getLifecycle(): androidx.lifecycle.Lifecycle;
		}
	}
}

declare module androidx {
	export module lifecycle {
		export class ServiceLifecycleDispatcher extends java.lang.Object {
			public static class: java.lang.Class<androidx.lifecycle.ServiceLifecycleDispatcher>;
			public constructor(provider: androidx.lifecycle.LifecycleOwner);
			public onServicePreSuperOnStart(): void;
			public onServicePreSuperOnCreate(): void;
			public onServicePreSuperOnBind(): void;
			public getLifecycle(): androidx.lifecycle.Lifecycle;
			public onServicePreSuperOnDestroy(): void;
		}
		export module ServiceLifecycleDispatcher {
			export class DispatchRunnable extends java.lang.Object implements java.lang.Runnable {
				public static class: java.lang.Class<androidx.lifecycle.ServiceLifecycleDispatcher.DispatchRunnable>;
				public run(): void;
			}
		}
	}
}

//Generics information:

