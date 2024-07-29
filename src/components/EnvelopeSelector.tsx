import { ChangeEvent, useState } from "react";
import { useSynthContext } from "../context/synthContext";
import { ExtendedEnvelopeType } from "../types";
import { ExtendedEnvelopePropsType } from "../types";
import EnvelopeAttack from "./synthControls/envelope/EnvelopeAttack";
import EnvelopeDecay from "./synthControls/envelope/EnvelopeDecay";
import Knob from "./custom-ui/knob/TrackingKnob";

export default function EnvelopeSelector() {
  const synth = useSynthContext();

  const [envelopeState, setEnvelopeState] = useState<
    ExtendedEnvelopeType<string>
  >({
    attack: synth.get().envelope.attack.toString(),
    decay: synth.get().envelope.decay.toString(),
    sustain: synth.get().envelope.sustain.toString(),
    release: synth.get().envelope.release.toString(),
    attackCurve: synth.get().envelope.attackCurve,
    decayCurve: synth.get().envelope.decayCurve,
    releaseCurve: synth.get().envelope.releaseCurve,
  });

  function handleEnvelopeChange(
    e: ChangeEvent,
    type: ExtendedEnvelopePropsType,
  ) {
    const value = (e.target as HTMLInputElement).value;
    synth.set({
      envelope: {
        [type]: value,
      },
    });
    setEnvelopeState((prev) => {
      return {
        ...prev,
        [type]: value,
      };
    });
  }

  return (
    <div className="envelope-selector flex h-full w-full justify-between px-1">
      <EnvelopeAttack />
      <EnvelopeAttack />
      <EnvelopeAttack />
      <EnvelopeAttack />
      {/* <EnvelopeDecay /> */}
      {/* <label htmlFor="sustain" className="block text-sm text-white">
        Sustain {envelopeState.sustain}
      </label>
      <input
        type="range"
        name="sustain"
        min={0}
        max={1}
        step={0.01}
        value={envelopeState.sustain}
        onChange={(e) => handleEnvelopeChange(e, "sustain")}
      />
      <label htmlFor="release" className="block text-sm text-white">
        Release {envelopeState.release}
      </label>
      <input
        type="range"
        name="release"
        min={0}
        max={10}
        step={0.01}
        value={envelopeState.release}
        onChange={(e) => handleEnvelopeChange(e, "release")}
      />
      <Knob className="bg-slate-800" /> */}
    </div>
  );
}
