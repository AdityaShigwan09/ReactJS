import React, { useState } from 'react';

function EvenOdd(){
    const [evenodd,setevenodd]=useState({
        num:0,
        msg:""
    });

    const handle=(event)=>{
        const value=event.target.value;
        let message="";
        if(value%2===0){
            message="Even Number";
        }
        else{
            message="Odd Number";
        }
        setevenodd({
            num:value,
            msg:message
    });
    }
    return(
        <>
            <input
                type='text'
                value={evenodd.num}
                onChange={handle}
            />
            <p>{evenodd.msg}</p>
        </>
    );
}
export default EvenOdd; 