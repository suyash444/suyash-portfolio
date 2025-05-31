import React, { useEffect } from "react";
import "./Top.scss";

export default function Top() {
    useEffect(() => {
        const scrollFunction = () => {
            const button = document.getElementById("topButton");
            if (!button) return;

            if (
                document.body.scrollTop > 20 ||
                document.documentElement.scrollTop > 20
            ) {
                button.style.visibility = "visible";
            } else {
                button.style.visibility = "hidden";
            }
        };

        // Add scroll listener
        window.addEventListener("scroll", scrollFunction);
        scrollFunction(); // Check on load

        // Clean up
        return () => window.removeEventListener("scroll", scrollFunction);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            onClick={scrollToTop}
            id="topButton"
            title="Go to top"
            aria-label="Scroll to top"
        >
            <i className="fas fa-hand-point-up" aria-hidden="true"></i>
        </button>
    );
}
