import { createContext, useContext } from "react";
import { Channel } from "tone";

export const SynthChannelContext = createContext<Channel | undefined>(
  undefined,
);

export function useSynthChannelContext() {
  const channel = useContext(SynthChannelContext);

  if (channel === undefined) {
    throw new Error("Channel is undefined");
  }

  return channel;
}
