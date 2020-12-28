declare module androidx {
	export module arch {
		export module core {
			export module executor {
				export class ArchTaskExecutor extends androidx.arch.core.executor.TaskExecutor {
					public static class: java.lang.Class<androidx.arch.core.executor.ArchTaskExecutor>;
					public static getInstance(): androidx.arch.core.executor.ArchTaskExecutor;
					public executeOnDiskIO(runnable0: java.lang.Runnable): void;
					public setDelegate(taskExecutor: androidx.arch.core.executor.TaskExecutor): void;
					public static getMainThreadExecutor(): java.util.concurrent.Executor;
					public isMainThread(): boolean;
					public postToMainThread(runnable: java.lang.Runnable): void;
					public postToMainThread(runnable0: java.lang.Runnable): void;
					public executeOnDiskIO(runnable: java.lang.Runnable): void;
					public static getIOThreadExecutor(): java.util.concurrent.Executor;
				}
			}
		}
	}
}

declare module androidx {
	export module arch {
		export module core {
			export module executor {
				export class DefaultTaskExecutor extends androidx.arch.core.executor.TaskExecutor {
					public static class: java.lang.Class<androidx.arch.core.executor.DefaultTaskExecutor>;
					public executeOnDiskIO(runnable0: java.lang.Runnable): void;
					public constructor();
					public isMainThread(): boolean;
					public postToMainThread(runnable: java.lang.Runnable): void;
					public postToMainThread(runnable0: java.lang.Runnable): void;
					public executeOnDiskIO(runnable: java.lang.Runnable): void;
				}
			}
		}
	}
}

declare module androidx {
	export module arch {
		export module core {
			export module executor {
				export abstract class TaskExecutor extends java.lang.Object {
					public static class: java.lang.Class<androidx.arch.core.executor.TaskExecutor>;
					public executeOnMainThread(runnable: java.lang.Runnable): void;
					public executeOnDiskIO(runnable0: java.lang.Runnable): void;
					public constructor();
					public isMainThread(): boolean;
					public postToMainThread(runnable0: java.lang.Runnable): void;
				}
			}
		}
	}
}

//Generics information:

