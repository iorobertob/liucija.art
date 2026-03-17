import { getTranslations } from "next-intl/server";
import Navigation from "@/components/Navigation";
import ThesisContent from "@/components/ThesisContent";
import { THESIS, Locale } from "@/lib/thesis-data";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "nav" });
  return { title: `${t("introduction")} — ${THESIS.author}` };
}

const introLT = (
  <>
    <blockquote>
      Esame atsidūrę glaudžiai tarpusavyje susijusių dalykų krizėje, ne tik klimato, maisto,
      energijos, skurdo, bet ir prasmės krizėje, ir mažiausiai ką galime padaryti, kad ją
      įveiktume – tai perkurti žmogų.
      <br />
      <cite style={{ display: "block", marginTop: "0.5rem", fontSize: "0.9em" }}>
        — Arturo Escobar
      </cite>
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
      <br />
      <cite style={{ display: "block", marginTop: "0.5rem", fontSize: "0.9em" }}>
        — Arturo Escobar
      </cite>
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
      of meaning."
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
      usually growing horizontally underground. The concept of the rhizome is also used in
      philosophy, proposed by Gilles Deleuze and Félix Guattari, as a way of thinking about the
      world that emphasizes non-hierarchical, non-linear connections between different elements.
    </p>

    <p>
      <strong>Anthropocene</strong> — a period marked by the dominance of human activity in Earth's
      ecosystems, signaling the "sixth great extinction."
    </p>

    <p>
      <strong>Sustainable social development</strong> — understood here as cultural, social,
      political, or economic processes of social change based on systems thinking, ensuring
      favorable conditions for Earth's ecosystems.
    </p>
  </>
);

export default async function IntroductionPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  const l = locale as Locale;

  const section1 = THESIS.sections[0];

  return (
    <>
      <Navigation />
      <ThesisContent
        title={t("nav.introduction")}
        body={l === "lt" ? introLT : introEN}
        images={[
          {
            src: "/images/img-000.jpg",
            alt: "Thesis illustration",
            caption:
              l === "lt"
                ? "Liucija Dervinytė, 2021"
                : "Liucija Dervinytė, 2021",
          },
        ]}
        breadcrumbs={[
          { label: l === "lt" ? "Tezė" : "Thesis", href: `/${l}` },
          {
            label: t("nav.introduction"),
            href: `/${l}/thesis/introduction`,
          },
        ]}
        nextHref={`/${l}/thesis/${section1.slug[l]}/${section1.subsections[0].slug[l]}`}
        nextLabel={`1. ${section1.title[l]}`}
      />
    </>
  );
}
