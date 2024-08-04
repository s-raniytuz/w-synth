import LFOAmplitude from "./LFOAmplitude";
import LFOLink from "./LFOLink";
import LFOWaveform from "./LFOWaveform";

export default function LFOControls() {
  return (
    <div className="lfo-controls flex w-full flex-grow justify-between px-5">
      <LFOLink />
      <LFOWaveform />
      <LFOAmplitude />
    </div>
  );
}
