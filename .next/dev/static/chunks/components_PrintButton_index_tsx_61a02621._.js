(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/PrintButton/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PrintButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function PrintButton({ label, preparingLabel }) {
    _s();
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("idle");
    const handlePrint = async ()=>{
        setStatus("loading");
        // 1. Scroll the entire page so every lazy image enters the viewport and starts loading
        const pageHeight = document.documentElement.scrollHeight;
        const step = window.innerHeight;
        let pos = 0;
        while(pos < pageHeight){
            window.scrollTo(0, pos);
            pos += step;
            // Brief pause to let IntersectionObserver fire
            await new Promise((r)=>setTimeout(r, 60));
        }
        window.scrollTo(0, 0);
        // 2. Wait for every <img> in the document to finish loading
        const imgs = Array.from(document.querySelectorAll("img"));
        await Promise.all(imgs.map((img)=>img.complete ? Promise.resolve() : new Promise((resolve)=>{
                img.onload = ()=>resolve();
                img.onerror = ()=>resolve(); // don't block on broken images
            })));
        // 3. Small final delay so the browser paints the restored scroll position
        await new Promise((r)=>setTimeout(r, 200));
        setStatus("ready");
        window.print();
        setStatus("idle");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: handlePrint,
        disabled: status === "loading",
        style: {
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: "11px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            background: "none",
            border: "1px solid rgba(74,124,89,0.4)",
            color: status === "loading" ? "#aaa" : "#4A7C59",
            cursor: status === "loading" ? "default" : "pointer",
            padding: "0.6rem 1.2rem",
            whiteSpace: "nowrap",
            flexShrink: 0,
            transition: "color 0.2s"
        },
        children: status === "loading" ? preparingLabel : label
    }, void 0, false, {
        fileName: "[project]/components/PrintButton/index.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_s(PrintButton, "PrSSnJYnmPMLjC7rLJ6w5budhnU=");
_c = PrintButton;
var _c;
__turbopack_context__.k.register(_c, "PrintButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_PrintButton_index_tsx_61a02621._.js.map