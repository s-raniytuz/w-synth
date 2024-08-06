import { configureStore } from "@reduxjs/toolkit";
import { synthOneOptionsSlice } from "./SynthOne/synthOneOptionsSlice";
import { synthOneEffectRackSlice } from "./SynthOne/synthOneEffectRackSlice";
import { synthOneVolumeSlice, synthTwoVolumeSlice } from "./params/volumeSlice";
import { SynthOnePanSlice, SynthTwoPanSlice } from "./params/panSlice";
import { synthOnePitchSlice, synthTwoPitchSlice } from "./params/pitchSlice";

const store = configureStore({
  reducer: {
    //SYNTH 1
    synthOneOptions: synthOneOptionsSlice.reducer,
    synthOneEffectRack: synthOneEffectRackSlice.reducer,
    synthOneVolume: synthOneVolumeSlice.reducer,
    synthOnePan: SynthOnePanSlice.reducer,
    synthOnePitch: synthOnePitchSlice.reducer,

    // SYNTH 2
    synthTwoVolume: synthTwoVolumeSlice.reducer,
    synthTwoPan: SynthTwoPanSlice.reducer,
    synthTwoPitch: synthTwoPitchSlice.reducer,
  },
});

// SYNTH 1
export const synthOneOptionsActions = synthOneOptionsSlice.actions;
export const synthOneEffectRackActions = synthOneEffectRackSlice.actions;
export const synthOneVolumeActions = synthOneVolumeSlice.actions;
export const synthOnePanActions = SynthOnePanSlice.actions;
export const synthOnePitchActions = synthOnePitchSlice.actions;

// SYNTH 2
export const synthTwoVolumeActions = synthTwoVolumeSlice.actions;
export const synthTwoPanActions = SynthTwoPanSlice.actions;
export const synthTwoPitchActions = synthTwoPitchSlice.actions;

export { store };

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
