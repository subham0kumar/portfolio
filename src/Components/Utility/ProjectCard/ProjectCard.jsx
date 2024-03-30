import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ title, desc, duration, img, url }) => {
  return (
    <div>
      <div className="nft">
        <div className="main">
          <img className="tokenImage" src={img} alt="IMG" />
          <h2 className="tracking-widest mt-2 font-acorn text-2xl underline">{title}</h2>
          <p className="description text-justify">{desc}</p>
          <div className="tokenInfo">
            <div className="price hover:scale-110 transition-all ease-in-out duration-150">
              <button
                onClick={() =>
                  window.open(`${url}`, "_blank")
                }
              >
                <p className="text-blue-500 font-normal">Visit Live Website [↗]</p>
              </button>
            </div>
            <div className="duration">
              <ins>◷</ins>
              <p>{duration}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
