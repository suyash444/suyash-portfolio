import React from "react";
import "./Header.scss";
import {
    greeting,
    workExperiences,
    skillsSection,
    resumeSection,
} from "../../portfolio";

function Header() {
    const viewExperience = workExperiences.display;
    const viewSkills = skillsSection.display;
    const viewResume = resumeSection.display;

    return (
        <header className="header" role="navigation" aria-label="Main Navigation">
            <a href="/" className="logo" aria-label="Homepage">
                <span className="grey-color">&lt;</span>
                <span className="logo-name">{greeting.username}</span>
                <span className="grey-color">/&gt;</span>
            </a>

            {/* Hamburger Menu Toggle */}
            <input
                type="checkbox"
                className="menu-btn"
                id="menu-btn"
                aria-label="Toggle navigation menu"
            />
            <label className="menu-icon" htmlFor="menu-btn">
                <span className="navicon"></span>
            </label>

            {/* Navigation Menu */}
            <ul className="menu" role="menubar">
                {viewSkills && (
                    <li role="none">
                        <a href="#skills" role="menuitem">
                            Skills
                        </a>
                    </li>
                )}
                {viewExperience && (
                    <li role="none">
                        <a href="#experience" role="menuitem">
                            Work Experiences
                        </a>
                    </li>
                )}
                {viewResume && (
                    <li role="none">
                        <a
                            href={resumeSection.resumeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            role="menuitem"
                        >
                            Resume
                        </a>
                    </li>
                )}
                <li role="none">
                    <a href="#contact" role="menuitem">
                        Contact Me
                    </a>
                </li>
            </ul>
        </header>
    );
}

export default Header;
