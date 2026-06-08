import { ArrowLeft, Mail, Linkedin, FileText } from "lucide-react";

interface AboutProps {
  onBack: () => void;
}

const ACC = "#00d4b8";

const process = [
  { phase: "01 — UNDERSTAND", title: "Understand the problem", desc: "Start by researching users, understanding context, and questioning assumptions before any design decisions are made.", methods: ["User interviews", "Desk research", "Heuristic evaluation", "Stakeholder conversations"] },
  { phase: "02 — RESEARCH", title: "Research users", desc: "Define who the users are, what they need, and what gets in their way — grounded in research, not assumption.", methods: ["Usability testing", "Journey mapping", "Persona definition", "Insight synthesis"] },
  { phase: "03 — DESIGN", title: "Simplify complexity", desc: "Design flows, wireframes, and UI that reduce cognitive load — especially in high-stakes fintech contexts where clarity builds trust.", methods: ["Wireframing", "Prototyping", "Accessibility review", "Design iteration"] },
  { phase: "04 — DELIVER", title: "Test and iterate", desc: "Test with real users, incorporate findings, and collaborate with developers and stakeholders to ship something that actually works.", methods: ["User testing", "Dev handoff", "Stakeholder review", "Post-launch tracking"] },
];

export function About({ onBack }: AboutProps) {
  return (
    <div style={{ background: "var(--background)", minHeight: "100vh" }}>
      <div className="relative overflow-hidden" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: `linear-gradient(rgba(0,212,184,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,184,0.03) 1px, transparent 1px)`, backgroundSize: "48px 48px" }} />
        <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-12">
          <button onClick={onBack} className="flex items-center gap-2 mb-8 transition-colors duration-200" style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.08em", color: "var(--muted-foreground)" }} onMouseEnter={e => (e.currentTarget.style.color = ACC)} onMouseLeave={e => (e.currentTarget.style.color = "var(--muted-foreground)")}>
            <ArrowLeft size={12} /> BACK TO WORK
          </button>
          <span className="inline-block mb-3" style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.1em", color: ACC }}>ABOUT & PROCESS</span>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "var(--foreground)", lineHeight: 1.1, marginBottom: "1.25rem" }}>
            Graduate Product Designer.<br />
            <span style={{ color: ACC }}>London.</span>
          </h1>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "var(--muted-foreground)", maxWidth: "60ch", lineHeight: 1.8 }}>
            I am a Graduate Product Designer based in London with an MSc in Web &amp; Mobile Application Development Technologies from Northumbria University London. My work focuses on designing end-to-end digital experiences that are clear, accessible, and scalable. I am especially interested in fintech products, where trust, usability, and clarity are essential. I enjoy combining product thinking, user research, testing, and interface design to create experiences that solve real user problems.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 space-y-16">

        {/* Background */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.1em", color: "var(--muted-foreground)" }}>BACKGROUND</span>
            <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.08)" }} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
            {[
              { label: "Education", value: "MSc Web & Mobile Application Development Technologies", sub: "Northumbria University London" },
              { label: "Focus", value: "UX/UI & Product Design", sub: "Fintech, accessibility, scalable systems" },
              { label: "Location", value: "London, UK", sub: "Available for graduate product design roles" },
            ].map((item, i) => (
              <div key={i} className="p-6" style={{ background: "var(--card)", borderRight: i < 2 ? "1px solid rgba(255,255,255,0.08)" : undefined }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.1em", color: ACC, marginBottom: "0.5rem" }}>{item.label}</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "0.95rem", fontWeight: 600, color: "var(--foreground)", marginBottom: "0.3rem" }}>{item.value}</div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: "0.8rem", color: "var(--muted-foreground)" }}>{item.sub}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Design Process */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.1em", color: "var(--muted-foreground)" }}>MY DESIGN PROCESS</span>
            <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.08)" }} />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-px" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
            {process.map((p, i) => (
              <div key={i} className="p-6" style={{ background: "var(--card)", borderRight: i < 3 ? "1px solid rgba(255,255,255,0.08)" : undefined }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.1em", color: ACC, marginBottom: "0.75rem" }}>{p.phase}</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1rem", fontWeight: 600, color: "var(--foreground)", marginBottom: "0.75rem" }}>{p.title}</h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.8rem", color: "var(--muted-foreground)", lineHeight: 1.7, marginBottom: "1.25rem" }}>{p.desc}</p>
                <div className="space-y-1.5">
                  {p.methods.map((m, j) => (
                    <div key={j} className="flex items-center gap-1.5">
                      <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: ACC }} />
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "var(--muted-foreground)" }}>{m}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What I bring */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.1em", color: "var(--muted-foreground)" }}>WHAT I BRING</span>
            <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.08)" }} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { label: "End-to-end design", desc: "From research and problem framing through to UI, testing, and iteration — I work across the full product design process." },
              { label: "User research & testing", desc: "Usability testing and research findings inform every design decision. I test before finalising, not after." },
              { label: "Accessible, scalable systems", desc: "Accessibility and design systems built in from the start — not retrofitted at the end of a project." },
            ].map((v, i) => (
              <div key={i} className="p-5" style={{ background: "var(--card)", border: "1px solid rgba(255,255,255,0.08)", borderLeft: `3px solid ${ACC}` }}>
                <h4 style={{ fontFamily: "var(--font-display)", fontSize: "0.95rem", fontWeight: 600, color: "var(--foreground)", marginBottom: "0.5rem" }}>{v.label}</h4>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.85rem", color: "var(--muted-foreground)", lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="p-10 text-center" style={{ background: "var(--card)", border: "1px solid rgba(255,255,255,0.08)" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.75rem", fontWeight: 600, color: "var(--foreground)", marginBottom: "1rem" }}>
            Let's work together.
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "var(--muted-foreground)", marginBottom: "2rem", maxWidth: "42ch", margin: "0 auto 2rem" }}>
            Available for graduate product design roles in fintech, payments, and digital finance.
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <a href="mailto:hello@portfolio.design" className="flex items-center gap-2 transition-all duration-200" style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", letterSpacing: "0.06em", padding: "0.75rem 1.5rem", background: ACC, color: "#070c18", borderRadius: "2px", fontWeight: 600, textDecoration: "none" }}>
              <Mail size={14} /> GET IN TOUCH
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 transition-all duration-200" style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", letterSpacing: "0.06em", padding: "0.75rem 1.5rem", background: "transparent", color: "var(--muted-foreground)", borderRadius: "2px", border: "1px solid rgba(255,255,255,0.12)", textDecoration: "none" }}>
              <Linkedin size={14} /> LINKEDIN
            </a>
            <a href="#" className="flex items-center gap-2 transition-all duration-200" style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", letterSpacing: "0.06em", padding: "0.75rem 1.5rem", background: "transparent", color: "var(--muted-foreground)", borderRadius: "2px", border: "1px solid rgba(255,255,255,0.12)", textDecoration: "none" }}>
              <FileText size={14} /> DOWNLOAD CV
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}
