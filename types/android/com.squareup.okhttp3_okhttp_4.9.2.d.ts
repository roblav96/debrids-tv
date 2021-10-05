declare module okhttp3 {
	export class Address extends java.lang.Object {
		public static class: java.lang.Class<okhttp3.Address>;
		/** @deprecated */
		public proxyAuthenticator(): okhttp3.Authenticator;
		/** @deprecated */
		public proxy(): java.net.Proxy;
		public proxy(): java.net.Proxy;
		public sslSocketFactory(): javax.net.ssl.SSLSocketFactory;
		public constructor(uriHost: string, uriPort: number, dns: okhttp3.Dns, socketFactory: javax.net.SocketFactory, sslSocketFactory: javax.net.ssl.SSLSocketFactory, hostnameVerifier: javax.net.ssl.HostnameVerifier, certificatePinner: okhttp3.CertificatePinner, proxyAuthenticator: okhttp3.Authenticator, proxy: java.net.Proxy, protocols: java.util.List<any>, connectionSpecs: java.util.List<okhttp3.ConnectionSpec>, proxySelector: java.net.ProxySelector);
		/** @deprecated */
		public proxySelector(): java.net.ProxySelector;
		public certificatePinner(): okhttp3.CertificatePinner;
		/** @deprecated */
		public protocols(): java.util.List<okhttp3.Protocol>;
		public protocols(): java.util.List<okhttp3.Protocol>;
		public dns(): okhttp3.Dns;
		public proxyAuthenticator(): okhttp3.Authenticator;
		public hostnameVerifier(): javax.net.ssl.HostnameVerifier;
		public hashCode(): number;
		public connectionSpecs(): java.util.List<okhttp3.ConnectionSpec>;
		/** @deprecated */
		public sslSocketFactory(): javax.net.ssl.SSLSocketFactory;
		/** @deprecated */
		public certificatePinner(): okhttp3.CertificatePinner;
		/** @deprecated */
		public url(): okhttp3.HttpUrl;
		public equals(other: any): boolean;
		public proxySelector(): java.net.ProxySelector;
		public url(): okhttp3.HttpUrl;
		public toString(): string;
		/** @deprecated */
		public connectionSpecs(): java.util.List<okhttp3.ConnectionSpec>;
		/** @deprecated */
		public dns(): okhttp3.Dns;
		public socketFactory(): javax.net.SocketFactory;
		public equals(obj: any): boolean;
		/** @deprecated */
		public hostnameVerifier(): javax.net.ssl.HostnameVerifier;
		public equalsNonHost(that: okhttp3.Address): boolean;
		/** @deprecated */
		public socketFactory(): javax.net.SocketFactory;
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
		});
		public constructor();
		public static NONE: okhttp3.Authenticator;
		public static JAVA_NET_AUTHENTICATOR: okhttp3.Authenticator;
		public static Companion: okhttp3.Authenticator.Companion;
		public authenticate(route0: okhttp3.Route, response1: okhttp3.Response): okhttp3.Request;
	}
	export module Authenticator {
		export class Companion extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.Authenticator.Companion>;
		}
		export module Companion {
			export class AuthenticatorNone extends java.lang.Object implements okhttp3.Authenticator {
				public static class: java.lang.Class<okhttp3.Authenticator.Companion.AuthenticatorNone>;
				public authenticate(route: okhttp3.Route, response: okhttp3.Response): okhttp3.Request;
				public constructor();
			}
		}
	}
}

declare module okhttp3 {
	export class Cache extends java.lang.Object implements java.io.Closeable, java.io.Flushable {
		public static class: java.lang.Class<okhttp3.Cache>;
		public static Companion: okhttp3.Cache.Companion;
		public trackConditionalCacheHit(): void;
		public setWriteSuccessCount(param0: number): void;
		public get(request: okhttp3.Request): okhttp3.Response;
		public close(): void;
		public directory(): java.io.File;
		public writeAbortCount(): number;
		/** @deprecated */
		public directory(): java.io.File;
		public isClosed(): boolean;
		public delete(): void;
		public constructor(directory: java.io.File, maxSize: number, fileSystem: okhttp3.internal.io.FileSystem);
		public trackResponse(cacheStrategy: okhttp3.internal.cache.CacheStrategy): void;
		public size(): number;
		public setWriteAbortCount(param0: number): void;
		public urls(): java.util.Iterator<string>;
		public maxSize(): number;
		public getWriteSuccessCount(): number;
		public getCache(): okhttp3.internal.cache.DiskLruCache;
		public remove(request: okhttp3.Request): void;
		public evictAll(): void;
		public networkCount(): number;
		public getWriteAbortCount(): number;
		public requestCount(): number;
		public flush(): void;
		public put(response: okhttp3.Response): okhttp3.internal.cache.CacheRequest;
		public update(cached: okhttp3.Response, network: okhttp3.Response): void;
		public initialize(): void;
		public static key(url: okhttp3.HttpUrl): string;
		public writeSuccessCount(): number;
		public hitCount(): number;
		public constructor(directory: java.io.File, maxSize: number);
	}
	export module Cache {
		export class CacheResponseBody extends okhttp3.ResponseBody {
			public static class: java.lang.Class<okhttp3.Cache.CacheResponseBody>;
			public getSnapshot(): okhttp3.internal.cache.DiskLruCache.Snapshot;
			public contentLength(): number;
			public source(): okio.BufferedSource;
			public contentType(): okhttp3.MediaType;
			public constructor();
			public close(): void;
			public constructor(snapshot: okhttp3.internal.cache.DiskLruCache.Snapshot, contentType: string, contentLength: string);
		}
		export class Companion extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.Cache.Companion>;
			public key(url: okhttp3.HttpUrl): string;
			public varyMatches(cachedResponse: okhttp3.Response, cachedRequest: okhttp3.Headers, newRequest: okhttp3.Request): boolean;
			public hasVaryAll(thishasVaryAll: okhttp3.Response): boolean;
			public varyHeaders(thisvaryHeaders: okhttp3.Response): okhttp3.Headers;
			public readInt(source: okio.BufferedSource): number;
		}
		export class Entry extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.Cache.Entry>;
			public static Companion: okhttp3.Cache.Entry.Companion;
			public constructor(response: okhttp3.Response);
			public writeTo(editor: okhttp3.internal.cache.DiskLruCache.Editor): void;
			public matches(request: okhttp3.Request, response: okhttp3.Response): boolean;
			public response(snapshot: okhttp3.internal.cache.DiskLruCache.Snapshot): okhttp3.Response;
			public constructor(rawSource: okio.Source);
		}
		export module Entry {
			export class Companion extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.Cache.Entry.Companion>;
			}
		}
		export class RealCacheRequest extends java.lang.Object implements okhttp3.internal.cache.CacheRequest {
			public static class: java.lang.Class<okhttp3.Cache.RealCacheRequest>;
			public getDone(): boolean;
			public body(): okio.Sink;
			public setDone(param0: boolean): void;
			public constructor(this0: okhttp3.internal.cache.DiskLruCache.Editor);
			public abort(): void;
		}
	}
}

declare module okhttp3 {
	export class CacheControl extends java.lang.Object {
		public static class: java.lang.Class<okhttp3.CacheControl>;
		public static FORCE_NETWORK: okhttp3.CacheControl;
		public static FORCE_CACHE: okhttp3.CacheControl;
		public static Companion: okhttp3.CacheControl.Companion;
		/** @deprecated */
		public mustRevalidate(): boolean;
		public maxStaleSeconds(): number;
		public static parse(headers: okhttp3.Headers): okhttp3.CacheControl;
		public toString(): string;
		public mustRevalidate(): boolean;
		/** @deprecated */
		public maxAgeSeconds(): number;
		/** @deprecated */
		public sMaxAgeSeconds(): number;
		/** @deprecated */
		public noTransform(): boolean;
		/** @deprecated */
		public noStore(): boolean;
		public minFreshSeconds(): number;
		public onlyIfCached(): boolean;
		public noCache(): boolean;
		public noTransform(): boolean;
		/** @deprecated */
		public minFreshSeconds(): number;
		/** @deprecated */
		public onlyIfCached(): boolean;
		public isPrivate(): boolean;
		/** @deprecated */
		public noCache(): boolean;
		public immutable(): boolean;
		/** @deprecated */
		public immutable(): boolean;
		public sMaxAgeSeconds(): number;
		/** @deprecated */
		public maxStaleSeconds(): number;
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
			public maxStale(maxStale: number, timeUnit: java.util.concurrent.TimeUnit): okhttp3.CacheControl.Builder;
			public build(): okhttp3.CacheControl;
			public constructor();
			public noStore(): okhttp3.CacheControl.Builder;
			public noTransform(): okhttp3.CacheControl.Builder;
			public maxAge(maxAge: number, timeUnit: java.util.concurrent.TimeUnit): okhttp3.CacheControl.Builder;
		}
		export class Companion extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.CacheControl.Companion>;
			public parse(headers: okhttp3.Headers): okhttp3.CacheControl;
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
			 * Constructs a new instance of the okhttp3.Call() when extending the interface class.
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
		public static Companion: okhttp3.CertificatePinner.Companion;
		public constructor(pins: java.util.Set<okhttp3.CertificatePinner.Pin>, certificateChainCleaner: okhttp3.internal.tls.CertificateChainCleaner);
		public equals(other: any): boolean;
		/** @deprecated */
		public check(hostname: string, peerCertificates: native.Array<java.security.cert.Certificate>): void;
		public static pin(certificate: java.security.cert.Certificate): string;
		public withCertificateChainCleaner(certificateChainCleaner: okhttp3.internal.tls.CertificateChainCleaner): okhttp3.CertificatePinner;
		public findMatchingPins(hostname: string): java.util.List<okhttp3.CertificatePinner.Pin>;
		public getCertificateChainCleaner(): okhttp3.internal.tls.CertificateChainCleaner;
		public static sha1Hash(thissha1Hash: java.security.cert.X509Certificate): okio.ByteString;
		public static sha256Hash(thissha256Hash: java.security.cert.X509Certificate): okio.ByteString;
		public equals(obj: any): boolean;
		public check(hostname: string, peerCertificates: java.util.List<any>): void;
		public hashCode(): number;
		public check(hostname: string, cleanedPeerCertificatesFn: kotlin.jvm.functions.Function0<any>): void;
		public getPins(): java.util.Set<okhttp3.CertificatePinner.Pin>;
	}
	export module CertificatePinner {
		export class Builder extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.CertificatePinner.Builder>;
			public build(): okhttp3.CertificatePinner;
			public add(pattern: string, pins: native.Array<string>): okhttp3.CertificatePinner.Builder;
			public constructor();
			public getPins(): java.util.List<okhttp3.CertificatePinner.Pin>;
		}
		export class Companion extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.CertificatePinner.Companion>;
			public sha1Hash(thissha1Hash: java.security.cert.X509Certificate): okio.ByteString;
			public sha256Hash(thissha256Hash: java.security.cert.X509Certificate): okio.ByteString;
			public pin(certificate: java.security.cert.Certificate): string;
		}
		export class Pin extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.CertificatePinner.Pin>;
			public matchesCertificate(certificate: java.security.cert.X509Certificate): boolean;
			public equals(other: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public matchesHostname(hostname: string): boolean;
			public constructor(pattern: string, pin: string);
			public getHash(): okio.ByteString;
			public getHashAlgorithm(): string;
			public getPattern(): string;
			public hashCode(): number;
		}
	}
}

declare module okhttp3 {
	export class Challenge extends java.lang.Object {
		public static class: java.lang.Class<okhttp3.Challenge>;
		public constructor(scheme: string, realm: string);
		public equals(other: any): boolean;
		public scheme(): string;
		/** @deprecated */
		public scheme(): string;
		public toString(): string;
		public withCharset(charset: java.nio.charset.Charset): okhttp3.Challenge;
		public realm(): string;
		public authParams(): java.util.Map<string,string>;
		public charset(): java.nio.charset.Charset;
		/** @deprecated */
		public charset(): java.nio.charset.Charset;
		public equals(obj: any): boolean;
		/** @deprecated */
		public authParams(): java.util.Map<string,string>;
		public hashCode(): number;
		/** @deprecated */
		public realm(): string;
		public constructor(scheme: string, authParams: java.util.Map<string,string>);
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
		public static Companion: okhttp3.CipherSuite.Companion;
		public javaName(): string;
		/** @deprecated */
		public javaName(): string;
		public toString(): string;
		public static forJavaName(javaName: string): okhttp3.CipherSuite;
	}
	export module CipherSuite {
		export class Companion extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.CipherSuite.Companion>;
			public forJavaName(javaName: string): okhttp3.CipherSuite;
			public getORDER_BY_NAME(): java.util.Comparator<string>;
		}
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
		public getDelegate(): okhttp3.internal.connection.RealConnectionPool;
		public evictAll(): void;
		public idleConnectionCount(): number;
		public constructor(delegate: okhttp3.internal.connection.RealConnectionPool);
	}
}

declare module okhttp3 {
	export class ConnectionSpec extends java.lang.Object {
		public static class: java.lang.Class<okhttp3.ConnectionSpec>;
		public static RESTRICTED_TLS: okhttp3.ConnectionSpec;
		public static MODERN_TLS: okhttp3.ConnectionSpec;
		public static COMPATIBLE_TLS: okhttp3.ConnectionSpec;
		public static CLEARTEXT: okhttp3.ConnectionSpec;
		public static Companion: okhttp3.ConnectionSpec.Companion;
		/** @deprecated */
		public supportsTlsExtensions(): boolean;
		public cipherSuites(): java.util.List<okhttp3.CipherSuite>;
		public equals(other: any): boolean;
		public tlsVersions(): java.util.List<okhttp3.TlsVersion>;
		public supportsTlsExtensions(): boolean;
		public apply(sslSocket: javax.net.ssl.SSLSocket, isFallback: boolean): void;
		public toString(): string;
		public constructor(isTls: boolean, supportsTlsExtensions: boolean, cipherSuitesAsString: native.Array<string>, tlsVersionsAsString: native.Array<string>);
		/** @deprecated */
		public cipherSuites(): java.util.List<okhttp3.CipherSuite>;
		public equals(obj: any): boolean;
		public isCompatible(socket: javax.net.ssl.SSLSocket): boolean;
		public hashCode(): number;
		public isTls(): boolean;
		/** @deprecated */
		public tlsVersions(): java.util.List<okhttp3.TlsVersion>;
	}
	export module ConnectionSpec {
		export class Builder extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.ConnectionSpec.Builder>;
			public build(): okhttp3.ConnectionSpec;
			public setCipherSuites(param0: native.Array<string>): void;
			public getSupportsTlsExtensions(): boolean;
			public cipherSuites(cipherSuites: native.Array<okhttp3.CipherSuite>): okhttp3.ConnectionSpec.Builder;
			/** @deprecated */
			public supportsTlsExtensions(supportsTlsExtensions: boolean): okhttp3.ConnectionSpec.Builder;
			public tlsVersions(tlsVersions: native.Array<okhttp3.TlsVersion>): okhttp3.ConnectionSpec.Builder;
			public tlsVersions(tlsVersions: native.Array<string>): okhttp3.ConnectionSpec.Builder;
			public constructor(tls: boolean);
			public getTlsVersions(): native.Array<string>;
			public getTls(): boolean;
			public cipherSuites(cipherSuites: native.Array<string>): okhttp3.ConnectionSpec.Builder;
			public allEnabledCipherSuites(): okhttp3.ConnectionSpec.Builder;
			public setSupportsTlsExtensions(param0: boolean): void;
			public allEnabledTlsVersions(): okhttp3.ConnectionSpec.Builder;
			public constructor(connectionSpec: okhttp3.ConnectionSpec);
			public setTls(param0: boolean): void;
			public getCipherSuites(): native.Array<string>;
			public setTlsVersions(param0: native.Array<string>): void;
		}
		export class Companion extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.ConnectionSpec.Companion>;
		}
	}
}

declare module okhttp3 {
	export class Cookie extends java.lang.Object {
		public static class: java.lang.Class<okhttp3.Cookie>;
		public static Companion: okhttp3.Cookie.Companion;
		/** @deprecated */
		public hostOnly(): boolean;
		/** @deprecated */
		public expiresAt(): number;
		public static parse(url: okhttp3.HttpUrl, setCookie: string): okhttp3.Cookie;
		public toString(forObsoleteRfc2965: boolean): string;
		public static parseAll(url: okhttp3.HttpUrl, headers: okhttp3.Headers): java.util.List<okhttp3.Cookie>;
		public httpOnly(): boolean;
		/** @deprecated */
		public path(): string;
		public expiresAt(): number;
		/** @deprecated */
		public name(): string;
		public hashCode(): number;
		/** @deprecated */
		public persistent(): boolean;
		/** @deprecated */
		public domain(): string;
		public secure(): boolean;
		/** @deprecated */
		public httpOnly(): boolean;
		public domain(): string;
		public equals(other: any): boolean;
		public matches(url: okhttp3.HttpUrl): boolean;
		/** @deprecated */
		public secure(): boolean;
		public toString(): string;
		/** @deprecated */
		public value(): string;
		public persistent(): boolean;
		public equals(obj: any): boolean;
		public hostOnly(): boolean;
		public name(): string;
		public path(): string;
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
		export class Companion extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.Cookie.Companion>;
			public parse(url: okhttp3.HttpUrl, setCookie: string): okhttp3.Cookie;
			public parse(currentTimeMillis: number, url: okhttp3.HttpUrl, setCookie: string): okhttp3.Cookie;
			public parseAll(url: okhttp3.HttpUrl, headers: okhttp3.Headers): java.util.List<okhttp3.Cookie>;
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
		public static Companion: okhttp3.CookieJar.Companion;
		public saveFromResponse(httpUrl0: okhttp3.HttpUrl, list1: java.util.List<okhttp3.Cookie>): void;
		public loadForRequest(httpUrl0: okhttp3.HttpUrl): java.util.List<okhttp3.Cookie>;
	}
	export module CookieJar {
		export class Companion extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.CookieJar.Companion>;
		}
		export module Companion {
			export class NoCookies extends java.lang.Object implements okhttp3.CookieJar {
				public static class: java.lang.Class<okhttp3.CookieJar.Companion.NoCookies>;
				public saveFromResponse(url: okhttp3.HttpUrl, cookies: java.util.List<okhttp3.Cookie>): void;
				public loadForRequest(url: okhttp3.HttpUrl): java.util.List<okhttp3.Cookie>;
				public constructor();
			}
		}
	}
}

declare module okhttp3 {
	export class Credentials extends java.lang.Object {
		public static class: java.lang.Class<okhttp3.Credentials>;
		public static INSTANCE: okhttp3.Credentials;
		public static basic(username: string, password: string, charset: java.nio.charset.Charset): string;
		public static basic(username: string, password: string): string;
	}
}

declare module okhttp3 {
	export class Dispatcher extends java.lang.Object {
		public static class: java.lang.Class<okhttp3.Dispatcher>;
		public constructor();
		public executed(call: okhttp3.internal.connection.RealCall): void;
		public setIdleCallback(param0: java.lang.Runnable): void;
		public finished(call: okhttp3.internal.connection.RealCall): void;
		public finished(call: okhttp3.internal.connection.RealCall.AsyncCall): void;
		public queuedCallsCount(): number;
		/** @deprecated */
		public executorService(): java.util.concurrent.ExecutorService;
		public constructor(executorService: java.util.concurrent.ExecutorService);
		public enqueue(call: okhttp3.internal.connection.RealCall.AsyncCall): void;
		public runningCallsCount(): number;
		public runningCalls(): java.util.List<okhttp3.Call>;
		public setMaxRequestsPerHost(maxRequestsPerHost: number): void;
		public cancelAll(): void;
		public setMaxRequests(maxRequests: number): void;
		public queuedCalls(): java.util.List<okhttp3.Call>;
		public getMaxRequestsPerHost(): number;
		public executorService(): java.util.concurrent.ExecutorService;
		public getIdleCallback(): java.lang.Runnable;
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
		});
		public constructor();
		public static SYSTEM: okhttp3.Dns;
		public static Companion: okhttp3.Dns.Companion;
		public lookup(string0: string): java.util.List<java.net.InetAddress>;
	}
	export module Dns {
		export class Companion extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.Dns.Companion>;
		}
		export module Companion {
			export class DnsSystem extends java.lang.Object implements okhttp3.Dns {
				public static class: java.lang.Class<okhttp3.Dns.Companion.DnsSystem>;
				public lookup(hostname: string): java.util.List<java.net.InetAddress>;
				public constructor();
			}
		}
	}
}

declare module okhttp3 {
	export abstract class EventListener extends java.lang.Object {
		public static class: java.lang.Class<okhttp3.EventListener>;
		public static NONE: okhttp3.EventListener;
		public static Companion: okhttp3.EventListener.Companion;
		public connectStart(call: okhttp3.Call, inetSocketAddress: java.net.InetSocketAddress, proxy: java.net.Proxy): void;
		public cacheHit(call: okhttp3.Call, response: okhttp3.Response): void;
		public proxySelectEnd(call: okhttp3.Call, url: okhttp3.HttpUrl, proxies: java.util.List<java.net.Proxy>): void;
		public responseFailed(call: okhttp3.Call, ioe: java.io.IOException): void;
		public proxySelectStart(call: okhttp3.Call, url: okhttp3.HttpUrl): void;
		public connectEnd(call: okhttp3.Call, inetSocketAddress: java.net.InetSocketAddress, proxy: java.net.Proxy, protocol: okhttp3.Protocol): void;
		public dnsStart(call: okhttp3.Call, domainName: string): void;
		public connectionAcquired(call: okhttp3.Call, connection: okhttp3.Connection): void;
		public callEnd(call: okhttp3.Call): void;
		public callStart(call: okhttp3.Call): void;
		public responseHeadersStart(call: okhttp3.Call): void;
		public connectFailed(call: okhttp3.Call, inetSocketAddress: java.net.InetSocketAddress, proxy: java.net.Proxy, protocol: okhttp3.Protocol, ioe: java.io.IOException): void;
		public dnsEnd(call: okhttp3.Call, domainName: string, inetAddressList: java.util.List<java.net.InetAddress>): void;
		public constructor();
		public canceled(call: okhttp3.Call): void;
		public responseBodyStart(call: okhttp3.Call): void;
		public secureConnectEnd(call: okhttp3.Call, handshake: okhttp3.Handshake): void;
		public requestHeadersStart(call: okhttp3.Call): void;
		public satisfactionFailure(call: okhttp3.Call, response: okhttp3.Response): void;
		public cacheConditionalHit(call: okhttp3.Call, cachedResponse: okhttp3.Response): void;
		public secureConnectStart(call: okhttp3.Call): void;
		public requestBodyStart(call: okhttp3.Call): void;
		public responseBodyEnd(call: okhttp3.Call, byteCount: number): void;
		public requestFailed(call: okhttp3.Call, ioe: java.io.IOException): void;
		public connectionReleased(call: okhttp3.Call, connection: okhttp3.Connection): void;
		public requestBodyEnd(call: okhttp3.Call, byteCount: number): void;
		public requestHeadersEnd(call: okhttp3.Call, request: okhttp3.Request): void;
		public cacheMiss(call: okhttp3.Call): void;
		public callFailed(call: okhttp3.Call, ioe: java.io.IOException): void;
		public responseHeadersEnd(call: okhttp3.Call, response: okhttp3.Response): void;
	}
	export module EventListener {
		export class Companion extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.EventListener.Companion>;
		}
		export class Factory extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.EventListener.Factory>;
			/**
			 * Constructs a new instance of the okhttp3.EventListener() when extending the interface class.
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
		public static Companion: okhttp3.FormBody.Companion;
		public constructor();
		public encodedValue(index: number): string;
		public encodedName(index: number): string;
		public value(index: number): string;
		public constructor(encodedNames: java.util.List<string>, encodedValues: java.util.List<string>);
		public size(): number;
		public writeTo(bufferedSink0: okio.BufferedSink): void;
		public writeTo(sink: okio.BufferedSink): void;
		public name(index: number): string;
		public contentType(): okhttp3.MediaType;
		public contentLength(): number;
		/** @deprecated */
		public size(): number;
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
		export class Companion extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.FormBody.Companion>;
		}
	}
}

declare module okhttp3 {
	export class Handshake extends java.lang.Object {
		public static class: java.lang.Class<okhttp3.Handshake>;
		public static Companion: okhttp3.Handshake.Companion;
		/** @deprecated */
		public tlsVersion(): okhttp3.TlsVersion;
		public equals(other: any): boolean;
		public static get(tlsVersion: okhttp3.TlsVersion, cipherSuite: okhttp3.CipherSuite, peerCertificates: java.util.List<any>, localCertificates: java.util.List<any>): okhttp3.Handshake;
		public localCertificates(): java.util.List<java.security.cert.Certificate>;
		public peerCertificates(): java.util.List<java.security.cert.Certificate>;
		public toString(): string;
		public peerPrincipal(): java.security.Principal;
		public constructor(tlsVersion: okhttp3.TlsVersion, cipherSuite: okhttp3.CipherSuite, localCertificates: java.util.List<any>, peerCertificatesFn: kotlin.jvm.functions.Function0<any>);
		/** @deprecated */
		public cipherSuite(): okhttp3.CipherSuite;
		public equals(obj: any): boolean;
		/** @deprecated */
		public peerPrincipal(): java.security.Principal;
		/** @deprecated */
		public localPrincipal(): java.security.Principal;
		public hashCode(): number;
		/** @deprecated */
		public localCertificates(): java.util.List<java.security.cert.Certificate>;
		public localPrincipal(): java.security.Principal;
		public static get(thishandshake: javax.net.ssl.SSLSession): okhttp3.Handshake;
		public tlsVersion(): okhttp3.TlsVersion;
		/** @deprecated */
		public peerCertificates(): java.util.List<java.security.cert.Certificate>;
		public cipherSuite(): okhttp3.CipherSuite;
	}
	export module Handshake {
		export class Companion extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.Handshake.Companion>;
			public get(tlsVersion: okhttp3.TlsVersion, cipherSuite: okhttp3.CipherSuite, peerCertificates: java.util.List<any>, localCertificates: java.util.List<any>): okhttp3.Handshake;
			/** @deprecated */
			public get(sslSession: javax.net.ssl.SSLSession): okhttp3.Handshake;
			public get(thishandshake: javax.net.ssl.SSLSession): okhttp3.Handshake;
		}
	}
}

declare module okhttp3 {
	export class Headers extends java.lang.Object {
		public static class: java.lang.Class<okhttp3.Headers>;
		public static Companion: okhttp3.Headers.Companion;
		public newBuilder(): okhttp3.Headers.Builder;
		public equals(other: any): boolean;
		public static of(namesAndValues: native.Array<string>): okhttp3.Headers;
		public iterator(): java.util.Iterator<any>;
		public toString(): string;
		public static of(thistoHeaders: java.util.Map<string,string>): okhttp3.Headers;
		public getDate(name: string): java.util.Date;
		public get(name: string): string;
		public equals(obj: any): boolean;
		public names(): java.util.Set<string>;
		public value(index: number): string;
		public size(): number;
		public iterator(): java.util.Iterator<kotlin.Pair<string,string>>;
		public spliterator(): java.util.Spliterator<any>;
		public hashCode(): number;
		public toMultimap(): java.util.Map<string,java.util.List<string>>;
		public getInstant(name: string): java.time.Instant;
		public byteCount(): number;
		public name(index: number): string;
		public values(name: string): java.util.List<string>;
		public forEach(action: any /* any*/): void;
		/** @deprecated */
		public size(): number;
	}
	export module Headers {
		export class Builder extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.Headers.Builder>;
			public add(line: string): okhttp3.Headers.Builder;
			public build(): okhttp3.Headers;
			public addLenient(name: string, value: string): okhttp3.Headers.Builder;
			public removeAll(name: string): okhttp3.Headers.Builder;
			public getNamesAndValues(): java.util.List<string>;
			public addUnsafeNonAscii(name: string, value: string): okhttp3.Headers.Builder;
			public add(name: string, value: string): okhttp3.Headers.Builder;
			public constructor();
			public set(name: string, value: string): okhttp3.Headers.Builder;
			public get(name: string): string;
			public set(name: string, value: java.util.Date): okhttp3.Headers.Builder;
			public addLenient(line: string): okhttp3.Headers.Builder;
			public set(name: string, value: java.time.Instant): okhttp3.Headers.Builder;
			public add(name: string, value: java.time.Instant): okhttp3.Headers.Builder;
			public addAll(headers: okhttp3.Headers): okhttp3.Headers.Builder;
			public add(name: string, value: java.util.Date): okhttp3.Headers.Builder;
		}
		export class Companion extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.Headers.Companion>;
			public of(namesAndValues: native.Array<string>): okhttp3.Headers;
			/** @deprecated */
			public of(namesAndValues: native.Array<string>): okhttp3.Headers;
			/** @deprecated */
			public of(headers: java.util.Map<string,string>): okhttp3.Headers;
			public of(thistoHeaders: java.util.Map<string,string>): okhttp3.Headers;
		}
	}
}

declare module okhttp3 {
	export class HttpUrl extends java.lang.Object {
		public static class: java.lang.Class<okhttp3.HttpUrl>;
		public static USERNAME_ENCODE_SET: string;
		public static PASSWORD_ENCODE_SET: string;
		public static PATH_SEGMENT_ENCODE_SET: string;
		public static PATH_SEGMENT_ENCODE_SET_URI: string;
		public static QUERY_ENCODE_SET: string;
		public static QUERY_COMPONENT_REENCODE_SET: string;
		public static QUERY_COMPONENT_ENCODE_SET: string;
		public static QUERY_COMPONENT_ENCODE_SET_URI: string;
		public static FORM_ENCODE_SET: string;
		public static FRAGMENT_ENCODE_SET: string;
		public static FRAGMENT_ENCODE_SET_URI: string;
		public static Companion: okhttp3.HttpUrl.Companion;
		public topPrivateDomain(): string;
		public queryParameterName(index: number): string;
		/** @deprecated */
		public queryParameterNames(): java.util.Set<string>;
		public queryParameterNames(): java.util.Set<string>;
		/** @deprecated */
		public port(): number;
		public encodedPassword(): string;
		public query(): string;
		/** @deprecated */
		public pathSegments(): java.util.List<string>;
		/** @deprecated */
		public username(): string;
		/** @deprecated */
		public encodedUsername(): string;
		public pathSize(): number;
		public isHttps(): boolean;
		/** @deprecated */
		public host(): string;
		public static parse(thistoHttpUrlOrNull: string): okhttp3.HttpUrl;
		public newBuilder(): okhttp3.HttpUrl.Builder;
		public port(): number;
		public encodedFragment(): string;
		public redact(): string;
		/** @deprecated */
		public scheme(): string;
		public toString(): string;
		public fragment(): string;
		public uri(): java.net.URI;
		/** @deprecated */
		public encodedQuery(): string;
		/** @deprecated */
		public encodedFragment(): string;
		public host(): string;
		public static get(thistoHttpUrl: string): okhttp3.HttpUrl;
		/** @deprecated */
		public password(): string;
		public url(): java.net.URL;
		public querySize(): number;
		public scheme(): string;
		public newBuilder(link: string): okhttp3.HttpUrl.Builder;
		/** @deprecated */
		public uri(): java.net.URI;
		public queryParameter(name: string): string;
		/** @deprecated */
		public encodedPathSegments(): java.util.List<string>;
		public static get(thistoHttpUrlOrNull: java.net.URI): okhttp3.HttpUrl;
		public password(): string;
		public hashCode(): number;
		public constructor(scheme: string, username: string, password: string, host: string, port: number, pathSegments: java.util.List<string>, queryNamesAndValues: java.util.List<string>, fragment: string, url: string);
		public encodedPathSegments(): java.util.List<string>;
		public equals(other: any): boolean;
		public static get(thistoHttpUrlOrNull: java.net.URL): okhttp3.HttpUrl;
		public queryParameterValue(index: number): string;
		public encodedQuery(): string;
		public encodedPath(): string;
		/** @deprecated */
		public pathSize(): number;
		/** @deprecated */
		public encodedPath(): string;
		public queryParameterValues(name: string): java.util.List<string>;
		public encodedUsername(): string;
		public equals(obj: any): boolean;
		/** @deprecated */
		public fragment(): string;
		public static defaultPort(scheme: string): number;
		/** @deprecated */
		public query(): string;
		public pathSegments(): java.util.List<string>;
		public resolve(link: string): okhttp3.HttpUrl;
		/** @deprecated */
		public url(): java.net.URL;
		/** @deprecated */
		public encodedPassword(): string;
		/** @deprecated */
		public querySize(): number;
		public username(): string;
	}
	export module HttpUrl {
		export class Builder extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.HttpUrl.Builder>;
			public static INVALID_HOST: string;
			public static Companion: okhttp3.HttpUrl.Builder.Companion;
			public fragment(fragment: string): okhttp3.HttpUrl.Builder;
			public removeAllQueryParameters(name: string): okhttp3.HttpUrl.Builder;
			public getEncodedQueryNamesAndValues(): java.util.List<string>;
			public removeAllEncodedQueryParameters(encodedName: string): okhttp3.HttpUrl.Builder;
			public addEncodedQueryParameter(encodedName: string, encodedValue: string): okhttp3.HttpUrl.Builder;
			public parse(base: okhttp3.HttpUrl, input: string): okhttp3.HttpUrl.Builder;
			public getEncodedPathSegments(): java.util.List<string>;
			public setQueryParameter(name: string, value: string): okhttp3.HttpUrl.Builder;
			public addQueryParameter(name: string, value: string): okhttp3.HttpUrl.Builder;
			public addEncodedPathSegment(encodedPathSegment: string): okhttp3.HttpUrl.Builder;
			public scheme(scheme: string): okhttp3.HttpUrl.Builder;
			public addPathSegment(pathSegment: string): okhttp3.HttpUrl.Builder;
			public host(host: string): okhttp3.HttpUrl.Builder;
			public encodedQuery(encodedQuery: string): okhttp3.HttpUrl.Builder;
			public setEncodedQueryNamesAndValues(param0: java.util.List<string>): void;
			public getHost(): string;
			public getScheme(): string;
			public setEncodedUsername(param0: string): void;
			public getPort(): number;
			public encodedPassword(encodedPassword: string): okhttp3.HttpUrl.Builder;
			public encodedPath(encodedPath: string): okhttp3.HttpUrl.Builder;
			public setEncodedQueryParameter(encodedName: string, encodedValue: string): okhttp3.HttpUrl.Builder;
			public query(query: string): okhttp3.HttpUrl.Builder;
			public setPort(param0: number): void;
			public addPathSegments(pathSegments: string): okhttp3.HttpUrl.Builder;
			public setHost(param0: string): void;
			public setPathSegment(index: number, pathSegment: string): okhttp3.HttpUrl.Builder;
			public reencodeForUri(): okhttp3.HttpUrl.Builder;
			public constructor();
			public getEncodedUsername(): string;
			public addEncodedPathSegments(encodedPathSegments: string): okhttp3.HttpUrl.Builder;
			public getEncodedPassword(): string;
			public getEncodedFragment(): string;
			public port(port: number): okhttp3.HttpUrl.Builder;
			public toString(): string;
			public username(username: string): okhttp3.HttpUrl.Builder;
			public password(password: string): okhttp3.HttpUrl.Builder;
			public setEncodedPassword(param0: string): void;
			public encodedUsername(encodedUsername: string): okhttp3.HttpUrl.Builder;
			public encodedFragment(encodedFragment: string): okhttp3.HttpUrl.Builder;
			public setEncodedPathSegment(index: number, encodedPathSegment: string): okhttp3.HttpUrl.Builder;
			public removePathSegment(index: number): okhttp3.HttpUrl.Builder;
			public build(): okhttp3.HttpUrl;
			public setScheme(param0: string): void;
			public setEncodedFragment(param0: string): void;
		}
		export module Builder {
			export class Companion extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.HttpUrl.Builder.Companion>;
			}
		}
		export class Companion extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.HttpUrl.Companion>;
			public get(thistoHttpUrlOrNull: java.net.URL): okhttp3.HttpUrl;
			/** @deprecated */
			public get(uri: java.net.URI): okhttp3.HttpUrl;
			public defaultPort(scheme: string): number;
			/** @deprecated */
			public parse(url: string): okhttp3.HttpUrl;
			public canonicalize(thiscanonicalize: string, pos: number, limit: number, encodeSet: string, alreadyEncoded: boolean, strict: boolean, plusIsSpace: boolean, unicodeAllowed: boolean, charset: java.nio.charset.Charset): string;
			public toPathString(thistoPathString: java.util.List<string>, out: java.lang.StringBuilder): void;
			public toQueryNamesAndValues(thistoQueryNamesAndValues: string): java.util.List<string>;
			public toQueryString(thistoQueryString: java.util.List<string>, out: java.lang.StringBuilder): void;
			public get(thistoHttpUrl: string): okhttp3.HttpUrl;
			public get(thistoHttpUrlOrNull: java.net.URI): okhttp3.HttpUrl;
			/** @deprecated */
			public get(url: string): okhttp3.HttpUrl;
			public parse(thistoHttpUrlOrNull: string): okhttp3.HttpUrl;
			/** @deprecated */
			public get(url: java.net.URL): okhttp3.HttpUrl;
			public percentDecode(thispercentDecode: string, pos: number, limit: number, plusIsSpace: boolean): string;
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
		public static Companion: okhttp3.Interceptor.Companion;
		public intercept(chain0: okhttp3.Interceptor.Chain): okhttp3.Response;
	}
	export module Interceptor {
		export class Chain extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.Interceptor.Chain>;
			/**
			 * Constructs a new instance of the okhttp3.Interceptor() when extending the interface class.
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
		export class Companion extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.Interceptor.Companion>;
			public invoke(block: kotlin.jvm.functions.Function1<any,okhttp3.Response>): okhttp3.Interceptor;
		}
	}
}

declare module okhttp3 {
	export class MediaType extends java.lang.Object {
		public static class: java.lang.Class<okhttp3.MediaType>;
		public static Companion: okhttp3.MediaType.Companion;
		public type(): string;
		public equals(other: any): boolean;
		public subtype(): string;
		public charset(defaultValue: java.nio.charset.Charset): java.nio.charset.Charset;
		public toString(): string;
		public static parse(thistoMediaTypeOrNull: string): okhttp3.MediaType;
		/** @deprecated */
		public type(): string;
		/** @deprecated */
		public subtype(): string;
		public charset(): java.nio.charset.Charset;
		public equals(obj: any): boolean;
		public parameter(name: string): string;
		public static get(thistoMediaType: string): okhttp3.MediaType;
		public hashCode(): number;
	}
	export module MediaType {
		export class Companion extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.MediaType.Companion>;
			/** @deprecated */
			public get(mediaType: string): okhttp3.MediaType;
			public get(thistoMediaType: string): okhttp3.MediaType;
			/** @deprecated */
			public parse(mediaType: string): okhttp3.MediaType;
			public parse(thistoMediaTypeOrNull: string): okhttp3.MediaType;
		}
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
		public static Companion: okhttp3.MultipartBody.Companion;
		public constructor();
		public constructor(boundaryByteString: okio.ByteString, type: okhttp3.MediaType, parts: java.util.List<okhttp3.MultipartBody.Part>);
		/** @deprecated */
		public type(): okhttp3.MediaType;
		/** @deprecated */
		public boundary(): string;
		public parts(): java.util.List<okhttp3.MultipartBody.Part>;
		public type(): okhttp3.MediaType;
		public boundary(): string;
		public size(): number;
		/** @deprecated */
		public parts(): java.util.List<okhttp3.MultipartBody.Part>;
		public writeTo(bufferedSink0: okio.BufferedSink): void;
		public part(index: number): okhttp3.MultipartBody.Part;
		public writeTo(sink: okio.BufferedSink): void;
		public contentType(): okhttp3.MediaType;
		public contentLength(): number;
		/** @deprecated */
		public size(): number;
	}
	export module MultipartBody {
		export class Builder extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.MultipartBody.Builder>;
			public addFormDataPart(name: string, value: string): okhttp3.MultipartBody.Builder;
			public setType(type: okhttp3.MediaType): okhttp3.MultipartBody.Builder;
			public addPart(part: okhttp3.MultipartBody.Part): okhttp3.MultipartBody.Builder;
			public constructor(boundary: string);
			public build(): okhttp3.MultipartBody;
			public addPart(headers: okhttp3.Headers, body: okhttp3.RequestBody): okhttp3.MultipartBody.Builder;
			public addFormDataPart(name: string, filename: string, body: okhttp3.RequestBody): okhttp3.MultipartBody.Builder;
			public constructor();
			public addPart(body: okhttp3.RequestBody): okhttp3.MultipartBody.Builder;
		}
		export class Companion extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.MultipartBody.Companion>;
			public appendQuotedString(thisappendQuotedString: java.lang.StringBuilder, key: string): void;
		}
		export class Part extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.MultipartBody.Part>;
			public static Companion: okhttp3.MultipartBody.Part.Companion;
			public headers(): okhttp3.Headers;
			/** @deprecated */
			public headers(): okhttp3.Headers;
			public static createFormData(name: string, filename: string, body: okhttp3.RequestBody): okhttp3.MultipartBody.Part;
			/** @deprecated */
			public body(): okhttp3.RequestBody;
			public static create(headers: okhttp3.Headers, body: okhttp3.RequestBody): okhttp3.MultipartBody.Part;
			public static create(body: okhttp3.RequestBody): okhttp3.MultipartBody.Part;
			public static createFormData(name: string, value: string): okhttp3.MultipartBody.Part;
			public body(): okhttp3.RequestBody;
		}
		export module Part {
			export class Companion extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.MultipartBody.Part.Companion>;
				public createFormData(name: string, value: string): okhttp3.MultipartBody.Part;
				public create(headers: okhttp3.Headers, body: okhttp3.RequestBody): okhttp3.MultipartBody.Part;
				public create(body: okhttp3.RequestBody): okhttp3.MultipartBody.Part;
				public createFormData(name: string, filename: string, body: okhttp3.RequestBody): okhttp3.MultipartBody.Part;
			}
		}
	}
}

declare module okhttp3 {
	export class MultipartReader extends java.lang.Object implements java.io.Closeable {
		public static class: java.lang.Class<okhttp3.MultipartReader>;
		public static Companion: okhttp3.MultipartReader.Companion;
		public boundary(): string;
		public close(): void;
		public nextPart(): okhttp3.MultipartReader.Part;
		public constructor(source: okio.BufferedSource, boundary: string);
		public constructor(response: okhttp3.ResponseBody);
	}
	export module MultipartReader {
		export class Companion extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.MultipartReader.Companion>;
			public getAfterBoundaryOptions(): okio.Options;
		}
		export class Part extends java.lang.Object implements java.io.Closeable {
			public static class: java.lang.Class<okhttp3.MultipartReader.Part>;
			public headers(): okhttp3.Headers;
			public constructor(headers: okhttp3.Headers, body: okio.BufferedSource);
			public body(): okio.BufferedSource;
			public close(): void;
		}
		export class PartSource extends java.lang.Object implements okio.Source {
			public static class: java.lang.Class<okhttp3.MultipartReader.PartSource>;
			public timeout(): okio.Timeout;
			public read(sink: okio.Buffer, byteCount: number): number;
			public constructor(this0: okhttp3.MultipartReader);
			public close(): void;
		}
	}
}

declare module okhttp3 {
	export class OkHttp extends java.lang.Object {
		public static class: java.lang.Class<okhttp3.OkHttp>;
		public static VERSION: string;
		public static INSTANCE: okhttp3.OkHttp;
	}
}

declare module okhttp3 {
	export class OkHttpClient extends java.lang.Object implements java.lang.Cloneable, okhttp3.Call.Factory, okhttp3.WebSocket.Factory {
		public static class: java.lang.Class<okhttp3.OkHttpClient>;
		public static Companion: okhttp3.OkHttpClient.Companion;
		/** @deprecated */
		public proxy(): java.net.Proxy;
		/** @deprecated */
		public proxyAuthenticator(): okhttp3.Authenticator;
		/** @deprecated */
		public callTimeoutMillis(): number;
		public connectionPool(): okhttp3.ConnectionPool;
		public cache(): okhttp3.Cache;
		/** @deprecated */
		public protocols(): java.util.List<okhttp3.Protocol>;
		/** @deprecated */
		public dispatcher(): okhttp3.Dispatcher;
		public dns(): okhttp3.Dns;
		public proxyAuthenticator(): okhttp3.Authenticator;
		public hostnameVerifier(): javax.net.ssl.HostnameVerifier;
		public callTimeoutMillis(): number;
		public newCall(request: okhttp3.Request): okhttp3.Call;
		public connectTimeoutMillis(): number;
		public newWebSocket(request: okhttp3.Request, listener: okhttp3.WebSocketListener): okhttp3.WebSocket;
		public newBuilder(): okhttp3.OkHttpClient.Builder;
		/** @deprecated */
		public networkInterceptors(): java.util.List<okhttp3.Interceptor>;
		/** @deprecated */
		public sslSocketFactory(): javax.net.ssl.SSLSocketFactory;
		public constructor();
		public constructor(builder: okhttp3.OkHttpClient.Builder);
		public followRedirects(): boolean;
		public interceptors(): java.util.List<okhttp3.Interceptor>;
		/** @deprecated */
		public connectTimeoutMillis(): number;
		/** @deprecated */
		public dns(): okhttp3.Dns;
		public socketFactory(): javax.net.SocketFactory;
		public retryOnConnectionFailure(): boolean;
		/** @deprecated */
		public hostnameVerifier(): javax.net.ssl.HostnameVerifier;
		public proxy(): java.net.Proxy;
		public sslSocketFactory(): javax.net.ssl.SSLSocketFactory;
		public certificatePinner(): okhttp3.CertificatePinner;
		/** @deprecated */
		public proxySelector(): java.net.ProxySelector;
		public clone(): any;
		public dispatcher(): okhttp3.Dispatcher;
		/** @deprecated */
		public interceptors(): java.util.List<okhttp3.Interceptor>;
		public certificateChainCleaner(): okhttp3.internal.tls.CertificateChainCleaner;
		public protocols(): java.util.List<okhttp3.Protocol>;
		/** @deprecated */
		public followSslRedirects(): boolean;
		/** @deprecated */
		public writeTimeoutMillis(): number;
		/** @deprecated */
		public cache(): okhttp3.Cache;
		/** @deprecated */
		public connectionPool(): okhttp3.ConnectionPool;
		/** @deprecated */
		public retryOnConnectionFailure(): boolean;
		public minWebSocketMessageToCompress(): number;
		public cookieJar(): okhttp3.CookieJar;
		public pingIntervalMillis(): number;
		/** @deprecated */
		public pingIntervalMillis(): number;
		public connectionSpecs(): java.util.List<okhttp3.ConnectionSpec>;
		/** @deprecated */
		public eventListenerFactory(): okhttp3.EventListener.Factory;
		/** @deprecated */
		public certificatePinner(): okhttp3.CertificatePinner;
		public proxySelector(): java.net.ProxySelector;
		/** @deprecated */
		public cookieJar(): okhttp3.CookieJar;
		public readTimeoutMillis(): number;
		public authenticator(): okhttp3.Authenticator;
		public getRouteDatabase(): okhttp3.internal.connection.RouteDatabase;
		/** @deprecated */
		public authenticator(): okhttp3.Authenticator;
		public writeTimeoutMillis(): number;
		/** @deprecated */
		public connectionSpecs(): java.util.List<okhttp3.ConnectionSpec>;
		public followSslRedirects(): boolean;
		/** @deprecated */
		public readTimeoutMillis(): number;
		/** @deprecated */
		public followRedirects(): boolean;
		public networkInterceptors(): java.util.List<okhttp3.Interceptor>;
		public eventListenerFactory(): okhttp3.EventListener.Factory;
		public x509TrustManager(): javax.net.ssl.X509TrustManager;
		/** @deprecated */
		public socketFactory(): javax.net.SocketFactory;
	}
	export module OkHttpClient {
		export class Builder extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.OkHttpClient.Builder>;
			public getRetryOnConnectionFailure(): boolean;
			public proxy(proxy: java.net.Proxy): okhttp3.OkHttpClient.Builder;
			public getDispatcher(): okhttp3.Dispatcher;
			public setProtocols(param0: java.util.List<any>): void;
			public getProxyAuthenticator(): okhttp3.Authenticator;
			public readTimeout(duration: java.time.Duration): okhttp3.OkHttpClient.Builder;
			public setFollowRedirects(param0: boolean): void;
			public getProxy(): java.net.Proxy;
			public setWriteTimeout(param0: number): void;
			public getSslSocketFactoryOrNull(): javax.net.ssl.SSLSocketFactory;
			public getFollowSslRedirects(): boolean;
			public setSslSocketFactoryOrNull(param0: javax.net.ssl.SSLSocketFactory): void;
			public constructor();
			public cookieJar(cookieJar: okhttp3.CookieJar): okhttp3.OkHttpClient.Builder;
			public setAuthenticator(param0: okhttp3.Authenticator): void;
			public setCertificateChainCleaner(param0: okhttp3.internal.tls.CertificateChainCleaner): void;
			public connectTimeout(timeout: number, unit: java.util.concurrent.TimeUnit): okhttp3.OkHttpClient.Builder;
			public setCache(param0: okhttp3.Cache): void;
			public getWriteTimeout(): number;
			public getProtocols(): java.util.List<okhttp3.Protocol>;
			public setConnectionPool(param0: okhttp3.ConnectionPool): void;
			public setCookieJar(param0: okhttp3.CookieJar): void;
			public getReadTimeout(): number;
			public addInterceptor(block: kotlin.jvm.functions.Function1<any,okhttp3.Response>): okhttp3.OkHttpClient.Builder;
			public setRetryOnConnectionFailure(param0: boolean): void;
			public constructor(okHttpClient: okhttp3.OkHttpClient);
			/** @deprecated */
			public sslSocketFactory(sslSocketFactory: javax.net.ssl.SSLSocketFactory): okhttp3.OkHttpClient.Builder;
			public build(): okhttp3.OkHttpClient;
			public addNetworkInterceptor(block: kotlin.jvm.functions.Function1<any,okhttp3.Response>): okhttp3.OkHttpClient.Builder;
			public getConnectionPool(): okhttp3.ConnectionPool;
			public authenticator(authenticator: okhttp3.Authenticator): okhttp3.OkHttpClient.Builder;
			public getAuthenticator(): okhttp3.Authenticator;
			public dns(dns: okhttp3.Dns): okhttp3.OkHttpClient.Builder;
			public readTimeout(timeout: number, unit: java.util.concurrent.TimeUnit): okhttp3.OkHttpClient.Builder;
			public certificatePinner(certificatePinner: okhttp3.CertificatePinner): okhttp3.OkHttpClient.Builder;
			public setSocketFactory(param0: javax.net.SocketFactory): void;
			public getCertificateChainCleaner(): okhttp3.internal.tls.CertificateChainCleaner;
			public setConnectTimeout(param0: number): void;
			public eventListener(eventListener: okhttp3.EventListener): okhttp3.OkHttpClient.Builder;
			public getCertificatePinner(): okhttp3.CertificatePinner;
			public getDns(): okhttp3.Dns;
			public setProxyAuthenticator(param0: okhttp3.Authenticator): void;
			public getCookieJar(): okhttp3.CookieJar;
			public sslSocketFactory(sslSocketFactory: javax.net.ssl.SSLSocketFactory, trustManager: javax.net.ssl.X509TrustManager): okhttp3.OkHttpClient.Builder;
			public getNetworkInterceptors(): java.util.List<okhttp3.Interceptor>;
			public minWebSocketMessageToCompress(bytes: number): okhttp3.OkHttpClient.Builder;
			public setProxySelector(param0: java.net.ProxySelector): void;
			public followSslRedirects(followProtocolRedirects: boolean): okhttp3.OkHttpClient.Builder;
			public cache(cache: okhttp3.Cache): okhttp3.OkHttpClient.Builder;
			public getCallTimeout(): number;
			public connectionSpecs(connectionSpecs: java.util.List<okhttp3.ConnectionSpec>): okhttp3.OkHttpClient.Builder;
			public dispatcher(dispatcher: okhttp3.Dispatcher): okhttp3.OkHttpClient.Builder;
			public setHostnameVerifier(param0: javax.net.ssl.HostnameVerifier): void;
			public setRouteDatabase(param0: okhttp3.internal.connection.RouteDatabase): void;
			public setPingInterval(param0: number): void;
			public setReadTimeout(param0: number): void;
			public protocols(protocols: java.util.List<any>): okhttp3.OkHttpClient.Builder;
			public connectTimeout(duration: java.time.Duration): okhttp3.OkHttpClient.Builder;
			public callTimeout(timeout: number, unit: java.util.concurrent.TimeUnit): okhttp3.OkHttpClient.Builder;
			public addNetworkInterceptor(interceptor: okhttp3.Interceptor): okhttp3.OkHttpClient.Builder;
			public connectionPool(connectionPool: okhttp3.ConnectionPool): okhttp3.OkHttpClient.Builder;
			public getCache(): okhttp3.Cache;
			public setConnectionSpecs(param0: java.util.List<okhttp3.ConnectionSpec>): void;
			public socketFactory(socketFactory: javax.net.SocketFactory): okhttp3.OkHttpClient.Builder;
			public setProxy(param0: java.net.Proxy): void;
			public interceptors(): java.util.List<okhttp3.Interceptor>;
			public getInterceptors(): java.util.List<okhttp3.Interceptor>;
			public callTimeout(duration: java.time.Duration): okhttp3.OkHttpClient.Builder;
			public getConnectTimeout(): number;
			public getConnectionSpecs(): java.util.List<okhttp3.ConnectionSpec>;
			public pingInterval(interval: number, unit: java.util.concurrent.TimeUnit): okhttp3.OkHttpClient.Builder;
			public addInterceptor(interceptor: okhttp3.Interceptor): okhttp3.OkHttpClient.Builder;
			public writeTimeout(duration: java.time.Duration): okhttp3.OkHttpClient.Builder;
			public setCertificatePinner(param0: okhttp3.CertificatePinner): void;
			public setCallTimeout(param0: number): void;
			public getProxySelector(): java.net.ProxySelector;
			public networkInterceptors(): java.util.List<okhttp3.Interceptor>;
			public getHostnameVerifier(): javax.net.ssl.HostnameVerifier;
			public followRedirects(followRedirects: boolean): okhttp3.OkHttpClient.Builder;
			public proxySelector(proxySelector: java.net.ProxySelector): okhttp3.OkHttpClient.Builder;
			public proxyAuthenticator(proxyAuthenticator: okhttp3.Authenticator): okhttp3.OkHttpClient.Builder;
			public retryOnConnectionFailure(retryOnConnectionFailure: boolean): okhttp3.OkHttpClient.Builder;
			public setFollowSslRedirects(param0: boolean): void;
			public setDispatcher(param0: okhttp3.Dispatcher): void;
			public getX509TrustManagerOrNull(): javax.net.ssl.X509TrustManager;
			public getPingInterval(): number;
			public setEventListenerFactory(param0: okhttp3.EventListener.Factory): void;
			public hostnameVerifier(hostnameVerifier: javax.net.ssl.HostnameVerifier): okhttp3.OkHttpClient.Builder;
			public getEventListenerFactory(): okhttp3.EventListener.Factory;
			public getSocketFactory(): javax.net.SocketFactory;
			public getFollowRedirects(): boolean;
			public getMinWebSocketMessageToCompress(): number;
			public writeTimeout(timeout: number, unit: java.util.concurrent.TimeUnit): okhttp3.OkHttpClient.Builder;
			public pingInterval(duration: java.time.Duration): okhttp3.OkHttpClient.Builder;
			public setDns(param0: okhttp3.Dns): void;
			public setX509TrustManagerOrNull(param0: javax.net.ssl.X509TrustManager): void;
			public setMinWebSocketMessageToCompress(param0: number): void;
			public eventListenerFactory(eventListenerFactory: okhttp3.EventListener.Factory): okhttp3.OkHttpClient.Builder;
			public getRouteDatabase(): okhttp3.internal.connection.RouteDatabase;
		}
		export class Companion extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.OkHttpClient.Companion>;
			public getDEFAULT_CONNECTION_SPECS(): java.util.List<okhttp3.ConnectionSpec>;
			public getDEFAULT_PROTOCOLS(): java.util.List<okhttp3.Protocol>;
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
		public static Companion: okhttp3.Protocol.Companion;
		public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
		public toString(): string;
		public static values(): native.Array<okhttp3.Protocol>;
		public static get(protocol: string): okhttp3.Protocol;
		public static valueOf(string0: string): okhttp3.Protocol;
	}
	export module Protocol {
		export class Companion extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.Protocol.Companion>;
			public get(protocol: string): okhttp3.Protocol;
		}
	}
}

declare module okhttp3 {
	export class Request extends java.lang.Object {
		public static class: java.lang.Class<okhttp3.Request>;
		/** @deprecated */
		public url(): okhttp3.HttpUrl;
		public constructor(url: okhttp3.HttpUrl, method: string, headers: okhttp3.Headers, body: okhttp3.RequestBody, tags: java.util.Map<java.lang.Class<any>,any>);
		public tag(): any;
		public headers(): okhttp3.Headers;
		public header(name: string): string;
		public newBuilder(): okhttp3.Request.Builder;
		public tag(type: java.lang.Class<any>): any;
		public url(): okhttp3.HttpUrl;
		public cacheControl(): okhttp3.CacheControl;
		public method(): string;
		public toString(): string;
		public headers(name: string): java.util.List<string>;
		/** @deprecated */
		public body(): okhttp3.RequestBody;
		/** @deprecated */
		public cacheControl(): okhttp3.CacheControl;
		/** @deprecated */
		public method(): string;
		public getTags(): java.util.Map<java.lang.Class<any>,any>;
		public body(): okhttp3.RequestBody;
		public isHttps(): boolean;
		/** @deprecated */
		public headers(): okhttp3.Headers;
	}
	export module Request {
		export class Builder extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.Request.Builder>;
			public url(url: java.net.URL): okhttp3.Request.Builder;
			public cacheControl(cacheControl: okhttp3.CacheControl): okhttp3.Request.Builder;
			public setUrl(param0: okhttp3.HttpUrl): void;
			public headers(headers: okhttp3.Headers): okhttp3.Request.Builder;
			public patch(body: okhttp3.RequestBody): okhttp3.Request.Builder;
			public removeHeader(name: string): okhttp3.Request.Builder;
			public get(): okhttp3.Request.Builder;
			public setBody(param0: okhttp3.RequestBody): void;
			public getUrl(): okhttp3.HttpUrl;
			public getTags(): java.util.Map<java.lang.Class<any>,any>;
			public url(url: string): okhttp3.Request.Builder;
			public setMethod(param0: string): void;
			public head(): okhttp3.Request.Builder;
			public getMethod(): string;
			public url(url: okhttp3.HttpUrl): okhttp3.Request.Builder;
			public setHeaders(param0: okhttp3.Headers.Builder): void;
			public constructor(request: okhttp3.Request);
			public delete(): okhttp3.Request.Builder;
			public header(name: string, value: string): okhttp3.Request.Builder;
			public put(body: okhttp3.RequestBody): okhttp3.Request.Builder;
			public constructor();
			public getBody(): okhttp3.RequestBody;
			public setTags(param0: java.util.Map<java.lang.Class<any>,any>): void;
			public tag(tag: any): okhttp3.Request.Builder;
			public build(): okhttp3.Request;
			public getHeaders(): okhttp3.Headers.Builder;
			public addHeader(name: string, value: string): okhttp3.Request.Builder;
			public delete(body: okhttp3.RequestBody): okhttp3.Request.Builder;
			public method(method: string, body: okhttp3.RequestBody): okhttp3.Request.Builder;
			public post(body: okhttp3.RequestBody): okhttp3.Request.Builder;
			public tag(type: java.lang.Class<any>, tag: any): okhttp3.Request.Builder;
		}
	}
}

declare module okhttp3 {
	export abstract class RequestBody extends java.lang.Object {
		public static class: java.lang.Class<okhttp3.RequestBody>;
		public static Companion: okhttp3.RequestBody.Companion;
		public constructor();
		/** @deprecated */
		public static create(contentType: okhttp3.MediaType, content: okio.ByteString): okhttp3.RequestBody;
		/** @deprecated */
		public static create(contentType: okhttp3.MediaType, content: string): okhttp3.RequestBody;
		public isOneShot(): boolean;
		public static create(thistoRequestBody: native.Array<number>, contentType: okhttp3.MediaType): okhttp3.RequestBody;
		/** @deprecated */
		public static create(contentType: okhttp3.MediaType, content: native.Array<number>, offset: number): okhttp3.RequestBody;
		/** @deprecated */
		public static create(contentType: okhttp3.MediaType, content: native.Array<number>): okhttp3.RequestBody;
		public static create(thistoRequestBody: native.Array<number>, contentType: okhttp3.MediaType, offset: number): okhttp3.RequestBody;
		public static create(thistoRequestBody: native.Array<number>): okhttp3.RequestBody;
		public static create(thistoRequestBody: okio.ByteString, contentType: okhttp3.MediaType): okhttp3.RequestBody;
		public static create(thistoRequestBody: native.Array<number>, contentType: okhttp3.MediaType, offset: number, byteCount: number): okhttp3.RequestBody;
		/** @deprecated */
		public static create(contentType: okhttp3.MediaType, file: java.io.File): okhttp3.RequestBody;
		public writeTo(bufferedSink0: okio.BufferedSink): void;
		public contentType(): okhttp3.MediaType;
		public static create(thistoRequestBody: string, contentType: okhttp3.MediaType): okhttp3.RequestBody;
		public contentLength(): number;
		public isDuplex(): boolean;
		public static create(thisasRequestBody: java.io.File, contentType: okhttp3.MediaType): okhttp3.RequestBody;
		/** @deprecated */
		public static create(contentType: okhttp3.MediaType, content: native.Array<number>, offset: number, byteCount: number): okhttp3.RequestBody;
	}
	export module RequestBody {
		export class Companion extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.RequestBody.Companion>;
			/** @deprecated */
			public create(contentType: okhttp3.MediaType, content: native.Array<number>, offset: number, byteCount: number): okhttp3.RequestBody;
			/** @deprecated */
			public create(contentType: okhttp3.MediaType, file: java.io.File): okhttp3.RequestBody;
			public create(thistoRequestBody: string, contentType: okhttp3.MediaType): okhttp3.RequestBody;
			public create(thistoRequestBody: native.Array<number>, contentType: okhttp3.MediaType, offset: number, byteCount: number): okhttp3.RequestBody;
			/** @deprecated */
			public create(contentType: okhttp3.MediaType, content: native.Array<number>, offset: number): okhttp3.RequestBody;
			public create(thisasRequestBody: java.io.File, contentType: okhttp3.MediaType): okhttp3.RequestBody;
			public create(thistoRequestBody: native.Array<number>, contentType: okhttp3.MediaType, offset: number): okhttp3.RequestBody;
			public create(thistoRequestBody: native.Array<number>): okhttp3.RequestBody;
			public create(thistoRequestBody: okio.ByteString, contentType: okhttp3.MediaType): okhttp3.RequestBody;
			public create(thistoRequestBody: native.Array<number>, contentType: okhttp3.MediaType): okhttp3.RequestBody;
			/** @deprecated */
			public create(contentType: okhttp3.MediaType, content: native.Array<number>): okhttp3.RequestBody;
			/** @deprecated */
			public create(contentType: okhttp3.MediaType, content: string): okhttp3.RequestBody;
			/** @deprecated */
			public create(contentType: okhttp3.MediaType, content: okio.ByteString): okhttp3.RequestBody;
		}
	}
}

declare module okhttp3 {
	export class Response extends java.lang.Object implements java.io.Closeable {
		public static class: java.lang.Class<okhttp3.Response>;
		public peekBody(byteCount: number): okhttp3.ResponseBody;
		public headers(): okhttp3.Headers;
		public header(name: string): string;
		public close(): void;
		public sentRequestAtMillis(): number;
		public cacheControl(): okhttp3.CacheControl;
		public exchange(): okhttp3.internal.connection.Exchange;
		public handshake(): okhttp3.Handshake;
		/** @deprecated */
		public request(): okhttp3.Request;
		/** @deprecated */
		public code(): number;
		/** @deprecated */
		public priorResponse(): okhttp3.Response;
		/** @deprecated */
		public networkResponse(): okhttp3.Response;
		public body(): okhttp3.ResponseBody;
		public networkResponse(): okhttp3.Response;
		public trailers(): okhttp3.Headers;
		/** @deprecated */
		public cacheControl(): okhttp3.CacheControl;
		public request(): okhttp3.Request;
		public code(): number;
		public protocol(): okhttp3.Protocol;
		/** @deprecated */
		public protocol(): okhttp3.Protocol;
		/** @deprecated */
		public headers(): okhttp3.Headers;
		public priorResponse(): okhttp3.Response;
		/** @deprecated */
		public body(): okhttp3.ResponseBody;
		public header(name: string, defaultValue: string): string;
		public cacheResponse(): okhttp3.Response;
		/** @deprecated */
		public sentRequestAtMillis(): number;
		public toString(): string;
		public headers(name: string): java.util.List<string>;
		public isSuccessful(): boolean;
		/** @deprecated */
		public receivedResponseAtMillis(): number;
		/** @deprecated */
		public cacheResponse(): okhttp3.Response;
		public newBuilder(): okhttp3.Response.Builder;
		/** @deprecated */
		public message(): string;
		public message(): string;
		public challenges(): java.util.List<okhttp3.Challenge>;
		public receivedResponseAtMillis(): number;
		public constructor(request: okhttp3.Request, protocol: okhttp3.Protocol, message: string, code: number, handshake: okhttp3.Handshake, headers: okhttp3.Headers, body: okhttp3.ResponseBody, networkResponse: okhttp3.Response, cacheResponse: okhttp3.Response, priorResponse: okhttp3.Response, sentRequestAtMillis: number, receivedResponseAtMillis: number, exchange: okhttp3.internal.connection.Exchange);
		public isRedirect(): boolean;
		/** @deprecated */
		public handshake(): okhttp3.Handshake;
	}
	export module Response {
		export class Builder extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.Response.Builder>;
			public setExchange(param0: okhttp3.internal.connection.Exchange): void;
			public getExchange(): okhttp3.internal.connection.Exchange;
			public constructor(response: okhttp3.Response);
			public setNetworkResponse(param0: okhttp3.Response): void;
			public getPriorResponse(): okhttp3.Response;
			public setPriorResponse(param0: okhttp3.Response): void;
			public networkResponse(networkResponse: okhttp3.Response): okhttp3.Response.Builder;
			public getProtocol(): okhttp3.Protocol;
			public code(code: number): okhttp3.Response.Builder;
			public header(name: string, value: string): okhttp3.Response.Builder;
			public headers(headers: okhttp3.Headers): okhttp3.Response.Builder;
			public getSentRequestAtMillis(): number;
			public setProtocol(param0: okhttp3.Protocol): void;
			public getRequest(): okhttp3.Request;
			public request(request: okhttp3.Request): okhttp3.Response.Builder;
			public getCacheResponse(): okhttp3.Response;
			public setHeaders(param0: okhttp3.Headers.Builder): void;
			public setReceivedResponseAtMillis(param0: number): void;
			public setSentRequestAtMillis(param0: number): void;
			public setCacheResponse(param0: okhttp3.Response): void;
			public handshake(handshake: okhttp3.Handshake): okhttp3.Response.Builder;
			public getMessage(): string;
			public priorResponse(priorResponse: okhttp3.Response): okhttp3.Response.Builder;
			public receivedResponseAtMillis(receivedResponseAtMillis: number): okhttp3.Response.Builder;
			public getBody(): okhttp3.ResponseBody;
			public protocol(protocol: okhttp3.Protocol): okhttp3.Response.Builder;
			public removeHeader(name: string): okhttp3.Response.Builder;
			public setBody(param0: okhttp3.ResponseBody): void;
			public constructor();
			public setHandshake(param0: okhttp3.Handshake): void;
			public initExchange(deferredTrailers: okhttp3.internal.connection.Exchange): void;
			public getReceivedResponseAtMillis(): number;
			public message(message: string): okhttp3.Response.Builder;
			public addHeader(name: string, value: string): okhttp3.Response.Builder;
			public setRequest(param0: okhttp3.Request): void;
			public setMessage(param0: string): void;
			public getCode(): number;
			public body(body: okhttp3.ResponseBody): okhttp3.Response.Builder;
			public setCode(param0: number): void;
			public getHeaders(): okhttp3.Headers.Builder;
			public getNetworkResponse(): okhttp3.Response;
			public cacheResponse(cacheResponse: okhttp3.Response): okhttp3.Response.Builder;
			public sentRequestAtMillis(sentRequestAtMillis: number): okhttp3.Response.Builder;
			public build(): okhttp3.Response;
			public getHandshake(): okhttp3.Handshake;
		}
	}
}

declare module okhttp3 {
	export abstract class ResponseBody extends java.lang.Object implements java.io.Closeable {
		public static class: java.lang.Class<okhttp3.ResponseBody>;
		public static Companion: okhttp3.ResponseBody.Companion;
		public constructor();
		public static create(thisasResponseBody: okio.BufferedSource, contentType: okhttp3.MediaType, contentLength: number): okhttp3.ResponseBody;
		public byteStream(): java.io.InputStream;
		public bytes(): native.Array<number>;
		/** @deprecated */
		public static create(contentType: okhttp3.MediaType, contentLength: number, content: okio.BufferedSource): okhttp3.ResponseBody;
		public close(): void;
		public byteString(): okio.ByteString;
		public source(): okio.BufferedSource;
		/** @deprecated */
		public static create(contentType: okhttp3.MediaType, content: string): okhttp3.ResponseBody;
		public charStream(): java.io.Reader;
		public static create(thistoResponseBody: string, contentType: okhttp3.MediaType): okhttp3.ResponseBody;
		/** @deprecated */
		public static create(contentType: okhttp3.MediaType, content: okio.ByteString): okhttp3.ResponseBody;
		/** @deprecated */
		public static create(contentType: okhttp3.MediaType, content: native.Array<number>): okhttp3.ResponseBody;
		public contentType(): okhttp3.MediaType;
		public string(): string;
		public contentLength(): number;
		public static create(thistoResponseBody: native.Array<number>, contentType: okhttp3.MediaType): okhttp3.ResponseBody;
		public static create(thistoResponseBody: okio.ByteString, contentType: okhttp3.MediaType): okhttp3.ResponseBody;
	}
	export module ResponseBody {
		export class BomAwareReader extends java.io.Reader {
			public static class: java.lang.Class<okhttp3.ResponseBody.BomAwareReader>;
			public constructor(source: okio.BufferedSource, charset: java.nio.charset.Charset);
			public read(cbuf: native.Array<string>): number;
			public read(chars0: native.Array<string>, int1: number, int2: number): number;
			public constructor(lock: any);
			public constructor();
			public read(target: java.nio.CharBuffer): number;
			public close(): void;
			public read(cbuf: native.Array<string>, off: number, len: number): number;
			public read(): number;
		}
		export class Companion extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.ResponseBody.Companion>;
			public create(thisasResponseBody: okio.BufferedSource, contentType: okhttp3.MediaType, contentLength: number): okhttp3.ResponseBody;
			public create(thistoResponseBody: string, contentType: okhttp3.MediaType): okhttp3.ResponseBody;
			/** @deprecated */
			public create(contentType: okhttp3.MediaType, content: native.Array<number>): okhttp3.ResponseBody;
			public create(thistoResponseBody: okio.ByteString, contentType: okhttp3.MediaType): okhttp3.ResponseBody;
			/** @deprecated */
			public create(contentType: okhttp3.MediaType, contentLength: number, content: okio.BufferedSource): okhttp3.ResponseBody;
			/** @deprecated */
			public create(contentType: okhttp3.MediaType, content: string): okhttp3.ResponseBody;
			/** @deprecated */
			public create(contentType: okhttp3.MediaType, content: okio.ByteString): okhttp3.ResponseBody;
			public create(thistoResponseBody: native.Array<number>, contentType: okhttp3.MediaType): okhttp3.ResponseBody;
		}
	}
}

declare module okhttp3 {
	export class Route extends java.lang.Object {
		public static class: java.lang.Class<okhttp3.Route>;
		/** @deprecated */
		public proxy(): java.net.Proxy;
		public proxy(): java.net.Proxy;
		public equals(obj: any): boolean;
		public equals(other: any): boolean;
		public address(): okhttp3.Address;
		public constructor(address: okhttp3.Address, proxy: java.net.Proxy, socketAddress: java.net.InetSocketAddress);
		public hashCode(): number;
		/** @deprecated */
		public socketAddress(): java.net.InetSocketAddress;
		public toString(): string;
		/** @deprecated */
		public address(): okhttp3.Address;
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
		public static Companion: okhttp3.TlsVersion.Companion;
		public javaName(): string;
		public static valueOf(string0: string): okhttp3.TlsVersion;
		/** @deprecated */
		public javaName(): string;
		public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
		public static values(): native.Array<okhttp3.TlsVersion>;
		public static forJavaName(javaName: string): okhttp3.TlsVersion;
	}
	export module TlsVersion {
		export class Companion extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.TlsVersion.Companion>;
			public forJavaName(javaName: string): okhttp3.TlsVersion;
		}
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
			 * Constructs a new instance of the okhttp3.WebSocket() when extending the interface class.
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
		export class HostnamesKt extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.internal.HostnamesKt>;
			public static toCanonicalHost(thistoCanonicalHost: string): string;
		}
	}
}

declare module okhttp3 {
	export module internal {
		export class Internal extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.internal.Internal>;
			public static cookieToString(cookie: okhttp3.Cookie, forObsoleteRfc2965: boolean): string;
			public static addHeaderLenient(builder: okhttp3.Headers.Builder, line: string): okhttp3.Headers.Builder;
			public static applyConnectionSpec(connectionSpec: okhttp3.ConnectionSpec, sslSocket: javax.net.ssl.SSLSocket, isFallback: boolean): void;
			public static cacheGet(cache: okhttp3.Cache, request: okhttp3.Request): okhttp3.Response;
			public static parseCookie(currentTimeMillis: number, url: okhttp3.HttpUrl, setCookie: string): okhttp3.Cookie;
			public static addHeaderLenient(builder: okhttp3.Headers.Builder, name: string, value: string): okhttp3.Headers.Builder;
		}
	}
}

declare module okhttp3 {
	export module internal {
		export class SuppressSignatureCheck extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<okhttp3.internal.SuppressSignatureCheck>;
			/**
			 * Constructs a new instance of the okhttp3.internal.SuppressSignatureCheck interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				equals(object0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public toString(): string;
			public equals(obj: any): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module okhttp3 {
	export module internal {
		export class Util extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.internal.Util>;
			public static EMPTY_BYTE_ARRAY: native.Array<number>;
			public static EMPTY_HEADERS: okhttp3.Headers;
			public static EMPTY_RESPONSE: okhttp3.ResponseBody;
			public static EMPTY_REQUEST: okhttp3.RequestBody;
			public static UTC: java.util.TimeZone;
			public static assertionsEnabled: boolean;
			public static okHttpName: string;
			public static userAgent: string;
			public static indexOfFirstNonAsciiWhitespace(thisindexOfFirstNonAsciiWhitespace: string, startIndex: number, endIndex: number): number;
			public static readBomAsCharset(thisreadBomAsCharset: okio.BufferedSource, default1: java.nio.charset.Charset): java.nio.charset.Charset;
			public static asFactory(thisasFactory: okhttp3.EventListener): okhttp3.EventListener.Factory;
			public static trimSubstring(thistrimSubstring: string, startIndex: number, endIndex: number): string;
			public static toLongOrDefault(thistoLongOrDefault: string, defaultValue: number): number;
			public static addIfAbsent(thisaddIfAbsent: java.util.List<any>, element: any): void;
			public static toImmutableList(thistoImmutableList: java.util.List<any>): java.util.List<any>;
			public static delimiterOffset(thisdelimiterOffset: string, delimiters: string, startIndex: number, endIndex: number): number;
			public static headersContentLength(thisheadersContentLength: okhttp3.Response): number;
			public static readMedium(thisreadMedium: okio.BufferedSource): number;
			public static delimiterOffset(thisdelimiterOffset: string, delimiter: string, startIndex: number, endIndex: number): number;
			public static wait(thiswait: any): void;
			public static isHealthy(thisisHealthy: java.net.Socket, source: okio.BufferedSource): boolean;
			public static toImmutableMap(thistoImmutableMap: java.util.Map<any,any>): java.util.Map<any,any>;
			public static canParseAsIpAddress(thiscanParseAsIpAddress: string): boolean;
			public static parseHexDigit(thisparseHexDigit: string): number;
			public static checkOffsetAndCount(arrayLength: number, offset: number, count: number): void;
			public static withSuppressed(thiswithSuppressed: java.lang.Exception, suppressed: java.util.List<any>): java.lang.Throwable;
			public static toNonNegativeInt(thistoNonNegativeInt: string, defaultValue: number): number;
			public static peerName(thispeerName: java.net.Socket): string;
			public static writeMedium(thiswriteMedium: okio.BufferedSink, medium: number): void;
			public static ignoreIoExceptions(block: kotlin.jvm.functions.Function0<kotlin.Unit>): void;
			public static toHostHeader(thistoHostHeader: okhttp3.HttpUrl, includeDefaultPort: boolean): string;
			public static toHexString(thistoHexString: number): string;
			public static isCivilized(thisisCivilized: okhttp3.internal.io.FileSystem, file: java.io.File): boolean;
			public static isSensitiveHeader(name: string): boolean;
			public static toHeaderList(thistoHeaderList: okhttp3.Headers): java.util.List<okhttp3.internal.http2.Header>;
			public static readFieldOrNull(instance: any, fieldType: java.lang.Class<any>, fieldName: string): any;
			public static discard(thisdiscard: okio.Source, timeout: number, timeUnit: java.util.concurrent.TimeUnit): boolean;
			public wait(timeout: number): void;
			public static notify(thisnotify: any): void;
			public static skipAll(thisskipAll: okio.Buffer, b: number): number;
			public static skipAll(thisskipAll: okio.Source, duration: number, timeUnit: java.util.concurrent.TimeUnit): boolean;
			public static indexOfLastNonAsciiWhitespace(thisindexOfLastNonAsciiWhitespace: string, startIndex: number, endIndex: number): number;
			public static indexOf(thisindexOf: native.Array<string>, value: string, comparator: java.util.Comparator<string>): number;
			public static immutableListOf(elements: native.Array<any>): java.util.List<any>;
			public static concat(thisconcat: native.Array<string>, value: string): native.Array<string>;
			public static toHeaders(thistoHeaders: java.util.List<okhttp3.internal.http2.Header>): okhttp3.Headers;
			public static canReuseConnectionFor(thiscanReuseConnectionFor: okhttp3.HttpUrl, other: okhttp3.HttpUrl): boolean;
			public wait(): void;
			public static intersect(thisintersect: native.Array<string>, other: native.Array<string>, comparator: java.util.Comparator<any>): native.Array<string>;
			public static indexOfNonWhitespace(thisindexOfNonWhitespace: string, startIndex: number): number;
			public notify(): void;
			public static threadFactory(name: string, daemon: boolean): java.util.concurrent.ThreadFactory;
			public static threadName(name: string, block: kotlin.jvm.functions.Function0<kotlin.Unit>): void;
			public wait(long0: number, int1: number): void;
			public static assertThreadHoldsLock(thisassertThreadHoldsLock: any): void;
			public static assertThreadDoesntHoldLock(thisassertThreadDoesntHoldLock: any): void;
			public static notifyAll(thisnotifyAll: any): void;
			public static and(thisand: number, mask: number): number;
			public static checkDuration(name: string, duration: number, unit: java.util.concurrent.TimeUnit): number;
			public static format(format: string, objects1: native.Array<any>): string;
			public notifyAll(): void;
			public static filterList(thisfilterList: java.lang.Iterable<any>, predicate: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static indexOfControlOrNonAscii(thisindexOfControlOrNonAscii: string): number;
			public static closeQuietly(thiscloseQuietly: java.net.ServerSocket): void;
			public static closeQuietly(thiscloseQuietly: java.io.Closeable): void;
			public static hasIntersection(thishasIntersection: native.Array<string>, other: native.Array<string>, comparator: java.util.Comparator<any>): boolean;
			public static closeQuietly(thiscloseQuietly: java.net.Socket): void;
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module authenticator {
			export class JavaNetAuthenticator extends java.lang.Object implements okhttp3.Authenticator {
				public static class: java.lang.Class<okhttp3.internal.authenticator.JavaNetAuthenticator>;
				public authenticate(route: okhttp3.Route, response: okhttp3.Response): okhttp3.Request;
				public constructor(defaultDns: okhttp3.Dns);
				public constructor();
			}
			export module JavaNetAuthenticator {
				export class WhenMappings extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.authenticator.JavaNetAuthenticator.WhenMappings>;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module cache {
			export class CacheInterceptor extends java.lang.Object implements okhttp3.Interceptor {
				public static class: java.lang.Class<okhttp3.internal.cache.CacheInterceptor>;
				public static Companion: okhttp3.internal.cache.CacheInterceptor.Companion;
				public constructor(cache: okhttp3.Cache);
				public getCache(): okhttp3.Cache;
				public intercept(chain: okhttp3.Interceptor.Chain): okhttp3.Response;
			}
			export module CacheInterceptor {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.cache.CacheInterceptor.Companion>;
				}
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
				public static Companion: okhttp3.internal.cache.CacheStrategy.Companion;
				public constructor(networkRequest: okhttp3.Request, cacheResponse: okhttp3.Response);
				public getNetworkRequest(): okhttp3.Request;
				public getCacheResponse(): okhttp3.Response;
			}
			export module CacheStrategy {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.cache.CacheStrategy.Companion>;
					public isCacheable(response: okhttp3.Response, request: okhttp3.Request): boolean;
				}
				export class Factory extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.cache.CacheStrategy.Factory>;
					public constructor(nowMillis: number, request: okhttp3.Request, cacheResponse: okhttp3.Response);
					public compute(): okhttp3.internal.cache.CacheStrategy;
					public getRequest(): okhttp3.Request;
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
				public static JOURNAL_FILE: string;
				public static JOURNAL_FILE_TEMP: string;
				public static JOURNAL_FILE_BACKUP: string;
				public static MAGIC: string;
				public static VERSION_1: string;
				public static ANY_SEQUENCE_NUMBER: number;
				public static LEGAL_KEY_PATTERN: kotlin.text.Regex;
				public static CLEAN: string;
				public static DIRTY: string;
				public static REMOVE: string;
				public static READ: string;
				public static Companion: okhttp3.internal.cache.DiskLruCache.Companion;
				public getClosed(): boolean;
				public edit(key: string): okhttp3.internal.cache.DiskLruCache.Editor;
				public getDirectory(): java.io.File;
				public getValueCount(): number;
				public flush(): void;
				public setClosed(param0: boolean): void;
				public remove(key: string): boolean;
				public trimToSize(): void;
				public get(key: string): okhttp3.internal.cache.DiskLruCache.Snapshot;
				public delete(): void;
				public getLruEntries(): java.util.LinkedHashMap<string,okhttp3.internal.cache.DiskLruCache.Entry>;
				public completeEdit(editor: okhttp3.internal.cache.DiskLruCache.Editor, success: boolean): void;
				public evictAll(): void;
				public constructor(fileSystem: okhttp3.internal.io.FileSystem, directory: java.io.File, appVersion: number, valueCount: number, maxSize: number, taskRunner: okhttp3.internal.concurrent.TaskRunner);
				public edit(key: string, expectedSequenceNumber: number): okhttp3.internal.cache.DiskLruCache.Editor;
				public rebuildJournal(): void;
				public close(): void;
				public snapshots(): java.util.Iterator<okhttp3.internal.cache.DiskLruCache.Snapshot>;
				public isClosed(): boolean;
				public size(): number;
				public setMaxSize(value: number): void;
				public initialize(): void;
				public removeEntry(entry: okhttp3.internal.cache.DiskLruCache.Entry): boolean;
				public getMaxSize(): number;
				public getFileSystem(): okhttp3.internal.io.FileSystem;
			}
			export module DiskLruCache {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.cache.DiskLruCache.Companion>;
				}
				export class Editor extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.cache.DiskLruCache.Editor>;
					public detach(): void;
					public commit(): void;
					public newSink(index: number): okio.Sink;
					public newSource(index: number): okio.Source;
					public getEntry(): okhttp3.internal.cache.DiskLruCache.Entry;
					public getWritten(): native.Array<boolean>;
					public constructor(this0: okhttp3.internal.cache.DiskLruCache.Entry);
					public abort(): void;
				}
				export class Entry extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.cache.DiskLruCache.Entry>;
					public getReadable(): boolean;
					public setLockingSourceCount(param0: number): void;
					public writeLengths(writer: okio.BufferedSink): void;
					public setCurrentEditor(param0: okhttp3.internal.cache.DiskLruCache.Editor): void;
					public getLengths(): native.Array<number>;
					public setReadable(param0: boolean): void;
					public getZombie(): boolean;
					public snapshot(): okhttp3.internal.cache.DiskLruCache.Snapshot;
					public setZombie(param0: boolean): void;
					public setSequenceNumber(param0: number): void;
					public getLockingSourceCount(): number;
					public getCleanFiles(): java.util.List<java.io.File>;
					public constructor(this0: string);
					public setLengths(strings: java.util.List<string>): void;
					public getSequenceNumber(): number;
					public getKey(): string;
					public getDirtyFiles(): java.util.List<java.io.File>;
					public getCurrentEditor(): okhttp3.internal.cache.DiskLruCache.Editor;
				}
				export class Snapshot extends java.lang.Object implements java.io.Closeable {
					public static class: java.lang.Class<okhttp3.internal.cache.DiskLruCache.Snapshot>;
					public getSource(index: number): okio.Source;
					public close(): void;
					public key(): string;
					public getLength(index: number): number;
					public constructor(this0: string, key: number, sequenceNumber: java.util.List<any>, sources: native.Array<number>);
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
				public constructor(delegate: okio.Sink, onException: kotlin.jvm.functions.Function1<any,kotlin.Unit>);
				public getOnException(): kotlin.jvm.functions.Function1<java.io.IOException,kotlin.Unit>;
				public constructor(delegate: okio.Sink);
				public flush(): void;
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
				public constructor(fileChannel: java.nio.channels.FileChannel);
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
				public static PREFIX_CLEAN: okio.ByteString;
				public static PREFIX_DIRTY: okio.ByteString;
				public static Companion: okhttp3.internal.cache2.Relay.Companion;
				public commit(upstreamSize: number): void;
				public newSource(): okio.Source;
				public getUpstreamReader(): java.lang.Thread;
				public setUpstreamPos(param0: number): void;
				public getUpstreamBuffer(): okio.Buffer;
				public getSourceCount(): number;
				public metadata(): okio.ByteString;
				public getUpstreamPos(): number;
				public isClosed(): boolean;
				public setSourceCount(param0: number): void;
				public setComplete(param0: boolean): void;
				public getComplete(): boolean;
				public getFile(): java.io.RandomAccessFile;
				public setFile(param0: java.io.RandomAccessFile): void;
				public getBufferMaxSize(): number;
				public getBuffer(): okio.Buffer;
				public setUpstream(param0: okio.Source): void;
				public getUpstream(): okio.Source;
				public setUpstreamReader(param0: java.lang.Thread): void;
			}
			export module Relay {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.cache2.Relay.Companion>;
					public read(file: java.io.File): okhttp3.internal.cache2.Relay;
					public edit(file: java.io.File, upstream: okio.Source, metadata: okio.ByteString, bufferMaxSize: number): okhttp3.internal.cache2.Relay;
				}
				export class RelaySource extends java.lang.Object implements okio.Source {
					public static class: java.lang.Class<okhttp3.internal.cache2.Relay.RelaySource>;
					public constructor(this0: okhttp3.internal.cache2.Relay);
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
		export module concurrent {
			export abstract class Task extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.concurrent.Task>;
				public getNextExecuteNanoTime(): number;
				public runOnce(): number;
				public setNextExecuteNanoTime(param0: number): void;
				public initQueue(queue: okhttp3.internal.concurrent.TaskQueue): void;
				public constructor(name: string, cancelable: boolean);
				public setQueue(param0: okhttp3.internal.concurrent.TaskQueue): void;
				public getQueue(): okhttp3.internal.concurrent.TaskQueue;
				public getCancelable(): boolean;
				public getName(): string;
				public toString(): string;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module concurrent {
			export class TaskLoggerKt extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.concurrent.TaskLoggerKt>;
				public static formatDuration(ns: number): string;
				public static taskLog(task: okhttp3.internal.concurrent.Task, queue: okhttp3.internal.concurrent.TaskQueue, messageBlock: kotlin.jvm.functions.Function0<string>): void;
				public static logElapsed(task: okhttp3.internal.concurrent.Task, queue: okhttp3.internal.concurrent.TaskQueue, block: kotlin.jvm.functions.Function0<any>): any;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module concurrent {
			export class TaskQueue extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.concurrent.TaskQueue>;
				public getActiveTask(): okhttp3.internal.concurrent.Task;
				public constructor(taskRunner: okhttp3.internal.concurrent.TaskRunner, name: string);
				public setActiveTask(param0: okhttp3.internal.concurrent.Task): void;
				public schedule(task: okhttp3.internal.concurrent.Task, delayNanos: number): void;
				public getName(): string;
				public execute(name: string, delayNanos: number, cancelable: boolean, block: kotlin.jvm.functions.Function0<kotlin.Unit>): void;
				public toString(): string;
				public getFutureTasks(): java.util.List<okhttp3.internal.concurrent.Task>;
				public getTaskRunner(): okhttp3.internal.concurrent.TaskRunner;
				public shutdown(): void;
				public getCancelActiveTask(): boolean;
				public getScheduledTasks(): java.util.List<okhttp3.internal.concurrent.Task>;
				public scheduleAndDecide(task: okhttp3.internal.concurrent.Task, delayNanos: number, recurrence: boolean): boolean;
				public cancelAll(): void;
				public getShutdown(): boolean;
				public idleLatch(): java.util.concurrent.CountDownLatch;
				public cancelAllAndDecide(): boolean;
				public setCancelActiveTask(param0: boolean): void;
				public setShutdown(param0: boolean): void;
				public schedule(name: string, delayNanos: number, block: kotlin.jvm.functions.Function0<java.lang.Long>): void;
			}
			export module TaskQueue {
				export class AwaitIdleTask extends okhttp3.internal.concurrent.Task {
					public static class: java.lang.Class<okhttp3.internal.concurrent.TaskQueue.AwaitIdleTask>;
					public runOnce(): number;
					public constructor();
					public constructor(name: string, cancelable: boolean);
					public getLatch(): java.util.concurrent.CountDownLatch;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module concurrent {
			export class TaskRunner extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.concurrent.TaskRunner>;
				public static INSTANCE: okhttp3.internal.concurrent.TaskRunner;
				public static Companion: okhttp3.internal.concurrent.TaskRunner.Companion;
				public cancelAll(): void;
				public activeQueues(): java.util.List<okhttp3.internal.concurrent.TaskQueue>;
				public getBackend(): okhttp3.internal.concurrent.TaskRunner.Backend;
				public constructor(backend: okhttp3.internal.concurrent.TaskRunner.Backend);
				public kickCoordinator(taskQueue: okhttp3.internal.concurrent.TaskQueue): void;
				public awaitTaskToRun(): okhttp3.internal.concurrent.Task;
				public newQueue(): okhttp3.internal.concurrent.TaskQueue;
			}
			export module TaskRunner {
				export class Backend extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.concurrent.TaskRunner.Backend>;
					/**
					 * Constructs a new instance of the okhttp3.internal.concurrent.TaskRunner() when extending the interface class.
					 */
					public constructor(implementation: {
						beforeTask(taskRunner0: okhttp3.internal.concurrent.TaskRunner): void;
						nanoTime(): number;
						coordinatorNotify(taskRunner0: okhttp3.internal.concurrent.TaskRunner): void;
						coordinatorWait(taskRunner0: okhttp3.internal.concurrent.TaskRunner, long1: number): void;
						execute(runnable0: java.lang.Runnable): void;
					});
					public constructor();
					public execute(runnable0: java.lang.Runnable): void;
					public coordinatorWait(taskRunner0: okhttp3.internal.concurrent.TaskRunner, long1: number): void;
					public coordinatorNotify(taskRunner0: okhttp3.internal.concurrent.TaskRunner): void;
					public beforeTask(taskRunner0: okhttp3.internal.concurrent.TaskRunner): void;
					public nanoTime(): number;
				}
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.concurrent.TaskRunner.Companion>;
					public getLogger(): java.util.logging.Logger;
				}
				export class RealBackend extends java.lang.Object implements okhttp3.internal.concurrent.TaskRunner.Backend {
					public static class: java.lang.Class<okhttp3.internal.concurrent.TaskRunner.RealBackend>;
					public coordinatorNotify(taskRunner: okhttp3.internal.concurrent.TaskRunner): void;
					public shutdown(): void;
					public constructor(threadFactory: java.util.concurrent.ThreadFactory);
					public execute(runnable: java.lang.Runnable): void;
					public beforeTask(taskRunner: okhttp3.internal.concurrent.TaskRunner): void;
					public nanoTime(): number;
					public coordinatorWait(taskRunner: okhttp3.internal.concurrent.TaskRunner, nanos: number): void;
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
				public static INSTANCE: okhttp3.internal.connection.ConnectInterceptor;
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
				public configureSecureSocket(sslSocket: javax.net.ssl.SSLSocket): okhttp3.ConnectionSpec;
				public connectionFailed(e: java.io.IOException): boolean;
				public constructor(connectionSpecs: java.util.List<okhttp3.ConnectionSpec>);
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
				public constructor(call: okhttp3.internal.connection.RealCall, eventListener: okhttp3.EventListener, finder: okhttp3.internal.connection.ExchangeFinder, codec: okhttp3.internal.http.ExchangeCodec);
				public getCall(): okhttp3.internal.connection.RealCall;
				public trailers(): okhttp3.Headers;
				public getEventListener(): okhttp3.EventListener;
				public isDuplex(): boolean;
				public bodyComplete(bytesRead: number, responseDone: boolean, requestDone: boolean, e: java.io.IOException): java.io.IOException;
				public getConnection(): okhttp3.internal.connection.RealConnection;
				public responseHeadersEnd(response: okhttp3.Response): void;
				public newWebSocketStreams(): okhttp3.internal.ws.RealWebSocket.Streams;
				public createRequestBody(request: okhttp3.Request, duplex: boolean): okio.Sink;
				public responseHeadersStart(): void;
				public noRequestBody(): void;
				public isCoalescedConnection(): boolean;
				public getFinder(): okhttp3.internal.connection.ExchangeFinder;
				public detachWithViolence(): void;
				public readResponseHeaders(expectContinue: boolean): okhttp3.Response.Builder;
				public webSocketUpgradeFailed(): void;
				public cancel(): void;
				public writeRequestHeaders(request: okhttp3.Request): void;
				public flushRequest(): void;
				public noNewExchangesOnConnection(): void;
			}
			export module Exchange {
				export class RequestBodySink extends okio.ForwardingSink {
					public static class: java.lang.Class<okhttp3.internal.connection.Exchange.RequestBodySink>;
					public close(): void;
					public constructor(delegate: okio.Sink);
					public constructor(this0: okio.Sink, delegate: number);
					public flush(): void;
					public timeout(): okio.Timeout;
					public write(source: okio.Buffer, byteCount: number): void;
				}
				export class ResponseBodySource extends okio.ForwardingSource {
					public static class: java.lang.Class<okhttp3.internal.connection.Exchange.ResponseBodySource>;
					public constructor(delegate: okio.Source);
					public complete(e: java.io.IOException): java.io.IOException;
					public constructor(this0: okio.Source, delegate: number);
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
				public trackFailure(e: java.io.IOException): void;
				public getAddress(): okhttp3.Address;
				public retryAfterFailure(): boolean;
				public constructor(connectionPool: okhttp3.internal.connection.RealConnectionPool, address: okhttp3.Address, call: okhttp3.internal.connection.RealCall, eventListener: okhttp3.EventListener);
				public find(client: okhttp3.OkHttpClient, chain: okhttp3.internal.http.RealInterceptorChain): okhttp3.internal.http.ExchangeCodec;
				public sameHostAndPort(url: okhttp3.HttpUrl): boolean;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module connection {
			export class RealCall extends java.lang.Object implements okhttp3.Call {
				public static class: java.lang.Class<okhttp3.internal.connection.RealCall>;
				public request(): okhttp3.Request;
				public getEventListener(): okhttp3.EventListener;
				public timeoutEarlyExit(): void;
				public acquireConnectionNoEvents(connection: okhttp3.internal.connection.RealConnection): void;
				public constructor(client: okhttp3.OkHttpClient, originalRequest: okhttp3.Request, forWebSocket: boolean);
				public getResponseWithInterceptorChain(): okhttp3.Response;
				public getConnectionToCancel(): okhttp3.internal.connection.RealConnection;
				public setConnectionToCancel(param0: okhttp3.internal.connection.RealConnection): void;
				public redactedUrl(): string;
				public isCanceled(): boolean;
				public timeout(): okio.Timeout;
				public initExchange(chain: okhttp3.internal.http.RealInterceptorChain): okhttp3.internal.connection.Exchange;
				public clone(): any;
				public noMoreExchanges(e: java.io.IOException): java.io.IOException;
				public releaseConnectionNoEvents(): java.net.Socket;
				public exitNetworkInterceptorExchange(closeExchange: boolean): void;
				public cancel(): void;
				public execute(): okhttp3.Response;
				public getConnection(): okhttp3.internal.connection.RealConnection;
				public getForWebSocket(): boolean;
				public enqueue(responseCallback: okhttp3.Callback): void;
				public messageDone(exchange: okhttp3.internal.connection.Exchange, requestDone: boolean, responseDone: boolean, e: java.io.IOException): java.io.IOException;
				public retryAfterFailure(): boolean;
				public timeout(): okio.AsyncTimeout;
				public getClient(): okhttp3.OkHttpClient;
				public clone(): okhttp3.internal.connection.RealCall;
				public clone(): okhttp3.Call;
				public getOriginalRequest(): okhttp3.Request;
				public getInterceptorScopedExchange(): okhttp3.internal.connection.Exchange;
				public isExecuted(): boolean;
				public enterNetworkInterceptorExchange(request: okhttp3.Request, newExchangeFinder: boolean): void;
			}
			export module RealCall {
				export class AsyncCall extends java.lang.Object implements java.lang.Runnable {
					public static class: java.lang.Class<okhttp3.internal.connection.RealCall.AsyncCall>;
					public reuseCallsPerHostFrom(other: okhttp3.internal.connection.RealCall.AsyncCall): void;
					public getCallsPerHost(): java.util.concurrent.atomic.AtomicInteger;
					public run(): void;
					public getRequest(): okhttp3.Request;
					public executeOn(executorService: java.util.concurrent.ExecutorService): void;
					public getCall(): okhttp3.internal.connection.RealCall;
					public constructor(this0: okhttp3.Callback);
					public getHost(): string;
				}
				export class CallReference extends java.lang.ref.WeakReference<okhttp3.internal.connection.RealCall> {
					public static class: java.lang.Class<okhttp3.internal.connection.RealCall.CallReference>;
					public getCallStackTrace(): any;
					public constructor(referent: okhttp3.internal.connection.RealCall, callStackTrace: any);
					public constructor(referent: any);
					public constructor(referent: any, q: java.lang.ref.ReferenceQueue<any>);
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module connection {
			export class RealConnection extends okhttp3.internal.http2.Http2Connection.Listener implements okhttp3.Connection {
				public static class: java.lang.Class<okhttp3.internal.connection.RealConnection>;
				public static IDLE_CONNECTION_HEALTHY_NS: number;
				public static Companion: okhttp3.internal.connection.RealConnection.Companion;
				public protocol(): okhttp3.Protocol;
				public trackFailure(call: okhttp3.internal.connection.RealCall, e: java.io.IOException): void;
				public isEligible(address: okhttp3.Address, routes: java.util.List<okhttp3.Route>): boolean;
				public socket(): java.net.Socket;
				public noNewExchanges(): void;
				public constructor();
				public isHealthy(doExtensiveChecks: boolean): boolean;
				public getConnectionPool(): okhttp3.internal.connection.RealConnectionPool;
				public constructor(connectionPool: okhttp3.internal.connection.RealConnectionPool, route: okhttp3.Route);
				public setNoNewExchanges(param0: boolean): void;
				public newWebSocketStreams(exchange: okhttp3.internal.connection.Exchange): okhttp3.internal.ws.RealWebSocket.Streams;
				public cancel(): void;
				public handshake(): okhttp3.Handshake;
				public getCalls(): java.util.List<java.lang.ref.Reference<okhttp3.internal.connection.RealCall>>;
				public onSettings(connection: okhttp3.internal.http2.Http2Connection, settings: okhttp3.internal.http2.Settings): void;
				public isMultiplexed(): boolean;
				public getRouteFailureCount(): number;
				public route(): okhttp3.Route;
				public newCodec(client: okhttp3.OkHttpClient, chain: okhttp3.internal.http.RealInterceptorChain): okhttp3.internal.http.ExchangeCodec;
				public setIdleAtNs(param0: number): void;
				public noCoalescedConnections(): void;
				public toString(): string;
				public connectFailed(client: okhttp3.OkHttpClient, failedRoute: okhttp3.Route, failure: java.io.IOException): void;
				public connect(connectTimeout: number, readTimeout: number, writeTimeout: number, pingIntervalMillis: number, connectionRetryEnabled: boolean, call: okhttp3.Call, eventListener: okhttp3.EventListener): void;
				public incrementSuccessCount(): void;
				public onStream(http2Stream0: okhttp3.internal.http2.Http2Stream): void;
				public getIdleAtNs(): number;
				public setRouteFailureCount(param0: number): void;
				public getNoNewExchanges(): boolean;
				public onStream(stream: okhttp3.internal.http2.Http2Stream): void;
			}
			export module RealConnection {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.connection.RealConnection.Companion>;
					public newTestConnection(connectionPool: okhttp3.internal.connection.RealConnectionPool, route: okhttp3.Route, socket: java.net.Socket, idleAtNs: number): okhttp3.internal.connection.RealConnection;
				}
				export class WhenMappings extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.connection.RealConnection.WhenMappings>;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module connection {
			export class RealConnectionPool extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.connection.RealConnectionPool>;
				public static Companion: okhttp3.internal.connection.RealConnectionPool.Companion;
				public callAcquirePooledConnection(address: okhttp3.Address, call: okhttp3.internal.connection.RealCall, routes: java.util.List<okhttp3.Route>, requireMultiplexed: boolean): boolean;
				public cleanup(now: number): number;
				public connectionCount(): number;
				public put(connection: okhttp3.internal.connection.RealConnection): void;
				public constructor(taskRunner: okhttp3.internal.concurrent.TaskRunner, maxIdleConnections: number, keepAliveDuration: number, timeUnit: java.util.concurrent.TimeUnit);
				public evictAll(): void;
				public idleConnectionCount(): number;
				public connectionBecameIdle(connection: okhttp3.internal.connection.RealConnection): boolean;
			}
			export module RealConnectionPool {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.connection.RealConnectionPool.Companion>;
					public get(connectionPool: okhttp3.ConnectionPool): okhttp3.internal.connection.RealConnectionPool;
				}
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
				public constructor();
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module connection {
			export class RouteException extends java.lang.RuntimeException {
				public static class: java.lang.Class<okhttp3.internal.connection.RouteException>;
				public constructor(cause: java.lang.Throwable);
				public constructor(firstConnectException: java.io.IOException);
				public getLastConnectException(): java.io.IOException;
				public constructor(message: string, cause: java.lang.Throwable);
				public constructor(message: string);
				public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
				public addConnectException(e: java.io.IOException): void;
				public getFirstConnectException(): java.io.IOException;
				public constructor();
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module connection {
			export class RouteSelector extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.connection.RouteSelector>;
				public static Companion: okhttp3.internal.connection.RouteSelector.Companion;
				public next(): okhttp3.internal.connection.RouteSelector.Selection;
				public hasNext(): boolean;
				public constructor(address: okhttp3.Address, routeDatabase: okhttp3.internal.connection.RouteDatabase, call: okhttp3.Call, eventListener: okhttp3.EventListener);
			}
			export module RouteSelector {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.connection.RouteSelector.Companion>;
					public getSocketHost(thissocketHost: java.net.InetSocketAddress): string;
				}
				export class Selection extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.connection.RouteSelector.Selection>;
					public next(): okhttp3.Route;
					public constructor(routes: java.util.List<okhttp3.Route>);
					public getRoutes(): java.util.List<okhttp3.Route>;
					public hasNext(): boolean;
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
			export class DatesKt extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.http.DatesKt>;
				public static MAX_DATE: number;
				public static toHttpDateString(thistoHttpDateString: java.util.Date): string;
				public static toHttpDateOrNull(thistoHttpDateOrNull: string): java.util.Date;
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
					getConnection(): okhttp3.internal.connection.RealConnection;
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
				public static Companion: okhttp3.internal.http.ExchangeCodec.Companion;
				public finishRequest(): void;
				public trailers(): okhttp3.Headers;
				public openResponseBodySource(response0: okhttp3.Response): okio.Source;
				public writeRequestHeaders(request0: okhttp3.Request): void;
				public cancel(): void;
				public flushRequest(): void;
				public readResponseHeaders(boolean0: boolean): okhttp3.Response.Builder;
				public createRequestBody(request0: okhttp3.Request, long1: number): okio.Sink;
				public reportedContentLength(response0: okhttp3.Response): number;
				public getConnection(): okhttp3.internal.connection.RealConnection;
			}
			export module ExchangeCodec {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.http.ExchangeCodec.Companion>;
					public static DISCARD_STREAM_TIMEOUT_MILLIS: number;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http {
			export class HttpHeaders extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.http.HttpHeaders>;
				public static parseChallenges(thisparseChallenges: okhttp3.Headers, headerName: string): java.util.List<okhttp3.Challenge>;
				public static receiveHeaders(thisreceiveHeaders: okhttp3.CookieJar, url: okhttp3.HttpUrl, headers: okhttp3.Headers): void;
				/** @deprecated */
				public static hasBody(response: okhttp3.Response): boolean;
				public static promisesBody(thispromisesBody: okhttp3.Response): boolean;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http {
			export class HttpMethod extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.http.HttpMethod>;
				public static INSTANCE: okhttp3.internal.http.HttpMethod;
				public static requiresRequestBody(method: string): boolean;
				public redirectsToGet(method: string): boolean;
				public invalidatesCache(method: string): boolean;
				public redirectsWithBody(method: string): boolean;
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
				public request(): okhttp3.Request;
				public getConnectTimeoutMillis(): number;
				public getCall(): okhttp3.internal.connection.RealCall;
				public getRequest(): okhttp3.Request;
				public proceed(request: okhttp3.Request): okhttp3.Response;
				public copy(index: number, exchange: okhttp3.internal.connection.Exchange, request: okhttp3.Request, connectTimeoutMillis: number, readTimeoutMillis: number, writeTimeoutMillis: number): okhttp3.internal.http.RealInterceptorChain;
				public connectTimeoutMillis(): number;
				public constructor(call: okhttp3.internal.connection.RealCall, interceptors: java.util.List<any>, index: number, exchange: okhttp3.internal.connection.Exchange, request: okhttp3.Request, connectTimeoutMillis: number, readTimeoutMillis: number, writeTimeoutMillis: number);
				public getReadTimeoutMillis(): number;
				public getWriteTimeoutMillis(): number;
				public withReadTimeout(timeout: number, unit: java.util.concurrent.TimeUnit): okhttp3.Interceptor.Chain;
				public withConnectTimeout(timeout: number, unit: java.util.concurrent.TimeUnit): okhttp3.Interceptor.Chain;
				public connection(): okhttp3.Connection;
				public writeTimeoutMillis(): number;
				public readTimeoutMillis(): number;
				public call(): okhttp3.Call;
				public getExchange(): okhttp3.internal.connection.Exchange;
				public withWriteTimeout(timeout: number, unit: java.util.concurrent.TimeUnit): okhttp3.Interceptor.Chain;
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
				public source(): okio.BufferedSource;
				public constructor(contentTypeString: string, contentLength: number, source: okio.BufferedSource);
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
				public static INSTANCE: okhttp3.internal.http.RequestLine;
				public get(request: okhttp3.Request, proxyType: java.net.Proxy.Type): string;
				public requestPath(url: okhttp3.HttpUrl): string;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http {
			export class RetryAndFollowUpInterceptor extends java.lang.Object implements okhttp3.Interceptor {
				public static class: java.lang.Class<okhttp3.internal.http.RetryAndFollowUpInterceptor>;
				public static Companion: okhttp3.internal.http.RetryAndFollowUpInterceptor.Companion;
				public constructor(client: okhttp3.OkHttpClient);
				public intercept(chain: okhttp3.Interceptor.Chain): okhttp3.Response;
			}
			export module RetryAndFollowUpInterceptor {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.http.RetryAndFollowUpInterceptor.Companion>;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http {
			export class StatusLine extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.http.StatusLine>;
				public protocol: okhttp3.Protocol;
				public code: number;
				public message: string;
				public static HTTP_TEMP_REDIRECT: number;
				public static HTTP_PERM_REDIRECT: number;
				public static HTTP_MISDIRECTED_REQUEST: number;
				public static HTTP_CONTINUE: number;
				public static Companion: okhttp3.internal.http.StatusLine.Companion;
				public constructor(protocol: okhttp3.Protocol, code: number, message: string);
				public toString(): string;
			}
			export module StatusLine {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.http.StatusLine.Companion>;
					public parse(statusLine: string): okhttp3.internal.http.StatusLine;
					public get(response: okhttp3.Response): okhttp3.internal.http.StatusLine;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http1 {
			export class HeadersReader extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.http1.HeadersReader>;
				public static Companion: okhttp3.internal.http1.HeadersReader.Companion;
				public readHeaders(): okhttp3.Headers;
				public getSource(): okio.BufferedSource;
				public readLine(): string;
				public constructor(source: okio.BufferedSource);
			}
			export module HeadersReader {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.http1.HeadersReader.Companion>;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http1 {
			export class Http1ExchangeCodec extends java.lang.Object implements okhttp3.internal.http.ExchangeCodec {
				public static class: java.lang.Class<okhttp3.internal.http1.Http1ExchangeCodec>;
				public static Companion: okhttp3.internal.http1.Http1ExchangeCodec.Companion;
				public finishRequest(): void;
				public constructor(client: okhttp3.OkHttpClient, connection: okhttp3.internal.connection.RealConnection, source: okio.BufferedSource, sink: okio.BufferedSink);
				public trailers(): okhttp3.Headers;
				public reportedContentLength(response: okhttp3.Response): number;
				public isClosed(): boolean;
				public writeRequest(headers: okhttp3.Headers, requestLine: string): void;
				public readResponseHeaders(expectContinue: boolean): okhttp3.Response.Builder;
				public cancel(): void;
				public createRequestBody(request: okhttp3.Request, contentLength: number): okio.Sink;
				public writeRequestHeaders(request: okhttp3.Request): void;
				public flushRequest(): void;
				public skipConnectBody(response: okhttp3.Response): void;
				public openResponseBodySource(response: okhttp3.Response): okio.Source;
				public getConnection(): okhttp3.internal.connection.RealConnection;
			}
			export module Http1ExchangeCodec {
				export abstract class AbstractSource extends java.lang.Object implements okio.Source {
					public static class: java.lang.Class<okhttp3.internal.http1.Http1ExchangeCodec.AbstractSource>;
					public responseBodyComplete(): void;
					public getTimeout(): okio.ForwardingTimeout;
					public setClosed(param0: boolean): void;
					public getClosed(): boolean;
					public close(): void;
					public read(sink: okio.Buffer, byteCount: number): number;
					public constructor(this0: okhttp3.internal.http1.Http1ExchangeCodec);
					public timeout(): okio.Timeout;
				}
				export class ChunkedSink extends java.lang.Object implements okio.Sink {
					public static class: java.lang.Class<okhttp3.internal.http1.Http1ExchangeCodec.ChunkedSink>;
					public close(): void;
					public constructor(this0: okhttp3.internal.http1.Http1ExchangeCodec);
					public flush(): void;
					public timeout(): okio.Timeout;
					public write(source: okio.Buffer, byteCount: number): void;
				}
				export class ChunkedSource extends okhttp3.internal.http1.Http1ExchangeCodec.AbstractSource {
					public static class: java.lang.Class<okhttp3.internal.http1.Http1ExchangeCodec.ChunkedSource>;
					public close(): void;
					public read(sink: okio.Buffer, byteCount: number): number;
					public constructor(this0: okhttp3.internal.http1.Http1ExchangeCodec);
					public timeout(): okio.Timeout;
					public constructor(this0: okhttp3.HttpUrl);
				}
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.http1.Http1ExchangeCodec.Companion>;
				}
				export class FixedLengthSource extends okhttp3.internal.http1.Http1ExchangeCodec.AbstractSource {
					public static class: java.lang.Class<okhttp3.internal.http1.Http1ExchangeCodec.FixedLengthSource>;
					public close(): void;
					public read(sink: okio.Buffer, byteCount: number): number;
					public constructor(this0: okhttp3.internal.http1.Http1ExchangeCodec);
					public timeout(): okio.Timeout;
					public constructor(this0: number);
				}
				export class KnownLengthSink extends java.lang.Object implements okio.Sink {
					public static class: java.lang.Class<okhttp3.internal.http1.Http1ExchangeCodec.KnownLengthSink>;
					public close(): void;
					public constructor(this0: okhttp3.internal.http1.Http1ExchangeCodec);
					public flush(): void;
					public timeout(): okio.Timeout;
					public write(source: okio.Buffer, byteCount: number): void;
				}
				export class UnknownLengthSource extends okhttp3.internal.http1.Http1ExchangeCodec.AbstractSource {
					public static class: java.lang.Class<okhttp3.internal.http1.Http1ExchangeCodec.UnknownLengthSource>;
					public close(): void;
					public read(sink: okio.Buffer, byteCount: number): number;
					public constructor(this0: okhttp3.internal.http1.Http1ExchangeCodec);
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
				public static SETTINGS_TIMEOUT: okhttp3.internal.http2.ErrorCode;
				public static STREAM_CLOSED: okhttp3.internal.http2.ErrorCode;
				public static FRAME_SIZE_ERROR: okhttp3.internal.http2.ErrorCode;
				public static REFUSED_STREAM: okhttp3.internal.http2.ErrorCode;
				public static CANCEL: okhttp3.internal.http2.ErrorCode;
				public static COMPRESSION_ERROR: okhttp3.internal.http2.ErrorCode;
				public static CONNECT_ERROR: okhttp3.internal.http2.ErrorCode;
				public static ENHANCE_YOUR_CALM: okhttp3.internal.http2.ErrorCode;
				public static INADEQUATE_SECURITY: okhttp3.internal.http2.ErrorCode;
				public static HTTP_1_1_REQUIRED: okhttp3.internal.http2.ErrorCode;
				public static Companion: okhttp3.internal.http2.ErrorCode.Companion;
				public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static values(): native.Array<okhttp3.internal.http2.ErrorCode>;
				public static valueOf(string0: string): okhttp3.internal.http2.ErrorCode;
				public getHttpCode(): number;
			}
			export module ErrorCode {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.http2.ErrorCode.Companion>;
					public fromHttp2(code: number): okhttp3.internal.http2.ErrorCode;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http2 {
			export class Header extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.http2.Header>;
				public hpackSize: number;
				public name: okio.ByteString;
				public value: okio.ByteString;
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
				public static Companion: okhttp3.internal.http2.Header.Companion;
				public component2(): okio.ByteString;
				public equals(obj: any): boolean;
				public constructor(name: string, value: string);
				public hashCode(): number;
				public component1(): okio.ByteString;
				public constructor(name: okio.ByteString, value: okio.ByteString);
				public toString(): string;
				public copy(name: okio.ByteString, value: okio.ByteString): okhttp3.internal.http2.Header;
				public constructor(name: okio.ByteString, value: string);
			}
			export module Header {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.http2.Header.Companion>;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http2 {
			export class Hpack extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.http2.Hpack>;
				public static INSTANCE: okhttp3.internal.http2.Hpack;
				public getNAME_TO_FIRST_INDEX(): java.util.Map<okio.ByteString,java.lang.Integer>;
				public checkLowercase(name: okio.ByteString): okio.ByteString;
				public getSTATIC_HEADER_TABLE(): native.Array<okhttp3.internal.http2.Header>;
			}
			export module Hpack {
				export class Reader extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.http2.Hpack.Reader>;
					public dynamicTable: native.Array<okhttp3.internal.http2.Header>;
					public headerCount: number;
					public dynamicTableByteCount: number;
					public maxDynamicTableByteCount(): number;
					public readInt(firstByte: number, prefixMask: number): number;
					public constructor(source: okio.Source, headerTableSizeSetting: number, maxDynamicTableByteCount: number);
					public readHeaders(): void;
					public constructor(source: okio.Source, headerTableSizeSetting: number);
					public readByteString(): okio.ByteString;
					public getAndResetHeaderList(): java.util.List<okhttp3.internal.http2.Header>;
				}
				export class Writer extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.http2.Hpack.Writer>;
					public maxDynamicTableByteCount: number;
					public dynamicTable: native.Array<okhttp3.internal.http2.Header>;
					public headerCount: number;
					public dynamicTableByteCount: number;
					public headerTableSizeSetting: number;
					public resizeHeaderTable(headerTableSizeSetting: number): void;
					public writeByteString(data: okio.ByteString): void;
					public constructor(out: okio.Buffer);
					public writeInt(value: number, prefixMask: number, bits: number): void;
					public writeHeaders(headerBlock: java.util.List<okhttp3.internal.http2.Header>): void;
					public constructor(headerTableSizeSetting: number, useCompression: boolean, out: okio.Buffer);
					public constructor(headerTableSizeSetting: number, out: okio.Buffer);
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
				public static CONNECTION_PREFACE: okio.ByteString;
				public static INITIAL_MAX_FRAME_SIZE: number;
				public static TYPE_DATA: number;
				public static TYPE_HEADERS: number;
				public static TYPE_PRIORITY: number;
				public static TYPE_RST_STREAM: number;
				public static TYPE_SETTINGS: number;
				public static TYPE_PUSH_PROMISE: number;
				public static TYPE_PING: number;
				public static TYPE_GOAWAY: number;
				public static TYPE_WINDOW_UPDATE: number;
				public static TYPE_CONTINUATION: number;
				public static FLAG_NONE: number;
				public static FLAG_ACK: number;
				public static FLAG_END_STREAM: number;
				public static FLAG_END_HEADERS: number;
				public static FLAG_END_PUSH_PROMISE: number;
				public static FLAG_PADDED: number;
				public static FLAG_PRIORITY: number;
				public static FLAG_COMPRESSED: number;
				public static INSTANCE: okhttp3.internal.http2.Http2;
				public formattedType(type: number): string;
				public formatFlags(type: number, flags: number): string;
				public frameLog(inbound: boolean, streamId: number, length: number, type: number, flags: number): string;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http2 {
			export class Http2Connection extends java.lang.Object implements java.io.Closeable {
				public static class: java.lang.Class<okhttp3.internal.http2.Http2Connection>;
				public static OKHTTP_CLIENT_WINDOW_SIZE: number;
				public static INTERVAL_PING: number;
				public static DEGRADED_PING: number;
				public static AWAIT_PING: number;
				public static DEGRADED_PONG_TIMEOUT_NS: number;
				public static Companion: okhttp3.internal.http2.Http2Connection.Companion;
				public setSettings(settings: okhttp3.internal.http2.Settings): void;
				public setPeerSettings(param0: okhttp3.internal.http2.Settings): void;
				public getListener(): okhttp3.internal.http2.Http2Connection.Listener;
				public openStreamCount(): number;
				public setLastGoodStreamId(param0: number): void;
				public flush(): void;
				public getConnectionName(): string;
				public getWriter(): okhttp3.internal.http2.Http2Writer;
				public removeStream(streamId: number): okhttp3.internal.http2.Http2Stream;
				public close(): void;
				public constructor(builder: okhttp3.internal.http2.Http2Connection.Builder);
				public getSocket(): java.net.Socket;
				public writePingAndAwaitPong(): void;
				public writeSynResetLater(streamId: number, errorCode: okhttp3.internal.http2.ErrorCode): void;
				public pushDataLater(streamId: number, source: okio.BufferedSource, byteCount: number, inFinished: boolean): void;
				public writeWindowUpdateLater(streamId: number, unacknowledgedBytesRead: number): void;
				public pushResetLater(streamId: number, errorCode: okhttp3.internal.http2.ErrorCode): void;
				public getReadBytesAcknowledged(): number;
				public writePing(): void;
				public updateConnectionFlowControl(read: number): void;
				public setNextStreamId(param0: number): void;
				public getPeerSettings(): okhttp3.internal.http2.Settings;
				public getWriteBytesMaximum(): number;
				public shutdown(statusCode: okhttp3.internal.http2.ErrorCode): void;
				public getReadBytesTotal(): number;
				public writeHeaders(streamId: number, outFinished: boolean, alternating: java.util.List<okhttp3.internal.http2.Header>): void;
				public isHealthy(nowNs: number): boolean;
				public getClient(): boolean;
				public writePing(reply: boolean, payload1: number, payload2: number): void;
				public start(sendConnectionPreface: boolean): void;
				public pushedStream(streamId: number): boolean;
				public getOkHttpSettings(): okhttp3.internal.http2.Settings;
				public pushHeadersLater(streamId: number, requestHeaders: java.util.List<okhttp3.internal.http2.Header>, inFinished: boolean): void;
				public start(sendConnectionPreface: boolean, taskRunner: okhttp3.internal.concurrent.TaskRunner): void;
				public newStream(requestHeaders: java.util.List<okhttp3.internal.http2.Header>, out: boolean): okhttp3.internal.http2.Http2Stream;
				public getReaderRunnable(): okhttp3.internal.http2.Http2Connection.ReaderRunnable;
				public getStream(id: number): okhttp3.internal.http2.Http2Stream;
				public getLastGoodStreamId(): number;
				public awaitPong(): void;
				public pushStream(associatedStreamId: number, requestHeaders: java.util.List<okhttp3.internal.http2.Header>, out: boolean): okhttp3.internal.http2.Http2Stream;
				public start(): void;
				public getNextStreamId(): number;
				public writeData(streamId: number, outFinished: boolean, buffer: okio.Buffer, byteCount: number): void;
				public sendDegradedPingLater(): void;
				public pushRequestLater(streamId: number, requestHeaders: java.util.List<okhttp3.internal.http2.Header>): void;
				public getStreams(): java.util.Map<java.lang.Integer,okhttp3.internal.http2.Http2Stream>;
				public getWriteBytesTotal(): number;
				public writeSynReset(streamId: number, statusCode: okhttp3.internal.http2.ErrorCode): void;
				public close(connectionCode: okhttp3.internal.http2.ErrorCode, streamCode: okhttp3.internal.http2.ErrorCode, cause: java.io.IOException): void;
			}
			export module Http2Connection {
				export class Builder extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.http2.Http2Connection.Builder>;
					public connectionName: string;
					public source: okio.BufferedSource;
					public sink: okio.BufferedSink;
					public build(): okhttp3.internal.http2.Http2Connection;
					public setSink(param0: okio.BufferedSink): void;
					public setSource(param0: okio.BufferedSource): void;
					public getClient(): boolean;
					public socket(socket: java.net.Socket, peerName: string, source: okio.BufferedSource, sink: okio.BufferedSink): okhttp3.internal.http2.Http2Connection.Builder;
					public pingIntervalMillis(pingIntervalMillis: number): okhttp3.internal.http2.Http2Connection.Builder;
					public getSocket(): java.net.Socket;
					public getListener(): okhttp3.internal.http2.Http2Connection.Listener;
					public socket(socket: java.net.Socket): okhttp3.internal.http2.Http2Connection.Builder;
					public setPushObserver(param0: okhttp3.internal.http2.PushObserver): void;
					public setPingIntervalMillis(param0: number): void;
					public pushObserver(pushObserver: okhttp3.internal.http2.PushObserver): okhttp3.internal.http2.Http2Connection.Builder;
					public getSource(): okio.BufferedSource;
					public socket(socket: java.net.Socket, peerName: string): okhttp3.internal.http2.Http2Connection.Builder;
					public setClient(param0: boolean): void;
					public constructor(client: boolean, taskRunner: okhttp3.internal.concurrent.TaskRunner);
					public getConnectionName(): string;
					public setListener(param0: okhttp3.internal.http2.Http2Connection.Listener): void;
					public getPushObserver(): okhttp3.internal.http2.PushObserver;
					public listener(listener: okhttp3.internal.http2.Http2Connection.Listener): okhttp3.internal.http2.Http2Connection.Builder;
					public setConnectionName(param0: string): void;
					public getSink(): okio.BufferedSink;
					public getPingIntervalMillis(): number;
					public socket(socket: java.net.Socket, peerName: string, source: okio.BufferedSource): okhttp3.internal.http2.Http2Connection.Builder;
					public getTaskRunner(): okhttp3.internal.concurrent.TaskRunner;
					public setSocket(param0: java.net.Socket): void;
				}
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.http2.Http2Connection.Companion>;
					public getDEFAULT_SETTINGS(): okhttp3.internal.http2.Settings;
				}
				export abstract class Listener extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.http2.Http2Connection.Listener>;
					public static REFUSE_INCOMING_STREAMS: okhttp3.internal.http2.Http2Connection.Listener;
					public static Companion: okhttp3.internal.http2.Http2Connection.Listener.Companion;
					public onStream(http2Stream0: okhttp3.internal.http2.Http2Stream): void;
					public onSettings(connection: okhttp3.internal.http2.Http2Connection, settings: okhttp3.internal.http2.Settings): void;
					public constructor();
				}
				export module Listener {
					export class Companion extends java.lang.Object {
						public static class: java.lang.Class<okhttp3.internal.http2.Http2Connection.Listener.Companion>;
					}
				}
				export class ReaderRunnable extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.http2.Http2Connection.ReaderRunnable>;
					public constructor(this0: okhttp3.internal.http2.Http2Reader);
					public ackSettings(): void;
					public alternateService(streamId: number, origin: string, protocol: okio.ByteString, host: string, port: number, maxAge: number): void;
					public invoke(): void;
					public invoke(): any;
					public priority(streamId: number, streamDependency: number, weight: number, exclusive: boolean): void;
					public settings(clearPrevious: boolean, settings: okhttp3.internal.http2.Settings): void;
					public ping(ack: boolean, payload1: number, payload2: number): void;
					public pushPromise(streamId: number, promisedStreamId: number, requestHeaders: java.util.List<okhttp3.internal.http2.Header>): void;
					public getReader(): okhttp3.internal.http2.Http2Reader;
					public applyAndAckSettings(clearPrevious: boolean, settings: okhttp3.internal.http2.Settings): void;
					public data(inFinished: boolean, streamId: number, source: okio.BufferedSource, length: number): void;
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
				public static Companion: okhttp3.internal.http2.Http2ExchangeCodec.Companion;
				public finishRequest(): void;
				public trailers(): okhttp3.Headers;
				public readResponseHeaders(expectContinue: boolean): okhttp3.Response.Builder;
				public reportedContentLength(response: okhttp3.Response): number;
				public cancel(): void;
				public constructor(client: okhttp3.OkHttpClient, connection: okhttp3.internal.connection.RealConnection, chain: okhttp3.internal.http.RealInterceptorChain, http2Connection: okhttp3.internal.http2.Http2Connection);
				public createRequestBody(request: okhttp3.Request, contentLength: number): okio.Sink;
				public writeRequestHeaders(request: okhttp3.Request): void;
				public flushRequest(): void;
				public openResponseBodySource(response: okhttp3.Response): okio.Source;
				public getConnection(): okhttp3.internal.connection.RealConnection;
			}
			export module Http2ExchangeCodec {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.http2.Http2ExchangeCodec.Companion>;
					public http2HeadersList(request: okhttp3.Request): java.util.List<okhttp3.internal.http2.Header>;
					public readHttp2HeadersList(headerBlock: okhttp3.Headers, protocol: okhttp3.Protocol): okhttp3.Response.Builder;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http2 {
			export class Http2Reader extends java.lang.Object implements java.io.Closeable {
				public static class: java.lang.Class<okhttp3.internal.http2.Http2Reader>;
				public static Companion: okhttp3.internal.http2.Http2Reader.Companion;
				public constructor(source: okio.BufferedSource, client: boolean);
				public readConnectionPreface(handler: okhttp3.internal.http2.Http2Reader.Handler): void;
				public close(): void;
				public nextFrame(requireSettings: boolean, handler: okhttp3.internal.http2.Http2Reader.Handler): boolean;
			}
			export module Http2Reader {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.http2.Http2Reader.Companion>;
					public getLogger(): java.util.logging.Logger;
					public lengthWithoutPadding(length: number, flags: number, padding: number): number;
				}
				export class ContinuationSource extends java.lang.Object implements okio.Source {
					public static class: java.lang.Class<okhttp3.internal.http2.Http2Reader.ContinuationSource>;
					public getFlags(): number;
					public setLeft(param0: number): void;
					public getLength(): number;
					public read(sink: okio.Buffer, byteCount: number): number;
					public setPadding(param0: number): void;
					public timeout(): okio.Timeout;
					public setStreamId(param0: number): void;
					public setLength(param0: number): void;
					public getStreamId(): number;
					public setFlags(param0: number): void;
					public getPadding(): number;
					public close(): void;
					public constructor(source: okio.BufferedSource);
					public getLeft(): number;
				}
				export class Handler extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.http2.Http2Reader.Handler>;
					/**
					 * Constructs a new instance of the okhttp3.internal.http2.Http2Reader() when extending the interface class.
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
				public static EMIT_BUFFER_SIZE: number;
				public static Companion: okhttp3.internal.http2.Http2Stream.Companion;
				public getSource(): okio.Source;
				public setErrorException(param0: java.io.IOException): void;
				public trailers(): okhttp3.Headers;
				public setWriteBytesTotal(param0: number): void;
				public setReadBytesAcknowledged(param0: number): void;
				public cancelStreamIfNecessary(): void;
				public writeHeaders(responseHeaders: java.util.List<okhttp3.internal.http2.Header>, outFinished: boolean, flushHeaders: boolean): void;
				public setErrorCode(param0: okhttp3.internal.http2.ErrorCode): void;
				public receiveRstStream(errorCode: okhttp3.internal.http2.ErrorCode): void;
				public setReadBytesTotal(param0: number): void;
				public getReadTimeout(): okhttp3.internal.http2.Http2Stream.StreamTimeout;
				public readTimeout(): okio.Timeout;
				public getErrorCode(): okhttp3.internal.http2.ErrorCode;
				public getSink(): okio.Sink;
				public checkOutNotClosed(): void;
				public isLocallyInitiated(): boolean;
				public closeLater(errorCode: okhttp3.internal.http2.ErrorCode): void;
				public enqueueTrailers(trailers: okhttp3.Headers): void;
				public writeTimeout(): okio.Timeout;
				public getId(): number;
				public receiveHeaders(headers: okhttp3.Headers, inFinished: boolean): void;
				public getSource(): okhttp3.internal.http2.Http2Stream.FramingSource;
				public getWriteTimeout(): okhttp3.internal.http2.Http2Stream.StreamTimeout;
				public setWriteBytesMaximum(param0: number): void;
				public getReadBytesAcknowledged(): number;
				public close(rstStatusCode: okhttp3.internal.http2.ErrorCode, errorException: java.io.IOException): void;
				public addBytesToWriteWindow(delta: number): void;
				public takeHeaders(): okhttp3.Headers;
				public getWriteBytesTotal(): number;
				public getSink(): okhttp3.internal.http2.Http2Stream.FramingSink;
				public getErrorException(): java.io.IOException;
				public getConnection(): okhttp3.internal.http2.Http2Connection;
				public isOpen(): boolean;
				public waitForIo(): void;
				public constructor(id: number, connection: okhttp3.internal.http2.Http2Connection, outFinished: boolean, inFinished: boolean, headers: okhttp3.Headers);
				public getWriteBytesMaximum(): number;
				public getReadBytesTotal(): number;
				public receiveData(source: okio.BufferedSource, length: number): void;
			}
			export module Http2Stream {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.http2.Http2Stream.Companion>;
				}
				export class FramingSink extends java.lang.Object implements okio.Sink {
					public static class: java.lang.Class<okhttp3.internal.http2.Http2Stream.FramingSink>;
					public getTrailers(): okhttp3.Headers;
					public setTrailers(param0: okhttp3.Headers): void;
					public getFinished(): boolean;
					public setFinished(param0: boolean): void;
					public setClosed(param0: boolean): void;
					public getClosed(): boolean;
					public close(): void;
					public constructor(this0: boolean);
					public flush(): void;
					public timeout(): okio.Timeout;
					public write(source: okio.Buffer, byteCount: number): void;
				}
				export class FramingSource extends java.lang.Object implements okio.Source {
					public static class: java.lang.Class<okhttp3.internal.http2.Http2Stream.FramingSource>;
					public getTrailers(): okhttp3.Headers;
					public receive(source: okio.BufferedSource, byteCount: number): void;
					public getFinished(): boolean;
					public read(sink: okio.Buffer, byteCount: number): number;
					public timeout(): okio.Timeout;
					public getReadBuffer(): okio.Buffer;
					public getClosed(): boolean;
					public setTrailers(param0: okhttp3.Headers): void;
					public constructor(this0: number, maxByteCount: boolean);
					public close(): void;
					public getReceiveBuffer(): okio.Buffer;
					public setFinished(param0: boolean): void;
					public setClosed(param0: boolean): void;
				}
				export class StreamTimeout extends okio.AsyncTimeout {
					public static class: java.lang.Class<okhttp3.internal.http2.Http2Stream.StreamTimeout>;
					public timedOut(): void;
					public exitAndThrowIfTimedOut(): void;
					public constructor();
					public constructor(this0: okhttp3.internal.http2.Http2Stream);
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
				public static Companion: okhttp3.internal.http2.Http2Writer.Companion;
				public ping(ack: boolean, payload1: number, payload2: number): void;
				public settings(settings: okhttp3.internal.http2.Settings): void;
				public close(): void;
				public getHpackWriter(): okhttp3.internal.http2.Hpack.Writer;
				public rstStream(streamId: number, errorCode: okhttp3.internal.http2.ErrorCode): void;
				public data(outFinished: boolean, streamId: number, source: okio.Buffer, byteCount: number): void;
				public dataFrame(streamId: number, flags: number, buffer: okio.Buffer, byteCount: number): void;
				public frameHeader(streamId: number, length: number, type: number, flags: number): void;
				public constructor(sink: okio.BufferedSink, client: boolean);
				public maxDataLength(): number;
				public flush(): void;
				public connectionPreface(): void;
				public goAway(lastGoodStreamId: number, errorCode: okhttp3.internal.http2.ErrorCode, debugData: native.Array<number>): void;
				public headers(outFinished: boolean, streamId: number, headerBlock: java.util.List<okhttp3.internal.http2.Header>): void;
				public pushPromise(streamId: number, promisedStreamId: number, requestHeaders: java.util.List<okhttp3.internal.http2.Header>): void;
				public applyAndAckSettings(peerSettings: okhttp3.internal.http2.Settings): void;
				public windowUpdate(streamId: number, windowSizeIncrement: number): void;
			}
			export module Http2Writer {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.http2.Http2Writer.Companion>;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http2 {
			export class Huffman extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.http2.Huffman>;
				public static INSTANCE: okhttp3.internal.http2.Huffman;
				public decode(source: okio.BufferedSource, byteCount: number, sink: okio.BufferedSink): void;
				public encodedLength(bytes: okio.ByteString): number;
				public encode(source: okio.ByteString, sink: okio.BufferedSink): void;
			}
			export module Huffman {
				export class Node extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.http2.Huffman.Node>;
					public getSymbol(): number;
					public constructor();
					public getTerminalBitCount(): number;
					public constructor(symbol: number, bits: number);
					public getChildren(): native.Array<okhttp3.internal.http2.Huffman.Node>;
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
				public static Companion: okhttp3.internal.http2.PushObserver.Companion;
				public static CANCEL: okhttp3.internal.http2.PushObserver;
				public onData(int0: number, bufferedSource1: okio.BufferedSource, int2: number, boolean3: boolean): boolean;
				public onHeaders(int0: number, list1: java.util.List<okhttp3.internal.http2.Header>, boolean2: boolean): boolean;
				public onRequest(int0: number, list1: java.util.List<okhttp3.internal.http2.Header>): boolean;
				public onReset(int0: number, errorCode1: okhttp3.internal.http2.ErrorCode): void;
			}
			export module PushObserver {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.http2.PushObserver.Companion>;
				}
				export module Companion {
					export class PushObserverCancel extends java.lang.Object implements okhttp3.internal.http2.PushObserver {
						public static class: java.lang.Class<okhttp3.internal.http2.PushObserver.Companion.PushObserverCancel>;
						public constructor();
						public onHeaders(streamId: number, responseHeaders: java.util.List<okhttp3.internal.http2.Header>, last: boolean): boolean;
						public onData(streamId: number, source: okio.BufferedSource, byteCount: number, last: boolean): boolean;
						public onRequest(streamId: number, requestHeaders: java.util.List<okhttp3.internal.http2.Header>): boolean;
						public onReset(streamId: number, errorCode: okhttp3.internal.http2.ErrorCode): void;
					}
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http2 {
			export class Settings extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.http2.Settings>;
				public static DEFAULT_INITIAL_WINDOW_SIZE: number;
				public static HEADER_TABLE_SIZE: number;
				public static ENABLE_PUSH: number;
				public static MAX_CONCURRENT_STREAMS: number;
				public static MAX_FRAME_SIZE: number;
				public static MAX_HEADER_LIST_SIZE: number;
				public static INITIAL_WINDOW_SIZE: number;
				public static COUNT: number;
				public static Companion: okhttp3.internal.http2.Settings.Companion;
				public getHeaderTableSize(): number;
				public getMaxHeaderListSize(defaultValue: number): number;
				public set(id: number, value: number): okhttp3.internal.http2.Settings;
				public merge(other: okhttp3.internal.http2.Settings): void;
				public getInitialWindowSize(): number;
				public size(): number;
				public constructor();
				public getEnablePush(defaultValue: boolean): boolean;
				public getMaxFrameSize(defaultValue: number): number;
				public getMaxConcurrentStreams(): number;
				public isSet(id: number): boolean;
				public clear(): void;
				public get(id: number): number;
			}
			export module Settings {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.http2.Settings.Companion>;
				}
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
				public static Companion: okhttp3.internal.io.FileSystem.Companion;
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
			export module FileSystem {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.io.FileSystem.Companion>;
				}
				export module Companion {
					export class SystemFileSystem extends java.lang.Object implements okhttp3.internal.io.FileSystem {
						public static class: java.lang.Class<okhttp3.internal.io.FileSystem.Companion.SystemFileSystem>;
						public sink(file: java.io.File): okio.Sink;
						public constructor();
						public deleteContents(directory: java.io.File): void;
						public source(file: java.io.File): okio.Source;
						public size(file: java.io.File): number;
						public rename(from: java.io.File, to: java.io.File): void;
						public exists(file: java.io.File): boolean;
						public toString(): string;
						public appendingSink(file: java.io.File): okio.Sink;
						public delete(file: java.io.File): void;
					}
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module platform {
			export class Android10Platform extends okhttp3.internal.platform.Platform {
				public static class: java.lang.Class<okhttp3.internal.platform.Android10Platform>;
				public static Companion: okhttp3.internal.platform.Android10Platform.Companion;
				public configureTlsExtensions(sslSocket: javax.net.ssl.SSLSocket, hostname: string, protocols: java.util.List<okhttp3.Protocol>): void;
				public getSelectedProtocol(sslSocket: javax.net.ssl.SSLSocket): string;
				public isCleartextTrafficPermitted(hostname: string): boolean;
				public buildCertificateChainCleaner(trustManager: javax.net.ssl.X509TrustManager): okhttp3.internal.tls.CertificateChainCleaner;
				public trustManager(sslSocketFactory: javax.net.ssl.SSLSocketFactory): javax.net.ssl.X509TrustManager;
				public configureTlsExtensions(sslSocket: javax.net.ssl.SSLSocket, hostname: string, protocols: java.util.List<any>): void;
				public constructor();
			}
			export module Android10Platform {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.platform.Android10Platform.Companion>;
					public isSupported(): boolean;
					public buildIfSupported(): okhttp3.internal.platform.Platform;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module platform {
			export class AndroidPlatform extends okhttp3.internal.platform.Platform {
				public static class: java.lang.Class<okhttp3.internal.platform.AndroidPlatform>;
				public static Companion: okhttp3.internal.platform.AndroidPlatform.Companion;
				public configureTlsExtensions(sslSocket: javax.net.ssl.SSLSocket, hostname: string, protocols: java.util.List<okhttp3.Protocol>): void;
				public getSelectedProtocol(sslSocket: javax.net.ssl.SSLSocket): string;
				public getStackTraceForCloseable(closer: string): any;
				public isCleartextTrafficPermitted(hostname: string): boolean;
				public connectSocket(socket: java.net.Socket, address: java.net.InetSocketAddress, connectTimeout: number): void;
				public buildCertificateChainCleaner(trustManager: javax.net.ssl.X509TrustManager): okhttp3.internal.tls.CertificateChainCleaner;
				public logCloseableLeak(message: string, stackTrace: any): void;
				public trustManager(sslSocketFactory: javax.net.ssl.SSLSocketFactory): javax.net.ssl.X509TrustManager;
				public buildTrustRootIndex(trustManager: javax.net.ssl.X509TrustManager): okhttp3.internal.tls.TrustRootIndex;
				public constructor();
			}
			export module AndroidPlatform {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.platform.AndroidPlatform.Companion>;
					public isSupported(): boolean;
					public buildIfSupported(): okhttp3.internal.platform.Platform;
				}
				export class CustomTrustRootIndex extends java.lang.Object implements okhttp3.internal.tls.TrustRootIndex {
					public static class: java.lang.Class<okhttp3.internal.platform.AndroidPlatform.CustomTrustRootIndex>;
					public toString(): string;
					public equals(obj: any): boolean;
					public constructor(trustManager: javax.net.ssl.X509TrustManager, findByIssuerAndSignatureMethod: java.lang.reflect.Method);
					public hashCode(): number;
					public copy(trustManager: javax.net.ssl.X509TrustManager, findByIssuerAndSignatureMethod: java.lang.reflect.Method): okhttp3.internal.platform.AndroidPlatform.CustomTrustRootIndex;
					public findByIssuerAndSignature(cert: java.security.cert.X509Certificate): java.security.cert.X509Certificate;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module platform {
			export class BouncyCastlePlatform extends okhttp3.internal.platform.Platform {
				public static class: java.lang.Class<okhttp3.internal.platform.BouncyCastlePlatform>;
				public static Companion: okhttp3.internal.platform.BouncyCastlePlatform.Companion;
				public configureTlsExtensions(sslSocket: javax.net.ssl.SSLSocket, hostname: string, protocols: java.util.List<okhttp3.Protocol>): void;
				public getSelectedProtocol(sslSocket: javax.net.ssl.SSLSocket): string;
				public newSSLContext(): javax.net.ssl.SSLContext;
				public platformTrustManager(): javax.net.ssl.X509TrustManager;
				public trustManager(sslSocketFactory: javax.net.ssl.SSLSocketFactory): javax.net.ssl.X509TrustManager;
			}
			export module BouncyCastlePlatform {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.platform.BouncyCastlePlatform.Companion>;
					public isSupported(): boolean;
					public buildIfSupported(): okhttp3.internal.platform.BouncyCastlePlatform;
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
				public static Companion: okhttp3.internal.platform.ConscryptPlatform.Companion;
				public configureTlsExtensions(sslSocket: javax.net.ssl.SSLSocket, hostname: string, protocols: java.util.List<okhttp3.Protocol>): void;
				public getSelectedProtocol(sslSocket: javax.net.ssl.SSLSocket): string;
				public newSSLContext(): javax.net.ssl.SSLContext;
				public newSslSocketFactory(trustManager: javax.net.ssl.X509TrustManager): javax.net.ssl.SSLSocketFactory;
				public platformTrustManager(): javax.net.ssl.X509TrustManager;
				public trustManager(sslSocketFactory: javax.net.ssl.SSLSocketFactory): javax.net.ssl.X509TrustManager;
			}
			export module ConscryptPlatform {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.platform.ConscryptPlatform.Companion>;
					public isSupported(): boolean;
					public buildIfSupported(): okhttp3.internal.platform.ConscryptPlatform;
					public atLeastVersion(major: number, minor: number, patch: number): boolean;
				}
				export class DisabledHostnameVerifier extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.platform.ConscryptPlatform.DisabledHostnameVerifier>;
					public static INSTANCE: okhttp3.internal.platform.ConscryptPlatform.DisabledHostnameVerifier;
					public verify(hostname: string, session: javax.net.ssl.SSLSession): boolean;
					public verify(certs: native.Array<java.security.cert.X509Certificate>, hostname: string, session: javax.net.ssl.SSLSession): boolean;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module platform {
			export class Jdk8WithJettyBootPlatform extends okhttp3.internal.platform.Platform {
				public static class: java.lang.Class<okhttp3.internal.platform.Jdk8WithJettyBootPlatform>;
				public static Companion: okhttp3.internal.platform.Jdk8WithJettyBootPlatform.Companion;
				public constructor(putMethod: java.lang.reflect.Method, getMethod: java.lang.reflect.Method, removeMethod: java.lang.reflect.Method, clientProviderClass: java.lang.Class<any>, serverProviderClass: java.lang.Class<any>);
				public configureTlsExtensions(sslSocket: javax.net.ssl.SSLSocket, hostname: string, protocols: java.util.List<okhttp3.Protocol>): void;
				public getSelectedProtocol(sslSocket: javax.net.ssl.SSLSocket): string;
				public afterHandshake(sslSocket: javax.net.ssl.SSLSocket): void;
				public configureTlsExtensions(sslSocket: javax.net.ssl.SSLSocket, hostname: string, protocols: java.util.List<any>): void;
				public constructor();
			}
			export module Jdk8WithJettyBootPlatform {
				export class AlpnProvider extends java.lang.Object implements java.lang.reflect.InvocationHandler {
					public static class: java.lang.Class<okhttp3.internal.platform.Jdk8WithJettyBootPlatform.AlpnProvider>;
					public getSelected(): string;
					public constructor(protocols: java.util.List<string>);
					public setSelected(param0: string): void;
					public invoke(proxy: any, method: java.lang.reflect.Method, objects2: native.Array<any>): any;
					public getUnsupported(): boolean;
					public setUnsupported(param0: boolean): void;
				}
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.platform.Jdk8WithJettyBootPlatform.Companion>;
					public buildIfSupported(): okhttp3.internal.platform.Platform;
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
				public static Companion: okhttp3.internal.platform.Jdk9Platform.Companion;
				public configureTlsExtensions(sslSocket: javax.net.ssl.SSLSocket, hostname: string, protocols: java.util.List<okhttp3.Protocol>): void;
				public getSelectedProtocol(sslSocket: javax.net.ssl.SSLSocket): string;
				public trustManager(sslSocketFactory: javax.net.ssl.SSLSocketFactory): javax.net.ssl.X509TrustManager;
				public constructor();
			}
			export module Jdk9Platform {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.platform.Jdk9Platform.Companion>;
					public buildIfSupported(): okhttp3.internal.platform.Jdk9Platform;
					public isAvailable(): boolean;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module platform {
			export class OpenJSSEPlatform extends okhttp3.internal.platform.Platform {
				public static class: java.lang.Class<okhttp3.internal.platform.OpenJSSEPlatform>;
				public static Companion: okhttp3.internal.platform.OpenJSSEPlatform.Companion;
				public configureTlsExtensions(sslSocket: javax.net.ssl.SSLSocket, hostname: string, protocols: java.util.List<okhttp3.Protocol>): void;
				public getSelectedProtocol(sslSocket: javax.net.ssl.SSLSocket): string;
				public newSSLContext(): javax.net.ssl.SSLContext;
				public platformTrustManager(): javax.net.ssl.X509TrustManager;
				public trustManager(sslSocketFactory: javax.net.ssl.SSLSocketFactory): javax.net.ssl.X509TrustManager;
			}
			export module OpenJSSEPlatform {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.platform.OpenJSSEPlatform.Companion>;
					public isSupported(): boolean;
					public buildIfSupported(): okhttp3.internal.platform.OpenJSSEPlatform;
				}
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
				public static Companion: okhttp3.internal.platform.Platform.Companion;
				public configureTlsExtensions(sslSocket: javax.net.ssl.SSLSocket, hostname: string, protocols: java.util.List<okhttp3.Protocol>): void;
				public isCleartextTrafficPermitted(hostname: string): boolean;
				public getPrefix(): string;
				public newSSLContext(): javax.net.ssl.SSLContext;
				public afterHandshake(sslSocket: javax.net.ssl.SSLSocket): void;
				public newSslSocketFactory(trustManager: javax.net.ssl.X509TrustManager): javax.net.ssl.SSLSocketFactory;
				public log(message: string, level: number, t: java.lang.Throwable): void;
				public logCloseableLeak(message: string, stackTrace: any): void;
				public toString(): string;
				public trustManager(sslSocketFactory: javax.net.ssl.SSLSocketFactory): javax.net.ssl.X509TrustManager;
				public constructor();
				public getSelectedProtocol(sslSocket: javax.net.ssl.SSLSocket): string;
				public getStackTraceForCloseable(closer: string): any;
				public connectSocket(socket: java.net.Socket, address: java.net.InetSocketAddress, connectTimeout: number): void;
				public platformTrustManager(): javax.net.ssl.X509TrustManager;
				public buildCertificateChainCleaner(trustManager: javax.net.ssl.X509TrustManager): okhttp3.internal.tls.CertificateChainCleaner;
				public static get(): okhttp3.internal.platform.Platform;
				public buildTrustRootIndex(trustManager: javax.net.ssl.X509TrustManager): okhttp3.internal.tls.TrustRootIndex;
			}
			export module Platform {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.platform.Platform.Companion>;
					public isAndroid(): boolean;
					public concatLengthPrefixed(protocols: java.util.List<any>): native.Array<number>;
					public get(): okhttp3.internal.platform.Platform;
					public resetForTests(platform: okhttp3.internal.platform.Platform): void;
					public alpnProtocolNames(protocols: java.util.List<any>): java.util.List<string>;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module platform {
			export module android {
				export class Android10SocketAdapter extends java.lang.Object implements okhttp3.internal.platform.android.SocketAdapter {
					public static class: java.lang.Class<okhttp3.internal.platform.android.Android10SocketAdapter>;
					public static Companion: okhttp3.internal.platform.android.Android10SocketAdapter.Companion;
					public isSupported(): boolean;
					public constructor();
					public getSelectedProtocol(sslSocket: javax.net.ssl.SSLSocket): string;
					public matchesSocket(sslSocket: javax.net.ssl.SSLSocket): boolean;
					public configureTlsExtensions(sslSocket: javax.net.ssl.SSLSocket, hostname: string, protocols: java.util.List<any>): void;
					public trustManager(sslSocketFactory: javax.net.ssl.SSLSocketFactory): javax.net.ssl.X509TrustManager;
					public matchesSocketFactory(sslSocketFactory: javax.net.ssl.SSLSocketFactory): boolean;
				}
				export module Android10SocketAdapter {
					export class Companion extends java.lang.Object {
						public static class: java.lang.Class<okhttp3.internal.platform.android.Android10SocketAdapter.Companion>;
						public buildIfSupported(): okhttp3.internal.platform.android.SocketAdapter;
						public isSupported(): boolean;
					}
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module platform {
			export module android {
				export class AndroidCertificateChainCleaner extends okhttp3.internal.tls.CertificateChainCleaner {
					public static class: java.lang.Class<okhttp3.internal.platform.android.AndroidCertificateChainCleaner>;
					public static Companion: okhttp3.internal.platform.android.AndroidCertificateChainCleaner.Companion;
					public equals(obj: any): boolean;
					public constructor();
					public constructor(trustManager: javax.net.ssl.X509TrustManager, x509TrustManagerExtensions: globalAndroid.net.http.X509TrustManagerExtensions);
					public equals(other: any): boolean;
					public clean(list0: java.util.List<any>, string1: string): java.util.List<java.security.cert.Certificate>;
					public hashCode(): number;
					public clean(chain: java.util.List<any>, hostname: string): java.util.List<java.security.cert.Certificate>;
				}
				export module AndroidCertificateChainCleaner {
					export class Companion extends java.lang.Object {
						public static class: java.lang.Class<okhttp3.internal.platform.android.AndroidCertificateChainCleaner.Companion>;
						public buildIfSupported(trustManager: javax.net.ssl.X509TrustManager): okhttp3.internal.platform.android.AndroidCertificateChainCleaner;
					}
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module platform {
			export module android {
				export class AndroidLog extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.platform.android.AndroidLog>;
					public static INSTANCE: okhttp3.internal.platform.android.AndroidLog;
					public androidLog(loggerName: string, logLevel: number, message: string, t: java.lang.Throwable): void;
					public enable(): void;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module platform {
			export module android {
				export class AndroidLogHandler extends java.util.logging.Handler {
					public static class: java.lang.Class<okhttp3.internal.platform.android.AndroidLogHandler>;
					public static INSTANCE: okhttp3.internal.platform.android.AndroidLogHandler;
					public close(): void;
					public flush(): void;
					public publish(logRecord0: java.util.logging.LogRecord): void;
					public publish(record: java.util.logging.LogRecord): void;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module platform {
			export module android {
				export class AndroidLogKt extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.platform.android.AndroidLogKt>;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module platform {
			export module android {
				export class AndroidSocketAdapter extends java.lang.Object implements okhttp3.internal.platform.android.SocketAdapter {
					public static class: java.lang.Class<okhttp3.internal.platform.android.AndroidSocketAdapter>;
					public static Companion: okhttp3.internal.platform.android.AndroidSocketAdapter.Companion;
					public isSupported(): boolean;
					public getSelectedProtocol(sslSocket: javax.net.ssl.SSLSocket): string;
					public matchesSocket(sslSocket: javax.net.ssl.SSLSocket): boolean;
					public configureTlsExtensions(sslSocket: javax.net.ssl.SSLSocket, hostname: string, protocols: java.util.List<any>): void;
					public constructor(sslSocketClass: java.lang.Class<any>);
					public trustManager(sslSocketFactory: javax.net.ssl.SSLSocketFactory): javax.net.ssl.X509TrustManager;
					public matchesSocketFactory(sslSocketFactory: javax.net.ssl.SSLSocketFactory): boolean;
				}
				export module AndroidSocketAdapter {
					export class Companion extends java.lang.Object {
						public static class: java.lang.Class<okhttp3.internal.platform.android.AndroidSocketAdapter.Companion>;
						public factory(packageName: string): okhttp3.internal.platform.android.DeferredSocketAdapter.Factory;
						public getPlayProviderFactory(): okhttp3.internal.platform.android.DeferredSocketAdapter.Factory;
					}
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module platform {
			export module android {
				export class BouncyCastleSocketAdapter extends java.lang.Object implements okhttp3.internal.platform.android.SocketAdapter {
					public static class: java.lang.Class<okhttp3.internal.platform.android.BouncyCastleSocketAdapter>;
					public static Companion: okhttp3.internal.platform.android.BouncyCastleSocketAdapter.Companion;
					public isSupported(): boolean;
					public constructor();
					public getSelectedProtocol(sslSocket: javax.net.ssl.SSLSocket): string;
					public matchesSocket(sslSocket: javax.net.ssl.SSLSocket): boolean;
					public configureTlsExtensions(sslSocket: javax.net.ssl.SSLSocket, hostname: string, protocols: java.util.List<any>): void;
					public trustManager(sslSocketFactory: javax.net.ssl.SSLSocketFactory): javax.net.ssl.X509TrustManager;
					public matchesSocketFactory(sslSocketFactory: javax.net.ssl.SSLSocketFactory): boolean;
				}
				export module BouncyCastleSocketAdapter {
					export class Companion extends java.lang.Object {
						public static class: java.lang.Class<okhttp3.internal.platform.android.BouncyCastleSocketAdapter.Companion>;
						public getFactory(): okhttp3.internal.platform.android.DeferredSocketAdapter.Factory;
					}
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module platform {
			export module android {
				export class CloseGuard extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.platform.android.CloseGuard>;
					public static Companion: okhttp3.internal.platform.android.CloseGuard.Companion;
					public warnIfOpen(closeGuardInstance: any): boolean;
					public constructor(getMethod: java.lang.reflect.Method, openMethod: java.lang.reflect.Method, warnIfOpenMethod: java.lang.reflect.Method);
					public createAndOpen(closer: string): any;
				}
				export module CloseGuard {
					export class Companion extends java.lang.Object {
						public static class: java.lang.Class<okhttp3.internal.platform.android.CloseGuard.Companion>;
						public get(): okhttp3.internal.platform.android.CloseGuard;
					}
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module platform {
			export module android {
				export class ConscryptSocketAdapter extends java.lang.Object implements okhttp3.internal.platform.android.SocketAdapter {
					public static class: java.lang.Class<okhttp3.internal.platform.android.ConscryptSocketAdapter>;
					public static Companion: okhttp3.internal.platform.android.ConscryptSocketAdapter.Companion;
					public isSupported(): boolean;
					public constructor();
					public getSelectedProtocol(sslSocket: javax.net.ssl.SSLSocket): string;
					public matchesSocket(sslSocket: javax.net.ssl.SSLSocket): boolean;
					public configureTlsExtensions(sslSocket: javax.net.ssl.SSLSocket, hostname: string, protocols: java.util.List<any>): void;
					public trustManager(sslSocketFactory: javax.net.ssl.SSLSocketFactory): javax.net.ssl.X509TrustManager;
					public matchesSocketFactory(sslSocketFactory: javax.net.ssl.SSLSocketFactory): boolean;
				}
				export module ConscryptSocketAdapter {
					export class Companion extends java.lang.Object {
						public static class: java.lang.Class<okhttp3.internal.platform.android.ConscryptSocketAdapter.Companion>;
						public getFactory(): okhttp3.internal.platform.android.DeferredSocketAdapter.Factory;
					}
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module platform {
			export module android {
				export class DeferredSocketAdapter extends java.lang.Object implements okhttp3.internal.platform.android.SocketAdapter {
					public static class: java.lang.Class<okhttp3.internal.platform.android.DeferredSocketAdapter>;
					public isSupported(): boolean;
					public getSelectedProtocol(sslSocket: javax.net.ssl.SSLSocket): string;
					public matchesSocket(sslSocket: javax.net.ssl.SSLSocket): boolean;
					public configureTlsExtensions(sslSocket: javax.net.ssl.SSLSocket, hostname: string, protocols: java.util.List<any>): void;
					public trustManager(sslSocketFactory: javax.net.ssl.SSLSocketFactory): javax.net.ssl.X509TrustManager;
					public constructor(socketAdapterFactory: okhttp3.internal.platform.android.DeferredSocketAdapter.Factory);
					public matchesSocketFactory(sslSocketFactory: javax.net.ssl.SSLSocketFactory): boolean;
				}
				export module DeferredSocketAdapter {
					export class Factory extends java.lang.Object {
						public static class: java.lang.Class<okhttp3.internal.platform.android.DeferredSocketAdapter.Factory>;
						/**
						 * Constructs a new instance of the okhttp3.internal.platform.android.DeferredSocketAdapter() when extending the interface class.
						 */
						public constructor(implementation: {
							matchesSocket(sSLSocket0: javax.net.ssl.SSLSocket): boolean;
							create(sSLSocket0: javax.net.ssl.SSLSocket): okhttp3.internal.platform.android.SocketAdapter;
						});
						public constructor();
						public create(sSLSocket0: javax.net.ssl.SSLSocket): okhttp3.internal.platform.android.SocketAdapter;
						public matchesSocket(sSLSocket0: javax.net.ssl.SSLSocket): boolean;
					}
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module platform {
			export module android {
				export class SocketAdapter extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.platform.android.SocketAdapter>;
					/**
					 * Constructs a new instance of the okhttp3.internal.platform.android.SocketAdapter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						isSupported(): boolean;
						trustManager(sSLSocketFactory0: javax.net.ssl.SSLSocketFactory): javax.net.ssl.X509TrustManager;
						matchesSocket(sSLSocket0: javax.net.ssl.SSLSocket): boolean;
						matchesSocketFactory(sSLSocketFactory0: javax.net.ssl.SSLSocketFactory): boolean;
						configureTlsExtensions(sSLSocket0: javax.net.ssl.SSLSocket, string1: string, list2: java.util.List<any>): void;
						getSelectedProtocol(sSLSocket0: javax.net.ssl.SSLSocket): string;
					});
					public constructor();
					public isSupported(): boolean;
					public matchesSocket(sSLSocket0: javax.net.ssl.SSLSocket): boolean;
					public matchesSocketFactory(sSLSocketFactory0: javax.net.ssl.SSLSocketFactory): boolean;
					public trustManager(sSLSocketFactory0: javax.net.ssl.SSLSocketFactory): javax.net.ssl.X509TrustManager;
					public configureTlsExtensions(sSLSocket0: javax.net.ssl.SSLSocket, string1: string, list2: java.util.List<any>): void;
					public getSelectedProtocol(sSLSocket0: javax.net.ssl.SSLSocket): string;
				}
				export module SocketAdapter {
					export class DefaultImpls extends java.lang.Object {
						public static class: java.lang.Class<okhttp3.internal.platform.android.SocketAdapter.DefaultImpls>;
						public static trustManager(this0: okhttp3.internal.platform.android.SocketAdapter, sslSocketFactory: javax.net.ssl.SSLSocketFactory): javax.net.ssl.X509TrustManager;
						public static matchesSocketFactory(this0: okhttp3.internal.platform.android.SocketAdapter, sslSocketFactory: javax.net.ssl.SSLSocketFactory): boolean;
					}
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module platform {
			export module android {
				export class StandardAndroidSocketAdapter extends okhttp3.internal.platform.android.AndroidSocketAdapter {
					public static class: java.lang.Class<okhttp3.internal.platform.android.StandardAndroidSocketAdapter>;
					public static Companion: okhttp3.internal.platform.android.StandardAndroidSocketAdapter.Companion;
					public isSupported(): boolean;
					public constructor(sslSocketClass: java.lang.Class<any>, sslSocketFactoryClass: java.lang.Class<any>, paramClass: java.lang.Class<any>);
					public getSelectedProtocol(sslSocket: javax.net.ssl.SSLSocket): string;
					public matchesSocket(sslSocket: javax.net.ssl.SSLSocket): boolean;
					public configureTlsExtensions(sslSocket: javax.net.ssl.SSLSocket, hostname: string, protocols: java.util.List<any>): void;
					public trustManager(sslSocketFactory: javax.net.ssl.SSLSocketFactory): javax.net.ssl.X509TrustManager;
					public constructor(sslSocketClass: java.lang.Class<any>);
					public matchesSocketFactory(sslSocketFactory: javax.net.ssl.SSLSocketFactory): boolean;
				}
				export module StandardAndroidSocketAdapter {
					export class Companion extends java.lang.Object {
						public static class: java.lang.Class<okhttp3.internal.platform.android.StandardAndroidSocketAdapter.Companion>;
						public buildIfSupported(packageName: string): okhttp3.internal.platform.android.SocketAdapter;
					}
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module proxy {
			export class NullProxySelector extends java.net.ProxySelector {
				public static class: java.lang.Class<okhttp3.internal.proxy.NullProxySelector>;
				public static INSTANCE: okhttp3.internal.proxy.NullProxySelector;
				public connectFailed(uri: java.net.URI, sa: java.net.SocketAddress, ioe: java.io.IOException): void;
				public select(uRI0: java.net.URI): java.util.List<java.net.Proxy>;
				public connectFailed(uRI0: java.net.URI, socketAddress1: java.net.SocketAddress, iOException2: java.io.IOException): void;
				public select(uri: java.net.URI): java.util.List<java.net.Proxy>;
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
				public static Companion: okhttp3.internal.publicsuffix.PublicSuffixDatabase.Companion;
				public getEffectiveTldPlusOne(domain: string): string;
				public setListBytes(publicSuffixListBytes: native.Array<number>, publicSuffixExceptionListBytes: native.Array<number>): void;
				public constructor();
			}
			export module PublicSuffixDatabase {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.publicsuffix.PublicSuffixDatabase.Companion>;
					public get(): okhttp3.internal.publicsuffix.PublicSuffixDatabase;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module tls {
			export class BasicCertificateChainCleaner extends okhttp3.internal.tls.CertificateChainCleaner {
				public static class: java.lang.Class<okhttp3.internal.tls.BasicCertificateChainCleaner>;
				public static Companion: okhttp3.internal.tls.BasicCertificateChainCleaner.Companion;
				public equals(obj: any): boolean;
				public equals(other: any): boolean;
				public hashCode(): number;
				public clean(chain: java.util.List<any>, hostname: string): java.util.List<java.security.cert.Certificate>;
				public constructor(trustRootIndex: okhttp3.internal.tls.TrustRootIndex);
				public clean(list0: java.util.List<any>, string1: string): java.util.List<java.security.cert.Certificate>;
				public constructor();
			}
			export module BasicCertificateChainCleaner {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.tls.BasicCertificateChainCleaner.Companion>;
				}
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
				public static Companion: okhttp3.internal.tls.CertificateChainCleaner.Companion;
				public clean(list0: java.util.List<any>, string1: string): java.util.List<java.security.cert.Certificate>;
				public constructor();
			}
			export module CertificateChainCleaner {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.tls.CertificateChainCleaner.Companion>;
					public get(trustManager: javax.net.ssl.X509TrustManager): okhttp3.internal.tls.CertificateChainCleaner;
					public get(caCerts: native.Array<java.security.cert.X509Certificate>): okhttp3.internal.tls.CertificateChainCleaner;
				}
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
				public allSubjectAltNames(certificate: java.security.cert.X509Certificate): java.util.List<string>;
				public verify(host: string, certificate: java.security.cert.X509Certificate): boolean;
				public verify(host: string, session: javax.net.ssl.SSLSession): boolean;
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
			export class MessageDeflater extends java.lang.Object implements java.io.Closeable {
				public static class: java.lang.Class<okhttp3.internal.ws.MessageDeflater>;
				public close(): void;
				public constructor(noContextTakeover: boolean);
				public deflate(buffer: okio.Buffer): void;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module ws {
			export class MessageDeflaterKt extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.ws.MessageDeflaterKt>;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module ws {
			export class MessageInflater extends java.lang.Object implements java.io.Closeable {
				public static class: java.lang.Class<okhttp3.internal.ws.MessageInflater>;
				public close(): void;
				public constructor(noContextTakeover: boolean);
				public inflate(buffer: okio.Buffer): void;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module ws {
			export class MessageInflaterKt extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.ws.MessageInflaterKt>;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module ws {
			export class RealWebSocket extends java.lang.Object implements okhttp3.WebSocket, okhttp3.internal.ws.WebSocketReader.FrameCallback {
				public static class: java.lang.Class<okhttp3.internal.ws.RealWebSocket>;
				public static DEFAULT_MINIMUM_DEFLATE_SIZE: number;
				public static Companion: okhttp3.internal.ws.RealWebSocket.Companion;
				public initReaderAndWriter(name: string, streams: okhttp3.internal.ws.RealWebSocket.Streams): void;
				public constructor(taskRunner: okhttp3.internal.concurrent.TaskRunner, originalRequest: okhttp3.Request, listener: okhttp3.WebSocketListener, random: java.util.Random, pingIntervalMillis: number, extensions: okhttp3.internal.ws.WebSocketExtensions, minimumDeflateSize: number);
				public request(): okhttp3.Request;
				public send(bytes: okio.ByteString): boolean;
				public onReadMessage(text: string): void;
				public onReadClose(code: number, reason: string): void;
				public onReadPong(payload: okio.ByteString): void;
				public loopReader(): void;
				public receivedPongCount(): number;
				public close(code: number, reason: string): boolean;
				public onReadPing(payload: okio.ByteString): void;
				public cancel(): void;
				public processNextFrame(): boolean;
				public awaitTermination(timeout: number, timeUnit: java.util.concurrent.TimeUnit): void;
				public checkUpgradeSuccess(response: okhttp3.Response, exchange: okhttp3.internal.connection.Exchange): void;
				public receivedPingCount(): number;
				public onReadMessage(bytes: okio.ByteString): void;
				public writeOneFrame(): boolean;
				public connect(client: okhttp3.OkHttpClient): void;
				public queueSize(): number;
				public tearDown(): void;
				public writePingFrame(): void;
				public close(code: number, reason: string, cancelAfterCloseMillis: number): boolean;
				public getListener(): okhttp3.WebSocketListener;
				public pong(payload: okio.ByteString): boolean;
				public sentPingCount(): number;
				public send(text: string): boolean;
				public failWebSocket(e: java.lang.Exception, response: okhttp3.Response): void;
			}
			export module RealWebSocket {
				export class Close extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.ws.RealWebSocket.Close>;
					public constructor(code: number, reason: okio.ByteString, cancelAfterCloseMillis: number);
					public getCancelAfterCloseMillis(): number;
					public getReason(): okio.ByteString;
					public getCode(): number;
				}
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.ws.RealWebSocket.Companion>;
				}
				export class Message extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.ws.RealWebSocket.Message>;
					public getData(): okio.ByteString;
					public constructor(formatOpcode: number, data: okio.ByteString);
					public getFormatOpcode(): number;
				}
				export abstract class Streams extends java.lang.Object implements java.io.Closeable {
					public static class: java.lang.Class<okhttp3.internal.ws.RealWebSocket.Streams>;
					public getSink(): okio.BufferedSink;
					public getClient(): boolean;
					public close(): void;
					public constructor(client: boolean, source: okio.BufferedSource, sink: okio.BufferedSink);
					public getSource(): okio.BufferedSource;
				}
				export class WriterTask extends okhttp3.internal.concurrent.Task {
					public static class: java.lang.Class<okhttp3.internal.ws.RealWebSocket.WriterTask>;
					public runOnce(): number;
					public constructor(name: string, cancelable: boolean);
					public constructor(this0: okhttp3.internal.ws.RealWebSocket);
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module ws {
			export class WebSocketExtensions extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.ws.WebSocketExtensions>;
				public perMessageDeflate: boolean;
				public clientMaxWindowBits: java.lang.Integer;
				public clientNoContextTakeover: boolean;
				public serverMaxWindowBits: java.lang.Integer;
				public serverNoContextTakeover: boolean;
				public unknownValues: boolean;
				public static Companion: okhttp3.internal.ws.WebSocketExtensions.Companion;
				public copy(perMessageDeflate: boolean, clientMaxWindowBits: java.lang.Integer, clientNoContextTakeover: boolean, serverMaxWindowBits: java.lang.Integer, serverNoContextTakeover: boolean, unknownValues: boolean): okhttp3.internal.ws.WebSocketExtensions;
				public component1(): boolean;
				public component5(): boolean;
				public toString(): string;
				public constructor();
				public component3(): boolean;
				public equals(obj: any): boolean;
				public constructor(perMessageDeflate: boolean, clientMaxWindowBits: java.lang.Integer, clientNoContextTakeover: boolean, serverMaxWindowBits: java.lang.Integer, serverNoContextTakeover: boolean, unknownValues: boolean);
				public noContextTakeover(clientOriginated: boolean): boolean;
				public hashCode(): number;
				public component6(): boolean;
				public component2(): java.lang.Integer;
				public component4(): java.lang.Integer;
			}
			export module WebSocketExtensions {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.ws.WebSocketExtensions.Companion>;
					public parse(responseHeaders: okhttp3.Headers): okhttp3.internal.ws.WebSocketExtensions;
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
				public static ACCEPT_MAGIC: string;
				public static B0_FLAG_FIN: number;
				public static B0_FLAG_RSV1: number;
				public static B0_FLAG_RSV2: number;
				public static B0_FLAG_RSV3: number;
				public static B0_MASK_OPCODE: number;
				public static OPCODE_FLAG_CONTROL: number;
				public static B1_FLAG_MASK: number;
				public static B1_MASK_LENGTH: number;
				public static OPCODE_CONTINUATION: number;
				public static OPCODE_TEXT: number;
				public static OPCODE_BINARY: number;
				public static OPCODE_CONTROL_CLOSE: number;
				public static OPCODE_CONTROL_PING: number;
				public static OPCODE_CONTROL_PONG: number;
				public static PAYLOAD_BYTE_MAX: number;
				public static CLOSE_MESSAGE_MAX: number;
				public static PAYLOAD_SHORT: number;
				public static PAYLOAD_SHORT_MAX: number;
				public static PAYLOAD_LONG: number;
				public static CLOSE_CLIENT_GOING_AWAY: number;
				public static CLOSE_NO_STATUS_CODE: number;
				public static INSTANCE: okhttp3.internal.ws.WebSocketProtocol;
				public validateCloseCode(code: number): void;
				public closeCodeExceptionMessage(code: number): string;
				public toggleMask(cursor: okio.Buffer.UnsafeCursor, key: native.Array<number>): void;
				public acceptHeader(key: string): string;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module ws {
			export class WebSocketReader extends java.lang.Object implements java.io.Closeable {
				public static class: java.lang.Class<okhttp3.internal.ws.WebSocketReader>;
				public processNextFrame(): void;
				public close(): void;
				public constructor(isClient: boolean, source: okio.BufferedSource, frameCallback: okhttp3.internal.ws.WebSocketReader.FrameCallback, perMessageDeflate: boolean, noContextTakeover: boolean);
				public getSource(): okio.BufferedSource;
			}
			export module WebSocketReader {
				export class FrameCallback extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.ws.WebSocketReader.FrameCallback>;
					/**
					 * Constructs a new instance of the okhttp3.internal.ws.WebSocketReader() when extending the interface class.
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
			export class WebSocketWriter extends java.lang.Object implements java.io.Closeable {
				public static class: java.lang.Class<okhttp3.internal.ws.WebSocketWriter>;
				public close(): void;
				public writeClose(code: number, reason: okio.ByteString): void;
				public writePing(payload: okio.ByteString): void;
				public constructor(isClient: boolean, sink: okio.BufferedSink, random: java.util.Random, perMessageDeflate: boolean, noContextTakeover: boolean, minimumDeflateSize: number);
				public getRandom(): java.util.Random;
				public getSink(): okio.BufferedSink;
				public writePong(payload: okio.ByteString): void;
				public writeMessageFrame(formatOpcode: number, data: okio.ByteString): void;
			}
		}
	}
}

//Generics information:

