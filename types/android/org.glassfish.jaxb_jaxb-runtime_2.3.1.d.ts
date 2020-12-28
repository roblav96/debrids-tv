declare module com {
	export module sun {
		export module xml {
			export module bind {
				export class AccessorFactory extends java.lang.Object {
					public static class: java.lang.Class<com.sun.xml.bind.AccessorFactory>;
					/**
					 * Constructs a new instance of the com.sun.xml.bind.AccessorFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						createFieldAccessor(class0: java.lang.Class<any>, field1: java.lang.reflect.Field, boolean2: boolean): com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>;
						createPropertyAccessor(class0: java.lang.Class<any>, method1: java.lang.reflect.Method, method2: java.lang.reflect.Method): com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>;
					});
					public constructor();
					public createFieldAccessor(class0: java.lang.Class<any>, field1: java.lang.reflect.Field, boolean2: boolean): com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>;
					public createPropertyAccessor(class0: java.lang.Class<any>, method1: java.lang.reflect.Method, method2: java.lang.reflect.Method): com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>;
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export class AccessorFactoryImpl extends java.lang.Object implements com.sun.xml.bind.InternalAccessorFactory {
					public static class: java.lang.Class<com.sun.xml.bind.AccessorFactoryImpl>;
					public static getInstance(): com.sun.xml.bind.AccessorFactoryImpl;
					public createFieldAccessor(bean: java.lang.Class<any>, field: java.lang.reflect.Field, readOnly: boolean, supressWarning: boolean): com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>;
					public createFieldAccessor(bean: java.lang.Class<any>, field: java.lang.reflect.Field, readOnly: boolean): com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>;
					public createPropertyAccessor(bean: java.lang.Class<any>, getter: java.lang.reflect.Method, setter: java.lang.reflect.Method): com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>;
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export class AnyTypeAdapter extends javax.xml.bind.annotation.adapters.XmlAdapter<any,any> {
					public static class: java.lang.Class<com.sun.xml.bind.AnyTypeAdapter>;
					public unmarshal(object0: any): any;
					public constructor();
					public marshal(object0: any): any;
					public unmarshal(v: any): any;
					public marshal(v: any): any;
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export class CycleRecoverable extends java.lang.Object {
					public static class: java.lang.Class<com.sun.xml.bind.CycleRecoverable>;
					/**
					 * Constructs a new instance of the com.sun.xml.bind.CycleRecoverable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onCycleDetected(context0: com.sun.xml.bind.CycleRecoverable.Context): any;
					});
					public constructor();
					public onCycleDetected(context0: com.sun.xml.bind.CycleRecoverable.Context): any;
				}
				export module CycleRecoverable {
					export class Context extends java.lang.Object {
						public static class: java.lang.Class<com.sun.xml.bind.CycleRecoverable.Context>;
						/**
						 * Constructs a new instance of the com.sun.xml.bind.CycleRecoverable$Context interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getMarshaller(): javax.xml.bind.Marshaller;
						});
						public constructor();
						public getMarshaller(): javax.xml.bind.Marshaller;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export class DatatypeConverterImpl extends java.lang.Object implements javax.xml.bind.DatatypeConverterInterface {
					public static class: java.lang.Class<com.sun.xml.bind.DatatypeConverterImpl>;
					public static theInstance: javax.xml.bind.DatatypeConverterInterface;
					public static _printDateTime(val: java.util.Calendar): string;
					/** @deprecated */
					public printShort(val: number): string;
					public parseQName(lexicalXSDQName: string, nsc: javax.xml.namespace.NamespaceContext): javax.xml.namespace.QName;
					public static _parseInt(s: string): number;
					public parseHexBinary(s: string): native.Array<number>;
					/** @deprecated */
					public parseBoolean(lexicalXSDBoolean: string): boolean;
					public parseDouble(lexicalXSDDouble: string): number;
					public printUnsignedShort(val: number): string;
					public constructor();
					public static _printBase64Binary(input: native.Array<number>): string;
					public printDouble(v: number): string;
					/** @deprecated */
					public printInteger(val: java.math.BigInteger): string;
					public static encode(i: number): string;
					public parseByte(lexicalXSDByte: string): number;
					public static _printFloat(v: number): string;
					/** @deprecated */
					public printDateTime(val: java.util.Calendar): string;
					public static _parseLong(s: string): number;
					public printQName(val: javax.xml.namespace.QName, nsc: javax.xml.namespace.NamespaceContext): string;
					public parseInt(s: string): number;
					public static getDatatypeFactory(): javax.xml.datatype.DatatypeFactory;
					/** @deprecated */
					public parseHexBinary(s: string): native.Array<number>;
					/** @deprecated */
					public parseDate(lexicalXSDDate: string): java.util.Calendar;
					public static _printBase64Binary(input: native.Array<number>, offset: number, len: number, out: native.Array<number>, ptr: number): number;
					public static _parseQName(text: string, nsc: javax.xml.namespace.NamespaceContext): javax.xml.namespace.QName;
					/** @deprecated */
					public printDate(val: java.util.Calendar): string;
					/** @deprecated */
					public printTime(val: java.util.Calendar): string;
					/** @deprecated */
					public printBase64Binary(val: native.Array<number>): string;
					/** @deprecated */
					public parseByte(lexicalXSDByte: string): number;
					public printInteger(val: java.math.BigInteger): string;
					/** @deprecated */
					public parseLong(lexicalXSLong: string): number;
					public printHexBinary(data: native.Array<number>): string;
					public static _printShort(val: number): string;
					/** @deprecated */
					public printLong(val: number): string;
					public parseFloat(lexicalXSDFloat: string): number;
					/** @deprecated */
					public printBoolean(val: boolean): string;
					public parseUnsignedShort(lexicalXSDUnsignedShort: string): number;
					/** @deprecated */
					public printString(val: string): string;
					public printDateTime(val: java.util.Calendar): string;
					/** @deprecated */
					public parseString(lexicalXSDString: string): string;
					/** @deprecated */
					public printQName(val: javax.xml.namespace.QName, nsc: javax.xml.namespace.NamespaceContext): string;
					public static _printBase64Binary(input: native.Array<number>, offset: number, len: number): string;
					/** @deprecated */
					public parseShort(lexicalXSDShort: string): number;
					public parseBoolean(lexicalXSDBoolean: string): boolean;
					public parseAnySimpleType(lexicalXSDAnySimpleType: string): string;
					public printByte(val: number): string;
					/** @deprecated */
					public printDecimal(val: java.math.BigDecimal): string;
					public static _printInt(val: number): string;
					public static _printBoolean(val: boolean): string;
					public static _parseByte(literal: string): number;
					public static _parseShort(s: string): number;
					public static _printByte(val: number): string;
					/** @deprecated */
					public parseUnsignedInt(lexicalXSDUnsignedInt: string): number;
					public printDecimal(val: java.math.BigDecimal): string;
					public static _printDate(val: java.util.Calendar): string;
					/** @deprecated */
					public printDouble(v: number): string;
					public parseTime(lexicalXSDTime: string): java.util.Calendar;
					public printFloat(v: number): string;
					public static _printDecimal(val: java.math.BigDecimal): string;
					public static encodeByte(i: number): number;
					public printDate(val: java.util.Calendar): string;
					/** @deprecated */
					public printHexBinary(data: native.Array<number>): string;
					public static _parseDateTime(s: string): java.util.GregorianCalendar;
					public parseBase64Binary(lexicalXSDBase64Binary: string): native.Array<number>;
					/** @deprecated */
					public parseDateTime(lexicalXSDDateTime: string): java.util.Calendar;
					public parseDateTime(lexicalXSDDateTime: string): java.util.Calendar;
					/** @deprecated */
					public parseInt(s: string): number;
					public printAnySimpleType(val: string): string;
					/** @deprecated */
					public printInt(val: number): string;
					public parseLong(lexicalXSLong: string): number;
					public printBoolean(val: boolean): string;
					public static _printBase64Binary(input: native.Array<number>, offset: number, len: number, output: javax.xml.stream.XMLStreamWriter): void;
					public parseDate(lexicalXSDDate: string): java.util.Calendar;
					public static _parseDouble(_val: string): number;
					/** @deprecated */
					public parseBase64Binary(lexicalXSDBase64Binary: string): native.Array<number>;
					/** @deprecated */
					public printAnySimpleType(val: string): string;
					public printBase64Binary(val: native.Array<number>): string;
					public parseInteger(lexicalXSDInteger: string): java.math.BigInteger;
					/** @deprecated */
					public parseDouble(lexicalXSDDouble: string): number;
					public static _parseInteger(s: string): java.math.BigInteger;
					public static _parseDecimal(content: string): java.math.BigDecimal;
					public printShort(val: number): string;
					/** @deprecated */
					public parseQName(lexicalXSDQName: string, nsc: javax.xml.namespace.NamespaceContext): javax.xml.namespace.QName;
					public static _printLong(val: number): string;
					/** @deprecated */
					public parseFloat(lexicalXSDFloat: string): number;
					public static _printInteger(val: java.math.BigInteger): string;
					public static _parseFloat(_val: string): number;
					public printLong(val: number): string;
					public static _printBase64Binary(input: native.Array<number>, offset: number, len: number, buf: native.Array<string>, ptr: number): number;
					/** @deprecated */
					public parseDecimal(content: string): java.math.BigDecimal;
					/** @deprecated */
					public printByte(val: number): string;
					public parseDecimal(content: string): java.math.BigDecimal;
					public parseString(lexicalXSDString: string): string;
					/** @deprecated */
					public parseTime(lexicalXSDTime: string): java.util.Calendar;
					public printUnsignedInt(val: number): string;
					public parseUnsignedInt(lexicalXSDUnsignedInt: string): number;
					public static _parseBase64Binary(text: string): native.Array<number>;
					public printTime(val: java.util.Calendar): string;
					public static _parseBoolean(literal: string): java.lang.Boolean;
					/** @deprecated */
					public printUnsignedInt(val: number): string;
					public static _printQName(val: javax.xml.namespace.QName, nsc: javax.xml.namespace.NamespaceContext): string;
					/** @deprecated */
					public printFloat(v: number): string;
					public static _printDouble(v: number): string;
					public printString(val: string): string;
					/** @deprecated */
					public parseInteger(lexicalXSDInteger: string): java.math.BigInteger;
					/** @deprecated */
					public parseAnySimpleType(lexicalXSDAnySimpleType: string): string;
					/** @deprecated */
					public printUnsignedShort(val: number): string;
					/** @deprecated */
					public parseUnsignedShort(lexicalXSDUnsignedShort: string): number;
					public printInt(val: number): string;
					public parseShort(lexicalXSDShort: string): number;
				}
				export module DatatypeConverterImpl {
					export class CalendarFormatter extends java.lang.Object {
						public static class: java.lang.Class<com.sun.xml.bind.DatatypeConverterImpl.CalendarFormatter>;
						public static doFormat(format: string, cal: java.util.Calendar): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export abstract class IDResolver extends java.lang.Object {
					public static class: java.lang.Class<com.sun.xml.bind.IDResolver>;
					public startDocument(eventHandler: javax.xml.bind.ValidationEventHandler): void;
					public resolve(string0: string, class1: java.lang.Class<any>): java.util.concurrent.Callable<any>;
					public constructor();
					public endDocument(): void;
					public bind(string0: string, object1: any): void;
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export class InternalAccessorFactory extends java.lang.Object implements com.sun.xml.bind.AccessorFactory {
					public static class: java.lang.Class<com.sun.xml.bind.InternalAccessorFactory>;
					/**
					 * Constructs a new instance of the com.sun.xml.bind.InternalAccessorFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						createFieldAccessor(class0: java.lang.Class<any>, field1: java.lang.reflect.Field, boolean2: boolean, boolean3: boolean): com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>;
						createFieldAccessor(class0: java.lang.Class<any>, field1: java.lang.reflect.Field, boolean2: boolean): com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>;
						createPropertyAccessor(class0: java.lang.Class<any>, method1: java.lang.reflect.Method, method2: java.lang.reflect.Method): com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>;
					});
					public constructor();
					public createFieldAccessor(class0: java.lang.Class<any>, field1: java.lang.reflect.Field, boolean2: boolean, boolean3: boolean): com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>;
					public createFieldAccessor(class0: java.lang.Class<any>, field1: java.lang.reflect.Field, boolean2: boolean): com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>;
					public createPropertyAccessor(class0: java.lang.Class<any>, method1: java.lang.reflect.Method, method2: java.lang.reflect.Method): com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>;
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export class Locatable extends java.lang.Object {
					public static class: java.lang.Class<com.sun.xml.bind.Locatable>;
					/**
					 * Constructs a new instance of the com.sun.xml.bind.Locatable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						sourceLocation(): org.xml.sax.Locator;
					});
					public constructor();
					public sourceLocation(): org.xml.sax.Locator;
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export class Messages {
					public static class: java.lang.Class<com.sun.xml.bind.Messages>;
					public static FAILED_TO_INITIALE_DATATYPE_FACTORY: com.sun.xml.bind.Messages;
					public static valueOf(name: string): com.sun.xml.bind.Messages;
					public static values(): native.Array<com.sun.xml.bind.Messages>;
					public toString(): string;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public format(objects0: native.Array<any>): string;
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export class Util extends java.lang.Object {
					public static class: java.lang.Class<com.sun.xml.bind.Util>;
					public static getSystemProperty(name: string): string;
					public static getClassLogger(): java.util.logging.Logger;
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export class ValidationEventLocatorEx extends java.lang.Object implements javax.xml.bind.ValidationEventLocator {
					public static class: java.lang.Class<com.sun.xml.bind.ValidationEventLocatorEx>;
					/**
					 * Constructs a new instance of the com.sun.xml.bind.ValidationEventLocatorEx interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getFieldName(): string;
						getURL(): java.net.URL;
						getOffset(): number;
						getLineNumber(): number;
						getColumnNumber(): number;
						getObject(): any;
						getNode(): org.w3c.dom.Node;
					});
					public constructor();
					public getURL(): java.net.URL;
					public getLineNumber(): number;
					public getColumnNumber(): number;
					public getNode(): org.w3c.dom.Node;
					public getOffset(): number;
					public getObject(): any;
					public getFieldName(): string;
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export abstract class WhiteSpaceProcessor extends java.lang.Object {
					public static class: java.lang.Class<com.sun.xml.bind.WhiteSpaceProcessor>;
					public static replace(text: string): string;
					public static isWhiteSpace(ch: string): boolean;
					public constructor();
					public static trim(text: string): string;
					public static isWhiteSpaceExceptSpace(ch: string): boolean;
					public static isWhiteSpace(s: string): boolean;
					public static collapse(text: string): string;
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export class XmlAccessorFactory extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<com.sun.xml.bind.XmlAccessorFactory>;
					/**
					 * Constructs a new instance of the com.sun.xml.bind.XmlAccessorFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						value(): java.lang.Class<any>;
						equals(object0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(obj: any): boolean;
					public toString(): string;
					public value(): java.lang.Class<any>;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module annotation {
					export class OverrideAnnotationOf extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<com.sun.xml.bind.annotation.OverrideAnnotationOf>;
						/**
						 * Constructs a new instance of the com.sun.xml.bind.annotation.OverrideAnnotationOf interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							value(): string;
							equals(object0: any): boolean;
							hashCode(): number;
							toString(): string;
							annotationType(): java.lang.Class<any>;
						});
						public constructor();
						public value(): string;
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

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module annotation {
					export class XmlIsSet extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<com.sun.xml.bind.annotation.XmlIsSet>;
						/**
						 * Constructs a new instance of the com.sun.xml.bind.annotation.XmlIsSet interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							value(): string;
							equals(object0: any): boolean;
							hashCode(): number;
							toString(): string;
							annotationType(): java.lang.Class<any>;
						});
						public constructor();
						public value(): string;
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

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module annotation {
					export class XmlLocation extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<com.sun.xml.bind.annotation.XmlLocation>;
						/**
						 * Constructs a new instance of the com.sun.xml.bind.annotation.XmlLocation interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module api {
					export class AccessorException extends java.lang.Exception {
						public static class: java.lang.Class<com.sun.xml.bind.api.AccessorException>;
						public constructor();
						public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
						public constructor(message: string, cause: java.lang.Throwable);
						public constructor(cause: java.lang.Throwable);
						public constructor(message: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module api {
					export abstract class Bridge<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.sun.xml.bind.api.Bridge<any>>;
						public context: com.sun.xml.bind.v2.runtime.JAXBContextImpl;
						public marshal(context: com.sun.xml.bind.api.BridgeContext, object: T, output: java.io.OutputStream, nsContext: javax.xml.namespace.NamespaceContext): void;
						public unmarshal(in0: javax.xml.stream.XMLStreamReader): T;
						public unmarshal(n: org.w3c.dom.Node, au: javax.xml.bind.attachment.AttachmentUnmarshaller): T;
						public marshal(marshaller0: javax.xml.bind.Marshaller, object1: T, result2: javax.xml.transform.Result): void;
						public unmarshal(context: com.sun.xml.bind.api.BridgeContext, in1: javax.xml.stream.XMLStreamReader): T;
						public marshal(context: com.sun.xml.bind.api.BridgeContext, object: T, result: javax.xml.transform.Result): void;
						public unmarshal(unmarshaller0: javax.xml.bind.Unmarshaller, xMLStreamReader1: javax.xml.stream.XMLStreamReader): T;
						public unmarshal(n: org.w3c.dom.Node): T;
						public marshal(object: T, output: org.w3c.dom.Node): void;
						public unmarshal(in0: javax.xml.transform.Source, au: javax.xml.bind.attachment.AttachmentUnmarshaller): T;
						public marshal(marshaller0: javax.xml.bind.Marshaller, object1: T, xMLStreamWriter2: javax.xml.stream.XMLStreamWriter): void;
						public marshal(marshaller0: javax.xml.bind.Marshaller, object1: T, outputStream2: java.io.OutputStream, namespaceContext3: javax.xml.namespace.NamespaceContext): void;
						public marshal(object: T, output: java.io.OutputStream, nsContext: javax.xml.namespace.NamespaceContext): void;
						public marshal(context: com.sun.xml.bind.api.BridgeContext, object: T, output: javax.xml.stream.XMLStreamWriter): void;
						public marshal(context: com.sun.xml.bind.api.BridgeContext, object: T, contentHandler: org.xml.sax.ContentHandler): void;
						public marshal(marshaller0: javax.xml.bind.Marshaller, object1: T, contentHandler2: org.xml.sax.ContentHandler): void;
						public unmarshal(in0: java.io.InputStream): T;
						public unmarshal(context: com.sun.xml.bind.api.BridgeContext, n: org.w3c.dom.Node): T;
						public marshal(object: T, output: java.io.OutputStream, nsContext: javax.xml.namespace.NamespaceContext, am: javax.xml.bind.attachment.AttachmentMarshaller): void;
						public marshal(marshaller0: javax.xml.bind.Marshaller, object1: T, node2: org.w3c.dom.Node): void;
						public marshal(object: T, output: javax.xml.stream.XMLStreamWriter): void;
						public marshal(object: T, output: javax.xml.stream.XMLStreamWriter, am: javax.xml.bind.attachment.AttachmentMarshaller): void;
						public marshal(context: com.sun.xml.bind.api.BridgeContext, object: T, output: org.w3c.dom.Node): void;
						public unmarshal(unmarshaller0: javax.xml.bind.Unmarshaller, inputStream1: java.io.InputStream): T;
						public unmarshal(in0: javax.xml.stream.XMLStreamReader, au: javax.xml.bind.attachment.AttachmentUnmarshaller): T;
						public unmarshal(unmarshaller0: javax.xml.bind.Unmarshaller, node1: org.w3c.dom.Node): T;
						public getTypeReference(): com.sun.xml.bind.api.TypeReference;
						public getContext(): com.sun.xml.bind.api.JAXBRIContext;
						public marshal(object: T, contentHandler: org.xml.sax.ContentHandler): void;
						public unmarshal(context: com.sun.xml.bind.api.BridgeContext, in1: javax.xml.transform.Source): T;
						public constructor(context: com.sun.xml.bind.v2.runtime.JAXBContextImpl);
						public unmarshal(in0: javax.xml.transform.Source): T;
						public marshal(object: T, result: javax.xml.transform.Result): void;
						public unmarshal(unmarshaller0: javax.xml.bind.Unmarshaller, source1: javax.xml.transform.Source): T;
						public marshal(object: T, contentHandler: org.xml.sax.ContentHandler, am: javax.xml.bind.attachment.AttachmentMarshaller): void;
						public unmarshal(context: com.sun.xml.bind.api.BridgeContext, in1: java.io.InputStream): T;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module api {
					export abstract class BridgeContext extends java.lang.Object {
						public static class: java.lang.Class<com.sun.xml.bind.api.BridgeContext>;
						public constructor();
						public setAttachmentUnmarshaller(attachmentUnmarshaller0: javax.xml.bind.attachment.AttachmentUnmarshaller): void;
						public setErrorHandler(validationEventHandler0: javax.xml.bind.ValidationEventHandler): void;
						public getAttachmentUnmarshaller(): javax.xml.bind.attachment.AttachmentUnmarshaller;
						public getAttachmentMarshaller(): javax.xml.bind.attachment.AttachmentMarshaller;
						public setAttachmentMarshaller(attachmentMarshaller0: javax.xml.bind.attachment.AttachmentMarshaller): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module api {
					export abstract class ClassResolver extends java.lang.Object {
						public static class: java.lang.Class<com.sun.xml.bind.api.ClassResolver>;
						public constructor();
						public resolveElementName(string0: string, string1: string): java.lang.Class<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module api {
					export class CompositeStructure extends java.lang.Object {
						public static class: java.lang.Class<com.sun.xml.bind.api.CompositeStructure>;
						public bridges: native.Array<com.sun.xml.bind.api.Bridge<any>>;
						public values: native.Array<any>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module api {
					export class ErrorListener extends java.lang.Object implements org.xml.sax.ErrorHandler {
						public static class: java.lang.Class<com.sun.xml.bind.api.ErrorListener>;
						/**
						 * Constructs a new instance of the com.sun.xml.bind.api.ErrorListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							error(sAXParseException0: org.xml.sax.SAXParseException): void;
							fatalError(sAXParseException0: org.xml.sax.SAXParseException): void;
							warning(sAXParseException0: org.xml.sax.SAXParseException): void;
							info(sAXParseException0: org.xml.sax.SAXParseException): void;
							warning(sAXParseException0: org.xml.sax.SAXParseException): void;
							error(sAXParseException0: org.xml.sax.SAXParseException): void;
							fatalError(sAXParseException0: org.xml.sax.SAXParseException): void;
						});
						public constructor();
						public error(sAXParseException0: org.xml.sax.SAXParseException): void;
						public fatalError(sAXParseException0: org.xml.sax.SAXParseException): void;
						public warning(sAXParseException0: org.xml.sax.SAXParseException): void;
						public info(sAXParseException0: org.xml.sax.SAXParseException): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module api {
					export abstract class JAXBRIContext extends javax.xml.bind.JAXBContext {
						public static class: java.lang.Class<com.sun.xml.bind.api.JAXBRIContext>;
						public static DEFAULT_NAMESPACE_REMAP: string;
						public static TYPE_REFERENCES: string;
						public static CANONICALIZATION_SUPPORT: string;
						public static TREAT_EVERYTHING_NILLABLE: string;
						public static ANNOTATION_READER: string;
						public static ENABLE_XOP: string;
						public static SUBCLASS_REPLACEMENTS: string;
						public static XMLACCESSORFACTORY_SUPPORT: string;
						public static RETAIN_REFERENCE_TO_INFO: string;
						public static SUPRESS_ACCESSOR_WARNINGS: string;
						public static IMPROVED_XSI_TYPE_HANDLING: string;
						public static DISABLE_XML_SECURITY: string;
						public static BACKUP_WITH_PARENT_NAMESPACE: string;
						public static newInstance(classesToBeBound: native.Array<java.lang.Class<any>>): javax.xml.bind.JAXBContext;
						public hasSwaRef(): boolean;
						public getRuntimeTypeInfoSet(): com.sun.xml.bind.v2.model.runtime.RuntimeTypeInfoSet;
						public generateSchema(outputResolver: javax.xml.bind.SchemaOutputResolver): void;
						public static mangleNameToVariableName(localName: string): string;
						public getElementName(class0: java.lang.Class<any>): javax.xml.namespace.QName;
						public createBridgeContext(): com.sun.xml.bind.api.BridgeContext;
						public static getBaseType(type: java.lang.reflect.Type, baseType: java.lang.Class<any>): java.lang.reflect.Type;
						/** @deprecated */
						public static newInstance(classes: native.Array<java.lang.Class<any>>, typeRefs: java.util.Collection<com.sun.xml.bind.api.TypeReference>, defaultNamespaceRemap: string, c14nSupport: boolean): com.sun.xml.bind.api.JAXBRIContext;
						public static mangleNameToPropertyName(localName: string): string;
						public static newInstance(classes: native.Array<java.lang.Class<any>>, typeRefs: java.util.Collection<com.sun.xml.bind.api.TypeReference>, subclassReplacements: java.util.Map<java.lang.Class<any>,java.lang.Class<any>>, defaultNamespaceRemap: string, c14nSupport: boolean, ar: com.sun.xml.bind.v2.model.annotation.RuntimeAnnotationReader): com.sun.xml.bind.api.JAXBRIContext;
						public constructor();
						public static newInstance(classesToBeBound: native.Array<java.lang.Class<any>>, properties: java.util.Map<string,any>): javax.xml.bind.JAXBContext;
						public createBridge(typeReference0: com.sun.xml.bind.api.TypeReference): com.sun.xml.bind.api.Bridge<any>;
						public getKnownNamespaceURIs(): java.util.List<string>;
						public getElementName(object0: any): javax.xml.namespace.QName;
						public static newInstance(contextPath: string, classLoader: java.lang.ClassLoader): javax.xml.bind.JAXBContext;
						public static newInstance(classes: native.Array<java.lang.Class<any>>, typeRefs: java.util.Collection<com.sun.xml.bind.api.TypeReference>, subclassReplacements: java.util.Map<java.lang.Class<any>,java.lang.Class<any>>, defaultNamespaceRemap: string, c14nSupport: boolean, ar: com.sun.xml.bind.v2.model.annotation.RuntimeAnnotationReader, xmlAccessorFactorySupport: boolean, allNillable: boolean, retainPropertyInfo: boolean, supressAccessorWarnings: boolean): com.sun.xml.bind.api.JAXBRIContext;
						public static mangleNameToClassName(localName: string): string;
						public static newInstance(contextPath: string): javax.xml.bind.JAXBContext;
						public getTypeName(typeReference0: com.sun.xml.bind.api.TypeReference): javax.xml.namespace.QName;
						public static newInstance(contextPath: string, classLoader: java.lang.ClassLoader, properties: java.util.Map<string,any>): javax.xml.bind.JAXBContext;
						public getBuildId(): string;
						public generateEpisode(result0: javax.xml.transform.Result): void;
						public getElementPropertyAccessor(class0: java.lang.Class<any>, string1: string, string2: string): com.sun.xml.bind.api.RawAccessor<any,any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module api {
					export class Messages {
						public static class: java.lang.Class<com.sun.xml.bind.api.Messages>;
						public static ARGUMENT_CANT_BE_NULL: com.sun.xml.bind.api.Messages;
						public static values(): native.Array<com.sun.xml.bind.api.Messages>;
						public static valueOf(name: string): com.sun.xml.bind.api.Messages;
						public format(objects0: native.Array<any>): string;
						public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module api {
					export abstract class RawAccessor<B, V>  extends java.lang.Object {
						public static class: java.lang.Class<com.sun.xml.bind.api.RawAccessor<any,any>>;
						public constructor();
						public get(object0: B): V;
						public set(object0: B, object1: V): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module api {
					export class TypeReference extends java.lang.Object {
						public static class: java.lang.Class<com.sun.xml.bind.api.TypeReference>;
						public tagName: javax.xml.namespace.QName;
						public type: java.lang.reflect.Type;
						public annotations: native.Array<java.lang.annotation.Annotation>;
						public equals(obj: any): boolean;
						public constructor(tagName: javax.xml.namespace.QName, type: java.lang.reflect.Type, annotations: native.Array<java.lang.annotation.Annotation>);
						public toItemType(): com.sun.xml.bind.api.TypeReference;
						public get(annotationType: java.lang.Class<any>): java.lang.annotation.Annotation;
						public hashCode(): number;
						public equals(o: any): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module api {
					export class Utils extends java.lang.Object {
						public static class: java.lang.Class<com.sun.xml.bind.api.Utils>;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module api {
					export module impl {
						export class NameConverter extends java.lang.Object {
							public static class: java.lang.Class<com.sun.xml.bind.api.impl.NameConverter>;
							/**
							 * Constructs a new instance of the com.sun.xml.bind.api.impl.NameConverter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								toClassName(string0: string): string;
								toInterfaceName(string0: string): string;
								toPropertyName(string0: string): string;
								toConstantName(string0: string): string;
								toVariableName(string0: string): string;
								toPackageName(string0: string): string;
							});
							public constructor();
							public static jaxrpcCompatible: com.sun.xml.bind.api.impl.NameConverter;
							public static standard: com.sun.xml.bind.api.impl.NameConverter;
							public static smart: com.sun.xml.bind.api.impl.NameConverter;
							public toInterfaceName(string0: string): string;
							public toVariableName(string0: string): string;
							public toPackageName(string0: string): string;
							public toClassName(string0: string): string;
							public toPropertyName(string0: string): string;
							public toConstantName(string0: string): string;
						}
						export module NameConverter {
							export class Standard extends com.sun.xml.bind.api.impl.NameUtil implements com.sun.xml.bind.api.impl.NameConverter {
								public static class: java.lang.Class<com.sun.xml.bind.api.impl.NameConverter.Standard>;
								public toVariableName(s: string): string;
								public toClassName(s: string): string;
								public toPropertyName(s: string): string;
								public toInterfaceName(token: string): string;
								public constructor();
								public toConstantName(s: string): string;
								public toConstantName(ss: java.util.List<string>): string;
								public toPackageName(nsUri: string): string;
								public toConstantName(token: string): string;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module api {
					export module impl {
						export class NameUtil extends java.lang.Object {
							public static class: java.lang.Class<com.sun.xml.bind.api.impl.NameUtil>;
							public static UPPER_LETTER: number;
							public static LOWER_LETTER: number;
							public static OTHER_LETTER: number;
							public static DIGIT: number;
							public static OTHER: number;
							public static isDigit(c: string): boolean;
							public toWordList(s: string): java.util.List<string>;
							public capitalize(s: string): string;
							public classify(c0: string): number;
							public static escape(sb: java.lang.StringBuilder, s: string, start: number): void;
							public static isUpper(c: string): boolean;
							public isPunct(c: string): boolean;
							public toMixedCaseName(ss: java.util.List<string>, startUpper: boolean): string;
							public toConstantName(s: string): string;
							public static isLower(c: string): boolean;
							public isLetter(c: string): boolean;
							public toMixedCaseVariableName(ss: native.Array<string>, startUpper: boolean, cdrUpper: boolean): string;
							public toConstantName(ss: java.util.List<string>): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module marshaller {
					export class CharacterEscapeHandler extends java.lang.Object {
						public static class: java.lang.Class<com.sun.xml.bind.marshaller.CharacterEscapeHandler>;
						/**
						 * Constructs a new instance of the com.sun.xml.bind.marshaller.CharacterEscapeHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							escape(chars0: native.Array<string>, int1: number, int2: number, boolean3: boolean, writer4: java.io.Writer): void;
						});
						public constructor();
						public escape(chars0: native.Array<string>, int1: number, int2: number, boolean3: boolean, writer4: java.io.Writer): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module marshaller {
					export class DataWriter extends com.sun.xml.bind.marshaller.XMLWriter {
						public static class: java.lang.Class<com.sun.xml.bind.marshaller.DataWriter>;
						public error(e: org.xml.sax.SAXParseException): void;
						/** @deprecated */
						public getIndentStep(): number;
						public setIndentStep(s: string): void;
						public getParent(): org.xml.sax.XMLReader;
						public skippedEntity(name: string): void;
						public endPrefixMapping(prefix: string): void;
						public processingInstruction(target: string, data: string): void;
						public endElement(uri: string, localName: string, qName: string): void;
						public endDocument(): void;
						public endElement(localName: string): void;
						public endElement(uri: string, localName: string): void;
						/** @deprecated */
						public setIndentStep(indentStep: number): void;
						public startPrefixMapping(prefix: string, uri: string): void;
						public warning(e: org.xml.sax.SAXParseException): void;
						public ignorableWhitespace(ch: native.Array<string>, start: number, length: number): void;
						public constructor();
						public startElement(uri: string, localName: string, qName: string, atts: org.xml.sax.Attributes): void;
						public startDocument(): void;
						public notationDecl(name: string, publicId: string, systemId: string): void;
						public constructor(writer: java.io.Writer, encoding: string);
						public fatalError(e: org.xml.sax.SAXParseException): void;
						public constructor(parent: org.xml.sax.XMLReader);
						public setParent(parent: org.xml.sax.XMLReader): void;
						public startElement(uri: string, localName: string): void;
						public characters(ch: native.Array<string>, start: number, len: number): void;
						public characters(data: string): void;
						public resolveEntity(publicId: string, systemId: string): org.xml.sax.InputSource;
						public writeXmlDecl(decl: string): void;
						public unparsedEntityDecl(name: string, publicId: string, systemId: string, notationName: string): void;
						public setDocumentLocator(locator: org.xml.sax.Locator): void;
						public constructor(writer: java.io.Writer, encoding: string, _escapeHandler: com.sun.xml.bind.marshaller.CharacterEscapeHandler);
						public reset(): void;
						public startElement(localName: string): void;
						public characters(ch: native.Array<string>, start: number, length: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module marshaller {
					export class DumbEscapeHandler extends java.lang.Object implements com.sun.xml.bind.marshaller.CharacterEscapeHandler {
						public static class: java.lang.Class<com.sun.xml.bind.marshaller.DumbEscapeHandler>;
						public static theInstance: com.sun.xml.bind.marshaller.CharacterEscapeHandler;
						public escape(ch: native.Array<string>, start: number, length: number, isAttVal: boolean, out: java.io.Writer): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module marshaller {
					export class Messages extends java.lang.Object {
						public static class: java.lang.Class<com.sun.xml.bind.marshaller.Messages>;
						public static NOT_MARSHALLABLE: string;
						public static UNSUPPORTED_RESULT: string;
						public static UNSUPPORTED_ENCODING: string;
						public static NULL_WRITER: string;
						public static ASSERT_FAILED: string;
						public static ERR_MISSING_OBJECT: string;
						public static ERR_DANGLING_IDREF: string;
						public static ERR_NOT_IDENTIFIABLE: string;
						public static DOM_IMPL_DOESNT_SUPPORT_CREATELEMENTNS: string;
						public constructor();
						public static format(property: string): string;
						public static format(property: string, object1: any): string;
						public static format(property: string, object1: any, object2: any): string;
						public static format(property: string, object1: any, object2: any, object3: any): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module marshaller {
					export class MinimumEscapeHandler extends java.lang.Object implements com.sun.xml.bind.marshaller.CharacterEscapeHandler {
						public static class: java.lang.Class<com.sun.xml.bind.marshaller.MinimumEscapeHandler>;
						public static theInstance: com.sun.xml.bind.marshaller.CharacterEscapeHandler;
						public escape(ch: native.Array<string>, start: number, length: number, isAttVal: boolean, out: java.io.Writer): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module marshaller {
					export abstract class NamespacePrefixMapper extends java.lang.Object {
						public static class: java.lang.Class<com.sun.xml.bind.marshaller.NamespacePrefixMapper>;
						public constructor();
						public getPreDeclaredNamespaceUris2(): native.Array<string>;
						public getPreferredPrefix(string0: string, string1: string, boolean2: boolean): string;
						public getPreDeclaredNamespaceUris(): native.Array<string>;
						public getContextualNamespaceDecls(): native.Array<string>;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module marshaller {
					export class NioEscapeHandler extends java.lang.Object implements com.sun.xml.bind.marshaller.CharacterEscapeHandler {
						public static class: java.lang.Class<com.sun.xml.bind.marshaller.NioEscapeHandler>;
						public constructor(charsetName: string);
						public escape(ch: native.Array<string>, start: number, length: number, isAttVal: boolean, out: java.io.Writer): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module marshaller {
					export class NoEscapeHandler extends java.lang.Object implements com.sun.xml.bind.marshaller.CharacterEscapeHandler {
						public static class: java.lang.Class<com.sun.xml.bind.marshaller.NoEscapeHandler>;
						public static theInstance: com.sun.xml.bind.marshaller.NoEscapeHandler;
						public constructor();
						public escape(ch: native.Array<string>, start: number, length: number, isAttVal: boolean, out: java.io.Writer): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module marshaller {
					export class SAX2DOMEx extends java.lang.Object implements org.xml.sax.ContentHandler {
						public static class: java.lang.Class<com.sun.xml.bind.marshaller.SAX2DOMEx>;
						public nodeStack: java.util.Stack<org.w3c.dom.Node>;
						public document: org.w3c.dom.Document;
						public getCurrentElement(): org.w3c.dom.Element;
						public namespace(element: org.w3c.dom.Element, prefix: string, uri: string): void;
						public ignorableWhitespace(ch: native.Array<string>, start: number, length: number): void;
						public startDocument(): void;
						public constructor(node: org.w3c.dom.Node, isConsolidate: boolean);
						public constructor(f: javax.xml.parsers.DocumentBuilderFactory);
						public startElement(namespace: string, localName: string, qName: string, attrs: org.xml.sax.Attributes): void;
						public constructor(node: org.w3c.dom.Node);
						public skippedEntity(name: string): void;
						public processingInstruction(target: string, data: string): void;
						public endPrefixMapping(prefix: string): void;
						/** @deprecated */
						public constructor();
						public endDocument(): void;
						public endElement(namespace: string, localName: string, qName: string): void;
						public getDOM(): org.w3c.dom.Node;
						public characters(s: string): org.w3c.dom.Text;
						public startPrefixMapping(prefix: string, uri: string): void;
						public setDocumentLocator(locator: org.xml.sax.Locator): void;
						public characters(ch: native.Array<string>, start: number, length: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module marshaller {
					export class XMLWriter extends org.xml.sax.helpers.XMLFilterImpl {
						public static class: java.lang.Class<com.sun.xml.bind.marshaller.XMLWriter>;
						public error(e: org.xml.sax.SAXParseException): void;
						public setHeader(_header: string): void;
						public setXmlDecl(_writeXmlDecl: boolean): void;
						public dataElement(uri: string, localName: string, content: string): void;
						public getParent(): org.xml.sax.XMLReader;
						public skippedEntity(name: string): void;
						public processingInstruction(target: string, data: string): void;
						public dataElement(uri: string, localName: string, qName: string, atts: org.xml.sax.Attributes, content: string): void;
						public endPrefixMapping(prefix: string): void;
						public endElement(uri: string, localName: string, qName: string): void;
						public endDocument(): void;
						public endElement(localName: string): void;
						public endElement(uri: string, localName: string): void;
						public startPrefixMapping(prefix: string, uri: string): void;
						public warning(e: org.xml.sax.SAXParseException): void;
						public ignorableWhitespace(ch: native.Array<string>, start: number, length: number): void;
						public constructor();
						public startElement(uri: string, localName: string, qName: string, atts: org.xml.sax.Attributes): void;
						public startDocument(): void;
						public notationDecl(name: string, publicId: string, systemId: string): void;
						public flush(): void;
						public constructor(writer: java.io.Writer, encoding: string);
						public write(c: string): void;
						public fatalError(e: org.xml.sax.SAXParseException): void;
						public dataElement(localName: string, content: string): void;
						public constructor(parent: org.xml.sax.XMLReader);
						public setParent(parent: org.xml.sax.XMLReader): void;
						public startElement(uri: string, localName: string): void;
						public characters(ch: native.Array<string>, start: number, len: number): void;
						public characters(data: string): void;
						public write(s: string): void;
						public setOutput(writer: java.io.Writer, _encoding: string): void;
						public resolveEntity(publicId: string, systemId: string): org.xml.sax.InputSource;
						public writeXmlDecl(decl: string): void;
						public unparsedEntityDecl(name: string, publicId: string, systemId: string, notationName: string): void;
						public setDocumentLocator(locator: org.xml.sax.Locator): void;
						public constructor(writer: java.io.Writer, encoding: string, _escapeHandler: com.sun.xml.bind.marshaller.CharacterEscapeHandler);
						public reset(): void;
						public characters(ch: native.Array<string>, start: number, length: number): void;
						public startElement(localName: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module unmarshaller {
					export class DOMScanner extends java.lang.Object implements com.sun.xml.bind.v2.runtime.unmarshaller.LocatorEx, com.sun.xml.bind.unmarshaller.InfosetScanner<any> {
						public static class: java.lang.Class<com.sun.xml.bind.unmarshaller.DOMScanner>;
						public scan(doc: org.w3c.dom.Document): void;
						public constructor();
						public getLineNumber(): number;
						/** @deprecated */
						public parseWithContext(e: org.w3c.dom.Element, handler: org.xml.sax.ContentHandler): void;
						public getColumnNumber(): number;
						public scan(e: org.w3c.dom.Element): void;
						public getContentHandler(): org.xml.sax.ContentHandler;
						public getCurrentElement(): any;
						public getPublicId(): string;
						public getCurrentLocation(): org.w3c.dom.Node;
						public getSystemId(): string;
						public setContentHandler(handler: org.xml.sax.ContentHandler): void;
						public getLocator(): com.sun.xml.bind.v2.runtime.unmarshaller.LocatorEx;
						public scan(node: any): void;
						/** @deprecated */
						public parse(e: org.w3c.dom.Element, handler: org.xml.sax.ContentHandler): void;
						public getLocation(): javax.xml.bind.ValidationEventLocator;
						public visit(e: org.w3c.dom.Element): void;
						public setLocator(loc: org.xml.sax.Locator): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module unmarshaller {
					export class InfosetScanner<XmlNode>  extends java.lang.Object {
						public static class: java.lang.Class<com.sun.xml.bind.unmarshaller.InfosetScanner<any>>;
						/**
						 * Constructs a new instance of the com.sun.xml.bind.unmarshaller.InfosetScanner<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							scan(object0: XmlNode): void;
							setContentHandler(contentHandler0: org.xml.sax.ContentHandler): void;
							getContentHandler(): org.xml.sax.ContentHandler;
							getCurrentElement(): XmlNode;
							getLocator(): com.sun.xml.bind.v2.runtime.unmarshaller.LocatorEx;
						});
						public constructor();
						public scan(object0: XmlNode): void;
						public setContentHandler(contentHandler0: org.xml.sax.ContentHandler): void;
						public getLocator(): com.sun.xml.bind.v2.runtime.unmarshaller.LocatorEx;
						public getContentHandler(): org.xml.sax.ContentHandler;
						public getCurrentElement(): XmlNode;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module unmarshaller {
					export class Messages extends java.lang.Object {
						public static class: java.lang.Class<com.sun.xml.bind.unmarshaller.Messages>;
						public static UNEXPECTED_ENTER_ELEMENT: string;
						public static UNEXPECTED_LEAVE_ELEMENT: string;
						public static UNEXPECTED_ENTER_ATTRIBUTE: string;
						public static UNEXPECTED_LEAVE_ATTRIBUTE: string;
						public static UNEXPECTED_TEXT: string;
						public static UNEXPECTED_LEAVE_CHILD: string;
						public static UNEXPECTED_ROOT_ELEMENT: string;
						public static UNDEFINED_PREFIX: string;
						public static NULL_READER: string;
						public static ILLEGAL_READER_STATE: string;
						public constructor();
						public static format(property: string): string;
						public static format(property: string, object1: any): string;
						public static format(property: string, object1: any, object2: any): string;
						public static format(property: string, object1: any, object2: any, object3: any): string;
						public static format(property: string, objects1: native.Array<any>): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module unmarshaller {
					export class Patcher extends java.lang.Object {
						public static class: java.lang.Class<com.sun.xml.bind.unmarshaller.Patcher>;
						/**
						 * Constructs a new instance of the com.sun.xml.bind.unmarshaller.Patcher interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							run(): void;
						});
						public constructor();
						public run(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module util {
					export class AttributesImpl extends java.lang.Object implements org.xml.sax.Attributes {
						public static class: java.lang.Class<com.sun.xml.bind.util.AttributesImpl>;
						public getValue(index: number): string;
						public getLocalName(index: number): string;
						public setURI(index: number, uri: string): void;
						public setValue(index: number, value: string): void;
						public getIndex(uri: string, localName: string): number;
						public getLength(): number;
						public getType(uri: string, localName: string): string;
						public setType(index: number, type: string): void;
						public getValue(qName: string): string;
						public setQName(index: number, qName: string): void;
						public getURI(index: number): string;
						public setAttribute(index: number, uri: string, localName: string, qName: string, type: string, value: string): void;
						public addAttribute(uri: string, localName: string, qName: string, type: string, value: string): void;
						public getIndexFast(uri: string, localName: string): number;
						public getQName(index: number): string;
						public removeAttribute(index: number): void;
						public constructor();
						public getType(index: number): string;
						public constructor(atts: org.xml.sax.Attributes);
						public getType(qName: string): string;
						public setAttributes(atts: org.xml.sax.Attributes): void;
						public clear(): void;
						public getValue(uri: string, localName: string): string;
						public getIndex(qName: string): number;
						public setLocalName(index: number, localName: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module util {
					export class SecureLoader extends java.lang.Object {
						public static class: java.lang.Class<com.sun.xml.bind.util.SecureLoader>;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module util {
					export class ValidationEventLocatorExImpl extends javax.xml.bind.helpers.ValidationEventLocatorImpl implements com.sun.xml.bind.ValidationEventLocatorEx {
						public static class: java.lang.Class<com.sun.xml.bind.util.ValidationEventLocatorExImpl>;
						public constructor();
						public getLineNumber(): number;
						public constructor(loc: org.xml.sax.Locator);
						public constructor(target: any, fieldName: string);
						public getObject(): any;
						public getNode(): org.w3c.dom.Node;
						public getColumnNumber(): number;
						public constructor(_node: org.w3c.dom.Node);
						public getFieldName(): string;
						public toString(): string;
						public constructor(e: org.xml.sax.SAXParseException);
						public getURL(): java.net.URL;
						public getOffset(): number;
						public constructor(_object: any);
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module util {
					export class Which extends java.lang.Object {
						public static class: java.lang.Class<com.sun.xml.bind.util.Which>;
						public static which(clazz: java.lang.Class<any>): string;
						public constructor();
						public static which(classname: string, loader: java.lang.ClassLoader): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export class ClassFactory extends java.lang.Object {
						public static class: java.lang.Class<com.sun.xml.bind.v2.ClassFactory>;
						public static cleanCache(): void;
						public static create0(clazz: java.lang.Class<any>): any;
						public static create(method: java.lang.reflect.Method): any;
						public constructor();
						public static inferImplClass(fieldType: java.lang.Class<any>, knownImplClasses: native.Array<java.lang.Class<any>>): java.lang.Class<any>;
						public static create(clazz: java.lang.Class<any>): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export class ContextFactory extends java.lang.Object {
						public static class: java.lang.Class<com.sun.xml.bind.v2.ContextFactory>;
						public static USE_JAXB_PROPERTIES: string;
						public constructor();
						/** @deprecated */
						public static createContext(classes: native.Array<java.lang.Class<any>>, typeRefs: java.util.Collection<com.sun.xml.bind.api.TypeReference>, subclassReplacements: java.util.Map<java.lang.Class<any>,java.lang.Class<any>>, defaultNsUri: string, c14nSupport: boolean, ar: com.sun.xml.bind.v2.model.annotation.RuntimeAnnotationReader, xmlAccessorFactorySupport: boolean, allNillable: boolean, retainPropertyInfo: boolean, improvedXsiTypeHandling: boolean): com.sun.xml.bind.api.JAXBRIContext;
						public static createContext(classes: native.Array<java.lang.Class<any>>, properties: java.util.Map<string,any>): javax.xml.bind.JAXBContext;
						public static createContext(contextPath: string, classLoader: java.lang.ClassLoader, properties: java.util.Map<string,any>): javax.xml.bind.JAXBContext;
						/** @deprecated */
						public static createContext(classes: native.Array<java.lang.Class<any>>, typeRefs: java.util.Collection<com.sun.xml.bind.api.TypeReference>, subclassReplacements: java.util.Map<java.lang.Class<any>,java.lang.Class<any>>, defaultNsUri: string, c14nSupport: boolean, ar: com.sun.xml.bind.v2.model.annotation.RuntimeAnnotationReader, xmlAccessorFactorySupport: boolean, allNillable: boolean, retainPropertyInfo: boolean): com.sun.xml.bind.api.JAXBRIContext;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export class Messages {
						public static class: java.lang.Class<com.sun.xml.bind.v2.Messages>;
						public static ILLEGAL_ENTRY: com.sun.xml.bind.v2.Messages;
						public static ERROR_LOADING_CLASS: com.sun.xml.bind.v2.Messages;
						public static INVALID_PROPERTY_VALUE: com.sun.xml.bind.v2.Messages;
						public static UNSUPPORTED_PROPERTY: com.sun.xml.bind.v2.Messages;
						public static BROKEN_CONTEXTPATH: com.sun.xml.bind.v2.Messages;
						public static NO_DEFAULT_CONSTRUCTOR_IN_INNER_CLASS: com.sun.xml.bind.v2.Messages;
						public static INVALID_TYPE_IN_MAP: com.sun.xml.bind.v2.Messages;
						public static INVALID_JAXP_IMPLEMENTATION: com.sun.xml.bind.v2.Messages;
						public static JAXP_SUPPORTED_PROPERTY: com.sun.xml.bind.v2.Messages;
						public static JAXP_UNSUPPORTED_PROPERTY: com.sun.xml.bind.v2.Messages;
						public static JAXP_XML_SECURITY_DISABLED: com.sun.xml.bind.v2.Messages;
						public static JAXP_EXTERNAL_ACCESS_CONFIGURED: com.sun.xml.bind.v2.Messages;
						public static values(): native.Array<com.sun.xml.bind.v2.Messages>;
						public format(objects0: native.Array<any>): string;
						public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
						public toString(): string;
						public static valueOf(name: string): com.sun.xml.bind.v2.Messages;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export abstract class TODO extends java.lang.Object {
						public static class: java.lang.Class<com.sun.xml.bind.v2.TODO>;
						public static prototype(comment: string): void;
						public constructor();
						public static schemaGenerator(comment: string): void;
						public static checkSpec(): void;
						public static checkSpec(comment: string): void;
						public static prototype(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export abstract class WellKnownNamespace extends java.lang.Object {
						public static class: java.lang.Class<com.sun.xml.bind.v2.WellKnownNamespace>;
						public static XML_SCHEMA: string;
						public static XML_SCHEMA_INSTANCE: string;
						public static XML_NAMESPACE_URI: string;
						public static XOP: string;
						public static SWA_URI: string;
						public static XML_MIME_URI: string;
						public static JAXB: string;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module bytecode {
						export class ClassTailor extends java.lang.Object {
							public static class: java.lang.Class<com.sun.xml.bind.v2.bytecode.ClassTailor>;
							public static toVMClassName(c: java.lang.Class<any>): string;
							public static toVMTypeName(c: java.lang.Class<any>): string;
							public static tailor(templateClass: java.lang.Class<any>, newClassName: string, replacements: native.Array<string>): native.Array<number>;
							public static tailor(image: java.io.InputStream, templateClassName: string, newClassName: string, replacements: native.Array<string>): native.Array<number>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module bytecode {
						export class SecureLoader extends java.lang.Object {
							public static class: java.lang.Class<com.sun.xml.bind.v2.bytecode.SecureLoader>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module annotation {
							export abstract class AbstractInlineAnnotationReaderImpl<T, C, F, M>  extends com.sun.xml.bind.v2.model.annotation.AnnotationReader<any,any,any,any> {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.annotation.AbstractInlineAnnotationReaderImpl<any,any,any,any>>;
								public getErrorHandler(): com.sun.xml.bind.v2.model.core.ErrorHandler;
								public getMethodAnnotation(class0: java.lang.Class<any>, object1: any, locatable2: com.sun.xml.bind.v2.model.annotation.Locatable): java.lang.annotation.Annotation;
								public fullName(object0: any): string;
								public hasMethodAnnotation(annotation: java.lang.Class<any>, propertyName: string, getter: any, setter: any, srcPos: com.sun.xml.bind.v2.model.annotation.Locatable): boolean;
								public setErrorHandler(errorHandler: com.sun.xml.bind.v2.model.core.ErrorHandler): void;
								public hasMethodAnnotation(class0: java.lang.Class<any>, object1: any): boolean;
								public constructor();
								public hasFieldAnnotation(class0: java.lang.Class<any>, object1: any): boolean;
								public getAllMethodAnnotations(object0: any, locatable1: com.sun.xml.bind.v2.model.annotation.Locatable): native.Array<java.lang.annotation.Annotation>;
								public getAllFieldAnnotations(object0: any, locatable1: com.sun.xml.bind.v2.model.annotation.Locatable): native.Array<java.lang.annotation.Annotation>;
								public getMethodParameterAnnotation(class0: java.lang.Class<any>, object1: any, int2: number, locatable3: com.sun.xml.bind.v2.model.annotation.Locatable): java.lang.annotation.Annotation;
								public hasClassAnnotation(object0: any, class1: java.lang.Class<any>): boolean;
								public getClassArrayValue(annotation0: java.lang.annotation.Annotation, string1: string): native.Array<any>;
								public getClassValue(annotation0: java.lang.annotation.Annotation, string1: string): any;
								public getFieldAnnotation(class0: java.lang.Class<any>, object1: any, locatable2: com.sun.xml.bind.v2.model.annotation.Locatable): java.lang.annotation.Annotation;
								public getClassAnnotation(class0: java.lang.Class<any>, object1: any, locatable2: com.sun.xml.bind.v2.model.annotation.Locatable): java.lang.annotation.Annotation;
								public getPackageAnnotation(class0: java.lang.Class<any>, object1: any, locatable2: com.sun.xml.bind.v2.model.annotation.Locatable): java.lang.annotation.Annotation;
								public getMethodAnnotation(annotation: java.lang.Class<any>, getter: any, setter: any, srcPos: com.sun.xml.bind.v2.model.annotation.Locatable): java.lang.annotation.Annotation;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module annotation {
							export class AnnotationReader<T, C, F, M>  extends java.lang.Object {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.annotation.AnnotationReader<any,any,any,any>>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.model.annotation.AnnotationReader<any,any,any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									setErrorHandler(errorHandler0: com.sun.xml.bind.v2.model.core.ErrorHandler): void;
									getFieldAnnotation(class0: java.lang.Class<any>, object1: any, locatable2: com.sun.xml.bind.v2.model.annotation.Locatable): java.lang.annotation.Annotation;
									hasFieldAnnotation(class0: java.lang.Class<any>, object1: F): boolean;
									hasClassAnnotation(object0: C, class1: java.lang.Class<any>): boolean;
									getAllFieldAnnotations(object0: F, locatable1: com.sun.xml.bind.v2.model.annotation.Locatable): native.Array<java.lang.annotation.Annotation>;
									getMethodAnnotation(class0: java.lang.Class<any>, object1: any, object2: any, locatable3: com.sun.xml.bind.v2.model.annotation.Locatable): java.lang.annotation.Annotation;
									hasMethodAnnotation(class0: java.lang.Class<any>, string1: string, object2: M, object3: M, locatable4: com.sun.xml.bind.v2.model.annotation.Locatable): boolean;
									getAllMethodAnnotations(object0: M, locatable1: com.sun.xml.bind.v2.model.annotation.Locatable): native.Array<java.lang.annotation.Annotation>;
									getMethodAnnotation(class0: java.lang.Class<any>, object1: any, locatable2: com.sun.xml.bind.v2.model.annotation.Locatable): java.lang.annotation.Annotation;
									hasMethodAnnotation(class0: java.lang.Class<any>, object1: M): boolean;
									getMethodParameterAnnotation(class0: java.lang.Class<any>, object1: any, int2: number, locatable3: com.sun.xml.bind.v2.model.annotation.Locatable): java.lang.annotation.Annotation;
									getClassAnnotation(class0: java.lang.Class<any>, object1: any, locatable2: com.sun.xml.bind.v2.model.annotation.Locatable): java.lang.annotation.Annotation;
									getPackageAnnotation(class0: java.lang.Class<any>, object1: any, locatable2: com.sun.xml.bind.v2.model.annotation.Locatable): java.lang.annotation.Annotation;
									getClassValue(annotation0: java.lang.annotation.Annotation, string1: string): T;
									getClassArrayValue(annotation0: java.lang.annotation.Annotation, string1: string): native.Array<T>;
								});
								public constructor();
								public getMethodAnnotation(class0: java.lang.Class<any>, object1: any, object2: any, locatable3: com.sun.xml.bind.v2.model.annotation.Locatable): java.lang.annotation.Annotation;
								public getMethodAnnotation(class0: java.lang.Class<any>, object1: any, locatable2: com.sun.xml.bind.v2.model.annotation.Locatable): java.lang.annotation.Annotation;
								public getClassValue(annotation0: java.lang.annotation.Annotation, string1: string): T;
								public hasMethodAnnotation(class0: java.lang.Class<any>, object1: M): boolean;
								public getMethodParameterAnnotation(class0: java.lang.Class<any>, object1: any, int2: number, locatable3: com.sun.xml.bind.v2.model.annotation.Locatable): java.lang.annotation.Annotation;
								public hasMethodAnnotation(class0: java.lang.Class<any>, string1: string, object2: M, object3: M, locatable4: com.sun.xml.bind.v2.model.annotation.Locatable): boolean;
								public setErrorHandler(errorHandler0: com.sun.xml.bind.v2.model.core.ErrorHandler): void;
								public getFieldAnnotation(class0: java.lang.Class<any>, object1: any, locatable2: com.sun.xml.bind.v2.model.annotation.Locatable): java.lang.annotation.Annotation;
								public hasFieldAnnotation(class0: java.lang.Class<any>, object1: F): boolean;
								public getAllMethodAnnotations(object0: M, locatable1: com.sun.xml.bind.v2.model.annotation.Locatable): native.Array<java.lang.annotation.Annotation>;
								public getClassAnnotation(class0: java.lang.Class<any>, object1: any, locatable2: com.sun.xml.bind.v2.model.annotation.Locatable): java.lang.annotation.Annotation;
								public getAllFieldAnnotations(object0: F, locatable1: com.sun.xml.bind.v2.model.annotation.Locatable): native.Array<java.lang.annotation.Annotation>;
								public getPackageAnnotation(class0: java.lang.Class<any>, object1: any, locatable2: com.sun.xml.bind.v2.model.annotation.Locatable): java.lang.annotation.Annotation;
								public hasClassAnnotation(object0: C, class1: java.lang.Class<any>): boolean;
								public getClassArrayValue(annotation0: java.lang.annotation.Annotation, string1: string): native.Array<T>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module annotation {
							export class AnnotationSource extends java.lang.Object {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.annotation.AnnotationSource>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.model.annotation.AnnotationSource interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									readAnnotation(class0: java.lang.Class<any>): java.lang.annotation.Annotation;
									hasAnnotation(class0: java.lang.Class<any>): boolean;
								});
								public constructor();
								public hasAnnotation(class0: java.lang.Class<any>): boolean;
								public readAnnotation(class0: java.lang.Class<any>): java.lang.annotation.Annotation;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module annotation {
							export class ClassLocatable<C>  extends com.sun.xml.bind.v2.model.annotation.Locatable {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.annotation.ClassLocatable<any>>;
								public constructor(upstream: com.sun.xml.bind.v2.model.annotation.Locatable, clazz: any, nav: com.sun.xml.bind.v2.model.nav.Navigator<any,any,any,any>);
								public getLocation(): com.sun.xml.bind.v2.runtime.Location;
								public getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module annotation {
							export class FieldLocatable<F>  extends com.sun.xml.bind.v2.model.annotation.Locatable {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.annotation.FieldLocatable<any>>;
								public getLocation(): com.sun.xml.bind.v2.runtime.Location;
								public constructor(upstream: com.sun.xml.bind.v2.model.annotation.Locatable, field: any, nav: com.sun.xml.bind.v2.model.nav.Navigator<any,any,any,any>);
								public getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module annotation {
							export class Init extends java.lang.Object {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.annotation.Init>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module annotation {
							export class Locatable extends java.lang.Object {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.annotation.Locatable>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.model.annotation.Locatable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
									getLocation(): com.sun.xml.bind.v2.runtime.Location;
								});
								public constructor();
								public getLocation(): com.sun.xml.bind.v2.runtime.Location;
								public getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module annotation {
							export class LocatableAnnotation extends java.lang.Object implements java.lang.reflect.InvocationHandler, com.sun.xml.bind.v2.model.annotation.Locatable, com.sun.xml.bind.v2.runtime.Location {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.annotation.LocatableAnnotation>;
								public toString(): string;
								public getLocation(): com.sun.xml.bind.v2.runtime.Location;
								public invoke(proxy: any, method: java.lang.reflect.Method, objects2: native.Array<any>): any;
								public getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
								public static create(annotation: java.lang.annotation.Annotation, parentSourcePos: com.sun.xml.bind.v2.model.annotation.Locatable): java.lang.annotation.Annotation;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module annotation {
							export class Messages {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.annotation.Messages>;
								public static DUPLICATE_ANNOTATIONS: com.sun.xml.bind.v2.model.annotation.Messages;
								public static CLASS_NOT_FOUND: com.sun.xml.bind.v2.model.annotation.Messages;
								public toString(): string;
								public static valueOf(name: string): com.sun.xml.bind.v2.model.annotation.Messages;
								public static values(): native.Array<com.sun.xml.bind.v2.model.annotation.Messages>;
								public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
								public format(objects0: native.Array<any>): string;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module annotation {
							export class MethodLocatable<M>  extends com.sun.xml.bind.v2.model.annotation.Locatable {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.annotation.MethodLocatable<any>>;
								public getLocation(): com.sun.xml.bind.v2.runtime.Location;
								public getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
								public constructor(upstream: com.sun.xml.bind.v2.model.annotation.Locatable, method: any, nav: com.sun.xml.bind.v2.model.nav.Navigator<any,any,any,any>);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module annotation {
							export abstract class Quick extends java.lang.Object implements java.lang.annotation.Annotation, com.sun.xml.bind.v2.model.annotation.Locatable, com.sun.xml.bind.v2.runtime.Location {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.annotation.Quick>;
								public constructor(upstream: com.sun.xml.bind.v2.model.annotation.Locatable);
								public toString(): string;
								public getLocation(): com.sun.xml.bind.v2.runtime.Location;
								public equals(obj: any): boolean;
								public getAnnotation(): java.lang.annotation.Annotation;
								public annotationType(): java.lang.Class<any>;
								public getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
								public newInstance(locatable0: com.sun.xml.bind.v2.model.annotation.Locatable, annotation1: java.lang.annotation.Annotation): com.sun.xml.bind.v2.model.annotation.Quick;
								public hashCode(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module annotation {
							export class RuntimeAnnotationReader extends com.sun.xml.bind.v2.model.annotation.AnnotationReader<java.lang.reflect.Type,java.lang.Class<any>,java.lang.reflect.Field,java.lang.reflect.Method> {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.annotation.RuntimeAnnotationReader>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.model.annotation.RuntimeAnnotationReader interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									setErrorHandler(errorHandler0: com.sun.xml.bind.v2.model.core.ErrorHandler): void;
									getFieldAnnotation(class0: java.lang.Class<any>, object1: any, locatable2: com.sun.xml.bind.v2.model.annotation.Locatable): java.lang.annotation.Annotation;
									hasFieldAnnotation(class0: java.lang.Class<any>, object1: any): boolean;
									hasClassAnnotation(object0: any, class1: java.lang.Class<any>): boolean;
									getAllFieldAnnotations(object0: any, locatable1: com.sun.xml.bind.v2.model.annotation.Locatable): native.Array<java.lang.annotation.Annotation>;
									getMethodAnnotation(class0: java.lang.Class<any>, object1: any, object2: any, locatable3: com.sun.xml.bind.v2.model.annotation.Locatable): java.lang.annotation.Annotation;
									hasMethodAnnotation(class0: java.lang.Class<any>, string1: string, object2: any, object3: any, locatable4: com.sun.xml.bind.v2.model.annotation.Locatable): boolean;
									getAllMethodAnnotations(object0: any, locatable1: com.sun.xml.bind.v2.model.annotation.Locatable): native.Array<java.lang.annotation.Annotation>;
									getMethodAnnotation(class0: java.lang.Class<any>, object1: any, locatable2: com.sun.xml.bind.v2.model.annotation.Locatable): java.lang.annotation.Annotation;
									hasMethodAnnotation(class0: java.lang.Class<any>, object1: any): boolean;
									getMethodParameterAnnotation(class0: java.lang.Class<any>, object1: any, int2: number, locatable3: com.sun.xml.bind.v2.model.annotation.Locatable): java.lang.annotation.Annotation;
									getClassAnnotation(class0: java.lang.Class<any>, object1: any, locatable2: com.sun.xml.bind.v2.model.annotation.Locatable): java.lang.annotation.Annotation;
									getPackageAnnotation(class0: java.lang.Class<any>, object1: any, locatable2: com.sun.xml.bind.v2.model.annotation.Locatable): java.lang.annotation.Annotation;
									getClassValue(annotation0: java.lang.annotation.Annotation, string1: string): any;
									getClassArrayValue(annotation0: java.lang.annotation.Annotation, string1: string): native.Array<any>;
								});
								public constructor();
								public getMethodAnnotation(class0: java.lang.Class<any>, object1: any, object2: any, locatable3: com.sun.xml.bind.v2.model.annotation.Locatable): java.lang.annotation.Annotation;
								public getMethodAnnotation(class0: java.lang.Class<any>, object1: any, locatable2: com.sun.xml.bind.v2.model.annotation.Locatable): java.lang.annotation.Annotation;
								public hasMethodAnnotation(class0: java.lang.Class<any>, object1: any): boolean;
								public hasFieldAnnotation(class0: java.lang.Class<any>, object1: any): boolean;
								public getAllMethodAnnotations(object0: any, locatable1: com.sun.xml.bind.v2.model.annotation.Locatable): native.Array<java.lang.annotation.Annotation>;
								public getAllFieldAnnotations(object0: any, locatable1: com.sun.xml.bind.v2.model.annotation.Locatable): native.Array<java.lang.annotation.Annotation>;
								public getMethodParameterAnnotation(class0: java.lang.Class<any>, object1: any, int2: number, locatable3: com.sun.xml.bind.v2.model.annotation.Locatable): java.lang.annotation.Annotation;
								public hasClassAnnotation(object0: any, class1: java.lang.Class<any>): boolean;
								public getClassArrayValue(annotation0: java.lang.annotation.Annotation, string1: string): native.Array<any>;
								public setErrorHandler(errorHandler0: com.sun.xml.bind.v2.model.core.ErrorHandler): void;
								public getClassValue(annotation0: java.lang.annotation.Annotation, string1: string): any;
								public getFieldAnnotation(class0: java.lang.Class<any>, object1: any, locatable2: com.sun.xml.bind.v2.model.annotation.Locatable): java.lang.annotation.Annotation;
								public getClassAnnotation(class0: java.lang.Class<any>, object1: any, locatable2: com.sun.xml.bind.v2.model.annotation.Locatable): java.lang.annotation.Annotation;
								public hasMethodAnnotation(class0: java.lang.Class<any>, string1: string, object2: any, object3: any, locatable4: com.sun.xml.bind.v2.model.annotation.Locatable): boolean;
								public getPackageAnnotation(class0: java.lang.Class<any>, object1: any, locatable2: com.sun.xml.bind.v2.model.annotation.Locatable): java.lang.annotation.Annotation;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module annotation {
							export class RuntimeInlineAnnotationReader extends com.sun.xml.bind.v2.model.annotation.AbstractInlineAnnotationReaderImpl<java.lang.reflect.Type,java.lang.Class<any>,java.lang.reflect.Field,java.lang.reflect.Method> implements com.sun.xml.bind.v2.model.annotation.RuntimeAnnotationReader  {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.annotation.RuntimeInlineAnnotationReader>;
								public getMethodAnnotation(class0: java.lang.Class<any>, object1: any, locatable2: com.sun.xml.bind.v2.model.annotation.Locatable): java.lang.annotation.Annotation;
								public getAllFieldAnnotations(field: java.lang.reflect.Field, srcPos: com.sun.xml.bind.v2.model.annotation.Locatable): native.Array<java.lang.annotation.Annotation>;
								public getClassValue(a: java.lang.annotation.Annotation, name: string): java.lang.Class<any>;
								public hasMethodAnnotation(annotation: java.lang.Class<any>, propertyName: string, getter: any, setter: any, srcPos: com.sun.xml.bind.v2.model.annotation.Locatable): boolean;
								public hasMethodAnnotation(class0: java.lang.Class<any>, object1: any): boolean;
								public hasFieldAnnotation(class0: java.lang.Class<any>, object1: any): boolean;
								public getAllFieldAnnotations(object0: any, locatable1: com.sun.xml.bind.v2.model.annotation.Locatable): native.Array<java.lang.annotation.Annotation>;
								public getMethodParameterAnnotation(class0: java.lang.Class<any>, object1: any, int2: number, locatable3: com.sun.xml.bind.v2.model.annotation.Locatable): java.lang.annotation.Annotation;
								public getClassArrayValue(a: java.lang.annotation.Annotation, name: string): native.Array<java.lang.Class<any>>;
								public hasClassAnnotation(object0: any, class1: java.lang.Class<any>): boolean;
								public getClassArrayValue(annotation0: java.lang.annotation.Annotation, string1: string): native.Array<any>;
								public getPackageAnnotation(a: java.lang.Class<any>, clazz: java.lang.Class<any>, srcPos: com.sun.xml.bind.v2.model.annotation.Locatable): java.lang.annotation.Annotation;
								public getClassValue(annotation0: java.lang.annotation.Annotation, string1: string): any;
								public getMethodAnnotation(annotation: java.lang.Class<any>, method: java.lang.reflect.Method, srcPos: com.sun.xml.bind.v2.model.annotation.Locatable): java.lang.annotation.Annotation;
								public getClassAnnotation(a: java.lang.Class<any>, clazz: java.lang.Class<any>, srcPos: com.sun.xml.bind.v2.model.annotation.Locatable): java.lang.annotation.Annotation;
								public getPackageAnnotation(class0: java.lang.Class<any>, object1: any, locatable2: com.sun.xml.bind.v2.model.annotation.Locatable): java.lang.annotation.Annotation;
								public hasClassAnnotation(clazz: java.lang.Class<any>, annotationType: java.lang.Class<any>): boolean;
								public getMethodAnnotation(annotation: java.lang.Class<any>, getter: any, setter: any, srcPos: com.sun.xml.bind.v2.model.annotation.Locatable): java.lang.annotation.Annotation;
								public fullName(object0: any): string;
								public setErrorHandler(errorHandler: com.sun.xml.bind.v2.model.core.ErrorHandler): void;
								public getMethodParameterAnnotation(annotation: java.lang.Class<any>, method: java.lang.reflect.Method, paramIndex: number, srcPos: com.sun.xml.bind.v2.model.annotation.Locatable): java.lang.annotation.Annotation;
								public getFieldAnnotation(annotation: java.lang.Class<any>, field: java.lang.reflect.Field, srcPos: com.sun.xml.bind.v2.model.annotation.Locatable): java.lang.annotation.Annotation;
								public hasMethodAnnotation(annotation: java.lang.Class<any>, method: java.lang.reflect.Method): boolean;
								public constructor();
								public getAllMethodAnnotations(object0: any, locatable1: com.sun.xml.bind.v2.model.annotation.Locatable): native.Array<java.lang.annotation.Annotation>;
								public getFieldAnnotation(class0: java.lang.Class<any>, object1: any, locatable2: com.sun.xml.bind.v2.model.annotation.Locatable): java.lang.annotation.Annotation;
								public fullName(m: java.lang.reflect.Method): string;
								public getClassAnnotation(class0: java.lang.Class<any>, object1: any, locatable2: com.sun.xml.bind.v2.model.annotation.Locatable): java.lang.annotation.Annotation;
								public getAllMethodAnnotations(method: java.lang.reflect.Method, srcPos: com.sun.xml.bind.v2.model.annotation.Locatable): native.Array<java.lang.annotation.Annotation>;
								public hasFieldAnnotation(annotationType: java.lang.Class<any>, field: java.lang.reflect.Field): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module annotation {
							export class SecureLoader extends java.lang.Object {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.annotation.SecureLoader>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module annotation {
							export class XmlAttributeQuick extends com.sun.xml.bind.v2.model.annotation.Quick implements javax.xml.bind.annotation.XmlAttribute {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.annotation.XmlAttributeQuick>;
								public constructor(upstream: com.sun.xml.bind.v2.model.annotation.Locatable, core: javax.xml.bind.annotation.XmlAttribute);
								public toString(): string;
								public getAnnotation(): java.lang.annotation.Annotation;
								public name(): string;
								public required(): boolean;
								public namespace(): string;
								public annotationType(): java.lang.Class<javax.xml.bind.annotation.XmlAttribute>;
								public constructor(upstream: com.sun.xml.bind.v2.model.annotation.Locatable);
								public getLocation(): com.sun.xml.bind.v2.runtime.Location;
								public equals(obj: any): boolean;
								public annotationType(): java.lang.Class<any>;
								public newInstance(upstream: com.sun.xml.bind.v2.model.annotation.Locatable, core: java.lang.annotation.Annotation): com.sun.xml.bind.v2.model.annotation.Quick;
								public getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
								public newInstance(locatable0: com.sun.xml.bind.v2.model.annotation.Locatable, annotation1: java.lang.annotation.Annotation): com.sun.xml.bind.v2.model.annotation.Quick;
								public hashCode(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module annotation {
							export class XmlElementDeclQuick extends com.sun.xml.bind.v2.model.annotation.Quick implements javax.xml.bind.annotation.XmlElementDecl {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.annotation.XmlElementDeclQuick>;
								public scope(): java.lang.Class<any>;
								public toString(): string;
								public getAnnotation(): java.lang.annotation.Annotation;
								public name(): string;
								public substitutionHeadNamespace(): string;
								public constructor(upstream: com.sun.xml.bind.v2.model.annotation.Locatable, core: javax.xml.bind.annotation.XmlElementDecl);
								public defaultValue(): string;
								public namespace(): string;
								public annotationType(): java.lang.Class<javax.xml.bind.annotation.XmlElementDecl>;
								public substitutionHeadName(): string;
								public constructor(upstream: com.sun.xml.bind.v2.model.annotation.Locatable);
								public getLocation(): com.sun.xml.bind.v2.runtime.Location;
								public equals(obj: any): boolean;
								public annotationType(): java.lang.Class<any>;
								public newInstance(upstream: com.sun.xml.bind.v2.model.annotation.Locatable, core: java.lang.annotation.Annotation): com.sun.xml.bind.v2.model.annotation.Quick;
								public getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
								public newInstance(locatable0: com.sun.xml.bind.v2.model.annotation.Locatable, annotation1: java.lang.annotation.Annotation): com.sun.xml.bind.v2.model.annotation.Quick;
								public hashCode(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module annotation {
							export class XmlElementQuick extends com.sun.xml.bind.v2.model.annotation.Quick implements javax.xml.bind.annotation.XmlElement {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.annotation.XmlElementQuick>;
								public toString(): string;
								public getAnnotation(): java.lang.annotation.Annotation;
								public name(): string;
								public constructor(upstream: com.sun.xml.bind.v2.model.annotation.Locatable, core: javax.xml.bind.annotation.XmlElement);
								public defaultValue(): string;
								public type(): java.lang.Class<any>;
								public required(): boolean;
								public namespace(): string;
								public constructor(upstream: com.sun.xml.bind.v2.model.annotation.Locatable);
								public annotationType(): java.lang.Class<javax.xml.bind.annotation.XmlElement>;
								public getLocation(): com.sun.xml.bind.v2.runtime.Location;
								public equals(obj: any): boolean;
								public annotationType(): java.lang.Class<any>;
								public newInstance(upstream: com.sun.xml.bind.v2.model.annotation.Locatable, core: java.lang.annotation.Annotation): com.sun.xml.bind.v2.model.annotation.Quick;
								public getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
								public newInstance(locatable0: com.sun.xml.bind.v2.model.annotation.Locatable, annotation1: java.lang.annotation.Annotation): com.sun.xml.bind.v2.model.annotation.Quick;
								public hashCode(): number;
								public nillable(): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module annotation {
							export class XmlElementRefQuick extends com.sun.xml.bind.v2.model.annotation.Quick implements javax.xml.bind.annotation.XmlElementRef {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.annotation.XmlElementRefQuick>;
								public toString(): string;
								public getAnnotation(): java.lang.annotation.Annotation;
								public name(): string;
								public type(): java.lang.Class<any>;
								public required(): boolean;
								public namespace(): string;
								public constructor(upstream: com.sun.xml.bind.v2.model.annotation.Locatable, core: javax.xml.bind.annotation.XmlElementRef);
								public constructor(upstream: com.sun.xml.bind.v2.model.annotation.Locatable);
								public getLocation(): com.sun.xml.bind.v2.runtime.Location;
								public equals(obj: any): boolean;
								public annotationType(): java.lang.Class<any>;
								public newInstance(upstream: com.sun.xml.bind.v2.model.annotation.Locatable, core: java.lang.annotation.Annotation): com.sun.xml.bind.v2.model.annotation.Quick;
								public getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
								public newInstance(locatable0: com.sun.xml.bind.v2.model.annotation.Locatable, annotation1: java.lang.annotation.Annotation): com.sun.xml.bind.v2.model.annotation.Quick;
								public hashCode(): number;
								public annotationType(): java.lang.Class<javax.xml.bind.annotation.XmlElementRef>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module annotation {
							export class XmlElementRefsQuick extends com.sun.xml.bind.v2.model.annotation.Quick implements javax.xml.bind.annotation.XmlElementRefs {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.annotation.XmlElementRefsQuick>;
								public toString(): string;
								public getAnnotation(): java.lang.annotation.Annotation;
								public constructor(upstream: com.sun.xml.bind.v2.model.annotation.Locatable, core: javax.xml.bind.annotation.XmlElementRefs);
								public value(): native.Array<javax.xml.bind.annotation.XmlElementRef>;
								public constructor(upstream: com.sun.xml.bind.v2.model.annotation.Locatable);
								public getLocation(): com.sun.xml.bind.v2.runtime.Location;
								public equals(obj: any): boolean;
								public annotationType(): java.lang.Class<javax.xml.bind.annotation.XmlElementRefs>;
								public annotationType(): java.lang.Class<any>;
								public newInstance(upstream: com.sun.xml.bind.v2.model.annotation.Locatable, core: java.lang.annotation.Annotation): com.sun.xml.bind.v2.model.annotation.Quick;
								public getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
								public newInstance(locatable0: com.sun.xml.bind.v2.model.annotation.Locatable, annotation1: java.lang.annotation.Annotation): com.sun.xml.bind.v2.model.annotation.Quick;
								public hashCode(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module annotation {
							export class XmlEnumQuick extends com.sun.xml.bind.v2.model.annotation.Quick implements javax.xml.bind.annotation.XmlEnum {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.annotation.XmlEnumQuick>;
								public constructor(upstream: com.sun.xml.bind.v2.model.annotation.Locatable, core: javax.xml.bind.annotation.XmlEnum);
								public toString(): string;
								public getAnnotation(): java.lang.annotation.Annotation;
								public value(): java.lang.Class<any>;
								public constructor(upstream: com.sun.xml.bind.v2.model.annotation.Locatable);
								public getLocation(): com.sun.xml.bind.v2.runtime.Location;
								public equals(obj: any): boolean;
								public value(): java.lang.Class<any>;
								public annotationType(): java.lang.Class<any>;
								public newInstance(upstream: com.sun.xml.bind.v2.model.annotation.Locatable, core: java.lang.annotation.Annotation): com.sun.xml.bind.v2.model.annotation.Quick;
								public getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
								public newInstance(locatable0: com.sun.xml.bind.v2.model.annotation.Locatable, annotation1: java.lang.annotation.Annotation): com.sun.xml.bind.v2.model.annotation.Quick;
								public hashCode(): number;
								public annotationType(): java.lang.Class<javax.xml.bind.annotation.XmlEnum>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module annotation {
							export class XmlRootElementQuick extends com.sun.xml.bind.v2.model.annotation.Quick implements javax.xml.bind.annotation.XmlRootElement {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.annotation.XmlRootElementQuick>;
								public toString(): string;
								public getAnnotation(): java.lang.annotation.Annotation;
								public name(): string;
								public namespace(): string;
								public constructor(upstream: com.sun.xml.bind.v2.model.annotation.Locatable);
								public constructor(upstream: com.sun.xml.bind.v2.model.annotation.Locatable, core: javax.xml.bind.annotation.XmlRootElement);
								public getLocation(): com.sun.xml.bind.v2.runtime.Location;
								public equals(obj: any): boolean;
								public annotationType(): java.lang.Class<any>;
								public newInstance(upstream: com.sun.xml.bind.v2.model.annotation.Locatable, core: java.lang.annotation.Annotation): com.sun.xml.bind.v2.model.annotation.Quick;
								public getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
								public newInstance(locatable0: com.sun.xml.bind.v2.model.annotation.Locatable, annotation1: java.lang.annotation.Annotation): com.sun.xml.bind.v2.model.annotation.Quick;
								public annotationType(): java.lang.Class<javax.xml.bind.annotation.XmlRootElement>;
								public hashCode(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module annotation {
							export class XmlSchemaQuick extends com.sun.xml.bind.v2.model.annotation.Quick implements javax.xml.bind.annotation.XmlSchema {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.annotation.XmlSchemaQuick>;
								public annotationType(): java.lang.Class<javax.xml.bind.annotation.XmlSchema>;
								public toString(): string;
								public xmlns(): native.Array<javax.xml.bind.annotation.XmlNs>;
								public getAnnotation(): java.lang.annotation.Annotation;
								public constructor(upstream: com.sun.xml.bind.v2.model.annotation.Locatable, core: javax.xml.bind.annotation.XmlSchema);
								public namespace(): string;
								public elementFormDefault(): javax.xml.bind.annotation.XmlNsForm;
								public constructor(upstream: com.sun.xml.bind.v2.model.annotation.Locatable);
								public getLocation(): com.sun.xml.bind.v2.runtime.Location;
								public equals(obj: any): boolean;
								public attributeFormDefault(): javax.xml.bind.annotation.XmlNsForm;
								public annotationType(): java.lang.Class<any>;
								public newInstance(upstream: com.sun.xml.bind.v2.model.annotation.Locatable, core: java.lang.annotation.Annotation): com.sun.xml.bind.v2.model.annotation.Quick;
								public location(): string;
								public getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
								public newInstance(locatable0: com.sun.xml.bind.v2.model.annotation.Locatable, annotation1: java.lang.annotation.Annotation): com.sun.xml.bind.v2.model.annotation.Quick;
								public hashCode(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module annotation {
							export class XmlSchemaTypeQuick extends com.sun.xml.bind.v2.model.annotation.Quick implements javax.xml.bind.annotation.XmlSchemaType {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.annotation.XmlSchemaTypeQuick>;
								public toString(): string;
								public getAnnotation(): java.lang.annotation.Annotation;
								public name(): string;
								public type(): java.lang.Class<any>;
								public namespace(): string;
								public annotationType(): java.lang.Class<javax.xml.bind.annotation.XmlSchemaType>;
								public constructor(upstream: com.sun.xml.bind.v2.model.annotation.Locatable);
								public getLocation(): com.sun.xml.bind.v2.runtime.Location;
								public equals(obj: any): boolean;
								public annotationType(): java.lang.Class<any>;
								public newInstance(upstream: com.sun.xml.bind.v2.model.annotation.Locatable, core: java.lang.annotation.Annotation): com.sun.xml.bind.v2.model.annotation.Quick;
								public getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
								public constructor(upstream: com.sun.xml.bind.v2.model.annotation.Locatable, core: javax.xml.bind.annotation.XmlSchemaType);
								public newInstance(locatable0: com.sun.xml.bind.v2.model.annotation.Locatable, annotation1: java.lang.annotation.Annotation): com.sun.xml.bind.v2.model.annotation.Quick;
								public hashCode(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module annotation {
							export class XmlTransientQuick extends com.sun.xml.bind.v2.model.annotation.Quick implements javax.xml.bind.annotation.XmlTransient {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.annotation.XmlTransientQuick>;
								public constructor(upstream: com.sun.xml.bind.v2.model.annotation.Locatable);
								public toString(): string;
								public getLocation(): com.sun.xml.bind.v2.runtime.Location;
								public equals(obj: any): boolean;
								public getAnnotation(): java.lang.annotation.Annotation;
								public annotationType(): java.lang.Class<javax.xml.bind.annotation.XmlTransient>;
								public annotationType(): java.lang.Class<any>;
								public newInstance(upstream: com.sun.xml.bind.v2.model.annotation.Locatable, core: java.lang.annotation.Annotation): com.sun.xml.bind.v2.model.annotation.Quick;
								public getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
								public newInstance(locatable0: com.sun.xml.bind.v2.model.annotation.Locatable, annotation1: java.lang.annotation.Annotation): com.sun.xml.bind.v2.model.annotation.Quick;
								public constructor(upstream: com.sun.xml.bind.v2.model.annotation.Locatable, core: javax.xml.bind.annotation.XmlTransient);
								public hashCode(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module annotation {
							export class XmlTypeQuick extends com.sun.xml.bind.v2.model.annotation.Quick implements javax.xml.bind.annotation.XmlType {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.annotation.XmlTypeQuick>;
								public toString(): string;
								public getAnnotation(): java.lang.annotation.Annotation;
								public name(): string;
								public propOrder(): native.Array<string>;
								public annotationType(): java.lang.Class<javax.xml.bind.annotation.XmlType>;
								public constructor(upstream: com.sun.xml.bind.v2.model.annotation.Locatable, core: javax.xml.bind.annotation.XmlType);
								public namespace(): string;
								public constructor(upstream: com.sun.xml.bind.v2.model.annotation.Locatable);
								public getLocation(): com.sun.xml.bind.v2.runtime.Location;
								public factoryClass(): java.lang.Class<any>;
								public equals(obj: any): boolean;
								public factoryMethod(): string;
								public annotationType(): java.lang.Class<any>;
								public newInstance(upstream: com.sun.xml.bind.v2.model.annotation.Locatable, core: java.lang.annotation.Annotation): com.sun.xml.bind.v2.model.annotation.Quick;
								public getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
								public newInstance(locatable0: com.sun.xml.bind.v2.model.annotation.Locatable, annotation1: java.lang.annotation.Annotation): com.sun.xml.bind.v2.model.annotation.Quick;
								public hashCode(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module annotation {
							export class XmlValueQuick extends com.sun.xml.bind.v2.model.annotation.Quick implements javax.xml.bind.annotation.XmlValue {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.annotation.XmlValueQuick>;
								public constructor(upstream: com.sun.xml.bind.v2.model.annotation.Locatable);
								public toString(): string;
								public constructor(upstream: com.sun.xml.bind.v2.model.annotation.Locatable, core: javax.xml.bind.annotation.XmlValue);
								public getLocation(): com.sun.xml.bind.v2.runtime.Location;
								public equals(obj: any): boolean;
								public getAnnotation(): java.lang.annotation.Annotation;
								public annotationType(): java.lang.Class<any>;
								public newInstance(upstream: com.sun.xml.bind.v2.model.annotation.Locatable, core: java.lang.annotation.Annotation): com.sun.xml.bind.v2.model.annotation.Quick;
								public annotationType(): java.lang.Class<javax.xml.bind.annotation.XmlValue>;
								public getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
								public newInstance(locatable0: com.sun.xml.bind.v2.model.annotation.Locatable, annotation1: java.lang.annotation.Annotation): com.sun.xml.bind.v2.model.annotation.Quick;
								public hashCode(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module core {
							export class Adapter<TypeT, ClassDeclT>  extends java.lang.Object {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.core.Adapter<any,any>>;
								public adapterType: ClassDeclT;
								public defaultType: TypeT;
								public customType: TypeT;
								public constructor(spec: javax.xml.bind.annotation.adapters.XmlJavaTypeAdapter, reader: com.sun.xml.bind.v2.model.annotation.AnnotationReader<TypeT,ClassDeclT,any,any>, nav: com.sun.xml.bind.v2.model.nav.Navigator<TypeT,ClassDeclT,any,any>);
								public constructor(adapterType: ClassDeclT, nav: com.sun.xml.bind.v2.model.nav.Navigator<TypeT,ClassDeclT,any,any>);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module core {
							export class ArrayInfo<T, C>  extends com.sun.xml.bind.v2.model.core.NonElement<any,any> {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.core.ArrayInfo<any,any>>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.model.core.ArrayInfo<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getItemType(): com.sun.xml.bind.v2.model.core.NonElement<any,any>;
									getTypeName(): javax.xml.namespace.QName;
									isSimpleType(): boolean;
									getType(): any;
									canBeReferencedByIDREF(): boolean;
									getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
									getLocation(): com.sun.xml.bind.v2.runtime.Location;
								});
								public constructor();
								public static ANYTYPE_NAME: javax.xml.namespace.QName;
								public isSimpleType(): boolean;
								public getLocation(): com.sun.xml.bind.v2.runtime.Location;
								public getItemType(): com.sun.xml.bind.v2.model.core.NonElement<any,any>;
								public getType(): any;
								public canBeReferencedByIDREF(): boolean;
								public getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
								public getTypeName(): javax.xml.namespace.QName;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module core {
							export class AttributePropertyInfo<T, C>  extends java.lang.Object {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.core.AttributePropertyInfo<any,any>>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.model.core.AttributePropertyInfo<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getTarget(): com.sun.xml.bind.v2.model.core.NonElement<T,C>;
									isRequired(): boolean;
									getXmlName(): javax.xml.namespace.QName;
									getAdapter(): com.sun.xml.bind.v2.model.core.Adapter<T,C>;
									parent(): com.sun.xml.bind.v2.model.core.TypeInfo<T,C>;
									getName(): string;
									displayName(): string;
									isCollection(): boolean;
									ref(): java.util.Collection<any>;
									kind(): com.sun.xml.bind.v2.model.core.PropertyKind;
									getAdapter(): com.sun.xml.bind.v2.model.core.Adapter<T,C>;
									id(): com.sun.xml.bind.v2.model.core.ID;
									getExpectedMimeType(): javax.activation.MimeType;
									inlineBinaryData(): boolean;
									getSchemaType(): javax.xml.namespace.QName;
									getTarget(): com.sun.xml.bind.v2.model.core.NonElement<T,C>;
									getSource(): com.sun.xml.bind.v2.model.core.PropertyInfo<T,C>;
									readAnnotation(class0: java.lang.Class<any>): java.lang.annotation.Annotation;
									hasAnnotation(class0: java.lang.Class<any>): boolean;
								});
								public constructor();
								public isRequired(): boolean;
								public hasAnnotation(class0: java.lang.Class<any>): boolean;
								public ref(): java.util.Collection<any>;
								public getAdapter(): com.sun.xml.bind.v2.model.core.Adapter<T,C>;
								public getName(): string;
								public displayName(): string;
								public getExpectedMimeType(): javax.activation.MimeType;
								public id(): com.sun.xml.bind.v2.model.core.ID;
								public getSource(): com.sun.xml.bind.v2.model.core.PropertyInfo<T,C>;
								public isCollection(): boolean;
								public getSchemaType(): javax.xml.namespace.QName;
								public getTarget(): com.sun.xml.bind.v2.model.core.NonElement<T,C>;
								public parent(): com.sun.xml.bind.v2.model.core.TypeInfo<T,C>;
								public getXmlName(): javax.xml.namespace.QName;
								public kind(): com.sun.xml.bind.v2.model.core.PropertyKind;
								public readAnnotation(class0: java.lang.Class<any>): java.lang.annotation.Annotation;
								public inlineBinaryData(): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module core {
							export class BuiltinLeafInfo<T, C>  extends com.sun.xml.bind.v2.model.core.LeafInfo<any,any> {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.core.BuiltinLeafInfo<any,any>>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.model.core.BuiltinLeafInfo<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getTypeName(): javax.xml.namespace.QName;
									isElement(): boolean;
									getElementName(): javax.xml.namespace.QName;
									asElement(): com.sun.xml.bind.v2.model.core.Element<any,any>;
									getTypeName(): javax.xml.namespace.QName;
									isSimpleType(): boolean;
									getType(): any;
									canBeReferencedByIDREF(): boolean;
									getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
									getLocation(): com.sun.xml.bind.v2.runtime.Location;
								});
								public constructor();
								public static ANYTYPE_NAME: javax.xml.namespace.QName;
								public getElementName(): javax.xml.namespace.QName;
								public isSimpleType(): boolean;
								public getLocation(): com.sun.xml.bind.v2.runtime.Location;
								public getType(): any;
								public canBeReferencedByIDREF(): boolean;
								public isElement(): boolean;
								public getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
								public getTypeName(): javax.xml.namespace.QName;
								public asElement(): com.sun.xml.bind.v2.model.core.Element<any,any>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module core {
							export class ClassInfo<T, C>  extends com.sun.xml.bind.v2.model.core.MaybeElement<any,any> {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.core.ClassInfo<any,any>>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.model.core.ClassInfo<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getBaseClass(): com.sun.xml.bind.v2.model.core.ClassInfo<any,any>;
									getClazz(): any;
									getName(): string;
									getProperties(): java.util.List<any>;
									hasValueProperty(): boolean;
									getProperty(string0: string): com.sun.xml.bind.v2.model.core.PropertyInfo<any,any>;
									hasProperties(): boolean;
									isAbstract(): boolean;
									isOrdered(): boolean;
									isFinal(): boolean;
									hasSubClasses(): boolean;
									hasAttributeWildcard(): boolean;
									inheritsAttributeWildcard(): boolean;
									declaresAttributeWildcard(): boolean;
									isElement(): boolean;
									getElementName(): javax.xml.namespace.QName;
									asElement(): com.sun.xml.bind.v2.model.core.Element<any,any>;
									getTypeName(): javax.xml.namespace.QName;
									isSimpleType(): boolean;
									getType(): any;
									canBeReferencedByIDREF(): boolean;
									getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
									getLocation(): com.sun.xml.bind.v2.runtime.Location;
								});
								public constructor();
								public static ANYTYPE_NAME: javax.xml.namespace.QName;
								public getClazz(): any;
								public getElementName(): javax.xml.namespace.QName;
								public isSimpleType(): boolean;
								public isAbstract(): boolean;
								public getName(): string;
								public getProperty(string0: string): com.sun.xml.bind.v2.model.core.PropertyInfo<any,any>;
								public inheritsAttributeWildcard(): boolean;
								public isElement(): boolean;
								public getBaseClass(): com.sun.xml.bind.v2.model.core.ClassInfo<any,any>;
								public getTypeName(): javax.xml.namespace.QName;
								public asElement(): com.sun.xml.bind.v2.model.core.Element<any,any>;
								public hasValueProperty(): boolean;
								public isFinal(): boolean;
								public hasSubClasses(): boolean;
								public getProperties(): java.util.List<any>;
								public getLocation(): com.sun.xml.bind.v2.runtime.Location;
								public isOrdered(): boolean;
								public getType(): any;
								public declaresAttributeWildcard(): boolean;
								public canBeReferencedByIDREF(): boolean;
								public hasProperties(): boolean;
								public getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
								public hasAttributeWildcard(): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module core {
							export class Element<T, C>  extends com.sun.xml.bind.v2.model.core.TypeInfo<any,any> {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.core.Element<any,any>>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.model.core.Element<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getElementName(): javax.xml.namespace.QName;
									getSubstitutionHead(): com.sun.xml.bind.v2.model.core.Element<any,any>;
									getScope(): com.sun.xml.bind.v2.model.core.ClassInfo<any,any>;
									getType(): any;
									canBeReferencedByIDREF(): boolean;
									getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
									getLocation(): com.sun.xml.bind.v2.runtime.Location;
								});
								public constructor();
								public getElementName(): javax.xml.namespace.QName;
								public getLocation(): com.sun.xml.bind.v2.runtime.Location;
								public getType(): any;
								public canBeReferencedByIDREF(): boolean;
								public getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
								public getSubstitutionHead(): com.sun.xml.bind.v2.model.core.Element<any,any>;
								public getScope(): com.sun.xml.bind.v2.model.core.ClassInfo<any,any>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module core {
							export class ElementInfo<T, C>  extends com.sun.xml.bind.v2.model.core.Element<any,any> {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.core.ElementInfo<any,any>>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.model.core.ElementInfo<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getProperty(): com.sun.xml.bind.v2.model.core.ElementPropertyInfo<any,any>;
									getContentType(): com.sun.xml.bind.v2.model.core.NonElement<any,any>;
									getContentInMemoryType(): any;
									getType(): any;
									getSubstitutionHead(): com.sun.xml.bind.v2.model.core.ElementInfo<any,any>;
									getSubstitutionMembers(): java.util.Collection<any>;
									getElementName(): javax.xml.namespace.QName;
									getSubstitutionHead(): com.sun.xml.bind.v2.model.core.Element<any,any>;
									getScope(): com.sun.xml.bind.v2.model.core.ClassInfo<any,any>;
									getType(): any;
									canBeReferencedByIDREF(): boolean;
									getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
									getLocation(): com.sun.xml.bind.v2.runtime.Location;
								});
								public constructor();
								public getElementName(): javax.xml.namespace.QName;
								public getLocation(): com.sun.xml.bind.v2.runtime.Location;
								public getContentInMemoryType(): any;
								public getType(): any;
								public canBeReferencedByIDREF(): boolean;
								public getProperty(): com.sun.xml.bind.v2.model.core.ElementPropertyInfo<any,any>;
								public getSubstitutionMembers(): java.util.Collection<any>;
								public getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
								public getContentType(): com.sun.xml.bind.v2.model.core.NonElement<any,any>;
								public getSubstitutionHead(): com.sun.xml.bind.v2.model.core.Element<any,any>;
								public getScope(): com.sun.xml.bind.v2.model.core.ClassInfo<any,any>;
								public getSubstitutionHead(): com.sun.xml.bind.v2.model.core.ElementInfo<any,any>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module core {
							export class ElementPropertyInfo<T, C>  extends com.sun.xml.bind.v2.model.core.PropertyInfo<any,any> {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.core.ElementPropertyInfo<any,any>>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.model.core.ElementPropertyInfo<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getTypes(): java.util.List<any>;
									getXmlName(): javax.xml.namespace.QName;
									isCollectionRequired(): boolean;
									isCollectionNillable(): boolean;
									isValueList(): boolean;
									isRequired(): boolean;
									getAdapter(): com.sun.xml.bind.v2.model.core.Adapter<any,any>;
									parent(): com.sun.xml.bind.v2.model.core.TypeInfo<any,any>;
									getName(): string;
									displayName(): string;
									isCollection(): boolean;
									ref(): java.util.Collection<any>;
									kind(): com.sun.xml.bind.v2.model.core.PropertyKind;
									getAdapter(): com.sun.xml.bind.v2.model.core.Adapter<any,any>;
									id(): com.sun.xml.bind.v2.model.core.ID;
									getExpectedMimeType(): javax.activation.MimeType;
									inlineBinaryData(): boolean;
									getSchemaType(): javax.xml.namespace.QName;
									readAnnotation(class0: java.lang.Class<any>): java.lang.annotation.Annotation;
									hasAnnotation(class0: java.lang.Class<any>): boolean;
								});
								public constructor();
								public isValueList(): boolean;
								public isRequired(): boolean;
								public hasAnnotation(class0: java.lang.Class<any>): boolean;
								public ref(): java.util.Collection<any>;
								public getName(): string;
								public displayName(): string;
								public getExpectedMimeType(): javax.activation.MimeType;
								public id(): com.sun.xml.bind.v2.model.core.ID;
								public isCollectionRequired(): boolean;
								public getTypes(): java.util.List<any>;
								public isCollection(): boolean;
								public getSchemaType(): javax.xml.namespace.QName;
								public getXmlName(): javax.xml.namespace.QName;
								public kind(): com.sun.xml.bind.v2.model.core.PropertyKind;
								public readAnnotation(class0: java.lang.Class<any>): java.lang.annotation.Annotation;
								public parent(): com.sun.xml.bind.v2.model.core.TypeInfo<any,any>;
								public isCollectionNillable(): boolean;
								public getAdapter(): com.sun.xml.bind.v2.model.core.Adapter<any,any>;
								public inlineBinaryData(): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module core {
							export class EnumConstant<T, C>  extends java.lang.Object {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.core.EnumConstant<any,any>>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.model.core.EnumConstant<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getEnclosingClass(): com.sun.xml.bind.v2.model.core.EnumLeafInfo<T,C>;
									getLexicalValue(): string;
									getName(): string;
								});
								public constructor();
								public getEnclosingClass(): com.sun.xml.bind.v2.model.core.EnumLeafInfo<T,C>;
								public getName(): string;
								public getLexicalValue(): string;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module core {
							export class EnumLeafInfo<T, C>  extends com.sun.xml.bind.v2.model.core.LeafInfo<any,any> {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.core.EnumLeafInfo<any,any>>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.model.core.EnumLeafInfo<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getClazz(): any;
									getBaseType(): com.sun.xml.bind.v2.model.core.NonElement<any,any>;
									getConstants(): java.lang.Iterable<any>;
									isElement(): boolean;
									getElementName(): javax.xml.namespace.QName;
									asElement(): com.sun.xml.bind.v2.model.core.Element<any,any>;
									getTypeName(): javax.xml.namespace.QName;
									isSimpleType(): boolean;
									getType(): any;
									canBeReferencedByIDREF(): boolean;
									getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
									getLocation(): com.sun.xml.bind.v2.runtime.Location;
								});
								public constructor();
								public static ANYTYPE_NAME: javax.xml.namespace.QName;
								public getClazz(): any;
								public getElementName(): javax.xml.namespace.QName;
								public isSimpleType(): boolean;
								public getLocation(): com.sun.xml.bind.v2.runtime.Location;
								public getType(): any;
								public canBeReferencedByIDREF(): boolean;
								public isElement(): boolean;
								public getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
								public getConstants(): java.lang.Iterable<any>;
								public getTypeName(): javax.xml.namespace.QName;
								public asElement(): com.sun.xml.bind.v2.model.core.Element<any,any>;
								public getBaseType(): com.sun.xml.bind.v2.model.core.NonElement<any,any>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module core {
							export class ErrorHandler extends java.lang.Object {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.core.ErrorHandler>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.model.core.ErrorHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									error(illegalAnnotationException0: com.sun.xml.bind.v2.runtime.IllegalAnnotationException): void;
								});
								public constructor();
								public error(illegalAnnotationException0: com.sun.xml.bind.v2.runtime.IllegalAnnotationException): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module core {
							export class ID {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.core.ID>;
								public static ID: com.sun.xml.bind.v2.model.core.ID;
								public static IDREF: com.sun.xml.bind.v2.model.core.ID;
								public static NONE: com.sun.xml.bind.v2.model.core.ID;
								public static valueOf(name: string): com.sun.xml.bind.v2.model.core.ID;
								public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
								public static values(): native.Array<com.sun.xml.bind.v2.model.core.ID>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module core {
							export class LeafInfo<T, C>  extends com.sun.xml.bind.v2.model.core.MaybeElement<any,any> {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.core.LeafInfo<any,any>>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.model.core.LeafInfo<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									isElement(): boolean;
									getElementName(): javax.xml.namespace.QName;
									asElement(): com.sun.xml.bind.v2.model.core.Element<any,any>;
									getTypeName(): javax.xml.namespace.QName;
									isSimpleType(): boolean;
									getType(): any;
									canBeReferencedByIDREF(): boolean;
									getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
									getLocation(): com.sun.xml.bind.v2.runtime.Location;
								});
								public constructor();
								public static ANYTYPE_NAME: javax.xml.namespace.QName;
								public getElementName(): javax.xml.namespace.QName;
								public isSimpleType(): boolean;
								public getLocation(): com.sun.xml.bind.v2.runtime.Location;
								public getType(): any;
								public canBeReferencedByIDREF(): boolean;
								public isElement(): boolean;
								public getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
								public getTypeName(): javax.xml.namespace.QName;
								public asElement(): com.sun.xml.bind.v2.model.core.Element<any,any>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module core {
							export class MapPropertyInfo<T, C>  extends com.sun.xml.bind.v2.model.core.PropertyInfo<any,any> {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.core.MapPropertyInfo<any,any>>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.model.core.MapPropertyInfo<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getXmlName(): javax.xml.namespace.QName;
									isCollectionNillable(): boolean;
									getKeyType(): com.sun.xml.bind.v2.model.core.NonElement<any,any>;
									getValueType(): com.sun.xml.bind.v2.model.core.NonElement<any,any>;
									parent(): com.sun.xml.bind.v2.model.core.TypeInfo<any,any>;
									getName(): string;
									displayName(): string;
									isCollection(): boolean;
									ref(): java.util.Collection<any>;
									kind(): com.sun.xml.bind.v2.model.core.PropertyKind;
									getAdapter(): com.sun.xml.bind.v2.model.core.Adapter<any,any>;
									id(): com.sun.xml.bind.v2.model.core.ID;
									getExpectedMimeType(): javax.activation.MimeType;
									inlineBinaryData(): boolean;
									getSchemaType(): javax.xml.namespace.QName;
									readAnnotation(class0: java.lang.Class<any>): java.lang.annotation.Annotation;
									hasAnnotation(class0: java.lang.Class<any>): boolean;
								});
								public constructor();
								public hasAnnotation(class0: java.lang.Class<any>): boolean;
								public ref(): java.util.Collection<any>;
								public getName(): string;
								public displayName(): string;
								public getExpectedMimeType(): javax.activation.MimeType;
								public id(): com.sun.xml.bind.v2.model.core.ID;
								public getValueType(): com.sun.xml.bind.v2.model.core.NonElement<any,any>;
								public isCollection(): boolean;
								public getKeyType(): com.sun.xml.bind.v2.model.core.NonElement<any,any>;
								public getSchemaType(): javax.xml.namespace.QName;
								public getXmlName(): javax.xml.namespace.QName;
								public kind(): com.sun.xml.bind.v2.model.core.PropertyKind;
								public readAnnotation(class0: java.lang.Class<any>): java.lang.annotation.Annotation;
								public parent(): com.sun.xml.bind.v2.model.core.TypeInfo<any,any>;
								public isCollectionNillable(): boolean;
								public getAdapter(): com.sun.xml.bind.v2.model.core.Adapter<any,any>;
								public inlineBinaryData(): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module core {
							export class MaybeElement<T, C>  extends com.sun.xml.bind.v2.model.core.NonElement<any,any> {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.core.MaybeElement<any,any>>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.model.core.MaybeElement<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									isElement(): boolean;
									getElementName(): javax.xml.namespace.QName;
									asElement(): com.sun.xml.bind.v2.model.core.Element<any,any>;
									getTypeName(): javax.xml.namespace.QName;
									isSimpleType(): boolean;
									getType(): any;
									canBeReferencedByIDREF(): boolean;
									getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
									getLocation(): com.sun.xml.bind.v2.runtime.Location;
								});
								public constructor();
								public static ANYTYPE_NAME: javax.xml.namespace.QName;
								public getElementName(): javax.xml.namespace.QName;
								public isSimpleType(): boolean;
								public getLocation(): com.sun.xml.bind.v2.runtime.Location;
								public getType(): any;
								public canBeReferencedByIDREF(): boolean;
								public isElement(): boolean;
								public getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
								public getTypeName(): javax.xml.namespace.QName;
								public asElement(): com.sun.xml.bind.v2.model.core.Element<any,any>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module core {
							export class NonElement<T, C>  extends com.sun.xml.bind.v2.model.core.TypeInfo<any,any> {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.core.NonElement<any,any>>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.model.core.NonElement<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getTypeName(): javax.xml.namespace.QName;
									isSimpleType(): boolean;
									getType(): any;
									canBeReferencedByIDREF(): boolean;
									getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
									getLocation(): com.sun.xml.bind.v2.runtime.Location;
								});
								public constructor();
								public static ANYTYPE_NAME: javax.xml.namespace.QName;
								public isSimpleType(): boolean;
								public getLocation(): com.sun.xml.bind.v2.runtime.Location;
								public getType(): any;
								public canBeReferencedByIDREF(): boolean;
								public getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
								public getTypeName(): javax.xml.namespace.QName;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module core {
							export class NonElementRef<T, C>  extends java.lang.Object {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.core.NonElementRef<any,any>>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.model.core.NonElementRef<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getTarget(): com.sun.xml.bind.v2.model.core.NonElement<T,C>;
									getSource(): com.sun.xml.bind.v2.model.core.PropertyInfo<T,C>;
								});
								public constructor();
								public getTarget(): com.sun.xml.bind.v2.model.core.NonElement<T,C>;
								public getSource(): com.sun.xml.bind.v2.model.core.PropertyInfo<T,C>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module core {
							export class PropertyInfo<T, C>  extends com.sun.xml.bind.v2.model.annotation.AnnotationSource {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.core.PropertyInfo<any,any>>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.model.core.PropertyInfo<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									parent(): com.sun.xml.bind.v2.model.core.TypeInfo<any,any>;
									getName(): string;
									displayName(): string;
									isCollection(): boolean;
									ref(): java.util.Collection<any>;
									kind(): com.sun.xml.bind.v2.model.core.PropertyKind;
									getAdapter(): com.sun.xml.bind.v2.model.core.Adapter<any,any>;
									id(): com.sun.xml.bind.v2.model.core.ID;
									getExpectedMimeType(): javax.activation.MimeType;
									inlineBinaryData(): boolean;
									getSchemaType(): javax.xml.namespace.QName;
									readAnnotation(class0: java.lang.Class<any>): java.lang.annotation.Annotation;
									hasAnnotation(class0: java.lang.Class<any>): boolean;
								});
								public constructor();
								public hasAnnotation(class0: java.lang.Class<any>): boolean;
								public ref(): java.util.Collection<any>;
								public getName(): string;
								public displayName(): string;
								public getExpectedMimeType(): javax.activation.MimeType;
								public id(): com.sun.xml.bind.v2.model.core.ID;
								public isCollection(): boolean;
								public getSchemaType(): javax.xml.namespace.QName;
								public kind(): com.sun.xml.bind.v2.model.core.PropertyKind;
								public readAnnotation(class0: java.lang.Class<any>): java.lang.annotation.Annotation;
								public parent(): com.sun.xml.bind.v2.model.core.TypeInfo<any,any>;
								public getAdapter(): com.sun.xml.bind.v2.model.core.Adapter<any,any>;
								public inlineBinaryData(): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module core {
							export class PropertyKind {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.core.PropertyKind>;
								public static VALUE: com.sun.xml.bind.v2.model.core.PropertyKind;
								public static ATTRIBUTE: com.sun.xml.bind.v2.model.core.PropertyKind;
								public static ELEMENT: com.sun.xml.bind.v2.model.core.PropertyKind;
								public static REFERENCE: com.sun.xml.bind.v2.model.core.PropertyKind;
								public static MAP: com.sun.xml.bind.v2.model.core.PropertyKind;
								public canHaveXmlMimeType: boolean;
								public isOrdered: boolean;
								public propertyIndex: number;
								public static valueOf(name: string): com.sun.xml.bind.v2.model.core.PropertyKind;
								public static values(): native.Array<com.sun.xml.bind.v2.model.core.PropertyKind>;
								public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module core {
							export class Ref<T, C>  extends java.lang.Object {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.core.Ref<any,any>>;
								public type: T;
								public adapter: com.sun.xml.bind.v2.model.core.Adapter<T,C>;
								public valueList: boolean;
								public constructor(type: T);
								public constructor(type: T, adapter: com.sun.xml.bind.v2.model.core.Adapter<T,C>, valueList: boolean);
								public constructor(builder: com.sun.xml.bind.v2.model.impl.ModelBuilderI<T,C,any,any>, type: T, xjta: javax.xml.bind.annotation.adapters.XmlJavaTypeAdapter, xl: javax.xml.bind.annotation.XmlList);
								public constructor(reader: com.sun.xml.bind.v2.model.annotation.AnnotationReader<T,C,any,any>, nav: com.sun.xml.bind.v2.model.nav.Navigator<T,C,any,any>, type: T, xjta: javax.xml.bind.annotation.adapters.XmlJavaTypeAdapter, xl: javax.xml.bind.annotation.XmlList);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module core {
							export class ReferencePropertyInfo<T, C>  extends com.sun.xml.bind.v2.model.core.PropertyInfo<any,any> {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.core.ReferencePropertyInfo<any,any>>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.model.core.ReferencePropertyInfo<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getElements(): java.util.Set<any>;
									ref(): java.util.Collection<any>;
									getXmlName(): javax.xml.namespace.QName;
									isCollectionNillable(): boolean;
									isCollectionRequired(): boolean;
									isMixed(): boolean;
									getWildcard(): com.sun.xml.bind.v2.model.core.WildcardMode;
									getDOMHandler(): any;
									isRequired(): boolean;
									getAdapter(): com.sun.xml.bind.v2.model.core.Adapter<any,any>;
									parent(): com.sun.xml.bind.v2.model.core.TypeInfo<any,any>;
									getName(): string;
									displayName(): string;
									isCollection(): boolean;
									ref(): java.util.Collection<any>;
									kind(): com.sun.xml.bind.v2.model.core.PropertyKind;
									getAdapter(): com.sun.xml.bind.v2.model.core.Adapter<any,any>;
									id(): com.sun.xml.bind.v2.model.core.ID;
									getExpectedMimeType(): javax.activation.MimeType;
									inlineBinaryData(): boolean;
									getSchemaType(): javax.xml.namespace.QName;
									readAnnotation(class0: java.lang.Class<any>): java.lang.annotation.Annotation;
									hasAnnotation(class0: java.lang.Class<any>): boolean;
								});
								public constructor();
								public isRequired(): boolean;
								public hasAnnotation(class0: java.lang.Class<any>): boolean;
								public ref(): java.util.Collection<any>;
								public isMixed(): boolean;
								public getName(): string;
								public displayName(): string;
								public getExpectedMimeType(): javax.activation.MimeType;
								public id(): com.sun.xml.bind.v2.model.core.ID;
								public isCollectionRequired(): boolean;
								public isCollection(): boolean;
								public getElements(): java.util.Set<any>;
								public getSchemaType(): javax.xml.namespace.QName;
								public getWildcard(): com.sun.xml.bind.v2.model.core.WildcardMode;
								public getXmlName(): javax.xml.namespace.QName;
								public getDOMHandler(): any;
								public kind(): com.sun.xml.bind.v2.model.core.PropertyKind;
								public readAnnotation(class0: java.lang.Class<any>): java.lang.annotation.Annotation;
								public parent(): com.sun.xml.bind.v2.model.core.TypeInfo<any,any>;
								public isCollectionNillable(): boolean;
								public getAdapter(): com.sun.xml.bind.v2.model.core.Adapter<any,any>;
								public inlineBinaryData(): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module core {
							export class RegistryInfo<T, C>  extends java.lang.Object {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.core.RegistryInfo<any,any>>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.model.core.RegistryInfo<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getReferences(): java.util.Set<com.sun.xml.bind.v2.model.core.TypeInfo<T,C>>;
									getClazz(): C;
								});
								public constructor();
								public getClazz(): C;
								public getReferences(): java.util.Set<com.sun.xml.bind.v2.model.core.TypeInfo<T,C>>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module core {
							export class TypeInfo<T, C>  extends com.sun.xml.bind.v2.model.annotation.Locatable {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.core.TypeInfo<any,any>>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.model.core.TypeInfo<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getType(): any;
									canBeReferencedByIDREF(): boolean;
									getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
									getLocation(): com.sun.xml.bind.v2.runtime.Location;
								});
								public constructor();
								public getLocation(): com.sun.xml.bind.v2.runtime.Location;
								public getType(): any;
								public canBeReferencedByIDREF(): boolean;
								public getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module core {
							export class TypeInfoSet<T, C, F, M>  extends java.lang.Object {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.core.TypeInfoSet<any,any,any,any>>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.model.core.TypeInfoSet<any,any,any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getNavigator(): com.sun.xml.bind.v2.model.nav.Navigator<T,C,F,M>;
									getTypeInfo(object0: T): com.sun.xml.bind.v2.model.core.NonElement<T,C>;
									getAnyTypeInfo(): com.sun.xml.bind.v2.model.core.NonElement<T,C>;
									getClassInfo(object0: C): com.sun.xml.bind.v2.model.core.NonElement<T,C>;
									arrays(): java.util.Map<any,any>;
									beans(): java.util.Map<C,any>;
									builtins(): java.util.Map<T,any>;
									enums(): java.util.Map<C,any>;
									getElementInfo(object0: C, qName1: javax.xml.namespace.QName): com.sun.xml.bind.v2.model.core.ElementInfo<T,C>;
									getTypeInfo(ref0: com.sun.xml.bind.v2.model.core.Ref<T,C>): com.sun.xml.bind.v2.model.core.NonElement<T,C>;
									getElementMappings(object0: C): java.util.Map<javax.xml.namespace.QName,any>;
									getAllElements(): java.lang.Iterable<any>;
									getXmlNs(string0: string): java.util.Map<string,string>;
									getSchemaLocations(): java.util.Map<string,string>;
									getElementFormDefault(string0: string): javax.xml.bind.annotation.XmlNsForm;
									getAttributeFormDefault(string0: string): javax.xml.bind.annotation.XmlNsForm;
									dump(result0: javax.xml.transform.Result): void;
								});
								public constructor();
								public getElementInfo(object0: C, qName1: javax.xml.namespace.QName): com.sun.xml.bind.v2.model.core.ElementInfo<T,C>;
								public dump(result0: javax.xml.transform.Result): void;
								public getAnyTypeInfo(): com.sun.xml.bind.v2.model.core.NonElement<T,C>;
								public getSchemaLocations(): java.util.Map<string,string>;
								public getNavigator(): com.sun.xml.bind.v2.model.nav.Navigator<T,C,F,M>;
								public getTypeInfo(ref0: com.sun.xml.bind.v2.model.core.Ref<T,C>): com.sun.xml.bind.v2.model.core.NonElement<T,C>;
								public enums(): java.util.Map<C,any>;
								public getTypeInfo(object0: T): com.sun.xml.bind.v2.model.core.NonElement<T,C>;
								public beans(): java.util.Map<C,any>;
								public getElementFormDefault(string0: string): javax.xml.bind.annotation.XmlNsForm;
								public arrays(): java.util.Map<any,any>;
								public getClassInfo(object0: C): com.sun.xml.bind.v2.model.core.NonElement<T,C>;
								public getAttributeFormDefault(string0: string): javax.xml.bind.annotation.XmlNsForm;
								public getElementMappings(object0: C): java.util.Map<javax.xml.namespace.QName,any>;
								public getAllElements(): java.lang.Iterable<any>;
								public getXmlNs(string0: string): java.util.Map<string,string>;
								public builtins(): java.util.Map<T,any>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module core {
							export class TypeRef<T, C>  extends com.sun.xml.bind.v2.model.core.NonElementRef<any,any> {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.core.TypeRef<any,any>>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.model.core.TypeRef<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getTagName(): javax.xml.namespace.QName;
									isNillable(): boolean;
									getDefaultValue(): string;
									getTarget(): com.sun.xml.bind.v2.model.core.NonElement<any,any>;
									getSource(): com.sun.xml.bind.v2.model.core.PropertyInfo<any,any>;
								});
								public constructor();
								public getTarget(): com.sun.xml.bind.v2.model.core.NonElement<any,any>;
								public getSource(): com.sun.xml.bind.v2.model.core.PropertyInfo<any,any>;
								public isNillable(): boolean;
								public getDefaultValue(): string;
								public getTagName(): javax.xml.namespace.QName;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module core {
							export class ValuePropertyInfo<T, C>  extends java.lang.Object {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.core.ValuePropertyInfo<any,any>>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.model.core.ValuePropertyInfo<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getAdapter(): com.sun.xml.bind.v2.model.core.Adapter<T,C>;
									parent(): com.sun.xml.bind.v2.model.core.TypeInfo<T,C>;
									getName(): string;
									displayName(): string;
									isCollection(): boolean;
									ref(): java.util.Collection<any>;
									kind(): com.sun.xml.bind.v2.model.core.PropertyKind;
									getAdapter(): com.sun.xml.bind.v2.model.core.Adapter<T,C>;
									id(): com.sun.xml.bind.v2.model.core.ID;
									getExpectedMimeType(): javax.activation.MimeType;
									inlineBinaryData(): boolean;
									getSchemaType(): javax.xml.namespace.QName;
									getTarget(): com.sun.xml.bind.v2.model.core.NonElement<T,C>;
									getSource(): com.sun.xml.bind.v2.model.core.PropertyInfo<T,C>;
									readAnnotation(class0: java.lang.Class<any>): java.lang.annotation.Annotation;
									hasAnnotation(class0: java.lang.Class<any>): boolean;
								});
								public constructor();
								public hasAnnotation(class0: java.lang.Class<any>): boolean;
								public ref(): java.util.Collection<any>;
								public getAdapter(): com.sun.xml.bind.v2.model.core.Adapter<T,C>;
								public getName(): string;
								public displayName(): string;
								public getExpectedMimeType(): javax.activation.MimeType;
								public id(): com.sun.xml.bind.v2.model.core.ID;
								public getSource(): com.sun.xml.bind.v2.model.core.PropertyInfo<T,C>;
								public isCollection(): boolean;
								public getSchemaType(): javax.xml.namespace.QName;
								public getTarget(): com.sun.xml.bind.v2.model.core.NonElement<T,C>;
								public parent(): com.sun.xml.bind.v2.model.core.TypeInfo<T,C>;
								public kind(): com.sun.xml.bind.v2.model.core.PropertyKind;
								public readAnnotation(class0: java.lang.Class<any>): java.lang.annotation.Annotation;
								public inlineBinaryData(): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module core {
							export class WildcardMode {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.core.WildcardMode>;
								public static STRICT: com.sun.xml.bind.v2.model.core.WildcardMode;
								public static SKIP: com.sun.xml.bind.v2.model.core.WildcardMode;
								public static LAX: com.sun.xml.bind.v2.model.core.WildcardMode;
								public allowDom: boolean;
								public allowTypedObject: boolean;
								public static valueOf(name: string): com.sun.xml.bind.v2.model.core.WildcardMode;
								public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
								public static values(): native.Array<com.sun.xml.bind.v2.model.core.WildcardMode>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module core {
							export class WildcardTypeInfo<T, C>  extends com.sun.xml.bind.v2.model.core.TypeInfo<any,any> {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.core.WildcardTypeInfo<any,any>>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.model.core.WildcardTypeInfo<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getType(): any;
									canBeReferencedByIDREF(): boolean;
									getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
									getLocation(): com.sun.xml.bind.v2.runtime.Location;
								});
								public constructor();
								public getLocation(): com.sun.xml.bind.v2.runtime.Location;
								public getType(): any;
								public canBeReferencedByIDREF(): boolean;
								public getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
							}
						}
					}
				}
			}
		}
	}
}


declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module impl {
							export class AnyTypeImpl<T, C>  extends com.sun.xml.bind.v2.model.core.NonElement<any,any> {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.impl.AnyTypeImpl<any,any>>;
								public isSimpleType(): boolean;
								public getLocation(): com.sun.xml.bind.v2.runtime.Location;
								public getType(): any;
								public canBeReferencedByIDREF(): boolean;
								public constructor(nav: com.sun.xml.bind.v2.model.nav.Navigator<any,any,any,any>);
								public getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
								public getTypeName(): javax.xml.namespace.QName;
								/** @deprecated */
								public canBeReferencedByIDREF(): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module impl {
							export class ArrayInfoImpl<TypeT, ClassDeclT, FieldT, MethodT>  extends com.sun.xml.bind.v2.model.impl.TypeInfoImpl<any,any,any,any> {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.impl.ArrayInfoImpl<any,any,any,any>>;
								public isSimpleType(): boolean;
								public toString(): string;
								public getLocation(): com.sun.xml.bind.v2.runtime.Location;
								public constructor(builder: com.sun.xml.bind.v2.model.impl.ModelBuilder<any,any,any,any>, upstream: com.sun.xml.bind.v2.model.annotation.Locatable, arrayType: any);
								public getItemType(): com.sun.xml.bind.v2.model.core.NonElement<any,any>;
								public getType(): any;
								public canBeReferencedByIDREF(): boolean;
								public constructor(builder: com.sun.xml.bind.v2.model.impl.ModelBuilder<any,any,any,any>, upstream: com.sun.xml.bind.v2.model.annotation.Locatable);
								public getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
								public getTypeName(): javax.xml.namespace.QName;
								/** @deprecated */
								public canBeReferencedByIDREF(): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module impl {
							export class AttributePropertyInfoImpl<TypeT, ClassDeclT, FieldT, MethodT>  extends com.sun.xml.bind.v2.model.impl.SingleTypePropertyInfoImpl<any,any,any,any> implements com.sun.xml.bind.v2.model.core.AttributePropertyInfo<any,any>  {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.impl.AttributePropertyInfoImpl<any,any,any,any>>;
								public isRequired(): boolean;
								public ref(): java.util.Collection<any>;
								public getName(): string;
								public displayName(): string;
								public getSource(): com.sun.xml.bind.v2.model.core.PropertyInfo<any,any>;
								public getExpectedMimeType(): javax.activation.MimeType;
								public parent(): com.sun.xml.bind.v2.model.impl.ClassInfoImpl<any,any,any,any>;
								public id(): com.sun.xml.bind.v2.model.core.ID;
								public getTarget(): com.sun.xml.bind.v2.model.core.NonElement<any,any>;
								public readAnnotation(annotationType: java.lang.Class<any>): java.lang.annotation.Annotation;
								public isCollection(): boolean;
								public getLocation(): com.sun.xml.bind.v2.runtime.Location;
								public getSchemaType(): javax.xml.namespace.QName;
								public ref(): java.util.List<any>;
								public hasAnnotation(annotationType: java.lang.Class<any>): boolean;
								public getXmlName(): javax.xml.namespace.QName;
								public kind(): com.sun.xml.bind.v2.model.core.PropertyKind;
								public getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
								public parent(): com.sun.xml.bind.v2.model.core.TypeInfo<any,any>;
								public getAdapter(): com.sun.xml.bind.v2.model.core.Adapter<any,any>;
								public inlineBinaryData(): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module impl {
							export class BuiltinLeafInfoImpl<TypeT, ClassDeclT>  extends com.sun.xml.bind.v2.model.impl.LeafInfoImpl<any,any> implements com.sun.xml.bind.v2.model.core.BuiltinLeafInfo<any,any>  {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.impl.BuiltinLeafInfoImpl<any,any>>;
								public getElementName(): javax.xml.namespace.QName;
								public isSimpleType(): boolean;
								public getTypeNames(): native.Array<javax.xml.namespace.QName>;
								public toString(): string;
								public constructor(type: any, typeNames: native.Array<javax.xml.namespace.QName>);
								public isElement(): boolean;
								/** @deprecated */
								public asElement(): com.sun.xml.bind.v2.model.core.Element<any,any>;
								/** @deprecated */
								public isElement(): boolean;
								/** @deprecated */
								public getElementName(): javax.xml.namespace.QName;
								public getTypeName(): javax.xml.namespace.QName;
								public asElement(): com.sun.xml.bind.v2.model.core.Element<any,any>;
								public getLocation(): com.sun.xml.bind.v2.runtime.Location;
								public getType(): any;
								public canBeReferencedByIDREF(): boolean;
								public getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
								public static createLeaves(nav: com.sun.xml.bind.v2.model.nav.Navigator<any,any,any,any>): java.util.Map<any,any>;
								/** @deprecated */
								public canBeReferencedByIDREF(): boolean;
								public constructor(type: any, typeName: javax.xml.namespace.QName);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module impl {
							export class ClassInfoImpl<T, C, F, M>  extends com.sun.xml.bind.v2.model.impl.TypeInfoImpl<any,any,any,any> {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.impl.ClassInfoImpl<any,any,any,any>>;
								public clazz: any;
								public attributeWildcard: com.sun.xml.bind.v2.model.impl.PropertySeed<any,any,any,any>;
								public getElementName(): javax.xml.namespace.QName;
								public isSimpleType(): boolean;
								public createAttributeProperty(seed: com.sun.xml.bind.v2.model.impl.PropertySeed<any,any,any,any>): com.sun.xml.bind.v2.model.impl.AttributePropertyInfoImpl<any,any,any,any>;
								public toString(): string;
								public isAbstract(): boolean;
								public createFieldSeed(f: any): com.sun.xml.bind.v2.model.impl.PropertySeed<any,any,any,any>;
								public inheritsAttributeWildcard(): boolean;
								public getFactoryMethod(): java.lang.reflect.Method;
								public getBaseClass(): com.sun.xml.bind.v2.model.core.ClassInfo<any,any>;
								public getTypeName(): javax.xml.namespace.QName;
								public asElement(): com.sun.xml.bind.v2.model.core.Element<any,any>;
								public hasValueProperty(): boolean;
								public hasSubClasses(): boolean;
								public canBeReferencedByIDREF(): boolean;
								public createAccessorSeed(getter: any, setter: any): com.sun.xml.bind.v2.model.impl.PropertySeed<any,any,any,any>;
								public declaresAttributeWildcard(): boolean;
								public hasProperties(): boolean;
								/** @deprecated */
								public getScope(): com.sun.xml.bind.v2.model.impl.ClassInfoImpl<any,any,any,any>;
								public readAnnotation(a: java.lang.Class<any>): java.lang.annotation.Annotation;
								public getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
								public checkFieldXmlLocation(f: any): void;
								public getClazz(): any;
								public getName(): string;
								public isElement(): boolean;
								public createElementProperty(seed: com.sun.xml.bind.v2.model.impl.PropertySeed<any,any,any,any>): com.sun.xml.bind.v2.model.impl.ElementPropertyInfoImpl<any,any,any,any>;
								public getSubstitutionHead(): com.sun.xml.bind.v2.model.core.Element<any,any>;
								public getScope(): com.sun.xml.bind.v2.model.core.ClassInfo<any,any>;
								public createReferenceProperty(seed: com.sun.xml.bind.v2.model.impl.PropertySeed<any,any,any,any>): com.sun.xml.bind.v2.model.impl.ReferencePropertyInfoImpl<any,any,any,any>;
								public isFinal(): boolean;
								public getProperties(): java.util.List<any>;
								public createMapProperty(seed: com.sun.xml.bind.v2.model.impl.PropertySeed<any,any,any,any>): com.sun.xml.bind.v2.model.impl.MapPropertyInfoImpl<any,any,any,any>;
								public getLocation(): com.sun.xml.bind.v2.runtime.Location;
								public getType(): any;
								public isOrdered(): boolean;
								public createValueProperty(seed: com.sun.xml.bind.v2.model.impl.PropertySeed<any,any,any,any>): com.sun.xml.bind.v2.model.impl.ValuePropertyInfoImpl<any,any,any,any>;
								public getProperty(name: string): com.sun.xml.bind.v2.model.core.PropertyInfo<any,any>;
								public hasAttributeWildcard(): boolean;
								public getBaseClass(): com.sun.xml.bind.v2.model.impl.ClassInfoImpl<any,any,any,any>;
							}
							export module ClassInfoImpl {
								export class ConflictException extends java.lang.Exception {
									public static class: java.lang.Class<com.sun.xml.bind.v2.model.impl.ClassInfoImpl.ConflictException>;
									public constructor();
									public constructor(cause: java.lang.Throwable);
									public constructor(message: string);
									public constructor(message: string, cause: java.lang.Throwable);
									public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
									public constructor(one: java.util.List<java.lang.annotation.Annotation>);
								}
								export class DuplicateException extends java.lang.Exception {
									public static class: java.lang.Class<com.sun.xml.bind.v2.model.impl.ClassInfoImpl.DuplicateException>;
									public constructor();
									public constructor(cause: java.lang.Throwable);
									public constructor(message: string);
									public constructor(message: string, cause: java.lang.Throwable);
									public constructor(a1: java.lang.annotation.Annotation, a2: java.lang.annotation.Annotation);
									public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
								}
								export class PropertyGroup {
									public static class: java.lang.Class<com.sun.xml.bind.v2.model.impl.ClassInfoImpl.PropertyGroup>;
									public static TRANSIENT: com.sun.xml.bind.v2.model.impl.ClassInfoImpl.PropertyGroup;
									public static ANY_ATTRIBUTE: com.sun.xml.bind.v2.model.impl.ClassInfoImpl.PropertyGroup;
									public static ATTRIBUTE: com.sun.xml.bind.v2.model.impl.ClassInfoImpl.PropertyGroup;
									public static VALUE: com.sun.xml.bind.v2.model.impl.ClassInfoImpl.PropertyGroup;
									public static ELEMENT: com.sun.xml.bind.v2.model.impl.ClassInfoImpl.PropertyGroup;
									public static ELEMENT_REF: com.sun.xml.bind.v2.model.impl.ClassInfoImpl.PropertyGroup;
									public static MAP: com.sun.xml.bind.v2.model.impl.ClassInfoImpl.PropertyGroup;
									public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
									public static values(): native.Array<com.sun.xml.bind.v2.model.impl.ClassInfoImpl.PropertyGroup>;
									public static valueOf(name: string): com.sun.xml.bind.v2.model.impl.ClassInfoImpl.PropertyGroup;
								}
								export class PropertySorter extends java.util.HashMap<string,java.lang.Integer> implements java.util.Comparator<com.sun.xml.bind.v2.model.impl.PropertyInfoImpl<any,any,any,any>>  {
									public static class: java.lang.Class<com.sun.xml.bind.v2.model.impl.ClassInfoImpl.PropertySorter>;
									public remove(key: any, value: any): boolean;
									public static comparingLong(keyExtractor: any /* any*/): java.util.Comparator<any>;
									public keySet(): java.util.Set<any>;
									public computeIfAbsent(key: any, mappingFunction: any /* any<any,any>*/): any;
									public putAll(m: java.util.Map<any,any>): void;
									public computeIfPresent(key: any, remappingFunction: any /* any<any,any,any>*/): any;
									public remove(key: any): any;
									public static comparingDouble(keyExtractor: any /* any*/): java.util.Comparator<any>;
									public static naturalOrder(): java.util.Comparator<any>;
									public reversed(): java.util.Comparator<any>;
									public get(key: any): any;
									public equals(o: any): boolean;
									public static comparing(keyExtractor: any /* any*/, keyComparator: java.util.Comparator<any>): java.util.Comparator<any>;
									public getOrDefault(key: any, defaultValue: any): any;
									public compute(key: any, remappingFunction: any /* any<any,any,any>*/): any;
									public replace(key: any, oldValue: any, newValue: any): boolean;
									public merge(key: any, value: any, remappingFunction: any /* any<any,any,any>*/): any;
									public compare(object0: any, object1: any): number;
									public static comparingInt(keyExtractor: any /* any*/): java.util.Comparator<any>;
									public thenComparingDouble(keyExtractor: any /* any*/): java.util.Comparator<any>;
									public isEmpty(): boolean;
									public compare(o1: com.sun.xml.bind.v2.model.impl.PropertyInfoImpl<any,any,any,any>, o2: com.sun.xml.bind.v2.model.impl.PropertyInfoImpl<any,any,any,any>): number;
									public hashCode(): number;
									public thenComparing(keyExtractor: any /* any*/, keyComparator: java.util.Comparator<any>): java.util.Comparator<any>;
									public put(key: any, value: any): any;
									public size(): number;
									public clear(): void;
									public thenComparingInt(keyExtractor: any /* any*/): java.util.Comparator<any>;
									public entrySet(): java.util.Set<java.util.Map.Entry<any,any>>;
									public replaceAll(function0: any /* any<any,any,any>*/): void;
									public containsValue(value: any): boolean;
									public checkUnusedProperties(): void;
									public static nullsFirst(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
									public thenComparing(keyExtractor: any /* any*/): java.util.Comparator<any>;
									public static nullsLast(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
									public thenComparing(other: java.util.Comparator<any>): java.util.Comparator<any>;
									public putIfAbsent(key: any, value: any): any;
									public replace(key: any, value: any): any;
									public static reverseOrder(): java.util.Comparator<any>;
									public values(): java.util.Collection<any>;
									public forEach(action: any /* any<any,any>*/): void;
									public thenComparingLong(keyExtractor: any /* any*/): java.util.Comparator<any>;
									public static comparing(keyExtractor: any /* any*/): java.util.Comparator<any>;
									public containsKey(key: any): boolean;
								}
								export class SecondaryAnnotation {
									public static class: java.lang.Class<com.sun.xml.bind.v2.model.impl.ClassInfoImpl.SecondaryAnnotation>;
									public static JAVA_TYPE: com.sun.xml.bind.v2.model.impl.ClassInfoImpl.SecondaryAnnotation;
									public static ID_IDREF: com.sun.xml.bind.v2.model.impl.ClassInfoImpl.SecondaryAnnotation;
									public static BINARY: com.sun.xml.bind.v2.model.impl.ClassInfoImpl.SecondaryAnnotation;
									public static ELEMENT_WRAPPER: com.sun.xml.bind.v2.model.impl.ClassInfoImpl.SecondaryAnnotation;
									public static LIST: com.sun.xml.bind.v2.model.impl.ClassInfoImpl.SecondaryAnnotation;
									public static SCHEMA_TYPE: com.sun.xml.bind.v2.model.impl.ClassInfoImpl.SecondaryAnnotation;
									public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
									public static valueOf(name: string): com.sun.xml.bind.v2.model.impl.ClassInfoImpl.SecondaryAnnotation;
									public static values(): native.Array<com.sun.xml.bind.v2.model.impl.ClassInfoImpl.SecondaryAnnotation>;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module impl {
							export class DummyPropertyInfo<T, C, F, M>  extends java.lang.Object {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.impl.DummyPropertyInfo<any,any,any,any>>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.model.impl.DummyPropertyInfo<any,any,any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									addType(propertyInfoImpl0: com.sun.xml.bind.v2.model.impl.PropertyInfoImpl<T,C,F,M>): void;
								});
								public constructor();
								public addType(propertyInfoImpl0: com.sun.xml.bind.v2.model.impl.PropertyInfoImpl<T,C,F,M>): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module impl {
							export abstract class ERPropertyInfoImpl<TypeT, ClassDeclT, FieldT, MethodT>  extends com.sun.xml.bind.v2.model.impl.PropertyInfoImpl<any,any,any,any> {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.impl.ERPropertyInfoImpl<any,any,any,any>>;
								public ref(): java.util.Collection<any>;
								public getName(): string;
								public displayName(): string;
								public getExpectedMimeType(): javax.activation.MimeType;
								public parent(): com.sun.xml.bind.v2.model.impl.ClassInfoImpl<any,any,any,any>;
								public id(): com.sun.xml.bind.v2.model.core.ID;
								public isCollectionRequired(): boolean;
								public isCollection(): boolean;
								public getLocation(): com.sun.xml.bind.v2.runtime.Location;
								public getSchemaType(): javax.xml.namespace.QName;
								public constructor(parent: com.sun.xml.bind.v2.model.impl.ClassInfoImpl<any,any,any,any>, spi: com.sun.xml.bind.v2.model.impl.PropertySeed<any,any,any,any>);
								public getXmlName(): javax.xml.namespace.QName;
								public kind(): com.sun.xml.bind.v2.model.core.PropertyKind;
								public getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
								public parent(): com.sun.xml.bind.v2.model.core.TypeInfo<any,any>;
								public isCollectionNillable(): boolean;
								public constructor(classInfo: com.sun.xml.bind.v2.model.impl.ClassInfoImpl<any,any,any,any>, propertySeed: com.sun.xml.bind.v2.model.impl.PropertySeed<any,any,any,any>);
								public getAdapter(): com.sun.xml.bind.v2.model.core.Adapter<any,any>;
								public inlineBinaryData(): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module impl {
							export class ElementInfoImpl<T, C, F, M>  extends com.sun.xml.bind.v2.model.impl.TypeInfoImpl<any,any,any,any> implements com.sun.xml.bind.v2.model.core.ElementInfo<any,any>  {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.impl.ElementInfoImpl<any,any,any,any>>;
								public getElementName(): javax.xml.namespace.QName;
								public createPropertyImpl(): com.sun.xml.bind.v2.model.impl.ElementInfoImpl.PropertyImpl;
								public getProperty(): com.sun.xml.bind.v2.model.core.ElementPropertyInfo<any,any>;
								public getContentType(): com.sun.xml.bind.v2.model.core.NonElement<any,any>;
								public getScope(): com.sun.xml.bind.v2.model.core.ClassInfo<any,any>;
								public getSubstitutionHead(): com.sun.xml.bind.v2.model.core.Element<any,any>;
								public getSubstitutionHead(): com.sun.xml.bind.v2.model.core.ElementInfo<any,any>;
								public getLocation(): com.sun.xml.bind.v2.runtime.Location;
								public getContentInMemoryType(): any;
								public getType(): any;
								public canBeReferencedByIDREF(): boolean;
								public constructor(builder: com.sun.xml.bind.v2.model.impl.ModelBuilder<any,any,any,any>, registry: com.sun.xml.bind.v2.model.impl.RegistryInfoImpl<any,any,any,any>, m: any);
								public getSubstitutionMembers(): java.util.Collection<any>;
								public constructor(builder: com.sun.xml.bind.v2.model.impl.ModelBuilder<any,any,any,any>, upstream: com.sun.xml.bind.v2.model.annotation.Locatable);
								public getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
								/** @deprecated */
								public canBeReferencedByIDREF(): boolean;
							}
							export module ElementInfoImpl {
								export class PropertyImpl extends java.lang.Object {
									public static class: java.lang.Class<com.sun.xml.bind.v2.model.impl.ElementInfoImpl.PropertyImpl>;
									public isValueList(): boolean;
									public isCollection(): boolean;
									public isNillable(): boolean;
									public id(): com.sun.xml.bind.v2.model.core.ID;
									public displayName(): string;
									public hasAnnotation(annotationType: java.lang.Class<any>): boolean;
									public getDefaultValue(): string;
									public ref(): java.util.Collection<any>;
									public inlineBinaryData(): boolean;
									public readAnnotation(annotationType: java.lang.Class<any>): java.lang.annotation.Annotation;
									public isCollectionRequired(): boolean;
									public constructor(this0: com.sun.xml.bind.v2.model.impl.ElementInfoImpl<any,any,any,any>);
									public getSource(): com.sun.xml.bind.v2.model.core.PropertyInfo<any,any>;
									public parent(): com.sun.xml.bind.v2.model.impl.ElementInfoImpl<any,any,any,any>;
									public getName(): string;
									public kind(): com.sun.xml.bind.v2.model.core.PropertyKind;
									public getTagName(): javax.xml.namespace.QName;
									public ref(): java.util.List<any>;
									public parent(): com.sun.xml.bind.v2.model.core.TypeInfo<any,any>;
									public isRequired(): boolean;
									public isCollectionNillable(): boolean;
									public getExpectedMimeType(): javax.activation.MimeType;
									public getTarget(): com.sun.xml.bind.v2.model.core.NonElement<any,any>;
									public getXmlName(): javax.xml.namespace.QName;
									public getAdapter(): com.sun.xml.bind.v2.model.core.Adapter<any,any>;
									public getSchemaType(): javax.xml.namespace.QName;
									public getTypes(): java.util.List<any>;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module impl {
							export class ElementPropertyInfoImpl<TypeT, ClassDeclT, FieldT, MethodT>  extends com.sun.xml.bind.v2.model.impl.ERPropertyInfoImpl<any,any,any,any> implements com.sun.xml.bind.v2.model.core.ElementPropertyInfo<any,any>  {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.impl.ElementPropertyInfoImpl<any,any,any,any>>;
								public isValueList(): boolean;
								public isRequired(): boolean;
								public displayName(): string;
								public getExpectedMimeType(): javax.activation.MimeType;
								public isCollectionRequired(): boolean;
								public readAnnotation(annotationType: java.lang.Class<any>): java.lang.annotation.Annotation;
								public getSchemaType(): javax.xml.namespace.QName;
								public ref(): java.util.List<any>;
								public hasAnnotation(annotationType: java.lang.Class<any>): boolean;
								public kind(): com.sun.xml.bind.v2.model.core.PropertyKind;
								public getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
								public parent(): com.sun.xml.bind.v2.model.core.TypeInfo<any,any>;
								public getAdapter(): com.sun.xml.bind.v2.model.core.Adapter<any,any>;
								public ref(): java.util.Collection<any>;
								public getName(): string;
								public createTypeRef(name: javax.xml.namespace.QName, type: any, isNillable: boolean, defaultValue: string): com.sun.xml.bind.v2.model.impl.TypeRefImpl<any,any>;
								public parent(): com.sun.xml.bind.v2.model.impl.ClassInfoImpl<any,any,any,any>;
								public id(): com.sun.xml.bind.v2.model.core.ID;
								public getTypes(): java.util.List<any>;
								public isCollection(): boolean;
								public getLocation(): com.sun.xml.bind.v2.runtime.Location;
								public getXmlName(): javax.xml.namespace.QName;
								public link(): void;
								public isCollectionNillable(): boolean;
								public inlineBinaryData(): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module impl {
							export class EnumConstantImpl<T, C, F, M>  extends com.sun.xml.bind.v2.model.core.EnumConstant<any,any> {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.impl.EnumConstantImpl<any,any,any,any>>;
								public lexical: string;
								public owner: com.sun.xml.bind.v2.model.impl.EnumLeafInfoImpl<any,any,any,any>;
								public name: string;
								public next: com.sun.xml.bind.v2.model.impl.EnumConstantImpl<any,any,any,any>;
								public getName(): string;
								public getEnclosingClass(): com.sun.xml.bind.v2.model.core.EnumLeafInfo<any,any>;
								public getLexicalValue(): string;
								public constructor(owner: com.sun.xml.bind.v2.model.impl.EnumLeafInfoImpl<any,any,any,any>, name: string, lexical: string, next: com.sun.xml.bind.v2.model.impl.EnumConstantImpl<any,any,any,any>);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module impl {
							export class EnumLeafInfoImpl<T, C, F, M>  extends com.sun.xml.bind.v2.model.impl.TypeInfoImpl<any,any,any,any> {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.impl.EnumLeafInfoImpl<any,any,any,any>>;
								public tokenStringType: boolean;
								public isSimpleType(): boolean;
								public getElementName(): javax.xml.namespace.QName;
								public calcConstants(): void;
								public getTypeName(): javax.xml.namespace.QName;
								/** @deprecated */
								public getSubstitutionHead(): com.sun.xml.bind.v2.model.core.Element<any,any>;
								public asElement(): com.sun.xml.bind.v2.model.core.Element<any,any>;
								public isToken(): boolean;
								public canBeReferencedByIDREF(): boolean;
								public spliterator(): java.util.Spliterator<any>;
								public getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
								/** @deprecated */
								public canBeReferencedByIDREF(): boolean;
								public forEach(action: any /* any*/): void;
								public getClazz(): any;
								public isElement(): boolean;
								/** @deprecated */
								public getScope(): com.sun.xml.bind.v2.model.core.ClassInfo<any,any>;
								public getSubstitutionHead(): com.sun.xml.bind.v2.model.core.Element<any,any>;
								public getScope(): com.sun.xml.bind.v2.model.core.ClassInfo<any,any>;
								public getBaseType(): com.sun.xml.bind.v2.model.core.NonElement<any,any>;
								public getLocation(): com.sun.xml.bind.v2.runtime.Location;
								public getType(): any;
								public iterator(): java.util.Iterator<com.sun.xml.bind.v2.model.impl.EnumConstantImpl<any,any,any,any>>;
								public constructor(builder: com.sun.xml.bind.v2.model.impl.ModelBuilder<any,any,any,any>, upstream: com.sun.xml.bind.v2.model.annotation.Locatable, clazz: any, type: any);
								public constructor(builder: com.sun.xml.bind.v2.model.impl.ModelBuilder<any,any,any,any>, upstream: com.sun.xml.bind.v2.model.annotation.Locatable);
								public iterator(): java.util.Iterator<any>;
								public getConstants(): java.lang.Iterable<any>;
								public createEnumConstant(name: string, literal: string, constant: any, last: com.sun.xml.bind.v2.model.impl.EnumConstantImpl<any,any,any,any>): com.sun.xml.bind.v2.model.impl.EnumConstantImpl<any,any,any,any>;
								public link(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module impl {
							export class FieldPropertySeed<TypeT, ClassDeclT, FieldT, MethodT>  extends com.sun.xml.bind.v2.model.impl.PropertySeed<any,any,any,any> {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.impl.FieldPropertySeed<any,any,any,any>>;
								public field: any;
								public getLocation(): com.sun.xml.bind.v2.runtime.Location;
								public getName(): string;
								public hasAnnotation(annotationType: java.lang.Class<any>): boolean;
								public getRawType(): any;
								public readAnnotation(a: java.lang.Class<any>): java.lang.annotation.Annotation;
								public getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module impl {
							export class GetterSetterPropertySeed<TypeT, ClassDeclT, FieldT, MethodT>  extends com.sun.xml.bind.v2.model.impl.PropertySeed<any,any,any,any> {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.impl.GetterSetterPropertySeed<any,any,any,any>>;
								public getter: any;
								public setter: any;
								public getLocation(): com.sun.xml.bind.v2.runtime.Location;
								public readAnnotation(annotation: java.lang.Class<any>): java.lang.annotation.Annotation;
								public getName(): string;
								public getRawType(): any;
								public hasAnnotation(annotationType: java.lang.Class<any>): boolean;
								public getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module impl {
							export abstract class LeafInfoImpl<TypeT, ClassDeclT>  extends java.lang.Object {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.impl.LeafInfoImpl<any,any>>;
								public isSimpleType(): boolean;
								public getElementName(): javax.xml.namespace.QName;
								public toString(): string;
								public getType(): TypeT;
								public isElement(): boolean;
								public getTypeName(): javax.xml.namespace.QName;
								public asElement(): com.sun.xml.bind.v2.model.core.Element<any,any>;
								public constructor(type: TypeT, typeName: javax.xml.namespace.QName);
								public getLocation(): com.sun.xml.bind.v2.runtime.Location;
								public getType(): any;
								public canBeReferencedByIDREF(): boolean;
								public getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
								/** @deprecated */
								public canBeReferencedByIDREF(): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module impl {
							export class MapPropertyInfoImpl<T, C, F, M>  extends com.sun.xml.bind.v2.model.impl.PropertyInfoImpl<any,any,any,any> implements com.sun.xml.bind.v2.model.core.MapPropertyInfo<any,any>  {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.impl.MapPropertyInfoImpl<any,any,any,any>>;
								public ref(): java.util.Collection<any>;
								public getTarget(type: any): com.sun.xml.bind.v2.model.core.NonElement<any,any>;
								public getName(): string;
								public displayName(): string;
								public getExpectedMimeType(): javax.activation.MimeType;
								public parent(): com.sun.xml.bind.v2.model.impl.ClassInfoImpl<any,any,any,any>;
								public id(): com.sun.xml.bind.v2.model.core.ID;
								public constructor(ci: com.sun.xml.bind.v2.model.impl.ClassInfoImpl<any,any,any,any>, seed: com.sun.xml.bind.v2.model.impl.PropertySeed<any,any,any,any>);
								public getValueType(): com.sun.xml.bind.v2.model.core.NonElement<any,any>;
								public readAnnotation(annotationType: java.lang.Class<any>): java.lang.annotation.Annotation;
								public isCollection(): boolean;
								public getKeyType(): com.sun.xml.bind.v2.model.core.NonElement<any,any>;
								public getLocation(): com.sun.xml.bind.v2.runtime.Location;
								public getSchemaType(): javax.xml.namespace.QName;
								public hasAnnotation(annotationType: java.lang.Class<any>): boolean;
								public constructor(parent: com.sun.xml.bind.v2.model.impl.ClassInfoImpl<any,any,any,any>, spi: com.sun.xml.bind.v2.model.impl.PropertySeed<any,any,any,any>);
								public kind(): com.sun.xml.bind.v2.model.core.PropertyKind;
								public getXmlName(): javax.xml.namespace.QName;
								public getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
								public parent(): com.sun.xml.bind.v2.model.core.TypeInfo<any,any>;
								public isCollectionNillable(): boolean;
								public getAdapter(): com.sun.xml.bind.v2.model.core.Adapter<any,any>;
								public inlineBinaryData(): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module impl {
							export class Messages {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.impl.Messages>;
								public static ID_MUST_BE_STRING: com.sun.xml.bind.v2.model.impl.Messages;
								public static MUTUALLY_EXCLUSIVE_ANNOTATIONS: com.sun.xml.bind.v2.model.impl.Messages;
								public static DUPLICATE_ANNOTATIONS: com.sun.xml.bind.v2.model.impl.Messages;
								public static NO_DEFAULT_CONSTRUCTOR: com.sun.xml.bind.v2.model.impl.Messages;
								public static CANT_HANDLE_INTERFACE: com.sun.xml.bind.v2.model.impl.Messages;
								public static CANT_HANDLE_INNER_CLASS: com.sun.xml.bind.v2.model.impl.Messages;
								public static ANNOTATION_ON_WRONG_METHOD: com.sun.xml.bind.v2.model.impl.Messages;
								public static GETTER_SETTER_INCOMPATIBLE_TYPE: com.sun.xml.bind.v2.model.impl.Messages;
								public static DUPLICATE_ENTRY_IN_PROP_ORDER: com.sun.xml.bind.v2.model.impl.Messages;
								public static DUPLICATE_PROPERTIES: com.sun.xml.bind.v2.model.impl.Messages;
								public static XML_ELEMENT_MAPPING_ON_NON_IXMLELEMENT_METHOD: com.sun.xml.bind.v2.model.impl.Messages;
								public static SCOPE_IS_NOT_COMPLEXTYPE: com.sun.xml.bind.v2.model.impl.Messages;
								public static CONFLICTING_XML_ELEMENT_MAPPING: com.sun.xml.bind.v2.model.impl.Messages;
								public static REFERENCE_TO_NON_ELEMENT: com.sun.xml.bind.v2.model.impl.Messages;
								public static NON_EXISTENT_ELEMENT_MAPPING: com.sun.xml.bind.v2.model.impl.Messages;
								public static TWO_ATTRIBUTE_WILDCARDS: com.sun.xml.bind.v2.model.impl.Messages;
								public static SUPER_CLASS_HAS_WILDCARD: com.sun.xml.bind.v2.model.impl.Messages;
								public static INVALID_ATTRIBUTE_WILDCARD_TYPE: com.sun.xml.bind.v2.model.impl.Messages;
								public static PROPERTY_MISSING_FROM_ORDER: com.sun.xml.bind.v2.model.impl.Messages;
								public static PROPERTY_ORDER_CONTAINS_UNUSED_ENTRY: com.sun.xml.bind.v2.model.impl.Messages;
								public static INVALID_XML_ENUM_VALUE: com.sun.xml.bind.v2.model.impl.Messages;
								public static NO_IMAGE_WRITER: com.sun.xml.bind.v2.model.impl.Messages;
								public static ILLEGAL_MIME_TYPE: com.sun.xml.bind.v2.model.impl.Messages;
								public static ILLEGAL_ANNOTATION: com.sun.xml.bind.v2.model.impl.Messages;
								public static MULTIPLE_VALUE_PROPERTY: com.sun.xml.bind.v2.model.impl.Messages;
								public static ELEMENT_AND_VALUE_PROPERTY: com.sun.xml.bind.v2.model.impl.Messages;
								public static CONFLICTING_XML_TYPE_MAPPING: com.sun.xml.bind.v2.model.impl.Messages;
								public static XMLVALUE_IN_DERIVED_TYPE: com.sun.xml.bind.v2.model.impl.Messages;
								public static SIMPLE_TYPE_IS_REQUIRED: com.sun.xml.bind.v2.model.impl.Messages;
								public static PROPERTY_COLLISION: com.sun.xml.bind.v2.model.impl.Messages;
								public static INVALID_IDREF: com.sun.xml.bind.v2.model.impl.Messages;
								public static INVALID_XML_ELEMENT_REF: com.sun.xml.bind.v2.model.impl.Messages;
								public static NO_XML_ELEMENT_DECL: com.sun.xml.bind.v2.model.impl.Messages;
								public static XML_ELEMENT_WRAPPER_ON_NON_COLLECTION: com.sun.xml.bind.v2.model.impl.Messages;
								public static ANNOTATION_NOT_ALLOWED: com.sun.xml.bind.v2.model.impl.Messages;
								public static XMLLIST_NEEDS_SIMPLETYPE: com.sun.xml.bind.v2.model.impl.Messages;
								public static XMLLIST_ON_SINGLE_PROPERTY: com.sun.xml.bind.v2.model.impl.Messages;
								public static NO_FACTORY_METHOD: com.sun.xml.bind.v2.model.impl.Messages;
								public static FACTORY_CLASS_NEEDS_FACTORY_METHOD: com.sun.xml.bind.v2.model.impl.Messages;
								public static INCOMPATIBLE_API_VERSION: com.sun.xml.bind.v2.model.impl.Messages;
								public static INCOMPATIBLE_API_VERSION_MUSTANG: com.sun.xml.bind.v2.model.impl.Messages;
								public static RUNNING_WITH_1_0_RUNTIME: com.sun.xml.bind.v2.model.impl.Messages;
								public static MISSING_JAXB_PROPERTIES: com.sun.xml.bind.v2.model.impl.Messages;
								public static TRANSIENT_FIELD_NOT_BINDABLE: com.sun.xml.bind.v2.model.impl.Messages;
								public static THERE_MUST_BE_VALUE_IN_XMLVALUE: com.sun.xml.bind.v2.model.impl.Messages;
								public static UNMATCHABLE_ADAPTER: com.sun.xml.bind.v2.model.impl.Messages;
								public static ANONYMOUS_ARRAY_ITEM: com.sun.xml.bind.v2.model.impl.Messages;
								public static ACCESSORFACTORY_INSTANTIATION_EXCEPTION: com.sun.xml.bind.v2.model.impl.Messages;
								public static ACCESSORFACTORY_ACCESS_EXCEPTION: com.sun.xml.bind.v2.model.impl.Messages;
								public static CUSTOM_ACCESSORFACTORY_PROPERTY_ERROR: com.sun.xml.bind.v2.model.impl.Messages;
								public static CUSTOM_ACCESSORFACTORY_FIELD_ERROR: com.sun.xml.bind.v2.model.impl.Messages;
								public static XMLGREGORIANCALENDAR_INVALID: com.sun.xml.bind.v2.model.impl.Messages;
								public static XMLGREGORIANCALENDAR_SEC: com.sun.xml.bind.v2.model.impl.Messages;
								public static XMLGREGORIANCALENDAR_MIN: com.sun.xml.bind.v2.model.impl.Messages;
								public static XMLGREGORIANCALENDAR_HR: com.sun.xml.bind.v2.model.impl.Messages;
								public static XMLGREGORIANCALENDAR_DAY: com.sun.xml.bind.v2.model.impl.Messages;
								public static XMLGREGORIANCALENDAR_MONTH: com.sun.xml.bind.v2.model.impl.Messages;
								public static XMLGREGORIANCALENDAR_YEAR: com.sun.xml.bind.v2.model.impl.Messages;
								public static XMLGREGORIANCALENDAR_TIMEZONE: com.sun.xml.bind.v2.model.impl.Messages;
								public toString(): string;
								public static values(): native.Array<com.sun.xml.bind.v2.model.impl.Messages>;
								public static valueOf(name: string): com.sun.xml.bind.v2.model.impl.Messages;
								public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
								public format(objects0: native.Array<any>): string;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module impl {
							export class ModelBuilder<T, C, F, M>  extends com.sun.xml.bind.v2.model.impl.ModelBuilderI<any,any,any,any> {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.impl.ModelBuilder<any,any,any,any>>;
								public reader: com.sun.xml.bind.v2.model.annotation.AnnotationReader<any,any,any,any>;
								public nav: com.sun.xml.bind.v2.model.nav.Navigator<any,any,any,any>;
								public defaultNsUri: string;
								public hasSwaRef: boolean;
								public createEnumLeafInfo(clazz: any, upstream: com.sun.xml.bind.v2.model.annotation.Locatable): com.sun.xml.bind.v2.model.impl.EnumLeafInfoImpl<any,any,any,any>;
								public getClassInfo(clazz: any, searchForSuperClass: boolean, upstream: com.sun.xml.bind.v2.model.annotation.Locatable): com.sun.xml.bind.v2.model.core.NonElement<any,any>;
								public createArrayInfo(upstream: com.sun.xml.bind.v2.model.annotation.Locatable, arrayType: any): com.sun.xml.bind.v2.model.impl.ArrayInfoImpl<any,any,any,any>;
								public link(): com.sun.xml.bind.v2.model.core.TypeInfoSet<any,any,any,any>;
								public getReader(): com.sun.xml.bind.v2.model.annotation.AnnotationReader<any,any,any,any>;
								public setErrorHandler(errorHandler: com.sun.xml.bind.v2.model.core.ErrorHandler): void;
								public getTypeInfo(ref: com.sun.xml.bind.v2.model.core.Ref<any,any>): com.sun.xml.bind.v2.model.core.NonElement<any,any>;
								public getClassInfo(clazz: any, upstream: com.sun.xml.bind.v2.model.annotation.Locatable): com.sun.xml.bind.v2.model.core.NonElement<any,any>;
								public getNavigator(): com.sun.xml.bind.v2.model.nav.Navigator<any,any,any,any>;
								public getRegistry(packageName: string): com.sun.xml.bind.v2.model.core.RegistryInfo<any,any>;
								public createElementInfo(registryInfo: com.sun.xml.bind.v2.model.impl.RegistryInfoImpl<any,any,any,any>, m: any): com.sun.xml.bind.v2.model.impl.ElementInfoImpl<any,any,any,any>;
								public reportError(e: com.sun.xml.bind.v2.runtime.IllegalAnnotationException): void;
								public createTypeInfoSet(): com.sun.xml.bind.v2.model.impl.TypeInfoSetImpl<any,any,any,any>;
								public getTypeInfo(t: any, upstream: com.sun.xml.bind.v2.model.annotation.Locatable): com.sun.xml.bind.v2.model.core.NonElement<any,any>;
								public createClassInfo(clazz: any, upstream: com.sun.xml.bind.v2.model.annotation.Locatable): com.sun.xml.bind.v2.model.impl.ClassInfoImpl<any,any,any,any>;
								public isReplaced(sc: any): boolean;
								public constructor(reader: com.sun.xml.bind.v2.model.annotation.AnnotationReader<any,any,any,any>, navigator: com.sun.xml.bind.v2.model.nav.Navigator<any,any,any,any>, subclassReplacements: java.util.Map<any,any>, defaultNamespaceRemap: string);
								public addRegistry(registryClass: any, upstream: com.sun.xml.bind.v2.model.annotation.Locatable): com.sun.xml.bind.v2.model.core.RegistryInfo<any,any>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module impl {
							export class ModelBuilderI<T, C, F, M>  extends java.lang.Object {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.impl.ModelBuilderI<any,any,any,any>>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.model.impl.ModelBuilderI<any,any,any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getNavigator(): com.sun.xml.bind.v2.model.nav.Navigator<T,C,F,M>;
									getReader(): com.sun.xml.bind.v2.model.annotation.AnnotationReader<T,C,F,M>;
								});
								public constructor();
								public getNavigator(): com.sun.xml.bind.v2.model.nav.Navigator<T,C,F,M>;
								public getReader(): com.sun.xml.bind.v2.model.annotation.AnnotationReader<T,C,F,M>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module impl {
							export abstract class PropertyInfoImpl<T, C, F, M>  extends java.lang.Object {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.impl.PropertyInfoImpl<any,any,any,any>>;
								public seed: com.sun.xml.bind.v2.model.impl.PropertySeed<T,C,F,M>;
								public constructor(parent: com.sun.xml.bind.v2.model.impl.ClassInfoImpl<T,C,F,M>, spi: com.sun.xml.bind.v2.model.impl.PropertySeed<T,C,F,M>);
								public getIndividualType(): T;
								public getAdapter(): com.sun.xml.bind.v2.model.core.Adapter<T,C>;
								public displayName(): string;
								public getExpectedMimeType(): javax.activation.MimeType;
								public readAnnotation(annotationType: java.lang.Class<any>): java.lang.annotation.Annotation;
								public getSchemaType(): javax.xml.namespace.QName;
								public parent(): com.sun.xml.bind.v2.model.impl.ClassInfoImpl<T,C,F,M>;
								public nav(): com.sun.xml.bind.v2.model.nav.Navigator<T,C,F,M>;
								public hasAnnotation(annotationType: java.lang.Class<any>): boolean;
								public parent(): com.sun.xml.bind.v2.model.core.TypeInfo<T,C>;
								public getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
								public kind(): com.sun.xml.bind.v2.model.core.PropertyKind;
								public reader(): com.sun.xml.bind.v2.model.annotation.AnnotationReader<T,C,F,M>;
								public ref(): java.util.Collection<any>;
								public getName(): string;
								public getRawType(): T;
								public id(): com.sun.xml.bind.v2.model.core.ID;
								public calcXmlName(e: javax.xml.bind.annotation.XmlElementWrapper): javax.xml.namespace.QName;
								public isCollection(): boolean;
								public getLocation(): com.sun.xml.bind.v2.runtime.Location;
								public calcXmlName(e: javax.xml.bind.annotation.XmlElement): javax.xml.namespace.QName;
								public link(): void;
								public inlineBinaryData(): boolean;
								public compareTo(that: com.sun.xml.bind.v2.model.impl.PropertyInfoImpl<any,any,any,any>): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module impl {
							export class PropertySeed<T, C, F, M>  extends java.lang.Object {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.impl.PropertySeed<any,any,any,any>>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.model.impl.PropertySeed<any,any,any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getName(): string;
									getRawType(): T;
									getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
									getLocation(): com.sun.xml.bind.v2.runtime.Location;
									readAnnotation(class0: java.lang.Class<any>): java.lang.annotation.Annotation;
									hasAnnotation(class0: java.lang.Class<any>): boolean;
								});
								public constructor();
								public hasAnnotation(class0: java.lang.Class<any>): boolean;
								public getLocation(): com.sun.xml.bind.v2.runtime.Location;
								public getName(): string;
								public getRawType(): T;
								public getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
								public readAnnotation(class0: java.lang.Class<any>): java.lang.annotation.Annotation;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module impl {
							export class ReferencePropertyInfoImpl<T, C, F, M>  extends com.sun.xml.bind.v2.model.impl.ERPropertyInfoImpl<any,any,any,any> {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.impl.ReferencePropertyInfoImpl<any,any,any,any>>;
								public isRequired(): boolean;
								public displayName(): string;
								public getExpectedMimeType(): javax.activation.MimeType;
								public isCollectionRequired(): boolean;
								public readAnnotation(annotationType: java.lang.Class<any>): java.lang.annotation.Annotation;
								public ref(): java.util.Set<any>;
								public getSchemaType(): javax.xml.namespace.QName;
								public getWildcard(): com.sun.xml.bind.v2.model.core.WildcardMode;
								public hasAnnotation(annotationType: java.lang.Class<any>): boolean;
								public kind(): com.sun.xml.bind.v2.model.core.PropertyKind;
								public getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
								public parent(): com.sun.xml.bind.v2.model.core.TypeInfo<any,any>;
								public constructor(classInfo: com.sun.xml.bind.v2.model.impl.ClassInfoImpl<any,any,any,any>, propertySeed: com.sun.xml.bind.v2.model.impl.PropertySeed<any,any,any,any>);
								public getAdapter(): com.sun.xml.bind.v2.model.core.Adapter<any,any>;
								public isMixed(): boolean;
								public ref(): java.util.Collection<any>;
								public getName(): string;
								public parent(): com.sun.xml.bind.v2.model.impl.ClassInfoImpl<any,any,any,any>;
								public id(): com.sun.xml.bind.v2.model.core.ID;
								public isCollection(): boolean;
								public getElements(): java.util.Set<any>;
								public getLocation(): com.sun.xml.bind.v2.runtime.Location;
								public addType(info: com.sun.xml.bind.v2.model.impl.PropertyInfoImpl<any,any,any,any>): void;
								public getDOMHandler(): any;
								public getXmlName(): javax.xml.namespace.QName;
								public constructor(classInfo: com.sun.xml.bind.v2.model.impl.ClassInfoImpl<any,any,any,any>, seed: com.sun.xml.bind.v2.model.impl.PropertySeed<any,any,any,any>);
								public link(): void;
								public isCollectionNillable(): boolean;
								public inlineBinaryData(): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module impl {
							export class RegistryInfoImpl<T, C, F, M>  extends java.lang.Object {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.impl.RegistryInfoImpl<any,any,any,any>>;
								public getClazz(): C;
								public getLocation(): com.sun.xml.bind.v2.runtime.Location;
								public getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
								public getReferences(): java.util.Set<com.sun.xml.bind.v2.model.core.TypeInfo<T,C>>;
								public getPackageName(): string;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module impl {
							export class RuntimeAnyTypeImpl extends com.sun.xml.bind.v2.model.impl.AnyTypeImpl<java.lang.reflect.Type,java.lang.Class<any>> implements com.sun.xml.bind.v2.model.runtime.RuntimeNonElement  {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.impl.RuntimeAnyTypeImpl>;
								public isSimpleType(): boolean;
								public getLocation(): com.sun.xml.bind.v2.runtime.Location;
								public getType(): any;
								public canBeReferencedByIDREF(): boolean;
								public getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
								public getTransducer(): com.sun.xml.bind.v2.runtime.Transducer<any>;
								public getTypeName(): javax.xml.namespace.QName;
								/** @deprecated */
								public canBeReferencedByIDREF(): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module impl {
							export class RuntimeArrayInfoImpl extends com.sun.xml.bind.v2.model.impl.ArrayInfoImpl<java.lang.reflect.Type,java.lang.Class<any>,java.lang.reflect.Field,java.lang.reflect.Method> implements com.sun.xml.bind.v2.model.runtime.RuntimeArrayInfo  {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.impl.RuntimeArrayInfoImpl>;
								public isSimpleType(): boolean;
								public toString(): string;
								public getLocation(): com.sun.xml.bind.v2.runtime.Location;
								public getType(): any;
								public getItemType(): com.sun.xml.bind.v2.model.core.NonElement<any,any>;
								public getType(): java.lang.Class<any>;
								public canBeReferencedByIDREF(): boolean;
								public getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
								public getTransducer(): com.sun.xml.bind.v2.runtime.Transducer<any>;
								public getTypeName(): javax.xml.namespace.QName;
								/** @deprecated */
								public canBeReferencedByIDREF(): boolean;
								public getItemType(): com.sun.xml.bind.v2.model.runtime.RuntimeNonElement;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module impl {
							export class RuntimeAttributePropertyInfoImpl extends com.sun.xml.bind.v2.model.impl.AttributePropertyInfoImpl<java.lang.reflect.Type,java.lang.Class<any>,java.lang.reflect.Field,java.lang.reflect.Method> implements com.sun.xml.bind.v2.model.runtime.RuntimeAttributePropertyInfo  {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.impl.RuntimeAttributePropertyInfoImpl>;
								public isRequired(): boolean;
								public getIndividualType(): java.lang.reflect.Type;
								public displayName(): string;
								public getExpectedMimeType(): javax.activation.MimeType;
								public getRawType(): any;
								public getTarget(): com.sun.xml.bind.v2.model.core.NonElement<any,any>;
								public readAnnotation(annotationType: java.lang.Class<any>): java.lang.annotation.Annotation;
								public getSchemaType(): javax.xml.namespace.QName;
								public ref(): java.util.List<any>;
								public getRawType(): java.lang.reflect.Type;
								public hasAnnotation(annotationType: java.lang.Class<any>): boolean;
								public getIndividualType(): any;
								public kind(): com.sun.xml.bind.v2.model.core.PropertyKind;
								public getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
								public parent(): com.sun.xml.bind.v2.model.core.TypeInfo<any,any>;
								public getAdapter(): com.sun.xml.bind.v2.model.core.Adapter<any,any>;
								public elementOnlyContent(): boolean;
								public getTarget(): com.sun.xml.bind.v2.model.runtime.RuntimeNonElement;
								public ref(): java.util.Collection<any>;
								public getAccessor(): com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>;
								public getSource(): com.sun.xml.bind.v2.model.core.PropertyInfo<any,any>;
								public getName(): string;
								public parent(): com.sun.xml.bind.v2.model.impl.ClassInfoImpl<any,any,any,any>;
								public id(): com.sun.xml.bind.v2.model.core.ID;
								public getSource(): com.sun.xml.bind.v2.model.runtime.RuntimePropertyInfo;
								public isCollection(): boolean;
								public getLocation(): com.sun.xml.bind.v2.runtime.Location;
								public getXmlName(): javax.xml.namespace.QName;
								public link(): void;
								public getTransducer(): com.sun.xml.bind.v2.runtime.Transducer<any>;
								public inlineBinaryData(): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module impl {
							export abstract class RuntimeBuiltinLeafInfoImpl<T>  extends com.sun.xml.bind.v2.model.impl.BuiltinLeafInfoImpl<java.lang.reflect.Type,java.lang.Class<any>> {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.impl.RuntimeBuiltinLeafInfoImpl<any>>;
								public static LEAVES: java.util.Map<java.lang.reflect.Type,com.sun.xml.bind.v2.model.impl.RuntimeBuiltinLeafInfoImpl<any>>;
								public static STRING: com.sun.xml.bind.v2.model.impl.RuntimeBuiltinLeafInfoImpl<string>;
								public static builtinBeanInfos: java.util.List<com.sun.xml.bind.v2.model.impl.RuntimeBuiltinLeafInfoImpl<any>>;
								public static MAP_ANYURI_TO_URI: string;
								public static USE_OLD_GMONTH_MAPPING: string;
								public getElementName(): javax.xml.namespace.QName;
								public isSimpleType(): boolean;
								public getTypeNames(): native.Array<javax.xml.namespace.QName>;
								public toString(): string;
								public getTypeName(instance: any): javax.xml.namespace.QName;
								public declareNamespace(o: any, w: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
								public isElement(): boolean;
								/** @deprecated */
								public asElement(): com.sun.xml.bind.v2.model.core.Element<any,any>;
								public print(object0: any): string;
								public getClazz(): java.lang.Class<any>;
								public getTypeName(): javax.xml.namespace.QName;
								/** @deprecated */
								public isElement(): boolean;
								/** @deprecated */
								public getElementName(): javax.xml.namespace.QName;
								public asElement(): com.sun.xml.bind.v2.model.core.Element<any,any>;
								public parse(charSequence0: string): any;
								public writeText(xMLSerializer0: com.sun.xml.bind.v2.runtime.XMLSerializer, object1: any, string2: string): void;
								public getLocation(): com.sun.xml.bind.v2.runtime.Location;
								public useNamespace(): boolean;
								public getType(): any;
								public canBeReferencedByIDREF(): boolean;
								public writeLeafElement(xMLSerializer0: com.sun.xml.bind.v2.runtime.XMLSerializer, name1: com.sun.xml.bind.v2.runtime.Name, object2: any, string3: string): void;
								public getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
								public getTransducer(): com.sun.xml.bind.v2.runtime.Transducer<any>;
								/** @deprecated */
								public canBeReferencedByIDREF(): boolean;
							}
							export module RuntimeBuiltinLeafInfoImpl {
								export abstract class PcdataImpl<T>  extends com.sun.xml.bind.v2.model.impl.RuntimeBuiltinLeafInfoImpl<any> {
									public static class: java.lang.Class<com.sun.xml.bind.v2.model.impl.RuntimeBuiltinLeafInfoImpl.PcdataImpl<any>>;
									public constructor(type: java.lang.Class<any>, typeNames: native.Array<javax.xml.namespace.QName>);
									public getTypeName(): javax.xml.namespace.QName;
									public declareNamespace(o: any, w: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
									public print(object0: any): string;
									public toString(): string;
									public print(object0: any): com.sun.xml.bind.v2.runtime.output.Pcdata;
									public constructor(type: any, typeNames: native.Array<javax.xml.namespace.QName>);
									public constructor(type: any, typeName: javax.xml.namespace.QName);
									public writeLeafElement(w: com.sun.xml.bind.v2.runtime.XMLSerializer, tagName: com.sun.xml.bind.v2.runtime.Name, o: any, fieldName: string): void;
									public writeText(w: com.sun.xml.bind.v2.runtime.XMLSerializer, o: any, fieldName: string): void;
									public useNamespace(): boolean;
									public parse(charSequence0: string): any;
									public getTypeName(instance: any): javax.xml.namespace.QName;
								}
								export abstract class StringImpl<T>  extends com.sun.xml.bind.v2.model.impl.RuntimeBuiltinLeafInfoImpl<any> {
									public static class: java.lang.Class<com.sun.xml.bind.v2.model.impl.RuntimeBuiltinLeafInfoImpl.StringImpl<any>>;
									public constructor(type: any, typeNames: native.Array<javax.xml.namespace.QName>);
									public constructor(type: java.lang.Class<any>, typeNames: native.Array<javax.xml.namespace.QName>);
									public getTypeName(): javax.xml.namespace.QName;
									public declareNamespace(o: any, w: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
									public print(object0: any): string;
									public constructor(type: any, typeName: javax.xml.namespace.QName);
									public writeLeafElement(w: com.sun.xml.bind.v2.runtime.XMLSerializer, tagName: com.sun.xml.bind.v2.runtime.Name, o: any, fieldName: string): void;
									public writeText(w: com.sun.xml.bind.v2.runtime.XMLSerializer, o: any, fieldName: string): void;
									public useNamespace(): boolean;
									public toString(): string;
									public parse(charSequence0: string): any;
									public getTypeName(instance: any): javax.xml.namespace.QName;
								}
								export class StringImplImpl extends com.sun.xml.bind.v2.model.impl.RuntimeBuiltinLeafInfoImpl.StringImpl<string> {
									public static class: java.lang.Class<com.sun.xml.bind.v2.model.impl.RuntimeBuiltinLeafInfoImpl.StringImplImpl>;
									public constructor(type: java.lang.Class<any>, typeNames: native.Array<javax.xml.namespace.QName>);
									public getTypeName(): javax.xml.namespace.QName;
									public declareNamespace(o: any, w: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
									public print(object0: any): string;
									public print(s: string): string;
									public parse(text: string): string;
									public toString(): string;
									public writeLeafElement(w: com.sun.xml.bind.v2.runtime.XMLSerializer, tagName: com.sun.xml.bind.v2.runtime.Name, o: string, fieldName: string): void;
									public writeText(w: com.sun.xml.bind.v2.runtime.XMLSerializer, o: string, fieldName: string): void;
									public constructor(type: any, typeNames: native.Array<javax.xml.namespace.QName>);
									public constructor(type: any, typeName: javax.xml.namespace.QName);
									public writeLeafElement(w: com.sun.xml.bind.v2.runtime.XMLSerializer, tagName: com.sun.xml.bind.v2.runtime.Name, o: any, fieldName: string): void;
									public writeText(w: com.sun.xml.bind.v2.runtime.XMLSerializer, o: any, fieldName: string): void;
									public useNamespace(): boolean;
									public parse(charSequence0: string): any;
									public getTypeName(instance: any): javax.xml.namespace.QName;
								}
								export class UUIDImpl extends com.sun.xml.bind.v2.model.impl.RuntimeBuiltinLeafInfoImpl.StringImpl<java.util.UUID> {
									public static class: java.lang.Class<com.sun.xml.bind.v2.model.impl.RuntimeBuiltinLeafInfoImpl.UUIDImpl>;
									public constructor(type: java.lang.Class<any>, typeNames: native.Array<javax.xml.namespace.QName>);
									public constructor();
									public getTypeName(): javax.xml.namespace.QName;
									public declareNamespace(o: any, w: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
									public print(v: java.util.UUID): string;
									public print(object0: any): string;
									public toString(): string;
									public constructor(type: any, typeNames: native.Array<javax.xml.namespace.QName>);
									public constructor(type: any, typeName: javax.xml.namespace.QName);
									public writeLeafElement(w: com.sun.xml.bind.v2.runtime.XMLSerializer, tagName: com.sun.xml.bind.v2.runtime.Name, o: any, fieldName: string): void;
									public useNamespace(): boolean;
									public writeText(w: com.sun.xml.bind.v2.runtime.XMLSerializer, o: any, fieldName: string): void;
									public parse(text: string): java.util.UUID;
									public parse(charSequence0: string): any;
									public getTypeName(instance: any): javax.xml.namespace.QName;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module impl {
							export class RuntimeClassInfoImpl extends com.sun.xml.bind.v2.model.impl.ClassInfoImpl<java.lang.reflect.Type,java.lang.Class<any>,java.lang.reflect.Field,java.lang.reflect.Method> {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.impl.RuntimeClassInfoImpl>;
								public getElementName(): javax.xml.namespace.QName;
								public createAttributeProperty(seed: com.sun.xml.bind.v2.model.impl.PropertySeed<any,any,any,any>): com.sun.xml.bind.v2.model.impl.AttributePropertyInfoImpl<any,any,any,any>;
								public createElementProperty(seed: com.sun.xml.bind.v2.model.impl.PropertySeed<java.lang.reflect.Type,java.lang.Class<any>,java.lang.reflect.Field,java.lang.reflect.Method>): com.sun.xml.bind.v2.model.impl.ElementPropertyInfoImpl<any,any,any,any>;
								public isAbstract(): boolean;
								public createFieldSeed(f: any): com.sun.xml.bind.v2.model.impl.PropertySeed<any,any,any,any>;
								public inheritsAttributeWildcard(): boolean;
								public getFactoryMethod(): java.lang.reflect.Method;
								public getBaseClass(): com.sun.xml.bind.v2.model.core.ClassInfo<any,any>;
								public createAccessorSeed(getter: any, setter: any): com.sun.xml.bind.v2.model.impl.PropertySeed<any,any,any,any>;
								public canBeReferencedByIDREF(): boolean;
								public hasProperties(): boolean;
								public constructor(modelBuilder: com.sun.xml.bind.v2.model.impl.RuntimeModelBuilder, upstream: com.sun.xml.bind.v2.model.annotation.Locatable, clazz: java.lang.Class<any>);
								public createMapProperty(seed: com.sun.xml.bind.v2.model.impl.PropertySeed<java.lang.reflect.Type,java.lang.Class<any>,java.lang.reflect.Field,java.lang.reflect.Method>): com.sun.xml.bind.v2.model.impl.MapPropertyInfoImpl<any,any,any,any>;
								public getClazz(): any;
								public createFieldSeed(field: java.lang.reflect.Field): com.sun.xml.bind.v2.model.impl.RuntimeClassInfoImpl.RuntimePropertySeed;
								public isElement(): boolean;
								public getLocatorField(): com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>;
								public getSubstitutionHead(): com.sun.xml.bind.v2.model.core.Element<any,any>;
								public getScope(): com.sun.xml.bind.v2.model.core.ClassInfo<any,any>;
								public createAccessorSeed(getter: java.lang.reflect.Method, setter: java.lang.reflect.Method): com.sun.xml.bind.v2.model.impl.RuntimeClassInfoImpl.RuntimePropertySeed;
								public createReferenceProperty(seed: com.sun.xml.bind.v2.model.impl.PropertySeed<any,any,any,any>): com.sun.xml.bind.v2.model.impl.ReferencePropertyInfoImpl<any,any,any,any>;
								public isFinal(): boolean;
								public createMapProperty(seed: com.sun.xml.bind.v2.model.impl.PropertySeed<any,any,any,any>): com.sun.xml.bind.v2.model.impl.MapPropertyInfoImpl<any,any,any,any>;
								public findXmlAccessorFactoryAnnotation(clazz: java.lang.Class<any>): com.sun.xml.bind.XmlAccessorFactory;
								public getLocation(): com.sun.xml.bind.v2.runtime.Location;
								public isOrdered(): boolean;
								public getBaseClass(): com.sun.xml.bind.v2.model.impl.RuntimeClassInfoImpl;
								public createValueProperty(seed: com.sun.xml.bind.v2.model.impl.PropertySeed<java.lang.reflect.Type,java.lang.Class<any>,java.lang.reflect.Field,java.lang.reflect.Method>): com.sun.xml.bind.v2.model.impl.ValuePropertyInfoImpl<any,any,any,any>;
								public constructor(builder: com.sun.xml.bind.v2.model.impl.ModelBuilder<any,any,any,any>, upstream: com.sun.xml.bind.v2.model.annotation.Locatable);
								public link(): void;
								public getProperty(name: string): com.sun.xml.bind.v2.model.runtime.RuntimePropertyInfo;
								public getBaseClass(): com.sun.xml.bind.v2.model.impl.ClassInfoImpl<any,any,any,any>;
								public isSimpleType(): boolean;
								public getTypeName(): javax.xml.namespace.QName;
								public asElement(): com.sun.xml.bind.v2.model.core.Element<any,any>;
								public hasValueProperty(): boolean;
								public hasSubClasses(): boolean;
								public getAttributeWildcard(): com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>;
								public getLocatorField(): com.sun.xml.bind.v2.runtime.reflect.Accessor<any,org.xml.sax.Locator>;
								public declaresAttributeWildcard(): boolean;
								/** @deprecated */
								public getScope(): com.sun.xml.bind.v2.model.impl.ClassInfoImpl<any,any,any,any>;
								public getBaseClass(): com.sun.xml.bind.v2.model.runtime.RuntimeClassInfo;
								public getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
								public createReferenceProperty(seed: com.sun.xml.bind.v2.model.impl.PropertySeed<java.lang.reflect.Type,java.lang.Class<any>,java.lang.reflect.Field,java.lang.reflect.Method>): com.sun.xml.bind.v2.model.impl.ReferencePropertyInfoImpl<any,any,any,any>;
								public checkFieldXmlLocation(f: any): void;
								public getName(): string;
								public createElementProperty(seed: com.sun.xml.bind.v2.model.impl.PropertySeed<any,any,any,any>): com.sun.xml.bind.v2.model.impl.ElementPropertyInfoImpl<any,any,any,any>;
								public checkFieldXmlLocation(f: java.lang.reflect.Field): void;
								public createAttributeProperty(seed: com.sun.xml.bind.v2.model.impl.PropertySeed<java.lang.reflect.Type,java.lang.Class<any>,java.lang.reflect.Field,java.lang.reflect.Method>): com.sun.xml.bind.v2.model.impl.AttributePropertyInfoImpl<any,any,any,any>;
								public getProperties(): java.util.List<any>;
								public getType(): any;
								public createAccessorFactory(clazz: java.lang.Class<any>): com.sun.xml.bind.AccessorFactory;
								public createValueProperty(seed: com.sun.xml.bind.v2.model.impl.PropertySeed<any,any,any,any>): com.sun.xml.bind.v2.model.impl.ValuePropertyInfoImpl<any,any,any,any>;
								public getTransducer(): com.sun.xml.bind.v2.runtime.Transducer<any>;
								public getProperty(name: string): com.sun.xml.bind.v2.model.core.PropertyInfo<any,any>;
								public hasAttributeWildcard(): boolean;
							}
							export module RuntimeClassInfoImpl {
								export class RuntimePropertySeed extends com.sun.xml.bind.v2.model.impl.PropertySeed<java.lang.reflect.Type,java.lang.Class<any>,java.lang.reflect.Field,java.lang.reflect.Method> {
									public static class: java.lang.Class<com.sun.xml.bind.v2.model.impl.RuntimeClassInfoImpl.RuntimePropertySeed>;
									public hasAnnotation(annotationType: java.lang.Class<any>): boolean;
									public getRawType(): java.lang.reflect.Type;
									public getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
									public readAnnotation(annotationType: java.lang.Class<any>): java.lang.annotation.Annotation;
									public getName(): string;
									public getAccessor(): com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>;
									public constructor(core: com.sun.xml.bind.v2.model.impl.PropertySeed<java.lang.reflect.Type,java.lang.Class<any>,java.lang.reflect.Field,java.lang.reflect.Method>, acc: com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>);
									public getLocation(): com.sun.xml.bind.v2.runtime.Location;
									public getRawType(): any;
								}
								export class TransducerImpl<BeanT>  extends com.sun.xml.bind.v2.runtime.Transducer<any> {
									public static class: java.lang.Class<com.sun.xml.bind.v2.model.impl.RuntimeClassInfoImpl.TransducerImpl<any>>;
									public print(o: any): string;
									public parse(lexical: string): any;
									public writeLeafElement(w: com.sun.xml.bind.v2.runtime.XMLSerializer, tagName: com.sun.xml.bind.v2.runtime.Name, o: any, fieldName: string): void;
									public useNamespace(): boolean;
									public writeText(w: com.sun.xml.bind.v2.runtime.XMLSerializer, o: any, fieldName: string): void;
									public constructor(ownerClass: java.lang.Class<any>, xacc: com.sun.xml.bind.v2.runtime.reflect.TransducedAccessor<any>);
									public declareNamespace(bean: any, w: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
									public getTypeName(instance: any): javax.xml.namespace.QName;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module impl {
							export class RuntimeElementInfoImpl extends com.sun.xml.bind.v2.model.impl.ElementInfoImpl<java.lang.reflect.Type,java.lang.Class<any>,java.lang.reflect.Field,java.lang.reflect.Method> implements com.sun.xml.bind.v2.model.runtime.RuntimeElementInfo  {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.impl.RuntimeElementInfoImpl>;
								public getElementName(): javax.xml.namespace.QName;
								public createPropertyImpl(): com.sun.xml.bind.v2.model.impl.ElementInfoImpl.PropertyImpl;
								public getType(): java.lang.Class<any>;
								public getProperty(): com.sun.xml.bind.v2.model.core.ElementPropertyInfo<any,any>;
								public getScope(): com.sun.xml.bind.v2.model.core.ClassInfo<any,any>;
								public getContentType(): com.sun.xml.bind.v2.model.core.NonElement<any,any>;
								public getSubstitutionHead(): com.sun.xml.bind.v2.model.core.Element<any,any>;
								public getProperty(): com.sun.xml.bind.v2.model.runtime.RuntimeElementPropertyInfo;
								public getScope(): com.sun.xml.bind.v2.model.runtime.RuntimeClassInfo;
								public getSubstitutionHead(): com.sun.xml.bind.v2.model.core.ElementInfo<any,any>;
								public getLocation(): com.sun.xml.bind.v2.runtime.Location;
								public constructor(modelBuilder: com.sun.xml.bind.v2.model.impl.RuntimeModelBuilder, registry: com.sun.xml.bind.v2.model.impl.RegistryInfoImpl<any,any,any,any>, method: java.lang.reflect.Method);
								public getType(): any;
								public getContentType(): com.sun.xml.bind.v2.model.runtime.RuntimeNonElement;
								public getContentInMemoryType(): any;
								public canBeReferencedByIDREF(): boolean;
								public constructor(builder: com.sun.xml.bind.v2.model.impl.ModelBuilder<any,any,any,any>, registry: com.sun.xml.bind.v2.model.impl.RegistryInfoImpl<any,any,any,any>, m: any);
								public getSubstitutionMembers(): java.util.Collection<any>;
								public constructor(builder: com.sun.xml.bind.v2.model.impl.ModelBuilder<any,any,any,any>, upstream: com.sun.xml.bind.v2.model.annotation.Locatable);
								public getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
								/** @deprecated */
								public canBeReferencedByIDREF(): boolean;
							}
							export module RuntimeElementInfoImpl {
								export class RuntimePropertyImpl extends com.sun.xml.bind.v2.model.impl.ElementInfoImpl.PropertyImpl {
									public static class: java.lang.Class<com.sun.xml.bind.v2.model.impl.RuntimeElementInfoImpl.RuntimePropertyImpl>;
									public getRawType(): java.lang.reflect.Type;
									public isValueList(): boolean;
									public isCollection(): boolean;
									public isNillable(): boolean;
									public id(): com.sun.xml.bind.v2.model.core.ID;
									public displayName(): string;
									public elementOnlyContent(): boolean;
									public getSource(): com.sun.xml.bind.v2.model.runtime.RuntimePropertyInfo;
									public hasAnnotation(annotationType: java.lang.Class<any>): boolean;
									public ref(): java.util.Collection<any>;
									public getDefaultValue(): string;
									public inlineBinaryData(): boolean;
									public readAnnotation(annotationType: java.lang.Class<any>): java.lang.annotation.Annotation;
									public isCollectionRequired(): boolean;
									public getSource(): com.sun.xml.bind.v2.model.core.PropertyInfo<any,any>;
									public parent(): com.sun.xml.bind.v2.model.impl.ElementInfoImpl<any,any,any,any>;
									public getTarget(): com.sun.xml.bind.v2.model.runtime.RuntimeNonElement;
									public getName(): string;
									public kind(): com.sun.xml.bind.v2.model.core.PropertyKind;
									public getTagName(): javax.xml.namespace.QName;
									public ref(): java.util.List<any>;
									public parent(): com.sun.xml.bind.v2.model.core.TypeInfo<any,any>;
									public getIndividualType(): java.lang.reflect.Type;
									public isRequired(): boolean;
									public isCollectionNillable(): boolean;
									public getTransducer(): com.sun.xml.bind.v2.runtime.Transducer<any>;
									public getExpectedMimeType(): javax.activation.MimeType;
									public getTarget(): com.sun.xml.bind.v2.model.core.NonElement<any,any>;
									public getXmlName(): javax.xml.namespace.QName;
									public getAccessor(): com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>;
									public getAdapter(): com.sun.xml.bind.v2.model.core.Adapter<any,any>;
									public getSchemaType(): javax.xml.namespace.QName;
									public getTypes(): java.util.List<any>;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module impl {
							export class RuntimeElementPropertyInfoImpl extends com.sun.xml.bind.v2.model.impl.ElementPropertyInfoImpl<java.lang.reflect.Type,java.lang.Class<any>,java.lang.reflect.Field,java.lang.reflect.Method> implements com.sun.xml.bind.v2.model.runtime.RuntimeElementPropertyInfo  {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.impl.RuntimeElementPropertyInfoImpl>;
								public isValueList(): boolean;
								public isRequired(): boolean;
								public getIndividualType(): java.lang.reflect.Type;
								public displayName(): string;
								public getExpectedMimeType(): javax.activation.MimeType;
								public getRawType(): any;
								public isCollectionRequired(): boolean;
								public getTypes(): java.util.List<com.sun.xml.bind.v2.model.impl.RuntimeTypeRefImpl>;
								public readAnnotation(annotationType: java.lang.Class<any>): java.lang.annotation.Annotation;
								public getSchemaType(): javax.xml.namespace.QName;
								public ref(): java.util.List<any>;
								public getRawType(): java.lang.reflect.Type;
								public hasAnnotation(annotationType: java.lang.Class<any>): boolean;
								public getIndividualType(): any;
								public kind(): com.sun.xml.bind.v2.model.core.PropertyKind;
								public getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
								public parent(): com.sun.xml.bind.v2.model.core.TypeInfo<any,any>;
								public getAdapter(): com.sun.xml.bind.v2.model.core.Adapter<any,any>;
								public getAccessor(): com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>;
								public elementOnlyContent(): boolean;
								public ref(): java.util.Collection<any>;
								public getName(): string;
								public createTypeRef(name: javax.xml.namespace.QName, type: any, isNillable: boolean, defaultValue: string): com.sun.xml.bind.v2.model.impl.TypeRefImpl<any,any>;
								public parent(): com.sun.xml.bind.v2.model.impl.ClassInfoImpl<any,any,any,any>;
								public id(): com.sun.xml.bind.v2.model.core.ID;
								public getTypes(): java.util.List<any>;
								public isCollection(): boolean;
								public getLocation(): com.sun.xml.bind.v2.runtime.Location;
								public getXmlName(): javax.xml.namespace.QName;
								public createTypeRef(name: javax.xml.namespace.QName, type: java.lang.reflect.Type, isNillable: boolean, defaultValue: string): com.sun.xml.bind.v2.model.impl.RuntimeTypeRefImpl;
								public isCollectionNillable(): boolean;
								public inlineBinaryData(): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module impl {
							export class RuntimeEnumConstantImpl extends com.sun.xml.bind.v2.model.impl.EnumConstantImpl<java.lang.reflect.Type,java.lang.Class<any>,java.lang.reflect.Field,java.lang.reflect.Method> {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.impl.RuntimeEnumConstantImpl>;
								public constructor(owner: com.sun.xml.bind.v2.model.impl.RuntimeEnumLeafInfoImpl<any,any>, name: string, lexical: string, next: com.sun.xml.bind.v2.model.impl.EnumConstantImpl<java.lang.reflect.Type,java.lang.Class<any>,java.lang.reflect.Field,java.lang.reflect.Method>);
								public getName(): string;
								public getEnclosingClass(): com.sun.xml.bind.v2.model.core.EnumLeafInfo<any,any>;
								public getLexicalValue(): string;
								public constructor(owner: com.sun.xml.bind.v2.model.impl.EnumLeafInfoImpl<any,any,any,any>, name: string, lexical: string, next: com.sun.xml.bind.v2.model.impl.EnumConstantImpl<any,any,any,any>);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module impl {
							export class RuntimeEnumLeafInfoImpl<T, B>  extends com.sun.xml.bind.v2.model.impl.EnumLeafInfoImpl<java.lang.reflect.Type,java.lang.Class<any>,java.lang.reflect.Field,java.lang.reflect.Method> {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.impl.RuntimeEnumLeafInfoImpl<any,any>>;
								public getElementName(): javax.xml.namespace.QName;
								public isSimpleType(): boolean;
								public getTypeName(instance: any): javax.xml.namespace.QName;
								public getTypeName(object0: any): javax.xml.namespace.QName;
								public writeLeafElement(w: com.sun.xml.bind.v2.runtime.XMLSerializer, tagName: com.sun.xml.bind.v2.runtime.Name, o: any, fieldName: string): void;
								public getClazz(): java.lang.Class<any>;
								public getTypeName(): javax.xml.namespace.QName;
								public asElement(): com.sun.xml.bind.v2.model.core.Element<any,any>;
								/** @deprecated */
								public getSubstitutionHead(): com.sun.xml.bind.v2.model.core.Element<any,any>;
								public writeText(w: com.sun.xml.bind.v2.runtime.XMLSerializer, t: any, fieldName: string): void;
								public parse(lexical: string): any;
								public parse(charSequence0: string): any;
								public canBeReferencedByIDREF(): boolean;
								public spliterator(): java.util.Spliterator<any>;
								public writeLeafElement(xMLSerializer0: com.sun.xml.bind.v2.runtime.XMLSerializer, name1: com.sun.xml.bind.v2.runtime.Name, object2: any, string3: string): void;
								public getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
								/** @deprecated */
								public canBeReferencedByIDREF(): boolean;
								public forEach(action: any /* any*/): void;
								public createEnumConstant(name: string, literal: string, constant: java.lang.reflect.Field, last: com.sun.xml.bind.v2.model.impl.EnumConstantImpl<java.lang.reflect.Type,java.lang.Class<any>,java.lang.reflect.Field,java.lang.reflect.Method>): com.sun.xml.bind.v2.model.impl.RuntimeEnumConstantImpl;
								public getClazz(): any;
								public getTypeNames(): native.Array<javax.xml.namespace.QName>;
								public getTransducer(): com.sun.xml.bind.v2.runtime.Transducer<any>;
								public isElement(): boolean;
								/** @deprecated */
								public getScope(): com.sun.xml.bind.v2.model.core.ClassInfo<any,any>;
								public print(object0: any): string;
								public declareNamespace(t: any, w: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
								public getSubstitutionHead(): com.sun.xml.bind.v2.model.core.Element<any,any>;
								public getScope(): com.sun.xml.bind.v2.model.core.ClassInfo<any,any>;
								public getBaseType(): com.sun.xml.bind.v2.model.core.NonElement<any,any>;
								public writeText(xMLSerializer0: com.sun.xml.bind.v2.runtime.XMLSerializer, object1: any, string2: string): void;
								public getLocation(): com.sun.xml.bind.v2.runtime.Location;
								public useNamespace(): boolean;
								public print(t: any): string;
								public getType(): any;
								public iterator(): java.util.Iterator<com.sun.xml.bind.v2.model.impl.EnumConstantImpl<any,any,any,any>>;
								public iterator(): java.util.Iterator<any>;
								public getConstants(): java.lang.Iterable<any>;
								public createEnumConstant(name: string, literal: string, constant: any, last: com.sun.xml.bind.v2.model.impl.EnumConstantImpl<any,any,any,any>): com.sun.xml.bind.v2.model.impl.EnumConstantImpl<any,any,any,any>;
								public getTransducer(): com.sun.xml.bind.v2.runtime.Transducer<any>;
								public declareNamespace(object0: any, xMLSerializer1: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module impl {
							export class RuntimeMapPropertyInfoImpl extends com.sun.xml.bind.v2.model.impl.MapPropertyInfoImpl<java.lang.reflect.Type,java.lang.Class<any>,java.lang.reflect.Field,java.lang.reflect.Method> implements com.sun.xml.bind.v2.model.runtime.RuntimeMapPropertyInfo  {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.impl.RuntimeMapPropertyInfoImpl>;
								public getIndividualType(): java.lang.reflect.Type;
								public displayName(): string;
								public getExpectedMimeType(): javax.activation.MimeType;
								public getRawType(): any;
								public getValueType(): com.sun.xml.bind.v2.model.runtime.RuntimeNonElement;
								public getValueType(): com.sun.xml.bind.v2.model.core.NonElement<any,any>;
								public readAnnotation(annotationType: java.lang.Class<any>): java.lang.annotation.Annotation;
								public getSchemaType(): javax.xml.namespace.QName;
								public ref(): java.util.List<any>;
								public getRawType(): java.lang.reflect.Type;
								public hasAnnotation(annotationType: java.lang.Class<any>): boolean;
								public getIndividualType(): any;
								public kind(): com.sun.xml.bind.v2.model.core.PropertyKind;
								public getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
								public parent(): com.sun.xml.bind.v2.model.core.TypeInfo<any,any>;
								public getAdapter(): com.sun.xml.bind.v2.model.core.Adapter<any,any>;
								public getAccessor(): com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>;
								public elementOnlyContent(): boolean;
								public getKeyType(): com.sun.xml.bind.v2.model.runtime.RuntimeNonElement;
								public ref(): java.util.Collection<any>;
								public getName(): string;
								public parent(): com.sun.xml.bind.v2.model.impl.ClassInfoImpl<any,any,any,any>;
								public id(): com.sun.xml.bind.v2.model.core.ID;
								public isCollection(): boolean;
								public getKeyType(): com.sun.xml.bind.v2.model.core.NonElement<any,any>;
								public getLocation(): com.sun.xml.bind.v2.runtime.Location;
								public getXmlName(): javax.xml.namespace.QName;
								public isCollectionNillable(): boolean;
								public inlineBinaryData(): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module impl {
							export class RuntimeModelBuilder extends com.sun.xml.bind.v2.model.impl.ModelBuilder<java.lang.reflect.Type,java.lang.Class<any>,java.lang.reflect.Field,java.lang.reflect.Method> {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.impl.RuntimeModelBuilder>;
								public context: com.sun.xml.bind.v2.runtime.JAXBContextImpl;
								public createEnumLeafInfo(clazz: any, upstream: com.sun.xml.bind.v2.model.annotation.Locatable): com.sun.xml.bind.v2.model.impl.EnumLeafInfoImpl<any,any,any,any>;
								public getClassInfo(clazz: any, searchForSuperClass: boolean, upstream: com.sun.xml.bind.v2.model.annotation.Locatable): com.sun.xml.bind.v2.model.core.NonElement<any,any>;
								public createArrayInfo(upstream: com.sun.xml.bind.v2.model.annotation.Locatable, arrayType: any): com.sun.xml.bind.v2.model.impl.ArrayInfoImpl<any,any,any,any>;
								public createEnumLeafInfo(clazz: java.lang.Class<any>, upstream: com.sun.xml.bind.v2.model.annotation.Locatable): com.sun.xml.bind.v2.model.impl.RuntimeEnumLeafInfoImpl<any,any>;
								public link(): com.sun.xml.bind.v2.model.core.TypeInfoSet<any,any,any,any>;
								public getReader(): com.sun.xml.bind.v2.model.annotation.AnnotationReader<any,any,any,any>;
								public createElementInfo(registryInfo: com.sun.xml.bind.v2.model.impl.RegistryInfoImpl<java.lang.reflect.Type,java.lang.Class<any>,java.lang.reflect.Field,java.lang.reflect.Method>, method: java.lang.reflect.Method): com.sun.xml.bind.v2.model.impl.RuntimeElementInfoImpl;
								public getClassInfo(clazz: any, upstream: com.sun.xml.bind.v2.model.annotation.Locatable): com.sun.xml.bind.v2.model.core.NonElement<any,any>;
								public getNavigator(): com.sun.xml.bind.v2.model.nav.Navigator<any,any,any,any>;
								public static createTransducer(ref: com.sun.xml.bind.v2.model.runtime.RuntimeNonElementRef): com.sun.xml.bind.v2.runtime.Transducer<any>;
								public constructor(context: com.sun.xml.bind.v2.runtime.JAXBContextImpl, annotationReader: com.sun.xml.bind.v2.model.annotation.RuntimeAnnotationReader, subclassReplacements: java.util.Map<java.lang.Class<any>,java.lang.Class<any>>, defaultNamespaceRemap: string);
								public createArrayInfo(upstream: com.sun.xml.bind.v2.model.annotation.Locatable, arrayType: java.lang.reflect.Type): com.sun.xml.bind.v2.model.impl.RuntimeArrayInfoImpl;
								public getClassInfo(clazz: java.lang.Class<any>, searchForSuperClass: boolean, upstream: com.sun.xml.bind.v2.model.annotation.Locatable): com.sun.xml.bind.v2.model.runtime.RuntimeNonElement;
								public getClassInfo(clazz: java.lang.Class<any>, upstream: com.sun.xml.bind.v2.model.annotation.Locatable): com.sun.xml.bind.v2.model.runtime.RuntimeNonElement;
								public createElementInfo(registryInfo: com.sun.xml.bind.v2.model.impl.RegistryInfoImpl<any,any,any,any>, m: any): com.sun.xml.bind.v2.model.impl.ElementInfoImpl<any,any,any,any>;
								public createClassInfo(clazz: any, upstream: com.sun.xml.bind.v2.model.annotation.Locatable): com.sun.xml.bind.v2.model.impl.ClassInfoImpl<any,any,any,any>;
								public createTypeInfoSet(): com.sun.xml.bind.v2.model.impl.TypeInfoSetImpl<any,any,any,any>;
								public link(): com.sun.xml.bind.v2.model.runtime.RuntimeTypeInfoSet;
								public constructor(reader: com.sun.xml.bind.v2.model.annotation.AnnotationReader<any,any,any,any>, navigator: com.sun.xml.bind.v2.model.nav.Navigator<any,any,any,any>, subclassReplacements: java.util.Map<any,any>, defaultNamespaceRemap: string);
								public createTypeInfoSet(): com.sun.xml.bind.v2.model.impl.RuntimeTypeInfoSetImpl;
								public createClassInfo(clazz: java.lang.Class<any>, upstream: com.sun.xml.bind.v2.model.annotation.Locatable): com.sun.xml.bind.v2.model.impl.RuntimeClassInfoImpl;
							}
							export module RuntimeModelBuilder {
								export class IDTransducerImpl<ValueT>  extends com.sun.xml.bind.v2.runtime.FilterTransducer<any> {
									public static class: java.lang.Class<com.sun.xml.bind.v2.model.impl.RuntimeModelBuilder.IDTransducerImpl<any>>;
									public declareNamespace(o: any, w: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
									public print(o: any): string;
									public constructor(core: com.sun.xml.bind.v2.runtime.Transducer<any>);
									public parse(lexical: string): any;
									public writeLeafElement(w: com.sun.xml.bind.v2.runtime.XMLSerializer, tagName: com.sun.xml.bind.v2.runtime.Name, o: any, fieldName: string): void;
									public useNamespace(): boolean;
									public writeText(w: com.sun.xml.bind.v2.runtime.XMLSerializer, o: any, fieldName: string): void;
									public getTypeName(instance: any): javax.xml.namespace.QName;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module impl {
							export class RuntimeReferencePropertyInfoImpl extends com.sun.xml.bind.v2.model.impl.ReferencePropertyInfoImpl<java.lang.reflect.Type,java.lang.Class<any>,java.lang.reflect.Field,java.lang.reflect.Method> implements com.sun.xml.bind.v2.model.runtime.RuntimeReferencePropertyInfo  {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.impl.RuntimeReferencePropertyInfoImpl>;
								public isRequired(): boolean;
								public getIndividualType(): java.lang.reflect.Type;
								public displayName(): string;
								public getExpectedMimeType(): javax.activation.MimeType;
								public getRawType(): any;
								public isCollectionRequired(): boolean;
								public readAnnotation(annotationType: java.lang.Class<any>): java.lang.annotation.Annotation;
								public ref(): java.util.Set<any>;
								public getSchemaType(): javax.xml.namespace.QName;
								public constructor(classInfo: com.sun.xml.bind.v2.model.impl.RuntimeClassInfoImpl, seed: com.sun.xml.bind.v2.model.impl.PropertySeed<java.lang.reflect.Type,java.lang.Class<any>,java.lang.reflect.Field,java.lang.reflect.Method>);
								public getWildcard(): com.sun.xml.bind.v2.model.core.WildcardMode;
								public getRawType(): java.lang.reflect.Type;
								public hasAnnotation(annotationType: java.lang.Class<any>): boolean;
								public getIndividualType(): any;
								public kind(): com.sun.xml.bind.v2.model.core.PropertyKind;
								public getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
								public parent(): com.sun.xml.bind.v2.model.core.TypeInfo<any,any>;
								public getAdapter(): com.sun.xml.bind.v2.model.core.Adapter<any,any>;
								public getAccessor(): com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>;
								public elementOnlyContent(): boolean;
								public ref(): java.util.Collection<any>;
								public isMixed(): boolean;
								public getName(): string;
								public parent(): com.sun.xml.bind.v2.model.impl.ClassInfoImpl<any,any,any,any>;
								public id(): com.sun.xml.bind.v2.model.core.ID;
								public isCollection(): boolean;
								public getElements(): java.util.Set<any>;
								public getLocation(): com.sun.xml.bind.v2.runtime.Location;
								public addType(info: com.sun.xml.bind.v2.model.impl.PropertyInfoImpl<any,any,any,any>): void;
								public getXmlName(): javax.xml.namespace.QName;
								public getDOMHandler(): any;
								public constructor(classInfo: com.sun.xml.bind.v2.model.impl.ClassInfoImpl<any,any,any,any>, seed: com.sun.xml.bind.v2.model.impl.PropertySeed<any,any,any,any>);
								public isCollectionNillable(): boolean;
								public inlineBinaryData(): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module impl {
							export class RuntimeTypeInfoSetImpl extends com.sun.xml.bind.v2.model.impl.TypeInfoSetImpl<java.lang.reflect.Type,java.lang.Class<any>,java.lang.reflect.Field,java.lang.reflect.Method> implements com.sun.xml.bind.v2.model.runtime.RuntimeTypeInfoSet  {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.impl.RuntimeTypeInfoSetImpl>;
								public constructor(nav: com.sun.xml.bind.v2.model.nav.Navigator<any,any,any,any>, reader: com.sun.xml.bind.v2.model.annotation.AnnotationReader<any,any,any,any>, leaves: java.util.Map<any,any>);
								public builtins(): java.util.Map<any,any>;
								public createAnyType(): com.sun.xml.bind.v2.model.core.NonElement<any,any>;
								public beans(): java.util.Map<java.lang.Class<any>,com.sun.xml.bind.v2.model.impl.RuntimeClassInfoImpl>;
								public getTypeInfo(ref: com.sun.xml.bind.v2.model.core.Ref<any,any>): com.sun.xml.bind.v2.model.core.NonElement<any,any>;
								public enums(): java.util.Map<java.lang.Class<any>,com.sun.xml.bind.v2.model.impl.RuntimeEnumLeafInfoImpl<any,any>>;
								public getElementFormDefault(nsUri: string): javax.xml.bind.annotation.XmlNsForm;
								public builtins(): java.util.Map<java.lang.reflect.Type,any>;
								public beans(): java.util.Map<any,any>;
								public enums(): java.util.Map<java.lang.Class<any>,any>;
								public arrays(): java.util.Map<java.lang.Class<any>,com.sun.xml.bind.v2.model.impl.RuntimeArrayInfoImpl>;
								public getClassInfo(clazz: java.lang.Class<any>): com.sun.xml.bind.v2.model.runtime.RuntimeNonElement;
								public getElementInfo(class0: java.lang.Class<any>, qName1: javax.xml.namespace.QName): com.sun.xml.bind.v2.model.runtime.RuntimeElementInfo;
								public arrays(): java.util.Map<any,any>;
								public getElementInfo(scope: java.lang.Class<any>, name: javax.xml.namespace.QName): com.sun.xml.bind.v2.model.impl.RuntimeElementInfoImpl;
								public getAnyTypeInfo(): com.sun.xml.bind.v2.model.runtime.RuntimeNonElement;
								public getElementInfo(object0: any, qName1: javax.xml.namespace.QName): com.sun.xml.bind.v2.model.core.ElementInfo<any,any>;
								public getClassInfo(type: any): com.sun.xml.bind.v2.model.core.NonElement<any,any>;
								public createAnyType(): com.sun.xml.bind.v2.model.runtime.RuntimeNonElement;
								public getTypeInfo(type: java.lang.reflect.Type): com.sun.xml.bind.v2.model.runtime.RuntimeNonElement;
								public getAllElements(): java.lang.Iterable<any>;
								public getAttributeFormDefault(nsUri: string): javax.xml.bind.annotation.XmlNsForm;
								public getElementMappings(scope: java.lang.Class<any>): java.util.Map<javax.xml.namespace.QName,com.sun.xml.bind.v2.model.impl.RuntimeElementInfoImpl>;
								public builtins(): java.util.Map<java.lang.reflect.Type,com.sun.xml.bind.v2.model.impl.RuntimeBuiltinLeafInfoImpl<any>>;
								public arrays(): java.util.Map<java.lang.Class<any>,any>;
								public getElementMappings(scope: any): java.util.Map<javax.xml.namespace.QName,any>;
								public getXmlNs(namespaceUri: string): java.util.Map<string,string>;
								public getSchemaLocations(): java.util.Map<string,string>;
								public getTypeInfo(type: any): com.sun.xml.bind.v2.model.core.NonElement<any,any>;
								public dump(out: javax.xml.transform.Result): void;
								public getElementInfo(scope: any, name: javax.xml.namespace.QName): com.sun.xml.bind.v2.model.impl.ElementInfoImpl<any,any,any,any>;
								public getAllElements(): java.lang.Iterable<com.sun.xml.bind.v2.model.impl.RuntimeElementInfoImpl>;
								public getNavigator(): com.sun.xml.bind.v2.model.nav.Navigator<any,any,any,any>;
								public enums(): java.util.Map<any,any>;
								public getElementMappings(scope: java.lang.Class<any>): java.util.Map<javax.xml.namespace.QName,any>;
								public beans(): java.util.Map<java.lang.Class<any>,any>;
								public getAnyTypeInfo(): com.sun.xml.bind.v2.model.core.NonElement<any,any>;
								public constructor(reader: com.sun.xml.bind.v2.model.annotation.AnnotationReader<java.lang.reflect.Type,java.lang.Class<any>,java.lang.reflect.Field,java.lang.reflect.Method>);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module impl {
							export class RuntimeTypeRefImpl extends com.sun.xml.bind.v2.model.impl.TypeRefImpl<java.lang.reflect.Type,java.lang.Class<any>> implements com.sun.xml.bind.v2.model.runtime.RuntimeTypeRef  {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.impl.RuntimeTypeRefImpl>;
								public getTarget(): com.sun.xml.bind.v2.model.core.NonElement<any,any>;
								public getTarget(): com.sun.xml.bind.v2.model.runtime.RuntimeNonElement;
								public constructor(elementPropertyInfo: com.sun.xml.bind.v2.model.impl.RuntimeElementPropertyInfoImpl, elementName: javax.xml.namespace.QName, type: java.lang.reflect.Type, isNillable: boolean, defaultValue: string);
								public getSource(): com.sun.xml.bind.v2.model.core.PropertyInfo<any,any>;
								public constructor(owner: com.sun.xml.bind.v2.model.impl.ElementPropertyInfoImpl<any,any,any,any>, elementName: javax.xml.namespace.QName, type: any, isNillable: boolean, defaultValue: string);
								public isNillable(): boolean;
								public getSource(): com.sun.xml.bind.v2.model.runtime.RuntimePropertyInfo;
								public getDefaultValue(): string;
								public getTransducer(): com.sun.xml.bind.v2.runtime.Transducer<any>;
								public getTagName(): javax.xml.namespace.QName;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module impl {
							export class RuntimeValuePropertyInfoImpl extends com.sun.xml.bind.v2.model.impl.ValuePropertyInfoImpl<java.lang.reflect.Type,java.lang.Class<any>,java.lang.reflect.Field,java.lang.reflect.Method> implements com.sun.xml.bind.v2.model.runtime.RuntimeValuePropertyInfo  {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.impl.RuntimeValuePropertyInfoImpl>;
								public getIndividualType(): java.lang.reflect.Type;
								public displayName(): string;
								public getExpectedMimeType(): javax.activation.MimeType;
								public getRawType(): any;
								public getTarget(): com.sun.xml.bind.v2.model.core.NonElement<any,any>;
								public readAnnotation(annotationType: java.lang.Class<any>): java.lang.annotation.Annotation;
								public getSchemaType(): javax.xml.namespace.QName;
								public ref(): java.util.List<any>;
								public getRawType(): java.lang.reflect.Type;
								public hasAnnotation(annotationType: java.lang.Class<any>): boolean;
								public getIndividualType(): any;
								public kind(): com.sun.xml.bind.v2.model.core.PropertyKind;
								public getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
								public parent(): com.sun.xml.bind.v2.model.core.TypeInfo<any,any>;
								public getAdapter(): com.sun.xml.bind.v2.model.core.Adapter<any,any>;
								public elementOnlyContent(): boolean;
								public getTarget(): com.sun.xml.bind.v2.model.runtime.RuntimeNonElement;
								public ref(): java.util.Collection<any>;
								public getAccessor(): com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>;
								public getSource(): com.sun.xml.bind.v2.model.core.PropertyInfo<any,any>;
								public getName(): string;
								public parent(): com.sun.xml.bind.v2.model.impl.ClassInfoImpl<any,any,any,any>;
								public id(): com.sun.xml.bind.v2.model.core.ID;
								public getSource(): com.sun.xml.bind.v2.model.runtime.RuntimePropertyInfo;
								public isCollection(): boolean;
								public getLocation(): com.sun.xml.bind.v2.runtime.Location;
								public link(): void;
								public getTransducer(): com.sun.xml.bind.v2.runtime.Transducer<any>;
								public inlineBinaryData(): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module impl {
							export class SecureLoader extends java.lang.Object {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.impl.SecureLoader>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module impl {
							export abstract class SingleTypePropertyInfoImpl<T, C, F, M>  extends com.sun.xml.bind.v2.model.impl.PropertyInfoImpl<any,any,any,any> {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.impl.SingleTypePropertyInfoImpl<any,any,any,any>>;
								public getAccessor(): com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>;
								public ref(): java.util.Collection<any>;
								public getSource(): com.sun.xml.bind.v2.model.core.PropertyInfo<any,any>;
								public getName(): string;
								public displayName(): string;
								public getExpectedMimeType(): javax.activation.MimeType;
								public parent(): com.sun.xml.bind.v2.model.impl.ClassInfoImpl<any,any,any,any>;
								public id(): com.sun.xml.bind.v2.model.core.ID;
								public getTarget(): com.sun.xml.bind.v2.model.core.NonElement<any,any>;
								public isCollection(): boolean;
								public getLocation(): com.sun.xml.bind.v2.runtime.Location;
								public getSchemaType(): javax.xml.namespace.QName;
								public ref(): java.util.List<any>;
								public constructor(parent: com.sun.xml.bind.v2.model.impl.ClassInfoImpl<any,any,any,any>, spi: com.sun.xml.bind.v2.model.impl.PropertySeed<any,any,any,any>);
								public kind(): com.sun.xml.bind.v2.model.core.PropertyKind;
								public getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
								public parent(): com.sun.xml.bind.v2.model.core.TypeInfo<any,any>;
								public constructor(classInfo: com.sun.xml.bind.v2.model.impl.ClassInfoImpl<any,any,any,any>, seed: com.sun.xml.bind.v2.model.impl.PropertySeed<any,any,any,any>);
								public link(): void;
								public getTransducer(): com.sun.xml.bind.v2.runtime.Transducer<any>;
								public getAdapter(): com.sun.xml.bind.v2.model.core.Adapter<any,any>;
								public inlineBinaryData(): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module impl {
							export abstract class TypeInfoImpl<TypeT, ClassDeclT, FieldT, MethodT>  extends java.lang.Object {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.impl.TypeInfoImpl<any,any,any,any>>;
								public owner: com.sun.xml.bind.v2.model.impl.TypeInfoSetImpl<TypeT,ClassDeclT,FieldT,MethodT>;
								public builder: com.sun.xml.bind.v2.model.impl.ModelBuilder<TypeT,ClassDeclT,FieldT,MethodT>;
								public parseElementName(clazz: ClassDeclT): javax.xml.namespace.QName;
								public parseTypeName(clazz: ClassDeclT): javax.xml.namespace.QName;
								public getLocation(): com.sun.xml.bind.v2.runtime.Location;
								public parseTypeName(clazz: ClassDeclT, t: javax.xml.bind.annotation.XmlType): javax.xml.namespace.QName;
								public getType(): any;
								public constructor(builder: com.sun.xml.bind.v2.model.impl.ModelBuilder<TypeT,ClassDeclT,FieldT,MethodT>, upstream: com.sun.xml.bind.v2.model.annotation.Locatable);
								public canBeReferencedByIDREF(): boolean;
								public getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
								public reader(): com.sun.xml.bind.v2.model.annotation.AnnotationReader<TypeT,ClassDeclT,FieldT,MethodT>;
								public nav(): com.sun.xml.bind.v2.model.nav.Navigator<TypeT,ClassDeclT,FieldT,MethodT>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module impl {
							export class TypeInfoSetImpl<T, C, F, M>  extends com.sun.xml.bind.v2.model.core.TypeInfoSet<any,any,any,any> {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.impl.TypeInfoSetImpl<any,any,any,any>>;
								public nav: com.sun.xml.bind.v2.model.nav.Navigator<any,any,any,any>;
								public reader: com.sun.xml.bind.v2.model.annotation.AnnotationReader<any,any,any,any>;
								public constructor(nav: com.sun.xml.bind.v2.model.nav.Navigator<any,any,any,any>, reader: com.sun.xml.bind.v2.model.annotation.AnnotationReader<any,any,any,any>, leaves: java.util.Map<any,any>);
								public builtins(): java.util.Map<any,any>;
								public createAnyType(): com.sun.xml.bind.v2.model.core.NonElement<any,any>;
								public getElementMappings(scope: any): java.util.Map<javax.xml.namespace.QName,any>;
								public getXmlNs(namespaceUri: string): java.util.Map<string,string>;
								public getSchemaLocations(): java.util.Map<string,string>;
								public getTypeInfo(type: any): com.sun.xml.bind.v2.model.core.NonElement<any,any>;
								public add(ai: com.sun.xml.bind.v2.model.impl.ArrayInfoImpl<any,any,any,any>): void;
								public getTypeInfo(ref: com.sun.xml.bind.v2.model.core.Ref<any,any>): com.sun.xml.bind.v2.model.core.NonElement<any,any>;
								public getElementFormDefault(nsUri: string): javax.xml.bind.annotation.XmlNsForm;
								public dump(out: javax.xml.transform.Result): void;
								public getNavigator(): com.sun.xml.bind.v2.model.nav.Navigator<any,any,any,any>;
								public beans(): java.util.Map<any,any>;
								public getElementInfo(scope: any, name: javax.xml.namespace.QName): com.sun.xml.bind.v2.model.impl.ElementInfoImpl<any,any,any,any>;
								public enums(): java.util.Map<any,any>;
								public arrays(): java.util.Map<any,any>;
								public add(ci: com.sun.xml.bind.v2.model.impl.ClassInfoImpl<any,any,any,any>): void;
								public getAnyTypeInfo(): com.sun.xml.bind.v2.model.core.NonElement<any,any>;
								public getElementInfo(object0: any, qName1: javax.xml.namespace.QName): com.sun.xml.bind.v2.model.core.ElementInfo<any,any>;
								public getClassInfo(type: any): com.sun.xml.bind.v2.model.core.NonElement<any,any>;
								public add(ei: com.sun.xml.bind.v2.model.impl.ElementInfoImpl<any,any,any,any>, builder: com.sun.xml.bind.v2.model.impl.ModelBuilder<any,any,any,any>): void;
								public add(li: com.sun.xml.bind.v2.model.impl.EnumLeafInfoImpl<any,any,any,any>): void;
								public getAllElements(): java.lang.Iterable<any>;
								public getAttributeFormDefault(nsUri: string): javax.xml.bind.annotation.XmlNsForm;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module impl {
							export class TypeRefImpl<TypeT, ClassDeclT>  extends com.sun.xml.bind.v2.model.core.TypeRef<any,any> {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.impl.TypeRefImpl<any,any>>;
								public owner: com.sun.xml.bind.v2.model.impl.ElementPropertyInfoImpl<any,any,any,any>;
								public getTarget(): com.sun.xml.bind.v2.model.core.NonElement<any,any>;
								public getSource(): com.sun.xml.bind.v2.model.core.PropertyInfo<any,any>;
								public constructor(owner: com.sun.xml.bind.v2.model.impl.ElementPropertyInfoImpl<any,any,any,any>, elementName: javax.xml.namespace.QName, type: any, isNillable: boolean, defaultValue: string);
								public isNillable(): boolean;
								public getDefaultValue(): string;
								public link(): void;
								public getTagName(): javax.xml.namespace.QName;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module impl {
							export class Util extends java.lang.Object {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.impl.Util>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module impl {
							export class Utils extends java.lang.Object {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.impl.Utils>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module impl {
							export class ValuePropertyInfoImpl<TypeT, ClassDeclT, FieldT, MethodT>  extends com.sun.xml.bind.v2.model.impl.SingleTypePropertyInfoImpl<any,any,any,any> implements com.sun.xml.bind.v2.model.core.ValuePropertyInfo<any,any>  {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.impl.ValuePropertyInfoImpl<any,any,any,any>>;
								public ref(): java.util.Collection<any>;
								public getName(): string;
								public displayName(): string;
								public getSource(): com.sun.xml.bind.v2.model.core.PropertyInfo<any,any>;
								public getExpectedMimeType(): javax.activation.MimeType;
								public parent(): com.sun.xml.bind.v2.model.impl.ClassInfoImpl<any,any,any,any>;
								public id(): com.sun.xml.bind.v2.model.core.ID;
								public getTarget(): com.sun.xml.bind.v2.model.core.NonElement<any,any>;
								public readAnnotation(annotationType: java.lang.Class<any>): java.lang.annotation.Annotation;
								public isCollection(): boolean;
								public getLocation(): com.sun.xml.bind.v2.runtime.Location;
								public getSchemaType(): javax.xml.namespace.QName;
								public ref(): java.util.List<any>;
								public hasAnnotation(annotationType: java.lang.Class<any>): boolean;
								public kind(): com.sun.xml.bind.v2.model.core.PropertyKind;
								public getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
								public parent(): com.sun.xml.bind.v2.model.core.TypeInfo<any,any>;
								public getAdapter(): com.sun.xml.bind.v2.model.core.Adapter<any,any>;
								public inlineBinaryData(): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module nav {
							export class GenericArrayTypeImpl extends java.lang.Object implements java.lang.reflect.GenericArrayType {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.nav.GenericArrayTypeImpl>;
								public toString(): string;
								public equals(obj: any): boolean;
								public getTypeName(): string;
								public equals(o: any): boolean;
								public hashCode(): number;
								public getGenericComponentType(): java.lang.reflect.Type;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module nav {
							export class Navigator<T, C, F, M>  extends java.lang.Object {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.nav.Navigator<any,any,any,any>>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.model.nav.Navigator<any,any,any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getSuperClass(object0: C): C;
									getBaseClass(object0: T, object1: C): T;
									getClassName(object0: C): string;
									getTypeName(object0: T): string;
									getClassShortName(object0: C): string;
									getDeclaredFields(object0: C): java.util.Collection<any>;
									getDeclaredField(object0: C, string1: string): F;
									getDeclaredMethods(object0: C): java.util.Collection<any>;
									getDeclaringClassForField(object0: F): C;
									getDeclaringClassForMethod(object0: M): C;
									getFieldType(object0: F): T;
									getFieldName(object0: F): string;
									getMethodName(object0: M): string;
									getReturnType(object0: M): T;
									getMethodParameters(object0: M): native.Array<T>;
									isStaticMethod(object0: M): boolean;
									isSubClassOf(object0: T, object1: T): boolean;
									ref(class0: java.lang.Class<any>): T;
									use(object0: C): T;
									asDecl(object0: T): C;
									asDecl(class0: java.lang.Class<any>): C;
									isArray(object0: T): boolean;
									isArrayButNotByteArray(object0: T): boolean;
									getComponentType(object0: T): T;
									getTypeArgument(object0: T, int1: number): T;
									isParameterizedType(object0: T): boolean;
									isPrimitive(object0: T): boolean;
									getPrimitive(class0: java.lang.Class<any>): T;
									getClassLocation(object0: C): com.sun.xml.bind.v2.runtime.Location;
									getFieldLocation(object0: F): com.sun.xml.bind.v2.runtime.Location;
									getMethodLocation(object0: M): com.sun.xml.bind.v2.runtime.Location;
									hasDefaultConstructor(object0: C): boolean;
									isStaticField(object0: F): boolean;
									isPublicMethod(object0: M): boolean;
									isFinalMethod(object0: M): boolean;
									isPublicField(object0: F): boolean;
									isEnum(object0: C): boolean;
									erasure(object0: any): any;
									isAbstract(object0: C): boolean;
									isFinal(object0: C): boolean;
									getEnumConstants(object0: C): native.Array<F>;
									getVoidType(): T;
									getPackageName(object0: C): string;
									loadObjectFactory(object0: C, string1: string): C;
									isBridgeMethod(object0: M): boolean;
									isOverriding(object0: M, object1: C): boolean;
									isInterface(object0: C): boolean;
									isTransient(object0: F): boolean;
									isInnerClass(object0: C): boolean;
									isSameType(object0: T, object1: T): boolean;
								});
								public constructor();
								public isSubClassOf(object0: T, object1: T): boolean;
								public getReturnType(object0: M): T;
								public getEnumConstants(object0: C): native.Array<F>;
								public getDeclaredMethods(object0: C): java.util.Collection<any>;
								public isInterface(object0: C): boolean;
								public getClassShortName(object0: C): string;
								public isArrayButNotByteArray(object0: T): boolean;
								public ref(class0: java.lang.Class<any>): T;
								public getComponentType(object0: T): T;
								public getClassName(object0: C): string;
								public getDeclaredFields(object0: C): java.util.Collection<any>;
								public getMethodParameters(object0: M): native.Array<T>;
								public isPublicField(object0: F): boolean;
								public isPrimitive(object0: T): boolean;
								public isOverriding(object0: M, object1: C): boolean;
								public asDecl(object0: T): C;
								public erasure(object0: any): any;
								public getFieldName(object0: F): string;
								public getMethodLocation(object0: M): com.sun.xml.bind.v2.runtime.Location;
								public getTypeArgument(object0: T, int1: number): T;
								public isSameType(object0: T, object1: T): boolean;
								public getMethodName(object0: M): string;
								public isInnerClass(object0: C): boolean;
								public use(object0: C): T;
								public isFinalMethod(object0: M): boolean;
								public isPublicMethod(object0: M): boolean;
								public getFieldLocation(object0: F): com.sun.xml.bind.v2.runtime.Location;
								public getDeclaringClassForField(object0: F): C;
								public asDecl(class0: java.lang.Class<any>): C;
								public getDeclaredField(object0: C, string1: string): F;
								public getPackageName(object0: C): string;
								public isEnum(object0: C): boolean;
								public isAbstract(object0: C): boolean;
								public getBaseClass(object0: T, object1: C): T;
								public getSuperClass(object0: C): C;
								public hasDefaultConstructor(object0: C): boolean;
								public isTransient(object0: F): boolean;
								public getTypeName(object0: T): string;
								public getVoidType(): T;
								public getFieldType(object0: F): T;
								public getClassLocation(object0: C): com.sun.xml.bind.v2.runtime.Location;
								public getDeclaringClassForMethod(object0: M): C;
								public isFinal(object0: C): boolean;
								public isBridgeMethod(object0: M): boolean;
								public isParameterizedType(object0: T): boolean;
								public isStaticField(object0: F): boolean;
								public isArray(object0: T): boolean;
								public loadObjectFactory(object0: C, string1: string): C;
								public isStaticMethod(object0: M): boolean;
								public getPrimitive(class0: java.lang.Class<any>): T;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module nav {
							export class ParameterizedTypeImpl extends java.lang.Object implements java.lang.reflect.ParameterizedType {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.nav.ParameterizedTypeImpl>;
								public toString(): string;
								public equals(obj: any): boolean;
								public getTypeName(): string;
								public getRawType(): java.lang.reflect.Type;
								public getActualTypeArguments(): native.Array<java.lang.reflect.Type>;
								public getRawType(): java.lang.Class<any>;
								public getOwnerType(): java.lang.reflect.Type;
								public equals(o: any): boolean;
								public hashCode(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module nav {
							export class ReflectionNavigator extends com.sun.xml.bind.v2.model.nav.Navigator<java.lang.reflect.Type,java.lang.Class<any>,java.lang.reflect.Field,java.lang.reflect.Method> {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.nav.ReflectionNavigator>;
								public getFieldName(object0: any): string;
								public use(c: java.lang.Class<any>): java.lang.Class<any>;
								public getTypeName(type: java.lang.reflect.Type): string;
								public getClassLocation(clazz: java.lang.Class<any>): com.sun.xml.bind.v2.runtime.Location;
								public isParameterizedType(object0: any): boolean;
								public isStaticField(field: java.lang.reflect.Field): boolean;
								public getPrimitive(primitiveType: java.lang.Class<any>): java.lang.reflect.Type;
								public use(object0: any): any;
								public isStaticMethod(object0: any): boolean;
								public getDeclaredField(clazz: java.lang.Class<any>, fieldName: string): java.lang.reflect.Field;
								public isOverriding(object0: any, object1: any): boolean;
								public getDeclaringClassForField(field: java.lang.reflect.Field): java.lang.Class<any>;
								public isEnum(object0: any): boolean;
								public isFinal(object0: any): boolean;
								public isEnum(c: java.lang.Class<any>): boolean;
								public getDeclaringClassForMethod(method: java.lang.reflect.Method): java.lang.Class<any>;
								public isFinalMethod(object0: any): boolean;
								public isParameterizedType(type: java.lang.reflect.Type): boolean;
								public getMethodName(method: java.lang.reflect.Method): string;
								public getSuperClass(clazz: java.lang.Class<any>): java.lang.Class<any>;
								public isPublicField(field: java.lang.reflect.Field): boolean;
								public getClassShortName(clazz: java.lang.Class<any>): string;
								public hasDefaultConstructor(c: java.lang.Class<any>): boolean;
								public isFinalMethod(method: java.lang.reflect.Method): boolean;
								public isStaticMethod(method: java.lang.reflect.Method): boolean;
								public getClassLocation(object0: any): com.sun.xml.bind.v2.runtime.Location;
								public isPrimitive(type: java.lang.reflect.Type): boolean;
								public getMethodLocation(method: java.lang.reflect.Method): com.sun.xml.bind.v2.runtime.Location;
								public getComponentType(object0: any): any;
								public asDecl(c: java.lang.Class<any>): java.lang.Class<any>;
								public asDecl(t: java.lang.reflect.Type): java.lang.Class<any>;
								public getReturnType(method: java.lang.reflect.Method): java.lang.reflect.Type;
								public isTransient(object0: any): boolean;
								public getFieldType(field: java.lang.reflect.Field): java.lang.reflect.Type;
								public getVoidType(): java.lang.reflect.Type;
								public getFieldLocation(object0: any): com.sun.xml.bind.v2.runtime.Location;
								public isInnerClass(object0: any): boolean;
								public getClassShortName(object0: any): string;
								public loadObjectFactory(object0: any, string1: string): any;
								public getMethodParameters(method: java.lang.reflect.Method): native.Array<java.lang.reflect.Type>;
								public isSameType(t1: java.lang.reflect.Type, t2: java.lang.reflect.Type): boolean;
								public isAbstract(clazz: java.lang.Class<any>): boolean;
								public loadObjectFactory(referencePoint: java.lang.Class<any>, pkg: string): java.lang.Class<any>;
								public isFinal(clazz: java.lang.Class<any>): boolean;
								public getFieldType(object0: any): any;
								public getMethodName(object0: any): string;
								public isArrayButNotByteArray(t: java.lang.reflect.Type): boolean;
								public isTransient(f: java.lang.reflect.Field): boolean;
								public getPackageName(clazz: java.lang.Class<any>): string;
								public getVoidType(): any;
								public isStaticField(object0: any): boolean;
								public isOverriding(method: java.lang.reflect.Method, base: java.lang.Class<any>): boolean;
								public isArray(object0: any): boolean;
								public isPublicMethod(method: java.lang.reflect.Method): boolean;
								public ref(class0: java.lang.Class<any>): any;
								public isAbstract(object0: any): boolean;
								public ref(c: java.lang.Class<any>): java.lang.Class<any>;
								public isInterface(clazz: java.lang.Class<any>): boolean;
								public getTypeArgument(type: java.lang.reflect.Type, i: number): java.lang.reflect.Type;
								public asDecl(object0: any): any;
								public isSameType(object0: any, object1: any): boolean;
								public erasure(object0: any): any;
								public isBridgeMethod(object0: any): boolean;
								public getFieldName(field: java.lang.reflect.Field): string;
								public isPublicField(object0: any): boolean;
								public asDecl(class0: java.lang.Class<any>): any;
								public getMethodParameters(object0: any): native.Array<any>;
								public getSuperClass(object0: any): any;
								public getDeclaringClassForField(object0: any): any;
								public getEnumConstants(object0: any): native.Array<any>;
								public getClassName(clazz: java.lang.Class<any>): string;
								public getPackageName(object0: any): string;
								public isPrimitive(object0: any): boolean;
								public isSubClassOf(sub: java.lang.reflect.Type, sup: java.lang.reflect.Type): boolean;
								public getComponentType(t: java.lang.reflect.Type): java.lang.reflect.Type;
								public getReturnType(object0: any): any;
								public getDeclaredFields(clazz: java.lang.Class<any>): java.util.Collection<any>;
								public getBaseClass(t: java.lang.reflect.Type, sup: java.lang.Class<any>): java.lang.reflect.Type;
								public getClassName(object0: any): string;
								public erasure(t: java.lang.reflect.Type): java.lang.Class<any>;
								public getBaseClass(object0: any, object1: any): any;
								public getMethodLocation(object0: any): com.sun.xml.bind.v2.runtime.Location;
								public getEnumConstants(clazz: java.lang.Class<any>): native.Array<java.lang.reflect.Field>;
								public getPrimitive(class0: java.lang.Class<any>): any;
								public getFieldLocation(field: java.lang.reflect.Field): com.sun.xml.bind.v2.runtime.Location;
								public isSubClassOf(object0: any, object1: any): boolean;
								public isArrayButNotByteArray(object0: any): boolean;
								public getTypeArgument(object0: any, int1: number): any;
								public isBridgeMethod(method: java.lang.reflect.Method): boolean;
								public getDeclaredFields(object0: any): java.util.Collection<any>;
								public getDeclaredMethods(object0: any): java.util.Collection<any>;
								public hasDefaultConstructor(object0: any): boolean;
								public isArray(t: java.lang.reflect.Type): boolean;
								public isInnerClass(clazz: java.lang.Class<any>): boolean;
								public isInterface(object0: any): boolean;
								public createParameterizedType(rawType: java.lang.Class<any>, types1: native.Array<java.lang.reflect.Type>): java.lang.reflect.Type;
								public getDeclaredMethods(clazz: java.lang.Class<any>): java.util.Collection<any>;
								public getDeclaringClassForMethod(object0: any): any;
								public getTypeName(object0: any): string;
								public getDeclaredField(object0: any, string1: string): any;
								public isPublicMethod(object0: any): boolean;
							}
							export module ReflectionNavigator {
								export class BinderArg extends java.lang.Object {
									public static class: java.lang.Class<com.sun.xml.bind.v2.model.nav.ReflectionNavigator.BinderArg>;
									public constructor(decl: java.lang.reflect.GenericDeclaration, types1: native.Array<java.lang.reflect.Type>);
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module nav {
							export class SecureLoader extends java.lang.Object {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.nav.SecureLoader>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module nav {
							export abstract class TypeVisitor<T, P>  extends java.lang.Object {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.nav.TypeVisitor<any,any>>;
								public onParameterizdType(parameterizedType0: java.lang.reflect.ParameterizedType, object1: P): T;
								public onClass(class0: java.lang.Class<any>, object1: P): T;
								public onVariable(typeVariable0: java.lang.reflect.TypeVariable<any>, object1: P): T;
								public visit(t: java.lang.reflect.Type, param: P): T;
								public onWildcard(wildcardType0: java.lang.reflect.WildcardType, object1: P): T;
								public onGenericArray(genericArrayType0: java.lang.reflect.GenericArrayType, object1: P): T;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module nav {
							export class WildcardTypeImpl extends java.lang.Object implements java.lang.reflect.WildcardType {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.nav.WildcardTypeImpl>;
								public constructor(ub: native.Array<java.lang.reflect.Type>, lb: native.Array<java.lang.reflect.Type>);
								public equals(obj: any): boolean;
								public getTypeName(): string;
								public getUpperBounds(): native.Array<java.lang.reflect.Type>;
								public hashCode(): number;
								public getLowerBounds(): native.Array<java.lang.reflect.Type>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module runtime {
							export class RuntimeArrayInfo extends java.lang.Object {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.runtime.RuntimeArrayInfo>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.model.runtime.RuntimeArrayInfo interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getType(): java.lang.Class<any>;
									getItemType(): com.sun.xml.bind.v2.model.runtime.RuntimeNonElement;
									getItemType(): com.sun.xml.bind.v2.model.core.NonElement<any,any>;
									getTransducer(): com.sun.xml.bind.v2.runtime.Transducer<any>;
									getTypeName(): javax.xml.namespace.QName;
									isSimpleType(): boolean;
									getTypeName(): javax.xml.namespace.QName;
									isSimpleType(): boolean;
									getType(): any;
									canBeReferencedByIDREF(): boolean;
									getType(): any;
									canBeReferencedByIDREF(): boolean;
									getType(): any;
									canBeReferencedByIDREF(): boolean;
									getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
									getLocation(): com.sun.xml.bind.v2.runtime.Location;
									getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
									getLocation(): com.sun.xml.bind.v2.runtime.Location;
									getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
									getLocation(): com.sun.xml.bind.v2.runtime.Location;
								});
								public constructor();
								public static ANYTYPE_NAME: javax.xml.namespace.QName;
								public isSimpleType(): boolean;
								public getLocation(): com.sun.xml.bind.v2.runtime.Location;
								public getItemType(): com.sun.xml.bind.v2.model.core.NonElement<any,any>;
								public getType(): any;
								public getType(): java.lang.Class<any>;
								public canBeReferencedByIDREF(): boolean;
								public getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
								public getTransducer(): com.sun.xml.bind.v2.runtime.Transducer<any>;
								public getTypeName(): javax.xml.namespace.QName;
								public getItemType(): com.sun.xml.bind.v2.model.runtime.RuntimeNonElement;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module runtime {
							export class RuntimeAttributePropertyInfo extends java.lang.Object {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.runtime.RuntimeAttributePropertyInfo>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.model.runtime.RuntimeAttributePropertyInfo interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getTarget(): com.sun.xml.bind.v2.model.runtime.RuntimeNonElement;
									getTarget(): com.sun.xml.bind.v2.model.core.NonElement<any,any>;
									isRequired(): boolean;
									getXmlName(): javax.xml.namespace.QName;
									getAdapter(): com.sun.xml.bind.v2.model.core.Adapter<any,any>;
									ref(): java.util.Collection<any>;
									getAccessor(): com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>;
									elementOnlyContent(): boolean;
									getRawType(): java.lang.reflect.Type;
									getIndividualType(): java.lang.reflect.Type;
									getTarget(): com.sun.xml.bind.v2.model.runtime.RuntimeNonElement;
									getSource(): com.sun.xml.bind.v2.model.runtime.RuntimePropertyInfo;
									getTransducer(): com.sun.xml.bind.v2.runtime.Transducer<any>;
									parent(): com.sun.xml.bind.v2.model.core.TypeInfo<any,any>;
									getName(): string;
									displayName(): string;
									isCollection(): boolean;
									ref(): java.util.Collection<any>;
									kind(): com.sun.xml.bind.v2.model.core.PropertyKind;
									getAdapter(): com.sun.xml.bind.v2.model.core.Adapter<any,any>;
									id(): com.sun.xml.bind.v2.model.core.ID;
									getExpectedMimeType(): javax.activation.MimeType;
									inlineBinaryData(): boolean;
									getSchemaType(): javax.xml.namespace.QName;
									getTarget(): com.sun.xml.bind.v2.model.core.NonElement<any,any>;
									getSource(): com.sun.xml.bind.v2.model.core.PropertyInfo<any,any>;
									parent(): com.sun.xml.bind.v2.model.core.TypeInfo<any,any>;
									getName(): string;
									displayName(): string;
									isCollection(): boolean;
									ref(): java.util.Collection<any>;
									kind(): com.sun.xml.bind.v2.model.core.PropertyKind;
									getAdapter(): com.sun.xml.bind.v2.model.core.Adapter<any,any>;
									id(): com.sun.xml.bind.v2.model.core.ID;
									getExpectedMimeType(): javax.activation.MimeType;
									inlineBinaryData(): boolean;
									getSchemaType(): javax.xml.namespace.QName;
									getTarget(): com.sun.xml.bind.v2.model.core.NonElement<any,any>;
									getSource(): com.sun.xml.bind.v2.model.core.PropertyInfo<any,any>;
									readAnnotation(class0: java.lang.Class<any>): java.lang.annotation.Annotation;
									hasAnnotation(class0: java.lang.Class<any>): boolean;
									readAnnotation(class0: java.lang.Class<any>): java.lang.annotation.Annotation;
									hasAnnotation(class0: java.lang.Class<any>): boolean;
								});
								public constructor();
								public isRequired(): boolean;
								public hasAnnotation(class0: java.lang.Class<any>): boolean;
								public getTarget(): com.sun.xml.bind.v2.model.runtime.RuntimeNonElement;
								public ref(): java.util.Collection<any>;
								public getAccessor(): com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>;
								public elementOnlyContent(): boolean;
								public getIndividualType(): java.lang.reflect.Type;
								public getName(): string;
								public displayName(): string;
								public getSource(): com.sun.xml.bind.v2.model.core.PropertyInfo<any,any>;
								public getExpectedMimeType(): javax.activation.MimeType;
								public id(): com.sun.xml.bind.v2.model.core.ID;
								public getSource(): com.sun.xml.bind.v2.model.runtime.RuntimePropertyInfo;
								public getTarget(): com.sun.xml.bind.v2.model.core.NonElement<any,any>;
								public isCollection(): boolean;
								public getSchemaType(): javax.xml.namespace.QName;
								public getRawType(): java.lang.reflect.Type;
								public getXmlName(): javax.xml.namespace.QName;
								public kind(): com.sun.xml.bind.v2.model.core.PropertyKind;
								public readAnnotation(class0: java.lang.Class<any>): java.lang.annotation.Annotation;
								public parent(): com.sun.xml.bind.v2.model.core.TypeInfo<any,any>;
								public getTransducer(): com.sun.xml.bind.v2.runtime.Transducer<any>;
								public getAdapter(): com.sun.xml.bind.v2.model.core.Adapter<any,any>;
								public inlineBinaryData(): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module runtime {
							export class RuntimeBuiltinLeafInfo extends java.lang.Object {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.runtime.RuntimeBuiltinLeafInfo>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.model.runtime.RuntimeBuiltinLeafInfo interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getTypeName(): javax.xml.namespace.QName;
									getTransducer(): com.sun.xml.bind.v2.runtime.Transducer<any>;
									getClazz(): java.lang.Class<any>;
									getTypeNames(): native.Array<javax.xml.namespace.QName>;
									getTransducer(): com.sun.xml.bind.v2.runtime.Transducer<any>;
									isElement(): boolean;
									getElementName(): javax.xml.namespace.QName;
									asElement(): com.sun.xml.bind.v2.model.core.Element<any,any>;
									isElement(): boolean;
									getElementName(): javax.xml.namespace.QName;
									asElement(): com.sun.xml.bind.v2.model.core.Element<any,any>;
									getTypeName(): javax.xml.namespace.QName;
									isSimpleType(): boolean;
									getTypeName(): javax.xml.namespace.QName;
									isSimpleType(): boolean;
									getTypeName(): javax.xml.namespace.QName;
									isSimpleType(): boolean;
									getType(): any;
									canBeReferencedByIDREF(): boolean;
									getType(): any;
									canBeReferencedByIDREF(): boolean;
									getType(): any;
									canBeReferencedByIDREF(): boolean;
									getType(): any;
									canBeReferencedByIDREF(): boolean;
									getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
									getLocation(): com.sun.xml.bind.v2.runtime.Location;
									getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
									getLocation(): com.sun.xml.bind.v2.runtime.Location;
									getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
									getLocation(): com.sun.xml.bind.v2.runtime.Location;
									getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
									getLocation(): com.sun.xml.bind.v2.runtime.Location;
								});
								public constructor();
								public static ANYTYPE_NAME: javax.xml.namespace.QName;
								public getElementName(): javax.xml.namespace.QName;
								public isSimpleType(): boolean;
								public getTypeNames(): native.Array<javax.xml.namespace.QName>;
								public getLocation(): com.sun.xml.bind.v2.runtime.Location;
								public getType(): any;
								public canBeReferencedByIDREF(): boolean;
								public isElement(): boolean;
								public getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
								public getClazz(): java.lang.Class<any>;
								public getTypeName(): javax.xml.namespace.QName;
								public getTransducer(): com.sun.xml.bind.v2.runtime.Transducer<any>;
								public asElement(): com.sun.xml.bind.v2.model.core.Element<any,any>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module runtime {
							export class RuntimeClassInfo extends java.lang.Object {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.runtime.RuntimeClassInfo>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.model.runtime.RuntimeClassInfo interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getBaseClass(): com.sun.xml.bind.v2.model.runtime.RuntimeClassInfo;
									getProperties(): java.util.List<any>;
									getProperty(string0: string): com.sun.xml.bind.v2.model.runtime.RuntimePropertyInfo;
									getFactoryMethod(): java.lang.reflect.Method;
									getAttributeWildcard(): com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>;
									getLocatorField(): com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>;
									getBaseClass(): com.sun.xml.bind.v2.model.core.ClassInfo<any,any>;
									getClazz(): any;
									getName(): string;
									getProperties(): java.util.List<any>;
									hasValueProperty(): boolean;
									getProperty(string0: string): com.sun.xml.bind.v2.model.core.PropertyInfo<any,any>;
									hasProperties(): boolean;
									isAbstract(): boolean;
									isOrdered(): boolean;
									isFinal(): boolean;
									hasSubClasses(): boolean;
									hasAttributeWildcard(): boolean;
									inheritsAttributeWildcard(): boolean;
									declaresAttributeWildcard(): boolean;
									getTransducer(): com.sun.xml.bind.v2.runtime.Transducer<any>;
									isElement(): boolean;
									getElementName(): javax.xml.namespace.QName;
									asElement(): com.sun.xml.bind.v2.model.core.Element<any,any>;
									getTypeName(): javax.xml.namespace.QName;
									isSimpleType(): boolean;
									getTypeName(): javax.xml.namespace.QName;
									isSimpleType(): boolean;
									getType(): any;
									canBeReferencedByIDREF(): boolean;
									getType(): any;
									canBeReferencedByIDREF(): boolean;
									getType(): any;
									canBeReferencedByIDREF(): boolean;
									getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
									getLocation(): com.sun.xml.bind.v2.runtime.Location;
									getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
									getLocation(): com.sun.xml.bind.v2.runtime.Location;
									getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
									getLocation(): com.sun.xml.bind.v2.runtime.Location;
								});
								public constructor();
								public static ANYTYPE_NAME: javax.xml.namespace.QName;
								public getElementName(): javax.xml.namespace.QName;
								public isSimpleType(): boolean;
								public isAbstract(): boolean;
								public inheritsAttributeWildcard(): boolean;
								public getFactoryMethod(): java.lang.reflect.Method;
								public getBaseClass(): com.sun.xml.bind.v2.model.core.ClassInfo<any,any>;
								public getTypeName(): javax.xml.namespace.QName;
								public asElement(): com.sun.xml.bind.v2.model.core.Element<any,any>;
								public hasValueProperty(): boolean;
								public hasSubClasses(): boolean;
								public getAttributeWildcard(): com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>;
								public declaresAttributeWildcard(): boolean;
								public canBeReferencedByIDREF(): boolean;
								public hasProperties(): boolean;
								public getBaseClass(): com.sun.xml.bind.v2.model.runtime.RuntimeClassInfo;
								public getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
								public getClazz(): any;
								public getName(): string;
								public getProperty(string0: string): com.sun.xml.bind.v2.model.core.PropertyInfo<any,any>;
								public isElement(): boolean;
								public getLocatorField(): com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>;
								public getProperty(string0: string): com.sun.xml.bind.v2.model.runtime.RuntimePropertyInfo;
								public isFinal(): boolean;
								public getProperties(): java.util.List<any>;
								public getLocation(): com.sun.xml.bind.v2.runtime.Location;
								public isOrdered(): boolean;
								public getType(): any;
								public getTransducer(): com.sun.xml.bind.v2.runtime.Transducer<any>;
								public hasAttributeWildcard(): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module runtime {
							export class RuntimeElement extends java.lang.Object {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.runtime.RuntimeElement>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.model.runtime.RuntimeElement interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getElementName(): javax.xml.namespace.QName;
									getSubstitutionHead(): com.sun.xml.bind.v2.model.core.Element<any,any>;
									getScope(): com.sun.xml.bind.v2.model.core.ClassInfo<any,any>;
									getType(): any;
									canBeReferencedByIDREF(): boolean;
									getType(): any;
									canBeReferencedByIDREF(): boolean;
									getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
									getLocation(): com.sun.xml.bind.v2.runtime.Location;
									getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
									getLocation(): com.sun.xml.bind.v2.runtime.Location;
								});
								public constructor();
								public getElementName(): javax.xml.namespace.QName;
								public getLocation(): com.sun.xml.bind.v2.runtime.Location;
								public getType(): any;
								public canBeReferencedByIDREF(): boolean;
								public getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
								public getSubstitutionHead(): com.sun.xml.bind.v2.model.core.Element<any,any>;
								public getScope(): com.sun.xml.bind.v2.model.core.ClassInfo<any,any>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module runtime {
							export class RuntimeElementInfo extends java.lang.Object {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.runtime.RuntimeElementInfo>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.model.runtime.RuntimeElementInfo interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getScope(): com.sun.xml.bind.v2.model.runtime.RuntimeClassInfo;
									getProperty(): com.sun.xml.bind.v2.model.runtime.RuntimeElementPropertyInfo;
									getType(): java.lang.Class<any>;
									getContentType(): com.sun.xml.bind.v2.model.runtime.RuntimeNonElement;
									getProperty(): com.sun.xml.bind.v2.model.core.ElementPropertyInfo<any,any>;
									getContentType(): com.sun.xml.bind.v2.model.core.NonElement<any,any>;
									getContentInMemoryType(): any;
									getType(): any;
									getSubstitutionHead(): com.sun.xml.bind.v2.model.core.ElementInfo<any,any>;
									getSubstitutionMembers(): java.util.Collection<any>;
									getElementName(): javax.xml.namespace.QName;
									getSubstitutionHead(): com.sun.xml.bind.v2.model.core.Element<any,any>;
									getScope(): com.sun.xml.bind.v2.model.core.ClassInfo<any,any>;
									getElementName(): javax.xml.namespace.QName;
									getSubstitutionHead(): com.sun.xml.bind.v2.model.core.Element<any,any>;
									getScope(): com.sun.xml.bind.v2.model.core.ClassInfo<any,any>;
									getType(): any;
									canBeReferencedByIDREF(): boolean;
									getType(): any;
									canBeReferencedByIDREF(): boolean;
									getType(): any;
									canBeReferencedByIDREF(): boolean;
									getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
									getLocation(): com.sun.xml.bind.v2.runtime.Location;
									getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
									getLocation(): com.sun.xml.bind.v2.runtime.Location;
									getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
									getLocation(): com.sun.xml.bind.v2.runtime.Location;
								});
								public constructor();
								public getElementName(): javax.xml.namespace.QName;
								public getType(): java.lang.Class<any>;
								public getProperty(): com.sun.xml.bind.v2.model.core.ElementPropertyInfo<any,any>;
								public getContentType(): com.sun.xml.bind.v2.model.core.NonElement<any,any>;
								public getSubstitutionHead(): com.sun.xml.bind.v2.model.core.Element<any,any>;
								public getScope(): com.sun.xml.bind.v2.model.core.ClassInfo<any,any>;
								public getScope(): com.sun.xml.bind.v2.model.runtime.RuntimeClassInfo;
								public getProperty(): com.sun.xml.bind.v2.model.runtime.RuntimeElementPropertyInfo;
								public getSubstitutionHead(): com.sun.xml.bind.v2.model.core.ElementInfo<any,any>;
								public getLocation(): com.sun.xml.bind.v2.runtime.Location;
								public getContentType(): com.sun.xml.bind.v2.model.runtime.RuntimeNonElement;
								public getContentInMemoryType(): any;
								public getType(): any;
								public canBeReferencedByIDREF(): boolean;
								public getSubstitutionMembers(): java.util.Collection<any>;
								public getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module runtime {
							export class RuntimeElementPropertyInfo extends java.lang.Object {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.runtime.RuntimeElementPropertyInfo>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.model.runtime.RuntimeElementPropertyInfo interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									ref(): java.util.Collection<any>;
									getTypes(): java.util.List<any>;
									getTypes(): java.util.List<any>;
									getXmlName(): javax.xml.namespace.QName;
									isCollectionRequired(): boolean;
									isCollectionNillable(): boolean;
									isValueList(): boolean;
									isRequired(): boolean;
									getAdapter(): com.sun.xml.bind.v2.model.core.Adapter<any,any>;
									ref(): java.util.Collection<any>;
									getAccessor(): com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>;
									elementOnlyContent(): boolean;
									getRawType(): java.lang.reflect.Type;
									getIndividualType(): java.lang.reflect.Type;
									parent(): com.sun.xml.bind.v2.model.core.TypeInfo<any,any>;
									getName(): string;
									displayName(): string;
									isCollection(): boolean;
									ref(): java.util.Collection<any>;
									kind(): com.sun.xml.bind.v2.model.core.PropertyKind;
									getAdapter(): com.sun.xml.bind.v2.model.core.Adapter<any,any>;
									id(): com.sun.xml.bind.v2.model.core.ID;
									getExpectedMimeType(): javax.activation.MimeType;
									inlineBinaryData(): boolean;
									getSchemaType(): javax.xml.namespace.QName;
									parent(): com.sun.xml.bind.v2.model.core.TypeInfo<any,any>;
									getName(): string;
									displayName(): string;
									isCollection(): boolean;
									ref(): java.util.Collection<any>;
									kind(): com.sun.xml.bind.v2.model.core.PropertyKind;
									getAdapter(): com.sun.xml.bind.v2.model.core.Adapter<any,any>;
									id(): com.sun.xml.bind.v2.model.core.ID;
									getExpectedMimeType(): javax.activation.MimeType;
									inlineBinaryData(): boolean;
									getSchemaType(): javax.xml.namespace.QName;
									readAnnotation(class0: java.lang.Class<any>): java.lang.annotation.Annotation;
									hasAnnotation(class0: java.lang.Class<any>): boolean;
									readAnnotation(class0: java.lang.Class<any>): java.lang.annotation.Annotation;
									hasAnnotation(class0: java.lang.Class<any>): boolean;
								});
								public constructor();
								public isValueList(): boolean;
								public isRequired(): boolean;
								public hasAnnotation(class0: java.lang.Class<any>): boolean;
								public ref(): java.util.Collection<any>;
								public getAccessor(): com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>;
								public elementOnlyContent(): boolean;
								public getIndividualType(): java.lang.reflect.Type;
								public getName(): string;
								public displayName(): string;
								public getExpectedMimeType(): javax.activation.MimeType;
								public id(): com.sun.xml.bind.v2.model.core.ID;
								public isCollectionRequired(): boolean;
								public getTypes(): java.util.List<any>;
								public isCollection(): boolean;
								public getSchemaType(): javax.xml.namespace.QName;
								public getRawType(): java.lang.reflect.Type;
								public getXmlName(): javax.xml.namespace.QName;
								public kind(): com.sun.xml.bind.v2.model.core.PropertyKind;
								public readAnnotation(class0: java.lang.Class<any>): java.lang.annotation.Annotation;
								public parent(): com.sun.xml.bind.v2.model.core.TypeInfo<any,any>;
								public isCollectionNillable(): boolean;
								public getAdapter(): com.sun.xml.bind.v2.model.core.Adapter<any,any>;
								public inlineBinaryData(): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module runtime {
							export class RuntimeEnumLeafInfo extends java.lang.Object {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.runtime.RuntimeEnumLeafInfo>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.model.runtime.RuntimeEnumLeafInfo interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getClazz(): any;
									getBaseType(): com.sun.xml.bind.v2.model.core.NonElement<any,any>;
									getConstants(): java.lang.Iterable<any>;
									getTransducer(): com.sun.xml.bind.v2.runtime.Transducer<any>;
									getClazz(): java.lang.Class<any>;
									getTypeNames(): native.Array<javax.xml.namespace.QName>;
									getTransducer(): com.sun.xml.bind.v2.runtime.Transducer<any>;
									isElement(): boolean;
									getElementName(): javax.xml.namespace.QName;
									asElement(): com.sun.xml.bind.v2.model.core.Element<any,any>;
									isElement(): boolean;
									getElementName(): javax.xml.namespace.QName;
									asElement(): com.sun.xml.bind.v2.model.core.Element<any,any>;
									getTypeName(): javax.xml.namespace.QName;
									isSimpleType(): boolean;
									getTypeName(): javax.xml.namespace.QName;
									isSimpleType(): boolean;
									getTypeName(): javax.xml.namespace.QName;
									isSimpleType(): boolean;
									getType(): any;
									canBeReferencedByIDREF(): boolean;
									getType(): any;
									canBeReferencedByIDREF(): boolean;
									getType(): any;
									canBeReferencedByIDREF(): boolean;
									getType(): any;
									canBeReferencedByIDREF(): boolean;
									getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
									getLocation(): com.sun.xml.bind.v2.runtime.Location;
									getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
									getLocation(): com.sun.xml.bind.v2.runtime.Location;
									getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
									getLocation(): com.sun.xml.bind.v2.runtime.Location;
									getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
									getLocation(): com.sun.xml.bind.v2.runtime.Location;
								});
								public constructor();
								public static ANYTYPE_NAME: javax.xml.namespace.QName;
								public getClazz(): any;
								public getElementName(): javax.xml.namespace.QName;
								public isSimpleType(): boolean;
								public getTypeNames(): native.Array<javax.xml.namespace.QName>;
								public isElement(): boolean;
								public getClazz(): java.lang.Class<any>;
								public getTypeName(): javax.xml.namespace.QName;
								public asElement(): com.sun.xml.bind.v2.model.core.Element<any,any>;
								public getBaseType(): com.sun.xml.bind.v2.model.core.NonElement<any,any>;
								public getLocation(): com.sun.xml.bind.v2.runtime.Location;
								public getType(): any;
								public canBeReferencedByIDREF(): boolean;
								public getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
								public getConstants(): java.lang.Iterable<any>;
								public getTransducer(): com.sun.xml.bind.v2.runtime.Transducer<any>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module runtime {
							export class RuntimeLeafInfo extends java.lang.Object {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.runtime.RuntimeLeafInfo>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.model.runtime.RuntimeLeafInfo interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getTransducer(): com.sun.xml.bind.v2.runtime.Transducer<any>;
									getClazz(): java.lang.Class<any>;
									getTypeNames(): native.Array<javax.xml.namespace.QName>;
									getTransducer(): com.sun.xml.bind.v2.runtime.Transducer<any>;
									isElement(): boolean;
									getElementName(): javax.xml.namespace.QName;
									asElement(): com.sun.xml.bind.v2.model.core.Element<any,any>;
									getTypeName(): javax.xml.namespace.QName;
									isSimpleType(): boolean;
									getTypeName(): javax.xml.namespace.QName;
									isSimpleType(): boolean;
									getType(): any;
									canBeReferencedByIDREF(): boolean;
									getType(): any;
									canBeReferencedByIDREF(): boolean;
									getType(): any;
									canBeReferencedByIDREF(): boolean;
									getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
									getLocation(): com.sun.xml.bind.v2.runtime.Location;
									getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
									getLocation(): com.sun.xml.bind.v2.runtime.Location;
									getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
									getLocation(): com.sun.xml.bind.v2.runtime.Location;
								});
								public constructor();
								public static ANYTYPE_NAME: javax.xml.namespace.QName;
								public getElementName(): javax.xml.namespace.QName;
								public isSimpleType(): boolean;
								public getTypeNames(): native.Array<javax.xml.namespace.QName>;
								public getLocation(): com.sun.xml.bind.v2.runtime.Location;
								public getType(): any;
								public canBeReferencedByIDREF(): boolean;
								public isElement(): boolean;
								public getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
								public getClazz(): java.lang.Class<any>;
								public getTransducer(): com.sun.xml.bind.v2.runtime.Transducer<any>;
								public getTypeName(): javax.xml.namespace.QName;
								public asElement(): com.sun.xml.bind.v2.model.core.Element<any,any>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module runtime {
							export class RuntimeMapPropertyInfo extends java.lang.Object {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.runtime.RuntimeMapPropertyInfo>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.model.runtime.RuntimeMapPropertyInfo interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getKeyType(): com.sun.xml.bind.v2.model.runtime.RuntimeNonElement;
									getValueType(): com.sun.xml.bind.v2.model.runtime.RuntimeNonElement;
									ref(): java.util.Collection<any>;
									getAccessor(): com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>;
									elementOnlyContent(): boolean;
									getRawType(): java.lang.reflect.Type;
									getIndividualType(): java.lang.reflect.Type;
									getXmlName(): javax.xml.namespace.QName;
									isCollectionNillable(): boolean;
									getKeyType(): com.sun.xml.bind.v2.model.core.NonElement<any,any>;
									getValueType(): com.sun.xml.bind.v2.model.core.NonElement<any,any>;
									parent(): com.sun.xml.bind.v2.model.core.TypeInfo<any,any>;
									getName(): string;
									displayName(): string;
									isCollection(): boolean;
									ref(): java.util.Collection<any>;
									kind(): com.sun.xml.bind.v2.model.core.PropertyKind;
									getAdapter(): com.sun.xml.bind.v2.model.core.Adapter<any,any>;
									id(): com.sun.xml.bind.v2.model.core.ID;
									getExpectedMimeType(): javax.activation.MimeType;
									inlineBinaryData(): boolean;
									getSchemaType(): javax.xml.namespace.QName;
									parent(): com.sun.xml.bind.v2.model.core.TypeInfo<any,any>;
									getName(): string;
									displayName(): string;
									isCollection(): boolean;
									ref(): java.util.Collection<any>;
									kind(): com.sun.xml.bind.v2.model.core.PropertyKind;
									getAdapter(): com.sun.xml.bind.v2.model.core.Adapter<any,any>;
									id(): com.sun.xml.bind.v2.model.core.ID;
									getExpectedMimeType(): javax.activation.MimeType;
									inlineBinaryData(): boolean;
									getSchemaType(): javax.xml.namespace.QName;
									readAnnotation(class0: java.lang.Class<any>): java.lang.annotation.Annotation;
									hasAnnotation(class0: java.lang.Class<any>): boolean;
									readAnnotation(class0: java.lang.Class<any>): java.lang.annotation.Annotation;
									hasAnnotation(class0: java.lang.Class<any>): boolean;
								});
								public constructor();
								public hasAnnotation(class0: java.lang.Class<any>): boolean;
								public getKeyType(): com.sun.xml.bind.v2.model.runtime.RuntimeNonElement;
								public ref(): java.util.Collection<any>;
								public getAccessor(): com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>;
								public elementOnlyContent(): boolean;
								public getIndividualType(): java.lang.reflect.Type;
								public getName(): string;
								public displayName(): string;
								public getExpectedMimeType(): javax.activation.MimeType;
								public id(): com.sun.xml.bind.v2.model.core.ID;
								public getValueType(): com.sun.xml.bind.v2.model.runtime.RuntimeNonElement;
								public getValueType(): com.sun.xml.bind.v2.model.core.NonElement<any,any>;
								public isCollection(): boolean;
								public getKeyType(): com.sun.xml.bind.v2.model.core.NonElement<any,any>;
								public getSchemaType(): javax.xml.namespace.QName;
								public getRawType(): java.lang.reflect.Type;
								public getXmlName(): javax.xml.namespace.QName;
								public kind(): com.sun.xml.bind.v2.model.core.PropertyKind;
								public readAnnotation(class0: java.lang.Class<any>): java.lang.annotation.Annotation;
								public parent(): com.sun.xml.bind.v2.model.core.TypeInfo<any,any>;
								public isCollectionNillable(): boolean;
								public getAdapter(): com.sun.xml.bind.v2.model.core.Adapter<any,any>;
								public inlineBinaryData(): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module runtime {
							export class RuntimeNonElement extends java.lang.Object {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.runtime.RuntimeNonElement>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.model.runtime.RuntimeNonElement interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getTransducer(): com.sun.xml.bind.v2.runtime.Transducer<any>;
									getTypeName(): javax.xml.namespace.QName;
									isSimpleType(): boolean;
									getType(): any;
									canBeReferencedByIDREF(): boolean;
									getType(): any;
									canBeReferencedByIDREF(): boolean;
									getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
									getLocation(): com.sun.xml.bind.v2.runtime.Location;
									getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
									getLocation(): com.sun.xml.bind.v2.runtime.Location;
								});
								public constructor();
								public static ANYTYPE_NAME: javax.xml.namespace.QName;
								public isSimpleType(): boolean;
								public getLocation(): com.sun.xml.bind.v2.runtime.Location;
								public getType(): any;
								public canBeReferencedByIDREF(): boolean;
								public getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
								public getTransducer(): com.sun.xml.bind.v2.runtime.Transducer<any>;
								public getTypeName(): javax.xml.namespace.QName;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module runtime {
							export class RuntimeNonElementRef extends com.sun.xml.bind.v2.model.core.NonElementRef<java.lang.reflect.Type,java.lang.Class<any>> {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.runtime.RuntimeNonElementRef>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.model.runtime.RuntimeNonElementRef interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getTarget(): com.sun.xml.bind.v2.model.runtime.RuntimeNonElement;
									getSource(): com.sun.xml.bind.v2.model.runtime.RuntimePropertyInfo;
									getTransducer(): com.sun.xml.bind.v2.runtime.Transducer<any>;
									getTarget(): com.sun.xml.bind.v2.model.core.NonElement<any,any>;
									getSource(): com.sun.xml.bind.v2.model.core.PropertyInfo<any,any>;
								});
								public constructor();
								public getTarget(): com.sun.xml.bind.v2.model.core.NonElement<any,any>;
								public getTarget(): com.sun.xml.bind.v2.model.runtime.RuntimeNonElement;
								public getSource(): com.sun.xml.bind.v2.model.core.PropertyInfo<any,any>;
								public getSource(): com.sun.xml.bind.v2.model.runtime.RuntimePropertyInfo;
								public getTransducer(): com.sun.xml.bind.v2.runtime.Transducer<any>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module runtime {
							export class RuntimePropertyInfo extends com.sun.xml.bind.v2.model.core.PropertyInfo<java.lang.reflect.Type,java.lang.Class<any>> {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.runtime.RuntimePropertyInfo>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.model.runtime.RuntimePropertyInfo interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									ref(): java.util.Collection<any>;
									getAccessor(): com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>;
									elementOnlyContent(): boolean;
									getRawType(): java.lang.reflect.Type;
									getIndividualType(): java.lang.reflect.Type;
									parent(): com.sun.xml.bind.v2.model.core.TypeInfo<any,any>;
									getName(): string;
									displayName(): string;
									isCollection(): boolean;
									ref(): java.util.Collection<any>;
									kind(): com.sun.xml.bind.v2.model.core.PropertyKind;
									getAdapter(): com.sun.xml.bind.v2.model.core.Adapter<any,any>;
									id(): com.sun.xml.bind.v2.model.core.ID;
									getExpectedMimeType(): javax.activation.MimeType;
									inlineBinaryData(): boolean;
									getSchemaType(): javax.xml.namespace.QName;
									readAnnotation(class0: java.lang.Class<any>): java.lang.annotation.Annotation;
									hasAnnotation(class0: java.lang.Class<any>): boolean;
								});
								public constructor();
								public hasAnnotation(class0: java.lang.Class<any>): boolean;
								public ref(): java.util.Collection<any>;
								public getAccessor(): com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>;
								public elementOnlyContent(): boolean;
								public getIndividualType(): java.lang.reflect.Type;
								public getName(): string;
								public displayName(): string;
								public getExpectedMimeType(): javax.activation.MimeType;
								public id(): com.sun.xml.bind.v2.model.core.ID;
								public isCollection(): boolean;
								public getSchemaType(): javax.xml.namespace.QName;
								public getRawType(): java.lang.reflect.Type;
								public kind(): com.sun.xml.bind.v2.model.core.PropertyKind;
								public readAnnotation(class0: java.lang.Class<any>): java.lang.annotation.Annotation;
								public parent(): com.sun.xml.bind.v2.model.core.TypeInfo<any,any>;
								public getAdapter(): com.sun.xml.bind.v2.model.core.Adapter<any,any>;
								public inlineBinaryData(): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module runtime {
							export class RuntimeReferencePropertyInfo extends java.lang.Object {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.runtime.RuntimeReferencePropertyInfo>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.model.runtime.RuntimeReferencePropertyInfo interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getElements(): java.util.Set<any>;
									getElements(): java.util.Set<any>;
									ref(): java.util.Collection<any>;
									getXmlName(): javax.xml.namespace.QName;
									isCollectionNillable(): boolean;
									isCollectionRequired(): boolean;
									isMixed(): boolean;
									getWildcard(): com.sun.xml.bind.v2.model.core.WildcardMode;
									getDOMHandler(): any;
									isRequired(): boolean;
									getAdapter(): com.sun.xml.bind.v2.model.core.Adapter<any,any>;
									ref(): java.util.Collection<any>;
									getAccessor(): com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>;
									elementOnlyContent(): boolean;
									getRawType(): java.lang.reflect.Type;
									getIndividualType(): java.lang.reflect.Type;
									parent(): com.sun.xml.bind.v2.model.core.TypeInfo<any,any>;
									getName(): string;
									displayName(): string;
									isCollection(): boolean;
									ref(): java.util.Collection<any>;
									kind(): com.sun.xml.bind.v2.model.core.PropertyKind;
									getAdapter(): com.sun.xml.bind.v2.model.core.Adapter<any,any>;
									id(): com.sun.xml.bind.v2.model.core.ID;
									getExpectedMimeType(): javax.activation.MimeType;
									inlineBinaryData(): boolean;
									getSchemaType(): javax.xml.namespace.QName;
									parent(): com.sun.xml.bind.v2.model.core.TypeInfo<any,any>;
									getName(): string;
									displayName(): string;
									isCollection(): boolean;
									ref(): java.util.Collection<any>;
									kind(): com.sun.xml.bind.v2.model.core.PropertyKind;
									getAdapter(): com.sun.xml.bind.v2.model.core.Adapter<any,any>;
									id(): com.sun.xml.bind.v2.model.core.ID;
									getExpectedMimeType(): javax.activation.MimeType;
									inlineBinaryData(): boolean;
									getSchemaType(): javax.xml.namespace.QName;
									readAnnotation(class0: java.lang.Class<any>): java.lang.annotation.Annotation;
									hasAnnotation(class0: java.lang.Class<any>): boolean;
									readAnnotation(class0: java.lang.Class<any>): java.lang.annotation.Annotation;
									hasAnnotation(class0: java.lang.Class<any>): boolean;
								});
								public constructor();
								public isRequired(): boolean;
								public hasAnnotation(class0: java.lang.Class<any>): boolean;
								public getIndividualType(): java.lang.reflect.Type;
								public displayName(): string;
								public getExpectedMimeType(): javax.activation.MimeType;
								public isCollectionRequired(): boolean;
								public getSchemaType(): javax.xml.namespace.QName;
								public getWildcard(): com.sun.xml.bind.v2.model.core.WildcardMode;
								public getRawType(): java.lang.reflect.Type;
								public kind(): com.sun.xml.bind.v2.model.core.PropertyKind;
								public readAnnotation(class0: java.lang.Class<any>): java.lang.annotation.Annotation;
								public parent(): com.sun.xml.bind.v2.model.core.TypeInfo<any,any>;
								public getAdapter(): com.sun.xml.bind.v2.model.core.Adapter<any,any>;
								public ref(): java.util.Collection<any>;
								public isMixed(): boolean;
								public getAccessor(): com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>;
								public elementOnlyContent(): boolean;
								public getName(): string;
								public id(): com.sun.xml.bind.v2.model.core.ID;
								public isCollection(): boolean;
								public getElements(): java.util.Set<any>;
								public getXmlName(): javax.xml.namespace.QName;
								public getDOMHandler(): any;
								public isCollectionNillable(): boolean;
								public inlineBinaryData(): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module runtime {
							export class RuntimeTypeInfo extends com.sun.xml.bind.v2.model.core.TypeInfo<java.lang.reflect.Type,java.lang.Class<any>> {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.runtime.RuntimeTypeInfo>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.model.runtime.RuntimeTypeInfo interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getType(): any;
									canBeReferencedByIDREF(): boolean;
									getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
									getLocation(): com.sun.xml.bind.v2.runtime.Location;
								});
								public constructor();
								public getLocation(): com.sun.xml.bind.v2.runtime.Location;
								public getType(): any;
								public canBeReferencedByIDREF(): boolean;
								public getUpstream(): com.sun.xml.bind.v2.model.annotation.Locatable;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module runtime {
							export class RuntimeTypeInfoSet extends com.sun.xml.bind.v2.model.core.TypeInfoSet<java.lang.reflect.Type,java.lang.Class<any>,java.lang.reflect.Field,java.lang.reflect.Method> {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.runtime.RuntimeTypeInfoSet>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.model.runtime.RuntimeTypeInfoSet interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									arrays(): java.util.Map<java.lang.Class<any>,any>;
									beans(): java.util.Map<java.lang.Class<any>,any>;
									builtins(): java.util.Map<java.lang.reflect.Type,any>;
									enums(): java.util.Map<java.lang.Class<any>,any>;
									getTypeInfo(type0: java.lang.reflect.Type): com.sun.xml.bind.v2.model.runtime.RuntimeNonElement;
									getAnyTypeInfo(): com.sun.xml.bind.v2.model.runtime.RuntimeNonElement;
									getClassInfo(class0: java.lang.Class<any>): com.sun.xml.bind.v2.model.runtime.RuntimeNonElement;
									getElementInfo(class0: java.lang.Class<any>, qName1: javax.xml.namespace.QName): com.sun.xml.bind.v2.model.runtime.RuntimeElementInfo;
									getElementMappings(class0: java.lang.Class<any>): java.util.Map<javax.xml.namespace.QName,any>;
									getAllElements(): java.lang.Iterable<any>;
									getNavigator(): com.sun.xml.bind.v2.model.nav.Navigator<any,any,any,any>;
									getTypeInfo(object0: any): com.sun.xml.bind.v2.model.core.NonElement<any,any>;
									getAnyTypeInfo(): com.sun.xml.bind.v2.model.core.NonElement<any,any>;
									getClassInfo(object0: any): com.sun.xml.bind.v2.model.core.NonElement<any,any>;
									arrays(): java.util.Map<any,any>;
									beans(): java.util.Map<any,any>;
									builtins(): java.util.Map<any,any>;
									enums(): java.util.Map<any,any>;
									getElementInfo(object0: any, qName1: javax.xml.namespace.QName): com.sun.xml.bind.v2.model.core.ElementInfo<any,any>;
									getTypeInfo(ref0: com.sun.xml.bind.v2.model.core.Ref<any,any>): com.sun.xml.bind.v2.model.core.NonElement<any,any>;
									getElementMappings(object0: any): java.util.Map<javax.xml.namespace.QName,any>;
									getAllElements(): java.lang.Iterable<any>;
									getXmlNs(string0: string): java.util.Map<string,string>;
									getSchemaLocations(): java.util.Map<string,string>;
									getElementFormDefault(string0: string): javax.xml.bind.annotation.XmlNsForm;
									getAttributeFormDefault(string0: string): javax.xml.bind.annotation.XmlNsForm;
									dump(result0: javax.xml.transform.Result): void;
								});
								public constructor();
								public builtins(): java.util.Map<any,any>;
								public builtins(): java.util.Map<java.lang.reflect.Type,any>;
								public getTypeInfo(object0: any): com.sun.xml.bind.v2.model.core.NonElement<any,any>;
								public beans(): java.util.Map<any,any>;
								public enums(): java.util.Map<java.lang.Class<any>,any>;
								public getElementFormDefault(string0: string): javax.xml.bind.annotation.XmlNsForm;
								public getElementInfo(class0: java.lang.Class<any>, qName1: javax.xml.namespace.QName): com.sun.xml.bind.v2.model.runtime.RuntimeElementInfo;
								public getElementMappings(class0: java.lang.Class<any>): java.util.Map<javax.xml.namespace.QName,any>;
								public arrays(): java.util.Map<any,any>;
								public getAnyTypeInfo(): com.sun.xml.bind.v2.model.runtime.RuntimeNonElement;
								public getElementInfo(object0: any, qName1: javax.xml.namespace.QName): com.sun.xml.bind.v2.model.core.ElementInfo<any,any>;
								public getAllElements(): java.lang.Iterable<any>;
								public arrays(): java.util.Map<java.lang.Class<any>,any>;
								public dump(result0: javax.xml.transform.Result): void;
								public getClassInfo(object0: any): com.sun.xml.bind.v2.model.core.NonElement<any,any>;
								public getSchemaLocations(): java.util.Map<string,string>;
								public getClassInfo(class0: java.lang.Class<any>): com.sun.xml.bind.v2.model.runtime.RuntimeNonElement;
								public getNavigator(): com.sun.xml.bind.v2.model.nav.Navigator<any,any,any,any>;
								public getElementMappings(object0: any): java.util.Map<javax.xml.namespace.QName,any>;
								public getTypeInfo(ref0: com.sun.xml.bind.v2.model.core.Ref<any,any>): com.sun.xml.bind.v2.model.core.NonElement<any,any>;
								public enums(): java.util.Map<any,any>;
								public beans(): java.util.Map<java.lang.Class<any>,any>;
								public getAttributeFormDefault(string0: string): javax.xml.bind.annotation.XmlNsForm;
								public getAnyTypeInfo(): com.sun.xml.bind.v2.model.core.NonElement<any,any>;
								public getXmlNs(string0: string): java.util.Map<string,string>;
								public getTypeInfo(type0: java.lang.reflect.Type): com.sun.xml.bind.v2.model.runtime.RuntimeNonElement;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module runtime {
							export class RuntimeTypeRef extends java.lang.Object {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.runtime.RuntimeTypeRef>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.model.runtime.RuntimeTypeRef interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getTarget(): com.sun.xml.bind.v2.model.runtime.RuntimeNonElement;
									getSource(): com.sun.xml.bind.v2.model.runtime.RuntimePropertyInfo;
									getTagName(): javax.xml.namespace.QName;
									isNillable(): boolean;
									getDefaultValue(): string;
									getTarget(): com.sun.xml.bind.v2.model.runtime.RuntimeNonElement;
									getSource(): com.sun.xml.bind.v2.model.runtime.RuntimePropertyInfo;
									getTransducer(): com.sun.xml.bind.v2.runtime.Transducer<any>;
									getTarget(): com.sun.xml.bind.v2.model.core.NonElement<any,any>;
									getSource(): com.sun.xml.bind.v2.model.core.PropertyInfo<any,any>;
									getTarget(): com.sun.xml.bind.v2.model.core.NonElement<any,any>;
									getSource(): com.sun.xml.bind.v2.model.core.PropertyInfo<any,any>;
								});
								public constructor();
								public getTarget(): com.sun.xml.bind.v2.model.core.NonElement<any,any>;
								public getTarget(): com.sun.xml.bind.v2.model.runtime.RuntimeNonElement;
								public getSource(): com.sun.xml.bind.v2.model.core.PropertyInfo<any,any>;
								public isNillable(): boolean;
								public getSource(): com.sun.xml.bind.v2.model.runtime.RuntimePropertyInfo;
								public getDefaultValue(): string;
								public getTransducer(): com.sun.xml.bind.v2.runtime.Transducer<any>;
								public getTagName(): javax.xml.namespace.QName;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module runtime {
							export class RuntimeValuePropertyInfo extends java.lang.Object {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.runtime.RuntimeValuePropertyInfo>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.model.runtime.RuntimeValuePropertyInfo interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getTarget(): com.sun.xml.bind.v2.model.runtime.RuntimeNonElement;
									getAdapter(): com.sun.xml.bind.v2.model.core.Adapter<any,any>;
									ref(): java.util.Collection<any>;
									getAccessor(): com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>;
									elementOnlyContent(): boolean;
									getRawType(): java.lang.reflect.Type;
									getIndividualType(): java.lang.reflect.Type;
									getTarget(): com.sun.xml.bind.v2.model.runtime.RuntimeNonElement;
									getSource(): com.sun.xml.bind.v2.model.runtime.RuntimePropertyInfo;
									getTransducer(): com.sun.xml.bind.v2.runtime.Transducer<any>;
									parent(): com.sun.xml.bind.v2.model.core.TypeInfo<any,any>;
									getName(): string;
									displayName(): string;
									isCollection(): boolean;
									ref(): java.util.Collection<any>;
									kind(): com.sun.xml.bind.v2.model.core.PropertyKind;
									getAdapter(): com.sun.xml.bind.v2.model.core.Adapter<any,any>;
									id(): com.sun.xml.bind.v2.model.core.ID;
									getExpectedMimeType(): javax.activation.MimeType;
									inlineBinaryData(): boolean;
									getSchemaType(): javax.xml.namespace.QName;
									getTarget(): com.sun.xml.bind.v2.model.core.NonElement<any,any>;
									getSource(): com.sun.xml.bind.v2.model.core.PropertyInfo<any,any>;
									parent(): com.sun.xml.bind.v2.model.core.TypeInfo<any,any>;
									getName(): string;
									displayName(): string;
									isCollection(): boolean;
									ref(): java.util.Collection<any>;
									kind(): com.sun.xml.bind.v2.model.core.PropertyKind;
									getAdapter(): com.sun.xml.bind.v2.model.core.Adapter<any,any>;
									id(): com.sun.xml.bind.v2.model.core.ID;
									getExpectedMimeType(): javax.activation.MimeType;
									inlineBinaryData(): boolean;
									getSchemaType(): javax.xml.namespace.QName;
									getTarget(): com.sun.xml.bind.v2.model.core.NonElement<any,any>;
									getSource(): com.sun.xml.bind.v2.model.core.PropertyInfo<any,any>;
									readAnnotation(class0: java.lang.Class<any>): java.lang.annotation.Annotation;
									hasAnnotation(class0: java.lang.Class<any>): boolean;
									readAnnotation(class0: java.lang.Class<any>): java.lang.annotation.Annotation;
									hasAnnotation(class0: java.lang.Class<any>): boolean;
								});
								public constructor();
								public hasAnnotation(class0: java.lang.Class<any>): boolean;
								public getTarget(): com.sun.xml.bind.v2.model.runtime.RuntimeNonElement;
								public ref(): java.util.Collection<any>;
								public getAccessor(): com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>;
								public elementOnlyContent(): boolean;
								public getIndividualType(): java.lang.reflect.Type;
								public getName(): string;
								public displayName(): string;
								public getSource(): com.sun.xml.bind.v2.model.core.PropertyInfo<any,any>;
								public getExpectedMimeType(): javax.activation.MimeType;
								public id(): com.sun.xml.bind.v2.model.core.ID;
								public getSource(): com.sun.xml.bind.v2.model.runtime.RuntimePropertyInfo;
								public getTarget(): com.sun.xml.bind.v2.model.core.NonElement<any,any>;
								public isCollection(): boolean;
								public getSchemaType(): javax.xml.namespace.QName;
								public getRawType(): java.lang.reflect.Type;
								public kind(): com.sun.xml.bind.v2.model.core.PropertyKind;
								public readAnnotation(class0: java.lang.Class<any>): java.lang.annotation.Annotation;
								public parent(): com.sun.xml.bind.v2.model.core.TypeInfo<any,any>;
								public getTransducer(): com.sun.xml.bind.v2.runtime.Transducer<any>;
								public getAdapter(): com.sun.xml.bind.v2.model.core.Adapter<any,any>;
								public inlineBinaryData(): boolean;
							}
						}
					}
				}
			}
		}
	}
}


declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module model {
						export module util {
							export class ArrayInfoUtil extends java.lang.Object {
								public static class: java.lang.Class<com.sun.xml.bind.v2.model.util.ArrayInfoUtil>;
								public static calcArrayTypeName(n: javax.xml.namespace.QName): javax.xml.namespace.QName;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export class AnyTypeBeanInfo extends com.sun.xml.bind.v2.runtime.JaxBeanInfo<any> implements com.sun.xml.bind.v2.runtime.AttributeAccessor<any>  {
							public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.AnyTypeBeanInfo>;
							public getId(element: any, target: com.sun.xml.bind.v2.runtime.XMLSerializer): string;
							public serializeRoot(element: any, target: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
							public createInstance(unmarshallingContext0: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext): any;
							public serializeAttributes(object0: any, xMLSerializer1: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
							public getLoader(context: com.sun.xml.bind.v2.runtime.JAXBContextImpl, typeSubstitutionCapable: boolean): com.sun.xml.bind.v2.runtime.unmarshaller.Loader;
							public constructor(grammar: com.sun.xml.bind.v2.runtime.JAXBContextImpl, anyTypeInfo: com.sun.xml.bind.v2.model.runtime.RuntimeTypeInfo);
							public serializeURIs(element: any, target: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
							public isNilIncluded(): boolean;
							public createInstance(context: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext): any;
							public serializeBody(element: any, target: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
							public getLoader(jAXBContextImpl0: com.sun.xml.bind.v2.runtime.JAXBContextImpl, boolean1: boolean): com.sun.xml.bind.v2.runtime.unmarshaller.Loader;
							public serializeAttributes(element: any, target: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
							public getTransducer(): com.sun.xml.bind.v2.runtime.Transducer<any>;
							public reset(element: any, context: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext): boolean;
							public getElementNamespaceURI(object0: any): string;
							public getId(object0: any, xMLSerializer1: com.sun.xml.bind.v2.runtime.XMLSerializer): string;
							public constructor(grammar: com.sun.xml.bind.v2.runtime.JAXBContextImpl, rti: com.sun.xml.bind.v2.model.runtime.RuntimeTypeInfo, jaxbType: java.lang.Class<any>, typeNames: native.Array<javax.xml.namespace.QName>, isElement: boolean, isImmutable: boolean, hasLifecycleEvents: boolean);
							public serializeBody(object0: any, xMLSerializer1: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
							public constructor(grammar: com.sun.xml.bind.v2.runtime.JAXBContextImpl, rti: com.sun.xml.bind.v2.model.runtime.RuntimeTypeInfo, jaxbType: java.lang.Class<any>, isElement: boolean, isImmutable: boolean, hasLifecycleEvents: boolean);
							public reset(object0: any, unmarshallingContext1: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext): boolean;
							public serializeURIs(object0: any, xMLSerializer1: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
							public getElementLocalName(element: any): string;
							public serializeRoot(object0: any, xMLSerializer1: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
							public getElementNamespaceURI(element: any): string;
							public constructor(grammar: com.sun.xml.bind.v2.runtime.JAXBContextImpl, rti: com.sun.xml.bind.v2.model.runtime.RuntimeTypeInfo, jaxbType: java.lang.Class<any>, typeName: javax.xml.namespace.QName, isElement: boolean, isImmutable: boolean, hasLifecycleEvents: boolean);
							public getElementLocalName(object0: any): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export class ArrayBeanInfoImpl extends com.sun.xml.bind.v2.runtime.JaxBeanInfo<any> {
							public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.ArrayBeanInfoImpl>;
							public reset(array: any, context: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext): boolean;
							public createInstance(unmarshallingContext0: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext): any;
							public serializeAttributes(object0: any, xMLSerializer1: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
							public getElementLocalName(array: any): string;
							public getLoader(context: com.sun.xml.bind.v2.runtime.JAXBContextImpl, typeSubstitutionCapable: boolean): com.sun.xml.bind.v2.runtime.unmarshaller.Loader;
							public getElementNamespaceURI(array: any): string;
							public serializeBody(array: any, target: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
							public createInstance(context: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext): any;
							public serializeURIs(array: any, target: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
							public link(grammar: com.sun.xml.bind.v2.runtime.JAXBContextImpl): void;
							public constructor(owner: com.sun.xml.bind.v2.runtime.JAXBContextImpl, rai: com.sun.xml.bind.v2.model.runtime.RuntimeArrayInfo);
							public getLoader(jAXBContextImpl0: com.sun.xml.bind.v2.runtime.JAXBContextImpl, boolean1: boolean): com.sun.xml.bind.v2.runtime.unmarshaller.Loader;
							public getTransducer(): com.sun.xml.bind.v2.runtime.Transducer<any>;
							public toArray(list: java.util.List<any>): any;
							public getTransducer(): com.sun.xml.bind.v2.runtime.Transducer<any>;
							public getElementNamespaceURI(object0: any): string;
							public getId(object0: any, xMLSerializer1: com.sun.xml.bind.v2.runtime.XMLSerializer): string;
							public constructor(grammar: com.sun.xml.bind.v2.runtime.JAXBContextImpl, rti: com.sun.xml.bind.v2.model.runtime.RuntimeTypeInfo, jaxbType: java.lang.Class<any>, typeNames: native.Array<javax.xml.namespace.QName>, isElement: boolean, isImmutable: boolean, hasLifecycleEvents: boolean);
							public serializeBody(object0: any, xMLSerializer1: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
							public serializeRoot(array: any, target: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
							public constructor(grammar: com.sun.xml.bind.v2.runtime.JAXBContextImpl, rti: com.sun.xml.bind.v2.model.runtime.RuntimeTypeInfo, jaxbType: java.lang.Class<any>, isElement: boolean, isImmutable: boolean, hasLifecycleEvents: boolean);
							public reset(object0: any, unmarshallingContext1: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext): boolean;
							public serializeURIs(object0: any, xMLSerializer1: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
							public serializeAttributes(array: any, target: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
							public serializeRoot(object0: any, xMLSerializer1: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
							public constructor(grammar: com.sun.xml.bind.v2.runtime.JAXBContextImpl, rti: com.sun.xml.bind.v2.model.runtime.RuntimeTypeInfo, jaxbType: java.lang.Class<any>, typeName: javax.xml.namespace.QName, isElement: boolean, isImmutable: boolean, hasLifecycleEvents: boolean);
							public getElementLocalName(object0: any): string;
							public getId(array: any, target: com.sun.xml.bind.v2.runtime.XMLSerializer): string;
						}
						export module ArrayBeanInfoImpl {
							export class ArrayLoader extends com.sun.xml.bind.v2.runtime.unmarshaller.Loader implements com.sun.xml.bind.v2.runtime.unmarshaller.Receiver {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.ArrayBeanInfoImpl.ArrayLoader>;
								public constructor(param0: com.sun.xml.bind.v2.runtime.ArrayBeanInfoImpl, owner: com.sun.xml.bind.v2.runtime.JAXBContextImpl);
								public leaveElement(state: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext.State, ea: com.sun.xml.bind.v2.runtime.unmarshaller.TagName): void;
								public startElement(state: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext.State, ea: com.sun.xml.bind.v2.runtime.unmarshaller.TagName): void;
								public constructor(expectText: boolean);
								public constructor();
								public receive(state: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext.State, o: any): void;
								public getExpectedChildElements(): java.util.Collection<javax.xml.namespace.QName>;
								public childElement(state: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext.State, ea: com.sun.xml.bind.v2.runtime.unmarshaller.TagName): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export class AssociationMap<XmlNode>  extends java.lang.Object {
							public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.AssociationMap<any>>;
							public constructor();
							public addInner(element: XmlNode, inner: any): void;
							public addOuter(element: XmlNode, outer: any): void;
							public byElement(e: any): com.sun.xml.bind.v2.runtime.AssociationMap.Entry<XmlNode>;
							public getInnerPeer(element: XmlNode): any;
							public addUsed(n: XmlNode): void;
							public getOuterPeer(element: XmlNode): any;
							public byPeer(o: any): com.sun.xml.bind.v2.runtime.AssociationMap.Entry<XmlNode>;
						}
						export module AssociationMap {
							export class Entry<XmlNode>  extends java.lang.Object {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.AssociationMap.Entry<any>>;
								public element(): XmlNode;
								public outer(): any;
								public inner(): any;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export class AttributeAccessor<BeanT>  extends java.lang.Object {
							public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.AttributeAccessor<any>>;
							/**
							 * Constructs a new instance of the com.sun.xml.bind.v2.runtime.AttributeAccessor<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								isNilIncluded(): boolean;
							});
							public constructor();
							public isNilIncluded(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export class BinderImpl<XmlNode>  extends javax.xml.bind.Binder<any> {
							public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.BinderImpl<any>>;
							public setSchema(schema0: javax.xml.validation.Schema): void;
							public setProperty(string0: string, object1: any): void;
							public unmarshal(xmlNode: any): any;
							public updateXML(jaxbObject: any): any;
							public updateXML(object0: any, object1: any): any;
							public unmarshal(object0: any, class1: java.lang.Class<any>): javax.xml.bind.JAXBElement;
							public setProperty(name: string, value: any): void;
							public unmarshal(object0: any): any;
							public getJAXBNode(object0: any): any;
							public setSchema(schema: javax.xml.validation.Schema): void;
							public getProperty(string0: string): any;
							public getProperty(name: string): any;
							public marshal(jaxbObject: any, xmlNode: any): void;
							public unmarshal(xmlNode: any, expectedType: java.lang.Class<any>): javax.xml.bind.JAXBElement;
							public getXMLNode(jaxbObject: any): any;
							public setEventHandler(handler: javax.xml.bind.ValidationEventHandler): void;
							public updateXML(jaxbObject: any, xmlNode: any): any;
							public updateXML(object0: any): any;
							public marshal(object0: any, object1: any): void;
							public getJAXBNode(xmlNode: any): any;
							public updateJAXB(object0: any): any;
							public updateJAXB(xmlNode: any): any;
							public getSchema(): javax.xml.validation.Schema;
							public getXMLNode(object0: any): any;
							public setEventHandler(validationEventHandler0: javax.xml.bind.ValidationEventHandler): void;
							public getEventHandler(): javax.xml.bind.ValidationEventHandler;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export class BridgeAdapter<OnWire, InMemory>  extends com.sun.xml.bind.v2.runtime.InternalBridge<any> {
							public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.BridgeAdapter<any,any>>;
							public unmarshal(n: org.w3c.dom.Node): any;
							public marshal(context: com.sun.xml.bind.api.BridgeContext, object: any, output: javax.xml.stream.XMLStreamWriter): void;
							public marshal(object: any, output: java.io.OutputStream, nsContext: javax.xml.namespace.NamespaceContext): void;
							public getTypeReference(): com.sun.xml.bind.api.TypeReference;
							public marshal(object: any, contentHandler: org.xml.sax.ContentHandler, am: javax.xml.bind.attachment.AttachmentMarshaller): void;
							public constructor(context: com.sun.xml.bind.v2.runtime.JAXBContextImpl);
							public marshal(object: any, result: javax.xml.transform.Result): void;
							public marshal(object: any, output: javax.xml.stream.XMLStreamWriter): void;
							public marshal(object: any, output: java.io.OutputStream, nsContext: javax.xml.namespace.NamespaceContext, am: javax.xml.bind.attachment.AttachmentMarshaller): void;
							public marshal(context: com.sun.xml.bind.api.BridgeContext, object: any, result: javax.xml.transform.Result): void;
							public marshal(marshaller0: javax.xml.bind.Marshaller, object1: any, contentHandler2: org.xml.sax.ContentHandler): void;
							public marshal(m: javax.xml.bind.Marshaller, inMemory: any, output: javax.xml.stream.XMLStreamWriter): void;
							public marshal(marshaller0: javax.xml.bind.Marshaller, object1: any, xMLStreamWriter2: javax.xml.stream.XMLStreamWriter): void;
							public unmarshal(in0: javax.xml.transform.Source): any;
							public marshal(m: javax.xml.bind.Marshaller, inMemory: any, output: org.w3c.dom.Node): void;
							public unmarshal(context: com.sun.xml.bind.api.BridgeContext, n: org.w3c.dom.Node): any;
							public unmarshal(unmarshaller0: javax.xml.bind.Unmarshaller, xMLStreamReader1: javax.xml.stream.XMLStreamReader): any;
							public marshal(object: any, output: org.w3c.dom.Node): void;
							public marshal(context: com.sun.xml.bind.api.BridgeContext, object: any, output: java.io.OutputStream, nsContext: javax.xml.namespace.NamespaceContext): void;
							public constructor(core: com.sun.xml.bind.v2.runtime.InternalBridge<any>, adapter: java.lang.Class<any>);
							public marshal(marshaller0: javax.xml.bind.Marshaller, object1: any, node2: org.w3c.dom.Node): void;
							public unmarshal(n: org.w3c.dom.Node, au: javax.xml.bind.attachment.AttachmentUnmarshaller): any;
							public unmarshal(unmarshaller0: javax.xml.bind.Unmarshaller, node1: org.w3c.dom.Node): any;
							public unmarshal(context: com.sun.xml.bind.api.BridgeContext, in1: javax.xml.transform.Source): any;
							public marshal(marshaller0: javax.xml.bind.Marshaller, object1: any, result2: javax.xml.transform.Result): void;
							public unmarshal(in0: javax.xml.stream.XMLStreamReader): any;
							public unmarshal(u: javax.xml.bind.Unmarshaller, in1: javax.xml.transform.Source): any;
							public marshal(context: com.sun.xml.bind.api.BridgeContext, object: any, output: org.w3c.dom.Node): void;
							public unmarshal(u: javax.xml.bind.Unmarshaller, in1: javax.xml.stream.XMLStreamReader): any;
							public marshal(m: javax.xml.bind.Marshaller, inMemory: any, output: java.io.OutputStream, nsc: javax.xml.namespace.NamespaceContext): void;
							public unmarshal(in0: javax.xml.transform.Source, au: javax.xml.bind.attachment.AttachmentUnmarshaller): any;
							public unmarshal(unmarshaller0: javax.xml.bind.Unmarshaller, source1: javax.xml.transform.Source): any;
							public unmarshal(u: javax.xml.bind.Unmarshaller, in1: java.io.InputStream): any;
							public unmarshal(u: javax.xml.bind.Unmarshaller, n: org.w3c.dom.Node): any;
							public marshal(object: any, output: javax.xml.stream.XMLStreamWriter, am: javax.xml.bind.attachment.AttachmentMarshaller): void;
							public unmarshal(unmarshaller0: javax.xml.bind.Unmarshaller, inputStream1: java.io.InputStream): any;
							public marshal(marshaller0: javax.xml.bind.Marshaller, object1: any, outputStream2: java.io.OutputStream, namespaceContext3: javax.xml.namespace.NamespaceContext): void;
							public marshal(context: com.sun.xml.bind.api.BridgeContext, object: any, contentHandler: org.xml.sax.ContentHandler): void;
							public marshal(context: javax.xml.bind.Marshaller, inMemory: any, contentHandler: org.xml.sax.ContentHandler): void;
							public marshal(context: javax.xml.bind.Marshaller, inMemory: any, result: javax.xml.transform.Result): void;
							public unmarshal(context: com.sun.xml.bind.api.BridgeContext, in1: javax.xml.stream.XMLStreamReader): any;
							public unmarshal(in0: java.io.InputStream): any;
							public unmarshal(context: com.sun.xml.bind.api.BridgeContext, in1: java.io.InputStream): any;
							public unmarshal(in0: javax.xml.stream.XMLStreamReader, au: javax.xml.bind.attachment.AttachmentUnmarshaller): any;
							public marshal(object: any, contentHandler: org.xml.sax.ContentHandler): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export class BridgeContextImpl extends com.sun.xml.bind.api.BridgeContext {
							public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.BridgeContextImpl>;
							public unmarshaller: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallerImpl;
							public marshaller: com.sun.xml.bind.v2.runtime.MarshallerImpl;
							public setAttachmentUnmarshaller(attachmentUnmarshaller0: javax.xml.bind.attachment.AttachmentUnmarshaller): void;
							public setErrorHandler(validationEventHandler0: javax.xml.bind.ValidationEventHandler): void;
							public getAttachmentUnmarshaller(): javax.xml.bind.attachment.AttachmentUnmarshaller;
							public setAttachmentMarshaller(attachmentMarshaller0: javax.xml.bind.attachment.AttachmentMarshaller): void;
							public getAttachmentMarshaller(): javax.xml.bind.attachment.AttachmentMarshaller;
							public setErrorHandler(handler: javax.xml.bind.ValidationEventHandler): void;
							public setAttachmentMarshaller(m: javax.xml.bind.attachment.AttachmentMarshaller): void;
							public setAttachmentUnmarshaller(u: javax.xml.bind.attachment.AttachmentUnmarshaller): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export class BridgeImpl<T>  extends com.sun.xml.bind.v2.runtime.InternalBridge<any> {
							public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.BridgeImpl<any>>;
							public unmarshal(n: org.w3c.dom.Node): any;
							public unmarshal(_u: javax.xml.bind.Unmarshaller, in1: java.io.InputStream): any;
							public marshal(context: com.sun.xml.bind.api.BridgeContext, object: any, output: javax.xml.stream.XMLStreamWriter): void;
							public marshal(object: any, output: java.io.OutputStream, nsContext: javax.xml.namespace.NamespaceContext): void;
							public getTypeReference(): com.sun.xml.bind.api.TypeReference;
							public marshal(object: any, contentHandler: org.xml.sax.ContentHandler, am: javax.xml.bind.attachment.AttachmentMarshaller): void;
							public constructor(context: com.sun.xml.bind.v2.runtime.JAXBContextImpl);
							public unmarshal(_u: javax.xml.bind.Unmarshaller, n: org.w3c.dom.Node): any;
							public marshal(object: any, result: javax.xml.transform.Result): void;
							public constructor(context: com.sun.xml.bind.v2.runtime.JAXBContextImpl, tagName: com.sun.xml.bind.v2.runtime.Name, bi: com.sun.xml.bind.v2.runtime.JaxBeanInfo<any>, typeRef: com.sun.xml.bind.api.TypeReference);
							public marshal(object: any, output: javax.xml.stream.XMLStreamWriter): void;
							public marshal(object: any, output: java.io.OutputStream, nsContext: javax.xml.namespace.NamespaceContext, am: javax.xml.bind.attachment.AttachmentMarshaller): void;
							public marshal(context: com.sun.xml.bind.api.BridgeContext, object: any, result: javax.xml.transform.Result): void;
							public marshal(marshaller0: javax.xml.bind.Marshaller, object1: any, contentHandler2: org.xml.sax.ContentHandler): void;
							public marshal(marshaller0: javax.xml.bind.Marshaller, object1: any, xMLStreamWriter2: javax.xml.stream.XMLStreamWriter): void;
							public unmarshal(_u: javax.xml.bind.Unmarshaller, in1: javax.xml.transform.Source): any;
							public marshal(_m: javax.xml.bind.Marshaller, t: any, output: javax.xml.stream.XMLStreamWriter): void;
							public unmarshal(in0: javax.xml.transform.Source): any;
							public unmarshal(context: com.sun.xml.bind.api.BridgeContext, n: org.w3c.dom.Node): any;
							public marshal(value: any, out: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
							public unmarshal(unmarshaller0: javax.xml.bind.Unmarshaller, xMLStreamReader1: javax.xml.stream.XMLStreamReader): any;
							public marshal(object: any, output: org.w3c.dom.Node): void;
							public marshal(_m: javax.xml.bind.Marshaller, t: any, contentHandler: org.xml.sax.ContentHandler): void;
							public marshal(_m: javax.xml.bind.Marshaller, t: any, output: java.io.OutputStream, nsContext: javax.xml.namespace.NamespaceContext): void;
							public marshal(context: com.sun.xml.bind.api.BridgeContext, object: any, output: java.io.OutputStream, nsContext: javax.xml.namespace.NamespaceContext): void;
							public marshal(marshaller0: javax.xml.bind.Marshaller, object1: any, node2: org.w3c.dom.Node): void;
							public marshal(_m: javax.xml.bind.Marshaller, t: any, output: org.w3c.dom.Node): void;
							public unmarshal(n: org.w3c.dom.Node, au: javax.xml.bind.attachment.AttachmentUnmarshaller): any;
							public unmarshal(unmarshaller0: javax.xml.bind.Unmarshaller, node1: org.w3c.dom.Node): any;
							public marshal(_m: javax.xml.bind.Marshaller, t: any, result: javax.xml.transform.Result): void;
							public unmarshal(context: com.sun.xml.bind.api.BridgeContext, in1: javax.xml.transform.Source): any;
							public marshal(marshaller0: javax.xml.bind.Marshaller, object1: any, result2: javax.xml.transform.Result): void;
							public unmarshal(in0: javax.xml.stream.XMLStreamReader): any;
							public marshal(context: com.sun.xml.bind.api.BridgeContext, object: any, output: org.w3c.dom.Node): void;
							public unmarshal(_u: javax.xml.bind.Unmarshaller, in1: javax.xml.stream.XMLStreamReader): any;
							public unmarshal(in0: javax.xml.transform.Source, au: javax.xml.bind.attachment.AttachmentUnmarshaller): any;
							public unmarshal(unmarshaller0: javax.xml.bind.Unmarshaller, source1: javax.xml.transform.Source): any;
							public marshal(object: any, output: javax.xml.stream.XMLStreamWriter, am: javax.xml.bind.attachment.AttachmentMarshaller): void;
							public unmarshal(unmarshaller0: javax.xml.bind.Unmarshaller, inputStream1: java.io.InputStream): any;
							public marshal(marshaller0: javax.xml.bind.Marshaller, object1: any, outputStream2: java.io.OutputStream, namespaceContext3: javax.xml.namespace.NamespaceContext): void;
							public marshal(context: com.sun.xml.bind.api.BridgeContext, object: any, contentHandler: org.xml.sax.ContentHandler): void;
							public unmarshal(context: com.sun.xml.bind.api.BridgeContext, in1: javax.xml.stream.XMLStreamReader): any;
							public unmarshal(in0: java.io.InputStream): any;
							public unmarshal(context: com.sun.xml.bind.api.BridgeContext, in1: java.io.InputStream): any;
							public unmarshal(in0: javax.xml.stream.XMLStreamReader, au: javax.xml.bind.attachment.AttachmentUnmarshaller): any;
							public marshal(object: any, contentHandler: org.xml.sax.ContentHandler): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export class ClassBeanInfoImpl<BeanT>  extends com.sun.xml.bind.v2.runtime.JaxBeanInfo<any> implements com.sun.xml.bind.v2.runtime.AttributeAccessor<any>  {
							public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.ClassBeanInfoImpl<any>>;
							public properties: native.Array<com.sun.xml.bind.v2.runtime.property.Property<any>>;
							public superClazz: com.sun.xml.bind.v2.runtime.ClassBeanInfoImpl<any>;
							public link(grammar: com.sun.xml.bind.v2.runtime.JAXBContextImpl): void;
							public getElementNamespaceURI(bean: any): string;
							public serializeRoot(bean: any, target: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
							public getElementLocalName(bean: any): string;
							public createInstance(unmarshallingContext0: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext): any;
							public getLoader(jAXBContextImpl0: com.sun.xml.bind.v2.runtime.JAXBContextImpl, boolean1: boolean): com.sun.xml.bind.v2.runtime.unmarshaller.Loader;
							public serializeAttributes(object0: any, xMLSerializer1: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
							public getTransducer(): com.sun.xml.bind.v2.runtime.Transducer<any>;
							public getLoader(context: com.sun.xml.bind.v2.runtime.JAXBContextImpl, typeSubstitutionCapable: boolean): com.sun.xml.bind.v2.runtime.unmarshaller.Loader;
							public reset(bean: any, context: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext): boolean;
							public serializeBody(bean: any, target: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
							public getElementNamespaceURI(object0: any): string;
							public getId(object0: any, xMLSerializer1: com.sun.xml.bind.v2.runtime.XMLSerializer): string;
							public serializeBody(object0: any, xMLSerializer1: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
							public serializeURIs(bean: any, target: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
							public reset(object0: any, unmarshallingContext1: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext): boolean;
							public serializeURIs(object0: any, xMLSerializer1: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
							public getId(bean: any, target: com.sun.xml.bind.v2.runtime.XMLSerializer): string;
							public serializeAttributes(bean: any, target: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
							public serializeRoot(object0: any, xMLSerializer1: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
							public isNilIncluded(): boolean;
							public createInstance(context: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext): any;
							public wrapUp(): void;
							public getElementLocalName(object0: any): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export class CompositeStructureBeanInfo extends com.sun.xml.bind.v2.runtime.JaxBeanInfo<com.sun.xml.bind.api.CompositeStructure> {
							public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.CompositeStructureBeanInfo>;
							public serializeURIs(o: com.sun.xml.bind.api.CompositeStructure, target: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
							public serializeRoot(o: com.sun.xml.bind.api.CompositeStructure, target: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
							public constructor(context: com.sun.xml.bind.v2.runtime.JAXBContextImpl);
							public createInstance(unmarshallingContext0: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext): any;
							public serializeAttributes(object0: any, xMLSerializer1: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
							public getId(o: com.sun.xml.bind.api.CompositeStructure, target: com.sun.xml.bind.v2.runtime.XMLSerializer): string;
							public getLoader(context: com.sun.xml.bind.v2.runtime.JAXBContextImpl, typeSubstitutionCapable: boolean): com.sun.xml.bind.v2.runtime.unmarshaller.Loader;
							public getElementNamespaceURI(o: com.sun.xml.bind.api.CompositeStructure): string;
							public reset(o: com.sun.xml.bind.api.CompositeStructure, context: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext): boolean;
							public serializeBody(o: com.sun.xml.bind.api.CompositeStructure, target: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
							public getTransducer(): com.sun.xml.bind.v2.runtime.Transducer<com.sun.xml.bind.api.CompositeStructure>;
							public getLoader(jAXBContextImpl0: com.sun.xml.bind.v2.runtime.JAXBContextImpl, boolean1: boolean): com.sun.xml.bind.v2.runtime.unmarshaller.Loader;
							public getTransducer(): com.sun.xml.bind.v2.runtime.Transducer<any>;
							public getElementLocalName(o: com.sun.xml.bind.api.CompositeStructure): string;
							public createInstance(context: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext): com.sun.xml.bind.api.CompositeStructure;
							public serializeAttributes(o: com.sun.xml.bind.api.CompositeStructure, target: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
							public getElementNamespaceURI(object0: any): string;
							public getId(object0: any, xMLSerializer1: com.sun.xml.bind.v2.runtime.XMLSerializer): string;
							public constructor(grammar: com.sun.xml.bind.v2.runtime.JAXBContextImpl, rti: com.sun.xml.bind.v2.model.runtime.RuntimeTypeInfo, jaxbType: java.lang.Class<any>, typeNames: native.Array<javax.xml.namespace.QName>, isElement: boolean, isImmutable: boolean, hasLifecycleEvents: boolean);
							public serializeBody(object0: any, xMLSerializer1: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
							public constructor(grammar: com.sun.xml.bind.v2.runtime.JAXBContextImpl, rti: com.sun.xml.bind.v2.model.runtime.RuntimeTypeInfo, jaxbType: java.lang.Class<any>, isElement: boolean, isImmutable: boolean, hasLifecycleEvents: boolean);
							public reset(object0: any, unmarshallingContext1: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext): boolean;
							public serializeURIs(object0: any, xMLSerializer1: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
							public serializeRoot(object0: any, xMLSerializer1: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
							public constructor(grammar: com.sun.xml.bind.v2.runtime.JAXBContextImpl, rti: com.sun.xml.bind.v2.model.runtime.RuntimeTypeInfo, jaxbType: java.lang.Class<any>, typeName: javax.xml.namespace.QName, isElement: boolean, isImmutable: boolean, hasLifecycleEvents: boolean);
							public getElementLocalName(object0: any): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export class ContentHandlerAdaptor extends org.xml.sax.helpers.DefaultHandler {
							public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.ContentHandlerAdaptor>;
							public startPrefixMapping(prefix: string, uri: string): void;
							public endElement(uri: string, localName: string, qName: string): void;
							public startDocument(): void;
							public endPrefixMapping(prefix: string): void;
							public startElement(namespaceURI: string, localName: string, qName: string, atts: org.xml.sax.Attributes): void;
							public characters(ch: native.Array<string>, start: number, length: number): void;
							public warning(e: org.xml.sax.SAXParseException): void;
							public endDocument(): void;
							public ignorableWhitespace(ch: native.Array<string>, start: number, length: number): void;
							public resolveEntity(publicId: string, systemId: string): org.xml.sax.InputSource;
							public notationDecl(name: string, publicId: string, systemId: string): void;
							public unparsedEntityDecl(name: string, publicId: string, systemId: string, notationName: string): void;
							public skippedEntity(name: string): void;
							public endElement(namespaceURI: string, localName: string, qName: string): void;
							public fatalError(e: org.xml.sax.SAXParseException): void;
							public startElement(uri: string, localName: string, qName: string, attributes: org.xml.sax.Attributes): void;
							public setDocumentLocator(locator: org.xml.sax.Locator): void;
							public processingInstruction(target: string, data: string): void;
							public error(e: org.xml.sax.SAXParseException): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export abstract class Coordinator extends java.lang.Object implements org.xml.sax.ErrorHandler, javax.xml.bind.ValidationEventHandler {
							public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.Coordinator>;
							public constructor();
							public pushCoordinator(): void;
							public warning(exception: org.xml.sax.SAXParseException): void;
							public static _getInstance(): com.sun.xml.bind.v2.runtime.Coordinator;
							public putAdapter(c: java.lang.Class<any>, a: javax.xml.bind.annotation.adapters.XmlAdapter): javax.xml.bind.annotation.adapters.XmlAdapter;
							public fatalError(exception: org.xml.sax.SAXParseException): void;
							public error(exception: org.xml.sax.SAXParseException): void;
							public popCoordinator(): void;
							public getAdapter(key: java.lang.Class<any>): javax.xml.bind.annotation.adapters.XmlAdapter;
							public getLocation(): javax.xml.bind.ValidationEventLocator;
							public containsAdapter(type: java.lang.Class<any>): boolean;
							public handleEvent(validationEvent0: javax.xml.bind.ValidationEvent): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export class DomPostInitAction extends java.lang.Object implements java.lang.Runnable {
							public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.DomPostInitAction>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export class ElementBeanInfoImpl extends com.sun.xml.bind.v2.runtime.JaxBeanInfo<javax.xml.bind.JAXBElement> {
							public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.ElementBeanInfoImpl>;
							public expectedType: java.lang.Class<any>;
							public getTransducer(): com.sun.xml.bind.v2.runtime.Transducer<javax.xml.bind.JAXBElement>;
							public createInstance(unmarshallingContext0: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext): any;
							public serializeRoot(e: javax.xml.bind.JAXBElement, target: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
							public serializeAttributes(object0: any, xMLSerializer1: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
							public getLoader(context: com.sun.xml.bind.v2.runtime.JAXBContextImpl, typeSubstitutionCapable: boolean): com.sun.xml.bind.v2.runtime.unmarshaller.Loader;
							public getElementLocalName(e: javax.xml.bind.JAXBElement): string;
							public serializeBody(element: javax.xml.bind.JAXBElement, target: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
							public link(grammar: com.sun.xml.bind.v2.runtime.JAXBContextImpl): void;
							public getLoader(jAXBContextImpl0: com.sun.xml.bind.v2.runtime.JAXBContextImpl, boolean1: boolean): com.sun.xml.bind.v2.runtime.unmarshaller.Loader;
							public constructor(grammar: com.sun.xml.bind.v2.runtime.JAXBContextImpl);
							public getTransducer(): com.sun.xml.bind.v2.runtime.Transducer<any>;
							public getElementNamespaceURI(e: javax.xml.bind.JAXBElement): string;
							public getId(e: javax.xml.bind.JAXBElement, target: com.sun.xml.bind.v2.runtime.XMLSerializer): string;
							public getElementNamespaceURI(object0: any): string;
							public createInstanceFromValue(o: any): javax.xml.bind.JAXBElement;
							public getId(object0: any, xMLSerializer1: com.sun.xml.bind.v2.runtime.XMLSerializer): string;
							public constructor(grammar: com.sun.xml.bind.v2.runtime.JAXBContextImpl, rti: com.sun.xml.bind.v2.model.runtime.RuntimeTypeInfo, jaxbType: java.lang.Class<any>, typeNames: native.Array<javax.xml.namespace.QName>, isElement: boolean, isImmutable: boolean, hasLifecycleEvents: boolean);
							public serializeBody(object0: any, xMLSerializer1: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
							public serializeURIs(e: javax.xml.bind.JAXBElement, target: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
							public constructor(grammar: com.sun.xml.bind.v2.runtime.JAXBContextImpl, rti: com.sun.xml.bind.v2.model.runtime.RuntimeTypeInfo, jaxbType: java.lang.Class<any>, isElement: boolean, isImmutable: boolean, hasLifecycleEvents: boolean);
							public reset(object0: any, unmarshallingContext1: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext): boolean;
							public serializeURIs(object0: any, xMLSerializer1: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
							public serializeRoot(object0: any, xMLSerializer1: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
							public createInstance(context: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext): javax.xml.bind.JAXBElement;
							public constructor(grammar: com.sun.xml.bind.v2.runtime.JAXBContextImpl, rti: com.sun.xml.bind.v2.model.runtime.RuntimeTypeInfo, jaxbType: java.lang.Class<any>, typeName: javax.xml.namespace.QName, isElement: boolean, isImmutable: boolean, hasLifecycleEvents: boolean);
							public getElementLocalName(object0: any): string;
							public serializeAttributes(e: javax.xml.bind.JAXBElement, target: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
							public wrapUp(): void;
							public reset(e: javax.xml.bind.JAXBElement, context: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext): boolean;
						}
						export module ElementBeanInfoImpl {
							export class IntercepterLoader extends com.sun.xml.bind.v2.runtime.unmarshaller.Loader implements com.sun.xml.bind.v2.runtime.unmarshaller.Intercepter {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.ElementBeanInfoImpl.IntercepterLoader>;
								public intercept(state: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext.State, o: any): any;
								public startElement(state: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext.State, ea: com.sun.xml.bind.v2.runtime.unmarshaller.TagName): void;
								public constructor(param0: com.sun.xml.bind.v2.runtime.ElementBeanInfoImpl, core: com.sun.xml.bind.v2.runtime.unmarshaller.Loader);
								public constructor(expectText: boolean);
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export abstract class FilterTransducer<T>  extends com.sun.xml.bind.v2.runtime.Transducer<any> {
							public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.FilterTransducer<any>>;
							public core: com.sun.xml.bind.v2.runtime.Transducer<any>;
							public writeText(w: com.sun.xml.bind.v2.runtime.XMLSerializer, o: any, fieldName: string): void;
							public useNamespace(): boolean;
							public declareNamespace(o: any, w: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
							public parse(lexical: string): any;
							public writeLeafElement(w: com.sun.xml.bind.v2.runtime.XMLSerializer, tagName: com.sun.xml.bind.v2.runtime.Name, o: any, fieldName: string): void;
							public constructor(core: com.sun.xml.bind.v2.runtime.Transducer<any>);
							public print(o: any): string;
							public getTypeName(instance: any): javax.xml.namespace.QName;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export class IllegalAnnotationException extends javax.xml.bind.JAXBException {
							public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.IllegalAnnotationException>;
							public constructor(message: string, exception: java.lang.Throwable);
							public constructor();
							public constructor(message: string, errorCode: string);
							public constructor(message: string, src1: com.sun.xml.bind.v2.model.annotation.Locatable, src2: com.sun.xml.bind.v2.model.annotation.Locatable);
							public getSourcePos(): java.util.List<java.util.List<com.sun.xml.bind.v2.runtime.Location>>;
							public toString(): string;
							public constructor(message: string, errorCode: string, exception: java.lang.Throwable);
							public constructor(message: string, cause: java.lang.Throwable, src: com.sun.xml.bind.v2.model.annotation.Locatable);
							public constructor(message: string);
							public constructor(message: string, src: com.sun.xml.bind.v2.model.annotation.Locatable);
							public constructor(message: string, src1: java.lang.annotation.Annotation, src2: java.lang.annotation.Annotation);
							public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
							public constructor(message: string, src: java.lang.annotation.Annotation);
							public constructor(message: string, src1: java.lang.annotation.Annotation, src2: com.sun.xml.bind.v2.model.annotation.Locatable);
							public constructor(exception: java.lang.Throwable);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export class IllegalAnnotationsException extends javax.xml.bind.JAXBException {
							public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.IllegalAnnotationsException>;
							public constructor(message: string, exception: java.lang.Throwable);
							public constructor();
							public constructor(message: string);
							public constructor(errors: java.util.List<com.sun.xml.bind.v2.runtime.IllegalAnnotationException>);
							public constructor(message: string, errorCode: string);
							public toString(): string;
							public constructor(message: string, errorCode: string, exception: java.lang.Throwable);
							public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
							public getErrors(): java.util.List<com.sun.xml.bind.v2.runtime.IllegalAnnotationException>;
							public constructor(exception: java.lang.Throwable);
						}
						export module IllegalAnnotationsException {
							export class Builder extends java.lang.Object implements com.sun.xml.bind.v2.model.core.ErrorHandler {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.IllegalAnnotationsException.Builder>;
								public error(e: com.sun.xml.bind.v2.runtime.IllegalAnnotationException): void;
								public constructor();
								public check(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export class InlineBinaryTransducer<V>  extends com.sun.xml.bind.v2.runtime.FilterTransducer<any> {
							public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.InlineBinaryTransducer<any>>;
							public writeText(w: com.sun.xml.bind.v2.runtime.XMLSerializer, o: any, fieldName: string): void;
							public useNamespace(): boolean;
							public declareNamespace(o: any, w: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
							public parse(lexical: string): any;
							public writeLeafElement(w: com.sun.xml.bind.v2.runtime.XMLSerializer, tagName: com.sun.xml.bind.v2.runtime.Name, o: any, fieldName: string): void;
							public constructor(core: com.sun.xml.bind.v2.runtime.Transducer<any>);
							public print(o: any): string;
							public getTypeName(instance: any): javax.xml.namespace.QName;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export abstract class InternalBridge<T>  extends com.sun.xml.bind.api.Bridge<any> {
							public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.InternalBridge<any>>;
							public constructor(context: com.sun.xml.bind.v2.runtime.JAXBContextImpl);
							public getContext(): com.sun.xml.bind.api.JAXBRIContext;
							public getContext(): com.sun.xml.bind.v2.runtime.JAXBContextImpl;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export class JAXBContextImpl extends com.sun.xml.bind.api.JAXBRIContext {
							public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.JAXBContextImpl>;
							public beanInfos: java.util.Map<com.sun.xml.bind.v2.model.runtime.RuntimeTypeInfo,com.sun.xml.bind.v2.runtime.JaxBeanInfo<any>>;
							public marshallerPool: com.sun.istack.Pool<javax.xml.bind.Marshaller>;
							public unmarshallerPool: com.sun.istack.Pool<javax.xml.bind.Unmarshaller>;
							public nameBuilder: com.sun.xml.bind.v2.runtime.NameBuilder;
							public nameList: com.sun.xml.bind.v2.runtime.NameList;
							public c14nSupport: boolean;
							public xmlAccessorFactorySupport: boolean;
							public allNillable: boolean;
							public retainPropertyInfo: boolean;
							public supressAccessorWarnings: boolean;
							public improvedXsiTypeHandling: boolean;
							public disableSecurityProcessing: boolean;
							public fastBoot: boolean;
							public backupWithParentNamespace: java.lang.Boolean;
							public getElementName(o: any): javax.xml.namespace.QName;
							public getRuntimeTypeInfoSet(): com.sun.xml.bind.v2.model.runtime.RuntimeTypeInfoSet;
							public createAugmented(clazz: java.lang.Class<any>): com.sun.xml.bind.v2.runtime.JAXBContextImpl;
							public getOrCreate(ci: com.sun.xml.bind.v2.model.runtime.RuntimeClassInfo): com.sun.xml.bind.v2.runtime.ClassBeanInfoImpl<any>;
							public getXMIMEContentType(o: any): string;
							public createMarshaller(): com.sun.xml.bind.v2.runtime.MarshallerImpl;
							public createBridge(ref: com.sun.xml.bind.api.TypeReference): com.sun.xml.bind.api.Bridge<any>;
							public getTypeName(typeReference0: com.sun.xml.bind.api.TypeReference): javax.xml.namespace.QName;
							public getBeanInfo(o: any): com.sun.xml.bind.v2.runtime.JaxBeanInfo<any>;
							public getElementName(object0: any): javax.xml.namespace.QName;
							public getNearestTypeName(name: javax.xml.namespace.QName): string;
							public getBuildId(): string;
							public getElement(scope: java.lang.Class<any>, name: javax.xml.namespace.QName): com.sun.xml.bind.v2.runtime.ElementBeanInfoImpl;
							public getOrCreate(ai: com.sun.xml.bind.v2.model.runtime.RuntimeArrayInfo): com.sun.xml.bind.v2.runtime.JaxBeanInfo<any>;
							public static createTransformerHandler(disableSecureProcessing: boolean): javax.xml.transform.sax.TransformerHandler;
							public getBeanInfo(clazz: java.lang.Class<any>, fatal: boolean): com.sun.xml.bind.v2.runtime.JaxBeanInfo<any>;
							public getElementPropertyAccessor(wrapperBean: java.lang.Class<any>, nsUri: string, localName: string): com.sun.xml.bind.api.RawAccessor<any,any>;
							public createJAXBIntrospector(): javax.xml.bind.JAXBIntrospector;
							public getGlobalType(name: javax.xml.namespace.QName): com.sun.xml.bind.v2.runtime.JaxBeanInfo<any>;
							public generateEpisode(output: javax.xml.transform.Result): void;
							public selectRootLoader(state: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext.State, tag: com.sun.xml.bind.v2.runtime.unmarshaller.TagName): com.sun.xml.bind.v2.runtime.unmarshaller.Loader;
							public getOrCreate(e: com.sun.xml.bind.v2.model.runtime.RuntimeTypeInfo): com.sun.xml.bind.v2.runtime.JaxBeanInfo<any>;
							public createUnmarshaller(): com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallerImpl;
							public getOrCreate(eli: com.sun.xml.bind.v2.model.runtime.RuntimeEnumLeafInfo): com.sun.xml.bind.v2.runtime.JaxBeanInfo<any>;
							public toString(): string;
							public createBridge(typeReference0: com.sun.xml.bind.api.TypeReference): com.sun.xml.bind.api.Bridge<any>;
							public createBinder(domType: java.lang.Class<any>): javax.xml.bind.Binder;
							public getElementName(o: java.lang.Class<any>): javax.xml.namespace.QName;
							public generateEpisode(result0: javax.xml.transform.Result): void;
							public createBridgeContext(): com.sun.xml.bind.api.BridgeContext;
							public getXmlNsSet(): java.util.Set<javax.xml.bind.annotation.XmlNs>;
							public getUTF8NameTable(): native.Array<com.sun.xml.bind.v2.runtime.output.Encoded>;
							public getNumberOfAttributeNames(): number;
							public getNumberOfElementNames(): number;
							public createValidator(): javax.xml.bind.Validator;
							public getBeanInfo(clazz: java.lang.Class<any>): com.sun.xml.bind.v2.runtime.JaxBeanInfo<any>;
							public getValidRootNames(): java.util.Set<javax.xml.namespace.QName>;
							public hasSwaRef(): boolean;
							public createBinder(): javax.xml.bind.Binder<org.w3c.dom.Node>;
							public getBeanInfo(o: any, fatal: boolean): com.sun.xml.bind.v2.runtime.JaxBeanInfo<any>;
							public createMarshaller(): javax.xml.bind.Marshaller;
							public generateSchema(schemaOutputResolver0: javax.xml.bind.SchemaOutputResolver): void;
							/** @deprecated */
							public createValidator(): javax.xml.bind.Validator;
							public getElementName(class0: java.lang.Class<any>): javax.xml.namespace.QName;
							public createUnmarshaller(): javax.xml.bind.Unmarshaller;
							public getElementPropertyAccessor(class0: java.lang.Class<any>, string1: string, string2: string): com.sun.xml.bind.api.RawAccessor<any,any>;
							public getNumberOfLocalNames(): number;
							public getTypeName(tr: com.sun.xml.bind.api.TypeReference): javax.xml.namespace.QName;
							public getTypeInfoSet(): com.sun.xml.bind.v2.model.runtime.RuntimeTypeInfoSet;
							public generateSchema(outputResolver: javax.xml.bind.SchemaOutputResolver): void;
							public getKnownNamespaceURIs(): java.util.List<string>;
						}
						export module JAXBContextImpl {
							export class JAXBContextBuilder extends java.lang.Object {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.JAXBContextImpl.JAXBContextBuilder>;
								public setDefaultNsUri(val: string): com.sun.xml.bind.v2.runtime.JAXBContextImpl.JAXBContextBuilder;
								public constructor(baseImpl: com.sun.xml.bind.v2.runtime.JAXBContextImpl);
								public setAnnotationReader(val: com.sun.xml.bind.v2.model.annotation.RuntimeAnnotationReader): com.sun.xml.bind.v2.runtime.JAXBContextImpl.JAXBContextBuilder;
								public constructor();
								public setXmlAccessorFactorySupport(val: boolean): com.sun.xml.bind.v2.runtime.JAXBContextImpl.JAXBContextBuilder;
								public setRetainPropertyInfo(val: boolean): com.sun.xml.bind.v2.runtime.JAXBContextImpl.JAXBContextBuilder;
								public setClasses(val: native.Array<java.lang.Class<any>>): com.sun.xml.bind.v2.runtime.JAXBContextImpl.JAXBContextBuilder;
								public build(): com.sun.xml.bind.v2.runtime.JAXBContextImpl;
								public setImprovedXsiTypeHandling(val: boolean): com.sun.xml.bind.v2.runtime.JAXBContextImpl.JAXBContextBuilder;
								public setBackupWithParentNamespace(backupWithParentNamespace: java.lang.Boolean): com.sun.xml.bind.v2.runtime.JAXBContextImpl.JAXBContextBuilder;
								public setDisableSecurityProcessing(val: boolean): com.sun.xml.bind.v2.runtime.JAXBContextImpl.JAXBContextBuilder;
								public setTypeRefs(val: java.util.Collection<com.sun.xml.bind.api.TypeReference>): com.sun.xml.bind.v2.runtime.JAXBContextImpl.JAXBContextBuilder;
								public setAllNillable(val: boolean): com.sun.xml.bind.v2.runtime.JAXBContextImpl.JAXBContextBuilder;
								public setC14NSupport(val: boolean): com.sun.xml.bind.v2.runtime.JAXBContextImpl.JAXBContextBuilder;
								public setSupressAccessorWarnings(val: boolean): com.sun.xml.bind.v2.runtime.JAXBContextImpl.JAXBContextBuilder;
								public setSubclassReplacements(val: java.util.Map<java.lang.Class<any>,java.lang.Class<any>>): com.sun.xml.bind.v2.runtime.JAXBContextImpl.JAXBContextBuilder;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export abstract class JaxBeanInfo<BeanT>  extends java.lang.Object {
							public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.JaxBeanInfo<any>>;
							public flag: number;
							public jaxbType: java.lang.Class<BeanT>;
							public isElement(): boolean;
							public hasElementOnlyContentModel(): boolean;
							public invokeAfterUnmarshalMethod(unm: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallerImpl, child: any, parent: any): void;
							public hasAfterMarshalMethod(): boolean;
							public isImmutable(): boolean;
							public setLifecycleFlags(): void;
							public isNilIncluded(): boolean;
							public serializeRoot(object0: BeanT, xMLSerializer1: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
							public getElementNamespaceURI(object0: BeanT): string;
							public getLifecycleMethods(): com.sun.xml.bind.v2.runtime.LifecycleMethods;
							public hasAfterUnmarshalMethod(): boolean;
							public hasBeforeMarshalMethod(): boolean;
							public link(grammar: com.sun.xml.bind.v2.runtime.JAXBContextImpl): void;
							public hasElementOnlyContentModel(value: boolean): void;
							public getTransducer(): com.sun.xml.bind.v2.runtime.Transducer<BeanT>;
							public constructor(grammar: com.sun.xml.bind.v2.runtime.JAXBContextImpl, rti: com.sun.xml.bind.v2.model.runtime.RuntimeTypeInfo, jaxbType: java.lang.Class<BeanT>, isElement: boolean, isImmutable: boolean, hasLifecycleEvents: boolean);
							public getTypeName(instance: BeanT): javax.xml.namespace.QName;
							public getLoader(jAXBContextImpl0: com.sun.xml.bind.v2.runtime.JAXBContextImpl, boolean1: boolean): com.sun.xml.bind.v2.runtime.unmarshaller.Loader;
							public getElementLocalName(object0: BeanT): string;
							public createInstance(unmarshallingContext0: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext): BeanT;
							public constructor(grammar: com.sun.xml.bind.v2.runtime.JAXBContextImpl, rti: com.sun.xml.bind.v2.model.runtime.RuntimeTypeInfo, jaxbType: java.lang.Class<BeanT>, typeName: javax.xml.namespace.QName, isElement: boolean, isImmutable: boolean, hasLifecycleEvents: boolean);
							public getTypeNames(): java.util.Collection<javax.xml.namespace.QName>;
							public hasBeforeUnmarshalMethod(): boolean;
							public lookForLifecycleMethods(): boolean;
							public serializeURIs(object0: BeanT, xMLSerializer1: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
							public constructor(grammar: com.sun.xml.bind.v2.runtime.JAXBContextImpl, rti: com.sun.xml.bind.v2.model.runtime.RuntimeTypeInfo, jaxbType: java.lang.Class<BeanT>, typeNames: native.Array<javax.xml.namespace.QName>, isElement: boolean, isImmutable: boolean, hasLifecycleEvents: boolean);
							public getId(object0: BeanT, xMLSerializer1: com.sun.xml.bind.v2.runtime.XMLSerializer): string;
							public serializeBody(object0: BeanT, xMLSerializer1: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
							public reset(object0: BeanT, unmarshallingContext1: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext): boolean;
							public wrapUp(): void;
							public invokeBeforeUnmarshalMethod(unm: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallerImpl, child: any, parent: any): void;
							public serializeAttributes(object0: BeanT, xMLSerializer1: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export class LeafBeanInfoImpl<BeanT>  extends com.sun.xml.bind.v2.runtime.JaxBeanInfo<any> {
							public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.LeafBeanInfoImpl<any>>;
							public createInstance(unmarshallingContext0: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext): any;
							public serializeAttributes(object0: any, xMLSerializer1: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
							public getLoader(context: com.sun.xml.bind.v2.runtime.JAXBContextImpl, typeSubstitutionCapable: boolean): com.sun.xml.bind.v2.runtime.unmarshaller.Loader;
							public serializeURIs(bean: any, target: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
							public getId(bean: any, target: com.sun.xml.bind.v2.runtime.XMLSerializer): string;
							public getElementNamespaceURI(t: any): string;
							public getTypeName(instance: any): javax.xml.namespace.QName;
							public createInstance(context: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext): any;
							public serializeRoot(bean: any, target: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
							public getLoader(jAXBContextImpl0: com.sun.xml.bind.v2.runtime.JAXBContextImpl, boolean1: boolean): com.sun.xml.bind.v2.runtime.unmarshaller.Loader;
							public getTransducer(): com.sun.xml.bind.v2.runtime.Transducer<any>;
							public reset(bean: any, context: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext): boolean;
							public getElementNamespaceURI(object0: any): string;
							public getElementLocalName(t: any): string;
							public getId(object0: any, xMLSerializer1: com.sun.xml.bind.v2.runtime.XMLSerializer): string;
							public constructor(grammar: com.sun.xml.bind.v2.runtime.JAXBContextImpl, rti: com.sun.xml.bind.v2.model.runtime.RuntimeTypeInfo, jaxbType: java.lang.Class<any>, typeNames: native.Array<javax.xml.namespace.QName>, isElement: boolean, isImmutable: boolean, hasLifecycleEvents: boolean);
							public serializeBody(object0: any, xMLSerializer1: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
							public constructor(grammar: com.sun.xml.bind.v2.runtime.JAXBContextImpl, rti: com.sun.xml.bind.v2.model.runtime.RuntimeTypeInfo, jaxbType: java.lang.Class<any>, isElement: boolean, isImmutable: boolean, hasLifecycleEvents: boolean);
							public reset(object0: any, unmarshallingContext1: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext): boolean;
							public serializeURIs(object0: any, xMLSerializer1: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
							public serializeBody(bean: any, w: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
							public serializeAttributes(bean: any, target: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
							public serializeRoot(object0: any, xMLSerializer1: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
							public constructor(grammar: com.sun.xml.bind.v2.runtime.JAXBContextImpl, li: com.sun.xml.bind.v2.model.runtime.RuntimeLeafInfo);
							public constructor(grammar: com.sun.xml.bind.v2.runtime.JAXBContextImpl, rti: com.sun.xml.bind.v2.model.runtime.RuntimeTypeInfo, jaxbType: java.lang.Class<any>, typeName: javax.xml.namespace.QName, isElement: boolean, isImmutable: boolean, hasLifecycleEvents: boolean);
							public getElementLocalName(object0: any): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export class LifecycleMethods extends java.lang.Object {
							public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.LifecycleMethods>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export class Location extends java.lang.Object {
							public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.Location>;
							/**
							 * Constructs a new instance of the com.sun.xml.bind.v2.runtime.Location interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								toString(): string;
							});
							public constructor();
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export class MarshallerImpl extends javax.xml.bind.helpers.AbstractMarshallerImpl implements javax.xml.bind.ValidationEventHandler {
							public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.MarshallerImpl>;
							public serializer: com.sun.xml.bind.v2.runtime.XMLSerializer;
							public static INDENT_STRING: string;
							public static PREFIX_MAPPER: string;
							public static ENCODING_HANDLER: string;
							public static ENCODING_HANDLER2: string;
							public static XMLDECLARATION: string;
							public static XML_HEADERS: string;
							public static C14N: string;
							public static OBJECT_IDENTITY_CYCLE_DETECTION: string;
							public getNode(obj: any): org.w3c.dom.Node;
							public marshal(obj: any, handler: org.xml.sax.ContentHandler): void;
							public setListener(listener: javax.xml.bind.Marshaller.Listener): void;
							public createWriter(os: java.io.OutputStream, encoding: string): com.sun.xml.bind.v2.runtime.output.XmlOutput;
							public marshal(obj: any, output: com.sun.xml.bind.v2.runtime.output.XmlOutput): void;
							public marshal(target: any, result: javax.xml.transform.Result): void;
							public handleEvent(event: javax.xml.bind.ValidationEvent): boolean;
							public marshal(obj: any, out: java.io.OutputStream, inscopeNamespace: javax.xml.namespace.NamespaceContext): void;
							public marshal(obj: any, node: org.w3c.dom.Node): void;
							public setProperty(name: string, value: any): void;
							public setAttachmentMarshaller(am: javax.xml.bind.attachment.AttachmentMarshaller): void;
							public marshal(obj: any, os: java.io.OutputStream): void;
							public marshal(obj: any, w: java.io.Writer): void;
							public write(rootTagName: com.sun.xml.bind.v2.runtime.Name, bi: com.sun.xml.bind.v2.runtime.JaxBeanInfo<any>, obj: any, out: com.sun.xml.bind.v2.runtime.output.XmlOutput, postInitAction: java.lang.Runnable): void;
							public setSchema(schema: javax.xml.validation.Schema): void;
							public constructor();
							public getProperty(name: string): any;
							public getAdapter(type: java.lang.Class<any>): javax.xml.bind.annotation.adapters.XmlAdapter;
							public setEventHandler(handler: javax.xml.bind.ValidationEventHandler): void;
							public marshal(jaxbElement: any, output: java.io.File): void;
							public setAdapter(type: java.lang.Class<any>, adapter: javax.xml.bind.annotation.adapters.XmlAdapter): void;
							public createWriter(w: java.io.Writer, encoding: string): com.sun.xml.bind.v2.runtime.output.XmlOutput;
							public setSchema(s: javax.xml.validation.Schema): void;
							public marshal(obj: any, writer: javax.xml.stream.XMLStreamWriter): void;
							public createEscapeHandler(encoding: string): com.sun.xml.bind.marshaller.CharacterEscapeHandler;
							public getSchema(): javax.xml.validation.Schema;
							public createWriter(os: java.io.OutputStream): com.sun.xml.bind.v2.runtime.output.XmlOutput;
							public setAdapter(adapter: javax.xml.bind.annotation.adapters.XmlAdapter): void;
							public getAttachmentMarshaller(): javax.xml.bind.attachment.AttachmentMarshaller;
							public marshal(obj: any, writer: javax.xml.stream.XMLEventWriter): void;
							public constructor(c: com.sun.xml.bind.v2.runtime.JAXBContextImpl, assoc: com.sun.xml.bind.v2.runtime.AssociationMap<any>);
							public getContext(): com.sun.xml.bind.v2.runtime.JAXBContextImpl;
							public createWriter(w: java.io.Writer): com.sun.xml.bind.v2.runtime.output.XmlOutput;
							public getListener(): javax.xml.bind.Marshaller.Listener;
							public getEventHandler(): javax.xml.bind.ValidationEventHandler;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export class Messages {
							public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.Messages>;
							public static ILLEGAL_PARAMETER: com.sun.xml.bind.v2.runtime.Messages;
							public static UNABLE_TO_FIND_CONVERSION_METHOD: com.sun.xml.bind.v2.runtime.Messages;
							public static MISSING_ID: com.sun.xml.bind.v2.runtime.Messages;
							public static NOT_IMPLEMENTED_IN_2_0: com.sun.xml.bind.v2.runtime.Messages;
							public static UNRECOGNIZED_ELEMENT_NAME: com.sun.xml.bind.v2.runtime.Messages;
							public static TYPE_MISMATCH: com.sun.xml.bind.v2.runtime.Messages;
							public static MISSING_OBJECT: com.sun.xml.bind.v2.runtime.Messages;
							public static NOT_IDENTIFIABLE: com.sun.xml.bind.v2.runtime.Messages;
							public static DANGLING_IDREF: com.sun.xml.bind.v2.runtime.Messages;
							public static NULL_OUTPUT_RESOLVER: com.sun.xml.bind.v2.runtime.Messages;
							public static UNABLE_TO_MARSHAL_NON_ELEMENT: com.sun.xml.bind.v2.runtime.Messages;
							public static UNABLE_TO_MARSHAL_UNBOUND_CLASS: com.sun.xml.bind.v2.runtime.Messages;
							public static UNSUPPORTED_PROPERTY: com.sun.xml.bind.v2.runtime.Messages;
							public static NULL_PROPERTY_NAME: com.sun.xml.bind.v2.runtime.Messages;
							public static MUST_BE_X: com.sun.xml.bind.v2.runtime.Messages;
							public static NOT_MARSHALLABLE: com.sun.xml.bind.v2.runtime.Messages;
							public static UNSUPPORTED_RESULT: com.sun.xml.bind.v2.runtime.Messages;
							public static UNSUPPORTED_ENCODING: com.sun.xml.bind.v2.runtime.Messages;
							public static SUBSTITUTED_BY_ANONYMOUS_TYPE: com.sun.xml.bind.v2.runtime.Messages;
							public static CYCLE_IN_MARSHALLER: com.sun.xml.bind.v2.runtime.Messages;
							public static UNABLE_TO_DISCOVER_EVENTHANDLER: com.sun.xml.bind.v2.runtime.Messages;
							public static ELEMENT_NEEDED_BUT_FOUND_DOCUMENT: com.sun.xml.bind.v2.runtime.Messages;
							public static UNKNOWN_CLASS: com.sun.xml.bind.v2.runtime.Messages;
							public static FAILED_TO_GENERATE_SCHEMA: com.sun.xml.bind.v2.runtime.Messages;
							public static ERROR_PROCESSING_SCHEMA: com.sun.xml.bind.v2.runtime.Messages;
							public static ILLEGAL_CONTENT: com.sun.xml.bind.v2.runtime.Messages;
							public format(objects0: native.Array<any>): string;
							public static values(): native.Array<com.sun.xml.bind.v2.runtime.Messages>;
							public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
							public static valueOf(name: string): com.sun.xml.bind.v2.runtime.Messages;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export class MimeTypedTransducer<V>  extends com.sun.xml.bind.v2.runtime.FilterTransducer<any> {
							public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.MimeTypedTransducer<any>>;
							public writeText(w: com.sun.xml.bind.v2.runtime.XMLSerializer, o: any, fieldName: string): void;
							public useNamespace(): boolean;
							public declareNamespace(o: any, w: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
							public parse(lexical: string): any;
							public constructor(core: com.sun.xml.bind.v2.runtime.Transducer<any>, expectedMimeType: javax.activation.MimeType);
							public writeLeafElement(w: com.sun.xml.bind.v2.runtime.XMLSerializer, tagName: com.sun.xml.bind.v2.runtime.Name, o: any, fieldName: string): void;
							public constructor(core: com.sun.xml.bind.v2.runtime.Transducer<any>);
							public print(o: any): string;
							public getTypeName(instance: any): javax.xml.namespace.QName;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export class Name extends java.lang.Comparable<com.sun.xml.bind.v2.runtime.Name> {
							public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.Name>;
							public nsUri: string;
							public localName: string;
							public nsUriIndex: number;
							public localNameIndex: number;
							public qNameIndex: number;
							public isAttribute: boolean;
							public compareTo(that: com.sun.xml.bind.v2.runtime.Name): number;
							public equals(nsUri: string, localName: string): boolean;
							public equals(obj: any): boolean;
							public toString(): string;
							public toQName(): javax.xml.namespace.QName;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export class NameBuilder extends java.lang.Object {
							public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.NameBuilder>;
							public constructor();
							public createAttributeName(name: javax.xml.namespace.QName): com.sun.xml.bind.v2.runtime.Name;
							public conclude(): com.sun.xml.bind.v2.runtime.NameList;
							public createElementName(name: javax.xml.namespace.QName): com.sun.xml.bind.v2.runtime.Name;
							public createElementName(nsUri: string, localName: string): com.sun.xml.bind.v2.runtime.Name;
							public createAttributeName(nsUri: string, localName: string): com.sun.xml.bind.v2.runtime.Name;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export class NameList extends java.lang.Object {
							public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.NameList>;
							public namespaceURIs: native.Array<string>;
							public nsUriCannotBeDefaulted: native.Array<boolean>;
							public localNames: native.Array<string>;
							public numberOfElementNames: number;
							public numberOfAttributeNames: number;
							public constructor(namespaceURIs: native.Array<string>, nsUriCannotBeDefaulted: native.Array<boolean>, localNames: native.Array<string>, numberElementNames: number, numberAttributeNames: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export class NamespaceContext2 extends java.lang.Object implements javax.xml.namespace.NamespaceContext {
							public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.NamespaceContext2>;
							/**
							 * Constructs a new instance of the com.sun.xml.bind.v2.runtime.NamespaceContext2 interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								declareNamespace(string0: string, string1: string, boolean2: boolean): string;
								force(string0: string, string1: string): number;
								getNamespaceURI(string0: string): string;
								getPrefix(string0: string): string;
								getPrefixes(string0: string): java.util.Iterator<any>;
							});
							public constructor();
							public getNamespaceURI(string0: string): string;
							public declareNamespace(string0: string, string1: string, boolean2: boolean): string;
							public getPrefixes(string0: string): java.util.Iterator<any>;
							public getPrefix(string0: string): string;
							public force(string0: string, string1: string): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export class RuntimeUtil extends java.lang.Object {
							public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.RuntimeUtil>;
							public static boxToPrimitive: java.util.Map<java.lang.Class<any>,java.lang.Class<any>>;
							public static primitiveToBox: java.util.Map<java.lang.Class<any>,java.lang.Class<any>>;
							public constructor();
						}
						export module RuntimeUtil {
							export class ToStringAdapter extends javax.xml.bind.annotation.adapters.XmlAdapter<string,any> {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.RuntimeUtil.ToStringAdapter>;
								public unmarshal(s: string): any;
								public constructor();
								public unmarshal(object0: any): any;
								public marshal(object0: any): any;
								public marshal(o: any): string;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export class SchemaTypeTransducer<V>  extends com.sun.xml.bind.v2.runtime.FilterTransducer<any> {
							public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.SchemaTypeTransducer<any>>;
							public writeText(w: com.sun.xml.bind.v2.runtime.XMLSerializer, o: any, fieldName: string): void;
							public useNamespace(): boolean;
							public declareNamespace(o: any, w: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
							public parse(lexical: string): any;
							public writeLeafElement(w: com.sun.xml.bind.v2.runtime.XMLSerializer, tagName: com.sun.xml.bind.v2.runtime.Name, o: any, fieldName: string): void;
							public constructor(core: com.sun.xml.bind.v2.runtime.Transducer<any>);
							public print(o: any): string;
							public constructor(core: com.sun.xml.bind.v2.runtime.Transducer<any>, schemaType: javax.xml.namespace.QName);
							public getTypeName(instance: any): javax.xml.namespace.QName;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export class StAXPostInitAction extends java.lang.Object implements java.lang.Runnable {
							public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.StAXPostInitAction>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export class SwaRefAdapter extends javax.xml.bind.annotation.adapters.XmlAdapter<string,javax.activation.DataHandler> {
							public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.SwaRefAdapter>;
							public constructor();
							public marshal(object0: any): any;
							public unmarshal(cid: string): javax.activation.DataHandler;
							public marshal(data: javax.activation.DataHandler): string;
							public unmarshal(object0: any): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export class SwaRefAdapterMarker extends javax.xml.bind.annotation.adapters.XmlAdapter<string,javax.activation.DataHandler> {
							public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.SwaRefAdapterMarker>;
							public constructor();
							public marshal(object0: any): any;
							public unmarshal(object0: any): any;
							public unmarshal(v: string): javax.activation.DataHandler;
							public marshal(v: javax.activation.DataHandler): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export class Transducer<ValueT>  extends java.lang.Object {
							public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.Transducer<any>>;
							/**
							 * Constructs a new instance of the com.sun.xml.bind.v2.runtime.Transducer<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								useNamespace(): boolean;
								declareNamespace(object0: ValueT, xMLSerializer1: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
								print(object0: ValueT): string;
								parse(charSequence0: string): ValueT;
								writeText(xMLSerializer0: com.sun.xml.bind.v2.runtime.XMLSerializer, object1: ValueT, string2: string): void;
								writeLeafElement(xMLSerializer0: com.sun.xml.bind.v2.runtime.XMLSerializer, name1: com.sun.xml.bind.v2.runtime.Name, object2: ValueT, string3: string): void;
								getTypeName(object0: ValueT): javax.xml.namespace.QName;
							});
							public constructor();
							public print(object0: ValueT): string;
							public useNamespace(): boolean;
							public parse(charSequence0: string): ValueT;
							public declareNamespace(object0: ValueT, xMLSerializer1: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
							public writeText(xMLSerializer0: com.sun.xml.bind.v2.runtime.XMLSerializer, object1: ValueT, string2: string): void;
							public writeLeafElement(xMLSerializer0: com.sun.xml.bind.v2.runtime.XMLSerializer, name1: com.sun.xml.bind.v2.runtime.Name, object2: ValueT, string3: string): void;
							public getTypeName(object0: ValueT): javax.xml.namespace.QName;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export class Utils extends java.lang.Object {
							public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.Utils>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export class ValueListBeanInfoImpl extends com.sun.xml.bind.v2.runtime.JaxBeanInfo<any> {
							public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.ValueListBeanInfoImpl>;
							public reset(array: any, context: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext): boolean;
							public createInstance(unmarshallingContext0: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext): any;
							public serializeAttributes(object0: any, xMLSerializer1: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
							public getElementLocalName(array: any): string;
							public getLoader(context: com.sun.xml.bind.v2.runtime.JAXBContextImpl, typeSubstitutionCapable: boolean): com.sun.xml.bind.v2.runtime.unmarshaller.Loader;
							public getElementNamespaceURI(array: any): string;
							public serializeBody(array: any, target: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
							public createInstance(context: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext): any;
							public serializeURIs(array: any, target: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
							public getLoader(jAXBContextImpl0: com.sun.xml.bind.v2.runtime.JAXBContextImpl, boolean1: boolean): com.sun.xml.bind.v2.runtime.unmarshaller.Loader;
							public getTransducer(): com.sun.xml.bind.v2.runtime.Transducer<any>;
							public getTransducer(): com.sun.xml.bind.v2.runtime.Transducer<any>;
							public getElementNamespaceURI(object0: any): string;
							public getId(object0: any, xMLSerializer1: com.sun.xml.bind.v2.runtime.XMLSerializer): string;
							public constructor(grammar: com.sun.xml.bind.v2.runtime.JAXBContextImpl, rti: com.sun.xml.bind.v2.model.runtime.RuntimeTypeInfo, jaxbType: java.lang.Class<any>, typeNames: native.Array<javax.xml.namespace.QName>, isElement: boolean, isImmutable: boolean, hasLifecycleEvents: boolean);
							public serializeBody(object0: any, xMLSerializer1: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
							public serializeRoot(array: any, target: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
							public constructor(owner: com.sun.xml.bind.v2.runtime.JAXBContextImpl, arrayType: java.lang.Class<any>);
							public constructor(grammar: com.sun.xml.bind.v2.runtime.JAXBContextImpl, rti: com.sun.xml.bind.v2.model.runtime.RuntimeTypeInfo, jaxbType: java.lang.Class<any>, isElement: boolean, isImmutable: boolean, hasLifecycleEvents: boolean);
							public serializeURIs(object0: any, xMLSerializer1: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
							public reset(object0: any, unmarshallingContext1: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext): boolean;
							public serializeAttributes(array: any, target: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
							public serializeRoot(object0: any, xMLSerializer1: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
							public constructor(grammar: com.sun.xml.bind.v2.runtime.JAXBContextImpl, rti: com.sun.xml.bind.v2.model.runtime.RuntimeTypeInfo, jaxbType: java.lang.Class<any>, typeName: javax.xml.namespace.QName, isElement: boolean, isImmutable: boolean, hasLifecycleEvents: boolean);
							public getElementLocalName(object0: any): string;
							public getId(array: any, target: com.sun.xml.bind.v2.runtime.XMLSerializer): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export class XMLSerializer extends com.sun.xml.bind.v2.runtime.Coordinator {
							public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.XMLSerializer>;
							public grammar: com.sun.xml.bind.v2.runtime.JAXBContextImpl;
							public nameList: com.sun.xml.bind.v2.runtime.NameList;
							public knownUri2prefixIndexMap: native.Array<number>;
							public attachmentMarshaller: javax.xml.bind.attachment.AttachmentMarshaller;
							public clearCurrentProperty(): void;
							public close(): void;
							public warning(exception: org.xml.sax.SAXParseException): void;
							public static getInstance(): com.sun.xml.bind.v2.runtime.XMLSerializer;
							public error(exception: org.xml.sax.SAXParseException): void;
							public attribute(uri: string, local: string, value: string): void;
							public text(text: string, fieldName: string): void;
							public onID(owner: any, value: string): string;
							public writeXsiNilTrue(): void;
							public childAsRoot(obj: any): void;
							public setInlineBinaryFlag(value: boolean): boolean;
							public getNamespaceContext(): com.sun.xml.bind.v2.runtime.NamespaceContext2;
							public setSchemaType(st: javax.xml.namespace.QName): javax.xml.namespace.QName;
							public setPrefixMapper(prefixMapper: com.sun.xml.bind.marshaller.NamespacePrefixMapper): void;
							public leafElement(tagName: com.sun.xml.bind.v2.runtime.Name, data: com.sun.xml.bind.v2.runtime.output.Pcdata, fieldName: string): void;
							public attribute(name: com.sun.xml.bind.v2.runtime.Name, value: string): void;
							public handleError(e: java.lang.Exception, source: any, fieldName: string): boolean;
							public startElement(tagName: com.sun.xml.bind.v2.runtime.Name, outerPeer: any): void;
							public reportError(fieldName: string, t: java.lang.Throwable): void;
							public childAsXsiType(child: any, fieldName: string, expected: com.sun.xml.bind.v2.runtime.JaxBeanInfo<any>, nillable: boolean): void;
							public attWildcardAsURIs(attributes: java.util.Map<javax.xml.namespace.QName,string>, fieldName: string): void;
							public getInlineBinaryFlag(): boolean;
							public getXMIMEContentType(): string;
							public reportError(ve: javax.xml.bind.ValidationEvent): void;
							public setObjectIdentityCycleDetection(val: boolean): void;
							public endNamespaceDecls(innerPeer: any): void;
							public handleEvent(event: javax.xml.bind.ValidationEvent): boolean;
							public childAsSoleContent(child: any, fieldName: string): void;
							/** @deprecated */
							public getCachedBase64DataInstance(): com.sun.xml.bind.v2.runtime.unmarshaller.Base64Data;
							public handleError(e: java.lang.Exception): boolean;
							public startElementForce(nsUri: string, localName: string, forcedPrefix: string, outerPeer: any): void;
							public getSchemaType(): javax.xml.namespace.QName;
							public onIDREF(obj: any): string;
							public writeDom(element: any, domHandler: javax.xml.bind.annotation.DomHandler, parentBean: any, fieldName: string): void;
							public endAttributes(): void;
							public leafElement(tagName: com.sun.xml.bind.v2.runtime.Name, data: number, fieldName: string): void;
							public setExpectedMimeType(expectedMimeType: javax.activation.MimeType): javax.activation.MimeType;
							public getIdentityTransformer(): javax.xml.transform.Transformer;
							public startElement(nsUri: string, localName: string, preferredPrefix: string, outerPeer: any): void;
							public getCurrentLocation(fieldName: string): javax.xml.bind.ValidationEventLocator;
							public text(text: com.sun.xml.bind.v2.runtime.output.Pcdata, fieldName: string): void;
							public startDocument(out: com.sun.xml.bind.v2.runtime.output.XmlOutput, fragment: boolean, schemaLocation: string, noNsSchemaLocation: string): void;
							public endDocument(): void;
							public addInscopeBinding(nsUri: string, prefix: string): void;
							public endElement(): void;
							public leafElement(tagName: com.sun.xml.bind.v2.runtime.Name, data: string, fieldName: string): void;
							public attWildcardAsAttributes(attributes: java.util.Map<javax.xml.namespace.QName,string>, fieldName: string): void;
							public getObjectIdentityCycleDetection(): boolean;
							public getCurrentProperty(): com.sun.xml.bind.v2.runtime.property.Property<any>;
							public fatalError(exception: org.xml.sax.SAXParseException): void;
							public errorMissingId(obj: any): void;
							public getLocation(): javax.xml.bind.ValidationEventLocator;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module output {
							export class C14nXmlOutput extends com.sun.xml.bind.v2.runtime.output.UTF8XmlOutput {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.output.C14nXmlOutput>;
								public attribute(name: com.sun.xml.bind.v2.runtime.Name, value: string): void;
								public text(value: number): void;
								public endStartTag(): void;
								public constructor(out: java.io.OutputStream, localNames: native.Array<com.sun.xml.bind.v2.runtime.output.Encoded>, escapeHandler: com.sun.xml.bind.marshaller.CharacterEscapeHandler);
								public endTag(prefix: number, localName: string): void;
								public constructor(out: java.io.OutputStream, localNames: native.Array<com.sun.xml.bind.v2.runtime.output.Encoded>, namedAttributesAreOrdered: boolean, escapeHandler: com.sun.xml.bind.marshaller.CharacterEscapeHandler);
								public endDocument(fragment: boolean): void;
								public constructor();
								public beginStartTag(name: com.sun.xml.bind.v2.runtime.Name): void;
								public writeNsDecls(base: number): void;
								public text(value: string, needSP: boolean): void;
								public attribute(prefix: number, localName: string, value: string): void;
								public text(value: com.sun.xml.bind.v2.runtime.output.Pcdata, needSP: boolean): void;
								public endTag(name: com.sun.xml.bind.v2.runtime.Name): void;
								public startDocument(serializer: com.sun.xml.bind.v2.runtime.XMLSerializer, fragment: boolean, nsUriIndex2prefixIndex: native.Array<number>, nsContext: com.sun.xml.bind.v2.runtime.output.NamespaceContextImpl): void;
								public text(data: native.Array<number>, dataLen: number): void;
								public beginStartTag(prefix: number, localName: string): void;
							}
							export module C14nXmlOutput {
								export class DynamicAttribute extends java.lang.Comparable<com.sun.xml.bind.v2.runtime.output.C14nXmlOutput.DynamicAttribute> {
									public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.output.C14nXmlOutput.DynamicAttribute>;
									public constructor(this0: com.sun.xml.bind.v2.runtime.output.C14nXmlOutput, prefix: number, localName: string, value: string);
									public compareTo(that: com.sun.xml.bind.v2.runtime.output.C14nXmlOutput.DynamicAttribute): number;
								}
								export class StaticAttribute extends java.lang.Comparable<com.sun.xml.bind.v2.runtime.output.C14nXmlOutput.StaticAttribute> {
									public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.output.C14nXmlOutput.StaticAttribute>;
									public set(name: com.sun.xml.bind.v2.runtime.Name, value: string): void;
									public compareTo(that: com.sun.xml.bind.v2.runtime.output.C14nXmlOutput.StaticAttribute): number;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module output {
							export class DOMOutput extends com.sun.xml.bind.v2.runtime.output.SAXOutput {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.output.DOMOutput>;
								public attribute(name: com.sun.xml.bind.v2.runtime.Name, value: string): void;
								public constructor(node: org.w3c.dom.Node, assoc: com.sun.xml.bind.v2.runtime.AssociationMap<any>);
								public endStartTag(): void;
								public text(value: string, needsSP: boolean): void;
								public endTag(prefix: number, localName: string): void;
								public endDocument(fragment: boolean): void;
								public constructor();
								public beginStartTag(name: com.sun.xml.bind.v2.runtime.Name): void;
								public attribute(prefix: number, localName: string, value: string): void;
								public endTag(name: com.sun.xml.bind.v2.runtime.Name): void;
								public constructor(out: org.xml.sax.ContentHandler);
								public startDocument(serializer: com.sun.xml.bind.v2.runtime.XMLSerializer, fragment: boolean, nsUriIndex2prefixIndex: native.Array<number>, nsContext: com.sun.xml.bind.v2.runtime.output.NamespaceContextImpl): void;
								public text(value: com.sun.xml.bind.v2.runtime.output.Pcdata, needsSP: boolean): void;
								public beginStartTag(prefix: number, localName: string): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module output {
							export class Encoded extends java.lang.Object {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.output.Encoded>;
								public buf: native.Array<number>;
								public len: number;
								public compact(): void;
								public setEscape(text: string, isAttribute: boolean): void;
								public ensureSize(size: number): void;
								public set(text: string): void;
								public constructor(text: string);
								public constructor();
								public append(b: string): void;
								public write(out: com.sun.xml.bind.v2.runtime.output.UTF8XmlOutput): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module output {
							export class FastInfosetStreamWriterOutput extends com.sun.xml.bind.v2.runtime.output.XMLStreamWriterOutput {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.output.FastInfosetStreamWriterOutput>;
								public text(value: com.sun.xml.bind.v2.runtime.output.Pcdata, needsSeparatingWhitespace: boolean): void;
								public attribute(name: com.sun.xml.bind.v2.runtime.Name, value: string): void;
								public endStartTag(): void;
								public endTag(prefix: number, localName: string): void;
								public endDocument(fragment: boolean): void;
								public constructor();
								public beginStartTag(name: com.sun.xml.bind.v2.runtime.Name): void;
								public constructor(out: javax.xml.stream.XMLStreamWriter, escapeHandler: com.sun.xml.bind.marshaller.CharacterEscapeHandler);
								public attribute(prefix: number, localName: string, value: string): void;
								public constructor(out: com.sun.xml.fastinfoset.stax.StAXDocumentSerializer, context: com.sun.xml.bind.v2.runtime.JAXBContextImpl);
								public beginStartTagWithNamespaces(name: com.sun.xml.bind.v2.runtime.Name): void;
								public endTag(name: com.sun.xml.bind.v2.runtime.Name): void;
								public startDocument(serializer: com.sun.xml.bind.v2.runtime.XMLSerializer, fragment: boolean, nsUriIndex2prefixIndex: native.Array<number>, nsContext: com.sun.xml.bind.v2.runtime.output.NamespaceContextImpl): void;
								public beginStartTag(prefix: number, localName: string): void;
								public text(value: string, needsSeparatingWhitespace: boolean): void;
							}
							export module FastInfosetStreamWriterOutput {
								export class AppData extends java.lang.Object implements org.jvnet.fastinfoset.VocabularyApplicationData {
									public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.output.FastInfosetStreamWriterOutput.AppData>;
									public clear(): void;
								}
								export class TablesPerJAXBContext extends java.lang.Object {
									public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.output.FastInfosetStreamWriterOutput.TablesPerJAXBContext>;
									public clearOrResetTables(intialIndexOffset: number): void;
									public incrementMaxIndexValue(): void;
									public requireClearTables(): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module output {
							export class ForkXmlOutput extends com.sun.xml.bind.v2.runtime.output.XmlOutputAbstractImpl {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.output.ForkXmlOutput>;
								public text(value: com.sun.xml.bind.v2.runtime.output.Pcdata, needsSeparatingWhitespace: boolean): void;
								public attribute(name: com.sun.xml.bind.v2.runtime.Name, value: string): void;
								public endStartTag(): void;
								public endTag(prefix: number, localName: string): void;
								public endDocument(fragment: boolean): void;
								public constructor();
								public beginStartTag(int0: number, string1: string): void;
								public beginStartTag(name: com.sun.xml.bind.v2.runtime.Name): void;
								public attribute(prefix: number, localName: string, value: string): void;
								public endTag(int0: number, string1: string): void;
								public endTag(name: com.sun.xml.bind.v2.runtime.Name): void;
								public constructor(lhs: com.sun.xml.bind.v2.runtime.output.XmlOutput, rhs: com.sun.xml.bind.v2.runtime.output.XmlOutput);
								public startDocument(serializer: com.sun.xml.bind.v2.runtime.XMLSerializer, fragment: boolean, nsUriIndex2prefixIndex: native.Array<number>, nsContext: com.sun.xml.bind.v2.runtime.output.NamespaceContextImpl): void;
								public attribute(int0: number, string1: string, string2: string): void;
								public beginStartTag(prefix: number, localName: string): void;
								public text(value: string, needsSeparatingWhitespace: boolean): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module output {
							export class IndentingUTF8XmlOutput extends com.sun.xml.bind.v2.runtime.output.UTF8XmlOutput {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.output.IndentingUTF8XmlOutput>;
								public text(value: number): void;
								public attribute(name: com.sun.xml.bind.v2.runtime.Name, value: string): void;
								public endStartTag(): void;
								public constructor(out: java.io.OutputStream, localNames: native.Array<com.sun.xml.bind.v2.runtime.output.Encoded>, escapeHandler: com.sun.xml.bind.marshaller.CharacterEscapeHandler);
								public endTag(prefix: number, localName: string): void;
								public constructor(out: java.io.OutputStream, indentStr: string, localNames: native.Array<com.sun.xml.bind.v2.runtime.output.Encoded>, escapeHandler: com.sun.xml.bind.marshaller.CharacterEscapeHandler);
								public endDocument(fragment: boolean): void;
								public constructor();
								public beginStartTag(name: com.sun.xml.bind.v2.runtime.Name): void;
								public text(value: string, needSP: boolean): void;
								public attribute(prefix: number, localName: string, value: string): void;
								public text(value: com.sun.xml.bind.v2.runtime.output.Pcdata, needSP: boolean): void;
								public endTag(name: com.sun.xml.bind.v2.runtime.Name): void;
								public startDocument(serializer: com.sun.xml.bind.v2.runtime.XMLSerializer, fragment: boolean, nsUriIndex2prefixIndex: native.Array<number>, nsContext: com.sun.xml.bind.v2.runtime.output.NamespaceContextImpl): void;
								public text(data: native.Array<number>, dataLen: number): void;
								public beginStartTag(prefix: number, localName: string): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module output {
							export class MTOMXmlOutput extends com.sun.xml.bind.v2.runtime.output.XmlOutputAbstractImpl {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.output.MTOMXmlOutput>;
								public text(value: com.sun.xml.bind.v2.runtime.output.Pcdata, needsSeparatingWhitespace: boolean): void;
								public attribute(name: com.sun.xml.bind.v2.runtime.Name, value: string): void;
								public constructor(next: com.sun.xml.bind.v2.runtime.output.XmlOutput);
								public endStartTag(): void;
								public endTag(prefix: number, localName: string): void;
								public endDocument(fragment: boolean): void;
								public constructor();
								public beginStartTag(int0: number, string1: string): void;
								public beginStartTag(name: com.sun.xml.bind.v2.runtime.Name): void;
								public attribute(prefix: number, localName: string, value: string): void;
								public endTag(int0: number, string1: string): void;
								public endTag(name: com.sun.xml.bind.v2.runtime.Name): void;
								public startDocument(serializer: com.sun.xml.bind.v2.runtime.XMLSerializer, fragment: boolean, nsUriIndex2prefixIndex: native.Array<number>, nsContext: com.sun.xml.bind.v2.runtime.output.NamespaceContextImpl): void;
								public beginStartTag(prefix: number, localName: string): void;
								public attribute(int0: number, string1: string, string2: string): void;
								public text(value: string, needsSeparatingWhitespace: boolean): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module output {
							export class NamespaceContextImpl extends java.lang.Object implements com.sun.xml.bind.v2.runtime.NamespaceContext2 {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.output.NamespaceContextImpl>;
								public collectionMode: boolean;
								public count(): number;
								public put(uri: string, prefix: string): number;
								public declareNsUri(uri: string, preferedPrefix: string, requirePrefix: boolean): number;
								public getCurrent(): com.sun.xml.bind.v2.runtime.output.NamespaceContextImpl.Element;
								public declareNamespace(namespaceUri: string, preferedPrefix: string, requirePrefix: boolean): string;
								public getPrefix(prefixIndex: number): string;
								public constructor(owner: com.sun.xml.bind.v2.runtime.XMLSerializer);
								public getPrefixes(uri: string): java.util.Iterator<string>;
								public getPrefixIndex(uri: string): number;
								public getPrefix(uri: string): string;
								public getPrefixMapper(): com.sun.xml.bind.marshaller.NamespacePrefixMapper;
								public getNamespaceURI(prefixIndex: number): string;
								public getPrefixes(uri: string): java.util.Iterator<any>;
								public force(uri: string, prefix: string): number;
								public reset(): void;
								public getNamespaceURI(prefix: string): string;
								public setPrefixMapper(mapper: com.sun.xml.bind.marshaller.NamespacePrefixMapper): void;
							}
							export module NamespaceContextImpl {
								export class Element extends java.lang.Object {
									public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.output.NamespaceContextImpl.Element>;
									public context: com.sun.xml.bind.v2.runtime.output.NamespaceContextImpl;
									public pop(): com.sun.xml.bind.v2.runtime.output.NamespaceContextImpl.Element;
									public setTagName(tagName: com.sun.xml.bind.v2.runtime.Name, outerPeer: any): void;
									public startElement(out: com.sun.xml.bind.v2.runtime.output.XmlOutput, innerPeer: any): void;
									public count(): number;
									public setTagName(prefix: number, localName: string, outerPeer: any): void;
									public getOuterPeer(): any;
									public push(): com.sun.xml.bind.v2.runtime.output.NamespaceContextImpl.Element;
									public getNsUri(idx: number): string;
									public getParent(): com.sun.xml.bind.v2.runtime.output.NamespaceContextImpl.Element;
									public getInnerPeer(): any;
									public getPrefix(idx: number): string;
									public getBase(): number;
									public isRootElement(): boolean;
									public endElement(out: com.sun.xml.bind.v2.runtime.output.XmlOutput): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module output {
							export abstract class Pcdata extends java.lang.Object implements java.lang.CharSequence {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.output.Pcdata>;
								public writeTo(uTF8XmlOutput0: com.sun.xml.bind.v2.runtime.output.UTF8XmlOutput): void;
								public toString(): string;
								public codePoints(): java.util.stream.IntStream;
								public length(): number;
								public subSequence(int0: number, int1: number): string;
								public constructor();
								public chars(): java.util.stream.IntStream;
								public charAt(int0: number): string;
								public writeTo(buf: native.Array<string>, start: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module output {
							export class SAXOutput extends com.sun.xml.bind.v2.runtime.output.XmlOutputAbstractImpl {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.output.SAXOutput>;
								public out: org.xml.sax.ContentHandler;
								public attribute(name: com.sun.xml.bind.v2.runtime.Name, value: string): void;
								public endStartTag(): void;
								public text(value: string, needsSP: boolean): void;
								public endTag(prefix: number, localName: string): void;
								public endDocument(fragment: boolean): void;
								public constructor();
								public beginStartTag(int0: number, string1: string): void;
								public beginStartTag(name: com.sun.xml.bind.v2.runtime.Name): void;
								public attribute(prefix: number, localName: string, value: string): void;
								public endTag(int0: number, string1: string): void;
								public endTag(name: com.sun.xml.bind.v2.runtime.Name): void;
								public constructor(out: org.xml.sax.ContentHandler);
								public startDocument(serializer: com.sun.xml.bind.v2.runtime.XMLSerializer, fragment: boolean, nsUriIndex2prefixIndex: native.Array<number>, nsContext: com.sun.xml.bind.v2.runtime.output.NamespaceContextImpl): void;
								public text(value: com.sun.xml.bind.v2.runtime.output.Pcdata, needsSP: boolean): void;
								public beginStartTag(prefix: number, localName: string): void;
								public attribute(int0: number, string1: string, string2: string): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module output {
							export class SecureLoader extends java.lang.Object {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.output.SecureLoader>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module output {
							export class StAXExStreamWriterOutput extends com.sun.xml.bind.v2.runtime.output.XMLStreamWriterOutput {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.output.StAXExStreamWriterOutput>;
								public text(value: com.sun.xml.bind.v2.runtime.output.Pcdata, needsSeparatingWhitespace: boolean): void;
								public attribute(name: com.sun.xml.bind.v2.runtime.Name, value: string): void;
								public endStartTag(): void;
								public endTag(prefix: number, localName: string): void;
								public endDocument(fragment: boolean): void;
								public constructor();
								public beginStartTag(name: com.sun.xml.bind.v2.runtime.Name): void;
								public constructor(out: javax.xml.stream.XMLStreamWriter, escapeHandler: com.sun.xml.bind.marshaller.CharacterEscapeHandler);
								public attribute(prefix: number, localName: string, value: string): void;
								public constructor(out: org.jvnet.staxex.XMLStreamWriterEx);
								public endTag(name: com.sun.xml.bind.v2.runtime.Name): void;
								public startDocument(serializer: com.sun.xml.bind.v2.runtime.XMLSerializer, fragment: boolean, nsUriIndex2prefixIndex: native.Array<number>, nsContext: com.sun.xml.bind.v2.runtime.output.NamespaceContextImpl): void;
								public text(value: string, needsSeparatingWhitespace: boolean): void;
								public beginStartTag(prefix: number, localName: string): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module output {
							export class UTF8XmlOutput extends com.sun.xml.bind.v2.runtime.output.XmlOutputAbstractImpl {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.output.UTF8XmlOutput>;
								public out: java.io.OutputStream;
								public octetBuffer: native.Array<number>;
								public octetBufferIndex: number;
								public closeStartTagPending: boolean;
								public attribute(name: com.sun.xml.bind.v2.runtime.Name, value: string): void;
								public text(value: number): void;
								public setHeader(header: string): void;
								public endStartTag(): void;
								public beginStartTag(int0: number, string1: string): void;
								public beginStartTag(name: com.sun.xml.bind.v2.runtime.Name): void;
								public attribute(prefix: number, localName: string, value: string): void;
								public endTag(name: com.sun.xml.bind.v2.runtime.Name): void;
								public write(b: native.Array<number>): void;
								public startDocument(serializer: com.sun.xml.bind.v2.runtime.XMLSerializer, fragment: boolean, nsUriIndex2prefixIndex: native.Array<number>, nsContext: com.sun.xml.bind.v2.runtime.output.NamespaceContextImpl): void;
								public beginStartTag(prefix: number, localName: string): void;
								public attribute(int0: number, string1: string, string2: string): void;
								public write(i: number): void;
								public constructor(out: java.io.OutputStream, localNames: native.Array<com.sun.xml.bind.v2.runtime.output.Encoded>, escapeHandler: com.sun.xml.bind.marshaller.CharacterEscapeHandler);
								public endTag(prefix: number, localName: string): void;
								public closeStartTag(): void;
								public endDocument(fragment: boolean): void;
								public constructor();
								public writeNsDecl(prefixIndex: number): void;
								public flushBuffer(): void;
								public writeNsDecls(base: number): void;
								public text(value: string, needSP: boolean): void;
								public write(b: native.Array<number>, start: number, length: number): void;
								public endTag(int0: number, string1: string): void;
								public text(value: com.sun.xml.bind.v2.runtime.output.Pcdata, needSP: boolean): void;
								public text(data: native.Array<number>, dataLen: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module output {
							export class XMLEventWriterOutput extends com.sun.xml.bind.v2.runtime.output.XmlOutputAbstractImpl {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.output.XMLEventWriterOutput>;
								public text(value: com.sun.xml.bind.v2.runtime.output.Pcdata, needsSeparatingWhitespace: boolean): void;
								public attribute(name: com.sun.xml.bind.v2.runtime.Name, value: string): void;
								public endStartTag(): void;
								public endTag(prefix: number, localName: string): void;
								public endDocument(fragment: boolean): void;
								public constructor();
								public beginStartTag(int0: number, string1: string): void;
								public beginStartTag(name: com.sun.xml.bind.v2.runtime.Name): void;
								public constructor(out: javax.xml.stream.XMLEventWriter);
								public attribute(prefix: number, localName: string, value: string): void;
								public endTag(int0: number, string1: string): void;
								public endTag(name: com.sun.xml.bind.v2.runtime.Name): void;
								public startDocument(serializer: com.sun.xml.bind.v2.runtime.XMLSerializer, fragment: boolean, nsUriIndex2prefixIndex: native.Array<number>, nsContext: com.sun.xml.bind.v2.runtime.output.NamespaceContextImpl): void;
								public beginStartTag(prefix: number, localName: string): void;
								public attribute(int0: number, string1: string, string2: string): void;
								public text(value: string, needsSeparatingWhitespace: boolean): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module output {
							export class XMLStreamWriterOutput extends com.sun.xml.bind.v2.runtime.output.XmlOutputAbstractImpl {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.output.XMLStreamWriterOutput>;
								public buf: native.Array<string>;
								public text(value: com.sun.xml.bind.v2.runtime.output.Pcdata, needsSeparatingWhitespace: boolean): void;
								public attribute(name: com.sun.xml.bind.v2.runtime.Name, value: string): void;
								public endStartTag(): void;
								public endTag(prefix: number, localName: string): void;
								public static create(out: javax.xml.stream.XMLStreamWriter, context: com.sun.xml.bind.v2.runtime.JAXBContextImpl, escapeHandler: com.sun.xml.bind.marshaller.CharacterEscapeHandler): com.sun.xml.bind.v2.runtime.output.XmlOutput;
								public endDocument(fragment: boolean): void;
								public constructor();
								public beginStartTag(int0: number, string1: string): void;
								public beginStartTag(name: com.sun.xml.bind.v2.runtime.Name): void;
								public constructor(out: javax.xml.stream.XMLStreamWriter, escapeHandler: com.sun.xml.bind.marshaller.CharacterEscapeHandler);
								public attribute(prefix: number, localName: string, value: string): void;
								public endTag(int0: number, string1: string): void;
								public endTag(name: com.sun.xml.bind.v2.runtime.Name): void;
								public startDocument(serializer: com.sun.xml.bind.v2.runtime.XMLSerializer, fragment: boolean, nsUriIndex2prefixIndex: native.Array<number>, nsContext: com.sun.xml.bind.v2.runtime.output.NamespaceContextImpl): void;
								public beginStartTag(prefix: number, localName: string): void;
								public attribute(int0: number, string1: string, string2: string): void;
								public text(value: string, needsSeparatingWhitespace: boolean): void;
							}
							export module XMLStreamWriterOutput {
								export class XmlStreamOutWriterAdapter extends java.io.Writer {
									public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.output.XMLStreamWriterOutput.XmlStreamOutWriterAdapter>;
									public write(str: string, off: number, len: number): void;
									public write(cbuf: native.Array<string>, off: number, len: number): void;
									public close(): void;
									public append(charSequence0: string): java.lang.Appendable;
									public write(str: string): void;
									public append(charSequence0: string, int1: number, int2: number): java.lang.Appendable;
									public writeEntityRef(entityReference: string): void;
									public write(cbuf: native.Array<string>): void;
									public write(c: number): void;
									public append(char0: string): java.lang.Appendable;
									public append(c: string): java.io.Writer;
									public append(csq: string, start: number, end: number): java.io.Writer;
									public write(chars0: native.Array<string>, int1: number, int2: number): void;
									public append(csq: string): java.io.Writer;
									public flush(): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module output {
							export class XmlOutput extends java.lang.Object {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.output.XmlOutput>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.runtime.output.XmlOutput interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									startDocument(xMLSerializer0: com.sun.xml.bind.v2.runtime.XMLSerializer, boolean1: boolean, ints2: native.Array<number>, namespaceContextImpl3: com.sun.xml.bind.v2.runtime.output.NamespaceContextImpl): void;
									endDocument(boolean0: boolean): void;
									beginStartTag(name0: com.sun.xml.bind.v2.runtime.Name): void;
									beginStartTag(int0: number, string1: string): void;
									attribute(name0: com.sun.xml.bind.v2.runtime.Name, string1: string): void;
									attribute(int0: number, string1: string, string2: string): void;
									endStartTag(): void;
									endTag(name0: com.sun.xml.bind.v2.runtime.Name): void;
									endTag(int0: number, string1: string): void;
									text(string0: string, boolean1: boolean): void;
									text(pcdata0: com.sun.xml.bind.v2.runtime.output.Pcdata, boolean1: boolean): void;
								});
								public constructor();
								public text(string0: string, boolean1: boolean): void;
								public endTag(int0: number, string1: string): void;
								public endStartTag(): void;
								public attribute(name0: com.sun.xml.bind.v2.runtime.Name, string1: string): void;
								public text(pcdata0: com.sun.xml.bind.v2.runtime.output.Pcdata, boolean1: boolean): void;
								public beginStartTag(int0: number, string1: string): void;
								public beginStartTag(name0: com.sun.xml.bind.v2.runtime.Name): void;
								public endTag(name0: com.sun.xml.bind.v2.runtime.Name): void;
								public startDocument(xMLSerializer0: com.sun.xml.bind.v2.runtime.XMLSerializer, boolean1: boolean, ints2: native.Array<number>, namespaceContextImpl3: com.sun.xml.bind.v2.runtime.output.NamespaceContextImpl): void;
								public endDocument(boolean0: boolean): void;
								public attribute(int0: number, string1: string, string2: string): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module output {
							export abstract class XmlOutputAbstractImpl extends java.lang.Object implements com.sun.xml.bind.v2.runtime.output.XmlOutput {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.output.XmlOutputAbstractImpl>;
								public nsUriIndex2prefixIndex: native.Array<number>;
								public nsContext: com.sun.xml.bind.v2.runtime.output.NamespaceContextImpl;
								public serializer: com.sun.xml.bind.v2.runtime.XMLSerializer;
								public text(string0: string, boolean1: boolean): void;
								public attribute(name: com.sun.xml.bind.v2.runtime.Name, value: string): void;
								public endTag(int0: number, string1: string): void;
								public endStartTag(): void;
								public endTag(name: com.sun.xml.bind.v2.runtime.Name): void;
								public endDocument(fragment: boolean): void;
								public text(pcdata0: com.sun.xml.bind.v2.runtime.output.Pcdata, boolean1: boolean): void;
								public constructor();
								public beginStartTag(int0: number, string1: string): void;
								public beginStartTag(name: com.sun.xml.bind.v2.runtime.Name): void;
								public startDocument(serializer: com.sun.xml.bind.v2.runtime.XMLSerializer, fragment: boolean, nsUriIndex2prefixIndex: native.Array<number>, nsContext: com.sun.xml.bind.v2.runtime.output.NamespaceContextImpl): void;
								public attribute(int0: number, string1: string, string2: string): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module property {
							export abstract class ArrayERProperty<BeanT, ListT, ItemT>  extends com.sun.xml.bind.v2.runtime.property.ArrayProperty<any,any,any> {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.property.ArrayERProperty<any,any,any>>;
								public wrapperTagName: com.sun.xml.bind.v2.runtime.Name;
								public isWrapperNillable: boolean;
								public hasSerializeURIAction(): boolean;
								public getFieldName(): string;
								public wrapUp(): void;
								public constructor(grammar: com.sun.xml.bind.v2.runtime.JAXBContextImpl, prop: com.sun.xml.bind.v2.model.runtime.RuntimePropertyInfo, tagName: javax.xml.namespace.QName, isWrapperNillable: boolean);
								public serializeListBody(object0: any, xMLSerializer1: com.sun.xml.bind.v2.runtime.XMLSerializer, object2: any): void;
								public getIdValue(bean: any): string;
								public constructor(context: com.sun.xml.bind.v2.runtime.JAXBContextImpl, prop: com.sun.xml.bind.v2.model.runtime.RuntimePropertyInfo);
								public serializeBody(o: any, w: com.sun.xml.bind.v2.runtime.XMLSerializer, outerPeer: any): void;
								public getKind(): com.sun.xml.bind.v2.model.core.PropertyKind;
								public createBodyUnmarshaller(unmarshallerChain0: com.sun.xml.bind.v2.runtime.property.UnmarshallerChain, qNameMap1: com.sun.xml.bind.v2.util.QNameMap<com.sun.xml.bind.v2.runtime.unmarshaller.ChildLoader>): void;
								public serializeURIs(o: any, w: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
								public getElementPropertyAccessor(nsUri: string, localName: string): com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>;
								public buildChildElementUnmarshallers(chain: com.sun.xml.bind.v2.runtime.property.UnmarshallerChain, loaders: com.sun.xml.bind.v2.util.QNameMap<com.sun.xml.bind.v2.runtime.unmarshaller.ChildLoader>): void;
								public reset(o: any): void;
								public isHiddenByOverride(): boolean;
								public setHiddenByOverride(hidden: boolean): void;
								public getInfo(): com.sun.xml.bind.v2.model.runtime.RuntimePropertyInfo;
							}
							export module ArrayERProperty {
								export class ItemsLoader extends com.sun.xml.bind.v2.runtime.unmarshaller.Loader {
									public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.property.ArrayERProperty.ItemsLoader>;
									public constructor();
									public startElement(state: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext.State, ea: com.sun.xml.bind.v2.runtime.unmarshaller.TagName): void;
									public constructor(expectText: boolean);
									public leaveElement(state: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext.State, ea: com.sun.xml.bind.v2.runtime.unmarshaller.TagName): void;
									public getExpectedChildElements(): java.util.Collection<javax.xml.namespace.QName>;
									public constructor(acc: com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>, lister: com.sun.xml.bind.v2.runtime.reflect.Lister<any,any,any,any>, children: com.sun.xml.bind.v2.util.QNameMap<com.sun.xml.bind.v2.runtime.unmarshaller.ChildLoader>);
									public childElement(state: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext.State, ea: com.sun.xml.bind.v2.runtime.unmarshaller.TagName): void;
								}
								export class ReceiverImpl extends java.lang.Object implements com.sun.xml.bind.v2.runtime.unmarshaller.Receiver {
									public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.property.ArrayERProperty.ReceiverImpl>;
									public constructor(this0: com.sun.xml.bind.v2.runtime.property.ArrayERProperty<any,any,any>, offset: number);
									public receive(state: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext.State, o: any): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module property {
							export class ArrayElementLeafProperty<BeanT, ListT, ItemT>  extends com.sun.xml.bind.v2.runtime.property.ArrayElementProperty<any,any,any> {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.property.ArrayElementLeafProperty<any,any,any>>;
								public serializeItem(jaxBeanInfo0: com.sun.xml.bind.v2.runtime.JaxBeanInfo<any>, object1: any, xMLSerializer2: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
								public hasSerializeURIAction(): boolean;
								public getFieldName(): string;
								public constructor(p: com.sun.xml.bind.v2.runtime.JAXBContextImpl, prop: com.sun.xml.bind.v2.model.runtime.RuntimeElementPropertyInfo);
								public wrapUp(): void;
								public constructor(grammar: com.sun.xml.bind.v2.runtime.JAXBContextImpl, prop: com.sun.xml.bind.v2.model.runtime.RuntimePropertyInfo, tagName: javax.xml.namespace.QName, isWrapperNillable: boolean);
								public getIdValue(bean: any): string;
								public constructor(context: com.sun.xml.bind.v2.runtime.JAXBContextImpl, prop: com.sun.xml.bind.v2.model.runtime.RuntimePropertyInfo);
								public serializeBody(o: any, w: com.sun.xml.bind.v2.runtime.XMLSerializer, outerPeer: any): void;
								public getKind(): com.sun.xml.bind.v2.model.core.PropertyKind;
								public serializeURIs(o: any, w: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
								public constructor(grammar: com.sun.xml.bind.v2.runtime.JAXBContextImpl, prop: com.sun.xml.bind.v2.model.runtime.RuntimeElementPropertyInfo);
								public getElementPropertyAccessor(nsUri: string, localName: string): com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>;
								public reset(o: any): void;
								public isHiddenByOverride(): boolean;
								public setHiddenByOverride(hidden: boolean): void;
								public getInfo(): com.sun.xml.bind.v2.model.runtime.RuntimePropertyInfo;
								public serializeItem(bi: com.sun.xml.bind.v2.runtime.JaxBeanInfo<any>, item: any, w: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module property {
							export class ArrayElementNodeProperty<BeanT, ListT, ItemT>  extends com.sun.xml.bind.v2.runtime.property.ArrayElementProperty<any,any,any> {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.property.ArrayElementNodeProperty<any,any,any>>;
								public serializeItem(jaxBeanInfo0: com.sun.xml.bind.v2.runtime.JaxBeanInfo<any>, object1: any, xMLSerializer2: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
								public hasSerializeURIAction(): boolean;
								public getFieldName(): string;
								public constructor(p: com.sun.xml.bind.v2.runtime.JAXBContextImpl, prop: com.sun.xml.bind.v2.model.runtime.RuntimeElementPropertyInfo);
								public wrapUp(): void;
								public constructor(grammar: com.sun.xml.bind.v2.runtime.JAXBContextImpl, prop: com.sun.xml.bind.v2.model.runtime.RuntimePropertyInfo, tagName: javax.xml.namespace.QName, isWrapperNillable: boolean);
								public getIdValue(bean: any): string;
								public constructor(context: com.sun.xml.bind.v2.runtime.JAXBContextImpl, prop: com.sun.xml.bind.v2.model.runtime.RuntimePropertyInfo);
								public serializeBody(o: any, w: com.sun.xml.bind.v2.runtime.XMLSerializer, outerPeer: any): void;
								public getKind(): com.sun.xml.bind.v2.model.core.PropertyKind;
								public serializeURIs(o: any, w: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
								public constructor(grammar: com.sun.xml.bind.v2.runtime.JAXBContextImpl, prop: com.sun.xml.bind.v2.model.runtime.RuntimeElementPropertyInfo);
								public getElementPropertyAccessor(nsUri: string, localName: string): com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>;
								public reset(o: any): void;
								public isHiddenByOverride(): boolean;
								public setHiddenByOverride(hidden: boolean): void;
								public getInfo(): com.sun.xml.bind.v2.model.runtime.RuntimePropertyInfo;
								public serializeItem(expected: com.sun.xml.bind.v2.runtime.JaxBeanInfo<any>, item: any, w: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module property {
							export abstract class ArrayElementProperty<BeanT, ListT, ItemT>  extends com.sun.xml.bind.v2.runtime.property.ArrayERProperty<any,any,any> {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.property.ArrayElementProperty<any,any,any>>;
								public prop: com.sun.xml.bind.v2.model.runtime.RuntimeElementPropertyInfo;
								public serializeItem(jaxBeanInfo0: com.sun.xml.bind.v2.runtime.JaxBeanInfo<any>, object1: any, xMLSerializer2: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
								public hasSerializeURIAction(): boolean;
								public getFieldName(): string;
								public wrapUp(): void;
								public constructor(grammar: com.sun.xml.bind.v2.runtime.JAXBContextImpl, prop: com.sun.xml.bind.v2.model.runtime.RuntimePropertyInfo, tagName: javax.xml.namespace.QName, isWrapperNillable: boolean);
								public serializeListBody(object0: any, xMLSerializer1: com.sun.xml.bind.v2.runtime.XMLSerializer, object2: any): void;
								public getIdValue(bean: any): string;
								public constructor(context: com.sun.xml.bind.v2.runtime.JAXBContextImpl, prop: com.sun.xml.bind.v2.model.runtime.RuntimePropertyInfo);
								public serializeListBody(beanT: any, w: com.sun.xml.bind.v2.runtime.XMLSerializer, list: any): void;
								public getKind(): com.sun.xml.bind.v2.model.core.PropertyKind;
								public serializeBody(o: any, w: com.sun.xml.bind.v2.runtime.XMLSerializer, outerPeer: any): void;
								public createBodyUnmarshaller(unmarshallerChain0: com.sun.xml.bind.v2.runtime.property.UnmarshallerChain, qNameMap1: com.sun.xml.bind.v2.util.QNameMap<com.sun.xml.bind.v2.runtime.unmarshaller.ChildLoader>): void;
								public serializeURIs(o: any, w: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
								public constructor(grammar: com.sun.xml.bind.v2.runtime.JAXBContextImpl, prop: com.sun.xml.bind.v2.model.runtime.RuntimeElementPropertyInfo);
								public getElementPropertyAccessor(nsUri: string, localName: string): com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>;
								public reset(o: any): void;
								public isHiddenByOverride(): boolean;
								public setHiddenByOverride(hidden: boolean): void;
								public getInfo(): com.sun.xml.bind.v2.model.runtime.RuntimePropertyInfo;
								public createBodyUnmarshaller(chain: com.sun.xml.bind.v2.runtime.property.UnmarshallerChain, loaders: com.sun.xml.bind.v2.util.QNameMap<com.sun.xml.bind.v2.runtime.unmarshaller.ChildLoader>): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module property {
							export abstract class ArrayProperty<BeanT, ListT, ItemT>  extends com.sun.xml.bind.v2.runtime.property.PropertyImpl<any> {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.property.ArrayProperty<any,any,any>>;
								public acc: com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>;
								public lister: com.sun.xml.bind.v2.runtime.reflect.Lister<any,any,any,any>;
								public hasSerializeURIAction(): boolean;
								public getFieldName(): string;
								public wrapUp(): void;
								public getIdValue(bean: any): string;
								public constructor(context: com.sun.xml.bind.v2.runtime.JAXBContextImpl, prop: com.sun.xml.bind.v2.model.runtime.RuntimePropertyInfo);
								public serializeBody(o: any, w: com.sun.xml.bind.v2.runtime.XMLSerializer, outerPeer: any): void;
								public getKind(): com.sun.xml.bind.v2.model.core.PropertyKind;
								public serializeURIs(o: any, w: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
								public getElementPropertyAccessor(nsUri: string, localName: string): com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>;
								public reset(o: any): void;
								public isHiddenByOverride(): boolean;
								public setHiddenByOverride(hidden: boolean): void;
								public getInfo(): com.sun.xml.bind.v2.model.runtime.RuntimePropertyInfo;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module property {
							export class ArrayReferenceNodeProperty<BeanT, ListT, ItemT>  extends com.sun.xml.bind.v2.runtime.property.ArrayERProperty<any,any,any> {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.property.ArrayReferenceNodeProperty<any,any,any>>;
								public hasSerializeURIAction(): boolean;
								public getFieldName(): string;
								public wrapUp(): void;
								public constructor(grammar: com.sun.xml.bind.v2.runtime.JAXBContextImpl, prop: com.sun.xml.bind.v2.model.runtime.RuntimePropertyInfo, tagName: javax.xml.namespace.QName, isWrapperNillable: boolean);
								public serializeListBody(object0: any, xMLSerializer1: com.sun.xml.bind.v2.runtime.XMLSerializer, object2: any): void;
								public getIdValue(bean: any): string;
								public constructor(context: com.sun.xml.bind.v2.runtime.JAXBContextImpl, prop: com.sun.xml.bind.v2.model.runtime.RuntimePropertyInfo);
								public getKind(): com.sun.xml.bind.v2.model.core.PropertyKind;
								public serializeBody(o: any, w: com.sun.xml.bind.v2.runtime.XMLSerializer, outerPeer: any): void;
								public createBodyUnmarshaller(unmarshallerChain0: com.sun.xml.bind.v2.runtime.property.UnmarshallerChain, qNameMap1: com.sun.xml.bind.v2.util.QNameMap<com.sun.xml.bind.v2.runtime.unmarshaller.ChildLoader>): void;
								public serializeURIs(o: any, w: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
								public getElementPropertyAccessor(nsUri: string, localName: string): com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>;
								public constructor(p: com.sun.xml.bind.v2.runtime.JAXBContextImpl, prop: com.sun.xml.bind.v2.model.runtime.RuntimeReferencePropertyInfo);
								public reset(o: any): void;
								public isHiddenByOverride(): boolean;
								public setHiddenByOverride(hidden: boolean): void;
								public getInfo(): com.sun.xml.bind.v2.model.runtime.RuntimePropertyInfo;
								public createBodyUnmarshaller(chain: com.sun.xml.bind.v2.runtime.property.UnmarshallerChain, loaders: com.sun.xml.bind.v2.util.QNameMap<com.sun.xml.bind.v2.runtime.unmarshaller.ChildLoader>): void;
								public serializeListBody(o: any, w: com.sun.xml.bind.v2.runtime.XMLSerializer, list: any): void;
							}
							export module ArrayReferenceNodeProperty {
								export class MixedTextLoader extends com.sun.xml.bind.v2.runtime.unmarshaller.Loader {
									public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.property.ArrayReferenceNodeProperty.MixedTextLoader>;
									public constructor();
									public constructor(recv: com.sun.xml.bind.v2.runtime.unmarshaller.Receiver);
									public constructor(expectText: boolean);
									public text(state: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext.State, text: string): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module property {
							export class AttributeProperty<BeanT>  extends com.sun.xml.bind.v2.runtime.property.PropertyImpl<any> implements java.lang.Comparable<com.sun.xml.bind.v2.runtime.property.AttributeProperty<any>>  {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.property.AttributeProperty<any>>;
								public attName: com.sun.xml.bind.v2.runtime.Name;
								public xacc: com.sun.xml.bind.v2.runtime.reflect.TransducedAccessor<any>;
								public hasSerializeURIAction(): boolean;
								public getFieldName(): string;
								public compareTo(that: com.sun.xml.bind.v2.runtime.property.AttributeProperty<any>): number;
								public wrapUp(): void;
								public serializeAttributes(o: any, w: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
								public constructor(context: com.sun.xml.bind.v2.runtime.JAXBContextImpl, prop: com.sun.xml.bind.v2.model.runtime.RuntimeAttributePropertyInfo);
								public getIdValue(bean: any): string;
								public constructor(context: com.sun.xml.bind.v2.runtime.JAXBContextImpl, prop: com.sun.xml.bind.v2.model.runtime.RuntimePropertyInfo);
								public getKind(): com.sun.xml.bind.v2.model.core.PropertyKind;
								public serializeBody(o: any, w: com.sun.xml.bind.v2.runtime.XMLSerializer, outerPeer: any): void;
								public serializeURIs(o: any, w: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
								public getElementPropertyAccessor(nsUri: string, localName: string): com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>;
								public buildChildElementUnmarshallers(chainElem: com.sun.xml.bind.v2.runtime.property.UnmarshallerChain, handlers: com.sun.xml.bind.v2.util.QNameMap<com.sun.xml.bind.v2.runtime.unmarshaller.ChildLoader>): void;
								public reset(o: any): void;
								public isHiddenByOverride(): boolean;
								public setHiddenByOverride(hidden: boolean): void;
								public getInfo(): com.sun.xml.bind.v2.model.runtime.RuntimePropertyInfo;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module property {
							export class ListElementProperty<BeanT, ListT, ItemT>  extends com.sun.xml.bind.v2.runtime.property.ArrayProperty<any,any,any> {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.property.ListElementProperty<any,any,any>>;
								public hasSerializeURIAction(): boolean;
								public getFieldName(): string;
								public wrapUp(): void;
								public getIdValue(bean: any): string;
								public constructor(context: com.sun.xml.bind.v2.runtime.JAXBContextImpl, prop: com.sun.xml.bind.v2.model.runtime.RuntimePropertyInfo);
								public getKind(): com.sun.xml.bind.v2.model.core.PropertyKind;
								public serializeBody(o: any, w: com.sun.xml.bind.v2.runtime.XMLSerializer, outerPeer: any): void;
								public serializeURIs(o: any, w: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
								public constructor(grammar: com.sun.xml.bind.v2.runtime.JAXBContextImpl, prop: com.sun.xml.bind.v2.model.runtime.RuntimeElementPropertyInfo);
								public getElementPropertyAccessor(nsUri: string, localName: string): com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>;
								public buildChildElementUnmarshallers(chain: com.sun.xml.bind.v2.runtime.property.UnmarshallerChain, handlers: com.sun.xml.bind.v2.util.QNameMap<com.sun.xml.bind.v2.runtime.unmarshaller.ChildLoader>): void;
								public reset(o: any): void;
								public isHiddenByOverride(): boolean;
								public setHiddenByOverride(hidden: boolean): void;
								public getInfo(): com.sun.xml.bind.v2.model.runtime.RuntimePropertyInfo;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module property {
							export class Messages {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.property.Messages>;
								public static UNSUBSTITUTABLE_TYPE: com.sun.xml.bind.v2.runtime.property.Messages;
								public static UNEXPECTED_JAVA_TYPE: com.sun.xml.bind.v2.runtime.property.Messages;
								public toString(): string;
								public static values(): native.Array<com.sun.xml.bind.v2.runtime.property.Messages>;
								public static valueOf(name: string): com.sun.xml.bind.v2.runtime.property.Messages;
								public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
								public format(objects0: native.Array<any>): string;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module property {
							export class Property<BeanT>  extends com.sun.xml.bind.v2.runtime.property.StructureLoaderBuilder {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.property.Property<any>>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.runtime.property.Property<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									reset(object0: any): void;
									serializeBody(object0: any, xMLSerializer1: com.sun.xml.bind.v2.runtime.XMLSerializer, object2: any): void;
									serializeURIs(object0: any, xMLSerializer1: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
									hasSerializeURIAction(): boolean;
									getIdValue(object0: any): string;
									getKind(): com.sun.xml.bind.v2.model.core.PropertyKind;
									getElementPropertyAccessor(string0: string, string1: string): com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>;
									wrapUp(): void;
									getInfo(): com.sun.xml.bind.v2.model.runtime.RuntimePropertyInfo;
									isHiddenByOverride(): boolean;
									setHiddenByOverride(boolean0: boolean): void;
									getFieldName(): string;
									buildChildElementUnmarshallers(unmarshallerChain0: com.sun.xml.bind.v2.runtime.property.UnmarshallerChain, qNameMap1: com.sun.xml.bind.v2.util.QNameMap<com.sun.xml.bind.v2.runtime.unmarshaller.ChildLoader>): void;
								});
								public constructor();
								public static TEXT_HANDLER: javax.xml.namespace.QName;
								public static CATCH_ALL: javax.xml.namespace.QName;
								public hasSerializeURIAction(): boolean;
								public getFieldName(): string;
								public wrapUp(): void;
								public buildChildElementUnmarshallers(unmarshallerChain0: com.sun.xml.bind.v2.runtime.property.UnmarshallerChain, qNameMap1: com.sun.xml.bind.v2.util.QNameMap<com.sun.xml.bind.v2.runtime.unmarshaller.ChildLoader>): void;
								public getKind(): com.sun.xml.bind.v2.model.core.PropertyKind;
								public setHiddenByOverride(boolean0: boolean): void;
								public reset(object0: any): void;
								public isHiddenByOverride(): boolean;
								public serializeBody(object0: any, xMLSerializer1: com.sun.xml.bind.v2.runtime.XMLSerializer, object2: any): void;
								public getIdValue(object0: any): string;
								public getElementPropertyAccessor(string0: string, string1: string): com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>;
								public serializeURIs(object0: any, xMLSerializer1: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
								public getInfo(): com.sun.xml.bind.v2.model.runtime.RuntimePropertyInfo;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module property {
							export abstract class PropertyFactory extends java.lang.Object {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.property.PropertyFactory>;
								public static create(grammar: com.sun.xml.bind.v2.runtime.JAXBContextImpl, info: com.sun.xml.bind.v2.model.runtime.RuntimePropertyInfo): com.sun.xml.bind.v2.runtime.property.Property<any>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module property {
							export abstract class PropertyImpl<BeanT>  extends com.sun.xml.bind.v2.runtime.property.Property<any> {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.property.PropertyImpl<any>>;
								public fieldName: string;
								public hasSerializeURIAction(): boolean;
								public getFieldName(): string;
								public wrapUp(): void;
								public buildChildElementUnmarshallers(unmarshallerChain0: com.sun.xml.bind.v2.runtime.property.UnmarshallerChain, qNameMap1: com.sun.xml.bind.v2.util.QNameMap<com.sun.xml.bind.v2.runtime.unmarshaller.ChildLoader>): void;
								public constructor(context: com.sun.xml.bind.v2.runtime.JAXBContextImpl, prop: com.sun.xml.bind.v2.model.runtime.RuntimePropertyInfo);
								public serializeBody(o: any, w: com.sun.xml.bind.v2.runtime.XMLSerializer, outerPeer: any): void;
								public getKind(): com.sun.xml.bind.v2.model.core.PropertyKind;
								public serializeURIs(o: any, w: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
								public getElementPropertyAccessor(nsUri: string, localName: string): com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>;
								public reset(object0: any): void;
								public isHiddenByOverride(): boolean;
								public setHiddenByOverride(hidden: boolean): void;
								public getIdValue(object0: any): string;
								public getInfo(): com.sun.xml.bind.v2.model.runtime.RuntimePropertyInfo;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module property {
							export class SingleElementLeafProperty<BeanT>  extends com.sun.xml.bind.v2.runtime.property.PropertyImpl<any> {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.property.SingleElementLeafProperty<any>>;
								public hasSerializeURIAction(): boolean;
								public getFieldName(): string;
								public wrapUp(): void;
								public getIdValue(bean: any): string;
								public constructor(context: com.sun.xml.bind.v2.runtime.JAXBContextImpl, prop: com.sun.xml.bind.v2.model.runtime.RuntimePropertyInfo);
								public serializeBody(o: any, w: com.sun.xml.bind.v2.runtime.XMLSerializer, outerPeer: any): void;
								public getKind(): com.sun.xml.bind.v2.model.core.PropertyKind;
								public serializeURIs(o: any, w: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
								public getElementPropertyAccessor(nsUri: string, localName: string): com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>;
								public constructor(context: com.sun.xml.bind.v2.runtime.JAXBContextImpl, prop: com.sun.xml.bind.v2.model.runtime.RuntimeElementPropertyInfo);
								public buildChildElementUnmarshallers(chain: com.sun.xml.bind.v2.runtime.property.UnmarshallerChain, handlers: com.sun.xml.bind.v2.util.QNameMap<com.sun.xml.bind.v2.runtime.unmarshaller.ChildLoader>): void;
								public reset(o: any): void;
								public isHiddenByOverride(): boolean;
								public setHiddenByOverride(hidden: boolean): void;
								public getInfo(): com.sun.xml.bind.v2.model.runtime.RuntimePropertyInfo;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module property {
							export class SingleElementNodeProperty<BeanT, ValueT>  extends com.sun.xml.bind.v2.runtime.property.PropertyImpl<any> {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.property.SingleElementNodeProperty<any,any>>;
								public hasSerializeURIAction(): boolean;
								public getFieldName(): string;
								public wrapUp(): void;
								public constructor(context: com.sun.xml.bind.v2.runtime.JAXBContextImpl, prop: com.sun.xml.bind.v2.model.runtime.RuntimePropertyInfo);
								public serializeBody(o: any, w: com.sun.xml.bind.v2.runtime.XMLSerializer, outerPeer: any): void;
								public getKind(): com.sun.xml.bind.v2.model.core.PropertyKind;
								public serializeURIs(o: any, w: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
								public getElementPropertyAccessor(nsUri: string, localName: string): com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>;
								public constructor(context: com.sun.xml.bind.v2.runtime.JAXBContextImpl, prop: com.sun.xml.bind.v2.model.runtime.RuntimeElementPropertyInfo);
								public buildChildElementUnmarshallers(chain: com.sun.xml.bind.v2.runtime.property.UnmarshallerChain, handlers: com.sun.xml.bind.v2.util.QNameMap<com.sun.xml.bind.v2.runtime.unmarshaller.ChildLoader>): void;
								public reset(bean: any): void;
								public isHiddenByOverride(): boolean;
								public getIdValue(beanT: any): string;
								public setHiddenByOverride(hidden: boolean): void;
								public getInfo(): com.sun.xml.bind.v2.model.runtime.RuntimePropertyInfo;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module property {
							export class SingleMapNodeProperty<BeanT, ValueT>  extends com.sun.xml.bind.v2.runtime.property.PropertyImpl<any> {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.property.SingleMapNodeProperty<any,any>>;
								public hasSerializeURIAction(): boolean;
								public getFieldName(): string;
								public wrapUp(): void;
								public getIdValue(bean: any): string;
								public constructor(context: com.sun.xml.bind.v2.runtime.JAXBContextImpl, prop: com.sun.xml.bind.v2.model.runtime.RuntimePropertyInfo);
								public getKind(): com.sun.xml.bind.v2.model.core.PropertyKind;
								public serializeBody(o: any, w: com.sun.xml.bind.v2.runtime.XMLSerializer, outerPeer: any): void;
								public serializeURIs(o: any, w: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
								public constructor(context: com.sun.xml.bind.v2.runtime.JAXBContextImpl, prop: com.sun.xml.bind.v2.model.runtime.RuntimeMapPropertyInfo);
								public getElementPropertyAccessor(nsUri: string, localName: string): com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>;
								public buildChildElementUnmarshallers(chain: com.sun.xml.bind.v2.runtime.property.UnmarshallerChain, handlers: com.sun.xml.bind.v2.util.QNameMap<com.sun.xml.bind.v2.runtime.unmarshaller.ChildLoader>): void;
								public reset(bean: any): void;
								public isHiddenByOverride(): boolean;
								public setHiddenByOverride(hidden: boolean): void;
								public getInfo(): com.sun.xml.bind.v2.model.runtime.RuntimePropertyInfo;
							}
							export module SingleMapNodeProperty {
								export class ReceiverImpl extends java.lang.Object implements com.sun.xml.bind.v2.runtime.unmarshaller.Receiver {
									public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.property.SingleMapNodeProperty.ReceiverImpl>;
									public constructor(index: number);
									public receive(state: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext.State, o: any): void;
								}
								export class Stack<T>  extends java.lang.Object {
									public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.property.SingleMapNodeProperty.Stack<any>>;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module property {
							export class SingleReferenceNodeProperty<BeanT, ValueT>  extends com.sun.xml.bind.v2.runtime.property.PropertyImpl<any> {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.property.SingleReferenceNodeProperty<any,any>>;
								public hasSerializeURIAction(): boolean;
								public getFieldName(): string;
								public wrapUp(): void;
								public constructor(context: com.sun.xml.bind.v2.runtime.JAXBContextImpl, prop: com.sun.xml.bind.v2.model.runtime.RuntimePropertyInfo);
								public serializeBody(o: any, w: com.sun.xml.bind.v2.runtime.XMLSerializer, outerPeer: any): void;
								public getKind(): com.sun.xml.bind.v2.model.core.PropertyKind;
								public serializeURIs(o: any, w: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
								public getElementPropertyAccessor(nsUri: string, localName: string): com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>;
								public buildChildElementUnmarshallers(chain: com.sun.xml.bind.v2.runtime.property.UnmarshallerChain, handlers: com.sun.xml.bind.v2.util.QNameMap<com.sun.xml.bind.v2.runtime.unmarshaller.ChildLoader>): void;
								public reset(bean: any): void;
								public constructor(context: com.sun.xml.bind.v2.runtime.JAXBContextImpl, prop: com.sun.xml.bind.v2.model.runtime.RuntimeReferencePropertyInfo);
								public isHiddenByOverride(): boolean;
								public getIdValue(beanT: any): string;
								public setHiddenByOverride(hidden: boolean): void;
								public getInfo(): com.sun.xml.bind.v2.model.runtime.RuntimePropertyInfo;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module property {
							export class StructureLoaderBuilder extends java.lang.Object {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.property.StructureLoaderBuilder>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.runtime.property.StructureLoaderBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									buildChildElementUnmarshallers(unmarshallerChain0: com.sun.xml.bind.v2.runtime.property.UnmarshallerChain, qNameMap1: com.sun.xml.bind.v2.util.QNameMap<com.sun.xml.bind.v2.runtime.unmarshaller.ChildLoader>): void;
								});
								public constructor();
								public static TEXT_HANDLER: javax.xml.namespace.QName;
								public static CATCH_ALL: javax.xml.namespace.QName;
								public buildChildElementUnmarshallers(unmarshallerChain0: com.sun.xml.bind.v2.runtime.property.UnmarshallerChain, qNameMap1: com.sun.xml.bind.v2.util.QNameMap<com.sun.xml.bind.v2.runtime.unmarshaller.ChildLoader>): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module property {
							export class TagAndType extends java.lang.Object {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.property.TagAndType>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module property {
							export class UnmarshallerChain extends java.lang.Object {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.property.UnmarshallerChain>;
								public context: com.sun.xml.bind.v2.runtime.JAXBContextImpl;
								public constructor(context: com.sun.xml.bind.v2.runtime.JAXBContextImpl);
								public allocateOffset(): number;
								public getScopeSize(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module property {
							export class Utils extends java.lang.Object {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.property.Utils>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module property {
							export class ValueProperty<BeanT>  extends com.sun.xml.bind.v2.runtime.property.PropertyImpl<any> {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.property.ValueProperty<any>>;
								public hasSerializeURIAction(): boolean;
								public getFieldName(): string;
								public wrapUp(): void;
								public getIdValue(bean: any): string;
								public constructor(context: com.sun.xml.bind.v2.runtime.JAXBContextImpl, prop: com.sun.xml.bind.v2.model.runtime.RuntimePropertyInfo);
								public serializeBody(o: any, w: com.sun.xml.bind.v2.runtime.XMLSerializer, outerPeer: any): void;
								public getKind(): com.sun.xml.bind.v2.model.core.PropertyKind;
								public serializeURIs(o: any, w: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
								public getElementPropertyAccessor(nsUri: string, localName: string): com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>;
								public buildChildElementUnmarshallers(chainElem: com.sun.xml.bind.v2.runtime.property.UnmarshallerChain, handlers: com.sun.xml.bind.v2.util.QNameMap<com.sun.xml.bind.v2.runtime.unmarshaller.ChildLoader>): void;
								public constructor(context: com.sun.xml.bind.v2.runtime.JAXBContextImpl, prop: com.sun.xml.bind.v2.model.runtime.RuntimeValuePropertyInfo);
								public reset(o: any): void;
								public isHiddenByOverride(): boolean;
								public setHiddenByOverride(hidden: boolean): void;
								public getInfo(): com.sun.xml.bind.v2.model.runtime.RuntimePropertyInfo;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module reflect {
							export abstract class Accessor<BeanT, ValueT>  extends com.sun.xml.bind.v2.runtime.unmarshaller.Receiver {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>>;
								public valueType: java.lang.Class<any>;
								public static JAXB_ELEMENT_VALUE: com.sun.xml.bind.v2.runtime.reflect.Accessor<javax.xml.bind.JAXBElement,any>;
								public set(object0: any, object1: any): void;
								public getUnadapted(bean: any): any;
								public get(object0: any): any;
								public setUnadapted(bean: any, value: any): void;
								public isValueTypeAbstractable(): boolean;
								public adapt(adapter: com.sun.xml.bind.v2.model.core.Adapter<any,any>): com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>;
								public static getErrorInstance(): com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>;
								public isAbstractable(clazz: java.lang.Class<any>): boolean;
								public adapt(targetType: java.lang.Class<any>, adapter: java.lang.Class<any>): com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>;
								public optimize(context: com.sun.xml.bind.v2.runtime.JAXBContextImpl): com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>;
								public constructor(valueType: java.lang.Class<any>);
								public receive(state: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext.State, o: any): void;
								public getValueType(): java.lang.Class<any>;
								public isAdapted(): boolean;
							}
							export module Accessor {
								export class FieldReflection<BeanT, ValueT>  extends com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any> {
									public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.reflect.Accessor.FieldReflection<any,any>>;
									public f: java.lang.reflect.Field;
									public get(object0: any): any;
									public constructor(f: java.lang.reflect.Field);
									public constructor(f: java.lang.reflect.Field, supressAccessorWarnings: boolean);
									public set(object0: any, object1: any): void;
									public constructor(valueType: java.lang.Class<any>);
									public optimize(context: com.sun.xml.bind.v2.runtime.JAXBContextImpl): com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>;
									public receive(state: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext.State, o: any): void;
									public get(bean: any): any;
									public set(bean: any, value: any): void;
								}
								export class GetterOnlyReflection<BeanT, ValueT>  extends com.sun.xml.bind.v2.runtime.reflect.Accessor.GetterSetterReflection<any,any> {
									public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.reflect.Accessor.GetterOnlyReflection<any,any>>;
									public constructor(valueType: java.lang.Class<any>);
									public constructor(getter: java.lang.reflect.Method, setter: java.lang.reflect.Method);
									public constructor(getter: java.lang.reflect.Method);
									public receive(state: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext.State, o: any): void;
									public set(bean: any, value: any): void;
								}
								export class GetterSetterReflection<BeanT, ValueT>  extends com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any> {
									public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.reflect.Accessor.GetterSetterReflection<any,any>>;
									public getter: java.lang.reflect.Method;
									public setter: java.lang.reflect.Method;
									public get(object0: any): any;
									public set(object0: any, object1: any): void;
									public constructor(valueType: java.lang.Class<any>);
									public constructor(getter: java.lang.reflect.Method, setter: java.lang.reflect.Method);
									public optimize(context: com.sun.xml.bind.v2.runtime.JAXBContextImpl): com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>;
									public receive(state: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext.State, o: any): void;
									public get(bean: any): any;
									public set(bean: any, value: any): void;
								}
								export class ReadOnlyFieldReflection<BeanT, ValueT>  extends com.sun.xml.bind.v2.runtime.reflect.Accessor.FieldReflection<any,any> {
									public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.reflect.Accessor.ReadOnlyFieldReflection<any,any>>;
									public constructor(f: java.lang.reflect.Field);
									public constructor(f: java.lang.reflect.Field, supressAccessorWarnings: boolean);
									public constructor(valueType: java.lang.Class<any>);
									public optimize(context: com.sun.xml.bind.v2.runtime.JAXBContextImpl): com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>;
									public receive(state: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext.State, o: any): void;
									public set(bean: any, value: any): void;
								}
								export class SetterOnlyReflection<BeanT, ValueT>  extends com.sun.xml.bind.v2.runtime.reflect.Accessor.GetterSetterReflection<any,any> {
									public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.reflect.Accessor.SetterOnlyReflection<any,any>>;
									public constructor(setter: java.lang.reflect.Method);
									public constructor(valueType: java.lang.Class<any>);
									public constructor(getter: java.lang.reflect.Method, setter: java.lang.reflect.Method);
									public receive(state: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext.State, o: any): void;
									public get(bean: any): any;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module reflect {
							export class AdaptedAccessor<BeanT, InMemValueT, OnWireValueT>  extends com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any> {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.reflect.AdaptedAccessor<any,any,any>>;
								public set(object0: any, object1: any): void;
								public getUnadapted(bean: any): any;
								public get(object0: any): any;
								public setUnadapted(bean: any, value: any): void;
								public receive(state: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext.State, o: any): void;
								public get(bean: any): any;
								public isAdapted(): boolean;
								public set(bean: any, o: any): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module reflect {
							export class AdaptedLister<BeanT, PropT, InMemItemT, OnWireItemT, PackT>  extends com.sun.xml.bind.v2.runtime.reflect.Lister<any,any,any,any> {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.reflect.AdaptedLister<any,any,any,any,any>>;
								public endPacking(object0: any, object1: any, accessor2: com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>): void;
								public reset(object0: any, accessor1: com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>): void;
								public addToPack(object0: any, object1: any): void;
								public addToPack(pack: any, item: any): void;
								public iterator(prop: any, context: com.sun.xml.bind.v2.runtime.XMLSerializer): com.sun.xml.bind.v2.runtime.reflect.ListIterator<any>;
								public startPacking(object0: any, accessor1: com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>): any;
								public iterator(object0: any, xMLSerializer1: com.sun.xml.bind.v2.runtime.XMLSerializer): com.sun.xml.bind.v2.runtime.reflect.ListIterator<any>;
								public endPacking(pack: any, bean: any, accessor: com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>): void;
								public startPacking(bean: any, accessor: com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>): any;
								public reset(bean: any, accessor: com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>): void;
							}
							export module AdaptedLister {
								export class ListIteratorImpl extends com.sun.xml.bind.v2.runtime.reflect.ListIterator<any> {
									public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.reflect.AdaptedLister.ListIteratorImpl>;
									public hasNext(): boolean;
									public next(): any;
									public constructor(param0: com.sun.xml.bind.v2.runtime.reflect.ListIterator<any>, core: com.sun.xml.bind.v2.runtime.XMLSerializer);
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module reflect {
							export abstract class DefaultTransducedAccessor<T>  extends com.sun.xml.bind.v2.runtime.reflect.TransducedAccessor<any> {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.reflect.DefaultTransducedAccessor<any>>;
								public writeText(w: com.sun.xml.bind.v2.runtime.XMLSerializer, o: any, fieldName: string): void;
								public writeLeafElement(w: com.sun.xml.bind.v2.runtime.XMLSerializer, tagName: com.sun.xml.bind.v2.runtime.Name, o: any, fieldName: string): void;
								public print(object0: any): string;
								public writeLeafElement(xMLSerializer0: com.sun.xml.bind.v2.runtime.XMLSerializer, name1: com.sun.xml.bind.v2.runtime.Name, object2: any, string3: string): void;
								public constructor();
								public writeText(xMLSerializer0: com.sun.xml.bind.v2.runtime.XMLSerializer, object1: any, string2: string): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module reflect {
							export class ListIterator<E>  extends java.lang.Object {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.reflect.ListIterator<any>>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.runtime.reflect.ListIterator<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									hasNext(): boolean;
									next(): E;
								});
								public constructor();
								public next(): E;
								public hasNext(): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module reflect {
							export class ListTransducedAccessorImpl<BeanT, ListT, ItemT, PackT>  extends com.sun.xml.bind.v2.runtime.reflect.DefaultTransducedAccessor<any> {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.reflect.ListTransducedAccessorImpl<any,any,any,any>>;
								public parse(bean: any, lexical: string): void;
								public hasValue(object0: any): boolean;
								public useNamespace(): boolean;
								public hasValue(bean: any): boolean;
								public declareNamespace(bean: any, w: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
								public parse(object0: any, charSequence1: string): void;
								public declareNamespace(o: any, w: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
								public print(o: any): string;
								public constructor(xducer: com.sun.xml.bind.v2.runtime.Transducer<any>, acc: com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>, lister: com.sun.xml.bind.v2.runtime.reflect.Lister<any,any,any,any>);
								public print(object0: any): string;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module reflect {
							export abstract class Lister<BeanT, PropT, ItemT, PackT>  extends java.lang.Object {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.reflect.Lister<any,any,any,any>>;
								public static ERROR: com.sun.xml.bind.v2.runtime.reflect.Lister<any,any,any,any>;
								public static getErrorInstance(): com.sun.xml.bind.v2.runtime.reflect.Lister<any,any,any,any>;
								public addToPack(object0: PackT, object1: ItemT): void;
								public startPacking(object0: BeanT, accessor1: com.sun.xml.bind.v2.runtime.reflect.Accessor<BeanT,PropT>): PackT;
								public iterator(object0: PropT, xMLSerializer1: com.sun.xml.bind.v2.runtime.XMLSerializer): com.sun.xml.bind.v2.runtime.reflect.ListIterator<ItemT>;
								public endPacking(object0: PackT, object1: BeanT, accessor2: com.sun.xml.bind.v2.runtime.reflect.Accessor<BeanT,PropT>): void;
								public static create(fieldType: java.lang.reflect.Type, idness: com.sun.xml.bind.v2.model.core.ID, adapter: com.sun.xml.bind.v2.model.core.Adapter<any,any>): com.sun.xml.bind.v2.runtime.reflect.Lister<any,any,any,any>;
								public constructor();
								public reset(object0: BeanT, accessor1: com.sun.xml.bind.v2.runtime.reflect.Accessor<BeanT,PropT>): void;
							}
							export module Lister {
								export class ArrayLister<BeanT, ItemT>  extends com.sun.xml.bind.v2.runtime.reflect.Lister<any,native.Array<any>,any,com.sun.xml.bind.v2.runtime.reflect.Lister.Pack<any>> {
									public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.reflect.Lister.ArrayLister<any,any>>;
									public constructor();
									public startPacking(object0: any, accessor1: com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>): any;
									public endPacking(object0: any, object1: any, accessor2: com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>): void;
									public iterator(objects: native.Array<any>, context: com.sun.xml.bind.v2.runtime.XMLSerializer): com.sun.xml.bind.v2.runtime.reflect.ListIterator<any>;
									public reset(o: any, acc: com.sun.xml.bind.v2.runtime.reflect.Accessor<any,native.Array<any>>): void;
									public startPacking(current: any, acc: com.sun.xml.bind.v2.runtime.reflect.Accessor<any,native.Array<any>>): com.sun.xml.bind.v2.runtime.reflect.Lister.Pack<any>;
									public addToPack(object0: any, object1: any): void;
									public endPacking(pack: com.sun.xml.bind.v2.runtime.reflect.Lister.Pack<any>, bean: any, acc: com.sun.xml.bind.v2.runtime.reflect.Accessor<any,native.Array<any>>): void;
									public iterator(object0: any, xMLSerializer1: com.sun.xml.bind.v2.runtime.XMLSerializer): com.sun.xml.bind.v2.runtime.reflect.ListIterator<any>;
									public constructor(itemType: java.lang.Class<any>);
									public addToPack(objects: com.sun.xml.bind.v2.runtime.reflect.Lister.Pack<any>, o: any): void;
									public reset(object0: any, accessor1: com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>): void;
								}
								export class CollectionLister<BeanT, T>  extends com.sun.xml.bind.v2.runtime.reflect.Lister<any,any,any,any> {
									public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.reflect.Lister.CollectionLister<any,any>>;
									public constructor();
									public startPacking(object0: any, accessor1: com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>): any;
									public endPacking(object0: any, object1: any, accessor2: com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>): void;
									public iterator(collection: any, context: com.sun.xml.bind.v2.runtime.XMLSerializer): com.sun.xml.bind.v2.runtime.reflect.ListIterator<any>;
									public addToPack(object0: any, object1: any): void;
									public reset(bean: any, acc: com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>): void;
									public constructor(implClass: java.lang.Class<any>);
									public iterator(object0: any, xMLSerializer1: com.sun.xml.bind.v2.runtime.XMLSerializer): com.sun.xml.bind.v2.runtime.reflect.ListIterator<any>;
									public startPacking(bean: any, acc: com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>): any;
									public endPacking(collection: any, bean: any, acc: com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>): void;
									public reset(object0: any, accessor1: com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>): void;
									public addToPack(collection: any, o: any): void;
								}
								export class IDREFS<BeanT, PropT>  extends com.sun.xml.bind.v2.runtime.reflect.Lister<any,any,string,com.sun.xml.bind.v2.runtime.reflect.Lister.IDREFS.Pack> {
									public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.reflect.Lister.IDREFS<any,any>>;
									public constructor();
									public startPacking(object0: any, accessor1: com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>): any;
									public startPacking(bean: any, acc: com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>): com.sun.xml.bind.v2.runtime.reflect.Lister.IDREFS.Pack;
									public endPacking(object0: any, object1: any, accessor2: com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>): void;
									public addToPack(pack: com.sun.xml.bind.v2.runtime.reflect.Lister.IDREFS.Pack, item: string): void;
									public endPacking(pack: com.sun.xml.bind.v2.runtime.reflect.Lister.IDREFS.Pack, bean: any, acc: com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>): void;
									public addToPack(object0: any, object1: any): void;
									public reset(bean: any, acc: com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>): void;
									public constructor(core: com.sun.xml.bind.v2.runtime.reflect.Lister<any,any,any,any>, itemType: java.lang.Class<any>);
									public iterator(prop: any, context: com.sun.xml.bind.v2.runtime.XMLSerializer): com.sun.xml.bind.v2.runtime.reflect.ListIterator<string>;
									public iterator(object0: any, xMLSerializer1: com.sun.xml.bind.v2.runtime.XMLSerializer): com.sun.xml.bind.v2.runtime.reflect.ListIterator<any>;
									public reset(object0: any, accessor1: com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>): void;
								}
								export module IDREFS {
									export class Pack extends java.lang.Object implements com.sun.xml.bind.v2.runtime.unmarshaller.Patcher {
										public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.reflect.Lister.IDREFS.Pack>;
										public add(item: string): void;
										public run(): void;
										public constructor(param0: any, bean: com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>);
									}
								}
								export class IDREFSIterator extends com.sun.xml.bind.v2.runtime.reflect.ListIterator<string> {
									public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.reflect.Lister.IDREFSIterator>;
									public last(): any;
									public hasNext(): boolean;
									public next(): string;
									public next(): any;
								}
								export class Pack<ItemT>  extends java.util.ArrayList<any> {
									public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.reflect.Lister.Pack<any>>;
									public iterator(): java.util.Iterator<any>;
									public removeIf(filter: any /* any*/): boolean;
									public lastIndexOf(o: any): number;
									public indexOf(o: any): number;
									public add(e: any): boolean;
									public retainAll(c: java.util.Collection<any>): boolean;
									public add(index: number, element: any): void;
									public replaceAll(operator: any /* any*/): void;
									public constructor(c: java.util.Collection<any>);
									public equals(o: any): boolean;
									public listIterator(index: number): java.util.ListIterator<any>;
									public contains(o: any): boolean;
									public subList(fromIndex: number, toIndex: number): java.util.List<any>;
									public constructor(initialCapacity: number);
									public stream(): java.util.stream.Stream<any>;
									public constructor(itemType: java.lang.Class<any>);
									public isEmpty(): boolean;
									public toArray(): native.Array<any>;
									public addAll(c: java.util.Collection<any>): boolean;
									public constructor();
									public addAll(index: number, c: java.util.Collection<any>): boolean;
									public hashCode(): number;
									public toArray(a: native.Array<any>): native.Array<any>;
									public parallelStream(): java.util.stream.Stream<any>;
									public size(): number;
									public get(index: number): any;
									public remove(o: any): boolean;
									public listIterator(): java.util.ListIterator<any>;
									public clear(): void;
									public build(): native.Array<any>;
									public spliterator(): java.util.Spliterator<any>;
									public sort(c: java.util.Comparator<any>): void;
									public set(index: number, element: any): any;
									public remove(index: number): any;
									public removeAll(c: java.util.Collection<any>): boolean;
									public containsAll(c: java.util.Collection<any>): boolean;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module reflect {
							export class Messages {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.reflect.Messages>;
								public static UNABLE_TO_ACCESS_NON_PUBLIC_FIELD: com.sun.xml.bind.v2.runtime.reflect.Messages;
								public static UNASSIGNABLE_TYPE: com.sun.xml.bind.v2.runtime.reflect.Messages;
								public static NO_SETTER: com.sun.xml.bind.v2.runtime.reflect.Messages;
								public static NO_GETTER: com.sun.xml.bind.v2.runtime.reflect.Messages;
								public toString(): string;
								public static values(): native.Array<com.sun.xml.bind.v2.runtime.reflect.Messages>;
								public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
								public format(objects0: native.Array<any>): string;
								public static valueOf(name: string): com.sun.xml.bind.v2.runtime.reflect.Messages;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module reflect {
							export class NullSafeAccessor<B, V, P>  extends com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any> {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.reflect.NullSafeAccessor<any,any,any>>;
								public set(object0: any, object1: any): void;
								public get(object0: any): any;
								public constructor(valueType: java.lang.Class<any>);
								public receive(state: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext.State, o: any): void;
								public get(bean: any): any;
								public set(bean: any, value: any): void;
								public constructor(core: com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>, lister: com.sun.xml.bind.v2.runtime.reflect.Lister<any,any,any,any>);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module reflect {
							export class PrimitiveArrayListerBoolean<BeanT>  extends com.sun.xml.bind.v2.runtime.reflect.Lister<any,native.Array<boolean>,java.lang.Boolean,com.sun.xml.bind.v2.runtime.reflect.PrimitiveArrayListerBoolean.BooleanArrayPack> {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.reflect.PrimitiveArrayListerBoolean<any>>;
								public endPacking(object0: any, object1: any, accessor2: com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>): void;
								public reset(object0: any, accessor1: com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>): void;
								public iterator(objects: native.Array<boolean>, context: com.sun.xml.bind.v2.runtime.XMLSerializer): com.sun.xml.bind.v2.runtime.reflect.ListIterator<java.lang.Boolean>;
								public addToPack(object0: any, object1: any): void;
								public endPacking(pack: com.sun.xml.bind.v2.runtime.reflect.PrimitiveArrayListerBoolean.BooleanArrayPack, bean: any, acc: com.sun.xml.bind.v2.runtime.reflect.Accessor<any,native.Array<boolean>>): void;
								public startPacking(object0: any, accessor1: com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>): any;
								public reset(o: any, acc: com.sun.xml.bind.v2.runtime.reflect.Accessor<any,native.Array<boolean>>): void;
								public iterator(object0: any, xMLSerializer1: com.sun.xml.bind.v2.runtime.XMLSerializer): com.sun.xml.bind.v2.runtime.reflect.ListIterator<any>;
								public addToPack(objects: com.sun.xml.bind.v2.runtime.reflect.PrimitiveArrayListerBoolean.BooleanArrayPack, o: java.lang.Boolean): void;
								public startPacking(current: any, acc: com.sun.xml.bind.v2.runtime.reflect.Accessor<any,native.Array<boolean>>): com.sun.xml.bind.v2.runtime.reflect.PrimitiveArrayListerBoolean.BooleanArrayPack;
							}
							export module PrimitiveArrayListerBoolean {
								export class BooleanArrayPack extends java.lang.Object {
									public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.reflect.PrimitiveArrayListerBoolean.BooleanArrayPack>;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module reflect {
							export class PrimitiveArrayListerByte<BeanT>  extends com.sun.xml.bind.v2.runtime.reflect.Lister<any,native.Array<number>,java.lang.Byte,com.sun.xml.bind.v2.runtime.reflect.PrimitiveArrayListerByte.ByteArrayPack> {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.reflect.PrimitiveArrayListerByte<any>>;
								public endPacking(object0: any, object1: any, accessor2: com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>): void;
								public reset(object0: any, accessor1: com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>): void;
								public addToPack(object0: any, object1: any): void;
								public endPacking(pack: com.sun.xml.bind.v2.runtime.reflect.PrimitiveArrayListerByte.ByteArrayPack, bean: any, acc: com.sun.xml.bind.v2.runtime.reflect.Accessor<any,native.Array<number>>): void;
								public startPacking(object0: any, accessor1: com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>): any;
								public iterator(object0: any, xMLSerializer1: com.sun.xml.bind.v2.runtime.XMLSerializer): com.sun.xml.bind.v2.runtime.reflect.ListIterator<any>;
								public reset(o: any, acc: com.sun.xml.bind.v2.runtime.reflect.Accessor<any,native.Array<number>>): void;
								public startPacking(current: any, acc: com.sun.xml.bind.v2.runtime.reflect.Accessor<any,native.Array<number>>): com.sun.xml.bind.v2.runtime.reflect.PrimitiveArrayListerByte.ByteArrayPack;
								public iterator(objects: native.Array<number>, context: com.sun.xml.bind.v2.runtime.XMLSerializer): com.sun.xml.bind.v2.runtime.reflect.ListIterator<java.lang.Byte>;
								public addToPack(objects: com.sun.xml.bind.v2.runtime.reflect.PrimitiveArrayListerByte.ByteArrayPack, o: java.lang.Byte): void;
							}
							export module PrimitiveArrayListerByte {
								export class ByteArrayPack extends java.lang.Object {
									public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.reflect.PrimitiveArrayListerByte.ByteArrayPack>;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module reflect {
							export class PrimitiveArrayListerCharacter<BeanT>  extends com.sun.xml.bind.v2.runtime.reflect.Lister<any,native.Array<string>,java.lang.Character,com.sun.xml.bind.v2.runtime.reflect.PrimitiveArrayListerCharacter.CharacterArrayPack> {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.reflect.PrimitiveArrayListerCharacter<any>>;
								public endPacking(object0: any, object1: any, accessor2: com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>): void;
								public reset(object0: any, accessor1: com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>): void;
								public endPacking(pack: com.sun.xml.bind.v2.runtime.reflect.PrimitiveArrayListerCharacter.CharacterArrayPack, bean: any, acc: com.sun.xml.bind.v2.runtime.reflect.Accessor<any,native.Array<string>>): void;
								public iterator(objects: native.Array<string>, context: com.sun.xml.bind.v2.runtime.XMLSerializer): com.sun.xml.bind.v2.runtime.reflect.ListIterator<java.lang.Character>;
								public addToPack(object0: any, object1: any): void;
								public startPacking(current: any, acc: com.sun.xml.bind.v2.runtime.reflect.Accessor<any,native.Array<string>>): com.sun.xml.bind.v2.runtime.reflect.PrimitiveArrayListerCharacter.CharacterArrayPack;
								public startPacking(object0: any, accessor1: com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>): any;
								public addToPack(objects: com.sun.xml.bind.v2.runtime.reflect.PrimitiveArrayListerCharacter.CharacterArrayPack, o: java.lang.Character): void;
								public reset(o: any, acc: com.sun.xml.bind.v2.runtime.reflect.Accessor<any,native.Array<string>>): void;
								public iterator(object0: any, xMLSerializer1: com.sun.xml.bind.v2.runtime.XMLSerializer): com.sun.xml.bind.v2.runtime.reflect.ListIterator<any>;
							}
							export module PrimitiveArrayListerCharacter {
								export class CharacterArrayPack extends java.lang.Object {
									public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.reflect.PrimitiveArrayListerCharacter.CharacterArrayPack>;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module reflect {
							export class PrimitiveArrayListerDouble<BeanT>  extends com.sun.xml.bind.v2.runtime.reflect.Lister<any,native.Array<number>,java.lang.Double,com.sun.xml.bind.v2.runtime.reflect.PrimitiveArrayListerDouble.DoubleArrayPack> {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.reflect.PrimitiveArrayListerDouble<any>>;
								public endPacking(object0: any, object1: any, accessor2: com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>): void;
								public reset(object0: any, accessor1: com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>): void;
								public addToPack(object0: any, object1: any): void;
								public endPacking(pack: com.sun.xml.bind.v2.runtime.reflect.PrimitiveArrayListerDouble.DoubleArrayPack, bean: any, acc: com.sun.xml.bind.v2.runtime.reflect.Accessor<any,native.Array<number>>): void;
								public startPacking(object0: any, accessor1: com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>): any;
								public addToPack(objects: com.sun.xml.bind.v2.runtime.reflect.PrimitiveArrayListerDouble.DoubleArrayPack, o: java.lang.Double): void;
								public startPacking(current: any, acc: com.sun.xml.bind.v2.runtime.reflect.Accessor<any,native.Array<number>>): com.sun.xml.bind.v2.runtime.reflect.PrimitiveArrayListerDouble.DoubleArrayPack;
								public iterator(object0: any, xMLSerializer1: com.sun.xml.bind.v2.runtime.XMLSerializer): com.sun.xml.bind.v2.runtime.reflect.ListIterator<any>;
								public iterator(objects: native.Array<number>, context: com.sun.xml.bind.v2.runtime.XMLSerializer): com.sun.xml.bind.v2.runtime.reflect.ListIterator<java.lang.Double>;
								public reset(o: any, acc: com.sun.xml.bind.v2.runtime.reflect.Accessor<any,native.Array<number>>): void;
							}
							export module PrimitiveArrayListerDouble {
								export class DoubleArrayPack extends java.lang.Object {
									public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.reflect.PrimitiveArrayListerDouble.DoubleArrayPack>;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module reflect {
							export class PrimitiveArrayListerFloat<BeanT>  extends com.sun.xml.bind.v2.runtime.reflect.Lister<any,native.Array<number>,java.lang.Float,com.sun.xml.bind.v2.runtime.reflect.PrimitiveArrayListerFloat.FloatArrayPack> {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.reflect.PrimitiveArrayListerFloat<any>>;
								public endPacking(object0: any, object1: any, accessor2: com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>): void;
								public reset(object0: any, accessor1: com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>): void;
								public endPacking(pack: com.sun.xml.bind.v2.runtime.reflect.PrimitiveArrayListerFloat.FloatArrayPack, bean: any, acc: com.sun.xml.bind.v2.runtime.reflect.Accessor<any,native.Array<number>>): void;
								public addToPack(objects: com.sun.xml.bind.v2.runtime.reflect.PrimitiveArrayListerFloat.FloatArrayPack, o: java.lang.Float): void;
								public iterator(objects: native.Array<number>, context: com.sun.xml.bind.v2.runtime.XMLSerializer): com.sun.xml.bind.v2.runtime.reflect.ListIterator<java.lang.Float>;
								public addToPack(object0: any, object1: any): void;
								public startPacking(object0: any, accessor1: com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>): any;
								public iterator(object0: any, xMLSerializer1: com.sun.xml.bind.v2.runtime.XMLSerializer): com.sun.xml.bind.v2.runtime.reflect.ListIterator<any>;
								public reset(o: any, acc: com.sun.xml.bind.v2.runtime.reflect.Accessor<any,native.Array<number>>): void;
								public startPacking(current: any, acc: com.sun.xml.bind.v2.runtime.reflect.Accessor<any,native.Array<number>>): com.sun.xml.bind.v2.runtime.reflect.PrimitiveArrayListerFloat.FloatArrayPack;
							}
							export module PrimitiveArrayListerFloat {
								export class FloatArrayPack extends java.lang.Object {
									public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.reflect.PrimitiveArrayListerFloat.FloatArrayPack>;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module reflect {
							export class PrimitiveArrayListerInteger<BeanT>  extends com.sun.xml.bind.v2.runtime.reflect.Lister<any,native.Array<number>,java.lang.Integer,com.sun.xml.bind.v2.runtime.reflect.PrimitiveArrayListerInteger.IntegerArrayPack> {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.reflect.PrimitiveArrayListerInteger<any>>;
								public endPacking(object0: any, object1: any, accessor2: com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>): void;
								public reset(object0: any, accessor1: com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>): void;
								public addToPack(object0: any, object1: any): void;
								public addToPack(objects: com.sun.xml.bind.v2.runtime.reflect.PrimitiveArrayListerInteger.IntegerArrayPack, o: java.lang.Integer): void;
								public iterator(objects: native.Array<number>, context: com.sun.xml.bind.v2.runtime.XMLSerializer): com.sun.xml.bind.v2.runtime.reflect.ListIterator<java.lang.Integer>;
								public startPacking(object0: any, accessor1: com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>): any;
								public iterator(object0: any, xMLSerializer1: com.sun.xml.bind.v2.runtime.XMLSerializer): com.sun.xml.bind.v2.runtime.reflect.ListIterator<any>;
								public reset(o: any, acc: com.sun.xml.bind.v2.runtime.reflect.Accessor<any,native.Array<number>>): void;
								public startPacking(current: any, acc: com.sun.xml.bind.v2.runtime.reflect.Accessor<any,native.Array<number>>): com.sun.xml.bind.v2.runtime.reflect.PrimitiveArrayListerInteger.IntegerArrayPack;
								public endPacking(pack: com.sun.xml.bind.v2.runtime.reflect.PrimitiveArrayListerInteger.IntegerArrayPack, bean: any, acc: com.sun.xml.bind.v2.runtime.reflect.Accessor<any,native.Array<number>>): void;
							}
							export module PrimitiveArrayListerInteger {
								export class IntegerArrayPack extends java.lang.Object {
									public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.reflect.PrimitiveArrayListerInteger.IntegerArrayPack>;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module reflect {
							export class PrimitiveArrayListerLong<BeanT>  extends com.sun.xml.bind.v2.runtime.reflect.Lister<any,native.Array<number>,java.lang.Long,com.sun.xml.bind.v2.runtime.reflect.PrimitiveArrayListerLong.LongArrayPack> {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.reflect.PrimitiveArrayListerLong<any>>;
								public endPacking(object0: any, object1: any, accessor2: com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>): void;
								public reset(object0: any, accessor1: com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>): void;
								public addToPack(object0: any, object1: any): void;
								public addToPack(objects: com.sun.xml.bind.v2.runtime.reflect.PrimitiveArrayListerLong.LongArrayPack, o: java.lang.Long): void;
								public startPacking(current: any, acc: com.sun.xml.bind.v2.runtime.reflect.Accessor<any,native.Array<number>>): com.sun.xml.bind.v2.runtime.reflect.PrimitiveArrayListerLong.LongArrayPack;
								public startPacking(object0: any, accessor1: com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>): any;
								public iterator(object0: any, xMLSerializer1: com.sun.xml.bind.v2.runtime.XMLSerializer): com.sun.xml.bind.v2.runtime.reflect.ListIterator<any>;
								public iterator(objects: native.Array<number>, context: com.sun.xml.bind.v2.runtime.XMLSerializer): com.sun.xml.bind.v2.runtime.reflect.ListIterator<java.lang.Long>;
								public reset(o: any, acc: com.sun.xml.bind.v2.runtime.reflect.Accessor<any,native.Array<number>>): void;
								public endPacking(pack: com.sun.xml.bind.v2.runtime.reflect.PrimitiveArrayListerLong.LongArrayPack, bean: any, acc: com.sun.xml.bind.v2.runtime.reflect.Accessor<any,native.Array<number>>): void;
							}
							export module PrimitiveArrayListerLong {
								export class LongArrayPack extends java.lang.Object {
									public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.reflect.PrimitiveArrayListerLong.LongArrayPack>;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module reflect {
							export class PrimitiveArrayListerShort<BeanT>  extends com.sun.xml.bind.v2.runtime.reflect.Lister<any,native.Array<number>,java.lang.Short,com.sun.xml.bind.v2.runtime.reflect.PrimitiveArrayListerShort.ShortArrayPack> {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.reflect.PrimitiveArrayListerShort<any>>;
								public endPacking(object0: any, object1: any, accessor2: com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>): void;
								public reset(object0: any, accessor1: com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>): void;
								public addToPack(objects: com.sun.xml.bind.v2.runtime.reflect.PrimitiveArrayListerShort.ShortArrayPack, o: java.lang.Short): void;
								public endPacking(pack: com.sun.xml.bind.v2.runtime.reflect.PrimitiveArrayListerShort.ShortArrayPack, bean: any, acc: com.sun.xml.bind.v2.runtime.reflect.Accessor<any,native.Array<number>>): void;
								public startPacking(current: any, acc: com.sun.xml.bind.v2.runtime.reflect.Accessor<any,native.Array<number>>): com.sun.xml.bind.v2.runtime.reflect.PrimitiveArrayListerShort.ShortArrayPack;
								public addToPack(object0: any, object1: any): void;
								public startPacking(object0: any, accessor1: com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>): any;
								public iterator(object0: any, xMLSerializer1: com.sun.xml.bind.v2.runtime.XMLSerializer): com.sun.xml.bind.v2.runtime.reflect.ListIterator<any>;
								public iterator(objects: native.Array<number>, context: com.sun.xml.bind.v2.runtime.XMLSerializer): com.sun.xml.bind.v2.runtime.reflect.ListIterator<java.lang.Short>;
								public reset(o: any, acc: com.sun.xml.bind.v2.runtime.reflect.Accessor<any,native.Array<number>>): void;
							}
							export module PrimitiveArrayListerShort {
								export class ShortArrayPack extends java.lang.Object {
									public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.reflect.PrimitiveArrayListerShort.ShortArrayPack>;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module reflect {
							export abstract class TransducedAccessor<BeanT>  extends java.lang.Object {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.reflect.TransducedAccessor<any>>;
								public parse(object0: BeanT, charSequence1: string): void;
								public writeLeafElement(xMLSerializer0: com.sun.xml.bind.v2.runtime.XMLSerializer, name1: com.sun.xml.bind.v2.runtime.Name, object2: BeanT, string3: string): void;
								public useNamespace(): boolean;
								public declareNamespace(o: BeanT, w: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
								public static get(context: com.sun.xml.bind.v2.runtime.JAXBContextImpl, ref: com.sun.xml.bind.v2.model.runtime.RuntimeNonElementRef): com.sun.xml.bind.v2.runtime.reflect.TransducedAccessor<any>;
								public print(object0: BeanT): string;
								public writeText(xMLSerializer0: com.sun.xml.bind.v2.runtime.XMLSerializer, object1: BeanT, string2: string): void;
								public constructor();
								public hasValue(object0: BeanT): boolean;
							}
							export module TransducedAccessor {
								export class CompositeContextDependentTransducedAccessorImpl<BeanT, ValueT>  extends com.sun.xml.bind.v2.runtime.reflect.TransducedAccessor.CompositeTransducedAccessorImpl<any,any> {
									public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.reflect.TransducedAccessor.CompositeContextDependentTransducedAccessorImpl<any,any>>;
									public constructor();
									public declareNamespace(o: any, w: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
									public constructor(context: com.sun.xml.bind.v2.runtime.JAXBContextImpl, xducer: com.sun.xml.bind.v2.runtime.Transducer<any>, acc: com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>);
									public writeLeafElement(w: com.sun.xml.bind.v2.runtime.XMLSerializer, tagName: com.sun.xml.bind.v2.runtime.Name, o: any, fieldName: string): void;
									public useNamespace(): boolean;
									public declareNamespace(bean: any, w: com.sun.xml.bind.v2.runtime.XMLSerializer): void;
								}
								export class CompositeTransducedAccessorImpl<BeanT, ValueT>  extends com.sun.xml.bind.v2.runtime.reflect.TransducedAccessor<any> {
									public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.reflect.TransducedAccessor.CompositeTransducedAccessorImpl<any,any>>;
									public xducer: com.sun.xml.bind.v2.runtime.Transducer<any>;
									public acc: com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>;
									public constructor();
									public parse(object0: any, charSequence1: string): void;
									public parse(bean: any, lexical: string): void;
									public print(object0: any): string;
									public hasValue(bean: any): boolean;
									public print(bean: any): string;
									public constructor(context: com.sun.xml.bind.v2.runtime.JAXBContextImpl, xducer: com.sun.xml.bind.v2.runtime.Transducer<any>, acc: com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>);
									public writeLeafElement(w: com.sun.xml.bind.v2.runtime.XMLSerializer, tagName: com.sun.xml.bind.v2.runtime.Name, o: any, fieldName: string): void;
									public writeText(w: com.sun.xml.bind.v2.runtime.XMLSerializer, o: any, fieldName: string): void;
									public hasValue(object0: any): boolean;
									public writeLeafElement(xMLSerializer0: com.sun.xml.bind.v2.runtime.XMLSerializer, name1: com.sun.xml.bind.v2.runtime.Name, object2: any, string3: string): void;
									public writeText(xMLSerializer0: com.sun.xml.bind.v2.runtime.XMLSerializer, object1: any, string2: string): void;
								}
								export class IDREFTransducedAccessorImpl<BeanT, TargetT>  extends com.sun.xml.bind.v2.runtime.reflect.DefaultTransducedAccessor<any> {
									public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.reflect.TransducedAccessor.IDREFTransducedAccessorImpl<any,any>>;
									public constructor();
									public parse(object0: any, charSequence1: string): void;
									public parse(bean: any, lexical: string): void;
									public print(object0: any): string;
									public hasValue(bean: any): boolean;
									public print(bean: any): string;
									public hasValue(object0: any): boolean;
									public constructor(acc: com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>);
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module reflect {
							export class Utils extends java.lang.Object {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.reflect.Utils>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module reflect {
							export module opt {
								export class AccessorInjector extends java.lang.Object {
									public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.reflect.opt.AccessorInjector>;
									public static noOptimize: boolean;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module reflect {
							export module opt {
								export class Bean extends java.lang.Object {
									public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.reflect.opt.Bean>;
									public f_boolean: boolean;
									public f_char: string;
									public f_byte: number;
									public f_short: number;
									public f_long: number;
									public f_float: number;
									public f_double: number;
									public f_ref: com.sun.xml.bind.v2.runtime.reflect.opt.Ref;
									public get_char(): string;
									public get_int(): number;
									public get_float(): number;
									public set_short(b: number): void;
									public set_ref(r: com.sun.xml.bind.v2.runtime.reflect.opt.Ref): void;
									public set_boolean(b: boolean): void;
									public set_int(b: number): void;
									public get_boolean(): boolean;
									public set_byte(b: number): void;
									public get_short(): number;
									public get_long(): number;
									public set_long(b: number): void;
									public get_byte(): number;
									public set_float(b: number): void;
									public get_double(): number;
									public set_double(b: number): void;
									public set_char(b: string): void;
									public get_ref(): com.sun.xml.bind.v2.runtime.reflect.opt.Ref;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module reflect {
							export module opt {
								export class Const extends java.lang.Object {
									public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.reflect.opt.Const>;
									public static default_value_byte: number;
									public static default_value_boolean: boolean;
									public static default_value_char: string;
									public static default_value_float: number;
									public static default_value_double: number;
									public static default_value_int: number;
									public static default_value_long: number;
									public static default_value_short: number;
									public constructor();
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module reflect {
							export module opt {
								export class FieldAccessor_Boolean extends com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any> {
									public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.reflect.opt.FieldAccessor_Boolean>;
									public constructor();
									public get(object0: any): any;
									public set(object0: any, object1: any): void;
									public constructor(valueType: java.lang.Class<any>);
									public receive(state: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext.State, o: any): void;
									public get(bean: any): any;
									public set(bean: any, value: any): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module reflect {
							export module opt {
								export class FieldAccessor_Byte extends com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any> {
									public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.reflect.opt.FieldAccessor_Byte>;
									public constructor();
									public get(object0: any): any;
									public set(object0: any, object1: any): void;
									public constructor(valueType: java.lang.Class<any>);
									public receive(state: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext.State, o: any): void;
									public get(bean: any): any;
									public set(bean: any, value: any): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module reflect {
							export module opt {
								export class FieldAccessor_Character extends com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any> {
									public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.reflect.opt.FieldAccessor_Character>;
									public constructor();
									public get(object0: any): any;
									public set(object0: any, object1: any): void;
									public constructor(valueType: java.lang.Class<any>);
									public receive(state: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext.State, o: any): void;
									public get(bean: any): any;
									public set(bean: any, value: any): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module reflect {
							export module opt {
								export class FieldAccessor_Double extends com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any> {
									public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.reflect.opt.FieldAccessor_Double>;
									public constructor();
									public get(object0: any): any;
									public set(object0: any, object1: any): void;
									public constructor(valueType: java.lang.Class<any>);
									public receive(state: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext.State, o: any): void;
									public get(bean: any): any;
									public set(bean: any, value: any): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module reflect {
							export module opt {
								export class FieldAccessor_Float extends com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any> {
									public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.reflect.opt.FieldAccessor_Float>;
									public constructor();
									public get(object0: any): any;
									public set(object0: any, object1: any): void;
									public constructor(valueType: java.lang.Class<any>);
									public receive(state: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext.State, o: any): void;
									public get(bean: any): any;
									public set(bean: any, value: any): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module reflect {
							export module opt {
								export class FieldAccessor_Integer extends com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any> {
									public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.reflect.opt.FieldAccessor_Integer>;
									public constructor();
									public get(object0: any): any;
									public set(object0: any, object1: any): void;
									public constructor(valueType: java.lang.Class<any>);
									public receive(state: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext.State, o: any): void;
									public get(bean: any): any;
									public set(bean: any, value: any): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module reflect {
							export module opt {
								export class FieldAccessor_Long extends com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any> {
									public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.reflect.opt.FieldAccessor_Long>;
									public constructor();
									public get(object0: any): any;
									public set(object0: any, object1: any): void;
									public constructor(valueType: java.lang.Class<any>);
									public receive(state: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext.State, o: any): void;
									public get(bean: any): any;
									public set(bean: any, value: any): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module reflect {
							export module opt {
								export class FieldAccessor_Ref extends com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any> {
									public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.reflect.opt.FieldAccessor_Ref>;
									public constructor();
									public get(object0: any): any;
									public set(object0: any, object1: any): void;
									public constructor(valueType: java.lang.Class<any>);
									public receive(state: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext.State, o: any): void;
									public get(bean: any): any;
									public set(bean: any, value: any): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module reflect {
							export module opt {
								export class FieldAccessor_Short extends com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any> {
									public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.reflect.opt.FieldAccessor_Short>;
									public constructor();
									public get(object0: any): any;
									public set(object0: any, object1: any): void;
									public constructor(valueType: java.lang.Class<any>);
									public receive(state: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext.State, o: any): void;
									public get(bean: any): any;
									public set(bean: any, value: any): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module reflect {
							export module opt {
								export class MethodAccessor_Boolean extends com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any> {
									public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.reflect.opt.MethodAccessor_Boolean>;
									public constructor();
									public get(object0: any): any;
									public set(object0: any, object1: any): void;
									public constructor(valueType: java.lang.Class<any>);
									public receive(state: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext.State, o: any): void;
									public get(bean: any): any;
									public set(bean: any, value: any): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module reflect {
							export module opt {
								export class MethodAccessor_Byte extends com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any> {
									public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.reflect.opt.MethodAccessor_Byte>;
									public constructor();
									public get(object0: any): any;
									public set(object0: any, object1: any): void;
									public constructor(valueType: java.lang.Class<any>);
									public receive(state: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext.State, o: any): void;
									public get(bean: any): any;
									public set(bean: any, value: any): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module reflect {
							export module opt {
								export class MethodAccessor_Character extends com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any> {
									public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.reflect.opt.MethodAccessor_Character>;
									public constructor();
									public get(object0: any): any;
									public set(object0: any, object1: any): void;
									public constructor(valueType: java.lang.Class<any>);
									public receive(state: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext.State, o: any): void;
									public get(bean: any): any;
									public set(bean: any, value: any): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module reflect {
							export module opt {
								export class MethodAccessor_Double extends com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any> {
									public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.reflect.opt.MethodAccessor_Double>;
									public constructor();
									public get(object0: any): any;
									public set(object0: any, object1: any): void;
									public constructor(valueType: java.lang.Class<any>);
									public receive(state: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext.State, o: any): void;
									public get(bean: any): any;
									public set(bean: any, value: any): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module reflect {
							export module opt {
								export class MethodAccessor_Float extends com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any> {
									public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.reflect.opt.MethodAccessor_Float>;
									public constructor();
									public get(object0: any): any;
									public set(object0: any, object1: any): void;
									public constructor(valueType: java.lang.Class<any>);
									public receive(state: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext.State, o: any): void;
									public get(bean: any): any;
									public set(bean: any, value: any): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module reflect {
							export module opt {
								export class MethodAccessor_Integer extends com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any> {
									public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.reflect.opt.MethodAccessor_Integer>;
									public constructor();
									public get(object0: any): any;
									public set(object0: any, object1: any): void;
									public constructor(valueType: java.lang.Class<any>);
									public receive(state: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext.State, o: any): void;
									public get(bean: any): any;
									public set(bean: any, value: any): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module reflect {
							export module opt {
								export class MethodAccessor_Long extends com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any> {
									public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.reflect.opt.MethodAccessor_Long>;
									public constructor();
									public get(object0: any): any;
									public set(object0: any, object1: any): void;
									public constructor(valueType: java.lang.Class<any>);
									public receive(state: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext.State, o: any): void;
									public get(bean: any): any;
									public set(bean: any, value: any): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module reflect {
							export module opt {
								export class MethodAccessor_Ref extends com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any> {
									public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.reflect.opt.MethodAccessor_Ref>;
									public constructor();
									public get(object0: any): any;
									public set(object0: any, object1: any): void;
									public constructor(valueType: java.lang.Class<any>);
									public receive(state: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext.State, o: any): void;
									public get(bean: any): any;
									public set(bean: any, value: any): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module reflect {
							export module opt {
								export class MethodAccessor_Short extends com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any> {
									public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.reflect.opt.MethodAccessor_Short>;
									public constructor();
									public get(object0: any): any;
									public set(object0: any, object1: any): void;
									public constructor(valueType: java.lang.Class<any>);
									public receive(state: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext.State, o: any): void;
									public get(bean: any): any;
									public set(bean: any, value: any): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module reflect {
							export module opt {
								export class Ref extends java.lang.Object {
									public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.reflect.opt.Ref>;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module reflect {
							export module opt {
								export class SecureLoader extends java.lang.Object {
									public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.reflect.opt.SecureLoader>;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module reflect {
							export module opt {
								export class TransducedAccessor_field_Boolean extends com.sun.xml.bind.v2.runtime.reflect.DefaultTransducedAccessor<any> {
									public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.reflect.opt.TransducedAccessor_field_Boolean>;
									public constructor();
									public print(o: any): string;
									public parse(object0: any, charSequence1: string): void;
									public print(object0: any): string;
									public hasValue(o: any): boolean;
									public parse(o: any, lexical: string): void;
									public hasValue(object0: any): boolean;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module reflect {
							export module opt {
								export class TransducedAccessor_field_Byte extends com.sun.xml.bind.v2.runtime.reflect.DefaultTransducedAccessor<any> {
									public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.reflect.opt.TransducedAccessor_field_Byte>;
									public constructor();
									public print(o: any): string;
									public parse(object0: any, charSequence1: string): void;
									public print(object0: any): string;
									public hasValue(o: any): boolean;
									public parse(o: any, lexical: string): void;
									public hasValue(object0: any): boolean;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module reflect {
							export module opt {
								export class TransducedAccessor_field_Double extends com.sun.xml.bind.v2.runtime.reflect.DefaultTransducedAccessor<any> {
									public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.reflect.opt.TransducedAccessor_field_Double>;
									public constructor();
									public print(o: any): string;
									public parse(object0: any, charSequence1: string): void;
									public print(object0: any): string;
									public hasValue(o: any): boolean;
									public parse(o: any, lexical: string): void;
									public hasValue(object0: any): boolean;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module reflect {
							export module opt {
								export class TransducedAccessor_field_Float extends com.sun.xml.bind.v2.runtime.reflect.DefaultTransducedAccessor<any> {
									public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.reflect.opt.TransducedAccessor_field_Float>;
									public constructor();
									public print(o: any): string;
									public parse(object0: any, charSequence1: string): void;
									public print(object0: any): string;
									public hasValue(o: any): boolean;
									public parse(o: any, lexical: string): void;
									public hasValue(object0: any): boolean;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module reflect {
							export module opt {
								export class TransducedAccessor_field_Integer extends com.sun.xml.bind.v2.runtime.reflect.DefaultTransducedAccessor<any> {
									public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.reflect.opt.TransducedAccessor_field_Integer>;
									public constructor();
									public print(o: any): string;
									public parse(object0: any, charSequence1: string): void;
									public print(object0: any): string;
									public writeLeafElement(w: com.sun.xml.bind.v2.runtime.XMLSerializer, tagName: com.sun.xml.bind.v2.runtime.Name, o: any, fieldName: string): void;
									public hasValue(o: any): boolean;
									public parse(o: any, lexical: string): void;
									public hasValue(object0: any): boolean;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module reflect {
							export module opt {
								export class TransducedAccessor_field_Long extends com.sun.xml.bind.v2.runtime.reflect.DefaultTransducedAccessor<any> {
									public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.reflect.opt.TransducedAccessor_field_Long>;
									public constructor();
									public print(o: any): string;
									public parse(object0: any, charSequence1: string): void;
									public print(object0: any): string;
									public hasValue(o: any): boolean;
									public parse(o: any, lexical: string): void;
									public hasValue(object0: any): boolean;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module reflect {
							export module opt {
								export class TransducedAccessor_field_Short extends com.sun.xml.bind.v2.runtime.reflect.DefaultTransducedAccessor<any> {
									public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.reflect.opt.TransducedAccessor_field_Short>;
									public constructor();
									public print(o: any): string;
									public parse(object0: any, charSequence1: string): void;
									public print(object0: any): string;
									public hasValue(o: any): boolean;
									public parse(o: any, lexical: string): void;
									public hasValue(object0: any): boolean;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module reflect {
							export module opt {
								export class TransducedAccessor_method_Boolean extends com.sun.xml.bind.v2.runtime.reflect.DefaultTransducedAccessor<any> {
									public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.reflect.opt.TransducedAccessor_method_Boolean>;
									public constructor();
									public print(o: any): string;
									public parse(object0: any, charSequence1: string): void;
									public print(object0: any): string;
									public hasValue(o: any): boolean;
									public parse(o: any, lexical: string): void;
									public hasValue(object0: any): boolean;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module reflect {
							export module opt {
								export class TransducedAccessor_method_Byte extends com.sun.xml.bind.v2.runtime.reflect.DefaultTransducedAccessor<any> {
									public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.reflect.opt.TransducedAccessor_method_Byte>;
									public constructor();
									public print(o: any): string;
									public parse(object0: any, charSequence1: string): void;
									public print(object0: any): string;
									public hasValue(o: any): boolean;
									public parse(o: any, lexical: string): void;
									public hasValue(object0: any): boolean;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module reflect {
							export module opt {
								export class TransducedAccessor_method_Double extends com.sun.xml.bind.v2.runtime.reflect.DefaultTransducedAccessor<any> {
									public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.reflect.opt.TransducedAccessor_method_Double>;
									public constructor();
									public print(o: any): string;
									public parse(object0: any, charSequence1: string): void;
									public print(object0: any): string;
									public hasValue(o: any): boolean;
									public parse(o: any, lexical: string): void;
									public hasValue(object0: any): boolean;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module reflect {
							export module opt {
								export class TransducedAccessor_method_Float extends com.sun.xml.bind.v2.runtime.reflect.DefaultTransducedAccessor<any> {
									public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.reflect.opt.TransducedAccessor_method_Float>;
									public constructor();
									public print(o: any): string;
									public parse(object0: any, charSequence1: string): void;
									public print(object0: any): string;
									public hasValue(o: any): boolean;
									public parse(o: any, lexical: string): void;
									public hasValue(object0: any): boolean;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module reflect {
							export module opt {
								export class TransducedAccessor_method_Integer extends com.sun.xml.bind.v2.runtime.reflect.DefaultTransducedAccessor<any> {
									public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.reflect.opt.TransducedAccessor_method_Integer>;
									public constructor();
									public print(o: any): string;
									public parse(object0: any, charSequence1: string): void;
									public print(object0: any): string;
									public writeLeafElement(w: com.sun.xml.bind.v2.runtime.XMLSerializer, tagName: com.sun.xml.bind.v2.runtime.Name, o: any, fieldName: string): void;
									public hasValue(o: any): boolean;
									public parse(o: any, lexical: string): void;
									public hasValue(object0: any): boolean;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module reflect {
							export module opt {
								export class TransducedAccessor_method_Long extends com.sun.xml.bind.v2.runtime.reflect.DefaultTransducedAccessor<any> {
									public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.reflect.opt.TransducedAccessor_method_Long>;
									public constructor();
									public print(o: any): string;
									public parse(object0: any, charSequence1: string): void;
									public print(object0: any): string;
									public hasValue(o: any): boolean;
									public parse(o: any, lexical: string): void;
									public hasValue(object0: any): boolean;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module reflect {
							export module opt {
								export class TransducedAccessor_method_Short extends com.sun.xml.bind.v2.runtime.reflect.DefaultTransducedAccessor<any> {
									public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.reflect.opt.TransducedAccessor_method_Short>;
									public constructor();
									public print(o: any): string;
									public parse(object0: any, charSequence1: string): void;
									public print(object0: any): string;
									public hasValue(o: any): boolean;
									public parse(o: any, lexical: string): void;
									public hasValue(object0: any): boolean;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module unmarshaller {
							export class AttributesEx extends java.lang.Object implements org.xml.sax.Attributes {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.unmarshaller.AttributesEx>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.runtime.unmarshaller.AttributesEx interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getData(int0: number): string;
									getData(string0: string, string1: string): string;
									getLength(): number;
									getURI(int0: number): string;
									getLocalName(int0: number): string;
									getQName(int0: number): string;
									getType(int0: number): string;
									getValue(int0: number): string;
									getIndex(string0: string, string1: string): number;
									getIndex(string0: string): number;
									getType(string0: string, string1: string): string;
									getType(string0: string): string;
									getValue(string0: string, string1: string): string;
									getValue(string0: string): string;
								});
								public constructor();
								public getValue(int0: number): string;
								public getIndex(string0: string, string1: string): number;
								public getURI(int0: number): string;
								public getData(int0: number): string;
								public getType(string0: string, string1: string): string;
								public getLength(): number;
								public getLocalName(int0: number): string;
								public getValue(string0: string, string1: string): string;
								public getValue(string0: string): string;
								public getQName(int0: number): string;
								public getIndex(string0: string): number;
								public getType(string0: string): string;
								public getData(string0: string, string1: string): string;
								public getType(int0: number): string;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module unmarshaller {
							export class AttributesExImpl extends com.sun.xml.bind.util.AttributesImpl implements com.sun.xml.bind.v2.runtime.unmarshaller.AttributesEx {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.unmarshaller.AttributesExImpl>;
								public getLocalName(index: number): string;
								public getValue(index: number): string;
								public getType(index: number): string;
								public constructor();
								public getLength(): number;
								public getURI(index: number): string;
								public getData(nsUri: string, localName: string): string;
								public getType(uri: string, localName: string): string;
								public getType(qName: string): string;
								public getValue(qName: string): string;
								public getIndex(uri: string, localName: string): number;
								public constructor(atts: org.xml.sax.Attributes);
								public getValue(uri: string, localName: string): string;
								public getQName(index: number): string;
								public getData(idx: number): string;
								public getIndex(qName: string): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module unmarshaller {
							export class Base64Data extends com.sun.xml.bind.v2.runtime.output.Pcdata {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.unmarshaller.Base64Data>;
								public toString(): string;
								public getDataHandler(): javax.activation.DataHandler;
								public writeTo(output: com.sun.xml.bind.v2.runtime.output.UTF8XmlOutput): void;
								public codePoints(): java.util.stream.IntStream;
								public length(): number;
								public subSequence(start: number, end: number): string;
								public getMimeType(): string;
								public constructor();
								public hasData(): boolean;
								public writeTo(uTF8XmlOutput0: com.sun.xml.bind.v2.runtime.output.UTF8XmlOutput): void;
								public writeTo(output: javax.xml.stream.XMLStreamWriter): void;
								public charAt(index: number): string;
								public getExact(): native.Array<number>;
								public set(data: native.Array<number>, mimeType: string): void;
								public chars(): java.util.stream.IntStream;
								public set(data: javax.activation.DataHandler): void;
								public set(data: native.Array<number>, len: number, mimeType: string): void;
								public get(): native.Array<number>;
								public getDataLen(): number;
								public getInputStream(): java.io.InputStream;
								public writeTo(buf: native.Array<string>, start: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module unmarshaller {
							export class ChildLoader extends java.lang.Object {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.unmarshaller.ChildLoader>;
								public loader: com.sun.xml.bind.v2.runtime.unmarshaller.Loader;
								public receiver: com.sun.xml.bind.v2.runtime.unmarshaller.Receiver;
								public constructor(loader: com.sun.xml.bind.v2.runtime.unmarshaller.Loader, receiver: com.sun.xml.bind.v2.runtime.unmarshaller.Receiver);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module unmarshaller {
							export class DefaultIDResolver extends com.sun.xml.bind.IDResolver {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.unmarshaller.DefaultIDResolver>;
								public bind(string0: string, object1: any): void;
								public resolve(string0: string, class1: java.lang.Class<any>): java.util.concurrent.Callable<any>;
								public resolve(id: string, targetType: java.lang.Class<any>): java.util.concurrent.Callable<any>;
								public startDocument(eventHandler: javax.xml.bind.ValidationEventHandler): void;
								public bind(id: string, obj: any): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module unmarshaller {
							export class DefaultValueLoaderDecorator extends com.sun.xml.bind.v2.runtime.unmarshaller.Loader {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.unmarshaller.DefaultValueLoaderDecorator>;
								public startElement(state: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext.State, ea: com.sun.xml.bind.v2.runtime.unmarshaller.TagName): void;
								public constructor(expectText: boolean);
								public constructor(l: com.sun.xml.bind.v2.runtime.unmarshaller.Loader, defaultValue: string);
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module unmarshaller {
							export class Discarder extends com.sun.xml.bind.v2.runtime.unmarshaller.Loader {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.unmarshaller.Discarder>;
								public static INSTANCE: com.sun.xml.bind.v2.runtime.unmarshaller.Loader;
								public childElement(state: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext.State, ea: com.sun.xml.bind.v2.runtime.unmarshaller.TagName): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module unmarshaller {
							export class DomLoader<ResultT>  extends com.sun.xml.bind.v2.runtime.unmarshaller.Loader {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.unmarshaller.DomLoader<any>>;
								public constructor(dom: javax.xml.bind.annotation.DomHandler<any,any>);
								public leaveElement(state: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext.State, ea: com.sun.xml.bind.v2.runtime.unmarshaller.TagName): void;
								public startElement(state: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext.State, ea: com.sun.xml.bind.v2.runtime.unmarshaller.TagName): void;
								public constructor(expectText: boolean);
								public constructor();
								public childElement(state: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext.State, ea: com.sun.xml.bind.v2.runtime.unmarshaller.TagName): void;
								public text(state: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext.State, text: string): void;
							}
							export module DomLoader {
								export class State extends java.lang.Object {
									public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.unmarshaller.DomLoader.State>;
									public constructor(param0: com.sun.xml.bind.v2.runtime.unmarshaller.DomLoader<any>, context: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext);
									public getElement(): any;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module unmarshaller {
							export class FastInfosetConnector extends com.sun.xml.bind.v2.runtime.unmarshaller.StAXConnector {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.unmarshaller.FastInfosetConnector>;
								public bridge(): void;
								public constructor(visitor: com.sun.xml.bind.v2.runtime.unmarshaller.XmlVisitor);
								public constructor(fastInfosetStreamReader: com.sun.xml.fastinfoset.stax.StAXDocumentParser, visitor: com.sun.xml.bind.v2.runtime.unmarshaller.XmlVisitor);
								public getCurrentLocation(): javax.xml.stream.Location;
								public getCurrentQName(): string;
							}
							export module FastInfosetConnector {
								export class CharSequenceImpl extends java.lang.Object implements java.lang.CharSequence {
									public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.unmarshaller.FastInfosetConnector.CharSequenceImpl>;
									public chars(): java.util.stream.IntStream;
									public set(): void;
									public subSequence(start: number, end: number): string;
									public length(): number;
									public codePoints(): java.util.stream.IntStream;
									public toString(): string;
									public charAt(index: number): string;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module unmarshaller {
							export class IntArrayData extends com.sun.xml.bind.v2.runtime.output.Pcdata {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.unmarshaller.IntArrayData>;
								public toString(): string;
								public writeTo(uTF8XmlOutput0: com.sun.xml.bind.v2.runtime.output.UTF8XmlOutput): void;
								public set(data: native.Array<number>, start: number, len: number): void;
								public writeTo(output: com.sun.xml.bind.v2.runtime.output.UTF8XmlOutput): void;
								public codePoints(): java.util.stream.IntStream;
								public length(): number;
								public charAt(index: number): string;
								public subSequence(start: number, end: number): string;
								public constructor(data: native.Array<number>, start: number, len: number);
								public constructor();
								public chars(): java.util.stream.IntStream;
								public writeTo(buf: native.Array<string>, start: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module unmarshaller {
							export class IntData extends com.sun.xml.bind.v2.runtime.output.Pcdata {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.unmarshaller.IntData>;
								public toString(): string;
								public writeTo(uTF8XmlOutput0: com.sun.xml.bind.v2.runtime.output.UTF8XmlOutput): void;
								public writeTo(output: com.sun.xml.bind.v2.runtime.output.UTF8XmlOutput): void;
								public codePoints(): java.util.stream.IntStream;
								public length(): number;
								public charAt(index: number): string;
								public subSequence(start: number, end: number): string;
								public constructor();
								public reset(i: number): void;
								public chars(): java.util.stream.IntStream;
								public writeTo(buf: native.Array<string>, start: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module unmarshaller {
							export class Intercepter extends java.lang.Object {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.unmarshaller.Intercepter>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.runtime.unmarshaller.Intercepter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									intercept(state0: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext.State, object1: any): any;
								});
								public constructor();
								public intercept(state0: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext.State, object1: any): any;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module unmarshaller {
							export class InterningXmlVisitor extends java.lang.Object implements com.sun.xml.bind.v2.runtime.unmarshaller.XmlVisitor {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.unmarshaller.InterningXmlVisitor>;
								public endDocument(): void;
								public getPredictor(): com.sun.xml.bind.v2.runtime.unmarshaller.XmlVisitor.TextPredictor;
								public startDocument(locator: com.sun.xml.bind.v2.runtime.unmarshaller.LocatorEx, nsContext: javax.xml.namespace.NamespaceContext): void;
								public getContext(): com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext;
								public startPrefixMapping(prefix: string, nsUri: string): void;
								public endPrefixMapping(prefix: string): void;
								public startElement(tagName: com.sun.xml.bind.v2.runtime.unmarshaller.TagName): void;
								public constructor(next: com.sun.xml.bind.v2.runtime.unmarshaller.XmlVisitor);
								public text(pcdata: string): void;
								public endElement(tagName: com.sun.xml.bind.v2.runtime.unmarshaller.TagName): void;
							}
							export module InterningXmlVisitor {
								export class AttributesImpl extends java.lang.Object implements org.xml.sax.Attributes {
									public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.unmarshaller.InterningXmlVisitor.AttributesImpl>;
									public getQName(index: number): string;
									public getLocalName(index: number): string;
									public getValue(qName: string): string;
									public getIndex(qName: string): number;
									public getType(index: number): string;
									public getURI(index: number): string;
									public getLength(): number;
									public getValue(index: number): string;
									public getValue(uri: string, localName: string): string;
									public getIndex(uri: string, localName: string): number;
									public getType(qName: string): string;
									public getType(uri: string, localName: string): string;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module unmarshaller {
							export class LeafPropertyLoader extends com.sun.xml.bind.v2.runtime.unmarshaller.Loader {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.unmarshaller.LeafPropertyLoader>;
								public constructor(xacc: com.sun.xml.bind.v2.runtime.reflect.TransducedAccessor<any>);
								public constructor(expectText: boolean);
								public constructor();
								public text(state: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext.State, text: string): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module unmarshaller {
							export class LeafPropertyXsiLoader extends com.sun.xml.bind.v2.runtime.unmarshaller.Loader {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.unmarshaller.LeafPropertyXsiLoader>;
								public selectLoader(state: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext.State, ea: com.sun.xml.bind.v2.runtime.unmarshaller.TagName): com.sun.xml.bind.v2.runtime.unmarshaller.Loader;
								public startElement(state: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext.State, ea: com.sun.xml.bind.v2.runtime.unmarshaller.TagName): void;
								public constructor(defaultLoader: com.sun.xml.bind.v2.runtime.unmarshaller.Loader, xacc: com.sun.xml.bind.v2.runtime.reflect.TransducedAccessor<any>, acc: com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>);
								public constructor(expectText: boolean);
								public constructor();
								public getExpectedAttributes(): java.util.Collection<javax.xml.namespace.QName>;
								public getExpectedChildElements(): java.util.Collection<javax.xml.namespace.QName>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module unmarshaller {
							export abstract class Loader extends java.lang.Object {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.unmarshaller.Loader>;
								public leaveElement(state: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext.State, ea: com.sun.xml.bind.v2.runtime.unmarshaller.TagName): void;
								public static reportError(msg: string, canRecover: boolean): void;
								public static handleParseConversionException(state: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext.State, e: java.lang.Exception): void;
								public fireAfterUnmarshal(beanInfo: com.sun.xml.bind.v2.runtime.JaxBeanInfo<any>, child: any, state: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext.State): void;
								public startElement(state: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext.State, ea: com.sun.xml.bind.v2.runtime.unmarshaller.TagName): void;
								public expectText(): boolean;
								public constructor();
								public getExpectedChildElements(): java.util.Collection<javax.xml.namespace.QName>;
								public fireBeforeUnmarshal(beanInfo: com.sun.xml.bind.v2.runtime.JaxBeanInfo<any>, child: any, state: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext.State): void;
								public childElement(state: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext.State, ea: com.sun.xml.bind.v2.runtime.unmarshaller.TagName): void;
								public static handleGenericException(e: java.lang.Exception): void;
								public reportUnexpectedChildElement(ea: com.sun.xml.bind.v2.runtime.unmarshaller.TagName, canRecover: boolean): void;
								public static handleGenericError(e: java.lang.Error): void;
								public constructor(expectText: boolean);
								public getExpectedAttributes(): java.util.Collection<javax.xml.namespace.QName>;
								public static reportError(msg: string, nested: java.lang.Exception, canRecover: boolean): void;
								public static handleGenericException(e: java.lang.Exception, canRecover: boolean): void;
								public text(state: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext.State, text: string): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module unmarshaller {
							export class LocatorEx extends java.lang.Object implements org.xml.sax.Locator {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.unmarshaller.LocatorEx>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.runtime.unmarshaller.LocatorEx interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getLocation(): javax.xml.bind.ValidationEventLocator;
									getPublicId(): string;
									getSystemId(): string;
									getLineNumber(): number;
									getColumnNumber(): number;
								});
								public constructor();
								public getSystemId(): string;
								public getLineNumber(): number;
								public getColumnNumber(): number;
								public getLocation(): javax.xml.bind.ValidationEventLocator;
								public getPublicId(): string;
							}
							export module LocatorEx {
								export class Snapshot extends java.lang.Object implements com.sun.xml.bind.v2.runtime.unmarshaller.LocatorEx, javax.xml.bind.ValidationEventLocator {
									public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.unmarshaller.LocatorEx.Snapshot>;
									public getURL(): java.net.URL;
									public getColumnNumber(): number;
									public getPublicId(): string;
									public getNode(): org.w3c.dom.Node;
									public getOffset(): number;
									public getObject(): any;
									public constructor(loc: com.sun.xml.bind.v2.runtime.unmarshaller.LocatorEx);
									public getLocation(): javax.xml.bind.ValidationEventLocator;
									public getLineNumber(): number;
									public getSystemId(): string;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module unmarshaller {
							export class LocatorExWrapper extends java.lang.Object implements com.sun.xml.bind.v2.runtime.unmarshaller.LocatorEx {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.unmarshaller.LocatorExWrapper>;
								public getSystemId(): string;
								public getLineNumber(): number;
								public constructor(locator: org.xml.sax.Locator);
								public getColumnNumber(): number;
								public getLocation(): javax.xml.bind.ValidationEventLocator;
								public getPublicId(): string;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module unmarshaller {
							export class MTOMDecorator extends java.lang.Object implements com.sun.xml.bind.v2.runtime.unmarshaller.XmlVisitor {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.unmarshaller.MTOMDecorator>;
								public endDocument(): void;
								public getPredictor(): com.sun.xml.bind.v2.runtime.unmarshaller.XmlVisitor.TextPredictor;
								public getContext(): com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext;
								public startDocument(loc: com.sun.xml.bind.v2.runtime.unmarshaller.LocatorEx, nsContext: javax.xml.namespace.NamespaceContext): void;
								public startPrefixMapping(prefix: string, nsUri: string): void;
								public constructor(parent: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallerImpl, next: com.sun.xml.bind.v2.runtime.unmarshaller.XmlVisitor, au: javax.xml.bind.attachment.AttachmentUnmarshaller);
								public endPrefixMapping(prefix: string): void;
								public startElement(tagName: com.sun.xml.bind.v2.runtime.unmarshaller.TagName): void;
								public text(pcdata: string): void;
								public endElement(tagName: com.sun.xml.bind.v2.runtime.unmarshaller.TagName): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module unmarshaller {
							export class Messages {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.unmarshaller.Messages>;
								public static UNRESOLVED_IDREF: com.sun.xml.bind.v2.runtime.unmarshaller.Messages;
								public static UNEXPECTED_ELEMENT: com.sun.xml.bind.v2.runtime.unmarshaller.Messages;
								public static UNEXPECTED_TEXT: com.sun.xml.bind.v2.runtime.unmarshaller.Messages;
								public static NOT_A_QNAME: com.sun.xml.bind.v2.runtime.unmarshaller.Messages;
								public static UNRECOGNIZED_TYPE_NAME: com.sun.xml.bind.v2.runtime.unmarshaller.Messages;
								public static UNRECOGNIZED_TYPE_NAME_MAYBE: com.sun.xml.bind.v2.runtime.unmarshaller.Messages;
								public static UNABLE_TO_CREATE_MAP: com.sun.xml.bind.v2.runtime.unmarshaller.Messages;
								public static UNINTERNED_STRINGS: com.sun.xml.bind.v2.runtime.unmarshaller.Messages;
								public static ERRORS_LIMIT_EXCEEDED: com.sun.xml.bind.v2.runtime.unmarshaller.Messages;
								public toString(): string;
								public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
								public format(objects0: native.Array<any>): string;
								public static values(): native.Array<com.sun.xml.bind.v2.runtime.unmarshaller.Messages>;
								public static valueOf(name: string): com.sun.xml.bind.v2.runtime.unmarshaller.Messages;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module unmarshaller {
							export class Patcher extends java.lang.Object {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.unmarshaller.Patcher>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.runtime.unmarshaller.Patcher interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									run(): void;
								});
								public constructor();
								public run(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module unmarshaller {
							export abstract class ProxyLoader extends com.sun.xml.bind.v2.runtime.unmarshaller.Loader {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.unmarshaller.ProxyLoader>;
								public leaveElement(state: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext.State, ea: com.sun.xml.bind.v2.runtime.unmarshaller.TagName): void;
								public startElement(state: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext.State, ea: com.sun.xml.bind.v2.runtime.unmarshaller.TagName): void;
								public constructor(expectText: boolean);
								public constructor();
								public selectLoader(state0: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext.State, tagName1: com.sun.xml.bind.v2.runtime.unmarshaller.TagName): com.sun.xml.bind.v2.runtime.unmarshaller.Loader;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module unmarshaller {
							export class Receiver extends java.lang.Object {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.unmarshaller.Receiver>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.runtime.unmarshaller.Receiver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									receive(state0: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext.State, object1: any): void;
								});
								public constructor();
								public receive(state0: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext.State, object1: any): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module unmarshaller {
							export class SAXConnector extends java.lang.Object implements javax.xml.bind.UnmarshallerHandler {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.unmarshaller.SAXConnector>;
								public getContext(): com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext;
								public startDocument(): void;
								public skippedEntity(name: string): void;
								public getResult(): any;
								public ignorableWhitespace(buf: native.Array<string>, start: number, len: number): void;
								public processingInstruction(target: string, data: string): void;
								public endElement(uri: string, localName: string, qName: string): void;
								public endDocument(): void;
								public characters(buf: native.Array<string>, start: number, len: number): void;
								public startElement(uri: string, local: string, qname: string, atts: org.xml.sax.Attributes): void;
								public constructor(next: com.sun.xml.bind.v2.runtime.unmarshaller.XmlVisitor, externalLocator: com.sun.xml.bind.v2.runtime.unmarshaller.LocatorEx);
								public endPrefixMapping(prefix: string): void;
								public setDocumentLocator(locator: org.xml.sax.Locator): void;
								public startPrefixMapping(prefix: string, uri: string): void;
							}
							export module SAXConnector {
								export class TagNameImpl extends com.sun.xml.bind.v2.runtime.unmarshaller.TagName {
									public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.unmarshaller.SAXConnector.TagNameImpl>;
									public getQname(): string;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module unmarshaller {
							export class Scope<BeanT, PropT, ItemT, PackT>  extends java.lang.Object {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.unmarshaller.Scope<any,any,any,any>>;
								public context: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext;
								public start(acc: com.sun.xml.bind.v2.runtime.reflect.Accessor<BeanT,PropT>, lister: com.sun.xml.bind.v2.runtime.reflect.Lister<BeanT,PropT,ItemT,PackT>): void;
								public hasStarted(): boolean;
								public reset(): void;
								public finish(): void;
								public add(acc: com.sun.xml.bind.v2.runtime.reflect.Accessor<BeanT,PropT>, lister: com.sun.xml.bind.v2.runtime.reflect.Lister<BeanT,PropT,ItemT,PackT>, value: ItemT): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module unmarshaller {
							export class SecureLoader extends java.lang.Object {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.unmarshaller.SecureLoader>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module unmarshaller {
							export abstract class StAXConnector extends java.lang.Object {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.unmarshaller.StAXConnector>;
								public visitor: com.sun.xml.bind.v2.runtime.unmarshaller.XmlVisitor;
								public context: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext;
								public predictor: com.sun.xml.bind.v2.runtime.unmarshaller.XmlVisitor.TextPredictor;
								public tagName: com.sun.xml.bind.v2.runtime.unmarshaller.TagName;
								public bridge(): void;
								public handleEndDocument(): void;
								public constructor(visitor: com.sun.xml.bind.v2.runtime.unmarshaller.XmlVisitor);
								public static fixNull(s: string): string;
								public getCurrentLocation(): javax.xml.stream.Location;
								public getQName(prefix: string, localName: string): string;
								public handleStartDocument(nsc: javax.xml.namespace.NamespaceContext): void;
								public getCurrentQName(): string;
							}
							export module StAXConnector {
								export class TagNameImpl extends com.sun.xml.bind.v2.runtime.unmarshaller.TagName {
									public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.unmarshaller.StAXConnector.TagNameImpl>;
									public getQname(): string;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module unmarshaller {
							export class StAXEventConnector extends com.sun.xml.bind.v2.runtime.unmarshaller.StAXConnector {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.unmarshaller.StAXEventConnector>;
								public bridge(): void;
								public constructor(visitor: com.sun.xml.bind.v2.runtime.unmarshaller.XmlVisitor);
								public constructor(staxCore: javax.xml.stream.XMLEventReader, visitor: com.sun.xml.bind.v2.runtime.unmarshaller.XmlVisitor);
								public getCurrentLocation(): javax.xml.stream.Location;
								public getCurrentQName(): string;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module unmarshaller {
							export class StAXExConnector extends com.sun.xml.bind.v2.runtime.unmarshaller.StAXStreamConnector {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.unmarshaller.StAXExConnector>;
								public constructor(staxStreamReader: javax.xml.stream.XMLStreamReader, visitor: com.sun.xml.bind.v2.runtime.unmarshaller.XmlVisitor);
								public constructor(visitor: com.sun.xml.bind.v2.runtime.unmarshaller.XmlVisitor);
								public constructor(in0: org.jvnet.staxex.XMLStreamReaderEx, visitor: com.sun.xml.bind.v2.runtime.unmarshaller.XmlVisitor);
								public handleCharacters(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module unmarshaller {
							export class StAXStreamConnector extends com.sun.xml.bind.v2.runtime.unmarshaller.StAXConnector {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.unmarshaller.StAXStreamConnector>;
								public buffer: java.lang.StringBuilder;
								public textReported: boolean;
								public constructor(staxStreamReader: javax.xml.stream.XMLStreamReader, visitor: com.sun.xml.bind.v2.runtime.unmarshaller.XmlVisitor);
								public bridge(): void;
								public constructor(visitor: com.sun.xml.bind.v2.runtime.unmarshaller.XmlVisitor);
								public static create(reader: javax.xml.stream.XMLStreamReader, visitor: com.sun.xml.bind.v2.runtime.unmarshaller.XmlVisitor): com.sun.xml.bind.v2.runtime.unmarshaller.StAXConnector;
								public getCurrentLocation(): javax.xml.stream.Location;
								public handleCharacters(): void;
								public getCurrentQName(): string;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module unmarshaller {
							export class StructureLoader extends com.sun.xml.bind.v2.runtime.unmarshaller.Loader {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.unmarshaller.StructureLoader>;
								public leaveElement(state: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext.State, ea: com.sun.xml.bind.v2.runtime.unmarshaller.TagName): void;
								public init(context: com.sun.xml.bind.v2.runtime.JAXBContextImpl, beanInfo: com.sun.xml.bind.v2.runtime.ClassBeanInfoImpl<any>, attWildcard: com.sun.xml.bind.v2.runtime.reflect.Accessor<any,java.util.Map<javax.xml.namespace.QName,string>>): void;
								public startElement(state: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext.State, ea: com.sun.xml.bind.v2.runtime.unmarshaller.TagName): void;
								public constructor(expectText: boolean);
								public getBeanInfo(): com.sun.xml.bind.v2.runtime.JaxBeanInfo<any>;
								public constructor();
								public getExpectedAttributes(): java.util.Collection<javax.xml.namespace.QName>;
								public constructor(beanInfo: com.sun.xml.bind.v2.runtime.ClassBeanInfoImpl<any>);
								public getExpectedChildElements(): java.util.Collection<javax.xml.namespace.QName>;
								public childElement(state: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext.State, ea: com.sun.xml.bind.v2.runtime.unmarshaller.TagName): void;
								public childElement(state: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext.State, tagName1: com.sun.xml.bind.v2.runtime.unmarshaller.TagName): void;
								public text(state: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext.State, text: string): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module unmarshaller {
							export abstract class TagName extends java.lang.Object {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.unmarshaller.TagName>;
								public uri: string;
								public local: string;
								public atts: org.xml.sax.Attributes;
								public matches(name: com.sun.xml.bind.v2.runtime.Name): boolean;
								public toString(): string;
								public getPrefix(): string;
								public matches(nsUri: string, local: string): boolean;
								public constructor();
								public createQName(): javax.xml.namespace.QName;
								public getQname(): string;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module unmarshaller {
							export class TextLoader extends com.sun.xml.bind.v2.runtime.unmarshaller.Loader {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.unmarshaller.TextLoader>;
								public constructor(xducer: com.sun.xml.bind.v2.runtime.Transducer<any>);
								public constructor(expectText: boolean);
								public constructor();
								public text(state: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext.State, text: string): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module unmarshaller {
							export class UnmarshallerImpl extends javax.xml.bind.helpers.AbstractUnmarshallerImpl implements javax.xml.bind.ValidationEventHandler, java.io.Closeable {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallerImpl>;
								public context: com.sun.xml.bind.v2.runtime.JAXBContextImpl;
								public coordinator: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext;
								public static FACTORY: string;
								public getContext(): com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext;
								public unmarshal(reader: javax.xml.stream.XMLStreamReader, expectedType: java.lang.Class<any>): javax.xml.bind.JAXBElement;
								public getUnmarshallerHandler(): javax.xml.bind.UnmarshallerHandler;
								public getProperty(name: string): any;
								public isValidating(): boolean;
								public unmarshal(source: org.xml.sax.InputSource): any;
								public createUnmarshalException(e: org.xml.sax.SAXException): javax.xml.bind.UnmarshalException;
								/** @deprecated */
								public isValidating(): boolean;
								/** @deprecated */
								public setValidating(validating: boolean): void;
								public constructor();
								public getBeanInfo(clazz: java.lang.Class<any>): com.sun.xml.bind.v2.runtime.JaxBeanInfo<any>;
								public unmarshal(source: javax.xml.transform.Source): any;
								public unmarshal(is: java.io.InputStream): any;
								public unmarshal(reader: javax.xml.stream.XMLEventReader, expectedType: java.lang.Class<any>): javax.xml.bind.JAXBElement;
								public setValidating(validating: boolean): void;
								public unmarshal(reader: org.xml.sax.XMLReader, source: org.xml.sax.InputSource): any;
								/** @deprecated */
								public unmarshal(source: javax.xml.transform.sax.SAXSource): any;
								public getEventHandler(): javax.xml.bind.ValidationEventHandler;
								public getAttachmentUnmarshaller(): javax.xml.bind.attachment.AttachmentUnmarshaller;
								public setAdapter(adapter: javax.xml.bind.annotation.adapters.XmlAdapter): void;
								public handleEvent(event: javax.xml.bind.ValidationEvent): boolean;
								public close(): void;
								public unmarshal(node: org.w3c.dom.Node, expectedType: java.lang.Class<any>): javax.xml.bind.JAXBElement;
								public setListener(listener: javax.xml.bind.Unmarshaller.Listener): void;
								public unmarshal(url: java.net.URL): any;
								public getSchema(): javax.xml.validation.Schema;
								public setAdapter(type: java.lang.Class<any>, adapter: javax.xml.bind.annotation.adapters.XmlAdapter): void;
								public unmarshal(reader: org.xml.sax.XMLReader, source: org.xml.sax.InputSource, expectedType: java.lang.Class<any>): javax.xml.bind.JAXBElement;
								public unmarshal0(input: java.io.InputStream, expectedType: com.sun.xml.bind.v2.runtime.JaxBeanInfo<any>): any;
								public unmarshal0(reader: javax.xml.stream.XMLStreamReader, expectedType: com.sun.xml.bind.v2.runtime.JaxBeanInfo<any>): any;
								public unmarshal(f: java.io.File): any;
								public unmarshal(xMLReader0: org.xml.sax.XMLReader, inputSource1: org.xml.sax.InputSource): any;
								public constructor(context: com.sun.xml.bind.v2.runtime.JAXBContextImpl, assoc: com.sun.xml.bind.v2.runtime.AssociationMap<any>);
								public finalize(): void;
								public getXMLReader(): org.xml.sax.XMLReader;
								public createUnmarshallerHandler(scanner: com.sun.xml.bind.unmarshaller.InfosetScanner<any>, inplace: boolean, expectedType: com.sun.xml.bind.v2.runtime.JaxBeanInfo<any>): com.sun.xml.bind.v2.runtime.unmarshaller.XmlVisitor;
								public unmarshal(reader: javax.xml.stream.XMLStreamReader): any;
								public getListener(): javax.xml.bind.Unmarshaller.Listener;
								public static needsInterning(reader: org.xml.sax.XMLReader): boolean;
								public unmarshal(source: javax.xml.transform.Source, expectedType: java.lang.Class<any>): javax.xml.bind.JAXBElement;
								public setAttachmentUnmarshaller(au: javax.xml.bind.attachment.AttachmentUnmarshaller): void;
								public unmarshal(node: org.w3c.dom.Node): any;
								public unmarshal0(node: org.w3c.dom.Node, expectedType: com.sun.xml.bind.v2.runtime.JaxBeanInfo<any>): any;
								public setSchema(schema: javax.xml.validation.Schema): void;
								public unmarshal0(source: javax.xml.transform.Source, expectedType: com.sun.xml.bind.v2.runtime.JaxBeanInfo<any>): any;
								public unmarshal(reader: java.io.Reader): any;
								public getAdapter(type: java.lang.Class<any>): javax.xml.bind.annotation.adapters.XmlAdapter;
								public setEventHandler(handler: javax.xml.bind.ValidationEventHandler): void;
								public setProperty(name: string, value: any): void;
								public hasEventHandler(): boolean;
								public unmarshal(reader: javax.xml.stream.XMLEventReader): any;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module unmarshaller {
							export class UnmarshallingContext extends com.sun.xml.bind.v2.runtime.Coordinator implements javax.xml.namespace.NamespaceContext, javax.xml.bind.ValidationEventHandler, org.xml.sax.ErrorHandler, com.sun.xml.bind.v2.runtime.unmarshaller.XmlVisitor, com.sun.xml.bind.v2.runtime.unmarshaller.XmlVisitor.TextPredictor {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext>;
								public parent: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallerImpl;
								public classResolver: com.sun.xml.bind.api.ClassResolver;
								public classLoader: java.lang.ClassLoader;
								public getContext(): com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext;
								public handleError(e: java.lang.Exception, canRecover: boolean): void;
								public createInstance(beanInfo: com.sun.xml.bind.v2.runtime.JaxBeanInfo<any>): any;
								public setFactories(factoryInstances: any): void;
								public errorUnresolvedIDREF(bean: any, idref: string, loc: com.sun.xml.bind.v2.runtime.unmarshaller.LocatorEx): void;
								public addToIdTable(id: string): string;
								public getScope(offset: number): com.sun.xml.bind.v2.runtime.unmarshaller.Scope<any,any,any,any>;
								public getObjectFromId(id: string, targetType: java.lang.Class<any>): java.util.concurrent.Callable<any>;
								public fatalError(exception: org.xml.sax.SAXParseException): void;
								public text(pcdata: string): void;
								public startDocument(locator: com.sun.xml.bind.v2.runtime.unmarshaller.LocatorEx, nsContext: javax.xml.namespace.NamespaceContext): void;
								public error(exception: org.xml.sax.SAXParseException): void;
								public getXMIMEContentType(): string;
								public constructor();
								public getCurrentExpectedAttributes(): java.util.Collection<javax.xml.namespace.QName>;
								public handleError(msg: string): void;
								public handleError(e: java.lang.Exception): void;
								public clearStates(): void;
								public startScope(frameSize: number): void;
								public getCurrentState(): com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext.State;
								public getNamespaceURI(prefix: string): string;
								public addPatcher(job: com.sun.xml.bind.v2.runtime.unmarshaller.Patcher): void;
								public reset(scanner: com.sun.xml.bind.unmarshaller.InfosetScanner<any>, isInplaceMode: boolean, expectedType: com.sun.xml.bind.v2.runtime.JaxBeanInfo<any>, idResolver: com.sun.xml.bind.IDResolver): void;
								public handleEvent(event: javax.xml.bind.ValidationEvent): boolean;
								public static getInstance(): com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext;
								public recordInnerPeer(innerPeer: any): void;
								public getPredictor(): com.sun.xml.bind.v2.runtime.unmarshaller.XmlVisitor.TextPredictor;
								public warning(exception: org.xml.sax.SAXParseException): void;
								/** @deprecated */
								public getPredictor(): com.sun.xml.bind.v2.runtime.unmarshaller.XmlVisitor.TextPredictor;
								public expectText(): boolean;
								public createInstance(clazz: java.lang.Class<any>): any;
								public getInnerPeer(): any;
								public endElement(tagName: com.sun.xml.bind.v2.runtime.unmarshaller.TagName): void;
								public getLocation(): javax.xml.bind.ValidationEventLocator;
								public getPrefixes(uri: string): java.util.Iterator<string>;
								/** @deprecated */
								public expectText(): boolean;
								public recordOuterPeer(outerPeer: any): void;
								public getOuterPeer(): any;
								public handleEvent(event: javax.xml.bind.ValidationEvent, canRecover: boolean): void;
								public getLocator(): com.sun.xml.bind.v2.runtime.unmarshaller.LocatorEx;
								public getPrefixes(uri: string): java.util.Iterator<any>;
								public getNewlyDeclaredPrefixes(): native.Array<string>;
								public startElement(tagName: com.sun.xml.bind.v2.runtime.unmarshaller.TagName): void;
								public shouldErrorBeReported(): boolean;
								public getJAXBContext(): com.sun.xml.bind.v2.runtime.JAXBContextImpl;
								public getCurrentExpectedElements(): java.util.Collection<javax.xml.namespace.QName>;
								public selectRootLoader(state: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext.State, tag: com.sun.xml.bind.v2.runtime.unmarshaller.TagName): com.sun.xml.bind.v2.runtime.unmarshaller.Loader;
								public getAllDeclaredPrefixes(): native.Array<string>;
								public getResult(): any;
								public endScope(frameSize: number): void;
								public getStructureLoader(): com.sun.xml.bind.v2.runtime.unmarshaller.StructureLoader;
								public endDocument(): void;
								public getPrefix(uri: string): string;
								public endPrefixMapping(prefix: string): void;
								public constructor(_parent: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallerImpl, assoc: com.sun.xml.bind.v2.runtime.AssociationMap<any>);
								public startPrefixMapping(prefix: string, uri: string): void;
							}
							export module UnmarshallingContext {
								export class DefaultRootLoader extends com.sun.xml.bind.v2.runtime.unmarshaller.Loader implements com.sun.xml.bind.v2.runtime.unmarshaller.Receiver {
									public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext.DefaultRootLoader>;
									public getExpectedChildElements(): java.util.Collection<javax.xml.namespace.QName>;
									public receive(state: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext.State, o: any): void;
									public childElement(state: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext.State, ea: com.sun.xml.bind.v2.runtime.unmarshaller.TagName): void;
								}
								export class ExpectedTypeRootLoader extends com.sun.xml.bind.v2.runtime.unmarshaller.Loader implements com.sun.xml.bind.v2.runtime.unmarshaller.Receiver {
									public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext.ExpectedTypeRootLoader>;
									public receive(state: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext.State, o: any): void;
									public childElement(state: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext.State, ea: com.sun.xml.bind.v2.runtime.unmarshaller.TagName): void;
								}
								export class Factory extends java.lang.Object {
									public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext.Factory>;
									public constructor(factorInstance: any, method: java.lang.reflect.Method);
									public createInstance(): any;
								}
								export class State extends java.lang.Object {
									public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext.State>;
									public setElementDefaultValue(elementDefaultValue: string): void;
									public setBackup(backup: any): void;
									public getContext(): com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext;
									public getPrev(): com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext.State;
									public getElementDefaultValue(): string;
									public isMixed(): boolean;
									public getTarget(): any;
									public getLoader(): com.sun.xml.bind.v2.runtime.unmarshaller.Loader;
									public setIntercepter(intercepter: com.sun.xml.bind.v2.runtime.unmarshaller.Intercepter): void;
									public isNil(): boolean;
									public setReceiver(receiver: com.sun.xml.bind.v2.runtime.unmarshaller.Receiver): void;
									public setNil(nil: boolean): void;
									public setTarget(target: any): void;
									public getBackup(): any;
									public setLoader(loader: com.sun.xml.bind.v2.runtime.unmarshaller.Loader): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module unmarshaller {
							export class ValidatingUnmarshaller extends java.lang.Object implements com.sun.xml.bind.v2.runtime.unmarshaller.XmlVisitor, com.sun.xml.bind.v2.runtime.unmarshaller.XmlVisitor.TextPredictor {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.unmarshaller.ValidatingUnmarshaller>;
								public endDocument(): void;
								public getPredictor(): com.sun.xml.bind.v2.runtime.unmarshaller.XmlVisitor.TextPredictor;
								public constructor(schema: javax.xml.validation.Schema, next: com.sun.xml.bind.v2.runtime.unmarshaller.XmlVisitor);
								public startDocument(locator: com.sun.xml.bind.v2.runtime.unmarshaller.LocatorEx, nsContext: javax.xml.namespace.NamespaceContext): void;
								/** @deprecated */
								public expectText(): boolean;
								public getContext(): com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext;
								public startPrefixMapping(prefix: string, nsUri: string): void;
								public endPrefixMapping(prefix: string): void;
								public expectText(): boolean;
								public startElement(tagName: com.sun.xml.bind.v2.runtime.unmarshaller.TagName): void;
								public text(pcdata: string): void;
								public endElement(tagName: com.sun.xml.bind.v2.runtime.unmarshaller.TagName): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module unmarshaller {
							export class ValuePropertyLoader extends com.sun.xml.bind.v2.runtime.unmarshaller.Loader {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.unmarshaller.ValuePropertyLoader>;
								public constructor(xacc: com.sun.xml.bind.v2.runtime.reflect.TransducedAccessor<any>);
								public constructor(expectText: boolean);
								public constructor();
								public text(state: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext.State, text: string): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module unmarshaller {
							export class WildcardLoader extends com.sun.xml.bind.v2.runtime.unmarshaller.ProxyLoader {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.unmarshaller.WildcardLoader>;
								public selectLoader(state: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext.State, tag: com.sun.xml.bind.v2.runtime.unmarshaller.TagName): com.sun.xml.bind.v2.runtime.unmarshaller.Loader;
								public constructor(expectText: boolean);
								public constructor();
								public selectLoader(state0: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext.State, tagName1: com.sun.xml.bind.v2.runtime.unmarshaller.TagName): com.sun.xml.bind.v2.runtime.unmarshaller.Loader;
								public constructor(dom: javax.xml.bind.annotation.DomHandler, mode: com.sun.xml.bind.v2.model.core.WildcardMode);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module unmarshaller {
							export class XmlVisitor extends java.lang.Object {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.unmarshaller.XmlVisitor>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.runtime.unmarshaller.XmlVisitor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									startDocument(locatorEx0: com.sun.xml.bind.v2.runtime.unmarshaller.LocatorEx, namespaceContext1: javax.xml.namespace.NamespaceContext): void;
									endDocument(): void;
									startElement(tagName0: com.sun.xml.bind.v2.runtime.unmarshaller.TagName): void;
									endElement(tagName0: com.sun.xml.bind.v2.runtime.unmarshaller.TagName): void;
									startPrefixMapping(string0: string, string1: string): void;
									endPrefixMapping(string0: string): void;
									text(charSequence0: string): void;
									getContext(): com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext;
									getPredictor(): com.sun.xml.bind.v2.runtime.unmarshaller.XmlVisitor.TextPredictor;
								});
								public constructor();
								public endDocument(): void;
								public startElement(tagName0: com.sun.xml.bind.v2.runtime.unmarshaller.TagName): void;
								public endElement(tagName0: com.sun.xml.bind.v2.runtime.unmarshaller.TagName): void;
								public endPrefixMapping(string0: string): void;
								public getPredictor(): com.sun.xml.bind.v2.runtime.unmarshaller.XmlVisitor.TextPredictor;
								public getContext(): com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext;
								public text(charSequence0: string): void;
								public startPrefixMapping(string0: string, string1: string): void;
								public startDocument(locatorEx0: com.sun.xml.bind.v2.runtime.unmarshaller.LocatorEx, namespaceContext1: javax.xml.namespace.NamespaceContext): void;
							}
							export module XmlVisitor {
								export class TextPredictor extends java.lang.Object {
									public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.unmarshaller.XmlVisitor.TextPredictor>;
									/**
									 * Constructs a new instance of the com.sun.xml.bind.v2.runtime.unmarshaller.XmlVisitor$TextPredictor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										expectText(): boolean;
									});
									public constructor();
									public expectText(): boolean;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module unmarshaller {
							export class XsiNilLoader extends com.sun.xml.bind.v2.runtime.unmarshaller.ProxyLoader {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.unmarshaller.XsiNilLoader>;
								public selectLoader(state: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext.State, ea: com.sun.xml.bind.v2.runtime.unmarshaller.TagName): com.sun.xml.bind.v2.runtime.unmarshaller.Loader;
								public constructor(expectText: boolean);
								public constructor();
								public getExpectedAttributes(): java.util.Collection<javax.xml.namespace.QName>;
								public selectLoader(state0: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext.State, tagName1: com.sun.xml.bind.v2.runtime.unmarshaller.TagName): com.sun.xml.bind.v2.runtime.unmarshaller.Loader;
								public getExpectedChildElements(): java.util.Collection<javax.xml.namespace.QName>;
								public onNil(state: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext.State): void;
								public constructor(defaultLoader: com.sun.xml.bind.v2.runtime.unmarshaller.Loader);
							}
							export module XsiNilLoader {
								export class Array extends com.sun.xml.bind.v2.runtime.unmarshaller.XsiNilLoader {
									public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.unmarshaller.XsiNilLoader.Array>;
									public constructor();
									public constructor(expectText: boolean);
									public constructor(core: com.sun.xml.bind.v2.runtime.unmarshaller.Loader);
									public constructor(defaultLoader: com.sun.xml.bind.v2.runtime.unmarshaller.Loader);
									public onNil(state: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext.State): void;
								}
								export class Single extends com.sun.xml.bind.v2.runtime.unmarshaller.XsiNilLoader {
									public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.unmarshaller.XsiNilLoader.Single>;
									public constructor();
									public constructor(expectText: boolean);
									public constructor(defaultLoader: com.sun.xml.bind.v2.runtime.unmarshaller.Loader);
									public onNil(state: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext.State): void;
									public constructor(l: com.sun.xml.bind.v2.runtime.unmarshaller.Loader, acc: com.sun.xml.bind.v2.runtime.reflect.Accessor<any,any>);
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module runtime {
						export module unmarshaller {
							export class XsiTypeLoader extends com.sun.xml.bind.v2.runtime.unmarshaller.Loader {
								public static class: java.lang.Class<com.sun.xml.bind.v2.runtime.unmarshaller.XsiTypeLoader>;
								public startElement(state: com.sun.xml.bind.v2.runtime.unmarshaller.UnmarshallingContext.State, ea: com.sun.xml.bind.v2.runtime.unmarshaller.TagName): void;
								public constructor(defaultBeanInfo: com.sun.xml.bind.v2.runtime.JaxBeanInfo<any>);
								public constructor(expectText: boolean);
								public constructor();
								public getExpectedAttributes(): java.util.Collection<javax.xml.namespace.QName>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module schemagen {
						export class FoolProofResolver extends javax.xml.bind.SchemaOutputResolver {
							public static class: java.lang.Class<com.sun.xml.bind.v2.schemagen.FoolProofResolver>;
							public constructor();
							public constructor(resolver: javax.xml.bind.SchemaOutputResolver);
							public createOutput(string0: string, string1: string): javax.xml.transform.Result;
							public createOutput(namespaceUri: string, suggestedFileName: string): javax.xml.transform.Result;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module schemagen {
						export abstract class Form {
							public static class: java.lang.Class<com.sun.xml.bind.v2.schemagen.Form>;
							public static QUALIFIED: com.sun.xml.bind.v2.schemagen.Form;
							public static UNQUALIFIED: com.sun.xml.bind.v2.schemagen.Form;
							public static UNSET: com.sun.xml.bind.v2.schemagen.Form;
							public isEffectivelyQualified: boolean;
							public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
							public writeForm(a: com.sun.xml.bind.v2.schemagen.xmlschema.LocalAttribute, tagName: javax.xml.namespace.QName): void;
							public static get(xnf: javax.xml.bind.annotation.XmlNsForm): com.sun.xml.bind.v2.schemagen.Form;
							public static valueOf(name: string): com.sun.xml.bind.v2.schemagen.Form;
							public static values(): native.Array<com.sun.xml.bind.v2.schemagen.Form>;
							public writeForm(e: com.sun.xml.bind.v2.schemagen.xmlschema.LocalElement, tagName: javax.xml.namespace.QName): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module schemagen {
						export class GroupKind {
							public static class: java.lang.Class<com.sun.xml.bind.v2.schemagen.GroupKind>;
							public static ALL: com.sun.xml.bind.v2.schemagen.GroupKind;
							public static SEQUENCE: com.sun.xml.bind.v2.schemagen.GroupKind;
							public static CHOICE: com.sun.xml.bind.v2.schemagen.GroupKind;
							public static valueOf(name: string): com.sun.xml.bind.v2.schemagen.GroupKind;
							public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
							public static values(): native.Array<com.sun.xml.bind.v2.schemagen.GroupKind>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module schemagen {
						export class Messages {
							public static class: java.lang.Class<com.sun.xml.bind.v2.schemagen.Messages>;
							public static ANONYMOUS_TYPE_CYCLE: com.sun.xml.bind.v2.schemagen.Messages;
							public format(objects0: native.Array<any>): string;
							public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
							public static valueOf(name: string): com.sun.xml.bind.v2.schemagen.Messages;
							public static values(): native.Array<com.sun.xml.bind.v2.schemagen.Messages>;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module schemagen {
						export class MultiMap<K, V>  extends java.util.TreeMap<any,any> {
							public static class: java.lang.Class<com.sun.xml.bind.v2.schemagen.MultiMap<any,any>>;
							public higherEntry(key: any): java.util.Map.Entry<any,any>;
							public lastEntry(): java.util.Map.Entry<any,any>;
							public putIfAbsent(key: any, value: any): any;
							public constructor(many: any);
							public entrySet(): java.util.Set<java.util.Map.Entry<any,any>>;
							public values(): java.util.Collection<any>;
							public subMap(fromKey: any, toKey: any): java.util.SortedMap<any,any>;
							public constructor(m: java.util.SortedMap<any,any>);
							public remove(key: any): any;
							public firstEntry(): java.util.Map.Entry<any,any>;
							public pollFirstEntry(): java.util.Map.Entry<any,any>;
							public descendingMap(): java.util.NavigableMap<any,any>;
							public remove(key: any, value: any): boolean;
							public pollLastEntry(): java.util.Map.Entry<any,any>;
							public computeIfAbsent(key: any, mappingFunction: any /* any<any,any>*/): any;
							public putAll(map: java.util.Map<any,any>): void;
							public navigableKeySet(): java.util.NavigableSet<any>;
							public constructor(comparator: java.util.Comparator<any>);
							public containsValue(value: any): boolean;
							public lowerEntry(key: any): java.util.Map.Entry<any,any>;
							public isEmpty(): boolean;
							public tailMap(fromKey: any): java.util.SortedMap<any,any>;
							public put(key: any, value: any): any;
							public replaceAll(function0: any /* any<any,any,any>*/): void;
							public size(): number;
							public ceilingEntry(key: any): java.util.Map.Entry<any,any>;
							public constructor(m: java.util.Map<any,any>);
							public hashCode(): number;
							public compute(key: any, remappingFunction: any /* any<any,any,any>*/): any;
							public floorEntry(key: any): java.util.Map.Entry<any,any>;
							public higherKey(key: any): any;
							public subMap(fromKey: any, fromInclusive: boolean, toKey: any, toInclusive: boolean): java.util.NavigableMap<any,any>;
							public containsKey(key: any): boolean;
							public equals(o: any): boolean;
							public floorKey(key: any): any;
							public constructor();
							public merge(key: any, value: any, remappingFunction: any /* any<any,any,any>*/): any;
							public lowerKey(key: any): any;
							public tailMap(fromKey: any, inclusive: boolean): java.util.NavigableMap<any,any>;
							public clear(): void;
							public get(key: any): any;
							public keySet(): java.util.Set<any>;
							public replace(key: any, oldValue: any, newValue: any): boolean;
							public descendingKeySet(): java.util.NavigableSet<any>;
							public computeIfPresent(key: any, remappingFunction: any /* any<any,any,any>*/): any;
							public ceilingKey(key: any): any;
							public forEach(action: any /* any<any,any>*/): void;
							public getOrDefault(key: any, defaultValue: any): any;
							public replace(key: any, value: any): any;
							public headMap(toKey: any, inclusive: boolean): java.util.NavigableMap<any,any>;
							public headMap(toKey: any): java.util.SortedMap<any,any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module schemagen {
						export abstract class Tree extends java.lang.Object {
							public static class: java.lang.Class<com.sun.xml.bind.v2.schemagen.Tree>;
							public writeOccurs(o: com.sun.xml.bind.v2.schemagen.xmlschema.Occurs, isOptional: boolean, repeated: boolean): void;
							public write(contentModelContainer0: com.sun.xml.bind.v2.schemagen.xmlschema.ContentModelContainer, boolean1: boolean, boolean2: boolean): void;
							public write(ct: com.sun.xml.bind.v2.schemagen.xmlschema.TypeDefParticle): void;
						}
						export module Tree {
							export class Group extends com.sun.xml.bind.v2.schemagen.Tree {
								public static class: java.lang.Class<com.sun.xml.bind.v2.schemagen.Tree.Group>;
								public write(parent: com.sun.xml.bind.v2.schemagen.xmlschema.ContentModelContainer, isOptional: boolean, repeated: boolean): void;
								public write(ct: com.sun.xml.bind.v2.schemagen.xmlschema.TypeDefParticle): void;
								public write(contentModelContainer0: com.sun.xml.bind.v2.schemagen.xmlschema.ContentModelContainer, boolean1: boolean, boolean2: boolean): void;
							}
							export class Optional extends com.sun.xml.bind.v2.schemagen.Tree {
								public static class: java.lang.Class<com.sun.xml.bind.v2.schemagen.Tree.Optional>;
								public write(parent: com.sun.xml.bind.v2.schemagen.xmlschema.ContentModelContainer, isOptional: boolean, repeated: boolean): void;
								public write(ct: com.sun.xml.bind.v2.schemagen.xmlschema.TypeDefParticle): void;
								public write(contentModelContainer0: com.sun.xml.bind.v2.schemagen.xmlschema.ContentModelContainer, boolean1: boolean, boolean2: boolean): void;
							}
							export class Repeated extends com.sun.xml.bind.v2.schemagen.Tree {
								public static class: java.lang.Class<com.sun.xml.bind.v2.schemagen.Tree.Repeated>;
								public write(parent: com.sun.xml.bind.v2.schemagen.xmlschema.ContentModelContainer, isOptional: boolean, repeated: boolean): void;
								public write(ct: com.sun.xml.bind.v2.schemagen.xmlschema.TypeDefParticle): void;
								public write(contentModelContainer0: com.sun.xml.bind.v2.schemagen.xmlschema.ContentModelContainer, boolean1: boolean, boolean2: boolean): void;
							}
							export abstract class Term extends com.sun.xml.bind.v2.schemagen.Tree {
								public static class: java.lang.Class<com.sun.xml.bind.v2.schemagen.Tree.Term>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module schemagen {
						export class Util extends java.lang.Object {
							public static class: java.lang.Class<com.sun.xml.bind.v2.schemagen.Util>;
							public static equal(s: string, t: string): boolean;
							public static equalsIgnoreCase(s: string, t: string): boolean;
							public static normalizeUriPath(uriPath: string): string;
							public static getParentUriPath(uriPath: string): string;
							public static escapeURI(s: string): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module schemagen {
						export class XmlSchemaGenerator<T, C, F, M>  extends java.lang.Object {
							public static class: java.lang.Class<com.sun.xml.bind.v2.schemagen.XmlSchemaGenerator<any,any,any,any>>;
							public add(clazz: com.sun.xml.bind.v2.model.core.ClassInfo<T,C>): void;
							public static relativize(uri: string, baseUri: string): string;
							public constructor(navigator: com.sun.xml.bind.v2.model.nav.Navigator<T,C,F,M>, types: com.sun.xml.bind.v2.model.core.TypeInfoSet<T,C,F,M>);
							public add(elem: com.sun.xml.bind.v2.model.core.ElementInfo<T,C>): void;
							public add(a: com.sun.xml.bind.v2.model.core.ArrayInfo<T,C>): void;
							public writeEpisodeFile(out: com.sun.xml.txw2.output.XmlSerializer): void;
							public write(resolver: javax.xml.bind.SchemaOutputResolver, errorListener: com.sun.xml.bind.api.ErrorListener): void;
							public toString(): string;
							public add(envm: com.sun.xml.bind.v2.model.core.EnumLeafInfo<T,C>): void;
							public add(tagName: javax.xml.namespace.QName, isNillable: boolean, type: com.sun.xml.bind.v2.model.core.NonElement<T,C>): void;
						}
						export module XmlSchemaGenerator {
							export class Namespace extends java.lang.Object {
								public static class: java.lang.Class<com.sun.xml.bind.v2.schemagen.XmlSchemaGenerator.Namespace>;
								public toString(): string;
								public constructor(param0: com.sun.xml.bind.v2.schemagen.XmlSchemaGenerator<any,any,any,any>, uri: string);
								public addGlobalElement(tref: com.sun.xml.bind.v2.model.core.TypeRef<any,any>): void;
								public addGlobalAttribute(ap: com.sun.xml.bind.v2.model.core.AttributePropertyInfo<any,any>): void;
							}
							export module Namespace {
								export abstract class ElementDeclaration extends java.lang.Object {
									public static class: java.lang.Class<com.sun.xml.bind.v2.schemagen.XmlSchemaGenerator.Namespace.ElementDeclaration>;
									public hashCode(): number;
									public writeTo(string0: string, schema1: com.sun.xml.bind.v2.schemagen.xmlschema.Schema): void;
									public equals(obj: any): boolean;
								}
								export class ElementWithType extends com.sun.xml.bind.v2.schemagen.XmlSchemaGenerator.Namespace.ElementDeclaration {
									public static class: java.lang.Class<com.sun.xml.bind.v2.schemagen.XmlSchemaGenerator.Namespace.ElementWithType>;
									public equals(o: any): boolean;
									public hashCode(): number;
									public writeTo(string0: string, schema1: com.sun.xml.bind.v2.schemagen.xmlschema.Schema): void;
									public constructor(this1: boolean, nillable: com.sun.xml.bind.v2.model.core.NonElement<any,any>);
									public writeTo(localName: string, schema: com.sun.xml.bind.v2.schemagen.xmlschema.Schema): void;
									public equals(object0: any): boolean;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module schemagen {
						export module episode {
							export class Bindings extends java.lang.Object implements com.sun.xml.txw2.TypedXmlWriter {
								public static class: java.lang.Class<com.sun.xml.bind.v2.schemagen.episode.Bindings>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.schemagen.episode.Bindings interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									bindings(): com.sun.xml.bind.v2.schemagen.episode.Bindings;
									klass(): com.sun.xml.bind.v2.schemagen.episode.Klass;
									typesafeEnumClass(): com.sun.xml.bind.v2.schemagen.episode.Klass;
									schemaBindings(): com.sun.xml.bind.v2.schemagen.episode.SchemaBindings;
									scd(string0: string): void;
									version(string0: string): void;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								});
								public constructor();
								public commit(): void;
								public _attribute(qName0: javax.xml.namespace.QName, object1: any): void;
								public _element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _comment(object0: any): void;
								public scd(string0: string): void;
								public _attribute(string0: string, object1: any): void;
								public _cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public klass(): com.sun.xml.bind.v2.schemagen.episode.Klass;
								public schemaBindings(): com.sun.xml.bind.v2.schemagen.episode.SchemaBindings;
								public _element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _namespace(string0: string, string1: string): void;
								public _namespace(string0: string, boolean1: boolean): void;
								public _element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public bindings(): com.sun.xml.bind.v2.schemagen.episode.Bindings;
								public typesafeEnumClass(): com.sun.xml.bind.v2.schemagen.episode.Klass;
								public _element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _namespace(string0: string): void;
								public commit(boolean0: boolean): void;
								public block(): void;
								public _cdata(object0: any): void;
								public getDocument(): com.sun.xml.txw2.Document;
								public _pcdata(object0: any): void;
								public version(string0: string): void;
								public _attribute(string0: string, string1: string, object2: any): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module schemagen {
						export module episode {
							export class Klass extends java.lang.Object implements com.sun.xml.txw2.TypedXmlWriter {
								public static class: java.lang.Class<com.sun.xml.bind.v2.schemagen.episode.Klass>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.schemagen.episode.Klass interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									ref(string0: string): void;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								});
								public constructor();
								public ref(string0: string): void;
								public commit(): void;
								public _attribute(qName0: javax.xml.namespace.QName, object1: any): void;
								public _element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _comment(object0: any): void;
								public _attribute(string0: string, object1: any): void;
								public _cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _namespace(string0: string, string1: string): void;
								public _namespace(string0: string, boolean1: boolean): void;
								public _element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _namespace(string0: string): void;
								public commit(boolean0: boolean): void;
								public block(): void;
								public _cdata(object0: any): void;
								public getDocument(): com.sun.xml.txw2.Document;
								public _pcdata(object0: any): void;
								public _attribute(string0: string, string1: string, object2: any): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module schemagen {
						export module episode {
							export class Package extends java.lang.Object implements com.sun.xml.txw2.TypedXmlWriter {
								public static class: java.lang.Class<com.sun.xml.bind.v2.schemagen.episode.Package>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.schemagen.episode.Package interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									name(string0: string): void;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								});
								public constructor();
								public commit(): void;
								public _attribute(qName0: javax.xml.namespace.QName, object1: any): void;
								public _element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _comment(object0: any): void;
								public name(string0: string): void;
								public _attribute(string0: string, object1: any): void;
								public _cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _namespace(string0: string, string1: string): void;
								public _namespace(string0: string, boolean1: boolean): void;
								public _element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _namespace(string0: string): void;
								public commit(boolean0: boolean): void;
								public block(): void;
								public _cdata(object0: any): void;
								public getDocument(): com.sun.xml.txw2.Document;
								public _pcdata(object0: any): void;
								public _attribute(string0: string, string1: string, object2: any): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module schemagen {
						export module episode {
							export class SchemaBindings extends java.lang.Object implements com.sun.xml.txw2.TypedXmlWriter {
								public static class: java.lang.Class<com.sun.xml.bind.v2.schemagen.episode.SchemaBindings>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.schemagen.episode.SchemaBindings interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									map(boolean0: boolean): void;
									_package(): com.sun.xml.bind.v2.schemagen.episode.Package;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								});
								public constructor();
								public commit(): void;
								public _attribute(qName0: javax.xml.namespace.QName, object1: any): void;
								public _element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _comment(object0: any): void;
								public _attribute(string0: string, object1: any): void;
								public _cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _namespace(string0: string, string1: string): void;
								public _namespace(string0: string, boolean1: boolean): void;
								public _element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _package(): com.sun.xml.bind.v2.schemagen.episode.Package;
								public _element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _namespace(string0: string): void;
								public commit(boolean0: boolean): void;
								public block(): void;
								public _cdata(object0: any): void;
								public getDocument(): com.sun.xml.txw2.Document;
								public _pcdata(object0: any): void;
								public map(boolean0: boolean): void;
								public _attribute(string0: string, string1: string, object2: any): void;
							}
						}
					}
				}
			}
		}
	}
}


declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module schemagen {
						export module xmlschema {
							export class Annotated extends java.lang.Object implements com.sun.xml.txw2.TypedXmlWriter {
								public static class: java.lang.Class<com.sun.xml.bind.v2.schemagen.xmlschema.Annotated>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.schemagen.xmlschema.Annotated interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									annotation(): com.sun.xml.bind.v2.schemagen.xmlschema.Annotation;
									id(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Annotated;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								});
								public constructor();
								public commit(): void;
								public _attribute(qName0: javax.xml.namespace.QName, object1: any): void;
								public _element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public annotation(): com.sun.xml.bind.v2.schemagen.xmlschema.Annotation;
								public _comment(object0: any): void;
								public _attribute(string0: string, object1: any): void;
								public _cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _namespace(string0: string, string1: string): void;
								public _namespace(string0: string, boolean1: boolean): void;
								public _element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _namespace(string0: string): void;
								public commit(boolean0: boolean): void;
								public block(): void;
								public _cdata(object0: any): void;
								public id(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Annotated;
								public getDocument(): com.sun.xml.txw2.Document;
								public _pcdata(object0: any): void;
								public _attribute(string0: string, string1: string, object2: any): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module schemagen {
						export module xmlschema {
							export class Annotation extends java.lang.Object implements com.sun.xml.txw2.TypedXmlWriter {
								public static class: java.lang.Class<com.sun.xml.bind.v2.schemagen.xmlschema.Annotation>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.schemagen.xmlschema.Annotation interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									appinfo(): com.sun.xml.bind.v2.schemagen.xmlschema.Appinfo;
									documentation(): com.sun.xml.bind.v2.schemagen.xmlschema.Documentation;
									id(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Annotation;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								});
								public constructor();
								public commit(): void;
								public _attribute(qName0: javax.xml.namespace.QName, object1: any): void;
								public _element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _comment(object0: any): void;
								public _attribute(string0: string, object1: any): void;
								public _cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _namespace(string0: string, string1: string): void;
								public _namespace(string0: string, boolean1: boolean): void;
								public _element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public id(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Annotation;
								public _element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _namespace(string0: string): void;
								public commit(boolean0: boolean): void;
								public block(): void;
								public _cdata(object0: any): void;
								public appinfo(): com.sun.xml.bind.v2.schemagen.xmlschema.Appinfo;
								public documentation(): com.sun.xml.bind.v2.schemagen.xmlschema.Documentation;
								public getDocument(): com.sun.xml.txw2.Document;
								public _pcdata(object0: any): void;
								public _attribute(string0: string, string1: string, object2: any): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module schemagen {
						export module xmlschema {
							export class Any extends java.lang.Object implements com.sun.xml.bind.v2.schemagen.xmlschema.Occurs, com.sun.xml.bind.v2.schemagen.xmlschema.Wildcard, com.sun.xml.txw2.TypedXmlWriter {
								public static class: java.lang.Class<com.sun.xml.bind.v2.schemagen.xmlschema.Any>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.schemagen.xmlschema.Any interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									minOccurs(int0: number): com.sun.xml.bind.v2.schemagen.xmlschema.Occurs;
									maxOccurs(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Occurs;
									maxOccurs(int0: number): com.sun.xml.bind.v2.schemagen.xmlschema.Occurs;
									processContents(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Wildcard;
									namespace(strings0: native.Array<string>): com.sun.xml.bind.v2.schemagen.xmlschema.Wildcard;
									namespace(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Wildcard;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									annotation(): com.sun.xml.bind.v2.schemagen.xmlschema.Annotation;
									id(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Annotated;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								});
								public constructor();
								public maxOccurs(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Occurs;
								public _comment(object0: any): void;
								public _attribute(string0: string, object1: any): void;
								public _namespace(string0: string, boolean1: boolean): void;
								public _element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _namespace(string0: string): void;
								public processContents(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Wildcard;
								public namespace(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Wildcard;
								public commit(boolean0: boolean): void;
								public block(): void;
								public getDocument(): com.sun.xml.txw2.Document;
								public maxOccurs(int0: number): com.sun.xml.bind.v2.schemagen.xmlschema.Occurs;
								public _attribute(string0: string, string1: string, object2: any): void;
								public namespace(strings0: native.Array<string>): com.sun.xml.bind.v2.schemagen.xmlschema.Wildcard;
								public commit(): void;
								public _attribute(qName0: javax.xml.namespace.QName, object1: any): void;
								public _element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public annotation(): com.sun.xml.bind.v2.schemagen.xmlschema.Annotation;
								public _cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _namespace(string0: string, string1: string): void;
								public minOccurs(int0: number): com.sun.xml.bind.v2.schemagen.xmlschema.Occurs;
								public _cdata(object0: any): void;
								public id(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Annotated;
								public _pcdata(object0: any): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module schemagen {
						export module xmlschema {
							export class Appinfo extends java.lang.Object implements com.sun.xml.txw2.TypedXmlWriter {
								public static class: java.lang.Class<com.sun.xml.bind.v2.schemagen.xmlschema.Appinfo>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.schemagen.xmlschema.Appinfo interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									source(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Appinfo;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								});
								public constructor();
								public source(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Appinfo;
								public commit(): void;
								public _attribute(qName0: javax.xml.namespace.QName, object1: any): void;
								public _element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _comment(object0: any): void;
								public _attribute(string0: string, object1: any): void;
								public _cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _namespace(string0: string, string1: string): void;
								public _namespace(string0: string, boolean1: boolean): void;
								public _element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _namespace(string0: string): void;
								public commit(boolean0: boolean): void;
								public block(): void;
								public _cdata(object0: any): void;
								public getDocument(): com.sun.xml.txw2.Document;
								public _pcdata(object0: any): void;
								public _attribute(string0: string, string1: string, object2: any): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module schemagen {
						export module xmlschema {
							export class AttrDecls extends java.lang.Object implements com.sun.xml.txw2.TypedXmlWriter {
								public static class: java.lang.Class<com.sun.xml.bind.v2.schemagen.xmlschema.AttrDecls>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.schemagen.xmlschema.AttrDecls interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									attribute(): com.sun.xml.bind.v2.schemagen.xmlschema.LocalAttribute;
									anyAttribute(): com.sun.xml.bind.v2.schemagen.xmlschema.Wildcard;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								});
								public constructor();
								public anyAttribute(): com.sun.xml.bind.v2.schemagen.xmlschema.Wildcard;
								public commit(): void;
								public _attribute(qName0: javax.xml.namespace.QName, object1: any): void;
								public _element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _comment(object0: any): void;
								public _attribute(string0: string, object1: any): void;
								public _cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _namespace(string0: string, string1: string): void;
								public _namespace(string0: string, boolean1: boolean): void;
								public _element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _namespace(string0: string): void;
								public commit(boolean0: boolean): void;
								public block(): void;
								public _cdata(object0: any): void;
								public attribute(): com.sun.xml.bind.v2.schemagen.xmlschema.LocalAttribute;
								public getDocument(): com.sun.xml.txw2.Document;
								public _pcdata(object0: any): void;
								public _attribute(string0: string, string1: string, object2: any): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module schemagen {
						export module xmlschema {
							export class AttributeType extends java.lang.Object implements com.sun.xml.bind.v2.schemagen.xmlschema.SimpleTypeHost, com.sun.xml.txw2.TypedXmlWriter {
								public static class: java.lang.Class<com.sun.xml.bind.v2.schemagen.xmlschema.AttributeType>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.schemagen.xmlschema.AttributeType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									type(qName0: javax.xml.namespace.QName): com.sun.xml.bind.v2.schemagen.xmlschema.AttributeType;
									simpleType(): com.sun.xml.bind.v2.schemagen.xmlschema.SimpleType;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								});
								public constructor();
								public type(qName0: javax.xml.namespace.QName): com.sun.xml.bind.v2.schemagen.xmlschema.AttributeType;
								public commit(): void;
								public _attribute(qName0: javax.xml.namespace.QName, object1: any): void;
								public _element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _comment(object0: any): void;
								public _attribute(string0: string, object1: any): void;
								public _cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _namespace(string0: string, string1: string): void;
								public _namespace(string0: string, boolean1: boolean): void;
								public _element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _namespace(string0: string): void;
								public commit(boolean0: boolean): void;
								public block(): void;
								public _cdata(object0: any): void;
								public simpleType(): com.sun.xml.bind.v2.schemagen.xmlschema.SimpleType;
								public getDocument(): com.sun.xml.txw2.Document;
								public _pcdata(object0: any): void;
								public _attribute(string0: string, string1: string, object2: any): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module schemagen {
						export module xmlschema {
							export class ComplexContent extends java.lang.Object implements com.sun.xml.bind.v2.schemagen.xmlschema.Annotated, com.sun.xml.txw2.TypedXmlWriter {
								public static class: java.lang.Class<com.sun.xml.bind.v2.schemagen.xmlschema.ComplexContent>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.schemagen.xmlschema.ComplexContent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									extension(): com.sun.xml.bind.v2.schemagen.xmlschema.ComplexExtension;
									restriction(): com.sun.xml.bind.v2.schemagen.xmlschema.ComplexRestriction;
									mixed(boolean0: boolean): com.sun.xml.bind.v2.schemagen.xmlschema.ComplexContent;
									annotation(): com.sun.xml.bind.v2.schemagen.xmlschema.Annotation;
									id(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Annotated;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								});
								public constructor();
								public commit(): void;
								public _attribute(qName0: javax.xml.namespace.QName, object1: any): void;
								public _element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public annotation(): com.sun.xml.bind.v2.schemagen.xmlschema.Annotation;
								public _comment(object0: any): void;
								public _attribute(string0: string, object1: any): void;
								public _cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _namespace(string0: string, string1: string): void;
								public _namespace(string0: string, boolean1: boolean): void;
								public _element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public restriction(): com.sun.xml.bind.v2.schemagen.xmlschema.ComplexRestriction;
								public mixed(boolean0: boolean): com.sun.xml.bind.v2.schemagen.xmlschema.ComplexContent;
								public _element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _namespace(string0: string): void;
								public commit(boolean0: boolean): void;
								public block(): void;
								public _cdata(object0: any): void;
								public id(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Annotated;
								public getDocument(): com.sun.xml.txw2.Document;
								public _pcdata(object0: any): void;
								public _attribute(string0: string, string1: string, object2: any): void;
								public extension(): com.sun.xml.bind.v2.schemagen.xmlschema.ComplexExtension;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module schemagen {
						export module xmlschema {
							export class ComplexExtension extends java.lang.Object implements com.sun.xml.bind.v2.schemagen.xmlschema.AttrDecls, com.sun.xml.bind.v2.schemagen.xmlschema.ExtensionType, com.sun.xml.bind.v2.schemagen.xmlschema.TypeDefParticle, com.sun.xml.txw2.TypedXmlWriter {
								public static class: java.lang.Class<com.sun.xml.bind.v2.schemagen.xmlschema.ComplexExtension>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.schemagen.xmlschema.ComplexExtension interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									attribute(): com.sun.xml.bind.v2.schemagen.xmlschema.LocalAttribute;
									anyAttribute(): com.sun.xml.bind.v2.schemagen.xmlschema.Wildcard;
									base(qName0: javax.xml.namespace.QName): com.sun.xml.bind.v2.schemagen.xmlschema.ExtensionType;
									all(): com.sun.xml.bind.v2.schemagen.xmlschema.ExplicitGroup;
									sequence(): com.sun.xml.bind.v2.schemagen.xmlschema.ExplicitGroup;
									choice(): com.sun.xml.bind.v2.schemagen.xmlschema.ExplicitGroup;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									annotation(): com.sun.xml.bind.v2.schemagen.xmlschema.Annotation;
									id(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Annotated;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								});
								public constructor();
								public anyAttribute(): com.sun.xml.bind.v2.schemagen.xmlschema.Wildcard;
								public _comment(object0: any): void;
								public _attribute(string0: string, object1: any): void;
								public _namespace(string0: string, boolean1: boolean): void;
								public _element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public sequence(): com.sun.xml.bind.v2.schemagen.xmlschema.ExplicitGroup;
								public _element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _namespace(string0: string): void;
								public all(): com.sun.xml.bind.v2.schemagen.xmlschema.ExplicitGroup;
								public commit(boolean0: boolean): void;
								public block(): void;
								public getDocument(): com.sun.xml.txw2.Document;
								public _attribute(string0: string, string1: string, object2: any): void;
								public choice(): com.sun.xml.bind.v2.schemagen.xmlschema.ExplicitGroup;
								public commit(): void;
								public _attribute(qName0: javax.xml.namespace.QName, object1: any): void;
								public _element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public annotation(): com.sun.xml.bind.v2.schemagen.xmlschema.Annotation;
								public _cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _namespace(string0: string, string1: string): void;
								public base(qName0: javax.xml.namespace.QName): com.sun.xml.bind.v2.schemagen.xmlschema.ExtensionType;
								public _cdata(object0: any): void;
								public id(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Annotated;
								public attribute(): com.sun.xml.bind.v2.schemagen.xmlschema.LocalAttribute;
								public _pcdata(object0: any): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module schemagen {
						export module xmlschema {
							export class ComplexRestriction extends java.lang.Object implements com.sun.xml.bind.v2.schemagen.xmlschema.Annotated, com.sun.xml.bind.v2.schemagen.xmlschema.AttrDecls, com.sun.xml.bind.v2.schemagen.xmlschema.TypeDefParticle, com.sun.xml.txw2.TypedXmlWriter {
								public static class: java.lang.Class<com.sun.xml.bind.v2.schemagen.xmlschema.ComplexRestriction>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.schemagen.xmlschema.ComplexRestriction interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									base(qName0: javax.xml.namespace.QName): com.sun.xml.bind.v2.schemagen.xmlschema.ComplexRestriction;
									annotation(): com.sun.xml.bind.v2.schemagen.xmlschema.Annotation;
									id(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Annotated;
									attribute(): com.sun.xml.bind.v2.schemagen.xmlschema.LocalAttribute;
									anyAttribute(): com.sun.xml.bind.v2.schemagen.xmlschema.Wildcard;
									all(): com.sun.xml.bind.v2.schemagen.xmlschema.ExplicitGroup;
									sequence(): com.sun.xml.bind.v2.schemagen.xmlschema.ExplicitGroup;
									choice(): com.sun.xml.bind.v2.schemagen.xmlschema.ExplicitGroup;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								});
								public constructor();
								public anyAttribute(): com.sun.xml.bind.v2.schemagen.xmlschema.Wildcard;
								public _comment(object0: any): void;
								public _attribute(string0: string, object1: any): void;
								public _namespace(string0: string, boolean1: boolean): void;
								public _element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public sequence(): com.sun.xml.bind.v2.schemagen.xmlschema.ExplicitGroup;
								public _element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _namespace(string0: string): void;
								public all(): com.sun.xml.bind.v2.schemagen.xmlschema.ExplicitGroup;
								public commit(boolean0: boolean): void;
								public block(): void;
								public getDocument(): com.sun.xml.txw2.Document;
								public _attribute(string0: string, string1: string, object2: any): void;
								public choice(): com.sun.xml.bind.v2.schemagen.xmlschema.ExplicitGroup;
								public base(qName0: javax.xml.namespace.QName): com.sun.xml.bind.v2.schemagen.xmlschema.ComplexRestriction;
								public commit(): void;
								public _attribute(qName0: javax.xml.namespace.QName, object1: any): void;
								public _element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public annotation(): com.sun.xml.bind.v2.schemagen.xmlschema.Annotation;
								public _cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _namespace(string0: string, string1: string): void;
								public _cdata(object0: any): void;
								public id(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Annotated;
								public attribute(): com.sun.xml.bind.v2.schemagen.xmlschema.LocalAttribute;
								public _pcdata(object0: any): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module schemagen {
						export module xmlschema {
							export class ComplexType extends java.lang.Object implements com.sun.xml.bind.v2.schemagen.xmlschema.Annotated, com.sun.xml.bind.v2.schemagen.xmlschema.ComplexTypeModel, com.sun.xml.txw2.TypedXmlWriter {
								public static class: java.lang.Class<com.sun.xml.bind.v2.schemagen.xmlschema.ComplexType>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.schemagen.xmlschema.ComplexType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									_final(strings0: native.Array<string>): com.sun.xml.bind.v2.schemagen.xmlschema.ComplexType;
									_final(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.ComplexType;
									block(strings0: native.Array<string>): com.sun.xml.bind.v2.schemagen.xmlschema.ComplexType;
									block(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.ComplexType;
									_abstract(boolean0: boolean): com.sun.xml.bind.v2.schemagen.xmlschema.ComplexType;
									name(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.ComplexType;
									annotation(): com.sun.xml.bind.v2.schemagen.xmlschema.Annotation;
									id(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Annotated;
									simpleContent(): com.sun.xml.bind.v2.schemagen.xmlschema.SimpleContent;
									complexContent(): com.sun.xml.bind.v2.schemagen.xmlschema.ComplexContent;
									mixed(boolean0: boolean): com.sun.xml.bind.v2.schemagen.xmlschema.ComplexTypeModel;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									attribute(): com.sun.xml.bind.v2.schemagen.xmlschema.LocalAttribute;
									anyAttribute(): com.sun.xml.bind.v2.schemagen.xmlschema.Wildcard;
									all(): com.sun.xml.bind.v2.schemagen.xmlschema.ExplicitGroup;
									sequence(): com.sun.xml.bind.v2.schemagen.xmlschema.ExplicitGroup;
									choice(): com.sun.xml.bind.v2.schemagen.xmlschema.ExplicitGroup;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								});
								public constructor();
								public mixed(boolean0: boolean): com.sun.xml.bind.v2.schemagen.xmlschema.ComplexTypeModel;
								public complexContent(): com.sun.xml.bind.v2.schemagen.xmlschema.ComplexContent;
								public anyAttribute(): com.sun.xml.bind.v2.schemagen.xmlschema.Wildcard;
								public _comment(object0: any): void;
								public _abstract(boolean0: boolean): com.sun.xml.bind.v2.schemagen.xmlschema.ComplexType;
								public _attribute(string0: string, object1: any): void;
								public simpleContent(): com.sun.xml.bind.v2.schemagen.xmlschema.SimpleContent;
								public _namespace(string0: string, boolean1: boolean): void;
								public _element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public sequence(): com.sun.xml.bind.v2.schemagen.xmlschema.ExplicitGroup;
								public _element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _namespace(string0: string): void;
								public commit(boolean0: boolean): void;
								public block(): void;
								public all(): com.sun.xml.bind.v2.schemagen.xmlschema.ExplicitGroup;
								public block(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.ComplexType;
								public getDocument(): com.sun.xml.txw2.Document;
								public _attribute(string0: string, string1: string, object2: any): void;
								public _final(strings0: native.Array<string>): com.sun.xml.bind.v2.schemagen.xmlschema.ComplexType;
								public choice(): com.sun.xml.bind.v2.schemagen.xmlschema.ExplicitGroup;
								public block(strings0: native.Array<string>): com.sun.xml.bind.v2.schemagen.xmlschema.ComplexType;
								public commit(): void;
								public _attribute(qName0: javax.xml.namespace.QName, object1: any): void;
								public _element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public annotation(): com.sun.xml.bind.v2.schemagen.xmlschema.Annotation;
								public _cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _namespace(string0: string, string1: string): void;
								public _final(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.ComplexType;
								public _cdata(object0: any): void;
								public id(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Annotated;
								public _pcdata(object0: any): void;
								public attribute(): com.sun.xml.bind.v2.schemagen.xmlschema.LocalAttribute;
								public name(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.ComplexType;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module schemagen {
						export module xmlschema {
							export class ComplexTypeHost extends java.lang.Object implements com.sun.xml.bind.v2.schemagen.xmlschema.TypeHost, com.sun.xml.txw2.TypedXmlWriter {
								public static class: java.lang.Class<com.sun.xml.bind.v2.schemagen.xmlschema.ComplexTypeHost>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.schemagen.xmlschema.ComplexTypeHost interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									complexType(): com.sun.xml.bind.v2.schemagen.xmlschema.ComplexType;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								});
								public constructor();
								public commit(): void;
								public _attribute(qName0: javax.xml.namespace.QName, object1: any): void;
								public _element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _comment(object0: any): void;
								public _attribute(string0: string, object1: any): void;
								public _cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _namespace(string0: string, string1: string): void;
								public _namespace(string0: string, boolean1: boolean): void;
								public _element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public complexType(): com.sun.xml.bind.v2.schemagen.xmlschema.ComplexType;
								public _namespace(string0: string): void;
								public commit(boolean0: boolean): void;
								public block(): void;
								public _cdata(object0: any): void;
								public getDocument(): com.sun.xml.txw2.Document;
								public _pcdata(object0: any): void;
								public _attribute(string0: string, string1: string, object2: any): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module schemagen {
						export module xmlschema {
							export class ComplexTypeModel extends java.lang.Object implements com.sun.xml.bind.v2.schemagen.xmlschema.AttrDecls, com.sun.xml.bind.v2.schemagen.xmlschema.TypeDefParticle, com.sun.xml.txw2.TypedXmlWriter {
								public static class: java.lang.Class<com.sun.xml.bind.v2.schemagen.xmlschema.ComplexTypeModel>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.schemagen.xmlschema.ComplexTypeModel interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									simpleContent(): com.sun.xml.bind.v2.schemagen.xmlschema.SimpleContent;
									complexContent(): com.sun.xml.bind.v2.schemagen.xmlschema.ComplexContent;
									mixed(boolean0: boolean): com.sun.xml.bind.v2.schemagen.xmlschema.ComplexTypeModel;
									attribute(): com.sun.xml.bind.v2.schemagen.xmlschema.LocalAttribute;
									anyAttribute(): com.sun.xml.bind.v2.schemagen.xmlschema.Wildcard;
									all(): com.sun.xml.bind.v2.schemagen.xmlschema.ExplicitGroup;
									sequence(): com.sun.xml.bind.v2.schemagen.xmlschema.ExplicitGroup;
									choice(): com.sun.xml.bind.v2.schemagen.xmlschema.ExplicitGroup;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								});
								public constructor();
								public mixed(boolean0: boolean): com.sun.xml.bind.v2.schemagen.xmlschema.ComplexTypeModel;
								public complexContent(): com.sun.xml.bind.v2.schemagen.xmlschema.ComplexContent;
								public anyAttribute(): com.sun.xml.bind.v2.schemagen.xmlschema.Wildcard;
								public _comment(object0: any): void;
								public _attribute(string0: string, object1: any): void;
								public simpleContent(): com.sun.xml.bind.v2.schemagen.xmlschema.SimpleContent;
								public _namespace(string0: string, boolean1: boolean): void;
								public _element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public sequence(): com.sun.xml.bind.v2.schemagen.xmlschema.ExplicitGroup;
								public _element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _namespace(string0: string): void;
								public all(): com.sun.xml.bind.v2.schemagen.xmlschema.ExplicitGroup;
								public commit(boolean0: boolean): void;
								public block(): void;
								public getDocument(): com.sun.xml.txw2.Document;
								public _attribute(string0: string, string1: string, object2: any): void;
								public choice(): com.sun.xml.bind.v2.schemagen.xmlschema.ExplicitGroup;
								public commit(): void;
								public _attribute(qName0: javax.xml.namespace.QName, object1: any): void;
								public _element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _namespace(string0: string, string1: string): void;
								public _cdata(object0: any): void;
								public attribute(): com.sun.xml.bind.v2.schemagen.xmlschema.LocalAttribute;
								public _pcdata(object0: any): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module schemagen {
						export module xmlschema {
							export class ContentModelContainer extends java.lang.Object implements com.sun.xml.txw2.TypedXmlWriter {
								public static class: java.lang.Class<com.sun.xml.bind.v2.schemagen.xmlschema.ContentModelContainer>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.schemagen.xmlschema.ContentModelContainer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									element(): com.sun.xml.bind.v2.schemagen.xmlschema.LocalElement;
									any(): com.sun.xml.bind.v2.schemagen.xmlschema.Any;
									all(): com.sun.xml.bind.v2.schemagen.xmlschema.ExplicitGroup;
									sequence(): com.sun.xml.bind.v2.schemagen.xmlschema.ExplicitGroup;
									choice(): com.sun.xml.bind.v2.schemagen.xmlschema.ExplicitGroup;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								});
								public constructor();
								public choice(): com.sun.xml.bind.v2.schemagen.xmlschema.ExplicitGroup;
								public commit(): void;
								public _attribute(qName0: javax.xml.namespace.QName, object1: any): void;
								public _element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _comment(object0: any): void;
								public _attribute(string0: string, object1: any): void;
								public _cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _namespace(string0: string, string1: string): void;
								public any(): com.sun.xml.bind.v2.schemagen.xmlschema.Any;
								public _namespace(string0: string, boolean1: boolean): void;
								public _element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public sequence(): com.sun.xml.bind.v2.schemagen.xmlschema.ExplicitGroup;
								public _element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _namespace(string0: string): void;
								public all(): com.sun.xml.bind.v2.schemagen.xmlschema.ExplicitGroup;
								public commit(boolean0: boolean): void;
								public block(): void;
								public _cdata(object0: any): void;
								public getDocument(): com.sun.xml.txw2.Document;
								public _pcdata(object0: any): void;
								public element(): com.sun.xml.bind.v2.schemagen.xmlschema.LocalElement;
								public _attribute(string0: string, string1: string, object2: any): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module schemagen {
						export module xmlschema {
							export class Documentation extends java.lang.Object implements com.sun.xml.txw2.TypedXmlWriter {
								public static class: java.lang.Class<com.sun.xml.bind.v2.schemagen.xmlschema.Documentation>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.schemagen.xmlschema.Documentation interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									source(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Documentation;
									lang(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Documentation;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								});
								public constructor();
								public commit(): void;
								public _attribute(qName0: javax.xml.namespace.QName, object1: any): void;
								public _element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _comment(object0: any): void;
								public lang(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Documentation;
								public _attribute(string0: string, object1: any): void;
								public _cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public source(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Documentation;
								public _namespace(string0: string, string1: string): void;
								public _namespace(string0: string, boolean1: boolean): void;
								public _element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _namespace(string0: string): void;
								public commit(boolean0: boolean): void;
								public block(): void;
								public _cdata(object0: any): void;
								public getDocument(): com.sun.xml.txw2.Document;
								public _pcdata(object0: any): void;
								public _attribute(string0: string, string1: string, object2: any): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module schemagen {
						export module xmlschema {
							export class Element extends java.lang.Object implements com.sun.xml.bind.v2.schemagen.xmlschema.Annotated, com.sun.xml.bind.v2.schemagen.xmlschema.ComplexTypeHost, com.sun.xml.bind.v2.schemagen.xmlschema.FixedOrDefault, com.sun.xml.bind.v2.schemagen.xmlschema.SimpleTypeHost, com.sun.xml.txw2.TypedXmlWriter {
								public static class: java.lang.Class<com.sun.xml.bind.v2.schemagen.xmlschema.Element>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.schemagen.xmlschema.Element interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									type(qName0: javax.xml.namespace.QName): com.sun.xml.bind.v2.schemagen.xmlschema.Element;
									block(strings0: native.Array<string>): com.sun.xml.bind.v2.schemagen.xmlschema.Element;
									block(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Element;
									nillable(boolean0: boolean): com.sun.xml.bind.v2.schemagen.xmlschema.Element;
									annotation(): com.sun.xml.bind.v2.schemagen.xmlschema.Annotation;
									id(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Annotated;
									complexType(): com.sun.xml.bind.v2.schemagen.xmlschema.ComplexType;
									_default(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.FixedOrDefault;
									fixed(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.FixedOrDefault;
									simpleType(): com.sun.xml.bind.v2.schemagen.xmlschema.SimpleType;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								});
								public constructor();
								public fixed(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.FixedOrDefault;
								public _comment(object0: any): void;
								public _default(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.FixedOrDefault;
								public _attribute(string0: string, object1: any): void;
								public _namespace(string0: string, boolean1: boolean): void;
								public _element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _namespace(string0: string): void;
								public commit(boolean0: boolean): void;
								public block(): void;
								public getDocument(): com.sun.xml.txw2.Document;
								public _attribute(string0: string, string1: string, object2: any): void;
								public commit(): void;
								public _attribute(qName0: javax.xml.namespace.QName, object1: any): void;
								public _element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public annotation(): com.sun.xml.bind.v2.schemagen.xmlschema.Annotation;
								public _cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public block(strings0: native.Array<string>): com.sun.xml.bind.v2.schemagen.xmlschema.Element;
								public _namespace(string0: string, string1: string): void;
								public block(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Element;
								public complexType(): com.sun.xml.bind.v2.schemagen.xmlschema.ComplexType;
								public nillable(boolean0: boolean): com.sun.xml.bind.v2.schemagen.xmlschema.Element;
								public _cdata(object0: any): void;
								public id(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Annotated;
								public simpleType(): com.sun.xml.bind.v2.schemagen.xmlschema.SimpleType;
								public _pcdata(object0: any): void;
								public type(qName0: javax.xml.namespace.QName): com.sun.xml.bind.v2.schemagen.xmlschema.Element;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module schemagen {
						export module xmlschema {
							export class ExplicitGroup extends java.lang.Object implements com.sun.xml.bind.v2.schemagen.xmlschema.Annotated, com.sun.xml.bind.v2.schemagen.xmlschema.NestedParticle, com.sun.xml.bind.v2.schemagen.xmlschema.Occurs, com.sun.xml.txw2.TypedXmlWriter {
								public static class: java.lang.Class<com.sun.xml.bind.v2.schemagen.xmlschema.ExplicitGroup>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.schemagen.xmlschema.ExplicitGroup interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									annotation(): com.sun.xml.bind.v2.schemagen.xmlschema.Annotation;
									id(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Annotated;
									element(): com.sun.xml.bind.v2.schemagen.xmlschema.LocalElement;
									any(): com.sun.xml.bind.v2.schemagen.xmlschema.Any;
									sequence(): com.sun.xml.bind.v2.schemagen.xmlschema.ExplicitGroup;
									choice(): com.sun.xml.bind.v2.schemagen.xmlschema.ExplicitGroup;
									minOccurs(int0: number): com.sun.xml.bind.v2.schemagen.xmlschema.Occurs;
									maxOccurs(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Occurs;
									maxOccurs(int0: number): com.sun.xml.bind.v2.schemagen.xmlschema.Occurs;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								});
								public constructor();
								public maxOccurs(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Occurs;
								public _comment(object0: any): void;
								public _attribute(string0: string, object1: any): void;
								public _namespace(string0: string, boolean1: boolean): void;
								public _element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public sequence(): com.sun.xml.bind.v2.schemagen.xmlschema.ExplicitGroup;
								public _element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _namespace(string0: string): void;
								public commit(boolean0: boolean): void;
								public block(): void;
								public getDocument(): com.sun.xml.txw2.Document;
								public element(): com.sun.xml.bind.v2.schemagen.xmlschema.LocalElement;
								public maxOccurs(int0: number): com.sun.xml.bind.v2.schemagen.xmlschema.Occurs;
								public _attribute(string0: string, string1: string, object2: any): void;
								public choice(): com.sun.xml.bind.v2.schemagen.xmlschema.ExplicitGroup;
								public commit(): void;
								public _attribute(qName0: javax.xml.namespace.QName, object1: any): void;
								public _element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public annotation(): com.sun.xml.bind.v2.schemagen.xmlschema.Annotation;
								public _cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _namespace(string0: string, string1: string): void;
								public any(): com.sun.xml.bind.v2.schemagen.xmlschema.Any;
								public minOccurs(int0: number): com.sun.xml.bind.v2.schemagen.xmlschema.Occurs;
								public _cdata(object0: any): void;
								public id(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Annotated;
								public _pcdata(object0: any): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module schemagen {
						export module xmlschema {
							export class ExtensionType extends java.lang.Object implements com.sun.xml.bind.v2.schemagen.xmlschema.Annotated, com.sun.xml.txw2.TypedXmlWriter {
								public static class: java.lang.Class<com.sun.xml.bind.v2.schemagen.xmlschema.ExtensionType>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.schemagen.xmlschema.ExtensionType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									base(qName0: javax.xml.namespace.QName): com.sun.xml.bind.v2.schemagen.xmlschema.ExtensionType;
									annotation(): com.sun.xml.bind.v2.schemagen.xmlschema.Annotation;
									id(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Annotated;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								});
								public constructor();
								public commit(): void;
								public _attribute(qName0: javax.xml.namespace.QName, object1: any): void;
								public _element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public annotation(): com.sun.xml.bind.v2.schemagen.xmlschema.Annotation;
								public _comment(object0: any): void;
								public _attribute(string0: string, object1: any): void;
								public _cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _namespace(string0: string, string1: string): void;
								public _namespace(string0: string, boolean1: boolean): void;
								public _element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public base(qName0: javax.xml.namespace.QName): com.sun.xml.bind.v2.schemagen.xmlschema.ExtensionType;
								public _element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _namespace(string0: string): void;
								public commit(boolean0: boolean): void;
								public block(): void;
								public _cdata(object0: any): void;
								public id(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Annotated;
								public getDocument(): com.sun.xml.txw2.Document;
								public _pcdata(object0: any): void;
								public _attribute(string0: string, string1: string, object2: any): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module schemagen {
						export module xmlschema {
							export class FixedOrDefault extends java.lang.Object implements com.sun.xml.txw2.TypedXmlWriter {
								public static class: java.lang.Class<com.sun.xml.bind.v2.schemagen.xmlschema.FixedOrDefault>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.schemagen.xmlschema.FixedOrDefault interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									_default(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.FixedOrDefault;
									fixed(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.FixedOrDefault;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								});
								public constructor();
								public fixed(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.FixedOrDefault;
								public commit(): void;
								public _attribute(qName0: javax.xml.namespace.QName, object1: any): void;
								public _element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _comment(object0: any): void;
								public _default(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.FixedOrDefault;
								public _attribute(string0: string, object1: any): void;
								public _cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _namespace(string0: string, string1: string): void;
								public _namespace(string0: string, boolean1: boolean): void;
								public _element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _namespace(string0: string): void;
								public commit(boolean0: boolean): void;
								public block(): void;
								public _cdata(object0: any): void;
								public getDocument(): com.sun.xml.txw2.Document;
								public _pcdata(object0: any): void;
								public _attribute(string0: string, string1: string, object2: any): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module schemagen {
						export module xmlschema {
							export class Import extends java.lang.Object implements com.sun.xml.bind.v2.schemagen.xmlschema.Annotated, com.sun.xml.txw2.TypedXmlWriter {
								public static class: java.lang.Class<com.sun.xml.bind.v2.schemagen.xmlschema.Import>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.schemagen.xmlschema.Import interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									namespace(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Import;
									schemaLocation(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Import;
									annotation(): com.sun.xml.bind.v2.schemagen.xmlschema.Annotation;
									id(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Annotated;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								});
								public constructor();
								public commit(): void;
								public _attribute(qName0: javax.xml.namespace.QName, object1: any): void;
								public _element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public annotation(): com.sun.xml.bind.v2.schemagen.xmlschema.Annotation;
								public _comment(object0: any): void;
								public _attribute(string0: string, object1: any): void;
								public _cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _namespace(string0: string, string1: string): void;
								public _namespace(string0: string, boolean1: boolean): void;
								public _element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _namespace(string0: string): void;
								public commit(boolean0: boolean): void;
								public block(): void;
								public _cdata(object0: any): void;
								public id(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Annotated;
								public getDocument(): com.sun.xml.txw2.Document;
								public _pcdata(object0: any): void;
								public namespace(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Import;
								public schemaLocation(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Import;
								public _attribute(string0: string, string1: string, object2: any): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module schemagen {
						export module xmlschema {
							export class List extends java.lang.Object implements com.sun.xml.bind.v2.schemagen.xmlschema.Annotated, com.sun.xml.bind.v2.schemagen.xmlschema.SimpleTypeHost, com.sun.xml.txw2.TypedXmlWriter {
								public static class: java.lang.Class<com.sun.xml.bind.v2.schemagen.xmlschema.List>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.schemagen.xmlschema.List interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									itemType(qName0: javax.xml.namespace.QName): com.sun.xml.bind.v2.schemagen.xmlschema.List;
									annotation(): com.sun.xml.bind.v2.schemagen.xmlschema.Annotation;
									id(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Annotated;
									simpleType(): com.sun.xml.bind.v2.schemagen.xmlschema.SimpleType;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								});
								public constructor();
								public commit(): void;
								public _attribute(qName0: javax.xml.namespace.QName, object1: any): void;
								public _element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public annotation(): com.sun.xml.bind.v2.schemagen.xmlschema.Annotation;
								public _comment(object0: any): void;
								public _attribute(string0: string, object1: any): void;
								public _cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _namespace(string0: string, string1: string): void;
								public _namespace(string0: string, boolean1: boolean): void;
								public _element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public itemType(qName0: javax.xml.namespace.QName): com.sun.xml.bind.v2.schemagen.xmlschema.List;
								public _element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _namespace(string0: string): void;
								public commit(boolean0: boolean): void;
								public block(): void;
								public _cdata(object0: any): void;
								public id(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Annotated;
								public simpleType(): com.sun.xml.bind.v2.schemagen.xmlschema.SimpleType;
								public getDocument(): com.sun.xml.txw2.Document;
								public _pcdata(object0: any): void;
								public _attribute(string0: string, string1: string, object2: any): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module schemagen {
						export module xmlschema {
							export class LocalAttribute extends java.lang.Object implements com.sun.xml.bind.v2.schemagen.xmlschema.Annotated, com.sun.xml.bind.v2.schemagen.xmlschema.AttributeType, com.sun.xml.bind.v2.schemagen.xmlschema.FixedOrDefault, com.sun.xml.txw2.TypedXmlWriter {
								public static class: java.lang.Class<com.sun.xml.bind.v2.schemagen.xmlschema.LocalAttribute>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.schemagen.xmlschema.LocalAttribute interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									form(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.LocalAttribute;
									name(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.LocalAttribute;
									ref(qName0: javax.xml.namespace.QName): com.sun.xml.bind.v2.schemagen.xmlschema.LocalAttribute;
									use(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.LocalAttribute;
									annotation(): com.sun.xml.bind.v2.schemagen.xmlschema.Annotation;
									id(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Annotated;
									type(qName0: javax.xml.namespace.QName): com.sun.xml.bind.v2.schemagen.xmlschema.AttributeType;
									_default(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.FixedOrDefault;
									fixed(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.FixedOrDefault;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									simpleType(): com.sun.xml.bind.v2.schemagen.xmlschema.SimpleType;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								});
								public constructor();
								public fixed(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.FixedOrDefault;
								public _comment(object0: any): void;
								public ref(qName0: javax.xml.namespace.QName): com.sun.xml.bind.v2.schemagen.xmlschema.LocalAttribute;
								public _default(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.FixedOrDefault;
								public _attribute(string0: string, object1: any): void;
								public _namespace(string0: string, boolean1: boolean): void;
								public _element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public use(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.LocalAttribute;
								public form(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.LocalAttribute;
								public _element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _namespace(string0: string): void;
								public commit(boolean0: boolean): void;
								public block(): void;
								public getDocument(): com.sun.xml.txw2.Document;
								public _attribute(string0: string, string1: string, object2: any): void;
								public type(qName0: javax.xml.namespace.QName): com.sun.xml.bind.v2.schemagen.xmlschema.AttributeType;
								public commit(): void;
								public _attribute(qName0: javax.xml.namespace.QName, object1: any): void;
								public _element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public annotation(): com.sun.xml.bind.v2.schemagen.xmlschema.Annotation;
								public _cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _namespace(string0: string, string1: string): void;
								public _cdata(object0: any): void;
								public id(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Annotated;
								public simpleType(): com.sun.xml.bind.v2.schemagen.xmlschema.SimpleType;
								public name(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.LocalAttribute;
								public _pcdata(object0: any): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module schemagen {
						export module xmlschema {
							export class LocalElement extends java.lang.Object implements com.sun.xml.bind.v2.schemagen.xmlschema.Element, com.sun.xml.bind.v2.schemagen.xmlschema.Occurs, com.sun.xml.txw2.TypedXmlWriter {
								public static class: java.lang.Class<com.sun.xml.bind.v2.schemagen.xmlschema.LocalElement>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.schemagen.xmlschema.LocalElement interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									form(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.LocalElement;
									name(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.LocalElement;
									ref(qName0: javax.xml.namespace.QName): com.sun.xml.bind.v2.schemagen.xmlschema.LocalElement;
									type(qName0: javax.xml.namespace.QName): com.sun.xml.bind.v2.schemagen.xmlschema.Element;
									block(strings0: native.Array<string>): com.sun.xml.bind.v2.schemagen.xmlschema.Element;
									block(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Element;
									nillable(boolean0: boolean): com.sun.xml.bind.v2.schemagen.xmlschema.Element;
									minOccurs(int0: number): com.sun.xml.bind.v2.schemagen.xmlschema.Occurs;
									maxOccurs(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Occurs;
									maxOccurs(int0: number): com.sun.xml.bind.v2.schemagen.xmlschema.Occurs;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									annotation(): com.sun.xml.bind.v2.schemagen.xmlschema.Annotation;
									id(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Annotated;
									complexType(): com.sun.xml.bind.v2.schemagen.xmlschema.ComplexType;
									_default(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.FixedOrDefault;
									fixed(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.FixedOrDefault;
									simpleType(): com.sun.xml.bind.v2.schemagen.xmlschema.SimpleType;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								});
								public constructor();
								public maxOccurs(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Occurs;
								public fixed(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.FixedOrDefault;
								public name(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.LocalElement;
								public _comment(object0: any): void;
								public _default(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.FixedOrDefault;
								public _attribute(string0: string, object1: any): void;
								public _namespace(string0: string, boolean1: boolean): void;
								public _element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _namespace(string0: string): void;
								public commit(boolean0: boolean): void;
								public block(): void;
								public getDocument(): com.sun.xml.txw2.Document;
								public ref(qName0: javax.xml.namespace.QName): com.sun.xml.bind.v2.schemagen.xmlschema.LocalElement;
								public maxOccurs(int0: number): com.sun.xml.bind.v2.schemagen.xmlschema.Occurs;
								public _attribute(string0: string, string1: string, object2: any): void;
								public form(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.LocalElement;
								public commit(): void;
								public _attribute(qName0: javax.xml.namespace.QName, object1: any): void;
								public _element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public annotation(): com.sun.xml.bind.v2.schemagen.xmlschema.Annotation;
								public _cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public block(strings0: native.Array<string>): com.sun.xml.bind.v2.schemagen.xmlschema.Element;
								public _namespace(string0: string, string1: string): void;
								public block(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Element;
								public minOccurs(int0: number): com.sun.xml.bind.v2.schemagen.xmlschema.Occurs;
								public complexType(): com.sun.xml.bind.v2.schemagen.xmlschema.ComplexType;
								public nillable(boolean0: boolean): com.sun.xml.bind.v2.schemagen.xmlschema.Element;
								public _cdata(object0: any): void;
								public id(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Annotated;
								public simpleType(): com.sun.xml.bind.v2.schemagen.xmlschema.SimpleType;
								public _pcdata(object0: any): void;
								public type(qName0: javax.xml.namespace.QName): com.sun.xml.bind.v2.schemagen.xmlschema.Element;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module schemagen {
						export module xmlschema {
							export class NestedParticle extends java.lang.Object implements com.sun.xml.txw2.TypedXmlWriter {
								public static class: java.lang.Class<com.sun.xml.bind.v2.schemagen.xmlschema.NestedParticle>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.schemagen.xmlschema.NestedParticle interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									element(): com.sun.xml.bind.v2.schemagen.xmlschema.LocalElement;
									any(): com.sun.xml.bind.v2.schemagen.xmlschema.Any;
									sequence(): com.sun.xml.bind.v2.schemagen.xmlschema.ExplicitGroup;
									choice(): com.sun.xml.bind.v2.schemagen.xmlschema.ExplicitGroup;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								});
								public constructor();
								public choice(): com.sun.xml.bind.v2.schemagen.xmlschema.ExplicitGroup;
								public commit(): void;
								public _attribute(qName0: javax.xml.namespace.QName, object1: any): void;
								public _element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _comment(object0: any): void;
								public _attribute(string0: string, object1: any): void;
								public _cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _namespace(string0: string, string1: string): void;
								public any(): com.sun.xml.bind.v2.schemagen.xmlschema.Any;
								public _namespace(string0: string, boolean1: boolean): void;
								public _element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public sequence(): com.sun.xml.bind.v2.schemagen.xmlschema.ExplicitGroup;
								public _element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _namespace(string0: string): void;
								public commit(boolean0: boolean): void;
								public block(): void;
								public _cdata(object0: any): void;
								public getDocument(): com.sun.xml.txw2.Document;
								public _pcdata(object0: any): void;
								public element(): com.sun.xml.bind.v2.schemagen.xmlschema.LocalElement;
								public _attribute(string0: string, string1: string, object2: any): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module schemagen {
						export module xmlschema {
							export class NoFixedFacet extends java.lang.Object implements com.sun.xml.bind.v2.schemagen.xmlschema.Annotated, com.sun.xml.txw2.TypedXmlWriter {
								public static class: java.lang.Class<com.sun.xml.bind.v2.schemagen.xmlschema.NoFixedFacet>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.schemagen.xmlschema.NoFixedFacet interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									value(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.NoFixedFacet;
									annotation(): com.sun.xml.bind.v2.schemagen.xmlschema.Annotation;
									id(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Annotated;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								});
								public constructor();
								public value(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.NoFixedFacet;
								public commit(): void;
								public _attribute(qName0: javax.xml.namespace.QName, object1: any): void;
								public _element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public annotation(): com.sun.xml.bind.v2.schemagen.xmlschema.Annotation;
								public _comment(object0: any): void;
								public _attribute(string0: string, object1: any): void;
								public _cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _namespace(string0: string, string1: string): void;
								public _namespace(string0: string, boolean1: boolean): void;
								public _element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _namespace(string0: string): void;
								public commit(boolean0: boolean): void;
								public block(): void;
								public _cdata(object0: any): void;
								public id(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Annotated;
								public getDocument(): com.sun.xml.txw2.Document;
								public _pcdata(object0: any): void;
								public _attribute(string0: string, string1: string, object2: any): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module schemagen {
						export module xmlschema {
							export class Occurs extends java.lang.Object implements com.sun.xml.txw2.TypedXmlWriter {
								public static class: java.lang.Class<com.sun.xml.bind.v2.schemagen.xmlschema.Occurs>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.schemagen.xmlschema.Occurs interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									minOccurs(int0: number): com.sun.xml.bind.v2.schemagen.xmlschema.Occurs;
									maxOccurs(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Occurs;
									maxOccurs(int0: number): com.sun.xml.bind.v2.schemagen.xmlschema.Occurs;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								});
								public constructor();
								public maxOccurs(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Occurs;
								public commit(): void;
								public _attribute(qName0: javax.xml.namespace.QName, object1: any): void;
								public _element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _comment(object0: any): void;
								public _attribute(string0: string, object1: any): void;
								public _cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _namespace(string0: string, string1: string): void;
								public _namespace(string0: string, boolean1: boolean): void;
								public _element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public minOccurs(int0: number): com.sun.xml.bind.v2.schemagen.xmlschema.Occurs;
								public _namespace(string0: string): void;
								public commit(boolean0: boolean): void;
								public block(): void;
								public _cdata(object0: any): void;
								public getDocument(): com.sun.xml.txw2.Document;
								public _pcdata(object0: any): void;
								public maxOccurs(int0: number): com.sun.xml.bind.v2.schemagen.xmlschema.Occurs;
								public _attribute(string0: string, string1: string, object2: any): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module schemagen {
						export module xmlschema {
							export class Particle extends java.lang.Object implements com.sun.xml.bind.v2.schemagen.xmlschema.ContentModelContainer, com.sun.xml.bind.v2.schemagen.xmlschema.Occurs {
								public static class: java.lang.Class<com.sun.xml.bind.v2.schemagen.xmlschema.Particle>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.schemagen.xmlschema.Particle interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									element(): com.sun.xml.bind.v2.schemagen.xmlschema.LocalElement;
									any(): com.sun.xml.bind.v2.schemagen.xmlschema.Any;
									all(): com.sun.xml.bind.v2.schemagen.xmlschema.ExplicitGroup;
									sequence(): com.sun.xml.bind.v2.schemagen.xmlschema.ExplicitGroup;
									choice(): com.sun.xml.bind.v2.schemagen.xmlschema.ExplicitGroup;
									minOccurs(int0: number): com.sun.xml.bind.v2.schemagen.xmlschema.Occurs;
									maxOccurs(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Occurs;
									maxOccurs(int0: number): com.sun.xml.bind.v2.schemagen.xmlschema.Occurs;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								});
								public constructor();
								public maxOccurs(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Occurs;
								public _comment(object0: any): void;
								public _attribute(string0: string, object1: any): void;
								public _namespace(string0: string, boolean1: boolean): void;
								public _element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public sequence(): com.sun.xml.bind.v2.schemagen.xmlschema.ExplicitGroup;
								public _element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _namespace(string0: string): void;
								public all(): com.sun.xml.bind.v2.schemagen.xmlschema.ExplicitGroup;
								public commit(boolean0: boolean): void;
								public block(): void;
								public getDocument(): com.sun.xml.txw2.Document;
								public element(): com.sun.xml.bind.v2.schemagen.xmlschema.LocalElement;
								public maxOccurs(int0: number): com.sun.xml.bind.v2.schemagen.xmlschema.Occurs;
								public _attribute(string0: string, string1: string, object2: any): void;
								public choice(): com.sun.xml.bind.v2.schemagen.xmlschema.ExplicitGroup;
								public commit(): void;
								public _attribute(qName0: javax.xml.namespace.QName, object1: any): void;
								public _element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _namespace(string0: string, string1: string): void;
								public any(): com.sun.xml.bind.v2.schemagen.xmlschema.Any;
								public minOccurs(int0: number): com.sun.xml.bind.v2.schemagen.xmlschema.Occurs;
								public _cdata(object0: any): void;
								public _pcdata(object0: any): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module schemagen {
						export module xmlschema {
							export class Redefinable extends java.lang.Object implements com.sun.xml.bind.v2.schemagen.xmlschema.ComplexTypeHost, com.sun.xml.bind.v2.schemagen.xmlschema.SimpleTypeHost, com.sun.xml.txw2.TypedXmlWriter {
								public static class: java.lang.Class<com.sun.xml.bind.v2.schemagen.xmlschema.Redefinable>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.schemagen.xmlschema.Redefinable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									complexType(): com.sun.xml.bind.v2.schemagen.xmlschema.ComplexType;
									simpleType(): com.sun.xml.bind.v2.schemagen.xmlschema.SimpleType;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								});
								public constructor();
								public commit(): void;
								public _attribute(qName0: javax.xml.namespace.QName, object1: any): void;
								public _element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _comment(object0: any): void;
								public _attribute(string0: string, object1: any): void;
								public _cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _namespace(string0: string, string1: string): void;
								public _namespace(string0: string, boolean1: boolean): void;
								public _element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public complexType(): com.sun.xml.bind.v2.schemagen.xmlschema.ComplexType;
								public _namespace(string0: string): void;
								public commit(boolean0: boolean): void;
								public block(): void;
								public _cdata(object0: any): void;
								public simpleType(): com.sun.xml.bind.v2.schemagen.xmlschema.SimpleType;
								public getDocument(): com.sun.xml.txw2.Document;
								public _pcdata(object0: any): void;
								public _attribute(string0: string, string1: string, object2: any): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module schemagen {
						export module xmlschema {
							export class Schema extends java.lang.Object implements com.sun.xml.bind.v2.schemagen.xmlschema.SchemaTop, com.sun.xml.txw2.TypedXmlWriter {
								public static class: java.lang.Class<com.sun.xml.bind.v2.schemagen.xmlschema.Schema>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.schemagen.xmlschema.Schema interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									annotation(): com.sun.xml.bind.v2.schemagen.xmlschema.Annotation;
									_import(): com.sun.xml.bind.v2.schemagen.xmlschema.Import;
									targetNamespace(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Schema;
									lang(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Schema;
									id(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Schema;
									elementFormDefault(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Schema;
									attributeFormDefault(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Schema;
									blockDefault(strings0: native.Array<string>): com.sun.xml.bind.v2.schemagen.xmlschema.Schema;
									blockDefault(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Schema;
									finalDefault(strings0: native.Array<string>): com.sun.xml.bind.v2.schemagen.xmlschema.Schema;
									finalDefault(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Schema;
									version(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Schema;
									attribute(): com.sun.xml.bind.v2.schemagen.xmlschema.TopLevelAttribute;
									element(): com.sun.xml.bind.v2.schemagen.xmlschema.TopLevelElement;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									complexType(): com.sun.xml.bind.v2.schemagen.xmlschema.ComplexType;
									simpleType(): com.sun.xml.bind.v2.schemagen.xmlschema.SimpleType;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								});
								public constructor();
								public element(): com.sun.xml.bind.v2.schemagen.xmlschema.TopLevelElement;
								public _comment(object0: any): void;
								public _attribute(string0: string, object1: any): void;
								public version(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Schema;
								public _namespace(string0: string, boolean1: boolean): void;
								public _element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public finalDefault(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Schema;
								public blockDefault(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Schema;
								public _element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _namespace(string0: string): void;
								public attribute(): com.sun.xml.bind.v2.schemagen.xmlschema.TopLevelAttribute;
								public commit(boolean0: boolean): void;
								public block(): void;
								public _import(): com.sun.xml.bind.v2.schemagen.xmlschema.Import;
								public getDocument(): com.sun.xml.txw2.Document;
								public _attribute(string0: string, string1: string, object2: any): void;
								public blockDefault(strings0: native.Array<string>): com.sun.xml.bind.v2.schemagen.xmlschema.Schema;
								public elementFormDefault(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Schema;
								public commit(): void;
								public _attribute(qName0: javax.xml.namespace.QName, object1: any): void;
								public _element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public annotation(): com.sun.xml.bind.v2.schemagen.xmlschema.Annotation;
								public targetNamespace(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Schema;
								public _cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public lang(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Schema;
								public _element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _namespace(string0: string, string1: string): void;
								public id(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Schema;
								public complexType(): com.sun.xml.bind.v2.schemagen.xmlschema.ComplexType;
								public _cdata(object0: any): void;
								public simpleType(): com.sun.xml.bind.v2.schemagen.xmlschema.SimpleType;
								public attributeFormDefault(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Schema;
								public _pcdata(object0: any): void;
								public finalDefault(strings0: native.Array<string>): com.sun.xml.bind.v2.schemagen.xmlschema.Schema;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module schemagen {
						export module xmlschema {
							export class SchemaTop extends java.lang.Object implements com.sun.xml.bind.v2.schemagen.xmlschema.Redefinable, com.sun.xml.txw2.TypedXmlWriter {
								public static class: java.lang.Class<com.sun.xml.bind.v2.schemagen.xmlschema.SchemaTop>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.schemagen.xmlschema.SchemaTop interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									attribute(): com.sun.xml.bind.v2.schemagen.xmlschema.TopLevelAttribute;
									element(): com.sun.xml.bind.v2.schemagen.xmlschema.TopLevelElement;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									complexType(): com.sun.xml.bind.v2.schemagen.xmlschema.ComplexType;
									simpleType(): com.sun.xml.bind.v2.schemagen.xmlschema.SimpleType;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								});
								public constructor();
								public element(): com.sun.xml.bind.v2.schemagen.xmlschema.TopLevelElement;
								public commit(): void;
								public _attribute(qName0: javax.xml.namespace.QName, object1: any): void;
								public _element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _comment(object0: any): void;
								public _attribute(string0: string, object1: any): void;
								public _cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _namespace(string0: string, string1: string): void;
								public _namespace(string0: string, boolean1: boolean): void;
								public _element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _namespace(string0: string): void;
								public complexType(): com.sun.xml.bind.v2.schemagen.xmlschema.ComplexType;
								public attribute(): com.sun.xml.bind.v2.schemagen.xmlschema.TopLevelAttribute;
								public commit(boolean0: boolean): void;
								public block(): void;
								public _cdata(object0: any): void;
								public simpleType(): com.sun.xml.bind.v2.schemagen.xmlschema.SimpleType;
								public getDocument(): com.sun.xml.txw2.Document;
								public _pcdata(object0: any): void;
								public _attribute(string0: string, string1: string, object2: any): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module schemagen {
						export module xmlschema {
							export class SimpleContent extends java.lang.Object implements com.sun.xml.bind.v2.schemagen.xmlschema.Annotated, com.sun.xml.txw2.TypedXmlWriter {
								public static class: java.lang.Class<com.sun.xml.bind.v2.schemagen.xmlschema.SimpleContent>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.schemagen.xmlschema.SimpleContent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									extension(): com.sun.xml.bind.v2.schemagen.xmlschema.SimpleExtension;
									restriction(): com.sun.xml.bind.v2.schemagen.xmlschema.SimpleRestriction;
									annotation(): com.sun.xml.bind.v2.schemagen.xmlschema.Annotation;
									id(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Annotated;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								});
								public constructor();
								public restriction(): com.sun.xml.bind.v2.schemagen.xmlschema.SimpleRestriction;
								public commit(): void;
								public _attribute(qName0: javax.xml.namespace.QName, object1: any): void;
								public _element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public annotation(): com.sun.xml.bind.v2.schemagen.xmlschema.Annotation;
								public _comment(object0: any): void;
								public _attribute(string0: string, object1: any): void;
								public _cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _namespace(string0: string, string1: string): void;
								public _namespace(string0: string, boolean1: boolean): void;
								public _element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _namespace(string0: string): void;
								public commit(boolean0: boolean): void;
								public block(): void;
								public _cdata(object0: any): void;
								public id(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Annotated;
								public getDocument(): com.sun.xml.txw2.Document;
								public _pcdata(object0: any): void;
								public extension(): com.sun.xml.bind.v2.schemagen.xmlschema.SimpleExtension;
								public _attribute(string0: string, string1: string, object2: any): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module schemagen {
						export module xmlschema {
							export class SimpleDerivation extends java.lang.Object implements com.sun.xml.txw2.TypedXmlWriter {
								public static class: java.lang.Class<com.sun.xml.bind.v2.schemagen.xmlschema.SimpleDerivation>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.schemagen.xmlschema.SimpleDerivation interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									restriction(): com.sun.xml.bind.v2.schemagen.xmlschema.SimpleRestriction;
									union(): com.sun.xml.bind.v2.schemagen.xmlschema.Union;
									list(): com.sun.xml.bind.v2.schemagen.xmlschema.List;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								});
								public constructor();
								public restriction(): com.sun.xml.bind.v2.schemagen.xmlschema.SimpleRestriction;
								public commit(): void;
								public _attribute(qName0: javax.xml.namespace.QName, object1: any): void;
								public _element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _comment(object0: any): void;
								public _attribute(string0: string, object1: any): void;
								public _cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public union(): com.sun.xml.bind.v2.schemagen.xmlschema.Union;
								public _namespace(string0: string, string1: string): void;
								public _namespace(string0: string, boolean1: boolean): void;
								public _element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public list(): com.sun.xml.bind.v2.schemagen.xmlschema.List;
								public _element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _namespace(string0: string): void;
								public commit(boolean0: boolean): void;
								public block(): void;
								public _cdata(object0: any): void;
								public getDocument(): com.sun.xml.txw2.Document;
								public _pcdata(object0: any): void;
								public _attribute(string0: string, string1: string, object2: any): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module schemagen {
						export module xmlschema {
							export class SimpleExtension extends java.lang.Object implements com.sun.xml.bind.v2.schemagen.xmlschema.AttrDecls, com.sun.xml.bind.v2.schemagen.xmlschema.ExtensionType, com.sun.xml.txw2.TypedXmlWriter {
								public static class: java.lang.Class<com.sun.xml.bind.v2.schemagen.xmlschema.SimpleExtension>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.schemagen.xmlschema.SimpleExtension interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									attribute(): com.sun.xml.bind.v2.schemagen.xmlschema.LocalAttribute;
									anyAttribute(): com.sun.xml.bind.v2.schemagen.xmlschema.Wildcard;
									base(qName0: javax.xml.namespace.QName): com.sun.xml.bind.v2.schemagen.xmlschema.ExtensionType;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									annotation(): com.sun.xml.bind.v2.schemagen.xmlschema.Annotation;
									id(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Annotated;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								});
								public constructor();
								public anyAttribute(): com.sun.xml.bind.v2.schemagen.xmlschema.Wildcard;
								public commit(): void;
								public _attribute(qName0: javax.xml.namespace.QName, object1: any): void;
								public _element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _comment(object0: any): void;
								public annotation(): com.sun.xml.bind.v2.schemagen.xmlschema.Annotation;
								public _attribute(string0: string, object1: any): void;
								public _cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _namespace(string0: string, string1: string): void;
								public _namespace(string0: string, boolean1: boolean): void;
								public _element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public base(qName0: javax.xml.namespace.QName): com.sun.xml.bind.v2.schemagen.xmlschema.ExtensionType;
								public _element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _namespace(string0: string): void;
								public commit(boolean0: boolean): void;
								public block(): void;
								public _cdata(object0: any): void;
								public id(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Annotated;
								public attribute(): com.sun.xml.bind.v2.schemagen.xmlschema.LocalAttribute;
								public getDocument(): com.sun.xml.txw2.Document;
								public _pcdata(object0: any): void;
								public _attribute(string0: string, string1: string, object2: any): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module schemagen {
						export module xmlschema {
							export class SimpleRestriction extends java.lang.Object implements com.sun.xml.bind.v2.schemagen.xmlschema.Annotated, com.sun.xml.bind.v2.schemagen.xmlschema.AttrDecls, com.sun.xml.bind.v2.schemagen.xmlschema.SimpleRestrictionModel, com.sun.xml.txw2.TypedXmlWriter {
								public static class: java.lang.Class<com.sun.xml.bind.v2.schemagen.xmlschema.SimpleRestriction>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.schemagen.xmlschema.SimpleRestriction interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									annotation(): com.sun.xml.bind.v2.schemagen.xmlschema.Annotation;
									id(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Annotated;
									attribute(): com.sun.xml.bind.v2.schemagen.xmlschema.LocalAttribute;
									anyAttribute(): com.sun.xml.bind.v2.schemagen.xmlschema.Wildcard;
									base(qName0: javax.xml.namespace.QName): com.sun.xml.bind.v2.schemagen.xmlschema.SimpleRestrictionModel;
									enumeration(): com.sun.xml.bind.v2.schemagen.xmlschema.NoFixedFacet;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									simpleType(): com.sun.xml.bind.v2.schemagen.xmlschema.SimpleType;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								});
								public constructor();
								public anyAttribute(): com.sun.xml.bind.v2.schemagen.xmlschema.Wildcard;
								public _comment(object0: any): void;
								public _attribute(string0: string, object1: any): void;
								public _namespace(string0: string, boolean1: boolean): void;
								public _element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public enumeration(): com.sun.xml.bind.v2.schemagen.xmlschema.NoFixedFacet;
								public _element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _namespace(string0: string): void;
								public commit(boolean0: boolean): void;
								public block(): void;
								public base(qName0: javax.xml.namespace.QName): com.sun.xml.bind.v2.schemagen.xmlschema.SimpleRestrictionModel;
								public getDocument(): com.sun.xml.txw2.Document;
								public _attribute(string0: string, string1: string, object2: any): void;
								public commit(): void;
								public _attribute(qName0: javax.xml.namespace.QName, object1: any): void;
								public _element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public annotation(): com.sun.xml.bind.v2.schemagen.xmlschema.Annotation;
								public _cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _namespace(string0: string, string1: string): void;
								public _cdata(object0: any): void;
								public id(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Annotated;
								public simpleType(): com.sun.xml.bind.v2.schemagen.xmlschema.SimpleType;
								public attribute(): com.sun.xml.bind.v2.schemagen.xmlschema.LocalAttribute;
								public _pcdata(object0: any): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module schemagen {
						export module xmlschema {
							export class SimpleRestrictionModel extends java.lang.Object implements com.sun.xml.bind.v2.schemagen.xmlschema.SimpleTypeHost, com.sun.xml.txw2.TypedXmlWriter {
								public static class: java.lang.Class<com.sun.xml.bind.v2.schemagen.xmlschema.SimpleRestrictionModel>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.schemagen.xmlschema.SimpleRestrictionModel interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									base(qName0: javax.xml.namespace.QName): com.sun.xml.bind.v2.schemagen.xmlschema.SimpleRestrictionModel;
									enumeration(): com.sun.xml.bind.v2.schemagen.xmlschema.NoFixedFacet;
									simpleType(): com.sun.xml.bind.v2.schemagen.xmlschema.SimpleType;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								});
								public constructor();
								public commit(): void;
								public _attribute(qName0: javax.xml.namespace.QName, object1: any): void;
								public _element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _comment(object0: any): void;
								public _attribute(string0: string, object1: any): void;
								public _cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _namespace(string0: string, string1: string): void;
								public _namespace(string0: string, boolean1: boolean): void;
								public _element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public enumeration(): com.sun.xml.bind.v2.schemagen.xmlschema.NoFixedFacet;
								public _element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _namespace(string0: string): void;
								public commit(boolean0: boolean): void;
								public block(): void;
								public _cdata(object0: any): void;
								public simpleType(): com.sun.xml.bind.v2.schemagen.xmlschema.SimpleType;
								public base(qName0: javax.xml.namespace.QName): com.sun.xml.bind.v2.schemagen.xmlschema.SimpleRestrictionModel;
								public getDocument(): com.sun.xml.txw2.Document;
								public _pcdata(object0: any): void;
								public _attribute(string0: string, string1: string, object2: any): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module schemagen {
						export module xmlschema {
							export class SimpleType extends java.lang.Object implements com.sun.xml.bind.v2.schemagen.xmlschema.Annotated, com.sun.xml.bind.v2.schemagen.xmlschema.SimpleDerivation, com.sun.xml.txw2.TypedXmlWriter {
								public static class: java.lang.Class<com.sun.xml.bind.v2.schemagen.xmlschema.SimpleType>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.schemagen.xmlschema.SimpleType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									_final(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.SimpleType;
									_final(strings0: native.Array<string>): com.sun.xml.bind.v2.schemagen.xmlschema.SimpleType;
									name(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.SimpleType;
									annotation(): com.sun.xml.bind.v2.schemagen.xmlschema.Annotation;
									id(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Annotated;
									restriction(): com.sun.xml.bind.v2.schemagen.xmlschema.SimpleRestriction;
									union(): com.sun.xml.bind.v2.schemagen.xmlschema.Union;
									list(): com.sun.xml.bind.v2.schemagen.xmlschema.List;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								});
								public constructor();
								public _comment(object0: any): void;
								public _final(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.SimpleType;
								public _attribute(string0: string, object1: any): void;
								public _namespace(string0: string, boolean1: boolean): void;
								public _element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public list(): com.sun.xml.bind.v2.schemagen.xmlschema.List;
								public _element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _namespace(string0: string): void;
								public _final(strings0: native.Array<string>): com.sun.xml.bind.v2.schemagen.xmlschema.SimpleType;
								public commit(boolean0: boolean): void;
								public block(): void;
								public getDocument(): com.sun.xml.txw2.Document;
								public _attribute(string0: string, string1: string, object2: any): void;
								public name(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.SimpleType;
								public restriction(): com.sun.xml.bind.v2.schemagen.xmlschema.SimpleRestriction;
								public commit(): void;
								public _attribute(qName0: javax.xml.namespace.QName, object1: any): void;
								public _element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public annotation(): com.sun.xml.bind.v2.schemagen.xmlschema.Annotation;
								public _cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public union(): com.sun.xml.bind.v2.schemagen.xmlschema.Union;
								public _namespace(string0: string, string1: string): void;
								public _cdata(object0: any): void;
								public id(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Annotated;
								public _pcdata(object0: any): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module schemagen {
						export module xmlschema {
							export class SimpleTypeHost extends java.lang.Object implements com.sun.xml.bind.v2.schemagen.xmlschema.TypeHost, com.sun.xml.txw2.TypedXmlWriter {
								public static class: java.lang.Class<com.sun.xml.bind.v2.schemagen.xmlschema.SimpleTypeHost>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.schemagen.xmlschema.SimpleTypeHost interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									simpleType(): com.sun.xml.bind.v2.schemagen.xmlschema.SimpleType;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								});
								public constructor();
								public commit(): void;
								public _attribute(qName0: javax.xml.namespace.QName, object1: any): void;
								public _element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _comment(object0: any): void;
								public _attribute(string0: string, object1: any): void;
								public _cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _namespace(string0: string, string1: string): void;
								public _namespace(string0: string, boolean1: boolean): void;
								public _element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _namespace(string0: string): void;
								public commit(boolean0: boolean): void;
								public block(): void;
								public _cdata(object0: any): void;
								public simpleType(): com.sun.xml.bind.v2.schemagen.xmlschema.SimpleType;
								public getDocument(): com.sun.xml.txw2.Document;
								public _pcdata(object0: any): void;
								public _attribute(string0: string, string1: string, object2: any): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module schemagen {
						export module xmlschema {
							export class TopLevelAttribute extends java.lang.Object implements com.sun.xml.bind.v2.schemagen.xmlschema.Annotated, com.sun.xml.bind.v2.schemagen.xmlschema.AttributeType, com.sun.xml.bind.v2.schemagen.xmlschema.FixedOrDefault, com.sun.xml.txw2.TypedXmlWriter {
								public static class: java.lang.Class<com.sun.xml.bind.v2.schemagen.xmlschema.TopLevelAttribute>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.schemagen.xmlschema.TopLevelAttribute interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									name(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.TopLevelAttribute;
									annotation(): com.sun.xml.bind.v2.schemagen.xmlschema.Annotation;
									id(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Annotated;
									type(qName0: javax.xml.namespace.QName): com.sun.xml.bind.v2.schemagen.xmlschema.AttributeType;
									_default(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.FixedOrDefault;
									fixed(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.FixedOrDefault;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									simpleType(): com.sun.xml.bind.v2.schemagen.xmlschema.SimpleType;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								});
								public constructor();
								public fixed(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.FixedOrDefault;
								public _comment(object0: any): void;
								public name(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.TopLevelAttribute;
								public _default(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.FixedOrDefault;
								public _attribute(string0: string, object1: any): void;
								public _namespace(string0: string, boolean1: boolean): void;
								public _element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _namespace(string0: string): void;
								public commit(boolean0: boolean): void;
								public block(): void;
								public getDocument(): com.sun.xml.txw2.Document;
								public _attribute(string0: string, string1: string, object2: any): void;
								public type(qName0: javax.xml.namespace.QName): com.sun.xml.bind.v2.schemagen.xmlschema.AttributeType;
								public commit(): void;
								public _attribute(qName0: javax.xml.namespace.QName, object1: any): void;
								public _element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public annotation(): com.sun.xml.bind.v2.schemagen.xmlschema.Annotation;
								public _cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _namespace(string0: string, string1: string): void;
								public _cdata(object0: any): void;
								public id(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Annotated;
								public simpleType(): com.sun.xml.bind.v2.schemagen.xmlschema.SimpleType;
								public _pcdata(object0: any): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module schemagen {
						export module xmlschema {
							export class TopLevelElement extends java.lang.Object implements com.sun.xml.bind.v2.schemagen.xmlschema.Element, com.sun.xml.txw2.TypedXmlWriter {
								public static class: java.lang.Class<com.sun.xml.bind.v2.schemagen.xmlschema.TopLevelElement>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.schemagen.xmlschema.TopLevelElement interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									_final(strings0: native.Array<string>): com.sun.xml.bind.v2.schemagen.xmlschema.TopLevelElement;
									_final(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.TopLevelElement;
									_abstract(boolean0: boolean): com.sun.xml.bind.v2.schemagen.xmlschema.TopLevelElement;
									substitutionGroup(qName0: javax.xml.namespace.QName): com.sun.xml.bind.v2.schemagen.xmlschema.TopLevelElement;
									name(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.TopLevelElement;
									type(qName0: javax.xml.namespace.QName): com.sun.xml.bind.v2.schemagen.xmlschema.Element;
									block(strings0: native.Array<string>): com.sun.xml.bind.v2.schemagen.xmlschema.Element;
									block(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Element;
									nillable(boolean0: boolean): com.sun.xml.bind.v2.schemagen.xmlschema.Element;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									annotation(): com.sun.xml.bind.v2.schemagen.xmlschema.Annotation;
									id(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Annotated;
									complexType(): com.sun.xml.bind.v2.schemagen.xmlschema.ComplexType;
									_default(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.FixedOrDefault;
									fixed(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.FixedOrDefault;
									simpleType(): com.sun.xml.bind.v2.schemagen.xmlschema.SimpleType;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								});
								public constructor();
								public fixed(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.FixedOrDefault;
								public _comment(object0: any): void;
								public _default(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.FixedOrDefault;
								public _attribute(string0: string, object1: any): void;
								public _namespace(string0: string, boolean1: boolean): void;
								public _element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _namespace(string0: string): void;
								public commit(boolean0: boolean): void;
								public block(): void;
								public getDocument(): com.sun.xml.txw2.Document;
								public _attribute(string0: string, string1: string, object2: any): void;
								public substitutionGroup(qName0: javax.xml.namespace.QName): com.sun.xml.bind.v2.schemagen.xmlschema.TopLevelElement;
								public commit(): void;
								public _attribute(qName0: javax.xml.namespace.QName, object1: any): void;
								public _element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public annotation(): com.sun.xml.bind.v2.schemagen.xmlschema.Annotation;
								public _cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public block(strings0: native.Array<string>): com.sun.xml.bind.v2.schemagen.xmlschema.Element;
								public _namespace(string0: string, string1: string): void;
								public block(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Element;
								public _final(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.TopLevelElement;
								public complexType(): com.sun.xml.bind.v2.schemagen.xmlschema.ComplexType;
								public nillable(boolean0: boolean): com.sun.xml.bind.v2.schemagen.xmlschema.Element;
								public _abstract(boolean0: boolean): com.sun.xml.bind.v2.schemagen.xmlschema.TopLevelElement;
								public _cdata(object0: any): void;
								public id(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Annotated;
								public simpleType(): com.sun.xml.bind.v2.schemagen.xmlschema.SimpleType;
								public name(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.TopLevelElement;
								public _pcdata(object0: any): void;
								public _final(strings0: native.Array<string>): com.sun.xml.bind.v2.schemagen.xmlschema.TopLevelElement;
								public type(qName0: javax.xml.namespace.QName): com.sun.xml.bind.v2.schemagen.xmlschema.Element;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module schemagen {
						export module xmlschema {
							export class TypeDefParticle extends java.lang.Object implements com.sun.xml.txw2.TypedXmlWriter {
								public static class: java.lang.Class<com.sun.xml.bind.v2.schemagen.xmlschema.TypeDefParticle>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.schemagen.xmlschema.TypeDefParticle interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									all(): com.sun.xml.bind.v2.schemagen.xmlschema.ExplicitGroup;
									sequence(): com.sun.xml.bind.v2.schemagen.xmlschema.ExplicitGroup;
									choice(): com.sun.xml.bind.v2.schemagen.xmlschema.ExplicitGroup;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								});
								public constructor();
								public choice(): com.sun.xml.bind.v2.schemagen.xmlschema.ExplicitGroup;
								public commit(): void;
								public _attribute(qName0: javax.xml.namespace.QName, object1: any): void;
								public _element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _comment(object0: any): void;
								public _attribute(string0: string, object1: any): void;
								public _cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _namespace(string0: string, string1: string): void;
								public _namespace(string0: string, boolean1: boolean): void;
								public _element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public sequence(): com.sun.xml.bind.v2.schemagen.xmlschema.ExplicitGroup;
								public _element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _namespace(string0: string): void;
								public all(): com.sun.xml.bind.v2.schemagen.xmlschema.ExplicitGroup;
								public commit(boolean0: boolean): void;
								public block(): void;
								public _cdata(object0: any): void;
								public getDocument(): com.sun.xml.txw2.Document;
								public _pcdata(object0: any): void;
								public _attribute(string0: string, string1: string, object2: any): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module schemagen {
						export module xmlschema {
							export class TypeHost extends java.lang.Object implements com.sun.xml.txw2.TypedXmlWriter {
								public static class: java.lang.Class<com.sun.xml.bind.v2.schemagen.xmlschema.TypeHost>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.schemagen.xmlschema.TypeHost interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								});
								public constructor();
								public commit(): void;
								public _attribute(qName0: javax.xml.namespace.QName, object1: any): void;
								public _element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _comment(object0: any): void;
								public _attribute(string0: string, object1: any): void;
								public _cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _namespace(string0: string, string1: string): void;
								public _namespace(string0: string, boolean1: boolean): void;
								public _element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _namespace(string0: string): void;
								public commit(boolean0: boolean): void;
								public block(): void;
								public _cdata(object0: any): void;
								public getDocument(): com.sun.xml.txw2.Document;
								public _pcdata(object0: any): void;
								public _attribute(string0: string, string1: string, object2: any): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module schemagen {
						export module xmlschema {
							export class Union extends java.lang.Object implements com.sun.xml.bind.v2.schemagen.xmlschema.Annotated, com.sun.xml.bind.v2.schemagen.xmlschema.SimpleTypeHost, com.sun.xml.txw2.TypedXmlWriter {
								public static class: java.lang.Class<com.sun.xml.bind.v2.schemagen.xmlschema.Union>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.schemagen.xmlschema.Union interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									memberTypes(qNames0: native.Array<javax.xml.namespace.QName>): com.sun.xml.bind.v2.schemagen.xmlschema.Union;
									annotation(): com.sun.xml.bind.v2.schemagen.xmlschema.Annotation;
									id(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Annotated;
									simpleType(): com.sun.xml.bind.v2.schemagen.xmlschema.SimpleType;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								});
								public constructor();
								public commit(): void;
								public _attribute(qName0: javax.xml.namespace.QName, object1: any): void;
								public _element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public annotation(): com.sun.xml.bind.v2.schemagen.xmlschema.Annotation;
								public _comment(object0: any): void;
								public memberTypes(qNames0: native.Array<javax.xml.namespace.QName>): com.sun.xml.bind.v2.schemagen.xmlschema.Union;
								public _attribute(string0: string, object1: any): void;
								public _cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _namespace(string0: string, string1: string): void;
								public _namespace(string0: string, boolean1: boolean): void;
								public _element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _namespace(string0: string): void;
								public commit(boolean0: boolean): void;
								public block(): void;
								public _cdata(object0: any): void;
								public id(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Annotated;
								public simpleType(): com.sun.xml.bind.v2.schemagen.xmlschema.SimpleType;
								public getDocument(): com.sun.xml.txw2.Document;
								public _pcdata(object0: any): void;
								public _attribute(string0: string, string1: string, object2: any): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module schemagen {
						export module xmlschema {
							export class Wildcard extends java.lang.Object implements com.sun.xml.bind.v2.schemagen.xmlschema.Annotated, com.sun.xml.txw2.TypedXmlWriter {
								public static class: java.lang.Class<com.sun.xml.bind.v2.schemagen.xmlschema.Wildcard>;
								/**
								 * Constructs a new instance of the com.sun.xml.bind.v2.schemagen.xmlschema.Wildcard interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									processContents(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Wildcard;
									namespace(strings0: native.Array<string>): com.sun.xml.bind.v2.schemagen.xmlschema.Wildcard;
									namespace(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Wildcard;
									annotation(): com.sun.xml.bind.v2.schemagen.xmlschema.Annotation;
									id(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Annotated;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									commit(): void;
									commit(boolean0: boolean): void;
									block(): void;
									getDocument(): com.sun.xml.txw2.Document;
									_attribute(string0: string, object1: any): void;
									_attribute(string0: string, string1: string, object2: any): void;
									_attribute(qName0: javax.xml.namespace.QName, object1: any): void;
									_namespace(string0: string): void;
									_namespace(string0: string, string1: string): void;
									_namespace(string0: string, boolean1: boolean): void;
									_pcdata(object0: any): void;
									_cdata(object0: any): void;
									_comment(object0: any): void;
									_element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
									_cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								});
								public constructor();
								public namespace(strings0: native.Array<string>): com.sun.xml.bind.v2.schemagen.xmlschema.Wildcard;
								public commit(): void;
								public _attribute(qName0: javax.xml.namespace.QName, object1: any): void;
								public _element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public annotation(): com.sun.xml.bind.v2.schemagen.xmlschema.Annotation;
								public _comment(object0: any): void;
								public _attribute(string0: string, object1: any): void;
								public _cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _namespace(string0: string, string1: string): void;
								public _namespace(string0: string, boolean1: boolean): void;
								public _element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
								public _namespace(string0: string): void;
								public processContents(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Wildcard;
								public namespace(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Wildcard;
								public commit(boolean0: boolean): void;
								public block(): void;
								public _cdata(object0: any): void;
								public id(string0: string): com.sun.xml.bind.v2.schemagen.xmlschema.Annotated;
								public getDocument(): com.sun.xml.txw2.Document;
								public _pcdata(object0: any): void;
								public _attribute(string0: string, string1: string, object2: any): void;
							}
						}
					}
				}
			}
		}
	}
}


declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module util {
						export class ByteArrayOutputStreamEx extends java.io.ByteArrayOutputStream {
							public static class: java.lang.Class<com.sun.xml.bind.v2.util.ByteArrayOutputStreamEx>;
							public constructor();
							public close(): void;
							public constructor(size: number);
							public set(dt: com.sun.xml.bind.v2.runtime.unmarshaller.Base64Data, mimeType: string): void;
							public getBuffer(): native.Array<number>;
							public readFrom(is: java.io.InputStream): void;
							public flush(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module util {
						export class CollisionCheckStack<E>  extends java.util.AbstractList<any> {
							public static class: java.lang.Class<com.sun.xml.bind.v2.util.CollisionCheckStack<any>>;
							public findDuplicate(o: any): boolean;
							public size(): number;
							public add(index: number, element: any): void;
							public lastIndexOf(o: any): number;
							public hashCode(): number;
							public spliterator(): java.util.Spliterator<any>;
							public retainAll(c: java.util.Collection<any>): boolean;
							public toArray(): native.Array<any>;
							public add(e: any): boolean;
							public push(o: any): boolean;
							public getUseIdentity(): boolean;
							public peek(): any;
							public listIterator(): java.util.ListIterator<any>;
							public stream(): java.util.stream.Stream<any>;
							public listIterator(index: number): java.util.ListIterator<any>;
							public reset(): void;
							public setUseIdentity(useIdentity: boolean): void;
							public replaceAll(operator: any /* any*/): void;
							public get(index: number): any;
							public getCycleString(): string;
							public getLatestPushResult(): boolean;
							public equals(o: any): boolean;
							public subList(fromIndex: number, toIndex: number): java.util.List<any>;
							public toArray(a: native.Array<any>): native.Array<any>;
							public indexOf(o: any): number;
							public constructor();
							public iterator(): java.util.Iterator<any>;
							public get(int0: number): any;
							public contains(o: any): boolean;
							public pushNocheck(o: any): void;
							public containsAll(c: java.util.Collection<any>): boolean;
							public clear(): void;
							public addAll(c: java.util.Collection<any>): boolean;
							public remove(o: any): boolean;
							public addAll(index: number, c: java.util.Collection<any>): boolean;
							public set(index: number, element: any): any;
							public removeAll(c: java.util.Collection<any>): boolean;
							public sort(c: java.util.Comparator<any>): void;
							public removeIf(filter: any /* any*/): boolean;
							public pop(): any;
							public isEmpty(): boolean;
							public remove(index: number): any;
							public parallelStream(): java.util.stream.Stream<any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module util {
						export class DataSourceSource extends javax.xml.transform.stream.StreamSource {
							public static class: java.lang.Class<com.sun.xml.bind.v2.util.DataSourceSource>;
							public constructor();
							public constructor(inputStream: java.io.InputStream);
							public getInputStream(): java.io.InputStream;
							public setSystemId(f: java.io.File): void;
							public constructor(reader: java.io.Reader);
							public constructor(dh: javax.activation.DataHandler);
							public constructor(source: javax.activation.DataSource);
							public getSystemId(): string;
							public constructor(reader: java.io.Reader, systemId: string);
							public constructor(systemId: string);
							public getDataSource(): javax.activation.DataSource;
							public setReader(reader: java.io.Reader): void;
							public setInputStream(inputStream: java.io.InputStream): void;
							public getReader(): java.io.Reader;
							public constructor(inputStream: java.io.InputStream, systemId: string);
							public constructor(f: java.io.File);
							public setSystemId(systemId: string): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module util {
						export class EditDistance extends java.lang.Object {
							public static class: java.lang.Class<com.sun.xml.bind.v2.util.EditDistance>;
							public static editDistance(a: string, b: string): number;
							public static findNearest(key: string, group: java.util.Collection<string>): string;
							public static findNearest(key: string, group: native.Array<string>): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module util {
						export class FatalAdapter extends java.lang.Object implements org.xml.sax.ErrorHandler {
							public static class: java.lang.Class<com.sun.xml.bind.v2.util.FatalAdapter>;
							public warning(exception: org.xml.sax.SAXParseException): void;
							public fatalError(exception: org.xml.sax.SAXParseException): void;
							public error(exception: org.xml.sax.SAXParseException): void;
							public constructor(handler: org.xml.sax.ErrorHandler);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module util {
						export class FlattenIterator<T>  extends java.util.Iterator<any> {
							public static class: java.lang.Class<com.sun.xml.bind.v2.util.FlattenIterator<any>>;
							public remove(): void;
							public hasNext(): boolean;
							public constructor(core: java.lang.Iterable<any>);
							public next(): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module util {
						export class QNameMap<V>  extends java.lang.Object {
							public static class: java.lang.Class<com.sun.xml.bind.v2.util.QNameMap<any>>;
							public constructor();
							public size(): number;
							public get(name: javax.xml.namespace.QName): V;
							public toString(): string;
							public entrySet(): java.util.Set<com.sun.xml.bind.v2.util.QNameMap.Entry<V>>;
							public put(name: javax.xml.namespace.QName, value: V): void;
							public keySet(): java.util.Collection<javax.xml.namespace.QName>;
							public getOne(): com.sun.xml.bind.v2.util.QNameMap.Entry<V>;
							public putAll(map: com.sun.xml.bind.v2.util.QNameMap<any>): com.sun.xml.bind.v2.util.QNameMap<V>;
							public put(namespaceUri: string, localname: string, value: V): void;
							public put(name: com.sun.xml.bind.v2.runtime.Name, value: V): void;
							public containsKey(nsUri: string, localName: string): boolean;
							public isEmpty(): boolean;
							public get(nsUri: string, localPart: string): V;
						}
						export module QNameMap {
							export class Entry<V>  extends java.lang.Object {
								public static class: java.lang.Class<com.sun.xml.bind.v2.util.QNameMap.Entry<any>>;
								public nsUri: string;
								public localName: string;
								public toString(): string;
								public setValue(newValue: V): V;
								public equals(obj: any): boolean;
								public createQName(): javax.xml.namespace.QName;
								public equals(o: any): boolean;
								public getValue(): V;
								public hashCode(): number;
							}
							export class EntryIterator extends com.sun.xml.bind.v2.util.QNameMap.HashIterator<com.sun.xml.bind.v2.util.QNameMap.Entry<any>> {
								public static class: java.lang.Class<com.sun.xml.bind.v2.util.QNameMap.EntryIterator>;
								public next(): com.sun.xml.bind.v2.util.QNameMap.Entry<any>;
							}
							export class EntrySet extends java.util.AbstractSet<com.sun.xml.bind.v2.util.QNameMap.Entry<any>> {
								public static class: java.lang.Class<com.sun.xml.bind.v2.util.QNameMap.EntrySet>;
								public toArray(): native.Array<any>;
								public size(): number;
								public removeAll(c: java.util.Collection<any>): boolean;
								public parallelStream(): java.util.stream.Stream<any>;
								public addAll(c: java.util.Collection<any>): boolean;
								public iterator(): java.util.Iterator<com.sun.xml.bind.v2.util.QNameMap.Entry<any>>;
								public retainAll(c: java.util.Collection<any>): boolean;
								public equals(o: any): boolean;
								public contains(o: any): boolean;
								public toArray(a: native.Array<any>): native.Array<any>;
								public removeIf(filter: any /* any*/): boolean;
								public containsAll(c: java.util.Collection<any>): boolean;
								public clear(): void;
								public isEmpty(): boolean;
								public spliterator(): java.util.Spliterator<any>;
								public iterator(): java.util.Iterator<any>;
								public remove(o: any): boolean;
								public add(e: any): boolean;
								public hashCode(): number;
								public stream(): java.util.stream.Stream<any>;
							}
							export abstract class HashIterator<E>  extends java.util.Iterator<any> {
								public static class: java.lang.Class<com.sun.xml.bind.v2.util.QNameMap.HashIterator<any>>;
								public hasNext(): boolean;
								public remove(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module util {
						export class StackRecorder extends java.lang.Throwable {
							public static class: java.lang.Class<com.sun.xml.bind.v2.util.StackRecorder>;
							public constructor();
							public constructor(message: string, cause: java.lang.Throwable);
							public constructor(cause: java.lang.Throwable);
							public constructor(message: string);
							public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module util {
						export class TypeCast extends java.lang.Object {
							public static class: java.lang.Class<com.sun.xml.bind.v2.util.TypeCast>;
							public constructor();
							public static checkedCast(m: java.util.Map<any,any>, keyType: java.lang.Class<any>, valueType: java.lang.Class<any>): java.util.Map<any,any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module bind {
				export module v2 {
					export module util {
						export class XmlFactory extends java.lang.Object {
							public static class: java.lang.Class<com.sun.xml.bind.v2.util.XmlFactory>;
							public static ACCESS_EXTERNAL_SCHEMA: string;
							public static ACCESS_EXTERNAL_DTD: string;
							public constructor();
							public static createDocumentBuilderFactory(disableSecureProcessing: boolean): javax.xml.parsers.DocumentBuilderFactory;
							public static createParserFactory(disableSecureProcessing: boolean): javax.xml.parsers.SAXParserFactory;
							public static createXPathFactory(disableSecureProcessing: boolean): javax.xml.xpath.XPathFactory;
							public static createSchemaFactory(language: string, disableSecureProcessing: boolean): javax.xml.validation.SchemaFactory;
							public static allowExternalDTDAccess(sf: javax.xml.validation.SchemaFactory, value: string, disableSecureProcessing: boolean): javax.xml.validation.SchemaFactory;
							public static createTransformerFactory(disableSecureProcessing: boolean): javax.xml.transform.TransformerFactory;
							public static allowExternalAccess(sf: javax.xml.validation.SchemaFactory, value: string, disableSecureProcessing: boolean): javax.xml.validation.SchemaFactory;
						}
					}
				}
			}
		}
	}
}

export class ModuleInfo extends java.lang.Object {
	public static class: java.lang.Class<ModuleInfo>;
}

//Generics information:
//com.sun.xml.bind.api.Bridge:1
//com.sun.xml.bind.api.RawAccessor:2
//com.sun.xml.bind.unmarshaller.InfosetScanner:1
//com.sun.xml.bind.v2.model.annotation.AbstractInlineAnnotationReaderImpl:4
//com.sun.xml.bind.v2.model.annotation.AnnotationReader:4
//com.sun.xml.bind.v2.model.annotation.ClassLocatable:1
//com.sun.xml.bind.v2.model.annotation.FieldLocatable:1
//com.sun.xml.bind.v2.model.annotation.MethodLocatable:1
//com.sun.xml.bind.v2.model.core.Adapter:2
//com.sun.xml.bind.v2.model.core.ArrayInfo:2
//com.sun.xml.bind.v2.model.core.AttributePropertyInfo:2
//com.sun.xml.bind.v2.model.core.BuiltinLeafInfo:2
//com.sun.xml.bind.v2.model.core.ClassInfo:2
//com.sun.xml.bind.v2.model.core.Element:2
//com.sun.xml.bind.v2.model.core.ElementInfo:2
//com.sun.xml.bind.v2.model.core.ElementPropertyInfo:2
//com.sun.xml.bind.v2.model.core.EnumConstant:2
//com.sun.xml.bind.v2.model.core.EnumLeafInfo:2
//com.sun.xml.bind.v2.model.core.LeafInfo:2
//com.sun.xml.bind.v2.model.core.MapPropertyInfo:2
//com.sun.xml.bind.v2.model.core.MaybeElement:2
//com.sun.xml.bind.v2.model.core.NonElement:2
//com.sun.xml.bind.v2.model.core.NonElementRef:2
//com.sun.xml.bind.v2.model.core.PropertyInfo:2
//com.sun.xml.bind.v2.model.core.Ref:2
//com.sun.xml.bind.v2.model.core.ReferencePropertyInfo:2
//com.sun.xml.bind.v2.model.core.RegistryInfo:2
//com.sun.xml.bind.v2.model.core.TypeInfo:2
//com.sun.xml.bind.v2.model.core.TypeInfoSet:4
//com.sun.xml.bind.v2.model.core.TypeRef:2
//com.sun.xml.bind.v2.model.core.ValuePropertyInfo:2
//com.sun.xml.bind.v2.model.core.WildcardTypeInfo:2
//com.sun.xml.bind.v2.model.impl.AnyTypeImpl:2
//com.sun.xml.bind.v2.model.impl.ArrayInfoImpl:4
//com.sun.xml.bind.v2.model.impl.AttributePropertyInfoImpl:4
//com.sun.xml.bind.v2.model.impl.BuiltinLeafInfoImpl:2
//com.sun.xml.bind.v2.model.impl.ClassInfoImpl:4
//com.sun.xml.bind.v2.model.impl.DummyPropertyInfo:4
//com.sun.xml.bind.v2.model.impl.ERPropertyInfoImpl:4
//com.sun.xml.bind.v2.model.impl.ElementInfoImpl:4
//com.sun.xml.bind.v2.model.impl.ElementPropertyInfoImpl:4
//com.sun.xml.bind.v2.model.impl.EnumConstantImpl:4
//com.sun.xml.bind.v2.model.impl.EnumLeafInfoImpl:4
//com.sun.xml.bind.v2.model.impl.FieldPropertySeed:4
//com.sun.xml.bind.v2.model.impl.GetterSetterPropertySeed:4
//com.sun.xml.bind.v2.model.impl.LeafInfoImpl:2
//com.sun.xml.bind.v2.model.impl.MapPropertyInfoImpl:4
//com.sun.xml.bind.v2.model.impl.ModelBuilder:4
//com.sun.xml.bind.v2.model.impl.ModelBuilderI:4
//com.sun.xml.bind.v2.model.impl.PropertyInfoImpl:4
//com.sun.xml.bind.v2.model.impl.PropertySeed:4
//com.sun.xml.bind.v2.model.impl.ReferencePropertyInfoImpl:4
//com.sun.xml.bind.v2.model.impl.RegistryInfoImpl:4
//com.sun.xml.bind.v2.model.impl.RuntimeBuiltinLeafInfoImpl:1
//com.sun.xml.bind.v2.model.impl.RuntimeBuiltinLeafInfoImpl.PcdataImpl:1
//com.sun.xml.bind.v2.model.impl.RuntimeBuiltinLeafInfoImpl.StringImpl:1
//com.sun.xml.bind.v2.model.impl.RuntimeClassInfoImpl.TransducerImpl:1
//com.sun.xml.bind.v2.model.impl.RuntimeEnumLeafInfoImpl:2
//com.sun.xml.bind.v2.model.impl.RuntimeModelBuilder.IDTransducerImpl:1
//com.sun.xml.bind.v2.model.impl.SingleTypePropertyInfoImpl:4
//com.sun.xml.bind.v2.model.impl.TypeInfoImpl:4
//com.sun.xml.bind.v2.model.impl.TypeInfoSetImpl:4
//com.sun.xml.bind.v2.model.impl.TypeRefImpl:2
//com.sun.xml.bind.v2.model.impl.ValuePropertyInfoImpl:4
//com.sun.xml.bind.v2.model.nav.Navigator:4
//com.sun.xml.bind.v2.model.nav.TypeVisitor:2
//com.sun.xml.bind.v2.runtime.AssociationMap:1
//com.sun.xml.bind.v2.runtime.AssociationMap.Entry:1
//com.sun.xml.bind.v2.runtime.AttributeAccessor:1
//com.sun.xml.bind.v2.runtime.BinderImpl:1
//com.sun.xml.bind.v2.runtime.BridgeAdapter:2
//com.sun.xml.bind.v2.runtime.BridgeImpl:1
//com.sun.xml.bind.v2.runtime.ClassBeanInfoImpl:1
//com.sun.xml.bind.v2.runtime.FilterTransducer:1
//com.sun.xml.bind.v2.runtime.InlineBinaryTransducer:1
//com.sun.xml.bind.v2.runtime.InternalBridge:1
//com.sun.xml.bind.v2.runtime.JaxBeanInfo:1
//com.sun.xml.bind.v2.runtime.LeafBeanInfoImpl:1
//com.sun.xml.bind.v2.runtime.MimeTypedTransducer:1
//com.sun.xml.bind.v2.runtime.SchemaTypeTransducer:1
//com.sun.xml.bind.v2.runtime.Transducer:1
//com.sun.xml.bind.v2.runtime.property.ArrayERProperty:3
//com.sun.xml.bind.v2.runtime.property.ArrayElementLeafProperty:3
//com.sun.xml.bind.v2.runtime.property.ArrayElementNodeProperty:3
//com.sun.xml.bind.v2.runtime.property.ArrayElementProperty:3
//com.sun.xml.bind.v2.runtime.property.ArrayProperty:3
//com.sun.xml.bind.v2.runtime.property.ArrayReferenceNodeProperty:3
//com.sun.xml.bind.v2.runtime.property.AttributeProperty:1
//com.sun.xml.bind.v2.runtime.property.ListElementProperty:3
//com.sun.xml.bind.v2.runtime.property.Property:1
//com.sun.xml.bind.v2.runtime.property.PropertyImpl:1
//com.sun.xml.bind.v2.runtime.property.SingleElementLeafProperty:1
//com.sun.xml.bind.v2.runtime.property.SingleElementNodeProperty:2
//com.sun.xml.bind.v2.runtime.property.SingleMapNodeProperty:2
//com.sun.xml.bind.v2.runtime.property.SingleMapNodeProperty.Stack:1
//com.sun.xml.bind.v2.runtime.property.SingleReferenceNodeProperty:2
//com.sun.xml.bind.v2.runtime.property.ValueProperty:1
//com.sun.xml.bind.v2.runtime.reflect.Accessor:2
//com.sun.xml.bind.v2.runtime.reflect.Accessor.FieldReflection:2
//com.sun.xml.bind.v2.runtime.reflect.Accessor.GetterOnlyReflection:2
//com.sun.xml.bind.v2.runtime.reflect.Accessor.GetterSetterReflection:2
//com.sun.xml.bind.v2.runtime.reflect.Accessor.ReadOnlyFieldReflection:2
//com.sun.xml.bind.v2.runtime.reflect.Accessor.SetterOnlyReflection:2
//com.sun.xml.bind.v2.runtime.reflect.AdaptedAccessor:3
//com.sun.xml.bind.v2.runtime.reflect.AdaptedLister:5
//com.sun.xml.bind.v2.runtime.reflect.DefaultTransducedAccessor:1
//com.sun.xml.bind.v2.runtime.reflect.ListIterator:1
//com.sun.xml.bind.v2.runtime.reflect.ListTransducedAccessorImpl:4
//com.sun.xml.bind.v2.runtime.reflect.Lister:4
//com.sun.xml.bind.v2.runtime.reflect.Lister.ArrayLister:2
//com.sun.xml.bind.v2.runtime.reflect.Lister.CollectionLister:2
//com.sun.xml.bind.v2.runtime.reflect.Lister.IDREFS:2
//com.sun.xml.bind.v2.runtime.reflect.Lister.Pack:1
//com.sun.xml.bind.v2.runtime.reflect.NullSafeAccessor:3
//com.sun.xml.bind.v2.runtime.reflect.PrimitiveArrayListerBoolean:1
//com.sun.xml.bind.v2.runtime.reflect.PrimitiveArrayListerByte:1
//com.sun.xml.bind.v2.runtime.reflect.PrimitiveArrayListerCharacter:1
//com.sun.xml.bind.v2.runtime.reflect.PrimitiveArrayListerDouble:1
//com.sun.xml.bind.v2.runtime.reflect.PrimitiveArrayListerFloat:1
//com.sun.xml.bind.v2.runtime.reflect.PrimitiveArrayListerInteger:1
//com.sun.xml.bind.v2.runtime.reflect.PrimitiveArrayListerLong:1
//com.sun.xml.bind.v2.runtime.reflect.PrimitiveArrayListerShort:1
//com.sun.xml.bind.v2.runtime.reflect.TransducedAccessor:1
//com.sun.xml.bind.v2.runtime.reflect.TransducedAccessor.CompositeContextDependentTransducedAccessorImpl:2
//com.sun.xml.bind.v2.runtime.reflect.TransducedAccessor.CompositeTransducedAccessorImpl:2
//com.sun.xml.bind.v2.runtime.reflect.TransducedAccessor.IDREFTransducedAccessorImpl:2
//com.sun.xml.bind.v2.runtime.unmarshaller.DomLoader:1
//com.sun.xml.bind.v2.runtime.unmarshaller.Scope:4
//com.sun.xml.bind.v2.schemagen.MultiMap:2
//com.sun.xml.bind.v2.schemagen.XmlSchemaGenerator:4
//com.sun.xml.bind.v2.util.CollisionCheckStack:1
//com.sun.xml.bind.v2.util.FlattenIterator:1
//com.sun.xml.bind.v2.util.QNameMap:1
//com.sun.xml.bind.v2.util.QNameMap.Entry:1
//com.sun.xml.bind.v2.util.QNameMap.HashIterator:1

