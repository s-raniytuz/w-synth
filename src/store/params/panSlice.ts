import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PAN_DEFAULT } from "@/localStorage/localStorageDefaults";
import { evaluateLocalStorage } from "@/functions/evaluateLocalStorage";

const synthOnePanInitial = evaluateLocalStorage("synthOnePan", PAN_DEFAULT);

const synthTwoPanInitial = evaluateLocalStorage("synthTwoPan", PAN_DEFAULT);

const SynthOnePanSlice = createSlice({
  name: "SynthOnePanSlice",
  initialState: {
    pan: synthOnePanInitial,
  },
  reducers: {
    setPanState(state, action: PayloadAction<number>) {
      state.pan = action.payload;
    },
  },
});

const SynthTwoPanSlice = createSlice({
  name: "SynthOnePanSlice",
  initialState: {
    pan: synthTwoPanInitial,
  },
  reducers: {
    setPanState(state, action: PayloadAction<number>) {
      state.pan = action.payload;
    },
  },
});

export { SynthOnePanSlice, SynthTwoPanSlice };
