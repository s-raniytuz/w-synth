import EnvelopeSelector from "../EnvelopeSelector";
import LFOContainer from "../synthControls/lfo/LFOContainer";
import SynthMainControlsContainer from "../SynthMainControlsContainer";
import WaveformDisplay from "./WaveformDisplay";

export default function SynthVisualContainer() {
  return (
    <div
      id="synth-one-container"
      className="flex min-h-[20.85rem] flex-1 rounded-xl bg-[#E2E7F3] bg-gradient-to-b from-[#E2E7F3] to-[#B7BFD2]"
    >
      <div className="waveform-select-container flex h-full w-[50%] items-center justify-center p-2">
        <WaveformDisplay />
      </div>

      <div className="synth-controls-container grid h-full w-[50%] grid-cols-9 grid-rows-9 gap-2 p-2">
        <div className="envelope-controls-container col-span-7 row-span-4 rounded bg-black bg-opacity-10">
          <EnvelopeSelector />
        </div>

        <div className="main-selector-container col-span-2 row-start-1 row-end-10 rounded bg-black bg-opacity-10 py-2">
          <SynthMainControlsContainer />
        </div>

        <div className="lfo-container col-span-7 row-span-5 rounded bg-black bg-opacity-10">
          <LFOContainer />
        </div>
      </div>
    </div>
  );
}
