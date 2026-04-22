"use client";

import {
  Title,
  Text,
  Stack,
  Group,
  Divider,
  Anchor,
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
  'Google. (2025, June 2). Meet AI Mode – Try a whole new way to search [Video]. YouTube. https://www.youtube.com/watch?v=0uVRHl9gAco',
  'Google Search Central. (2025, July 1). AI features in Search & your site, Search Console, SEO community insights (Q2 ’25) [Video]. YouTube. https://www.youtube.com/watch?v=MmOxK0nwtIc',
  'TowCenter. (2026, February 20). AI search and news [Video]. YouTube. https://www.youtube.com/watch?v=MsH_5rzTDb8',
  'What Happens To The Web When Search Abandons The Web? (n.d.). [Video]. YouTube. https://www.youtube.com/watch?v=5G6zA231RJc',
  'AI Mode vs. Top stories: Where news SEO wins (and loses) in 2026. (n.d.). [Video]. YouTube. https://www.youtube.com/watch?v=RwPE9Zj6aSU',
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
        <MonoLabel color="rgba(34,211,238,0.5)">{"// "}{caption}</MonoLabel>
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
            Search was the gateway to the internet for decades. However, this is no longer the case, with search results providing AI-powered summaries that answer questions without needing to leave the page at all.          </Text>
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
            VARUN HAMEER DUTIA · 25205952
          </Text>
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
        <MonoLabel color="rgba(255,255,255,0.3)">{"// core-tradeoff.analysis"}</MonoLabel>
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
            This was the case for decades in terms of how you searched the internet. You would type something into your search engine of choice, get results back, and then select where you wanted to go from there. The search engines themselves rarely provided an answer, serving more as a gateway to information that would take you somewhere else, whether that be articles, discussion forums, government agencies, or independently owned sites.          </Text>
          <Text style={{ lineHeight: 1.85, color: "rgba(255,255,255,0.72)", fontSize: "0.95rem" }}>
            That system was never completely neutral. Visibility depended on ranking, which always shaped who was seen and who was ignored. Even so, the basic logic remained outward-facing: search results were designed to send users to the original source.
          </Text>
          <Text style={{ lineHeight: 1.85, color: "rgba(255,255,255,0.72)", fontSize: "0.95rem" }}>
            This paradigm is shifting. The presence of AI-generated answers on the results page makes it easier for users to obtain what they are looking for without even going to the actual source. An attention-spreading system is gradually evolving into one that holds back more attention than before.          </Text>
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
          &ldquo;If users start to satisfy their needs directly from the search results page, the publishers could end up not only losing clicks – but even more importantly, visibility, leverage, and money.&rdquo;
        </Text>
        <Text style={{ ...MONO, fontSize: "0.65rem", color: "rgba(34,211,238,0.5)", letterSpacing: "0.08em", marginTop: 10 }}>
          {"// CORE TENSION · AI SEARCH SUMMARIES & ZERO-CLICK SEARCH"}
        </Text>
      </Box>

      {/* ── VIDEO 1 ── */}
      <VideoEmbed
        videoId="0uVRHl9gAco"
        title="Meet AI Mode – Try a whole new way to search"
        caption="Google frames AI search as a faster answer experience with follow-up questions and web links, showing how search is shifting from directory to interpreter."
      />

      {/* ── Section 02 ── */}
      <Box style={{ ...SURFACE, borderRadius: 4, padding: "28px 24px" }}>
        <SectionHeading index="02">What AI summaries change</SectionHeading>
        <Stack gap="md">
          <Text style={{ lineHeight: 1.85, color: "rgba(255,255,255,0.72)", fontSize: "0.95rem" }}>
            The function of search is altered by the AI-powered summarization. It no longer acts merely as an agent that helps the user find the necessary data; the search engine now interprets it, summarizes, and presents it. Often, the user does not have to go to several different pages to obtain an informative reply.          </Text>
          <Text style={{ lineHeight: 1.85, color: "rgba(255,255,255,0.72)", fontSize: "0.95rem" }}>
            Google&apos;s This is where AI mode really stands out. It offers search in an interactive dialogue format whereby you get more refined responses the more you refine your questions. Source links are there, but they do not dominate the process anymore. What comes first is the answer, while the source takes second place. </Text>

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
              Search engines are not just being used by people for finding information anymore; they are also increasingly using them for consuming information on the results page. The search engine that once served as the gateway to the internet is now turning into a destination site. This is important because more attention and credits are being earned even before reaching the publisher’s website.            </Text>
          </Box>

          <Text style={{ lineHeight: 1.85, color: "rgba(255,255,255,0.72)", fontSize: "0.95rem" }}>
            It alters how attention is allocated on the internet. With fewer clicks comes less page views for content providers, which leads to less advertisement exposure and less chances of converting occasional viewers into dedicated followers. Moreover, it can imply greater dependency on the context provided by the platform for a particular topic, which is swift and self-assured.          </Text>
        </Stack>
      </Box>

      {/* ── Section 03 ── */}
      <Box style={{ ...SURFACE, borderRadius: 4, padding: "28px 24px" }}>
        <SectionHeading index="03">Why publishers are worried</SectionHeading>
        <Stack gap="md">
          <Text style={{ lineHeight: 1.85, color: "rgba(255,255,255,0.72)", fontSize: "0.95rem" }}>
            Referral traffic is not vanity traffic for most publishers. It is a crucial factor in how many newsrooms, niche publications, and culture sites stay alive. They attract visitors who will potentially see their advertisements, become subscribers to their newsletters, or even subscribe to their publication. When an AI tool answers their query without redirecting them, this value stream gets disrupted.          </Text>
          <Text style={{ lineHeight: 1.85, color: "rgba(255,255,255,0.72)", fontSize: "0.95rem" }}>
            As people continue to use AI-powered interfaces, publishers give up not only views but also direct connections to their audience and the chance to create trust and manage the presentation of their material. Publishers no longer create value but merely collect and condense it into something else.          </Text>
          <Text style={{ lineHeight: 1.85, color: "rgba(255,255,255,0.72)", fontSize: "0.95rem" }}>
            This is particularly significant since AI responses will vie for attention with the format of “Top Stories,” an old model of journalism which used to emphasize the importance of publishers. In highlighting their own summaries, they also redefine who gets their name out there and earns profits. What is immediately shown on the platform may not even be the source organization itself.          </Text>
          <Text style={{ lineHeight: 1.85, color: "rgba(255,255,255,0.72)", fontSize: "0.95rem" }}>
            Big brands can maintain their visibility due to user awareness. On the other hand, smaller brands are extremely exposed when summary replaces visit. This means that the future will have even more traffic flowing through very big portals that mediate the visit.          </Text>
        </Stack>
      </Box>

      {/* ── VIDEO 2 ── */}
      <VideoEmbed
        videoId="MsH_5rzTDb8"
        title="AI Search and News"
        caption="A news-focused explanation of why AI answers are not just a UX shift but a publisher visibility and media-economics issue."
      />

      {/* ── Section 04 ── */}
      <Box style={{ ...SURFACE, borderRadius: 4, padding: "28px 24px" }}>
        <SectionHeading index="04">The new gatekeepers of visibility</SectionHeading>
        <Stack gap="md">
          <Text style={{ lineHeight: 1.85, color: "rgba(255,255,255,0.72)", fontSize: "0.95rem" }}>
            Visibility has always been influenced by design on the platform itself, but with the use of AI summary generation, the control becomes more concentrated. The issue is not only what page ranks at the top but also what information gets chosen, which words are repeated verbatim, and the framing of the issue.          </Text>
          <Text style={{ lineHeight: 1.85, color: "rgba(255,255,255,0.72)", fontSize: "0.95rem" }}>
            It is important because the visibility affects the degree of trust. When a user finds information through a summarized version instead of the information being directly provided, the connection is created not to the publisher but to the intermediary that provides the answer.          </Text>

          {/* closing pull quote */}
          <Box style={{ borderLeft: "2px solid rgba(255,255,255,0.15)", paddingLeft: 16, marginTop: 8 }}>
            <Text size="md" style={{ color: "rgba(255,255,255,0.8)", fontStyle: "italic", lineHeight: 1.7 }}>
              &ldquo;The question is no longer just what search finds. It is what search keeps.&rdquo;
            </Text>
          </Box>

          <Text style={{ lineHeight: 1.85, color: "rgba(255,255,255,0.72)", fontSize: "0.95rem" }}>
            This is advantageous to readers, who gain both speed and efficiency, but disadvantageous to platforms, which will wield even more power over discoverability than they already do. What is an improvement from one point of view is a limitation from another.          </Text>
        </Stack>
      </Box>

      {/* ── Section 05 ── */}
      <Box style={{ ...SURFACE, borderRadius: 4, padding: "28px 24px" }}>
        <SectionHeading index="05">What readers gain and lose</SectionHeading>
        <Stack gap="md">
          <Text style={{ lineHeight: 1.85, color: "rgba(255,255,255,0.72)", fontSize: "0.95rem" }}>
            For the reader, the benefit is self-explanatory. In terms of ease of use, efficiency, and engagement, the convenience offered by AI-driven summaries cannot be understated. Rather than having to open multiple pages to formulate a response, users are able to get their answers instantly and even follow up with further queries.          </Text>
          <Text style={{ lineHeight: 1.85, color: "rgba(255,255,255,0.72)", fontSize: "0.95rem" }}>
            However, there are also downsides. The information may lack context, miss out on some aspects, and reduce everything to a concise summary of what is actually an open question or issue. With less frequent visits to the original source material, readers also fail to get to know the evidence or the range of opinions used to compile the summary.          </Text>
        </Stack>
      </Box>

      {/* ── Section 06 ── */}
      <Box style={{ ...SURFACE, borderRadius: 4, padding: "28px 24px" }}>
        <SectionHeading index="06">What this means for smaller publishers</SectionHeading>
        <Stack gap="md">
          <Text style={{ lineHeight: 1.85, color: "rgba(255,255,255,0.72)", fontSize: "0.95rem" }}>
            The small publishing companies are really threatened by the increase in the usage of AI summary generation tools. Search engines play an important role for independent websites, community journalism websites, and other specialized websites that do not have any prominent reputation. In case there is less traffic from search engine pages, these sites could easily become invisible.          </Text>
          <Text style={{ lineHeight: 1.85, color: "rgba(255,255,255,0.72)", fontSize: "0.95rem" }}>
            This transformation will not affect everyone equally. Famous names will always continue to receive attention since most individuals are aware of their identity, whereas lesser-known artists may suffer from a loss of views, exposure, and earnings even if they were instrumental in the development of the summary. This will ultimately result in greater consolidation on the internet.          </Text>
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
