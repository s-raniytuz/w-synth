import { createSlice } from "@reduxjs/toolkit";
import { RackInitialStateType } from "../types/storeTypes";

const initialState: RackInitialStateType[] = [];

const synthOneEffectRackSlice = createSlice({
  name: "synthOneEffectRackSlice",
  initialState: initialState,
  reducers: {},
});

export { synthOneEffectRackSlice };
