import { createContext, useContext, useState, type ReactNode } from "react";
import { THEME_PRESETS, type ThemeColors, createThemeFromCoolors, parseCoolorsUrl } from "../lib/themes";

interface ThemeContextType {
  colors: ThemeColors;
  themeName: string;
  setTheme: (name: string) => void;
  setCustomTheme: (coolorsUrl: string) => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

interface ThemeProviderProps {
  children: ReactNode;
  initialTheme?: string;
}

export function ThemeProvider({ children, initialTheme = "ocean" }: ThemeProviderProps) {
  const [themeName, setThemeName] = useState(initialTheme);
  const [colors, setColors] = useState<ThemeColors>(
    THEME_PRESETS[initialTheme]?.colors || THEME_PRESETS.ocean.colors
  );

  const setTheme = (name: string) => {
    const preset = THEME_PRESETS[name];
    if (preset) {
      setThemeName(name);
      setColors(preset.colors);
    }
  };

  const setCustomTheme = (coolorsUrl: string) => {
    const hexCodes = parseCoolorsUrl(coolorsUrl);
    if (hexCodes.length >= 5) {
      setThemeName("custom");
      setColors(createThemeFromCoolors(hexCodes));
    }
  };

  return (
    <ThemeContext.Provider value={{ colors, themeName, setTheme, setCustomTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
