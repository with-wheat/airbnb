import SearchSvg from '@/assets/svg/SearchSvg'
import React, { memo } from 'react'
import { HeaderCenterWrapper } from './style'

const HeaderCenter = memo(() => {
  return (
    <HeaderCenterWrapper>
      <div className="wrapper">
        <div className="hint">
          <span>搜索房源和体验</span>
        </div>
        <div className="logo">
          <SearchSvg />
        </div>
      </div>
    </HeaderCenterWrapper>
  )
})

export default HeaderCenter
