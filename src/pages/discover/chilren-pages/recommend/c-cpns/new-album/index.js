import React, { memo, useEffect, useRef } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { Carousel } from 'antd';
import SxThemeHeaderRCM from '@/components/theme-header-rcm'
import { getNewAlbum } from '@/services/recommend'
import { AlbumWrapper } from './style'
import SxAlbumCover from '../../../../../../components/album-cover';



const SxNewAlbum = memo(() => {
  const { newAlbums } = useSelector(state => state.recommend, shallowEqual)
  const dispatch = useDispatch()
  const pageRef = useRef()

  useEffect(() => {
    dispatch(getNewAlbum(10))
  }, [dispatch])

  return (
    <AlbumWrapper>
      <SxThemeHeaderRCM title="新碟上架" />
      <div className="content">
        <button className='arrow arrow-left sprite_02' onClick={e => pageRef.current.prev()}></button>
        <div className="album">
          <Carousel dots={false} ref={pageRef}>
            {
              [0, 1].map((item) => {
                return (
                  <div key={item} className="page">
                    {
                      newAlbums.slice(item * 5, (item + 1) * 5).map(albumItem => {
                        return <SxAlbumCover key={albumItem.id} info={albumItem} size={100} width={118} bgp='-570px' />
                      })
                    }
                  </div>
                )
              })
            }
          </Carousel>
        </div>
        <button className='arrow arrow-right sprite_02' onClick={e => pageRef.current.next()} ></button>
      </div>
    </AlbumWrapper >
  )
})

export default SxNewAlbum