import React from "react";

const Button = ({ children, className, onClick = null }) => {
  return (
    <button
      onClick={onClick}
      className={`${className} rounded-md py-2 transition duration-200`}
    >
      {children}
    </button>
  );
};

export default Button;
