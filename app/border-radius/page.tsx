"use client";

import { Geminid, Star } from "@/components/shapes";
import Spline from "@splinetool/react-spline";
import { Radius } from "./radius";

export default function BorderRadius() {
  return (
    <>
      <div className="w-screen h-screen overflow-hidden relative">
        <Spline
          scene="https://prod.spline.design/BdxvRgDIPRoOnXE4/scene.splinecode"
          style={{
            width: "100vw",
            height: "100vh",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />
        <Geminid />
        <Star />
        <Radius />
      </div>
    </>
  );
}
