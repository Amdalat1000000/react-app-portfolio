// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Head.js";
import Home from "./components/home.js";
import ProjectGallery from "./components/Project-Gallery.js";
import 'bootstrap/dist/css/bootstrap.css';



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
