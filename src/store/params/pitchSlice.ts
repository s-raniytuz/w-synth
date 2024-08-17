import { evaluateLocalStorage } from "@/functions/evaluateLocalStorage";
import { PITCH_DEFAULT } from "@/localStorage/localStorageDefaults";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const synthOnePitchInitial = evaluateLocalStorage(
  "synthOnePitch",
  PITCH_DEFAULT,
);

const synthTwoPitchInitial = evaluateLocalStorage(
  "synthTwoPitch",
  PITCH_DEFAULT,
);

const synthOnePitchSlice = createSlice({
  name: "synthOnePitchSlice",
  initialState: {
    pitch: synthOnePitchInitial,
  },
  reducers: {
    setPitchState(state, action: PayloadAction<number>) {
      state.pitch = action.payload;
    },
  },
});

const synthTwoPitchSlice = createSlice({
  name: "synthTwoPitchSlice",
  initialState: {
    pitch: synthTwoPitchInitial,
  },
  reducers: {
    setPitchState(state, action: PayloadAction<number>) {
      state.pitch = action.payload;
    },
  },
});

export { synthOnePitchSlice, synthTwoPitchSlice };
