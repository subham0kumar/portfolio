import React from "react";
import ScrollDownArrow from "../Utility/ScrollArrow/ScrollDownArrow";
import dev_activity from "../../assets/dev_activity.svg";

const Introduction = () => {

  const downloadResume = () => {
    // Replace 'your-file-name' with the name of your file in the assets folder
    const fileUrl = "src/assets/Resume reactJS.pdf"
    const link = document.createElement('a');
    link.href = fileUrl;
    link.setAttribute('download', "Subham's Resume");
    link.target = '_self';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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

          {/* ______________Links_______________ */}
          <span className="flex items-start justify-start space-x-14 mt-5 cursor-pointer">
            {/* ___________Download resume______________ */}
            <div className="flex flex-col items-center justify-center space-y-2 font-acorn_l group">
              <button id="resumeDownloadBtn" onClick={downloadResume}>
                <img src="src\assets\resume.png" alt="" width={"40px"} />
              </button>
              <label
                htmlFor="resumeDownloadBtn"
                className="px-1 underAnimate group-hover:bg-[length:100%_3px] bg-[length:0%_3px] text-white"
              >
                Download Resume ⤵
              </label>
            </div>

            {/* ______________github_________________ */}
            <div className="flex flex-col items-center justify-center space-y-2 font-acorn_l group">
              <button
                id="githubBtn"
                onClick={() =>
                  window.open("https://github.com/subham0kumar", "_blank")
                }
              >
                <img src="src\assets\github.png" alt="" width={"40px"} />
              </button>
              <label
                htmlFor="githubBtn"
                className="px-1 underAnimate group-hover:bg-[length:100%_3px] bg-[length:0%_3px] text-white"
              >
                Github ↗
              </label>
            </div>

            {/* ________________linkedIn__________________ */}
            <div className="flex flex-col items-center justify-center space-y-2 font-acorn_l group">
              <button
                id="linkedInBtn"
                onClick={() =>
                  window.open("https://linkedin.com/in/subham0kumar", "_blank")
                }
              >
                <img src="src\assets\linkedin.png" alt="" width={"40px"} />
              </button>
              <label
                htmlFor="linkedInBtn"
                className="px-1 underAnimate group-hover:bg-[length:100%_3px] bg-[length:0%_3px] text-white"
              >
                LinkedIn ↗
              </label>
            </div>
          </span>
        </div>
        <div className="mr-6 mb-4 pb-2 pr-2 w-1/3">
          <img src={dev_activity} alt="SVG" />
        </div>
      </div>
      <div className="mt-[1rem]">
        <ScrollDownArrow />
      </div>
    </div>
  );
};

export default Introduction;
