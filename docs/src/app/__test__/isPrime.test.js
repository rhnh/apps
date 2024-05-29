"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
test("isPrime", function () {
    expect((0, utils_1.isPrime)(6)).toBeFalsy();
    expect((0, utils_1.isPrime)(16)).toBeFalsy();
    expect((0, utils_1.isPrime)(3)).toBeTruthy();
    expect((0, utils_1.isPrime)(2)).toBeTruthy();
    expect((0, utils_1.isPrime)(7)).toBeTruthy();
});
//# sourceMappingURL=isPrime.test.js.map