import { defineType, defineField } from "sanity";

export const sectionSchema = defineType({
  name: "section",
  title: "Thesis Section",
  type: "document",
  fields: [
    defineField({
      name: "key",
      title: "Section Key (e.g. section1)",
      type: "string",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "number",
      title: "Section Number",
      type: "number",
    }),
    defineField({
      name: "titleLT",
      title: "Title (Lithuanian)",
      type: "string",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "titleEN",
      title: "Title (English)",
      type: "string",
    }),
    defineField({
      name: "descriptionLT",
      title: "Description (Lithuanian)",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "descriptionEN",
      title: "Description (English)",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "bodyLT",
      title: "Body Text (Lithuanian)",
      type: "array",
      of: [{ type: "block" }, { type: "image", options: { hotspot: true } }],
    }),
    defineField({
      name: "bodyEN",
      title: "Body Text (English)",
      type: "array",
      of: [{ type: "block" }, { type: "image", options: { hotspot: true } }],
    }),
    defineField({
      name: "images",
      title: "Section Images",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "image", type: "image", title: "Image", options: { hotspot: true } },
            { name: "captionLT", type: "string", title: "Caption (Lithuanian)" },
            { name: "captionEN", type: "string", title: "Caption (English)" },
          ],
        },
      ],
    }),
    defineField({
      name: "subsections",
      title: "Subsections",
      type: "array",
      of: [{ type: "reference", to: [{ type: "subsection" }] }],
    }),
  ],
  preview: {
    select: { title: "titleLT", subtitle: "key" },
  },
});
