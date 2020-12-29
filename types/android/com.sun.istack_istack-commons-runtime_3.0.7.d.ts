declare module com {
	export module sun {
		export module istack {
			export class Builder<T>  extends java.lang.Object {
				public static class: java.lang.Class<com.sun.istack.Builder<any>>;
				/**
				 * Constructs a new instance of the com.sun.istack.Builder<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					build(): T;
				});
				public constructor();
				public build(): T;
			}
		}
	}
}

declare module com {
	export module sun {
		export module istack {
			export class ByteArrayDataSource extends java.lang.Object implements javax.activation.DataSource {
				public static class: java.lang.Class<com.sun.istack.ByteArrayDataSource>;
				public getContentType(): string;
				public getInputStream(): java.io.InputStream;
				public getName(): string;
				public constructor(buf: native.Array<number>, contentType: string);
				public constructor(buf: native.Array<number>, length: number, contentType: string);
				public getOutputStream(): java.io.OutputStream;
			}
		}
	}
}

declare module com {
	export module sun {
		export module istack {
			export class FinalArrayList<T>  extends java.util.ArrayList<any> {
				public static class: java.lang.Class<com.sun.istack.FinalArrayList<any>>;
				public subList(fromIndex: number, toIndex: number): java.util.List<any>;
				public parallelStream(): java.util.stream.Stream<any>;
				public indexOf(o: any): number;
				public lastIndexOf(o: any): number;
				public listIterator(): java.util.ListIterator<any>;
				public removeAll(c: java.util.Collection<any>): boolean;
				public constructor(ts: java.util.Collection<any>);
				public constructor();
				public toArray(): native.Array<any>;
				public add(e: any): boolean;
				public hashCode(): number;
				public clear(): void;
				public set(index: number, element: any): any;
				public constructor(c: java.util.Collection<any>);
				public addAll(c: java.util.Collection<any>): boolean;
				public equals(o: any): boolean;
				public isEmpty(): boolean;
				public remove(index: number): any;
				public contains(o: any): boolean;
				public replaceAll(operator: any /* any*/): void;
				public sort(c: java.util.Comparator<any>): void;
				public spliterator(): java.util.Spliterator<any>;
				public toArray(a: native.Array<any>): native.Array<any>;
				public get(index: number): any;
				public stream(): java.util.stream.Stream<any>;
				public iterator(): java.util.Iterator<any>;
				public remove(o: any): boolean;
				public containsAll(c: java.util.Collection<any>): boolean;
				public size(): number;
				public removeIf(filter: any /* any*/): boolean;
				public add(index: number, element: any): void;
				public constructor(initialCapacity: number);
				public addAll(index: number, c: java.util.Collection<any>): boolean;
				public listIterator(index: number): java.util.ListIterator<any>;
				public retainAll(c: java.util.Collection<any>): boolean;
			}
		}
	}
}

declare module com {
	export module sun {
		export module istack {
			export class FragmentContentHandler extends org.xml.sax.helpers.XMLFilterImpl {
				public static class: java.lang.Class<com.sun.istack.FragmentContentHandler>;
				public error(e: org.xml.sax.SAXParseException): void;
				public resolveEntity(publicId: string, systemId: string): org.xml.sax.InputSource;
				public startPrefixMapping(prefix: string, uri: string): void;
				public characters(ch: native.Array<string>, start: number, length: number): void;
				public processingInstruction(target: string, data: string): void;
				public notationDecl(name: string, publicId: string, systemId: string): void;
				public setDocumentLocator(locator: org.xml.sax.Locator): void;
				public constructor(handler: org.xml.sax.ContentHandler);
				public ignorableWhitespace(ch: native.Array<string>, start: number, length: number): void;
				public endDocument(): void;
				public skippedEntity(name: string): void;
				public endPrefixMapping(prefix: string): void;
				public constructor();
				public constructor(parent: org.xml.sax.XMLReader);
				public startElement(uri: string, localName: string, qName: string, atts: org.xml.sax.Attributes): void;
				public setParent(parent: org.xml.sax.XMLReader): void;
				public unparsedEntityDecl(name: string, publicId: string, systemId: string, notationName: string): void;
				public startDocument(): void;
				public fatalError(e: org.xml.sax.SAXParseException): void;
				public getParent(): org.xml.sax.XMLReader;
				public warning(e: org.xml.sax.SAXParseException): void;
				public endElement(uri: string, localName: string, qName: string): void;
			}
		}
	}
}

declare module com {
	export module sun {
		export module istack {
			export class Interned extends java.lang.Object implements java.lang.annotation.Annotation {
				public static class: java.lang.Class<com.sun.istack.Interned>;
				/**
				 * Constructs a new instance of the com.sun.istack.Interned interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
				public annotationType(): java.lang.Class<any>;
				public toString(): string;
			}
		}
	}
}

declare module com {
	export module sun {
		export module istack {
			export class NotNull extends java.lang.Object implements java.lang.annotation.Annotation {
				public static class: java.lang.Class<com.sun.istack.NotNull>;
				/**
				 * Constructs a new instance of the com.sun.istack.NotNull interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
				public annotationType(): java.lang.Class<any>;
				public toString(): string;
			}
		}
	}
}

declare module com {
	export module sun {
		export module istack {
			export class Nullable extends java.lang.Object implements java.lang.annotation.Annotation {
				public static class: java.lang.Class<com.sun.istack.Nullable>;
				/**
				 * Constructs a new instance of the com.sun.istack.Nullable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
				public annotationType(): java.lang.Class<any>;
				public toString(): string;
			}
		}
	}
}

declare module com {
	export module sun {
		export module istack {
			export class Pool<T>  extends java.lang.Object {
				public static class: java.lang.Class<com.sun.istack.Pool<any>>;
				/**
				 * Constructs a new instance of the com.sun.istack.Pool<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					take(): T;
					recycle(object0: T): void;
				});
				public constructor();
				public recycle(object0: T): void;
				public take(): T;
			}
			export module Pool {
				export abstract class Impl<T>  extends com.sun.istack.Pool<any> {
					public static class: java.lang.Class<com.sun.istack.Pool.Impl<any>>;
					public recycle(t: any): void;
					public constructor();
					public take(): any;
					public create(): any;
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module istack {
			export class SAXException2 extends org.xml.sax.SAXException {
				public static class: java.lang.Class<com.sun.istack.SAXException2>;
				public constructor(cause: java.lang.Throwable);
				public constructor(e: java.lang.Exception);
				public constructor(message: string, cause: java.lang.Throwable);
				public constructor(message: string, e: java.lang.Exception);
				public constructor(message: string);
				public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
				public getCause(): java.lang.Throwable;
				public constructor();
			}
		}
	}
}

declare module com {
	export module sun {
		export module istack {
			export class SAXParseException2 extends org.xml.sax.SAXParseException {
				public static class: java.lang.Class<com.sun.istack.SAXParseException2>;
				public constructor(cause: java.lang.Throwable);
				public constructor(e: java.lang.Exception);
				public constructor(message: string, locator: org.xml.sax.Locator);
				public constructor(message: string, cause: java.lang.Throwable);
				public constructor(message: string, e: java.lang.Exception);
				public constructor(message: string, publicId: string, systemId: string, lineNumber: number, columnNumber: number, e: java.lang.Exception);
				public constructor(message: string);
				public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
				public constructor(message: string, publicId: string, systemId: string, lineNumber: number, columnNumber: number);
				public getCause(): java.lang.Throwable;
				public constructor(message: string, locator: org.xml.sax.Locator, e: java.lang.Exception);
				public constructor();
			}
		}
	}
}

declare module com {
	export module sun {
		export module istack {
			export class XMLStreamException2 {
				public static class: java.lang.Class<com.sun.istack.XMLStreamException2>;
				public constructor(th: java.lang.Throwable);
				public constructor(msg: string, location: javax.xml.stream.Location);
				public constructor(msg: string);
				public getCause(): java.lang.Throwable;
				public constructor(msg: string, th: java.lang.Throwable);
				public constructor(msg: string, location: javax.xml.stream.Location, th: java.lang.Throwable);
			}
		}
	}
}

declare module com {
	export module sun {
		export module istack {
			export class XMLStreamReaderToContentHandler extends java.lang.Object {
				public static class: java.lang.Class<com.sun.istack.XMLStreamReaderToContentHandler>;
				public constructor(staxCore: javax.xml.stream.XMLStreamReader, saxCore: org.xml.sax.ContentHandler, eagerQuit: boolean, fragment: boolean, inscopeNamespaces: native.Array<string>);
				public constructor(staxCore: javax.xml.stream.XMLStreamReader, saxCore: org.xml.sax.ContentHandler, eagerQuit: boolean, fragment: boolean);
				public bridge(): void;
			}
		}
	}
}

declare module com {
	export module sun {
		export module istack {
			export module localization {
				export class Localizable extends java.lang.Object {
					public static class: java.lang.Class<com.sun.istack.localization.Localizable>;
					/**
					 * Constructs a new instance of the com.sun.istack.localization.Localizable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getKey(): string;
						getArguments(): native.Array<any>;
						getResourceBundleName(): string;
						getResourceBundle(locale0: java.util.Locale): java.util.ResourceBundle;
					});
					public constructor();
					public static NOT_LOCALIZABLE: string;
					public getKey(): string;
					public getResourceBundleName(): string;
					public getArguments(): native.Array<any>;
					public getResourceBundle(locale0: java.util.Locale): java.util.ResourceBundle;
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module istack {
			export module localization {
				export class LocalizableMessage extends java.lang.Object implements com.sun.istack.localization.Localizable {
					public static class: java.lang.Class<com.sun.istack.localization.LocalizableMessage>;
					public getKey(): string;
					public getResourceBundleName(): string;
					public getArguments(): native.Array<any>;
					/** @deprecated */
					public constructor(bundlename: string, key: string, objects2: native.Array<any>);
					public constructor(bundlename: string, rbSupplier: com.sun.istack.localization.LocalizableMessageFactory.ResourceBundleSupplier, key: string, objects3: native.Array<any>);
					public getResourceBundle(locale: java.util.Locale): java.util.ResourceBundle;
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module istack {
			export module localization {
				export class LocalizableMessageFactory extends java.lang.Object {
					public static class: java.lang.Class<com.sun.istack.localization.LocalizableMessageFactory>;
					public constructor(bundlename: string, rbSupplier: com.sun.istack.localization.LocalizableMessageFactory.ResourceBundleSupplier);
					/** @deprecated */
					public constructor(bundlename: string);
					public getMessage(key: string, objects1: native.Array<any>): com.sun.istack.localization.Localizable;
				}
				export module LocalizableMessageFactory {
					export class ResourceBundleSupplier extends java.lang.Object {
						public static class: java.lang.Class<com.sun.istack.localization.LocalizableMessageFactory.ResourceBundleSupplier>;
						/**
						 * Constructs a new instance of the com.sun.istack.localization.LocalizableMessageFactory() when extending the interface class.
						 */
						public constructor(implementation: {
							getResourceBundle(locale0: java.util.Locale): java.util.ResourceBundle;
						});
						public constructor();
						public getResourceBundle(locale0: java.util.Locale): java.util.ResourceBundle;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module istack {
			export module localization {
				export class Localizer extends java.lang.Object {
					public static class: java.lang.Class<com.sun.istack.localization.Localizer>;
					public localize(l: com.sun.istack.localization.Localizable): string;
					public constructor();
					public constructor(l: java.util.Locale);
					public getLocale(): java.util.Locale;
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module istack {
			export module localization {
				export class NullLocalizable extends java.lang.Object implements com.sun.istack.localization.Localizable {
					public static class: java.lang.Class<com.sun.istack.localization.NullLocalizable>;
					public getKey(): string;
					public getResourceBundleName(): string;
					public getArguments(): native.Array<any>;
					public constructor(msg: string);
					public getResourceBundle(locale: java.util.Locale): java.util.ResourceBundle;
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module istack {
			export module logging {
				export class Logger extends java.lang.Object {
					public static class: java.lang.Class<com.sun.istack.logging.Logger>;
					public finer(message: string, params: native.Array<any>): void;
					public severe(message: string, params: native.Array<any>): void;
					public warning(message: string): void;
					public exiting(result: any): void;
					public log(level: java.util.logging.Level, message: string, thrown: java.lang.Throwable): void;
					public config(message: string, thrown: java.lang.Throwable): void;
					public logSevereException(exception: java.lang.Throwable, cause: java.lang.Throwable): java.lang.Throwable;
					public warning(message: string, params: native.Array<any>): void;
					public log(level: java.util.logging.Level, message: string, params: native.Array<any>): void;
					public finest(message: string): void;
					public log(level: java.util.logging.Level, message: string): void;
					public fine(message: string): void;
					public logException(exception: java.lang.Throwable, logCause: boolean, level: java.util.logging.Level): java.lang.Throwable;
					public logSevereException(exception: java.lang.Throwable): java.lang.Throwable;
					public logException(exception: java.lang.Throwable, cause: java.lang.Throwable, level: java.util.logging.Level): java.lang.Throwable;
					public isMethodCallLoggable(): boolean;
					public warning(message: string, thrown: java.lang.Throwable): void;
					public finer(message: string): void;
					public severe(message: string): void;
					public severe(message: string, thrown: java.lang.Throwable): void;
					public entering(): void;
					public finest(message: string, params: native.Array<any>): void;
					public setLevel(level: java.util.logging.Level): void;
					public exiting(): void;
					public info(message: string, thrown: java.lang.Throwable): void;
					public info(message: string): void;
					public constructor(systemLoggerName: string, componentName: string);
					public static getLogger(componentClass: java.lang.Class<any>): com.sun.istack.logging.Logger;
					public finer(message: string, thrown: java.lang.Throwable): void;
					public static getLogger(customLoggerName: string, componentClass: java.lang.Class<any>): com.sun.istack.logging.Logger;
					public finest(message: string, thrown: java.lang.Throwable): void;
					public logSevereException(exception: java.lang.Throwable, logCause: boolean): java.lang.Throwable;
					public info(message: string, params: native.Array<any>): void;
					public config(message: string): void;
					public log(level: java.util.logging.Level, message: string, param1: any): void;
					public isLoggable(level: java.util.logging.Level): boolean;
					public fine(message: string, thrown: java.lang.Throwable): void;
					public entering(parameters: native.Array<any>): void;
					public logException(exception: java.lang.Throwable, level: java.util.logging.Level): java.lang.Throwable;
					public config(message: string, params: native.Array<any>): void;
				}
			}
		}
	}
}

declare class ModuleInfo extends java.lang.Object {
	public static class: java.lang.Class<ModuleInfo>;
}

//Generics information:
//com.sun.istack.Builder:1
//com.sun.istack.FinalArrayList:1
//com.sun.istack.Pool:1
//com.sun.istack.Pool.Impl:1

