const { expect } = require('chai');

const _ = require('../lowbar');

describe.only('#reduce', () => {
  it('returns the accumulator', () => {
    let input1 = [1,2,3,4]
    let sumUp = (sumacc,currentValue)=>{
        return sumacc + currentValue
         }
    let initialAcc = 0;

    expect(_.reduce(input1,sumUp,initialAcc)).to.eql(10);

   });

   it('returns a new object when the passed function ', ()=>{
       let input = ['barry','barry','larry','larry','barry']
       let howManyBarrys = (allNames, man,index)=>{
        if ( man in allNames) {
            allNames[man]++;
          }
          else {
            allNames[man] = 1;
          }
          return allNames;

            }
        let initialAcc = {};

        let expected = {barry: 3, larry:2}
        
        
        expect(_.reduce(input,howManyBarrys,initialAcc)).to.eql(expected);
   })
  
});