import { ExtendedWaveformType } from "../types";
import { ChangeEvent } from "react";
import { useSynthContext } from "../context/synthContext";

export default function WaveformSelector({ synthId }: { synthId: 1 | 2 }) {
  // const dispatch = useAppDispatch();
  // const controller = useControllerContext();
  const synth = useSynthContext();

  // function handleWaveformChange(e: ChangeEvent) {
  //   const value = (e.target as HTMLSelectElement).value as WaveformType;
  //   dispatch(synthOneOptionsActions.setOscillator(value));
  //   controller.unlink();
  //   synth.dispose();
  // }

  function handleWaveformChange(e: ChangeEvent) {
    synth.releaseAll();
    synth.set({
      oscillator: {
        type: (e.target as HTMLSelectElement).value as ExtendedWaveformType,
      },
    });
  }

  return (
    <>
      <select
        name="waveformSelect"
        id="waveformSelect"
        onChange={handleWaveformChange}
      >
        <option value="sine">&zwnj;sine</option>
        <option value="sawtooth">&zwnj;sawtooth</option>
        <option value="triangle">&zwnj;triangle</option>
        <option value="square">&zwnj;square</option>
      </select>
    </>
  );
}
