import { ImageResponse } from "next/og";

export const socialCardAlt =
  "Compounds.cc — Research Reference Database with Retrieval-Grounded AI";
export const socialCardSize = {
  width: 1200,
  height: 630,
};
export const socialCardContentType = "image/png";

export function createSocialCardImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#0a0a0a",
          color: "#fafafa",
          fontFamily:
            'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#a3a3a3",
          }}
        >
          Evidence-forward reference library
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              fontSize: 84,
              fontWeight: 700,
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
            }}
          >
            Compounds.cc
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 36,
              lineHeight: 1.25,
              color: "#a3a3a3",
              maxWidth: 920,
            }}
          >
            One place to read the research.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: "0.08em",
            color: "#737373",
          }}
        >
          peptides · nootropics · supplements
        </div>
      </div>
    ),
    { ...socialCardSize },
  );
}
