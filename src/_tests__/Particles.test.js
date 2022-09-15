import Particles from "react-particles-js";
test('expect Particle page to match working snapshot', () => {
    const quotePage = render(<Particles />);
    expect(quotePage).toMatchSnapshot();
  });