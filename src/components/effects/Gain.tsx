import * as Tone from "tone";
import Limiter from "./Limiter";
import { AudioNodeType } from "@/types";

export default function Gain({
  prevAudioNode,
  payload = 0.01,
}: {
  prevAudioNode: AudioNodeType;
  payload?: number;
}) {
  const gain = new Tone.Gain(payload);
  prevAudioNode.connect(gain);
  return <Limiter prevAudioNode={gain} />;
}
