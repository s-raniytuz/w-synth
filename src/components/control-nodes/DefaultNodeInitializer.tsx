import { ReactNode } from "react";
import { PitchShift } from "tone";
import { PitchShifterContext } from "@/context/defaultNode";

export default function DefaultNodeInitializer({
  children,
}: {
  children: ReactNode;
}) {
  const pitchShifter = new PitchShift();
  return (
    <PitchShifterContext.Provider value={pitchShifter}>
      {children}
    </PitchShifterContext.Provider>
  );
}
