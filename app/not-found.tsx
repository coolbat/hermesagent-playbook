import Link from "next/link";

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: "40px 20px",
        background: "#080808",
        color: "#f6efcf",
        fontFamily: '"IBM Plex Sans", "PingFang SC", sans-serif',
      }}
    >
      <div
        style={{
          maxWidth: 560,
          textAlign: "center",
          display: "grid",
          gap: 16,
        }}
      >
        <p
          style={{
            margin: 0,
            color: "#ffcf10",
            fontSize: 12,
            fontWeight: 800,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          Page not found
        </p>
        <h1 style={{ margin: 0, fontSize: "clamp(32px, 7vw, 54px)", lineHeight: 1.02 }}>
          Hermes Agent Playbook
        </h1>
        <p style={{ margin: 0, color: "#b6a769", fontSize: 18, lineHeight: 1.6 }}>
          The page you requested does not exist. Go back to the quick-start path and continue from
          a working entry point.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: 44,
              padding: "0 18px",
              borderRadius: 999,
              background: "#ffcf10",
              color: "#080808",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            Return home
          </Link>
          <Link
            href="/troubleshoot"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: 44,
              padding: "0 18px",
              borderRadius: 999,
              border: "1px solid rgba(255, 207, 16, 0.2)",
              color: "#f6efcf",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            Open troubleshoot
          </Link>
        </div>
      </div>
    </main>
  );
}
