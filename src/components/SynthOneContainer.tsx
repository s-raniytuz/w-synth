import * as Tone from "tone";
import { useAppSelector } from "../store/hooks";
import { SynthContext } from "../context/synthContext";
import Controller from "./Controller";

export default function SynthOneContainer() {
  const synthOptions = useAppSelector((state) => state.synthOneOptions);

  const synth = new Tone.PolySynth(Tone.Synth, synthOptions);

  return (
    <div
      id="synth-one-container"
      className="flex min-h-[20.85rem] flex-1 rounded-xl bg-[#E2E7F3] bg-gradient-to-b from-[#E2E7F3] to-[#B7BFD2]"
    >
      <SynthContext.Provider value={synth}>
        <Controller synthId={1} />
      </SynthContext.Provider>
    </div>
  );
}
