import React from "react";
import Lottie from "lottie-react";

export default function DisplayLottie({
    animationData,
    loop = true,
    autoplay = true,
    style = {}
}) {
    return (
        <Lottie
            animationData={animationData}
            loop={loop}
            autoplay={autoplay}
            style={{
                maxWidth: "100%",
                height: "auto",
                display: "block",
                margin: "0 auto",
                ...style
            }}
        />
    );
}
