import React from "react";

const Text = ({ onClick, children, className }) => {
  return (
    <p onClick={onClick} className={className}>
      {children}
    </p>
  );
};

export default Text;
