import { useNavigate } from "react-router-dom";

const Practice = () => {
 const navigate = useNavigate();
    return(
        <div>
            <div className="App">
                <header className="App-header">
                    <h1>Practice Page</h1>  
                    <div className="Wrap-Practice">
                        <button className="Button" onClick={()=>navigate("/react.js-by-maolaart/about/practice/changeName")} >Change Name</button>
                        <button className="Button" onClick={()=>navigate("/react.js-by-maolaart/about/practice/counter")} >Counter</button>
                        <button className="Button" onClick={()=>navigate("/react.js-by-maolaart/about/practice/useRef")} >LinkRef</button>
                    </div>
                    <button className="Button" onClick={()=>navigate("/react.js-by-maolaart/about")} >Back</button>
                </header>
            </div>
        </div>
        )
};

export default Practice;