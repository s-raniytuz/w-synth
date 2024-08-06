import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PAN_DEFAULT } from "@/localStorage/localStorageDefaults";

const synthOnePanInitial =
  Number(localStorage.getItem("synthOnePan")) || PAN_DEFAULT;

const synthTwoPanInitial =
  Number(localStorage.getItem("synthTwoPan")) || PAN_DEFAULT;

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
