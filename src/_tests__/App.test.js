import App from "../App";
test('expect APP page to match working snapshot', () => {
    const appPage = render(<App />);
    expect(appPage).toMatchSnapshot();
  });