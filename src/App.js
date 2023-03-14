import "./App.css";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Practice from "./Pages/Practice";
import ChangeName from "./Pages/ChangeName";
import Counter from "./Pages/Counter";
import Ref from "./Pages/Ref";
import Project from "./Pages/Project";
import PencariFilm from "./Pages/PencariFilm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/react.js-by-maolaart" element={<Home/>}/>
        <Route path="/react.js-by-maolaart/about" element={<About/>}/>
        <Route path="/react.js-by-maolaart/about/practice" element={<Practice/>}/>
        <Route path="/react.js-by-maolaart/about/practice/changeName" element={<ChangeName/>}/>
        <Route path="/react.js-by-maolaart/about/practice/counter" element={<Counter/>}/>
        <Route path="/react.js-by-maolaart/about/practice/useRef" element={<Ref/>}/>
        <Route path="/react.js-by-maolaart/about/project" element={<Project/>}/>
        <Route path="/react.js-by-maolaart/about/project/pencariFilm" element={<PencariFilm/>}/>
      </Routes>
    </Router>
  )
};

export default App;
