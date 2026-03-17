"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import { THESIS, Locale } from "@/lib/thesis-data";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const t = useTranslations();
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();

  const otherLocale = locale === "lt" ? "en" : "lt";
  const isHome = pathname === `/${locale}` || pathname === `/${locale}/`;

  // Switch locale: map current page to equivalent in the other locale.
  // Section/sub slugs differ between LT and EN, so we translate them via
  // THESIS data rather than doing a naive string replace.
  const handleLangSwitch = () => {
    // Strip locale prefix to get the internal path
    const stripped = pathname.replace(new RegExp(`^/${locale}`), "") || "/";

    // Try to find a matching page in the other locale
    // Pattern: /thesis/<sectionSlug>/<subSlug>
    const subMatch = stripped.match(/^\/thesis\/([^/]+)\/([^/]+)/);
    if (subMatch) {
      const [, sSlug, subSlug] = subMatch;
      for (const section of THESIS.sections) {
        if (section.slug[locale] === sSlug) {
          const sub = section.subsections.find((s) => s.slug[locale] === subSlug);
          if (sub) {
            router.push(`/${otherLocale}/thesis/${section.slug[otherLocale]}/${sub.slug[otherLocale]}`);
            return;
          }
        }
      }
    }

    // Pattern: /thesis/<sectionSlug>
    const sectionMatch = stripped.match(/^\/thesis\/([^/]+)$/);
    if (sectionMatch) {
      const [, sSlug] = sectionMatch;
      const section = THESIS.sections.find((s) => s.slug[locale] === sSlug);
      if (section) {
        router.push(`/${otherLocale}/thesis/${section.slug[otherLocale]}`);
        return;
      }
    }

    // For introduction, conclusion, about, print, or homepage — same path works
    const samePaths = [
      "/thesis/introduction",
      "/thesis/conclusion",
      "/thesis/print",
      "/about",
      "/",
    ];
    for (const p of samePaths) {
      if (stripped === p || stripped.startsWith(p)) {
        router.push(`/${otherLocale}${stripped}`);
        return;
      }
    }

    // Fallback: go to the other locale's homepage
    router.push(`/${otherLocale}`);
  };

  return (
    <>
      {/* Top bar */}
      <header
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4"
        style={{
          background: isHome
            ? "transparent"
            : "rgba(245,237,216,0.95)",
          backdropFilter: isHome ? "none" : "blur(12px)",
          borderBottom: isHome ? "none" : "1px solid rgba(74,124,89,0.15)",
          transition: "all 0.3s ease",
        }}
      >
        {/* Logo / back to map */}
        <Link
          href={isHome ? `/${locale}/about` : `/${locale}`}
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "15px",
            letterSpacing: "0.08em",
            color: isHome ? "rgba(245,237,216,0.8)" : "var(--color-ink)",
            textDecoration: "none",
            fontStyle: "italic",
            transition: "opacity 0.2s",
          }}
          className="hover:opacity-70"
        >
          {isHome ? THESIS.author : t("nav.backToMap")}
        </Link>

        <div className="flex items-center gap-4">
          {/* Language toggle */}
          <button
            onClick={handleLangSwitch}
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: "11px",
              letterSpacing: "0.15em",
              color: isHome ? "rgba(245,237,216,0.7)" : "var(--color-ink-light)",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "4px 8px",
              textTransform: "uppercase",
              transition: "opacity 0.2s",
            }}
            className="hover:opacity-70"
          >
            {t("nav.language")}
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "4px",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            }}
            aria-label={t("nav.menu")}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: "22px",
                  height: "1px",
                  background: isHome ? "rgba(245,237,216,0.8)" : "var(--color-ink)",
                  transition: "background 0.3s",
                }}
              />
            ))}
          </button>
        </div>
      </header>

      {/* Full-screen menu overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[100] flex overflow-y-auto"
          style={{ background: "rgba(13,31,20,0.97)" }}
          onClick={() => setMenuOpen(false)}
        >
          <nav
            className="relative m-auto w-full max-w-lg px-8 py-16"
            style={{ minHeight: "min-content" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setMenuOpen(false)}
              style={{
                position: "absolute",
                top: "1.5rem",
                right: "2rem",
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "rgba(245,237,216,0.5)",
                fontSize: "12px",
                letterSpacing: "0.12em",
                fontFamily: "'Inter', system-ui, sans-serif",
                textTransform: "uppercase",
              }}
            >
              {t("nav.close")}
            </button>

            {/* Sitemap links */}
            <MenuLink
              href={`/${locale}/thesis/introduction`}
              label={t("nav.introduction")}
              onClick={() => setMenuOpen(false)}
              indent={0}
            />

            {THESIS.sections.map((section, si) => (
              <div key={section.id}>
                <MenuLink
                  href={`/${locale}/thesis/${section.slug[locale]}`}
                  label={`${si + 1}. ${section.title[locale]}`}
                  onClick={() => setMenuOpen(false)}
                  indent={0}
                  accent={section.color}
                />
                {section.subsections.map((sub, subi) => (
                  <MenuLink
                    key={sub.id}
                    href={`/${locale}/thesis/${section.slug[locale]}/${sub.slug[locale]}`}
                    label={`${si + 1}.${subi + 1}  ${sub.title[locale]}`}
                    onClick={() => setMenuOpen(false)}
                    indent={1}
                  />
                ))}
              </div>
            ))}

            <MenuLink
              href={`/${locale}/thesis/conclusion`}
              label={t("nav.conclusion")}
              onClick={() => setMenuOpen(false)}
              indent={0}
            />

            <div style={{ marginTop: "2rem", borderTop: "1px solid rgba(245,237,216,0.08)", paddingTop: "1.5rem" }}>
              <MenuLink
                href={`/${locale}/about`}
                label={t("nav.about")}
                onClick={() => setMenuOpen(false)}
                indent={0}
              />
            </div>

            {/* Download links */}
            <div style={{ marginTop: "2rem", borderTop: "1px solid rgba(245,237,216,0.06)", paddingTop: "1.5rem" }}>
              <p
                style={{
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontSize: "10px",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "rgba(245,237,216,0.3)",
                  marginBottom: "0.75rem",
                }}
              >
                ↓ {t("nav.download")}
              </p>
              <div style={{ display: "flex", gap: "1.25rem" }}>
                <a
                  href="/downloads/thesis-lt.pdf"
                  download
                  onClick={() => setMenuOpen(false)}
                  style={{
                    fontFamily: "'Inter', system-ui, sans-serif",
                    fontSize: "11px",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "rgba(245,237,216,0.45)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  className="hover:opacity-80"
                >
                  {t("nav.downloadLT")}
                </a>
                <a
                  href="/downloads/thesis-en.pdf"
                  download
                  onClick={() => setMenuOpen(false)}
                  style={{
                    fontFamily: "'Inter', system-ui, sans-serif",
                    fontSize: "11px",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "rgba(245,237,216,0.45)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  className="hover:opacity-80"
                >
                  {t("nav.downloadEN")}
                </a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}

function MenuLink({
  href,
  label,
  onClick,
  indent,
  accent,
}: {
  href: string;
  label: string;
  onClick: () => void;
  indent: 0 | 1;
  accent?: string;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      style={{
        display: "block",
        fontFamily: "'Cormorant Garamond', Georgia, serif",
        fontSize: indent === 0 ? "22px" : "16px",
        fontWeight: indent === 0 ? 400 : 300,
        color: indent === 0 ? "#F5EDD8" : "rgba(245,237,216,0.55)",
        textDecoration: "none",
        padding: `${indent === 0 ? "8px" : "4px"} 0`,
        paddingLeft: indent === 1 ? "1.5rem" : "0",
        borderLeft: indent === 1 ? `1px solid ${accent ?? "rgba(245,237,216,0.15)"}` : "none",
        marginLeft: indent === 1 ? "0.25rem" : "0",
        transition: "color 0.2s, opacity 0.2s",
      }}
      className="hover:opacity-80"
    >
      {accent && indent === 0 && (
        <span
          style={{
            display: "inline-block",
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            background: accent,
            marginRight: "10px",
            verticalAlign: "middle",
            marginBottom: "2px",
          }}
        />
      )}
      {label}
    </Link>
  );
}
