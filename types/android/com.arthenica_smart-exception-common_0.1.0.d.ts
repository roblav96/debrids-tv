declare module com {
	export module arthenica {
		export module smartexception {
			export abstract class AbstractExceptions extends java.lang.Object {
				public static class: java.lang.Class<com.arthenica.smartexception.AbstractExceptions>;
				public static DEFAULT_MAX_DEPTH: number;
				public static DEFAULT_IGNORE_ALL_CAUSES: boolean;
				public static rootPackageSet: java.util.Set<string>;
				public static groupPackageSet: java.util.Set<string>;
				public static ignorePackageSet: java.util.Set<string>;
				public static ignoreCausePackageSet: java.util.Set<string>;
				public static ignoreAllCauses: boolean;
				public static stackTraceElementSerializer: com.arthenica.smartexception.StackTraceElementSerializer;
				public static setIgnoreAllCauses(ignoreAllCauses: boolean): void;
				public static searchCause(throwable: java.lang.Throwable, causeClass: java.lang.Class<any>): java.lang.Throwable;
				public static getStackTraceString(throwable: java.lang.Throwable, rootPackageSet: java.util.Set<string>, groupPackageSet: java.util.Set<string>, ignorePackageSet: java.util.Set<string>, ignoreAllCauses: boolean): string;
				public static getStackTraceString(throwable: java.lang.Throwable, isCause: boolean, rootPackageSet: java.util.Set<string>, groupPackageSet: java.util.Set<string>, ignorePackageSet: java.util.Set<string>, maxDepth: number, ignoreAllCauses: boolean): string;
				public static getContainingPackage(fullClassName: string, packageSet: java.util.Set<string>): string;
				public static getStackTraceString(throwable: java.lang.Throwable, ignoreAllCauses: boolean): string;
				public static registerRootPackage(packageString: string): void;
				public static getStackTraceString(throwable: java.lang.Throwable, rootPackage: string, groupPackage: string): string;
				public constructor();
				public static clearRootPackages(): void;
				public static clearIgnorePackages(): void;
				public static getCause(throwable: java.lang.Throwable): java.lang.Throwable;
				public static searchCause(throwable: java.lang.Throwable, causeClass: java.lang.Class<any>, causeMessage: string, maxDepth: number): java.lang.Throwable;
				public static isEmpty(value: string): boolean;
				public static getStackTraceString(throwable: java.lang.Throwable, maxDepth: number, ignoreAllCauses: boolean): string;
				public static getStackTraceString(throwable: java.lang.Throwable, maxDepth: number): string;
				public static appendStackTraceGroupElement(stringBuilder: java.lang.StringBuilder, currentGroupPackage: string, numberOfElementsInTheCurrentGroup: number, firstStackTraceElementInTheGroup: java.lang.StackTraceElement): number;
				public static getStackTraceElementSerializer(): com.arthenica.smartexception.StackTraceElementSerializer;
				public static packageName(className: string): string;
				public static containsCause(throwable: java.lang.Throwable, causeClass: java.lang.Class<any>): boolean;
				public static registerIgnorePackage(packageString: string, ignoreCauseClasses: boolean): void;
				public static searchCause(throwable: java.lang.Throwable, causeClass: java.lang.Class<any>, maxDepth: number): java.lang.Throwable;
				public static setStackTraceElementSerializer(stackTraceElementSerializer: com.arthenica.smartexception.StackTraceElementSerializer): void;
				public static containsCause(throwable: java.lang.Throwable, causeClass: java.lang.Class<any>, causeMessage: string): boolean;
				public static containsPackage(fullClassName: string, packageSet: java.util.Set<string>): boolean;
				public static getAllMessages(throwable: java.lang.Throwable, messageBuilder: java.lang.StringBuilder): void;
				public static getStackTraceString(throwable: java.lang.Throwable): string;
				public static getStackTrace(throwable: java.lang.Throwable, maxDepth: number): native.Array<java.lang.StackTraceElement>;
				public static getStackTraceString(throwable: java.lang.Throwable, rootPackageSet: java.util.Set<string>, groupPackageSet: java.util.Set<string>, ignorePackageSet: java.util.Set<string>): string;
				public static getStackTrace(throwable: java.lang.Throwable, rootPackageSet: java.util.Set<string>, ignorePackageSet: java.util.Set<string>): native.Array<java.lang.StackTraceElement>;
				public static registerGroupPackage(packageString: string): void;
				public static searchCause(throwable: java.lang.Throwable, causeClass: java.lang.Class<any>, causeMessage: string): java.lang.Throwable;
				public static clearGroupPackages(): void;
				public static getAllMessages(throwable: java.lang.Throwable): string;
				public static getIgnoreAllCauses(): boolean;
				public static getCause(throwable: java.lang.Throwable, maxDepth: number): java.lang.Throwable;
				public static getStackTraceString(throwable: java.lang.Throwable, rootPackage: string): string;
			}
		}
	}
}

declare module com {
	export module arthenica {
		export module smartexception {
			export class StackTraceElementSerializer extends java.lang.Object {
				public static class: java.lang.Class<com.arthenica.smartexception.StackTraceElementSerializer>;
				/**
				 * Constructs a new instance of the com.arthenica.smartexception.StackTraceElementSerializer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					toString(stackTraceElement0: java.lang.StackTraceElement): string;
					getModuleName(stackTraceElement0: java.lang.StackTraceElement): string;
					getNativeMethodDefinition(): string;
					getUnknownSourceDefinition(): string;
				});
				public constructor();
				public getUnknownSourceDefinition(): string;
				public toString(stackTraceElement0: java.lang.StackTraceElement): string;
				public getNativeMethodDefinition(): string;
				public toString(): string;
				public getModuleName(stackTraceElement0: java.lang.StackTraceElement): string;
			}
		}
	}
}

//Generics information:

