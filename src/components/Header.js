import React from "react";
import Typical from 'react-typical';



function header() {
  return (
    
      <div className="me marg">
        <h1>HELLO, I'M MAXIME KOCK--BOUABID</h1>
        <Typical
        steps={["I'm a developer", 2000, "I'm a fullstack developer !", 8000]}
        loop={Infinity}
        wrapper="p"
      /> <br />
              <a href="#project">my projects</a>

      </div>
 



  );
}

export default header;