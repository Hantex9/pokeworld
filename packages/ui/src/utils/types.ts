/**
 * Enhance the type with the testID that should be used to locate a view in end-to-end tests.
 */
export type TestID = { testID?: string };

export type WithTestID<T> = T & TestID;
/**
 * Ensure that all the keys of type T are required, transforming all optional field of kind T | undefined to T
 */
export type RequiredAll<T> = { [K in keyof T]-?: T[K] };

/**
 * Return a type that prohibits the use of keys that are present only in T but not in U
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

/**
 * Ensure that the types T and U are mutually exclusive
 */
export type XOR<T, U> = T | U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;

/**
 * Returns a type with the desired type or null
 */
export type Nullable<T> = T | null;

/**
 * Returns a type with the desired type or undefined
 */
export type Optional<T> = T | undefined;

export type TextInputValidationRefProps = { validateInput: () => void };
