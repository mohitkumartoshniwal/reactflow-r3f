import { FormEvent } from "react";
import { Fragment } from "react/jsx-runtime";
import { Handle, Position } from "reactflow";
import { MeshObject } from "../../types";
import { useGlobal } from "../../context/GlobalContext";

const ObjectNode = () => {
  const { setMeshObjects } = useGlobal();
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    const formData = new FormData(form);

    const position: MeshObject["position"] = {
      x: parseFloat(formData.get("positionX") as string) ?? 0,
      y: parseFloat(formData.get("positionY") as string) ?? 0,
      z: parseFloat(formData.get("positionZ") as string) ?? 0,
    };

    const meshObject: MeshObject = {
      color: formData.get("color") as string,
      id: Math.ceil(Math.random() * 10000),
      shape: formData.get("shape") as string,
      position,
    };

    setMeshObjects((objects) => [...objects, meshObject]);
  }
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="nodrag bg-white border border-pink-500 rounded-sm p-2 grid grid-cols-2 gap-y-2"
      >
        <label htmlFor="text" className="text-pink-500">
          Shape
        </label>
        <select
          id="text"
          name="shape"
          className=" text-gray-400 border rounded-sm"
        >
          <option value="Plane">Plane</option>
          <option value="Box">Box</option>
          <option value="Sphere">Sphere</option>
          <option value="Cone">Cone</option>
          <option value="Cylinder">Cylinder</option>
          <option value="Torus">Torus</option>
        </select>

        {["x", "y", "z"].map((axis) => (
          <Fragment key={axis}>
            <label
              className="text-pink-500"
              htmlFor={`position${axis.toUpperCase()}`}
            >
              Position {axis.toUpperCase()}
            </label>
            <input
              className="cursor-pointer"
              type="range"
              id={`position${axis.toUpperCase()}`}
              name={`position${axis.toUpperCase()}`}
              min="-10"
              max="10"
              defaultValue="0"
            />
          </Fragment>
        ))}

        <label htmlFor="color" className="text-pink-500">
          Color
        </label>
        <input
          name="color"
          defaultValue="#ff0000"
          type="color"
          id="color"
          className="w-6 h-6"
        />

        <button
          type="submit"
          className="col-span-2 w-fit mx-auto rounded-sm px-1 bg-pink-500 text-white"
        >
          ADD
        </button>
      </form>
      <Handle type="source" position={Position.Right} />
    </>
  );
};

export default ObjectNode;
