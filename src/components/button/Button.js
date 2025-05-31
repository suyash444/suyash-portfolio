import React from "react";
import "./Button.scss";

export default function Button({
    text,
    className = "",
    href = "#",
    newTab = false
}) {
    return (
        <div className={`button-wrapper ${className}`}>
            <a
                className="main-button"
                href={href}
                target={newTab ? "_blank" : "_self"}
                rel={newTab ? "noopener noreferrer" : undefined}
                role="button"
                aria-label={text}
            >
                {text}
            </a>
        </div>
    );
}
