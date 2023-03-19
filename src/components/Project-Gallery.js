import React, { useEffect } from "react";
import Project from "./Project";
import { data } from "../assets/data";

const ProjectGallery = () => {
  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <div>
      <Project />
    </div>
  );
};

export default ProjectGallery;