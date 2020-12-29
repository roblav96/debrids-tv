declare class ModuleInfo extends java.lang.Object {
	public static class: java.lang.Class<ModuleInfo>;
}

declare module org {
	export module jvnet {
		export module staxex {
			export class Base64Data extends java.lang.Object implements java.lang.CharSequence, java.lang.Cloneable {
				public static class: java.lang.Class<org.jvnet.staxex.Base64Data>;
				public clone(): org.jvnet.staxex.Base64Data;
				public set(data: native.Array<number>, len: number, mimeType: string, cloneByRef: boolean): void;
				public getDataLen(): number;
				public getHrefCid(): string;
				public codePoints(): java.util.stream.IntStream;
				public set(data: native.Array<number>, mimeType: string): void;
				public constructor();
				public hasData(): boolean;
				public getExact(): native.Array<number>;
				public getMimeType(): string;
				public set(data: native.Array<number>, len: number, mimeType: string): void;
				public clone(): any;
				public charAt(index: number): string;
				public writeTo(output: javax.xml.stream.XMLStreamWriter): void;
				public set(data: javax.activation.DataHandler): void;
				public constructor(that: org.jvnet.staxex.Base64Data);
				public getDataHandler(): javax.activation.DataHandler;
				public writeTo(buf: native.Array<string>, start: number): void;
				public getInputStream(): java.io.InputStream;
				public get(): native.Array<number>;
				public length(): number;
				public subSequence(start: number, end: number): string;
				public chars(): java.util.stream.IntStream;
				public toString(): string;
				public setHrefCid(cid: string): void;
			}
			export module Base64Data {
				export class Base64DataSource extends java.lang.Object implements javax.activation.DataSource {
					public static class: java.lang.Class<org.jvnet.staxex.Base64Data.Base64DataSource>;
					public getName(): string;
					public getOutputStream(): java.io.OutputStream;
					public getInputStream(): java.io.InputStream;
					public getContentType(): string;
				}
				export class Base64StreamingDataHandler extends org.jvnet.staxex.StreamingDataHandler {
					public static class: java.lang.Class<org.jvnet.staxex.Base64Data.Base64StreamingDataHandler>;
					public moveTo(file0: java.io.File): void;
					public readOnce(): java.io.InputStream;
					public close(): void;
					public moveTo(dst: java.io.File): void;
				}
				export class FilterDataHandler extends org.jvnet.staxex.StreamingDataHandler {
					public static class: java.lang.Class<org.jvnet.staxex.Base64Data.FilterDataHandler>;
					public moveTo(file0: java.io.File): void;
					public readOnce(): java.io.InputStream;
					public close(): void;
					public moveTo(dst: java.io.File): void;
				}
			}
		}
	}
}

declare module org {
	export module jvnet {
		export module staxex {
			export class Base64Encoder extends java.lang.Object {
				public static class: java.lang.Class<org.jvnet.staxex.Base64Encoder>;
				public static print(input: native.Array<number>, offset: number, len: number, buf: native.Array<string>, ptr: number): number;
				public static encodeByte(i: number): number;
				public static print(input: native.Array<number>, offset: number, len: number): string;
				public static encode(i: number): string;
			}
		}
	}
}

declare module org {
	export module jvnet {
		export module staxex {
			export class Base64EncoderStream extends java.io.FilterOutputStream {
				public static class: java.lang.Class<org.jvnet.staxex.Base64EncoderStream>;
				public constructor(outWriter: javax.xml.stream.XMLStreamWriter, out: java.io.OutputStream);
				public write(b: number): void;
				public close(): void;
				public constructor(out: java.io.OutputStream);
				public write(c: number): void;
				public write(b: native.Array<number>): void;
				public write(b: native.Array<number>, off: number, len: number): void;
				public constructor();
				public flush(): void;
			}
		}
	}
}

declare module org {
	export module jvnet {
		export module staxex {
			export class BinaryText extends java.lang.Object {
				public static class: java.lang.Class<org.jvnet.staxex.BinaryText>;
				/**
				 * Constructs a new instance of the org.jvnet.staxex.BinaryText interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getHref(): string;
					getDataHandler(): javax.activation.DataHandler;
				});
				public constructor();
				public getDataHandler(): javax.activation.DataHandler;
				public getHref(): string;
			}
		}
	}
}

declare module org {
	export module jvnet {
		export module staxex {
			export class ByteArrayOutputStreamEx extends java.io.ByteArrayOutputStream {
				public static class: java.lang.Class<org.jvnet.staxex.ByteArrayOutputStreamEx>;
				public readFrom(is: java.io.InputStream): void;
				public close(): void;
				public constructor(size: number);
				public set(dt: org.jvnet.staxex.Base64Data, mimeType: string): void;
				public constructor();
				public getBuffer(): native.Array<number>;
				public flush(): void;
			}
		}
	}
}

declare module org {
	export module jvnet {
		export module staxex {
			export class MtomEnabled extends java.lang.Object {
				public static class: java.lang.Class<org.jvnet.staxex.MtomEnabled>;
				/**
				 * Constructs a new instance of the org.jvnet.staxex.MtomEnabled interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					addBinaryText(bytes0: native.Array<number>): org.jvnet.staxex.BinaryText;
					addBinaryText(string0: string, bytes1: native.Array<number>): org.jvnet.staxex.BinaryText;
					addBinaryText(string0: string, dataHandler1: javax.activation.DataHandler): org.jvnet.staxex.BinaryText;
				});
				public constructor();
				public addBinaryText(string0: string, dataHandler1: javax.activation.DataHandler): org.jvnet.staxex.BinaryText;
				public addBinaryText(string0: string, bytes1: native.Array<number>): org.jvnet.staxex.BinaryText;
				public addBinaryText(bytes0: native.Array<number>): org.jvnet.staxex.BinaryText;
			}
		}
	}
}

declare module org {
	export module jvnet {
		export module staxex {
			export class NamespaceContextEx extends java.lang.Object {
				public static class: java.lang.Class<org.jvnet.staxex.NamespaceContextEx>;
				/**
				 * Constructs a new instance of the org.jvnet.staxex.NamespaceContextEx interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					iterator(): java.util.Iterator<org.jvnet.staxex.NamespaceContextEx.Binding>;
					getNamespaceURI(string0: string): string;
					getPrefix(string0: string): string;
					getPrefixes(string0: string): java.util.Iterator<any>;
					iterator(): java.util.Iterator<any>;
					forEach(action: any /* any*/): void;
					spliterator(): java.util.Spliterator<any>;
				});
				public constructor();
				public getPrefix(string0: string): string;
				public spliterator(): java.util.Spliterator<any>;
				public getPrefixes(string0: string): java.util.Iterator<any>;
				public iterator(): java.util.Iterator<org.jvnet.staxex.NamespaceContextEx.Binding>;
				public iterator(): java.util.Iterator<any>;
				public forEach(action: any /* any*/): void;
				public getNamespaceURI(string0: string): string;
			}
			export module NamespaceContextEx {
				export class Binding extends java.lang.Object {
					public static class: java.lang.Class<org.jvnet.staxex.NamespaceContextEx.Binding>;
					/**
					 * Constructs a new instance of the org.jvnet.staxex.NamespaceContextEx() when extending the interface class.
					 */
					public constructor(implementation: {
						getPrefix(): string;
						getNamespaceURI(): string;
					});
					public constructor();
					public getNamespaceURI(): string;
					public getPrefix(): string;
				}
			}
		}
	}
}

declare module org {
	export module jvnet {
		export module staxex {
			export class StAxSOAPBody extends java.lang.Object {
				public static class: java.lang.Class<org.jvnet.staxex.StAxSOAPBody>;
				/**
				 * Constructs a new instance of the org.jvnet.staxex.StAxSOAPBody interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					setPayload(payload0: org.jvnet.staxex.StAxSOAPBody.Payload): void;
					getPayload(): org.jvnet.staxex.StAxSOAPBody.Payload;
					hasStaxPayload(): boolean;
				});
				public constructor();
				public hasStaxPayload(): boolean;
				public getPayload(): org.jvnet.staxex.StAxSOAPBody.Payload;
				public setPayload(payload0: org.jvnet.staxex.StAxSOAPBody.Payload): void;
			}
			export module StAxSOAPBody {
				export class Payload extends java.lang.Object {
					public static class: java.lang.Class<org.jvnet.staxex.StAxSOAPBody.Payload>;
					/**
					 * Constructs a new instance of the org.jvnet.staxex.StAxSOAPBody() when extending the interface class.
					 */
					public constructor(implementation: {
						getPayloadQName(): javax.xml.namespace.QName;
						readPayload(): javax.xml.stream.XMLStreamReader;
						writePayloadTo(xMLStreamWriter0: javax.xml.stream.XMLStreamWriter): void;
						getPayloadAttributeValue(string0: string): string;
						getPayloadAttributeValue(qName0: javax.xml.namespace.QName): string;
						materialize(): void;
					});
					public constructor();
					public writePayloadTo(xMLStreamWriter0: javax.xml.stream.XMLStreamWriter): void;
					public getPayloadQName(): javax.xml.namespace.QName;
					public getPayloadAttributeValue(string0: string): string;
					public getPayloadAttributeValue(qName0: javax.xml.namespace.QName): string;
					public materialize(): void;
					public readPayload(): javax.xml.stream.XMLStreamReader;
				}
			}
		}
	}
}

declare module org {
	export module jvnet {
		export module staxex {
			export abstract class StreamingDataHandler extends javax.activation.DataHandler implements java.io.Closeable {
				public static class: java.lang.Class<org.jvnet.staxex.StreamingDataHandler>;
				public constructor(ds: javax.activation.DataSource);
				public close(): void;
				public constructor(o: any, s: string);
				public constructor(obj: any, mimeType: string);
				public getHrefCid(): string;
				public constructor(url: java.net.URL);
				public constructor(dataSource: javax.activation.DataSource);
				public setHrefCid(cid: string): void;
				public moveTo(file0: java.io.File): void;
				public readOnce(): java.io.InputStream;
			}
		}
	}
}

declare module org {
	export module jvnet {
		export module staxex {
			export class XMLStreamReaderEx extends java.lang.Object {
				public static class: java.lang.Class<org.jvnet.staxex.XMLStreamReaderEx>;
				/**
				 * Constructs a new instance of the org.jvnet.staxex.XMLStreamReaderEx interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getPCDATA(): string;
					getNamespaceContext(): org.jvnet.staxex.NamespaceContextEx;
					getElementTextTrim(): string;
				});
				public constructor();
				public getPCDATA(): string;
				public getElementTextTrim(): string;
				public getNamespaceContext(): org.jvnet.staxex.NamespaceContextEx;
			}
		}
	}
}

declare module org {
	export module jvnet {
		export module staxex {
			export class XMLStreamWriterEx extends java.lang.Object {
				public static class: java.lang.Class<org.jvnet.staxex.XMLStreamWriterEx>;
				/**
				 * Constructs a new instance of the org.jvnet.staxex.XMLStreamWriterEx interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					writeBinary(bytes0: native.Array<number>, int1: number, int2: number, string3: string): void;
					writeBinary(dataHandler0: javax.activation.DataHandler): void;
					writeBinary(string0: string): java.io.OutputStream;
					writePCDATA(charSequence0: string): void;
					getNamespaceContext(): org.jvnet.staxex.NamespaceContextEx;
				});
				public constructor();
				public writePCDATA(charSequence0: string): void;
				public writeBinary(string0: string): java.io.OutputStream;
				public writeBinary(bytes0: native.Array<number>, int1: number, int2: number, string3: string): void;
				public getNamespaceContext(): org.jvnet.staxex.NamespaceContextEx;
				public writeBinary(dataHandler0: javax.activation.DataHandler): void;
			}
		}
	}
}

declare module org {
	export module jvnet {
		export module staxex {
			export module util {
				export class DOMStreamReader extends java.lang.Object implements javax.xml.namespace.NamespaceContext {
					public static class: java.lang.Class<org.jvnet.staxex.util.DOMStreamReader>;
					public _current: org.w3c.dom.Node;
					public wholeText: string;
					public scopes: native.Array<org.jvnet.staxex.util.DOMStreamReader.Scope>;
					public depth: number;
					public _state: number;
					public getNamespaceContext(): javax.xml.namespace.NamespaceContext;
					public getTextStart(): number;
					public hasNext(): boolean;
					public getAttributeCount(): number;
					public getAttributeType(index: number): string;
					public constructor();
					public getPrefix(nsUri: string): string;
					public isStandalone(): boolean;
					public close(): void;
					public getAttributeValue(index: number): string;
					public getNamespacePrefix(index: number): string;
					public getAttributeValue(namespaceURI: string, localName: string): string;
					public getLocation(): javax.xml.stream.Location;
					public isStartElement(): boolean;
					public getText(): string;
					public _next(): number;
					public standaloneSet(): boolean;
					public isEndElement(): boolean;
					public setCurrentNode(node: org.w3c.dom.Node): void;
					public constructor(node: org.w3c.dom.Node);
					public getCharacterEncodingScheme(): string;
					public isAttributeSpecified(param: number): boolean;
					public getAttributeName(index: number): javax.xml.namespace.QName;
					public getTextCharacters(): native.Array<string>;
					public getVersion(): string;
					public hasName(): boolean;
					public getNamespaceURI(): string;
					public getAttributeNamespace(index: number): string;
					public getNamespaceCount(): number;
					public getPrefix(): string;
					public require(type: number, namespaceURI: string, localName: string): void;
					public getTextCharacters(sourceStart: number, target: native.Array<string>, targetStart: number, targetLength: number): number;
					public nextTag(): number;
					public hasText(): boolean;
					public next(): number;
					public getAttributeLocalName(index: number): string;
					public getName(): javax.xml.namespace.QName;
					public getNamespaceURI(prefix: string): string;
					public getAttributePrefix(index: number): string;
					public isCharacters(): boolean;
					public getPITarget(): string;
					public splitAttributes(): void;
					public getElementText(): string;
					public getPrefixes(nsUri: string): java.util.Iterator<any>;
					public getTextLength(): number;
					public getEncoding(): string;
					public getPIData(): string;
					public getEventType(): number;
					public getNamespaceURI(index: number): string;
					public isWhiteSpace(): boolean;
					public getLocalName(): string;
					public getProperty(str: string): any;
				}
				export module DOMStreamReader {
					export class Scope extends java.lang.Object {
						public static class: java.lang.Class<org.jvnet.staxex.util.DOMStreamReader.Scope>;
					}
				}
			}
		}
	}
}

declare module org {
	export module jvnet {
		export module staxex {
			export module util {
				export class DummyLocation extends java.lang.Object {
					public static class: java.lang.Class<org.jvnet.staxex.util.DummyLocation>;
					public static INSTANCE: javax.xml.stream.Location;
					public getLineNumber(): number;
					public getPublicId(): string;
					public getColumnNumber(): number;
					public getCharacterOffset(): number;
					public getSystemId(): string;
				}
			}
		}
	}
}

declare module org {
	export module jvnet {
		export module staxex {
			export module util {
				export class FinalArrayList<T>  extends java.util.ArrayList<any> {
					public static class: java.lang.Class<org.jvnet.staxex.util.FinalArrayList<any>>;
					public toArray(a: native.Array<any>): native.Array<any>;
					public isEmpty(): boolean;
					public spliterator(): java.util.Spliterator<any>;
					public subList(fromIndex: number, toIndex: number): java.util.List<any>;
					public addAll(c: java.util.Collection<any>): boolean;
					public get(index: number): any;
					public set(index: number, element: any): any;
					public size(): number;
					public equals(o: any): boolean;
					public remove(index: number): any;
					public constructor(c: java.util.Collection<any>);
					public contains(o: any): boolean;
					public lastIndexOf(o: any): number;
					public iterator(): java.util.Iterator<any>;
					public removeAll(c: java.util.Collection<any>): boolean;
					public constructor(initialCapacity: number);
					public constructor();
					public toArray(): native.Array<any>;
					public clear(): void;
					public remove(o: any): boolean;
					public containsAll(c: java.util.Collection<any>): boolean;
					public listIterator(index: number): java.util.ListIterator<any>;
					public hashCode(): number;
					public constructor(collection: java.util.Collection<any>);
					public parallelStream(): java.util.stream.Stream<any>;
					public add(e: any): boolean;
					public retainAll(c: java.util.Collection<any>): boolean;
					public sort(c: java.util.Comparator<any>): void;
					public indexOf(o: any): number;
					public add(index: number, element: any): void;
					public removeIf(filter: any /* any*/): boolean;
					public addAll(index: number, c: java.util.Collection<any>): boolean;
					public listIterator(): java.util.ListIterator<any>;
					public stream(): java.util.stream.Stream<any>;
					public replaceAll(operator: any /* any*/): void;
				}
			}
		}
	}
}

declare module org {
	export module jvnet {
		export module staxex {
			export module util {
				export class MtomStreamWriter extends java.lang.Object {
					public static class: java.lang.Class<org.jvnet.staxex.util.MtomStreamWriter>;
					/**
					 * Constructs a new instance of the org.jvnet.staxex.util.MtomStreamWriter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getAttachmentMarshaller(): javax.xml.bind.attachment.AttachmentMarshaller;
					});
					public constructor();
					public getAttachmentMarshaller(): javax.xml.bind.attachment.AttachmentMarshaller;
				}
			}
		}
	}
}

declare module org {
	export module jvnet {
		export module staxex {
			export module util {
				export class XMLStreamReaderToXMLStreamWriter extends java.lang.Object {
					public static class: java.lang.Class<org.jvnet.staxex.util.XMLStreamReaderToXMLStreamWriter>;
					public in: javax.xml.stream.XMLStreamReader;
					public out: javax.xml.stream.XMLStreamWriter;
					public handleCDATA(): void;
					public bridge(breakPoint: org.jvnet.staxex.util.XMLStreamReaderToXMLStreamWriter.Breakpoint): void;
					public handleEntityReference(): void;
					public bridge(in0: javax.xml.stream.XMLStreamReader, out: javax.xml.stream.XMLStreamWriter): void;
					public handleStartElement(): void;
					public handleEndElement(): void;
					public handleSpace(): void;
					public handleAttribute(i: number): void;
					public handlePI(): void;
					public handleDTD(): void;
					public constructor();
					public handleComment(): void;
					public handleCharacters(): void;
				}
				export module XMLStreamReaderToXMLStreamWriter {
					export class Breakpoint extends java.lang.Object {
						public static class: java.lang.Class<org.jvnet.staxex.util.XMLStreamReaderToXMLStreamWriter.Breakpoint>;
						public proceedAfterStartElement(): boolean;
						public proceedBeforeStartElement(): boolean;
						public constructor(r: javax.xml.stream.XMLStreamReader, w: javax.xml.stream.XMLStreamWriter);
						public writer(): javax.xml.stream.XMLStreamWriter;
						public reader(): javax.xml.stream.XMLStreamReader;
					}
				}
			}
		}
	}
}

//Generics information:
//org.jvnet.staxex.util.FinalArrayList:1

