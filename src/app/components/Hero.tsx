import { ArrowRight, Shield, Zap, Layers, Download, Linkedin } from "lucide-react";

type Section = "home" | "guardian" | "quickpay" | "finsight" | "about";

interface HeroProps {
  onNavigate: (s: Section) => void;
}

const cases = [
  {
    id: "guardian" as Section,
    tag: "CASE STUDY 01",
    title: "GuardianOnboard",
    subtitle: "Onboarding & KYC flow",
    metric: "Activation uplift 12–20%",
    icon: Shield,
    color: "#00d4b8",
    desc: "Reducing friction and improving trust in the identity verification experience for new digital finance users.",
  },
  {
    id: "quickpay" as Section,
    tag: "CASE STUDY 02",
    title: "QuickPay",
    subtitle: "Cross-border payments experience",
    metric: "Completion uplift 5–15%",
    icon: Zap,
    color: "#3b82f6",
    desc: "Designing clarity and confidence into cross-border transfers — fees, exchange rates, and transfer progress.",
  },
  {
    id: "finsight" as Section,
    tag: "CASE STUDY 03",
    title: "FinSight Design System",
    subtitle: "Scalable design system",
    metric: "Handoff time −20–30%",
    icon: Layers,
    color: "#8b5cf6",
    desc: "Building a consistent, accessible design system to support onboarding, payments, and account management.",
  },
];

const brings = [
  { label: "End-to-end design", desc: "Research, flows, wireframes, UI, testing, and iteration — all in one process." },
  { label: "User research & testing", desc: "Usability testing and research findings inform every design decision." },
  { label: "Accessible, scalable systems", desc: "Accessibility and design systems built in from the start, not bolted on later." },
];

export function Hero({ onNavigate }: HeroProps) {
  return (
    <div style={{ background: "var(--background)" }}>
      {/* Hero Header */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,212,184,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,212,184,0.04) 1px, transparent 1px)
            `,
            backgroundSize: "64px 64px",
          }}
        />
        <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(0,212,184,0.08) 0%, transparent 70%)", filter: "blur(40px)" }} />

        <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5" style={{ border: "1px solid rgba(0,212,184,0.3)", borderRadius: "2px", background: "rgba(0,212,184,0.06)" }}>
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#00d4b8" }} />
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.1em", color: "#00d4b8" }}>AVAILABLE FOR GRADUATE PRODUCT DESIGN ROLES</span>
              </div>

              <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.25rem, 5vw, 3.5rem)", fontWeight: 600, lineHeight: 1.15, color: "var(--foreground)", marginBottom: "1.5rem" }}>
                Graduate Product Designer
                <br />
                focused on <span style={{ color: "#00d4b8" }}>fintech</span>
                <br />
                experiences.
              </h1>

              <div className="mb-8 px-4 py-3" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "2px" }}>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "var(--muted-foreground)", lineHeight: 1.75 }}>
                  MSc in Web &amp; Mobile Application Development Technologies. UX/UI and product design background with a focus on{" "}
                  <span style={{ color: "var(--foreground)" }}>fintech, accessibility, and user-centred problem solving</span>{" "}
                  — designing products that earn trust through clarity and usability.
                </p>
              </div>

              <div className="flex items-center gap-3 flex-wrap">
                <button onClick={() => onNavigate("guardian")} className="flex items-center gap-2 transition-all duration-200" style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", letterSpacing: "0.06em", padding: "0.75rem 1.5rem", background: "#00d4b8", color: "#070c18", borderRadius: "2px", fontWeight: 600 }} onMouseEnter={e => (e.currentTarget.style.background = "#00e5c8")} onMouseLeave={e => (e.currentTarget.style.background = "#00d4b8")}>
                  VIEW CASE STUDIES <ArrowRight size={14} />
                </button>
                <a href="#" className="flex items-center gap-1.5 transition-all duration-200" style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.06em", padding: "0.75rem 1rem", background: "transparent", color: "var(--muted-foreground)", borderRadius: "2px", border: "1px solid rgba(255,255,255,0.12)", textDecoration: "none" }} onMouseEnter={e => (e.currentTarget.style.color = "var(--foreground)")} onMouseLeave={e => (e.currentTarget.style.color = "var(--muted-foreground)")}>
                  <Download size={12} /> RESUME
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 transition-all duration-200" style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.06em", padding: "0.75rem 1rem", background: "transparent", color: "var(--muted-foreground)", borderRadius: "2px", border: "1px solid rgba(255,255,255,0.12)", textDecoration: "none" }} onMouseEnter={e => (e.currentTarget.style.color = "var(--foreground)")} onMouseLeave={e => (e.currentTarget.style.color = "var(--muted-foreground)")}>
                  <Linkedin size={12} /> LINKEDIN
                </a>
              </div>
            </div>

            {/* What I bring panel */}
            <div className="hidden lg:flex flex-col gap-px" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
              {brings.map((b, i) => (
                <div key={i} className="p-7" style={{ background: i % 2 === 0 ? "var(--card)" : "rgba(17,24,39,0.5)", borderBottom: i < brings.length - 1 ? "1px solid rgba(255,255,255,0.08)" : undefined }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "1rem", fontWeight: 600, color: "#00d4b8", marginBottom: "0.4rem" }}>{b.label}</div>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: "0.85rem", color: "var(--muted-foreground)", lineHeight: 1.65 }}>{b.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Cards */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="flex items-center gap-4 mb-10" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: "1rem" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.1em", color: "var(--muted-foreground)" }}>SELECTED WORK — FINTECH PRODUCT DESIGN</span>
          <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.06)" }} />
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.1em", color: "var(--muted-foreground)" }}>3 CASE STUDIES</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
          {cases.map((c, i) => {
            const Icon = c.icon;
            return (
              <button key={c.id} onClick={() => onNavigate(c.id)} className="text-left group transition-all duration-300 relative" style={{ background: "var(--card)", borderRight: i < 2 ? "1px solid rgba(255,255,255,0.08)" : undefined, padding: "2rem" }} onMouseEnter={e => (e.currentTarget.style.background = "#0d1425")} onMouseLeave={e => (e.currentTarget.style.background = "var(--card)")}>
                <div className="absolute top-0 left-0 right-0 h-0.5 transition-all duration-300 group-hover:opacity-100 opacity-0" style={{ background: c.color }} />

                <div className="flex items-start justify-between mb-5">
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.1em", color: "var(--muted-foreground)" }}>{c.tag}</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: c.color, background: `${c.color}18`, borderRadius: "2px", border: `1px solid ${c.color}40`, padding: "0.2rem 0.5rem" }}>{c.metric}</span>
                </div>

                <div className="w-10 h-10 flex items-center justify-center mb-4" style={{ background: `${c.color}14`, border: `1px solid ${c.color}30`, borderRadius: "4px" }}>
                  <Icon size={18} style={{ color: c.color }} />
                </div>

                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", fontWeight: 600, color: "var(--foreground)", marginBottom: "0.3rem" }}>{c.title}</h3>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.06em", color: c.color, marginBottom: "1rem", opacity: 0.8 }}>{c.subtitle}</p>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "var(--muted-foreground)", lineHeight: 1.65, marginBottom: "2rem" }}>{c.desc}</p>

                <div className="flex items-center gap-1.5" style={{ color: c.color }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.08em" }}>READ CASE STUDY</span>
                  <ArrowRight size={12} />
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-6 flex items-center gap-2 flex-wrap" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "1rem" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "var(--muted-foreground)", letterSpacing: "0.08em" }}>QUICK LINKS:</span>
          {[
            { label: "GuardianOnboard", id: "guardian" as Section },
            { label: "QuickPay", id: "quickpay" as Section },
            { label: "FinSight DS", id: "finsight" as Section },
            { label: "About", id: "about" as Section },
          ].map((link, i) => (
            <button key={i} onClick={() => onNavigate(link.id)} style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.06em", color: "#00d4b8", background: "rgba(0,212,184,0.06)", border: "1px solid rgba(0,212,184,0.2)", padding: "0.25rem 0.6rem", borderRadius: "2px" }}>
              {link.label}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
