const fibonacciNums = (n) => {
  let output = [];
  let first = 0;
  let second = 1;

  if (n == 0) {
    return output;
  } else if (n == 1) {
    return [0];
  } else if (n == 2) {
    return [0, 1];
  } else {
    output = [0, 1];
    for (var i = 0; i < n-2; i++) {
      var temp = first + second;
      first = second;
      second = temp;

      output.push(second);
    }
    return output;
  }
};

module.exports = fibonacciNums;
