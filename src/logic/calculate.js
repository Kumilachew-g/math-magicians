import operate from './operate';

function isNumber(item) {
  return !!item.match(/[0-9]+/);
}

export default function calculate(dataObj, buttonName) {
  if (buttonName === 'AC') {
    return {
      totalOutput: null,
      nextOutput: null,
      operation: null,
    };
  }

  if (isNumber(buttonName)) {
    if (buttonName === '0' && dataObj.nextOutput === '0') {
      return {};
    }
    // If there is an operation, update nextOutput
    if (dataObj.operation) {
      if (dataObj.nextOutput) {
        return { ...dataObj, nextOutput: dataObj.nextOutput + buttonName };
      }
      return { ...dataObj, nextOutput: buttonName };
    }
    // If there is no operation, update nextOutput and clear the value
    if (dataObj.nextOutput) {
      return {
        nextOutput: dataObj.nextOutput + buttonName,
        totalOutput: null,
      };
    }
    return {
      nextOutput: buttonName,
      totalOutput: null,
    };
  }

  if (buttonName === '.') {
    if (dataObj.nextOutput) {
      if (dataObj.nextOutput.includes('.')) {
        return { ...dataObj };
      }
      return { ...dataObj, nextOutput: `${dataObj.nextOutput}.` };
    }
    if (dataObj.operation) {
      return { nextOutput: '0.' };
    }
    if (dataObj.totalOutput) {
      if (dataObj.totalOutput.includes('.')) {
        return {};
      }
      return { totalOutput: `${dataObj.totalOutput}.` };
    }
    return { totalOutput: '0.' };
  }

  if (buttonName === '=') {
    if (dataObj.nextOutput && dataObj.operation) {
      return {
        totalOutput: operate(
          dataObj.totalOutput,
          dataObj.nextOutput,
          dataObj.operation,
        ),
        nextOutput: null,
        operation: null,
      };
    }

    return {};
  }

  if (buttonName === '+/-') {
    if (dataObj.nextOutput) {
      return {
        ...dataObj,
        nextOutput: (-1 * parseFloat(dataObj.nextOutput)).toString(),
      };
    }
    if (dataObj.totalOutput) {
      return {
        ...dataObj,
        totalOutput: (-1 * parseFloat(dataObj.totalOutput)).toString(),
      };
    }
    return {};
  }

  if (!dataObj.nextOutput && dataObj.totalOutput && !dataObj.operation) {
    return { ...dataObj, operation: buttonName };
  }

  if (dataObj.operation) {
    if (dataObj.totalOutput && !dataObj.nextOutput) {
      return { ...dataObj, operation: buttonName };
    }

    return {
      totalOutput: operate(
        dataObj.totalOutput,
        dataObj.nextOutput,
        dataObj.operation,
      ),
      nextOutput: null,
      operation: buttonName,
    };
  }

  if (!dataObj.nextOutput) {
    return { operation: buttonName };
  }
  return {
    totalOutput: dataObj.nextOutput,
    nextOutput: null,
    operation: buttonName,
  };
}
