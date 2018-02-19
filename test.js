var arrayTypeOfValues = require('./');
var expect = require('chai').expect;

describe('arrayTypeOfValues(array)', function()
  {
    it('returns undefined for an empty array', function()
      {
        expect(arrayTypeOfValues([])).to.equal(undefined);
      }
    );

    it('returns a primitive type for an array of one type', function()
      {
        expect(arrayTypeOfValues(['fee', 'fi', 'fo', 'fum'])).to.equal('string');
      }
    );

    it('returns "array" for an array of arrays', function()
      {
        expect(arrayTypeOfValues([['test'], [], [25]])).to.equal('array');
      }
    );

    it('returns a common superclass for a mixed-type array', function()
      {
        expect(arrayTypeOfValues([1, 2, 'three'])).to.equal('object');
      }
    );
  }
);
