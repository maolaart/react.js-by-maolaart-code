import React, { useState,useEffect } from "react";

const FCounter = () =>{
    const [getCounterValue,setCounterValue] = useState(0);
    useEffect(() =>{
        if (getCounterValue === 10){
            alert('Max Number !')
        }
    },[getCounterValue])

    return(
        <div className="Wrapper">
            <div className="Wrap-Counter">
                <p className="Count-Val">{getCounterValue}</p>
                <div className="Wrap-Button-Ans">
                    <button className="Button-Ans-Counter" onClick={() => setCounterValue((prev)=>prev>=+1?prev-1:prev)}>-</button>
                    <button className="Button-Ans-Counter" onClick={() => setCounterValue((prev)=>prev=0)}>Reset</button>
                    <button className="Button-Ans-Counter" onClick={() => setCounterValue((prev)=>prev<10?prev+1:prev)}>+</button>
                </div>
            </div>
        </div>
    )
};

export default FCounter;