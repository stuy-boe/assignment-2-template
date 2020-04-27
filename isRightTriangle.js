const isRightTriangle = (a, b, c) => {
  // bubble sort
  if (a > b) {
    b = a + b;
    a = b - a;
    b = b - a;
  }
  if (b > c) {
    c = b + c;
    b = c - b;
    c = c - b;
  }

  // Pythagorean theorem
  return c*c === a*a + b*b;
};

module.exports = isRightTriangle;
