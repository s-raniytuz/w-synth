import { createContext, useContext } from "react";
import { PitchShift } from "tone";

export const PitchShifterContext = createContext<PitchShift | undefined>(
  undefined,
);

export function usePitchShifterContext() {
  const pitchShifter = useContext(PitchShifterContext);

  if (pitchShifter === undefined) {
    throw new Error("Pitch Shifter is undefined");
  }

  return pitchShifter;
}
