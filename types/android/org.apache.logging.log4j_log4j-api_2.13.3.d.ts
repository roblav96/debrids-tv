declare class ModuleInfo extends java.lang.Object {
	public static class: java.lang.Class<ModuleInfo>;
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module util {
					export class Base64Util extends java.lang.Object {
						public static class: java.lang.Class<org.apache.logging.log4j.util.Base64Util>;
						public static encode(str: string): string;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module util {
					export class ProcessIdUtil extends java.lang.Object {
						public static class: java.lang.Class<org.apache.logging.log4j.util.ProcessIdUtil>;
						public static DEFAULT_PROCESSID: string;
						public constructor();
						public static getProcessId(): string;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module util {
					export class StackLocator extends java.lang.Object {
						public static class: java.lang.Class<org.apache.logging.log4j.util.StackLocator>;
						public getCallerClass(fqcn: string, pkg: string): java.lang.Class<any>;
						public getCallerClass(anchor: java.lang.Class<any>): java.lang.Class<any>;
						public static getInstance(): org.apache.logging.log4j.util.StackLocator;
						public getCurrentStackTrace(): java.util.Stack<java.lang.Class<any>>;
						public calcLocation(fqcnOfLogger: string): java.lang.StackTraceElement;
						public getCallerClass(depth: number): java.lang.Class<any>;
						public getStackTraceElement(depth: number): java.lang.StackTraceElement;
						public getCallerClass(fqcn: string): java.lang.Class<any>;
					}
					export module StackLocator {
						export class FqcnCallerLocator extends java.lang.Object /* any,java.lang.StackWalker.StackFrame>*/ {
							public static class: java.lang.Class<org.apache.logging.log4j.util.StackLocator.FqcnCallerLocator>;
							public apply(stackFrameStream: java.util.stream.Stream<java.lang.StackWalker.StackFrame>): java.lang.StackWalker.StackFrame;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module util {
					export module internal {
						export class DefaultObjectInputFilter extends java.lang.Object {
							public static class: java.lang.Class<org.apache.logging.log4j.util.internal.DefaultObjectInputFilter>;
							public constructor();
							public constructor(filter: java.io.ObjectInputFilter);
							public static newInstance(filter: java.io.ObjectInputFilter): org.apache.logging.log4j.util.internal.DefaultObjectInputFilter;
							public checkInput(filterInfo: java.io.ObjectInputFilter.FilterInfo): java.io.ObjectInputFilter.Status;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export class CloseableThreadContext extends java.lang.Object {
					public static class: java.lang.Class<org.apache.logging.log4j.CloseableThreadContext>;
					public static push(message: string): org.apache.logging.log4j.CloseableThreadContext.Instance;
					public static put(key: string, value: string): org.apache.logging.log4j.CloseableThreadContext.Instance;
					public static push(message: string, objects1: native.Array<any>): org.apache.logging.log4j.CloseableThreadContext.Instance;
					public static pushAll(messages: java.util.List<string>): org.apache.logging.log4j.CloseableThreadContext.Instance;
					public static putAll(values: java.util.Map<string,string>): org.apache.logging.log4j.CloseableThreadContext.Instance;
				}
				export module CloseableThreadContext {
					export class Instance extends java.lang.Object implements java.lang.AutoCloseable {
						public static class: java.lang.Class<org.apache.logging.log4j.CloseableThreadContext.Instance>;
						public push(message: string): org.apache.logging.log4j.CloseableThreadContext.Instance;
						public putAll(values: java.util.Map<string,string>): org.apache.logging.log4j.CloseableThreadContext.Instance;
						public close(): void;
						public pushAll(messages: java.util.List<string>): org.apache.logging.log4j.CloseableThreadContext.Instance;
						public put(key: string, value: string): org.apache.logging.log4j.CloseableThreadContext.Instance;
						public push(message: string, objects1: native.Array<any>): org.apache.logging.log4j.CloseableThreadContext.Instance;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export class EventLogger extends java.lang.Object {
					public static class: java.lang.Class<org.apache.logging.log4j.EventLogger>;
					public static EVENT_MARKER: org.apache.logging.log4j.Marker;
					public static logEvent(msg: org.apache.logging.log4j.message.StructuredDataMessage): void;
					public static logEvent(msg: org.apache.logging.log4j.message.StructuredDataMessage, level: org.apache.logging.log4j.Level): void;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export class Level extends java.lang.Object {
					public static class: java.lang.Class<org.apache.logging.log4j.Level>;
					public static OFF: org.apache.logging.log4j.Level;
					public static FATAL: org.apache.logging.log4j.Level;
					public static ERROR: org.apache.logging.log4j.Level;
					public static WARN: org.apache.logging.log4j.Level;
					public static INFO: org.apache.logging.log4j.Level;
					public static DEBUG: org.apache.logging.log4j.Level;
					public static TRACE: org.apache.logging.log4j.Level;
					public static ALL: org.apache.logging.log4j.Level;
					public static CATEGORY: string;
					public name(): string;
					public static forName(name: string, intValue: number): org.apache.logging.log4j.Level;
					public equals(obj: any): boolean;
					public static getLevel(name: string): org.apache.logging.log4j.Level;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static toLevel(name: string, defaultLevel: org.apache.logging.log4j.Level): org.apache.logging.log4j.Level;
					public equals(other: any): boolean;
					public getDeclaringClass(): java.lang.Class<org.apache.logging.log4j.Level>;
					public clone(): org.apache.logging.log4j.Level;
					public isMoreSpecificThan(level: org.apache.logging.log4j.Level): boolean;
					public intLevel(): number;
					public toString(): string;
					public clone(): any;
					public getStandardLevel(): org.apache.logging.log4j.spi.StandardLevel;
					public static toLevel(sArg: string): org.apache.logging.log4j.Level;
					public isInRange(minLevel: org.apache.logging.log4j.Level, maxLevel: org.apache.logging.log4j.Level): boolean;
					public readResolve(): any;
					public isLessSpecificThan(level: org.apache.logging.log4j.Level): boolean;
					public compareTo(other: org.apache.logging.log4j.Level): number;
					public hashCode(): number;
					public static values(): native.Array<org.apache.logging.log4j.Level>;
					public static valueOf(name: string): org.apache.logging.log4j.Level;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export class LogBuilder extends java.lang.Object {
					public static class: java.lang.Class<org.apache.logging.log4j.LogBuilder>;
					/**
					 * Constructs a new instance of the org.apache.logging.log4j.LogBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						withMarker(marker: org.apache.logging.log4j.Marker): org.apache.logging.log4j.LogBuilder;
						withThrowable(throwable: java.lang.Throwable): org.apache.logging.log4j.LogBuilder;
						withLocation(): org.apache.logging.log4j.LogBuilder;
						withLocation(location: java.lang.StackTraceElement): org.apache.logging.log4j.LogBuilder;
						log(message: string): void;
						log(message: string): void;
						log(message: string, params: native.Array<any>): void;
						log(message: string, params: native.Array<org.apache.logging.log4j.util.Supplier<any>>): void;
						log(message: org.apache.logging.log4j.message.Message): void;
						log(messageSupplier: org.apache.logging.log4j.util.Supplier<org.apache.logging.log4j.message.Message>): void;
						log(message: any): void;
						log(message: string, p0: any): void;
						log(message: string, p0: any, p1: any): void;
						log(message: string, p0: any, p1: any, p2: any): void;
						log(message: string, p0: any, p1: any, p2: any, p3: any): void;
						log(message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void;
						log(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void;
						log(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void;
						log(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void;
						log(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void;
						log(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void;
					});
					public constructor();
					public static NOOP: org.apache.logging.log4j.LogBuilder;
					public log(message: string, p0: any, p1: any, p2: any, p3: any): void;
					public log(message: string): void;
					public withThrowable(throwable: java.lang.Throwable): org.apache.logging.log4j.LogBuilder;
					public log(message: string, params: native.Array<any>): void;
					public withLocation(): org.apache.logging.log4j.LogBuilder;
					public log(message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void;
					public log(message: org.apache.logging.log4j.message.Message): void;
					public log(message: string, params: native.Array<org.apache.logging.log4j.util.Supplier<any>>): void;
					public log(message: string, p0: any): void;
					public log(message: string, p0: any, p1: any): void;
					public log(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void;
					public log(message: string, p0: any, p1: any, p2: any): void;
					public log(messageSupplier: org.apache.logging.log4j.util.Supplier<org.apache.logging.log4j.message.Message>): void;
					public log(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void;
					public log(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void;
					public log(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void;
					public log(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void;
					public withMarker(marker: org.apache.logging.log4j.Marker): org.apache.logging.log4j.LogBuilder;
					public withLocation(location: java.lang.StackTraceElement): org.apache.logging.log4j.LogBuilder;
					public log(message: any): void;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export class LogManager extends java.lang.Object {
					public static class: java.lang.Class<org.apache.logging.log4j.LogManager>;
					public static FACTORY_PROPERTY_NAME: string;
					public static ROOT_LOGGER_NAME: string;
					public static shutdown(context: org.apache.logging.log4j.spi.LoggerContext): void;
					public static setFactory(factory: org.apache.logging.log4j.spi.LoggerContextFactory): void;
					public static getContext(loader: java.lang.ClassLoader, currentContext: boolean, externalContext: any): org.apache.logging.log4j.spi.LoggerContext;
					public static getLogger(clazz: java.lang.Class<any>, messageFactory: org.apache.logging.log4j.message.MessageFactory): org.apache.logging.log4j.Logger;
					public static getFormatterLogger(name: string): org.apache.logging.log4j.Logger;
					public static getFormatterLogger(clazz: java.lang.Class<any>): org.apache.logging.log4j.Logger;
					public static getLogger(value: any): org.apache.logging.log4j.Logger;
					public static getContext(currentContext: boolean): org.apache.logging.log4j.spi.LoggerContext;
					public static getFactory(): org.apache.logging.log4j.spi.LoggerContextFactory;
					public static getContext(loader: java.lang.ClassLoader, currentContext: boolean): org.apache.logging.log4j.spi.LoggerContext;
					public constructor();
					public static getContext(loader: java.lang.ClassLoader, currentContext: boolean, externalContext: any, configLocation: java.net.URI): org.apache.logging.log4j.spi.LoggerContext;
					public static getLogger(): org.apache.logging.log4j.Logger;
					public static getContext(fqcn: string, loader: java.lang.ClassLoader, currentContext: boolean, configLocation: java.net.URI, name: string): org.apache.logging.log4j.spi.LoggerContext;
					public static getContext(): org.apache.logging.log4j.spi.LoggerContext;
					public static getContext(loader: java.lang.ClassLoader, currentContext: boolean, externalContext: any, configLocation: java.net.URI, name: string): org.apache.logging.log4j.spi.LoggerContext;
					public static getFormatterLogger(): org.apache.logging.log4j.Logger;
					public static exists(name: string): boolean;
					public static shutdown(): void;
					public static getLogger(clazz: java.lang.Class<any>): org.apache.logging.log4j.Logger;
					public static getLogger(name: string, messageFactory: org.apache.logging.log4j.message.MessageFactory): org.apache.logging.log4j.Logger;
					public static getContext(fqcn: string, loader: java.lang.ClassLoader, currentContext: boolean): org.apache.logging.log4j.spi.LoggerContext;
					public static shutdown(currentContext: boolean, allContexts: boolean): void;
					public static getLogger(name: string): org.apache.logging.log4j.Logger;
					public static getLogger(messageFactory: org.apache.logging.log4j.message.MessageFactory): org.apache.logging.log4j.Logger;
					public static shutdown(currentContext: boolean): void;
					public static getLogger(fqcn: string, name: string): org.apache.logging.log4j.Logger;
					public static getRootLogger(): org.apache.logging.log4j.Logger;
					public static getLogger(value: any, messageFactory: org.apache.logging.log4j.message.MessageFactory): org.apache.logging.log4j.Logger;
					public static getContext(fqcn: string, currentContext: boolean): org.apache.logging.log4j.spi.LoggerContext;
					public static getContext(loader: java.lang.ClassLoader, currentContext: boolean, configLocation: java.net.URI): org.apache.logging.log4j.spi.LoggerContext;
					public static getFormatterLogger(value: any): org.apache.logging.log4j.Logger;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export class Logger extends java.lang.Object {
					public static class: java.lang.Class<org.apache.logging.log4j.Logger>;
					/**
					 * Constructs a new instance of the org.apache.logging.log4j.Logger interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						catching(level0: org.apache.logging.log4j.Level, throwable1: java.lang.Throwable): void;
						catching(throwable0: java.lang.Throwable): void;
						debug(marker0: org.apache.logging.log4j.Marker, message1: org.apache.logging.log4j.message.Message): void;
						debug(marker0: org.apache.logging.log4j.Marker, message1: org.apache.logging.log4j.message.Message, throwable2: java.lang.Throwable): void;
						debug(marker0: org.apache.logging.log4j.Marker, messageSupplier1: org.apache.logging.log4j.util.MessageSupplier): void;
						debug(marker0: org.apache.logging.log4j.Marker, messageSupplier1: org.apache.logging.log4j.util.MessageSupplier, throwable2: java.lang.Throwable): void;
						debug(marker0: org.apache.logging.log4j.Marker, charSequence1: string): void;
						debug(marker0: org.apache.logging.log4j.Marker, charSequence1: string, throwable2: java.lang.Throwable): void;
						debug(marker0: org.apache.logging.log4j.Marker, object1: any): void;
						debug(marker0: org.apache.logging.log4j.Marker, object1: any, throwable2: java.lang.Throwable): void;
						debug(marker0: org.apache.logging.log4j.Marker, string1: string): void;
						debug(marker0: org.apache.logging.log4j.Marker, string1: string, objects2: native.Array<any>): void;
						debug(marker0: org.apache.logging.log4j.Marker, string1: string, suppliers2: native.Array<org.apache.logging.log4j.util.Supplier<any>>): void;
						debug(marker0: org.apache.logging.log4j.Marker, string1: string, throwable2: java.lang.Throwable): void;
						debug(marker0: org.apache.logging.log4j.Marker, supplier1: org.apache.logging.log4j.util.Supplier<any>): void;
						debug(marker0: org.apache.logging.log4j.Marker, supplier1: org.apache.logging.log4j.util.Supplier<any>, throwable2: java.lang.Throwable): void;
						debug(message0: org.apache.logging.log4j.message.Message): void;
						debug(message0: org.apache.logging.log4j.message.Message, throwable1: java.lang.Throwable): void;
						debug(messageSupplier0: org.apache.logging.log4j.util.MessageSupplier): void;
						debug(messageSupplier0: org.apache.logging.log4j.util.MessageSupplier, throwable1: java.lang.Throwable): void;
						debug(charSequence0: string): void;
						debug(charSequence0: string, throwable1: java.lang.Throwable): void;
						debug(object0: any): void;
						debug(object0: any, throwable1: java.lang.Throwable): void;
						debug(string0: string): void;
						debug(string0: string, objects1: native.Array<any>): void;
						debug(string0: string, suppliers1: native.Array<org.apache.logging.log4j.util.Supplier<any>>): void;
						debug(string0: string, throwable1: java.lang.Throwable): void;
						debug(supplier0: org.apache.logging.log4j.util.Supplier<any>): void;
						debug(supplier0: org.apache.logging.log4j.util.Supplier<any>, throwable1: java.lang.Throwable): void;
						debug(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any): void;
						debug(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any): void;
						debug(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any): void;
						debug(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any): void;
						debug(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any): void;
						debug(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any): void;
						debug(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any): void;
						debug(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any): void;
						debug(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any): void;
						debug(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any, object11: any): void;
						debug(string0: string, object1: any): void;
						debug(string0: string, object1: any, object2: any): void;
						debug(string0: string, object1: any, object2: any, object3: any): void;
						debug(string0: string, object1: any, object2: any, object3: any, object4: any): void;
						debug(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any): void;
						debug(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any): void;
						debug(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any): void;
						debug(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any): void;
						debug(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any): void;
						debug(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any): void;
						entry(): void;
						entry(objects0: native.Array<any>): void;
						error(marker0: org.apache.logging.log4j.Marker, message1: org.apache.logging.log4j.message.Message): void;
						error(marker0: org.apache.logging.log4j.Marker, message1: org.apache.logging.log4j.message.Message, throwable2: java.lang.Throwable): void;
						error(marker0: org.apache.logging.log4j.Marker, messageSupplier1: org.apache.logging.log4j.util.MessageSupplier): void;
						error(marker0: org.apache.logging.log4j.Marker, messageSupplier1: org.apache.logging.log4j.util.MessageSupplier, throwable2: java.lang.Throwable): void;
						error(marker0: org.apache.logging.log4j.Marker, charSequence1: string): void;
						error(marker0: org.apache.logging.log4j.Marker, charSequence1: string, throwable2: java.lang.Throwable): void;
						error(marker0: org.apache.logging.log4j.Marker, object1: any): void;
						error(marker0: org.apache.logging.log4j.Marker, object1: any, throwable2: java.lang.Throwable): void;
						error(marker0: org.apache.logging.log4j.Marker, string1: string): void;
						error(marker0: org.apache.logging.log4j.Marker, string1: string, objects2: native.Array<any>): void;
						error(marker0: org.apache.logging.log4j.Marker, string1: string, suppliers2: native.Array<org.apache.logging.log4j.util.Supplier<any>>): void;
						error(marker0: org.apache.logging.log4j.Marker, string1: string, throwable2: java.lang.Throwable): void;
						error(marker0: org.apache.logging.log4j.Marker, supplier1: org.apache.logging.log4j.util.Supplier<any>): void;
						error(marker0: org.apache.logging.log4j.Marker, supplier1: org.apache.logging.log4j.util.Supplier<any>, throwable2: java.lang.Throwable): void;
						error(message0: org.apache.logging.log4j.message.Message): void;
						error(message0: org.apache.logging.log4j.message.Message, throwable1: java.lang.Throwable): void;
						error(messageSupplier0: org.apache.logging.log4j.util.MessageSupplier): void;
						error(messageSupplier0: org.apache.logging.log4j.util.MessageSupplier, throwable1: java.lang.Throwable): void;
						error(charSequence0: string): void;
						error(charSequence0: string, throwable1: java.lang.Throwable): void;
						error(object0: any): void;
						error(object0: any, throwable1: java.lang.Throwable): void;
						error(string0: string): void;
						error(string0: string, objects1: native.Array<any>): void;
						error(string0: string, suppliers1: native.Array<org.apache.logging.log4j.util.Supplier<any>>): void;
						error(string0: string, throwable1: java.lang.Throwable): void;
						error(supplier0: org.apache.logging.log4j.util.Supplier<any>): void;
						error(supplier0: org.apache.logging.log4j.util.Supplier<any>, throwable1: java.lang.Throwable): void;
						error(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any): void;
						error(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any): void;
						error(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any): void;
						error(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any): void;
						error(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any): void;
						error(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any): void;
						error(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any): void;
						error(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any): void;
						error(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any): void;
						error(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any, object11: any): void;
						error(string0: string, object1: any): void;
						error(string0: string, object1: any, object2: any): void;
						error(string0: string, object1: any, object2: any, object3: any): void;
						error(string0: string, object1: any, object2: any, object3: any, object4: any): void;
						error(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any): void;
						error(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any): void;
						error(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any): void;
						error(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any): void;
						error(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any): void;
						error(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any): void;
						exit(): void;
						exit(object0: any): any;
						fatal(marker0: org.apache.logging.log4j.Marker, message1: org.apache.logging.log4j.message.Message): void;
						fatal(marker0: org.apache.logging.log4j.Marker, message1: org.apache.logging.log4j.message.Message, throwable2: java.lang.Throwable): void;
						fatal(marker0: org.apache.logging.log4j.Marker, messageSupplier1: org.apache.logging.log4j.util.MessageSupplier): void;
						fatal(marker0: org.apache.logging.log4j.Marker, messageSupplier1: org.apache.logging.log4j.util.MessageSupplier, throwable2: java.lang.Throwable): void;
						fatal(marker0: org.apache.logging.log4j.Marker, charSequence1: string): void;
						fatal(marker0: org.apache.logging.log4j.Marker, charSequence1: string, throwable2: java.lang.Throwable): void;
						fatal(marker0: org.apache.logging.log4j.Marker, object1: any): void;
						fatal(marker0: org.apache.logging.log4j.Marker, object1: any, throwable2: java.lang.Throwable): void;
						fatal(marker0: org.apache.logging.log4j.Marker, string1: string): void;
						fatal(marker0: org.apache.logging.log4j.Marker, string1: string, objects2: native.Array<any>): void;
						fatal(marker0: org.apache.logging.log4j.Marker, string1: string, suppliers2: native.Array<org.apache.logging.log4j.util.Supplier<any>>): void;
						fatal(marker0: org.apache.logging.log4j.Marker, string1: string, throwable2: java.lang.Throwable): void;
						fatal(marker0: org.apache.logging.log4j.Marker, supplier1: org.apache.logging.log4j.util.Supplier<any>): void;
						fatal(marker0: org.apache.logging.log4j.Marker, supplier1: org.apache.logging.log4j.util.Supplier<any>, throwable2: java.lang.Throwable): void;
						fatal(message0: org.apache.logging.log4j.message.Message): void;
						fatal(message0: org.apache.logging.log4j.message.Message, throwable1: java.lang.Throwable): void;
						fatal(messageSupplier0: org.apache.logging.log4j.util.MessageSupplier): void;
						fatal(messageSupplier0: org.apache.logging.log4j.util.MessageSupplier, throwable1: java.lang.Throwable): void;
						fatal(charSequence0: string): void;
						fatal(charSequence0: string, throwable1: java.lang.Throwable): void;
						fatal(object0: any): void;
						fatal(object0: any, throwable1: java.lang.Throwable): void;
						fatal(string0: string): void;
						fatal(string0: string, objects1: native.Array<any>): void;
						fatal(string0: string, suppliers1: native.Array<org.apache.logging.log4j.util.Supplier<any>>): void;
						fatal(string0: string, throwable1: java.lang.Throwable): void;
						fatal(supplier0: org.apache.logging.log4j.util.Supplier<any>): void;
						fatal(supplier0: org.apache.logging.log4j.util.Supplier<any>, throwable1: java.lang.Throwable): void;
						fatal(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any): void;
						fatal(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any): void;
						fatal(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any): void;
						fatal(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any): void;
						fatal(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any): void;
						fatal(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any): void;
						fatal(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any): void;
						fatal(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any): void;
						fatal(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any): void;
						fatal(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any, object11: any): void;
						fatal(string0: string, object1: any): void;
						fatal(string0: string, object1: any, object2: any): void;
						fatal(string0: string, object1: any, object2: any, object3: any): void;
						fatal(string0: string, object1: any, object2: any, object3: any, object4: any): void;
						fatal(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any): void;
						fatal(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any): void;
						fatal(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any): void;
						fatal(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any): void;
						fatal(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any): void;
						fatal(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any): void;
						getLevel(): org.apache.logging.log4j.Level;
						getMessageFactory(): org.apache.logging.log4j.message.MessageFactory;
						getName(): string;
						info(marker0: org.apache.logging.log4j.Marker, message1: org.apache.logging.log4j.message.Message): void;
						info(marker0: org.apache.logging.log4j.Marker, message1: org.apache.logging.log4j.message.Message, throwable2: java.lang.Throwable): void;
						info(marker0: org.apache.logging.log4j.Marker, messageSupplier1: org.apache.logging.log4j.util.MessageSupplier): void;
						info(marker0: org.apache.logging.log4j.Marker, messageSupplier1: org.apache.logging.log4j.util.MessageSupplier, throwable2: java.lang.Throwable): void;
						info(marker0: org.apache.logging.log4j.Marker, charSequence1: string): void;
						info(marker0: org.apache.logging.log4j.Marker, charSequence1: string, throwable2: java.lang.Throwable): void;
						info(marker0: org.apache.logging.log4j.Marker, object1: any): void;
						info(marker0: org.apache.logging.log4j.Marker, object1: any, throwable2: java.lang.Throwable): void;
						info(marker0: org.apache.logging.log4j.Marker, string1: string): void;
						info(marker0: org.apache.logging.log4j.Marker, string1: string, objects2: native.Array<any>): void;
						info(marker0: org.apache.logging.log4j.Marker, string1: string, suppliers2: native.Array<org.apache.logging.log4j.util.Supplier<any>>): void;
						info(marker0: org.apache.logging.log4j.Marker, string1: string, throwable2: java.lang.Throwable): void;
						info(marker0: org.apache.logging.log4j.Marker, supplier1: org.apache.logging.log4j.util.Supplier<any>): void;
						info(marker0: org.apache.logging.log4j.Marker, supplier1: org.apache.logging.log4j.util.Supplier<any>, throwable2: java.lang.Throwable): void;
						info(message0: org.apache.logging.log4j.message.Message): void;
						info(message0: org.apache.logging.log4j.message.Message, throwable1: java.lang.Throwable): void;
						info(messageSupplier0: org.apache.logging.log4j.util.MessageSupplier): void;
						info(messageSupplier0: org.apache.logging.log4j.util.MessageSupplier, throwable1: java.lang.Throwable): void;
						info(charSequence0: string): void;
						info(charSequence0: string, throwable1: java.lang.Throwable): void;
						info(object0: any): void;
						info(object0: any, throwable1: java.lang.Throwable): void;
						info(string0: string): void;
						info(string0: string, objects1: native.Array<any>): void;
						info(string0: string, suppliers1: native.Array<org.apache.logging.log4j.util.Supplier<any>>): void;
						info(string0: string, throwable1: java.lang.Throwable): void;
						info(supplier0: org.apache.logging.log4j.util.Supplier<any>): void;
						info(supplier0: org.apache.logging.log4j.util.Supplier<any>, throwable1: java.lang.Throwable): void;
						info(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any): void;
						info(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any): void;
						info(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any): void;
						info(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any): void;
						info(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any): void;
						info(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any): void;
						info(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any): void;
						info(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any): void;
						info(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any): void;
						info(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any, object11: any): void;
						info(string0: string, object1: any): void;
						info(string0: string, object1: any, object2: any): void;
						info(string0: string, object1: any, object2: any, object3: any): void;
						info(string0: string, object1: any, object2: any, object3: any, object4: any): void;
						info(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any): void;
						info(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any): void;
						info(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any): void;
						info(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any): void;
						info(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any): void;
						info(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any): void;
						isDebugEnabled(): boolean;
						isDebugEnabled(marker0: org.apache.logging.log4j.Marker): boolean;
						isEnabled(level0: org.apache.logging.log4j.Level): boolean;
						isEnabled(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker): boolean;
						isErrorEnabled(): boolean;
						isErrorEnabled(marker0: org.apache.logging.log4j.Marker): boolean;
						isFatalEnabled(): boolean;
						isFatalEnabled(marker0: org.apache.logging.log4j.Marker): boolean;
						isInfoEnabled(): boolean;
						isInfoEnabled(marker0: org.apache.logging.log4j.Marker): boolean;
						isTraceEnabled(): boolean;
						isTraceEnabled(marker0: org.apache.logging.log4j.Marker): boolean;
						isWarnEnabled(): boolean;
						isWarnEnabled(marker0: org.apache.logging.log4j.Marker): boolean;
						log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, message2: org.apache.logging.log4j.message.Message): void;
						log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, message2: org.apache.logging.log4j.message.Message, throwable3: java.lang.Throwable): void;
						log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, messageSupplier2: org.apache.logging.log4j.util.MessageSupplier): void;
						log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, messageSupplier2: org.apache.logging.log4j.util.MessageSupplier, throwable3: java.lang.Throwable): void;
						log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, charSequence2: string): void;
						log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, charSequence2: string, throwable3: java.lang.Throwable): void;
						log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, object2: any): void;
						log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, object2: any, throwable3: java.lang.Throwable): void;
						log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string): void;
						log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, objects3: native.Array<any>): void;
						log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, suppliers3: native.Array<org.apache.logging.log4j.util.Supplier<any>>): void;
						log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, throwable3: java.lang.Throwable): void;
						log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, supplier2: org.apache.logging.log4j.util.Supplier<any>): void;
						log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, supplier2: org.apache.logging.log4j.util.Supplier<any>, throwable3: java.lang.Throwable): void;
						log(level0: org.apache.logging.log4j.Level, message1: org.apache.logging.log4j.message.Message): void;
						log(level0: org.apache.logging.log4j.Level, message1: org.apache.logging.log4j.message.Message, throwable2: java.lang.Throwable): void;
						log(level0: org.apache.logging.log4j.Level, messageSupplier1: org.apache.logging.log4j.util.MessageSupplier): void;
						log(level0: org.apache.logging.log4j.Level, messageSupplier1: org.apache.logging.log4j.util.MessageSupplier, throwable2: java.lang.Throwable): void;
						log(level0: org.apache.logging.log4j.Level, charSequence1: string): void;
						log(level0: org.apache.logging.log4j.Level, charSequence1: string, throwable2: java.lang.Throwable): void;
						log(level0: org.apache.logging.log4j.Level, object1: any): void;
						log(level0: org.apache.logging.log4j.Level, object1: any, throwable2: java.lang.Throwable): void;
						log(level0: org.apache.logging.log4j.Level, string1: string): void;
						log(level0: org.apache.logging.log4j.Level, string1: string, objects2: native.Array<any>): void;
						log(level0: org.apache.logging.log4j.Level, string1: string, suppliers2: native.Array<org.apache.logging.log4j.util.Supplier<any>>): void;
						log(level0: org.apache.logging.log4j.Level, string1: string, throwable2: java.lang.Throwable): void;
						log(level0: org.apache.logging.log4j.Level, supplier1: org.apache.logging.log4j.util.Supplier<any>): void;
						log(level0: org.apache.logging.log4j.Level, supplier1: org.apache.logging.log4j.util.Supplier<any>, throwable2: java.lang.Throwable): void;
						log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, object3: any): void;
						log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, object3: any, object4: any): void;
						log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, object3: any, object4: any, object5: any): void;
						log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, object3: any, object4: any, object5: any, object6: any): void;
						log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, object3: any, object4: any, object5: any, object6: any, object7: any): void;
						log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any): void;
						log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any): void;
						log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any): void;
						log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any, object11: any): void;
						log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any, object11: any, object12: any): void;
						log(level0: org.apache.logging.log4j.Level, string1: string, object2: any): void;
						log(level0: org.apache.logging.log4j.Level, string1: string, object2: any, object3: any): void;
						log(level0: org.apache.logging.log4j.Level, string1: string, object2: any, object3: any, object4: any): void;
						log(level0: org.apache.logging.log4j.Level, string1: string, object2: any, object3: any, object4: any, object5: any): void;
						log(level0: org.apache.logging.log4j.Level, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any): void;
						log(level0: org.apache.logging.log4j.Level, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any): void;
						log(level0: org.apache.logging.log4j.Level, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any): void;
						log(level0: org.apache.logging.log4j.Level, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any): void;
						log(level0: org.apache.logging.log4j.Level, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any): void;
						log(level0: org.apache.logging.log4j.Level, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any, object11: any): void;
						printf(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, objects3: native.Array<any>): void;
						printf(level0: org.apache.logging.log4j.Level, string1: string, objects2: native.Array<any>): void;
						throwing(level0: org.apache.logging.log4j.Level, throwable1: java.lang.Throwable): java.lang.Throwable;
						throwing(throwable0: java.lang.Throwable): java.lang.Throwable;
						trace(marker0: org.apache.logging.log4j.Marker, message1: org.apache.logging.log4j.message.Message): void;
						trace(marker0: org.apache.logging.log4j.Marker, message1: org.apache.logging.log4j.message.Message, throwable2: java.lang.Throwable): void;
						trace(marker0: org.apache.logging.log4j.Marker, messageSupplier1: org.apache.logging.log4j.util.MessageSupplier): void;
						trace(marker0: org.apache.logging.log4j.Marker, messageSupplier1: org.apache.logging.log4j.util.MessageSupplier, throwable2: java.lang.Throwable): void;
						trace(marker0: org.apache.logging.log4j.Marker, charSequence1: string): void;
						trace(marker0: org.apache.logging.log4j.Marker, charSequence1: string, throwable2: java.lang.Throwable): void;
						trace(marker0: org.apache.logging.log4j.Marker, object1: any): void;
						trace(marker0: org.apache.logging.log4j.Marker, object1: any, throwable2: java.lang.Throwable): void;
						trace(marker0: org.apache.logging.log4j.Marker, string1: string): void;
						trace(marker0: org.apache.logging.log4j.Marker, string1: string, objects2: native.Array<any>): void;
						trace(marker0: org.apache.logging.log4j.Marker, string1: string, suppliers2: native.Array<org.apache.logging.log4j.util.Supplier<any>>): void;
						trace(marker0: org.apache.logging.log4j.Marker, string1: string, throwable2: java.lang.Throwable): void;
						trace(marker0: org.apache.logging.log4j.Marker, supplier1: org.apache.logging.log4j.util.Supplier<any>): void;
						trace(marker0: org.apache.logging.log4j.Marker, supplier1: org.apache.logging.log4j.util.Supplier<any>, throwable2: java.lang.Throwable): void;
						trace(message0: org.apache.logging.log4j.message.Message): void;
						trace(message0: org.apache.logging.log4j.message.Message, throwable1: java.lang.Throwable): void;
						trace(messageSupplier0: org.apache.logging.log4j.util.MessageSupplier): void;
						trace(messageSupplier0: org.apache.logging.log4j.util.MessageSupplier, throwable1: java.lang.Throwable): void;
						trace(charSequence0: string): void;
						trace(charSequence0: string, throwable1: java.lang.Throwable): void;
						trace(object0: any): void;
						trace(object0: any, throwable1: java.lang.Throwable): void;
						trace(string0: string): void;
						trace(string0: string, objects1: native.Array<any>): void;
						trace(string0: string, suppliers1: native.Array<org.apache.logging.log4j.util.Supplier<any>>): void;
						trace(string0: string, throwable1: java.lang.Throwable): void;
						trace(supplier0: org.apache.logging.log4j.util.Supplier<any>): void;
						trace(supplier0: org.apache.logging.log4j.util.Supplier<any>, throwable1: java.lang.Throwable): void;
						trace(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any): void;
						trace(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any): void;
						trace(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any): void;
						trace(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any): void;
						trace(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any): void;
						trace(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any): void;
						trace(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any): void;
						trace(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any): void;
						trace(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any): void;
						trace(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any, object11: any): void;
						trace(string0: string, object1: any): void;
						trace(string0: string, object1: any, object2: any): void;
						trace(string0: string, object1: any, object2: any, object3: any): void;
						trace(string0: string, object1: any, object2: any, object3: any, object4: any): void;
						trace(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any): void;
						trace(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any): void;
						trace(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any): void;
						trace(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any): void;
						trace(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any): void;
						trace(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any): void;
						traceEntry(): org.apache.logging.log4j.message.EntryMessage;
						traceEntry(string0: string, objects1: native.Array<any>): org.apache.logging.log4j.message.EntryMessage;
						traceEntry(suppliers0: native.Array<org.apache.logging.log4j.util.Supplier<any>>): org.apache.logging.log4j.message.EntryMessage;
						traceEntry(string0: string, suppliers1: native.Array<org.apache.logging.log4j.util.Supplier<any>>): org.apache.logging.log4j.message.EntryMessage;
						traceEntry(message0: org.apache.logging.log4j.message.Message): org.apache.logging.log4j.message.EntryMessage;
						traceExit(): void;
						traceExit(object0: any): any;
						traceExit(string0: string, object1: any): any;
						traceExit(entryMessage0: org.apache.logging.log4j.message.EntryMessage): void;
						traceExit(entryMessage0: org.apache.logging.log4j.message.EntryMessage, object1: any): any;
						traceExit(message0: org.apache.logging.log4j.message.Message, object1: any): any;
						warn(marker0: org.apache.logging.log4j.Marker, message1: org.apache.logging.log4j.message.Message): void;
						warn(marker0: org.apache.logging.log4j.Marker, message1: org.apache.logging.log4j.message.Message, throwable2: java.lang.Throwable): void;
						warn(marker0: org.apache.logging.log4j.Marker, messageSupplier1: org.apache.logging.log4j.util.MessageSupplier): void;
						warn(marker0: org.apache.logging.log4j.Marker, messageSupplier1: org.apache.logging.log4j.util.MessageSupplier, throwable2: java.lang.Throwable): void;
						warn(marker0: org.apache.logging.log4j.Marker, charSequence1: string): void;
						warn(marker0: org.apache.logging.log4j.Marker, charSequence1: string, throwable2: java.lang.Throwable): void;
						warn(marker0: org.apache.logging.log4j.Marker, object1: any): void;
						warn(marker0: org.apache.logging.log4j.Marker, object1: any, throwable2: java.lang.Throwable): void;
						warn(marker0: org.apache.logging.log4j.Marker, string1: string): void;
						warn(marker0: org.apache.logging.log4j.Marker, string1: string, objects2: native.Array<any>): void;
						warn(marker0: org.apache.logging.log4j.Marker, string1: string, suppliers2: native.Array<org.apache.logging.log4j.util.Supplier<any>>): void;
						warn(marker0: org.apache.logging.log4j.Marker, string1: string, throwable2: java.lang.Throwable): void;
						warn(marker0: org.apache.logging.log4j.Marker, supplier1: org.apache.logging.log4j.util.Supplier<any>): void;
						warn(marker0: org.apache.logging.log4j.Marker, supplier1: org.apache.logging.log4j.util.Supplier<any>, throwable2: java.lang.Throwable): void;
						warn(message0: org.apache.logging.log4j.message.Message): void;
						warn(message0: org.apache.logging.log4j.message.Message, throwable1: java.lang.Throwable): void;
						warn(messageSupplier0: org.apache.logging.log4j.util.MessageSupplier): void;
						warn(messageSupplier0: org.apache.logging.log4j.util.MessageSupplier, throwable1: java.lang.Throwable): void;
						warn(charSequence0: string): void;
						warn(charSequence0: string, throwable1: java.lang.Throwable): void;
						warn(object0: any): void;
						warn(object0: any, throwable1: java.lang.Throwable): void;
						warn(string0: string): void;
						warn(string0: string, objects1: native.Array<any>): void;
						warn(string0: string, suppliers1: native.Array<org.apache.logging.log4j.util.Supplier<any>>): void;
						warn(string0: string, throwable1: java.lang.Throwable): void;
						warn(supplier0: org.apache.logging.log4j.util.Supplier<any>): void;
						warn(supplier0: org.apache.logging.log4j.util.Supplier<any>, throwable1: java.lang.Throwable): void;
						warn(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any): void;
						warn(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any): void;
						warn(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any): void;
						warn(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any): void;
						warn(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any): void;
						warn(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any): void;
						warn(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any): void;
						warn(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any): void;
						warn(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any): void;
						warn(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any, object11: any): void;
						warn(string0: string, object1: any): void;
						warn(string0: string, object1: any, object2: any): void;
						warn(string0: string, object1: any, object2: any, object3: any): void;
						warn(string0: string, object1: any, object2: any, object3: any, object4: any): void;
						warn(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any): void;
						warn(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any): void;
						warn(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any): void;
						warn(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any): void;
						warn(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any): void;
						warn(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any): void;
						logMessage(level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, fqcn: string, location: java.lang.StackTraceElement, message: org.apache.logging.log4j.message.Message, throwable: java.lang.Throwable): void;
						atTrace(): org.apache.logging.log4j.LogBuilder;
						atDebug(): org.apache.logging.log4j.LogBuilder;
						atInfo(): org.apache.logging.log4j.LogBuilder;
						atWarn(): org.apache.logging.log4j.LogBuilder;
						atError(): org.apache.logging.log4j.LogBuilder;
						atFatal(): org.apache.logging.log4j.LogBuilder;
						always(): org.apache.logging.log4j.LogBuilder;
						atLevel(level: org.apache.logging.log4j.Level): org.apache.logging.log4j.LogBuilder;
					});
					public constructor();
					public log(level0: org.apache.logging.log4j.Level, charSequence1: string, throwable2: java.lang.Throwable): void;
					public log(level0: org.apache.logging.log4j.Level, string1: string): void;
					public debug(string0: string, object1: any, object2: any, object3: any): void;
					public log(level0: org.apache.logging.log4j.Level, string1: string, objects2: native.Array<any>): void;
					public fatal(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any): void;
					public info(marker0: org.apache.logging.log4j.Marker, object1: any): void;
					public fatal(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any): void;
					public fatal(charSequence0: string): void;
					public info(marker0: org.apache.logging.log4j.Marker, message1: org.apache.logging.log4j.message.Message, throwable2: java.lang.Throwable): void;
					public info(marker0: org.apache.logging.log4j.Marker, supplier1: org.apache.logging.log4j.util.Supplier<any>, throwable2: java.lang.Throwable): void;
					public log(level0: org.apache.logging.log4j.Level, string1: string, object2: any, object3: any, object4: any): void;
					public fatal(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any): void;
					public warn(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any): void;
					public debug(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any): void;
					public trace(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any): void;
					public fatal(message0: org.apache.logging.log4j.message.Message): void;
					public error(string0: string, object1: any, object2: any, object3: any): void;
					public fatal(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any): void;
					public catching(level0: org.apache.logging.log4j.Level, throwable1: java.lang.Throwable): void;
					public fatal(object0: any, throwable1: java.lang.Throwable): void;
					public isEnabled(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker): boolean;
					public isWarnEnabled(marker0: org.apache.logging.log4j.Marker): boolean;
					public warn(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any): void;
					public info(marker0: org.apache.logging.log4j.Marker, charSequence1: string, throwable2: java.lang.Throwable): void;
					public log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any, object11: any, object12: any): void;
					public error(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any): void;
					public trace(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any): void;
					public error(marker0: org.apache.logging.log4j.Marker, charSequence1: string): void;
					public log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, message2: org.apache.logging.log4j.message.Message): void;
					public log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, message2: org.apache.logging.log4j.message.Message, throwable3: java.lang.Throwable): void;
					public log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string): void;
					public trace(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any): void;
					public info(marker0: org.apache.logging.log4j.Marker, message1: org.apache.logging.log4j.message.Message): void;
					public isErrorEnabled(): boolean;
					public fatal(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any): void;
					public trace(messageSupplier0: org.apache.logging.log4j.util.MessageSupplier, throwable1: java.lang.Throwable): void;
					public debug(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any): void;
					public error(string0: string, throwable1: java.lang.Throwable): void;
					public log(level0: org.apache.logging.log4j.Level, message1: org.apache.logging.log4j.message.Message): void;
					public fatal(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any): void;
					public isFatalEnabled(marker0: org.apache.logging.log4j.Marker): boolean;
					public log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, supplier2: org.apache.logging.log4j.util.Supplier<any>): void;
					public debug(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any): void;
					public warn(object0: any): void;
					public isFatalEnabled(): boolean;
					public getLevel(): org.apache.logging.log4j.Level;
					public debug(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any): void;
					public error(supplier0: org.apache.logging.log4j.util.Supplier<any>): void;
					public fatal(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any): void;
					public trace(supplier0: org.apache.logging.log4j.util.Supplier<any>): void;
					public warn(marker0: org.apache.logging.log4j.Marker, object1: any, throwable2: java.lang.Throwable): void;
					public warn(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any): void;
					public info(string0: string, throwable1: java.lang.Throwable): void;
					public error(marker0: org.apache.logging.log4j.Marker, message1: org.apache.logging.log4j.message.Message, throwable2: java.lang.Throwable): void;
					public fatal(marker0: org.apache.logging.log4j.Marker, supplier1: org.apache.logging.log4j.util.Supplier<any>, throwable2: java.lang.Throwable): void;
					public trace(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any): void;
					public debug(marker0: org.apache.logging.log4j.Marker, supplier1: org.apache.logging.log4j.util.Supplier<any>, throwable2: java.lang.Throwable): void;
					public log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, object3: any, object4: any): void;
					public debug(charSequence0: string): void;
					public warn(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any): void;
					public traceEntry(message0: org.apache.logging.log4j.message.Message): org.apache.logging.log4j.message.EntryMessage;
					public debug(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any): void;
					public log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, messageSupplier2: org.apache.logging.log4j.util.MessageSupplier): void;
					/** @deprecated */
					public exit(object0: any): any;
					public fatal(marker0: org.apache.logging.log4j.Marker, message1: org.apache.logging.log4j.message.Message): void;
					public trace(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any): void;
					public traceExit(entryMessage0: org.apache.logging.log4j.message.EntryMessage): void;
					public trace(charSequence0: string, throwable1: java.lang.Throwable): void;
					public debug(marker0: org.apache.logging.log4j.Marker, message1: org.apache.logging.log4j.message.Message): void;
					public error(marker0: org.apache.logging.log4j.Marker, charSequence1: string, throwable2: java.lang.Throwable): void;
					public error(marker0: org.apache.logging.log4j.Marker, message1: org.apache.logging.log4j.message.Message): void;
					public trace(string0: string, throwable1: java.lang.Throwable): void;
					public log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, object2: any, throwable3: java.lang.Throwable): void;
					public trace(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any): void;
					public fatal(string0: string, object1: any, object2: any): void;
					public trace(messageSupplier0: org.apache.logging.log4j.util.MessageSupplier): void;
					public fatal(string0: string, objects1: native.Array<any>): void;
					public debug(marker0: org.apache.logging.log4j.Marker, charSequence1: string, throwable2: java.lang.Throwable): void;
					public fatal(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any): void;
					public log(level0: org.apache.logging.log4j.Level, messageSupplier1: org.apache.logging.log4j.util.MessageSupplier, throwable2: java.lang.Throwable): void;
					public warn(marker0: org.apache.logging.log4j.Marker, string1: string): void;
					public warn(string0: string, object1: any, object2: any, object3: any, object4: any): void;
					public fatal(charSequence0: string, throwable1: java.lang.Throwable): void;
					public log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, charSequence2: string, throwable3: java.lang.Throwable): void;
					public trace(string0: string, objects1: native.Array<any>): void;
					public error(string0: string, object1: any): void;
					public log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, object3: any): void;
					public getName(): string;
					public debug(object0: any): void;
					public error(string0: string, object1: any, object2: any, object3: any, object4: any): void;
					public error(messageSupplier0: org.apache.logging.log4j.util.MessageSupplier): void;
					public traceExit(message0: org.apache.logging.log4j.message.Message, object1: any): any;
					public log(level0: org.apache.logging.log4j.Level, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any): void;
					public error(message0: org.apache.logging.log4j.message.Message): void;
					public warn(charSequence0: string): void;
					public atWarn(): org.apache.logging.log4j.LogBuilder;
					public debug(marker0: org.apache.logging.log4j.Marker, object1: any, throwable2: java.lang.Throwable): void;
					public debug(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any): void;
					public warn(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any): void;
					public debug(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any): void;
					public trace(marker0: org.apache.logging.log4j.Marker, string1: string, suppliers2: native.Array<org.apache.logging.log4j.util.Supplier<any>>): void;
					public error(string0: string): void;
					public debug(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any): void;
					public trace(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any): void;
					public trace(string0: string, object1: any, object2: any, object3: any, object4: any): void;
					public trace(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any, object11: any): void;
					public info(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any, object11: any): void;
					public isEnabled(level0: org.apache.logging.log4j.Level): boolean;
					public info(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any): void;
					public info(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any): void;
					public trace(supplier0: org.apache.logging.log4j.util.Supplier<any>, throwable1: java.lang.Throwable): void;
					public error(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any): void;
					public info(message0: org.apache.logging.log4j.message.Message, throwable1: java.lang.Throwable): void;
					public error(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any): void;
					public error(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any): void;
					public throwing(level0: org.apache.logging.log4j.Level, throwable1: java.lang.Throwable): java.lang.Throwable;
					public fatal(marker0: org.apache.logging.log4j.Marker, object1: any): void;
					public log(level0: org.apache.logging.log4j.Level, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any, object11: any): void;
					public trace(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any): void;
					public warn(messageSupplier0: org.apache.logging.log4j.util.MessageSupplier, throwable1: java.lang.Throwable): void;
					public warn(message0: org.apache.logging.log4j.message.Message, throwable1: java.lang.Throwable): void;
					public debug(marker0: org.apache.logging.log4j.Marker, supplier1: org.apache.logging.log4j.util.Supplier<any>): void;
					public info(marker0: org.apache.logging.log4j.Marker, string1: string, suppliers2: native.Array<org.apache.logging.log4j.util.Supplier<any>>): void;
					public fatal(marker0: org.apache.logging.log4j.Marker, string1: string, objects2: native.Array<any>): void;
					public info(string0: string, objects1: native.Array<any>): void;
					public info(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any): void;
					public log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, supplier2: org.apache.logging.log4j.util.Supplier<any>, throwable3: java.lang.Throwable): void;
					public trace(charSequence0: string): void;
					public error(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any): void;
					public getMessageFactory(): org.apache.logging.log4j.message.MessageFactory;
					public traceEntry(string0: string, suppliers1: native.Array<org.apache.logging.log4j.util.Supplier<any>>): org.apache.logging.log4j.message.EntryMessage;
					public warn(string0: string, objects1: native.Array<any>): void;
					public log(level0: org.apache.logging.log4j.Level, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any): void;
					public debug(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any): void;
					public debug(marker0: org.apache.logging.log4j.Marker, string1: string, throwable2: java.lang.Throwable): void;
					public log(level0: org.apache.logging.log4j.Level, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any): void;
					public atError(): org.apache.logging.log4j.LogBuilder;
					public fatal(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any): void;
					public debug(string0: string, object1: any): void;
					public log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, object2: any): void;
					public warn(marker0: org.apache.logging.log4j.Marker, object1: any): void;
					public traceExit(string0: string, object1: any): any;
					public fatal(string0: string): void;
					public fatal(string0: string, object1: any, object2: any, object3: any): void;
					public atTrace(): org.apache.logging.log4j.LogBuilder;
					public error(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any): void;
					public log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, object3: any, object4: any, object5: any, object6: any): void;
					public fatal(marker0: org.apache.logging.log4j.Marker, message1: org.apache.logging.log4j.message.Message, throwable2: java.lang.Throwable): void;
					public log(level0: org.apache.logging.log4j.Level, object1: any, throwable2: java.lang.Throwable): void;
					public log(level0: org.apache.logging.log4j.Level, string1: string, object2: any, object3: any, object4: any, object5: any): void;
					public debug(marker0: org.apache.logging.log4j.Marker, messageSupplier1: org.apache.logging.log4j.util.MessageSupplier, throwable2: java.lang.Throwable): void;
					public warn(marker0: org.apache.logging.log4j.Marker, string1: string, throwable2: java.lang.Throwable): void;
					public error(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any): void;
					public traceExit(object0: any): any;
					public info(marker0: org.apache.logging.log4j.Marker, supplier1: org.apache.logging.log4j.util.Supplier<any>): void;
					public warn(charSequence0: string, throwable1: java.lang.Throwable): void;
					public error(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any): void;
					public warn(string0: string, object1: any): void;
					public error(string0: string, suppliers1: native.Array<org.apache.logging.log4j.util.Supplier<any>>): void;
					public info(marker0: org.apache.logging.log4j.Marker, messageSupplier1: org.apache.logging.log4j.util.MessageSupplier): void;
					public info(string0: string, object1: any, object2: any, object3: any): void;
					public fatal(marker0: org.apache.logging.log4j.Marker, charSequence1: string, throwable2: java.lang.Throwable): void;
					public trace(marker0: org.apache.logging.log4j.Marker, string1: string, throwable2: java.lang.Throwable): void;
					public debug(messageSupplier0: org.apache.logging.log4j.util.MessageSupplier): void;
					public log(level0: org.apache.logging.log4j.Level, string1: string, object2: any, object3: any): void;
					public traceEntry(suppliers0: native.Array<org.apache.logging.log4j.util.Supplier<any>>): org.apache.logging.log4j.message.EntryMessage;
					public warn(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any): void;
					public info(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any): void;
					/** @deprecated */
					public entry(): void;
					public error(object0: any): void;
					public fatal(marker0: org.apache.logging.log4j.Marker, supplier1: org.apache.logging.log4j.util.Supplier<any>): void;
					public log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any): void;
					public warn(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any): void;
					public info(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any): void;
					public isTraceEnabled(): boolean;
					public error(message0: org.apache.logging.log4j.message.Message, throwable1: java.lang.Throwable): void;
					public debug(object0: any, throwable1: java.lang.Throwable): void;
					public log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, throwable3: java.lang.Throwable): void;
					public trace(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any): void;
					public warn(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any): void;
					public error(charSequence0: string): void;
					public error(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any, object11: any): void;
					public fatal(supplier0: org.apache.logging.log4j.util.Supplier<any>): void;
					public info(charSequence0: string, throwable1: java.lang.Throwable): void;
					public debug(string0: string, object1: any, object2: any): void;
					public atInfo(): org.apache.logging.log4j.LogBuilder;
					public warn(message0: org.apache.logging.log4j.message.Message): void;
					public debug(marker0: org.apache.logging.log4j.Marker, messageSupplier1: org.apache.logging.log4j.util.MessageSupplier): void;
					public debug(string0: string, suppliers1: native.Array<org.apache.logging.log4j.util.Supplier<any>>): void;
					public trace(marker0: org.apache.logging.log4j.Marker, messageSupplier1: org.apache.logging.log4j.util.MessageSupplier): void;
					public warn(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any): void;
					public isErrorEnabled(marker0: org.apache.logging.log4j.Marker): boolean;
					public traceExit(entryMessage0: org.apache.logging.log4j.message.EntryMessage, object1: any): any;
					public atLevel(level: org.apache.logging.log4j.Level): org.apache.logging.log4j.LogBuilder;
					public trace(message0: org.apache.logging.log4j.message.Message, throwable1: java.lang.Throwable): void;
					public debug(marker0: org.apache.logging.log4j.Marker, string1: string): void;
					public fatal(message0: org.apache.logging.log4j.message.Message, throwable1: java.lang.Throwable): void;
					public info(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any): void;
					public trace(marker0: org.apache.logging.log4j.Marker, string1: string): void;
					public warn(marker0: org.apache.logging.log4j.Marker, messageSupplier1: org.apache.logging.log4j.util.MessageSupplier): void;
					public warn(string0: string, object1: any, object2: any): void;
					public trace(string0: string, suppliers1: native.Array<org.apache.logging.log4j.util.Supplier<any>>): void;
					public error(supplier0: org.apache.logging.log4j.util.Supplier<any>, throwable1: java.lang.Throwable): void;
					public fatal(marker0: org.apache.logging.log4j.Marker, object1: any, throwable2: java.lang.Throwable): void;
					public isDebugEnabled(): boolean;
					public isInfoEnabled(): boolean;
					public fatal(string0: string, object1: any, object2: any, object3: any, object4: any): void;
					public error(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any): void;
					public trace(message0: org.apache.logging.log4j.message.Message): void;
					public info(marker0: org.apache.logging.log4j.Marker, string1: string): void;
					public info(object0: any): void;
					public fatal(marker0: org.apache.logging.log4j.Marker, charSequence1: string): void;
					public trace(string0: string): void;
					public debug(message0: org.apache.logging.log4j.message.Message): void;
					public info(marker0: org.apache.logging.log4j.Marker, charSequence1: string): void;
					public log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, objects3: native.Array<any>): void;
					public info(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any): void;
					public trace(marker0: org.apache.logging.log4j.Marker, object1: any): void;
					public trace(marker0: org.apache.logging.log4j.Marker, charSequence1: string, throwable2: java.lang.Throwable): void;
					public info(messageSupplier0: org.apache.logging.log4j.util.MessageSupplier, throwable1: java.lang.Throwable): void;
					public info(marker0: org.apache.logging.log4j.Marker, messageSupplier1: org.apache.logging.log4j.util.MessageSupplier, throwable2: java.lang.Throwable): void;
					public fatal(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any): void;
					public info(marker0: org.apache.logging.log4j.Marker, string1: string, throwable2: java.lang.Throwable): void;
					public error(marker0: org.apache.logging.log4j.Marker, string1: string): void;
					public log(level0: org.apache.logging.log4j.Level, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any): void;
					public fatal(messageSupplier0: org.apache.logging.log4j.util.MessageSupplier): void;
					public debug(marker0: org.apache.logging.log4j.Marker, charSequence1: string): void;
					public debug(marker0: org.apache.logging.log4j.Marker, string1: string, objects2: native.Array<any>): void;
					public info(marker0: org.apache.logging.log4j.Marker, object1: any, throwable2: java.lang.Throwable): void;
					public throwing(throwable0: java.lang.Throwable): java.lang.Throwable;
					public error(string0: string, objects1: native.Array<any>): void;
					public warn(string0: string, throwable1: java.lang.Throwable): void;
					public debug(charSequence0: string, throwable1: java.lang.Throwable): void;
					public fatal(marker0: org.apache.logging.log4j.Marker, messageSupplier1: org.apache.logging.log4j.util.MessageSupplier, throwable2: java.lang.Throwable): void;
					public printf(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, objects3: native.Array<any>): void;
					public isInfoEnabled(marker0: org.apache.logging.log4j.Marker): boolean;
					public fatal(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any): void;
					public trace(object0: any): void;
					public info(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any): void;
					public trace(marker0: org.apache.logging.log4j.Marker, message1: org.apache.logging.log4j.message.Message): void;
					public trace(marker0: org.apache.logging.log4j.Marker, supplier1: org.apache.logging.log4j.util.Supplier<any>, throwable2: java.lang.Throwable): void;
					public warn(supplier0: org.apache.logging.log4j.util.Supplier<any>, throwable1: java.lang.Throwable): void;
					public trace(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any): void;
					public trace(object0: any, throwable1: java.lang.Throwable): void;
					public trace(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any): void;
					public trace(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any): void;
					public warn(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any): void;
					public info(string0: string, object1: any, object2: any): void;
					public debug(marker0: org.apache.logging.log4j.Marker, string1: string, suppliers2: native.Array<org.apache.logging.log4j.util.Supplier<any>>): void;
					public debug(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any): void;
					public isTraceEnabled(marker0: org.apache.logging.log4j.Marker): boolean;
					public atDebug(): org.apache.logging.log4j.LogBuilder;
					public error(marker0: org.apache.logging.log4j.Marker, object1: any): void;
					public info(string0: string, object1: any): void;
					public warn(supplier0: org.apache.logging.log4j.util.Supplier<any>): void;
					public fatal(marker0: org.apache.logging.log4j.Marker, messageSupplier1: org.apache.logging.log4j.util.MessageSupplier): void;
					/** @deprecated */
					public exit(): void;
					public debug(messageSupplier0: org.apache.logging.log4j.util.MessageSupplier, throwable1: java.lang.Throwable): void;
					public error(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any): void;
					public warn(marker0: org.apache.logging.log4j.Marker, supplier1: org.apache.logging.log4j.util.Supplier<any>, throwable2: java.lang.Throwable): void;
					public warn(marker0: org.apache.logging.log4j.Marker, charSequence1: string): void;
					public logMessage(level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, fqcn: string, location: java.lang.StackTraceElement, message: org.apache.logging.log4j.message.Message, throwable: java.lang.Throwable): void;
					public info(object0: any, throwable1: java.lang.Throwable): void;
					public log(level0: org.apache.logging.log4j.Level, message1: org.apache.logging.log4j.message.Message, throwable2: java.lang.Throwable): void;
					public trace(marker0: org.apache.logging.log4j.Marker, messageSupplier1: org.apache.logging.log4j.util.MessageSupplier, throwable2: java.lang.Throwable): void;
					public error(messageSupplier0: org.apache.logging.log4j.util.MessageSupplier, throwable1: java.lang.Throwable): void;
					public info(message0: org.apache.logging.log4j.message.Message): void;
					public log(level0: org.apache.logging.log4j.Level, object1: any): void;
					public warn(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any): void;
					public catching(throwable0: java.lang.Throwable): void;
					public warn(marker0: org.apache.logging.log4j.Marker, message1: org.apache.logging.log4j.message.Message): void;
					public debug(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any): void;
					public info(supplier0: org.apache.logging.log4j.util.Supplier<any>): void;
					public log(level0: org.apache.logging.log4j.Level, supplier1: org.apache.logging.log4j.util.Supplier<any>, throwable2: java.lang.Throwable): void;
					public fatal(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any): void;
					public fatal(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any): void;
					public log(level0: org.apache.logging.log4j.Level, messageSupplier1: org.apache.logging.log4j.util.MessageSupplier): void;
					public log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, charSequence2: string): void;
					public log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, object3: any, object4: any, object5: any): void;
					public warn(marker0: org.apache.logging.log4j.Marker, messageSupplier1: org.apache.logging.log4j.util.MessageSupplier, throwable2: java.lang.Throwable): void;
					public isWarnEnabled(): boolean;
					public trace(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any): void;
					public warn(marker0: org.apache.logging.log4j.Marker, string1: string, objects2: native.Array<any>): void;
					public info(charSequence0: string): void;
					public debug(supplier0: org.apache.logging.log4j.util.Supplier<any>, throwable1: java.lang.Throwable): void;
					public info(marker0: org.apache.logging.log4j.Marker, string1: string, objects2: native.Array<any>): void;
					public warn(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any): void;
					public info(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any): void;
					public error(marker0: org.apache.logging.log4j.Marker, string1: string, objects2: native.Array<any>): void;
					public error(marker0: org.apache.logging.log4j.Marker, supplier1: org.apache.logging.log4j.util.Supplier<any>): void;
					public info(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any): void;
					public warn(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any, object11: any): void;
					public debug(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any, object11: any): void;
					public fatal(marker0: org.apache.logging.log4j.Marker, string1: string): void;
					public trace(marker0: org.apache.logging.log4j.Marker, supplier1: org.apache.logging.log4j.util.Supplier<any>): void;
					public error(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any): void;
					public warn(string0: string, object1: any, object2: any, object3: any): void;
					public log(level0: org.apache.logging.log4j.Level, string1: string, throwable2: java.lang.Throwable): void;
					public fatal(object0: any): void;
					public atFatal(): org.apache.logging.log4j.LogBuilder;
					public error(marker0: org.apache.logging.log4j.Marker, messageSupplier1: org.apache.logging.log4j.util.MessageSupplier, throwable2: java.lang.Throwable): void;
					public info(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any): void;
					public warn(object0: any, throwable1: java.lang.Throwable): void;
					public error(charSequence0: string, throwable1: java.lang.Throwable): void;
					public info(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any): void;
					public debug(string0: string, object1: any, object2: any, object3: any, object4: any): void;
					/** @deprecated */
					public entry(objects0: native.Array<any>): void;
					public warn(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any): void;
					public always(): org.apache.logging.log4j.LogBuilder;
					public error(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any): void;
					public fatal(string0: string, object1: any): void;
					public log(level0: org.apache.logging.log4j.Level, supplier1: org.apache.logging.log4j.util.Supplier<any>): void;
					public error(string0: string, object1: any, object2: any): void;
					public warn(messageSupplier0: org.apache.logging.log4j.util.MessageSupplier): void;
					public fatal(string0: string, throwable1: java.lang.Throwable): void;
					public fatal(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any, object11: any): void;
					public warn(string0: string, suppliers1: native.Array<org.apache.logging.log4j.util.Supplier<any>>): void;
					public error(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any): void;
					public printf(level0: org.apache.logging.log4j.Level, string1: string, objects2: native.Array<any>): void;
					public debug(supplier0: org.apache.logging.log4j.util.Supplier<any>): void;
					public warn(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any): void;
					public info(supplier0: org.apache.logging.log4j.util.Supplier<any>, throwable1: java.lang.Throwable): void;
					public info(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any): void;
					public debug(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any): void;
					public traceEntry(): org.apache.logging.log4j.message.EntryMessage;
					public fatal(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any): void;
					public info(string0: string, suppliers1: native.Array<org.apache.logging.log4j.util.Supplier<any>>): void;
					public trace(string0: string, object1: any, object2: any): void;
					public traceExit(): void;
					public log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, suppliers3: native.Array<org.apache.logging.log4j.util.Supplier<any>>): void;
					public trace(marker0: org.apache.logging.log4j.Marker, message1: org.apache.logging.log4j.message.Message, throwable2: java.lang.Throwable): void;
					public trace(string0: string, object1: any): void;
					public info(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any): void;
					public error(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any): void;
					public log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, messageSupplier2: org.apache.logging.log4j.util.MessageSupplier, throwable3: java.lang.Throwable): void;
					public isDebugEnabled(marker0: org.apache.logging.log4j.Marker): boolean;
					public debug(string0: string, objects1: native.Array<any>): void;
					public log(level0: org.apache.logging.log4j.Level, charSequence1: string): void;
					public log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any): void;
					public info(string0: string, object1: any, object2: any, object3: any, object4: any): void;
					public log(level0: org.apache.logging.log4j.Level, string1: string, object2: any): void;
					public debug(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any): void;
					public error(marker0: org.apache.logging.log4j.Marker, string1: string, throwable2: java.lang.Throwable): void;
					public trace(marker0: org.apache.logging.log4j.Marker, string1: string, objects2: native.Array<any>): void;
					public error(marker0: org.apache.logging.log4j.Marker, object1: any, throwable2: java.lang.Throwable): void;
					public error(marker0: org.apache.logging.log4j.Marker, supplier1: org.apache.logging.log4j.util.Supplier<any>, throwable2: java.lang.Throwable): void;
					public fatal(supplier0: org.apache.logging.log4j.util.Supplier<any>, throwable1: java.lang.Throwable): void;
					public debug(string0: string): void;
					public fatal(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any): void;
					public debug(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any): void;
					public error(object0: any, throwable1: java.lang.Throwable): void;
					public fatal(string0: string, suppliers1: native.Array<org.apache.logging.log4j.util.Supplier<any>>): void;
					public trace(marker0: org.apache.logging.log4j.Marker, object1: any, throwable2: java.lang.Throwable): void;
					public trace(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any): void;
					public log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any): void;
					public warn(string0: string): void;
					public error(marker0: org.apache.logging.log4j.Marker, messageSupplier1: org.apache.logging.log4j.util.MessageSupplier): void;
					public trace(marker0: org.apache.logging.log4j.Marker, charSequence1: string): void;
					public trace(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any): void;
					public debug(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any): void;
					public debug(message0: org.apache.logging.log4j.message.Message, throwable1: java.lang.Throwable): void;
					public warn(marker0: org.apache.logging.log4j.Marker, string1: string, suppliers2: native.Array<org.apache.logging.log4j.util.Supplier<any>>): void;
					public error(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any): void;
					public info(messageSupplier0: org.apache.logging.log4j.util.MessageSupplier): void;
					public fatal(messageSupplier0: org.apache.logging.log4j.util.MessageSupplier, throwable1: java.lang.Throwable): void;
					public fatal(marker0: org.apache.logging.log4j.Marker, string1: string, suppliers2: native.Array<org.apache.logging.log4j.util.Supplier<any>>): void;
					public log(level0: org.apache.logging.log4j.Level, string1: string, suppliers2: native.Array<org.apache.logging.log4j.util.Supplier<any>>): void;
					public trace(string0: string, object1: any, object2: any, object3: any): void;
					public error(marker0: org.apache.logging.log4j.Marker, string1: string, suppliers2: native.Array<org.apache.logging.log4j.util.Supplier<any>>): void;
					public fatal(marker0: org.apache.logging.log4j.Marker, string1: string, throwable2: java.lang.Throwable): void;
					public warn(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any): void;
					public traceEntry(string0: string, objects1: native.Array<any>): org.apache.logging.log4j.message.EntryMessage;
					public log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any, object11: any): void;
					public debug(marker0: org.apache.logging.log4j.Marker, object1: any): void;
					public log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, object3: any, object4: any, object5: any, object6: any, object7: any): void;
					public warn(marker0: org.apache.logging.log4j.Marker, supplier1: org.apache.logging.log4j.util.Supplier<any>): void;
					public debug(string0: string, throwable1: java.lang.Throwable): void;
					public info(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any): void;
					public debug(marker0: org.apache.logging.log4j.Marker, message1: org.apache.logging.log4j.message.Message, throwable2: java.lang.Throwable): void;
					public log(level0: org.apache.logging.log4j.Level, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any): void;
					public warn(marker0: org.apache.logging.log4j.Marker, message1: org.apache.logging.log4j.message.Message, throwable2: java.lang.Throwable): void;
					public warn(marker0: org.apache.logging.log4j.Marker, charSequence1: string, throwable2: java.lang.Throwable): void;
					public info(string0: string): void;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export class LoggingException extends java.lang.RuntimeException {
					public static class: java.lang.Class<org.apache.logging.log4j.LoggingException>;
					public constructor(message: string);
					public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
					public constructor();
					public constructor(cause: java.lang.Throwable);
					public constructor(message: string, cause: java.lang.Throwable);
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export class Marker extends java.lang.Object implements java.io.Serializable {
					public static class: java.lang.Class<org.apache.logging.log4j.Marker>;
					/**
					 * Constructs a new instance of the org.apache.logging.log4j.Marker interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						addParents(markers0: native.Array<org.apache.logging.log4j.Marker>): org.apache.logging.log4j.Marker;
						equals(object0: any): boolean;
						getName(): string;
						getParents(): native.Array<org.apache.logging.log4j.Marker>;
						hashCode(): number;
						hasParents(): boolean;
						isInstanceOf(marker0: org.apache.logging.log4j.Marker): boolean;
						isInstanceOf(string0: string): boolean;
						remove(marker0: org.apache.logging.log4j.Marker): boolean;
						setParents(markers0: native.Array<org.apache.logging.log4j.Marker>): org.apache.logging.log4j.Marker;
					});
					public constructor();
					public equals(obj: any): boolean;
					public remove(marker0: org.apache.logging.log4j.Marker): boolean;
					public hasParents(): boolean;
					public getName(): string;
					public setParents(markers0: native.Array<org.apache.logging.log4j.Marker>): org.apache.logging.log4j.Marker;
					public getParents(): native.Array<org.apache.logging.log4j.Marker>;
					public isInstanceOf(marker0: org.apache.logging.log4j.Marker): boolean;
					public hashCode(): number;
					public addParents(markers0: native.Array<org.apache.logging.log4j.Marker>): org.apache.logging.log4j.Marker;
					public isInstanceOf(string0: string): boolean;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export class MarkerManager extends java.lang.Object {
					public static class: java.lang.Class<org.apache.logging.log4j.MarkerManager>;
					/** @deprecated */
					public static getMarker(name: string, parent: org.apache.logging.log4j.Marker): org.apache.logging.log4j.Marker;
					/** @deprecated */
					public static getMarker(name: string, parent: string): org.apache.logging.log4j.Marker;
					public static exists(key: string): boolean;
					public static clear(): void;
					public static getMarker(name: string): org.apache.logging.log4j.Marker;
				}
				export module MarkerManager {
					export class Log4jMarker extends java.lang.Object implements org.apache.logging.log4j.Marker, org.apache.logging.log4j.util.StringBuilderFormattable {
						public static class: java.lang.Class<org.apache.logging.log4j.MarkerManager.Log4jMarker>;
						public equals(obj: any): boolean;
						public isInstanceOf(markerName: string): boolean;
						public getParents(): native.Array<org.apache.logging.log4j.Marker>;
						public isInstanceOf(marker: org.apache.logging.log4j.Marker): boolean;
						public remove(parent: org.apache.logging.log4j.Marker): boolean;
						public hashCode(): number;
						public setParents(markers: native.Array<org.apache.logging.log4j.Marker>): org.apache.logging.log4j.Marker;
						public getName(): string;
						public toString(): string;
						public hasParents(): boolean;
						public addParents(parentMarkers: native.Array<org.apache.logging.log4j.Marker>): org.apache.logging.log4j.Marker;
						public formatTo(sb: java.lang.StringBuilder): void;
						public constructor(name: string);
						public equals(o: any): boolean;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export class ThreadContext extends java.lang.Object {
					public static class: java.lang.Class<org.apache.logging.log4j.ThreadContext>;
					public static EMPTY_MAP: java.util.Map<string,string>;
					public static EMPTY_STACK: org.apache.logging.log4j.spi.ThreadContextStack;
					public static removeAll(keys: java.lang.Iterable<string>): void;
					public static pop(): string;
					public static putAll(m: java.util.Map<string,string>): void;
					public static putIfNull(key: string, value: string): void;
					public static trim(depth: number): void;
					public static get(key: string): string;
					public static getDepth(): number;
					public static peek(): string;
					public static put(key: string, value: string): void;
					public static isEmpty(): boolean;
					public static clearMap(): void;
					public static clearAll(): void;
					public static getThreadContextMap(): org.apache.logging.log4j.spi.ReadOnlyThreadContextMap;
					public static containsKey(key: string): boolean;
					public static clearStack(): void;
					public static removeStack(): void;
					public static push(message: string, objects1: native.Array<any>): void;
					public static setStack(stack: java.util.Collection<string>): void;
					public static cloneStack(): org.apache.logging.log4j.ThreadContext.ContextStack;
					public static push(message: string): void;
					public static getImmutableContext(): java.util.Map<string,string>;
					public static getImmutableStack(): org.apache.logging.log4j.ThreadContext.ContextStack;
					public static remove(key: string): void;
					public static getContext(): java.util.Map<string,string>;
				}
				export module ThreadContext {
					export class ContextStack extends java.lang.Object {
						public static class: java.lang.Class<org.apache.logging.log4j.ThreadContext.ContextStack>;
						/**
						 * Constructs a new instance of the org.apache.logging.log4j.ThreadContext() when extending the interface class.
						 */
						public constructor(implementation: {
							pop(): string;
							peek(): string;
							push(string0: string): void;
							getDepth(): number;
							asList(): java.util.List<string>;
							trim(int0: number): void;
							copy(): org.apache.logging.log4j.ThreadContext.ContextStack;
							getImmutableStackOrNull(): org.apache.logging.log4j.ThreadContext.ContextStack;
							size(): number;
							isEmpty(): boolean;
							contains(object0: any): boolean;
							iterator(): java.util.Iterator<any>;
							toArray(): native.Array<any>;
							toArray(objects0: native.Array<any>): native.Array<any>;
							add(object0: any): boolean;
							remove(object0: any): boolean;
							containsAll(collection0: java.util.Collection<any>): boolean;
							addAll(collection0: java.util.Collection<any>): boolean;
							removeAll(collection0: java.util.Collection<any>): boolean;
							removeIf(filter: any /* any*/): boolean;
							retainAll(collection0: java.util.Collection<any>): boolean;
							clear(): void;
							equals(object0: any): boolean;
							hashCode(): number;
							spliterator(): java.util.Spliterator<any>;
							stream(): java.util.stream.Stream<any>;
							parallelStream(): java.util.stream.Stream<any>;
							iterator(): java.util.Iterator<any>;
							forEach(action: any /* any*/): void;
							spliterator(): java.util.Spliterator<any>;
						});
						public constructor();
						public equals(obj: any): boolean;
						public removeAll(collection0: java.util.Collection<any>): boolean;
						public iterator(): java.util.Iterator<any>;
						public stream(): java.util.stream.Stream<any>;
						public getImmutableStackOrNull(): org.apache.logging.log4j.ThreadContext.ContextStack;
						public hashCode(): number;
						public removeIf(filter: any /* any*/): boolean;
						public add(object0: any): boolean;
						public spliterator(): java.util.Spliterator<any>;
						public toArray(objects0: native.Array<any>): native.Array<any>;
						public isEmpty(): boolean;
						public remove(object0: any): boolean;
						public size(): number;
						public asList(): java.util.List<string>;
						public copy(): org.apache.logging.log4j.ThreadContext.ContextStack;
						public containsAll(collection0: java.util.Collection<any>): boolean;
						public retainAll(collection0: java.util.Collection<any>): boolean;
						public parallelStream(): java.util.stream.Stream<any>;
						public pop(): string;
						public trim(int0: number): void;
						public push(string0: string): void;
						public contains(object0: any): boolean;
						public peek(): string;
						public addAll(collection0: java.util.Collection<any>): boolean;
						public clear(): void;
						public getDepth(): number;
						public forEach(action: any /* any*/): void;
						public toArray(): native.Array<any>;
					}
					export class EmptyIterator<E>  extends java.util.Iterator<any> {
						public static class: java.lang.Class<org.apache.logging.log4j.ThreadContext.EmptyIterator<any>>;
						public next(): any;
						public hasNext(): boolean;
						public remove(): void;
					}
					export class EmptyThreadContextStack extends java.util.AbstractCollection<string> implements org.apache.logging.log4j.spi.ThreadContextStack  {
						public static class: java.lang.Class<org.apache.logging.log4j.ThreadContext.EmptyThreadContextStack>;
						public equals(obj: any): boolean;
						public retainAll(c: java.util.Collection<any>): boolean;
						public iterator(): java.util.Iterator<any>;
						public stream(): java.util.stream.Stream<any>;
						public hashCode(): number;
						public getImmutableStackOrNull(): org.apache.logging.log4j.ThreadContext.ContextStack;
						public removeIf(filter: any /* any*/): boolean;
						public push(message: string): void;
						public removeAll(c: java.util.Collection<any>): boolean;
						public contains(o: any): boolean;
						public spliterator(): java.util.Spliterator<any>;
						public iterator(): java.util.Iterator<string>;
						public isEmpty(): boolean;
						public equals(o: any): boolean;
						public containsAll(c: java.util.Collection<any>): boolean;
						public size(): number;
						public asList(): java.util.List<string>;
						public addAll(c: java.util.Collection<any>): boolean;
						public add(e: any): boolean;
						public copy(): org.apache.logging.log4j.ThreadContext.ContextStack;
						public remove(o: any): boolean;
						public toArray(a: native.Array<any>): native.Array<any>;
						public parallelStream(): java.util.stream.Stream<any>;
						public add(e: string): boolean;
						public pop(): string;
						public peek(): string;
						public trim(depth: number): void;
						public clear(): void;
						public getDepth(): number;
						public forEach(action: any /* any*/): void;
						public toArray(): native.Array<any>;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module internal {
					export class DefaultLogBuilder extends java.lang.Object implements org.apache.logging.log4j.LogBuilder {
						public static class: java.lang.Class<org.apache.logging.log4j.internal.DefaultLogBuilder>;
						public log(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void;
						public withThrowable(throwable: java.lang.Throwable): org.apache.logging.log4j.LogBuilder;
						public isInUse(): boolean;
						public log(message: string, p0: any): void;
						public log(message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void;
						public constructor(logger: org.apache.logging.log4j.Logger);
						public withLocation(location: java.lang.StackTraceElement): org.apache.logging.log4j.LogBuilder;
						public log(message: string, p0: any, p1: any, p2: any, p3: any): void;
						public log(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void;
						public log(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void;
						public reset(level: org.apache.logging.log4j.Level): org.apache.logging.log4j.LogBuilder;
						public log(message: string, params: native.Array<any>): void;
						public withLocation(): org.apache.logging.log4j.LogBuilder;
						public log(message: any): void;
						public log(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void;
						public log(message: org.apache.logging.log4j.message.Message): void;
						public withMarker(marker: org.apache.logging.log4j.Marker): org.apache.logging.log4j.LogBuilder;
						public log(message: string, params: native.Array<org.apache.logging.log4j.util.Supplier<any>>): void;
						public constructor(logger: org.apache.logging.log4j.Logger, level: org.apache.logging.log4j.Level);
						public log(message: string): void;
						public log(message: string, p0: any, p1: any): void;
						public log(messageSupplier: org.apache.logging.log4j.util.Supplier<org.apache.logging.log4j.message.Message>): void;
						public log(message: string, p0: any, p1: any, p2: any): void;
						public log(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module message {
					export abstract class AbstractMessageFactory extends java.lang.Object implements org.apache.logging.log4j.message.MessageFactory2, java.io.Serializable {
						public static class: java.lang.Class<org.apache.logging.log4j.message.AbstractMessageFactory>;
						public constructor();
						public newMessage(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: string, p0: any, p1: any, p2: any, p3: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: string, p0: any): org.apache.logging.log4j.message.Message;
						public newMessage(string0: string, objects1: native.Array<any>): org.apache.logging.log4j.message.Message;
						public newMessage(message: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: string): org.apache.logging.log4j.message.Message;
						public newMessage(message: string, p0: any, p1: any, p2: any, p3: any, p4: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: string, p0: any, p1: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: string, p0: any, p1: any, p2: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): org.apache.logging.log4j.message.Message;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module message {
					export class AsynchronouslyFormattable extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<org.apache.logging.log4j.message.AsynchronouslyFormattable>;
						/**
						 * Constructs a new instance of the org.apache.logging.log4j.message.AsynchronouslyFormattable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module message {
					export class BasicThreadInformation extends java.lang.Object implements org.apache.logging.log4j.message.ThreadInformation {
						public static class: java.lang.Class<org.apache.logging.log4j.message.BasicThreadInformation>;
						public equals(obj: any): boolean;
						public printThreadInfo(sb: java.lang.StringBuilder): void;
						public printStack(sb: java.lang.StringBuilder, trace: native.Array<java.lang.StackTraceElement>): void;
						public hashCode(): number;
						public equals(o: any): boolean;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module message {
					export class Clearable extends java.lang.Object {
						public static class: java.lang.Class<org.apache.logging.log4j.message.Clearable>;
						/**
						 * Constructs a new instance of the org.apache.logging.log4j.message.Clearable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							clear(): void;
						});
						public constructor();
						public clear(): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module message {
					export class DefaultFlowMessageFactory extends java.lang.Object implements org.apache.logging.log4j.message.FlowMessageFactory, java.io.Serializable {
						public static class: java.lang.Class<org.apache.logging.log4j.message.DefaultFlowMessageFactory>;
						public newExitMessage(result: any, message: org.apache.logging.log4j.message.Message): org.apache.logging.log4j.message.ExitMessage;
						public constructor();
						public getExitText(): string;
						public newExitMessage(result: any, message: org.apache.logging.log4j.message.EntryMessage): org.apache.logging.log4j.message.ExitMessage;
						public getEntryText(): string;
						public constructor(entryText: string, exitText: string);
						public newExitMessage(message: org.apache.logging.log4j.message.EntryMessage): org.apache.logging.log4j.message.ExitMessage;
						public newEntryMessage(message: org.apache.logging.log4j.message.Message): org.apache.logging.log4j.message.EntryMessage;
					}
					export module DefaultFlowMessageFactory {
						export class AbstractFlowMessage extends java.lang.Object implements org.apache.logging.log4j.message.FlowMessage {
							public static class: java.lang.Class<org.apache.logging.log4j.message.DefaultFlowMessageFactory.AbstractFlowMessage>;
							public getFormat(): string;
							public getText(): string;
							public getMessage(): org.apache.logging.log4j.message.Message;
							public getThrowable(): java.lang.Throwable;
							public getFormattedMessage(): string;
							public getParameters(): native.Array<any>;
						}
						export class SimpleEntryMessage extends org.apache.logging.log4j.message.DefaultFlowMessageFactory.AbstractFlowMessage implements org.apache.logging.log4j.message.EntryMessage {
							public static class: java.lang.Class<org.apache.logging.log4j.message.DefaultFlowMessageFactory.SimpleEntryMessage>;
							public getFormat(): string;
							public getText(): string;
							public getMessage(): org.apache.logging.log4j.message.Message;
							public getThrowable(): java.lang.Throwable;
							public getFormattedMessage(): string;
							public getParameters(): native.Array<any>;
						}
						export class SimpleExitMessage extends org.apache.logging.log4j.message.DefaultFlowMessageFactory.AbstractFlowMessage implements org.apache.logging.log4j.message.ExitMessage {
							public static class: java.lang.Class<org.apache.logging.log4j.message.DefaultFlowMessageFactory.SimpleExitMessage>;
							public getFormat(): string;
							public getText(): string;
							public getMessage(): org.apache.logging.log4j.message.Message;
							public getThrowable(): java.lang.Throwable;
							public getFormattedMessage(): string;
							public getParameters(): native.Array<any>;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module message {
					export class EntryMessage extends java.lang.Object implements org.apache.logging.log4j.message.FlowMessage {
						public static class: java.lang.Class<org.apache.logging.log4j.message.EntryMessage>;
						/**
						 * Constructs a new instance of the org.apache.logging.log4j.message.EntryMessage interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getText(): string;
							getMessage(): org.apache.logging.log4j.message.Message;
							getFormattedMessage(): string;
							getFormat(): string;
							getParameters(): native.Array<any>;
							getThrowable(): java.lang.Throwable;
						});
						public constructor();
						public getFormattedMessage(): string;
						public getThrowable(): java.lang.Throwable;
						public getFormat(): string;
						public getText(): string;
						public getMessage(): org.apache.logging.log4j.message.Message;
						public getParameters(): native.Array<any>;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module message {
					export class ExitMessage extends java.lang.Object implements org.apache.logging.log4j.message.FlowMessage {
						public static class: java.lang.Class<org.apache.logging.log4j.message.ExitMessage>;
						/**
						 * Constructs a new instance of the org.apache.logging.log4j.message.ExitMessage interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getText(): string;
							getMessage(): org.apache.logging.log4j.message.Message;
							getFormattedMessage(): string;
							getFormat(): string;
							getParameters(): native.Array<any>;
							getThrowable(): java.lang.Throwable;
						});
						public constructor();
						public getFormattedMessage(): string;
						public getThrowable(): java.lang.Throwable;
						public getFormat(): string;
						public getText(): string;
						public getMessage(): org.apache.logging.log4j.message.Message;
						public getParameters(): native.Array<any>;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module message {
					export class FlowMessage extends java.lang.Object implements org.apache.logging.log4j.message.Message {
						public static class: java.lang.Class<org.apache.logging.log4j.message.FlowMessage>;
						/**
						 * Constructs a new instance of the org.apache.logging.log4j.message.FlowMessage interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getText(): string;
							getMessage(): org.apache.logging.log4j.message.Message;
							getFormattedMessage(): string;
							getFormat(): string;
							getParameters(): native.Array<any>;
							getThrowable(): java.lang.Throwable;
						});
						public constructor();
						public getFormattedMessage(): string;
						public getThrowable(): java.lang.Throwable;
						public getFormat(): string;
						public getText(): string;
						public getMessage(): org.apache.logging.log4j.message.Message;
						public getParameters(): native.Array<any>;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module message {
					export class FlowMessageFactory extends java.lang.Object {
						public static class: java.lang.Class<org.apache.logging.log4j.message.FlowMessageFactory>;
						/**
						 * Constructs a new instance of the org.apache.logging.log4j.message.FlowMessageFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							newEntryMessage(message0: org.apache.logging.log4j.message.Message): org.apache.logging.log4j.message.EntryMessage;
							newExitMessage(object0: any, message1: org.apache.logging.log4j.message.Message): org.apache.logging.log4j.message.ExitMessage;
							newExitMessage(entryMessage0: org.apache.logging.log4j.message.EntryMessage): org.apache.logging.log4j.message.ExitMessage;
							newExitMessage(object0: any, entryMessage1: org.apache.logging.log4j.message.EntryMessage): org.apache.logging.log4j.message.ExitMessage;
						});
						public constructor();
						public newExitMessage(object0: any, message1: org.apache.logging.log4j.message.Message): org.apache.logging.log4j.message.ExitMessage;
						public newExitMessage(entryMessage0: org.apache.logging.log4j.message.EntryMessage): org.apache.logging.log4j.message.ExitMessage;
						public newExitMessage(object0: any, entryMessage1: org.apache.logging.log4j.message.EntryMessage): org.apache.logging.log4j.message.ExitMessage;
						public newEntryMessage(message0: org.apache.logging.log4j.message.Message): org.apache.logging.log4j.message.EntryMessage;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module message {
					export class FormattedMessage extends java.lang.Object implements org.apache.logging.log4j.message.Message {
						public static class: java.lang.Class<org.apache.logging.log4j.message.FormattedMessage>;
						public equals(obj: any): boolean;
						public constructor(locale: java.util.Locale, messagePattern: string, objects2: native.Array<any>, throwable: java.lang.Throwable);
						public getFormattedMessage(): string;
						public constructor(messagePattern: string, object1: any, object2: any);
						public getMessage(msgPattern: string, objects1: native.Array<any>, aThrowable: java.lang.Throwable): org.apache.logging.log4j.message.Message;
						public hashCode(): number;
						public getThrowable(): java.lang.Throwable;
						public constructor(messagePattern: string, objects1: native.Array<any>);
						public toString(): string;
						public constructor(locale: java.util.Locale, messagePattern: string, object2: any);
						public constructor(messagePattern: string, objects1: native.Array<any>, throwable: java.lang.Throwable);
						public constructor(messagePattern: string, object1: any);
						public equals(o: any): boolean;
						public getFormat(): string;
						public constructor(locale: java.util.Locale, messagePattern: string, objects2: native.Array<any>);
						public constructor(locale: java.util.Locale, messagePattern: string, object2: any, object3: any);
						public getParameters(): native.Array<any>;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module message {
					export class FormattedMessageFactory extends org.apache.logging.log4j.message.AbstractMessageFactory {
						public static class: java.lang.Class<org.apache.logging.log4j.message.FormattedMessageFactory>;
						public newMessage(message: string, params: native.Array<any>): org.apache.logging.log4j.message.Message;
						public constructor();
						public newMessage(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: string, p0: any, p1: any, p2: any, p3: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: string, p0: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: string): org.apache.logging.log4j.message.Message;
						public newMessage(message: string, p0: any, p1: any, p2: any, p3: any, p4: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: string, p0: any, p1: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: string, p0: any, p1: any, p2: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): org.apache.logging.log4j.message.Message;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module message {
					export class LocalizedMessage extends java.lang.Object implements org.apache.logging.log4j.message.Message, org.apache.logging.log4j.message.LoggerNameAwareMessage {
						public static class: java.lang.Class<org.apache.logging.log4j.message.LocalizedMessage>;
						public constructor(bundle: java.util.ResourceBundle, locale: java.util.Locale, key: string, objects3: native.Array<any>);
						public constructor(baseName: string, key: string, objects2: native.Array<any>);
						public setLoggerName(name: string): void;
						public getResourceBundle(rbBaseName: string, resourceBundleLocale: java.util.Locale, loop: boolean): java.util.ResourceBundle;
						public constructor(messagePattern: string, object1: any, object2: any);
						public constructor(locale: java.util.Locale, key: string, object2: any);
						public getThrowable(): java.lang.Throwable;
						public constructor(bundle: java.util.ResourceBundle, key: string, objects2: native.Array<any>);
						public getFormat(): string;
						public constructor(locale: java.util.Locale, key: string, object2: any, object3: any);
						public constructor(bundle: java.util.ResourceBundle, locale: java.util.Locale, key: string, object3: any, object4: any);
						public getFormattedMessage(): string;
						public constructor(baseName: string, key: string, object2: any, object3: any);
						public constructor(messagePattern: string, objects1: native.Array<any>);
						public constructor(bundle: java.util.ResourceBundle, key: string, object2: any, object3: any);
						public toString(): string;
						public constructor(bundle: java.util.ResourceBundle, key: string, object2: any);
						public constructor(bundle: java.util.ResourceBundle, key: string);
						public constructor(baseName: string, locale: java.util.Locale, key: string, object3: any, object4: any);
						public constructor(baseName: string, locale: java.util.Locale, key: string, object3: any);
						public constructor(baseName: string, locale: java.util.Locale, key: string, objects3: native.Array<any>);
						public constructor(messagePattern: string, object1: any);
						public constructor(baseName: string, key: string, object2: any);
						public constructor(bundle: java.util.ResourceBundle, locale: java.util.Locale, key: string, object3: any);
						public getLoggerName(): string;
						public getParameters(): native.Array<any>;
						public constructor(locale: java.util.Locale, key: string, objects2: native.Array<any>);
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module message {
					export class LocalizedMessageFactory extends org.apache.logging.log4j.message.AbstractMessageFactory {
						public static class: java.lang.Class<org.apache.logging.log4j.message.LocalizedMessageFactory>;
						public newMessage(key: string, params: native.Array<any>): org.apache.logging.log4j.message.Message;
						public getResourceBundle(): java.util.ResourceBundle;
						public constructor();
						public newMessage(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: string, p0: any, p1: any, p2: any, p3: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: string, p0: any): org.apache.logging.log4j.message.Message;
						public getBaseName(): string;
						public constructor(resourceBundle: java.util.ResourceBundle);
						public newMessage(message: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: string): org.apache.logging.log4j.message.Message;
						public newMessage(message: string, p0: any, p1: any, p2: any, p3: any, p4: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: string, p0: any, p1: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): org.apache.logging.log4j.message.Message;
						public newMessage(key: string): org.apache.logging.log4j.message.Message;
						public newMessage(message: string, p0: any, p1: any, p2: any): org.apache.logging.log4j.message.Message;
						public constructor(baseName: string);
						public newMessage(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): org.apache.logging.log4j.message.Message;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module message {
					export class LoggerNameAwareMessage extends java.lang.Object {
						public static class: java.lang.Class<org.apache.logging.log4j.message.LoggerNameAwareMessage>;
						/**
						 * Constructs a new instance of the org.apache.logging.log4j.message.LoggerNameAwareMessage interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							setLoggerName(string0: string): void;
							getLoggerName(): string;
						});
						public constructor();
						public setLoggerName(string0: string): void;
						public getLoggerName(): string;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module message {
					export class MapMessage<M, V>  extends org.apache.logging.log4j.util.MultiFormatStringBuilderFormattable {
						public static class: java.lang.Class<org.apache.logging.log4j.message.MapMessage<any,any>>;
						public containsKey(key: string): boolean;
						public putAll(map: java.util.Map<string,string>): void;
						public asXml(sb: java.lang.StringBuilder): void;
						public getIndexedReadOnlyStringMap(): org.apache.logging.log4j.util.IndexedReadOnlyStringMap;
						public equals(obj: any): boolean;
						public formatTo(formats: native.Array<string>, buffer: java.lang.StringBuilder): void;
						public forEach(action: org.apache.logging.log4j.util.BiConsumer<any,any>): void;
						public asJava(sb: java.lang.StringBuilder): void;
						public forEach(action: org.apache.logging.log4j.util.TriConsumer<any,any,any>, state: any): void;
						public hashCode(): number;
						public with(candidateKey: string, value: number): any;
						public getThrowable(): java.lang.Throwable;
						public asJson(sb: java.lang.StringBuilder): void;
						public validate(key: string, value: any): void;
						public with(candidateKey: string, value: any): any;
						public asString(format: string): string;
						public constructor(initialCapacity: number);
						public with(candidateKey: string, value: boolean): any;
						public toKey(candidateKey: string): string;
						public getFormat(): string;
						public equals(o: any): boolean;
						public newInstance(map: java.util.Map<string,any>): any;
						public appendMap(sb: java.lang.StringBuilder): void;
						public remove(key: string): string;
						public constructor();
						public with(candidateKey: string, value: string): any;
						public getFormattedMessage(): string;
						public getFormats(): native.Array<string>;
						public put(candidateKey: string, value: string): void;
						public toString(): string;
						public asJavaUnquoted(sb: java.lang.StringBuilder): void;
						public formatTo(buffer: java.lang.StringBuilder): void;
						public get(key: string): string;
						public validate(key: string, value: number): void;
						public getFormattedMessage(formats: native.Array<string>): string;
						public constructor(map: java.util.Map<string,any>);
						public validate(key: string, value: string): void;
						public asString(): string;
						public clear(): void;
						public validate(key: string, value: boolean): void;
						public getData(): java.util.Map<string,any>;
						public getParameters(): native.Array<any>;
					}
					export module MapMessage {
						export class MapFormat {
							public static class: java.lang.Class<org.apache.logging.log4j.message.MapMessage.MapFormat>;
							public static XML: org.apache.logging.log4j.message.MapMessage.MapFormat;
							public static JSON: org.apache.logging.log4j.message.MapMessage.MapFormat;
							public static JAVA: org.apache.logging.log4j.message.MapMessage.MapFormat;
							public static JAVA_UNQUOTED: org.apache.logging.log4j.message.MapMessage.MapFormat;
							public static lookupIgnoreCase(format: string): org.apache.logging.log4j.message.MapMessage.MapFormat;
							public static names(): native.Array<string>;
							public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
							public static valueOf(name: string): org.apache.logging.log4j.message.MapMessage.MapFormat;
							public static values(): native.Array<org.apache.logging.log4j.message.MapMessage.MapFormat>;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module message {
					export class MapMessageJsonFormatter {
						public static class: java.lang.Class<org.apache.logging.log4j.message.MapMessageJsonFormatter>;
						public static MAX_DEPTH: number;
						public static values(): native.Array<org.apache.logging.log4j.message.MapMessageJsonFormatter>;
						public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
						public static valueOf(name: string): org.apache.logging.log4j.message.MapMessageJsonFormatter;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module message {
					export class Message extends java.lang.Object implements java.io.Serializable {
						public static class: java.lang.Class<org.apache.logging.log4j.message.Message>;
						/**
						 * Constructs a new instance of the org.apache.logging.log4j.message.Message interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getFormattedMessage(): string;
							getFormat(): string;
							getParameters(): native.Array<any>;
							getThrowable(): java.lang.Throwable;
						});
						public constructor();
						public getFormattedMessage(): string;
						public getThrowable(): java.lang.Throwable;
						public getFormat(): string;
						public getParameters(): native.Array<any>;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module message {
					export class MessageCollectionMessage<T>  extends java.lang.Object {
						public static class: java.lang.Class<org.apache.logging.log4j.message.MessageCollectionMessage<any>>;
						/**
						 * Constructs a new instance of the org.apache.logging.log4j.message.MessageCollectionMessage<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getFormattedMessage(): string;
							getFormat(): string;
							getParameters(): native.Array<any>;
							getThrowable(): java.lang.Throwable;
							iterator(): java.util.Iterator<T>;
							forEach(action: any /* any*/): void;
							spliterator(): java.util.Spliterator<T>;
						});
						public constructor();
						public spliterator(): java.util.Spliterator<T>;
						public getFormattedMessage(): string;
						public iterator(): java.util.Iterator<T>;
						public getThrowable(): java.lang.Throwable;
						public getFormat(): string;
						public forEach(action: any /* any*/): void;
						public getParameters(): native.Array<any>;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module message {
					export class MessageFactory extends java.lang.Object {
						public static class: java.lang.Class<org.apache.logging.log4j.message.MessageFactory>;
						/**
						 * Constructs a new instance of the org.apache.logging.log4j.message.MessageFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							newMessage(object0: any): org.apache.logging.log4j.message.Message;
							newMessage(string0: string): org.apache.logging.log4j.message.Message;
							newMessage(string0: string, objects1: native.Array<any>): org.apache.logging.log4j.message.Message;
						});
						public constructor();
						public newMessage(string0: string, objects1: native.Array<any>): org.apache.logging.log4j.message.Message;
						public newMessage(string0: string): org.apache.logging.log4j.message.Message;
						public newMessage(object0: any): org.apache.logging.log4j.message.Message;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module message {
					export class MessageFactory2 extends java.lang.Object implements org.apache.logging.log4j.message.MessageFactory {
						public static class: java.lang.Class<org.apache.logging.log4j.message.MessageFactory2>;
						/**
						 * Constructs a new instance of the org.apache.logging.log4j.message.MessageFactory2 interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							newMessage(charSequence0: string): org.apache.logging.log4j.message.Message;
							newMessage(string0: string, object1: any): org.apache.logging.log4j.message.Message;
							newMessage(string0: string, object1: any, object2: any): org.apache.logging.log4j.message.Message;
							newMessage(string0: string, object1: any, object2: any, object3: any): org.apache.logging.log4j.message.Message;
							newMessage(string0: string, object1: any, object2: any, object3: any, object4: any): org.apache.logging.log4j.message.Message;
							newMessage(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any): org.apache.logging.log4j.message.Message;
							newMessage(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any): org.apache.logging.log4j.message.Message;
							newMessage(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any): org.apache.logging.log4j.message.Message;
							newMessage(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any): org.apache.logging.log4j.message.Message;
							newMessage(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any): org.apache.logging.log4j.message.Message;
							newMessage(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any): org.apache.logging.log4j.message.Message;
							newMessage(object0: any): org.apache.logging.log4j.message.Message;
							newMessage(string0: string): org.apache.logging.log4j.message.Message;
							newMessage(string0: string, objects1: native.Array<any>): org.apache.logging.log4j.message.Message;
						});
						public constructor();
						public newMessage(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any): org.apache.logging.log4j.message.Message;
						public newMessage(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any): org.apache.logging.log4j.message.Message;
						public newMessage(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any): org.apache.logging.log4j.message.Message;
						public newMessage(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any): org.apache.logging.log4j.message.Message;
						public newMessage(string0: string, objects1: native.Array<any>): org.apache.logging.log4j.message.Message;
						public newMessage(charSequence0: string): org.apache.logging.log4j.message.Message;
						public newMessage(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any): org.apache.logging.log4j.message.Message;
						public newMessage(object0: any): org.apache.logging.log4j.message.Message;
						public newMessage(string0: string, object1: any, object2: any, object3: any): org.apache.logging.log4j.message.Message;
						public newMessage(string0: string, object1: any, object2: any, object3: any, object4: any): org.apache.logging.log4j.message.Message;
						public newMessage(string0: string, object1: any, object2: any): org.apache.logging.log4j.message.Message;
						public newMessage(string0: string, object1: any): org.apache.logging.log4j.message.Message;
						public newMessage(string0: string): org.apache.logging.log4j.message.Message;
						public newMessage(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any): org.apache.logging.log4j.message.Message;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module message {
					export class MessageFormatMessage extends java.lang.Object implements org.apache.logging.log4j.message.Message {
						public static class: java.lang.Class<org.apache.logging.log4j.message.MessageFormatMessage>;
						public constructor(messagePattern: string, parameters: native.Array<any>);
						public formatMessage(msgPattern: string, objects1: native.Array<any>): string;
						public equals(obj: any): boolean;
						public getFormattedMessage(): string;
						public hashCode(): number;
						public constructor(locale: java.util.Locale, messagePattern: string, parameters: native.Array<any>);
						public getThrowable(): java.lang.Throwable;
						public getFormat(): string;
						public equals(o: any): boolean;
						public getParameters(): native.Array<any>;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module message {
					export class MessageFormatMessageFactory extends org.apache.logging.log4j.message.AbstractMessageFactory {
						public static class: java.lang.Class<org.apache.logging.log4j.message.MessageFormatMessageFactory>;
						public newMessage(message: string, params: native.Array<any>): org.apache.logging.log4j.message.Message;
						public constructor();
						public newMessage(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: string, p0: any, p1: any, p2: any, p3: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: string, p0: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: string): org.apache.logging.log4j.message.Message;
						public newMessage(message: string, p0: any, p1: any, p2: any, p3: any, p4: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: string, p0: any, p1: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: string, p0: any, p1: any, p2: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): org.apache.logging.log4j.message.Message;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module message {
					export class MultiformatMessage extends java.lang.Object implements org.apache.logging.log4j.message.Message {
						public static class: java.lang.Class<org.apache.logging.log4j.message.MultiformatMessage>;
						/**
						 * Constructs a new instance of the org.apache.logging.log4j.message.MultiformatMessage interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getFormattedMessage(strings0: native.Array<string>): string;
							getFormats(): native.Array<string>;
							getFormattedMessage(): string;
							getFormat(): string;
							getParameters(): native.Array<any>;
							getThrowable(): java.lang.Throwable;
						});
						public constructor();
						public getFormattedMessage(strings0: native.Array<string>): string;
						public getFormattedMessage(): string;
						public getThrowable(): java.lang.Throwable;
						public getFormat(): string;
						public getFormats(): native.Array<string>;
						public getParameters(): native.Array<any>;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module message {
					export class ObjectArrayMessage extends java.lang.Object implements org.apache.logging.log4j.message.Message {
						public static class: java.lang.Class<org.apache.logging.log4j.message.ObjectArrayMessage>;
						public equals(obj: any): boolean;
						public getFormattedMessage(): string;
						public constructor(obj: native.Array<any>);
						public hashCode(): number;
						public getThrowable(): java.lang.Throwable;
						public equals(o: any): boolean;
						public getFormat(): string;
						public getParameters(): native.Array<any>;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module message {
					export class ObjectMessage extends java.lang.Object implements org.apache.logging.log4j.message.Message, org.apache.logging.log4j.util.StringBuilderFormattable {
						public static class: java.lang.Class<org.apache.logging.log4j.message.ObjectMessage>;
						public constructor(obj: any);
						public equals(obj: any): boolean;
						public getParameter(): any;
						public getFormattedMessage(): string;
						public hashCode(): number;
						public getThrowable(): java.lang.Throwable;
						public getFormat(): string;
						public equals(o: any): boolean;
						public getParameters(): native.Array<any>;
						public toString(): string;
						public formatTo(buffer: java.lang.StringBuilder): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module message {
					export class ParameterConsumer<S>  extends java.lang.Object {
						public static class: java.lang.Class<org.apache.logging.log4j.message.ParameterConsumer<any>>;
						/**
						 * Constructs a new instance of the org.apache.logging.log4j.message.ParameterConsumer<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							accept(object0: any, int1: number, object2: S): void;
						});
						public constructor();
						public accept(object0: any, int1: number, object2: S): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module message {
					export class ParameterFormatter extends java.lang.Object {
						public static class: java.lang.Class<org.apache.logging.log4j.message.ParameterFormatter>;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module message {
					export class ParameterVisitable extends java.lang.Object {
						public static class: java.lang.Class<org.apache.logging.log4j.message.ParameterVisitable>;
						/**
						 * Constructs a new instance of the org.apache.logging.log4j.message.ParameterVisitable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							forEachParameter(parameterConsumer0: org.apache.logging.log4j.message.ParameterConsumer<any>, object1: any): void;
						});
						public constructor();
						public forEachParameter(parameterConsumer0: org.apache.logging.log4j.message.ParameterConsumer<any>, object1: any): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module message {
					export class ParameterizedMessage extends java.lang.Object implements org.apache.logging.log4j.message.Message, org.apache.logging.log4j.util.StringBuilderFormattable {
						public static class: java.lang.Class<org.apache.logging.log4j.message.ParameterizedMessage>;
						public static RECURSION_PREFIX: string;
						public static RECURSION_SUFFIX: string;
						public static ERROR_PREFIX: string;
						public static ERROR_SEPARATOR: string;
						public static ERROR_MSG_SEPARATOR: string;
						public static ERROR_SUFFIX: string;
						public static format(messagePattern: string, objects1: native.Array<any>): string;
						public equals(obj: any): boolean;
						public getFormattedMessage(): string;
						public static deepToString(o: any): string;
						public constructor(messagePattern: string, object1: any, object2: any);
						public hashCode(): number;
						public getThrowable(): java.lang.Throwable;
						public static countArgumentPlaceholders(messagePattern: string): number;
						public constructor(messagePattern: string, objects1: native.Array<any>);
						public static identityToString(obj: any): string;
						public toString(): string;
						public formatTo(buffer: java.lang.StringBuilder): void;
						public constructor(messagePattern: string, objects1: native.Array<any>, throwable: java.lang.Throwable);
						public constructor(messagePattern: string, object1: any);
						public getFormat(): string;
						public equals(o: any): boolean;
						/** @deprecated */
						public constructor(messagePattern: string, strings1: native.Array<string>, throwable: java.lang.Throwable);
						public getParameters(): native.Array<any>;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module message {
					export class ParameterizedMessageFactory extends org.apache.logging.log4j.message.AbstractMessageFactory {
						public static class: java.lang.Class<org.apache.logging.log4j.message.ParameterizedMessageFactory>;
						public static INSTANCE: org.apache.logging.log4j.message.ParameterizedMessageFactory;
						public newMessage(message: string, params: native.Array<any>): org.apache.logging.log4j.message.Message;
						public constructor();
						public newMessage(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: string, p0: any, p1: any, p2: any, p3: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: string, p0: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: string): org.apache.logging.log4j.message.Message;
						public newMessage(message: string, p0: any, p1: any, p2: any, p3: any, p4: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: string, p0: any, p1: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: string, p0: any, p1: any, p2: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): org.apache.logging.log4j.message.Message;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module message {
					export class ParameterizedNoReferenceMessageFactory extends org.apache.logging.log4j.message.AbstractMessageFactory {
						public static class: java.lang.Class<org.apache.logging.log4j.message.ParameterizedNoReferenceMessageFactory>;
						public static INSTANCE: org.apache.logging.log4j.message.ParameterizedNoReferenceMessageFactory;
						public newMessage(message: string, params: native.Array<any>): org.apache.logging.log4j.message.Message;
						public constructor();
						public newMessage(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: string, p0: any, p1: any, p2: any, p3: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: string, p0: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: string): org.apache.logging.log4j.message.Message;
						public newMessage(message: string, p0: any, p1: any, p2: any, p3: any, p4: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: string, p0: any, p1: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: string, p0: any, p1: any, p2: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): org.apache.logging.log4j.message.Message;
					}
					export module ParameterizedNoReferenceMessageFactory {
						export class StatusMessage extends java.lang.Object implements org.apache.logging.log4j.message.Message {
							public static class: java.lang.Class<org.apache.logging.log4j.message.ParameterizedNoReferenceMessageFactory.StatusMessage>;
							public getFormat(): string;
							public getThrowable(): java.lang.Throwable;
							public getFormattedMessage(): string;
							public constructor(formattedMessage: string, throwable: java.lang.Throwable);
							public getParameters(): native.Array<any>;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module message {
					export class ReusableMessage extends java.lang.Object implements org.apache.logging.log4j.message.Message, org.apache.logging.log4j.util.StringBuilderFormattable {
						public static class: java.lang.Class<org.apache.logging.log4j.message.ReusableMessage>;
						/**
						 * Constructs a new instance of the org.apache.logging.log4j.message.ReusableMessage interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							swapParameters(objects0: native.Array<any>): native.Array<any>;
							getParameterCount(): number;
							memento(): org.apache.logging.log4j.message.Message;
							getFormattedMessage(): string;
							getFormat(): string;
							getParameters(): native.Array<any>;
							getThrowable(): java.lang.Throwable;
							formatTo(stringBuilder0: java.lang.StringBuilder): void;
						});
						public constructor();
						public formatTo(stringBuilder0: java.lang.StringBuilder): void;
						public getFormattedMessage(): string;
						public getThrowable(): java.lang.Throwable;
						public memento(): org.apache.logging.log4j.message.Message;
						public getFormat(): string;
						public getParameterCount(): number;
						public getParameters(): native.Array<any>;
						public swapParameters(objects0: native.Array<any>): native.Array<any>;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module message {
					export class ReusableMessageFactory extends java.lang.Object implements org.apache.logging.log4j.message.MessageFactory2, java.io.Serializable {
						public static class: java.lang.Class<org.apache.logging.log4j.message.ReusableMessageFactory>;
						public static INSTANCE: org.apache.logging.log4j.message.ReusableMessageFactory;
						public newMessage(message: string, params: native.Array<any>): org.apache.logging.log4j.message.Message;
						public constructor();
						public newMessage(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: string, p0: any, p1: any, p2: any, p3: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: string, p0: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: any): org.apache.logging.log4j.message.Message;
						public static release(message: org.apache.logging.log4j.message.Message): void;
						public newMessage(message: string): org.apache.logging.log4j.message.Message;
						public newMessage(charSequence: string): org.apache.logging.log4j.message.Message;
						public newMessage(message: string, p0: any, p1: any, p2: any, p3: any, p4: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: string, p0: any, p1: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: string, p0: any, p1: any, p2: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): org.apache.logging.log4j.message.Message;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module message {
					export class ReusableObjectMessage extends java.lang.Object implements org.apache.logging.log4j.message.ReusableMessage, org.apache.logging.log4j.message.ParameterVisitable, org.apache.logging.log4j.message.Clearable {
						public static class: java.lang.Class<org.apache.logging.log4j.message.ReusableObjectMessage>;
						public forEachParameter(action: org.apache.logging.log4j.message.ParameterConsumer<any>, state: any): void;
						public constructor();
						public getParameter(): any;
						public getFormattedMessage(): string;
						public getThrowable(): java.lang.Throwable;
						public set(object: any): void;
						public toString(): string;
						public getParameterCount(): number;
						public formatTo(buffer: java.lang.StringBuilder): void;
						public swapParameters(emptyReplacement: native.Array<any>): native.Array<any>;
						public clear(): void;
						public getFormat(): string;
						public memento(): org.apache.logging.log4j.message.Message;
						public getParameters(): native.Array<any>;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module message {
					export class ReusableParameterizedMessage extends java.lang.Object implements org.apache.logging.log4j.message.ReusableMessage, org.apache.logging.log4j.message.ParameterVisitable, org.apache.logging.log4j.message.Clearable {
						public static class: java.lang.Class<org.apache.logging.log4j.message.ReusableParameterizedMessage>;
						public forEachParameter(action: org.apache.logging.log4j.message.ParameterConsumer<any>, state: any): void;
						public constructor();
						public getFormattedMessage(): string;
						public getThrowable(): java.lang.Throwable;
						public swapParameters(emptyReplacement: native.Array<any>): native.Array<any>;
						public clear(): void;
						public memento(): org.apache.logging.log4j.message.Message;
						public getFormat(): string;
						public formatTo(builder: java.lang.StringBuilder): void;
						public getParameterCount(): number;
						public getParameters(): native.Array<any>;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module message {
					export class ReusableSimpleMessage extends java.lang.Object implements org.apache.logging.log4j.message.ReusableMessage, java.lang.CharSequence, org.apache.logging.log4j.message.ParameterVisitable, org.apache.logging.log4j.message.Clearable {
						public static class: java.lang.Class<org.apache.logging.log4j.message.ReusableSimpleMessage>;
						public forEachParameter(action: org.apache.logging.log4j.message.ParameterConsumer<any>, state: any): void;
						public constructor();
						public set(message: string): void;
						public set(charSequence: string): void;
						public codePoints(): java.util.stream.IntStream;
						public length(): number;
						public getFormattedMessage(): string;
						public subSequence(start: number, end: number): string;
						public getThrowable(): java.lang.Throwable;
						public getParameterCount(): number;
						public toString(): string;
						public formatTo(buffer: java.lang.StringBuilder): void;
						public chars(): java.util.stream.IntStream;
						public swapParameters(emptyReplacement: native.Array<any>): native.Array<any>;
						public clear(): void;
						public getFormat(): string;
						public memento(): org.apache.logging.log4j.message.Message;
						public getParameters(): native.Array<any>;
						public charAt(index: number): string;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module message {
					export class SimpleMessage extends java.lang.Object implements org.apache.logging.log4j.message.Message, org.apache.logging.log4j.util.StringBuilderFormattable, java.lang.CharSequence {
						public static class: java.lang.Class<org.apache.logging.log4j.message.SimpleMessage>;
						public constructor();
						public equals(obj: any): boolean;
						public codePoints(): java.util.stream.IntStream;
						public length(): number;
						public getFormattedMessage(): string;
						public subSequence(start: number, end: number): string;
						public hashCode(): number;
						public getThrowable(): java.lang.Throwable;
						public constructor(charSequence: string);
						public toString(): string;
						public formatTo(buffer: java.lang.StringBuilder): void;
						public chars(): java.util.stream.IntStream;
						public constructor(message: string);
						public getFormat(): string;
						public equals(o: any): boolean;
						public getParameters(): native.Array<any>;
						public charAt(index: number): string;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module message {
					export class SimpleMessageFactory extends org.apache.logging.log4j.message.AbstractMessageFactory {
						public static class: java.lang.Class<org.apache.logging.log4j.message.SimpleMessageFactory>;
						public static INSTANCE: org.apache.logging.log4j.message.SimpleMessageFactory;
						public newMessage(message: string, params: native.Array<any>): org.apache.logging.log4j.message.Message;
						public constructor();
						public newMessage(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: string, p0: any, p1: any, p2: any, p3: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: string, p0: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: string): org.apache.logging.log4j.message.Message;
						public newMessage(message: string, p0: any, p1: any, p2: any, p3: any, p4: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: string, p0: any, p1: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: string, p0: any, p1: any, p2: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): org.apache.logging.log4j.message.Message;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module message {
					export class StringFormattedMessage extends java.lang.Object implements org.apache.logging.log4j.message.Message {
						public static class: java.lang.Class<org.apache.logging.log4j.message.StringFormattedMessage>;
						public formatMessage(msgPattern: string, objects1: native.Array<any>): string;
						public equals(obj: any): boolean;
						public getFormattedMessage(): string;
						public hashCode(): number;
						public getThrowable(): java.lang.Throwable;
						public constructor(messagePattern: string, objects1: native.Array<any>);
						public getFormat(): string;
						public equals(o: any): boolean;
						public constructor(locale: java.util.Locale, messagePattern: string, objects2: native.Array<any>);
						public getParameters(): native.Array<any>;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module message {
					export class StringFormatterMessageFactory extends org.apache.logging.log4j.message.AbstractMessageFactory {
						public static class: java.lang.Class<org.apache.logging.log4j.message.StringFormatterMessageFactory>;
						public static INSTANCE: org.apache.logging.log4j.message.StringFormatterMessageFactory;
						public newMessage(message: string, params: native.Array<any>): org.apache.logging.log4j.message.Message;
						public constructor();
						public newMessage(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: string, p0: any, p1: any, p2: any, p3: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: string, p0: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: string): org.apache.logging.log4j.message.Message;
						public newMessage(message: string, p0: any, p1: any, p2: any, p3: any, p4: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: string, p0: any, p1: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: string, p0: any, p1: any, p2: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): org.apache.logging.log4j.message.Message;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module message {
					export class StringMapMessage extends org.apache.logging.log4j.message.MapMessage<org.apache.logging.log4j.message.StringMapMessage,string> {
						public static class: java.lang.Class<org.apache.logging.log4j.message.StringMapMessage>;
						public constructor();
						public formatTo(formats: native.Array<string>, buffer: java.lang.StringBuilder): void;
						public constructor(initialCapacity: number);
						public constructor(map: java.util.Map<string,any>);
						public constructor(map: java.util.Map<string,string>);
						public newInstance(map: java.util.Map<string,string>): org.apache.logging.log4j.message.StringMapMessage;
						public newInstance(map: java.util.Map<string,any>): any;
						public formatTo(buffer: java.lang.StringBuilder): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module message {
					export class StructuredDataCollectionMessage extends java.lang.Object {
						public static class: java.lang.Class<org.apache.logging.log4j.message.StructuredDataCollectionMessage>;
						public iterator(): java.util.Iterator<any>;
						public constructor(messages: java.util.List<org.apache.logging.log4j.message.StructuredDataMessage>);
						public getFormattedMessage(): string;
						public spliterator(): java.util.Spliterator<any>;
						public iterator(): java.util.Iterator<org.apache.logging.log4j.message.StructuredDataMessage>;
						public getThrowable(): java.lang.Throwable;
						public getFormat(): string;
						public forEach(action: any /* any*/): void;
						public getParameters(): native.Array<any>;
						public formatTo(buffer: java.lang.StringBuilder): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module message {
					export class StructuredDataId extends java.lang.Object implements java.io.Serializable, org.apache.logging.log4j.util.StringBuilderFormattable {
						public static class: java.lang.Class<org.apache.logging.log4j.message.StructuredDataId>;
						public static TIME_QUALITY: org.apache.logging.log4j.message.StructuredDataId;
						public static ORIGIN: org.apache.logging.log4j.message.StructuredDataId;
						public static META: org.apache.logging.log4j.message.StructuredDataId;
						public static RESERVED: number;
						public constructor(name: string, required: native.Array<string>, optional: native.Array<string>);
						public getOptional(): native.Array<string>;
						public isReserved(): boolean;
						public getName(): string;
						public toString(): string;
						public makeId(id: org.apache.logging.log4j.message.StructuredDataId): org.apache.logging.log4j.message.StructuredDataId;
						public formatTo(buffer: java.lang.StringBuilder): void;
						public constructor(name: string);
						public constructor(name: string, enterpriseNumber: number, required: native.Array<string>, optional: native.Array<string>);
						public constructor(name: string, required: native.Array<string>, optional: native.Array<string>, maxLength: number);
						public getRequired(): native.Array<string>;
						public makeId(defaultId: string, anEnterpriseNumber: number): org.apache.logging.log4j.message.StructuredDataId;
						public constructor(name: string, enterpriseNumber: number, required: native.Array<string>, optional: native.Array<string>, maxLength: number);
						public getEnterpriseNumber(): number;
						public constructor(name: string, maxLength: number);
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module message {
					export class StructuredDataMessage extends org.apache.logging.log4j.message.MapMessage<org.apache.logging.log4j.message.StructuredDataMessage,string> {
						public static class: java.lang.Class<org.apache.logging.log4j.message.StructuredDataMessage>;
						public constructor(id: string, msg: string, type: string);
						public validateKey(key: string): void;
						public formatTo(formats: native.Array<string>, buffer: java.lang.StringBuilder): void;
						public getId(): org.apache.logging.log4j.message.StructuredDataId;
						public setType(type: string): void;
						public getType(): string;
						public constructor(id: string, msg: string, type: string, data: java.util.Map<string,string>, maxLength: number);
						public hashCode(): number;
						public validate(key: string, value: any): void;
						public asString(format: string): string;
						public setId(id: org.apache.logging.log4j.message.StructuredDataId): void;
						public constructor(initialCapacity: number);
						public constructor(id: string, msg: string, type: string, data: java.util.Map<string,string>);
						public getFormat(): string;
						public equals(o: any): boolean;
						public newInstance(map: java.util.Map<string,any>): any;
						public constructor();
						public asString(format: org.apache.logging.log4j.message.StructuredDataMessage.Format, structuredDataId: org.apache.logging.log4j.message.StructuredDataId): string;
						public getFormattedMessage(): string;
						public constructor(id: org.apache.logging.log4j.message.StructuredDataId, msg: string, type: string, maxLength: number);
						public constructor(id: org.apache.logging.log4j.message.StructuredDataId, msg: string, type: string, data: java.util.Map<string,string>);
						public getFormats(): native.Array<string>;
						public toString(): string;
						public setId(id: string): void;
						public formatTo(buffer: java.lang.StringBuilder): void;
						public validate(key: string, value: number): void;
						public getFormattedMessage(formats: native.Array<string>): string;
						public constructor(map: java.util.Map<string,any>);
						public setMessageFormat(msg: string): void;
						public validate(key: string, value: string): void;
						public asString(): string;
						public constructor(id: org.apache.logging.log4j.message.StructuredDataId, msg: string, type: string, data: java.util.Map<string,string>, maxLength: number);
						public validate(key: string, value: boolean): void;
						public constructor(id: org.apache.logging.log4j.message.StructuredDataId, msg: string, type: string);
						public constructor(id: string, msg: string, type: string, maxLength: number);
						public asString(format: org.apache.logging.log4j.message.StructuredDataMessage.Format, structuredDataId: org.apache.logging.log4j.message.StructuredDataId, sb: java.lang.StringBuilder): void;
						public newInstance(map: java.util.Map<string,string>): org.apache.logging.log4j.message.StructuredDataMessage;
					}
					export module StructuredDataMessage {
						export class Format {
							public static class: java.lang.Class<org.apache.logging.log4j.message.StructuredDataMessage.Format>;
							public static XML: org.apache.logging.log4j.message.StructuredDataMessage.Format;
							public static FULL: org.apache.logging.log4j.message.StructuredDataMessage.Format;
							public static values(): native.Array<org.apache.logging.log4j.message.StructuredDataMessage.Format>;
							public static valueOf(name: string): org.apache.logging.log4j.message.StructuredDataMessage.Format;
							public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module message {
					export class ThreadDumpMessage extends java.lang.Object implements org.apache.logging.log4j.message.Message, org.apache.logging.log4j.util.StringBuilderFormattable {
						public static class: java.lang.Class<org.apache.logging.log4j.message.ThreadDumpMessage>;
						public formatTo(sb: java.lang.StringBuilder): void;
						public getFormattedMessage(): string;
						public writeReplace(): any;
						public getThrowable(): java.lang.Throwable;
						public getFormat(): string;
						public constructor(title: string);
						public toString(): string;
						public getParameters(): native.Array<any>;
					}
					export module ThreadDumpMessage {
						export class BasicThreadInfoFactory extends java.lang.Object implements org.apache.logging.log4j.message.ThreadDumpMessage.ThreadInfoFactory {
							public static class: java.lang.Class<org.apache.logging.log4j.message.ThreadDumpMessage.BasicThreadInfoFactory>;
							public createThreadInfo(): java.util.Map<org.apache.logging.log4j.message.ThreadInformation,native.Array<java.lang.StackTraceElement>>;
						}
						export class ThreadDumpMessageProxy extends java.lang.Object implements java.io.Serializable {
							public static class: java.lang.Class<org.apache.logging.log4j.message.ThreadDumpMessage.ThreadDumpMessageProxy>;
							public readResolve(): any;
						}
						export class ThreadInfoFactory extends java.lang.Object {
							public static class: java.lang.Class<org.apache.logging.log4j.message.ThreadDumpMessage.ThreadInfoFactory>;
							/**
							 * Constructs a new instance of the org.apache.logging.log4j.message.ThreadDumpMessage() when extending the interface class.
							 */
							public constructor(implementation: {
								createThreadInfo(): java.util.Map<org.apache.logging.log4j.message.ThreadInformation,native.Array<java.lang.StackTraceElement>>;
							});
							public constructor();
							public createThreadInfo(): java.util.Map<org.apache.logging.log4j.message.ThreadInformation,native.Array<java.lang.StackTraceElement>>;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module message {
					export class ThreadInformation extends java.lang.Object {
						public static class: java.lang.Class<org.apache.logging.log4j.message.ThreadInformation>;
						/**
						 * Constructs a new instance of the org.apache.logging.log4j.message.ThreadInformation interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							printThreadInfo(stringBuilder0: java.lang.StringBuilder): void;
							printStack(stringBuilder0: java.lang.StringBuilder, stackTraceElements1: native.Array<java.lang.StackTraceElement>): void;
						});
						public constructor();
						public printStack(stringBuilder0: java.lang.StringBuilder, stackTraceElements1: native.Array<java.lang.StackTraceElement>): void;
						public printThreadInfo(stringBuilder0: java.lang.StringBuilder): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module message {
					export class TimestampMessage extends java.lang.Object {
						public static class: java.lang.Class<org.apache.logging.log4j.message.TimestampMessage>;
						/**
						 * Constructs a new instance of the org.apache.logging.log4j.message.TimestampMessage interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getTimestamp(): number;
						});
						public constructor();
						public getTimestamp(): number;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module simple {
					export class SimpleLogger extends org.apache.logging.log4j.spi.AbstractLogger {
						public static class: java.lang.Class<org.apache.logging.log4j.simple.SimpleLogger>;
						public logMessage(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, msgSupplier: org.apache.logging.log4j.util.Supplier<any>, t: java.lang.Throwable): void;
						public logIfEnabled(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any): void;
						public constructor(name: string, messageFactory: org.apache.logging.log4j.message.MessageFactory);
						public setLevel(level: org.apache.logging.log4j.Level): void;
						public setStream(stream: java.io.PrintStream): void;
						public logMessage(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void;
						public logMessage(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string): void;
						public logMessage(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void;
						public logIfEnabled(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void;
						public isEnabled(level: org.apache.logging.log4j.Level): boolean;
						public logMessage(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void;
						public logMessage(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void;
						public logMessage(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any): void;
						public logMessage(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void;
						public isEnabled(testLevel: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, msg: org.apache.logging.log4j.message.Message, t: java.lang.Throwable): boolean;
						public logIfEnabled(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void;
						public isEnabled(testLevel: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, msg: string): boolean;
						public isEnabled(testLevel: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): boolean;
						public constructor();
						public isEnabled(testLevel: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, msg: string, t: java.lang.Throwable): boolean;
						public isEnabled(testLevel: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any): boolean;
						public logIfEnabled(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, msgSupplier: org.apache.logging.log4j.util.MessageSupplier, t: java.lang.Throwable): void;
						public isEnabled(testLevel: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any): boolean;
						public isEnabled(testLevel: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any): boolean;
						public isEnabled(testLevel: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): boolean;
						public logMessage(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any): void;
						public logMessage(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, params: native.Array<any>): void;
						public logIfEnabled(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string): void;
						public getLevel(): org.apache.logging.log4j.Level;
						public logIfEnabled(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any): void;
						public isEnabled(testLevel: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any): boolean;
						public logIfEnabled(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void;
						public logMessage(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, t: java.lang.Throwable): void;
						public isEnabled(testLevel: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): boolean;
						public logIfEnabled(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void;
						public constructor(name: string, defaultLevel: org.apache.logging.log4j.Level, showLogName: boolean, showShortLogName: boolean, showDateTime: boolean, showContextMap: boolean, dateTimeFormat: string, messageFactory: org.apache.logging.log4j.message.MessageFactory, props: org.apache.logging.log4j.util.PropertiesUtil, stream: java.io.PrintStream);
						public logMessage(fqcn: string, mgsLevel: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, msg: org.apache.logging.log4j.message.Message, throwable: java.lang.Throwable): void;
						public logMessage(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: any, t: java.lang.Throwable): void;
						public logMessage(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, msgSupplier: org.apache.logging.log4j.util.MessageSupplier, t: java.lang.Throwable): void;
						public logIfEnabled(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any): void;
						public logMessage(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any): void;
						public isEnabled(testLevel: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): boolean;
						public logMessage(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void;
						public logIfEnabled(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void;
						public logIfEnabled(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any): void;
						public isEnabled(testLevel: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any): boolean;
						public logIfEnabled(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, msg: org.apache.logging.log4j.message.Message, t: java.lang.Throwable): void;
						public logIfEnabled(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void;
						public logIfEnabled(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, paramSuppliers: native.Array<org.apache.logging.log4j.util.Supplier<any>>): void;
						public logMessage(level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, fqcn: string, location: java.lang.StackTraceElement, message: org.apache.logging.log4j.message.Message, throwable: java.lang.Throwable): void;
						public logIfEnabled(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, msgSupplier: org.apache.logging.log4j.util.Supplier<any>, t: java.lang.Throwable): void;
						public logIfEnabled(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, params: native.Array<any>): void;
						public isEnabled(testLevel: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): boolean;
						public logMessage(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, paramSuppliers: native.Array<org.apache.logging.log4j.util.Supplier<any>>): void;
						public logMessage(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any): void;
						public isEnabled(testLevel: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, msg: any, t: java.lang.Throwable): boolean;
						public constructor(name: string);
						public logIfEnabled(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, t: java.lang.Throwable): void;
						public isEnabled(level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker): boolean;
						public logIfEnabled(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: any, t: java.lang.Throwable): void;
						public isEnabled(testLevel: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, msg: string, p1: native.Array<any>): boolean;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module simple {
					export class SimpleLoggerContext extends java.lang.Object implements org.apache.logging.log4j.spi.LoggerContext {
						public static class: java.lang.Class<org.apache.logging.log4j.simple.SimpleLoggerContext>;
						public static DEFAULT_DATE_TIME_FORMAT: string;
						public static SYSTEM_PREFIX: string;
						public constructor();
						public putObject(key: string, value: any): any;
						public hasLogger(name: string): boolean;
						public getObject(key: string): any;
						public getLogger(name: string, messageFactory: org.apache.logging.log4j.message.MessageFactory): org.apache.logging.log4j.spi.ExtendedLogger;
						public hasLogger(name: string, messageFactory: org.apache.logging.log4j.message.MessageFactory): boolean;
						public putObjectIfAbsent(key: string, value: any): any;
						public getExternalContext(): any;
						public removeObject(key: string, value: any): boolean;
						public getLogger(name: string): org.apache.logging.log4j.spi.ExtendedLogger;
						public removeObject(key: string): any;
						public hasLogger(name: string, messageFactoryClass: java.lang.Class<any>): boolean;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module simple {
					export class SimpleLoggerContextFactory extends java.lang.Object implements org.apache.logging.log4j.spi.LoggerContextFactory {
						public static class: java.lang.Class<org.apache.logging.log4j.simple.SimpleLoggerContextFactory>;
						public constructor();
						public hasContext(fqcn: string, loader: java.lang.ClassLoader, currentContext: boolean): boolean;
						public shutdown(fqcn: string, loader: java.lang.ClassLoader, currentContext: boolean, allContexts: boolean): void;
						public removeContext(removeContext: org.apache.logging.log4j.spi.LoggerContext): void;
						public getContext(fqcn: string, loader: java.lang.ClassLoader, externalContext: any, currentContext: boolean): org.apache.logging.log4j.spi.LoggerContext;
						public getContext(fqcn: string, loader: java.lang.ClassLoader, externalContext: any, currentContext: boolean, configLocation: java.net.URI, name: string): org.apache.logging.log4j.spi.LoggerContext;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module spi {
					export abstract class AbstractLogger extends java.lang.Object implements org.apache.logging.log4j.spi.ExtendedLogger, org.apache.logging.log4j.spi.LocationAwareLogger, java.io.Serializable {
						public static class: java.lang.Class<org.apache.logging.log4j.spi.AbstractLogger>;
						public static FLOW_MARKER: org.apache.logging.log4j.Marker;
						public static ENTRY_MARKER: org.apache.logging.log4j.Marker;
						public static EXIT_MARKER: org.apache.logging.log4j.Marker;
						public static EXCEPTION_MARKER: org.apache.logging.log4j.Marker;
						public static THROWING_MARKER: org.apache.logging.log4j.Marker;
						public static CATCHING_MARKER: org.apache.logging.log4j.Marker;
						public static DEFAULT_MESSAGE_FACTORY_CLASS: java.lang.Class<any>;
						public static DEFAULT_FLOW_MESSAGE_FACTORY_CLASS: java.lang.Class<any>;
						public name: string;
						public logBuilder: java.lang.ThreadLocal<org.apache.logging.log4j.internal.DefaultLogBuilder>;
						public info(marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void;
						public trace(marker: org.apache.logging.log4j.Marker, message: any): void;
						public fatal(marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any): void;
						public fatal(marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any): void;
						public debug(marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void;
						public warn(marker: org.apache.logging.log4j.Marker, message: any): void;
						public debug(message: string, p0: any, p1: any, p2: any): void;
						public info(marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void;
						public log(level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void;
						public traceExit(message: org.apache.logging.log4j.message.Message, result: any): any;
						public isFatalEnabled(): boolean;
						public trace(marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void;
						public traceEntry(): org.apache.logging.log4j.message.EntryMessage;
						public error(marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any): void;
						public debug(marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any): void;
						public warn(message: string, paramSuppliers: native.Array<org.apache.logging.log4j.util.Supplier<any>>): void;
						public info(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void;
						public debug(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void;
						public fatal(marker: org.apache.logging.log4j.Marker, message: any): void;
						public always(): org.apache.logging.log4j.LogBuilder;
						public logIfEnabled(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, msgSupplier: org.apache.logging.log4j.util.MessageSupplier, t: java.lang.Throwable): void;
						public info(marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any): void;
						public warn(marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void;
						public trace(message: any, t: java.lang.Throwable): void;
						public trace(marker: org.apache.logging.log4j.Marker, msgSupplier: org.apache.logging.log4j.util.MessageSupplier): void;
						public trace(marker: org.apache.logging.log4j.Marker, message: string, params: native.Array<any>): void;
						public debug(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void;
						public error(marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void;
						public entry(params: native.Array<any>): void;
						public fatal(msgSupplier: org.apache.logging.log4j.util.Supplier<any>, t: java.lang.Throwable): void;
						public debug(msg: org.apache.logging.log4j.message.Message): void;
						public debug(marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void;
						public logIfEnabled(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void;
						public log(level: org.apache.logging.log4j.Level, message: string, p0: any, p1: any, p2: any, p3: any): void;
						public warn(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void;
						public info(marker: org.apache.logging.log4j.Marker, msgSupplier: org.apache.logging.log4j.util.MessageSupplier): void;
						public logIfEnabled(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void;
						public fatal(message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void;
						public info(message: string, p0: any, p1: any, p2: any, p3: any): void;
						public isEnabled(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, object2: any, throwable3: java.lang.Throwable): boolean;
						/** @deprecated */
						public entry(): void;
						public logIfEnabled(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, paramSuppliers: native.Array<org.apache.logging.log4j.util.Supplier<any>>): void;
						public warn(msg: org.apache.logging.log4j.message.Message, t: java.lang.Throwable): void;
						public debug(msg: org.apache.logging.log4j.message.Message, t: java.lang.Throwable): void;
						public warn(msgSupplier: org.apache.logging.log4j.util.Supplier<any>, t: java.lang.Throwable): void;
						public info(marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any): void;
						public trace(message: string, p0: any, p1: any, p2: any, p3: any): void;
						public logIfEnabled(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, t: java.lang.Throwable): void;
						public trace(marker: org.apache.logging.log4j.Marker, message: string, p0: any): void;
						public error(message: any): void;
						public log(level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, fqcn: string, location: java.lang.StackTraceElement, message: org.apache.logging.log4j.message.Message, throwable: java.lang.Throwable): void;
						/** @deprecated */
						public exit(): void;
						public isEnabled(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, object3: any): boolean;
						public traceEntry(message: org.apache.logging.log4j.message.Message): org.apache.logging.log4j.message.EntryMessage;
						public log(level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, msgSupplier: org.apache.logging.log4j.util.Supplier<any>): void;
						public warn(marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void;
						public debug(msgSupplier: org.apache.logging.log4j.util.MessageSupplier, t: java.lang.Throwable): void;
						public fatal(marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void;
						public log(level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, t: java.lang.Throwable): void;
						public debug(msgSupplier: org.apache.logging.log4j.util.Supplier<any>, t: java.lang.Throwable): void;
						public info(message: string, paramSuppliers: native.Array<org.apache.logging.log4j.util.Supplier<any>>): void;
						public logMessage(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void;
						public debug(message: any): void;
						public error(marker: org.apache.logging.log4j.Marker, msgSupplier: org.apache.logging.log4j.util.MessageSupplier): void;
						public logMessage(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void;
						public error(marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void;
						public log(level: org.apache.logging.log4j.Level, message: string): void;
						public isEnabled(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, object3: any, object4: any): boolean;
						public trace(msgSupplier: org.apache.logging.log4j.util.MessageSupplier): void;
						public atWarn(): org.apache.logging.log4j.LogBuilder;
						public fatal(marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void;
						public log(level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string): void;
						public fatal(marker: org.apache.logging.log4j.Marker, message: any, t: java.lang.Throwable): void;
						public traceExit(): void;
						public info(msg: org.apache.logging.log4j.message.Message, t: java.lang.Throwable): void;
						public info(message: string, p0: any): void;
						public info(msgSupplier: org.apache.logging.log4j.util.Supplier<any>): void;
						public error(marker: org.apache.logging.log4j.Marker, msg: org.apache.logging.log4j.message.Message, t: java.lang.Throwable): void;
						public warn(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void;
						public error(marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any): void;
						public log(level: org.apache.logging.log4j.Level, message: string, p0: any, p1: any): void;
						public logIfEnabled(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any): void;
						public trace(message: any): void;
						public warn(message: any): void;
						public getName(): string;
						public error(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void;
						public logIfEnabled(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any): void;
						public atFatal(): org.apache.logging.log4j.LogBuilder;
						public isEnabled(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, object3: any, object4: any, object5: any): boolean;
						public logMessage(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any): void;
						public trace(marker: org.apache.logging.log4j.Marker, message: string, t: java.lang.Throwable): void;
						public debug(marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any): void;
						public log(level: org.apache.logging.log4j.Level, message: string, p0: any): void;
						public isErrorEnabled(marker: org.apache.logging.log4j.Marker): boolean;
						public enter(fqcn: string, format: string, paramSuppliers: native.Array<org.apache.logging.log4j.util.Supplier<any>>): org.apache.logging.log4j.message.EntryMessage;
						public debug(marker: org.apache.logging.log4j.Marker, message: string): void;
						public logIfEnabled(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any): void;
						public error(msgSupplier: org.apache.logging.log4j.util.Supplier<any>, t: java.lang.Throwable): void;
						public logIfEnabled(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void;
						public debug(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void;
						public fatal(message: string, params: native.Array<any>): void;
						public isEnabled(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, objects3: native.Array<any>): boolean;
						public enter(fqcn: string, format: string, params: native.Array<any>): org.apache.logging.log4j.message.EntryMessage;
						public fatal(message: string, p0: any, p1: any): void;
						public error(msgSupplier: org.apache.logging.log4j.util.Supplier<any>): void;
						public trace(marker: org.apache.logging.log4j.Marker, message: string): void;
						public debug(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void;
						public logMessage(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, paramSuppliers: native.Array<org.apache.logging.log4j.util.Supplier<any>>): void;
						public throwing(t: java.lang.Throwable): java.lang.Throwable;
						public throwingMsg(t: java.lang.Throwable): org.apache.logging.log4j.message.Message;
						public trace(marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void;
						public error(msgSupplier: org.apache.logging.log4j.util.MessageSupplier, t: java.lang.Throwable): void;
						public log(level: org.apache.logging.log4j.Level, msgSupplier: org.apache.logging.log4j.util.MessageSupplier, t: java.lang.Throwable): void;
						public info(marker: org.apache.logging.log4j.Marker, message: any): void;
						public isEnabled(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, object3: any, object4: any, object5: any, object6: any, object7: any): boolean;
						public warn(marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any): void;
						public traceExit(result: any): any;
						public debug(marker: org.apache.logging.log4j.Marker, message: any, t: java.lang.Throwable): void;
						public error(marker: org.apache.logging.log4j.Marker, message: string, paramSuppliers: native.Array<org.apache.logging.log4j.util.Supplier<any>>): void;
						public warn(marker: org.apache.logging.log4j.Marker, message: string): void;
						public fatal(marker: org.apache.logging.log4j.Marker, msgSupplier: org.apache.logging.log4j.util.MessageSupplier): void;
						public isEnabled(level: org.apache.logging.log4j.Level): boolean;
						public debug(msgSupplier: org.apache.logging.log4j.util.MessageSupplier): void;
						public trace(marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void;
						public warn(message: any, t: java.lang.Throwable): void;
						public constructor();
						public log(level: org.apache.logging.log4j.Level, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void;
						public atError(): org.apache.logging.log4j.LogBuilder;
						public trace(msgSupplier: org.apache.logging.log4j.util.Supplier<any>): void;
						public fatal(message: string, t: java.lang.Throwable): void;
						public trace(msg: org.apache.logging.log4j.message.Message, t: java.lang.Throwable): void;
						public error(marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void;
						public warn(marker: org.apache.logging.log4j.Marker, message: string, t: java.lang.Throwable): void;
						public warn(message: string, t: java.lang.Throwable): void;
						public info(marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void;
						public isFatalEnabled(marker: org.apache.logging.log4j.Marker): boolean;
						public exitMsg(format: string, result: any): org.apache.logging.log4j.message.Message;
						public isEnabled(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, charSequence2: string, throwable3: java.lang.Throwable): boolean;
						public log(level: org.apache.logging.log4j.Level, msgSupplier: org.apache.logging.log4j.util.Supplier<any>, t: java.lang.Throwable): void;
						public fatal(marker: org.apache.logging.log4j.Marker, message: string): void;
						public error(message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void;
						public logMessage(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, t: java.lang.Throwable): void;
						public trace(marker: org.apache.logging.log4j.Marker, msgSupplier: org.apache.logging.log4j.util.Supplier<any>, t: java.lang.Throwable): void;
						public logMessage(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: any, t: java.lang.Throwable): void;
						public logMessage(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, msgSupplier: org.apache.logging.log4j.util.MessageSupplier, t: java.lang.Throwable): void;
						public fatal(message: string): void;
						public isDebugEnabled(marker: org.apache.logging.log4j.Marker): boolean;
						public error(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void;
						public logMessage(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void;
						public isInfoEnabled(): boolean;
						public debug(marker: org.apache.logging.log4j.Marker, msg: org.apache.logging.log4j.message.Message, t: java.lang.Throwable): void;
						public fatal(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void;
						public debug(marker: org.apache.logging.log4j.Marker, message: string, params: native.Array<any>): void;
						public fatal(marker: org.apache.logging.log4j.Marker, message: string, t: java.lang.Throwable): void;
						public debug(message: string, params: native.Array<any>): void;
						public trace(marker: org.apache.logging.log4j.Marker, message: any, t: java.lang.Throwable): void;
						public trace(message: string): void;
						public logIfEnabled(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: any, t: java.lang.Throwable): void;
						public traceEntry(format: string, paramSuppliers: native.Array<org.apache.logging.log4j.util.Supplier<any>>): org.apache.logging.log4j.message.EntryMessage;
						public info(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void;
						public info(message: string, p0: any, p1: any, p2: any): void;
						public isInfoEnabled(marker: org.apache.logging.log4j.Marker): boolean;
						public warn(marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void;
						public trace(msgSupplier: org.apache.logging.log4j.util.MessageSupplier, t: java.lang.Throwable): void;
						public log(level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, msg: org.apache.logging.log4j.message.Message, t: java.lang.Throwable): void;
						public fatal(marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void;
						public log(level: org.apache.logging.log4j.Level, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void;
						public atInfo(): org.apache.logging.log4j.LogBuilder;
						public logIfEnabled(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any): void;
						public debug(message: string, p0: any, p1: any, p2: any, p3: any): void;
						public exit(fqcn: string, format: string, result: any): any;
						public logMessage(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void;
						public logMessage(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void;
						public fatal(msgSupplier: org.apache.logging.log4j.util.MessageSupplier, t: java.lang.Throwable): void;
						public log(level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, msgSupplier: org.apache.logging.log4j.util.MessageSupplier, t: java.lang.Throwable): void;
						public trace(message: string, params: native.Array<any>): void;
						public trace(marker: org.apache.logging.log4j.Marker, msgSupplier: org.apache.logging.log4j.util.Supplier<any>): void;
						public logIfEnabled(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void;
						public fatal(message: string, p0: any): void;
						public warn(message: string, p0: any, p1: any, p2: any): void;
						public debug(marker: org.apache.logging.log4j.Marker, message: any): void;
						public log(level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void;
						public debug(marker: org.apache.logging.log4j.Marker, message: string, t: java.lang.Throwable): void;
						public log(level: org.apache.logging.log4j.Level, message: string, params: native.Array<any>): void;
						public throwing(fqcn: string, level: org.apache.logging.log4j.Level, t: java.lang.Throwable): java.lang.Throwable;
						public error(marker: org.apache.logging.log4j.Marker, message: string, p0: any): void;
						public error(marker: org.apache.logging.log4j.Marker, message: string, t: java.lang.Throwable): void;
						public debug(marker: org.apache.logging.log4j.Marker, message: string, paramSuppliers: native.Array<org.apache.logging.log4j.util.Supplier<any>>): void;
						public debug(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void;
						public trace(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void;
						public debug(marker: org.apache.logging.log4j.Marker, msgSupplier: org.apache.logging.log4j.util.MessageSupplier): void;
						public error(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void;
						public entry(fqcn: string, params: native.Array<any>): void;
						public error(marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void;
						public log(level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any): void;
						public fatal(msgSupplier: org.apache.logging.log4j.util.MessageSupplier): void;
						public printf(level: org.apache.logging.log4j.Level, format: string, params: native.Array<any>): void;
						public error(message: string, t: java.lang.Throwable): void;
						public log(level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void;
						public logMessage(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, params: native.Array<any>): void;
						public fatal(message: string, p0: any, p1: any, p2: any, p3: any): void;
						public trace(marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void;
						public warn(msgSupplier: org.apache.logging.log4j.util.Supplier<any>): void;
						public log(level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void;
						public warn(marker: org.apache.logging.log4j.Marker, message: string, paramSuppliers: native.Array<org.apache.logging.log4j.util.Supplier<any>>): void;
						public fatal(marker: org.apache.logging.log4j.Marker, message: string, p0: any): void;
						public logIfEnabled(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, msgSupplier: org.apache.logging.log4j.util.Supplier<any>, t: java.lang.Throwable): void;
						public warn(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void;
						public fatal(msg: org.apache.logging.log4j.message.Message): void;
						public isTraceEnabled(marker: org.apache.logging.log4j.Marker): boolean;
						public isEnabled(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any, object11: any, object12: any): boolean;
						public logMessage(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any): void;
						public isEnabled(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any): boolean;
						public log(level: org.apache.logging.log4j.Level, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void;
						public warn(message: string): void;
						public log(level: org.apache.logging.log4j.Level, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void;
						public isWarnEnabled(): boolean;
						public log(level: org.apache.logging.log4j.Level, msgSupplier: org.apache.logging.log4j.util.MessageSupplier): void;
						public warn(msg: org.apache.logging.log4j.message.Message): void;
						public info(marker: org.apache.logging.log4j.Marker, message: string, params: native.Array<any>): void;
						public info(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void;
						public warn(message: string, p0: any, p1: any): void;
						public requiresLocation(): boolean;
						public fatal(msgSupplier: org.apache.logging.log4j.util.Supplier<any>): void;
						public info(marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any): void;
						public trace(message: string, paramSuppliers: native.Array<org.apache.logging.log4j.util.Supplier<any>>): void;
						public info(marker: org.apache.logging.log4j.Marker, message: any, t: java.lang.Throwable): void;
						public warn(marker: org.apache.logging.log4j.Marker, msgSupplier: org.apache.logging.log4j.util.MessageSupplier): void;
						public warn(marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any): void;
						public fatal(marker: org.apache.logging.log4j.Marker, message: string, paramSuppliers: native.Array<org.apache.logging.log4j.util.Supplier<any>>): void;
						public logMessage(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any): void;
						public traceEntry(format: string, params: native.Array<any>): org.apache.logging.log4j.message.EntryMessage;
						public info(marker: org.apache.logging.log4j.Marker, message: string, paramSuppliers: native.Array<org.apache.logging.log4j.util.Supplier<any>>): void;
						public atTrace(): org.apache.logging.log4j.LogBuilder;
						public debug(marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any): void;
						public fatal(message: string, p0: any, p1: any, p2: any): void;
						public info(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void;
						public catching(t: java.lang.Throwable): void;
						public fatal(marker: org.apache.logging.log4j.Marker, msgSupplier: org.apache.logging.log4j.util.Supplier<any>, t: java.lang.Throwable): void;
						public static getRecursionDepth(): number;
						public isWarnEnabled(marker: org.apache.logging.log4j.Marker): boolean;
						public fatal(marker: org.apache.logging.log4j.Marker, msgSupplier: org.apache.logging.log4j.util.MessageSupplier, t: java.lang.Throwable): void;
						public log(level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any): void;
						public log(level: org.apache.logging.log4j.Level, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void;
						public trace(marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void;
						public enter(fqcn: string, message: org.apache.logging.log4j.message.Message): org.apache.logging.log4j.message.EntryMessage;
						public error(message: any, t: java.lang.Throwable): void;
						public warn(marker: org.apache.logging.log4j.Marker, message: any, t: java.lang.Throwable): void;
						public throwing(level: org.apache.logging.log4j.Level, t: java.lang.Throwable): java.lang.Throwable;
						public warn(msgSupplier: org.apache.logging.log4j.util.MessageSupplier): void;
						public trace(message: string, p0: any): void;
						public fatal(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void;
						public error(marker: org.apache.logging.log4j.Marker, msgSupplier: org.apache.logging.log4j.util.Supplier<any>): void;
						public log(level: org.apache.logging.log4j.Level, message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void;
						public info(marker: org.apache.logging.log4j.Marker, message: string): void;
						public info(marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void;
						public logIfEnabled(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, params: native.Array<any>): void;
						public debug(message: string, p0: any, p1: any): void;
						public error(marker: org.apache.logging.log4j.Marker, msgSupplier: org.apache.logging.log4j.util.Supplier<any>, t: java.lang.Throwable): void;
						public warn(message: string, params: native.Array<any>): void;
						public fatal(marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void;
						public log(level: org.apache.logging.log4j.Level, message: string, paramSuppliers: native.Array<org.apache.logging.log4j.util.Supplier<any>>): void;
						public printf(level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, format: string, params: native.Array<any>): void;
						public error(msg: org.apache.logging.log4j.message.Message, t: java.lang.Throwable): void;
						public atLevel(level: org.apache.logging.log4j.Level): org.apache.logging.log4j.LogBuilder;
						public trace(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void;
						public log(level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: any, t: java.lang.Throwable): void;
						public error(message: string, p0: any, p1: any, p2: any, p3: any): void;
						public error(message: string, paramSuppliers: native.Array<org.apache.logging.log4j.util.Supplier<any>>): void;
						public isEnabled(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any, object11: any): boolean;
						public catchingMsg(t: java.lang.Throwable): org.apache.logging.log4j.message.Message;
						public error(marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any): void;
						public fatal(message: any): void;
						public logIfEnabled(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void;
						public logMessage(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string): void;
						public traceExit(format: string, result: any): any;
						public error(marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void;
						public trace(message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void;
						public isEnabled(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, object3: any, object4: any, object5: any, object6: any): boolean;
						public debug(marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void;
						public error(message: string, params: native.Array<any>): void;
						public fatal(message: string, paramSuppliers: native.Array<org.apache.logging.log4j.util.Supplier<any>>): void;
						public info(message: string, p0: any, p1: any): void;
						public debug(message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void;
						public static checkMessageFactory(logger: org.apache.logging.log4j.spi.ExtendedLogger, messageFactory: org.apache.logging.log4j.message.MessageFactory): void;
						public debug(marker: org.apache.logging.log4j.Marker, msg: org.apache.logging.log4j.message.Message): void;
						public trace(message: string, p0: any, p1: any): void;
						public fatal(marker: org.apache.logging.log4j.Marker, msgSupplier: org.apache.logging.log4j.util.Supplier<any>): void;
						public trace(marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any): void;
						public traceEntry(paramSuppliers: native.Array<org.apache.logging.log4j.util.Supplier<any>>): org.apache.logging.log4j.message.EntryMessage;
						public warn(marker: org.apache.logging.log4j.Marker, message: string, params: native.Array<any>): void;
						public warn(marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void;
						public debug(message: string, t: java.lang.Throwable): void;
						public info(message: any, t: java.lang.Throwable): void;
						public fatal(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void;
						public fatal(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void;
						public info(marker: org.apache.logging.log4j.Marker, message: string, p0: any): void;
						public fatal(marker: org.apache.logging.log4j.Marker, message: string, params: native.Array<any>): void;
						public debug(marker: org.apache.logging.log4j.Marker, message: string, p0: any): void;
						public logIfEnabled(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string): void;
						public trace(marker: org.apache.logging.log4j.Marker, msgSupplier: org.apache.logging.log4j.util.MessageSupplier, t: java.lang.Throwable): void;
						public entryMsg(format: string, params: native.Array<any>): org.apache.logging.log4j.message.EntryMessage;
						public error(msgSupplier: org.apache.logging.log4j.util.MessageSupplier): void;
						/** @deprecated */
						public enter(fqcn: string, format: string, paramSuppliers: native.Array<org.apache.logging.log4j.util.MessageSupplier>): org.apache.logging.log4j.message.EntryMessage;
						public debug(marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void;
						public error(marker: org.apache.logging.log4j.Marker, message: string, params: native.Array<any>): void;
						public info(msgSupplier: org.apache.logging.log4j.util.MessageSupplier, t: java.lang.Throwable): void;
						public warn(message: string, p0: any, p1: any, p2: any, p3: any): void;
						public logIfEnabled(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, msg: org.apache.logging.log4j.message.Message, t: java.lang.Throwable): void;
						public debug(message: string, p0: any): void;
						public catching(level: org.apache.logging.log4j.Level, t: java.lang.Throwable): void;
						public trace(marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any): void;
						public logMessage(level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, fqcn: string, location: java.lang.StackTraceElement, message: org.apache.logging.log4j.message.Message, throwable: java.lang.Throwable): void;
						public warn(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void;
						public trace(marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void;
						public debug(marker: org.apache.logging.log4j.Marker, msgSupplier: org.apache.logging.log4j.util.Supplier<any>, t: java.lang.Throwable): void;
						public info(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void;
						public trace(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void;
						public error(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void;
						public isErrorEnabled(): boolean;
						public logMessage(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, msgSupplier: org.apache.logging.log4j.util.Supplier<any>, t: java.lang.Throwable): void;
						/** @deprecated */
						public exit(result: any): any;
						public isTraceEnabled(): boolean;
						public log(level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: any): void;
						public constructor(name: string, messageFactory: org.apache.logging.log4j.message.MessageFactory);
						public log(level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void;
						public fatal(marker: org.apache.logging.log4j.Marker, msg: org.apache.logging.log4j.message.Message): void;
						public debug(message: any, t: java.lang.Throwable): void;
						public logMessage(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void;
						public warn(marker: org.apache.logging.log4j.Marker, msgSupplier: org.apache.logging.log4j.util.Supplier<any>, t: java.lang.Throwable): void;
						public warn(marker: org.apache.logging.log4j.Marker, msgSupplier: org.apache.logging.log4j.util.Supplier<any>): void;
						public log(level: org.apache.logging.log4j.Level, message: any): void;
						public trace(msgSupplier: org.apache.logging.log4j.util.Supplier<any>, t: java.lang.Throwable): void;
						public error(marker: org.apache.logging.log4j.Marker, msg: org.apache.logging.log4j.message.Message): void;
						public info(marker: org.apache.logging.log4j.Marker, msgSupplier: org.apache.logging.log4j.util.Supplier<any>, t: java.lang.Throwable): void;
						public log(level: org.apache.logging.log4j.Level, msg: org.apache.logging.log4j.message.Message): void;
						public fatal(marker: org.apache.logging.log4j.Marker, msg: org.apache.logging.log4j.message.Message, t: java.lang.Throwable): void;
						public info(msgSupplier: org.apache.logging.log4j.util.Supplier<any>, t: java.lang.Throwable): void;
						public error(message: string, p0: any, p1: any, p2: any): void;
						public trace(marker: org.apache.logging.log4j.Marker, message: string, paramSuppliers: native.Array<org.apache.logging.log4j.util.Supplier<any>>): void;
						public error(msg: org.apache.logging.log4j.message.Message): void;
						public trace(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void;
						public trace(marker: org.apache.logging.log4j.Marker, msg: org.apache.logging.log4j.message.Message): void;
						public debug(marker: org.apache.logging.log4j.Marker, msgSupplier: org.apache.logging.log4j.util.MessageSupplier, t: java.lang.Throwable): void;
						public isDebugEnabled(): boolean;
						public fatal(marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void;
						public log(level: org.apache.logging.log4j.Level, msgSupplier: org.apache.logging.log4j.util.Supplier<any>): void;
						public trace(message: string, t: java.lang.Throwable): void;
						public warn(marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void;
						public log(level: org.apache.logging.log4j.Level, msg: org.apache.logging.log4j.message.Message, t: java.lang.Throwable): void;
						public isEnabled(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string): boolean;
						public debug(marker: org.apache.logging.log4j.Marker, msgSupplier: org.apache.logging.log4j.util.Supplier<any>): void;
						public log(level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, paramSuppliers: native.Array<org.apache.logging.log4j.util.Supplier<any>>): void;
						/** @deprecated */
						public entry(params: native.Array<any>): void;
						public traceExit(message: org.apache.logging.log4j.message.EntryMessage): void;
						public warn(message: string, p0: any): void;
						public info(marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void;
						public log(level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any): void;
						public info(marker: org.apache.logging.log4j.Marker, msgSupplier: org.apache.logging.log4j.util.MessageSupplier, t: java.lang.Throwable): void;
						public traceExit(message: org.apache.logging.log4j.message.EntryMessage, result: any): any;
						public isEnabled(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any): boolean;
						public debug(msgSupplier: org.apache.logging.log4j.util.Supplier<any>): void;
						public error(message: string): void;
						public fatal(marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any): void;
						public trace(message: string, p0: any, p1: any, p2: any): void;
						public isEnabled(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any): boolean;
						/** @deprecated */
						public enter(fqcn: string, msgSupplier: org.apache.logging.log4j.util.MessageSupplier): org.apache.logging.log4j.message.EntryMessage;
						public trace(marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any): void;
						public log(level: org.apache.logging.log4j.Level, message: string, t: java.lang.Throwable): void;
						public debug(marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void;
						public fatal(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void;
						public warn(message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void;
						public info(message: any): void;
						public entryMsg(format: string, paramSuppliers: native.Array<org.apache.logging.log4j.util.Supplier<any>>): org.apache.logging.log4j.message.EntryMessage;
						public info(msg: org.apache.logging.log4j.message.Message): void;
						public warn(marker: org.apache.logging.log4j.Marker, message: string, p0: any): void;
						public log(level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any): void;
						public error(marker: org.apache.logging.log4j.Marker, msgSupplier: org.apache.logging.log4j.util.MessageSupplier, t: java.lang.Throwable): void;
						public info(message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void;
						public log(level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, params: native.Array<any>): void;
						public log(level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void;
						public log(level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, msgSupplier: org.apache.logging.log4j.util.MessageSupplier): void;
						public log(level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, msgSupplier: org.apache.logging.log4j.util.Supplier<any>, t: java.lang.Throwable): void;
						public warn(marker: org.apache.logging.log4j.Marker, msgSupplier: org.apache.logging.log4j.util.MessageSupplier, t: java.lang.Throwable): void;
						public info(message: string): void;
						public error(marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void;
						public info(message: string, params: native.Array<any>): void;
						public atDebug(): org.apache.logging.log4j.LogBuilder;
						public isEnabled(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, throwable3: java.lang.Throwable): boolean;
						public debug(message: string, paramSuppliers: native.Array<org.apache.logging.log4j.util.Supplier<any>>): void;
						public trace(marker: org.apache.logging.log4j.Marker, msg: org.apache.logging.log4j.message.Message, t: java.lang.Throwable): void;
						public fatal(message: any, t: java.lang.Throwable): void;
						public error(marker: org.apache.logging.log4j.Marker, message: string): void;
						public error(marker: org.apache.logging.log4j.Marker, message: any, t: java.lang.Throwable): void;
						public getMessageFactory(): org.apache.logging.log4j.message.MessageFactory;
						public fatal(marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void;
						public info(marker: org.apache.logging.log4j.Marker, msg: org.apache.logging.log4j.message.Message, t: java.lang.Throwable): void;
						public info(marker: org.apache.logging.log4j.Marker, msgSupplier: org.apache.logging.log4j.util.Supplier<any>): void;
						public logMessage(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any): void;
						public error(marker: org.apache.logging.log4j.Marker, message: any): void;
						public error(message: string, p0: any, p1: any): void;
						public trace(msg: org.apache.logging.log4j.message.Message): void;
						public warn(marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any): void;
						public exit(fqcn: string, result: any): any;
						public catching(fqcn: string, level: org.apache.logging.log4j.Level, t: java.lang.Throwable): void;
						public getLevel(): org.apache.logging.log4j.Level;
						public logIfEnabled(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void;
						public log(level: org.apache.logging.log4j.Level, message: any, t: java.lang.Throwable): void;
						public warn(marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void;
						public info(message: string, t: java.lang.Throwable): void;
						public trace(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void;
						public error(message: string, p0: any): void;
						public log(level: org.apache.logging.log4j.Level, message: string, p0: any, p1: any, p2: any): void;
						public warn(msgSupplier: org.apache.logging.log4j.util.MessageSupplier, t: java.lang.Throwable): void;
						public warn(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void;
						public fatal(msg: org.apache.logging.log4j.message.Message, t: java.lang.Throwable): void;
						public logMessage(string0: string, level1: org.apache.logging.log4j.Level, marker2: org.apache.logging.log4j.Marker, message3: org.apache.logging.log4j.message.Message, throwable4: java.lang.Throwable): void;
						public isEnabled(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, message2: org.apache.logging.log4j.message.Message, throwable3: java.lang.Throwable): boolean;
						public debug(marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void;
						public warn(marker: org.apache.logging.log4j.Marker, msg: org.apache.logging.log4j.message.Message, t: java.lang.Throwable): void;
						public info(marker: org.apache.logging.log4j.Marker, message: string, t: java.lang.Throwable): void;
						public log(level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, msg: org.apache.logging.log4j.message.Message): void;
						public debug(message: string): void;
						public error(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void;
						public info(marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void;
						public constructor(name: string);
						public info(msgSupplier: org.apache.logging.log4j.util.MessageSupplier): void;
						public isEnabled(level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker): boolean;
						public info(marker: org.apache.logging.log4j.Marker, msg: org.apache.logging.log4j.message.Message): void;
						public entryMsg(format: string, paramSuppliers: native.Array<org.apache.logging.log4j.util.MessageSupplier>): org.apache.logging.log4j.message.EntryMessage;
						public warn(marker: org.apache.logging.log4j.Marker, msg: org.apache.logging.log4j.message.Message): void;
					}
					export module AbstractLogger {
						export class LocalLogBuilder extends java.lang.ThreadLocal<org.apache.logging.log4j.internal.DefaultLogBuilder> {
							public static class: java.lang.Class<org.apache.logging.log4j.spi.AbstractLogger.LocalLogBuilder>;
							public initialValue(): org.apache.logging.log4j.internal.DefaultLogBuilder;
							public initialValue(): any;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module spi {
					export abstract class AbstractLoggerAdapter<L>  extends java.lang.Object {
						public static class: java.lang.Class<org.apache.logging.log4j.spi.AbstractLoggerAdapter<any>>;
						public registry: java.util.Map<org.apache.logging.log4j.spi.LoggerContext,java.util.concurrent.ConcurrentMap<string,L>>;
						public getLoggerContexts(): java.util.Set<org.apache.logging.log4j.spi.LoggerContext>;
						public constructor();
						public getContext(): org.apache.logging.log4j.spi.LoggerContext;
						public close(): void;
						public contextShutdown(loggerContext: org.apache.logging.log4j.spi.LoggerContext): void;
						public getContext(callerClass: java.lang.Class<any>): org.apache.logging.log4j.spi.LoggerContext;
						public newLogger(string0: string, loggerContext1: org.apache.logging.log4j.spi.LoggerContext): L;
						public getLoggersInContext(context: org.apache.logging.log4j.spi.LoggerContext): java.util.concurrent.ConcurrentMap<string,L>;
						public getLogger(name: string): L;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module spi {
					export class CleanableThreadContextMap extends java.lang.Object implements org.apache.logging.log4j.spi.ThreadContextMap2 {
						public static class: java.lang.Class<org.apache.logging.log4j.spi.CleanableThreadContextMap>;
						/**
						 * Constructs a new instance of the org.apache.logging.log4j.spi.CleanableThreadContextMap interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							removeAll(iterable0: java.lang.Iterable<string>): void;
							putAll(map0: java.util.Map<string,string>): void;
							getReadOnlyContextData(): org.apache.logging.log4j.util.StringMap;
							clear(): void;
							containsKey(string0: string): boolean;
							get(string0: string): string;
							getCopy(): java.util.Map<string,string>;
							getImmutableMapOrNull(): java.util.Map<string,string>;
							isEmpty(): boolean;
							put(string0: string, string1: string): void;
							remove(string0: string): void;
						});
						public constructor();
						public removeAll(iterable0: java.lang.Iterable<string>): void;
						public remove(string0: string): void;
						public containsKey(string0: string): boolean;
						public getCopy(): java.util.Map<string,string>;
						public getImmutableMapOrNull(): java.util.Map<string,string>;
						public isEmpty(): boolean;
						public getReadOnlyContextData(): org.apache.logging.log4j.util.StringMap;
						public clear(): void;
						public get(string0: string): string;
						public put(string0: string, string1: string): void;
						public putAll(map0: java.util.Map<string,string>): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module spi {
					export class CopyOnWrite extends java.lang.Object {
						public static class: java.lang.Class<org.apache.logging.log4j.spi.CopyOnWrite>;
						/**
						 * Constructs a new instance of the org.apache.logging.log4j.spi.CopyOnWrite interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module spi {
					export class CopyOnWriteSortedArrayThreadContextMap extends java.lang.Object implements org.apache.logging.log4j.spi.ReadOnlyThreadContextMap, org.apache.logging.log4j.spi.ObjectThreadContextMap, org.apache.logging.log4j.spi.CopyOnWrite {
						public static class: java.lang.Class<org.apache.logging.log4j.spi.CopyOnWriteSortedArrayThreadContextMap>;
						public static INHERITABLE_MAP: string;
						public static DEFAULT_INITIAL_CAPACITY: number;
						public static PROPERTY_NAME_INITIAL_CAPACITY: string;
						public containsKey(key: string): boolean;
						public constructor();
						public equals(obj: any): boolean;
						public remove(key: string): void;
						public getValue(key: string): any;
						public hashCode(): number;
						public getReadOnlyContextData(): org.apache.logging.log4j.util.StringMap;
						public putValue(key: string, value: any): void;
						public removeAll(keys: java.lang.Iterable<string>): void;
						public toString(): string;
						public putAll(values: java.util.Map<string,string>): void;
						public createStringMap(original: org.apache.logging.log4j.util.ReadOnlyStringMap): org.apache.logging.log4j.util.StringMap;
						public putAllValues(values: java.util.Map<any,any>): void;
						public get(key: string): string;
						public put(key: string, value: string): void;
						public getCopy(): java.util.Map<string,string>;
						public getImmutableMapOrNull(): java.util.Map<string,string>;
						public isEmpty(): boolean;
						public clear(): void;
						public createStringMap(): org.apache.logging.log4j.util.StringMap;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module spi {
					export class DefaultThreadContextMap extends java.lang.Object implements org.apache.logging.log4j.spi.ThreadContextMap, org.apache.logging.log4j.util.ReadOnlyStringMap {
						public static class: java.lang.Class<org.apache.logging.log4j.spi.DefaultThreadContextMap>;
						public static INHERITABLE_MAP: string;
						public containsKey(key: string): boolean;
						public constructor();
						public equals(obj: any): boolean;
						public remove(key: string): void;
						public forEach(action: org.apache.logging.log4j.util.BiConsumer<any,any>): void;
						public forEach(action: org.apache.logging.log4j.util.TriConsumer<any,any,any>, state: any): void;
						public getValue(key: string): any;
						public hashCode(): number;
						public removeAll(keys: java.lang.Iterable<string>): void;
						public toString(): string;
						public constructor(useMap: boolean);
						public get(key: string): string;
						public put(key: string, value: string): void;
						public getCopy(): java.util.Map<string,string>;
						public getImmutableMapOrNull(): java.util.Map<string,string>;
						public isEmpty(): boolean;
						public putAll(m: java.util.Map<string,string>): void;
						public clear(): void;
						public size(): number;
						public toMap(): java.util.Map<string,string>;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module spi {
					export class DefaultThreadContextStack extends java.lang.Object implements org.apache.logging.log4j.spi.ThreadContextStack, org.apache.logging.log4j.util.StringBuilderFormattable {
						public static class: java.lang.Class<org.apache.logging.log4j.spi.DefaultThreadContextStack>;
						public constructor(useStack: boolean);
						public equals(obj: any): boolean;
						public copy(): org.apache.logging.log4j.spi.ThreadContextStack;
						public iterator(): java.util.Iterator<any>;
						public retainAll(objects: java.util.Collection<any>): boolean;
						public stream(): java.util.stream.Stream<any>;
						public hashCode(): number;
						public getImmutableStackOrNull(): org.apache.logging.log4j.ThreadContext.ContextStack;
						public removeIf(filter: any /* any*/): boolean;
						public push(message: string): void;
						public removeAll(objects: java.util.Collection<any>): boolean;
						public contains(o: any): boolean;
						public add(object0: any): boolean;
						public toArray(ts: native.Array<any>): native.Array<any>;
						public spliterator(): java.util.Spliterator<any>;
						public isEmpty(): boolean;
						public iterator(): java.util.Iterator<string>;
						public containsAll(objects: java.util.Collection<any>): boolean;
						public size(): number;
						public asList(): java.util.List<string>;
						public copy(): org.apache.logging.log4j.ThreadContext.ContextStack;
						public addAll(strings: java.util.Collection<any>): boolean;
						public remove(o: any): boolean;
						public parallelStream(): java.util.stream.Stream<any>;
						public toString(): string;
						public pop(): string;
						public formatTo(buffer: java.lang.StringBuilder): void;
						public peek(): string;
						public add(s: string): boolean;
						public trim(depth: number): void;
						public clear(): void;
						public getDepth(): number;
						public forEach(action: any /* any*/): void;
						public toArray(): native.Array<any>;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module spi {
					export class ExtendedLogger extends java.lang.Object implements org.apache.logging.log4j.Logger {
						public static class: java.lang.Class<org.apache.logging.log4j.spi.ExtendedLogger>;
						/**
						 * Constructs a new instance of the org.apache.logging.log4j.spi.ExtendedLogger interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							isEnabled(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, message2: org.apache.logging.log4j.message.Message, throwable3: java.lang.Throwable): boolean;
							isEnabled(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, charSequence2: string, throwable3: java.lang.Throwable): boolean;
							isEnabled(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, object2: any, throwable3: java.lang.Throwable): boolean;
							isEnabled(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, throwable3: java.lang.Throwable): boolean;
							isEnabled(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string): boolean;
							isEnabled(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, objects3: native.Array<any>): boolean;
							isEnabled(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, object3: any): boolean;
							isEnabled(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, object3: any, object4: any): boolean;
							isEnabled(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, object3: any, object4: any, object5: any): boolean;
							isEnabled(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, object3: any, object4: any, object5: any, object6: any): boolean;
							isEnabled(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, object3: any, object4: any, object5: any, object6: any, object7: any): boolean;
							isEnabled(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any): boolean;
							isEnabled(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any): boolean;
							isEnabled(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any): boolean;
							isEnabled(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any, object11: any): boolean;
							isEnabled(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any, object11: any, object12: any): boolean;
							logIfEnabled(string0: string, level1: org.apache.logging.log4j.Level, marker2: org.apache.logging.log4j.Marker, message3: org.apache.logging.log4j.message.Message, throwable4: java.lang.Throwable): void;
							logIfEnabled(string0: string, level1: org.apache.logging.log4j.Level, marker2: org.apache.logging.log4j.Marker, charSequence3: string, throwable4: java.lang.Throwable): void;
							logIfEnabled(string0: string, level1: org.apache.logging.log4j.Level, marker2: org.apache.logging.log4j.Marker, object3: any, throwable4: java.lang.Throwable): void;
							logIfEnabled(string0: string, level1: org.apache.logging.log4j.Level, marker2: org.apache.logging.log4j.Marker, string3: string, throwable4: java.lang.Throwable): void;
							logIfEnabled(string0: string, level1: org.apache.logging.log4j.Level, marker2: org.apache.logging.log4j.Marker, string3: string): void;
							logIfEnabled(string0: string, level1: org.apache.logging.log4j.Level, marker2: org.apache.logging.log4j.Marker, string3: string, objects4: native.Array<any>): void;
							logIfEnabled(string0: string, level1: org.apache.logging.log4j.Level, marker2: org.apache.logging.log4j.Marker, string3: string, object4: any): void;
							logIfEnabled(string0: string, level1: org.apache.logging.log4j.Level, marker2: org.apache.logging.log4j.Marker, string3: string, object4: any, object5: any): void;
							logIfEnabled(string0: string, level1: org.apache.logging.log4j.Level, marker2: org.apache.logging.log4j.Marker, string3: string, object4: any, object5: any, object6: any): void;
							logIfEnabled(string0: string, level1: org.apache.logging.log4j.Level, marker2: org.apache.logging.log4j.Marker, string3: string, object4: any, object5: any, object6: any, object7: any): void;
							logIfEnabled(string0: string, level1: org.apache.logging.log4j.Level, marker2: org.apache.logging.log4j.Marker, string3: string, object4: any, object5: any, object6: any, object7: any, object8: any): void;
							logIfEnabled(string0: string, level1: org.apache.logging.log4j.Level, marker2: org.apache.logging.log4j.Marker, string3: string, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any): void;
							logIfEnabled(string0: string, level1: org.apache.logging.log4j.Level, marker2: org.apache.logging.log4j.Marker, string3: string, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any): void;
							logIfEnabled(string0: string, level1: org.apache.logging.log4j.Level, marker2: org.apache.logging.log4j.Marker, string3: string, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any, object11: any): void;
							logIfEnabled(string0: string, level1: org.apache.logging.log4j.Level, marker2: org.apache.logging.log4j.Marker, string3: string, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any, object11: any, object12: any): void;
							logIfEnabled(string0: string, level1: org.apache.logging.log4j.Level, marker2: org.apache.logging.log4j.Marker, string3: string, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any, object11: any, object12: any, object13: any): void;
							logMessage(string0: string, level1: org.apache.logging.log4j.Level, marker2: org.apache.logging.log4j.Marker, message3: org.apache.logging.log4j.message.Message, throwable4: java.lang.Throwable): void;
							logIfEnabled(string0: string, level1: org.apache.logging.log4j.Level, marker2: org.apache.logging.log4j.Marker, messageSupplier3: org.apache.logging.log4j.util.MessageSupplier, throwable4: java.lang.Throwable): void;
							logIfEnabled(string0: string, level1: org.apache.logging.log4j.Level, marker2: org.apache.logging.log4j.Marker, string3: string, suppliers4: native.Array<org.apache.logging.log4j.util.Supplier<any>>): void;
							logIfEnabled(string0: string, level1: org.apache.logging.log4j.Level, marker2: org.apache.logging.log4j.Marker, supplier3: org.apache.logging.log4j.util.Supplier<any>, throwable4: java.lang.Throwable): void;
							catching(level0: org.apache.logging.log4j.Level, throwable1: java.lang.Throwable): void;
							catching(throwable0: java.lang.Throwable): void;
							debug(marker0: org.apache.logging.log4j.Marker, message1: org.apache.logging.log4j.message.Message): void;
							debug(marker0: org.apache.logging.log4j.Marker, message1: org.apache.logging.log4j.message.Message, throwable2: java.lang.Throwable): void;
							debug(marker0: org.apache.logging.log4j.Marker, messageSupplier1: org.apache.logging.log4j.util.MessageSupplier): void;
							debug(marker0: org.apache.logging.log4j.Marker, messageSupplier1: org.apache.logging.log4j.util.MessageSupplier, throwable2: java.lang.Throwable): void;
							debug(marker0: org.apache.logging.log4j.Marker, charSequence1: string): void;
							debug(marker0: org.apache.logging.log4j.Marker, charSequence1: string, throwable2: java.lang.Throwable): void;
							debug(marker0: org.apache.logging.log4j.Marker, object1: any): void;
							debug(marker0: org.apache.logging.log4j.Marker, object1: any, throwable2: java.lang.Throwable): void;
							debug(marker0: org.apache.logging.log4j.Marker, string1: string): void;
							debug(marker0: org.apache.logging.log4j.Marker, string1: string, objects2: native.Array<any>): void;
							debug(marker0: org.apache.logging.log4j.Marker, string1: string, suppliers2: native.Array<org.apache.logging.log4j.util.Supplier<any>>): void;
							debug(marker0: org.apache.logging.log4j.Marker, string1: string, throwable2: java.lang.Throwable): void;
							debug(marker0: org.apache.logging.log4j.Marker, supplier1: org.apache.logging.log4j.util.Supplier<any>): void;
							debug(marker0: org.apache.logging.log4j.Marker, supplier1: org.apache.logging.log4j.util.Supplier<any>, throwable2: java.lang.Throwable): void;
							debug(message0: org.apache.logging.log4j.message.Message): void;
							debug(message0: org.apache.logging.log4j.message.Message, throwable1: java.lang.Throwable): void;
							debug(messageSupplier0: org.apache.logging.log4j.util.MessageSupplier): void;
							debug(messageSupplier0: org.apache.logging.log4j.util.MessageSupplier, throwable1: java.lang.Throwable): void;
							debug(charSequence0: string): void;
							debug(charSequence0: string, throwable1: java.lang.Throwable): void;
							debug(object0: any): void;
							debug(object0: any, throwable1: java.lang.Throwable): void;
							debug(string0: string): void;
							debug(string0: string, objects1: native.Array<any>): void;
							debug(string0: string, suppliers1: native.Array<org.apache.logging.log4j.util.Supplier<any>>): void;
							debug(string0: string, throwable1: java.lang.Throwable): void;
							debug(supplier0: org.apache.logging.log4j.util.Supplier<any>): void;
							debug(supplier0: org.apache.logging.log4j.util.Supplier<any>, throwable1: java.lang.Throwable): void;
							debug(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any): void;
							debug(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any): void;
							debug(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any): void;
							debug(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any): void;
							debug(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any): void;
							debug(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any): void;
							debug(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any): void;
							debug(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any): void;
							debug(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any): void;
							debug(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any, object11: any): void;
							debug(string0: string, object1: any): void;
							debug(string0: string, object1: any, object2: any): void;
							debug(string0: string, object1: any, object2: any, object3: any): void;
							debug(string0: string, object1: any, object2: any, object3: any, object4: any): void;
							debug(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any): void;
							debug(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any): void;
							debug(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any): void;
							debug(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any): void;
							debug(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any): void;
							debug(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any): void;
							entry(): void;
							entry(objects0: native.Array<any>): void;
							error(marker0: org.apache.logging.log4j.Marker, message1: org.apache.logging.log4j.message.Message): void;
							error(marker0: org.apache.logging.log4j.Marker, message1: org.apache.logging.log4j.message.Message, throwable2: java.lang.Throwable): void;
							error(marker0: org.apache.logging.log4j.Marker, messageSupplier1: org.apache.logging.log4j.util.MessageSupplier): void;
							error(marker0: org.apache.logging.log4j.Marker, messageSupplier1: org.apache.logging.log4j.util.MessageSupplier, throwable2: java.lang.Throwable): void;
							error(marker0: org.apache.logging.log4j.Marker, charSequence1: string): void;
							error(marker0: org.apache.logging.log4j.Marker, charSequence1: string, throwable2: java.lang.Throwable): void;
							error(marker0: org.apache.logging.log4j.Marker, object1: any): void;
							error(marker0: org.apache.logging.log4j.Marker, object1: any, throwable2: java.lang.Throwable): void;
							error(marker0: org.apache.logging.log4j.Marker, string1: string): void;
							error(marker0: org.apache.logging.log4j.Marker, string1: string, objects2: native.Array<any>): void;
							error(marker0: org.apache.logging.log4j.Marker, string1: string, suppliers2: native.Array<org.apache.logging.log4j.util.Supplier<any>>): void;
							error(marker0: org.apache.logging.log4j.Marker, string1: string, throwable2: java.lang.Throwable): void;
							error(marker0: org.apache.logging.log4j.Marker, supplier1: org.apache.logging.log4j.util.Supplier<any>): void;
							error(marker0: org.apache.logging.log4j.Marker, supplier1: org.apache.logging.log4j.util.Supplier<any>, throwable2: java.lang.Throwable): void;
							error(message0: org.apache.logging.log4j.message.Message): void;
							error(message0: org.apache.logging.log4j.message.Message, throwable1: java.lang.Throwable): void;
							error(messageSupplier0: org.apache.logging.log4j.util.MessageSupplier): void;
							error(messageSupplier0: org.apache.logging.log4j.util.MessageSupplier, throwable1: java.lang.Throwable): void;
							error(charSequence0: string): void;
							error(charSequence0: string, throwable1: java.lang.Throwable): void;
							error(object0: any): void;
							error(object0: any, throwable1: java.lang.Throwable): void;
							error(string0: string): void;
							error(string0: string, objects1: native.Array<any>): void;
							error(string0: string, suppliers1: native.Array<org.apache.logging.log4j.util.Supplier<any>>): void;
							error(string0: string, throwable1: java.lang.Throwable): void;
							error(supplier0: org.apache.logging.log4j.util.Supplier<any>): void;
							error(supplier0: org.apache.logging.log4j.util.Supplier<any>, throwable1: java.lang.Throwable): void;
							error(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any): void;
							error(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any): void;
							error(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any): void;
							error(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any): void;
							error(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any): void;
							error(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any): void;
							error(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any): void;
							error(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any): void;
							error(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any): void;
							error(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any, object11: any): void;
							error(string0: string, object1: any): void;
							error(string0: string, object1: any, object2: any): void;
							error(string0: string, object1: any, object2: any, object3: any): void;
							error(string0: string, object1: any, object2: any, object3: any, object4: any): void;
							error(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any): void;
							error(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any): void;
							error(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any): void;
							error(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any): void;
							error(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any): void;
							error(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any): void;
							exit(): void;
							exit(object0: any): any;
							fatal(marker0: org.apache.logging.log4j.Marker, message1: org.apache.logging.log4j.message.Message): void;
							fatal(marker0: org.apache.logging.log4j.Marker, message1: org.apache.logging.log4j.message.Message, throwable2: java.lang.Throwable): void;
							fatal(marker0: org.apache.logging.log4j.Marker, messageSupplier1: org.apache.logging.log4j.util.MessageSupplier): void;
							fatal(marker0: org.apache.logging.log4j.Marker, messageSupplier1: org.apache.logging.log4j.util.MessageSupplier, throwable2: java.lang.Throwable): void;
							fatal(marker0: org.apache.logging.log4j.Marker, charSequence1: string): void;
							fatal(marker0: org.apache.logging.log4j.Marker, charSequence1: string, throwable2: java.lang.Throwable): void;
							fatal(marker0: org.apache.logging.log4j.Marker, object1: any): void;
							fatal(marker0: org.apache.logging.log4j.Marker, object1: any, throwable2: java.lang.Throwable): void;
							fatal(marker0: org.apache.logging.log4j.Marker, string1: string): void;
							fatal(marker0: org.apache.logging.log4j.Marker, string1: string, objects2: native.Array<any>): void;
							fatal(marker0: org.apache.logging.log4j.Marker, string1: string, suppliers2: native.Array<org.apache.logging.log4j.util.Supplier<any>>): void;
							fatal(marker0: org.apache.logging.log4j.Marker, string1: string, throwable2: java.lang.Throwable): void;
							fatal(marker0: org.apache.logging.log4j.Marker, supplier1: org.apache.logging.log4j.util.Supplier<any>): void;
							fatal(marker0: org.apache.logging.log4j.Marker, supplier1: org.apache.logging.log4j.util.Supplier<any>, throwable2: java.lang.Throwable): void;
							fatal(message0: org.apache.logging.log4j.message.Message): void;
							fatal(message0: org.apache.logging.log4j.message.Message, throwable1: java.lang.Throwable): void;
							fatal(messageSupplier0: org.apache.logging.log4j.util.MessageSupplier): void;
							fatal(messageSupplier0: org.apache.logging.log4j.util.MessageSupplier, throwable1: java.lang.Throwable): void;
							fatal(charSequence0: string): void;
							fatal(charSequence0: string, throwable1: java.lang.Throwable): void;
							fatal(object0: any): void;
							fatal(object0: any, throwable1: java.lang.Throwable): void;
							fatal(string0: string): void;
							fatal(string0: string, objects1: native.Array<any>): void;
							fatal(string0: string, suppliers1: native.Array<org.apache.logging.log4j.util.Supplier<any>>): void;
							fatal(string0: string, throwable1: java.lang.Throwable): void;
							fatal(supplier0: org.apache.logging.log4j.util.Supplier<any>): void;
							fatal(supplier0: org.apache.logging.log4j.util.Supplier<any>, throwable1: java.lang.Throwable): void;
							fatal(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any): void;
							fatal(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any): void;
							fatal(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any): void;
							fatal(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any): void;
							fatal(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any): void;
							fatal(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any): void;
							fatal(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any): void;
							fatal(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any): void;
							fatal(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any): void;
							fatal(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any, object11: any): void;
							fatal(string0: string, object1: any): void;
							fatal(string0: string, object1: any, object2: any): void;
							fatal(string0: string, object1: any, object2: any, object3: any): void;
							fatal(string0: string, object1: any, object2: any, object3: any, object4: any): void;
							fatal(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any): void;
							fatal(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any): void;
							fatal(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any): void;
							fatal(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any): void;
							fatal(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any): void;
							fatal(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any): void;
							getLevel(): org.apache.logging.log4j.Level;
							getMessageFactory(): org.apache.logging.log4j.message.MessageFactory;
							getName(): string;
							info(marker0: org.apache.logging.log4j.Marker, message1: org.apache.logging.log4j.message.Message): void;
							info(marker0: org.apache.logging.log4j.Marker, message1: org.apache.logging.log4j.message.Message, throwable2: java.lang.Throwable): void;
							info(marker0: org.apache.logging.log4j.Marker, messageSupplier1: org.apache.logging.log4j.util.MessageSupplier): void;
							info(marker0: org.apache.logging.log4j.Marker, messageSupplier1: org.apache.logging.log4j.util.MessageSupplier, throwable2: java.lang.Throwable): void;
							info(marker0: org.apache.logging.log4j.Marker, charSequence1: string): void;
							info(marker0: org.apache.logging.log4j.Marker, charSequence1: string, throwable2: java.lang.Throwable): void;
							info(marker0: org.apache.logging.log4j.Marker, object1: any): void;
							info(marker0: org.apache.logging.log4j.Marker, object1: any, throwable2: java.lang.Throwable): void;
							info(marker0: org.apache.logging.log4j.Marker, string1: string): void;
							info(marker0: org.apache.logging.log4j.Marker, string1: string, objects2: native.Array<any>): void;
							info(marker0: org.apache.logging.log4j.Marker, string1: string, suppliers2: native.Array<org.apache.logging.log4j.util.Supplier<any>>): void;
							info(marker0: org.apache.logging.log4j.Marker, string1: string, throwable2: java.lang.Throwable): void;
							info(marker0: org.apache.logging.log4j.Marker, supplier1: org.apache.logging.log4j.util.Supplier<any>): void;
							info(marker0: org.apache.logging.log4j.Marker, supplier1: org.apache.logging.log4j.util.Supplier<any>, throwable2: java.lang.Throwable): void;
							info(message0: org.apache.logging.log4j.message.Message): void;
							info(message0: org.apache.logging.log4j.message.Message, throwable1: java.lang.Throwable): void;
							info(messageSupplier0: org.apache.logging.log4j.util.MessageSupplier): void;
							info(messageSupplier0: org.apache.logging.log4j.util.MessageSupplier, throwable1: java.lang.Throwable): void;
							info(charSequence0: string): void;
							info(charSequence0: string, throwable1: java.lang.Throwable): void;
							info(object0: any): void;
							info(object0: any, throwable1: java.lang.Throwable): void;
							info(string0: string): void;
							info(string0: string, objects1: native.Array<any>): void;
							info(string0: string, suppliers1: native.Array<org.apache.logging.log4j.util.Supplier<any>>): void;
							info(string0: string, throwable1: java.lang.Throwable): void;
							info(supplier0: org.apache.logging.log4j.util.Supplier<any>): void;
							info(supplier0: org.apache.logging.log4j.util.Supplier<any>, throwable1: java.lang.Throwable): void;
							info(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any): void;
							info(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any): void;
							info(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any): void;
							info(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any): void;
							info(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any): void;
							info(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any): void;
							info(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any): void;
							info(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any): void;
							info(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any): void;
							info(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any, object11: any): void;
							info(string0: string, object1: any): void;
							info(string0: string, object1: any, object2: any): void;
							info(string0: string, object1: any, object2: any, object3: any): void;
							info(string0: string, object1: any, object2: any, object3: any, object4: any): void;
							info(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any): void;
							info(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any): void;
							info(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any): void;
							info(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any): void;
							info(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any): void;
							info(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any): void;
							isDebugEnabled(): boolean;
							isDebugEnabled(marker0: org.apache.logging.log4j.Marker): boolean;
							isEnabled(level0: org.apache.logging.log4j.Level): boolean;
							isEnabled(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker): boolean;
							isErrorEnabled(): boolean;
							isErrorEnabled(marker0: org.apache.logging.log4j.Marker): boolean;
							isFatalEnabled(): boolean;
							isFatalEnabled(marker0: org.apache.logging.log4j.Marker): boolean;
							isInfoEnabled(): boolean;
							isInfoEnabled(marker0: org.apache.logging.log4j.Marker): boolean;
							isTraceEnabled(): boolean;
							isTraceEnabled(marker0: org.apache.logging.log4j.Marker): boolean;
							isWarnEnabled(): boolean;
							isWarnEnabled(marker0: org.apache.logging.log4j.Marker): boolean;
							log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, message2: org.apache.logging.log4j.message.Message): void;
							log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, message2: org.apache.logging.log4j.message.Message, throwable3: java.lang.Throwable): void;
							log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, messageSupplier2: org.apache.logging.log4j.util.MessageSupplier): void;
							log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, messageSupplier2: org.apache.logging.log4j.util.MessageSupplier, throwable3: java.lang.Throwable): void;
							log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, charSequence2: string): void;
							log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, charSequence2: string, throwable3: java.lang.Throwable): void;
							log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, object2: any): void;
							log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, object2: any, throwable3: java.lang.Throwable): void;
							log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string): void;
							log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, objects3: native.Array<any>): void;
							log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, suppliers3: native.Array<org.apache.logging.log4j.util.Supplier<any>>): void;
							log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, throwable3: java.lang.Throwable): void;
							log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, supplier2: org.apache.logging.log4j.util.Supplier<any>): void;
							log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, supplier2: org.apache.logging.log4j.util.Supplier<any>, throwable3: java.lang.Throwable): void;
							log(level0: org.apache.logging.log4j.Level, message1: org.apache.logging.log4j.message.Message): void;
							log(level0: org.apache.logging.log4j.Level, message1: org.apache.logging.log4j.message.Message, throwable2: java.lang.Throwable): void;
							log(level0: org.apache.logging.log4j.Level, messageSupplier1: org.apache.logging.log4j.util.MessageSupplier): void;
							log(level0: org.apache.logging.log4j.Level, messageSupplier1: org.apache.logging.log4j.util.MessageSupplier, throwable2: java.lang.Throwable): void;
							log(level0: org.apache.logging.log4j.Level, charSequence1: string): void;
							log(level0: org.apache.logging.log4j.Level, charSequence1: string, throwable2: java.lang.Throwable): void;
							log(level0: org.apache.logging.log4j.Level, object1: any): void;
							log(level0: org.apache.logging.log4j.Level, object1: any, throwable2: java.lang.Throwable): void;
							log(level0: org.apache.logging.log4j.Level, string1: string): void;
							log(level0: org.apache.logging.log4j.Level, string1: string, objects2: native.Array<any>): void;
							log(level0: org.apache.logging.log4j.Level, string1: string, suppliers2: native.Array<org.apache.logging.log4j.util.Supplier<any>>): void;
							log(level0: org.apache.logging.log4j.Level, string1: string, throwable2: java.lang.Throwable): void;
							log(level0: org.apache.logging.log4j.Level, supplier1: org.apache.logging.log4j.util.Supplier<any>): void;
							log(level0: org.apache.logging.log4j.Level, supplier1: org.apache.logging.log4j.util.Supplier<any>, throwable2: java.lang.Throwable): void;
							log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, object3: any): void;
							log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, object3: any, object4: any): void;
							log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, object3: any, object4: any, object5: any): void;
							log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, object3: any, object4: any, object5: any, object6: any): void;
							log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, object3: any, object4: any, object5: any, object6: any, object7: any): void;
							log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any): void;
							log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any): void;
							log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any): void;
							log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any, object11: any): void;
							log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any, object11: any, object12: any): void;
							log(level0: org.apache.logging.log4j.Level, string1: string, object2: any): void;
							log(level0: org.apache.logging.log4j.Level, string1: string, object2: any, object3: any): void;
							log(level0: org.apache.logging.log4j.Level, string1: string, object2: any, object3: any, object4: any): void;
							log(level0: org.apache.logging.log4j.Level, string1: string, object2: any, object3: any, object4: any, object5: any): void;
							log(level0: org.apache.logging.log4j.Level, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any): void;
							log(level0: org.apache.logging.log4j.Level, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any): void;
							log(level0: org.apache.logging.log4j.Level, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any): void;
							log(level0: org.apache.logging.log4j.Level, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any): void;
							log(level0: org.apache.logging.log4j.Level, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any): void;
							log(level0: org.apache.logging.log4j.Level, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any, object11: any): void;
							printf(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, objects3: native.Array<any>): void;
							printf(level0: org.apache.logging.log4j.Level, string1: string, objects2: native.Array<any>): void;
							throwing(level0: org.apache.logging.log4j.Level, throwable1: java.lang.Throwable): java.lang.Throwable;
							throwing(throwable0: java.lang.Throwable): java.lang.Throwable;
							trace(marker0: org.apache.logging.log4j.Marker, message1: org.apache.logging.log4j.message.Message): void;
							trace(marker0: org.apache.logging.log4j.Marker, message1: org.apache.logging.log4j.message.Message, throwable2: java.lang.Throwable): void;
							trace(marker0: org.apache.logging.log4j.Marker, messageSupplier1: org.apache.logging.log4j.util.MessageSupplier): void;
							trace(marker0: org.apache.logging.log4j.Marker, messageSupplier1: org.apache.logging.log4j.util.MessageSupplier, throwable2: java.lang.Throwable): void;
							trace(marker0: org.apache.logging.log4j.Marker, charSequence1: string): void;
							trace(marker0: org.apache.logging.log4j.Marker, charSequence1: string, throwable2: java.lang.Throwable): void;
							trace(marker0: org.apache.logging.log4j.Marker, object1: any): void;
							trace(marker0: org.apache.logging.log4j.Marker, object1: any, throwable2: java.lang.Throwable): void;
							trace(marker0: org.apache.logging.log4j.Marker, string1: string): void;
							trace(marker0: org.apache.logging.log4j.Marker, string1: string, objects2: native.Array<any>): void;
							trace(marker0: org.apache.logging.log4j.Marker, string1: string, suppliers2: native.Array<org.apache.logging.log4j.util.Supplier<any>>): void;
							trace(marker0: org.apache.logging.log4j.Marker, string1: string, throwable2: java.lang.Throwable): void;
							trace(marker0: org.apache.logging.log4j.Marker, supplier1: org.apache.logging.log4j.util.Supplier<any>): void;
							trace(marker0: org.apache.logging.log4j.Marker, supplier1: org.apache.logging.log4j.util.Supplier<any>, throwable2: java.lang.Throwable): void;
							trace(message0: org.apache.logging.log4j.message.Message): void;
							trace(message0: org.apache.logging.log4j.message.Message, throwable1: java.lang.Throwable): void;
							trace(messageSupplier0: org.apache.logging.log4j.util.MessageSupplier): void;
							trace(messageSupplier0: org.apache.logging.log4j.util.MessageSupplier, throwable1: java.lang.Throwable): void;
							trace(charSequence0: string): void;
							trace(charSequence0: string, throwable1: java.lang.Throwable): void;
							trace(object0: any): void;
							trace(object0: any, throwable1: java.lang.Throwable): void;
							trace(string0: string): void;
							trace(string0: string, objects1: native.Array<any>): void;
							trace(string0: string, suppliers1: native.Array<org.apache.logging.log4j.util.Supplier<any>>): void;
							trace(string0: string, throwable1: java.lang.Throwable): void;
							trace(supplier0: org.apache.logging.log4j.util.Supplier<any>): void;
							trace(supplier0: org.apache.logging.log4j.util.Supplier<any>, throwable1: java.lang.Throwable): void;
							trace(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any): void;
							trace(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any): void;
							trace(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any): void;
							trace(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any): void;
							trace(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any): void;
							trace(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any): void;
							trace(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any): void;
							trace(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any): void;
							trace(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any): void;
							trace(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any, object11: any): void;
							trace(string0: string, object1: any): void;
							trace(string0: string, object1: any, object2: any): void;
							trace(string0: string, object1: any, object2: any, object3: any): void;
							trace(string0: string, object1: any, object2: any, object3: any, object4: any): void;
							trace(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any): void;
							trace(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any): void;
							trace(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any): void;
							trace(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any): void;
							trace(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any): void;
							trace(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any): void;
							traceEntry(): org.apache.logging.log4j.message.EntryMessage;
							traceEntry(string0: string, objects1: native.Array<any>): org.apache.logging.log4j.message.EntryMessage;
							traceEntry(suppliers0: native.Array<org.apache.logging.log4j.util.Supplier<any>>): org.apache.logging.log4j.message.EntryMessage;
							traceEntry(string0: string, suppliers1: native.Array<org.apache.logging.log4j.util.Supplier<any>>): org.apache.logging.log4j.message.EntryMessage;
							traceEntry(message0: org.apache.logging.log4j.message.Message): org.apache.logging.log4j.message.EntryMessage;
							traceExit(): void;
							traceExit(object0: any): any;
							traceExit(string0: string, object1: any): any;
							traceExit(entryMessage0: org.apache.logging.log4j.message.EntryMessage): void;
							traceExit(entryMessage0: org.apache.logging.log4j.message.EntryMessage, object1: any): any;
							traceExit(message0: org.apache.logging.log4j.message.Message, object1: any): any;
							warn(marker0: org.apache.logging.log4j.Marker, message1: org.apache.logging.log4j.message.Message): void;
							warn(marker0: org.apache.logging.log4j.Marker, message1: org.apache.logging.log4j.message.Message, throwable2: java.lang.Throwable): void;
							warn(marker0: org.apache.logging.log4j.Marker, messageSupplier1: org.apache.logging.log4j.util.MessageSupplier): void;
							warn(marker0: org.apache.logging.log4j.Marker, messageSupplier1: org.apache.logging.log4j.util.MessageSupplier, throwable2: java.lang.Throwable): void;
							warn(marker0: org.apache.logging.log4j.Marker, charSequence1: string): void;
							warn(marker0: org.apache.logging.log4j.Marker, charSequence1: string, throwable2: java.lang.Throwable): void;
							warn(marker0: org.apache.logging.log4j.Marker, object1: any): void;
							warn(marker0: org.apache.logging.log4j.Marker, object1: any, throwable2: java.lang.Throwable): void;
							warn(marker0: org.apache.logging.log4j.Marker, string1: string): void;
							warn(marker0: org.apache.logging.log4j.Marker, string1: string, objects2: native.Array<any>): void;
							warn(marker0: org.apache.logging.log4j.Marker, string1: string, suppliers2: native.Array<org.apache.logging.log4j.util.Supplier<any>>): void;
							warn(marker0: org.apache.logging.log4j.Marker, string1: string, throwable2: java.lang.Throwable): void;
							warn(marker0: org.apache.logging.log4j.Marker, supplier1: org.apache.logging.log4j.util.Supplier<any>): void;
							warn(marker0: org.apache.logging.log4j.Marker, supplier1: org.apache.logging.log4j.util.Supplier<any>, throwable2: java.lang.Throwable): void;
							warn(message0: org.apache.logging.log4j.message.Message): void;
							warn(message0: org.apache.logging.log4j.message.Message, throwable1: java.lang.Throwable): void;
							warn(messageSupplier0: org.apache.logging.log4j.util.MessageSupplier): void;
							warn(messageSupplier0: org.apache.logging.log4j.util.MessageSupplier, throwable1: java.lang.Throwable): void;
							warn(charSequence0: string): void;
							warn(charSequence0: string, throwable1: java.lang.Throwable): void;
							warn(object0: any): void;
							warn(object0: any, throwable1: java.lang.Throwable): void;
							warn(string0: string): void;
							warn(string0: string, objects1: native.Array<any>): void;
							warn(string0: string, suppliers1: native.Array<org.apache.logging.log4j.util.Supplier<any>>): void;
							warn(string0: string, throwable1: java.lang.Throwable): void;
							warn(supplier0: org.apache.logging.log4j.util.Supplier<any>): void;
							warn(supplier0: org.apache.logging.log4j.util.Supplier<any>, throwable1: java.lang.Throwable): void;
							warn(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any): void;
							warn(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any): void;
							warn(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any): void;
							warn(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any): void;
							warn(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any): void;
							warn(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any): void;
							warn(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any): void;
							warn(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any): void;
							warn(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any): void;
							warn(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any, object11: any): void;
							warn(string0: string, object1: any): void;
							warn(string0: string, object1: any, object2: any): void;
							warn(string0: string, object1: any, object2: any, object3: any): void;
							warn(string0: string, object1: any, object2: any, object3: any, object4: any): void;
							warn(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any): void;
							warn(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any): void;
							warn(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any): void;
							warn(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any): void;
							warn(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any): void;
							warn(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any): void;
							logMessage(level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, fqcn: string, location: java.lang.StackTraceElement, message: org.apache.logging.log4j.message.Message, throwable: java.lang.Throwable): void;
							atTrace(): org.apache.logging.log4j.LogBuilder;
							atDebug(): org.apache.logging.log4j.LogBuilder;
							atInfo(): org.apache.logging.log4j.LogBuilder;
							atWarn(): org.apache.logging.log4j.LogBuilder;
							atError(): org.apache.logging.log4j.LogBuilder;
							atFatal(): org.apache.logging.log4j.LogBuilder;
							always(): org.apache.logging.log4j.LogBuilder;
							atLevel(level: org.apache.logging.log4j.Level): org.apache.logging.log4j.LogBuilder;
						});
						public constructor();
						public trace(string0: string, object1: any, object2: any): void;
						public fatal(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any): void;
						public trace(string0: string, throwable1: java.lang.Throwable): void;
						public debug(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any): void;
						public info(string0: string, throwable1: java.lang.Throwable): void;
						public debug(messageSupplier0: org.apache.logging.log4j.util.MessageSupplier): void;
						public warn(marker0: org.apache.logging.log4j.Marker, string1: string, throwable2: java.lang.Throwable): void;
						public fatal(message0: org.apache.logging.log4j.message.Message, throwable1: java.lang.Throwable): void;
						public log(level0: org.apache.logging.log4j.Level, string1: string, object2: any, object3: any, object4: any): void;
						public logIfEnabled(string0: string, level1: org.apache.logging.log4j.Level, marker2: org.apache.logging.log4j.Marker, string3: string, object4: any, object5: any, object6: any, object7: any): void;
						public logIfEnabled(string0: string, level1: org.apache.logging.log4j.Level, marker2: org.apache.logging.log4j.Marker, string3: string, throwable4: java.lang.Throwable): void;
						public warn(string0: string, suppliers1: native.Array<org.apache.logging.log4j.util.Supplier<any>>): void;
						public isFatalEnabled(): boolean;
						public fatal(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any): void;
						public trace(object0: any, throwable1: java.lang.Throwable): void;
						public traceEntry(): org.apache.logging.log4j.message.EntryMessage;
						public error(marker0: org.apache.logging.log4j.Marker, supplier1: org.apache.logging.log4j.util.Supplier<any>): void;
						public warn(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any): void;
						public debug(object0: any, throwable1: java.lang.Throwable): void;
						public debug(marker0: org.apache.logging.log4j.Marker, string1: string): void;
						public always(): org.apache.logging.log4j.LogBuilder;
						public logIfEnabled(string0: string, level1: org.apache.logging.log4j.Level, marker2: org.apache.logging.log4j.Marker, string3: string, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any): void;
						public error(message0: org.apache.logging.log4j.message.Message, throwable1: java.lang.Throwable): void;
						public trace(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any): void;
						public throwing(level0: org.apache.logging.log4j.Level, throwable1: java.lang.Throwable): java.lang.Throwable;
						public error(marker0: org.apache.logging.log4j.Marker, string1: string, suppliers2: native.Array<org.apache.logging.log4j.util.Supplier<any>>): void;
						public info(marker0: org.apache.logging.log4j.Marker, charSequence1: string, throwable2: java.lang.Throwable): void;
						public trace(string0: string, object1: any, object2: any, object3: any): void;
						public trace(string0: string, suppliers1: native.Array<org.apache.logging.log4j.util.Supplier<any>>): void;
						public warn(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any): void;
						public debug(string0: string, object1: any): void;
						public log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any): void;
						public fatal(marker0: org.apache.logging.log4j.Marker, object1: any): void;
						public info(marker0: org.apache.logging.log4j.Marker, string1: string, throwable2: java.lang.Throwable): void;
						public trace(marker0: org.apache.logging.log4j.Marker, message1: org.apache.logging.log4j.message.Message): void;
						public warn(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any): void;
						public error(supplier0: org.apache.logging.log4j.util.Supplier<any>): void;
						public log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, object3: any, object4: any, object5: any, object6: any): void;
						public isEnabled(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, object2: any, throwable3: java.lang.Throwable): boolean;
						public trace(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any): void;
						/** @deprecated */
						public entry(): void;
						public log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, object3: any, object4: any, object5: any, object6: any, object7: any): void;
						public debug(marker0: org.apache.logging.log4j.Marker, supplier1: org.apache.logging.log4j.util.Supplier<any>): void;
						public log(level0: org.apache.logging.log4j.Level, supplier1: org.apache.logging.log4j.util.Supplier<any>): void;
						public log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, object3: any): void;
						public fatal(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any): void;
						public info(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any): void;
						public debug(marker0: org.apache.logging.log4j.Marker, object1: any, throwable2: java.lang.Throwable): void;
						public warn(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any): void;
						public debug(marker0: org.apache.logging.log4j.Marker, string1: string, objects2: native.Array<any>): void;
						public error(string0: string, objects1: native.Array<any>): void;
						public trace(string0: string, object1: any): void;
						public error(messageSupplier0: org.apache.logging.log4j.util.MessageSupplier, throwable1: java.lang.Throwable): void;
						/** @deprecated */
						public exit(): void;
						public isEnabled(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, object3: any): boolean;
						public error(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any): void;
						public warn(object0: any): void;
						public info(string0: string, object1: any): void;
						public trace(messageSupplier0: org.apache.logging.log4j.util.MessageSupplier, throwable1: java.lang.Throwable): void;
						public error(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any): void;
						public trace(object0: any): void;
						public warn(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any): void;
						public debug(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any): void;
						public log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, object3: any, object4: any): void;
						public info(marker0: org.apache.logging.log4j.Marker, string1: string): void;
						public logIfEnabled(string0: string, level1: org.apache.logging.log4j.Level, marker2: org.apache.logging.log4j.Marker, message3: org.apache.logging.log4j.message.Message, throwable4: java.lang.Throwable): void;
						public warn(message0: org.apache.logging.log4j.message.Message, throwable1: java.lang.Throwable): void;
						public error(object0: any, throwable1: java.lang.Throwable): void;
						public fatal(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any): void;
						public info(charSequence0: string): void;
						public warn(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any): void;
						public traceExit(message0: org.apache.logging.log4j.message.Message, object1: any): any;
						public isEnabled(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, object3: any, object4: any): boolean;
						public trace(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any): void;
						public info(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any): void;
						public info(message0: org.apache.logging.log4j.message.Message, throwable1: java.lang.Throwable): void;
						public atWarn(): org.apache.logging.log4j.LogBuilder;
						public debug(string0: string, object1: any, object2: any, object3: any): void;
						public warn(messageSupplier0: org.apache.logging.log4j.util.MessageSupplier, throwable1: java.lang.Throwable): void;
						public info(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any): void;
						public trace(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any, object11: any): void;
						public traceExit(): void;
						public debug(string0: string): void;
						public traceEntry(suppliers0: native.Array<org.apache.logging.log4j.util.Supplier<any>>): org.apache.logging.log4j.message.EntryMessage;
						public error(string0: string, object1: any): void;
						public info(marker0: org.apache.logging.log4j.Marker, string1: string, objects2: native.Array<any>): void;
						public log(level0: org.apache.logging.log4j.Level, string1: string, suppliers2: native.Array<org.apache.logging.log4j.util.Supplier<any>>): void;
						public info(message0: org.apache.logging.log4j.message.Message): void;
						public trace(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any): void;
						public log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, throwable3: java.lang.Throwable): void;
						public error(marker0: org.apache.logging.log4j.Marker, messageSupplier1: org.apache.logging.log4j.util.MessageSupplier): void;
						public info(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any): void;
						public getName(): string;
						public info(object0: any): void;
						public warn(marker0: org.apache.logging.log4j.Marker, object1: any): void;
						public atFatal(): org.apache.logging.log4j.LogBuilder;
						public logIfEnabled(string0: string, level1: org.apache.logging.log4j.Level, marker2: org.apache.logging.log4j.Marker, charSequence3: string, throwable4: java.lang.Throwable): void;
						public logIfEnabled(string0: string, level1: org.apache.logging.log4j.Level, marker2: org.apache.logging.log4j.Marker, string3: string, suppliers4: native.Array<org.apache.logging.log4j.util.Supplier<any>>): void;
						public isEnabled(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, object3: any, object4: any, object5: any): boolean;
						public logIfEnabled(string0: string, level1: org.apache.logging.log4j.Level, marker2: org.apache.logging.log4j.Marker, string3: string, object4: any, object5: any, object6: any, object7: any, object8: any): void;
						public debug(message0: org.apache.logging.log4j.message.Message): void;
						public log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, objects3: native.Array<any>): void;
						public warn(marker0: org.apache.logging.log4j.Marker, message1: org.apache.logging.log4j.message.Message): void;
						public error(marker0: org.apache.logging.log4j.Marker, string1: string): void;
						public info(marker0: org.apache.logging.log4j.Marker, object1: any): void;
						public log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, supplier2: org.apache.logging.log4j.util.Supplier<any>): void;
						public trace(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any): void;
						public info(marker0: org.apache.logging.log4j.Marker, string1: string, suppliers2: native.Array<org.apache.logging.log4j.util.Supplier<any>>): void;
						public debug(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any): void;
						public printf(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, objects3: native.Array<any>): void;
						public fatal(marker0: org.apache.logging.log4j.Marker, object1: any, throwable2: java.lang.Throwable): void;
						public info(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any, object11: any): void;
						public isEnabled(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, objects3: native.Array<any>): boolean;
						public log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, message2: org.apache.logging.log4j.message.Message, throwable3: java.lang.Throwable): void;
						public error(messageSupplier0: org.apache.logging.log4j.util.MessageSupplier): void;
						public warn(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any): void;
						public error(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any): void;
						public trace(marker0: org.apache.logging.log4j.Marker, string1: string, suppliers2: native.Array<org.apache.logging.log4j.util.Supplier<any>>): void;
						public fatal(string0: string, object1: any, object2: any): void;
						public info(supplier0: org.apache.logging.log4j.util.Supplier<any>, throwable1: java.lang.Throwable): void;
						public debug(message0: org.apache.logging.log4j.message.Message, throwable1: java.lang.Throwable): void;
						public fatal(marker0: org.apache.logging.log4j.Marker, charSequence1: string, throwable2: java.lang.Throwable): void;
						public error(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any): void;
						public info(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any): void;
						public fatal(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any): void;
						public debug(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any): void;
						public isEnabled(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, object3: any, object4: any, object5: any, object6: any, object7: any): boolean;
						public log(level0: org.apache.logging.log4j.Level, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any): void;
						public warn(string0: string, object1: any, object2: any): void;
						public fatal(string0: string): void;
						public trace(string0: string, object1: any, object2: any, object3: any, object4: any): void;
						public fatal(marker0: org.apache.logging.log4j.Marker, message1: org.apache.logging.log4j.message.Message, throwable2: java.lang.Throwable): void;
						public error(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any): void;
						public traceExit(string0: string, object1: any): any;
						public log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any, object11: any, object12: any): void;
						public error(marker0: org.apache.logging.log4j.Marker, supplier1: org.apache.logging.log4j.util.Supplier<any>, throwable2: java.lang.Throwable): void;
						public logIfEnabled(string0: string, level1: org.apache.logging.log4j.Level, marker2: org.apache.logging.log4j.Marker, string3: string, object4: any, object5: any, object6: any): void;
						public log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any): void;
						public fatal(string0: string, objects1: native.Array<any>): void;
						public atError(): org.apache.logging.log4j.LogBuilder;
						public trace(marker0: org.apache.logging.log4j.Marker, object1: any, throwable2: java.lang.Throwable): void;
						public info(string0: string, object1: any, object2: any, object3: any, object4: any): void;
						public error(supplier0: org.apache.logging.log4j.util.Supplier<any>, throwable1: java.lang.Throwable): void;
						public info(messageSupplier0: org.apache.logging.log4j.util.MessageSupplier, throwable1: java.lang.Throwable): void;
						public warn(string0: string, objects1: native.Array<any>): void;
						public debug(charSequence0: string): void;
						public error(string0: string, object1: any, object2: any): void;
						public fatal(supplier0: org.apache.logging.log4j.util.Supplier<any>): void;
						public info(marker0: org.apache.logging.log4j.Marker, supplier1: org.apache.logging.log4j.util.Supplier<any>): void;
						public log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, object3: any, object4: any, object5: any): void;
						public isEnabled(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, charSequence2: string, throwable3: java.lang.Throwable): boolean;
						public fatal(marker0: org.apache.logging.log4j.Marker, string1: string, throwable2: java.lang.Throwable): void;
						public debug(marker0: org.apache.logging.log4j.Marker, supplier1: org.apache.logging.log4j.util.Supplier<any>, throwable2: java.lang.Throwable): void;
						public logIfEnabled(string0: string, level1: org.apache.logging.log4j.Level, marker2: org.apache.logging.log4j.Marker, string3: string, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any): void;
						public trace(marker0: org.apache.logging.log4j.Marker, object1: any): void;
						public debug(marker0: org.apache.logging.log4j.Marker, object1: any): void;
						public debug(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any): void;
						public info(string0: string): void;
						public logIfEnabled(string0: string, level1: org.apache.logging.log4j.Level, marker2: org.apache.logging.log4j.Marker, supplier3: org.apache.logging.log4j.util.Supplier<any>, throwable4: java.lang.Throwable): void;
						public fatal(marker0: org.apache.logging.log4j.Marker, messageSupplier1: org.apache.logging.log4j.util.MessageSupplier): void;
						public fatal(marker0: org.apache.logging.log4j.Marker, string1: string, objects2: native.Array<any>): void;
						public isInfoEnabled(): boolean;
						public fatal(string0: string, object1: any): void;
						public debug(marker0: org.apache.logging.log4j.Marker, string1: string, suppliers2: native.Array<org.apache.logging.log4j.util.Supplier<any>>): void;
						public debug(string0: string, object1: any, object2: any): void;
						public info(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any): void;
						public debug(charSequence0: string, throwable1: java.lang.Throwable): void;
						public info(charSequence0: string, throwable1: java.lang.Throwable): void;
						public isDebugEnabled(marker0: org.apache.logging.log4j.Marker): boolean;
						public log(level0: org.apache.logging.log4j.Level, messageSupplier1: org.apache.logging.log4j.util.MessageSupplier): void;
						public log(level0: org.apache.logging.log4j.Level, charSequence1: string, throwable2: java.lang.Throwable): void;
						public fatal(object0: any): void;
						public logIfEnabled(string0: string, level1: org.apache.logging.log4j.Level, marker2: org.apache.logging.log4j.Marker, object3: any, throwable4: java.lang.Throwable): void;
						public debug(supplier0: org.apache.logging.log4j.util.Supplier<any>, throwable1: java.lang.Throwable): void;
						public traceExit(entryMessage0: org.apache.logging.log4j.message.EntryMessage, object1: any): any;
						public log(level0: org.apache.logging.log4j.Level, message1: org.apache.logging.log4j.message.Message): void;
						public isInfoEnabled(marker0: org.apache.logging.log4j.Marker): boolean;
						public atInfo(): org.apache.logging.log4j.LogBuilder;
						public error(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any): void;
						public debug(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any): void;
						public fatal(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any, object11: any): void;
						public warn(string0: string, object1: any): void;
						public debug(string0: string, objects1: native.Array<any>): void;
						public trace(messageSupplier0: org.apache.logging.log4j.util.MessageSupplier): void;
						public logIfEnabled(string0: string, level1: org.apache.logging.log4j.Level, marker2: org.apache.logging.log4j.Marker, messageSupplier3: org.apache.logging.log4j.util.MessageSupplier, throwable4: java.lang.Throwable): void;
						public debug(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any): void;
						public log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, charSequence2: string, throwable3: java.lang.Throwable): void;
						public log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any): void;
						public traceEntry(string0: string, objects1: native.Array<any>): org.apache.logging.log4j.message.EntryMessage;
						public fatal(string0: string, object1: any, object2: any, object3: any, object4: any): void;
						public info(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any): void;
						public trace(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any): void;
						public log(level0: org.apache.logging.log4j.Level, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any, object11: any): void;
						public fatal(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any): void;
						public error(string0: string, object1: any, object2: any, object3: any): void;
						public warn(marker0: org.apache.logging.log4j.Marker, string1: string, suppliers2: native.Array<org.apache.logging.log4j.util.Supplier<any>>): void;
						public fatal(marker0: org.apache.logging.log4j.Marker, message1: org.apache.logging.log4j.message.Message): void;
						public fatal(messageSupplier0: org.apache.logging.log4j.util.MessageSupplier): void;
						public warn(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any, object11: any): void;
						public trace(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any): void;
						public warn(marker0: org.apache.logging.log4j.Marker, supplier1: org.apache.logging.log4j.util.Supplier<any>): void;
						public trace(charSequence0: string): void;
						public info(marker0: org.apache.logging.log4j.Marker, charSequence1: string): void;
						public debug(string0: string, object1: any, object2: any, object3: any, object4: any): void;
						public log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, message2: org.apache.logging.log4j.message.Message): void;
						public trace(marker0: org.apache.logging.log4j.Marker, supplier1: org.apache.logging.log4j.util.Supplier<any>): void;
						public info(marker0: org.apache.logging.log4j.Marker, message1: org.apache.logging.log4j.message.Message): void;
						public fatal(marker0: org.apache.logging.log4j.Marker, messageSupplier1: org.apache.logging.log4j.util.MessageSupplier, throwable2: java.lang.Throwable): void;
						public fatal(messageSupplier0: org.apache.logging.log4j.util.MessageSupplier, throwable1: java.lang.Throwable): void;
						public isEnabled(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any, object11: any, object12: any): boolean;
						public warn(messageSupplier0: org.apache.logging.log4j.util.MessageSupplier): void;
						public warn(string0: string, object1: any, object2: any, object3: any, object4: any): void;
						public error(charSequence0: string): void;
						public fatal(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any): void;
						public isEnabled(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any): boolean;
						public debug(marker0: org.apache.logging.log4j.Marker, message1: org.apache.logging.log4j.message.Message): void;
						public info(marker0: org.apache.logging.log4j.Marker, messageSupplier1: org.apache.logging.log4j.util.MessageSupplier, throwable2: java.lang.Throwable): void;
						public isWarnEnabled(): boolean;
						public debug(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any): void;
						public log(level0: org.apache.logging.log4j.Level, string1: string, object2: any, object3: any): void;
						public warn(string0: string, object1: any, object2: any, object3: any): void;
						public isFatalEnabled(marker0: org.apache.logging.log4j.Marker): boolean;
						public catching(level0: org.apache.logging.log4j.Level, throwable1: java.lang.Throwable): void;
						public log(level0: org.apache.logging.log4j.Level, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any): void;
						public debug(string0: string, throwable1: java.lang.Throwable): void;
						public debug(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any): void;
						public info(string0: string, objects1: native.Array<any>): void;
						public trace(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any): void;
						public error(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any): void;
						public warn(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any): void;
						public fatal(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any): void;
						public trace(charSequence0: string, throwable1: java.lang.Throwable): void;
						public atTrace(): org.apache.logging.log4j.LogBuilder;
						public log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, object2: any): void;
						public trace(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any): void;
						public debug(string0: string, suppliers1: native.Array<org.apache.logging.log4j.util.Supplier<any>>): void;
						public debug(marker0: org.apache.logging.log4j.Marker, messageSupplier1: org.apache.logging.log4j.util.MessageSupplier): void;
						public log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string): void;
						public warn(marker0: org.apache.logging.log4j.Marker, string1: string, objects2: native.Array<any>): void;
						public log(level0: org.apache.logging.log4j.Level, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any): void;
						public info(string0: string, suppliers1: native.Array<org.apache.logging.log4j.util.Supplier<any>>): void;
						public log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, supplier2: org.apache.logging.log4j.util.Supplier<any>, throwable3: java.lang.Throwable): void;
						public info(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any): void;
						public warn(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any): void;
						public error(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any): void;
						public isErrorEnabled(marker0: org.apache.logging.log4j.Marker): boolean;
						public isEnabled(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker): boolean;
						public logIfEnabled(string0: string, level1: org.apache.logging.log4j.Level, marker2: org.apache.logging.log4j.Marker, string3: string, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any, object11: any): void;
						public trace(marker0: org.apache.logging.log4j.Marker, string1: string, throwable2: java.lang.Throwable): void;
						public trace(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any): void;
						public debug(marker0: org.apache.logging.log4j.Marker, charSequence1: string): void;
						public log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, object2: any, throwable3: java.lang.Throwable): void;
						public error(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any): void;
						public info(object0: any, throwable1: java.lang.Throwable): void;
						public error(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any): void;
						public warn(marker0: org.apache.logging.log4j.Marker, supplier1: org.apache.logging.log4j.util.Supplier<any>, throwable2: java.lang.Throwable): void;
						public error(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any): void;
						public error(marker0: org.apache.logging.log4j.Marker, messageSupplier1: org.apache.logging.log4j.util.MessageSupplier, throwable2: java.lang.Throwable): void;
						public fatal(marker0: org.apache.logging.log4j.Marker, string1: string): void;
						public atLevel(level: org.apache.logging.log4j.Level): org.apache.logging.log4j.LogBuilder;
						public isEnabled(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any, object11: any): boolean;
						public log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, messageSupplier2: org.apache.logging.log4j.util.MessageSupplier, throwable3: java.lang.Throwable): void;
						public trace(marker0: org.apache.logging.log4j.Marker, string1: string, objects2: native.Array<any>): void;
						public fatal(marker0: org.apache.logging.log4j.Marker, supplier1: org.apache.logging.log4j.util.Supplier<any>): void;
						public warn(marker0: org.apache.logging.log4j.Marker, message1: org.apache.logging.log4j.message.Message, throwable2: java.lang.Throwable): void;
						public fatal(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any): void;
						public warn(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any): void;
						public isEnabled(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, object3: any, object4: any, object5: any, object6: any): boolean;
						public info(marker0: org.apache.logging.log4j.Marker, supplier1: org.apache.logging.log4j.util.Supplier<any>, throwable2: java.lang.Throwable): void;
						public fatal(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any): void;
						public info(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any): void;
						public throwing(throwable0: java.lang.Throwable): java.lang.Throwable;
						public trace(supplier0: org.apache.logging.log4j.util.Supplier<any>, throwable1: java.lang.Throwable): void;
						public fatal(marker0: org.apache.logging.log4j.Marker, supplier1: org.apache.logging.log4j.util.Supplier<any>, throwable2: java.lang.Throwable): void;
						public debug(object0: any): void;
						public log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any, object11: any): void;
						public fatal(string0: string, suppliers1: native.Array<org.apache.logging.log4j.util.Supplier<any>>): void;
						public warn(supplier0: org.apache.logging.log4j.util.Supplier<any>): void;
						public trace(message0: org.apache.logging.log4j.message.Message): void;
						public logIfEnabled(string0: string, level1: org.apache.logging.log4j.Level, marker2: org.apache.logging.log4j.Marker, string3: string, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any, object11: any, object12: any): void;
						public log(level0: org.apache.logging.log4j.Level, string1: string, throwable2: java.lang.Throwable): void;
						public info(marker0: org.apache.logging.log4j.Marker, messageSupplier1: org.apache.logging.log4j.util.MessageSupplier): void;
						public fatal(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any): void;
						public error(marker0: org.apache.logging.log4j.Marker, charSequence1: string): void;
						public warn(string0: string): void;
						public error(marker0: org.apache.logging.log4j.Marker, message1: org.apache.logging.log4j.message.Message): void;
						public info(supplier0: org.apache.logging.log4j.util.Supplier<any>): void;
						public debug(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any): void;
						public trace(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any): void;
						public debug(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any): void;
						public fatal(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any): void;
						public error(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any, object11: any): void;
						/** @deprecated */
						public exit(object0: any): any;
						public logMessage(level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, fqcn: string, location: java.lang.StackTraceElement, message: org.apache.logging.log4j.message.Message, throwable: java.lang.Throwable): void;
						/** @deprecated */
						public entry(objects0: native.Array<any>): void;
						public logIfEnabled(string0: string, level1: org.apache.logging.log4j.Level, marker2: org.apache.logging.log4j.Marker, string3: string): void;
						public warn(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any): void;
						public info(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any): void;
						public isErrorEnabled(): boolean;
						public trace(marker0: org.apache.logging.log4j.Marker, message1: org.apache.logging.log4j.message.Message, throwable2: java.lang.Throwable): void;
						public printf(level0: org.apache.logging.log4j.Level, string1: string, objects2: native.Array<any>): void;
						public logIfEnabled(string0: string, level1: org.apache.logging.log4j.Level, marker2: org.apache.logging.log4j.Marker, string3: string, objects4: native.Array<any>): void;
						public warn(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any): void;
						public info(messageSupplier0: org.apache.logging.log4j.util.MessageSupplier): void;
						public isTraceEnabled(): boolean;
						public trace(marker0: org.apache.logging.log4j.Marker, string1: string): void;
						public error(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any): void;
						public fatal(marker0: org.apache.logging.log4j.Marker, string1: string, suppliers2: native.Array<org.apache.logging.log4j.util.Supplier<any>>): void;
						public fatal(string0: string, throwable1: java.lang.Throwable): void;
						public warn(marker0: org.apache.logging.log4j.Marker, charSequence1: string): void;
						public warn(charSequence0: string, throwable1: java.lang.Throwable): void;
						public log(level0: org.apache.logging.log4j.Level, string1: string, object2: any, object3: any, object4: any, object5: any): void;
						public error(string0: string): void;
						public error(marker0: org.apache.logging.log4j.Marker, object1: any): void;
						public warn(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any): void;
						public warn(marker0: org.apache.logging.log4j.Marker, messageSupplier1: org.apache.logging.log4j.util.MessageSupplier): void;
						public error(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any): void;
						public logIfEnabled(string0: string, level1: org.apache.logging.log4j.Level, marker2: org.apache.logging.log4j.Marker, string3: string, object4: any, object5: any): void;
						public error(string0: string, object1: any, object2: any, object3: any, object4: any): void;
						public warn(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any): void;
						public log(level0: org.apache.logging.log4j.Level, messageSupplier1: org.apache.logging.log4j.util.MessageSupplier, throwable2: java.lang.Throwable): void;
						public isTraceEnabled(marker0: org.apache.logging.log4j.Marker): boolean;
						public warn(marker0: org.apache.logging.log4j.Marker, messageSupplier1: org.apache.logging.log4j.util.MessageSupplier, throwable2: java.lang.Throwable): void;
						public info(string0: string, object1: any, object2: any): void;
						public error(object0: any): void;
						public catching(throwable0: java.lang.Throwable): void;
						public debug(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any): void;
						public error(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any): void;
						public isDebugEnabled(): boolean;
						public debug(marker0: org.apache.logging.log4j.Marker, messageSupplier1: org.apache.logging.log4j.util.MessageSupplier, throwable2: java.lang.Throwable): void;
						public log(level0: org.apache.logging.log4j.Level, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any): void;
						public traceExit(object0: any): any;
						public isEnabled(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string): boolean;
						public warn(marker0: org.apache.logging.log4j.Marker, string1: string): void;
						public warn(string0: string, throwable1: java.lang.Throwable): void;
						public debug(marker0: org.apache.logging.log4j.Marker, string1: string, throwable2: java.lang.Throwable): void;
						public trace(string0: string, objects1: native.Array<any>): void;
						public info(string0: string, object1: any, object2: any, object3: any): void;
						public error(marker0: org.apache.logging.log4j.Marker, string1: string, objects2: native.Array<any>): void;
						public fatal(message0: org.apache.logging.log4j.message.Message): void;
						public fatal(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any): void;
						public isEnabled(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any): boolean;
						public traceEntry(message0: org.apache.logging.log4j.message.Message): org.apache.logging.log4j.message.EntryMessage;
						public fatal(charSequence0: string): void;
						public trace(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any): void;
						public isEnabled(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any): boolean;
						public log(level0: org.apache.logging.log4j.Level, string1: string, objects2: native.Array<any>): void;
						public traceEntry(string0: string, suppliers1: native.Array<org.apache.logging.log4j.util.Supplier<any>>): org.apache.logging.log4j.message.EntryMessage;
						public trace(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any): void;
						public warn(marker0: org.apache.logging.log4j.Marker, object1: any, throwable2: java.lang.Throwable): void;
						public isEnabled(level0: org.apache.logging.log4j.Level): boolean;
						public error(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any): void;
						public fatal(string0: string, object1: any, object2: any, object3: any): void;
						public log(level0: org.apache.logging.log4j.Level, string1: string, object2: any): void;
						public debug(marker0: org.apache.logging.log4j.Marker, charSequence1: string, throwable2: java.lang.Throwable): void;
						public log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, messageSupplier2: org.apache.logging.log4j.util.MessageSupplier): void;
						public log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, charSequence2: string): void;
						public log(level0: org.apache.logging.log4j.Level, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any): void;
						public log(level0: org.apache.logging.log4j.Level, supplier1: org.apache.logging.log4j.util.Supplier<any>, throwable2: java.lang.Throwable): void;
						public isWarnEnabled(marker0: org.apache.logging.log4j.Marker): boolean;
						public debug(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any): void;
						public error(marker0: org.apache.logging.log4j.Marker, charSequence1: string, throwable2: java.lang.Throwable): void;
						public error(string0: string, suppliers1: native.Array<org.apache.logging.log4j.util.Supplier<any>>): void;
						public error(string0: string, throwable1: java.lang.Throwable): void;
						public debug(messageSupplier0: org.apache.logging.log4j.util.MessageSupplier, throwable1: java.lang.Throwable): void;
						public error(message0: org.apache.logging.log4j.message.Message): void;
						public debug(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any): void;
						public debug(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any): void;
						public warn(supplier0: org.apache.logging.log4j.util.Supplier<any>, throwable1: java.lang.Throwable): void;
						public trace(marker0: org.apache.logging.log4j.Marker, charSequence1: string, throwable2: java.lang.Throwable): void;
						public error(marker0: org.apache.logging.log4j.Marker, message1: org.apache.logging.log4j.message.Message, throwable2: java.lang.Throwable): void;
						public error(marker0: org.apache.logging.log4j.Marker, object1: any, throwable2: java.lang.Throwable): void;
						public trace(message0: org.apache.logging.log4j.message.Message, throwable1: java.lang.Throwable): void;
						public trace(marker0: org.apache.logging.log4j.Marker, supplier1: org.apache.logging.log4j.util.Supplier<any>, throwable2: java.lang.Throwable): void;
						public warn(marker0: org.apache.logging.log4j.Marker, charSequence1: string, throwable2: java.lang.Throwable): void;
						public isEnabled(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, throwable3: java.lang.Throwable): boolean;
						public warn(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any): void;
						public atDebug(): org.apache.logging.log4j.LogBuilder;
						public logIfEnabled(string0: string, level1: org.apache.logging.log4j.Level, marker2: org.apache.logging.log4j.Marker, string3: string, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any, object11: any, object12: any, object13: any): void;
						public debug(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any, object11: any): void;
						public error(charSequence0: string, throwable1: java.lang.Throwable): void;
						public traceExit(entryMessage0: org.apache.logging.log4j.message.EntryMessage): void;
						public trace(marker0: org.apache.logging.log4j.Marker, charSequence1: string): void;
						public trace(string0: string): void;
						public info(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any): void;
						public getMessageFactory(): org.apache.logging.log4j.message.MessageFactory;
						public log(level0: org.apache.logging.log4j.Level, object1: any): void;
						public trace(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any): void;
						public log(level0: org.apache.logging.log4j.Level, string1: string): void;
						public trace(marker0: org.apache.logging.log4j.Marker, messageSupplier1: org.apache.logging.log4j.util.MessageSupplier, throwable2: java.lang.Throwable): void;
						public log(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, suppliers3: native.Array<org.apache.logging.log4j.util.Supplier<any>>): void;
						public trace(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any): void;
						public getLevel(): org.apache.logging.log4j.Level;
						public fatal(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any): void;
						public logIfEnabled(string0: string, level1: org.apache.logging.log4j.Level, marker2: org.apache.logging.log4j.Marker, string3: string, object4: any): void;
						public info(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any): void;
						public error(marker0: org.apache.logging.log4j.Marker, string1: string, throwable2: java.lang.Throwable): void;
						public fatal(object0: any, throwable1: java.lang.Throwable): void;
						public trace(marker0: org.apache.logging.log4j.Marker, messageSupplier1: org.apache.logging.log4j.util.MessageSupplier): void;
						public fatal(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any): void;
						public info(marker0: org.apache.logging.log4j.Marker, message1: org.apache.logging.log4j.message.Message, throwable2: java.lang.Throwable): void;
						public log(level0: org.apache.logging.log4j.Level, object1: any, throwable2: java.lang.Throwable): void;
						public warn(object0: any, throwable1: java.lang.Throwable): void;
						public info(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any): void;
						public info(marker0: org.apache.logging.log4j.Marker, string1: string, object2: any): void;
						public logMessage(string0: string, level1: org.apache.logging.log4j.Level, marker2: org.apache.logging.log4j.Marker, message3: org.apache.logging.log4j.message.Message, throwable4: java.lang.Throwable): void;
						public fatal(charSequence0: string, throwable1: java.lang.Throwable): void;
						public isEnabled(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, message2: org.apache.logging.log4j.message.Message, throwable3: java.lang.Throwable): boolean;
						public fatal(supplier0: org.apache.logging.log4j.util.Supplier<any>, throwable1: java.lang.Throwable): void;
						public warn(message0: org.apache.logging.log4j.message.Message): void;
						public debug(supplier0: org.apache.logging.log4j.util.Supplier<any>): void;
						public warn(charSequence0: string): void;
						public debug(marker0: org.apache.logging.log4j.Marker, message1: org.apache.logging.log4j.message.Message, throwable2: java.lang.Throwable): void;
						public trace(supplier0: org.apache.logging.log4j.util.Supplier<any>): void;
						public log(level0: org.apache.logging.log4j.Level, charSequence1: string): void;
						public fatal(marker0: org.apache.logging.log4j.Marker, charSequence1: string): void;
						public log(level0: org.apache.logging.log4j.Level, message1: org.apache.logging.log4j.message.Message, throwable2: java.lang.Throwable): void;
						public info(marker0: org.apache.logging.log4j.Marker, object1: any, throwable2: java.lang.Throwable): void;
						public info(string0: string, object1: any, object2: any, object3: any, object4: any, object5: any, object6: any, object7: any, object8: any, object9: any, object10: any): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module spi {
					export class ExtendedLoggerWrapper extends org.apache.logging.log4j.spi.AbstractLogger {
						public static class: java.lang.Class<org.apache.logging.log4j.spi.ExtendedLoggerWrapper>;
						public logger: org.apache.logging.log4j.spi.ExtendedLogger;
						public isEnabled(level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any): boolean;
						public isEnabled(level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): boolean;
						public logMessage(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, msgSupplier: org.apache.logging.log4j.util.Supplier<any>, t: java.lang.Throwable): void;
						public logIfEnabled(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any): void;
						public constructor(name: string, messageFactory: org.apache.logging.log4j.message.MessageFactory);
						public isEnabled(level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any): boolean;
						public logMessage(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void;
						public logMessage(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string): void;
						public logMessage(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void;
						public logIfEnabled(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void;
						public isEnabled(level: org.apache.logging.log4j.Level): boolean;
						public logMessage(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void;
						public logMessage(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void;
						public logMessage(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any): void;
						public logMessage(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void;
						public logIfEnabled(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void;
						public constructor();
						public isEnabled(level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): boolean;
						public isEnabled(level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string): boolean;
						public isEnabled(level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any): boolean;
						public logIfEnabled(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, msgSupplier: org.apache.logging.log4j.util.MessageSupplier, t: java.lang.Throwable): void;
						public isEnabled(level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, params: native.Array<any>): boolean;
						public logMessage(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any): void;
						public isEnabled(level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): boolean;
						public logMessage(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, params: native.Array<any>): void;
						public logIfEnabled(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string): void;
						public getLevel(): org.apache.logging.log4j.Level;
						public logIfEnabled(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any): void;
						public isEnabled(level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any): boolean;
						public logIfEnabled(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void;
						public isEnabled(level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: org.apache.logging.log4j.message.Message, t: java.lang.Throwable): boolean;
						public logMessage(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, t: java.lang.Throwable): void;
						public logIfEnabled(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void;
						public isEnabled(level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, t: java.lang.Throwable): boolean;
						public logMessage(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: any, t: java.lang.Throwable): void;
						public logMessage(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, msgSupplier: org.apache.logging.log4j.util.MessageSupplier, t: java.lang.Throwable): void;
						public logIfEnabled(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any): void;
						public isEnabled(level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: any, t: java.lang.Throwable): boolean;
						public logMessage(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any): void;
						public isEnabled(level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): boolean;
						public isEnabled(level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any): boolean;
						public logMessage(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void;
						public logIfEnabled(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void;
						public constructor(logger: org.apache.logging.log4j.spi.ExtendedLogger, name: string, messageFactory: org.apache.logging.log4j.message.MessageFactory);
						public logIfEnabled(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any): void;
						public isEnabled(level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): boolean;
						public logIfEnabled(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, msg: org.apache.logging.log4j.message.Message, t: java.lang.Throwable): void;
						public logIfEnabled(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void;
						public logIfEnabled(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, paramSuppliers: native.Array<org.apache.logging.log4j.util.Supplier<any>>): void;
						public logMessage(level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, fqcn: string, location: java.lang.StackTraceElement, message: org.apache.logging.log4j.message.Message, throwable: java.lang.Throwable): void;
						public logIfEnabled(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, msgSupplier: org.apache.logging.log4j.util.Supplier<any>, t: java.lang.Throwable): void;
						public logIfEnabled(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, params: native.Array<any>): void;
						public logMessage(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, paramSuppliers: native.Array<org.apache.logging.log4j.util.Supplier<any>>): void;
						public logMessage(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any): void;
						public constructor(name: string);
						public logIfEnabled(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, t: java.lang.Throwable): void;
						public isEnabled(level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker): boolean;
						public logMessage(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: org.apache.logging.log4j.message.Message, t: java.lang.Throwable): void;
						public logIfEnabled(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: any, t: java.lang.Throwable): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module spi {
					export class GarbageFreeSortedArrayThreadContextMap extends java.lang.Object implements org.apache.logging.log4j.spi.ReadOnlyThreadContextMap, org.apache.logging.log4j.spi.ObjectThreadContextMap {
						public static class: java.lang.Class<org.apache.logging.log4j.spi.GarbageFreeSortedArrayThreadContextMap>;
						public static INHERITABLE_MAP: string;
						public static DEFAULT_INITIAL_CAPACITY: number;
						public static PROPERTY_NAME_INITIAL_CAPACITY: string;
						public localMap: java.lang.ThreadLocal<org.apache.logging.log4j.util.StringMap>;
						public containsKey(key: string): boolean;
						public constructor();
						public equals(obj: any): boolean;
						public remove(key: string): void;
						public getValue(key: string): any;
						public hashCode(): number;
						public getReadOnlyContextData(): org.apache.logging.log4j.util.StringMap;
						public putValue(key: string, value: any): void;
						public removeAll(keys: java.lang.Iterable<string>): void;
						public toString(): string;
						public putAll(values: java.util.Map<string,string>): void;
						public createStringMap(original: org.apache.logging.log4j.util.ReadOnlyStringMap): org.apache.logging.log4j.util.StringMap;
						public putAllValues(values: java.util.Map<any,any>): void;
						public get(key: string): string;
						public put(key: string, value: string): void;
						public getCopy(): java.util.Map<string,string>;
						public getImmutableMapOrNull(): java.util.Map<string,string>;
						public isEmpty(): boolean;
						public clear(): void;
						public createStringMap(): org.apache.logging.log4j.util.StringMap;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module spi {
					export class LocationAwareLogger extends java.lang.Object {
						public static class: java.lang.Class<org.apache.logging.log4j.spi.LocationAwareLogger>;
						/**
						 * Constructs a new instance of the org.apache.logging.log4j.spi.LocationAwareLogger interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							logMessage(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, stackTraceElement3: java.lang.StackTraceElement, message4: org.apache.logging.log4j.message.Message, throwable5: java.lang.Throwable): void;
						});
						public constructor();
						public logMessage(level0: org.apache.logging.log4j.Level, marker1: org.apache.logging.log4j.Marker, string2: string, stackTraceElement3: java.lang.StackTraceElement, message4: org.apache.logging.log4j.message.Message, throwable5: java.lang.Throwable): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module spi {
					export class LoggerAdapter<L>  extends java.io.Closeable {
						public static class: java.lang.Class<org.apache.logging.log4j.spi.LoggerAdapter<any>>;
						/**
						 * Constructs a new instance of the org.apache.logging.log4j.spi.LoggerAdapter<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getLogger(string0: string): any;
							close(): void;
							close(): void;
						});
						public constructor();
						public close(): void;
						public getLogger(string0: string): any;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module spi {
					export class LoggerContext extends java.lang.Object {
						public static class: java.lang.Class<org.apache.logging.log4j.spi.LoggerContext>;
						/**
						 * Constructs a new instance of the org.apache.logging.log4j.spi.LoggerContext interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getExternalContext(): any;
							getObject(key: string): any;
							putObject(key: string, value: any): any;
							putObjectIfAbsent(key: string, value: any): any;
							removeObject(key: string): any;
							removeObject(key: string, value: any): boolean;
							getLogger(string0: string): org.apache.logging.log4j.spi.ExtendedLogger;
							getLogger(string0: string, messageFactory1: org.apache.logging.log4j.message.MessageFactory): org.apache.logging.log4j.spi.ExtendedLogger;
							hasLogger(string0: string): boolean;
							hasLogger(string0: string, messageFactory1: org.apache.logging.log4j.message.MessageFactory): boolean;
							hasLogger(string0: string, class1: java.lang.Class<any>): boolean;
						});
						public constructor();
						public hasLogger(string0: string): boolean;
						public putObject(key: string, value: any): any;
						public getObject(key: string): any;
						public putObjectIfAbsent(key: string, value: any): any;
						public getLogger(string0: string): org.apache.logging.log4j.spi.ExtendedLogger;
						public hasLogger(string0: string, class1: java.lang.Class<any>): boolean;
						public getExternalContext(): any;
						public hasLogger(string0: string, messageFactory1: org.apache.logging.log4j.message.MessageFactory): boolean;
						public removeObject(key: string, value: any): boolean;
						public removeObject(key: string): any;
						public getLogger(string0: string, messageFactory1: org.apache.logging.log4j.message.MessageFactory): org.apache.logging.log4j.spi.ExtendedLogger;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module spi {
					export class LoggerContextFactory extends java.lang.Object {
						public static class: java.lang.Class<org.apache.logging.log4j.spi.LoggerContextFactory>;
						/**
						 * Constructs a new instance of the org.apache.logging.log4j.spi.LoggerContextFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							shutdown(fqcn: string, loader: java.lang.ClassLoader, currentContext: boolean, allContexts: boolean): void;
							hasContext(fqcn: string, loader: java.lang.ClassLoader, currentContext: boolean): boolean;
							getContext(string0: string, classLoader1: java.lang.ClassLoader, object2: any, boolean3: boolean): org.apache.logging.log4j.spi.LoggerContext;
							getContext(string0: string, classLoader1: java.lang.ClassLoader, object2: any, boolean3: boolean, uRI4: java.net.URI, string5: string): org.apache.logging.log4j.spi.LoggerContext;
							removeContext(loggerContext0: org.apache.logging.log4j.spi.LoggerContext): void;
						});
						public constructor();
						public getContext(string0: string, classLoader1: java.lang.ClassLoader, object2: any, boolean3: boolean): org.apache.logging.log4j.spi.LoggerContext;
						public hasContext(fqcn: string, loader: java.lang.ClassLoader, currentContext: boolean): boolean;
						public getContext(string0: string, classLoader1: java.lang.ClassLoader, object2: any, boolean3: boolean, uRI4: java.net.URI, string5: string): org.apache.logging.log4j.spi.LoggerContext;
						public removeContext(loggerContext0: org.apache.logging.log4j.spi.LoggerContext): void;
						public shutdown(fqcn: string, loader: java.lang.ClassLoader, currentContext: boolean, allContexts: boolean): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module spi {
					export class LoggerContextKey extends java.lang.Object {
						public static class: java.lang.Class<org.apache.logging.log4j.spi.LoggerContextKey>;
						public constructor();
						public static create(name: string): string;
						public static create(name: string, messageFactoryClass: java.lang.Class<any>): string;
						public static create(name: string, messageFactory: org.apache.logging.log4j.message.MessageFactory): string;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module spi {
					export class LoggerContextShutdownAware extends java.lang.Object {
						public static class: java.lang.Class<org.apache.logging.log4j.spi.LoggerContextShutdownAware>;
						/**
						 * Constructs a new instance of the org.apache.logging.log4j.spi.LoggerContextShutdownAware interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							contextShutdown(loggerContext0: org.apache.logging.log4j.spi.LoggerContext): void;
						});
						public constructor();
						public contextShutdown(loggerContext0: org.apache.logging.log4j.spi.LoggerContext): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module spi {
					export class LoggerContextShutdownEnabled extends java.lang.Object {
						public static class: java.lang.Class<org.apache.logging.log4j.spi.LoggerContextShutdownEnabled>;
						/**
						 * Constructs a new instance of the org.apache.logging.log4j.spi.LoggerContextShutdownEnabled interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							addShutdownListener(loggerContextShutdownAware0: org.apache.logging.log4j.spi.LoggerContextShutdownAware): void;
							getListeners(): java.util.List<org.apache.logging.log4j.spi.LoggerContextShutdownAware>;
						});
						public constructor();
						public getListeners(): java.util.List<org.apache.logging.log4j.spi.LoggerContextShutdownAware>;
						public addShutdownListener(loggerContextShutdownAware0: org.apache.logging.log4j.spi.LoggerContextShutdownAware): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module spi {
					export class LoggerRegistry<T>  extends java.lang.Object {
						public static class: java.lang.Class<org.apache.logging.log4j.spi.LoggerRegistry<any>>;
						public constructor(factory: org.apache.logging.log4j.spi.LoggerRegistry.MapFactory<T>);
						public constructor();
						public getLoggers(): java.util.Collection<T>;
						public getLoggers(destination: java.util.Collection<T>): java.util.Collection<T>;
						public hasLogger(name: string): boolean;
						public getLogger(name: string, messageFactory: org.apache.logging.log4j.message.MessageFactory): T;
						public hasLogger(name: string, messageFactory: org.apache.logging.log4j.message.MessageFactory): boolean;
						public getLogger(name: string): T;
						public putIfAbsent(name: string, messageFactory: org.apache.logging.log4j.message.MessageFactory, logger: T): void;
						public hasLogger(name: string, messageFactoryClass: java.lang.Class<any>): boolean;
					}
					export module LoggerRegistry {
						export class ConcurrentMapFactory<T>  extends org.apache.logging.log4j.spi.LoggerRegistry.MapFactory<any> {
							public static class: java.lang.Class<org.apache.logging.log4j.spi.LoggerRegistry.ConcurrentMapFactory<any>>;
							public constructor();
							public createOuterMap(): java.util.Map<string,java.util.Map<string,any>>;
							public putIfAbsent(innerMap: java.util.Map<string,any>, name: string, logger: any): void;
							public createInnerMap(): java.util.Map<string,any>;
						}
						export class MapFactory<T>  extends java.lang.Object {
							public static class: java.lang.Class<org.apache.logging.log4j.spi.LoggerRegistry.MapFactory<any>>;
							/**
							 * Constructs a new instance of the org.apache.logging.log4j.spi.LoggerRegistry() when extending the interface class.
							 */
							public constructor(implementation: {
								createInnerMap(): java.util.Map<string,T>;
								createOuterMap(): java.util.Map<string,java.util.Map<string,T>>;
								putIfAbsent(map0: java.util.Map<string,T>, string1: string, extendedLogger2: T): void;
							});
							public constructor();
							public putIfAbsent(map0: java.util.Map<string,T>, string1: string, extendedLogger2: T): void;
							public createInnerMap(): java.util.Map<string,T>;
							public createOuterMap(): java.util.Map<string,java.util.Map<string,T>>;
						}
						export class WeakMapFactory<T>  extends org.apache.logging.log4j.spi.LoggerRegistry.MapFactory<any> {
							public static class: java.lang.Class<org.apache.logging.log4j.spi.LoggerRegistry.WeakMapFactory<any>>;
							public constructor();
							public createOuterMap(): java.util.Map<string,java.util.Map<string,any>>;
							public putIfAbsent(innerMap: java.util.Map<string,any>, name: string, logger: any): void;
							public createInnerMap(): java.util.Map<string,any>;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module spi {
					export class MessageFactory2Adapter extends java.lang.Object implements org.apache.logging.log4j.message.MessageFactory2 {
						public static class: java.lang.Class<org.apache.logging.log4j.spi.MessageFactory2Adapter>;
						public newMessage(message: string, params: native.Array<any>): org.apache.logging.log4j.message.Message;
						public newMessage(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: string, p0: any, p1: any, p2: any, p3: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: string, p0: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: string): org.apache.logging.log4j.message.Message;
						public newMessage(charSequence: string): org.apache.logging.log4j.message.Message;
						public newMessage(message: string, p0: any, p1: any, p2: any, p3: any, p4: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: string, p0: any, p1: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): org.apache.logging.log4j.message.Message;
						public newMessage(message: string, p0: any, p1: any, p2: any): org.apache.logging.log4j.message.Message;
						public getOriginal(): org.apache.logging.log4j.message.MessageFactory;
						public newMessage(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): org.apache.logging.log4j.message.Message;
						public constructor(wrapped: org.apache.logging.log4j.message.MessageFactory);
						public newMessage(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): org.apache.logging.log4j.message.Message;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module spi {
					export class MutableThreadContextStack extends java.lang.Object implements org.apache.logging.log4j.spi.ThreadContextStack, org.apache.logging.log4j.util.StringBuilderFormattable {
						public static class: java.lang.Class<org.apache.logging.log4j.spi.MutableThreadContextStack>;
						public equals(obj: any): boolean;
						public copy(): org.apache.logging.log4j.spi.ThreadContextStack;
						public iterator(): java.util.Iterator<any>;
						public retainAll(objects: java.util.Collection<any>): boolean;
						public stream(): java.util.stream.Stream<any>;
						public hashCode(): number;
						public getImmutableStackOrNull(): org.apache.logging.log4j.ThreadContext.ContextStack;
						public constructor(list: java.util.List<string>);
						public removeIf(filter: any /* any*/): boolean;
						public push(message: string): void;
						public removeAll(objects: java.util.Collection<any>): boolean;
						public contains(o: any): boolean;
						public add(object0: any): boolean;
						public toArray(ts: native.Array<any>): native.Array<any>;
						public spliterator(): java.util.Spliterator<any>;
						public isEmpty(): boolean;
						public iterator(): java.util.Iterator<string>;
						public size(): number;
						public containsAll(objects: java.util.Collection<any>): boolean;
						public asList(): java.util.List<string>;
						public isFrozen(): boolean;
						public constructor();
						public copy(): org.apache.logging.log4j.ThreadContext.ContextStack;
						public addAll(strings: java.util.Collection<any>): boolean;
						public remove(o: any): boolean;
						public parallelStream(): java.util.stream.Stream<any>;
						public freeze(): void;
						public toString(): string;
						public pop(): string;
						public formatTo(buffer: java.lang.StringBuilder): void;
						public peek(): string;
						public add(s: string): boolean;
						public trim(depth: number): void;
						public clear(): void;
						public getDepth(): number;
						public forEach(action: any /* any*/): void;
						public toArray(): native.Array<any>;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module spi {
					export class NoOpThreadContextMap extends java.lang.Object implements org.apache.logging.log4j.spi.ThreadContextMap {
						public static class: java.lang.Class<org.apache.logging.log4j.spi.NoOpThreadContextMap>;
						public containsKey(key: string): boolean;
						public get(key: string): string;
						public constructor();
						public put(key: string, value: string): void;
						public remove(key: string): void;
						public getCopy(): java.util.Map<string,string>;
						public getImmutableMapOrNull(): java.util.Map<string,string>;
						public isEmpty(): boolean;
						public clear(): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module spi {
					export class ObjectThreadContextMap extends java.lang.Object implements org.apache.logging.log4j.spi.CleanableThreadContextMap {
						public static class: java.lang.Class<org.apache.logging.log4j.spi.ObjectThreadContextMap>;
						/**
						 * Constructs a new instance of the org.apache.logging.log4j.spi.ObjectThreadContextMap interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getValue(string0: string): any;
							putValue(string0: string, object1: any): void;
							putAllValues(map0: java.util.Map<any,any>): void;
							removeAll(iterable0: java.lang.Iterable<string>): void;
							putAll(map0: java.util.Map<string,string>): void;
							getReadOnlyContextData(): org.apache.logging.log4j.util.StringMap;
							clear(): void;
							containsKey(string0: string): boolean;
							get(string0: string): string;
							getCopy(): java.util.Map<string,string>;
							getImmutableMapOrNull(): java.util.Map<string,string>;
							isEmpty(): boolean;
							put(string0: string, string1: string): void;
							remove(string0: string): void;
						});
						public constructor();
						public containsKey(string0: string): boolean;
						public getReadOnlyContextData(): org.apache.logging.log4j.util.StringMap;
						public get(string0: string): string;
						public put(string0: string, string1: string): void;
						public putAllValues(map0: java.util.Map<any,any>): void;
						public getValue(string0: string): any;
						public removeAll(iterable0: java.lang.Iterable<string>): void;
						public remove(string0: string): void;
						public getCopy(): java.util.Map<string,string>;
						public getImmutableMapOrNull(): java.util.Map<string,string>;
						public isEmpty(): boolean;
						public clear(): void;
						public putAll(map0: java.util.Map<string,string>): void;
						public putValue(string0: string, object1: any): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module spi {
					export class Provider extends java.lang.Object {
						public static class: java.lang.Class<org.apache.logging.log4j.spi.Provider>;
						public static FACTORY_PRIORITY: string;
						public static THREAD_CONTEXT_MAP: string;
						public static LOGGER_CONTEXT_FACTORY: string;
						public getVersions(): string;
						public loadThreadContextMap(): java.lang.Class<any>;
						public getThreadContextMap(): string;
						public equals(obj: any): boolean;
						public constructor(priority: java.lang.Integer, versions: string, loggerContextFactoryClass: java.lang.Class<any>, threadContextMapClass: java.lang.Class<any>);
						public getPriority(): java.lang.Integer;
						public hashCode(): number;
						public getClassName(): string;
						public toString(): string;
						public constructor(props: java.util.Properties, url: java.net.URL, classLoader: java.lang.ClassLoader);
						public constructor(priority: java.lang.Integer, versions: string, loggerContextFactoryClass: java.lang.Class<any>);
						public loadLoggerContextFactory(): java.lang.Class<any>;
						public equals(o: any): boolean;
						public getUrl(): java.net.URL;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module spi {
					export class ReadOnlyThreadContextMap extends java.lang.Object {
						public static class: java.lang.Class<org.apache.logging.log4j.spi.ReadOnlyThreadContextMap>;
						/**
						 * Constructs a new instance of the org.apache.logging.log4j.spi.ReadOnlyThreadContextMap interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							clear(): void;
							containsKey(string0: string): boolean;
							get(string0: string): string;
							getCopy(): java.util.Map<string,string>;
							getImmutableMapOrNull(): java.util.Map<string,string>;
							getReadOnlyContextData(): org.apache.logging.log4j.util.StringMap;
							isEmpty(): boolean;
						});
						public constructor();
						public containsKey(string0: string): boolean;
						public getCopy(): java.util.Map<string,string>;
						public getImmutableMapOrNull(): java.util.Map<string,string>;
						public isEmpty(): boolean;
						public getReadOnlyContextData(): org.apache.logging.log4j.util.StringMap;
						public clear(): void;
						public get(string0: string): string;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module spi {
					export class StandardLevel {
						public static class: java.lang.Class<org.apache.logging.log4j.spi.StandardLevel>;
						public static OFF: org.apache.logging.log4j.spi.StandardLevel;
						public static FATAL: org.apache.logging.log4j.spi.StandardLevel;
						public static ERROR: org.apache.logging.log4j.spi.StandardLevel;
						public static WARN: org.apache.logging.log4j.spi.StandardLevel;
						public static INFO: org.apache.logging.log4j.spi.StandardLevel;
						public static DEBUG: org.apache.logging.log4j.spi.StandardLevel;
						public static TRACE: org.apache.logging.log4j.spi.StandardLevel;
						public static ALL: org.apache.logging.log4j.spi.StandardLevel;
						public static getStandardLevel(intLevel: number): org.apache.logging.log4j.spi.StandardLevel;
						public intLevel(): number;
						public static valueOf(name: string): org.apache.logging.log4j.spi.StandardLevel;
						public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
						public static values(): native.Array<org.apache.logging.log4j.spi.StandardLevel>;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module spi {
					export class Terminable extends java.lang.Object {
						public static class: java.lang.Class<org.apache.logging.log4j.spi.Terminable>;
						/**
						 * Constructs a new instance of the org.apache.logging.log4j.spi.Terminable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							terminate(): void;
						});
						public constructor();
						public terminate(): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module spi {
					export class ThreadContextMap extends java.lang.Object {
						public static class: java.lang.Class<org.apache.logging.log4j.spi.ThreadContextMap>;
						/**
						 * Constructs a new instance of the org.apache.logging.log4j.spi.ThreadContextMap interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							clear(): void;
							containsKey(string0: string): boolean;
							get(string0: string): string;
							getCopy(): java.util.Map<string,string>;
							getImmutableMapOrNull(): java.util.Map<string,string>;
							isEmpty(): boolean;
							put(string0: string, string1: string): void;
							remove(string0: string): void;
						});
						public constructor();
						public remove(string0: string): void;
						public containsKey(string0: string): boolean;
						public getCopy(): java.util.Map<string,string>;
						public getImmutableMapOrNull(): java.util.Map<string,string>;
						public isEmpty(): boolean;
						public clear(): void;
						public get(string0: string): string;
						public put(string0: string, string1: string): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module spi {
					export class ThreadContextMap2 extends java.lang.Object implements org.apache.logging.log4j.spi.ThreadContextMap {
						public static class: java.lang.Class<org.apache.logging.log4j.spi.ThreadContextMap2>;
						/**
						 * Constructs a new instance of the org.apache.logging.log4j.spi.ThreadContextMap2 interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							putAll(map0: java.util.Map<string,string>): void;
							getReadOnlyContextData(): org.apache.logging.log4j.util.StringMap;
							clear(): void;
							containsKey(string0: string): boolean;
							get(string0: string): string;
							getCopy(): java.util.Map<string,string>;
							getImmutableMapOrNull(): java.util.Map<string,string>;
							isEmpty(): boolean;
							put(string0: string, string1: string): void;
							remove(string0: string): void;
						});
						public constructor();
						public remove(string0: string): void;
						public containsKey(string0: string): boolean;
						public getCopy(): java.util.Map<string,string>;
						public getImmutableMapOrNull(): java.util.Map<string,string>;
						public isEmpty(): boolean;
						public getReadOnlyContextData(): org.apache.logging.log4j.util.StringMap;
						public clear(): void;
						public get(string0: string): string;
						public put(string0: string, string1: string): void;
						public putAll(map0: java.util.Map<string,string>): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module spi {
					export class ThreadContextMapFactory extends java.lang.Object {
						public static class: java.lang.Class<org.apache.logging.log4j.spi.ThreadContextMapFactory>;
						public static createThreadContextMap(): org.apache.logging.log4j.spi.ThreadContextMap;
						public static init(): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module spi {
					export class ThreadContextStack extends java.lang.Object implements org.apache.logging.log4j.ThreadContext.ContextStack {
						public static class: java.lang.Class<org.apache.logging.log4j.spi.ThreadContextStack>;
						/**
						 * Constructs a new instance of the org.apache.logging.log4j.spi.ThreadContextStack interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							pop(): string;
							peek(): string;
							push(string0: string): void;
							getDepth(): number;
							asList(): java.util.List<string>;
							trim(int0: number): void;
							copy(): org.apache.logging.log4j.ThreadContext.ContextStack;
							getImmutableStackOrNull(): org.apache.logging.log4j.ThreadContext.ContextStack;
							size(): number;
							isEmpty(): boolean;
							contains(object0: any): boolean;
							iterator(): java.util.Iterator<any>;
							toArray(): native.Array<any>;
							toArray(objects0: native.Array<any>): native.Array<any>;
							add(object0: any): boolean;
							remove(object0: any): boolean;
							containsAll(collection0: java.util.Collection<any>): boolean;
							addAll(collection0: java.util.Collection<any>): boolean;
							removeAll(collection0: java.util.Collection<any>): boolean;
							removeIf(filter: any /* any*/): boolean;
							retainAll(collection0: java.util.Collection<any>): boolean;
							clear(): void;
							equals(object0: any): boolean;
							hashCode(): number;
							spliterator(): java.util.Spliterator<any>;
							stream(): java.util.stream.Stream<any>;
							parallelStream(): java.util.stream.Stream<any>;
							iterator(): java.util.Iterator<any>;
							forEach(action: any /* any*/): void;
							spliterator(): java.util.Spliterator<any>;
						});
						public constructor();
						public equals(obj: any): boolean;
						public removeAll(collection0: java.util.Collection<any>): boolean;
						public iterator(): java.util.Iterator<any>;
						public stream(): java.util.stream.Stream<any>;
						public getImmutableStackOrNull(): org.apache.logging.log4j.ThreadContext.ContextStack;
						public hashCode(): number;
						public removeIf(filter: any /* any*/): boolean;
						public add(object0: any): boolean;
						public spliterator(): java.util.Spliterator<any>;
						public toArray(objects0: native.Array<any>): native.Array<any>;
						public isEmpty(): boolean;
						public remove(object0: any): boolean;
						public size(): number;
						public asList(): java.util.List<string>;
						public copy(): org.apache.logging.log4j.ThreadContext.ContextStack;
						public containsAll(collection0: java.util.Collection<any>): boolean;
						public retainAll(collection0: java.util.Collection<any>): boolean;
						public parallelStream(): java.util.stream.Stream<any>;
						public pop(): string;
						public trim(int0: number): void;
						public push(string0: string): void;
						public contains(object0: any): boolean;
						public peek(): string;
						public addAll(collection0: java.util.Collection<any>): boolean;
						public clear(): void;
						public getDepth(): number;
						public forEach(action: any /* any*/): void;
						public toArray(): native.Array<any>;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module status {
					export class StatusConsoleListener extends java.lang.Object implements org.apache.logging.log4j.status.StatusListener {
						public static class: java.lang.Class<org.apache.logging.log4j.status.StatusConsoleListener>;
						public getStatusLevel(): org.apache.logging.log4j.Level;
						public log(data: org.apache.logging.log4j.status.StatusData): void;
						public close(): void;
						public constructor(level: org.apache.logging.log4j.Level, stream: java.io.PrintStream);
						public setFilters(filters: native.Array<string>): void;
						public constructor(level: org.apache.logging.log4j.Level);
						public setLevel(level: org.apache.logging.log4j.Level): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module status {
					export class StatusData extends java.lang.Object implements java.io.Serializable {
						public static class: java.lang.Class<org.apache.logging.log4j.status.StatusData>;
						public getThreadName(): string;
						public getTimestamp(): number;
						public getLevel(): org.apache.logging.log4j.Level;
						public constructor(caller: java.lang.StackTraceElement, level: org.apache.logging.log4j.Level, msg: org.apache.logging.log4j.message.Message, t: java.lang.Throwable, threadName: string);
						public getStackTraceElement(): java.lang.StackTraceElement;
						public getFormattedStatus(): string;
						public getThrowable(): java.lang.Throwable;
						public getMessage(): org.apache.logging.log4j.message.Message;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module status {
					export class StatusListener extends java.lang.Object implements java.io.Closeable, java.util.EventListener {
						public static class: java.lang.Class<org.apache.logging.log4j.status.StatusListener>;
						/**
						 * Constructs a new instance of the org.apache.logging.log4j.status.StatusListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							log(statusData0: org.apache.logging.log4j.status.StatusData): void;
							getStatusLevel(): org.apache.logging.log4j.Level;
							close(): void;
							close(): void;
						});
						public constructor();
						public log(statusData0: org.apache.logging.log4j.status.StatusData): void;
						public getStatusLevel(): org.apache.logging.log4j.Level;
						public close(): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module status {
					export class StatusLogger extends org.apache.logging.log4j.spi.AbstractLogger {
						public static class: java.lang.Class<org.apache.logging.log4j.status.StatusLogger>;
						public static MAX_STATUS_ENTRIES: string;
						public static DEFAULT_STATUS_LISTENER_LEVEL: string;
						public static STATUS_DATE_FORMAT: string;
						public isEnabled(level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any): boolean;
						public isEnabled(level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): boolean;
						public logMessage(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, msgSupplier: org.apache.logging.log4j.util.Supplier<any>, t: java.lang.Throwable): void;
						public logIfEnabled(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any): void;
						public setLevel(level: org.apache.logging.log4j.Level): void;
						public isEnabled(level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any): boolean;
						public logMessage(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void;
						public logMessage(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string): void;
						public logMessage(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void;
						public logIfEnabled(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void;
						public isEnabled(level: org.apache.logging.log4j.Level): boolean;
						public logMessage(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void;
						public logMessage(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void;
						public logMessage(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any): void;
						public logMessage(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void;
						public logIfEnabled(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void;
						public isEnabled(level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): boolean;
						public logMessage(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, msg: org.apache.logging.log4j.message.Message, t: java.lang.Throwable): void;
						public isEnabled(level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string): boolean;
						public isEnabled(level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any): boolean;
						public logIfEnabled(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, msgSupplier: org.apache.logging.log4j.util.MessageSupplier, t: java.lang.Throwable): void;
						public getStatusData(): java.util.List<org.apache.logging.log4j.status.StatusData>;
						public isEnabled(level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, params: native.Array<any>): boolean;
						public registerListener(listener: org.apache.logging.log4j.status.StatusListener): void;
						public logMessage(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any): void;
						public clear(): void;
						public reset(): void;
						public isEnabled(level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): boolean;
						public logMessage(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, params: native.Array<any>): void;
						public logIfEnabled(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string): void;
						public getLevel(): org.apache.logging.log4j.Level;
						public logIfEnabled(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any): void;
						public isEnabled(level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any): boolean;
						public logIfEnabled(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void;
						public isEnabled(level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: org.apache.logging.log4j.message.Message, t: java.lang.Throwable): boolean;
						public logMessage(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, t: java.lang.Throwable): void;
						public logIfEnabled(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void;
						public isEnabled(level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, t: java.lang.Throwable): boolean;
						public updateListenerLevel(status: org.apache.logging.log4j.Level): void;
						public logMessage(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: any, t: java.lang.Throwable): void;
						public logMessage(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, msgSupplier: org.apache.logging.log4j.util.MessageSupplier, t: java.lang.Throwable): void;
						public logIfEnabled(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any): void;
						public logMessage(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any): void;
						public isEnabled(level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: any, t: java.lang.Throwable): boolean;
						public static getLogger(): org.apache.logging.log4j.status.StatusLogger;
						public isEnabled(level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): boolean;
						public isEnabled(level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any): boolean;
						public logMessage(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void;
						public logIfEnabled(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void;
						public logIfEnabled(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any): void;
						public isEnabled(level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): boolean;
						public logIfEnabled(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, msg: org.apache.logging.log4j.message.Message, t: java.lang.Throwable): void;
						public logIfEnabled(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void;
						public logIfEnabled(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, paramSuppliers: native.Array<org.apache.logging.log4j.util.Supplier<any>>): void;
						public logMessage(level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, fqcn: string, location: java.lang.StackTraceElement, message: org.apache.logging.log4j.message.Message, throwable: java.lang.Throwable): void;
						public logIfEnabled(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, msgSupplier: org.apache.logging.log4j.util.Supplier<any>, t: java.lang.Throwable): void;
						public logIfEnabled(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, params: native.Array<any>): void;
						public getListeners(): java.lang.Iterable<org.apache.logging.log4j.status.StatusListener>;
						public logMessage(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, paramSuppliers: native.Array<org.apache.logging.log4j.util.Supplier<any>>): void;
						public logMessage(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, p0: any, p1: any): void;
						public logIfEnabled(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: string, t: java.lang.Throwable): void;
						public isEnabled(level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker): boolean;
						public logIfEnabled(fqcn: string, level: org.apache.logging.log4j.Level, marker: org.apache.logging.log4j.Marker, message: any, t: java.lang.Throwable): void;
						public removeListener(listener: org.apache.logging.log4j.status.StatusListener): void;
					}
					export module StatusLogger {
						export class BoundedQueue<E>  extends java.util.concurrent.ConcurrentLinkedQueue<any> {
							public static class: java.lang.Class<org.apache.logging.log4j.status.StatusLogger.BoundedQueue<any>>;
							public size(): number;
							public hashCode(): number;
							public spliterator(): java.util.Spliterator<any>;
							public element(): any;
							public retainAll(c: java.util.Collection<any>): boolean;
							public equals(obj: any): boolean;
							public add(e: any): boolean;
							public toArray(): native.Array<any>;
							public poll(): any;
							public peek(): any;
							public stream(): java.util.stream.Stream<any>;
							public remove(): any;
							public toArray(a: native.Array<any>): native.Array<any>;
							public iterator(): java.util.Iterator<any>;
							public contains(o: any): boolean;
							public containsAll(c: java.util.Collection<any>): boolean;
							public clear(): void;
							public offer(e: any): boolean;
							public addAll(c: java.util.Collection<any>): boolean;
							public remove(o: any): boolean;
							public add(object: any): boolean;
							public removeAll(c: java.util.Collection<any>): boolean;
							public removeIf(filter: any /* any*/): boolean;
							public isEmpty(): boolean;
							public parallelStream(): java.util.stream.Stream<any>;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module util {
					export class Activator extends java.lang.Object {
						public static class: java.lang.Class<org.apache.logging.log4j.util.Activator>;
						public constructor();
						public stop(bundleContext: org.osgi.framework.BundleContext): void;
						public start(bundleContext: org.osgi.framework.BundleContext): void;
						public bundleChanged(event: org.osgi.framework.BundleEvent): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module util {
					export class Base64Util extends java.lang.Object {
						public static class: java.lang.Class<org.apache.logging.log4j.util.Base64Util>;
						public static encode(str: string): string;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module util {
					export class BiConsumer<K, V>  extends java.lang.Object {
						public static class: java.lang.Class<org.apache.logging.log4j.util.BiConsumer<any,any>>;
						/**
						 * Constructs a new instance of the org.apache.logging.log4j.util.BiConsumer<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							accept(object0: K, object1: V): void;
						});
						public constructor();
						public accept(object0: K, object1: V): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module util {
					export class Chars extends java.lang.Object {
						public static class: java.lang.Class<org.apache.logging.log4j.util.Chars>;
						public static CR: string;
						public static DQUOTE: string;
						public static EQ: string;
						public static LF: string;
						public static NUL: string;
						public static QUOTE: string;
						public static SPACE: string;
						public static TAB: string;
						public static getUpperCaseHex(digit: number): string;
						public static getLowerCaseHex(digit: number): string;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module util {
					export class Constants extends java.lang.Object {
						public static class: java.lang.Class<org.apache.logging.log4j.util.Constants>;
						public static IS_WEB_APP: boolean;
						public static ENABLE_THREADLOCALS: boolean;
						public static JAVA_MAJOR_VERSION: number;
						public static MAX_REUSABLE_MESSAGE_SIZE: number;
						public static LOG4J2_DEBUG: string;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module util {
					export class EnglishEnums extends java.lang.Object {
						public static class: java.lang.Class<org.apache.logging.log4j.util.EnglishEnums>;
						public static valueOf(enumType: java.lang.Class<any>, name: string, defaultValue: java.lang.Enum<any>): java.lang.Enum<any>;
						public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module util {
					export class EnvironmentPropertySource extends java.lang.Object implements org.apache.logging.log4j.util.PropertySource {
						public static class: java.lang.Class<org.apache.logging.log4j.util.EnvironmentPropertySource>;
						public constructor();
						public getProperty(key: string): string;
						public getPriority(): number;
						public forEach(action: org.apache.logging.log4j.util.BiConsumer<string,string>): void;
						public getNormalForm(tokens: java.lang.Iterable<any>): string;
						public containsProperty(key: string): boolean;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module util {
					export class FilteredObjectInputStream extends java.io.ObjectInputStream {
						public static class: java.lang.Class<org.apache.logging.log4j.util.FilteredObjectInputStream>;
						public resolveClass(desc: java.io.ObjectStreamClass): java.lang.Class<any>;
						public read(): number;
						public constructor();
						public close(): void;
						public getAllowedClasses(): java.util.Collection<string>;
						public constructor(in0: java.io.InputStream);
						public skip(n: number): number;
						public available(): number;
						public constructor(in0: java.io.InputStream, allowedClasses: java.util.Collection<string>);
						public read(b: native.Array<number>): number;
						public constructor(allowedClasses: java.util.Collection<string>);
						public read(buf: native.Array<number>, off: number, len: number): number;
						public readObject(): any;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module util {
					export class IndexedReadOnlyStringMap extends java.lang.Object implements org.apache.logging.log4j.util.ReadOnlyStringMap {
						public static class: java.lang.Class<org.apache.logging.log4j.util.IndexedReadOnlyStringMap>;
						/**
						 * Constructs a new instance of the org.apache.logging.log4j.util.IndexedReadOnlyStringMap interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getKeyAt(int0: number): string;
							getValueAt(int0: number): any;
							indexOfKey(string0: string): number;
							toMap(): java.util.Map<string,string>;
							containsKey(string0: string): boolean;
							forEach(biConsumer0: org.apache.logging.log4j.util.BiConsumer<any,any>): void;
							forEach(triConsumer0: org.apache.logging.log4j.util.TriConsumer<any,any,any>, object1: any): void;
							getValue(string0: string): any;
							isEmpty(): boolean;
							size(): number;
						});
						public constructor();
						public getKeyAt(int0: number): string;
						public forEach(triConsumer0: org.apache.logging.log4j.util.TriConsumer<any,any,any>, object1: any): void;
						public getValue(string0: string): any;
						public containsKey(string0: string): boolean;
						public forEach(biConsumer0: org.apache.logging.log4j.util.BiConsumer<any,any>): void;
						public isEmpty(): boolean;
						public size(): number;
						public getValueAt(int0: number): any;
						public toMap(): java.util.Map<string,string>;
						public indexOfKey(string0: string): number;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module util {
					export class IndexedStringMap extends java.lang.Object implements org.apache.logging.log4j.util.IndexedReadOnlyStringMap, org.apache.logging.log4j.util.StringMap {
						public static class: java.lang.Class<org.apache.logging.log4j.util.IndexedStringMap>;
						/**
						 * Constructs a new instance of the org.apache.logging.log4j.util.IndexedStringMap interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getKeyAt(int0: number): string;
							getValueAt(int0: number): any;
							indexOfKey(string0: string): number;
							clear(): void;
							equals(object0: any): boolean;
							freeze(): void;
							hashCode(): number;
							isFrozen(): boolean;
							putAll(readOnlyStringMap0: org.apache.logging.log4j.util.ReadOnlyStringMap): void;
							putValue(string0: string, object1: any): void;
							remove(string0: string): void;
							toMap(): java.util.Map<string,string>;
							containsKey(string0: string): boolean;
							forEach(biConsumer0: org.apache.logging.log4j.util.BiConsumer<any,any>): void;
							forEach(triConsumer0: org.apache.logging.log4j.util.TriConsumer<any,any,any>, object1: any): void;
							getValue(string0: string): any;
							isEmpty(): boolean;
							size(): number;
							toMap(): java.util.Map<string,string>;
							containsKey(string0: string): boolean;
							forEach(biConsumer0: org.apache.logging.log4j.util.BiConsumer<any,any>): void;
							forEach(triConsumer0: org.apache.logging.log4j.util.TriConsumer<any,any,any>, object1: any): void;
							getValue(string0: string): any;
							isEmpty(): boolean;
							size(): number;
						});
						public constructor();
						public getKeyAt(int0: number): string;
						public forEach(triConsumer0: org.apache.logging.log4j.util.TriConsumer<any,any,any>, object1: any): void;
						public equals(obj: any): boolean;
						public containsKey(string0: string): boolean;
						public forEach(biConsumer0: org.apache.logging.log4j.util.BiConsumer<any,any>): void;
						public hashCode(): number;
						public freeze(): void;
						public getValueAt(int0: number): any;
						public indexOfKey(string0: string): number;
						public putAll(readOnlyStringMap0: org.apache.logging.log4j.util.ReadOnlyStringMap): void;
						public remove(string0: string): void;
						public getValue(string0: string): any;
						public isEmpty(): boolean;
						public clear(): void;
						public size(): number;
						public isFrozen(): boolean;
						public toMap(): java.util.Map<string,string>;
						public putValue(string0: string, object1: any): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module util {
					export class LambdaUtil extends java.lang.Object {
						public static class: java.lang.Class<org.apache.logging.log4j.util.LambdaUtil>;
						public static get(supplier: org.apache.logging.log4j.util.MessageSupplier): org.apache.logging.log4j.message.Message;
						public static get(supplier: org.apache.logging.log4j.util.Supplier<any>): any;
						public static getMessage(supplier: org.apache.logging.log4j.util.Supplier<any>, messageFactory: org.apache.logging.log4j.message.MessageFactory): org.apache.logging.log4j.message.Message;
						public static getAll(suppliers: native.Array<org.apache.logging.log4j.util.Supplier<any>>): native.Array<any>;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module util {
					export class LoaderUtil extends java.lang.Object {
						public static class: java.lang.Class<org.apache.logging.log4j.util.LoaderUtil>;
						public static IGNORE_TCCL_PROPERTY: string;
						public static getClassLoaders(): native.Array<java.lang.ClassLoader>;
						public static isClassAvailable(className: string): boolean;
						public static newInstanceOf(clazz: java.lang.Class<any>): any;
						public static newInstanceOf(className: string): any;
						public static findResources(resource: string): java.util.Collection<java.net.URL>;
						public static newCheckedInstanceOfProperty(propertyName: string, clazz: java.lang.Class<any>): any;
						public static newCheckedInstanceOf(className: string, clazz: java.lang.Class<any>): any;
						public static loadClass(className: string): java.lang.Class<any>;
						public static getThreadContextClassLoader(): java.lang.ClassLoader;
					}
					export module LoaderUtil {
						export class ThreadContextClassLoaderGetter extends java.security.PrivilegedAction<java.lang.ClassLoader> {
							public static class: java.lang.Class<org.apache.logging.log4j.util.LoaderUtil.ThreadContextClassLoaderGetter>;
							public run(): any;
							public run(): java.lang.ClassLoader;
						}
						export class UrlResource extends java.lang.Object {
							public static class: java.lang.Class<org.apache.logging.log4j.util.LoaderUtil.UrlResource>;
							public hashCode(): number;
							public getUrl(): java.net.URL;
							public equals(obj: any): boolean;
							public equals(o: any): boolean;
							public getClassLoader(): java.lang.ClassLoader;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module util {
					export class LowLevelLogUtil extends java.lang.Object {
						public static class: java.lang.Class<org.apache.logging.log4j.util.LowLevelLogUtil>;
						public static setWriter(writer: java.io.Writer): void;
						public static log(message: string): void;
						public static setOutputStream(out: java.io.OutputStream): void;
						public static logException(message: string, exception: java.lang.Throwable): void;
						public static logException(exception: java.lang.Throwable): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module util {
					export class MessageSupplier extends java.lang.Object {
						public static class: java.lang.Class<org.apache.logging.log4j.util.MessageSupplier>;
						/**
						 * Constructs a new instance of the org.apache.logging.log4j.util.MessageSupplier interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							get(): org.apache.logging.log4j.message.Message;
						});
						public constructor();
						public get(): org.apache.logging.log4j.message.Message;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module util {
					export class MultiFormatStringBuilderFormattable extends java.lang.Object implements org.apache.logging.log4j.message.MultiformatMessage, org.apache.logging.log4j.util.StringBuilderFormattable {
						public static class: java.lang.Class<org.apache.logging.log4j.util.MultiFormatStringBuilderFormattable>;
						/**
						 * Constructs a new instance of the org.apache.logging.log4j.util.MultiFormatStringBuilderFormattable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							formatTo(strings0: native.Array<string>, stringBuilder1: java.lang.StringBuilder): void;
							getFormattedMessage(strings0: native.Array<string>): string;
							getFormats(): native.Array<string>;
							formatTo(stringBuilder0: java.lang.StringBuilder): void;
							getFormattedMessage(): string;
							getFormat(): string;
							getParameters(): native.Array<any>;
							getThrowable(): java.lang.Throwable;
						});
						public constructor();
						public formatTo(stringBuilder0: java.lang.StringBuilder): void;
						public getFormattedMessage(strings0: native.Array<string>): string;
						public getFormattedMessage(): string;
						public getThrowable(): java.lang.Throwable;
						public formatTo(strings0: native.Array<string>, stringBuilder1: java.lang.StringBuilder): void;
						public getFormat(): string;
						public getFormats(): native.Array<string>;
						public getParameters(): native.Array<any>;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module util {
					export class PerformanceSensitive extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<org.apache.logging.log4j.util.PerformanceSensitive>;
						/**
						 * Constructs a new instance of the org.apache.logging.log4j.util.PerformanceSensitive interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							value(): native.Array<string>;
							equals(object0: any): boolean;
							hashCode(): number;
							toString(): string;
							annotationType(): java.lang.Class<any>;
						});
						public constructor();
						public value(): native.Array<string>;
						public equals(obj: any): boolean;
						public hashCode(): number;
						public toString(): string;
						public annotationType(): java.lang.Class<any>;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module util {
					export class PrivateSecurityManagerStackTraceUtil extends java.lang.Object {
						public static class: java.lang.Class<org.apache.logging.log4j.util.PrivateSecurityManagerStackTraceUtil>;
					}
					export module PrivateSecurityManagerStackTraceUtil {
						export class PrivateSecurityManager extends java.lang.SecurityManager {
							public static class: java.lang.Class<org.apache.logging.log4j.util.PrivateSecurityManagerStackTraceUtil.PrivateSecurityManager>;
							public getClassContext(): native.Array<java.lang.Class<any>>;
							public getClassContext(): native.Array<java.lang.Class<any>>;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module util {
					export class ProcessIdUtil extends java.lang.Object {
						public static class: java.lang.Class<org.apache.logging.log4j.util.ProcessIdUtil>;
						public static DEFAULT_PROCESSID: string;
						public constructor();
						public static getProcessId(): string;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module util {
					export class PropertiesPropertySource extends java.lang.Object implements org.apache.logging.log4j.util.PropertySource {
						public static class: java.lang.Class<org.apache.logging.log4j.util.PropertiesPropertySource>;
						public getProperty(key: string): string;
						public getPriority(): number;
						public forEach(action: org.apache.logging.log4j.util.BiConsumer<string,string>): void;
						public constructor(properties: java.util.Properties);
						public getNormalForm(tokens: java.lang.Iterable<any>): string;
						public containsProperty(key: string): boolean;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module util {
					export class PropertiesUtil extends java.lang.Object {
						public static class: java.lang.Class<org.apache.logging.log4j.util.PropertiesUtil>;
						public constructor(propertiesFileName: string);
						public getDurationProperty(name: string, defaultValue: java.time.Duration): java.time.Duration;
						public getCharsetProperty(name: string, defaultValue: java.nio.charset.Charset): java.nio.charset.Charset;
						public getDurationProperty(prefixes: native.Array<string>, key: string, supplier: org.apache.logging.log4j.util.Supplier<java.time.Duration>): java.time.Duration;
						public hasProperty(name: string): boolean;
						public getBooleanProperty(name: string, defaultValue: boolean): boolean;
						public getIntegerProperty(name: string, defaultValue: number): number;
						public static getSystemProperties(): java.util.Properties;
						public getBooleanProperty(prefixes: native.Array<string>, key: string, supplier: org.apache.logging.log4j.util.Supplier<java.lang.Boolean>): java.lang.Boolean;
						public getLongProperty(name: string, defaultValue: number): number;
						public static extractSubset(properties: java.util.Properties, prefix: string): java.util.Properties;
						public getBooleanProperty(name: string): boolean;
						public static getProperties(): org.apache.logging.log4j.util.PropertiesUtil;
						public getLongProperty(prefixes: native.Array<string>, key: string, supplier: org.apache.logging.log4j.util.Supplier<java.lang.Long>): java.lang.Long;
						public isOsWindows(): boolean;
						public getIntegerProperty(prefixes: native.Array<string>, key: string, supplier: org.apache.logging.log4j.util.Supplier<java.lang.Integer>): java.lang.Integer;
						public static partitionOnCommonPrefixes(properties: java.util.Properties): java.util.Map<string,java.util.Properties>;
						public getStringProperty(prefixes: native.Array<string>, key: string, supplier: org.apache.logging.log4j.util.Supplier<string>): string;
						public getStringProperty(name: string): string;
						public getStringProperty(name: string, defaultValue: string): string;
						public constructor(props: java.util.Properties);
						public getCharsetProperty(name: string): java.nio.charset.Charset;
						public reload(): void;
						public getDoubleProperty(name: string, defaultValue: number): number;
						public getBooleanProperty(name: string, defaultValueIfAbsent: boolean, defaultValueIfPresent: boolean): boolean;
					}
					export module PropertiesUtil {
						export class Environment extends java.lang.Object {
							public static class: java.lang.Class<org.apache.logging.log4j.util.PropertiesUtil.Environment>;
						}
						export class TimeUnit {
							public static class: java.lang.Class<org.apache.logging.log4j.util.PropertiesUtil.TimeUnit>;
							public static NANOS: org.apache.logging.log4j.util.PropertiesUtil.TimeUnit;
							public static MICROS: org.apache.logging.log4j.util.PropertiesUtil.TimeUnit;
							public static MILLIS: org.apache.logging.log4j.util.PropertiesUtil.TimeUnit;
							public static SECONDS: org.apache.logging.log4j.util.PropertiesUtil.TimeUnit;
							public static MINUTES: org.apache.logging.log4j.util.PropertiesUtil.TimeUnit;
							public static HOURS: org.apache.logging.log4j.util.PropertiesUtil.TimeUnit;
							public static DAYS: org.apache.logging.log4j.util.PropertiesUtil.TimeUnit;
							public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
							public static valueOf(name: string): org.apache.logging.log4j.util.PropertiesUtil.TimeUnit;
							public static values(): native.Array<org.apache.logging.log4j.util.PropertiesUtil.TimeUnit>;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module util {
					export class PropertyFilePropertySource extends org.apache.logging.log4j.util.PropertiesPropertySource {
						public static class: java.lang.Class<org.apache.logging.log4j.util.PropertyFilePropertySource>;
						public getProperty(key: string): string;
						public getPriority(): number;
						public forEach(action: org.apache.logging.log4j.util.BiConsumer<string,string>): void;
						public constructor(fileName: string);
						public constructor(properties: java.util.Properties);
						public getNormalForm(tokens: java.lang.Iterable<any>): string;
						public containsProperty(key: string): boolean;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module util {
					export class PropertySource extends java.lang.Object {
						public static class: java.lang.Class<org.apache.logging.log4j.util.PropertySource>;
						/**
						 * Constructs a new instance of the org.apache.logging.log4j.util.PropertySource interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getPriority(): number;
							forEach(action: org.apache.logging.log4j.util.BiConsumer<string,string>): void;
							getNormalForm(tokens: java.lang.Iterable<any>): string;
							getProperty(key: string): string;
							containsProperty(key: string): boolean;
						});
						public constructor();
						public getProperty(key: string): string;
						public getPriority(): number;
						public forEach(action: org.apache.logging.log4j.util.BiConsumer<string,string>): void;
						public getNormalForm(tokens: java.lang.Iterable<any>): string;
						public containsProperty(key: string): boolean;
					}
					export module PropertySource {
						export class Comparator extends java.lang.Object {
							public static class: java.lang.Class<org.apache.logging.log4j.util.PropertySource.Comparator>;
							public constructor();
							public static comparingDouble(keyExtractor: any /* any*/): java.util.Comparator<any>;
							public compare(o1: org.apache.logging.log4j.util.PropertySource, o2: org.apache.logging.log4j.util.PropertySource): number;
							public thenComparingDouble(keyExtractor: any /* any*/): java.util.Comparator<any>;
							public equals(obj: any): boolean;
							public thenComparingLong(keyExtractor: any /* any*/): java.util.Comparator<any>;
							public static comparingInt(keyExtractor: any /* any*/): java.util.Comparator<any>;
							public static comparingLong(keyExtractor: any /* any*/): java.util.Comparator<any>;
							public static naturalOrder(): java.util.Comparator<any>;
							public thenComparing(other: java.util.Comparator<any>): java.util.Comparator<any>;
							public thenComparing(keyExtractor: any /* any*/): java.util.Comparator<any>;
							public static comparing(keyExtractor: any /* any*/): java.util.Comparator<any>;
							public static comparing(keyExtractor: any /* any*/, keyComparator: java.util.Comparator<any>): java.util.Comparator<any>;
							public reversed(): java.util.Comparator<any>;
							public static nullsFirst(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
							public compare(object0: any, object1: any): number;
							public static nullsLast(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
							public thenComparing(keyExtractor: any /* any*/, keyComparator: java.util.Comparator<any>): java.util.Comparator<any>;
							public thenComparingInt(keyExtractor: any /* any*/): java.util.Comparator<any>;
							public static reverseOrder(): java.util.Comparator<any>;
						}
						export class Util extends java.lang.Object {
							public static class: java.lang.Class<org.apache.logging.log4j.util.PropertySource.Util>;
							public static joinAsCamelCase(tokens: java.lang.Iterable<any>): string;
							public static tokenize(value: string): java.util.List<string>;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module util {
					export class ProviderUtil extends java.lang.Object {
						public static class: java.lang.Class<org.apache.logging.log4j.util.ProviderUtil>;
						public static PROVIDER_RESOURCE: string;
						public static PROVIDERS: java.util.Collection<org.apache.logging.log4j.spi.Provider>;
						public static STARTUP_LOCK: java.util.concurrent.locks.Lock;
						public static hasProviders(): boolean;
						/** @deprecated */
						public static loadProviders(urls: java.util.Enumeration<java.net.URL>, cl: java.lang.ClassLoader): void;
						public static loadProvider(url: java.net.URL, cl: java.lang.ClassLoader): void;
						public static lazyInit(): void;
						public static findClassLoader(): java.lang.ClassLoader;
						public static addProvider(provider: org.apache.logging.log4j.spi.Provider): void;
						public static getProviders(): java.lang.Iterable<org.apache.logging.log4j.spi.Provider>;
						public static loadProviders(classLoader: java.lang.ClassLoader): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module util {
					export class ReadOnlyStringMap extends java.lang.Object implements java.io.Serializable {
						public static class: java.lang.Class<org.apache.logging.log4j.util.ReadOnlyStringMap>;
						/**
						 * Constructs a new instance of the org.apache.logging.log4j.util.ReadOnlyStringMap interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							toMap(): java.util.Map<string,string>;
							containsKey(string0: string): boolean;
							forEach(biConsumer0: org.apache.logging.log4j.util.BiConsumer<any,any>): void;
							forEach(triConsumer0: org.apache.logging.log4j.util.TriConsumer<any,any,any>, object1: any): void;
							getValue(string0: string): any;
							isEmpty(): boolean;
							size(): number;
						});
						public constructor();
						public forEach(triConsumer0: org.apache.logging.log4j.util.TriConsumer<any,any,any>, object1: any): void;
						public getValue(string0: string): any;
						public containsKey(string0: string): boolean;
						public forEach(biConsumer0: org.apache.logging.log4j.util.BiConsumer<any,any>): void;
						public isEmpty(): boolean;
						public size(): number;
						public toMap(): java.util.Map<string,string>;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module util {
					export class SortedArrayStringMap extends java.lang.Object implements org.apache.logging.log4j.util.IndexedStringMap {
						public static class: java.lang.Class<org.apache.logging.log4j.util.SortedArrayStringMap>;
						public containsKey(key: string): boolean;
						public constructor();
						public equals(obj: any): boolean;
						public remove(key: string): void;
						public forEach(action: org.apache.logging.log4j.util.BiConsumer<any,any>): void;
						public getValue(key: string): any;
						public forEach(action: org.apache.logging.log4j.util.TriConsumer<any,any,any>, state: any): void;
						public hashCode(): number;
						public putValue(key: string, value: any): void;
						public freeze(): void;
						public toString(): string;
						public getKeyAt(index: number): string;
						public getValueAt(index: number): any;
						public indexOfKey(key: string): number;
						public constructor(initialCapacity: number);
						public constructor(other: org.apache.logging.log4j.util.ReadOnlyStringMap);
						public constructor(map: java.util.Map<string,any>);
						public isEmpty(): boolean;
						public clear(): void;
						public putAll(source: org.apache.logging.log4j.util.ReadOnlyStringMap): void;
						public size(): number;
						public toMap(): java.util.Map<string,string>;
						public isFrozen(): boolean;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module util {
					export class StackLocator extends java.lang.Object {
						public static class: java.lang.Class<org.apache.logging.log4j.util.StackLocator>;
						public getCallerClass(fqcn: string, pkg: string): java.lang.Class<any>;
						public getCallerClass(anchor: java.lang.Class<any>): java.lang.Class<any>;
						public static getInstance(): org.apache.logging.log4j.util.StackLocator;
						public getCurrentStackTrace(): java.util.Stack<java.lang.Class<any>>;
						public calcLocation(fqcnOfLogger: string): java.lang.StackTraceElement;
						public getCallerClass(depth: number): java.lang.Class<any>;
						public getStackTraceElement(depth: number): java.lang.StackTraceElement;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module util {
					export class StackLocatorUtil extends java.lang.Object {
						public static class: java.lang.Class<org.apache.logging.log4j.util.StackLocatorUtil>;
						public static getCallerClass(fqcn: string, pkg: string): java.lang.Class<any>;
						public static getCurrentStackTrace(): java.util.Stack<java.lang.Class<any>>;
						public static calcLocation(fqcnOfLogger: string): java.lang.StackTraceElement;
						public static getCallerClass(anchor: java.lang.Class<any>): java.lang.Class<any>;
						public static getCallerClass(depth: number): java.lang.Class<any>;
						public static getStackTraceElement(depth: number): java.lang.StackTraceElement;
						public static getCallerClass(fqcn: string): java.lang.Class<any>;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module util {
					export class StringBuilderFormattable extends java.lang.Object {
						public static class: java.lang.Class<org.apache.logging.log4j.util.StringBuilderFormattable>;
						/**
						 * Constructs a new instance of the org.apache.logging.log4j.util.StringBuilderFormattable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							formatTo(stringBuilder0: java.lang.StringBuilder): void;
						});
						public constructor();
						public formatTo(stringBuilder0: java.lang.StringBuilder): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module util {
					export class StringBuilders extends java.lang.Object {
						public static class: java.lang.Class<org.apache.logging.log4j.util.StringBuilders>;
						public equals(obj: any): boolean;
						public static appendKeyDqValue(sb: java.lang.StringBuilder, key: string, value: any): java.lang.StringBuilder;
						public static trimToMaxSize(stringBuilder: java.lang.StringBuilder, maxSize: number): void;
						public static appendValue(stringBuilder: java.lang.StringBuilder, obj: any): void;
						public static equals(left: string, leftOffset: number, leftLength: number, right: string, rightOffset: number, rightLength: number): boolean;
						public static appendKeyDqValue(sb: java.lang.StringBuilder, entry: java.util.Map.Entry<string,string>): java.lang.StringBuilder;
						public static equalsIgnoreCase(left: string, leftOffset: number, leftLength: number, right: string, rightOffset: number, rightLength: number): boolean;
						public static escapeXml(toAppendTo: java.lang.StringBuilder, start: number): void;
						public static appendSpecificTypes(stringBuilder: java.lang.StringBuilder, obj: any): boolean;
						public static escapeJson(toAppendTo: java.lang.StringBuilder, start: number): void;
						public static appendDqValue(sb: java.lang.StringBuilder, value: any): java.lang.StringBuilder;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module util {
					export class StringMap extends java.lang.Object implements org.apache.logging.log4j.util.ReadOnlyStringMap {
						public static class: java.lang.Class<org.apache.logging.log4j.util.StringMap>;
						/**
						 * Constructs a new instance of the org.apache.logging.log4j.util.StringMap interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							clear(): void;
							equals(object0: any): boolean;
							freeze(): void;
							hashCode(): number;
							isFrozen(): boolean;
							putAll(readOnlyStringMap0: org.apache.logging.log4j.util.ReadOnlyStringMap): void;
							putValue(string0: string, object1: any): void;
							remove(string0: string): void;
							toMap(): java.util.Map<string,string>;
							containsKey(string0: string): boolean;
							forEach(biConsumer0: org.apache.logging.log4j.util.BiConsumer<any,any>): void;
							forEach(triConsumer0: org.apache.logging.log4j.util.TriConsumer<any,any,any>, object1: any): void;
							getValue(string0: string): any;
							isEmpty(): boolean;
							size(): number;
						});
						public constructor();
						public forEach(triConsumer0: org.apache.logging.log4j.util.TriConsumer<any,any,any>, object1: any): void;
						public equals(obj: any): boolean;
						public containsKey(string0: string): boolean;
						public forEach(biConsumer0: org.apache.logging.log4j.util.BiConsumer<any,any>): void;
						public hashCode(): number;
						public freeze(): void;
						public putAll(readOnlyStringMap0: org.apache.logging.log4j.util.ReadOnlyStringMap): void;
						public remove(string0: string): void;
						public getValue(string0: string): any;
						public isEmpty(): boolean;
						public clear(): void;
						public size(): number;
						public isFrozen(): boolean;
						public toMap(): java.util.Map<string,string>;
						public putValue(string0: string, object1: any): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module util {
					export class Strings extends java.lang.Object {
						public static class: java.lang.Class<org.apache.logging.log4j.util.Strings>;
						public static EMPTY: string;
						public static LINE_SEPARATOR: string;
						public static isBlank(s: string): boolean;
						public static left(str: string, len: number): string;
						public static isEmpty(cs: string): boolean;
						public static isNotBlank(s: string): boolean;
						public static isNotEmpty(cs: string): boolean;
						public static quote(str: string): string;
						public static trimToNull(str: string): string;
						public static dquote(str: string): string;
						public static join(iterator: java.util.Iterator<any>, separator: string): string;
						public static join(iterable: java.lang.Iterable<any>, separator: string): string;
						public static toRootUpperCase(str: string): string;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module util {
					export class Supplier<T>  extends java.lang.Object {
						public static class: java.lang.Class<org.apache.logging.log4j.util.Supplier<any>>;
						/**
						 * Constructs a new instance of the org.apache.logging.log4j.util.Supplier<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							get(): T;
						});
						public constructor();
						public get(): T;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module util {
					export class SystemPropertiesPropertySource extends java.lang.Object implements org.apache.logging.log4j.util.PropertySource {
						public static class: java.lang.Class<org.apache.logging.log4j.util.SystemPropertiesPropertySource>;
						public constructor();
						public getProperty(key: string): string;
						public getPriority(): number;
						public forEach(action: org.apache.logging.log4j.util.BiConsumer<string,string>): void;
						public getNormalForm(tokens: java.lang.Iterable<any>): string;
						public containsProperty(key: string): boolean;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module util {
					export class Timer extends java.lang.Object implements java.io.Serializable, org.apache.logging.log4j.util.StringBuilderFormattable {
						public static class: java.lang.Class<org.apache.logging.log4j.util.Timer>;
						public getElapsedTime(): number;
						public equals(obj: any): boolean;
						public stop(): string;
						public pause(): void;
						public hashCode(): number;
						public startOrResume(): void;
						public getElapsedNanoTime(): number;
						public getStatus(): org.apache.logging.log4j.util.Timer.Status;
						public getName(): string;
						public toString(): string;
						public formatTo(buffer: java.lang.StringBuilder): void;
						public resume(): void;
						public constructor(name: string, iterations: number);
						public start(): void;
						public constructor(name: string);
						public equals(o: any): boolean;
					}
					export module Timer {
						export class Status {
							public static class: java.lang.Class<org.apache.logging.log4j.util.Timer.Status>;
							public static Started: org.apache.logging.log4j.util.Timer.Status;
							public static Stopped: org.apache.logging.log4j.util.Timer.Status;
							public static Paused: org.apache.logging.log4j.util.Timer.Status;
							public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
							public static valueOf(name: string): org.apache.logging.log4j.util.Timer.Status;
							public static values(): native.Array<org.apache.logging.log4j.util.Timer.Status>;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module util {
					export class TriConsumer<K, V, S>  extends java.lang.Object {
						public static class: java.lang.Class<org.apache.logging.log4j.util.TriConsumer<any,any,any>>;
						/**
						 * Constructs a new instance of the org.apache.logging.log4j.util.TriConsumer<any,any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							accept(object0: K, object1: V, object2: S): void;
						});
						public constructor();
						public accept(object0: K, object1: V, object2: S): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module logging {
			export module log4j {
				export module util {
					export class Unbox extends java.lang.Object {
						public static class: java.lang.Class<org.apache.logging.log4j.util.Unbox>;
						public static box(value: string): java.lang.StringBuilder;
						public static box(value: boolean): java.lang.StringBuilder;
						public static box(value: number): java.lang.StringBuilder;
					}
					export module Unbox {
						export class State extends java.lang.Object {
							public static class: java.lang.Class<org.apache.logging.log4j.util.Unbox.State>;
							public isBoxedPrimitive(text: java.lang.StringBuilder): boolean;
							public getStringBuilder(): java.lang.StringBuilder;
						}
						export class WebSafeState extends java.lang.Object {
							public static class: java.lang.Class<org.apache.logging.log4j.util.Unbox.WebSafeState>;
							public isBoxedPrimitive(text: java.lang.StringBuilder): boolean;
							public getStringBuilder(): java.lang.StringBuilder;
						}
					}
				}
			}
		}
	}
}

//Generics information:
//org.apache.logging.log4j.ThreadContext.EmptyIterator:1
//org.apache.logging.log4j.message.MapMessage:2
//org.apache.logging.log4j.message.MessageCollectionMessage:1
//org.apache.logging.log4j.message.ParameterConsumer:1
//org.apache.logging.log4j.spi.AbstractLoggerAdapter:1
//org.apache.logging.log4j.spi.LoggerAdapter:1
//org.apache.logging.log4j.spi.LoggerRegistry:1
//org.apache.logging.log4j.spi.LoggerRegistry.ConcurrentMapFactory:1
//org.apache.logging.log4j.spi.LoggerRegistry.MapFactory:1
//org.apache.logging.log4j.spi.LoggerRegistry.WeakMapFactory:1
//org.apache.logging.log4j.status.StatusLogger.BoundedQueue:1
//org.apache.logging.log4j.util.BiConsumer:2
//org.apache.logging.log4j.util.Supplier:1
//org.apache.logging.log4j.util.TriConsumer:3

