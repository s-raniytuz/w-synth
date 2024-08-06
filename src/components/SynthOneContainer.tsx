import * as Tone from "tone";
import { useAppSelector } from "../store/hooks";
import { SynthContext } from "../context/synthContext";
import { SynthChannelContext } from "@/context/SynthChannelContext";
import Controller from "./Controller";
import SynthVisualContainer from "./custom-ui/SynthVisualContainer";
import Channel from "./control-nodes/Channel";

export default function SynthOneContainer() {
  const synthOptions = useAppSelector((state) => state.synthOneOptions);

  const synth = new Tone.PolySynth(Tone.Synth, synthOptions);
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
