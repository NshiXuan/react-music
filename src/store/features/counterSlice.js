import { createSlice } from "@reduxjs/toolkit"

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 1,
    title: 'redux toolkit pre'
  },
  reducers: {
    increment(state, { payload }) {
      state.count = state.count + payload.step
    },
    decrement(state) {
      state.count -= 1
    }
  }
})

// 下面的actions与reducers中的对应
export const { increment, decrement } = counterSlice.actions

// 下面的reducer是暴露出去的initialState
export default counterSlice.reducer