import { configureStore } from "@reduxjs/toolkit";
import { synthOneOptionsSlice } from "./SynthOne/synthOneOptionsSlice";
import { synthOneEffectRackSlice } from "./SynthOne/synthOneEffectRackSlice";
import { synthOneVolumeSlice, synthTwoVolumeSlice } from "./params/volumeSlice";
import { SynthOnePanSlice, SynthTwoPanSlice } from "./params/panSlice";

const store = configureStore({
  reducer: {
    //SYNTH 1
    synthOneOptions: synthOneOptionsSlice.reducer,
    synthOneEffectRack: synthOneEffectRackSlice.reducer,
    synthOneVolume: synthOneVolumeSlice.reducer,
    synthOnePan: SynthOnePanSlice.reducer,

    // SYNTH 2
    synthTwoVolume: synthTwoVolumeSlice.reducer,
    synthTwoPan: SynthTwoPanSlice.reducer,
  },
});

// SYNTH 1
export const synthOneOptionsActions = synthOneOptionsSlice.actions;
export const synthOneEffectRackActions = synthOneEffectRackSlice.actions;
export const synthOneVolumeActions = synthOneVolumeSlice.actions;
export const synthOnePanActions = SynthOnePanSlice.actions;

// SYNTH 2
export const synthTwoVolumeActions = synthTwoVolumeSlice.actions;
export const synthTwoPanActions = SynthTwoPanSlice.actions;

export { store };

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
