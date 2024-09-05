const findPairWithSum = require("../challenges/findPairWithSum");
const findNonConstructibleChange = require("../challenges/findChange");

//Tests para evaluar findPairWithSum.
describe("findPairWithSum", () => {
  it("Finds existing pair that sums to the target", () => {
    expect(findPairWithSum([2, 7, 11, 15], 9)).toEqual([2, 7]);
    expect(findPairWithSum([3, 6, 8, 10], 14)).toEqual([6, 8]);
  });
  it("It confirms the non existence of the pair", () => {
    expect(findPairWithSum([3, 6, 8, 10], 15)).toEqual([]);
    expect(findPairWithSum([1, 2, 3, 4], 10)).toEqual([]);
  });
  it("It works when the number is half the target", () => {
    expect(findPairWithSum([3, 6, 8, 10], 20)).toEqual([]);
    expect(findPairWithSum([1, 2, 3, 4], 8)).toEqual([]);
  });
  it("It works when the array length is one", () => {
    expect(findPairWithSum([3], 20)).toEqual([]);
    expect(findPairWithSum([1], 1)).toEqual([]);
  });
  it("It works for negative numbers", () => {
    expect(findPairWithSum([-1, -2, -3, -4], -5)).toEqual([-2, -3]);
    expect(findPairWithSum([-1, -2, -3, -4], 2)).toEqual([]);
  });
  it("Handles duplicate numbers in array", () => {
    expect(findPairWithSum([1, 2, 2, 3], 4)).toEqual([2, 2]);
    expect(findPairWithSum([2, 2, 3, 3], 6)).toEqual([3, 3]);
  });
});

//Test para evaluar findNonConstructibleChange.
describe("findNonConstructibleChange", () => {
  it("finds minimum change correctly", () => {
    expect(findNonConstructibleChange([1, 2, 5])).toBe(4);
    expect(findNonConstructibleChange([5, 7, 1, 1, 2, 3, 22])).toBe(20);
  });
  it("It works for empty array", () => {
    expect(findNonConstructibleChange([])).toBe(1);
  });
  it("It works for one length array", () => {
    expect(findNonConstructibleChange([1])).toBe(2);
    expect(findNonConstructibleChange([4])).toBe(1);
  });
  it("It works for arrays with identical elements", () => {
    expect(findNonConstructibleChange([1, 1, 1, 1])).toBe(5);
    expect(findNonConstructibleChange([4, 4, 4])).toBe(1);
  });
  it("It works for large numbers", () => {
    expect(findNonConstructibleChange([1, 5, 10, 25, 50])).toBe(2);
  });
  it("It works for consecutive numbers", () => {
    expect(findNonConstructibleChange([1, 2, 3, 4, 5])).toBe(16);
  });
});
