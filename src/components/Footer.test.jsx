// src/components/Footer.test.jsx
import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

test("renders the footer", () => {
  render(<Footer />);
  const footerElement = screen.getByText(/© 2024 My App/i);
  expect(footerElement).toBeInTheDocument();
});
