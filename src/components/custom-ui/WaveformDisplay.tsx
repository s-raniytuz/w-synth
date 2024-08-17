import { useAppSelector } from "@/store/hooks";
import WaveformSelector from "../WaveformSelector";
import { cn } from "@/lib/utils";
import Mute from "../synthControls/main-controls/Mute";

export default function WaveformDisplay() {
  const waveform = useAppSelector((state) => state.synthOneWaveform.type);
  const staticImageClassName = "waveform-image h-[87%] w-full rounded-xl";
  let imageClassName;

  switch (waveform) {
    case "sine":
      imageClassName = cn(staticImageClassName, 'bg-[url("/assets/sine.png")]');
      break;
    case "triangle":
      imageClassName = cn(
        staticImageClassName,
        'bg-[url("/assets/triangle.png")]',
      );
      break;
    case "sawtooth":
      imageClassName = cn(
        staticImageClassName,
        'bg-[url("/assets/sawtooth.png")]',
      );
      break;
    case "square":
      imageClassName = cn(
        staticImageClassName,
        'bg-[url("/assets/square.png")]',
      );
      break;
  }

  return (
    <div className="waveform-display h-full w-full rounded-xl bg-centauri-black">
      <div className="waveform-display-selector mt-px flex h-[13%] w-full items-center justify-between px-4">
        <Mute />
        <WaveformSelector synthId={1} className="w-[12rem]" />
        <div className="synth-switch h-[1rem] w-[1rem] rounded-[50%] bg-white opacity-0"></div>
      </div>
      <div className={imageClassName}></div>
    </div>
  );
}
