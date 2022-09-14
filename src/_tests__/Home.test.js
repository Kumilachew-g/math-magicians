import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Home from '../pages/Home';

it('expect homepage to match working snapshot', () => {
  const homePage = renderer
    .create(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    )
    .toJSON();
  expect(homePage).toMatchSnapshot();
});
