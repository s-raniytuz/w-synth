import Volume from "./synthControls/main-controls/Volume";
import Pan from "./synthControls/main-controls/Pan";
import Detune from "./synthControls/main-controls/Detune";
import PitchShifter from "./synthControls/main-controls/PitchShifter";

export default function SynthMainControlsContainer() {
  return (
    <div className="synth-main-controls-container flex h-full w-full flex-col justify-between py-1">
      <Volume />
      <Pan />
      <Detune />
      <PitchShifter />
    </div>
  );
}
