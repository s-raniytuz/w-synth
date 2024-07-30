import { useSynthContext } from "../../context/synthContext";
import { useState } from "react";
import Knob from "../custom-ui/knob/Knob";

export default function Volume() {
  const synth = useSynthContext();
  const [volumeState, setVolumeState] = useState<number>(synth.get().volume);

  function handleVolumeChange(value: number) {
    if (value === 0) {
      synth.set({
        volume: -1000,
      });
    } else {
      synth.set({
        volume: value,
      });
    }
    setVolumeState(value);
  }

  return (
    <div className="volume flex w-full flex-col items-center gap-3">
      <p
        onDragStart={(e) => e.preventDefault()}
        className="text-centauri-black font-nohemi cursor-default select-none text-[0.8rem] font-medium opacity-85"
      >
        Volume
      </p>
      {/* <input
        type="range"
        name="volume"
        min={0}
        max={35}
        value={synth.get().volume}
        onChange={handleVolumeChange}
      /> */}

      <Knob
        min={0}
        max={35}
        initValue={volumeState}
        onChange={handleVolumeChange}
        className="bg-centauriBlack h-11 w-11"
      />
    </div>
  );
}
