"use client";

import "@mantine/core/styles.css";
import { MantineProvider, createTheme, Container, Box, Text, Group, Divider } from "@mantine/core";

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          background: "#080c12",
          backgroundImage: `
            linear-gradient(rgba(34,211,238,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,211,238,0.025) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      >
        <MantineProvider theme={theme} defaultColorScheme="dark">

          {/* Site header */}
          <Box
            style={{
              borderBottom: "1px solid rgba(34,211,238,0.15)",
              background: "rgba(8,12,18,0.95)",
              backdropFilter: "blur(8px)",
              position: "sticky",
              top: 0,
              zIndex: 100,
            }}
          >
            <Container size="md" py="sm">
              <Group justify="space-between" align="center">
                <Group gap="xs" align="center">
                  <Box
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: "#22d3ee",
                      boxShadow: "0 0 8px #22d3ee",
                    }}
                  />
                  <Text
                    style={{
                      fontFamily: "'JetBrains Mono', 'SF Mono', monospace",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                      color: "#22d3ee",
                      letterSpacing: "0.04em",
                    }}
                  >
                    SIGNAL/NOISE
                  </Text>
                  <Text
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.7rem",
                      color: "rgba(34,211,238,0.4)",
                      letterSpacing: "0.06em",
                    }}
                  >
                    // digital media & tech
                  </Text>
                </Group>
                <Text
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.65rem",
                    color: "rgba(255,255,255,0.25)",
                    letterSpacing: "0.08em",
                  }}
                >
                  IS30380 · 2026
                </Text>
              </Group>
            </Container>
          </Box>

          <Container size="md" py="xl" style={{ minHeight: "100vh" }}>
            {children}
          </Container>

          {/* Site footer */}
          <Box style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }} mt="xl">
            <Container size="md" py="lg">
              <Group justify="space-between" align="center" wrap="wrap">
                <Text style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", color: "rgba(255,255,255,0.2)", letterSpacing: "0.06em" }}>
                  SIGNAL/NOISE · IS30380 Digital Storytelling · 2026
                </Text>
                <Text style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", color: "rgba(34,211,238,0.3)", letterSpacing: "0.06em" }}>
                  EOF
                </Text>
              </Group>
            </Container>
          </Box>

        </MantineProvider>
      </body>
    </html>
  );
}
