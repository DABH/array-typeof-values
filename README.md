# array-typeof-values
[![Build Status](https://travis-ci.org/DABH/array-typeof-values.svg?branch=master)](https://travis-ci.org/DABH/array-typeof-values)
[![version](https://img.shields.io/npm/v/array-typeof-values.svg)](https://www.npmjs.org/package/array-typeof-values)
[![dependencies](https://david-dm.org/DABH/array-typeof-values.svg)](https://david-dm.org/DABH/array-typeof-values)
[![devDependencies](https://david-dm.org/DABH/array-typeof-values/dev-status.svg)](https://david-dm.org/DABH/array-typeof-values#info=devDependencies)

_Gets the most specific common type of all the values in an array_

TypeScript definitions included!

## Installation

    npm install array-typeof-values

## Usage

```js
var arrayTypeOfValues = require('array-typeof-values');

arrayTypeOfValues(['a', 'b', 'c']); // -> 'string'
arrayTypeOfValues(['a', 2, 'c']); // -> 'object'
arrayTypeOfValues([[1], ['b'], []]); // -> 'array'
arrayTypeOfValues([]); // -> undefined
```

## License

MIT &copy; [https://github.com/DABH](https://github.com/DABH)
