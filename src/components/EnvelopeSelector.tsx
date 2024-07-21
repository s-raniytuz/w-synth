import { ChangeEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { EnvelopeType } from "../store/types/storeTypes";
import { synthOneOptionsActions } from "../store";
import { useControllerContext } from "../context/controllerContext";
import { useSynthContext } from "../context/synthContext";

type EnvelopePropsType = "attack" | "decay" | "release" | "sustain";

export default function EnvelopeSelector() {
  const synth = useSynthContext();
  const controller = useControllerContext();

  const dispatch = useAppDispatch();

  const envelope = useAppSelector((state) => state.synthOneOptions.envelope);
  const [envelopeState, setEnvelopeState] = useState<EnvelopeType>(envelope);

  console.log(envelope);

  function handleEnvelopeChange(e: ChangeEvent, type: EnvelopePropsType) {
    const value = (e.target as HTMLInputElement).value;
    const newState: EnvelopeType = {
      ...envelope,
      [type]: Number(value),
    };
    dispatch(synthOneOptionsActions.setEnvelope(newState));
    setEnvelopeState(newState);
    controller.unlink();
    synth.dispose();
  }
  return (
    <>
      <input
        type="range"
        name="attack"
        min={0}
        max={10}
        step={0.01}
        value={envelopeState.attack}
        onChange={(e: ChangeEvent) => handleEnvelopeChange(e, "attack")}
      />
      <label htmlFor="attack" className="block text-sm text-white">
        Attack {envelopeState.attack}
      </label>

      <input
        type="range"
        name="decay"
        min={0}
        max={10}
        step={0.01}
        value={envelopeState.decay}
        onChange={(e) => handleEnvelopeChange(e, "decay")}
      />
      <label htmlFor="decay" className="block text-sm text-white">
        Decay {envelopeState.decay}
      </label>

      <input
        type="range"
        name={"sustain"}
        min={0}
        max={1}
        step={0.01}
        value={envelopeState.sustain}
        onChange={(e) => handleEnvelopeChange(e, "sustain")}
      />
      <label htmlFor="sustain" className="block text-sm text-white">
        Sustain {envelopeState.sustain}
      </label>

      <input type="range" min={0} max={10} step={0.01} />
    </>
  );
}
