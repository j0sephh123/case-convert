import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Textarea from "./Textarea";

describe("Textarea", () => {
  it("set its value to the value prop, on typing calls onChange callback with the correct value", async () => {
    const mock = vi.fn();
    const { asFragment } = render(<Textarea value="1" onChange={mock} />);
    const nativeTextarea = screen.getByRole("textbox");

    expect(nativeTextarea).toHaveValue("1");

    fireEvent.change(nativeTextarea, {
      target: { value: "2" },
    });

    expect(mock).toHaveBeenCalledWith("2");
    expect(asFragment()).toMatchSnapshot();
  });
});
