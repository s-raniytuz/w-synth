import { ExtendedWaveformType } from "../types";
import { useSynthContext } from "../context/synthContext";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectGroup,
  SelectLabel,
  SelectValue,
} from "@/components/ui/select";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { synthOneWaveformActions } from "@/store";

export default function WaveformSelector({
  synthId,
  className,
}: {
  synthId: 1 | 2;
  className: string;
}) {
  const dispatch = useAppDispatch();
  const synth = useSynthContext();
  const waveform = useAppSelector((state) => state.synthOneWaveform.type);

  function handleWaveformChange(value: string) {
    synth.releaseAll();
    synth.set({
      oscillator: {
        type: value as ExtendedWaveformType,
      },
    });

    dispatch(
      synthOneWaveformActions.setWaveform(value as ExtendedWaveformType),
    );

    if (value !== "sine") {
      localStorage.setItem("synthOneWaveform", value);
    } else {
      localStorage.removeItem("synthOneWaveform");
    }
  }

  return (
    <div className={`waveform-selector ${className}`}>
      <Select onValueChange={handleWaveformChange} value={waveform}>
        <SelectTrigger className="ml-2 mt-2 flex select-none justify-center gap-2 border-none font-nohemi text-[0.9rem] font-light tracking-[0.05rem] opacity-95">
          <SelectValue placeholder="Sine"></SelectValue>
        </SelectTrigger>
        <SelectContent className="border-gray-800 bg-black font-nohemi tracking-[0.05rem]">
          <SelectGroup>
            <SelectLabel>Waveform</SelectLabel>
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
