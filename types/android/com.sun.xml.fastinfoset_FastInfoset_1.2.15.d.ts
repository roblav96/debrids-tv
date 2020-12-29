declare module com {
	export module sun {
		export module xml {
			export module fastinfoset {
				export abstract class AbstractResourceBundle extends java.util.ResourceBundle {
					public static class: java.lang.Class<com.sun.xml.fastinfoset.AbstractResourceBundle>;
					public static LOCALE: string;
					public getKeys(): java.util.Enumeration<string>;
					public static getBundle(baseName: string, targetLocale: java.util.Locale, loader: java.lang.ClassLoader, control: java.util.ResourceBundle.Control): java.util.ResourceBundle;
					public getBundle(): java.util.ResourceBundle;
					public static getBundle(baseName: string, locale: java.util.Locale): java.util.ResourceBundle;
					public getString(key: string): string;
					public static parseLocale(localeString: string): java.util.Locale;
					public handleGetObject(key: string): any;
					public static getBundle(baseName: string, targetLocale: java.util.Locale, control: java.util.ResourceBundle.Control): java.util.ResourceBundle;
					public constructor();
					public handleGetObject(string0: string): any;
					public getKeys(): java.util.Enumeration<any>;
					public getString(key: string, objects1: native.Array<any>): string;
					public static getBundle(baseName: string): java.util.ResourceBundle;
					public static getBundle(baseName: string, control: java.util.ResourceBundle.Control): java.util.ResourceBundle;
					public static getBundle(baseName: string, locale: java.util.Locale, loader: java.lang.ClassLoader): java.util.ResourceBundle;
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module fastinfoset {
				export class CommonResourceBundle extends com.sun.xml.fastinfoset.AbstractResourceBundle {
					public static class: java.lang.Class<com.sun.xml.fastinfoset.CommonResourceBundle>;
					public static BASE_NAME: string;
					public static getBundle(baseName: string, targetLocale: java.util.Locale, control: java.util.ResourceBundle.Control): java.util.ResourceBundle;
					public static getBundle(baseName: string, targetLocale: java.util.Locale, loader: java.lang.ClassLoader, control: java.util.ResourceBundle.Control): java.util.ResourceBundle;
					public constructor();
					public static getInstance(locale: java.util.Locale): com.sun.xml.fastinfoset.CommonResourceBundle;
					public getBundle(): java.util.ResourceBundle;
					public getBundle(locale: java.util.Locale): java.util.ResourceBundle;
					public static getInstance(): com.sun.xml.fastinfoset.CommonResourceBundle;
					public static getBundle(baseName: string): java.util.ResourceBundle;
					public static getBundle(baseName: string, control: java.util.ResourceBundle.Control): java.util.ResourceBundle;
					public static getBundle(baseName: string, locale: java.util.Locale): java.util.ResourceBundle;
					public static getBundle(baseName: string, locale: java.util.Locale, loader: java.lang.ClassLoader): java.util.ResourceBundle;
					public constructor(locale: java.util.Locale);
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module fastinfoset {
				export abstract class Decoder extends java.lang.Object implements org.jvnet.fastinfoset.FastInfosetParser {
					public static class: java.lang.Class<com.sun.xml.fastinfoset.Decoder>;
					public static STRING_INTERNING_SYSTEM_PROPERTY: string;
					public static BUFFER_SIZE_SYSTEM_PROPERTY: string;
					public _parseFragments: boolean;
					public _needForceStreamClose: boolean;
					public _notations: java.util.List<any>;
					public _unparsedEntities: java.util.List<any>;
					public _registeredEncodingAlgorithms: java.util.Map<any,any>;
					public _v: com.sun.xml.fastinfoset.vocab.ParserVocabulary;
					public _prefixTable: com.sun.xml.fastinfoset.util.PrefixArray;
					public _elementNameTable: com.sun.xml.fastinfoset.util.QualifiedNameArray;
					public _attributeNameTable: com.sun.xml.fastinfoset.util.QualifiedNameArray;
					public _characterContentChunkTable: com.sun.xml.fastinfoset.util.ContiguousCharArrayArray;
					public _attributeValueTable: com.sun.xml.fastinfoset.util.StringArray;
					public _b: number;
					public _terminate: boolean;
					public _doubleTerminate: boolean;
					public _addToTable: boolean;
					public _integer: number;
					public _identifier: number;
					public _bufferSize: number;
					public _octetBuffer: native.Array<number>;
					public _octetBufferStart: number;
					public _octetBufferOffset: number;
					public _octetBufferEnd: number;
					public _octetBufferLength: number;
					public _charBuffer: native.Array<string>;
					public _charBufferLength: number;
					public _duplicateAttributeVerifier: com.sun.xml.fastinfoset.util.DuplicateAttributeVerifier;
					public static NISTRING_STRING: number;
					public static NISTRING_INDEX: number;
					public static NISTRING_ENCODING_ALGORITHM: number;
					public static NISTRING_EMPTY_STRING: number;
					public _prefixIndex: number;
					public _namespaceNameIndex: number;
					/** @deprecated */
					public getExternalVocabularies(): java.util.Map<any,any>;
					public decodeIdentifyingNonEmptyStringIndexOnFirstBitAsPrefix(namespaceNamePresent: boolean): string;
					public decodeUtf8StringAsString(): string;
					public decodeIntegerIndexOnSecondBit(): number;
					public setBufferSize(bufferSize: number): void;
					public decodeNonEmptyOctetStringOnSecondBitAsUtf8CharArray(): void;
					public decodeUtf16StringAsCharBuffer(): void;
					public getStringInterning(): boolean;
					public decodeDII(): void;
					public decodeRAOctetsAsString(restrictedAlphabet: native.Array<string>): string;
					public closeIfRequired(): void;
					public decodeUnparsedEntities(): void;
					public decodeUtf16StringAsString(): string;
					public constructor();
					public decodeUtf8NCNameIntoCharBuffer(): void;
					public getParseFragments(): boolean;
					public decodeUtf8StringAsCharBuffer(ch: native.Array<string>, offset: number): void;
					public peek2(octetBufferListener: com.sun.xml.fastinfoset.OctetBufferListener): number;
					public decodeCharacterEncodingScheme(): string;
					public decodeEIIIndexMedium(): com.sun.xml.fastinfoset.QualifiedName;
					public decodeNonIdentifyingStringOnFirstBit(): number;
					public decodeUtf8StringIntoCharBuffer(): void;
					public decodeAdditionalData(): void;
					public peek(): number;
					public decodeHeader(): void;
					public decodeAlphabetOctetsAsCharBuffer(restrictedAlphabet: native.Array<string>): void;
					public decodeUtf8StringIntoCharBuffer(ch: native.Array<string>, offset: number): void;
					public decodeIdentifyingNonEmptyStringIndexOnFirstBitAsNamespaceName(prefixPresent: boolean): string;
					public _isFastInfosetDocument(): boolean;
					public decodeFourBitAlphabetOctetsAsCharBuffer(restrictedAlphabet: native.Array<string>): void;
					public decodeVersion(): string;
					public getExternalVocabularies(): java.util.Map<any,any>;
					public decodeRestrictedAlphabetAsString(): string;
					public setParseFragments(parseFragments: boolean): void;
					public decodeIdentifyingNonEmptyStringOnFirstBitAsPrefix(namespaceNamePresent: boolean): string;
					public decodeNonEmptyOctetStringLengthOnSecondBit(): void;
					public decodeRestrictedAlphabetAsCharBuffer(): void;
					public decodeLiteralQualifiedName(state: number, q: com.sun.xml.fastinfoset.QualifiedName): com.sun.xml.fastinfoset.QualifiedName;
					public setInputStream(s: java.io.InputStream): void;
					public getRegisteredEncodingAlgorithms(): java.util.Map<any,any>;
					public decodeUtf8StringAsCharBuffer(): void;
					public getBufferSize(): number;
					public decodeOctetsOnSeventhBitOfNonIdentifyingStringOnThirdBit(b: number): void;
					public setRegisteredEncodingAlgorithms(algorithms: java.util.Map<any,any>): void;
					public setStringInterning(stringInterning: boolean): void;
					public decodeIdentifyingNonEmptyStringOnFirstBit(table: com.sun.xml.fastinfoset.util.StringArray): string;
					public setVocabulary(v: com.sun.xml.fastinfoset.vocab.ParserVocabulary): void;
					public decodeNonEmptyOctetStringOnSecondBitAsUtf8String(): string;
					public decodeNotations(): void;
					public setExternalVocabularies(referencedVocabualries: java.util.Map<any,any>): void;
					public read(): number;
					public reset(): void;
					public decodeOctetsOnFifthBitOfNonIdentifyingStringOnFirstBit(b: number): void;
					public decodeIdentifyingNonEmptyStringOnFirstBitAsNamespaceName(prefixPresent: boolean): string;
					public static isFastInfosetDocument(s: java.io.InputStream): boolean;
					public decodeEIIIndexLarge(): com.sun.xml.fastinfoset.QualifiedName;
					public peek(octetBufferListener: com.sun.xml.fastinfoset.OctetBufferListener): number;
					public getForceStreamClose(): boolean;
					public createQualifiedNameString(second: string): string;
					public decodeInitialVocabulary(): void;
					public setForceStreamClose(needForceStreamClose: boolean): void;
					public createQualifiedNameString(first: native.Array<string>, second: string): string;
				}
				export module Decoder {
					export class EncodingAlgorithmInputStream extends java.io.InputStream {
						public static class: java.lang.Class<com.sun.xml.fastinfoset.Decoder.EncodingAlgorithmInputStream>;
						public constructor(this0: com.sun.xml.fastinfoset.Decoder);
						public read(): number;
						public constructor();
						public read(b: native.Array<number>): number;
						public close(): void;
						public read(b: native.Array<number>, off: number, len: number): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module fastinfoset {
				export class DecoderStateTables extends java.lang.Object {
					public static class: java.lang.Class<com.sun.xml.fastinfoset.DecoderStateTables>;
					public static STATE_ILLEGAL: number;
					public static STATE_UNSUPPORTED: number;
					public static EII_NO_AIIS_INDEX_SMALL: number;
					public static EII_AIIS_INDEX_SMALL: number;
					public static EII_INDEX_MEDIUM: number;
					public static EII_INDEX_LARGE: number;
					public static EII_NAMESPACES: number;
					public static EII_LITERAL: number;
					public static CII_UTF8_SMALL_LENGTH: number;
					public static CII_UTF8_MEDIUM_LENGTH: number;
					public static CII_UTF8_LARGE_LENGTH: number;
					public static CII_UTF16_SMALL_LENGTH: number;
					public static CII_UTF16_MEDIUM_LENGTH: number;
					public static CII_UTF16_LARGE_LENGTH: number;
					public static CII_RA: number;
					public static CII_EA: number;
					public static CII_INDEX_SMALL: number;
					public static CII_INDEX_MEDIUM: number;
					public static CII_INDEX_LARGE: number;
					public static CII_INDEX_LARGE_LARGE: number;
					public static COMMENT_II: number;
					public static PROCESSING_INSTRUCTION_II: number;
					public static DOCUMENT_TYPE_DECLARATION_II: number;
					public static UNEXPANDED_ENTITY_REFERENCE_II: number;
					public static TERMINATOR_SINGLE: number;
					public static TERMINATOR_DOUBLE: number;
					public static AII_INDEX_SMALL: number;
					public static AII_INDEX_MEDIUM: number;
					public static AII_INDEX_LARGE: number;
					public static AII_LITERAL: number;
					public static AII_TERMINATOR_SINGLE: number;
					public static AII_TERMINATOR_DOUBLE: number;
					public static NISTRING_UTF8_SMALL_LENGTH: number;
					public static NISTRING_UTF8_MEDIUM_LENGTH: number;
					public static NISTRING_UTF8_LARGE_LENGTH: number;
					public static NISTRING_UTF16_SMALL_LENGTH: number;
					public static NISTRING_UTF16_MEDIUM_LENGTH: number;
					public static NISTRING_UTF16_LARGE_LENGTH: number;
					public static NISTRING_RA: number;
					public static NISTRING_EA: number;
					public static NISTRING_INDEX_SMALL: number;
					public static NISTRING_INDEX_MEDIUM: number;
					public static NISTRING_INDEX_LARGE: number;
					public static NISTRING_EMPTY: number;
					public static DII(index: number): number;
					public static EII(index: number): number;
					public static AII(index: number): number;
					public static ISTRING_PREFIX_NAMESPACE(index: number): number;
					public static ISTRING(index: number): number;
					public static NISTRING(index: number): number;
					public static UTF8_NCNAME(index: number): number;
					public static UTF8(index: number): number;
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module fastinfoset {
				export abstract class Encoder extends org.xml.sax.helpers.DefaultHandler implements org.jvnet.fastinfoset.FastInfosetSerializer {
					public static class: java.lang.Class<com.sun.xml.fastinfoset.Encoder>;
					public static CHARACTER_ENCODING_SCHEME_SYSTEM_PROPERTY: string;
					public static _characterEncodingSchemeSystemDefault: string;
					public _v: com.sun.xml.fastinfoset.vocab.SerializerVocabulary;
					public _vData: org.jvnet.fastinfoset.VocabularyApplicationData;
					public _terminate: boolean;
					public _b: number;
					public _s: java.io.OutputStream;
					public _charBuffer: native.Array<string>;
					public _octetBuffer: native.Array<number>;
					public _octetBufferIndex: number;
					public _markIndex: number;
					public minAttributeValueSize: number;
					public maxAttributeValueSize: number;
					public attributeValueMapTotalCharactersConstraint: number;
					public minCharacterContentChunkSize: number;
					public maxCharacterContentChunkSize: number;
					public characterContentChunkMapTotalCharactersConstraint: number;
					public encodeElementTermination(): void;
					public setIgnoreWhiteSpaceTextContent(ignoreWhiteSpaceTextContent: boolean): void;
					public encodeDateTimeFourBitCharacters(ch: native.Array<string>, offset: number, length: number, addToTable: boolean): void;
					public fatalError(e: org.xml.sax.SAXParseException): void;
					public getIgnoreComments(): boolean;
					public encodeNonIdentifyingStringOnThirdBit(URI: string, id: number, data: any): void;
					public encodeCharacters(ch: native.Array<string>, offset: number, length: number): void;
					public encodeNonZeroIntegerOnSecondBitFirstBitOne(i: number): void;
					public write(b: native.Array<number>, offset: number, length: number): void;
					public encodeNonIdentifyingStringOnFirstBit(ch: native.Array<string>, offset: number, length: number, map: com.sun.xml.fastinfoset.util.CharArrayIntMap, addToTable: boolean, clone: boolean): void;
					public encodeUTF8String(s: string): number;
					public encodeDocumentTypeDeclaration(systemId: string, publicId: string): void;
					public constructor();
					public encodeAIIBuiltInAlgorithmData(id: number, data: any, offset: number, length: number): void;
					public encodeComment(ch: native.Array<string>, offset: number, length: number): void;
					public error(e: org.xml.sax.SAXParseException): void;
					public encodeNumericNonIdentifyingStringOnFirstBit(s: string, addToTable: boolean, mustBeAddedToTable: boolean): void;
					public encodeNonZeroOctetStringLengthOnFifthBit(length: number): void;
					public encodeNamespaceAttribute(prefix: string, uri: string): void;
					public encodeNonEmptyUTF8StringAsOctetString(b: number, ch: native.Array<string>, offset: number, length: number, constants: native.Array<number>): void;
					public encodeCIIBuiltInAlgorithmData(id: number, data: any, offset: number, length: number): void;
					public encodeProcessingInstruction(target: string, data: string): void;
					public static isWhiteSpace(ch: native.Array<string>, start: number, length: number): boolean;
					public encodeCharactersNoClone(ch: native.Array<string>, offset: number, length: number): void;
					public encodeNonZeroIntegerOnThirdBit(i: number): void;
					public characters(ch: native.Array<string>, start: number, length: number): void;
					public setVocabularyApplicationData(data: org.jvnet.fastinfoset.VocabularyApplicationData): void;
					public setIgnoreDTD(ignoreDTD: boolean): void;
					public mark(): void;
					public encodeNonZeroOctetStringLengthOnSecondBit(length: number): void;
					public skippedEntity(name: string): void;
					public notationDecl(name: string, publicId: string, systemId: string): void;
					public endDocument(): void;
					public encodeNonEmptyCharacterStringOnSeventhBit(ch: native.Array<string>, offset: number, length: number): void;
					public getRegisteredEncodingAlgorithms(): java.util.Map<any,any>;
					public setOutputStream(s: java.io.OutputStream): void;
					public encodeLiteralElementQualifiedNameOnThirdBit(namespaceURI: string, prefix: string, localName: string, entry: com.sun.xml.fastinfoset.util.LocalNameQualifiedNamesMap.Entry): void;
					public encodeFourBitCharacters(id: number, table: native.Array<number>, ch: native.Array<string>, offset: number, length: number, addToTable: boolean): void;
					public setRegisteredEncodingAlgorithms(algorithms: java.util.Map<any,any>): void;
					public setMaxAttributeValueSize(size: number): void;
					public encodeElementQualifiedNameOnThirdBit(namespaceURI: string, prefix: string, localName: string): void;
					public encodeAttributeQualifiedNameOnSecondBit(namespaceURI: string, prefix: string, localName: string): void;
					public encodeCIIOctetAlgorithmData(id: number, d: native.Array<number>, offset: number, length: number): void;
					public setIgnoreProcesingInstructions(ignoreProcesingInstructions: boolean): void;
					public encodeNonEmptyNBitCharacterStringOnSeventhBit(alphabet: string, ch: native.Array<string>, offset: number, length: number): void;
					public setVocabulary(vocabulary: com.sun.xml.fastinfoset.vocab.SerializerVocabulary): void;
					public reset(): void;
					public encodeNonZeroOctetStringLengthOnSenventhBit(length: number): void;
					public encodeNonEmptyFourBitCharacterString(table: native.Array<number>, ch: native.Array<string>, offset: number, octetPairLength: number, octetSingleLength: number): void;
					public encodeAlphabetCharacters(alphabet: string, ch: native.Array<string>, offset: number, length: number, addToTable: boolean): void;
					public encodeNonIdentifyingStringOnThirdBit(URI: string, id: number, d: native.Array<number>, offset: number, length: number): void;
					public resetMark(): void;
					public startDocument(): void;
					public encodeInitialVocabulary(): void;
					public setMinAttributeValueSize(size: number): void;
					public encodeCIIBuiltInAlgorithmDataAsCDATA(ch: native.Array<string>, offset: number, length: number): void;
					public resolveEntity(publicId: string, systemId: string): org.xml.sax.InputSource;
					public isAttributeValueLengthMatchesLimit(length: number): boolean;
					public encodeNonIdentifyingStringOnFirstBit(s: string, map: com.sun.xml.fastinfoset.util.StringIntMap, addToTable: boolean, mustBeAddedToTable: boolean): void;
					public getMinAttributeValueSize(): number;
					public encodeCommentNoClone(ch: native.Array<string>, offset: number, length: number): void;
					public encodeAIIObjectAlgorithmData(id: number, data: any, ea: org.jvnet.fastinfoset.EncodingAlgorithm): void;
					public getAttributeValueMapMemoryLimit(): number;
					public canAddCharacterContentToTable(length: number, map: com.sun.xml.fastinfoset.util.CharArrayIntMap): boolean;
					public setExternalVocabulary(v: org.jvnet.fastinfoset.ExternalVocabulary): void;
					public encodeNonZeroIntegerOnSecondBitFirstBitZero(i: number): void;
					public endElement(uri: string, localName: string, qName: string): void;
					public encodeNonZeroInteger(b: number, i: number, constants: native.Array<number>): void;
					public encodeUtf16String(ch: native.Array<string>, offset: number, length: number): number;
					public getIgnoreDTD(): boolean;
					public encodeDocumentTermination(): void;
					public startElement(uri: string, localName: string, qName: string, attributes: org.xml.sax.Attributes): void;
					public getCharacterContentChunkMapMemoryLimit(): number;
					public getVocabularyApplicationData(): org.jvnet.fastinfoset.VocabularyApplicationData;
					public encodeUTF8String(ch: native.Array<string>, offset: number, length: number): number;
					public unparsedEntityDecl(name: string, publicId: string, systemId: string, notationName: string): void;
					public ignorableWhitespace(ch: native.Array<string>, start: number, length: number): void;
					public processingInstruction(target: string, data: string): void;
					public encodeNonIdentifyingStringOnFirstBit(s: string, map: com.sun.xml.fastinfoset.util.CharArrayIntMap, addToTable: boolean): void;
					public startPrefixMapping(prefix: string, uri: string): void;
					public setAttributeValueMapMemoryLimit(size: number): void;
					public encodeNonEmptyOctetStringOnSecondBit(s: string): void;
					public write(i: number): void;
					public encodeDateTimeNonIdentifyingStringOnFirstBit(s: string, addToTable: boolean, mustBeAddedToTable: boolean): void;
					public getCharacterEncodingScheme(): string;
					public setCharacterContentChunkMapMemoryLimit(size: number): void;
					public encodeNonEmptyFourBitCharacterStringOnSeventhBit(table: native.Array<number>, ch: native.Array<string>, offset: number, length: number): void;
					public static isWhiteSpace(s: string): boolean;
					public encodeIdentifyingNonEmptyStringOnFirstBit(s: string, map: com.sun.xml.fastinfoset.util.StringIntMap): void;
					public encodeNonZeroIntegerOnFourthBit(i: number): void;
					public encodeTermination(): void;
					public isCharacterContentChunkLengthMatchesLimit(length: number): boolean;
					public warning(e: org.xml.sax.SAXParseException): void;
					public encodeHeader(encodeXmlDecl: boolean): void;
					public encodeNonEmptyCharacterStringOnFifthBit(ch: native.Array<string>, offset: number, length: number): void;
					public encodeUtf16String(s: string): number;
					public encodeNonEmptyCharacterStringOnFifthBit(s: string): void;
					public getMaxCharacterContentChunkSize(): number;
					public encodeAIIOctetAlgorithmData(id: number, d: native.Array<number>, offset: number, length: number): void;
					public setIgnoreComments(ignoreComments: boolean): void;
					public encodeNumericFourBitCharacters(ch: native.Array<string>, offset: number, length: number, addToTable: boolean): void;
					public canAddAttributeToTable(length: number): boolean;
					public encodeNonIdentifyingStringOnFirstBit(id: number, table: native.Array<number>, s: string, addToTable: boolean, mustBeAddedToTable: boolean): void;
					public getIgnoreProcesingInstructions(): boolean;
					public encodeNonEmptyUTF8StringAsOctetString(b: number, s: string, constants: native.Array<number>): void;
					public write(b: native.Array<number>, length: number): void;
					public getMaxAttributeValueSize(): number;
					public encodeNonIdentifyingStringOnFirstBit(URI: string, id: number, data: any): void;
					public endPrefixMapping(prefix: string): void;
					public static getPrefixFromQualifiedName(qName: string): string;
					public getIgnoreWhiteSpaceTextContent(): boolean;
					public encodeCIIObjectAlgorithmData(id: number, data: any, ea: org.jvnet.fastinfoset.EncodingAlgorithm): void;
					public encodeNonIdentifyingStringOnThirdBit(ch: native.Array<string>, offset: number, length: number, map: com.sun.xml.fastinfoset.util.CharArrayIntMap, addToTable: boolean, clone: boolean): void;
					public encodeLiteralAttributeQualifiedNameOnSecondBit(namespaceURI: string, prefix: string, localName: string, entry: com.sun.xml.fastinfoset.util.LocalNameQualifiedNamesMap.Entry): boolean;
					public encodeNonZeroOctetStringLength(b: number, length: number, constants: native.Array<number>): void;
					public setCharacterEncodingScheme(characterEncodingScheme: string): void;
					public constructor(useLocalNameAsKeyForQualifiedNameLookup: boolean);
					public setDocumentLocator(locator: org.xml.sax.Locator): void;
					public hasMark(): boolean;
					public setMinCharacterContentChunkSize(size: number): void;
					public getMinCharacterContentChunkSize(): number;
					public setMaxCharacterContentChunkSize(size: number): void;
				}
				export module Encoder {
					export class EncodingBufferOutputStream extends java.io.OutputStream {
						public static class: java.lang.Class<com.sun.xml.fastinfoset.Encoder.EncodingBufferOutputStream>;
						public write(int0: number): void;
						public close(): void;
						public write(b: native.Array<number>): void;
						public write(b: number): void;
						public getLength(): number;
						public flush(): void;
						public reset(): void;
						public write(b: native.Array<number>, off: number, len: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module fastinfoset {
				export class EncodingConstants extends java.lang.Object {
					public static class: java.lang.Class<com.sun.xml.fastinfoset.EncodingConstants>;
					public static XML_NAMESPACE_PREFIX: string;
					public static XML_NAMESPACE_PREFIX_LENGTH: number;
					public static XML_NAMESPACE_NAME: string;
					public static XML_NAMESPACE_NAME_LENGTH: number;
					public static XMLNS_NAMESPACE_PREFIX: string;
					public static XMLNS_NAMESPACE_PREFIX_LENGTH: number;
					public static XMLNS_NAMESPACE_NAME: string;
					public static XMLNS_NAMESPACE_NAME_LENGTH: number;
					public static DEFAULT_NAMESPACE_DECLARATION: com.sun.xml.fastinfoset.QualifiedName;
					public static DOCUMENT_ADDITIONAL_DATA_FLAG: number;
					public static DOCUMENT_INITIAL_VOCABULARY_FLAG: number;
					public static DOCUMENT_NOTATIONS_FLAG: number;
					public static DOCUMENT_UNPARSED_ENTITIES_FLAG: number;
					public static DOCUMENT_CHARACTER_ENCODING_SCHEME: number;
					public static DOCUMENT_STANDALONE_FLAG: number;
					public static DOCUMENT_VERSION_FLAG: number;
					public static INITIAL_VOCABULARY_EXTERNAL_VOCABULARY_FLAG: number;
					public static INITIAL_VOCABULARY_RESTRICTED_ALPHABETS_FLAG: number;
					public static INITIAL_VOCABULARY_ENCODING_ALGORITHMS_FLAG: number;
					public static INITIAL_VOCABULARY_PREFIXES_FLAG: number;
					public static INITIAL_VOCABULARY_NAMESPACE_NAMES_FLAG: number;
					public static INITIAL_VOCABULARY_LOCAL_NAMES_FLAG: number;
					public static INITIAL_VOCABULARY_OTHER_NCNAMES_FLAG: number;
					public static INITIAL_VOCABULARY_OTHER_URIS_FLAG: number;
					public static INITIAL_VOCABULARY_ATTRIBUTE_VALUES_FLAG: number;
					public static INITIAL_VOCABULARY_CONTENT_CHARACTER_CHUNKS_FLAG: number;
					public static INITIAL_VOCABULARY_OTHER_STRINGS_FLAG: number;
					public static INITIAL_VOCABULARY_ELEMENT_NAME_SURROGATES_FLAG: number;
					public static INITIAL_VOCABULARY_ATTRIBUTE_NAME_SURROGATES_FLAG: number;
					public static NAME_SURROGATE_PREFIX_FLAG: number;
					public static NAME_SURROGATE_NAME_FLAG: number;
					public static NOTATIONS: number;
					public static NOTATIONS_MASK: number;
					public static NOTATIONS_SYSTEM_IDENTIFIER_FLAG: number;
					public static NOTATIONS_PUBLIC_IDENTIFIER_FLAG: number;
					public static UNPARSED_ENTITIES: number;
					public static UNPARSED_ENTITIES_MASK: number;
					public static UNPARSED_ENTITIES_PUBLIC_IDENTIFIER_FLAG: number;
					public static PROCESSING_INSTRUCTION: number;
					public static PROCESSING_INSTRUCTION_MASK: number;
					public static COMMENT: number;
					public static COMMENT_MASK: number;
					public static DOCUMENT_TYPE_DECLARATION: number;
					public static DOCUMENT_TYPE_DECLARATION_MASK: number;
					public static DOCUMENT_TYPE_SYSTEM_IDENTIFIER_FLAG: number;
					public static DOCUMENT_TYPE_PUBLIC_IDENTIFIER_FLAG: number;
					public static ELEMENT: number;
					public static ELEMENT_ATTRIBUTE_FLAG: number;
					public static ELEMENT_NAMESPACES_FLAG: number;
					public static ELEMENT_LITERAL_QNAME_FLAG: number;
					public static NAMESPACE_ATTRIBUTE: number;
					public static NAMESPACE_ATTRIBUTE_MASK: number;
					public static NAMESPACE_ATTRIBUTE_PREFIX_NAME_MASK: number;
					public static NAMESPACE_ATTRIBUTE_PREFIX_FLAG: number;
					public static NAMESPACE_ATTRIBUTE_NAME_FLAG: number;
					public static ATTRIBUTE_LITERAL_QNAME_FLAG: number;
					public static LITERAL_QNAME_PREFIX_NAMESPACE_NAME_MASK: number;
					public static LITERAL_QNAME_PREFIX_FLAG: number;
					public static LITERAL_QNAME_NAMESPACE_NAME_FLAG: number;
					public static CHARACTER_CHUNK: number;
					public static CHARACTER_CHUNK_ADD_TO_TABLE_FLAG: number;
					public static CHARACTER_CHUNK_UTF_8_FLAG: number;
					public static CHARACTER_CHUNK_UTF_16_FLAG: number;
					public static CHARACTER_CHUNK_RESTRICTED_ALPHABET_FLAG: number;
					public static CHARACTER_CHUNK_ENCODING_ALGORITHM_FLAG: number;
					public static UNEXPANDED_ENTITY_REFERENCE: number;
					public static UNEXPANDED_ENTITY_REFERENCE_MASK: number;
					public static UNEXPANDED_ENTITY_SYSTEM_IDENTIFIER_FLAG: number;
					public static UNEXPANDED_ENTITY_PUBLIC_IDENTIFIER_FLAG: number;
					public static NISTRING_ADD_TO_TABLE_FLAG: number;
					public static NISTRING_UTF_8_FLAG: number;
					public static NISTRING_UTF_16_FLAG: number;
					public static NISTRING_RESTRICTED_ALPHABET_FLAG: number;
					public static NISTRING_ENCODING_ALGORITHM_FLAG: number;
					public static TERMINATOR: number;
					public static DOUBLE_TERMINATOR: number;
					public static ENCODING_ALGORITHM_BUILTIN_END: number;
					public static ENCODING_ALGORITHM_APPLICATION_START: number;
					public static ENCODING_ALGORITHM_APPLICATION_MAX: number;
					public static RESTRICTED_ALPHABET_BUILTIN_END: number;
					public static RESTRICTED_ALPHABET_APPLICATION_START: number;
					public static RESTRICTED_ALPHABET_APPLICATION_MAX: number;
					public static OCTET_STRING_LENGTH_SMALL_LIMIT: number;
					public static OCTET_STRING_LENGTH_MEDIUM_LIMIT: number;
					public static OCTET_STRING_LENGTH_MEDIUM_FLAG: number;
					public static OCTET_STRING_LENGTH_LARGE_FLAG: number;
					public static OCTET_STRING_MAXIMUM_LENGTH: number;
					public static OCTET_STRING_LENGTH_2ND_BIT_SMALL_LIMIT: number;
					public static OCTET_STRING_LENGTH_2ND_BIT_MEDIUM_LIMIT: number;
					public static OCTET_STRING_LENGTH_2ND_BIT_MEDIUM_FLAG: number;
					public static OCTET_STRING_LENGTH_2ND_BIT_LARGE_FLAG: number;
					public static OCTET_STRING_LENGTH_2ND_BIT_SMALL_MASK: number;
					public static OCTET_STRING_LENGTH_5TH_BIT_SMALL_LIMIT: number;
					public static OCTET_STRING_LENGTH_5TH_BIT_MEDIUM_LIMIT: number;
					public static OCTET_STRING_LENGTH_5TH_BIT_MEDIUM_FLAG: number;
					public static OCTET_STRING_LENGTH_5TH_BIT_LARGE_FLAG: number;
					public static OCTET_STRING_LENGTH_5TH_BIT_SMALL_MASK: number;
					public static OCTET_STRING_LENGTH_7TH_BIT_SMALL_LIMIT: number;
					public static OCTET_STRING_LENGTH_7TH_BIT_MEDIUM_LIMIT: number;
					public static OCTET_STRING_LENGTH_7TH_BIT_MEDIUM_FLAG: number;
					public static OCTET_STRING_LENGTH_7TH_BIT_LARGE_FLAG: number;
					public static OCTET_STRING_LENGTH_7TH_BIT_SMALL_MASK: number;
					public static INTEGER_SMALL_LIMIT: number;
					public static INTEGER_MEDIUM_LIMIT: number;
					public static INTEGER_LARGE_LIMIT: number;
					public static INTEGER_MEDIUM_FLAG: number;
					public static INTEGER_LARGE_FLAG: number;
					public static INTEGER_LARGE_LARGE_FLAG: number;
					public static INTEGER_MAXIMUM_SIZE: number;
					public static INTEGER_2ND_BIT_SMALL_LIMIT: number;
					public static INTEGER_2ND_BIT_MEDIUM_LIMIT: number;
					public static INTEGER_2ND_BIT_LARGE_LIMIT: number;
					public static INTEGER_2ND_BIT_MEDIUM_FLAG: number;
					public static INTEGER_2ND_BIT_LARGE_FLAG: number;
					public static INTEGER_2ND_BIT_SMALL_MASK: number;
					public static INTEGER_2ND_BIT_MEDIUM_MASK: number;
					public static INTEGER_2ND_BIT_LARGE_MASK: number;
					public static INTEGER_3RD_BIT_SMALL_LIMIT: number;
					public static INTEGER_3RD_BIT_MEDIUM_LIMIT: number;
					public static INTEGER_3RD_BIT_LARGE_LIMIT: number;
					public static INTEGER_3RD_BIT_MEDIUM_FLAG: number;
					public static INTEGER_3RD_BIT_LARGE_FLAG: number;
					public static INTEGER_3RD_BIT_LARGE_LARGE_FLAG: number;
					public static INTEGER_3RD_BIT_SMALL_MASK: number;
					public static INTEGER_3RD_BIT_MEDIUM_MASK: number;
					public static INTEGER_3RD_BIT_LARGE_MASK: number;
					public static INTEGER_3RD_BIT_LARGE_LARGE_MASK: number;
					public static INTEGER_4TH_BIT_SMALL_LIMIT: number;
					public static INTEGER_4TH_BIT_MEDIUM_LIMIT: number;
					public static INTEGER_4TH_BIT_LARGE_LIMIT: number;
					public static INTEGER_4TH_BIT_MEDIUM_FLAG: number;
					public static INTEGER_4TH_BIT_LARGE_FLAG: number;
					public static INTEGER_4TH_BIT_LARGE_LARGE_FLAG: number;
					public static INTEGER_4TH_BIT_SMALL_MASK: number;
					public static INTEGER_4TH_BIT_MEDIUM_MASK: number;
					public static INTEGER_4TH_BIT_LARGE_MASK: number;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module fastinfoset {
				export class Notation extends java.lang.Object {
					public static class: java.lang.Class<com.sun.xml.fastinfoset.Notation>;
					public name: string;
					public systemIdentifier: string;
					public publicIdentifier: string;
					public constructor(_name: string, _systemIdentifier: string, _publicIdentifier: string);
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module fastinfoset {
				export class OctetBufferListener extends java.lang.Object {
					public static class: java.lang.Class<com.sun.xml.fastinfoset.OctetBufferListener>;
					/**
					 * Constructs a new instance of the com.sun.xml.fastinfoset.OctetBufferListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onBeforeOctetBufferOverwrite(): void;
					});
					public constructor();
					public onBeforeOctetBufferOverwrite(): void;
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module fastinfoset {
				export class QualifiedName extends java.lang.Object {
					public static class: java.lang.Class<com.sun.xml.fastinfoset.QualifiedName>;
					public prefix: string;
					public namespaceName: string;
					public localName: string;
					public qName: string;
					public index: number;
					public prefixIndex: number;
					public namespaceNameIndex: number;
					public localNameIndex: number;
					public attributeId: number;
					public attributeHash: number;
					public set(prefix: string, namespaceName: string, localName: string, qName: string, index: number, prefixIndex: number, namespaceNameIndex: number, localNameIndex: number): com.sun.xml.fastinfoset.QualifiedName;
					public set(prefix: string, namespaceName: string, localName: string, qName: string, index: number): com.sun.xml.fastinfoset.QualifiedName;
					public getQNameString(): string;
					public createAttributeValues(size: number): void;
					public constructor(prefix: string, namespaceName: string, localName: string, qName: string, index: number);
					public constructor(prefix: string, namespaceName: string, localName: string, qName: string, index: number, prefixIndex: number, namespaceNameIndex: number, localNameIndex: number);
					public set(prefix: string, namespaceName: string, localName: string, index: number, prefixIndex: number, namespaceNameIndex: number, localNameIndex: number): com.sun.xml.fastinfoset.QualifiedName;
					public set(prefix: string, namespaceName: string): com.sun.xml.fastinfoset.QualifiedName;
					public constructor(prefix: string, namespaceName: string, localName: string, qName: string);
					public set(prefix: string, namespaceName: string, localName: string, qName: string): void;
					public set(prefix: string, namespaceName: string, localName: string, prefixIndex: number, namespaceNameIndex: number, localNameIndex: number, charBuffer: native.Array<string>): com.sun.xml.fastinfoset.QualifiedName;
					public constructor();
					public constructor(prefix: string, namespaceName: string, localName: string);
					public constructor(prefix: string, namespaceName: string);
					public constructor(prefix: string, namespaceName: string, localName: string, prefixIndex: number, namespaceNameIndex: number, localNameIndex: number, charBuffer: native.Array<string>);
					public set(prefix: string, namespaceName: string, localName: string): com.sun.xml.fastinfoset.QualifiedName;
					public set(prefix: string, namespaceName: string, localName: string, index: number): com.sun.xml.fastinfoset.QualifiedName;
					public constructor(prefix: string, namespaceName: string, localName: string, index: number);
					public getQName(): javax.xml.namespace.QName;
					public constructor(prefix: string, namespaceName: string, localName: string, index: number, prefixIndex: number, namespaceNameIndex: number, localNameIndex: number);
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module fastinfoset {
				export class UnparsedEntity extends com.sun.xml.fastinfoset.Notation {
					public static class: java.lang.Class<com.sun.xml.fastinfoset.UnparsedEntity>;
					public notationName: string;
					public constructor(_name: string, _systemIdentifier: string, _publicIdentifier: string);
					public constructor(_name: string, _systemIdentifier: string, _publicIdentifier: string, _notationName: string);
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module fastinfoset {
				export module algorithm {
					export class BASE64EncodingAlgorithm extends com.sun.xml.fastinfoset.algorithm.BuiltInEncodingAlgorithm {
						public static class: java.lang.Class<com.sun.xml.fastinfoset.algorithm.BASE64EncodingAlgorithm>;
						public decodeFromBytes(b: native.Array<number>, start: number, length: number): any;
						public constructor();
						public getOctetLengthFromPrimitiveLength(primitiveLength: number): number;
						public encodeToBytes(array: any, astart: number, alength: number, b: native.Array<number>, start: number): void;
						public convertFromCharacters(ch: native.Array<string>, start: number, length: number): any;
						public decodeFromInputStream(s: java.io.InputStream): any;
						public convertToCharacters(data: native.Array<number>, offset: number, length: number, s: java.lang.StringBuffer): void;
						public getPrimtiveLengthFromOctetLength(octetLength: number): number;
						public getOctetLengthFromPrimitiveLength(int0: number): number;
						public encodeToBytes(object0: any, int1: number, int2: number, bytes3: native.Array<number>, int4: number): void;
						public convertToCharacters(data: any, s: java.lang.StringBuffer): void;
						public encodeToOutputStream(data: any, s: java.io.OutputStream): void;
						public getPrimtiveLengthFromOctetLength(int0: number): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module fastinfoset {
				export module algorithm {
					export class BooleanEncodingAlgorithm extends com.sun.xml.fastinfoset.algorithm.BuiltInEncodingAlgorithm {
						public static class: java.lang.Class<com.sun.xml.fastinfoset.algorithm.BooleanEncodingAlgorithm>;
						public decodeFromBytes(b: native.Array<number>, start: number, length: number): any;
						public constructor();
						public getOctetLengthFromPrimitiveLength(primitiveLength: number): number;
						public encodeToBytesFromBooleanArray(array: native.Array<boolean>, astart: number, alength: number, b: native.Array<number>, start: number): void;
						public getPrimtiveLengthFromOctetLength(octetLength: number, firstOctet: number): number;
						public encodeToBytes(array: any, astart: number, alength: number, b: native.Array<number>, start: number): void;
						public convertFromCharacters(ch: native.Array<string>, start: number, length: number): any;
						public decodeFromInputStream(s: java.io.InputStream): any;
						public getPrimtiveLengthFromOctetLength(octetLength: number): number;
						public getOctetLengthFromPrimitiveLength(int0: number): number;
						public decodeFromBytesToBooleanArray(bdata: native.Array<boolean>, bstart: number, blength: number, b: native.Array<number>, start: number, length: number): void;
						public encodeToBytes(object0: any, int1: number, int2: number, bytes3: native.Array<number>, int4: number): void;
						public convertToCharacters(data: any, s: java.lang.StringBuffer): void;
						public encodeToOutputStream(data: any, s: java.io.OutputStream): void;
						public getPrimtiveLengthFromOctetLength(int0: number): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module fastinfoset {
				export module algorithm {
					export abstract class BuiltInEncodingAlgorithm extends java.lang.Object implements org.jvnet.fastinfoset.EncodingAlgorithm {
						public static class: java.lang.Class<com.sun.xml.fastinfoset.algorithm.BuiltInEncodingAlgorithm>;
						public static SPACE_PATTERN: java.util.regex.Pattern;
						public removeWhitespace(ch: native.Array<string>, start: number, length: number): java.lang.StringBuilder;
						public convertFromCharacters(chars0: native.Array<string>, int1: number, int2: number): any;
						public getOctetLengthFromPrimitiveLength(int0: number): number;
						public constructor();
						public decodeFromBytes(bytes0: native.Array<number>, int1: number, int2: number): any;
						public encodeToOutputStream(object0: any, outputStream1: java.io.OutputStream): void;
						public encodeToBytes(object0: any, int1: number, int2: number, bytes3: native.Array<number>, int4: number): void;
						public getPrimtiveLengthFromOctetLength(int0: number): number;
						public matchWhiteSpaceDelimnatedWords(cb: java.nio.CharBuffer, wl: com.sun.xml.fastinfoset.algorithm.BuiltInEncodingAlgorithm.WordListener): void;
						public decodeFromInputStream(inputStream0: java.io.InputStream): any;
						public convertToCharacters(object0: any, stringBuffer1: java.lang.StringBuffer): void;
					}
					export module BuiltInEncodingAlgorithm {
						export class WordListener extends java.lang.Object {
							public static class: java.lang.Class<com.sun.xml.fastinfoset.algorithm.BuiltInEncodingAlgorithm.WordListener>;
							/**
							 * Constructs a new instance of the com.sun.xml.fastinfoset.algorithm.BuiltInEncodingAlgorithm() when extending the interface class.
							 */
							public constructor(implementation: {
								word(int0: number, int1: number): void;
							});
							public constructor();
							public word(int0: number, int1: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module fastinfoset {
				export module algorithm {
					export class BuiltInEncodingAlgorithmFactory extends java.lang.Object {
						public static class: java.lang.Class<com.sun.xml.fastinfoset.algorithm.BuiltInEncodingAlgorithmFactory>;
						public static hexadecimalEncodingAlgorithm: com.sun.xml.fastinfoset.algorithm.HexadecimalEncodingAlgorithm;
						public static base64EncodingAlgorithm: com.sun.xml.fastinfoset.algorithm.BASE64EncodingAlgorithm;
						public static booleanEncodingAlgorithm: com.sun.xml.fastinfoset.algorithm.BooleanEncodingAlgorithm;
						public static shortEncodingAlgorithm: com.sun.xml.fastinfoset.algorithm.ShortEncodingAlgorithm;
						public static intEncodingAlgorithm: com.sun.xml.fastinfoset.algorithm.IntEncodingAlgorithm;
						public static longEncodingAlgorithm: com.sun.xml.fastinfoset.algorithm.LongEncodingAlgorithm;
						public static floatEncodingAlgorithm: com.sun.xml.fastinfoset.algorithm.FloatEncodingAlgorithm;
						public static doubleEncodingAlgorithm: com.sun.xml.fastinfoset.algorithm.DoubleEncodingAlgorithm;
						public static uuidEncodingAlgorithm: com.sun.xml.fastinfoset.algorithm.UUIDEncodingAlgorithm;
						public constructor();
						public static getAlgorithm(index: number): com.sun.xml.fastinfoset.algorithm.BuiltInEncodingAlgorithm;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module fastinfoset {
				export module algorithm {
					export class BuiltInEncodingAlgorithmState extends java.lang.Object {
						public static class: java.lang.Class<com.sun.xml.fastinfoset.algorithm.BuiltInEncodingAlgorithmState>;
						public static INITIAL_LENGTH: number;
						public booleanArray: native.Array<boolean>;
						public shortArray: native.Array<number>;
						public intArray: native.Array<number>;
						public longArray: native.Array<number>;
						public floatArray: native.Array<number>;
						public doubleArray: native.Array<number>;
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
			export module fastinfoset {
				export module algorithm {
					export class DoubleEncodingAlgorithm extends com.sun.xml.fastinfoset.algorithm.IEEE754FloatingPointEncodingAlgorithm {
						public static class: java.lang.Class<com.sun.xml.fastinfoset.algorithm.DoubleEncodingAlgorithm>;
						public decodeFromBytes(b: native.Array<number>, start: number, length: number): any;
						public constructor();
						public getOctetLengthFromPrimitiveLength(primitiveLength: number): number;
						public encodeToBytes(array: any, astart: number, alength: number, b: native.Array<number>, start: number): void;
						public encodeToBytesFromDoubleArray(fdata: native.Array<number>, fstart: number, flength: number, b: native.Array<number>, start: number): void;
						public convertFromCharacters(ch: native.Array<string>, start: number, length: number): any;
						public decodeFromInputStream(s: java.io.InputStream): any;
						public getPrimtiveLengthFromOctetLength(octetLength: number): number;
						public encodeToOutputStreamFromDoubleArray(fdata: native.Array<number>, s: java.io.OutputStream): void;
						public decodeFromBytesToDoubleArray(data: native.Array<number>, fstart: number, b: native.Array<number>, start: number, length: number): void;
						public getOctetLengthFromPrimitiveLength(int0: number): number;
						public encodeToBytes(object0: any, int1: number, int2: number, bytes3: native.Array<number>, int4: number): void;
						public convertToCharacters(data: any, s: java.lang.StringBuffer): void;
						public convertToCharactersFromDoubleArray(fdata: native.Array<number>, s: java.lang.StringBuffer): void;
						public encodeToOutputStream(data: any, s: java.io.OutputStream): void;
						public generateArrayFromList(array: java.util.List<any>): native.Array<number>;
						public decodeFromInputStreamToDoubleArray(s: java.io.InputStream): native.Array<number>;
						public getPrimtiveLengthFromOctetLength(int0: number): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module fastinfoset {
				export module algorithm {
					export class FloatEncodingAlgorithm extends com.sun.xml.fastinfoset.algorithm.IEEE754FloatingPointEncodingAlgorithm {
						public static class: java.lang.Class<com.sun.xml.fastinfoset.algorithm.FloatEncodingAlgorithm>;
						public decodeFromBytes(b: native.Array<number>, start: number, length: number): any;
						public convertToCharactersFromFloatArray(fdata: native.Array<number>, s: java.lang.StringBuffer): void;
						public constructor();
						public getOctetLengthFromPrimitiveLength(primitiveLength: number): number;
						public decodeFromInputStreamToFloatArray(s: java.io.InputStream): native.Array<number>;
						public encodeToBytes(array: any, astart: number, alength: number, b: native.Array<number>, start: number): void;
						public convertFromCharacters(ch: native.Array<string>, start: number, length: number): any;
						public encodeToBytesFromFloatArray(fdata: native.Array<number>, fstart: number, flength: number, b: native.Array<number>, start: number): void;
						public decodeFromInputStream(s: java.io.InputStream): any;
						public getPrimtiveLengthFromOctetLength(octetLength: number): number;
						public encodeToOutputStreamFromFloatArray(fdata: native.Array<number>, s: java.io.OutputStream): void;
						public decodeFromBytesToFloatArray(data: native.Array<number>, fstart: number, b: native.Array<number>, start: number, length: number): void;
						public getOctetLengthFromPrimitiveLength(int0: number): number;
						public encodeToBytes(object0: any, int1: number, int2: number, bytes3: native.Array<number>, int4: number): void;
						public convertToCharacters(data: any, s: java.lang.StringBuffer): void;
						public encodeToOutputStream(data: any, s: java.io.OutputStream): void;
						public generateArrayFromList(array: java.util.List<any>): native.Array<number>;
						public getPrimtiveLengthFromOctetLength(int0: number): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module fastinfoset {
				export module algorithm {
					export class HexadecimalEncodingAlgorithm extends com.sun.xml.fastinfoset.algorithm.BuiltInEncodingAlgorithm {
						public static class: java.lang.Class<com.sun.xml.fastinfoset.algorithm.HexadecimalEncodingAlgorithm>;
						public decodeFromBytes(b: native.Array<number>, start: number, length: number): any;
						public getOctetLengthFromPrimitiveLength(int0: number): number;
						public constructor();
						public encodeToBytes(object0: any, int1: number, int2: number, bytes3: native.Array<number>, int4: number): void;
						public convertToCharacters(data: any, s: java.lang.StringBuffer): void;
						public getOctetLengthFromPrimitiveLength(primitiveLength: number): number;
						public encodeToBytes(array: any, astart: number, alength: number, b: native.Array<number>, start: number): void;
						public encodeToOutputStream(data: any, s: java.io.OutputStream): void;
						public convertFromCharacters(ch: native.Array<string>, start: number, length: number): any;
						public decodeFromInputStream(s: java.io.InputStream): any;
						public getPrimtiveLengthFromOctetLength(int0: number): number;
						public getPrimtiveLengthFromOctetLength(octetLength: number): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module fastinfoset {
				export module algorithm {
					export abstract class IEEE754FloatingPointEncodingAlgorithm extends com.sun.xml.fastinfoset.algorithm.BuiltInEncodingAlgorithm {
						public static class: java.lang.Class<com.sun.xml.fastinfoset.algorithm.IEEE754FloatingPointEncodingAlgorithm>;
						public static FLOAT_SIZE: number;
						public static DOUBLE_SIZE: number;
						public static FLOAT_MAX_CHARACTER_SIZE: number;
						public static DOUBLE_MAX_CHARACTER_SIZE: number;
						public convertFromCharacters(chars0: native.Array<string>, int1: number, int2: number): any;
						public constructor();
						public decodeFromBytes(bytes0: native.Array<number>, int1: number, int2: number): any;
						public encodeToOutputStream(object0: any, outputStream1: java.io.OutputStream): void;
						public decodeFromInputStream(inputStream0: java.io.InputStream): any;
						public convertToCharacters(object0: any, stringBuffer1: java.lang.StringBuffer): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module fastinfoset {
				export module algorithm {
					export class IntEncodingAlgorithm extends com.sun.xml.fastinfoset.algorithm.IntegerEncodingAlgorithm {
						public static class: java.lang.Class<com.sun.xml.fastinfoset.algorithm.IntEncodingAlgorithm>;
						public decodeFromBytes(b: native.Array<number>, start: number, length: number): any;
						public constructor();
						public getOctetLengthFromPrimitiveLength(primitiveLength: number): number;
						public encodeToBytes(array: any, astart: number, alength: number, b: native.Array<number>, start: number): void;
						public convertFromCharacters(ch: native.Array<string>, start: number, length: number): any;
						public decodeFromInputStream(s: java.io.InputStream): any;
						public getPrimtiveLengthFromOctetLength(octetLength: number): number;
						public decodeFromInputStreamToIntArray(s: java.io.InputStream): native.Array<number>;
						public getOctetLengthFromPrimitiveLength(int0: number): number;
						public encodeToBytes(object0: any, int1: number, int2: number, bytes3: native.Array<number>, int4: number): void;
						public convertToCharacters(data: any, s: java.lang.StringBuffer): void;
						public encodeToOutputStream(data: any, s: java.io.OutputStream): void;
						public convertToCharactersFromIntArray(idata: native.Array<number>, s: java.lang.StringBuffer): void;
						public generateArrayFromList(array: java.util.List<any>): native.Array<number>;
						public getPrimtiveLengthFromOctetLength(int0: number): number;
						public decodeFromBytesToIntArray(idata: native.Array<number>, istart: number, b: native.Array<number>, start: number, length: number): void;
						public encodeToBytesFromIntArray(idata: native.Array<number>, istart: number, ilength: number, b: native.Array<number>, start: number): void;
						public encodeToOutputStreamFromIntArray(idata: native.Array<number>, s: java.io.OutputStream): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module fastinfoset {
				export module algorithm {
					export abstract class IntegerEncodingAlgorithm extends com.sun.xml.fastinfoset.algorithm.BuiltInEncodingAlgorithm {
						public static class: java.lang.Class<com.sun.xml.fastinfoset.algorithm.IntegerEncodingAlgorithm>;
						public static SHORT_SIZE: number;
						public static INT_SIZE: number;
						public static LONG_SIZE: number;
						public static SHORT_MAX_CHARACTER_SIZE: number;
						public static INT_MAX_CHARACTER_SIZE: number;
						public static LONG_MAX_CHARACTER_SIZE: number;
						public convertFromCharacters(chars0: native.Array<string>, int1: number, int2: number): any;
						public constructor();
						public decodeFromBytes(bytes0: native.Array<number>, int1: number, int2: number): any;
						public encodeToOutputStream(object0: any, outputStream1: java.io.OutputStream): void;
						public decodeFromInputStream(inputStream0: java.io.InputStream): any;
						public convertToCharacters(object0: any, stringBuffer1: java.lang.StringBuffer): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module fastinfoset {
				export module algorithm {
					export class LongEncodingAlgorithm extends com.sun.xml.fastinfoset.algorithm.IntegerEncodingAlgorithm {
						public static class: java.lang.Class<com.sun.xml.fastinfoset.algorithm.LongEncodingAlgorithm>;
						public decodeFromBytes(b: native.Array<number>, start: number, length: number): any;
						public constructor();
						public getOctetLengthFromPrimitiveLength(primitiveLength: number): number;
						public encodeToBytes(array: any, astart: number, alength: number, b: native.Array<number>, start: number): void;
						public convertFromCharacters(ch: native.Array<string>, start: number, length: number): any;
						public decodeFromInputStream(s: java.io.InputStream): any;
						public getPrimtiveLengthFromOctetLength(octetLength: number): number;
						public decodeFromInputStreamToIntArray(s: java.io.InputStream): native.Array<number>;
						public encodeToOutputStreamFromLongArray(ldata: native.Array<number>, s: java.io.OutputStream): void;
						public getOctetLengthFromPrimitiveLength(int0: number): number;
						public encodeToBytes(object0: any, int1: number, int2: number, bytes3: native.Array<number>, int4: number): void;
						public convertToCharacters(data: any, s: java.lang.StringBuffer): void;
						public encodeToOutputStream(data: any, s: java.io.OutputStream): void;
						public generateArrayFromList(array: java.util.List<any>): native.Array<number>;
						public getPrimtiveLengthFromOctetLength(int0: number): number;
						public decodeFromBytesToLongArray(ldata: native.Array<number>, istart: number, b: native.Array<number>, start: number, length: number): void;
						public convertToCharactersFromLongArray(ldata: native.Array<number>, s: java.lang.StringBuffer): void;
						public encodeToBytesFromLongArray(ldata: native.Array<number>, lstart: number, llength: number, b: native.Array<number>, start: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module fastinfoset {
				export module algorithm {
					export class ShortEncodingAlgorithm extends com.sun.xml.fastinfoset.algorithm.IntegerEncodingAlgorithm {
						public static class: java.lang.Class<com.sun.xml.fastinfoset.algorithm.ShortEncodingAlgorithm>;
						public decodeFromBytes(b: native.Array<number>, start: number, length: number): any;
						public constructor();
						public encodeToOutputStreamFromShortArray(idata: native.Array<number>, s: java.io.OutputStream): void;
						public getOctetLengthFromPrimitiveLength(primitiveLength: number): number;
						public decodeFromBytesToShortArray(sdata: native.Array<number>, istart: number, b: native.Array<number>, start: number, length: number): void;
						public encodeToBytes(array: any, astart: number, alength: number, b: native.Array<number>, start: number): void;
						public convertFromCharacters(ch: native.Array<string>, start: number, length: number): any;
						public decodeFromInputStreamToShortArray(s: java.io.InputStream): native.Array<number>;
						public decodeFromInputStream(s: java.io.InputStream): any;
						public getPrimtiveLengthFromOctetLength(octetLength: number): number;
						public getOctetLengthFromPrimitiveLength(int0: number): number;
						public encodeToBytes(object0: any, int1: number, int2: number, bytes3: native.Array<number>, int4: number): void;
						public convertToCharacters(data: any, s: java.lang.StringBuffer): void;
						public encodeToBytesFromShortArray(sdata: native.Array<number>, istart: number, ilength: number, b: native.Array<number>, start: number): void;
						public encodeToOutputStream(data: any, s: java.io.OutputStream): void;
						public convertToCharactersFromShortArray(sdata: native.Array<number>, s: java.lang.StringBuffer): void;
						public generateArrayFromList(array: java.util.List<any>): native.Array<number>;
						public getPrimtiveLengthFromOctetLength(int0: number): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module fastinfoset {
				export module algorithm {
					export class UUIDEncodingAlgorithm extends com.sun.xml.fastinfoset.algorithm.LongEncodingAlgorithm {
						public static class: java.lang.Class<com.sun.xml.fastinfoset.algorithm.UUIDEncodingAlgorithm>;
						public decodeFromBytes(b: native.Array<number>, start: number, length: number): any;
						public constructor();
						public convertToCharacters(data: any, s: java.lang.StringBuffer): void;
						public convertFromCharacters(ch: native.Array<string>, start: number, length: number): any;
						public encodeToOutputStream(data: any, s: java.io.OutputStream): void;
						public decodeFromInputStream(s: java.io.InputStream): any;
						public getPrimtiveLengthFromOctetLength(octetLength: number): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module fastinfoset {
				export module alphabet {
					export class BuiltInRestrictedAlphabets extends java.lang.Object {
						public static class: java.lang.Class<com.sun.xml.fastinfoset.alphabet.BuiltInRestrictedAlphabets>;
						public static table: native.Array<native.Array<string>>;
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
			export module fastinfoset {
				export module dom {
					export class DOMDocumentParser extends com.sun.xml.fastinfoset.Decoder {
						public static class: java.lang.Class<com.sun.xml.fastinfoset.dom.DOMDocumentParser>;
						public _document: org.w3c.dom.Document;
						public _currentNode: org.w3c.dom.Node;
						public _currentElement: org.w3c.dom.Element;
						public _namespaceAttributes: native.Array<org.w3c.dom.Attr>;
						public _namespaceAttributesIndex: number;
						public _namespacePrefixes: native.Array<number>;
						public _namespacePrefixesIndex: number;
						public processProcessingII(): void;
						public createElement(namespaceName: string, qName: string, localName: string): org.w3c.dom.Element;
						public setStringInterning(stringInterning: boolean): void;
						public setRegisteredEncodingAlgorithms(algorithms: java.util.Map<any,any>): void;
						public processEII(name: com.sun.xml.fastinfoset.QualifiedName, hasAttributes: boolean): void;
						public setBufferSize(bufferSize: number): void;
						public processDIIOptionalProperties(): void;
						public parse(s: java.io.InputStream): void;
						public processAIIs(): void;
						public parse(): void;
						/** @deprecated */
						public getExternalVocabularies(): java.util.Map<any,any>;
						public getRegisteredEncodingAlgorithms(): java.util.Map<any,any>;
						public processLiteralQualifiedName(state: number, q: com.sun.xml.fastinfoset.QualifiedName): com.sun.xml.fastinfoset.QualifiedName;
						public resetOnError(): void;
						public processDII(): void;
						public constructor();
						public getForceStreamClose(): boolean;
						public convertEncodingAlgorithmDataToCharacters(isAttributeValue: boolean): string;
						public getExternalVocabularies(): java.util.Map<any,any>;
						public setExternalVocabularies(referencedVocabualries: java.util.Map<any,any>): void;
						public processCommentII(): void;
						public processLiteralQualifiedName(state: number): com.sun.xml.fastinfoset.QualifiedName;
						public setParseFragments(parseFragments: boolean): void;
						public getStringInterning(): boolean;
						public getParseFragments(): boolean;
						public createAttribute(namespaceName: string, qName: string, localName: string): org.w3c.dom.Attr;
						public setForceStreamClose(needForceStreamClose: boolean): void;
						public processEIIWithNamespaces(): void;
						public getBufferSize(): number;
						public parse(d: org.w3c.dom.Document, s: java.io.InputStream): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module fastinfoset {
				export module dom {
					export class DOMDocumentSerializer extends com.sun.xml.fastinfoset.Encoder {
						public static class: java.lang.Class<com.sun.xml.fastinfoset.dom.DOMDocumentSerializer>;
						public _namespaceScopeContext: com.sun.xml.fastinfoset.util.NamespaceContextImplementation;
						public _attributes: native.Array<org.w3c.dom.Node>;
						public serializeElementAsDocument(e: org.w3c.dom.Node): void;
						public setOutputStream(s: java.io.OutputStream): void;
						public error(e: org.xml.sax.SAXParseException): void;
						public setIgnoreDTD(ignoreDTD: boolean): void;
						public getIgnoreProcesingInstructions(): boolean;
						public setMaxAttributeValueSize(size: number): void;
						public serialize(n: org.w3c.dom.Node): void;
						public getIgnoreComments(): boolean;
						public setMinAttributeValueSize(size: number): void;
						public serializeCDATA(t: org.w3c.dom.Node): void;
						public endPrefixMapping(prefix: string): void;
						public processingInstruction(target: string, data: string): void;
						public getCharacterEncodingScheme(): string;
						public setIgnoreProcesingInstructions(ignoreProcesingInstructions: boolean): void;
						public getRegisteredEncodingAlgorithms(): java.util.Map<any,any>;
						public startElement(uri: string, localName: string, qName: string, attributes: org.xml.sax.Attributes): void;
						public startPrefixMapping(prefix: string, uri: string): void;
						public serializeElement(e: org.w3c.dom.Node): void;
						public getMaxAttributeValueSize(): number;
						public warning(e: org.xml.sax.SAXParseException): void;
						public setIgnoreComments(ignoreComments: boolean): void;
						public ignorableWhitespace(ch: native.Array<string>, start: number, length: number): void;
						public constructor();
						public setVocabularyApplicationData(data: org.jvnet.fastinfoset.VocabularyApplicationData): void;
						public startDocument(): void;
						public notationDecl(name: string, publicId: string, systemId: string): void;
						public getMaxCharacterContentChunkSize(): number;
						public encodeElement(namespaceURI: string, qName: string, localName: string): void;
						public fatalError(e: org.xml.sax.SAXParseException): void;
						public setCharacterContentChunkMapMemoryLimit(size: number): void;
						public setMaxCharacterContentChunkSize(size: number): void;
						public unparsedEntityDecl(name: string, publicId: string, systemId: string, notationName: string): void;
						public setDocumentLocator(locator: org.xml.sax.Locator): void;
						public characters(ch: native.Array<string>, start: number, length: number): void;
						public setMinCharacterContentChunkSize(size: number): void;
						public reset(): void;
						public getMinCharacterContentChunkSize(): number;
						public encodeAttribute(namespaceURI: string, qName: string, localName: string): void;
						public setRegisteredEncodingAlgorithms(algorithms: java.util.Map<any,any>): void;
						public getCharacterContentChunkMapMemoryLimit(): number;
						public getIgnoreWhiteSpaceTextContent(): boolean;
						public setCharacterEncodingScheme(characterEncodingScheme: string): void;
						public skippedEntity(name: string): void;
						public serializeText(t: org.w3c.dom.Node): void;
						public getAttributeValueMapMemoryLimit(): number;
						public endElement(uri: string, localName: string, qName: string): void;
						public endDocument(): void;
						public serialize(d: org.w3c.dom.Document): void;
						public serializeProcessingInstruction(pi: org.w3c.dom.Node): void;
						public getVocabularyApplicationData(): org.jvnet.fastinfoset.VocabularyApplicationData;
						public setAttributeValueMapMemoryLimit(size: number): void;
						public constructor(useLocalNameAsKeyForQualifiedNameLookup: boolean);
						public getMinAttributeValueSize(): number;
						public getIgnoreDTD(): boolean;
						public setExternalVocabulary(v: org.jvnet.fastinfoset.ExternalVocabulary): void;
						public serializeComment(c: org.w3c.dom.Node): void;
						public resolveEntity(publicId: string, systemId: string): org.xml.sax.InputSource;
						public setIgnoreWhiteSpaceTextContent(ignoreWhiteSpaceTextContent: boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module fastinfoset {
				export module org {
					export module apache {
						export module xerces {
							export module util {
								export class XMLChar extends java.lang.Object {
									public static class: java.lang.Class<com.sun.xml.fastinfoset.org.apache.xerces.util.XMLChar>;
									public static MASK_VALID: number;
									public static MASK_SPACE: number;
									public static MASK_NAME_START: number;
									public static MASK_NAME: number;
									public static MASK_PUBID: number;
									public static MASK_CONTENT: number;
									public static MASK_NCNAME_START: number;
									public static MASK_NCNAME: number;
									public static isValid(c: number): boolean;
									public static isInvalid(c: number): boolean;
									public static isContent(c: number): boolean;
									public constructor();
									public static isNCNameStart(c: number): boolean;
									public static highSurrogate(c: number): string;
									public static isPubid(c: number): boolean;
									public static lowSurrogate(c: number): string;
									public static supplemental(h: string, l: string): number;
									public static isNameStart(c: number): boolean;
									public static isNCName(c: number): boolean;
									public static isValidJavaEncoding(javaEncoding: string): boolean;
									public static isHighSurrogate(c: number): boolean;
									public static isValidNCName(ncName: string): boolean;
									public static isMarkup(c: number): boolean;
									public static isName(c: number): boolean;
									public static isValidIANAEncoding(ianaEncoding: string): boolean;
									public static isValidName(name: string): boolean;
									public static isSupplemental(c: number): boolean;
									public static isLowSurrogate(c: number): boolean;
									public static isSpace(c: number): boolean;
									public static isValidNmtoken(nmtoken: string): boolean;
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
			export module fastinfoset {
				export module sax {
					export class AttributesHolder extends java.lang.Object implements org.jvnet.fastinfoset.sax.EncodingAlgorithmAttributes {
						public static class: java.lang.Class<com.sun.xml.fastinfoset.sax.AttributesHolder>;
						public getPrefix(index: number): string;
						public getAlpababet(index: number): string;
						public constructor();
						public getValue(index: number): string;
						public getToIndex(index: number): boolean;
						public getLocalName(index: number): string;
						public getAlgorithmData(index: number): any;
						public getIndex(uri: string, localName: string): number;
						public addAttribute(name: com.sun.xml.fastinfoset.QualifiedName, value: string): void;
						public getType(index: number): string;
						public getLength(): number;
						public addAttributeWithAlgorithmData(name: com.sun.xml.fastinfoset.QualifiedName, URI: string, id: number, data: any): void;
						public getType(qName: string): string;
						public constructor(registeredEncodingAlgorithms: java.util.Map<any,any>);
						public getQualifiedName(index: number): com.sun.xml.fastinfoset.QualifiedName;
						public getType(uri: string, localName: string): string;
						public getAlgorithmURI(index: number): string;
						public getValue(qName: string): string;
						public getURI(index: number): string;
						public clear(): void;
						public getValue(uri: string, localName: string): string;
						public getQName(index: number): string;
						public getAlgorithmIndex(index: number): number;
						public getIndex(qName: string): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module fastinfoset {
				export module sax {
					export class Features extends java.lang.Object {
						public static class: java.lang.Class<com.sun.xml.fastinfoset.sax.Features>;
						public static NAMESPACES_FEATURE: string;
						public static NAMESPACE_PREFIXES_FEATURE: string;
						public static STRING_INTERNING_FEATURE: string;
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
			export module fastinfoset {
				export module sax {
					export class Properties extends java.lang.Object {
						public static class: java.lang.Class<com.sun.xml.fastinfoset.sax.Properties>;
						public static LEXICAL_HANDLER_PROPERTY: string;
						public static DTD_DECLARATION_HANDLER_PROPERTY: string;
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
			export module fastinfoset {
				export module sax {
					export class SAXDocumentParser extends com.sun.xml.fastinfoset.Decoder implements org.jvnet.fastinfoset.sax.FastInfosetReader {
						public static class: java.lang.Class<com.sun.xml.fastinfoset.sax.SAXDocumentParser>;
						public _namespacePrefixesFeature: boolean;
						public _entityResolver: org.xml.sax.EntityResolver;
						public _dtdHandler: org.xml.sax.DTDHandler;
						public _contentHandler: org.xml.sax.ContentHandler;
						public _errorHandler: org.xml.sax.ErrorHandler;
						public _lexicalHandler: org.xml.sax.ext.LexicalHandler;
						public _declHandler: org.xml.sax.ext.DeclHandler;
						public _algorithmHandler: org.jvnet.fastinfoset.sax.EncodingAlgorithmContentHandler;
						public _primitiveHandler: org.jvnet.fastinfoset.sax.PrimitiveTypeContentHandler;
						public builtInAlgorithmState: com.sun.xml.fastinfoset.algorithm.BuiltInEncodingAlgorithmState;
						public _attributes: com.sun.xml.fastinfoset.sax.AttributesHolder;
						public _namespacePrefixes: native.Array<number>;
						public _namespacePrefixesIndex: number;
						public _clearAttributes: boolean;
						public parse(systemId: string): void;
						public processEII(name: com.sun.xml.fastinfoset.QualifiedName, hasAttributes: boolean): void;
						public setBufferSize(bufferSize: number): void;
						public setEncodingAlgorithmContentHandler(handler: org.jvnet.fastinfoset.sax.EncodingAlgorithmContentHandler): void;
						public parse(s: java.io.InputStream): void;
						public getPrimitiveTypeContentHandler(): org.jvnet.fastinfoset.sax.PrimitiveTypeContentHandler;
						public setPrimitiveTypeContentHandler(handler: org.jvnet.fastinfoset.sax.PrimitiveTypeContentHandler): void;
						public parse(): void;
						/** @deprecated */
						public getExternalVocabularies(): java.util.Map<any,any>;
						public getRegisteredEncodingAlgorithms(): java.util.Map<any,any>;
						public processDIIFragment(): void;
						public resetOnError(): void;
						public getLexicalHandler(): org.xml.sax.ext.LexicalHandler;
						public constructor();
						public getForceStreamClose(): boolean;
						public getExternalVocabularies(): java.util.Map<any,any>;
						public setExternalVocabularies(referencedVocabualries: java.util.Map<any,any>): void;
						public setEntityResolver(resolver: org.xml.sax.EntityResolver): void;
						public setDTDHandler(handler: org.xml.sax.DTDHandler): void;
						public parse(input: org.xml.sax.InputSource): void;
						public processCIIBuiltInEncodingAlgorithmAsPrimitive(): void;
						public getDeclHandler(): org.xml.sax.ext.DeclHandler;
						public processCIIEncodingAlgorithm(addToTable: boolean): void;
						public setParseFragments(parseFragments: boolean): void;
						public setDeclHandler(handler: org.xml.sax.ext.DeclHandler): void;
						public getFeature(name: string): boolean;
						public processAIIEncodingAlgorithm(name: com.sun.xml.fastinfoset.QualifiedName, addToTable: boolean): void;
						public getBufferSize(): number;
						public setFeature(name: string, value: boolean): void;
						public getProperty(name: string): any;
						public processProcessingII(): void;
						public setStringInterning(stringInterning: boolean): void;
						public setRegisteredEncodingAlgorithms(algorithms: java.util.Map<any,any>): void;
						public processDIIOptionalProperties(): void;
						public processAIIs(): void;
						public setContentHandler(handler: org.xml.sax.ContentHandler): void;
						public setProperty(name: string, value: any): void;
						public processDII(): void;
						public setErrorHandler(handler: org.xml.sax.ErrorHandler): void;
						public getEntityResolver(): org.xml.sax.EntityResolver;
						public setLexicalHandler(handler: org.xml.sax.ext.LexicalHandler): void;
						public processCommentII(): void;
						public getContentHandler(): org.xml.sax.ContentHandler;
						public getStringInterning(): boolean;
						public getParseFragments(): boolean;
						public processBuiltInEncodingAlgorithmAsCharacters(buffer: java.lang.StringBuffer): void;
						public setForceStreamClose(needForceStreamClose: boolean): void;
						public processEIIWithNamespaces(): void;
						public processBuiltInEncodingAlgorithmAsObject(): any;
						public getErrorHandler(): org.xml.sax.ErrorHandler;
						public getEncodingAlgorithmContentHandler(): org.jvnet.fastinfoset.sax.EncodingAlgorithmContentHandler;
						public getDTDHandler(): org.xml.sax.DTDHandler;
					}
					export module SAXDocumentParser {
						export class DeclHandlerImpl extends java.lang.Object implements org.xml.sax.ext.DeclHandler {
							public static class: java.lang.Class<com.sun.xml.fastinfoset.sax.SAXDocumentParser.DeclHandlerImpl>;
							public internalEntityDecl(name: string, value: string): void;
							public elementDecl(name: string, model: string): void;
							public attributeDecl(eName: string, aName: string, type: string, mode: string, value: string): void;
							public externalEntityDecl(name: string, publicId: string, systemId: string): void;
						}
						export class LexicalHandlerImpl extends java.lang.Object implements org.xml.sax.ext.LexicalHandler {
							public static class: java.lang.Class<com.sun.xml.fastinfoset.sax.SAXDocumentParser.LexicalHandlerImpl>;
							public comment(ch: native.Array<string>, start: number, end: number): void;
							public startDTD(name: string, publicId: string, systemId: string): void;
							public endDTD(): void;
							public endCDATA(): void;
							public startCDATA(): void;
							public endEntity(name: string): void;
							public startEntity(name: string): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module fastinfoset {
				export module sax {
					export class SAXDocumentSerializer extends com.sun.xml.fastinfoset.Encoder implements org.jvnet.fastinfoset.sax.FastInfosetWriter {
						public static class: java.lang.Class<com.sun.xml.fastinfoset.sax.SAXDocumentSerializer>;
						public _elementHasNamespaces: boolean;
						public _charactersAsCDATA: boolean;
						public encodeAttribute(namespaceURI: string, qName: string, localName: string): boolean;
						public setOutputStream(s: java.io.OutputStream): void;
						public error(e: org.xml.sax.SAXParseException): void;
						public setIgnoreDTD(ignoreDTD: boolean): void;
						public getIgnoreProcesingInstructions(): boolean;
						public setMaxAttributeValueSize(size: number): void;
						public startDTD(name: string, publicId: string, systemId: string): void;
						public doubles(d: native.Array<number>, start: number, length: number): void;
						public getIgnoreComments(): boolean;
						public setMinAttributeValueSize(size: number): void;
						public processingInstruction(target: string, data: string): void;
						public endPrefixMapping(prefix: string): void;
						public endCDATA(): void;
						public getCharacterEncodingScheme(): string;
						public setIgnoreProcesingInstructions(ignoreProcesingInstructions: boolean): void;
						public getRegisteredEncodingAlgorithms(): java.util.Map<any,any>;
						public startElement(uri: string, localName: string, qName: string, attributes: org.xml.sax.Attributes): void;
						public numericCharacters(ch: native.Array<string>, start: number, length: number): void;
						public startPrefixMapping(prefix: string, uri: string): void;
						public getMaxAttributeValueSize(): number;
						public countAttributes(atts: org.xml.sax.Attributes): number;
						public setIgnoreComments(ignoreComments: boolean): void;
						public warning(e: org.xml.sax.SAXParseException): void;
						public ignorableWhitespace(ch: native.Array<string>, start: number, length: number): void;
						public constructor();
						public setVocabularyApplicationData(data: org.jvnet.fastinfoset.VocabularyApplicationData): void;
						public endEntity(name: string): void;
						public startDocument(): void;
						public object(URI: string, id: number, data: any): void;
						public notationDecl(name: string, publicId: string, systemId: string): void;
						public startEntity(name: string): void;
						public floats(f: native.Array<number>, start: number, length: number): void;
						public endDTD(): void;
						public characters(ch: native.Array<string>, start: number, length: number, index: boolean): void;
						public getMaxCharacterContentChunkSize(): number;
						public encodeElement(namespaceURI: string, qName: string, localName: string): void;
						public fatalError(e: org.xml.sax.SAXParseException): void;
						public dateTimeCharacters(ch: native.Array<string>, start: number, length: number): void;
						public setCharacterContentChunkMapMemoryLimit(size: number): void;
						public alphabetCharacters(alphabet: string, ch: native.Array<string>, start: number, length: number): void;
						public setMaxCharacterContentChunkSize(size: number): void;
						public unparsedEntityDecl(name: string, publicId: string, systemId: string, notationName: string): void;
						public setDocumentLocator(locator: org.xml.sax.Locator): void;
						public shorts(s: native.Array<number>, start: number, length: number): void;
						public reset(): void;
						public characters(ch: native.Array<string>, start: number, length: number): void;
						public setMinCharacterContentChunkSize(size: number): void;
						public ints(i: native.Array<number>, start: number, length: number): void;
						public getMinCharacterContentChunkSize(): number;
						public constructor(v: boolean);
						public startCDATA(): void;
						public setRegisteredEncodingAlgorithms(algorithms: java.util.Map<any,any>): void;
						public getCharacterContentChunkMapMemoryLimit(): number;
						public getIgnoreWhiteSpaceTextContent(): boolean;
						public setCharacterEncodingScheme(characterEncodingScheme: string): void;
						public booleans(b: native.Array<boolean>, start: number, length: number): void;
						public skippedEntity(name: string): void;
						public uuids(msblsb: native.Array<number>, start: number, length: number): void;
						public getAttributeValueMapMemoryLimit(): number;
						public endElement(uri: string, localName: string, qName: string): void;
						public endDocument(): void;
						public bytes(b: native.Array<number>, start: number, length: number): void;
						public octets(URI: string, id: number, b: native.Array<number>, start: number, length: number): void;
						public endElement(namespaceURI: string, localName: string, qName: string): void;
						public comment(ch: native.Array<string>, start: number, length: number): void;
						public longs(l: native.Array<number>, start: number, length: number): void;
						public getVocabularyApplicationData(): org.jvnet.fastinfoset.VocabularyApplicationData;
						public setAttributeValueMapMemoryLimit(size: number): void;
						public startElement(namespaceURI: string, localName: string, qName: string, atts: org.xml.sax.Attributes): void;
						public constructor(useLocalNameAsKeyForQualifiedNameLookup: boolean);
						public getMinAttributeValueSize(): number;
						public getIgnoreDTD(): boolean;
						public setExternalVocabulary(v: org.jvnet.fastinfoset.ExternalVocabulary): void;
						public encodeAttributes(atts: org.xml.sax.Attributes): void;
						public resolveEntity(publicId: string, systemId: string): org.xml.sax.InputSource;
						public setIgnoreWhiteSpaceTextContent(ignoreWhiteSpaceTextContent: boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module fastinfoset {
				export module sax {
					export class SAXDocumentSerializerWithPrefixMapping extends com.sun.xml.fastinfoset.sax.SAXDocumentSerializer {
						public static class: java.lang.Class<com.sun.xml.fastinfoset.sax.SAXDocumentSerializerWithPrefixMapping>;
						public _namespaceToPrefixMapping: java.util.Map<any,any>;
						public _prefixToPrefixMapping: java.util.Map<any,any>;
						public _lastCheckedNamespace: string;
						public _lastCheckedPrefix: string;
						public _declaredNamespaces: com.sun.xml.fastinfoset.util.StringIntMap;
						public encodeAttribute(namespaceURI: string, qName: string, localName: string): boolean;
						public setOutputStream(s: java.io.OutputStream): void;
						public getPrefix(namespaceURI: string): string;
						public error(e: org.xml.sax.SAXParseException): void;
						public setIgnoreDTD(ignoreDTD: boolean): void;
						public getIgnoreProcesingInstructions(): boolean;
						public setMaxAttributeValueSize(size: number): void;
						public getIgnoreComments(): boolean;
						public setMinAttributeValueSize(size: number): void;
						public encodeElementMapEntry(entry: com.sun.xml.fastinfoset.util.LocalNameQualifiedNamesMap.Entry, namespaceURI: string): boolean;
						public endPrefixMapping(prefix: string): void;
						public processingInstruction(target: string, data: string): void;
						public getCharacterEncodingScheme(): string;
						public setIgnoreProcesingInstructions(ignoreProcesingInstructions: boolean): void;
						public getRegisteredEncodingAlgorithms(): java.util.Map<any,any>;
						public startPrefixMapping(prefix: string, uri: string): void;
						public getMaxAttributeValueSize(): number;
						public warning(e: org.xml.sax.SAXParseException): void;
						public setIgnoreComments(ignoreComments: boolean): void;
						public ignorableWhitespace(ch: native.Array<string>, start: number, length: number): void;
						public constructor();
						public setVocabularyApplicationData(data: org.jvnet.fastinfoset.VocabularyApplicationData): void;
						public startDocument(): void;
						public notationDecl(name: string, publicId: string, systemId: string): void;
						public putPrefix(namespaceURI: string, prefix: string): void;
						public characters(ch: native.Array<string>, start: number, length: number, index: boolean): void;
						public getMaxCharacterContentChunkSize(): number;
						public encodeElement(namespaceURI: string, qName: string, localName: string): void;
						public fatalError(e: org.xml.sax.SAXParseException): void;
						public setCharacterContentChunkMapMemoryLimit(size: number): void;
						public setMaxCharacterContentChunkSize(size: number): void;
						public unparsedEntityDecl(name: string, publicId: string, systemId: string, notationName: string): void;
						public setDocumentLocator(locator: org.xml.sax.Locator): void;
						public characters(ch: native.Array<string>, start: number, length: number): void;
						public setMinCharacterContentChunkSize(size: number): void;
						public reset(): void;
						public getMinCharacterContentChunkSize(): number;
						public constructor(v: boolean);
						public setRegisteredEncodingAlgorithms(algorithms: java.util.Map<any,any>): void;
						public getCharacterContentChunkMapMemoryLimit(): number;
						public getIgnoreWhiteSpaceTextContent(): boolean;
						public setCharacterEncodingScheme(characterEncodingScheme: string): void;
						public skippedEntity(name: string): void;
						public getAttributeValueMapMemoryLimit(): number;
						public endDocument(): void;
						public endElement(namespaceURI: string, localName: string, qName: string): void;
						public getVocabularyApplicationData(): org.jvnet.fastinfoset.VocabularyApplicationData;
						public setAttributeValueMapMemoryLimit(size: number): void;
						public constructor(namespaceToPrefixMapping: java.util.Map<any,any>);
						public startElement(namespaceURI: string, localName: string, qName: string, atts: org.xml.sax.Attributes): void;
						public getMinAttributeValueSize(): number;
						public encodeAttributeMapEntry(entry: com.sun.xml.fastinfoset.util.LocalNameQualifiedNamesMap.Entry, namespaceURI: string): boolean;
						public getIgnoreDTD(): boolean;
						public setExternalVocabulary(v: org.jvnet.fastinfoset.ExternalVocabulary): void;
						public encodeAttributes(atts: org.xml.sax.Attributes): void;
						public resolveEntity(publicId: string, systemId: string): org.xml.sax.InputSource;
						public setIgnoreWhiteSpaceTextContent(ignoreWhiteSpaceTextContent: boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module fastinfoset {
				export module sax {
					export class SystemIdResolver extends java.lang.Object {
						public static class: java.lang.Class<com.sun.xml.fastinfoset.sax.SystemIdResolver>;
						public static getAbsoluteURI(systemId: string): string;
						public constructor();
						public static isAbsolutePath(systemId: string): boolean;
						public static isAbsoluteURI(systemId: string): boolean;
						public static getAbsoluteURIFromRelative(localPath: string): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module fastinfoset {
				export module stax {
					export class EventLocation extends java.lang.Object {
						public static class: java.lang.Class<com.sun.xml.fastinfoset.stax.EventLocation>;
						public getSystemId(): string;
						public setLineNumber(line: number): void;
						public getLineNumber(): number;
						public setSystemId(id: string): void;
						public getCharacterOffset(): number;
						public setColumnNumber(col: number): void;
						public static getNilLocation(): javax.xml.stream.Location;
						public setCharacterOffset(offset: number): void;
						public getColumnNumber(): number;
						public toString(): string;
						public getPublicId(): string;
						public setPublicId(id: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module fastinfoset {
				export module stax {
					export class StAXDocumentParser extends com.sun.xml.fastinfoset.Decoder implements org.jvnet.fastinfoset.stax.FastInfosetStreamReader, com.sun.xml.fastinfoset.OctetBufferListener {
						public static class: java.lang.Class<com.sun.xml.fastinfoset.stax.StAXDocumentParser>;
						public static INTERNAL_STATE_START_DOCUMENT: number;
						public static INTERNAL_STATE_START_ELEMENT_TERMINATE: number;
						public static INTERNAL_STATE_SINGLE_TERMINATE_ELEMENT_WITH_NAMESPACES: number;
						public static INTERNAL_STATE_DOUBLE_TERMINATE_ELEMENT: number;
						public static INTERNAL_STATE_END_DOCUMENT: number;
						public static INTERNAL_STATE_VOID: number;
						public _internalState: number;
						public _eventType: number;
						public _qNameStack: native.Array<com.sun.xml.fastinfoset.QualifiedName>;
						public _namespaceAIIsStartStack: native.Array<number>;
						public _namespaceAIIsEndStack: native.Array<number>;
						public _stackCount: number;
						public _namespaceAIIsPrefix: native.Array<string>;
						public _namespaceAIIsNamespaceName: native.Array<string>;
						public _namespaceAIIsPrefixIndex: native.Array<number>;
						public _namespaceAIIsIndex: number;
						public _currentNamespaceAIIsStart: number;
						public _currentNamespaceAIIsEnd: number;
						public _qualifiedName: com.sun.xml.fastinfoset.QualifiedName;
						public _attributes: com.sun.xml.fastinfoset.sax.AttributesHolder;
						public _clearAttributes: boolean;
						public _characters: native.Array<string>;
						public _charactersOffset: number;
						public _algorithmURI: string;
						public _algorithmId: number;
						public _isAlgorithmDataCloned: boolean;
						public _algorithmData: native.Array<number>;
						public _algorithmDataOffset: number;
						public _algorithmDataLength: number;
						public _piTarget: string;
						public _piData: string;
						public _nsContext: com.sun.xml.fastinfoset.stax.StAXDocumentParser.NamespaceContextImpl;
						public _characterEncodingScheme: string;
						public _manager: com.sun.xml.fastinfoset.stax.StAXManager;
						public resizeNamespaceAIIs(): void;
						public getAttributeNameString(index: number): string;
						public isCharacters(): boolean;
						public close(): void;
						public getTextLength(): number;
						public accessTextLength(): number;
						public isBase64Follows(): boolean;
						public setInputStream(s: java.io.InputStream): void;
						public getAttributeNamespace(index: number): string;
						public accessPrefix(): string;
						public getTextAlgorithmBytesClone(): native.Array<number>;
						public processUnexpandedEntityReference(b: number): void;
						public getRegisteredEncodingAlgorithms(): java.util.Map<any,any>;
						public processLiteralQualifiedName(state: number, q: com.sun.xml.fastinfoset.QualifiedName): com.sun.xml.fastinfoset.QualifiedName;
						public resetOnError(): void;
						public hasText(): boolean;
						public getNamespaceURI(index: number): string;
						public accessNamespaceURI(): string;
						public getPrefixes(): java.util.Iterator<any>;
						public require(type: number, namespaceURI: string, localName: string): void;
						public constructor();
						public getForceStreamClose(): boolean;
						public getNameString(): string;
						public isAttributeSpecified(index: number): boolean;
						public accessTextStart(): number;
						public getPIData(): string;
						public getLocation(): javax.xml.stream.Location;
						public getTextAlgorithmIndex(): number;
						public processDIIOptionalProperties(b: number): void;
						public getName(): javax.xml.namespace.QName;
						public getAttributeCount(): number;
						public processAIIEncodingAlgorithm(name: com.sun.xml.fastinfoset.QualifiedName, addToTable: boolean): void;
						public getNamespaceContext(): javax.xml.namespace.NamespaceContext;
						public convertBase64AlorithmDataToCharacters(buffer: java.lang.StringBuffer): void;
						public getTextAlgorithmLength(): number;
						public getProperty(name: string): any;
						public getTextAlgorithmStart(): number;
						public processProcessingII(): void;
						public setRegisteredEncodingAlgorithms(algorithms: java.util.Map<any,any>): void;
						public onBeforeOctetBufferOverwrite(): void;
						public isStandalone(): boolean;
						/** @deprecated */
						public getTextAlgorithmBytes(): native.Array<number>;
						public getNamespaceURI(prefix: string): string;
						public getText(): string;
						public isWhiteSpace(): boolean;
						public constructor(s: java.io.InputStream);
						public getEventType(): number;
						public nextTag(currentTagRead: boolean): number;
						public processCommentII(): void;
						public getAttributeType(index: number): string;
						public hasName(): boolean;
						public getStringInterning(): boolean;
						public getAttributeValue(namespaceURI: string, localName: string): string;
						public getURI(prefix: string): string;
						public processEIIIndexMedium(b: number): com.sun.xml.fastinfoset.QualifiedName;
						public hasNext(): boolean;
						public getNamespaceDecl(prefix: string): string;
						public getNamespaceCount(): number;
						public getNamespaceURI(): string;
						public processEII(name: com.sun.xml.fastinfoset.QualifiedName, hasAttributes: boolean): void;
						public setBufferSize(bufferSize: number): void;
						public getTextCharacters(sourceStart: number, target: native.Array<string>, targetStart: number, length: number): number;
						public accessLocalName(): string;
						public getCharacterEncodingScheme(): string;
						public getAttributesHolder(): com.sun.xml.fastinfoset.sax.AttributesHolder;
						public setManager(manager: com.sun.xml.fastinfoset.stax.StAXManager): void;
						/** @deprecated */
						public getExternalVocabularies(): java.util.Map<any,any>;
						public getElementText(): string;
						public getNamespacePrefix(index: number): string;
						public getExternalVocabularies(): java.util.Map<any,any>;
						public setExternalVocabularies(referencedVocabualries: java.util.Map<any,any>): void;
						public getAttributeName(index: number): javax.xml.namespace.QName;
						public accessNamespaceCount(): number;
						public processCIIEncodingAlgorithm(addToTable: boolean): void;
						public setParseFragments(parseFragments: boolean): void;
						public getAttributeLocalName(index: number): string;
						public standaloneSet(): boolean;
						public processEIIIndexLarge(b: number): com.sun.xml.fastinfoset.QualifiedName;
						public getBufferSize(): number;
						public isEndElement(): boolean;
						public reset(): void;
						public getElementText(startElementRead: boolean): string;
						public getVersion(): string;
						public setStringInterning(stringInterning: boolean): void;
						public convertEncodingAlgorithmDataToCharacters(): void;
						public getPrefix(): string;
						public next(): number;
						public processAIIs(): void;
						public processEIIWithNamespaces(hasAttributes: boolean): void;
						public getAttributePrefix(index: number): string;
						public getAttributeValue(index: number): string;
						public peekNext(): number;
						public processDII(): void;
						public getEncoding(): string;
						public getTextAlgorithmURI(): string;
						public isStartElement(): boolean;
						public constructor(s: java.io.InputStream, manager: com.sun.xml.fastinfoset.stax.StAXManager);
						public accessTextCharacters(): native.Array<string>;
						public nextTag(): number;
						public hasTextAlgorithmBytes(): boolean;
						public getPITarget(): string;
						public getParseFragments(): boolean;
						public getTextCharacters(): native.Array<string>;
						public getLocalName(): string;
						public setForceStreamClose(needForceStreamClose: boolean): void;
						public getTextAlgorithmBytes(sourceStart: number, target: native.Array<number>, targetStart: number, length: number): number;
						public checkTextState(): void;
						public getTextStart(): number;
					}
					export module StAXDocumentParser {
						export class NamespaceContextImpl extends java.lang.Object implements javax.xml.namespace.NamespaceContext {
							public static class: java.lang.Class<com.sun.xml.fastinfoset.stax.StAXDocumentParser.NamespaceContextImpl>;
							public getPrefix(namespaceURI: string): string;
							public getPrefixes(namespaceURI: string): java.util.Iterator<any>;
							public constructor(this0: com.sun.xml.fastinfoset.stax.StAXDocumentParser);
							public getNamespaceURI(prefix: string): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module fastinfoset {
				export module stax {
					export class StAXDocumentSerializer extends com.sun.xml.fastinfoset.Encoder implements org.jvnet.fastinfoset.stax.LowLevelFastInfosetStreamWriter {
						public static class: java.lang.Class<com.sun.xml.fastinfoset.stax.StAXDocumentSerializer>;
						public _manager: com.sun.xml.fastinfoset.stax.StAXManager;
						public _encoding: string;
						public _currentLocalName: string;
						public _currentUri: string;
						public _currentPrefix: string;
						public _inStartElement: boolean;
						public _isEmptyElement: boolean;
						public _attributesArray: native.Array<string>;
						public _attributesArrayIndex: number;
						public _nsSupportContextStack: native.Array<boolean>;
						public _stackCount: number;
						public _nsContext: com.sun.xml.fastinfoset.util.NamespaceContextImplementation;
						public _namespacesArray: native.Array<string>;
						public _namespacesArrayIndex: number;
						public close(): void;
						public setIgnoreDTD(ignoreDTD: boolean): void;
						public setMaxAttributeValueSize(size: number): void;
						public writeComment(data: string): void;
						public writeStartElement(namespaceURI: string, localName: string): void;
						public processingInstruction(target: string, data: string): void;
						public getRegisteredEncodingAlgorithms(): java.util.Map<any,any>;
						public initiateLowLevelWriting(): void;
						public startElement(uri: string, localName: string, qName: string, attributes: org.xml.sax.Attributes): void;
						public ignorableWhitespace(ch: native.Array<string>, start: number, length: number): void;
						public constructor();
						public setVocabularyApplicationData(data: org.jvnet.fastinfoset.VocabularyApplicationData): void;
						public startDocument(): void;
						public flush(): void;
						public getMaxCharacterContentChunkSize(): number;
						public writeProcessingInstruction(target: string, data: string): void;
						public setCharacterContentChunkMapMemoryLimit(size: number): void;
						public getNamespaceContext(): javax.xml.namespace.NamespaceContext;
						public setDocumentLocator(locator: org.xml.sax.Locator): void;
						public getMinCharacterContentChunkSize(): number;
						public getProperty(name: string): any;
						public writeStartDocument(encoding: string, version: string): void;
						public setRegisteredEncodingAlgorithms(algorithms: java.util.Map<any,any>): void;
						public setCharacterEncodingScheme(characterEncodingScheme: string): void;
						public writeAttribute(prefix: string, namespaceURI: string, localName: string, value: string): void;
						public skippedEntity(name: string): void;
						public getAttributeValueMapMemoryLimit(): number;
						public writeEndDocument(): void;
						public setDefaultNamespace(uri: string): void;
						public endDocument(): void;
						public writeLowLevelText(text: string): void;
						public getVocabularyApplicationData(): org.jvnet.fastinfoset.VocabularyApplicationData;
						public writeEmptyElement(prefix: string, localName: string, namespaceURI: string): void;
						public constructor(outputStream: java.io.OutputStream);
						public writeLowLevelStartAttributes(): void;
						public writeAttribute(localName: string, value: string): void;
						public writeCData(text: string): void;
						public writeLowLevelStartNameLiteral(type: number, prefix: string, localNameIndex: number, namespaceURI: string): void;
						public constructor(outputStream: java.io.OutputStream, manager: com.sun.xml.fastinfoset.stax.StAXManager);
						public writeLowLevelTerminationAndMark(): void;
						public getMinAttributeValueSize(): number;
						public getIgnoreDTD(): boolean;
						public writeStartDocument(version: string): void;
						public resolveEntity(publicId: string, systemId: string): org.xml.sax.InputSource;
						public writeLowLevelNamespace(prefix: string, namespaceName: string): void;
						public setOutputStream(s: java.io.OutputStream): void;
						public error(e: org.xml.sax.SAXParseException): void;
						public getIgnoreProcesingInstructions(): boolean;
						public writeCharacters(text: string): void;
						public writeLowLevelAttributeIndexed(index: number): void;
						public writeLowLevelText(text: native.Array<string>, length: number): void;
						public writeStartElement(prefix: string, localName: string, namespaceURI: string): void;
						public getIgnoreComments(): boolean;
						public setMinAttributeValueSize(size: number): void;
						public writeLowLevelOctets(octets: native.Array<number>, length: number): void;
						public writeNamespace(prefix: string, namespaceURI: string): void;
						public endPrefixMapping(prefix: string): void;
						public getNextAttributeIndex(): number;
						public setManager(manager: com.sun.xml.fastinfoset.stax.StAXManager): void;
						public getCharacterEncodingScheme(): string;
						public setIgnoreProcesingInstructions(ignoreProcesingInstructions: boolean): void;
						public startPrefixMapping(prefix: string, uri: string): void;
						public getMaxAttributeValueSize(): number;
						public setNamespaceContext(context: javax.xml.namespace.NamespaceContext): void;
						public encodeTerminationAndCurrentElement(terminateAfter: boolean): void;
						public warning(e: org.xml.sax.SAXParseException): void;
						public setIgnoreComments(ignoreComments: boolean): void;
						public setPrefix(prefix: string, uri: string): void;
						public notationDecl(name: string, publicId: string, systemId: string): void;
						public getLocalNameIndex(): number;
						public writeLowLevelAttribute(prefix: string, namespaceURI: string, localName: string): boolean;
						public getNextLocalNameIndex(): number;
						public writeLowLevelStartElement(type: number, prefix: string, localName: string, namespaceURI: string): boolean;
						public fatalError(e: org.xml.sax.SAXParseException): void;
						public writeCharacters(text: native.Array<string>, start: number, len: number): void;
						public setMaxCharacterContentChunkSize(size: number): void;
						public writeStartElement(localName: string): void;
						public writeDefaultNamespace(namespaceURI: string): void;
						public writeEmptyElement(namespaceURI: string, localName: string): void;
						public unparsedEntityDecl(name: string, publicId: string, systemId: string, notationName: string): void;
						public writeEntityRef(name: string): void;
						public reset(): void;
						public characters(ch: native.Array<string>, start: number, length: number): void;
						public setMinCharacterContentChunkSize(size: number): void;
						public writeLowLevelEndStartElement(): void;
						public writeLowLevelStartElementIndexed(type: number, index: number): void;
						public getCharacterContentChunkMapMemoryLimit(): number;
						public writeOctets(b: native.Array<number>, start: number, len: number): void;
						public writeEmptyElement(localName: string): void;
						public getIgnoreWhiteSpaceTextContent(): boolean;
						public writeLowLevelAttributeValue(value: string): void;
						public writeProcessingInstruction(target: string): void;
						public endElement(uri: string, localName: string, qName: string): void;
						public getNextElementIndex(): number;
						public writeLowLevelEndElement(): void;
						public writeAttribute(namespaceURI: string, localName: string, value: string): void;
						public writeLowLevelStartNameLiteral(type: number, prefix: string, utf8LocalName: native.Array<number>, namespaceURI: string): void;
						public setAttributeValueMapMemoryLimit(size: number): void;
						public constructor(useLocalNameAsKeyForQualifiedNameLookup: boolean);
						public writeDTD(dtd: string): void;
						public setEncoding(encoding: string): void;
						public setExternalVocabulary(v: org.jvnet.fastinfoset.ExternalVocabulary): void;
						public writeStartDocument(): void;
						public writeEndElement(): void;
						public writeLowLevelStartNamespaces(): void;
						public writeLowLevelEndNamespaces(): void;
						public getPrefix(uri: string): string;
						public setIgnoreWhiteSpaceTextContent(ignoreWhiteSpaceTextContent: boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module fastinfoset {
				export module stax {
					export class StAXManager extends java.lang.Object {
						public static class: java.lang.Class<com.sun.xml.fastinfoset.stax.StAXManager>;
						public static STAX_NOTATIONS: string;
						public static STAX_ENTITIES: string;
						public static CONTEXT_READER: number;
						public static CONTEXT_WRITER: number;
						public checkProperty(name: string): void;
						public constructor();
						public getProperty(name: string): any;
						public constructor(context: number);
						public setProperty(name: string, value: any): void;
						public containsProperty(property: string): boolean;
						public constructor(manager: com.sun.xml.fastinfoset.stax.StAXManager);
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
			export module fastinfoset {
				export module stax {
					export module events {
						export class AttributeBase extends com.sun.xml.fastinfoset.stax.events.EventBase {
							public static class: java.lang.Class<com.sun.xml.fastinfoset.stax.events.AttributeBase>;
							public constructor();
							public constructor(qname: javax.xml.namespace.QName, value: string);
							public getDTDType(): string;
							public setName(name: javax.xml.namespace.QName): void;
							public setValue(value: string): void;
							public constructor(prefix: string, namespaceURI: string, localName: string, value: string, attributeType: string);
							public getValue(): string;
							public toString(): string;
							public constructor(prefix: string, localName: string, value: string);
							public setSpecified(isSpecified: boolean): void;
							public constructor(name: string, value: string);
							public setAttributeType(attributeType: string): void;
							public constructor(eventType: number);
							public getName(): javax.xml.namespace.QName;
							public getLocalName(): string;
							public isSpecified(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module fastinfoset {
				export module stax {
					export module events {
						export class CharactersEvent extends com.sun.xml.fastinfoset.stax.events.EventBase {
							public static class: java.lang.Class<com.sun.xml.fastinfoset.stax.events.CharactersEvent>;
							public constructor();
							public isCData(): boolean;
							public isWhiteSpace(): boolean;
							public constructor(eventType: number);
							public getData(): string;
							public setIgnorable(isIgnorable: boolean): void;
							public setData(data: string): void;
							public constructor(data: string);
							public constructor(data: string, isCData: boolean);
							public toString(): string;
							public setSpace(isSpace: boolean): void;
							public isIgnorableWhiteSpace(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module fastinfoset {
				export module stax {
					export module events {
						export class CommentEvent extends com.sun.xml.fastinfoset.stax.events.EventBase {
							public static class: java.lang.Class<com.sun.xml.fastinfoset.stax.events.CommentEvent>;
							public constructor();
							public constructor(eventType: number);
							public getText(): string;
							public constructor(text: string);
							public toString(): string;
							public setText(text: string): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module fastinfoset {
				export module stax {
					export module events {
						export class DTDEvent extends com.sun.xml.fastinfoset.stax.events.EventBase {
							public static class: java.lang.Class<com.sun.xml.fastinfoset.stax.events.DTDEvent>;
							public constructor();
							public constructor(eventType: number);
							public setNotations(notations: java.util.List<any>): void;
							public getDocumentTypeDeclaration(): string;
							public setDTD(dtd: string): void;
							public getNotations(): java.util.List<any>;
							public toString(): string;
							public constructor(dtd: string);
							public setEntities(entites: java.util.List<any>): void;
							public getEntities(): java.util.List<any>;
							public getProcessedDTD(): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module fastinfoset {
				export module stax {
					export module events {
						export class EmptyIterator extends java.lang.Object {
							public static class: java.lang.Class<com.sun.xml.fastinfoset.stax.events.EmptyIterator>;
							public static instance: com.sun.xml.fastinfoset.stax.events.EmptyIterator;
							public static getInstance(): com.sun.xml.fastinfoset.stax.events.EmptyIterator;
							public hasNext(): boolean;
							public remove(): void;
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
			export module fastinfoset {
				export module stax {
					export module events {
						export class EndDocumentEvent extends com.sun.xml.fastinfoset.stax.events.EventBase {
							public static class: java.lang.Class<com.sun.xml.fastinfoset.stax.events.EndDocumentEvent>;
							public constructor();
							public constructor(eventType: number);
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
			export module fastinfoset {
				export module stax {
					export module events {
						export class EndElementEvent extends com.sun.xml.fastinfoset.stax.events.EventBase {
							public static class: java.lang.Class<com.sun.xml.fastinfoset.stax.events.EndElementEvent>;
							public constructor();
							public constructor(eventType: number);
							public constructor(qname: javax.xml.namespace.QName);
							public getName(): javax.xml.namespace.QName;
							public setName(qname: javax.xml.namespace.QName): void;
							public constructor(prefix: string, namespaceURI: string, localpart: string);
							public addNamespace(namespace: javax.xml.stream.events.Namespace): void;
							public toString(): string;
							public reset(): void;
							public getNamespaces(): java.util.Iterator<any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module fastinfoset {
				export module stax {
					export module events {
						export class EntityDeclarationImpl extends com.sun.xml.fastinfoset.stax.events.EventBase {
							public static class: java.lang.Class<com.sun.xml.fastinfoset.stax.events.EntityDeclarationImpl>;
							public constructor();
							public init(): void;
							public getReplacementText(): string;
							public constructor(entityName: string, replacement: string);
							public getNotationName(): string;
							public getBaseURI(): string;
							public setReplacementText(replacement: string): void;
							public setNotationName(notationName: string): void;
							public getSystemId(): string;
							public constructor(eventType: number);
							public setBaseURI(baseURI: string): void;
							public getName(): string;
							public setPublicId(publicId: string): void;
							public setName(entityName: string): void;
							public setSystemId(systemId: string): void;
							public getPublicId(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module fastinfoset {
				export module stax {
					export module events {
						export class EntityReferenceEvent extends com.sun.xml.fastinfoset.stax.events.EventBase {
							public static class: java.lang.Class<com.sun.xml.fastinfoset.stax.events.EntityReferenceEvent>;
							public constructor();
							public getDeclaration(): javax.xml.stream.events.EntityDeclaration;
							public constructor(entityName: string, entityDeclaration: javax.xml.stream.events.EntityDeclaration);
							public setName(name: string): void;
							public constructor(eventType: number);
							public setDeclaration(declaration: javax.xml.stream.events.EntityDeclaration): void;
							public init(): void;
							public getName(): string;
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
			export module fastinfoset {
				export module stax {
					export module events {
						export abstract class EventBase extends java.lang.Object {
							public static class: java.lang.Class<com.sun.xml.fastinfoset.stax.events.EventBase>;
							public _eventType: number;
							public _location: javax.xml.stream.Location;
							public constructor();
							public isAttribute(): boolean;
							public isProcessingInstruction(): boolean;
							public asCharacters(): javax.xml.stream.events.Characters;
							public getLocation(): javax.xml.stream.Location;
							public getEventType(): number;
							public setLocation(loc: javax.xml.stream.Location): void;
							public isStartElement(): boolean;
							public isEntityReference(): boolean;
							public isStartDocument(): boolean;
							public getSystemId(): string;
							public getSchemaType(): javax.xml.namespace.QName;
							public isNamespace(): boolean;
							public constructor(eventType: number);
							public isCharacters(): boolean;
							public setEventType(eventType: number): void;
							public isEndDocument(): boolean;
							public asEndElement(): javax.xml.stream.events.EndElement;
							public isEndElement(): boolean;
							public writeAsEncodedUnicode(writer: java.io.Writer): void;
							public asStartElement(): javax.xml.stream.events.StartElement;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module fastinfoset {
				export module stax {
					export module events {
						export class NamespaceBase extends com.sun.xml.fastinfoset.stax.events.AttributeBase {
							public static class: java.lang.Class<com.sun.xml.fastinfoset.stax.events.NamespaceBase>;
							public constructor();
							public constructor(qname: javax.xml.namespace.QName, value: string);
							public isNamespace(): boolean;
							public constructor(eventType: number);
							public constructor(namespaceURI: string);
							public constructor(prefix: string, namespaceURI: string);
							public constructor(prefix: string, namespaceURI: string, localName: string, value: string, attributeType: string);
							public isDefaultNamespaceDeclaration(): boolean;
							public constructor(prefix: string, localName: string, value: string);
							public constructor(name: string, value: string);
							public getPrefix(): string;
							public getNamespaceURI(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module fastinfoset {
				export module stax {
					export module events {
						export class ProcessingInstructionEvent extends com.sun.xml.fastinfoset.stax.events.EventBase {
							public static class: java.lang.Class<com.sun.xml.fastinfoset.stax.events.ProcessingInstructionEvent>;
							public constructor();
							public constructor(eventType: number);
							public getData(): string;
							public init(): void;
							public setData(data: string): void;
							public getTarget(): string;
							public setTarget(targetName: string): void;
							public toString(): string;
							public constructor(targetName: string, data: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module fastinfoset {
				export module stax {
					export module events {
						export class ReadIterator extends java.lang.Object {
							public static class: java.lang.Class<com.sun.xml.fastinfoset.stax.events.ReadIterator>;
							public constructor();
							public hasNext(): boolean;
							public remove(): void;
							public constructor(iterator: java.util.Iterator<any>);
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
			export module fastinfoset {
				export module stax {
					export module events {
						export class StAXEventAllocatorBase extends java.lang.Object {
							public static class: java.lang.Class<com.sun.xml.fastinfoset.stax.events.StAXEventAllocatorBase>;
							public constructor();
							public addNamespaces(event: com.sun.xml.fastinfoset.stax.events.StartElementEvent, streamReader: javax.xml.stream.XMLStreamReader): void;
							public newInstance(): javax.xml.stream.util.XMLEventAllocator;
							public addNamespaces(event: com.sun.xml.fastinfoset.stax.events.EndElementEvent, streamReader: javax.xml.stream.XMLStreamReader): void;
							public addAttributes(event: com.sun.xml.fastinfoset.stax.events.StartElementEvent, streamReader: javax.xml.stream.XMLStreamReader): void;
							public allocate(streamReader: javax.xml.stream.XMLStreamReader): javax.xml.stream.events.XMLEvent;
							public allocate(streamReader: javax.xml.stream.XMLStreamReader, consumer: javax.xml.stream.util.XMLEventConsumer): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module fastinfoset {
				export module stax {
					export module events {
						export class StAXEventReader extends java.lang.Object {
							public static class: java.lang.Class<com.sun.xml.fastinfoset.stax.events.StAXEventReader>;
							public _streamReader: javax.xml.stream.XMLStreamReader;
							public _eventAllocator: javax.xml.stream.util.XMLEventAllocator;
							public getProperty(name: string): any;
							public nextEvent(): javax.xml.stream.events.XMLEvent;
							public close(): void;
							public setAllocator(allocator: javax.xml.stream.util.XMLEventAllocator): void;
							public getElementText(): string;
							public nextTag(): javax.xml.stream.events.XMLEvent;
							public hasNext(): boolean;
							public remove(): void;
							public peek(): javax.xml.stream.events.XMLEvent;
							public constructor(reader: javax.xml.stream.XMLStreamReader);
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
			export module fastinfoset {
				export module stax {
					export module events {
						export class StAXEventWriter extends java.lang.Object {
							public static class: java.lang.Class<com.sun.xml.fastinfoset.stax.events.StAXEventWriter>;
							public close(): void;
							public getPrefix(uri: string): string;
							public constructor(streamWriter: javax.xml.stream.XMLStreamWriter);
							public setNamespaceContext(namespaceContext: javax.xml.namespace.NamespaceContext): void;
							public add(event: javax.xml.stream.events.XMLEvent): void;
							public setPrefix(prefix: string, uri: string): void;
							public flush(): void;
							public add(eventReader: javax.xml.stream.XMLEventReader): void;
							public setDefaultNamespace(uri: string): void;
							public getNamespaceContext(): javax.xml.namespace.NamespaceContext;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module fastinfoset {
				export module stax {
					export module events {
						export class StAXFilteredEvent extends java.lang.Object {
							public static class: java.lang.Class<com.sun.xml.fastinfoset.stax.events.StAXFilteredEvent>;
							public constructor();
							public getProperty(name: string): any;
							public close(): void;
							public hasNext(): boolean;
							public remove(): void;
							public constructor(reader: javax.xml.stream.XMLEventReader, filter: javax.xml.stream.EventFilter);
							public setFilter(filter: javax.xml.stream.EventFilter): void;
							public nextEvent(): javax.xml.stream.events.XMLEvent;
							public getElementText(): string;
							public nextTag(): javax.xml.stream.events.XMLEvent;
							public peek(): javax.xml.stream.events.XMLEvent;
							public setEventReader(reader: javax.xml.stream.XMLEventReader): void;
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
			export module fastinfoset {
				export module stax {
					export module events {
						export class StartDocumentEvent extends com.sun.xml.fastinfoset.stax.events.EventBase {
							public static class: java.lang.Class<com.sun.xml.fastinfoset.stax.events.StartDocumentEvent>;
							public _systemId: string;
							public _encoding: string;
							public _standalone: boolean;
							public _version: string;
							public constructor();
							public constructor(encoding: string);
							public encodingSet(): boolean;
							public toString(): string;
							public reset(): void;
							public constructor(encoding: string, version: string);
							public getSystemId(): string;
							public isStartDocument(): boolean;
							public constructor(eventType: number);
							public getCharacterEncodingScheme(): string;
							public setVersion(s: string): void;
							public setStandalone(s: string): void;
							public standaloneSet(): boolean;
							public isStandalone(): boolean;
							public setEncoding(encoding: string): void;
							public getVersion(): string;
							public setStandalone(standalone: boolean): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module fastinfoset {
				export module stax {
					export module events {
						export class StartElementEvent extends com.sun.xml.fastinfoset.stax.events.EventBase {
							public static class: java.lang.Class<com.sun.xml.fastinfoset.stax.events.StartElementEvent>;
							public constructor();
							public setName(qname: javax.xml.namespace.QName): void;
							public init(): void;
							public setNamespaceContext(context: javax.xml.namespace.NamespaceContext): void;
							public constructor(startelement: javax.xml.stream.events.StartElement);
							public toString(): string;
							public getNamespaceContext(): javax.xml.namespace.NamespaceContext;
							public reset(): void;
							public constructor(eventType: number);
							public addAttribute(attr: javax.xml.stream.events.Attribute): void;
							public addNamespaces(namespaces: java.util.Iterator<any>): void;
							public constructor(qname: javax.xml.namespace.QName);
							public getName(): javax.xml.namespace.QName;
							public getAttributes(): java.util.Iterator<any>;
							public addNamespace(namespace: javax.xml.stream.events.Namespace): void;
							public getAttributeByName(qname: javax.xml.namespace.QName): javax.xml.stream.events.Attribute;
							public constructor(prefix: string, uri: string, localpart: string);
							public getNamespaceURI(prefix: string): string;
							public getNamespaces(): java.util.Iterator<any>;
							public getNamespace(): string;
							public nameAsString(): string;
							public addAttributes(attrs: java.util.Iterator<any>): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module fastinfoset {
				export module stax {
					export module events {
						export class Util extends java.lang.Object {
							public static class: java.lang.Class<com.sun.xml.fastinfoset.stax.events.Util>;
							public constructor();
							public static isEmptyString(s: string): boolean;
							public static getEventTypeString(eventType: number): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module fastinfoset {
				export module stax {
					export module events {
						export class XMLConstants extends java.lang.Object {
							public static class: java.lang.Class<com.sun.xml.fastinfoset.stax.events.XMLConstants>;
							public static ENCODING: string;
							public static XMLVERSION: string;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module fastinfoset {
				export module stax {
					export module factory {
						export class StAXEventFactory {
							public static class: java.lang.Class<com.sun.xml.fastinfoset.stax.factory.StAXEventFactory>;
							public createStartDocument(encoding: string): javax.xml.stream.events.StartDocument;
							public createCharacters(content: string): javax.xml.stream.events.Characters;
							public createNamespace(namespaceURI: string): javax.xml.stream.events.Namespace;
							public createStartElement(prefix: string, namespaceUri: string, localName: string): javax.xml.stream.events.StartElement;
							public createProcessingInstruction(target: string, data: string): javax.xml.stream.events.ProcessingInstruction;
							public createIgnorableSpace(content: string): javax.xml.stream.events.Characters;
							public createNamespace(prefix: string, namespaceURI: string): javax.xml.stream.events.Namespace;
							public createAttribute(name: javax.xml.namespace.QName, value: string): javax.xml.stream.events.Attribute;
							public constructor();
							public createAttribute(localName: string, value: string): javax.xml.stream.events.Attribute;
							public createStartDocument(encoding: string, version: string, standalone: boolean): javax.xml.stream.events.StartDocument;
							public createStartDocument(encoding: string, version: string): javax.xml.stream.events.StartDocument;
							public createComment(text: string): javax.xml.stream.events.Comment;
							public createStartElement(name: javax.xml.namespace.QName, attributes: java.util.Iterator<any>, namespaces: java.util.Iterator<any>): javax.xml.stream.events.StartElement;
							public setLocation(location: javax.xml.stream.Location): void;
							public createStartElement(prefix: string, namespaceUri: string, localName: string, attributes: java.util.Iterator<any>, namespaces: java.util.Iterator<any>, context: javax.xml.namespace.NamespaceContext): javax.xml.stream.events.StartElement;
							public createStartElement(prefix: string, namespaceUri: string, localName: string, attributes: java.util.Iterator<any>, namespaces: java.util.Iterator<any>): javax.xml.stream.events.StartElement;
							public createCData(content: string): javax.xml.stream.events.Characters;
							public createEndElement(prefix: string, namespaceUri: string, localName: string): javax.xml.stream.events.EndElement;
							public createEntityReference(name: string, entityDeclaration: javax.xml.stream.events.EntityDeclaration): javax.xml.stream.events.EntityReference;
							public createDTD(dtd: string): javax.xml.stream.events.DTD;
							public createAttribute(prefix: string, namespaceURI: string, localName: string, value: string): javax.xml.stream.events.Attribute;
							public createEndDocument(): javax.xml.stream.events.EndDocument;
							public createSpace(content: string): javax.xml.stream.events.Characters;
							public createEndElement(name: javax.xml.namespace.QName, namespaces: java.util.Iterator<any>): javax.xml.stream.events.EndElement;
							public createStartDocument(): javax.xml.stream.events.StartDocument;
							public createEndElement(prefix: string, namespaceUri: string, localName: string, namespaces: java.util.Iterator<any>): javax.xml.stream.events.EndElement;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module fastinfoset {
				export module stax {
					export module factory {
						export class StAXInputFactory {
							public static class: java.lang.Class<com.sun.xml.fastinfoset.stax.factory.StAXInputFactory>;
							public setXMLResolver(xmlresolver: javax.xml.stream.XMLResolver): void;
							public createXMLStreamReader(inputstream: java.io.InputStream, encoding: string): javax.xml.stream.XMLStreamReader;
							public createXMLStreamReader(s: java.io.InputStream): javax.xml.stream.XMLStreamReader;
							public isPropertySupported(name: string): boolean;
							public createXMLEventReader(stream: java.io.InputStream, encoding: string): javax.xml.stream.XMLEventReader;
							public createXMLEventReader(systemId: string, reader: java.io.Reader): javax.xml.stream.XMLEventReader;
							public createFilteredReader(reader: javax.xml.stream.XMLEventReader, filter: javax.xml.stream.EventFilter): javax.xml.stream.XMLEventReader;
							public createFilteredReader(reader: javax.xml.stream.XMLStreamReader, filter: javax.xml.stream.StreamFilter): javax.xml.stream.XMLStreamReader;
							public setEventAllocator(allocator: javax.xml.stream.util.XMLEventAllocator): void;
							public setProperty(name: string, value: any): void;
							public createXMLEventReader(systemId: string, inputstream: java.io.InputStream): javax.xml.stream.XMLEventReader;
							public createXMLStreamReader(systemId: string, inputstream: java.io.InputStream): javax.xml.stream.XMLStreamReader;
							public getXMLResolver(): javax.xml.stream.XMLResolver;
							public constructor();
							public getProperty(name: string): any;
							public static newInstance(): javax.xml.stream.XMLInputFactory;
							public createXMLStreamReader(xmlfile: java.io.Reader): javax.xml.stream.XMLStreamReader;
							public createXMLEventReader(inputstream: java.io.InputStream): javax.xml.stream.XMLEventReader;
							public createXMLEventReader(reader: java.io.Reader): javax.xml.stream.XMLEventReader;
							public getXMLReporter(): javax.xml.stream.XMLReporter;
							public setXMLReporter(xmlreporter: javax.xml.stream.XMLReporter): void;
							public getEventAllocator(): javax.xml.stream.util.XMLEventAllocator;
							public createXMLEventReader(streamReader: javax.xml.stream.XMLStreamReader): javax.xml.stream.XMLEventReader;
							public createXMLStreamReader(source: javax.xml.transform.Source): javax.xml.stream.XMLStreamReader;
							public createXMLEventReader(source: javax.xml.transform.Source): javax.xml.stream.XMLEventReader;
							public createXMLStreamReader(systemId: string, xmlfile: java.io.Reader): javax.xml.stream.XMLStreamReader;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module fastinfoset {
				export module stax {
					export module factory {
						export class StAXOutputFactory {
							public static class: java.lang.Class<com.sun.xml.fastinfoset.stax.factory.StAXOutputFactory>;
							public constructor();
							public getProperty(name: string): any;
							public isPropertySupported(name: string): boolean;
							public createXMLEventWriter(outputStream: java.io.OutputStream, encoding: string): javax.xml.stream.XMLEventWriter;
							public createXMLStreamWriter(result: javax.xml.transform.Result): javax.xml.stream.XMLStreamWriter;
							public createXMLStreamWriter(writer: java.io.Writer): javax.xml.stream.XMLStreamWriter;
							public createXMLStreamWriter(outputStream: java.io.OutputStream): javax.xml.stream.XMLStreamWriter;
							public setProperty(name: string, value: any): void;
							public createXMLEventWriter(result: javax.xml.transform.Result): javax.xml.stream.XMLEventWriter;
							public createXMLEventWriter(outputStream: java.io.OutputStream): javax.xml.stream.XMLEventWriter;
							public createXMLEventWriter(writer: java.io.Writer): javax.xml.stream.XMLEventWriter;
							public createXMLStreamWriter(outputStream: java.io.OutputStream, encoding: string): javax.xml.stream.XMLStreamWriter;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module fastinfoset {
				export module stax {
					export module util {
						export class StAXFilteredParser extends com.sun.xml.fastinfoset.stax.util.StAXParserWrapper {
							public static class: java.lang.Class<com.sun.xml.fastinfoset.stax.util.StAXFilteredParser>;
							public constructor();
							public hasNext(): boolean;
							public setFilter(filter: javax.xml.stream.StreamFilter): void;
							public constructor(reader: javax.xml.stream.XMLStreamReader);
							public next(): number;
							public constructor(reader: javax.xml.stream.XMLStreamReader, filter: javax.xml.stream.StreamFilter);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module fastinfoset {
				export module stax {
					export module util {
						export class StAXParserWrapper extends java.lang.Object {
							public static class: java.lang.Class<com.sun.xml.fastinfoset.stax.util.StAXParserWrapper>;
							public isWhiteSpace(): boolean;
							public getTextCharacters(): native.Array<string>;
							public getAttributeCount(): number;
							public close(): void;
							public getAttributeValue(namespaceUri: string, localName: string): string;
							public getAttributeValue(index: number): string;
							public getAttributeLocalName(index: number): string;
							public getPITarget(): string;
							public nextTag(): number;
							public require(type: number, namespaceURI: string, localName: string): void;
							public getAttributeName(index: number): javax.xml.namespace.QName;
							public getAttributePrefix(index: number): string;
							public getProperty(name: string): any;
							public getText(): string;
							public constructor(reader: javax.xml.stream.XMLStreamReader);
							public getReader(): javax.xml.stream.XMLStreamReader;
							public isCharacters(): boolean;
							public setReader(reader: javax.xml.stream.XMLStreamReader): void;
							public getElementText(): string;
							public isStandalone(): boolean;
							public isEndElement(): boolean;
							public hasText(): boolean;
							public getVersion(): string;
							public isAttributeSpecified(index: number): boolean;
							public getNamespaceContext(): javax.xml.namespace.NamespaceContext;
							public getTextStart(): number;
							public getNamespaceURI(): string;
							public getName(): javax.xml.namespace.QName;
							public getNamespaceCount(): number;
							public getNamespacePrefix(index: number): string;
							public getPrefix(): string;
							public getPIData(): string;
							public constructor();
							public getNamespaceURI(index: number): string;
							public hasNext(): boolean;
							public getTextCharacters(sourceStart: number, target: native.Array<string>, targetStart: number, length: number): number;
							public getLocation(): javax.xml.stream.Location;
							public next(): number;
							public hasName(): boolean;
							public getEventType(): number;
							public getEncoding(): string;
							public isStartElement(): boolean;
							public getAttributeNamespace(index: number): string;
							public getCharacterEncodingScheme(): string;
							public getTextLength(): number;
							public getLocalName(): string;
							public standaloneSet(): boolean;
							public getAttributeType(index: number): string;
							public getNamespaceURI(prefix: string): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module fastinfoset {
				export module tools {
					export class FI_DOM_Or_XML_DOM_SAX_SAXEvent extends com.sun.xml.fastinfoset.tools.TransformInputOutput {
						public static class: java.lang.Class<com.sun.xml.fastinfoset.tools.FI_DOM_Or_XML_DOM_SAX_SAXEvent>;
						public parse(document: java.io.InputStream, events: java.io.OutputStream, workingDirectory: string): void;
						public constructor();
						public parse(strings0: native.Array<string>): void;
						public parse(in0: java.io.InputStream, out: java.io.OutputStream, workingDirectory: string): void;
						public static main(strings0: native.Array<string>): void;
						public parse(inputStream0: java.io.InputStream, outputStream1: java.io.OutputStream): void;
						public parse(document: java.io.InputStream, events: java.io.OutputStream): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module fastinfoset {
				export module tools {
					export class FI_SAX_Or_XML_SAX_DOM_SAX_SAXEvent extends com.sun.xml.fastinfoset.tools.TransformInputOutput {
						public static class: java.lang.Class<com.sun.xml.fastinfoset.tools.FI_SAX_Or_XML_SAX_DOM_SAX_SAXEvent>;
						public parse(document: java.io.InputStream, events: java.io.OutputStream, workingDirectory: string): void;
						public constructor();
						public parse(strings0: native.Array<string>): void;
						public parse(in0: java.io.InputStream, out: java.io.OutputStream, workingDirectory: string): void;
						public static main(strings0: native.Array<string>): void;
						public parse(inputStream0: java.io.InputStream, outputStream1: java.io.OutputStream): void;
						public parse(document: java.io.InputStream, events: java.io.OutputStream): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module fastinfoset {
				export module tools {
					export class FI_SAX_Or_XML_SAX_SAXEvent extends com.sun.xml.fastinfoset.tools.TransformInputOutput {
						public static class: java.lang.Class<com.sun.xml.fastinfoset.tools.FI_SAX_Or_XML_SAX_SAXEvent>;
						public parse(document: java.io.InputStream, events: java.io.OutputStream, workingDirectory: string): void;
						public constructor();
						public parse(strings0: native.Array<string>): void;
						public parse(in0: java.io.InputStream, out: java.io.OutputStream, workingDirectory: string): void;
						public static main(strings0: native.Array<string>): void;
						public parse(inputStream0: java.io.InputStream, outputStream1: java.io.OutputStream): void;
						public parse(document: java.io.InputStream, events: java.io.OutputStream): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module fastinfoset {
				export module tools {
					export class FI_SAX_XML extends com.sun.xml.fastinfoset.tools.TransformInputOutput {
						public static class: java.lang.Class<com.sun.xml.fastinfoset.tools.FI_SAX_XML>;
						public constructor();
						public parse(strings0: native.Array<string>): void;
						public parse(finf: java.io.InputStream, xml: java.io.OutputStream): void;
						public parse(in0: java.io.InputStream, out: java.io.OutputStream, workingDirectory: string): void;
						public static main(strings0: native.Array<string>): void;
						public parse(inputStream0: java.io.InputStream, outputStream1: java.io.OutputStream): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module fastinfoset {
				export module tools {
					export class FI_StAX_SAX_Or_XML_SAX_SAXEvent extends com.sun.xml.fastinfoset.tools.TransformInputOutput {
						public static class: java.lang.Class<com.sun.xml.fastinfoset.tools.FI_StAX_SAX_Or_XML_SAX_SAXEvent>;
						public constructor();
						public parse(strings0: native.Array<string>): void;
						public parse(in0: java.io.InputStream, out: java.io.OutputStream, workingDirectory: string): void;
						public static main(strings0: native.Array<string>): void;
						public parse(inputStream0: java.io.InputStream, outputStream1: java.io.OutputStream): void;
						public parse(document: java.io.InputStream, events: java.io.OutputStream): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module fastinfoset {
				export module tools {
					export class PrintTable extends java.lang.Object {
						public static class: java.lang.Class<com.sun.xml.fastinfoset.tools.PrintTable>;
						public constructor();
						public static printArray(title: string, a: com.sun.xml.fastinfoset.util.PrefixArray): void;
						public static printArray(title: string, a: com.sun.xml.fastinfoset.util.QualifiedNameArray): void;
						public static printArray(title: string, a: com.sun.xml.fastinfoset.util.ContiguousCharArrayArray): void;
						public static main(strings0: native.Array<string>): void;
						public static printVocabulary(vocabulary: com.sun.xml.fastinfoset.vocab.ParserVocabulary): void;
						public static printArray(title: string, a: com.sun.xml.fastinfoset.util.StringArray): void;
						public static printArray(title: string, a: com.sun.xml.fastinfoset.util.CharArrayArray): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module fastinfoset {
				export module tools {
					export class SAX2StAXWriter extends org.xml.sax.helpers.DefaultHandler implements org.xml.sax.ext.LexicalHandler {
						public static class: java.lang.Class<com.sun.xml.fastinfoset.tools.SAX2StAXWriter>;
						public startCDATA(): void;
						public error(e: org.xml.sax.SAXParseException): void;
						public startDTD(name: string, publicId: string, systemId: string): void;
						public constructor(writer: javax.xml.stream.XMLStreamWriter);
						public skippedEntity(name: string): void;
						public endPrefixMapping(prefix: string): void;
						public processingInstruction(target: string, data: string): void;
						public endElement(uri: string, localName: string, qName: string): void;
						public endDocument(): void;
						public endCDATA(): void;
						public startElement(uri: string, localName: string, qName: string, attributes: org.xml.sax.Attributes): void;
						public startPrefixMapping(prefix: string, uri: string): void;
						public endElement(namespaceURI: string, localName: string, qName: string): void;
						public comment(ch: native.Array<string>, start: number, length: number): void;
						public warning(e: org.xml.sax.SAXParseException): void;
						public ignorableWhitespace(ch: native.Array<string>, start: number, length: number): void;
						public constructor();
						public endEntity(name: string): void;
						public startDocument(): void;
						public getWriter(): javax.xml.stream.XMLStreamWriter;
						public notationDecl(name: string, publicId: string, systemId: string): void;
						public startEntity(name: string): void;
						public startElement(namespaceURI: string, localName: string, qName: string, atts: org.xml.sax.Attributes): void;
						public endDTD(): void;
						public fatalError(e: org.xml.sax.SAXParseException): void;
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
			export module fastinfoset {
				export module tools {
					export class SAXEventSerializer extends org.xml.sax.helpers.DefaultHandler implements org.xml.sax.ext.LexicalHandler {
						public static class: java.lang.Class<com.sun.xml.fastinfoset.tools.SAXEventSerializer>;
						public _namespaceAttributes: java.util.List<any>;
						public startCDATA(): void;
						public error(e: org.xml.sax.SAXParseException): void;
						public startDTD(name: string, publicId: string, systemId: string): void;
						public skippedEntity(name: string): void;
						public endPrefixMapping(prefix: string): void;
						public processingInstruction(target: string, data: string): void;
						public constructor(s: java.io.OutputStream);
						public endElement(uri: string, localName: string, qName: string): void;
						public endDocument(): void;
						public endCDATA(): void;
						public startElement(uri: string, localName: string, qName: string, attributes: org.xml.sax.Attributes): void;
						public startPrefixMapping(prefix: string, uri: string): void;
						public comment(ch: native.Array<string>, start: number, length: number): void;
						public warning(e: org.xml.sax.SAXParseException): void;
						public ignorableWhitespace(ch: native.Array<string>, start: number, length: number): void;
						public constructor();
						public endEntity(name: string): void;
						public startDocument(): void;
						public notationDecl(name: string, publicId: string, systemId: string): void;
						public startEntity(name: string): void;
						public endDTD(): void;
						public fatalError(e: org.xml.sax.SAXParseException): void;
						public resolveEntity(publicId: string, systemId: string): org.xml.sax.InputSource;
						public unparsedEntityDecl(name: string, publicId: string, systemId: string, notationName: string): void;
						public setDocumentLocator(locator: org.xml.sax.Locator): void;
						public characters(ch: native.Array<string>, start: number, length: number): void;
					}
					export module SAXEventSerializer {
						export class AttributeValueHolder extends java.lang.Object {
							public static class: java.lang.Class<com.sun.xml.fastinfoset.tools.SAXEventSerializer.AttributeValueHolder>;
							public qName: string;
							public localName: string;
							public uri: string;
							public type: string;
							public value: string;
							public hashCode(): number;
							public compareTo(o: any): number;
							public equals(obj: any): boolean;
							public equals(o: any): boolean;
							public constructor(qName: string, localName: string, uri: string, type: string, value: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module fastinfoset {
				export module tools {
					export class StAX2SAXReader extends java.lang.Object {
						public static class: java.lang.Class<com.sun.xml.fastinfoset.tools.StAX2SAXReader>;
						public setLexicalHandler(lexicalHandler: org.xml.sax.ext.LexicalHandler): void;
						public setContentHandler(handler: org.xml.sax.ContentHandler): void;
						public constructor(reader: javax.xml.stream.XMLStreamReader, handler: org.xml.sax.ContentHandler);
						public constructor(reader: javax.xml.stream.XMLStreamReader);
						public adapt(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module fastinfoset {
				export module tools {
					export abstract class TransformInputOutput extends java.lang.Object {
						public static class: java.lang.Class<com.sun.xml.fastinfoset.tools.TransformInputOutput>;
						public constructor();
						public parse(strings0: native.Array<string>): void;
						public static createRelativePathResolver(workingDirectory: string): org.xml.sax.EntityResolver;
						public parse(in0: java.io.InputStream, out: java.io.OutputStream, workingDirectory: string): void;
						public parse(inputStream0: java.io.InputStream, outputStream1: java.io.OutputStream): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module fastinfoset {
				export module tools {
					export class VocabularyGenerator extends org.xml.sax.helpers.DefaultHandler implements org.xml.sax.ext.LexicalHandler {
						public static class: java.lang.Class<com.sun.xml.fastinfoset.tools.VocabularyGenerator>;
						public _serializerVocabulary: com.sun.xml.fastinfoset.vocab.SerializerVocabulary;
						public _parserVocabulary: com.sun.xml.fastinfoset.vocab.ParserVocabulary;
						public _v: org.jvnet.fastinfoset.Vocabulary;
						public attributeValueSizeConstraint: number;
						public characterContentChunkSizeContraint: number;
						public getCharacterContentChunkSizeLimit(): number;
						public constructor(parserVocabulary: com.sun.xml.fastinfoset.vocab.ParserVocabulary);
						public startCDATA(): void;
						public error(e: org.xml.sax.SAXParseException): void;
						public startDTD(name: string, publicId: string, systemId: string): void;
						public constructor(serializerVocabulary: com.sun.xml.fastinfoset.vocab.SerializerVocabulary, parserVocabulary: com.sun.xml.fastinfoset.vocab.ParserVocabulary);
						public skippedEntity(name: string): void;
						public endPrefixMapping(prefix: string): void;
						public processingInstruction(target: string, data: string): void;
						public addToNameTable(namespaceURI: string, qName: string, localName: string, v: java.util.Set<any>, m: com.sun.xml.fastinfoset.util.LocalNameQualifiedNamesMap, a: com.sun.xml.fastinfoset.util.QualifiedNameArray, isAttribute: boolean): void;
						public endElement(uri: string, localName: string, qName: string): void;
						public endDocument(): void;
						public endCDATA(): void;
						public addToTable(s: string, v: java.util.Set<any>, m: com.sun.xml.fastinfoset.util.StringIntMap, a: com.sun.xml.fastinfoset.util.StringArray): void;
						public static getPrefixFromQualifiedName(qName: string): string;
						public startElement(uri: string, localName: string, qName: string, attributes: org.xml.sax.Attributes): void;
						public getAttributeValueSizeLimit(): number;
						public startPrefixMapping(prefix: string, uri: string): void;
						public setAttributeValueSizeLimit(size: number): void;
						public endElement(namespaceURI: string, localName: string, qName: string): void;
						public comment(ch: native.Array<string>, start: number, length: number): void;
						public warning(e: org.xml.sax.SAXParseException): void;
						public ignorableWhitespace(ch: native.Array<string>, start: number, length: number): void;
						public constructor();
						public setCharacterContentChunkSizeLimit(size: number): void;
						public endEntity(name: string): void;
						public startDocument(): void;
						public notationDecl(name: string, publicId: string, systemId: string): void;
						public startEntity(name: string): void;
						public startElement(namespaceURI: string, localName: string, qName: string, atts: org.xml.sax.Attributes): void;
						public endDTD(): void;
						public getVocabulary(): org.jvnet.fastinfoset.Vocabulary;
						public fatalError(e: org.xml.sax.SAXParseException): void;
						public addToCharArrayTable(c: com.sun.xml.fastinfoset.util.CharArray): void;
						public resolveEntity(publicId: string, systemId: string): org.xml.sax.InputSource;
						public unparsedEntityDecl(name: string, publicId: string, systemId: string, notationName: string): void;
						public setDocumentLocator(locator: org.xml.sax.Locator): void;
						public constructor(serializerVocabulary: com.sun.xml.fastinfoset.vocab.SerializerVocabulary);
						public addToTable(s: string, v: java.util.Set<any>, m: com.sun.xml.fastinfoset.util.StringIntMap, a: com.sun.xml.fastinfoset.util.PrefixArray): void;
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
			export module fastinfoset {
				export module tools {
					export class XML_DOM_FI extends com.sun.xml.fastinfoset.tools.TransformInputOutput {
						public static class: java.lang.Class<com.sun.xml.fastinfoset.tools.XML_DOM_FI>;
						public constructor();
						public parse(document: java.io.InputStream, finf: java.io.OutputStream, workingDirectory: string): void;
						public parse(strings0: native.Array<string>): void;
						public parse(document: java.io.InputStream, finf: java.io.OutputStream): void;
						public parse(in0: java.io.InputStream, out: java.io.OutputStream, workingDirectory: string): void;
						public static main(strings0: native.Array<string>): void;
						public parse(inputStream0: java.io.InputStream, outputStream1: java.io.OutputStream): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module fastinfoset {
				export module tools {
					export class XML_DOM_SAX_FI extends com.sun.xml.fastinfoset.tools.TransformInputOutput {
						public static class: java.lang.Class<com.sun.xml.fastinfoset.tools.XML_DOM_SAX_FI>;
						public constructor();
						public parse(document: java.io.InputStream, finf: java.io.OutputStream, workingDirectory: string): void;
						public parse(strings0: native.Array<string>): void;
						public parse(document: java.io.InputStream, finf: java.io.OutputStream): void;
						public parse(in0: java.io.InputStream, out: java.io.OutputStream, workingDirectory: string): void;
						public static main(strings0: native.Array<string>): void;
						public parse(inputStream0: java.io.InputStream, outputStream1: java.io.OutputStream): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module fastinfoset {
				export module tools {
					export class XML_SAX_FI extends com.sun.xml.fastinfoset.tools.TransformInputOutput {
						public static class: java.lang.Class<com.sun.xml.fastinfoset.tools.XML_SAX_FI>;
						public parse(xml: java.io.InputStream, finf: java.io.OutputStream, workingDirectory: string): void;
						public constructor();
						public parse(strings0: native.Array<string>): void;
						public parse(in0: java.io.InputStream, out: java.io.OutputStream, workingDirectory: string): void;
						public parse(xml: java.io.InputStream, finf: java.io.OutputStream): void;
						public static main(strings0: native.Array<string>): void;
						public parse(inputStream0: java.io.InputStream, outputStream1: java.io.OutputStream): void;
						public convert(reader: java.io.Reader, finf: java.io.OutputStream): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module fastinfoset {
				export module tools {
					export class XML_SAX_StAX_FI extends com.sun.xml.fastinfoset.tools.TransformInputOutput {
						public static class: java.lang.Class<com.sun.xml.fastinfoset.tools.XML_SAX_StAX_FI>;
						public parse(xml: java.io.InputStream, finf: java.io.OutputStream, workingDirectory: string): void;
						public constructor();
						public parse(strings0: native.Array<string>): void;
						public parse(in0: java.io.InputStream, out: java.io.OutputStream, workingDirectory: string): void;
						public parse(xml: java.io.InputStream, finf: java.io.OutputStream): void;
						public static main(strings0: native.Array<string>): void;
						public parse(inputStream0: java.io.InputStream, outputStream1: java.io.OutputStream): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module fastinfoset {
				export module util {
					export class CharArray extends java.lang.Object implements java.lang.CharSequence {
						public static class: java.lang.Class<com.sun.xml.fastinfoset.util.CharArray>;
						public ch: native.Array<string>;
						public start: number;
						public _hash: number;
						public cloneArray(): void;
						public constructor();
						public equals(obj: any): boolean;
						public codePoints(): java.util.stream.IntStream;
						public length(): number;
						public subSequence(start: number, end: number): string;
						public hashCode(): number;
						public toString(): string;
						public chars(): java.util.stream.IntStream;
						public equalsCharArray(ch: native.Array<string>, start: number, length: number): boolean;
						public set(_ch: native.Array<string>, _start: number, _length: number, copy: boolean): void;
						public static hashCode(ch: native.Array<string>, start: number, length: number): number;
						public equalsCharArray(cha: com.sun.xml.fastinfoset.util.CharArray): boolean;
						public charAt(index: number): string;
						public constructor(_ch: native.Array<string>, _start: number, _length: number, copy: boolean);
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module fastinfoset {
				export module util {
					export class CharArrayArray extends com.sun.xml.fastinfoset.util.ValueArray {
						public static class: java.lang.Class<com.sun.xml.fastinfoset.util.CharArrayArray>;
						public resize(): void;
						public constructor();
						public setReadOnlyArray(valueArray0: com.sun.xml.fastinfoset.util.ValueArray, boolean1: boolean): void;
						public get(i: number): com.sun.xml.fastinfoset.util.CharArray;
						public setReadOnlyArray(readOnlyArray: com.sun.xml.fastinfoset.util.ValueArray, clear: boolean): void;
						public setReadOnlyArray(readOnlyArray: com.sun.xml.fastinfoset.util.CharArrayArray, clear: boolean): void;
						public clear(): void;
						public getArray(): native.Array<com.sun.xml.fastinfoset.util.CharArray>;
						public constructor(initialCapacity: number, maximumCapacity: number);
						public add(s: com.sun.xml.fastinfoset.util.CharArray): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module fastinfoset {
				export module util {
					export class CharArrayIntMap extends com.sun.xml.fastinfoset.util.KeyIntMap {
						public static class: java.lang.Class<com.sun.xml.fastinfoset.util.CharArrayIntMap>;
						public _totalCharacterCount: number;
						public setReadOnlyMap(keyIntMap0: com.sun.xml.fastinfoset.util.KeyIntMap, boolean1: boolean): void;
						public get(ch: native.Array<string>, start: number, length: number): number;
						public constructor();
						public getTotalCharacterCount(): number;
						public constructor(initialCapacity: number);
						public clear(): void;
						public obtainIndex(ch: native.Array<string>, start: number, length: number, clone: boolean): number;
						public setReadOnlyMap(readOnlyMap: com.sun.xml.fastinfoset.util.KeyIntMap, clear: boolean): void;
						public constructor(initialCapacity: number, loadFactor: number);
						public setReadOnlyMap(readOnlyMap: com.sun.xml.fastinfoset.util.CharArrayIntMap, clear: boolean): void;
					}
					export module CharArrayIntMap {
						export class Entry extends com.sun.xml.fastinfoset.util.KeyIntMap.BaseEntry {
							public static class: java.lang.Class<com.sun.xml.fastinfoset.util.CharArrayIntMap.Entry>;
							public constructor(hash: number, value: number);
							public constructor(ch: native.Array<string>, start: number, length: number, hash: number, value: number, next: com.sun.xml.fastinfoset.util.CharArrayIntMap.Entry);
							public equalsCharArray(ch: native.Array<string>, start: number, length: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module fastinfoset {
				export module util {
					export class CharArrayString extends com.sun.xml.fastinfoset.util.CharArray {
						public static class: java.lang.Class<com.sun.xml.fastinfoset.util.CharArrayString>;
						public _s: string;
						public constructor(s: string, createArray: boolean);
						public constructor();
						public equals(obj: any): boolean;
						public codePoints(): java.util.stream.IntStream;
						public length(): number;
						public subSequence(start: number, end: number): string;
						public constructor(s: string);
						public hashCode(): number;
						public toString(): string;
						public chars(): java.util.stream.IntStream;
						public static hashCode(ch: native.Array<string>, start: number, length: number): number;
						public charAt(index: number): string;
						public constructor(_ch: native.Array<string>, _start: number, _length: number, copy: boolean);
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module fastinfoset {
				export module util {
					export class ContiguousCharArrayArray extends com.sun.xml.fastinfoset.util.ValueArray {
						public static class: java.lang.Class<com.sun.xml.fastinfoset.util.ContiguousCharArrayArray>;
						public static INITIAL_CHARACTER_SIZE: number;
						public static MAXIMUM_CHARACTER_SIZE: number;
						public _maximumCharacterSize: number;
						public _offset: native.Array<number>;
						public _length: native.Array<number>;
						public _array: native.Array<string>;
						public _arrayIndex: number;
						public _readOnlyArrayIndex: number;
						public _cachedIndex: number;
						public ensureSize(l: number): void;
						public resize(): void;
						public constructor();
						public resizeArray(requestedSize: number): void;
						public setReadOnlyArray(readOnlyArray: com.sun.xml.fastinfoset.util.ValueArray, clear: boolean): void;
						public add(l: number): void;
						public getCompleteCharArray(): native.Array<string>;
						public getCompleteLengthArray(): native.Array<number>;
						public getArrayIndex(): number;
						public setReadOnlyArray(valueArray0: com.sun.xml.fastinfoset.util.ValueArray, boolean1: boolean): void;
						public getString(i: number): string;
						public constructor(initialCapacity: number, maximumCapacity: number, initialCharacterSize: number, maximumCharacterSize: number);
						public getCompleteOffsetArray(): native.Array<number>;
						public clear(): void;
						public add(c: native.Array<string>, l: number): number;
						public setReadOnlyArray(readOnlyArray: com.sun.xml.fastinfoset.util.ContiguousCharArrayArray, clear: boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module fastinfoset {
				export module util {
					export class DuplicateAttributeVerifier extends java.lang.Object {
						public static class: java.lang.Class<com.sun.xml.fastinfoset.util.DuplicateAttributeVerifier>;
						public static MAP_SIZE: number;
						public _currentIteration: number;
						public _poolHead: com.sun.xml.fastinfoset.util.DuplicateAttributeVerifier.Entry;
						public _poolCurrent: com.sun.xml.fastinfoset.util.DuplicateAttributeVerifier.Entry;
						public constructor();
						public clear(): void;
						public checkForDuplicateAttribute(hash: number, value: number): void;
						public reset(): void;
					}
					export module DuplicateAttributeVerifier {
						export class Entry extends java.lang.Object {
							public static class: java.lang.Class<com.sun.xml.fastinfoset.util.DuplicateAttributeVerifier.Entry>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module fastinfoset {
				export module util {
					export class FixedEntryStringIntMap extends com.sun.xml.fastinfoset.util.StringIntMap {
						public static class: java.lang.Class<com.sun.xml.fastinfoset.util.FixedEntryStringIntMap>;
						public constructor();
						public constructor(fixedEntry: string);
						public constructor(initialCapacity: number);
						public constructor(fixedEntry: string, initialCapacity: number);
						public setReadOnlyMap(readOnlyMap: com.sun.xml.fastinfoset.util.FixedEntryStringIntMap, clear: boolean): void;
						public clear(): void;
						public constructor(fixedEntry: string, initialCapacity: number, loadFactor: number);
						public setReadOnlyMap(readOnlyMap: com.sun.xml.fastinfoset.util.KeyIntMap, clear: boolean): void;
						public setReadOnlyMap(readOnlyMap: com.sun.xml.fastinfoset.util.StringIntMap, clear: boolean): void;
						public constructor(initialCapacity: number, loadFactor: number);
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module fastinfoset {
				export module util {
					export abstract class KeyIntMap extends java.lang.Object {
						public static class: java.lang.Class<com.sun.xml.fastinfoset.util.KeyIntMap>;
						public static NOT_PRESENT: number;
						public setReadOnlyMap(keyIntMap0: com.sun.xml.fastinfoset.util.KeyIntMap, boolean1: boolean): void;
						public constructor();
						public static hashHash(h: number): number;
						public constructor(initialCapacity: number);
						public clear(): void;
						public static indexFor(h: number, length: number): number;
						public size(): number;
						public constructor(initialCapacity: number, loadFactor: number);
					}
					export module KeyIntMap {
						export class BaseEntry extends java.lang.Object {
							public static class: java.lang.Class<com.sun.xml.fastinfoset.util.KeyIntMap.BaseEntry>;
							public constructor(hash: number, value: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module fastinfoset {
				export module util {
					export class LocalNameQualifiedNamesMap extends com.sun.xml.fastinfoset.util.KeyIntMap {
						public static class: java.lang.Class<com.sun.xml.fastinfoset.util.LocalNameQualifiedNamesMap>;
						public setReadOnlyMap(keyIntMap0: com.sun.xml.fastinfoset.util.KeyIntMap, boolean1: boolean): void;
						public constructor();
						public obtainDynamicEntry(key: string): com.sun.xml.fastinfoset.util.LocalNameQualifiedNamesMap.Entry;
						public isQNameFromReadOnlyMap(name: com.sun.xml.fastinfoset.QualifiedName): boolean;
						public constructor(initialCapacity: number);
						public clear(): void;
						public setReadOnlyMap(readOnlyMap: com.sun.xml.fastinfoset.util.LocalNameQualifiedNamesMap, clear: boolean): void;
						public getNextIndex(): number;
						public getIndex(): number;
						public setReadOnlyMap(readOnlyMap: com.sun.xml.fastinfoset.util.KeyIntMap, clear: boolean): void;
						public obtainEntry(key: string): com.sun.xml.fastinfoset.util.LocalNameQualifiedNamesMap.Entry;
						public constructor(initialCapacity: number, loadFactor: number);
					}
					export module LocalNameQualifiedNamesMap {
						export class Entry extends java.lang.Object {
							public static class: java.lang.Class<com.sun.xml.fastinfoset.util.LocalNameQualifiedNamesMap.Entry>;
							public _value: native.Array<com.sun.xml.fastinfoset.QualifiedName>;
							public _valueIndex: number;
							public addQualifiedName(name: com.sun.xml.fastinfoset.QualifiedName): void;
							public constructor(key: string, hash: number, next: com.sun.xml.fastinfoset.util.LocalNameQualifiedNamesMap.Entry);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module fastinfoset {
				export module util {
					export class NamespaceContextImplementation extends java.lang.Object implements javax.xml.namespace.NamespaceContext {
						public static class: java.lang.Class<com.sun.xml.fastinfoset.util.NamespaceContextImplementation>;
						public getPrefix(index: number): string;
						public constructor();
						public getPrefix(namespaceURI: string): string;
						public isCurrentContextEmpty(): boolean;
						public getNamespaceURI(prefix: string): string;
						public getPrefixes(namespaceURI: string): java.util.Iterator<any>;
						public popContext(): void;
						public pushContext(): void;
						public getCurrentContextEndIndex(): number;
						public getNamespaceURI(index: number): string;
						public getNonDefaultPrefix(namespaceURI: string): string;
						public getCurrentContextStartIndex(): number;
						public declarePrefix(prefix: string, namespaceURI: string): void;
						public reset(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module fastinfoset {
				export module util {
					export class PrefixArray extends com.sun.xml.fastinfoset.util.ValueArray {
						public static class: java.lang.Class<com.sun.xml.fastinfoset.util.PrefixArray>;
						public static PREFIX_MAP_SIZE: number;
						public _array: native.Array<string>;
						public _currentInScope: native.Array<number>;
						public _declarationId: number;
						public countNamespacePool(): number;
						public resize(): void;
						public get(i: number): string;
						public clearDeclarationIds(): void;
						public constructor();
						public popScopeWithPrefixEntry(prefixIndex: number): void;
						public setReadOnlyArray(readOnlyArray: com.sun.xml.fastinfoset.util.ValueArray, clear: boolean): void;
						public setReadOnlyArray(readOnlyArray: com.sun.xml.fastinfoset.util.PrefixArray, clear: boolean): void;
						public pushScope(prefixIndex: number, namespaceIndex: number): void;
						public getNamespaceFromPrefix(prefix: string): string;
						public popScope(prefixIndex: number): void;
						public setReadOnlyArray(valueArray0: com.sun.xml.fastinfoset.util.ValueArray, boolean1: boolean): void;
						public countPrefixPool(): number;
						public getCompleteArray(): native.Array<string>;
						public pushScopeWithPrefixEntry(prefix: string, namespaceName: string, prefixIndex: number, namespaceIndex: number): void;
						public getPrefixFromNamespace(namespaceName: string): string;
						public getArray(): native.Array<string>;
						public clearCompletely(): void;
						public clear(): void;
						public getPrefixes(): java.util.Iterator<any>;
						public add(s: string): number;
						public constructor(initialCapacity: number, maximumCapacity: number);
						public getPrefixesFromNamespace(namespaceName: string): java.util.Iterator<any>;
					}
					export module PrefixArray {
						export class NamespaceEntry extends java.lang.Object {
							public static class: java.lang.Class<com.sun.xml.fastinfoset.util.PrefixArray.NamespaceEntry>;
						}
						export class PrefixEntry extends java.lang.Object {
							public static class: java.lang.Class<com.sun.xml.fastinfoset.util.PrefixArray.PrefixEntry>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module fastinfoset {
				export module util {
					export class QualifiedNameArray extends com.sun.xml.fastinfoset.util.ValueArray {
						public static class: java.lang.Class<com.sun.xml.fastinfoset.util.QualifiedNameArray>;
						public _array: native.Array<com.sun.xml.fastinfoset.QualifiedName>;
						public getArray(): native.Array<com.sun.xml.fastinfoset.QualifiedName>;
						public resize(): void;
						public getCompleteArray(): native.Array<com.sun.xml.fastinfoset.QualifiedName>;
						public constructor();
						public setReadOnlyArray(valueArray0: com.sun.xml.fastinfoset.util.ValueArray, boolean1: boolean): void;
						public setReadOnlyArray(readOnlyArray: com.sun.xml.fastinfoset.util.ValueArray, clear: boolean): void;
						public add(s: com.sun.xml.fastinfoset.QualifiedName): void;
						public clear(): void;
						public getNext(): com.sun.xml.fastinfoset.QualifiedName;
						public setReadOnlyArray(readOnlyArray: com.sun.xml.fastinfoset.util.QualifiedNameArray, clear: boolean): void;
						public constructor(initialCapacity: number, maximumCapacity: number);
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module fastinfoset {
				export module util {
					export class StringArray extends com.sun.xml.fastinfoset.util.ValueArray {
						public static class: java.lang.Class<com.sun.xml.fastinfoset.util.StringArray>;
						public _array: native.Array<string>;
						public resize(): void;
						public get(i: number): string;
						public constructor();
						public setReadOnlyArray(valueArray0: com.sun.xml.fastinfoset.util.ValueArray, boolean1: boolean): void;
						public getCompleteArray(): native.Array<string>;
						public setReadOnlyArray(readOnlyArray: com.sun.xml.fastinfoset.util.ValueArray, clear: boolean): void;
						public getArray(): native.Array<string>;
						public constructor(initialCapacity: number, maximumCapacity: number, clear: boolean);
						public clear(): void;
						public setReadOnlyArray(readOnlyArray: com.sun.xml.fastinfoset.util.StringArray, clear: boolean): void;
						public add(s: string): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module fastinfoset {
				export module util {
					export class StringIntMap extends com.sun.xml.fastinfoset.util.KeyIntMap {
						public static class: java.lang.Class<com.sun.xml.fastinfoset.util.StringIntMap>;
						public static NULL_ENTRY: com.sun.xml.fastinfoset.util.StringIntMap.Entry;
						public _readOnlyMap: com.sun.xml.fastinfoset.util.StringIntMap;
						public _lastEntry: com.sun.xml.fastinfoset.util.StringIntMap.Entry;
						public _table: native.Array<com.sun.xml.fastinfoset.util.StringIntMap.Entry>;
						public _index: number;
						public _totalCharacterCount: number;
						public setReadOnlyMap(keyIntMap0: com.sun.xml.fastinfoset.util.KeyIntMap, boolean1: boolean): void;
						public constructor();
						public getTotalCharacterCount(): number;
						public add(key: string): void;
						public resize(newCapacity: number): void;
						public getNextIndex(): number;
						public getIndex(): number;
						public obtainIndex(key: string): number;
						public setReadOnlyMap(readOnlyMap: com.sun.xml.fastinfoset.util.KeyIntMap, clear: boolean): void;
						public constructor(initialCapacity: number, loadFactor: number);
						public get(key: string): number;
						public constructor(initialCapacity: number);
						public clear(): void;
						public setReadOnlyMap(readOnlyMap: com.sun.xml.fastinfoset.util.StringIntMap, clear: boolean): void;
					}
					export module StringIntMap {
						export class Entry extends com.sun.xml.fastinfoset.util.KeyIntMap.BaseEntry {
							public static class: java.lang.Class<com.sun.xml.fastinfoset.util.StringIntMap.Entry>;
							public constructor(hash: number, value: number);
							public constructor(key: string, hash: number, value: number, next: com.sun.xml.fastinfoset.util.StringIntMap.Entry);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module fastinfoset {
				export module util {
					export abstract class ValueArray extends java.lang.Object {
						public static class: java.lang.Class<com.sun.xml.fastinfoset.util.ValueArray>;
						public static DEFAULT_CAPACITY: number;
						public static MAXIMUM_CAPACITY: number;
						public _size: number;
						public _readOnlyArraySize: number;
						public _maximumCapacity: number;
						public constructor();
						public setReadOnlyArray(valueArray0: com.sun.xml.fastinfoset.util.ValueArray, boolean1: boolean): void;
						public getSize(): number;
						public getMaximumCapacity(): number;
						public clear(): void;
						public setMaximumCapacity(maximumCapacity: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module fastinfoset {
				export module util {
					export class ValueArrayResourceException extends java.lang.RuntimeException {
						public static class: java.lang.Class<com.sun.xml.fastinfoset.util.ValueArrayResourceException>;
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
			export module fastinfoset {
				export module vocab {
					export class ParserVocabulary extends com.sun.xml.fastinfoset.vocab.Vocabulary {
						public static class: java.lang.Class<com.sun.xml.fastinfoset.vocab.ParserVocabulary>;
						public static IDENTIFYING_STRING_TABLE_MAXIMUM_ITEMS_PEOPERTY: string;
						public static NON_IDENTIFYING_STRING_TABLE_MAXIMUM_ITEMS_PEOPERTY: string;
						public static NON_IDENTIFYING_STRING_TABLE_MAXIMUM_CHARACTERS_PEOPERTY: string;
						public static IDENTIFYING_STRING_TABLE_MAXIMUM_ITEMS: number;
						public static NON_IDENTIFYING_STRING_TABLE_MAXIMUM_ITEMS: number;
						public static NON_IDENTIFYING_STRING_TABLE_MAXIMUM_CHARACTERS: number;
						public restrictedAlphabet: com.sun.xml.fastinfoset.util.CharArrayArray;
						public encodingAlgorithm: com.sun.xml.fastinfoset.util.StringArray;
						public namespaceName: com.sun.xml.fastinfoset.util.StringArray;
						public prefix: com.sun.xml.fastinfoset.util.PrefixArray;
						public localName: com.sun.xml.fastinfoset.util.StringArray;
						public otherNCName: com.sun.xml.fastinfoset.util.StringArray;
						public otherURI: com.sun.xml.fastinfoset.util.StringArray;
						public attributeValue: com.sun.xml.fastinfoset.util.StringArray;
						public otherString: com.sun.xml.fastinfoset.util.CharArrayArray;
						public characterContentChunk: com.sun.xml.fastinfoset.util.ContiguousCharArrayArray;
						public elementName: com.sun.xml.fastinfoset.util.QualifiedNameArray;
						public attributeName: com.sun.xml.fastinfoset.util.QualifiedNameArray;
						public tables: native.Array<com.sun.xml.fastinfoset.util.ValueArray>;
						public _readOnlyVocabulary: com.sun.xml.fastinfoset.vocab.SerializerVocabulary;
						public constructor();
						public constructor(v: org.jvnet.fastinfoset.Vocabulary);
						public setReferencedVocabulary(referencedVocabularyURI: string, referencedVocabulary: com.sun.xml.fastinfoset.vocab.ParserVocabulary, clear: boolean): void;
						public setInitialVocabulary(initialVocabulary: com.sun.xml.fastinfoset.vocab.ParserVocabulary, clear: boolean): void;
						public clear(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module fastinfoset {
				export module vocab {
					export class SerializerVocabulary extends com.sun.xml.fastinfoset.vocab.Vocabulary {
						public static class: java.lang.Class<com.sun.xml.fastinfoset.vocab.SerializerVocabulary>;
						public restrictedAlphabet: com.sun.xml.fastinfoset.util.StringIntMap;
						public encodingAlgorithm: com.sun.xml.fastinfoset.util.StringIntMap;
						public namespaceName: com.sun.xml.fastinfoset.util.StringIntMap;
						public prefix: com.sun.xml.fastinfoset.util.StringIntMap;
						public localName: com.sun.xml.fastinfoset.util.StringIntMap;
						public otherNCName: com.sun.xml.fastinfoset.util.StringIntMap;
						public otherURI: com.sun.xml.fastinfoset.util.StringIntMap;
						public attributeValue: com.sun.xml.fastinfoset.util.StringIntMap;
						public otherString: com.sun.xml.fastinfoset.util.CharArrayIntMap;
						public characterContentChunk: com.sun.xml.fastinfoset.util.CharArrayIntMap;
						public elementName: com.sun.xml.fastinfoset.util.LocalNameQualifiedNamesMap;
						public attributeName: com.sun.xml.fastinfoset.util.LocalNameQualifiedNamesMap;
						public tables: native.Array<com.sun.xml.fastinfoset.util.KeyIntMap>;
						public _useLocalNameAsKey: boolean;
						public _readOnlyVocabulary: com.sun.xml.fastinfoset.vocab.SerializerVocabulary;
						public constructor();
						public setReadOnlyVocabulary(readOnlyVocabulary: com.sun.xml.fastinfoset.vocab.SerializerVocabulary, clear: boolean): void;
						public setExternalVocabulary(externalVocabularyURI: string, externalVocabulary: com.sun.xml.fastinfoset.vocab.SerializerVocabulary, clear: boolean): void;
						public setInitialVocabulary(initialVocabulary: com.sun.xml.fastinfoset.vocab.SerializerVocabulary, clear: boolean): void;
						public clear(): void;
						public constructor(v: org.jvnet.fastinfoset.Vocabulary, useLocalNameAsKey: boolean);
						public getReadOnlyVocabulary(): com.sun.xml.fastinfoset.vocab.SerializerVocabulary;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module xml {
			export module fastinfoset {
				export module vocab {
					export abstract class Vocabulary extends java.lang.Object {
						public static class: java.lang.Class<com.sun.xml.fastinfoset.vocab.Vocabulary>;
						public static RESTRICTED_ALPHABET: number;
						public static ENCODING_ALGORITHM: number;
						public static PREFIX: number;
						public static NAMESPACE_NAME: number;
						public static LOCAL_NAME: number;
						public static OTHER_NCNAME: number;
						public static OTHER_URI: number;
						public static ATTRIBUTE_VALUE: number;
						public static OTHER_STRING: number;
						public static CHARACTER_CONTENT_CHUNK: number;
						public static ELEMENT_NAME: number;
						public static ATTRIBUTE_NAME: number;
						public _hasInitialReadOnlyVocabulary: boolean;
						public _referencedVocabularyURI: string;
						public setExternalVocabularyURI(referencedVocabularyURI: string): void;
						public constructor();
						public hasInitialVocabulary(): boolean;
						public hasExternalVocabulary(): boolean;
						public setInitialReadOnlyVocabulary(hasInitialReadOnlyVocabulary: boolean): void;
						public getExternalVocabularyURI(): string;
					}
				}
			}
		}
	}
}

declare class ModuleInfo extends java.lang.Object {
	public static class: java.lang.Class<ModuleInfo>;
}

declare module org {
	export module jvnet {
		export module fastinfoset {
			export class EncodingAlgorithm extends java.lang.Object {
				public static class: java.lang.Class<org.jvnet.fastinfoset.EncodingAlgorithm>;
				/**
				 * Constructs a new instance of the org.jvnet.fastinfoset.EncodingAlgorithm interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					decodeFromBytes(bytes0: native.Array<number>, int1: number, int2: number): any;
					decodeFromInputStream(inputStream0: java.io.InputStream): any;
					encodeToOutputStream(object0: any, outputStream1: java.io.OutputStream): void;
					convertFromCharacters(chars0: native.Array<string>, int1: number, int2: number): any;
					convertToCharacters(object0: any, stringBuffer1: java.lang.StringBuffer): void;
				});
				public constructor();
				public decodeFromInputStream(inputStream0: java.io.InputStream): any;
				public convertToCharacters(object0: any, stringBuffer1: java.lang.StringBuffer): void;
				public decodeFromBytes(bytes0: native.Array<number>, int1: number, int2: number): any;
				public encodeToOutputStream(object0: any, outputStream1: java.io.OutputStream): void;
				public convertFromCharacters(chars0: native.Array<string>, int1: number, int2: number): any;
			}
		}
	}
}

declare module org {
	export module jvnet {
		export module fastinfoset {
			export class EncodingAlgorithmException extends org.jvnet.fastinfoset.FastInfosetException {
				public static class: java.lang.Class<org.jvnet.fastinfoset.EncodingAlgorithmException>;
				public constructor(cause: java.lang.Throwable);
				public constructor(e: java.lang.Exception);
				public constructor(message: string, cause: java.lang.Throwable);
				public constructor(message: string, e: java.lang.Exception);
				public constructor(message: string);
				public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
				public constructor();
			}
		}
	}
}

declare module org {
	export module jvnet {
		export module fastinfoset {
			export class EncodingAlgorithmIndexes extends java.lang.Object {
				public static class: java.lang.Class<org.jvnet.fastinfoset.EncodingAlgorithmIndexes>;
				public static HEXADECIMAL: number;
				public static BASE64: number;
				public static SHORT: number;
				public static INT: number;
				public static LONG: number;
				public static BOOLEAN: number;
				public static FLOAT: number;
				public static DOUBLE: number;
				public static UUID: number;
				public static CDATA: number;
				public constructor();
			}
		}
	}
}

declare module org {
	export module jvnet {
		export module fastinfoset {
			export class ExternalVocabulary extends java.lang.Object {
				public static class: java.lang.Class<org.jvnet.fastinfoset.ExternalVocabulary>;
				public URI: string;
				public vocabulary: org.jvnet.fastinfoset.Vocabulary;
				public constructor(URI: string, vocabulary: org.jvnet.fastinfoset.Vocabulary);
			}
		}
	}
}

declare module org {
	export module jvnet {
		export module fastinfoset {
			export class FastInfosetException extends java.lang.Exception {
				public static class: java.lang.Class<org.jvnet.fastinfoset.FastInfosetException>;
				public constructor(cause: java.lang.Throwable);
				public constructor(e: java.lang.Exception);
				public constructor(message: string, cause: java.lang.Throwable);
				public constructor(message: string, e: java.lang.Exception);
				public constructor(message: string);
				public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
				public constructor();
			}
		}
	}
}

declare module org {
	export module jvnet {
		export module fastinfoset {
			export class FastInfosetParser extends java.lang.Object {
				public static class: java.lang.Class<org.jvnet.fastinfoset.FastInfosetParser>;
				/**
				 * Constructs a new instance of the org.jvnet.fastinfoset.FastInfosetParser interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					setStringInterning(boolean0: boolean): void;
					getStringInterning(): boolean;
					setBufferSize(int0: number): void;
					getBufferSize(): number;
					setRegisteredEncodingAlgorithms(map0: java.util.Map<any,any>): void;
					getRegisteredEncodingAlgorithms(): java.util.Map<any,any>;
					setExternalVocabularies(map0: java.util.Map<any,any>): void;
					getExternalVocabularies(): java.util.Map<any,any>;
					setParseFragments(boolean0: boolean): void;
					getParseFragments(): boolean;
					setForceStreamClose(boolean0: boolean): void;
					getForceStreamClose(): boolean;
				});
				public constructor();
				public static BUFFER_SIZE_PROPERTY: string;
				public static EXTERNAL_VOCABULARIES_PROPERTY: string;
				public static STRING_INTERNING_PROPERTY: string;
				public static FORCE_STREAM_CLOSE_PROPERTY: string;
				public static REGISTERED_ENCODING_ALGORITHMS_PROPERTY: string;
				public getParseFragments(): boolean;
				public setForceStreamClose(boolean0: boolean): void;
				public setStringInterning(boolean0: boolean): void;
				public setExternalVocabularies(map0: java.util.Map<any,any>): void;
				public getStringInterning(): boolean;
				public setBufferSize(int0: number): void;
				public setRegisteredEncodingAlgorithms(map0: java.util.Map<any,any>): void;
				/** @deprecated */
				public getExternalVocabularies(): java.util.Map<any,any>;
				public getRegisteredEncodingAlgorithms(): java.util.Map<any,any>;
				public getBufferSize(): number;
				public setParseFragments(boolean0: boolean): void;
				public getForceStreamClose(): boolean;
			}
		}
	}
}

declare module org {
	export module jvnet {
		export module fastinfoset {
			export class FastInfosetResult extends javax.xml.transform.sax.SAXResult {
				public static class: java.lang.Class<org.jvnet.fastinfoset.FastInfosetResult>;
				public constructor(outputStream: java.io.OutputStream);
				public getLexicalHandler(): org.xml.sax.ext.LexicalHandler;
				public setOutputStream(outputStream: java.io.OutputStream): void;
				public getHandler(): org.xml.sax.ContentHandler;
				public getSystemId(): string;
				public constructor(handler: org.xml.sax.ContentHandler);
				public setSystemId(systemId: string): void;
				public constructor();
				public getOutputStream(): java.io.OutputStream;
			}
		}
	}
}

declare module org {
	export module jvnet {
		export module fastinfoset {
			export class FastInfosetSerializer extends java.lang.Object {
				public static class: java.lang.Class<org.jvnet.fastinfoset.FastInfosetSerializer>;
				/**
				 * Constructs a new instance of the org.jvnet.fastinfoset.FastInfosetSerializer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					setIgnoreDTD(boolean0: boolean): void;
					getIgnoreDTD(): boolean;
					setIgnoreComments(boolean0: boolean): void;
					getIgnoreComments(): boolean;
					setIgnoreProcesingInstructions(boolean0: boolean): void;
					getIgnoreProcesingInstructions(): boolean;
					setIgnoreWhiteSpaceTextContent(boolean0: boolean): void;
					getIgnoreWhiteSpaceTextContent(): boolean;
					setCharacterEncodingScheme(string0: string): void;
					getCharacterEncodingScheme(): string;
					setRegisteredEncodingAlgorithms(map0: java.util.Map<any,any>): void;
					getRegisteredEncodingAlgorithms(): java.util.Map<any,any>;
					getMinCharacterContentChunkSize(): number;
					setMinCharacterContentChunkSize(int0: number): void;
					getMaxCharacterContentChunkSize(): number;
					setMaxCharacterContentChunkSize(int0: number): void;
					getCharacterContentChunkMapMemoryLimit(): number;
					setCharacterContentChunkMapMemoryLimit(int0: number): void;
					getMinAttributeValueSize(): number;
					setMinAttributeValueSize(int0: number): void;
					getMaxAttributeValueSize(): number;
					setMaxAttributeValueSize(int0: number): void;
					getAttributeValueMapMemoryLimit(): number;
					setAttributeValueMapMemoryLimit(int0: number): void;
					setExternalVocabulary(externalVocabulary0: org.jvnet.fastinfoset.ExternalVocabulary): void;
					setVocabularyApplicationData(vocabularyApplicationData0: org.jvnet.fastinfoset.VocabularyApplicationData): void;
					getVocabularyApplicationData(): org.jvnet.fastinfoset.VocabularyApplicationData;
					reset(): void;
					setOutputStream(outputStream0: java.io.OutputStream): void;
				});
				public constructor();
				public static CHARACTER_CONTENT_CHUNK_MAP_MEMORY_CONSTRAINT: number;
				public static ATTRIBUTE_VALUE_MAP_MEMORY_CONSTRAINT: number;
				public static UTF_8: string;
				public static UTF_16BE: string;
				public static IGNORE_DTD_FEATURE: string;
				public static IGNORE_COMMENTS_FEATURE: string;
				public static IGNORE_PROCESSING_INSTRUCTIONS_FEATURE: string;
				public static MAX_ATTRIBUTE_VALUE_SIZE: number;
				public static BUFFER_SIZE_PROPERTY: string;
				public static MIN_CHARACTER_CONTENT_CHUNK_SIZE: number;
				public static EXTERNAL_VOCABULARIES_PROPERTY: string;
				public static IGNORE_WHITE_SPACE_TEXT_CONTENT_FEATURE: string;
				public static MAX_CHARACTER_CONTENT_CHUNK_SIZE: number;
				public static REGISTERED_ENCODING_ALGORITHMS_PROPERTY: string;
				public static MIN_ATTRIBUTE_VALUE_SIZE: number;
				public setOutputStream(outputStream0: java.io.OutputStream): void;
				public getIgnoreWhiteSpaceTextContent(): boolean;
				public getRegisteredEncodingAlgorithms(): java.util.Map<any,any>;
				public getMaxAttributeValueSize(): number;
				public reset(): void;
				public setMinAttributeValueSize(int0: number): void;
				public setExternalVocabulary(externalVocabulary0: org.jvnet.fastinfoset.ExternalVocabulary): void;
				public getCharacterContentChunkMapMemoryLimit(): number;
				public getIgnoreComments(): boolean;
				public getAttributeValueMapMemoryLimit(): number;
				public getVocabularyApplicationData(): org.jvnet.fastinfoset.VocabularyApplicationData;
				public getCharacterEncodingScheme(): string;
				public setCharacterEncodingScheme(string0: string): void;
				public getMinAttributeValueSize(): number;
				public setMaxAttributeValueSize(int0: number): void;
				public getIgnoreDTD(): boolean;
				public setIgnoreDTD(boolean0: boolean): void;
				public setAttributeValueMapMemoryLimit(int0: number): void;
				public getMinCharacterContentChunkSize(): number;
				public setIgnoreWhiteSpaceTextContent(boolean0: boolean): void;
				public setCharacterContentChunkMapMemoryLimit(int0: number): void;
				public setMaxCharacterContentChunkSize(int0: number): void;
				public setRegisteredEncodingAlgorithms(map0: java.util.Map<any,any>): void;
				public getIgnoreProcesingInstructions(): boolean;
				public setMinCharacterContentChunkSize(int0: number): void;
				public setVocabularyApplicationData(vocabularyApplicationData0: org.jvnet.fastinfoset.VocabularyApplicationData): void;
				public setIgnoreComments(boolean0: boolean): void;
				public getMaxCharacterContentChunkSize(): number;
				public setIgnoreProcesingInstructions(boolean0: boolean): void;
			}
		}
	}
}

declare module org {
	export module jvnet {
		export module fastinfoset {
			export class FastInfosetSource extends javax.xml.transform.sax.SAXSource {
				public static class: java.lang.Class<org.jvnet.fastinfoset.FastInfosetSource>;
				public constructor(inputStream: java.io.InputStream);
				public getXMLReader(): org.xml.sax.XMLReader;
				public getSystemId(): string;
				public getInputStream(): java.io.InputStream;
				public constructor(inputSource: org.xml.sax.InputSource);
				public setInputStream(inputStream: java.io.InputStream): void;
				public constructor(reader: org.xml.sax.XMLReader, inputSource: org.xml.sax.InputSource);
				public setSystemId(systemId: string): void;
				public constructor();
			}
		}
	}
}

declare module org {
	export module jvnet {
		export module fastinfoset {
			export class RestrictedAlphabet extends java.lang.Object {
				public static class: java.lang.Class<org.jvnet.fastinfoset.RestrictedAlphabet>;
				public static NUMERIC_CHARACTERS: string;
				public static NUMERIC_CHARACTERS_INDEX: number;
				public static DATE_TIME_CHARACTERS: string;
				public static DATE_TIME_CHARACTERS_INDEX: number;
				public constructor();
			}
		}
	}
}

declare module org {
	export module jvnet {
		export module fastinfoset {
			export class Vocabulary extends java.lang.Object {
				public static class: java.lang.Class<org.jvnet.fastinfoset.Vocabulary>;
				public restrictedAlphabets: java.util.Set<any>;
				public encodingAlgorithms: java.util.Set<any>;
				public prefixes: java.util.Set<any>;
				public namespaceNames: java.util.Set<any>;
				public localNames: java.util.Set<any>;
				public otherNCNames: java.util.Set<any>;
				public otherURIs: java.util.Set<any>;
				public attributeValues: java.util.Set<any>;
				public otherStrings: java.util.Set<any>;
				public characterContentChunks: java.util.Set<any>;
				public elements: java.util.Set<any>;
				public attributes: java.util.Set<any>;
				public constructor();
			}
		}
	}
}

declare module org {
	export module jvnet {
		export module fastinfoset {
			export class VocabularyApplicationData extends java.lang.Object {
				public static class: java.lang.Class<org.jvnet.fastinfoset.VocabularyApplicationData>;
				/**
				 * Constructs a new instance of the org.jvnet.fastinfoset.VocabularyApplicationData interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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

declare module org {
	export module jvnet {
		export module fastinfoset {
			export module sax {
				export class EncodingAlgorithmAttributes extends java.lang.Object implements org.xml.sax.Attributes {
					public static class: java.lang.Class<org.jvnet.fastinfoset.sax.EncodingAlgorithmAttributes>;
					/**
					 * Constructs a new instance of the org.jvnet.fastinfoset.sax.EncodingAlgorithmAttributes interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getAlgorithmURI(int0: number): string;
						getAlgorithmIndex(int0: number): number;
						getAlgorithmData(int0: number): any;
						getAlpababet(int0: number): string;
						getToIndex(int0: number): boolean;
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
					public getIndex(string0: string): number;
					public getAlgorithmIndex(int0: number): number;
					public getType(string0: string, string1: string): string;
					public getLength(): number;
					public getAlgorithmURI(int0: number): string;
					public getType(int0: number): string;
					public getType(string0: string): string;
					public getURI(int0: number): string;
					public getToIndex(int0: number): boolean;
					public getAlpababet(int0: number): string;
					public getLocalName(int0: number): string;
					public getValue(string0: string): string;
					public getQName(int0: number): string;
					public getIndex(string0: string, string1: string): number;
					public getValue(string0: string, string1: string): string;
					public getAlgorithmData(int0: number): any;
					public getValue(int0: number): string;
				}
			}
		}
	}
}

declare module org {
	export module jvnet {
		export module fastinfoset {
			export module sax {
				export class EncodingAlgorithmContentHandler extends java.lang.Object {
					public static class: java.lang.Class<org.jvnet.fastinfoset.sax.EncodingAlgorithmContentHandler>;
					/**
					 * Constructs a new instance of the org.jvnet.fastinfoset.sax.EncodingAlgorithmContentHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						octets(string0: string, int1: number, bytes2: native.Array<number>, int3: number, int4: number): void;
						object(string0: string, int1: number, object2: any): void;
					});
					public constructor();
					public octets(string0: string, int1: number, bytes2: native.Array<number>, int3: number, int4: number): void;
					public object(string0: string, int1: number, object2: any): void;
				}
			}
		}
	}
}

declare module org {
	export module jvnet {
		export module fastinfoset {
			export module sax {
				export class ExtendedContentHandler extends java.lang.Object implements org.xml.sax.ContentHandler {
					public static class: java.lang.Class<org.jvnet.fastinfoset.sax.ExtendedContentHandler>;
					/**
					 * Constructs a new instance of the org.jvnet.fastinfoset.sax.ExtendedContentHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						characters(chars0: native.Array<string>, int1: number, int2: number, boolean3: boolean): void;
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
					public startDocument(): void;
					public processingInstruction(string0: string, string1: string): void;
					public skippedEntity(string0: string): void;
					public startPrefixMapping(string0: string, string1: string): void;
					public endPrefixMapping(string0: string): void;
					public characters(chars0: native.Array<string>, int1: number, int2: number, boolean3: boolean): void;
					public characters(chars0: native.Array<string>, int1: number, int2: number): void;
					public endDocument(): void;
					public ignorableWhitespace(chars0: native.Array<string>, int1: number, int2: number): void;
					public setDocumentLocator(locator0: org.xml.sax.Locator): void;
					public startElement(string0: string, string1: string, string2: string, attributes3: org.xml.sax.Attributes): void;
					public endElement(string0: string, string1: string, string2: string): void;
				}
			}
		}
	}
}

declare module org {
	export module jvnet {
		export module fastinfoset {
			export module sax {
				export class FastInfosetReader extends java.lang.Object implements org.xml.sax.XMLReader, org.jvnet.fastinfoset.FastInfosetParser {
					public static class: java.lang.Class<org.jvnet.fastinfoset.sax.FastInfosetReader>;
					/**
					 * Constructs a new instance of the org.jvnet.fastinfoset.sax.FastInfosetReader interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						parse(inputStream0: java.io.InputStream): void;
						setLexicalHandler(lexicalHandler0: org.xml.sax.ext.LexicalHandler): void;
						getLexicalHandler(): org.xml.sax.ext.LexicalHandler;
						setDeclHandler(declHandler0: org.xml.sax.ext.DeclHandler): void;
						getDeclHandler(): org.xml.sax.ext.DeclHandler;
						setEncodingAlgorithmContentHandler(encodingAlgorithmContentHandler0: org.jvnet.fastinfoset.sax.EncodingAlgorithmContentHandler): void;
						getEncodingAlgorithmContentHandler(): org.jvnet.fastinfoset.sax.EncodingAlgorithmContentHandler;
						setPrimitiveTypeContentHandler(primitiveTypeContentHandler0: org.jvnet.fastinfoset.sax.PrimitiveTypeContentHandler): void;
						getPrimitiveTypeContentHandler(): org.jvnet.fastinfoset.sax.PrimitiveTypeContentHandler;
						getFeature(string0: string): boolean;
						setFeature(string0: string, boolean1: boolean): void;
						getProperty(string0: string): any;
						setProperty(string0: string, object1: any): void;
						setEntityResolver(entityResolver0: org.xml.sax.EntityResolver): void;
						getEntityResolver(): org.xml.sax.EntityResolver;
						setDTDHandler(dTDHandler0: org.xml.sax.DTDHandler): void;
						getDTDHandler(): org.xml.sax.DTDHandler;
						setContentHandler(contentHandler0: org.xml.sax.ContentHandler): void;
						getContentHandler(): org.xml.sax.ContentHandler;
						setErrorHandler(errorHandler0: org.xml.sax.ErrorHandler): void;
						getErrorHandler(): org.xml.sax.ErrorHandler;
						parse(inputSource0: org.xml.sax.InputSource): void;
						parse(string0: string): void;
						setStringInterning(boolean0: boolean): void;
						getStringInterning(): boolean;
						setBufferSize(int0: number): void;
						getBufferSize(): number;
						setRegisteredEncodingAlgorithms(map0: java.util.Map<any,any>): void;
						getRegisteredEncodingAlgorithms(): java.util.Map<any,any>;
						setExternalVocabularies(map0: java.util.Map<any,any>): void;
						getExternalVocabularies(): java.util.Map<any,any>;
						setParseFragments(boolean0: boolean): void;
						getParseFragments(): boolean;
						setForceStreamClose(boolean0: boolean): void;
						getForceStreamClose(): boolean;
					});
					public constructor();
					public static BUFFER_SIZE_PROPERTY: string;
					public static ENCODING_ALGORITHM_CONTENT_HANDLER_PROPERTY: string;
					public static PRIMITIVE_TYPE_CONTENT_HANDLER_PROPERTY: string;
					public static EXTERNAL_VOCABULARIES_PROPERTY: string;
					public static STRING_INTERNING_PROPERTY: string;
					public static FORCE_STREAM_CLOSE_PROPERTY: string;
					public static REGISTERED_ENCODING_ALGORITHMS_PROPERTY: string;
					public getLexicalHandler(): org.xml.sax.ext.LexicalHandler;
					/** @deprecated */
					public getExternalVocabularies(): java.util.Map<any,any>;
					public setEntityResolver(entityResolver0: org.xml.sax.EntityResolver): void;
					public getContentHandler(): org.xml.sax.ContentHandler;
					public parse(inputSource0: org.xml.sax.InputSource): void;
					public setContentHandler(contentHandler0: org.xml.sax.ContentHandler): void;
					public setStringInterning(boolean0: boolean): void;
					public getEntityResolver(): org.xml.sax.EntityResolver;
					public getStringInterning(): boolean;
					public getRegisteredEncodingAlgorithms(): java.util.Map<any,any>;
					public getDTDHandler(): org.xml.sax.DTDHandler;
					public setExternalVocabularies(map0: java.util.Map<any,any>): void;
					public setPrimitiveTypeContentHandler(primitiveTypeContentHandler0: org.jvnet.fastinfoset.sax.PrimitiveTypeContentHandler): void;
					public getProperty(string0: string): any;
					public getBufferSize(): number;
					public setFeature(string0: string, boolean1: boolean): void;
					public setDTDHandler(dTDHandler0: org.xml.sax.DTDHandler): void;
					public parse(string0: string): void;
					public setEncodingAlgorithmContentHandler(encodingAlgorithmContentHandler0: org.jvnet.fastinfoset.sax.EncodingAlgorithmContentHandler): void;
					public setProperty(string0: string, object1: any): void;
					public getDeclHandler(): org.xml.sax.ext.DeclHandler;
					public getParseFragments(): boolean;
					public setErrorHandler(errorHandler0: org.xml.sax.ErrorHandler): void;
					public getPrimitiveTypeContentHandler(): org.jvnet.fastinfoset.sax.PrimitiveTypeContentHandler;
					public setLexicalHandler(lexicalHandler0: org.xml.sax.ext.LexicalHandler): void;
					public setParseFragments(boolean0: boolean): void;
					public setForceStreamClose(boolean0: boolean): void;
					public getEncodingAlgorithmContentHandler(): org.jvnet.fastinfoset.sax.EncodingAlgorithmContentHandler;
					public getFeature(string0: string): boolean;
					public parse(inputStream0: java.io.InputStream): void;
					public setRegisteredEncodingAlgorithms(map0: java.util.Map<any,any>): void;
					public getForceStreamClose(): boolean;
					public setDeclHandler(declHandler0: org.xml.sax.ext.DeclHandler): void;
					public setBufferSize(int0: number): void;
					public getErrorHandler(): org.xml.sax.ErrorHandler;
				}
			}
		}
	}
}

declare module org {
	export module jvnet {
		export module fastinfoset {
			export module sax {
				export class FastInfosetWriter extends java.lang.Object implements org.xml.sax.ContentHandler, org.xml.sax.ext.LexicalHandler, org.jvnet.fastinfoset.sax.EncodingAlgorithmContentHandler, org.jvnet.fastinfoset.sax.PrimitiveTypeContentHandler, org.jvnet.fastinfoset.sax.RestrictedAlphabetContentHandler, org.jvnet.fastinfoset.sax.ExtendedContentHandler, org.jvnet.fastinfoset.FastInfosetSerializer {
					public static class: java.lang.Class<org.jvnet.fastinfoset.sax.FastInfosetWriter>;
					/**
					 * Constructs a new instance of the org.jvnet.fastinfoset.sax.FastInfosetWriter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
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
						startDTD(string0: string, string1: string, string2: string): void;
						endDTD(): void;
						startEntity(string0: string): void;
						endEntity(string0: string): void;
						startCDATA(): void;
						endCDATA(): void;
						comment(chars0: native.Array<string>, int1: number, int2: number): void;
						octets(string0: string, int1: number, bytes2: native.Array<number>, int3: number, int4: number): void;
						object(string0: string, int1: number, object2: any): void;
						booleans(booleans0: native.Array<boolean>, int1: number, int2: number): void;
						bytes(bytes0: native.Array<number>, int1: number, int2: number): void;
						shorts(shorts0: native.Array<number>, int1: number, int2: number): void;
						ints(ints0: native.Array<number>, int1: number, int2: number): void;
						longs(longs0: native.Array<number>, int1: number, int2: number): void;
						floats(floats0: native.Array<number>, int1: number, int2: number): void;
						doubles(doubles0: native.Array<number>, int1: number, int2: number): void;
						uuids(longs0: native.Array<number>, int1: number, int2: number): void;
						numericCharacters(chars0: native.Array<string>, int1: number, int2: number): void;
						dateTimeCharacters(chars0: native.Array<string>, int1: number, int2: number): void;
						alphabetCharacters(string0: string, chars1: native.Array<string>, int2: number, int3: number): void;
						characters(chars0: native.Array<string>, int1: number, int2: number, boolean3: boolean): void;
						setIgnoreDTD(boolean0: boolean): void;
						getIgnoreDTD(): boolean;
						setIgnoreComments(boolean0: boolean): void;
						getIgnoreComments(): boolean;
						setIgnoreProcesingInstructions(boolean0: boolean): void;
						getIgnoreProcesingInstructions(): boolean;
						setIgnoreWhiteSpaceTextContent(boolean0: boolean): void;
						getIgnoreWhiteSpaceTextContent(): boolean;
						setCharacterEncodingScheme(string0: string): void;
						getCharacterEncodingScheme(): string;
						setRegisteredEncodingAlgorithms(map0: java.util.Map<any,any>): void;
						getRegisteredEncodingAlgorithms(): java.util.Map<any,any>;
						getMinCharacterContentChunkSize(): number;
						setMinCharacterContentChunkSize(int0: number): void;
						getMaxCharacterContentChunkSize(): number;
						setMaxCharacterContentChunkSize(int0: number): void;
						getCharacterContentChunkMapMemoryLimit(): number;
						setCharacterContentChunkMapMemoryLimit(int0: number): void;
						getMinAttributeValueSize(): number;
						setMinAttributeValueSize(int0: number): void;
						getMaxAttributeValueSize(): number;
						setMaxAttributeValueSize(int0: number): void;
						getAttributeValueMapMemoryLimit(): number;
						setAttributeValueMapMemoryLimit(int0: number): void;
						setExternalVocabulary(externalVocabulary0: org.jvnet.fastinfoset.ExternalVocabulary): void;
						setVocabularyApplicationData(vocabularyApplicationData0: org.jvnet.fastinfoset.VocabularyApplicationData): void;
						getVocabularyApplicationData(): org.jvnet.fastinfoset.VocabularyApplicationData;
						reset(): void;
						setOutputStream(outputStream0: java.io.OutputStream): void;
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
					public static CHARACTER_CONTENT_CHUNK_MAP_MEMORY_CONSTRAINT: number;
					public static ATTRIBUTE_VALUE_MAP_MEMORY_CONSTRAINT: number;
					public static UTF_8: string;
					public static UTF_16BE: string;
					public static IGNORE_DTD_FEATURE: string;
					public static IGNORE_COMMENTS_FEATURE: string;
					public static IGNORE_PROCESSING_INSTRUCTIONS_FEATURE: string;
					public static MAX_ATTRIBUTE_VALUE_SIZE: number;
					public static BUFFER_SIZE_PROPERTY: string;
					public static MIN_CHARACTER_CONTENT_CHUNK_SIZE: number;
					public static EXTERNAL_VOCABULARIES_PROPERTY: string;
					public static IGNORE_WHITE_SPACE_TEXT_CONTENT_FEATURE: string;
					public static MAX_CHARACTER_CONTENT_CHUNK_SIZE: number;
					public static REGISTERED_ENCODING_ALGORITHMS_PROPERTY: string;
					public static MIN_ATTRIBUTE_VALUE_SIZE: number;
					public setOutputStream(outputStream0: java.io.OutputStream): void;
					public getAttributeValueMapMemoryLimit(): number;
					public endPrefixMapping(string0: string): void;
					public bytes(bytes0: native.Array<number>, int1: number, int2: number): void;
					public setMaxCharacterContentChunkSize(int0: number): void;
					public getIgnoreComments(): boolean;
					public setAttributeValueMapMemoryLimit(int0: number): void;
					public startDTD(string0: string, string1: string, string2: string): void;
					public startPrefixMapping(string0: string, string1: string): void;
					public setMaxAttributeValueSize(int0: number): void;
					public setVocabularyApplicationData(vocabularyApplicationData0: org.jvnet.fastinfoset.VocabularyApplicationData): void;
					public getIgnoreDTD(): boolean;
					public getCharacterContentChunkMapMemoryLimit(): number;
					public doubles(doubles0: native.Array<number>, int1: number, int2: number): void;
					public object(string0: string, int1: number, object2: any): void;
					public getVocabularyApplicationData(): org.jvnet.fastinfoset.VocabularyApplicationData;
					public setIgnoreProcesingInstructions(boolean0: boolean): void;
					public endElement(string0: string, string1: string, string2: string): void;
					public booleans(booleans0: native.Array<boolean>, int1: number, int2: number): void;
					public comment(chars0: native.Array<string>, int1: number, int2: number): void;
					public startEntity(string0: string): void;
					public characters(chars0: native.Array<string>, int1: number, int2: number, boolean3: boolean): void;
					public setCharacterContentChunkMapMemoryLimit(int0: number): void;
					public floats(floats0: native.Array<number>, int1: number, int2: number): void;
					public getCharacterEncodingScheme(): string;
					public ignorableWhitespace(chars0: native.Array<string>, int1: number, int2: number): void;
					public alphabetCharacters(string0: string, chars1: native.Array<string>, int2: number, int3: number): void;
					public longs(longs0: native.Array<number>, int1: number, int2: number): void;
					public setIgnoreWhiteSpaceTextContent(boolean0: boolean): void;
					public ints(ints0: native.Array<number>, int1: number, int2: number): void;
					public endDocument(): void;
					public dateTimeCharacters(chars0: native.Array<string>, int1: number, int2: number): void;
					public setDocumentLocator(locator0: org.xml.sax.Locator): void;
					public setExternalVocabulary(externalVocabulary0: org.jvnet.fastinfoset.ExternalVocabulary): void;
					public getMaxCharacterContentChunkSize(): number;
					public getIgnoreProcesingInstructions(): boolean;
					public getRegisteredEncodingAlgorithms(): java.util.Map<any,any>;
					public shorts(shorts0: native.Array<number>, int1: number, int2: number): void;
					public setCharacterEncodingScheme(string0: string): void;
					public getMaxAttributeValueSize(): number;
					public endEntity(string0: string): void;
					public startElement(string0: string, string1: string, string2: string, attributes3: org.xml.sax.Attributes): void;
					public uuids(longs0: native.Array<number>, int1: number, int2: number): void;
					public octets(string0: string, int1: number, bytes2: native.Array<number>, int3: number, int4: number): void;
					public reset(): void;
					public processingInstruction(string0: string, string1: string): void;
					public endDTD(): void;
					public getIgnoreWhiteSpaceTextContent(): boolean;
					public setMinCharacterContentChunkSize(int0: number): void;
					public setMinAttributeValueSize(int0: number): void;
					public startCDATA(): void;
					public startDocument(): void;
					public endCDATA(): void;
					public skippedEntity(string0: string): void;
					public characters(chars0: native.Array<string>, int1: number, int2: number): void;
					public setRegisteredEncodingAlgorithms(map0: java.util.Map<any,any>): void;
					public setIgnoreDTD(boolean0: boolean): void;
					public setIgnoreComments(boolean0: boolean): void;
					public numericCharacters(chars0: native.Array<string>, int1: number, int2: number): void;
					public getMinCharacterContentChunkSize(): number;
					public getMinAttributeValueSize(): number;
				}
			}
		}
	}
}

declare module org {
	export module jvnet {
		export module fastinfoset {
			export module sax {
				export class PrimitiveTypeContentHandler extends java.lang.Object {
					public static class: java.lang.Class<org.jvnet.fastinfoset.sax.PrimitiveTypeContentHandler>;
					/**
					 * Constructs a new instance of the org.jvnet.fastinfoset.sax.PrimitiveTypeContentHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						booleans(booleans0: native.Array<boolean>, int1: number, int2: number): void;
						bytes(bytes0: native.Array<number>, int1: number, int2: number): void;
						shorts(shorts0: native.Array<number>, int1: number, int2: number): void;
						ints(ints0: native.Array<number>, int1: number, int2: number): void;
						longs(longs0: native.Array<number>, int1: number, int2: number): void;
						floats(floats0: native.Array<number>, int1: number, int2: number): void;
						doubles(doubles0: native.Array<number>, int1: number, int2: number): void;
						uuids(longs0: native.Array<number>, int1: number, int2: number): void;
					});
					public constructor();
					public booleans(booleans0: native.Array<boolean>, int1: number, int2: number): void;
					public doubles(doubles0: native.Array<number>, int1: number, int2: number): void;
					public shorts(shorts0: native.Array<number>, int1: number, int2: number): void;
					public ints(ints0: native.Array<number>, int1: number, int2: number): void;
					public floats(floats0: native.Array<number>, int1: number, int2: number): void;
					public bytes(bytes0: native.Array<number>, int1: number, int2: number): void;
					public longs(longs0: native.Array<number>, int1: number, int2: number): void;
					public uuids(longs0: native.Array<number>, int1: number, int2: number): void;
				}
			}
		}
	}
}

declare module org {
	export module jvnet {
		export module fastinfoset {
			export module sax {
				export class RestrictedAlphabetContentHandler extends java.lang.Object {
					public static class: java.lang.Class<org.jvnet.fastinfoset.sax.RestrictedAlphabetContentHandler>;
					/**
					 * Constructs a new instance of the org.jvnet.fastinfoset.sax.RestrictedAlphabetContentHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						numericCharacters(chars0: native.Array<string>, int1: number, int2: number): void;
						dateTimeCharacters(chars0: native.Array<string>, int1: number, int2: number): void;
						alphabetCharacters(string0: string, chars1: native.Array<string>, int2: number, int3: number): void;
					});
					public constructor();
					public dateTimeCharacters(chars0: native.Array<string>, int1: number, int2: number): void;
					public alphabetCharacters(string0: string, chars1: native.Array<string>, int2: number, int3: number): void;
					public numericCharacters(chars0: native.Array<string>, int1: number, int2: number): void;
				}
			}
		}
	}
}

declare module org {
	export module jvnet {
		export module fastinfoset {
			export module sax {
				export module helpers {
					export class EncodingAlgorithmAttributesImpl extends java.lang.Object implements org.jvnet.fastinfoset.sax.EncodingAlgorithmAttributes {
						public static class: java.lang.Class<org.jvnet.fastinfoset.sax.helpers.EncodingAlgorithmAttributesImpl>;
						public getAlpababet(index: number): string;
						public addAttributeWithBuiltInAlgorithmData(URI: string, localName: string, qName: string, builtInAlgorithmID: number, algorithmData: any): void;
						public addAttribute(URI: string, localName: string, qName: string, type: string, value: string, index: boolean, alphabet: string): void;
						public getValue(index: number): string;
						public getLocalName(index: number): string;
						public getIndex(uri: string, localName: string): number;
						public getLength(): number;
						public addAttribute(URI: string, localName: string, qName: string, type: string, value: string): void;
						public constructor(attributes: org.xml.sax.Attributes);
						public replaceWithAttributeAlgorithmData(index: number, algorithmURI: string, algorithmID: number, algorithmData: any): void;
						public getType(uri: string, localName: string): string;
						public getValue(qName: string): string;
						public getURI(index: number): string;
						public getQName(index: number): string;
						public getAlgorithmIndex(index: number): number;
						public addAttributeWithAlgorithmData(URI: string, localName: string, qName: string, algorithmURI: string, algorithmID: number, algorithmData: any): void;
						public constructor();
						public getToIndex(index: number): boolean;
						public getAlgorithmData(index: number): any;
						public getType(index: number): string;
						public setAttributes(atts: org.jvnet.fastinfoset.sax.EncodingAlgorithmAttributes): void;
						public getType(qName: string): string;
						public getAlgorithmURI(index: number): string;
						public constructor(registeredEncodingAlgorithms: java.util.Map<any,any>, attributes: org.xml.sax.Attributes);
						public setAttributes(atts: org.xml.sax.Attributes): void;
						public clear(): void;
						public getValue(uri: string, localName: string): string;
						public getIndex(qName: string): number;
					}
				}
			}
		}
	}
}

declare module org {
	export module jvnet {
		export module fastinfoset {
			export module sax {
				export module helpers {
					export class FastInfosetDefaultHandler extends org.xml.sax.helpers.DefaultHandler implements org.xml.sax.ext.LexicalHandler, org.jvnet.fastinfoset.sax.EncodingAlgorithmContentHandler, org.jvnet.fastinfoset.sax.PrimitiveTypeContentHandler {
						public static class: java.lang.Class<org.jvnet.fastinfoset.sax.helpers.FastInfosetDefaultHandler>;
						public startCDATA(): void;
						public error(e: org.xml.sax.SAXParseException): void;
						public octets(URI: string, algorithm: number, b: native.Array<number>, start: number, length: number): void;
						public object(URI: string, algorithm: number, o: any): void;
						public startDTD(name: string, publicId: string, systemId: string): void;
						public doubles(d: native.Array<number>, start: number, length: number): void;
						public booleans(b: native.Array<boolean>, start: number, length: number): void;
						public skippedEntity(name: string): void;
						public uuids(msblsb: native.Array<number>, start: number, length: number): void;
						public endPrefixMapping(prefix: string): void;
						public processingInstruction(target: string, data: string): void;
						public endElement(uri: string, localName: string, qName: string): void;
						public endCDATA(): void;
						public endDocument(): void;
						public bytes(b: native.Array<number>, start: number, length: number): void;
						public startElement(uri: string, localName: string, qName: string, attributes: org.xml.sax.Attributes): void;
						public startPrefixMapping(prefix: string, uri: string): void;
						public comment(ch: native.Array<string>, start: number, length: number): void;
						public longs(l: native.Array<number>, start: number, length: number): void;
						public warning(e: org.xml.sax.SAXParseException): void;
						public ignorableWhitespace(ch: native.Array<string>, start: number, length: number): void;
						public constructor();
						public endEntity(name: string): void;
						public startDocument(): void;
						public notationDecl(name: string, publicId: string, systemId: string): void;
						public startEntity(name: string): void;
						public floats(f: native.Array<number>, start: number, length: number): void;
						public endDTD(): void;
						public fatalError(e: org.xml.sax.SAXParseException): void;
						public resolveEntity(publicId: string, systemId: string): org.xml.sax.InputSource;
						public unparsedEntityDecl(name: string, publicId: string, systemId: string, notationName: string): void;
						public setDocumentLocator(locator: org.xml.sax.Locator): void;
						public shorts(s: native.Array<number>, start: number, length: number): void;
						public characters(ch: native.Array<string>, start: number, length: number): void;
						public ints(i: native.Array<number>, start: number, length: number): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module jvnet {
		export module fastinfoset {
			export module stax {
				export class FastInfosetStreamReader extends java.lang.Object {
					public static class: java.lang.Class<org.jvnet.fastinfoset.stax.FastInfosetStreamReader>;
					/**
					 * Constructs a new instance of the org.jvnet.fastinfoset.stax.FastInfosetStreamReader interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						peekNext(): number;
						accessNamespaceCount(): number;
						accessLocalName(): string;
						accessNamespaceURI(): string;
						accessPrefix(): string;
						accessTextCharacters(): native.Array<string>;
						accessTextStart(): number;
						accessTextLength(): number;
					});
					public constructor();
					public peekNext(): number;
					public accessLocalName(): string;
					public accessPrefix(): string;
					public accessTextStart(): number;
					public accessNamespaceCount(): number;
					public accessTextLength(): number;
					public accessTextCharacters(): native.Array<string>;
					public accessNamespaceURI(): string;
				}
			}
		}
	}
}

declare module org {
	export module jvnet {
		export module fastinfoset {
			export module stax {
				export class LowLevelFastInfosetStreamWriter extends java.lang.Object {
					public static class: java.lang.Class<org.jvnet.fastinfoset.stax.LowLevelFastInfosetStreamWriter>;
					/**
					 * Constructs a new instance of the org.jvnet.fastinfoset.stax.LowLevelFastInfosetStreamWriter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						initiateLowLevelWriting(): void;
						getNextElementIndex(): number;
						getNextAttributeIndex(): number;
						getLocalNameIndex(): number;
						getNextLocalNameIndex(): number;
						writeLowLevelTerminationAndMark(): void;
						writeLowLevelStartElementIndexed(int0: number, int1: number): void;
						writeLowLevelStartElement(int0: number, string1: string, string2: string, string3: string): boolean;
						writeLowLevelStartNamespaces(): void;
						writeLowLevelNamespace(string0: string, string1: string): void;
						writeLowLevelEndNamespaces(): void;
						writeLowLevelStartAttributes(): void;
						writeLowLevelAttributeIndexed(int0: number): void;
						writeLowLevelAttribute(string0: string, string1: string, string2: string): boolean;
						writeLowLevelAttributeValue(string0: string): void;
						writeLowLevelStartNameLiteral(int0: number, string1: string, bytes2: native.Array<number>, string3: string): void;
						writeLowLevelStartNameLiteral(int0: number, string1: string, int2: number, string3: string): void;
						writeLowLevelEndStartElement(): void;
						writeLowLevelEndElement(): void;
						writeLowLevelText(chars0: native.Array<string>, int1: number): void;
						writeLowLevelText(string0: string): void;
						writeLowLevelOctets(bytes0: native.Array<number>, int1: number): void;
					});
					public constructor();
					public writeLowLevelEndStartElement(): void;
					public writeLowLevelOctets(bytes0: native.Array<number>, int1: number): void;
					public writeLowLevelStartElementIndexed(int0: number, int1: number): void;
					public writeLowLevelAttribute(string0: string, string1: string, string2: string): boolean;
					public writeLowLevelStartElement(int0: number, string1: string, string2: string, string3: string): boolean;
					public writeLowLevelAttributeIndexed(int0: number): void;
					public writeLowLevelStartNameLiteral(int0: number, string1: string, bytes2: native.Array<number>, string3: string): void;
					public writeLowLevelEndElement(): void;
					public writeLowLevelText(string0: string): void;
					public getNextAttributeIndex(): number;
					public writeLowLevelStartNamespaces(): void;
					public writeLowLevelText(chars0: native.Array<string>, int1: number): void;
					public initiateLowLevelWriting(): void;
					public writeLowLevelNamespace(string0: string, string1: string): void;
					public writeLowLevelEndNamespaces(): void;
					public writeLowLevelAttributeValue(string0: string): void;
					public getNextElementIndex(): number;
					public writeLowLevelStartAttributes(): void;
					public writeLowLevelTerminationAndMark(): void;
					public writeLowLevelStartNameLiteral(int0: number, string1: string, int2: number, string3: string): void;
					public getLocalNameIndex(): number;
					public getNextLocalNameIndex(): number;
				}
			}
		}
	}
}

//Generics information:

