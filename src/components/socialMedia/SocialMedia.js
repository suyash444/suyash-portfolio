import React from "react";
import "./SocialMedia.scss";
import { socialMediaLinks } from "../../portfolio";

export default function SocialMedia() {
    if (!socialMediaLinks.display) return null;

    const icons = [
        { name: "github", icon: "fab fa-github" },
        { name: "linkedin", icon: "fab fa-linkedin-in" },
        { name: "gmail", icon: "fas fa-envelope", isEmail: true },
        { name: "gitlab", icon: "fab fa-gitlab" },
        { name: "facebook", icon: "fab fa-facebook-f" },
        { name: "instagram", icon: "fab fa-instagram" },
        { name: "twitter", icon: "fab fa-twitter" },
        { name: "medium", icon: "fab fa-medium" },
        { name: "stackoverflow", icon: "fab fa-stack-overflow" },
        { name: "kaggle", icon: "fab fa-kaggle" },
    ];

    return (
        <div className="social-media-div" aria-label="Social Media Links">
            {icons.map(({ name, icon, isEmail }) => {
                const value = socialMediaLinks[name];
                if (!value) return null;

                const href = isEmail ? `mailto:${value}` : value;
                return (
                    <a
                        key={name}
                        href={href}
                        className={`icon-button ${name}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={name}
                    >
                        <i className={icon} aria-hidden="true"></i>
                        <span></span>
                    </a>
                );
            })}
        </div>
    );
}
