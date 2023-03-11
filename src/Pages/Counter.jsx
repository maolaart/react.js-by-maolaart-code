import { useNavigate } from "react-router-dom";
import FCounter from "../Components/FCounter";

const Counter = () =>{
    const navigate = useNavigate();
    return(
        <div className="App">
        <header className="App-header">
           <h1>Counter</h1>
           <div className="Form">
                <FCounter/>
           </div>
           <button className="Button" onClick={()=>navigate("/react.js-by-maolaart/about/practice")}>Back</button>
       </header>
   </div> 
    )
};

export default Counter; 

