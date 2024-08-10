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

export type DecayCurve = "linear" | "exponential";

export interface BaseEnvelopeType<T> {
  attack: T;
  decay: T;
  sustain: T;
  release: T;
}

export interface ExtendedEnvelopeType<T> extends BaseEnvelopeType<T> {
  attackCurve: Tone.EnvelopeCurve;
  decayCurve: DecayCurve;
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
}

/*
|
| Synth Types
|
*/

export interface SynthOptionsType {
  oscillator: OscillatorType;
  envelope: ExtendedEnvelopeType<number>;
  detune: number;
}

export interface MainControlsType<T> {
  volume: T;
  pan: T;
  detune: T;
  pitch: T;
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

/*
|
| LFO types
|
*/

export type LinkedNode = "volume" | "pan";

export interface LFOType {
  waveform: BaseWaveformType;
  link: LinkedNode;
  amplitude: number;
}

/*
|
| Local Storage types
|
*/

export type LocalStorageType = {
  synth1: {
    waveform: BaseWaveformType;
    envelope: ExtendedEnvelopeType<number>;
    mainControls: MainControlsType<number>;
    lfo: LFOType;
  };
};
