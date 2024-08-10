import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DETUNE_DEFAULT } from "@/localStorage/localStorageDefaults";

const synthOneDetuneInit: number =
  Number(localStorage.getItem("synthOneDetune")) || DETUNE_DEFAULT;

const synthTwoDetuneInit: number =
  Number(localStorage.getItem("synthTwoDetune")) || DETUNE_DEFAULT;

const synthOneDetuneSlice = createSlice({
  name: "SynthOneDetuneSlice",
  initialState: {
    detune: synthOneDetuneInit,
  },
  reducers: {
    setDetune(state, action: PayloadAction<number>) {
      state.detune = action.payload;
    },
  },
});

const synthTwoDetuneSlice = createSlice({
  name: "synthTwoDetuneSlice",
  initialState: {
    detune: synthTwoDetuneInit,
  },
  reducers: {
    setDetune(state, action) {
      state.detune = action.payload;
    },
  },
});

export { synthOneDetuneSlice, synthTwoDetuneSlice };
