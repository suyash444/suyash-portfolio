import React, { useContext } from "react";
import "./Certifications.scss";
import { certifications } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import { Fade } from "react-reveal";

export default function Certifications() {
    const { isDark } = useContext(StyleContext);

    if (!certifications.display) return null;

    return (
        <Fade bottom duration={1000} distance="20px">
            <div className="main" id="certifications">
                <h1 className="section-heading">Certifications</h1>
                <div className="certifications-container">
                    {certifications.certifications.map((cert, i) => (
                        <div
                            key={i}
                            className={
                                isDark ? "cert-card dark-mode" : "cert-card"
                            }
                        >
                            <h3 className="cert-title">{cert.title}</h3>
                            <p className="cert-subtitle">{cert.subtitle}</p>
                            <div className="cert-links">
                                {cert.footerLink.map((link, index) => (
                                    <a
                                        key={index}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="cert-link"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Fade>
    );
}
