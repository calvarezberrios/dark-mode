import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (initialValue) => {
    const [isEnabled, setIsEnabled] = useLocalStorage("dark-mode", initialValue);

    useEffect(() => {
        if(isEnabled) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    }, [isEnabled]);

    const setDarkMode = value => {
        setIsEnabled(value);
    }

    return [isEnabled, setDarkMode];
}