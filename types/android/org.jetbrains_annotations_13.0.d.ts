declare module org {
	export module intellij {
		export module lang {
			export module annotations {
				export class Flow extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<org.intellij.lang.annotations.Flow>;
					/**
					 * Constructs a new instance of the org.intellij.lang.annotations.Flow interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						source(): string;
						sourceIsContainer(): boolean;
						target(): string;
						targetIsContainer(): boolean;
						equals(object0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public static DEFAULT_SOURCE: string;
					public static RETURN_METHOD_TARGET: string;
					public static THIS_SOURCE: string;
					public static DEFAULT_TARGET: string;
					public static THIS_TARGET: string;
					public sourceIsContainer(): boolean;
					public equals(obj: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public source(): string;
					public targetIsContainer(): boolean;
					public target(): string;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module org {
	export module intellij {
		export module lang {
			export module annotations {
				export class Identifier extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<org.intellij.lang.annotations.Identifier>;
					/**
					 * Constructs a new instance of the org.intellij.lang.annotations.Identifier interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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

declare module org {
	export module intellij {
		export module lang {
			export module annotations {
				export class JdkConstants extends java.lang.Object {
					public static class: java.lang.Class<org.intellij.lang.annotations.JdkConstants>;
					public constructor();
				}
				export module JdkConstants {
					export class AdjustableOrientation extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<org.intellij.lang.annotations.JdkConstants.AdjustableOrientation>;
						/**
						 * Constructs a new instance of the org.intellij.lang.annotations.JdkConstants$AdjustableOrientation interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
					export class BoxLayoutAxis extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<org.intellij.lang.annotations.JdkConstants.BoxLayoutAxis>;
						/**
						 * Constructs a new instance of the org.intellij.lang.annotations.JdkConstants$BoxLayoutAxis interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
					export class CalendarMonth extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<org.intellij.lang.annotations.JdkConstants.CalendarMonth>;
						/**
						 * Constructs a new instance of the org.intellij.lang.annotations.JdkConstants$CalendarMonth interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
					export class CursorType extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<org.intellij.lang.annotations.JdkConstants.CursorType>;
						/**
						 * Constructs a new instance of the org.intellij.lang.annotations.JdkConstants$CursorType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
					export class FlowLayoutAlignment extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<org.intellij.lang.annotations.JdkConstants.FlowLayoutAlignment>;
						/**
						 * Constructs a new instance of the org.intellij.lang.annotations.JdkConstants$FlowLayoutAlignment interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
					export class FontStyle extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<org.intellij.lang.annotations.JdkConstants.FontStyle>;
						/**
						 * Constructs a new instance of the org.intellij.lang.annotations.JdkConstants$FontStyle interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
					export class HorizontalAlignment extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<org.intellij.lang.annotations.JdkConstants.HorizontalAlignment>;
						/**
						 * Constructs a new instance of the org.intellij.lang.annotations.JdkConstants$HorizontalAlignment interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
					export class InputEventMask extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<org.intellij.lang.annotations.JdkConstants.InputEventMask>;
						/**
						 * Constructs a new instance of the org.intellij.lang.annotations.JdkConstants$InputEventMask interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
					export class ListSelectionMode extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<org.intellij.lang.annotations.JdkConstants.ListSelectionMode>;
						/**
						 * Constructs a new instance of the org.intellij.lang.annotations.JdkConstants$ListSelectionMode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
					export class PatternFlags extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<org.intellij.lang.annotations.JdkConstants.PatternFlags>;
						/**
						 * Constructs a new instance of the org.intellij.lang.annotations.JdkConstants$PatternFlags interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
					export class TabLayoutPolicy extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<org.intellij.lang.annotations.JdkConstants.TabLayoutPolicy>;
						/**
						 * Constructs a new instance of the org.intellij.lang.annotations.JdkConstants$TabLayoutPolicy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
					export class TabPlacement extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<org.intellij.lang.annotations.JdkConstants.TabPlacement>;
						/**
						 * Constructs a new instance of the org.intellij.lang.annotations.JdkConstants$TabPlacement interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
					export class TitledBorderJustification extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<org.intellij.lang.annotations.JdkConstants.TitledBorderJustification>;
						/**
						 * Constructs a new instance of the org.intellij.lang.annotations.JdkConstants$TitledBorderJustification interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
					export class TitledBorderTitlePosition extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<org.intellij.lang.annotations.JdkConstants.TitledBorderTitlePosition>;
						/**
						 * Constructs a new instance of the org.intellij.lang.annotations.JdkConstants$TitledBorderTitlePosition interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
					export class TreeSelectionMode extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<org.intellij.lang.annotations.JdkConstants.TreeSelectionMode>;
						/**
						 * Constructs a new instance of the org.intellij.lang.annotations.JdkConstants$TreeSelectionMode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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

declare module org {
	export module intellij {
		export module lang {
			export module annotations {
				export class Language extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<org.intellij.lang.annotations.Language>;
					/**
					 * Constructs a new instance of the org.intellij.lang.annotations.Language interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						value(): string;
						prefix(): string;
						suffix(): string;
						equals(object0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(obj: any): boolean;
					public toString(): string;
					public prefix(): string;
					public annotationType(): java.lang.Class<any>;
					public value(): string;
					public suffix(): string;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module org {
	export module intellij {
		export module lang {
			export module annotations {
				export class MagicConstant extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<org.intellij.lang.annotations.MagicConstant>;
					/**
					 * Constructs a new instance of the org.intellij.lang.annotations.MagicConstant interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						intValues(): native.Array<number>;
						stringValues(): native.Array<string>;
						flags(): native.Array<number>;
						valuesFromClass(): java.lang.Class<any>;
						flagsFromClass(): java.lang.Class<any>;
						equals(object0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(obj: any): boolean;
					public toString(): string;
					public flagsFromClass(): java.lang.Class<any>;
					public valuesFromClass(): java.lang.Class<any>;
					public annotationType(): java.lang.Class<any>;
					public flags(): native.Array<number>;
					public hashCode(): number;
					public intValues(): native.Array<number>;
					public stringValues(): native.Array<string>;
				}
			}
		}
	}
}

declare module org {
	export module intellij {
		export module lang {
			export module annotations {
				export class Pattern extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<org.intellij.lang.annotations.Pattern>;
					/**
					 * Constructs a new instance of the org.intellij.lang.annotations.Pattern interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						value(): string;
						equals(object0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(obj: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public value(): string;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module org {
	export module intellij {
		export module lang {
			export module annotations {
				export class PrintFormat extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<org.intellij.lang.annotations.PrintFormat>;
					/**
					 * Constructs a new instance of the org.intellij.lang.annotations.PrintFormat interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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

declare module org {
	export module intellij {
		export module lang {
			export module annotations {
				export class PrintFormatPattern extends java.lang.Object {
					public static class: java.lang.Class<org.intellij.lang.annotations.PrintFormatPattern>;
				}
			}
		}
	}
}

declare module org {
	export module intellij {
		export module lang {
			export module annotations {
				export class RegExp extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<org.intellij.lang.annotations.RegExp>;
					/**
					 * Constructs a new instance of the org.intellij.lang.annotations.RegExp interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						prefix(): string;
						suffix(): string;
						equals(object0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(obj: any): boolean;
					public toString(): string;
					public prefix(): string;
					public annotationType(): java.lang.Class<any>;
					public suffix(): string;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module org {
	export module intellij {
		export module lang {
			export module annotations {
				export class Subst extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<org.intellij.lang.annotations.Subst>;
					/**
					 * Constructs a new instance of the org.intellij.lang.annotations.Subst interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						value(): string;
						equals(object0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(obj: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public value(): string;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module org {
	export module jetbrains {
		export module annotations {
			export class Contract extends java.lang.Object implements java.lang.annotation.Annotation {
				public static class: java.lang.Class<org.jetbrains.annotations.Contract>;
				/**
				 * Constructs a new instance of the org.jetbrains.annotations.Contract interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					value(): string;
					pure(): boolean;
					equals(object0: any): boolean;
					hashCode(): number;
					toString(): string;
					annotationType(): java.lang.Class<any>;
				});
				public constructor();
				public equals(obj: any): boolean;
				public hashCode(): number;
				public value(): string;
				public pure(): boolean;
				public annotationType(): java.lang.Class<any>;
				public toString(): string;
			}
		}
	}
}

declare module org {
	export module jetbrains {
		export module annotations {
			export class Nls extends java.lang.Object implements java.lang.annotation.Annotation {
				public static class: java.lang.Class<org.jetbrains.annotations.Nls>;
				/**
				 * Constructs a new instance of the org.jetbrains.annotations.Nls interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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

declare module org {
	export module jetbrains {
		export module annotations {
			export class NonNls extends java.lang.Object implements java.lang.annotation.Annotation {
				public static class: java.lang.Class<org.jetbrains.annotations.NonNls>;
				/**
				 * Constructs a new instance of the org.jetbrains.annotations.NonNls interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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

declare module org {
	export module jetbrains {
		export module annotations {
			export class NotNull extends java.lang.Object implements java.lang.annotation.Annotation {
				public static class: java.lang.Class<org.jetbrains.annotations.NotNull>;
				/**
				 * Constructs a new instance of the org.jetbrains.annotations.NotNull interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					value(): string;
					equals(object0: any): boolean;
					hashCode(): number;
					toString(): string;
					annotationType(): java.lang.Class<any>;
				});
				public constructor();
				public equals(obj: any): boolean;
				public hashCode(): number;
				public value(): string;
				public annotationType(): java.lang.Class<any>;
				public toString(): string;
			}
		}
	}
}

declare module org {
	export module jetbrains {
		export module annotations {
			export class Nullable extends java.lang.Object implements java.lang.annotation.Annotation {
				public static class: java.lang.Class<org.jetbrains.annotations.Nullable>;
				/**
				 * Constructs a new instance of the org.jetbrains.annotations.Nullable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					value(): string;
					equals(object0: any): boolean;
					hashCode(): number;
					toString(): string;
					annotationType(): java.lang.Class<any>;
				});
				public constructor();
				public equals(obj: any): boolean;
				public hashCode(): number;
				public value(): string;
				public annotationType(): java.lang.Class<any>;
				public toString(): string;
			}
		}
	}
}

declare module org {
	export module jetbrains {
		export module annotations {
			export class PropertyKey extends java.lang.Object implements java.lang.annotation.Annotation {
				public static class: java.lang.Class<org.jetbrains.annotations.PropertyKey>;
				/**
				 * Constructs a new instance of the org.jetbrains.annotations.PropertyKey interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					resourceBundle(): string;
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
				public resourceBundle(): string;
			}
		}
	}
}

declare module org {
	export module jetbrains {
		export module annotations {
			export class TestOnly extends java.lang.Object implements java.lang.annotation.Annotation {
				public static class: java.lang.Class<org.jetbrains.annotations.TestOnly>;
				/**
				 * Constructs a new instance of the org.jetbrains.annotations.TestOnly interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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

//Generics information:

