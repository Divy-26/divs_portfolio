import { useState, useEffect } from "react";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { GuardianOnboard } from "./components/GuardianOnboard";
import { QuickPay } from "./components/QuickPay";
import { FinSight } from "./components/FinSight";
import { About } from "./components/About";

{/* MARKER-MAKE-KIT-INVOKED */}

type Section = "home" | "guardian" | "quickpay" | "finsight" | "about";

export default function App() {
  const [section, setSection] = useState<Section>("home");

  const navigate = (s: Section) => {
    setSection(s);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [section]);

  return (
    <div
      className="min-h-screen"
      style={{
        background: "var(--background)",
        color: "var(--foreground)",
        fontFamily: "var(--font-body)",
      }}
    >
      <Nav active={section} onNavigate={navigate} />

      {section === "home" && <Hero onNavigate={navigate} />}
      {section === "guardian" && <GuardianOnboard onBack={() => navigate("home")} />}
      {section === "quickpay" && <QuickPay onBack={() => navigate("home")} />}
      {section === "finsight" && <FinSight onBack={() => navigate("home")} />}
      {section === "about" && <About onBack={() => navigate("home")} />}

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          padding: "1.5rem 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.08em", color: "var(--muted-foreground)" }}>
          FINTECH.DESIGN — PRODUCT UX PORTFOLIO — 2024
        </span>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.08em", color: "var(--muted-foreground)" }}>
          WCAG AA · GDPR-CONSCIOUS · AVAILABLE FOR HIRE
        </span>
      </footer>
    </div>
  );
}
