import React from "react";
import TechLogo from "./TechLogo";

const Techstack = () => {
  return (
    <section
      id="techstack"
      className="bg-secondary w-full sm:px-36 xs:px-10 px-4 pb-4"
    >
      <p className="font-poppins font-semibold text-xl text-primary px-4 pt-7 capitalize">
        Tech Stack
      </p>
      <div className="bg-gradient-to-r from-cyan-400 to-blue-700 h-[2px] w-[110px] ml-4 md:mb-5 mb-2" />
      <div className="">
        <TechLogo />
      </div>
    </section>
  );
};

export default Techstack;
