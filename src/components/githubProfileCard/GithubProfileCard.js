import React from "react";
import "./GithubProfileCard.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { contactInfo, isHireable } from "../../portfolio";
import { Fade } from "react-reveal";

export default function GithubProfileCard({ prof }) {
    return (
        <Fade bottom duration={1000} distance="20px">
            <section className="contact-section" id="contact" aria-label="Contact Section">
                <h1 className="prof-title">Contact Me</h1>

                <div className="row">
                    {/* Left: Text and Links */}
                    <div className="main-content-profile">
                        <p className="blog-subtitle">{contactInfo.subtitle}</p>

                        {prof.bio && (
                            <p className="bio-text" aria-label="Bio">
                                “{prof.bio}”
                            </p>
                        )}

                        {prof.location && (
                            <div className="location-div">
                                <span className="desc-prof" role="img" aria-label="Location">
                                    📍 {prof.location}
                                </span>
                            </div>
                        )}

                        {isHireable && (
                            <div className="opp-div">
                                <span className="desc-prof">Open for opportunities: Yes</span>
                            </div>
                        )}

                        <SocialMedia />
                    </div>

                    {/* Right: GitHub Avatar */}
                    <div className="image-content-profile">
                        <img
                            src={prof.avatarUrl}
                            alt={`Avatar of ${prof.name}`}
                            className="profile-image"
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>
        </Fade>
    );
}
