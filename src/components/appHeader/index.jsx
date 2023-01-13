import React, { memo } from 'react'
import HeaderLeft from './c-cpm/headerLeft'
import HeaderRight from './c-cpm/headerRight'
import { AppHeaderWrapper } from './style'
import HeaderCenter from './c-cpm/headerCenter/index'

const AppHeader = memo(() => {
  return (
    <AppHeaderWrapper>
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </AppHeaderWrapper>
  )
})

export default AppHeader
