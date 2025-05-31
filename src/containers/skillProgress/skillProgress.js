import React from "react";
import "./Progress.scss";
import { illustration, techStack } from "../../portfolio";
import { Fade } from "react-reveal";
import Build from "../../assets/lottie/build";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";

export default function StackProgress() {
    if (!techStack.viewSkillBars || !techStack.experience?.length) return null;

    return (
        <Fade bottom duration={1000} distance="20px">
            <div className="skills-container" id="skills-progress">
                <div className="skills-bar">
                    <h1 className="skills-heading">Proficiency</h1>
                    {techStack.experience.map((exp, i) => (
                        <div key={i} className="skill">
                            <p className="skill-title">{exp.Stack}</p>
                            <div className="meter">
                                <span style={{ width: exp.progressPercentage }} />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="skills-image">
                    {illustration.animated ? (
                        <DisplayLottie animationData={Build} />
                    ) : (
                        <img
                            alt="Skills"
                            src={require("../../assets/images/skill.svg")}
                        />
                    )}
                </div>
            </div>
        </Fade>
    );
}
