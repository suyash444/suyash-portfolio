import React, { useContext } from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { illustration, contactInfo } from "../../portfolio";
import { Fade } from "react-reveal";
import email from "../../assets/lottie/email";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";
import contactIllustration from "../../assets/images/contactIllustration.png"; // <-- Added static import

export default function Contact() {
    const { isDark } = useContext(StyleContext);

    return (
        <Fade bottom duration={1000} distance="20px">
            <section className="main contact-margin-top" id="contact" aria-label="Contact Section">
                <div className="contact-div-main">
                    {/* Left Text Section */}
                    <div className="contact-header">
                        <h1 className="heading contact-title">{contactInfo.title}</h1>
                        <p className={`contact-subtitle ${isDark ? "dark-mode" : "subTitle"}`}>
                            {contactInfo.subtitle}
                        </p>

                        <div className={`contact-text-div ${isDark ? "dark-mode" : ""}`}>
                            {contactInfo.number && (
                                <>
                                    <a className="contact-detail" href={`tel:${contactInfo.number}`}>
                                        {contactInfo.number}
                                    </a>
                                    <br />
                                    <br />
                                </>
                            )}

                            {contactInfo.email_address && (
                                <>
                                    <a className="contact-detail-email" href={`mailto:${contactInfo.email_address}`}>
                                        {contactInfo.email_address}
                                    </a>
                                    <br />
                                    <br />
                                </>
                            )}

                            <SocialMedia />
                        </div>
                    </div>

                    {/* Right Lottie/Image Section */}
                    <div className="contact-image-div">
                        {illustration.animated ? (
                            <DisplayLottie animationData={email} />
                        ) : (
                            <img
                                src={contactIllustration} // <-- Updated to use the static import
                                alt="Contact illustration"
                                className="profile-photo"
                            />
                        )}
                    </div>
                </div>
            </section>
        </Fade>
    );
}
