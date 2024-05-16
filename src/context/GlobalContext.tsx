import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { MeshObject } from "../types";

type IGlobal = {
  meshObjects: MeshObject[];
  setMeshObjects: Dispatch<SetStateAction<MeshObject[]>>;
};

const initialValues: IGlobal = {
  meshObjects: [],
  setMeshObjects: () => {},
};

const GlobalContext = createContext(initialValues);

export const GlobalProvider = ({ children }: PropsWithChildren) => {
  const [meshObjects, setMeshObjects] = useState<MeshObject[]>([]);

  return (
    <GlobalContext.Provider value={{ meshObjects, setMeshObjects }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => {
  return useContext(GlobalContext);
};
