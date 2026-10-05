import { ImageResponse } from "next/og";
import { profile, site } from "@/lib/profile";

export const alt = site.title;
export const size = { width: 1200, height: 630 };
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
          justifyContent: "space-between",
          background: "#f4f1ea",
          color: "#1c1915",
          padding: "72px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: "#6e685f",
          }}
        >
          {profile.location}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 84, lineHeight: 1 }}>
            {profile.name}
          </div>
          <div style={{ display: "flex", marginTop: 24, fontSize: 36 }}>
            {profile.role}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 12,
              fontSize: 24,
              color: "#6e685f",
            }}
          >
            {profile.focus}
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "#6e685f" }}>
          React · Next.js · React Native · Node.js
        </div>
      </div>
    ),
    { ...size },
  );
}
