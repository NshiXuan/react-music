import React, { memo } from 'react'
import { useRoutes, HashRouter, Outlet } from 'react-router-dom'

import routes from './router'

import SXAppFooter from './components/app-footer'
import SXAppHeader from './components/app-header'
import SxAppPlayerBar from './pages/player/app-player-bar'
import { Suspense } from 'react'

const Layout = () => {
  const element = useRoutes(routes)

  return (
    <div>
      <SXAppHeader />
      <Suspense fallback={<div>page loading</div>}>
        {element}
      </Suspense>
      <SXAppFooter />
      <SxAppPlayerBar />
    </div>
  )
}

const App = memo(() => {
  return (
    <HashRouter>
      <Layout />
    </HashRouter>
  )
})

export default App