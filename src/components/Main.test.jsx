// src/components/Main.test.jsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Main from "./Main";

test("renders the main component and increments count", () => {
  render(<Main />);
  const countElement = screen.getByText(/Current count: 0/i);
  expect(countElement).toBeInTheDocument();

  const buttonElement = screen.getByText(/Increment/i);
  fireEvent.click(buttonElement);

  const updatedCountElement = screen.getByText(/Current count: 1/i);
  expect(updatedCountElement).toBeInTheDocument();
});
