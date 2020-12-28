declare module com {
	export module sun {
		export module xml {
			export module txw2 {
				export class Attribute extends java.lang.Object {
					public static class: java.lang.Class<com.sun.xml.txw2.Attribute>;
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module txw2 {
				export class Cdata extends com.sun.xml.txw2.Text {
					public static class: java.lang.Class<com.sun.xml.txw2.Cdata>;
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module txw2 {
				export class Comment extends com.sun.xml.txw2.Content {
					public static class: java.lang.Class<com.sun.xml.txw2.Comment>;
					public constructor(document: com.sun.xml.txw2.Document, nsResolver: com.sun.xml.txw2.NamespaceResolver, obj: any);
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module txw2 {
				export class ContainerElement extends java.lang.Object implements java.lang.reflect.InvocationHandler, com.sun.xml.txw2.TypedXmlWriter {
					public static class: java.lang.Class<com.sun.xml.txw2.ContainerElement>;
					public _cdata(value: any): void;
					public _attribute(attributeName: javax.xml.namespace.QName, value: any): void;
					public _comment(value: any): void;
					public invoke(proxy: any, method: java.lang.reflect.Method, objects2: native.Array<any>): any;
					public commit(): void;
					public _element(tagName: javax.xml.namespace.QName, contentModel: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
					public commit(includingAllPredecessors: boolean): void;
					public constructor(document: com.sun.xml.txw2.Document, parent: com.sun.xml.txw2.ContainerElement, nsUri: string, localName: string);
					public getDocument(): com.sun.xml.txw2.Document;
					public _attribute(nsUri: string, localName: string, value: any): void;
					public _element(contentModel: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
					public _element(nsUri: string, localName: string, contentModel: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
					public block(): void;
					public _cast(facadeType: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
					public _attribute(localName: string, value: any): void;
					public _namespace(uri: string, requirePrefix: boolean): void;
					public _element(localName: string, contentModel: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
					public _pcdata(value: any): void;
					public _namespace(uri: string): void;
					public _namespace(uri: string, prefix: string): void;
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module txw2 {
				export abstract class Content extends java.lang.Object {
					public static class: java.lang.Class<com.sun.xml.txw2.Content>;
					public written(): void;
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module txw2 {
				export class ContentVisitor extends java.lang.Object {
					public static class: java.lang.Class<com.sun.xml.txw2.ContentVisitor>;
					/**
					 * Constructs a new instance of the com.sun.xml.txw2.ContentVisitor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onStartDocument(): void;
						onEndDocument(): void;
						onEndTag(): void;
						onPcdata(stringBuilder0: java.lang.StringBuilder): void;
						onCdata(stringBuilder0: java.lang.StringBuilder): void;
						onStartTag(string0: string, string1: string, attribute2: com.sun.xml.txw2.Attribute, namespaceDecl3: com.sun.xml.txw2.NamespaceDecl): void;
						onComment(stringBuilder0: java.lang.StringBuilder): void;
					});
					public constructor();
					public onStartTag(string0: string, string1: string, attribute2: com.sun.xml.txw2.Attribute, namespaceDecl3: com.sun.xml.txw2.NamespaceDecl): void;
					public onComment(stringBuilder0: java.lang.StringBuilder): void;
					public onEndTag(): void;
					public onStartDocument(): void;
					public onCdata(stringBuilder0: java.lang.StringBuilder): void;
					public onPcdata(stringBuilder0: java.lang.StringBuilder): void;
					public onEndDocument(): void;
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module txw2 {
				export class DatatypeWriter<DT>  extends java.lang.Object {
					public static class: java.lang.Class<com.sun.xml.txw2.DatatypeWriter<any>>;
					/**
					 * Constructs a new instance of the com.sun.xml.txw2.DatatypeWriter<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getType(): java.lang.Class<DT>;
						print(object0: DT, namespaceResolver1: com.sun.xml.txw2.NamespaceResolver, stringBuilder2: java.lang.StringBuilder): void;
					});
					public constructor();
					public static BUILTIN: java.util.List<com.sun.xml.txw2.DatatypeWriter<any>>;
					public getType(): java.lang.Class<DT>;
					public print(object0: DT, namespaceResolver1: com.sun.xml.txw2.NamespaceResolver, stringBuilder2: java.lang.StringBuilder): void;
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module txw2 {
				export class Document extends java.lang.Object {
					public static class: java.lang.Class<com.sun.xml.txw2.Document>;
					public addDatatypeWriter(dw: com.sun.xml.txw2.DatatypeWriter<any>): void;
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module txw2 {
				export class EndDocument extends com.sun.xml.txw2.Content {
					public static class: java.lang.Class<com.sun.xml.txw2.EndDocument>;
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module txw2 {
				export class EndTag extends com.sun.xml.txw2.Content {
					public static class: java.lang.Class<com.sun.xml.txw2.EndTag>;
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module txw2 {
				export class IllegalAnnotationException extends com.sun.xml.txw2.TxwException {
					public static class: java.lang.Class<com.sun.xml.txw2.IllegalAnnotationException>;
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

declare module com {
	export module sun {
		export module xml {
			export module txw2 {
				export class IllegalSignatureException extends com.sun.xml.txw2.TxwException {
					public static class: java.lang.Class<com.sun.xml.txw2.IllegalSignatureException>;
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

declare module com {
	export module sun {
		export module xml {
			export module txw2 {
				export class NamespaceDecl extends java.lang.Object {
					public static class: java.lang.Class<com.sun.xml.txw2.NamespaceDecl>;
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module txw2 {
				export class NamespaceResolver extends java.lang.Object {
					public static class: java.lang.Class<com.sun.xml.txw2.NamespaceResolver>;
					/**
					 * Constructs a new instance of the com.sun.xml.txw2.NamespaceResolver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getPrefix(string0: string): string;
					});
					public constructor();
					public getPrefix(string0: string): string;
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module txw2 {
				export class NamespaceSupport extends java.lang.Object {
					public static class: java.lang.Class<com.sun.xml.txw2.NamespaceSupport>;
					public static XMLNS: string;
					public static NSDECL: string;
					public reset(): void;
					public getPrefixes(uri: string): java.util.Enumeration<any>;
					public isNamespaceDeclUris(): boolean;
					public getDeclaredPrefixes(): java.util.Enumeration<any>;
					public pushContext(): void;
					public getURI(prefix: string): string;
					public constructor();
					public getPrefixes(): java.util.Enumeration<any>;
					public declarePrefix(prefix: string, uri: string): boolean;
					public popContext(): void;
					public setNamespaceDeclUris(value: boolean): void;
					public processName(qName: string, parts: native.Array<string>, isAttribute: boolean): native.Array<string>;
					public getPrefix(uri: string): string;
				}
				export module NamespaceSupport {
					export class Context extends java.lang.Object {
						public static class: java.lang.Class<com.sun.xml.txw2.NamespaceSupport.Context>;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module txw2 {
				export class Pcdata extends com.sun.xml.txw2.Text {
					public static class: java.lang.Class<com.sun.xml.txw2.Pcdata>;
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module txw2 {
				export class StartDocument extends com.sun.xml.txw2.Content {
					public static class: java.lang.Class<com.sun.xml.txw2.StartDocument>;
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module txw2 {
				export class StartTag extends com.sun.xml.txw2.Content implements com.sun.xml.txw2.NamespaceResolver {
					public static class: java.lang.Class<com.sun.xml.txw2.StartTag>;
					public addAttribute(nsUri: string, localName: string, object2: any): void;
					public getPrefix(nsUri: string): string;
					public written(): void;
					public addNamespaceDecl(uri: string, prefix: string, requirePrefix: boolean): com.sun.xml.txw2.NamespaceDecl;
					public constructor(owner: com.sun.xml.txw2.ContainerElement, uri: string, localName: string);
					public constructor(document: com.sun.xml.txw2.Document, uri: string, localName: string);
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module txw2 {
				export abstract class TXW extends java.lang.Object {
					public static class: java.lang.Class<com.sun.xml.txw2.TXW>;
					public static create(rootElement: java.lang.Class<any>, out: com.sun.xml.txw2.output.XmlSerializer): com.sun.xml.txw2.TypedXmlWriter;
					public static create(tagName: javax.xml.namespace.QName, rootElement: java.lang.Class<any>, out: com.sun.xml.txw2.output.XmlSerializer): com.sun.xml.txw2.TypedXmlWriter;
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module txw2 {
				export abstract class Text extends com.sun.xml.txw2.Content {
					public static class: java.lang.Class<com.sun.xml.txw2.Text>;
					public buffer: java.lang.StringBuilder;
					public constructor(document: com.sun.xml.txw2.Document, nsResolver: com.sun.xml.txw2.NamespaceResolver, obj: any);
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module txw2 {
				export class TxwException extends java.lang.RuntimeException {
					public static class: java.lang.Class<com.sun.xml.txw2.TxwException>;
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

declare module com {
	export module sun {
		export module xml {
			export module txw2 {
				export class TypedXmlWriter extends java.lang.Object {
					public static class: java.lang.Class<com.sun.xml.txw2.TypedXmlWriter>;
					/**
					 * Constructs a new instance of the com.sun.xml.txw2.TypedXmlWriter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
					public _element(qName0: javax.xml.namespace.QName, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
					public _cast(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
					public _attribute(qName0: javax.xml.namespace.QName, object1: any): void;
					public commit(): void;
					public _namespace(string0: string, string1: string): void;
					public _pcdata(object0: any): void;
					public _element(string0: string, class1: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
					public _comment(object0: any): void;
					public getDocument(): com.sun.xml.txw2.Document;
					public _element(class0: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
					public block(): void;
					public _attribute(string0: string, object1: any): void;
					public _cdata(object0: any): void;
					public commit(boolean0: boolean): void;
					public _namespace(string0: string): void;
					public _attribute(string0: string, string1: string, object2: any): void;
					public _namespace(string0: string, boolean1: boolean): void;
					public _element(string0: string, string1: string, class2: java.lang.Class<any>): com.sun.xml.txw2.TypedXmlWriter;
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module txw2 {
				export module annotation {
					export class XmlAttribute extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<com.sun.xml.txw2.annotation.XmlAttribute>;
						/**
						 * Constructs a new instance of the com.sun.xml.txw2.annotation.XmlAttribute interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							value(): string;
							ns(): string;
							equals(object0: any): boolean;
							hashCode(): number;
							toString(): string;
							annotationType(): java.lang.Class<any>;
						});
						public constructor();
						public value(): string;
						public equals(obj: any): boolean;
						public ns(): string;
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
			export module txw2 {
				export module annotation {
					export class XmlCDATA extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<com.sun.xml.txw2.annotation.XmlCDATA>;
						/**
						 * Constructs a new instance of the com.sun.xml.txw2.annotation.XmlCDATA interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
			export module txw2 {
				export module annotation {
					export class XmlElement extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<com.sun.xml.txw2.annotation.XmlElement>;
						/**
						 * Constructs a new instance of the com.sun.xml.txw2.annotation.XmlElement interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							value(): string;
							ns(): string;
							equals(object0: any): boolean;
							hashCode(): number;
							toString(): string;
							annotationType(): java.lang.Class<any>;
						});
						public constructor();
						public value(): string;
						public equals(obj: any): boolean;
						public ns(): string;
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
			export module txw2 {
				export module annotation {
					export class XmlNamespace extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<com.sun.xml.txw2.annotation.XmlNamespace>;
						/**
						 * Constructs a new instance of the com.sun.xml.txw2.annotation.XmlNamespace interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
			export module txw2 {
				export module annotation {
					export class XmlValue extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<com.sun.xml.txw2.annotation.XmlValue>;
						/**
						 * Constructs a new instance of the com.sun.xml.txw2.annotation.XmlValue interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
			export module txw2 {
				export module output {
					export class CharacterEscapeHandler extends java.lang.Object {
						public static class: java.lang.Class<com.sun.xml.txw2.output.CharacterEscapeHandler>;
						/**
						 * Constructs a new instance of the com.sun.xml.txw2.output.CharacterEscapeHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
			export module txw2 {
				export module output {
					export class DataWriter extends com.sun.xml.txw2.output.XMLWriter {
						public static class: java.lang.Class<com.sun.xml.txw2.output.DataWriter>;
						public startCDATA(): void;
						public error(e: org.xml.sax.SAXParseException): void;
						/** @deprecated */
						public getIndentStep(): number;
						public setIndentStep(s: string): void;
						public startDTD(name: string, publicId: string, systemId: string): void;
						public getParent(): org.xml.sax.XMLReader;
						public skippedEntity(name: string): void;
						public endPrefixMapping(prefix: string): void;
						public processingInstruction(target: string, data: string): void;
						public endElement(uri: string, localName: string, qName: string): void;
						public endCDATA(): void;
						public endDocument(): void;
						public constructor(writer: java.io.Writer, encoding: string, _escapeHandler: com.sun.xml.txw2.output.CharacterEscapeHandler);
						public endElement(localName: string): void;
						public endElement(uri: string, localName: string): void;
						/** @deprecated */
						public setIndentStep(indentStep: number): void;
						public startPrefixMapping(prefix: string, uri: string): void;
						public constructor(writer: java.io.Writer);
						public comment(ch: native.Array<string>, start: number, length: number): void;
						public warning(e: org.xml.sax.SAXParseException): void;
						public ignorableWhitespace(ch: native.Array<string>, start: number, length: number): void;
						public constructor();
						public endEntity(name: string): void;
						public startElement(uri: string, localName: string, qName: string, atts: org.xml.sax.Attributes): void;
						public startDocument(): void;
						public notationDecl(name: string, publicId: string, systemId: string): void;
						public startEntity(name: string): void;
						public endDTD(): void;
						public constructor(writer: java.io.Writer, encoding: string);
						public fatalError(e: org.xml.sax.SAXParseException): void;
						public constructor(parent: org.xml.sax.XMLReader);
						public setParent(parent: org.xml.sax.XMLReader): void;
						public startElement(uri: string, localName: string): void;
						public characters(ch: native.Array<string>, start: number, len: number): void;
						public characters(data: string): void;
						public resolveEntity(publicId: string, systemId: string): org.xml.sax.InputSource;
						public unparsedEntityDecl(name: string, publicId: string, systemId: string, notationName: string): void;
						public setDocumentLocator(locator: org.xml.sax.Locator): void;
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
			export module txw2 {
				export module output {
					export abstract class DelegatingXMLStreamWriter extends java.lang.Object {
						public static class: java.lang.Class<com.sun.xml.txw2.output.DelegatingXMLStreamWriter>;
						public getProperty(name: string): any;
						public writeStartDocument(encoding: string, version: string): void;
						public close(): void;
						public writeEmptyElement(localName: string): void;
						public writeCharacters(text: string): void;
						public writeAttribute(prefix: string, namespaceURI: string, localName: string, value: string): void;
						public constructor(writer: javax.xml.stream.XMLStreamWriter);
						public writeStartElement(prefix: string, localName: string, namespaceURI: string): void;
						public writeProcessingInstruction(target: string): void;
						public writeNamespace(prefix: string, namespaceURI: string): void;
						public writeComment(data: string): void;
						public writeStartElement(namespaceURI: string, localName: string): void;
						public writeEndDocument(): void;
						public setDefaultNamespace(uri: string): void;
						public writeCData(data: string): void;
						public writeAttribute(namespaceURI: string, localName: string, value: string): void;
						public setNamespaceContext(context: javax.xml.namespace.NamespaceContext): void;
						public setPrefix(prefix: string, uri: string): void;
						public writeEmptyElement(prefix: string, localName: string, namespaceURI: string): void;
						public flush(): void;
						public writeAttribute(localName: string, value: string): void;
						public writeDTD(dtd: string): void;
						public writeCharacters(text: native.Array<string>, start: number, len: number): void;
						public writeProcessingInstruction(target: string, data: string): void;
						public writeStartElement(localName: string): void;
						public writeDefaultNamespace(namespaceURI: string): void;
						public writeStartDocument(): void;
						public writeStartDocument(version: string): void;
						public writeEmptyElement(namespaceURI: string, localName: string): void;
						public writeEndElement(): void;
						public writeEntityRef(name: string): void;
						public getPrefix(uri: string): string;
						public getNamespaceContext(): javax.xml.namespace.NamespaceContext;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module txw2 {
				export module output {
					export class Dom2SaxAdapter extends java.lang.Object implements org.xml.sax.ContentHandler, org.xml.sax.ext.LexicalHandler {
						public static class: java.lang.Class<com.sun.xml.txw2.output.Dom2SaxAdapter>;
						public getCurrentElement(): org.w3c.dom.Element;
						public ignorableWhitespace(ch: native.Array<string>, start: number, length: number): void;
						public constructor();
						public endEntity(name: string): void;
						public startCDATA(): void;
						public startDocument(): void;
						public startEntity(name: string): void;
						public endDTD(): void;
						public startDTD(name: string, publicId: string, systemId: string): void;
						public startElement(namespace: string, localName: string, qName: string, attrs: org.xml.sax.Attributes): void;
						public constructor(node: org.w3c.dom.Node);
						public skippedEntity(name: string): void;
						public processingInstruction(target: string, data: string): void;
						public endPrefixMapping(prefix: string): void;
						public endDocument(): void;
						public endCDATA(): void;
						public endElement(namespace: string, localName: string, qName: string): void;
						public getDOM(): org.w3c.dom.Node;
						public startPrefixMapping(prefix: string, uri: string): void;
						public setDocumentLocator(locator: org.xml.sax.Locator): void;
						public comment(ch: native.Array<string>, start: number, length: number): void;
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
			export module txw2 {
				export module output {
					export class DomSerializer extends java.lang.Object implements com.sun.xml.txw2.output.XmlSerializer {
						public static class: java.lang.Class<com.sun.xml.txw2.output.DomSerializer>;
						public constructor(domResult: javax.xml.transform.dom.DOMResult);
						public writeAttribute(uri: string, localName: string, prefix: string, value: java.lang.StringBuilder): void;
						public writeXmlns(prefix: string, uri: string): void;
						public comment(comment: java.lang.StringBuilder): void;
						public endStartTag(uri: string, localName: string, prefix: string): void;
						public cdata(text: java.lang.StringBuilder): void;
						public startDocument(): void;
						public beginStartTag(uri: string, localName: string, prefix: string): void;
						public text(text: java.lang.StringBuilder): void;
						public flush(): void;
						public constructor(node: org.w3c.dom.Node);
						public endTag(): void;
						public endDocument(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module txw2 {
				export module output {
					export class DumbEscapeHandler extends java.lang.Object implements com.sun.xml.txw2.output.CharacterEscapeHandler {
						public static class: java.lang.Class<com.sun.xml.txw2.output.DumbEscapeHandler>;
						public static theInstance: com.sun.xml.txw2.output.CharacterEscapeHandler;
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
			export module txw2 {
				export module output {
					export class DumpSerializer extends java.lang.Object implements com.sun.xml.txw2.output.XmlSerializer {
						public static class: java.lang.Class<com.sun.xml.txw2.output.DumpSerializer>;
						public endTag(): void;
						public writeAttribute(uri: string, localName: string, prefix: string, value: java.lang.StringBuilder): void;
						public writeXmlns(prefix: string, uri: string): void;
						public comment(comment: java.lang.StringBuilder): void;
						public endStartTag(uri: string, localName: string, prefix: string): void;
						public cdata(text: java.lang.StringBuilder): void;
						public endDocument(): void;
						public startDocument(): void;
						public beginStartTag(uri: string, localName: string, prefix: string): void;
						public text(text: java.lang.StringBuilder): void;
						public flush(): void;
						public constructor(out: java.io.PrintStream);
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module txw2 {
				export module output {
					export class IndentingXMLFilter extends org.xml.sax.helpers.XMLFilterImpl implements org.xml.sax.ext.LexicalHandler {
						public static class: java.lang.Class<com.sun.xml.txw2.output.IndentingXMLFilter>;
						public startCDATA(): void;
						public error(e: org.xml.sax.SAXParseException): void;
						/** @deprecated */
						public getIndentStep(): number;
						public setIndentStep(s: string): void;
						public startDTD(name: string, publicId: string, systemId: string): void;
						public getParent(): org.xml.sax.XMLReader;
						public skippedEntity(name: string): void;
						public endPrefixMapping(prefix: string): void;
						public processingInstruction(target: string, data: string): void;
						public constructor(handler: org.xml.sax.ContentHandler, lexical: org.xml.sax.ext.LexicalHandler);
						public endElement(uri: string, localName: string, qName: string): void;
						public endCDATA(): void;
						public endDocument(): void;
						public setLexicalHandler(lexical: org.xml.sax.ext.LexicalHandler): void;
						/** @deprecated */
						public setIndentStep(indentStep: number): void;
						public startPrefixMapping(prefix: string, uri: string): void;
						public constructor(handler: org.xml.sax.ContentHandler);
						public comment(ch: native.Array<string>, start: number, length: number): void;
						public getLexicalHandler(): org.xml.sax.ext.LexicalHandler;
						public warning(e: org.xml.sax.SAXParseException): void;
						public ignorableWhitespace(ch: native.Array<string>, start: number, length: number): void;
						public constructor();
						public endEntity(name: string): void;
						public startElement(uri: string, localName: string, qName: string, atts: org.xml.sax.Attributes): void;
						public startDocument(): void;
						public notationDecl(name: string, publicId: string, systemId: string): void;
						public startEntity(name: string): void;
						public endDTD(): void;
						public fatalError(e: org.xml.sax.SAXParseException): void;
						public constructor(parent: org.xml.sax.XMLReader);
						public setParent(parent: org.xml.sax.XMLReader): void;
						public resolveEntity(publicId: string, systemId: string): org.xml.sax.InputSource;
						public unparsedEntityDecl(name: string, publicId: string, systemId: string, notationName: string): void;
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
			export module txw2 {
				export module output {
					export class IndentingXMLStreamWriter extends com.sun.xml.txw2.output.DelegatingXMLStreamWriter {
						public static class: java.lang.Class<com.sun.xml.txw2.output.IndentingXMLStreamWriter>;
						public writeStartDocument(encoding: string, version: string): void;
						/** @deprecated */
						public getIndentStep(): number;
						public writeEmptyElement(prefix: string, localName: string, namespaceURI: string): void;
						public writeEmptyElement(localName: string): void;
						public writeCharacters(text: string): void;
						public setIndentStep(s: string): void;
						public constructor(writer: javax.xml.stream.XMLStreamWriter);
						public writeStartElement(prefix: string, localName: string, namespaceURI: string): void;
						public writeCharacters(text: native.Array<string>, start: number, len: number): void;
						public writeStartElement(namespaceURI: string, localName: string): void;
						public writeStartDocument(): void;
						public writeStartDocument(version: string): void;
						public writeStartElement(localName: string): void;
						public writeEmptyElement(namespaceURI: string, localName: string): void;
						public writeEndElement(): void;
						public writeCData(data: string): void;
						/** @deprecated */
						public setIndentStep(indentStep: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module txw2 {
				export module output {
					export abstract class ResultFactory extends java.lang.Object {
						public static class: java.lang.Class<com.sun.xml.txw2.output.ResultFactory>;
						public static createSerializer(result: javax.xml.transform.Result): com.sun.xml.txw2.output.XmlSerializer;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module txw2 {
				export module output {
					export class SaxSerializer extends java.lang.Object implements com.sun.xml.txw2.output.XmlSerializer {
						public static class: java.lang.Class<com.sun.xml.txw2.output.SaxSerializer>;
						public writeXmlns(prefix: string, uri: string): void;
						public writeAttribute(uri: string, localName: string, prefix: string, value: java.lang.StringBuilder): void;
						public comment(comment: java.lang.StringBuilder): void;
						public endStartTag(uri: string, localName: string, prefix: string): void;
						public cdata(text: java.lang.StringBuilder): void;
						public startDocument(): void;
						public beginStartTag(uri: string, localName: string, prefix: string): void;
						public text(text: java.lang.StringBuilder): void;
						public flush(): void;
						public constructor(result: javax.xml.transform.sax.SAXResult);
						public endTag(): void;
						public endDocument(): void;
						public constructor(handler: org.xml.sax.ContentHandler, lex: org.xml.sax.ext.LexicalHandler);
						public constructor(handler: org.xml.sax.ContentHandler);
						public constructor(handler: org.xml.sax.ContentHandler, lex: org.xml.sax.ext.LexicalHandler, indenting: boolean);
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module txw2 {
				export module output {
					export class StaxSerializer extends java.lang.Object implements com.sun.xml.txw2.output.XmlSerializer {
						public static class: java.lang.Class<com.sun.xml.txw2.output.StaxSerializer>;
						public writeAttribute(uri: string, localName: string, prefix: string, value: java.lang.StringBuilder): void;
						public writeXmlns(prefix: string, uri: string): void;
						public comment(comment: java.lang.StringBuilder): void;
						public endStartTag(uri: string, localName: string, prefix: string): void;
						public cdata(text: java.lang.StringBuilder): void;
						public startDocument(): void;
						public beginStartTag(uri: string, localName: string, prefix: string): void;
						public text(text: java.lang.StringBuilder): void;
						public flush(): void;
						public constructor(writer: javax.xml.stream.XMLStreamWriter);
						public constructor(writer: javax.xml.stream.XMLStreamWriter, indenting: boolean);
						public endTag(): void;
						public endDocument(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module txw2 {
				export module output {
					export class StreamSerializer extends java.lang.Object implements com.sun.xml.txw2.output.XmlSerializer {
						public static class: java.lang.Class<com.sun.xml.txw2.output.StreamSerializer>;
						public constructor(streamResult: javax.xml.transform.stream.StreamResult);
						public writeAttribute(uri: string, localName: string, prefix: string, value: java.lang.StringBuilder): void;
						public writeXmlns(prefix: string, uri: string): void;
						public comment(comment: java.lang.StringBuilder): void;
						public endStartTag(uri: string, localName: string, prefix: string): void;
						public cdata(text: java.lang.StringBuilder): void;
						public startDocument(): void;
						public beginStartTag(uri: string, localName: string, prefix: string): void;
						public text(text: java.lang.StringBuilder): void;
						public constructor(out: java.io.OutputStream);
						public flush(): void;
						public endTag(): void;
						public endDocument(): void;
						public constructor(out: java.io.OutputStream, encoding: string);
						public constructor(out: java.io.Writer);
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module txw2 {
				export module output {
					export class TXWResult extends java.lang.Object implements javax.xml.transform.Result {
						public static class: java.lang.Class<com.sun.xml.txw2.output.TXWResult>;
						public getWriter(): com.sun.xml.txw2.TypedXmlWriter;
						public getSystemId(): string;
						public constructor(writer: com.sun.xml.txw2.TypedXmlWriter);
						public setSystemId(systemId: string): void;
						public setWriter(writer: com.sun.xml.txw2.TypedXmlWriter): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module txw2 {
				export module output {
					export class TXWSerializer extends java.lang.Object implements com.sun.xml.txw2.output.XmlSerializer {
						public static class: java.lang.Class<com.sun.xml.txw2.output.TXWSerializer>;
						public txw: com.sun.xml.txw2.TypedXmlWriter;
						public endTag(): void;
						public writeAttribute(uri: string, localName: string, prefix: string, value: java.lang.StringBuilder): void;
						public writeXmlns(prefix: string, uri: string): void;
						public comment(comment: java.lang.StringBuilder): void;
						public endStartTag(uri: string, localName: string, prefix: string): void;
						public endDocument(): void;
						public cdata(text: java.lang.StringBuilder): void;
						public startDocument(): void;
						public beginStartTag(uri: string, localName: string, prefix: string): void;
						public text(text: java.lang.StringBuilder): void;
						public flush(): void;
						public constructor(txw: com.sun.xml.txw2.TypedXmlWriter);
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module txw2 {
				export module output {
					export class XMLWriter extends org.xml.sax.helpers.XMLFilterImpl implements org.xml.sax.ext.LexicalHandler {
						public static class: java.lang.Class<com.sun.xml.txw2.output.XMLWriter>;
						public startCDATA(): void;
						public error(e: org.xml.sax.SAXParseException): void;
						public setHeader(_header: string): void;
						public setXmlDecl(_writeXmlDecl: boolean): void;
						public startDTD(name: string, publicId: string, systemId: string): void;
						public dataElement(uri: string, localName: string, content: string): void;
						public getParent(): org.xml.sax.XMLReader;
						public skippedEntity(name: string): void;
						public processingInstruction(target: string, data: string): void;
						public dataElement(uri: string, localName: string, qName: string, atts: org.xml.sax.Attributes, content: string): void;
						public endPrefixMapping(prefix: string): void;
						public endElement(uri: string, localName: string, qName: string): void;
						public endDocument(): void;
						public endCDATA(): void;
						public constructor(writer: java.io.Writer, encoding: string, _escapeHandler: com.sun.xml.txw2.output.CharacterEscapeHandler);
						public endElement(localName: string): void;
						public endElement(uri: string, localName: string): void;
						public startPrefixMapping(prefix: string, uri: string): void;
						public comment(ch: native.Array<string>, start: number, length: number): void;
						public warning(e: org.xml.sax.SAXParseException): void;
						public ignorableWhitespace(ch: native.Array<string>, start: number, length: number): void;
						public constructor();
						public endEntity(name: string): void;
						public startElement(uri: string, localName: string, qName: string, atts: org.xml.sax.Attributes): void;
						public startDocument(): void;
						public notationDecl(name: string, publicId: string, systemId: string): void;
						public startEntity(name: string): void;
						public flush(): void;
						public endDTD(): void;
						public constructor(writer: java.io.Writer, encoding: string);
						public fatalError(e: org.xml.sax.SAXParseException): void;
						public setEncoding(encoding: string): void;
						public dataElement(localName: string, content: string): void;
						public constructor(parent: org.xml.sax.XMLReader);
						public setParent(parent: org.xml.sax.XMLReader): void;
						public startElement(uri: string, localName: string): void;
						public characters(ch: native.Array<string>, start: number, len: number): void;
						public characters(data: string): void;
						public setOutput(writer: java.io.Writer, _encoding: string): void;
						public resolveEntity(publicId: string, systemId: string): org.xml.sax.InputSource;
						public unparsedEntityDecl(name: string, publicId: string, systemId: string, notationName: string): void;
						public setDocumentLocator(locator: org.xml.sax.Locator): void;
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
			export module txw2 {
				export module output {
					export class XmlSerializer extends java.lang.Object {
						public static class: java.lang.Class<com.sun.xml.txw2.output.XmlSerializer>;
						/**
						 * Constructs a new instance of the com.sun.xml.txw2.output.XmlSerializer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							startDocument(): void;
							beginStartTag(string0: string, string1: string, string2: string): void;
							writeAttribute(string0: string, string1: string, string2: string, stringBuilder3: java.lang.StringBuilder): void;
							writeXmlns(string0: string, string1: string): void;
							endStartTag(string0: string, string1: string, string2: string): void;
							endTag(): void;
							text(stringBuilder0: java.lang.StringBuilder): void;
							cdata(stringBuilder0: java.lang.StringBuilder): void;
							comment(stringBuilder0: java.lang.StringBuilder): void;
							endDocument(): void;
							flush(): void;
						});
						public constructor();
						public endTag(): void;
						public cdata(stringBuilder0: java.lang.StringBuilder): void;
						public writeXmlns(string0: string, string1: string): void;
						public endDocument(): void;
						public startDocument(): void;
						public beginStartTag(string0: string, string1: string, string2: string): void;
						public text(stringBuilder0: java.lang.StringBuilder): void;
						public flush(): void;
						public endStartTag(string0: string, string1: string, string2: string): void;
						public comment(stringBuilder0: java.lang.StringBuilder): void;
						public writeAttribute(string0: string, string1: string, string2: string, stringBuilder3: java.lang.StringBuilder): void;
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
//com.sun.xml.txw2.DatatypeWriter:1

