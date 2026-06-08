import { useState, useEffect } from "react";

type Section = "home" | "guardian" | "quickpay" | "finsight" | "about";

interface NavProps {
  active: Section;
  onNavigate: (s: Section) => void;
}

export function Nav({ active, onNavigate }: NavProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links: { id: Section; label: string }[] = [
    { id: "home", label: "Work" },
    { id: "guardian", label: "GuardianOnboard" },
    { id: "quickpay", label: "QuickPay" },
    { id: "finsight", label: "FinSight DS" },
    { id: "about", label: "About" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(7,12,24,0.95)" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-14">
        <button
          onClick={() => onNavigate("home")}
          className="flex items-center gap-2 group"
          style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", letterSpacing: "0.08em" }}
        >
          <span
            className="w-5 h-5 flex items-center justify-center"
            style={{ background: "var(--primary)", borderRadius: "2px" }}
          >
            <span style={{ color: "var(--primary-foreground)", fontSize: "0.6rem", fontWeight: 700 }}>FD</span>
          </span>
          <span style={{ color: "var(--foreground)", opacity: 0.9 }}>FINTECH.DESIGN</span>
        </button>

        <div className="flex items-center gap-1">
          {links.filter(l => l.id !== "home").map((link) => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className="transition-all duration-200"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                letterSpacing: "0.06em",
                padding: "0.35rem 0.75rem",
                borderRadius: "2px",
                color: active === link.id ? "var(--primary)" : "var(--muted-foreground)",
                background: active === link.id ? "rgba(0,212,184,0.08)" : "transparent",
                border: active === link.id ? "1px solid rgba(0,212,184,0.3)" : "1px solid transparent",
              }}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
