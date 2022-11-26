/**
 * Gets the most specific common type of all the values in an array.
 * @param {Array} array - The array to check.  There is no error checking;
 *                        this must be an array.
 * @returns {String|undefined} A primitive typename, "object" (e.g., if an
 *                             array has a string and a, number), or "array"
 *                             (if all elements are themselves arrays).
 *                             Returns undefined is array is empty.
 */
module.exports = function arrayTypeOfValues(array) {
  if (array.length === 0)
  {
    return undefined;
  }

  var types = array.map(
    function(value)
    {
      if (typeof value === 'undefined')
      {
        return 'undefined';
      }
      if (value.constructor === Array)
      {
        return 'array';
      }
      if (typeof value === 'object')
      {
        return value === null ? 'null' : 'object';
      }

      return typeof value;
    }
  );

  return types.every(function(t) { return t === types[0]; }) ? types[0] : 'object';
}
