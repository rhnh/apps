"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var marie_jose_bertin_1 = require("../marie_jose_bertin");
test("MJB", function () {
    expect((0, marie_jose_bertin_1.mjbRecursion)(35, [])).toEqual(expect.arrayContaining([]));
    expect((0, marie_jose_bertin_1.mjbRecursion)(33, [])).toEqual(expect.arrayContaining([54, 189, 1242, 81, 513, 153, 153]));
    expect((0, marie_jose_bertin_1.mjbRecursion)(12, [])).toEqual(expect.arrayContaining([9, 729, 1080, 513, 153, 153]));
    expect((0, marie_jose_bertin_1.mjbRecursion)(15, [])).toEqual(expect.arrayContaining([
        126,
        225,
        141,
        66,
        432,
        99,
        1458,
        702,
        351,
        153,
        153
    ]));
    expect((0, marie_jose_bertin_1.mjbRecursion)(123456789, [])).toEqual(expect.arrayContaining([2025, 141, 66, 432, 99, 1458, 702, 351, 153, 153]));
});
//# sourceMappingURL=marie.test.js.map