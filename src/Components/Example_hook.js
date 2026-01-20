import {useState,useEffect} from "react";

function Counter1(){
    const [count,setCount]=useState(0); //useState

    
        useEffect(()=>{
            alert(`You Clicked ${count} times`); // useEffect
        })
    return(
        <>
        <h2>Counter App Using Hooks (use State, use Effect)</h2>
        <h3>Count : {count}</h3>
        <button onClick={()=>setCount(count+1)}>
         Click Me!!!
        </button>
        </>
    );
}

export default Counter1;