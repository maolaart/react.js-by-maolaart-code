import ListMovie from "../Components/ListMovie";
import { useNavigate } from "react-router-dom";

const PencariFilm = () => {
  const navigate = useNavigate();
  return (
    <div className="App">
      <header className="App-header">
        <h1>Maolaart Movie</h1>
        <ListMovie/>
        <button className="Button" onClick={() => navigate("/react.js-by-maolaart/about/project")}>Back</button>
      </header>
    </div>
  );
};

export default PencariFilm;
