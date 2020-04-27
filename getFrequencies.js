const getFrequencies = (arr) => {
  var final = {};
  for (let iter = 0; iter < arr.length; iter++) {
    if (final[arr[iter]] === undefined) {
      final[arr[iter]] = 1;
    } else {
      final[arr[iter]] += 1;
    }
  }
  return final;
};

console.log(getFrequencies([1, 2, 3, 4, 5, 1, 2]));

module.exports = getFrequencies;
