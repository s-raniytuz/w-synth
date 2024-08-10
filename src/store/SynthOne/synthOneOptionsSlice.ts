import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  SynthOptionsType,
  ExtendedEnvelopeType,
  ExtendedWaveformType,
  DecayCurve,
} from "../../types";
import { EnvelopeCurve } from "tone";

// const typeInit: ExtendedWaveformType =
//   (localStorage.getItem("synthOneWaveform") as ExtendedWaveformType) || "sine";

const envelopeInit: ExtendedEnvelopeType<number> = {
  attack: Number(localStorage.getItem("synthOneAttack")) || 0.01,
  decay: Number(localStorage.getItem("synthTwoDecay")) || 2,
  sustain: Number(localStorage.getItem("synthOneSustain")) || 0,
  release: Number(localStorage.getItem("synthOneRelease")) || 1,
  attackCurve:
    (localStorage.getItem("synthOneAttackCurve") as EnvelopeCurve) || "linear",
  decayCurve:
    (localStorage.getItem("synthOneDecayCurve") as DecayCurve) || "exponential",
  releaseCurve:
    (localStorage.getItem("synthOneReleaseCurve") as EnvelopeCurve) ||
    "exponential",
};

// const detuneInit: number = Number(localStorage.getItem("synthOneDetune")) || 0;

const initialSynthState = {
  // oscillator: {
  //   type: typeInit,
  // },
  envelope: envelopeInit,
  // detune: detuneInit,
};

const synthOneOptionsSlice = createSlice({
  name: "polySynth",
  initialState: initialSynthState,
  reducers: {
    // setOscillator(state, action: PayloadAction<ExtendedWaveformType>) {
    //   state.oscillator.type = action.payload;
    // },
    setAttack(state, action: PayloadAction<number>) {
      state.envelope.attack = action.payload;
    },
    setDecay(state, action: PayloadAction<number>) {
      state.envelope.decay = action.payload;
    },
    setSustain(state, action: PayloadAction<number>) {
      state.envelope.sustain = action.payload;
    },
    setRelease(state, action: PayloadAction<number>) {
      state.envelope.release = action.payload;
    },
    setAttackCurve(state, action: PayloadAction<EnvelopeCurve>) {
      state.envelope.attackCurve = action.payload;
    },
    setDecayCurve(state, action: PayloadAction<DecayCurve>) {
      state.envelope.decayCurve = action.payload;
    },
    setReleaseCurve(state, action: PayloadAction<EnvelopeCurve>) {
      state.envelope.releaseCurve = action.payload;
    },
    // setDetune(state, action: PayloadAction<number>) {
    //   state.detune = action.payload;
    // },
  },
});

export { synthOneOptionsSlice };
