import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(() => {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    })

    const setLocalStorage = value => {
        localStorage.setItem(key, JSON.stringify(value));
        setValue(value);
    }

    return [value, setLocalStorage];
}