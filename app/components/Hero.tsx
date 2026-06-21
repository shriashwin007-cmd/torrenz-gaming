"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const STATS = [
  { value: "PS5", label: "Pro consoles" },
  { value: "4", label: "PS5 Consoles" },
  { value: "Snacks", label: "Served inside" },
  { value: "4.5 ★", label: "Rated lounge" },
];

export default function Hero({ onChatOpen }: { onChatOpen: () => void }) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0px", "80px"]);

  return (
    <section ref={sectionRef} id="home" style={{ minHeight: "100svh", display: "grid", alignItems: "center", paddingTop: "calc(90px + env(safe-area-inset-top, 0px))", paddingBottom: 56, position: "relative", zIndex: 1 }}>
      <div className="wrap" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(2rem,5vw,4rem)", alignItems: "center" }}>

        {/* Left */}
        <div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", borderRadius: 999, border: "1px solid rgba(168,85,247,0.35)", background: "rgba(168,85,247,0.08)", marginBottom: 18 }}>
            <span className="pulse-dot" />
            <span style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "0.76rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#a855f7" }}>
              Perambur, Chennai · Open till midnight
            </span>
          </div>

          <h1 style={{ fontFamily: "Orbitron, sans-serif", fontWeight: 900, fontSize: "clamp(3rem,7vw,5.6rem)", lineHeight: 0.96, marginBottom: 18 }}>
            Enter the{" "}
            <span className="grad">Torrenz Zone</span>
          </h1>

          <p style={{ color: "rgba(248,251,255,0.65)", fontSize: "clamp(1rem,1.6vw,1.14rem)", lineHeight: 1.72, maxWidth: 560, marginBottom: 28 }}>
            A premium PS5 gaming lounge in Perambur built for squad nights, birthdays, and serious gaming sessions. 4 consoles, snacks, and everything you need to play at your best.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 32 }}>
            <a href="#book" style={{ display: "inline-flex", alignItems: "center", gap: 8, minHeight: 48, padding: "0 22px", borderRadius: 14, fontWeight: 800, textDecoration: "none", color: "#fff", background: "linear-gradient(135deg,#a855f7,#e879f9)", boxShadow: "0 16px 44px rgba(168,85,247,0.3)" }}>
              🎮 Reserve a Slot
            </a>
            <button onClick={onChatOpen} style={{ display: "inline-flex", alignItems: "center", gap: 8, minHeight: 48, padding: "0 22px", borderRadius: 14, fontWeight: 800, border: "1px solid rgba(168,85,247,0.44)", background: "rgba(168,85,247,0.06)", color: "#a855f7", cursor: "pointer", fontFamily: "inherit" }}>
              🤖 Ask TZ Assist
            </button>
            <a href="https://wa.me/918610326056?text=Hi%20Torrenz%20Gaming!%20I%20want%20to%20book." target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, minHeight: 48, padding: "0 22px", borderRadius: 14, fontWeight: 800, textDecoration: "none", color: "#03120a", background: "#25d366", boxShadow: "0 14px 40px rgba(37,211,102,0.22)" }}>
              💬 WhatsApp
            </a>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10 }}>
            {STATS.map((s) => (
              <div key={s.value} className="glass" style={{ borderRadius: 14, padding: "14px 12px" }}>
                <strong style={{ display: "block", fontFamily: "Orbitron, sans-serif", fontSize: "0.95rem", color: "#a855f7" }}>{s.value}</strong>
                <span style={{ fontSize: "0.74rem", color: "rgba(248,251,255,0.42)" }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right – parallax image */}
        <div style={{ borderRadius: 24, overflow: "hidden", minHeight: 500, position: "relative", border: "1px solid rgba(168,85,247,0.25)", boxShadow: "0 0 80px rgba(168,85,247,0.14), 0 0 120px rgba(232,121,249,0.06)" }}>
          <motion.img
            src="https://res.cloudinary.com/dxvui0xkz/image/upload/v1781542712/gaming_lounge_setup_1_kigpow.png"
            alt="Torrenz Gaming Lounge"
            style={{
              y,
              position: "absolute",
              top: -80,
              left: 0,
              width: "100%",
              height: "calc(100% + 160px)",
              objectFit: "cover",
              willChange: "transform",
            }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 55%, rgba(8,5,15,0.72) 100%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(168,85,247,0.08) 0%, transparent 50%, rgba(232,121,249,0.07) 100%)", pointerEvents: "none" }} />
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          #home { padding-top: calc(82px + env(safe-area-inset-top, 0px)) !important; padding-bottom: 40px !important; }
          #home .wrap { grid-template-columns: 1fr !important; }
          #home .wrap > div:last-child { order: -1; min-height: 260px !important; }
        }
        @media (max-width: 600px) {
          #home .wrap > div:first-child > div:last-child { grid-template-columns: repeat(2,1fr) !important; }
          #home .wrap > div:first-child > div:nth-of-type(2) { flex-direction: column !important; }
          #home .wrap > div:first-child > div:nth-of-type(2) > a,
          #home .wrap > div:first-child > div:nth-of-type(2) > button {
            width: 100% !important; justify-content: center !important;
          }
          #home .wrap > div:last-child { min-height: 220px !important; }
        }
      `}</style>
    </section>
  );
}
