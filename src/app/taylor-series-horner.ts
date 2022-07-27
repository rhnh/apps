export const taylorSeriesHorner = (() => {
  let s = 1;
  const f = (x, n) => {
    if (n === 0) {
      return s;
    }
    s = 1 + (x / n) * s;
    return f(x, n - 1);
  };
  return f;
})();
