import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const volumeSlice = createSlice({
  name: "volumeSlice",
  initialState: {
    volume: 30,
  },
  reducers: {
    setVolumeState(state, action: PayloadAction<number>) {
      state.volume = action.payload;
    },
  },
});

export { volumeSlice };
