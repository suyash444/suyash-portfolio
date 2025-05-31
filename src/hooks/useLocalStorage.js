import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
    // Initialize state with value from localStorage or fallback to initialValue
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = localStorage.getItem(key);
            return item !== null ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error("Error reading localStorage:", error);
            return initialValue;
        }
    });

    // Function to update state and localStorage
    const setValue = (value) => {
        try {
            const valueToStore =
                typeof value === "function" ? value(storedValue) : value;
            setStoredValue(valueToStore);
            localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.error("Error setting localStorage:", error);
        }
    };

    return [storedValue, setValue];
};
