import React from 'react';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';
import './calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.calculator = this.calculator.bind(this);
    this.outputSection = this.outputSection.bind(this);
  }

  calculator = (obj, button) => {
    const { updateState } = this.props;
    const newObj = calculate(obj, button);
    updateState(newObj);
  };

  outputSection = () => {
    const { digitObj } = this.props;
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

  render() {
    const { digitObj } = this.props;
    return (
      <section className="calculator-section">
        <div className="output-section">{this.outputSection()}</div>
        <div className="digits">
          <button
            type="button"
            className="buttons"
            value="AC"
            onClick={() => {
              this.calculator(digitObj, 'AC');
            }}
          >
            AC
          </button>
          <button
            type="button"
            className="buttons"
            value="+/-"
            onClick={() => {
              this.calculator(digitObj, '+/-');
            }}
          >
            +/-
          </button>
          <button
            type="button"
            className="buttons"
            value="%"
            onClick={() => {
              this.calculator(digitObj, '%');
            }}
          >
            %
          </button>
          <button
            type="button"
            className="buttons operator-signs"
            value="÷"
            onClick={() => {
              this.calculator(digitObj, '÷');
            }}
          >
            ÷
          </button>
          <button
            type="button"
            className="buttons"
            value="7"
            onClick={() => {
              this.calculator(digitObj, '7');
            }}
          >
            7
          </button>
          <button
            type="button"
            className="buttons"
            value="8"
            onClick={() => {
              this.calculator(digitObj, '8');
            }}
          >
            8
          </button>
          <button
            type="button"
            className="buttons"
            value="9"
            onClick={() => {
              this.calculator(digitObj, '9');
            }}
          >
            9
          </button>
          <button
            type="button"
            className="buttons operator-signs"
            value="x"
            onClick={() => {
              this.calculator(digitObj, 'x');
            }}
          >
            x
          </button>
          <button
            type="button"
            className="buttons"
            value="4"
            onClick={() => {
              this.calculator(digitObj, '4');
            }}
          >
            4
          </button>
          <button
            type="button"
            className="buttons"
            value="5"
            onClick={() => {
              this.calculator(digitObj, '5');
            }}
          >
            5
          </button>
          <button
            type="button"
            className="buttons"
            value="6"
            onClick={() => {
              this.calculator(digitObj, '6');
            }}
          >
            6
          </button>
          <button
            type="button"
            className="buttons operator-signs"
            value="-"
            onClick={() => {
              this.calculator(digitObj, '-');
            }}
          >
            -
          </button>
          <button
            type="button"
            className="buttons"
            value="1"
            onClick={() => {
              this.calculator(digitObj, '1');
            }}
          >
            1
          </button>
          <button
            type="button"
            className="buttons"
            value="2"
            onClick={() => {
              this.calculator(digitObj, '2');
            }}
          >
            2
          </button>
          <button
            type="button"
            className="buttons"
            value="3"
            onClick={() => {
              this.calculator(digitObj, '3');
            }}
          >
            3
          </button>
          <button
            type="button"
            className="buttons operator-signs"
            value="+"
            onClick={() => {
              this.calculator(digitObj, '+');
            }}
          >
            +
          </button>
        </div>
        <span className="bottom">
          <button
            type="button"
            className="buttons"
            value="0"
            onClick={() => {
              this.calculator(digitObj, '0');
            }}
          >
            0
          </button>
          <button
            type="button"
            className="buttons"
            value="."
            onClick={() => {
              this.calculator(digitObj, '.');
            }}
          >
            .
          </button>
          <button
            type="button"
            className="buttons operator-signs"
            value="="
            onClick={() => {
              this.calculator(digitObj, '=');
            }}
          >
            =
          </button>
        </span>
      </section>
    );
  }
}

Calculator.propTypes = {
  updateState: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  digitObj: PropTypes.object.isRequired,
};

export default Calculator;
