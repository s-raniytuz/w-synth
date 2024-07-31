import Volume from "./synthControls/main-controls/Volume";
import Pan from "./synthControls/main-controls/Pan";

export default function SynthMainControlsContainer() {
  return (
    <div className="synth-main-controls-container flex h-full w-full flex-col justify-between py-1">
      <Volume />
      <Pan />
      <Volume />
      <Volume />
    </div>
  );
}
