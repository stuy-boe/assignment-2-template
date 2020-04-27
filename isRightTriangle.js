const isRightTriangle = (a, b, c) => {
  const total = a + b + c;
  const max = Math.max(a, b, c);
  const min = Math.min(a, b, c);
  const mid = total - max - min;

  return Math.pow(min, 2) + Math.pow(mid, 2) == Math.pow(max, 2);
};

module.exports = isRightTriangle;
