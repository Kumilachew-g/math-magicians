import calculate from '../logic/calculate';

describe('calculate function tests ', () => {
  test('AC button with no  input', () => {
    const cal = {
      total: null,
      next: null,
      operation: null,
    };
    const result = calculate(cal, 'AC');
    expect(result.total).toBe(null);
    expect(result.next).toBe(null);
    expect(result.operation).toBe(null);
  });

  test('AC with input', () => {
    const cal = {
      total: 10,
      next: 2,
      operation: '-',
    };
    const result = calculate(cal, 'AC');
    expect(result.total).toBe(null);
    expect(result.next).toBe(null);
    expect(result.operation).toBe(null);
  });
  test('+/- with no input', () => {
    const cal = {
      total: null,
      next: null,
      operation: null,
    };

    const result = calculate(cal, '+/-');
    expect(result).toMatchObject({});
  });
  test('+/- with +ve input', () => {
    const cal = {
      total: 10,
      next: null,
      operation: null,
    };

    const result = calculate(cal, '+/-');
    expect(result.total).toBe('-10');
  });
  test('+/- with  -ve input', () => {
    const cal = {
      total: -10,
      next: null,
      operation: null,
    };

    const result = calculate(cal, '+/-');
    expect(result.total).toBe('10');
  });
});
