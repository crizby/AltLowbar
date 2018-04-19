const { expect } = require('chai');
const _ = require('../lowbar');
const { sinon } = require('sinon');

describe.only('#forEach', () => {
  it('runs a function for each item in an array', () => {
    const forEachSpy = sinon.spy();
    _.forEach([1, 2, 3], forEachSpy);
    console.log(forEachSpy);
    expect(forEachSpy.callCount).to.equal(3);
  });
});
