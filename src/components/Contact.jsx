import React from "react";
import {
  FaWhatsapp,
  MdOutlineMailOutline,
  IoLogoGithub,
  FaLinkedin,
  FaInstagram,
} from "../logos";
import Reveal from "../Reveal";

const Contact = () => {
  return (
    <section id="contact">
      <div className="bg-secondary py-7">
        <Reveal>
          <p className="font-poppins font-semibold text-center text-primary text-3xl uppercase py-5">
            Let's get connected
          </p>
        </Reveal>

        <Reveal>
          <div className="flex flex-col items-center justify-center my-3 xs:flex-row">
            <a
              href="https://wa.me/03449159941"
              target="_blank"
              className="flex items-center hover:text-primary transition duration-300"
            >
              <FaWhatsapp className="size-7" />

              <p className="font-poppins ml-1 mr-10 xs:mr-0 text-lg">
                +923449159941
              </p>
            </a>
            <a
              href="mailto:rabiuddin1@gmail.com"
              target="_blank"
              className="ml-8 flex items-center hover:text-primary transition duration-300 mt-3 xs:mt-0"
            >
              <MdOutlineMailOutline className="size-7" />
              <p className="font-poppins ml-1 text-lg">rabiuddin1@gmail.com</p>
            </a>
          </div>
        </Reveal>

        <Reveal>
          <div className="flex justify-center items-center my-2 mt-8">
            <a
              href="https://www.linkedin.com/in/rabi-ud-din-23ab562aa/"
              target="_blank"
            >
              <FaLinkedin className="size-7 text-primary hover:text-gray-950 transition duration-300" />
            </a>
            <a href="https://www.instagram.com/uddin_rabi/" target="_blank">
              <FaInstagram className="size-7 ml-7 text-primary hover:text-gray-950 transition duration-300" />
            </a>
            <a href="https://github.com/rabiuddin" target="_blank">
              <IoLogoGithub className="size-7 ml-7 text-primary hover:text-gray-950 transition duration-300" />
            </a>
          </div>
        </Reveal>
      </div>
      <div className="bg-secondary">
        <p className="text-center font-poppins uppercase text-primary">
          © 2024 Muhammad Rabi Uddin. All Rights Reserved.
        </p>
      </div>
    </section>
  );
};

export default Contact;
