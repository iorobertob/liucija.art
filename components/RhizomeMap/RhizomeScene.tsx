"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import * as THREE from "three";
import { useRouter } from "next/navigation";
import { THESIS, Section, SubSection, Locale } from "@/lib/thesis-data";

// ── Organic node ──────────────────────────────────────────────────────────────
function OrganicNode({
  position,
  color,
  size = 0.35,
  label,
  sublabel,
  onClick,
  isCentral = false,
  isHovered = false,
  onHover,
}: {
  position: [number, number, number];
  color: string;
  size?: number;
  label: string;
  sublabel?: string;
  onClick: () => void;
  isCentral?: boolean;
  isHovered?: boolean;
  onHover: (v: boolean) => void;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const t = useRef(Math.random() * Math.PI * 2);

  useFrame((_, delta) => {
    t.current += delta * 0.6;
    if (meshRef.current) {
      const pulse = 1 + 0.06 * Math.sin(t.current);
      const hover = isHovered ? 1.15 : 1;
      meshRef.current.scale.setScalar(pulse * hover);
    }
  });

  const nodeColor = isHovered
    ? new THREE.Color(color).offsetHSL(0, 0.1, 0.15)
    : new THREE.Color(color);

  return (
    <group position={position}>
      <mesh
        ref={meshRef}
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
        onPointerEnter={(e) => {
          e.stopPropagation();
          document.body.style.cursor = "pointer";
          onHover(true);
        }}
        onPointerLeave={() => {
          document.body.style.cursor = "default";
          onHover(false);
        }}
      >
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial
          color={nodeColor}
          roughness={0.75}
          metalness={0.05}
          emissive={nodeColor}
          emissiveIntensity={isHovered ? 0.35 : isCentral ? 0.2 : 0.08}
        />
      </mesh>


      <Html
        position={[0, size + 0.25, 0]}
        center
        style={{ pointerEvents: "none", userSelect: "none" }}
      >
        <div
          style={{
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
            whiteSpace: "pre-wrap",
          }}
        >
          {label}
          {sublabel && (
            <div
              style={{
                fontSize: "9px",
                opacity: 0.65,
                marginTop: "2px",
                fontStyle: "italic",
              }}
            >
              {sublabel}
            </div>
          )}
        </div>
      </Html>
    </group>
  );
}

// ── Organic thread connection ──────────────────────────────────────────────────
function ThreadEdge({
  start,
  end,
  color,
  opacity = 0.5,
}: {
  start: [number, number, number];
  end: [number, number, number];
  color: string;
  opacity?: number;
}) {
  const pulseRef = useRef<THREE.Mesh>(null);
  const progress = useRef(Math.random());
  const speed = useRef(0.12 + Math.random() * 0.08);

  const mid: [number, number, number] = [
    (start[0] + end[0]) / 2 + (Math.random() - 0.5) * 1.5,
    (start[1] + end[1]) / 2 + (Math.random() - 0.5) * 1.5,
    (start[2] + end[2]) / 2 + (Math.random() - 0.5) * 0.8,
  ];

  const curve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(...start),
    new THREE.Vector3(...mid),
    new THREE.Vector3(...end),
  ]);

  const points = curve.getPoints(60);
  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  const material = new THREE.LineBasicMaterial({ color, transparent: true, opacity });
  const lineObj = new THREE.Line(geometry, material);

  useFrame((_, delta) => {
    progress.current = (progress.current + delta * speed.current) % 1;
    if (pulseRef.current) {
      const pt = curve.getPoint(progress.current);
      pulseRef.current.position.set(pt.x, pt.y, pt.z);
    }
  });

  return (
    <group>
      <primitive object={lineObj} />
      <mesh ref={pulseRef}>
        <sphereGeometry args={[0.022, 8, 8]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={1.5}
          transparent
          opacity={0.85}
        />
      </mesh>
    </group>
  );
}

// ── Camera animator ────────────────────────────────────────────────────────────
// Fix: use useEffect so animation only triggers once when `target` changes,
// not on every render frame (which was locking OrbitControls permanently).
function CameraAnimator({
  target,
  controlsRef,
}: {
  target: THREE.Vector3 | null;
  controlsRef: React.RefObject<THREE.Object3D | null>;
}) {
  const { camera } = useThree();
  const animating = useRef(false);
  const targetCamPos = useRef(new THREE.Vector3());
  const targetLook = useRef(new THREE.Vector3());

  useEffect(() => {
    if (!target) return;
    // Position the camera 10 units away from the target node, along the same direction
    const dir = target.clone().normalize().multiplyScalar(10);
    targetCamPos.current.copy(dir);
    targetLook.current.copy(target);
    animating.current = true;
  }, [target]);

  useFrame(() => {
    if (!animating.current) return;
    const ctrl = controlsRef.current as unknown as {
      target: THREE.Vector3;
      update: () => void;
    } | null;

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
  });

  return null;
}

// ── Main scene component ───────────────────────────────────────────────────────
function Scene({
  locale,
  onNodeHover,
  hoveredId,
}: {
  locale: Locale;
  onNodeHover: (id: string | null, info: { title: string; description: string } | null) => void;
  hoveredId: string | null;
}) {
  const router = useRouter();
  const controlsRef = useRef(null);
  const [cameraTarget, setCameraTarget] = useState<THREE.Vector3 | null>(null);
  const [visibleSubs, setVisibleSubs] = useState<string | null>(null);

  const handleSectionClick = useCallback(
    (section: Section) => {
      setCameraTarget(new THREE.Vector3(...section.position));
      setVisibleSubs(section.id);
    },
    []
  );

  const handleSubClick = useCallback(
    (section: Section, sub: SubSection) => {
      router.push(`/${locale}/thesis/${section.slug[locale]}/${sub.slug[locale]}`);
    },
    [router, locale]
  );

  const handleCentralClick = useCallback(() => {
    router.push(`/${locale}/thesis/introduction`);
  }, [router, locale]);

  const centralPos: [number, number, number] = [0, 0, 0];

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.6} color="#F5EDD8" />
      <pointLight position={[8, 8, 8]} intensity={1.2} color="#E8C878" />
      <pointLight position={[-8, -4, 6]} intensity={0.7} color="#6FA882" />
      <pointLight position={[0, -8, -4]} intensity={0.5} color="#C4623A" />

      <CameraAnimator target={cameraTarget} controlsRef={controlsRef} />

      <OrbitControls
        ref={controlsRef}
        enableDamping
        dampingFactor={0.08}
        rotateSpeed={0.4}
        zoomSpeed={0.8}
        minDistance={4}
        maxDistance={22}
        enablePan={false}
      />

      {/* Central node */}
      <OrganicNode
        position={centralPos}
        color="#8B6914"
        size={0.5}
        label={THESIS.subtitle[locale]}
        sublabel={THESIS.author}
        onClick={handleCentralClick}
        isCentral
        isHovered={hoveredId === "central"}
        onHover={(v) =>
          onNodeHover(
            v ? "central" : null,
            v
              ? {
                  title: THESIS.subtitle[locale],
                  description: locale === "lt" ? "Spustelėkite, kad skaitytumėte įvadą" : "Click to read the introduction",
                }
              : null
          )
        }
      />

      {/* Section nodes + subsections */}
      {THESIS.sections.map((section) => {
        const showSubs = visibleSubs === section.id;

        return (
          <group key={section.id}>
            {/* Thread from center to section */}
            <ThreadEdge
              start={centralPos}
              end={section.position}
              color={section.color}
              opacity={0.45}
            />

            {/* Section node */}
            <OrganicNode
              position={section.position}
              color={section.color}
              size={0.32}
              label={section.title[locale]}
              sublabel={`${locale === "lt" ? "Skyrius" : "Section"} ${section.number}`}
              onClick={() => handleSectionClick(section)}
              isHovered={hoveredId === section.id}
              onHover={(v) =>
                onNodeHover(
                  v ? section.id : null,
                  v
                    ? {
                        title: section.title[locale],
                        description: section.description[locale],
                      }
                    : null
                )
              }
            />

            {/* Subsections (visible after clicking section) */}
            {showSubs &&
              section.subsections.map((sub, i) => (
                <group key={sub.id}>
                  <ThreadEdge
                    start={section.position}
                    end={sub.position}
                    color={section.color}
                    opacity={0.6}
                  />
                  <OrganicNode
                    position={sub.position}
                    color={section.color}
                    size={0.2}
                    label={sub.title[locale]}
                    sublabel={`${section.number}.${i + 1}`}
                    onClick={() => handleSubClick(section, sub)}
                    isHovered={hoveredId === sub.id}
                    onHover={(v) =>
                      onNodeHover(
                        v ? sub.id : null,
                        v
                          ? {
                              title: sub.title[locale],
                              description: sub.description[locale],
                            }
                          : null
                      )
                    }
                  />
                </group>
              ))}
          </group>
        );
      })}
    </>
  );
}

// ── Public export ──────────────────────────────────────────────────────────────
export default function RhizomeScene({ locale }: { locale: Locale }) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [hoveredInfo, setHoveredInfo] = useState<{
    title: string;
    description: string;
  } | null>(null);

  const handleNodeHover = useCallback(
    (id: string | null, info: { title: string; description: string } | null) => {
      setHoveredId(id);
      setHoveredInfo(info);
    },
    []
  );

  return (
    <div className="relative w-full h-full" style={{ touchAction: "none" }}>
      <Canvas
        camera={{ position: [0, 0, 14], fov: 55 }}
        onPointerMissed={() => {
          setHoveredId(null);
          setHoveredInfo(null);
        }}
        gl={{ antialias: true, alpha: false }}
        style={{ background: "#0D1F14", touchAction: "none" }}
        onCreated={({ gl }) => {
          // Ensure the actual WebGL canvas DOM element gets touch-action: none
          // (r3f's style prop targets the wrapper div, not the canvas itself)
          gl.domElement.style.touchAction = "none";
        }}
      >
        <fog attach="fog" args={["#0D1F14", 18, 40]} />
        <Scene
          locale={locale}
          onNodeHover={handleNodeHover}
          hoveredId={hoveredId}
        />
      </Canvas>

      {/* Hover tooltip */}
      {hoveredInfo && (
        <div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 pointer-events-none"
          style={{
            background: "rgba(13,31,20,0.88)",
            border: "1px solid rgba(212,168,67,0.35)",
            borderRadius: "2px",
            padding: "12px 20px",
            maxWidth: "320px",
            textAlign: "center",
            backdropFilter: "blur(8px)",
          }}
        >
          <div
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "15px",
              fontWeight: 500,
              color: "#F5EDD8",
              marginBottom: "4px",
            }}
          >
            {hoveredInfo.title}
          </div>
          <div
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "12px",
              fontStyle: "italic",
              color: "rgba(245,237,216,0.65)",
              lineHeight: 1.5,
            }}
          >
            {hoveredInfo.description}
          </div>
        </div>
      )}
    </div>
  );
}
