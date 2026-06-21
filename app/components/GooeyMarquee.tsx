"use client";

interface GooeyMarqueeProps {
  text?: string;
  speed?: number;
}

export function GooeyMarquee({ text = "TORRENZ GAMING", speed = 16 }: GooeyMarqueeProps) {
  return (
    <div style={{ position: "relative", width: "100%", height: 96, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>

      {/* Gooey blur layer */}
      <div style={{
        position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center",
        backgroundColor: "#08050f",
        backgroundImage: `linear-gradient(to right, #08050f, 3rem, transparent 45%), linear-gradient(to left, #08050f, 3rem, transparent 45%)`,
        filter: "contrast(18)",
      }}>
        <p className="tz-marquee" style={{
          position: "absolute", minWidth: "100%", whiteSpace: "nowrap",
          fontFamily: "Orbitron, sans-serif", fontWeight: 900,
          fontSize: "clamp(2.2rem, 6vw, 3.8rem)", letterSpacing: "0.12em",
          color: "#a855f7",
          filter: "blur(0.06em)",
          animationDuration: `${speed}s`,
        }}>{text}</p>
      </div>

      {/* Sharp text on top */}
      <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <p className="tz-marquee" style={{
          position: "absolute", minWidth: "100%", whiteSpace: "nowrap",
          fontFamily: "Orbitron, sans-serif", fontWeight: 900,
          fontSize: "clamp(2.2rem, 6vw, 3.8rem)", letterSpacing: "0.12em",
          color: "#a855f7",
          animationDuration: `${speed}s`,
        }}>{text}</p>
      </div>

      <style>{`
        @keyframes tzMarquee {
          from { transform: translateX(70%); }
          to   { transform: translateX(-70%); }
        }
        .tz-marquee {
          animation: tzMarquee ${speed}s infinite linear;
        }
      `}</style>
    </div>
  );
}
