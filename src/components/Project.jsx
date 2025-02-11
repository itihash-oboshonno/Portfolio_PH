import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Project = () => {
  const { id } = useParams();
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("../../public/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  const specificData = projects.find((item) => item.id == id);

  return (
    <div>
      {specificData ? (
        <div className="text-center flex flex-col justify-center p-5">
          <p className="text-2xl font-semibold mb-2">{specificData.name}</p>
          <img
            className="h-40 w-40 mx-auto object-cover p-2 rounded-xl shadow"
            src={specificData.image}
            alt=""
          />
          <div className="grid gap-3 my-6">
            <p>
              <span className="font-semibold">Tech Stack Used:</span> MongoDB,
              Express.js, React, Node.js (MERN)
            </p>
            <p>
              <span className="font-semibold">Description:</span>{" "}
              {specificData.description}
            </p>
            <p>
              <span className="font-semibold">Challenges Faced:</span>{" "}
              {specificData.challenges}
            </p>
            <p>
              <span className="font-semibold">Future Plan:</span>{" "}
              {specificData.future}
            </p>
          </div>
          <div>
            <a href={specificData?.liveLink} className="btn btn-primary mr-2">
              Live Link
            </a>
            <a href={specificData?.githubLink} className="btn btn-outline">
              GitHub Repository
            </a>
          </div>
        </div>
      ) : (
        <div>BYE</div>
      )}
    </div>
  );
};

export default Project;
