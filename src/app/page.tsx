"use client";

import {
  Title,
  Text,
  Stack,
  Paper,
  Badge,
  Group,
  Divider,
  Anchor,
  List,
  SimpleGrid,
  Box,
} from "@mantine/core";

// ── shared style tokens ─────────────────────────────────────────────
const MONO: React.CSSProperties = {
  fontFamily: "'JetBrains Mono', 'SF Mono', 'Fira Code', monospace",
};

const SURFACE: React.CSSProperties = {
  background: "rgba(255,255,255,0.025)",
  border: "1px solid rgba(255,255,255,0.07)",
};

const ACCENT_SURFACE: React.CSSProperties = {
  background: "rgba(34,211,238,0.06)",
  border: "1px solid rgba(34,211,238,0.2)",
};

const stats = [
  {
    key: "zero_click",
    value: "60%",
    label: "Zero-Click Rate",
    sub: "searches end without a click",
    color: "rgba(34,211,238,0.08)",
    border: "rgba(34,211,238,0.25)",
    accent: "#22d3ee",
  },
  {
    key: "ai_answers",
    value: "AI",
    label: "New Interpreter",
    sub: "platforms now summarise, not just list",
    color: "rgba(139,92,246,0.08)",
    border: "rgba(139,92,246,0.25)",
    accent: "#8b5cf6",
  },
  {
    key: "traffic",
    value: "↓",
    label: "Referral Traffic",
    sub: "publishers report measurable declines",
    color: "rgba(239,68,68,0.08)",
    border: "rgba(239,68,68,0.22)",
    accent: "#ef4444",
  },
];

const furtherReading = [
  {
    label: "The Guardian — Publishers fear AI search summaries mean the 'end of the traffic era'",
    href: "https://www.theguardian.com/media/2026/jan/12/publishers-fear-ai-search-summaries-and-chatbots-mean-end-of-traffic-era",
  },
  {
    label: "The Verge — Google's AI Mode update lets you open links without leaving the page",
    href: "https://www.theverge.com/tech/913109/google-ai-mode-tabs-sources",
  },
  {
    label: "Wired — Google's AI Mode update tries to kill tab hopping in Chrome",
    href: "https://www.wired.com/story/google-ai-mode-update-tries-to-kill-tab-hopping-in-chrome/",
  },
  {
    label: "Google Blog — Search and AI updates",
    href: "https://blog.google/innovation-and-ai/",
  },
  {
    label: "Journalism Practice — Newsrooms and Transparency in the Digital Age",
    href: "https://doi.org/10.1080/17512786.2014.924737",
  },
];

const references = [
  "Chadha, K., & Koliska, M. (2015). Newsrooms and transparency in the digital age. Journalism Practice, 9(2), 215–229. https://doi.org/10.1080/17512786.2014.924737",
  "Goode, L. (2009). Social news, citizen journalism and democracy. New Media & Society, 11(8), 1287–1305. https://doi.org/10.1177/1461444809341393",
  "The Guardian. (2026, January 12). Publishers fear AI search summaries and chatbots mean the end of the traffic era. https://www.theguardian.com/media/2026/jan/12/",
  "The Verge. (2026). Google's AI Mode update lets you open links without leaving the page. https://www.theverge.com/tech/913109/google-ai-mode-tabs-sources",
  "Wired. (2026). Google's AI Mode update tries to kill tab hopping in Chrome. https://www.wired.com/story/google-ai-mode-update-tries-to-kill-tab-hopping-in-chrome/",
];

// ── sub-components ──────────────────────────────────────────────────

function MonoLabel({ children, color = "rgba(34,211,238,0.7)" }: { children: React.ReactNode; color?: string }) {
  return (
    <Text
      size="xs"
      style={{
        ...MONO,
        color,
        textTransform: "uppercase",
        letterSpacing: "0.1em",
        fontWeight: 600,
      }}
    >
      {children}
    </Text>
  );
}

function SectionHeading({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <Group gap="md" align="flex-start" mb="lg">
      <Text style={{ ...MONO, color: "rgba(34,211,238,0.45)", fontSize: "0.75rem", marginTop: 6, minWidth: 28 }}>
        {index}
      </Text>
      <Box style={{ flex: 1, borderTop: "1px solid rgba(34,211,238,0.2)", paddingTop: 8 }}>
        <Title order={2} style={{ color: "rgba(255,255,255,0.95)", letterSpacing: "-0.01em" }}>
          {children}
        </Title>
      </Box>
    </Group>
  );
}

function VideoEmbed({ videoId, title, caption }: { videoId: string; title: string; caption: string }) {
  return (
    <Box>
      {/* terminal-style top bar */}
      <Box
        style={{
          background: "rgba(34,211,238,0.07)",
          border: "1px solid rgba(34,211,238,0.18)",
          borderBottom: "none",
          borderRadius: "4px 4px 0 0",
          padding: "8px 14px",
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Group gap={6}>
          <Box style={{ width: 10, height: 10, borderRadius: "50%", background: "rgba(239,68,68,0.6)" }} />
          <Box style={{ width: 10, height: 10, borderRadius: "50%", background: "rgba(251,191,36,0.6)" }} />
          <Box style={{ width: 10, height: 10, borderRadius: "50%", background: "rgba(34,211,238,0.5)" }} />
        </Group>
        <Text style={{ ...MONO, fontSize: "0.68rem", color: "rgba(34,211,238,0.5)", letterSpacing: "0.05em" }}>
          video:// {title.toLowerCase().replace(/\s+/g, "-")}
        </Text>
      </Box>

      {/* iframe */}
      <Box style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden", border: "1px solid rgba(34,211,238,0.18)", borderTop: "none", borderBottom: "none" }}>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: "none",
          }}
        />
      </Box>

      {/* caption bar */}
      <Box
        style={{
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(34,211,238,0.18)",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          borderRadius: "0 0 4px 4px",
          padding: "10px 14px",
        }}
      >
        <MonoLabel color="rgba(34,211,238,0.5)">// {caption}</MonoLabel>
      </Box>
    </Box>
  );
}

// ── page ────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <Stack gap={48} mt="xl">

      {/* ── Hero ── */}
      <Stack gap="lg">
        {/* breadcrumb-style meta */}
        <Group gap="xs" align="center">
          <MonoLabel color="rgba(34,211,238,0.6)">media</MonoLabel>
          <Text style={{ ...MONO, color: "rgba(255,255,255,0.2)", fontSize: "0.7rem" }}>/</Text>
          <MonoLabel color="rgba(34,211,238,0.6)">technology</MonoLabel>
          <Text style={{ ...MONO, color: "rgba(255,255,255,0.2)", fontSize: "0.7rem" }}>/</Text>
          <MonoLabel color="rgba(34,211,238,0.6)">ai-search</MonoLabel>
        </Group>

        <Title
          order={1}
          style={{
            fontSize: "clamp(1.7rem, 4.5vw, 2.6rem)",
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            color: "rgba(255,255,255,0.97)",
          }}
        >
          When Search Stops Sending Traffic:{" "}
          <span style={{ color: "#22d3ee" }}>How AI Summaries Are Reshaping the Web</span>
        </Title>

        <Box style={{ borderLeft: "2px solid rgba(34,211,238,0.3)", paddingLeft: 14 }}>
          <Text size="lg" style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.7, fontStyle: "italic" }}>
            For years, search worked as the front door of the web. That model is now being disrupted. With AI-generated summaries, users increasingly get answers without ever leaving the results page.
          </Text>
        </Box>

        <Divider color="rgba(255,255,255,0.06)" />

        {/* byline row */}
        <Group gap="xl" wrap="wrap">
          <Group gap="xs">
            <Box style={{ width: 6, height: 6, borderRadius: "50%", background: "#22d3ee", boxShadow: "0 0 6px #22d3ee" }} />
            <Text style={{ ...MONO, fontSize: "0.68rem", color: "rgba(255,255,255,0.4)", letterSpacing: "0.06em" }}>
              IS30380 · DIGITAL STORYTELLING
            </Text>
          </Group>
          <Text style={{ ...MONO, fontSize: "0.68rem", color: "rgba(255,255,255,0.25)", letterSpacing: "0.06em" }}>
            APR 2026
          </Text>
          <Text style={{ ...MONO, fontSize: "0.68rem", color: "rgba(255,255,255,0.25)", letterSpacing: "0.06em" }}>
            ~8 MIN READ
          </Text>
        </Group>
      </Stack>

      {/* ── Stats ── */}
      <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="md">
        {stats.map((s) => (
          <Box
            key={s.key}
            style={{
              background: s.color,
              border: `1px solid ${s.border}`,
              borderRadius: 4,
              padding: "20px 18px",
            }}
          >
            <Text
              style={{
                ...MONO,
                fontSize: "2.2rem",
                fontWeight: 700,
                color: s.accent,
                lineHeight: 1,
                marginBottom: 6,
              }}
            >
              {s.value}
            </Text>
            <Text style={{ ...MONO, fontSize: "0.65rem", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 4 }}>
              {s.label}
            </Text>
            <Text size="xs" style={{ color: "rgba(255,255,255,0.45)", lineHeight: 1.5 }}>
              {s.sub}
            </Text>
          </Box>
        ))}
      </SimpleGrid>

      {/* ── Core trade-off ── */}
      <Box style={{ ...SURFACE, borderRadius: 4, padding: "20px 20px" }}>
        <MonoLabel color="rgba(255,255,255,0.3)">// core-tradeoff.analysis</MonoLabel>
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md" mt="sm">
          <Box style={{ ...ACCENT_SURFACE, borderRadius: 4, padding: 16 }}>
            <MonoLabel color="#22d3ee">reader_experience</MonoLabel>
            <Text size="sm" style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginTop: 8 }}>
              Faster answers, fewer clicks, and less friction — when the search page feels complete on its own.
            </Text>
          </Box>
          <Box style={{ background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.18)", borderRadius: 4, padding: 16 }}>
            <MonoLabel color="#f87171">publisher_experience</MonoLabel>
            <Text size="sm" style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginTop: 8 }}>
              Fewer visits, weaker brand contact, and more dependence on whatever the platform chooses to surface.
            </Text>
          </Box>
        </SimpleGrid>
      </Box>

      {/* ── Section 01 ── */}
      <Box style={{ ...SURFACE, borderRadius: 4, padding: "28px 24px" }}>
        <SectionHeading index="01">Search used to send people outward</SectionHeading>
        <Stack gap="md">
          <Text style={{ lineHeight: 1.85, color: "rgba(255,255,255,0.72)", fontSize: "0.95rem" }}>
            The traditional search model was simple. A user typed a query, scanned a page of blue links, and clicked through to a website. Search engines acted as gateways, directing people toward publishers, blogs, forums, and official sources. That traffic mattered — it supported ad revenue, subscriptions, brand visibility, and the wider ecosystem of the open web.
          </Text>
          <Text style={{ lineHeight: 1.85, color: "rgba(255,255,255,0.72)", fontSize: "0.95rem" }}>
            This system was never fully neutral. Search rankings always shaped which sites were visible and which were buried. But even so, the dominant logic was <em style={{ color: "rgba(255,255,255,0.88)" }}>outward movement</em>: search pointed users away from the platform and toward the source.
          </Text>
          <Text style={{ lineHeight: 1.85, color: "rgba(255,255,255,0.72)", fontSize: "0.95rem" }}>
            That outward flow is now weakening. AI summaries increasingly answer the question before the user ever clicks, reducing the need to visit the original publisher at all.
          </Text>
        </Stack>
      </Box>

      {/* ── Pull quote ── */}
      <Box
        style={{
          borderLeft: "3px solid #22d3ee",
          paddingLeft: 24,
          paddingTop: 4,
          paddingBottom: 4,
        }}
      >
        <Text
          style={{
            fontSize: "1.2rem",
            fontWeight: 600,
            color: "rgba(255,255,255,0.88)",
            fontStyle: "italic",
            lineHeight: 1.6,
          }}
        >
          &ldquo;If users increasingly get what they need on the search page itself, publishers may lose not just clicks — but visibility, leverage, and revenue.&rdquo;
        </Text>
        <Text style={{ ...MONO, fontSize: "0.65rem", color: "rgba(34,211,238,0.5)", letterSpacing: "0.08em", marginTop: 10 }}>
          // CORE TENSION · AI SEARCH SUMMARIES &amp; ZERO-CLICK SEARCH
        </Text>
      </Box>

      {/* ── VIDEO 1 ── */}
      <VideoEmbed
        videoId="wd6CPDY6RVg"
        title="Google's AI Overviews: What They Mean for the Web"
        caption="How Google's AI search summaries work, why they were introduced, and what they mean for information consumption online."
      />

      {/* ── Section 02 ── */}
      <Box style={{ ...SURFACE, borderRadius: 4, padding: "28px 24px" }}>
        <SectionHeading index="02">What AI summaries change</SectionHeading>
        <Stack gap="md">
          <Text style={{ lineHeight: 1.85, color: "rgba(255,255,255,0.72)", fontSize: "0.95rem" }}>
            AI search summaries change the role of search from directory to interpreter. Instead of only listing sources, the platform now reads, condenses, and rewrites information into a direct answer. In practice, users can remain inside the search experience rather than moving outward to another website.
          </Text>

          {/* inline key insight */}
          <Box
            style={{
              background: "rgba(139,92,246,0.08)",
              border: "1px solid rgba(139,92,246,0.2)",
              borderRadius: 4,
              padding: "14px 16px",
            }}
          >
            <MonoLabel color="rgba(139,92,246,0.8)">key_insight</MonoLabel>
            <Text size="sm" style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.7, marginTop: 8 }}>
              The search engine is no longer simply helping users <em>find</em> content — it is increasingly becoming the place where content is <em>consumed</em> in summarised form.
            </Text>
          </Box>

          <Text style={{ lineHeight: 1.85, color: "rgba(255,255,255,0.72)", fontSize: "0.95rem" }}>
            This alters the economics of attention. If fewer readers click through, publishers lose page views, ad impressions, and opportunities to convert casual visitors into subscribers. Instead of comparing several sources, readers may accept the platform&apos;s composite answer as sufficient — especially when it appears fast, confident, and convenient.
          </Text>
        </Stack>
      </Box>

      {/* ── Section 03 ── */}
      <Box style={{ ...SURFACE, borderRadius: 4, padding: "28px 24px" }}>
        <SectionHeading index="03">Why publishers are worried</SectionHeading>
        <Stack gap="md">
          <Text style={{ lineHeight: 1.85, color: "rgba(255,255,255,0.72)", fontSize: "0.95rem" }}>
            For publishers, referral traffic is not just a vanity metric. It is a business model. News sites, specialist blogs, and digital magazines rely on search to bring in readers who may then view ads, sign up for newsletters, or become paying subscribers. If AI summaries satisfy the user before a click happens, that chain is broken.
          </Text>
          <Text style={{ lineHeight: 1.85, color: "rgba(255,255,255,0.72)", fontSize: "0.95rem" }}>
            Recent reporting has shown growing concern across the publishing industry that AI search could accelerate the decline of web traffic. The fear is not simply that platforms are evolving, but that they are keeping more value for themselves while relying on content produced elsewhere.
          </Text>
          <Text style={{ lineHeight: 1.85, color: "rgba(255,255,255,0.72)", fontSize: "0.95rem" }}>
            Larger brands may retain visibility because they are already recognised authorities. Smaller publishers, however, may find it harder to compete if they are summarised rather than visited — creating a more uneven web where attention concentrates around a smaller number of dominant players.
          </Text>
        </Stack>
      </Box>

      {/* ── VIDEO 2 ── */}
      <VideoEmbed
        videoId="C7lMo3ZoJMo"
        title="Are Publishers Losing the Battle Against AI Search?"
        caption="Journalists and media executives discuss the real-world impact of AI-generated search answers on referral traffic and newsroom economics."
      />

      {/* ── Section 04 ── */}
      <Box style={{ ...SURFACE, borderRadius: 4, padding: "28px 24px" }}>
        <SectionHeading index="04">The new gatekeepers of visibility</SectionHeading>
        <Stack gap="md">
          <Text style={{ lineHeight: 1.85, color: "rgba(255,255,255,0.72)", fontSize: "0.95rem" }}>
            AI summaries do not eliminate gatekeeping. In many ways, they intensify it. Search platforms are no longer only ranking links — they are selecting which sources to absorb, which claims to surface, and which framing to present to the user first.
          </Text>
          <Text style={{ lineHeight: 1.85, color: "rgba(255,255,255,0.72)", fontSize: "0.95rem" }}>
            This matters because visibility shapes credibility. If a source is linked less often, visited less often, and encountered mainly through a platform-generated summary, its relationship with the user becomes weaker. The platform becomes the primary point of trust, while the original source fades into the background.
          </Text>

          {/* closing pull quote */}
          <Box style={{ borderLeft: "2px solid rgba(255,255,255,0.15)", paddingLeft: 16, marginTop: 8 }}>
            <Text size="md" style={{ color: "rgba(255,255,255,0.8)", fontStyle: "italic", lineHeight: 1.7 }}>
              &ldquo;The question is no longer just what search finds. It is what search keeps.&rdquo;
            </Text>
          </Box>

          <Text style={{ lineHeight: 1.85, color: "rgba(255,255,255,0.72)", fontSize: "0.95rem" }}>
            The result is a more platform-dependent web. Readers may gain speed and convenience, but publishers risk losing direct connection with their audiences. Whether this represents progress or consolidation depends on which side of the click you are on.
          </Text>
        </Stack>
      </Box>

      <Divider color="rgba(255,255,255,0.05)" />

      {/* ── Further Reading ── */}
      <Box style={{ ...SURFACE, borderRadius: 4, padding: "24px 24px" }}>
        <MonoLabel color="rgba(34,211,238,0.6)">further_reading[]</MonoLabel>
        <Stack gap="xs" mt="md">
          {furtherReading.map((link) => (
            <Group key={link.href} gap="sm" align="flex-start" wrap="nowrap">
              <Text style={{ ...MONO, color: "rgba(34,211,238,0.4)", fontSize: "0.7rem", marginTop: 2, flexShrink: 0 }}>→</Text>
              <Anchor
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                size="sm"
                style={{ color: "rgba(34,211,238,0.8)", lineHeight: 1.6, textDecoration: "none" }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "#22d3ee"; e.currentTarget.style.textDecoration = "underline"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(34,211,238,0.8)"; e.currentTarget.style.textDecoration = "none"; }}
              >
                {link.label}
              </Anchor>
            </Group>
          ))}
        </Stack>
      </Box>

      {/* ── References ── */}
      <Box style={{ background: "rgba(255,255,255,0.012)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: 4, padding: "24px 24px" }}>
        <MonoLabel color="rgba(255,255,255,0.25)">references.apa</MonoLabel>
        <Stack gap="sm" mt="md">
          {references.map((ref, i) => (
            <Group key={i} gap="sm" align="flex-start" wrap="nowrap">
              <Text style={{ ...MONO, color: "rgba(255,255,255,0.15)", fontSize: "0.65rem", marginTop: 2, flexShrink: 0, minWidth: 20 }}>
                [{i + 1}]
              </Text>
              <Text size="xs" style={{ ...MONO, color: "rgba(255,255,255,0.3)", lineHeight: 1.7 }}>
                {ref}
              </Text>
            </Group>
          ))}
        </Stack>
      </Box>

    </Stack>
  );
}
