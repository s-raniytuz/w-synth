export type WaveformType = "sine" | "triangle" | "sawtooth" | "square";

export type EnvelopeType = {
  attack: number;
  decay: number;
  sustain: number;
  release: number;
};

export type SynthOptionsType = {
  oscillator: {
    type: WaveformType;
  };
  envelope: EnvelopeType;
  volume: number;
  detune: number;
  portamento: number;
};

export type RackInitialStateType = {
  id: number;
  type: string;
  options: object;
};
