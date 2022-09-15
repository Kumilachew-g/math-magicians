import Particles from 'react-particles-js';
import { render } from '@testing-library/react';

test('expect Particle page to match working snapshot', () => {
  const particlePage = render(<Particles />);
  expect(particlePage).toMatchSnapshot();
});
