import React, { memo } from 'react'

import { SongsCoverWrapper } from './style'
import { getCount, getSizeImage } from '@/utils/format-utils'

const SxSongsCover = memo((props) => {
  const { info } = props

  return (
    <SongsCoverWrapper>
      <div className='cover-top'>
        <img src={getSizeImage(info.picUrl, 140)} alt="" />
        <div className="cover sprite_cover">
          <div className="info sprite_cover">
            <span>
              <i className="erji sprite_icon"></i>
              {getCount(info.playCount)}
            </span>
            <i className="play sprite_icon"></i>
          </div>
        </div>
      </div>
      <div className='cover-bottom'>
        {info.name}
      </div>
      <div className='cover-source text-nowrap'>
        {info.creator && 'by' + info.creator.nickname}
      </div>
    </SongsCoverWrapper>
  )
})

export default SxSongsCover