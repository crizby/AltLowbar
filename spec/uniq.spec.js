const { expect } = require('chai');

const _ = require('../lowbar');

describe.only('#uniq', () => {
    it('returns an array with no duplicates', () => {
      expect(_.uniq([1,2,1])).to.eql([1,2]);
    });
    

});