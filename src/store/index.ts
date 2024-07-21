import { configureStore } from "@reduxjs/toolkit";
import { synthOneOptionsSlice } from "./SynthOne/synthOneOptionsSlice";
import { synthOneEffectRackSlice } from "./SynthOne/synthOneEffectRackSlice";

const store = configureStore({
  reducer: {
    synthOneOptions: synthOneOptionsSlice.reducer,
    synthOneEffectRack: synthOneEffectRackSlice.reducer,
  },
});

export const synthOneOptionsActions = synthOneOptionsSlice.actions;
export const synthOneEffectRackActions = synthOneEffectRackSlice.actions;
export { store };

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
