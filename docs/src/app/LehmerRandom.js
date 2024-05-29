"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LehmerRandom = void 0;
var LehmerRandom = function () {
    var t = Date.now();
    var m = 2147483647;
    var a = 7 * 7 * 7 * 7;
    return a * t % m;
};
exports.LehmerRandom = LehmerRandom;
//# sourceMappingURL=LehmerRandom.js.map