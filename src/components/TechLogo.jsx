import React from "react";
import { techs } from "../constants";
import ToolTip from "./ToolTip";

const TechLogo = () => (
  <div className="flex flex-wrap justify-start items-center object-contain">
    {techs.map((tech, index) => (
      <div className="group relative hover:scale-105">
        <img
          src={tech.img}
          alt="tech"
          className={`size-16 rounded-full bg-white box-border drop-shadow-2xl ml-3 object-contain md:mt-0 mt-3 ${
            tech.id === "tech_7" ? "p-0" : "p-2"
          }`}
        />
        <ToolTip techName={tech.name} />
      </div>
    ))}
  </div>
);

export default TechLogo;
