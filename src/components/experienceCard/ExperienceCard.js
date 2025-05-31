import React, { useState, useEffect, useRef } from "react";
import "./ExperienceCard.scss";
import ColorThief from "colorthief";

export default function ExperienceCard({ cardInfo }) {
    const [dominantColor, setDominantColor] = useState([255, 255, 255]);
    const imgRef = useRef(null);

    useEffect(() => {
        const image = imgRef.current;
        const colorThief = new ColorThief();

        const handleLoad = () => {
            try {
                const color = colorThief.getColor(image);
                setDominantColor(color);
            } catch (err) {
                console.warn("ColorThief error:", err.message);
            }
        };

        if (image?.complete) {
            handleLoad();
        } else {
            image?.addEventListener("load", handleLoad);
            return () => image?.removeEventListener("load", handleLoad);
        }
    }, []);

    const GetDescBullets = ({ descBullets }) =>
        descBullets?.length ? (
            <ul className="experience-text-bullets">
                {descBullets.map((item, i) => (
                    <li key={i} className="experience-bullet">
                        {item}
                    </li>
                ))}
            </ul>
        ) : null;

    return (
        <div className="experience-card">
            <div
                className="experience-banner"
                style={{ backgroundColor: `rgb(${dominantColor.join(",")})` }}
            >
                <div className="experience-blurred_div" />
                <div className="experience-div-company">
                    <h5 className="experience-text-company">{cardInfo.company}</h5>
                </div>
                <img
                    ref={imgRef}
                    crossOrigin="anonymous"
                    className="experience-roundedimg"
                    src={cardInfo.companylogo}
                    alt={`${cardInfo.company} logo`}
                    loading="lazy"
                />
            </div>

            <div className="experience-text-details">
                <h4 className="experience-text-role">{cardInfo.role}</h4>
                <h5 className="experience-text-date">{cardInfo.date}</h5>
                <p className="experience-text-desc">{cardInfo.desc}</p>
                <GetDescBullets descBullets={cardInfo.descBullets} />
            </div>
        </div>
    );
}
