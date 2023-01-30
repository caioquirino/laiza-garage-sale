import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/react-testing";
import App from "./App";

test("renders garage", () => {
  render(
    <MockedProvider>
      <App />
    </MockedProvider>
  );

  const garage = screen.getByText(/garage/i);
  expect(garage).toBeInTheDocument();
});
