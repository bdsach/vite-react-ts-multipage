import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav
        style={{
          borderBottom: "solid 1px",
          padding: "1rem 0",
          display: "flex",
          gap: "1rem",
          fontSize: "1.3rem",
          fontWeight: "bold",
          justifyContent: "center",
        }}
      >
        <a href="/">Home</a>
        <a href="/about/index.html">About</a>
      </nav>
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
        }}
      >
        {children}
      </main>
    </div>
  );
}
