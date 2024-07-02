// src/components/Counter.test.jsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
// import "@testing-library/jest-dom";
import Counter from "./Counter";

test("renders counter with initial count of 0", () => {
  render(<Counter />);
  const counterElement = screen.getByText(/counter: 0/i);
  expect(counterElement).toBeInTheDocument();
});

test("increments count by 1 when Increment button is clicked", () => {
  render(<Counter />);
  const incrementButton = screen.getByText(/increment/i);
  fireEvent.click(incrementButton);
  const counterElement = screen.getByText(/counter: 1/i);
  expect(counterElement).toBeInTheDocument();
});

test("decrements count by 1 when Decrement button is clicked", () => {
  render(<Counter />);
  const decrementButton = screen.getByText(/decrement/i);
  fireEvent.click(decrementButton);
  const counterElement = screen.getByText(/counter: -1/i);
  expect(counterElement).toBeInTheDocument();
});

test("resets count to 0 when Reset button is clicked", () => {
  render(<Counter />);
  const incrementButton = screen.getByText(/increment/i);
  fireEvent.click(incrementButton);
  fireEvent.click(incrementButton); // Count should be 2 now
  const resetButton = screen.getByText(/reset/i);
  fireEvent.click(resetButton);
  const counterElement = screen.getByText(/counter: 0/i);
  expect(counterElement).toBeInTheDocument();
});
