import  React from "react";
import {Link} from "react-router-dom";

function Navigation(){
    return(
        <>
            <Link to="/">Digital Clcok</Link>
            <Link to="/evenodd">Even Odd</Link>

        </>        
    );
}

export default Navigation;
