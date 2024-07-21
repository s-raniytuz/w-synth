import * as Tone from "tone";
import Limiter from "./Limiter";

export default function Gain({
  prevAudioNode,
  payload,
}: {
  prevAudioNode: Tone.PolySynth;
  payload: number;
}) {
  const gain = new Tone.Gain(payload);
  prevAudioNode.connect(gain);
  return <Limiter prevAudioNode={gain} payload={-3} />;
}
