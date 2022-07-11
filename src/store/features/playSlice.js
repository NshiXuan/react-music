import { createSlice } from "@reduxjs/toolkit";

import { getSongDetail } from "../../services/play";

export const playSlice = createSlice({
  name: 'play',
  initialState: {
    currentSong: {}
  },
  reducers: {},
  extraReducers: {
    [getSongDetail.fulfilled]: (state, action) => {
      console.log(action);
    }
  }
})

export default playSlice.reducer