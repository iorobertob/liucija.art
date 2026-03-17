export type Locale = "lt" | "en";

export interface SubSection {
  id: string;
  key: string;
  title: Record<Locale, string>;
  slug: Record<Locale, string>;
  description: Record<Locale, string>;
  position: [number, number, number];
}

export interface Section {
  id: string;
  key: string;
  number: number;
  title: Record<Locale, string>;
  slug: Record<Locale, string>;
  description: Record<Locale, string>;
  color: string;
  position: [number, number, number];
  subsections: SubSection[];
}

export interface ThesisStructure {
  title: Record<Locale, string>;
  subtitle: Record<Locale, string>;
  author: string;
  year: string;
  sections: Section[];
}

export const THESIS: ThesisStructure = {
  title: {
    lt: "Menininkas kaip ryšių kūrėjas gamtos–kultūros rizomoje",
    en: "Artist as a Creator of Connections in a Nature–Culture Rhizome",
  },
  subtitle: {
    lt: "Ryšių rizoma",
    en: "Rhizome of Connections",
  },
  author: "Liucija Dervinytė",
  year: "2023",
  sections: [
    {
      id: "section1",
      key: "section1",
      number: 1,
      title: {
        lt: "Tvarumo vizijos",
        en: "Visions of Sustainability",
      },
      slug: {
        lt: "tvarumo-vizijos",
        en: "visions-of-sustainability",
      },
      description: {
        lt: "Antropoceno krizės atspindžiai ir gamtos–kultūros santykio tyrinėjimas",
        en: "Reflections on the Anthropocene crisis and the nature–culture relationship",
      },
      color: "#4A7C59",
      position: [-4.5, 1.5, -1],
      subsections: [
        {
          id: "s1-1",
          key: "sub1",
          title: {
            lt: "Ateitis ties išnykimo riba",
            en: "Future at the Edge of Extinction",
          },
          slug: {
            lt: "ateitis-ties-isnykimo-riba",
            en: "future-at-the-edge-of-extinction",
          },
          description: {
            lt: "Statistika ir asmeninės patirtys apie Antropoceno krizę",
            en: "Statistics and personal experiences about the Anthropocene crisis",
          },
          position: [-7, 3, -0.5],
        },
        {
          id: "s1-2",
          key: "sub2",
          title: {
            lt: "Kultūra gamtoje ar gamta kultūroje?",
            en: "Culture in Nature or Nature in Culture?",
          },
          slug: {
            lt: "kultura-gamtoje",
            en: "culture-in-nature",
          },
          description: {
            lt: "Gamtos ir kultūros sąvokų analizė ir jų tarpusavio santykis",
            en: "Analysis of nature and culture concepts and their interrelationship",
          },
          position: [-7.5, 0.5, -2],
        },
        {
          id: "s1-3",
          key: "sub3",
          title: {
            lt: "Tvarumas simbiozėje",
            en: "Sustainability in Symbiosis",
          },
          slug: {
            lt: "tvarumas-simbiozeje",
            en: "sustainability-in-symbiosis",
          },
          description: {
            lt: "Dualistinio vaizdinio transformacija ir tvarumo samprata",
            en: "Transformation of the dualistic image and the concept of sustainability",
          },
          position: [-6.5, -1.5, -1.5],
        },
      ],
    },
    {
      id: "section2",
      key: "section2",
      number: 2,
      title: {
        lt: "Įkvėpti pokyčius",
        en: "Inspiring Change",
      },
      slug: {
        lt: "ikepti-pokycius",
        en: "inspiring-change",
      },
      description: {
        lt: "Meno galia kurti ryšius ir inspiruoti tvarumo vizijas",
        en: "The power of art to create connections and inspire sustainability visions",
      },
      color: "#C4623A",
      position: [4.5, 2, 1.5],
      subsections: [
        {
          id: "s2-1",
          key: "sub1",
          title: {
            lt: "Meno skambesiai",
            en: "Resonances of Art",
          },
          slug: {
            lt: "meno-skambesiai",
            en: "resonances-of-art",
          },
          description: {
            lt: "Meno poveikis žmogaus balansui ir tvariam vystymuisi",
            en: "The impact of art on human balance and sustainable development",
          },
          position: [6.5, 3.5, 1],
        },
        {
          id: "s2-2",
          key: "sub2",
          title: {
            lt: "Tvarumo vizijų kūrėjai",
            en: "Creators of Sustainability Visions",
          },
          slug: {
            lt: "tvarumo-viziju-kurejai",
            en: "creators-of-sustainability-visions",
          },
          description: {
            lt: "Šiuolaikiniai menininkai tvarumo kontekste",
            en: "Contemporary artists in the context of sustainability",
          },
          position: [7, 1.5, 2.5],
        },
        {
          id: "s2-3",
          key: "sub3",
          title: {
            lt: "Bendrumas kūrime",
            en: "Commonality in Creation",
          },
          slug: {
            lt: "bendrumas-kurime",
            en: "commonality-in-creation",
          },
          description: {
            lt: "Kolektyvinis kūrybinis procesas kaip tyrimo priemonė",
            en: "Collective creative process as a research tool",
          },
          position: [6, 0, 2],
        },
      ],
    },
    {
      id: "section3",
      key: "section3",
      number: 3,
      title: {
        lt: "Žemės simfonija",
        en: "Symphony of the Earth",
      },
      slug: {
        lt: "zemes-simfonija",
        en: "symphony-of-the-earth",
      },
      description: {
        lt: "Asmeninis kūrybinis projektas ir kolektyviniai siuvinėjimo susitikimai",
        en: "Personal creative project and collective embroidery sessions",
      },
      color: "#D4A843",
      position: [0, -4.5, 2],
      subsections: [
        {
          id: "s3-1",
          key: "sub1",
          title: {
            lt: "Dėmuo gamtos struktūroje",
            en: "Element in the Structure of Nature",
          },
          slug: {
            lt: "demuo-gamtos-strukturoje",
            en: "element-in-the-structure-of-nature",
          },
          description: {
            lt: "Menininko rolė kaip gamtos tinklo dalis",
            en: "The role of the artist as part of nature's network",
          },
          position: [-1.5, -6.5, 1.5],
        },
        {
          id: "s3-2",
          key: "sub2",
          title: {
            lt: "Mus jungiančios gijos",
            en: "The Threads That Connect Us",
          },
          slug: {
            lt: "mus-jungianciosios-gijos",
            en: "the-threads-that-connect-us",
          },
          description: {
            lt: "Siuvinėjimo susitikimai ir kolektyvinis audimas",
            en: "Embroidery gatherings and collective weaving",
          },
          position: [1, -7, 2.5],
        },
        {
          id: "s3-3",
          key: "sub3",
          title: {
            lt: "Ryšių rizoma",
            en: "Rhizome of Connections",
          },
          slug: {
            lt: "rysiu-rizoma",
            en: "rhizome-of-connections",
          },
          description: {
            lt: "Projekto apibendrinimas per rizomos filosofiją",
            en: "Project synthesis through the philosophy of the rhizome",
          },
          position: [2, -6, 3],
        },
      ],
    },
  ],
};

export function getSectionBySlug(slug: string, locale: Locale): Section | undefined {
  return THESIS.sections.find((s) => s.slug[locale] === slug);
}

export function getSubBySlug(
  sectionSlug: string,
  subSlug: string,
  locale: Locale
): { section: Section; sub: SubSection } | undefined {
  const section = getSectionBySlug(sectionSlug, locale);
  if (!section) return undefined;
  const sub = section.subsections.find((s) => s.slug[locale] === subSlug);
  if (!sub) return undefined;
  return { section, sub };
}

export function getAllSlugs(locale: Locale) {
  const paths: { section: string; sub?: string }[] = [];
  for (const section of THESIS.sections) {
    paths.push({ section: section.slug[locale] });
    for (const sub of section.subsections) {
      paths.push({ section: section.slug[locale], sub: sub.slug[locale] });
    }
  }
  return paths;
}
