import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "../App";

describe("App", () => {
  it("updates the textarea value when typing", () => {
    const { asFragment } = render(<App />);
    const nativeTextarea = screen.getByRole("textbox");
    expect(nativeTextarea).toHaveValue("");

    fireEvent.change(nativeTextarea, {
      target: {
        value: "hello world",
      },
    });

    expect(nativeTextarea).toHaveValue("hello world");
    expect(asFragment()).toMatchSnapshot();
  });

  it("transforms the textarea value to upper case when 'UPPER CASE' button is clicked", () => {
    const { asFragment } = render(<App />);
    const nativeTextarea = screen.getByRole("textbox");
    const upperCaseButton = screen.getByText("UPPER CASE");

    fireEvent.change(nativeTextarea, {
      target: {
        value: "hello world",
      },
    });

    fireEvent.click(upperCaseButton);

    expect(nativeTextarea).toHaveValue("HELLO WORLD");
    expect(asFragment()).toMatchSnapshot();
  });

  it("transforms the textarea value to lower case when 'lower case' button is clicked", () => {
    const { asFragment } = render(<App />);
    const nativeTextarea = screen.getByRole("textbox");
    const lowerCaseButton = screen.getByText("lower case");

    fireEvent.change(nativeTextarea, {
      target: {
        value: "HELLO WORLD",
      },
    });

    fireEvent.click(lowerCaseButton);

    expect(nativeTextarea).toHaveValue("hello world");
    expect(asFragment()).toMatchSnapshot();
  });

  it("clears the textarea when 'Reset' button is clicked", () => {
    const { asFragment } = render(<App />);
    const nativeTextarea = screen.getByRole("textbox");
    const resetButton = screen.getByText("Reset");

    fireEvent.click(resetButton);

    expect(nativeTextarea).toHaveValue("");
    expect(asFragment()).toMatchSnapshot();
  });
});
