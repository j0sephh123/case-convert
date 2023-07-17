import { describe, expect, it } from "vitest";
import {
  toLowerCase,
  toUpperCase,
  toSnakeCase,
  toCamelCase,
  toPascalCase,
} from "./transformers";

describe("transformers", () => {
  it("toLowerCase", () => {
    expect(toLowerCase("Hello World")).toBe("hello world");
  });

  it("toUpperCase", () => {
    expect(toUpperCase("hello world")).toBe("HELLO WORLD");
  });

  it("toSnakeCase", () => {
    const mockSentence = "This Is A Mock Sentence With Ten Words Exactly";
    expect(toSnakeCase(mockSentence)).toBe(
      "this_is_a_mock_sentence_with_ten_words_exactly"
    );
  });

  it("toCamelCase", () => {
    const mockSentence = "This Is A Mock Sentence";
    expect(toCamelCase(mockSentence)).toBe("thisIsAMockSentence");
  });

  it("toPascalCase", () => {
    const mockSentence = "This Is A Mock Sentence";
    expect(toPascalCase(mockSentence)).toBe("ThisIsAMockSentence");
  });
});
