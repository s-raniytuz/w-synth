import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  EnvelopeType,
  SynthOptionsType,
  WaveformType,
} from "../types/storeTypes";

const initialSynthState: SynthOptionsType = {
  oscillator: {
    type: "sine",
  },
  envelope: {
    attack: 0.005,
    decay: 1,
    sustain: 0,
    release: 1,
  },
  volume: 30,
  detune: 0,
  portamento: 0,
};

const synthOneOptionsSlice = createSlice({
  name: "polySynth",
  initialState: initialSynthState,
  reducers: {
    setOscillator(state, action: PayloadAction<WaveformType>) {
      state.oscillator.type = action.payload;
    },
    setEnvelope(state, action: PayloadAction<EnvelopeType>) {
      state.envelope = action.payload;
    },
  },
});

export { synthOneOptionsSlice };
