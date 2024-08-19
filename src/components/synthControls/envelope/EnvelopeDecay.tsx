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
import Knob from "@/components/custom-ui/knob/Knob";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { synthOneEnvelopeActions } from "@/store";
import {
  DECAY_CURVE_DEFAULT,
  DECAY_DEFAULT,
} from "@/localStorage/localStorageDefaults";
import { DecayCurve } from "@/types";
import useMountEffect from "@/hooks/useMountEffect";

export default function EnvelopeDecay() {
  const dispatch = useAppDispatch();
  const decay = useAppSelector((state) => state.synthOneEnvelope.decay);
  const decayCurve = useAppSelector(
    (state) => state.synthOneEnvelope.decayCurve,
  );
  const synth = useSynthContext();

  useMountEffect(() => {
    synth.set({
      envelope: {
        decay: decay,
        decayCurve: decayCurve,
      },
    });
  });

  function handleDecayChange(value: number) {
    synth.set({
      envelope: {
        decay: value,
      },
    });
    dispatch(synthOneEnvelopeActions.setDecay(value));
    if (value !== DECAY_DEFAULT) {
      localStorage.setItem("synthOneDecay", value.toString());
    } else {
      localStorage.removeItem("synthOneDecay");
    }
  }

  function handleDecayCurveChange(value: string) {
    synth.set({
      envelope: {
        decayCurve: value as DecayCurve,
      },
    });
    dispatch(synthOneEnvelopeActions.setDecayCurve(value as DecayCurve));
    if (value !== DECAY_CURVE_DEFAULT) {
      localStorage.setItem("synthOneDecayCurve", value);
    } else {
      localStorage.removeItem("synthOneDecayCurve");
    }
  }

  return (
    <div className="envelope-decay flex h-full w-full flex-col items-center justify-between py-3">
      <p
        onDragStart={(e) => e.preventDefault()}
        className="cursor-default select-none font-nohemi text-[0.8rem] font-medium text-centauri-black opacity-85"
      >
        Decay
      </p>

      <Knob
        min={0}
        max={5}
        initValue={decay}
        defaultValue={DECAY_DEFAULT}
        onChange={handleDecayChange}
        className="bg-centauriBlack h-11 w-11"
      />

      <Select
        value={decayCurve.toString()}
        onValueChange={handleDecayCurveChange}
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
            <SelectLabel>Decay Curve</SelectLabel>
            <SelectItem value="linear">&zwnj;Linear</SelectItem>
            <SelectItem value="exponential">&zwnj;Exp</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
