import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemaTypes";

// Replace these with your actual Sanity project ID and dataset
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "YOUR_PROJECT_ID";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

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
            S.listItem()
              .title("Skyriai / Sections")
              .child(S.documentTypeList("section").title("Sections")),
            S.listItem()
              .title("Poskyriai / Subsections")
              .child(S.documentTypeList("subsection").title("Subsections")),
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
