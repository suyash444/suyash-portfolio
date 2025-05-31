import React from "react";
import "./GithubRepoCard.scss";
import { Fade } from "react-reveal";
import { formatFileSizeDisplay } from "../../utils";

export default function GithubRepoCard({ repo }) {
    const {
        name,
        url,
        description,
        primaryLanguage,
        forkCount,
        stargazers,
        diskUsage,
        id
    } = repo.node;

    const openUrlInNewTab = (url, name) => {
        if (!url) {
            console.warn(`URL for ${name} is undefined`);
            return;
        }
        const win = window.open(url, "_blank", "noopener,noreferrer");
        win?.focus();
    };

    return (
        <Fade bottom duration={1000} distance="20px">
            <div
                className="repo-card-div"
                key={id}
                role="button"
                tabIndex={0}
                onClick={() => openUrlInNewTab(url, name)}
                onKeyDown={(e) => e.key === "Enter" && openUrlInNewTab(url, name)}
                aria-label={`GitHub repository: ${name}`}
            >
                <div className="repo-name-div">
                    <svg
                        aria-hidden="true"
                        className="octicon repo-svg"
                        height="20"
                        viewBox="0 0 12 16"
                        width="14"
                    >
                        <path
                            fillRule="evenodd"
                            d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1z"
                        />
                    </svg>
                    <p className="repo-name">{name}</p>
                </div>

                {description && <p className="repo-description">{description}</p>}

                <div className="repo-stats">
                    <div className="repo-left-stat">
                        {primaryLanguage && (
                            <span className="language-tag">
                                <span
                                    className="language-color"
                                    style={{ backgroundColor: primaryLanguage.color }}
                                ></span>
                                <p>{primaryLanguage.name}</p>
                            </span>
                        )}
                        <span className="repo-stat">
                            <svg className="repo-stat-icon" width="12" viewBox="0 0 10 16">
                                <path
                                    fillRule="evenodd"
                                    d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1z"
                                />
                            </svg>
                            <p>{forkCount}</p>
                        </span>
                        <span className="repo-stat">
                            <svg className="repo-stat-icon" width="14" viewBox="0 0 14 16">
                                <path
                                    fillRule="evenodd"
                                    d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"
                                />
                            </svg>
                            <p>{stargazers.totalCount}</p>
                        </span>
                    </div>
                    <div className="repo-right-stat">
                        <p>{formatFileSizeDisplay(diskUsage)}</p>
                    </div>
                </div>
            </div>
        </Fade>
    );
}
