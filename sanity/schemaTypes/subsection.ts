import { defineType, defineField } from "sanity";

export const subsectionSchema = defineType({
  name: "subsection",
  title: "Subsection",
  type: "document",
  fields: [
    defineField({
      name: "key",
      title: "Key (e.g. s1-1)",
      type: "string",
      validation: (R) => R.required(),
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
      title: "Short Description (Lithuanian)",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "descriptionEN",
      title: "Short Description (English)",
      type: "text",
      rows: 2,
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
      title: "Images",
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
  ],
  preview: {
    select: { title: "titleLT", subtitle: "key" },
  },
});
