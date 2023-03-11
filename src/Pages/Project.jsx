import { useNavigate } from "react-router-dom";

const Project = () => {
  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Select Project</h1>
        <div className="Wrapper">
          <button className="Button" onClick={() => navigate("/react.js-by-maolaart/about")}>Back</button>
          <button className="Button" onClick={() => navigate("/react.js-by-maolaart/about/project/pencariFilm")}>Pencari Film</button>
        </div>
      </header>
    </div>
  );
};

export default Project;
