import { useState } from "react";
import { ArrowLeft, Layers, CheckCircle, Users, Search, Target, Cpu, Layout, TestTube, RotateCcw, Star, BarChart2, BookOpen } from "lucide-react";

interface FinSightProps {
  onBack: () => void;
}

const ACC = "#8b5cf6";

const sections = [
  { id: "overview", label: "Overview", icon: BookOpen },
  { id: "problem", label: "Problem", icon: Target },
  { id: "role", label: "My Role", icon: Users },
  { id: "goals", label: "Product Goals", icon: Target },
  { id: "process", label: "Process", icon: Cpu },
  { id: "components", label: "Components", icon: Layout },
  { id: "accessibility", label: "Accessibility", icon: Star },
  { id: "testing", label: "Validation", icon: TestTube },
  { id: "handoff", label: "Handoff & Governance", icon: Search },
  { id: "metrics", label: "Success Metrics", icon: BarChart2 },
  { id: "learned", label: "What I Learned", icon: BookOpen },
];

export function FinSight({ onBack }: FinSightProps) {
  const [active, setActive] = useState("overview");

  const scrollTo = (id: string) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div style={{ background: "var(--background)", minHeight: "100vh" }}>
      <div className="relative overflow-hidden" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: `linear-gradient(rgba(139,92,246,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.03) 1px, transparent 1px)`, backgroundSize: "48px 48px" }} />
        <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-10">
          <button onClick={onBack} className="flex items-center gap-2 mb-8 transition-colors duration-200" style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.08em", color: "var(--muted-foreground)" }} onMouseEnter={e => (e.currentTarget.style.color = ACC)} onMouseLeave={e => (e.currentTarget.style.color = "var(--muted-foreground)")}>
            <ArrowLeft size={12} /> BACK TO WORK
          </button>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 flex items-center justify-center" style={{ background: `${ACC}14`, border: `1px solid ${ACC}30`, borderRadius: "4px" }}>
              <Layers size={18} style={{ color: ACC }} />
            </div>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.1em", color: ACC }}>CASE STUDY 03</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 700, color: "var(--foreground)", lineHeight: 1.1, marginBottom: "0.75rem" }}>
            FinSight Design System
          </h1>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: ACC, letterSpacing: "0.06em" }}>
            Building a scalable design system for fintech product experiences
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10 flex gap-10">
        <aside className="hidden lg:flex flex-col gap-1 w-48 flex-shrink-0 sticky top-24 self-start">
          {sections.map((s) => {
            const Icon = s.icon;
            return (
              <button key={s.id} onClick={() => scrollTo(s.id)} className="flex items-center gap-2 px-3 py-2 text-left transition-all duration-150" style={{ borderRadius: "2px", background: active === s.id ? `${ACC}12` : "transparent", borderLeft: active === s.id ? `2px solid ${ACC}` : "2px solid transparent", color: active === s.id ? ACC : "var(--muted-foreground)", fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.06em" }}>
                <Icon size={10} />
                {s.label}
              </button>
            );
          })}
        </aside>

        <div className="flex-1 space-y-16 min-w-0">

          <section id="overview">
            <SectionHeading num="01" title="Overview" color={ACC} />
            <div className="p-6" style={{ background: "var(--card)", border: "1px solid rgba(255,255,255,0.08)", borderLeft: `3px solid ${ACC}` }}>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", color: "var(--muted-foreground)", lineHeight: 1.8 }}>
                FinSight is a design system case study created to support consistent onboarding, payments, and account management experiences across a fintech product ecosystem. The aim was to build a shared component library, token system, and governance model that would allow product teams to move faster without sacrificing quality, accessibility, or consistency.
              </p>
            </div>
          </section>

          <section id="problem">
            <SectionHeading num="02" title="Problem" color={ACC} />
            <div className="p-6" style={{ background: "var(--card)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", color: "var(--muted-foreground)", lineHeight: 1.8, marginBottom: "1rem" }}>
                As products scale, inconsistency in UI patterns slows delivery, weakens usability, and creates fragmented user experiences. Fintech products especially need consistency because clarity and trust are critical — a button that behaves differently on two screens, or a colour that means different things in different contexts, erodes the confidence users place in the product.
              </p>
              <div className="px-4 py-3" style={{ background: `${ACC}08`, border: `1px solid ${ACC}20`, borderRadius: "2px" }}>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: ACC, letterSpacing: "0.04em" }}>
                  How might we unify UI language across multiple product areas to cut handoff time, eliminate WCAG AA gaps, and establish a governed token system teams can actually maintain?
                </p>
              </div>
            </div>
          </section>

          <section id="role">
            <SectionHeading num="03" title="My Role" color={ACC} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
              {[
                { label: "Role", items: ["Product Designer", "Design system author"] },
                { label: "Responsibilities", items: ["System structure", "Component design", "Pattern documentation", "Accessibility guidance", "Handoff governance"] },
                { label: "Type", items: ["Self-initiated", "Fintech design system case study"] },
              ].map((col, i) => (
                <div key={i} className="p-5" style={{ background: "var(--card)", borderRight: i < 2 ? "1px solid rgba(255,255,255,0.08)" : undefined }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.1em", color: "var(--muted-foreground)", marginBottom: "0.75rem" }}>{col.label}</div>
                  <div className="space-y-1.5">
                    {col.items.map((item, j) => (
                      <div key={j} className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: ACC }} />
                        <span style={{ fontFamily: "var(--font-body)", fontSize: "0.85rem", color: "var(--foreground)" }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="goals">
            <SectionHeading num="04" title="Product Goals" color={ACC} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                "Improve consistency across product areas and reduce design fragmentation",
                "Speed up design-to-development handoff and delivery",
                "Support WCAG AA accessibility across all components",
                "Make patterns scalable for future teams and features",
              ].map((goal, i) => (
                <div key={i} className="flex items-start gap-3 p-4" style={{ background: "var(--card)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <CheckCircle size={14} style={{ color: ACC, flexShrink: 0, marginTop: "0.15rem" }} />
                  <span style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "var(--muted-foreground)", lineHeight: 1.65 }}>{goal}</span>
                </div>
              ))}
            </div>
          </section>

          <section id="process">
            <SectionHeading num="05" title="Process" color={ACC} />
            <div className="space-y-3">
              {[
                { step: "Audit", desc: "Audited existing interface patterns across product areas to identify repeated components and inconsistencies." },
                { step: "Tokenise", desc: "Defined design tokens — colours, typography, spacing, and elevation — as the foundation of the system." },
                { step: "Document", desc: "Documented component states, behaviours, and usage guidance to support accurate implementation." },
                { step: "Structure", desc: "Built a naming convention and file structure for scalable handoff with engineering teams." },
                { step: "Govern", desc: "Established a contribution model and review cadence for long-term system maintenance." },
              ].map((p, i) => (
                <div key={i} className="flex gap-4 p-4" style={{ background: "var(--card)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: ACC, minWidth: "5rem", flexShrink: 0 }}>{p.step.toUpperCase()}</span>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "var(--muted-foreground)", lineHeight: 1.7 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="components">
            <SectionHeading num="06" title="Components" color={ACC} />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
              {[
                "Buttons", "Text fields", "Input states", "Date picker",
                "Steppers", "Cards", "Banners", "Status indicators",
              ].map((comp, i) => (
                <div key={i} className="p-4 text-center" style={{ background: "var(--card)", borderRight: (i + 1) % 4 !== 0 ? "1px solid rgba(255,255,255,0.08)" : undefined, borderBottom: i < 4 ? "1px solid rgba(255,255,255,0.08)" : undefined }}>
                  <div className="w-8 h-8 mx-auto mb-2 flex items-center justify-center" style={{ background: `${ACC}14`, border: `1px solid ${ACC}30`, borderRadius: "4px" }}>
                    <Layers size={14} style={{ color: ACC }} />
                  </div>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "var(--foreground)", letterSpacing: "0.06em" }}>{comp}</span>
                </div>
              ))}
            </div>

            {/* Live token preview */}
            <div className="mt-4 p-5" style={{ background: "var(--card)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.1em", color: "var(--muted-foreground)", marginBottom: "1rem" }}>DESIGN TOKENS — COLOUR FOUNDATION</div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { name: "--color-primary", value: "#00d4b8", label: "Primary" },
                  { name: "--color-bg", value: "#070c18", label: "Background" },
                  { name: "--color-surface", value: "#0d1425", label: "Surface" },
                  { name: "--color-border", value: "rgba(255,255,255,0.08)", label: "Border" },
                  { name: "--color-payments", value: "#3b82f6", label: "Payments" },
                  { name: "--color-system", value: "#8b5cf6", label: "System" },
                  { name: "--color-warning", value: "#f59e0b", label: "Warning" },
                  { name: "--color-success", value: "#10b981", label: "Success" },
                ].map((token, i) => (
                  <div key={i} className="p-3" style={{ background: "var(--background)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "2px" }}>
                    <div className="w-full h-6 mb-2 rounded-sm" style={{ background: token.value, border: "1px solid rgba(255,255,255,0.1)" }} />
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", color: ACC, marginBottom: "0.2rem" }}>{token.label}</div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.5rem", color: "var(--muted-foreground)" }}>{token.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="accessibility">
            <SectionHeading num="07" title="Accessibility" color={ACC} />
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "var(--muted-foreground)", lineHeight: 1.75, marginBottom: "1.25rem" }}>
              Accessibility was a core design requirement, not a retrofit. Every component in FinSight was designed with WCAG AA compliance as a non-negotiable baseline.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { label: "Contrast considerations", desc: "All text/background combinations meet 4.5:1 (body) and 3:1 (large text) contrast ratios." },
                { label: "Clear focus states", desc: "Keyboard-navigable focus rings visible and consistent across all interactive elements." },
                { label: "Hierarchy for readability", desc: "Typography scale and weight system designed for clear information scanning." },
                { label: "Scalable typography", desc: "Relative units used throughout — components reflow correctly at 200% browser zoom." },
                { label: "Consistent interaction states", desc: "Hover, focus, active, disabled, and error states defined and documented for every component." },
              ].map((item, i) => (
                <div key={i} className="p-4" style={{ background: "var(--card)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: ACC, letterSpacing: "0.06em", marginBottom: "0.4rem" }}>{item.label}</div>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: "0.85rem", color: "var(--muted-foreground)", lineHeight: 1.65 }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </section>

          <section id="testing">
            <SectionHeading num="08" title="Validation" color={ACC} />
            <div className="space-y-5">
              <div className="p-6" style={{ background: "var(--card)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.1em", color: "var(--muted-foreground)", marginBottom: "0.5rem" }}>VALIDATION APPROACH</div>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "var(--muted-foreground)", lineHeight: 1.75 }}>
                  I tested key component patterns with users and reviewed them against accessibility and usability principles to ensure they were intuitive, consistent, and scalable across different product contexts.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5" style={{ background: "var(--card)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.1em", color: "var(--muted-foreground)", marginBottom: "0.75rem" }}>WHAT I CHECKED</div>
                  <div className="space-y-2">
                    {[
                      "Whether key actions were easy to identify across contexts",
                      "Whether forms and buttons felt predictable and consistent",
                      "Whether visual hierarchy supported readability at a glance",
                      "Whether interaction states were clear and distinguishable",
                    ].map((g, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="w-1 h-1 rounded-full flex-shrink-0 mt-1.5" style={{ background: ACC }} />
                        <span style={{ fontFamily: "var(--font-body)", fontSize: "0.85rem", color: "var(--muted-foreground)" }}>{g}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-5" style={{ background: "var(--card)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.1em", color: "var(--muted-foreground)", marginBottom: "0.75rem" }}>IMPROVEMENTS MADE</div>
                  <div className="space-y-2">
                    {[
                      "Refined spacing and density for improved readability",
                      "Strengthened focus state visibility across all components",
                      "Simplified component labels for clearer pattern naming",
                      "Improved consistency across form field behaviour",
                    ].map((f, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="w-1 h-1 rounded-full flex-shrink-0 mt-1.5" style={{ background: ACC }} />
                        <span style={{ fontFamily: "var(--font-body)", fontSize: "0.85rem", color: "var(--muted-foreground)" }}>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="handoff">
            <SectionHeading num="09" title="Handoff & Governance" color={ACC} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { label: "Reusable tokens", desc: "All colour, spacing, and typography values defined as tokens and referenced consistently throughout the system." },
                { label: "Component naming conventions", desc: "Consistent naming across Figma and code — component and variant names match implementation exactly." },
                { label: "Documented usage guidance", desc: "Every component includes usage guidelines, do/don't examples, and accessibility notes." },
                { label: "Scalable patterns", desc: "Architecture designed for future collaboration — new components follow established naming and token conventions." },
              ].map((item, i) => (
                <div key={i} className="p-4" style={{ background: "var(--card)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: ACC, letterSpacing: "0.06em", marginBottom: "0.4rem" }}>{item.label}</div>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: "0.85rem", color: "var(--muted-foreground)", lineHeight: 1.65 }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </section>

          <section id="metrics">
            <SectionHeading num="10" title="Success Metrics" color={ACC} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
              {[
                { metric: "20–30%", label: "Handoff time reduction", desc: "Faster design-to-development cycle through documented components and tokens" },
                { metric: "10–20%", label: "UI consistency improvement", desc: "Reduction in pattern divergence across product areas post-system adoption" },
              ].map((m, i) => (
                <div key={i} className="p-6" style={{ background: "var(--card)", borderRight: i < 1 ? "1px solid rgba(255,255,255,0.08)" : undefined }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 700, color: ACC, lineHeight: 1, marginBottom: "0.4rem" }}>{m.metric}</div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.08em", color: "var(--foreground)", marginBottom: "0.4rem" }}>{m.label}</div>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: "0.8rem", color: "var(--muted-foreground)", lineHeight: 1.6 }}>{m.desc}</div>
                </div>
              ))}
            </div>
          </section>

          <section id="learned">
            <SectionHeading num="11" title="What I Learned" color={ACC} />
            <div className="p-6" style={{ background: "var(--card)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", color: "var(--muted-foreground)", lineHeight: 1.8 }}>
                This case study helped me understand how system thinking improves both user experience and team efficiency. In fintech, consistent patterns reduce friction and help users feel more confident in complex tasks — because predictability is itself a form of trust. Building the system also taught me that governance matters as much as the components themselves. A design system without a clear contribution model and review process will drift — and a drifting system is often worse than no system at all.
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}

function SectionHeading({ num, title, color }: { num: string; title: string; color: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color, letterSpacing: "0.1em" }}>{num}</span>
      <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", fontWeight: 600, color: "var(--foreground)" }}>{title}</h2>
      <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.08)" }} />
    </div>
  );
}
