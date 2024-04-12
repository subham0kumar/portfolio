import React from "react";
import "./ScrollArrow.css";

const ScrollDownArrow = () => {
  return (
    <div className="animate-bounce flex items-center justify-center -z-10">
      <div className="scroll"></div>
    </div>
  );
};

export default ScrollDownArrow;
