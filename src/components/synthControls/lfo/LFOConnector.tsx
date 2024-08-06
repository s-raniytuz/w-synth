import { LinkedNode } from "@/types";
import { useState } from "react";
import { useAppSelector } from "@/store/hooks";
import { useLFOContext } from "@/context/LFOContext";
import { useSynthContext } from "@/context/synthContext";
import { useSynthChannelContext } from "@/context/SynthChannelContext";
import LFOControls from "./LFOControls";
import { LinkedNodeContext } from "@/context/LFOContext";

export default function LFOConnector({
  linkedNode,
}: {
  linkedNode: LinkedNode;
}) {
  const lfo = useLFOContext();
  const synth = useSynthContext();
  const channel = useSynthChannelContext();

  const volume = useAppSelector((state) => state.synthOneVolume.volume);

  const [linkedNodeState, setLinkedNodeState] =
    useState<LinkedNode>(linkedNode);

  lfo.stop();
  lfo.disconnect();

  if (linkedNodeState === "volume") {
    lfo.min = -1000;
    lfo.max = volume;

    lfo.connect(synth.volume);
  } else if (linkedNodeState === "pan") {
    lfo.min = -1;
    lfo.max = 1;

    lfo.connect(channel.pan);
  }

  if (volume !== -100) {
    lfo.start();
  }

  return (
    <>
      <LinkedNodeContext.Provider
        value={{
          linkedNode: linkedNodeState,
          setLinkedNode: setLinkedNodeState,
        }}
      >
        <div className="lfo-container flex h-full w-full flex-col items-center px-2 py-2">
          <div className="lfo-waveform-display h-[60%] w-full rounded bg-centauri-black"></div>
          <LFOControls />
        </div>
      </LinkedNodeContext.Provider>
    </>
  );
}
