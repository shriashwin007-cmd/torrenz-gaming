export default function Footer() {
  return (
    <footer style={{ position: "relative", zIndex: 1, padding: "48px 0 calc(48px + env(safe-area-inset-bottom,0px))", borderTop: "1px solid rgba(168,85,247,0.15)", color: "rgba(248,251,255,0.42)" }}>
      <div className="wrap" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.jpg"
            alt="Torrenz Gaming"
            style={{ height: 40, width: 40, borderRadius: "50%", objectFit: "cover", background: "#fff", boxShadow: "0 0 12px rgba(168,85,247,0.4)" }}
          />
          <div>
            <b style={{ color: "#f8fbff", fontFamily: "Orbitron, sans-serif", letterSpacing: "0.08em" }}>TORRENZ GAMING</b>
            <br />Press start. Enter the zone.
          </div>
        </div>
        <div>© {new Date().getFullYear()} Torrenz Gaming · Perambur, Chennai</div>
      </div>
    </footer>
  );
}
