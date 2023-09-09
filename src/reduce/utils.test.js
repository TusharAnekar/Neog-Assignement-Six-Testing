import {
  countPositiveNumbers,
  findMaxNumber,
  flattenNestedArrays,
  groupByProperty
} from "./utils";

describe("reduce utility exercises", () => {
  describe("findMaxNumber", () => {
    describe("should find maximum in a positive number array", () => {
      expect(findMaxNumber([3, 7, 2, 9, 5])).toBe(9);
    });

    describe("should find maximum in a negative number array", () => {
      expect(findMaxNumber([-3, -7, -2, -9, -5])).toBe(-2);
    });

    describe("should find maximum in an array with identical elements", () => {
      expect(findMaxNumber([7, 7, 7, 7])).toBe(7);
    });

    describe("should ensure original array remains unchanged", () => {
      expect(findMaxNumber([3, 7, 2, 9, 5])).not.toBe([3, 7, 2, 9, 5]);
    });

    describe("should find maximum in an array with decimal numbers", () => {
      expect(findMaxNumber([3.5, 7.2, 2.1, 9.7, 5.3])).toBe(9.7);
    });

    describe("should find maximum in an empty array", () => {
      expect(findMaxNumber([])).toBeUndefined();
    });
  });

  describe("countPositiveNumbers", () => {
    describe("should count positive numbers in an array with mixed numbers", () => {
      expect(countPositiveNumbers([3, -7, 1, 9, -5])).toBe(3);
    });

    describe("should count positive numbers in an array with all positive numbers", () => {
      expect(countPositiveNumbers([3, 7, 2, 9, 5])).toBe(5);
    });

    describe("should count positive numbers in an array with all negative numbers", () => {
      expect(countPositiveNumbers([-3, -7, -2, -9, -5])).toBe(0);
    });

    describe("should count positive numbers in an array with decimal numbers", () => {
      expect(countPositiveNumbers([3.5, 7.2, -2.1, 9.7, -5.3])).toBe(3);
    });
  });

  describe("flattenNestedArrays", () => {
    describe("should flatten nested arrays with mixed elements", () => {
      expect(
        flattenNestedArrays([
          [1, 2],
          [3, 4],
          [5, 6]
        ])
      ).toEqual([1, 2, 3, 4, 5, 6]);
    });

    describe("should flatten nested arrays with arrays of different lengths", () => {
      expect(flattenNestedArrays([[1, 2], [3, 4, 5], [6]])).toEqual([
        1,
        2,
        3,
        4,
        5,
        6
      ]);
    });

    describe("should flatten nested arrays with empty arrays", () => {
      expect(flattenNestedArrays([[], [], []])).toEqual([]);
    });

    describe("should flatten nested arrays with arrays containing non-numeric elements", () => {
      expect(
        flattenNestedArrays([
          [1, 2],
          ["a", "b"],
          [3, 4]
        ])
      ).toEqual([1, 2, "a", "b", 3, 4]);
    });

    describe("should flatten an empty array of nested arrays", () => {
      expect(flattenNestedArrays([])).toEqual([]);
    });

    describe("should ensure original nested arrays remain unchanged", () => {
      expect(
        flattenNestedArrays([
          [1, 2],
          [3, 4],
          [5, 6]
        ])
      ).not.toEqual([
        [1, 2],
        [3, 4],
        [5, 6]
      ]);
    });

    describe("should check if the function throws an error with invalid input", () => {
      expect(() => flattenNestedArrays("invalid")).toThrow();
    });
  });

  describe("groupByProperty", () => {
    const students = [
      { name: "Tushar", age: 29 },
      { name: "Sandhya", age: 32 },
      { name: "Akshay", age: 29 }
    ];

    const expectedResult = {
      29: [
        { name: "Tushar", age: 29 },
        { name: "Akshay", age: 29 }
      ],
      32: [{ name: "Sandhya", age: 32 }]
    };

    describe("should group objects by an existing property", () => {
      expect(groupByProperty(students, "age")).toEqual(expectedResult);
    });

    describe("should group objects by an empty property", () => {
      expect(groupByProperty(students, "")).toEqual({ undefined: students });
    });

    describe("should group objects with no objects", () => {
      expect(groupByProperty([], "age")).toEqual({});
    });
  });
});
