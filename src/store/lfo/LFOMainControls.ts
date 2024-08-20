import { evaluateLocalStorage } from "@/functions/evaluateLocalStorage";
import {
  LFO_AMPLITUDE_DEFAULT,
  LFO_FREQUENCY_DEFAULT,
  LFO_FREQUENCY_UNIT_DEFAULT,
  LFO_WAVEFORM_DEFAULT,
} from "@/localStorage/localStorageDefaults";
import { BaseWaveformType, LFOFrequencyUnitType } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Unit } from "tone";

const synthOneInit = {
  waveform: evaluateLocalStorage("synthOneLfoWaveform", LFO_WAVEFORM_DEFAULT),
  amplitude: evaluateLocalStorage(
    "synthOneLfoAmplitude",
    LFO_AMPLITUDE_DEFAULT,
  ),
  frequency: evaluateLocalStorage(
    "synthOneLfoFrequency",
    LFO_FREQUENCY_DEFAULT,
  ),
  frequencyUnit: evaluateLocalStorage(
    "synthOneLfoFrequencyUnit",
    LFO_FREQUENCY_UNIT_DEFAULT,
  ),
};

const synthTwoInit = {
  waveform: evaluateLocalStorage("synthTwoLfoWaveform", LFO_WAVEFORM_DEFAULT),
  amplitude: evaluateLocalStorage(
    "synthTwoLfoAmplitude",
    LFO_AMPLITUDE_DEFAULT,
  ),
  frequency: evaluateLocalStorage(
    "synthTwoLfoFrequency",
    LFO_FREQUENCY_DEFAULT,
  ),
  frequencyUnit: evaluateLocalStorage(
    "synthTwoLfoFrequencyUnit",
    LFO_FREQUENCY_UNIT_DEFAULT,
  ),
};

const synthOneLFOMainControlsSlice = createSlice({
  name: "SynthOneLFOMainControls",
  initialState: synthOneInit,
  reducers: {
    setWaveform(state, action: PayloadAction<BaseWaveformType>) {
      state.waveform = action.payload;
    },
    setAmplitude(state, action: PayloadAction<number>) {
      state.amplitude = action.payload;
    },
    setFrequency(state, action: PayloadAction<Unit.Frequency>) {
      state.frequency = action.payload;
    },
    setFrequencyUnit(state, action: PayloadAction<LFOFrequencyUnitType>) {
      state.frequencyUnit = action.payload;
    },
  },
});

const synthTwoLFOMainControlsSlice = createSlice({
  name: "SynthTwoLFOMainControls",
  initialState: synthTwoInit,
  reducers: {
    setWaveform(state, action: PayloadAction<BaseWaveformType>) {
      state.waveform = action.payload;
    },
    setAmplitude(state, action: PayloadAction<number>) {
      state.amplitude = action.payload;
    },
    setFrequency(state, action: PayloadAction<number>) {
      state.frequency = action.payload;
    },
    setFrequencyUnit(state, action: PayloadAction<LFOFrequencyUnitType>) {
      state.frequencyUnit = action.payload;
    },
  },
});

export { synthOneLFOMainControlsSlice, synthTwoLFOMainControlsSlice };
