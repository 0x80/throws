/**
 * Check if a value is present and throw an error if it doesn't. It checks only for
 * undefined or null, because when writing Typescript we typically only throw on those conditions.
 *
 * @todo Not sure if we'd like to check for empty strings. I don't see a typical
 *   use-case.
 */
export function throws<T>(value: T | undefined, msg: string): asserts value {
  if (value === undefined || value === null) {
    throw new Error(msg);
  }
}
