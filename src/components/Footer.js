import React from "react";
import Linkedin from '../img/linkedin.png';
import Github from '../img/github.png';


function Footer() {
    return (
        <footer className="footer">
            <div className="icons">
                <ul className="fo-links">
                    <li><a href="https://www.linkedin.com/in/maxime-kock-bouabid/" target="_blank" rel="noreferrer noopener"><img src={Linkedin} className="fo-logo" alt="logo" /></a></li>
                    <li><a href="https://github.com/m02xime" target="_blank" rel="noreferrer noopener"><img src={Github} className="fo-logo" alt="logo" /></a></li>
                </ul>
                <p className="company-name">
                    Maxime Kock--Bouabid &copy; 2021, ALL Rights Reserved
                </p>
            </div>
        </footer>
    );
}

export default Footer;