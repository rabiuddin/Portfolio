import React from "react";
import { projects } from "../constants";
import TechLogo from "./TechLogo";
import { IoLogoGithub, FaLink } from "../logos";
import Reveal from "../Reveal";

const ProjectCard = () => {
  return (
    <section>
      <ul className="flex flex-wrap justify-center list-none">
        {projects.map((project, index) => (
          
          <li key={index}>
            <a href={project.live} target="_blank">
              <div className="w-[300px] h-[550px] bg-secondary mx-[6px] my-4 rounded-lg pt-6 hover:scale-105 transition duration-500 sm:w-[550px] sm:h-[600px] xs:w-[450px] xs:h-[520px] xs:m-4">
                <img
                  src={project.img}
                  alt="project"
                  className="w-[270px] rounded-md m-auto shadow-[0_0_5px_theme('colors.primary')] my-4 sm:w-[450px] xs:w-[350px]"
                />

                <p className="font-poppins text-center font-medium text-2xl mt-2 text-slate-900 sm:text-3xl">
                  {project.name}
                </p>

                <p className="font-poppins text-center mx-6 my-1 sm:my-3">
                  {project.description}
                </p>

                <ul className="flex justify-center">
                  {project.tech.map((tech, index) => (
                    <li key={index} className="sm:mt-3 mt-2 my-4 xs:my-0 xs:mt-0">
                      <TechLogo techId={tech.id} />
                    </li>
                  ))}
                </ul>

                <div className="mt-5 sm:mt-7 flex justify-center">
                  <a
                    href={project.git}
                    className="flex items-center justify-center hover:text-primary transition duration-300 "
                    target="_blank"
                  >
                    <p className="font-poppins font-medium text-xl mr-2">
                      Code
                    </p>
                    <IoLogoGithub className="sm:size-10 size-8" />
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center justify-center hover:text-primary transition duration-300 ml-8"
                    target="_blank"
                  >
                    <p className="font-poppins font-medium sm:text-base text-xl mr-2">
                      Live
                    </p>
                    <FaLink className="sm:size-10 size-8" />
                  </a>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectCard;
