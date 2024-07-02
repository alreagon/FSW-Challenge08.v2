// src/components/Button.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button";

describe("Button component", () => {
  test("renders button with correct text", () => {
    render(<Button>Click Me</Button>);
    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test("calls onClick prop when clicked", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    const buttonElement = screen.getByText(/click me/i);
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("button is disabled when disabled prop is passed", () => {
    render(<Button disabled>Click Me</Button>);
    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toBeDisabled();
  });

  test("does not call onClick prop when button is disabled", () => {
    const handleClick = jest.fn();
    render(
      <Button onClick={handleClick} disabled>
        Click Me
      </Button>
    );
    const buttonElement = screen.getByText(/click me/i);
    fireEvent.click(buttonElement);
    expect(handleClick).not.toHaveBeenCalled();
  });
  test("matches snapshot", () => {
    const { asFragment } = render(<Button>Click Me</Button>);
    expect(asFragment()).toMatchSnapshot();
  });
});
