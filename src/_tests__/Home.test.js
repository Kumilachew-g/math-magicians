import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../pages/Home';

it('expect homepage to match working snapshot', () => {
  const homePage = renderer.create(<Home />).toJSON();
  expect(homePage).toMatchSnapshot();
});
