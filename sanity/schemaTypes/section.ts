import { defineType, defineField } from "sanity";

const bodyImageType = {
  type: "image",
  options: { hotspot: true },
  fields: [
    defineField({ name: "captionLT", type: "string", title: "Caption (Lithuanian)" }),
    defineField({ name: "captionEN", type: "string", title: "Caption (English)" }),
    defineField({
      name: "align",
      type: "string",
      title: "Image position",
      options: {
        list: [
          { title: "Float right (beside text)", value: "right" },
          { title: "Float left (beside text)", value: "left" },
          { title: "Full-width center", value: "center" },
        ],
        layout: "radio",
      },
      initialValue: "right",
    }),
    defineField({
      name: "figWidth",
      type: "number",
      title: "Width in px (for left/right float only)",
      initialValue: 280,
    }),
  ],
};

const bodyBlockType = {
  type: "block",
  styles: [
    { title: "Normal paragraph", value: "normal" },
    { title: "Blockquote (cited quote)", value: "blockquote" },
    { title: "Poem / Pull quote", value: "poem" },
  ],
  marks: {
    decorators: [
      { title: "Strong", value: "strong" },
      { title: "Emphasis", value: "em" },
    ],
  },
};

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
      of: [bodyBlockType, bodyImageType],
    }),
    defineField({
      name: "bodyEN",
      title: "Body Text (English)",
      type: "array",
      of: [bodyBlockType, bodyImageType],
    }),
  ],
  preview: {
    select: { title: "titleLT", subtitle: "key" },
  },
});
