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
            Back then, searching online felt straightforward. Into the box went your words, out came rows of plain blue lines waiting to be checked. One by one you&apos;d look them over before picking a link to follow. These engines didn&apos;t hold answers themselves - they pointed outward, sending folks to articles, personal sites, message boards, government pages. Visits weren&apos;t just numbers - each click fed income from ads, helped sell memberships, raised awareness, kept independent corners of the internet alive.
          </Text>
          <Text style={{ lineHeight: 1.85, color: "rgba(255,255,255,0.72)", fontSize: "0.95rem" }}>
            This setup never stayed truly impartial. Visibility of websites depended on how search results ranked them, deciding who got seen and who didn&apos;t. Still, the main pattern pulled people outward - results guided users off the site, sending them directly to original pages.
          </Text>
          <Text style={{ lineHeight: 1.85, color: "rgba(255,255,255,0.72)", fontSize: "0.95rem" }}>
            These days, the rush outward has started to fade. Because AI gives answers right away, people often skip the source entirely - no click needed. What once drove traffic now holds it back.
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
            Search used to point you places. Now it tells you what matters straight up. Reading pages, pulling key bits, shaping them into clear replies - this is how things work today. You stay put in the search window. Info comes to you. Jumping around sites? Less needed now. The machine digests words so you do not have to hunt. Answers show up ready made. Context arrives fast. No detours required. It understands before showing results. Meaning gets served early. Navigation shifts without fanfare. What once listed links now explains outcomes. Your time bends differently here. Queries meet response in one breath. Outside clicks fade as default move. Inside answers rise. This changes rhythm of looking.
          </Text>
          <Text style={{ lineHeight: 1.85, color: "rgba(255,255,255,0.72)", fontSize: "0.95rem" }}>
            What happens when Google shows off its AI Mode becomes clear through the demo itself. A faster way to get answers appears, one built around back-and-forth exchanges. Refining questions comes next, shaped by new inputs each time. Links to sources sit tucked within the view, present but not upfront. The whole thing runs in a single space, seamless yet layered.
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
              Nowadays, people aren&apos;t just using search engines to locate things. Instead, they&apos;re reading shortened versions right there on the results page. What once was a doorway has turned into a reading spot. Summaries appear before full articles even load. Information gets digested without clicking through. The tool meant for finding now holds attention itself. Pages open less often because answers show up instantly. Quick replies replace deep dives. Responses pop up so fast that scrolling feels slow. Finding something used to mean visiting sites. Now it means staying put and getting served.
            </Text>
          </Box>

          <Text style={{ lineHeight: 1.85, color: "rgba(255,255,255,0.72)", fontSize: "0.95rem" }}>
            Now things shift around how we pay attention. Fewer clicks mean less traffic for sites, which cuts down on ads shown and chances to turn passersby into paying members. Without checking multiple places first, people might just go with what the platform serves up - particularly if it arrives quickly, sounds sure of itself, and fits neatly into their routine.
          </Text>
        </Stack>
      </Box>

      {/* ── Section 03 ── */}
      <Box style={{ ...SURFACE, borderRadius: 4, padding: "28px 24px" }}>
        <SectionHeading index="03">Why publishers are worried</SectionHeading>
        <Stack gap="md">
          <Text style={{ lineHeight: 1.85, color: "rgba(255,255,255,0.72)", fontSize: "0.95rem" }}>
            Most people think referral numbers are just for show. Yet they actually keep many outlets alive. Websites covering news, niche topics, or culture count on search engines to deliver visitors - visitors who might watch an ad, join a mailing list, or eventually pay for access. When answers appear inside AI tools without a click-through, the whole flow stops short.
          </Text>
          <Text style={{ lineHeight: 1.85, color: "rgba(255,255,255,0.72)", fontSize: "0.95rem" }}>
            Nowhere feels safe lately - not even online pages once thought steady. Something odd happens when answers appear without clicks. Readers stay inside apps, never visiting the sites where stories began. Value slips away, gathered by systems that didn&apos;t create a thing. Pages still load, yet fewer eyes find them. Who benefits most? Not those who write. Quiet shifts reshape everything, though few notice until it&apos;s too late.
          </Text>
          <Text style={{ lineHeight: 1.85, color: "rgba(255,255,255,0.72)", fontSize: "0.95rem" }}>
            First things first, AI Mode steps right into the spotlight where Top Stories used to stand alone. Not only does it challenge old formats, but it also slowly reshapes how eyes land on content. Suddenly, credit shifts hands without warning. Whoever shows up early now might not be the one who created it. Visibility dances differently when algorithms lead instead of editors. Revenue follows that new rhythm whether publishers like it or not.
          </Text>
          <Text style={{ lineHeight: 1.85, color: "rgba(255,255,255,0.72)", fontSize: "0.95rem" }}>
            Big names often stay seen since people already know them. Yet tiny sites might struggle when summaries replace visits - pushing traffic toward fewer top spots online. A shift like that tilts the field quietly.
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
            What shows up in AI summaries still faces control. Often, it gets tighter. Not just sorting web pages anymore - now picking what info gets pulled in, whose words get repeated, and how ideas appear right at the start.
          </Text>
          <Text style={{ lineHeight: 1.85, color: "rgba(255,255,255,0.72)", fontSize: "0.95rem" }}>
            This matters since being seen builds trust. Less linking means fewer visits, which leaves people relying on what they get through automated summaries instead. That shift pulls attention away from the publisher. Trust moves toward the middleman serving up the content.
          </Text>

          {/* closing pull quote */}
          <Box style={{ borderLeft: "2px solid rgba(255,255,255,0.15)", paddingLeft: 16, marginTop: 8 }}>
            <Text size="md" style={{ color: "rgba(255,255,255,0.8)", fontStyle: "italic", lineHeight: 1.7 }}>
              &ldquo;The question is no longer just what search finds. It is what search keeps.&rdquo;
            </Text>
          </Box>

          <Text style={{ lineHeight: 1.85, color: "rgba(255,255,255,0.72)", fontSize: "0.95rem" }}>
            Speed and ease arrive, yet platforms grow stronger. Readers get faster access while publishers face distance from those who follow them. What feels like advancement to some looks like control to others. Your view changes based on where you stand when the link opens.
          </Text>
        </Stack>
      </Box>

      {/* ── Section 05 ── */}
      <Box style={{ ...SURFACE, borderRadius: 4, padding: "28px 24px" }}>
        <SectionHeading index="05">What readers gain and lose</SectionHeading>
        <Stack gap="md">
          <Text style={{ lineHeight: 1.85, color: "rgba(255,255,255,0.72)", fontSize: "0.95rem" }}>
            Most people just want answers fast. With AI summaries, they do not need to click through pages or scroll down long posts. One glance gives them what once took minutes to find. Jumping between sites fades into the background. Getting details feels like talking, not searching. Questions come naturally after that. The whole thing takes less effort without feeling robotic. Because of this, searching with AI cuts down on hassle. Information hunting becomes smoother, almost like a quiet helper stepping in during simple checks or everyday lookups.
          </Text>
          <Text style={{ lineHeight: 1.85, color: "rgba(255,255,255,0.72)", fontSize: "0.95rem" }}>
            Still, getting things fast means giving something up. Summaries often smooth out subtle differences, skip key background details, leaving only a single clear conclusion even when none exists. Fewer clicks on the real sources mean fewer chances to see full reasoning, proof, or different takes. A narrower range of voices might show up simply because the system chooses what gets pulled in. Speed becomes easier to find while depth slips away, along with wide-ranging origins and personal touch with the work behind answers.
          </Text>
        </Stack>
      </Box>

      {/* ── Section 06 ── */}
      <Box style={{ ...SURFACE, borderRadius: 4, padding: "28px 24px" }}>
        <SectionHeading index="06">What this means for smaller publishers</SectionHeading>
        <Stack gap="md">
          <Text style={{ lineHeight: 1.85, color: "rgba(255,255,255,0.72)", fontSize: "0.95rem" }}>
            Small publishers face real danger as AI-generated summaries grow more common. Search still matters for independent websites, community journalism, and specialised platforms in a way it often does not for major outlets with stronger reputations and steady audiences. If fewer users click through from results pages, smaller operations can disappear from view very quickly.
          </Text>
          <Text style={{ lineHeight: 1.85, color: "rgba(255,255,255,0.72)", fontSize: "0.95rem" }}>
            This shift does not hit everyone evenly. Big names usually remain visible because people already know them, but smaller creators can lose visits, recognition, and income even when their work helped shape the summary in the first place. Over time, that could leave the web more concentrated around large publishers and tech platforms.
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
