import React, { useState } from "react";
import "./NavbarMobile.css";

function NavbarMobile() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [check, setCheck] = useState(false);
  return (
    <>
      <div className="absolute md:hidden">
        <label className="hamburger flex flex-col gap-2 w-max absolute top-3 left-4 z-10">
          <input
            type="checkbox"
            checked={check}
            onChange={() => {
              setShowNavbar(!showNavbar);
              setCheck(!check);
            }}
          />
        </label>
      </div>
      <section
        className={`z-[1] transition-transform duration-300 ease-in-out h-fit pt-12 w-[100vw] bg-[#16214F] absolute bg-blend-screen ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="w-full flex flex-col items-start p-4">
          <button
            onClick={() => {
              window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
              setShowNavbar(false);
              setCheck(false);
            }}
            className="btn"
          >
            Home
          </button>
          <button
            onClick={() => {
              window.scrollTo({ left: 0, top: 700, behavior: "smooth" });
              setShowNavbar(false);
              setCheck(false);
            }}
            className="btn"
          >
            About
          </button>
          <button
            onClick={() => {
              window.scrollTo({ left: 0, top: 1400, behavior: "smooth" });
              setShowNavbar(false);
              setCheck(false);
            }}
            className="btn"
          >
            Experience
          </button>
          <button
            onClick={() => {
              window.scrollTo({ left: 0, top: 2100, behavior: "smooth" });
              setShowNavbar(false);
              setCheck(false);
            }}
            className="btn"
          >
            Projects
          </button>
          <button
            onClick={() => {
              window.scroll({
                top: document.body.offsetHeight,
                left: 0,
                behavior: "smooth",
              });
              setShowNavbar(false);
              setCheck(false);
            }}
            className="btn"
          >
            Contact
          </button>
        </nav>
      </section>
    </>
  );
}

export default NavbarMobile;
