import logo from "../logo.svg";
// import "../App.css";
import { useNavigate } from "react-router-dom";

const Home = () =>{
    const navigate = useNavigate();
    return(
        <div className="App">
            <header className="App-header">
              <h1>MAOLAART<sub>Site</sub></h1>
              <img src={logo} className="App-logo" alt="logo" />
              <button className="Button" onClick={()=>navigate("/react.js-by-maolaart/about")} >About</button>
            </header>
        </div>
    ) 
};

export default Home;