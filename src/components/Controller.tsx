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

        <div className="synth-controls-container grid h-full w-[50%] grid-cols-9 grid-rows-9 gap-2 p-2">
          <div className="envelope-controls-container col-span-7 row-span-4 rounded bg-black bg-opacity-10">
            <EnvelopeSelector />
          </div>

          <div className="main-selector-container col-span-2 row-start-1 row-end-10 rounded bg-black bg-opacity-10"></div>

          <div className="lfo-container col-span-7 row-span-5 rounded bg-black bg-opacity-10"></div>
          {/* <EnvelopeSelector />
          <SynthMainControlsContainer /> */}
        </div>

        <Gain prevAudioNode={synth} payload={0.01} />
      </ControllerContext.Provider>
    </>
  );
}
