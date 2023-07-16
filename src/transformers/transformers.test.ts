import { describe, expect, it } from "vitest";
import { toLowerCase, toUpperCase } from "./transformers";

describe("transformers", () => {
  it("toLowerCase", () => {
    expect(toLowerCase("Hello World")).toBe("hello world");
  });
  it("toUpperCase", () => {
    expect(toUpperCase("hello world")).toBe("HELLO WORLD");
  });
});
