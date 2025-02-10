import React from "react";
import { FaDownload, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div>
      <section
        className="hero min-h-[calc(100vh-140px)] bg-cover bg-gray-700"
      >
        <div className="hero-content flex-col lg:flex-row-reverse text-gray-100">
          <img
            src="https://lh3.googleusercontent.com/a/ACg8ocKrBvBQlUJ4UnUyAtI0KYAV7hoKCgqx3VC1ITBO27zNGnaT6a29=s288-c-no"
            className="max-w-64 rounded-lg shadow-2xl"
            alt="Profile"
          />
          <div>
            <h1 className="text-5xl font-bold">Hello, I'm Ahmed Abrar Ariyan</h1>
            <p className="py-6">A passionate Full Stack Developer</p>
            <div className="grid md:flex gap-4 p-2 bg-gray-100 rounded-2xl">
              <a
                href="/resume.pdf"
                download
                className="btn btn-accent gap-2"
              >
                <FaDownload /> Download Resume
              </a>
              <a href="https://github.com/itihash-oboshonno/" className="btn btn-outline gap-2">
                <FaGithub /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/ahmed-abrar-ariyan/" className="btn btn-outline gap-2">
                <FaLinkedin /> LinkedIn
              </a>
              <a href="https://www.facebook.com/ariyan.abrar.ahmed/" className="btn btn-outline gap-2">
                <FaFacebook /> Facebook
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
