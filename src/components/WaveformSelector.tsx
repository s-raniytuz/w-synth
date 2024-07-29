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

export default function WaveformSelector({
  synthId,
  className,
}: {
  synthId: 1 | 2;
  className: string;
}) {
  const synth = useSynthContext();

  function handleWaveformChange(value: string) {
    synth.releaseAll();
    synth.set({
      oscillator: {
        type: value as ExtendedWaveformType,
      },
    });
  }

  return (
    <div className={`waveform-selector ${className}`}>
      <Select onValueChange={handleWaveformChange}>
        <SelectTrigger className="font-subjectivity text-md ml-2 mt-2 flex justify-center gap-2 border-none">
          <SelectValue placeholder="Sine"></SelectValue>
        </SelectTrigger>
        <SelectContent className="font-subjectivity border-gray-800 bg-black">
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
