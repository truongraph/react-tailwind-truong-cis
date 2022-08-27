import React from "react";

import UseMousePosition from "./UseMousePosition";
const UseMouseCursor = () => {
const { x, y } = UseMousePosition();
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
export default UseMouseCursor;