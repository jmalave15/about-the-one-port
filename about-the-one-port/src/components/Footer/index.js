import React from 'react';
import { FaGithub, FaLinkedin, FaGoogle } from "react-icons/fa";

function Footer() {
    return (
        <div className="footer-div">
            <footer>
            <h1 id="footer">Ways to find me</h1>

            <ul>
                
                    <a href="mailto:qmalavejose1@gmail.com" target="blank" >
                    <li>
                        <FaGoogle />
                    </li>
                    </a>
                <a href="http://github.com/jmalave15" target="blank" >
                    <li>
                        <FaGithub />
                    </li>
                </a>
                <a href="http://linkedin.com" target="blank" >
                    <li>
                        <FaLinkedin />
                    </li>
                </a>
            </ul>
        </footer>
        </div>
    );
};

export default Footer;