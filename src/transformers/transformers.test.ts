import { describe, expect, it } from "vitest";
import { toLowerCase, toUpperCase, toSnakeCase } from "./transformers";
import { mockSentence } from "../mocks/variousMocks";

describe("transformers", () => {
  it("toLowerCase", () => {
    expect(toLowerCase("Hello World")).toBe("hello world");
  });
  it("toUpperCase", () => {
    expect(toUpperCase("hello world")).toBe("HELLO WORLD");
  });
  it("toSnakeCase", () => {
    expect(toSnakeCase(mockSentence)).toBe(
      "this_is_a_mock_sentence_with_ten_words_exactly"
    );
  });
});
