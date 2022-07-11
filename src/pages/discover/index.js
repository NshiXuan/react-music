import React, { memo, useEffect } from 'react'

import { NavLink, Outlet } from 'react-router-dom'

import { DiscoverWrapper, TopMenu } from './style'
import { discoverMenu } from '../../common/local-data'
import request from '@/services/request'

const SXDiscover = memo(() => {
  return (
    <DiscoverWrapper>
      <div className="top">
        <TopMenu className='wrap-v1'>
          {
            discoverMenu.map((item, index) => {
              return (
                <div className="item" key={item.title}>
                  <NavLink to={item.link}>{item.title}</NavLink>
                </div>
              )
            })
          }
        </TopMenu>
      </div>
      <Outlet />
    </DiscoverWrapper>
  )
})

export default SXDiscover