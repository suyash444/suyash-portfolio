import React, { useContext } from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { illustration, skillsSection } from "../../portfolio";
import { Fade } from "react-reveal";
import codingPerson from "../../assets/lottie/codingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
    const { isDark } = useContext(StyleContext);
    if (!skillsSection.display) return null;

    return (
        <div className={`main ${isDark ? "dark-mode" : ""}`} id="skills">
            <div className="skills-main-div">
                <Fade left duration={1000}>
                    <div className="skills-image-div">
                        {illustration.animated ? (
                            <DisplayLottie animationData={codingPerson} />
                        ) : (
                            <img
                                alt="Suyash Singh"
                                src={require("../../assets/images/myPhoto.png")}
                                className="profile-photo"
                            />
                        )}
                    </div>
                </Fade>

                <Fade right duration={1000}>
                    <div className="skills-text-div">
                        <h1 className="skills-heading">{skillsSection.title}</h1>
                        <p className="skills-subtitle">{skillsSection.subTitle}</p>

                        <SoftwareSkill />

                        <div className="skills-bullets">
                            {skillsSection.skills.map((line, i) => (
                                <p key={i}>
                                    {line}
                                </p>

                            ))}
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    );
}
