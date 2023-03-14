// import "../App.css";
import { useNavigate } from "react-router-dom";

const About = () =>{
    const navigate = useNavigate();
    return(
        <div>
            <div className="App">
                <header className="App-header">
                    <h1>Welcome to The Club</h1>  
                    <div className="Wrap-Practice">
                        <button className="Button" onClick={()=>navigate("/react.js-by-maolaart/about/practice")}>Practice</button>
                        <button className="Button" onClick={()=>navigate("/react.js-by-maolaart/about/project")}>Project</button>
                    </div>
                        <button className="Button" onClick={()=>navigate("/react.js-by-maolaart")}>Home</button>
                </header>
            </div>
        </div>
    )
};

export default About;