"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var harmonicSeries_1 = require("../harmonicSeries");
test("Harmonic Series", function () {
    expect((0, harmonicSeries_1.harmonicSeries)(3)).toBeCloseTo(1.833333, 5);
    expect((0, harmonicSeries_1.harmonicSeries)(10)).toBeCloseTo(2.9289683, 5);
    expect((0, harmonicSeries_1.harmonicSeries)(1000)).toBeCloseTo(7.4854709, 5);
    expect((0, harmonicSeries_1.harmonicSeries)(1000000)).toBeCloseTo(14.3927267, 5);
});
//# sourceMappingURL=harmonic.test.js.map