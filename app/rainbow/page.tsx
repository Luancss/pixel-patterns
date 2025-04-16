"use client";

import { Geminid, Star } from "@/components/shapes";
import Spline from "@splinetool/react-spline";
import GradientPicker from "./components/gradient";

{
  /* <Spline
          scene="https://prod.spline.design/YWpICvuFnZHgZ7Cs/scene.splinecode"
          style={{
            width: "100vw",
            height: "100vh",
            position: "absolute",
            top: 0,
            left: 0,c
          }}
        /> */
}

export default function BorderRadius() {
  return (
    <>
      <div className="w-screen h-screen overflow-hidden relative">
        <GradientPicker />
        <Spline
          scene="https://prod.spline.design/k4AN-W1ScDAJ6s12/scene.splinecode"
          style={{
            width: "100vw",
            height: "100vh",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -1,
          }}
        />
        {/* <Geminid /> */}
        {/* <Star /> */}
      </div>
    </>
  );
}
