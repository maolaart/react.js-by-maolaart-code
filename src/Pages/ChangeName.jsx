import React, { useState } from "react";
import FChangeName from "../Components/FChangeName";
import { useNavigate } from "react-router-dom";

const ChangeName = () =>{
    const navigate = useNavigate();
    const [getAliasValue,setAliasValue] = useState();
    const aliasValue = () =>{
        return setAliasValue("Maolaart")
    };
    return(
        <div className="App">
             <header className="App-header">
                <h1>Change Name</h1>
                <div className="Form">
                     <FChangeName change={getAliasValue}/>
                     <button className="Button-Ans" onClick={() => aliasValue()}>Change</button>
                </div>
                <button className="Button" onClick={()=>navigate("/react.js-by-maolaart/about/practice")} >Back</button>
            </header>
        </div>     
    )
};

export default ChangeName;