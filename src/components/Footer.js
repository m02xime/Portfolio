import React from "react";
import Linkedin from '../img/linkedin.png';
import Github from '../img/github.png';


function Footer() {
    return (
        <footer className="footer">
            <div className="icons">
                <ul className="fo-links">
                    <li><img src={Linkedin} className="fo-logo" alt="logo" /></li>
                    <li><img src={Github} className="fo-logo" alt="logo" /></li>
                </ul>
                <p className="company-name">
                    Maxime Kock--Bouabid &copy; 2021, ALL Rights Reserved
                </p>
            </div>
        </footer>
    );
}

export default Footer;