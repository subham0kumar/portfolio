import React from "react";

const Experience = () => {
  return (
    <div>
      <div className="mt-[6rem] h-fit flex justify-center">
        <div className="text-center w-[80vw]">
          <span className="text-[4rem] md:text-[6rem] font-acorn_sb ">Experience</span>
          <div className="flex flex-col items-center space-y-10">
            <div className="md:w-1/2 w-full h-fit border-2 border-white rounded-md">
              <div className="flex flex-col items-center px-8 m">
                <div className="h-fit flex items-end justify-center space-x-3 font-acorn_sb mt-3">
                  <img
                    src="src\assets\programming.png"
                    width={"50px"}
                    className=""
                  />
                  <h3 className="text-[2rem]">Engineering</h3>
                </div>
                <h3 className="md:ml-3 mt-6 text-lg font-poppins">
                  Bachelor of Technology <br /> Elelctronics and
                  Telecommunications
                </h3>
                <h4 className="md:ml-3 mb-3">2019-2023</h4>
              </div>
            </div>
            {/* ________________-internship____________ */}

            <div className="md:w-1/2 md:h-60 border-2 border-white rounded-md ">
              <div className="flex flex-col items-center px-8">
                <div className="h-fit flex items-end justify-center space-x-3 font-acorn_sb mt-3">
                  <img src="src\assets\laptop.png" width={"50px"} className="md:pb-0 pb-11" />
                  <h3 className="text-[2rem] text-left">Front-End Internship</h3>
                </div>
                <h3 className="ml-3 text-lg font-poppins underline">
                   <br /> Customized Industrial Solutions,
                  Virtual Internship
                </h3>
                <h4 className="md:ml-3 mt-3 text-justify">
                  Learnt how a company with many people work in harmony.
                  Conceptualized the working of an organization. Built the
                  Front-end features of the client websites. Using React to
                  build the Front-end Components.
                </h4>
                <h4 className="md:ml-3 mb-3 font-bold"> Mar 2023 - Sep 2023 </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
