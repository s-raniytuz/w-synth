import { LinkedNode } from "@/types";
import { useState } from "react";
import { useAppSelector } from "@/store/hooks";
import { useLFOContext } from "@/context/LFOContext";
import { useSynthContext } from "@/context/synthContext";
import { useSynthChannelContext } from "@/context/SynthChannelContext";
import LFOControls from "./LFOControls";
import { LinkedNodeContext } from "@/context/LFOContext";
import { LFO_LINK_DEFAULT } from "@/localStorage/localStorageDefaults";
import { evaluateLocalStorage } from "@/functions/evaluateLocalStorage";
import useMountEffect from "@/hooks/useMountEffect";

export default function LFOConnector({
  linkedNode,
}: {
  linkedNode: LinkedNode;
}) {
  const lfo = useLFOContext();
  const synth = useSynthContext();
  const channel = useSynthChannelContext();

  const volume = useAppSelector((state) => state.synthOneVolume.volume);
  const pan = useAppSelector((state) => state.synthOnePan.pan);

  const [linkedNodeState, setLinkedNodeState] = useState<LinkedNode>(
    evaluateLocalStorage("synthOneLfoLink", LFO_LINK_DEFAULT),
  );

  function resetAndUpdateLfo(value: LinkedNode) {
    synth.releaseAll();
    setLinkedNodeState(value);
    synth.volume.value = volume;
    channel.pan.value = pan;
  }

  lfo.stop();
  lfo.disconnect();

  if (linkedNodeState === "volume") {
    lfo.min = -10;
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
          setLinkedNode: resetAndUpdateLfo,
        }}
      >
        <div className="lfo-container flex h-full w-full flex-col items-center px-4 py-2">
          <div className="lfo-waveform-display flex h-[20%] w-full items-center justify-between rounded">
            <div className="-mt-1 h-4 w-4 rounded-[50%] bg-black"></div>
            <p className="cursor-default select-none font-nohemi text-[0.8rem] text-centauri-black">
              LFO
            </p>
            <div className="h-4 w-4 rounded-[50%]"></div>
          </div>
          <div className="lfo-waveform-display h-[40%] w-full rounded"></div>
          <LFOControls />
        </div>
      </LinkedNodeContext.Provider>
    </>
  );
}
