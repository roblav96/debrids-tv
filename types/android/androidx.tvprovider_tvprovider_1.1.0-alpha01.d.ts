declare module androidx {
	export module tvprovider {
		export module media {
			export module tv {
				export abstract class BasePreviewProgram extends androidx.tvprovider.media.tv.BaseProgram {
					public static class: java.lang.Class<androidx.tvprovider.media.tv.BasePreviewProgram>;
					public static PROJECTION: native.Array<string>;
					public getType(): number;
					public getReleaseDate(): string;
					public isBrowsable(): boolean;
					public isLive(): boolean;
					public getDurationMillis(): number;
					public getLogoUri(): globalAndroid.net.Uri;
					public getEndTimeUtcMillis(): number;
					public getThumbnailAspectRatio(): number;
					public getTvSeriesItemType(): number;
					public toContentValues(includeProtectedFields: boolean): globalAndroid.content.ContentValues;
					public getInteractionCount(): number;
					public getGenre(): string;
					public getInternalProviderId(): string;
					public getPreviewAudioUri(): globalAndroid.net.Uri;
					public isTransient(): boolean;
					public getContentId(): string;
					public getLogoContentDescription(): string;
					public getInteractionType(): number;
					public getLastPlaybackPositionMillis(): number;
					public getOfferPrice(): string;
					public getIntent(): globalAndroid.content.Intent;
					public equals(other: any): boolean;
					public getPosterArtAspectRatio(): number;
					public toContentValues(): globalAndroid.content.ContentValues;
					public getStartTimeUtcMillis(): number;
					public getAuthor(): string;
					public getStartingPrice(): string;
					public getItemCount(): number;
					public getIntentUri(): globalAndroid.net.Uri;
					public getPreviewVideoUri(): globalAndroid.net.Uri;
					public getAvailability(): number;
				}
				export module BasePreviewProgram {
					export class AspectRatio extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<androidx.tvprovider.media.tv.BasePreviewProgram.AspectRatio>;
						/**
						 * Constructs a new instance of the androidx.tvprovider.media.tv.BasePreviewProgram() when extending the interface class.
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
					export class Availability extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<androidx.tvprovider.media.tv.BasePreviewProgram.Availability>;
						/**
						 * Constructs a new instance of the androidx.tvprovider.media.tv.BasePreviewProgram() when extending the interface class.
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
					export abstract class Builder<T>  extends androidx.tvprovider.media.tv.BaseProgram.Builder<any> {
						public static class: java.lang.Class<androidx.tvprovider.media.tv.BasePreviewProgram.Builder<any>>;
						public setBrowsable(browsable: boolean): any;
						public setLogoContentDescription(logoContentDescription: string): any;
						public setAuthor(author: string): any;
						public setLastPlaybackPositionMillis(position: number): any;
						public setLive(live: boolean): any;
						public setStartingPrice(price: string): any;
						public setItemCount(itemCount: number): any;
						public setDurationMillis(duration: number): any;
						public setEndTimeUtcMillis(endTime: number): any;
						public setLogoUri(logoUri: globalAndroid.net.Uri): any;
						public setPreviewVideoUri(previewVideoUri: globalAndroid.net.Uri): any;
						public constructor(other: androidx.tvprovider.media.tv.BaseProgram);
						public setTvSeriesItemType(type: number): any;
						public setStartTimeUtcMillis(startTime: number): any;
						public setTransient(transientValue: boolean): any;
						public constructor(other: androidx.tvprovider.media.tv.BasePreviewProgram);
						public setGenre(genre: string): any;
						public constructor();
						public setOfferPrice(price: string): any;
						public setReleaseDate(releaseDate: string): any;
						public setPreviewAudioUri(previewAudioUri: globalAndroid.net.Uri): any;
						public setAvailability(availability: number): any;
						public setType(type: number): any;
						public setReleaseDate(releaseDate: java.util.Date): any;
						public setPosterArtAspectRatio(ratio: number): any;
						public setInteractionType(interactionType: number): any;
						public setInternalProviderId(externalId: string): any;
						public setThumbnailAspectRatio(ratio: number): any;
						public setInteractionCount(interactionCount: number): any;
						public setIntent(intent: globalAndroid.content.Intent): any;
						public setContentId(contentId: string): any;
						public setIntentUri(intentUri: globalAndroid.net.Uri): any;
					}
					export class InteractionType extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<androidx.tvprovider.media.tv.BasePreviewProgram.InteractionType>;
						/**
						 * Constructs a new instance of the androidx.tvprovider.media.tv.BasePreviewProgram() when extending the interface class.
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
					export class TvSeriesItemType extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<androidx.tvprovider.media.tv.BasePreviewProgram.TvSeriesItemType>;
						/**
						 * Constructs a new instance of the androidx.tvprovider.media.tv.BasePreviewProgram() when extending the interface class.
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
					export class Type extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<androidx.tvprovider.media.tv.BasePreviewProgram.Type>;
						/**
						 * Constructs a new instance of the androidx.tvprovider.media.tv.BasePreviewProgram() when extending the interface class.
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

declare module androidx {
	export module tvprovider {
		export module media {
			export module tv {
				export abstract class BaseProgram extends java.lang.Object {
					public static class: java.lang.Class<androidx.tvprovider.media.tv.BaseProgram>;
					public static PROJECTION: native.Array<string>;
					public mValues: globalAndroid.content.ContentValues;
					public getTitle(): string;
					public getInternalProviderFlag3(): java.lang.Long;
					public equals(obj: any): boolean;
					public getEpisodeTitle(): string;
					public getInternalProviderFlag2(): java.lang.Long;
					public getPackageName(): string;
					public getThumbnailUri(): globalAndroid.net.Uri;
					public getLongDescription(): string;
					public getInternalProviderFlag4(): java.lang.Long;
					public getVideoWidth(): number;
					public getReviewRatingStyle(): number;
					public toString(): string;
					public getEpisodeNumber(): string;
					public getInternalProviderFlag1(): java.lang.Long;
					public hashCode(): number;
					public getVideoHeight(): number;
					public getSeasonNumber(): string;
					public getSeriesId(): string;
					public getInternalProviderDataByteArray(): native.Array<number>;
					public getId(): number;
					public equals(other: any): boolean;
					public getAudioLanguages(): native.Array<string>;
					public toContentValues(): globalAndroid.content.ContentValues;
					public getContentRatings(): native.Array<globalAndroid.media.tv.TvContentRating>;
					public getCanonicalGenres(): native.Array<string>;
					public isSearchable(): boolean;
					public getPosterArtUri(): globalAndroid.net.Uri;
					public getReviewRating(): string;
					public getDescription(): string;
					public getSeasonTitle(): string;
				}
				export module BaseProgram {
					export abstract class Builder<T>  extends java.lang.Object {
						public static class: java.lang.Class<androidx.tvprovider.media.tv.BaseProgram.Builder<any>>;
						public mValues: globalAndroid.content.ContentValues;
						public setInternalProviderFlag1(flag: number): T;
						public setContentRatings(contentRatings: native.Array<globalAndroid.media.tv.TvContentRating>): T;
						public setEpisodeTitle(episodeTitle: string): T;
						public setAudioLanguages(audioLanguages: native.Array<string>): T;
						public setEpisodeNumber(episodeNumber: string, numericalEpisodeNumber: number): T;
						public setVideoWidth(width: number): T;
						public setInternalProviderFlag3(flag: number): T;
						public setSeasonNumber(seasonNumber: number): T;
						public constructor(other: androidx.tvprovider.media.tv.BaseProgram);
						public setEpisodeNumber(episodeNumber: number): T;
						public setDescription(description: string): T;
						public constructor();
						public setId(programId: number): T;
						public setCanonicalGenres(genres: native.Array<string>): T;
						public setSearchable(searchable: boolean): T;
						public setThumbnailUri(thumbnailUri: globalAndroid.net.Uri): T;
						public setSeasonTitle(seasonTitle: string): T;
						public setVideoHeight(height: number): T;
						public setInternalProviderData(data: native.Array<number>): T;
						public setInternalProviderFlag2(flag: number): T;
						public setPosterArtUri(posterArtUri: globalAndroid.net.Uri): T;
						public setLongDescription(longDescription: string): T;
						public setSeriesId(seriesId: string): T;
						public setReviewRatingStyle(reviewRatingStyle: number): T;
						public setReviewRating(reviewRating: string): T;
						public setPackageName(packageName: string): T;
						public setTitle(title: string): T;
						public setInternalProviderFlag4(flag: number): T;
						public setSeasonNumber(seasonNumber: string, numericalSeasonNumber: number): T;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module tvprovider {
		export module media {
			export module tv {
				export class Channel extends java.lang.Object {
					public static class: java.lang.Class<androidx.tvprovider.media.tv.Channel>;
					public static PROJECTION: native.Array<string>;
					public getInternalProviderFlag3(): java.lang.Long;
					public equals(obj: any): boolean;
					public getDisplayNumber(): string;
					public getServiceType(): string;
					public isBrowsable(): boolean;
					public getInternalProviderFlag2(): java.lang.Long;
					public getGlobalContentId(): string;
					public getPackageName(): string;
					public getInternalProviderFlag4(): java.lang.Long;
					public getSystemChannelKey(): string;
					public isSystemApproved(): boolean;
					public getAppLinkPosterArtUri(): globalAndroid.net.Uri;
					public toString(): string;
					public toContentValues(includeProtectedFields: boolean): globalAndroid.content.ContentValues;
					public getNetworkAffiliation(): string;
					public getAppLinkIntent(): globalAndroid.content.Intent;
					public getInternalProviderId(): string;
					public getConfigurationDisplayOrder(): number;
					public getInternalProviderFlag1(): java.lang.Long;
					public getType(): string;
					public hashCode(): number;
					public static fromCursor(cursor: globalAndroid.database.Cursor): androidx.tvprovider.media.tv.Channel;
					public getInputId(): string;
					public isTransient(): boolean;
					public getDisplayName(): string;
					public getInternalProviderDataByteArray(): native.Array<number>;
					public getTransportStreamId(): number;
					public getAppLinkIconUri(): globalAndroid.net.Uri;
					public getId(): number;
					public equals(other: any): boolean;
					public getServiceId(): number;
					public getAppLinkIntentUri(): globalAndroid.net.Uri;
					public getVideoFormat(): string;
					public toContentValues(): globalAndroid.content.ContentValues;
					public isLocked(): boolean;
					public getAppLinkColor(): number;
					public isSearchable(): boolean;
					public getAppLinkText(): string;
					public getDescription(): string;
					public getOriginalNetworkId(): number;
				}
				export module Channel {
					export class Builder extends java.lang.Object {
						public static class: java.lang.Class<androidx.tvprovider.media.tv.Channel.Builder>;
						public setGlobalContentId(value: string): androidx.tvprovider.media.tv.Channel.Builder;
						public setAppLinkColor(appLinkColor: number): androidx.tvprovider.media.tv.Channel.Builder;
						public setConfigurationDisplayOrder(value: number): androidx.tvprovider.media.tv.Channel.Builder;
						public setSystemApproved(value: boolean): androidx.tvprovider.media.tv.Channel.Builder;
						public setAppLinkText(appLinkText: string): androidx.tvprovider.media.tv.Channel.Builder;
						public build(): androidx.tvprovider.media.tv.Channel;
						public setSearchable(searchable: boolean): androidx.tvprovider.media.tv.Channel.Builder;
						public constructor(other: androidx.tvprovider.media.tv.Channel);
						public setVideoFormat(videoFormat: string): androidx.tvprovider.media.tv.Channel.Builder;
						public setNetworkAffiliation(networkAffiliation: string): androidx.tvprovider.media.tv.Channel.Builder;
						public setInputId(inputId: string): androidx.tvprovider.media.tv.Channel.Builder;
						public setAppLinkPosterArtUri(appLinkPosterArtUri: globalAndroid.net.Uri): androidx.tvprovider.media.tv.Channel.Builder;
						public setInternalProviderFlag1(flag: number): androidx.tvprovider.media.tv.Channel.Builder;
						public setDisplayNumber(displayNumber: string): androidx.tvprovider.media.tv.Channel.Builder;
						public setInternalProviderFlag3(flag: number): androidx.tvprovider.media.tv.Channel.Builder;
						public setTransportStreamId(transportStreamId: number): androidx.tvprovider.media.tv.Channel.Builder;
						public setServiceType(serviceType: string): androidx.tvprovider.media.tv.Channel.Builder;
						public constructor();
						public setTransient(value: boolean): androidx.tvprovider.media.tv.Channel.Builder;
						public setInternalProviderData(internalProviderData: string): androidx.tvprovider.media.tv.Channel.Builder;
						public setAppLinkIntent(appLinkIntent: globalAndroid.content.Intent): androidx.tvprovider.media.tv.Channel.Builder;
						public setAppLinkIntentUri(appLinkIntentUri: globalAndroid.net.Uri): androidx.tvprovider.media.tv.Channel.Builder;
						public setServiceId(serviceId: number): androidx.tvprovider.media.tv.Channel.Builder;
						public setDisplayName(displayName: string): androidx.tvprovider.media.tv.Channel.Builder;
						public setType(type: string): androidx.tvprovider.media.tv.Channel.Builder;
						public setInternalProviderId(internalProviderId: string): androidx.tvprovider.media.tv.Channel.Builder;
						public setBrowsable(value: boolean): androidx.tvprovider.media.tv.Channel.Builder;
						public setInternalProviderData(internalProviderData: native.Array<number>): androidx.tvprovider.media.tv.Channel.Builder;
						public setOriginalNetworkId(originalNetworkId: number): androidx.tvprovider.media.tv.Channel.Builder;
						public setLocked(value: boolean): androidx.tvprovider.media.tv.Channel.Builder;
						public setDescription(description: string): androidx.tvprovider.media.tv.Channel.Builder;
						public setInternalProviderFlag2(flag: number): androidx.tvprovider.media.tv.Channel.Builder;
						public setSystemChannelKey(value: string): androidx.tvprovider.media.tv.Channel.Builder;
						public setAppLinkIconUri(appLinkIconUri: globalAndroid.net.Uri): androidx.tvprovider.media.tv.Channel.Builder;
						public setInternalProviderFlag4(flag: number): androidx.tvprovider.media.tv.Channel.Builder;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module tvprovider {
		export module media {
			export module tv {
				export class ChannelLogoUtils extends java.lang.Object {
					public static class: java.lang.Class<androidx.tvprovider.media.tv.ChannelLogoUtils>;
					public static storeChannelLogo(context: globalAndroid.content.Context, channelId: number, logoUri: globalAndroid.net.Uri): boolean;
					public static storeChannelLogo(context: globalAndroid.content.Context, channelId: number, logo: globalAndroid.graphics.Bitmap): boolean;
					/** @deprecated */
					public constructor();
					public static loadChannelLogo(context: globalAndroid.content.Context, channelId: number): globalAndroid.graphics.Bitmap;
				}
			}
		}
	}
}

declare module androidx {
	export module tvprovider {
		export module media {
			export module tv {
				export class CollectionUtils extends java.lang.Object {
					public static class: java.lang.Class<androidx.tvprovider.media.tv.CollectionUtils>;
					public static concatAll(first: native.Array<any>, rest: native.Array<native.Array<any>>): native.Array<any>;
				}
			}
		}
	}
}

declare module androidx {
	export module tvprovider {
		export module media {
			export module tv {
				export class PreviewChannel extends java.lang.Object {
					public static class: java.lang.Class<androidx.tvprovider.media.tv.PreviewChannel>;
					public getInternalProviderFlag3(): java.lang.Long;
					public getDisplayName(): string;
					public getInternalProviderDataByteArray(): native.Array<number>;
					public equals(obj: any): boolean;
					public static fromCursor(cursor: globalAndroid.database.Cursor): androidx.tvprovider.media.tv.PreviewChannel;
					public isBrowsable(): boolean;
					public getInternalProviderFlag2(): java.lang.Long;
					public getPackageName(): string;
					public getId(): number;
					public getInternalProviderFlag4(): java.lang.Long;
					public equals(other: any): boolean;
					public hasAnyUpdatedValues(update: androidx.tvprovider.media.tv.PreviewChannel): boolean;
					public getAppLinkIntentUri(): globalAndroid.net.Uri;
					public getLogo(context: globalAndroid.content.Context): globalAndroid.graphics.Bitmap;
					public toContentValues(): globalAndroid.content.ContentValues;
					public toString(): string;
					public getAppLinkIntent(): globalAndroid.content.Intent;
					public getInternalProviderId(): string;
					public getInternalProviderFlag1(): java.lang.Long;
					public getType(): string;
					public getDescription(): string;
					public hashCode(): number;
				}
				export module PreviewChannel {
					export class Builder extends java.lang.Object {
						public static class: java.lang.Class<androidx.tvprovider.media.tv.PreviewChannel.Builder>;
						public constructor();
						public build(): androidx.tvprovider.media.tv.PreviewChannel;
						public setAppLinkIntent(appLinkIntent: globalAndroid.content.Intent): androidx.tvprovider.media.tv.PreviewChannel.Builder;
						public setInternalProviderId(internalProviderId: string): androidx.tvprovider.media.tv.PreviewChannel.Builder;
						public setDescription(description: string): androidx.tvprovider.media.tv.PreviewChannel.Builder;
						public setInternalProviderFlag3(flag: number): androidx.tvprovider.media.tv.PreviewChannel.Builder;
						public constructor(other: androidx.tvprovider.media.tv.PreviewChannel);
						public setLogo(logoImage: globalAndroid.graphics.Bitmap): androidx.tvprovider.media.tv.PreviewChannel.Builder;
						public setInternalProviderData(internalProviderData: native.Array<number>): androidx.tvprovider.media.tv.PreviewChannel.Builder;
						public setLogo(logoUri: globalAndroid.net.Uri): androidx.tvprovider.media.tv.PreviewChannel.Builder;
						public setInternalProviderFlag1(flag: number): androidx.tvprovider.media.tv.PreviewChannel.Builder;
						public setInternalProviderFlag2(flag: number): androidx.tvprovider.media.tv.PreviewChannel.Builder;
						public setDisplayName(displayName: string): androidx.tvprovider.media.tv.PreviewChannel.Builder;
						public setInternalProviderFlag4(flag: number): androidx.tvprovider.media.tv.PreviewChannel.Builder;
						public setAppLinkIntentUri(appLinkIntentUri: globalAndroid.net.Uri): androidx.tvprovider.media.tv.PreviewChannel.Builder;
					}
					export class Columns extends java.lang.Object {
						public static class: java.lang.Class<androidx.tvprovider.media.tv.PreviewChannel.Columns>;
						public static PROJECTION: native.Array<string>;
						public static COL_ID: number;
						public static COL_PACKAGE_NAME: number;
						public static COL_TYPE: number;
						public static COL_DISPLAY_NAME: number;
						public static COL_DESCRIPTION: number;
						public static COL_APP_LINK_INTENT_URI: number;
						public static COL_INTERNAL_PROVIDER_ID: number;
						public static COL_INTERNAL_PROVIDER_DATA: number;
						public static COL_INTERNAL_PROVIDER_FLAG1: number;
						public static COL_INTERNAL_PROVIDER_FLAG2: number;
						public static COL_INTERNAL_PROVIDER_FLAG3: number;
						public static COL_INTERNAL_PROVIDER_FLAG4: number;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module tvprovider {
		export module media {
			export module tv {
				export class PreviewChannelHelper extends java.lang.Object {
					public static class: java.lang.Class<androidx.tvprovider.media.tv.PreviewChannelHelper>;
					public getAllChannels(): java.util.List<androidx.tvprovider.media.tv.PreviewChannel>;
					public getPreviewChannel(channelId: number): androidx.tvprovider.media.tv.PreviewChannel;
					public deletePreviewChannel(channelId: number): void;
					public updatePreviewProgram(programId: number, update: androidx.tvprovider.media.tv.PreviewProgram): void;
					public updatePreviewChannelInternal(channelId: number, upgrade: androidx.tvprovider.media.tv.PreviewChannel): void;
					public deletePreviewProgram(programId: number): void;
					public publishWatchNextProgram(program: androidx.tvprovider.media.tv.WatchNextProgram): number;
					public publishPreviewProgram(program: androidx.tvprovider.media.tv.PreviewProgram): number;
					public publishChannel(channel: androidx.tvprovider.media.tv.PreviewChannel): number;
					public getPreviewProgram(programId: number): androidx.tvprovider.media.tv.PreviewProgram;
					public publishDefaultChannel(channel: androidx.tvprovider.media.tv.PreviewChannel): number;
					public constructor(context: globalAndroid.content.Context, urlConnectionTimeoutMillis: number, urlReadTimeoutMillis: number);
					public updateWatchNextProgram(upgrade: androidx.tvprovider.media.tv.WatchNextProgram, programId: number): void;
					public updatePreviewChannel(channelId: number, update: androidx.tvprovider.media.tv.PreviewChannel): void;
					public constructor(context: globalAndroid.content.Context);
					public getWatchNextProgram(programId: number): androidx.tvprovider.media.tv.WatchNextProgram;
					public downloadBitmap(logoUri: globalAndroid.net.Uri): globalAndroid.graphics.Bitmap;
				}
			}
		}
	}
}

declare module androidx {
	export module tvprovider {
		export module media {
			export module tv {
				export class PreviewProgram extends androidx.tvprovider.media.tv.BasePreviewProgram {
					public static class: java.lang.Class<androidx.tvprovider.media.tv.PreviewProgram>;
					public static PROJECTION: native.Array<string>;
					public toString(): string;
					public toContentValues(includeProtectedFields: boolean): globalAndroid.content.ContentValues;
					public static fromCursor(cursor: globalAndroid.database.Cursor): androidx.tvprovider.media.tv.PreviewProgram;
					public getChannelId(): number;
					public getWeight(): number;
					public equals(other: any): boolean;
					public hasAnyUpdatedValues(update: androidx.tvprovider.media.tv.PreviewProgram): boolean;
					public toContentValues(): globalAndroid.content.ContentValues;
				}
				export module PreviewProgram {
					export class Builder extends androidx.tvprovider.media.tv.BasePreviewProgram.Builder<androidx.tvprovider.media.tv.PreviewProgram.Builder> {
						public static class: java.lang.Class<androidx.tvprovider.media.tv.PreviewProgram.Builder>;
						public constructor(other: androidx.tvprovider.media.tv.BasePreviewProgram);
						public setWeight(weight: number): androidx.tvprovider.media.tv.PreviewProgram.Builder;
						public build(): androidx.tvprovider.media.tv.PreviewProgram;
						public constructor();
						public setChannelId(channelId: number): androidx.tvprovider.media.tv.PreviewProgram.Builder;
						public constructor(other: androidx.tvprovider.media.tv.BaseProgram);
						public constructor(other: androidx.tvprovider.media.tv.PreviewProgram);
					}
				}
			}
		}
	}
}

declare module androidx {
	export module tvprovider {
		export module media {
			export module tv {
				export class Program extends androidx.tvprovider.media.tv.BaseProgram implements java.lang.Comparable<androidx.tvprovider.media.tv.Program>  {
					public static class: java.lang.Class<androidx.tvprovider.media.tv.Program>;
					public static PROJECTION: native.Array<string>;
					public compareTo(other: androidx.tvprovider.media.tv.Program): number;
					public getGlobalContentId(): string;
					public getChannelId(): number;
					public equals(other: any): boolean;
					public static fromCursor(cursor: globalAndroid.database.Cursor): androidx.tvprovider.media.tv.Program;
					public getEndTimeUtcMillis(): number;
					public toContentValues(): globalAndroid.content.ContentValues;
					public getStartTimeUtcMillis(): number;
					public getBroadcastGenres(): native.Array<string>;
					public toString(): string;
					public getEventId(): number;
					public hashCode(): number;
					public isRecordingProhibited(): boolean;
				}
				export module Program {
					export class Builder extends androidx.tvprovider.media.tv.BaseProgram.Builder<androidx.tvprovider.media.tv.Program.Builder> {
						public static class: java.lang.Class<androidx.tvprovider.media.tv.Program.Builder>;
						public setStartTimeUtcMillis(startTimeUtcMillis: number): androidx.tvprovider.media.tv.Program.Builder;
						public setEndTimeUtcMillis(endTimeUtcMillis: number): androidx.tvprovider.media.tv.Program.Builder;
						public constructor();
						public setEventId(eventId: number): androidx.tvprovider.media.tv.Program.Builder;
						public setGlobalContentId(globalContentId: string): androidx.tvprovider.media.tv.Program.Builder;
						public setRecordingProhibited(prohibited: boolean): androidx.tvprovider.media.tv.Program.Builder;
						public constructor(other: androidx.tvprovider.media.tv.BaseProgram);
						public build(): androidx.tvprovider.media.tv.Program;
						public constructor(other: androidx.tvprovider.media.tv.Program);
						public setChannelId(channelId: number): androidx.tvprovider.media.tv.Program.Builder;
						public setBroadcastGenres(genres: native.Array<string>): androidx.tvprovider.media.tv.Program.Builder;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module tvprovider {
		export module media {
			export module tv {
				export class TvContractCompat extends java.lang.Object {
					public static class: java.lang.Class<androidx.tvprovider.media.tv.TvContractCompat>;
					public static AUTHORITY: string;
					public static PERMISSION_READ_TV_LISTINGS: string;
					public static ACTION_CHANNEL_BROWSABLE_REQUESTED: string;
					public static ACTION_REQUEST_CHANNEL_BROWSABLE: string;
					public static ACTION_PREVIEW_PROGRAM_BROWSABLE_DISABLED: string;
					public static ACTION_WATCH_NEXT_PROGRAM_BROWSABLE_DISABLED: string;
					public static ACTION_PREVIEW_PROGRAM_ADDED_TO_WATCH_NEXT: string;
					public static ACTION_INITIALIZE_PROGRAMS: string;
					public static EXTRA_CHANNEL_ID: string;
					public static EXTRA_PACKAGE_NAME: string;
					public static EXTRA_PREVIEW_PROGRAM_ID: string;
					public static EXTRA_WATCH_NEXT_PROGRAM_ID: string;
					public static METHOD_GET_COLUMNS: string;
					public static METHOD_ADD_COLUMN: string;
					public static EXTRA_EXISTING_COLUMN_NAMES: string;
					public static EXTRA_COLUMN_NAME: string;
					public static EXTRA_DATA_TYPE: string;
					public static EXTRA_DEFAULT_VALUE: string;
					public static PARAM_INPUT: string;
					public static PARAM_CHANNEL: string;
					public static PARAM_START_TIME: string;
					public static PARAM_END_TIME: string;
					public static PARAM_BROWSABLE_ONLY: string;
					public static PARAM_CANONICAL_GENRE: string;
					public static buildChannelsUriForInput(inputId: string): globalAndroid.net.Uri;
					public static requestChannelBrowsable(context: globalAndroid.content.Context, channelId: number): void;
					public static isProgramUri(uri: globalAndroid.net.Uri): boolean;
					public static buildProgramUri(programId: number): globalAndroid.net.Uri;
					public static isChannelUriForTunerInput(uri: globalAndroid.net.Uri): boolean;
					public static isRecordedProgramUri(uri: globalAndroid.net.Uri): boolean;
					public static buildPreviewProgramsUriForChannel(channelId: number): globalAndroid.net.Uri;
					public static buildProgramsUriForChannel(channelId: number): globalAndroid.net.Uri;
					public static isChannelUri(uri: globalAndroid.net.Uri): boolean;
					public static buildPreviewProgramUri(previewProgramId: number): globalAndroid.net.Uri;
					public static buildProgramsUriForChannel(channelUri: globalAndroid.net.Uri, startTime: number, endTime: number): globalAndroid.net.Uri;
					public static buildProgramsUriForChannel(channelUri: globalAndroid.net.Uri): globalAndroid.net.Uri;
					public static buildChannelUriForPassthroughInput(inputId: string): globalAndroid.net.Uri;
					public static isChannelUriForPassthroughInput(uri: globalAndroid.net.Uri): boolean;
					public static buildWatchNextProgramUri(watchNextProgramId: number): globalAndroid.net.Uri;
					public static buildChannelUri(channelId: number): globalAndroid.net.Uri;
					public static buildChannelLogoUri(channelId: number): globalAndroid.net.Uri;
					public static buildProgramsUriForChannel(channelId: number, startTime: number, endTime: number): globalAndroid.net.Uri;
					public static buildRecordedProgramUri(recordedProgramId: number): globalAndroid.net.Uri;
					public static buildPreviewProgramsUriForChannel(channelUri: globalAndroid.net.Uri): globalAndroid.net.Uri;
					public static buildInputId(name: globalAndroid.content.ComponentName): string;
					public static buildChannelLogoUri(channelUri: globalAndroid.net.Uri): globalAndroid.net.Uri;
				}
				export module TvContractCompat {
					export class BaseTvColumns extends java.lang.Object implements globalAndroid.provider.BaseColumns {
						public static class: java.lang.Class<androidx.tvprovider.media.tv.TvContractCompat.BaseTvColumns>;
						/**
						 * Constructs a new instance of the androidx.tvprovider.media.tv.TvContractCompat() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
						public static _COUNT: string;
						public static COLUMN_PACKAGE_NAME: string;
						public static _ID: string;
					}
					export class Channels extends java.lang.Object implements androidx.tvprovider.media.tv.TvContractCompat.BaseTvColumns {
						public static class: java.lang.Class<androidx.tvprovider.media.tv.TvContractCompat.Channels>;
						public static CONTENT_URI: globalAndroid.net.Uri;
						public static CONTENT_TYPE: string;
						public static CONTENT_ITEM_TYPE: string;
						public static TYPE_OTHER: string;
						public static TYPE_NTSC: string;
						public static TYPE_PAL: string;
						public static TYPE_SECAM: string;
						public static TYPE_DVB_T: string;
						public static TYPE_DVB_T2: string;
						public static TYPE_DVB_S: string;
						public static TYPE_DVB_S2: string;
						public static TYPE_DVB_C: string;
						public static TYPE_DVB_C2: string;
						public static TYPE_DVB_H: string;
						public static TYPE_DVB_SH: string;
						public static TYPE_ATSC_T: string;
						public static TYPE_ATSC_C: string;
						public static TYPE_ATSC_M_H: string;
						public static TYPE_ISDB_T: string;
						public static TYPE_ISDB_TB: string;
						public static TYPE_ISDB_S: string;
						public static TYPE_ISDB_C: string;
						public static TYPE_1SEG: string;
						public static TYPE_DTMB: string;
						public static TYPE_CMMB: string;
						public static TYPE_T_DMB: string;
						public static TYPE_S_DMB: string;
						public static TYPE_PREVIEW: string;
						public static SERVICE_TYPE_OTHER: string;
						public static SERVICE_TYPE_AUDIO_VIDEO: string;
						public static SERVICE_TYPE_AUDIO: string;
						public static VIDEO_FORMAT_240P: string;
						public static VIDEO_FORMAT_360P: string;
						public static VIDEO_FORMAT_480I: string;
						public static VIDEO_FORMAT_480P: string;
						public static VIDEO_FORMAT_576I: string;
						public static VIDEO_FORMAT_576P: string;
						public static VIDEO_FORMAT_720P: string;
						public static VIDEO_FORMAT_1080I: string;
						public static VIDEO_FORMAT_1080P: string;
						public static VIDEO_FORMAT_2160P: string;
						public static VIDEO_FORMAT_4320P: string;
						public static VIDEO_RESOLUTION_SD: string;
						public static VIDEO_RESOLUTION_ED: string;
						public static VIDEO_RESOLUTION_HD: string;
						public static VIDEO_RESOLUTION_FHD: string;
						public static VIDEO_RESOLUTION_UHD: string;
						public static COLUMN_INPUT_ID: string;
						public static COLUMN_TYPE: string;
						public static COLUMN_SERVICE_TYPE: string;
						public static COLUMN_ORIGINAL_NETWORK_ID: string;
						public static COLUMN_TRANSPORT_STREAM_ID: string;
						public static COLUMN_SERVICE_ID: string;
						public static COLUMN_DISPLAY_NUMBER: string;
						public static COLUMN_DISPLAY_NAME: string;
						public static COLUMN_NETWORK_AFFILIATION: string;
						public static COLUMN_DESCRIPTION: string;
						public static COLUMN_VIDEO_FORMAT: string;
						public static COLUMN_BROWSABLE: string;
						public static COLUMN_SEARCHABLE: string;
						public static COLUMN_LOCKED: string;
						public static COLUMN_APP_LINK_ICON_URI: string;
						public static COLUMN_APP_LINK_POSTER_ART_URI: string;
						public static COLUMN_APP_LINK_TEXT: string;
						public static COLUMN_APP_LINK_COLOR: string;
						public static COLUMN_APP_LINK_INTENT_URI: string;
						public static COLUMN_INTERNAL_PROVIDER_ID: string;
						public static COLUMN_INTERNAL_PROVIDER_DATA: string;
						public static COLUMN_INTERNAL_PROVIDER_FLAG1: string;
						public static COLUMN_INTERNAL_PROVIDER_FLAG2: string;
						public static COLUMN_INTERNAL_PROVIDER_FLAG3: string;
						public static COLUMN_INTERNAL_PROVIDER_FLAG4: string;
						public static COLUMN_VERSION_NUMBER: string;
						public static COLUMN_TRANSIENT: string;
						public static COLUMN_SYSTEM_APPROVED: string;
						public static COLUMN_CONFIGURATION_DISPLAY_ORDER: string;
						public static COLUMN_SYSTEM_CHANNEL_KEY: string;
						public static COLUMN_GLOBAL_CONTENT_ID: string;
						public static getVideoResolution(videoFormat: string): string;
					}
					export module Channels {
						export class Logo extends java.lang.Object {
							public static class: java.lang.Class<androidx.tvprovider.media.tv.TvContractCompat.Channels.Logo>;
							public static CONTENT_DIRECTORY: string;
						}
						export class ServiceType extends java.lang.Object implements java.lang.annotation.Annotation {
							public static class: java.lang.Class<androidx.tvprovider.media.tv.TvContractCompat.Channels.ServiceType>;
							/**
							 * Constructs a new instance of the androidx.tvprovider.media.tv.TvContractCompat() when extending the interface class.
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
						export class Type extends java.lang.Object implements java.lang.annotation.Annotation {
							public static class: java.lang.Class<androidx.tvprovider.media.tv.TvContractCompat.Channels.Type>;
							/**
							 * Constructs a new instance of the androidx.tvprovider.media.tv.TvContractCompat() when extending the interface class.
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
						export class VideoFormat extends java.lang.Object implements java.lang.annotation.Annotation {
							public static class: java.lang.Class<androidx.tvprovider.media.tv.TvContractCompat.Channels.VideoFormat>;
							/**
							 * Constructs a new instance of the androidx.tvprovider.media.tv.TvContractCompat() when extending the interface class.
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
						export class VideoResolution extends java.lang.Object implements java.lang.annotation.Annotation {
							public static class: java.lang.Class<androidx.tvprovider.media.tv.TvContractCompat.Channels.VideoResolution>;
							/**
							 * Constructs a new instance of the androidx.tvprovider.media.tv.TvContractCompat() when extending the interface class.
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
					export class PreviewProgramColumns extends java.lang.Object {
						public static class: java.lang.Class<androidx.tvprovider.media.tv.TvContractCompat.PreviewProgramColumns>;
						/**
						 * Constructs a new instance of the androidx.tvprovider.media.tv.TvContractCompat() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
						public static TV_SERIES_ITEM_TYPE_EPISODE: number;
						public static COLUMN_TRANSIENT: string;
						public static AVAILABILITY_PURCHASED: number;
						public static COLUMN_OFFER_PRICE: string;
						public static COLUMN_TV_SERIES_ITEM_TYPE: string;
						public static TYPE_ARTIST: number;
						public static INTERACTION_TYPE_FOLLOWERS: number;
						public static COLUMN_INTERACTION_TYPE: string;
						public static COLUMN_ITEM_COUNT: string;
						public static TYPE_CHANNEL: number;
						public static COLUMN_POSTER_ART_ASPECT_RATIO: string;
						public static COLUMN_PREVIEW_AUDIO_URI: string;
						public static COLUMN_DURATION_MILLIS: string;
						public static AVAILABILITY_PAID_CONTENT: number;
						public static COLUMN_GENRE: string;
						public static TYPE_TV_SERIES: number;
						public static TYPE_EVENT: number;
						public static TYPE_TRACK: number;
						public static COLUMN_RELEASE_DATE: string;
						public static COLUMN_INTERNAL_PROVIDER_ID: string;
						public static TYPE_TV_EPISODE: number;
						public static COLUMN_CONTENT_ID: string;
						public static INTERACTION_TYPE_VIEWERS: number;
						public static AVAILABILITY_AVAILABLE: number;
						public static AVAILABILITY_FREE_WITH_SUBSCRIPTION: number;
						public static ASPECT_RATIO_1_1: number;
						public static ASPECT_RATIO_3_2: number;
						public static TYPE_CLIP: number;
						public static COLUMN_STARTING_PRICE: string;
						public static INTERACTION_TYPE_LIKES: number;
						public static ASPECT_RATIO_16_9: number;
						public static COLUMN_INTERACTION_COUNT: string;
						public static TYPE_STATION: number;
						public static COLUMN_LOGO_CONTENT_DESCRIPTION: string;
						public static INTERACTION_TYPE_LISTENS: number;
						public static COLUMN_INTENT_URI: string;
						public static TYPE_MOVIE: number;
						public static COLUMN_AVAILABILITY: string;
						public static AVAILABILITY_FREE: number;
						public static COLUMN_LOGO_URI: string;
						public static COLUMN_LIVE: string;
						public static TYPE_GAME: number;
						public static TV_SERIES_ITEM_TYPE_CHAPTER: number;
						public static TYPE_ALBUM: number;
						public static ASPECT_RATIO_MOVIE_POSTER: number;
						public static COLUMN_AUTHOR: string;
						public static TYPE_TV_SEASON: number;
						public static COLUMN_PREVIEW_VIDEO_URI: string;
						public static INTERACTION_TYPE_FANS: number;
						public static COLUMN_TYPE: string;
						public static TYPE_PLAYLIST: number;
						public static COLUMN_THUMBNAIL_ASPECT_RATIO: string;
						public static COLUMN_BROWSABLE: string;
						public static COLUMN_START_TIME_UTC_MILLIS: string;
						public static ASPECT_RATIO_2_3: number;
						public static ASPECT_RATIO_4_3: number;
						public static INTERACTION_TYPE_THUMBS: number;
						public static COLUMN_END_TIME_UTC_MILLIS: string;
						public static COLUMN_LAST_PLAYBACK_POSITION_MILLIS: string;
						public static INTERACTION_TYPE_VIEWS: number;
					}
					export class PreviewPrograms extends java.lang.Object implements androidx.tvprovider.media.tv.TvContractCompat.BaseTvColumns, androidx.tvprovider.media.tv.TvContractCompat.ProgramColumns, androidx.tvprovider.media.tv.TvContractCompat.PreviewProgramColumns {
						public static class: java.lang.Class<androidx.tvprovider.media.tv.TvContractCompat.PreviewPrograms>;
						public static CONTENT_URI: globalAndroid.net.Uri;
						public static CONTENT_TYPE: string;
						public static CONTENT_ITEM_TYPE: string;
						public static COLUMN_CHANNEL_ID: string;
						public static COLUMN_WEIGHT: string;
					}
					export class ProgramColumns extends java.lang.Object {
						public static class: java.lang.Class<androidx.tvprovider.media.tv.TvContractCompat.ProgramColumns>;
						/**
						 * Constructs a new instance of the androidx.tvprovider.media.tv.TvContractCompat() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
						public static COLUMN_SEARCHABLE: string;
						public static COLUMN_INTERNAL_PROVIDER_FLAG1: string;
						public static COLUMN_INTERNAL_PROVIDER_FLAG2: string;
						public static COLUMN_INTERNAL_PROVIDER_DATA: string;
						public static COLUMN_INTERNAL_PROVIDER_FLAG3: string;
						public static COLUMN_CONTENT_RATING: string;
						public static COLUMN_INTERNAL_PROVIDER_FLAG4: string;
						public static COLUMN_THUMBNAIL_URI: string;
						public static COLUMN_AUDIO_LANGUAGE: string;
						public static COLUMN_EPISODE_DISPLAY_NUMBER: string;
						public static COLUMN_LONG_DESCRIPTION: string;
						public static COLUMN_VERSION_NUMBER: string;
						public static REVIEW_RATING_STYLE_PERCENTAGE: number;
						public static COLUMN_REVIEW_RATING_STYLE: string;
						public static COLUMN_REVIEW_RATING: string;
						public static COLUMN_SHORT_DESCRIPTION: string;
						public static COLUMN_POSTER_ART_URI: string;
						public static COLUMN_VIDEO_HEIGHT: string;
						public static COLUMN_VIDEO_WIDTH: string;
						public static COLUMN_TITLE: string;
						public static COLUMN_SEASON_TITLE: string;
						public static COLUMN_SERIES_ID: string;
						public static COLUMN_EPISODE_TITLE: string;
						public static COLUMN_CANONICAL_GENRE: string;
						public static REVIEW_RATING_STYLE_STARS: number;
						public static COLUMN_SEASON_DISPLAY_NUMBER: string;
						public static REVIEW_RATING_STYLE_THUMBS_UP_DOWN: number;
					}
					export class Programs extends java.lang.Object implements androidx.tvprovider.media.tv.TvContractCompat.BaseTvColumns, androidx.tvprovider.media.tv.TvContractCompat.ProgramColumns {
						public static class: java.lang.Class<androidx.tvprovider.media.tv.TvContractCompat.Programs>;
						public static CONTENT_URI: globalAndroid.net.Uri;
						public static CONTENT_TYPE: string;
						public static CONTENT_ITEM_TYPE: string;
						public static COLUMN_CHANNEL_ID: string;
						public static COLUMN_SEASON_NUMBER: string;
						public static COLUMN_EPISODE_NUMBER: string;
						public static COLUMN_START_TIME_UTC_MILLIS: string;
						public static COLUMN_END_TIME_UTC_MILLIS: string;
						public static COLUMN_BROADCAST_GENRE: string;
						public static COLUMN_RECORDING_PROHIBITED: string;
						public static COLUMN_EVENT_ID: string;
						public static COLUMN_GLOBAL_CONTENT_ID: string;
					}
					export module Programs {
						export class Genres extends java.lang.Object {
							public static class: java.lang.Class<androidx.tvprovider.media.tv.TvContractCompat.Programs.Genres>;
							public static FAMILY_KIDS: string;
							public static SPORTS: string;
							public static SHOPPING: string;
							public static MOVIES: string;
							public static COMEDY: string;
							public static TRAVEL: string;
							public static DRAMA: string;
							public static EDUCATION: string;
							public static ANIMAL_WILDLIFE: string;
							public static NEWS: string;
							public static GAMING: string;
							public static ARTS: string;
							public static ENTERTAINMENT: string;
							public static LIFE_STYLE: string;
							public static MUSIC: string;
							public static PREMIER: string;
							public static TECH_SCIENCE: string;
							public static encode(genres: native.Array<string>): string;
							public static isCanonical(genre: string): boolean;
							public static decode(genres: string): native.Array<string>;
						}
						export module Genres {
							export class Genre extends java.lang.Object implements java.lang.annotation.Annotation {
								public static class: java.lang.Class<androidx.tvprovider.media.tv.TvContractCompat.Programs.Genres.Genre>;
								/**
								 * Constructs a new instance of the androidx.tvprovider.media.tv.TvContractCompat() when extending the interface class.
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
					export class RecordedPrograms extends java.lang.Object implements androidx.tvprovider.media.tv.TvContractCompat.BaseTvColumns, androidx.tvprovider.media.tv.TvContractCompat.ProgramColumns {
						public static class: java.lang.Class<androidx.tvprovider.media.tv.TvContractCompat.RecordedPrograms>;
						public static CONTENT_URI: globalAndroid.net.Uri;
						public static CONTENT_TYPE: string;
						public static CONTENT_ITEM_TYPE: string;
						public static COLUMN_CHANNEL_ID: string;
						public static COLUMN_INPUT_ID: string;
						public static COLUMN_START_TIME_UTC_MILLIS: string;
						public static COLUMN_END_TIME_UTC_MILLIS: string;
						public static COLUMN_BROADCAST_GENRE: string;
						public static COLUMN_RECORDING_DATA_URI: string;
						public static COLUMN_RECORDING_DATA_BYTES: string;
						public static COLUMN_RECORDING_DURATION_MILLIS: string;
						public static COLUMN_RECORDING_EXPIRE_TIME_UTC_MILLIS: string;
					}
					export class WatchNextPrograms extends java.lang.Object implements androidx.tvprovider.media.tv.TvContractCompat.BaseTvColumns, androidx.tvprovider.media.tv.TvContractCompat.ProgramColumns, androidx.tvprovider.media.tv.TvContractCompat.PreviewProgramColumns {
						public static class: java.lang.Class<androidx.tvprovider.media.tv.TvContractCompat.WatchNextPrograms>;
						public static CONTENT_URI: globalAndroid.net.Uri;
						public static CONTENT_TYPE: string;
						public static CONTENT_ITEM_TYPE: string;
						public static WATCH_NEXT_TYPE_CONTINUE: number;
						public static WATCH_NEXT_TYPE_NEXT: number;
						public static WATCH_NEXT_TYPE_NEW: number;
						public static WATCH_NEXT_TYPE_WATCHLIST: number;
						public static COLUMN_WATCH_NEXT_TYPE: string;
						public static COLUMN_LAST_ENGAGEMENT_TIME_UTC_MILLIS: string;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module tvprovider {
		export module media {
			export module tv {
				export class TvContractUtils extends java.lang.Object {
					public static class: java.lang.Class<androidx.tvprovider.media.tv.TvContractUtils>;
					public static stringToAudioLanguages(commaSeparatedString: string): native.Array<string>;
					public static stringToContentRatings(commaSeparatedRatings: string): native.Array<globalAndroid.media.tv.TvContentRating>;
					public static contentRatingsToString(contentRatings: native.Array<globalAndroid.media.tv.TvContentRating>): string;
					public static audioLanguagesToString(audioLanguages: native.Array<string>): string;
				}
			}
		}
	}
}

declare module androidx {
	export module tvprovider {
		export module media {
			export module tv {
				export class WatchNextProgram extends androidx.tvprovider.media.tv.BasePreviewProgram {
					public static class: java.lang.Class<androidx.tvprovider.media.tv.WatchNextProgram>;
					public static PROJECTION: native.Array<string>;
					public static WATCH_NEXT_TYPE_UNKNOWN: number;
					public getWatchNextType(): number;
					public toString(): string;
					public toContentValues(includeProtectedFields: boolean): globalAndroid.content.ContentValues;
					public equals(other: any): boolean;
					public hasAnyUpdatedValues(update: androidx.tvprovider.media.tv.WatchNextProgram): boolean;
					public static fromCursor(cursor: globalAndroid.database.Cursor): androidx.tvprovider.media.tv.WatchNextProgram;
					public getLastEngagementTimeUtcMillis(): number;
					public toContentValues(): globalAndroid.content.ContentValues;
				}
				export module WatchNextProgram {
					export class Builder extends androidx.tvprovider.media.tv.BasePreviewProgram.Builder<androidx.tvprovider.media.tv.WatchNextProgram.Builder> {
						public static class: java.lang.Class<androidx.tvprovider.media.tv.WatchNextProgram.Builder>;
						public constructor(other: androidx.tvprovider.media.tv.BasePreviewProgram);
						public build(): androidx.tvprovider.media.tv.WatchNextProgram;
						public constructor();
						public constructor(other: androidx.tvprovider.media.tv.WatchNextProgram);
						public constructor(other: androidx.tvprovider.media.tv.BaseProgram);
						public setWatchNextType(watchNextType: number): androidx.tvprovider.media.tv.WatchNextProgram.Builder;
						public setLastEngagementTimeUtcMillis(lastEngagementTimeUtcMillis: number): androidx.tvprovider.media.tv.WatchNextProgram.Builder;
					}
					export class WatchNextType extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<androidx.tvprovider.media.tv.WatchNextProgram.WatchNextType>;
						/**
						 * Constructs a new instance of the androidx.tvprovider.media.tv.WatchNextProgram() when extending the interface class.
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

//Generics information:
//androidx.tvprovider.media.tv.BasePreviewProgram.Builder:1
//androidx.tvprovider.media.tv.BaseProgram.Builder:1

