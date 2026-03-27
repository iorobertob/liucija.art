import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemaTypes";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "YOUR_PROJECT_ID";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

function sectionItem(S: any, num: number, titleLT: string, titleEN: string, subsections: { id: string; label: string }[]) {
  return S.listItem()
    .title(`${num}. ${titleLT} / ${titleEN}`)
    .child(
      S.list()
        .title(`${num}. ${titleLT}`)
        .items([
          S.listItem()
            .title("Skyrius / Section intro")
            .child(
              S.document()
                .schemaType("section")
                .documentId(`section-${num}`)
                .title(`${num}. ${titleLT}`)
            ),
          ...subsections.map(({ id, label }) =>
            S.listItem()
              .title(label)
              .child(
                S.document()
                  .schemaType("subsection")
                  .documentId(`sub-${id}`)
                  .title(label)
              )
          ),
        ])
    );
}

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  title: "Ryšių Rizoma — CMS",
  schema: { types: schemaTypes },
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Turinys / Content")
          .items([
            sectionItem(S, 1, "Tvarumo vizijos", "Visions of Sustainability", [
              { id: "s1-1", label: "1.1 Ateitis ties išnykimo riba / Future at the Edge of Extinction" },
              { id: "s1-2", label: "1.2 Kultūra gamtoje ar gamta kultūroje? / Culture in Nature or Nature in Culture?" },
              { id: "s1-3", label: "1.3 Tvarumas simbiozėje / Sustainability in Symbiosis" },
            ]),
            sectionItem(S, 2, "Įkvėpti pokyčius", "Inspiring Change", [
              { id: "s2-1", label: "2.1 Meno skambesiai / Resonances of Art" },
              { id: "s2-2", label: "2.2 Tvarumo vizijų kūrėjai / Creators of Sustainability Visions" },
              { id: "s2-3", label: "2.3 Bendrumas kūrime / Commonality in Creation" },
            ]),
            sectionItem(S, 3, "Žemės simfonija", "Symphony of the Earth", [
              { id: "s3-1", label: "3.1 Dėmuo gamtos struktūroje / Element in the Structure of Nature" },
              { id: "s3-2", label: "3.2 Mus jungiančios gijos / The Threads That Connect Us" },
              { id: "s3-3", label: "3.3 Ryšių rizoma / Rhizome of Connections" },
            ]),
            S.listItem()
              .title("Apie / About")
              .child(
                S.document()
                  .schemaType("about")
                  .documentId("about-singleton")
                  .title("About Page")
              ),
          ]),
    }),
    visionTool(),
  ],
});
