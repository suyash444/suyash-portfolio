import React from "react";
import "./AchievementCard.scss";

export default function AchievementCard({ cardInfo }) {
    const openUrlInNewTab = (url, name) => {
        if (!url) {
            console.warn(`URL for ${name} not found`);
            return;
        }
        const win = window.open(url, "_blank", "noopener,noreferrer");
        if (win) win.focus();
    };

    return (
        <div className="certificate-card">
            <div className="certificate-image-div">
                <img
                    src={cardInfo.image}
                    alt={cardInfo.imageAlt || "Certificate Image"}
                    className="card-image"
                    loading="lazy"
                />
            </div>

            <div className="certificate-detail-div">
                <h3 className="card-title">{cardInfo.title}</h3>
                <p className="card-subtitle">{cardInfo.description}</p>
            </div>

            {cardInfo.footer?.length > 0 && (
                <div className="certificate-card-footer">
                    {cardInfo.footer.map((item, index) => (
                        <button
                            key={index}
                            className="certificate-tag"
                            onClick={() => openUrlInNewTab(item.url, item.name)}
                        >
                            {item.name}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
