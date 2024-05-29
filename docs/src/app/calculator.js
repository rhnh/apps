"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculate = void 0;
/**
 * This function takes any mathematical express, solves it and returns the result in string
 * @param expr - Any Math expression
 * @returns result in string
 */
function calculate(expr) {
    var i = 0;
    var parentheses = /\(([0-9+\-*\/\^ .]+)\)/gm;
    var exponent = /(\d+(?:\.\d+)?) ?\^ ?(\d+(?:\.\d+)?)/gm;
    var regex = /\(?([\-|\+]?\d+(?:\.\d+)?)\)?\s?(\+|\*|\-|\/)?\s?\(?([\-|\+]?\d+(?:\.\d+)?)\)?/;
    if (parentheses.test(expr)) {
        var newExpr = expr.replace(parentheses, function (_, subExpr) {
            return calculate(subExpr);
        });
        return calculate(newExpr);
    }
    if (exponent.test(expr)) {
        var newExpr = expr.replace(exponent, function (_, base, power) {
            return "".concat(Math.pow(Number(base), Number(power)));
        });
        return calculate(newExpr);
    }
    if (regex.test(expr) && isNaN(Number(expr))) {
        var result = expr.trim().replace(regex, function (_, a, sign, b) {
            console.log("expression: ".concat(_, ", b:").concat(b, ",a ").concat(a, ", sign ").concat(sign));
            if (sign === '*') {
                console.log("expression: ".concat(_, ", b:").concat(b, ",a ").concat(a, ", sign ").concat(sign));
                return "".concat(Number(a) * Number(b));
            }
            else if (sign === '/') {
                console.log("expression: ".concat(_, ", b:").concat(b, ",a ").concat(a, ", sign ").concat(sign));
                if (b === '0') {
                    return 'MathError';
                }
                return "".concat(Number(a) / Number(b));
            }
        });
        return calculate(result);
    }
    if (regex.test(expr) && isNaN(Number(expr))) {
        var result = expr.trim().replace(regex, function (_, a, sign, b) {
            console.log("expression: ".concat(_, ", b:").concat(b, ",a ").concat(a, ", sign ").concat(sign));
            if (sign === '+') {
                console.log("expression: ".concat(_, ", b:").concat(b, ",a ").concat(a, ", sign ").concat(sign));
                return "".concat(Number(a) + Number(b));
            }
            else if (sign === '-') {
                console.log("expression: ".concat(_, ", b:").concat(b, ",a ").concat(a, ", sign ").concat(sign));
                return "".concat(Number(a) - Number(b));
            }
        });
        return calculate(result);
    }
    return expr;
}
exports.calculate = calculate;
calculate('2 + 3 /3');
//# sourceMappingURL=calculator.js.map