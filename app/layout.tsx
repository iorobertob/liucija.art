import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ryšių Rizoma — Liucija Dervinytė",
  description:
    "Menininkas kaip ryšių kūrėjas gamtos–kultūros rizomoje. Artist as a Creator of Connections in a Nature–Culture Rhizome.",
  openGraph: {
    title: "Ryšių Rizoma — Liucija Dervinytė",
    description: "Artistic research thesis exploring nature, culture, and the rhizome of connections.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
