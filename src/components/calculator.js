import React, { useState } from 'react';
import calculate from '../logic/calculate';
import './calculator.css';

const Calculator = () => {
  const [digitObj, setDigitObj] = useState({
    total: 0,
    next: 0,
    operation: null,
  });

  const updateState = (obj) => {
    setDigitObj(obj);
  };

  const calculator = (obj, button) => {
    const newObj = calculate(obj, button);
    updateState(newObj);
  };

  const outputSection = () => {
    const { total, next, operation } = digitObj;

    if (total === null && next === null) {
      return 0;
    }
    if (next !== null && total === null) {
      return next;
    }
    if (total !== null && next !== null) {
      if (operation !== null && operation !== undefined) {
        return `${total} ${operation} ${next}`;
      }
      return total;
    }
    return total;
  };

  const buttons = [
    'AC',
    '+/-',
    '%',
    '÷',
    '7',
    '8',
    '9',
    'x',
    '4',
    '5',
    '6',
    '-',
    '1',
    '2',
    '3',
    '+',
  ].map((btn) => (btn === 'x' || btn === '+' || btn === '-' || btn === '÷' ? (
    <button
      type="button"
      className="buttons operator-signs"
      value={btn}
      key={btn}
      onClick={() => calculator(digitObj, btn)}
    >
      {btn}
    </button>
  ) : (
    <button
      type="button"
      className="buttons"
      value={btn}
      key={btn}
      onClick={() => calculator(digitObj, btn)}
    >
      {btn}
    </button>
  )));

  return (
    <section className="calculator-container">
      <h1>Let&apos;s do some math!</h1>
      <div className="calculator-section">
        <div className="output-section">{outputSection()}</div>
        <div className="digits">{buttons}</div>
        <span className="bottom">
          <button
            type="button"
            className="buttons"
            value="0"
            onClick={() => {
              calculator(digitObj, '0');
            }}
          >
            0
          </button>
          <button
            type="button"
            className="buttons"
            value="."
            onClick={() => {
              calculator(digitObj, '.');
            }}
          >
            .
          </button>
          <button
            type="button"
            className="buttons operator-signs"
            value="="
            onClick={() => {
              calculator(digitObj, '=');
            }}
          >
            =
          </button>
        </span>
      </div>
    </section>
  );
};

export default Calculator;
