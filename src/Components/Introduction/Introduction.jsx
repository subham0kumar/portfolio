import React from "react";
import ScrollDownArrow from "../Utility/ScrollArrow/ScrollDownArrow";
import dev_activity from '../../assets/dev_activity.svg'

const Introduction = () => {
  return (
    <div className="h-[80vh] mt-36">
      <div className="flex">
        <div className="text-left ml-6 pl-2 w-[60%]">
          <h1 className="leading-[10rem] font-acorn_b text-[7rem]">
            Hi, I am Subham
          </h1>
          <h3 className="leading-[8rem] tracking-[0.037em] font-acorn_b text-[5rem]">
            A Web Developer
          </h3>
          <h3 className="font-acorn_b text-[1.5rem] tracking-wide">
            I'm passionate about crafting experiences that are engaging,{" "}
            <br></br>
            accessible, and user-centric.{" "}
          </h3>
        </div>
        <div className="mr-6 mb-4 pb-2 pr-2 w-1/3"> 
            <img src={dev_activity} alt="SVG"/>
        </div>
      </div>
      <div className="mt-[1rem]">
        <ScrollDownArrow />
      </div>
    </div>
  );
};

export default Introduction;
