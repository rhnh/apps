export function calculate(expr: string): string {
  const parentheses = /\(([0-9+\-*\/\^ .]+)\)/gm
  const exponent = /(\d+(?:\.\d+)?) ?\^ ?(\d+(?:\.\d+)?)/gm
  const dot =
    /\(?([\-|\+]?\d+(?:\.\d+)?)\)?\s?(\*|\/)\s?\(?([\-|\+]?\d+(?:\.\d+)?)\)?/
  const line =
    /\(?([\-|\+]?\d+(?:\.\d+)?)\)?\s?(\+|\-)?\s?\(?([\-|\+]?\d+(?:\.\d+)?)\)?/
  if (parentheses.test(expr)) {
    const newExpr = expr.replace(parentheses, (_, subExpr) => {
      return calculate(subExpr)
    })
    return calculate(newExpr)
  }
  if (exponent.test(expr)) {
    const newExpr = expr.replace(exponent, (_, base, power) => {
      return `${Math.pow(Number(base), Number(power))}`
    })
    return calculate(newExpr)
  }

  if (dot.test(expr) && isNaN(Number(expr))) {
    let result = expr.trim().replace(dot, (_, a, sign, b) => {
      console.log(`expression: ${_}, b:${b},a ${a}, sign ${sign}`)
      if (sign === '*') {
        console.log(`expression: ${_}, b:${b},a ${a}, sign ${sign}`)

        return `${Number(a) * Number(b)}`
      } else if (sign === '/') {
        console.log(`expression: ${_}, b:${b},a ${a}, sign ${sign}`)

        if (b === '0') {
          return 'MathError'
        }
        return `${Number(a) / Number(b)}`
      }
    })
    return calculate(result)
  }
  if (line.test(expr) && isNaN(Number(expr))) {
    let result = expr.trim().replace(line, (_, a, sign, b) => {
      console.log(`expression: ${_}, b:${b},a ${a}, sign ${sign}`)
      if (sign === '+') {
        console.log(`expression: ${_}, b:${b},a ${a}, sign ${sign}`)

        return `${Number(a) + Number(b)}`
      } else if (sign === '-') {
        console.log(`expression: ${_}, b:${b},a ${a}, sign ${sign}`)

        return `${Number(a) - Number(b)}`
      }
    })
    return calculate(result)
  }
  return expr
}
