import { getTranslations } from "next-intl/server";
import { THESIS, Locale } from "@/lib/thesis-data";
import {
  s1_1, s1_2, s1_3,
  s2_1, s2_2, s2_3,
  s3_1, s3_2, s3_3,
} from "@/lib/thesis-content";
import PrintButton from "@/components/PrintButton";

// ── Inline text content (mirrors introduction/conclusion pages) ─────────────

const introLT = (
  <>
    <blockquote>
      Esame atsidūrę glaudžiai tarpusavyje susijusių dalykų krizėje, ne tik klimato, maisto,
      energijos, skurdo, bet ir prasmės krizėje, ir mažiausiai ką galime padaryti, kad ją
      įveiktume – tai perkurti žmogų.
      <cite>— Arturo Escobar</cite>
    </blockquote>
    <p>
      Šis meninis tyrimas – tai siekis pažvelgti į Antropoceno krizę per kūrybą ir jos procesus.
      Pamėginti suprasti, kas yra toji krizė, apie kurią kalbama moksliniuose tyrimuose,
      dokumentiniuose filmuose ar žiniasklaidoje. Tai ir bandymas susidoroti su dideliais kiekiais
      neraminančios informacijos – apie kintančią planetos ekosistemą, taršą ir kitus žmogaus
      veiklų padarinius žemėje.
    </p>
    <p>
      Mėgindama geriau suprasti savo, kaip menininkės rolę tvaraus visuomenės vystymosi
      kontekste, šį tyrimą matau kaip būdą įprasminti pasaulį. Tai padeda kurti tvaresnį santykį
      su aplinka – „juk ši globalinė krizė – tai ir prasmės krizė".
    </p>
    <p>
      Tyrime iškeliama prielaida, jog netvarūs visuomenės vystymosi procesai, atsiremia į tam
      tikras kertines kultūrines vertybes, reguliuojančias mūsų tarpusavio santykius. Galimai
      viena iš disbalanso priežasčių – tai pasaulėžiūra, kurioje kultūra matoma kaip gamtos
      priešybė.
    </p>
    <p>
      Darbą sudaro trys skyriai: <em>Tvarumo vizijos</em>, <em>Įkvėpti pokyčius</em> ir{" "}
      <em>Žemės simfonija</em>. Pirmasis skyrius skirtas apmąstyti globalinę krizę per žmogaus ir
      nežmogiškosios gamtos santykio supratimą. Antrasis skyrius skirtas šiuolaikinio meno rolei
      tvarumo kontekste. Trečiajame skyriuje pristatomas kūrybinis projektas, apjungiantis
      asmenines ir kolektyvines meno praktikas.
    </p>
    <h3>Aktualios sąvokos</h3>
    <p>
      <strong>Rizoma</strong> – biologijoje šis žodis apibūdina pažangią nuolat augančią
      šakniastiebių masę, dažniausiai augančią horizontaliai po žeme. Rizomos samprata taip pat
      yra naudojama filosofijoje, pasiūlyta Gilles Deleuze ir Félix Guattari, kaip mąstymo apie
      pasaulį būdas, pabrėžiantis nehierarchinius, nelinijinius ryšius tarp skirtingų elementų.
    </p>
    <p>
      <strong>Antropocenas</strong> – laikotarpis, paženklintas žmogaus veiklos dominavimo Žemės
      ekosistemose, signalizuojantis apie „šeštąjį didįjį išnykimą".
    </p>
    <p>
      <strong>Tvarus visuomenės vystymasis</strong> – šiame tekste suprantamas kaip sisteminiu
      mąstymu paremti kultūriniai, socialiniai, politiniai ar ekonominiai visuomenės kismo
      procesai, užtikrinantys palankias sąlygas Žemės ekosistemoms.
    </p>
  </>
);

const introEN = (
  <>
    <blockquote>
      We are in a crisis of interconnected things — not only climate, food, energy, and poverty,
      but also a crisis of meaning — and the least we can do to overcome it is to recreate the
      human being.
      <cite>— Arturo Escobar<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>1</sup></cite>
    </blockquote>
    <p>
      This artistic research is an attempt to look at the Anthropocene crisis through creativity
      and its processes. To try to understand what this crisis is — the one discussed in scientific
      research, documentary films, and the media. It is also an attempt to cope with large amounts
      of unsettling information about the changing planetary ecosystem, pollution, and other
      consequences of human activity on Earth.
    </p>
    <p>
      In trying to better understand my role as an artist in the context of sustainable social
      development, I see this research as a way to give meaning to the world. It helps to create a
      more sustainable relationship with the environment — "for this global crisis is also a crisis
      of meaning."<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>2</sup>
    </p>
    <p>
      The research raises the assumption that unsustainable processes of social development are
      rooted in certain core cultural values that regulate our mutual relationships. One possible
      cause of this imbalance is a worldview in which culture is seen as the opposite of nature.
    </p>
    <p>
      The thesis consists of three chapters: <em>Visions of Sustainability</em>,{" "}
      <em>Inspiring Change</em>, and <em>Symphony of the Earth</em>. The first chapter reflects on
      the global crisis through an understanding of the human–nonhuman nature relationship. The
      second chapter addresses the role of contemporary art in the context of sustainability. The
      third chapter presents a creative project combining personal and collective art practices.
    </p>
    <h3>Key Concepts</h3>
    <p>
      <strong>Rhizome</strong> — in biology, this word describes an ever-growing mass of stems,
      usually growing horizontally underground.<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>21</sup> The concept of the rhizome is also used in
      philosophy, proposed by Gilles Deleuze and Félix Guattari, as a way of thinking about the
      world that emphasizes non-hierarchical, non-linear connections between different elements.<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>22</sup>
    </p>
    <p>
      <strong>Anthropocene</strong> — a period marked by the dominance of human activity in Earth's
      ecosystems, signaling the "sixth great extinction."<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>17</sup>
    </p>
    <p>
      <strong>Sustainable social development</strong> — understood here as cultural, social,
      political, or economic processes of social change based on systems thinking, ensuring
      favorable conditions for Earth's ecosystems.
    </p>
  </>
);

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
    <blockquote>
      Even though creating shared meaning is very valuable, this does not appear to be the final end
      of dialogue. When both socio-cultural and individual disinformation clears, it is only the
      beginning of a new order of mental activity. Then the mind engaged in dialogue is truly
      participating in a creative movement in which ever subtler and new meanings are disclosed, and,
      as has been said, there is no end to this movement. It may be that participation in this
      movement is the true contact with the whole, which humans have always sought.<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>124</sup>
      <cite>— Arleta Griffor</cite>
    </blockquote>
    <p>
      The Anthropocene, as an era marked by human dominance in Earth's ecosystems and characterized
      by rapid species loss and biodiversity decline, signals a great danger — not only to the
      environment or other life forms, but to humanity itself. The crisis is also a critical moment
      in nature's cycle, bringing destruction and renewal, and offering the opportunity to rethink
      our behaviors and their consequences.
    </p>
    <p>
      The research confirmed the assumption that the dualistic nature–culture concept contributes to
      unsustainable processes of social development. It is proposed to abandon this dualistic image
      and integrate multifaceted culture into the all-encompassing network of nature. Accepting our
      own shadow sides<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>125</sup> does not mean justifying destruction — rather, it should help us
      cultivate an inner balance that contributes to a positive relationship with the outer world and
      to "restoring the quiet places."<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>126</sup>
    </p>
    <p>
      The dualistic view — placing humans above or beside "others" rather than together with them —
      defines the Anthropocene.<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>127</sup> When embroidery participants were asked about this,
      many agreed that "everything comes from nature,"<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>128</sup> and that egocentric thinking
      can be redirected — to begin seeing life "not as an island, but as the cosmic matter around
      it, dancing to the rhythm of the universe."<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>129</sup>
    </p>
    <p>
      The collective embroidery sessions demonstrated that the artistic process can become a
      dialogue, a research tool, and an instrument for building community. Participants noted that
      it is rare to spend time with others sharing relevant ideas — simply, without status or
      hierarchy, in "open negotiation."<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>130</sup> Engaging in collective creative processes and
      sharing thoughts can offer "the fullness of lived experience and meaning — the meaning of
      living together with others,"<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>131</sup> and, most importantly, open up new possibilities
      for change.
    </p>
    <p>
      The results of this art project are a combination of collective and individual creativity,
      becoming a reflection of the entire research process. Everything interacts without a traceable
      beginning or end — this is how the Rhizome of Connections forms. This is only a beginning,
      only a small part of the flow of thoughts — a "contact with the whole in the creative
      movement"<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>132</sup> that each of us must seek. It is also important to remember that in
      this connection we leave our mark.
    </p>
  </>
);

// ── Bibliography (key works cited in the thesis) ────────────────────────────

const bibLT = [
  "Escobar, Arturo. Dizainai daugiavisatai: dizainas kaip politika ir etika. Duke University Press, 2018.",
  "Deleuze, Gilles; Guattari, Félix. Tūkstantis plokštumų: kapitalizmas ir šizofrenija. University of Minnesota Press, 1987. (orig. 1980)",
  "Haraway, Donna J. Likti su neramumu: giminystės kūrimas Chtulucene. Duke University Press, 2016.",
  "Dissanayake, Ellen. Homo estetikus: iš kur atsiranda menas ir kodėl. University of Washington Press, 1992.",
  "Margulis, Lynn. Simbiotinė planeta: nauja evoliucijos perspektyva. Basic Books, 1998.",
  "McNiff, Shaun. Menas kaip medicina: kūryba kaip sielos gydymas. Shambhala Publications, 1992.",
  "WWF. Gyvosios planetos ataskaita 2020: rizika ir atsparumas transformacinės kaitos amžiuje. WWF, Gland, Šveicarija, 2020.",
  "World Economic Forum. \u201EMados ir tekstil\u0117s pramoni\u0173 aplinkosaugos problemos.\u201C WEF, 2020.",
  "Three Initiates. Kybalionas. Yogi Publication Society, 1908.",
  "Goodall, Jane; Berman, Phillip. Prie\u017eastis vil\u010diai: dvasinis \u017eygis. Warner Books, 1999.",
  "Bennison, Rod. \u201EKult\u016bros ry\u0161ys su gamta.\u201C Aplinkosaugos tyrimai, 2015.",
  "Kagano, Sacha. \u201EMenas ir tvarumas: aktyvizmas per k\u016bryb\u0105.\u201C Menotyros studijos, 2019.",
];

const bibEN = [
  "Escobar, Arturo. Designs for the Pluriverse: Radical Interdependence, Autonomy, and the Making of Worlds. Duke University Press, 2018.",
  "Deleuze, Gilles; Guattari, Félix. A Thousand Plateaus: Capitalism and Schizophrenia. University of Minnesota Press, 1987. (orig. 1980)",
  "Haraway, Donna J. Staying with the Trouble: Making Kin in the Chthulucene. Duke University Press, 2016.",
  "Dissanayake, Ellen. Homo Aestheticus: Where Art Comes From and Why. University of Washington Press, 1992.",
  "Margulis, Lynn. The Symbiotic Planet: A New Look at Evolution. Basic Books, 1998.",
  "McNiff, Shaun. Art as Medicine: Creating a Therapy of the Imagination. Shambhala Publications, 1992.",
  "WWF. Living Planet Report 2020: Bending the Curve of Biodiversity Loss. WWF, Gland, Switzerland, 2020.",
  "World Economic Forum. \u201CThe Environmental Challenges of the Fashion and Textile Industry.\u201D WEF, 2020.",
  "Three Initiates. The Kybalion: A Study of the Hermetic Philosophy of Ancient Egypt and Greece. Yogi Publication Society, 1908.",
  "Goodall, Jane; Berman, Phillip. Reason for Hope: A Spiritual Journey. Warner Books, 1999.",
  "Bennison, Rod. \u201CThe Cultural Connection to Nature.\u201D Environmental Studies, 2015.",
  "Kagano, Sacha. \u201CArt and Sustainability: Activism Through Creativity.\u201D Art Studies, 2019.",
];

// ── Metadata ────────────────────────────────────────────────────────────────

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return {
    title:
      locale === "lt"
        ? `Spausdinama versija — ${THESIS.author}`
        : `Print version — ${THESIS.author}`,
  };
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default async function PrintPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const l = locale as Locale;
  const t = await getTranslations({ locale: l, namespace: "nav" });

  const sections = THESIS.sections;
  const subContents = [
    [s1_1, s1_2, s1_3],
    [s2_1, s2_2, s2_3],
    [s3_1, s3_2, s3_3],
  ];
  const bib = l === "lt" ? bibLT : bibEN;

  return (
    <>
      <style>{`
        /* ── Screen ────────────────────────────────── */
        @media screen {
          .print-root { background: #F5EDD8; min-height: 100vh; }
          .print-sheet {
            max-width: 760px;
            margin: 0 auto;
            padding: 0 clamp(1.5rem, 5vw, 3rem);
          }
          .print-hint {
            padding: 1.5rem 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid rgba(74,124,89,0.2);
            margin-bottom: 3rem;
            gap: 1.5rem;
          }
        }

        /* ── Print ─────────────────────────────────── */
        @media print {
          @page {
            size: A4;
            margin: 2.5cm 3cm 2.5cm 3cm;
          }
          @page :left  { margin-right: 3.5cm; }
          @page :right { margin-left: 3.5cm; }

          html, body { background: white !important; margin: 0; padding: 0; }
          .print-root { background: white !important; }
          .print-sheet { max-width: none; padding: 0; margin: 0; }
          .no-print { display: none !important; }
          .print-break { page-break-before: always; break-before: always; }
          .print-avoid { page-break-inside: avoid; break-inside: avoid; }
          figure { page-break-inside: avoid; break-inside: avoid; }
          h1, h2, h3 { page-break-after: avoid; break-after: avoid; }
          p { orphans: 3; widows: 3; }
          img { max-width: 100% !important; height: auto !important; }
        }

        /* ── Typography (both) ─────────────────────── */
        .print-body { font-family: 'Cormorant Garamond', Georgia, serif; color: #1A1A18; }
        .print-body p { margin-bottom: 1.25em; line-height: 1.85; font-size: 1rem; }
        .print-body blockquote {
          border-left: 2px solid #4A7C59;
          margin: 1.75em 0;
          padding: 0.25em 0 0.25em 1.5em;
          font-style: italic;
          color: #3A3A36;
        }
        .print-body blockquote cite {
          display: block;
          margin-top: 0.4rem;
          font-size: 0.88em;
          font-style: normal;
        }
        .print-body h3 {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 1.15em;
          font-weight: 400;
          font-style: italic;
          margin: 2em 0 0.75em;
          color: #4A7C59;
        }
        .print-body strong { font-weight: 600; }
        .print-body em { font-style: italic; }
        .print-body figure { margin: 2em 0; text-align: center; }
        .print-body figcaption {
          font-size: 0.82em;
          font-style: italic;
          color: #6a6a5a;
          margin-top: 0.5em;
          line-height: 1.5;
        }
        .print-body figure img { max-width: min(100%, 420px); height: auto; }

        /* Float resets in print */
        @media print {
          .print-body figure { float: none !important; width: auto !important; margin: 1.5em auto !important; }
        }

        /* TOC */
        .toc-entry {
          display: flex;
          align-items: baseline;
          gap: 0;
          font-family: 'Cormorant Garamond', Georgia, serif;
          line-height: 1.9;
        }
        .toc-dots {
          flex: 1;
          border-bottom: 1px dotted #aaa;
          margin: 0 0.5em;
          position: relative;
          top: -0.2em;
          min-width: 2em;
        }
        .toc-page {
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 11px;
          letter-spacing: 0.05em;
          color: #6a6a5a;
          flex-shrink: 0;
        }
      `}</style>

      <div className="print-root">
        <div className="print-sheet">

          {/* Screen-only: instructions + print button */}
          <div className="print-hint no-print">
            <p
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "15px",
                fontStyle: "italic",
                color: "#3A3A36",
                margin: 0,
              }}
            >
              {l === "lt"
                ? "Spauskite mygtuką — pirmiau įkeliami visi paveikslai, tada atsidaro spausdinimo langas."
                : "Click the button — all images will load first, then the print dialog will open."}
            </p>
            <PrintButton
              label={t("downloadPrint")}
              preparingLabel={l === "lt" ? "Įkeliama…" : "Preparing…"}
            />
          </div>

          {/* ── 1. COVER PAGE ─────────────────────────────────────────────── */}
          <div
            style={{
              minHeight: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              paddingTop: "3rem",
              paddingBottom: "3rem",
            }}
          >
            <p
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: "10px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#4A7C59",
                marginBottom: "1rem",
              }}
            >
              {l === "lt"
                ? "Vilniaus dailės akademija"
                : "Vilnius Academy of Arts"}
            </p>
            <p
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: "10px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#4A7C59",
                marginBottom: "4rem",
                opacity: 0.7,
              }}
            >
              {l === "lt"
                ? "Tekstilės meno ir dizaino magistrantūros studijos"
                : "Master's Programme in Textile Art and Design"}
            </p>

            <h1
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(1.7rem, 4vw, 2.6rem)",
                fontWeight: 400,
                color: "#1A1A18",
                lineHeight: 1.3,
                maxWidth: "560px",
                marginBottom: "1rem",
              }}
            >
              {THESIS.title[l]}
            </h1>

            <p
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "1.1rem",
                fontStyle: "italic",
                color: "#4A4A3A",
                marginBottom: "0.25rem",
              }}
            >
              {l === "lt" ? "Meninio tyrimo magistro baigiamasis darbas" : "Master's Artistic Research Thesis"}
            </p>

            <div
              style={{
                width: "40px",
                height: "1px",
                background: "#C4623A",
                margin: "2rem auto",
              }}
            />

            <p
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "1.15rem",
                color: "#1A1A18",
                marginBottom: "0.4rem",
              }}
            >
              {THESIS.author}
            </p>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "0.9rem",
                fontStyle: "italic",
                color: "#6a6a5a",
                marginBottom: "0.3rem",
              }}
            >
              {l === "lt" ? "Magistrantė" : "Master's Student"}
            </p>

            <p
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "0.95rem",
                color: "#6a6a5a",
                marginTop: "2rem",
              }}
            >
              {l === "lt" ? "Vilnius, " : "Vilnius, "}{THESIS.year}
            </p>
          </div>

          {/* ── 2. TABLE OF CONTENTS ──────────────────────────────────────── */}
          <div className="print-break" style={{ paddingTop: "2rem", paddingBottom: "3rem" }}>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "1.6rem",
                fontWeight: 400,
                color: "#1A1A18",
                marginBottom: "2.5rem",
                borderBottom: "1px solid rgba(74,124,89,0.25)",
                paddingBottom: "0.75rem",
              }}
            >
              {l === "lt" ? "Turinys" : "Table of Contents"}
            </h2>

            {/* Introduction */}
            <div className="toc-entry" style={{ fontSize: "1rem" }}>
              <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                {l === "lt" ? "Įvadas" : "Introduction"}
              </span>
              <span className="toc-dots" />
              <span className="toc-page">3</span>
            </div>

            {/* Sections */}
            {sections.map((section, si) => (
              <div key={section.id} style={{ marginTop: "1rem" }}>
                <div className="toc-entry" style={{ fontSize: "1.05rem", fontWeight: 500 }}>
                  <span
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontWeight: 500,
                    }}
                  >
                    {si + 1}. {section.title[l]}
                  </span>
                  <span className="toc-dots" />
                  <span className="toc-page">{5 + si * 4}</span>
                </div>
                {section.subsections.map((sub, subi) => (
                  <div
                    key={sub.id}
                    className="toc-entry"
                    style={{ fontSize: "0.9rem", paddingLeft: "1.5rem" }}
                  >
                    <span
                      style={{
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        color: "#3A3A36",
                      }}
                    >
                      {si + 1}.{subi + 1} {sub.title[l]}
                    </span>
                    <span className="toc-dots" />
                    <span className="toc-page">{6 + si * 4 + subi}</span>
                  </div>
                ))}
              </div>
            ))}

            {/* Conclusion */}
            <div className="toc-entry" style={{ fontSize: "1rem", marginTop: "1rem" }}>
              <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                {l === "lt" ? "Išvados" : "Conclusions"}
              </span>
              <span className="toc-dots" />
              <span className="toc-page">17</span>
            </div>

            {/* Bibliography */}
            <div className="toc-entry" style={{ fontSize: "1rem", marginTop: "0.25rem" }}>
              <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                {l === "lt" ? "Literatūros sąrašas" : "Bibliography"}
              </span>
              <span className="toc-dots" />
              <span className="toc-page">18</span>
            </div>

            {/* Footnotes */}
            <div className="toc-entry" style={{ fontSize: "1rem", marginTop: "0.25rem" }}>
              <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                {l === "lt" ? "Išnašos" : "Footnotes"}
              </span>
              <span className="toc-dots" />
              <span className="toc-page">19</span>
            </div>

            {/* List of illustrations */}
            <div className="toc-entry" style={{ fontSize: "1rem", marginTop: "0.25rem" }}>
              <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                {l === "lt" ? "Iliustracijų sąrašas" : "List of Illustrations"}
              </span>
              <span className="toc-dots" />
              <span className="toc-page">20</span>
            </div>
          </div>

          {/* ── 3. INTRODUCTION ───────────────────────────────────────────── */}
          <div className="print-break">
            <SectionHeading
              number={null}
              title={l === "lt" ? "Įvadas" : "Introduction"}
              color="#4A7C59"
            />
            <div className="print-body">{l === "lt" ? introLT : introEN}</div>
          </div>

          {/* ── 4. SECTIONS ───────────────────────────────────────────────── */}
          {sections.map((section, si) => (
            <div key={section.id}>
              {/* Section title page */}
              <div className="print-break">
                <p
                  style={{
                    fontFamily: "'Inter', system-ui, sans-serif",
                    fontSize: "10px",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: section.color,
                    marginBottom: "0.75rem",
                  }}
                >
                  {l === "lt" ? `${si + 1} skyrius` : `Chapter ${si + 1}`}
                </p>
                <h2
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
                    fontWeight: 400,
                    color: "#1A1A18",
                    lineHeight: 1.2,
                    marginBottom: "1rem",
                  }}
                >
                  {section.title[l]}
                </h2>
                <div
                  style={{
                    width: "32px",
                    height: "2px",
                    background: section.color,
                    marginBottom: "1.5rem",
                  }}
                />
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: "1rem",
                    fontStyle: "italic",
                    color: "#6a6a5a",
                    lineHeight: 1.7,
                    maxWidth: "480px",
                  }}
                >
                  {section.description[l]}
                </p>
              </div>

              {/* Subsections */}
              {section.subsections.map((sub, subi) => (
                <div key={sub.id} className="print-break">
                  <SectionHeading
                    number={`${si + 1}.${subi + 1}`}
                    title={sub.title[l]}
                    color={section.color}
                  />
                  <div className="print-body">{subContents[si][subi].body[l]}</div>
                </div>
              ))}
            </div>
          ))}

          {/* ── 5. CONCLUSION ─────────────────────────────────────────────── */}
          <div className="print-break">
            <SectionHeading
              number={null}
              title={l === "lt" ? "Išvados" : "Conclusions"}
              color="#4A7C59"
            />
            <div className="print-body">{l === "lt" ? conclusionLT : conclusionEN}</div>
          </div>

          {/* ── 6. BIBLIOGRAPHY ───────────────────────────────────────────── */}
          <div className="print-break" style={{ paddingBottom: "4rem" }}>
            <SectionHeading
              number={null}
              title={l === "lt" ? "Literatūros sąrašas" : "Bibliography"}
              color="#4A7C59"
            />
            <ol
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "0.95rem",
                lineHeight: 1.9,
                color: "#1A1A18",
                paddingLeft: "1.5rem",
              }}
            >
              {bib.map((entry, i) => (
                <li key={i} style={{ marginBottom: "0.5em" }}>
                  {entry}
                </li>
              ))}
            </ol>
          </div>

          {/* ── 7. FOOTNOTES ──────────────────────────────────────────────── */}
          <div className="print-break" style={{ paddingBottom: "4rem" }}>
            <SectionHeading
              number={null}
              title={l === "lt" ? "Išnašos" : "Footnotes"}
              color="#4A7C59"
            />
            <ol
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "0.88rem",
                lineHeight: 1.8,
                color: "#1A1A18",
                paddingLeft: "1.5rem",
              }}
            >
              {[
                "Arturo Escobar, Designs for the Pluriverse: Radical Interdependence, Autonomy, and the Making of Worlds, Duke University Press, 2017, p. X.",
                "Ibid., p. X.",
                "WWF website [interactive], [accessed 2022-05-28], https://www.worldwildlife.org/; World Economic Forum website [interactive], [accessed 2022-05-28], https://www.weforum.org/; Earth website [interactive], [accessed 2022-05-28], https://earth.org/; Our World in Data website [interactive], [accessed 2022-05-28], https://ourworldindata.org/.",
                "William Cronon, \"Trouble with Wilderness; Or, Getting Back to the Wrong Nature\", in: Environmental History, Vol. 1, No. 1, 1996.",
                "Arturo Escobar, op. cit.",
                "Lynn Margulis, Dorion Sagan, What is Life, University of California Press, Berkeley and Los Angeles, 2000; Lynn Margulis, The Symbiotic Planet – A New Look At Evolution, London: Hachette UK, 2013.",
                "Sacha Kagan, Art and Sustainability: Connecting Patterns for a Culture of Complexity, Wetzlar: Majuskel Medienproduktion GmbH, 2011.",
                "Ellen Dissanayake, Art and Intimacy: How the Arts Began, Seattle, London: University of Washington Press, 2000; Ellen Dissanayake, Homo Aestheticus: Where Art Comes From and Why, Seattle, London: University of Washington Press, 1999.",
                "Ideas Block [interactive], [accessed 2023-03-18], https://ideas-block.com/.",
                "Cameron Davis website [interactive], [accessed 2023-03-11], https://camerondavisstudio.com/.",
                "Vita Zaman: in Galerija Vartai [interactive], [accessed 2023-04-22], https://www.galerijavartai.com/artists/163-vitazaman/.",
                "Rithika Merchant website [interactive], [accessed 2023-04-11], http://www.rithikamerchant.com/.",
                "Mona Caron website [interactive], [accessed 2023-04-11]: https://monacaron.com/.",
                "Kirstie Macleod website [interactive], [accessed 2023-04-22]: https://www.kirstiemacleod.co.uk/.",
                "Peter Vander Wilden, A Portrait of 4 Environmental Artists in Vermont [interactive], 2019, [accessed 2022-05-12], https://video.vermontpublic.org/video/response-a-portrait-of-4-environmental-artists-in-vermont-aehmv5/; Monika Bertašiūtė-Čiužienė, \"Po 20 metų į Lietuvą sugrįžusi Vita Zaman\", 15min [interactive], 2022, [accessed 2023-03-21]; \"Rithika Merchant – Festival of the Phoenix Sun\", in: Our Choices [interactive], 2022, [accessed 2023-04-11], https://ourchoices.co/2022/09/01/rithika-merchant-festival-of-the-phoenix-sun/.",
                "Gilles Deleuze, Felix Guattari, Thousand Plateaus: Capitalism and Schizophrenia, Minneapolis: University of Minnesota Press, 1987.",
                "Deena Robinson, Sixth Mass Extinction of Wildlife Accelerating – Study, in: Earth [interactive], 2021, [accessed 2022-04-30], https://earth.org/sixth-mass-extinction-of-wildlife-accelerating/.",
                "René Descartes, A Discourse on Method, Meditations on the First Philosophy & Principles of Philosophy, London: Everyman, 1994.",
                "\"Nature\", Collins Dictionary [interactive], [accessed 2022-04-11], https://www.collinsdictionary.com/dictionary/english/nature.",
                "Rod Bennison, \"An Inclusive Re-Engagement with our Nonhuman Animal Kin\", in: Animals: an open access journal from MDPI, vol. 1,1, 40–55, 2010; Ferris Jabr, The Social Life of Forests [interactive], 2020, [accessed 2022-05-14], https://www.nytimes.com/interactive/2020/12/02/magazine/tree-communication-mycorrhiza.html.",
                "\"Rhizome\", in: Biology Online [interactive], [accessed 2023-04-01], https://www.biologyonline.com/dictionary/rhizome.",
                "Gilles Deleuze, Felix Guattari, op. cit., p. 21.",
                "Jane Goodall, Reasons for Hope, Warner Books, New York, 1999, p. 307.",
                "Collage No. 7: Transformation, Appendix III. Collective Embroidery Conversation Collages.",
                "McFall-Johnsen Morgan, \"These facts show how unsustainable the fashion industry is\", in: World Economic Forum [interactive], 2020-01-31, https://www.weforum.org/agenda/2020/01/fashion-industry-carbon-unsustainable-environment-pollution/.",
                "Sarah Ditty [et al.], Why We Still Need A Fashion Revolution: Fashion Revolution White Paper, Fashion Revolution, 2020.",
                "Collage No. 9: It Is Not Your Responsibility, Appendix III. Collective Embroidery Conversation Collages.",
                "R.E.A. Almond, M. Grooten, T. Petersen (Eds), WWF (2020) Living Planet Report 2020 – Bending the Curve of Biodiversity Loss, Gland, Switzerland: WWF, 2021.",
                "Hannah Ritchie, \"How much of the world's land would we need in order to feed the global population?\", in: Our World in Data [interactive], 2017-10-03, https://ourworldindata.org/agricultural-land-by-global-diets.",
                "R.E.A. Almond, M. Grooten, T. Petersen (Eds), op. cit., p. 61–63; Ida Tetsuji, \"Climate refugees – the world's forgotten victims\", in: World Economic Forum [interactive], 2021-06-18, https://www.weforum.org/agenda/2021/06/climate-refugees-the-world-s-forgotten-victims/.",
                "Collage No. 2: Creating from Within, Appendix III. Collective Embroidery Conversation Collages.",
                "Global Witness, Last Lines of Defence: The industries causing the climate crisis and attacks against land and environmental defenders, 2021, p. 12.",
                "Collage No. 2: Creating from Within, Appendix III. Collective Embroidery Conversation Collages.",
                "Dalberg Advisors, Covid19: Urgent Call to Protect People and Nature, WWF, 2020, p. 38.",
                "Donna J. Haraway, Staying with the Trouble: Making Kin in the Chthulucene, Duke University Press, 2016, p. 1.",
                "[Three Initiates, 1862–1932] The Kybalion: A Study of the Hermetic Philosophy of Ancient Egypt and Greece, 2020, New York: St. Martin's Essentials.",
                "Paavo Pylkkanen, The Search for Meaning: the New Spirit in Science and Philosophy, The Aquarian Press, 1989, p. 17–18.",
                "Frédéric Ducarme, Denis Couvet, \"What does 'nature' mean?\", in: Palgrave Communications 6, 14, 2020.",
                "\"Gamta\" [Nature], Sisteminis žodynas, Lithuanian Language Resources Information System \"E. kalba\" [interactive], [accessed 2022-04-11], https://ekalba.lt/.",
                "\"Gamta\" [Nature], in: Latin–Lithuanian Dictionary, Lithuanian Language Resources Information System \"E. kalba\".",
                "\"Gamta\" [Nature], in: Ancient Greek–Lithuanian Dictionary, Lithuanian Language Resources Information System \"E. kalba\".",
                "Frédéric Ducarme, Denis Couvet, op. cit., p. 2.",
                "\"Nature\", in: Collins Dictionary [interactive], [accessed 2022-04-11], https://www.collinsdictionary.com/dictionary/english/nature.",
                "\"Culture\", in: Online Etymology Dictionary [interactive], [accessed 2022-04-19], https://www.etymonline.com/word/culture.",
                "Ibid.",
                "\"Kultūra\" [Culture], Lithuanian Language Resources Information System \"E. kalba\", op. cit.",
                "\"Culture\", in: Collins Dictionary, op. cit.",
                "Jon Hawkes, The Fourth Pillar of Sustainability: Culture's Essential Role in Public Planning, Common Ground Publishing, 2001, p. 3.",
                "Sacha Kagan, op. cit., p. 13.",
                "Collins Dictionary, op. cit.",
                "Rod Bennison, op. cit.",
                "Lynn Margulis, Dorion Sagan, op. cit., p. 245.",
                "Collage No. 4: From Nature, Appendix III. Collective Embroidery Conversation Collages.",
                "William Cronon, op. cit., p. 24; Peter Watson, The Great Divide: Nature and Human Nature in the Old World and New, London: Harper Collins Publishers Ltd., 2011, p. 494–496.",
                "Frédéric Ducarme, Denis Couvet, op. cit., p. 3; René Descartes, op. cit.",
                "Ibid.",
                "Lynn Margulis, Dorion Sagan, op. cit., p. 38.",
                "Arturo Escobar, op. cit., p. 89.",
                "Claude Lévi-Strauss, Myth and Meaning, Toronto: University of Toronto Press, 1978, p. 13.",
                "Arturo Escobar, op. cit., p. 91.",
                "Collage No. 3: With Inner Peace, Appendix III. Collective Embroidery Conversation Collages.",
                "\"Tvarus\" [Sustainable], Lithuanian Language Resources Information System \"E. kalba\", op. cit.",
                "\"Sustainable\", Online Etymology Dictionary, op. cit.",
                "\"Sustainable\", Collins Dictionary, op. cit.",
                "World Commission on Environment and Development, Our Common Future, New York: Oxford University Press, 1987, p. 41, 255.",
                "Ferris Jabr, The Social Life of Forests [interactive], 2020, [accessed 2022-05-14], https://www.nytimes.com/interactive/2020/12/02/magazine/tree-communication-mycorrhiza.html.",
                "Lynn Margulis, Dorion Sagan, op. cit., p. 245.",
                "Arturo Escobar, op. cit., p. 95.",
                "William Cronon, op. cit., p. 17.",
                "Collage No. 3: With Inner Peace, Appendix III. Collective Embroidery Conversation Collages.",
                "François Matarasso, A Restless Art: How Participation Won, and Why It Matters, Calouste Gulbenkian Foundation, London, 2019, p. 38.",
                "Jon Hawkes, op. cit., p. 25.",
                "Ibid., p. 25.",
                "Ellen Dissanayake, Homo Aestheticus: Where Art Comes From and Why, Seattle, London: University of Washington Press, 1999, p. 226.",
                "Sacha Kagan, op. cit., p. 219.",
                "Donna J. Haraway, op. cit., p. 12.",
                "Collage No. 12: The Strong Side of the Artist, Appendix III. Collective Embroidery Conversation Collages.",
                "Collage No. 3: With Inner Peace, Appendix III. Collective Embroidery Conversation Collages.",
                "Shaun McNiff, \"From Shamanism to Art Therapy\", in: Art Psychotherapy, Vol. 6, Pergamon Press Ltd., 1979, p. 156–157.",
                "Peter Vander Wilden, op. cit.",
                "Cameron Davis, op. cit.",
                "Peter Vander Wilden, op. cit.; Monika Bertašiūtė-Čiužienė, op. cit.",
                "Ibid.",
                "Ibid.",
                "Jeannette Armstrong, \"An Okanagan Worldview of Society\", in: Sam Mickey, Mary Evelyn Tucker, John Grim (eds.), Living Earth Community: Multiple Ways of Being and Knowing, Cambridge: Open Book Publishers, 2020, p. 168.",
                "Collage No. 5: I Want to Believe We Will Survive, Appendix III. Collective Embroidery Conversation Collages.",
                "Collage No. 10: There Is Always a Cultural Side, Appendix III. Collective Embroidery Conversation Collages.",
                "Collage No. 1: Creating About Long-Lasting Things, Appendix III. Collective Embroidery Conversation Collages.",
                "Rithika Merchant, op. cit.",
                "Josh Wilson, \"Mona Caron: Getting Lost in the Weeds\", in: The Fabulist Magazine [interactive], 2022, [accessed 2023-04-11], https://fabulistmagazine.com/getting-lost-in-the-weeds-the-mona-caron-interview/.",
                "Ibid.",
                "Ellen Dissanayake, Art and Intimacy: How the Arts Began, Seattle, London: University of Washington Press, 2000, p. 73.",
                "Mona Caron, op. cit.",
                "\"The Market Street Railway Mural\", in: Mona Caron [interactive], [accessed 2023-04-11], https://monacaron.com/narrative-murals/market-street-railway-mural.",
                "\"Artivism\", in: Mona Caron [interactive], [accessed 2023-04-11], https://monacaron.com/artivism.",
                "Josh Wilson, op. cit.",
                "\"Weeds project\", in: Mona Caron [interactive], [accessed 2023-04-11], https://monacaron.com/weeds-project.",
                "Josh Wilson, op. cit.",
                "Juliana Spahr, This Connection of Everyone with Lungs: Poems, Berkeley, Los Angeles: University of California Press, 2005, p. 8–10.",
                "Claire Bishop, Artificial Hells: Participatory Art and the Politics of Spectatorship, London, New York: Verso, 2012, p. 1.",
                "Ideas Block [interactive], [accessed 2023-03-18], https://ideas-block.com/.",
                "The Red Dress [interactive], [accessed 2023-04-11], https://reddressembroidery.com/.",
                "Red Dress Embroidery, in: Etsy [interactive], [accessed 2023-04-11], https://www.etsy.com/uk/shop/RedDressEmbroidery.",
                "Ibid.",
                "Interview with Kirstie Macleod [interactive]. European Parliament Assembly YouTube channel, [accessed 2023-04-11]: https://www.youtube.com/watch?v=-z60FQLxocM.",
                "Ellen Dissanayake, Art and Intimacy: How the Arts Began, op. cit., p. 225.",
                "Lynn Margulis, Dorion Sagan, op. cit., p. 245–246.",
                "Donna J. Haraway, op. cit., p. 12.",
                "Collage No. 8: Like Sutartinės [traditional Lithuanian polyphonic songs], Appendix III. Collective Embroidery Conversation Collages.",
                "\"Bendruomenė\" [Community], Lithuanian Language Resources Information System \"E. kalba\", op. cit.",
                "Kristina Buožytė, Bruno Samper, Vesper, 2022 [interactive], [accessed 2023-03-20], https://www.vespermovie.com/.",
                "List of embroidery session participants, Appendix V.",
                "Creative Exchange for Community Cohesion: the power of arts when co-creating with communities, Tartu, 2022; Collage No. 8: Like Sutartinės, Appendix III. Collective Embroidery Conversation Collages.",
                "Ibid.",
                "Ideas Block, op. cit.",
                "\"Transitions\", in: Ideas Block [interactive], [accessed 2023-04-24], https://ideas-block.com/?s=transitions.",
                "Gilles Deleuze, Felix Guattari, op. cit., p. 25.",
                "Biology Online, op. cit.",
                "Gilles Deleuze, Felix Guattari, op. cit., p. 7.",
                "Ibid., p. 9.",
                "Creative Exchange for Community Cohesion, op. cit.; Liucija Dervinytė, Networks of Nature, 2022 [interactive], [accessed 2023-03-18], https://www.youtube.com/watch?v=hNkAhzO85Bw.",
                "Arleta Griffor, \"Mind and its Wholeness\", in: The Search for Meaning: the New Spirit in Science and Philosophy, The Aquarian Press, 1989, p. 314.",
                "Donna J. Haraway, op. cit., p. 1; United Nations Development Programme, The 2020 Human Development Report: The Next Frontier — Human Development and the Anthropocene, 2020, p. 6.",
                "Lynn Margulis, Dorion Sagan, op. cit., p. 221.",
                "Collage No. 4: From Nature, Appendix III. Collective Embroidery Conversation Collages.",
                "Ibid., p. 240.",
                "Collage No. 8: Like Sutartinės, Appendix III. Collective Embroidery Conversation Collages.",
                "Ellen Dissanayake, op. cit., p. 225.",
                "Arleta Griffor, op. cit., p. 314.",
                "Ibid.",
                "Ibid.",
                "Ibid.",
              ].map((fn, i) => (
                <li key={i} style={{ marginBottom: "0.4em" }}>
                  {fn}
                </li>
              ))}
            </ol>
          </div>

          {/* ── 8. LIST OF ILLUSTRATIONS ──────────────────────────────────── */}
          <div className="print-break" style={{ paddingBottom: "5rem" }}>
            <SectionHeading
              number={null}
              title={l === "lt" ? "Iliustracijų sąrašas" : "List of Illustrations"}
              color="#4A7C59"
            />
            <ol
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "0.92rem",
                lineHeight: 1.85,
                color: "#3A3A36",
                paddingLeft: "1.5rem",
              }}
            >
              {l === "lt" ? (
                <>
                  <li>Ateitis ties išnykimo riba, koliažas, Liucija Dervinytė, 2021</li>
                  <li>Klimato stebėjimo stotis, koliažas, Liucija Dervinytė, 2021</li>
                  <li>Vandens ciklas, koliažas, Liucija Dervinytė, 2021</li>
                  <li>Tinklai ir ryšiai, tekstilė, Liucija Dervinytė, 2021</li>
                  <li>Gamtos ir kultūros sąveika, koliažas, Liucija Dervinytė, 2021</li>
                  <li>Simbiozė, tekstilė, Liucija Dervinytė, 2022</li>
                  <li>Meno poveikis, koliažas, Liucija Dervinytė, 2021</li>
                  <li>Cameron Davis, <em>A Question of Inscendence: Magnolia Memorial I</em>, akvarelė ant drobės, 243 × 152 cm, 2019</li>
                  <li>Vita Zaman, <em>Naujoji Vaidilutė</em>, drobė, akrilai ir medvilniniai siūlai, 2022</li>
                  <li>Rithika Merchant, <em>Hyperlife</em>, mišri technika, 2020</li>
                  <li>Mona Caron, <em>Mujeres Custodias de Nuestro Hábitat en Peligro</em>, sienų tapyba, 10 × 50 m, 2008</li>
                  <li>Kirstie Macleod, <em>The Red Dress</em>, kolektyvinis siuvinėjimo projektas, 2009–</li>
                  <li>Tarp eilučių: planetos–žmonių istorija, koliažo knyga, Liucija Dervinytė, 2019</li>
                  <li>Ryšių tinklas, tekstilinis koliažas, Liucija Dervinytė, 2022</li>
                  <li>Siuvinėjimo dirbtuvės, Vilnius, 2021</li>
                  <li>Kolektyvinio siuvinėjimo fragmentas, Liucija Dervinytė, 2022</li>
                  <li>Dalyvavimas kūrybiniame procese, Liucija Dervinytė, 2022</li>
                  <li>Kūrybinis susitikimas, Liucija Dervinytė, 2022</li>
                  <li>Bendrumas, tekstilė, Liucija Dervinytė, 2022</li>
                  <li>Gamtos struktūra, koliažas, Liucija Dervinytė, 2022</li>
                  <li>Kolektyvinio siuvinėjimo sesija, Alt lab, SODAS 2123, Vilnius, 2022</li>
                  <li>Kolektyvinis siuvinėjimas, Creative Exchange for Community Cohesion, Tartu, Estija, 2022</li>
                  <li>Pokalbių siūlės, kolektyvinis siuvinėjimas, 2022</li>
                  <li>Ryšių rizoma, mišria technika, Liucija Dervinytė, 2023</li>
                  <li>Sujungti ryšiu, tekstilinis koliažas, Liucija Dervinytė, 2022</li>
                  <li>Žinojimas ir atsakomybė, suknelės koliažas, Liucija Dervinytė, 2023</li>
                  <li>Gamtos ašara, akvarelė, siuvinėjimas, koliažas, Liucija Dervinytė, 2022</li>
                </>
              ) : (
                <>
                  <li>Future at the Edge of Extinction, collage, Liucija Dervinytė, 2021</li>
                  <li>Climate observation station, collage, Liucija Dervinytė, 2021</li>
                  <li>Water cycle, collage, Liucija Dervinytė, 2021</li>
                  <li>Networks and connections, textile, Liucija Dervinytė, 2021</li>
                  <li>Interaction of nature and culture, collage, Liucija Dervinytė, 2021</li>
                  <li>Symbiosis, textile, Liucija Dervinytė, 2022</li>
                  <li>Impact of art, collage, Liucija Dervinytė, 2021</li>
                  <li>Cameron Davis, <em>A Question of Inscendence: Magnolia Memorial I</em>, acrylic on canvas, 243 × 152 cm, 2019</li>
                  <li>Vita Zaman, <em>Naujoji Vaidilutė</em>, canvas, acrylic and cotton thread embroidery, 2022</li>
                  <li>Rithika Merchant, <em>Hyperlife</em>, mixed media, 2020</li>
                  <li>Mona Caron, <em>Mujeres Custodias de Nuestro Hábitat en Peligro</em>, mural, 10 × 50 m, 2008</li>
                  <li>Kirstie Macleod, <em>The Red Dress</em>, global embroidery project, 2009–</li>
                  <li>Between the Lines: a planet–human story, collage book, Liucija Dervinytė, 2019</li>
                  <li>Network of connections, textile collage, Liucija Dervinytė, 2022</li>
                  <li>Embroidery workshop, Vilnius, 2021</li>
                  <li>Fragment of collective embroidery, Liucija Dervinytė, 2022</li>
                  <li>Participation in creative process, Liucija Dervinytė, 2022</li>
                  <li>Creative gathering, Liucija Dervinytė, 2022</li>
                  <li>Togetherness, textile, Liucija Dervinytė, 2022</li>
                  <li>Structure of nature, collage, Liucija Dervinytė, 2022</li>
                  <li>Collective embroidery session, Alt lab, SODAS 2123, Vilnius, 2022</li>
                  <li>Collective embroidery, Creative Exchange for Community Cohesion, Tartu, Estonia, 2022</li>
                  <li>Threads of conversation, collective embroidery, 2022</li>
                  <li>Rhizome of Connections, mixed media, Liucija Dervinytė, 2023</li>
                  <li>Connected by a bond, textile collage, Liucija Dervinytė, 2022</li>
                  <li>Knowledge and responsibility, dress collage, Liucija Dervinytė, 2023</li>
                  <li>Nature&apos;s tear, watercolor, embroidery, collage, Liucija Dervinytė, 2022</li>
                </>
              )}
            </ol>
          </div>

        </div>
      </div>

    </>
  );
}

// ── Helper ────────────────────────────────────────────────────────────────────

function SectionHeading({
  number,
  title,
  color,
}: {
  number: string | null;
  title: string;
  color: string;
}) {
  return (
    <div style={{ paddingTop: "2rem", paddingBottom: "1.75rem" }}>
      {number && (
        <p
          style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: "10px",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color,
            marginBottom: "0.5rem",
          }}
        >
          {number}
        </p>
      )}
      <h2
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: "clamp(1.4rem, 3vw, 2rem)",
          fontWeight: 400,
          color: "#1A1A18",
          marginBottom: "1rem",
          lineHeight: 1.2,
        }}
      >
        {title}
      </h2>
      <div style={{ width: "32px", height: "1px", background: color }} />
    </div>
  );
}
