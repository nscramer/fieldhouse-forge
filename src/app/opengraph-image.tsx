import { ImageResponse } from "next/og";
export const alt = "Fieldhouse Forge — fictional athletic equipment company";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 72,
        background: "#17252d",
        color: "#fff9ec",
        fontFamily: "serif",
      }}
    >
      <div
        style={{
          fontSize: 24,
          textTransform: "uppercase",
          letterSpacing: 4,
          color: "#c28a2c",
        }}
      >
        Hickory, Indiana
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 108,
          lineHeight: 0.9,
        }}
      >
        <span>Fieldhouse</span>
        <span>Forge</span>
      </div>
      <div style={{ fontSize: 28, fontFamily: "sans-serif" }}>
        Built where teams are made · Fictional demonstration company
      </div>
    </div>,
    size,
  );
}
