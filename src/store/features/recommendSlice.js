import { createSlice } from "@reduxjs/toolkit";

import {
  getTopBanners,
  getHotRecommends,
  getNewAlbum,
  getTopList,
  getRankSongs
} from "@/services/recommend";
// import { increment } from "./counterSlice";



export const recommendSlice = createSlice({
  name: 'recommend',
  initialState: {
    topBanners: [],
    hotRecommends: [],
    newAlbums: [],
    // rankIds: []
    ranks: []
  },
  reducers: {},
  extraReducers: {
    // [increment]: (state, action) => {
    //   state.topBanners = action.payload.step
    // },
    // [getTopBanners.pending](state, action) {
    //   console.log('进行中', state);
    // },
    [getTopBanners.fulfilled]: (state, { payload }) => {
      // console.log('请求成功', state.topBanners);
      // return state = { ...state, topBanners: action.payload.banners }
      state.topBanners = payload.banners
    },
    // [getTopBanners.rejected]: (state, action) => {
    //   console.log('请求失败', state); 
    // }
    [getHotRecommends.fulfilled]: (state, { payload }) => {
      state.hotRecommends = payload.result
    },
    [getNewAlbum.fulfilled]: (state, action) => {
      state.newAlbums = action.payload.albums
    },
    // [getTopList.fulfilled]: (state, { payload }) => {
    //   state.rankIds = payload.list
    // },
    [getRankSongs.fulfilled]: (state, { payload }) => {
      // console.log(payload, 'song');
      state.ranks = payload.playlist
    }
  }
})

// export const { changeTopBanners } = recommendSlice.actions
export default recommendSlice.reducer