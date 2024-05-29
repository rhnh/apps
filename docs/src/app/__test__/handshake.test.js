"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var numberOfHandShake_1 = require("../numberOfHandShake");
test("Handshake", function () {
    expect((0, numberOfHandShake_1.numberOfHandShake)(10)).toBe(45);
    expect((0, numberOfHandShake_1.numberOfHandShake)(100)).toBe(4950);
    expect((0, numberOfHandShake_1.numberOfHandShake)(500)).toBe(124750);
});
//# sourceMappingURL=handshake.test.js.map