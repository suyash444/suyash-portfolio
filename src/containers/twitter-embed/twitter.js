import React, { Suspense, useContext } from "react";
import "./twitter.scss";
import Loading from "../loading/Loading";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { twitterDetails } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Twitter() {
    const { isDark } = useContext(StyleContext);

    if (!twitterDetails.display || !twitterDetails.userName) {
        return null;
    }

    return (
        <Suspense fallback={<Loading />}>
            <div className="tw-main-div" id="twitter">
                <div className="twitter-embed-wrapper">
                    <TwitterTimelineEmbed
                        sourceType="profile"
                        screenName={twitterDetails.userName}
                        options={{
                            height: 400,
                            width: window.innerWidth < 600 ? 320 : 600
                        }}
                        placeholder={<Loading />}
                        theme={isDark ? "dark" : "light"}
                        noFooter={true}
                        noBorders={false}
                    />
                </div>
            </div>
        </Suspense>
    );
}
