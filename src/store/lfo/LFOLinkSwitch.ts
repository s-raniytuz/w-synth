import { evaluateLocalStorage } from "@/functions/evaluateLocalStorage";
import {
  LFO_LINK_DEFAULT,
  LFO_SWITCH_DEFAULT,
} from "@/localStorage/localStorageDefaults";
import { LinkedNode } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const synthOneInit = {
  isEnabled: evaluateLocalStorage("synthOneLfoSwitch", LFO_SWITCH_DEFAULT),
  link: evaluateLocalStorage("synthOneLfoLink", LFO_LINK_DEFAULT),
};
const synthTwoInit = {
  isEnabled: evaluateLocalStorage("synthTwoLfoSwitch", LFO_SWITCH_DEFAULT),
  link: evaluateLocalStorage("synthTwoLfoLink", LFO_LINK_DEFAULT),
};

const SynthOneLFOLinkSwitchSlice = createSlice({
  name: "LFOLinkSwitch",
  initialState: synthOneInit,
  reducers: {
    setSwitch(state) {
      state.isEnabled = !state.isEnabled;
    },
    setLink(state, action: PayloadAction<LinkedNode>) {
      state.link = action.payload;
    },
  },
});
const SynthTwoLFOLinkSwitchSlice = createSlice({
  name: "SynthTwoLfoLinkSwitch",
  initialState: synthTwoInit,
  reducers: {
    setSwitch(state) {
      state.isEnabled = !state.isEnabled;
    },
    setLink(state, action: PayloadAction<LinkedNode>) {
      state.link = action.payload;
    },
  },
});

export { SynthOneLFOLinkSwitchSlice, SynthTwoLFOLinkSwitchSlice };
