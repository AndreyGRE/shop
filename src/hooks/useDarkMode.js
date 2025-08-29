import { useState, useEffect, useCallback } from "react";

export default function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window === "undefined" || typeof window.localStorage === "undefined") {
      return false;
    }
    const savedTheme = window.localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const toggleDarkMode = useCallback(() => {
    setIsDarkMode(prev => {
      const newMode = !prev;
      if (
        typeof document !== "undefined" &&
        typeof window !== "undefined" &&
        typeof window.localStorage !== "undefined"
      ) {
        const html = document.documentElement;
        if (newMode) {
          html.classList.add("dark");
          window.localStorage.setItem("theme", "dark");
        } else {
          html.classList.remove("dark");
          window.localStorage.setItem("theme", "light");
        }
      }
      return newMode;
    });
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      const html = document.documentElement;
      if (isDarkMode) {
        html.classList.add("dark");
      } else {
        html.classList.remove("dark");
      }
    }
  }, [isDarkMode]);

  return { isDarkMode, toggleDarkMode };
}