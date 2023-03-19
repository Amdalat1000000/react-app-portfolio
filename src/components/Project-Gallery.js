import Project from "./components/project.js"
import React, {useState} from 'react';

import projectJSON from 'public/projects.json';
//passing my projects to the projectgallery function you can use useState (contains the description of the projects) and then that use usestate object have all the names of all your rpoject and the descriptions and all the requirements or my project and then reurn it into your div project gallery would contain all the css to style the gallery to render it on-screen as a gallery
//inside project gallery div I will be passing in my project
function projectGallery() {
    return (
        <div id="projectGallery">
         {/*pass the project into the gallery*/
         projectJSON.map(elem=>{
            return(
                Project title={elem.title}
                <div>  
    <h1 href={elem.title} link>Password Generator</h1>
    <img src="./public/assets/imagefilename link to image from in assets folder">a screenshot from the website that is uploaded to the asset folder</img>
    <link href="https://github.com/Amdalat1000000/The-Password-Generator-2" link>Password Generator Github Repository</link>
    </div>

            )
         })}
         <Project projects={this.state.projects} ></Project>
        </div>
      );
}
export default projectGallery;