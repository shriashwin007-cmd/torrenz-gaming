export default function Location() {
  return (
    <section id="location" style={{ padding: "80px 0", position: "relative", zIndex: 1 }}>
      <div className="wrap" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, alignItems: "start" }}>

        <div className="glass" style={{ borderRadius: 22, padding: 28 }}>
          <div style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 800, fontSize: "0.78rem", letterSpacing: "0.26em", textTransform: "uppercase", color: "#a855f7", marginBottom: 8 }}>Find Us</div>
          <h2 style={{ fontFamily: "Orbitron, sans-serif", fontWeight: 900, fontSize: "clamp(1.8rem,3.5vw,2.8rem)", lineHeight: 1.08, marginBottom: 24 }}>
            Torrenz Gaming Chennai
          </h2>
          {[
            { label: "Phone",   content: <a href="tel:918610326056" style={{ color: "rgba(248,251,255,0.65)", textDecoration: "none" }}>+91 86103 26056</a> },
            { label: "Hours",   content: <span style={{ color: "rgba(248,251,255,0.65)" }}>Open Daily · 11:00 AM – 12:00 AM</span> },
            { label: "Address", content: <span style={{ color: "rgba(248,251,255,0.65)" }}>Siva Elango Salai, Periyar Nagar West, Jawahar Nagar, Perambur, Chennai – 600082</span> },
          ].map((r) => (
            <div key={r.label} style={{ padding: "14px 0", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
              <small style={{ display: "block", fontFamily: "Rajdhani, sans-serif", fontWeight: 800, fontSize: "0.72rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#a855f7", marginBottom: 4 }}>{r.label}</small>
              {r.content}
            </div>
          ))}
          <a href="https://maps.google.com/?q=Torrenz+Gaming+Siva+Elango+Salai+Periyar+Nagar+West+Perambur+Chennai" target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 20, minHeight: 44, padding: "0 20px", borderRadius: 12, border: "1px solid rgba(168,85,247,0.44)", background: "rgba(168,85,247,0.06)", color: "#a855f7", fontWeight: 800, textDecoration: "none" }}>
            🗺️ Get Directions
          </a>
        </div>

        <iframe
          className="glass"
          style={{ minHeight: 380, width: "100%", border: 0, borderRadius: 22, filter: "grayscale(.55) invert(.88) brightness(.72) hue-rotate(220deg)" }}
          title="Torrenz Gaming location"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://maps.google.com/maps?q=Siva+Elango+Salai%2C+Periyar+Nagar+West%2C+Jawahar+Nagar%2C+Perambur%2C+Chennai%2C+Tamil+Nadu+600082&t=&z=15&ie=UTF8&iwloc=&output=embed"
        />
      </div>
      <style>{`
        @media (max-width: 760px) { #location .wrap { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
