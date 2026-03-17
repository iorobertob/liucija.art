"use client";

import Link from "next/link";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Locale } from "@/lib/thesis-data";

interface ThesisImage {
  src: string;
  alt: string;
  caption?: string;
}

interface ThesisContentProps {
  number?: string;
  title: string;
  body: React.ReactNode;
  images?: ThesisImage[];
  prevHref?: string;
  prevLabel?: string;
  nextHref?: string;
  nextLabel?: string;
  breadcrumbs?: { label: string; href: string }[];
}

export default function ThesisContent({
  number,
  title,
  body,
  images = [],
  prevHref,
  prevLabel,
  nextHref,
  nextLabel,
  breadcrumbs = [],
}: ThesisContentProps) {
  const locale = useLocale() as Locale;
  const t = useTranslations("thesis");

  return (
    <div
      className="min-h-screen"
      style={{
        background: "var(--color-parchment)",
        paddingTop: "80px", // nav height
      }}
    >
      <div
        className="mx-auto"
        style={{ maxWidth: "760px", padding: "0 clamp(1.5rem, 5vw, 4rem)" }}
      >
        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <nav
            style={{
              paddingTop: "2rem",
              paddingBottom: "0.5rem",
              display: "flex",
              gap: "0.5rem",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            {breadcrumbs.map((crumb, i) => (
              <span key={i} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                {i > 0 && (
                  <span style={{ color: "var(--color-moss)", fontSize: "11px" }}>›</span>
                )}
                <Link
                  href={crumb.href}
                  style={{
                    fontFamily: "'Inter', system-ui, sans-serif",
                    fontSize: "11px",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--color-moss)",
                    textDecoration: "none",
                    opacity: i === breadcrumbs.length - 1 ? 0.5 : 1,
                  }}
                >
                  {crumb.label}
                </Link>
              </span>
            ))}
          </nav>
        )}

        {/* Header */}
        <header style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
          {number && (
            <p
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "13px",
                fontStyle: "italic",
                color: "var(--color-terracotta)",
                letterSpacing: "0.05em",
                marginBottom: "0.75rem",
              }}
            >
              {number}
            </p>
          )}
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              fontWeight: 400,
              color: "var(--color-ink)",
              lineHeight: 1.2,
              letterSpacing: "0.01em",
            }}
          >
            {title}
          </h1>
          <div
            style={{
              marginTop: "1.5rem",
              width: "40px",
              height: "1px",
              background: "var(--color-ochre)",
            }}
          />
        </header>

        {/* Body */}
        <article className="thesis-body">{body}</article>

        {/* Images */}
        {images.length > 0 && (
          <div style={{ marginTop: "3rem", marginBottom: "3rem" }}>
            {images.map((img, i) => (
              <figure
                key={i}
                style={{
                  marginBottom: "2.5rem",
                  marginLeft: i % 2 === 0 ? "0" : "auto",
                  maxWidth: i === 0 ? "100%" : "80%",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    aspectRatio: "4/3",
                    overflow: "hidden",
                    background: "var(--color-parchment-dark)",
                  }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    style={{ objectFit: "contain" }}
                    sizes="(max-width: 760px) 100vw, 760px"
                  />
                </div>
                {img.caption && (
                  <figcaption
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: "13px",
                      fontStyle: "italic",
                      color: "var(--color-ink-light)",
                      marginTop: "0.75rem",
                      lineHeight: 1.5,
                      opacity: 0.75,
                    }}
                  >
                    {img.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        )}

        {/* Prev / Next navigation */}
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "3rem 0",
            borderTop: "1px solid rgba(74,124,89,0.2)",
            marginTop: "2rem",
            gap: "1rem",
          }}
        >
          {prevHref ? (
            <Link
              href={prevHref}
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "15px",
                color: "var(--color-moss)",
                textDecoration: "none",
                display: "flex",
                flexDirection: "column",
                gap: "2px",
              }}
            >
              <span
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  fontFamily: "'Inter', system-ui, sans-serif",
                  opacity: 0.5,
                }}
              >
                ← {t("prevSection")}
              </span>
              <span>{prevLabel}</span>
            </Link>
          ) : (
            <div />
          )}

          {nextHref ? (
            <Link
              href={nextHref}
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "15px",
                color: "var(--color-moss)",
                textDecoration: "none",
                display: "flex",
                flexDirection: "column",
                gap: "2px",
                textAlign: "right",
              }}
            >
              <span
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  fontFamily: "'Inter', system-ui, sans-serif",
                  opacity: 0.5,
                }}
              >
                {t("nextSection")} →
              </span>
              <span>{nextLabel}</span>
            </Link>
          ) : (
            <div />
          )}
        </nav>
      </div>
    </div>
  );
}
