"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var expo_series_sum_1 = require("../expo_series_sum");
test("Exponential Series", function () {
    expect((0, expo_series_sum_1.exponentialSeries)(1, 3)).toBeCloseTo(2.666667, 5);
    expect((0, expo_series_sum_1.exponentialSeries)(1, 20)).toBeCloseTo(2.7182818, 5);
    expect((0, expo_series_sum_1.exponentialSeries)(3, 10)).toBeCloseTo(20.0796652, 5);
    expect((0, expo_series_sum_1.exponentialSeries)(3, 20)).toBeCloseTo(20.0855369, 5);
});
//# sourceMappingURL=expo.test.js.map