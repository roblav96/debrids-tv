declare module com {
	export module arthenica {
		export module smartexception {
			export module java {
				export class Exceptions extends java.lang.Object {
					public static class: java.lang.Class<com.arthenica.smartexception.java.Exceptions>;
					public static getStackTraceString(throwable: java.lang.Throwable, rootPackageSet: java.util.Set<string>, groupPackageSet: java.util.Set<string>, ignorePackageSet: java.util.Set<string>): string;
					public static getStackTraceString(throwable: java.lang.Throwable, maxDepth: number): string;
					public static getStackTraceElementSerializer(): com.arthenica.smartexception.StackTraceElementSerializer;
					public static searchCause(throwable: java.lang.Throwable, causeClass: java.lang.Class<any>): java.lang.Throwable;
					public static getAllMessages(throwable: java.lang.Throwable): string;
					public static getCause(throwable: java.lang.Throwable, maxDepth: number): java.lang.Throwable;
					public static setStackTraceElementSerializer(stackTraceElementSerializer: com.arthenica.smartexception.StackTraceElementSerializer): void;
					public static searchCause(throwable: java.lang.Throwable, causeClass: java.lang.Class<any>, causeMessage: string, maxDepth: number): java.lang.Throwable;
					public constructor();
					public static registerGroupPackage(packageString: string): void;
					public static setIgnoreAllCauses(ignoreAllCauses: boolean): void;
					public static getStackTraceString(throwable: java.lang.Throwable, maxDepth: number, ignoreAllCauses: boolean): string;
					public static getIgnoreAllCauses(): boolean;
					public static getStackTraceString(throwable: java.lang.Throwable): string;
					public static clearRootPackages(): void;
					public static getStackTraceString(throwable: java.lang.Throwable, rootPackage: string): string;
					public static searchCause(throwable: java.lang.Throwable, causeClass: java.lang.Class<any>, maxDepth: number): java.lang.Throwable;
					public static registerIgnorePackage(packageString: string, ignoreCauseClasses: boolean): void;
					public static containsCause(throwable: java.lang.Throwable, causeClass: java.lang.Class<any>, causeMessage: string): boolean;
					public static containsCause(throwable: java.lang.Throwable, causeClass: java.lang.Class<any>): boolean;
					public static clearGroupPackages(): void;
					public static getStackTraceString(throwable: java.lang.Throwable, rootPackage: string, groupPackage: string): string;
					public static clearIgnorePackages(): void;
					public static searchCause(throwable: java.lang.Throwable, causeClass: java.lang.Class<any>, causeMessage: string): java.lang.Throwable;
					public static getCause(throwable: java.lang.Throwable): java.lang.Throwable;
					public static getStackTraceString(throwable: java.lang.Throwable, ignoreAllCauses: boolean): string;
					public static getStackTraceString(throwable: java.lang.Throwable, rootPackageSet: java.util.Set<string>, groupPackageSet: java.util.Set<string>, ignorePackageSet: java.util.Set<string>, ignoreAllCauses: boolean): string;
					public static registerRootPackage(packageString: string): void;
				}
			}
		}
	}
}

//Generics information:

