import React from "react";
import dev_activity from "../../assets/dev_activity.svg";
import MdBGMoving from "../Utility/Backgroud/MdBGMoving";
import ScrollDownArrow from "../Utility/ScrollArrow/ScrollDownArrow";

const Introduction = () => {
  const underLine =
    "bg-gradient-to-l from-white rounded-md to-white bg-left-bottom bg-no-repeat text-white tracking-widest transition-all ease-in duration-150";

  //RESUME download funciton
  const downloadResume = () => {
    const fileUrl = "src/assets/Resume reactJS.pdf";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", "Subham's Resume");
    link.target = "_self";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="md:h-[100vh]">
        <div>
          <div className="block">
            <MdBGMoving />
          </div>
        </div>
        <section className="sm:pt-32 pt-12">
          <div className="flex md:justify-start justify-center">
            <div className="md:text-left text-center md:ml-6 md:pl-2 px-3 md:w-[60%]">
              <h1 className="md:leading-[10rem] font-acorn_b text-[5rem] md:text-[7rem]">
                Hi, I am Subham
              </h1>
              <h3 className="md:leading-[8rem] tracking-[0.037em] font-acorn_b text-[2.7rem] md:text-[5rem]">
                A Web Developer
              </h3>
              <h3 className="font-acorn_b md:text-[1.5rem] tracking-wide md:text-left text-right">
                I'm passionate about crafting experiences that are engaging,{" "}
                <br />
                accessible, and user-centric.{" "}
              </h3>

              {/* ______________Links_______________ */}
              <span className="flex items-start md:justify-start justify-between md:space-x-14 mt-5 cursor-pointer z-50">
                {/* ___________Download resume______________ */}
                <div className="flex flex-col items-center justify-center space-y-2 font-acorn_l active:scale-95 group">
                  <button id="resumeDownloadBtn" onClick={downloadResume}>
                    <img src="src\assets\resume.png" alt="" width={"40px"} />
                  </button>
                  <label
                    htmlFor="resumeDownloadBtn"
                    className={`px-1 group-hover:bg-[length:100%_3px] bg-[length:0%_3px] text-white ${underLine}`}
                  >
                    Resume ⤵
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
                    className={`px-1 ${underLine} group-hover:bg-[length:100%_3px] bg-[length:0%_3px] text-white`}
                  >
                    Github ↗
                  </label>
                </div>

                {/* ________________linkedIn__________________ */}
                <div className="flex flex-col items-center justify-center space-y-2 font-acorn_l group">
                  <button
                    id="linkedInBtn"
                    onClick={() =>
                      window.open(
                        "https://linkedin.com/in/subham0kumar",
                        "_blank"
                      )
                    }
                  >
                    <img src="src\assets\linkedin.png" alt="" width={"40px"} />
                  </button>
                  <label
                    htmlFor="linkedInBtn"
                    className={`px-1 ${underLine} group-hover:bg-[length:100%_3px] bg-[length:0%_3px] text-white`}
                  >
                    LinkedIn ↗
                  </label>
                </div>
              </span>
            </div>
            <div className="md:block hidden mr-6 mb-4 pb-2 pr-2 w-1/3">
              <img src={dev_activity} alt="SVG" />
            </div>
          </div>
          <div className="md:mt-[1rem] mt-[2rem]">
            <ScrollDownArrow />
          </div>
        </section>
      </div>
    </>
  );
};

export default Introduction;
