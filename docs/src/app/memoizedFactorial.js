"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.memoizedFactorial = exports.factorial = void 0;
var utils_1 = require("./utils");
var factorial = function (num) {
    return num < 2 ? 1 : +num * (0, exports.factorial)(+num - 1);
};
exports.factorial = factorial;
exports.memoizedFactorial = (0, utils_1.memoize)(exports.factorial);
//# sourceMappingURL=memoizedFactorial.js.map