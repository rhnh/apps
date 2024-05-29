import './style.css'
import * as funcs from './app/utils'
import * as render from './app/render'
import { JWallisPI } from './app/JWallisPI'
import { harmonicSeries } from './app/harmonicSeries'
import { sumOfOddNumbers } from './app/oddNumberSum'
import { exponentialSeries } from './app/expo_series_sum'
import { LeibnizSeries } from './app/LeibnizSeries'
import { numberOfHandShake } from './app/numberOfHandShake'
import { fib } from './app/fib'
import { mjb } from './app/marie_jose_bertin'
import { flip } from './app/flip'
import { taylorSeriesHorner } from './app/taylor-series-horner'
import { isLuhnNumber } from './app/Luhn-CreditCard'
import { primeFactors } from './app/primeFactors'
import { calculate } from './app/calculator'
//#################################################
//Handshake
const flipBtn = render.createButton({
  id: 'flip-number',
  txt: 'Flip The Number',
  filename: 'flip',
  desc: 'give a number x, and get its reversed.',
})
flipBtn.addEventListener('click', () => {
  const desc = 'Give a number to flip it. Example 123 would be 321!'
  const numberOfInputBox = 1
  render.displayModal({ callBack: flip, desc, numberOfInputBox })
})

//#################################################
//Handshake
const handshakeBtn = render.createButton({
  id: 'handshake',
  txt: 'HandShake',
  filename: 'numberOfHandShake',
  desc: 'How many handshake will be there in a party with n number of people.',
})
handshakeBtn.addEventListener('click', () => {
  const desc =
    'In a party n person shakes with each others, how many hand shakes were made in total'
  const numberOfInputBox = 1
  render.displayModal({ callBack: numberOfHandShake, desc, numberOfInputBox })
})

//#################################################
//Satz 153
const mjbBtn = render.createButton({
  id: '153',
  txt: '153',
  filename: 'marie_jose_bertin',
  desc: 'The given number X must be divisible by 3. <br/> Take sum cube of every digit. And it will stop with the number 153! ',
})
mjbBtn.addEventListener('click', () => {
  const desc = ` The given number has to be dividable by 3, the following number would be the sum of \n its digits \n example for 33: \n   54,189,1242,81,513,153,153 `
  const numberOfInputBox = 1
  render.displayModal({ callBack: mjb, desc, numberOfInputBox })
})

//#################################################
//Harmonic Series
const harmonicSeriesBtn = render.createButton({
  id: 'harmonic-series',
  txt: 'Harmonic Series Sum',
  filename: 'harmonicSeries',
  desc: 'Sum of Harmonic Series: 1/1+1/2+1/3+1/4+...',
})
harmonicSeriesBtn.addEventListener('click', () => {
  const desc = '1 + 1/2+ 1/3 + 1/4'
  const numberOfInputBox = 1
  render.displayModal({ callBack: harmonicSeries, desc, numberOfInputBox })
})

//#################################################
//Leibniz Series
var desc = 'Leibniz Series: π/4 = 1/1 - 1/3 + 1/5 - 1 /7 + 1/9 ± ...'
const leibnizSeriesBtn = render.createButton({
  id: 'leibniz-series',
  txt: "Leibniz Series's Sum",
  filename: 'LeibnizSeries',
  desc,
})
leibnizSeriesBtn.addEventListener('click', () => {
  const numberOfInputBox = 1
  render.displayModal({ callBack: LeibnizSeries, desc, numberOfInputBox })
})

//#################################################
//Sum of Odd Series
var desc = 'Sums odd numbers'
const sumOfOddsBtn = render.createButton({
  id: 'sum-of-odds',
  txt: 'Sum Odd Numbers',
  filename: 'oddNumberSum',
  desc,
})
sumOfOddsBtn.addEventListener('click', () => {
  const numberOfInputBox = 1
  render.displayModal({ callBack: sumOfOddNumbers, desc, numberOfInputBox })
})

//#################################################
//Is Prime
const isPrime = render.createButton({
  id: 'is-prime',
  txt: 'IsPrime',
  filename: 'utils',
  desc: 'Is the given number a prime number ?',
})
isPrime.addEventListener('click', () => {
  const desc = 'Is the given number a prime number ?'
  const numberOfInputBox = 1
  render.displayModal({ callBack: funcs.isPrime, desc, numberOfInputBox })
})

//#################################################
//Prime Factor
const primeFactor = render.createButton({
  id: 'prime-factor',
  txt: 'Prime factors',
  filename: 'primeFactors',
  desc: 'Shows prime factor of a number',
})
primeFactor.addEventListener('click', () => {
  const desc = 'Shows prime factor of a number'
  const numberOfInputBox = 1
  render.displayModal({ callBack: primeFactors, desc, numberOfInputBox })
})

//#################################################
//exponential Series
const exponential = render.createButton({
  id: 'exponential',
  txt: "Exponential series's sum",
  filename: 'expo_series_sum',
  desc: ' e^x = 1 + x + (x^2)/2! + (x^3)/3! +( x^4)/4! + (x^5)/5! +... + (x^n)/n!',
})
exponential.addEventListener('click', () => {
  const desc =
    ' e^x = 1 + x + (x^2)/2! + (x^3)/3! +( x^4)/4! + (x^5)/5! +... + (x^n)/n!'
  const numberOfInputBox = 2
  render.displayModal({ callBack: exponentialSeries, desc, numberOfInputBox })
})

//#################################################
//John Wallis
const JWallis = render.createButton({
  id: 'john-wallis',
  txt: 'PI:John Wallis Method',
  filename: 'JWallisPI',
  desc: 'pi/2 = 2/1 * 2/3 * 4/3 * 4/5 * 6/5 * 8/7* 8/9 +, .. ',
})
JWallis.addEventListener('click', () => {
  const desc = 'pi/2 = 2/1 * 2/3 * 4/3 * 4/5 * 6/5 * 8/7* 8/9 +, .. '
  const numberOfInputBox = 1
  render.displayModal({
    callBack: JWallisPI,
    desc,
    numberOfInputBox,
  })
})

//#################################################
//John Wallis
const memoizedFibBtn = render.createButton({
  id: 'memoized-fib',
  txt: 'Fibonacci',
  filename: 'fib',
  desc: 'Fibonacci, memoized',
})
memoizedFibBtn.addEventListener('click', () => {
  const desc = '0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...'
  const numberOfInputBox = 1
  render.displayModal({
    callBack: fib,
    desc,
    numberOfInputBox,
  })
})
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
const taylor = render.createButton({
  id: 'exponential-taylor',
  txt: 'Taylor Exponential series horner rules',
  filename: 'taylor-series-horner',
  desc: ' e^x = 1 + x + (x^2)/2! + (x^3)/3! +( x^4)/4! + (x^5)/5! +... + (x^n)/n!',
})
taylor.addEventListener('click', () => {
  const desc =
    ' e^x = 1 + x + (x^2)/2! + (x^3)/3! +( x^4)/4! + (x^5)/5! +... + (x^n)/n!'
  const numberOfInputBox = 2
  render.displayModal({
    callBack: taylorSeriesHorner,
    desc,
    numberOfInputBox,
  })
})
/**
 * ##########################################
 * Luhn Algorithm
 */
const luhn = render.createButton({
  id: 'luhn',
  txt: 'Luhn algorithm',
  filename: 'Luhn-CreditCard',
  desc: 'Checking Credit card number for validation using Luhn Algorithm',
})

luhn.addEventListener('click', () => {
  const desc =
    'Luhn Algorithm: <br/> <t/> Multiply every 2nd digit with 2, starting for 2nd right hand position. <br/> If the result is than 9. <br/> Subtract 9. <br/> Sum all the digits and if % of the sum is 0. It is a valid Credit Card number'
  const numberOfInputBox = 1
  render.displayModal({
    callBack: isLuhnNumber,
    desc,
    numberOfInputBox,
    type: 'INPUT',
    inputType: 'number',
  })
})

/**
 * calculator
 */

const displayCalculator = render.createButton({
  id: 'calculator-regex',
  txt: 'calculator with regex',
  filename: 'Luhn-CreditCard',
  desc: 'calculator numbers',
})

displayCalculator.addEventListener('click', () => {
  const desc = 'calculator numbers'
  const numberOfInputBox = 1
  render.displayModal({
    callBack: calculate,
    desc,
    numberOfInputBox,
    type: 'INPUT',
    inputType: 'string',
  })
})
