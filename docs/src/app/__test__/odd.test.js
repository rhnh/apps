"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var oddNumberSum_1 = require("../oddNumberSum");
test("Sum of numbers", function () {
    expect((0, oddNumberSum_1.sumOfOddNumbers)(5)).toBe(9);
    expect((0, oddNumberSum_1.sumOfOddNumbers)(100)).toBe(2500);
    expect((0, oddNumberSum_1.sumOfOddNumbers)(3600)).toBe(3240000);
});
//# sourceMappingURL=odd.test.js.map