"use client";

import { NextStudio } from "next-sanity/studio";
import config from "@/sanity/sanity.config";

export const dynamic = "force-dynamic";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const isConfigured = projectId && projectId !== "YOUR_PROJECT_ID";

export default function StudioPage() {
  if (!isConfigured) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "#F5EDD8",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
          fontFamily: "'Cormorant Garamond', Georgia, serif",
        }}
      >
        <div style={{ maxWidth: "560px", textAlign: "center" }}>
          <p
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: "11px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#C4623A",
              marginBottom: "1.5rem",
            }}
          >
            Sanity Studio — Setup Required
          </p>
          <h1
            style={{
              fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
              fontWeight: 400,
              color: "#1A1A18",
              marginBottom: "1.5rem",
              lineHeight: 1.3,
            }}
          >
            CMS not yet configured
          </h1>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "#3A3A36",
              marginBottom: "2rem",
            }}
          >
            To activate the content editor, create a free Sanity project and add your
            project ID to the environment file.
          </p>
          <ol
            style={{
              textAlign: "left",
              fontSize: "0.95rem",
              lineHeight: 2,
              color: "#3A3A36",
              paddingLeft: "1.5rem",
              marginBottom: "2rem",
            }}
          >
            <li>
              Go to{" "}
              <strong style={{ fontWeight: 500 }}>sanity.io</strong> → create a free
              account
            </li>
            <li>Create a project named "thesis-website"</li>
            <li>Copy the Project ID from the project dashboard</li>
            <li>
              Create a file called{" "}
              <code
                style={{
                  background: "#EAD9BB",
                  padding: "1px 6px",
                  fontSize: "0.9em",
                }}
              >
                .env.local
              </code>{" "}
              in the website root folder
            </li>
            <li>
              Add these two lines:
              <pre
                style={{
                  background: "#EAD9BB",
                  padding: "0.75rem 1rem",
                  marginTop: "0.5rem",
                  fontSize: "0.85rem",
                  overflowX: "auto",
                  lineHeight: 1.7,
                }}
              >
                {`NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here\nNEXT_PUBLIC_SANITY_DATASET=production`}
              </pre>
            </li>
            <li>Restart the development server</li>
          </ol>
          <p
            style={{
              fontSize: "0.9rem",
              fontStyle: "italic",
              color: "#6a6a5a",
            }}
          >
            Once configured, you will be able to edit all thesis text and images
            here without touching any code.
          </p>
        </div>
      </div>
    );
  }

  return <NextStudio config={config} />;
}
