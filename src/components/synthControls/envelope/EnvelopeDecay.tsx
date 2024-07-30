import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectGroup,
  SelectLabel,
  SelectValue,
} from "@/components/ui/select";
import { useSynthContext } from "@/context/synthContext";
import { useState } from "react";
import Knob from "@/components/custom-ui/knob/Knob";

type DecayType = "linear" | "exponential";

export default function EnvelopeDecay() {
  const synth = useSynthContext();

  const [decayState, setDecayState] = useState<{
    decay: string | number;
    decayCurve: DecayType;
  }>({
    decay: synth.get().envelope.decay.toString(),
    decayCurve: synth.get().envelope.decayCurve.toString() as DecayType,
  });

  function handleDecayChange(value: number) {
    synth.set({
      envelope: {
        decay: value,
      },
    });
    setDecayState((prev) => {
      return {
        ...prev,
        decay: value,
      };
    });
  }

  function handleDecayCurveChange(value: string) {
    synth.set({
      envelope: {
        decayCurve: value as DecayType,
      },
    });
    setDecayState((prev) => {
      return {
        ...prev,
        decayCurve: value as DecayType,
      };
    });
  }

  return (
    <div className="envelope-decay flex h-full w-full flex-col items-center justify-between py-3">
      <p
        onDragStart={(e) => e.preventDefault()}
        className="text-centauri-black font-nohemi cursor-default select-none text-[0.8rem] font-medium opacity-85"
      >
        Decay
      </p>

      <Knob
        min={0}
        max={5}
        initValue={decayState.decay}
        onChange={handleDecayChange}
        className="bg-centauriBlack h-11 w-11"
      />

      <Select
        value={decayState.decayCurve.toString()}
        onValueChange={handleDecayCurveChange}
      >
        <SelectTrigger
          onDragStart={(e) => e.preventDefault()}
          className="bg-centauri-black flex h-6 w-[4rem] select-none items-center justify-center rounded text-xs opacity-85"
          showIcon={false}
        >
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Decay Curve</SelectLabel>
            <SelectItem value="linear">&zwnj;Linear</SelectItem>
            <SelectItem value="exponential">&zwnj;Exp</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
