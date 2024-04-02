import React, { useState } from "react";
import subscriber from "../../assets/subscriber.svg";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const inputStyle =
    "w-full bg-gradient-to-r from-black to-black bg-transparent focus:bg-transparent bg-[length:100%_3px] bg-left-bottom focus:bg-[length:0%_3px] bg-no-repeat text-white border-2 border-2 border-l-4 border-black font-3xl px-[0.5em] py-[0.5em] tracking-widest transition-all ease-in duration-200 rounded-[6px] cursor-grab text-lg outline-none";

  return (
    <div className="mt-[9rem] flex flex-col items-center">
      <span className="text-[6rem] font-acorn_sb ">Contact ME!!</span>
      <div className="mt-10 pb-2 pr-2 flex justify-around w-full">
        <img src={subscriber} alt="subscriber" className="w-1/3" />

        {/* <---------------------- Contact Form ------------------------------------> */}

        <form
          action=""
          className="contactForm w-1/2 flex flex-col space-y-4 items-center justify-start"
        >
          {/* _________Name input Field_________ */}

          <div className="relative w-[60%] flex items-end pb-4">
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`group h-10 ${inputStyle}`}
            />
            <label
              htmlFor="name"
              className={`w-full text-lg absolute left-0 ${name?"-translate-y-full":"translate-y-0"} px-2 py-1 opacity-75 transition-all ease-in-out duration-200`}
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
              className={`w-full text-lg absolute left-0 ${email?"-translate-y-full":"translate-y-0"} px-2 py-1 opacity-75 transition-all ease-in-out duration-200`}
            >
              What's your Email
            </label>
          </div>

          {/* ___________Message input Field_________ */}
          <div className="relative w-[60%] flex items-start">
            <textarea
              value={message}
              id="meassage"
              onChange={(e) => setMessage(e.target.value)}
              className={`h-40 ${inputStyle}`}
            />
            <label
              htmlFor="message"
              className={`w-full text-lg absolute left-0 ${message?"-translate-y-full":"translate-y-full"} px-2 py-1 opacity-75 transition-all ease-in-out duration-200`}
            >
              Your questions..
            </label>
          </div>

          {/* ______________Submit Button__________________ */}
          <span className="text-left underAnimate mx-[10px] my-[15px] rounded-[6px] border-2 border-white text-white">
            <button type="submit" className="px-[20px] py-[10px]">Submit</button>
          </span>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
