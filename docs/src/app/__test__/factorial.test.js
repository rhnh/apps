"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var memoizedFactorial_1 = require("../memoizedFactorial");
test("Factorial", function () {
    expect((0, memoizedFactorial_1.memoizedFactorial)(0)).toBe(1);
    expect((0, memoizedFactorial_1.memoizedFactorial)(1)).toBe(1);
    expect((0, memoizedFactorial_1.memoizedFactorial)(5)).toBe(120);
    expect((0, memoizedFactorial_1.memoizedFactorial)(3)).toBe(6);
    expect((0, memoizedFactorial_1.memoizedFactorial)(7)).toBe(5040);
    expect((0, memoizedFactorial_1.memoizedFactorial)(12)).toBe(479001600);
});
//# sourceMappingURL=factorial.test.js.map