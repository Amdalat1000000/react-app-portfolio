import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header.js";
import Home from "./components/home.js";
import ProjectGallery from "./components/Project-Gallery.js";


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <ProjectGallery />
    </div>
  );
}

export default App;
