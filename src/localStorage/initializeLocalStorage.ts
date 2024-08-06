import { LocalStorageType, SynthOptionsType } from "@/types";

const defaultSynthOne: SynthOptionsType = {
  oscillator: {
    type: "sine",
  },
  envelope: {
    attack: 0.01,
    decay: 2,
    sustain: 0,
    release: 1,
    attackCurve: "linear",
    decayCurve: "exponential",
    releaseCurve: "exponential",
  },
  detune: 0,
};

const defaultSynthOneVolume: { volume: number } = {
  volume: 30,
};

export default function initializeLocalStorage() {}
