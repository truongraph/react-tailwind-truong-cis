import React from "react";

const ButtonPrimary = ({ children, addClass }) => {
  return (
    <button type="button" className="font-semibold rounded-full button-das-width bg-das-color">
      {" "}
      {children}
    </button>
  );
};

export default ButtonPrimary;
