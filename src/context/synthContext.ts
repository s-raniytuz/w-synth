import { createContext, useContext } from "react";
import { PolySynth } from "tone";

export const SynthContext = createContext<PolySynth | undefined>(undefined);

export function useSynthContext() {
  const synth = useContext(SynthContext);

  if (synth === undefined) {
    throw new Error("synth is undefined");
  }

  return synth;
}
