"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.harmonicSeries = void 0;
var harmonicSeries = function (value) {
    return Array.from(Array(+value).keys()).reduce(function (a, c) { return a + 1 / (c + 1); }) + 1;
};
exports.harmonicSeries = harmonicSeries;
//# sourceMappingURL=harmonicSeries.js.map