import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectGroup,
  SelectValue,
} from "@/components/ui/select";
import { useLFOContext } from "@/context/LFOContext";
import useMountEffect from "@/hooks/useMountEffect";
import { LFO_WAVEFORM_DEFAULT } from "@/localStorage/localStorageDefaults";
import { BaseWaveformType } from "@/types";
import { useState } from "react";

export default function LFOWaveform() {
  const lfo = useLFOContext();
  const [LFOWaveformState, setLFOWaveformState] = useState<BaseWaveformType>(
    (localStorage.getItem("synthOneLfoWaveform") as BaseWaveformType) ||
      LFO_WAVEFORM_DEFAULT,
  );

  useMountEffect(() => {
    lfo.set({
      type:
        (localStorage.getItem("synthOneLfoWaveform") as BaseWaveformType) ||
        LFO_WAVEFORM_DEFAULT,
    });
  });

  function handleWaveformChange(value: string) {
    lfo.set({
      type: value as BaseWaveformType,
    });
    setLFOWaveformState(value as BaseWaveformType);
    if (value !== LFO_WAVEFORM_DEFAULT) {
      localStorage.setItem("synthOneLfoWaveform", value);
    } else {
      localStorage.removeItem("synthOneLfoWaveform");
    }
  }
  return (
    <div className="lfo-waveform flex h-full flex-col items-center justify-between py-[0.4rem]">
      <p
        onDragStart={(e) => e.preventDefault()}
        className="cursor-default select-none font-nohemi text-[0.6rem] font-medium text-centauri-black opacity-85"
      >
        Waveform
      </p>
      <Select value={LFOWaveformState} onValueChange={handleWaveformChange}>
        <SelectTrigger
          onDragStart={(e) => e.preventDefault()}
          className="flex h-8 w-[5rem] select-none items-center justify-center rounded bg-centauri-black text-xs opacity-85"
          showIcon={false}
        >
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="sine">&zwnj;Sine</SelectItem>
            <SelectItem value="triangle">&zwnj;Triangle</SelectItem>
            <SelectItem value="sawtooth">&zwnj;Sawtooth</SelectItem>
            <SelectItem value="square">&zwnj;Square</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
