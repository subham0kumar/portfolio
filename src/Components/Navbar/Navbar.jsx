import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [bgGradient, setBgGradient] = useState(
    "bg-gradient-to-r from-white to-white"
  );
  const bgChange = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
      setBgGradient("bg-gradient-to-r from-[#56719A] to-[#56719A]");
    } else {
      setNavbar(false);
      setBgGradient("bg-gradient-to-r from-white to-white");
    }
  };
  window.addEventListener("scroll", bgChange);
  return (
    <div className="hidden lg:flex justify-center">
      <nav className="nav-container text-center m-4 w-[45vw] fixed top-0 z-50">
        <ul
          className={`flex items-center justify-between font-poppins font-semibold tracking-wide rounded-[32px] bg-[#cccccc] ${
            navbar
              ? "bg-opacity-[95%] text-[#56719A]"
              : "bg-opacity-0 text-white"
          } transition-all ease duration-300`}
        >
          <a className={`underAnimate ${bgGradient}`}>
            <li>
              <button
                onClick={() => {
                  window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
                }}
              >
                Home
              </button>
            </li>
          </a>
          <a className={`underAnimate ${bgGradient}`}>
            <li>
              <button
                onClick={() => {
                  window.scrollTo({ left: 0, top: 700, behavior: "smooth" });
                }}
              >
                About
              </button>
            </li>
          </a>
          <a className={`underAnimate ${bgGradient}`}>
            <li>
              <button
                onClick={() => {
                  window.scrollTo({ left: 0, top: 1400, behavior: "smooth" });
                }}
              >
                Experience
              </button>
            </li>
          </a>
          <a className={`underAnimate ${bgGradient}`}>
            <li>
              <button
                onClick={() => {
                  window.scrollTo({ left: 0, top: 2100, behavior: "smooth" });
                }}
              >
                Projects
              </button>
            </li>
          </a>
          <a className={`underAnimate ${bgGradient}`}>
            <li>
              <button
                onClick={() => {
                  window.scroll({
                    top: document.body.offsetHeight,
                    left: 0,
                    behavior: "smooth",
                  });
                }}
              >
                Contact
              </button>
            </li>
          </a>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
