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
import { EnvelopeCurve } from "tone";

export default function EnvelopeAttack() {
  const synth = useSynthContext();

  const [attackState, setAttackState] = useState<{
    attack: string;
    attackCurve: EnvelopeCurve;
  }>({
    attack: synth.get().envelope.attack.toString(),
    attackCurve: synth.get().envelope.attackCurve.toString() as EnvelopeCurve,
  });

  function handleAttackChange(e: ChangeEvent) {
    synth.set({
      envelope: {
        attack: (e.target as HTMLInputElement).value,
      },
    });
    setAttackState((prev) => {
      return {
        ...prev,
        attack: (e.target as HTMLInputElement).value,
      };
    });
  }

  function handleAttackCurveChange(value: string) {
    synth.set({
      envelope: {
        attackCurve: value as EnvelopeCurve,
      },
    });
    setAttackState((prev) => {
      return {
        ...prev,
        attackCurve: value as EnvelopeCurve,
      };
    });
  }

  return (
    <div className="envelope-attack">
      <p>Attack: {attackState.attack}</p>
      <input
        type="range"
        name="attack"
        min={0}
        max={10}
        step={0.01}
        value={attackState.attack}
        onChange={handleAttackChange}
      />

      <Select
        value={attackState.attackCurve.toString()}
        onValueChange={handleAttackCurveChange}
      >
        <SelectTrigger className="w-[90px] text-[12px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Attack Curve</SelectLabel>
            <SelectItem value="linear">Linear</SelectItem>
            <SelectItem value="exponential">Exp</SelectItem>
            <SelectItem value="sine">Sine</SelectItem>
            <SelectItem value="cosine">Cosine</SelectItem>
            <SelectItem value="bounce">Bounce</SelectItem>
            <SelectItem value="ripple">Ripple</SelectItem>
            <SelectItem value="step">Step</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
