import React from "react";
import {Link} from "react-router-dom";


function Navbar(){

    return(
        <ul className="nav">
            <Link to="/"><li className="active">Home</li></Link>
            <Link to="/About"><li>About</li></Link>
            <a href="mailto:maxkb02@gmail.com"><li>Contact me!</li></a>
        </ul>
        
    )

}

export default Navbar;