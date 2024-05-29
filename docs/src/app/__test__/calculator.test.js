"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var calculator_1 = require("../calculator");
// describe('Addition simple', () => {
//   test("add and subtract simple expressions", () => {
//     expect(calculate("2 +2")).toBe("4")
//   })
//   test("add and subtract simple expressions with space", () => {
//     expect(calculate("2 + +2 ")).toBe("4")
//   })
// })
describe('calculate complicated equation', function () {
    // test("addition complicated expressions", () => {
    //   expect(calculate("2 +2 + 3")).toBe("7")
    // })
    // test("subtract complicated expressions", () => {
    //   expect(calculate("2 +2 - 3")).toBe("1")
    // })
    // test("multiplication complicated expressions", () => {
    //   expect(calculate("2 * 2 - 3")).toBe("1")
    // })
    // test("division complicated expressions", () => {
    //   expect(calculate("2 * 2 * 3")).toBe("12")
    // })
    // test("division complicated expressions", () => {
    //   expect(calculate("2 * 2 / 3")).toBe("1.3333333333333333")
    // })
    // test("division complicated expressions", () => {
    //   expect(calculate("2 +(5/3)")).toBe("3.666666666666667")
    // })
    // test("power", () => {
    //   expect(calculate("2^2")).toBe("4")
    // })
    // test("power and add", () => {
    //   expect(calculate("2^2 + 3")).toBe("7")
    // })
    // test("power and add and more", () => {
    //   expect(calculate("2^2 + 3 -3")).toBe("4")
    // })
    test("PMEDA", function () {
        expect((0, calculator_1.calculate)("2 + 3 /3")).toBe("3");
    });
});
// describe('subtract', () => {
//   test("add and subtract simple expressions", () => {
//     expect(calculate("2 - 2 ")).toBe("0")
//   })
//   test("add and subtract simple expressions", () => {
//     expect(calculate("2 -2 ")).toBe("0")
//   })
//   test("add and subtract simple expressions", () => {
//     expect(calculate("-2 -2 ")).toBe("-4")
//   })
//   test("add and subtract simple expressions with space", () => {
//     expect(calculate("2 - 2 ")).toBe("0")
//   })
//   test("add and subtract simple expressions with space", () => {
//     expect(calculate("2 - 5 ")).toBe("-3")
//   })
//   test("add and subtract simple expressions with space", () => {
//     expect(calculate("-2 - 5 ")).toBe("-7")
//   })
//   test("add and subtract simple expressions with space", () => {
//     expect(calculate("-2 - 5 ")).toBe("-7")
//   })
//   test("add and subtract simple expressions with space", () => {
//     expect(calculate("-2 - 5 ")).toBe("-7")
//   })
//   test("add and subtract simple expressions with space", () => {
//     expect(calculate("-2 - (-5) ")).toBe("3")
//   })
// })
// describe("multiplication", () => {
//   test("multiplication of simple numbers", () => {
//     expect(calculate("3 * 3")).toBe("9")
//   })
//   test("multiplication of simple numbers", () => {
//     expect(calculate("3 * -3")).toBe("-9")
//   })
//   test("multiplication of simple numbers", () => {
//     expect(calculate("3 * (-3)")).toBe("-9")
//   })
//   test("multiplication of simple numbers", () => {
//     expect(calculate("-3 * (-3)")).toBe("9")
//   })
// })
// //division
// describe("division", () => {
//   test("division of simple numbers", () => {
//     expect(calculate("3 / 3")).toBe("1")
//   })
//   test("division of simple numbers", () => {
//     expect(calculate("0 * -3")).toBe("0")
//   })
//   test("division by zero", () => {
//     expect(calculate("3 / (0)")).toBe("MathError")
//   })
//   test("division of simple numbers", () => {
//     expect(calculate("-3 / (-3)")).toBe("1")
//   })
//   test("division of simple numbers", () => {
//     expect(calculate("+3 / (-3)")).toBe("-1")
//   })
// })
//# sourceMappingURL=calculator.test.js.map