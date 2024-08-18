import { store } from "@/store";
import { Channel, PolySynth } from "tone";

export default function resetConnectedValues(
  synth: PolySynth,
  channel: Channel,
) {
  const state = store.getState();
  synth.volume.value = state.synthOneVolume.volume;
  channel.set({
    pan: state.synthOnePan.pan,
  });
}
