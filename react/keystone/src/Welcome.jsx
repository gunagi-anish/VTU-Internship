import React from "react";
import "./App.css";

function Welcome({generateAvg}) {
    return (
        <div className="welcomeSection">
           <h4 className="welcometxt">This is Welcome Component</h4>
           <button onClick={generateAvg}>Generate Average</button>
        </div>
    )
}

export default Welcome
