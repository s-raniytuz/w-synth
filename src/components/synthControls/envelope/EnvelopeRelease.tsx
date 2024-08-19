import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectGroup,
  SelectLabel,
  SelectValue,
} from "@/components/ui/select";
import { EnvelopeCurve } from "tone";
import { useSynthContext } from "@/context/synthContext";
import Knob from "@/components/custom-ui/knob/Knob";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { synthOneEnvelopeActions } from "@/store";
import {
  RELEASE_CURVE_DEFAULT,
  RELEASE_DEFAULT,
} from "@/localStorage/localStorageDefaults";
import useMountEffect from "@/hooks/useMountEffect";

export default function EnvelopeRelease() {
  const dispatch = useAppDispatch();
  const release = useAppSelector((state) => state.synthOneEnvelope.release);
  const releaseCurve = useAppSelector(
    (state) => state.synthOneEnvelope.releaseCurve,
  );
  const synth = useSynthContext();

  useMountEffect(() => {
    synth.set({
      envelope: {
        release: release,
        releaseCurve: releaseCurve,
      },
    });
  });

  function handleReleaseChange(value: number) {
    synth.set({
      envelope: {
        release: value,
      },
    });
    dispatch(synthOneEnvelopeActions.setRelease(value));
    if (value !== RELEASE_DEFAULT) {
      localStorage.setItem("synthOneRelease", value.toString());
    } else {
      localStorage.removeItem("synthOneRelease");
    }
  }

  function handleReleaseCurveChange(value: string) {
    synth.set({
      envelope: {
        releaseCurve: value as EnvelopeCurve,
      },
    });
    dispatch(synthOneEnvelopeActions.setReleaseCurve(value as EnvelopeCurve));
    if (value !== RELEASE_CURVE_DEFAULT) {
      localStorage.setItem("synthOneReleaseCurve", value);
    } else {
      localStorage.removeItem("synthOneReleaseCurve");
    }
  }

  return (
    <div className="envelope-attack flex h-full w-full flex-col items-center justify-between py-3">
      <p
        onDragStart={(e) => e.preventDefault()}
        className="cursor-default select-none font-nohemi text-[0.8rem] font-medium text-centauri-black opacity-85"
      >
        Release
      </p>

      <Knob
        min={0}
        max={5}
        initValue={release}
        defaultValue={RELEASE_DEFAULT}
        onChange={handleReleaseChange}
        className="bg-centauriBlack h-11 w-11"
      />

      <Select
        value={releaseCurve.toString()}
        onValueChange={handleReleaseCurveChange}
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
            <SelectLabel>Release Curve</SelectLabel>
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
