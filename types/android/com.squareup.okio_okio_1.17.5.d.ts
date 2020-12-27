declare module okio {
	export class AsyncTimeout extends okio.Timeout {
		public static class: java.lang.Class<okio.AsyncTimeout>;
		public constructor();
		public enter(): void;
		public sink(sink: okio.Sink): okio.Sink;
		public newTimeoutException(cause: java.io.IOException): java.io.IOException;
		public timedOut(): void;
		public source(source: okio.Source): okio.Source;
		public exit(): boolean;
	}
	export module AsyncTimeout {
		export class Watchdog extends java.lang.Thread {
			public static class: java.lang.Class<okio.AsyncTimeout.Watchdog>;
			public run(): void;
		}
	}
}

declare module okio {
	export class Base64 extends java.lang.Object {
		public static class: java.lang.Class<okio.Base64>;
		public static encode(in0: native.Array<number>): string;
		public static decode(in0: string): native.Array<number>;
		public static encodeUrl(in0: native.Array<number>): string;
	}
}

declare module okio {
	export class Buffer extends java.lang.Object implements okio.BufferedSource, okio.BufferedSink, java.lang.Cloneable, java.nio.channels.ByteChannel {
		public static class: java.lang.Class<okio.Buffer>;
		public readUtf8(byteCount: number): string;
		public require(byteCount: number): void;
		public write(bytes0: native.Array<number>, int1: number, int2: number): okio.BufferedSink;
		public readIntLe(): number;
		public writeString(string: string, beginIndex: number, endIndex: number, charset: java.nio.charset.Charset): okio.Buffer;
		public writeLong(long0: number): okio.BufferedSink;
		public writeHexadecimalUnsignedLong(v: number): okio.Buffer;
		public request(byteCount: number): boolean;
		public write(bytes0: native.Array<number>): okio.BufferedSink;
		public writeTo(out: java.io.OutputStream, byteCount: number): okio.Buffer;
		public readByte(): number;
		public emitCompleteSegments(): okio.BufferedSink;
		public readUnsafe(unsafeCursor: okio.Buffer.UnsafeCursor): okio.Buffer.UnsafeCursor;
		public readLong(): number;
		public writeString(string0: string, charset1: java.nio.charset.Charset): okio.BufferedSink;
		public readFrom(in0: java.io.InputStream, byteCount: number): okio.Buffer;
		public writeString(string0: string, int1: number, int2: number, charset3: java.nio.charset.Charset): okio.BufferedSink;
		public indexOfElement(targetBytes: okio.ByteString, fromIndex: number): number;
		public writeTo(out: java.io.OutputStream): okio.Buffer;
		public getByte(pos: number): number;
		public write(source: okio.Buffer, byteCount: number): void;
		public read(sink: java.nio.ByteBuffer): number;
		public sha1(): okio.ByteString;
		public writeUtf8(string: string, beginIndex: number, endIndex: number): okio.Buffer;
		public copyTo(out: java.io.OutputStream, offset: number, byteCount: number): okio.Buffer;
		public readString(charset: java.nio.charset.Charset): string;
		public indexOf(bytes: okio.ByteString): number;
		public rangeEquals(offset: number, bytes: okio.ByteString): boolean;
		public writeLong(v: number): okio.Buffer;
		public clear(): void;
		public outputStream(): java.io.OutputStream;
		public write(source: okio.Source, byteCount: number): okio.BufferedSink;
		public writeLongLe(v: number): okio.Buffer;
		public readUtf8LineStrict(): string;
		public writeUtf8(string0: string): okio.BufferedSink;
		public readFully(sink: native.Array<number>): void;
		public getBuffer(): okio.Buffer;
		public writeShortLe(int0: number): okio.BufferedSink;
		public sha512(): okio.ByteString;
		public writeIntLe(i: number): okio.Buffer;
		public readFrom(in0: java.io.InputStream): okio.Buffer;
		public writeIntLe(int0: number): okio.BufferedSink;
		public writeUtf8CodePoint(int0: number): okio.BufferedSink;
		public skip(byteCount: number): void;
		public copyTo(out: okio.Buffer, offset: number, byteCount: number): okio.Buffer;
		public indexOf(b: number): number;
		public writeByte(int0: number): okio.BufferedSink;
		public readFully(sink: okio.Buffer, byteCount: number): void;
		public readInt(): number;
		public writeUtf8CodePoint(codePoint: number): okio.Buffer;
		public writeByte(b: number): okio.Buffer;
		public equals(obj: any): boolean;
		public write(source: java.nio.ByteBuffer): number;
		public write(source: native.Array<number>): okio.Buffer;
		public writeHexadecimalUnsignedLong(long0: number): okio.BufferedSink;
		public equals(o: any): boolean;
		public timeout(): okio.Timeout;
		public writeLongLe(long0: number): okio.BufferedSink;
		public close(): void;
		public indexOf(b: number, fromIndex: number, toIndex: number): number;
		public inputStream(): java.io.InputStream;
		public writeDecimalLong(long0: number): okio.BufferedSink;
		public hmacSha256(key: okio.ByteString): okio.ByteString;
		public readUtf8CodePoint(): number;
		public read(sink: okio.Buffer, byteCount: number): number;
		public readAndWriteUnsafe(): okio.Buffer.UnsafeCursor;
		public writeInt(int0: number): okio.BufferedSink;
		public rangeEquals(offset: number, bytes: okio.ByteString, bytesOffset: number, byteCount: number): boolean;
		public read(sink: native.Array<number>, offset: number, byteCount: number): number;
		public writeInt(i: number): okio.Buffer;
		public writeString(string: string, charset: java.nio.charset.Charset): okio.Buffer;
		public read(sink: native.Array<number>): number;
		public readHexadecimalUnsignedLong(): number;
		public indexOfElement(targetBytes: okio.ByteString): number;
		public readAndWriteUnsafe(unsafeCursor: okio.Buffer.UnsafeCursor): okio.Buffer.UnsafeCursor;
		public select(options: okio.Options): number;
		public emit(): okio.BufferedSink;
		public readUtf8LineStrict(limit: number): string;
		public constructor();
		public hmacSha1(key: okio.ByteString): okio.ByteString;
		public readUtf8(): string;
		/** @deprecated */
		public buffer(): okio.Buffer;
		public indexOf(b: number, fromIndex: number): number;
		public writeAll(source: okio.Source): number;
		public writeShort(s: number): okio.Buffer;
		public readUnsafe(): okio.Buffer.UnsafeCursor;
		public completeSegmentByteCount(): number;
		public toString(): string;
		public md5(): okio.ByteString;
		public flush(): void;
		public readShort(): number;
		public peek(): okio.BufferedSource;
		public readShortLe(): number;
		public copyTo(out: java.io.OutputStream): okio.Buffer;
		public readUtf8Line(): string;
		public readByteString(): okio.ByteString;
		public writeShortLe(s: number): okio.Buffer;
		public clone(): any;
		public writeUtf8(string: string): okio.Buffer;
		public size(): number;
		public readByteArray(byteCount: number): native.Array<number>;
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
		public readByteArray(): native.Array<number>;
		public readByteString(byteCount: number): okio.ByteString;
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
			public data: native.Array<number>;
			public end: number;
			public offset: number;
			public readWrite: boolean;
			public start: number;
			public next(): number;
			public seek(offset: number): number;
			public expandBuffer(minByteCount: number): number;
			public resizeBuffer(newSize: number): number;
			public constructor();
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
			write(byteString0: okio.ByteString): okio.BufferedSink;
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
		public write(bytes0: native.Array<number>): okio.BufferedSink;
		public writeShortLe(int0: number): okio.BufferedSink;
		public writeInt(int0: number): okio.BufferedSink;
		public writeIntLe(int0: number): okio.BufferedSink;
		public emitCompleteSegments(): okio.BufferedSink;
		public emit(): okio.BufferedSink;
		public writeUtf8CodePoint(int0: number): okio.BufferedSink;
		public writeByte(int0: number): okio.BufferedSink;
		public writeString(string0: string, charset1: java.nio.charset.Charset): okio.BufferedSink;
		public writeUtf8(string0: string, int1: number, int2: number): okio.BufferedSink;
		public writeString(string0: string, int1: number, int2: number, charset3: java.nio.charset.Charset): okio.BufferedSink;
		public flush(): void;
		public isOpen(): boolean;
		public write(byteString0: okio.ByteString): okio.BufferedSink;
		public buffer(): okio.Buffer;
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
		public base64(): string;
		public rangeEquals(offset: number, other: okio.ByteString, otherOffset: number, byteCount: number): boolean;
		public base64Url(): string;
		public hmacSha256(key: okio.ByteString): okio.ByteString;
		public asByteBuffer(): java.nio.ByteBuffer;
		public static read(in0: java.io.InputStream, byteCount: number): okio.ByteString;
		public sha512(): okio.ByteString;
		public size(): number;
		public static decodeHex(hex: string): okio.ByteString;
		public hashCode(): number;
		public hex(): string;
		public indexOf(other: okio.ByteString, fromIndex: number): number;
		public endsWith(suffix: okio.ByteString): boolean;
		public static of(data: native.Array<number>, offset: number, byteCount: number): okio.ByteString;
		public toAsciiUppercase(): okio.ByteString;
		public lastIndexOf(other: okio.ByteString): number;
		public hmacSha1(key: okio.ByteString): okio.ByteString;
		public indexOf(other: native.Array<number>, fromIndex: number): number;
		public string(charset: java.nio.charset.Charset): string;
		public static encodeUtf8(s: string): okio.ByteString;
		public indexOf(other: native.Array<number>): number;
		public static of(data: native.Array<number>): okio.ByteString;
		public static of(data: java.nio.ByteBuffer): okio.ByteString;
		public sha256(): okio.ByteString;
		public toString(): string;
		public write(out: java.io.OutputStream): void;
		public getByte(pos: number): number;
		public lastIndexOf(other: okio.ByteString, fromIndex: number): number;
		public md5(): okio.ByteString;
		public startsWith(prefix: okio.ByteString): boolean;
		public compareTo(byteString: okio.ByteString): number;
		public substring(beginIndex: number, endIndex: number): okio.ByteString;
		public toAsciiLowercase(): okio.ByteString;
		public sha1(): okio.ByteString;
		public equals(obj: any): boolean;
		public substring(beginIndex: number): okio.ByteString;
		public rangeEquals(offset: number, other: native.Array<number>, otherOffset: number, byteCount: number): boolean;
		public endsWith(suffix: native.Array<number>): boolean;
		public startsWith(prefix: native.Array<number>): boolean;
		public lastIndexOf(other: native.Array<number>): number;
		public utf8(): string;
		public static encodeString(s: string, charset: java.nio.charset.Charset): okio.ByteString;
		public toByteArray(): native.Array<number>;
		public hmacSha512(key: okio.ByteString): okio.ByteString;
		public indexOf(other: okio.ByteString): number;
		public static decodeBase64(base64: string): okio.ByteString;
		public equals(o: any): boolean;
		public lastIndexOf(other: native.Array<number>, fromIndex: number): number;
	}
}

declare module okio {
	export class DeflaterSink extends java.lang.Object implements okio.Sink {
		public static class: java.lang.Class<okio.DeflaterSink>;
		public close(): void;
		public toString(): string;
		public constructor(sink: okio.Sink, deflater: java.util.zip.Deflater);
		public write(source: okio.Buffer, byteCount: number): void;
		public flush(): void;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export abstract class ForwardingSink extends java.lang.Object implements okio.Sink {
		public static class: java.lang.Class<okio.ForwardingSink>;
		public constructor(delegate: okio.Sink);
		public close(): void;
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
		public toString(): string;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export class ForwardingTimeout extends okio.Timeout {
		public static class: java.lang.Class<okio.ForwardingTimeout>;
		public constructor();
		public setDelegate(delegate: okio.Timeout): okio.ForwardingTimeout;
		public throwIfReached(): void;
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
		public constructor(sink: okio.Sink);
		public write(source: okio.Buffer, byteCount: number): void;
		public flush(): void;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export class GzipSource extends java.lang.Object implements okio.Source {
		public static class: java.lang.Class<okio.GzipSource>;
		public constructor(source: okio.Source);
		public read(sink: okio.Buffer, byteCount: number): number;
		public close(): void;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export class HashingSink extends okio.ForwardingSink {
		public static class: java.lang.Class<okio.HashingSink>;
		public static md5(sink: okio.Sink): okio.HashingSink;
		public close(): void;
		public static sha1(sink: okio.Sink): okio.HashingSink;
		public static hmacSha256(sink: okio.Sink, key: okio.ByteString): okio.HashingSink;
		public static sha512(sink: okio.Sink): okio.HashingSink;
		public static hmacSha512(sink: okio.Sink, key: okio.ByteString): okio.HashingSink;
		public static sha256(sink: okio.Sink): okio.HashingSink;
		public hash(): okio.ByteString;
		public write(source: okio.Buffer, byteCount: number): void;
		public static hmacSha1(sink: okio.Sink, key: okio.ByteString): okio.HashingSink;
		public flush(): void;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export class HashingSource extends okio.ForwardingSource {
		public static class: java.lang.Class<okio.HashingSource>;
		public read(sink: okio.Buffer, byteCount: number): number;
		public static sha1(source: okio.Source): okio.HashingSource;
		public close(): void;
		public static hmacSha1(source: okio.Source, key: okio.ByteString): okio.HashingSource;
		public static hmacSha256(source: okio.Source, key: okio.ByteString): okio.HashingSource;
		public static sha256(source: okio.Source): okio.HashingSource;
		public hash(): okio.ByteString;
		public static md5(source: okio.Source): okio.HashingSource;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export class InflaterSource extends java.lang.Object implements okio.Source {
		public static class: java.lang.Class<okio.InflaterSource>;
		public read(sink: okio.Buffer, byteCount: number): number;
		public close(): void;
		public refill(): boolean;
		public constructor(source: okio.Source, inflater: java.util.zip.Inflater);
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export class Okio extends java.lang.Object {
		public static class: java.lang.Class<okio.Okio>;
		public static sink(socket: java.net.Socket): okio.Sink;
		public static source(path: java.nio.file.Path, options: native.Array<java.nio.file.OpenOption>): okio.Source;
		public static buffer(sink: okio.Sink): okio.BufferedSink;
		public static blackhole(): okio.Sink;
		public static appendingSink(file: java.io.File): okio.Sink;
		public static buffer(source: okio.Source): okio.BufferedSource;
		public static sink(file: java.io.File): okio.Sink;
		public static sink(path: java.nio.file.Path, options: native.Array<java.nio.file.OpenOption>): okio.Sink;
		public static source(socket: java.net.Socket): okio.Source;
		public static source(in0: java.io.InputStream): okio.Source;
		public static source(file: java.io.File): okio.Source;
		public static sink(out: java.io.OutputStream): okio.Sink;
	}
}

declare module okio {
	export class Options extends java.util.AbstractList<okio.ByteString> implements java.util.RandomAccess  {
		public static class: java.lang.Class<okio.Options>;
		public toArray(a: native.Array<any>): native.Array<any>;
		public toArray(): native.Array<any>;
		public replaceAll(operator: any /* any*/): void;
		public remove(o: any): boolean;
		public iterator(): java.util.Iterator<any>;
		public sort(c: java.util.Comparator<any>): void;
		public add(e: any): boolean;
		public subList(fromIndex: number, toIndex: number): java.util.List<any>;
		public stream(): java.util.stream.Stream<any>;
		public size(): number;
		public hashCode(): number;
		public retainAll(c: java.util.Collection<any>): boolean;
		public addAll(c: java.util.Collection<any>): boolean;
		public isEmpty(): boolean;
		public add(index: number, element: any): void;
		public static of(byteStrings: native.Array<okio.ByteString>): okio.Options;
		public contains(o: any): boolean;
		public containsAll(c: java.util.Collection<any>): boolean;
		public indexOf(o: any): number;
		public listIterator(index: number): java.util.ListIterator<any>;
		public remove(index: number): any;
		public get(int0: number): any;
		public set(index: number, element: any): any;
		public removeAll(c: java.util.Collection<any>): boolean;
		public addAll(index: number, c: java.util.Collection<any>): boolean;
		public lastIndexOf(o: any): number;
		public listIterator(): java.util.ListIterator<any>;
		public spliterator(): java.util.Spliterator<any>;
		public clear(): void;
		public get(i: number): okio.ByteString;
		public parallelStream(): java.util.stream.Stream<any>;
		public removeIf(filter: any /* any*/): boolean;
		public equals(o: any): boolean;
	}
}

declare module okio {
	export class PeekSource extends java.lang.Object implements okio.Source {
		public static class: java.lang.Class<okio.PeekSource>;
		public read(sink: okio.Buffer, byteCount: number): number;
		public close(): void;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export class Pipe extends java.lang.Object {
		public static class: java.lang.Class<okio.Pipe>;
		public sink(): okio.Sink;
		public constructor(maxBufferSize: number);
		public source(): okio.Source;
		public fold(sink: okio.Sink): void;
	}
	export module Pipe {
		export class PipeSink extends java.lang.Object implements okio.Sink {
			public static class: java.lang.Class<okio.Pipe.PipeSink>;
			public flush(): void;
			public write(source: okio.Buffer, byteCount: number): void;
			public timeout(): okio.Timeout;
			public close(): void;
		}
		export class PipeSource extends java.lang.Object implements okio.Source {
			public static class: java.lang.Class<okio.Pipe.PipeSource>;
			public timeout(): okio.Timeout;
			public read(sink: okio.Buffer, byteCount: number): number;
			public close(): void;
		}
	}
}

declare module okio {
	export class PushableTimeout extends okio.Timeout {
		public static class: java.lang.Class<okio.PushableTimeout>;
	}
}

declare module okio {
	export class RealBufferedSink extends java.lang.Object implements okio.BufferedSink {
		public static class: java.lang.Class<okio.RealBufferedSink>;
		public sink: okio.Sink;
		public writeString(string: string, charset: java.nio.charset.Charset): okio.BufferedSink;
		public close(): void;
		public writeUtf8(string: string): okio.BufferedSink;
		public writeHexadecimalUnsignedLong(v: number): okio.BufferedSink;
		public writeInt(i: number): okio.BufferedSink;
		public writeString(string: string, beginIndex: number, endIndex: number, charset: java.nio.charset.Charset): okio.BufferedSink;
		public emitCompleteSegments(): okio.BufferedSink;
		public emit(): okio.BufferedSink;
		public writeShortLe(s: number): okio.BufferedSink;
		public writeIntLe(i: number): okio.BufferedSink;
		public writeLong(v: number): okio.BufferedSink;
		public write(source: native.Array<number>): okio.BufferedSink;
		public writeUtf8(string: string, beginIndex: number, endIndex: number): okio.BufferedSink;
		public writeLongLe(v: number): okio.BufferedSink;
		public writeAll(source: okio.Source): number;
		public write(source: native.Array<number>, offset: number, byteCount: number): okio.BufferedSink;
		public write(byteString: okio.ByteString): okio.BufferedSink;
		public toString(): string;
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
		public source: okio.Source;
		public readUtf8(byteCount: number): string;
		public require(byteCount: number): void;
		public close(): void;
		public indexOf(b: number, fromIndex: number, toIndex: number): number;
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
		public indexOfElement(targetBytes: okio.ByteString): number;
		public select(options: okio.Options): number;
		public readUtf8LineStrict(limit: number): string;
		public readLong(): number;
		public readUtf8(): string;
		/** @deprecated */
		public buffer(): okio.Buffer;
		public indexOf(b: number, fromIndex: number): number;
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
		public readByteArray(): native.Array<number>;
		public readByteString(byteCount: number): okio.ByteString;
		public readAll(sink: okio.Sink): number;
		public exhausted(): boolean;
		public buffer(): okio.Buffer;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export class Segment extends java.lang.Object {
		public static class: java.lang.Class<okio.Segment>;
		public writeTo(sink: okio.Segment, byteCount: number): void;
		public compact(): void;
		public pop(): okio.Segment;
		public split(byteCount: number): okio.Segment;
		public push(segment: okio.Segment): okio.Segment;
	}
}

declare module okio {
	export class SegmentPool extends java.lang.Object {
		public static class: java.lang.Class<okio.SegmentPool>;
	}
}

declare module okio {
	export class SegmentedByteString extends okio.ByteString {
		public static class: java.lang.Class<okio.SegmentedByteString>;
		public base64(): string;
		public rangeEquals(offset: number, other: okio.ByteString, otherOffset: number, byteCount: number): boolean;
		public base64Url(): string;
		public hmacSha256(key: okio.ByteString): okio.ByteString;
		public asByteBuffer(): java.nio.ByteBuffer;
		public size(): number;
		public hashCode(): number;
		public hex(): string;
		public indexOf(other: okio.ByteString, fromIndex: number): number;
		public toAsciiUppercase(): okio.ByteString;
		public lastIndexOf(other: okio.ByteString): number;
		public hmacSha1(key: okio.ByteString): okio.ByteString;
		public indexOf(other: native.Array<number>, fromIndex: number): number;
		public string(charset: java.nio.charset.Charset): string;
		public indexOf(other: native.Array<number>): number;
		public sha256(): okio.ByteString;
		public toString(): string;
		public write(out: java.io.OutputStream): void;
		public getByte(pos: number): number;
		public lastIndexOf(other: okio.ByteString, fromIndex: number): number;
		public md5(): okio.ByteString;
		public substring(beginIndex: number, endIndex: number): okio.ByteString;
		public toAsciiLowercase(): okio.ByteString;
		public sha1(): okio.ByteString;
		public substring(beginIndex: number): okio.ByteString;
		public rangeEquals(offset: number, other: native.Array<number>, otherOffset: number, byteCount: number): boolean;
		public lastIndexOf(other: native.Array<number>): number;
		public utf8(): string;
		public toByteArray(): native.Array<number>;
		public indexOf(other: okio.ByteString): number;
		public equals(o: any): boolean;
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
	export class Timeout extends java.lang.Object {
		public static class: java.lang.Class<okio.Timeout>;
		public static NONE: okio.Timeout;
		public constructor();
		public throwIfReached(): void;
		public waitUntilNotified(monitor: any): void;
		public clearDeadline(): okio.Timeout;
		public hasDeadline(): boolean;
		public deadline(duration: number, unit: java.util.concurrent.TimeUnit): okio.Timeout;
		public timeoutNanos(): number;
		public deadlineNanoTime(): number;
		public clearTimeout(): okio.Timeout;
		public deadlineNanoTime(deadlineNanoTime: number): okio.Timeout;
		public timeout(timeout: number, unit: java.util.concurrent.TimeUnit): okio.Timeout;
	}
}

declare module okio {
	export class Utf8 extends java.lang.Object {
		public static class: java.lang.Class<okio.Utf8>;
		public static size(string: string): number;
		public static size(string: string, beginIndex: number, endIndex: number): number;
	}
}

declare module okio {
	export class Util extends java.lang.Object {
		public static class: java.lang.Class<okio.Util>;
		public static UTF_8: java.nio.charset.Charset;
		public static reverseBytesShort(s: number): number;
		public static checkOffsetAndCount(size: number, offset: number, byteCount: number): void;
		public static reverseBytesLong(v: number): number;
		public static arrayRangeEquals(a: native.Array<number>, aOffset: number, b: native.Array<number>, bOffset: number, byteCount: number): boolean;
		public static reverseBytesInt(i: number): number;
		public static sneakyRethrow(t: java.lang.Throwable): void;
	}
}


//Generics information:

