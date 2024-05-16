import { Edge, Node } from "reactflow";

export const initialNodes: Node[] = [
  { id: "object", position: { x: 0, y: 0 }, data: {}, type: "object" },
  { id: "canvas", position: { x: 500, y: -100 }, data: {}, type: "canvas" },
];
export const initialEdges: Edge[] = [
  { id: "e1-2", source: "object", target: "canvas", animated: true },
];
