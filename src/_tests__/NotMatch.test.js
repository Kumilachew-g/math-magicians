import React from 'react';
import renderer from 'react-test-renderer';
import NotMatch from '../pages/NotMatch';

it('expect notmatch page to match working snapshot', () => {
  const notMatchPage = renderer.create(<NotMatch />).toJSON();
  expect(notMatchPage).toMatchSnapshot();
});
