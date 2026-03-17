import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import Navigation from "@/components/Navigation";
import ThesisContent from "@/components/ThesisContent";
import { THESIS, Locale, getSubBySlug } from "@/lib/thesis-data";
import { SUBSECTION_CONTENT } from "@/lib/thesis-content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; section: string; sub: string }>;
}) {
  const { locale, section: sectionSlug, sub: subSlug } = await params;
  const result = getSubBySlug(sectionSlug, subSlug, locale as Locale);
  if (!result) return {};
  return { title: `${result.sub.title[locale as Locale]} — ${THESIS.author}` };
}

export default async function SubsectionPage({
  params,
}: {
  params: Promise<{ locale: string; section: string; sub: string }>;
}) {
  const { locale, section: sectionSlug, sub: subSlug } = await params;
  const l = locale as Locale;
  const t = await getTranslations({ locale: l });

  const result = getSubBySlug(sectionSlug, subSlug, l);
  if (!result) notFound();

  const { section, sub } = result;
  const subIndex = section.subsections.findIndex((s) => s.id === sub.id);
  const sectionIndex = THESIS.sections.findIndex((s) => s.id === section.id);

  // Prev / Next within subsections and across sections
  const prevSub = subIndex > 0 ? section.subsections[subIndex - 1] : null;
  const nextSub =
    subIndex < section.subsections.length - 1 ? section.subsections[subIndex + 1] : null;

  const prevSection = sectionIndex > 0 ? THESIS.sections[sectionIndex - 1] : null;
  const nextSection =
    sectionIndex < THESIS.sections.length - 1 ? THESIS.sections[sectionIndex + 1] : null;

  let prevHref: string | undefined;
  let prevLabel: string | undefined;
  let nextHref: string | undefined;
  let nextLabel: string | undefined;

  if (prevSub) {
    prevHref = `/${l}/thesis/${section.slug[l]}/${prevSub.slug[l]}`;
    prevLabel = prevSub.title[l];
  } else if (prevSection) {
    const lastSub = prevSection.subsections[prevSection.subsections.length - 1];
    prevHref = `/${l}/thesis/${prevSection.slug[l]}/${lastSub.slug[l]}`;
    prevLabel = lastSub.title[l];
  } else {
    prevHref = `/${l}/thesis/introduction`;
    prevLabel = t("nav.introduction");
  }

  if (nextSub) {
    nextHref = `/${l}/thesis/${section.slug[l]}/${nextSub.slug[l]}`;
    nextLabel = nextSub.title[l];
  } else if (nextSection) {
    nextHref = `/${l}/thesis/${nextSection.slug[l]}`;
    nextLabel = nextSection.title[l];
  } else {
    nextHref = `/${l}/thesis/conclusion`;
    nextLabel = t("nav.conclusion");
  }

  const content = SUBSECTION_CONTENT[sub.id];

  return (
    <>
      <Navigation />
      <ThesisContent
        number={`${section.number}.${subIndex + 1}`}
        title={sub.title[l]}
        body={content?.body[l] ?? <p>{l === "lt" ? "Turinys ruošiamas..." : "Content coming soon..."}</p>}
        breadcrumbs={[
          { label: l === "lt" ? "Tezė" : "Thesis", href: `/${l}` },
          { label: section.title[l], href: `/${l}/thesis/${section.slug[l]}` },
          { label: sub.title[l], href: `/${l}/thesis/${section.slug[l]}/${sub.slug[l]}` },
        ]}
        prevHref={prevHref}
        prevLabel={prevLabel}
        nextHref={nextHref}
        nextLabel={nextLabel}
      />
    </>
  );
}
