import { LFO } from "tone";
import { LinkedNode } from "@/types";
import { LFOContext } from "@/context/LFOContext";
import LFOConnector from "./LFOConnector";

const lfo = new LFO({
  amplitude: 1,
  type: "sine",
  frequency: "4n",
  min: -10,
  max: 30,
});

export default function LFOContainer({
  linkedNode = "volume",
}: {
  linkedNode?: LinkedNode;
}) {
  return (
    <LFOContext.Provider value={lfo}>
      <LFOConnector linkedNode={linkedNode} />
    </LFOContext.Provider>
  );
}
