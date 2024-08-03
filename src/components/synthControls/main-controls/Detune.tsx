import PositionSlider from "@/components/custom-ui/slider/PositionSlider";
import { useSynthContext } from "@/context/synthContext";
import { useState } from "react";

export default function Detune() {
  const synth = useSynthContext();
  const [detuneState, setDetuneState] = useState<number>(synth.get().detune);

  function handleDetuneChange(value: number) {
    synth.set({
      detune: value,
    });
    setDetuneState(value);
  }

  return (
    <div className="detune flex w-full flex-col items-center gap-2">
      <p
        onDragStart={(e) => e.preventDefault()}
        className="cursor-default select-none font-nohemi text-[0.7rem] font-medium text-centauri-black opacity-85"
      >
        Detune
      </p>

      <PositionSlider
        className="w-[50%] rounded bg-centauri-black opacity-95"
        min={-100}
        max={100}
        initValue={detuneState}
        onChange={handleDetuneChange}
      />
    </div>
  );
}
