import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "./features/counterSlice";
import playSlice from "./features/playSlice";
import recommendSlice from "./features/recommendSlice";

const store = configureStore({
  reducer: {
    counter: counterSlice,
    recommend: recommendSlice,
    play: playSlice
  }
})

export default store