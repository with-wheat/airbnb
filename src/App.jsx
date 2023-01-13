import React, { memo } from 'react'
import routers from '@/router'
import { useRoutes } from 'react-router-dom'
import AppHeader from './components/appHeader'
import AppFooter from './components/appFooter'
import { AppWrapper } from './appStyle'

const App = memo((props) => {
  return (
    <AppWrapper>
      <div className="header">
        <AppHeader />
      </div>
      <div className="content">{useRoutes(routers)}</div>
      <AppFooter />
    </AppWrapper>
  )
})

export default App
