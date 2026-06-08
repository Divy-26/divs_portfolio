import { ArrowLeft, Mail, Linkedin, Copy, Check } from "lucide-react";
import { useState } from "react";

interface CoverLetterProps {
  onBack: () => void;
}

const coverLetterText = `Divya Gupta
gupta.divya.2006@gmail.com | LinkedIn | London, UK

Hiring Team — Graduate Product Designer Programme
Revolut
London, UK

8 June 2026

Dear Hiring Team,

I am writing to apply for the Graduate Product Designer role at Revolut. Revolut's mission — to deliver a global financial super-app that works for everyone — is the exact context in which I want to build my career. I have spent the past two years developing my practice specifically in the areas where Revolut competes hardest: onboarding and identity verification, cross-border money movement, and the design systems that let product teams ship consistently and fast.

I am a graduate product designer with an MSc in User Experience Design (Northumbria University London, 2025, 2:1) and a background in commerce and finance that gives me genuine domain fluency. I work end-to-end — from user research and journey mapping through high-fidelity prototyping, usability testing, and dev handoff — with an emphasis on measurable outcomes and cross-functional collaboration.

Three case studies form the core of this application, each directly aligned with Revolut's product priorities:

GuardianOnboard — I led end-to-end design for a KYC onboarding flow for a multi-currency wallet, coordinating with a Product Owner, three engineers, a Data Scientist, and Compliance. I produced the IA, journey maps, real-time validation UI, consent language, and accessibility QA. The redesign targeted a 12–20% activation lift and a 20–30% reduction in onboarding time by addressing the specific friction points — unclear document requirements, no progress visibility, and ambiguous consent messaging — that research identified as the primary drop-off causes.

QuickPay — I designed the end-to-end cross-border transfer journey: currency selection, live FX rate preview, fee transparency, ETA indicators, and risk-based compliance messaging. Working with Product, Engineering, Data, and Compliance, I produced flow diagrams, clickable prototypes, and a design-system extension for transaction modals. Usability testing validated that surfacing FX rate and fees at the entry point — not the confirmation screen — was the single highest-impact intervention.

FinSight Design System — I led the design-system audit and build across four fintech products, piloted with three squads. I defined the token architecture, component library governance, contribution model, and WCAG conformance process. The pilot reduced design-to-dev handoff time and established consistent accessibility conformance across squads — with an automated axe-core check in CI as a permanent safeguard.

Across all three projects, I brought compliance and regulatory constraints into the design process from the start — not as a final review gate. Consent language, data minimization, risk messaging, and GDPR-aligned disclosure patterns are part of my IA thinking, not afterthoughts.

I am based in London, eligible to work in the UK, and available immediately. I would welcome the opportunity to discuss how my fintech-focused practice and end-to-end process could contribute to Revolut's product design team.

Thank you for your time and consideration.

Sincerely,

Divya Gupta
gupta.divya.2006@gmail.com`;

const emailText = `Subject: Application — Graduate Product Designer, Revolut

Dear Hiring Team,

Please find attached my application for the Graduate Product Designer role. My portfolio at [your-portfolio-url] includes three fintech case studies — KYC onboarding (GuardianOnboard), cross-border transfers (QuickPay), and design systems (FinSight DS) — each with end-to-end process documentation and measurable outcome targets.

I'm based in London, UK work-eligible, and available immediately.

Kind regards,
Divya Gupta
gupta.divya.2006@gmail.com`;

export function CoverLetter({ onBack }: CoverLetterProps) {
  const [copiedLetter, setCopiedLetter] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copy = (text: string, which: "letter" | "email") => {
    navigator.clipboard.writeText(text);
    if (which === "letter") {
      setCopiedLetter(true);
      setTimeout(() => setCopiedLetter(false), 2000);
    } else {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  return (
    <div style={{ background: "var(--background)", minHeight: "100vh" }}>
      {/* Header */}
      <div className="relative overflow-hidden" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: `linear-gradient(rgba(0,212,184,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,184,0.03) 1px, transparent 1px)`, backgroundSize: "48px 48px" }} />
        <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-10">
          <button onClick={onBack} className="flex items-center gap-2 mb-8 transition-colors duration-200" style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.08em", color: "var(--muted-foreground)" }} onMouseEnter={e => (e.currentTarget.style.color = "#00d4b8")} onMouseLeave={e => (e.currentTarget.style.color = "var(--muted-foreground)")}>
            <ArrowLeft size={12} /> BACK TO ABOUT
          </button>
          <span className="inline-block mb-3" style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.1em", color: "#00d4b8" }}>APPLICATION MATERIALS</span>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 700, color: "var(--foreground)", lineHeight: 1.1, marginBottom: "0.5rem" }}>
            Revolut Graduate Product Designer
          </h1>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "var(--muted-foreground)" }}>
            UK cover letter · Application email · Divya Gupta · gupta.divya.2006@gmail.com
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main letter */}
        <div className="lg:col-span-2">
          {/* Cover Letter */}
          <div style={{ border: "1px solid rgba(255,255,255,0.08)", marginBottom: "2rem" }}>
            <div className="flex items-center justify-between px-5 py-3" style={{ background: "var(--secondary)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.08em", color: "var(--muted-foreground)" }}>UK COVER LETTER — REVOLUT GRADUATE PROGRAMME</span>
              <button
                onClick={() => copy(coverLetterText, "letter")}
                className="flex items-center gap-1.5 transition-colors duration-200"
                style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: copiedLetter ? "#00d4b8" : "var(--muted-foreground)" }}
              >
                {copiedLetter ? <Check size={11} /> : <Copy size={11} />}
                {copiedLetter ? "Copied" : "Copy"}
              </button>
            </div>
            <div className="p-8" style={{ background: "var(--card)" }}>
              {/* Letter header */}
              <div className="mb-8 pb-6" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", fontWeight: 600, color: "var(--foreground)", marginBottom: "0.25rem" }}>Divya Gupta</h2>
                <div className="flex flex-wrap gap-3">
                  {[
                    { icon: Mail, label: "gupta.divya.2006@gmail.com" },
                    { icon: Linkedin, label: "LinkedIn" },
                  ].map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <span key={i} className="flex items-center gap-1.5" style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--muted-foreground)" }}>
                        <Icon size={10} />{item.label}
                      </span>
                    );
                  })}
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--muted-foreground)" }}>London, UK</span>
                </div>
              </div>

              <div className="mb-6" style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "var(--muted-foreground)", lineHeight: 1.6 }}>
                <div>Hiring Team — Graduate Product Designer Programme</div>
                <div>Revolut · London, UK</div>
                <div style={{ marginTop: "0.5rem" }}>8 June 2026</div>
              </div>

              <div style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "var(--muted-foreground)", lineHeight: 1.8 }} className="space-y-4">
                <p>Dear Hiring Team,</p>

                <p>
                  I am writing to apply for the Graduate Product Designer role at Revolut. Revolut's mission — to deliver a global financial super-app that works for everyone — is the exact context in which I want to build my career. I have spent the past two years developing my practice specifically in the areas where Revolut competes hardest: onboarding and identity verification, cross-border money movement, and the design systems that let product teams ship consistently and fast.
                </p>

                <p>
                  I am a graduate product designer with an MSc in User Experience Design (Northumbria University London, 2025, 2:1) and a background in commerce and finance that gives me genuine domain fluency. I work end-to-end — from user research and journey mapping through high-fidelity prototyping, usability testing, and dev handoff — with an emphasis on measurable outcomes and cross-functional collaboration.
                </p>

                <p>Three case studies form the core of this application, each directly aligned with Revolut's product priorities:</p>

                <div className="space-y-3 pl-4" style={{ borderLeft: "2px solid rgba(0,212,184,0.3)" }}>
                  <p>
                    <span style={{ color: "var(--foreground)", fontWeight: 500 }}>GuardianOnboard</span> — I led end-to-end design for a KYC onboarding flow for a multi-currency wallet, coordinating with a Product Owner, three engineers, a Data Scientist, and Compliance. I produced the IA, journey maps, real-time validation UI, consent language, and accessibility QA. The redesign targeted a 12–20% activation lift and a 20–30% reduction in onboarding time by addressing the friction points — unclear document requirements, no progress visibility, and ambiguous consent messaging — that research identified as primary drop-off causes.
                  </p>
                  <p>
                    <span style={{ color: "var(--foreground)", fontWeight: 500 }}>QuickPay</span> — I designed the end-to-end cross-border transfer journey: currency selection, live FX rate preview, fee transparency, ETA indicators, and risk-based compliance messaging. Working with Product, Engineering, Data, and Compliance, I produced flow diagrams, clickable prototypes, and a design-system extension for transaction modals. Usability testing validated that surfacing FX rate and fees at the entry point — not the confirmation screen — was the single highest-impact intervention.
                  </p>
                  <p>
                    <span style={{ color: "var(--foreground)", fontWeight: 500 }}>FinSight Design System</span> — I led the design-system audit and build across four fintech products, piloted with three squads. I defined the token architecture, component library governance, contribution model, and WCAG conformance process. The pilot reduced design-to-dev handoff time and established consistent accessibility conformance, with automated axe-core checks in CI as a permanent safeguard.
                  </p>
                </div>

                <p>
                  Across all three projects, I brought compliance and regulatory constraints into the design process from the start — not as a final review gate. Consent language, data minimization, risk messaging, and GDPR-aligned disclosure patterns are part of my IA thinking, not afterthoughts.
                </p>

                <p>
                  I am based in London, eligible to work in the UK, and available immediately. I would welcome the opportunity to discuss how my fintech-focused practice and end-to-end process could contribute to Revolut's product design team.
                </p>

                <p>Thank you for your time and consideration.</p>

                <div className="pt-2">
                  <p style={{ color: "var(--foreground)", fontWeight: 500 }}>Divya Gupta</p>
                  <p style={{ fontSize: "0.8rem" }}>gupta.divya.2006@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Application Email */}
          <div style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
            <div className="flex items-center justify-between px-5 py-3" style={{ background: "var(--secondary)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.08em", color: "var(--muted-foreground)" }}>SHORT APPLICATION EMAIL (3–4 LINES)</span>
              <button
                onClick={() => copy(emailText, "email")}
                className="flex items-center gap-1.5 transition-colors duration-200"
                style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: copiedEmail ? "#00d4b8" : "var(--muted-foreground)" }}
              >
                {copiedEmail ? <Check size={11} /> : <Copy size={11} />}
                {copiedEmail ? "Copied" : "Copy"}
              </button>
            </div>
            <div className="p-6" style={{ background: "var(--card)" }}>
              <div className="mb-4 pb-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--muted-foreground)" }}>
                  <span style={{ color: "var(--foreground)" }}>Subject:</span> Application — Graduate Product Designer, Revolut
                </div>
              </div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "var(--muted-foreground)", lineHeight: 1.8 }} className="space-y-3">
                <p>Dear Hiring Team,</p>
                <p>
                  Please find attached my application for the Graduate Product Designer role. My portfolio at{" "}
                  <span style={{ color: "#00d4b8", fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>[your-portfolio-url]</span>{" "}
                  includes three fintech case studies — KYC onboarding (GuardianOnboard), cross-border transfers (QuickPay), and design systems (FinSight DS) — each with end-to-end process documentation and measurable outcome targets.
                </p>
                <p>I'm based in London, UK work-eligible, and available immediately.</p>
                <div className="pt-1">
                  <p>Kind regards,</p>
                  <p style={{ color: "var(--foreground)", fontWeight: 500 }}>Divya Gupta</p>
                  <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem" }}>gupta.divya.2006@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar — checklist + CV summary */}
        <div className="space-y-5">
          {/* Submission checklist */}
          <div style={{ border: "1px solid rgba(255,255,255,0.08)", background: "var(--card)" }}>
            <div className="px-4 py-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.08em", color: "var(--muted-foreground)" }}>SUBMISSION CHECKLIST</span>
            </div>
            <div className="p-4 space-y-2.5">
              {[
                { done: true, item: "Cover letter (UK format, 1 page)" },
                { done: true, item: "Application email (3–4 lines)" },
                { done: true, item: "Portfolio site live and accessible" },
                { done: true, item: "3 case studies with process narrative" },
                { done: true, item: "Design system page published" },
                { done: true, item: "WCAG accessibility on all visuals" },
                { done: false, item: "Add portfolio URL to email template" },
                { done: false, item: "Export CV as ATS-friendly PDF" },
                { done: false, item: "Ensure Figma links are public" },
                { done: false, item: "Proofread with fresh eyes" },
              ].map((c, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div
                    className="w-3.5 h-3.5 flex items-center justify-center flex-shrink-0 rounded-sm"
                    style={{
                      background: c.done ? "rgba(0,212,184,0.15)" : "rgba(255,255,255,0.04)",
                      border: `1px solid ${c.done ? "rgba(0,212,184,0.4)" : "rgba(255,255,255,0.1)"}`,
                    }}
                  >
                    {c.done && <span style={{ fontSize: "0.5rem", color: "#00d4b8" }}>✓</span>}
                  </div>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: "0.78rem", color: c.done ? "var(--foreground)" : "var(--muted-foreground)", textDecoration: c.done ? "none" : "none" }}>{c.item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CV summary card */}
          <div style={{ border: "1px solid rgba(255,255,255,0.08)", background: "var(--card)" }}>
            <div className="px-4 py-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.08em", color: "var(--muted-foreground)" }}>CV HEADLINE SUMMARY</span>
            </div>
            <div className="p-4 space-y-3">
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "1rem", fontWeight: 600, color: "var(--foreground)" }}>Divya Gupta</div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "#00d4b8" }}>Product Designer (UX/UI)</div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "var(--muted-foreground)", marginTop: "0.25rem" }}>London, UK · gupta.divya.2006@gmail.com</div>
              </div>
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "0.75rem" }}>
                {[
                  ["MSc UX Design", "Northumbria University London, 2025 (2:1)"],
                  ["Diploma UI/UX", "Professional certification, 2023"],
                  ["BCom", "Undergraduate, First Class"],
                  ["Freelance PD", "End-to-end, 2023–Present"],
                ].map(([role, detail], i) => (
                  <div key={i} className="flex justify-between py-1.5" style={{ borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "var(--foreground)" }}>{role}</span>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "var(--muted-foreground)", textAlign: "right", maxWidth: "130px" }}>{detail}</span>
                  </div>
                ))}
              </div>
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "0.75rem" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", color: "var(--muted-foreground)", marginBottom: "0.5rem" }}>KEY COMPETENCIES</div>
                <div className="flex flex-wrap gap-1.5">
                  {["End-to-end PD", "Figma", "WCAG AA", "Fintech/KYC", "Design Systems", "Cross-functional"].map((tag, i) => (
                    <span key={i} style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", color: "var(--muted-foreground)", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", padding: "0.15rem 0.4rem", borderRadius: "2px" }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Red flags avoided */}
          <div style={{ border: "1px solid rgba(239,68,68,0.15)", background: "rgba(239,68,68,0.03)" }}>
            <div className="px-4 py-3" style={{ borderBottom: "1px solid rgba(239,68,68,0.1)" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.08em", color: "#ef4444" }}>RED FLAGS — AVOIDED ✓</span>
            </div>
            <div className="p-4 space-y-2">
              {[
                "No measurable impact → targets labelled as targets",
                "Vague roles → explicit ownership stated per case",
                "No fintech risk signals → compliance & GDPR central",
                "Broken links → checklist before submission",
                "Visuals without process → narrative-first structure",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "#00d4b8", flexShrink: 0 }}>✓</span>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "var(--muted-foreground)", lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
