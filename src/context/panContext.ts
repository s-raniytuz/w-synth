import { Panner } from "tone";
import { createContext, useContext } from "react";

export const PanContext = createContext<Panner | undefined>(undefined);

export function usePanContext() {
  const pan = useContext(PanContext);

  if (pan === undefined) {
    throw new Error("Pan is undefined");
  }

  return pan;
}
