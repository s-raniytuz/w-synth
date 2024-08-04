import { useSynthContext } from "../../../context/synthContext";
import { useState } from "react";
import Knob from "../../custom-ui/knob/Knob";
import { useAppDispatch } from "@/store/hooks";
import { volumeActions } from "@/store";

export default function Volume() {
  const dispatch = useAppDispatch();

  const synth = useSynthContext();
  const [volumeState, setVolumeState] = useState<number>(synth.volume.value);

  function handleVolumeChange(value: number) {
    if (value === 0) {
      synth.volume.value = -100;
      dispatch(volumeActions.setVolumeState(-100));
    } else {
      synth.volume.value = value;
      dispatch(volumeActions.setVolumeState(value));
    }
    setVolumeState(value);
  }

  return (
    <div className="volume flex w-full flex-col items-center gap-3">
      <p
        onDragStart={(e) => e.preventDefault()}
        className="cursor-default select-none font-nohemi text-[0.7rem] font-medium text-centauri-black opacity-85"
      >
        Volume
      </p>

      <Knob
        min={0}
        max={35}
        initValue={volumeState}
        onChange={handleVolumeChange}
        className="bg-centauriBlack h-8 w-8"
      />
    </div>
  );
}
