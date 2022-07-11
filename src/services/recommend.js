import request from './request'
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getTopBanners = createAsyncThunk('getTopBanners', async () => {
  return await request({ url: '/banner' })
}
)

export const getHotRecommends = createAsyncThunk('getHotRecommends',
  async (limit) => {
    return await request({
      url: '/personalized',
      params: {
        limit
      }
    })
  })

export const getNewAlbum = createAsyncThunk('getNewAlbum', (limit) => {
  return request({
    url: '/top/album',
    params: {
      limit
    }
  })
}
)

// export const getNewAlbum = (limit) => {
//   return request({
//     url: '/top/album',
//     params: {
//       limit
//     }
//   })
// }



// export const getTopList = createAsyncThunk('getTopList', () => {
//   return request({
//     url: "/toplist",
//   })
// })

export const getRankSongs = createAsyncThunk('getRankSongs', () => {
  return request({
    url: '/playlist/detail?id=19723756',
    // url: '/playlist/detail',
    // params: {
    //   id
    // }
  })
})