import React, { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

export const Radius = () => {
  const [points, setPoints] = useState({
    topLeft: 20,
    topRight: 20,
    bottomRight: 20,
    bottomLeft: 20,
  });
  // Set fixed dimensions of 400px x 400px
  const dimensions = {
    width: 400,
    height: 400,
  };
  const [isDragging, setIsDragging] = useState<string | null>(null);
  const shapeRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Modified to allow values up to 200% for more extreme shapes
  const handlePointChange = (point: keyof typeof points, value: number) => {
    setPoints((prev) => ({
      ...prev,
      [point]: Math.max(0, Math.min(200, value)),
    }));
  };

  const shapeStyle = {
    width: `${dimensions.width}px`,
    height: `${dimensions.height}px`,
    background: "linear-gradient(45deg, #0dcaf0, #60a5fa, #ffffff)",
    borderRadius: `${points.topLeft}% ${points.topRight}% ${points.bottomRight}% ${points.bottomLeft}%`,
    position: "relative" as const,
  };

  // Handle mouse down on the shape
  const handleShapeMouseDown = (e: React.MouseEvent) => {
    if (!shapeRef.current) return;

    const shape = shapeRef.current.getBoundingClientRect();
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Calculate relative position within the shape
    const relX = mouseX - shape.left;
    const relY = mouseY - shape.top;

    // Determine which corner is closest
    const isTop = relY < shape.height / 2;
    const isLeft = relX < shape.width / 2;

    let corner: keyof typeof points;

    if (isTop && isLeft) {
      corner = "topLeft";
    } else if (isTop && !isLeft) {
      corner = "topRight";
    } else if (!isTop && !isLeft) {
      corner = "bottomRight";
    } else {
      corner = "bottomLeft";
    }

    setIsDragging(corner);

    // Remove the immediate radius update on click
    // Just set which corner is being dragged, actual updates will happen during mousemove

    e.preventDefault();
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !shapeRef.current) return;

    const shape = shapeRef.current.getBoundingClientRect();

    // Remove the check that prevents updates when mouse is outside the shape
    // This allows for more extreme radius values

    // Get the corner coordinates based on which corner is being dragged
    let cornerX: number, cornerY: number;

    switch (isDragging) {
      case "topLeft":
        cornerX = shape.left;
        cornerY = shape.top;
        break;
      case "topRight":
        cornerX = shape.right;
        cornerY = shape.top;
        break;
      case "bottomRight":
        cornerX = shape.right;
        cornerY = shape.bottom;
        break;
      case "bottomLeft":
        cornerX = shape.left;
        cornerY = shape.bottom;
        break;
      default:
        return;
    }

    // Calculate distance from mouse to corner
    const dx = e.clientX - cornerX;
    const dy = e.clientY - cornerY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    // Calculate max possible distance (diagonal of the shape)
    const maxDistance = Math.sqrt(
      shape.width * shape.width + shape.height * shape.height
    );

    // Modified to allow values up to 200% for more extreme shapes
    const radiusValue = Math.max(
      0,
      Math.min(200, (distance / maxDistance) * 300)
    );

    // Only update the specific corner being dragged
    handlePointChange(isDragging, radiusValue);
  };

  const handleMouseUp = () => {
    setIsDragging(null);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  const getBorderRadiusText = () => {
    return `${Math.round(points.topLeft)}% ${Math.round(
      points.topRight
    )}% ${Math.round(points.bottomRight)}% ${Math.round(points.bottomLeft)}%`;
  };

  const copyToClipboard = () => {
    const cssText = `border-radius: ${getBorderRadiusText()};`;
    navigator.clipboard.writeText(cssText);
    toast.success("Copied to clipboard!");
  };

  return (
    <div className="absolute -bottom-12 right-4 overflow-hidden min-h-screen flex flex-col items-center justify-center z-50 -mt-20">
      <div
        ref={containerRef}
        className="shape-container relative w-[500px] h-[500px] flex items-center justify-center"
      >
        <div className="relative">
          <div
            ref={shapeRef}
            className="shape cursor-pointer"
            style={shapeStyle}
            onMouseDown={handleShapeMouseDown}
          />

          {/* Dashed border around the shape */}
          <div
            className="absolute border border-dashed border-white pointer-events-none"
            style={{
              width: `${dimensions.width}px`,
              height: `${dimensions.height}px`,
              top: 0,
              left: 0,
            }}
          ></div>
        </div>
      </div>

      <div className="bg-black p-6 rounded-lg shadow-xl flex flex-col gap-4 w-[500px]">
        <div className="flex items-center justify-between">
          <div className="text-white flex items-center font-medium">
            border-radius:
          </div>
          <div className="flex-1 mx-4 bg-gray-700 px-4 py-2 rounded-md text-white font-mono">
            {Math.round(points.topLeft)}% {Math.round(points.topRight)}%{" "}
            {Math.round(points.bottomRight)}% {Math.round(points.bottomLeft)}%
          </div>
          <button
            onClick={copyToClipboard}
            className="bg-gradient-to-r from-cyan-400 to-blue-600 text-white px-6 py-2 rounded-md hover:from-cyan-500 hover:to-blue-700 transition-all duration-300 uppercase font-bold shadow-lg"
          >
            Copy
          </button>
        </div>

        {/* Improved styling for range sliders */}
        <div className="grid grid-cols-2 gap-6 mt-4">
          <div className="bg-gray-700/50 p-4 rounded-lg">
            <label className="text-white mb-2 font-medium flex justify-between">
              <span>Top Left</span>
              <span className="text-cyan-400">
                {Math.round(points.topLeft)}%
              </span>
            </label>
            <input
              title="Top Left"
              type="range"
              min="0"
              max="200"
              value={points.topLeft}
              onChange={(e) =>
                handlePointChange("topLeft", Number(e.target.value))
              }
              className="w-full appearance-none h-2 bg-gray-600 rounded-lg outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-r [&::-webkit-slider-thumb]:from-cyan-400 [&::-webkit-slider-thumb]:to-blue-500 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-lg"
            />
          </div>
          <div className="bg-gray-700/50 p-4 rounded-lg">
            <label className="text-white mb-2 font-medium flex justify-between">
              <span>Top Right</span>
              <span className="text-cyan-400">
                {Math.round(points.topRight)}%
              </span>
            </label>
            <input
              title="Top Right"
              type="range"
              min="0"
              max="200"
              value={points.topRight}
              onChange={(e) =>
                handlePointChange("topRight", Number(e.target.value))
              }
              className="w-full appearance-none h-2 bg-gray-600 rounded-lg outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-r [&::-webkit-slider-thumb]:from-cyan-400 [&::-webkit-slider-thumb]:to-blue-500 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-lg"
            />
          </div>
          <div className="bg-gray-700/50 p-4 rounded-lg">
            <label className="text-white block mb-2 font-medium flex justify-between">
              <span>Bottom Left</span>
              <span className="text-cyan-400">
                {Math.round(points.bottomLeft)}%
              </span>
            </label>
            <input
              title="Bottom Left"
              type="range"
              min="0"
              max="200"
              value={points.bottomLeft}
              onChange={(e) =>
                handlePointChange("bottomLeft", Number(e.target.value))
              }
              className="w-full appearance-none h-2 bg-gray-600 rounded-lg outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-r [&::-webkit-slider-thumb]:from-cyan-400 [&::-webkit-slider-thumb]:to-blue-500 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-lg"
            />
          </div>
          <div className="bg-gray-700/50 p-4 rounded-lg">
            <label className="text-white mb-2 font-medium flex justify-between">
              <span>Bottom Right</span>
              <span className="text-cyan-400">
                {Math.round(points.bottomRight)}%
              </span>
            </label>
            <input
              title="Bottom Right"
              type="range"
              min="0"
              max="200"
              value={points.bottomRight}
              onChange={(e) =>
                handlePointChange("bottomRight", Number(e.target.value))
              }
              className="w-full appearance-none h-2 bg-gray-600 rounded-lg outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-r [&::-webkit-slider-thumb]:from-cyan-400 [&::-webkit-slider-thumb]:to-blue-500 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
