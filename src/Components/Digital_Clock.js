import { useState,useEffect } from "react";

function Digital_Clcok(){
    const [time,setTime]=useState(new Date().toLocaleTimeString());

    useEffect(()=>{
        const timer=setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
        return()=>clearInterval(timer);
    },[]);

    return(
        <>
        <h2>Digital Clcok</h2>
        <h3>{time}</h3>
        </>
    );
}

export default Digital_Clcok; 