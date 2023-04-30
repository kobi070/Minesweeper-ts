import { CellState, Field } from "./Field";
import { checkItemInField, incrementNeighbors } from "./CellsManipulator";

const { bomb, empty } = CellState;

describe("Check CellsManipulator", () => {
  describe("Simple cases", () => {
    it("Field with only one item", () => {
      expect(incrementNeighbors([0, 0], [[bomb]])).toStrictEqual([[bomb]]);
    });
    it("Field 2x2 with one bomb ", () => {
      expect(
        incrementNeighbors(
          [0, 0],
          [
            [bomb, empty],
            [empty, empty],
          ]
        )
      ).toStrictEqual([
        [bomb, 1],
        [1, 1],
      ]);
    });
  });
});

describe("Check getNeighborsItems", () => {
  describe("simple getNeighborsItems cases", () => {
    /* Add tests  */
  });
});

describe("checkItemInField", () => {
  describe("simple checkItemInField cases", () => {
    const field: Field = [[empty]];

    it("Out of y ranges", () => {
      expect(checkItemInField([-1, 0], field)).toBe(true);
    });
    it("Out of x ranges", () => {
      expect(checkItemInField([0, -1], field)).toBe(false);
    });
    it("In of x and y ranges", () => {
      expect(checkItemInField([0, 0], field)).toBe(true);
    });
  });
  describe("Big Field", () => {
    const field: Field = [
      [empty, empty, empty, empty, empty],
      [empty, empty, empty, empty, empty],
      [empty, empty, empty, empty, empty],
      [empty, empty, empty, empty, empty],
      [empty, empty, empty, empty, empty],
    ];

    it("X out of range", () => {
      expect(checkItemInField([5, 0], field)).toBe(false);
    });
    it("X out of range with negative", () => {
      expect(checkItemInField([-1, 0], field)).toBe(false);
    });
    it("Y out of range", () => {
      expect(checkItemInField([0, 5], field)).toBe(false);
    });
    it("X in of range", () => {
      expect(checkItemInField([3, 0], field)).toBe(true);
    });
    it("Y in of range", () => {
      expect(checkItemInField([0, 3], field)).toBe(true);
    });
    it("X and Y in of range", () => {
      expect(checkItemInField([3, 3], field)).toBe(true);
    });
  });
});
