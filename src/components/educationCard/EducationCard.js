import React, { createRef } from "react";
import { Fade, Slide } from "react-reveal";
import "./EducationCard.scss";

export default function EducationCard({ school }) {
    const imgRef = createRef();

    const GetDescBullets = ({ descBullets }) => {
        if (!descBullets || descBullets.length === 0) return null;

        return (
            <ul className="education-text-bullets">
                {descBullets.map((item, i) => (
                    <li key={i} className="education-bullet">
                        {item}
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <div className="education-card-wrapper">
            <Fade left duration={1000}>
                <div className="education-card">
                    {school.logo && (
                        <div className="education-card-left">
                            <img
                                ref={imgRef}
                                className="education-roundedimg"
                                src={school.logo}
                                alt={`${school.schoolName} logo`}
                                loading="lazy"
                                crossOrigin="anonymous"
                            />
                        </div>
                    )}

                    <div className="education-card-right">
                        <h3 className="education-text-school">
                            {school.schoolName}
                        </h3>
                        <h4 className="education-text-subHeader">
                            {school.subHeader}
                        </h4>
                        <p className="education-text-duration">{school.duration}</p>
                        <p className="education-text-desc">{school.desc}</p>
                        <GetDescBullets descBullets={school.descBullets} />
                    </div>
                </div>
            </Fade>

            <Slide left duration={2000}>
                <div className="education-card-border"></div>
            </Slide>
        </div>
    );
}
