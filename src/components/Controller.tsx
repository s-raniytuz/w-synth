import {
  KeyboardMidiController,
  ControllerEventType,
} from "keyboard-midi-controller";
import { useSynthContext } from "../context/synthContext";
import Gain from "./effects/Gain";
import WaveformSelector from "./WaveformSelector";
import EnvelopeSelector from "./EnvelopeSelector";
import { ControllerContext } from "../context/controllerContext";
import SynthMainControlsContainer from "./SynthMainControlsContainer";

const controller = new KeyboardMidiController();

export default function Controller({ synthId }: { synthId: 1 | 2 }) {
  const synth = useSynthContext();

  function handleKeydown(e: ControllerEventType) {
    synth.triggerAttack(e.frequency);
  }
  function handleKeyup(e: ControllerEventType) {
    synth.triggerRelease(e.frequency);
  }

  controller.controllerOutputAttack = handleKeydown;
  controller.controllerOutputRelease = handleKeyup;

  controller.link();
  return (
    <>
      <ControllerContext.Provider value={controller}>
        <div className="h-96 w-48 bg-black">
          <WaveformSelector synthId={synthId} />
          <EnvelopeSelector />
          <SynthMainControlsContainer />
        </div>
        <Gain prevAudioNode={synth} payload={0.01} />
      </ControllerContext.Provider>
    </>
  );
}
