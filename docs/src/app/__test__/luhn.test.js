"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Luhn_CreditCard_1 = require("../Luhn-CreditCard");
test("Luhn algorithm", function () {
    var correctNumbers = [
        378282246310005, 371449635398431, 378734493671000, 5610591081018250,
        30569309025904, 38520000023237, 6011111111111117, 6011000990139424,
        3530111333300000, 3566002020360505, 5555555555554444, 5105105105105100,
        4111111111111111, 4012888888881881, 4222222222222, 5019717010103742,
        6331101999990016,
    ];
    correctNumbers.map(function (n) {
        expect((0, Luhn_CreditCard_1.isLuhnNumber)(n)).toBe(true);
    });
});
//# sourceMappingURL=luhn.test.js.map