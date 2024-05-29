"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./style.css");
var funcs = __importStar(require("./app/utils"));
var render = __importStar(require("./app/render"));
var JWallisPI_1 = require("./app/JWallisPI");
var harmonicSeries_1 = require("./app/harmonicSeries");
var oddNumberSum_1 = require("./app/oddNumberSum");
var expo_series_sum_1 = require("./app/expo_series_sum");
var LeibnizSeries_1 = require("./app/LeibnizSeries");
var numberOfHandShake_1 = require("./app/numberOfHandShake");
var fib_1 = require("./app/fib");
var marie_jose_bertin_1 = require("./app/marie_jose_bertin");
var flip_1 = require("./app/flip");
var taylor_series_horner_1 = require("./app/taylor-series-horner");
var Luhn_CreditCard_1 = require("./app/Luhn-CreditCard");
var primeFactors_1 = require("./app/primeFactors");
var calculator_1 = require("./app/calculator");
//#################################################
//Handshake
var flipBtn = render.createButton({
    id: 'flip-number',
    txt: 'Flip The Number',
    filename: 'flip',
    desc: 'give a number x, and get its reversed.',
});
flipBtn.addEventListener('click', function () {
    var desc = 'Give a number to flip it. Example 123 would be 321!';
    var numberOfInputBox = 1;
    render.displayModal({ callBack: flip_1.flip, desc: desc, numberOfInputBox: numberOfInputBox });
});
//#################################################
//Handshake
var handshakeBtn = render.createButton({
    id: 'handshake',
    txt: 'HandShake',
    filename: 'numberOfHandShake',
    desc: 'How many handshake will be there in a party with n number of people.',
});
handshakeBtn.addEventListener('click', function () {
    var desc = 'In a party n person shakes with each others, how many hand shakes were made in total';
    var numberOfInputBox = 1;
    render.displayModal({ callBack: numberOfHandShake_1.numberOfHandShake, desc: desc, numberOfInputBox: numberOfInputBox });
});
//#################################################
//Satz 153
var mjbBtn = render.createButton({
    id: '153',
    txt: '153',
    filename: 'marie_jose_bertin',
    desc: 'The given number X must be divisible by 3. <br/> Take sum cube of every digit. And it will stop with the number 153! ',
});
mjbBtn.addEventListener('click', function () {
    var desc = " The given number has to be dividable by 3, the following number would be the sum of \n its digits \n example for 33: \n   54,189,1242,81,513,153,153 ";
    var numberOfInputBox = 1;
    render.displayModal({ callBack: marie_jose_bertin_1.mjb, desc: desc, numberOfInputBox: numberOfInputBox });
});
//#################################################
//Harmonic Series
var harmonicSeriesBtn = render.createButton({
    id: 'harmonic-series',
    txt: 'Harmonic Series Sum',
    filename: 'harmonicSeries',
    desc: 'Sum of Harmonic Series: 1/1+1/2+1/3+1/4+...',
});
harmonicSeriesBtn.addEventListener('click', function () {
    var desc = '1 + 1/2+ 1/3 + 1/4';
    var numberOfInputBox = 1;
    render.displayModal({ callBack: harmonicSeries_1.harmonicSeries, desc: desc, numberOfInputBox: numberOfInputBox });
});
//#################################################
//Leibniz Series
var desc = 'Leibniz Series: π/4 = 1/1 - 1/3 + 1/5 - 1 /7 + 1/9 ± ...';
var leibnizSeriesBtn = render.createButton({
    id: 'leibniz-series',
    txt: "Leibniz Series's Sum",
    filename: 'LeibnizSeries',
    desc: desc,
});
leibnizSeriesBtn.addEventListener('click', function () {
    var numberOfInputBox = 1;
    render.displayModal({ callBack: LeibnizSeries_1.LeibnizSeries, desc: desc, numberOfInputBox: numberOfInputBox });
});
//#################################################
//Sum of Odd Series
var desc = 'Sums odd numbers';
var sumOfOddsBtn = render.createButton({
    id: 'sum-of-odds',
    txt: 'Sum Odd Numbers',
    filename: 'oddNumberSum',
    desc: desc,
});
sumOfOddsBtn.addEventListener('click', function () {
    var numberOfInputBox = 1;
    render.displayModal({ callBack: oddNumberSum_1.sumOfOddNumbers, desc: desc, numberOfInputBox: numberOfInputBox });
});
//#################################################
//Is Prime
var isPrime = render.createButton({
    id: 'is-prime',
    txt: 'IsPrime',
    filename: 'utils',
    desc: 'Is the given number a prime number ?',
});
isPrime.addEventListener('click', function () {
    var desc = 'Is the given number a prime number ?';
    var numberOfInputBox = 1;
    render.displayModal({ callBack: funcs.isPrime, desc: desc, numberOfInputBox: numberOfInputBox });
});
//#################################################
//Prime Factor
var primeFactor = render.createButton({
    id: 'prime-factor',
    txt: 'Prime factors',
    filename: 'primeFactors',
    desc: 'Shows prime factor of a number',
});
primeFactor.addEventListener('click', function () {
    var desc = 'Shows prime factor of a number';
    var numberOfInputBox = 1;
    render.displayModal({ callBack: primeFactors_1.primeFactors, desc: desc, numberOfInputBox: numberOfInputBox });
});
//#################################################
//exponential Series
var exponential = render.createButton({
    id: 'exponential',
    txt: "Exponential series's sum",
    filename: 'expo_series_sum',
    desc: ' e^x = 1 + x + (x^2)/2! + (x^3)/3! +( x^4)/4! + (x^5)/5! +... + (x^n)/n!',
});
exponential.addEventListener('click', function () {
    var desc = ' e^x = 1 + x + (x^2)/2! + (x^3)/3! +( x^4)/4! + (x^5)/5! +... + (x^n)/n!';
    var numberOfInputBox = 2;
    render.displayModal({ callBack: expo_series_sum_1.exponentialSeries, desc: desc, numberOfInputBox: numberOfInputBox });
});
//#################################################
//John Wallis
var JWallis = render.createButton({
    id: 'john-wallis',
    txt: 'PI:John Wallis Method',
    filename: 'JWallisPI',
    desc: 'pi/2 = 2/1 * 2/3 * 4/3 * 4/5 * 6/5 * 8/7* 8/9 +, .. ',
});
JWallis.addEventListener('click', function () {
    var desc = 'pi/2 = 2/1 * 2/3 * 4/3 * 4/5 * 6/5 * 8/7* 8/9 +, .. ';
    var numberOfInputBox = 1;
    render.displayModal({
        callBack: JWallisPI_1.JWallisPI,
        desc: desc,
        numberOfInputBox: numberOfInputBox,
    });
});
//#################################################
//John Wallis
var memoizedFibBtn = render.createButton({
    id: 'memoized-fib',
    txt: 'Fibonacci',
    filename: 'fib',
    desc: 'Fibonacci, memoized',
});
memoizedFibBtn.addEventListener('click', function () {
    var desc = '0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...';
    var numberOfInputBox = 1;
    render.displayModal({
        callBack: fib_1.fib,
        desc: desc,
        numberOfInputBox: numberOfInputBox,
    });
});
//John Wallis
// const memoizedFibBtn = render.createButton("memoized-fib", "Fibonacci");
// memoizedFibBtn.addEventListener("click", () => {
//   const desc = "0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...";
//   const numberOfInputBox = 1;
//   render.displayModal(fib, desc, numberOfInputBox);
// });
//#################################################
//exponential Series
// const taylor = render.createButton(
//   "exponential-taylor",
//   "Taylor Exponential series horner rules"
// );
// taylor.addEventListener("click", () => {
//   const desc =
//     " e^x = 1 + x + (x^2)/2! + (x^3)/3! +( x^4)/4! + (x^5)/5! +... + (x^n)/n!";
//   const numberOfInputBox = 2;
//   render.displayModal(taylorSeriesHorner, desc, numberOfInputBox);
// });
//exponential Series
var taylor = render.createButton({
    id: 'exponential-taylor',
    txt: 'Taylor Exponential series horner rules',
    filename: 'taylor-series-horner',
    desc: ' e^x = 1 + x + (x^2)/2! + (x^3)/3! +( x^4)/4! + (x^5)/5! +... + (x^n)/n!',
});
taylor.addEventListener('click', function () {
    var desc = ' e^x = 1 + x + (x^2)/2! + (x^3)/3! +( x^4)/4! + (x^5)/5! +... + (x^n)/n!';
    var numberOfInputBox = 2;
    render.displayModal({
        callBack: taylor_series_horner_1.taylorSeriesHorner,
        desc: desc,
        numberOfInputBox: numberOfInputBox,
    });
});
/**
 * ##########################################
 * Luhn Algorithm
 */
var luhn = render.createButton({
    id: 'luhn',
    txt: 'Luhn algorithm',
    filename: 'Luhn-CreditCard',
    desc: 'Checking Credit card number for validation using Luhn Algorithm',
});
luhn.addEventListener('click', function () {
    var desc = 'Luhn Algorithm: <br/> <t/> Multiply every 2nd digit with 2, starting for 2nd right hand position. <br/> If the result is than 9. <br/> Subtract 9. <br/> Sum all the digits and if % of the sum is 0. It is a valid Credit Card number';
    var numberOfInputBox = 1;
    render.displayModal({
        callBack: Luhn_CreditCard_1.isLuhnNumber,
        desc: desc,
        numberOfInputBox: numberOfInputBox,
        type: 'INPUT',
        inputType: 'number',
    });
});
/**
 * calculator
 */
var displayCalculator = render.createButton({
    id: 'calculator-regex',
    txt: 'calculator with regex',
    filename: 'Luhn-CreditCard',
    desc: 'calculator numbers',
});
displayCalculator.addEventListener('click', function () {
    var desc = 'calculator numbers';
    var numberOfInputBox = 1;
    render.displayModal({
        callBack: calculator_1.calculate,
        desc: desc,
        numberOfInputBox: numberOfInputBox,
        type: 'INPUT',
        inputType: 'string',
    });
});
//# sourceMappingURL=index.js.map