import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import App from "../App";
import { mockSentence } from "../mocks/variousMocks";

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

  it("transforms the textarea value to snake case when 'snake_case' button is clicked", () => {
    const { asFragment } = render(<App />);
    const nativeTextarea = screen.getByRole("textbox");
    const snakeCaseButton = screen.getByText("snake_case");

    fireEvent.change(nativeTextarea, {
      target: {
        value: mockSentence,
      },
    });

    fireEvent.click(snakeCaseButton);

    expect(nativeTextarea).toHaveValue(
      "this_is_a_mock_sentence_with_ten_words_exactly"
    );
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

  describe("Copy functionality", () => {
    const mock = vi.fn();

    beforeEach(() => {
      vi.stubGlobal("navigator", {
        clipboard: {
          writeText: mock,
        },
      });
    });

    afterEach(() => {
      vi.restoreAllMocks();
    });

    it("should display tooltip on hover and copy text on click", () => {
      const { asFragment } = render(<App />);

      fireEvent.change(screen.getByRole("textbox"), {
        target: {
          value: "HELLO WORLD",
        },
      });

      fireEvent.click(screen.getByTestId("CopyIcon"));

      expect(mock).toHaveBeenCalledWith("HELLO WORLD");
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
