"use client";

import Spline from "@splinetool/react-spline";

const SCENE_URL =
  "https://prod.spline.design/BdxvRgDIPRoOnXE4/scene.splinecode";

export function SplineScene() {
  return (
    <Spline
      scene={SCENE_URL}
      style={{
        width: "100vw",
        height: "100vh",
        position: "absolute",
        top: 0,
        left: 0,
      }}
    />
  );
}
