import { createContext, useState } from "react";

export const ThemeContext = createContext();


export function ThemeProvider({ children }) {

  const [theme, setTheme] = useState("white");


  function toggleTheme() {

    setTheme((prev) =>
      prev === "white" ? "black" : "white"
    );

  }


  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
