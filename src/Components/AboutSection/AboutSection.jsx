import React from "react";

const AboutSection = () => {
  const skillBox =
    "bg-gradient-to-l from-[#56719A] to-[#56719A] bg-[length:100%] hover:bg-[length:0%] bg-no-repeat text-white border-2 hover:text-black border-black font-3xl px-[0.5em] py-[0.5em] tracking-widest transition-all ease-in duration-150 rounded-[6px] cursor-grab text-lg";

  const skillSet = [
    "HTML",
    "CSS",
    "JavaScript",
    "ReactJS",
    "Tailwind CSS",
    "GIT",
    "GitHub",
    "Python",
    "Java",
    "C++",
    "Matrial UI",
    "Figma"
  ];

  return (
      <div className="mt-[6rem] h-fit flex justify-center">
        <div className="text-center w-[80vw]">
          <span className="text-[6rem] font-acorn_sb ">About Me</span>
          <div className="flex items-start justify-around">
            <section className="w-1/2 text-justify font-poppins text-lg">
              <span className="font-acorn_sb tracking-widest text-4xl">
                Get to Know ME!
              </span>
              <div className="mt-4 text-white">
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
            <section className="w-[10vw]"></section>
            <section className="w-1/2 text-left">
              <span className="font-acorn_sb tracking-widest text-4xl">
                My Skils
              </span>
              <div className="text-center font-poppins grid grid-cols-3 mt-4 gap-3">
                {skillSet.map((ele, i) => (
                  <span key={i}
                    className={`${skillBox} ${
                      i === 3 || i === 6 || i===10 ? "col-span-2" : ""
                    }`}
                  >
                    {ele}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
  );
};

export default AboutSection;
