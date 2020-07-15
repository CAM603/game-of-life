import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
    return (
        <div className="footer">
            <div className="upper-footer">
                <p>
                    Created and designed by{" "}
                    <a
                        href="#"
                        target="_blank"
                        className="link"
                        rel="noopener noreferrer"
                    >
                        Cameron Hawley
                    </a>{" "}
                </p>
            </div>
            <div className="lower-footer">
                <a
                    className="link"
                    href="https://www.linkedin.com/in/cameron-hawley/"
                    title="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <AiFillLinkedin />
                </a>{" "}
                <a
                    href="https://github.com/CAM603"
                    title="GitHub"
                    target="_blank"
                    className="link"
                    rel="noopener noreferrer"
                >
                    <AiFillGithub />
                </a>
            </div>
        </div>
    );
};

export default Footer;
