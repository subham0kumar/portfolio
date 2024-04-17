import React, { useEffect } from "react";
import "./Cursor.css";

const Cursor = () => {
  let cursorDot = document.getElementById("cursor-dot");
  let cursorOutline = document.getElementById("cursor-outline");

  useEffect(() => {
    window.addEventListener("mousemove", function (e) {
      const posX = e.clientX;
      const posY = e.clientY;

      cursorDot.style.left = `${posX}px`;
      cursorDot.style.top = `${posY}px`;

      // cursorOutline.style.left = `${posX}px`;
      // cursorOutline.style.top = `${posY}px`;

      cursorOutline.animate(
        {
          left: `${posX}px`,
          top: `${posY}px`,
        },
        { duration: 500, fill: "forwards" }
      );
    });
  }, []);
  return (
    <div>
      <div className="cursor-dot" id = "cursor-dot"></div>
      <div className="cursor-outline" id= "cursor-outline"></div>
    </div>
  );
};

export default Cursor;
