"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LeibnizSeries_1 = require("../LeibnizSeries");
test("Leibniz Series", function () {
    expect((0, LeibnizSeries_1.LeibnizSeries)(3)).toBeCloseTo(3.466667, 5);
    expect((0, LeibnizSeries_1.LeibnizSeries)(100)).toBeCloseTo(3.1315929, 5);
    expect((0, LeibnizSeries_1.LeibnizSeries)(1000)).toBeCloseTo(3.1405927, 5);
    expect((0, LeibnizSeries_1.LeibnizSeries)(100000)).toBeCloseTo(3.1415827, 5);
});
//# sourceMappingURL=leibniz.test.js.map