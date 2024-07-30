import { useSynthContext } from "@/context/synthContext";
import { useState } from "react";
import Knob from "@/components/custom-ui/knob/Knob";

export default function EnvelopeSustain() {
  const synth = useSynthContext();

  const [sustainState, setSustainState] = useState<string | number>(
    synth.get().envelope.sustain.toString(),
  );

  function handleSustainChange(value: number) {
    synth.set({
      envelope: {
        sustain: value,
      },
    });
    setSustainState(value);
  }

  return (
    <div className="envelope-release flex h-[6.295rem] w-full flex-col items-center justify-between py-3">
      <p
        onDragStart={(e) => e.preventDefault()}
        className="text-centauri-black font-nohemi cursor-default select-none text-[0.8rem] font-medium opacity-85"
      >
        Sustain
      </p>

      <Knob
        min={0}
        max={1}
        initValue={sustainState}
        onChange={handleSustainChange}
        className="bg-centauriBlack h-11 w-11"
      />
    </div>
  );
}
