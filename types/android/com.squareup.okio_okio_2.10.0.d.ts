declare module okio {
	export class Base64 extends java.lang.Object {
		public static class: java.lang.Class<okio.Base64>;
		public static decodeBase64ToArray(thisdecodeBase64ToArray: string): native.Array<number>;
		public static getBASE64(): native.Array<number>;
		public static encodeBase64(thisencodeBase64: native.Array<number>, map: native.Array<number>): string;
		public static getBASE64_URL_SAFE(): native.Array<number>;
	}
}

declare module okio {
	export class DeflaterSinkExtensions extends java.lang.Object {
		public static class: java.lang.Class<okio.DeflaterSinkExtensions>;
		public static deflate(thisdeflate: okio.Sink, deflater: java.util.zip.Deflater): okio.DeflaterSink;
	}
}

declare module okio {
	export class Okio extends java.lang.Object {
		public static class: java.lang.Class<okio.Okio>;
		public static INSTANCE: okio.Okio;
		/** @deprecated */
		public source(socket: java.net.Socket): okio.Source;
		/** @deprecated */
		public sink(path: java.nio.file.Path, options: native.Array<java.nio.file.OpenOption>): okio.Sink;
		/** @deprecated */
		public sink(socket: java.net.Socket): okio.Sink;
		/** @deprecated */
		public buffer(sink: okio.Sink): okio.BufferedSink;
		/** @deprecated */
		public sink(file: java.io.File): okio.Sink;
		/** @deprecated */
		public appendingSink(file: java.io.File): okio.Sink;
		/** @deprecated */
		public source(inputStream: java.io.InputStream): okio.Source;
		/** @deprecated */
		public sink(outputStream: java.io.OutputStream): okio.Sink;
		/** @deprecated */
		public source(path: java.nio.file.Path, options: native.Array<java.nio.file.OpenOption>): okio.Source;
		/** @deprecated */
		public blackhole(): okio.Sink;
		/** @deprecated */
		public buffer(source: okio.Source): okio.BufferedSource;
		/** @deprecated */
		public source(file: java.io.File): okio.Source;
	}
}

declare module okio {
	export class Upgrade extends java.lang.Object {
		public static class: java.lang.Class<okio.Upgrade>;
		public static getOkio(): okio.Okio;
		public static getUtf8(): okio.Utf8;
	}
}

declare module okio {
	export class Utf8 extends java.lang.Object {
		public static class: java.lang.Class<okio.Utf8>;
		public static INSTANCE: okio.Utf8;
		/** @deprecated */
		public size(string: string): number;
		/** @deprecated */
		public size(string: string, beginIndex: number, endIndex: number): number;
	}
}

declare module okio {
	export class GzipSinkExtensions extends java.lang.Object {
		public static class: java.lang.Class<okio.GzipSinkExtensions>;
		public static gzip(thisgzip: okio.Sink): okio.GzipSink;
	}
}

declare module okio {
	export class GzipSourceExtensions extends java.lang.Object {
		public static class: java.lang.Class<okio.GzipSourceExtensions>;
		public static gzip(thisgzip: okio.Source): okio.GzipSource;
	}
}

declare module okio {
	export class InflaterSourceExtensions extends java.lang.Object {
		public static class: java.lang.Class<okio.InflaterSourceExtensions>;
		public static inflate(thisinflate: okio.Source, inflater: java.util.zip.Inflater): okio.InflaterSource;
	}
}

declare module okio {
	export class Platform extends java.lang.Object {
		public static class: java.lang.Class<okio.Platform>;
		public static toUtf8String(thistoUtf8String: native.Array<number>): string;
		public static asUtf8ToByteArray(thisasUtf8ToByteArray: string): native.Array<number>;
		public static synchronized(lock: any, block: kotlin.jvm.functions.Function0<any>): any;
	}
}

declare module okio {
	export class Util extends java.lang.Object {
		public static class: java.lang.Class<okio.Util>;
		public static reverseBytes(thisreverseBytes: number): number;
		public static toHexString(thistoHexString: number): string;
		public static leftRotate(thisleftRotate: number, bitCount: number): number;
		public static shr(thisshr: number, other: number): number;
		public static checkOffsetAndCount(size: number, offset: number, byteCount: number): void;
		public static shl(thisshl: number, other: number): number;
		public static arrayRangeEquals(a: native.Array<number>, aOffset: number, b: native.Array<number>, bOffset: number, byteCount: number): boolean;
		public static and(thisand: number, other: number): number;
		public static rightRotate(thisrightRotate: number, bitCount: number): number;
		public static xor(thisxor: number, other: number): number;
		public static minOf(a: number, b: number): number;
	}
}

declare module okio {
	export class AsyncTimeout extends okio.Timeout {
		public static class: java.lang.Class<okio.AsyncTimeout>;
		public static Companion: okio.AsyncTimeout.Companion;
		public enter(): void;
		public constructor();
		public access(cause: java.io.IOException): java.io.IOException;
		public sink(sink: okio.Sink): okio.Sink;
		public withTimeout(block: kotlin.jvm.functions.Function0<any>): any;
		public newTimeoutException(cause: java.io.IOException): java.io.IOException;
		public timedOut(): void;
		public source(source: okio.Source): okio.Source;
		public exit(): boolean;
	}
	export module AsyncTimeout {
		export class Companion extends java.lang.Object {
			public static class: java.lang.Class<okio.AsyncTimeout.Companion>;
			public awaitTimeout(): okio.AsyncTimeout;
		}
		export class Watchdog extends java.lang.Thread {
			public static class: java.lang.Class<okio.AsyncTimeout.Watchdog>;
			public constructor(group: java.lang.ThreadGroup, name: string);
			public constructor(group: java.lang.ThreadGroup, target: java.lang.Runnable, name: string, stackSize: number);
			public constructor(name: string);
			public constructor(target: java.lang.Runnable);
			public run(): void;
			public constructor(group: java.lang.ThreadGroup, target: java.lang.Runnable);
			public constructor();
			public constructor(group: java.lang.ThreadGroup, target: java.lang.Runnable, name: string);
			public constructor(target: java.lang.Runnable, name: string);
		}
	}
}

declare module okio {
	export class BlackholeSink extends java.lang.Object implements okio.Sink {
		public static class: java.lang.Class<okio.BlackholeSink>;
		public constructor();
		public close(): void;
		public write(source: okio.Buffer, byteCount: number): void;
		public flush(): void;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export class Buffer extends java.lang.Object implements okio.BufferedSource, okio.BufferedSink, java.lang.Cloneable, java.nio.channels.ByteChannel {
		public static class: java.lang.Class<okio.Buffer>;
		public head: okio.Segment;
		public require(byteCount: number): void;
		public readUtf8(byteCount: number): string;
		public write(bytes0: native.Array<number>, int1: number, int2: number): okio.BufferedSink;
		public readIntLe(): number;
		public writeString(string: string, beginIndex: number, endIndex: number, charset: java.nio.charset.Charset): okio.Buffer;
		public writeLong(long0: number): okio.BufferedSink;
		/** @deprecated */
		public getByte(index: number): number;
		public write(source: okio.Source, byteCount: number): okio.Buffer;
		public writeHexadecimalUnsignedLong(v: number): okio.Buffer;
		public request(byteCount: number): boolean;
		public write(bytes0: native.Array<number>): okio.BufferedSink;
		public writeTo(out: java.io.OutputStream, byteCount: number): okio.Buffer;
		public copy(): okio.Buffer;
		public readByte(): number;
		public readUnsafe(unsafeCursor: okio.Buffer.UnsafeCursor): okio.Buffer.UnsafeCursor;
		public emitCompleteSegments(): okio.BufferedSink;
		public readLong(): number;
		public writeString(string0: string, charset1: java.nio.charset.Charset): okio.BufferedSink;
		public setSize(param0: number): void;
		public writeString(string0: string, int1: number, int2: number, charset3: java.nio.charset.Charset): okio.BufferedSink;
		public writeTo(out: java.io.OutputStream): okio.Buffer;
		public indexOfElement(targetBytes: okio.ByteString, fromIndex: number): number;
		public getByte(pos: number): number;
		public write(source: okio.Buffer, byteCount: number): void;
		public read(sink: java.nio.ByteBuffer): number;
		public writeUtf8(string: string, beginIndex: number, endIndex: number): okio.Buffer;
		public sha1(): okio.ByteString;
		public copyTo(out: java.io.OutputStream, offset: number, byteCount: number): okio.Buffer;
		public readString(charset: java.nio.charset.Charset): string;
		public indexOf(bytes: okio.ByteString): number;
		public rangeEquals(offset: number, bytes: okio.ByteString): boolean;
		public writeLong(v: number): okio.Buffer;
		public outputStream(): java.io.OutputStream;
		public clear(): void;
		public writeLongLe(v: number): okio.Buffer;
		public readUtf8LineStrict(): string;
		public writeUtf8(string0: string): okio.BufferedSink;
		public readFully(sink: native.Array<number>): void;
		public getBuffer(): okio.Buffer;
		public writeShortLe(int0: number): okio.BufferedSink;
		public sha512(): okio.ByteString;
		public writeIntLe(i: number): okio.Buffer;
		public writeIntLe(int0: number): okio.BufferedSink;
		public writeUtf8CodePoint(int0: number): okio.BufferedSink;
		public skip(byteCount: number): void;
		public copyTo(out: okio.Buffer, offset: number, byteCount: number): okio.Buffer;
		public indexOf(b: number): number;
		public writeByte(int0: number): okio.BufferedSink;
		public readFully(sink: okio.Buffer, byteCount: number): void;
		public equals(other: any): boolean;
		public copyTo(out: okio.Buffer, offset: number): okio.Buffer;
		public readInt(): number;
		public writeUtf8CodePoint(codePoint: number): okio.Buffer;
		public writeByte(b: number): okio.Buffer;
		public equals(obj: any): boolean;
		public write(source: java.nio.ByteBuffer): number;
		public write(source: native.Array<number>): okio.Buffer;
		public writeHexadecimalUnsignedLong(long0: number): okio.BufferedSink;
		public write(byteString: okio.ByteString, offset: number, byteCount: number): okio.Buffer;
		public timeout(): okio.Timeout;
		public writeLongLe(long0: number): okio.BufferedSink;
		public writableSegment(minimumCapacity: number): okio.Segment;
		public indexOf(b: number, fromIndex: number, toIndex: number): number;
		public close(): void;
		public inputStream(): java.io.InputStream;
		public writeDecimalLong(long0: number): okio.BufferedSink;
		public readUtf8CodePoint(): number;
		public hmacSha256(key: okio.ByteString): okio.ByteString;
		public read(sink: okio.Buffer, byteCount: number): number;
		public readAndWriteUnsafe(): okio.Buffer.UnsafeCursor;
		public writeInt(int0: number): okio.BufferedSink;
		public rangeEquals(offset: number, bytes: okio.ByteString, bytesOffset: number, byteCount: number): boolean;
		public read(sink: native.Array<number>, offset: number, byteCount: number): number;
		public writeString(string: string, charset: java.nio.charset.Charset): okio.Buffer;
		public writeInt(i: number): okio.Buffer;
		public readHexadecimalUnsignedLong(): number;
		public read(sink: native.Array<number>): number;
		public select(options: okio.Options): number;
		public indexOfElement(targetBytes: okio.ByteString): number;
		public readAndWriteUnsafe(unsafeCursor: okio.Buffer.UnsafeCursor): okio.Buffer.UnsafeCursor;
		public emit(): okio.BufferedSink;
		public readUtf8LineStrict(limit: number): string;
		public hmacSha1(key: okio.ByteString): okio.ByteString;
		public constructor();
		public readUtf8(): string;
		public indexOf(b: number, fromIndex: number): number;
		/** @deprecated */
		public buffer(): okio.Buffer;
		public writeAll(source: okio.Source): number;
		public writeShort(s: number): okio.Buffer;
		public readUnsafe(): okio.Buffer.UnsafeCursor;
		public completeSegmentByteCount(): number;
		public toString(): string;
		public md5(): okio.ByteString;
		public flush(): void;
		public write(byteString0: okio.ByteString, int1: number, int2: number): okio.BufferedSink;
		public readShort(): number;
		public peek(): okio.BufferedSource;
		public readFrom(input: java.io.InputStream, byteCount: number): okio.Buffer;
		public readShortLe(): number;
		public write(source0: okio.Source, long1: number): okio.BufferedSink;
		public copyTo(out: java.io.OutputStream): okio.Buffer;
		public readFrom(input: java.io.InputStream): okio.Buffer;
		/** @deprecated */
		public size(): number;
		public readUtf8Line(): string;
		public readByteString(): okio.ByteString;
		public writeShortLe(s: number): okio.Buffer;
		public clone(): any;
		public copyTo(out: java.io.OutputStream, offset: number): okio.Buffer;
		public writeUtf8(string: string): okio.Buffer;
		public size(): number;
		public readByteArray(byteCount: number): native.Array<number>;
		public emit(): okio.Buffer;
		public hashCode(): number;
		public readLongLe(): number;
		public writeDecimalLong(v: number): okio.Buffer;
		public indexOf(bytes: okio.ByteString, fromIndex: number): number;
		public snapshot(): okio.ByteString;
		public writeUtf8(string0: string, int1: number, int2: number): okio.BufferedSink;
		public clone(): okio.Buffer;
		public readString(byteCount: number, charset: java.nio.charset.Charset): string;
		public emitCompleteSegments(): okio.Buffer;
		public readDecimalLong(): number;
		public sha256(): okio.ByteString;
		public isOpen(): boolean;
		public readByteString(byteCount: number): okio.ByteString;
		public readByteArray(): native.Array<number>;
		public snapshot(byteCount: number): okio.ByteString;
		public write(byteString0: okio.ByteString): okio.BufferedSink;
		public readAll(sink: okio.Sink): number;
		public exhausted(): boolean;
		public buffer(): okio.Buffer;
		public write(byteString: okio.ByteString): okio.Buffer;
		public writeShort(int0: number): okio.BufferedSink;
		public hmacSha512(key: okio.ByteString): okio.ByteString;
		public write(source: native.Array<number>, offset: number, byteCount: number): okio.Buffer;
	}
	export module Buffer {
		export class UnsafeCursor extends java.lang.Object implements java.io.Closeable {
			public static class: java.lang.Class<okio.Buffer.UnsafeCursor>;
			public buffer: okio.Buffer;
			public readWrite: boolean;
			public offset: number;
			public data: native.Array<number>;
			public start: number;
			public end: number;
			public next(): number;
			public seek(offset: number): number;
			public expandBuffer(minByteCount: number): number;
			public setSegment(param0: okio.Segment): void;
			public resizeBuffer(newSize: number): number;
			public constructor();
			public getSegment(): okio.Segment;
			public close(): void;
		}
	}
}

declare module okio {
	export class BufferedSink extends java.lang.Object implements okio.Sink, java.nio.channels.WritableByteChannel {
		public static class: java.lang.Class<okio.BufferedSink>;
		/**
		 * Constructs a new instance of the okio.BufferedSink interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			buffer(): okio.Buffer;
			getBuffer(): okio.Buffer;
			write(byteString0: okio.ByteString): okio.BufferedSink;
			write(byteString0: okio.ByteString, int1: number, int2: number): okio.BufferedSink;
			write(bytes0: native.Array<number>): okio.BufferedSink;
			write(bytes0: native.Array<number>, int1: number, int2: number): okio.BufferedSink;
			writeAll(source0: okio.Source): number;
			write(source0: okio.Source, long1: number): okio.BufferedSink;
			writeUtf8(string0: string): okio.BufferedSink;
			writeUtf8(string0: string, int1: number, int2: number): okio.BufferedSink;
			writeUtf8CodePoint(int0: number): okio.BufferedSink;
			writeString(string0: string, charset1: java.nio.charset.Charset): okio.BufferedSink;
			writeString(string0: string, int1: number, int2: number, charset3: java.nio.charset.Charset): okio.BufferedSink;
			writeByte(int0: number): okio.BufferedSink;
			writeShort(int0: number): okio.BufferedSink;
			writeShortLe(int0: number): okio.BufferedSink;
			writeInt(int0: number): okio.BufferedSink;
			writeIntLe(int0: number): okio.BufferedSink;
			writeLong(long0: number): okio.BufferedSink;
			writeLongLe(long0: number): okio.BufferedSink;
			writeDecimalLong(long0: number): okio.BufferedSink;
			writeHexadecimalUnsignedLong(long0: number): okio.BufferedSink;
			flush(): void;
			emit(): okio.BufferedSink;
			emitCompleteSegments(): okio.BufferedSink;
			outputStream(): java.io.OutputStream;
			write(buffer0: okio.Buffer, long1: number): void;
			flush(): void;
			timeout(): okio.Timeout;
			close(): void;
			write(byteBuffer0: java.nio.ByteBuffer): number;
			close(): void;
			flush(): void;
			isOpen(): boolean;
			close(): void;
			close(): void;
			close(): void;
			close(): void;
		});
		public constructor();
		public write(byteBuffer0: java.nio.ByteBuffer): number;
		public write(bytes0: native.Array<number>, int1: number, int2: number): okio.BufferedSink;
		public write(buffer0: okio.Buffer, long1: number): void;
		public close(): void;
		public writeLong(long0: number): okio.BufferedSink;
		public writeUtf8(string0: string): okio.BufferedSink;
		public writeDecimalLong(long0: number): okio.BufferedSink;
		public writeAll(source0: okio.Source): number;
		public getBuffer(): okio.Buffer;
		public write(bytes0: native.Array<number>): okio.BufferedSink;
		public writeShortLe(int0: number): okio.BufferedSink;
		public writeInt(int0: number): okio.BufferedSink;
		public writeIntLe(int0: number): okio.BufferedSink;
		public emitCompleteSegments(): okio.BufferedSink;
		public emit(): okio.BufferedSink;
		public writeUtf8CodePoint(int0: number): okio.BufferedSink;
		public writeByte(int0: number): okio.BufferedSink;
		public writeString(string0: string, charset1: java.nio.charset.Charset): okio.BufferedSink;
		/** @deprecated */
		public buffer(): okio.Buffer;
		public writeUtf8(string0: string, int1: number, int2: number): okio.BufferedSink;
		public writeString(string0: string, int1: number, int2: number, charset3: java.nio.charset.Charset): okio.BufferedSink;
		public flush(): void;
		public isOpen(): boolean;
		public write(byteString0: okio.ByteString): okio.BufferedSink;
		public write(byteString0: okio.ByteString, int1: number, int2: number): okio.BufferedSink;
		public writeHexadecimalUnsignedLong(long0: number): okio.BufferedSink;
		public outputStream(): java.io.OutputStream;
		public write(source0: okio.Source, long1: number): okio.BufferedSink;
		public writeShort(int0: number): okio.BufferedSink;
		public writeLongLe(long0: number): okio.BufferedSink;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export class BufferedSource extends java.lang.Object implements okio.Source, java.nio.channels.ReadableByteChannel {
		public static class: java.lang.Class<okio.BufferedSource>;
		/**
		 * Constructs a new instance of the okio.BufferedSource interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			buffer(): okio.Buffer;
			getBuffer(): okio.Buffer;
			exhausted(): boolean;
			require(long0: number): void;
			request(long0: number): boolean;
			readByte(): number;
			readShort(): number;
			readShortLe(): number;
			readInt(): number;
			readIntLe(): number;
			readLong(): number;
			readLongLe(): number;
			readDecimalLong(): number;
			readHexadecimalUnsignedLong(): number;
			skip(long0: number): void;
			readByteString(): okio.ByteString;
			readByteString(long0: number): okio.ByteString;
			select(options0: okio.Options): number;
			readByteArray(): native.Array<number>;
			readByteArray(long0: number): native.Array<number>;
			read(bytes0: native.Array<number>): number;
			readFully(bytes0: native.Array<number>): void;
			read(bytes0: native.Array<number>, int1: number, int2: number): number;
			readFully(buffer0: okio.Buffer, long1: number): void;
			readAll(sink0: okio.Sink): number;
			readUtf8(): string;
			readUtf8(long0: number): string;
			readUtf8Line(): string;
			readUtf8LineStrict(): string;
			readUtf8LineStrict(long0: number): string;
			readUtf8CodePoint(): number;
			readString(charset0: java.nio.charset.Charset): string;
			readString(long0: number, charset1: java.nio.charset.Charset): string;
			indexOf(byte0: number): number;
			indexOf(byte0: number, long1: number): number;
			indexOf(byte0: number, long1: number, long2: number): number;
			indexOf(byteString0: okio.ByteString): number;
			indexOf(byteString0: okio.ByteString, long1: number): number;
			indexOfElement(byteString0: okio.ByteString): number;
			indexOfElement(byteString0: okio.ByteString, long1: number): number;
			rangeEquals(long0: number, byteString1: okio.ByteString): boolean;
			rangeEquals(long0: number, byteString1: okio.ByteString, int2: number, int3: number): boolean;
			peek(): okio.BufferedSource;
			inputStream(): java.io.InputStream;
			read(buffer0: okio.Buffer, long1: number): number;
			timeout(): okio.Timeout;
			close(): void;
			read(byteBuffer0: java.nio.ByteBuffer): number;
			close(): void;
			isOpen(): boolean;
			close(): void;
			close(): void;
			close(): void;
			close(): void;
		});
		public constructor();
		public readAll(sink0: okio.Sink): number;
		public close(): void;
		public inputStream(): java.io.InputStream;
		public readIntLe(): number;
		public readUtf8CodePoint(): number;
		public readByte(): number;
		public readHexadecimalUnsignedLong(): number;
		public skip(long0: number): void;
		public rangeEquals(long0: number, byteString1: okio.ByteString, int2: number, int3: number): boolean;
		public read(byteBuffer0: java.nio.ByteBuffer): number;
		public readLong(): number;
		public readString(charset0: java.nio.charset.Charset): string;
		public readUtf8(): string;
		/** @deprecated */
		public buffer(): okio.Buffer;
		public request(long0: number): boolean;
		public readUtf8LineStrict(long0: number): string;
		public read(buffer0: okio.Buffer, long1: number): number;
		public indexOf(byteString0: okio.ByteString, long1: number): number;
		public indexOfElement(byteString0: okio.ByteString, long1: number): number;
		public readShort(): number;
		public indexOf(byte0: number): number;
		public peek(): okio.BufferedSource;
		public readShortLe(): number;
		public require(long0: number): void;
		public readUtf8Line(): string;
		public readByteString(): okio.ByteString;
		public rangeEquals(long0: number, byteString1: okio.ByteString): boolean;
		public readUtf8LineStrict(): string;
		public getBuffer(): okio.Buffer;
		public read(bytes0: native.Array<number>, int1: number, int2: number): number;
		public readString(long0: number, charset1: java.nio.charset.Charset): string;
		public indexOfElement(byteString0: okio.ByteString): number;
		public readFully(buffer0: okio.Buffer, long1: number): void;
		public readUtf8(long0: number): string;
		public readLongLe(): number;
		public readByteString(long0: number): okio.ByteString;
		public indexOf(byte0: number, long1: number, long2: number): number;
		public read(bytes0: native.Array<number>): number;
		public readDecimalLong(): number;
		public readByteArray(long0: number): native.Array<number>;
		public indexOf(byte0: number, long1: number): number;
		public readInt(): number;
		public isOpen(): boolean;
		public indexOf(byteString0: okio.ByteString): number;
		public readByteArray(): native.Array<number>;
		public exhausted(): boolean;
		public select(options0: okio.Options): number;
		public readFully(bytes0: native.Array<number>): void;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export class ByteString extends java.lang.Object {
		public static class: java.lang.Class<okio.ByteString>;
		public static EMPTY: okio.ByteString;
		public static Companion: okio.ByteString.Companion;
		public base64(): string;
		public static of(thistoByteString: java.nio.ByteBuffer): okio.ByteString;
		/** @deprecated */
		public getByte(index: number): number;
		public base64Url(): string;
		public digest(algorithm: string): okio.ByteString;
		public hmacSha256(key: okio.ByteString): okio.ByteString;
		public getHashCode(): number;
		public asByteBuffer(): java.nio.ByteBuffer;
		public indexOf(other: okio.ByteString, fromIndex: number): number;
		public write(buffer: okio.Buffer, offset: number, byteCount: number): void;
		public hmacSha1(key: okio.ByteString): okio.ByteString;
		public indexOf(other: native.Array<number>, fromIndex: number): number;
		public static of(data: native.Array<number>): okio.ByteString;
		public toString(): string;
		public static of(thistoByteString: native.Array<number>, offset: number, byteCount: number): okio.ByteString;
		public md5(): okio.ByteString;
		public startsWith(prefix: okio.ByteString): boolean;
		public internalGet(pos: number): number;
		public toAsciiLowercase(): okio.ByteString;
		public sha1(): okio.ByteString;
		public setHashCode(param0: number): void;
		public internalArray(): native.Array<number>;
		public static encodeUtf8(thisencodeUtf8: string): okio.ByteString;
		public rangeEquals(offset: number, other: native.Array<number>, otherOffset: number, byteCount: number): boolean;
		public endsWith(suffix: native.Array<number>): boolean;
		public lastIndexOf(other: native.Array<number>): number;
		/** @deprecated */
		public size(): number;
		public rangeEquals(offset: number, other: okio.ByteString, otherOffset: number, byteCount: number): boolean;
		public substring(): okio.ByteString;
		public sha512(): okio.ByteString;
		public setUtf8(param0: string): void;
		public size(): number;
		public hex(): string;
		public hashCode(): number;
		public static read(thisreadByteString: java.io.InputStream, byteCount: number): okio.ByteString;
		public toAsciiUppercase(): okio.ByteString;
		public getByte(index: number): number;
		public endsWith(suffix: okio.ByteString): boolean;
		public getSize(): number;
		public static decodeBase64(thisdecodeBase64: string): okio.ByteString;
		public lastIndexOf(other: okio.ByteString): number;
		public static encodeString(thisencode: string, charset: java.nio.charset.Charset): okio.ByteString;
		public static decodeHex(thisdecodeHex: string): okio.ByteString;
		public compareTo(other: okio.ByteString): number;
		public equals(other: any): boolean;
		public string(charset: java.nio.charset.Charset): string;
		public indexOf(other: native.Array<number>): number;
		public hmac(algorithm: string, key: okio.ByteString): okio.ByteString;
		public getUtf8(): string;
		public sha256(): okio.ByteString;
		public write(out: java.io.OutputStream): void;
		public lastIndexOf(other: okio.ByteString, fromIndex: number): number;
		public substring(beginIndex: number, endIndex: number): okio.ByteString;
		public constructor(data: native.Array<number>);
		public substring(beginIndex: number): okio.ByteString;
		public equals(obj: any): boolean;
		public startsWith(prefix: native.Array<number>): boolean;
		public utf8(): string;
		public getData(): native.Array<number>;
		public toByteArray(): native.Array<number>;
		public hmacSha512(key: okio.ByteString): okio.ByteString;
		public indexOf(other: okio.ByteString): number;
		public lastIndexOf(other: native.Array<number>, fromIndex: number): number;
	}
	export module ByteString {
		export class Companion extends java.lang.Object {
			public static class: java.lang.Class<okio.ByteString.Companion>;
			/** @deprecated */
			public of(array: native.Array<number>, offset: number, byteCount: number): okio.ByteString;
			/** @deprecated */
			public of(buffer: java.nio.ByteBuffer): okio.ByteString;
			/** @deprecated */
			public encodeString(string: string, charset: java.nio.charset.Charset): okio.ByteString;
			/** @deprecated */
			public read(inputstream: java.io.InputStream, byteCount: number): okio.ByteString;
			public decodeBase64(thisdecodeBase64: string): okio.ByteString;
			public of(data: native.Array<number>): okio.ByteString;
			public decodeHex(thisdecodeHex: string): okio.ByteString;
			public of(thistoByteString: java.nio.ByteBuffer): okio.ByteString;
			public encodeUtf8(thisencodeUtf8: string): okio.ByteString;
			/** @deprecated */
			public encodeUtf8(string: string): okio.ByteString;
			public encodeString(thisencode: string, charset: java.nio.charset.Charset): okio.ByteString;
			/** @deprecated */
			public decodeHex(string: string): okio.ByteString;
			/** @deprecated */
			public decodeBase64(string: string): okio.ByteString;
			public of(thistoByteString: native.Array<number>, offset: number, byteCount: number): okio.ByteString;
			public read(thisreadByteString: java.io.InputStream, byteCount: number): okio.ByteString;
		}
	}
}

declare module okio {
	export class CipherSink extends java.lang.Object implements okio.Sink {
		public static class: java.lang.Class<okio.CipherSink>;
		public close(): void;
		public getCipher(): javax.crypto.Cipher;
		public constructor(sink: okio.BufferedSink, cipher: javax.crypto.Cipher);
		public write(source: okio.Buffer, byteCount: number): void;
		public flush(): void;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export class CipherSource extends java.lang.Object implements okio.Source {
		public static class: java.lang.Class<okio.CipherSource>;
		public read(sink: okio.Buffer, byteCount: number): number;
		public close(): void;
		public getCipher(): javax.crypto.Cipher;
		public timeout(): okio.Timeout;
		public constructor(source: okio.BufferedSource, cipher: javax.crypto.Cipher);
	}
}

declare module okio {
	export class DeflaterSink extends java.lang.Object implements okio.Sink {
		public static class: java.lang.Class<okio.DeflaterSink>;
		public finishDeflate(): void;
		public constructor(sink: okio.BufferedSink, deflater: java.util.zip.Deflater);
		public close(): void;
		public toString(): string;
		public write(source: okio.Buffer, byteCount: number): void;
		public constructor(sink: okio.Sink, deflater: java.util.zip.Deflater);
		public flush(): void;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export class ExperimentalFileSystem extends java.lang.Object implements java.lang.annotation.Annotation {
		public static class: java.lang.Class<okio.ExperimentalFileSystem>;
		/**
		 * Constructs a new instance of the okio.ExperimentalFileSystem interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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

declare module okio {
	export abstract class ForwardingSink extends java.lang.Object implements okio.Sink {
		public static class: java.lang.Class<okio.ForwardingSink>;
		public constructor(delegate: okio.Sink);
		public close(): void;
		public delegate(): okio.Sink;
		/** @deprecated */
		public delegate(): okio.Sink;
		public toString(): string;
		public write(source: okio.Buffer, byteCount: number): void;
		public flush(): void;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export abstract class ForwardingSource extends java.lang.Object implements okio.Source {
		public static class: java.lang.Class<okio.ForwardingSource>;
		public read(sink: okio.Buffer, byteCount: number): number;
		public constructor(delegate: okio.Source);
		public close(): void;
		public delegate(): okio.Source;
		/** @deprecated */
		public delegate(): okio.Source;
		public toString(): string;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export class ForwardingTimeout extends okio.Timeout {
		public static class: java.lang.Class<okio.ForwardingTimeout>;
		public setDelegate(delegate: okio.Timeout): okio.ForwardingTimeout;
		public throwIfReached(): void;
		public constructor();
		public clearDeadline(): okio.Timeout;
		public hasDeadline(): boolean;
		public delegate(): okio.Timeout;
		public timeoutNanos(): number;
		public constructor(delegate: okio.Timeout);
		public deadlineNanoTime(): number;
		public clearTimeout(): okio.Timeout;
		public deadlineNanoTime(deadlineNanoTime: number): okio.Timeout;
		public timeout(timeout: number, unit: java.util.concurrent.TimeUnit): okio.Timeout;
	}
}

declare module okio {
	export class GzipSink extends java.lang.Object implements okio.Sink {
		public static class: java.lang.Class<okio.GzipSink>;
		public deflater(): java.util.zip.Deflater;
		public close(): void;
		/** @deprecated */
		public deflater(): java.util.zip.Deflater;
		public constructor(sink: okio.Sink);
		public write(source: okio.Buffer, byteCount: number): void;
		public flush(): void;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export class GzipSource extends java.lang.Object implements okio.Source {
		public static class: java.lang.Class<okio.GzipSource>;
		public read(sink: okio.Buffer, byteCount: number): number;
		public constructor(source: okio.Source);
		public close(): void;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export class HashingSink extends okio.ForwardingSink implements okio.Sink {
		public static class: java.lang.Class<okio.HashingSink>;
		public static Companion: okio.HashingSink.Companion;
		public constructor(delegate: okio.Sink);
		public static md5(sink: okio.Sink): okio.HashingSink;
		public close(): void;
		public static sha512(sink: okio.Sink): okio.HashingSink;
		public static hmacSha256(sink: okio.Sink, key: okio.ByteString): okio.HashingSink;
		public static hmacSha512(sink: okio.Sink, key: okio.ByteString): okio.HashingSink;
		public static sha256(sink: okio.Sink): okio.HashingSink;
		/** @deprecated */
		public hash(): okio.ByteString;
		public write(source: okio.Buffer, byteCount: number): void;
		public constructor(sink: okio.Sink, mac: javax.crypto.Mac);
		public flush(): void;
		public constructor(sink: okio.Sink, digest: java.security.MessageDigest);
		public static sha1(sink: okio.Sink): okio.HashingSink;
		public hash(): okio.ByteString;
		public constructor(sink: okio.Sink, algorithm: string);
		public constructor(sink: okio.Sink, key: okio.ByteString, algorithm: string);
		public static hmacSha1(sink: okio.Sink, key: okio.ByteString): okio.HashingSink;
		public timeout(): okio.Timeout;
	}
	export module HashingSink {
		export class Companion extends java.lang.Object {
			public static class: java.lang.Class<okio.HashingSink.Companion>;
			public hmacSha512(sink: okio.Sink, key: okio.ByteString): okio.HashingSink;
			public md5(sink: okio.Sink): okio.HashingSink;
			public sha256(sink: okio.Sink): okio.HashingSink;
			public hmacSha256(sink: okio.Sink, key: okio.ByteString): okio.HashingSink;
			public sha1(sink: okio.Sink): okio.HashingSink;
			public hmacSha1(sink: okio.Sink, key: okio.ByteString): okio.HashingSink;
			public sha512(sink: okio.Sink): okio.HashingSink;
		}
	}
}

declare module okio {
	export class HashingSource extends okio.ForwardingSource implements okio.Source {
		public static class: java.lang.Class<okio.HashingSource>;
		public static Companion: okio.HashingSource.Companion;
		public constructor(delegate: okio.Source);
		public close(): void;
		public constructor(source: okio.Source, algorithm: string);
		public static hmacSha1(source: okio.Source, key: okio.ByteString): okio.HashingSource;
		public static hmacSha256(source: okio.Source, key: okio.ByteString): okio.HashingSource;
		public constructor(source: okio.Source, digest: java.security.MessageDigest);
		public constructor(source: okio.Source, key: okio.ByteString, algorithm: string);
		/** @deprecated */
		public hash(): okio.ByteString;
		public static hmacSha512(source: okio.Source, key: okio.ByteString): okio.HashingSource;
		public read(sink: okio.Buffer, byteCount: number): number;
		public static sha512(source: okio.Source): okio.HashingSource;
		public static sha1(source: okio.Source): okio.HashingSource;
		public static sha256(source: okio.Source): okio.HashingSource;
		public constructor(source: okio.Source, mac: javax.crypto.Mac);
		public hash(): okio.ByteString;
		public static md5(source: okio.Source): okio.HashingSource;
		public timeout(): okio.Timeout;
	}
	export module HashingSource {
		export class Companion extends java.lang.Object {
			public static class: java.lang.Class<okio.HashingSource.Companion>;
			public sha512(source: okio.Source): okio.HashingSource;
			public hmacSha1(source: okio.Source, key: okio.ByteString): okio.HashingSource;
			public md5(source: okio.Source): okio.HashingSource;
			public sha1(source: okio.Source): okio.HashingSource;
			public sha256(source: okio.Source): okio.HashingSource;
			public hmacSha256(source: okio.Source, key: okio.ByteString): okio.HashingSource;
			public hmacSha512(source: okio.Source, key: okio.ByteString): okio.HashingSource;
		}
	}
}

declare module okio {
	export class InflaterSource extends java.lang.Object implements okio.Source {
		public static class: java.lang.Class<okio.InflaterSource>;
		public read(sink: okio.Buffer, byteCount: number): number;
		public close(): void;
		public refill(): boolean;
		public constructor(source: okio.BufferedSource, inflater: java.util.zip.Inflater);
		public readOrInflate(sink: okio.Buffer, byteCount: number): number;
		public timeout(): okio.Timeout;
		public constructor(source: okio.Source, inflater: java.util.zip.Inflater);
	}
}

declare module okio {
	export class InputStreamSource extends java.lang.Object implements okio.Source {
		public static class: java.lang.Class<okio.InputStreamSource>;
		public read(sink: okio.Buffer, byteCount: number): number;
		public close(): void;
		public constructor(input: java.io.InputStream, timeout: okio.Timeout);
		public toString(): string;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export class Okio extends java.lang.Object {
		public static class: java.lang.Class<okio.Okio>;
		public static hashingSource(thishashingSource: okio.Source, mac: javax.crypto.Mac): okio.HashingSource;
		public static cipherSource(thiscipherSource: okio.Source, cipher: javax.crypto.Cipher): okio.CipherSource;
		public static source(thissource: java.io.InputStream): okio.Source;
		public static blackhole(): okio.Sink;
		public static sink(thissink: java.io.File, append: boolean): okio.Sink;
		public static buffer(thisbuffer: okio.Sink): okio.BufferedSink;
		public static isAndroidGetsocknameError(thisisAndroidGetsocknameError: java.lang.AssertionError): boolean;
		public static use(thisuse: java.io.Closeable, block: kotlin.jvm.functions.Function1<any,any>): any;
		public static hashingSource(thishashingSource: okio.Source, digest: java.security.MessageDigest): okio.HashingSource;
		public static sink(thissink: java.io.File): okio.Sink;
		public static buffer(thisbuffer: okio.Source): okio.BufferedSource;
		public static sink(thissink: java.nio.file.Path, options: native.Array<java.nio.file.OpenOption>): okio.Sink;
		public static sink(thissink: java.io.OutputStream): okio.Sink;
		public static source(thissource: java.nio.file.Path, options: native.Array<java.nio.file.OpenOption>): okio.Source;
		public static cipherSink(thiscipherSink: okio.Sink, cipher: javax.crypto.Cipher): okio.CipherSink;
		public static source(thissource: java.net.Socket): okio.Source;
		public static sink(thissink: java.net.Socket): okio.Sink;
		public static hashingSink(thishashingSink: okio.Sink, digest: java.security.MessageDigest): okio.HashingSink;
		public static source(thissource: java.io.File): okio.Source;
		public static appendingSink(thisappendingSink: java.io.File): okio.Sink;
		public static hashingSink(thishashingSink: okio.Sink, mac: javax.crypto.Mac): okio.HashingSink;
	}
}

declare module okio {
	export class Okio__JvmOkioKt extends java.lang.Object {
		public static class: java.lang.Class<okio.Okio__JvmOkioKt>;
		public static hashingSource(thishashingSource: okio.Source, mac: javax.crypto.Mac): okio.HashingSource;
		public static cipherSource(thiscipherSource: okio.Source, cipher: javax.crypto.Cipher): okio.CipherSource;
		public static source(thissource: java.io.InputStream): okio.Source;
		public static sink(thissink: java.io.File, append: boolean): okio.Sink;
		public static isAndroidGetsocknameError(thisisAndroidGetsocknameError: java.lang.AssertionError): boolean;
		public static sink(thissink: java.io.File): okio.Sink;
		public static hashingSource(thishashingSource: okio.Source, digest: java.security.MessageDigest): okio.HashingSource;
		public static sink(thissink: java.nio.file.Path, options: native.Array<java.nio.file.OpenOption>): okio.Sink;
		public static sink(thissink: java.io.OutputStream): okio.Sink;
		public static source(thissource: java.nio.file.Path, options: native.Array<java.nio.file.OpenOption>): okio.Source;
		public static source(thissource: java.net.Socket): okio.Source;
		public static cipherSink(thiscipherSink: okio.Sink, cipher: javax.crypto.Cipher): okio.CipherSink;
		public static sink(thissink: java.net.Socket): okio.Sink;
		public static hashingSink(thishashingSink: okio.Sink, digest: java.security.MessageDigest): okio.HashingSink;
		public static source(thissource: java.io.File): okio.Source;
		public static appendingSink(thisappendingSink: java.io.File): okio.Sink;
		public static hashingSink(thishashingSink: okio.Sink, mac: javax.crypto.Mac): okio.HashingSink;
	}
}

declare module okio {
	export class Okio__OkioKt extends java.lang.Object {
		public static class: java.lang.Class<okio.Okio__OkioKt>;
		public static blackhole(): okio.Sink;
		public static buffer(thisbuffer: okio.Sink): okio.BufferedSink;
		public static use(thisuse: java.io.Closeable, block: kotlin.jvm.functions.Function1<any,any>): any;
		public static buffer(thisbuffer: okio.Source): okio.BufferedSource;
	}
}

declare module okio {
	export class Options extends kotlin.collections.AbstractList<okio.ByteString> implements java.util.RandomAccess  {
		public static class: java.lang.Class<okio.Options>;
		public static Companion: okio.Options.Companion;
		public add(int0: number, object1: any): void;
		public toArray(): native.Array<any>;
		public retainAll(collection0: java.util.Collection<any>): boolean;
		public replaceAll(operator: any /* any*/): void;
		public lastIndexOf(element: any): number;
		public getTrie(): native.Array<number>;
		public iterator(): java.util.Iterator<any>;
		public remove(object0: any): boolean;
		public sort(c: java.util.Comparator<any>): void;
		public subList(fromIndex: number, toIndex: number): java.util.List<any>;
		public stream(): java.util.stream.Stream<any>;
		public size(): number;
		public hashCode(): number;
		public isEmpty(): boolean;
		public set(int0: number, object1: any): any;
		public static of(byteStrings: native.Array<okio.ByteString>): okio.Options;
		public getSize(): number;
		public remove(int0: number): any;
		public containsAll(elements: java.util.Collection<any>): boolean;
		public equals(other: any): boolean;
		public contains(byteString0: okio.ByteString): boolean;
		public addAll(int0: number, collection1: java.util.Collection<any>): boolean;
		public removeAll(collection0: java.util.Collection<any>): boolean;
		public listIterator(index: number): java.util.ListIterator<any>;
		public addAll(collection0: java.util.Collection<any>): boolean;
		public indexOf(byteString0: okio.ByteString): number;
		public get(int0: number): any;
		public indexOf(element: any): number;
		public lastIndexOf(byteString0: okio.ByteString): number;
		public add(object0: any): boolean;
		public listIterator(): java.util.ListIterator<any>;
		public spliterator(): java.util.Spliterator<any>;
		public getByteStrings(): native.Array<okio.ByteString>;
		public toArray(array: native.Array<any>): native.Array<any>;
		public clear(): void;
		public get(index: number): okio.ByteString;
		public parallelStream(): java.util.stream.Stream<any>;
		public contains(element: any): boolean;
		public removeIf(filter: any /* any*/): boolean;
	}
	export module Options {
		export class Companion extends java.lang.Object {
			public static class: java.lang.Class<okio.Options.Companion>;
			public of(byteStrings: native.Array<okio.ByteString>): okio.Options;
		}
	}
}

declare module okio {
	export class OutputStreamSink extends java.lang.Object implements okio.Sink {
		public static class: java.lang.Class<okio.OutputStreamSink>;
		public close(): void;
		public constructor(out: java.io.OutputStream, timeout: okio.Timeout);
		public toString(): string;
		public write(source: okio.Buffer, byteCount: number): void;
		public flush(): void;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export class PeekSource extends java.lang.Object implements okio.Source {
		public static class: java.lang.Class<okio.PeekSource>;
		public read(sink: okio.Buffer, byteCount: number): number;
		public close(): void;
		public timeout(): okio.Timeout;
		public constructor(upstream: okio.BufferedSource);
	}
}

declare module okio {
	export class Pipe extends java.lang.Object {
		public static class: java.lang.Class<okio.Pipe>;
		public setSinkClosed(param0: boolean): void;
		public getSourceClosed(): boolean;
		public sink(): okio.Sink;
		/** @deprecated */
		public sink(): okio.Sink;
		public setCanceled(param0: boolean): void;
		public getSinkClosed(): boolean;
		public source(): okio.Source;
		public fold(sink: okio.Sink): void;
		public cancel(): void;
		/** @deprecated */
		public source(): okio.Source;
		public getBuffer(): okio.Buffer;
		public getFoldedSink(): okio.Sink;
		public getCanceled(): boolean;
		public setFoldedSink(param0: okio.Sink): void;
		public getMaxBufferSize(): number;
		public constructor(maxBufferSize: number);
		public setSourceClosed(param0: boolean): void;
	}
}

declare module okio {
	export class RealBufferedSink extends java.lang.Object implements okio.BufferedSink {
		public static class: java.lang.Class<okio.RealBufferedSink>;
		public bufferField: okio.Buffer;
		public closed: boolean;
		public sink: okio.Sink;
		public writeString(string: string, charset: java.nio.charset.Charset): okio.BufferedSink;
		public writeUtf8(string: string): okio.BufferedSink;
		public close(): void;
		public writeHexadecimalUnsignedLong(v: number): okio.BufferedSink;
		public constructor(sink: okio.Sink);
		public getBuffer(): okio.Buffer;
		public writeInt(i: number): okio.BufferedSink;
		public writeString(string: string, beginIndex: number, endIndex: number, charset: java.nio.charset.Charset): okio.BufferedSink;
		public emitCompleteSegments(): okio.BufferedSink;
		public emit(): okio.BufferedSink;
		public writeShortLe(s: number): okio.BufferedSink;
		public writeIntLe(i: number): okio.BufferedSink;
		public writeLong(v: number): okio.BufferedSink;
		public writeUtf8(string: string, beginIndex: number, endIndex: number): okio.BufferedSink;
		public write(source: native.Array<number>): okio.BufferedSink;
		/** @deprecated */
		public buffer(): okio.Buffer;
		public writeLongLe(v: number): okio.BufferedSink;
		public writeAll(source: okio.Source): number;
		public write(source: native.Array<number>, offset: number, byteCount: number): okio.BufferedSink;
		public write(byteString: okio.ByteString): okio.BufferedSink;
		public toString(): string;
		public write(byteString: okio.ByteString, offset: number, byteCount: number): okio.BufferedSink;
		public write(source: okio.Buffer, byteCount: number): void;
		public flush(): void;
		public isOpen(): boolean;
		public writeByte(b: number): okio.BufferedSink;
		public writeDecimalLong(v: number): okio.BufferedSink;
		public write(source: java.nio.ByteBuffer): number;
		public buffer(): okio.Buffer;
		public outputStream(): java.io.OutputStream;
		public writeUtf8CodePoint(codePoint: number): okio.BufferedSink;
		public write(source: okio.Source, byteCount: number): okio.BufferedSink;
		public writeShort(s: number): okio.BufferedSink;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export class RealBufferedSource extends java.lang.Object implements okio.BufferedSource {
		public static class: java.lang.Class<okio.RealBufferedSource>;
		public bufferField: okio.Buffer;
		public closed: boolean;
		public source: okio.Source;
		public require(byteCount: number): void;
		public readUtf8(byteCount: number): string;
		public indexOf(b: number, fromIndex: number, toIndex: number): number;
		public close(): void;
		public inputStream(): java.io.InputStream;
		public readIntLe(): number;
		public request(byteCount: number): boolean;
		public readUtf8CodePoint(): number;
		public read(sink: okio.Buffer, byteCount: number): number;
		public rangeEquals(offset: number, bytes: okio.ByteString, bytesOffset: number, byteCount: number): boolean;
		public readByte(): number;
		public read(sink: native.Array<number>, offset: number, byteCount: number): number;
		public read(sink: native.Array<number>): number;
		public readHexadecimalUnsignedLong(): number;
		public select(options: okio.Options): number;
		public indexOfElement(targetBytes: okio.ByteString): number;
		public readUtf8LineStrict(limit: number): string;
		public readLong(): number;
		public constructor(source: okio.Source);
		public readUtf8(): string;
		public indexOf(b: number, fromIndex: number): number;
		/** @deprecated */
		public buffer(): okio.Buffer;
		public toString(): string;
		public indexOfElement(targetBytes: okio.ByteString, fromIndex: number): number;
		public read(sink: java.nio.ByteBuffer): number;
		public readString(charset: java.nio.charset.Charset): string;
		public indexOf(bytes: okio.ByteString): number;
		public rangeEquals(offset: number, bytes: okio.ByteString): boolean;
		public readShort(): number;
		public peek(): okio.BufferedSource;
		public readShortLe(): number;
		public readUtf8Line(): string;
		public readByteString(): okio.ByteString;
		public readUtf8LineStrict(): string;
		public readFully(sink: native.Array<number>): void;
		public getBuffer(): okio.Buffer;
		public readByteArray(byteCount: number): native.Array<number>;
		public skip(byteCount: number): void;
		public readLongLe(): number;
		public indexOf(b: number): number;
		public indexOf(bytes: okio.ByteString, fromIndex: number): number;
		public readFully(sink: okio.Buffer, byteCount: number): void;
		public readString(byteCount: number, charset: java.nio.charset.Charset): string;
		public readDecimalLong(): number;
		public readInt(): number;
		public isOpen(): boolean;
		public readByteString(byteCount: number): okio.ByteString;
		public readByteArray(): native.Array<number>;
		public readAll(sink: okio.Sink): number;
		public exhausted(): boolean;
		public buffer(): okio.Buffer;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export class Segment extends java.lang.Object {
		public static class: java.lang.Class<okio.Segment>;
		public data: native.Array<number>;
		public pos: number;
		public limit: number;
		public shared: boolean;
		public owner: boolean;
		public next: okio.Segment;
		public prev: okio.Segment;
		public static SIZE: number;
		public static SHARE_MINIMUM: number;
		public static Companion: okio.Segment.Companion;
		public writeTo(sink: okio.Segment, byteCount: number): void;
		public constructor();
		public unsharedCopy(): okio.Segment;
		public constructor(data: native.Array<number>, pos: number, limit: number, shared: boolean, owner: boolean);
		public compact(): void;
		public pop(): okio.Segment;
		public split(byteCount: number): okio.Segment;
		public sharedCopy(): okio.Segment;
		public push(segment: okio.Segment): okio.Segment;
	}
	export module Segment {
		export class Companion extends java.lang.Object {
			public static class: java.lang.Class<okio.Segment.Companion>;
		}
	}
}

declare module okio {
	export class SegmentPool extends java.lang.Object {
		public static class: java.lang.Class<okio.SegmentPool>;
		public static INSTANCE: okio.SegmentPool;
		public getByteCount(): number;
		public getMAX_SIZE(): number;
		public static recycle(segment: okio.Segment): void;
		public static take(): okio.Segment;
	}
}

declare module okio {
	export class SegmentedByteString extends okio.ByteString {
		public static class: java.lang.Class<okio.SegmentedByteString>;
		public base64(): string;
		public rangeEquals(offset: number, other: okio.ByteString, otherOffset: number, byteCount: number): boolean;
		public substring(): okio.ByteString;
		public base64Url(): string;
		public constructor(segments: native.Array<native.Array<number>>, directory: native.Array<number>);
		public digest(algorithm: string): okio.ByteString;
		public asByteBuffer(): java.nio.ByteBuffer;
		public hex(): string;
		public indexOf(other: okio.ByteString, fromIndex: number): number;
		public hashCode(): number;
		public toAsciiUppercase(): okio.ByteString;
		public getSize(): number;
		public lastIndexOf(other: okio.ByteString): number;
		public write(buffer: okio.Buffer, offset: number, byteCount: number): void;
		public equals(other: any): boolean;
		public string(charset: java.nio.charset.Charset): string;
		public indexOf(other: native.Array<number>, fromIndex: number): number;
		public indexOf(other: native.Array<number>): number;
		public getSegments(): native.Array<native.Array<number>>;
		public hmac(algorithm: string, key: okio.ByteString): okio.ByteString;
		public write(out: java.io.OutputStream): void;
		public toString(): string;
		public lastIndexOf(other: okio.ByteString, fromIndex: number): number;
		public substring(beginIndex: number, endIndex: number): okio.ByteString;
		public internalGet(pos: number): number;
		public toAsciiLowercase(): okio.ByteString;
		public constructor(data: native.Array<number>);
		public substring(beginIndex: number): okio.ByteString;
		public internalArray(): native.Array<number>;
		public getDirectory(): native.Array<number>;
		public rangeEquals(offset: number, other: native.Array<number>, otherOffset: number, byteCount: number): boolean;
		public lastIndexOf(other: native.Array<number>): number;
		public toByteArray(): native.Array<number>;
		public indexOf(other: okio.ByteString): number;
		public lastIndexOf(other: native.Array<number>, fromIndex: number): number;
	}
}

declare module okio {
	export class Sink extends java.lang.Object implements java.io.Closeable, java.io.Flushable {
		public static class: java.lang.Class<okio.Sink>;
		/**
		 * Constructs a new instance of the okio.Sink interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			write(buffer0: okio.Buffer, long1: number): void;
			flush(): void;
			timeout(): okio.Timeout;
			close(): void;
			close(): void;
			flush(): void;
			close(): void;
		});
		public constructor();
		public write(buffer0: okio.Buffer, long1: number): void;
		public close(): void;
		public flush(): void;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export class SocketAsyncTimeout extends okio.AsyncTimeout {
		public static class: java.lang.Class<okio.SocketAsyncTimeout>;
		public constructor();
		public constructor(socket: java.net.Socket);
		public newTimeoutException(cause: java.io.IOException): java.io.IOException;
		public timedOut(): void;
	}
}

declare module okio {
	export class Source extends java.lang.Object implements java.io.Closeable {
		public static class: java.lang.Class<okio.Source>;
		/**
		 * Constructs a new instance of the okio.Source interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			read(buffer0: okio.Buffer, long1: number): number;
			timeout(): okio.Timeout;
			close(): void;
			close(): void;
			close(): void;
		});
		public constructor();
		public close(): void;
		public read(buffer0: okio.Buffer, long1: number): number;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export class Throttler extends java.lang.Object {
		public static class: java.lang.Class<okio.Throttler>;
		public constructor();
		public take(byteCount: number): number;
		public byteCountOrWaitNanos(now: number, byteCount: number): number;
		public sink(sink: okio.Sink): okio.Sink;
		public constructor(allocatedUntil: number);
		public bytesPerSecond(bytesPerSecond: number, waitByteCount: number): void;
		public bytesPerSecond(bytesPerSecond: number): void;
		public bytesPerSecond(bytesPerSecond: number, waitByteCount: number, maxByteCount: number): void;
		public source(source: okio.Source): okio.Source;
	}
}

declare module okio {
	export class Timeout extends java.lang.Object {
		public static class: java.lang.Class<okio.Timeout>;
		public static NONE: okio.Timeout;
		public static Companion: okio.Timeout.Companion;
		public throwIfReached(): void;
		public waitUntilNotified(monitor: any): void;
		public constructor();
		public clearDeadline(): okio.Timeout;
		public hasDeadline(): boolean;
		public deadline(duration: number, unit: java.util.concurrent.TimeUnit): okio.Timeout;
		public timeoutNanos(): number;
		public deadlineNanoTime(): number;
		public intersectWith(other: okio.Timeout, block: kotlin.jvm.functions.Function0<kotlin.Unit>): void;
		public clearTimeout(): okio.Timeout;
		public deadlineNanoTime(deadlineNanoTime: number): okio.Timeout;
		public timeout(timeout: number, unit: java.util.concurrent.TimeUnit): okio.Timeout;
	}
	export module Timeout {
		export class Companion extends java.lang.Object {
			public static class: java.lang.Class<okio.Timeout.Companion>;
			public minTimeout(aNanos: number, bNanos: number): number;
		}
	}
}

declare module okio {
	export class Utf8 extends java.lang.Object {
		public static class: java.lang.Class<okio.Utf8>;
		public static REPLACEMENT_BYTE: number;
		public static REPLACEMENT_CHARACTER: string;
		public static REPLACEMENT_CODE_POINT: number;
		public static HIGH_SURROGATE_HEADER: number;
		public static LOG_SURROGATE_HEADER: number;
		public static MASK_2BYTES: number;
		public static MASK_3BYTES: number;
		public static MASK_4BYTES: number;
		public static size(thisutf8Size: string, beginIndex: number, endIndex: number): number;
		public static process2Utf8Bytes(thisprocess2Utf8Bytes: native.Array<number>, beginIndex: number, endIndex: number, yield3: kotlin.jvm.functions.Function1<any,kotlin.Unit>): number;
		public static isUtf8Continuation(byte: number): boolean;
		public static size(thisutf8Size: string): number;
		public static processUtf16Chars(thisprocessUtf16Chars: native.Array<number>, beginIndex: number, endIndex: number, yield3: kotlin.jvm.functions.Function1<any,kotlin.Unit>): void;
		public static isIsoControl(codePoint: number): boolean;
		public static size(thisutf8Size: string, beginIndex: number): number;
		public static processUtf8Bytes(thisprocessUtf8Bytes: string, beginIndex: number, endIndex: number, yield3: kotlin.jvm.functions.Function1<any,kotlin.Unit>): void;
		public static processUtf8CodePoints(thisprocessUtf8CodePoints: native.Array<number>, beginIndex: number, endIndex: number, yield3: kotlin.jvm.functions.Function1<any,kotlin.Unit>): void;
		public static process4Utf8Bytes(thisprocess4Utf8Bytes: native.Array<number>, beginIndex: number, endIndex: number, yield3: kotlin.jvm.functions.Function1<any,kotlin.Unit>): number;
		public static process3Utf8Bytes(thisprocess3Utf8Bytes: native.Array<number>, beginIndex: number, endIndex: number, yield3: kotlin.jvm.functions.Function1<any,kotlin.Unit>): number;
	}
}

declare module okio {
	export module internal {
		export class BufferKt extends java.lang.Object {
			public static class: java.lang.Class<okio.internal.BufferKt>;
			public static SEGMENTING_THRESHOLD: number;
			public static OVERFLOW_ZONE: number;
			public static OVERFLOW_DIGIT_START: number;
			public static commonWrite(thiscommonWrite: okio.Buffer, source: okio.Buffer, byteCount: number): void;
			public static commonReadUtf8Line(thiscommonReadUtf8Line: okio.Buffer): string;
			public static commonGet(thiscommonGet: okio.Buffer, pos: number): number;
			public static selectPrefix(thisselectPrefix: okio.Buffer, options: okio.Options, selectTruncated: boolean): number;
			public static commonRangeEquals(thiscommonRangeEquals: okio.Buffer, offset: number, bytes: okio.ByteString, bytesOffset: number, byteCount: number): boolean;
			public static commonReadHexadecimalUnsignedLong(thiscommonReadHexadecimalUnsignedLong: okio.Buffer): number;
			public static getHEX_DIGIT_BYTES(): native.Array<number>;
			public static commonReadAll(thiscommonReadAll: okio.Buffer, sink: okio.Sink): number;
			public static commonReadUnsafe(thiscommonReadUnsafe: okio.Buffer, unsafeCursor: okio.Buffer.UnsafeCursor): okio.Buffer.UnsafeCursor;
			public static commonWriteShort(thiscommonWriteShort: okio.Buffer, s: number): okio.Buffer;
			public static commonRead(thiscommonRead: okio.Buffer, sink: okio.Buffer, byteCount: number): number;
			public static commonSnapshot(thiscommonSnapshot: okio.Buffer, byteCount: number): okio.ByteString;
			public static commonWriteUtf8(thiscommonWriteUtf8: okio.Buffer, string: string, beginIndex: number, endIndex: number): okio.Buffer;
			public static commonClear(thiscommonClear: okio.Buffer): void;
			public static commonWriteHexadecimalUnsignedLong(thiscommonWriteHexadecimalUnsignedLong: okio.Buffer, v: number): okio.Buffer;
			public static commonResizeBuffer(thiscommonResizeBuffer: okio.Buffer.UnsafeCursor, newSize: number): number;
			public static commonWritableSegment(thiscommonWritableSegment: okio.Buffer, minimumCapacity: number): okio.Segment;
			public static commonSnapshot(thiscommonSnapshot: okio.Buffer): okio.ByteString;
			public static commonReadShort(thiscommonReadShort: okio.Buffer): number;
			public static commonRead(thiscommonRead: okio.Buffer, sink: native.Array<number>): number;
			public static commonReadByteString(thiscommonReadByteString: okio.Buffer, byteCount: number): okio.ByteString;
			public static commonSelect(thiscommonSelect: okio.Buffer, options: okio.Options): number;
			public static commonWriteInt(thiscommonWriteInt: okio.Buffer, i: number): okio.Buffer;
			public static commonReadUtf8(thiscommonReadUtf8: okio.Buffer, byteCount: number): string;
			public static commonReadAndWriteUnsafe(thiscommonReadAndWriteUnsafe: okio.Buffer, unsafeCursor: okio.Buffer.UnsafeCursor): okio.Buffer.UnsafeCursor;
			public static commonSkip(thiscommonSkip: okio.Buffer, byteCount: number): void;
			public static commonCompleteSegmentByteCount(thiscommonCompleteSegmentByteCount: okio.Buffer): number;
			public static commonWrite(thiscommonWrite: okio.Buffer, source: native.Array<number>): okio.Buffer;
			public static seek(thisseek: okio.Buffer, fromIndex: number, lambda: kotlin.jvm.functions.Function2<any,any,any>): any;
			public static commonIndexOf(thiscommonIndexOf: okio.Buffer, bytes: okio.ByteString, fromIndex: number): number;
			public static commonHashCode(thiscommonHashCode: okio.Buffer): number;
			public static commonReadInt(thiscommonReadInt: okio.Buffer): number;
			public static commonWriteByte(thiscommonWriteByte: okio.Buffer, b: number): okio.Buffer;
			public static commonReadByteArray(thiscommonReadByteArray: okio.Buffer, byteCount: number): native.Array<number>;
			public static commonReadUtf8LineStrict(thiscommonReadUtf8LineStrict: okio.Buffer, limit: number): string;
			public static commonWriteAll(thiscommonWriteAll: okio.Buffer, source: okio.Source): number;
			public static commonIndexOf(thiscommonIndexOf: okio.Buffer, b: number, fromIndex: number, toIndex: number): number;
			public static commonWriteDecimalLong(thiscommonWriteDecimalLong: okio.Buffer, v: number): okio.Buffer;
			public static commonCopy(thiscommonCopy: okio.Buffer): okio.Buffer;
			public static commonReadLong(thiscommonReadLong: okio.Buffer): number;
			public static commonClose(thiscommonClose: okio.Buffer.UnsafeCursor): void;
			public static commonWrite(thiscommonWrite: okio.Buffer, source: native.Array<number>, offset: number, byteCount: number): okio.Buffer;
			public static commonReadDecimalLong(thiscommonReadDecimalLong: okio.Buffer): number;
			public static commonWriteLong(thiscommonWriteLong: okio.Buffer, v: number): okio.Buffer;
			public static readUtf8Line(thisreadUtf8Line: okio.Buffer, newline: number): string;
			public static commonReadFully(thiscommonReadFully: okio.Buffer, sink: native.Array<number>): void;
			public static commonWrite(thiscommonWrite: okio.Buffer, byteString: okio.ByteString, offset: number, byteCount: number): okio.Buffer;
			public static commonWriteUtf8CodePoint(thiscommonWriteUtf8CodePoint: okio.Buffer, codePoint: number): okio.Buffer;
			public static rangeEquals(segment: okio.Segment, segmentPos: number, bytes: native.Array<number>, bytesOffset: number, bytesLimit: number): boolean;
			public static commonReadUtf8CodePoint(thiscommonReadUtf8CodePoint: okio.Buffer): number;
			public static commonReadByteArray(thiscommonReadByteArray: okio.Buffer): native.Array<number>;
			public static commonReadByte(thiscommonReadByte: okio.Buffer): number;
			public static commonEquals(thiscommonEquals: okio.Buffer, other: any): boolean;
			public static commonExpandBuffer(thiscommonExpandBuffer: okio.Buffer.UnsafeCursor, minByteCount: number): number;
			public static commonRead(thiscommonRead: okio.Buffer, sink: native.Array<number>, offset: number, byteCount: number): number;
			public static commonSeek(thiscommonSeek: okio.Buffer.UnsafeCursor, offset: number): number;
			public static commonReadFully(thiscommonReadFully: okio.Buffer, sink: okio.Buffer, byteCount: number): void;
			public static commonIndexOfElement(thiscommonIndexOfElement: okio.Buffer, targetBytes: okio.ByteString, fromIndex: number): number;
			public static commonCopyTo(thiscommonCopyTo: okio.Buffer, out: okio.Buffer, offset: number, byteCount: number): okio.Buffer;
			public static commonReadByteString(thiscommonReadByteString: okio.Buffer): okio.ByteString;
			public static commonWrite(thiscommonWrite: okio.Buffer, source: okio.Source, byteCount: number): okio.Buffer;
			public static commonNext(thiscommonNext: okio.Buffer.UnsafeCursor): number;
		}
	}
}

declare module okio {
	export module internal {
		export class ByteStringKt extends java.lang.Object {
			public static class: java.lang.Class<okio.internal.ByteStringKt>;
			public static commonStartsWith(thiscommonStartsWith: okio.ByteString, prefix: okio.ByteString): boolean;
			public static commonEndsWith(thiscommonEndsWith: okio.ByteString, suffix: native.Array<number>): boolean;
			public static commonEquals(thiscommonEquals: okio.ByteString, other: any): boolean;
			public static commonOf(data: native.Array<number>): okio.ByteString;
			public static commonToAsciiUppercase(thiscommonToAsciiUppercase: okio.ByteString): okio.ByteString;
			public static commonLastIndexOf(thiscommonLastIndexOf: okio.ByteString, other: native.Array<number>, fromIndex: number): number;
			public static commonHashCode(thiscommonHashCode: okio.ByteString): number;
			public static commonStartsWith(thiscommonStartsWith: okio.ByteString, prefix: native.Array<number>): boolean;
			public static commonToByteString(thiscommonToByteString: native.Array<number>, offset: number, byteCount: number): okio.ByteString;
			public static commonDecodeBase64(thiscommonDecodeBase64: string): okio.ByteString;
			public static commonGetSize(thiscommonGetSize: okio.ByteString): number;
			public static commonRangeEquals(thiscommonRangeEquals: okio.ByteString, offset: number, other: native.Array<number>, otherOffset: number, byteCount: number): boolean;
			public static commonToByteArray(thiscommonToByteArray: okio.ByteString): native.Array<number>;
			public static commonToString(thiscommonToString: okio.ByteString): string;
			public static commonBase64Url(thiscommonBase64Url: okio.ByteString): string;
			public static commonCompareTo(thiscommonCompareTo: okio.ByteString, other: okio.ByteString): number;
			public static commonEncodeUtf8(thiscommonEncodeUtf8: string): okio.ByteString;
			public static commonBase64(thiscommonBase64: okio.ByteString): string;
			public static commonUtf8(thiscommonUtf8: okio.ByteString): string;
			public static getHEX_DIGIT_CHARS(): native.Array<string>;
			public static commonRangeEquals(thiscommonRangeEquals: okio.ByteString, offset: number, other: okio.ByteString, otherOffset: number, byteCount: number): boolean;
			public static commonSubstring(thiscommonSubstring: okio.ByteString, beginIndex: number, endIndex: number): okio.ByteString;
			public static commonWrite(thiscommonWrite: okio.ByteString, buffer: okio.Buffer, offset: number, byteCount: number): void;
			public static commonInternalArray(thiscommonInternalArray: okio.ByteString): native.Array<number>;
			public static commonGetByte(thiscommonGetByte: okio.ByteString, pos: number): number;
			public static commonHex(thiscommonHex: okio.ByteString): string;
			public static commonLastIndexOf(thiscommonLastIndexOf: okio.ByteString, other: okio.ByteString, fromIndex: number): number;
			public static commonDecodeHex(thiscommonDecodeHex: string): okio.ByteString;
			public static commonToAsciiLowercase(thiscommonToAsciiLowercase: okio.ByteString): okio.ByteString;
			public static commonIndexOf(thiscommonIndexOf: okio.ByteString, other: native.Array<number>, fromIndex: number): number;
			public static commonEndsWith(thiscommonEndsWith: okio.ByteString, suffix: okio.ByteString): boolean;
		}
	}
}

declare module okio {
	export module internal {
		export class RealBufferedSinkKt extends java.lang.Object {
			public static class: java.lang.Class<okio.internal.RealBufferedSinkKt>;
			public static commonWrite(thiscommonWrite: okio.RealBufferedSink, byteString: okio.ByteString): okio.BufferedSink;
			public static commonWrite(thiscommonWrite: okio.RealBufferedSink, source: native.Array<number>, offset: number, byteCount: number): okio.BufferedSink;
			public static commonWriteAll(thiscommonWriteAll: okio.RealBufferedSink, source: okio.Source): number;
			public static commonWriteLongLe(thiscommonWriteLongLe: okio.RealBufferedSink, v: number): okio.BufferedSink;
			public static commonToString(thiscommonToString: okio.RealBufferedSink): string;
			public static commonWriteByte(thiscommonWriteByte: okio.RealBufferedSink, b: number): okio.BufferedSink;
			public static commonClose(thiscommonClose: okio.RealBufferedSink): void;
			public static commonWriteIntLe(thiscommonWriteIntLe: okio.RealBufferedSink, i: number): okio.BufferedSink;
			public static commonWriteUtf8(thiscommonWriteUtf8: okio.RealBufferedSink, string: string, beginIndex: number, endIndex: number): okio.BufferedSink;
			public static commonWriteInt(thiscommonWriteInt: okio.RealBufferedSink, i: number): okio.BufferedSink;
			public static commonWriteLong(thiscommonWriteLong: okio.RealBufferedSink, v: number): okio.BufferedSink;
			public static commonWrite(thiscommonWrite: okio.RealBufferedSink, byteString: okio.ByteString, offset: number, byteCount: number): okio.BufferedSink;
			public static commonWrite(thiscommonWrite: okio.RealBufferedSink, source: okio.Buffer, byteCount: number): void;
			public static commonTimeout(thiscommonTimeout: okio.RealBufferedSink): okio.Timeout;
			public static commonWrite(thiscommonWrite: okio.RealBufferedSink, source: okio.Source, byteCount: number): okio.BufferedSink;
			public static commonWrite(thiscommonWrite: okio.RealBufferedSink, source: native.Array<number>): okio.BufferedSink;
			public static commonWriteShort(thiscommonWriteShort: okio.RealBufferedSink, s: number): okio.BufferedSink;
			public static commonWriteUtf8(thiscommonWriteUtf8: okio.RealBufferedSink, string: string): okio.BufferedSink;
			public static commonEmit(thiscommonEmit: okio.RealBufferedSink): okio.BufferedSink;
			public static commonWriteHexadecimalUnsignedLong(thiscommonWriteHexadecimalUnsignedLong: okio.RealBufferedSink, v: number): okio.BufferedSink;
			public static commonWriteDecimalLong(thiscommonWriteDecimalLong: okio.RealBufferedSink, v: number): okio.BufferedSink;
			public static commonWriteShortLe(thiscommonWriteShortLe: okio.RealBufferedSink, s: number): okio.BufferedSink;
			public static commonFlush(thiscommonFlush: okio.RealBufferedSink): void;
			public static commonEmitCompleteSegments(thiscommonEmitCompleteSegments: okio.RealBufferedSink): okio.BufferedSink;
			public static commonWriteUtf8CodePoint(thiscommonWriteUtf8CodePoint: okio.RealBufferedSink, codePoint: number): okio.BufferedSink;
		}
	}
}

declare module okio {
	export module internal {
		export class RealBufferedSourceKt extends java.lang.Object {
			public static class: java.lang.Class<okio.internal.RealBufferedSourceKt>;
			public static commonReadUtf8Line(thiscommonReadUtf8Line: okio.RealBufferedSource): string;
			public static commonRequest(thiscommonRequest: okio.RealBufferedSource, byteCount: number): boolean;
			public static commonReadByteString(thiscommonReadByteString: okio.RealBufferedSource, byteCount: number): okio.ByteString;
			public static commonReadShortLe(thiscommonReadShortLe: okio.RealBufferedSource): number;
			public static commonReadByteArray(thiscommonReadByteArray: okio.RealBufferedSource): native.Array<number>;
			public static commonSelect(thiscommonSelect: okio.RealBufferedSource, options: okio.Options): number;
			public static commonReadDecimalLong(thiscommonReadDecimalLong: okio.RealBufferedSource): number;
			public static commonRead(thiscommonRead: okio.RealBufferedSource, sink: okio.Buffer, byteCount: number): number;
			public static commonReadHexadecimalUnsignedLong(thiscommonReadHexadecimalUnsignedLong: okio.RealBufferedSource): number;
			public static commonRequire(thiscommonRequire: okio.RealBufferedSource, byteCount: number): void;
			public static commonReadUtf8CodePoint(thiscommonReadUtf8CodePoint: okio.RealBufferedSource): number;
			public static commonReadByteArray(thiscommonReadByteArray: okio.RealBufferedSource, byteCount: number): native.Array<number>;
			public static commonReadIntLe(thiscommonReadIntLe: okio.RealBufferedSource): number;
			public static commonPeek(thiscommonPeek: okio.RealBufferedSource): okio.BufferedSource;
			public static commonReadInt(thiscommonReadInt: okio.RealBufferedSource): number;
			public static commonReadAll(thiscommonReadAll: okio.RealBufferedSource, sink: okio.Sink): number;
			public static commonReadUtf8(thiscommonReadUtf8: okio.RealBufferedSource): string;
			public static commonReadFully(thiscommonReadFully: okio.RealBufferedSource, sink: okio.Buffer, byteCount: number): void;
			public static commonReadShort(thiscommonReadShort: okio.RealBufferedSource): number;
			public static commonReadUtf8(thiscommonReadUtf8: okio.RealBufferedSource, byteCount: number): string;
			public static commonToString(thiscommonToString: okio.RealBufferedSource): string;
			public static commonClose(thiscommonClose: okio.RealBufferedSource): void;
			public static commonSkip(thiscommonSkip: okio.RealBufferedSource, byteCount: number): void;
			public static commonTimeout(thiscommonTimeout: okio.RealBufferedSource): okio.Timeout;
			public static commonReadByte(thiscommonReadByte: okio.RealBufferedSource): number;
			public static commonReadLongLe(thiscommonReadLongLe: okio.RealBufferedSource): number;
			public static commonExhausted(thiscommonExhausted: okio.RealBufferedSource): boolean;
			public static commonReadByteString(thiscommonReadByteString: okio.RealBufferedSource): okio.ByteString;
			public static commonReadUtf8LineStrict(thiscommonReadUtf8LineStrict: okio.RealBufferedSource, limit: number): string;
			public static commonReadLong(thiscommonReadLong: okio.RealBufferedSource): number;
			public static commonRangeEquals(thiscommonRangeEquals: okio.RealBufferedSource, offset: number, bytes: okio.ByteString, bytesOffset: number, byteCount: number): boolean;
			public static commonIndexOf(thiscommonIndexOf: okio.RealBufferedSource, b: number, fromIndex: number, toIndex: number): number;
			public static commonIndexOf(thiscommonIndexOf: okio.RealBufferedSource, bytes: okio.ByteString, fromIndex: number): number;
			public static commonReadFully(thiscommonReadFully: okio.RealBufferedSource, sink: native.Array<number>): void;
			public static commonIndexOfElement(thiscommonIndexOfElement: okio.RealBufferedSource, targetBytes: okio.ByteString, fromIndex: number): number;
			public static commonRead(thiscommonRead: okio.RealBufferedSource, sink: native.Array<number>, offset: number, byteCount: number): number;
		}
	}
}

declare module okio {
	export module internal {
		export class SegmentedByteStringKt extends java.lang.Object {
			public static class: java.lang.Class<okio.internal.SegmentedByteStringKt>;
			public static binarySearch(thisbinarySearch: native.Array<number>, value: number, fromIndex: number, toIndex: number): number;
			public static commonGetSize(thiscommonGetSize: okio.SegmentedByteString): number;
			public static forEachSegment(thisforEachSegment: okio.SegmentedByteString, action: kotlin.jvm.functions.Function3<any,any,any,kotlin.Unit>): void;
			public static commonWrite(thiscommonWrite: okio.SegmentedByteString, buffer: okio.Buffer, offset: number, byteCount: number): void;
			public static commonRangeEquals(thiscommonRangeEquals: okio.SegmentedByteString, offset: number, other: okio.ByteString, otherOffset: number, byteCount: number): boolean;
			public static commonToByteArray(thiscommonToByteArray: okio.SegmentedByteString): native.Array<number>;
			public static segment(thissegment: okio.SegmentedByteString, pos: number): number;
			public static commonInternalGet(thiscommonInternalGet: okio.SegmentedByteString, pos: number): number;
			public static commonRangeEquals(thiscommonRangeEquals: okio.SegmentedByteString, offset: number, other: native.Array<number>, otherOffset: number, byteCount: number): boolean;
			public static commonEquals(thiscommonEquals: okio.SegmentedByteString, other: any): boolean;
			public static commonSubstring(thiscommonSubstring: okio.SegmentedByteString, beginIndex: number, endIndex: number): okio.ByteString;
			public static commonHashCode(thiscommonHashCode: okio.SegmentedByteString): number;
		}
	}
}

declare module okio {
	export module internal {
		export class _Utf8Kt extends java.lang.Object {
			public static class: java.lang.Class<okio.internal._Utf8Kt>;
			public static commonAsUtf8ToByteArray(thiscommonAsUtf8ToByteArray: string): native.Array<number>;
			public static commonToUtf8String(thiscommonToUtf8String: native.Array<number>, beginIndex: number, endIndex: number): string;
		}
	}
}

//Generics information:

