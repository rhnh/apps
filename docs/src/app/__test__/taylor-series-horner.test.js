"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var taylor_series_horner_1 = require("../taylor-series-horner");
test("Exponential Series", function () {
    expect((0, taylor_series_horner_1.taylorSeriesHorner)(1, 3)).toBeCloseTo(2.666667, 5);
    expect((0, taylor_series_horner_1.taylorSeriesHorner)(1, 20)).toBeCloseTo(2.7182818, 5);
    expect((0, taylor_series_horner_1.taylorSeriesHorner)(3, 10)).toBeCloseTo(20.10762561278899, 5);
    expect((0, taylor_series_horner_1.taylorSeriesHorner)(3, 20)).toBeCloseTo(20.0855369, 5);
});
//# sourceMappingURL=taylor-series-horner.test.js.map