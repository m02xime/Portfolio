import React from "react";
import Github from '../img/github.png';




function projet() {
 
  return (
    <div className="project" id="project">
        <div className="project_title">
        <h2>Stuff I’ve Worked On 📁</h2>
        </div>
        <div className="works">
        <div className="cart cart_1" id="cart">
            <div className="github_link"><a href="https://github.com/m02xime/apiCommune" target="_blank" rel="noreferrer noopener"><img src={Github} className="fo-logo" alt="logo" /></a></div>
            <h3>Api Communes</h3>
        </div>
        <div className="cart cart_2">
        <div className="github_link"><a href="https://github.com/m02xime/website-front" target="_blank" rel="noreferrer noopener"><img src={Github} className="fo-logo" alt="logo" /></a></div>
            <h3>front website of veterinary</h3>
        </div>
        <div className="cart cart_3">
        <div className="github_link"><a href="https://github.com/m02xime/react" target="_blank" rel="noreferrer noopener"><img src={Github} className="fo-logo" alt="logo" /></a></div>
            <h3>React base</h3>
        </div>
        </div>
    </div>
    

  );
}

export default projet;