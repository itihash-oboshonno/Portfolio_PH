import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "The Guide",
      image: "https://i.ibb.co.com/S7xqQ9Ws/the-guide-logo-mid-coloured.webp",
      description: "A fullstack Blog website project.",
      liveLink: "https://theguide-001.web.app/",
      githubLink: "#",
    },
    {
      id: 2,
      name: "Chill Gamer",
      image: "https://i.ibb.co.com/qY3Lv4Hd/chill-gamer-logo-small.png",
      description: "A fullstack Game Review website project.",
      liveLink: "https://chill-gamer-7b19b.web.app/",
      githubLink: "#",
    },
    {
      id: 3,
      name: "Discount Pro",
      image: "https://i.ibb.co.com/Hpxxbdpg/Discount-Pro-Logo-Blue.png",
      description: "A frontend Coupon Provider website project.",
      liveLink: "https://discount-pro-itihash-oboshonno.netlify.app/",
      githubLink: "#",
    },
  ];
  return (
    <section id="projects" className="py-16 px-5 bg-base-200">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card bg-base-100 shadow-xl p-4">
              <h3 className="text-2xl font-semibold mb-2">{project?.name}</h3>
              <img
                className="h-40 object-cover rounded-xl shadow"
                src={project?.image}
                alt=""
              />
              <p className="my-4">{project?.description}</p>
              <div>
                <Link to={`/project/${project?.id}`}>
                  <button className="btn flex w-full shadow">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
