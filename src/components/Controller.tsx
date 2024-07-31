import {
  KeyboardMidiController,
  ControllerEventType,
} from "keyboard-midi-controller";
import { useSynthContext } from "../context/synthContext";
import { ControllerContext } from "../context/controllerContext";
import { ReactNode } from "react";

const controller = new KeyboardMidiController();

export default function Controller({
  synthId,
  children,
}: {
  synthId: 1 | 2;
  children: ReactNode;
}) {
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
        {children}
      </ControllerContext.Provider>
    </>
  );
}
