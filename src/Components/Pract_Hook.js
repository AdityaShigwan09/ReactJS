import {useState} from "react";

function Pract(){

    const[name,setname]=useState("");

    return(
        <>
        <h1>Hook Practice</h1>
        <p>Name : {name}</p>
        <button onClick={()=>setname("Aditya")}>Show Name</button>
        <button onClick={()=>setname("")}>Hide Name</button>
        </>
    );
}

export default Pract