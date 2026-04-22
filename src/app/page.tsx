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
            For a long time, searching the web followed a familiar pattern. You typed a query, scanned a list of links, and chose where to go next. Search engines did not usually provide the answer themselves; they acted as gateways, directing people to articles, forums, public institutions, and independent websites. Those visits were not just traffic metrics. Each click supported advertising revenue, subscriptions, brand recognition, and the broader sustainability of the open web.
          </Text>
          <Text style={{ lineHeight: 1.85, color: "rgba(255,255,255,0.72)", fontSize: "0.95rem" }}>
            That system was never completely neutral. Visibility depended on ranking, which always shaped who was seen and who was ignored. Even so, the basic logic remained outward-facing: search results were designed to send users to the original source.
          </Text>
          <Text style={{ lineHeight: 1.85, color: "rgba(255,255,255,0.72)", fontSize: "0.95rem" }}>
            That pattern is now changing. As AI-generated answers appear directly on the results page, users are increasingly able to get what they need without visiting the source at all. A system that once distributed attention across the web is starting to keep more of it for itself.
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
            AI summaries change the role of search itself. Instead of simply pointing users toward information, search platforms now interpret, condense, and present that information on the page. In many cases, users no longer need to open multiple tabs or compare several sources before getting a useful response. Search becomes less about navigation and more about immediate explanation.
          </Text>
          <Text style={{ lineHeight: 1.85, color: "rgba(255,255,255,0.72)", fontSize: "0.95rem" }}>
            Google&apos;s AI Mode makes that shift especially visible. It presents search as a conversational, back-and-forth experience in which users refine questions and receive increasingly tailored answers. Links to source material are still present, but they are no longer the centre of the experience. The answer comes first; the source becomes secondary.
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
              People are no longer using search only to find information; they are increasingly consuming it on the results page itself. What used to function as a doorway to the web is becoming a destination in its own right. That matters because attention, credit, and traffic are now captured earlier in the process, often before a publisher&apos;s page is ever opened.
            </Text>
          </Box>

          <Text style={{ lineHeight: 1.85, color: "rgba(255,255,255,0.72)", fontSize: "0.95rem" }}>
            This changes how attention is distributed online. Fewer clicks mean less traffic for publishers, fewer ad impressions, and fewer opportunities to turn casual readers into loyal subscribers. It also means users may rely more heavily on the platform&apos;s framing of an issue, especially when that framing is fast, confident, and convenient.
          </Text>
        </Stack>
      </Box>

      {/* ── Section 03 ── */}
      <Box style={{ ...SURFACE, borderRadius: 4, padding: "28px 24px" }}>
        <SectionHeading index="03">Why publishers are worried</SectionHeading>
        <Stack gap="md">
          <Text style={{ lineHeight: 1.85, color: "rgba(255,255,255,0.72)", fontSize: "0.95rem" }}>
            Referral traffic is not a vanity metric for most publishers. It is a key part of how many newsrooms, specialist outlets, and cultural sites survive. Search brings in readers who may view ads, sign up for newsletters, or eventually subscribe. When AI tools answer questions without sending those readers through, that chain of value is interrupted.
          </Text>
          <Text style={{ lineHeight: 1.85, color: "rgba(255,255,255,0.72)", fontSize: "0.95rem" }}>
            When readers stay inside AI interfaces, publishers lose more than page views. They lose direct relationships with audiences, opportunities to build trust, and control over how their work is encountered. Value is increasingly captured by platforms that aggregate and summarise content rather than produce it.
          </Text>
          <Text style={{ lineHeight: 1.85, color: "rgba(255,255,255,0.72)", fontSize: "0.95rem" }}>
            This is especially significant when AI-generated answers compete with formats like Top Stories, which historically directed attention toward publishers more clearly. As platforms foreground their own summaries, they also reshape who receives visibility, recognition, and ultimately revenue. The first thing a user sees may no longer be the organisation that did the original reporting.
          </Text>
          <Text style={{ lineHeight: 1.85, color: "rgba(255,255,255,0.72)", fontSize: "0.95rem" }}>
            Established brands may remain relatively visible because users already know them. Smaller publishers, however, are far more vulnerable when summaries replace visits. Over time, that could concentrate even more traffic and influence in the hands of a few large outlets and the platforms that mediate access to them.
          </Text>
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
            Visibility has always been shaped by platform design, but AI summaries tighten that control. The question is no longer only which pages are ranked highest. It is also which facts are selected, whose language is reused, and how an issue is framed before the user ever reaches an original source.
          </Text>
          <Text style={{ lineHeight: 1.85, color: "rgba(255,255,255,0.72)", fontSize: "0.95rem" }}>
            That matters because visibility shapes trust. If users encounter information mainly through automated summaries rather than direct reporting, their relationship shifts away from the publisher and toward the platform presenting the answer. The intermediary becomes more central than the source.
          </Text>

          {/* closing pull quote */}
          <Box style={{ borderLeft: "2px solid rgba(255,255,255,0.15)", paddingLeft: 16, marginTop: 8 }}>
            <Text size="md" style={{ color: "rgba(255,255,255,0.8)", fontStyle: "italic", lineHeight: 1.7 }}>
              &ldquo;The question is no longer just what search finds. It is what search keeps.&rdquo;
            </Text>
          </Box>

          <Text style={{ lineHeight: 1.85, color: "rgba(255,255,255,0.72)", fontSize: "0.95rem" }}>
            Readers gain speed and convenience, but platforms also gain more power over discovery. What looks like a better user experience from one perspective can look like greater dependency and reduced autonomy from another. The trade-off depends on where you stand in the information chain.
          </Text>
        </Stack>
      </Box>

      {/* ── Section 05 ── */}
      <Box style={{ ...SURFACE, borderRadius: 4, padding: "28px 24px" }}>
        <SectionHeading index="05">What readers gain and lose</SectionHeading>
        <Stack gap="md">
          <Text style={{ lineHeight: 1.85, color: "rgba(255,255,255,0.72)", fontSize: "0.95rem" }}>
            For readers, the appeal is obvious. AI summaries reduce friction, save time, and make routine searching feel more conversational. Instead of opening several pages and piecing together an answer, users can often get a concise response immediately and ask follow-up questions in the same interface.
          </Text>
          <Text style={{ lineHeight: 1.85, color: "rgba(255,255,255,0.72)", fontSize: "0.95rem" }}>
            But convenience has costs. Summaries can flatten nuance, omit important context, and present a single clean conclusion where the underlying issue is more contested or complex. When fewer users visit original sources, they also lose access to the full evidence, tone, and diversity of perspectives behind the summary. In that sense, speed can come at the expense of depth.
          </Text>
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
