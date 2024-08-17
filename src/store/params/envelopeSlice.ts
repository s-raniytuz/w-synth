import { evaluateLocalStorage } from "@/functions/evaluateLocalStorage";
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
  attack: evaluateLocalStorage("synthOneAttack", ATTACK_DEFAULT),
  decay: evaluateLocalStorage("synthOneDecay", DECAY_DEFAULT),
  sustain: evaluateLocalStorage("synthOneSustain", SUSTAIN_DEFAULT),
  release: evaluateLocalStorage("synthOneRelease", RELEASE_DEFAULT),
  attackCurve: evaluateLocalStorage(
    "synthOneAttackCurve",
    ATTACK_CURVE_DEFAULT,
  ),
  decayCurve: evaluateLocalStorage("synthOneDecayCurve", DECAY_CURVE_DEFAULT),
  releaseCurve: evaluateLocalStorage(
    "synthOneReleaseCurve",
    RELEASE_CURVE_DEFAULT,
  ),
};

const synthTwoEnvelopeInit: ExtendedEnvelopeType<number> = {
  attack: evaluateLocalStorage("synthTwoAttack", ATTACK_DEFAULT),
  decay: evaluateLocalStorage("synthTwoDecay", DECAY_DEFAULT),
  sustain: evaluateLocalStorage("synthTwoSustain", SUSTAIN_DEFAULT),
  release: evaluateLocalStorage("synthTwoRelease", RELEASE_DEFAULT),
  attackCurve: evaluateLocalStorage(
    "synthTwoAttackCurve",
    ATTACK_CURVE_DEFAULT,
  ),
  decayCurve: evaluateLocalStorage("synthTwoDecayCurve", DECAY_CURVE_DEFAULT),
  releaseCurve: evaluateLocalStorage(
    "synthTwoReleaseCurve",
    RELEASE_CURVE_DEFAULT,
  ),
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
