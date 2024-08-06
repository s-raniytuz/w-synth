import * as Tone from "tone";
import { useAppSelector } from "../store/hooks";
import { SynthContext } from "../context/synthContext";
import { SynthChannelContext } from "@/context/SynthChannelContext";
import Controller from "./Controller";
import SynthVisualContainer from "./custom-ui/SynthVisualContainer";
import Channel from "./control-nodes/Channel";
import DefaultNodeInitializer from "./control-nodes/DefaultNodeInitializer";

export default function SynthOneContainer() {
  const synthOptions = useAppSelector((state) => state.synthOneOptions);
  // const volume = useAppSelector((state) => state.synthOneVolume.volume);

  const synth = new Tone.PolySynth(Tone.Synth, synthOptions);
  const synthChannel = new Tone.Channel();

  // synth.volume.value = Number(localStorage.getItem("synthOneVolume")) || 30;

  return (
    <SynthChannelContext.Provider value={synthChannel}>
      <SynthContext.Provider value={synth}>
        <DefaultNodeInitializer>
          <Controller synthId={1}>
            <SynthVisualContainer />
            <Channel />
          </Controller>
        </DefaultNodeInitializer>
      </SynthContext.Provider>
    </SynthChannelContext.Provider>
  );
}
