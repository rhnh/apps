import { exponentialSeries } from "../expo_series_sum";
test("Exponential Series", () => {
  expect(exponentialSeries(1, 3)).toBeCloseTo(2.666667, 5);
  expect(exponentialSeries(1, 20)).toBeCloseTo(2.7182818, 5);
  expect(exponentialSeries(3, 10)).toBeCloseTo(20.0796652, 5);
  expect(exponentialSeries(3, 20)).toBeCloseTo(20.0855369, 5);
});
