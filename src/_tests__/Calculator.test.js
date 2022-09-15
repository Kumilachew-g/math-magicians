import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
/* eslint-disable */
import Calculator from '../components/Calculator';

describe('Calculator', () => {
  it('renders page correctly', () => {
    const tree = renderer.create(<Calculator />);

    expect(tree).toMatchSnapshot();
  });

  it('displays result of 8.2 ÷ 2 = 4.1', () => {
    const { getByText } = render(<Calculator />);

    fireEvent.click(getByText('8'));
    fireEvent.click(getByText('.'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('÷'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('='));

    expect(getByText('4.1')).toBeInTheDocument();
  });
});
