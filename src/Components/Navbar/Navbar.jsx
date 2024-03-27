import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const bgChange = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", bgChange);
  return (
    <div className="flex justify-center">
      <nav className="nav-container text-center m-4 w-[35vw] fixed top-0 z-50">
        <ul
          className={`flex items-center justify-between font-poppins font-semibold tracking-wide rounded-[32px] bg-[#cccccc] ${
            navbar ? " bg-opacity-[95%]" : "bg-opacity-0"
          } transition-all ease duration-300`}
        >
          <a href="" className="underAnimate">
            <li>Home</li>
          </a>
          <a href="" className="underAnimate">
            <li>About</li>
          </a>
          <a href="" className="underAnimate">
            <li>Projects</li>
          </a>
          <a href="" className="underAnimate">
            <li>Contact</li>
          </a>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
