import { Cell, Coords, Field } from "./Field";

/**
 * get the neighbors items
 *
 * Example incrementNeighbors([0, 0], field)
 * [
 *   [9, 0],
 *   [0, 0],
 * ]
 *
 * @param {Coords} coords
 */
export const getNeigboursItems = ([y, x]: Coords): Record<
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

/**
 * check if the item is in the field
 * 
 * Example checkItemInField([0,0])
 * 
 * @param {Coords} x inside coords
 * @param {Coords} y inside coords
 * @param {Field} length taking from field
 * @returns {boolean} true if inside the field and false otherwise
 */
export const checkItemInField = ([y, x]: Coords, { length }: Field): boolean =>
  y >= 0 && x >= 0 && length - x > 0 && length - y > 0;


export const incrementNeighbors = (coords: Coords, field: Field): Field => {
  const items = getNeigboursItems(coords);

  for (const item of Object.values(items)) {
    if (checkItemInField(item, field)) {
      const [y, x] = item;
      const cell = field[y][x];

      if (cell < 9) {
        field[y][x] = (cell + 1) as Cell;
      }
    }
  }

  return field;
};
