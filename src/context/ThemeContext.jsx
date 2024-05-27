import { createContext, useContext, useState } from "react";

const themes = {
  light: {
    background: "#F5F7F8",
    color: "#31363F",
  },
  dark: {
    background: "hsl(207, 26%, 17%)",
    color: "#F5F7F8",
  },
};

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState("light");
  const [themeName, setThemeName] = useState("Dark");
  const [lightMode, setLightMode] = useState(true);

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");
    setThemeName(themeName === "Dark" ? "Light" : "Dark");
    setLightMode(lightMode === true ? false : true);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: themes[currentTheme],
        toggleTheme,
        themeName,
        lightMode,
        setLightMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
