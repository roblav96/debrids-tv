declare module okhttp3 {
	export class Address extends java.lang.Object {
		public static class: java.lang.Class<okhttp3.Address>;
		public proxy(): java.net.Proxy;
		public proxySelector(): java.net.ProxySelector;
		public sslSocketFactory(): javax.net.ssl.SSLSocketFactory;
		public equals(other: any): boolean;
		public url(): okhttp3.HttpUrl;
		public certificatePinner(): okhttp3.CertificatePinner;
		public toString(): string;
		public protocols(): java.util.List<okhttp3.Protocol>;
		public constructor(uriHost: string, uriPort: number, dns: okhttp3.Dns, socketFactory: javax.net.SocketFactory, sslSocketFactory: javax.net.ssl.SSLSocketFactory, hostnameVerifier: javax.net.ssl.HostnameVerifier, certificatePinner: okhttp3.CertificatePinner, proxyAuthenticator: okhttp3.Authenticator, proxy: java.net.Proxy, protocols: java.util.List<okhttp3.Protocol>, connectionSpecs: java.util.List<okhttp3.ConnectionSpec>, proxySelector: java.net.ProxySelector);
		public socketFactory(): javax.net.SocketFactory;
		public equals(obj: any): boolean;
		public dns(): okhttp3.Dns;
		public proxyAuthenticator(): okhttp3.Authenticator;
		public hostnameVerifier(): javax.net.ssl.HostnameVerifier;
		public hashCode(): number;
		public connectionSpecs(): java.util.List<okhttp3.ConnectionSpec>;
	}
}

declare module okhttp3 {
	export class Authenticator extends java.lang.Object {
		public static class: java.lang.Class<okhttp3.Authenticator>;
		/**
		 * Constructs a new instance of the okhttp3.Authenticator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			authenticate(route0: okhttp3.Route, response1: okhttp3.Response): okhttp3.Request;
			lambda$static$0(route: okhttp3.Route, response: okhttp3.Response): okhttp3.Request;
		});
		public constructor();
		public static NONE: okhttp3.Authenticator;
		public authenticate(route0: okhttp3.Route, response1: okhttp3.Response): okhttp3.Request;
	}
}

declare module okhttp3 {
	export class Cache extends java.lang.Object implements java.io.Closeable, java.io.Flushable {
		public static class: java.lang.Class<okhttp3.Cache>;
		public close(): void;
		public directory(): java.io.File;
		public writeAbortCount(): number;
		public evictAll(): void;
		public delete(): void;
		public isClosed(): boolean;
		public networkCount(): number;
		public requestCount(): number;
		public flush(): void;
		public initialize(): void;
		public size(): number;
		public static key(url: okhttp3.HttpUrl): string;
		public writeSuccessCount(): number;
		public hitCount(): number;
		public urls(): java.util.Iterator<string>;
		public maxSize(): number;
		public constructor(directory: java.io.File, maxSize: number);
	}
	export module Cache {
		export class CacheRequestImpl extends java.lang.Object implements okhttp3.internal.cache.CacheRequest {
			public static class: java.lang.Class<okhttp3.Cache.CacheRequestImpl>;
			public body(): okio.Sink;
			public abort(): void;
		}
		export class CacheResponseBody extends okhttp3.ResponseBody {
			public static class: java.lang.Class<okhttp3.Cache.CacheResponseBody>;
			public contentLength(): number;
			public source(): okio.BufferedSource;
			public contentType(): okhttp3.MediaType;
			public close(): void;
		}
		export class Entry extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.Cache.Entry>;
			public writeTo(editor: okhttp3.internal.cache.DiskLruCache.Editor): void;
			public matches(request: okhttp3.Request, response: okhttp3.Response): boolean;
			public response(snapshot: okhttp3.internal.cache.DiskLruCache.Snapshot): okhttp3.Response;
		}
	}
}

declare module okhttp3 {
	export class CacheControl extends java.lang.Object {
		public static class: java.lang.Class<okhttp3.CacheControl>;
		public static FORCE_NETWORK: okhttp3.CacheControl;
		public static FORCE_CACHE: okhttp3.CacheControl;
		public maxStaleSeconds(): number;
		public static parse(headers: okhttp3.Headers): okhttp3.CacheControl;
		public mustRevalidate(): boolean;
		public toString(): string;
		public minFreshSeconds(): number;
		public onlyIfCached(): boolean;
		public noCache(): boolean;
		public noTransform(): boolean;
		public isPrivate(): boolean;
		public immutable(): boolean;
		public sMaxAgeSeconds(): number;
		public noStore(): boolean;
		public maxAgeSeconds(): number;
		public isPublic(): boolean;
	}
	export module CacheControl {
		export class Builder extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.CacheControl.Builder>;
			public noCache(): okhttp3.CacheControl.Builder;
			public immutable(): okhttp3.CacheControl.Builder;
			public onlyIfCached(): okhttp3.CacheControl.Builder;
			public minFresh(minFresh: number, timeUnit: java.util.concurrent.TimeUnit): okhttp3.CacheControl.Builder;
			public constructor();
			public maxStale(maxStale: number, timeUnit: java.util.concurrent.TimeUnit): okhttp3.CacheControl.Builder;
			public build(): okhttp3.CacheControl;
			public noStore(): okhttp3.CacheControl.Builder;
			public noTransform(): okhttp3.CacheControl.Builder;
			public maxAge(maxAge: number, timeUnit: java.util.concurrent.TimeUnit): okhttp3.CacheControl.Builder;
		}
	}
}

declare module okhttp3 {
	export class Call extends java.lang.Object implements java.lang.Cloneable {
		public static class: java.lang.Class<okhttp3.Call>;
		/**
		 * Constructs a new instance of the okhttp3.Call interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			request(): okhttp3.Request;
			execute(): okhttp3.Response;
			enqueue(callback0: okhttp3.Callback): void;
			cancel(): void;
			isExecuted(): boolean;
			isCanceled(): boolean;
			timeout(): okio.Timeout;
			clone(): okhttp3.Call;
		});
		public constructor();
		public isExecuted(): boolean;
		public clone(): okhttp3.Call;
		public request(): okhttp3.Request;
		public enqueue(callback0: okhttp3.Callback): void;
		public execute(): okhttp3.Response;
		public isCanceled(): boolean;
		public clone(): any;
		public cancel(): void;
		public timeout(): okio.Timeout;
	}
	export module Call {
		export class Factory extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.Call.Factory>;
			/**
			 * Constructs a new instance of the okhttp3.Call$Factory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				newCall(request0: okhttp3.Request): okhttp3.Call;
			});
			public constructor();
			public newCall(request0: okhttp3.Request): okhttp3.Call;
		}
	}
}

declare module okhttp3 {
	export class Callback extends java.lang.Object {
		public static class: java.lang.Class<okhttp3.Callback>;
		/**
		 * Constructs a new instance of the okhttp3.Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			onFailure(call0: okhttp3.Call, iOException1: java.io.IOException): void;
			onResponse(call0: okhttp3.Call, response1: okhttp3.Response): void;
		});
		public constructor();
		public onResponse(call0: okhttp3.Call, response1: okhttp3.Response): void;
		public onFailure(call0: okhttp3.Call, iOException1: java.io.IOException): void;
	}
}

declare module okhttp3 {
	export class CertificatePinner extends java.lang.Object {
		public static class: java.lang.Class<okhttp3.CertificatePinner>;
		public static DEFAULT: okhttp3.CertificatePinner;
		public equals(obj: any): boolean;
		public equals(other: any): boolean;
		/** @deprecated */
		public check(hostname: string, peerCertificates: native.Array<java.security.cert.Certificate>): void;
		public check(hostname: string, peerCertificates: java.util.List<java.security.cert.Certificate>): void;
		public static pin(certificate: java.security.cert.Certificate): string;
		public hashCode(): number;
	}
	export module CertificatePinner {
		export class Builder extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.CertificatePinner.Builder>;
			public build(): okhttp3.CertificatePinner;
			public add(pattern: string, pins: native.Array<string>): okhttp3.CertificatePinner.Builder;
			public constructor();
		}
		export class Pin extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.CertificatePinner.Pin>;
			public equals(other: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public hashCode(): number;
		}
	}
}

declare module okhttp3 {
	export class Challenge extends java.lang.Object {
		public static class: java.lang.Class<okhttp3.Challenge>;
		public constructor(scheme: string, realm: string);
		public authParams(): java.util.Map<string,string>;
		public charset(): java.nio.charset.Charset;
		public equals(obj: any): boolean;
		public equals(other: any): boolean;
		public scheme(): string;
		public hashCode(): number;
		public constructor(scheme: string, authParams: java.util.Map<string,string>);
		public toString(): string;
		public withCharset(charset: java.nio.charset.Charset): okhttp3.Challenge;
		public realm(): string;
	}
}

declare module okhttp3 {
	export class CipherSuite extends java.lang.Object {
		public static class: java.lang.Class<okhttp3.CipherSuite>;
		public static TLS_RSA_WITH_NULL_MD5: okhttp3.CipherSuite;
		public static TLS_RSA_WITH_NULL_SHA: okhttp3.CipherSuite;
		public static TLS_RSA_EXPORT_WITH_RC4_40_MD5: okhttp3.CipherSuite;
		public static TLS_RSA_WITH_RC4_128_MD5: okhttp3.CipherSuite;
		public static TLS_RSA_WITH_RC4_128_SHA: okhttp3.CipherSuite;
		public static TLS_RSA_EXPORT_WITH_DES40_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_RSA_WITH_DES_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_RSA_WITH_3DES_EDE_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DHE_DSS_EXPORT_WITH_DES40_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DHE_DSS_WITH_DES_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DHE_DSS_WITH_3DES_EDE_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DHE_RSA_EXPORT_WITH_DES40_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DHE_RSA_WITH_DES_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DHE_RSA_WITH_3DES_EDE_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DH_anon_EXPORT_WITH_RC4_40_MD5: okhttp3.CipherSuite;
		public static TLS_DH_anon_WITH_RC4_128_MD5: okhttp3.CipherSuite;
		public static TLS_DH_anon_EXPORT_WITH_DES40_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DH_anon_WITH_DES_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DH_anon_WITH_3DES_EDE_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_KRB5_WITH_DES_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_KRB5_WITH_3DES_EDE_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_KRB5_WITH_RC4_128_SHA: okhttp3.CipherSuite;
		public static TLS_KRB5_WITH_DES_CBC_MD5: okhttp3.CipherSuite;
		public static TLS_KRB5_WITH_3DES_EDE_CBC_MD5: okhttp3.CipherSuite;
		public static TLS_KRB5_WITH_RC4_128_MD5: okhttp3.CipherSuite;
		public static TLS_KRB5_EXPORT_WITH_DES_CBC_40_SHA: okhttp3.CipherSuite;
		public static TLS_KRB5_EXPORT_WITH_RC4_40_SHA: okhttp3.CipherSuite;
		public static TLS_KRB5_EXPORT_WITH_DES_CBC_40_MD5: okhttp3.CipherSuite;
		public static TLS_KRB5_EXPORT_WITH_RC4_40_MD5: okhttp3.CipherSuite;
		public static TLS_RSA_WITH_AES_128_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DHE_DSS_WITH_AES_128_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DHE_RSA_WITH_AES_128_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DH_anon_WITH_AES_128_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_RSA_WITH_AES_256_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DHE_DSS_WITH_AES_256_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DHE_RSA_WITH_AES_256_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DH_anon_WITH_AES_256_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_RSA_WITH_NULL_SHA256: okhttp3.CipherSuite;
		public static TLS_RSA_WITH_AES_128_CBC_SHA256: okhttp3.CipherSuite;
		public static TLS_RSA_WITH_AES_256_CBC_SHA256: okhttp3.CipherSuite;
		public static TLS_DHE_DSS_WITH_AES_128_CBC_SHA256: okhttp3.CipherSuite;
		public static TLS_RSA_WITH_CAMELLIA_128_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DHE_DSS_WITH_CAMELLIA_128_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DHE_RSA_WITH_CAMELLIA_128_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DHE_RSA_WITH_AES_128_CBC_SHA256: okhttp3.CipherSuite;
		public static TLS_DHE_DSS_WITH_AES_256_CBC_SHA256: okhttp3.CipherSuite;
		public static TLS_DHE_RSA_WITH_AES_256_CBC_SHA256: okhttp3.CipherSuite;
		public static TLS_DH_anon_WITH_AES_128_CBC_SHA256: okhttp3.CipherSuite;
		public static TLS_DH_anon_WITH_AES_256_CBC_SHA256: okhttp3.CipherSuite;
		public static TLS_RSA_WITH_CAMELLIA_256_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DHE_DSS_WITH_CAMELLIA_256_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DHE_RSA_WITH_CAMELLIA_256_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_PSK_WITH_RC4_128_SHA: okhttp3.CipherSuite;
		public static TLS_PSK_WITH_3DES_EDE_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_PSK_WITH_AES_128_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_PSK_WITH_AES_256_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_RSA_WITH_SEED_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_RSA_WITH_AES_128_GCM_SHA256: okhttp3.CipherSuite;
		public static TLS_RSA_WITH_AES_256_GCM_SHA384: okhttp3.CipherSuite;
		public static TLS_DHE_RSA_WITH_AES_128_GCM_SHA256: okhttp3.CipherSuite;
		public static TLS_DHE_RSA_WITH_AES_256_GCM_SHA384: okhttp3.CipherSuite;
		public static TLS_DHE_DSS_WITH_AES_128_GCM_SHA256: okhttp3.CipherSuite;
		public static TLS_DHE_DSS_WITH_AES_256_GCM_SHA384: okhttp3.CipherSuite;
		public static TLS_DH_anon_WITH_AES_128_GCM_SHA256: okhttp3.CipherSuite;
		public static TLS_DH_anon_WITH_AES_256_GCM_SHA384: okhttp3.CipherSuite;
		public static TLS_EMPTY_RENEGOTIATION_INFO_SCSV: okhttp3.CipherSuite;
		public static TLS_FALLBACK_SCSV: okhttp3.CipherSuite;
		public static TLS_ECDH_ECDSA_WITH_NULL_SHA: okhttp3.CipherSuite;
		public static TLS_ECDH_ECDSA_WITH_RC4_128_SHA: okhttp3.CipherSuite;
		public static TLS_ECDH_ECDSA_WITH_3DES_EDE_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDH_ECDSA_WITH_AES_128_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDH_ECDSA_WITH_AES_256_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDHE_ECDSA_WITH_NULL_SHA: okhttp3.CipherSuite;
		public static TLS_ECDHE_ECDSA_WITH_RC4_128_SHA: okhttp3.CipherSuite;
		public static TLS_ECDHE_ECDSA_WITH_3DES_EDE_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDH_RSA_WITH_NULL_SHA: okhttp3.CipherSuite;
		public static TLS_ECDH_RSA_WITH_RC4_128_SHA: okhttp3.CipherSuite;
		public static TLS_ECDH_RSA_WITH_3DES_EDE_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDH_RSA_WITH_AES_128_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDH_RSA_WITH_AES_256_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDHE_RSA_WITH_NULL_SHA: okhttp3.CipherSuite;
		public static TLS_ECDHE_RSA_WITH_RC4_128_SHA: okhttp3.CipherSuite;
		public static TLS_ECDHE_RSA_WITH_3DES_EDE_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDH_anon_WITH_NULL_SHA: okhttp3.CipherSuite;
		public static TLS_ECDH_anon_WITH_RC4_128_SHA: okhttp3.CipherSuite;
		public static TLS_ECDH_anon_WITH_3DES_EDE_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDH_anon_WITH_AES_128_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDH_anon_WITH_AES_256_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256: okhttp3.CipherSuite;
		public static TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384: okhttp3.CipherSuite;
		public static TLS_ECDH_ECDSA_WITH_AES_128_CBC_SHA256: okhttp3.CipherSuite;
		public static TLS_ECDH_ECDSA_WITH_AES_256_CBC_SHA384: okhttp3.CipherSuite;
		public static TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256: okhttp3.CipherSuite;
		public static TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384: okhttp3.CipherSuite;
		public static TLS_ECDH_RSA_WITH_AES_128_CBC_SHA256: okhttp3.CipherSuite;
		public static TLS_ECDH_RSA_WITH_AES_256_CBC_SHA384: okhttp3.CipherSuite;
		public static TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256: okhttp3.CipherSuite;
		public static TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384: okhttp3.CipherSuite;
		public static TLS_ECDH_ECDSA_WITH_AES_128_GCM_SHA256: okhttp3.CipherSuite;
		public static TLS_ECDH_ECDSA_WITH_AES_256_GCM_SHA384: okhttp3.CipherSuite;
		public static TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256: okhttp3.CipherSuite;
		public static TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384: okhttp3.CipherSuite;
		public static TLS_ECDH_RSA_WITH_AES_128_GCM_SHA256: okhttp3.CipherSuite;
		public static TLS_ECDH_RSA_WITH_AES_256_GCM_SHA384: okhttp3.CipherSuite;
		public static TLS_ECDHE_PSK_WITH_AES_128_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDHE_PSK_WITH_AES_256_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256: okhttp3.CipherSuite;
		public static TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256: okhttp3.CipherSuite;
		public static TLS_DHE_RSA_WITH_CHACHA20_POLY1305_SHA256: okhttp3.CipherSuite;
		public static TLS_ECDHE_PSK_WITH_CHACHA20_POLY1305_SHA256: okhttp3.CipherSuite;
		public static TLS_AES_128_GCM_SHA256: okhttp3.CipherSuite;
		public static TLS_AES_256_GCM_SHA384: okhttp3.CipherSuite;
		public static TLS_CHACHA20_POLY1305_SHA256: okhttp3.CipherSuite;
		public static TLS_AES_128_CCM_SHA256: okhttp3.CipherSuite;
		public static TLS_AES_128_CCM_8_SHA256: okhttp3.CipherSuite;
		public javaName(): string;
		public toString(): string;
		public static forJavaName(javaName: string): okhttp3.CipherSuite;
	}
}

declare module okhttp3 {
	export class Connection extends java.lang.Object {
		public static class: java.lang.Class<okhttp3.Connection>;
		/**
		 * Constructs a new instance of the okhttp3.Connection interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			route(): okhttp3.Route;
			socket(): java.net.Socket;
			handshake(): okhttp3.Handshake;
			protocol(): okhttp3.Protocol;
		});
		public constructor();
		public route(): okhttp3.Route;
		public protocol(): okhttp3.Protocol;
		public handshake(): okhttp3.Handshake;
		public socket(): java.net.Socket;
	}
}

declare module okhttp3 {
	export class ConnectionPool extends java.lang.Object {
		public static class: java.lang.Class<okhttp3.ConnectionPool>;
		public constructor();
		public constructor(maxIdleConnections: number, keepAliveDuration: number, timeUnit: java.util.concurrent.TimeUnit);
		public connectionCount(): number;
		public evictAll(): void;
		public idleConnectionCount(): number;
	}
}

declare module okhttp3 {
	export class ConnectionSpec extends java.lang.Object {
		public static class: java.lang.Class<okhttp3.ConnectionSpec>;
		public static RESTRICTED_TLS: okhttp3.ConnectionSpec;
		public static MODERN_TLS: okhttp3.ConnectionSpec;
		public static COMPATIBLE_TLS: okhttp3.ConnectionSpec;
		public static CLEARTEXT: okhttp3.ConnectionSpec;
		public cipherSuites(): java.util.List<okhttp3.CipherSuite>;
		public equals(obj: any): boolean;
		public equals(other: any): boolean;
		public tlsVersions(): java.util.List<okhttp3.TlsVersion>;
		public supportsTlsExtensions(): boolean;
		public isCompatible(socket: javax.net.ssl.SSLSocket): boolean;
		public hashCode(): number;
		public isTls(): boolean;
		public toString(): string;
	}
	export module ConnectionSpec {
		export class Builder extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.ConnectionSpec.Builder>;
			public build(): okhttp3.ConnectionSpec;
			public cipherSuites(cipherSuites: native.Array<okhttp3.CipherSuite>): okhttp3.ConnectionSpec.Builder;
			public cipherSuites(cipherSuites: native.Array<string>): okhttp3.ConnectionSpec.Builder;
			public allEnabledCipherSuites(): okhttp3.ConnectionSpec.Builder;
			/** @deprecated */
			public supportsTlsExtensions(supportsTlsExtensions: boolean): okhttp3.ConnectionSpec.Builder;
			public tlsVersions(tlsVersions: native.Array<okhttp3.TlsVersion>): okhttp3.ConnectionSpec.Builder;
			public allEnabledTlsVersions(): okhttp3.ConnectionSpec.Builder;
			public tlsVersions(tlsVersions: native.Array<string>): okhttp3.ConnectionSpec.Builder;
			public constructor(connectionSpec: okhttp3.ConnectionSpec);
		}
	}
}

declare module okhttp3 {
	export class Cookie extends java.lang.Object {
		public static class: java.lang.Class<okhttp3.Cookie>;
		public domain(): string;
		public equals(other: any): boolean;
		public matches(url: okhttp3.HttpUrl): boolean;
		public toString(): string;
		public static parse(url: okhttp3.HttpUrl, setCookie: string): okhttp3.Cookie;
		public persistent(): boolean;
		public static parseAll(url: okhttp3.HttpUrl, headers: okhttp3.Headers): java.util.List<okhttp3.Cookie>;
		public httpOnly(): boolean;
		public hostOnly(): boolean;
		public equals(obj: any): boolean;
		public expiresAt(): number;
		public hashCode(): number;
		public name(): string;
		public path(): string;
		public secure(): boolean;
		public value(): string;
	}
	export module Cookie {
		export class Builder extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.Cookie.Builder>;
			public httpOnly(): okhttp3.Cookie.Builder;
			public value(value: string): okhttp3.Cookie.Builder;
			public secure(): okhttp3.Cookie.Builder;
			public name(name: string): okhttp3.Cookie.Builder;
			public build(): okhttp3.Cookie;
			public expiresAt(expiresAt: number): okhttp3.Cookie.Builder;
			public domain(domain: string): okhttp3.Cookie.Builder;
			public hostOnlyDomain(domain: string): okhttp3.Cookie.Builder;
			public constructor();
			public path(path: string): okhttp3.Cookie.Builder;
		}
	}
}

declare module okhttp3 {
	export class CookieJar extends java.lang.Object {
		public static class: java.lang.Class<okhttp3.CookieJar>;
		/**
		 * Constructs a new instance of the okhttp3.CookieJar interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			saveFromResponse(httpUrl0: okhttp3.HttpUrl, list1: java.util.List<okhttp3.Cookie>): void;
			loadForRequest(httpUrl0: okhttp3.HttpUrl): java.util.List<okhttp3.Cookie>;
		});
		public constructor();
		public static NO_COOKIES: okhttp3.CookieJar;
		public saveFromResponse(httpUrl0: okhttp3.HttpUrl, list1: java.util.List<okhttp3.Cookie>): void;
		public loadForRequest(httpUrl0: okhttp3.HttpUrl): java.util.List<okhttp3.Cookie>;
	}
}

declare module okhttp3 {
	export class Credentials extends java.lang.Object {
		public static class: java.lang.Class<okhttp3.Credentials>;
		public static basic(username: string, password: string, charset: java.nio.charset.Charset): string;
		public static basic(username: string, password: string): string;
	}
}

declare module okhttp3 {
	export class Dispatcher extends java.lang.Object {
		public static class: java.lang.Class<okhttp3.Dispatcher>;
		public constructor();
		public constructor(executorService: java.util.concurrent.ExecutorService);
		public queuedCallsCount(): number;
		public runningCallsCount(): number;
		public runningCalls(): java.util.List<okhttp3.Call>;
		public setMaxRequestsPerHost(maxRequestsPerHost: number): void;
		public cancelAll(): void;
		public setMaxRequests(maxRequests: number): void;
		public queuedCalls(): java.util.List<okhttp3.Call>;
		public getMaxRequestsPerHost(): number;
		public executorService(): java.util.concurrent.ExecutorService;
		public setIdleCallback(idleCallback: java.lang.Runnable): void;
		public getMaxRequests(): number;
	}
}

declare module okhttp3 {
	export class Dns extends java.lang.Object {
		public static class: java.lang.Class<okhttp3.Dns>;
		/**
		 * Constructs a new instance of the okhttp3.Dns interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			lookup(string0: string): java.util.List<java.net.InetAddress>;
			lambda$static$0(hostname: string): java.util.List<any>;
		});
		public constructor();
		public static SYSTEM: okhttp3.Dns;
		public lookup(string0: string): java.util.List<java.net.InetAddress>;
	}
}

declare module okhttp3 {
	export abstract class EventListener extends java.lang.Object {
		public static class: java.lang.Class<okhttp3.EventListener>;
		public static NONE: okhttp3.EventListener;
		public constructor();
		public dnsEnd(call: okhttp3.Call, domainName: string, inetAddressList: java.util.List<java.net.InetAddress>): void;
		public connectStart(call: okhttp3.Call, inetSocketAddress: java.net.InetSocketAddress, proxy: java.net.Proxy): void;
		public responseBodyStart(call: okhttp3.Call): void;
		public secureConnectEnd(call: okhttp3.Call, handshake: okhttp3.Handshake): void;
		public requestHeadersStart(call: okhttp3.Call): void;
		public secureConnectStart(call: okhttp3.Call): void;
		public requestBodyStart(call: okhttp3.Call): void;
		public responseFailed(call: okhttp3.Call, ioe: java.io.IOException): void;
		public responseBodyEnd(call: okhttp3.Call, byteCount: number): void;
		public requestFailed(call: okhttp3.Call, ioe: java.io.IOException): void;
		public connectionReleased(call: okhttp3.Call, connection: okhttp3.Connection): void;
		public requestBodyEnd(call: okhttp3.Call, byteCount: number): void;
		public requestHeadersEnd(call: okhttp3.Call, request: okhttp3.Request): void;
		public connectEnd(call: okhttp3.Call, inetSocketAddress: java.net.InetSocketAddress, proxy: java.net.Proxy, protocol: okhttp3.Protocol): void;
		public dnsStart(call: okhttp3.Call, domainName: string): void;
		public connectionAcquired(call: okhttp3.Call, connection: okhttp3.Connection): void;
		public callEnd(call: okhttp3.Call): void;
		public callStart(call: okhttp3.Call): void;
		public responseHeadersStart(call: okhttp3.Call): void;
		public connectFailed(call: okhttp3.Call, inetSocketAddress: java.net.InetSocketAddress, proxy: java.net.Proxy, protocol: okhttp3.Protocol, ioe: java.io.IOException): void;
		public callFailed(call: okhttp3.Call, ioe: java.io.IOException): void;
		public responseHeadersEnd(call: okhttp3.Call, response: okhttp3.Response): void;
	}
	export module EventListener {
		export class Factory extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.EventListener.Factory>;
			/**
			 * Constructs a new instance of the okhttp3.EventListener$Factory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				create(call0: okhttp3.Call): okhttp3.EventListener;
			});
			public constructor();
			public create(call0: okhttp3.Call): okhttp3.EventListener;
		}
	}
}

declare module okhttp3 {
	export class FormBody extends okhttp3.RequestBody {
		public static class: java.lang.Class<okhttp3.FormBody>;
		public encodedValue(index: number): string;
		public encodedName(index: number): string;
		public value(index: number): string;
		public size(): number;
		public writeTo(bufferedSink0: okio.BufferedSink): void;
		public writeTo(sink: okio.BufferedSink): void;
		public name(index: number): string;
		public contentType(): okhttp3.MediaType;
		public contentLength(): number;
	}
	export module FormBody {
		export class Builder extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.FormBody.Builder>;
			public addEncoded(name: string, value: string): okhttp3.FormBody.Builder;
			public constructor(charset: java.nio.charset.Charset);
			public add(name: string, value: string): okhttp3.FormBody.Builder;
			public constructor();
			public build(): okhttp3.FormBody;
		}
	}
}

declare module okhttp3 {
	export class Handshake extends java.lang.Object {
		public static class: java.lang.Class<okhttp3.Handshake>;
		public static get(tlsVersion: okhttp3.TlsVersion, cipherSuite: okhttp3.CipherSuite, peerCertificates: java.util.List<java.security.cert.Certificate>, localCertificates: java.util.List<java.security.cert.Certificate>): okhttp3.Handshake;
		public equals(obj: any): boolean;
		public equals(other: any): boolean;
		public hashCode(): number;
		public localCertificates(): java.util.List<java.security.cert.Certificate>;
		public localPrincipal(): java.security.Principal;
		public tlsVersion(): okhttp3.TlsVersion;
		public peerCertificates(): java.util.List<java.security.cert.Certificate>;
		public toString(): string;
		public peerPrincipal(): java.security.Principal;
		public static get(session: javax.net.ssl.SSLSession): okhttp3.Handshake;
		public cipherSuite(): okhttp3.CipherSuite;
	}
}

declare module okhttp3 {
	export class Headers extends java.lang.Object {
		public static class: java.lang.Class<okhttp3.Headers>;
		public newBuilder(): okhttp3.Headers.Builder;
		public equals(other: any): boolean;
		public static of(namesAndValues: native.Array<string>): okhttp3.Headers;
		public static of(headers: java.util.Map<string,string>): okhttp3.Headers;
		public toString(): string;
		public getDate(name: string): java.util.Date;
		public get(name: string): string;
		public equals(obj: any): boolean;
		public names(): java.util.Set<string>;
		public value(index: number): string;
		public size(): number;
		public hashCode(): number;
		public toMultimap(): java.util.Map<string,java.util.List<string>>;
		public getInstant(name: string): java.time.Instant;
		public byteCount(): number;
		public name(index: number): string;
		public values(name: string): java.util.List<string>;
	}
	export module Headers {
		export class Builder extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.Headers.Builder>;
			public add(line: string): okhttp3.Headers.Builder;
			public build(): okhttp3.Headers;
			public removeAll(name: string): okhttp3.Headers.Builder;
			public addUnsafeNonAscii(name: string, value: string): okhttp3.Headers.Builder;
			public constructor();
			public add(name: string, value: string): okhttp3.Headers.Builder;
			public set(name: string, value: string): okhttp3.Headers.Builder;
			public get(name: string): string;
			public set(name: string, value: java.util.Date): okhttp3.Headers.Builder;
			public set(name: string, value: java.time.Instant): okhttp3.Headers.Builder;
			public add(name: string, value: java.time.Instant): okhttp3.Headers.Builder;
			public addAll(headers: okhttp3.Headers): okhttp3.Headers.Builder;
			public add(name: string, value: java.util.Date): okhttp3.Headers.Builder;
		}
	}
}

declare module okhttp3 {
	export class HttpUrl extends java.lang.Object {
		public static class: java.lang.Class<okhttp3.HttpUrl>;
		public topPrivateDomain(): string;
		public scheme(): string;
		public newBuilder(link: string): okhttp3.HttpUrl.Builder;
		public queryParameterName(index: number): string;
		public queryParameterNames(): java.util.Set<string>;
		public encodedPassword(): string;
		public queryParameter(name: string): string;
		public query(): string;
		public static parse(url: string): okhttp3.HttpUrl;
		public password(): string;
		public hashCode(): number;
		public pathSize(): number;
		public isHttps(): boolean;
		public encodedPathSegments(): java.util.List<string>;
		public newBuilder(): okhttp3.HttpUrl.Builder;
		public equals(other: any): boolean;
		public queryParameterValue(index: number): string;
		public port(): number;
		public encodedQuery(): string;
		public encodedPath(): string;
		public encodedFragment(): string;
		public redact(): string;
		public fragment(): string;
		public toString(): string;
		public uri(): java.net.URI;
		public static get(uri: java.net.URI): okhttp3.HttpUrl;
		public queryParameterValues(name: string): java.util.List<string>;
		public static get(url: string): okhttp3.HttpUrl;
		public static get(url: java.net.URL): okhttp3.HttpUrl;
		public encodedUsername(): string;
		public equals(obj: any): boolean;
		public static defaultPort(scheme: string): number;
		public host(): string;
		public pathSegments(): java.util.List<string>;
		public resolve(link: string): okhttp3.HttpUrl;
		public url(): java.net.URL;
		public querySize(): number;
		public username(): string;
	}
	export module HttpUrl {
		export class Builder extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.HttpUrl.Builder>;
			public fragment(fragment: string): okhttp3.HttpUrl.Builder;
			public removeAllQueryParameters(name: string): okhttp3.HttpUrl.Builder;
			public removeAllEncodedQueryParameters(encodedName: string): okhttp3.HttpUrl.Builder;
			public addEncodedQueryParameter(encodedName: string, encodedValue: string): okhttp3.HttpUrl.Builder;
			public setQueryParameter(name: string, value: string): okhttp3.HttpUrl.Builder;
			public addQueryParameter(name: string, value: string): okhttp3.HttpUrl.Builder;
			public addEncodedPathSegment(encodedPathSegment: string): okhttp3.HttpUrl.Builder;
			public scheme(scheme: string): okhttp3.HttpUrl.Builder;
			public addPathSegment(pathSegment: string): okhttp3.HttpUrl.Builder;
			public host(host: string): okhttp3.HttpUrl.Builder;
			public encodedQuery(encodedQuery: string): okhttp3.HttpUrl.Builder;
			public encodedPassword(encodedPassword: string): okhttp3.HttpUrl.Builder;
			public encodedPath(encodedPath: string): okhttp3.HttpUrl.Builder;
			public setEncodedQueryParameter(encodedName: string, encodedValue: string): okhttp3.HttpUrl.Builder;
			public query(query: string): okhttp3.HttpUrl.Builder;
			public addPathSegments(pathSegments: string): okhttp3.HttpUrl.Builder;
			public setPathSegment(index: number, pathSegment: string): okhttp3.HttpUrl.Builder;
			public constructor();
			public addEncodedPathSegments(encodedPathSegments: string): okhttp3.HttpUrl.Builder;
			public port(port: number): okhttp3.HttpUrl.Builder;
			public toString(): string;
			public username(username: string): okhttp3.HttpUrl.Builder;
			public password(password: string): okhttp3.HttpUrl.Builder;
			public encodedUsername(encodedUsername: string): okhttp3.HttpUrl.Builder;
			public encodedFragment(encodedFragment: string): okhttp3.HttpUrl.Builder;
			public setEncodedPathSegment(index: number, encodedPathSegment: string): okhttp3.HttpUrl.Builder;
			public removePathSegment(index: number): okhttp3.HttpUrl.Builder;
			public build(): okhttp3.HttpUrl;
		}
	}
}

declare module okhttp3 {
	export class Interceptor extends java.lang.Object {
		public static class: java.lang.Class<okhttp3.Interceptor>;
		/**
		 * Constructs a new instance of the okhttp3.Interceptor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			intercept(chain0: okhttp3.Interceptor.Chain): okhttp3.Response;
		});
		public constructor();
		public intercept(chain0: okhttp3.Interceptor.Chain): okhttp3.Response;
	}
	export module Interceptor {
		export class Chain extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.Interceptor.Chain>;
			/**
			 * Constructs a new instance of the okhttp3.Interceptor$Chain interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				request(): okhttp3.Request;
				proceed(request0: okhttp3.Request): okhttp3.Response;
				connection(): okhttp3.Connection;
				call(): okhttp3.Call;
				connectTimeoutMillis(): number;
				withConnectTimeout(int0: number, timeUnit1: java.util.concurrent.TimeUnit): okhttp3.Interceptor.Chain;
				readTimeoutMillis(): number;
				withReadTimeout(int0: number, timeUnit1: java.util.concurrent.TimeUnit): okhttp3.Interceptor.Chain;
				writeTimeoutMillis(): number;
				withWriteTimeout(int0: number, timeUnit1: java.util.concurrent.TimeUnit): okhttp3.Interceptor.Chain;
			});
			public constructor();
			public request(): okhttp3.Request;
			public withReadTimeout(int0: number, timeUnit1: java.util.concurrent.TimeUnit): okhttp3.Interceptor.Chain;
			public call(): okhttp3.Call;
			public withConnectTimeout(int0: number, timeUnit1: java.util.concurrent.TimeUnit): okhttp3.Interceptor.Chain;
			public withWriteTimeout(int0: number, timeUnit1: java.util.concurrent.TimeUnit): okhttp3.Interceptor.Chain;
			public readTimeoutMillis(): number;
			public proceed(request0: okhttp3.Request): okhttp3.Response;
			public connection(): okhttp3.Connection;
			public connectTimeoutMillis(): number;
			public writeTimeoutMillis(): number;
		}
	}
}

declare module okhttp3 {
	export class MediaType extends java.lang.Object {
		public static class: java.lang.Class<okhttp3.MediaType>;
		public type(): string;
		public charset(): java.nio.charset.Charset;
		public equals(obj: any): boolean;
		public subtype(): string;
		public equals(other: any): boolean;
		public static parse(string: string): okhttp3.MediaType;
		public hashCode(): number;
		public charset(defaultValue: java.nio.charset.Charset): java.nio.charset.Charset;
		public static get(string: string): okhttp3.MediaType;
		public toString(): string;
	}
}

declare module okhttp3 {
	export class MultipartBody extends okhttp3.RequestBody {
		public static class: java.lang.Class<okhttp3.MultipartBody>;
		public static MIXED: okhttp3.MediaType;
		public static ALTERNATIVE: okhttp3.MediaType;
		public static DIGEST: okhttp3.MediaType;
		public static PARALLEL: okhttp3.MediaType;
		public static FORM: okhttp3.MediaType;
		public boundary(): string;
		public size(): number;
		public parts(): java.util.List<okhttp3.MultipartBody.Part>;
		public writeTo(bufferedSink0: okio.BufferedSink): void;
		public part(index: number): okhttp3.MultipartBody.Part;
		public writeTo(sink: okio.BufferedSink): void;
		public type(): okhttp3.MediaType;
		public contentType(): okhttp3.MediaType;
		public contentLength(): number;
	}
	export module MultipartBody {
		export class Builder extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.MultipartBody.Builder>;
			public addFormDataPart(name: string, value: string): okhttp3.MultipartBody.Builder;
			public setType(type: okhttp3.MediaType): okhttp3.MultipartBody.Builder;
			public constructor(boundary: string);
			public addPart(part: okhttp3.MultipartBody.Part): okhttp3.MultipartBody.Builder;
			public build(): okhttp3.MultipartBody;
			public addPart(headers: okhttp3.Headers, body: okhttp3.RequestBody): okhttp3.MultipartBody.Builder;
			public addFormDataPart(name: string, filename: string, body: okhttp3.RequestBody): okhttp3.MultipartBody.Builder;
			public constructor();
			public addPart(body: okhttp3.RequestBody): okhttp3.MultipartBody.Builder;
		}
		export class Part extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.MultipartBody.Part>;
			public headers(): okhttp3.Headers;
			public static createFormData(name: string, filename: string, body: okhttp3.RequestBody): okhttp3.MultipartBody.Part;
			public static create(headers: okhttp3.Headers, body: okhttp3.RequestBody): okhttp3.MultipartBody.Part;
			public static create(body: okhttp3.RequestBody): okhttp3.MultipartBody.Part;
			public static createFormData(name: string, value: string): okhttp3.MultipartBody.Part;
			public body(): okhttp3.RequestBody;
		}
	}
}

declare module okhttp3 {
	export class OkHttpClient extends java.lang.Object implements java.lang.Cloneable, okhttp3.Call.Factory, okhttp3.WebSocket.Factory {
		public static class: java.lang.Class<okhttp3.OkHttpClient>;
		public proxy(): java.net.Proxy;
		public sslSocketFactory(): javax.net.ssl.SSLSocketFactory;
		public connectionPool(): okhttp3.ConnectionPool;
		public cache(): okhttp3.Cache;
		public certificatePinner(): okhttp3.CertificatePinner;
		public dispatcher(): okhttp3.Dispatcher;
		public protocols(): java.util.List<okhttp3.Protocol>;
		public dns(): okhttp3.Dns;
		public proxyAuthenticator(): okhttp3.Authenticator;
		public callTimeoutMillis(): number;
		public hostnameVerifier(): javax.net.ssl.HostnameVerifier;
		public newCall(request: okhttp3.Request): okhttp3.Call;
		public connectTimeoutMillis(): number;
		public pingIntervalMillis(): number;
		public cookieJar(): okhttp3.CookieJar;
		public connectionSpecs(): java.util.List<okhttp3.ConnectionSpec>;
		public newWebSocket(request: okhttp3.Request, listener: okhttp3.WebSocketListener): okhttp3.WebSocket;
		public newBuilder(): okhttp3.OkHttpClient.Builder;
		public constructor();
		public proxySelector(): java.net.ProxySelector;
		public readTimeoutMillis(): number;
		public authenticator(): okhttp3.Authenticator;
		public followRedirects(): boolean;
		public interceptors(): java.util.List<okhttp3.Interceptor>;
		public writeTimeoutMillis(): number;
		public followSslRedirects(): boolean;
		public socketFactory(): javax.net.SocketFactory;
		public retryOnConnectionFailure(): boolean;
		public networkInterceptors(): java.util.List<okhttp3.Interceptor>;
		public eventListenerFactory(): okhttp3.EventListener.Factory;
	}
	export module OkHttpClient {
		export class Builder extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.OkHttpClient.Builder>;
			public socketFactory(socketFactory: javax.net.SocketFactory): okhttp3.OkHttpClient.Builder;
			public sslSocketFactory(sslSocketFactory: javax.net.ssl.SSLSocketFactory, trustManager: javax.net.ssl.X509TrustManager): okhttp3.OkHttpClient.Builder;
			public interceptors(): java.util.List<okhttp3.Interceptor>;
			public proxy(proxy: java.net.Proxy): okhttp3.OkHttpClient.Builder;
			public callTimeout(duration: java.time.Duration): okhttp3.OkHttpClient.Builder;
			public pingInterval(interval: number, unit: java.util.concurrent.TimeUnit): okhttp3.OkHttpClient.Builder;
			/** @deprecated */
			public sslSocketFactory(sslSocketFactory: javax.net.ssl.SSLSocketFactory): okhttp3.OkHttpClient.Builder;
			public addInterceptor(interceptor: okhttp3.Interceptor): okhttp3.OkHttpClient.Builder;
			public writeTimeout(duration: java.time.Duration): okhttp3.OkHttpClient.Builder;
			public readTimeout(duration: java.time.Duration): okhttp3.OkHttpClient.Builder;
			public build(): okhttp3.OkHttpClient;
			public followSslRedirects(followProtocolRedirects: boolean): okhttp3.OkHttpClient.Builder;
			public networkInterceptors(): java.util.List<okhttp3.Interceptor>;
			public protocols(protocols: java.util.List<okhttp3.Protocol>): okhttp3.OkHttpClient.Builder;
			public proxySelector(proxySelector: java.net.ProxySelector): okhttp3.OkHttpClient.Builder;
			public followRedirects(followRedirects: boolean): okhttp3.OkHttpClient.Builder;
			public cache(cache: okhttp3.Cache): okhttp3.OkHttpClient.Builder;
			public authenticator(authenticator: okhttp3.Authenticator): okhttp3.OkHttpClient.Builder;
			public proxyAuthenticator(proxyAuthenticator: okhttp3.Authenticator): okhttp3.OkHttpClient.Builder;
			public connectionSpecs(connectionSpecs: java.util.List<okhttp3.ConnectionSpec>): okhttp3.OkHttpClient.Builder;
			public retryOnConnectionFailure(retryOnConnectionFailure: boolean): okhttp3.OkHttpClient.Builder;
			public constructor();
			public dispatcher(dispatcher: okhttp3.Dispatcher): okhttp3.OkHttpClient.Builder;
			public dns(dns: okhttp3.Dns): okhttp3.OkHttpClient.Builder;
			public readTimeout(timeout: number, unit: java.util.concurrent.TimeUnit): okhttp3.OkHttpClient.Builder;
			public cookieJar(cookieJar: okhttp3.CookieJar): okhttp3.OkHttpClient.Builder;
			public certificatePinner(certificatePinner: okhttp3.CertificatePinner): okhttp3.OkHttpClient.Builder;
			public hostnameVerifier(hostnameVerifier: javax.net.ssl.HostnameVerifier): okhttp3.OkHttpClient.Builder;
			public connectTimeout(timeout: number, unit: java.util.concurrent.TimeUnit): okhttp3.OkHttpClient.Builder;
			public eventListener(eventListener: okhttp3.EventListener): okhttp3.OkHttpClient.Builder;
			public connectTimeout(duration: java.time.Duration): okhttp3.OkHttpClient.Builder;
			public callTimeout(timeout: number, unit: java.util.concurrent.TimeUnit): okhttp3.OkHttpClient.Builder;
			public writeTimeout(timeout: number, unit: java.util.concurrent.TimeUnit): okhttp3.OkHttpClient.Builder;
			public pingInterval(duration: java.time.Duration): okhttp3.OkHttpClient.Builder;
			public addNetworkInterceptor(interceptor: okhttp3.Interceptor): okhttp3.OkHttpClient.Builder;
			public eventListenerFactory(eventListenerFactory: okhttp3.EventListener.Factory): okhttp3.OkHttpClient.Builder;
			public connectionPool(connectionPool: okhttp3.ConnectionPool): okhttp3.OkHttpClient.Builder;
		}
	}
}

declare module okhttp3 {
	export class Protocol {
		public static class: java.lang.Class<okhttp3.Protocol>;
		public static HTTP_1_0: okhttp3.Protocol;
		public static HTTP_1_1: okhttp3.Protocol;
		public static SPDY_3: okhttp3.Protocol;
		public static HTTP_2: okhttp3.Protocol;
		public static H2_PRIOR_KNOWLEDGE: okhttp3.Protocol;
		public static QUIC: okhttp3.Protocol;
		public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
		public static values(): native.Array<okhttp3.Protocol>;
		public static get(protocol: string): okhttp3.Protocol;
		public toString(): string;
		public static valueOf(name: string): okhttp3.Protocol;
	}
}

declare module okhttp3 {
	export class RealCall extends java.lang.Object implements okhttp3.Call {
		public static class: java.lang.Class<okhttp3.RealCall>;
		public clone(): okhttp3.RealCall;
		public isExecuted(): boolean;
		public clone(): okhttp3.Call;
		public request(): okhttp3.Request;
		public execute(): okhttp3.Response;
		public enqueue(responseCallback: okhttp3.Callback): void;
		public isCanceled(): boolean;
		public clone(): any;
		public cancel(): void;
		public timeout(): okio.Timeout;
	}
	export module RealCall {
		export class AsyncCall extends okhttp3.internal.NamedRunnable {
			public static class: java.lang.Class<okhttp3.RealCall.AsyncCall>;
			public execute(): void;
			public run(): void;
		}
	}
}

declare module okhttp3 {
	export class Request extends java.lang.Object {
		public static class: java.lang.Class<okhttp3.Request>;
		public headers(): okhttp3.Headers;
		public tag(): any;
		public header(name: string): string;
		public newBuilder(): okhttp3.Request.Builder;
		public tag(type: java.lang.Class<any>): any;
		public url(): okhttp3.HttpUrl;
		public cacheControl(): okhttp3.CacheControl;
		public method(): string;
		public toString(): string;
		public headers(name: string): java.util.List<string>;
		public body(): okhttp3.RequestBody;
		public isHttps(): boolean;
	}
	export module Request {
		export class Builder extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.Request.Builder>;
			public url(url: java.net.URL): okhttp3.Request.Builder;
			public cacheControl(cacheControl: okhttp3.CacheControl): okhttp3.Request.Builder;
			public headers(headers: okhttp3.Headers): okhttp3.Request.Builder;
			public patch(body: okhttp3.RequestBody): okhttp3.Request.Builder;
			public removeHeader(name: string): okhttp3.Request.Builder;
			public delete(): okhttp3.Request.Builder;
			public header(name: string, value: string): okhttp3.Request.Builder;
			public get(): okhttp3.Request.Builder;
			public put(body: okhttp3.RequestBody): okhttp3.Request.Builder;
			public constructor();
			public tag(tag: any): okhttp3.Request.Builder;
			public build(): okhttp3.Request;
			public url(url: string): okhttp3.Request.Builder;
			public addHeader(name: string, value: string): okhttp3.Request.Builder;
			public head(): okhttp3.Request.Builder;
			public delete(body: okhttp3.RequestBody): okhttp3.Request.Builder;
			public url(url: okhttp3.HttpUrl): okhttp3.Request.Builder;
			public method(method: string, body: okhttp3.RequestBody): okhttp3.Request.Builder;
			public post(body: okhttp3.RequestBody): okhttp3.Request.Builder;
			public tag(type: java.lang.Class<any>, tag: any): okhttp3.Request.Builder;
		}
	}
}

declare module okhttp3 {
	export abstract class RequestBody extends java.lang.Object {
		public static class: java.lang.Class<okhttp3.RequestBody>;
		public constructor();
		public static create(contentType: okhttp3.MediaType, content: okio.ByteString): okhttp3.RequestBody;
		public writeTo(bufferedSink0: okio.BufferedSink): void;
		public static create(contentType: okhttp3.MediaType, content: string): okhttp3.RequestBody;
		public isOneShot(): boolean;
		public static create(contentType: okhttp3.MediaType, content: native.Array<number>): okhttp3.RequestBody;
		public contentType(): okhttp3.MediaType;
		public contentLength(): number;
		public isDuplex(): boolean;
		public static create(contentType: okhttp3.MediaType, file: java.io.File): okhttp3.RequestBody;
		public static create(contentType: okhttp3.MediaType, content: native.Array<number>, offset: number, byteCount: number): okhttp3.RequestBody;
	}
}

declare module okhttp3 {
	export class Response extends java.lang.Object implements java.io.Closeable {
		public static class: java.lang.Class<okhttp3.Response>;
		public peekBody(byteCount: number): okhttp3.ResponseBody;
		public headers(): okhttp3.Headers;
		public priorResponse(): okhttp3.Response;
		public header(name: string): string;
		public header(name: string, defaultValue: string): string;
		public close(): void;
		public cacheResponse(): okhttp3.Response;
		public sentRequestAtMillis(): number;
		public cacheControl(): okhttp3.CacheControl;
		public toString(): string;
		public handshake(): okhttp3.Handshake;
		public headers(name: string): java.util.List<string>;
		public isSuccessful(): boolean;
		public body(): okhttp3.ResponseBody;
		public networkResponse(): okhttp3.Response;
		public trailers(): okhttp3.Headers;
		public newBuilder(): okhttp3.Response.Builder;
		public request(): okhttp3.Request;
		public code(): number;
		public protocol(): okhttp3.Protocol;
		public message(): string;
		public challenges(): java.util.List<okhttp3.Challenge>;
		public receivedResponseAtMillis(): number;
		public isRedirect(): boolean;
	}
	export module Response {
		export class Builder extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.Response.Builder>;
			public handshake(handshake: okhttp3.Handshake): okhttp3.Response.Builder;
			public priorResponse(priorResponse: okhttp3.Response): okhttp3.Response.Builder;
			public receivedResponseAtMillis(receivedResponseAtMillis: number): okhttp3.Response.Builder;
			public protocol(protocol: okhttp3.Protocol): okhttp3.Response.Builder;
			public removeHeader(name: string): okhttp3.Response.Builder;
			public constructor();
			public message(message: string): okhttp3.Response.Builder;
			public addHeader(name: string, value: string): okhttp3.Response.Builder;
			public networkResponse(networkResponse: okhttp3.Response): okhttp3.Response.Builder;
			public code(code: number): okhttp3.Response.Builder;
			public header(name: string, value: string): okhttp3.Response.Builder;
			public headers(headers: okhttp3.Headers): okhttp3.Response.Builder;
			public body(body: okhttp3.ResponseBody): okhttp3.Response.Builder;
			public cacheResponse(cacheResponse: okhttp3.Response): okhttp3.Response.Builder;
			public request(request: okhttp3.Request): okhttp3.Response.Builder;
			public sentRequestAtMillis(sentRequestAtMillis: number): okhttp3.Response.Builder;
			public build(): okhttp3.Response;
		}
	}
}

declare module okhttp3 {
	export abstract class ResponseBody extends java.lang.Object implements java.io.Closeable {
		public static class: java.lang.Class<okhttp3.ResponseBody>;
		public constructor();
		public byteStream(): java.io.InputStream;
		public bytes(): native.Array<number>;
		public close(): void;
		public static create(contentType: okhttp3.MediaType, contentLength: number, content: okio.BufferedSource): okhttp3.ResponseBody;
		public source(): okio.BufferedSource;
		public static create(contentType: okhttp3.MediaType, content: okio.ByteString): okhttp3.ResponseBody;
		public charStream(): java.io.Reader;
		public static create(contentType: okhttp3.MediaType, content: native.Array<number>): okhttp3.ResponseBody;
		public static create(contentType: okhttp3.MediaType, content: string): okhttp3.ResponseBody;
		public contentType(): okhttp3.MediaType;
		public string(): string;
		public contentLength(): number;
	}
	export module ResponseBody {
		export class BomAwareReader extends java.io.Reader {
			public static class: java.lang.Class<okhttp3.ResponseBody.BomAwareReader>;
			public read(cbuf: native.Array<string>): number;
			public read(chars0: native.Array<string>, int1: number, int2: number): number;
			public read(target: java.nio.CharBuffer): number;
			public close(): void;
			public read(cbuf: native.Array<string>, off: number, len: number): number;
			public read(): number;
		}
	}
}

declare module okhttp3 {
	export class Route extends java.lang.Object {
		public static class: java.lang.Class<okhttp3.Route>;
		public constructor(address: okhttp3.Address, proxy: java.net.Proxy, inetSocketAddress: java.net.InetSocketAddress);
		public proxy(): java.net.Proxy;
		public equals(obj: any): boolean;
		public equals(other: any): boolean;
		public address(): okhttp3.Address;
		public hashCode(): number;
		public toString(): string;
		public requiresTunnel(): boolean;
		public socketAddress(): java.net.InetSocketAddress;
	}
}

declare module okhttp3 {
	export class TlsVersion {
		public static class: java.lang.Class<okhttp3.TlsVersion>;
		public static TLS_1_3: okhttp3.TlsVersion;
		public static TLS_1_2: okhttp3.TlsVersion;
		public static TLS_1_1: okhttp3.TlsVersion;
		public static TLS_1_0: okhttp3.TlsVersion;
		public static SSL_3_0: okhttp3.TlsVersion;
		public javaName(): string;
		public static valueOf(name: string): okhttp3.TlsVersion;
		public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
		public static values(): native.Array<okhttp3.TlsVersion>;
		public static forJavaName(javaName: string): okhttp3.TlsVersion;
	}
}

declare module okhttp3 {
	export class WebSocket extends java.lang.Object {
		public static class: java.lang.Class<okhttp3.WebSocket>;
		/**
		 * Constructs a new instance of the okhttp3.WebSocket interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			request(): okhttp3.Request;
			queueSize(): number;
			send(string0: string): boolean;
			send(byteString0: okio.ByteString): boolean;
			close(int0: number, string1: string): boolean;
			cancel(): void;
		});
		public constructor();
		public close(int0: number, string1: string): boolean;
		public request(): okhttp3.Request;
		public send(string0: string): boolean;
		public send(byteString0: okio.ByteString): boolean;
		public queueSize(): number;
		public cancel(): void;
	}
	export module WebSocket {
		export class Factory extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.WebSocket.Factory>;
			/**
			 * Constructs a new instance of the okhttp3.WebSocket$Factory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				newWebSocket(request0: okhttp3.Request, webSocketListener1: okhttp3.WebSocketListener): okhttp3.WebSocket;
			});
			public constructor();
			public newWebSocket(request0: okhttp3.Request, webSocketListener1: okhttp3.WebSocketListener): okhttp3.WebSocket;
		}
	}
}

declare module okhttp3 {
	export abstract class WebSocketListener extends java.lang.Object {
		public static class: java.lang.Class<okhttp3.WebSocketListener>;
		public constructor();
		public onOpen(webSocket: okhttp3.WebSocket, response: okhttp3.Response): void;
		public onMessage(webSocket: okhttp3.WebSocket, bytes: okio.ByteString): void;
		public onClosing(webSocket: okhttp3.WebSocket, code: number, reason: string): void;
		public onClosed(webSocket: okhttp3.WebSocket, code: number, reason: string): void;
		public onMessage(webSocket: okhttp3.WebSocket, text: string): void;
		public onFailure(webSocket: okhttp3.WebSocket, t: java.lang.Throwable, response: okhttp3.Response): void;
	}
}

declare module okhttp3 {
	export module internal {
		export abstract class Internal extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.internal.Internal>;
			public static instance: okhttp3.internal.Internal;
			public addLenient(builder0: okhttp3.Headers.Builder, string1: string, string2: string): void;
			public apply(connectionSpec0: okhttp3.ConnectionSpec, sSLSocket1: javax.net.ssl.SSLSocket, boolean2: boolean): void;
			public static initializeInstanceForTests(): void;
			public newWebSocketCall(okHttpClient0: okhttp3.OkHttpClient, request1: okhttp3.Request): okhttp3.Call;
			public addLenient(builder0: okhttp3.Headers.Builder, string1: string): void;
			public exchange(response0: okhttp3.Response): okhttp3.internal.connection.Exchange;
			public realConnectionPool(connectionPool0: okhttp3.ConnectionPool): okhttp3.internal.connection.RealConnectionPool;
			public initExchange(builder0: okhttp3.Response.Builder, exchange1: okhttp3.internal.connection.Exchange): void;
			public constructor();
			public code(builder0: okhttp3.Response.Builder): number;
			public equalsNonHost(address0: okhttp3.Address, address1: okhttp3.Address): boolean;
		}
	}
}

declare module okhttp3 {
	export module internal {
		export abstract class NamedRunnable extends java.lang.Object implements java.lang.Runnable {
			public static class: java.lang.Class<okhttp3.internal.NamedRunnable>;
			public name: string;
			public execute(): void;
			public constructor(format: string, objects1: native.Array<any>);
			public run(): void;
		}
	}
}

declare module okhttp3 {
	export module internal {
		export class Util extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.internal.Util>;
			public static EMPTY_BYTE_ARRAY: native.Array<number>;
			public static EMPTY_STRING_ARRAY: native.Array<string>;
			public static EMPTY_HEADERS: okhttp3.Headers;
			public static EMPTY_RESPONSE: okhttp3.ResponseBody;
			public static EMPTY_REQUEST: okhttp3.RequestBody;
			public static UTC: java.util.TimeZone;
			public static NATURAL_ORDER: java.util.Comparator<string>;
			public static verifyAsIpAddress(host: string): boolean;
			public static addSuppressedIfPossible(e: java.lang.Throwable, suppressed: java.lang.Throwable): void;
			public static immutableMap(map: java.util.Map<any,any>): java.util.Map<any,any>;
			public static isAndroidGetsocknameError(e: java.lang.AssertionError): boolean;
			public static delimiterOffset(input: string, pos: number, limit: number, delimiter: string): number;
			public static platformTrustManager(): javax.net.ssl.X509TrustManager;
			public static skipTrailingAsciiWhitespace(input: string, pos: number, limit: number): number;
			public static decodeHexDigit(c: string): number;
			public static skipAll(source: okio.Source, duration: number, timeUnit: java.util.concurrent.TimeUnit): boolean;
			public static intersect(comparator: java.util.Comparator<any>, first: native.Array<string>, second: native.Array<string>): native.Array<string>;
			public static closeQuietly(closeable: java.io.Closeable): void;
			public static canonicalizeHost(host: string): string;
			public static closeQuietly(serverSocket: java.net.ServerSocket): void;
			public static concat(array: native.Array<string>, value: string): native.Array<string>;
			public static toHeaderBlock(headers: okhttp3.Headers): java.util.List<okhttp3.internal.http2.Header>;
			public static threadFactory(name: string, daemon: boolean): java.util.concurrent.ThreadFactory;
			public static indexOf(comparator: java.util.Comparator<string>, array: native.Array<string>, value: string): number;
			public static indexOfControlOrNonAscii(input: string): number;
			public static toHeaders(headerBlock: java.util.List<okhttp3.internal.http2.Header>): okhttp3.Headers;
			public static immutableList(list: java.util.List<any>): java.util.List<any>;
			public static immutableList(elements: native.Array<any>): java.util.List<any>;
			public static checkOffsetAndCount(arrayLength: number, offset: number, count: number): void;
			public static delimiterOffset(input: string, pos: number, limit: number, delimiters: string): number;
			public static sameConnection(a: okhttp3.HttpUrl, b: okhttp3.HttpUrl): boolean;
			public static hostHeader(url: okhttp3.HttpUrl, includeDefaultPort: boolean): string;
			public static skipLeadingAsciiWhitespace(input: string, pos: number, limit: number): number;
			public static checkDuration(name: string, duration: number, unit: java.util.concurrent.TimeUnit): number;
			public static discard(source: okio.Source, timeout: number, timeUnit: java.util.concurrent.TimeUnit): boolean;
			public static format(format: string, objects1: native.Array<any>): string;
			public static trimSubstring(string: string, pos: number, limit: number): string;
			public static closeQuietly(socket: java.net.Socket): void;
			public static getSystemProperty(key: string, defaultValue: string): string;
			public static bomAwareCharset(source: okio.BufferedSource, charset: java.nio.charset.Charset): java.nio.charset.Charset;
			public static nonEmptyIntersection(comparator: java.util.Comparator<string>, first: native.Array<string>, second: native.Array<string>): boolean;
		}
	}
}

declare module okhttp3 {
	export module internal {
		export class Version extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.internal.Version>;
			public static userAgent(): string;
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module annotations {
			export class EverythingIsNonNull extends java.lang.Object implements java.lang.annotation.Annotation {
				public static class: java.lang.Class<okhttp3.internal.annotations.EverythingIsNonNull>;
				/**
				 * Constructs a new instance of the okhttp3.internal.annotations.EverythingIsNonNull interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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

declare module okhttp3 {
	export module internal {
		export module cache {
			export class CacheInterceptor extends java.lang.Object implements okhttp3.Interceptor {
				public static class: java.lang.Class<okhttp3.internal.cache.CacheInterceptor>;
				public constructor(cache: okhttp3.internal.cache.InternalCache);
				public intercept(chain: okhttp3.Interceptor.Chain): okhttp3.Response;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module cache {
			export class CacheRequest extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.cache.CacheRequest>;
				/**
				 * Constructs a new instance of the okhttp3.internal.cache.CacheRequest interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					body(): okio.Sink;
					abort(): void;
				});
				public constructor();
				public abort(): void;
				public body(): okio.Sink;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module cache {
			export class CacheStrategy extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.cache.CacheStrategy>;
				public networkRequest: okhttp3.Request;
				public cacheResponse: okhttp3.Response;
				public static isCacheable(response: okhttp3.Response, request: okhttp3.Request): boolean;
			}
			export module CacheStrategy {
				export class Factory extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.cache.CacheStrategy.Factory>;
					public constructor(nowMillis: number, request: okhttp3.Request, cacheResponse: okhttp3.Response);
					public get(): okhttp3.internal.cache.CacheStrategy;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module cache {
			export class DiskLruCache extends java.lang.Object implements java.io.Closeable, java.io.Flushable {
				public static class: java.lang.Class<okhttp3.internal.cache.DiskLruCache>;
				public close(): void;
				public snapshots(): java.util.Iterator<okhttp3.internal.cache.DiskLruCache.Snapshot>;
				public edit(key: string): okhttp3.internal.cache.DiskLruCache.Editor;
				public isClosed(): boolean;
				public getDirectory(): java.io.File;
				public size(): number;
				public flush(): void;
				public remove(key: string): boolean;
				public initialize(): void;
				public static create(fileSystem: okhttp3.internal.io.FileSystem, directory: java.io.File, appVersion: number, valueCount: number, maxSize: number): okhttp3.internal.cache.DiskLruCache;
				public get(key: string): okhttp3.internal.cache.DiskLruCache.Snapshot;
				public delete(): void;
				public setMaxSize(maxSize: number): void;
				public getMaxSize(): number;
				public evictAll(): void;
			}
			export module DiskLruCache {
				export class Editor extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.cache.DiskLruCache.Editor>;
					public commit(): void;
					public newSink(index: number): okio.Sink;
					public newSource(index: number): okio.Source;
					public abortUnlessCommitted(): void;
					public abort(): void;
				}
				export class Entry extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.cache.DiskLruCache.Entry>;
				}
				export class Snapshot extends java.lang.Object implements java.io.Closeable {
					public static class: java.lang.Class<okhttp3.internal.cache.DiskLruCache.Snapshot>;
					public getSource(index: number): okio.Source;
					public close(): void;
					public key(): string;
					public getLength(index: number): number;
					public edit(): okhttp3.internal.cache.DiskLruCache.Editor;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module cache {
			export class FaultHidingSink extends okio.ForwardingSink {
				public static class: java.lang.Class<okhttp3.internal.cache.FaultHidingSink>;
				public write(source: okio.Buffer, byteCount: number): void;
				public close(): void;
				public timeout(): okio.Timeout;
				public onException(e: java.io.IOException): void;
				public flush(): void;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module cache {
			export class InternalCache extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.cache.InternalCache>;
				/**
				 * Constructs a new instance of the okhttp3.internal.cache.InternalCache interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					get(request0: okhttp3.Request): okhttp3.Response;
					put(response0: okhttp3.Response): okhttp3.internal.cache.CacheRequest;
					remove(request0: okhttp3.Request): void;
					update(response0: okhttp3.Response, response1: okhttp3.Response): void;
					trackConditionalCacheHit(): void;
					trackResponse(cacheStrategy0: okhttp3.internal.cache.CacheStrategy): void;
				});
				public constructor();
				public put(response0: okhttp3.Response): okhttp3.internal.cache.CacheRequest;
				public remove(request0: okhttp3.Request): void;
				public trackResponse(cacheStrategy0: okhttp3.internal.cache.CacheStrategy): void;
				public trackConditionalCacheHit(): void;
				public update(response0: okhttp3.Response, response1: okhttp3.Response): void;
				public get(request0: okhttp3.Request): okhttp3.Response;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module cache2 {
			export class FileOperator extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.cache2.FileOperator>;
				public read(pos: number, sink: okio.Buffer, byteCount: number): void;
				public write(pos: number, source: okio.Buffer, byteCount: number): void;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module cache2 {
			export class Relay extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.cache2.Relay>;
				public static edit(file: java.io.File, upstream: okio.Source, metadata: okio.ByteString, bufferMaxSize: number): okhttp3.internal.cache2.Relay;
				public newSource(): okio.Source;
				public static read(file: java.io.File): okhttp3.internal.cache2.Relay;
				public metadata(): okio.ByteString;
			}
			export module Relay {
				export class RelaySource extends java.lang.Object implements okio.Source {
					public static class: java.lang.Class<okhttp3.internal.cache2.Relay.RelaySource>;
					public close(): void;
					public read(sink: okio.Buffer, byteCount: number): number;
					public timeout(): okio.Timeout;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module connection {
			export class ConnectInterceptor extends java.lang.Object implements okhttp3.Interceptor {
				public static class: java.lang.Class<okhttp3.internal.connection.ConnectInterceptor>;
				public client: okhttp3.OkHttpClient;
				public constructor(client: okhttp3.OkHttpClient);
				public intercept(chain: okhttp3.Interceptor.Chain): okhttp3.Response;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module connection {
			export class ConnectionSpecSelector extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.connection.ConnectionSpecSelector>;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module connection {
			export class Exchange extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.connection.Exchange>;
				public finishRequest(): void;
				public openResponseBody(response: okhttp3.Response): okhttp3.ResponseBody;
				public trailers(): okhttp3.Headers;
				public timeoutEarlyExit(): void;
				public responseHeadersEnd(response: okhttp3.Response): void;
				public newWebSocketStreams(): okhttp3.internal.ws.RealWebSocket.Streams;
				public createRequestBody(request: okhttp3.Request, duplex: boolean): okio.Sink;
				public responseHeadersStart(): void;
				public noRequestBody(): void;
				public detachWithViolence(): void;
				public isDuplex(): boolean;
				public readResponseHeaders(expectContinue: boolean): okhttp3.Response.Builder;
				public constructor(transmitter: okhttp3.internal.connection.Transmitter, call: okhttp3.Call, eventListener: okhttp3.EventListener, finder: okhttp3.internal.connection.ExchangeFinder, codec: okhttp3.internal.http.ExchangeCodec);
				public webSocketUpgradeFailed(): void;
				public cancel(): void;
				public writeRequestHeaders(request: okhttp3.Request): void;
				public flushRequest(): void;
				public connection(): okhttp3.internal.connection.RealConnection;
				public noNewExchangesOnConnection(): void;
			}
			export module Exchange {
				export class RequestBodySink extends okio.ForwardingSink {
					public static class: java.lang.Class<okhttp3.internal.connection.Exchange.RequestBodySink>;
					public close(): void;
					public flush(): void;
					public timeout(): okio.Timeout;
					public write(source: okio.Buffer, byteCount: number): void;
				}
				export class ResponseBodySource extends okio.ForwardingSource {
					public static class: java.lang.Class<okhttp3.internal.connection.Exchange.ResponseBodySource>;
					public close(): void;
					public read(sink: okio.Buffer, byteCount: number): number;
					public timeout(): okio.Timeout;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module connection {
			export class ExchangeFinder extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.connection.ExchangeFinder>;
				public find(client: okhttp3.OkHttpClient, chain: okhttp3.Interceptor.Chain, doExtensiveHealthChecks: boolean): okhttp3.internal.http.ExchangeCodec;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module connection {
			export class RealConnection extends okhttp3.internal.http2.Http2Connection.Listener implements okhttp3.Connection {
				public static class: java.lang.Class<okhttp3.internal.connection.RealConnection>;
				public connectionPool: okhttp3.internal.connection.RealConnectionPool;
				public protocol(): okhttp3.Protocol;
				public route(): okhttp3.Route;
				public noNewExchanges(): void;
				public toString(): string;
				public socket(): java.net.Socket;
				public constructor();
				public connect(connectTimeout: number, readTimeout: number, writeTimeout: number, pingIntervalMillis: number, connectionRetryEnabled: boolean, call: okhttp3.Call, eventListener: okhttp3.EventListener): void;
				public isHealthy(doExtensiveChecks: boolean): boolean;
				public supportsUrl(url: okhttp3.HttpUrl): boolean;
				public onStream(http2Stream0: okhttp3.internal.http2.Http2Stream): void;
				public constructor(connectionPool: okhttp3.internal.connection.RealConnectionPool, route: okhttp3.Route);
				public cancel(): void;
				public onSettings(connection: okhttp3.internal.http2.Http2Connection): void;
				public isMultiplexed(): boolean;
				public onStream(stream: okhttp3.internal.http2.Http2Stream): void;
				public handshake(): okhttp3.Handshake;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module connection {
			export class RealConnectionPool extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.connection.RealConnectionPool>;
				public connectionCount(): number;
				public constructor(maxIdleConnections: number, keepAliveDuration: number, timeUnit: java.util.concurrent.TimeUnit);
				public connectFailed(failedRoute: okhttp3.Route, failure: java.io.IOException): void;
				public evictAll(): void;
				public idleConnectionCount(): number;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module connection {
			export class RouteDatabase extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.connection.RouteDatabase>;
				public failed(failedRoute: okhttp3.Route): void;
				public connected(route: okhttp3.Route): void;
				public shouldPostpone(route: okhttp3.Route): boolean;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module connection {
			export class RouteException extends java.lang.RuntimeException {
				public static class: java.lang.Class<okhttp3.internal.connection.RouteException>;
				public getLastConnectException(): java.io.IOException;
				public getFirstConnectException(): java.io.IOException;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module connection {
			export class RouteSelector extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.connection.RouteSelector>;
				public next(): okhttp3.internal.connection.RouteSelector.Selection;
				public hasNext(): boolean;
			}
			export module RouteSelector {
				export class Selection extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.connection.RouteSelector.Selection>;
					public getAll(): java.util.List<okhttp3.Route>;
					public next(): okhttp3.Route;
					public hasNext(): boolean;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module connection {
			export class Transmitter extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.connection.Transmitter>;
				public connection: okhttp3.internal.connection.RealConnection;
				public timeout(): okio.Timeout;
				public timeoutEnter(): void;
				public noMoreExchanges(e: java.io.IOException): java.io.IOException;
				public isCanceled(): boolean;
				public timeoutEarlyExit(): void;
				public constructor(client: okhttp3.OkHttpClient, call: okhttp3.Call);
				public callStart(): void;
				public exchangeDoneDueToException(): void;
				public cancel(): void;
				public prepareToConnect(request: okhttp3.Request): void;
				public canRetry(): boolean;
				public hasExchange(): boolean;
			}
			export module Transmitter {
				export class TransmitterReference extends java.lang.ref.WeakReference<okhttp3.internal.connection.Transmitter> {
					public static class: java.lang.Class<okhttp3.internal.connection.Transmitter.TransmitterReference>;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http {
			export class BridgeInterceptor extends java.lang.Object implements okhttp3.Interceptor {
				public static class: java.lang.Class<okhttp3.internal.http.BridgeInterceptor>;
				public constructor(cookieJar: okhttp3.CookieJar);
				public intercept(chain: okhttp3.Interceptor.Chain): okhttp3.Response;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http {
			export class CallServerInterceptor extends java.lang.Object implements okhttp3.Interceptor {
				public static class: java.lang.Class<okhttp3.internal.http.CallServerInterceptor>;
				public constructor(forWebSocket: boolean);
				public intercept(chain: okhttp3.Interceptor.Chain): okhttp3.Response;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http {
			export class ExchangeCodec extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.http.ExchangeCodec>;
				/**
				 * Constructs a new instance of the okhttp3.internal.http.ExchangeCodec interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					connection(): okhttp3.internal.connection.RealConnection;
					createRequestBody(request0: okhttp3.Request, long1: number): okio.Sink;
					writeRequestHeaders(request0: okhttp3.Request): void;
					flushRequest(): void;
					finishRequest(): void;
					readResponseHeaders(boolean0: boolean): okhttp3.Response.Builder;
					reportedContentLength(response0: okhttp3.Response): number;
					openResponseBodySource(response0: okhttp3.Response): okio.Source;
					trailers(): okhttp3.Headers;
					cancel(): void;
				});
				public constructor();
				public static DISCARD_STREAM_TIMEOUT_MILLIS: number;
				public finishRequest(): void;
				public trailers(): okhttp3.Headers;
				public openResponseBodySource(response0: okhttp3.Response): okio.Source;
				public writeRequestHeaders(request0: okhttp3.Request): void;
				public cancel(): void;
				public flushRequest(): void;
				public connection(): okhttp3.internal.connection.RealConnection;
				public readResponseHeaders(boolean0: boolean): okhttp3.Response.Builder;
				public createRequestBody(request0: okhttp3.Request, long1: number): okio.Sink;
				public reportedContentLength(response0: okhttp3.Response): number;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http {
			export class HttpDate extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.http.HttpDate>;
				public static MAX_DATE: number;
				public static format(value: java.util.Date): string;
				public static parse(value: string): java.util.Date;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http {
			export class HttpHeaders extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.http.HttpHeaders>;
				public static hasBody(response: okhttp3.Response): boolean;
				public static varyMatches(cachedResponse: okhttp3.Response, cachedRequest: okhttp3.Headers, newRequest: okhttp3.Request): boolean;
				public static skipWhitespace(input: string, pos: number): number;
				public static contentLength(headers: okhttp3.Headers): number;
				public static varyFields(responseHeaders: okhttp3.Headers): java.util.Set<string>;
				public static parseSeconds(value: string, defaultValue: number): number;
				public static parseChallenges(responseHeaders: okhttp3.Headers, headerName: string): java.util.List<okhttp3.Challenge>;
				public static varyHeaders(requestHeaders: okhttp3.Headers, responseHeaders: okhttp3.Headers): okhttp3.Headers;
				public static hasVaryAll(response: okhttp3.Response): boolean;
				public static skipUntil(input: string, pos: number, characters: string): number;
				public static varyHeaders(response: okhttp3.Response): okhttp3.Headers;
				public static receiveHeaders(cookieJar: okhttp3.CookieJar, url: okhttp3.HttpUrl, headers: okhttp3.Headers): void;
				public static hasVaryAll(responseHeaders: okhttp3.Headers): boolean;
				public static contentLength(response: okhttp3.Response): number;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http {
			export class HttpMethod extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.http.HttpMethod>;
				public static redirectsWithBody(method: string): boolean;
				public static redirectsToGet(method: string): boolean;
				public static requiresRequestBody(method: string): boolean;
				public static invalidatesCache(method: string): boolean;
				public static permitsRequestBody(method: string): boolean;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http {
			export class RealInterceptorChain extends java.lang.Object implements okhttp3.Interceptor.Chain {
				public static class: java.lang.Class<okhttp3.internal.http.RealInterceptorChain>;
				public exchange(): okhttp3.internal.connection.Exchange;
				public request(): okhttp3.Request;
				public transmitter(): okhttp3.internal.connection.Transmitter;
				public proceed(request: okhttp3.Request): okhttp3.Response;
				public connectTimeoutMillis(): number;
				public proceed(request: okhttp3.Request, transmitter: okhttp3.internal.connection.Transmitter, exchange: okhttp3.internal.connection.Exchange): okhttp3.Response;
				public withReadTimeout(timeout: number, unit: java.util.concurrent.TimeUnit): okhttp3.Interceptor.Chain;
				public withConnectTimeout(timeout: number, unit: java.util.concurrent.TimeUnit): okhttp3.Interceptor.Chain;
				public connection(): okhttp3.Connection;
				public writeTimeoutMillis(): number;
				public readTimeoutMillis(): number;
				public call(): okhttp3.Call;
				public withWriteTimeout(timeout: number, unit: java.util.concurrent.TimeUnit): okhttp3.Interceptor.Chain;
				public constructor(interceptors: java.util.List<okhttp3.Interceptor>, transmitter: okhttp3.internal.connection.Transmitter, exchange: okhttp3.internal.connection.Exchange, index: number, request: okhttp3.Request, call: okhttp3.Call, connectTimeout: number, readTimeout: number, writeTimeout: number);
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http {
			export class RealResponseBody extends okhttp3.ResponseBody {
				public static class: java.lang.Class<okhttp3.internal.http.RealResponseBody>;
				public close(): void;
				public contentLength(): number;
				public constructor(contentTypeString: string, contentLength: number, source: okio.BufferedSource);
				public source(): okio.BufferedSource;
				public contentType(): okhttp3.MediaType;
				public constructor();
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http {
			export class RequestLine extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.http.RequestLine>;
				public static get(request: okhttp3.Request, proxyType: java.net.Proxy.Type): string;
				public static requestPath(url: okhttp3.HttpUrl): string;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http {
			export class RetryAndFollowUpInterceptor extends java.lang.Object implements okhttp3.Interceptor {
				public static class: java.lang.Class<okhttp3.internal.http.RetryAndFollowUpInterceptor>;
				public constructor(client: okhttp3.OkHttpClient);
				public intercept(chain: okhttp3.Interceptor.Chain): okhttp3.Response;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http {
			export class StatusLine extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.http.StatusLine>;
				public static HTTP_TEMP_REDIRECT: number;
				public static HTTP_PERM_REDIRECT: number;
				public static HTTP_CONTINUE: number;
				public protocol: okhttp3.Protocol;
				public code: number;
				public message: string;
				public constructor(protocol: okhttp3.Protocol, code: number, message: string);
				public static get(response: okhttp3.Response): okhttp3.internal.http.StatusLine;
				public static parse(statusLine: string): okhttp3.internal.http.StatusLine;
				public toString(): string;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http1 {
			export class Http1ExchangeCodec extends java.lang.Object implements okhttp3.internal.http.ExchangeCodec {
				public static class: java.lang.Class<okhttp3.internal.http1.Http1ExchangeCodec>;
				public finishRequest(): void;
				public trailers(): okhttp3.Headers;
				public reportedContentLength(response: okhttp3.Response): number;
				public isClosed(): boolean;
				public constructor(client: okhttp3.OkHttpClient, realConnection: okhttp3.internal.connection.RealConnection, source: okio.BufferedSource, sink: okio.BufferedSink);
				public writeRequest(headers: okhttp3.Headers, requestLine: string): void;
				public readResponseHeaders(expectContinue: boolean): okhttp3.Response.Builder;
				public cancel(): void;
				public createRequestBody(request: okhttp3.Request, contentLength: number): okio.Sink;
				public writeRequestHeaders(request: okhttp3.Request): void;
				public flushRequest(): void;
				public skipConnectBody(response: okhttp3.Response): void;
				public connection(): okhttp3.internal.connection.RealConnection;
				public openResponseBodySource(response: okhttp3.Response): okio.Source;
			}
			export module Http1ExchangeCodec {
				export abstract class AbstractSource extends java.lang.Object implements okio.Source {
					public static class: java.lang.Class<okhttp3.internal.http1.Http1ExchangeCodec.AbstractSource>;
					public closed: boolean;
					public close(): void;
					public read(sink: okio.Buffer, byteCount: number): number;
					public timeout(): okio.Timeout;
				}
				export class ChunkedSink extends java.lang.Object implements okio.Sink {
					public static class: java.lang.Class<okhttp3.internal.http1.Http1ExchangeCodec.ChunkedSink>;
					public close(): void;
					public flush(): void;
					public timeout(): okio.Timeout;
					public write(source: okio.Buffer, byteCount: number): void;
				}
				export class ChunkedSource extends okhttp3.internal.http1.Http1ExchangeCodec.AbstractSource {
					public static class: java.lang.Class<okhttp3.internal.http1.Http1ExchangeCodec.ChunkedSource>;
					public close(): void;
					public read(sink: okio.Buffer, byteCount: number): number;
					public timeout(): okio.Timeout;
				}
				export class FixedLengthSource extends okhttp3.internal.http1.Http1ExchangeCodec.AbstractSource {
					public static class: java.lang.Class<okhttp3.internal.http1.Http1ExchangeCodec.FixedLengthSource>;
					public close(): void;
					public read(sink: okio.Buffer, byteCount: number): number;
					public timeout(): okio.Timeout;
				}
				export class KnownLengthSink extends java.lang.Object implements okio.Sink {
					public static class: java.lang.Class<okhttp3.internal.http1.Http1ExchangeCodec.KnownLengthSink>;
					public close(): void;
					public flush(): void;
					public timeout(): okio.Timeout;
					public write(source: okio.Buffer, byteCount: number): void;
				}
				export class UnknownLengthSource extends okhttp3.internal.http1.Http1ExchangeCodec.AbstractSource {
					public static class: java.lang.Class<okhttp3.internal.http1.Http1ExchangeCodec.UnknownLengthSource>;
					public close(): void;
					public read(sink: okio.Buffer, byteCount: number): number;
					public timeout(): okio.Timeout;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http2 {
			export class ConnectionShutdownException extends java.io.IOException {
				public static class: java.lang.Class<okhttp3.internal.http2.ConnectionShutdownException>;
				public constructor(cause: java.lang.Throwable);
				public constructor(message: string, cause: java.lang.Throwable);
				public constructor(message: string);
				public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
				public constructor();
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http2 {
			export class ErrorCode {
				public static class: java.lang.Class<okhttp3.internal.http2.ErrorCode>;
				public static NO_ERROR: okhttp3.internal.http2.ErrorCode;
				public static PROTOCOL_ERROR: okhttp3.internal.http2.ErrorCode;
				public static INTERNAL_ERROR: okhttp3.internal.http2.ErrorCode;
				public static FLOW_CONTROL_ERROR: okhttp3.internal.http2.ErrorCode;
				public static REFUSED_STREAM: okhttp3.internal.http2.ErrorCode;
				public static CANCEL: okhttp3.internal.http2.ErrorCode;
				public static COMPRESSION_ERROR: okhttp3.internal.http2.ErrorCode;
				public static CONNECT_ERROR: okhttp3.internal.http2.ErrorCode;
				public static ENHANCE_YOUR_CALM: okhttp3.internal.http2.ErrorCode;
				public static INADEQUATE_SECURITY: okhttp3.internal.http2.ErrorCode;
				public static HTTP_1_1_REQUIRED: okhttp3.internal.http2.ErrorCode;
				public httpCode: number;
				public static fromHttp2(code: number): okhttp3.internal.http2.ErrorCode;
				public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static values(): native.Array<okhttp3.internal.http2.ErrorCode>;
				public static valueOf(name: string): okhttp3.internal.http2.ErrorCode;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http2 {
			export class Header extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.http2.Header>;
				public static PSEUDO_PREFIX: okio.ByteString;
				public static RESPONSE_STATUS_UTF8: string;
				public static TARGET_METHOD_UTF8: string;
				public static TARGET_PATH_UTF8: string;
				public static TARGET_SCHEME_UTF8: string;
				public static TARGET_AUTHORITY_UTF8: string;
				public static RESPONSE_STATUS: okio.ByteString;
				public static TARGET_METHOD: okio.ByteString;
				public static TARGET_PATH: okio.ByteString;
				public static TARGET_SCHEME: okio.ByteString;
				public static TARGET_AUTHORITY: okio.ByteString;
				public name: okio.ByteString;
				public value: okio.ByteString;
				public equals(obj: any): boolean;
				public equals(other: any): boolean;
				public constructor(name: string, value: string);
				public hashCode(): number;
				public constructor(name: okio.ByteString, value: okio.ByteString);
				public toString(): string;
				public constructor(name: okio.ByteString, value: string);
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http2 {
			export class Hpack extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.http2.Hpack>;
			}
			export module Hpack {
				export class Reader extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.http2.Hpack.Reader>;
					public getAndResetHeaderList(): java.util.List<okhttp3.internal.http2.Header>;
				}
				export class Writer extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.http2.Hpack.Writer>;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http2 {
			export class Http2 extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.http2.Http2>;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http2 {
			export class Http2Connection extends java.lang.Object implements java.io.Closeable {
				public static class: java.lang.Class<okhttp3.internal.http2.Http2Connection>;
				public maxConcurrentStreams(): number;
				public pushStream(associatedStreamId: number, requestHeaders: java.util.List<okhttp3.internal.http2.Header>, out: boolean): okhttp3.internal.http2.Http2Stream;
				public close(): void;
				public setSettings(settings: okhttp3.internal.http2.Settings): void;
				public start(): void;
				public newStream(requestHeaders: java.util.List<okhttp3.internal.http2.Header>, out: boolean): okhttp3.internal.http2.Http2Stream;
				public writeData(streamId: number, outFinished: boolean, buffer: okio.Buffer, byteCount: number): void;
				public openStreamCount(): number;
				public shutdown(statusCode: okhttp3.internal.http2.ErrorCode): void;
				public isHealthy(nowNs: number): boolean;
				public flush(): void;
			}
			export module Http2Connection {
				export class Builder extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.http2.Http2Connection.Builder>;
					public socket(socket: java.net.Socket, connectionName: string, source: okio.BufferedSource, sink: okio.BufferedSink): okhttp3.internal.http2.Http2Connection.Builder;
					public pingIntervalMillis(pingIntervalMillis: number): okhttp3.internal.http2.Http2Connection.Builder;
					public constructor(client: boolean);
					public socket(socket: java.net.Socket): okhttp3.internal.http2.Http2Connection.Builder;
					public build(): okhttp3.internal.http2.Http2Connection;
					public pushObserver(pushObserver: okhttp3.internal.http2.PushObserver): okhttp3.internal.http2.Http2Connection.Builder;
					public listener(listener: okhttp3.internal.http2.Http2Connection.Listener): okhttp3.internal.http2.Http2Connection.Builder;
				}
				export class IntervalPingRunnable extends okhttp3.internal.NamedRunnable {
					public static class: java.lang.Class<okhttp3.internal.http2.Http2Connection.IntervalPingRunnable>;
					public execute(): void;
					public run(): void;
				}
				export abstract class Listener extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.http2.Http2Connection.Listener>;
					public static REFUSE_INCOMING_STREAMS: okhttp3.internal.http2.Http2Connection.Listener;
					public onStream(http2Stream0: okhttp3.internal.http2.Http2Stream): void;
					public constructor();
					public onSettings(connection: okhttp3.internal.http2.Http2Connection): void;
				}
				export class PingRunnable extends okhttp3.internal.NamedRunnable {
					public static class: java.lang.Class<okhttp3.internal.http2.Http2Connection.PingRunnable>;
					public execute(): void;
					public run(): void;
				}
				export class ReaderRunnable extends okhttp3.internal.NamedRunnable implements okhttp3.internal.http2.Http2Reader.Handler {
					public static class: java.lang.Class<okhttp3.internal.http2.Http2Connection.ReaderRunnable>;
					public ackSettings(): void;
					public alternateService(streamId: number, origin: string, protocol: okio.ByteString, host: string, port: number, maxAge: number): void;
					public execute(): void;
					public run(): void;
					public priority(streamId: number, streamDependency: number, weight: number, exclusive: boolean): void;
					public settings(clearPrevious: boolean, settings: okhttp3.internal.http2.Settings): void;
					public pushPromise(streamId: number, promisedStreamId: number, requestHeaders: java.util.List<okhttp3.internal.http2.Header>): void;
					public data(inFinished: boolean, streamId: number, source: okio.BufferedSource, length: number): void;
					public ping(reply: boolean, payload1: number, payload2: number): void;
					public goAway(lastGoodStreamId: number, errorCode: okhttp3.internal.http2.ErrorCode, debugData: okio.ByteString): void;
					public rstStream(streamId: number, errorCode: okhttp3.internal.http2.ErrorCode): void;
					public windowUpdate(streamId: number, windowSizeIncrement: number): void;
					public headers(inFinished: boolean, streamId: number, associatedStreamId: number, headerBlock: java.util.List<okhttp3.internal.http2.Header>): void;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http2 {
			export class Http2ExchangeCodec extends java.lang.Object implements okhttp3.internal.http.ExchangeCodec {
				public static class: java.lang.Class<okhttp3.internal.http2.Http2ExchangeCodec>;
				public constructor(client: okhttp3.OkHttpClient, realConnection: okhttp3.internal.connection.RealConnection, chain: okhttp3.Interceptor.Chain, connection: okhttp3.internal.http2.Http2Connection);
				public finishRequest(): void;
				public trailers(): okhttp3.Headers;
				public reportedContentLength(response: okhttp3.Response): number;
				public readResponseHeaders(expectContinue: boolean): okhttp3.Response.Builder;
				public static http2HeadersList(request: okhttp3.Request): java.util.List<okhttp3.internal.http2.Header>;
				public cancel(): void;
				public createRequestBody(request: okhttp3.Request, contentLength: number): okio.Sink;
				public writeRequestHeaders(request: okhttp3.Request): void;
				public flushRequest(): void;
				public connection(): okhttp3.internal.connection.RealConnection;
				public static readHttp2HeadersList(headerBlock: okhttp3.Headers, protocol: okhttp3.Protocol): okhttp3.Response.Builder;
				public openResponseBodySource(response: okhttp3.Response): okio.Source;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http2 {
			export class Http2Reader extends java.lang.Object implements java.io.Closeable {
				public static class: java.lang.Class<okhttp3.internal.http2.Http2Reader>;
				public readConnectionPreface(handler: okhttp3.internal.http2.Http2Reader.Handler): void;
				public close(): void;
				public nextFrame(requireSettings: boolean, handler: okhttp3.internal.http2.Http2Reader.Handler): boolean;
			}
			export module Http2Reader {
				export class ContinuationSource extends java.lang.Object implements okio.Source {
					public static class: java.lang.Class<okhttp3.internal.http2.Http2Reader.ContinuationSource>;
					public close(): void;
					public read(sink: okio.Buffer, byteCount: number): number;
					public timeout(): okio.Timeout;
				}
				export class Handler extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.http2.Http2Reader.Handler>;
					/**
					 * Constructs a new instance of the okhttp3.internal.http2.Http2Reader$Handler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						data(boolean0: boolean, int1: number, bufferedSource2: okio.BufferedSource, int3: number): void;
						headers(boolean0: boolean, int1: number, int2: number, list3: java.util.List<okhttp3.internal.http2.Header>): void;
						rstStream(int0: number, errorCode1: okhttp3.internal.http2.ErrorCode): void;
						settings(boolean0: boolean, settings1: okhttp3.internal.http2.Settings): void;
						ackSettings(): void;
						ping(boolean0: boolean, int1: number, int2: number): void;
						goAway(int0: number, errorCode1: okhttp3.internal.http2.ErrorCode, byteString2: okio.ByteString): void;
						windowUpdate(int0: number, long1: number): void;
						priority(int0: number, int1: number, int2: number, boolean3: boolean): void;
						pushPromise(int0: number, int1: number, list2: java.util.List<okhttp3.internal.http2.Header>): void;
						alternateService(int0: number, string1: string, byteString2: okio.ByteString, string3: string, int4: number, long5: number): void;
					});
					public constructor();
					public ackSettings(): void;
					public headers(boolean0: boolean, int1: number, int2: number, list3: java.util.List<okhttp3.internal.http2.Header>): void;
					public pushPromise(int0: number, int1: number, list2: java.util.List<okhttp3.internal.http2.Header>): void;
					public data(boolean0: boolean, int1: number, bufferedSource2: okio.BufferedSource, int3: number): void;
					public settings(boolean0: boolean, settings1: okhttp3.internal.http2.Settings): void;
					public goAway(int0: number, errorCode1: okhttp3.internal.http2.ErrorCode, byteString2: okio.ByteString): void;
					public priority(int0: number, int1: number, int2: number, boolean3: boolean): void;
					public alternateService(int0: number, string1: string, byteString2: okio.ByteString, string3: string, int4: number, long5: number): void;
					public ping(boolean0: boolean, int1: number, int2: number): void;
					public windowUpdate(int0: number, long1: number): void;
					public rstStream(int0: number, errorCode1: okhttp3.internal.http2.ErrorCode): void;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http2 {
			export class Http2Stream extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.http2.Http2Stream>;
				public getSource(): okio.Source;
				public trailers(): okhttp3.Headers;
				public writeTimeout(): okio.Timeout;
				public getId(): number;
				public getErrorCode(): okhttp3.internal.http2.ErrorCode;
				public close(rstStatusCode: okhttp3.internal.http2.ErrorCode, errorException: java.io.IOException): void;
				public takeHeaders(): okhttp3.Headers;
				public writeHeaders(responseHeaders: java.util.List<okhttp3.internal.http2.Header>, outFinished: boolean, flushHeaders: boolean): void;
				public getConnection(): okhttp3.internal.http2.Http2Connection;
				public isOpen(): boolean;
				public readTimeout(): okio.Timeout;
				public getSink(): okio.Sink;
				public isLocallyInitiated(): boolean;
				public closeLater(errorCode: okhttp3.internal.http2.ErrorCode): void;
				public enqueueTrailers(trailers: okhttp3.Headers): void;
			}
			export module Http2Stream {
				export class FramingSink extends java.lang.Object implements okio.Sink {
					public static class: java.lang.Class<okhttp3.internal.http2.Http2Stream.FramingSink>;
					public close(): void;
					public flush(): void;
					public timeout(): okio.Timeout;
					public write(source: okio.Buffer, byteCount: number): void;
				}
				export class FramingSource extends java.lang.Object implements okio.Source {
					public static class: java.lang.Class<okhttp3.internal.http2.Http2Stream.FramingSource>;
					public close(): void;
					public read(sink: okio.Buffer, byteCount: number): number;
					public timeout(): okio.Timeout;
				}
				export class StreamTimeout extends okio.AsyncTimeout {
					public static class: java.lang.Class<okhttp3.internal.http2.Http2Stream.StreamTimeout>;
					public timedOut(): void;
					public exitAndThrowIfTimedOut(): void;
					public newTimeoutException(cause: java.io.IOException): java.io.IOException;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http2 {
			export class Http2Writer extends java.lang.Object implements java.io.Closeable {
				public static class: java.lang.Class<okhttp3.internal.http2.Http2Writer>;
				public ping(ack: boolean, payload1: number, payload2: number): void;
				public settings(settings: okhttp3.internal.http2.Settings): void;
				public close(): void;
				public rstStream(streamId: number, errorCode: okhttp3.internal.http2.ErrorCode): void;
				public data(outFinished: boolean, streamId: number, source: okio.Buffer, byteCount: number): void;
				public frameHeader(streamId: number, length: number, type: number, flags: number): void;
				public maxDataLength(): number;
				public flush(): void;
				public connectionPreface(): void;
				public goAway(lastGoodStreamId: number, errorCode: okhttp3.internal.http2.ErrorCode, debugData: native.Array<number>): void;
				public headers(outFinished: boolean, streamId: number, headerBlock: java.util.List<okhttp3.internal.http2.Header>): void;
				public pushPromise(streamId: number, promisedStreamId: number, requestHeaders: java.util.List<okhttp3.internal.http2.Header>): void;
				public applyAndAckSettings(peerSettings: okhttp3.internal.http2.Settings): void;
				public windowUpdate(streamId: number, windowSizeIncrement: number): void;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http2 {
			export class Huffman extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.http2.Huffman>;
				public static get(): okhttp3.internal.http2.Huffman;
			}
			export module Huffman {
				export class Node extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.http2.Huffman.Node>;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http2 {
			export class PushObserver extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.http2.PushObserver>;
				/**
				 * Constructs a new instance of the okhttp3.internal.http2.PushObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onRequest(int0: number, list1: java.util.List<okhttp3.internal.http2.Header>): boolean;
					onHeaders(int0: number, list1: java.util.List<okhttp3.internal.http2.Header>, boolean2: boolean): boolean;
					onData(int0: number, bufferedSource1: okio.BufferedSource, int2: number, boolean3: boolean): boolean;
					onReset(int0: number, errorCode1: okhttp3.internal.http2.ErrorCode): void;
				});
				public constructor();
				public static CANCEL: okhttp3.internal.http2.PushObserver;
				public onData(int0: number, bufferedSource1: okio.BufferedSource, int2: number, boolean3: boolean): boolean;
				public onHeaders(int0: number, list1: java.util.List<okhttp3.internal.http2.Header>, boolean2: boolean): boolean;
				public onRequest(int0: number, list1: java.util.List<okhttp3.internal.http2.Header>): boolean;
				public onReset(int0: number, errorCode1: okhttp3.internal.http2.ErrorCode): void;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http2 {
			export class Settings extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.http2.Settings>;
				public constructor();
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http2 {
			export class StreamResetException extends java.io.IOException {
				public static class: java.lang.Class<okhttp3.internal.http2.StreamResetException>;
				public errorCode: okhttp3.internal.http2.ErrorCode;
				public constructor(cause: java.lang.Throwable);
				public constructor(errorCode: okhttp3.internal.http2.ErrorCode);
				public constructor(message: string, cause: java.lang.Throwable);
				public constructor(message: string);
				public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
				public constructor();
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module io {
			export class FileSystem extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.io.FileSystem>;
				/**
				 * Constructs a new instance of the okhttp3.internal.io.FileSystem interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					source(file0: java.io.File): okio.Source;
					sink(file0: java.io.File): okio.Sink;
					appendingSink(file0: java.io.File): okio.Sink;
					delete(file0: java.io.File): void;
					exists(file0: java.io.File): boolean;
					size(file0: java.io.File): number;
					rename(file0: java.io.File, file1: java.io.File): void;
					deleteContents(file0: java.io.File): void;
				});
				public constructor();
				public static SYSTEM: okhttp3.internal.io.FileSystem;
				public appendingSink(file0: java.io.File): okio.Sink;
				public deleteContents(file0: java.io.File): void;
				public source(file0: java.io.File): okio.Source;
				public sink(file0: java.io.File): okio.Sink;
				public delete(file0: java.io.File): void;
				public size(file0: java.io.File): number;
				public rename(file0: java.io.File, file1: java.io.File): void;
				public exists(file0: java.io.File): boolean;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module platform {
			export class Android10Platform extends okhttp3.internal.platform.AndroidPlatform {
				public static class: java.lang.Class<okhttp3.internal.platform.Android10Platform>;
				public getSelectedProtocol(socket: javax.net.ssl.SSLSocket): string;
				public configureTlsExtensions(sslSocket: javax.net.ssl.SSLSocket, hostname: string, protocols: java.util.List<okhttp3.Protocol>): void;
				public static buildIfSupported(): okhttp3.internal.platform.Platform;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module platform {
			export class AndroidPlatform extends okhttp3.internal.platform.Platform {
				public static class: java.lang.Class<okhttp3.internal.platform.AndroidPlatform>;
				public getSelectedProtocol(socket: javax.net.ssl.SSLSocket): string;
				public configureTlsExtensions(sslSocket: javax.net.ssl.SSLSocket, hostname: string, protocols: java.util.List<okhttp3.Protocol>): void;
				public isCleartextTrafficPermitted(hostname: string): boolean;
				public logCloseableLeak(message: string, stackTrace: any): void;
				public trustManager(sslSocketFactory: javax.net.ssl.SSLSocketFactory): javax.net.ssl.X509TrustManager;
				public buildCertificateChainCleaner(sslSocketFactory: javax.net.ssl.SSLSocketFactory): okhttp3.internal.tls.CertificateChainCleaner;
				public getStackTraceForCloseable(closer: string): any;
				public connectSocket(socket: java.net.Socket, address: java.net.InetSocketAddress, connectTimeout: number): void;
				public log(level: number, message: string, t: java.lang.Throwable): void;
				public buildCertificateChainCleaner(trustManager: javax.net.ssl.X509TrustManager): okhttp3.internal.tls.CertificateChainCleaner;
				public static buildIfSupported(): okhttp3.internal.platform.Platform;
				public buildTrustRootIndex(trustManager: javax.net.ssl.X509TrustManager): okhttp3.internal.tls.TrustRootIndex;
				public getSSLContext(): javax.net.ssl.SSLContext;
			}
			export module AndroidPlatform {
				export class AndroidCertificateChainCleaner extends okhttp3.internal.tls.CertificateChainCleaner {
					public static class: java.lang.Class<okhttp3.internal.platform.AndroidPlatform.AndroidCertificateChainCleaner>;
					public equals(obj: any): boolean;
					public equals(other: any): boolean;
					public clean(list0: java.util.List<java.security.cert.Certificate>, string1: string): java.util.List<java.security.cert.Certificate>;
					public hashCode(): number;
					public clean(chain: java.util.List<java.security.cert.Certificate>, hostname: string): java.util.List<java.security.cert.Certificate>;
				}
				export class CloseGuard extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.platform.AndroidPlatform.CloseGuard>;
				}
				export class CustomTrustRootIndex extends java.lang.Object implements okhttp3.internal.tls.TrustRootIndex {
					public static class: java.lang.Class<okhttp3.internal.platform.AndroidPlatform.CustomTrustRootIndex>;
					public equals(obj: any): boolean;
					public hashCode(): number;
					public findByIssuerAndSignature(cert: java.security.cert.X509Certificate): java.security.cert.X509Certificate;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module platform {
			export class ConscryptPlatform extends okhttp3.internal.platform.Platform {
				public static class: java.lang.Class<okhttp3.internal.platform.ConscryptPlatform>;
				public getSelectedProtocol(socket: javax.net.ssl.SSLSocket): string;
				public static buildIfSupported(): okhttp3.internal.platform.ConscryptPlatform;
				public configureTlsExtensions(sslSocket: javax.net.ssl.SSLSocket, hostname: string, protocols: java.util.List<okhttp3.Protocol>): void;
				public getSelectedProtocol(sslSocket: javax.net.ssl.SSLSocket): string;
				public configureSslSocketFactory(socketFactory: javax.net.ssl.SSLSocketFactory): void;
				public trustManager(sslSocketFactory: javax.net.ssl.SSLSocketFactory): javax.net.ssl.X509TrustManager;
				public getSSLContext(): javax.net.ssl.SSLContext;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module platform {
			export class Jdk8WithJettyBootPlatform extends okhttp3.internal.platform.Platform {
				public static class: java.lang.Class<okhttp3.internal.platform.Jdk8WithJettyBootPlatform>;
				public getSelectedProtocol(socket: javax.net.ssl.SSLSocket): string;
				public configureTlsExtensions(sslSocket: javax.net.ssl.SSLSocket, hostname: string, protocols: java.util.List<okhttp3.Protocol>): void;
				public afterHandshake(sslSocket: javax.net.ssl.SSLSocket): void;
				public static buildIfSupported(): okhttp3.internal.platform.Platform;
			}
			export module Jdk8WithJettyBootPlatform {
				export class AlpnProvider extends java.lang.Object implements java.lang.reflect.InvocationHandler {
					public static class: java.lang.Class<okhttp3.internal.platform.Jdk8WithJettyBootPlatform.AlpnProvider>;
					public invoke(proxy: any, method: java.lang.reflect.Method, objects2: native.Array<any>): any;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module platform {
			export class Jdk9Platform extends okhttp3.internal.platform.Platform {
				public static class: java.lang.Class<okhttp3.internal.platform.Jdk9Platform>;
				public getSelectedProtocol(socket: javax.net.ssl.SSLSocket): string;
				public configureTlsExtensions(sslSocket: javax.net.ssl.SSLSocket, hostname: string, protocols: java.util.List<okhttp3.Protocol>): void;
				public static buildIfSupported(): okhttp3.internal.platform.Jdk9Platform;
				public trustManager(sslSocketFactory: javax.net.ssl.SSLSocketFactory): javax.net.ssl.X509TrustManager;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module platform {
			export class Platform extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.platform.Platform>;
				public static INFO: number;
				public static WARN: number;
				public getSelectedProtocol(socket: javax.net.ssl.SSLSocket): string;
				public configureTlsExtensions(sslSocket: javax.net.ssl.SSLSocket, hostname: string, protocols: java.util.List<okhttp3.Protocol>): void;
				public isCleartextTrafficPermitted(hostname: string): boolean;
				public getPrefix(): string;
				public static alpnProtocolNames(protocols: java.util.List<okhttp3.Protocol>): java.util.List<string>;
				public afterHandshake(sslSocket: javax.net.ssl.SSLSocket): void;
				public static isConscryptPreferred(): boolean;
				public logCloseableLeak(message: string, stackTrace: any): void;
				public toString(): string;
				public trustManager(sslSocketFactory: javax.net.ssl.SSLSocketFactory): javax.net.ssl.X509TrustManager;
				public constructor();
				public buildCertificateChainCleaner(sslSocketFactory: javax.net.ssl.SSLSocketFactory): okhttp3.internal.tls.CertificateChainCleaner;
				public getStackTraceForCloseable(closer: string): any;
				public configureSslSocketFactory(socketFactory: javax.net.ssl.SSLSocketFactory): void;
				public connectSocket(socket: java.net.Socket, address: java.net.InetSocketAddress, connectTimeout: number): void;
				public log(level: number, message: string, t: java.lang.Throwable): void;
				public static isAndroid(): boolean;
				public buildCertificateChainCleaner(trustManager: javax.net.ssl.X509TrustManager): okhttp3.internal.tls.CertificateChainCleaner;
				public static get(): okhttp3.internal.platform.Platform;
				public buildTrustRootIndex(trustManager: javax.net.ssl.X509TrustManager): okhttp3.internal.tls.TrustRootIndex;
				public getSSLContext(): javax.net.ssl.SSLContext;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module proxy {
			export class NullProxySelector extends java.net.ProxySelector {
				public static class: java.lang.Class<okhttp3.internal.proxy.NullProxySelector>;
				public connectFailed(uri: java.net.URI, sa: java.net.SocketAddress, ioe: java.io.IOException): void;
				public select(uRI0: java.net.URI): java.util.List<java.net.Proxy>;
				public connectFailed(uRI0: java.net.URI, socketAddress1: java.net.SocketAddress, iOException2: java.io.IOException): void;
				public select(uri: java.net.URI): java.util.List<java.net.Proxy>;
				public constructor();
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module publicsuffix {
			export class PublicSuffixDatabase extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.publicsuffix.PublicSuffixDatabase>;
				public static PUBLIC_SUFFIX_RESOURCE: string;
				public static get(): okhttp3.internal.publicsuffix.PublicSuffixDatabase;
				public getEffectiveTldPlusOne(domain: string): string;
				public constructor();
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module tls {
			export class BasicCertificateChainCleaner extends okhttp3.internal.tls.CertificateChainCleaner {
				public static class: java.lang.Class<okhttp3.internal.tls.BasicCertificateChainCleaner>;
				public clean(list0: java.util.List<java.security.cert.Certificate>, string1: string): java.util.List<java.security.cert.Certificate>;
				public equals(obj: any): boolean;
				public equals(other: any): boolean;
				public hashCode(): number;
				public constructor(trustRootIndex: okhttp3.internal.tls.TrustRootIndex);
				public clean(chain: java.util.List<java.security.cert.Certificate>, hostname: string): java.util.List<java.security.cert.Certificate>;
				public constructor();
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module tls {
			export class BasicTrustRootIndex extends java.lang.Object implements okhttp3.internal.tls.TrustRootIndex {
				public static class: java.lang.Class<okhttp3.internal.tls.BasicTrustRootIndex>;
				public equals(obj: any): boolean;
				public equals(other: any): boolean;
				public findByIssuerAndSignature(cert: java.security.cert.X509Certificate): java.security.cert.X509Certificate;
				public hashCode(): number;
				public constructor(caCerts: native.Array<java.security.cert.X509Certificate>);
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module tls {
			export abstract class CertificateChainCleaner extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.tls.CertificateChainCleaner>;
				public clean(list0: java.util.List<java.security.cert.Certificate>, string1: string): java.util.List<java.security.cert.Certificate>;
				public static get(trustManager: javax.net.ssl.X509TrustManager): okhttp3.internal.tls.CertificateChainCleaner;
				public static get(caCerts: native.Array<java.security.cert.X509Certificate>): okhttp3.internal.tls.CertificateChainCleaner;
				public constructor();
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module tls {
			export class DistinguishedNameParser extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.tls.DistinguishedNameParser>;
				public findMostSpecific(attributeType: string): string;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module tls {
			export class OkHostnameVerifier extends java.lang.Object implements javax.net.ssl.HostnameVerifier {
				public static class: java.lang.Class<okhttp3.internal.tls.OkHostnameVerifier>;
				public static INSTANCE: okhttp3.internal.tls.OkHostnameVerifier;
				public verifyHostname(hostname: string, pattern: string): boolean;
				public verify(host: string, certificate: java.security.cert.X509Certificate): boolean;
				public verify(host: string, session: javax.net.ssl.SSLSession): boolean;
				public static allSubjectAltNames(certificate: java.security.cert.X509Certificate): java.util.List<string>;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module tls {
			export class TrustRootIndex extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.tls.TrustRootIndex>;
				/**
				 * Constructs a new instance of the okhttp3.internal.tls.TrustRootIndex interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					findByIssuerAndSignature(x509Certificate0: java.security.cert.X509Certificate): java.security.cert.X509Certificate;
				});
				public constructor();
				public findByIssuerAndSignature(x509Certificate0: java.security.cert.X509Certificate): java.security.cert.X509Certificate;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module ws {
			export class RealWebSocket extends java.lang.Object implements okhttp3.WebSocket, okhttp3.internal.ws.WebSocketReader.FrameCallback {
				public static class: java.lang.Class<okhttp3.internal.ws.RealWebSocket>;
				public initReaderAndWriter(name: string, streams: okhttp3.internal.ws.RealWebSocket.Streams): void;
				public request(): okhttp3.Request;
				public constructor(request: okhttp3.Request, listener: okhttp3.WebSocketListener, random: java.util.Random, pingIntervalMillis: number);
				public send(bytes: okio.ByteString): boolean;
				public onReadMessage(bytes: okio.ByteString): void;
				public onReadMessage(text: string): void;
				public onReadClose(code: number, reason: string): void;
				public connect(client: okhttp3.OkHttpClient): void;
				public queueSize(): number;
				public loopReader(): void;
				public close(code: number, reason: string): boolean;
				public onReadPing(payload: okio.ByteString): void;
				public cancel(): void;
				public send(text: string): boolean;
				public onReadPong(buffer: okio.ByteString): void;
				public failWebSocket(e: java.lang.Exception, response: okhttp3.Response): void;
			}
			export module RealWebSocket {
				export class CancelRunnable extends java.lang.Object implements java.lang.Runnable {
					public static class: java.lang.Class<okhttp3.internal.ws.RealWebSocket.CancelRunnable>;
					public run(): void;
				}
				export class Close extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.ws.RealWebSocket.Close>;
				}
				export class Message extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.ws.RealWebSocket.Message>;
				}
				export class PingRunnable extends java.lang.Object implements java.lang.Runnable {
					public static class: java.lang.Class<okhttp3.internal.ws.RealWebSocket.PingRunnable>;
					public run(): void;
				}
				export abstract class Streams extends java.lang.Object implements java.io.Closeable {
					public static class: java.lang.Class<okhttp3.internal.ws.RealWebSocket.Streams>;
					public client: boolean;
					public source: okio.BufferedSource;
					public sink: okio.BufferedSink;
					public close(): void;
					public constructor(client: boolean, source: okio.BufferedSource, sink: okio.BufferedSink);
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module ws {
			export class WebSocketProtocol extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.ws.WebSocketProtocol>;
				public static acceptHeader(key: string): string;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module ws {
			export class WebSocketReader extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.ws.WebSocketReader>;
			}
			export module WebSocketReader {
				export class FrameCallback extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.ws.WebSocketReader.FrameCallback>;
					/**
					 * Constructs a new instance of the okhttp3.internal.ws.WebSocketReader$FrameCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onReadMessage(string0: string): void;
						onReadMessage(byteString0: okio.ByteString): void;
						onReadPing(byteString0: okio.ByteString): void;
						onReadPong(byteString0: okio.ByteString): void;
						onReadClose(int0: number, string1: string): void;
					});
					public constructor();
					public onReadMessage(byteString0: okio.ByteString): void;
					public onReadClose(int0: number, string1: string): void;
					public onReadPong(byteString0: okio.ByteString): void;
					public onReadPing(byteString0: okio.ByteString): void;
					public onReadMessage(string0: string): void;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module ws {
			export class WebSocketWriter extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.ws.WebSocketWriter>;
			}
			export module WebSocketWriter {
				export class FrameSink extends java.lang.Object implements okio.Sink {
					public static class: java.lang.Class<okhttp3.internal.ws.WebSocketWriter.FrameSink>;
					public close(): void;
					public flush(): void;
					public timeout(): okio.Timeout;
					public write(source: okio.Buffer, byteCount: number): void;
				}
			}
		}
	}
}


//Generics information:

