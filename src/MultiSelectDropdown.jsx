
import React, { Component } from 'react';

class ArithmeticCalculator extends Component {
  constructor() {
    super();
    this.state = {
      operation: '+',
      operand1: 0,
      operand2: 0,
      result: 0,
    };
  }

  handleOperationChange = (event) => {
    this.setState({ operation: event.target.value });
  };

  handleOperandChange = (event) => {
    this.setState({ [event.target.name]: parseFloat(event.target.value) });
  };

  performOperation = () => {
    const { operation, operand1, operand2 } = this.state;
    let result = 0;

    switch (operation) {
      case '+':
        result = operand1 + operand2;
        break;
      case '-':
        result = operand1 - operand2;
        break;
      case '*':
        result = operand1 * operand2;
        break;
      case '/':
        result = operand1 / operand2;
        break;
      default:
        break;
    }

    this.setState({ result });
  };

  render() {
    const { operation, operand1, operand2, result } = this.state;

    return (
      <div>
        <label>
          Select an operation:
          <select value={operation} onChange={this.handleOperationChange}>
            <option value="+">Addition (+)</option>
            <option value="-">Subtraction (-)</option>
            <option value="*">Multiplication (*)</option>
            <option value="/">Division (/)</option>
          </select>
        </label>
        <br />
        <label>
          Operand 1:
          <input
            type="number"
            name="operand1"
            value={operand1}
            onChange={this.handleOperandChange}
          />
        </label>
        <br />
        <label>
          Operand 2:
          <input
            type="number"
            name="operand2"
            value={operand2}
            onChange={this.handleOperandChange}
          />
        </label>
        <br />
        <button onClick={this.performOperation}>Perform Operation</button>
        <br />
        <label>Result: {result}</label>
      </div>
    );
  }
}

export default ArithmeticCalculator;
