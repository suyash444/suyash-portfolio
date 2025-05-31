import React from "react";
import "./SoftwareSkill.scss";
import { skillsSection } from "../../portfolio";

export default function SoftwareSkill() {
    return (
        <div className="software-skills-main-div" aria-label="Software Skills">
            <ul className="dev-icons">
                {skillsSection.softwareSkills.map((skill, index) => {
                    const iconColorClass = `icon-color-${skill.skillName.toLowerCase().replace(/\s+/g, "")}`;

                    return (
                        <li
                            key={skill.skillName || index}
                            className="software-skill-inline"
                            aria-label={skill.skillName}
                        >
                            <i className={`${skill.fontAwesomeClassname} icon-color-${skill.skillName.toLowerCase()}`} aria-hidden="true"></i>

                            <p>{skill.skillName}</p>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
