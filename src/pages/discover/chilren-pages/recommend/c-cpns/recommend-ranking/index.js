import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import SxThemeHeaderRCM from '@/components/theme-header-rcm'
import { RankingWrapper } from './style'
import { getTopList, getRankSongs } from '@/services/recommend'
import SxTopRanking from '@/components/top-ranking'

const SxRecommendRanking = memo(() => {
  const ranks = useSelector(state => state.recommend, shallowEqual)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getRankSongs())
  }, [dispatch])

  return (
    <RankingWrapper>
      <SxThemeHeaderRCM title="榜单" />
      <div className="tops">
        <SxTopRanking info={ranks} />
      </div>
    </RankingWrapper>
  )
})

export default SxRecommendRanking