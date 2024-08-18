import { useSynthChannelContext } from "@/context/SynthChannelContext";
import { useSynthContext } from "@/context/synthContext";
import { useAppSelector } from "@/store/hooks";
import { InputNode } from "tone";

export default function useDefineConnectionNode(): InputNode | undefined {
  const synth = useSynthContext();
  const channel = useSynthChannelContext();
  const link = useAppSelector((state) => state.synthOneLFOLinkSwitch.link);

  if (link === "volume") {
    return synth.volume;
  } else if (link === "pan") {
    return channel.pan;
  }
}
