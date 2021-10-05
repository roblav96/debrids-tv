declare module androidx {
	export module constraintlayout {
		export module core {
			export class ArrayLinkedVariables extends java.lang.Object implements androidx.constraintlayout.core.ArrayRow.ArrayRowVariables {
				public static class: java.lang.Class<androidx.constraintlayout.core.ArrayLinkedVariables>;
				public mCache: androidx.constraintlayout.core.Cache;
				public getVariable(index: number): androidx.constraintlayout.core.SolverVariable;
				public divideByAmount(amount: number): void;
				public put(variable: androidx.constraintlayout.core.SolverVariable, value: number): void;
				public getId(index: number): number;
				public getNextIndice(index: number): number;
				public contains(variable: androidx.constraintlayout.core.SolverVariable): boolean;
				public get(v: androidx.constraintlayout.core.SolverVariable): number;
				public toString(): string;
				public use(definition: androidx.constraintlayout.core.ArrayRow, removeFromDefinition: boolean): number;
				public invert(): void;
				public add(variable: androidx.constraintlayout.core.SolverVariable, value: number, removeFromDefinition: boolean): void;
				public sizeInBytes(): number;
				public getValue(index: number): number;
				public getVariableValue(index: number): number;
				public getCurrentSize(): number;
				public getHead(): number;
				public display(): void;
				public clear(): void;
				public remove(variable: androidx.constraintlayout.core.SolverVariable, removeFromDefinition: boolean): number;
				public indexOf(variable: androidx.constraintlayout.core.SolverVariable): number;
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export class ArrayRow extends java.lang.Object implements androidx.constraintlayout.core.LinearSystem.Row {
				public static class: java.lang.Class<androidx.constraintlayout.core.ArrayRow>;
				public variables: androidx.constraintlayout.core.ArrayRow.ArrayRowVariables;
				public getKey(): androidx.constraintlayout.core.SolverVariable;
				public createRowDimensionRatio(variableA: androidx.constraintlayout.core.SolverVariable, variableB: androidx.constraintlayout.core.SolverVariable, variableC: androidx.constraintlayout.core.SolverVariable, variableD: androidx.constraintlayout.core.SolverVariable, ratio: number): androidx.constraintlayout.core.ArrayRow;
				public addError(system: androidx.constraintlayout.core.LinearSystem, strength: number): androidx.constraintlayout.core.ArrayRow;
				public addError(error: androidx.constraintlayout.core.SolverVariable): void;
				public createRowWithAngle(at: androidx.constraintlayout.core.SolverVariable, ab: androidx.constraintlayout.core.SolverVariable, bt: androidx.constraintlayout.core.SolverVariable, bb: androidx.constraintlayout.core.SolverVariable, angleComponent: number): androidx.constraintlayout.core.ArrayRow;
				public updateFromSystem(system: androidx.constraintlayout.core.LinearSystem): void;
				public constructor();
				public initFromRow(row: androidx.constraintlayout.core.LinearSystem.Row): void;
				public reset(): void;
				public createRowEquals(variableA: androidx.constraintlayout.core.SolverVariable, variableB: androidx.constraintlayout.core.SolverVariable, margin: number): androidx.constraintlayout.core.ArrayRow;
				public clear(): void;
				public isEmpty(): boolean;
				public constructor(cache: androidx.constraintlayout.core.Cache);
				public createRowEqualDimension(currentWeight: number, totalWeights: number, nextWeight: number, variableStartA: androidx.constraintlayout.core.SolverVariable, marginStartA: number, variableEndA: androidx.constraintlayout.core.SolverVariable, marginEndA: number, variableStartB: androidx.constraintlayout.core.SolverVariable, marginStartB: number, variableEndB: androidx.constraintlayout.core.SolverVariable, marginEndB: number): androidx.constraintlayout.core.ArrayRow;
				public createRowLowerThan(variableA: androidx.constraintlayout.core.SolverVariable, variableB: androidx.constraintlayout.core.SolverVariable, slack: androidx.constraintlayout.core.SolverVariable, margin: number): androidx.constraintlayout.core.ArrayRow;
				public createRowGreaterThan(a: androidx.constraintlayout.core.SolverVariable, b: number, slack: androidx.constraintlayout.core.SolverVariable): androidx.constraintlayout.core.ArrayRow;
				public createRowEqualMatchDimensions(currentWeight: number, totalWeights: number, nextWeight: number, variableStartA: androidx.constraintlayout.core.SolverVariable, variableEndA: androidx.constraintlayout.core.SolverVariable, variableStartB: androidx.constraintlayout.core.SolverVariable, variableEndB: androidx.constraintlayout.core.SolverVariable): androidx.constraintlayout.core.ArrayRow;
				public toString(): string;
				public pickPivot(exclude: androidx.constraintlayout.core.SolverVariable): androidx.constraintlayout.core.SolverVariable;
				public getPivotCandidate(system: androidx.constraintlayout.core.LinearSystem, avoid: native.Array<boolean>): androidx.constraintlayout.core.SolverVariable;
				public createRowGreaterThan(variableA: androidx.constraintlayout.core.SolverVariable, variableB: androidx.constraintlayout.core.SolverVariable, slack: androidx.constraintlayout.core.SolverVariable, margin: number): androidx.constraintlayout.core.ArrayRow;
				public updateFromSynonymVariable(system: androidx.constraintlayout.core.LinearSystem, variable: androidx.constraintlayout.core.SolverVariable, removeFromDefinition: boolean): void;
				public updateFromRow(system: androidx.constraintlayout.core.LinearSystem, definition: androidx.constraintlayout.core.ArrayRow, removeFromDefinition: boolean): void;
				public createRowEquals(variable: androidx.constraintlayout.core.SolverVariable, value: number): androidx.constraintlayout.core.ArrayRow;
				public updateFromFinalVariable(system: androidx.constraintlayout.core.LinearSystem, variable: androidx.constraintlayout.core.SolverVariable, removeFromDefinition: boolean): void;
			}
			export module ArrayRow {
				export class ArrayRowVariables extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.core.ArrayRow.ArrayRowVariables>;
					/**
					 * Constructs a new instance of the androidx.constraintlayout.core.ArrayRow() when extending the interface class.
					 */
					public constructor(implementation: {
						getCurrentSize(): number;
						getVariable(int0: number): androidx.constraintlayout.core.SolverVariable;
						getVariableValue(int0: number): number;
						get(solverVariable0: androidx.constraintlayout.core.SolverVariable): number;
						indexOf(solverVariable0: androidx.constraintlayout.core.SolverVariable): number;
						display(): void;
						clear(): void;
						contains(solverVariable0: androidx.constraintlayout.core.SolverVariable): boolean;
						put(solverVariable0: androidx.constraintlayout.core.SolverVariable, float1: number): void;
						sizeInBytes(): number;
						invert(): void;
						remove(solverVariable0: androidx.constraintlayout.core.SolverVariable, boolean1: boolean): number;
						divideByAmount(float0: number): void;
						add(solverVariable0: androidx.constraintlayout.core.SolverVariable, float1: number, boolean2: boolean): void;
						use(arrayRow0: androidx.constraintlayout.core.ArrayRow, boolean1: boolean): number;
					});
					public constructor();
					public invert(): void;
					public getVariable(int0: number): androidx.constraintlayout.core.SolverVariable;
					public contains(solverVariable0: androidx.constraintlayout.core.SolverVariable): boolean;
					public put(solverVariable0: androidx.constraintlayout.core.SolverVariable, float1: number): void;
					public divideByAmount(float0: number): void;
					public display(): void;
					public get(solverVariable0: androidx.constraintlayout.core.SolverVariable): number;
					public remove(solverVariable0: androidx.constraintlayout.core.SolverVariable, boolean1: boolean): number;
					public getCurrentSize(): number;
					public indexOf(solverVariable0: androidx.constraintlayout.core.SolverVariable): number;
					public clear(): void;
					public sizeInBytes(): number;
					public use(arrayRow0: androidx.constraintlayout.core.ArrayRow, boolean1: boolean): number;
					public add(solverVariable0: androidx.constraintlayout.core.SolverVariable, float1: number, boolean2: boolean): void;
					public getVariableValue(int0: number): number;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export class Cache extends java.lang.Object {
				public static class: java.lang.Class<androidx.constraintlayout.core.Cache>;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export class GoalRow extends androidx.constraintlayout.core.ArrayRow {
				public static class: java.lang.Class<androidx.constraintlayout.core.GoalRow>;
				public initFromRow(row: androidx.constraintlayout.core.LinearSystem.Row): void;
				public constructor(cache: androidx.constraintlayout.core.Cache);
				public getKey(): androidx.constraintlayout.core.SolverVariable;
				public clear(): void;
				public addError(system: androidx.constraintlayout.core.LinearSystem, strength: number): androidx.constraintlayout.core.ArrayRow;
				public updateFromRow(system: androidx.constraintlayout.core.LinearSystem, definition: androidx.constraintlayout.core.ArrayRow, removeFromDefinition: boolean): void;
				public addError(error: androidx.constraintlayout.core.SolverVariable): void;
				public isEmpty(): boolean;
				public updateFromFinalVariable(system: androidx.constraintlayout.core.LinearSystem, variable: androidx.constraintlayout.core.SolverVariable, removeFromDefinition: boolean): void;
				public updateFromSystem(system: androidx.constraintlayout.core.LinearSystem): void;
				public constructor();
				public getPivotCandidate(system: androidx.constraintlayout.core.LinearSystem, avoid: native.Array<boolean>): androidx.constraintlayout.core.SolverVariable;
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export class LinearSystem extends java.lang.Object {
				public static class: java.lang.Class<androidx.constraintlayout.core.LinearSystem>;
				public static FULL_DEBUG: boolean;
				public static DEBUG: boolean;
				public static MEASURE: boolean;
				public static USE_DEPENDENCY_ORDERING: boolean;
				public static USE_BASIC_SYNONYMS: boolean;
				public static SIMPLIFY_SYNONYMS: boolean;
				public static USE_SYNONYMS: boolean;
				public static SKIP_COLUMNS: boolean;
				public static OPTIMIZED_ENGINE: boolean;
				public hasSimpleDefinition: boolean;
				public graphOptimizer: boolean;
				public newgraphOptimizer: boolean;
				public static sMetrics: androidx.constraintlayout.core.Metrics;
				public static ARRAY_ROW_CREATION: number;
				public static OPTIMIZED_ARRAY_ROW_CREATION: number;
				public createErrorVariable(strength: number, prefix: string): androidx.constraintlayout.core.SolverVariable;
				public fillMetrics(metrics: androidx.constraintlayout.core.Metrics): void;
				public removeRow(row: androidx.constraintlayout.core.ArrayRow): void;
				public addSynonym(a: androidx.constraintlayout.core.SolverVariable, b: androidx.constraintlayout.core.SolverVariable, margin: number): void;
				public addCentering(a: androidx.constraintlayout.core.SolverVariable, b: androidx.constraintlayout.core.SolverVariable, m1: number, bias: number, c: androidx.constraintlayout.core.SolverVariable, d: androidx.constraintlayout.core.SolverVariable, m2: number, strength: number): void;
				public addLowerBarrier(a: androidx.constraintlayout.core.SolverVariable, b: androidx.constraintlayout.core.SolverVariable, margin: number, hasMatchConstraintWidgets: boolean): void;
				public static getMetrics(): androidx.constraintlayout.core.Metrics;
				public addRatio(a: androidx.constraintlayout.core.SolverVariable, b: androidx.constraintlayout.core.SolverVariable, c: androidx.constraintlayout.core.SolverVariable, d: androidx.constraintlayout.core.SolverVariable, ratio: number, strength: number): void;
				public constructor();
				public reset(): void;
				public minimize(): void;
				public createSlackVariable(): androidx.constraintlayout.core.SolverVariable;
				public addLowerThan(a: androidx.constraintlayout.core.SolverVariable, b: androidx.constraintlayout.core.SolverVariable, margin: number, strength: number): void;
				public addEquality(a: androidx.constraintlayout.core.SolverVariable, value: number): void;
				public static createRowDimensionPercent(linearSystem: androidx.constraintlayout.core.LinearSystem, variableA: androidx.constraintlayout.core.SolverVariable, variableC: androidx.constraintlayout.core.SolverVariable, percent: number): androidx.constraintlayout.core.ArrayRow;
				public displayReadableRows(): void;
				public addGreaterBarrier(a: androidx.constraintlayout.core.SolverVariable, b: androidx.constraintlayout.core.SolverVariable, margin: number, hasMatchConstraintWidgets: boolean): void;
				public addCenterPoint(widget: androidx.constraintlayout.core.widgets.ConstraintWidget, target: androidx.constraintlayout.core.widgets.ConstraintWidget, angle: number, radius: number): void;
				public addGreaterThan(a: androidx.constraintlayout.core.SolverVariable, b: androidx.constraintlayout.core.SolverVariable, margin: number, strength: number): void;
				public createObjectVariable(anchor: any): androidx.constraintlayout.core.SolverVariable;
				public getNumVariables(): number;
				public createExtraVariable(): androidx.constraintlayout.core.SolverVariable;
				public getObjectVariableValue(object: any): number;
				public getNumEquations(): number;
				public displayVariablesReadableRows(): void;
				public getMemoryUsed(): number;
				public createRow(): androidx.constraintlayout.core.ArrayRow;
				public addEquality(a: androidx.constraintlayout.core.SolverVariable, b: androidx.constraintlayout.core.SolverVariable, margin: number, strength: number): androidx.constraintlayout.core.ArrayRow;
				public getCache(): androidx.constraintlayout.core.Cache;
				public addConstraint(row: androidx.constraintlayout.core.ArrayRow): void;
			}
			export module LinearSystem {
				export class Row extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.core.LinearSystem.Row>;
					/**
					 * Constructs a new instance of the androidx.constraintlayout.core.LinearSystem() when extending the interface class.
					 */
					public constructor(implementation: {
						getPivotCandidate(linearSystem0: androidx.constraintlayout.core.LinearSystem, booleans1: native.Array<boolean>): androidx.constraintlayout.core.SolverVariable;
						clear(): void;
						initFromRow(row0: androidx.constraintlayout.core.LinearSystem.Row): void;
						addError(solverVariable0: androidx.constraintlayout.core.SolverVariable): void;
						updateFromSystem(linearSystem0: androidx.constraintlayout.core.LinearSystem): void;
						getKey(): androidx.constraintlayout.core.SolverVariable;
						isEmpty(): boolean;
						updateFromRow(linearSystem0: androidx.constraintlayout.core.LinearSystem, arrayRow1: androidx.constraintlayout.core.ArrayRow, boolean2: boolean): void;
						updateFromFinalVariable(linearSystem0: androidx.constraintlayout.core.LinearSystem, solverVariable1: androidx.constraintlayout.core.SolverVariable, boolean2: boolean): void;
					});
					public constructor();
					public getPivotCandidate(linearSystem0: androidx.constraintlayout.core.LinearSystem, booleans1: native.Array<boolean>): androidx.constraintlayout.core.SolverVariable;
					public updateFromFinalVariable(linearSystem0: androidx.constraintlayout.core.LinearSystem, solverVariable1: androidx.constraintlayout.core.SolverVariable, boolean2: boolean): void;
					public isEmpty(): boolean;
					public clear(): void;
					public updateFromSystem(linearSystem0: androidx.constraintlayout.core.LinearSystem): void;
					public initFromRow(row0: androidx.constraintlayout.core.LinearSystem.Row): void;
					public addError(solverVariable0: androidx.constraintlayout.core.SolverVariable): void;
					public getKey(): androidx.constraintlayout.core.SolverVariable;
					public updateFromRow(linearSystem0: androidx.constraintlayout.core.LinearSystem, arrayRow1: androidx.constraintlayout.core.ArrayRow, boolean2: boolean): void;
				}
				export class ValuesRow extends androidx.constraintlayout.core.ArrayRow {
					public static class: java.lang.Class<androidx.constraintlayout.core.LinearSystem.ValuesRow>;
					public addError(system: androidx.constraintlayout.core.LinearSystem, strength: number): androidx.constraintlayout.core.ArrayRow;
					public updateFromSystem(system: androidx.constraintlayout.core.LinearSystem): void;
					public isEmpty(): boolean;
					public getPivotCandidate(system: androidx.constraintlayout.core.LinearSystem, avoid: native.Array<boolean>): androidx.constraintlayout.core.SolverVariable;
					public addError(error: androidx.constraintlayout.core.SolverVariable): void;
					public updateFromRow(system: androidx.constraintlayout.core.LinearSystem, definition: androidx.constraintlayout.core.ArrayRow, removeFromDefinition: boolean): void;
					public constructor(cache: androidx.constraintlayout.core.Cache);
					public constructor();
					public initFromRow(row: androidx.constraintlayout.core.LinearSystem.Row): void;
					public constructor(this0: androidx.constraintlayout.core.LinearSystem, cache: androidx.constraintlayout.core.Cache);
					public clear(): void;
					public updateFromFinalVariable(system: androidx.constraintlayout.core.LinearSystem, variable: androidx.constraintlayout.core.SolverVariable, removeFromDefinition: boolean): void;
					public getKey(): androidx.constraintlayout.core.SolverVariable;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export class Metrics extends java.lang.Object {
				public static class: java.lang.Class<androidx.constraintlayout.core.Metrics>;
				public measuresWidgetsDuration: number;
				public measuresLayoutDuration: number;
				public measuredWidgets: number;
				public measuredMatchWidgets: number;
				public measures: number;
				public additionalMeasures: number;
				public resolutions: number;
				public tableSizeIncrease: number;
				public minimize: number;
				public constraints: number;
				public simpleconstraints: number;
				public optimize: number;
				public iterations: number;
				public pivots: number;
				public bfs: number;
				public variables: number;
				public errors: number;
				public slackvariables: number;
				public extravariables: number;
				public maxTableSize: number;
				public fullySolved: number;
				public graphOptimizer: number;
				public graphSolved: number;
				public linearSolved: number;
				public resolvedWidgets: number;
				public minimizeGoal: number;
				public maxVariables: number;
				public maxRows: number;
				public centerConnectionResolved: number;
				public matchConnectionResolved: number;
				public chainConnectionResolved: number;
				public barrierConnectionResolved: number;
				public oldresolvedWidgets: number;
				public nonresolvedWidgets: number;
				public problematicLayouts: java.util.ArrayList<string>;
				public lastTableSize: number;
				public widgets: number;
				public measuresWrap: number;
				public measuresWrapInfeasible: number;
				public infeasibleDetermineGroups: number;
				public determineGroups: number;
				public layouts: number;
				public grouping: number;
				public reset(): void;
				public toString(): string;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export class Pools extends java.lang.Object {
				public static class: java.lang.Class<androidx.constraintlayout.core.Pools>;
			}
			export module Pools {
				export class Pool<T>  extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.core.Pools.Pool<any>>;
					/**
					 * Constructs a new instance of the androidx.constraintlayout.core.Pools() when extending the interface class.
					 */
					public constructor(implementation: {
						acquire(): T;
						release(object0: T): boolean;
						releaseAll(objects0: native.Array<T>, int1: number): void;
					});
					public constructor();
					public releaseAll(objects0: native.Array<T>, int1: number): void;
					public acquire(): T;
					public release(object0: T): boolean;
				}
				export class SimplePool<T>  extends androidx.constraintlayout.core.Pools.Pool<any> {
					public static class: java.lang.Class<androidx.constraintlayout.core.Pools.SimplePool<any>>;
					public releaseAll(variables: native.Array<any>, count: number): void;
					public acquire(): any;
					public release(instance: any): boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export class PriorityGoalRow extends androidx.constraintlayout.core.ArrayRow {
				public static class: java.lang.Class<androidx.constraintlayout.core.PriorityGoalRow>;
				public constructor(cache: androidx.constraintlayout.core.Cache);
				public getKey(): androidx.constraintlayout.core.SolverVariable;
				public addError(system: androidx.constraintlayout.core.LinearSystem, strength: number): androidx.constraintlayout.core.ArrayRow;
				public addError(error: androidx.constraintlayout.core.SolverVariable): void;
				public toString(): string;
				public updateFromSystem(system: androidx.constraintlayout.core.LinearSystem): void;
				public constructor();
				public getPivotCandidate(system: androidx.constraintlayout.core.LinearSystem, avoid: native.Array<boolean>): androidx.constraintlayout.core.SolverVariable;
				public initFromRow(row: androidx.constraintlayout.core.LinearSystem.Row): void;
				public clear(): void;
				public updateFromRow(system: androidx.constraintlayout.core.LinearSystem, definition: androidx.constraintlayout.core.ArrayRow, removeFromDefinition: boolean): void;
				public isEmpty(): boolean;
				public updateFromFinalVariable(system: androidx.constraintlayout.core.LinearSystem, variable: androidx.constraintlayout.core.SolverVariable, removeFromDefinition: boolean): void;
			}
			export module PriorityGoalRow {
				export class GoalVariableAccessor extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.core.PriorityGoalRow.GoalVariableAccessor>;
					public reset(): void;
					public toString(): string;
					public addToGoal(other: androidx.constraintlayout.core.SolverVariable, value: number): boolean;
					public add(other: androidx.constraintlayout.core.SolverVariable): void;
					public isNull(): boolean;
					public init(variable: androidx.constraintlayout.core.SolverVariable): void;
					public isSmallerThan(other: androidx.constraintlayout.core.SolverVariable): boolean;
					public constructor(this0: androidx.constraintlayout.core.PriorityGoalRow, row: androidx.constraintlayout.core.PriorityGoalRow);
					public isNegative(): boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export class SolverVariable extends java.lang.Comparable<androidx.constraintlayout.core.SolverVariable> {
				public static class: java.lang.Class<androidx.constraintlayout.core.SolverVariable>;
				public static STRENGTH_NONE: number;
				public static STRENGTH_LOW: number;
				public static STRENGTH_MEDIUM: number;
				public static STRENGTH_HIGH: number;
				public static STRENGTH_HIGHEST: number;
				public static STRENGTH_EQUALITY: number;
				public static STRENGTH_BARRIER: number;
				public static STRENGTH_CENTERING: number;
				public static STRENGTH_FIXED: number;
				public inGoal: boolean;
				public id: number;
				public strength: number;
				public computedValue: number;
				public isFinalValue: boolean;
				public usageInRowCount: number;
				public setFinalValue(system: androidx.constraintlayout.core.LinearSystem, value: number): void;
				public constructor(type: androidx.constraintlayout.core.SolverVariable.Type, prefix: string);
				public setName(name: string): void;
				public getName(): string;
				public toString(): string;
				public compareTo(v: androidx.constraintlayout.core.SolverVariable): number;
				public setSynonym(system: androidx.constraintlayout.core.LinearSystem, synonymVariable: androidx.constraintlayout.core.SolverVariable, value: number): void;
				public reset(): void;
				public constructor(name: string, type: androidx.constraintlayout.core.SolverVariable.Type);
				public setType(type: androidx.constraintlayout.core.SolverVariable.Type, prefix: string): void;
				public addToRow(row: androidx.constraintlayout.core.ArrayRow): void;
				public removeFromRow(row: androidx.constraintlayout.core.ArrayRow): void;
				public updateReferencesWithNewDefinition(system: androidx.constraintlayout.core.LinearSystem, definition: androidx.constraintlayout.core.ArrayRow): void;
			}
			export module SolverVariable {
				export class Type {
					public static class: java.lang.Class<androidx.constraintlayout.core.SolverVariable.Type>;
					public static UNRESTRICTED: androidx.constraintlayout.core.SolverVariable.Type;
					public static CONSTANT: androidx.constraintlayout.core.SolverVariable.Type;
					public static SLACK: androidx.constraintlayout.core.SolverVariable.Type;
					public static ERROR: androidx.constraintlayout.core.SolverVariable.Type;
					public static UNKNOWN: androidx.constraintlayout.core.SolverVariable.Type;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static values(): native.Array<androidx.constraintlayout.core.SolverVariable.Type>;
					public static valueOf(name: string): androidx.constraintlayout.core.SolverVariable.Type;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export class SolverVariableValues extends java.lang.Object implements androidx.constraintlayout.core.ArrayRow.ArrayRowVariables {
				public static class: java.lang.Class<androidx.constraintlayout.core.SolverVariableValues>;
				public mCache: androidx.constraintlayout.core.Cache;
				public getVariable(index: number): androidx.constraintlayout.core.SolverVariable;
				public divideByAmount(amount: number): void;
				public put(variable: androidx.constraintlayout.core.SolverVariable, value: number): void;
				public contains(variable: androidx.constraintlayout.core.SolverVariable): boolean;
				public toString(): string;
				public invert(): void;
				public sizeInBytes(): number;
				public use(def: androidx.constraintlayout.core.ArrayRow, removeFromDefinition: boolean): number;
				public getVariableValue(index: number): number;
				public add(v: androidx.constraintlayout.core.SolverVariable, value: number, removeFromDefinition: boolean): void;
				public getCurrentSize(): number;
				public display(): void;
				public clear(): void;
				public get(variable: androidx.constraintlayout.core.SolverVariable): number;
				public remove(v: androidx.constraintlayout.core.SolverVariable, removeFromDefinition: boolean): number;
				public indexOf(variable: androidx.constraintlayout.core.SolverVariable): number;
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module motion {
				export class CustomAttribute extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.core.motion.CustomAttribute>;
					public getType(): androidx.constraintlayout.core.motion.CustomAttribute.AttributeType;
					public constructor(source: androidx.constraintlayout.core.motion.CustomAttribute, value: any);
					public diff(CustomAttribute: androidx.constraintlayout.core.motion.CustomAttribute): boolean;
					public setStringValue(value: string): void;
					public static setAttributes(view: any, map: java.util.HashMap<string,androidx.constraintlayout.core.motion.CustomAttribute>): void;
					public constructor(name: string, attributeType: androidx.constraintlayout.core.motion.CustomAttribute.AttributeType, value: any, method: boolean);
					public static extractAttributes(base: java.util.HashMap<string,androidx.constraintlayout.core.motion.CustomAttribute>, view: any): java.util.HashMap<string,androidx.constraintlayout.core.motion.CustomAttribute>;
					public getValuesToInterpolate(ret: native.Array<number>): void;
					public getValueToInterpolate(): number;
					public static hsvToRgb(hue: number, saturation: number, value: number): number;
					public constructor(name: string, attributeType: androidx.constraintlayout.core.motion.CustomAttribute.AttributeType);
					public isContinuous(): boolean;
					public setIntValue(value: number): void;
					public setInterpolatedValue(view: any, value: native.Array<number>): void;
					public setFloatValue(value: number): void;
					public setValue(value: any): void;
					public setColorValue(value: number): void;
					public setValue(value: native.Array<number>): void;
					public applyCustom(view: any): void;
					public numberOfInterpolatedValues(): number;
				}
				export module CustomAttribute {
					export class AttributeType {
						public static class: java.lang.Class<androidx.constraintlayout.core.motion.CustomAttribute.AttributeType>;
						public static INT_TYPE: androidx.constraintlayout.core.motion.CustomAttribute.AttributeType;
						public static FLOAT_TYPE: androidx.constraintlayout.core.motion.CustomAttribute.AttributeType;
						public static COLOR_TYPE: androidx.constraintlayout.core.motion.CustomAttribute.AttributeType;
						public static COLOR_DRAWABLE_TYPE: androidx.constraintlayout.core.motion.CustomAttribute.AttributeType;
						public static STRING_TYPE: androidx.constraintlayout.core.motion.CustomAttribute.AttributeType;
						public static BOOLEAN_TYPE: androidx.constraintlayout.core.motion.CustomAttribute.AttributeType;
						public static DIMENSION_TYPE: androidx.constraintlayout.core.motion.CustomAttribute.AttributeType;
						public static REFERENCE_TYPE: androidx.constraintlayout.core.motion.CustomAttribute.AttributeType;
						public static valueOf(name: string): androidx.constraintlayout.core.motion.CustomAttribute.AttributeType;
						public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
						public static values(): native.Array<androidx.constraintlayout.core.motion.CustomAttribute.AttributeType>;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module motion {
				export class CustomVariable extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.core.motion.CustomVariable>;
					public getType(): number;
					public getColorValue(): number;
					public constructor(source: androidx.constraintlayout.core.motion.CustomVariable, value: any);
					public static rgbaTocColor(r: number, g: number, b: number, a: number): number;
					public setStringValue(value: string): void;
					public constructor(c: androidx.constraintlayout.core.motion.CustomVariable);
					public getValuesToInterpolate(ret: native.Array<number>): void;
					public applyToWidget(view: androidx.constraintlayout.core.motion.MotionWidget): void;
					public constructor(name: string, type: number, value: string);
					public toString(): string;
					public isContinuous(): boolean;
					public getInterpolatedColor(value: native.Array<number>): number;
					public setValue(value: any): void;
					public setValue(value: native.Array<number>): void;
					public getFloatValue(): number;
					public numberOfInterpolatedValues(): number;
					public constructor(name: string, attributeType: number);
					public getIntegerValue(): number;
					public constructor(name: string, attributeType: number, value: any);
					public getBooleanValue(): boolean;
					public constructor(name: string, type: number, value: boolean);
					public static colorString(v: number): string;
					public diff(CustomAttribute: androidx.constraintlayout.core.motion.CustomVariable): boolean;
					public setInterpolatedValue(view: androidx.constraintlayout.core.motion.MotionWidget, value: native.Array<number>): void;
					public getValueToInterpolate(): number;
					public constructor(name: string, type: number, value: number);
					public static hsvToRgb(hue: number, saturation: number, value: number): number;
					public setIntValue(value: number): void;
					public getName(): string;
					public setFloatValue(value: number): void;
					public copy(): androidx.constraintlayout.core.motion.CustomVariable;
					public setBooleanValue(value: boolean): void;
					public getStringValue(): string;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module motion {
				export class Motion extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.core.motion.Motion>;
					public static PATH_PERCENT: number;
					public static PATH_PERPENDICULAR: number;
					public static HORIZONTAL_PATH_X: number;
					public static HORIZONTAL_PATH_Y: number;
					public static VERTICAL_PATH_X: number;
					public static VERTICAL_PATH_Y: number;
					public static DRAW_PATH_NONE: number;
					public static DRAW_PATH_BASIC: number;
					public static DRAW_PATH_RELATIVE: number;
					public static DRAW_PATH_CARTESIAN: number;
					public static DRAW_PATH_AS_CONFIGURED: number;
					public static DRAW_PATH_RECTANGLE: number;
					public static DRAW_PATH_SCREEN: number;
					public static ROTATION_RIGHT: number;
					public static ROTATION_LEFT: number;
					public getCenter(p: number, pos: native.Array<number>, vel: native.Array<number>): void;
					public interpolate(child: androidx.constraintlayout.core.motion.MotionWidget, global_position: number, time: number, keyCache: androidx.constraintlayout.core.motion.utils.KeyCache): boolean;
					public setup(parentWidth: number, parentHeight: number, transitionDuration: number, currentTime: number): void;
					public setStartState(rect: androidx.constraintlayout.core.motion.utils.ViewState, v: androidx.constraintlayout.core.motion.MotionWidget, rotation: number, preWidth: number, preHeight: number): void;
					public addKey(key: androidx.constraintlayout.core.motion.key.MotionKey): void;
					public getKeyFrameInfo(type: number, info: native.Array<number>): number;
					public getStartWidth(): number;
					public getView(): androidx.constraintlayout.core.motion.MotionWidget;
					public getKeyFramePositions(type: native.Array<number>, pos: native.Array<number>): number;
					public getFinalHeight(): number;
					public toString(): string;
					public setDrawPath(debugMode: number): void;
					public setStart(mw: androidx.constraintlayout.core.motion.MotionWidget): void;
					public getTransformPivotTarget(): number;
					public getStartX(): number;
					public getFinalX(): number;
					public getStartHeight(): number;
					public setEnd(mw: androidx.constraintlayout.core.motion.MotionWidget): void;
					public setView(view: androidx.constraintlayout.core.motion.MotionWidget): void;
					public constructor(view: androidx.constraintlayout.core.motion.MotionWidget);
					public getStartY(): number;
					public buildRect(p: number, path: native.Array<number>, offset: number): void;
					public getFinalWidth(): number;
					public setTransformPivotTarget(transformPivotTarget: number): void;
					public getFinalY(): number;
					public getCenterY(): number;
					public setPathMotionArc(arc: number): void;
					public buildKeyFrames(keyFrames: native.Array<number>, mode: native.Array<number>, pos: native.Array<number>): number;
					public setupRelative(motionController: androidx.constraintlayout.core.motion.Motion): void;
					public getCenterX(): number;
					public buildPath(points: native.Array<number>, pointCount: number): void;
					public getKeyFrame(i: number): androidx.constraintlayout.core.motion.MotionPaths;
					public getAnimateRelativeTo(): number;
					public getDrawPath(): number;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module motion {
				export class MotionConstrainedPoint extends java.lang.Comparable<androidx.constraintlayout.core.motion.MotionConstrainedPoint> {
					public static class: java.lang.Class<androidx.constraintlayout.core.motion.MotionConstrainedPoint>;
					public static TAG: string;
					public static DEBUG: boolean;
					public rotationY: number;
					public compareTo(o: androidx.constraintlayout.core.motion.MotionConstrainedPoint): number;
					public applyParameters(view: androidx.constraintlayout.core.motion.MotionWidget): void;
					public setState(rect: androidx.constraintlayout.core.motion.utils.Rect, view: androidx.constraintlayout.core.motion.MotionWidget, rotation: number, prevous: number): void;
					public constructor();
					public addValues(splines: java.util.HashMap<string,androidx.constraintlayout.core.motion.utils.SplineSet>, mFramePosition: number): void;
					public setState(view: androidx.constraintlayout.core.motion.MotionWidget): void;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module motion {
				export class MotionPaths extends java.lang.Comparable<androidx.constraintlayout.core.motion.MotionPaths> {
					public static class: java.lang.Class<androidx.constraintlayout.core.motion.MotionPaths>;
					public static TAG: string;
					public static DEBUG: boolean;
					public static OLD_WAY: boolean;
					public static PERPENDICULAR: number;
					public static CARTESIAN: number;
					public static SCREEN: number;
					public constructor(parentWidth: number, parentHeight: number, c: androidx.constraintlayout.core.motion.key.MotionKeyPosition, startTimePoint: androidx.constraintlayout.core.motion.MotionPaths, endTimePoint: androidx.constraintlayout.core.motion.MotionPaths);
					public applyParameters(c: androidx.constraintlayout.core.motion.MotionWidget): void;
					public setupRelative(mc: androidx.constraintlayout.core.motion.Motion, relative: androidx.constraintlayout.core.motion.MotionPaths): void;
					public constructor();
					public compareTo(o: androidx.constraintlayout.core.motion.MotionPaths): number;
					public configureRelativeTo(toOrbit: androidx.constraintlayout.core.motion.Motion): void;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module motion {
				export class MotionWidget extends java.lang.Object implements androidx.constraintlayout.core.motion.utils.TypedValues {
					public static class: java.lang.Class<androidx.constraintlayout.core.motion.MotionWidget>;
					public static VISIBILITY_MODE_NORMAL: number;
					public static VISIBILITY_MODE_IGNORE: number;
					public static INVISIBLE: number;
					public static VISIBLE: number;
					public static ROTATE_NONE: number;
					public static ROTATE_PORTRATE_OF_RIGHT: number;
					public static ROTATE_PORTRATE_OF_LEFT: number;
					public static ROTATE_RIGHT_OF_PORTRATE: number;
					public static ROTATE_LEFT_OF_PORTRATE: number;
					public static UNSET: number;
					public static MATCH_CONSTRAINT: number;
					public static PARENT_ID: number;
					public static FILL_PARENT: number;
					public static MATCH_PARENT: number;
					public static WRAP_CONTENT: number;
					public static GONE_UNSET: number;
					public static MATCH_CONSTRAINT_WRAP: number;
					public getRotationX(): number;
					public getBottom(): number;
					public getX(): number;
					public setValueMotion(id: number, value: string): boolean;
					public setValue(id: number, value: string): boolean;
					public getValueAttributes(id: number): number;
					public constructor();
					public setRotationX(rotationX: number): void;
					public getVisibility(): number;
					public getAlpha(): number;
					public setBounds(left: number, top: number, right: number, bottom: number): void;
					public getRight(): number;
					public getHeight(): number;
					public getPivotY(): number;
					public getY(): number;
					public setValueMotion(id: number, value: number): boolean;
					public getTranslationY(): number;
					public setTranslationX(translationX: number): void;
					public setValue(id: number, value: boolean): boolean;
					public getWidgetFrame(): androidx.constraintlayout.core.state.WidgetFrame;
					public getTranslationX(): number;
					public getLeft(): number;
					public setPivotY(py: number): void;
					public setCustomAttribute(name: string, type: number, value: string): void;
					public getParent(): androidx.constraintlayout.core.motion.MotionWidget;
					public setPivotX(px: number): void;
					public setTranslationY(translationY: number): void;
					public getCustomAttribute(name: string): androidx.constraintlayout.core.motion.CustomVariable;
					public toString(): string;
					public getTranslationZ(): number;
					public setTranslationZ(tz: number): void;
					public getPivotX(): number;
					public findViewById(mTransformPivotTarget: number): androidx.constraintlayout.core.motion.MotionWidget;
					public layout(l: number, t: number, r: number, b: number): void;
					public setVisibility(visibility: number): void;
					public setCustomAttribute(name: string, type: number, value: boolean): void;
					public setRotationZ(rotationZ: number): void;
					public setRotationY(rotationY: number): void;
					public getScaleY(): number;
					public getCustomAttributeNames(): java.util.Set<string>;
					public getWidth(): number;
					public getId(name: string): number;
					public getRotationZ(): number;
					public getTop(): number;
					public setScaleY(scaleY: number): void;
					public constructor(f: androidx.constraintlayout.core.state.WidgetFrame);
					public getScaleX(): number;
					public setValue(id: number, value: number): boolean;
					public getRotationY(): number;
					public setScaleX(scaleX: number): void;
					public getName(): string;
					public setValueAttributes(id: number, value: number): boolean;
					public setCustomAttribute(name: string, type: number, value: number): void;
				}
				export module MotionWidget {
					export class Motion extends java.lang.Object {
						public static class: java.lang.Class<androidx.constraintlayout.core.motion.MotionWidget.Motion>;
						public mAnimateRelativeTo: number;
						public mAnimateCircleAngleTo: number;
						public mTransitionEasing: string;
						public mPathMotionArc: number;
						public mDrawPath: number;
						public mMotionStagger: number;
						public mPolarRelativeTo: number;
						public mPathRotate: number;
						public mQuantizeMotionPhase: number;
						public mQuantizeMotionSteps: number;
						public mQuantizeInterpolatorString: string;
						public mQuantizeInterpolatorType: number;
						public mQuantizeInterpolatorID: number;
						public constructor();
					}
					export class PropertySet extends java.lang.Object {
						public static class: java.lang.Class<androidx.constraintlayout.core.motion.MotionWidget.PropertySet>;
						public visibility: number;
						public mVisibilityMode: number;
						public alpha: number;
						public mProgress: number;
						public constructor();
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module motion {
				export module key {
					export class MotionConstraintSet extends java.lang.Object {
						public static class: java.lang.Class<androidx.constraintlayout.core.motion.key.MotionConstraintSet>;
						public mIdString: string;
						public static ROTATE_NONE: number;
						public static ROTATE_PORTRATE_OF_RIGHT: number;
						public static ROTATE_PORTRATE_OF_LEFT: number;
						public static ROTATE_RIGHT_OF_PORTRATE: number;
						public static ROTATE_LEFT_OF_PORTRATE: number;
						public mRotate: number;
						public constructor();
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module motion {
				export module key {
					export abstract class MotionKey extends java.lang.Object implements androidx.constraintlayout.core.motion.utils.TypedValues {
						public static class: java.lang.Class<androidx.constraintlayout.core.motion.key.MotionKey>;
						public static UNSET: number;
						public mFramePosition: number;
						public mType: number;
						public mCustom: java.util.HashMap<string,androidx.constraintlayout.core.motion.CustomVariable>;
						public static ALPHA: string;
						public static ELEVATION: string;
						public static ROTATION: string;
						public static ROTATION_X: string;
						public static TRANSITION_PATH_ROTATE: string;
						public static SCALE_X: string;
						public static SCALE_Y: string;
						public static TRANSLATION_X: string;
						public static TRANSLATION_Y: string;
						public static CUSTOM: string;
						public static VISIBILITY: string;
						public constructor();
						public setViewId(id: number): androidx.constraintlayout.core.motion.key.MotionKey;
						public setFramePosition(pos: number): void;
						public setCustomAttribute(name: string, type: number, value: string): void;
						public copy(src: androidx.constraintlayout.core.motion.key.MotionKey): androidx.constraintlayout.core.motion.key.MotionKey;
						public getAttributeNames(hashSet0: java.util.HashSet<string>): void;
						public clone(): any;
						public setCustomAttribute(name: string, type: number, value: boolean): void;
						public clone(): androidx.constraintlayout.core.motion.key.MotionKey;
						public setValue(type: number, value: boolean): boolean;
						public getFramePosition(): number;
						public setCustomAttribute(name: string, type: number, value: number): void;
						public setInterpolation(interpolation: java.util.HashMap<string,java.lang.Integer>): void;
						public setValue(type: number, value: number): boolean;
						public addValues(hashMap0: java.util.HashMap<string,androidx.constraintlayout.core.motion.utils.SplineSet>): void;
						public getId(string0: string): number;
						public setValue(type: number, value: string): boolean;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module motion {
				export module key {
					export class MotionKeyAttributes extends androidx.constraintlayout.core.motion.key.MotionKey {
						public static class: java.lang.Class<androidx.constraintlayout.core.motion.key.MotionKeyAttributes>;
						public static KEY_TYPE: number;
						public constructor();
						public getAttributeNames(hashSet0: java.util.HashSet<string>): void;
						public clone(): any;
						public clone(): androidx.constraintlayout.core.motion.key.MotionKey;
						public setValue(type: number, value: boolean): boolean;
						public setInterpolation(interpolation: java.util.HashMap<string,java.lang.Integer>): void;
						public setValue(type: number, value: number): boolean;
						public getAttributeNames(attributes: java.util.HashSet<string>): void;
						public addValues(hashMap0: java.util.HashMap<string,androidx.constraintlayout.core.motion.utils.SplineSet>): void;
						public getId(name: string): number;
						public getCurveFit(): number;
						public addValues(splines: java.util.HashMap<string,androidx.constraintlayout.core.motion.utils.SplineSet>): void;
						public printAttributes(): void;
						public setValue(type: number, value: string): boolean;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module motion {
				export module key {
					export class MotionKeyCycle extends androidx.constraintlayout.core.motion.key.MotionKey {
						public static class: java.lang.Class<androidx.constraintlayout.core.motion.key.MotionKeyCycle>;
						public static WAVE_PERIOD: string;
						public static WAVE_OFFSET: string;
						public static WAVE_PHASE: string;
						public static WAVE_SHAPE: string;
						public static SHAPE_SIN_WAVE: number;
						public static SHAPE_SQUARE_WAVE: number;
						public static SHAPE_TRIANGLE_WAVE: number;
						public static SHAPE_SAW_WAVE: number;
						public static SHAPE_REVERSE_SAW_WAVE: number;
						public static SHAPE_COS_WAVE: number;
						public static SHAPE_BOUNCE: number;
						public static KEY_TYPE: number;
						public addCycleValues(oscSet: java.util.HashMap<string,androidx.constraintlayout.core.motion.utils.KeyCycleOscillator>): void;
						public constructor();
						public getAttributeNames(hashSet0: java.util.HashSet<string>): void;
						public clone(): any;
						public clone(): androidx.constraintlayout.core.motion.key.MotionKey;
						public setValue(type: number, value: boolean): boolean;
						public dump(): void;
						public setValue(type: number, value: number): boolean;
						public getAttributeNames(attributes: java.util.HashSet<string>): void;
						public addValues(hashMap0: java.util.HashMap<string,androidx.constraintlayout.core.motion.utils.SplineSet>): void;
						public getValue(key: string): number;
						public getId(name: string): number;
						public addValues(splines: java.util.HashMap<string,androidx.constraintlayout.core.motion.utils.SplineSet>): void;
						public printAttributes(): void;
						public setValue(type: number, value: string): boolean;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module motion {
				export module key {
					export class MotionKeyPosition extends androidx.constraintlayout.core.motion.key.MotionKey {
						public static class: java.lang.Class<androidx.constraintlayout.core.motion.key.MotionKeyPosition>;
						public static SELECTION_SLOPE: number;
						public mCurveFit: number;
						public mTransitionEasing: string;
						public mPathMotionArc: number;
						public mDrawPath: number;
						public mPercentWidth: number;
						public mPercentHeight: number;
						public mPercentX: number;
						public mPercentY: number;
						public mAltPercentX: number;
						public mAltPercentY: number;
						public static TYPE_SCREEN: number;
						public static TYPE_PATH: number;
						public static TYPE_CARTESIAN: number;
						public mPositionType: number;
						public constructor();
						public positionAttributes(view: androidx.constraintlayout.core.motion.MotionWidget, start: androidx.constraintlayout.core.motion.utils.FloatRect, end: androidx.constraintlayout.core.motion.utils.FloatRect, x: number, y: number, attribute: native.Array<string>, value: native.Array<number>): void;
						public copy(src: androidx.constraintlayout.core.motion.key.MotionKey): androidx.constraintlayout.core.motion.key.MotionKey;
						public clone(): any;
						public getAttributeNames(hashSet0: java.util.HashSet<string>): void;
						public clone(): androidx.constraintlayout.core.motion.key.MotionKey;
						public intersects(layoutWidth: number, layoutHeight: number, start: androidx.constraintlayout.core.motion.utils.FloatRect, end: androidx.constraintlayout.core.motion.utils.FloatRect, x: number, y: number): boolean;
						public setValue(type: number, value: boolean): boolean;
						public setValue(type: number, value: number): boolean;
						public getAttributeNames(attributes: java.util.HashSet<string>): void;
						public addValues(hashMap0: java.util.HashMap<string,androidx.constraintlayout.core.motion.utils.SplineSet>): void;
						public getId(name: string): number;
						public addValues(splines: java.util.HashMap<string,androidx.constraintlayout.core.motion.utils.SplineSet>): void;
						public setValue(type: number, value: string): boolean;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module motion {
				export module key {
					export class MotionKeyTimeCycle extends androidx.constraintlayout.core.motion.key.MotionKey {
						public static class: java.lang.Class<androidx.constraintlayout.core.motion.key.MotionKeyTimeCycle>;
						public static KEY_TYPE: number;
						public constructor();
						public copy(src: androidx.constraintlayout.core.motion.key.MotionKey): androidx.constraintlayout.core.motion.key.MotionKeyTimeCycle;
						public copy(src: androidx.constraintlayout.core.motion.key.MotionKey): androidx.constraintlayout.core.motion.key.MotionKey;
						public getAttributeNames(hashSet0: java.util.HashSet<string>): void;
						public clone(): any;
						public clone(): androidx.constraintlayout.core.motion.key.MotionKey;
						public setValue(type: number, value: boolean): boolean;
						public setValue(type: number, value: number): boolean;
						public getAttributeNames(attributes: java.util.HashSet<string>): void;
						public addTimeValues(splines: java.util.HashMap<string,androidx.constraintlayout.core.motion.utils.TimeCycleSplineSet>): void;
						public addValues(hashMap0: java.util.HashMap<string,androidx.constraintlayout.core.motion.utils.SplineSet>): void;
						public getId(name: string): number;
						public addValues(splines: java.util.HashMap<string,androidx.constraintlayout.core.motion.utils.SplineSet>): void;
						public setValue(type: number, value: string): boolean;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module motion {
				export module key {
					export class MotionKeyTrigger extends androidx.constraintlayout.core.motion.key.MotionKey {
						public static class: java.lang.Class<androidx.constraintlayout.core.motion.key.MotionKeyTrigger>;
						public static VIEW_TRANSITION_ON_CROSS: string;
						public static VIEW_TRANSITION_ON_POSITIVE_CROSS: string;
						public static VIEW_TRANSITION_ON_NEGATIVE_CROSS: string;
						public static POST_LAYOUT: string;
						public static TRIGGER_SLACK: string;
						public static TRIGGER_COLLISION_VIEW: string;
						public static TRIGGER_COLLISION_ID: string;
						public static TRIGGER_ID: string;
						public static POSITIVE_CROSS: string;
						public static NEGATIVE_CROSS: string;
						public static TRIGGER_RECEIVER: string;
						public static CROSS: string;
						public static TYPE_VIEW_TRANSITION_ON_CROSS: number;
						public static TYPE_VIEW_TRANSITION_ON_POSITIVE_CROSS: number;
						public static TYPE_VIEW_TRANSITION_ON_NEGATIVE_CROSS: number;
						public static TYPE_POST_LAYOUT: number;
						public static TYPE_TRIGGER_SLACK: number;
						public static TYPE_TRIGGER_COLLISION_VIEW: number;
						public static TYPE_TRIGGER_COLLISION_ID: number;
						public static TYPE_TRIGGER_ID: number;
						public static TYPE_POSITIVE_CROSS: number;
						public static TYPE_NEGATIVE_CROSS: number;
						public static TYPE_TRIGGER_RECEIVER: number;
						public static TYPE_CROSS: number;
						public static KEY_TYPE: number;
						public constructor();
						public copy(src: androidx.constraintlayout.core.motion.key.MotionKey): androidx.constraintlayout.core.motion.key.MotionKey;
						public getAttributeNames(hashSet0: java.util.HashSet<string>): void;
						public clone(): any;
						public clone(): androidx.constraintlayout.core.motion.key.MotionKey;
						public setValue(type: number, value: boolean): boolean;
						public setValue(type: number, value: number): boolean;
						public getAttributeNames(attributes: java.util.HashSet<string>): void;
						public addValues(hashMap0: java.util.HashMap<string,androidx.constraintlayout.core.motion.utils.SplineSet>): void;
						public getId(name: string): number;
						public copy(src: androidx.constraintlayout.core.motion.key.MotionKey): androidx.constraintlayout.core.motion.key.MotionKeyTrigger;
						public addValues(splines: java.util.HashMap<string,androidx.constraintlayout.core.motion.utils.SplineSet>): void;
						public conditionallyFire(position: number, child: androidx.constraintlayout.core.motion.MotionWidget): void;
						public setValue(type: number, value: string): boolean;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module motion {
				export module parse {
					export class KeyParser extends java.lang.Object {
						public static class: java.lang.Class<androidx.constraintlayout.core.motion.parse.KeyParser>;
						public constructor();
						public static main(strings0: native.Array<string>): void;
						public static parseAttributes(str: string): androidx.constraintlayout.core.motion.utils.TypedBundle;
					}
					export module KeyParser {
						export class DataType extends java.lang.Object {
							public static class: java.lang.Class<androidx.constraintlayout.core.motion.parse.KeyParser.DataType>;
							/**
							 * Constructs a new instance of the androidx.constraintlayout.core.motion.parse.KeyParser() when extending the interface class.
							 */
							public constructor(implementation: {
								get(int0: number): number;
							});
							public constructor();
							public get(int0: number): number;
						}
						export class Ids extends java.lang.Object {
							public static class: java.lang.Class<androidx.constraintlayout.core.motion.parse.KeyParser.Ids>;
							/**
							 * Constructs a new instance of the androidx.constraintlayout.core.motion.parse.KeyParser() when extending the interface class.
							 */
							public constructor(implementation: {
								get(string0: string): number;
							});
							public constructor();
							public get(string0: string): number;
						}
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module motion {
				export module utils {
					export class ArcCurveFit extends androidx.constraintlayout.core.motion.utils.CurveFit {
						public static class: java.lang.Class<androidx.constraintlayout.core.motion.utils.ArcCurveFit>;
						public static ARC_START_VERTICAL: number;
						public static ARC_START_HORIZONTAL: number;
						public static ARC_START_FLIP: number;
						public static ARC_START_LINEAR: number;
						public getPos(double0: number, doubles1: native.Array<number>): void;
						public getSlope(double0: number, doubles1: native.Array<number>): void;
						public constructor();
						public getTimePoints(): native.Array<number>;
						public constructor(arcModes: native.Array<number>, time: native.Array<number>, y: native.Array<native.Array<number>>);
						public getPos(t: number, j: number): number;
						public getPos(double0: number, floats1: native.Array<number>): void;
						public getPos(double0: number, int1: number): number;
						public getSlope(t: number, v: native.Array<number>): void;
						public getPos(t: number, v: native.Array<number>): void;
						public getSlope(double0: number, int1: number): number;
						public getSlope(t: number, j: number): number;
					}
					export module ArcCurveFit {
						export class Arc extends java.lang.Object {
							public static class: java.lang.Class<androidx.constraintlayout.core.motion.utils.ArcCurveFit.Arc>;
							public getLinearX(t: number): number;
							public getLinearDY(t: number): number;
							public getLinearDX(t: number): number;
							public getLinearY(t: number): number;
						}
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module motion {
				export module utils {
					export abstract class CurveFit extends java.lang.Object {
						public static class: java.lang.Class<androidx.constraintlayout.core.motion.utils.CurveFit>;
						public static SPLINE: number;
						public static LINEAR: number;
						public static CONSTANT: number;
						public getPos(double0: number, doubles1: native.Array<number>): void;
						public constructor();
						public getSlope(double0: number, doubles1: native.Array<number>): void;
						public static getArc(arcModes: native.Array<number>, time: native.Array<number>, y: native.Array<native.Array<number>>): androidx.constraintlayout.core.motion.utils.CurveFit;
						public getTimePoints(): native.Array<number>;
						public getPos(double0: number, floats1: native.Array<number>): void;
						public getPos(double0: number, int1: number): number;
						public static get(type: number, time: native.Array<number>, y: native.Array<native.Array<number>>): androidx.constraintlayout.core.motion.utils.CurveFit;
						public getSlope(double0: number, int1: number): number;
					}
					export module CurveFit {
						export class Constant extends androidx.constraintlayout.core.motion.utils.CurveFit {
							public static class: java.lang.Class<androidx.constraintlayout.core.motion.utils.CurveFit.Constant>;
							public getPos(double0: number, floats1: native.Array<number>): void;
							public getPos(t: number, v: native.Array<number>): void;
							public getSlope(t: number, v: native.Array<number>): void;
							public getPos(t: number, j: number): number;
							public getSlope(t: number, j: number): number;
							public getPos(double0: number, int1: number): number;
							public getSlope(double0: number, int1: number): number;
							public getPos(double0: number, doubles1: native.Array<number>): void;
							public getSlope(double0: number, doubles1: native.Array<number>): void;
							public getTimePoints(): native.Array<number>;
						}
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module motion {
				export module utils {
					export class DifferentialInterpolator extends java.lang.Object {
						public static class: java.lang.Class<androidx.constraintlayout.core.motion.utils.DifferentialInterpolator>;
						/**
						 * Constructs a new instance of the androidx.constraintlayout.core.motion.utils.DifferentialInterpolator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getInterpolation(float0: number): number;
							getVelocity(): number;
						});
						public constructor();
						public getVelocity(): number;
						public getInterpolation(float0: number): number;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module motion {
				export module utils {
					export class Easing extends java.lang.Object {
						public static class: java.lang.Class<androidx.constraintlayout.core.motion.utils.Easing>;
						public static NAMED_EASING: native.Array<string>;
						public constructor();
						public get(x: number): number;
						public getDiff(x: number): number;
						public static getInterpolator(configString: string): androidx.constraintlayout.core.motion.utils.Easing;
						public toString(): string;
					}
					export module Easing {
						export class CubicEasing extends androidx.constraintlayout.core.motion.utils.Easing {
							public static class: java.lang.Class<androidx.constraintlayout.core.motion.utils.Easing.CubicEasing>;
							public constructor();
							public get(x: number): number;
							public getDiff(x: number): number;
							public constructor(x1: number, y1: number, x2: number, y2: number);
						}
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module motion {
				export module utils {
					export class FloatRect extends java.lang.Object {
						public static class: java.lang.Class<androidx.constraintlayout.core.motion.utils.FloatRect>;
						public bottom: number;
						public left: number;
						public right: number;
						public top: number;
						public constructor();
						public centerX(): number;
						public centerY(): number;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module motion {
				export module utils {
					export class HyperSpline extends java.lang.Object {
						public static class: java.lang.Class<androidx.constraintlayout.core.motion.utils.HyperSpline>;
						public getPos(p: number, x: native.Array<number>): void;
						public approxLength(curve: native.Array<androidx.constraintlayout.core.motion.utils.HyperSpline.Cubic>): number;
						public constructor();
						public getVelocity(p: number, v: native.Array<number>): void;
						public setup(points: native.Array<native.Array<number>>): void;
						public constructor(points: native.Array<native.Array<number>>);
						public getPos(p: number, splineNumber: number): number;
					}
					export module HyperSpline {
						export class Cubic extends java.lang.Object {
							public static class: java.lang.Class<androidx.constraintlayout.core.motion.utils.HyperSpline.Cubic>;
							public constructor(a: number, b: number, c: number, d: number);
							public eval(u: number): number;
							public vel(v: number): number;
						}
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module motion {
				export module utils {
					export class KeyCache extends java.lang.Object {
						public static class: java.lang.Class<androidx.constraintlayout.core.motion.utils.KeyCache>;
						public constructor();
						public setFloatValue(view: any, type: string, element: number, value: number): void;
						public getFloatValue(view: any, type: string, element: number): number;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module motion {
				export module utils {
					export abstract class KeyCycleOscillator extends java.lang.Object {
						public static class: java.lang.Class<androidx.constraintlayout.core.motion.utils.KeyCycleOscillator>;
						public mVariesBy: number;
						public constructor();
						public setType(type: string): void;
						public static makeWidgetCycle(attribute: string): androidx.constraintlayout.core.motion.utils.KeyCycleOscillator;
						public getSlope(position: number): number;
						public setup(pathLength: number): void;
						public setProperty(widget: androidx.constraintlayout.core.motion.MotionWidget, t: number): void;
						public getCurveFit(): androidx.constraintlayout.core.motion.utils.CurveFit;
						public toString(): string;
						public variesByPath(): boolean;
						public get(t: number): number;
						public setPoint(framePosition: number, shape: number, waveString: string, variesBy: number, period: number, offset: number, phase: number, value: number, custom: any): void;
						public setCustom(custom: any): void;
						public setPoint(framePosition: number, shape: number, waveString: string, variesBy: number, period: number, offset: number, phase: number, value: number): void;
					}
					export module KeyCycleOscillator {
						export class CoreSpline extends androidx.constraintlayout.core.motion.utils.KeyCycleOscillator {
							public static class: java.lang.Class<androidx.constraintlayout.core.motion.utils.KeyCycleOscillator.CoreSpline>;
							public constructor();
							public constructor(str: string);
							public setProperty(widget: androidx.constraintlayout.core.motion.MotionWidget, t: number): void;
						}
						export class CycleOscillator extends java.lang.Object {
							public static class: java.lang.Class<androidx.constraintlayout.core.motion.utils.KeyCycleOscillator.CycleOscillator>;
							public setPoint(index: number, framePosition: number, wavePeriod: number, offset: number, phase: number, values: number): void;
							public getSlope(time: number): number;
							public getLastPhase(): number;
							public getValues(time: number): number;
							public setup(pathLength: number): void;
						}
						export class IntDoubleSort extends java.lang.Object {
							public static class: java.lang.Class<androidx.constraintlayout.core.motion.utils.KeyCycleOscillator.IntDoubleSort>;
						}
						export class IntFloatFloatSort extends java.lang.Object {
							public static class: java.lang.Class<androidx.constraintlayout.core.motion.utils.KeyCycleOscillator.IntFloatFloatSort>;
						}
						export class PathRotateSet extends androidx.constraintlayout.core.motion.utils.KeyCycleOscillator {
							public static class: java.lang.Class<androidx.constraintlayout.core.motion.utils.KeyCycleOscillator.PathRotateSet>;
							public constructor();
							public constructor(str: string);
							public setProperty(widget: androidx.constraintlayout.core.motion.MotionWidget, t: number): void;
							public setPathRotate(view: androidx.constraintlayout.core.motion.MotionWidget, t: number, dx: number, dy: number): void;
						}
						export class WavePoint extends java.lang.Object {
							public static class: java.lang.Class<androidx.constraintlayout.core.motion.utils.KeyCycleOscillator.WavePoint>;
							public constructor(position: number, period: number, offset: number, phase: number, value: number);
						}
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module motion {
				export module utils {
					export class KeyFrameArray extends java.lang.Object {
						public static class: java.lang.Class<androidx.constraintlayout.core.motion.utils.KeyFrameArray>;
						public constructor();
					}
					export module KeyFrameArray {
						export class CustomArray extends java.lang.Object {
							public static class: java.lang.Class<androidx.constraintlayout.core.motion.utils.KeyFrameArray.CustomArray>;
							public constructor();
							public size(): number;
							public append(position: number, value: androidx.constraintlayout.core.motion.CustomAttribute): void;
							public remove(position: number): void;
							public valueAt(i: number): androidx.constraintlayout.core.motion.CustomAttribute;
							public clear(): void;
							public keyAt(i: number): number;
							public dump(): void;
						}
						export class CustomVar extends java.lang.Object {
							public static class: java.lang.Class<androidx.constraintlayout.core.motion.utils.KeyFrameArray.CustomVar>;
							public constructor();
							public size(): number;
							public valueAt(i: number): androidx.constraintlayout.core.motion.CustomVariable;
							public remove(position: number): void;
							public clear(): void;
							public append(position: number, value: androidx.constraintlayout.core.motion.CustomVariable): void;
							public keyAt(i: number): number;
							public dump(): void;
						}
						export class FloatArray extends java.lang.Object {
							public static class: java.lang.Class<androidx.constraintlayout.core.motion.utils.KeyFrameArray.FloatArray>;
							public constructor();
							public size(): number;
							public remove(position: number): void;
							public clear(): void;
							public valueAt(i: number): native.Array<number>;
							public append(position: number, value: native.Array<number>): void;
							public keyAt(i: number): number;
							public dump(): void;
						}
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module motion {
				export module utils {
					export class LinearCurveFit extends androidx.constraintlayout.core.motion.utils.CurveFit {
						public static class: java.lang.Class<androidx.constraintlayout.core.motion.utils.LinearCurveFit>;
						public getPos(double0: number, doubles1: native.Array<number>): void;
						public constructor();
						public getSlope(double0: number, doubles1: native.Array<number>): void;
						public constructor(time: native.Array<number>, y: native.Array<native.Array<number>>);
						public getTimePoints(): native.Array<number>;
						public getPos(t: number, j: number): number;
						public getPos(double0: number, floats1: native.Array<number>): void;
						public getPos(double0: number, int1: number): number;
						public getSlope(t: number, v: native.Array<number>): void;
						public getPos(t: number, v: native.Array<number>): void;
						public getSlope(double0: number, int1: number): number;
						public getSlope(t: number, j: number): number;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module motion {
				export module utils {
					export class MonotonicCurveFit extends androidx.constraintlayout.core.motion.utils.CurveFit {
						public static class: java.lang.Class<androidx.constraintlayout.core.motion.utils.MonotonicCurveFit>;
						public constructor();
						public constructor(time: native.Array<number>, y: native.Array<native.Array<number>>);
						public getPos(double0: number, floats1: native.Array<number>): void;
						public getPos(double0: number, int1: number): number;
						public getPos(t: number, v: native.Array<number>): void;
						public getPos(double0: number, doubles1: native.Array<number>): void;
						public getSlope(double0: number, doubles1: native.Array<number>): void;
						public static buildWave(configString: string): androidx.constraintlayout.core.motion.utils.MonotonicCurveFit;
						public getTimePoints(): native.Array<number>;
						public getPos(t: number, j: number): number;
						public getSlope(t: number, v: native.Array<number>): void;
						public getSlope(double0: number, int1: number): number;
						public getSlope(t: number, j: number): number;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module motion {
				export module utils {
					export class Oscillator extends java.lang.Object {
						public static class: java.lang.Class<androidx.constraintlayout.core.motion.utils.Oscillator>;
						public static TAG: string;
						public static SIN_WAVE: number;
						public static SQUARE_WAVE: number;
						public static TRIANGLE_WAVE: number;
						public static SAW_WAVE: number;
						public static REVERSE_SAW_WAVE: number;
						public static COS_WAVE: number;
						public static BOUNCE: number;
						public static CUSTOM: number;
						public getSlope(time: number, phase: number, dphase: number): number;
						public constructor();
						public setType(type: number, customType: string): void;
						public addPoint(position: number, period: number): void;
						public normalize(): void;
						public getValue(time: number, phase: number): number;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module motion {
				export module utils {
					export class Rect extends java.lang.Object {
						public static class: java.lang.Class<androidx.constraintlayout.core.motion.utils.Rect>;
						public bottom: number;
						public left: number;
						public right: number;
						public top: number;
						public constructor();
						public height(): number;
						public width(): number;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module motion {
				export module utils {
					export class Schlick extends androidx.constraintlayout.core.motion.utils.Easing {
						public static class: java.lang.Class<androidx.constraintlayout.core.motion.utils.Schlick>;
						public get(x: number): number;
						public getDiff(x: number): number;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module motion {
				export module utils {
					export abstract class SplineSet extends java.lang.Object {
						public static class: java.lang.Class<androidx.constraintlayout.core.motion.utils.SplineSet>;
						public mCurveFit: androidx.constraintlayout.core.motion.utils.CurveFit;
						public mTimePoints: native.Array<number>;
						public mValues: native.Array<number>;
						public constructor();
						public get(t: number): number;
						public getSlope(t: number): number;
						public setup(curveType: number): void;
						public setProperty(widget: androidx.constraintlayout.core.motion.utils.TypedValues, t: number): void;
						public setType(type: string): void;
						public setPoint(position: number, value: number): void;
						public static makeCustomSplineSet(str: string, attrList: androidx.constraintlayout.core.motion.utils.KeyFrameArray.CustomVar): androidx.constraintlayout.core.motion.utils.SplineSet;
						public static makeCustomSpline(str: string, attrList: androidx.constraintlayout.core.motion.utils.KeyFrameArray.CustomArray): androidx.constraintlayout.core.motion.utils.SplineSet;
						public getCurveFit(): androidx.constraintlayout.core.motion.utils.CurveFit;
						public toString(): string;
						public static makeSpline(str: string, currentTime: number): androidx.constraintlayout.core.motion.utils.SplineSet;
					}
					export module SplineSet {
						export class CoreSpline extends androidx.constraintlayout.core.motion.utils.SplineSet {
							public static class: java.lang.Class<androidx.constraintlayout.core.motion.utils.SplineSet.CoreSpline>;
							public constructor();
							public constructor(str: string, currentTime: number);
							public setProperty(widget: androidx.constraintlayout.core.motion.utils.TypedValues, t: number): void;
						}
						export class CustomSet extends androidx.constraintlayout.core.motion.utils.SplineSet {
							public static class: java.lang.Class<androidx.constraintlayout.core.motion.utils.SplineSet.CustomSet>;
							public constructor();
							public setPoint(position: number, value: number): void;
							public setProperty(view: androidx.constraintlayout.core.state.WidgetFrame, t: number): void;
							public setup(curveType: number): void;
							public setPoint(position: number, value: androidx.constraintlayout.core.motion.CustomAttribute): void;
							public constructor(attribute: string, attrList: androidx.constraintlayout.core.motion.utils.KeyFrameArray.CustomArray);
							public setProperty(widget: androidx.constraintlayout.core.motion.utils.TypedValues, t: number): void;
						}
						export class CustomSpline extends androidx.constraintlayout.core.motion.utils.SplineSet {
							public static class: java.lang.Class<androidx.constraintlayout.core.motion.utils.SplineSet.CustomSpline>;
							public constructor();
							public constructor(attribute: string, attrList: androidx.constraintlayout.core.motion.utils.KeyFrameArray.CustomVar);
							public setPoint(position: number, value: number): void;
							public setup(curveType: number): void;
							public setProperty(view: androidx.constraintlayout.core.motion.MotionWidget, t: number): void;
							public setProperty(widget: androidx.constraintlayout.core.motion.utils.TypedValues, t: number): void;
							public setPoint(position: number, value: androidx.constraintlayout.core.motion.CustomVariable): void;
						}
						export class Sort extends java.lang.Object {
							public static class: java.lang.Class<androidx.constraintlayout.core.motion.utils.SplineSet.Sort>;
						}
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module motion {
				export module utils {
					export class SpringStopEngine extends java.lang.Object implements androidx.constraintlayout.core.motion.utils.StopEngine {
						public static class: java.lang.Class<androidx.constraintlayout.core.motion.utils.SpringStopEngine>;
						public constructor();
						public isStopped(): boolean;
						public getAcceleration(): number;
						public getInterpolation(time: number): number;
						public getVelocity(): number;
						public debug(desc: string, time: number): string;
						public springConfig(currentPos: number, target: number, currentVelocity: number, mass: number, stiffness: number, damping: number, stopThreshold: number, boundaryMode: number): void;
						public getVelocity(t: number): number;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module motion {
				export module utils {
					export class StepCurve extends androidx.constraintlayout.core.motion.utils.Easing {
						public static class: java.lang.Class<androidx.constraintlayout.core.motion.utils.StepCurve>;
						public get(x: number): number;
						public getDiff(x: number): number;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module motion {
				export module utils {
					export class StopEngine extends java.lang.Object {
						public static class: java.lang.Class<androidx.constraintlayout.core.motion.utils.StopEngine>;
						/**
						 * Constructs a new instance of the androidx.constraintlayout.core.motion.utils.StopEngine interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							debug(string0: string, float1: number): string;
							getVelocity(float0: number): number;
							getInterpolation(float0: number): number;
							getVelocity(): number;
							isStopped(): boolean;
						});
						public constructor();
						public isStopped(): boolean;
						public getVelocity(float0: number): number;
						public getVelocity(): number;
						public debug(string0: string, float1: number): string;
						public getInterpolation(float0: number): number;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module motion {
				export module utils {
					export class StopLogicEngine extends java.lang.Object implements androidx.constraintlayout.core.motion.utils.StopEngine {
						public static class: java.lang.Class<androidx.constraintlayout.core.motion.utils.StopLogicEngine>;
						public constructor();
						public isStopped(): boolean;
						public getVelocity(x: number): number;
						public getInterpolation(v: number): number;
						public config(currentPos: number, destination: number, currentVelocity: number, maxTime: number, maxAcceleration: number, maxVelocity: number): void;
						public getVelocity(): number;
						public debug(desc: string, time: number): string;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module motion {
				export module utils {
					export abstract class TimeCycleSplineSet extends java.lang.Object {
						public static class: java.lang.Class<androidx.constraintlayout.core.motion.utils.TimeCycleSplineSet>;
						public mCurveFit: androidx.constraintlayout.core.motion.utils.CurveFit;
						public mWaveShape: number;
						public mTimePoints: native.Array<number>;
						public mValues: native.Array<native.Array<number>>;
						public count: number;
						public mType: string;
						public mCache: native.Array<number>;
						public static CURVE_VALUE: number;
						public static CURVE_PERIOD: number;
						public static CURVE_OFFSET: number;
						public static VAL_2PI: number;
						public mContinue: boolean;
						public last_time: number;
						public last_cycle: number;
						public constructor();
						public setup(curveType: number): void;
						public setType(type: string): void;
						public setStartTime(currentTime: number): void;
						public calcWave(period: number): number;
						public setPoint(position: number, value: number, period: number, shape: number, offset: number): void;
						public getCurveFit(): androidx.constraintlayout.core.motion.utils.CurveFit;
						public toString(): string;
					}
					export module TimeCycleSplineSet {
						export class CustomSet extends androidx.constraintlayout.core.motion.utils.TimeCycleSplineSet {
							public static class: java.lang.Class<androidx.constraintlayout.core.motion.utils.TimeCycleSplineSet.CustomSet>;
							public constructor();
							public setPoint(position: number, value: number, period: number, shape: number, offset: number): void;
							public setup(curveType: number): void;
							public setProperty(view: androidx.constraintlayout.core.motion.MotionWidget, t: number, time: number, cache: androidx.constraintlayout.core.motion.utils.KeyCache): boolean;
							public constructor(attribute: string, attrList: androidx.constraintlayout.core.motion.utils.KeyFrameArray.CustomArray);
							public setPoint(position: number, value: androidx.constraintlayout.core.motion.CustomAttribute, period: number, shape: number, offset: number): void;
						}
						export class CustomVarSet extends androidx.constraintlayout.core.motion.utils.TimeCycleSplineSet {
							public static class: java.lang.Class<androidx.constraintlayout.core.motion.utils.TimeCycleSplineSet.CustomVarSet>;
							public constructor();
							public constructor(attribute: string, attrList: androidx.constraintlayout.core.motion.utils.KeyFrameArray.CustomVar);
							public setPoint(position: number, value: androidx.constraintlayout.core.motion.CustomVariable, period: number, shape: number, offset: number): void;
							public setPoint(position: number, value: number, period: number, shape: number, offset: number): void;
							public setup(curveType: number): void;
							public setProperty(view: androidx.constraintlayout.core.motion.MotionWidget, t: number, time: number, cache: androidx.constraintlayout.core.motion.utils.KeyCache): boolean;
						}
						export class Sort extends java.lang.Object {
							public static class: java.lang.Class<androidx.constraintlayout.core.motion.utils.TimeCycleSplineSet.Sort>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module motion {
				export module utils {
					export class TypedBundle extends java.lang.Object {
						public static class: java.lang.Class<androidx.constraintlayout.core.motion.utils.TypedBundle>;
						public add(type: number, value: boolean): void;
						public constructor();
						public getInteger(type: number): number;
						public add(type: number, value: string): void;
						public clear(): void;
						public addIfNotNull(type: number, value: string): void;
						public add(type: number, value: number): void;
						public applyDelta(values: androidx.constraintlayout.core.motion.utils.TypedValues): void;
						public applyDelta(values: androidx.constraintlayout.core.motion.utils.TypedBundle): void;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module motion {
				export module utils {
					export class TypedValues extends java.lang.Object {
						public static class: java.lang.Class<androidx.constraintlayout.core.motion.utils.TypedValues>;
						/**
						 * Constructs a new instance of the androidx.constraintlayout.core.motion.utils.TypedValues interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							setValue(int0: number, int1: number): boolean;
							setValue(int0: number, float1: number): boolean;
							setValue(int0: number, string1: string): boolean;
							setValue(int0: number, boolean1: boolean): boolean;
							getId(string0: string): number;
						});
						public constructor();
						public static BOOLEAN_MASK: number;
						public static INT_MASK: number;
						public static TYPE_FRAME_POSITION: number;
						public static S_CUSTOM: string;
						public static TYPE_TARGET: number;
						public static FLOAT_MASK: number;
						public static STRING_MASK: number;
						public setValue(int0: number, string1: string): boolean;
						public setValue(int0: number, int1: number): boolean;
						public setValue(int0: number, boolean1: boolean): boolean;
						public getId(string0: string): number;
						public setValue(int0: number, float1: number): boolean;
					}
					export module TypedValues {
						export class Attributes extends java.lang.Object {
							public static class: java.lang.Class<androidx.constraintlayout.core.motion.utils.TypedValues.Attributes>;
							/**
							 * Constructs a new instance of the androidx.constraintlayout.core.motion.utils.TypedValues() when extending the interface class.
							 */
							public constructor(implementation: {
								getId(name: string): number;
								getType(name: number): number;
							});
							public constructor();
							public static S_ROTATION_Z: string;
							public static S_ROTATION_Y: string;
							public static TYPE_SCALE_Y: number;
							public static S_PIVOT_Y: string;
							public static TYPE_SCALE_X: number;
							public static S_ROTATION_X: string;
							public static S_PROGRESS: string;
							public static S_TRANSLATION_X: string;
							public static S_TRANSLATION_Y: string;
							public static TYPE_PATH_ROTATE: number;
							public static S_EASING: string;
							public static S_TARGET: string;
							public static TYPE_VISIBILITY: number;
							public static S_FRAME: string;
							public static TYPE_ALPHA: number;
							public static S_PATH_ROTATE: string;
							public static TYPE_CURVE_FIT: number;
							public static TYPE_EASING: number;
							public static S_SCALE_X: string;
							public static TYPE_PIVOT_Y: number;
							public static S_VISIBILITY: string;
							public static S_SCALE_Y: string;
							public static TYPE_PIVOT_X: number;
							public static S_ALPHA: string;
							public static S_PIVOT_X: string;
							public static S_ELEVATION: string;
							public static NAME: string;
							public static TYPE_ELEVATION: number;
							public static TYPE_TRANSLATION_X: number;
							public static TYPE_TRANSLATION_Y: number;
							public static TYPE_TRANSLATION_Z: number;
							public static S_CURVE_FIT: string;
							public static TYPE_PIVOT_TARGET: number;
							public static KEY_WORDS: native.Array<string>;
							public static S_TRANSLATION_Z: string;
							public static S_CUSTOM: string;
							public static TYPE_PROGRESS: number;
							public static S_PIVOT_TARGET: string;
							public static TYPE_ROTATION_X: number;
							public static TYPE_ROTATION_Y: number;
							public static TYPE_ROTATION_Z: number;
							public static getId(name: string): number;
							public static getType(name: number): number;
						}
						export class Custom extends java.lang.Object {
							public static class: java.lang.Class<androidx.constraintlayout.core.motion.utils.TypedValues.Custom>;
							/**
							 * Constructs a new instance of the androidx.constraintlayout.core.motion.utils.TypedValues() when extending the interface class.
							 */
							public constructor(implementation: {
								getId(name: string): number;
							});
							public constructor();
							public static TYPE_STRING: number;
							public static TYPE_REFERENCE: number;
							public static TYPE_BOOLEAN: number;
							public static TYPE_DIMENSION: number;
							public static TYPE_INT: number;
							public static S_BOOLEAN: string;
							public static S_INT: string;
							public static S_COLOR: string;
							public static S_DIMENSION: string;
							public static KEY_WORDS: native.Array<string>;
							public static S_REFERENCE: string;
							public static TYPE_FLOAT: number;
							public static S_STRING: string;
							public static TYPE_COLOR: number;
							public static NAME: string;
							public static S_FLOAT: string;
							public static getId(name: string): number;
						}
						export class Cycle extends java.lang.Object {
							public static class: java.lang.Class<androidx.constraintlayout.core.motion.utils.TypedValues.Cycle>;
							/**
							 * Constructs a new instance of the androidx.constraintlayout.core.motion.utils.TypedValues() when extending the interface class.
							 */
							public constructor(implementation: {
								getId(name: string): number;
								getType(name: number): number;
							});
							public constructor();
							public static S_ROTATION_Z: string;
							public static S_ROTATION_Y: string;
							public static TYPE_SCALE_Y: number;
							public static S_PIVOT_Y: string;
							public static TYPE_SCALE_X: number;
							public static S_ROTATION_X: string;
							public static S_PROGRESS: string;
							public static S_TRANSLATION_X: string;
							public static TYPE_WAVE_PHASE: number;
							public static S_TRANSLATION_Y: string;
							public static TYPE_PATH_ROTATE: number;
							public static S_EASING: string;
							public static TYPE_WAVE_SHAPE: number;
							public static TYPE_VISIBILITY: number;
							public static TYPE_ALPHA: number;
							public static S_PATH_ROTATE: string;
							public static TYPE_CURVE_FIT: number;
							public static S_WAVE_PHASE: string;
							public static TYPE_EASING: number;
							public static S_SCALE_X: string;
							public static TYPE_PIVOT_Y: number;
							public static S_VISIBILITY: string;
							public static S_SCALE_Y: string;
							public static TYPE_PIVOT_X: number;
							public static S_WAVE_SHAPE: string;
							public static S_ALPHA: string;
							public static S_PIVOT_X: string;
							public static S_ELEVATION: string;
							public static NAME: string;
							public static TYPE_CUSTOM_WAVE_SHAPE: number;
							public static TYPE_ELEVATION: number;
							public static TYPE_TRANSLATION_X: number;
							public static TYPE_WAVE_OFFSET: number;
							public static TYPE_TRANSLATION_Y: number;
							public static TYPE_TRANSLATION_Z: number;
							public static S_CURVE_FIT: string;
							public static S_CUSTOM_WAVE_SHAPE: string;
							public static TYPE_WAVE_PERIOD: number;
							public static S_WAVE_PERIOD: string;
							public static S_WAVE_OFFSET: string;
							public static KEY_WORDS: native.Array<string>;
							public static S_TRANSLATION_Z: string;
							public static TYPE_PROGRESS: number;
							public static TYPE_ROTATION_X: number;
							public static TYPE_ROTATION_Y: number;
							public static TYPE_ROTATION_Z: number;
							public static getId(name: string): number;
							public static getType(name: number): number;
						}
						export class Motion extends java.lang.Object {
							public static class: java.lang.Class<androidx.constraintlayout.core.motion.utils.TypedValues.Motion>;
							/**
							 * Constructs a new instance of the androidx.constraintlayout.core.motion.utils.TypedValues() when extending the interface class.
							 */
							public constructor(implementation: {
								getId(name: string): number;
							});
							public constructor();
							public static TYPE_QUANTIZE_INTERPOLATOR: number;
							public static TYPE_QUANTIZE_MOTIONSTEPS: number;
							public static S_POLAR_RELATIVETO: string;
							public static S_QUANTIZE_INTERPOLATOR_ID: string;
							public static S_EASING: string;
							public static TYPE_PATH_ROTATE: number;
							public static S_QUANTIZE_MOTIONSTEPS: string;
							public static S_PATH_ROTATE: string;
							public static TYPE_ANIMATE_RELATIVE_TO: number;
							public static TYPE_EASING: number;
							public static S_QUANTIZE_MOTION_PHASE: string;
							public static S_DRAW_PATH: string;
							public static TYPE_PATHMOTION_ARC: number;
							public static NAME: string;
							public static S_STAGGER: string;
							public static S_QUANTIZE_INTERPOLATOR_TYPE: string;
							public static TYPE_QUANTIZE_MOTION_PHASE: number;
							public static TYPE_POLAR_RELATIVETO: number;
							public static S_QUANTIZE_INTERPOLATOR: string;
							public static S_ANIMATE_CIRCLEANGLE_TO: string;
							public static TYPE_DRAW_PATH: number;
							public static S_PATHMOTION_ARC: string;
							public static KEY_WORDS: native.Array<string>;
							public static TYPE_STAGGER: number;
							public static TYPE_ANIMATE_CIRCLEANGLE_TO: number;
							public static TYPE_QUANTIZE_INTERPOLATOR_TYPE: number;
							public static S_ANIMATE_RELATIVE_TO: string;
							public static TYPE_QUANTIZE_INTERPOLATOR_ID: number;
							public static getId(name: string): number;
						}
						export class MotionScene extends java.lang.Object {
							public static class: java.lang.Class<androidx.constraintlayout.core.motion.utils.TypedValues.MotionScene>;
							/**
							 * Constructs a new instance of the androidx.constraintlayout.core.motion.utils.TypedValues() when extending the interface class.
							 */
							public constructor(implementation: {
								getType(name: number): number;
								getId(name: string): number;
							});
							public constructor();
							public static KEY_WORDS: native.Array<string>;
							public static S_DEFAULT_DURATION: string;
							public static S_LAYOUT_DURING_TRANSITION: string;
							public static TYPE_DEFAULT_DURATION: number;
							public static TYPE_LAYOUT_DURING_TRANSITION: number;
							public static NAME: string;
							public static getId(name: string): number;
							public static getType(name: number): number;
						}
						export class OnSwipe extends java.lang.Object {
							public static class: java.lang.Class<androidx.constraintlayout.core.motion.utils.TypedValues.OnSwipe>;
							/**
							 * Constructs a new instance of the androidx.constraintlayout.core.motion.utils.TypedValues() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
							public static LIMIT_BOUNDS_TO: string;
							public static SPRING_STIFFNESS: string;
							public static DRAG_DIRECTION: string;
							public static NESTED_SCROLL_FLAGS_ENUM: native.Array<string>;
							public static TOUCH_ANCHOR_SIDE: string;
							public static MAX_ACCELERATION: string;
							public static MAX_VELOCITY: string;
							public static TOUCH_ANCHOR_ID: string;
							public static ON_TOUCH_UP: string;
							public static AUTOCOMPLETE_MODE_ENUM: native.Array<string>;
							public static DRAG_SCALE: string;
							public static MOVE_WHEN_SCROLLAT_TOP: string;
							public static ON_TOUCH_UP_ENUM: native.Array<string>;
							public static AUTOCOMPLETE_MODE: string;
							public static SPRING_MASS: string;
							public static NESTED_SCROLL_FLAGS: string;
							public static ROTATION_CENTER_ID: string;
							public static DRAG_THRESHOLD: string;
							public static SPRING_BOUNDARY_ENUM: native.Array<string>;
							public static SPRINGS_TOP_THRESHOLD: string;
							public static SPRING_BOUNDARY: string;
							public static SPRING_DAMPING: string;
							public static TOUCH_REGION_ID: string;
						}
						export class Position extends java.lang.Object {
							public static class: java.lang.Class<androidx.constraintlayout.core.motion.utils.TypedValues.Position>;
							/**
							 * Constructs a new instance of the androidx.constraintlayout.core.motion.utils.TypedValues() when extending the interface class.
							 */
							public constructor(implementation: {
								getId(name: string): number;
								getType(name: number): number;
							});
							public constructor();
							public static S_PERCENT_HEIGHT: string;
							public static TYPE_POSITION_TYPE: number;
							public static TYPE_SIZE_PERCENT: number;
							public static TYPE_PERCENT_X: number;
							public static TYPE_PERCENT_Y: number;
							public static TYPE_PATH_MOTION_ARC: number;
							public static TYPE_TRANSITION_EASING: number;
							public static TYPE_PERCENT_WIDTH: number;
							public static S_PERCENT_WIDTH: string;
							public static KEY_WORDS: native.Array<string>;
							public static TYPE_CURVE_FIT: number;
							public static TYPE_DRAWPATH: number;
							public static TYPE_PERCENT_HEIGHT: number;
							public static S_TRANSITION_EASING: string;
							public static S_DRAWPATH: string;
							public static S_SIZE_PERCENT: string;
							public static S_PERCENT_X: string;
							public static S_PERCENT_Y: string;
							public static NAME: string;
							public static getId(name: string): number;
							public static getType(name: number): number;
						}
						export class Transition extends java.lang.Object {
							public static class: java.lang.Class<androidx.constraintlayout.core.motion.utils.TypedValues.Transition>;
							/**
							 * Constructs a new instance of the androidx.constraintlayout.core.motion.utils.TypedValues() when extending the interface class.
							 */
							public constructor(implementation: {
								getType(name: number): number;
								getId(name: string): number;
							});
							public constructor();
							public static TYPE_DURATION: number;
							public static TYPE_PATH_MOTION_ARC: number;
							public static S_AUTO_TRANSITION: string;
							public static S_PATH_MOTION_ARC: string;
							public static TYPE_AUTO_TRANSITION: number;
							public static S_DURATION: string;
							public static S_STAGGERED: string;
							public static TYPE_FROM: number;
							public static S_TO: string;
							public static TYPE_TRANSITION_FLAGS: number;
							public static KEY_WORDS: native.Array<string>;
							public static S_TRANSITION_FLAGS: string;
							public static S_FROM: string;
							public static TYPE_INTERPOLATOR: number;
							public static S_INTERPOLATOR: string;
							public static TYPE_TO: number;
							public static TYPE_STAGGERED: number;
							public static NAME: string;
							public static getId(name: string): number;
							public static getType(name: number): number;
						}
						export class Trigger extends java.lang.Object {
							public static class: java.lang.Class<androidx.constraintlayout.core.motion.utils.TypedValues.Trigger>;
							/**
							 * Constructs a new instance of the androidx.constraintlayout.core.motion.utils.TypedValues() when extending the interface class.
							 */
							public constructor(implementation: {
								getId(name: string): number;
							});
							public constructor();
							public static TYPE_VIEW_TRANSITION_ON_POSITIVE_CROSS: number;
							public static TRIGGER_RECEIVER: string;
							public static CROSS: string;
							public static POST_LAYOUT: string;
							public static VIEW_TRANSITION_ON_CROSS: string;
							public static TRIGGER_SLACK: string;
							public static TYPE_CROSS: number;
							public static TYPE_VIEW_TRANSITION_ON_CROSS: number;
							public static NEGATIVE_CROSS: string;
							public static TYPE_TRIGGER_RECEIVER: number;
							public static TYPE_NEGATIVE_CROSS: number;
							public static NAME: string;
							public static TRIGGER_COLLISION_ID: string;
							public static TRIGGER_COLLISION_VIEW: string;
							public static TRIGGER_ID: string;
							public static VIEW_TRANSITION_ON_POSITIVE_CROSS: string;
							public static TYPE_TRIGGER_SLACK: number;
							public static TYPE_TRIGGER_COLLISION_VIEW: number;
							public static TYPE_POST_LAYOUT: number;
							public static TYPE_TRIGGER_COLLISION_ID: number;
							public static KEY_WORDS: native.Array<string>;
							public static TYPE_POSITIVE_CROSS: number;
							public static TYPE_TRIGGER_ID: number;
							public static POSITIVE_CROSS: string;
							public static VIEW_TRANSITION_ON_NEGATIVE_CROSS: string;
							public static TYPE_VIEW_TRANSITION_ON_NEGATIVE_CROSS: number;
							public static getId(name: string): number;
						}
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module motion {
				export module utils {
					export class Utils extends java.lang.Object {
						public static class: java.lang.Class<androidx.constraintlayout.core.motion.utils.Utils>;
						public constructor();
						public static socketSend(str: string): void;
						public getInterpolatedColor(value: native.Array<number>): number;
						public static logStack(msg: string, n: number): void;
						public static log(str: string): void;
						public static log(tag: string, value: string): void;
						public static loge(tag: string, value: string): void;
						public static rgbaTocColor(r: number, g: number, b: number, a: number): number;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module motion {
				export module utils {
					export class VelocityMatrix extends java.lang.Object {
						public static class: java.lang.Class<androidx.constraintlayout.core.motion.utils.VelocityMatrix>;
						public constructor();
						public setTranslationVelocity(trans_x: androidx.constraintlayout.core.motion.utils.SplineSet, trans_y: androidx.constraintlayout.core.motion.utils.SplineSet, position: number): void;
						public clear(): void;
						public setScaleVelocity(scale_x: androidx.constraintlayout.core.motion.utils.SplineSet, scale_y: androidx.constraintlayout.core.motion.utils.SplineSet, position: number): void;
						public setScaleVelocity(osc_sx: androidx.constraintlayout.core.motion.utils.KeyCycleOscillator, osc_sy: androidx.constraintlayout.core.motion.utils.KeyCycleOscillator, position: number): void;
						public applyTransform(locationX: number, locationY: number, width: number, height: number, mAnchorDpDt: native.Array<number>): void;
						public setTranslationVelocity(osc_x: androidx.constraintlayout.core.motion.utils.KeyCycleOscillator, osc_y: androidx.constraintlayout.core.motion.utils.KeyCycleOscillator, position: number): void;
						public setRotationVelocity(rot: androidx.constraintlayout.core.motion.utils.SplineSet, position: number): void;
						public setRotationVelocity(osc_r: androidx.constraintlayout.core.motion.utils.KeyCycleOscillator, position: number): void;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module motion {
				export module utils {
					export class ViewState extends java.lang.Object {
						public static class: java.lang.Class<androidx.constraintlayout.core.motion.utils.ViewState>;
						public rotation: number;
						public left: number;
						public top: number;
						public right: number;
						public bottom: number;
						public constructor();
						public height(): number;
						public width(): number;
						public getState(v: androidx.constraintlayout.core.motion.MotionWidget): void;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module parser {
				export class CLArray extends androidx.constraintlayout.core.parser.CLContainer {
					public static class: java.lang.Class<androidx.constraintlayout.core.parser.CLArray>;
					public toFormattedJSON(indent: number, forceIndent: number): string;
					public static allocate(content: native.Array<string>): androidx.constraintlayout.core.parser.CLElement;
					public toJSON(): string;
					public constructor(content: native.Array<string>);
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module parser {
				export class CLContainer extends androidx.constraintlayout.core.parser.CLElement {
					public static class: java.lang.Class<androidx.constraintlayout.core.parser.CLContainer>;
					public static allocate(content: native.Array<string>): androidx.constraintlayout.core.parser.CLElement;
					public get(index: number): androidx.constraintlayout.core.parser.CLElement;
					public put(name: string, value: androidx.constraintlayout.core.parser.CLElement): void;
					public size(): number;
					public getFloatOrNaN(name: string): number;
					public getInt(index: number): number;
					public getBoolean(index: number): boolean;
					public constructor(content: native.Array<string>);
					public has(name: string): boolean;
					public toString(): string;
					public getStringOrNull(index: number): string;
					public getFloat(name: string): number;
					public getArray(index: number): androidx.constraintlayout.core.parser.CLArray;
					public getArrayOrNull(name: string): androidx.constraintlayout.core.parser.CLArray;
					public getStringOrNull(name: string): string;
					public getString(index: number): string;
					public getFloat(): number;
					public names(): java.util.ArrayList<string>;
					public getInt(name: string): number;
					public getFloat(index: number): number;
					public getObjectOrNull(name: string): androidx.constraintlayout.core.parser.CLObject;
					public getOrNull(index: number): androidx.constraintlayout.core.parser.CLElement;
					public getObject(index: number): androidx.constraintlayout.core.parser.CLObject;
					public getInt(): number;
					public add(element: androidx.constraintlayout.core.parser.CLElement): void;
					public getObject(name: string): androidx.constraintlayout.core.parser.CLObject;
					public getBoolean(name: string): boolean;
					public getArray(name: string): androidx.constraintlayout.core.parser.CLArray;
					public getOrNull(name: string): androidx.constraintlayout.core.parser.CLElement;
					public putNumber(name: string, value: number): void;
					public remove(name: string): void;
					public getString(name: string): string;
					public get(name: string): androidx.constraintlayout.core.parser.CLElement;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module parser {
				export class CLElement extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.core.parser.CLElement>;
					public start: number;
					public end: number;
					public mContainer: androidx.constraintlayout.core.parser.CLContainer;
					public static MAX_LINE: number;
					public static BASE_INDENT: number;
					public setContainer(element: androidx.constraintlayout.core.parser.CLContainer): void;
					public addIndent(builder: java.lang.StringBuilder, indent: number): void;
					public getLine(): number;
					public getEnd(): number;
					public setStart(start: number): void;
					public getStrClass(): string;
					public getDebugName(): string;
					public getInt(): number;
					public isStarted(): boolean;
					public getStart(): number;
					public constructor(content: native.Array<string>);
					public getContainer(): androidx.constraintlayout.core.parser.CLElement;
					public content(): string;
					public toFormattedJSON(indent: number, forceIndent: number): string;
					public toString(): string;
					public isDone(): boolean;
					public notStarted(): boolean;
					public toJSON(): string;
					public setLine(line: number): void;
					public setEnd(end: number): void;
					public getFloat(): number;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module parser {
				export class CLKey extends androidx.constraintlayout.core.parser.CLContainer {
					public static class: java.lang.Class<androidx.constraintlayout.core.parser.CLKey>;
					public toFormattedJSON(indent: number, forceIndent: number): string;
					public static allocate(name: string, value: androidx.constraintlayout.core.parser.CLElement): androidx.constraintlayout.core.parser.CLElement;
					public static allocate(content: native.Array<string>): androidx.constraintlayout.core.parser.CLElement;
					public getName(): string;
					public getValue(): androidx.constraintlayout.core.parser.CLElement;
					public toJSON(): string;
					public set(value: androidx.constraintlayout.core.parser.CLElement): void;
					public constructor(content: native.Array<string>);
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module parser {
				export class CLNumber extends androidx.constraintlayout.core.parser.CLElement {
					public static class: java.lang.Class<androidx.constraintlayout.core.parser.CLNumber>;
					public isInt(): boolean;
					public toFormattedJSON(indent: number, forceIndent: number): string;
					public constructor(value: number);
					public static allocate(content: native.Array<string>): androidx.constraintlayout.core.parser.CLElement;
					public toJSON(): string;
					public getInt(): number;
					public putValue(value: number): void;
					public getFloat(): number;
					public constructor(content: native.Array<string>);
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module parser {
				export class CLObject extends androidx.constraintlayout.core.parser.CLContainer implements java.lang.Iterable<androidx.constraintlayout.core.parser.CLKey>  {
					public static class: java.lang.Class<androidx.constraintlayout.core.parser.CLObject>;
					public toFormattedJSON(indent: number, forceIndent: number): string;
					public iterator(): java.util.Iterator<any>;
					public static allocate(content: native.Array<string>): androidx.constraintlayout.core.parser.CLElement;
					public toFormattedJSON(): string;
					public spliterator(): java.util.Spliterator<any>;
					public toJSON(): string;
					public static allocate(content: native.Array<string>): androidx.constraintlayout.core.parser.CLObject;
					public iterator(): java.util.Iterator<any>;
					public constructor(content: native.Array<string>);
					public forEach(action: any /* any*/): void;
				}
				export module CLObject {
					export class CLObjectIterator extends java.lang.Object {
						public static class: java.lang.Class<androidx.constraintlayout.core.parser.CLObject.CLObjectIterator>;
						public constructor(param0: androidx.constraintlayout.core.parser.CLObject, clObject: androidx.constraintlayout.core.parser.CLObject);
						public next(): any;
						public hasNext(): boolean;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module parser {
				export class CLParser extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.core.parser.CLParser>;
					public parse(): androidx.constraintlayout.core.parser.CLObject;
					public static parse(string: string): androidx.constraintlayout.core.parser.CLObject;
					public constructor(content: string);
				}
				export module CLParser {
					export class TYPE {
						public static class: java.lang.Class<androidx.constraintlayout.core.parser.CLParser.TYPE>;
						public static UNKNOWN: androidx.constraintlayout.core.parser.CLParser.TYPE;
						public static OBJECT: androidx.constraintlayout.core.parser.CLParser.TYPE;
						public static ARRAY: androidx.constraintlayout.core.parser.CLParser.TYPE;
						public static NUMBER: androidx.constraintlayout.core.parser.CLParser.TYPE;
						public static STRING: androidx.constraintlayout.core.parser.CLParser.TYPE;
						public static KEY: androidx.constraintlayout.core.parser.CLParser.TYPE;
						public static TOKEN: androidx.constraintlayout.core.parser.CLParser.TYPE;
						public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
						public static valueOf(name: string): androidx.constraintlayout.core.parser.CLParser.TYPE;
						public static values(): native.Array<androidx.constraintlayout.core.parser.CLParser.TYPE>;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module parser {
				export class CLParsingException extends java.lang.Exception {
					public static class: java.lang.Class<androidx.constraintlayout.core.parser.CLParsingException>;
					public constructor(message: string);
					public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
					public reason(): string;
					public toString(): string;
					public constructor();
					public constructor(reason: string, element: androidx.constraintlayout.core.parser.CLElement);
					public constructor(cause: java.lang.Throwable);
					public constructor(message: string, cause: java.lang.Throwable);
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module parser {
				export class CLString extends androidx.constraintlayout.core.parser.CLElement {
					public static class: java.lang.Class<androidx.constraintlayout.core.parser.CLString>;
					public toFormattedJSON(indent: number, forceIndent: number): string;
					public static allocate(content: native.Array<string>): androidx.constraintlayout.core.parser.CLElement;
					public toJSON(): string;
					public constructor(content: native.Array<string>);
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module parser {
				export class CLToken extends androidx.constraintlayout.core.parser.CLElement {
					public static class: java.lang.Class<androidx.constraintlayout.core.parser.CLToken>;
					public toFormattedJSON(indent: number, forceIndent: number): string;
					public static allocate(content: native.Array<string>): androidx.constraintlayout.core.parser.CLElement;
					public toJSON(): string;
					public isNull(): boolean;
					public getBoolean(): boolean;
					public getType(): androidx.constraintlayout.core.parser.CLToken.Type;
					public constructor(content: native.Array<string>);
					public validate(c: string, position: number): boolean;
				}
				export module CLToken {
					export class Type {
						public static class: java.lang.Class<androidx.constraintlayout.core.parser.CLToken.Type>;
						public static UNKNOWN: androidx.constraintlayout.core.parser.CLToken.Type;
						public static TRUE: androidx.constraintlayout.core.parser.CLToken.Type;
						public static FALSE: androidx.constraintlayout.core.parser.CLToken.Type;
						public static NULL: androidx.constraintlayout.core.parser.CLToken.Type;
						public static values(): native.Array<androidx.constraintlayout.core.parser.CLToken.Type>;
						public static valueOf(name: string): androidx.constraintlayout.core.parser.CLToken.Type;
						public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module state {
				export class ConstraintReference extends java.lang.Object implements androidx.constraintlayout.core.state.Reference {
					public static class: java.lang.Class<androidx.constraintlayout.core.state.ConstraintReference>;
					public mMarginStart: number;
					public mMarginEnd: number;
					public mStartToStart: any;
					public mStartToEnd: any;
					public mEndToStart: any;
					public mEndToEnd: any;
					public mTopToTop: any;
					public mTopToBottom: any;
					public mBottomToTop: any;
					public mBottomToBottom: any;
					public getRotationX(): number;
					public getHorizontalChainStyle(): number;
					public setTag(tag: string): void;
					public setView(view: any): void;
					public rotationX(x: number): androidx.constraintlayout.core.state.ConstraintReference;
					public left(): androidx.constraintlayout.core.state.ConstraintReference;
					public centerVertically(reference: any): androidx.constraintlayout.core.state.ConstraintReference;
					public end(): androidx.constraintlayout.core.state.ConstraintReference;
					public getHeight(): androidx.constraintlayout.core.state.Dimension;
					public setFacade(facade: androidx.constraintlayout.core.state.helpers.Facade): void;
					public clearHorizontal(): androidx.constraintlayout.core.state.ConstraintReference;
					public translationY(y: number): androidx.constraintlayout.core.state.ConstraintReference;
					public addCustomFloat(name: string, value: number): void;
					public rotationZ(z: number): androidx.constraintlayout.core.state.ConstraintReference;
					public centerHorizontally(reference: any): androidx.constraintlayout.core.state.ConstraintReference;
					public circularConstraint(reference: any, angle: number, distance: number): androidx.constraintlayout.core.state.ConstraintReference;
					public scaleX(x: number): androidx.constraintlayout.core.state.ConstraintReference;
					public apply(): void;
					public getConstraintWidget(): androidx.constraintlayout.core.widgets.ConstraintWidget;
					public start(): androidx.constraintlayout.core.state.ConstraintReference;
					public getAlpha(): number;
					public width(dimension: androidx.constraintlayout.core.state.Dimension): androidx.constraintlayout.core.state.ConstraintReference;
					public rightToRight(reference: any): androidx.constraintlayout.core.state.ConstraintReference;
					public startToEnd(reference: any): androidx.constraintlayout.core.state.ConstraintReference;
					public visibility(visibility: number): androidx.constraintlayout.core.state.ConstraintReference;
					public getPivotY(): number;
					public bottomToTop(reference: any): androidx.constraintlayout.core.state.ConstraintReference;
					public addCustomColor(name: string, color: number): void;
					public getTranslationY(): number;
					public margin(marginValue: any): androidx.constraintlayout.core.state.ConstraintReference;
					public constructor(state: androidx.constraintlayout.core.state.State);
					public setKey(key: any): void;
					public horizontalBias(value: number): androidx.constraintlayout.core.state.ConstraintReference;
					public getWidth(): androidx.constraintlayout.core.state.Dimension;
					public verticalBias(value: number): androidx.constraintlayout.core.state.ConstraintReference;
					public height(dimension: androidx.constraintlayout.core.state.Dimension): androidx.constraintlayout.core.state.ConstraintReference;
					public getTranslationX(): number;
					public baselineToBaseline(reference: any): androidx.constraintlayout.core.state.ConstraintReference;
					public getFacade(): androidx.constraintlayout.core.state.helpers.Facade;
					public pivotY(y: number): androidx.constraintlayout.core.state.ConstraintReference;
					public getView(): any;
					public clearVertical(): androidx.constraintlayout.core.state.ConstraintReference;
					public rotationY(y: number): androidx.constraintlayout.core.state.ConstraintReference;
					public startToStart(reference: any): androidx.constraintlayout.core.state.ConstraintReference;
					public getVerticalChainStyle(chainStyle: number): number;
					public bias(value: number): androidx.constraintlayout.core.state.ConstraintReference;
					public leftToRight(reference: any): androidx.constraintlayout.core.state.ConstraintReference;
					public validate(): void;
					public topToTop(reference: any): androidx.constraintlayout.core.state.ConstraintReference;
					public translationX(x: number): androidx.constraintlayout.core.state.ConstraintReference;
					public getTranslationZ(): number;
					public getPivotX(): number;
					public clear(): androidx.constraintlayout.core.state.ConstraintReference;
					public setVerticalChainStyle(chainStyle: number): void;
					public scaleY(y: number): androidx.constraintlayout.core.state.ConstraintReference;
					public right(): androidx.constraintlayout.core.state.ConstraintReference;
					public baseline(): androidx.constraintlayout.core.state.ConstraintReference;
					public endToEnd(reference: any): androidx.constraintlayout.core.state.ConstraintReference;
					public getScaleY(): number;
					public leftToLeft(reference: any): androidx.constraintlayout.core.state.ConstraintReference;
					public setHorizontalChainStyle(chainStyle: number): void;
					public margin(value: number): androidx.constraintlayout.core.state.ConstraintReference;
					public rightToLeft(reference: any): androidx.constraintlayout.core.state.ConstraintReference;
					public bottomToBottom(reference: any): androidx.constraintlayout.core.state.ConstraintReference;
					public getRotationZ(): number;
					public translationZ(z: number): androidx.constraintlayout.core.state.ConstraintReference;
					public marginGone(value: number): androidx.constraintlayout.core.state.ConstraintReference;
					public setConstraintWidget(widget: androidx.constraintlayout.core.widgets.ConstraintWidget): void;
					public getTag(): string;
					public getScaleX(): number;
					public bottom(): androidx.constraintlayout.core.state.ConstraintReference;
					public getRotationY(): number;
					public endToStart(reference: any): androidx.constraintlayout.core.state.ConstraintReference;
					public createConstraintWidget(): androidx.constraintlayout.core.widgets.ConstraintWidget;
					public setHeight(dimension: androidx.constraintlayout.core.state.Dimension): androidx.constraintlayout.core.state.ConstraintReference;
					public getKey(): any;
					public setWidth(dimension: androidx.constraintlayout.core.state.Dimension): androidx.constraintlayout.core.state.ConstraintReference;
					public alpha(alpha: number): androidx.constraintlayout.core.state.ConstraintReference;
					public topToBottom(reference: any): androidx.constraintlayout.core.state.ConstraintReference;
					public top(): androidx.constraintlayout.core.state.ConstraintReference;
					public pivotX(x: number): androidx.constraintlayout.core.state.ConstraintReference;
				}
				export module ConstraintReference {
					export class ConstraintReferenceFactory extends java.lang.Object {
						public static class: java.lang.Class<androidx.constraintlayout.core.state.ConstraintReference.ConstraintReferenceFactory>;
						/**
						 * Constructs a new instance of the androidx.constraintlayout.core.state.ConstraintReference() when extending the interface class.
						 */
						public constructor(implementation: {
							create(state0: androidx.constraintlayout.core.state.State): androidx.constraintlayout.core.state.ConstraintReference;
						});
						public constructor();
						public create(state0: androidx.constraintlayout.core.state.State): androidx.constraintlayout.core.state.ConstraintReference;
					}
					export class IncorrectConstraintException extends java.lang.Exception {
						public static class: java.lang.Class<androidx.constraintlayout.core.state.ConstraintReference.IncorrectConstraintException>;
						public constructor();
						public getErrors(): java.util.ArrayList<string>;
						public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
						public constructor(errors: java.util.ArrayList<string>);
						public constructor(message: string, cause: java.lang.Throwable);
						public constructor(cause: java.lang.Throwable);
						public constructor(message: string);
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module state {
				export class Dimension extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.core.state.Dimension>;
					public static FIXED_DIMENSION: any;
					public static WRAP_DIMENSION: any;
					public static SPREAD_DIMENSION: any;
					public static PARENT_DIMENSION: any;
					public static PERCENT_DIMENSION: any;
					public static RATIO_DIMENSION: any;
					public static Percent(key: any, value: number): androidx.constraintlayout.core.state.Dimension;
					public percent(key: any, value: number): androidx.constraintlayout.core.state.Dimension;
					public static Spread(): androidx.constraintlayout.core.state.Dimension;
					public suggested(value: number): androidx.constraintlayout.core.state.Dimension;
					public fixed(value: number): androidx.constraintlayout.core.state.Dimension;
					public static Suggested(value: number): androidx.constraintlayout.core.state.Dimension;
					public min(value: any): androidx.constraintlayout.core.state.Dimension;
					public static Fixed(value: number): androidx.constraintlayout.core.state.Dimension;
					public apply(state: androidx.constraintlayout.core.state.State, constraintWidget: androidx.constraintlayout.core.widgets.ConstraintWidget, orientation: number): void;
					public max(value: number): androidx.constraintlayout.core.state.Dimension;
					public suggested(value: any): androidx.constraintlayout.core.state.Dimension;
					public static Fixed(value: any): androidx.constraintlayout.core.state.Dimension;
					public static Parent(): androidx.constraintlayout.core.state.Dimension;
					public static Ratio(ratio: string): androidx.constraintlayout.core.state.Dimension;
					public static Wrap(): androidx.constraintlayout.core.state.Dimension;
					public max(value: any): androidx.constraintlayout.core.state.Dimension;
					public equalsFixedValue(value: number): boolean;
					public ratio(ratio: string): androidx.constraintlayout.core.state.Dimension;
					public static Suggested(startValue: any): androidx.constraintlayout.core.state.Dimension;
					public min(value: number): androidx.constraintlayout.core.state.Dimension;
					public fixed(value: any): androidx.constraintlayout.core.state.Dimension;
				}
				export module Dimension {
					export class Type {
						public static class: java.lang.Class<androidx.constraintlayout.core.state.Dimension.Type>;
						public static FIXED: androidx.constraintlayout.core.state.Dimension.Type;
						public static WRAP: androidx.constraintlayout.core.state.Dimension.Type;
						public static MATCH_PARENT: androidx.constraintlayout.core.state.Dimension.Type;
						public static MATCH_CONSTRAINT: androidx.constraintlayout.core.state.Dimension.Type;
						public static values(): native.Array<androidx.constraintlayout.core.state.Dimension.Type>;
						public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
						public static valueOf(name: string): androidx.constraintlayout.core.state.Dimension.Type;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module state {
				export class HelperReference extends androidx.constraintlayout.core.state.ConstraintReference implements androidx.constraintlayout.core.state.helpers.Facade {
					public static class: java.lang.Class<androidx.constraintlayout.core.state.HelperReference>;
					public mState: androidx.constraintlayout.core.state.State;
					public mReferences: java.util.ArrayList<any>;
					public setHelperWidget(helperWidget: androidx.constraintlayout.core.widgets.HelperWidget): void;
					public getConstraintWidget(): androidx.constraintlayout.core.widgets.ConstraintWidget;
					public getHelperWidget(): androidx.constraintlayout.core.widgets.HelperWidget;
					public setKey(key: any): void;
					public constructor(state: androidx.constraintlayout.core.state.State, type: androidx.constraintlayout.core.state.State.Helper);
					public getKey(): any;
					public add(objects: native.Array<any>): androidx.constraintlayout.core.state.HelperReference;
					public getFacade(): androidx.constraintlayout.core.state.helpers.Facade;
					public setConstraintWidget(widget: androidx.constraintlayout.core.widgets.ConstraintWidget): void;
					public constructor(state: androidx.constraintlayout.core.state.State);
					public getType(): androidx.constraintlayout.core.state.State.Helper;
					public apply(): void;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module state {
				export class Interpolator extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.core.state.Interpolator>;
					/**
					 * Constructs a new instance of the androidx.constraintlayout.core.state.Interpolator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getInterpolation(float0: number): number;
					});
					public constructor();
					public getInterpolation(float0: number): number;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module state {
				export class Reference extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.core.state.Reference>;
					/**
					 * Constructs a new instance of the androidx.constraintlayout.core.state.Reference interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getConstraintWidget(): androidx.constraintlayout.core.widgets.ConstraintWidget;
						setConstraintWidget(constraintWidget0: androidx.constraintlayout.core.widgets.ConstraintWidget): void;
						setKey(object0: any): void;
						getKey(): any;
						apply(): void;
						getFacade(): androidx.constraintlayout.core.state.helpers.Facade;
					});
					public constructor();
					public getConstraintWidget(): androidx.constraintlayout.core.widgets.ConstraintWidget;
					public setConstraintWidget(constraintWidget0: androidx.constraintlayout.core.widgets.ConstraintWidget): void;
					public getKey(): any;
					public setKey(object0: any): void;
					public getFacade(): androidx.constraintlayout.core.state.helpers.Facade;
					public apply(): void;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module state {
				export class Registry extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.core.state.Registry>;
					public updateContent(name: string, content: string): void;
					public currentContent(name: string): string;
					public getLastModified(name: string): number;
					public setLayoutInformationMode(name: string, mode: number): void;
					public static getInstance(): androidx.constraintlayout.core.state.Registry;
					public updateDimensions(name: string, width: number, height: number): void;
					public updateProgress(name: string, progress: number): void;
					public constructor();
					public unregister(name: string, callback: androidx.constraintlayout.core.state.RegistryCallback): void;
					public register(name: string, callback: androidx.constraintlayout.core.state.RegistryCallback): void;
					public setDrawDebug(name: string, debugMode: number): void;
					public getLayoutList(): java.util.Set<string>;
					public currentLayoutInformation(name: string): string;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module state {
				export class RegistryCallback extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.core.state.RegistryCallback>;
					/**
					 * Constructs a new instance of the androidx.constraintlayout.core.state.RegistryCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onNewMotionScene(string0: string): void;
						onProgress(float0: number): void;
						onDimensions(int0: number, int1: number): void;
						currentMotionScene(): string;
						setDrawDebug(int0: number): void;
						currentLayoutInformation(): string;
						setLayoutInformationMode(int0: number): void;
						getLastModified(): number;
					});
					public constructor();
					public onProgress(float0: number): void;
					public currentLayoutInformation(): string;
					public onDimensions(int0: number, int1: number): void;
					public setDrawDebug(int0: number): void;
					public onNewMotionScene(string0: string): void;
					public setLayoutInformationMode(int0: number): void;
					public getLastModified(): number;
					public currentMotionScene(): string;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module state {
				export class State extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.core.state.State>;
					public mReferences: java.util.HashMap<any,androidx.constraintlayout.core.state.Reference>;
					public mHelperReferences: java.util.HashMap<any,androidx.constraintlayout.core.state.HelperReference>;
					public static PARENT: java.lang.Integer;
					public mParent: androidx.constraintlayout.core.state.ConstraintReference;
					public helper(key: any, type: androidx.constraintlayout.core.state.State.Helper): androidx.constraintlayout.core.state.HelperReference;
					public horizontalChain(references: native.Array<any>): androidx.constraintlayout.core.state.helpers.HorizontalChainReference;
					public map(key: any, view: any): void;
					public verticalChain(): androidx.constraintlayout.core.state.helpers.VerticalChainReference;
					public constraints(key: any): androidx.constraintlayout.core.state.ConstraintReference;
					public horizontalGuideline(key: any): androidx.constraintlayout.core.state.helpers.GuidelineReference;
					public sameFixedWidth(width: number): boolean;
					public sameFixedHeight(height: number): boolean;
					public width(dimension: androidx.constraintlayout.core.state.Dimension): androidx.constraintlayout.core.state.State;
					public convertDimension(value: any): number;
					public setWidth(dimension: androidx.constraintlayout.core.state.Dimension): androidx.constraintlayout.core.state.State;
					public constructor();
					public centerVertically(references: native.Array<any>): androidx.constraintlayout.core.state.helpers.AlignVerticallyReference;
					public createConstraintReference(key: any): androidx.constraintlayout.core.state.ConstraintReference;
					public setTag(key: string, tag: string): void;
					public getIdsForTag(tag: string): java.util.ArrayList<string>;
					public reset(): void;
					public setHeight(dimension: androidx.constraintlayout.core.state.Dimension): androidx.constraintlayout.core.state.State;
					public apply(container: androidx.constraintlayout.core.widgets.ConstraintWidgetContainer): void;
					public directMapping(): void;
					public verticalChain(references: native.Array<any>): androidx.constraintlayout.core.state.helpers.VerticalChainReference;
					public horizontalChain(): androidx.constraintlayout.core.state.helpers.HorizontalChainReference;
					public barrier(key: any, direction: androidx.constraintlayout.core.state.State.Direction): androidx.constraintlayout.core.state.helpers.BarrierReference;
					public centerHorizontally(references: native.Array<any>): androidx.constraintlayout.core.state.helpers.AlignHorizontallyReference;
					public guideline(key: any, orientation: number): androidx.constraintlayout.core.state.helpers.GuidelineReference;
					public height(dimension: androidx.constraintlayout.core.state.Dimension): androidx.constraintlayout.core.state.State;
					public verticalGuideline(key: any): androidx.constraintlayout.core.state.helpers.GuidelineReference;
				}
				export module State {
					export class Chain {
						public static class: java.lang.Class<androidx.constraintlayout.core.state.State.Chain>;
						public static SPREAD: androidx.constraintlayout.core.state.State.Chain;
						public static SPREAD_INSIDE: androidx.constraintlayout.core.state.State.Chain;
						public static PACKED: androidx.constraintlayout.core.state.State.Chain;
						public static valueOf(name: string): androidx.constraintlayout.core.state.State.Chain;
						public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
						public static values(): native.Array<androidx.constraintlayout.core.state.State.Chain>;
					}
					export class Constraint {
						public static class: java.lang.Class<androidx.constraintlayout.core.state.State.Constraint>;
						public static LEFT_TO_LEFT: androidx.constraintlayout.core.state.State.Constraint;
						public static LEFT_TO_RIGHT: androidx.constraintlayout.core.state.State.Constraint;
						public static RIGHT_TO_LEFT: androidx.constraintlayout.core.state.State.Constraint;
						public static RIGHT_TO_RIGHT: androidx.constraintlayout.core.state.State.Constraint;
						public static START_TO_START: androidx.constraintlayout.core.state.State.Constraint;
						public static START_TO_END: androidx.constraintlayout.core.state.State.Constraint;
						public static END_TO_START: androidx.constraintlayout.core.state.State.Constraint;
						public static END_TO_END: androidx.constraintlayout.core.state.State.Constraint;
						public static TOP_TO_TOP: androidx.constraintlayout.core.state.State.Constraint;
						public static TOP_TO_BOTTOM: androidx.constraintlayout.core.state.State.Constraint;
						public static BOTTOM_TO_TOP: androidx.constraintlayout.core.state.State.Constraint;
						public static BOTTOM_TO_BOTTOM: androidx.constraintlayout.core.state.State.Constraint;
						public static BASELINE_TO_BASELINE: androidx.constraintlayout.core.state.State.Constraint;
						public static CENTER_HORIZONTALLY: androidx.constraintlayout.core.state.State.Constraint;
						public static CENTER_VERTICALLY: androidx.constraintlayout.core.state.State.Constraint;
						public static CIRCULAR_CONSTRAINT: androidx.constraintlayout.core.state.State.Constraint;
						public static valueOf(name: string): androidx.constraintlayout.core.state.State.Constraint;
						public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
						public static values(): native.Array<androidx.constraintlayout.core.state.State.Constraint>;
					}
					export class Direction {
						public static class: java.lang.Class<androidx.constraintlayout.core.state.State.Direction>;
						public static LEFT: androidx.constraintlayout.core.state.State.Direction;
						public static RIGHT: androidx.constraintlayout.core.state.State.Direction;
						public static START: androidx.constraintlayout.core.state.State.Direction;
						public static END: androidx.constraintlayout.core.state.State.Direction;
						public static TOP: androidx.constraintlayout.core.state.State.Direction;
						public static BOTTOM: androidx.constraintlayout.core.state.State.Direction;
						public static valueOf(name: string): androidx.constraintlayout.core.state.State.Direction;
						public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
						public static values(): native.Array<androidx.constraintlayout.core.state.State.Direction>;
					}
					export class Helper {
						public static class: java.lang.Class<androidx.constraintlayout.core.state.State.Helper>;
						public static HORIZONTAL_CHAIN: androidx.constraintlayout.core.state.State.Helper;
						public static VERTICAL_CHAIN: androidx.constraintlayout.core.state.State.Helper;
						public static ALIGN_HORIZONTALLY: androidx.constraintlayout.core.state.State.Helper;
						public static ALIGN_VERTICALLY: androidx.constraintlayout.core.state.State.Helper;
						public static BARRIER: androidx.constraintlayout.core.state.State.Helper;
						public static LAYER: androidx.constraintlayout.core.state.State.Helper;
						public static FLOW: androidx.constraintlayout.core.state.State.Helper;
						public static valueOf(name: string): androidx.constraintlayout.core.state.State.Helper;
						public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
						public static values(): native.Array<androidx.constraintlayout.core.state.State.Helper>;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module state {
				export class Transition extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.core.state.Transition>;
					public static START: number;
					public static END: number;
					public static INTERPOLATED: number;
					public updateFrom(container: androidx.constraintlayout.core.widgets.ConstraintWidgetContainer, state: number): void;
					public hasPositionKeyframes(): boolean;
					public isEmpty(): boolean;
					public getEnd(id: string): androidx.constraintlayout.core.state.WidgetFrame;
					public findNextPosition(target: string, frameNumber: number): androidx.constraintlayout.core.state.Transition.KeyPosition;
					public getInterpolated(child: androidx.constraintlayout.core.widgets.ConstraintWidget): androidx.constraintlayout.core.state.WidgetFrame;
					public addCustomFloat(state: number, widgetId: string, property: string, value: number): void;
					public getInterpolated(id: string): androidx.constraintlayout.core.state.WidgetFrame;
					public getEnd(child: androidx.constraintlayout.core.widgets.ConstraintWidget): androidx.constraintlayout.core.state.WidgetFrame;
					public addCustomColor(state: number, widgetId: string, property: string, color: number): void;
					public constructor();
					public getMotion(id: string): androidx.constraintlayout.core.motion.Motion;
					public getInterpolator(): androidx.constraintlayout.core.state.Interpolator;
					public clear(): void;
					public addKeyAttribute(target: string, bundle: androidx.constraintlayout.core.motion.utils.TypedBundle): void;
					public addKeyCycle(target: string, bundle: androidx.constraintlayout.core.motion.utils.TypedBundle): void;
					public getPath(id: string): native.Array<number>;
					public contains(key: string): boolean;
					public findPreviousPosition(target: string, frameNumber: number): androidx.constraintlayout.core.state.Transition.KeyPosition;
					public static getInterpolator(interpolator: number, interpolatorString: string): androidx.constraintlayout.core.state.Interpolator;
					public interpolate(parentWidth: number, parentHeight: number, progress: number): void;
					public addKeyPosition(target: string, frame: number, type: number, x: number, y: number): void;
					public setTransitionProperties(bundle: androidx.constraintlayout.core.motion.utils.TypedBundle): void;
					public getAutoTransition(): number;
					public addKeyPosition(target: string, bundle: androidx.constraintlayout.core.motion.utils.TypedBundle): void;
					public getNumberKeyPositions(frame: androidx.constraintlayout.core.state.WidgetFrame): number;
					public getStart(child: androidx.constraintlayout.core.widgets.ConstraintWidget): androidx.constraintlayout.core.state.WidgetFrame;
					public getStart(id: string): androidx.constraintlayout.core.state.WidgetFrame;
					public fillKeyPositions(frame: androidx.constraintlayout.core.state.WidgetFrame, x: native.Array<number>, y: native.Array<number>, pos: native.Array<number>): void;
					public getKeyFrames(id: string, rectangles: native.Array<number>, pathMode: native.Array<number>, position: native.Array<number>): number;
				}
				export module Transition {
					export class KeyPosition extends java.lang.Object {
						public static class: java.lang.Class<androidx.constraintlayout.core.state.Transition.KeyPosition>;
						public constructor(target: string, frame: number, type: number, x: number, y: number);
					}
					export class WidgetState extends java.lang.Object {
						public static class: java.lang.Class<androidx.constraintlayout.core.state.Transition.WidgetState>;
						public constructor();
						public update(child: androidx.constraintlayout.core.widgets.ConstraintWidget, state: number): void;
						public getFrame(type: number): androidx.constraintlayout.core.state.WidgetFrame;
						public setKeyCycle(prop: androidx.constraintlayout.core.motion.utils.TypedBundle): void;
						public setKeyPosition(prop: androidx.constraintlayout.core.motion.utils.TypedBundle): void;
						public setKeyAttribute(prop: androidx.constraintlayout.core.motion.utils.TypedBundle): void;
						public interpolate(parentWidth: number, parentHeight: number, progress: number, transition: androidx.constraintlayout.core.state.Transition): void;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module state {
				export class WidgetFrame extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.core.state.WidgetFrame>;
					public widget: androidx.constraintlayout.core.widgets.ConstraintWidget;
					public left: number;
					public top: number;
					public right: number;
					public bottom: number;
					public pivotX: number;
					public pivotY: number;
					public rotationX: number;
					public rotationY: number;
					public rotationZ: number;
					public translationX: number;
					public translationY: number;
					public translationZ: number;
					public static phone_orientation: number;
					public scaleX: number;
					public scaleY: number;
					public alpha: number;
					public interpolatedPos: number;
					public visibility: number;
					public mCustom: java.util.HashMap<string,androidx.constraintlayout.core.motion.CustomVariable>;
					public name: string;
					public height(): number;
					public setCustomAttribute(name: string, type: number, value: string): void;
					public constructor(widget: androidx.constraintlayout.core.widgets.ConstraintWidget);
					public isDefaultTransform(): boolean;
					public serialize(ret: java.lang.StringBuilder, sendPhoneOrientation: boolean): java.lang.StringBuilder;
					public centerX(): number;
					public getCustomAttributeNames(): java.util.Set<string>;
					public getCustomAttribute(name: string): androidx.constraintlayout.core.motion.CustomVariable;
					public addCustomColor(name: string, color: number): void;
					public updateAttributes(frame: androidx.constraintlayout.core.state.WidgetFrame): void;
					public getCustomFloat(name: string): number;
					public addCustomFloat(name: string, value: number): void;
					public width(): number;
					public constructor();
					public update(): androidx.constraintlayout.core.state.WidgetFrame;
					public centerY(): number;
					public setValue(key: string, value: androidx.constraintlayout.core.parser.CLElement): boolean;
					public serialize(ret: java.lang.StringBuilder): java.lang.StringBuilder;
					public getCustomColor(name: string): number;
					public setCustomAttribute(name: string, type: number, value: number): void;
					public constructor(frame: androidx.constraintlayout.core.state.WidgetFrame);
					public update(widget: androidx.constraintlayout.core.widgets.ConstraintWidget): androidx.constraintlayout.core.state.WidgetFrame;
					public static interpolate(parentWidth: number, parentHeight: number, frame: androidx.constraintlayout.core.state.WidgetFrame, start: androidx.constraintlayout.core.state.WidgetFrame, end: androidx.constraintlayout.core.state.WidgetFrame, transition: androidx.constraintlayout.core.state.Transition, progress: number): void;
					public setCustomAttribute(name: string, type: number, value: boolean): void;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module state {
				export module helpers {
					export class AlignHorizontallyReference extends androidx.constraintlayout.core.state.HelperReference {
						public static class: java.lang.Class<androidx.constraintlayout.core.state.helpers.AlignHorizontallyReference>;
						public apply(): void;
						public setKey(key: any): void;
						public setConstraintWidget(widget: androidx.constraintlayout.core.widgets.ConstraintWidget): void;
						public getKey(): any;
						public constructor(state: androidx.constraintlayout.core.state.State);
						public constructor(state: androidx.constraintlayout.core.state.State, type: androidx.constraintlayout.core.state.State.Helper);
						public getFacade(): androidx.constraintlayout.core.state.helpers.Facade;
						public getConstraintWidget(): androidx.constraintlayout.core.widgets.ConstraintWidget;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module state {
				export module helpers {
					export class AlignVerticallyReference extends androidx.constraintlayout.core.state.HelperReference {
						public static class: java.lang.Class<androidx.constraintlayout.core.state.helpers.AlignVerticallyReference>;
						public apply(): void;
						public setKey(key: any): void;
						public setConstraintWidget(widget: androidx.constraintlayout.core.widgets.ConstraintWidget): void;
						public getKey(): any;
						public constructor(state: androidx.constraintlayout.core.state.State);
						public constructor(state: androidx.constraintlayout.core.state.State, type: androidx.constraintlayout.core.state.State.Helper);
						public getFacade(): androidx.constraintlayout.core.state.helpers.Facade;
						public getConstraintWidget(): androidx.constraintlayout.core.widgets.ConstraintWidget;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module state {
				export module helpers {
					export class BarrierReference extends androidx.constraintlayout.core.state.HelperReference {
						public static class: java.lang.Class<androidx.constraintlayout.core.state.helpers.BarrierReference>;
						public setBarrierDirection(barrierDirection: androidx.constraintlayout.core.state.State.Direction): void;
						public margin(marginValue: any): androidx.constraintlayout.core.state.ConstraintReference;
						public margin(value: number): androidx.constraintlayout.core.state.ConstraintReference;
						public getKey(): any;
						public constructor(state: androidx.constraintlayout.core.state.State);
						public getHelperWidget(): androidx.constraintlayout.core.widgets.HelperWidget;
						public getConstraintWidget(): androidx.constraintlayout.core.widgets.ConstraintWidget;
						public margin(value: any): androidx.constraintlayout.core.state.ConstraintReference;
						public apply(): void;
						public setKey(key: any): void;
						public setConstraintWidget(widget: androidx.constraintlayout.core.widgets.ConstraintWidget): void;
						public constructor(state: androidx.constraintlayout.core.state.State, type: androidx.constraintlayout.core.state.State.Helper);
						public getFacade(): androidx.constraintlayout.core.state.helpers.Facade;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module state {
				export module helpers {
					export class ChainReference extends androidx.constraintlayout.core.state.HelperReference {
						public static class: java.lang.Class<androidx.constraintlayout.core.state.helpers.ChainReference>;
						public mBias: number;
						public mStyle: androidx.constraintlayout.core.state.State.Chain;
						public getKey(): any;
						public constructor(state: androidx.constraintlayout.core.state.State);
						public getBias(): number;
						public bias(bias: number): androidx.constraintlayout.core.state.helpers.ChainReference;
						public getConstraintWidget(): androidx.constraintlayout.core.widgets.ConstraintWidget;
						public style(style: androidx.constraintlayout.core.state.State.Chain): androidx.constraintlayout.core.state.helpers.ChainReference;
						public apply(): void;
						public setKey(key: any): void;
						public setConstraintWidget(widget: androidx.constraintlayout.core.widgets.ConstraintWidget): void;
						public constructor(state: androidx.constraintlayout.core.state.State, type: androidx.constraintlayout.core.state.State.Helper);
						public getFacade(): androidx.constraintlayout.core.state.helpers.Facade;
						public getStyle(): androidx.constraintlayout.core.state.State.Chain;
						public bias(value: number): androidx.constraintlayout.core.state.ConstraintReference;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module state {
				export module helpers {
					export class Facade extends java.lang.Object {
						public static class: java.lang.Class<androidx.constraintlayout.core.state.helpers.Facade>;
						/**
						 * Constructs a new instance of the androidx.constraintlayout.core.state.helpers.Facade interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getConstraintWidget(): androidx.constraintlayout.core.widgets.ConstraintWidget;
							apply(): void;
						});
						public constructor();
						public apply(): void;
						public getConstraintWidget(): androidx.constraintlayout.core.widgets.ConstraintWidget;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module state {
				export module helpers {
					export class GuidelineReference extends java.lang.Object implements androidx.constraintlayout.core.state.helpers.Facade, androidx.constraintlayout.core.state.Reference {
						public static class: java.lang.Class<androidx.constraintlayout.core.state.helpers.GuidelineReference>;
						public apply(): void;
						public setKey(key: any): void;
						public setOrientation(orientation: number): void;
						public getKey(): any;
						public setConstraintWidget(widget: androidx.constraintlayout.core.widgets.ConstraintWidget): void;
						public constructor(state: androidx.constraintlayout.core.state.State);
						public percent(percent: number): androidx.constraintlayout.core.state.helpers.GuidelineReference;
						public getFacade(): androidx.constraintlayout.core.state.helpers.Facade;
						public start(margin: any): androidx.constraintlayout.core.state.helpers.GuidelineReference;
						public getConstraintWidget(): androidx.constraintlayout.core.widgets.ConstraintWidget;
						public end(margin: any): androidx.constraintlayout.core.state.helpers.GuidelineReference;
						public getOrientation(): number;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module state {
				export module helpers {
					export class HorizontalChainReference extends androidx.constraintlayout.core.state.helpers.ChainReference {
						public static class: java.lang.Class<androidx.constraintlayout.core.state.helpers.HorizontalChainReference>;
						public apply(): void;
						public setKey(key: any): void;
						public setConstraintWidget(widget: androidx.constraintlayout.core.widgets.ConstraintWidget): void;
						public getKey(): any;
						public constructor(state: androidx.constraintlayout.core.state.State);
						public constructor(state: androidx.constraintlayout.core.state.State, type: androidx.constraintlayout.core.state.State.Helper);
						public getFacade(): androidx.constraintlayout.core.state.helpers.Facade;
						public getConstraintWidget(): androidx.constraintlayout.core.widgets.ConstraintWidget;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module state {
				export module helpers {
					export class VerticalChainReference extends androidx.constraintlayout.core.state.helpers.ChainReference {
						public static class: java.lang.Class<androidx.constraintlayout.core.state.helpers.VerticalChainReference>;
						public apply(): void;
						public setKey(key: any): void;
						public setConstraintWidget(widget: androidx.constraintlayout.core.widgets.ConstraintWidget): void;
						public getKey(): any;
						public constructor(state: androidx.constraintlayout.core.state.State);
						public constructor(state: androidx.constraintlayout.core.state.State, type: androidx.constraintlayout.core.state.State.Helper);
						public getFacade(): androidx.constraintlayout.core.state.helpers.Facade;
						public getConstraintWidget(): androidx.constraintlayout.core.widgets.ConstraintWidget;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module widgets {
				export class Barrier extends androidx.constraintlayout.core.widgets.HelperWidget {
					public static class: java.lang.Class<androidx.constraintlayout.core.widgets.Barrier>;
					public static LEFT: number;
					public static RIGHT: number;
					public static TOP: number;
					public static BOTTOM: number;
					/** @deprecated */
					public allowsGoneWidget(): boolean;
					public removeAllIds(): void;
					public updateConstraints(container: androidx.constraintlayout.core.widgets.ConstraintWidgetContainer): void;
					public getAllowsGoneWidget(): boolean;
					public toString(): string;
					public allowedInBarrier(): boolean;
					public constructor();
					public allSolved(): boolean;
					public constructor(debugName: string);
					public addToSolver(system: androidx.constraintlayout.core.LinearSystem, optimize: boolean): void;
					public getOrientation(): number;
					public isResolvedVertically(): boolean;
					public isResolvedHorizontally(): boolean;
					public getMargin(): number;
					public setBarrierType(barrierType: number): void;
					public constructor(debugName: string, x: number, y: number, width: number, height: number);
					public add(widget: androidx.constraintlayout.core.widgets.ConstraintWidget): void;
					public markWidgets(): void;
					public constructor(width: number, height: number);
					public constructor(debugName: string, width: number, height: number);
					public setAllowsGoneWidget(allowsGoneWidget: boolean): void;
					public copy(src: androidx.constraintlayout.core.widgets.ConstraintWidget, map: java.util.HashMap<androidx.constraintlayout.core.widgets.ConstraintWidget,androidx.constraintlayout.core.widgets.ConstraintWidget>): void;
					public getBarrierType(): number;
					public constructor(x: number, y: number, width: number, height: number);
					public setMargin(margin: number): void;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module widgets {
				export class Chain extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.core.widgets.Chain>;
					public static USE_CHAIN_OPTIMIZATION: boolean;
					public static applyChainConstraints(constraintWidgetContainer: androidx.constraintlayout.core.widgets.ConstraintWidgetContainer, system: androidx.constraintlayout.core.LinearSystem, widgets: java.util.ArrayList<androidx.constraintlayout.core.widgets.ConstraintWidget>, orientation: number): void;
					public constructor();
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module widgets {
				export class ChainHead extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.core.widgets.ChainHead>;
					public mFirst: androidx.constraintlayout.core.widgets.ConstraintWidget;
					public mFirstVisibleWidget: androidx.constraintlayout.core.widgets.ConstraintWidget;
					public mLast: androidx.constraintlayout.core.widgets.ConstraintWidget;
					public mLastVisibleWidget: androidx.constraintlayout.core.widgets.ConstraintWidget;
					public mHead: androidx.constraintlayout.core.widgets.ConstraintWidget;
					public mFirstMatchConstraintWidget: androidx.constraintlayout.core.widgets.ConstraintWidget;
					public mLastMatchConstraintWidget: androidx.constraintlayout.core.widgets.ConstraintWidget;
					public mWeightedMatchConstraintsWidgets: java.util.ArrayList<androidx.constraintlayout.core.widgets.ConstraintWidget>;
					public mWidgetsCount: number;
					public mWidgetsMatchCount: number;
					public mTotalWeight: number;
					public mHasUndefinedWeights: boolean;
					public mHasDefinedWeights: boolean;
					public mHasComplexMatchWeights: boolean;
					public mHasRatio: boolean;
					public getHead(): androidx.constraintlayout.core.widgets.ConstraintWidget;
					public getFirstMatchConstraintWidget(): androidx.constraintlayout.core.widgets.ConstraintWidget;
					public getLast(): androidx.constraintlayout.core.widgets.ConstraintWidget;
					public getLastVisibleWidget(): androidx.constraintlayout.core.widgets.ConstraintWidget;
					public constructor(first: androidx.constraintlayout.core.widgets.ConstraintWidget, orientation: number, isRtl: boolean);
					public getFirstVisibleWidget(): androidx.constraintlayout.core.widgets.ConstraintWidget;
					public getLastMatchConstraintWidget(): androidx.constraintlayout.core.widgets.ConstraintWidget;
					public getFirst(): androidx.constraintlayout.core.widgets.ConstraintWidget;
					public define(): void;
					public getTotalWeight(): number;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module widgets {
				export class ConstraintAnchor extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.core.widgets.ConstraintAnchor>;
					public mOwner: androidx.constraintlayout.core.widgets.ConstraintWidget;
					public mType: androidx.constraintlayout.core.widgets.ConstraintAnchor.Type;
					public mTarget: androidx.constraintlayout.core.widgets.ConstraintAnchor;
					public mMargin: number;
					public findDependents(orientation: number, list: java.util.ArrayList<androidx.constraintlayout.core.widgets.analyzer.WidgetGroup>, group: androidx.constraintlayout.core.widgets.analyzer.WidgetGroup): void;
					public getTarget(): androidx.constraintlayout.core.widgets.ConstraintAnchor;
					public setGoneMargin(margin: number): void;
					public hasCenteredDependents(): boolean;
					public isVerticalAnchor(): boolean;
					public setFinalValue(finalValue: number): void;
					public constructor(owner: androidx.constraintlayout.core.widgets.ConstraintWidget, type: androidx.constraintlayout.core.widgets.ConstraintAnchor.Type);
					public toString(): string;
					public isSideAnchor(): boolean;
					public hasDependents(): boolean;
					public getFinalValue(): number;
					public reset(): void;
					public getType(): androidx.constraintlayout.core.widgets.ConstraintAnchor.Type;
					public isConnected(): boolean;
					public getMargin(): number;
					public isValidConnection(anchor: androidx.constraintlayout.core.widgets.ConstraintAnchor): boolean;
					public getOpposite(): androidx.constraintlayout.core.widgets.ConstraintAnchor;
					public connect(toAnchor: androidx.constraintlayout.core.widgets.ConstraintAnchor, margin: number, goneMargin: number, forceConnection: boolean): boolean;
					public getDependents(): java.util.HashSet<androidx.constraintlayout.core.widgets.ConstraintAnchor>;
					public hasFinalValue(): boolean;
					public connect(toAnchor: androidx.constraintlayout.core.widgets.ConstraintAnchor, margin: number): boolean;
					public getSolverVariable(): androidx.constraintlayout.core.SolverVariable;
					public isSimilarDimensionConnection(anchor: androidx.constraintlayout.core.widgets.ConstraintAnchor): boolean;
					public resetSolverVariable(cache: androidx.constraintlayout.core.Cache): void;
					public isConnectionAllowed(target: androidx.constraintlayout.core.widgets.ConstraintWidget, anchor: androidx.constraintlayout.core.widgets.ConstraintAnchor): boolean;
					public copyFrom(source: androidx.constraintlayout.core.widgets.ConstraintAnchor, map: java.util.HashMap<androidx.constraintlayout.core.widgets.ConstraintWidget,androidx.constraintlayout.core.widgets.ConstraintWidget>): void;
					public resetFinalResolution(): void;
					public isConnectionAllowed(target: androidx.constraintlayout.core.widgets.ConstraintWidget): boolean;
					public getOwner(): androidx.constraintlayout.core.widgets.ConstraintWidget;
					public setMargin(margin: number): void;
				}
				export module ConstraintAnchor {
					export class Type {
						public static class: java.lang.Class<androidx.constraintlayout.core.widgets.ConstraintAnchor.Type>;
						public static NONE: androidx.constraintlayout.core.widgets.ConstraintAnchor.Type;
						public static LEFT: androidx.constraintlayout.core.widgets.ConstraintAnchor.Type;
						public static TOP: androidx.constraintlayout.core.widgets.ConstraintAnchor.Type;
						public static RIGHT: androidx.constraintlayout.core.widgets.ConstraintAnchor.Type;
						public static BOTTOM: androidx.constraintlayout.core.widgets.ConstraintAnchor.Type;
						public static BASELINE: androidx.constraintlayout.core.widgets.ConstraintAnchor.Type;
						public static CENTER: androidx.constraintlayout.core.widgets.ConstraintAnchor.Type;
						public static CENTER_X: androidx.constraintlayout.core.widgets.ConstraintAnchor.Type;
						public static CENTER_Y: androidx.constraintlayout.core.widgets.ConstraintAnchor.Type;
						public static values(): native.Array<androidx.constraintlayout.core.widgets.ConstraintAnchor.Type>;
						public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
						public static valueOf(name: string): androidx.constraintlayout.core.widgets.ConstraintAnchor.Type;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module widgets {
				export class ConstraintWidget extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.core.widgets.ConstraintWidget>;
					public static SOLVER: number;
					public static DIRECT: number;
					public measured: boolean;
					public run: native.Array<androidx.constraintlayout.core.widgets.analyzer.WidgetRun>;
					public horizontalChainRun: androidx.constraintlayout.core.widgets.analyzer.ChainRun;
					public verticalChainRun: androidx.constraintlayout.core.widgets.analyzer.ChainRun;
					public horizontalRun: androidx.constraintlayout.core.widgets.analyzer.HorizontalWidgetRun;
					public verticalRun: androidx.constraintlayout.core.widgets.analyzer.VerticalWidgetRun;
					public isTerminalWidget: native.Array<boolean>;
					public frame: androidx.constraintlayout.core.state.WidgetFrame;
					public stringId: string;
					public static MATCH_CONSTRAINT_SPREAD: number;
					public static MATCH_CONSTRAINT_WRAP: number;
					public static MATCH_CONSTRAINT_PERCENT: number;
					public static MATCH_CONSTRAINT_RATIO: number;
					public static MATCH_CONSTRAINT_RATIO_RESOLVED: number;
					public static UNKNOWN: number;
					public static HORIZONTAL: number;
					public static VERTICAL: number;
					public static BOTH: number;
					public static VISIBLE: number;
					public static INVISIBLE: number;
					public static GONE: number;
					public static CHAIN_SPREAD: number;
					public static CHAIN_SPREAD_INSIDE: number;
					public static CHAIN_PACKED: number;
					public static WRAP_BEHAVIOR_INCLUDED: number;
					public static WRAP_BEHAVIOR_HORIZONTAL_ONLY: number;
					public static WRAP_BEHAVIOR_VERTICAL_ONLY: number;
					public static WRAP_BEHAVIOR_SKIPPED: number;
					public mHorizontalResolution: number;
					public mVerticalResolution: number;
					public mMatchConstraintDefaultWidth: number;
					public mMatchConstraintDefaultHeight: number;
					public mResolvedMatchConstraintDefault: native.Array<number>;
					public mMatchConstraintMinWidth: number;
					public mMatchConstraintMaxWidth: number;
					public mMatchConstraintPercentWidth: number;
					public mMatchConstraintMinHeight: number;
					public mMatchConstraintMaxHeight: number;
					public mMatchConstraintPercentHeight: number;
					public mIsWidthWrapContent: boolean;
					public mIsHeightWrapContent: boolean;
					public mLeft: androidx.constraintlayout.core.widgets.ConstraintAnchor;
					public mTop: androidx.constraintlayout.core.widgets.ConstraintAnchor;
					public mRight: androidx.constraintlayout.core.widgets.ConstraintAnchor;
					public mBottom: androidx.constraintlayout.core.widgets.ConstraintAnchor;
					public mBaseline: androidx.constraintlayout.core.widgets.ConstraintAnchor;
					public mCenter: androidx.constraintlayout.core.widgets.ConstraintAnchor;
					public static ANCHOR_LEFT: number;
					public static ANCHOR_RIGHT: number;
					public static ANCHOR_TOP: number;
					public static ANCHOR_BOTTOM: number;
					public static ANCHOR_BASELINE: number;
					public mListAnchors: native.Array<androidx.constraintlayout.core.widgets.ConstraintAnchor>;
					public mAnchors: java.util.ArrayList<androidx.constraintlayout.core.widgets.ConstraintAnchor>;
					public mListDimensionBehaviors: native.Array<androidx.constraintlayout.core.widgets.ConstraintWidget.DimensionBehaviour>;
					public mParent: androidx.constraintlayout.core.widgets.ConstraintWidget;
					public mDimensionRatio: number;
					public mDimensionRatioSide: number;
					public mX: number;
					public mY: number;
					public mOffsetX: number;
					public mOffsetY: number;
					public mMinWidth: number;
					public mMinHeight: number;
					public static DEFAULT_BIAS: number;
					public mWeight: native.Array<number>;
					public mListNextMatchConstraintsWidget: native.Array<androidx.constraintlayout.core.widgets.ConstraintWidget>;
					public mNextChainWidget: native.Array<androidx.constraintlayout.core.widgets.ConstraintWidget>;
					public horizontalGroup: number;
					public verticalGroup: number;
					public hasResolvedTargets(orientation: number, size: number): boolean;
					public getRootX(): number;
					public connect(constraintFrom: androidx.constraintlayout.core.widgets.ConstraintAnchor.Type, target: androidx.constraintlayout.core.widgets.ConstraintWidget, constraintTo: androidx.constraintlayout.core.widgets.ConstraintAnchor.Type): void;
					public getHorizontalChainStyle(): number;
					public getBiasPercent(orientation: number): number;
					public setMinHeight(h: number): void;
					public setVerticalChainStyle(verticalChainStyle: number): void;
					public setMeasureRequested(measureRequested: boolean): void;
					public setVerticalDimensionBehaviour(behaviour: androidx.constraintlayout.core.widgets.ConstraintWidget.DimensionBehaviour): void;
					public oppositeDimensionsTied(): boolean;
					public resetAnchor(anchor: androidx.constraintlayout.core.widgets.ConstraintAnchor): void;
					public isVerticalSolvingPassDone(): boolean;
					public getHorizontalDimensionBehaviour(): androidx.constraintlayout.core.widgets.ConstraintWidget.DimensionBehaviour;
					public setFinalLeft(x1: number): void;
					public constructor();
					public setMaxHeight(maxHeight: number): void;
					public getContainerItemSkip(): number;
					public isResolvedVertically(): boolean;
					public setInPlaceholder(inPlaceholder: boolean): void;
					public setFrame(left: number, top: number, right: number, bottom: number): void;
					public resetAnchors(): void;
					public getHeight(): number;
					public getRun(orientation: number): androidx.constraintlayout.core.widgets.analyzer.WidgetRun;
					public getVerticalChainStyle(): number;
					public getY(): number;
					public setInVirtualLayout(inVirtualLayout: boolean): void;
					public constructor(width: number, height: number);
					public setDebugName(name: string): void;
					public connect(constraintFrom: androidx.constraintlayout.core.widgets.ConstraintAnchor.Type, target: androidx.constraintlayout.core.widgets.ConstraintWidget, constraintTo: androidx.constraintlayout.core.widgets.ConstraintAnchor.Type, margin: number): void;
					public getPreviousChainMember(orientation: number): androidx.constraintlayout.core.widgets.ConstraintWidget;
					public getCompanionWidget(): any;
					public isInHorizontalChain(): boolean;
					public updateFromRuns(updateHorizontal: boolean, updateVertical: boolean): void;
					public createObjectVariables(system: androidx.constraintlayout.core.LinearSystem): void;
					public hasDanglingDimension(orientation: number): boolean;
					public getHorizontalBiasPercent(): number;
					public isInVerticalChain(): boolean;
					public setFinalBaseline(baselineValue: number): void;
					public getDimensionRatio(): number;
					public getHorizontalMargin(): number;
					public getMaxWidth(): number;
					public setHorizontalDimensionBehaviour(behaviour: androidx.constraintlayout.core.widgets.ConstraintWidget.DimensionBehaviour): void;
					public getAnchor(anchorType: androidx.constraintlayout.core.widgets.ConstraintAnchor.Type): androidx.constraintlayout.core.widgets.ConstraintAnchor;
					public updateFromSolver(system: androidx.constraintlayout.core.LinearSystem, optimize: boolean): void;
					public setVerticalDimension(top: number, bottom: number): void;
					public setMinWidth(w: number): void;
					public hasBaseline(): boolean;
					public isSpreadHeight(): boolean;
					public getVerticalMargin(): number;
					public getOptimizerWrapHeight(): number;
					public resetSolvingPassFlag(): void;
					public setHeight(h: number): void;
					public setLastMeasureSpec(horizontal: number, vertical: number): void;
					public setWrapBehaviorInParent(behavior: number): void;
					public constructor(debugName: string);
					public isWidthWrapContent(): boolean;
					public getOptimizerWrapWidth(): number;
					public setHorizontalBiasPercent(horizontalBiasPercent: number): void;
					public getHasBaseline(): boolean;
					public reset(): void;
					public isHeightWrapContent(): boolean;
					public setVerticalBiasPercent(verticalBiasPercent: number): void;
					public getWidth(): number;
					public isSpreadWidth(): boolean;
					public constructor(debugName: string, width: number, height: number);
					public setFrame(start: number, end: number, orientation: number): void;
					public getVerticalDimensionBehaviour(): androidx.constraintlayout.core.widgets.ConstraintWidget.DimensionBehaviour;
					public setWidth(w: number): void;
					public isInVirtualLayout(): boolean;
					public markHorizontalSolvingPassDone(): void;
					public resetFinalResolution(): void;
					public markVerticalSolvingPassDone(): void;
					public getParent(): androidx.constraintlayout.core.widgets.ConstraintWidget;
					public setLength(length: number, orientation: number): void;
					public getHorizontalChainControlWidget(): androidx.constraintlayout.core.widgets.ConstraintWidget;
					public getBottom(): number;
					public getX(): number;
					public setMaxWidth(maxWidth: number): void;
					public setHorizontalChainStyle(horizontalChainStyle: number): void;
					public isInPlaceholder(): boolean;
					public hasDimensionOverride(): boolean;
					public setHasBaseline(hasBaseline: boolean): void;
					public getVerticalBiasPercent(): number;
					public resetAllConstraints(): void;
					public setFinalFrame(left: number, top: number, right: number, bottom: number, baseline: number, orientation: number): void;
					public getVisibility(): number;
					public setInBarrier(orientation: number, value: boolean): void;
					public setVerticalWeight(verticalWeight: number): void;
					public oppositeDimensionDependsOn(orientation: number): boolean;
					public resetSolverVariables(cache: androidx.constraintlayout.core.Cache): void;
					public setFinalVertical(y1: number, y2: number): void;
					public isResolvedHorizontally(): boolean;
					public connectCircularConstraint(target: androidx.constraintlayout.core.widgets.ConstraintWidget, angle: number, radius: number): void;
					public getDimensionBehaviour(orientation: number): androidx.constraintlayout.core.widgets.ConstraintWidget.DimensionBehaviour;
					public setupDimensionRatio(hParentWrapContent: boolean, vParentWrapContent: boolean, horizontalDimensionFixed: boolean, verticalDimensionFixed: boolean): void;
					public getRight(): number;
					public getAnchors(): java.util.ArrayList<androidx.constraintlayout.core.widgets.ConstraintAnchor>;
					public addChildrenToSolverByDependency(container: androidx.constraintlayout.core.widgets.ConstraintWidgetContainer, system: androidx.constraintlayout.core.LinearSystem, widgets: java.util.HashSet<androidx.constraintlayout.core.widgets.ConstraintWidget>, orientation: number, addSelf: boolean): void;
					public getLastHorizontalMeasureSpec(): number;
					public getDebugName(): string;
					public setCompanionWidget(companion: any): void;
					public setContainerItemSkip(skip: number): void;
					public constructor(debugName: string, x: number, y: number, width: number, height: number);
					public getMinHeight(): number;
					public isMeasureRequested(): boolean;
					public setVerticalMatchStyle(verticalMatchStyle: number, min: number, max: number, percent: number): void;
					public setWidthWrapContent(widthWrapContent: boolean): void;
					public setHorizontalDimension(left: number, right: number): void;
					public getRootY(): number;
					public getLastVerticalMeasureSpec(): number;
					public getLeft(): number;
					public ensureWidgetRuns(): void;
					public getBaselineDistance(): number;
					public setOffset(x: number, y: number): void;
					public constructor(x: number, y: number, width: number, height: number);
					public hasDependencies(): boolean;
					public setY(y: number): void;
					public getWrapBehaviorInParent(): number;
					public getMinWidth(): number;
					public getDimensionRatioSide(): number;
					public immediateConnect(startType: androidx.constraintlayout.core.widgets.ConstraintAnchor.Type, target: androidx.constraintlayout.core.widgets.ConstraintWidget, endType: androidx.constraintlayout.core.widgets.ConstraintAnchor.Type, margin: number, goneMargin: number): void;
					public setOrigin(x: number, y: number): void;
					public setDebugSolverName(system: androidx.constraintlayout.core.LinearSystem, name: string): void;
					public isHorizontalSolvingPassDone(): boolean;
					public getLength(orientation: number): number;
					public getNextChainMember(orientation: number): androidx.constraintlayout.core.widgets.ConstraintWidget;
					public ensureMeasureRequested(): void;
					public isRoot(): boolean;
					public toString(): string;
					public setX(x: number): void;
					public allowedInBarrier(): boolean;
					public setHeightWrapContent(heightWrapContent: boolean): void;
					public getMaxHeight(): number;
					public setFinalTop(y1: number): void;
					public getType(): string;
					public setVisibility(visibility: number): void;
					public addToSolver(system: androidx.constraintlayout.core.LinearSystem, optimize: boolean): void;
					public setFinalHorizontal(x1: number, x2: number): void;
					public setType(type: string): void;
					public setHorizontalMatchStyle(horizontalMatchStyle: number, min: number, max: number, percent: number): void;
					public connect(from: androidx.constraintlayout.core.widgets.ConstraintAnchor, to: androidx.constraintlayout.core.widgets.ConstraintAnchor, margin: number): void;
					public setGoneMargin(type: androidx.constraintlayout.core.widgets.ConstraintAnchor.Type, goneMargin: number): void;
					public setDimensionRatio(ratio: string): void;
					public setParent(widget: androidx.constraintlayout.core.widgets.ConstraintWidget): void;
					public getTop(): number;
					public isInBarrier(orientation: number): boolean;
					public setDimension(w: number, h: number): void;
					public setDimensionRatio(ratio: number, dimensionRatioSide: number): void;
					public setBaselineDistance(baseline: number): void;
					public getVerticalChainControlWidget(): androidx.constraintlayout.core.widgets.ConstraintWidget;
					public setHorizontalWeight(horizontalWeight: number): void;
					public copy(src: androidx.constraintlayout.core.widgets.ConstraintWidget, map: java.util.HashMap<androidx.constraintlayout.core.widgets.ConstraintWidget,androidx.constraintlayout.core.widgets.ConstraintWidget>): void;
					public serialize(ret: java.lang.StringBuilder): java.lang.StringBuilder;
				}
				export module ConstraintWidget {
					export class DimensionBehaviour {
						public static class: java.lang.Class<androidx.constraintlayout.core.widgets.ConstraintWidget.DimensionBehaviour>;
						public static FIXED: androidx.constraintlayout.core.widgets.ConstraintWidget.DimensionBehaviour;
						public static WRAP_CONTENT: androidx.constraintlayout.core.widgets.ConstraintWidget.DimensionBehaviour;
						public static MATCH_CONSTRAINT: androidx.constraintlayout.core.widgets.ConstraintWidget.DimensionBehaviour;
						public static MATCH_PARENT: androidx.constraintlayout.core.widgets.ConstraintWidget.DimensionBehaviour;
						public static values(): native.Array<androidx.constraintlayout.core.widgets.ConstraintWidget.DimensionBehaviour>;
						public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
						public static valueOf(name: string): androidx.constraintlayout.core.widgets.ConstraintWidget.DimensionBehaviour;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module widgets {
				export class ConstraintWidgetContainer extends androidx.constraintlayout.core.widgets.WidgetContainer {
					public static class: java.lang.Class<androidx.constraintlayout.core.widgets.ConstraintWidgetContainer>;
					public mDependencyGraph: androidx.constraintlayout.core.widgets.analyzer.DependencyGraph;
					public mMeasurer: androidx.constraintlayout.core.widgets.analyzer.BasicMeasure.Measurer;
					public mMetrics: androidx.constraintlayout.core.Metrics;
					public mSystem: androidx.constraintlayout.core.LinearSystem;
					public mHorizontalChainsSize: number;
					public mVerticalChainsSize: number;
					public mGroupsWrapOptimized: boolean;
					public mHorizontalWrapOptimized: boolean;
					public mVerticalWrapOptimized: boolean;
					public mWrapFixedWidth: number;
					public mWrapFixedHeight: number;
					public mSkipSolver: boolean;
					public mMeasure: androidx.constraintlayout.core.widgets.analyzer.BasicMeasure.Measure;
					public invalidateGraph(): void;
					public getVerticalGuidelines(): java.util.ArrayList<androidx.constraintlayout.core.widgets.Guideline>;
					public handlesInternalConstraints(): boolean;
					public defineTerminalWidgets(): void;
					public updateHierarchy(): void;
					public addHorizontalWrapMaxVariable(right: androidx.constraintlayout.core.widgets.ConstraintAnchor): void;
					public directMeasure(optimizeWrap: boolean): boolean;
					public getOptimizationLevel(): number;
					public isHeightMeasuredTooSmall(): boolean;
					public directMeasureWithOrientation(optimizeWrap: boolean, orientation: number): boolean;
					public static measure(level: number, widget: androidx.constraintlayout.core.widgets.ConstraintWidget, measurer: androidx.constraintlayout.core.widgets.analyzer.BasicMeasure.Measurer, measure: androidx.constraintlayout.core.widgets.analyzer.BasicMeasure.Measure, measureStrategy: number): boolean;
					public constructor();
					public isWidthMeasuredTooSmall(): boolean;
					public constructor(debugName: string);
					public getHorizontalGuidelines(): java.util.ArrayList<androidx.constraintlayout.core.widgets.Guideline>;
					public layout(): void;
					public getType(): string;
					public reset(): void;
					public invalidateMeasures(): void;
					public setOptimizationLevel(value: number): void;
					public getMeasurer(): androidx.constraintlayout.core.widgets.analyzer.BasicMeasure.Measurer;
					public constructor(debugName: string, x: number, y: number, width: number, height: number);
					public setPadding(left: number, top: number, right: number, bottom: number): void;
					public getSystem(): androidx.constraintlayout.core.LinearSystem;
					public fillMetrics(metrics: androidx.constraintlayout.core.Metrics): void;
					public setPass(pass: number): void;
					public constructor(width: number, height: number);
					public constructor(debugName: string, width: number, height: number);
					public updateChildrenFromSolver(system: androidx.constraintlayout.core.LinearSystem, flags: native.Array<boolean>): boolean;
					public addChildrenToSolver(system: androidx.constraintlayout.core.LinearSystem): boolean;
					public updateFromRuns(updateHorizontal: boolean, updateVertical: boolean): void;
					public setMeasurer(measurer: androidx.constraintlayout.core.widgets.analyzer.BasicMeasure.Measurer): void;
					public setRtl(isRtl: boolean): void;
					public directMeasureSetup(optimizeWrap: boolean): boolean;
					public optimizeFor(feature: number): boolean;
					public measure(optimizationLevel: number, widthMode: number, widthSize: number, heightMode: number, heightSize: number, lastMeasureWidth: number, lastMeasureHeight: number, paddingX: number, paddingY: number): number;
					public constructor(x: number, y: number, width: number, height: number);
					public addHorizontalWrapMinVariable(left: androidx.constraintlayout.core.widgets.ConstraintAnchor): void;
					public isRtl(): boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module widgets {
				export class Flow extends androidx.constraintlayout.core.widgets.VirtualLayout {
					public static class: java.lang.Class<androidx.constraintlayout.core.widgets.Flow>;
					public static HORIZONTAL_ALIGN_START: number;
					public static HORIZONTAL_ALIGN_END: number;
					public static HORIZONTAL_ALIGN_CENTER: number;
					public static VERTICAL_ALIGN_TOP: number;
					public static VERTICAL_ALIGN_BOTTOM: number;
					public static VERTICAL_ALIGN_CENTER: number;
					public static VERTICAL_ALIGN_BASELINE: number;
					public static WRAP_NONE: number;
					public static WRAP_CHAIN: number;
					public static WRAP_ALIGNED: number;
					public removeAllIds(): void;
					public updateConstraints(container: androidx.constraintlayout.core.widgets.ConstraintWidgetContainer): void;
					public setWrapMode(value: number): void;
					public setVerticalAlign(value: number): void;
					public setFirstVerticalBias(value: number): void;
					public setLastVerticalStyle(value: number): void;
					public setLastHorizontalBias(value: number): void;
					public setFirstHorizontalBias(value: number): void;
					public constructor();
					public setHorizontalAlign(value: number): void;
					public constructor(debugName: string);
					public setFirstHorizontalStyle(value: number): void;
					public addToSolver(system: androidx.constraintlayout.core.LinearSystem, optimize: boolean): void;
					public setVerticalGap(value: number): void;
					public setHorizontalStyle(value: number): void;
					public setLastHorizontalStyle(value: number): void;
					public setHorizontalGap(value: number): void;
					public setVerticalStyle(value: number): void;
					public setVerticalBias(value: number): void;
					public constructor(debugName: string, x: number, y: number, width: number, height: number);
					public add(widget: androidx.constraintlayout.core.widgets.ConstraintWidget): void;
					public setMaxElementsWrap(value: number): void;
					public constructor(width: number, height: number);
					public constructor(debugName: string, width: number, height: number);
					public setHorizontalBias(value: number): void;
					public setLastVerticalBias(value: number): void;
					public setOrientation(value: number): void;
					public copy(src: androidx.constraintlayout.core.widgets.ConstraintWidget, map: java.util.HashMap<androidx.constraintlayout.core.widgets.ConstraintWidget,androidx.constraintlayout.core.widgets.ConstraintWidget>): void;
					public measure(widthMode: number, widthSize: number, heightMode: number, heightSize: number): void;
					public constructor(x: number, y: number, width: number, height: number);
					public measure(widget: androidx.constraintlayout.core.widgets.ConstraintWidget, horizontalBehavior: androidx.constraintlayout.core.widgets.ConstraintWidget.DimensionBehaviour, horizontalDimension: number, verticalBehavior: androidx.constraintlayout.core.widgets.ConstraintWidget.DimensionBehaviour, verticalDimension: number): void;
					public setFirstVerticalStyle(value: number): void;
				}
				export module Flow {
					export class WidgetsList extends java.lang.Object {
						public static class: java.lang.Class<androidx.constraintlayout.core.widgets.Flow.WidgetsList>;
						public getWidth(): number;
						public measureMatchConstraints(availableSpace: number): void;
						public createConstraints(isInRtl: boolean, chainIndex: number, isLastChain: boolean): void;
						public constructor(param0: androidx.constraintlayout.core.widgets.Flow, orientation: number, left: androidx.constraintlayout.core.widgets.ConstraintAnchor, top: androidx.constraintlayout.core.widgets.ConstraintAnchor, right: androidx.constraintlayout.core.widgets.ConstraintAnchor, bottom: androidx.constraintlayout.core.widgets.ConstraintAnchor, max: number);
						public setStartIndex(value: number): void;
						public clear(): void;
						public getHeight(): number;
						public add(widget: androidx.constraintlayout.core.widgets.ConstraintWidget): void;
						public setup(orientation: number, left: androidx.constraintlayout.core.widgets.ConstraintAnchor, top: androidx.constraintlayout.core.widgets.ConstraintAnchor, right: androidx.constraintlayout.core.widgets.ConstraintAnchor, bottom: androidx.constraintlayout.core.widgets.ConstraintAnchor, paddingLeft: number, paddingTop: number, paddingRight: number, paddingBottom: number, max: number): void;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module widgets {
				export class Guideline extends androidx.constraintlayout.core.widgets.ConstraintWidget {
					public static class: java.lang.Class<androidx.constraintlayout.core.widgets.Guideline>;
					public static HORIZONTAL: number;
					public static VERTICAL: number;
					public static RELATIVE_PERCENT: number;
					public static RELATIVE_BEGIN: number;
					public static RELATIVE_END: number;
					public static RELATIVE_UNKNOWN: number;
					public mRelativePercent: number;
					public mRelativeBegin: number;
					public mRelativeEnd: number;
					public getAnchor(anchorType: androidx.constraintlayout.core.widgets.ConstraintAnchor.Type): androidx.constraintlayout.core.widgets.ConstraintAnchor;
					public setGuidePercent(value: number): void;
					public updateFromSolver(system: androidx.constraintlayout.core.LinearSystem, optimize: boolean): void;
					public setGuideEnd(value: number): void;
					public getRelativeBegin(): number;
					public setGuideBegin(value: number): void;
					public setFinalValue(position: number): void;
					public setOrientation(orientation: number): void;
					public getRelativePercent(): number;
					public allowedInBarrier(): boolean;
					public constructor();
					public constructor(debugName: string);
					public getType(): string;
					public addToSolver(system: androidx.constraintlayout.core.LinearSystem, optimize: boolean): void;
					public getOrientation(): number;
					public isResolvedVertically(): boolean;
					public isResolvedHorizontally(): boolean;
					public isPercent(): boolean;
					public constructor(debugName: string, x: number, y: number, width: number, height: number);
					public constructor(width: number, height: number);
					public constructor(debugName: string, width: number, height: number);
					public setMinimumPosition(minimum: number): void;
					public getAnchor(): androidx.constraintlayout.core.widgets.ConstraintAnchor;
					public cyclePosition(): void;
					public copy(src: androidx.constraintlayout.core.widgets.ConstraintWidget, map: java.util.HashMap<androidx.constraintlayout.core.widgets.ConstraintWidget,androidx.constraintlayout.core.widgets.ConstraintWidget>): void;
					public getRelativeEnd(): number;
					public constructor(x: number, y: number, width: number, height: number);
					public getRelativeBehaviour(): number;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module widgets {
				export class Helper extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.core.widgets.Helper>;
					/**
					 * Constructs a new instance of the androidx.constraintlayout.core.widgets.Helper interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						updateConstraints(constraintWidgetContainer0: androidx.constraintlayout.core.widgets.ConstraintWidgetContainer): void;
						add(constraintWidget0: androidx.constraintlayout.core.widgets.ConstraintWidget): void;
						removeAllIds(): void;
					});
					public constructor();
					public updateConstraints(constraintWidgetContainer0: androidx.constraintlayout.core.widgets.ConstraintWidgetContainer): void;
					public removeAllIds(): void;
					public add(constraintWidget0: androidx.constraintlayout.core.widgets.ConstraintWidget): void;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module widgets {
				export class HelperWidget extends androidx.constraintlayout.core.widgets.ConstraintWidget implements androidx.constraintlayout.core.widgets.Helper {
					public static class: java.lang.Class<androidx.constraintlayout.core.widgets.HelperWidget>;
					public mWidgets: native.Array<androidx.constraintlayout.core.widgets.ConstraintWidget>;
					public mWidgetsCount: number;
					public constructor();
					public removeAllIds(): void;
					public updateConstraints(container: androidx.constraintlayout.core.widgets.ConstraintWidgetContainer): void;
					public copy(src: androidx.constraintlayout.core.widgets.ConstraintWidget, map: java.util.HashMap<androidx.constraintlayout.core.widgets.ConstraintWidget,androidx.constraintlayout.core.widgets.ConstraintWidget>): void;
					public constructor(debugName: string);
					public constructor(debugName: string, x: number, y: number, width: number, height: number);
					public add(widget: androidx.constraintlayout.core.widgets.ConstraintWidget): void;
					public constructor(x: number, y: number, width: number, height: number);
					public addDependents(dependencyLists: java.util.ArrayList<androidx.constraintlayout.core.widgets.analyzer.WidgetGroup>, orientation: number, group: androidx.constraintlayout.core.widgets.analyzer.WidgetGroup): void;
					public findGroupInDependents(orientation: number): number;
					public constructor(width: number, height: number);
					public constructor(debugName: string, width: number, height: number);
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module widgets {
				export class Optimizer extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.core.widgets.Optimizer>;
					public static OPTIMIZATION_NONE: number;
					public static OPTIMIZATION_DIRECT: number;
					public static OPTIMIZATION_BARRIER: number;
					public static OPTIMIZATION_CHAIN: number;
					public static OPTIMIZATION_DIMENSIONS: number;
					public static OPTIMIZATION_RATIO: number;
					public static OPTIMIZATION_GROUPS: number;
					public static OPTIMIZATION_GRAPH: number;
					public static OPTIMIZATION_GRAPH_WRAP: number;
					public static OPTIMIZATION_CACHE_MEASURES: number;
					public static OPTIMIZATION_DEPENDENCY_ORDERING: number;
					public static OPTIMIZATION_GROUPING: number;
					public static OPTIMIZATION_STANDARD: number;
					public constructor();
					public static enabled(optimizationLevel: number, optimization: number): boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module widgets {
				export class Placeholder extends androidx.constraintlayout.core.widgets.VirtualLayout {
					public static class: java.lang.Class<androidx.constraintlayout.core.widgets.Placeholder>;
					public constructor();
					public removeAllIds(): void;
					public updateConstraints(container: androidx.constraintlayout.core.widgets.ConstraintWidgetContainer): void;
					public constructor(debugName: string);
					public constructor(debugName: string, x: number, y: number, width: number, height: number);
					public measure(widthMode: number, widthSize: number, heightMode: number, heightSize: number): void;
					public add(widget: androidx.constraintlayout.core.widgets.ConstraintWidget): void;
					public addToSolver(system: androidx.constraintlayout.core.LinearSystem, optimize: boolean): void;
					public constructor(x: number, y: number, width: number, height: number);
					public measure(widget: androidx.constraintlayout.core.widgets.ConstraintWidget, horizontalBehavior: androidx.constraintlayout.core.widgets.ConstraintWidget.DimensionBehaviour, horizontalDimension: number, verticalBehavior: androidx.constraintlayout.core.widgets.ConstraintWidget.DimensionBehaviour, verticalDimension: number): void;
					public constructor(width: number, height: number);
					public constructor(debugName: string, width: number, height: number);
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module widgets {
				export class Rectangle extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.core.widgets.Rectangle>;
					public x: number;
					public y: number;
					public width: number;
					public height: number;
					public getCenterY(): number;
					public constructor();
					public getCenterX(): number;
					public setBounds(x: number, y: number, width: number, height: number): void;
					public contains(x: number, y: number): boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module widgets {
				export class VirtualLayout extends androidx.constraintlayout.core.widgets.HelperWidget {
					public static class: java.lang.Class<androidx.constraintlayout.core.widgets.VirtualLayout>;
					public mMeasure: androidx.constraintlayout.core.widgets.analyzer.BasicMeasure.Measure;
					public setPaddingStart(value: number): void;
					public captureWidgets(): void;
					public getMeasuredHeight(): number;
					public removeAllIds(): void;
					public updateConstraints(container: androidx.constraintlayout.core.widgets.ConstraintWidgetContainer): void;
					public setPadding(value: number): void;
					public setPaddingLeft(value: number): void;
					public setMeasure(width: number, height: number): void;
					public constructor();
					public setPaddingBottom(value: number): void;
					public applyRtl(isRtl: boolean): void;
					public getPaddingLeft(): number;
					public constructor(debugName: string);
					public getPaddingTop(): number;
					public setPaddingEnd(value: number): void;
					public getPaddingRight(): number;
					public getPaddingBottom(): number;
					public constructor(debugName: string, x: number, y: number, width: number, height: number);
					public add(widget: androidx.constraintlayout.core.widgets.ConstraintWidget): void;
					public constructor(width: number, height: number);
					public constructor(debugName: string, width: number, height: number);
					public setPaddingRight(value: number): void;
					public getMeasuredWidth(): number;
					public measureChildren(): boolean;
					public setPaddingTop(value: number): void;
					public contains(widgets: java.util.HashSet<androidx.constraintlayout.core.widgets.ConstraintWidget>): boolean;
					public measure(widthMode: number, widthSize: number, heightMode: number, heightSize: number): void;
					public needSolverPass(): boolean;
					public constructor(x: number, y: number, width: number, height: number);
					public measure(widget: androidx.constraintlayout.core.widgets.ConstraintWidget, horizontalBehavior: androidx.constraintlayout.core.widgets.ConstraintWidget.DimensionBehaviour, horizontalDimension: number, verticalBehavior: androidx.constraintlayout.core.widgets.ConstraintWidget.DimensionBehaviour, verticalDimension: number): void;
					public needsCallbackFromSolver(value: boolean): void;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module widgets {
				export class WidgetContainer extends androidx.constraintlayout.core.widgets.ConstraintWidget {
					public static class: java.lang.Class<androidx.constraintlayout.core.widgets.WidgetContainer>;
					public mChildren: java.util.ArrayList<androidx.constraintlayout.core.widgets.ConstraintWidget>;
					public reset(): void;
					public getChildren(): java.util.ArrayList<androidx.constraintlayout.core.widgets.ConstraintWidget>;
					public constructor(debugName: string, x: number, y: number, width: number, height: number);
					public add(widget: androidx.constraintlayout.core.widgets.ConstraintWidget): void;
					public removeAllChildren(): void;
					public remove(widget: androidx.constraintlayout.core.widgets.ConstraintWidget): void;
					public constructor(width: number, height: number);
					public constructor(debugName: string, width: number, height: number);
					public add(widgets: native.Array<androidx.constraintlayout.core.widgets.ConstraintWidget>): void;
					public getRootConstraintContainer(): androidx.constraintlayout.core.widgets.ConstraintWidgetContainer;
					public constructor();
					public constructor(debugName: string);
					public layout(): void;
					public setOffset(x: number, y: number): void;
					public resetSolverVariables(cache: androidx.constraintlayout.core.Cache): void;
					public constructor(x: number, y: number, width: number, height: number);
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module widgets {
				export module analyzer {
					export class BaselineDimensionDependency extends androidx.constraintlayout.core.widgets.analyzer.DimensionDependency {
						public static class: java.lang.Class<androidx.constraintlayout.core.widgets.analyzer.BaselineDimensionDependency>;
						public constructor(run: androidx.constraintlayout.core.widgets.analyzer.WidgetRun);
						public update(node: androidx.constraintlayout.core.widgets.analyzer.Dependency): void;
						public update(node: androidx.constraintlayout.core.widgets.analyzer.DependencyNode): void;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module widgets {
				export module analyzer {
					export class BasicMeasure extends java.lang.Object {
						public static class: java.lang.Class<androidx.constraintlayout.core.widgets.analyzer.BasicMeasure>;
						public static UNSPECIFIED: number;
						public static EXACTLY: number;
						public static AT_MOST: number;
						public static MATCH_PARENT: number;
						public static WRAP_CONTENT: number;
						public static FIXED: number;
						public solverMeasure(layout: androidx.constraintlayout.core.widgets.ConstraintWidgetContainer, optimizationLevel: number, paddingX: number, paddingY: number, widthMode: number, widthSize: number, heightMode: number, heightSize: number, lastMeasureWidth: number, lastMeasureHeight: number): number;
						public constructor(constraintWidgetContainer: androidx.constraintlayout.core.widgets.ConstraintWidgetContainer);
						public updateHierarchy(layout: androidx.constraintlayout.core.widgets.ConstraintWidgetContainer): void;
					}
					export module BasicMeasure {
						export class Measure extends java.lang.Object {
							public static class: java.lang.Class<androidx.constraintlayout.core.widgets.analyzer.BasicMeasure.Measure>;
							public static SELF_DIMENSIONS: number;
							public static TRY_GIVEN_DIMENSIONS: number;
							public static USE_GIVEN_DIMENSIONS: number;
							public horizontalBehavior: androidx.constraintlayout.core.widgets.ConstraintWidget.DimensionBehaviour;
							public verticalBehavior: androidx.constraintlayout.core.widgets.ConstraintWidget.DimensionBehaviour;
							public horizontalDimension: number;
							public verticalDimension: number;
							public measuredWidth: number;
							public measuredHeight: number;
							public measuredBaseline: number;
							public measuredHasBaseline: boolean;
							public measuredNeedsSolverPass: boolean;
							public measureStrategy: number;
							public constructor();
						}
						export class Measurer extends java.lang.Object {
							public static class: java.lang.Class<androidx.constraintlayout.core.widgets.analyzer.BasicMeasure.Measurer>;
							/**
							 * Constructs a new instance of the androidx.constraintlayout.core.widgets.analyzer.BasicMeasure() when extending the interface class.
							 */
							public constructor(implementation: {
								measure(constraintWidget0: androidx.constraintlayout.core.widgets.ConstraintWidget, measure1: androidx.constraintlayout.core.widgets.analyzer.BasicMeasure.Measure): void;
								didMeasures(): void;
							});
							public constructor();
							public didMeasures(): void;
							public measure(constraintWidget0: androidx.constraintlayout.core.widgets.ConstraintWidget, measure1: androidx.constraintlayout.core.widgets.analyzer.BasicMeasure.Measure): void;
						}
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module widgets {
				export module analyzer {
					export class ChainRun extends androidx.constraintlayout.core.widgets.analyzer.WidgetRun {
						public static class: java.lang.Class<androidx.constraintlayout.core.widgets.analyzer.ChainRun>;
						public applyToWidget(): void;
						public constructor(widget: androidx.constraintlayout.core.widgets.ConstraintWidget);
						public getWrapDimension(): number;
						public constructor(widget: androidx.constraintlayout.core.widgets.ConstraintWidget, orientation: number);
						public update(dependency: androidx.constraintlayout.core.widgets.analyzer.Dependency): void;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module widgets {
				export module analyzer {
					export class Dependency extends java.lang.Object {
						public static class: java.lang.Class<androidx.constraintlayout.core.widgets.analyzer.Dependency>;
						/**
						 * Constructs a new instance of the androidx.constraintlayout.core.widgets.analyzer.Dependency interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							update(dependency0: androidx.constraintlayout.core.widgets.analyzer.Dependency): void;
						});
						public constructor();
						public update(dependency0: androidx.constraintlayout.core.widgets.analyzer.Dependency): void;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module widgets {
				export module analyzer {
					export class DependencyGraph extends java.lang.Object {
						public static class: java.lang.Class<androidx.constraintlayout.core.widgets.analyzer.DependencyGraph>;
						public buildGraph(runs: java.util.ArrayList<androidx.constraintlayout.core.widgets.analyzer.WidgetRun>): void;
						public directMeasure(optimizeWrap: boolean): boolean;
						public invalidateMeasures(): void;
						public directMeasureWithOrientation(optimizeWrap: boolean, orientation: number): boolean;
						public constructor(container: androidx.constraintlayout.core.widgets.ConstraintWidgetContainer);
						public directMeasureSetup(optimizeWrap: boolean): boolean;
						public setMeasurer(measurer: androidx.constraintlayout.core.widgets.analyzer.BasicMeasure.Measurer): void;
						public measureWidgets(): void;
						public defineTerminalWidgets(horizontalBehavior: androidx.constraintlayout.core.widgets.ConstraintWidget.DimensionBehaviour, verticalBehavior: androidx.constraintlayout.core.widgets.ConstraintWidget.DimensionBehaviour): void;
						public invalidateGraph(): void;
						public buildGraph(): void;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module widgets {
				export module analyzer {
					export class DependencyNode extends java.lang.Object implements androidx.constraintlayout.core.widgets.analyzer.Dependency {
						public static class: java.lang.Class<androidx.constraintlayout.core.widgets.analyzer.DependencyNode>;
						public updateDelegate: androidx.constraintlayout.core.widgets.analyzer.Dependency;
						public delegateToWidgetRun: boolean;
						public readyToSolve: boolean;
						public value: number;
						public resolved: boolean;
						public resolve(value: number): void;
						public name(): string;
						public addDependency(dependency: androidx.constraintlayout.core.widgets.analyzer.Dependency): void;
						public constructor(run: androidx.constraintlayout.core.widgets.analyzer.WidgetRun);
						public clear(): void;
						public toString(): string;
						public update(node: androidx.constraintlayout.core.widgets.analyzer.Dependency): void;
					}
					export module DependencyNode {
						export class Type {
							public static class: java.lang.Class<androidx.constraintlayout.core.widgets.analyzer.DependencyNode.Type>;
							public static UNKNOWN: androidx.constraintlayout.core.widgets.analyzer.DependencyNode.Type;
							public static HORIZONTAL_DIMENSION: androidx.constraintlayout.core.widgets.analyzer.DependencyNode.Type;
							public static VERTICAL_DIMENSION: androidx.constraintlayout.core.widgets.analyzer.DependencyNode.Type;
							public static LEFT: androidx.constraintlayout.core.widgets.analyzer.DependencyNode.Type;
							public static RIGHT: androidx.constraintlayout.core.widgets.analyzer.DependencyNode.Type;
							public static TOP: androidx.constraintlayout.core.widgets.analyzer.DependencyNode.Type;
							public static BOTTOM: androidx.constraintlayout.core.widgets.analyzer.DependencyNode.Type;
							public static BASELINE: androidx.constraintlayout.core.widgets.analyzer.DependencyNode.Type;
							public static valueOf(name: string): androidx.constraintlayout.core.widgets.analyzer.DependencyNode.Type;
							public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
							public static values(): native.Array<androidx.constraintlayout.core.widgets.analyzer.DependencyNode.Type>;
						}
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module widgets {
				export module analyzer {
					export class DimensionDependency extends androidx.constraintlayout.core.widgets.analyzer.DependencyNode {
						public static class: java.lang.Class<androidx.constraintlayout.core.widgets.analyzer.DimensionDependency>;
						public wrapValue: number;
						public resolve(value: number): void;
						public constructor(run: androidx.constraintlayout.core.widgets.analyzer.WidgetRun);
						public update(node: androidx.constraintlayout.core.widgets.analyzer.Dependency): void;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module widgets {
				export module analyzer {
					export class Direct extends java.lang.Object {
						public static class: java.lang.Class<androidx.constraintlayout.core.widgets.analyzer.Direct>;
						public constructor();
						public static solveChain(container: androidx.constraintlayout.core.widgets.ConstraintWidgetContainer, system: androidx.constraintlayout.core.LinearSystem, orientation: number, offset: number, chainHead: androidx.constraintlayout.core.widgets.ChainHead, isChainSpread: boolean, isChainSpreadInside: boolean, isChainPacked: boolean): boolean;
						public static ls(level: number): string;
						public static solvingPass(layout: androidx.constraintlayout.core.widgets.ConstraintWidgetContainer, measurer: androidx.constraintlayout.core.widgets.analyzer.BasicMeasure.Measurer): void;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module widgets {
				export module analyzer {
					export class Grouping extends java.lang.Object {
						public static class: java.lang.Class<androidx.constraintlayout.core.widgets.analyzer.Grouping>;
						public static findDependents(constraintWidget: androidx.constraintlayout.core.widgets.ConstraintWidget, orientation: number, list: java.util.ArrayList<androidx.constraintlayout.core.widgets.analyzer.WidgetGroup>, group: androidx.constraintlayout.core.widgets.analyzer.WidgetGroup): androidx.constraintlayout.core.widgets.analyzer.WidgetGroup;
						public constructor();
						public static simpleSolvingPass(layout: androidx.constraintlayout.core.widgets.ConstraintWidgetContainer, measurer: androidx.constraintlayout.core.widgets.analyzer.BasicMeasure.Measurer): boolean;
						public static validInGroup(layoutHorizontal: androidx.constraintlayout.core.widgets.ConstraintWidget.DimensionBehaviour, layoutVertical: androidx.constraintlayout.core.widgets.ConstraintWidget.DimensionBehaviour, widgetHorizontal: androidx.constraintlayout.core.widgets.ConstraintWidget.DimensionBehaviour, widgetVertical: androidx.constraintlayout.core.widgets.ConstraintWidget.DimensionBehaviour): boolean;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module widgets {
				export module analyzer {
					export class GuidelineReference extends androidx.constraintlayout.core.widgets.analyzer.WidgetRun {
						public static class: java.lang.Class<androidx.constraintlayout.core.widgets.analyzer.GuidelineReference>;
						public applyToWidget(): void;
						public constructor(widget: androidx.constraintlayout.core.widgets.ConstraintWidget);
						public update(dependency: androidx.constraintlayout.core.widgets.analyzer.Dependency): void;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module widgets {
				export module analyzer {
					export class HelperReferences extends androidx.constraintlayout.core.widgets.analyzer.WidgetRun {
						public static class: java.lang.Class<androidx.constraintlayout.core.widgets.analyzer.HelperReferences>;
						public applyToWidget(): void;
						public constructor(widget: androidx.constraintlayout.core.widgets.ConstraintWidget);
						public update(dependency: androidx.constraintlayout.core.widgets.analyzer.Dependency): void;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module widgets {
				export module analyzer {
					export class HorizontalWidgetRun extends androidx.constraintlayout.core.widgets.analyzer.WidgetRun {
						public static class: java.lang.Class<androidx.constraintlayout.core.widgets.analyzer.HorizontalWidgetRun>;
						public applyToWidget(): void;
						public constructor(widget: androidx.constraintlayout.core.widgets.ConstraintWidget);
						public update(dependency: androidx.constraintlayout.core.widgets.analyzer.Dependency): void;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module widgets {
				export module analyzer {
					export class RunGroup extends java.lang.Object {
						public static class: java.lang.Class<androidx.constraintlayout.core.widgets.analyzer.RunGroup>;
						public static START: number;
						public static END: number;
						public static BASELINE: number;
						public static index: number;
						public position: number;
						public dual: boolean;
						public defineTerminalWidgets(horizontalCheck: boolean, verticalCheck: boolean): void;
						public computeWrapSize(container: androidx.constraintlayout.core.widgets.ConstraintWidgetContainer, orientation: number): number;
						public constructor(run: androidx.constraintlayout.core.widgets.analyzer.WidgetRun, dir: number);
						public add(run: androidx.constraintlayout.core.widgets.analyzer.WidgetRun): void;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module widgets {
				export module analyzer {
					export class VerticalWidgetRun extends androidx.constraintlayout.core.widgets.analyzer.WidgetRun {
						public static class: java.lang.Class<androidx.constraintlayout.core.widgets.analyzer.VerticalWidgetRun>;
						public baseline: androidx.constraintlayout.core.widgets.analyzer.DependencyNode;
						public applyToWidget(): void;
						public constructor(widget: androidx.constraintlayout.core.widgets.ConstraintWidget);
						public update(dependency: androidx.constraintlayout.core.widgets.analyzer.Dependency): void;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module widgets {
				export module analyzer {
					export class WidgetGroup extends java.lang.Object {
						public static class: java.lang.Class<androidx.constraintlayout.core.widgets.analyzer.WidgetGroup>;
						public moveTo(orientation: number, widgetGroup: androidx.constraintlayout.core.widgets.analyzer.WidgetGroup): void;
						public setOrientation(orientation: number): void;
						public setAuthoritative(isAuthoritative: boolean): void;
						public isAuthoritative(): boolean;
						public constructor(orientation: number);
						public add(widget: androidx.constraintlayout.core.widgets.ConstraintWidget): boolean;
						public toString(): string;
						public getId(): number;
						public apply(): void;
						public intersectWith(group: androidx.constraintlayout.core.widgets.analyzer.WidgetGroup): boolean;
						public cleanup(dependencyLists: java.util.ArrayList<androidx.constraintlayout.core.widgets.analyzer.WidgetGroup>): void;
						public clear(): void;
						public size(): number;
						public measureWrap(system: androidx.constraintlayout.core.LinearSystem, orientation: number): number;
						public getOrientation(): number;
					}
					export module WidgetGroup {
						export class MeasureResult extends java.lang.Object {
							public static class: java.lang.Class<androidx.constraintlayout.core.widgets.analyzer.WidgetGroup.MeasureResult>;
							public apply(): void;
							public constructor(this0: androidx.constraintlayout.core.widgets.analyzer.WidgetGroup, widget: androidx.constraintlayout.core.widgets.ConstraintWidget, system: androidx.constraintlayout.core.LinearSystem, orientation: number);
						}
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module core {
			export module widgets {
				export module analyzer {
					export abstract class WidgetRun extends java.lang.Object implements androidx.constraintlayout.core.widgets.analyzer.Dependency {
						public static class: java.lang.Class<androidx.constraintlayout.core.widgets.analyzer.WidgetRun>;
						public matchConstraintsType: number;
						public dimensionBehavior: androidx.constraintlayout.core.widgets.ConstraintWidget.DimensionBehaviour;
						public orientation: number;
						public start: androidx.constraintlayout.core.widgets.analyzer.DependencyNode;
						public end: androidx.constraintlayout.core.widgets.analyzer.DependencyNode;
						public mRunType: androidx.constraintlayout.core.widgets.analyzer.WidgetRun.RunType;
						public isCenterConnection(): boolean;
						public constructor(widget: androidx.constraintlayout.core.widgets.ConstraintWidget);
						public addTarget(node: androidx.constraintlayout.core.widgets.analyzer.DependencyNode, target: androidx.constraintlayout.core.widgets.analyzer.DependencyNode, margin: number): void;
						public getLimitedDimension(dimension: number, orientation: number): number;
						public update(dependency: androidx.constraintlayout.core.widgets.analyzer.Dependency): void;
						public updateRunStart(dependency: androidx.constraintlayout.core.widgets.analyzer.Dependency): void;
						public getTarget(anchor: androidx.constraintlayout.core.widgets.ConstraintAnchor, orientation: number): androidx.constraintlayout.core.widgets.analyzer.DependencyNode;
						public wrapSize(direction: number): number;
						public isResolved(): boolean;
						public isDimensionResolved(): boolean;
						public getWrapDimension(): number;
						public addTarget(node: androidx.constraintlayout.core.widgets.analyzer.DependencyNode, target: androidx.constraintlayout.core.widgets.analyzer.DependencyNode, marginFactor: number, dimensionDependency: androidx.constraintlayout.core.widgets.analyzer.DimensionDependency): void;
						public getTarget(anchor: androidx.constraintlayout.core.widgets.ConstraintAnchor): androidx.constraintlayout.core.widgets.analyzer.DependencyNode;
						public updateRunEnd(dependency: androidx.constraintlayout.core.widgets.analyzer.Dependency): void;
						public updateRunCenter(dependency: androidx.constraintlayout.core.widgets.analyzer.Dependency, startAnchor: androidx.constraintlayout.core.widgets.ConstraintAnchor, endAnchor: androidx.constraintlayout.core.widgets.ConstraintAnchor, orientation: number): void;
					}
					export module WidgetRun {
						export class RunType {
							public static class: java.lang.Class<androidx.constraintlayout.core.widgets.analyzer.WidgetRun.RunType>;
							public static NONE: androidx.constraintlayout.core.widgets.analyzer.WidgetRun.RunType;
							public static START: androidx.constraintlayout.core.widgets.analyzer.WidgetRun.RunType;
							public static END: androidx.constraintlayout.core.widgets.analyzer.WidgetRun.RunType;
							public static CENTER: androidx.constraintlayout.core.widgets.analyzer.WidgetRun.RunType;
							public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
							public static valueOf(name: string): androidx.constraintlayout.core.widgets.analyzer.WidgetRun.RunType;
							public static values(): native.Array<androidx.constraintlayout.core.widgets.analyzer.WidgetRun.RunType>;
						}
					}
				}
			}
		}
	}
}

//Generics information:
//androidx.constraintlayout.core.Pools.Pool:1
//androidx.constraintlayout.core.Pools.SimplePool:1

