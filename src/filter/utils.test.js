import {
  filterByProperties,
  filterEvenAndPositive,
  filterLongStrings,
  isPalindromic,
  palindromicNumbers
} from "./utils";

describe("fitler utility exercise", () => {
  describe("filterLongStrings", () => {
    test("should filters strings longer than minimum length", () => {
      expect(
        filterLongStrings(["apple", "banana", "cherry", "date"], 5)
      ).toEqual(["banana", "cherry"]);
    });

    test("should return empty array if input string array is empty", () => {
      expect(filterLongStrings([], 3)).toEqual([]);
    });

    test("should return empty array if strings in an array have length less than minimum length", () => {
      expect(filterLongStrings(["cat", "dog", "rat"], 3)).toEqual([]);
    });

    test("should not filter string in an array if minimum length is negative", () => {
      expect(filterLongStrings(["hello", "world"], -2)).toEqual([
        "hello",
        "world"
      ]);
    });

    test("should Ensures original array remains unchanged", () => {
      expect(filterLongStrings(["apple", "banana", "cherry"], 4)).toEqual([
        "apple",
        "banana",
        "cherry"
      ]);
    });

    test("should check if the filtered array is empty", () => {
      expect(
        filterLongStrings(["apple", "banana", "cherry", "date"], 10)
      ).toEqual([]);
    });

    test("should check if the function throws an error with invalid input", () => {
      expect(() => filterLongStrings("invalid", 5)).toThrow();
    });
  });

  describe("filterEvenAndPositive", () => {
    describe("should filters even and positive numbers", () => {
      expect(filterEvenAndPositive([2, 4, -6, 8, 9, -10, 11])).toEqual([
        2,
        4,
        8
      ]);
    });

    describe("should handle empty input array", () => {
      expect(filterEvenAndPositive([])).toEqual([]);
    });

    describe("should handle input with no even and positive numbers", () => {
      expect(filterEvenAndPositive([-3, -5, -7])).toEqual([]);
    });

    describe("should handle input with only positive but odd numbers", () => {
      expect(filterEvenAndPositive([1, 3, 5, 7])).toEqual([]);
    });

    describe("should check if the output array contains only even and positive numbers", () => {
      expect(filterEvenAndPositive([2, 4, -6, 8, 9, -10, 11])).toEqual([
        2,
        4,
        8
      ]);
    });

    describe("should check if the filtered array does not contain negative numbers", () => {
      expect(filterEvenAndPositive([2, 4, -6, 8, 9, -10, 11])).not.toContain([
        -6,
        9,
        -10,
        11
      ]);
    });

    test("should check if the function throws an error with invalid input", () => {
      expect(() => filterEvenAndPositive("invalid")).toThrow();
    });
  });

  describe("isPalindromic", () => {
    describe("should check for a palindromic number", () => {
      expect(isPalindromic(121)).toBe(true);
    });

    describe("should check for a non-palindromic number", () => {
      expect(isPalindromic(123)).toBe(false);
    });

    describe("should check for a single-digit number", () => {
      expect(isPalindromic(5)).toBe(true);
    });

    describe("should filter palindromic numbers from the provided array", () => {
      const numbers = [121, 123, 1331, 454, 678, 898];
      const result = [121, 1331, 454, 898];
      expect(palindromicNumbers(numbers)).toEqual(result);
    });

    describe("should filter palindromic numbers from an empty array", () => {
      expect(palindromicNumbers([])).toEqual([]);
    });

    describe("should filter palindromic numbers from an array with no palindromic numbers", () => {
      expect(palindromicNumbers([123, 456, 789])).toEqual([]);
    });

    describe("should ensure the filtered array contains only palindromic numbers", () => {});

    describe("should check if the filtered array length is correct", () => {
      expect(palindromicNumbers([121, 1331, 454, 898])).toHaveLength(4);
    });

    describe("should check if the filtered array is an array", () => {
      expect(palindromicNumbers([121, 1331, 454, 898])).toBeInstanceOf(Array);
    });
  });

  describe("filterByProperties", () => {
    const items = [
      { name: "Item 1", price: 10, category: "A" },
      { name: "Item 2", price: 25, category: "B" },
      { name: "Item 3", price: 10, category: "A" },
      { name: "Item 4", price: 15, category: "C" }
    ];

    const criteria = { price: 10, category: "A" };

    describe("should filter items based on criteria", () => {
      expect(filterByProperties(items, criteria)).toEqual([
        { name: "Item 1", price: 10, category: "A" },
        { category: "A", name: "Item 3", price: 10 }
      ]);
    });

    describe("should ensure original array remains unchanged", () => {
      expect(filterByProperties(items, criteria)).toEqual([
        { category: "A", name: "Item 1", price: 10 },
        { category: "A", name: "Item 3", price: 10 }
      ]);
    });

    describe("should check if filtered array includes certain items", () => {
      expect(filterByProperties(items, criteria)).toContainEqual({
        category: "A",
        name: "Item 1",
        price: 10
      });

      expect(filterByProperties(items, criteria)).toContainEqual({
        category: "A",
        name: "Item 3",
        price: 10
      });
    });

    describe("should check if filtered array does not include certain items", () => {
      expect(filterByProperties(items, criteria)).not.toContainEqual({
        name: "Item 2",
        price: 25,
        category: "B"
      });

      expect(filterByProperties(items, criteria)).not.toContainEqual({
        name: "Item 4",
        price: 15,
        category: "C"
      });
    });

    describe("should check if the filtered array length is correct", () => {
      expect(filterByProperties(items, criteria)).toHaveLength(2);
    });

    describe("should check if the filtered array is an array", () => {
      expect(filterByProperties(items, criteria)).toBeInstanceOf(Array);
    });

    describe("should check  if the filtered array is not empty", () => {
      expect(filterByProperties(items, criteria)).not.toHaveLength(0);
    });
  });
});
