import React from "react";

const AboutSection = () => {
  const skillBox =
    "bg-gradient-to-l from-[#56719A] to-[#56719A] bg-[length:100%] hover:bg-[length:0%] bg-no-repeat text-white border-2 hover:text-black border-black font-3xl px-[0.5em] py-[0.5em] tracking-widest transition-all ease-in duration-150 rounded-[6px] cursor-grab text-lg";

  const skillSet = [
    "HTML",
    "CSS",
    "ReactJS",
    "JavaScript",
    "GIT",
    "GitHub",
    "Tailwind CSS",
    "Python",
    "Java",
    "C++",
    "Matrial UI",
    "Figma",
  ];

  return (
    <>
      <div className="mt-[6rem] h-fit flex justify-center relative">
        <div className="text-center w-[80vw]">
          <span className="text-[4rem] md:text-[6rem] font-acorn_sb ">
            About Me
          </span>
          <div className="flex md:flex-row flex-col-reverse md:items-start justify-around items-center">
            <section className="md:w-1/2 text-justify font-poppins text-lg">
              <span className="font-acorn_sb tracking-widest md:text-4xl text-3xl">
                Get to Know ME!
              </span>
              <div className="mt-4 text-white text-[16px]">
                <p>
                  Greetings! I'm Subham Kumar, a fervent advocate for crafting
                  captivating digital experiences through web development and
                  front-end technologies. With a keen eye for detail and a
                  passion for innovation, I've dedicated myself to mastering the
                  art of front-end development.<br></br> Through hands-on
                  experience and self-directed learning, I've cultivated a
                  robust skill set in HTML, CSS, JavaScript, and React—a
                  foundation upon which I'm eager to build and expand further.
                </p>
                <br></br>
                <p>
                  I'm open to Job opportunities where I can contribute, learn
                  and grow. If you have a good opportunity that matches my
                  skills and experience then don't hesitate to contact me.
                </p>
              </div>
            </section>
            <section className="h-[10vh] md:w-[10vw]"></section>
            <section className="md:w-1/2 text-left">
              <span className="font-acorn_sb tracking-widest text-4xl">
                My Skils
              </span>
              <div className="text-center font-poppins grid grid-cols-3 mt-4 gap-3">
                {skillSet.map((ele, i) => (
                  <span
                    key={i}
                    className={`${skillBox} ${
                      i === 3 || i === 6 || i === 10 ? "col-span-2" : ""
                    }`}
                  >
                    {ele}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </div>
        <div className="custom-shape-divider-top-1712826771">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
