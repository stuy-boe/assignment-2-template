const isRightTriangle = (a, b, c) => {
  if (a <= 0 || b <= 0 || c <= 0) {
    // degenerate triangles are not triangles
    return false;
  }

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
