"use client";

import dynamic from "next/dynamic";
import { Locale } from "@/lib/thesis-data";

// Dynamically import to avoid SSR issues with Three.js
const RhizomeScene = dynamic(() => import("./RhizomeScene"), {
  ssr: false,
  loading: () => (
    <div
      className="w-full h-full flex items-center justify-center"
      style={{ background: "#0D1F14" }}
    >
      <div
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          color: "rgba(245,237,216,0.5)",
          fontSize: "14px",
          fontStyle: "italic",
          letterSpacing: "0.1em",
        }}
      >
        loading...
      </div>
    </div>
  ),
});

export default function RhizomeMap({ locale }: { locale: Locale }) {
  return (
    <div className="w-full h-full">
      <RhizomeScene locale={locale} />
    </div>
  );
}
