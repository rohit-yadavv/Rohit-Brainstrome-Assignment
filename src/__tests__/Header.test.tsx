import * as React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../components/Header";

// Mock lucide-react icons
jest.mock("lucide-react", () => ({
  Search: () => null,
  Menu: () => null,
}));

// Simple mock for the ThemeToggle component
jest.mock("../components/ui/theme-toggle", () => ({
  ThemeToggle: () => null,
}));

// Simple mock for the Button component
jest.mock("../components/ui/button", () => ({
  Button: ({ children }: { children: React.ReactNode }) => (
    <button>{children}</button>
  ),
}));

describe("Header Component", () => {
  it("renders the header title", () => {
    render(<Header />);
    expect(screen.getByText("Food Menu")).toBeInTheDocument();
  });

  it("renders the search input", () => {
    render(<Header />);
    expect(
      screen.getByPlaceholderText("Search for food...")
    ).toBeInTheDocument();
  });

  it("renders the cart button", () => {
    render(<Header />);
    expect(screen.getByText("Cart")).toBeInTheDocument();
  });
});
