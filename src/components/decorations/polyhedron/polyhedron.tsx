import { cn } from "@/lib/utils";

import styles from "./polyhedron.module.css";

type Triangle = "triangle" | "triangleAlt";

type Face = {
  pair: string | undefined;
  front: Triangle[];
  back: Triangle[];
};

const EDGES_PER_PLANE = 4;

const FACES: Face[] = [
  {
    pair: styles.pair1,
    front: ["triangle", "triangleAlt"],
    back: ["triangleAlt"],
  },
  {
    pair: styles.pair2,
    front: ["triangle", "triangleAlt"],
    back: ["triangle"],
  },
  {
    pair: styles.pair3,
    front: ["triangle"],
    back: ["triangle", "triangleAlt"],
  },
];

function Plane({
  side,
  triangles,
}: {
  side: string | undefined;
  triangles: Triangle[];
}) {
  return (
    <div className={cn(styles.plane, side)}>
      {triangles.map((triangle) => (
        <div key={triangle} className={styles[triangle]} />
      ))}
      {Array.from({ length: EDGES_PER_PLANE }, (_, index) => (
        <div key={index} className={styles.edge} />
      ))}
    </div>
  );
}

export function Polyhedron() {
  return (
    <div className={styles.container}>
      <div className={styles.scene}>
        <div className={styles.body}>
          {FACES.map((face, index) => (
            <div key={index} className={cn(styles.pair, face.pair)}>
              <Plane side={styles.front} triangles={face.front} />
              <Plane side={styles.back} triangles={face.back} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
