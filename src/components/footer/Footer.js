import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);

  return (
    <Fade bottom duration={1000} distance="5px">
      <footer className="footer-div" aria-label="Footer Section">
        <p className={`footer-text ${isDark ? "dark-mode" : ""}`}>
          <strong>Suyash Singh</strong> — Software Engineer & Data Scientist
        </p>
        <p className={`footer-text ${isDark ? "dark-mode" : ""}`}>
          Building scalable solutions with Python, C#, Machine Learning, and
          Cloud platforms (GCP, AWS).
        </p>
      </footer>
    </Fade>
  );
}
