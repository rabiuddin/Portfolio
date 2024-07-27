import React from "react";
import TechLogo from "./TechLogo";

const Techstack = () => {
  return (
    <section
      className="bg-secondary w-full sm:px-36 xs:px-10 px-4 pb-4"
    >
      <p className="font-poppins font-semibold text-xl text-primary px-4 pt-7 uppercase">
        Tech Stack
      </p>
      <div className="bg-gradient-to-r from-cyan-400 to-blue-700 h-[2px] w-[123px] ml-4 md:mb-5 mb-6" />
      <div className="mb-4">
        <TechLogo techId={null}/>
      </div>
    </section>
  );
};

export default Techstack;
