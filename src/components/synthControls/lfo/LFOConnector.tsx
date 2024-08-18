import { useLFOContext } from "@/context/LFOContext";
import { useSynthChannelContext } from "@/context/SynthChannelContext";
import { useSynthContext } from "@/context/synthContext";
import resetConnectedValues from "@/functions/resetConnectedValues";
import useDefineConnectionNode from "@/hooks/useDefineConnectionNode";
import { InputNode } from "tone";

export default function LFOConnector() {
  const lfo = useLFOContext();
  const synth = useSynthContext();
  const channel = useSynthChannelContext();
  let connectedNode: InputNode | undefined = undefined;
  const node = useDefineConnectionNode();

  function handleLFORestart() {
    lfo.stop();
    lfo.disconnect();

    resetConnectedValues(synth, channel);

    if (node) {
      lfo.dynamicConnect(node);
      connectedNode = node;
    }

    lfo.start();
  }

  if (connectedNode === undefined || node !== connectedNode) {
    handleLFORestart();
  }

  return <></>;
}
