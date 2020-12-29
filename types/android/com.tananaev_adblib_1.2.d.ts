declare module com {
	export module tananaev {
		export module adblib {
			export class AdbBase64 extends java.lang.Object {
				public static class: java.lang.Class<com.tananaev.adblib.AdbBase64>;
				/**
				 * Constructs a new instance of the com.tananaev.adblib.AdbBase64 interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					encodeToString(bytes0: native.Array<number>): string;
				});
				public constructor();
				public encodeToString(bytes0: native.Array<number>): string;
			}
		}
	}
}

declare module com {
	export module tananaev {
		export module adblib {
			export class AdbConnection extends java.lang.Object implements java.io.Closeable {
				public static class: java.lang.Class<com.tananaev.adblib.AdbConnection>;
				public getMaxData(): number;
				public close(): void;
				public connect(): void;
				public open(destination: string): com.tananaev.adblib.AdbStream;
				public static create(socket: java.net.Socket, crypto: com.tananaev.adblib.AdbCrypto): com.tananaev.adblib.AdbConnection;
			}
		}
	}
}

declare module com {
	export module tananaev {
		export module adblib {
			export class AdbCrypto extends java.lang.Object {
				public static class: java.lang.Class<com.tananaev.adblib.AdbCrypto>;
				public static KEY_LENGTH_BITS: number;
				public static KEY_LENGTH_BYTES: number;
				public static KEY_LENGTH_WORDS: number;
				public static SIGNATURE_PADDING_AS_INT: native.Array<number>;
				public static SIGNATURE_PADDING: native.Array<number>;
				public static loadAdbKeyPair(base64: com.tananaev.adblib.AdbBase64, privateKey: java.io.File, publicKey: java.io.File): com.tananaev.adblib.AdbCrypto;
				public static generateAdbKeyPair(base64: com.tananaev.adblib.AdbBase64): com.tananaev.adblib.AdbCrypto;
				public signAdbTokenPayload(payload: native.Array<number>): native.Array<number>;
				public static loadAdbKeyPair(base64: com.tananaev.adblib.AdbBase64, keyPair: java.security.KeyPair): com.tananaev.adblib.AdbCrypto;
				public getAdbPublicKeyPayload(): native.Array<number>;
				public saveAdbKeyPair(privateKey: java.io.File, publicKey: java.io.File): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module tananaev {
		export module adblib {
			export class AdbProtocol extends java.lang.Object {
				public static class: java.lang.Class<com.tananaev.adblib.AdbProtocol>;
				public static ADB_HEADER_LENGTH: number;
				public static CMD_SYNC: number;
				public static CMD_CNXN: number;
				public static CONNECT_VERSION: number;
				public static CONNECT_MAXDATA: number;
				public static CONNECT_PAYLOAD: native.Array<number>;
				public static CMD_AUTH: number;
				public static AUTH_TYPE_TOKEN: number;
				public static AUTH_TYPE_SIGNATURE: number;
				public static AUTH_TYPE_RSA_PUBLIC: number;
				public static CMD_OPEN: number;
				public static CMD_OKAY: number;
				public static CMD_CLSE: number;
				public static CMD_WRTE: number;
				public static generateClose(localId: number, remoteId: number): native.Array<number>;
				public static generateAuth(type: number, data: native.Array<number>): native.Array<number>;
				public static generateConnect(): native.Array<number>;
				public static validateMessage(msg: com.tananaev.adblib.AdbProtocol.AdbMessage): boolean;
				public static generateMessage(cmd: number, int1: number, int2: number, payload: native.Array<number>): native.Array<number>;
				public static generateReady(localId: number, remoteId: number): native.Array<number>;
				public static generateOpen(localId: number, dest: string): native.Array<number>;
				public static generateWrite(localId: number, remoteId: number, data: native.Array<number>): native.Array<number>;
				public constructor();
			}
			export module AdbProtocol {
				export class AdbMessage extends java.lang.Object {
					public static class: java.lang.Class<com.tananaev.adblib.AdbProtocol.AdbMessage>;
					public command: number;
					public arg0: number;
					public arg1: number;
					public payloadLength: number;
					public checksum: number;
					public magic: number;
					public payload: native.Array<number>;
					public static parseAdbMessage(in0: java.io.InputStream): com.tananaev.adblib.AdbProtocol.AdbMessage;
				}
			}
		}
	}
}

declare module com {
	export module tananaev {
		export module adblib {
			export class AdbStream extends java.lang.Object implements java.io.Closeable {
				public static class: java.lang.Class<com.tananaev.adblib.AdbStream>;
				public read(): native.Array<number>;
				public close(): void;
				public write(payload: native.Array<number>): void;
				public write(payload: native.Array<number>, flush: boolean): void;
				public constructor(adbConn: com.tananaev.adblib.AdbConnection, localId: number);
				public isClosed(): boolean;
				public write(payload: string): void;
			}
		}
	}
}

//Generics information:

