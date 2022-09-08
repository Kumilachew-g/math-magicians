import Big from 'big.js';

export default function operate(numberOne, numberTwo, operation) {
  const numOne = Big(numberOne);
  const numTwo = Big(numberTwo);
  if (operation === '+') {
    return numOne.plus(numTwo).toString();
  }
  if (operation === '-') {
    return numOne.minus(numTwo).toString();
  }
  if (operation === 'x') {
    return numOne.times(numTwo).toString();
  }
  if (operation === '÷') {
    try {
      return numOne.div(numTwo).toString();
    } catch (err) {
      return "Can't Divide By 0.";
    }
  }
  if (operation === '%') {
    return numOne.mod(numTwo).toString();
  }
  throw Error(`Unknown Operation '${operation}'`);
}
