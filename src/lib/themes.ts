export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  highlight: string;
  muted: string;
  background: string;
  foreground: string;
  card: string;
  border: string;
}

export interface ThemePreset {
  name: string;
  colors: ThemeColors;
}

export const THEME_PRESETS: Record<string, ThemePreset> = {
  ocean: {
    name: "Ocean",
    colors: {
      primary: "#0077b6",
      secondary: "#023e8a",
      accent: "#00b4d8",
      highlight: "#48cae4",
      muted: "#90e0ef",
      background: "#0a0a0a",
      foreground: "#fafafa",
      card: "rgba(255,255,255,0.02)",
      border: "rgba(255,255,255,0.08)",
    },
  },
  midnight: {
    name: "Midnight",
    colors: {
      primary: "#7c3aed",
      secondary: "#4c1d95",
      accent: "#a78bfa",
      highlight: "#c4b5fd",
      muted: "#ddd6fe",
      background: "#0f0f0f",
      foreground: "#fafafa",
      card: "rgba(255,255,255,0.02)",
      border: "rgba(255,255,255,0.08)",
    },
  },
  sunset: {
    name: "Sunset",
    colors: {
      primary: "#f97316",
      secondary: "#c2410c",
      accent: "#fb923c",
      highlight: "#fdba74",
      muted: "#fed7aa",
      background: "#0a0a0a",
      foreground: "#fafafa",
      card: "rgba(255,255,255,0.02)",
      border: "rgba(255,255,255,0.08)",
    },
  },
  forest: {
    name: "Forest",
    colors: {
      primary: "#059669",
      secondary: "#065f46",
      accent: "#10b981",
      highlight: "#34d399",
      muted: "#6ee7b7",
      background: "#0a0a0a",
      foreground: "#fafafa",
      card: "rgba(255,255,255,0.02)",
      border: "rgba(255,255,255,0.08)",
    },
  },
  rose: {
    name: "Rose",
    colors: {
      primary: "#e11d48",
      secondary: "#9f1239",
      accent: "#f43f5e",
      highlight: "#fb7185",
      muted: "#fda4af",
      background: "#0a0a0a",
      foreground: "#fafafa",
      card: "rgba(255,255,255,0.02)",
      border: "rgba(255,255,255,0.08)",
    },
  },
  monochrome: {
    name: "Monochrome",
    colors: {
      primary: "#525252",
      secondary: "#262626",
      accent: "#737373",
      highlight: "#a3a3a3",
      muted: "#d4d4d4",
      background: "#0a0a0a",
      foreground: "#fafafa",
      card: "rgba(255,255,255,0.02)",
      border: "rgba(255,255,255,0.08)",
    },
  },
};

export function createThemeFromCoolors(hexCodes: string[]): ThemeColors {
  const [primary, secondary, accent, highlight, muted] = hexCodes;
  return {
    primary: primary || "#0077b6",
    secondary: secondary || "#023e8a",
    accent: accent || "#00b4d8",
    highlight: highlight || "#48cae4",
    muted: muted || "#90e0ef",
    background: "#0a0a0a",
    foreground: "#fafafa",
    card: "rgba(255,255,255,0.02)",
    border: "rgba(255,255,255,0.08)",
  };
}

export function parseCoolorsUrl(url: string): string[] {
  const match = url.match(/coolors\.co\/([a-f0-9-]+)/i);
  if (!match) return [];
  return match[1].split("-").map((hex) => `#${hex}`);
}

export function getGradient(colors: ThemeColors, type: "primary" | "secondary" | "accent" = "primary"): string {
  switch (type) {
    case "primary":
      return `linear-gradient(to right, ${colors.primary}, ${colors.secondary})`;
    case "secondary":
      return `linear-gradient(to right, ${colors.accent}, ${colors.primary})`;
    case "accent":
      return `linear-gradient(to bottom, ${colors.highlight}, ${colors.primary})`;
  }
}

export function getSectionGradient(colors: ThemeColors): string {
  return `linear-gradient(to bottom right, ${colors.secondary}15, transparent, ${colors.primary}10)`;
}

export function getGlowColor(colors: ThemeColors): string {
  return `${colors.primary}40`;
}
