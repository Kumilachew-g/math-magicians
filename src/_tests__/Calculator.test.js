import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import Calculator from '../components/Calculator';

describe('Calculator page component', () => {
  it('should return the sum of two number form UI', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('x'));
    fireEvent.click(screen.getByText('7'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByText('21')).toBeTruthy();
  });
});
