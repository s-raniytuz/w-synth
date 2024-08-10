import {
  ATTACK_CURVE_DEFAULT,
  ATTACK_DEFAULT,
  DECAY_CURVE_DEFAULT,
  DECAY_DEFAULT,
  RELEASE_CURVE_DEFAULT,
  RELEASE_DEFAULT,
  SUSTAIN_DEFAULT,
} from "@/localStorage/localStorageDefaults";
import { DecayCurve, ExtendedEnvelopeType } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EnvelopeCurve } from "tone";

const synthOneEnvelopeInit: ExtendedEnvelopeType<number> = {
  attack: Number(localStorage.getItem("synthOneAttack")) || ATTACK_DEFAULT,
  decay: Number(localStorage.getItem("synthOneDecay")) || DECAY_DEFAULT,
  sustain: Number(localStorage.getItem("synthOneSustain")) || SUSTAIN_DEFAULT,
  release: Number(localStorage.getItem("synthOneRelease")) || RELEASE_DEFAULT,
  attackCurve:
    (localStorage.getItem("synthOneAttackCurve") as EnvelopeCurve) ||
    ATTACK_CURVE_DEFAULT,
  decayCurve:
    (localStorage.getItem("synthOneDecayCurve") as DecayCurve) ||
    DECAY_CURVE_DEFAULT,
  releaseCurve:
    (localStorage.getItem("synthOneReleaseCurve") as EnvelopeCurve) ||
    RELEASE_CURVE_DEFAULT,
};

const synthTwoEnvelopeInit: ExtendedEnvelopeType<number> = {
  attack: Number(localStorage.getItem("synthTwoAttack")) || ATTACK_DEFAULT,
  decay: Number(localStorage.getItem("synthTwoDecay")) || DECAY_DEFAULT,
  sustain: Number(localStorage.getItem("synthTwoSustain")) || SUSTAIN_DEFAULT,
  release: Number(localStorage.getItem("synthTwoRelease")) || RELEASE_DEFAULT,
  attackCurve:
    (localStorage.getItem("synthTwoAttackCurve") as EnvelopeCurve) ||
    ATTACK_CURVE_DEFAULT,
  decayCurve:
    (localStorage.getItem("synthTwoDecayCurve") as DecayCurve) ||
    DECAY_CURVE_DEFAULT,
  releaseCurve:
    (localStorage.getItem("synthTwoReleaseCurve") as EnvelopeCurve) ||
    RELEASE_CURVE_DEFAULT,
};

const synthOneEnvelopeSlice = createSlice({
  name: "synthOneEnvelope",
  initialState: synthOneEnvelopeInit,
  reducers: {
    setAttack(state, action: PayloadAction<number>) {
      state.attack = action.payload;
    },
    setDecay(state, action: PayloadAction<number>) {
      state.attack = action.payload;
    },
    setSustain(state, action: PayloadAction<number>) {
      state.sustain = action.payload;
    },
    setRelease(state, action: PayloadAction<number>) {
      state.release = action.payload;
    },
    setAttackCurve(state, action: PayloadAction<EnvelopeCurve>) {
      state.attackCurve = action.payload;
    },
    setDecayCurve(state, action: PayloadAction<DecayCurve>) {
      state.decayCurve = action.payload;
    },
    setReleaseCurve(state, action: PayloadAction<EnvelopeCurve>) {
      state.releaseCurve = action.payload;
    },
  },
});

const synthTwoEnvelopeSlice = createSlice({
  name: "synthTwoEnvelope",
  initialState: synthTwoEnvelopeInit,
  reducers: {
    setAttack(state, action: PayloadAction<number>) {
      state.attack = action.payload;
    },
    setDecay(state, action: PayloadAction<number>) {
      state.attack = action.payload;
    },
    setSustain(state, action: PayloadAction<number>) {
      state.sustain = action.payload;
    },
    setRelease(state, action: PayloadAction<number>) {
      state.release = action.payload;
    },
    setAttackCurve(state, action: PayloadAction<EnvelopeCurve>) {
      state.attackCurve = action.payload;
    },
    setDecayCurve(state, action: PayloadAction<DecayCurve>) {
      state.decayCurve = action.payload;
    },
    setReleaseCurve(state, action: PayloadAction<EnvelopeCurve>) {
      state.releaseCurve = action.payload;
    },
  },
});

export { synthOneEnvelopeSlice, synthTwoEnvelopeSlice };
