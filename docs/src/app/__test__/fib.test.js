"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fib_1 = require("../fib");
describe("Fib", function () {
    test("valid", function () {
        var res = (0, fib_1.fib)(7);
        expect(res).toBe(13);
    });
    test("invalid", function () {
        var res = (0, fib_1.fib)(7);
        expect(res).not.toBe(27);
    });
});
//# sourceMappingURL=fib.test.js.map