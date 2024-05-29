"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var JWallisPI_1 = require("../JWallisPI");
test("John Wallis PI calculating method", function () {
    expect((0, JWallisPI_1.JWallisPI)(100)).toBeCloseTo(3.126079, 5);
    expect((0, JWallisPI_1.JWallisPI)(100000)).toBeCloseTo(3.141577, 5);
});
//# sourceMappingURL=jwallis.test.js.map