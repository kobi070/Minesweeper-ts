import { useState } from "react";

export type setMouseDown = () => void;
export type setMouseUp = () => void;
export const useMouseDown = (): [boolean, setMouseDown, setMouseUp] => {
  const [mouseDown, setMouseDown] = useState(false);

  const onMouseDown = () => setMouseDown(true);
  const onMouseUp = () => setMouseDown(false);
  return [mouseDown, onMouseDown, onMouseUp];
};
