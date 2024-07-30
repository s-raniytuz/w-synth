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
import { EnvelopeCurve } from "tone";
import Knob from "@/components/custom-ui/knob/Knob";

export default function EnvelopeAttack() {
  const synth = useSynthContext();

  const [attackState, setAttackState] = useState<{
    attack: string | number;
    attackCurve: EnvelopeCurve;
  }>({
    attack: synth.get().envelope.attack.toString(),
    attackCurve: synth.get().envelope.attackCurve.toString() as EnvelopeCurve,
  });

  function handleAttackChange(value: number) {
    synth.set({
      envelope: {
        attack: value,
      },
    });
    setAttackState((prev) => {
      return {
        ...prev,
        attack: value,
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
    <div className="envelope-attack flex h-full w-full flex-col items-center justify-between py-3">
      <p
        onDragStart={(e) => e.preventDefault()}
        className="text-centauri-black font-nohemi cursor-default select-none text-[0.8rem] font-medium opacity-85"
      >
        Attack
      </p>

      <Knob
        min={0}
        max={5}
        initValue={attackState.attack}
        onChange={handleAttackChange}
        className="bg-centauriBlack h-11 w-11"
      />

      <Select
        value={attackState.attackCurve.toString()}
        onValueChange={handleAttackCurveChange}
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
            <SelectLabel>Attack Curve</SelectLabel>
            <SelectItem value="linear">&zwnj;Linear</SelectItem>
            <SelectItem value="exponential">&zwnj;Exp</SelectItem>
            <SelectItem value="sine">&zwnj;Sine</SelectItem>
            <SelectItem value="cosine">&zwnj;Cosine</SelectItem>
            <SelectItem value="bounce">&zwnj;Bounce</SelectItem>
            <SelectItem value="ripple">&zwnj;Ripple</SelectItem>
            <SelectItem value="step">&zwnj;Step</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
