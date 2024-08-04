import Knob from "@/components/custom-ui/knob/Knob";
import { useLFOContext } from "@/context/LFOContext";
import { useState } from "react";
export default function LFOAmplitude() {
  const lfo = useLFOContext();
  const [amplitudeState, setAmplitudeState] = useState<number>(
    lfo.amplitude.value,
  );

  function handleAmplitudeChange(value: number) {
    lfo.amplitude.value = value;

    setAmplitudeState(value);
  }

  return (
    <div className="lfo-amplitude flex h-full flex-col items-center justify-between py-[0.4rem]">
      <p
        onDragStart={(e) => e.preventDefault()}
        className="cursor-default select-none font-nohemi text-[0.6rem] font-medium text-centauri-black opacity-85"
      >
        Amplitude
      </p>

      <Knob
        min={0}
        max={1}
        initValue={amplitudeState}
        onChange={handleAmplitudeChange}
        className="bg-centauriBlack h-[1.85rem] w-[1.85rem]"
      />
    </div>
  );
}
