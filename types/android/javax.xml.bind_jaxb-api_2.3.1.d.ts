declare module javax {
	export module xml {
		export module bind {
			export class ModuleUtil extends java.lang.Object {
				public static class: java.lang.Class<javax.xml.bind.ModuleUtil>;
				public static delegateAddOpensToImplModule(classs0: native.Array<java.lang.Class<any>>, class1: java.lang.Class<any>): void;
			}
		}
	}
}

declare module javax {
	export module xml {
		export module bind {
			export abstract class Binder<XmlNode>  extends java.lang.Object {
				public static class: java.lang.Class<javax.xml.bind.Binder<any>>;
				public getJAXBNode(object0: XmlNode): any;
				public getEventHandler(): javax.xml.bind.ValidationEventHandler;
				public getXMLNode(object0: any): XmlNode;
				public unmarshal(object0: any, class1: java.lang.Class<any>): javax.xml.bind.JAXBElement<any>;
				public unmarshal(object0: XmlNode): any;
				public getSchema(): javax.xml.validation.Schema;
				public updateXML(object0: any, object1: XmlNode): XmlNode;
				public constructor();
				public updateJAXB(object0: XmlNode): any;
				public getProperty(string0: string): any;
				public setProperty(string0: string, object1: any): void;
				public setSchema(schema0: javax.xml.validation.Schema): void;
				public marshal(object0: any, object1: XmlNode): void;
				public updateXML(object0: any): XmlNode;
				public setEventHandler(validationEventHandler0: javax.xml.bind.ValidationEventHandler): void;
			}
		}
	}
}

declare module javax {
	export module xml {
		export module bind {
			export class ContextFinder extends java.lang.Object {
				public static class: java.lang.Class<javax.xml.bind.ContextFinder>;
			}
		}
	}
}

declare module javax {
	export module xml {
		export module bind {
			export class DataBindingException extends java.lang.RuntimeException {
				public static class: java.lang.Class<javax.xml.bind.DataBindingException>;
				public constructor(cause: java.lang.Throwable);
				public constructor(message: string, cause: java.lang.Throwable);
				public constructor(message: string);
				public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
				public constructor();
			}
		}
	}
}

declare module javax {
	export module xml {
		export module bind {
			export class DatatypeConverter extends java.lang.Object {
				public static class: java.lang.Class<javax.xml.bind.DatatypeConverter>;
				public static parseInteger(lexicalXSDInteger: string): java.math.BigInteger;
				public static parseQName(lexicalXSDQName: string, nsc: javax.xml.namespace.NamespaceContext): javax.xml.namespace.QName;
				public static printFloat(val: number): string;
				public static parseDecimal(lexicalXSDDecimal: string): java.math.BigDecimal;
				public static printHexBinary(val: native.Array<number>): string;
				public static printString(val: string): string;
				public static parseTime(lexicalXSDTime: string): java.util.Calendar;
				public static parseFloat(lexicalXSDFloat: string): number;
				public static printAnySimpleType(val: string): string;
				public static parseHexBinary(lexicalXSDHexBinary: string): native.Array<number>;
				public static printTime(val: java.util.Calendar): string;
				public static parseInt(lexicalXSDInt: string): number;
				public static printDateTime(val: java.util.Calendar): string;
				public static parseDouble(lexicalXSDDouble: string): number;
				public static parseAnySimpleType(lexicalXSDAnySimpleType: string): string;
				public static parseBase64Binary(lexicalXSDBase64Binary: string): native.Array<number>;
				public static printQName(val: javax.xml.namespace.QName, nsc: javax.xml.namespace.NamespaceContext): string;
				public static printDecimal(val: java.math.BigDecimal): string;
				public static printBase64Binary(val: native.Array<number>): string;
				public static printDate(val: java.util.Calendar): string;
				public static parseDateTime(lexicalXSDDateTime: string): java.util.Calendar;
				public static parseUnsignedShort(lexicalXSDUnsignedShort: string): number;
				public static printBoolean(val: boolean): string;
				public static printInt(val: number): string;
				public static parseShort(lexicalXSDShort: string): number;
				public static printByte(val: number): string;
				public static printUnsignedInt(val: number): string;
				public static parseUnsignedInt(lexicalXSDUnsignedInt: string): number;
				public static parseBoolean(lexicalXSDBoolean: string): boolean;
				public static parseDate(lexicalXSDDate: string): java.util.Calendar;
				public static printShort(val: number): string;
				public static parseLong(lexicalXSDLong: string): number;
				public static printInteger(val: java.math.BigInteger): string;
				public static printDouble(val: number): string;
				public static setDatatypeConverter(converter: javax.xml.bind.DatatypeConverterInterface): void;
				public static printLong(val: number): string;
				public static parseString(lexicalXSDString: string): string;
				public static parseByte(lexicalXSDByte: string): number;
				public static printUnsignedShort(val: number): string;
			}
		}
	}
}

declare module javax {
	export module xml {
		export module bind {
			export class DatatypeConverterImpl extends java.lang.Object implements javax.xml.bind.DatatypeConverterInterface {
				public static class: java.lang.Class<javax.xml.bind.DatatypeConverterImpl>;
				public static theInstance: javax.xml.bind.DatatypeConverterInterface;
				public printInteger(val: java.math.BigInteger): string;
				public parseLong(lexicalXSLong: string): number;
				public static _printBoolean(val: boolean): string;
				public static _printDateTime(val: java.util.Calendar): string;
				public parseBoolean(lexicalXSDBoolean: string): boolean;
				public printBase64Binary(val: native.Array<number>): string;
				public static _parseBoolean(literal: string): java.lang.Boolean;
				public static _parseShort(s: string): number;
				public static _printShort(val: number): string;
				public static _printDouble(v: number): string;
				public parseInteger(lexicalXSDInteger: string): java.math.BigInteger;
				public static encode(i: number): string;
				public constructor();
				public static _parseDecimal(content: string): java.math.BigDecimal;
				public static _printDecimal(val: java.math.BigDecimal): string;
				public printString(val: string): string;
				public parseTime(lexicalXSDTime: string): java.util.Calendar;
				public printDateTime(val: java.util.Calendar): string;
				public printHexBinary(data: native.Array<number>): string;
				public printBoolean(val: boolean): string;
				public parseUnsignedInt(lexicalXSDUnsignedInt: string): number;
				public printDate(val: java.util.Calendar): string;
				public static _printBase64Binary(input: native.Array<number>, offset: number, len: number, out: native.Array<number>, ptr: number): number;
				public parseInt(s: string): number;
				public static _parseInteger(s: string): java.math.BigInteger;
				public printFloat(v: number): string;
				public static encodeByte(i: number): number;
				public static _parseByte(literal: string): number;
				public parseString(lexicalXSDString: string): string;
				public parseDateTime(lexicalXSDDateTime: string): java.util.Calendar;
				public parseShort(lexicalXSDShort: string): number;
				public static _printLong(val: number): string;
				public static installHook(s: string): string;
				public printQName(val: javax.xml.namespace.QName, nsc: javax.xml.namespace.NamespaceContext): string;
				public static _parseQName(text: string, nsc: javax.xml.namespace.NamespaceContext): javax.xml.namespace.QName;
				public static _parseDouble(_val: string): number;
				public static _parseFloat(_val: string): number;
				public printUnsignedInt(val: number): string;
				public printDecimal(val: java.math.BigDecimal): string;
				public static _printFloat(v: number): string;
				public static _printBase64Binary(input: native.Array<number>): string;
				public parseByte(lexicalXSDByte: string): number;
				public printUnsignedShort(val: number): string;
				public printShort(val: number): string;
				public parseDouble(lexicalXSDDouble: string): number;
				public parseHexBinary(s: string): native.Array<number>;
				public printLong(val: number): string;
				public static _printDate(val: java.util.Calendar): string;
				public static _printByte(val: number): string;
				public static _printInt(val: number): string;
				public static _parseDateTime(s: string): java.util.GregorianCalendar;
				public printTime(val: java.util.Calendar): string;
				public printAnySimpleType(val: string): string;
				public parseFloat(lexicalXSDFloat: string): number;
				public printInt(val: number): string;
				public parseDecimal(content: string): java.math.BigDecimal;
				public parseBase64Binary(lexicalXSDBase64Binary: string): native.Array<number>;
				public parseAnySimpleType(lexicalXSDAnySimpleType: string): string;
				public parseUnsignedShort(lexicalXSDUnsignedShort: string): number;
				public printByte(val: number): string;
				public static _parseBase64Binary(text: string): native.Array<number>;
				public static _printBase64Binary(input: native.Array<number>, offset: number, len: number, buf: native.Array<string>, ptr: number): number;
				public static _printBase64Binary(input: native.Array<number>, offset: number, len: number): string;
				public parseQName(lexicalXSDQName: string, nsc: javax.xml.namespace.NamespaceContext): javax.xml.namespace.QName;
				public static _printInteger(val: java.math.BigInteger): string;
				public static _parseInt(s: string): number;
				public static _parseLong(s: string): number;
				public parseDate(lexicalXSDDate: string): java.util.Calendar;
				public static _printQName(val: javax.xml.namespace.QName, nsc: javax.xml.namespace.NamespaceContext): string;
				public printDouble(v: number): string;
			}
			export module DatatypeConverterImpl {
				export class CalendarFormatter extends java.lang.Object {
					public static class: java.lang.Class<javax.xml.bind.DatatypeConverterImpl.CalendarFormatter>;
					public static doFormat(format: string, cal: java.util.Calendar): string;
				}
			}
		}
	}
}

declare module javax {
	export module xml {
		export module bind {
			export class DatatypeConverterInterface extends java.lang.Object {
				public static class: java.lang.Class<javax.xml.bind.DatatypeConverterInterface>;
				/**
				 * Constructs a new instance of the javax.xml.bind.DatatypeConverterInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					parseString(string0: string): string;
					parseInteger(string0: string): java.math.BigInteger;
					parseInt(string0: string): number;
					parseLong(string0: string): number;
					parseShort(string0: string): number;
					parseDecimal(string0: string): java.math.BigDecimal;
					parseFloat(string0: string): number;
					parseDouble(string0: string): number;
					parseBoolean(string0: string): boolean;
					parseByte(string0: string): number;
					parseQName(string0: string, namespaceContext1: javax.xml.namespace.NamespaceContext): javax.xml.namespace.QName;
					parseDateTime(string0: string): java.util.Calendar;
					parseBase64Binary(string0: string): native.Array<number>;
					parseHexBinary(string0: string): native.Array<number>;
					parseUnsignedInt(string0: string): number;
					parseUnsignedShort(string0: string): number;
					parseTime(string0: string): java.util.Calendar;
					parseDate(string0: string): java.util.Calendar;
					parseAnySimpleType(string0: string): string;
					printString(string0: string): string;
					printInteger(bigInteger0: java.math.BigInteger): string;
					printInt(int0: number): string;
					printLong(long0: number): string;
					printShort(short0: number): string;
					printDecimal(bigDecimal0: java.math.BigDecimal): string;
					printFloat(float0: number): string;
					printDouble(double0: number): string;
					printBoolean(boolean0: boolean): string;
					printByte(byte0: number): string;
					printQName(qName0: javax.xml.namespace.QName, namespaceContext1: javax.xml.namespace.NamespaceContext): string;
					printDateTime(calendar0: java.util.Calendar): string;
					printBase64Binary(bytes0: native.Array<number>): string;
					printHexBinary(bytes0: native.Array<number>): string;
					printUnsignedInt(long0: number): string;
					printUnsignedShort(int0: number): string;
					printTime(calendar0: java.util.Calendar): string;
					printDate(calendar0: java.util.Calendar): string;
					printAnySimpleType(string0: string): string;
				});
				public constructor();
				public printInt(int0: number): string;
				public parseQName(string0: string, namespaceContext1: javax.xml.namespace.NamespaceContext): javax.xml.namespace.QName;
				public printAnySimpleType(string0: string): string;
				public printBase64Binary(bytes0: native.Array<number>): string;
				public parseString(string0: string): string;
				public printDateTime(calendar0: java.util.Calendar): string;
				public parseDate(string0: string): java.util.Calendar;
				public printDecimal(bigDecimal0: java.math.BigDecimal): string;
				public printUnsignedShort(int0: number): string;
				public parseByte(string0: string): number;
				public parseBase64Binary(string0: string): native.Array<number>;
				public parseFloat(string0: string): number;
				public printInteger(bigInteger0: java.math.BigInteger): string;
				public printBoolean(boolean0: boolean): string;
				public printQName(qName0: javax.xml.namespace.QName, namespaceContext1: javax.xml.namespace.NamespaceContext): string;
				public parseUnsignedShort(string0: string): number;
				public parseAnySimpleType(string0: string): string;
				public printShort(short0: number): string;
				public printLong(long0: number): string;
				public parseDecimal(string0: string): java.math.BigDecimal;
				public parseHexBinary(string0: string): native.Array<number>;
				public printHexBinary(bytes0: native.Array<number>): string;
				public parseInt(string0: string): number;
				public parseLong(string0: string): number;
				public parseTime(string0: string): java.util.Calendar;
				public printTime(calendar0: java.util.Calendar): string;
				public parseBoolean(string0: string): boolean;
				public parseInteger(string0: string): java.math.BigInteger;
				public parseDateTime(string0: string): java.util.Calendar;
				public printDouble(double0: number): string;
				public parseDouble(string0: string): number;
				public printByte(byte0: number): string;
				public printDate(calendar0: java.util.Calendar): string;
				public parseShort(string0: string): number;
				public printString(string0: string): string;
				public printFloat(float0: number): string;
				public parseUnsignedInt(string0: string): number;
				public printUnsignedInt(long0: number): string;
			}
		}
	}
}

declare module javax {
	export module xml {
		export module bind {
			export class Element extends java.lang.Object {
				public static class: java.lang.Class<javax.xml.bind.Element>;
				/**
				 * Constructs a new instance of the javax.xml.bind.Element interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
				});
				public constructor();
			}
		}
	}
}

declare module javax {
	export module xml {
		export module bind {
			export class GetPropertyAction extends java.security.PrivilegedAction<string> {
				public static class: java.lang.Class<javax.xml.bind.GetPropertyAction>;
				public constructor(propertyName: string);
				public run(): any;
				public run(): string;
			}
		}
	}
}

declare module javax {
	export module xml {
		export module bind {
			export class JAXB extends java.lang.Object {
				public static class: java.lang.Class<javax.xml.bind.JAXB>;
				public static unmarshal(xml: java.net.URL, type: java.lang.Class<any>): any;
				public static unmarshal(xml: java.io.File, type: java.lang.Class<any>): any;
				public static unmarshal(xml: string, type: java.lang.Class<any>): any;
				public static marshal(jaxbObject: any, xml: java.net.URL): void;
				public static marshal(jaxbObject: any, xml: java.io.File): void;
				public static unmarshal(xml: java.io.Reader, type: java.lang.Class<any>): any;
				public static unmarshal(xml: javax.xml.transform.Source, type: java.lang.Class<any>): any;
				public static marshal(jaxbObject: any, xml: java.io.OutputStream): void;
				public static marshal(jaxbObject: any, xml: string): void;
				public static unmarshal(xml: java.net.URI, type: java.lang.Class<any>): any;
				public static marshal(jaxbObject: any, xml: javax.xml.transform.Result): void;
				public static unmarshal(xml: java.io.InputStream, type: java.lang.Class<any>): any;
				public static marshal(jaxbObject: any, xml: java.io.Writer): void;
				public static marshal(jaxbObject: any, xml: java.net.URI): void;
			}
			export module JAXB {
				export class Cache extends java.lang.Object {
					public static class: java.lang.Class<javax.xml.bind.JAXB.Cache>;
					public constructor(type: java.lang.Class<any>);
				}
			}
		}
	}
}

declare module javax {
	export module xml {
		export module bind {
			export abstract class JAXBContext extends java.lang.Object {
				public static class: java.lang.Class<javax.xml.bind.JAXBContext>;
				public static JAXB_CONTEXT_FACTORY: string;
				public static newInstance(contextPath: string, classLoader: java.lang.ClassLoader): javax.xml.bind.JAXBContext;
				public createBinder(domType: java.lang.Class<any>): javax.xml.bind.Binder<any>;
				public createUnmarshaller(): javax.xml.bind.Unmarshaller;
				public static newInstance(contextPath: string): javax.xml.bind.JAXBContext;
				/** @deprecated */
				public createValidator(): javax.xml.bind.Validator;
				public constructor();
				public createJAXBIntrospector(): javax.xml.bind.JAXBIntrospector;
				public generateSchema(outputResolver: javax.xml.bind.SchemaOutputResolver): void;
				public static newInstance(classesToBeBound: native.Array<java.lang.Class<any>>, properties: java.util.Map<string,any>): javax.xml.bind.JAXBContext;
				public static newInstance(contextPath: string, classLoader: java.lang.ClassLoader, properties: java.util.Map<string,any>): javax.xml.bind.JAXBContext;
				public static newInstance(classesToBeBound: native.Array<java.lang.Class<any>>): javax.xml.bind.JAXBContext;
				public createMarshaller(): javax.xml.bind.Marshaller;
				public createBinder(): javax.xml.bind.Binder<org.w3c.dom.Node>;
			}
		}
	}
}

declare module javax {
	export module xml {
		export module bind {
			export class JAXBContextFactory extends java.lang.Object {
				public static class: java.lang.Class<javax.xml.bind.JAXBContextFactory>;
				/**
				 * Constructs a new instance of the javax.xml.bind.JAXBContextFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					createContext(classs0: native.Array<java.lang.Class<any>>, map1: java.util.Map<string,any>): javax.xml.bind.JAXBContext;
					createContext(string0: string, classLoader1: java.lang.ClassLoader, map2: java.util.Map<string,any>): javax.xml.bind.JAXBContext;
				});
				public constructor();
				public createContext(string0: string, classLoader1: java.lang.ClassLoader, map2: java.util.Map<string,any>): javax.xml.bind.JAXBContext;
				public createContext(classs0: native.Array<java.lang.Class<any>>, map1: java.util.Map<string,any>): javax.xml.bind.JAXBContext;
			}
		}
	}
}

declare module javax {
	export module xml {
		export module bind {
			export class JAXBElement<T>  extends java.io.Serializable {
				public static class: java.lang.Class<javax.xml.bind.JAXBElement<any>>;
				public name: javax.xml.namespace.QName;
				public declaredType: java.lang.Class<any>;
				public scope: java.lang.Class<any>;
				public value: any;
				public nil: boolean;
				public constructor(name: javax.xml.namespace.QName, declaredType: java.lang.Class<any>, value: any);
				public constructor(name: javax.xml.namespace.QName, declaredType: java.lang.Class<any>, scope: java.lang.Class<any>, value: any);
				public getDeclaredType(): java.lang.Class<any>;
				public isNil(): boolean;
				public getName(): javax.xml.namespace.QName;
				public isTypeSubstituted(): boolean;
				public getScope(): java.lang.Class<any>;
				public setNil(value: boolean): void;
				public getValue(): any;
				public setValue(t: any): void;
				public isGlobalScope(): boolean;
			}
			export module JAXBElement {
				export class GlobalScope extends java.lang.Object {
					public static class: java.lang.Class<javax.xml.bind.JAXBElement.GlobalScope>;
					public constructor();
				}
			}
		}
	}
}

declare module javax {
	export module xml {
		export module bind {
			export class JAXBException extends java.lang.Exception {
				public static class: java.lang.Class<javax.xml.bind.JAXBException>;
				public getErrorCode(): string;
				public constructor(cause: java.lang.Throwable);
				public getLinkedException(): java.lang.Throwable;
				public constructor(message: string, cause: java.lang.Throwable);
				public constructor(message: string, errorCode: string, exception: java.lang.Throwable);
				public printStackTrace(s: java.io.PrintWriter): void;
				public constructor(message: string);
				public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
				public constructor(exception: java.lang.Throwable);
				public setLinkedException(exception: java.lang.Throwable): void;
				public toString(): string;
				public getCause(): java.lang.Throwable;
				public constructor(message: string, exception: java.lang.Throwable);
				public constructor();
				public constructor(message: string, errorCode: string);
				public printStackTrace(s: java.io.PrintStream): void;
				public printStackTrace(): void;
			}
		}
	}
}

declare module javax {
	export module xml {
		export module bind {
			export abstract class JAXBIntrospector extends java.lang.Object {
				public static class: java.lang.Class<javax.xml.bind.JAXBIntrospector>;
				public static getValue(jaxbElement: any): any;
				public isElement(object0: any): boolean;
				public getElementName(object0: any): javax.xml.namespace.QName;
				public constructor();
			}
		}
	}
}

declare module javax {
	export module xml {
		export module bind {
			export class JAXBPermission extends java.security.BasicPermission {
				public static class: java.lang.Class<javax.xml.bind.JAXBPermission>;
				public constructor(name: string);
				public checkGuard(object: any): void;
				public constructor(name: string, actions: string);
			}
		}
	}
}

declare module javax {
	export module xml {
		export module bind {
			export class MarshalException extends javax.xml.bind.JAXBException {
				public static class: java.lang.Class<javax.xml.bind.MarshalException>;
				public constructor(message: string, errorCode: string, exception: java.lang.Throwable);
				public constructor(message: string, errorCode: string);
				public constructor(message: string);
				public constructor(exception: java.lang.Throwable);
				public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
				public constructor(message: string, exception: java.lang.Throwable);
				public constructor();
			}
		}
	}
}

declare module javax {
	export module xml {
		export module bind {
			export class Marshaller extends java.lang.Object {
				public static class: java.lang.Class<javax.xml.bind.Marshaller>;
				/**
				 * Constructs a new instance of the javax.xml.bind.Marshaller interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					marshal(object0: any, result1: javax.xml.transform.Result): void;
					marshal(object0: any, outputStream1: java.io.OutputStream): void;
					marshal(object0: any, file1: java.io.File): void;
					marshal(object0: any, writer1: java.io.Writer): void;
					marshal(object0: any, contentHandler1: org.xml.sax.ContentHandler): void;
					marshal(object0: any, node1: org.w3c.dom.Node): void;
					marshal(object0: any, xMLStreamWriter1: javax.xml.stream.XMLStreamWriter): void;
					marshal(object0: any, xMLEventWriter1: javax.xml.stream.XMLEventWriter): void;
					getNode(object0: any): org.w3c.dom.Node;
					setProperty(string0: string, object1: any): void;
					getProperty(string0: string): any;
					setEventHandler(validationEventHandler0: javax.xml.bind.ValidationEventHandler): void;
					getEventHandler(): javax.xml.bind.ValidationEventHandler;
					setAdapter(xmlAdapter0: javax.xml.bind.annotation.adapters.XmlAdapter<any,any>): void;
					setAdapter(class0: java.lang.Class<any>, xmlAdapter1: javax.xml.bind.annotation.adapters.XmlAdapter<any,any>): void;
					getAdapter(class0: java.lang.Class<any>): javax.xml.bind.annotation.adapters.XmlAdapter<any,any>;
					setAttachmentMarshaller(attachmentMarshaller0: javax.xml.bind.attachment.AttachmentMarshaller): void;
					getAttachmentMarshaller(): javax.xml.bind.attachment.AttachmentMarshaller;
					setSchema(schema0: javax.xml.validation.Schema): void;
					getSchema(): javax.xml.validation.Schema;
					setListener(listener0: javax.xml.bind.Marshaller.Listener): void;
					getListener(): javax.xml.bind.Marshaller.Listener;
				});
				public constructor();
				public static JAXB_ENCODING: string;
				public static JAXB_FORMATTED_OUTPUT: string;
				public static JAXB_SCHEMA_LOCATION: string;
				public static JAXB_FRAGMENT: string;
				public static JAXB_NO_NAMESPACE_SCHEMA_LOCATION: string;
				public marshal(object0: any, file1: java.io.File): void;
				public marshal(object0: any, xMLStreamWriter1: javax.xml.stream.XMLStreamWriter): void;
				public getEventHandler(): javax.xml.bind.ValidationEventHandler;
				public setListener(listener0: javax.xml.bind.Marshaller.Listener): void;
				public setAdapter(class0: java.lang.Class<any>, xmlAdapter1: javax.xml.bind.annotation.adapters.XmlAdapter<any,any>): void;
				public marshal(object0: any, contentHandler1: org.xml.sax.ContentHandler): void;
				public marshal(object0: any, writer1: java.io.Writer): void;
				public marshal(object0: any, outputStream1: java.io.OutputStream): void;
				public marshal(object0: any, node1: org.w3c.dom.Node): void;
				public marshal(object0: any, xMLEventWriter1: javax.xml.stream.XMLEventWriter): void;
				public getSchema(): javax.xml.validation.Schema;
				public setAttachmentMarshaller(attachmentMarshaller0: javax.xml.bind.attachment.AttachmentMarshaller): void;
				public getProperty(string0: string): any;
				public getAttachmentMarshaller(): javax.xml.bind.attachment.AttachmentMarshaller;
				public setProperty(string0: string, object1: any): void;
				public getNode(object0: any): org.w3c.dom.Node;
				public setAdapter(xmlAdapter0: javax.xml.bind.annotation.adapters.XmlAdapter<any,any>): void;
				public marshal(object0: any, result1: javax.xml.transform.Result): void;
				public setSchema(schema0: javax.xml.validation.Schema): void;
				public getListener(): javax.xml.bind.Marshaller.Listener;
				public setEventHandler(validationEventHandler0: javax.xml.bind.ValidationEventHandler): void;
				public getAdapter(class0: java.lang.Class<any>): javax.xml.bind.annotation.adapters.XmlAdapter<any,any>;
			}
			export module Marshaller {
				export abstract class Listener extends java.lang.Object {
					public static class: java.lang.Class<javax.xml.bind.Marshaller.Listener>;
					public constructor();
					public beforeMarshal(source: any): void;
					public afterMarshal(source: any): void;
				}
			}
		}
	}
}

declare module javax {
	export module xml {
		export module bind {
			export class Messages extends java.lang.Object {
				public static class: java.lang.Class<javax.xml.bind.Messages>;
			}
		}
	}
}

declare module javax {
	export module xml {
		export module bind {
			export class ModuleUtil extends java.lang.Object {
				public static class: java.lang.Class<javax.xml.bind.ModuleUtil>;
			}
		}
	}
}

declare module javax {
	export module xml {
		export module bind {
			export class NotIdentifiableEvent extends java.lang.Object implements javax.xml.bind.ValidationEvent {
				public static class: java.lang.Class<javax.xml.bind.NotIdentifiableEvent>;
				/**
				 * Constructs a new instance of the javax.xml.bind.NotIdentifiableEvent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getSeverity(): number;
					getMessage(): string;
					getLinkedException(): java.lang.Throwable;
					getLocator(): javax.xml.bind.ValidationEventLocator;
				});
				public constructor();
				public static ERROR: number;
				public static WARNING: number;
				public static FATAL_ERROR: number;
				public getLinkedException(): java.lang.Throwable;
				public getLocator(): javax.xml.bind.ValidationEventLocator;
				public getSeverity(): number;
				public getMessage(): string;
			}
		}
	}
}

declare module javax {
	export module xml {
		export module bind {
			export class ParseConversionEvent extends java.lang.Object implements javax.xml.bind.ValidationEvent {
				public static class: java.lang.Class<javax.xml.bind.ParseConversionEvent>;
				/**
				 * Constructs a new instance of the javax.xml.bind.ParseConversionEvent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getSeverity(): number;
					getMessage(): string;
					getLinkedException(): java.lang.Throwable;
					getLocator(): javax.xml.bind.ValidationEventLocator;
				});
				public constructor();
				public static ERROR: number;
				public static WARNING: number;
				public static FATAL_ERROR: number;
				public getLinkedException(): java.lang.Throwable;
				public getLocator(): javax.xml.bind.ValidationEventLocator;
				public getSeverity(): number;
				public getMessage(): string;
			}
		}
	}
}

declare module javax {
	export module xml {
		export module bind {
			export class PrintConversionEvent extends java.lang.Object implements javax.xml.bind.ValidationEvent {
				public static class: java.lang.Class<javax.xml.bind.PrintConversionEvent>;
				/**
				 * Constructs a new instance of the javax.xml.bind.PrintConversionEvent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getSeverity(): number;
					getMessage(): string;
					getLinkedException(): java.lang.Throwable;
					getLocator(): javax.xml.bind.ValidationEventLocator;
				});
				public constructor();
				public static ERROR: number;
				public static WARNING: number;
				public static FATAL_ERROR: number;
				public getLinkedException(): java.lang.Throwable;
				public getLocator(): javax.xml.bind.ValidationEventLocator;
				public getSeverity(): number;
				public getMessage(): string;
			}
		}
	}
}

declare module javax {
	export module xml {
		export module bind {
			export class PropertyException extends javax.xml.bind.JAXBException {
				public static class: java.lang.Class<javax.xml.bind.PropertyException>;
				public constructor(message: string, errorCode: string, exception: java.lang.Throwable);
				public constructor(message: string, errorCode: string);
				public constructor(message: string);
				public constructor(exception: java.lang.Throwable);
				public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
				public constructor(name: string, value: any);
				public constructor(message: string, exception: java.lang.Throwable);
				public constructor();
			}
		}
	}
}

declare module javax {
	export module xml {
		export module bind {
			export abstract class SchemaOutputResolver extends java.lang.Object {
				public static class: java.lang.Class<javax.xml.bind.SchemaOutputResolver>;
				public createOutput(string0: string, string1: string): javax.xml.transform.Result;
				public constructor();
			}
		}
	}
}

declare module javax {
	export module xml {
		export module bind {
			export class ServiceLoaderUtil extends java.lang.Object {
				public static class: java.lang.Class<javax.xml.bind.ServiceLoaderUtil>;
			}
			export module ServiceLoaderUtil {
				export abstract class ExceptionHandler<T>  extends java.lang.Object {
					public static class: java.lang.Class<javax.xml.bind.ServiceLoaderUtil.ExceptionHandler<any>>;
					public createException(throwable0: java.lang.Throwable, string1: string): T;
				}
			}
		}
	}
}

declare module javax {
	export module xml {
		export module bind {
			export class TypeConstraintException extends java.lang.RuntimeException {
				public static class: java.lang.Class<javax.xml.bind.TypeConstraintException>;
				public getErrorCode(): string;
				public constructor(cause: java.lang.Throwable);
				public getLinkedException(): java.lang.Throwable;
				public constructor(message: string, cause: java.lang.Throwable);
				public constructor(message: string, errorCode: string, exception: java.lang.Throwable);
				public printStackTrace(s: java.io.PrintWriter): void;
				public constructor(message: string);
				public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
				public constructor(exception: java.lang.Throwable);
				public setLinkedException(exception: java.lang.Throwable): void;
				public toString(): string;
				public constructor(message: string, exception: java.lang.Throwable);
				public constructor();
				public constructor(message: string, errorCode: string);
				public printStackTrace(s: java.io.PrintStream): void;
				public printStackTrace(): void;
			}
		}
	}
}

declare module javax {
	export module xml {
		export module bind {
			export class UnmarshalException extends javax.xml.bind.JAXBException {
				public static class: java.lang.Class<javax.xml.bind.UnmarshalException>;
				public constructor(message: string, errorCode: string, exception: java.lang.Throwable);
				public constructor(message: string, errorCode: string);
				public constructor(message: string);
				public constructor(exception: java.lang.Throwable);
				public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
				public constructor(message: string, exception: java.lang.Throwable);
				public constructor();
			}
		}
	}
}

declare module javax {
	export module xml {
		export module bind {
			export class Unmarshaller extends java.lang.Object {
				public static class: java.lang.Class<javax.xml.bind.Unmarshaller>;
				/**
				 * Constructs a new instance of the javax.xml.bind.Unmarshaller interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					unmarshal(file0: java.io.File): any;
					unmarshal(inputStream0: java.io.InputStream): any;
					unmarshal(reader0: java.io.Reader): any;
					unmarshal(uRL0: java.net.URL): any;
					unmarshal(inputSource0: org.xml.sax.InputSource): any;
					unmarshal(node0: org.w3c.dom.Node): any;
					unmarshal(node0: org.w3c.dom.Node, class1: java.lang.Class<any>): javax.xml.bind.JAXBElement<any>;
					unmarshal(source0: javax.xml.transform.Source): any;
					unmarshal(source0: javax.xml.transform.Source, class1: java.lang.Class<any>): javax.xml.bind.JAXBElement<any>;
					unmarshal(xMLStreamReader0: javax.xml.stream.XMLStreamReader): any;
					unmarshal(xMLStreamReader0: javax.xml.stream.XMLStreamReader, class1: java.lang.Class<any>): javax.xml.bind.JAXBElement<any>;
					unmarshal(xMLEventReader0: javax.xml.stream.XMLEventReader): any;
					unmarshal(xMLEventReader0: javax.xml.stream.XMLEventReader, class1: java.lang.Class<any>): javax.xml.bind.JAXBElement<any>;
					getUnmarshallerHandler(): javax.xml.bind.UnmarshallerHandler;
					setValidating(boolean0: boolean): void;
					isValidating(): boolean;
					setEventHandler(validationEventHandler0: javax.xml.bind.ValidationEventHandler): void;
					getEventHandler(): javax.xml.bind.ValidationEventHandler;
					setProperty(string0: string, object1: any): void;
					getProperty(string0: string): any;
					setSchema(schema0: javax.xml.validation.Schema): void;
					getSchema(): javax.xml.validation.Schema;
					setAdapter(xmlAdapter0: javax.xml.bind.annotation.adapters.XmlAdapter<any,any>): void;
					setAdapter(class0: java.lang.Class<any>, xmlAdapter1: javax.xml.bind.annotation.adapters.XmlAdapter<any,any>): void;
					getAdapter(class0: java.lang.Class<any>): javax.xml.bind.annotation.adapters.XmlAdapter<any,any>;
					setAttachmentUnmarshaller(attachmentUnmarshaller0: javax.xml.bind.attachment.AttachmentUnmarshaller): void;
					getAttachmentUnmarshaller(): javax.xml.bind.attachment.AttachmentUnmarshaller;
					setListener(listener0: javax.xml.bind.Unmarshaller.Listener): void;
					getListener(): javax.xml.bind.Unmarshaller.Listener;
				});
				public constructor();
				public unmarshal(inputSource0: org.xml.sax.InputSource): any;
				public getEventHandler(): javax.xml.bind.ValidationEventHandler;
				public setAdapter(class0: java.lang.Class<any>, xmlAdapter1: javax.xml.bind.annotation.adapters.XmlAdapter<any,any>): void;
				public unmarshal(xMLEventReader0: javax.xml.stream.XMLEventReader): any;
				public unmarshal(node0: org.w3c.dom.Node, class1: java.lang.Class<any>): javax.xml.bind.JAXBElement<any>;
				public unmarshal(source0: javax.xml.transform.Source, class1: java.lang.Class<any>): javax.xml.bind.JAXBElement<any>;
				public setAttachmentUnmarshaller(attachmentUnmarshaller0: javax.xml.bind.attachment.AttachmentUnmarshaller): void;
				/** @deprecated */
				public setValidating(boolean0: boolean): void;
				public getAttachmentUnmarshaller(): javax.xml.bind.attachment.AttachmentUnmarshaller;
				/** @deprecated */
				public isValidating(): boolean;
				public setProperty(string0: string, object1: any): void;
				public unmarshal(source0: javax.xml.transform.Source): any;
				public setSchema(schema0: javax.xml.validation.Schema): void;
				public unmarshal(xMLEventReader0: javax.xml.stream.XMLEventReader, class1: java.lang.Class<any>): javax.xml.bind.JAXBElement<any>;
				public unmarshal(file0: java.io.File): any;
				public unmarshal(node0: org.w3c.dom.Node): any;
				public setEventHandler(validationEventHandler0: javax.xml.bind.ValidationEventHandler): void;
				public getAdapter(class0: java.lang.Class<any>): javax.xml.bind.annotation.adapters.XmlAdapter<any,any>;
				public setListener(listener0: javax.xml.bind.Unmarshaller.Listener): void;
				public getSchema(): javax.xml.validation.Schema;
				public unmarshal(xMLStreamReader0: javax.xml.stream.XMLStreamReader): any;
				public getProperty(string0: string): any;
				public unmarshal(uRL0: java.net.URL): any;
				public setAdapter(xmlAdapter0: javax.xml.bind.annotation.adapters.XmlAdapter<any,any>): void;
				public unmarshal(inputStream0: java.io.InputStream): any;
				public getUnmarshallerHandler(): javax.xml.bind.UnmarshallerHandler;
				public getListener(): javax.xml.bind.Unmarshaller.Listener;
				public unmarshal(reader0: java.io.Reader): any;
				public unmarshal(xMLStreamReader0: javax.xml.stream.XMLStreamReader, class1: java.lang.Class<any>): javax.xml.bind.JAXBElement<any>;
			}
			export module Unmarshaller {
				export abstract class Listener extends java.lang.Object {
					public static class: java.lang.Class<javax.xml.bind.Unmarshaller.Listener>;
					public afterUnmarshal(target: any, parent: any): void;
					public constructor();
					public beforeUnmarshal(target: any, parent: any): void;
				}
			}
		}
	}
}

declare module javax {
	export module xml {
		export module bind {
			export class UnmarshallerHandler extends java.lang.Object implements org.xml.sax.ContentHandler {
				public static class: java.lang.Class<javax.xml.bind.UnmarshallerHandler>;
				/**
				 * Constructs a new instance of the javax.xml.bind.UnmarshallerHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getResult(): any;
					setDocumentLocator(locator0: org.xml.sax.Locator): void;
					startDocument(): void;
					endDocument(): void;
					startPrefixMapping(string0: string, string1: string): void;
					endPrefixMapping(string0: string): void;
					startElement(string0: string, string1: string, string2: string, attributes3: org.xml.sax.Attributes): void;
					endElement(string0: string, string1: string, string2: string): void;
					characters(chars0: native.Array<string>, int1: number, int2: number): void;
					ignorableWhitespace(chars0: native.Array<string>, int1: number, int2: number): void;
					processingInstruction(string0: string, string1: string): void;
					skippedEntity(string0: string): void;
				});
				public constructor();
				public getResult(): any;
				public setDocumentLocator(locator0: org.xml.sax.Locator): void;
				public processingInstruction(string0: string, string1: string): void;
				public skippedEntity(string0: string): void;
				public startPrefixMapping(string0: string, string1: string): void;
				public endElement(string0: string, string1: string, string2: string): void;
				public ignorableWhitespace(chars0: native.Array<string>, int1: number, int2: number): void;
				public startDocument(): void;
				public endDocument(): void;
				public characters(chars0: native.Array<string>, int1: number, int2: number): void;
				public endPrefixMapping(string0: string): void;
				public startElement(string0: string, string1: string, string2: string, attributes3: org.xml.sax.Attributes): void;
			}
		}
	}
}

declare module javax {
	export module xml {
		export module bind {
			export class ValidationEvent extends java.lang.Object {
				public static class: java.lang.Class<javax.xml.bind.ValidationEvent>;
				/**
				 * Constructs a new instance of the javax.xml.bind.ValidationEvent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getSeverity(): number;
					getMessage(): string;
					getLinkedException(): java.lang.Throwable;
					getLocator(): javax.xml.bind.ValidationEventLocator;
				});
				public constructor();
				public static ERROR: number;
				public static WARNING: number;
				public static FATAL_ERROR: number;
				public getLinkedException(): java.lang.Throwable;
				public getLocator(): javax.xml.bind.ValidationEventLocator;
				public getSeverity(): number;
				public getMessage(): string;
			}
		}
	}
}

declare module javax {
	export module xml {
		export module bind {
			export class ValidationEventHandler extends java.lang.Object {
				public static class: java.lang.Class<javax.xml.bind.ValidationEventHandler>;
				/**
				 * Constructs a new instance of the javax.xml.bind.ValidationEventHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					handleEvent(validationEvent0: javax.xml.bind.ValidationEvent): boolean;
				});
				public constructor();
				public handleEvent(validationEvent0: javax.xml.bind.ValidationEvent): boolean;
			}
		}
	}
}

declare module javax {
	export module xml {
		export module bind {
			export class ValidationEventLocator extends java.lang.Object {
				public static class: java.lang.Class<javax.xml.bind.ValidationEventLocator>;
				/**
				 * Constructs a new instance of the javax.xml.bind.ValidationEventLocator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getURL(): java.net.URL;
					getOffset(): number;
					getLineNumber(): number;
					getColumnNumber(): number;
					getObject(): any;
					getNode(): org.w3c.dom.Node;
				});
				public constructor();
				public getNode(): org.w3c.dom.Node;
				public getOffset(): number;
				public getLineNumber(): number;
				public getObject(): any;
				public getColumnNumber(): number;
				public getURL(): java.net.URL;
			}
		}
	}
}

declare module javax {
	export module xml {
		export module bind {
			export class ValidationException extends javax.xml.bind.JAXBException {
				public static class: java.lang.Class<javax.xml.bind.ValidationException>;
				public constructor(message: string, errorCode: string, exception: java.lang.Throwable);
				public constructor(message: string, errorCode: string);
				public constructor(message: string);
				public constructor(exception: java.lang.Throwable);
				public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
				public constructor(message: string, exception: java.lang.Throwable);
				public constructor();
			}
		}
	}
}

declare module javax {
	export module xml {
		export module bind {
			export class Validator extends java.lang.Object {
				public static class: java.lang.Class<javax.xml.bind.Validator>;
				/**
				 * Constructs a new instance of the javax.xml.bind.Validator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					setEventHandler(validationEventHandler0: javax.xml.bind.ValidationEventHandler): void;
					getEventHandler(): javax.xml.bind.ValidationEventHandler;
					validate(object0: any): boolean;
					validateRoot(object0: any): boolean;
					setProperty(string0: string, object1: any): void;
					getProperty(string0: string): any;
				});
				public constructor();
				/** @deprecated */
				public setEventHandler(validationEventHandler0: javax.xml.bind.ValidationEventHandler): void;
				/** @deprecated */
				public validate(object0: any): boolean;
				/** @deprecated */
				public getProperty(string0: string): any;
				/** @deprecated */
				public validateRoot(object0: any): boolean;
				/** @deprecated */
				public getEventHandler(): javax.xml.bind.ValidationEventHandler;
				/** @deprecated */
				public setProperty(string0: string, object1: any): void;
			}
		}
	}
}

declare module javax {
	export module xml {
		export module bind {
			export abstract class WhiteSpaceProcessor extends java.lang.Object {
				public static class: java.lang.Class<javax.xml.bind.WhiteSpaceProcessor>;
				public static isWhiteSpace(ch: string): boolean;
				public static collapse(text: string): string;
				public static isWhiteSpaceExceptSpace(ch: string): boolean;
				public static replace(text: string): string;
				public static trim(text: string): string;
				public static isWhiteSpace(s: string): boolean;
			}
		}
	}
}

declare module javax {
	export module xml {
		export module bind {
			export module annotation {
				export class DomHandler<ElementT, ResultT>  extends java.lang.Object {
					public static class: java.lang.Class<javax.xml.bind.annotation.DomHandler<any,any>>;
					/**
					 * Constructs a new instance of the javax.xml.bind.annotation.DomHandler<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						createUnmarshaller(validationEventHandler0: javax.xml.bind.ValidationEventHandler): ResultT;
						getElement(result0: ResultT): ElementT;
						marshal(object0: ElementT, validationEventHandler1: javax.xml.bind.ValidationEventHandler): javax.xml.transform.Source;
					});
					public constructor();
					public createUnmarshaller(validationEventHandler0: javax.xml.bind.ValidationEventHandler): ResultT;
					public getElement(result0: ResultT): ElementT;
					public marshal(object0: ElementT, validationEventHandler1: javax.xml.bind.ValidationEventHandler): javax.xml.transform.Source;
				}
			}
		}
	}
}

declare module javax {
	export module xml {
		export module bind {
			export module annotation {
				export class W3CDomHandler extends javax.xml.bind.annotation.DomHandler<org.w3c.dom.Element,javax.xml.transform.dom.DOMResult> {
					public static class: java.lang.Class<javax.xml.bind.annotation.W3CDomHandler>;
					public createUnmarshaller(errorHandler: javax.xml.bind.ValidationEventHandler): javax.xml.transform.dom.DOMResult;
					public constructor(builder: javax.xml.parsers.DocumentBuilder);
					public getElement(result0: any): any;
					public marshal(element: org.w3c.dom.Element, errorHandler: javax.xml.bind.ValidationEventHandler): javax.xml.transform.Source;
					public marshal(object0: any, validationEventHandler1: javax.xml.bind.ValidationEventHandler): javax.xml.transform.Source;
					public constructor();
					public getBuilder(): javax.xml.parsers.DocumentBuilder;
					public getElement(r: javax.xml.transform.dom.DOMResult): org.w3c.dom.Element;
					public setBuilder(builder: javax.xml.parsers.DocumentBuilder): void;
					public createUnmarshaller(validationEventHandler0: javax.xml.bind.ValidationEventHandler): any;
				}
			}
		}
	}
}

declare module javax {
	export module xml {
		export module bind {
			export module annotation {
				export class XmlAccessOrder {
					public static class: java.lang.Class<javax.xml.bind.annotation.XmlAccessOrder>;
					public static UNDEFINED: javax.xml.bind.annotation.XmlAccessOrder;
					public static ALPHABETICAL: javax.xml.bind.annotation.XmlAccessOrder;
					public static values(): native.Array<javax.xml.bind.annotation.XmlAccessOrder>;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static valueOf(name: string): javax.xml.bind.annotation.XmlAccessOrder;
				}
			}
		}
	}
}

declare module javax {
	export module xml {
		export module bind {
			export module annotation {
				export class XmlAccessType {
					public static class: java.lang.Class<javax.xml.bind.annotation.XmlAccessType>;
					public static PROPERTY: javax.xml.bind.annotation.XmlAccessType;
					public static FIELD: javax.xml.bind.annotation.XmlAccessType;
					public static PUBLIC_MEMBER: javax.xml.bind.annotation.XmlAccessType;
					public static NONE: javax.xml.bind.annotation.XmlAccessType;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static values(): native.Array<javax.xml.bind.annotation.XmlAccessType>;
					public static valueOf(name: string): javax.xml.bind.annotation.XmlAccessType;
				}
			}
		}
	}
}

declare module javax {
	export module xml {
		export module bind {
			export module annotation {
				export class XmlAccessorOrder extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<javax.xml.bind.annotation.XmlAccessorOrder>;
					/**
					 * Constructs a new instance of the javax.xml.bind.annotation.XmlAccessorOrder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						value(): javax.xml.bind.annotation.XmlAccessOrder;
						equals(object0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public value(): javax.xml.bind.annotation.XmlAccessOrder;
					public equals(obj: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module javax {
	export module xml {
		export module bind {
			export module annotation {
				export class XmlAccessorType extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<javax.xml.bind.annotation.XmlAccessorType>;
					/**
					 * Constructs a new instance of the javax.xml.bind.annotation.XmlAccessorType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						value(): javax.xml.bind.annotation.XmlAccessType;
						equals(object0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(obj: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public value(): javax.xml.bind.annotation.XmlAccessType;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module javax {
	export module xml {
		export module bind {
			export module annotation {
				export class XmlAnyAttribute extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<javax.xml.bind.annotation.XmlAnyAttribute>;
					/**
					 * Constructs a new instance of the javax.xml.bind.annotation.XmlAnyAttribute interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(object0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(obj: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module javax {
	export module xml {
		export module bind {
			export module annotation {
				export class XmlAnyElement extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<javax.xml.bind.annotation.XmlAnyElement>;
					/**
					 * Constructs a new instance of the javax.xml.bind.annotation.XmlAnyElement interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						lax(): boolean;
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
					public lax(): boolean;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module javax {
	export module xml {
		export module bind {
			export module annotation {
				export class XmlAttachmentRef extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<javax.xml.bind.annotation.XmlAttachmentRef>;
					/**
					 * Constructs a new instance of the javax.xml.bind.annotation.XmlAttachmentRef interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(object0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(obj: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module javax {
	export module xml {
		export module bind {
			export module annotation {
				export class XmlAttribute extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<javax.xml.bind.annotation.XmlAttribute>;
					/**
					 * Constructs a new instance of the javax.xml.bind.annotation.XmlAttribute interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						name(): string;
						required(): boolean;
						namespace(): string;
						equals(object0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public name(): string;
					public equals(obj: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public namespace(): string;
					public hashCode(): number;
					public required(): boolean;
				}
			}
		}
	}
}

declare module javax {
	export module xml {
		export module bind {
			export module annotation {
				export class XmlElement extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<javax.xml.bind.annotation.XmlElement>;
					/**
					 * Constructs a new instance of the javax.xml.bind.annotation.XmlElement interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						name(): string;
						nillable(): boolean;
						required(): boolean;
						namespace(): string;
						defaultValue(): string;
						type(): java.lang.Class<any>;
						equals(object0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public name(): string;
					public equals(obj: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public namespace(): string;
					public nillable(): boolean;
					public defaultValue(): string;
					public type(): java.lang.Class<any>;
					public hashCode(): number;
					public required(): boolean;
				}
				export module XmlElement {
					export class DEFAULT extends java.lang.Object {
						public static class: java.lang.Class<javax.xml.bind.annotation.XmlElement.DEFAULT>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module javax {
	export module xml {
		export module bind {
			export module annotation {
				export class XmlElementDecl extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<javax.xml.bind.annotation.XmlElementDecl>;
					/**
					 * Constructs a new instance of the javax.xml.bind.annotation.XmlElementDecl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						scope(): java.lang.Class<any>;
						namespace(): string;
						name(): string;
						substitutionHeadNamespace(): string;
						substitutionHeadName(): string;
						defaultValue(): string;
						equals(object0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public name(): string;
					public equals(obj: any): boolean;
					public toString(): string;
					public substitutionHeadName(): string;
					public annotationType(): java.lang.Class<any>;
					public namespace(): string;
					public scope(): java.lang.Class<any>;
					public substitutionHeadNamespace(): string;
					public defaultValue(): string;
					public hashCode(): number;
				}
				export module XmlElementDecl {
					export class GLOBAL extends java.lang.Object {
						public static class: java.lang.Class<javax.xml.bind.annotation.XmlElementDecl.GLOBAL>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module javax {
	export module xml {
		export module bind {
			export module annotation {
				export class XmlElementRef extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<javax.xml.bind.annotation.XmlElementRef>;
					/**
					 * Constructs a new instance of the javax.xml.bind.annotation.XmlElementRef interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						type(): java.lang.Class<any>;
						namespace(): string;
						name(): string;
						required(): boolean;
						equals(object0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public name(): string;
					public equals(obj: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public namespace(): string;
					public type(): java.lang.Class<any>;
					public hashCode(): number;
					public required(): boolean;
				}
				export module XmlElementRef {
					export class DEFAULT extends java.lang.Object {
						public static class: java.lang.Class<javax.xml.bind.annotation.XmlElementRef.DEFAULT>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module javax {
	export module xml {
		export module bind {
			export module annotation {
				export class XmlElementRefs extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<javax.xml.bind.annotation.XmlElementRefs>;
					/**
					 * Constructs a new instance of the javax.xml.bind.annotation.XmlElementRefs interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						value(): native.Array<javax.xml.bind.annotation.XmlElementRef>;
						equals(object0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(obj: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public value(): native.Array<javax.xml.bind.annotation.XmlElementRef>;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module javax {
	export module xml {
		export module bind {
			export module annotation {
				export class XmlElementWrapper extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<javax.xml.bind.annotation.XmlElementWrapper>;
					/**
					 * Constructs a new instance of the javax.xml.bind.annotation.XmlElementWrapper interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						name(): string;
						namespace(): string;
						nillable(): boolean;
						required(): boolean;
						equals(object0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public name(): string;
					public equals(obj: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public namespace(): string;
					public nillable(): boolean;
					public hashCode(): number;
					public required(): boolean;
				}
			}
		}
	}
}

declare module javax {
	export module xml {
		export module bind {
			export module annotation {
				export class XmlElements extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<javax.xml.bind.annotation.XmlElements>;
					/**
					 * Constructs a new instance of the javax.xml.bind.annotation.XmlElements interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						value(): native.Array<javax.xml.bind.annotation.XmlElement>;
						equals(object0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(obj: any): boolean;
					public toString(): string;
					public value(): native.Array<javax.xml.bind.annotation.XmlElement>;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module javax {
	export module xml {
		export module bind {
			export module annotation {
				export class XmlEnum extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<javax.xml.bind.annotation.XmlEnum>;
					/**
					 * Constructs a new instance of the javax.xml.bind.annotation.XmlEnum interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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

declare module javax {
	export module xml {
		export module bind {
			export module annotation {
				export class XmlEnumValue extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<javax.xml.bind.annotation.XmlEnumValue>;
					/**
					 * Constructs a new instance of the javax.xml.bind.annotation.XmlEnumValue interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						value(): string;
						equals(object0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(obj: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public value(): string;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module javax {
	export module xml {
		export module bind {
			export module annotation {
				export class XmlID extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<javax.xml.bind.annotation.XmlID>;
					/**
					 * Constructs a new instance of the javax.xml.bind.annotation.XmlID interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(object0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(obj: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module javax {
	export module xml {
		export module bind {
			export module annotation {
				export class XmlIDREF extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<javax.xml.bind.annotation.XmlIDREF>;
					/**
					 * Constructs a new instance of the javax.xml.bind.annotation.XmlIDREF interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(object0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(obj: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module javax {
	export module xml {
		export module bind {
			export module annotation {
				export class XmlInlineBinaryData extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<javax.xml.bind.annotation.XmlInlineBinaryData>;
					/**
					 * Constructs a new instance of the javax.xml.bind.annotation.XmlInlineBinaryData interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(object0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(obj: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module javax {
	export module xml {
		export module bind {
			export module annotation {
				export class XmlList extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<javax.xml.bind.annotation.XmlList>;
					/**
					 * Constructs a new instance of the javax.xml.bind.annotation.XmlList interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(object0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(obj: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module javax {
	export module xml {
		export module bind {
			export module annotation {
				export class XmlMimeType extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<javax.xml.bind.annotation.XmlMimeType>;
					/**
					 * Constructs a new instance of the javax.xml.bind.annotation.XmlMimeType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						value(): string;
						equals(object0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(obj: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public value(): string;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module javax {
	export module xml {
		export module bind {
			export module annotation {
				export class XmlMixed extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<javax.xml.bind.annotation.XmlMixed>;
					/**
					 * Constructs a new instance of the javax.xml.bind.annotation.XmlMixed interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(object0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(obj: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module javax {
	export module xml {
		export module bind {
			export module annotation {
				export class XmlNs extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<javax.xml.bind.annotation.XmlNs>;
					/**
					 * Constructs a new instance of the javax.xml.bind.annotation.XmlNs interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						prefix(): string;
						namespaceURI(): string;
						equals(object0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public namespaceURI(): string;
					public equals(obj: any): boolean;
					public toString(): string;
					public prefix(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module javax {
	export module xml {
		export module bind {
			export module annotation {
				export class XmlNsForm {
					public static class: java.lang.Class<javax.xml.bind.annotation.XmlNsForm>;
					public static UNQUALIFIED: javax.xml.bind.annotation.XmlNsForm;
					public static QUALIFIED: javax.xml.bind.annotation.XmlNsForm;
					public static UNSET: javax.xml.bind.annotation.XmlNsForm;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static values(): native.Array<javax.xml.bind.annotation.XmlNsForm>;
					public static valueOf(name: string): javax.xml.bind.annotation.XmlNsForm;
				}
			}
		}
	}
}

declare module javax {
	export module xml {
		export module bind {
			export module annotation {
				export class XmlRegistry extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<javax.xml.bind.annotation.XmlRegistry>;
					/**
					 * Constructs a new instance of the javax.xml.bind.annotation.XmlRegistry interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(object0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(obj: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module javax {
	export module xml {
		export module bind {
			export module annotation {
				export class XmlRootElement extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<javax.xml.bind.annotation.XmlRootElement>;
					/**
					 * Constructs a new instance of the javax.xml.bind.annotation.XmlRootElement interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						namespace(): string;
						name(): string;
						equals(object0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public name(): string;
					public equals(obj: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public namespace(): string;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module javax {
	export module xml {
		export module bind {
			export module annotation {
				export class XmlSchema extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<javax.xml.bind.annotation.XmlSchema>;
					/**
					 * Constructs a new instance of the javax.xml.bind.annotation.XmlSchema interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						xmlns(): native.Array<javax.xml.bind.annotation.XmlNs>;
						namespace(): string;
						elementFormDefault(): javax.xml.bind.annotation.XmlNsForm;
						attributeFormDefault(): javax.xml.bind.annotation.XmlNsForm;
						location(): string;
						equals(object0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public static NO_LOCATION: string;
					public attributeFormDefault(): javax.xml.bind.annotation.XmlNsForm;
					public equals(obj: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public namespace(): string;
					public location(): string;
					public xmlns(): native.Array<javax.xml.bind.annotation.XmlNs>;
					public elementFormDefault(): javax.xml.bind.annotation.XmlNsForm;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module javax {
	export module xml {
		export module bind {
			export module annotation {
				export class XmlSchemaType extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<javax.xml.bind.annotation.XmlSchemaType>;
					/**
					 * Constructs a new instance of the javax.xml.bind.annotation.XmlSchemaType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						name(): string;
						namespace(): string;
						type(): java.lang.Class<any>;
						equals(object0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public name(): string;
					public equals(obj: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public namespace(): string;
					public type(): java.lang.Class<any>;
					public hashCode(): number;
				}
				export module XmlSchemaType {
					export class DEFAULT extends java.lang.Object {
						public static class: java.lang.Class<javax.xml.bind.annotation.XmlSchemaType.DEFAULT>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module javax {
	export module xml {
		export module bind {
			export module annotation {
				export class XmlSchemaTypes extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<javax.xml.bind.annotation.XmlSchemaTypes>;
					/**
					 * Constructs a new instance of the javax.xml.bind.annotation.XmlSchemaTypes interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						value(): native.Array<javax.xml.bind.annotation.XmlSchemaType>;
						equals(object0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(obj: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public value(): native.Array<javax.xml.bind.annotation.XmlSchemaType>;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module javax {
	export module xml {
		export module bind {
			export module annotation {
				export class XmlSeeAlso extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<javax.xml.bind.annotation.XmlSeeAlso>;
					/**
					 * Constructs a new instance of the javax.xml.bind.annotation.XmlSeeAlso interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						value(): native.Array<java.lang.Class<any>>;
						equals(object0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public value(): native.Array<java.lang.Class<any>>;
					public equals(obj: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module javax {
	export module xml {
		export module bind {
			export module annotation {
				export class XmlTransient extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<javax.xml.bind.annotation.XmlTransient>;
					/**
					 * Constructs a new instance of the javax.xml.bind.annotation.XmlTransient interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(object0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(obj: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module javax {
	export module xml {
		export module bind {
			export module annotation {
				export class XmlType extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<javax.xml.bind.annotation.XmlType>;
					/**
					 * Constructs a new instance of the javax.xml.bind.annotation.XmlType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						name(): string;
						propOrder(): native.Array<string>;
						namespace(): string;
						factoryClass(): java.lang.Class<any>;
						factoryMethod(): string;
						equals(object0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public factoryClass(): java.lang.Class<any>;
					public name(): string;
					public equals(obj: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public factoryMethod(): string;
					public namespace(): string;
					public propOrder(): native.Array<string>;
					public hashCode(): number;
				}
				export module XmlType {
					export class DEFAULT extends java.lang.Object {
						public static class: java.lang.Class<javax.xml.bind.annotation.XmlType.DEFAULT>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module javax {
	export module xml {
		export module bind {
			export module annotation {
				export class XmlValue extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<javax.xml.bind.annotation.XmlValue>;
					/**
					 * Constructs a new instance of the javax.xml.bind.annotation.XmlValue interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(object0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(obj: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module javax {
	export module xml {
		export module bind {
			export module annotation {
				export module adapters {
					export class CollapsedStringAdapter extends javax.xml.bind.annotation.adapters.XmlAdapter<string,string> {
						public static class: java.lang.Class<javax.xml.bind.annotation.adapters.CollapsedStringAdapter>;
						public static isWhiteSpace(ch: string): boolean;
						public marshal(s: string): string;
						public constructor();
						public unmarshal(object0: any): any;
						public marshal(object0: any): any;
						public unmarshal(text: string): string;
					}
				}
			}
		}
	}
}

declare module javax {
	export module xml {
		export module bind {
			export module annotation {
				export module adapters {
					export class HexBinaryAdapter extends javax.xml.bind.annotation.adapters.XmlAdapter<string,native.Array<number>> {
						public static class: java.lang.Class<javax.xml.bind.annotation.adapters.HexBinaryAdapter>;
						public constructor();
						public unmarshal(object0: any): any;
						public unmarshal(s: string): native.Array<number>;
						public marshal(object0: any): any;
						public marshal(bytes: native.Array<number>): string;
					}
				}
			}
		}
	}
}

declare module javax {
	export module xml {
		export module bind {
			export module annotation {
				export module adapters {
					export class NormalizedStringAdapter extends javax.xml.bind.annotation.adapters.XmlAdapter<string,string> {
						public static class: java.lang.Class<javax.xml.bind.annotation.adapters.NormalizedStringAdapter>;
						public marshal(s: string): string;
						public constructor();
						public unmarshal(object0: any): any;
						public marshal(object0: any): any;
						public static isWhiteSpaceExceptSpace(ch: string): boolean;
						public unmarshal(text: string): string;
					}
				}
			}
		}
	}
}

declare module javax {
	export module xml {
		export module bind {
			export module annotation {
				export module adapters {
					export abstract class XmlAdapter<ValueType, BoundType>  extends java.lang.Object {
						public static class: java.lang.Class<javax.xml.bind.annotation.adapters.XmlAdapter<any,any>>;
						public constructor();
						public marshal(object0: BoundType): ValueType;
						public unmarshal(object0: ValueType): BoundType;
					}
				}
			}
		}
	}
}

declare module javax {
	export module xml {
		export module bind {
			export module annotation {
				export module adapters {
					export class XmlJavaTypeAdapter extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<javax.xml.bind.annotation.adapters.XmlJavaTypeAdapter>;
						/**
						 * Constructs a new instance of the javax.xml.bind.annotation.adapters.XmlJavaTypeAdapter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							value(): java.lang.Class<any>;
							type(): java.lang.Class<any>;
							equals(object0: any): boolean;
							hashCode(): number;
							toString(): string;
							annotationType(): java.lang.Class<any>;
						});
						public constructor();
						public value(): java.lang.Class<any>;
						public equals(obj: any): boolean;
						public hashCode(): number;
						public type(): java.lang.Class<any>;
						public toString(): string;
						public annotationType(): java.lang.Class<any>;
					}
					export module XmlJavaTypeAdapter {
						export class DEFAULT extends java.lang.Object {
							public static class: java.lang.Class<javax.xml.bind.annotation.adapters.XmlJavaTypeAdapter.DEFAULT>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module javax {
	export module xml {
		export module bind {
			export module annotation {
				export module adapters {
					export class XmlJavaTypeAdapters extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<javax.xml.bind.annotation.adapters.XmlJavaTypeAdapters>;
						/**
						 * Constructs a new instance of the javax.xml.bind.annotation.adapters.XmlJavaTypeAdapters interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							value(): native.Array<javax.xml.bind.annotation.adapters.XmlJavaTypeAdapter>;
							equals(object0: any): boolean;
							hashCode(): number;
							toString(): string;
							annotationType(): java.lang.Class<any>;
						});
						public constructor();
						public value(): native.Array<javax.xml.bind.annotation.adapters.XmlJavaTypeAdapter>;
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

declare module javax {
	export module xml {
		export module bind {
			export module attachment {
				export abstract class AttachmentMarshaller extends java.lang.Object {
					public static class: java.lang.Class<javax.xml.bind.attachment.AttachmentMarshaller>;
					public addMtomAttachment(dataHandler0: javax.activation.DataHandler, string1: string, string2: string): string;
					public constructor();
					public addMtomAttachment(bytes0: native.Array<number>, int1: number, int2: number, string3: string, string4: string, string5: string): string;
					public isXOPPackage(): boolean;
					public addSwaRefAttachment(dataHandler0: javax.activation.DataHandler): string;
				}
			}
		}
	}
}

declare module javax {
	export module xml {
		export module bind {
			export module attachment {
				export abstract class AttachmentUnmarshaller extends java.lang.Object {
					public static class: java.lang.Class<javax.xml.bind.attachment.AttachmentUnmarshaller>;
					public getAttachmentAsDataHandler(string0: string): javax.activation.DataHandler;
					public getAttachmentAsByteArray(string0: string): native.Array<number>;
					public constructor();
					public isXOPPackage(): boolean;
				}
			}
		}
	}
}

declare module javax {
	export module xml {
		export module bind {
			export module helpers {
				export abstract class AbstractMarshallerImpl extends java.lang.Object implements javax.xml.bind.Marshaller {
					public static class: java.lang.Class<javax.xml.bind.helpers.AbstractMarshallerImpl>;
					public setAdapter(adapter: javax.xml.bind.annotation.adapters.XmlAdapter<any,any>): void;
					public marshal(obj: any, node: org.w3c.dom.Node): void;
					public setSchema(schema: javax.xml.validation.Schema): void;
					public setAdapter(type: java.lang.Class<any>, adapter: javax.xml.bind.annotation.adapters.XmlAdapter<any,any>): void;
					public getAdapter(type: java.lang.Class<any>): javax.xml.bind.annotation.adapters.XmlAdapter<any,any>;
					public isFragment(): boolean;
					public marshal(obj: any, handler: org.xml.sax.ContentHandler): void;
					public getProperty(name: string): any;
					public getListener(): javax.xml.bind.Marshaller.Listener;
					public marshal(obj: any, writer: javax.xml.stream.XMLStreamWriter): void;
					public setEncoding(encoding: string): void;
					public constructor();
					public marshal(jaxbElement: any, output: java.io.File): void;
					public isFormattedOutput(): boolean;
					public setEventHandler(handler: javax.xml.bind.ValidationEventHandler): void;
					public marshal(obj: any, w: java.io.Writer): void;
					public marshal(obj: any, writer: javax.xml.stream.XMLEventWriter): void;
					public getJavaEncoding(encoding: string): string;
					public getEncoding(): string;
					public getSchemaLocation(): string;
					public getSchema(): javax.xml.validation.Schema;
					public setProperty(name: string, value: any): void;
					public setFormattedOutput(v: boolean): void;
					public marshal(obj: any, os: java.io.OutputStream): void;
					public setNoNSSchemaLocation(location: string): void;
					public getEventHandler(): javax.xml.bind.ValidationEventHandler;
					public getAttachmentMarshaller(): javax.xml.bind.attachment.AttachmentMarshaller;
					public setListener(listener: javax.xml.bind.Marshaller.Listener): void;
					public getNode(obj: any): org.w3c.dom.Node;
					public getNoNSSchemaLocation(): string;
					public setAttachmentMarshaller(am: javax.xml.bind.attachment.AttachmentMarshaller): void;
					public setSchemaLocation(location: string): void;
					public marshal(object0: any, result1: javax.xml.transform.Result): void;
					public setFragment(v: boolean): void;
				}
			}
		}
	}
}

declare module javax {
	export module xml {
		export module bind {
			export module helpers {
				export abstract class AbstractUnmarshallerImpl extends java.lang.Object implements javax.xml.bind.Unmarshaller {
					public static class: java.lang.Class<javax.xml.bind.helpers.AbstractUnmarshallerImpl>;
					public validating: boolean;
					public setAdapter(adapter: javax.xml.bind.annotation.adapters.XmlAdapter<any,any>): void;
					public setSchema(schema: javax.xml.validation.Schema): void;
					public setAdapter(type: java.lang.Class<any>, adapter: javax.xml.bind.annotation.adapters.XmlAdapter<any,any>): void;
					public getAdapter(type: java.lang.Class<any>): javax.xml.bind.annotation.adapters.XmlAdapter<any,any>;
					/** @deprecated */
					public isValidating(): boolean;
					public unmarshal(f: java.io.File): any;
					public getProperty(name: string): any;
					public unmarshal(reader: javax.xml.stream.XMLStreamReader): any;
					public unmarshal(node: org.w3c.dom.Node, expectedType: java.lang.Class<any>): javax.xml.bind.JAXBElement<any>;
					public getUnmarshallerHandler(): javax.xml.bind.UnmarshallerHandler;
					public constructor();
					public unmarshal(is: java.io.InputStream): any;
					public unmarshal(source: org.xml.sax.InputSource): any;
					public createUnmarshalException(e: org.xml.sax.SAXException): javax.xml.bind.UnmarshalException;
					public setEventHandler(handler: javax.xml.bind.ValidationEventHandler): void;
					public unmarshal(reader: javax.xml.stream.XMLStreamReader, expectedType: java.lang.Class<any>): javax.xml.bind.JAXBElement<any>;
					public unmarshal(reader: javax.xml.stream.XMLEventReader): any;
					public unmarshal(url: java.net.URL): any;
					public getSchema(): javax.xml.validation.Schema;
					public setListener(listener: javax.xml.bind.Unmarshaller.Listener): void;
					public setProperty(name: string, value: any): void;
					public unmarshal(reader: java.io.Reader): any;
					public unmarshal(node0: org.w3c.dom.Node): any;
					public getXMLReader(): org.xml.sax.XMLReader;
					public getEventHandler(): javax.xml.bind.ValidationEventHandler;
					public isValidating(): boolean;
					public unmarshal(xMLReader0: org.xml.sax.XMLReader, inputSource1: org.xml.sax.InputSource): any;
					public unmarshal(source: javax.xml.transform.Source, expectedType: java.lang.Class<any>): javax.xml.bind.JAXBElement<any>;
					public unmarshal(reader: javax.xml.stream.XMLEventReader, expectedType: java.lang.Class<any>): javax.xml.bind.JAXBElement<any>;
					public setValidating(validating: boolean): void;
					public setAttachmentUnmarshaller(au: javax.xml.bind.attachment.AttachmentUnmarshaller): void;
					/** @deprecated */
					public setValidating(validating: boolean): void;
					public unmarshal(source: javax.xml.transform.Source): any;
					public getAttachmentUnmarshaller(): javax.xml.bind.attachment.AttachmentUnmarshaller;
					public getListener(): javax.xml.bind.Unmarshaller.Listener;
				}
			}
		}
	}
}

declare module javax {
	export module xml {
		export module bind {
			export module helpers {
				export class DefaultValidationEventHandler extends java.lang.Object implements javax.xml.bind.ValidationEventHandler {
					public static class: java.lang.Class<javax.xml.bind.helpers.DefaultValidationEventHandler>;
					public constructor();
					public handleEvent(event: javax.xml.bind.ValidationEvent): boolean;
				}
			}
		}
	}
}

declare module javax {
	export module xml {
		export module bind {
			export module helpers {
				export class Messages extends java.lang.Object {
					public static class: java.lang.Class<javax.xml.bind.helpers.Messages>;
				}
			}
		}
	}
}

declare module javax {
	export module xml {
		export module bind {
			export module helpers {
				export class NotIdentifiableEventImpl extends javax.xml.bind.helpers.ValidationEventImpl implements javax.xml.bind.NotIdentifiableEvent {
					public static class: java.lang.Class<javax.xml.bind.helpers.NotIdentifiableEventImpl>;
					public getLinkedException(): java.lang.Throwable;
					public constructor(_severity: number, _message: string, _locator: javax.xml.bind.ValidationEventLocator, _linkedException: java.lang.Throwable);
					public getSeverity(): number;
					public getMessage(): string;
					public constructor(_severity: number, _message: string, _locator: javax.xml.bind.ValidationEventLocator);
					public getLocator(): javax.xml.bind.ValidationEventLocator;
				}
			}
		}
	}
}

declare module javax {
	export module xml {
		export module bind {
			export module helpers {
				export class ParseConversionEventImpl extends javax.xml.bind.helpers.ValidationEventImpl implements javax.xml.bind.ParseConversionEvent {
					public static class: java.lang.Class<javax.xml.bind.helpers.ParseConversionEventImpl>;
					public getLinkedException(): java.lang.Throwable;
					public constructor(_severity: number, _message: string, _locator: javax.xml.bind.ValidationEventLocator, _linkedException: java.lang.Throwable);
					public getSeverity(): number;
					public getMessage(): string;
					public constructor(_severity: number, _message: string, _locator: javax.xml.bind.ValidationEventLocator);
					public getLocator(): javax.xml.bind.ValidationEventLocator;
				}
			}
		}
	}
}

declare module javax {
	export module xml {
		export module bind {
			export module helpers {
				export class PrintConversionEventImpl extends javax.xml.bind.helpers.ValidationEventImpl implements javax.xml.bind.PrintConversionEvent {
					public static class: java.lang.Class<javax.xml.bind.helpers.PrintConversionEventImpl>;
					public getLinkedException(): java.lang.Throwable;
					public constructor(_severity: number, _message: string, _locator: javax.xml.bind.ValidationEventLocator, _linkedException: java.lang.Throwable);
					public getSeverity(): number;
					public getMessage(): string;
					public constructor(_severity: number, _message: string, _locator: javax.xml.bind.ValidationEventLocator);
					public getLocator(): javax.xml.bind.ValidationEventLocator;
				}
			}
		}
	}
}

declare module javax {
	export module xml {
		export module bind {
			export module helpers {
				export class ValidationEventImpl extends java.lang.Object implements javax.xml.bind.ValidationEvent {
					public static class: java.lang.Class<javax.xml.bind.helpers.ValidationEventImpl>;
					public getLinkedException(): java.lang.Throwable;
					public setLinkedException(_linkedException: java.lang.Throwable): void;
					public constructor(_severity: number, _message: string, _locator: javax.xml.bind.ValidationEventLocator, _linkedException: java.lang.Throwable);
					public toString(): string;
					public getSeverity(): number;
					public getMessage(): string;
					public setMessage(_message: string): void;
					public setSeverity(_severity: number): void;
					public constructor(_severity: number, _message: string, _locator: javax.xml.bind.ValidationEventLocator);
					public getLocator(): javax.xml.bind.ValidationEventLocator;
					public setLocator(_locator: javax.xml.bind.ValidationEventLocator): void;
				}
			}
		}
	}
}

declare module javax {
	export module xml {
		export module bind {
			export module helpers {
				export class ValidationEventLocatorImpl extends java.lang.Object implements javax.xml.bind.ValidationEventLocator {
					public static class: java.lang.Class<javax.xml.bind.helpers.ValidationEventLocatorImpl>;
					public getLineNumber(): number;
					public setColumnNumber(_columnNumber: number): void;
					public getOffset(): number;
					public constructor(_object: any);
					public setOffset(_offset: number): void;
					public setLineNumber(_lineNumber: number): void;
					public getURL(): java.net.URL;
					public setURL(_url: java.net.URL): void;
					public toString(): string;
					public constructor(_node: org.w3c.dom.Node);
					public constructor();
					public setNode(_node: org.w3c.dom.Node): void;
					public getColumnNumber(): number;
					public getNode(): org.w3c.dom.Node;
					public constructor(loc: org.xml.sax.Locator);
					public getObject(): any;
					public setObject(_object: any): void;
					public constructor(e: org.xml.sax.SAXParseException);
				}
			}
		}
	}
}

declare module javax {
	export module xml {
		export module bind {
			export module util {
				export class JAXBResult extends javax.xml.transform.sax.SAXResult {
					public static class: java.lang.Class<javax.xml.bind.util.JAXBResult>;
					public constructor(handler: org.xml.sax.ContentHandler);
					public setSystemId(systemId: string): void;
					public constructor();
					public constructor(context: javax.xml.bind.JAXBContext);
					public getResult(): any;
					public getSystemId(): string;
					public constructor(_unmarshaller: javax.xml.bind.Unmarshaller);
				}
			}
		}
	}
}

declare module javax {
	export module xml {
		export module bind {
			export module util {
				export class JAXBSource extends javax.xml.transform.sax.SAXSource {
					public static class: java.lang.Class<javax.xml.bind.util.JAXBSource>;
					public setSystemId(systemId: string): void;
					public constructor(inputSource: org.xml.sax.InputSource);
					public constructor();
					public getSystemId(): string;
					public constructor(context: javax.xml.bind.JAXBContext, contentObject: any);
					public constructor(marshaller: javax.xml.bind.Marshaller, contentObject: any);
					public constructor(reader: org.xml.sax.XMLReader, inputSource: org.xml.sax.InputSource);
				}
			}
		}
	}
}

declare module javax {
	export module xml {
		export module bind {
			export module util {
				export class Messages extends java.lang.Object {
					public static class: java.lang.Class<javax.xml.bind.util.Messages>;
				}
			}
		}
	}
}

declare module javax {
	export module xml {
		export module bind {
			export module util {
				export class ValidationEventCollector extends java.lang.Object implements javax.xml.bind.ValidationEventHandler {
					public static class: java.lang.Class<javax.xml.bind.util.ValidationEventCollector>;
					public reset(): void;
					public constructor();
					public hasEvents(): boolean;
					public getEvents(): native.Array<javax.xml.bind.ValidationEvent>;
					public handleEvent(event: javax.xml.bind.ValidationEvent): boolean;
				}
			}
		}
	}
}

export class ModuleInfo extends java.lang.Object {
	public static class: java.lang.Class<ModuleInfo>;
}

//Generics information:
//javax.xml.bind.Binder:1
//javax.xml.bind.JAXBElement:1
//javax.xml.bind.ServiceLoaderUtil.ExceptionHandler:1
//javax.xml.bind.annotation.DomHandler:2
//javax.xml.bind.annotation.adapters.XmlAdapter:2

