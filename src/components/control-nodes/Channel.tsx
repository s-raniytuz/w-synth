import { useSynthChannelContext } from "@/context/SynthChannelContext";
import { useSynthContext } from "@/context/synthContext";
import Gain from "../effects/Gain";

export default function Channel() {
  const synth = useSynthContext();
  const channel = useSynthChannelContext();

  synth.connect(channel);

  return (
    <>
      <Gain prevAudioNode={channel} />
    </>
  );
}
