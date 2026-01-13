import React from "react";
// import Marks from "./Marks_Class";

function Display(props){
    return(
        <div>
            <h1>Marks : {props.marks}</h1>
            <button onClick={props.add}>Add</button>
            <button onClick={props.reset}>Reset</button>
        </div>
    );
}

export default Display;