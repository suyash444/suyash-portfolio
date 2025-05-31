import React, { useContext } from "react";
import { Fade } from "react-reveal";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { illustration, greeting } from "../../portfolio";
import myPhoto from "../../assets/images/myPhoto.png";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
    const { isDark } = useContext(StyleContext);

    if (!greeting.displayGreeting) {
        return null;
    }

    return (
        <Fade bottom duration={1000} distance="40px">
            <section className="greet-main" id="greeting" aria-label="Greeting Section">
                <div className="greeting-main">
                    {/* === Text Section === */}
                    <div className="greeting-text-div">
                        <div>
                            <h1 className={`greeting-name ${isDark ? "dark-mode" : ""}`}>
                                Suyash Singh
                            </h1>

                            <p className={`greeting-summary ${isDark ? "dark-mode" : ""}`}>
                                Leveraging data to build smart, scalable solutions — skilled in Machine Learning, Cloud Pipelines, and Data Engineering.
                            </p>

                            <SocialMedia />

                            <div className="button-greeting-div">
                                <Button text="Let's Connect" href="#contact" />
                                {greeting.resumeLink && (
                                    <a
                                        href={greeting.resumeLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="resume-button"
                                        aria-label="Download Resume"
                                    >
                                        Download Resume
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* === Image Section === */}
                    <div className="greeting-image-div">
                        <img
                            src={myPhoto}
                            alt="Suyash Singh"
                            className="profile-photo"
                        />
                    </div>
                </div>
            </section>
        </Fade>
    );
}
