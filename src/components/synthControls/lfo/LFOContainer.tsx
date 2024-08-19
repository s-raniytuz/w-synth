import { LFOOptions } from "tone";
import { LFOContext } from "@/context/LFOContext";
import LFOConnector from "./LFOConnector";
import LFOSwitch from "./LFOSwitch";
import LFOControls from "./LFOControls";
import { CentauriLFO } from "@/classes/CentauriLFO";
import LFOFrequency from "./LFOFrequency";

const initLFOOptions: Partial<LFOOptions> = {
  amplitude: 1,
  type: "sine",
  frequency: "4n",
};

const lfo = new CentauriLFO(initLFOOptions);

export default function LFOContainer() {
  return (
    <LFOContext.Provider value={lfo}>
      <div className="lfo-container flex h-full w-full flex-col items-center px-4 py-2">
        <div className="lfo-waveform-display flex h-[20%] w-full items-center justify-between rounded">
          <LFOSwitch />
          <p className="cursor-default select-none font-nohemi text-[0.8rem] text-centauri-black">
            LFO
          </p>
          <div className="h-4 w-4 rounded-[50%]"></div>
        </div>
        <LFOFrequency />
        <LFOControls />
      </div>

      <LFOConnector />
    </LFOContext.Provider>
  );
}
