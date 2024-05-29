"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LehmerRandom_1 = require("../LehmerRandom");
describe('Lehmer random', function () {
    var f = (0, LehmerRandom_1.LehmerRandom)();
    test('test', function () {
        console.log(f);
        expect(f).not.toBeNaN();
    });
});
//# sourceMappingURL=LehmerRandom.test.js.map