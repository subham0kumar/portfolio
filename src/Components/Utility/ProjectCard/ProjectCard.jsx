import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({title, desc, duration, img}) => {
  return (
    <div>
      <div className="nft">
        <div className="main">
          <img
            className="tokenImage"
            src={img}
            alt="IMG"
          />
          <h2 className="tracking-widest mt-2 font-acorn text-xl ">
            {title}
          </h2>
          <p className="description text-justify">
            {desc}
          </p>
          <div className="tokenInfo">
            <div className="price">
              <ins>↗</ins>
              <p>Live Website</p>
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
