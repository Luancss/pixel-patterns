"use client";

import { useEffect, useRef } from "react";

type Point = { x: number; y: number };

const TENTACLE_COUNT = 500;
const SEGMENTS_PER_TENTACLE = 30;
const MIN_TENTACLE_LENGTH = 50;
const MAX_TENTACLE_LENGTH = 300;
const PATH_MARGIN = 10;
const PATH_SPEED = 0.01;
const TARGET_EASING = 10;
const POINTER_IDLE_TIMEOUT_MS = 1000;

function distance(from: Point, to: Point) {
  return Math.sqrt(Math.pow(to.x - from.x, 2) + Math.pow(to.y - from.y, 2));
}

class Segment {
  readonly position: Point;
  readonly nextPosition: Point;

  constructor(
    origin: Point,
    private readonly length: number,
    private angle: number
  ) {
    this.position = { x: origin.x, y: origin.y };
    this.nextPosition = {
      x: origin.x + length * Math.cos(angle),
      y: origin.y + length * Math.sin(angle),
    };
  }

  follow(target: Point) {
    this.angle = Math.atan2(
      target.y - this.position.y,
      target.x - this.position.x
    );
    this.position.x = target.x + this.length * Math.cos(this.angle - Math.PI);
    this.position.y = target.y + this.length * Math.sin(this.angle - Math.PI);
    this.updateNextPosition();
  }

  anchorAt(point: Point) {
    this.position.x = point.x;
    this.position.y = point.y;
    this.updateNextPosition();
  }

  private updateNextPosition() {
    this.nextPosition.x = this.position.x + this.length * Math.cos(this.angle);
    this.nextPosition.y = this.position.y + this.length * Math.sin(this.angle);
  }
}

class Tentacle {
  private readonly segments: Segment[] = [];
  private readonly seed = Math.random();

  constructor(
    private readonly origin: Point,
    private readonly length: number
  ) {
    const segmentLength = length / SEGMENTS_PER_TENTACLE;
    let segmentOrigin = origin;

    for (let index = 0; index < SEGMENTS_PER_TENTACLE; index++) {
      const segment = new Segment(segmentOrigin, segmentLength, 0);
      this.segments.push(segment);
      segmentOrigin = segment.nextPosition;
    }
  }

  move(lastTarget: Point, target: Point) {
    const angle = Math.atan2(
      target.y - this.origin.y,
      target.x - this.origin.x
    );
    const travel = distance(lastTarget, target) + 5;
    const reach = {
      x: target.x - 0.8 * travel * Math.cos(angle),
      y: target.y - 0.8 * travel * Math.sin(angle),
    };

    const tip = this.segments[this.segments.length - 1];
    tip?.follow(reach.x ? reach : target);

    for (let index = this.segments.length - 2; index >= 0; index--) {
      const next = this.segments[index + 1];
      if (next) this.segments[index]?.follow(next.position);
    }

    if (
      distance(this.origin, target) <=
      this.length + distance(lastTarget, target)
    ) {
      this.segments.forEach((segment, index) =>
        segment.anchorAt(this.segments[index - 1]?.nextPosition ?? this.origin)
      );
    }
  }

  drawBase(context: CanvasRenderingContext2D, target: Point) {
    const isInReach = distance(this.origin, target) <= this.length;

    context.beginPath();
    context.arc(
      this.origin.x,
      this.origin.y,
      isInReach ? 2 * this.seed + 1 : this.seed * 2,
      0,
      2 * Math.PI
    );
    context.fillStyle = isInReach ? "white" : "darkcyan";
    context.fill();
  }

  drawBody(context: CanvasRenderingContext2D, target: Point) {
    if (distance(this.origin, target) > this.length) return;

    context.globalCompositeOperation = "lighter";
    context.beginPath();
    context.lineTo(this.origin.x, this.origin.y);
    this.segments.forEach((segment) =>
      context.lineTo(segment.nextPosition.x, segment.nextPosition.y)
    );
    context.strokeStyle = `hsl(${this.seed * 60 + 180},100%,${this.seed * 60 + 25}%)`;
    context.lineWidth = this.seed * 2;
    context.lineCap = "round";
    context.lineJoin = "round";
    context.stroke();
    context.globalCompositeOperation = "source-over";
  }
}

export function ElectricMonster() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let pointer: Point | null = null;
    let pointerIdleTimeout: ReturnType<typeof setTimeout> | undefined;
    let pathProgress = 0;
    let animationFrame = 0;
    const target: Point = { x: 0, y: 0 };
    const lastTarget: Point = { x: 0, y: 0 };

    const tentacles = Array.from(
      { length: TENTACLE_COUNT },
      () =>
        new Tentacle(
          { x: Math.random() * width, y: Math.random() * height },
          Math.random() * (MAX_TENTACLE_LENGTH - MIN_TENTACLE_LENGTH) +
            MIN_TENTACLE_LENGTH
        )
    );

    const getPathPoint = (): Point => {
      const denominator = Math.pow(Math.sin(pathProgress), 2) + 1;
      const radius = (height / 2 - PATH_MARGIN) * Math.sqrt(2);

      return {
        x: width / 2 + (radius * Math.cos(pathProgress)) / denominator,
        y:
          height / 2 +
          (radius * Math.cos(pathProgress) * Math.sin(pathProgress)) /
            denominator,
      };
    };

    const draw = () => {
      const destination = pointer ?? getPathPoint();
      target.x += (destination.x - target.x) / TARGET_EASING;
      target.y += (destination.y - target.y) / TARGET_EASING;
      pathProgress += PATH_SPEED;

      context.beginPath();
      context.arc(
        target.x,
        target.y,
        distance(lastTarget, target) + 5,
        0,
        2 * Math.PI
      );
      context.fillStyle = "hsl(210,100%,80%)";
      context.fill();

      tentacles.forEach((tentacle) => {
        tentacle.move(lastTarget, target);
        tentacle.drawBase(context, target);
      });
      tentacles.forEach((tentacle) => tentacle.drawBody(context, target));

      lastTarget.x = target.x;
      lastTarget.y = target.y;
    };

    const loop = () => {
      animationFrame = window.requestAnimationFrame(loop);
      context.clearRect(0, 0, width, height);
      draw();
    };

    const clearPointer = () => {
      pointer = null;
      clearTimeout(pointerIdleTimeout);
    };

    const handleMouseMove = (event: MouseEvent) => {
      pointer = {
        x: event.pageX - canvas.offsetLeft,
        y: event.pageY - canvas.offsetTop,
      };
      clearTimeout(pointerIdleTimeout);
      pointerIdleTimeout = setTimeout(clearPointer, POINTER_IDLE_TIMEOUT_MS);
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", clearPointer);
    window.addEventListener("resize", handleResize);
    loop();

    return () => {
      window.cancelAnimationFrame(animationFrame);
      clearPointer();
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", clearPointer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-50 bg-black"
    />
  );
}
