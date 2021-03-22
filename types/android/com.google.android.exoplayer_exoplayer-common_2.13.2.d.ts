declare module com {
	export module google {
		export module android {
			export module exoplayer2 {
				export abstract class BasePlayer extends java.lang.Object implements com.google.android.exoplayer2.Player {
					public static class: java.lang.Class<com.google.android.exoplayer2.BasePlayer>;
					public window: com.google.android.exoplayer2.Timeline.Window;
					public isCurrentWindowDynamic(): boolean;
					public getPlayWhenReady(): boolean;
					public getRendererCount(): number;
					public removeMediaItem(index: number): void;
					public setShuffleModeEnabled(boolean0: boolean): void;
					public setPlayWhenReady(boolean0: boolean): void;
					/** @deprecated */
					public getPlaybackError(): com.google.android.exoplayer2.ExoPlaybackException;
					public addMediaItem(index: number, mediaItem: com.google.android.exoplayer2.MediaItem): void;
					public hasNext(): boolean;
					/** @deprecated */
					public getCurrentTag(): any;
					public getContentPosition(): number;
					public constructor();
					public setMediaItem(mediaItem: com.google.android.exoplayer2.MediaItem, startPositionMs: number): void;
					public pause(): void;
					public getDeviceComponent(): com.google.android.exoplayer2.Player.DeviceComponent;
					public clearMediaItems(): void;
					public getPlaybackSuppressionReason(): number;
					public getCurrentAdGroupIndex(): number;
					public getCurrentPeriodIndex(): number;
					public prepare(): void;
					public next(): void;
					public getMetadataComponent(): com.google.android.exoplayer2.Player.MetadataComponent;
					public removeListener(eventListener0: com.google.android.exoplayer2.Player.EventListener): void;
					public getPlaybackParameters(): com.google.android.exoplayer2.PlaybackParameters;
					public getShuffleModeEnabled(): boolean;
					public getCurrentWindowIndex(): number;
					public previous(): void;
					public seekToDefaultPosition(windowIndex: number): void;
					public getRendererType(int0: number): number;
					public seekTo(int0: number, long1: number): void;
					public release(): void;
					public getMediaItemAt(index: number): com.google.android.exoplayer2.MediaItem;
					public getCurrentAdIndexInAdGroup(): number;
					public getPreviousWindowIndex(): number;
					public isCurrentWindowSeekable(): boolean;
					public getAudioComponent(): com.google.android.exoplayer2.Player.AudioComponent;
					public getCurrentLiveOffset(): number;
					public getPlayerError(): com.google.android.exoplayer2.ExoPlaybackException;
					public getContentBufferedPosition(): number;
					public stop(): void;
					public setRepeatMode(int0: number): void;
					public play(): void;
					public setMediaItem(mediaItem: com.google.android.exoplayer2.MediaItem): void;
					public getPlaybackState(): number;
					public getCurrentTimeline(): com.google.android.exoplayer2.Timeline;
					public isLoading(): boolean;
					/** @deprecated */
					public stop(boolean0: boolean): void;
					public getRepeatMode(): number;
					public addListener(eventListener0: com.google.android.exoplayer2.Player.EventListener): void;
					public getApplicationLooper(): globalAndroid.os.Looper;
					public getTextComponent(): com.google.android.exoplayer2.Player.TextComponent;
					public getDuration(): number;
					public isPlaying(): boolean;
					public hasPrevious(): boolean;
					public setMediaItems(list0: java.util.List<com.google.android.exoplayer2.MediaItem>, int1: number, long2: number): void;
					public getCurrentStaticMetadata(): java.util.List<com.google.android.exoplayer2.metadata.Metadata>;
					public getCurrentPosition(): number;
					public getCurrentTrackSelections(): com.google.android.exoplayer2.trackselection.TrackSelectionArray;
					public setPlaybackParameters(playbackParameters0: com.google.android.exoplayer2.PlaybackParameters): void;
					public setMediaItems(mediaItems: java.util.List<com.google.android.exoplayer2.MediaItem>): void;
					public getNextWindowIndex(): number;
					public removeMediaItems(int0: number, int1: number): void;
					public getCurrentMediaItem(): com.google.android.exoplayer2.MediaItem;
					public getMediaItemCount(): number;
					public setMediaItem(mediaItem: com.google.android.exoplayer2.MediaItem, resetPosition: boolean): void;
					public addMediaItem(mediaItem: com.google.android.exoplayer2.MediaItem): void;
					public moveMediaItems(int0: number, int1: number, int2: number): void;
					public getVideoComponent(): com.google.android.exoplayer2.Player.VideoComponent;
					public addMediaItems(list0: java.util.List<com.google.android.exoplayer2.MediaItem>): void;
					public addMediaItems(int0: number, list1: java.util.List<com.google.android.exoplayer2.MediaItem>): void;
					public getTotalBufferedDuration(): number;
					public isCurrentWindowLive(): boolean;
					public isPlayingAd(): boolean;
					public getBufferedPercentage(): number;
					public moveMediaItem(currentIndex: number, newIndex: number): void;
					public seekToDefaultPosition(): void;
					public getBufferedPosition(): number;
					public seekTo(positionMs: number): void;
					public getCurrentManifest(): any;
					public getCurrentTrackGroups(): com.google.android.exoplayer2.source.TrackGroupArray;
					public getContentDuration(): number;
					public setMediaItems(list0: java.util.List<com.google.android.exoplayer2.MediaItem>, boolean1: boolean): void;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module exoplayer2 {
				export class C extends java.lang.Object {
					public static class: java.lang.Class<com.google.android.exoplayer2.C>;
					public static TIME_END_OF_SOURCE: number;
					public static TIME_UNSET: number;
					public static INDEX_UNSET: number;
					public static POSITION_UNSET: number;
					public static RATE_UNSET: number;
					public static LENGTH_UNSET: number;
					public static PERCENTAGE_UNSET: number;
					public static MILLIS_PER_SECOND: number;
					public static MICROS_PER_SECOND: number;
					public static NANOS_PER_SECOND: number;
					public static BITS_PER_BYTE: number;
					public static BYTES_PER_FLOAT: number;
					public static ASCII_NAME: string;
					public static UTF8_NAME: string;
					public static ISO88591_NAME: string;
					public static UTF16_NAME: string;
					public static UTF16LE_NAME: string;
					public static SERIF_NAME: string;
					public static SANS_SERIF_NAME: string;
					public static CRYPTO_MODE_UNENCRYPTED: number;
					public static CRYPTO_MODE_AES_CTR: number;
					public static CRYPTO_MODE_AES_CBC: number;
					public static AUDIO_SESSION_ID_UNSET: number;
					public static ENCODING_INVALID: number;
					public static ENCODING_PCM_8BIT: number;
					public static ENCODING_PCM_16BIT: number;
					public static ENCODING_PCM_16BIT_BIG_ENDIAN: number;
					public static ENCODING_PCM_24BIT: number;
					public static ENCODING_PCM_32BIT: number;
					public static ENCODING_PCM_FLOAT: number;
					public static ENCODING_MP3: number;
					public static ENCODING_AAC_LC: number;
					public static ENCODING_AAC_HE_V1: number;
					public static ENCODING_AAC_HE_V2: number;
					public static ENCODING_AAC_XHE: number;
					public static ENCODING_AAC_ELD: number;
					public static ENCODING_AAC_ER_BSAC: number;
					public static ENCODING_AC3: number;
					public static ENCODING_E_AC3: number;
					public static ENCODING_E_AC3_JOC: number;
					public static ENCODING_AC4: number;
					public static ENCODING_DTS: number;
					public static ENCODING_DTS_HD: number;
					public static ENCODING_DOLBY_TRUEHD: number;
					public static STREAM_TYPE_ALARM: number;
					public static STREAM_TYPE_DTMF: number;
					public static STREAM_TYPE_MUSIC: number;
					public static STREAM_TYPE_NOTIFICATION: number;
					public static STREAM_TYPE_RING: number;
					public static STREAM_TYPE_SYSTEM: number;
					public static STREAM_TYPE_VOICE_CALL: number;
					public static STREAM_TYPE_DEFAULT: number;
					public static CONTENT_TYPE_MOVIE: number;
					public static CONTENT_TYPE_MUSIC: number;
					public static CONTENT_TYPE_SONIFICATION: number;
					public static CONTENT_TYPE_SPEECH: number;
					public static CONTENT_TYPE_UNKNOWN: number;
					public static FLAG_AUDIBILITY_ENFORCED: number;
					public static USAGE_ALARM: number;
					public static USAGE_ASSISTANCE_ACCESSIBILITY: number;
					public static USAGE_ASSISTANCE_NAVIGATION_GUIDANCE: number;
					public static USAGE_ASSISTANCE_SONIFICATION: number;
					public static USAGE_ASSISTANT: number;
					public static USAGE_GAME: number;
					public static USAGE_MEDIA: number;
					public static USAGE_NOTIFICATION: number;
					public static USAGE_NOTIFICATION_COMMUNICATION_DELAYED: number;
					public static USAGE_NOTIFICATION_COMMUNICATION_INSTANT: number;
					public static USAGE_NOTIFICATION_COMMUNICATION_REQUEST: number;
					public static USAGE_NOTIFICATION_EVENT: number;
					public static USAGE_NOTIFICATION_RINGTONE: number;
					public static USAGE_UNKNOWN: number;
					public static USAGE_VOICE_COMMUNICATION: number;
					public static USAGE_VOICE_COMMUNICATION_SIGNALLING: number;
					public static ALLOW_CAPTURE_BY_ALL: number;
					public static ALLOW_CAPTURE_BY_NONE: number;
					public static ALLOW_CAPTURE_BY_SYSTEM: number;
					public static AUDIOFOCUS_NONE: number;
					public static AUDIOFOCUS_GAIN: number;
					public static AUDIOFOCUS_GAIN_TRANSIENT: number;
					public static AUDIOFOCUS_GAIN_TRANSIENT_MAY_DUCK: number;
					public static AUDIOFOCUS_GAIN_TRANSIENT_EXCLUSIVE: number;
					public static BUFFER_FLAG_KEY_FRAME: number;
					public static BUFFER_FLAG_END_OF_STREAM: number;
					public static BUFFER_FLAG_HAS_SUPPLEMENTAL_DATA: number;
					public static BUFFER_FLAG_LAST_SAMPLE: number;
					public static BUFFER_FLAG_ENCRYPTED: number;
					public static BUFFER_FLAG_DECODE_ONLY: number;
					public static VIDEO_OUTPUT_MODE_NONE: number;
					public static VIDEO_OUTPUT_MODE_YUV: number;
					public static VIDEO_OUTPUT_MODE_SURFACE_YUV: number;
					public static VIDEO_SCALING_MODE_SCALE_TO_FIT: number;
					public static VIDEO_SCALING_MODE_SCALE_TO_FIT_WITH_CROPPING: number;
					public static VIDEO_SCALING_MODE_DEFAULT: number;
					public static SELECTION_FLAG_DEFAULT: number;
					public static SELECTION_FLAG_FORCED: number;
					public static SELECTION_FLAG_AUTOSELECT: number;
					public static LANGUAGE_UNDETERMINED: string;
					public static TYPE_DASH: number;
					public static TYPE_SS: number;
					public static TYPE_HLS: number;
					public static TYPE_OTHER: number;
					public static RESULT_END_OF_INPUT: number;
					public static RESULT_MAX_LENGTH_EXCEEDED: number;
					public static RESULT_NOTHING_READ: number;
					public static RESULT_BUFFER_READ: number;
					public static RESULT_FORMAT_READ: number;
					public static DATA_TYPE_UNKNOWN: number;
					public static DATA_TYPE_MEDIA: number;
					public static DATA_TYPE_MEDIA_INITIALIZATION: number;
					public static DATA_TYPE_DRM: number;
					public static DATA_TYPE_MANIFEST: number;
					public static DATA_TYPE_TIME_SYNCHRONIZATION: number;
					public static DATA_TYPE_AD: number;
					public static DATA_TYPE_MEDIA_PROGRESSIVE_LIVE: number;
					public static DATA_TYPE_CUSTOM_BASE: number;
					public static TRACK_TYPE_UNKNOWN: number;
					public static TRACK_TYPE_DEFAULT: number;
					public static TRACK_TYPE_AUDIO: number;
					public static TRACK_TYPE_VIDEO: number;
					public static TRACK_TYPE_TEXT: number;
					public static TRACK_TYPE_IMAGE: number;
					public static TRACK_TYPE_METADATA: number;
					public static TRACK_TYPE_CAMERA_MOTION: number;
					public static TRACK_TYPE_NONE: number;
					public static TRACK_TYPE_CUSTOM_BASE: number;
					public static SELECTION_REASON_UNKNOWN: number;
					public static SELECTION_REASON_INITIAL: number;
					public static SELECTION_REASON_MANUAL: number;
					public static SELECTION_REASON_ADAPTIVE: number;
					public static SELECTION_REASON_TRICK_PLAY: number;
					public static SELECTION_REASON_CUSTOM_BASE: number;
					public static DEFAULT_BUFFER_SEGMENT_SIZE: number;
					public static CENC_TYPE_cenc: string;
					public static CENC_TYPE_cbc1: string;
					public static CENC_TYPE_cens: string;
					public static CENC_TYPE_cbcs: string;
					public static UUID_NIL: java.util.UUID;
					public static COMMON_PSSH_UUID: java.util.UUID;
					public static CLEARKEY_UUID: java.util.UUID;
					public static WIDEVINE_UUID: java.util.UUID;
					public static PLAYREADY_UUID: java.util.UUID;
					public static MSG_SET_SURFACE: number;
					public static MSG_SET_VOLUME: number;
					public static MSG_SET_AUDIO_ATTRIBUTES: number;
					public static MSG_SET_SCALING_MODE: number;
					public static MSG_SET_AUX_EFFECT_INFO: number;
					public static MSG_SET_VIDEO_FRAME_METADATA_LISTENER: number;
					public static MSG_SET_CAMERA_MOTION_LISTENER: number;
					public static MSG_SET_VIDEO_DECODER_OUTPUT_BUFFER_RENDERER: number;
					public static MSG_CUSTOM_BASE: number;
					public static STEREO_MODE_MONO: number;
					public static STEREO_MODE_TOP_BOTTOM: number;
					public static STEREO_MODE_LEFT_RIGHT: number;
					public static STEREO_MODE_STEREO_MESH: number;
					public static COLOR_SPACE_BT709: number;
					public static COLOR_SPACE_BT601: number;
					public static COLOR_SPACE_BT2020: number;
					public static COLOR_TRANSFER_SDR: number;
					public static COLOR_TRANSFER_ST2084: number;
					public static COLOR_TRANSFER_HLG: number;
					public static COLOR_RANGE_LIMITED: number;
					public static COLOR_RANGE_FULL: number;
					public static PROJECTION_RECTANGULAR: number;
					public static PROJECTION_EQUIRECTANGULAR: number;
					public static PROJECTION_CUBEMAP: number;
					public static PROJECTION_MESH: number;
					public static PRIORITY_PLAYBACK: number;
					public static PRIORITY_DOWNLOAD: number;
					public static NETWORK_TYPE_UNKNOWN: number;
					public static NETWORK_TYPE_OFFLINE: number;
					public static NETWORK_TYPE_WIFI: number;
					public static NETWORK_TYPE_2G: number;
					public static NETWORK_TYPE_3G: number;
					public static NETWORK_TYPE_4G: number;
					public static NETWORK_TYPE_5G: number;
					public static NETWORK_TYPE_CELLULAR_UNKNOWN: number;
					public static NETWORK_TYPE_ETHERNET: number;
					public static NETWORK_TYPE_OTHER: number;
					public static WAKE_MODE_NONE: number;
					public static WAKE_MODE_LOCAL: number;
					public static WAKE_MODE_NETWORK: number;
					public static ROLE_FLAG_MAIN: number;
					public static ROLE_FLAG_ALTERNATE: number;
					public static ROLE_FLAG_SUPPLEMENTARY: number;
					public static ROLE_FLAG_COMMENTARY: number;
					public static ROLE_FLAG_DUB: number;
					public static ROLE_FLAG_EMERGENCY: number;
					public static ROLE_FLAG_CAPTION: number;
					public static ROLE_FLAG_SUBTITLE: number;
					public static ROLE_FLAG_SIGN: number;
					public static ROLE_FLAG_DESCRIBES_VIDEO: number;
					public static ROLE_FLAG_DESCRIBES_MUSIC_AND_SOUND: number;
					public static ROLE_FLAG_ENHANCED_DIALOG_INTELLIGIBILITY: number;
					public static ROLE_FLAG_TRANSCRIBES_DIALOG: number;
					public static ROLE_FLAG_EASY_TO_READ: number;
					public static ROLE_FLAG_TRICK_PLAY: number;
					public static FORMAT_HANDLED: number;
					public static FORMAT_EXCEEDS_CAPABILITIES: number;
					public static FORMAT_UNSUPPORTED_DRM: number;
					public static FORMAT_UNSUPPORTED_SUBTYPE: number;
					public static FORMAT_UNSUPPORTED_TYPE: number;
					public static generateAudioSessionIdV21(context: globalAndroid.content.Context): number;
					public static msToUs(timeMs: number): number;
					public static usToMs(timeUs: number): number;
					public static getFormatSupportString(formatSupport: number): string;
				}
				export module C {
					export class AudioAllowedCapturePolicy extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<com.google.android.exoplayer2.C.AudioAllowedCapturePolicy>;
						/**
						 * Constructs a new instance of the com.google.android.exoplayer2.C() when extending the interface class.
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
					export class AudioContentType extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<com.google.android.exoplayer2.C.AudioContentType>;
						/**
						 * Constructs a new instance of the com.google.android.exoplayer2.C() when extending the interface class.
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
					export class AudioFlags extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<com.google.android.exoplayer2.C.AudioFlags>;
						/**
						 * Constructs a new instance of the com.google.android.exoplayer2.C() when extending the interface class.
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
					export class AudioFocusGain extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<com.google.android.exoplayer2.C.AudioFocusGain>;
						/**
						 * Constructs a new instance of the com.google.android.exoplayer2.C() when extending the interface class.
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
					export class AudioUsage extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<com.google.android.exoplayer2.C.AudioUsage>;
						/**
						 * Constructs a new instance of the com.google.android.exoplayer2.C() when extending the interface class.
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
					export class BufferFlags extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<com.google.android.exoplayer2.C.BufferFlags>;
						/**
						 * Constructs a new instance of the com.google.android.exoplayer2.C() when extending the interface class.
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
					export class ColorRange extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<com.google.android.exoplayer2.C.ColorRange>;
						/**
						 * Constructs a new instance of the com.google.android.exoplayer2.C() when extending the interface class.
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
					export class ColorSpace extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<com.google.android.exoplayer2.C.ColorSpace>;
						/**
						 * Constructs a new instance of the com.google.android.exoplayer2.C() when extending the interface class.
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
					export class ColorTransfer extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<com.google.android.exoplayer2.C.ColorTransfer>;
						/**
						 * Constructs a new instance of the com.google.android.exoplayer2.C() when extending the interface class.
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
					export class ContentType extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<com.google.android.exoplayer2.C.ContentType>;
						/**
						 * Constructs a new instance of the com.google.android.exoplayer2.C() when extending the interface class.
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
					export class CryptoMode extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<com.google.android.exoplayer2.C.CryptoMode>;
						/**
						 * Constructs a new instance of the com.google.android.exoplayer2.C() when extending the interface class.
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
					export class Encoding extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<com.google.android.exoplayer2.C.Encoding>;
						/**
						 * Constructs a new instance of the com.google.android.exoplayer2.C() when extending the interface class.
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
					export class FormatSupport extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<com.google.android.exoplayer2.C.FormatSupport>;
						/**
						 * Constructs a new instance of the com.google.android.exoplayer2.C() when extending the interface class.
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
					export class NetworkType extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<com.google.android.exoplayer2.C.NetworkType>;
						/**
						 * Constructs a new instance of the com.google.android.exoplayer2.C() when extending the interface class.
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
					export class PcmEncoding extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<com.google.android.exoplayer2.C.PcmEncoding>;
						/**
						 * Constructs a new instance of the com.google.android.exoplayer2.C() when extending the interface class.
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
					export class Projection extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<com.google.android.exoplayer2.C.Projection>;
						/**
						 * Constructs a new instance of the com.google.android.exoplayer2.C() when extending the interface class.
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
					export class RoleFlags extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<com.google.android.exoplayer2.C.RoleFlags>;
						/**
						 * Constructs a new instance of the com.google.android.exoplayer2.C() when extending the interface class.
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
					export class SelectionFlags extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<com.google.android.exoplayer2.C.SelectionFlags>;
						/**
						 * Constructs a new instance of the com.google.android.exoplayer2.C() when extending the interface class.
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
					export class StereoMode extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<com.google.android.exoplayer2.C.StereoMode>;
						/**
						 * Constructs a new instance of the com.google.android.exoplayer2.C() when extending the interface class.
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
					export class StreamType extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<com.google.android.exoplayer2.C.StreamType>;
						/**
						 * Constructs a new instance of the com.google.android.exoplayer2.C() when extending the interface class.
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
					export class VideoOutputMode extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<com.google.android.exoplayer2.C.VideoOutputMode>;
						/**
						 * Constructs a new instance of the com.google.android.exoplayer2.C() when extending the interface class.
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
					export class VideoScalingMode extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<com.google.android.exoplayer2.C.VideoScalingMode>;
						/**
						 * Constructs a new instance of the com.google.android.exoplayer2.C() when extending the interface class.
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
					export class WakeMode extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<com.google.android.exoplayer2.C.WakeMode>;
						/**
						 * Constructs a new instance of the com.google.android.exoplayer2.C() when extending the interface class.
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
	export module google {
		export module android {
			export module exoplayer2 {
				export class ExoPlaybackException extends java.lang.Exception {
					public static class: java.lang.Class<com.google.android.exoplayer2.ExoPlaybackException>;
					public static TYPE_SOURCE: number;
					public static TYPE_RENDERER: number;
					public static TYPE_UNEXPECTED: number;
					public static TYPE_REMOTE: number;
					public type: number;
					public rendererName: string;
					public rendererIndex: number;
					public rendererFormat: com.google.android.exoplayer2.Format;
					public rendererFormatSupport: number;
					public timestampMs: number;
					public mediaPeriodId: com.google.android.exoplayer2.source.MediaPeriodId;
					public static createForUnexpected(cause: java.lang.RuntimeException): com.google.android.exoplayer2.ExoPlaybackException;
					public getSourceException(): java.io.IOException;
					public static createForRenderer(cause: java.lang.Throwable, rendererName: string, rendererIndex: number, rendererFormat: com.google.android.exoplayer2.Format, rendererFormatSupport: number): com.google.android.exoplayer2.ExoPlaybackException;
					public static createForSource(cause: java.io.IOException): com.google.android.exoplayer2.ExoPlaybackException;
					public static createForRenderer(cause: java.lang.Exception): com.google.android.exoplayer2.ExoPlaybackException;
					public getRendererException(): java.lang.Exception;
					public getUnexpectedException(): java.lang.RuntimeException;
					public static createForRenderer(cause: java.lang.Throwable, rendererName: string, rendererIndex: number, rendererFormat: com.google.android.exoplayer2.Format, rendererFormatSupport: number, isRecoverable: boolean): com.google.android.exoplayer2.ExoPlaybackException;
					public static createForRemote(message: string): com.google.android.exoplayer2.ExoPlaybackException;
				}
				export module ExoPlaybackException {
					export class Type extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<com.google.android.exoplayer2.ExoPlaybackException.Type>;
						/**
						 * Constructs a new instance of the com.google.android.exoplayer2.ExoPlaybackException() when extending the interface class.
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
	export module google {
		export module android {
			export module exoplayer2 {
				export class ExoPlayerLibraryInfo extends java.lang.Object {
					public static class: java.lang.Class<com.google.android.exoplayer2.ExoPlayerLibraryInfo>;
					public static TAG: string;
					public static VERSION: string;
					public static VERSION_SLASHY: string;
					public static VERSION_INT: number;
					public static DEFAULT_USER_AGENT: string;
					public static ASSERTIONS_ENABLED: boolean;
					public static GL_ASSERTIONS_ENABLED: boolean;
					public static TRACE_ENABLED: boolean;
					public static registeredModules(): string;
					public static registerModule(name: string): void;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module exoplayer2 {
				export class Format extends java.lang.Object implements globalAndroid.os.Parcelable {
					public static class: java.lang.Class<com.google.android.exoplayer2.Format>;
					public static NO_VALUE: number;
					public static OFFSET_SAMPLE_RELATIVE: number;
					public id: string;
					public label: string;
					public language: string;
					public selectionFlags: number;
					public roleFlags: number;
					public averageBitrate: number;
					public peakBitrate: number;
					public bitrate: number;
					public codecs: string;
					public metadata: com.google.android.exoplayer2.metadata.Metadata;
					public containerMimeType: string;
					public sampleMimeType: string;
					public maxInputSize: number;
					public initializationData: java.util.List<native.Array<number>>;
					public drmInitData: com.google.android.exoplayer2.drm.DrmInitData;
					public subsampleOffsetUs: number;
					public width: number;
					public height: number;
					public frameRate: number;
					public rotationDegrees: number;
					public pixelWidthHeightRatio: number;
					public projectionData: native.Array<number>;
					public stereoMode: number;
					public colorInfo: com.google.android.exoplayer2.video.ColorInfo;
					public channelCount: number;
					public sampleRate: number;
					public pcmEncoding: number;
					public encoderDelay: number;
					public encoderPadding: number;
					public accessibilityChannel: number;
					public exoMediaCryptoType: java.lang.Class<any>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.exoplayer2.Format>;
					public equals(obj: any): boolean;
					/** @deprecated */
					public copyWithManifestFormatInfo(manifestFormat: com.google.android.exoplayer2.Format): com.google.android.exoplayer2.Format;
					/** @deprecated */
					public static createSampleFormat(id: string, sampleMimeType: string): com.google.android.exoplayer2.Format;
					public static toLogString(format: com.google.android.exoplayer2.Format): string;
					/** @deprecated */
					public copyWithMaxInputSize(maxInputSize: number): com.google.android.exoplayer2.Format;
					/** @deprecated */
					public copyWithVideoSize(width: number, height: number): com.google.android.exoplayer2.Format;
					/** @deprecated */
					public copyWithFrameRate(frameRate: number): com.google.android.exoplayer2.Format;
					/** @deprecated */
					public static createAudioSampleFormat(id: string, sampleMimeType: string, codecs: string, bitrate: number, maxInputSize: number, channelCount: number, sampleRate: number, initializationData: java.util.List<native.Array<number>>, drmInitData: com.google.android.exoplayer2.drm.DrmInitData, selectionFlags: number, language: string): com.google.android.exoplayer2.Format;
					/** @deprecated */
					public static createTextContainerFormat(id: string, label: string, containerMimeType: string, sampleMimeType: string, codecs: string, bitrate: number, selectionFlags: number, roleFlags: number, language: string, accessibilityChannel: number): com.google.android.exoplayer2.Format;
					/** @deprecated */
					public copyWithBitrate(bitrate: number): com.google.android.exoplayer2.Format;
					/** @deprecated */
					public static createTextSampleFormat(id: string, sampleMimeType: string, selectionFlags: number, language: string, accessibilityChannel: number, subsampleOffsetUs: number, initializationData: java.util.List<native.Array<number>>): com.google.android.exoplayer2.Format;
					public copyWithExoMediaCryptoType(exoMediaCryptoType: java.lang.Class<any>): com.google.android.exoplayer2.Format;
					public toString(): string;
					/** @deprecated */
					public copyWithLabel(label: string): com.google.android.exoplayer2.Format;
					/** @deprecated */
					public static createAudioContainerFormat(id: string, label: string, containerMimeType: string, sampleMimeType: string, codecs: string, metadata: com.google.android.exoplayer2.metadata.Metadata, bitrate: number, channelCount: number, sampleRate: number, initializationData: java.util.List<native.Array<number>>, selectionFlags: number, roleFlags: number, language: string): com.google.android.exoplayer2.Format;
					public hashCode(): number;
					public buildUpon(): com.google.android.exoplayer2.Format.Builder;
					/** @deprecated */
					public static createVideoSampleFormat(id: string, sampleMimeType: string, codecs: string, bitrate: number, maxInputSize: number, width: number, height: number, frameRate: number, initializationData: java.util.List<native.Array<number>>, rotationDegrees: number, pixelWidthHeightRatio: number, projectionData: native.Array<number>, stereoMode: number, colorInfo: com.google.android.exoplayer2.video.ColorInfo, drmInitData: com.google.android.exoplayer2.drm.DrmInitData): com.google.android.exoplayer2.Format;
					/** @deprecated */
					public static createAudioSampleFormat(id: string, sampleMimeType: string, codecs: string, bitrate: number, maxInputSize: number, channelCount: number, sampleRate: number, pcmEncoding: number, encoderDelay: number, encoderPadding: number, initializationData: java.util.List<native.Array<number>>, drmInitData: com.google.android.exoplayer2.drm.DrmInitData, selectionFlags: number, language: string, metadata: com.google.android.exoplayer2.metadata.Metadata): com.google.android.exoplayer2.Format;
					/** @deprecated */
					public copyWithSubsampleOffsetUs(subsampleOffsetUs: number): com.google.android.exoplayer2.Format;
					public initializationDataEquals(other: com.google.android.exoplayer2.Format): boolean;
					public describeContents(): number;
					/** @deprecated */
					public static createAudioSampleFormat(id: string, sampleMimeType: string, codecs: string, bitrate: number, maxInputSize: number, channelCount: number, sampleRate: number, pcmEncoding: number, initializationData: java.util.List<native.Array<number>>, drmInitData: com.google.android.exoplayer2.drm.DrmInitData, selectionFlags: number, language: string): com.google.android.exoplayer2.Format;
					/** @deprecated */
					public static createImageSampleFormat(id: string, sampleMimeType: string, selectionFlags: number, initializationData: java.util.List<native.Array<number>>, language: string): com.google.android.exoplayer2.Format;
					/** @deprecated */
					public copyWithDrmInitData(drmInitData: com.google.android.exoplayer2.drm.DrmInitData): com.google.android.exoplayer2.Format;
					/** @deprecated */
					public static createTextContainerFormat(id: string, label: string, containerMimeType: string, sampleMimeType: string, codecs: string, bitrate: number, selectionFlags: number, roleFlags: number, language: string): com.google.android.exoplayer2.Format;
					/** @deprecated */
					public static createVideoContainerFormat(id: string, label: string, containerMimeType: string, sampleMimeType: string, codecs: string, metadata: com.google.android.exoplayer2.metadata.Metadata, bitrate: number, width: number, height: number, frameRate: number, initializationData: java.util.List<native.Array<number>>, selectionFlags: number, roleFlags: number): com.google.android.exoplayer2.Format;
					/** @deprecated */
					public static createVideoSampleFormat(id: string, sampleMimeType: string, codecs: string, bitrate: number, maxInputSize: number, width: number, height: number, frameRate: number, initializationData: java.util.List<native.Array<number>>, rotationDegrees: number, pixelWidthHeightRatio: number, drmInitData: com.google.android.exoplayer2.drm.DrmInitData): com.google.android.exoplayer2.Format;
					/** @deprecated */
					public copyWithMetadata(metadata: com.google.android.exoplayer2.metadata.Metadata): com.google.android.exoplayer2.Format;
					/** @deprecated */
					public static createVideoSampleFormat(id: string, sampleMimeType: string, codecs: string, bitrate: number, maxInputSize: number, width: number, height: number, frameRate: number, initializationData: java.util.List<native.Array<number>>, drmInitData: com.google.android.exoplayer2.drm.DrmInitData): com.google.android.exoplayer2.Format;
					public writeToParcel(dest: globalAndroid.os.Parcel, flags: number): void;
					/** @deprecated */
					public static createContainerFormat(id: string, label: string, containerMimeType: string, sampleMimeType: string, codecs: string, bitrate: number, selectionFlags: number, roleFlags: number, language: string): com.google.android.exoplayer2.Format;
					public withManifestFormatInfo(manifestFormat: com.google.android.exoplayer2.Format): com.google.android.exoplayer2.Format;
					/** @deprecated */
					public static createTextSampleFormat(id: string, sampleMimeType: string, selectionFlags: number, language: string): com.google.android.exoplayer2.Format;
					public getPixelCount(): number;
					/** @deprecated */
					public copyWithGaplessInfo(encoderDelay: number, encoderPadding: number): com.google.android.exoplayer2.Format;
				}
				export module Format {
					export class Builder extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.Format.Builder>;
						public setMaxInputSize(maxInputSize: number): com.google.android.exoplayer2.Format.Builder;
						public setAverageBitrate(averageBitrate: number): com.google.android.exoplayer2.Format.Builder;
						public setId(id: string): com.google.android.exoplayer2.Format.Builder;
						public setWidth(width: number): com.google.android.exoplayer2.Format.Builder;
						public setMetadata(metadata: com.google.android.exoplayer2.metadata.Metadata): com.google.android.exoplayer2.Format.Builder;
						public setRoleFlags(roleFlags: number): com.google.android.exoplayer2.Format.Builder;
						public setContainerMimeType(containerMimeType: string): com.google.android.exoplayer2.Format.Builder;
						public setSelectionFlags(selectionFlags: number): com.google.android.exoplayer2.Format.Builder;
						public setLabel(label: string): com.google.android.exoplayer2.Format.Builder;
						public setFrameRate(frameRate: number): com.google.android.exoplayer2.Format.Builder;
						public setEncoderPadding(encoderPadding: number): com.google.android.exoplayer2.Format.Builder;
						public setSubsampleOffsetUs(subsampleOffsetUs: number): com.google.android.exoplayer2.Format.Builder;
						public setEncoderDelay(encoderDelay: number): com.google.android.exoplayer2.Format.Builder;
						public setColorInfo(colorInfo: com.google.android.exoplayer2.video.ColorInfo): com.google.android.exoplayer2.Format.Builder;
						public setPixelWidthHeightRatio(pixelWidthHeightRatio: number): com.google.android.exoplayer2.Format.Builder;
						public setRotationDegrees(rotationDegrees: number): com.google.android.exoplayer2.Format.Builder;
						public setProjectionData(projectionData: native.Array<number>): com.google.android.exoplayer2.Format.Builder;
						public setPeakBitrate(peakBitrate: number): com.google.android.exoplayer2.Format.Builder;
						public setStereoMode(stereoMode: number): com.google.android.exoplayer2.Format.Builder;
						public constructor();
						public setSampleMimeType(sampleMimeType: string): com.google.android.exoplayer2.Format.Builder;
						public setId(id: number): com.google.android.exoplayer2.Format.Builder;
						public setAccessibilityChannel(accessibilityChannel: number): com.google.android.exoplayer2.Format.Builder;
						public setExoMediaCryptoType(exoMediaCryptoType: java.lang.Class<any>): com.google.android.exoplayer2.Format.Builder;
						public setHeight(height: number): com.google.android.exoplayer2.Format.Builder;
						public setSampleRate(sampleRate: number): com.google.android.exoplayer2.Format.Builder;
						public build(): com.google.android.exoplayer2.Format;
						public setLanguage(language: string): com.google.android.exoplayer2.Format.Builder;
						public setCodecs(codecs: string): com.google.android.exoplayer2.Format.Builder;
						public setDrmInitData(drmInitData: com.google.android.exoplayer2.drm.DrmInitData): com.google.android.exoplayer2.Format.Builder;
						public setPcmEncoding(pcmEncoding: number): com.google.android.exoplayer2.Format.Builder;
						public setChannelCount(channelCount: number): com.google.android.exoplayer2.Format.Builder;
						public setInitializationData(initializationData: java.util.List<native.Array<number>>): com.google.android.exoplayer2.Format.Builder;
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
				export class IllegalSeekPositionException extends java.lang.IllegalStateException {
					public static class: java.lang.Class<com.google.android.exoplayer2.IllegalSeekPositionException>;
					public timeline: com.google.android.exoplayer2.Timeline;
					public windowIndex: number;
					public positionMs: number;
					public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
					public constructor();
					public constructor(s: string);
					public constructor(cause: java.lang.Throwable);
					public constructor(timeline: com.google.android.exoplayer2.Timeline, windowIndex: number, positionMs: number);
					public constructor(message: string, cause: java.lang.Throwable);
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module exoplayer2 {
				export class MediaItem extends java.lang.Object {
					public static class: java.lang.Class<com.google.android.exoplayer2.MediaItem>;
					public mediaId: string;
					public playbackProperties: com.google.android.exoplayer2.MediaItem.PlaybackProperties;
					public liveConfiguration: com.google.android.exoplayer2.MediaItem.LiveConfiguration;
					public mediaMetadata: com.google.android.exoplayer2.MediaMetadata;
					public clippingProperties: com.google.android.exoplayer2.MediaItem.ClippingProperties;
					public equals(obj: any): boolean;
					public static fromUri(uri: globalAndroid.net.Uri): com.google.android.exoplayer2.MediaItem;
					public buildUpon(): com.google.android.exoplayer2.MediaItem.Builder;
					public hashCode(): number;
					public static fromUri(uri: string): com.google.android.exoplayer2.MediaItem;
				}
				export module MediaItem {
					export class AdsConfiguration extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.MediaItem.AdsConfiguration>;
						public adTagUri: globalAndroid.net.Uri;
						public adsId: any;
						public equals(obj: any): boolean;
						public hashCode(): number;
					}
					export class Builder extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.MediaItem.Builder>;
						public setLiveMaxPlaybackSpeed(maxPlaybackSpeed: number): com.google.android.exoplayer2.MediaItem.Builder;
						public setLiveMaxOffsetMs(liveMaxOffsetMs: number): com.google.android.exoplayer2.MediaItem.Builder;
						public setLiveTargetOffsetMs(liveTargetOffsetMs: number): com.google.android.exoplayer2.MediaItem.Builder;
						public setDrmMultiSession(multiSession: boolean): com.google.android.exoplayer2.MediaItem.Builder;
						public setLiveMinPlaybackSpeed(minPlaybackSpeed: number): com.google.android.exoplayer2.MediaItem.Builder;
						public setAdTagUri(adTagUri: globalAndroid.net.Uri): com.google.android.exoplayer2.MediaItem.Builder;
						public setAdTagUri(adTagUri: globalAndroid.net.Uri, adsId: any): com.google.android.exoplayer2.MediaItem.Builder;
						public setUri(uri: string): com.google.android.exoplayer2.MediaItem.Builder;
						public setDrmForceDefaultLicenseUri(forceDefaultLicenseUri: boolean): com.google.android.exoplayer2.MediaItem.Builder;
						public setMediaId(mediaId: string): com.google.android.exoplayer2.MediaItem.Builder;
						public setDrmKeySetId(keySetId: native.Array<number>): com.google.android.exoplayer2.MediaItem.Builder;
						public setStreamKeys(streamKeys: java.util.List<com.google.android.exoplayer2.offline.StreamKey>): com.google.android.exoplayer2.MediaItem.Builder;
						public constructor();
						public setDrmLicenseRequestHeaders(licenseRequestHeaders: java.util.Map<string,string>): com.google.android.exoplayer2.MediaItem.Builder;
						public setClipRelativeToDefaultPosition(relativeToDefaultPosition: boolean): com.google.android.exoplayer2.MediaItem.Builder;
						public setDrmLicenseUri(licenseUri: string): com.google.android.exoplayer2.MediaItem.Builder;
						public setDrmSessionForClearTypes(sessionForClearTypes: java.util.List<java.lang.Integer>): com.google.android.exoplayer2.MediaItem.Builder;
						public setCustomCacheKey(customCacheKey: string): com.google.android.exoplayer2.MediaItem.Builder;
						public setAdTagUri(adTagUri: string): com.google.android.exoplayer2.MediaItem.Builder;
						public setMediaMetadata(mediaMetadata: com.google.android.exoplayer2.MediaMetadata): com.google.android.exoplayer2.MediaItem.Builder;
						public setClipEndPositionMs(endPositionMs: number): com.google.android.exoplayer2.MediaItem.Builder;
						public setClipRelativeToLiveWindow(relativeToLiveWindow: boolean): com.google.android.exoplayer2.MediaItem.Builder;
						public setDrmUuid(uuid: java.util.UUID): com.google.android.exoplayer2.MediaItem.Builder;
						public setMimeType(mimeType: string): com.google.android.exoplayer2.MediaItem.Builder;
						public setDrmPlayClearContentWithoutKey(playClearContentWithoutKey: boolean): com.google.android.exoplayer2.MediaItem.Builder;
						public setUri(uri: globalAndroid.net.Uri): com.google.android.exoplayer2.MediaItem.Builder;
						public setLiveMinOffsetMs(liveMinOffsetMs: number): com.google.android.exoplayer2.MediaItem.Builder;
						public setTag(tag: any): com.google.android.exoplayer2.MediaItem.Builder;
						public build(): com.google.android.exoplayer2.MediaItem;
						public setClipStartPositionMs(startPositionMs: number): com.google.android.exoplayer2.MediaItem.Builder;
						public setDrmLicenseUri(licenseUri: globalAndroid.net.Uri): com.google.android.exoplayer2.MediaItem.Builder;
						public setSubtitles(subtitles: java.util.List<com.google.android.exoplayer2.MediaItem.Subtitle>): com.google.android.exoplayer2.MediaItem.Builder;
						public setDrmSessionForClearPeriods(sessionForClearPeriods: boolean): com.google.android.exoplayer2.MediaItem.Builder;
						public setClipStartsAtKeyFrame(startsAtKeyFrame: boolean): com.google.android.exoplayer2.MediaItem.Builder;
					}
					export class ClippingProperties extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.MediaItem.ClippingProperties>;
						public startPositionMs: number;
						public endPositionMs: number;
						public relativeToLiveWindow: boolean;
						public relativeToDefaultPosition: boolean;
						public startsAtKeyFrame: boolean;
						public equals(obj: any): boolean;
						public hashCode(): number;
					}
					export class DrmConfiguration extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.MediaItem.DrmConfiguration>;
						public uuid: java.util.UUID;
						public licenseUri: globalAndroid.net.Uri;
						public requestHeaders: java.util.Map<string,string>;
						public multiSession: boolean;
						public playClearContentWithoutKey: boolean;
						public forceDefaultLicenseUri: boolean;
						public sessionForClearTypes: java.util.List<java.lang.Integer>;
						public equals(obj: any): boolean;
						public hashCode(): number;
						public getKeySetId(): native.Array<number>;
					}
					export class LiveConfiguration extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.MediaItem.LiveConfiguration>;
						public static UNSET: com.google.android.exoplayer2.MediaItem.LiveConfiguration;
						public targetOffsetMs: number;
						public minOffsetMs: number;
						public maxOffsetMs: number;
						public minPlaybackSpeed: number;
						public maxPlaybackSpeed: number;
						public constructor(targetOffsetMs: number, minOffsetMs: number, maxOffsetMs: number, minPlaybackSpeed: number, maxPlaybackSpeed: number);
						public equals(obj: any): boolean;
						public hashCode(): number;
					}
					export class PlaybackProperties extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.MediaItem.PlaybackProperties>;
						public uri: globalAndroid.net.Uri;
						public mimeType: string;
						public drmConfiguration: com.google.android.exoplayer2.MediaItem.DrmConfiguration;
						public adsConfiguration: com.google.android.exoplayer2.MediaItem.AdsConfiguration;
						public streamKeys: java.util.List<com.google.android.exoplayer2.offline.StreamKey>;
						public customCacheKey: string;
						public subtitles: java.util.List<com.google.android.exoplayer2.MediaItem.Subtitle>;
						public tag: any;
						public equals(obj: any): boolean;
						public hashCode(): number;
					}
					export class Subtitle extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.MediaItem.Subtitle>;
						public uri: globalAndroid.net.Uri;
						public mimeType: string;
						public language: string;
						public selectionFlags: number;
						public roleFlags: number;
						public label: string;
						public equals(obj: any): boolean;
						public constructor(uri: globalAndroid.net.Uri, mimeType: string, language: string);
						public constructor(uri: globalAndroid.net.Uri, mimeType: string, language: string, selectionFlags: number, roleFlags: number, label: string);
						public constructor(uri: globalAndroid.net.Uri, mimeType: string, language: string, selectionFlags: number);
						public hashCode(): number;
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
				export class MediaMetadata extends java.lang.Object {
					public static class: java.lang.Class<com.google.android.exoplayer2.MediaMetadata>;
					public title: string;
					public equals(obj: any): boolean;
					public hashCode(): number;
				}
				export module MediaMetadata {
					export class Builder extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.MediaMetadata.Builder>;
						public constructor();
						public build(): com.google.android.exoplayer2.MediaMetadata;
						public setTitle(title: string): com.google.android.exoplayer2.MediaMetadata.Builder;
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
				export class ParserException extends java.io.IOException {
					public static class: java.lang.Class<com.google.android.exoplayer2.ParserException>;
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
	export module google {
		export module android {
			export module exoplayer2 {
				export class PlaybackParameters extends java.lang.Object {
					public static class: java.lang.Class<com.google.android.exoplayer2.PlaybackParameters>;
					public static DEFAULT: com.google.android.exoplayer2.PlaybackParameters;
					public speed: number;
					public pitch: number;
					public constructor(speed: number);
					public equals(obj: any): boolean;
					public toString(): string;
					public getMediaTimeUsForPlayoutTimeMs(timeMs: number): number;
					public hashCode(): number;
					public constructor(speed: number, pitch: number);
					public withSpeed(speed: number): com.google.android.exoplayer2.PlaybackParameters;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module exoplayer2 {
				export class Player extends java.lang.Object {
					public static class: java.lang.Class<com.google.android.exoplayer2.Player>;
					/**
					 * Constructs a new instance of the com.google.android.exoplayer2.Player interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getAudioComponent(): com.google.android.exoplayer2.Player.AudioComponent;
						getVideoComponent(): com.google.android.exoplayer2.Player.VideoComponent;
						getTextComponent(): com.google.android.exoplayer2.Player.TextComponent;
						getMetadataComponent(): com.google.android.exoplayer2.Player.MetadataComponent;
						getDeviceComponent(): com.google.android.exoplayer2.Player.DeviceComponent;
						getApplicationLooper(): globalAndroid.os.Looper;
						addListener(eventListener0: com.google.android.exoplayer2.Player.EventListener): void;
						removeListener(eventListener0: com.google.android.exoplayer2.Player.EventListener): void;
						setMediaItems(list0: java.util.List<com.google.android.exoplayer2.MediaItem>): void;
						setMediaItems(list0: java.util.List<com.google.android.exoplayer2.MediaItem>, boolean1: boolean): void;
						setMediaItems(list0: java.util.List<com.google.android.exoplayer2.MediaItem>, int1: number, long2: number): void;
						setMediaItem(mediaItem0: com.google.android.exoplayer2.MediaItem): void;
						setMediaItem(mediaItem0: com.google.android.exoplayer2.MediaItem, long1: number): void;
						setMediaItem(mediaItem0: com.google.android.exoplayer2.MediaItem, boolean1: boolean): void;
						addMediaItem(mediaItem0: com.google.android.exoplayer2.MediaItem): void;
						addMediaItem(int0: number, mediaItem1: com.google.android.exoplayer2.MediaItem): void;
						addMediaItems(list0: java.util.List<com.google.android.exoplayer2.MediaItem>): void;
						addMediaItems(int0: number, list1: java.util.List<com.google.android.exoplayer2.MediaItem>): void;
						moveMediaItem(int0: number, int1: number): void;
						moveMediaItems(int0: number, int1: number, int2: number): void;
						removeMediaItem(int0: number): void;
						removeMediaItems(int0: number, int1: number): void;
						clearMediaItems(): void;
						prepare(): void;
						getPlaybackState(): number;
						getPlaybackSuppressionReason(): number;
						isPlaying(): boolean;
						getPlayerError(): com.google.android.exoplayer2.ExoPlaybackException;
						getPlaybackError(): com.google.android.exoplayer2.ExoPlaybackException;
						play(): void;
						pause(): void;
						setPlayWhenReady(boolean0: boolean): void;
						getPlayWhenReady(): boolean;
						setRepeatMode(int0: number): void;
						getRepeatMode(): number;
						setShuffleModeEnabled(boolean0: boolean): void;
						getShuffleModeEnabled(): boolean;
						isLoading(): boolean;
						seekToDefaultPosition(): void;
						seekToDefaultPosition(int0: number): void;
						seekTo(long0: number): void;
						seekTo(int0: number, long1: number): void;
						hasPrevious(): boolean;
						previous(): void;
						hasNext(): boolean;
						next(): void;
						setPlaybackParameters(playbackParameters0: com.google.android.exoplayer2.PlaybackParameters): void;
						getPlaybackParameters(): com.google.android.exoplayer2.PlaybackParameters;
						stop(): void;
						stop(boolean0: boolean): void;
						release(): void;
						getRendererCount(): number;
						getRendererType(int0: number): number;
						getCurrentTrackGroups(): com.google.android.exoplayer2.source.TrackGroupArray;
						getCurrentTrackSelections(): com.google.android.exoplayer2.trackselection.TrackSelectionArray;
						getCurrentStaticMetadata(): java.util.List<com.google.android.exoplayer2.metadata.Metadata>;
						getCurrentManifest(): any;
						getCurrentTimeline(): com.google.android.exoplayer2.Timeline;
						getCurrentPeriodIndex(): number;
						getCurrentWindowIndex(): number;
						getNextWindowIndex(): number;
						getPreviousWindowIndex(): number;
						getCurrentTag(): any;
						getCurrentMediaItem(): com.google.android.exoplayer2.MediaItem;
						getMediaItemCount(): number;
						getMediaItemAt(int0: number): com.google.android.exoplayer2.MediaItem;
						getDuration(): number;
						getCurrentPosition(): number;
						getBufferedPosition(): number;
						getBufferedPercentage(): number;
						getTotalBufferedDuration(): number;
						isCurrentWindowDynamic(): boolean;
						isCurrentWindowLive(): boolean;
						getCurrentLiveOffset(): number;
						isCurrentWindowSeekable(): boolean;
						isPlayingAd(): boolean;
						getCurrentAdGroupIndex(): number;
						getCurrentAdIndexInAdGroup(): number;
						getContentDuration(): number;
						getContentPosition(): number;
						getContentBufferedPosition(): number;
					});
					public constructor();
					public static DISCONTINUITY_REASON_AD_INSERTION: number;
					public static PLAY_WHEN_READY_CHANGE_REASON_USER_REQUEST: number;
					public static TIMELINE_CHANGE_REASON_PLAYLIST_CHANGED: number;
					public static EVENT_PLAYBACK_SUPPRESSION_REASON_CHANGED: number;
					public static PLAYBACK_SUPPRESSION_REASON_NONE: number;
					public static EVENT_PLAY_WHEN_READY_CHANGED: number;
					public static EVENT_POSITION_DISCONTINUITY: number;
					public static EVENT_TRACKS_CHANGED: number;
					public static EVENT_TIMELINE_CHANGED: number;
					public static EVENT_SHUFFLE_MODE_ENABLED_CHANGED: number;
					public static PLAY_WHEN_READY_CHANGE_REASON_END_OF_MEDIA_ITEM: number;
					public static TIMELINE_CHANGE_REASON_SOURCE_UPDATE: number;
					public static EVENT_MEDIA_ITEM_TRANSITION: number;
					public static DISCONTINUITY_REASON_INTERNAL: number;
					public static EVENT_IS_LOADING_CHANGED: number;
					public static STATE_ENDED: number;
					public static EVENT_PLAYBACK_STATE_CHANGED: number;
					public static EVENT_STATIC_METADATA_CHANGED: number;
					public static PLAY_WHEN_READY_CHANGE_REASON_REMOTE: number;
					public static STATE_BUFFERING: number;
					public static DISCONTINUITY_REASON_PERIOD_TRANSITION: number;
					public static EVENT_PLAYBACK_PARAMETERS_CHANGED: number;
					public static PLAYBACK_SUPPRESSION_REASON_TRANSIENT_AUDIO_FOCUS_LOSS: number;
					public static DISCONTINUITY_REASON_SEEK_ADJUSTMENT: number;
					public static PLAY_WHEN_READY_CHANGE_REASON_AUDIO_FOCUS_LOSS: number;
					public static REPEAT_MODE_OFF: number;
					public static PLAY_WHEN_READY_CHANGE_REASON_AUDIO_BECOMING_NOISY: number;
					public static STATE_READY: number;
					public static DISCONTINUITY_REASON_SEEK: number;
					public static EVENT_PLAYER_ERROR: number;
					public static MEDIA_ITEM_TRANSITION_REASON_REPEAT: number;
					public static MEDIA_ITEM_TRANSITION_REASON_PLAYLIST_CHANGED: number;
					public static EVENT_REPEAT_MODE_CHANGED: number;
					public static REPEAT_MODE_ALL: number;
					public static STATE_IDLE: number;
					public static REPEAT_MODE_ONE: number;
					public static EVENT_IS_PLAYING_CHANGED: number;
					public static MEDIA_ITEM_TRANSITION_REASON_SEEK: number;
					public static MEDIA_ITEM_TRANSITION_REASON_AUTO: number;
					public getPlayWhenReady(): boolean;
					public getRendererCount(): number;
					public isCurrentWindowDynamic(): boolean;
					public setShuffleModeEnabled(boolean0: boolean): void;
					public setPlayWhenReady(boolean0: boolean): void;
					/** @deprecated */
					public getPlaybackError(): com.google.android.exoplayer2.ExoPlaybackException;
					public removeMediaItem(int0: number): void;
					public setMediaItem(mediaItem0: com.google.android.exoplayer2.MediaItem): void;
					public hasNext(): boolean;
					public seekTo(long0: number): void;
					/** @deprecated */
					public getCurrentTag(): any;
					public getContentPosition(): number;
					public pause(): void;
					public getDeviceComponent(): com.google.android.exoplayer2.Player.DeviceComponent;
					public clearMediaItems(): void;
					public getPlaybackSuppressionReason(): number;
					public getCurrentAdGroupIndex(): number;
					public getCurrentPeriodIndex(): number;
					public addMediaItem(mediaItem0: com.google.android.exoplayer2.MediaItem): void;
					public prepare(): void;
					public getMetadataComponent(): com.google.android.exoplayer2.Player.MetadataComponent;
					public removeListener(eventListener0: com.google.android.exoplayer2.Player.EventListener): void;
					public next(): void;
					public getPlaybackParameters(): com.google.android.exoplayer2.PlaybackParameters;
					public getShuffleModeEnabled(): boolean;
					public getCurrentWindowIndex(): number;
					public previous(): void;
					public getRendererType(int0: number): number;
					public seekTo(int0: number, long1: number): void;
					public release(): void;
					public moveMediaItem(int0: number, int1: number): void;
					public getCurrentAdIndexInAdGroup(): number;
					public getAudioComponent(): com.google.android.exoplayer2.Player.AudioComponent;
					public getPreviousWindowIndex(): number;
					public isCurrentWindowSeekable(): boolean;
					public getCurrentLiveOffset(): number;
					public getPlayerError(): com.google.android.exoplayer2.ExoPlaybackException;
					public getContentBufferedPosition(): number;
					public stop(): void;
					public setRepeatMode(int0: number): void;
					public play(): void;
					public getPlaybackState(): number;
					public getCurrentTimeline(): com.google.android.exoplayer2.Timeline;
					public isLoading(): boolean;
					/** @deprecated */
					public stop(boolean0: boolean): void;
					public getRepeatMode(): number;
					public setMediaItem(mediaItem0: com.google.android.exoplayer2.MediaItem, boolean1: boolean): void;
					public addListener(eventListener0: com.google.android.exoplayer2.Player.EventListener): void;
					public getApplicationLooper(): globalAndroid.os.Looper;
					public getTextComponent(): com.google.android.exoplayer2.Player.TextComponent;
					public getDuration(): number;
					public getMediaItemAt(int0: number): com.google.android.exoplayer2.MediaItem;
					public isPlaying(): boolean;
					public hasPrevious(): boolean;
					public setMediaItems(list0: java.util.List<com.google.android.exoplayer2.MediaItem>, int1: number, long2: number): void;
					public getCurrentStaticMetadata(): java.util.List<com.google.android.exoplayer2.metadata.Metadata>;
					public getCurrentPosition(): number;
					public getCurrentTrackSelections(): com.google.android.exoplayer2.trackselection.TrackSelectionArray;
					public setPlaybackParameters(playbackParameters0: com.google.android.exoplayer2.PlaybackParameters): void;
					public removeMediaItems(int0: number, int1: number): void;
					public getNextWindowIndex(): number;
					public getCurrentMediaItem(): com.google.android.exoplayer2.MediaItem;
					public getMediaItemCount(): number;
					public moveMediaItems(int0: number, int1: number, int2: number): void;
					public getVideoComponent(): com.google.android.exoplayer2.Player.VideoComponent;
					public setMediaItems(list0: java.util.List<com.google.android.exoplayer2.MediaItem>): void;
					public addMediaItems(list0: java.util.List<com.google.android.exoplayer2.MediaItem>): void;
					public addMediaItems(int0: number, list1: java.util.List<com.google.android.exoplayer2.MediaItem>): void;
					public getTotalBufferedDuration(): number;
					public isCurrentWindowLive(): boolean;
					public setMediaItem(mediaItem0: com.google.android.exoplayer2.MediaItem, long1: number): void;
					public seekToDefaultPosition(int0: number): void;
					public isPlayingAd(): boolean;
					public getBufferedPercentage(): number;
					public seekToDefaultPosition(): void;
					public addMediaItem(int0: number, mediaItem1: com.google.android.exoplayer2.MediaItem): void;
					public getBufferedPosition(): number;
					public getCurrentTrackGroups(): com.google.android.exoplayer2.source.TrackGroupArray;
					public getCurrentManifest(): any;
					public setMediaItems(list0: java.util.List<com.google.android.exoplayer2.MediaItem>, boolean1: boolean): void;
					public getContentDuration(): number;
				}
				export module Player {
					export class AudioComponent extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.Player.AudioComponent>;
						/**
						 * Constructs a new instance of the com.google.android.exoplayer2.Player() when extending the interface class.
						 */
						public constructor(implementation: {
							addAudioListener(audioListener0: com.google.android.exoplayer2.audio.AudioListener): void;
							removeAudioListener(audioListener0: com.google.android.exoplayer2.audio.AudioListener): void;
							setAudioAttributes(audioAttributes0: com.google.android.exoplayer2.audio.AudioAttributes, boolean1: boolean): void;
							getAudioAttributes(): com.google.android.exoplayer2.audio.AudioAttributes;
							setAudioSessionId(int0: number): void;
							getAudioSessionId(): number;
							setAuxEffectInfo(auxEffectInfo0: com.google.android.exoplayer2.audio.AuxEffectInfo): void;
							clearAuxEffectInfo(): void;
							setVolume(float0: number): void;
							getVolume(): number;
							setSkipSilenceEnabled(boolean0: boolean): void;
							getSkipSilenceEnabled(): boolean;
						});
						public constructor();
						public addAudioListener(audioListener0: com.google.android.exoplayer2.audio.AudioListener): void;
						public clearAuxEffectInfo(): void;
						public getAudioAttributes(): com.google.android.exoplayer2.audio.AudioAttributes;
						public setAuxEffectInfo(auxEffectInfo0: com.google.android.exoplayer2.audio.AuxEffectInfo): void;
						public getVolume(): number;
						public removeAudioListener(audioListener0: com.google.android.exoplayer2.audio.AudioListener): void;
						public setAudioSessionId(int0: number): void;
						public setAudioAttributes(audioAttributes0: com.google.android.exoplayer2.audio.AudioAttributes, boolean1: boolean): void;
						public getAudioSessionId(): number;
						public setVolume(float0: number): void;
						public setSkipSilenceEnabled(boolean0: boolean): void;
						public getSkipSilenceEnabled(): boolean;
					}
					export abstract class DefaultEventListener extends java.lang.Object implements com.google.android.exoplayer2.Player.EventListener {
						public static class: java.lang.Class<com.google.android.exoplayer2.Player.DefaultEventListener>;
						/** @deprecated */
						public onTimelineChanged(timeline: com.google.android.exoplayer2.Timeline, manifest: any, reason: number): void;
						public onPlaybackSuppressionReasonChanged(playbackSuppressionReason: number): void;
						public constructor();
						public onTimelineChanged(timeline: com.google.android.exoplayer2.Timeline, manifest: any, reason: number): void;
						public onEvents(player: com.google.android.exoplayer2.Player, events: com.google.android.exoplayer2.Player.Events): void;
						public onIsPlayingChanged(isPlaying: boolean): void;
						public onExperimentalOffloadSchedulingEnabledChanged(offloadSchedulingEnabled: boolean): void;
						public onIsLoadingChanged(isLoading: boolean): void;
						public onShuffleModeEnabledChanged(shuffleModeEnabled: boolean): void;
						public onPlayWhenReadyChanged(playWhenReady: boolean, reason: number): void;
						public onPlayerError(error: com.google.android.exoplayer2.ExoPlaybackException): void;
						/** @deprecated */
						public onSeekProcessed(): void;
						public onExperimentalSleepingForOffloadChanged(sleepingForOffload: boolean): void;
						public onRepeatModeChanged(repeatMode: number): void;
						public onPositionDiscontinuity(reason: number): void;
						public onTimelineChanged(timeline: com.google.android.exoplayer2.Timeline, reason: number): void;
						public onPlaybackStateChanged(state: number): void;
						/** @deprecated */
						public onLoadingChanged(isLoading: boolean): void;
						/** @deprecated */
						public onPlayerStateChanged(playWhenReady: boolean, playbackState: number): void;
						public onTracksChanged(trackGroups: com.google.android.exoplayer2.source.TrackGroupArray, trackSelections: com.google.android.exoplayer2.trackselection.TrackSelectionArray): void;
						public onPlaybackParametersChanged(playbackParameters: com.google.android.exoplayer2.PlaybackParameters): void;
						public onMediaItemTransition(mediaItem: com.google.android.exoplayer2.MediaItem, reason: number): void;
						public onStaticMetadataChanged(metadataList: java.util.List<com.google.android.exoplayer2.metadata.Metadata>): void;
					}
					export class DeviceComponent extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.Player.DeviceComponent>;
						/**
						 * Constructs a new instance of the com.google.android.exoplayer2.Player() when extending the interface class.
						 */
						public constructor(implementation: {
							addDeviceListener(deviceListener0: com.google.android.exoplayer2.device.DeviceListener): void;
							removeDeviceListener(deviceListener0: com.google.android.exoplayer2.device.DeviceListener): void;
							getDeviceInfo(): com.google.android.exoplayer2.device.DeviceInfo;
							getDeviceVolume(): number;
							isDeviceMuted(): boolean;
							setDeviceVolume(int0: number): void;
							increaseDeviceVolume(): void;
							decreaseDeviceVolume(): void;
							setDeviceMuted(boolean0: boolean): void;
						});
						public constructor();
						public setDeviceMuted(boolean0: boolean): void;
						public increaseDeviceVolume(): void;
						public setDeviceVolume(int0: number): void;
						public getDeviceVolume(): number;
						public addDeviceListener(deviceListener0: com.google.android.exoplayer2.device.DeviceListener): void;
						public decreaseDeviceVolume(): void;
						public removeDeviceListener(deviceListener0: com.google.android.exoplayer2.device.DeviceListener): void;
						public getDeviceInfo(): com.google.android.exoplayer2.device.DeviceInfo;
						public isDeviceMuted(): boolean;
					}
					export class DiscontinuityReason extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<com.google.android.exoplayer2.Player.DiscontinuityReason>;
						/**
						 * Constructs a new instance of the com.google.android.exoplayer2.Player() when extending the interface class.
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
					export class EventFlags extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<com.google.android.exoplayer2.Player.EventFlags>;
						/**
						 * Constructs a new instance of the com.google.android.exoplayer2.Player() when extending the interface class.
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
					export class EventListener extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.Player.EventListener>;
						/**
						 * Constructs a new instance of the com.google.android.exoplayer2.Player() when extending the interface class.
						 */
						public constructor(implementation: {
							onTimelineChanged(timeline: com.google.android.exoplayer2.Timeline, reason: number): void;
							onTimelineChanged(timeline: com.google.android.exoplayer2.Timeline, manifest: any, reason: number): void;
							onMediaItemTransition(mediaItem: com.google.android.exoplayer2.MediaItem, reason: number): void;
							onTracksChanged(trackGroups: com.google.android.exoplayer2.source.TrackGroupArray, trackSelections: com.google.android.exoplayer2.trackselection.TrackSelectionArray): void;
							onStaticMetadataChanged(metadataList: java.util.List<com.google.android.exoplayer2.metadata.Metadata>): void;
							onIsLoadingChanged(isLoading: boolean): void;
							onLoadingChanged(isLoading: boolean): void;
							onPlayerStateChanged(playWhenReady: boolean, playbackState: number): void;
							onPlaybackStateChanged(state: number): void;
							onPlayWhenReadyChanged(playWhenReady: boolean, reason: number): void;
							onPlaybackSuppressionReasonChanged(playbackSuppressionReason: number): void;
							onIsPlayingChanged(isPlaying: boolean): void;
							onRepeatModeChanged(repeatMode: number): void;
							onShuffleModeEnabledChanged(shuffleModeEnabled: boolean): void;
							onPlayerError(error: com.google.android.exoplayer2.ExoPlaybackException): void;
							onPositionDiscontinuity(reason: number): void;
							onPlaybackParametersChanged(playbackParameters: com.google.android.exoplayer2.PlaybackParameters): void;
							onSeekProcessed(): void;
							onExperimentalOffloadSchedulingEnabledChanged(offloadSchedulingEnabled: boolean): void;
							onExperimentalSleepingForOffloadChanged(sleepingForOffload: boolean): void;
							onEvents(player: com.google.android.exoplayer2.Player, events: com.google.android.exoplayer2.Player.Events): void;
						});
						public constructor();
						/** @deprecated */
						public onTimelineChanged(timeline: com.google.android.exoplayer2.Timeline, manifest: any, reason: number): void;
						public onPlaybackSuppressionReasonChanged(playbackSuppressionReason: number): void;
						public onEvents(player: com.google.android.exoplayer2.Player, events: com.google.android.exoplayer2.Player.Events): void;
						public onIsPlayingChanged(isPlaying: boolean): void;
						public onExperimentalOffloadSchedulingEnabledChanged(offloadSchedulingEnabled: boolean): void;
						public onIsLoadingChanged(isLoading: boolean): void;
						public onShuffleModeEnabledChanged(shuffleModeEnabled: boolean): void;
						public onPlayWhenReadyChanged(playWhenReady: boolean, reason: number): void;
						public onPlayerError(error: com.google.android.exoplayer2.ExoPlaybackException): void;
						/** @deprecated */
						public onSeekProcessed(): void;
						public onExperimentalSleepingForOffloadChanged(sleepingForOffload: boolean): void;
						public onRepeatModeChanged(repeatMode: number): void;
						public onPositionDiscontinuity(reason: number): void;
						public onTimelineChanged(timeline: com.google.android.exoplayer2.Timeline, reason: number): void;
						public onPlaybackStateChanged(state: number): void;
						/** @deprecated */
						public onLoadingChanged(isLoading: boolean): void;
						/** @deprecated */
						public onPlayerStateChanged(playWhenReady: boolean, playbackState: number): void;
						public onTracksChanged(trackGroups: com.google.android.exoplayer2.source.TrackGroupArray, trackSelections: com.google.android.exoplayer2.trackselection.TrackSelectionArray): void;
						public onPlaybackParametersChanged(playbackParameters: com.google.android.exoplayer2.PlaybackParameters): void;
						public onMediaItemTransition(mediaItem: com.google.android.exoplayer2.MediaItem, reason: number): void;
						public onStaticMetadataChanged(metadataList: java.util.List<com.google.android.exoplayer2.metadata.Metadata>): void;
					}
					export class Events extends com.google.android.exoplayer2.util.MutableFlags {
						public static class: java.lang.Class<com.google.android.exoplayer2.Player.Events>;
						public constructor();
						public contains(flag: number): boolean;
						public containsAny(flags: native.Array<number>): boolean;
						public containsAny(events: native.Array<number>): boolean;
						public get(index: number): number;
						public contains(event: number): boolean;
					}
					export class MediaItemTransitionReason extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<com.google.android.exoplayer2.Player.MediaItemTransitionReason>;
						/**
						 * Constructs a new instance of the com.google.android.exoplayer2.Player() when extending the interface class.
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
					export class MetadataComponent extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.Player.MetadataComponent>;
						/**
						 * Constructs a new instance of the com.google.android.exoplayer2.Player() when extending the interface class.
						 */
						public constructor(implementation: {
							addMetadataOutput(metadataOutput0: com.google.android.exoplayer2.metadata.MetadataOutput): void;
							removeMetadataOutput(metadataOutput0: com.google.android.exoplayer2.metadata.MetadataOutput): void;
						});
						public constructor();
						public removeMetadataOutput(metadataOutput0: com.google.android.exoplayer2.metadata.MetadataOutput): void;
						public addMetadataOutput(metadataOutput0: com.google.android.exoplayer2.metadata.MetadataOutput): void;
					}
					export class PlayWhenReadyChangeReason extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<com.google.android.exoplayer2.Player.PlayWhenReadyChangeReason>;
						/**
						 * Constructs a new instance of the com.google.android.exoplayer2.Player() when extending the interface class.
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
					export class PlaybackSuppressionReason extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<com.google.android.exoplayer2.Player.PlaybackSuppressionReason>;
						/**
						 * Constructs a new instance of the com.google.android.exoplayer2.Player() when extending the interface class.
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
					export class RepeatMode extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<com.google.android.exoplayer2.Player.RepeatMode>;
						/**
						 * Constructs a new instance of the com.google.android.exoplayer2.Player() when extending the interface class.
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
					export class State extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<com.google.android.exoplayer2.Player.State>;
						/**
						 * Constructs a new instance of the com.google.android.exoplayer2.Player() when extending the interface class.
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
					export class TextComponent extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.Player.TextComponent>;
						/**
						 * Constructs a new instance of the com.google.android.exoplayer2.Player() when extending the interface class.
						 */
						public constructor(implementation: {
							addTextOutput(textOutput0: com.google.android.exoplayer2.text.TextOutput): void;
							removeTextOutput(textOutput0: com.google.android.exoplayer2.text.TextOutput): void;
							getCurrentCues(): java.util.List<com.google.android.exoplayer2.text.Cue>;
						});
						public constructor();
						public removeTextOutput(textOutput0: com.google.android.exoplayer2.text.TextOutput): void;
						public addTextOutput(textOutput0: com.google.android.exoplayer2.text.TextOutput): void;
						public getCurrentCues(): java.util.List<com.google.android.exoplayer2.text.Cue>;
					}
					export class TimelineChangeReason extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<com.google.android.exoplayer2.Player.TimelineChangeReason>;
						/**
						 * Constructs a new instance of the com.google.android.exoplayer2.Player() when extending the interface class.
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
					export class VideoComponent extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.Player.VideoComponent>;
						/**
						 * Constructs a new instance of the com.google.android.exoplayer2.Player() when extending the interface class.
						 */
						public constructor(implementation: {
							setVideoScalingMode(int0: number): void;
							getVideoScalingMode(): number;
							addVideoListener(videoListener0: com.google.android.exoplayer2.video.VideoListener): void;
							removeVideoListener(videoListener0: com.google.android.exoplayer2.video.VideoListener): void;
							setVideoFrameMetadataListener(videoFrameMetadataListener0: com.google.android.exoplayer2.video.VideoFrameMetadataListener): void;
							clearVideoFrameMetadataListener(videoFrameMetadataListener0: com.google.android.exoplayer2.video.VideoFrameMetadataListener): void;
							setCameraMotionListener(cameraMotionListener0: com.google.android.exoplayer2.video.spherical.CameraMotionListener): void;
							clearCameraMotionListener(cameraMotionListener0: com.google.android.exoplayer2.video.spherical.CameraMotionListener): void;
							clearVideoSurface(): void;
							clearVideoSurface(surface0: globalAndroid.view.Surface): void;
							setVideoSurface(surface0: globalAndroid.view.Surface): void;
							setVideoSurfaceHolder(surfaceHolder0: globalAndroid.view.SurfaceHolder): void;
							clearVideoSurfaceHolder(surfaceHolder0: globalAndroid.view.SurfaceHolder): void;
							setVideoSurfaceView(surfaceView0: globalAndroid.view.SurfaceView): void;
							clearVideoSurfaceView(surfaceView0: globalAndroid.view.SurfaceView): void;
							setVideoTextureView(textureView0: globalAndroid.view.TextureView): void;
							clearVideoTextureView(textureView0: globalAndroid.view.TextureView): void;
						});
						public constructor();
						public clearCameraMotionListener(cameraMotionListener0: com.google.android.exoplayer2.video.spherical.CameraMotionListener): void;
						public setVideoFrameMetadataListener(videoFrameMetadataListener0: com.google.android.exoplayer2.video.VideoFrameMetadataListener): void;
						public clearVideoTextureView(textureView0: globalAndroid.view.TextureView): void;
						public clearVideoSurfaceHolder(surfaceHolder0: globalAndroid.view.SurfaceHolder): void;
						public setVideoScalingMode(int0: number): void;
						public setVideoSurfaceHolder(surfaceHolder0: globalAndroid.view.SurfaceHolder): void;
						public clearVideoSurfaceView(surfaceView0: globalAndroid.view.SurfaceView): void;
						public clearVideoSurface(): void;
						public setVideoSurface(surface0: globalAndroid.view.Surface): void;
						public setCameraMotionListener(cameraMotionListener0: com.google.android.exoplayer2.video.spherical.CameraMotionListener): void;
						public clearVideoSurface(surface0: globalAndroid.view.Surface): void;
						public getVideoScalingMode(): number;
						public setVideoSurfaceView(surfaceView0: globalAndroid.view.SurfaceView): void;
						public addVideoListener(videoListener0: com.google.android.exoplayer2.video.VideoListener): void;
						public clearVideoFrameMetadataListener(videoFrameMetadataListener0: com.google.android.exoplayer2.video.VideoFrameMetadataListener): void;
						public removeVideoListener(videoListener0: com.google.android.exoplayer2.video.VideoListener): void;
						public setVideoTextureView(textureView0: globalAndroid.view.TextureView): void;
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
				export abstract class Timeline extends java.lang.Object {
					public static class: java.lang.Class<com.google.android.exoplayer2.Timeline>;
					public static EMPTY: com.google.android.exoplayer2.Timeline;
					public getUidOfPeriod(int0: number): any;
					public getLastWindowIndex(shuffleModeEnabled: boolean): number;
					public equals(obj: any): boolean;
					public isEmpty(): boolean;
					public getPreviousWindowIndex(windowIndex: number, repeatMode: number, shuffleModeEnabled: boolean): number;
					public isLastPeriod(periodIndex: number, period: com.google.android.exoplayer2.Timeline.Period, window: com.google.android.exoplayer2.Timeline.Window, repeatMode: number, shuffleModeEnabled: boolean): boolean;
					public getFirstWindowIndex(shuffleModeEnabled: boolean): number;
					public getPeriodPosition(window: com.google.android.exoplayer2.Timeline.Window, period: com.google.android.exoplayer2.Timeline.Period, windowIndex: number, windowPositionUs: number, defaultPositionProjectionUs: number): globalAndroid.util.Pair<any,java.lang.Long>;
					public getPeriodByUid(periodUid: any, period: com.google.android.exoplayer2.Timeline.Period): com.google.android.exoplayer2.Timeline.Period;
					public getNextWindowIndex(windowIndex: number, repeatMode: number, shuffleModeEnabled: boolean): number;
					/** @deprecated */
					public getWindow(windowIndex: number, window: com.google.android.exoplayer2.Timeline.Window, setTag: boolean): com.google.android.exoplayer2.Timeline.Window;
					public getPeriodPosition(window: com.google.android.exoplayer2.Timeline.Window, period: com.google.android.exoplayer2.Timeline.Period, windowIndex: number, windowPositionUs: number): globalAndroid.util.Pair<any,java.lang.Long>;
					public getWindowCount(): number;
					public getIndexOfPeriod(object0: any): number;
					public getWindow(windowIndex: number, window: com.google.android.exoplayer2.Timeline.Window): com.google.android.exoplayer2.Timeline.Window;
					public constructor();
					public getWindow(int0: number, window1: com.google.android.exoplayer2.Timeline.Window, long2: number): com.google.android.exoplayer2.Timeline.Window;
					public getNextPeriodIndex(periodIndex: number, period: com.google.android.exoplayer2.Timeline.Period, window: com.google.android.exoplayer2.Timeline.Window, repeatMode: number, shuffleModeEnabled: boolean): number;
					public getPeriod(int0: number, period1: com.google.android.exoplayer2.Timeline.Period, boolean2: boolean): com.google.android.exoplayer2.Timeline.Period;
					public hashCode(): number;
					public getPeriodCount(): number;
					public getPeriod(periodIndex: number, period: com.google.android.exoplayer2.Timeline.Period): com.google.android.exoplayer2.Timeline.Period;
				}
				export module Timeline {
					export class Period extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.Timeline.Period>;
						public id: any;
						public uid: any;
						public windowIndex: number;
						public durationUs: number;
						public getNextAdIndexToPlay(adGroupIndex: number, lastPlayedAdIndex: number): number;
						public getDurationUs(): number;
						public constructor();
						public equals(obj: any): boolean;
						public getPositionInWindowUs(): number;
						public getAdGroupTimeUs(adGroupIndex: number): number;
						public getAdGroupIndexAfterPositionUs(positionUs: number): number;
						public hashCode(): number;
						public getAdDurationUs(adGroupIndex: number, adIndexInAdGroup: number): number;
						public getAdGroupCount(): number;
						public getAdResumePositionUs(): number;
						public getAdCountInAdGroup(adGroupIndex: number): number;
						public set(id: any, uid: any, windowIndex: number, durationUs: number, positionInWindowUs: number): com.google.android.exoplayer2.Timeline.Period;
						public getDurationMs(): number;
						public getPositionInWindowMs(): number;
						public hasPlayedAdGroup(adGroupIndex: number): boolean;
						public getAdGroupIndexForPositionUs(positionUs: number): number;
						public getFirstAdIndexToPlay(adGroupIndex: number): number;
						public getAdsId(): any;
						public set(id: any, uid: any, windowIndex: number, durationUs: number, positionInWindowUs: number, adPlaybackState: com.google.android.exoplayer2.source.ads.AdPlaybackState): com.google.android.exoplayer2.Timeline.Period;
					}
					export class Window extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.Timeline.Window>;
						public static SINGLE_WINDOW_UID: any;
						public uid: any;
						public tag: any;
						public mediaItem: com.google.android.exoplayer2.MediaItem;
						public manifest: any;
						public presentationStartTimeMs: number;
						public windowStartTimeMs: number;
						public elapsedRealtimeEpochOffsetMs: number;
						public isSeekable: boolean;
						public isDynamic: boolean;
						public liveConfiguration: com.google.android.exoplayer2.MediaItem.LiveConfiguration;
						public isPlaceholder: boolean;
						public firstPeriodIndex: number;
						public lastPeriodIndex: number;
						public defaultPositionUs: number;
						public durationUs: number;
						public positionInFirstPeriodUs: number;
						public getDurationMs(): number;
						public getDurationUs(): number;
						public constructor();
						public equals(obj: any): boolean;
						public getDefaultPositionMs(): number;
						public getDefaultPositionUs(): number;
						public hashCode(): number;
						public set(uid: any, mediaItem: com.google.android.exoplayer2.MediaItem, manifest: any, presentationStartTimeMs: number, windowStartTimeMs: number, elapsedRealtimeEpochOffsetMs: number, isSeekable: boolean, isDynamic: boolean, liveConfiguration: com.google.android.exoplayer2.MediaItem.LiveConfiguration, defaultPositionUs: number, durationUs: number, firstPeriodIndex: number, lastPeriodIndex: number, positionInFirstPeriodUs: number): com.google.android.exoplayer2.Timeline.Window;
						public getCurrentUnixTimeMs(): number;
						public getPositionInFirstPeriodMs(): number;
						public getPositionInFirstPeriodUs(): number;
						public isLive(): boolean;
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
				export module audio {
					export class AacUtil extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.audio.AacUtil>;
						public static AAC_LC_AUDIO_SAMPLE_COUNT: number;
						public static AAC_XHE_AUDIO_SAMPLE_COUNT: number;
						public static AAC_HE_AUDIO_SAMPLE_COUNT: number;
						public static AAC_LD_AUDIO_SAMPLE_COUNT: number;
						public static AAC_LC_MAX_RATE_BYTES_PER_SECOND: number;
						public static AAC_HE_V1_MAX_RATE_BYTES_PER_SECOND: number;
						public static AAC_HE_V2_MAX_RATE_BYTES_PER_SECOND: number;
						public static AAC_XHE_MAX_RATE_BYTES_PER_SECOND: number;
						public static AAC_ELD_MAX_RATE_BYTES_PER_SECOND: number;
						public static AUDIO_OBJECT_TYPE_AAC_LC: number;
						public static AUDIO_OBJECT_TYPE_AAC_SBR: number;
						public static AUDIO_OBJECT_TYPE_AAC_ER_BSAC: number;
						public static AUDIO_OBJECT_TYPE_AAC_ELD: number;
						public static AUDIO_OBJECT_TYPE_AAC_PS: number;
						public static AUDIO_OBJECT_TYPE_AAC_XHE: number;
						public static parseAudioSpecificConfig(audioSpecificConfig: native.Array<number>): com.google.android.exoplayer2.audio.AacUtil.Config;
						public static buildAacLcAudioSpecificConfig(sampleRate: number, channelCount: number): native.Array<number>;
						public static getEncodingForAudioObjectType(audioObjectType: number): number;
						public static parseAudioSpecificConfig(bitArray: com.google.android.exoplayer2.util.ParsableBitArray, forceReadToEnd: boolean): com.google.android.exoplayer2.audio.AacUtil.Config;
						public static buildAudioSpecificConfig(audioObjectType: number, sampleRateIndex: number, channelConfig: number): native.Array<number>;
					}
					export module AacUtil {
						export class AacAudioObjectType extends java.lang.Object implements java.lang.annotation.Annotation {
							public static class: java.lang.Class<com.google.android.exoplayer2.audio.AacUtil.AacAudioObjectType>;
							/**
							 * Constructs a new instance of the com.google.android.exoplayer2.audio.AacUtil() when extending the interface class.
							 */
							public constructor(implementation: {
								equals(object0: any): boolean;
								hashCode(): number;
								toString(): string;
								annotationType(): java.lang.Class<any>;
							});
							public constructor();
							public hashCode(): number;
							public annotationType(): java.lang.Class<any>;
							public equals(obj: any): boolean;
							public toString(): string;
						}
						export class Config extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.audio.AacUtil.Config>;
							public sampleRateHz: number;
							public channelCount: number;
							public codecs: string;
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
				export module audio {
					export class Ac3Util extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.audio.Ac3Util>;
						public static AC3_MAX_RATE_BYTES_PER_SECOND: number;
						public static E_AC3_MAX_RATE_BYTES_PER_SECOND: number;
						public static TRUEHD_MAX_RATE_BYTES_PER_SECOND: number;
						public static TRUEHD_RECHUNK_SAMPLE_COUNT: number;
						public static TRUEHD_SYNCFRAME_PREFIX_LENGTH: number;
						public static parseAc3SyncframeSize(data: native.Array<number>): number;
						public static parseAc3SyncframeAudioSampleCount(buffer: java.nio.ByteBuffer): number;
						public static parseAc3SyncframeInfo(data: com.google.android.exoplayer2.util.ParsableBitArray): com.google.android.exoplayer2.audio.Ac3Util.SyncFrameInfo;
						public static parseEAc3AnnexFFormat(data: com.google.android.exoplayer2.util.ParsableByteArray, trackId: string, language: string, drmInitData: com.google.android.exoplayer2.drm.DrmInitData): com.google.android.exoplayer2.Format;
						public static findTrueHdSyncframeOffset(buffer: java.nio.ByteBuffer): number;
						public static parseTrueHdSyncframeAudioSampleCount(buffer: java.nio.ByteBuffer, offset: number): number;
						public static parseAc3AnnexFFormat(data: com.google.android.exoplayer2.util.ParsableByteArray, trackId: string, language: string, drmInitData: com.google.android.exoplayer2.drm.DrmInitData): com.google.android.exoplayer2.Format;
						public static parseTrueHdSyncframeAudioSampleCount(syncframe: native.Array<number>): number;
					}
					export module Ac3Util {
						export class SyncFrameInfo extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.audio.Ac3Util.SyncFrameInfo>;
							public static STREAM_TYPE_UNDEFINED: number;
							public static STREAM_TYPE_TYPE0: number;
							public static STREAM_TYPE_TYPE1: number;
							public static STREAM_TYPE_TYPE2: number;
							public mimeType: string;
							public streamType: number;
							public sampleRate: number;
							public channelCount: number;
							public frameSize: number;
							public sampleCount: number;
						}
						export module SyncFrameInfo {
							export class StreamType extends java.lang.Object implements java.lang.annotation.Annotation {
								public static class: java.lang.Class<com.google.android.exoplayer2.audio.Ac3Util.SyncFrameInfo.StreamType>;
								/**
								 * Constructs a new instance of the com.google.android.exoplayer2.audio.Ac3Util() when extending the interface class.
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
				export module audio {
					export class Ac4Util extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.audio.Ac4Util>;
						public static AC40_SYNCWORD: number;
						public static AC41_SYNCWORD: number;
						public static MAX_RATE_BYTES_PER_SECOND: number;
						public static SAMPLE_HEADER_SIZE: number;
						public static HEADER_SIZE_FOR_PARSER: number;
						public static getAc4SampleHeader(size: number, buffer: com.google.android.exoplayer2.util.ParsableByteArray): void;
						public static parseAc4SyncframeAudioSampleCount(buffer: java.nio.ByteBuffer): number;
						public static parseAc4AnnexEFormat(data: com.google.android.exoplayer2.util.ParsableByteArray, trackId: string, language: string, drmInitData: com.google.android.exoplayer2.drm.DrmInitData): com.google.android.exoplayer2.Format;
						public static parseAc4SyncframeSize(data: native.Array<number>, syncword: number): number;
						public static parseAc4SyncframeInfo(data: com.google.android.exoplayer2.util.ParsableBitArray): com.google.android.exoplayer2.audio.Ac4Util.SyncFrameInfo;
					}
					export module Ac4Util {
						export class SyncFrameInfo extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.audio.Ac4Util.SyncFrameInfo>;
							public bitstreamVersion: number;
							public sampleRate: number;
							public channelCount: number;
							public frameSize: number;
							public sampleCount: number;
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
				export module audio {
					export class AudioAttributes extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.audio.AudioAttributes>;
						public static DEFAULT: com.google.android.exoplayer2.audio.AudioAttributes;
						public contentType: number;
						public flags: number;
						public usage: number;
						public allowedCapturePolicy: number;
						public equals(obj: any): boolean;
						public hashCode(): number;
						public getAudioAttributesV21(): any;
					}
					export module AudioAttributes {
						export class Builder extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.audio.AudioAttributes.Builder>;
							public constructor();
							public setAllowedCapturePolicy(allowedCapturePolicy: number): com.google.android.exoplayer2.audio.AudioAttributes.Builder;
							public setFlags(flags: number): com.google.android.exoplayer2.audio.AudioAttributes.Builder;
							public setUsage(usage: number): com.google.android.exoplayer2.audio.AudioAttributes.Builder;
							public build(): com.google.android.exoplayer2.audio.AudioAttributes;
							public setContentType(contentType: number): com.google.android.exoplayer2.audio.AudioAttributes.Builder;
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
				export module audio {
					export class AudioListener extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.audio.AudioListener>;
						/**
						 * Constructs a new instance of the com.google.android.exoplayer2.audio.AudioListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onAudioSessionIdChanged(audioSessionId: number): void;
							onAudioAttributesChanged(audioAttributes: com.google.android.exoplayer2.audio.AudioAttributes): void;
							onVolumeChanged(volume: number): void;
							onSkipSilenceEnabledChanged(skipSilenceEnabled: boolean): void;
						});
						public constructor();
						public onAudioSessionIdChanged(audioSessionId: number): void;
						public onVolumeChanged(volume: number): void;
						public onAudioAttributesChanged(audioAttributes: com.google.android.exoplayer2.audio.AudioAttributes): void;
						public onSkipSilenceEnabledChanged(skipSilenceEnabled: boolean): void;
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
				export module audio {
					export class AuxEffectInfo extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.audio.AuxEffectInfo>;
						public static NO_AUX_EFFECT_ID: number;
						public effectId: number;
						public sendLevel: number;
						public equals(obj: any): boolean;
						public constructor(effectId: number, sendLevel: number);
						public hashCode(): number;
						public equals(o: any): boolean;
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
				export module audio {
					export class DtsUtil extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.audio.DtsUtil>;
						public static DTS_MAX_RATE_BYTES_PER_SECOND: number;
						public static DTS_HD_MAX_RATE_BYTES_PER_SECOND: number;
						public static parseDtsAudioSampleCount(buffer: java.nio.ByteBuffer): number;
						public static isSyncWord(word: number): boolean;
						public static parseDtsFormat(frame: native.Array<number>, trackId: string, language: string, drmInitData: com.google.android.exoplayer2.drm.DrmInitData): com.google.android.exoplayer2.Format;
						public static parseDtsAudioSampleCount(data: native.Array<number>): number;
						public static getDtsFrameSize(data: native.Array<number>): number;
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
				export module audio {
					export class MpegAudioUtil extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.audio.MpegAudioUtil>;
						public static MAX_FRAME_SIZE_BYTES: number;
						public static MAX_RATE_BYTES_PER_SECOND: number;
						public static parseMpegAudioFrameSampleCount(headerData: number): number;
						public static getFrameSize(headerData: number): number;
					}
					export module MpegAudioUtil {
						export class Header extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.audio.MpegAudioUtil.Header>;
							public version: number;
							public mimeType: string;
							public frameSize: number;
							public sampleRate: number;
							public channels: number;
							public bitrate: number;
							public samplesPerFrame: number;
							public constructor();
							public setForHeaderData(headerData: number): boolean;
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
				export module audio {
					export class OpusUtil extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.audio.OpusUtil>;
						public static SAMPLE_RATE: number;
						public static buildInitializationData(header: native.Array<number>): java.util.List<native.Array<number>>;
						public static getPreSkipSamples(initializationData: java.util.List<native.Array<number>>): number;
						public static getSeekPreRollSamples(initializationData: java.util.List<native.Array<number>>): number;
						public static getChannelCount(header: native.Array<number>): number;
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
				export module audio {
					export class WavUtil extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.audio.WavUtil>;
						public static RIFF_FOURCC: number;
						public static WAVE_FOURCC: number;
						public static FMT_FOURCC: number;
						public static DATA_FOURCC: number;
						public static TYPE_PCM: number;
						public static TYPE_FLOAT: number;
						public static TYPE_ALAW: number;
						public static TYPE_MLAW: number;
						public static TYPE_IMA_ADPCM: number;
						public static TYPE_WAVE_FORMAT_EXTENSIBLE: number;
						public static getTypeForPcmEncoding(pcmEncoding: number): number;
						public static getPcmEncodingForType(type: number, bitsPerSample: number): number;
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
				export module common {
					export class BuildConfig extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.common.BuildConfig>;
						public static DEBUG: boolean;
						public static LIBRARY_PACKAGE_NAME: string;
						public static APPLICATION_ID: string;
						public static BUILD_TYPE: string;
						public static FLAVOR: string;
						public static VERSION_CODE: number;
						public static VERSION_NAME: string;
						public constructor();
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
				export module decoder {
					export abstract class Buffer extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.decoder.Buffer>;
						public constructor();
						public isKeyFrame(): boolean;
						public setFlags(flags: number): void;
						public isDecodeOnly(): boolean;
						public addFlag(flag: number): void;
						public getFlag(flag: number): boolean;
						public clear(): void;
						public isEndOfStream(): boolean;
						public hasSupplementalData(): boolean;
						public clearFlag(flag: number): void;
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
				export module decoder {
					export class CryptoInfo extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.decoder.CryptoInfo>;
						public iv: native.Array<number>;
						public key: native.Array<number>;
						public mode: number;
						public numBytesOfClearData: native.Array<number>;
						public numBytesOfEncryptedData: native.Array<number>;
						public numSubSamples: number;
						public encryptedBlocks: number;
						public clearBlocks: number;
						public getFrameworkCryptoInfo(): globalAndroid.media.MediaCodec.CryptoInfo;
						public constructor();
						public set(numSubSamples: number, numBytesOfClearData: native.Array<number>, numBytesOfEncryptedData: native.Array<number>, key: native.Array<number>, iv: native.Array<number>, mode: number, encryptedBlocks: number, clearBlocks: number): void;
						public increaseClearDataFirstSubSampleBy(count: number): void;
						/** @deprecated */
						public getFrameworkCryptoInfoV16(): globalAndroid.media.MediaCodec.CryptoInfo;
					}
					export module CryptoInfo {
						export class PatternHolderV24 extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.decoder.CryptoInfo.PatternHolderV24>;
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
				export module decoder {
					export class DecoderInputBuffer extends com.google.android.exoplayer2.decoder.Buffer {
						public static class: java.lang.Class<com.google.android.exoplayer2.decoder.DecoderInputBuffer>;
						public static BUFFER_REPLACEMENT_MODE_DISABLED: number;
						public static BUFFER_REPLACEMENT_MODE_NORMAL: number;
						public static BUFFER_REPLACEMENT_MODE_DIRECT: number;
						public cryptoInfo: com.google.android.exoplayer2.decoder.CryptoInfo;
						public data: java.nio.ByteBuffer;
						public waitingForKeys: boolean;
						public timeUs: number;
						public supplementalData: java.nio.ByteBuffer;
						public constructor();
						public constructor(bufferReplacementMode: number, paddingSize: number);
						public isFlagsOnly(): boolean;
						public resetSupplementalData(length: number): void;
						public isEncrypted(): boolean;
						public flip(): void;
						public static newFlagsOnlyInstance(): com.google.android.exoplayer2.decoder.DecoderInputBuffer;
						public ensureSpaceForWrite(length: number): void;
						public clear(): void;
						public constructor(bufferReplacementMode: number);
					}
					export module DecoderInputBuffer {
						export class BufferReplacementMode extends java.lang.Object implements java.lang.annotation.Annotation {
							public static class: java.lang.Class<com.google.android.exoplayer2.decoder.DecoderInputBuffer.BufferReplacementMode>;
							/**
							 * Constructs a new instance of the com.google.android.exoplayer2.decoder.DecoderInputBuffer() when extending the interface class.
							 */
							public constructor(implementation: {
								equals(object0: any): boolean;
								hashCode(): number;
								toString(): string;
								annotationType(): java.lang.Class<any>;
							});
							public constructor();
							public hashCode(): number;
							public annotationType(): java.lang.Class<any>;
							public equals(obj: any): boolean;
							public toString(): string;
						}
						export class InsufficientCapacityException extends java.lang.IllegalStateException {
							public static class: java.lang.Class<com.google.android.exoplayer2.decoder.DecoderInputBuffer.InsufficientCapacityException>;
							public currentCapacity: number;
							public requiredCapacity: number;
							public constructor();
							public constructor(message: string, cause: java.lang.Throwable);
							public constructor(cause: java.lang.Throwable);
							public constructor(currentCapacity: number, requiredCapacity: number);
							public constructor(s: string);
							public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
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
				export module device {
					export class DeviceInfo extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.device.DeviceInfo>;
						public static PLAYBACK_TYPE_LOCAL: number;
						public static PLAYBACK_TYPE_REMOTE: number;
						public static UNKNOWN: com.google.android.exoplayer2.device.DeviceInfo;
						public playbackType: number;
						public minVolume: number;
						public maxVolume: number;
						public equals(obj: any): boolean;
						public constructor(playbackType: number, minVolume: number, maxVolume: number);
						public hashCode(): number;
					}
					export module DeviceInfo {
						export class PlaybackType extends java.lang.Object implements java.lang.annotation.Annotation {
							public static class: java.lang.Class<com.google.android.exoplayer2.device.DeviceInfo.PlaybackType>;
							/**
							 * Constructs a new instance of the com.google.android.exoplayer2.device.DeviceInfo() when extending the interface class.
							 */
							public constructor(implementation: {
								equals(object0: any): boolean;
								hashCode(): number;
								toString(): string;
								annotationType(): java.lang.Class<any>;
							});
							public constructor();
							public hashCode(): number;
							public annotationType(): java.lang.Class<any>;
							public equals(obj: any): boolean;
							public toString(): string;
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
				export module device {
					export class DeviceListener extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.device.DeviceListener>;
						/**
						 * Constructs a new instance of the com.google.android.exoplayer2.device.DeviceListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onDeviceInfoChanged(deviceInfo: com.google.android.exoplayer2.device.DeviceInfo): void;
							onDeviceVolumeChanged(volume: number, muted: boolean): void;
						});
						public constructor();
						public onDeviceInfoChanged(deviceInfo: com.google.android.exoplayer2.device.DeviceInfo): void;
						public onDeviceVolumeChanged(volume: number, muted: boolean): void;
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
				export module drm {
					export class DrmInitData extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.drm.DrmInitData>;
						public schemeType: string;
						public schemeDataCount: number;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.exoplayer2.drm.DrmInitData>;
						public merge(drmInitData: com.google.android.exoplayer2.drm.DrmInitData): com.google.android.exoplayer2.drm.DrmInitData;
						public equals(obj: any): boolean;
						public static nullsLast(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
						public get(index: number): com.google.android.exoplayer2.drm.DrmInitData.SchemeData;
						public hashCode(): number;
						public thenComparing(keyExtractor: any /* any*/): java.util.Comparator<any>;
						public static reverseOrder(): java.util.Comparator<any>;
						public static comparingDouble(keyExtractor: any /* any*/): java.util.Comparator<any>;
						public reversed(): java.util.Comparator<any>;
						public thenComparingInt(keyExtractor: any /* any*/): java.util.Comparator<any>;
						public thenComparing(keyExtractor: any /* any*/, keyComparator: java.util.Comparator<any>): java.util.Comparator<any>;
						public static nullsFirst(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
						public static naturalOrder(): java.util.Comparator<any>;
						public thenComparing(other: java.util.Comparator<any>): java.util.Comparator<any>;
						public constructor(schemeDatas: native.Array<com.google.android.exoplayer2.drm.DrmInitData.SchemeData>);
						public static comparingLong(keyExtractor: any /* any*/): java.util.Comparator<any>;
						public static comparingInt(keyExtractor: any /* any*/): java.util.Comparator<any>;
						public constructor(schemeType: string, schemeDatas: native.Array<com.google.android.exoplayer2.drm.DrmInitData.SchemeData>);
						public describeContents(): number;
						public compare(object0: any, object1: any): number;
						public thenComparingLong(keyExtractor: any /* any*/): java.util.Comparator<any>;
						public writeToParcel(dest: globalAndroid.os.Parcel, flags: number): void;
						public copyWithSchemeType(schemeType: string): com.google.android.exoplayer2.drm.DrmInitData;
						public constructor(schemeType: string, schemeDatas: java.util.List<com.google.android.exoplayer2.drm.DrmInitData.SchemeData>);
						public thenComparingDouble(keyExtractor: any /* any*/): java.util.Comparator<any>;
						public static createSessionCreationData(manifestData: com.google.android.exoplayer2.drm.DrmInitData, mediaData: com.google.android.exoplayer2.drm.DrmInitData): com.google.android.exoplayer2.drm.DrmInitData;
						public static comparing(keyExtractor: any /* any*/): java.util.Comparator<any>;
						public constructor(schemeDatas: java.util.List<com.google.android.exoplayer2.drm.DrmInitData.SchemeData>);
						public static comparing(keyExtractor: any /* any*/, keyComparator: java.util.Comparator<any>): java.util.Comparator<any>;
						public compare(first: com.google.android.exoplayer2.drm.DrmInitData.SchemeData, second: com.google.android.exoplayer2.drm.DrmInitData.SchemeData): number;
					}
					export module DrmInitData {
						export class SchemeData extends java.lang.Object implements globalAndroid.os.Parcelable {
							public static class: java.lang.Class<com.google.android.exoplayer2.drm.DrmInitData.SchemeData>;
							public uuid: java.util.UUID;
							public licenseServerUrl: string;
							public mimeType: string;
							public data: native.Array<number>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.exoplayer2.drm.DrmInitData.SchemeData>;
							public copyWithData(data: native.Array<number>): com.google.android.exoplayer2.drm.DrmInitData.SchemeData;
							public hashCode(): number;
							public describeContents(): number;
							public writeToParcel(dest: globalAndroid.os.Parcel, flags: number): void;
							public matches(schemeUuid: java.util.UUID): boolean;
							public equals(obj: any): boolean;
							public canReplace(other: com.google.android.exoplayer2.drm.DrmInitData.SchemeData): boolean;
							public hasData(): boolean;
							public constructor(uuid: java.util.UUID, licenseServerUrl: string, mimeType: string, data: native.Array<number>);
							public constructor(uuid: java.util.UUID, mimeType: string, data: native.Array<number>);
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
				export module drm {
					export class ExoMediaCrypto extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.drm.ExoMediaCrypto>;
						/**
						 * Constructs a new instance of the com.google.android.exoplayer2.drm.ExoMediaCrypto interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
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
				export module drm {
					export class UnsupportedMediaCrypto extends java.lang.Object implements com.google.android.exoplayer2.drm.ExoMediaCrypto {
						public static class: java.lang.Class<com.google.android.exoplayer2.drm.UnsupportedMediaCrypto>;
						public constructor();
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
				export module metadata {
					export class Metadata extends java.lang.Object implements globalAndroid.os.Parcelable {
						public static class: java.lang.Class<com.google.android.exoplayer2.metadata.Metadata>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.exoplayer2.metadata.Metadata>;
						public copyWithAppendedEntries(entriesToAppend: native.Array<com.google.android.exoplayer2.metadata.Metadata.Entry>): com.google.android.exoplayer2.metadata.Metadata;
						public equals(obj: any): boolean;
						public describeContents(): number;
						public get(index: number): com.google.android.exoplayer2.metadata.Metadata.Entry;
						public length(): number;
						public constructor(entries: native.Array<com.google.android.exoplayer2.metadata.Metadata.Entry>);
						public hashCode(): number;
						public constructor(entries: java.util.List<any>);
						public copyWithAppendedEntriesFrom(other: com.google.android.exoplayer2.metadata.Metadata): com.google.android.exoplayer2.metadata.Metadata;
						public toString(): string;
						public writeToParcel(dest: globalAndroid.os.Parcel, flags: number): void;
					}
					export module Metadata {
						export class Entry extends java.lang.Object implements globalAndroid.os.Parcelable {
							public static class: java.lang.Class<com.google.android.exoplayer2.metadata.Metadata.Entry>;
							/**
							 * Constructs a new instance of the com.google.android.exoplayer2.metadata.Metadata() when extending the interface class.
							 */
							public constructor(implementation: {
								getWrappedMetadataFormat(): com.google.android.exoplayer2.Format;
								getWrappedMetadataBytes(): native.Array<number>;
								describeContents(): number;
								writeToParcel(parcel0: globalAndroid.os.Parcel, int1: number): void;
							});
							public constructor();
							public static PARCELABLE_WRITE_RETURN_VALUE: number;
							public static CONTENTS_FILE_DESCRIPTOR: number;
							public getWrappedMetadataFormat(): com.google.android.exoplayer2.Format;
							public writeToParcel(parcel0: globalAndroid.os.Parcel, int1: number): void;
							public describeContents(): number;
							public getWrappedMetadataBytes(): native.Array<number>;
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
				export module metadata {
					export class MetadataDecoder extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.metadata.MetadataDecoder>;
						/**
						 * Constructs a new instance of the com.google.android.exoplayer2.metadata.MetadataDecoder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							decode(metadataInputBuffer0: com.google.android.exoplayer2.metadata.MetadataInputBuffer): com.google.android.exoplayer2.metadata.Metadata;
						});
						public constructor();
						public decode(metadataInputBuffer0: com.google.android.exoplayer2.metadata.MetadataInputBuffer): com.google.android.exoplayer2.metadata.Metadata;
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
				export module metadata {
					export class MetadataInputBuffer extends com.google.android.exoplayer2.decoder.DecoderInputBuffer {
						public static class: java.lang.Class<com.google.android.exoplayer2.metadata.MetadataInputBuffer>;
						public subsampleOffsetUs: number;
						public constructor();
						public constructor(bufferReplacementMode: number, paddingSize: number);
						public constructor(bufferReplacementMode: number);
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
				export module metadata {
					export class MetadataOutput extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.metadata.MetadataOutput>;
						/**
						 * Constructs a new instance of the com.google.android.exoplayer2.metadata.MetadataOutput interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onMetadata(metadata0: com.google.android.exoplayer2.metadata.Metadata): void;
						});
						public constructor();
						public onMetadata(metadata0: com.google.android.exoplayer2.metadata.Metadata): void;
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
				export module metadata {
					export abstract class SimpleMetadataDecoder extends java.lang.Object implements com.google.android.exoplayer2.metadata.MetadataDecoder {
						public static class: java.lang.Class<com.google.android.exoplayer2.metadata.SimpleMetadataDecoder>;
						public constructor();
						public decode(inputBuffer: com.google.android.exoplayer2.metadata.MetadataInputBuffer): com.google.android.exoplayer2.metadata.Metadata;
						public decode(metadataInputBuffer0: com.google.android.exoplayer2.metadata.MetadataInputBuffer, byteBuffer1: java.nio.ByteBuffer): com.google.android.exoplayer2.metadata.Metadata;
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
				export module metadata {
					export module emsg {
						export class EventMessage extends java.lang.Object implements com.google.android.exoplayer2.metadata.Metadata.Entry {
							public static class: java.lang.Class<com.google.android.exoplayer2.metadata.emsg.EventMessage>;
							public static ID3_SCHEME_ID_AOM: string;
							public static SCTE35_SCHEME_ID: string;
							public schemeIdUri: string;
							public value: string;
							public durationMs: number;
							public id: number;
							public messageData: native.Array<number>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.exoplayer2.metadata.emsg.EventMessage>;
							public getWrappedMetadataFormat(): com.google.android.exoplayer2.Format;
							public hashCode(): number;
							public constructor(schemeIdUri: string, value: string, durationMs: number, id: number, messageData: native.Array<number>);
							public describeContents(): number;
							public writeToParcel(dest: globalAndroid.os.Parcel, flags: number): void;
							public getWrappedMetadataBytes(): native.Array<number>;
							public equals(obj: any): boolean;
							public toString(): string;
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
				export module metadata {
					export module emsg {
						export class EventMessageDecoder extends com.google.android.exoplayer2.metadata.SimpleMetadataDecoder {
							public static class: java.lang.Class<com.google.android.exoplayer2.metadata.emsg.EventMessageDecoder>;
							public constructor();
							public decode(emsgData: com.google.android.exoplayer2.util.ParsableByteArray): com.google.android.exoplayer2.metadata.emsg.EventMessage;
							public decode(metadataInputBuffer0: com.google.android.exoplayer2.metadata.MetadataInputBuffer, byteBuffer1: java.nio.ByteBuffer): com.google.android.exoplayer2.metadata.Metadata;
							public decode(inputBuffer: com.google.android.exoplayer2.metadata.MetadataInputBuffer, buffer: java.nio.ByteBuffer): com.google.android.exoplayer2.metadata.Metadata;
							public decode(inputBuffer: com.google.android.exoplayer2.metadata.MetadataInputBuffer): com.google.android.exoplayer2.metadata.Metadata;
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
				export module metadata {
					export module emsg {
						export class EventMessageEncoder extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.metadata.emsg.EventMessageEncoder>;
							public constructor();
							public encode(eventMessage: com.google.android.exoplayer2.metadata.emsg.EventMessage): native.Array<number>;
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
				export module metadata {
					export module flac {
						export class PictureFrame extends java.lang.Object implements com.google.android.exoplayer2.metadata.Metadata.Entry {
							public static class: java.lang.Class<com.google.android.exoplayer2.metadata.flac.PictureFrame>;
							public pictureType: number;
							public mimeType: string;
							public description: string;
							public width: number;
							public height: number;
							public depth: number;
							public colors: number;
							public pictureData: native.Array<number>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.exoplayer2.metadata.flac.PictureFrame>;
							public getWrappedMetadataFormat(): com.google.android.exoplayer2.Format;
							public constructor(pictureType: number, mimeType: string, description: string, width: number, height: number, depth: number, colors: number, pictureData: native.Array<number>);
							public hashCode(): number;
							public writeToParcel(dest: globalAndroid.os.Parcel, flags: number): void;
							public describeContents(): number;
							public getWrappedMetadataBytes(): native.Array<number>;
							public equals(obj: any): boolean;
							public toString(): string;
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
				export module metadata {
					export module flac {
						export class VorbisComment extends java.lang.Object implements com.google.android.exoplayer2.metadata.Metadata.Entry {
							public static class: java.lang.Class<com.google.android.exoplayer2.metadata.flac.VorbisComment>;
							public key: string;
							public value: string;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.exoplayer2.metadata.flac.VorbisComment>;
							public getWrappedMetadataFormat(): com.google.android.exoplayer2.Format;
							public hashCode(): number;
							public writeToParcel(dest: globalAndroid.os.Parcel, flags: number): void;
							public describeContents(): number;
							public getWrappedMetadataBytes(): native.Array<number>;
							public equals(obj: any): boolean;
							public toString(): string;
							public constructor(key: string, value: string);
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
				export module metadata {
					export module id3 {
						export class ApicFrame extends com.google.android.exoplayer2.metadata.id3.Id3Frame {
							public static class: java.lang.Class<com.google.android.exoplayer2.metadata.id3.ApicFrame>;
							public static ID: string;
							public mimeType: string;
							public description: string;
							public pictureType: number;
							public pictureData: native.Array<number>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.exoplayer2.metadata.id3.ApicFrame>;
							public getWrappedMetadataFormat(): com.google.android.exoplayer2.Format;
							public constructor(mimeType: string, description: string, pictureType: number, pictureData: native.Array<number>);
							public hashCode(): number;
							public writeToParcel(dest: globalAndroid.os.Parcel, flags: number): void;
							public getWrappedMetadataBytes(): native.Array<number>;
							public equals(obj: any): boolean;
							public constructor(id: string);
							public toString(): string;
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
				export module metadata {
					export module id3 {
						export class BinaryFrame extends com.google.android.exoplayer2.metadata.id3.Id3Frame {
							public static class: java.lang.Class<com.google.android.exoplayer2.metadata.id3.BinaryFrame>;
							public data: native.Array<number>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.exoplayer2.metadata.id3.BinaryFrame>;
							public getWrappedMetadataFormat(): com.google.android.exoplayer2.Format;
							public hashCode(): number;
							public writeToParcel(dest: globalAndroid.os.Parcel, flags: number): void;
							public getWrappedMetadataBytes(): native.Array<number>;
							public equals(obj: any): boolean;
							public constructor(id: string);
							public constructor(id: string, data: native.Array<number>);
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
				export module metadata {
					export module id3 {
						export class ChapterFrame extends com.google.android.exoplayer2.metadata.id3.Id3Frame {
							public static class: java.lang.Class<com.google.android.exoplayer2.metadata.id3.ChapterFrame>;
							public static ID: string;
							public chapterId: string;
							public startTimeMs: number;
							public endTimeMs: number;
							public startOffset: number;
							public endOffset: number;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.exoplayer2.metadata.id3.ChapterFrame>;
							public getWrappedMetadataFormat(): com.google.android.exoplayer2.Format;
							public hashCode(): number;
							public getSubFrameCount(): number;
							public writeToParcel(dest: globalAndroid.os.Parcel, flags: number): void;
							public describeContents(): number;
							public constructor(chapterId: string, startTimeMs: number, endTimeMs: number, startOffset: number, endOffset: number, subFrames: native.Array<com.google.android.exoplayer2.metadata.id3.Id3Frame>);
							public getWrappedMetadataBytes(): native.Array<number>;
							public getSubFrame(index: number): com.google.android.exoplayer2.metadata.id3.Id3Frame;
							public equals(obj: any): boolean;
							public constructor(id: string);
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
				export module metadata {
					export module id3 {
						export class ChapterTocFrame extends com.google.android.exoplayer2.metadata.id3.Id3Frame {
							public static class: java.lang.Class<com.google.android.exoplayer2.metadata.id3.ChapterTocFrame>;
							public static ID: string;
							public elementId: string;
							public isRoot: boolean;
							public isOrdered: boolean;
							public children: native.Array<string>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.exoplayer2.metadata.id3.ChapterTocFrame>;
							public constructor(elementId: string, isRoot: boolean, isOrdered: boolean, children: native.Array<string>, subFrames: native.Array<com.google.android.exoplayer2.metadata.id3.Id3Frame>);
							public getWrappedMetadataFormat(): com.google.android.exoplayer2.Format;
							public hashCode(): number;
							public getSubFrameCount(): number;
							public writeToParcel(dest: globalAndroid.os.Parcel, flags: number): void;
							public getWrappedMetadataBytes(): native.Array<number>;
							public getSubFrame(index: number): com.google.android.exoplayer2.metadata.id3.Id3Frame;
							public equals(obj: any): boolean;
							public constructor(id: string);
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
				export module metadata {
					export module id3 {
						export class CommentFrame extends com.google.android.exoplayer2.metadata.id3.Id3Frame {
							public static class: java.lang.Class<com.google.android.exoplayer2.metadata.id3.CommentFrame>;
							public static ID: string;
							public language: string;
							public description: string;
							public text: string;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.exoplayer2.metadata.id3.CommentFrame>;
							public getWrappedMetadataFormat(): com.google.android.exoplayer2.Format;
							public hashCode(): number;
							public constructor(language: string, description: string, text: string);
							public writeToParcel(dest: globalAndroid.os.Parcel, flags: number): void;
							public getWrappedMetadataBytes(): native.Array<number>;
							public equals(obj: any): boolean;
							public constructor(id: string);
							public toString(): string;
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
				export module metadata {
					export module id3 {
						export class GeobFrame extends com.google.android.exoplayer2.metadata.id3.Id3Frame {
							public static class: java.lang.Class<com.google.android.exoplayer2.metadata.id3.GeobFrame>;
							public static ID: string;
							public mimeType: string;
							public filename: string;
							public description: string;
							public data: native.Array<number>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.exoplayer2.metadata.id3.GeobFrame>;
							public constructor(mimeType: string, filename: string, description: string, data: native.Array<number>);
							public getWrappedMetadataFormat(): com.google.android.exoplayer2.Format;
							public hashCode(): number;
							public writeToParcel(dest: globalAndroid.os.Parcel, flags: number): void;
							public getWrappedMetadataBytes(): native.Array<number>;
							public equals(obj: any): boolean;
							public constructor(id: string);
							public toString(): string;
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
				export module metadata {
					export module id3 {
						export class Id3Decoder extends com.google.android.exoplayer2.metadata.SimpleMetadataDecoder {
							public static class: java.lang.Class<com.google.android.exoplayer2.metadata.id3.Id3Decoder>;
							public static NO_FRAMES_PREDICATE: com.google.android.exoplayer2.metadata.id3.Id3Decoder.FramePredicate;
							public static ID3_TAG: number;
							public static ID3_HEADER_LENGTH: number;
							public constructor();
							public decode(metadataInputBuffer0: com.google.android.exoplayer2.metadata.MetadataInputBuffer, byteBuffer1: java.nio.ByteBuffer): com.google.android.exoplayer2.metadata.Metadata;
							public constructor(framePredicate: com.google.android.exoplayer2.metadata.id3.Id3Decoder.FramePredicate);
							public decode(inputBuffer: com.google.android.exoplayer2.metadata.MetadataInputBuffer, buffer: java.nio.ByteBuffer): com.google.android.exoplayer2.metadata.Metadata;
							public decode(data: native.Array<number>, size: number): com.google.android.exoplayer2.metadata.Metadata;
							public decode(inputBuffer: com.google.android.exoplayer2.metadata.MetadataInputBuffer): com.google.android.exoplayer2.metadata.Metadata;
						}
						export module Id3Decoder {
							export class FramePredicate extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.metadata.id3.Id3Decoder.FramePredicate>;
								/**
								 * Constructs a new instance of the com.google.android.exoplayer2.metadata.id3.Id3Decoder() when extending the interface class.
								 */
								public constructor(implementation: {
									evaluate(int0: number, int1: number, int2: number, int3: number, int4: number): boolean;
								});
								public constructor();
								public evaluate(int0: number, int1: number, int2: number, int3: number, int4: number): boolean;
							}
							export class Id3Header extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.metadata.id3.Id3Decoder.Id3Header>;
								public constructor(majorVersion: number, isUnsynchronized: boolean, framesSize: number);
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
				export module metadata {
					export module id3 {
						export abstract class Id3Frame extends java.lang.Object implements com.google.android.exoplayer2.metadata.Metadata.Entry {
							public static class: java.lang.Class<com.google.android.exoplayer2.metadata.id3.Id3Frame>;
							public id: string;
							public getWrappedMetadataFormat(): com.google.android.exoplayer2.Format;
							public writeToParcel(parcel0: globalAndroid.os.Parcel, int1: number): void;
							public describeContents(): number;
							public getWrappedMetadataBytes(): native.Array<number>;
							public constructor(id: string);
							public toString(): string;
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
				export module metadata {
					export module id3 {
						export class InternalFrame extends com.google.android.exoplayer2.metadata.id3.Id3Frame {
							public static class: java.lang.Class<com.google.android.exoplayer2.metadata.id3.InternalFrame>;
							public static ID: string;
							public domain: string;
							public description: string;
							public text: string;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.exoplayer2.metadata.id3.InternalFrame>;
							public getWrappedMetadataFormat(): com.google.android.exoplayer2.Format;
							public hashCode(): number;
							public constructor(domain: string, description: string, text: string);
							public writeToParcel(dest: globalAndroid.os.Parcel, flags: number): void;
							public getWrappedMetadataBytes(): native.Array<number>;
							public equals(obj: any): boolean;
							public constructor(id: string);
							public toString(): string;
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
				export module metadata {
					export module id3 {
						export class MlltFrame extends com.google.android.exoplayer2.metadata.id3.Id3Frame {
							public static class: java.lang.Class<com.google.android.exoplayer2.metadata.id3.MlltFrame>;
							public static ID: string;
							public mpegFramesBetweenReference: number;
							public bytesBetweenReference: number;
							public millisecondsBetweenReference: number;
							public bytesDeviations: native.Array<number>;
							public millisecondsDeviations: native.Array<number>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.exoplayer2.metadata.id3.MlltFrame>;
							public getWrappedMetadataFormat(): com.google.android.exoplayer2.Format;
							public hashCode(): number;
							public constructor(mpegFramesBetweenReference: number, bytesBetweenReference: number, millisecondsBetweenReference: number, bytesDeviations: native.Array<number>, millisecondsDeviations: native.Array<number>);
							public writeToParcel(dest: globalAndroid.os.Parcel, flags: number): void;
							public describeContents(): number;
							public getWrappedMetadataBytes(): native.Array<number>;
							public equals(obj: any): boolean;
							public constructor(id: string);
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
				export module metadata {
					export module id3 {
						export class PrivFrame extends com.google.android.exoplayer2.metadata.id3.Id3Frame {
							public static class: java.lang.Class<com.google.android.exoplayer2.metadata.id3.PrivFrame>;
							public static ID: string;
							public owner: string;
							public privateData: native.Array<number>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.exoplayer2.metadata.id3.PrivFrame>;
							public getWrappedMetadataFormat(): com.google.android.exoplayer2.Format;
							public hashCode(): number;
							public writeToParcel(dest: globalAndroid.os.Parcel, flags: number): void;
							public getWrappedMetadataBytes(): native.Array<number>;
							public equals(obj: any): boolean;
							public constructor(owner: string, privateData: native.Array<number>);
							public constructor(id: string);
							public toString(): string;
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
				export module metadata {
					export module id3 {
						export class TextInformationFrame extends com.google.android.exoplayer2.metadata.id3.Id3Frame {
							public static class: java.lang.Class<com.google.android.exoplayer2.metadata.id3.TextInformationFrame>;
							public description: string;
							public value: string;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.exoplayer2.metadata.id3.TextInformationFrame>;
							public getWrappedMetadataFormat(): com.google.android.exoplayer2.Format;
							public hashCode(): number;
							public writeToParcel(dest: globalAndroid.os.Parcel, flags: number): void;
							public getWrappedMetadataBytes(): native.Array<number>;
							public equals(obj: any): boolean;
							public constructor(id: string);
							public toString(): string;
							public constructor(id: string, description: string, value: string);
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
				export module metadata {
					export module id3 {
						export class UrlLinkFrame extends com.google.android.exoplayer2.metadata.id3.Id3Frame {
							public static class: java.lang.Class<com.google.android.exoplayer2.metadata.id3.UrlLinkFrame>;
							public description: string;
							public url: string;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.exoplayer2.metadata.id3.UrlLinkFrame>;
							public getWrappedMetadataFormat(): com.google.android.exoplayer2.Format;
							public hashCode(): number;
							public writeToParcel(dest: globalAndroid.os.Parcel, flags: number): void;
							public getWrappedMetadataBytes(): native.Array<number>;
							public equals(obj: any): boolean;
							public constructor(id: string, description: string, url: string);
							public constructor(id: string);
							public toString(): string;
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
				export module metadata {
					export module mp4 {
						export class MdtaMetadataEntry extends java.lang.Object implements com.google.android.exoplayer2.metadata.Metadata.Entry {
							public static class: java.lang.Class<com.google.android.exoplayer2.metadata.mp4.MdtaMetadataEntry>;
							public static KEY_ANDROID_CAPTURE_FPS: string;
							public key: string;
							public value: native.Array<number>;
							public localeIndicator: number;
							public typeIndicator: number;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.exoplayer2.metadata.mp4.MdtaMetadataEntry>;
							public getWrappedMetadataFormat(): com.google.android.exoplayer2.Format;
							public constructor(key: string, value: native.Array<number>, localeIndicator: number, typeIndicator: number);
							public hashCode(): number;
							public writeToParcel(dest: globalAndroid.os.Parcel, flags: number): void;
							public describeContents(): number;
							public getWrappedMetadataBytes(): native.Array<number>;
							public equals(obj: any): boolean;
							public toString(): string;
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
				export module metadata {
					export module mp4 {
						export class MotionPhotoMetadata extends java.lang.Object implements com.google.android.exoplayer2.metadata.Metadata.Entry {
							public static class: java.lang.Class<com.google.android.exoplayer2.metadata.mp4.MotionPhotoMetadata>;
							public photoStartPosition: number;
							public photoSize: number;
							public photoPresentationTimestampUs: number;
							public videoStartPosition: number;
							public videoSize: number;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.exoplayer2.metadata.mp4.MotionPhotoMetadata>;
							public getWrappedMetadataFormat(): com.google.android.exoplayer2.Format;
							public hashCode(): number;
							public writeToParcel(dest: globalAndroid.os.Parcel, flags: number): void;
							public describeContents(): number;
							public getWrappedMetadataBytes(): native.Array<number>;
							public equals(obj: any): boolean;
							public toString(): string;
							public constructor(photoStartPosition: number, photoSize: number, photoPresentationTimestampUs: number, videoStartPosition: number, videoSize: number);
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
				export module metadata {
					export module mp4 {
						export class SlowMotionData extends java.lang.Object implements com.google.android.exoplayer2.metadata.Metadata.Entry {
							public static class: java.lang.Class<com.google.android.exoplayer2.metadata.mp4.SlowMotionData>;
							public segments: java.util.List<com.google.android.exoplayer2.metadata.mp4.SlowMotionData.Segment>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.exoplayer2.metadata.mp4.SlowMotionData>;
							public getWrappedMetadataFormat(): com.google.android.exoplayer2.Format;
							public hashCode(): number;
							public describeContents(): number;
							public writeToParcel(dest: globalAndroid.os.Parcel, flags: number): void;
							public getWrappedMetadataBytes(): native.Array<number>;
							public equals(obj: any): boolean;
							public toString(): string;
							public equals(o: any): boolean;
							public constructor(segments: java.util.List<com.google.android.exoplayer2.metadata.mp4.SlowMotionData.Segment>);
						}
						export module SlowMotionData {
							export class Segment extends java.lang.Object implements globalAndroid.os.Parcelable {
								public static class: java.lang.Class<com.google.android.exoplayer2.metadata.mp4.SlowMotionData.Segment>;
								public static BY_START_THEN_END_THEN_DIVISOR: java.util.Comparator<com.google.android.exoplayer2.metadata.mp4.SlowMotionData.Segment>;
								public startTimeMs: number;
								public endTimeMs: number;
								public speedDivisor: number;
								public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.exoplayer2.metadata.mp4.SlowMotionData.Segment>;
								public toString(): string;
								public describeContents(): number;
								public equals(obj: any): boolean;
								public constructor(startTimeMs: number, endTimeMs: number, speedDivisor: number);
								public equals(o: any): boolean;
								public writeToParcel(dest: globalAndroid.os.Parcel, flags: number): void;
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
				export module metadata {
					export module mp4 {
						export class SmtaMetadataEntry extends java.lang.Object implements com.google.android.exoplayer2.metadata.Metadata.Entry {
							public static class: java.lang.Class<com.google.android.exoplayer2.metadata.mp4.SmtaMetadataEntry>;
							public captureFrameRate: number;
							public svcTemporalLayerCount: number;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.exoplayer2.metadata.mp4.SmtaMetadataEntry>;
							public getWrappedMetadataFormat(): com.google.android.exoplayer2.Format;
							public constructor(captureFrameRate: number, svcTemporalLayerCount: number);
							public hashCode(): number;
							public writeToParcel(dest: globalAndroid.os.Parcel, flags: number): void;
							public describeContents(): number;
							public getWrappedMetadataBytes(): native.Array<number>;
							public equals(obj: any): boolean;
							public toString(): string;
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
				export module offline {
					export class StreamKey extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.offline.StreamKey>;
						public periodIndex: number;
						public groupIndex: number;
						public trackIndex: number;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.exoplayer2.offline.StreamKey>;
						public equals(obj: any): boolean;
						public describeContents(): number;
						public constructor(periodIndex: number, groupIndex: number, trackIndex: number);
						public compareTo(o: com.google.android.exoplayer2.offline.StreamKey): number;
						public constructor(groupIndex: number, trackIndex: number);
						public hashCode(): number;
						public equals(o: any): boolean;
						public toString(): string;
						public writeToParcel(dest: globalAndroid.os.Parcel, flags: number): void;
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
					export class MediaPeriodId extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.source.MediaPeriodId>;
						public periodUid: any;
						public adGroupIndex: number;
						public adIndexInAdGroup: number;
						public windowSequenceNumber: number;
						public nextAdGroupIndex: number;
						public isAd(): boolean;
						public equals(obj: any): boolean;
						public constructor(periodUid: any, windowSequenceNumber: number, nextAdGroupIndex: number);
						public hashCode(): number;
						public constructor(mediaPeriodId: com.google.android.exoplayer2.source.MediaPeriodId);
						public constructor(periodUid: any);
						public constructor(periodUid: any, windowSequenceNumber: number);
						public constructor(periodUid: any, adGroupIndex: number, adIndexInAdGroup: number, windowSequenceNumber: number);
						public copyWithPeriodUid(newPeriodUid: any): com.google.android.exoplayer2.source.MediaPeriodId;
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
					export class TrackGroup extends java.lang.Object implements globalAndroid.os.Parcelable {
						public static class: java.lang.Class<com.google.android.exoplayer2.source.TrackGroup>;
						public length: number;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.exoplayer2.source.TrackGroup>;
						public equals(obj: any): boolean;
						public describeContents(): number;
						public getFormat(index: number): com.google.android.exoplayer2.Format;
						public hashCode(): number;
						public constructor(formats: native.Array<com.google.android.exoplayer2.Format>);
						public indexOf(format: com.google.android.exoplayer2.Format): number;
						public writeToParcel(dest: globalAndroid.os.Parcel, flags: number): void;
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
					export class TrackGroupArray extends java.lang.Object implements globalAndroid.os.Parcelable {
						public static class: java.lang.Class<com.google.android.exoplayer2.source.TrackGroupArray>;
						public static EMPTY: com.google.android.exoplayer2.source.TrackGroupArray;
						public length: number;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.exoplayer2.source.TrackGroupArray>;
						public constructor(trackGroups: native.Array<com.google.android.exoplayer2.source.TrackGroup>);
						public get(index: number): com.google.android.exoplayer2.source.TrackGroup;
						public equals(obj: any): boolean;
						public describeContents(): number;
						public isEmpty(): boolean;
						public hashCode(): number;
						public indexOf(group: com.google.android.exoplayer2.source.TrackGroup): number;
						public writeToParcel(dest: globalAndroid.os.Parcel, flags: number): void;
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
					export module ads {
						export class AdPlaybackState extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.source.ads.AdPlaybackState>;
							public static AD_STATE_UNAVAILABLE: number;
							public static AD_STATE_AVAILABLE: number;
							public static AD_STATE_SKIPPED: number;
							public static AD_STATE_PLAYED: number;
							public static AD_STATE_ERROR: number;
							public static NONE: com.google.android.exoplayer2.source.ads.AdPlaybackState;
							public adsId: any;
							public adGroupCount: number;
							public adGroupTimesUs: native.Array<number>;
							public adGroups: native.Array<com.google.android.exoplayer2.source.ads.AdPlaybackState.AdGroup>;
							public adResumePositionUs: number;
							public contentDurationUs: number;
							public constructor(adsId: any, adGroupTimesUs: native.Array<number>);
							public withAdDurationsUs(adDurationUs: native.Array<native.Array<number>>): com.google.android.exoplayer2.source.ads.AdPlaybackState;
							public hashCode(): number;
							public withContentDurationUs(contentDurationUs: number): com.google.android.exoplayer2.source.ads.AdPlaybackState;
							public equals(obj: any): boolean;
							public isAdInErrorState(adGroupIndex: number, adIndexInAdGroup: number): boolean;
							public withPlayedAd(adGroupIndex: number, adIndexInAdGroup: number): com.google.android.exoplayer2.source.ads.AdPlaybackState;
							public withAdResumePositionUs(adResumePositionUs: number): com.google.android.exoplayer2.source.ads.AdPlaybackState;
							public toString(): string;
							public withAdUri(adGroupIndex: number, adIndexInAdGroup: number, uri: globalAndroid.net.Uri): com.google.android.exoplayer2.source.ads.AdPlaybackState;
							public withSkippedAdGroup(adGroupIndex: number): com.google.android.exoplayer2.source.ads.AdPlaybackState;
							public withSkippedAd(adGroupIndex: number, adIndexInAdGroup: number): com.google.android.exoplayer2.source.ads.AdPlaybackState;
							public getAdGroupIndexForPositionUs(positionUs: number, periodDurationUs: number): number;
							public equals(o: any): boolean;
							public getAdGroupIndexAfterPositionUs(positionUs: number, periodDurationUs: number): number;
							public withAdLoadError(adGroupIndex: number, adIndexInAdGroup: number): com.google.android.exoplayer2.source.ads.AdPlaybackState;
							public withAdCount(adGroupIndex: number, adCount: number): com.google.android.exoplayer2.source.ads.AdPlaybackState;
						}
						export module AdPlaybackState {
							export class AdGroup extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.ads.AdPlaybackState.AdGroup>;
								public count: number;
								public uris: native.Array<globalAndroid.net.Uri>;
								public states: native.Array<number>;
								public durationsUs: native.Array<number>;
								public getNextAdIndexToPlay(lastPlayedAdIndex: number): number;
								public equals(obj: any): boolean;
								public withAllAdsSkipped(): com.google.android.exoplayer2.source.ads.AdPlaybackState.AdGroup;
								public getFirstAdIndexToPlay(): number;
								public hasUnplayedAds(): boolean;
								public withAdState(state: number, index: number): com.google.android.exoplayer2.source.ads.AdPlaybackState.AdGroup;
								public constructor();
								public withAdCount(count: number): com.google.android.exoplayer2.source.ads.AdPlaybackState.AdGroup;
								public equals(o: any): boolean;
								public withAdDurationsUs(durationsUs: native.Array<number>): com.google.android.exoplayer2.source.ads.AdPlaybackState.AdGroup;
								public hashCode(): number;
								public withAdUri(uri: globalAndroid.net.Uri, index: number): com.google.android.exoplayer2.source.ads.AdPlaybackState.AdGroup;
							}
							export class AdState extends java.lang.Object implements java.lang.annotation.Annotation {
								public static class: java.lang.Class<com.google.android.exoplayer2.source.ads.AdPlaybackState.AdState>;
								/**
								 * Constructs a new instance of the com.google.android.exoplayer2.source.ads.AdPlaybackState() when extending the interface class.
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
				export module text {
					export class Cue extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.text.Cue>;
						public static EMPTY: com.google.android.exoplayer2.text.Cue;
						public static DIMEN_UNSET: number;
						public static TYPE_UNSET: number;
						public static ANCHOR_TYPE_START: number;
						public static ANCHOR_TYPE_MIDDLE: number;
						public static ANCHOR_TYPE_END: number;
						public static LINE_TYPE_FRACTION: number;
						public static LINE_TYPE_NUMBER: number;
						public static TEXT_SIZE_TYPE_FRACTIONAL: number;
						public static TEXT_SIZE_TYPE_FRACTIONAL_IGNORE_PADDING: number;
						public static TEXT_SIZE_TYPE_ABSOLUTE: number;
						public static VERTICAL_TYPE_RL: number;
						public static VERTICAL_TYPE_LR: number;
						public text: string;
						public textAlignment: globalAndroid.text.Layout.Alignment;
						public bitmap: globalAndroid.graphics.Bitmap;
						public line: number;
						public lineType: number;
						public lineAnchor: number;
						public position: number;
						public positionAnchor: number;
						public size: number;
						public bitmapHeight: number;
						public windowColorSet: boolean;
						public windowColor: number;
						public textSizeType: number;
						public textSize: number;
						public verticalType: number;
						/** @deprecated */
						public constructor(text: string, textAlignment: globalAndroid.text.Layout.Alignment, line: number, lineType: number, lineAnchor: number, position: number, positionAnchor: number, size: number, textSizeType: number, textSize: number);
						/** @deprecated */
						public constructor(text: string);
						/** @deprecated */
						public constructor(text: string, textAlignment: globalAndroid.text.Layout.Alignment, line: number, lineType: number, lineAnchor: number, position: number, positionAnchor: number, size: number, windowColorSet: boolean, windowColor: number);
						/** @deprecated */
						public constructor(text: string, textAlignment: globalAndroid.text.Layout.Alignment, line: number, lineType: number, lineAnchor: number, position: number, positionAnchor: number, size: number);
						public buildUpon(): com.google.android.exoplayer2.text.Cue.Builder;
					}
					export module Cue {
						export class AnchorType extends java.lang.Object implements java.lang.annotation.Annotation {
							public static class: java.lang.Class<com.google.android.exoplayer2.text.Cue.AnchorType>;
							/**
							 * Constructs a new instance of the com.google.android.exoplayer2.text.Cue() when extending the interface class.
							 */
							public constructor(implementation: {
								equals(object0: any): boolean;
								hashCode(): number;
								toString(): string;
								annotationType(): java.lang.Class<any>;
							});
							public constructor();
							public hashCode(): number;
							public annotationType(): java.lang.Class<any>;
							public equals(obj: any): boolean;
							public toString(): string;
						}
						export class Builder extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.text.Cue.Builder>;
							public setVerticalType(verticalType: number): com.google.android.exoplayer2.text.Cue.Builder;
							public setPositionAnchor(positionAnchor: number): com.google.android.exoplayer2.text.Cue.Builder;
							public getLine(): number;
							public getPosition(): number;
							public clearWindowColor(): com.google.android.exoplayer2.text.Cue.Builder;
							public getTextSizeType(): number;
							public setWindowColor(windowColor: number): com.google.android.exoplayer2.text.Cue.Builder;
							public getTextSize(): number;
							public getSize(): number;
							public setTextSize(textSize: number, textSizeType: number): com.google.android.exoplayer2.text.Cue.Builder;
							public build(): com.google.android.exoplayer2.text.Cue;
							public setText(text: string): com.google.android.exoplayer2.text.Cue.Builder;
							public constructor();
							public getText(): string;
							public setSize(size: number): com.google.android.exoplayer2.text.Cue.Builder;
							public getTextAlignment(): globalAndroid.text.Layout.Alignment;
							public getWindowColor(): number;
							public getBitmap(): globalAndroid.graphics.Bitmap;
							public setLineAnchor(lineAnchor: number): com.google.android.exoplayer2.text.Cue.Builder;
							public getLineAnchor(): number;
							public setLine(line: number, lineType: number): com.google.android.exoplayer2.text.Cue.Builder;
							public getLineType(): number;
							public isWindowColorSet(): boolean;
							public setTextAlignment(textAlignment: globalAndroid.text.Layout.Alignment): com.google.android.exoplayer2.text.Cue.Builder;
							public getBitmapHeight(): number;
							public getVerticalType(): number;
							public getPositionAnchor(): number;
							public setBitmap(bitmap: globalAndroid.graphics.Bitmap): com.google.android.exoplayer2.text.Cue.Builder;
							public setBitmapHeight(bitmapHeight: number): com.google.android.exoplayer2.text.Cue.Builder;
							public setPosition(position: number): com.google.android.exoplayer2.text.Cue.Builder;
						}
						export class LineType extends java.lang.Object implements java.lang.annotation.Annotation {
							public static class: java.lang.Class<com.google.android.exoplayer2.text.Cue.LineType>;
							/**
							 * Constructs a new instance of the com.google.android.exoplayer2.text.Cue() when extending the interface class.
							 */
							public constructor(implementation: {
								equals(object0: any): boolean;
								hashCode(): number;
								toString(): string;
								annotationType(): java.lang.Class<any>;
							});
							public constructor();
							public hashCode(): number;
							public annotationType(): java.lang.Class<any>;
							public equals(obj: any): boolean;
							public toString(): string;
						}
						export class TextSizeType extends java.lang.Object implements java.lang.annotation.Annotation {
							public static class: java.lang.Class<com.google.android.exoplayer2.text.Cue.TextSizeType>;
							/**
							 * Constructs a new instance of the com.google.android.exoplayer2.text.Cue() when extending the interface class.
							 */
							public constructor(implementation: {
								equals(object0: any): boolean;
								hashCode(): number;
								toString(): string;
								annotationType(): java.lang.Class<any>;
							});
							public constructor();
							public hashCode(): number;
							public annotationType(): java.lang.Class<any>;
							public equals(obj: any): boolean;
							public toString(): string;
						}
						export class VerticalType extends java.lang.Object implements java.lang.annotation.Annotation {
							public static class: java.lang.Class<com.google.android.exoplayer2.text.Cue.VerticalType>;
							/**
							 * Constructs a new instance of the com.google.android.exoplayer2.text.Cue() when extending the interface class.
							 */
							public constructor(implementation: {
								equals(object0: any): boolean;
								hashCode(): number;
								toString(): string;
								annotationType(): java.lang.Class<any>;
							});
							public constructor();
							public hashCode(): number;
							public annotationType(): java.lang.Class<any>;
							public equals(obj: any): boolean;
							public toString(): string;
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
				export module text {
					export class TextOutput extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.text.TextOutput>;
						/**
						 * Constructs a new instance of the com.google.android.exoplayer2.text.TextOutput interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onCues(list0: java.util.List<com.google.android.exoplayer2.text.Cue>): void;
						});
						public constructor();
						public onCues(list0: java.util.List<com.google.android.exoplayer2.text.Cue>): void;
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
				export module trackselection {
					export class TrackSelection extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.trackselection.TrackSelection>;
						/**
						 * Constructs a new instance of the com.google.android.exoplayer2.trackselection.TrackSelection interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getTrackGroup(): com.google.android.exoplayer2.source.TrackGroup;
							length(): number;
							getFormat(int0: number): com.google.android.exoplayer2.Format;
							getIndexInTrackGroup(int0: number): number;
							indexOf(format0: com.google.android.exoplayer2.Format): number;
							indexOf(int0: number): number;
						});
						public constructor();
						public length(): number;
						public getIndexInTrackGroup(int0: number): number;
						public indexOf(format0: com.google.android.exoplayer2.Format): number;
						public getTrackGroup(): com.google.android.exoplayer2.source.TrackGroup;
						public indexOf(int0: number): number;
						public getFormat(int0: number): com.google.android.exoplayer2.Format;
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
				export module trackselection {
					export class TrackSelectionArray extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.trackselection.TrackSelectionArray>;
						public length: number;
						public equals(obj: any): boolean;
						public getAll(): native.Array<com.google.android.exoplayer2.trackselection.TrackSelection>;
						public hashCode(): number;
						public get(index: number): com.google.android.exoplayer2.trackselection.TrackSelection;
						public constructor(trackSelections: native.Array<com.google.android.exoplayer2.trackselection.TrackSelection>);
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
				export module upstream {
					export abstract class BaseDataSource extends java.lang.Object implements com.google.android.exoplayer2.upstream.DataSource {
						public static class: java.lang.Class<com.google.android.exoplayer2.upstream.BaseDataSource>;
						public constructor(isNetwork: boolean);
						public getResponseHeaders(): java.util.Map<string,java.util.List<string>>;
						public transferEnded(): void;
						public close(): void;
						public transferStarted(dataSpec: com.google.android.exoplayer2.upstream.DataSpec): void;
						public open(dataSpec0: com.google.android.exoplayer2.upstream.DataSpec): number;
						public transferInitializing(dataSpec: com.google.android.exoplayer2.upstream.DataSpec): void;
						public bytesTransferred(bytesTransferred: number): void;
						public read(bytes0: native.Array<number>, int1: number, int2: number): number;
						public addTransferListener(transferListener: com.google.android.exoplayer2.upstream.TransferListener): void;
						public getUri(): globalAndroid.net.Uri;
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
				export module upstream {
					export class DataReader extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.upstream.DataReader>;
						/**
						 * Constructs a new instance of the com.google.android.exoplayer2.upstream.DataReader interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							read(bytes0: native.Array<number>, int1: number, int2: number): number;
						});
						public constructor();
						public read(bytes0: native.Array<number>, int1: number, int2: number): number;
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
				export module upstream {
					export class DataSource extends java.lang.Object implements com.google.android.exoplayer2.upstream.DataReader {
						public static class: java.lang.Class<com.google.android.exoplayer2.upstream.DataSource>;
						/**
						 * Constructs a new instance of the com.google.android.exoplayer2.upstream.DataSource interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							addTransferListener(transferListener0: com.google.android.exoplayer2.upstream.TransferListener): void;
							open(dataSpec0: com.google.android.exoplayer2.upstream.DataSpec): number;
							getUri(): globalAndroid.net.Uri;
							getResponseHeaders(): java.util.Map<string,java.util.List<string>>;
							close(): void;
							read(bytes0: native.Array<number>, int1: number, int2: number): number;
						});
						public constructor();
						public getResponseHeaders(): java.util.Map<string,java.util.List<string>>;
						public addTransferListener(transferListener0: com.google.android.exoplayer2.upstream.TransferListener): void;
						public close(): void;
						public open(dataSpec0: com.google.android.exoplayer2.upstream.DataSpec): number;
						public read(bytes0: native.Array<number>, int1: number, int2: number): number;
						public getUri(): globalAndroid.net.Uri;
					}
					export module DataSource {
						export class Factory extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.upstream.DataSource.Factory>;
							/**
							 * Constructs a new instance of the com.google.android.exoplayer2.upstream.DataSource() when extending the interface class.
							 */
							public constructor(implementation: {
								createDataSource(): com.google.android.exoplayer2.upstream.DataSource;
							});
							public constructor();
							public createDataSource(): com.google.android.exoplayer2.upstream.DataSource;
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
				export module upstream {
					export class DataSourceException extends java.io.IOException {
						public static class: java.lang.Class<com.google.android.exoplayer2.upstream.DataSourceException>;
						public static POSITION_OUT_OF_RANGE: number;
						public reason: number;
						public constructor();
						public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
						public constructor(message: string, cause: java.lang.Throwable);
						public constructor(cause: java.lang.Throwable);
						public constructor(message: string);
						public constructor(reason: number);
						public static isCausedByPositionOutOfRange(e: java.io.IOException): boolean;
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
				export module upstream {
					export class DataSpec extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.upstream.DataSpec>;
						public static FLAG_ALLOW_GZIP: number;
						public static FLAG_DONT_CACHE_IF_LENGTH_UNKNOWN: number;
						public static FLAG_ALLOW_CACHE_FRAGMENTATION: number;
						public static FLAG_MIGHT_NOT_USE_FULL_NETWORK_SPEED: number;
						public static HTTP_METHOD_GET: number;
						public static HTTP_METHOD_POST: number;
						public static HTTP_METHOD_HEAD: number;
						public uri: globalAndroid.net.Uri;
						public uriPositionOffset: number;
						public httpMethod: number;
						public httpBody: native.Array<number>;
						public httpRequestHeaders: java.util.Map<string,string>;
						public absoluteStreamPosition: number;
						public position: number;
						public length: number;
						public key: string;
						public flags: number;
						public customData: any;
						public getHttpMethodString(): string;
						public withAdditionalHeaders(additionalHttpRequestHeaders: java.util.Map<string,string>): com.google.android.exoplayer2.upstream.DataSpec;
						public constructor(uri: globalAndroid.net.Uri);
						public buildUpon(): com.google.android.exoplayer2.upstream.DataSpec.Builder;
						public withRequestHeaders(httpRequestHeaders: java.util.Map<string,string>): com.google.android.exoplayer2.upstream.DataSpec;
						public constructor(uri: globalAndroid.net.Uri, position: number, length: number);
						/** @deprecated */
						public constructor(uri: globalAndroid.net.Uri, position: number, length: number, key: string, flags: number, httpRequestHeaders: java.util.Map<string,string>);
						/** @deprecated */
						public constructor(uri: globalAndroid.net.Uri, httpMethod: number, httpBody: native.Array<number>, absoluteStreamPosition: number, position: number, length: number, key: string, flags: number, httpRequestHeaders: java.util.Map<string,string>);
						/** @deprecated */
						public constructor(uri: globalAndroid.net.Uri, absoluteStreamPosition: number, position: number, length: number, key: string, flags: number);
						/** @deprecated */
						public constructor(uri: globalAndroid.net.Uri, flags: number);
						public withUri(uri: globalAndroid.net.Uri): com.google.android.exoplayer2.upstream.DataSpec;
						public subrange(offset: number, length: number): com.google.android.exoplayer2.upstream.DataSpec;
						public static getStringForHttpMethod(httpMethod: number): string;
						public toString(): string;
						/** @deprecated */
						public constructor(uri: globalAndroid.net.Uri, httpMethod: number, httpBody: native.Array<number>, absoluteStreamPosition: number, position: number, length: number, key: string, flags: number);
						public subrange(offset: number): com.google.android.exoplayer2.upstream.DataSpec;
						/** @deprecated */
						public constructor(uri: globalAndroid.net.Uri, position: number, length: number, key: string);
						/** @deprecated */
						public constructor(uri: globalAndroid.net.Uri, position: number, length: number, key: string, flags: number);
						public isFlagSet(flag: number): boolean;
						/** @deprecated */
						public constructor(uri: globalAndroid.net.Uri, postBody: native.Array<number>, absoluteStreamPosition: number, position: number, length: number, key: string, flags: number);
					}
					export module DataSpec {
						export class Builder extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.upstream.DataSpec.Builder>;
							public constructor();
							public setHttpMethod(httpMethod: number): com.google.android.exoplayer2.upstream.DataSpec.Builder;
							public setLength(length: number): com.google.android.exoplayer2.upstream.DataSpec.Builder;
							public setUri(uriString: string): com.google.android.exoplayer2.upstream.DataSpec.Builder;
							public setFlags(flags: number): com.google.android.exoplayer2.upstream.DataSpec.Builder;
							public build(): com.google.android.exoplayer2.upstream.DataSpec;
							public setCustomData(customData: any): com.google.android.exoplayer2.upstream.DataSpec.Builder;
							public setUriPositionOffset(uriPositionOffset: number): com.google.android.exoplayer2.upstream.DataSpec.Builder;
							public setKey(key: string): com.google.android.exoplayer2.upstream.DataSpec.Builder;
							public setHttpBody(httpBody: native.Array<number>): com.google.android.exoplayer2.upstream.DataSpec.Builder;
							public setPosition(position: number): com.google.android.exoplayer2.upstream.DataSpec.Builder;
							public setHttpRequestHeaders(httpRequestHeaders: java.util.Map<string,string>): com.google.android.exoplayer2.upstream.DataSpec.Builder;
							public setUri(uri: globalAndroid.net.Uri): com.google.android.exoplayer2.upstream.DataSpec.Builder;
						}
						export class Flags extends java.lang.Object implements java.lang.annotation.Annotation {
							public static class: java.lang.Class<com.google.android.exoplayer2.upstream.DataSpec.Flags>;
							/**
							 * Constructs a new instance of the com.google.android.exoplayer2.upstream.DataSpec() when extending the interface class.
							 */
							public constructor(implementation: {
								equals(object0: any): boolean;
								hashCode(): number;
								toString(): string;
								annotationType(): java.lang.Class<any>;
							});
							public constructor();
							public hashCode(): number;
							public annotationType(): java.lang.Class<any>;
							public equals(obj: any): boolean;
							public toString(): string;
						}
						export class HttpMethod extends java.lang.Object implements java.lang.annotation.Annotation {
							public static class: java.lang.Class<com.google.android.exoplayer2.upstream.DataSpec.HttpMethod>;
							/**
							 * Constructs a new instance of the com.google.android.exoplayer2.upstream.DataSpec() when extending the interface class.
							 */
							public constructor(implementation: {
								equals(object0: any): boolean;
								hashCode(): number;
								toString(): string;
								annotationType(): java.lang.Class<any>;
							});
							public constructor();
							public hashCode(): number;
							public annotationType(): java.lang.Class<any>;
							public equals(obj: any): boolean;
							public toString(): string;
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
				export module upstream {
					export class DefaultHttpDataSource extends com.google.android.exoplayer2.upstream.BaseDataSource implements com.google.android.exoplayer2.upstream.HttpDataSource {
						public static class: java.lang.Class<com.google.android.exoplayer2.upstream.DefaultHttpDataSource>;
						public static DEFAULT_CONNECT_TIMEOUT_MILLIS: number;
						public static DEFAULT_READ_TIMEOUT_MILLIS: number;
						public constructor(isNetwork: boolean);
						public clearAllRequestProperties(): void;
						/** @deprecated */
						public constructor(userAgent: string);
						/** @deprecated */
						public constructor(userAgent: string, connectTimeoutMillis: number, readTimeoutMillis: number);
						public close(): void;
						/** @deprecated */
						public setContentTypePredicate(contentTypePredicate: com.google.common.base.Predicate<string>): void;
						public getResponseCode(): number;
						public bytesRead(): number;
						public read(buffer: native.Array<number>, offset: number, readLength: number): number;
						public getUri(): globalAndroid.net.Uri;
						public getResponseHeaders(): java.util.Map<string,java.util.List<string>>;
						public clearRequestProperty(name: string): void;
						public bytesSkipped(): number;
						/** @deprecated */
						public constructor(userAgent: string, connectTimeoutMillis: number, readTimeoutMillis: number, allowCrossProtocolRedirects: boolean, defaultRequestProperties: com.google.android.exoplayer2.upstream.HttpDataSource.RequestProperties);
						/** @deprecated */
						public constructor();
						public bytesRemaining(): number;
						public open(dataSpec: com.google.android.exoplayer2.upstream.DataSpec): number;
						public getConnection(): java.net.HttpURLConnection;
						public setRequestProperty(name: string, value: string): void;
						public addTransferListener(transferListener: com.google.android.exoplayer2.upstream.TransferListener): void;
					}
					export module DefaultHttpDataSource {
						export class Factory extends java.lang.Object implements com.google.android.exoplayer2.upstream.HttpDataSource.Factory {
							public static class: java.lang.Class<com.google.android.exoplayer2.upstream.DefaultHttpDataSource.Factory>;
							public constructor();
							public createDataSource(): com.google.android.exoplayer2.upstream.DefaultHttpDataSource;
							public createDataSource(): com.google.android.exoplayer2.upstream.HttpDataSource;
							public setReadTimeoutMs(readTimeoutMs: number): com.google.android.exoplayer2.upstream.DefaultHttpDataSource.Factory;
							public createDataSource(): com.google.android.exoplayer2.upstream.DataSource;
							public setConnectTimeoutMs(connectTimeoutMs: number): com.google.android.exoplayer2.upstream.DefaultHttpDataSource.Factory;
							/** @deprecated */
							public getDefaultRequestProperties(): com.google.android.exoplayer2.upstream.HttpDataSource.RequestProperties;
							public setAllowCrossProtocolRedirects(allowCrossProtocolRedirects: boolean): com.google.android.exoplayer2.upstream.DefaultHttpDataSource.Factory;
							public setDefaultRequestProperties(map0: java.util.Map<string,string>): com.google.android.exoplayer2.upstream.HttpDataSource.Factory;
							public setContentTypePredicate(contentTypePredicate: com.google.common.base.Predicate<string>): com.google.android.exoplayer2.upstream.DefaultHttpDataSource.Factory;
							public setUserAgent(userAgent: string): com.google.android.exoplayer2.upstream.DefaultHttpDataSource.Factory;
							public setDefaultRequestProperties(defaultRequestProperties: java.util.Map<string,string>): com.google.android.exoplayer2.upstream.DefaultHttpDataSource.Factory;
							public setTransferListener(transferListener: com.google.android.exoplayer2.upstream.TransferListener): com.google.android.exoplayer2.upstream.DefaultHttpDataSource.Factory;
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
				export module upstream {
					export class HttpDataSource extends java.lang.Object implements com.google.android.exoplayer2.upstream.DataSource {
						public static class: java.lang.Class<com.google.android.exoplayer2.upstream.HttpDataSource>;
						/**
						 * Constructs a new instance of the com.google.android.exoplayer2.upstream.HttpDataSource interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							open(dataSpec0: com.google.android.exoplayer2.upstream.DataSpec): number;
							close(): void;
							read(bytes0: native.Array<number>, int1: number, int2: number): number;
							setRequestProperty(string0: string, string1: string): void;
							clearRequestProperty(string0: string): void;
							clearAllRequestProperties(): void;
							getResponseCode(): number;
							getResponseHeaders(): java.util.Map<string,java.util.List<string>>;
							lambda(contentType: string): boolean;
							addTransferListener(transferListener0: com.google.android.exoplayer2.upstream.TransferListener): void;
							open(dataSpec0: com.google.android.exoplayer2.upstream.DataSpec): number;
							getUri(): globalAndroid.net.Uri;
							getResponseHeaders(): java.util.Map<string,java.util.List<string>>;
							close(): void;
							read(bytes0: native.Array<number>, int1: number, int2: number): number;
						});
						public constructor();
						public static REJECT_PAYWALL_TYPES: com.google.common.base.Predicate<string>;
						public clearAllRequestProperties(): void;
						public getResponseHeaders(): java.util.Map<string,java.util.List<string>>;
						public addTransferListener(transferListener0: com.google.android.exoplayer2.upstream.TransferListener): void;
						public close(): void;
						public open(dataSpec0: com.google.android.exoplayer2.upstream.DataSpec): number;
						public getResponseCode(): number;
						public read(bytes0: native.Array<number>, int1: number, int2: number): number;
						public getUri(): globalAndroid.net.Uri;
						public setRequestProperty(string0: string, string1: string): void;
						public clearRequestProperty(string0: string): void;
					}
					export module HttpDataSource {
						export abstract class BaseFactory extends java.lang.Object implements com.google.android.exoplayer2.upstream.HttpDataSource.Factory {
							public static class: java.lang.Class<com.google.android.exoplayer2.upstream.HttpDataSource.BaseFactory>;
							public constructor();
							public createDataSource(): com.google.android.exoplayer2.upstream.HttpDataSource;
							public createDataSourceInternal(requestProperties0: com.google.android.exoplayer2.upstream.HttpDataSource.RequestProperties): com.google.android.exoplayer2.upstream.HttpDataSource;
							public createDataSource(): com.google.android.exoplayer2.upstream.DataSource;
							/** @deprecated */
							public getDefaultRequestProperties(): com.google.android.exoplayer2.upstream.HttpDataSource.RequestProperties;
							public setDefaultRequestProperties(defaultRequestProperties: java.util.Map<string,string>): com.google.android.exoplayer2.upstream.HttpDataSource.Factory;
						}
						export class CleartextNotPermittedException extends com.google.android.exoplayer2.upstream.HttpDataSource.HttpDataSourceException {
							public static class: java.lang.Class<com.google.android.exoplayer2.upstream.HttpDataSource.CleartextNotPermittedException>;
							public constructor();
							public constructor(message: string, cause: java.lang.Throwable);
							public constructor(cause: java.lang.Throwable);
							public constructor(message: string);
							public constructor(message: string, dataSpec: com.google.android.exoplayer2.upstream.DataSpec, type: number);
							public constructor(message: string, cause: java.io.IOException, dataSpec: com.google.android.exoplayer2.upstream.DataSpec, type: number);
							public constructor(cause: java.io.IOException, dataSpec: com.google.android.exoplayer2.upstream.DataSpec, type: number);
							public constructor(dataSpec: com.google.android.exoplayer2.upstream.DataSpec, type: number);
							public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
							public constructor(cause: java.io.IOException, dataSpec: com.google.android.exoplayer2.upstream.DataSpec);
						}
						export class Factory extends java.lang.Object implements com.google.android.exoplayer2.upstream.DataSource.Factory {
							public static class: java.lang.Class<com.google.android.exoplayer2.upstream.HttpDataSource.Factory>;
							/**
							 * Constructs a new instance of the com.google.android.exoplayer2.upstream.HttpDataSource() when extending the interface class.
							 */
							public constructor(implementation: {
								createDataSource(): com.google.android.exoplayer2.upstream.HttpDataSource;
								getDefaultRequestProperties(): com.google.android.exoplayer2.upstream.HttpDataSource.RequestProperties;
								setDefaultRequestProperties(map0: java.util.Map<string,string>): com.google.android.exoplayer2.upstream.HttpDataSource.Factory;
								createDataSource(): com.google.android.exoplayer2.upstream.DataSource;
								createDataSource(): com.google.android.exoplayer2.upstream.DataSource;
							});
							public constructor();
							public createDataSource(): com.google.android.exoplayer2.upstream.HttpDataSource;
							public createDataSource(): com.google.android.exoplayer2.upstream.DataSource;
							/** @deprecated */
							public getDefaultRequestProperties(): com.google.android.exoplayer2.upstream.HttpDataSource.RequestProperties;
							public setDefaultRequestProperties(map0: java.util.Map<string,string>): com.google.android.exoplayer2.upstream.HttpDataSource.Factory;
						}
						export class HttpDataSourceException extends java.io.IOException {
							public static class: java.lang.Class<com.google.android.exoplayer2.upstream.HttpDataSource.HttpDataSourceException>;
							public static TYPE_OPEN: number;
							public static TYPE_READ: number;
							public static TYPE_CLOSE: number;
							public type: number;
							public dataSpec: com.google.android.exoplayer2.upstream.DataSpec;
							public constructor();
							public constructor(message: string, cause: java.lang.Throwable);
							public constructor(cause: java.lang.Throwable);
							public constructor(message: string);
							public constructor(message: string, dataSpec: com.google.android.exoplayer2.upstream.DataSpec, type: number);
							public constructor(message: string, cause: java.io.IOException, dataSpec: com.google.android.exoplayer2.upstream.DataSpec, type: number);
							public constructor(cause: java.io.IOException, dataSpec: com.google.android.exoplayer2.upstream.DataSpec, type: number);
							public constructor(dataSpec: com.google.android.exoplayer2.upstream.DataSpec, type: number);
							public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
						}
						export module HttpDataSourceException {
							export class Type extends java.lang.Object implements java.lang.annotation.Annotation {
								public static class: java.lang.Class<com.google.android.exoplayer2.upstream.HttpDataSource.HttpDataSourceException.Type>;
								/**
								 * Constructs a new instance of the com.google.android.exoplayer2.upstream.HttpDataSource() when extending the interface class.
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
						export class InvalidContentTypeException extends com.google.android.exoplayer2.upstream.HttpDataSource.HttpDataSourceException {
							public static class: java.lang.Class<com.google.android.exoplayer2.upstream.HttpDataSource.InvalidContentTypeException>;
							public contentType: string;
							public constructor();
							public constructor(message: string, cause: java.lang.Throwable);
							public constructor(cause: java.lang.Throwable);
							public constructor(message: string);
							public constructor(message: string, dataSpec: com.google.android.exoplayer2.upstream.DataSpec, type: number);
							public constructor(message: string, cause: java.io.IOException, dataSpec: com.google.android.exoplayer2.upstream.DataSpec, type: number);
							public constructor(contentType: string, dataSpec: com.google.android.exoplayer2.upstream.DataSpec);
							public constructor(cause: java.io.IOException, dataSpec: com.google.android.exoplayer2.upstream.DataSpec, type: number);
							public constructor(dataSpec: com.google.android.exoplayer2.upstream.DataSpec, type: number);
							public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
						}
						export class InvalidResponseCodeException extends com.google.android.exoplayer2.upstream.HttpDataSource.HttpDataSourceException {
							public static class: java.lang.Class<com.google.android.exoplayer2.upstream.HttpDataSource.InvalidResponseCodeException>;
							public responseCode: number;
							public responseMessage: string;
							public headerFields: java.util.Map<string,java.util.List<string>>;
							public responseBody: native.Array<number>;
							public constructor();
							/** @deprecated */
							public constructor(responseCode: number, responseMessage: string, headerFields: java.util.Map<string,java.util.List<string>>, dataSpec: com.google.android.exoplayer2.upstream.DataSpec);
							public constructor(message: string, cause: java.lang.Throwable);
							public constructor(cause: java.lang.Throwable);
							/** @deprecated */
							public constructor(responseCode: number, headerFields: java.util.Map<string,java.util.List<string>>, dataSpec: com.google.android.exoplayer2.upstream.DataSpec);
							public constructor(message: string);
							public constructor(message: string, dataSpec: com.google.android.exoplayer2.upstream.DataSpec, type: number);
							public constructor(message: string, cause: java.io.IOException, dataSpec: com.google.android.exoplayer2.upstream.DataSpec, type: number);
							public constructor(responseCode: number, responseMessage: string, headerFields: java.util.Map<string,java.util.List<string>>, dataSpec: com.google.android.exoplayer2.upstream.DataSpec, responseBody: native.Array<number>);
							public constructor(cause: java.io.IOException, dataSpec: com.google.android.exoplayer2.upstream.DataSpec, type: number);
							public constructor(dataSpec: com.google.android.exoplayer2.upstream.DataSpec, type: number);
							public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
						}
						export class RequestProperties extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.upstream.HttpDataSource.RequestProperties>;
							public constructor();
							public clearAndSet(properties: java.util.Map<string,string>): void;
							public set(name: string, value: string): void;
							public clear(): void;
							public remove(name: string): void;
							public getSnapshot(): java.util.Map<string,string>;
							public set(properties: java.util.Map<string,string>): void;
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
				export module upstream {
					export class TransferListener extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.upstream.TransferListener>;
						/**
						 * Constructs a new instance of the com.google.android.exoplayer2.upstream.TransferListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onTransferInitializing(dataSource0: com.google.android.exoplayer2.upstream.DataSource, dataSpec1: com.google.android.exoplayer2.upstream.DataSpec, boolean2: boolean): void;
							onTransferStart(dataSource0: com.google.android.exoplayer2.upstream.DataSource, dataSpec1: com.google.android.exoplayer2.upstream.DataSpec, boolean2: boolean): void;
							onBytesTransferred(dataSource0: com.google.android.exoplayer2.upstream.DataSource, dataSpec1: com.google.android.exoplayer2.upstream.DataSpec, boolean2: boolean, int3: number): void;
							onTransferEnd(dataSource0: com.google.android.exoplayer2.upstream.DataSource, dataSpec1: com.google.android.exoplayer2.upstream.DataSpec, boolean2: boolean): void;
						});
						public constructor();
						public onTransferEnd(dataSource0: com.google.android.exoplayer2.upstream.DataSource, dataSpec1: com.google.android.exoplayer2.upstream.DataSpec, boolean2: boolean): void;
						public onTransferStart(dataSource0: com.google.android.exoplayer2.upstream.DataSource, dataSpec1: com.google.android.exoplayer2.upstream.DataSpec, boolean2: boolean): void;
						public onTransferInitializing(dataSource0: com.google.android.exoplayer2.upstream.DataSource, dataSpec1: com.google.android.exoplayer2.upstream.DataSpec, boolean2: boolean): void;
						public onBytesTransferred(dataSource0: com.google.android.exoplayer2.upstream.DataSource, dataSpec1: com.google.android.exoplayer2.upstream.DataSpec, boolean2: boolean, int3: number): void;
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
				export module util {
					export class Assertions extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.util.Assertions>;
						public static checkNotEmpty(string: string, errorMessage: any): string;
						public static checkArgument(expression: boolean, errorMessage: any): void;
						public static checkNotNull(reference: any, errorMessage: any): any;
						public static checkMainThread(): void;
						public static checkState(expression: boolean): void;
						public static checkStateNotNull(reference: any, errorMessage: any): any;
						public static checkState(expression: boolean, errorMessage: any): void;
						public static checkStateNotNull(reference: any): any;
						public static checkNotEmpty(string: string): string;
						public static checkArgument(expression: boolean): void;
						public static checkNotNull(reference: any): any;
						public static checkIndex(index: number, start: number, limit: number): number;
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
				export module util {
					export class Clock extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.util.Clock>;
						/**
						 * Constructs a new instance of the com.google.android.exoplayer2.util.Clock interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							currentTimeMillis(): number;
							elapsedRealtime(): number;
							uptimeMillis(): number;
							sleep(long0: number): void;
							createHandler(looper0: globalAndroid.os.Looper, callback1: globalAndroid.os.Handler.Callback): com.google.android.exoplayer2.util.HandlerWrapper;
						});
						public constructor();
						public static DEFAULT: com.google.android.exoplayer2.util.Clock;
						public currentTimeMillis(): number;
						public elapsedRealtime(): number;
						public sleep(long0: number): void;
						public createHandler(looper0: globalAndroid.os.Looper, callback1: globalAndroid.os.Handler.Callback): com.google.android.exoplayer2.util.HandlerWrapper;
						public uptimeMillis(): number;
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
				export module util {
					export class CodecSpecificDataUtil extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.util.CodecSpecificDataUtil>;
						public static buildHevcCodecStringFromSps(bitArray: com.google.android.exoplayer2.util.ParsableNalUnitBitArray): string;
						public static buildNalUnit(data: native.Array<number>, offset: number, length: number): native.Array<number>;
						public static splitNalUnits(data: native.Array<number>): native.Array<native.Array<number>>;
						public static parseAlacAudioSpecificConfig(audioSpecificConfig: native.Array<number>): globalAndroid.util.Pair<java.lang.Integer,java.lang.Integer>;
						public static parseCea708InitializationData(initializationData: java.util.List<native.Array<number>>): boolean;
						public static buildCea708InitializationData(isWideAspectRatio: boolean): java.util.List<native.Array<number>>;
						public static buildAvcCodecString(profileIdc: number, constraintsFlagsAndReservedZero2Bits: number, levelIdc: number): string;
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
				export module util {
					export class ConditionVariable extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.util.ConditionVariable>;
						public block(): void;
						public blockUninterruptible(): void;
						public constructor();
						public block(timeoutMs: number): boolean;
						public constructor(clock: com.google.android.exoplayer2.util.Clock);
						public isOpen(): boolean;
						public open(): boolean;
						public close(): boolean;
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
				export module util {
					export class Consumer<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.util.Consumer<any>>;
						/**
						 * Constructs a new instance of the com.google.android.exoplayer2.util.Consumer<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							accept(object0: T): void;
						});
						public constructor();
						public accept(object0: T): void;
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
				export module util {
					export class CopyOnWriteMultiset<E>  extends java.lang.Iterable<any> {
						public static class: java.lang.Class<com.google.android.exoplayer2.util.CopyOnWriteMultiset<any>>;
						public constructor();
						public add(element: any): void;
						public iterator(): java.util.Iterator<any>;
						public spliterator(): java.util.Spliterator<any>;
						public elementSet(): java.util.Set<any>;
						public remove(element: any): void;
						public forEach(action: any /* any*/): void;
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
				export module util {
					export class FileTypes extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.util.FileTypes>;
						public static UNKNOWN: number;
						public static AC3: number;
						public static AC4: number;
						public static ADTS: number;
						public static AMR: number;
						public static FLAC: number;
						public static FLV: number;
						public static MATROSKA: number;
						public static MP3: number;
						public static MP4: number;
						public static OGG: number;
						public static PS: number;
						public static TS: number;
						public static WAV: number;
						public static WEBVTT: number;
						public static JPEG: number;
						public static inferFileTypeFromUri(uri: globalAndroid.net.Uri): number;
						public static inferFileTypeFromResponseHeaders(responseHeaders: java.util.Map<string,java.util.List<string>>): number;
						public static inferFileTypeFromMimeType(mimeType: string): number;
					}
					export module FileTypes {
						export class Type extends java.lang.Object implements java.lang.annotation.Annotation {
							public static class: java.lang.Class<com.google.android.exoplayer2.util.FileTypes.Type>;
							/**
							 * Constructs a new instance of the com.google.android.exoplayer2.util.FileTypes() when extending the interface class.
							 */
							public constructor(implementation: {
								equals(object0: any): boolean;
								hashCode(): number;
								toString(): string;
								annotationType(): java.lang.Class<any>;
							});
							public constructor();
							public hashCode(): number;
							public annotationType(): java.lang.Class<any>;
							public equals(obj: any): boolean;
							public toString(): string;
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
				export module util {
					export class FlacConstants extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.util.FlacConstants>;
						public static STREAM_MARKER_SIZE: number;
						public static METADATA_BLOCK_HEADER_SIZE: number;
						public static STREAM_INFO_BLOCK_SIZE: number;
						public static MIN_FRAME_HEADER_SIZE: number;
						public static MAX_FRAME_HEADER_SIZE: number;
						public static METADATA_TYPE_STREAM_INFO: number;
						public static METADATA_TYPE_SEEK_TABLE: number;
						public static METADATA_TYPE_VORBIS_COMMENT: number;
						public static METADATA_TYPE_PICTURE: number;
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
				export module util {
					export class HandlerWrapper extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.util.HandlerWrapper>;
						/**
						 * Constructs a new instance of the com.google.android.exoplayer2.util.HandlerWrapper interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getLooper(): globalAndroid.os.Looper;
							hasMessages(int0: number): boolean;
							obtainMessage(int0: number): globalAndroid.os.Message;
							obtainMessage(int0: number, object1: any): globalAndroid.os.Message;
							obtainMessage(int0: number, int1: number, int2: number): globalAndroid.os.Message;
							obtainMessage(int0: number, int1: number, int2: number, object3: any): globalAndroid.os.Message;
							sendEmptyMessage(int0: number): boolean;
							sendEmptyMessageDelayed(int0: number, int1: number): boolean;
							sendEmptyMessageAtTime(int0: number, long1: number): boolean;
							removeMessages(int0: number): void;
							removeCallbacksAndMessages(object0: any): void;
							post(runnable0: java.lang.Runnable): boolean;
							postDelayed(runnable0: java.lang.Runnable, long1: number): boolean;
						});
						public constructor();
						public sendEmptyMessage(int0: number): boolean;
						public removeMessages(int0: number): void;
						public post(runnable0: java.lang.Runnable): boolean;
						public sendEmptyMessageDelayed(int0: number, int1: number): boolean;
						public obtainMessage(int0: number): globalAndroid.os.Message;
						public obtainMessage(int0: number, object1: any): globalAndroid.os.Message;
						public obtainMessage(int0: number, int1: number, int2: number): globalAndroid.os.Message;
						public hasMessages(int0: number): boolean;
						public sendEmptyMessageAtTime(int0: number, long1: number): boolean;
						public removeCallbacksAndMessages(object0: any): void;
						public postDelayed(runnable0: java.lang.Runnable, long1: number): boolean;
						public obtainMessage(int0: number, int1: number, int2: number, object3: any): globalAndroid.os.Message;
						public getLooper(): globalAndroid.os.Looper;
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
				export module util {
					export class ListenerSet<T, E>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.util.ListenerSet<any,any>>;
						public sendEvent(eventFlag: number, event: com.google.android.exoplayer2.util.ListenerSet.Event<T>): void;
						public queueEvent(eventFlag: number, event: com.google.android.exoplayer2.util.ListenerSet.Event<T>): void;
						public lazyRelease(releaseEventFlag: number, releaseEvent: com.google.android.exoplayer2.util.ListenerSet.Event<T>): void;
						public copy(looper: globalAndroid.os.Looper, iterationFinishedEvent: com.google.android.exoplayer2.util.ListenerSet.IterationFinishedEvent<T,E>): com.google.android.exoplayer2.util.ListenerSet<T,E>;
						public release(): void;
						public constructor(looper: globalAndroid.os.Looper, clock: com.google.android.exoplayer2.util.Clock, eventFlagsSupplier: com.google.common.base.Supplier<E>, iterationFinishedEvent: com.google.android.exoplayer2.util.ListenerSet.IterationFinishedEvent<T,E>);
						public remove(listener: T): void;
						public add(listener: T): void;
						public flushEvents(): void;
					}
					export module ListenerSet {
						export class Event<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.util.ListenerSet.Event<any>>;
							/**
							 * Constructs a new instance of the com.google.android.exoplayer2.util.ListenerSet() when extending the interface class.
							 */
							public constructor(implementation: {
								invoke(object0: T): void;
							});
							public constructor();
							public invoke(object0: T): void;
						}
						export class IterationFinishedEvent<T, E>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.util.ListenerSet.IterationFinishedEvent<any,any>>;
							/**
							 * Constructs a new instance of the com.google.android.exoplayer2.util.ListenerSet() when extending the interface class.
							 */
							public constructor(implementation: {
								invoke(object0: T, mutableFlags1: E): void;
							});
							public constructor();
							public invoke(object0: T, mutableFlags1: E): void;
						}
						export class ListenerHolder<T, E>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.util.ListenerSet.ListenerHolder<any,any>>;
							public listener: T;
							public hashCode(): number;
							public constructor(listener: T, eventFlagSupplier: com.google.common.base.Supplier<E>);
							public release(event: com.google.android.exoplayer2.util.ListenerSet.IterationFinishedEvent<T,E>): void;
							public equals(other: any): boolean;
							public equals(obj: any): boolean;
							public iterationFinished(eventFlagSupplier: com.google.common.base.Supplier<E>, event: com.google.android.exoplayer2.util.ListenerSet.IterationFinishedEvent<T,E>): void;
							public invoke(eventFlag: number, event: com.google.android.exoplayer2.util.ListenerSet.Event<T>): void;
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
				export module util {
					export class Log extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.util.Log>;
						public static LOG_LEVEL_ALL: number;
						public static LOG_LEVEL_INFO: number;
						public static LOG_LEVEL_WARNING: number;
						public static LOG_LEVEL_ERROR: number;
						public static LOG_LEVEL_OFF: number;
						public static setLogLevel(logLevel: number): void;
						public static getLogLevel(): number;
						public static w(tag: string, message: string, throwable: java.lang.Throwable): void;
						public getLogStackTraces(): boolean;
						public static setLogStackTraces(logStackTraces: boolean): void;
						public static d(tag: string, message: string): void;
						public static i(tag: string, message: string): void;
						public static i(tag: string, message: string, throwable: java.lang.Throwable): void;
						public static e(tag: string, message: string): void;
						public static d(tag: string, message: string, throwable: java.lang.Throwable): void;
						public static getThrowableString(throwable: java.lang.Throwable): string;
						public static e(tag: string, message: string, throwable: java.lang.Throwable): void;
						public static w(tag: string, message: string): void;
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
				export module util {
					export class LongArray extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.util.LongArray>;
						public constructor();
						public add(value: number): void;
						public toArray(): native.Array<number>;
						public constructor(initialCapacity: number);
						public get(index: number): number;
						public size(): number;
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
				export module util {
					export class MimeTypes extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.util.MimeTypes>;
						public static BASE_TYPE_VIDEO: string;
						public static BASE_TYPE_AUDIO: string;
						public static BASE_TYPE_TEXT: string;
						public static BASE_TYPE_IMAGE: string;
						public static BASE_TYPE_APPLICATION: string;
						public static VIDEO_MP4: string;
						public static VIDEO_MATROSKA: string;
						public static VIDEO_WEBM: string;
						public static VIDEO_H263: string;
						public static VIDEO_H264: string;
						public static VIDEO_H265: string;
						public static VIDEO_VP8: string;
						public static VIDEO_VP9: string;
						public static VIDEO_AV1: string;
						public static VIDEO_MP2T: string;
						public static VIDEO_MP4V: string;
						public static VIDEO_MPEG: string;
						public static VIDEO_PS: string;
						public static VIDEO_MPEG2: string;
						public static VIDEO_VC1: string;
						public static VIDEO_DIVX: string;
						public static VIDEO_FLV: string;
						public static VIDEO_DOLBY_VISION: string;
						public static VIDEO_OGG: string;
						public static VIDEO_UNKNOWN: string;
						public static AUDIO_MP4: string;
						public static AUDIO_AAC: string;
						public static AUDIO_MATROSKA: string;
						public static AUDIO_WEBM: string;
						public static AUDIO_MPEG: string;
						public static AUDIO_MPEG_L1: string;
						public static AUDIO_MPEG_L2: string;
						public static AUDIO_RAW: string;
						public static AUDIO_ALAW: string;
						public static AUDIO_MLAW: string;
						public static AUDIO_AC3: string;
						public static AUDIO_E_AC3: string;
						public static AUDIO_E_AC3_JOC: string;
						public static AUDIO_AC4: string;
						public static AUDIO_TRUEHD: string;
						public static AUDIO_DTS: string;
						public static AUDIO_DTS_HD: string;
						public static AUDIO_DTS_EXPRESS: string;
						public static AUDIO_VORBIS: string;
						public static AUDIO_OPUS: string;
						public static AUDIO_AMR: string;
						public static AUDIO_AMR_NB: string;
						public static AUDIO_AMR_WB: string;
						public static AUDIO_FLAC: string;
						public static AUDIO_ALAC: string;
						public static AUDIO_MSGSM: string;
						public static AUDIO_OGG: string;
						public static AUDIO_WAV: string;
						public static AUDIO_UNKNOWN: string;
						public static TEXT_VTT: string;
						public static TEXT_SSA: string;
						public static APPLICATION_MP4: string;
						public static APPLICATION_WEBM: string;
						public static APPLICATION_MATROSKA: string;
						public static APPLICATION_MPD: string;
						public static APPLICATION_M3U8: string;
						public static APPLICATION_SS: string;
						public static APPLICATION_ID3: string;
						public static APPLICATION_CEA608: string;
						public static APPLICATION_CEA708: string;
						public static APPLICATION_SUBRIP: string;
						public static APPLICATION_TTML: string;
						public static APPLICATION_TX3G: string;
						public static APPLICATION_MP4VTT: string;
						public static APPLICATION_MP4CEA608: string;
						public static APPLICATION_RAWCC: string;
						public static APPLICATION_VOBSUB: string;
						public static APPLICATION_PGS: string;
						public static APPLICATION_SCTE35: string;
						public static APPLICATION_CAMERA_MOTION: string;
						public static APPLICATION_EMSG: string;
						public static APPLICATION_DVBSUBS: string;
						public static APPLICATION_EXIF: string;
						public static APPLICATION_ICY: string;
						public static APPLICATION_AIT: string;
						public static IMAGE_JPEG: string;
						public static getEncoding(mimeType: string, codec: string): number;
						public static allSamplesAreSyncSamples(mimeType: string, codec: string): boolean;
						public static getTrackTypeOfCodec(codec: string): number;
						public static isVideo(mimeType: string): boolean;
						public static registerCustomMimeType(mimeType: string, codecPrefix: string, trackType: number): void;
						public static getCodecsCorrespondingToMimeType(codecs: string, mimeType: string): string;
						public static getMediaMimeType(codec: string): string;
						public static getAudioMediaMimeType(codecs: string): string;
						public static isAudio(mimeType: string): boolean;
						public static containsCodecsCorrespondingToMimeType(codecs: string, mimeType: string): boolean;
						public static getVideoMediaMimeType(codecs: string): string;
						public static getTextMediaMimeType(codecs: string): string;
						public static getMimeTypeFromMp4ObjectType(objectType: number): string;
						public static getTrackType(mimeType: string): number;
						public static isMatroska(mimeType: string): boolean;
						public static isText(mimeType: string): boolean;
						public static normalizeMimeType(mimeType: string): string;
					}
					export module MimeTypes {
						export class CustomMimeType extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.util.MimeTypes.CustomMimeType>;
							public mimeType: string;
							public codecPrefix: string;
							public trackType: number;
							public constructor(mimeType: string, codecPrefix: string, trackType: number);
						}
						export class Mp4aObjectType extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.util.MimeTypes.Mp4aObjectType>;
							public objectTypeIndication: number;
							public audioObjectTypeIndication: number;
							public constructor(objectTypeIndication: number, audioObjectTypeIndication: number);
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
				export module util {
					export class MutableFlags extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.util.MutableFlags>;
						public constructor();
						public contains(flag: number): boolean;
						public containsAny(flags: native.Array<number>): boolean;
						public equals(obj: any): boolean;
						public add(flag: number): void;
						public hashCode(): number;
						public clear(): void;
						public get(index: number): number;
						public equals(o: any): boolean;
						public size(): number;
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
				export module util {
					export class NalUnitUtil extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.util.NalUnitUtil>;
						public static NAL_START_CODE: native.Array<number>;
						public static EXTENDED_SAR: number;
						public static ASPECT_RATIO_IDC_VALUES: native.Array<number>;
						public static unescapeStream(data: native.Array<number>, limit: number): number;
						public static clearPrefixFlags(prefixFlags: native.Array<boolean>): void;
						public static isNalUnitSei(mimeType: string, nalUnitHeaderFirstByte: number): boolean;
						public static discardToSps(data: java.nio.ByteBuffer): void;
						public static findNalUnit(data: native.Array<number>, startOffset: number, endOffset: number, prefixFlags: native.Array<boolean>): number;
						public static parseSpsNalUnit(nalData: native.Array<number>, nalOffset: number, nalLimit: number): com.google.android.exoplayer2.util.NalUnitUtil.SpsData;
						public static getNalUnitType(data: native.Array<number>, offset: number): number;
						public static getH265NalUnitType(data: native.Array<number>, offset: number): number;
						public static parsePpsNalUnit(nalData: native.Array<number>, nalOffset: number, nalLimit: number): com.google.android.exoplayer2.util.NalUnitUtil.PpsData;
					}
					export module NalUnitUtil {
						export class PpsData extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.util.NalUnitUtil.PpsData>;
							public picParameterSetId: number;
							public seqParameterSetId: number;
							public bottomFieldPicOrderInFramePresentFlag: boolean;
							public constructor(picParameterSetId: number, seqParameterSetId: number, bottomFieldPicOrderInFramePresentFlag: boolean);
						}
						export class SpsData extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.util.NalUnitUtil.SpsData>;
							public profileIdc: number;
							public constraintsFlagsAndReservedZero2Bits: number;
							public levelIdc: number;
							public seqParameterSetId: number;
							public width: number;
							public height: number;
							public pixelWidthAspectRatio: number;
							public separateColorPlaneFlag: boolean;
							public frameMbsOnlyFlag: boolean;
							public frameNumLength: number;
							public picOrderCountType: number;
							public picOrderCntLsbLength: number;
							public deltaPicOrderAlwaysZeroFlag: boolean;
							public constructor(profileIdc: number, constraintsFlagsAndReservedZero2Bits: number, levelIdc: number, seqParameterSetId: number, width: number, height: number, pixelWidthAspectRatio: number, separateColorPlaneFlag: boolean, frameMbsOnlyFlag: boolean, frameNumLength: number, picOrderCountType: number, picOrderCntLsbLength: number, deltaPicOrderAlwaysZeroFlag: boolean);
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
				export module util {
					export class NonNullApi extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<com.google.android.exoplayer2.util.NonNullApi>;
						/**
						 * Constructs a new instance of the com.google.android.exoplayer2.util.NonNullApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
	export module google {
		export module android {
			export module exoplayer2 {
				export module util {
					export class ParsableBitArray extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.util.ParsableBitArray>;
						public data: native.Array<number>;
						public getBytePosition(): number;
						public constructor();
						public setPosition(position: number): void;
						public getPosition(): number;
						public readBits(numBits: number): number;
						public byteAlign(): void;
						public putInt(value: number, numBits: number): void;
						public readBit(): boolean;
						public bitsLeft(): number;
						public readBits(buffer: native.Array<number>, offset: number, numBits: number): void;
						public reset(data: native.Array<number>): void;
						public reset(data: native.Array<number>, limit: number): void;
						public readBytes(buffer: native.Array<number>, offset: number, length: number): void;
						public skipBits(numBits: number): void;
						public readBytesAsString(length: number): string;
						public readBitsToLong(numBits: number): number;
						public constructor(data: native.Array<number>);
						public skipBytes(length: number): void;
						public reset(parsableByteArray: com.google.android.exoplayer2.util.ParsableByteArray): void;
						public readBytesAsString(length: number, charset: java.nio.charset.Charset): string;
						public constructor(data: native.Array<number>, limit: number);
						public skipBit(): void;
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
				export module util {
					export class ParsableByteArray extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.util.ParsableByteArray>;
						public setPosition(position: number): void;
						public readUnsignedIntToInt(): number;
						public readLittleEndianInt24(): number;
						public peekChar(): string;
						public readLittleEndianInt(): number;
						public readBytes(bitArray: com.google.android.exoplayer2.util.ParsableBitArray, length: number): void;
						public readBytes(buffer: native.Array<number>, offset: number, length: number): void;
						public constructor(limit: number);
						public limit(): number;
						public readUnsignedInt24(): number;
						public readLong(): number;
						public readBytes(buffer: java.nio.ByteBuffer, length: number): void;
						public ensureCapacity(requiredCapacity: number): void;
						public constructor();
						public getPosition(): number;
						public readDouble(): number;
						public readNullTerminatedString(): string;
						public readLittleEndianLong(): number;
						public readString(length: number, charset: java.nio.charset.Charset): string;
						public readSynchSafeInt(): number;
						public constructor(data: native.Array<number>);
						public readLittleEndianUnsignedInt(): number;
						public readUnsignedFixedPoint1616(): number;
						public readDelimiterTerminatedString(delimiter: string): string;
						public constructor(data: native.Array<number>, limit: number);
						public bytesLeft(): number;
						public readLittleEndianUnsignedIntToInt(): number;
						public readInt(): number;
						public readUnsignedByte(): number;
						public readNullTerminatedString(length: number): string;
						public readInt24(): number;
						public capacity(): number;
						public readUnsignedShort(): number;
						public readLittleEndianShort(): number;
						public readLine(): string;
						public readLittleEndianUnsignedShort(): number;
						public getData(): native.Array<number>;
						public reset(limit: number): void;
						public readUnsignedLongToLong(): number;
						public readUnsignedInt(): number;
						public reset(data: native.Array<number>): void;
						public readString(length: number): string;
						public reset(data: native.Array<number>, limit: number): void;
						public readShort(): number;
						public readLittleEndianUnsignedInt24(): number;
						public skipBytes(bytes: number): void;
						public peekUnsignedByte(): number;
						public readUtf8EncodedLong(): number;
						public setLimit(limit: number): void;
						public readFloat(): number;
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
				export module util {
					export class ParsableNalUnitBitArray extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.util.ParsableNalUnitBitArray>;
						public skipBits(numBits: number): void;
						public reset(data: native.Array<number>, offset: number, limit: number): void;
						public canReadExpGolombCodedNum(): boolean;
						public readBits(numBits: number): number;
						public constructor(data: native.Array<number>, offset: number, limit: number);
						public readBit(): boolean;
						public readSignedExpGolombCodedInt(): number;
						public skipBit(): void;
						public readUnsignedExpGolombCodedInt(): number;
						public canReadBits(numBits: number): boolean;
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
				export module util {
					export class SystemClock extends java.lang.Object implements com.google.android.exoplayer2.util.Clock {
						public static class: java.lang.Class<com.google.android.exoplayer2.util.SystemClock>;
						public sleep(sleepTimeMs: number): void;
						public createHandler(looper: globalAndroid.os.Looper, callback: globalAndroid.os.Handler.Callback): com.google.android.exoplayer2.util.HandlerWrapper;
						public constructor();
						public currentTimeMillis(): number;
						public elapsedRealtime(): number;
						public uptimeMillis(): number;
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
				export module util {
					export class SystemHandlerWrapper extends java.lang.Object implements com.google.android.exoplayer2.util.HandlerWrapper {
						public static class: java.lang.Class<com.google.android.exoplayer2.util.SystemHandlerWrapper>;
						public obtainMessage(what: number, int1: number, int2: number, obj: any): globalAndroid.os.Message;
						public removeCallbacksAndMessages(token: any): void;
						public postDelayed(runnable: java.lang.Runnable, delayMs: number): boolean;
						public obtainMessage(what: number, obj: any): globalAndroid.os.Message;
						public obtainMessage(what: number, int1: number, int2: number): globalAndroid.os.Message;
						public sendEmptyMessageDelayed(what: number, delayMs: number): boolean;
						public sendEmptyMessageAtTime(what: number, uptimeMs: number): boolean;
						public constructor(handler: globalAndroid.os.Handler);
						public sendEmptyMessage(what: number): boolean;
						public post(runnable: java.lang.Runnable): boolean;
						public getLooper(): globalAndroid.os.Looper;
						public hasMessages(what: number): boolean;
						public obtainMessage(what: number): globalAndroid.os.Message;
						public removeMessages(what: number): void;
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
				export module util {
					export class TimestampAdjuster extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.util.TimestampAdjuster>;
						public static DO_NOT_OFFSET: number;
						public adjustTsTimestamp(pts90Khz: number): number;
						public static usToNonWrappedPts(us: number): number;
						public getFirstSampleTimestampUs(): number;
						public waitUntilInitialized(): void;
						public setFirstSampleTimestampUs(firstSampleTimestampUs: number): void;
						public static ptsToUs(pts: number): number;
						public static usToWrappedPts(us: number): number;
						public getLastAdjustedTimestampUs(): number;
						public constructor(firstSampleTimestampUs: number);
						public adjustSampleTimestamp(timeUs: number): number;
						public reset(): void;
						public getTimestampOffsetUs(): number;
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
				export module util {
					export class TraceUtil extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.util.TraceUtil>;
						public static beginSection(sectionName: string): void;
						public static endSection(): void;
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
				export module util {
					export class UnknownNull extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<com.google.android.exoplayer2.util.UnknownNull>;
						/**
						 * Constructs a new instance of the com.google.android.exoplayer2.util.UnknownNull interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
	export module google {
		export module android {
			export module exoplayer2 {
				export module util {
					export class Util extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.util.Util>;
						public static SDK_INT: number;
						public static DEVICE: string;
						public static MANUFACTURER: string;
						public static MODEL: string;
						public static DEVICE_DEBUG_INFO: string;
						public static EMPTY_BYTE_ARRAY: native.Array<number>;
						public static formatInvariant(format: string, objects1: native.Array<any>): string;
						public static getIntegerCodeForString(string: string): number;
						public static inferContentType(fileName: string): number;
						public static parseXsDateTime(value: string): number;
						public static crc32(bytes: native.Array<number>, start: number, end: number, initialValue: number): number;
						public static maybeRequestReadExternalStoragePermission(activity: globalAndroid.app.Activity, mediaItems: native.Array<com.google.android.exoplayer2.MediaItem>): boolean;
						public static addWithOverflowDefault(x: number, y: number, overflowResult: number): number;
						public static createTempFile(context: globalAndroid.content.Context, prefix: string): java.io.File;
						public static closeQuietly(closeable: java.io.Closeable): void;
						public static crc8(bytes: native.Array<number>, start: number, end: number, initialValue: number): number;
						public static binarySearchCeil(list: java.util.List<any>, value: java.lang.Comparable<any>, inclusive: boolean, stayInBounds: boolean): number;
						public static binarySearchFloor(list: java.util.List<any>, value: java.lang.Comparable<any>, inclusive: boolean, stayInBounds: boolean): number;
						public static getPcmEncoding(bitDepth: number): number;
						public static getNowUnixTimeMs(elapsedRealtimeEpochOffsetMs: number): number;
						public static getPcmFormat(pcmEncoding: number, channels: number, sampleRate: number): com.google.android.exoplayer2.Format;
						public static moveItems(items: java.util.List<any>, fromIndex: number, toIndex: number, newFromIndex: number): void;
						public static fromUtf8Bytes(bytes: native.Array<number>, offset: number, length: number): string;
						public static getBigEndianInt(buffer: java.nio.ByteBuffer, index: number): number;
						public static isLinebreak(c: number): boolean;
						public static nullSafeArrayConcatenation(first: native.Array<any>, second: native.Array<any>): native.Array<any>;
						public static compareLong(left: number, right: number): number;
						public static areEqual(o1: any, o2: any): boolean;
						public static nullSafeArrayAppend(original: native.Array<any>, newElement: any): native.Array<any>;
						public static postOrRun(handler: globalAndroid.os.Handler, runnable: java.lang.Runnable): boolean;
						public static gzip(input: native.Array<number>): native.Array<number>;
						public static getMediaDurationForPlayoutDuration(playoutDuration: number, speed: number): number;
						public static scaleLargeTimestampsInPlace(timestamps: native.Array<number>, multiplier: number, divisor: number): void;
						public static createHandlerForCurrentOrMainLooper(callback: globalAndroid.os.Handler.Callback): globalAndroid.os.Handler;
						public static fromUtf8Bytes(bytes: native.Array<number>): string;
						public static writeBoolean(parcel: globalAndroid.os.Parcel, value: boolean): void;
						public static getCommaDelimitedSimpleClassNames(objects: native.Array<any>): string;
						public static escapeFileName(fileName: string): string;
						public static isLocalFileUri(uri: globalAndroid.net.Uri): boolean;
						public static splitAtFirst(value: string, regex: string): native.Array<string>;
						public static binarySearchCeil(array: native.Array<number>, value: number, inclusive: boolean, stayInBounds: boolean): number;
						public static recursiveDelete(fileOrDirectory: java.io.File): void;
						public static normalizeLanguageCode(language: string): string;
						public static getNetworkType(context: globalAndroid.content.Context): number;
						public static split(value: string, regex: string): native.Array<string>;
						public static getAdaptiveMimeTypeForContentType(contentType: number): string;
						public static minValue(sparseLongArray: globalAndroid.util.SparseLongArray): number;
						public static linearSearch(array: native.Array<number>, value: number): number;
						public static getAudioUsageForStreamType(streamType: number): number;
						public static constrainValue(value: number, min: number, max: number): number;
						public static sneakyThrow(t: java.lang.Throwable): void;
						public static createHandlerForCurrentOrMainLooper(): globalAndroid.os.Handler;
						public static getStringForTime(builder: java.lang.StringBuilder, formatter: java.util.Formatter, timeMs: number): string;
						public static truncateAscii(sequence: string, maxLength: number): string;
						public static getPlayoutDurationForMediaDuration(mediaDuration: number, speed: number): number;
						public static splitCodecs(codecs: string): native.Array<string>;
						public static getPcmFrameSize(pcmEncoding: number, channelCount: number): number;
						public static createTempDirectory(context: globalAndroid.content.Context, prefix: string): java.io.File;
						public static toUpperInvariant(text: string): string;
						public static toByteArray(inputStream: java.io.InputStream): native.Array<number>;
						public static scaleLargeTimestamps(timestamps: java.util.List<java.lang.Long>, multiplier: number, divisor: number): native.Array<number>;
						public static inferContentType(uri: globalAndroid.net.Uri): number;
						public static isEncodingLinearPcm(encoding: number): boolean;
						public static getDrmUuid(drmScheme: string): java.util.UUID;
						public static getUtf8Bytes(value: string): native.Array<number>;
						public static toHexString(bytes: native.Array<number>): string;
						public static readToEnd(dataSource: com.google.android.exoplayer2.upstream.DataSource): native.Array<number>;
						public static getSystemLanguageCodes(): native.Array<string>;
						public static scaleLargeTimestamp(timestamp: number, multiplier: number, divisor: number): number;
						public static readExactly(dataSource: com.google.android.exoplayer2.upstream.DataSource, length: number): native.Array<number>;
						public static getCodecCountOfType(codecs: string, trackType: number): number;
						public static isEncodingHighResolutionPcm(encoding: number): boolean;
						public static fixSmoothStreamingIsmManifestUri(uri: globalAndroid.net.Uri): globalAndroid.net.Uri;
						public static getAudioContentTypeForStreamType(streamType: number): number;
						public static getLocaleLanguageTag(locale: java.util.Locale): string;
						public static toLowerInvariant(text: string): string;
						public static startForegroundService(context: globalAndroid.content.Context, intent: globalAndroid.content.Intent): globalAndroid.content.ComponentName;
						public static toLong(mostSignificantBits: number, leastSignificantBits: number): number;
						public static readBoolean(parcel: globalAndroid.os.Parcel): boolean;
						public static binarySearchFloor(array: native.Array<number>, value: number, inclusive: boolean, stayInBounds: boolean): number;
						public static closeQuietly(dataSource: com.google.android.exoplayer2.upstream.DataSource): void;
						public static newSingleThreadExecutor(threadName: string): java.util.concurrent.ExecutorService;
						public static getCodecsOfType(codecs: string, trackType: number): string;
						public static inferContentTypeForUriAndMimeType(uri: globalAndroid.net.Uri, mimeType: string): number;
						public static getCountryCode(context: globalAndroid.content.Context): string;
						public static createHandlerForCurrentLooper(callback: globalAndroid.os.Handler.Callback): globalAndroid.os.Handler;
						public static castNonNull(value: any): any;
						public static unescapeFileName(fileName: string): string;
						public static createHandler(looper: globalAndroid.os.Looper, callback: globalAndroid.os.Handler.Callback): globalAndroid.os.Handler;
						public static checkCleartextTrafficPermitted(mediaItems: native.Array<com.google.android.exoplayer2.MediaItem>): boolean;
						public static removeRange(list: java.util.List<any>, fromIndex: number, toIndex: number): void;
						public static toUnsignedLong(x: number): number;
						public static getCurrentDisplayModeSize(context: globalAndroid.content.Context, display: globalAndroid.view.Display): globalAndroid.graphics.Point;
						public static contains(items: native.Array<any>, item: any): boolean;
						public static subtractWithOverflowDefault(x: number, y: number, overflowResult: number): number;
						public static getStreamTypeForAudioUsage(usage: number): number;
						public static nullSafeListToArray(list: java.util.List<any>, array: native.Array<any>): void;
						public static createHandlerForCurrentLooper(): globalAndroid.os.Handler;
						public static binarySearchFloor(longArray: com.google.android.exoplayer2.util.LongArray, value: number, inclusive: boolean, stayInBounds: boolean): number;
						public static inflate(input: com.google.android.exoplayer2.util.ParsableByteArray, output: com.google.android.exoplayer2.util.ParsableByteArray, inflater: java.util.zip.Inflater): boolean;
						public static tableExists(database: globalAndroid.database.sqlite.SQLiteDatabase, tableName: string): boolean;
						public static getUserAgent(context: globalAndroid.content.Context, applicationName: string): string;
						public static inferContentType(uri: globalAndroid.net.Uri, overrideExtension: string): number;
						public static castNonNullTypeArray(value: native.Array<any>): native.Array<any>;
						public static isTv(context: globalAndroid.content.Context): boolean;
						public static getCurrentDisplayModeSize(context: globalAndroid.content.Context): globalAndroid.graphics.Point;
						public static getAudioTrackChannelConfig(channelCount: number): number;
						public static maybeRequestReadExternalStoragePermission(activity: globalAndroid.app.Activity, uris: native.Array<globalAndroid.net.Uri>): boolean;
						public static ceilDivide(numerator: number, denominator: number): number;
						public static nullSafeArrayCopy(input: native.Array<any>, length: number): native.Array<any>;
						public static getDataUriForString(mimeType: string, data: string): globalAndroid.net.Uri;
						public static nullSafeArrayCopyOfRange(input: native.Array<any>, from: number, to: number): native.Array<any>;
						public static parseXsDuration(value: string): number;
						public static getCurrentOrMainLooper(): globalAndroid.os.Looper;
						public static getBytesFromHexString(hexString: string): native.Array<number>;
						public static getTrackTypeString(trackType: number): string;
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
				export module util {
					export class XmlPullParserUtil extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.util.XmlPullParserUtil>;
						public static isStartTag(xpp: org.xmlpull.v1.XmlPullParser): boolean;
						public static isStartTag(xpp: org.xmlpull.v1.XmlPullParser, name: string): boolean;
						public static getAttributeValue(xpp: org.xmlpull.v1.XmlPullParser, attributeName: string): string;
						public static isStartTagIgnorePrefix(xpp: org.xmlpull.v1.XmlPullParser, name: string): boolean;
						public static getAttributeValueIgnorePrefix(xpp: org.xmlpull.v1.XmlPullParser, attributeName: string): string;
						public static isEndTag(xpp: org.xmlpull.v1.XmlPullParser, name: string): boolean;
						public static isEndTag(xpp: org.xmlpull.v1.XmlPullParser): boolean;
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
				export module video {
					export class AvcConfig extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.video.AvcConfig>;
						public initializationData: java.util.List<native.Array<number>>;
						public nalUnitLengthFieldLength: number;
						public width: number;
						public height: number;
						public pixelWidthAspectRatio: number;
						public codecs: string;
						public static parse(data: com.google.android.exoplayer2.util.ParsableByteArray): com.google.android.exoplayer2.video.AvcConfig;
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
				export module video {
					export class ColorInfo extends java.lang.Object implements globalAndroid.os.Parcelable {
						public static class: java.lang.Class<com.google.android.exoplayer2.video.ColorInfo>;
						public colorSpace: number;
						public colorRange: number;
						public colorTransfer: number;
						public hdrStaticInfo: native.Array<number>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.exoplayer2.video.ColorInfo>;
						public equals(obj: any): boolean;
						public describeContents(): number;
						public hashCode(): number;
						public toString(): string;
						public writeToParcel(dest: globalAndroid.os.Parcel, flags: number): void;
						public constructor(colorSpace: number, colorRange: number, colorTransfer: number, hdrStaticInfo: native.Array<number>);
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
				export module video {
					export class DolbyVisionConfig extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.video.DolbyVisionConfig>;
						public profile: number;
						public level: number;
						public codecs: string;
						public static parse(data: com.google.android.exoplayer2.util.ParsableByteArray): com.google.android.exoplayer2.video.DolbyVisionConfig;
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
				export module video {
					export class HevcConfig extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.video.HevcConfig>;
						public initializationData: java.util.List<native.Array<number>>;
						public nalUnitLengthFieldLength: number;
						public codecs: string;
						public static parse(data: com.google.android.exoplayer2.util.ParsableByteArray): com.google.android.exoplayer2.video.HevcConfig;
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
				export module video {
					export class VideoFrameMetadataListener extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.video.VideoFrameMetadataListener>;
						/**
						 * Constructs a new instance of the com.google.android.exoplayer2.video.VideoFrameMetadataListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onVideoFrameAboutToBeRendered(long0: number, long1: number, format2: com.google.android.exoplayer2.Format, mediaFormat3: globalAndroid.media.MediaFormat): void;
						});
						public constructor();
						public onVideoFrameAboutToBeRendered(long0: number, long1: number, format2: com.google.android.exoplayer2.Format, mediaFormat3: globalAndroid.media.MediaFormat): void;
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
				export module video {
					export class VideoListener extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.exoplayer2.video.VideoListener>;
						/**
						 * Constructs a new instance of the com.google.android.exoplayer2.video.VideoListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onVideoSizeChanged(width: number, height: number, unappliedRotationDegrees: number, pixelWidthHeightRatio: number): void;
							onSurfaceSizeChanged(width: number, height: number): void;
							onRenderedFirstFrame(): void;
						});
						public constructor();
						public onSurfaceSizeChanged(width: number, height: number): void;
						public onRenderedFirstFrame(): void;
						public onVideoSizeChanged(width: number, height: number, unappliedRotationDegrees: number, pixelWidthHeightRatio: number): void;
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
				export module video {
					export module spherical {
						export class CameraMotionListener extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.exoplayer2.video.spherical.CameraMotionListener>;
							/**
							 * Constructs a new instance of the com.google.android.exoplayer2.video.spherical.CameraMotionListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onCameraMotion(long0: number, floats1: native.Array<number>): void;
								onCameraMotionReset(): void;
							});
							public constructor();
							public onCameraMotion(long0: number, floats1: native.Array<number>): void;
							public onCameraMotionReset(): void;
						}
					}
				}
			}
		}
	}
}


//Generics information:
//com.google.android.exoplayer2.util.Consumer:1
//com.google.android.exoplayer2.util.CopyOnWriteMultiset:1
//com.google.android.exoplayer2.util.ListenerSet:2
//com.google.android.exoplayer2.util.ListenerSet.Event:1
//com.google.android.exoplayer2.util.ListenerSet.IterationFinishedEvent:2
//com.google.android.exoplayer2.util.ListenerSet.ListenerHolder:2

