import { configureStore } from "@reduxjs/toolkit";
import { synthOneOptionsSlice } from "./SynthOne/synthOneOptionsSlice";
import { synthOneEffectRackSlice } from "./SynthOne/synthOneEffectRackSlice";
import { synthOneVolumeSlice, synthTwoVolumeSlice } from "./params/volumeSlice";
import { SynthOnePanSlice, SynthTwoPanSlice } from "./params/panSlice";
import { synthOnePitchSlice, synthTwoPitchSlice } from "./params/pitchSlice";
import { synthOneDetuneSlice, synthTwoDetuneSlice } from "./params/detuneSlice";
import {
  synthOneEnvelopeSlice,
  synthTwoEnvelopeSlice,
} from "./params/envelopeSlice";
import {
  synthOneWaveformSlice,
  synthTwoWaveformSlice,
} from "./params/waveformSlice";
import {
  SynthOneLFOLinkSwitchSlice,
  SynthTwoLFOLinkSwitchSlice,
} from "./lfo/LFOLinkSwitch";
import {
  synthOneLFOMainControlsSlice,
  synthTwoLFOMainControlsSlice,
} from "./lfo/LFOMainControls";

const store = configureStore({
  reducer: {
    //SYNTH 1
    // synthOneOptions: synthOneOptionsSlice.reducer,
    synthOneEffectRack: synthOneEffectRackSlice.reducer,
    synthOneVolume: synthOneVolumeSlice.reducer,
    synthOnePan: SynthOnePanSlice.reducer,
    synthOnePitch: synthOnePitchSlice.reducer,
    synthOneDetune: synthOneDetuneSlice.reducer,
    synthOneWaveform: synthOneWaveformSlice.reducer,
    synthOneEnvelope: synthOneEnvelopeSlice.reducer,

    synthOneLFOLinkSwitch: SynthOneLFOLinkSwitchSlice.reducer,
    synthOneLFOMainControls: synthOneLFOMainControlsSlice.reducer,

    // SYNTH 2
    synthTwoVolume: synthTwoVolumeSlice.reducer,
    synthTwoPan: SynthTwoPanSlice.reducer,
    synthTwoPitch: synthTwoPitchSlice.reducer,
    synthTwoDetune: synthTwoDetuneSlice.reducer,
    synthTwoWaveform: synthTwoWaveformSlice.reducer,
    synthTwoEnvelopeSlice: synthTwoEnvelopeSlice.reducer,

    synthTwoLFOLinkSwitch: SynthTwoLFOLinkSwitchSlice.reducer,
    synthTwoLFOMainControls: synthTwoLFOMainControlsSlice.reducer,
  },
});

// SYNTH 1
export const synthOneOptionsActions = synthOneOptionsSlice.actions;
export const synthOneEffectRackActions = synthOneEffectRackSlice.actions;
export const synthOneVolumeActions = synthOneVolumeSlice.actions;
export const synthOnePanActions = SynthOnePanSlice.actions;
export const synthOnePitchActions = synthOnePitchSlice.actions;
export const synthOneDetuneActions = synthOneDetuneSlice.actions;
export const synthOneWaveformActions = synthOneWaveformSlice.actions;
export const synthOneEnvelopeActions = synthOneEnvelopeSlice.actions;

export const synthOneLFOLinkSwitchActions = SynthOneLFOLinkSwitchSlice.actions;
export const synthOneLFOMainControlsActions =
  synthOneLFOMainControlsSlice.actions;

// SYNTH 2
export const synthTwoVolumeActions = synthTwoVolumeSlice.actions;
export const synthTwoPanActions = SynthTwoPanSlice.actions;
export const synthTwoPitchActions = synthTwoPitchSlice.actions;
export const synthTwoDetuneActions = synthTwoDetuneSlice.actions;
export const synthTwoWaveformActions = synthTwoWaveformSlice.actions;
export const synthTwoEnvelopeActions = synthTwoEnvelopeSlice.actions;

export const synthTwoLFOLinkSwitchActions = SynthTwoLFOLinkSwitchSlice.actions;
export const synthTwoLFOMainControlsActions =
  synthTwoLFOMainControlsSlice.actions;

export { store };

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
