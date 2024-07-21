import { useSynthContext } from "../../context/synthContext";
import { ChangeEvent, useState } from "react";

export default function Volume() {
  const synth = useSynthContext();
  const [volumeState, setVolumeState] = useState<number>(synth.get().volume);

  function handleVolumeChange(e: ChangeEvent) {
    const value = parseInt((e.target as HTMLInputElement).value);
    if (value === 0) {
      synth.set({
        volume: -100,
      });
    } else {
      synth.set({
        volume: value,
      });
    }
    setVolumeState(value);
  }

  return (
    <div className="volume">
      <input
        type="range"
        name="volume"
        min={0}
        max={35}
        value={synth.get().volume}
        onChange={handleVolumeChange}
      />
      <label htmlFor="volume" className="block text-sm text-white">
        Volume {Math.round(volumeState)}
      </label>
    </div>
  );
}
