"use client";

import { PortableText } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/lib/sanity";
import type { Locale } from "@/lib/thesis-data";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function SanityFig({ value, locale }: { value: any; locale: Locale }) {
  const { captionLT, captionEN, align = "right", figWidth = 280 } = value;
  const caption = locale === "lt" ? captionLT : captionEN;
  const isCenter = align === "center";
  const imgUrl = urlFor(value).width(isCenter ? 480 : figWidth * 2).url();

  return (
    <figure
      style={{
        float: isCenter ? "none" : align,
        clear: isCenter ? "both" : "none",
        margin: isCenter
          ? "2.5rem auto"
          : align === "right"
          ? "0.5rem 0 1.5rem 2rem"
          : "0.5rem 2rem 1.5rem 0",
        width: isCenter ? "min(100%, 480px)" : `${figWidth}px`,
        display: "block",
      }}
    >
      <div
        style={{
          background: "var(--color-parchment-dark)",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Image
          src={imgUrl}
          alt={caption ?? ""}
          width={isCenter ? 480 : figWidth}
          height={isCenter ? 360 : Math.round(figWidth * 1.35)}
          style={{ objectFit: "contain", width: "100%", height: "auto", display: "block" }}
          sizes={isCenter ? "(max-width: 760px) 100vw, 480px" : `${figWidth}px`}
        />
      </div>
      {caption && (
        <figcaption
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "12px",
            fontStyle: "italic",
            color: "var(--color-ink-light)",
            marginTop: "0.6rem",
            lineHeight: 1.5,
            opacity: 0.75,
            textAlign: isCenter ? "center" : "left",
          }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

const pStyle: React.CSSProperties = {
  fontFamily: "'Cormorant Garamond', Georgia, serif",
  fontSize: "clamp(1rem, 1.6vw, 1.15rem)",
  lineHeight: 1.85,
  color: "var(--color-ink)",
  marginBottom: "1.4rem",
};

const blockquoteStyle: React.CSSProperties = {
  borderLeft: "2px solid var(--color-moss)",
  paddingLeft: "1.25rem",
  margin: "2rem 0",
  fontFamily: "'Cormorant Garamond', Georgia, serif",
  fontSize: "clamp(1rem, 1.6vw, 1.15rem)",
  lineHeight: 1.85,
  color: "var(--color-ink)",
  fontStyle: "italic",
};

const poemStyle: React.CSSProperties = {
  borderLeft: "none",
  paddingLeft: 0,
  margin: "2rem 0",
  fontFamily: "'Cormorant Garamond', Georgia, serif",
  fontSize: "clamp(1rem, 1.6vw, 1.15rem)",
  lineHeight: 1.85,
  color: "var(--color-moss)",
  fontStyle: "italic",
};

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body: any[];
  locale: Locale;
}

export default function PortableTextRenderer({ body, locale }: Props) {
  return (
    <PortableText
      value={body}
      components={{
        types: {
          image: ({ value }) => <SanityFig value={value} locale={locale} />,
        },
        block: {
          normal: ({ children }) => <p style={pStyle}>{children}</p>,
          blockquote: ({ children }) => <blockquote style={blockquoteStyle}>{children}</blockquote>,
          poem: ({ children }) => <blockquote style={poemStyle}>{children}</blockquote>,
        },
        marks: {
          strong: ({ children }) => <strong>{children}</strong>,
          em: ({ children }) => <em>{children}</em>,
        },
      }}
    />
  );
}
