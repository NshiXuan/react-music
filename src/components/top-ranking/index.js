import React, { memo } from 'react'

import { getSizeImage } from '../../utils/format-utils'
import { TopRankingWrapper } from './style'

const SxTopRanking = memo((props) => {
  const { info } = props

  return (
    <TopRankingWrapper>
      <div className="header">
        <div className="image">
          <img src={info.coverImgUrl} alt="" />
          <a href="/todo" className='image_cover'></a>
        </div>
      </div>
    </TopRankingWrapper>
  )
})

export default SxTopRanking