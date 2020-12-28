declare module tv {
	export module hd3g {
		export module commons {
			export class IORuntimeException extends java.lang.RuntimeException {
				public static class: java.lang.Class<tv.hd3g.commons.IORuntimeException>;
				public constructor(cause: java.lang.Throwable);
				public constructor(cause: java.io.IOException);
				public constructor(message: string, cause: java.lang.Throwable);
				public constructor(message: string);
				public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
				public constructor(message: string, cause: java.io.IOException);
				public constructor();
			}
		}
	}
}

declare module tv {
	export module hd3g {
		export module commons {
			export module authkit {
				export class AuditAfter extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<tv.hd3g.commons.authkit.AuditAfter>;
					/**
					 * Constructs a new instance of the tv.hd3g.commons.authkit.AuditAfter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						value(): string;
						useSecurity(): boolean;
						changeSecurity(): boolean;
						cantDoErrors(): boolean;
						equals(object0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(obj: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public cantDoErrors(): boolean;
					public changeSecurity(): boolean;
					public value(): string;
					public useSecurity(): boolean;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module tv {
	export module hd3g {
		export module commons {
			export module authkit {
				export class AuditAllAfter extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<tv.hd3g.commons.authkit.AuditAllAfter>;
					/**
					 * Constructs a new instance of the tv.hd3g.commons.authkit.AuditAllAfter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						value(): native.Array<tv.hd3g.commons.authkit.AuditAfter>;
						equals(object0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(obj: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
					public value(): native.Array<tv.hd3g.commons.authkit.AuditAfter>;
				}
			}
		}
	}
}

declare module tv {
	export module hd3g {
		export module commons {
			export module authkit {
				export class CheckBefore extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<tv.hd3g.commons.authkit.CheckBefore>;
					/**
					 * Constructs a new instance of the tv.hd3g.commons.authkit.CheckBefore interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						value(): native.Array<string>;
						equals(object0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(obj: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public value(): native.Array<string>;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module tv {
	export module hd3g {
		export module commons {
			export module authkit {
				export class CheckOneBefore extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<tv.hd3g.commons.authkit.CheckOneBefore>;
					/**
					 * Constructs a new instance of the tv.hd3g.commons.authkit.CheckOneBefore interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						value(): native.Array<tv.hd3g.commons.authkit.CheckBefore>;
						equals(object0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public value(): native.Array<tv.hd3g.commons.authkit.CheckBefore>;
					public equals(obj: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module tv {
	export module hd3g {
		export module commons {
			export module authkit {
				export class CipherService extends java.lang.Object {
					public static class: java.lang.Class<tv.hd3g.commons.authkit.CipherService>;
					/**
					 * Constructs a new instance of the tv.hd3g.commons.authkit.CipherService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getSecureRandom(): java.util.Random;
						cipherFromString(string0: string): native.Array<number>;
						unCipherToString(bytes0: native.Array<number>): string;
						cipherFromData(bytes0: native.Array<number>): native.Array<number>;
						unCipherToData(bytes0: native.Array<number>): native.Array<number>;
						computeSHA3FromString(string0: string): string;
					});
					public constructor();
					public cipherFromString(string0: string): native.Array<number>;
					public cipherFromData(bytes0: native.Array<number>): native.Array<number>;
					public getSecureRandom(): java.util.Random;
					public unCipherToData(bytes0: native.Array<number>): native.Array<number>;
					public computeSHA3FromString(string0: string): string;
					public unCipherToString(bytes0: native.Array<number>): string;
				}
			}
		}
	}
}

declare module tv {
	export module hd3g {
		export module commons {
			export module authkit {
				export class RenforceCheckBefore extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<tv.hd3g.commons.authkit.RenforceCheckBefore>;
					/**
					 * Constructs a new instance of the tv.hd3g.commons.authkit.RenforceCheckBefore interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(object0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(obj: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module tv {
	export module hd3g {
		export module commons {
			export module mailkit {
				export class SendMailDto extends java.lang.Object {
					public static class: java.lang.Class<tv.hd3g.commons.mailkit.SendMailDto>;
					public setExternalReference(externalReference: string): void;
					public getRecipientsBCCAddr(): java.util.List<string>;
					public getAttachedFiles(): java.util.SortedSet<java.io.File>;
					public setReplyToAddr(replyToAddr: string): void;
					public getReplyToAddr(): string;
					public setAttachedFiles(attachedFiles: java.util.SortedSet<java.io.File>): void;
					public getLang(): java.util.Locale;
					public getTemplateName(): string;
					public getSenderAddr(): string;
					public getExternalReference(): string;
					public constructor(templateName: string, lang: java.util.Locale, templateVars: java.util.Map<string,any>, senderAddr: string, recipientsAddr: java.util.List<string>, recipientsCCAddr: java.util.List<string>, recipientsBCCAddr: java.util.List<string>);
					public getSenderReference(): string;
					public getResourceFiles(): java.util.Set<string>;
					public getRecipientsCCAddr(): java.util.List<string>;
					public setResourceFiles(resourceFiles: java.util.Set<string>): void;
					public setSenderReference(senderReference: string): void;
					public setGrade(grade: tv.hd3g.commons.mailkit.SendMailDto.MessageGrade): void;
					public getGrade(): tv.hd3g.commons.mailkit.SendMailDto.MessageGrade;
					public constructor(templateName: string, lang: java.util.Locale, templateVars: java.util.Map<string,any>, senderAddr: string, recipientsAddr: native.Array<string>);
					public getTemplateVars(): java.util.Map<string,any>;
					public getRecipientsAddr(): java.util.List<string>;
				}
				export module SendMailDto {
					export class MessageGrade {
						public static class: java.lang.Class<tv.hd3g.commons.mailkit.SendMailDto.MessageGrade>;
						public static EVENT_NOTICE: tv.hd3g.commons.mailkit.SendMailDto.MessageGrade;
						public static MARKETING: tv.hd3g.commons.mailkit.SendMailDto.MessageGrade;
						public static SECURITY: tv.hd3g.commons.mailkit.SendMailDto.MessageGrade;
						public static TEST: tv.hd3g.commons.mailkit.SendMailDto.MessageGrade;
						public getMessagePriority(): number;
						public static values(): native.Array<tv.hd3g.commons.mailkit.SendMailDto.MessageGrade>;
						public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
						public static valueOf(name: string): tv.hd3g.commons.mailkit.SendMailDto.MessageGrade;
					}
				}
			}
		}
	}
}

declare module tv {
	export module hd3g {
		export module commons {
			export module mailkit {
				export class SendMailService extends java.lang.Object {
					public static class: java.lang.Class<tv.hd3g.commons.mailkit.SendMailService>;
					/**
					 * Constructs a new instance of the tv.hd3g.commons.mailkit.SendMailService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						sendEmail(sendMailDto0: tv.hd3g.commons.mailkit.SendMailDto): void;
					});
					public constructor();
					public sendEmail(sendMailDto0: tv.hd3g.commons.mailkit.SendMailDto): void;
				}
			}
		}
	}
}

//Generics information:

