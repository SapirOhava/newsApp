"use client";

export default function Navbar() {
  return (
    <nav style={{ padding: "1rem", backgroundColor: "#333", color: "#fff" }}>
      <ul style={{ display: "flex", gap: "1rem", listStyle: "none" }}>
        <li>
          <a href="/" style={{ color: "#fff", textDecoration: "none" }}>
            Home
          </a>
        </li>
        <li>
          <a href="/about" style={{ color: "#fff", textDecoration: "none" }}>
            About
          </a>
        </li>
        <li>
          <a href="/articles" style={{ color: "#fff", textDecoration: "none" }}>
            Articles
          </a>
        </li>
        <li>
          <a href="/contact" style={{ color: "#fff", textDecoration: "none" }}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
