import { Cell, Coords, Field } from "./Field";

export const incrementNeighbors = (coords: Coords, field: Field): Field => {
  console.table(field);
  return field;
};

export const getNeighborsItems = ([y, x]: Coords): Record<
  string,
  [number, number]
> => ({
  top: [y - 1, x],
  topRight: [y - 1, x + 1],
  right: [y, x + 1],
  rightBottom: [y + 1, x + 1],
  bottom: [y + 1, x],
  bottomLeft: [y + 1, x - 1],
  left: [y, x - 1],
  leftTop: [y - 1, x - 1],
});


export const checkItemInField = (coords : Coords, field: Field): boolean => {
    let answer = field[coords[0]][coords[1]] !== undefined;
    return answer;
};