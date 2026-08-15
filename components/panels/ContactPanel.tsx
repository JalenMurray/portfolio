"use client";

import { useState } from "react";

export default function ContactPanel() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const form = new FormData(e.currentTarget);
    const body = {
      name: form.get("name"),
      email: form.get("email"),
      message: form.get("message"),
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (res.ok) {
      setStatus("sent");
    } else {
      const data = await res.json().catch(() => ({}));
      setError(data.error || "Something went wrong.");
      setStatus("error");
    }
  }

  const inputStyle: React.CSSProperties = {
    display: "block",
    width: "100%",
    marginBottom: "12px",
    padding: "10px 12px",
    background: "var(--bg-panel)",
    border: "0.5px solid var(--text-muted)",
    borderRadius: "4px",
    color: "var(--text-primary)",
    fontFamily: "var(--font-sans)",
    fontSize: "14px",
  };

  return (
    <div>
      <p className="mono" style={{ fontSize: "13px", color: "var(--accent-teal)", marginBottom: "20px" }}>
        ~/contact/
      </p>
      {status === "sent" ? (
        <p>Message sent. I&apos;ll get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Your name" required style={inputStyle} />
          <input name="email" type="email" placeholder="you@example.com" required style={inputStyle} />
          <textarea name="message" placeholder="Message" required rows={5} style={inputStyle} />
          {error && <p style={{ color: "#E24B4A", fontSize: "13px", marginBottom: "12px" }}>{error}</p>}
          <button
            type="submit"
            disabled={status === "sending"}
            className="mono"
            style={{
              background: "var(--accent-amber)",
              color: "var(--bg-base)",
              border: "none",
              borderRadius: "4px",
              padding: "10px 16px",
              fontSize: "13px",
              cursor: "pointer",
            }}
          >
            {status === "sending" ? "sending..." : "send message"}
          </button>
        </form>
      )}
    </div>
  );
}
