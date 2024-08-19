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
import { EnvelopeCurve } from "tone";
import Knob from "@/components/custom-ui/knob/Knob";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { synthOneEnvelopeActions } from "@/store";
import {
  ATTACK_CURVE_DEFAULT,
  ATTACK_DEFAULT,
} from "@/localStorage/localStorageDefaults";
import useMountEffect from "@/hooks/useMountEffect";

export default function EnvelopeAttack() {
  const dispatch = useAppDispatch();
  const attack = useAppSelector((state) => state.synthOneEnvelope.attack);
  const attackCurve = useAppSelector(
    (state) => state.synthOneEnvelope.attackCurve,
  );
  const synth = useSynthContext();

  useMountEffect(() => {
    synth.set({
      envelope: {
        attack: attack,
        attackCurve: attackCurve,
      },
    });
  });

  function handleAttackChange(value: number) {
    synth.set({
      envelope: {
        attack: value,
      },
    });
    dispatch(synthOneEnvelopeActions.setAttack(value));
    if (value !== ATTACK_DEFAULT) {
      localStorage.setItem("synthOneAttack", JSON.stringify(value));
    } else {
      localStorage.removeItem("synthOneAttack");
    }
  }

  function handleAttackCurveChange(value: string) {
    synth.set({
      envelope: {
        attackCurve: value as EnvelopeCurve,
      },
    });
    dispatch(synthOneEnvelopeActions.setAttackCurve(value as EnvelopeCurve));
    if (value !== ATTACK_CURVE_DEFAULT) {
      localStorage.setItem("synthOneAttackCurve", value);
    } else {
      localStorage.removeItem("synthOneAttackCurve");
    }
  }

  return (
    <div className="envelope-attack flex h-full w-full flex-col items-center justify-between py-3">
      <p
        onDragStart={(e) => e.preventDefault()}
        className="cursor-default select-none font-nohemi text-[0.8rem] font-medium text-centauri-black opacity-85"
      >
        Attack
      </p>

      <Knob
        min={0}
        max={10}
        initValue={attack}
        onChange={handleAttackChange}
        defaultValue={ATTACK_DEFAULT}
        className="bg-centauriBlack h-11 w-11"
      />

      <Select
        value={attackCurve.toString()}
        onValueChange={handleAttackCurveChange}
      >
        <SelectTrigger
          onDragStart={(e) => e.preventDefault()}
          className="flex h-6 w-[4rem] select-none items-center justify-center rounded bg-centauri-black text-xs opacity-85"
          showIcon={false}
        >
          <SelectValue />
        </SelectTrigger>
        <SelectContent className="rounded">
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
