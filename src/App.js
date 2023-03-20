import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header.js";
import Home from "./components/Home.js";
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
