import { notFound } from "next/navigation";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import Navigation from "@/components/Navigation";
import { THESIS, Locale, getSectionBySlug } from "@/lib/thesis-data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; section: string }>;
}) {
  const { locale, section: sectionSlug } = await params;
  const section = getSectionBySlug(sectionSlug, locale as Locale);
  if (!section) return {};
  return { title: `${section.title[locale as Locale]} — ${THESIS.author}` };
}

export default async function SectionPage({
  params,
}: {
  params: Promise<{ locale: string; section: string }>;
}) {
  const { locale, section: sectionSlug } = await params;
  const l = locale as Locale;
  const t = await getTranslations({ locale: l });

  const section = getSectionBySlug(sectionSlug, l);
  if (!section) notFound();

  const sectionIndex = THESIS.sections.findIndex((s) => s.id === section.id);
  const prevSection = sectionIndex > 0 ? THESIS.sections[sectionIndex - 1] : null;
  const nextSection =
    sectionIndex < THESIS.sections.length - 1 ? THESIS.sections[sectionIndex + 1] : null;

  return (
    <>
      <Navigation />
      <div
        className="min-h-screen"
        style={{ background: "var(--color-parchment)", paddingTop: "80px" }}
      >
        <div
          className="mx-auto"
          style={{ maxWidth: "760px", padding: "0 clamp(1.5rem, 5vw, 4rem)" }}
        >
          {/* Breadcrumb */}
          <nav style={{ paddingTop: "2rem", paddingBottom: "0.5rem" }}>
            <Link
              href={`/${l}`}
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: "11px",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--color-moss)",
                textDecoration: "none",
              }}
            >
              {l === "lt" ? "Tezė" : "Thesis"}
            </Link>
          </nav>

          {/* Header */}
          <header style={{ paddingTop: "3rem", paddingBottom: "2rem" }}>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "13px",
                fontStyle: "italic",
                color: "var(--color-terracotta)",
                marginBottom: "0.75rem",
              }}
            >
              {l === "lt" ? "Skyrius" : "Section"} {section.number}
            </p>
            <h1
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 400,
                color: "var(--color-ink)",
                lineHeight: 1.2,
              }}
            >
              {section.title[l]}
            </h1>
            <p
              style={{
                marginTop: "1.5rem",
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "18px",
                fontStyle: "italic",
                color: "var(--color-ink-light)",
                lineHeight: 1.6,
                maxWidth: "520px",
              }}
            >
              {section.description[l]}
            </p>
            <div
              style={{
                marginTop: "1.5rem",
                width: "40px",
                height: "2px",
                background: section.color,
              }}
            />
          </header>

          {/* Subsections list */}
          <div style={{ paddingBottom: "4rem" }}>
            {section.subsections.map((sub, i) => (
              <Link
                key={sub.id}
                href={`/${l}/thesis/${section.slug[l]}/${sub.slug[l]}`}
                style={{
                  display: "block",
                  textDecoration: "none",
                  padding: "2rem 0",
                  borderBottom: "1px solid rgba(74,124,89,0.15)",
                }}
                className="group"
              >
                <div style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start" }}>
                  <span
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: "28px",
                      fontWeight: 300,
                      color: section.color,
                      opacity: 0.4,
                      lineHeight: 1,
                      flexShrink: 0,
                      marginTop: "4px",
                    }}
                  >
                    {section.number}.{i + 1}
                  </span>
                  <div>
                    <h2
                      style={{
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)",
                        fontWeight: 400,
                        color: "var(--color-ink)",
                        lineHeight: 1.3,
                        marginBottom: "0.5rem",
                        transition: "color 0.2s",
                      }}
                    >
                      {sub.title[l]}
                    </h2>
                    <p
                      style={{
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        fontSize: "15px",
                        fontStyle: "italic",
                        color: "var(--color-ink-light)",
                        lineHeight: 1.6,
                      }}
                    >
                      {sub.description[l]}
                    </p>
                  </div>
                  <span
                    style={{
                      marginLeft: "auto",
                      color: section.color,
                      fontSize: "18px",
                      flexShrink: 0,
                      opacity: 0.6,
                      alignSelf: "center",
                    }}
                  >
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Prev / Next sections */}
          <nav
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "2rem 0 4rem",
              borderTop: "1px solid rgba(74,124,89,0.2)",
            }}
          >
            {prevSection ? (
              <Link
                href={`/${l}/thesis/${prevSection.slug[l]}`}
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "15px",
                  color: "var(--color-moss)",
                  textDecoration: "none",
                }}
              >
                <span style={{ fontSize: "10px", fontFamily: "'Inter', system-ui, sans-serif", letterSpacing: "0.12em", textTransform: "uppercase", display: "block", opacity: 0.5, marginBottom: "4px" }}>
                  ← {t("thesis.prevSection")}
                </span>
                {prevSection.title[l]}
              </Link>
            ) : (
              <Link
                href={`/${l}/thesis/introduction`}
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "15px",
                  color: "var(--color-moss)",
                  textDecoration: "none",
                }}
              >
                <span style={{ fontSize: "10px", fontFamily: "'Inter', system-ui, sans-serif", letterSpacing: "0.12em", textTransform: "uppercase", display: "block", opacity: 0.5, marginBottom: "4px" }}>
                  ← {t("thesis.prevSection")}
                </span>
                {t("nav.introduction")}
              </Link>
            )}
            {nextSection ? (
              <Link
                href={`/${l}/thesis/${nextSection.slug[l]}`}
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "15px",
                  color: "var(--color-moss)",
                  textDecoration: "none",
                  textAlign: "right",
                }}
              >
                <span style={{ fontSize: "10px", fontFamily: "'Inter', system-ui, sans-serif", letterSpacing: "0.12em", textTransform: "uppercase", display: "block", opacity: 0.5, marginBottom: "4px" }}>
                  {t("thesis.nextSection")} →
                </span>
                {nextSection.title[l]}
              </Link>
            ) : (
              <Link
                href={`/${l}/thesis/conclusion`}
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "15px",
                  color: "var(--color-moss)",
                  textDecoration: "none",
                  textAlign: "right",
                }}
              >
                <span style={{ fontSize: "10px", fontFamily: "'Inter', system-ui, sans-serif", letterSpacing: "0.12em", textTransform: "uppercase", display: "block", opacity: 0.5, marginBottom: "4px" }}>
                  {t("thesis.nextSection")} →
                </span>
                {t("nav.conclusion")}
              </Link>
            )}
          </nav>
        </div>
      </div>
    </>
  );
}
