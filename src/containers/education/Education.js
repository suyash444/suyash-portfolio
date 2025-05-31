import React from "react";
import "./Education.scss";
import EducationCard from "../../components/educationCard/EducationCard";
import { educationInfo } from "../../portfolio";

export default function Education() {
    if (!educationInfo.display) return null;

    return (
        <section
            className="education-section"
            id="education"
            aria-label="Education Section"
        >
            <h1 className="education-heading">Education</h1>
            <div className="education-card-container">
                {educationInfo.schools.map((school) => (
                    <EducationCard
                        key={school.schoolName} // safer and semantic than using index
                        school={school}
                    />
                ))}
            </div>
        </section>
    );
}
