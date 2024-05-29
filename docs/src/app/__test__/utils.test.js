"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
describe('utils', function () {
    test("numberToDigits", function () {
        var rr = (0, utils_1.numberToDigits)(1234).reverse();
        var res = rr;
        expect((0, utils_1.numberToDigits)(1234)).toEqual([1, 2, 3, 4]);
        expect(res).toEqual([4, 3, 2, 1]);
    });
});
//# sourceMappingURL=utils.test.js.map