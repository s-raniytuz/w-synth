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
import WaveformDisplay from "./custom-ui/WaveformDisplay";

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

  if (!controller.isLinked) {
    controller.link();
  }
  return (
    <>
      <ControllerContext.Provider value={controller}>
        <div className="waveform-select-container flex h-full w-[50%] items-center justify-center p-2">
          <WaveformDisplay />
        </div>
        <div className="synth-controls-container h-full w-[50%]">
          {/* <EnvelopeSelector />
          <SynthMainControlsContainer /> */}
        </div>
        <Gain prevAudioNode={synth} payload={0.01} />
      </ControllerContext.Provider>
    </>
  );
}
