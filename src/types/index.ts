import * as Tone from "tone";

/*
|
| Waveform Types
|
*/

export type BaseWaveformType = "sine" | "triangle" | "sawtooth" | "square";

export type ExtendedWaveformType = BaseWaveformType | "pulse" | "pwm";

/*
|
| Envelope Types
|
*/

export interface BaseEnvelopeType<T> {
  attack: T;
  decay: T;
  sustain: T;
  release: T;
}

export interface ExtendedEnvelopeType<T> extends BaseEnvelopeType<T> {
  attackCurve: Tone.EnvelopeCurve;
  decayCurve: "linear" | "exponential";
  releaseCurve: Tone.EnvelopeCurve;
}

export type BaseEnvelopePropsType = "attack" | "decay" | "sustain" | "release";

export type ExtendedEnvelopePropsType =
  | BaseEnvelopePropsType
  | "attackCurve"
  | "decayCurve"
  | "releaseCurve";

/*
|
| Oscillator Types
|
*/

export interface OscillatorType {
  type: BaseWaveformType | ExtendedWaveformType;
  mute: boolean;
  phase: number;
}

/*
|
| Synth Types
|
*/

export interface SynthOptionsType {
  oscillator: OscillatorType;
  envelope: ExtendedEnvelopeType<number>;
  volume: number;
  detune: number;
  portamento: number;
}

/*
|
| Effect Types
|
*/

export interface EffectRackInitialStateType {
  id: number;
  type: string;
  options: object;
}

/*
|
| Audio Node connect types
|
*/

type ControlNodeType = Tone.Channel;

type EffectNodeType = Tone.Gain | Tone.Limiter | Tone.PitchShift;

export type AudioNodeType = EffectNodeType | ControlNodeType;
