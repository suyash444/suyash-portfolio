import React, { useState, useEffect, lazy, Suspense } from "react";
import { openSource } from "../../portfolio";
import Contact from "../contact/Contact";
import Loading from "../loading/Loading"; // optional, if you keep the 1s spinner

const GithubProfileCard = lazy(() =>
    import("../../components/githubProfileCard/GithubProfileCard")
);

export default function Profile() {
    const [prof, setProfile] = useState(null);

    useEffect(() => {
        if (openSource.showGithubProfile === "true") {
            fetch("/profile.json")
                .then((res) => (res.ok ? res.json() : null))
                .then((data) => {
                    if (data?.data?.user) {
                        setProfile(data.data.user);
                    } else {
                        console.warn("GitHub profile data invalid");
                        setProfile("Error");
                    }
                })
                .catch((error) => {
                    console.error("GitHub profile fetch failed:", error);
                    setProfile("Error");
                });
        }
    }, []);

    const isProfileValid =
        openSource.display &&
        openSource.showGithubProfile === "true" &&
        prof &&
        prof !== "Error";

    return isProfileValid ? (
        <Suspense fallback={<Loading />}>
            <GithubProfileCard prof={prof} key={prof.id} />
        </Suspense>
    ) : (
        <Contact />
    );
}
