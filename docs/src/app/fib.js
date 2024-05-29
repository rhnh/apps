"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fib = void 0;
var utils_1 = require("./utils");
exports.fib = (0, utils_1.memoize)(function (n) {
    return n <= 1 ? n : (0, exports.fib)(n - 2) + (0, exports.fib)(n - 1);
});
//# sourceMappingURL=fib.js.map