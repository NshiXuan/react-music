import request from './request'
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getSongDetail = createAsyncThunk('getSongDetail', async (ids) => {
  return await request({
    url: '/song/detail',
    params: {
      ids
    }
  })
})

// export function getSongDetail(ids) {
//   return request({
//     url: "/song/detail",
//     params: {
//       ids
//     }
//   })
// }