import React, { useState } from 'react';
import calculate from '../logic/calculate';
import './calculator.css';

const Calculator = () => {
  const [digitObj, setDigitObj] = useState({
    totalOutput: 0,
    nextOutput: 0,
    operation: null,
  });

  const updateState = (dataobj) => {
    setDigitObj(dataobj);
  };

  const calculator = (dataobj, button) => {
    const newObj = calculate(dataobj, button);
    updateState(newObj);
  };

  const outputSection = () => {
    const { totalOutput, nextOutput, operation } = digitObj;

    if (totalOutput === null && nextOutput === null) {
      return 0;
    }
    if (nextOutput !== null && totalOutput === null) {
      return nextOutput;
    }
    if (totalOutput !== null && nextOutput !== null) {
      if (operation !== null && operation !== undefined) {
        return `${totalOutput} ${operation} ${nextOutput}`;
      }
      return totalOutput;
    }
    return totalOutput;
  };

  const btns = [
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
    <section className="calculator-section">
      <div className="output-section">{outputSection()}</div>
      <div className="digits">{btns}</div>
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
    </section>
  );
};

export default Calculator;
