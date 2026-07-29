import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "56px",
          background:
            "linear-gradient(120deg, rgba(37,99,235,1) 0%, rgba(20,184,166,1) 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 32, opacity: 0.95 }}>novanest</div>
        <div style={{ fontSize: 70, fontWeight: 700, marginTop: 20, lineHeight: 1.1 }}>
          Digital Solutions Agency
        </div>
        <div style={{ fontSize: 30, marginTop: 18, opacity: 0.9, maxWidth: "90%" }}>
          {siteConfig.description}
        </div>
      </div>
    ),
    size,
  );
}

