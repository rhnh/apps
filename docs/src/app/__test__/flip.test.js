"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var flip_1 = require("../flip");
test("flip", function () {
    expect((0, flip_1.flip)(1234)).toBe(4321);
    expect((0, flip_1.flip)(418223789)).toBe(987322814);
});
//# sourceMappingURL=flip.test.js.map