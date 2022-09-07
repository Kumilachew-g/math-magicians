import React from 'react';
import './calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="calculator-section">
        {/* <h1>Math Magician</h1> */}
        <div className="output-section">0</div>
        <div className="digits">
          <button type="button" className="buttons">
            AC
          </button>
          <button type="button" className="buttons">
            +/-
          </button>
          <button type="button" className="buttons">
            %
          </button>
          <button type="button" className="buttons operator-signs">
            +
          </button>
          <button type="button" className="buttons">
            7
          </button>
          <button type="button" className="buttons">
            8
          </button>
          <button type="button" className="buttons">
            9
          </button>
          <button type="button" className="buttons operator-signs">
            x
          </button>
          <button type="button" className="buttons">
            4
          </button>
          <button type="button" className="buttons">
            5
          </button>
          <button type="button" className="buttons">
            6
          </button>
          <button type="button" className="buttons operator-signs">
            -
          </button>
          <button type="button" className="buttons">
            1
          </button>
          <button type="button" className="buttons">
            2
          </button>
          <button type="button" className="buttons">
            3
          </button>
          <button type="button" className="buttons operator-signs">
            +
          </button>
        </div>
        <span className="bottom">
          <button type="button" className="buttons">
            0
          </button>
          <button type="button" className="buttons">
            .
          </button>
          <button type="button" className="buttons operator-signs">
            =
          </button>
        </span>
      </section>
    );
  }
}

export default Calculator;
