import { useSynthContext } from "@/context/synthContext";
import { ChangeEvent, useState } from "react";

export default function EnvelopeSustain() {
  const synth = useSynthContext();

  const [sustainState, setSustainState] = useState<string>(
    synth.get().envelope.sustain.toString(),
  );

  function handleSustainChange(e: ChangeEvent) {}

  return (
    <div className="envelope-sustain">
      <input
        type="range"
        name="sustain"
        min={0}
        max={1}
        step={0.01}
        value={sustainState}
        onChange={(e) => handleSustainChange(e)}
      />
    </div>
  );
}
