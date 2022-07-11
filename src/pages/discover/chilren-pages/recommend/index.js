import React, { memo } from 'react'

import SxHotRecommend from './c-cpns/hot-recommend'
import SxNewAlbum from './c-cpns/new-album'
import SxRecommendRanking from './c-cpns/recommend-ranking'
import SxTopBanner from './c-cpns/top-banner'

import { Content, RecommendLeft, RecommendRight, RecommendWrapper } from './style'

const SxRecommend = memo(() => {


  return (
    <RecommendWrapper>
      <SxTopBanner />
      <Content className='wrap-v2'>
        <RecommendLeft>
          <SxHotRecommend />
          <SxNewAlbum />
          <SxRecommendRanking />
        </RecommendLeft>
        <RecommendRight></RecommendRight>
      </Content>
    </RecommendWrapper>
  )
})

export default SxRecommend