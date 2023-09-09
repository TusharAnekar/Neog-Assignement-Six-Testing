import { removeVowels, squareRoots } from "./utils";
import { reverseStrings } from "./utils";
import { transformKeys } from "./utils";

describe("Utils", () => {
  describe("transformKeys", () => {
    test("should transform lowercase keys to uppercase", () => {
      expect(
        transformKeys({ name: "John", age: 30, city: "New York" })
      ).toEqual(["NAME", "AGE", "CITY"]);
    });

    test("should return an empty array for an empty object", () => {
      expect(transformKeys({})).toEqual([]);
    });

    test("should not modify the original object", () => {
      const obj = { key1: "value1", key2: "value2" };
      expect(transformKeys(obj)).not.toEqual(obj);
    });
  });

  describe("reverseStrings", () => {
    test("should reverse multiple strings", () => {
      expect(reverseStrings(["hello", "world", "jest"])).toEqual([
        "olleh",
        "dlrow",
        "tsej"
      ]);
    });

    test("should return empty array when input is empty array", () => {
      expect(reverseStrings([])).toEqual([]);
    });

    test("should reverse strings with spaces", () => {
      expect(reverseStrings(["hello world", "goodbye space"])).toEqual([
        "dlrow olleh",
        "ecaps eybdoog"
      ]);
    });

    test("should not change the original array", () => {
      expect(reverseStrings(["abc", "def"])).toEqual(["cba", "fed"]);
    });

    test("should reverse and check individual characters", () => {
      expect(reverseStrings(["abc", "123"])).toContain("cba");
      expect(reverseStrings(["abc", "123"])).toContain("321");
    });
  });

  describe("squareRoots", () => {
    test("should calculate square roots of positive integers", () => {
      expect(squareRoots([4, 9, 16])).toEqual([2, 3, 4]);
    });

    test("should calculate square roots of positive floating-point numbers", () => {
      expect(squareRoots([2.25, 0.25, 1.44])).toEqual([1.5, 0.5, 1.2]);
    });

    test("should return an empty array if input is empty array", () => {
      expect(squareRoots([])).toEqual([]);
    });

    test("should ensure original array remains unchanged", () => {
      expect(squareRoots([4, 9, 16])).toEqual([2, 3, 4]);
    });

    test("should ensure each result is close to the actual square root", () => {
      const result = squareRoots([25, 64, 100]);
      const expectedResult = [5, 8, 10];

      for (let i = 0; i < result.length; i++) {
        expect(result[i]).toBeCloseTo(expectedResult[i], 5);
      }
    });
  });

  describe("removeVowels", () => {
    test("should remove vowels from single word strings", () => {
      expect(removeVowels(["hello", "world"])).toEqual(["hll", "wrld"]);
    });

    test("should remove vowels from strings with mixed case vowels", () => {
      expect(removeVowels(["ApplE", "OrAngE"])).toEqual(["ppl", "rng"]);
    });

    test("should return empty string if input is empty string", () => {
      expect(removeVowels(["", "test", ""])).toEqual(["", "tst", ""]);
    });

    test("should not remove any vowels if string has no vowels", () => {
      expect(removeVowels(["xyz", "qrst"])).toEqual(["xyz", "qrst"]);
    });

    test("should ensure original array remains unchanged", () => {
      expect(removeVowels(["hello", "world"])).toEqual(["hll", "wrld"]);
    });

    test("should return empty string if string has only vowels", () => {
      expect(removeVowels(["aeiou", "AEIOU"])).toEqual(["", ""]);
    });
  });
});
