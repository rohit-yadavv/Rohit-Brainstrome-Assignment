import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../store/filterSlice";
import mealsReducer from "../store/mealsSlice";
import App from "../App";
import "@testing-library/jest-dom";

const createTestStore = () =>
  configureStore({
    reducer: {
      filter: filterReducer,
      meals: mealsReducer,
    },
  });

describe("App Component", () => {
  beforeEach(() => {
    render(
      <Provider store={createTestStore()}>
        <App />
      </Provider>
    );
  });

  it("renders header with logo", () => {
    expect(screen.getByText("FoodieHub")).toBeInTheDocument();
  });

  it("renders search bar", () => {
    expect(
      screen.getByPlaceholderText("Search for food...")
    ).toBeInTheDocument();
  });

  it("renders filter section", () => {
    expect(screen.getByText("Filter by Area")).toBeInTheDocument();
  });

  it("renders sort button", () => {
    expect(screen.getByText(/Sort/)).toBeInTheDocument();
  });

  it("renders footer with copyright", () => {
    expect(screen.getByText(/© \d{4} FoodieHub/)).toBeInTheDocument();
  });
});
