import { evaluateLocalStorage } from "@/functions/evaluateLocalStorage";
import { WAVEFORM_DEFAULT } from "@/localStorage/localStorageDefaults";
import { ExtendedWaveformType } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const synthOneTypeInit: ExtendedWaveformType = evaluateLocalStorage(
  "synthOneWaveform",
  WAVEFORM_DEFAULT,
) as ExtendedWaveformType;

const synthTwoTypeInit: ExtendedWaveformType = evaluateLocalStorage(
  "synthTwoWaveform",
  WAVEFORM_DEFAULT,
) as ExtendedWaveformType;

const synthOneWaveformSlice = createSlice({
  name: "synthOneWaveform",
  initialState: {
    type: synthOneTypeInit,
  },
  reducers: {
    setWaveform(state, action: PayloadAction<ExtendedWaveformType>) {
      state.type = action.payload;
    },
  },
});

const synthTwoWaveformSlice = createSlice({
  name: "synthTwoWaveform",
  initialState: {
    type: synthTwoTypeInit,
  },
  reducers: {
    setWaveform(state, action: PayloadAction<ExtendedWaveformType>) {
      state.type = action.payload;
    },
  },
});

export { synthOneWaveformSlice, synthTwoWaveformSlice };
