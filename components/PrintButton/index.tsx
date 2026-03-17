"use client";

import { useState } from "react";

export default function PrintButton({
  label,
  preparingLabel,
}: {
  label: string;
  preparingLabel: string;
}) {
  const [status, setStatus] = useState<"idle" | "loading" | "ready">("idle");

  const handlePrint = async () => {
    setStatus("loading");

    // 1. Scroll the entire page so every lazy image enters the viewport and starts loading
    const pageHeight = document.documentElement.scrollHeight;
    const step = window.innerHeight;
    let pos = 0;
    while (pos < pageHeight) {
      window.scrollTo(0, pos);
      pos += step;
      // Brief pause to let IntersectionObserver fire
      await new Promise((r) => setTimeout(r, 60));
    }
    window.scrollTo(0, 0);

    // 2. Wait for every <img> in the document to finish loading
    const imgs = Array.from(document.querySelectorAll<HTMLImageElement>("img"));
    await Promise.all(
      imgs.map(
        (img) =>
          img.complete
            ? Promise.resolve()
            : new Promise<void>((resolve) => {
                img.onload = () => resolve();
                img.onerror = () => resolve(); // don't block on broken images
              })
      )
    );

    // 3. Small final delay so the browser paints the restored scroll position
    await new Promise((r) => setTimeout(r, 200));

    setStatus("ready");
    window.print();
    setStatus("idle");
  };

  return (
    <button
      onClick={handlePrint}
      disabled={status === "loading"}
      style={{
        fontFamily: "'Inter', system-ui, sans-serif",
        fontSize: "11px",
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        background: "none",
        border: "1px solid rgba(74,124,89,0.4)",
        color: status === "loading" ? "#aaa" : "#4A7C59",
        cursor: status === "loading" ? "default" : "pointer",
        padding: "0.6rem 1.2rem",
        whiteSpace: "nowrap",
        flexShrink: 0,
        transition: "color 0.2s",
      }}
    >
      {status === "loading" ? preparingLabel : label}
    </button>
  );
}
