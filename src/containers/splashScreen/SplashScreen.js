import React, { useContext } from "react";
import "./SplashScreen.css";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import { greeting, splashScreen } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function SplashScreen() {
    const { isDark } = useContext(StyleContext);

    return (
        <div
            className={`splash-container ${isDark ? "dark-mode" : ""}`}
            role="status"
            aria-label="Splash screen loading"
        >
            <div className="splash-animation-container">
                <DisplayLottie animationData={splashScreen.animation} />
            </div>

            <div className="splash-title-container">
                <span className="splash-angle">&lt;</span>
                <span className="splash-title">{greeting.username}</span>
                <span className="splash-angle">/&gt;</span>
            </div>
        </div>
    );
}
