import { getTranslations } from "next-intl/server";
import Navigation from "@/components/Navigation";
import ThesisContent from "@/components/ThesisContent";
import { THESIS, Locale } from "@/lib/thesis-data";

const conclusionLT = (
  <>
    <p>
      Šiame meniniame tyrime mėginta išnagrinėti menininkės, kaip ryšių kūrėjos, rolę gamtos–kultūros
      rizomoje. Remiantis asmenine menine praktika ir kitų kūrėjų veiklomis, aptarti būdai, kuriais
      menas gali prisidėti prie naujų prasmių ir pasaulėžiūros formavimo.
    </p>

    <p>
      Tyrime patvirtinta prielaida, jog dualistinė gamtos–kultūros samprata prisideda prie netvarių
      visuomenės vystymosi procesų. Siūloma atsisakyti šio dualistinio vaizdinio ir integruoti
      daugialypę kultūrą į viską apjungiantį gamtos tinklą.
    </p>

    <p>
      Kolektyviniai siuvinėjimo susitikimai parodė, jog meninis procesas gali tapti dialogu, tyrimo
      priemone ir bendruomenės kūrimo instrumentu. Rizomos metafora – tai ne tik filosofinė sąvoka,
      bet ir praktinis veikimo principas: nehierarchinis, horizontalus ryšių kūrimas.
    </p>

    <p>
      Menininkė kaip ryšių kūrėja – tai aktyvus veikėjas gamtos–kultūros rizomoje, kuriančios naujas
      jungtis ir prasmes tarp asmeninių išgyvenimų, tarpusavio santykių ir gamtos. Kiekvienas kūrinys,
      kiekvienas susitikimas, kiekviena gija – tai naujas mazgas šiame tinkle.
    </p>

    <p>
      Gyvename informacijos, idėjų ir kūrinių pertekliaus laike. Todėl naujumas praranda savo svarbą.
      Kas išlieka svarbu – tai kontekstas ir priėjimo rakursas. Ir galbūt svarbiausia – gebėjimas
      matyti jungtis tarp iš pirmo žvilgsnio nesusijusių dalykų.
    </p>
  </>
);

const conclusionEN = (
  <>
    <p>
      This artistic research has attempted to examine the role of the artist as a creator of
      connections in the nature–culture rhizome. Drawing on personal artistic practice and the work
      of other creators, ways in which art can contribute to the formation of new meanings and
      worldviews have been discussed.
    </p>

    <p>
      The research confirmed the assumption that the dualistic nature–culture concept contributes to
      unsustainable processes of social development. It is proposed to abandon this dualistic image
      and integrate multifaceted culture into the all-encompassing network of nature.
    </p>

    <p>
      The collective embroidery sessions demonstrated that the artistic process can become a dialogue,
      a research tool, and an instrument for building community. The rhizome metaphor is not only a
      philosophical concept, but also a practical principle of action: non-hierarchical, horizontal
      creation of connections.
    </p>

    <p>
      The artist as a creator of connections is an active participant in the nature–culture rhizome,
      creating new links and meanings between personal experiences, mutual relationships, and nature.
      Every work, every gathering, every thread is a new node in this network.
    </p>

    <p>
      We live in a time of overabundance of information, ideas, and works. Therefore novelty loses
      its importance. What remains important is context and angle of approach. And perhaps most
      importantly — the ability to see connections between things that at first glance seem unrelated.
    </p>
  </>
);

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "nav" });
  return { title: `${t("conclusion")} — ${THESIS.author}` };
}

export default async function ConclusionPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const l = locale as Locale;
  const t = await getTranslations({ locale: l });

  const lastSection = THESIS.sections[THESIS.sections.length - 1];
  const lastSub = lastSection.subsections[lastSection.subsections.length - 1];

  return (
    <>
      <Navigation />
      <ThesisContent
        title={t("nav.conclusion")}
        body={
          <>
            {l === "lt" ? conclusionLT : conclusionEN}
            {/* Download prompt at end of thesis */}
            <div
              style={{
                marginTop: "4rem",
                padding: "2rem",
                borderTop: "1px solid rgba(74,124,89,0.2)",
                borderBottom: "1px solid rgba(74,124,89,0.2)",
              }}
            >
              <p
                style={{
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontSize: "10px",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--color-moss)",
                  marginBottom: "0.75rem",
                  opacity: 0.6,
                }}
              >
                ↓ {t("nav.download")}
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
                  {t("nav.downloadLT")} — PDF
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
                  {t("nav.downloadEN")}
                </a>
              </div>
            </div>
          </>
        }
        images={[
          {
            src: "/images/img-026.jpg",
            alt: l === "lt" ? "Ryšių rizoma, kūrybinis projektas" : "Rhizome of Connections, creative project",
            caption: `${THESIS.author}, 2023`,
          },
        ]}
        breadcrumbs={[
          { label: l === "lt" ? "Tezė" : "Thesis", href: `/${l}` },
          { label: t("nav.conclusion"), href: `/${l}/thesis/conclusion` },
        ]}
        prevHref={`/${l}/thesis/${lastSection.slug[l]}/${lastSub.slug[l]}`}
        prevLabel={lastSub.title[l]}
      />
    </>
  );
}
