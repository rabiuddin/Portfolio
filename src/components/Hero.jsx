import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-[550px] bg-primary" id="home">
      <div className="relative w-full">
        <div className="absolute top-0 left-1/3 size-28 ss:size-48 rounded-full bg-purple-300 mix-blend-multiply filter blur-xl opacity-50 animate-blob sm:size-72"></div>
        <div className="absolute top-0 right-1/3 size-28 ss:size-48 rounded-full bg-yellow-300 mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000  sm:size-72"></div>
        <div className="absolute -1/2 left-1/2 size-28 ss:size-48 rounded-full bg-red-300 mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000 sm:size-72"></div>
      </div>

      <div className="relative text-secondary font-poppins font-semibold text-3xl ">
        <p className="sm:ml-0 ml-4">
          Hi, I'am Rabi Uddin <br /> I'am a FrontEnd Developer
        </p>
      </div>
      <div className="relative text-secondary font-poppins font-bold my-4 ">
        <p className="ss:text-5xl text-4xl">
          Imagine.
          <br className="ss:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-800">
            Build.
          </span>
          <br className="sm:hidden" />
          Conquer
        </p>
      </div>

      <div className="w-4/5 lg:w-3/5 h-px bg-white mt-7 " />
      <div className="relative bg-secondary my-7 rounded-[13px]">
        <button
          type="button"
          className="bg-gradient-to-r from-cyan-400 to-blue-700 text-secondary p-3 rounded-xl hover:bg-secondary hover:text-transparent hover:bg-clip-text font-poppins font-semibold"
        >
          <a href="#contact">Contact Me</a>
        </button>
      </div>
    </div>
  );
};

export default Hero;
