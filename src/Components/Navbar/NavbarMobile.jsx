import React from "react";
import "./NavbarMobile.css";

function NavbarMobile() {
  return (
    <div className="md:hidden flex flex-col absolute">
      <label className="hamburger flex flex-col gap-2 w-max absolute top-3 left-4 z-50">
        <input type="checkbox" />
      </label>
      <section className="sidebar">
        <nav className="flex flex-col items-start m-2 max-w-max">
          <button
            onClick={() => {
              window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
            }}
          >
            Home
          </button>
          <button
            onClick={() => {
              window.scrollTo({ left: 0, top: 700, behavior: "smooth" });
            }}
          >
            About
          </button>
          <button
            onClick={() => {
              window.scrollTo({ left: 0, top: 1400, behavior: "smooth" });
            }}
          >
            Experience
          </button>
          <button
            onClick={() => {
              window.scrollTo({ left: 0, top: 2100, behavior: "smooth" });
            }}
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
            }}
          >
            Contact
          </button>
        </nav>
      </section>
    </div>
  );
}

export default NavbarMobile;
