import * as Tone from "tone";

export default function Limiter({
  prevAudioNode,
  payload,
}: {
  prevAudioNode: Tone.Gain;
  payload: number;
}) {
  const limiter = new Tone.Limiter(payload);
  prevAudioNode.connect(limiter);
  limiter.toDestination();
  return <></>;
}
