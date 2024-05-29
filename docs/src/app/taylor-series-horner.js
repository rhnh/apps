"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taylorSeriesHorner = void 0;
exports.taylorSeriesHorner = (function () {
    var s = 1;
    var f = function (x, n) {
        if (n === 0) {
            return s;
        }
        s = 1 + (x / n) * s;
        return f(x, n - 1);
    };
    return f;
})();
//# sourceMappingURL=taylor-series-horner.js.map