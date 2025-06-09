import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Contact us page test case", () => {
  it("contact page", () => {
    render(<Contact />);
    const heading = screen.getByText("submit");
    expect(heading).toBeInTheDocument();
  });

  test("Should load button page", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("Should load input name page", () => {
    render(<Contact />);
    const button = screen.getByPlaceholderText("Name");
    expect(button).toBeInTheDocument();
  });

  test("should be load 2 input boxes on the contact component", () => {
    render(<Contact />);

    const input = screen.getAllByRole("textbox");
    expect(input.length).toBe(2 );
  });
});
