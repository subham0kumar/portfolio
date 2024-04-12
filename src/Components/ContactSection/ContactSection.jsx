import React, { useState } from "react";
import subscriber from "../../assets/subscriber.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && email && message) {
      toast.success(`Thank You ${name} for the ping!!`, {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "colored",
      });
    } else {
      toast.error("Please Complete the form", {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  const inputStyle =
    "w-full bg-gradient-to-r from-black to-black bg-transparent focus:bg-transparent bg-[length:100%_3px] bg-left-bottom focus:bg-[length:0%_3px] bg-no-repeat text-white border-2 border-2 border-l-4 border-black font-3xl px-[0.5em] py-[0.5em] tracking-widest transition-all ease-in duration-200 rounded-[6px] cursor-grab text-lg outline-none";

  return (
    <div className="md:mt-[5rem] md:mb-8 mt-20 flex flex-col items-center">
      <span className="text-[4rem] md:text-[6rem] font-acorn_sb ">
        Contact ME!!
      </span>
      <div className="md:mt-10 pb-2 pr-2 flex flex-col md:flex-row justify-around items-center md:items-start w-full">
        <img src={subscriber} alt="subscriber" className="w-1/3 md:m-0 mb-10" />

        {/* <---------------------- Contact Form ------------------------------------> */}

        <form className="contactForm font-poppins md:w-1/2 w-full flex flex-col space-y-4 items-center justify-start">
          {/* _________Name input Field_________ */}

          <div className="relative w-[60%] flex items-end pb-4">
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`group h-10 ${inputStyle}`}
              autoComplete="off"
            />
            <label
              htmlFor="name"
              className={`w-full text-lg absolute left-0 -z-10 ${
                name
                  ? "-translate-y-full opacity-100"
                  : "translate-y-0 opacity-60"
              } px-2 py-1 opacity-75 transition-all ease-in-out duration-200`}
            >
              Full Name
            </label>
          </div>

          {/* _____________Email input Field_________ */}
          <div className="relative w-[60%] flex items-center pb-4">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`h-10 ${inputStyle}`}
              autoComplete="off"
            />
            <label
              htmlFor="email"
              className={`w-full text-lg absolute left-0 -z-10 ${
                email
                  ? "-translate-y-full opacity-100"
                  : "translate-y-0 opacity-60"
              } px-2 py-1 opacity-75 transition-all ease-in-out duration-200`}
            >
              What's your Email
            </label>
          </div>

          {/* ___________Message input Field_________ */}
          <div className="relative w-[60%] flex items-start group pt-2">
            <textarea
              value={message}
              id="meassage"
              onChange={(e) => setMessage(e.target.value)}
              className={`h-40 ${inputStyle}`}
              autoComplete="off"
            />
            <label
              htmlFor="message"
              className={`w-fit text-lg absolute left-0 -z-10 ${
                message
                  ? "-translate-y-full opacity-100"
                  : "translate-y-full opacity-60"
              } px-2 py-1  transition-all ease-in-out duration-200`}
            >
              Your questions..
            </label>
          </div>

          {/* ______________Submit Button__________________ */}
          <span className="font-bold w-fit text-center mx-[10px] my-[15px]">
            <input
              type="submit"
              id="submitBtn"
              onClick={handleSubmit}
              className="px-[20px] py-[10px] rounded-[6px] border-2 border-white text-white bg-black transition-all ease duration-150 hover:-translate-y-1 active:scale-95"
            />
          </span>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ContactSection;
