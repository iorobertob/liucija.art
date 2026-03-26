module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/querystring [external] (querystring, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("querystring", () => require("querystring"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[externals]/async_hooks [external] (async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("async_hooks", () => require("async_hooks"));

module.exports = mod;
}),
"[project]/sanity/schemaTypes/section.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sectionSchema",
    ()=>sectionSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/types/lib/index.js [app-ssr] (ecmascript)");
;
const sectionSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineType"])({
    name: "section",
    title: "Thesis Section",
    type: "document",
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "key",
            title: "Section Key (e.g. section1)",
            type: "string",
            validation: (R)=>R.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "number",
            title: "Section Number",
            type: "number"
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "titleLT",
            title: "Title (Lithuanian)",
            type: "string",
            validation: (R)=>R.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "titleEN",
            title: "Title (English)",
            type: "string"
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "descriptionLT",
            title: "Description (Lithuanian)",
            type: "text",
            rows: 3
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "descriptionEN",
            title: "Description (English)",
            type: "text",
            rows: 3
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "bodyLT",
            title: "Body Text (Lithuanian)",
            type: "array",
            of: [
                {
                    type: "block"
                },
                {
                    type: "image",
                    options: {
                        hotspot: true
                    }
                }
            ]
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "bodyEN",
            title: "Body Text (English)",
            type: "array",
            of: [
                {
                    type: "block"
                },
                {
                    type: "image",
                    options: {
                        hotspot: true
                    }
                }
            ]
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "images",
            title: "Section Images",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        {
                            name: "image",
                            type: "image",
                            title: "Image",
                            options: {
                                hotspot: true
                            }
                        },
                        {
                            name: "captionLT",
                            type: "string",
                            title: "Caption (Lithuanian)"
                        },
                        {
                            name: "captionEN",
                            type: "string",
                            title: "Caption (English)"
                        }
                    ]
                }
            ]
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "subsections",
            title: "Subsections",
            type: "array",
            of: [
                {
                    type: "reference",
                    to: [
                        {
                            type: "subsection"
                        }
                    ]
                }
            ]
        })
    ],
    preview: {
        select: {
            title: "titleLT",
            subtitle: "key"
        }
    }
});
}),
"[project]/sanity/schemaTypes/subsection.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "subsectionSchema",
    ()=>subsectionSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/types/lib/index.js [app-ssr] (ecmascript)");
;
const subsectionSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineType"])({
    name: "subsection",
    title: "Subsection",
    type: "document",
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "key",
            title: "Key (e.g. s1-1)",
            type: "string",
            validation: (R)=>R.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "titleLT",
            title: "Title (Lithuanian)",
            type: "string",
            validation: (R)=>R.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "titleEN",
            title: "Title (English)",
            type: "string"
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "descriptionLT",
            title: "Short Description (Lithuanian)",
            type: "text",
            rows: 2
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "descriptionEN",
            title: "Short Description (English)",
            type: "text",
            rows: 2
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "bodyLT",
            title: "Body Text (Lithuanian)",
            type: "array",
            of: [
                {
                    type: "block"
                },
                {
                    type: "image",
                    options: {
                        hotspot: true
                    }
                }
            ]
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "bodyEN",
            title: "Body Text (English)",
            type: "array",
            of: [
                {
                    type: "block"
                },
                {
                    type: "image",
                    options: {
                        hotspot: true
                    }
                }
            ]
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "images",
            title: "Images",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        {
                            name: "image",
                            type: "image",
                            title: "Image",
                            options: {
                                hotspot: true
                            }
                        },
                        {
                            name: "captionLT",
                            type: "string",
                            title: "Caption (Lithuanian)"
                        },
                        {
                            name: "captionEN",
                            type: "string",
                            title: "Caption (English)"
                        }
                    ]
                }
            ]
        })
    ],
    preview: {
        select: {
            title: "titleLT",
            subtitle: "key"
        }
    }
});
}),
"[project]/sanity/schemaTypes/about.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "aboutSchema",
    ()=>aboutSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/types/lib/index.js [app-ssr] (ecmascript)");
;
const aboutSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineType"])({
    name: "about",
    title: "About Page",
    type: "document",
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "bioLT",
            title: "Biography (Lithuanian)",
            type: "text",
            rows: 6
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "bioEN",
            title: "Biography (English)",
            type: "text",
            rows: 6
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "practiceLT",
            title: "Artistic Practice (Lithuanian)",
            type: "text",
            rows: 4
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "practiceEN",
            title: "Artistic Practice (English)",
            type: "text",
            rows: 4
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "portrait",
            title: "Portrait Photo",
            type: "image",
            options: {
                hotspot: true
            }
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "projects",
            title: "Projects",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        {
                            name: "title",
                            type: "string",
                            title: "Project Title"
                        },
                        {
                            name: "year",
                            type: "string",
                            title: "Year"
                        },
                        {
                            name: "descriptionLT",
                            type: "text",
                            title: "Description (Lithuanian)",
                            rows: 3
                        },
                        {
                            name: "descriptionEN",
                            type: "text",
                            title: "Description (English)",
                            rows: 3
                        },
                        {
                            name: "url",
                            type: "url",
                            title: "Project URL (optional)"
                        },
                        {
                            name: "image",
                            type: "image",
                            title: "Project Image (optional)",
                            options: {
                                hotspot: true
                            }
                        }
                    ]
                }
            ]
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "contact",
            title: "Contact / Social Links",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        {
                            name: "label",
                            type: "string",
                            title: "Label (e.g. Instagram)"
                        },
                        {
                            name: "url",
                            type: "url",
                            title: "URL"
                        }
                    ]
                }
            ]
        })
    ],
    preview: {
        prepare () {
            return {
                title: "About Page"
            };
        }
    }
});
}),
"[project]/sanity/schemaTypes/index.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "schemaTypes",
    ()=>schemaTypes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$section$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/schemaTypes/section.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$subsection$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/schemaTypes/subsection.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$about$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/schemaTypes/about.ts [app-ssr] (ecmascript)");
;
;
;
const schemaTypes = [
    __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$section$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sectionSchema"],
    __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$subsection$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["subsectionSchema"],
    __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$about$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["aboutSchema"]
];
}),
"[project]/sanity/sanity.config.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/sanity/lib/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$_chunks$2d$es$2f$structureTool$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sanity/lib/_chunks-es/structureTool.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$lib$2f$_chunks$2d$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/lib/_chunks-es/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/schemaTypes/index.ts [app-ssr] (ecmascript)");
;
;
;
;
// Replace these with your actual Sanity project ID and dataset
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "YOUR_PROJECT_ID";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["defineConfig"])({
    basePath: "/studio",
    projectId,
    dataset,
    title: "Ryšių Rizoma — CMS",
    schema: {
        types: __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["schemaTypes"]
    },
    plugins: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$_chunks$2d$es$2f$structureTool$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["structureTool"])({
            structure: (S)=>S.list().title("Turinys / Content").items([
                    S.listItem().title("Skyriai / Sections").child(S.documentTypeList("section").title("Sections")),
                    S.listItem().title("Poskyriai / Subsections").child(S.documentTypeList("subsection").title("Subsections")),
                    S.listItem().title("Apie / About").child(S.document().schemaType("about").documentId("about-singleton").title("About Page"))
                ])
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$lib$2f$_chunks$2d$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["visionTool"])()
    ]
});
}),
"[project]/app/studio/[[...tool]]/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StudioPage,
    "dynamic",
    ()=>dynamic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$sanity$2f$dist$2f$studio$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-sanity/dist/studio/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$sanity$2e$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/sanity.config.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
const dynamic = "force-dynamic";
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const isConfigured = projectId && projectId !== "YOUR_PROJECT_ID";
function StudioPage() {
    if (!isConfigured) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                minHeight: "100vh",
                background: "#F5EDD8",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "2rem",
                fontFamily: "'Cormorant Garamond', Georgia, serif"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: "560px",
                    textAlign: "center"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontFamily: "'Inter', system-ui, sans-serif",
                            fontSize: "11px",
                            letterSpacing: "0.15em",
                            textTransform: "uppercase",
                            color: "#C4623A",
                            marginBottom: "1.5rem"
                        },
                        children: "Sanity Studio — Setup Required"
                    }, void 0, false, {
                        fileName: "[project]/app/studio/[[...tool]]/page.tsx",
                        lineNumber: 26,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        style: {
                            fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                            fontWeight: 400,
                            color: "#1A1A18",
                            marginBottom: "1.5rem",
                            lineHeight: 1.3
                        },
                        children: "CMS not yet configured"
                    }, void 0, false, {
                        fileName: "[project]/app/studio/[[...tool]]/page.tsx",
                        lineNumber: 38,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: "1.05rem",
                            lineHeight: 1.8,
                            color: "#3A3A36",
                            marginBottom: "2rem"
                        },
                        children: "To activate the content editor, create a free Sanity project and add your project ID to the environment file."
                    }, void 0, false, {
                        fileName: "[project]/app/studio/[[...tool]]/page.tsx",
                        lineNumber: 49,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                        style: {
                            textAlign: "left",
                            fontSize: "0.95rem",
                            lineHeight: 2,
                            color: "#3A3A36",
                            paddingLeft: "1.5rem",
                            marginBottom: "2rem"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    "Go to",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        style: {
                                            fontWeight: 500
                                        },
                                        children: "sanity.io"
                                    }, void 0, false, {
                                        fileName: "[project]/app/studio/[[...tool]]/page.tsx",
                                        lineNumber: 72,
                                        columnNumber: 15
                                    }, this),
                                    " → create a free account"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/studio/[[...tool]]/page.tsx",
                                lineNumber: 70,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: 'Create a project named "thesis-website"'
                            }, void 0, false, {
                                fileName: "[project]/app/studio/[[...tool]]/page.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "Copy the Project ID from the project dashboard"
                            }, void 0, false, {
                                fileName: "[project]/app/studio/[[...tool]]/page.tsx",
                                lineNumber: 76,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    "Create a file called",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                        style: {
                                            background: "#EAD9BB",
                                            padding: "1px 6px",
                                            fontSize: "0.9em"
                                        },
                                        children: ".env.local"
                                    }, void 0, false, {
                                        fileName: "[project]/app/studio/[[...tool]]/page.tsx",
                                        lineNumber: 79,
                                        columnNumber: 15
                                    }, this),
                                    " ",
                                    "in the website root folder"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/studio/[[...tool]]/page.tsx",
                                lineNumber: 77,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    "Add these two lines:",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                        style: {
                                            background: "#EAD9BB",
                                            padding: "0.75rem 1rem",
                                            marginTop: "0.5rem",
                                            fontSize: "0.85rem",
                                            overflowX: "auto",
                                            lineHeight: 1.7
                                        },
                                        children: `NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here\nNEXT_PUBLIC_SANITY_DATASET=production`
                                    }, void 0, false, {
                                        fileName: "[project]/app/studio/[[...tool]]/page.tsx",
                                        lineNumber: 92,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/studio/[[...tool]]/page.tsx",
                                lineNumber: 90,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "Restart the development server"
                            }, void 0, false, {
                                fileName: "[project]/app/studio/[[...tool]]/page.tsx",
                                lineNumber: 105,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/studio/[[...tool]]/page.tsx",
                        lineNumber: 60,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: "0.9rem",
                            fontStyle: "italic",
                            color: "#6a6a5a"
                        },
                        children: "Once configured, you will be able to edit all thesis text and images here without touching any code."
                    }, void 0, false, {
                        fileName: "[project]/app/studio/[[...tool]]/page.tsx",
                        lineNumber: 107,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/studio/[[...tool]]/page.tsx",
                lineNumber: 25,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/studio/[[...tool]]/page.tsx",
            lineNumber: 14,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$sanity$2f$dist$2f$studio$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["NextStudio"], {
        config: __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$sanity$2e$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
    }, void 0, false, {
        fileName: "[project]/app/studio/[[...tool]]/page.tsx",
        lineNumber: 122,
        columnNumber: 10
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1b87bd73._.js.map