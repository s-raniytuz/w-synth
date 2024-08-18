import { CentauriLFO } from "@/classes/CentauriLFO";
import { LinkedNode } from "@/types";
import { createContext, useContext } from "react";

export const LFOContext = createContext<CentauriLFO | undefined>(undefined);
export const LinkedNodeContext = createContext<
  | undefined
  | {
      linkedNode: LinkedNode;
      setLinkedNode: (value: LinkedNode) => void;
    }
>(undefined);

export function useLFOContext() {
  const lfo = useContext(LFOContext);

  if (lfo === undefined) {
    throw new Error("LFO is undefined");
  }

  return lfo;
}

export function useLinkedNodeContext() {
  const linkedNode = useContext(LinkedNodeContext);

  if (linkedNode === undefined) {
    throw new Error("Linked Node is undefined");
  }

  return linkedNode;
}
