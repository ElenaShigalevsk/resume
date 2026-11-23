import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Generated once at build time (no dynamic data), served as a static asset.
export default function OG() {
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
          background: "radial-gradient(circle at 85% 20%, #ff6b8b 0%, rgba(255,107,139,0) 45%), radial-gradient(circle at 70% 60%, #ffb36b 0%, rgba(255,179,107,0) 40%), #0e0d0c",
          color: "#efe9df",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 6, textTransform: "uppercase", color: "#9b948a" }}>Portfolio · 7+ years</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 96, fontWeight: 700, letterSpacing: -4, lineHeight: 1 }}>{profile.name}</div>
          <div style={{ fontSize: 48, marginTop: 20, color: "#ff6b8b" }}>{profile.role}</div>
        </div>
        <div style={{ fontSize: 28, color: "#9b948a" }}>WordPress · WooCommerce · Next.js · Webflow · Shopify</div>
      </div>
    ),
    size,
  );
}
