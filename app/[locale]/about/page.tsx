import { getTranslations } from "next-intl/server";
import Navigation from "@/components/Navigation";
import { THESIS, Locale } from "@/lib/thesis-data";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  return { title: `${t("title")} — ${THESIS.author}` };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const l = locale as Locale;
  const t = await getTranslations({ locale: l, namespace: "nav" });

  const bioLT = `Liucija Dervinytė yra menininkė ir tyrėja, kurios praktika tyrinėja ryšius tarp žmogaus, gamtos ir kultūros per tekstilę, koliažą ir kolektyvinę kūrybą. Baigė Vilniaus dailės akademijos Tekstilės meno ir dizaino magistrantūros studijas 2023 metais.`;

  const bioEN = `Liucija Dervinytė is an artist and researcher whose practice explores connections between humans, nature, and culture through textiles, collage, and collective creation. She completed her Master's degree in Textile Art and Design at Vilnius Academy of Arts in 2023.`;

  const practiceLT = `Meninė praktika apjungia asmeninę ir kolektyvinę kūrybą. Pagrindinis interesas – ryšių ir jungčių kūrimas per rankų darbo procesus: siuvinėjimą, audimą, koliažą. Kartu su organizacija Ideas Block kuria erdves dialogui ir bendradarbiavimui per kūrybinius procesus.`;

  const practiceEN = `Artistic practice combines personal and collective creation. The main interest is creating connections through handwork processes: embroidery, weaving, collage. Together with the organization Ideas Block, she creates spaces for dialogue and collaboration through creative processes.`;

  const projects = [
    {
      title: l === "lt" ? "Ryšių rizoma" : "Rhizome of Connections",
      year: "2022–2023",
      description:
        l === "lt"
          ? "Magistro baigiamasis kūrybinis projektas. Kolektyviniai siuvinėjimo susitikimai ir tekstilinis kūrinys, tyrinėjantis gamtos–kultūros ryšius."
          : "Master's final creative project. Collective embroidery sessions and textile work exploring nature–culture connections.",
    },
    {
      title: "Ideas Block",
      year: "2017–",
      description:
        l === "lt"
          ? "Organizacija, kurianti erdves kūrybiniam bendradarbiavimui, dialogui ir bendruomenės stiprinimui per meninę praktiką."
          : "An organization creating spaces for creative collaboration, dialogue, and community building through artistic practice.",
    },
  ];

  return (
    <>
      <Navigation />
      <div
        style={{
          minHeight: "100vh",
          background: "var(--color-parchment)",
          paddingTop: "80px",
        }}
      >
        <div
          style={{
            maxWidth: "760px",
            margin: "0 auto",
            padding: "0 clamp(1.5rem, 5vw, 4rem)",
          }}
        >
          {/* Header */}
          <header style={{ paddingTop: "4rem", paddingBottom: "3rem" }}>
            <p
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: "11px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--color-terracotta)",
                marginBottom: "1rem",
              }}
            >
              {l === "lt" ? "Apie" : "About"}
            </p>
            <h1
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(2.5rem, 6vw, 4rem)",
                fontWeight: 400,
                color: "var(--color-ink)",
                lineHeight: 1.1,
              }}
            >
              {THESIS.author}
            </h1>
            <div
              style={{
                marginTop: "1.5rem",
                width: "40px",
                height: "1px",
                background: "var(--color-terracotta)",
              }}
            />
          </header>

          {/* Bio section */}
          <section style={{ marginBottom: "4rem" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "3rem",
                alignItems: "start",
              }}
            >
              <div>
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: "clamp(1rem, 1.6vw, 1.2rem)",
                    lineHeight: 1.85,
                    color: "var(--color-ink)",
                    marginBottom: "1.5rem",
                  }}
                >
                  {l === "lt" ? bioLT : bioEN}
                </p>
              </div>
              <div
                style={{
                  aspectRatio: "3/4",
                  background: "var(--color-parchment-dark)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Placeholder for artist portrait — replace via Sanity */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    gap: "0.5rem",
                  }}
                >
                  <span style={{ fontSize: "32px", opacity: 0.3 }}>◎</span>
                  <span
                    style={{
                      fontFamily: "'Inter', system-ui, sans-serif",
                      fontSize: "10px",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--color-ink-light)",
                      opacity: 0.5,
                    }}
                  >
                    {l === "lt" ? "Nuotrauka" : "Portrait"}
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Practice */}
          <section
            style={{
              paddingTop: "3rem",
              paddingBottom: "3rem",
              borderTop: "1px solid rgba(74,124,89,0.2)",
            }}
          >
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                fontWeight: 400,
                color: "var(--color-ink)",
                marginBottom: "1.5rem",
              }}
            >
              {l === "lt" ? "Meninė praktika" : "Artistic Practice"}
            </h2>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(1rem, 1.6vw, 1.15rem)",
                lineHeight: 1.85,
                color: "var(--color-ink)",
                maxWidth: "520px",
              }}
            >
              {l === "lt" ? practiceLT : practiceEN}
            </p>
          </section>

          {/* Thesis download */}
          <section
            style={{
              paddingTop: "3rem",
              paddingBottom: "3rem",
              borderTop: "1px solid rgba(74,124,89,0.2)",
            }}
          >
            <p
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: "10px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--color-moss)",
                marginBottom: "1rem",
                opacity: 0.6,
              }}
            >
              ↓ {t("download")}
            </p>
            <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
              <a
                href="/downloads/thesis-lt.pdf"
                download
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "15px",
                  fontStyle: "italic",
                  color: "var(--color-moss)",
                  textDecoration: "none",
                  opacity: 0.8,
                }}
              >
                {t("downloadLT")} — PDF
              </a>
              <span style={{ color: "rgba(74,124,89,0.3)", fontSize: "12px" }}>·</span>
              <a
                href="/downloads/thesis-en.pdf"
                download
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "15px",
                  fontStyle: "italic",
                  color: "var(--color-moss)",
                  textDecoration: "none",
                  opacity: 0.8,
                }}
              >
                {t("downloadEN")}
              </a>
            </div>
          </section>

          {/* Projects */}
          <section
            style={{
              paddingTop: "3rem",
              paddingBottom: "5rem",
              borderTop: "1px solid rgba(74,124,89,0.2)",
            }}
          >
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                fontWeight: 400,
                color: "var(--color-ink)",
                marginBottom: "2rem",
              }}
            >
              {l === "lt" ? "Projektai" : "Projects"}
            </h2>

            {projects.map((project, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: "2rem",
                  padding: "1.5rem 0",
                  borderBottom: "1px solid rgba(74,124,89,0.12)",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: "13px",
                    color: "var(--color-ochre)",
                    flexShrink: 0,
                    marginTop: "4px",
                    minWidth: "56px",
                  }}
                >
                  {project.year}
                </span>
                <div>
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
                      fontWeight: 400,
                      color: "var(--color-ink)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: "15px",
                      fontStyle: "italic",
                      color: "var(--color-ink-light)",
                      lineHeight: 1.65,
                    }}
                  >
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </>
  );
}
