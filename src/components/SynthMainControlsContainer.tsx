import Volume from "./synthControls/Volume";

export default function SynthMainControlsContainer() {
  return (
    <div className="synth-main-controls-container flex h-full w-full flex-col justify-between py-1">
      <Volume />
      <Volume />
      <Volume />
    </div>
  );
}
