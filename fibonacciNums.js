const fibonacciNums = (n) => {
  // base cases
  if (n <= 0) return [];
  if (n === 1) return [0];

  const r = [0, 1];
  n -= 2;
  for (let i=0; i<n; i++) {
    r.push(r[r.length-1] + r[r.length-2]);
  }

  return r;
};

module.exports = fibonacciNums;
