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

module.exports = _;
