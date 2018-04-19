const { expect } = require('chai');
const _ = require('../lowbar');
const sinon = require('sinon');

describe.only('#forEach', () => {
  it('runs a function for each item in an array', () => {
    const input = [1, 2, 3];
    const forEachSpy = sinon.spy();
    _.forEach(input, forEachSpy);
    expect(forEachSpy.callCount).to.equal(3);
  });
  it('runs a function for each item in an array', () => {
    const input = [1, 2, 3, 4, 5, 6, 7, 8];
    const forEachSpy = sinon.spy();
    _.forEach(input, forEachSpy);
    expect(forEachSpy.callCount).to.equal(8);
  });
  it('returns 0 if there are no items in the array to run', () => {
    const input = [];
    const forEachSpy = sinon.spy();
    _.forEach(input, forEachSpy);
    expect(forEachSpy.callCount).to.equal(0);
  });
});
