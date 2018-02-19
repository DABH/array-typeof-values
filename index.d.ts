// Type definitions for array-typeof-values 1.0
// Project: https://github.com/DABH/array-typeof-values
// Definitions by: DABH <https://github.com/DABH>
// Definitions: https://github.com/DABH/array-typeof-values

/**
 * Gets the most specific common type of all the values in an array.
 * @param {Array} array - The array to check.  There is no error checking;
 *                        this must be an array.
 * @returns {String|undefined} A primitive typename, "object" (e.g., if an
 *                             array has a string and a, number), or "array"
 *                             (if all elements are themselves arrays).
 *                             Returns undefined is array is empty.
 */
declare function arrayTypeOfValues(array: any[]): string | undefined;
export = arrayTypeOfValues;
