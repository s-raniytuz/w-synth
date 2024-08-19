import { useLFOContext } from "@/context/LFOContext";
import { useSynthChannelContext } from "@/context/SynthChannelContext";
import { useSynthContext } from "@/context/synthContext";
import resetConnectedValues from "@/functions/resetConnectedValues";
import useDefineConnectionNode from "@/hooks/useDefineConnectionNode";
import { useAppSelector } from "@/store/hooks";
import { useRef } from "react";
import { InputNode } from "tone";

export default function LFOConnector() {
  const lfo = useLFOContext();
  const synth = useSynthContext();
  const channel = useSynthChannelContext();
  const connectedNode = useRef<InputNode | undefined>(undefined);
  const node = useDefineConnectionNode();
  const isEnabled = useAppSelector(
    (state) => state.synthOneLFOLinkSwitch.isEnabled,
  );

  function handleLFORestart() {
    if (connectedNode.current) {
      lfo.stop();
      lfo.disconnect();
    }

    resetConnectedValues(synth, channel);

    if (node) {
      lfo.dynamicConnect(node);
      connectedNode.current = node;
    }

    if (isEnabled) {
      lfo.start();
    }
  }

  if (connectedNode === undefined || node !== connectedNode.current) {
    handleLFORestart();
  } else {
    isEnabled ? lfo.start() : lfo.stop();
  }

  return <></>;
}
