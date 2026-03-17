import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import RhizomeMap from "@/components/RhizomeMap";
import { THESIS, Locale } from "@/lib/thesis-data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });
  return {
    title: `${THESIS.subtitle[locale as Locale]} — ${THESIS.author}`,
    description: THESIS.title[locale as Locale],
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });

  return (
    <main
      className="relative w-screen h-screen overflow-hidden"
      style={{ background: "#0D1F14", touchAction: "none" }}
    >
      <Navigation />

      {/* 3D Rhizome map — full screen */}
      <div className="absolute inset-0" style={{ touchAction: "none" }}>
        <RhizomeMap locale={locale as Locale} />
      </div>

      {/* Fig 24: "Ryšių rizoma" — ghosted background texture */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        <Image
          src="/images/img-024.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "center",
            opacity: 0.12,
            mixBlendMode: "screen",
          }}
        />
      </div>

      {/* Title overlay — bottom left */}
      <div
        className="absolute bottom-10 left-8 z-10 pointer-events-none"
        style={{ maxWidth: "480px" }}
      >
        <p
          style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: "10px",
            letterSpacing: "0.2em",
            color: "rgba(245,237,216,0.4)",
            textTransform: "uppercase",
            marginBottom: "8px",
          }}
        >
          {THESIS.author} · {THESIS.year} · {t("subtitle")}
        </p>
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(1.4rem, 3vw, 2.2rem)",
            fontWeight: 400,
            color: "rgba(245,237,216,0.9)",
            lineHeight: 1.25,
            letterSpacing: "0.01em",
          }}
        >
          {THESIS.title[locale as Locale]}
        </h1>
      </div>

      {/* Hint */}
      <div
        className="absolute bottom-10 right-8 z-10 pointer-events-none"
        style={{
          fontFamily: "'Inter', system-ui, sans-serif",
          fontSize: "10px",
          letterSpacing: "0.12em",
          color: "rgba(245,237,216,0.3)",
          textTransform: "uppercase",
        }}
      >
        {t("hint")}
      </div>
    </main>
  );
}
