import { renderHook } from "@testing-library/react";
import { describe, it, vi } from "vitest";
import useGetControls from "./useGetControls";

describe("useGetControls", () => {
  it("onClick functions call the passed setValue callback", () => {
    const setValueMock = vi.fn();

    const {
      result: {
        current: [{ onClick: onClick1 }, { onClick: onClick2 }],
      },
    } = renderHook(() => useGetControls(setValueMock));

    onClick1();
    onClick2();

    expect(setValueMock).toHaveBeenCalledTimes(2);
  });
});
