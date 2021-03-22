declare module androidx {
	export module versionedparcelable {
		export abstract class CustomVersionedParcelable extends java.lang.Object implements androidx.versionedparcelable.VersionedParcelable {
			public static class: java.lang.Class<androidx.versionedparcelable.CustomVersionedParcelable>;
			public onPostParceling(): void;
			public constructor();
			public onPreParceling(isStream: boolean): void;
		}
	}
}

declare module androidx {
	export module versionedparcelable {
		export class NonParcelField extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<androidx.versionedparcelable.NonParcelField>;
			/**
			 * Constructs a new instance of the androidx.versionedparcelable.NonParcelField interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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

declare module androidx {
	export module versionedparcelable {
		export class ParcelField extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<androidx.versionedparcelable.ParcelField>;
			/**
			 * Constructs a new instance of the androidx.versionedparcelable.ParcelField interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				value(): number;
				defaultValue(): string;
				equals(object0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public toString(): string;
			public equals(obj: any): boolean;
			public defaultValue(): string;
			public value(): number;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module androidx {
	export module versionedparcelable {
		export class ParcelImpl extends java.lang.Object implements globalAndroid.os.Parcelable {
			public static class: java.lang.Class<androidx.versionedparcelable.ParcelImpl>;
			public static CREATOR: globalAndroid.os.Parcelable.Creator<androidx.versionedparcelable.ParcelImpl>;
			public constructor(parcel: androidx.versionedparcelable.VersionedParcelable);
			public writeToParcel(dest: globalAndroid.os.Parcel, flags: number): void;
			public constructor(in0: globalAndroid.os.Parcel);
			public describeContents(): number;
			public getVersionedParcel(): androidx.versionedparcelable.VersionedParcelable;
		}
	}
}

declare module androidx {
	export module versionedparcelable {
		export class ParcelUtils extends java.lang.Object {
			public static class: java.lang.Class<androidx.versionedparcelable.ParcelUtils>;
			public static putVersionedParcelable(b: globalAndroid.os.Bundle, key: string, obj: androidx.versionedparcelable.VersionedParcelable): void;
			public static fromInputStream(input: java.io.InputStream): androidx.versionedparcelable.VersionedParcelable;
			public static getVersionedParcelable(bundle: globalAndroid.os.Bundle, key: string): androidx.versionedparcelable.VersionedParcelable;
			public static getVersionedParcelableList(bundle: globalAndroid.os.Bundle, key: string): java.util.List<any>;
			public static toParcelable(obj: androidx.versionedparcelable.VersionedParcelable): globalAndroid.os.Parcelable;
			public static toOutputStream(obj: androidx.versionedparcelable.VersionedParcelable, output: java.io.OutputStream): void;
			public static fromParcelable(p: globalAndroid.os.Parcelable): androidx.versionedparcelable.VersionedParcelable;
			public static putVersionedParcelableList(b: globalAndroid.os.Bundle, key: string, list: java.util.List<any>): void;
		}
	}
}

declare module androidx {
	export module versionedparcelable {
		export abstract class VersionedParcel extends java.lang.Object {
			public static class: java.lang.Class<androidx.versionedparcelable.VersionedParcel>;
			public mReadCache: androidx.collection.ArrayMap<string,java.lang.reflect.Method>;
			public mWriteCache: androidx.collection.ArrayMap<string,java.lang.reflect.Method>;
			public mParcelizerCache: androidx.collection.ArrayMap<string,java.lang.Class<any>>;
			public readBundle(def: globalAndroid.os.Bundle, fieldId: number): globalAndroid.os.Bundle;
			public writeMap(val: java.util.Map<any,any>, fieldId: number): void;
			public readSize(def: any, fieldId: number): any;
			public writeDouble(double0: number): void;
			public readString(): string;
			public writeBoolean(val: boolean, fieldId: number): void;
			public readCharSequence(): string;
			public readDoubleArray(def: native.Array<number>, fieldId: number): native.Array<number>;
			public writeArray(val: native.Array<any>): void;
			public readVersionedParcelable(def: androidx.versionedparcelable.VersionedParcelable, fieldId: number): androidx.versionedparcelable.VersionedParcelable;
			public readByte(def: number, fieldId: number): number;
			public isStream(): boolean;
			public writeParcelable(p: globalAndroid.os.Parcelable, fieldId: number): void;
			public readArray(def: native.Array<any>, fieldId: number): native.Array<any>;
			public readInt(): number;
			public readFloat(): number;
			public readDoubleArray(): native.Array<number>;
			public readFromParcel(parcelCls: string, versionedParcel: androidx.versionedparcelable.VersionedParcel): androidx.versionedparcelable.VersionedParcelable;
			public writeArray(val: native.Array<any>, fieldId: number): void;
			public readField(int0: number): boolean;
			public writeInt(val: number, fieldId: number): void;
			public writeLong(long0: number): void;
			public readParcelable(): globalAndroid.os.Parcelable;
			public writeBooleanArray(val: native.Array<boolean>, fieldId: number): void;
			public readIntArray(): native.Array<number>;
			public writeVersionedParcelable(p: androidx.versionedparcelable.VersionedParcelable): void;
			public readBoolean(): boolean;
			public setOutputField(int0: number): void;
			public readSet(def: java.util.Set<any>, fieldId: number): java.util.Set<any>;
			public readDouble(def: number, fieldId: number): number;
			public writeFloat(val: number, fieldId: number): void;
			public writeDoubleArray(val: native.Array<number>, fieldId: number): void;
			public readFloatArray(): native.Array<number>;
			public writeByteArray(b: native.Array<number>, fieldId: number): void;
			public readParcelable(def: globalAndroid.os.Parcelable, fieldId: number): globalAndroid.os.Parcelable;
			public readMap(def: java.util.Map<any,any>, fieldId: number): java.util.Map<any,any>;
			public readCharArray(def: native.Array<string>, fieldId: number): native.Array<string>;
			public readVersionedParcelable(): androidx.versionedparcelable.VersionedParcelable;
			public readSerializable(): java.io.Serializable;
			public readStrongBinder(): globalAndroid.os.IBinder;
			public readSparseBooleanArray(def: globalAndroid.util.SparseBooleanArray, fieldId: number): globalAndroid.util.SparseBooleanArray;
			public writeByteArray(bytes0: native.Array<number>): void;
			public constructor(readCache: androidx.collection.ArrayMap<string,java.lang.reflect.Method>, writeCache: androidx.collection.ArrayMap<string,java.lang.reflect.Method>, parcelizerCache: androidx.collection.ArrayMap<string,java.lang.Class<any>>);
			public writeBundle(val: globalAndroid.os.Bundle, fieldId: number): void;
			public writeByte(val: number, fieldId: number): void;
			public writeBoolean(boolean0: boolean): void;
			public readCharSequence(def: string, fieldId: number): string;
			public writeBooleanArray(val: native.Array<boolean>): void;
			public setSerializationFlags(allowSerialization: boolean, ignoreParcelables: boolean): void;
			public writeToParcel(val: androidx.versionedparcelable.VersionedParcelable, versionedParcel: androidx.versionedparcelable.VersionedParcel): void;
			public writeException(e: java.lang.Exception, fieldId: number): void;
			public writeParcelable(parcelable0: globalAndroid.os.Parcelable): void;
			public writeDoubleArray(val: native.Array<number>): void;
			public readException(def: java.lang.Exception, fieldId: number): java.lang.Exception;
			public readArray(def: native.Array<any>): native.Array<any>;
			public readIntArray(def: native.Array<number>, fieldId: number): native.Array<number>;
			public readFloatArray(def: native.Array<number>, fieldId: number): native.Array<number>;
			public readFloat(def: number, fieldId: number): number;
			public readInt(def: number, fieldId: number): number;
			public writeSet(val: java.util.Set<any>, fieldId: number): void;
			public writeFloatArray(val: native.Array<number>, fieldId: number): void;
			public readBooleanArray(def: native.Array<boolean>, fieldId: number): native.Array<boolean>;
			public writeString(val: string, fieldId: number): void;
			public writeStrongBinder(iBinder0: globalAndroid.os.IBinder): void;
			public closeField(): void;
			public writeString(string0: string): void;
			public writeLong(val: number, fieldId: number): void;
			public writeByteArray(b: native.Array<number>, offset: number, len: number, fieldId: number): void;
			public writeFloatArray(val: native.Array<number>): void;
			public writeVersionedParcelable(p: androidx.versionedparcelable.VersionedParcelable, fieldId: number): void;
			public writeDouble(val: number, fieldId: number): void;
			public readString(def: string, fieldId: number): string;
			public writeByteArray(bytes0: native.Array<number>, int1: number, int2: number): void;
			public writeList(val: java.util.List<any>, fieldId: number): void;
			public writeFloat(float0: number): void;
			public createSubParcel(): androidx.versionedparcelable.VersionedParcel;
			public writeStrongInterface(iInterface0: globalAndroid.os.IInterface): void;
			public writeInt(int0: number): void;
			public readBundle(): globalAndroid.os.Bundle;
			public writeSize(val: any, fieldId: number): void;
			public writeLongArray(val: native.Array<number>, fieldId: number): void;
			public static getRootCause(t: java.lang.Throwable): java.lang.Throwable;
			public writeIntArray(val: native.Array<number>): void;
			public writeStrongInterface(val: globalAndroid.os.IInterface, fieldId: number): void;
			public writeStrongBinder(val: globalAndroid.os.IBinder, fieldId: number): void;
			public readList(def: java.util.List<any>, fieldId: number): java.util.List<any>;
			public readBooleanArray(): native.Array<boolean>;
			public readByteArray(def: native.Array<number>, fieldId: number): native.Array<number>;
			public writeSerializable(s: java.io.Serializable, fieldId: number): void;
			public writeCharSequence(charSequence0: string): void;
			public writeIntArray(val: native.Array<number>, fieldId: number): void;
			public readSizeF(def: any, fieldId: number): any;
			public writeSparseBooleanArray(val: globalAndroid.util.SparseBooleanArray, fieldId: number): void;
			public readDouble(): number;
			public readBoolean(def: boolean, fieldId: number): boolean;
			public writeNoException(): void;
			public writeBundle(bundle0: globalAndroid.os.Bundle): void;
			public readLong(): number;
			public writeLongArray(val: native.Array<number>): void;
			public readLongArray(): native.Array<number>;
			public readByteArray(): native.Array<number>;
			public writeSizeF(val: any, fieldId: number): void;
			public readLongArray(def: native.Array<number>, fieldId: number): native.Array<number>;
			public writeCharSequence(val: string, fieldId: number): void;
			public readLong(def: number, fieldId: number): number;
			public writeCharArray(val: native.Array<string>, fieldId: number): void;
			public readStrongBinder(def: globalAndroid.os.IBinder, fieldId: number): globalAndroid.os.IBinder;
		}
		export module VersionedParcel {
			export class ParcelException extends java.lang.RuntimeException {
				public static class: java.lang.Class<androidx.versionedparcelable.VersionedParcel.ParcelException>;
				public constructor(cause: java.lang.Throwable);
				public constructor(source: java.lang.Throwable);
				public constructor(message: string, cause: java.lang.Throwable);
				public constructor(message: string);
				public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module versionedparcelable {
		export class VersionedParcelParcel extends androidx.versionedparcelable.VersionedParcel {
			public static class: java.lang.Class<androidx.versionedparcelable.VersionedParcelParcel>;
			public writeString(val: string): void;
			public readBundle(def: globalAndroid.os.Bundle, fieldId: number): globalAndroid.os.Bundle;
			public writeFloat(val: number): void;
			public writeString(val: string, fieldId: number): void;
			public writeStrongBinder(iBinder0: globalAndroid.os.IBinder): void;
			public closeField(): void;
			public writeDouble(double0: number): void;
			public readString(): string;
			public writeParcelable(p: globalAndroid.os.Parcelable): void;
			public writeBoolean(val: boolean, fieldId: number): void;
			public readCharSequence(): string;
			public writeString(string0: string): void;
			public writeLong(val: number, fieldId: number): void;
			public writeByteArray(b: native.Array<number>, offset: number, len: number, fieldId: number): void;
			public setOutputField(fieldId: number): void;
			public writeDouble(val: number): void;
			public writeParcelable(p: globalAndroid.os.Parcelable, fieldId: number): void;
			public writeDouble(val: number, fieldId: number): void;
			public readInt(): number;
			public readFloat(): number;
			public readString(def: string, fieldId: number): string;
			public writeByteArray(bytes0: native.Array<number>, int1: number, int2: number): void;
			public writeFloat(float0: number): void;
			public readField(int0: number): boolean;
			public createSubParcel(): androidx.versionedparcelable.VersionedParcel;
			public writeInt(val: number, fieldId: number): void;
			public writeStrongInterface(val: globalAndroid.os.IInterface): void;
			public writeLong(long0: number): void;
			public writeStrongInterface(iInterface0: globalAndroid.os.IInterface): void;
			public readParcelable(): globalAndroid.os.Parcelable;
			public writeInt(int0: number): void;
			public readBundle(): globalAndroid.os.Bundle;
			public readBoolean(): boolean;
			public setOutputField(int0: number): void;
			public writeStrongInterface(val: globalAndroid.os.IInterface, fieldId: number): void;
			public readDouble(def: number, fieldId: number): number;
			public writeByteArray(b: native.Array<number>, offset: number, len: number): void;
			public writeFloat(val: number, fieldId: number): void;
			public writeBundle(val: globalAndroid.os.Bundle): void;
			public writeByteArray(b: native.Array<number>, fieldId: number): void;
			public writeStrongBinder(val: globalAndroid.os.IBinder, fieldId: number): void;
			public readParcelable(def: globalAndroid.os.Parcelable, fieldId: number): globalAndroid.os.Parcelable;
			public writeStrongBinder(val: globalAndroid.os.IBinder): void;
			public writeBoolean(val: boolean): void;
			public writeInt(val: number): void;
			public readByteArray(def: native.Array<number>, fieldId: number): native.Array<number>;
			public readStrongBinder(): globalAndroid.os.IBinder;
			public readField(fieldId: number): boolean;
			public writeByteArray(bytes0: native.Array<number>): void;
			public writeCharSequence(charSequence0: string): void;
			public readDouble(): number;
			public writeBundle(val: globalAndroid.os.Bundle, fieldId: number): void;
			public writeBoolean(boolean0: boolean): void;
			public readBoolean(def: boolean, fieldId: number): boolean;
			public readCharSequence(def: string, fieldId: number): string;
			public writeBundle(bundle0: globalAndroid.os.Bundle): void;
			public writeLong(val: number): void;
			public writeCharSequence(charSequence: string): void;
			public readLong(): number;
			public writeParcelable(parcelable0: globalAndroid.os.Parcelable): void;
			public readByteArray(): native.Array<number>;
			public writeCharSequence(val: string, fieldId: number): void;
			public readFloat(def: number, fieldId: number): number;
			public writeByteArray(b: native.Array<number>): void;
			public readInt(def: number, fieldId: number): number;
			public readLong(def: number, fieldId: number): number;
			public readStrongBinder(def: globalAndroid.os.IBinder, fieldId: number): globalAndroid.os.IBinder;
		}
	}
}

declare module androidx {
	export module versionedparcelable {
		export class VersionedParcelStream extends androidx.versionedparcelable.VersionedParcel {
			public static class: java.lang.Class<androidx.versionedparcelable.VersionedParcelStream>;
			public writeString(val: string): void;
			public readBundle(def: globalAndroid.os.Bundle, fieldId: number): globalAndroid.os.Bundle;
			public writeFloat(val: number): void;
			public writeString(val: string, fieldId: number): void;
			public writeStrongBinder(iBinder0: globalAndroid.os.IBinder): void;
			public closeField(): void;
			public writeDouble(double0: number): void;
			public readString(): string;
			public constructor(input: java.io.InputStream, output: java.io.OutputStream);
			public writeParcelable(p: globalAndroid.os.Parcelable): void;
			public writeBoolean(val: boolean, fieldId: number): void;
			public readCharSequence(): string;
			public writeString(string0: string): void;
			public isStream(): boolean;
			public writeLong(val: number, fieldId: number): void;
			public writeByteArray(b: native.Array<number>, offset: number, len: number, fieldId: number): void;
			public setOutputField(fieldId: number): void;
			public writeDouble(val: number): void;
			public writeParcelable(p: globalAndroid.os.Parcelable, fieldId: number): void;
			public writeDouble(val: number, fieldId: number): void;
			public readInt(): number;
			public readFloat(): number;
			public readString(def: string, fieldId: number): string;
			public writeByteArray(bytes0: native.Array<number>, int1: number, int2: number): void;
			public writeFloat(float0: number): void;
			public createSubParcel(): androidx.versionedparcelable.VersionedParcel;
			public readField(int0: number): boolean;
			public writeInt(val: number, fieldId: number): void;
			public writeStrongInterface(val: globalAndroid.os.IInterface): void;
			public writeLong(long0: number): void;
			public writeStrongInterface(iInterface0: globalAndroid.os.IInterface): void;
			public readParcelable(): globalAndroid.os.Parcelable;
			public writeInt(int0: number): void;
			public readBoolean(): boolean;
			public readBundle(): globalAndroid.os.Bundle;
			public setOutputField(int0: number): void;
			public writeStrongInterface(val: globalAndroid.os.IInterface, fieldId: number): void;
			public readDouble(def: number, fieldId: number): number;
			public writeByteArray(b: native.Array<number>, offset: number, len: number): void;
			public writeFloat(val: number, fieldId: number): void;
			public writeBundle(val: globalAndroid.os.Bundle): void;
			public writeByteArray(b: native.Array<number>, fieldId: number): void;
			public writeStrongBinder(val: globalAndroid.os.IBinder, fieldId: number): void;
			public readParcelable(def: globalAndroid.os.Parcelable, fieldId: number): globalAndroid.os.Parcelable;
			public writeStrongBinder(val: globalAndroid.os.IBinder): void;
			public writeBoolean(val: boolean): void;
			public writeInt(val: number): void;
			public readByteArray(def: native.Array<number>, fieldId: number): native.Array<number>;
			public readStrongBinder(): globalAndroid.os.IBinder;
			public readField(fieldId: number): boolean;
			public writeByteArray(bytes0: native.Array<number>): void;
			public writeCharSequence(charSequence0: string): void;
			public constructor(readCache: androidx.collection.ArrayMap<string,java.lang.reflect.Method>, writeCache: androidx.collection.ArrayMap<string,java.lang.reflect.Method>, parcelizerCache: androidx.collection.ArrayMap<string,java.lang.Class<any>>);
			public readDouble(): number;
			public writeBundle(val: globalAndroid.os.Bundle, fieldId: number): void;
			public writeBoolean(boolean0: boolean): void;
			public readBoolean(def: boolean, fieldId: number): boolean;
			public readCharSequence(def: string, fieldId: number): string;
			public setSerializationFlags(allowSerialization: boolean, ignoreParcelables: boolean): void;
			public writeBundle(bundle0: globalAndroid.os.Bundle): void;
			public writeLong(val: number): void;
			public writeCharSequence(charSequence: string): void;
			public readLong(): number;
			public writeParcelable(parcelable0: globalAndroid.os.Parcelable): void;
			public readByteArray(): native.Array<number>;
			public writeCharSequence(val: string, fieldId: number): void;
			public readFloat(def: number, fieldId: number): number;
			public writeByteArray(b: native.Array<number>): void;
			public readInt(def: number, fieldId: number): number;
			public readLong(def: number, fieldId: number): number;
			public readStrongBinder(def: globalAndroid.os.IBinder, fieldId: number): globalAndroid.os.IBinder;
		}
		export module VersionedParcelStream {
			export class FieldBuffer extends java.lang.Object {
				public static class: java.lang.Class<androidx.versionedparcelable.VersionedParcelStream.FieldBuffer>;
			}
		}
	}
}

declare module androidx {
	export module versionedparcelable {
		export class VersionedParcelable extends java.lang.Object {
			public static class: java.lang.Class<androidx.versionedparcelable.VersionedParcelable>;
			/**
			 * Constructs a new instance of the androidx.versionedparcelable.VersionedParcelable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
			});
			public constructor();
		}
	}
}

declare module androidx {
	export module versionedparcelable {
		export class VersionedParcelize extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<androidx.versionedparcelable.VersionedParcelize>;
			/**
			 * Constructs a new instance of the androidx.versionedparcelable.VersionedParcelize interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				allowSerialization(): boolean;
				ignoreParcelables(): boolean;
				isCustom(): boolean;
				deprecatedIds(): native.Array<number>;
				jetifyAs(): string;
				factory(): java.lang.Class<any>;
				equals(object0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public jetifyAs(): string;
			public ignoreParcelables(): boolean;
			public isCustom(): boolean;
			public factory(): java.lang.Class<any>;
			public toString(): string;
			public equals(obj: any): boolean;
			public allowSerialization(): boolean;
			public deprecatedIds(): native.Array<number>;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

//Generics information:

