import React, { useEffect } from "react";
import Project from "./Project";
import { data } from "../assets/data";

const ProjectGallery = () => {
  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <div>
      {data.map((project) => (
        <Project
          key={project.title}
          title={project.title}
          deployedLink={project.deployedLink}
          githubLink={project.githubLink}
          imageLink={project.imageLink}
        />
      ))}
    </div>
  );
};

export default ProjectGallery;