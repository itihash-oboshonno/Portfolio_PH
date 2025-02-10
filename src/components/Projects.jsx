import React from "react";

const Projects = () => {
  const projects = [
    {
      name: "The Guide",
      description: "A Blog Site built with React and Node.js.",
      liveLink: "https://theguide-001.web.app/",
      githubLink: "#",
    },
    {
      name: "Chill Gamer",
      description: "A Game Review website built using React and Node.js.",
      liveLink: "https://chill-gamer-7b19b.web.app/",
      githubLink: "#",
    },
    {
      name: "Discount Pro",
      description: "A Coupon Provider website built using React.",
      liveLink: "https://discount-pro-itihash-oboshonno.netlify.app/",
      githubLink: "#",
    },
  ];
  return (
    <section id="projects" className="py-16 px-5">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card bg-base-100 shadow-xl p-4">
              <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
              <p className="mb-4">{project.description}</p>
              <a href={project.liveLink} className="btn btn-primary mr-2">
                View Live
              </a>
              <a href={project.githubLink} className="btn btn-outline">
                GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
