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
import { ChangeEvent, useState } from "react";

type DecayType = "linear" | "exponential";

export default function EnvelopeDecay() {
  const synth = useSynthContext();

  const [decayState, setDecayState] = useState<{
    decay: string;
    decayCurve: DecayType;
  }>({
    decay: synth.get().envelope.decay.toString(),
    decayCurve: synth.get().envelope.decayCurve.toString() as DecayType,
  });

  function handleDecayChange(e: ChangeEvent) {
    synth.set({
      envelope: {
        decay: (e.target as HTMLInputElement).value,
      },
    });
    setDecayState((prev) => {
      return {
        ...prev,
        decay: (e.target as HTMLInputElement).value,
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
    <div className="envelope-decay">
      <p>Decay: {decayState.decay}</p>
      <input
        type="range"
        name="decay"
        min={0}
        max={10}
        step={0.01}
        value={decayState.decay}
        onChange={handleDecayChange}
      />

      <Select
        value={decayState.decayCurve}
        onValueChange={handleDecayCurveChange}
      >
        <SelectTrigger className="w-[90px] text-[12px]">
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
