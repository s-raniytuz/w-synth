import { configureStore } from "@reduxjs/toolkit";
import { synthOneOptionsSlice } from "./SynthOne/synthOneOptionsSlice";
import { synthOneEffectRackSlice } from "./SynthOne/synthOneEffectRackSlice";
import { volumeSlice } from "./params/volumeSlice";

const store = configureStore({
  reducer: {
    synthOneOptions: synthOneOptionsSlice.reducer,
    synthOneEffectRack: synthOneEffectRackSlice.reducer,
    volumeState: volumeSlice.reducer,
  },
});

export const synthOneOptionsActions = synthOneOptionsSlice.actions;
export const synthOneEffectRackActions = synthOneEffectRackSlice.actions;
export const volumeActions = volumeSlice.actions;
export { store };

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
