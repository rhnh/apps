import { taylorSeriesHorner } from "../taylor-series-horner";
test("Exponential Series", () => {
  expect(taylorSeriesHorner(1, 3)).toBeCloseTo(2.666667, 5);
  expect(taylorSeriesHorner(1, 20)).toBeCloseTo(2.7182818, 5);
  expect(taylorSeriesHorner(3, 10)).toBeCloseTo(20.10762561278899, 5);
  expect(taylorSeriesHorner(3, 20)).toBeCloseTo(20.0855369, 5);
});
