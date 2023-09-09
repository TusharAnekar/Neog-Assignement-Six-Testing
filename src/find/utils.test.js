import { findCommonElement, findFirstPositiveNumber } from "./utils";

describe("find utility exercises", () => {
  describe("findFirstPositiveNumber", () => {
    describe("should find first positive number", () => {
      expect(findFirstPositiveNumber([3, 7, -2, 9, -5])).toBe(3);
    });

    describe("should find first positive number in an array with only negative numbers", () => {
      expect(findFirstPositiveNumber([-3, -7, -2, -9, -5])).toBeUndefined();
    });

    describe("should find first positive number in an array with decimal numbers", () => {
      expect(findFirstPositiveNumber([3.5, 7.2, 2.1, 9.7, 5.3])).toBe(3.5);
    });

    describe("should check if the function throws an error with invalid input", () => {
      expect(() => findFirstPositiveNumber("invalid")).toThrow();
    });
  });

  describe("findCommonElement", () => {
    describe("should find a common element", () => {
      expect(findCommonElement([2, 4, 6, 8, 10], [5, 7, 8, 10, 12])).toBe(8);
    });

    describe("should find a common element in arrays with no common elements", () => {
      expect(findCommonElement([2, 4, 6], [5, 7, 9])).toBe(undefined);
    });

    describe("should find a common element when one array is empty", () => {
      expect(findCommonElement([], [5, 7, 8, 10, 12])).toBe(undefined);
    });

    describe("should find a common element when both arrays are empty", () => {
      expect(findCommonElement([], [])).toBe(undefined);
    });

    describe("should check if the function throws an error with invalid input", () => {
      expect(() => findCommonElement("invalid1", "invalid2")).toThrow();
    });
  });
});
