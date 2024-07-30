import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectGroup,
  SelectLabel,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { EnvelopeCurve } from "tone";
import { useSynthContext } from "@/context/synthContext";
import Knob from "@/components/custom-ui/knob/Knob";

export default function EnvelopeRelease() {
  const synth = useSynthContext();

  const [releaseState, setReleaseState] = useState<{
    release: number | string;
    releaseCurve: EnvelopeCurve;
  }>({
    release: synth.get().envelope.release.toString(),
    releaseCurve: synth.get().envelope.releaseCurve.toString() as EnvelopeCurve,
  });

  function handleReleaseChange(value: number) {
    synth.set({
      envelope: {
        release: value,
      },
    });
    setReleaseState((prev) => {
      return {
        ...prev,
        release: value,
      };
    });
  }

  function handleReleaseCurveChange(value: string) {
    synth.set({
      envelope: {
        releaseCurve: value as EnvelopeCurve,
      },
    });
    setReleaseState((prev) => {
      return {
        ...prev,
        releaseCurve: value as EnvelopeCurve,
      };
    });
  }

  return (
    <div className="envelope-attack flex h-full w-full flex-col items-center justify-between py-3">
      <p
        onDragStart={(e) => e.preventDefault()}
        className="text-centauri-black font-nohemi cursor-default select-none text-[0.8rem] font-medium opacity-85"
      >
        Release
      </p>

      <Knob
        min={0}
        max={5}
        initValue={releaseState.release}
        onChange={handleReleaseChange}
        className="bg-centauriBlack h-11 w-11"
      />

      <Select
        value={releaseState.releaseCurve.toString()}
        onValueChange={handleReleaseCurveChange}
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
