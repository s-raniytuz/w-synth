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

export default function WaveformSelector({ synthId }: { synthId: 1 | 2 }) {
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
    <div className="waveform-selector">
      <Select onValueChange={handleWaveformChange}>
        <SelectTrigger>
          <SelectValue placeholder="Sine"></SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Waveform</SelectLabel>
            <SelectItem value="sine">Sine</SelectItem>
            <SelectItem value="triangle">Triangle</SelectItem>
            <SelectItem value="sawtooth">Sawtooth</SelectItem>
            <SelectItem value="square">Square</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
