import React from "react";

import useMousePosition from "./useMousePosition";
const Cursor = () => {
const { x, y } = useMousePosition();
  return (
    <>
      <div
        className={"mouse-ring"}
        style={{ left: `${x}px`, top: `${y}px` }}
      ></div>
      <div
        className={"mouse-dot"}
        style={{ left: `${x}px`, top: `${y}px` }}
      ></div>
    </>
  );
};
export default Cursor;