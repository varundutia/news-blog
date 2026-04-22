"use client";

import { MantineProvider, createTheme } from "@mantine/core";

const theme = createTheme({
  colors: {
    accent: [
      "#e0faff",
      "#b8f0fb",
      "#8ae5f5",
      "#5cdaef",
      "#2ecce8",
      "#22d3ee",
      "#0fb9d4",
      "#0a9ab3",
      "#077a8e",
      "#055b6a",
    ],
  },
  primaryColor: "accent",
  defaultRadius: "xs",
  fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, sans-serif",
  headings: {
    fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, sans-serif",
    fontWeight: "700",
    sizes: {
      h1: { fontSize: "2.25rem", lineHeight: "1.15" },
      h2: { fontSize: "1.35rem", lineHeight: "1.3" },
      h3: { fontSize: "1.1rem", lineHeight: "1.4" },
    },
  },
  fontSizes: {
    xs: "0.7rem",
    sm: "0.85rem",
    md: "0.95rem",
    lg: "1.05rem",
    xl: "1.2rem",
  },
  spacing: {
    xs: "0.5rem",
    sm: "0.75rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
  },
});

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      {children}
    </MantineProvider>
  );
}
