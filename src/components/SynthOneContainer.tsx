import * as Tone from "tone";
import { useAppSelector } from "../store/hooks";
import { SynthContext } from "../context/synthContext";
import Controller from "./Controller";

export default function SynthOneContainer() {
  const synthOptions = useAppSelector((state) => state.synthOneOptions);

  const synth = new Tone.PolySynth(Tone.Synth, synthOptions);

  return (
    <>
      <SynthContext.Provider value={synth}>
        <Controller synthId={1} />
      </SynthContext.Provider>
    </>
  );
}
