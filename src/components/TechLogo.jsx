import React from "react";
import { techs } from "../constants";
import ToolTip from "./ToolTip";

const TechLogo = ({ techId }) => {
  if (techId === null) {
    return (
      <div className="flex flex-wrap justify-start items-center object-contain">
        {techs.map((tech, index) => (
          <div className="group relative hover:scale-105 transition duration-300">
            <img
              src={tech.img}
              alt="tech"
              className={`size-16 rounded-full bg-white box-border shadow-[0_0_10px_rgba(30,61,89,0.6)] ml-3 object-contain md:mt-0 mt-3 ${
                tech.id === "tech_7" ? "p-0" : "p-2"
              }`}
            />
            <ToolTip techName={tech.name} />
          </div>
        ))}
      </div>
    );
  }
  else{
    return (
      <div className="flex flex-wrap justify-start items-center object-contain">
        {
          <div className="group relative hover:scale-105 transition duration-300">
            <img
              src={techs[techId].img}
              alt="tech"
              className={`size-12 rounded-full bg-white box-border shadow-[0_0_10px_rgba(30,61,89,0.6)] ml-3 object-contain md:mt-0 mt-3`}
            />
            <ToolTip techName={techs[techId].name} />
          </div>
        }
      </div>
    );
  }
};

export default TechLogo;
