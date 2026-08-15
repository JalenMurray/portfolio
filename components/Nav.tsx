import Link from "next/link";

const LINKS = [
  { href: "/", label: "whoami" },
  { href: "/projects", label: "projects" },
  { href: "/about", label: "resume" },
  { href: "/contact", label: "contact" },
];

export default function Nav() {
  return (
    <nav
      className="mono"
      style={{
        display: "flex",
        gap: "16px",
        padding: "16px 20px",
        fontSize: "13px",
        borderBottom: "0.5px solid var(--text-muted)",
      }}
    >
      {LINKS.map((link) => (
        <Link key={link.href} href={link.href} style={{ color: "var(--text-primary)" }}>
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
