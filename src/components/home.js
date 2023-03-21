import React from "react";

function Home() {
    return (
      <div>
        <div id="intro">
          <div class="collapse" id="navbarToggleExternalContent">
    <div class="bg-dark p-4">
      <nav><title>Amdalat's Profile</title>
        <a href="#homePage">Home<span class="sr-only">(current)</span></a>
        <a href="#Projects">Projects<a href="#ProjectsGallery"> Projects Gallery </a></a>
        <a href="#ContactPage">Contact Me</a>
      </nav>
    </div>
  </div>
  <nav class="navbar navbar-dark bg-dark">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </nav>
        <h1 id="homePage">Home Page</h1>
        <img src="/assets/MyPhoto.jpg" alt="myPhotograph"></img>
        <p>Amdalat's Profile</p>
        <h2>Amdalat Jinadu</h2>I am a postgraduate student with a vast range of executive skills and training.
        <ol>
        <p></p>
        <p>
        LinkedIn: https://www.linkedin.com/in/amdalat
        Github: https://github.com/Amdalat1000000
     <p>
     </p> 
  <h3>
  Contact Details
  </h3>
     Email: babi.jinadu@gmail.com
      </p>
                           
<h3>
  My CV
</h3>
          <p>
          Open a PDF file: <a href="/assets/AmdalatJinaduCV23_2.PDF">Amdalat Jinadu's CV</a></p>
          </ol>
        </div>
     </div>
      );
}
export default Home;
