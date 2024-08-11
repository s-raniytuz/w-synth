import { useSynthChannelContext } from "@/context/SynthChannelContext";
import { cn } from "@/lib/utils";
import { useState } from "react";

const mutedClassName =
  "cursor-pointer synth-switch h-[1rem] w-[1rem] rounded-[50%] border-[0.1rem] border-white";

const unmutedClassName = cn(mutedClassName, "bg-white");

export default function Mute() {
  const channel = useSynthChannelContext();
  const [muteState, setMuteState] = useState(channel.mute);

  function handleMute() {
    channel.set({
      mute: !channel.mute,
    });
    setMuteState((prev) => !prev);
  }
  return (
    <div
      className={muteState ? mutedClassName : unmutedClassName}
      onClick={handleMute}
    ></div>
  );
}
