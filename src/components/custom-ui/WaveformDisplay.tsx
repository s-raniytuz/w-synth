import WaveformSelector from "../WaveformSelector";

export default function WaveformDisplay() {
  return (
    <div className="waveform-display bg-centauri-black h-full w-full rounded-xl">
      <div className="waveform-display-selector mt-px flex h-[15%] w-full items-center justify-between px-4">
        <div className="synth-switch h-[1rem] w-[1rem] rounded-[50%] bg-white"></div>
        <WaveformSelector synthId={1} className="w-[12rem]" />
        <div className="synth-switch h-[1rem] w-[1rem] rounded-[50%] bg-white opacity-0"></div>
      </div>
    </div>
  );
}
