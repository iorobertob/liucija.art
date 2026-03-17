import { defineType, defineField } from "sanity";

export const aboutSchema = defineType({
  name: "about",
  title: "About Page",
  type: "document",
  fields: [
    defineField({
      name: "bioLT",
      title: "Biography (Lithuanian)",
      type: "text",
      rows: 6,
    }),
    defineField({
      name: "bioEN",
      title: "Biography (English)",
      type: "text",
      rows: 6,
    }),
    defineField({
      name: "practiceLT",
      title: "Artistic Practice (Lithuanian)",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "practiceEN",
      title: "Artistic Practice (English)",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "portrait",
      title: "Portrait Photo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "projects",
      title: "Projects",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", type: "string", title: "Project Title" },
            { name: "year", type: "string", title: "Year" },
            { name: "descriptionLT", type: "text", title: "Description (Lithuanian)", rows: 3 },
            { name: "descriptionEN", type: "text", title: "Description (English)", rows: 3 },
            { name: "url", type: "url", title: "Project URL (optional)" },
            { name: "image", type: "image", title: "Project Image (optional)", options: { hotspot: true } },
          ],
        },
      ],
    }),
    defineField({
      name: "contact",
      title: "Contact / Social Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", type: "string", title: "Label (e.g. Instagram)" },
            { name: "url", type: "url", title: "URL" },
          ],
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "About Page" };
    },
  },
});
