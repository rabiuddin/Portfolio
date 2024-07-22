import React, { useState } from "react";
import {
  IoCloseOutline,
  MdOutlineMenu,
  IoLogoGithub,
  FaInstagram,
  FaLinkedin,
} from "../logos";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="bg-primary">
      <div className="flex ">
        <p className="text-secondary font-poppins m-4 text-[24px] ">
          Rabi Uddin
        </p>
        <div className="sm:flex hidden justify-end flex-1">
          <ul className="list-none text-secondary flex justify-center items-center space-x-9 text-[18px] ">
            <li className="hover:text-white">
              <a href="#home">Home</a>
            </li>
            <li className="hover:text-white">
              <a href="#aboutme">About Me</a>
            </li>
            <li className="hover:text-white">
              <a href="#projects">Projects</a>
            </li>
            <li className="hover:text-white">
              <a href="#contact">Contact</a>
            </li>
          </ul>

          <ul className="flex items-center space-x-4 m-4 mr-6 text-[20px]">
            <li className="text-secondary hover:text-white">
              <a href="https://github.com/rabiuddin" target="blank">
                <IoLogoGithub />
              </a>
            </li>
            <li className="text-secondary hover:text-white">
              <a
                href="https://www.linkedin.com/in/rabi-ud-din-23ab562aa/"
                target="blank"
              >
                <FaLinkedin />
              </a>
            </li>
            <li className="text-secondary hover:text-white">
              <a href="https://www.instagram.com/uddin_rabi/" target="blank">
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <div
            className="w-[28px] h-[28px] object-contain mx-3"
            onClick={() => setToggle((prev) => !prev)}
          >
            {toggle ? (
              <IoCloseOutline className="text-secondary w-[28px] h-[28px]" />
            ) : (
              <MdOutlineMenu className="text-secondary w-[28px] h-[28px]" />
            )}
          </div>

          <div
            className={`${
              toggle ? "flex" : "hidden"
            } bg-secondary p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <div className="flex justify-end flex-1 flex-col">
              <ul className="list-none text-primary flex flex-col justify-center items-center space-y-3 my-3 text-[18px] ">
                <li className="hover:brightness-150">
                  <a href="#home">Home</a>
                </li>
                <li className="hover:brightness-150">
                  <a href="#aboutme">About Me</a>
                </li>
                <li className="hover:brightness-150">
                  <a href="#projects">Projects</a>
                </li>
                <li className="hover:brightness-150">
                  <a href="#contact">Contact</a>
                </li>
              </ul>

              <ul className="flex items-center space-x-4 m-4 mr-6 text-[20px]">
                <li className="text-primary hover:brightness-150">
                  <a href="https://github.com/rabiuddin" target="blank">
                    <IoLogoGithub />
                  </a>
                </li>
                <li className="text-primary hover:brightness-150">
                  <a
                    href="https://www.linkedin.com/in/rabi-ud-din-23ab562aa/"
                    target="blank"
                  >
                    <FaLinkedin />
                  </a>
                </li>
                <li className="text-primary hover:brightness-150">
                  <a
                    href="https://www.instagram.com/uddin_rabi/"
                    target="blank"
                  >
                    <FaInstagram />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
