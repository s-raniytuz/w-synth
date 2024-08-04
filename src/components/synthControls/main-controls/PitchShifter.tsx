import PositionSlider from "@/components/custom-ui/slider/PositionSlider";
import { useControllerContext } from "@/context/controllerContext";
import { useSynthContext } from "@/context/synthContext";
import { useState } from "react";

export default function PitchShifter() {
  const controller = useControllerContext();
  const synth = useSynthContext();
  const [pitchState, setPitchState] = useState<number>(
    controller.firstOctave - 4,
  );

  function handlePitchChange(value: number) {
    synth.releaseAll();
    controller.firstOctave = 4 + value;
    controller.secondOctave = 5 + value;
    setPitchState(value);
  }

  return (
    <div className="pitch-shift flex w-full flex-col items-center gap-2">
      <p
        onDragStart={(e) => e.preventDefault()}
        className="cursor-default select-none font-nohemi text-[0.7rem] font-medium text-centauri-black opacity-85"
      >
        Octave
      </p>

      <PositionSlider
        className="w-[50%] rounded bg-centauri-black opacity-95"
        min={-3}
        max={2}
        initValue={pitchState}
        onChange={handlePitchChange}
        speed={2}
      />
    </div>
  );
}
