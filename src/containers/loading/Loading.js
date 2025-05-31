import React, { useEffect, useState } from "react";
import "./loading.scss";

export default function Loading() {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    if (!visible) return null;

    return (
        <div className="spinner-wrapper" role="status" aria-label="Loading">
            <svg className="spinner" viewBox="0 0 50 50" aria-hidden="true">
                <circle
                    className="spinner-path"
                    cx="25"
                    cy="25"
                    r="20"
                    fill="none"
                    strokeWidth="5"
                />
            </svg>
        </div>
    );
}
