import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  SynthOptionsType,
  ExtendedEnvelopeType,
  ExtendedWaveformType,
} from "../../types";

const initialSynthState: SynthOptionsType = {
  oscillator: {
    type: "sine",
    mute: false,
    phase: 0,
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
  volume: 30,
  detune: 0,
  portamento: 0,
};

const synthOneOptionsSlice = createSlice({
  name: "polySynth",
  initialState: initialSynthState,
  reducers: {
    setOscillator(state, action: PayloadAction<ExtendedWaveformType>) {
      state.oscillator.type = action.payload;
    },
    setEnvelope(state, action: PayloadAction<ExtendedEnvelopeType<number>>) {
      state.envelope = action.payload;
    },
  },
});

export { synthOneOptionsSlice };
