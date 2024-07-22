import { createSlice } from "@reduxjs/toolkit";
import { EffectRackInitialStateType } from "../../types";

const initialState: EffectRackInitialStateType[] = [];

const synthOneEffectRackSlice = createSlice({
  name: "synthOneEffectRackSlice",
  initialState: initialState,
  reducers: {},
});

export { synthOneEffectRackSlice };
