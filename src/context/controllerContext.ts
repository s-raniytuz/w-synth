import { KeyboardMidiController } from "keyboard-midi-controller";
import { createContext, useContext } from "react";

export const ControllerContext = createContext<
  KeyboardMidiController | undefined
>(undefined);

export function useControllerContext() {
  const controller = useContext(ControllerContext);

  if (controller === undefined) {
    throw new Error("controller is undefined");
  }

  return controller;
}
