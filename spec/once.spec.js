const { expect } = require('chai');
const sinon = require('sinon');
const _ = require('../lowbar');

describe.only('#once', () => {
  it('make sure the function only runs once', () => {
    const input = sinon.spy();
    const spyonce = _.once(input);
    spyonce();
    spyonce();
    expect(input.callCount).to.equal(1);
  });
});
