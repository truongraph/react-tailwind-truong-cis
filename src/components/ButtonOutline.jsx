import React from "react";

const ButtonOutline = ({ children }) => {
  return (
    <button type="button" className="font-semibold rounded-full button-das-width bg-das-color-outline">
      {" "}
      {children}
    </button>
  );
};

export default ButtonOutline;
