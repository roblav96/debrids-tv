export class ModuleInfo extends java.lang.Object {
	public static class: java.lang.Class<ModuleInfo>;
}

declare module kotlin {
	export module collections {
		export module jdk8 {
			export class CollectionsJDK8Kt extends java.lang.Object {
				public static class: java.lang.Class<kotlin.collections.jdk8.CollectionsJDK8Kt>;
			}
		}
	}
}

declare module kotlin {
	export module internal {
		export module jdk8 {
			export class JDK8PlatformImplementations extends kotlin.internal.jdk7.JDK7PlatformImplementations {
				public static class: java.lang.Class<kotlin.internal.jdk8.JDK8PlatformImplementations>;
				public defaultPlatformRandom(): kotlin.random.Random;
				public getMatchResultNamedGroup(matchResult: java.util.regex.MatchResult, name: string): kotlin.text.MatchGroup;
				public constructor();
			}
		}
	}
}

declare module kotlin {
	export module random {
		export module jdk8 {
			export class PlatformThreadLocalRandom extends kotlin.random.AbstractPlatformRandom {
				public static class: java.lang.Class<kotlin.random.jdk8.PlatformThreadLocalRandom>;
				public nextInt(): number;
				public nextLong(): number;
				public nextLong(from: number, until: number): number;
				public getImpl(): java.util.Random;
				public nextLong(until: number): number;
				public nextDouble(from: number, until: number): number;
				public nextInt(from: number, until: number): number;
				public nextDouble(until: number): number;
				public nextDouble(): number;
				public nextInt(until: number): number;
				public constructor();
			}
		}
	}
}

declare module kotlin {
	export module streams {
		export module jdk8 {
			export class StreamsKt extends java.lang.Object {
				public static class: java.lang.Class<kotlin.streams.jdk8.StreamsKt>;
				public static asSequence(thisasSequence: java.util.stream.IntStream): kotlin.sequences.Sequence<java.lang.Integer>;
				public static toList(thistoList: java.util.stream.LongStream): java.util.List<java.lang.Long>;
				public static asSequence(thisasSequence: java.util.stream.DoubleStream): kotlin.sequences.Sequence<java.lang.Double>;
				public static toList(thistoList: java.util.stream.IntStream): java.util.List<java.lang.Integer>;
				public static asStream(thisasStream: kotlin.sequences.Sequence<any>): java.util.stream.Stream<any>;
				public static toList(thistoList: java.util.stream.DoubleStream): java.util.List<java.lang.Double>;
				public static toList(thistoList: java.util.stream.Stream<any>): java.util.List<any>;
				public static asSequence(thisasSequence: java.util.stream.Stream<any>): kotlin.sequences.Sequence<any>;
				public static asSequence(thisasSequence: java.util.stream.LongStream): kotlin.sequences.Sequence<java.lang.Long>;
			}
		}
	}
}

declare module kotlin {
	export module text {
		export module jdk8 {
			export class RegexExtensionsJDK8Kt extends java.lang.Object {
				public static class: java.lang.Class<kotlin.text.jdk8.RegexExtensionsJDK8Kt>;
				public static get(thisget: kotlin.text.MatchGroupCollection, name: string): kotlin.text.MatchGroup;
			}
		}
	}
}

declare module kotlin {
	export module time {
		export module jdk8 {
			export class DurationConversionsJDK8Kt extends java.lang.Object {
				public static class: java.lang.Class<kotlin.time.jdk8.DurationConversionsJDK8Kt>;
			}
		}
	}
}

//Generics information:

