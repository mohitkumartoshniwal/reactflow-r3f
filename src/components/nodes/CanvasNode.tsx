import { useRef } from "react";
import { useGlobal } from "../../context/GlobalContext";
import { Canvas } from "@react-three/fiber";
import {
  Box,
  Cone,
  Cylinder,
  Environment,
  OrbitControls,
  Plane,
  Sphere,
  Torus,
} from "@react-three/drei";
import { Handle, Position } from "reactflow";

const CanvasNode = () => {
  const { meshObjects } = useGlobal();
  const containerRef = useRef<HTMLDivElement | null>(null);

  console.log({ meshObjects });

  function renderObjects() {
    return (
      <>
        {meshObjects.map((meshObject) => {
          if (meshObject.shape === "Plane") {
            return (
              <Plane
                key={meshObject.id}
                position={[
                  meshObject.position.x,
                  meshObject.position.y,
                  meshObject.position.z,
                ]}
              >
                <meshStandardMaterial color={meshObject.color} />
              </Plane>
            );
          } else if (meshObject.shape === "Box") {
            return (
              <Box
                key={meshObject.id}
                position={[
                  meshObject.position.x,
                  meshObject.position.y,
                  meshObject.position.z,
                ]}
              >
                <meshStandardMaterial color={meshObject.color} />
              </Box>
            );
          } else if (meshObject.shape === "Sphere") {
            return (
              <Sphere
                key={meshObject.id}
                position={[
                  meshObject.position.x,
                  meshObject.position.y,
                  meshObject.position.z,
                ]}
              >
                <meshStandardMaterial color={meshObject.color} />
              </Sphere>
            );
          } else if (meshObject.shape === "Cone") {
            return (
              <Cone
                key={meshObject.id}
                position={[
                  meshObject.position.x,
                  meshObject.position.y,
                  meshObject.position.z,
                ]}
              >
                <meshStandardMaterial color={meshObject.color} />
              </Cone>
            );
          } else if (meshObject.shape === "Cylinder") {
            return (
              <Cylinder
                key={meshObject.id}
                position={[
                  meshObject.position.x,
                  meshObject.position.y,
                  meshObject.position.z,
                ]}
              >
                <meshStandardMaterial color={meshObject.color} />
              </Cylinder>
            );
          } else if (meshObject.shape === "Torus") {
            return (
              <Torus
                key={meshObject.id}
                position={[
                  meshObject.position.x,
                  meshObject.position.y,
                  meshObject.position.z,
                ]}
              >
                <meshStandardMaterial color={meshObject.color} />
              </Torus>
            );
          }
        })}
      </>
    );
  }

  function handleFullScreen() {
    if (!document.fullscreenElement) {
      const el = containerRef.current!;
      el.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }

  return (
    <div className="nodrag text-right">
      <button onClick={handleFullScreen}> &#x26F6;</button>
      <div
        ref={containerRef}
        className="w-96 h-96 bg-white rounded-sm border border-gray-200 "
      >
        <Canvas>
          <Environment preset="sunset" />
          {renderObjects()}
          <OrbitControls />
        </Canvas>
      </div>
      <Handle type="target" position={Position.Left} />
    </div>
  );
};

export default CanvasNode;
