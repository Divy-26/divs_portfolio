import { useState } from "react";
import { ArrowLeft, Shield, CheckCircle, Users, Search, Target, Cpu, Layout, TestTube, RotateCcw, Star, BarChart2, BookOpen } from "lucide-react";

interface GuardianOnboardProps {
  onBack: () => void;
}

const ACC = "#00d4b8";

const sections = [
  { id: "overview", label: "Overview", icon: BookOpen },
  { id: "problem", label: "Problem", icon: Target },
  { id: "role", label: "My Role", icon: Users },
  { id: "users", label: "Users", icon: Users },
  { id: "research", label: "Research", icon: Search },
  { id: "goals", label: "Product Goals", icon: Target },
  { id: "process", label: "Design Process", icon: Cpu },
  { id: "wireframes", label: "Wireframes & Flows", icon: Layout },
  { id: "ui", label: "UI Design", icon: Star },
  { id: "testing", label: "User Testing", icon: TestTube },
  { id: "iteration", label: "Iteration", icon: RotateCcw },
  { id: "final", label: "Final Solution", icon: CheckCircle },
  { id: "metrics", label: "Success Metrics", icon: BarChart2 },
  { id: "learned", label: "What I Learned", icon: BookOpen },
];

export function GuardianOnboard({ onBack }: GuardianOnboardProps) {
  const [active, setActive] = useState("overview");

  const scrollTo = (id: string) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div style={{ background: "var(--background)", minHeight: "100vh" }}>
      {/* Header */}
      <div className="relative overflow-hidden" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: `linear-gradient(rgba(0,212,184,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,184,0.03) 1px, transparent 1px)`, backgroundSize: "48px 48px" }} />
        <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-10">
          <button onClick={onBack} className="flex items-center gap-2 mb-8 transition-colors duration-200" style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.08em", color: "var(--muted-foreground)" }} onMouseEnter={e => (e.currentTarget.style.color = ACC)} onMouseLeave={e => (e.currentTarget.style.color = "var(--muted-foreground)")}>
            <ArrowLeft size={12} /> BACK TO WORK
          </button>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 flex items-center justify-center" style={{ background: `${ACC}14`, border: `1px solid ${ACC}30`, borderRadius: "4px" }}>
              <Shield size={18} style={{ color: ACC }} />
            </div>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.1em", color: ACC }}>CASE STUDY 01</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 700, color: "var(--foreground)", lineHeight: 1.1, marginBottom: "0.75rem" }}>
            GuardianOnboard
          </h1>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: ACC, letterSpacing: "0.06em" }}>
            Designing a clearer onboarding and KYC experience for a digital finance product
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10 flex gap-10">
        {/* Sidebar nav */}
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

        {/* Content */}
        <div className="flex-1 space-y-16 min-w-0">

          <section id="overview">
            <SectionHeading num="01" title="Overview" color={ACC} />
            <div className="p-6" style={{ background: "var(--card)", border: "1px solid rgba(255,255,255,0.08)", borderLeft: `3px solid ${ACC}` }}>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", color: "var(--muted-foreground)", lineHeight: 1.8 }}>
                GuardianOnboard is a self-initiated fintech product case study focused on improving the onboarding and identity verification experience for new users. The goal was to reduce friction, improve trust, and make the KYC process feel more transparent and manageable. This project explores how clearer communication, better progress visibility, and trust-building UI patterns can meaningfully improve activation and reduce drop-off in high-stakes onboarding flows.
              </p>
            </div>
          </section>

          <section id="problem">
            <SectionHeading num="02" title="Problem" color={ACC} />
            <div className="p-6" style={{ background: "var(--card)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", color: "var(--muted-foreground)", lineHeight: 1.8, marginBottom: "1rem" }}>
                Users often drop off during onboarding when identity verification feels slow, unclear, or intrusive. In digital finance products, poor KYC communication can increase frustration, reduce activation, and create support issues.
              </p>
              <div className="px-4 py-3" style={{ background: `${ACC}08`, border: `1px solid ${ACC}20`, borderRadius: "2px" }}>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: ACC, letterSpacing: "0.04em" }}>
                  How might we reduce onboarding drop-off for first-time digital finance users while keeping KYC pass rates high and privacy reassurance clear?
                </p>
              </div>
            </div>
          </section>

          <section id="role">
            <SectionHeading num="03" title="My Role" color={ACC} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
              {[
                { label: "Role", items: ["Product Designer", "End-to-end ownership"] },
                { label: "Responsibilities", items: ["Research", "Flows & wireframes", "UI design", "Prototype", "User testing", "Iteration"] },
                { label: "Type", items: ["Self-initiated", "Fintech product case study"] },
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

          <section id="users">
            <SectionHeading num="04" title="Users" color={ACC} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { type: "First-time digital finance users", desc: "Unfamiliar with how digital finance products work, cautious about providing personal data." },
                { type: "Users unfamiliar with KYC", desc: "Don't know why documents are needed or what happens after submission." },
                { type: "Privacy-conscious users", desc: "Worried about how data is stored, processed, and who has access to it." },
                { type: "Efficiency-focused users", desc: "Want fast, clear setup with visible progress and minimal unnecessary steps." },
              ].map((u, i) => (
                <div key={i} className="p-5" style={{ background: "var(--card)", border: "1px solid rgba(255,255,255,0.08)", borderLeft: `3px solid ${ACC}` }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "0.9rem", fontWeight: 600, color: "var(--foreground)", marginBottom: "0.4rem" }}>{u.type}</div>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: "0.85rem", color: "var(--muted-foreground)", lineHeight: 1.65 }}>{u.desc}</div>
                </div>
              ))}
            </div>
          </section>

          <section id="research">
            <SectionHeading num="05" title="Research" color={ACC} />
            <div className="space-y-3">
              {[
                "Users felt anxious when they did not know why personal documents were needed — clearer explanations improved confidence significantly.",
                "Users wanted visibility into how many steps remained — progress indicators directly reduced perceived effort.",
                "Unclear error states caused frustration and led to form abandonment, particularly during document upload.",
                "Users needed more reassurance around privacy and data use before they felt comfortable completing verification.",
              ].map((finding, i) => (
                <div key={i} className="flex gap-4 p-4" style={{ background: "var(--card)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: ACC, flexShrink: 0, marginTop: "0.1rem" }}>FINDING {String(i + 1).padStart(2, "0")}</span>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "var(--muted-foreground)", lineHeight: 1.7 }}>{finding}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="goals">
            <SectionHeading num="06" title="Product Goals" color={ACC} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                "Reduce onboarding friction and cognitive load at each step",
                "Improve clarity throughout the KYC journey",
                "Increase completion and activation rates",
                "Reduce KYC-related support queries and confusion",
              ].map((goal, i) => (
                <div key={i} className="flex items-start gap-3 p-4" style={{ background: "var(--card)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <CheckCircle size={14} style={{ color: ACC, flexShrink: 0, marginTop: "0.15rem" }} />
                  <span style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "var(--muted-foreground)", lineHeight: 1.65 }}>{goal}</span>
                </div>
              ))}
            </div>
          </section>

          <section id="process">
            <SectionHeading num="07" title="Design Process" color={ACC} />
            <div className="space-y-3">
              {[
                { step: "Map", desc: "Mapped the current onboarding journey end-to-end, identifying all friction and drop-off points." },
                { step: "Simplify", desc: "Simplified step-by-step progression with clear visual progress tracking at every stage." },
                { step: "Communicate", desc: "Introduced clearer microcopy to explain why each piece of information was needed." },
                { step: "Reassure", desc: "Designed privacy reassurance moments around data collection, verification status, and consent." },
                { step: "Validate", desc: "Built interactive prototype and tested with users to validate clarity and trust improvements." },
              ].map((p, i) => (
                <div key={i} className="flex gap-4 p-4" style={{ background: "var(--card)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: ACC, minWidth: "5rem", flexShrink: 0 }}>{p.step.toUpperCase()}</span>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "var(--muted-foreground)", lineHeight: 1.7 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="wireframes">
            <SectionHeading num="08" title="Wireframes & Flows" color={ACC} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
              {[
                { label: "Journey Map", items: ["Current state mapping", "Drop-off identification", "Opportunity framing"] },
                { label: "Low-fidelity Wireframes", items: ["Step-by-step KYC flow", "Decision points", "Error and success states"] },
                { label: "Interaction Flows", items: ["Document upload states", "Progress tracker logic", "Privacy consent screens"] },
              ].map((col, i) => (
                <div key={i} className="p-5" style={{ background: "var(--card)", borderRight: i < 2 ? "1px solid rgba(255,255,255,0.08)" : undefined }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.1em", color: ACC, marginBottom: "0.75rem" }}>{col.label}</div>
                  <div className="space-y-1.5">
                    {col.items.map((item, j) => (
                      <div key={j} className="flex items-start gap-2">
                        <div className="w-1 h-1 rounded-full flex-shrink-0 mt-1.5" style={{ background: "var(--muted-foreground)" }} />
                        <span style={{ fontFamily: "var(--font-body)", fontSize: "0.85rem", color: "var(--muted-foreground)" }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 p-5" style={{ background: "var(--card)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.1em", color: "var(--muted-foreground)", marginBottom: "1rem" }}>ONBOARDING STEP FLOW</div>
              <div className="flex items-center gap-2 flex-wrap">
                {["Account creation", "Email verify", "Personal details", "Document upload", "KYC review", "Approval"].map((step, i, arr) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="px-3 py-1.5" style={{ background: `${ACC}10`, border: `1px solid ${ACC}30`, borderRadius: "2px", fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: ACC, whiteSpace: "nowrap" }}>{step}</div>
                    {i < arr.length - 1 && <span style={{ color: "var(--muted-foreground)" }}>›</span>}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="ui">
            <SectionHeading num="09" title="UI Design" color={ACC} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { label: "Accessible layout", desc: "WCAG AA contrast ratios maintained throughout. Focus states visible and predictable." },
                { label: "Clear visual hierarchy", desc: "Primary actions, status messages, and instructions structured to guide the eye naturally." },
                { label: "Reduced cognitive load", desc: "One action per screen approach — users are never asked to process multiple decisions at once." },
                { label: "Mobile-first design", desc: "All screens designed for mobile viewport first, then scaled for larger breakpoints." },
                { label: "Trust-building patterns", desc: "Privacy labels, data usage explanations, and reassurance copy integrated at key moments." },
                { label: "Clear error states", desc: "Specific, actionable error messages with clear resolution paths — no generic failures." },
              ].map((item, i) => (
                <div key={i} className="p-4" style={{ background: "var(--card)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: ACC, letterSpacing: "0.06em", marginBottom: "0.4rem" }}>{item.label}</div>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: "0.85rem", color: "var(--muted-foreground)", lineHeight: 1.65 }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </section>

          <section id="testing">
            <SectionHeading num="10" title="User Testing" color={ACC} />
            <div className="space-y-5">
              <div className="p-6" style={{ background: "var(--card)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.1em", color: "var(--muted-foreground)", marginBottom: "0.5rem" }}>TESTING APPROACH</div>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "var(--muted-foreground)", lineHeight: 1.75 }}>
                  I conducted usability testing with 5 users to evaluate whether the onboarding flow felt clear, trustworthy, and easy to complete. Sessions were moderated and task-based, using a mid-fidelity prototype.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5" style={{ background: "var(--card)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.1em", color: "var(--muted-foreground)", marginBottom: "0.75rem" }}>TESTING GOALS</div>
                  <div className="space-y-2">
                    {[
                      "Understand whether users could complete onboarding without confusion",
                      "Test whether progress tracking reduced anxiety",
                      "Identify unclear microcopy or verification steps",
                      "Test trust and clarity in privacy-related messaging",
                    ].map((g, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="w-1 h-1 rounded-full flex-shrink-0 mt-1.5" style={{ background: ACC }} />
                        <span style={{ fontFamily: "var(--font-body)", fontSize: "0.85rem", color: "var(--muted-foreground)" }}>{g}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-5" style={{ background: "var(--card)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.1em", color: "var(--muted-foreground)", marginBottom: "0.75rem" }}>KEY FINDINGS</div>
                  <div className="space-y-2">
                    {[
                      "Progress indicators reduced perceived effort significantly",
                      "Privacy reassurance screens improved confidence before document upload",
                      "Some users still hesitated at document upload — needed clearer guidance",
                      "Clearer document type guidance reduced friction and repeat attempts",
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

          <section id="iteration">
            <SectionHeading num="11" title="Iteration" color={ACC} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { before: "Generic upload instructions", after: "Step-by-step guidance with document type examples", why: "Users hesitated because they weren't sure which documents were accepted." },
                { before: "Vague error messages", after: "Specific, actionable error messages with resolution steps", why: "Generic errors caused abandonment — users didn't know what to fix." },
                { before: "Ambiguous step labels", after: "Refined labels with estimated time per step", why: "Users wanted to know how much effort remained before committing." },
                { before: "Privacy copy at end of flow", after: "Privacy reassurance at each data collection point", why: "Early privacy concerns were blocking users from progressing further." },
              ].map((item, i) => (
                <div key={i} className="p-5" style={{ background: "var(--card)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <div className="flex flex-col gap-2 mb-3">
                    <div className="px-2 py-1" style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.2)", borderRadius: "2px", fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "#ef4444" }}>BEFORE: {item.before}</div>
                    <div className="px-2 py-1" style={{ background: `${ACC}10`, border: `1px solid ${ACC}30`, borderRadius: "2px", fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: ACC }}>AFTER: {item.after}</div>
                  </div>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.8rem", color: "var(--muted-foreground)", lineHeight: 1.6 }}><span style={{ color: "var(--foreground)" }}>Why:</span> {item.why}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="final">
            <SectionHeading num="12" title="Final Solution" color={ACC} />
            <div className="p-6" style={{ background: "var(--card)", border: "1px solid rgba(255,255,255,0.08)", borderLeft: `3px solid ${ACC}` }}>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", color: "var(--muted-foreground)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                The final GuardianOnboard solution delivers a guided, trust-focused onboarding flow that makes KYC feel manageable and transparent rather than intrusive and uncertain.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {[
                  "Guided step-by-step flow with clear progress visibility",
                  "Trust-focused UI with privacy reassurance at each data collection point",
                  "Improved copy — plain language, specific instructions, no legal jargon",
                  "Transparent verification status with clear next-step communication",
                  "Accessible document upload with examples of accepted formats",
                  "Specific, actionable error states with clear resolution paths",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle size={12} style={{ color: ACC, flexShrink: 0, marginTop: "0.2rem" }} />
                    <span style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "var(--muted-foreground)" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="metrics">
            <SectionHeading num="13" title="Success Metrics" color={ACC} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
              {[
                { metric: "12–20%", label: "Activation uplift", desc: "Increase in users completing onboarding end-to-end" },
                { metric: "20–30%", label: "Onboarding time reduction", desc: "Faster completion through clearer flows and fewer errors" },
                { metric: "15–25%", label: "Support query reduction", desc: "Fewer KYC-related support contacts post-launch" },
              ].map((m, i) => (
                <div key={i} className="p-6" style={{ background: "var(--card)", borderRight: i < 2 ? "1px solid rgba(255,255,255,0.08)" : undefined }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 700, color: ACC, lineHeight: 1, marginBottom: "0.4rem" }}>{m.metric}</div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.08em", color: "var(--foreground)", marginBottom: "0.4rem" }}>{m.label}</div>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: "0.8rem", color: "var(--muted-foreground)", lineHeight: 1.6 }}>{m.desc}</div>
                </div>
              ))}
            </div>
          </section>

          <section id="learned">
            <SectionHeading num="14" title="What I Learned" color={ACC} />
            <div className="p-6" style={{ background: "var(--card)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", color: "var(--muted-foreground)", lineHeight: 1.8 }}>
                This project showed me how trust, transparency, and microcopy can significantly shape the onboarding experience in fintech products. Small decisions in wording, progress visibility, and the placement of privacy information had a direct impact on user confidence and completion. It also reinforced the importance of testing flows with users before finalising high-stakes journeys — assumptions about what feels "clear" to a designer are often very different from what feels clear to a first-time user navigating a KYC process for the first time.
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
