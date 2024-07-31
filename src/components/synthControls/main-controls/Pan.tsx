import { useSynthChannelContext } from "@/context/SynthChannelContext";
import { useState } from "react";
import Knob from "@/components/custom-ui/knob/Knob";

export default function Pan() {
  const channel = useSynthChannelContext();
  const [panState, setPanState] = useState(channel.get().pan);

  function handlePanChange(value: number) {
    channel.set({
      pan: value,
    });
    setPanState(value);
  }

  return (
    <div className="pan flex w-full flex-col items-center gap-3">
      <p
        onDragStart={(e) => e.preventDefault()}
        className="cursor-default select-none font-nohemi text-[0.7rem] font-medium text-centauri-black opacity-85"
      >
        Pan
      </p>

      <Knob
        min={-1}
        max={1}
        initValue={panState}
        onChange={handlePanChange}
        className="bg-centauriBlack h-8 w-8"
      />
    </div>
  );
}
