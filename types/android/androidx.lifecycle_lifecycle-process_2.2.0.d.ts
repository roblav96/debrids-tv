declare module androidx {
	export module lifecycle {
		export class EmptyActivityLifecycleCallbacks extends java.lang.Object implements globalAndroid.app.Application.ActivityLifecycleCallbacks {
			public static class: java.lang.Class<androidx.lifecycle.EmptyActivityLifecycleCallbacks>;
			public onActivityPostStopped(activity: globalAndroid.app.Activity): void;
			public onActivityPaused(activity: globalAndroid.app.Activity): void;
			public onActivityResumed(activity: globalAndroid.app.Activity): void;
			public onActivitySaveInstanceState(activity: globalAndroid.app.Activity, outState: globalAndroid.os.Bundle): void;
			public onActivityCreated(activity: globalAndroid.app.Activity, savedInstanceState: globalAndroid.os.Bundle): void;
			public onActivityStopped(activity: globalAndroid.app.Activity): void;
			public onActivityPostPaused(activity: globalAndroid.app.Activity): void;
			public onActivityPostSaveInstanceState(activity: globalAndroid.app.Activity, outState: globalAndroid.os.Bundle): void;
			public onActivityDestroyed(activity: globalAndroid.app.Activity): void;
			public onActivityPostResumed(activity: globalAndroid.app.Activity): void;
			public onActivityPostDestroyed(activity: globalAndroid.app.Activity): void;
			public onActivityPreSaveInstanceState(activity: globalAndroid.app.Activity, outState: globalAndroid.os.Bundle): void;
			public onActivityStarted(activity: globalAndroid.app.Activity): void;
			public onActivityPreResumed(activity: globalAndroid.app.Activity): void;
			public onActivityPreCreated(activity: globalAndroid.app.Activity, savedInstanceState: globalAndroid.os.Bundle): void;
			public onActivityPreStopped(activity: globalAndroid.app.Activity): void;
			public onActivityPrePaused(activity: globalAndroid.app.Activity): void;
			public onActivityPreStarted(activity: globalAndroid.app.Activity): void;
			public onActivityPostStarted(activity: globalAndroid.app.Activity): void;
			public onActivityPreDestroyed(activity: globalAndroid.app.Activity): void;
			public onActivityPostCreated(activity: globalAndroid.app.Activity, savedInstanceState: globalAndroid.os.Bundle): void;
		}
	}
}

declare module androidx {
	export module lifecycle {
		export class LifecycleDispatcher extends java.lang.Object {
			public static class: java.lang.Class<androidx.lifecycle.LifecycleDispatcher>;
		}
		export module LifecycleDispatcher {
			export class DispatcherActivityCallback extends androidx.lifecycle.EmptyActivityLifecycleCallbacks {
				public static class: java.lang.Class<androidx.lifecycle.LifecycleDispatcher.DispatcherActivityCallback>;
				public onActivityDestroyed(activity: globalAndroid.app.Activity): void;
				public onActivityPostDestroyed(activity: globalAndroid.app.Activity): void;
				public onActivityResumed(activity: globalAndroid.app.Activity): void;
				public onActivityPostStopped(activity: globalAndroid.app.Activity): void;
				public onActivityCreated(activity: globalAndroid.app.Activity, savedInstanceState: globalAndroid.os.Bundle): void;
				public onActivityPaused(activity: globalAndroid.app.Activity): void;
				public onActivityPrePaused(activity: globalAndroid.app.Activity): void;
				public onActivityPreStopped(activity: globalAndroid.app.Activity): void;
				public onActivityPostStarted(activity: globalAndroid.app.Activity): void;
				public onActivityPostSaveInstanceState(activity: globalAndroid.app.Activity, outState: globalAndroid.os.Bundle): void;
				public onActivityPreStarted(activity: globalAndroid.app.Activity): void;
				public onActivityStarted(activity: globalAndroid.app.Activity): void;
				public onActivityPreSaveInstanceState(activity: globalAndroid.app.Activity, outState: globalAndroid.os.Bundle): void;
				public onActivityPostPaused(activity: globalAndroid.app.Activity): void;
				public onActivityPreCreated(activity: globalAndroid.app.Activity, savedInstanceState: globalAndroid.os.Bundle): void;
				public onActivityStopped(activity: globalAndroid.app.Activity): void;
				public onActivityPreResumed(activity: globalAndroid.app.Activity): void;
				public onActivityPostResumed(activity: globalAndroid.app.Activity): void;
				public onActivitySaveInstanceState(activity: globalAndroid.app.Activity, outState: globalAndroid.os.Bundle): void;
				public onActivityPreDestroyed(activity: globalAndroid.app.Activity): void;
				public onActivityPostCreated(activity: globalAndroid.app.Activity, savedInstanceState: globalAndroid.os.Bundle): void;
			}
		}
	}
}

declare module androidx {
	export module lifecycle {
		export class ProcessLifecycleOwner extends java.lang.Object implements androidx.lifecycle.LifecycleOwner {
			public static class: java.lang.Class<androidx.lifecycle.ProcessLifecycleOwner>;
			public static get(): androidx.lifecycle.LifecycleOwner;
			public getLifecycle(): androidx.lifecycle.Lifecycle;
		}
	}
}

declare module androidx {
	export module lifecycle {
		export class ProcessLifecycleOwnerInitializer extends globalAndroid.content.ContentProvider {
			public static class: java.lang.Class<androidx.lifecycle.ProcessLifecycleOwnerInitializer>;
			public query(uri: globalAndroid.net.Uri, projection: native.Array<string>, selection: string, selectionArgs: native.Array<string>, sortOrder: string, cancellationSignal: globalAndroid.os.CancellationSignal): globalAndroid.database.Cursor;
			public update(uri0: globalAndroid.net.Uri, contentValues1: globalAndroid.content.ContentValues, string2: string, strings3: native.Array<string>): number;
			public getType(uri0: globalAndroid.net.Uri): string;
			public delete(uri: globalAndroid.net.Uri, s: string, strings: native.Array<string>): number;
			public constructor();
			public query(uri: globalAndroid.net.Uri, strings: native.Array<string>, s: string, strings1: native.Array<string>, s1: string): globalAndroid.database.Cursor;
			public insert(uri: globalAndroid.net.Uri, contentValues: globalAndroid.content.ContentValues): globalAndroid.net.Uri;
			public update(uri: globalAndroid.net.Uri, contentValues: globalAndroid.content.ContentValues, s: string, strings: native.Array<string>): number;
			public getType(uri: globalAndroid.net.Uri): string;
			public onCreate(): boolean;
			public query(uri0: globalAndroid.net.Uri, strings1: native.Array<string>, string2: string, strings3: native.Array<string>, string4: string): globalAndroid.database.Cursor;
			public query(uri: globalAndroid.net.Uri, projection: native.Array<string>, queryArgs: globalAndroid.os.Bundle, cancellationSignal: globalAndroid.os.CancellationSignal): globalAndroid.database.Cursor;
			public onTrimMemory(level: number): void;
			public delete(uri0: globalAndroid.net.Uri, string1: string, strings2: native.Array<string>): number;
			public insert(uri0: globalAndroid.net.Uri, contentValues1: globalAndroid.content.ContentValues): globalAndroid.net.Uri;
		}
	}
}

//Generics information:

