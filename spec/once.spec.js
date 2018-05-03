const { expect } = require('chai');
const sinon = require('sinon');
const _ = require('../lowbar');

describe('#once', () => {
  it('make sure the function only runs once', () => {
    const input = sinon.spy();
    const spyonce = _.once(input);
    spyonce();
    spyonce();
    expect(input.callCount).to.equal(1);
  });
  it('returns the same value reference each time regardless fo how many times it is called', () => {
    const input = sinon.spy();
    const spyonce = _.once(input);
    spyonce();
    spyonce();
    expect(input.returnValues[0]).to.equal(input.returnValues[1]);
  });
});
