const { expect } = require('chai');

const _ = require('../lowbar');

describe.only('#take', () => {
  it('returns an array when passed an array', () => {
    expect(_.take([])).to.eql([]);
  });
  it('returns the first n items from an array', () => {
    expect(_.take([1, 2, 3])).to.eql([1]);
    expect(_.take([1, 2, 3], 2)).to.eql([1, 2]);
    expect(_.take([1, 2, 3], 5)).to.eql([1, 2, 3]);
  });
  it('returns an empty array when the second argument is 0', () => {
    expect(_.take([1, 2, 3], 0)).to.eql([]);
  });
});
