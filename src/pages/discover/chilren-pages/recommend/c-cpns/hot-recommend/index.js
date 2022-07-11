import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { HotRecommendWrapper } from './style'
import { getHotRecommends } from '@/services/recommend'
import SxThemeHeaderRCM from '@/components/theme-header-rcm'
import SxSongsCover from '../../../../../../components/songs-cover'


const SxHotRecommend = memo(() => {
  const { hotRecommends } = useSelector(state => state.recommend, shallowEqual)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getHotRecommends(8))
  }, [dispatch])

  return (
    <HotRecommendWrapper>
      <SxThemeHeaderRCM title="热门推荐" keywords={['华语', '流行', '民谣', '摇滚', '电子']} />
      <div className='recommend-list'>
        {
          hotRecommends.map((item, index) => {
            return <SxSongsCover key={item.id} info={item} >{item.name}</SxSongsCover>
          })
        }
      </div>
    </HotRecommendWrapper>
  )
})

export default SxHotRecommend