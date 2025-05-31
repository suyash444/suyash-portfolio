import React, { useState, useEffect, useContext, Suspense, lazy } from "react";
import "./Project.scss";

import { openSource, socialMediaLinks } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import Loading from "../../containers/loading/Loading"; //  spinner
import Button from "../../components/button/Button";

const GithubRepoCard = lazy(() =>
    import("../../components/githubRepoCard/GithubRepoCard")
);

export default function Projects() {
    const { isDark } = useContext(StyleContext);
    const [repo, setRepo] = useState([]);

    useEffect(() => {
        fetch("/profile.json")
            .then((result) => (result.ok ? result.json() : Promise.reject(result)))
            .then((response) => {
                if (response?.data?.user?.pinnedItems?.edges) {
                    setRepo(response.data.user.pinnedItems.edges);
                } else {
                    console.warn("GitHub pinned projects not found");
                    setRepo("Error");
                }
            })
            .catch((error) => {
                console.error("GitHub project fetch error:", error);
                setRepo("Error");
            });
    }, []);

    const isValidRepo =
        Array.isArray(repo) &&
        openSource.display;

    return isValidRepo ? (
        <Suspense fallback={<Loading />}>
            <div className="main" id="opensource">
                <h1 className={`project-title ${isDark ? "dark-mode" : ""}`}>
                    Open Source Projects
                </h1>

                <div className="repo-cards-div-main">
                    {repo.map((v, i) => {
                        if (!v || !v.node) {
                            console.warn(`Repo at index ${i} is invalid.`);
                            return null;
                        }
                        return <GithubRepoCard repo={v} key={v.node.id} isDark={isDark} />;
                    })}
                </div>

                <Button
                    text="More Projects"
                    className="project-button"
                    href={socialMediaLinks.github}
                    newTab={true}
                />
            </div>
        </Suspense>
    ) : null;
}
