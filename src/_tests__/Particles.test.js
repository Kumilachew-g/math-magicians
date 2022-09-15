import Particles from "react-particles-js";
test('expect Particle page to match working snapshot', () => {
    const particlePage = render(<Particles />);
    expect(particlePage).toMatchSnapshot();
  });