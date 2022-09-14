import React from 'react';
import renderer from 'react-test-renderer';
import Quote from '../pages/Quote';

it('expect quote to match working snapshot', () => {
  const quote = renderer.create(<Quote />).toJSON();
  expect(quote).toMatchSnapshot();
});
