import React, { useState, useEffect } from "react";

// Create a context with default values
const StyleContext = React.createContext({
    isDark: false,
    changeTheme: () => { }
});

// Provider component to wrap your app
export const StyleProvider = ({ children }) => {
    const darkPref = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [isDark, setIsDark] = useState(darkPref);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const handleChange = () => setIsDark(mediaQuery.matches);
        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    const changeTheme = () => {
        setIsDark((prev) => !prev);
    };

    return (
        <StyleContext.Provider value={{ isDark, changeTheme }}>
            {children}
        </StyleContext.Provider>
    );
};

export default StyleContext;
