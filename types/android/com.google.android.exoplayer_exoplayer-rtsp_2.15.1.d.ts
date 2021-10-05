declare module com {
	export module google {
		export module android {
			export module exoplayer2 {
				export module source {
					export module rtsp {
						export class BuildConfig extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.source.rtsp.BuildConfig>;
							public static DEBUG: boolean;
							public static LIBRARY_PACKAGE_NAME: string;
							public static BUILD_TYPE: string;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module exoplayer2 {
				export module source {
					export module rtsp {
						export class MediaDescription extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.source.rtsp.MediaDescription>;
							public static MEDIA_TYPE_AUDIO: string;
							public static MEDIA_TYPE_VIDEO: string;
							public static RTP_AVP_PROFILE: string;
							public mediaType: string;
							public port: number;
							public transportProtocol: string;
							public payloadType: number;
							public bitrate: number;
							public mediaTitle: string;
							public connection: string;
							public key: string;
							public attributes: com.google.common.collect.ImmutableMap<string,string>;
							public rtpMapAttribute: com.google.android.exoplayer2.source.rtsp.MediaDescription.RtpMapAttribute;
							public hashCode(): number;
							public equals(obj: any): boolean;
							public equals(o: any): boolean;
							public getFmtpParametersAsMap(): com.google.common.collect.ImmutableMap<string,string>;
						}
						export module MediaDescription {
							export class Builder extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.rtsp.MediaDescription.Builder>;
								public constructor(mediaType: string, port: number, transportProtocol: string, payloadType: number);
								public setMediaTitle(mediaTitle: string): com.google.android.exoplayer2.source.rtsp.MediaDescription.Builder;
								public build(): com.google.android.exoplayer2.source.rtsp.MediaDescription;
								public setKey(key: string): com.google.android.exoplayer2.source.rtsp.MediaDescription.Builder;
								public setBitrate(bitrate: number): com.google.android.exoplayer2.source.rtsp.MediaDescription.Builder;
								public setConnection(connection: string): com.google.android.exoplayer2.source.rtsp.MediaDescription.Builder;
								public addAttribute(attributeName: string, attributeValue: string): com.google.android.exoplayer2.source.rtsp.MediaDescription.Builder;
							}
							export class MediaType extends java.lang.Object implements java.lang.annotation.Annotation {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.rtsp.MediaDescription.MediaType>;
								/**
								 * Constructs a new instance of the com.google.android.exoplayer2.source.rtsp.MediaDescription() when extending the interface class.
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
							export class RtpMapAttribute extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.rtsp.MediaDescription.RtpMapAttribute>;
								public payloadType: number;
								public mediaEncoding: string;
								public clockRate: number;
								public encodingParameters: number;
								public equals(obj: any): boolean;
								public equals(o: any): boolean;
								public static parse(rtpmapString: string): com.google.android.exoplayer2.source.rtsp.MediaDescription.RtpMapAttribute;
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
	export module google {
		export module android {
			export module exoplayer2 {
				export module source {
					export module rtsp {
						export class RtpDataChannel extends java.lang.Object implements com.google.android.exoplayer2.upstream.DataSource {
							public static class: java.lang.Class<com.google.android.exoplayer2.source.rtsp.RtpDataChannel>;
							/**
							 * Constructs a new instance of the com.google.android.exoplayer2.source.rtsp.RtpDataChannel interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getTransport(): string;
								getLocalPort(): number;
								getInterleavedBinaryDataListener(): com.google.android.exoplayer2.source.rtsp.RtspMessageChannel.InterleavedBinaryDataListener;
								addTransferListener(transferListener0: com.google.android.exoplayer2.upstream.TransferListener): void;
								open(dataSpec0: com.google.android.exoplayer2.upstream.DataSpec): number;
								getUri(): globalAndroid.net.Uri;
								getResponseHeaders(): java.util.Map<string,java.util.List<string>>;
								close(): void;
								read(bytes0: native.Array<number>, int1: number, int2: number): number;
							});
							public constructor();
							public getInterleavedBinaryDataListener(): com.google.android.exoplayer2.source.rtsp.RtspMessageChannel.InterleavedBinaryDataListener;
							public getUri(): globalAndroid.net.Uri;
							public close(): void;
							public getTransport(): string;
							public read(bytes0: native.Array<number>, int1: number, int2: number): number;
							public getLocalPort(): number;
							public addTransferListener(transferListener0: com.google.android.exoplayer2.upstream.TransferListener): void;
							public getResponseHeaders(): java.util.Map<string,java.util.List<string>>;
							public open(dataSpec0: com.google.android.exoplayer2.upstream.DataSpec): number;
						}
						export module RtpDataChannel {
							export class Factory extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.rtsp.RtpDataChannel.Factory>;
								/**
								 * Constructs a new instance of the com.google.android.exoplayer2.source.rtsp.RtpDataChannel() when extending the interface class.
								 */
								public constructor(implementation: {
									createAndOpenDataChannel(int0: number): com.google.android.exoplayer2.source.rtsp.RtpDataChannel;
									createFallbackDataChannelFactory(): com.google.android.exoplayer2.source.rtsp.RtpDataChannel.Factory;
								});
								public constructor();
								public createFallbackDataChannelFactory(): com.google.android.exoplayer2.source.rtsp.RtpDataChannel.Factory;
								public createAndOpenDataChannel(int0: number): com.google.android.exoplayer2.source.rtsp.RtpDataChannel;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module exoplayer2 {
				export module source {
					export module rtsp {
						export class RtpDataLoadable extends java.lang.Object implements com.google.android.exoplayer2.upstream.Loader.Loadable {
							public static class: java.lang.Class<com.google.android.exoplayer2.source.rtsp.RtpDataLoadable>;
							public trackId: number;
							public rtspMediaTrack: com.google.android.exoplayer2.source.rtsp.RtspMediaTrack;
							public constructor(trackId: number, rtspMediaTrack: com.google.android.exoplayer2.source.rtsp.RtspMediaTrack, eventListener: com.google.android.exoplayer2.source.rtsp.RtpDataLoadable.EventListener, output: com.google.android.exoplayer2.extractor.ExtractorOutput, rtpDataChannelFactory: com.google.android.exoplayer2.source.rtsp.RtpDataChannel.Factory);
							public cancelLoad(): void;
							public seekToUs(positionUs: number, nextRtpTimestamp: number): void;
							public setSequenceNumber(sequenceNumber: number): void;
							public resetForSeek(): void;
							public load(): void;
							public setTimestamp(timestamp: number): void;
						}
						export module RtpDataLoadable {
							export class EventListener extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.rtsp.RtpDataLoadable.EventListener>;
								/**
								 * Constructs a new instance of the com.google.android.exoplayer2.source.rtsp.RtpDataLoadable() when extending the interface class.
								 */
								public constructor(implementation: {
									onTransportReady(string0: string, rtpDataChannel1: com.google.android.exoplayer2.source.rtsp.RtpDataChannel): void;
								});
								public constructor();
								public onTransportReady(string0: string, rtpDataChannel1: com.google.android.exoplayer2.source.rtsp.RtpDataChannel): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module exoplayer2 {
				export module source {
					export module rtsp {
						export class RtpExtractor extends java.lang.Object implements com.google.android.exoplayer2.extractor.Extractor {
							public static class: java.lang.Class<com.google.android.exoplayer2.source.rtsp.RtpExtractor>;
							public seek(nextRtpTimestamp: number, playbackStartTimeUs: number): void;
							public sniff(input: com.google.android.exoplayer2.extractor.ExtractorInput): boolean;
							public setFirstSequenceNumber(firstSequenceNumber: number): void;
							public preSeek(): void;
							public constructor(payloadFormat: com.google.android.exoplayer2.source.rtsp.RtpPayloadFormat, trackId: number);
							public hasReadFirstRtpPacket(): boolean;
							public release(): void;
							public init(output: com.google.android.exoplayer2.extractor.ExtractorOutput): void;
							public read(input: com.google.android.exoplayer2.extractor.ExtractorInput, seekPosition: com.google.android.exoplayer2.extractor.PositionHolder): number;
							public setFirstTimestamp(firstTimestamp: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module exoplayer2 {
				export module source {
					export module rtsp {
						export class RtpPacket extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.source.rtsp.RtpPacket>;
							public static RTP_VERSION: number;
							public static MAX_SIZE: number;
							public static MIN_HEADER_SIZE: number;
							public static MIN_SEQUENCE_NUMBER: number;
							public static MAX_SEQUENCE_NUMBER: number;
							public static CSRC_SIZE: number;
							public version: number;
							public padding: boolean;
							public extension: boolean;
							public csrcCount: number;
							public marker: boolean;
							public payloadType: number;
							public sequenceNumber: number;
							public timestamp: number;
							public ssrc: number;
							public csrc: native.Array<number>;
							public payloadData: native.Array<number>;
							public hashCode(): number;
							public equals(obj: any): boolean;
							public static parse(packetBuffer: com.google.android.exoplayer2.util.ParsableByteArray): com.google.android.exoplayer2.source.rtsp.RtpPacket;
							public writeToBuffer(target: native.Array<number>, offset: number, length: number): number;
							public equals(o: any): boolean;
							public toString(): string;
							public static parse(buffer: native.Array<number>, length: number): com.google.android.exoplayer2.source.rtsp.RtpPacket;
						}
						export module RtpPacket {
							export class Builder extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.rtsp.RtpPacket.Builder>;
								public setSequenceNumber(sequenceNumber: number): com.google.android.exoplayer2.source.rtsp.RtpPacket.Builder;
								public build(): com.google.android.exoplayer2.source.rtsp.RtpPacket;
								public setMarker(marker: boolean): com.google.android.exoplayer2.source.rtsp.RtpPacket.Builder;
								public setPayloadData(payloadData: native.Array<number>): com.google.android.exoplayer2.source.rtsp.RtpPacket.Builder;
								public constructor();
								public setTimestamp(timestamp: number): com.google.android.exoplayer2.source.rtsp.RtpPacket.Builder;
								public setPadding(padding: boolean): com.google.android.exoplayer2.source.rtsp.RtpPacket.Builder;
								public setSsrc(ssrc: number): com.google.android.exoplayer2.source.rtsp.RtpPacket.Builder;
								public setCsrc(csrc: native.Array<number>): com.google.android.exoplayer2.source.rtsp.RtpPacket.Builder;
								public setPayloadType(payloadType: number): com.google.android.exoplayer2.source.rtsp.RtpPacket.Builder;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module exoplayer2 {
				export module source {
					export module rtsp {
						export class RtpPacketReorderingQueue extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.source.rtsp.RtpPacketReorderingQueue>;
							public constructor();
							public offer(packet: com.google.android.exoplayer2.source.rtsp.RtpPacket, receivedTimestampMs: number): boolean;
							public poll(cutoffTimestampMs: number): com.google.android.exoplayer2.source.rtsp.RtpPacket;
							public reset(): void;
						}
						export module RtpPacketReorderingQueue {
							export class RtpPacketContainer extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.rtsp.RtpPacketReorderingQueue.RtpPacketContainer>;
								public packet: com.google.android.exoplayer2.source.rtsp.RtpPacket;
								public receivedTimestampMs: number;
								public constructor(packet: com.google.android.exoplayer2.source.rtsp.RtpPacket, receivedTimestampMs: number);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module exoplayer2 {
				export module source {
					export module rtsp {
						export class RtpPayloadFormat extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.source.rtsp.RtpPayloadFormat>;
							public rtpPayloadType: number;
							public clockRate: number;
							public format: com.google.android.exoplayer2.Format;
							public fmtpParameters: com.google.common.collect.ImmutableMap<string,string>;
							public static getMimeTypeFromRtpMediaType(mediaType: string): string;
							public constructor(format: com.google.android.exoplayer2.Format, rtpPayloadType: number, clockRate: number, fmtpParameters: java.util.Map<string,string>);
							public static isFormatSupported(mediaDescription: com.google.android.exoplayer2.source.rtsp.MediaDescription): boolean;
							public hashCode(): number;
							public equals(obj: any): boolean;
							public equals(o: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module exoplayer2 {
				export module source {
					export module rtsp {
						export class RtpUtils extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.source.rtsp.RtpUtils>;
							public static getIncomingRtpDataSpec(portNumber: number): com.google.android.exoplayer2.upstream.DataSpec;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module exoplayer2 {
				export module source {
					export module rtsp {
						export class RtspAuthenticationInfo extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.source.rtsp.RtspAuthenticationInfo>;
							public static BASIC: number;
							public static DIGEST: number;
							public authenticationMechanism: number;
							public realm: string;
							public nonce: string;
							public opaque: string;
							public constructor(authenticationMechanism: number, realm: string, nonce: string, opaque: string);
							public getAuthorizationHeaderValue(authUserInfo: com.google.android.exoplayer2.source.rtsp.RtspMessageUtil.RtspAuthUserInfo, uri: globalAndroid.net.Uri, requestMethod: number): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module exoplayer2 {
				export module source {
					export module rtsp {
						export class RtspClient extends java.lang.Object implements java.io.Closeable {
							public static class: java.lang.Class<com.google.android.exoplayer2.source.rtsp.RtspClient>;
							public registerInterleavedDataChannel(channel: number, interleavedBinaryDataListener: com.google.android.exoplayer2.source.rtsp.RtspMessageChannel.InterleavedBinaryDataListener): void;
							public close(): void;
							public seekToUs(positionUs: number): void;
							public start(): void;
							public constructor(sessionInfoListener: com.google.android.exoplayer2.source.rtsp.RtspClient.SessionInfoListener, playbackEventListener: com.google.android.exoplayer2.source.rtsp.RtspClient.PlaybackEventListener, userAgent: string, uri: globalAndroid.net.Uri);
							public retryWithRtpTcp(): void;
							public startPlayback(offsetMs: number): void;
							public setupSelectedTracks(loadInfos: java.util.List<com.google.android.exoplayer2.source.rtsp.RtspMediaPeriod.RtpLoadInfo>): void;
						}
						export module RtspClient {
							export class KeepAliveMonitor extends java.lang.Object implements java.lang.Runnable, java.io.Closeable {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.rtsp.RtspClient.KeepAliveMonitor>;
								public run(): void;
								public start(): void;
								public close(): void;
								public constructor(param0: com.google.android.exoplayer2.source.rtsp.RtspClient, intervalMs: number);
							}
							export class MessageListener extends java.lang.Object implements com.google.android.exoplayer2.source.rtsp.RtspMessageChannel.MessageListener {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.rtsp.RtspClient.MessageListener>;
								public onSendingFailed(message: java.util.List<string>, e: java.lang.Exception): void;
								public constructor(param0: com.google.android.exoplayer2.source.rtsp.RtspClient);
								public onReceivingFailed(e: java.lang.Exception): void;
								public onRtspMessageReceived(message: java.util.List<string>): void;
							}
							export class MessageSender extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.rtsp.RtspClient.MessageSender>;
								public sendPlayRequest(uri: globalAndroid.net.Uri, offsetMs: number, sessionId: string): void;
								public sendSetupRequest(trackUri: globalAndroid.net.Uri, transport: string, sessionId: string): void;
								public retryLastRequest(): void;
								public sendPauseRequest(uri: globalAndroid.net.Uri, sessionId: string): void;
								public sendOptionsRequest(uri: globalAndroid.net.Uri, sessionId: string): void;
								public sendDescribeRequest(uri: globalAndroid.net.Uri, sessionId: string): void;
								public sendTeardownRequest(uri: globalAndroid.net.Uri, sessionId: string): void;
							}
							export class PlaybackEventListener extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.rtsp.RtspClient.PlaybackEventListener>;
								/**
								 * Constructs a new instance of the com.google.android.exoplayer2.source.rtsp.RtspClient() when extending the interface class.
								 */
								public constructor(implementation: {
									onRtspSetupCompleted(): void;
									onPlaybackStarted(long0: number, immutableList1: com.google.common.collect.ImmutableList<com.google.android.exoplayer2.source.rtsp.RtspTrackTiming>): void;
									onPlaybackError(rtspPlaybackException0: com.google.android.exoplayer2.source.rtsp.RtspMediaSource.RtspPlaybackException): void;
								});
								public constructor();
								public onRtspSetupCompleted(): void;
								public onPlaybackError(rtspPlaybackException0: com.google.android.exoplayer2.source.rtsp.RtspMediaSource.RtspPlaybackException): void;
								public onPlaybackStarted(long0: number, immutableList1: com.google.common.collect.ImmutableList<com.google.android.exoplayer2.source.rtsp.RtspTrackTiming>): void;
							}
							export class SessionInfoListener extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.rtsp.RtspClient.SessionInfoListener>;
								/**
								 * Constructs a new instance of the com.google.android.exoplayer2.source.rtsp.RtspClient() when extending the interface class.
								 */
								public constructor(implementation: {
									onSessionTimelineUpdated(rtspSessionTiming0: com.google.android.exoplayer2.source.rtsp.RtspSessionTiming, immutableList1: com.google.common.collect.ImmutableList<com.google.android.exoplayer2.source.rtsp.RtspMediaTrack>): void;
									onSessionTimelineRequestFailed(string0: string, throwable1: java.lang.Throwable): void;
								});
								public constructor();
								public onSessionTimelineRequestFailed(string0: string, throwable1: java.lang.Throwable): void;
								public onSessionTimelineUpdated(rtspSessionTiming0: com.google.android.exoplayer2.source.rtsp.RtspSessionTiming, immutableList1: com.google.common.collect.ImmutableList<com.google.android.exoplayer2.source.rtsp.RtspMediaTrack>): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module exoplayer2 {
				export module source {
					export module rtsp {
						export class RtspDescribeResponse extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.source.rtsp.RtspDescribeResponse>;
							public status: number;
							public sessionDescription: com.google.android.exoplayer2.source.rtsp.SessionDescription;
							public constructor(status: number, sessionDescription: com.google.android.exoplayer2.source.rtsp.SessionDescription);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module exoplayer2 {
				export module source {
					export module rtsp {
						export class RtspHeaders extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.source.rtsp.RtspHeaders>;
							public static ACCEPT: string;
							public static ALLOW: string;
							public static AUTHORIZATION: string;
							public static BANDWIDTH: string;
							public static BLOCKSIZE: string;
							public static CACHE_CONTROL: string;
							public static CONNECTION: string;
							public static CONTENT_BASE: string;
							public static CONTENT_ENCODING: string;
							public static CONTENT_LANGUAGE: string;
							public static CONTENT_LENGTH: string;
							public static CONTENT_LOCATION: string;
							public static CONTENT_TYPE: string;
							public static CSEQ: string;
							public static DATE: string;
							public static EXPIRES: string;
							public static PROXY_AUTHENTICATE: string;
							public static PROXY_REQUIRE: string;
							public static PUBLIC: string;
							public static RANGE: string;
							public static RTP_INFO: string;
							public static RTCP_INTERVAL: string;
							public static SCALE: string;
							public static SESSION: string;
							public static SPEED: string;
							public static SUPPORTED: string;
							public static TIMESTAMP: string;
							public static TRANSPORT: string;
							public static USER_AGENT: string;
							public static VIA: string;
							public static WWW_AUTHENTICATE: string;
							public static EMPTY: com.google.android.exoplayer2.source.rtsp.RtspHeaders;
							public get(headerName: string): string;
							public values(headerName: string): com.google.common.collect.ImmutableList<string>;
							public hashCode(): number;
							public buildUpon(): com.google.android.exoplayer2.source.rtsp.RtspHeaders.Builder;
							public equals(obj: any): boolean;
							public asMultiMap(): com.google.common.collect.ImmutableListMultimap<string,string>;
						}
						export module RtspHeaders {
							export class Builder extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.rtsp.RtspHeaders.Builder>;
								public addAll(headers: java.util.Map<string,string>): com.google.android.exoplayer2.source.rtsp.RtspHeaders.Builder;
								public constructor();
								public addAll(headers: java.util.List<string>): com.google.android.exoplayer2.source.rtsp.RtspHeaders.Builder;
								public build(): com.google.android.exoplayer2.source.rtsp.RtspHeaders;
								public add(headerName: string, headerValue: string): com.google.android.exoplayer2.source.rtsp.RtspHeaders.Builder;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module exoplayer2 {
				export module source {
					export module rtsp {
						export class RtspMediaPeriod extends java.lang.Object implements com.google.android.exoplayer2.source.MediaPeriod {
							public static class: java.lang.Class<com.google.android.exoplayer2.source.rtsp.RtspMediaPeriod>;
							public getTrackGroups(): com.google.android.exoplayer2.source.TrackGroupArray;
							public getStreamKeys(trackSelections: java.util.List<com.google.android.exoplayer2.trackselection.ExoTrackSelection>): com.google.common.collect.ImmutableList<com.google.android.exoplayer2.offline.StreamKey>;
							public reevaluateBuffer(positionUs: number): void;
							public constructor(allocator: com.google.android.exoplayer2.upstream.Allocator, rtpDataChannelFactory: com.google.android.exoplayer2.source.rtsp.RtpDataChannel.Factory, uri: globalAndroid.net.Uri, listener: com.google.android.exoplayer2.source.rtsp.RtspMediaPeriod.Listener, userAgent: string);
							public seekToUs(positionUs: number): number;
							public isLoading(): boolean;
							public release(): void;
							public maybeThrowPrepareError(): void;
							public getBufferedPositionUs(): number;
							public discardBuffer(positionUs: number, toKeyframe: boolean): void;
							public getNextLoadPositionUs(): number;
							public continueLoading(positionUs: number): boolean;
							public selectTracks(selections: native.Array<com.google.android.exoplayer2.trackselection.ExoTrackSelection>, mayRetainStreamFlags: native.Array<boolean>, streams: native.Array<com.google.android.exoplayer2.source.SampleStream>, streamResetFlags: native.Array<boolean>, positionUs: number): number;
							public getAdjustedSeekPositionUs(positionUs: number, seekParameters: com.google.android.exoplayer2.SeekParameters): number;
							public readDiscontinuity(): number;
							public getStreamKeys(trackSelections: java.util.List<com.google.android.exoplayer2.trackselection.ExoTrackSelection>): java.util.List<com.google.android.exoplayer2.offline.StreamKey>;
							public prepare(callback: com.google.android.exoplayer2.source.MediaPeriod.Callback, positionUs: number): void;
						}
						export module RtspMediaPeriod {
							export class InternalListener extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.rtsp.RtspMediaPeriod.InternalListener>;
								public onLoadCompleted(loadable: com.google.android.exoplayer2.source.rtsp.RtpDataLoadable, elapsedRealtimeMs: number, loadDurationMs: number): void;
								public onRtspSetupCompleted(): void;
								public seekMap(seekMap: com.google.android.exoplayer2.extractor.SeekMap): void;
								public onLoadError(loadable: com.google.android.exoplayer2.source.rtsp.RtpDataLoadable, elapsedRealtimeMs: number, loadDurationMs: number, error: java.io.IOException, errorCount: number): com.google.android.exoplayer2.upstream.Loader.LoadErrorAction;
								public onPlaybackStarted(startPositionUs: number, trackTimingList: com.google.common.collect.ImmutableList<com.google.android.exoplayer2.source.rtsp.RtspTrackTiming>): void;
								public track(id: number, type: number): com.google.android.exoplayer2.extractor.TrackOutput;
								public onLoadCanceled(loadable0: any, long1: number, long2: number, boolean3: boolean): void;
								public onSessionTimelineUpdated(timing: com.google.android.exoplayer2.source.rtsp.RtspSessionTiming, tracks: com.google.common.collect.ImmutableList<com.google.android.exoplayer2.source.rtsp.RtspMediaTrack>): void;
								public endTracks(): void;
								public onSessionTimelineRequestFailed(message: string, cause: java.lang.Throwable): void;
								public onPlaybackError(error: com.google.android.exoplayer2.source.rtsp.RtspMediaSource.RtspPlaybackException): void;
								public onLoadCanceled(loadable: com.google.android.exoplayer2.source.rtsp.RtpDataLoadable, elapsedRealtimeMs: number, loadDurationMs: number, released: boolean): void;
								public onUpstreamFormatChanged(format: com.google.android.exoplayer2.Format): void;
								public onLoadError(loadable0: any, long1: number, long2: number, iOException3: java.io.IOException, int4: number): com.google.android.exoplayer2.upstream.Loader.LoadErrorAction;
								public onLoadCompleted(loadable0: any, long1: number, long2: number): void;
							}
							export class Listener extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.rtsp.RtspMediaPeriod.Listener>;
								/**
								 * Constructs a new instance of the com.google.android.exoplayer2.source.rtsp.RtspMediaPeriod() when extending the interface class.
								 */
								public constructor(implementation: {
									onSourceInfoRefreshed(rtspSessionTiming0: com.google.android.exoplayer2.source.rtsp.RtspSessionTiming): void;
								});
								public constructor();
								public onSourceInfoRefreshed(rtspSessionTiming0: com.google.android.exoplayer2.source.rtsp.RtspSessionTiming): void;
							}
							export class RtpLoadInfo extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.rtsp.RtspMediaPeriod.RtpLoadInfo>;
								public mediaTrack: com.google.android.exoplayer2.source.rtsp.RtspMediaTrack;
								public getTransport(): string;
								public constructor(this0: com.google.android.exoplayer2.source.rtsp.RtspMediaPeriod, mediaTrack: com.google.android.exoplayer2.source.rtsp.RtspMediaTrack, trackId: number, rtpDataChannelFactory: com.google.android.exoplayer2.source.rtsp.RtpDataChannel.Factory);
								public isTransportReady(): boolean;
								public getTrackUri(): globalAndroid.net.Uri;
							}
							export class RtspLoaderWrapper extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.rtsp.RtspMediaPeriod.RtspLoaderWrapper>;
								public loadInfo: com.google.android.exoplayer2.source.rtsp.RtspMediaPeriod.RtpLoadInfo;
								public isSampleQueueReady(): boolean;
								public constructor(param0: com.google.android.exoplayer2.source.rtsp.RtspMediaPeriod, mediaTrack: com.google.android.exoplayer2.source.rtsp.RtspMediaTrack, trackId: number, rtpDataChannelFactory: com.google.android.exoplayer2.source.rtsp.RtpDataChannel.Factory);
								public cancelLoad(): void;
								public seekTo(positionUs: number): void;
								public read(formatHolder: com.google.android.exoplayer2.FormatHolder, buffer: com.google.android.exoplayer2.decoder.DecoderInputBuffer, readFlags: number): number;
								public getBufferedPositionUs(): number;
								public release(): void;
								public startLoading(): void;
							}
							export class SampleStreamImpl extends java.lang.Object implements com.google.android.exoplayer2.source.SampleStream {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.rtsp.RtspMediaPeriod.SampleStreamImpl>;
								public isReady(): boolean;
								public readData(formatHolder: com.google.android.exoplayer2.FormatHolder, buffer: com.google.android.exoplayer2.decoder.DecoderInputBuffer, readFlags: number): number;
								public constructor(param0: com.google.android.exoplayer2.source.rtsp.RtspMediaPeriod, track: number);
								public skipData(positionUs: number): number;
								public maybeThrowError(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module exoplayer2 {
				export module source {
					export module rtsp {
						export class RtspMediaSource extends com.google.android.exoplayer2.source.BaseMediaSource {
							public static class: java.lang.Class<com.google.android.exoplayer2.source.rtsp.RtspMediaSource>;
							public static DEFAULT_TIMEOUT_MS: number;
							public addEventListener(handler: globalAndroid.os.Handler, eventListener: com.google.android.exoplayer2.source.MediaSourceEventListener): void;
							public getMediaItem(): com.google.android.exoplayer2.MediaItem;
							public enable(caller: com.google.android.exoplayer2.source.MediaSource.MediaSourceCaller): void;
							public releaseSourceInternal(): void;
							public releasePeriod(mediaPeriod: com.google.android.exoplayer2.source.MediaPeriod): void;
							public prepareSourceInternal(transferListener0: com.google.android.exoplayer2.upstream.TransferListener): void;
							public maybeThrowSourceInfoRefreshError(): void;
							public prepareSource(caller: com.google.android.exoplayer2.source.MediaSource.MediaSourceCaller, mediaTransferListener: com.google.android.exoplayer2.upstream.TransferListener): void;
							public isSingleWindow(): boolean;
							public releaseSource(caller: com.google.android.exoplayer2.source.MediaSource.MediaSourceCaller): void;
							public getInitialTimeline(): com.google.android.exoplayer2.Timeline;
							public disable(caller: com.google.android.exoplayer2.source.MediaSource.MediaSourceCaller): void;
							public addDrmEventListener(handler: globalAndroid.os.Handler, eventListener: com.google.android.exoplayer2.drm.DrmSessionEventListener): void;
							public removeDrmEventListener(eventListener: com.google.android.exoplayer2.drm.DrmSessionEventListener): void;
							public removeEventListener(eventListener: com.google.android.exoplayer2.source.MediaSourceEventListener): void;
							public prepareSourceInternal(mediaTransferListener: com.google.android.exoplayer2.upstream.TransferListener): void;
							public createPeriod(id: com.google.android.exoplayer2.source.MediaSource.MediaPeriodId, allocator: com.google.android.exoplayer2.upstream.Allocator, startPositionUs: number): com.google.android.exoplayer2.source.MediaPeriod;
						}
						export module RtspMediaSource {
							export class Factory extends java.lang.Object implements com.google.android.exoplayer2.source.MediaSourceFactory {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.rtsp.RtspMediaSource.Factory>;
								public getSupportedTypes(): native.Array<number>;
								/** @deprecated */
								public setStreamKeys(streamKeys: java.util.List<com.google.android.exoplayer2.offline.StreamKey>): com.google.android.exoplayer2.source.MediaSourceFactory;
								public setUserAgent(userAgent: string): com.google.android.exoplayer2.source.rtsp.RtspMediaSource.Factory;
								public setLoadErrorHandlingPolicy(loadErrorHandlingPolicy0: com.google.android.exoplayer2.upstream.LoadErrorHandlingPolicy): com.google.android.exoplayer2.source.MediaSourceFactory;
								/** @deprecated */
								public createMediaSource(uri: globalAndroid.net.Uri): com.google.android.exoplayer2.source.MediaSource;
								public createMediaSource(mediaItem: com.google.android.exoplayer2.MediaItem): com.google.android.exoplayer2.source.rtsp.RtspMediaSource;
								/** @deprecated */
								public setDrmUserAgent(userAgent: string): com.google.android.exoplayer2.source.rtsp.RtspMediaSource.Factory;
								public constructor();
								/** @deprecated */
								public setDrmSessionManager(drmSessionManager0: com.google.android.exoplayer2.drm.DrmSessionManager): com.google.android.exoplayer2.source.MediaSourceFactory;
								public createMediaSource(mediaItem0: com.google.android.exoplayer2.MediaItem): com.google.android.exoplayer2.source.MediaSource;
								public setTimeoutMs(timeoutMs: number): com.google.android.exoplayer2.source.rtsp.RtspMediaSource.Factory;
								public setDrmSessionManagerProvider(drmSessionManager: com.google.android.exoplayer2.drm.DrmSessionManagerProvider): com.google.android.exoplayer2.source.rtsp.RtspMediaSource.Factory;
								public setForceUseRtpTcp(forceUseRtpTcp: boolean): com.google.android.exoplayer2.source.rtsp.RtspMediaSource.Factory;
								/** @deprecated */
								public setDrmUserAgent(string0: string): com.google.android.exoplayer2.source.MediaSourceFactory;
								/** @deprecated */
								public setDrmSessionManager(drmSessionManager: com.google.android.exoplayer2.drm.DrmSessionManager): com.google.android.exoplayer2.source.rtsp.RtspMediaSource.Factory;
								public setLoadErrorHandlingPolicy(loadErrorHandlingPolicy: com.google.android.exoplayer2.upstream.LoadErrorHandlingPolicy): com.google.android.exoplayer2.source.rtsp.RtspMediaSource.Factory;
								/** @deprecated */
								public setDrmHttpDataSourceFactory(drmHttpDataSourceFactory: com.google.android.exoplayer2.upstream.HttpDataSource.Factory): com.google.android.exoplayer2.source.rtsp.RtspMediaSource.Factory;
								public setDrmSessionManagerProvider(drmSessionManagerProvider0: com.google.android.exoplayer2.drm.DrmSessionManagerProvider): com.google.android.exoplayer2.source.MediaSourceFactory;
								/** @deprecated */
								public setDrmHttpDataSourceFactory(factory0: com.google.android.exoplayer2.upstream.HttpDataSource.Factory): com.google.android.exoplayer2.source.MediaSourceFactory;
							}
							export class RtspPlaybackException extends java.io.IOException {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.rtsp.RtspMediaSource.RtspPlaybackException>;
								public constructor(message: string);
								public constructor(e: java.lang.Throwable);
								public constructor(message: string, e: java.lang.Throwable);
								public constructor(cause: java.lang.Throwable);
								public constructor(message: string, cause: java.lang.Throwable);
								public constructor();
								public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module exoplayer2 {
				export module source {
					export module rtsp {
						export class RtspMediaTrack extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.source.rtsp.RtspMediaTrack>;
							public payloadFormat: com.google.android.exoplayer2.source.rtsp.RtpPayloadFormat;
							public uri: globalAndroid.net.Uri;
							public constructor(mediaDescription: com.google.android.exoplayer2.source.rtsp.MediaDescription, sessionUri: globalAndroid.net.Uri);
							public hashCode(): number;
							public equals(obj: any): boolean;
							public equals(o: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module exoplayer2 {
				export module source {
					export module rtsp {
						export class RtspMessageChannel extends java.lang.Object implements java.io.Closeable {
							public static class: java.lang.Class<com.google.android.exoplayer2.source.rtsp.RtspMessageChannel>;
							public static CHARSET: java.nio.charset.Charset;
							public static DEFAULT_RTSP_PORT: number;
							public close(): void;
							public open(socket: java.net.Socket): void;
							public constructor(messageListener: com.google.android.exoplayer2.source.rtsp.RtspMessageChannel.MessageListener);
							public registerInterleavedBinaryDataListener(channel: number, listener: com.google.android.exoplayer2.source.rtsp.RtspMessageChannel.InterleavedBinaryDataListener): void;
							public send(message: java.util.List<string>): void;
						}
						export module RtspMessageChannel {
							export class InterleavedBinaryDataListener extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.rtsp.RtspMessageChannel.InterleavedBinaryDataListener>;
								/**
								 * Constructs a new instance of the com.google.android.exoplayer2.source.rtsp.RtspMessageChannel() when extending the interface class.
								 */
								public constructor(implementation: {
									onInterleavedBinaryDataReceived(bytes0: native.Array<number>): void;
								});
								public constructor();
								public onInterleavedBinaryDataReceived(bytes0: native.Array<number>): void;
							}
							export class LoaderCallbackImpl extends com.google.android.exoplayer2.upstream.Loader.Callback<com.google.android.exoplayer2.source.rtsp.RtspMessageChannel.Receiver> {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.rtsp.RtspMessageChannel.LoaderCallbackImpl>;
								public onLoadCanceled(loadable0: any, long1: number, long2: number, boolean3: boolean): void;
								public onLoadCanceled(loadable: com.google.android.exoplayer2.source.rtsp.RtspMessageChannel.Receiver, elapsedRealtimeMs: number, loadDurationMs: number, released: boolean): void;
								public onLoadError(loadable0: any, long1: number, long2: number, iOException3: java.io.IOException, int4: number): com.google.android.exoplayer2.upstream.Loader.LoadErrorAction;
								public onLoadError(loadable: com.google.android.exoplayer2.source.rtsp.RtspMessageChannel.Receiver, elapsedRealtimeMs: number, loadDurationMs: number, error: java.io.IOException, errorCount: number): com.google.android.exoplayer2.upstream.Loader.LoadErrorAction;
								public onLoadCompleted(loadable: com.google.android.exoplayer2.source.rtsp.RtspMessageChannel.Receiver, elapsedRealtimeMs: number, loadDurationMs: number): void;
								public onLoadCompleted(loadable0: any, long1: number, long2: number): void;
							}
							export class MessageListener extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.rtsp.RtspMessageChannel.MessageListener>;
								/**
								 * Constructs a new instance of the com.google.android.exoplayer2.source.rtsp.RtspMessageChannel() when extending the interface class.
								 */
								public constructor(implementation: {
									onRtspMessageReceived(list0: java.util.List<string>): void;
									onSendingFailed(message: java.util.List<string>, e: java.lang.Exception): void;
									onReceivingFailed(e: java.lang.Exception): void;
								});
								public constructor();
								public onSendingFailed(message: java.util.List<string>, e: java.lang.Exception): void;
								public onRtspMessageReceived(list0: java.util.List<string>): void;
								public onReceivingFailed(e: java.lang.Exception): void;
							}
							export class MessageParser extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.rtsp.RtspMessageChannel.MessageParser>;
								public parseNext(firstByte: number, dataInputStream: java.io.DataInputStream): com.google.common.collect.ImmutableList<string>;
								public constructor();
							}
							export class Receiver extends java.lang.Object implements com.google.android.exoplayer2.upstream.Loader.Loadable {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.rtsp.RtspMessageChannel.Receiver>;
								public cancelLoad(): void;
								public constructor(param0: com.google.android.exoplayer2.source.rtsp.RtspMessageChannel, inputStream: java.io.InputStream);
								public load(): void;
							}
							export class Sender extends java.lang.Object implements java.io.Closeable {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.rtsp.RtspMessageChannel.Sender>;
								public send(message: java.util.List<string>): void;
								public close(): void;
								public constructor(param0: com.google.android.exoplayer2.source.rtsp.RtspMessageChannel, outputStream: java.io.OutputStream);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module exoplayer2 {
				export module source {
					export module rtsp {
						export class RtspMessageUtil extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.source.rtsp.RtspMessageUtil>;
							public static DEFAULT_RTSP_TIMEOUT_MS: number;
							public static parseRequest(lines: java.util.List<string>): com.google.android.exoplayer2.source.rtsp.RtspRequest;
							public static parseWwwAuthenticateHeader(headerValue: string): com.google.android.exoplayer2.source.rtsp.RtspAuthenticationInfo;
							public static splitRtspMessageBody(body: string): native.Array<string>;
							public static parsePublicHeader(publicHeader: string): com.google.common.collect.ImmutableList<java.lang.Integer>;
							public static toMethodString(method: number): string;
							public static serializeResponse(response: com.google.android.exoplayer2.source.rtsp.RtspResponse): com.google.common.collect.ImmutableList<string>;
							public static convertMessageToByteArray(message: java.util.List<string>): native.Array<number>;
							public static parseInt(intString: string): number;
							public static getStringBytes(s: string): native.Array<number>;
							public static parseResponse(lines: java.util.List<string>): com.google.android.exoplayer2.source.rtsp.RtspResponse;
							public static removeUserInfo(uri: globalAndroid.net.Uri): globalAndroid.net.Uri;
							public static parseUserInfo(uri: globalAndroid.net.Uri): com.google.android.exoplayer2.source.rtsp.RtspMessageUtil.RtspAuthUserInfo;
							public static parseContentLengthHeader(line: string): number;
							public static serializeRequest(request: com.google.android.exoplayer2.source.rtsp.RtspRequest): com.google.common.collect.ImmutableList<string>;
							public static isRtspStartLine(line: string): boolean;
							public static parseSessionHeader(headerValue: string): com.google.android.exoplayer2.source.rtsp.RtspMessageUtil.RtspSessionHeader;
						}
						export module RtspMessageUtil {
							export class RtspAuthUserInfo extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.rtsp.RtspMessageUtil.RtspAuthUserInfo>;
								public username: string;
								public password: string;
								public constructor(username: string, password: string);
							}
							export class RtspSessionHeader extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.rtsp.RtspMessageUtil.RtspSessionHeader>;
								public sessionId: string;
								public timeoutMs: number;
								public constructor(sessionId: string, timeoutMs: number);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module exoplayer2 {
				export module source {
					export module rtsp {
						export class RtspOptionsResponse extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.source.rtsp.RtspOptionsResponse>;
							public status: number;
							public supportedMethods: com.google.common.collect.ImmutableList<java.lang.Integer>;
							public constructor(status: number, supportedMethods: java.util.List<java.lang.Integer>);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module exoplayer2 {
				export module source {
					export module rtsp {
						export class RtspPlayResponse extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.source.rtsp.RtspPlayResponse>;
							public status: number;
							public sessionTiming: com.google.android.exoplayer2.source.rtsp.RtspSessionTiming;
							public trackTimingList: com.google.common.collect.ImmutableList<com.google.android.exoplayer2.source.rtsp.RtspTrackTiming>;
							public constructor(status: number, sessionTiming: com.google.android.exoplayer2.source.rtsp.RtspSessionTiming, trackTimingList: java.util.List<com.google.android.exoplayer2.source.rtsp.RtspTrackTiming>);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module exoplayer2 {
				export module source {
					export module rtsp {
						export class RtspRequest extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.source.rtsp.RtspRequest>;
							public static METHOD_UNSET: number;
							public static METHOD_ANNOUNCE: number;
							public static METHOD_DESCRIBE: number;
							public static METHOD_GET_PARAMETER: number;
							public static METHOD_OPTIONS: number;
							public static METHOD_PAUSE: number;
							public static METHOD_PLAY: number;
							public static METHOD_PLAY_NOTIFY: number;
							public static METHOD_RECORD: number;
							public static METHOD_REDIRECT: number;
							public static METHOD_SETUP: number;
							public static METHOD_SET_PARAMETER: number;
							public static METHOD_TEARDOWN: number;
							public uri: globalAndroid.net.Uri;
							public method: number;
							public headers: com.google.android.exoplayer2.source.rtsp.RtspHeaders;
							public messageBody: string;
							public constructor(uri: globalAndroid.net.Uri, method: number, headers: com.google.android.exoplayer2.source.rtsp.RtspHeaders, messageBody: string);
						}
						export module RtspRequest {
							export class Method extends java.lang.Object implements java.lang.annotation.Annotation {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.rtsp.RtspRequest.Method>;
								/**
								 * Constructs a new instance of the com.google.android.exoplayer2.source.rtsp.RtspRequest() when extending the interface class.
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
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module exoplayer2 {
				export module source {
					export module rtsp {
						export class RtspResponse extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.source.rtsp.RtspResponse>;
							public status: number;
							public headers: com.google.android.exoplayer2.source.rtsp.RtspHeaders;
							public messageBody: string;
							public constructor(status: number, headers: com.google.android.exoplayer2.source.rtsp.RtspHeaders, messageBody: string);
							public constructor(status: number, headers: com.google.android.exoplayer2.source.rtsp.RtspHeaders);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module exoplayer2 {
				export module source {
					export module rtsp {
						export class RtspSessionTiming extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.source.rtsp.RtspSessionTiming>;
							public static DEFAULT: com.google.android.exoplayer2.source.rtsp.RtspSessionTiming;
							public startTimeMs: number;
							public stopTimeMs: number;
							public static getOffsetStartTimeTiming(offsetStartTimeMs: number): string;
							public getDurationMs(): number;
							public isLive(): boolean;
							public static parseTiming(sdpRangeAttribute: string): com.google.android.exoplayer2.source.rtsp.RtspSessionTiming;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module exoplayer2 {
				export module source {
					export module rtsp {
						export class RtspSetupResponse extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.source.rtsp.RtspSetupResponse>;
							public status: number;
							public sessionHeader: com.google.android.exoplayer2.source.rtsp.RtspMessageUtil.RtspSessionHeader;
							public transport: string;
							public constructor(status: number, sessionHeader: com.google.android.exoplayer2.source.rtsp.RtspMessageUtil.RtspSessionHeader, transport: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module exoplayer2 {
				export module source {
					export module rtsp {
						export class RtspTrackTiming extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.source.rtsp.RtspTrackTiming>;
							public rtpTimestamp: number;
							public sequenceNumber: number;
							public uri: globalAndroid.net.Uri;
							public static parseTrackTiming(rtpInfoString: string, sessionUri: globalAndroid.net.Uri): com.google.common.collect.ImmutableList<com.google.android.exoplayer2.source.rtsp.RtspTrackTiming>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module exoplayer2 {
				export module source {
					export module rtsp {
						export class SessionDescription extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.source.rtsp.SessionDescription>;
							public static SUPPORTED_SDP_VERSION: string;
							public static ATTR_CONTROL: string;
							public static ATTR_FMTP: string;
							public static ATTR_LENGTH: string;
							public static ATTR_RANGE: string;
							public static ATTR_RTPMAP: string;
							public static ATTR_TOOL: string;
							public static ATTR_TYPE: string;
							public attributes: com.google.common.collect.ImmutableMap<string,string>;
							public mediaDescriptionList: com.google.common.collect.ImmutableList<com.google.android.exoplayer2.source.rtsp.MediaDescription>;
							public sessionName: string;
							public origin: string;
							public timing: string;
							public bitrate: number;
							public uri: globalAndroid.net.Uri;
							public connection: string;
							public key: string;
							public emailAddress: string;
							public phoneNumber: string;
							public sessionInfo: string;
							public hashCode(): number;
							public equals(obj: any): boolean;
							public equals(o: any): boolean;
						}
						export module SessionDescription {
							export class Builder extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.rtsp.SessionDescription.Builder>;
								public setOrigin(origin: string): com.google.android.exoplayer2.source.rtsp.SessionDescription.Builder;
								public setEmailAddress(emailAddress: string): com.google.android.exoplayer2.source.rtsp.SessionDescription.Builder;
								public setKey(key: string): com.google.android.exoplayer2.source.rtsp.SessionDescription.Builder;
								public addMediaDescription(mediaDescription: com.google.android.exoplayer2.source.rtsp.MediaDescription): com.google.android.exoplayer2.source.rtsp.SessionDescription.Builder;
								public setConnection(connection: string): com.google.android.exoplayer2.source.rtsp.SessionDescription.Builder;
								public constructor();
								public setPhoneNumber(phoneNumber: string): com.google.android.exoplayer2.source.rtsp.SessionDescription.Builder;
								public addAttribute(attributeName: string, attributeValue: string): com.google.android.exoplayer2.source.rtsp.SessionDescription.Builder;
								public setSessionName(sessionName: string): com.google.android.exoplayer2.source.rtsp.SessionDescription.Builder;
								public setUri(uri: globalAndroid.net.Uri): com.google.android.exoplayer2.source.rtsp.SessionDescription.Builder;
								public build(): com.google.android.exoplayer2.source.rtsp.SessionDescription;
								public setBitrate(bitrate: number): com.google.android.exoplayer2.source.rtsp.SessionDescription.Builder;
								public setSessionInfo(sessionInfo: string): com.google.android.exoplayer2.source.rtsp.SessionDescription.Builder;
								public setTiming(timing: string): com.google.android.exoplayer2.source.rtsp.SessionDescription.Builder;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module exoplayer2 {
				export module source {
					export module rtsp {
						export class SessionDescriptionParser extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.source.rtsp.SessionDescriptionParser>;
							public static parse(sdpString: string): com.google.android.exoplayer2.source.rtsp.SessionDescription;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module exoplayer2 {
				export module source {
					export module rtsp {
						export class TransferRtpDataChannel extends com.google.android.exoplayer2.upstream.BaseDataSource implements com.google.android.exoplayer2.source.rtsp.RtpDataChannel, com.google.android.exoplayer2.source.rtsp.RtspMessageChannel.InterleavedBinaryDataListener {
							public static class: java.lang.Class<com.google.android.exoplayer2.source.rtsp.TransferRtpDataChannel>;
							public getInterleavedBinaryDataListener(): com.google.android.exoplayer2.source.rtsp.RtspMessageChannel.InterleavedBinaryDataListener;
							public constructor(pollTimeoutMs: number);
							public close(): void;
							public getUri(): globalAndroid.net.Uri;
							public constructor(isNetwork: boolean);
							public getTransport(): string;
							public open(dataSpec: com.google.android.exoplayer2.upstream.DataSpec): number;
							public read(buffer: native.Array<number>, offset: number, length: number): number;
							public onInterleavedBinaryDataReceived(data: native.Array<number>): void;
							public addTransferListener(transferListener: com.google.android.exoplayer2.upstream.TransferListener): void;
							public getLocalPort(): number;
							public getResponseHeaders(): java.util.Map<string,java.util.List<string>>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module exoplayer2 {
				export module source {
					export module rtsp {
						export class TransferRtpDataChannelFactory extends java.lang.Object implements com.google.android.exoplayer2.source.rtsp.RtpDataChannel.Factory {
							public static class: java.lang.Class<com.google.android.exoplayer2.source.rtsp.TransferRtpDataChannelFactory>;
							public createAndOpenDataChannel(trackId: number): com.google.android.exoplayer2.source.rtsp.RtpDataChannel;
							public createFallbackDataChannelFactory(): com.google.android.exoplayer2.source.rtsp.RtpDataChannel.Factory;
							public constructor(timeoutMs: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module exoplayer2 {
				export module source {
					export module rtsp {
						export class UdpDataSourceRtpDataChannel extends java.lang.Object implements com.google.android.exoplayer2.source.rtsp.RtpDataChannel {
							public static class: java.lang.Class<com.google.android.exoplayer2.source.rtsp.UdpDataSourceRtpDataChannel>;
							public getInterleavedBinaryDataListener(): com.google.android.exoplayer2.source.rtsp.RtspMessageChannel.InterleavedBinaryDataListener;
							public getUri(): globalAndroid.net.Uri;
							public close(): void;
							public setRtcpChannel(rtcpChannel: com.google.android.exoplayer2.source.rtsp.UdpDataSourceRtpDataChannel): void;
							public getTransport(): string;
							public open(dataSpec: com.google.android.exoplayer2.upstream.DataSpec): number;
							public addTransferListener(transferListener: com.google.android.exoplayer2.upstream.TransferListener): void;
							public read(buffer: native.Array<number>, offset: number, length: number): number;
							public constructor(socketTimeoutMs: number);
							public getLocalPort(): number;
							public getResponseHeaders(): java.util.Map<string,java.util.List<string>>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module exoplayer2 {
				export module source {
					export module rtsp {
						export class UdpDataSourceRtpDataChannelFactory extends java.lang.Object implements com.google.android.exoplayer2.source.rtsp.RtpDataChannel.Factory {
							public static class: java.lang.Class<com.google.android.exoplayer2.source.rtsp.UdpDataSourceRtpDataChannelFactory>;
							public createAndOpenDataChannel(trackId: number): com.google.android.exoplayer2.source.rtsp.RtpDataChannel;
							public createFallbackDataChannelFactory(): com.google.android.exoplayer2.source.rtsp.RtpDataChannel.Factory;
							public constructor(socketTimeoutMs: number);
						}
					}
				}
			}
		}
	}
}


declare module com {
	export module google {
		export module android {
			export module exoplayer2 {
				export module source {
					export module rtsp {
						export module reader {
							export class DefaultRtpPayloadReaderFactory extends java.lang.Object implements com.google.android.exoplayer2.source.rtsp.reader.RtpPayloadReader.Factory {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.rtsp.reader.DefaultRtpPayloadReaderFactory>;
								public createPayloadReader(payloadFormat: com.google.android.exoplayer2.source.rtsp.RtpPayloadFormat): com.google.android.exoplayer2.source.rtsp.reader.RtpPayloadReader;
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
	export module google {
		export module android {
			export module exoplayer2 {
				export module source {
					export module rtsp {
						export module reader {
							export class RtpAacReader extends java.lang.Object implements com.google.android.exoplayer2.source.rtsp.reader.RtpPayloadReader {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.rtsp.reader.RtpAacReader>;
								public onReceivingFirstPacket(timestamp: number, sequenceNumber: number): void;
								public seek(nextRtpTimestamp: number, timeUs: number): void;
								public consume(data: com.google.android.exoplayer2.util.ParsableByteArray, timestamp: number, sequenceNumber: number, rtpMarker: boolean): void;
								public constructor(payloadFormat: com.google.android.exoplayer2.source.rtsp.RtpPayloadFormat);
								public createTracks(extractorOutput: com.google.android.exoplayer2.extractor.ExtractorOutput, trackId: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module exoplayer2 {
				export module source {
					export module rtsp {
						export module reader {
							export class RtpAc3Reader extends java.lang.Object implements com.google.android.exoplayer2.source.rtsp.reader.RtpPayloadReader {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.rtsp.reader.RtpAc3Reader>;
								public onReceivingFirstPacket(timestamp: number, sequenceNumber: number): void;
								public seek(nextRtpTimestamp: number, timeUs: number): void;
								public consume(data: com.google.android.exoplayer2.util.ParsableByteArray, timestamp: number, sequenceNumber: number, rtpMarker: boolean): void;
								public constructor(payloadFormat: com.google.android.exoplayer2.source.rtsp.RtpPayloadFormat);
								public createTracks(extractorOutput: com.google.android.exoplayer2.extractor.ExtractorOutput, trackId: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module exoplayer2 {
				export module source {
					export module rtsp {
						export module reader {
							export class RtpH264Reader extends java.lang.Object implements com.google.android.exoplayer2.source.rtsp.reader.RtpPayloadReader {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.rtsp.reader.RtpH264Reader>;
								public onReceivingFirstPacket(timestamp: number, sequenceNumber: number): void;
								public seek(nextRtpTimestamp: number, timeUs: number): void;
								public consume(data: com.google.android.exoplayer2.util.ParsableByteArray, timestamp: number, sequenceNumber: number, rtpMarker: boolean): void;
								public constructor(payloadFormat: com.google.android.exoplayer2.source.rtsp.RtpPayloadFormat);
								public createTracks(extractorOutput: com.google.android.exoplayer2.extractor.ExtractorOutput, trackId: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module exoplayer2 {
				export module source {
					export module rtsp {
						export module reader {
							export class RtpPayloadReader extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.rtsp.reader.RtpPayloadReader>;
								/**
								 * Constructs a new instance of the com.google.android.exoplayer2.source.rtsp.reader.RtpPayloadReader interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									createTracks(extractorOutput0: com.google.android.exoplayer2.extractor.ExtractorOutput, int1: number): void;
									onReceivingFirstPacket(long0: number, int1: number): void;
									consume(parsableByteArray0: com.google.android.exoplayer2.util.ParsableByteArray, long1: number, int2: number, boolean3: boolean): void;
									seek(long0: number, long1: number): void;
								});
								public constructor();
								public createTracks(extractorOutput0: com.google.android.exoplayer2.extractor.ExtractorOutput, int1: number): void;
								public onReceivingFirstPacket(long0: number, int1: number): void;
								public seek(long0: number, long1: number): void;
								public consume(parsableByteArray0: com.google.android.exoplayer2.util.ParsableByteArray, long1: number, int2: number, boolean3: boolean): void;
							}
							export module RtpPayloadReader {
								export class Factory extends java.lang.Object {
									public static class: java.lang.Class<com.google.android.exoplayer2.source.rtsp.reader.RtpPayloadReader.Factory>;
									/**
									 * Constructs a new instance of the com.google.android.exoplayer2.source.rtsp.reader.RtpPayloadReader() when extending the interface class.
									 */
									public constructor(implementation: {
										createPayloadReader(rtpPayloadFormat0: com.google.android.exoplayer2.source.rtsp.RtpPayloadFormat): com.google.android.exoplayer2.source.rtsp.reader.RtpPayloadReader;
									});
									public constructor();
									public createPayloadReader(rtpPayloadFormat0: com.google.android.exoplayer2.source.rtsp.RtpPayloadFormat): com.google.android.exoplayer2.source.rtsp.reader.RtpPayloadReader;
								}
							}
						}
					}
				}
			}
		}
	}
}


//Generics information:

