import { useState, useDebugValue } from "react";

export type setMouseDown = () => void;
export type setMouseUp = () => void;

export const useMouseDown = (): [boolean, setMouseDown, setMouseUp] => {
  const [mouseDown, setMouseDown] = useState(false);

  console.log(`mouseDown: ${mouseDown}`);
  useDebugValue(
    mouseDown,
    (mouseDown) => {
      const isoTimestamp = new Date().toISOString();
      return `${mouseDown ? "Mouse is down" : "Mouse is up"} - ISO Time: ${isoTimestamp}`;
    }
  );

  const onMouseDown = () => setMouseDown(true);
  const onMouseUp = () => setMouseDown(false);
  return [mouseDown, onMouseDown, onMouseUp];
};
