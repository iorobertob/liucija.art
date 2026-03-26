(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/RhizomeMap/RhizomeScene.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RhizomeScene
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export C as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/OrbitControls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/web/Html.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$thesis$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/thesis-data.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
// ── Organic node ──────────────────────────────────────────────────────────────
function OrganicNode({ position, color, size = 0.35, label, sublabel, onClick, isCentral = false, isHovered = false, onHover }) {
    _s();
    const meshRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(Math.random() * Math.PI * 2);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "OrganicNode.useFrame": (_, delta)=>{
            t.current += delta * 0.6;
            if (meshRef.current) {
                const pulse = 1 + 0.06 * Math.sin(t.current);
                const hover = isHovered ? 1.15 : 1;
                meshRef.current.scale.setScalar(pulse * hover);
            }
        }
    }["OrganicNode.useFrame"]);
    const nodeColor = isHovered ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](color).offsetHSL(0, 0.1, 0.15) : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](color);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        position: position,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                ref: meshRef,
                onClick: (e)=>{
                    e.stopPropagation();
                    onClick();
                },
                onPointerEnter: (e)=>{
                    e.stopPropagation();
                    document.body.style.cursor = "pointer";
                    onHover(true);
                },
                onPointerLeave: ()=>{
                    document.body.style.cursor = "default";
                    onHover(false);
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                        args: [
                            size,
                            32,
                            32
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/RhizomeMap/RhizomeScene.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: nodeColor,
                        roughness: 0.75,
                        metalness: 0.05,
                        emissive: nodeColor,
                        emissiveIntensity: isHovered ? 0.35 : isCentral ? 0.2 : 0.08
                    }, void 0, false, {
                        fileName: "[project]/components/RhizomeMap/RhizomeScene.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/RhizomeMap/RhizomeScene.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html"], {
                position: [
                    0,
                    size + 0.25,
                    0
                ],
                center: true,
                style: {
                    pointerEvents: "none",
                    userSelect: "none"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        color: isCentral ? "#F5EDD8" : "#F0E8D0",
                        fontSize: isCentral ? "13px" : "11px",
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        fontWeight: isCentral ? "500" : "400",
                        textAlign: "center",
                        textShadow: "0 1px 6px rgba(0,0,0,0.9)",
                        letterSpacing: "0.03em",
                        lineHeight: 1.3,
                        maxWidth: isCentral ? "160px" : "120px",
                        opacity: isHovered ? 1 : 0.85,
                        transition: "opacity 0.2s",
                        whiteSpace: "pre-wrap"
                    },
                    children: [
                        label,
                        sublabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontSize: "9px",
                                opacity: 0.65,
                                marginTop: "2px",
                                fontStyle: "italic"
                            },
                            children: sublabel
                        }, void 0, false, {
                            fileName: "[project]/components/RhizomeMap/RhizomeScene.tsx",
                            lineNumber: 100,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/RhizomeMap/RhizomeScene.tsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/RhizomeMap/RhizomeScene.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/RhizomeMap/RhizomeScene.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_s(OrganicNode, "K3Z5gcdhZeXRaIfC2Urqzo3mAKQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c = OrganicNode;
// ── Organic thread connection ──────────────────────────────────────────────────
function ThreadEdge({ start, end, color, opacity = 0.5 }) {
    _s1();
    const pulseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const progress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(Math.random());
    const speed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0.12 + Math.random() * 0.08);
    const mid = [
        (start[0] + end[0]) / 2 + (Math.random() - 0.5) * 1.5,
        (start[1] + end[1]) / 2 + (Math.random() - 0.5) * 1.5,
        (start[2] + end[2]) / 2 + (Math.random() - 0.5) * 0.8
    ];
    const curve = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CatmullRomCurve3"]([
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](...start),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](...mid),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](...end)
    ]);
    const points = curve.getPoints(60);
    const geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferGeometry"]().setFromPoints(points);
    const material = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineBasicMaterial"]({
        color,
        transparent: true,
        opacity
    });
    const lineObj = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"](geometry, material);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "ThreadEdge.useFrame": (_, delta)=>{
            progress.current = (progress.current + delta * speed.current) % 1;
            if (pulseRef.current) {
                const pt = curve.getPoint(progress.current);
                pulseRef.current.position.set(pt.x, pt.y, pt.z);
            }
        }
    }["ThreadEdge.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("primitive", {
                object: lineObj
            }, void 0, false, {
                fileName: "[project]/components/RhizomeMap/RhizomeScene.tsx",
                lineNumber: 160,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                ref: pulseRef,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                        args: [
                            0.022,
                            8,
                            8
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/RhizomeMap/RhizomeScene.tsx",
                        lineNumber: 162,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: color,
                        emissive: color,
                        emissiveIntensity: 1.5,
                        transparent: true,
                        opacity: 0.85
                    }, void 0, false, {
                        fileName: "[project]/components/RhizomeMap/RhizomeScene.tsx",
                        lineNumber: 163,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/RhizomeMap/RhizomeScene.tsx",
                lineNumber: 161,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/RhizomeMap/RhizomeScene.tsx",
        lineNumber: 159,
        columnNumber: 5
    }, this);
}
_s1(ThreadEdge, "9ry7aZysKpUPsdMo/u0bpnycSTY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c1 = ThreadEdge;
// ── Camera animator ────────────────────────────────────────────────────────────
// Fix: use useEffect so animation only triggers once when `target` changes,
// not on every render frame (which was locking OrbitControls permanently).
function CameraAnimator({ target, controlsRef }) {
    _s2();
    const { camera } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    const animating = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const targetCamPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]());
    const targetLook = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CameraAnimator.useEffect": ()=>{
            if (!target) return;
            // Position the camera 10 units away from the target node, along the same direction
            const dir = target.clone().normalize().multiplyScalar(10);
            targetCamPos.current.copy(dir);
            targetLook.current.copy(target);
            animating.current = true;
        }
    }["CameraAnimator.useEffect"], [
        target
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "CameraAnimator.useFrame": ()=>{
            if (!animating.current) return;
            const ctrl = controlsRef.current;
            camera.position.lerp(targetCamPos.current, 0.06);
            if (ctrl) {
                ctrl.target.lerp(targetLook.current, 0.06);
                ctrl.update();
            }
            const posClose = camera.position.distanceTo(targetCamPos.current) < 0.15;
            const lookClose = !ctrl || ctrl.target.distanceTo(targetLook.current) < 0.15;
            if (posClose && lookClose) {
                // Animation done — release control back to OrbitControls
                animating.current = false;
            }
        }
    }["CameraAnimator.useFrame"]);
    return null;
}
_s2(CameraAnimator, "cT204cfzvX6cwL6o2dybpsJgSew=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c2 = CameraAnimator;
// ── Main scene component ───────────────────────────────────────────────────────
function Scene({ locale, onNodeHover, hoveredId }) {
    _s3();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const controlsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [cameraTarget, setCameraTarget] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [visibleSubs, setVisibleSubs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleSectionClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Scene.useCallback[handleSectionClick]": (section)=>{
            setCameraTarget(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](...section.position));
            setVisibleSubs(section.id);
        }
    }["Scene.useCallback[handleSectionClick]"], []);
    const handleSubClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Scene.useCallback[handleSubClick]": (section, sub)=>{
            router.push(`/${locale}/thesis/${section.slug[locale]}/${sub.slug[locale]}`);
        }
    }["Scene.useCallback[handleSubClick]"], [
        router,
        locale
    ]);
    const handleCentralClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Scene.useCallback[handleCentralClick]": ()=>{
            router.push(`/${locale}/thesis/introduction`);
        }
    }["Scene.useCallback[handleCentralClick]"], [
        router,
        locale
    ]);
    const centralPos = [
        0,
        0,
        0
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ambientLight", {
                intensity: 0.6,
                color: "#F5EDD8"
            }, void 0, false, {
                fileName: "[project]/components/RhizomeMap/RhizomeScene.tsx",
                lineNumber: 262,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                position: [
                    8,
                    8,
                    8
                ],
                intensity: 1.2,
                color: "#E8C878"
            }, void 0, false, {
                fileName: "[project]/components/RhizomeMap/RhizomeScene.tsx",
                lineNumber: 263,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                position: [
                    -8,
                    -4,
                    6
                ],
                intensity: 0.7,
                color: "#6FA882"
            }, void 0, false, {
                fileName: "[project]/components/RhizomeMap/RhizomeScene.tsx",
                lineNumber: 264,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                position: [
                    0,
                    -8,
                    -4
                ],
                intensity: 0.5,
                color: "#C4623A"
            }, void 0, false, {
                fileName: "[project]/components/RhizomeMap/RhizomeScene.tsx",
                lineNumber: 265,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CameraAnimator, {
                target: cameraTarget,
                controlsRef: controlsRef
            }, void 0, false, {
                fileName: "[project]/components/RhizomeMap/RhizomeScene.tsx",
                lineNumber: 267,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrbitControls"], {
                ref: controlsRef,
                enableDamping: true,
                dampingFactor: 0.08,
                rotateSpeed: 0.4,
                zoomSpeed: 0.8,
                minDistance: 4,
                maxDistance: 22,
                enablePan: false
            }, void 0, false, {
                fileName: "[project]/components/RhizomeMap/RhizomeScene.tsx",
                lineNumber: 269,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OrganicNode, {
                position: centralPos,
                color: "#8B6914",
                size: 0.5,
                label: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$thesis$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THESIS"].subtitle[locale],
                sublabel: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$thesis$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THESIS"].author,
                onClick: handleCentralClick,
                isCentral: true,
                isHovered: hoveredId === "central",
                onHover: (v)=>onNodeHover(v ? "central" : null, v ? {
                        title: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$thesis$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THESIS"].subtitle[locale],
                        description: locale === "lt" ? "Spustelėkite, kad skaitytumėte įvadą" : "Click to read the introduction"
                    } : null)
            }, void 0, false, {
                fileName: "[project]/components/RhizomeMap/RhizomeScene.tsx",
                lineNumber: 281,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$thesis$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THESIS"].sections.map((section)=>{
                const showSubs = visibleSubs === section.id;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThreadEdge, {
                            start: centralPos,
                            end: section.position,
                            color: section.color,
                            opacity: 0.45
                        }, void 0, false, {
                            fileName: "[project]/components/RhizomeMap/RhizomeScene.tsx",
                            lineNumber: 310,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OrganicNode, {
                            position: section.position,
                            color: section.color,
                            size: 0.32,
                            label: section.title[locale],
                            sublabel: `${locale === "lt" ? "Skyrius" : "Section"} ${section.number}`,
                            onClick: ()=>handleSectionClick(section),
                            isHovered: hoveredId === section.id,
                            onHover: (v)=>onNodeHover(v ? section.id : null, v ? {
                                    title: section.title[locale],
                                    description: section.description[locale]
                                } : null)
                        }, void 0, false, {
                            fileName: "[project]/components/RhizomeMap/RhizomeScene.tsx",
                            lineNumber: 318,
                            columnNumber: 13
                        }, this),
                        showSubs && section.subsections.map((sub, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThreadEdge, {
                                        start: section.position,
                                        end: sub.position,
                                        color: section.color,
                                        opacity: 0.6
                                    }, void 0, false, {
                                        fileName: "[project]/components/RhizomeMap/RhizomeScene.tsx",
                                        lineNumber: 343,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OrganicNode, {
                                        position: sub.position,
                                        color: section.color,
                                        size: 0.2,
                                        label: sub.title[locale],
                                        sublabel: `${section.number}.${i + 1}`,
                                        onClick: ()=>handleSubClick(section, sub),
                                        isHovered: hoveredId === sub.id,
                                        onHover: (v)=>onNodeHover(v ? sub.id : null, v ? {
                                                title: sub.title[locale],
                                                description: sub.description[locale]
                                            } : null)
                                    }, void 0, false, {
                                        fileName: "[project]/components/RhizomeMap/RhizomeScene.tsx",
                                        lineNumber: 349,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, sub.id, true, {
                                fileName: "[project]/components/RhizomeMap/RhizomeScene.tsx",
                                lineNumber: 342,
                                columnNumber: 17
                            }, this))
                    ]
                }, section.id, true, {
                    fileName: "[project]/components/RhizomeMap/RhizomeScene.tsx",
                    lineNumber: 308,
                    columnNumber: 11
                }, this);
            })
        ]
    }, void 0, true);
}
_s3(Scene, "PGaSkDFiEcChh/P2BtWIgergfTY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c3 = Scene;
function RhizomeScene({ locale }) {
    _s4();
    const [hoveredId, setHoveredId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [hoveredInfo, setHoveredInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleNodeHover = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "RhizomeScene.useCallback[handleNodeHover]": (id, info)=>{
            setHoveredId(id);
            setHoveredInfo(info);
        }
    }["RhizomeScene.useCallback[handleNodeHover]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full h-full",
        style: {
            touchAction: "none"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
                camera: {
                    position: [
                        0,
                        0,
                        14
                    ],
                    fov: 55
                },
                onPointerMissed: ()=>{
                    setHoveredId(null);
                    setHoveredInfo(null);
                },
                gl: {
                    antialias: true,
                    alpha: false
                },
                style: {
                    background: "#0D1F14",
                    touchAction: "none"
                },
                onCreated: ({ gl })=>{
                    // Ensure the actual WebGL canvas DOM element gets touch-action: none
                    // (r3f's style prop targets the wrapper div, not the canvas itself)
                    gl.domElement.style.touchAction = "none";
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("fog", {
                        attach: "fog",
                        args: [
                            "#0D1F14",
                            18,
                            40
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/RhizomeMap/RhizomeScene.tsx",
                        lineNumber: 410,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Scene, {
                        locale: locale,
                        onNodeHover: handleNodeHover,
                        hoveredId: hoveredId
                    }, void 0, false, {
                        fileName: "[project]/components/RhizomeMap/RhizomeScene.tsx",
                        lineNumber: 411,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/RhizomeMap/RhizomeScene.tsx",
                lineNumber: 396,
                columnNumber: 7
            }, this),
            hoveredInfo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-12 left-1/2 -translate-x-1/2 pointer-events-none",
                style: {
                    background: "rgba(13,31,20,0.88)",
                    border: "1px solid rgba(212,168,67,0.35)",
                    borderRadius: "2px",
                    padding: "12px 20px",
                    maxWidth: "320px",
                    textAlign: "center",
                    backdropFilter: "blur(8px)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontFamily: "'Cormorant Garamond', Georgia, serif",
                            fontSize: "15px",
                            fontWeight: 500,
                            color: "#F5EDD8",
                            marginBottom: "4px"
                        },
                        children: hoveredInfo.title
                    }, void 0, false, {
                        fileName: "[project]/components/RhizomeMap/RhizomeScene.tsx",
                        lineNumber: 432,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontFamily: "'Cormorant Garamond', Georgia, serif",
                            fontSize: "12px",
                            fontStyle: "italic",
                            color: "rgba(245,237,216,0.65)",
                            lineHeight: 1.5
                        },
                        children: hoveredInfo.description
                    }, void 0, false, {
                        fileName: "[project]/components/RhizomeMap/RhizomeScene.tsx",
                        lineNumber: 443,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/RhizomeMap/RhizomeScene.tsx",
                lineNumber: 420,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/RhizomeMap/RhizomeScene.tsx",
        lineNumber: 395,
        columnNumber: 5
    }, this);
}
_s4(RhizomeScene, "o6KxsCbEP1fjC0X2bB1dXAd49V8=");
_c4 = RhizomeScene;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "OrganicNode");
__turbopack_context__.k.register(_c1, "ThreadEdge");
__turbopack_context__.k.register(_c2, "CameraAnimator");
__turbopack_context__.k.register(_c3, "Scene");
__turbopack_context__.k.register(_c4, "RhizomeScene");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/RhizomeMap/RhizomeScene.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/RhizomeMap/RhizomeScene.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=components_RhizomeMap_RhizomeScene_tsx_3b895a4a._.js.map