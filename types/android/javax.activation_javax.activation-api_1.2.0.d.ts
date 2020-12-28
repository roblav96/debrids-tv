declare module javax {
	export module activation {
		export class ActivationDataFlavor {
			public static class: java.lang.Class<javax.activation.ActivationDataFlavor>;
			public setHumanPresentableName(humanPresentableName: string): void;
			public getHumanPresentableName(): string;
			public constructor(representationClass: java.lang.Class<any>, humanPresentableName: string);
			public constructor(mimeType: string, humanPresentableName: string);
			public getMimeType(): string;
			/** @deprecated */
			public normalizeMimeType(mimeType: string): string;
			public isMimeTypeEqual(mimeType: string): boolean;
			public equals(dataFlavor: java.awt.datatransfer.DataFlavor): boolean;
			/** @deprecated */
			public normalizeMimeTypeParameter(parameterName: string, parameterValue: string): string;
			public constructor(representationClass: java.lang.Class<any>, mimeType: string, humanPresentableName: string);
			public getRepresentationClass(): java.lang.Class<any>;
		}
	}
}

declare module javax {
	export module activation {
		export class CommandInfo extends java.lang.Object {
			public static class: java.lang.Class<javax.activation.CommandInfo>;
			public getCommandObject(dh: javax.activation.DataHandler, loader: java.lang.ClassLoader): any;
			public constructor(verb: string, className: string);
			public getCommandClass(): string;
			public getCommandName(): string;
		}
		export module CommandInfo {
			export class Beans extends java.lang.Object {
				public static class: java.lang.Class<javax.activation.CommandInfo.Beans>;
			}
		}
	}
}

declare module javax {
	export module activation {
		export abstract class CommandMap extends java.lang.Object {
			public static class: java.lang.Class<javax.activation.CommandMap>;
			public getPreferredCommands(mimeType: string, ds: javax.activation.DataSource): native.Array<javax.activation.CommandInfo>;
			public static setDefaultCommandMap(commandMap: javax.activation.CommandMap): void;
			public getPreferredCommands(string0: string): native.Array<javax.activation.CommandInfo>;
			public getMimeTypes(): native.Array<string>;
			public getAllCommands(string0: string): native.Array<javax.activation.CommandInfo>;
			public getAllCommands(mimeType: string, ds: javax.activation.DataSource): native.Array<javax.activation.CommandInfo>;
			public getCommand(mimeType: string, cmdName: string, ds: javax.activation.DataSource): javax.activation.CommandInfo;
			public constructor();
			public createDataContentHandler(string0: string): javax.activation.DataContentHandler;
			public getCommand(string0: string, string1: string): javax.activation.CommandInfo;
			public createDataContentHandler(mimeType: string, ds: javax.activation.DataSource): javax.activation.DataContentHandler;
			public static getDefaultCommandMap(): javax.activation.CommandMap;
		}
	}
}

declare module javax {
	export module activation {
		export class CommandObject extends java.lang.Object {
			public static class: java.lang.Class<javax.activation.CommandObject>;
			/**
			 * Constructs a new instance of the javax.activation.CommandObject interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				setCommandContext(string0: string, dataHandler1: javax.activation.DataHandler): void;
			});
			public constructor();
			public setCommandContext(string0: string, dataHandler1: javax.activation.DataHandler): void;
		}
	}
}

declare module javax {
	export module activation {
		export class DataContentHandler extends java.lang.Object {
			public static class: java.lang.Class<javax.activation.DataContentHandler>;
			/**
			 * Constructs a new instance of the javax.activation.DataContentHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getTransferDataFlavors(): native.Array<java.awt.datatransfer.DataFlavor>;
				getTransferData(dataFlavor0: java.awt.datatransfer.DataFlavor, dataSource1: javax.activation.DataSource): any;
				getContent(dataSource0: javax.activation.DataSource): any;
				writeTo(object0: any, string1: string, outputStream2: java.io.OutputStream): void;
			});
			public constructor();
			public getTransferDataFlavors(): native.Array<java.awt.datatransfer.DataFlavor>;
			public writeTo(object0: any, string1: string, outputStream2: java.io.OutputStream): void;
			public getTransferData(dataFlavor0: java.awt.datatransfer.DataFlavor, dataSource1: javax.activation.DataSource): any;
			public getContent(dataSource0: javax.activation.DataSource): any;
		}
	}
}

declare module javax {
	export module activation {
		export class DataContentHandlerFactory extends java.lang.Object {
			public static class: java.lang.Class<javax.activation.DataContentHandlerFactory>;
			/**
			 * Constructs a new instance of the javax.activation.DataContentHandlerFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				createDataContentHandler(string0: string): javax.activation.DataContentHandler;
			});
			public constructor();
			public createDataContentHandler(string0: string): javax.activation.DataContentHandler;
		}
	}
}

declare module javax {
	export module activation {
		export class DataHandler extends java.lang.Object {
			public static class: java.lang.Class<javax.activation.DataHandler>;
			public setCommandMap(commandMap: javax.activation.CommandMap): void;
			public constructor(obj: any, mimeType: string);
			public isDataFlavorSupported(flavor: java.awt.datatransfer.DataFlavor): boolean;
			public getTransferData(flavor: java.awt.datatransfer.DataFlavor): any;
			public static setDataContentHandlerFactory(newFactory: javax.activation.DataContentHandlerFactory): void;
			public getAllCommands(): native.Array<javax.activation.CommandInfo>;
			public getContentType(): string;
			public writeTo(os: java.io.OutputStream): void;
			public constructor(url: java.net.URL);
			public getContent(): any;
			public getDataSource(): javax.activation.DataSource;
			public constructor(ds: javax.activation.DataSource);
			public getTransferDataFlavors(): native.Array<java.awt.datatransfer.DataFlavor>;
			public getName(): string;
			public getInputStream(): java.io.InputStream;
			public getBean(cmdinfo: javax.activation.CommandInfo): any;
			public getPreferredCommands(): native.Array<javax.activation.CommandInfo>;
			public getOutputStream(): java.io.OutputStream;
			public getCommand(cmdName: string): javax.activation.CommandInfo;
		}
	}
}

declare module javax {
	export module activation {
		export class DataHandlerDataSource extends java.lang.Object implements javax.activation.DataSource {
			public static class: java.lang.Class<javax.activation.DataHandlerDataSource>;
			public getInputStream(): java.io.InputStream;
			public getName(): string;
			public constructor(dh: javax.activation.DataHandler);
			public getOutputStream(): java.io.OutputStream;
			public getContentType(): string;
		}
	}
}

declare module javax {
	export module activation {
		export class DataSource extends java.lang.Object {
			public static class: java.lang.Class<javax.activation.DataSource>;
			/**
			 * Constructs a new instance of the javax.activation.DataSource interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getInputStream(): java.io.InputStream;
				getOutputStream(): java.io.OutputStream;
				getContentType(): string;
				getName(): string;
			});
			public constructor();
			public getInputStream(): java.io.InputStream;
			public getName(): string;
			public getOutputStream(): java.io.OutputStream;
			public getContentType(): string;
		}
	}
}

declare module javax {
	export module activation {
		export class DataSourceDataContentHandler extends java.lang.Object implements javax.activation.DataContentHandler {
			public static class: java.lang.Class<javax.activation.DataSourceDataContentHandler>;
			public constructor(dch: javax.activation.DataContentHandler, ds: javax.activation.DataSource);
			public getTransferDataFlavors(): native.Array<java.awt.datatransfer.DataFlavor>;
			public getTransferData(df: java.awt.datatransfer.DataFlavor, ds: javax.activation.DataSource): any;
			public getContent(ds: javax.activation.DataSource): any;
			public writeTo(obj: any, mimeType: string, os: java.io.OutputStream): void;
		}
	}
}

declare module javax {
	export module activation {
		export class FileDataSource extends java.lang.Object implements javax.activation.DataSource {
			public static class: java.lang.Class<javax.activation.FileDataSource>;
			public getFile(): java.io.File;
			public getInputStream(): java.io.InputStream;
			public getName(): string;
			public constructor(name: string);
			public setFileTypeMap(map: javax.activation.FileTypeMap): void;
			public getOutputStream(): java.io.OutputStream;
			public constructor(file: java.io.File);
			public getContentType(): string;
		}
	}
}

declare module javax {
	export module activation {
		export abstract class FileTypeMap extends java.lang.Object {
			public static class: java.lang.Class<javax.activation.FileTypeMap>;
			public static setDefaultFileTypeMap(fileTypeMap: javax.activation.FileTypeMap): void;
			public constructor();
			public getContentType(string0: string): string;
			public getContentType(file0: java.io.File): string;
			public static getDefaultFileTypeMap(): javax.activation.FileTypeMap;
		}
	}
}

declare module javax {
	export module activation {
		export class MailcapCommandMap extends javax.activation.CommandMap {
			public static class: java.lang.Class<javax.activation.MailcapCommandMap>;
			public getMimeTypes(): native.Array<string>;
			public getAllCommands(mimeType: string, ds: javax.activation.DataSource): native.Array<javax.activation.CommandInfo>;
			public getCommand(mimeType: string, cmdName: string): javax.activation.CommandInfo;
			public constructor(is: java.io.InputStream);
			public constructor();
			public getCommand(string0: string, string1: string): javax.activation.CommandInfo;
			public getAllCommands(mimeType: string): native.Array<javax.activation.CommandInfo>;
			public constructor(fileName: string);
			public addMailcap(mail_cap: string): void;
			public createDataContentHandler(mimeType: string): javax.activation.DataContentHandler;
			public getPreferredCommands(mimeType: string, ds: javax.activation.DataSource): native.Array<javax.activation.CommandInfo>;
			public getNativeCommands(mimeType: string): native.Array<string>;
			public getPreferredCommands(string0: string): native.Array<javax.activation.CommandInfo>;
			public getAllCommands(string0: string): native.Array<javax.activation.CommandInfo>;
			public getPreferredCommands(mimeType: string): native.Array<javax.activation.CommandInfo>;
			public getCommand(mimeType: string, cmdName: string, ds: javax.activation.DataSource): javax.activation.CommandInfo;
			public createDataContentHandler(string0: string): javax.activation.DataContentHandler;
			public createDataContentHandler(mimeType: string, ds: javax.activation.DataSource): javax.activation.DataContentHandler;
		}
	}
}

declare module javax {
	export module activation {
		export class MimeType extends java.lang.Object implements java.io.Externalizable {
			public static class: java.lang.Class<javax.activation.MimeType>;
			public getPrimaryType(): string;
			public readExternal(in0: java.io.ObjectInput): void;
			public setSubType(sub: string): void;
			public constructor();
			public setPrimaryType(primary: string): void;
			public setParameter(name: string, value: string): void;
			public getParameters(): javax.activation.MimeTypeParameterList;
			public match(rawdata: string): boolean;
			public getParameter(name: string): string;
			public getSubType(): string;
			public toString(): string;
			public writeExternal(out: java.io.ObjectOutput): void;
			public getBaseType(): string;
			public constructor(primary: string, sub: string);
			public removeParameter(name: string): void;
			public constructor(rawdata: string);
			public match(type: javax.activation.MimeType): boolean;
		}
	}
}

declare module javax {
	export module activation {
		export class MimeTypeParameterList extends java.lang.Object {
			public static class: java.lang.Class<javax.activation.MimeTypeParameterList>;
			public get(name: string): string;
			public toString(): string;
			public size(): number;
			public isEmpty(): boolean;
			public remove(name: string): void;
			public getNames(): java.util.Enumeration<any>;
			public constructor();
			public constructor(parameterList: string);
			public parse(parameterList: string): void;
			public set(name: string, value: string): void;
		}
	}
}

declare module javax {
	export module activation {
		export class MimeTypeParseException extends java.lang.Exception {
			public static class: java.lang.Class<javax.activation.MimeTypeParseException>;
			public constructor(message: string);
			public constructor(message: string, cause: java.lang.Throwable);
			public constructor(cause: java.lang.Throwable);
			public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
			public constructor(s: string);
			public constructor();
		}
	}
}

declare module javax {
	export module activation {
		export class MimetypesFileTypeMap extends javax.activation.FileTypeMap {
			public static class: java.lang.Class<javax.activation.MimetypesFileTypeMap>;
			public getContentType(filename: string): string;
			public getContentType(f: java.io.File): string;
			public constructor(is: java.io.InputStream);
			public constructor();
			public getContentType(string0: string): string;
			public constructor(mimeTypeFileName: string);
			public addMimeTypes(mime_types: string): void;
			public getContentType(file0: java.io.File): string;
		}
	}
}

declare module javax {
	export module activation {
		export class ObjectDataContentHandler extends java.lang.Object implements javax.activation.DataContentHandler {
			public static class: java.lang.Class<javax.activation.ObjectDataContentHandler>;
			public getTransferDataFlavors(): native.Array<java.awt.datatransfer.DataFlavor>;
			public getTransferData(df: java.awt.datatransfer.DataFlavor, ds: javax.activation.DataSource): any;
			public getDCH(): javax.activation.DataContentHandler;
			public constructor(dch: javax.activation.DataContentHandler, obj: any, mimeType: string);
			public getContent(ds: javax.activation.DataSource): any;
			public writeTo(obj: any, mimeType: string, os: java.io.OutputStream): void;
		}
	}
}

declare module javax {
	export module activation {
		export class SecuritySupport extends java.lang.Object {
			public static class: java.lang.Class<javax.activation.SecuritySupport>;
			public static getContextClassLoader(): java.lang.ClassLoader;
			public static openStream(url: java.net.URL): java.io.InputStream;
			public static getResourceAsStream(c: java.lang.Class<any>, name: string): java.io.InputStream;
			public static getResources(cl: java.lang.ClassLoader, name: string): native.Array<java.net.URL>;
			public static getSystemResources(name: string): native.Array<java.net.URL>;
		}
	}
}

declare module javax {
	export module activation {
		export class URLDataSource extends java.lang.Object implements javax.activation.DataSource {
			public static class: java.lang.Class<javax.activation.URLDataSource>;
			public getName(): string;
			public getInputStream(): java.io.InputStream;
			public getURL(): java.net.URL;
			public getOutputStream(): java.io.OutputStream;
			public getContentType(): string;
			public constructor(url: java.net.URL);
		}
	}
}

declare module javax {
	export module activation {
		export class UnsupportedDataTypeException extends java.io.IOException {
			public static class: java.lang.Class<javax.activation.UnsupportedDataTypeException>;
			public constructor(message: string);
			public constructor(message: string, cause: java.lang.Throwable);
			public constructor(cause: java.lang.Throwable);
			public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
			public constructor(s: string);
			public constructor();
		}
	}
}

//Generics information:

