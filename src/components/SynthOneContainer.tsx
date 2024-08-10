import * as Tone from "tone";
import { useAppSelector } from "../store/hooks";
import { SynthContext } from "../context/synthContext";
import { SynthChannelContext } from "@/context/SynthChannelContext";
import Controller from "./Controller";
import SynthVisualContainer from "./custom-ui/SynthVisualContainer";
import Channel from "./control-nodes/Channel";
import { ExtendedWaveformType } from "@/types";

export default function SynthOneContainer() {
  const envelope = useAppSelector(
    (state) => state.synthOneEnvelope,
    () => true,
  );
  const detune: number = useAppSelector(
    (state) => state.synthOneDetune.detune,
    () => true,
  );
  const waveform: ExtendedWaveformType = useAppSelector(
    (state) => state.synthOneWaveform.type,
    () => true,
  );

  const synth = new Tone.PolySynth(Tone.Synth, {
    oscillator: {
      type: waveform,
    },
    ...envelope,
    detune: detune,
  });
  const synthChannel = new Tone.Channel();

  return (
    <SynthChannelContext.Provider value={synthChannel}>
      <SynthContext.Provider value={synth}>
        <Controller synthId={1}>
          <SynthVisualContainer />
          <Channel />
        </Controller>
      </SynthContext.Provider>
    </SynthChannelContext.Provider>
  );
}
