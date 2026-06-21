"use client";
import { useState } from "react";
import { useCart } from "@/app/context/CartContext";

const NAV_LINKS = [
  { href: "#rooms", label: "Rooms" },
  { href: "#add-ons", label: "Add-ons" },
  { href: "#gallery", label: "Gallery" },
  { href: "#pricing", label: "Pricing" },
  { href: "#location", label: "Location" },
];

export default function Navbar({ onChatOpen }: { onChatOpen: () => void }) {
  const [open, setOpen] = useState(false);
  const { totalItems, openCart } = useCart();

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      background: "rgba(8,5,15,0.78)",
      borderBottom: "1px solid rgba(168,85,247,0.15)",
      backdropFilter: "blur(24px)",
      WebkitBackdropFilter: "blur(24px)",
    }}>
      <div className="wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", minHeight: 70, gap: 16 }}>

        {/* Brand */}
        <a href="#home" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.jpg"
            alt="Torrenz Gaming"
            style={{
              height: 48, width: 48,
              borderRadius: "50%",
              objectFit: "cover",
              background: "#fff",
              boxShadow: "0 0 18px rgba(168,85,247,0.5)",
            }}
          />
          <div>
            <div style={{ fontFamily: "Orbitron, sans-serif", fontWeight: 900, fontSize: "1rem", letterSpacing: "0.1em", color: "#f8fbff" }}>
              TORRENZ
            </div>
            <div style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "0.6rem", letterSpacing: "0.28em", color: "#a855f7", textTransform: "uppercase" }}>
              Gaming Centre
            </div>
          </div>
        </a>

        {/* Desktop nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: 24 }} className="desktop-nav">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} style={{ color: "rgba(248,251,255,0.65)", textDecoration: "none", fontWeight: 700, fontSize: "0.88rem", transition: "color .2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#a855f7")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(248,251,255,0.65)")}
            >{l.label}</a>
          ))}
          <a href="#book" style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            minHeight: 42, padding: "0 20px", borderRadius: 12, border: "none",
            fontWeight: 800, fontSize: "0.88rem", textDecoration: "none",
            color: "#fff", background: "linear-gradient(135deg, #a855f7, #e879f9)",
            boxShadow: "0 12px 32px rgba(168,85,247,0.3)", cursor: "pointer",
          }}>Book Now</a>
        </nav>

        {/* Right controls */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <button onClick={openCart} aria-label="Cart" style={{
            position: "relative", width: 44, height: 44, borderRadius: 12,
            border: "1px solid rgba(168,85,247,0.25)", background: "rgba(168,85,247,0.08)",
            color: "#f8fbff", fontSize: "1.2rem", cursor: "pointer", display: "grid", placeItems: "center",
          }}>
            🛒
            {totalItems > 0 && (
              <span style={{
                position: "absolute", top: -4, right: -4,
                minWidth: 20, height: 20, borderRadius: 999,
                background: "#e879f9", color: "#fff",
                fontSize: "0.68rem", fontWeight: 800, display: "grid", placeItems: "center", padding: "0 4px",
              }}>{totalItems}</span>
            )}
          </button>

          <button
            className="hamburger"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            style={{
              width: 44, height: 44, borderRadius: 12,
              border: "1px solid rgba(168,85,247,0.25)", background: "rgba(168,85,247,0.08)",
              color: "#f8fbff", fontSize: "1.2rem", cursor: "pointer", display: "none", placeItems: "center",
            }}
          >{open ? "✕" : "☰"}</button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ padding: "0 16px 16px", display: "grid", gap: 8 }}>
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
              display: "flex", alignItems: "center", minHeight: 46, padding: "0 16px",
              borderRadius: 12, background: "rgba(168,85,247,0.08)",
              color: "rgba(248,251,255,0.65)", fontWeight: 700, textDecoration: "none",
            }}>{l.label}</a>
          ))}
          <a href="#book" onClick={() => setOpen(false)} style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            minHeight: 46, borderRadius: 12, fontWeight: 800,
            color: "#fff", background: "linear-gradient(135deg, #a855f7, #e879f9)",
            textDecoration: "none",
          }}>Book Now</a>
          <button onClick={() => { setOpen(false); onChatOpen(); }} style={{
            display: "flex", alignItems: "center", minHeight: 46, padding: "0 16px",
            borderRadius: 12, background: "rgba(168,85,247,0.1)",
            border: "1px solid rgba(168,85,247,0.3)", color: "#a855f7",
            fontWeight: 700, cursor: "pointer", fontFamily: "inherit",
          }}>🤖 AI Chat</button>
        </div>
      )}

      <style>{`
        @media (max-width: 860px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: grid !important; }
        }
        @media (max-width: 600px) {
          header .wrap { min-height: 60px !important; }
        }
        @media (max-width: 380px) {
          header .wrap > a:first-child > div > div:last-child { display: none !important; }
        }
      `}</style>
    </header>
  );
}
