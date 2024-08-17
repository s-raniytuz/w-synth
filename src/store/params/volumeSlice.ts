import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { VOLUME_DEFAULT } from "@/localStorage/localStorageDefaults";
import { evaluateLocalStorage } from "@/functions/evaluateLocalStorage";

const synthOneVolumeInitial = evaluateLocalStorage(
  "synthOneVolume",
  VOLUME_DEFAULT,
);

const synthTwoVolumeInitial = evaluateLocalStorage(
  "synthTwoVolume",
  VOLUME_DEFAULT,
);

const synthOneVolumeSlice = createSlice({
  name: "synth1VolumeSlice",
  initialState: {
    volume: synthOneVolumeInitial,
  },
  reducers: {
    setVolumeState(state, action: PayloadAction<number>) {
      state.volume = action.payload;
    },
  },
});

const synthTwoVolumeSlice = createSlice({
  name: "synth2VolumeSlice",
  initialState: {
    volume: synthTwoVolumeInitial,
  },
  reducers: {
    setVolumeState(state, action: PayloadAction<number>) {
      state.volume = action.payload;
    },
  },
});

export { synthOneVolumeSlice, synthTwoVolumeSlice };
