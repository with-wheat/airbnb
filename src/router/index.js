import { lazy } from 'react'
import { Navigate } from 'react-router-dom'

const Home = lazy(() => import('@/views/home'))
const Detail = lazy(() => import('@/views/details'))
const Entire = lazy(() => import('@/views/Entire'))
const NotFund = lazy(() => import('@/components/NotFund'))

const routers = [
  {
    path: '/',
    element: <Navigate to={'/home'} />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/detail',
    element: <Detail />,
  },
  {
    path: '/entire',
    element: <Entire />,
  },
  {
    path: '*',
    element: <NotFund />,
  },
]

export default routers
