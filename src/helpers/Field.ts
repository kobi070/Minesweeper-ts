export type Cell = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type Field = Cell[][];
export type Coords = [number, number];

export const CellState: Record<string, Cell> = {
  empty: 0,
  bomb: 9,
  hiddens: 10,
  marked: 11,
  weakMark: 12,
};

/* 
 ** func emptyFieldGenerator(size: number, state: Cell = by defult empty): Field : **
  state -  the type of cell want to generate
  size - the size of the field
*/
export const emptyFieldGenerator = (
  size: number,
  state: Cell = CellState.empty
): Field => new Array(size).fill(null).map(() => new Array(size).fill(state));

/* 
 ** func fieldGenerator(size: number, dencity: number): Field : **
  dencity -  the probability for a bomms in our field
  size - the size of the field
*/
export const fieldGenerator = (size: number, dencity: number): Field => {
  if (dencity > 1 || dencity < 0) {
    throw new Error("Dencity must be between 0 and 1");
  };

  const result : Field = emptyFieldGenerator(size);

  return result;
};
