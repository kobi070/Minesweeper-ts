import { CellState, Field } from "./Field";
import {
  checkItemInField,
  incrementNeighbors,
  getNeigboursItems,
} from "./CellsManipulator";

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
    it("Field 3x3 with 1 bomb ", () => {
      expect(
        incrementNeighbors(
          [1, 1],
          [
            [0, 1, bomb],
            [0, bomb, 1],
            [0, 0, 0],
          ]
        )
      ).toStrictEqual([
        [1, 2, bomb],
        [1, bomb, 2],
        [1, 1, 1],
      ]);
    });
    it("Field 3x3 with 1 bomb ", () => {
      expect(
        incrementNeighbors(
          [1, 1],
          [
            [0, 0, 0],
            [0, bomb, 0],
            [0, 0, 0],
          ]
        )
      ).toStrictEqual([
        [1, 1, 1],
        [1, bomb, 1],
        [1, 1, 1],
      ]);
    });
    
    
    it("Field 9x9 with 1 bomb ", () => {});
  });
});

describe("Check neigbours selectors", () => {
  it("With [0, 0] coords", () => {
    expect(getNeigboursItems([0, 0])).toStrictEqual({
      top: [-1, 0],
      topRight: [-1, 1],
      right: [0, 1],
      rightBottom: [1, 1],
      bottom: [1, 0],
      bottomLeft: [1, -1],
      left: [0, -1],
      leftTop: [-1, -1],
    });
  });
  it("With [3, 3] coords", () => {
    expect(getNeigboursItems([3, 3])).toStrictEqual({
      top: [2, 3],
      topRight: [2, 4],
      right: [3, 4],
      rightBottom: [4, 4],
      bottom: [4, 3],
      bottomLeft: [4, 2],
      left: [3, 2],
      leftTop: [2, 2],
    });
  });
});

describe("checkItemInField", () => {
  describe("simple checkItemInField cases", () => {
    const field: Field = [[empty]];

    it("Out of y ranges", () => {
      expect(checkItemInField([1, 0], field)).toBe(false);
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
