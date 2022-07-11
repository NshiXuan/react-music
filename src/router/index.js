import React from 'react'
import { Navigate } from "react-router-dom"

const SXDiscover = React.lazy(() => import("@/pages/discover"))
const SxAlbum = React.lazy(() => import("../pages/discover/chilren-pages/album"))
const SxArtist = React.lazy(() => import("../pages/discover/chilren-pages/artist"))
const SxDjRadio = React.lazy(() => import("../pages/discover/chilren-pages/djradio"))
const SxRanking = React.lazy(() => import("../pages/discover/chilren-pages/ranking"))
const SxRecommend = React.lazy(() => import("../pages/discover/chilren-pages/recommend"))
const SxSongs = React.lazy(() => import("../pages/discover/chilren-pages/songs"))
const SXFriends = React.lazy(() => import("../pages/friend"))
const SXMine = React.lazy(() => import("../pages/mine"))

// import SXDiscover from "../pages/discover"
// import SxAlbum from "../pages/discover/chilren-pages/album"
// import SxArtist from "../pages/discover/chilren-pages/artist"
// import SxDjRadio from "../pages/discover/chilren-pages/djradio"
// import SxRanking from "../pages/discover/chilren-pages/ranking"
// import SxRecommend from "../pages/discover/chilren-pages/recommend"
// import SxSongs from "../pages/discover/chilren-pages/songs"

// import SXFriends from "../pages/friend"
// import SXMine from "../pages/mine"

const routes = [
  {
    path: '/',
    element: <Navigate to="/discover" />  // 重定向
  },
  {
    path: '/discover',
    element: <SXDiscover />,
    children: [
      {
        path: '/discover',
        element: <Navigate to="/discover/recommend" />
      },
      {
        path: '/discover/recommend',
        element: <SxRecommend />
      },
      {
        path: '/discover/ranking',
        element: <SxRanking />
      },
      {
        path: '/discover/songs',
        element: <SxSongs />
      },
      {
        path: '/discover/djradio',
        element: <SxDjRadio />
      },
      {
        path: '/discover/artist',
        element: <SxArtist />
      },
      {
        path: '/discover/album',
        element: <SxAlbum />
      },
    ]
  },
  {
    path: '/mine',
    element: <SXMine />
  },
  {
    path: '/friend',
    element: <SXFriends />
  }
]

export default routes 