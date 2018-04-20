const _ = {};

_.identity = x => {
  return x;
};
// _.take(array, [n=1])
/* $ n_ --fp
n_ > _.map(function(v) { return v * 2; }, [1, 2, 3]);
[ 2, 4, 6 ]
n_ >*/

_.take = (array, n = 1) => {
  return array.slice(0, n);
};

_.uniq = array => {
  return array.reduce((acc, val) => {
    if (acc.indexOf(val) === -1) {
      acc.push(val);
    }
    return acc;
  }, []);
};

_.forEach = (collection, iteratee = _.identity) => {
  for (let i = 0; i < collection.length; i++) {
    iteratee(collection[i]);
  }
};

/* _.map = (collection, iteratee = _.identity ) => {
  let result = [];
  for (let i = 0; i < collection.length; i++){
    result.push(iteratee(collection[i]))
  }
  return result;

}*/

_.reduce = (collection, iteratee, accumulator) => {
  let index;

  for (var i = 0; i < collection.length; i++) {
    accumulator = iteratee(accumulator, collection[i]);
    index = i;
  }
  return accumulator;
};

_.once = func => {
  let counter = 0;
  let funcResult;
  return function(a) {
    if (counter === 0) {
      counter += 1;
      let funcResult = func(a);
      return funcResult;
    }
    return funcResult;
  };
};

module.exports = _;
