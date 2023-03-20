import React from "react";

const Project = ({ title, deployedLink, githubLink, imageLink }) => {
  return (
    <div id ="Projects">
      {title}
      <a href={deployedLink}> Deployed Link</a>
      <a href={githubLink}>Github Link</a>
      <img src={imageLink} alt="allImages"/>
    </div>
  );
};

export default Project;