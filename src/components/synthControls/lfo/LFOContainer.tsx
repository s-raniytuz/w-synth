import { LFO } from "tone";
import { LinkedNode } from "@/types";
import { LFOContext } from "@/context/LFOContext";
import LFOConnector from "./LFOConnector";

export default function LFOContainer({
  linkedNode = "volume",
}: {
  linkedNode?: LinkedNode;
}) {
  const lfo = new LFO({
    amplitude: 1,
    type: "sine",
    frequency: "4n",
  });

  return (
    <LFOContext.Provider value={lfo}>
      <LFOConnector linkedNode={linkedNode} />
    </LFOContext.Provider>
  );
}
