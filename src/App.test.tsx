import { render, screen } from "@testing-library/react";
import { expect, test } from 'vitest'
import App from "./App";

test("renders garage", () => {
  render(
      <App />
  );

  const garage = screen.getByText(/garage/i);
  expect(garage).toBeInTheDocument();
});
