import { EnvelopeCurve } from "tone";

export interface EnvelopeType<T> {
  attack: T;
  decay: T;
  sustain: T;
  release: T;
}

export interface ExtendedEnvelopeType<T> extends EnvelopeType<T> {
  attackCurve: EnvelopeCurve;
  decayCurve: "linear" | "exponential";
  releaseCurve: EnvelopeCurve;
}

export type EnvelopePropsType = "attack" | "decay" | "sustain" | "release";

export type ExtendedEnvelopePropsType =
  | EnvelopePropsType
  | "attackCurve"
  | "decayCurve"
  | "releaseCurve";
