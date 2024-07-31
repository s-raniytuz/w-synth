import { AudioNodeType } from "@/types";
import * as Tone from "tone";
import OutputConnect from "../control-nodes/OutputConnect";

export default function Limiter({
  prevAudioNode,
  payload = -3,
}: {
  prevAudioNode: AudioNodeType;
  payload?: number;
}) {
  const limiter = new Tone.Limiter(payload);
  prevAudioNode.connect(limiter);
  return <OutputConnect prevAudioNode={limiter} />;
}
