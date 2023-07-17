import { renderHook } from "@testing-library/react";
import { describe, it, vi } from "vitest";
import useGetControls from "./useGetControls";

describe("useGetControls", () => {
  it("onClick functions call the passed setValue callback", () => {
    const setValueMock = vi.fn();

    const {
      result: { current: controls },
    } = renderHook(() => useGetControls(setValueMock));

    controls.forEach((control) => control.onClick());

    expect(setValueMock).toHaveBeenCalledTimes(controls.length);
  });
});
