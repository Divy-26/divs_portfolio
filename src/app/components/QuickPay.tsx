import { useState } from "react";
import { ArrowLeft, Zap, CheckCircle, Users, Search, Target, Cpu, Layout, TestTube, RotateCcw, Star, BarChart2, BookOpen } from "lucide-react";

interface QuickPayProps {
  onBack: () => void;
}

const ACC = "#3b82f6";

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

export function QuickPay({ onBack }: QuickPayProps) {
  const [active, setActive] = useState("overview");
  const [amount, setAmount] = useState("100");
  const rate = 1.185;
  const fee = 2.5;
  const converted = (parseFloat(amount || "0") * rate - fee).toFixed(2);

  const scrollTo = (id: string) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div style={{ background: "var(--background)", minHeight: "100vh" }}>
      <div className="relative overflow-hidden" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: `linear-gradient(rgba(59,130,246,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.03) 1px, transparent 1px)`, backgroundSize: "48px 48px" }} />
        <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-10">
          <button onClick={onBack} className="flex items-center gap-2 mb-8 transition-colors duration-200" style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.08em", color: "var(--muted-foreground)" }} onMouseEnter={e => (e.currentTarget.style.color = ACC)} onMouseLeave={e => (e.currentTarget.style.color = "var(--muted-foreground)")}>
            <ArrowLeft size={12} /> BACK TO WORK
          </button>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 flex items-center justify-center" style={{ background: `${ACC}14`, border: `1px solid ${ACC}30`, borderRadius: "4px" }}>
              <Zap size={18} style={{ color: ACC }} />
            </div>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.1em", color: ACC }}>CASE STUDY 02</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 700, color: "var(--foreground)", lineHeight: 1.1, marginBottom: "0.75rem" }}>
            QuickPay
          </h1>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: ACC, letterSpacing: "0.06em" }}>
            Improving clarity and confidence in cross-border payments
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
                QuickPay is a self-initiated product case study focused on designing a clearer cross-border payments experience. The aim was to reduce uncertainty around fees, exchange rates, and transfer progress while improving trust and completion. This project explores how information hierarchy, transparency in financial data, and clearer status communication can meaningfully reduce payment abandonment and user anxiety.
              </p>
            </div>
          </section>

          <section id="problem">
            <SectionHeading num="02" title="Problem" color={ACC} />
            <div className="p-6" style={{ background: "var(--card)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", color: "var(--muted-foreground)", lineHeight: 1.8, marginBottom: "1rem" }}>
                Users often hesitate during international transfers because fees, exchange rates, and status updates are not always presented clearly. This creates confusion, lowers trust, and can lead to drop-off before a transfer is completed.
              </p>
              <div className="px-4 py-3" style={{ background: `${ACC}08`, border: `1px solid ${ACC}20`, borderRadius: "2px" }}>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: ACC, letterSpacing: "0.04em" }}>
                  How might we design a cross-border payment experience that builds confidence through fee transparency, clear rate presentation, and reassuring transfer status updates?
                </p>
              </div>
            </div>
          </section>

          <section id="role">
            <SectionHeading num="03" title="My Role" color={ACC} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
              {[
                { label: "Role", items: ["Product Designer", "End-to-end ownership"] },
                { label: "Responsibilities", items: ["Research", "Product flow design", "UI design", "Prototype", "User testing", "Iteration"] },
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { type: "International senders", desc: "Sending money to family, friends, or for business — want certainty before confirming." },
                { type: "Fee-sensitive users", desc: "Concerned about hidden charges or unexpected deductions on the receiving end." },
                { type: "Progress-anxious users", desc: "Want strong reassurance that their transfer is being processed correctly and on time." },
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
                "Users wanted fee transparency earlier in the journey — discovering fees at the confirmation screen felt like a surprise and caused abandonment.",
                "People felt anxious when exchange rates changed without warning — live rate visibility and lock-in options improved confidence.",
                "Users wanted stronger progress and status feedback — vague 'processing' states created uncertainty about whether transfers had succeeded.",
                "Confirmation screens were often too vague — users wanted itemised summaries of exactly what was sent, received, and when.",
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
                "Improve transfer clarity — fees, rates, and totals visible before confirmation",
                "Reduce payment abandonment through earlier transparency",
                "Improve trust in the overall experience",
                "Make transfer status updates feel reassuring and specific",
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
                { step: "Map", desc: "Mapped the existing payment journey to identify all uncertainty and abandonment points." },
                { step: "Redesign", desc: "Redesigned the rate preview and transfer summary to surface fees and totals earlier." },
                { step: "Clarify", desc: "Improved fee transparency with itemised breakdowns visible before users commit." },
                { step: "Track", desc: "Improved transfer status tracking with specific, meaningful state messages." },
                { step: "Simplify", desc: "Simplified the confirmation experience with a clear, reassuring summary screen." },
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
                { label: "Transfer Flow Map", items: ["Entry and rate preview", "Fee breakdown screens", "Confirmation journey"] },
                { label: "Status Tracking States", items: ["Initiated state", "In-progress state", "Completed confirmation"] },
                { label: "Rate Preview Screens", items: ["Live rate display", "Fee itemisation", "Amount received preview"] },
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

            {/* Interactive FX preview */}
            <div className="mt-4 p-6" style={{ background: "var(--card)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.1em", color: "var(--muted-foreground)", marginBottom: "1rem" }}>LIVE RATE PREVIEW — INTERACTIVE PROTOTYPE COMPONENT</div>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-1">
                  <label style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "var(--muted-foreground)", letterSpacing: "0.08em" }}>YOU SEND (GBP)</label>
                  <input type="number" value={amount} onChange={e => setAmount(e.target.value)} className="block w-full mt-2 px-3 py-2 outline-none" style={{ background: "var(--background)", border: `1px solid ${ACC}40`, borderRadius: "2px", fontFamily: "var(--font-display)", fontSize: "1.5rem", color: "var(--foreground)" }} />
                </div>
                <div className="flex-1">
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "var(--muted-foreground)", letterSpacing: "0.08em" }}>THEY RECEIVE (EUR)</div>
                  <div className="mt-2 px-3 py-2" style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", color: ACC }}>€{isNaN(parseFloat(converted)) ? "0.00" : converted}</div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "var(--muted-foreground)" }}>Rate: 1 GBP = {rate} EUR · Fee: £{fee}</div>
                </div>
              </div>
            </div>
          </section>

          <section id="ui">
            <SectionHeading num="09" title="UI Design" color={ACC} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { label: "Clean information hierarchy", desc: "Amounts, rates, and timings given visual prominence — secondary details clearly separated." },
                { label: "Emphasis on financial data", desc: "Send amount, receive amount, fee, and rate all visible together before confirmation." },
                { label: "Trust indicators", desc: "Rate lock timers, compliance badges, and transfer reference numbers at key moments." },
                { label: "Accessible layout", desc: "WCAG AA contrast throughout. Readable number formatting for financial values." },
                { label: "Readable typography", desc: "Tabular number rendering for financial values — no ambiguity in amounts." },
                { label: "Status screen design", desc: "Specific status messages with estimated completion times, not vague 'processing' states." },
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
                  I tested the payment flow with 5 users to understand how clearly they could interpret rates, fees, and progress updates. Sessions used a mid-fidelity prototype and task-based scenarios.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5" style={{ background: "var(--card)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.1em", color: "var(--muted-foreground)", marginBottom: "0.75rem" }}>TESTING GOALS</div>
                  <div className="space-y-2">
                    {[
                      "Assess whether users understood the full cost before confirming",
                      "Identify confusion around exchange rate presentation",
                      "Evaluate whether transfer status updates felt reassuring",
                      "Check whether confirmation screens built confidence",
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
                      "Early fee visibility improved confidence before commit",
                      "Clearer exchange rate explanations reduced hesitation",
                      "Users preferred stronger, more specific transfer status messaging",
                      "Improved hierarchy helped users scan financial information faster",
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
                { before: "Fee shown only at confirmation screen", after: "Fee breakdown surfaced in the rate preview step", why: "Users felt surprised by fees at confirmation — moving it earlier removed the shock." },
                { before: "Technical exchange rate language", after: "Plain language rate summary with receive amount prominently shown", why: "Users couldn't interpret rate values — they needed to see the outcome, not the formula." },
                { before: "Vague confirmation copy", after: "Strengthened confirmation with itemised summary and reference number", why: "Users wanted proof the transfer was accepted, not just a generic success screen." },
                { before: "Generic 'processing' status", after: "Specific status with estimated completion time and tracking milestone", why: "Vague status created anxiety — users wanted to know what 'processing' actually meant." },
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
                The final QuickPay solution supports trust, transparency, and clarity at every stage of the cross-border transfer experience — from rate preview through to post-transfer confirmation.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {[
                  "Fee breakdown visible before users reach the confirmation screen",
                  "Live exchange rate preview with plain-language summary",
                  "Itemised confirmation screen with transfer reference number",
                  "Specific transfer status states with estimated completion times",
                  "Accessible, readable financial data formatting throughout",
                  "Trust indicators at key commitment points in the flow",
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
                { metric: "5–15%", label: "Transfer completion uplift", desc: "Increase in users completing cross-border transfers end-to-end" },
                { metric: "10–25%", label: "Time-to-complete reduction", desc: "Faster completion through clearer rate and fee presentation" },
                { metric: "10–20%", label: "Post-transfer query reduction", desc: "Fewer support contacts from confused or anxious senders" },
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
                This project strengthened my understanding of how financial clarity and confidence affect user behaviour. In payments, even small decisions in hierarchy and wording can influence trust and completion. Surfacing fees and rates earlier — before users feel committed — is a fundamental design principle in payments UX, not an optional enhancement. Testing confirmed that users don't need more information; they need the right information, at the right moment, in language they can actually understand.
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
