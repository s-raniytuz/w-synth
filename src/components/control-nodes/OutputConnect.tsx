import { AudioNodeType } from "@/types";

export default function OutputConnect({
  prevAudioNode,
}: {
  prevAudioNode: AudioNodeType;
}) {
  prevAudioNode.toDestination();
  return <></>;
}
