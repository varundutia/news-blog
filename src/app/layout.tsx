import "@mantine/core/styles.css";
import "./globals.css";
import { Container, Box, Text, Group } from "@mantine/core";
import Providers from "./providers";

export const metadata = {
  title: "SIGNAL/NOISE",
  description: "Digital media & tech",
};

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
        <Providers>

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

        </Providers>
      </body>
    </html>
  );
}
