import { ExtendedWaveformType } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const synthOneTypeInit: ExtendedWaveformType =
  (localStorage.getItem("synthOneWaveform") as ExtendedWaveformType) || "sine";

const synthTwoTypeInit: ExtendedWaveformType =
  (localStorage.getItem("synthTwoWaveformType") as ExtendedWaveformType) ||
  "sine";

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
