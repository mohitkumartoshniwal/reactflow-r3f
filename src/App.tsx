import { useCallback } from "react";
import ReactFlow, {
  Background,
  BackgroundVariant,
  Connection,
  Controls,
  Edge,
  MiniMap,
  addEdge,
  useEdgesState,
  useNodesState,
} from "reactflow";

import "reactflow/dist/style.css";
import { initialEdges, initialNodes } from "./constants";
import ObjectNode from "./components/nodes/ObjectNode";
import CanvasNode from "./components/nodes/CanvasNode";
import { GlobalProvider } from "./context/GlobalContext";

const nodeTypes = {
  object: ObjectNode,
  canvas: CanvasNode,
};

export default function App() {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: Connection | Edge) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <GlobalProvider>
      <div className="w-screen h-screen">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          fitView
        >
          <Background variant={BackgroundVariant.Dots} />
          <MiniMap zoomable pannable />
          <Controls />
        </ReactFlow>
      </div>
    </GlobalProvider>
  );
}
